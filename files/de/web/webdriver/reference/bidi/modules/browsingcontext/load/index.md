---
title: "`browsingContext.load` Ereignis"
short-title: load
slug: Web/WebDriver/Reference/BiDi/Modules/browsingContext/load
l10n:
  sourceCommit: 15f8fef84c7b7e800eaad84301fdb4b4f9cb80a2
---

Das `browsingContext.load` [Ereignis](/de/docs/Web/WebDriver/Reference/BiDi/Modules#events) des [`browsingContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext) Moduls wird ausgelöst, wenn eine vollständige Quer-Dokumenten-Navigation in einem [Kontext](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#contexts) abgeschlossen ist.

## Ereignisdaten

Das `params` Feld in der Ereignisbenachrichtigung ist ein Objekt mit den folgenden Feldern:

- `context`
  - : Ein String, der die ID des Kontexts enthält, in dem das Dokument vollständig geladen wurde.
- `navigation`
  - : Ein String, der die {{Glossary("UUID", "UUID")}} enthält, die diese Navigation eindeutig identifiziert.
    Wenn die Navigation mit dem [`browsingContext.navigate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigate) oder [`browsingContext.reload`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/reload) Befehl gestartet wurde, stimmt diese ID mit dem `navigation` Wert in der Antwort des Befehls überein.
    Dieselbe ID wird von allen Ereignissen geteilt, die mit dieser Navigation in Zusammenhang stehen, einschließlich anderer Navigationsereignisse im [`browsingContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#events) Modul und Ereignissen im [`network`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network) Modul.
- `timestamp`
  - : Eine nicht-negative Ganzzahl, die die Zeit repräsentiert, zu der das Ereignis ausgelöst wurde, in Millisekunden seit dem [Epoch](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date).
- `url`
  - : Ein String, der die URL des Dokuments enthält, das vollständig geladen wurde.

## Beschreibung

Im Lebenszyklus einer erfolgreichen Navigation wird dieses Ereignis nach [`browsingContext.domContentLoaded`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/domContentLoaded) ausgelöst und ist das letzte Ereignis in der Sequenz.

An diesem Punkt haben das Dokument und alle seine Subressourcen das Laden abgeschlossen, was dem Auslösen des [`load`](/de/docs/Web/API/Window/load_event) Ereignisses entspricht.

Wenn Sie `wait` auf `"complete"` für die [`browsingContext.navigate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigate) und [`browsingContext.reload`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/reload) Befehle einstellen, geben diese zurück, sobald `browsingContext.load` ausgelöst wird.

## Beispiele

### Empfang eines Ereignisses, wenn ein Dokument vollständig geladen ist

Angenommen, Sie haben eine [WebDriver BiDi Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection) und eine [aktive Sitzung](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) mit einem [Abonnement](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) für `browsingContext.load`.

Angenommen, Sie verwenden [`browsingContext.navigate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigate), um `https://example.com` zu laden, indem Sie die Kontext-ID verwenden, die Sie von [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) erhalten haben.

Der Browser löst zuerst die Ereignisse [`browsingContext.navigationStarted`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationStarted), [`browsingContext.navigationCommitted`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationCommitted) und [`browsingContext.domContentLoaded`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/domContentLoaded) aus (Sie erhalten diese Benachrichtigungen nicht, da das Abonnement in diesem Beispiel nur für `browsingContext.load` ist).

Sobald das Dokument und alle seine Subressourcen das Laden abgeschlossen haben, sendet der Browser die folgende Benachrichtigung, wobei der `context` Wert der Kontext-ID entspricht, die Sie an `browsingContext.navigate` übermittelt haben:

```json
{
  "type": "event",
  "method": "browsingContext.load",
  "params": {
    "context": "5e5e96e8-5247-4f22-9b35-a4a2d841cbaa",
    "navigation": "a1b2c3d4-5678-90ab-cdef-1234567890ab",
    "timestamp": 1782343062410,
    "url": "https://example.com"
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`browsingContext.navigationStarted`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationStarted) Ereignis
- [`browsingContext.navigationCommitted`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationCommitted) Ereignis
- [`browsingContext.domContentLoaded`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/domContentLoaded) Ereignis
- [`browsingContext.navigationFailed`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationFailed) Ereignis
