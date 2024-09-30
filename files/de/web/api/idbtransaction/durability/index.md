---
title: "IDBTransaction: durability-Eigenschaft"
short-title: durability
slug: Web/API/IDBTransaction/durability
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{securecontext_header}}{{APIRef("IndexedDB")}}

Die schreibgeschützte Eigenschaft **`durability`** des [`IDBTransaction`](/de/docs/Web/API/IDBTransaction)-Interfaces gibt den Haltbarkeitshinweis zurück, mit dem die Transaktion erstellt wurde.
Dies ist ein Hinweis an den Benutzeragent, ob bei Abschluss der Transaktion die Leistung oder die Haltbarkeit priorisiert werden soll.

Der Wert dieser Eigenschaft wird im [`options.durability`](/de/docs/Web/API/IDBDatabase/transaction#options)-Parameter definiert, wenn eine Transaktion mit [`IDBDatabase.transaction()`](/de/docs/Web/API/IDBDatabase/transaction) erstellt wird.

## Wert

Einer der folgenden literalen {{jsxref('String', 'Strings')}}:

- `"strict"`
  - : Der Benutzeragent kann davon ausgehen, dass die Transaktion erst dann erfolgreich abgeschlossen wurde, wenn alle ausstehenden Änderungen erfolgreich auf ein dauerhaftes Speichermedium geschrieben wurden.
- `"relaxed"`
  - : Der Benutzeragent kann davon ausgehen, dass die Transaktion erfolgreich abgeschlossen wurde, sobald alle ausstehenden Änderungen auf das Betriebssystem geschrieben wurden, ohne anschließende Überprüfung.
- `"default"`
  - : Der Benutzeragent sollte sein standardmäßiges Haltbarkeitsverhalten für den Speicher-Bucket verwenden.
    Dies ist die Standardeinstellung für Transaktionen, wenn nicht anders angegeben.

## Beispiele

Für ein vollständiges Arbeitsbeispiel siehe unsere [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) App ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
