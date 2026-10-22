---
title: WebAssembly-Referenzanweisungen
slug: WebAssembly/Reference/Reference
l10n:
  sourceCommit: 52218d727e31f467a5fd52133902c4a8f1c9a8fe
---

Diese Seiten beschreiben die in Wasm verfügbaren Referenzanweisungen zum Erstellen, Prüfen und Konvertieren von Referenzen. Referenzen sind undurchsichtige Handles auf Funktionen, Host-Werte (beispielsweise JavaScript-Werte) oder Objekte mit Garbage Collection. Zu den gängigen Referenztypen gehören [`funcref`](/de/docs/WebAssembly/Reference/Value_types/funcref) und [`externref`](/de/docs/WebAssembly/Reference/Value_types/externref).

- [`ref.as_non_null`](/de/docs/WebAssembly/Reference/Reference/as_non_null)
  - : Wandelt eine Referenz, die null sein kann, in eine Referenz um, die nicht null sein kann. Ist die Referenz null, wird ein Trap ausgelöst.
- [`ref.cast`](/de/docs/WebAssembly/Reference/Reference/cast)
  - : Castet eine Referenz in einen bestimmten Referenztyp. Schlägt der Cast fehl, wird ein Trap ausgelöst.
- [`ref.eq`](/de/docs/WebAssembly/Reference/Reference/eq)
  - : Prüft, ob zwei Referenzen gleich sind.
- [`ref.func`](/de/docs/WebAssembly/Reference/Reference/func)
  - : Erstellt eine Referenz auf eine bestimmte Funktion.
- [`ref.is_null`](/de/docs/WebAssembly/Reference/Reference/is_null)
  - : Prüft, ob eine Referenz null ist.
- [`ref.null`](/de/docs/WebAssembly/Reference/Reference/null)
  - : Erstellt eine Nullreferenz eines bestimmten Heap-Typs.
- [`ref.test`](/de/docs/WebAssembly/Reference/Reference/test)
  - : Prüft, ob eine Referenz einem bestimmten Referenztyp entspricht.
