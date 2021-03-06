class Admins::LabelController < ApplicationController

  layout "admin"

  def index
    @labels = Label.all
    @label = Label.new
  end

  def create
    @label = Label.new(genre_params)
    if @label.save
      flash[:info] = 'レーベルを新規登録しました！'
      redirect_to new_admins_product_path
    else
      @labels = Label.all
      render :index
    end
  end

  def destroy
    @label = Label.find(params[:id])
    @label.destroy
    redirect_to admins_label_index_path
  end

  private
    def genre_params
      params.require(:label).permit(:label)
    end

end
