Codereviewer::Application.routes.draw do
  

  get "profiles/show"
  get '/:username', to: 'profiles#show'

  devise_for :users

  resources :projects do
    resources :project_comments, :only => [:create]
  end
  
  root :to => 'projects#index'

end
