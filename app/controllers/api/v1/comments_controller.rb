class Api::V1::CommentsController < ApplicationController
  before_action :set_comment, only: [:show, :update, :destroy]
  respond_to :json

  # GET /comments
  def index
    respond_with Comment.all
  end

  # GET /comments/1
  def show
    respond_with @comment
  end

  # POST /comments
  def create
    @comment = Comment.new(comment_params)

    if @comment.save
      respond_with @comment, status: :created, location: [:api, :v1, @comment]
    else
      render json: { errors: @comment.errors }, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /comments/1
  def update
    if @comment.update(comment_params)
      respond_with @comment, status: :ok, location: [:api, :v1, @comment]
    else
      render json: { errors: @comment.errors }, status: :unprocessable_entity
    end
  end

  # DELETE /comments/1
  def destroy
    @comment.destroy
    head :no_content
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_comment
    @comment = Comment.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def comment_params
    params.require(:comment).permit(:text, :post_id)
  end
end
