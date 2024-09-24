---
title: "IDBTransaction: durability-Eigenschaft"
short-title: durability
slug: Web/API/IDBTransaction/durability
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{securecontext_header}}{{APIRef("IndexedDB")}}

Die **`durability`**-Eigenschaft der {{domxref("IDBTransaction")}}-Schnittstelle gibt den Langlebigkeits-Hinweis zurück, mit dem die Transaktion erstellt wurde. Dies ist ein Hinweis für den Benutzeragenten, ob bei der Durchführung der Transaktion Leistung oder Langlebigkeit priorisiert werden soll.

Der Wert dieser Eigenschaft wird im [`options.durability`](/de/docs/Web/API/IDBDatabase/transaction#options)-Parameter definiert, wenn eine Transaktion mit {{domxref("IDBDatabase.transaction()")}} erstellt wird.

## Wert

Einer der folgenden literalen {{jsxref('String', 'Strings')}}:

- `"strict"`
  - : Der Benutzeragent kann die Transaktion nur dann als erfolgreich abgeschlossen betrachten, nachdem er überprüft hat, dass alle ausstehenden Änderungen erfolgreich in ein persistentes Speichermedium geschrieben wurden.
- `"relaxed"`
  - : Der Benutzeragent kann die Transaktion als erfolgreich abgeschlossen betrachten, sobald alle ausstehenden Änderungen in das Betriebssystem geschrieben wurden, ohne nachfolgende Überprüfung.
- `"default"`
  - : Der Benutzeragent sollte sein Standardverhalten hinsichtlich der Langlebigkeit für den Speicher-Bucket verwenden. Dies ist der Standard für Transaktionen, wenn nicht anders angegeben.

## Beispiele

Für ein vollständiges funktionierendes Beispiel siehe unsere [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications)-App ([Beispiel live ansehen](https://mdn.github.io/dom-examples/to-do-notifications/)).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
