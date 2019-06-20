
class TabLink {
  constructor(element) {
    // Assign this.element to the passed in DOM element
    // this.element;
    this.element = element;
    // console.log('element', element)
    
    // Get the custom data attribute on the Link
    // this.data;
    this.data = this.element.dataset.tab;
    
    
    // Using the custom data attribute get the associated Item element
    // this.itemElement;
    this.item = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);
    // Using the Item element, create a new instance of the TabItem class
    // this.tabItem;
    this.tabItem = new TabItem(this.item)
    // Add a click event listener on this instance, calling the select method on click

    this.element.addEventListener('click', () => {
      this.select()
    });

  };

  select() {
    // Get all of the elements with the tabs-link class
    // const links;
    const links = document.querySelectorAll('.tabs-link');
    // console.log(links)


    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    // Array.from(links).forEach();
    links.forEach(current => {
      current.classList.remove('tabs-link-selected');
    })

    // Add a class named "tabs-link-selected" to this link
    // this.element;
    this.element.classList.add('tabs-link-selected');
    
    // Call the select method on the item associated with this link
    this.tabItem.select();

  }
}

class TabItem {
  constructor(element) {
    // Assign this.element to the passed in element
    // this.element;
    this.element = element;
  }

  select() {
    console.log('Logged')
    // Select all ".tabs-item" elements from the DOM
    // const items;
    const items = document.querySelectorAll('.tabs-item');

    // Remove the class "tabs-item-selected" from each element
    items.forEach(current => {
      current.classList.remove('tabs-item-selected');
    });
    
    // Add a class named "tabs-item-selected" to this element
    //this.element;
    this.element.classList.add('tabs-item-selected')
  }
}

/* START HERE: 

- Select all classes named ".tabs-link" and assign that value to the links variable

- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/

links = document.querySelectorAll(".tabs-link").forEach(tabLink => new TabLink(tabLink));


// stretch solution code

// class TabsItem {
//   constructor(element) {
//     this.element = element;
//   }

//   select() {
//     this.element.classList.add('tabs-item-selected');
//   }

//   deselect() {
//     this.element.classList.remove('tabs-item-selected');
//   }
// }

// class TabsLink {
//   constructor(element, parent) {
//     this.element = element;
//     this.tabs = parent;
//     this.tabsItem = parent.getTab(this.element.dataset.tab);
//     this.tabsItem = new TabsItem(this.tabsItem);
//     this.element.addEventListener('click', () => {
//       this.tabs.updateActive(this);
//       this.select()
//     });
//   };

//   select() {
//     this.element.classList.add('tabs-link-selected')
//     this.tabsItem.select();
//   }

//   deselect() {
//     this.element.classList.remove('tabs-link-selected');
//     this.tabsItem.deselect();
//   }
// }

// class Tabs {
//   constructor(element) {
//     this.element = element;
//     this.links = this.element.querySelectorAll('.tabs-link');
//     this.links = Array.from(this.links).map(link => {
//       return new TabsLink(link, this);
//     });
//     this.activeLink = this.links[0];
//     this.init();
//   }

//   init() {
//     this.activeLink.select()
//   }

//   updateActive(newActive) {
//     this.activeLink.deselect();
//     this.activeLink = newActive;
//   }

//   getTab(data) {
//     return this.element.querySelector(`.tabs-item[data-tab="${data}"]`)
//   }

// }

// let tabs = document.querySelectorAll('.tabs');
// tabs = Array.from(tabs).map( tab => new Tabs(tab));