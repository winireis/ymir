class HomeController < ApplicationController
  def hello
    render json: {message: "Hello World, from inside the API!"}, status: :ok
  end
end
