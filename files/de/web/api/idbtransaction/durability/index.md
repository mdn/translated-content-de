---
title: "IDBTransaction: durability-Eigenschaft"
short-title: durability
slug: Web/API/IDBTransaction/durability
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{securecontext_header}}{{APIRef("IndexedDB")}}

Die schreibgeschützte Eigenschaft **`durability`** der Schnittstelle [`IDBTransaction`](/de/docs/Web/API/IDBTransaction) gibt den Dauerhaftigkeitshinweis zurück, mit dem die Transaktion erstellt wurde. Dies ist ein Hinweis an den Benutzeragenten, ob die Leistung oder die Beständigkeit bei der Übertragung der Transaktion priorisiert werden soll.

Der Wert dieser Eigenschaft wird im Parameter [`options.durability`](/de/docs/Web/API/IDBDatabase/transaction#options) definiert, wenn eine Transaktion mit [`IDBDatabase.transaction()`](/de/docs/Web/API/IDBDatabase/transaction) erstellt wird.

## Wert

Einer der folgenden wörtlichen {{jsxref('String', 'Zeichenfolgen')}}:

- `"strict"`
  - : Der Benutzeragent darf die Transaktion erst dann als erfolgreich abgeschlossen betrachten, nachdem überprüft wurde, dass alle ausstehenden Änderungen erfolgreich auf ein dauerhaftes Speichermedium geschrieben wurden.
- `"relaxed"`
  - : Der Benutzeragent darf die Transaktion als erfolgreich abgeschlossen betrachten, sobald alle ausstehenden Änderungen in das Betriebssystem geschrieben wurden, ohne nachfolgende Überprüfung.
- `"default"`
  - : Der Benutzeragent sollte sein standardmäßiges Dauerhaftigkeitsverhalten für den Speicher-Bucket verwenden.
    Dies ist der Standard für Transaktionen, wenn nicht anders angegeben.

## Beispiele

Für ein voll funktionsfähiges Beispiel schauen Sie sich unsere [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) App an ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
