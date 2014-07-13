class ProfilesController < ApplicationController
  def show
  	@user = User.where(username: params[:username]).first
  	if @user
  		@projects = @user.projects
  		render action: :show
  	else
  		render file: 'public/404', status: 404, formats: [:html]
  	end
  end
end
