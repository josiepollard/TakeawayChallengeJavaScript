describe("Menu", function(){
  var menu;

  beforeEach(function() {
    menu = new Menu();
  });

describe("menu items", function() {
  it("has the correct items", function() {
    expect(menu.items).toEqual(jasmine.objectContaining({"Pizza": 1,"Fries": 2, "Cola": 3 }))
  });
});
});
