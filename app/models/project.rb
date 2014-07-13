class Project < ActiveRecord::Base
  attr_accessible :content, :description, :title, :user_id, :picture, :language

  belongs_to :user

  has_many :project_comments

  mount_uploader :picture, PictureUploader

end
