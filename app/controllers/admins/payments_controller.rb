class Admins::PaymentsController < ApplicationController

  layout "admin"

  def index
    @payments = current_user.payments.page(params[:page]).reverse_order
  end

  def show
    @payment = Payment.find(params[:id])
    @purchase_products = @payment.purchase_products
  end

  def update
  end

private
  def payment_params
  	params.require(:payment).permit(:user, :payment_method, :shipping_last_name, :shipping_first_name, :shipping_postal_code, :shipping_address, :order_status)
  end
end
