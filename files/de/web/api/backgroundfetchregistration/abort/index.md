---
title: "BackgroundFetchRegistration: abort()-Methode"
short-title: abort()
slug: Web/API/BackgroundFetchRegistration/abort
l10n:
  sourceCommit: c77a11ee1509542c16b0348afc4fcb3ffe588e1c
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **`abort()`**-Methode der [`BackgroundFetchRegistration`](/de/docs/Web/API/BackgroundFetchRegistration)-Schnittstelle bricht einen aktiven Hintergrundabruf ab.

## Syntax

```js-nolint
abort()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `true` aufgelöst wird, wenn der Abruf erfolgreich abgebrochen wird.

## Beispiele

Verwenden Sie `abort()`, um einen Hintergrundabruf, der gerade ausgeführt wird, zu beenden.

```js
bgFetch.abort();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
