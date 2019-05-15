Rails.application.routes.draw do
  scope '/api' do
    get '/hello', to: 'home#hello'
  end
end
