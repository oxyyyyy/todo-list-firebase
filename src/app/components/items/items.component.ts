import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/item';
import { NewItem } from '../../models/newItem';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[];
  inputData: NewItem = {
    title: '',
    id: 0
  };

  constructor(private itemService: ItemService) {}

  ngOnInit() {
    this.itemService.getItems().subscribe(items => {
      this.items = items;
    });
  }

  addItem() {
    this.itemService.addItem(this.inputData);
    console.log(this.inputData);
  }

}
