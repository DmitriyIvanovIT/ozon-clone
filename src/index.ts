import '@/style/style.scss';
import modalCart from "@/modules/modalCart";
import {firebaseInit} from "@/lib/firebaseInit";
import search from "@/modules/search";
import loadData from "@/modules/loadData";
import catalog from "@/modules/catalog";
import filters from "@/modules/filters";

modalCart();

const database = firebaseInit();

loadData(database);
search(database);
catalog(database);
filters(database);
