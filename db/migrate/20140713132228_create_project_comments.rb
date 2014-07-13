class CreateProjectComments < ActiveRecord::Migration
  def change
    create_table :project_comments do |t|
      t.string :username
      t.text :body
      t.integer :project_id

      t.timestamps
    end
  end
end
