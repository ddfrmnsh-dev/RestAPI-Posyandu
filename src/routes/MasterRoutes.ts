import { Express } from "express";
import MasterController from "../controllers/MasterController";

export default function (app:Express) {

   app.route("/petugas")
         .get(MasterController.getPetugas)
         .post(MasterController.insertPetugas)

   app.route("/petugas/:id")
         .put(MasterController.updatePetugas)
         .delete(MasterController.deletePetugas)

   app.route("/imunisasi")
         .post(MasterController.insertImunisasi)
         .get(MasterController.getImunisasi)

   app.route("/imunisasi/:id")
         .put(MasterController.updateImunisasi)
         .delete(MasterController.deleteImunisasi)

}