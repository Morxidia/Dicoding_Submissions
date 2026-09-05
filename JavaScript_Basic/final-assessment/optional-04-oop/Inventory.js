/**
 * TODO
 * Selesaikan kode pembuatan class Inventory dengan ketentuan:
 * - Memiliki properti `items` untuk menampung daftar item dalam bentuk array.
 * - Memiliki method `addItem` untuk menambahkan item ke properti `items`.
 * - Memiliki method `removeItem` untuk menghapus item berdasarkan `id`.
 * - Memiliki method `listItems` untuk mengembalikan string yang merupakan informasi detail barang (dipanggil dari fungs `item.displayDetails()`).
 */
import Item from './Item.js';

class Inventory {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    if (!(item instanceof Item)) {
      throw new Error('Objek yang ditambahkan harus merupakan instance dari class Item');
    }

    const isExist = this.items.some((existingItem) => existingItem.id === item.id);
    if (isExist) {
      throw new Error(`Barang dengan ID ${item.id} sudah ada dalam inventaris`);
    }

    this.items.push(item);
  }

  removeItem(id) {
    const initialLength = this.items.length;
    this.items = this.items.filter((item) => item.id !== id);

    if (this.items.length === initialLength) {
      throw new Error(`Barang dengan ID ${id} tidak ditemukan`);
    }
  }

  updateItem(id, name, quantity, price) {
    const item = this.items.find((item) => item.id === id);
    if (!item) {
      throw new Error(`Barang dengan ID ${id} tidak ditemukan`);
    }

    item.updateDetails(name, quantity, price);
  }

  listItems() {
    return this.items;
  }
}


// Jangan hapus kode di bawah ini!
export default Inventory;
