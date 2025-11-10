---
title: "WorkerGlobalScope: languagechange Ereignis"
short-title: languagechange
slug: Web/API/WorkerGlobalScope/languagechange_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("DOM")}}{{AvailableInWorkers("worker")}}

Das **`languagechange`**-Ereignis wird am globalen Scope-Objekt ausgelöst, wenn sich die bevorzugte Sprache des Benutzers ändert.

Dieses Ereignis ist nicht abbrechbar und wird nicht weitergegeben.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("languagechange", (event) => { })

onlanguagechange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Sie können das `languagechange`-Ereignis in einer [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)-Methode verwenden:

```js
worker.addEventListener("languagechange", () => {
  console.log("languagechange event detected!");
});
```

Oder die `onlanguagechange`-Ereignishandlereigenschaft nutzen:

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
