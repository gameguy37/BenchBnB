class Api::SessionsController < ApplicationController
    def destroy
        if current_user
            logout
            render json: {}
        else
            render json: {}, status: 404
        end
    end

    def create
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        if @user
            login(@user)
            render :show
        else
            render json: ["Invalid Credentials"], status: 422
        end
    end

end
