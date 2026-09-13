---
title: "`browsingContext.navigationCommitted`-Ereignis"
short-title: navigationCommitted
slug: Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationCommitted
l10n:
  sourceCommit: 15f8fef84c7b7e800eaad84301fdb4b4f9cb80a2
---

Das `browsingContext.navigationCommitted` [Ereignis](/de/docs/Web/WebDriver/Reference/BiDi/Modules#events) des [`browsingContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext)-Moduls wird ausgelöst, wenn der Browser eine Navigation über Dokumentengrenzen hinweg festschreibt und beginnt, die neue Seite zu laden.

## Ereignisdaten

Das Feld `params` in der Ereignisbenachrichtigung ist ein Objekt mit den folgenden Feldern:

- `context`
  - : Ein String, der die ID des Kontexts enthält, in dem die Navigation festgeschrieben wird.
- `navigation`
  - : Ein String, der die {{Glossary("UUID", "UUID")}} enthält, die diese Navigation eindeutig identifiziert.
    Wenn die Navigation mit dem [`browsingContext.navigate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigate) oder [`browsingContext.reload`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/reload)-Befehl gestartet wurde, stimmt diese ID mit dem `navigation`-Wert in der Befehlsantwort überein.
    Die gleiche ID wird von allen mit dieser Navigation verbundenen Ereignissen geteilt, einschließlich anderer Navigationsergebnisse im [`browsingContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#events)-Modul und Ereignissen im [`network`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network)-Modul.
- `timestamp`
  - : Eine nicht-negative Ganzzahl, die die Zeit repräsentiert, zu der das Ereignis ausgelöst wurde, als Millisekunden, die seit der [Epoche](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) vergangen sind.
- `url`
  - : Ein String, der die geladene URL einschließlich etwaiger Basis-Auth-Anmeldeinformationen enthält.

## Beschreibung

Eine Navigation wird festgeschrieben, wenn der Browser die URL von der Serverantwort akzeptiert hat und beginnt, die neue Seite zu laden, aber bevor irgendein Inhalt analysiert oder gerendert wurde. Der Seiteninhalt ist zu diesem Zeitpunkt noch nicht verfügbar.

Im Lebenszyklus einer erfolgreichen Navigation wird dieses Ereignis nach [`browsingContext.navigationStarted`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationStarted) und vor den Ereignissen [`browsingContext.domContentLoaded`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/domContentLoaded) und [`browsingContext.load`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/load) ausgelöst.

Wenn Sie `wait` auf `"none"` für die Befehle [`browsingContext.navigate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigate) und [`browsingContext.reload`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/reload) setzen, kehren diese zurück, sobald `browsingContext.navigationCommitted` ausgelöst wird.

Dieses Ereignis wird nicht bei Navigationen im gleichen Dokument ausgelöst.
Für Navigationen zu einem URL-Fragment siehe [`browsingContext.fragmentNavigated`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/fragmentNavigated).
Für URL-Änderungen, die über die History API ohne vollständige Navigation vorgenommen werden, siehe [`browsingContext.historyUpdated`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/historyUpdated).

## Beispiele

### Empfang eines Ereignisses, wenn eine über Dokumentengrenzen hinweggehende Navigation festgeschrieben wird

Angenommen, Sie haben eine [WebDriver BiDi-Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection) und eine [aktive Sitzung](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) mit einem [Abonnement](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) für `browsingContext.navigationCommitted`.

Angenommen, Sie verwenden [`browsingContext.navigate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigate), um `https://example.com` zu laden, und übergeben die Kontext-ID, die Sie von [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) erhalten.

Der Browser löst zuerst ein [`browsingContext.navigationStarted`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationStarted)-Ereignis aus (Sie erhalten diese Benachrichtigung nicht, da das Abonnement in diesem Beispiel nur für `browsingContext.navigationCommitted` ist).

Sobald der Browser die Serverantwort akzeptiert und das Laden der Seite festschreibt, sendet er die folgende Benachrichtigung, wobei der `context`-Wert mit der von Ihnen an `browsingContext.navigate` übergebenen Kontext-ID übereinstimmt:

```json
{
  "type": "event",
  "method": "browsingContext.navigationCommitted",
  "params": {
    "context": "9f271a75-04b2-4b35-80cc-e22427d446fc",
    "navigation": "dc716296-7076-4ec0-b446-51c6fb5fefe8",
    "timestamp": 1781715436774,
    "url": "https://example.com"
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`browsingContext.navigationStarted`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationStarted)-Ereignis
- [`browsingContext.navigationFailed`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationFailed)-Ereignis
- [`browsingContext.fragmentNavigated`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/fragmentNavigated)-Ereignis
- [`browsingContext.historyUpdated`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/historyUpdated)-Ereignis
