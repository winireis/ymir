Rails.application.routes.draw do
  scope '/api' do
    get '/hello', to: 'home#hello'
    post '/signup', to: 'users#create'
  end
end
