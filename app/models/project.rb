class Project < ActiveRecord::Base
  attr_accessible :content, :description, :title, :user_id, :picture, :language, :avatar
  attr_accessor :avatar_file_name, :avatar_content_type, :avatar_file_size, :avatar_updated_at

  belongs_to :user

  has_many :project_comments

  mount_uploader :picture, PictureUploader

  # This method associates the attribute ":avatar" with a file attachment
  has_attached_file :avatar, styles: {
    thumb: '150x150>',
    square: '200x200#',
    medium: '600x600>'
  }

  # Validate the attached image is image/jpg, image/png, etc
  validates_attachment_content_type :avatar, :content_type => /\Aimage\/.*\Z/


end
