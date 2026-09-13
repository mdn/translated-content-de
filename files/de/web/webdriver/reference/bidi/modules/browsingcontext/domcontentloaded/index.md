---
title: "`browsingContext.domContentLoaded` Ereignis"
short-title: domContentLoaded
slug: Web/WebDriver/Reference/BiDi/Modules/browsingContext/domContentLoaded
l10n:
  sourceCommit: 15f8fef84c7b7e800eaad84301fdb4b4f9cb80a2
---

Das `browsingContext.domContentLoaded` [Ereignis](/de/docs/Web/WebDriver/Reference/BiDi/Modules#events) des [`browsingContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext) Moduls tritt auf, wenn das HTML-Dokument während einer plattformübergreifenden Navigation in einem [Kontext](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#contexts) geparst wurde.

## Ereignisdaten

Das `params` Feld in der Ereignisbenachrichtigung ist ein Objekt mit den folgenden Feldern:

- `context`
  - : Ein String, der die ID des Kontexts enthält, in dem das HTML-Dokument geparst wird.
- `navigation`
  - : Ein String, der die {{Glossary("UUID", "UUID")}} enthält, die diese Navigation eindeutig identifiziert.
    Wenn die Navigation mit dem [`browsingContext.navigate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigate) oder [`browsingContext.reload`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/reload) Befehl gestartet wurde, stimmt diese ID mit dem `navigation` Wert in der Befehlsantwort überein.
    Die gleiche ID wird von allen Ereignissen gemeinsam genutzt, die sich auf diese Navigation beziehen, einschließlich anderer Navigationsereignisse im [`browsingContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#events) Modul und Ereignissen im [`network`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network) Modul.
- `timestamp`
  - : Ein nicht-negativer Integer, der die Zeit repräsentiert, zu der das Ereignis ausgelöst wurde, als die seit der [Epoche](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) vergangenen Millisekunden.
- `url`
  - : Ein String, der die geladene URL enthält.

## Beschreibung

Im Lebenszyklus einer erfolgreichen Navigation tritt dieses Ereignis nach dem [`browsingContext.navigationCommitted`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationCommitted) und vor den [`browsingContext.load`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/load) Ereignissen auf.

Zu diesem Zeitpunkt wurde das HTML geparst, aber Subressourcen wie Stylesheets und Bilder können noch geladen werden. Dieses Ereignis entspricht dem [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event) Ereignis, das im Kontext ausgelöst wird.

Wenn Sie `wait` auf `"interactive"` für die [`browsingContext.navigate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigate) und [`browsingContext.reload`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/reload) Befehle setzen, kehren diese zurück, sobald `browsingContext.domContentLoaded` ausgelöst wird.

## Beispiele

### Empfang eines Ereignisses, wenn ein Dokument geparst wird

Angenommen, Sie haben eine [WebDriver BiDi Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection) und eine [aktive Sitzung](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) mit einem [Abonnement](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) für `browsingContext.domContentLoaded`.

Angenommen, Sie verwenden [`browsingContext.navigate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigate), um `https://example.com` zu laden, und übergeben die Kontext-ID, die Sie von [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) erhalten haben.

Der Browser löst zuerst [`browsingContext.navigationStarted`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationStarted) und [`browsingContext.navigationCommitted`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationCommitted) Ereignisse aus (Sie erhalten diese Benachrichtigungen nicht, weil das Abonnement in diesem Beispiel nur auf `browsingContext.domContentLoaded` beschränkt ist).

Sobald das HTML geparst wurde, sendet der Browser die folgende Benachrichtigung, bei der der `context` Wert der Kontext-ID entspricht, die Sie an `browsingContext.navigate` übergeben haben:

```json
{
  "type": "event",
  "method": "browsingContext.domContentLoaded",
  "params": {
    "context": "5e5e96e8-5247-4f22-9b35-a4a2d841cbaa",
    "navigation": "a1b2c3d4-5678-90ab-cdef-1234567890ab",
    "timestamp": 1782342489906,
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
- [`browsingContext.load`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/load) Ereignis
- [`browsingContext.navigationFailed`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationFailed) Ereignis
