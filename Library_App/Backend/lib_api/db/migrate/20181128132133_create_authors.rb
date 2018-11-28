class CreateAuthors < ActiveRecord::Migration[5.2]
  def change
    create_table :authors do |t|
      t.string :fName
      t.string :lName
      t.string :email

      t.timestamps
    end
  end
end
