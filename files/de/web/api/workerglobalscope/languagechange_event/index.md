---
title: "WorkerGlobalScope: languagechange Ereignis"
short-title: languagechange
slug: Web/API/WorkerGlobalScope/languagechange_event
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{APIRef}}{{AvailableInWorkers("worker")}}

Das **`languagechange`** Ereignis wird im globalen Scope-Objekt ausgelöst, wenn sich die bevorzugte Sprache des Benutzers ändert.

Dieses Ereignis kann nicht abgebrochen werden und löst keine Bubbling-Prozesse aus.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Event-Handler-Eigenschaft.

```js
addEventListener("languagechange", (event) => {});

onlanguagechange = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Sie können das `languagechange` Ereignis in einer [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) Methode verwenden:

```js
worker.addEventListener("languagechange", () => {
  console.log("languagechange event detected!");
});
```

Oder verwenden Sie die `onlanguagechange` Event-Handler-Eigenschaft:

```js
worker.onlanguagechange = (event) => {
  console.log("languagechange event detected!");
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`navigator.language`](/de/docs/Web/API/WorkerNavigator/language)
- [`navigator.languages`](/de/docs/Web/API/WorkerNavigator/languages)
- [`Navigator`](/de/docs/Web/API/Navigator)
