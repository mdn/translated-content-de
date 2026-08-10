---
title: "`browsingContext.fragmentNavigated` Ereignis"
short-title: fragmentNavigated
slug: Web/WebDriver/Reference/BiDi/Modules/browsingContext/fragmentNavigated
l10n:
  sourceCommit: 15f8fef84c7b7e800eaad84301fdb4b4f9cb80a2
---

Das `browsingContext.fragmentNavigated`-[Ereignis](/de/docs/Web/WebDriver/Reference/BiDi/Modules#events) des [`browsingContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext) Moduls wird ausgelöst, wenn eine gleiche Dokumentnavigation zu einem [URL-Fragment](/de/docs/Web/URI/Reference/Fragment) in einem [Kontext](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#contexts) erfolgt.

## Ereignisdaten

Das `params`-Feld in der Ereignisbenachrichtigung ist ein Objekt mit den folgenden Feldern:

- `context`
  - : Ein String, der die ID des Kontexts enthält, in dem die Fragmentnavigation erfolgt.
- `navigation`
  - : Ein String, der die {{Glossary("UUID", "UUID")}} enthält, die diese Navigation eindeutig identifiziert.
    Wenn die Navigation mit dem [`browsingContext.navigate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigate) oder [`browsingContext.reload`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/reload) Befehl gestartet wurde, entspricht diese ID dem `navigation`-Wert in der Antwort des Befehls.
    Die gleiche ID wird von allen Ereignissen geteilt, die sich auf diese Navigation beziehen, einschließlich anderer Navigationsereignisse im [`browsingContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#events) Modul und Ereignissen im [`network`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network) Modul.
- `timestamp`
  - : Eine nicht negative ganze Zahl, die die Zeit repräsentiert, zu der das Ereignis ausgelöst wurde, in Millisekunden seit dem [Epochenbeginn](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date).
- `url`
  - : Ein String, der die aktualisierte URL, einschließlich des Fragments, enthält.

## Beispiele

### Empfang eines Fragmentnavigationsereignisses

Angenommen, Sie haben eine [WebDriver BiDi-Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection) und eine [aktive Sitzung](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) mit einem [Abonnement](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) zu `browsingContext.fragmentNavigated`.

Angenommen, eine Navigation zu einem Abschnitt auf `https://example.com/page` erfolgt. Der Browser sendet die folgende Benachrichtigung:

```json
{
  "type": "event",
  "method": "browsingContext.fragmentNavigated",
  "params": {
    "context": "5e5e96e8-5247-4f22-9b35-a4a2d841cbaa",
    "navigation": "a1b2c3d4-5678-90ab-cdef-1234567890ab",
    "timestamp": 1712345678901,
    "url": "https://example.com/page#section-2"
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`browsingContext.navigationStarted`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationStarted) Ereignis
- [`browsingContext.historyUpdated`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/historyUpdated) Ereignis
