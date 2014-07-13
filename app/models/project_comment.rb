class ProjectComment < ActiveRecord::Base
  attr_accessible :body, :project_id, :username

  belongs_to :project

  validates_presence_of :body

end
