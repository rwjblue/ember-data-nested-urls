class Api::V1::PostsController < ApplicationController
  before_action :set_post, only: [:show, :update, :destroy]
  respond_to :json

  # GET /posts
  def index
    respond_with Post.all
  end

  # GET /posts/1
  def show
    respond_with @post
  end

  # POST /posts
  def create
    @post = Post.new(post_params)

    if @post.save
      respond_with @post, status: :created, location: [:api, :v1, @post]
    else
      render json: { errors: @post.errors }, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /posts/1
  def update
    if @post.update(post_params)
      respond_with @post, status: :ok, location: [:api, :v1, @post]
    else
      render json: { errors: @post.errors }, status: :unprocessable_entity
    end
  end

  # DELETE /posts/1
  def destroy
    @post.destroy
    head :no_content
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_post
    @post = Post.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def post_params
    params.require(:post).permit(:title, :text)
  end
end
