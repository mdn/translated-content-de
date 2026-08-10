---
title: "`browsingContext.historyUpdated` Ereignis"
short-title: historyUpdated
slug: Web/WebDriver/Reference/BiDi/Modules/browsingContext/historyUpdated
l10n:
  sourceCommit: 15f8fef84c7b7e800eaad84301fdb4b4f9cb80a2
---

Das `browsingContext.historyUpdated` [Ereignis](/de/docs/Web/WebDriver/Reference/BiDi/Modules#events) des [`browsingContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext) Moduls wird ausgelöst, wenn die aktive URL in einem [Kontext](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#contexts) programmatisch ohne vollständige Navigation aktualisiert wird.

## Ereignisdaten

Das `params` Feld in der Ereignisbenachrichtigung ist ein Objekt mit den folgenden Feldern:

- `context`
  - : Ein String, der die ID des Kontexts enthält, in dem das Geschichtsupdate stattfindet.
- `timestamp`
  - : Eine nicht-negative ganze Zahl, die die Zeit angibt, zu der das Ereignis ausgelöst wurde, als Millisekunden seit dem [Epoch](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date).
- `url`
  - : Ein String, der die aktualisierte URL enthält.

## Beschreibung

Dieses Ereignis wird ausgelöst, wenn [`history.pushState()`](/de/docs/Web/API/History/pushState) oder [`history.replaceState()`](/de/docs/Web/API/History/replaceState) aufgerufen wird, um die URL zu aktualisieren, oder wenn [`document.open()`](/de/docs/Web/API/Document/open) aufgerufen wird, um das Dokument zu ersetzen.
Diese Aufrufe ändern die aktive URL im Kontext.

`browsingContext.historyUpdated` wird speziell ausgelöst, wenn die URL programmatisch geändert wird, im Gegensatz zu [`browsingContext.fragmentNavigated`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/fragmentNavigated), das bei gleichbleibender Dokumentnavigation zu einem URL-Fragment ausgelöst wird.

## Beispiele

### Empfang eines Ereignisses, wenn `history.pushState()` aufgerufen wird

Angenommen, Sie haben eine [WebDriver BiDi-Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection) und eine [aktive Sitzung](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) mit einem [Abonnement](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) für `browsingContext.historyUpdated`.

Angenommen, [`history.pushState()`](/de/docs/Web/API/History/pushState) wird aufgerufen, um die URL auf `https://example.com/new-path` zu aktualisieren. Der Browser sendet die folgende Benachrichtigung:

```json
{
  "type": "event",
  "method": "browsingContext.historyUpdated",
  "params": {
    "context": "5e5e96e8-5247-4f22-9b35-a4a2d841cbaa",
    "timestamp": 1781888825943,
    "url": "https://example.com/new-path"
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`browsingContext.navigationStarted`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationStarted) Ereignis
- [`browsingContext.fragmentNavigated`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/fragmentNavigated) Ereignis
