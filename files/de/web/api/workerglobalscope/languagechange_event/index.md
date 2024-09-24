---
title: "WorkerGlobalScope: languagechange-Ereignis"
short-title: languagechange
slug: Web/API/WorkerGlobalScope/languagechange_event
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{APIRef}}{{AvailableInWorkers("worker")}}

Das **`languagechange`**-Ereignis wird am globalen Scope-Objekt ausgelöst, wenn sich die bevorzugte Sprache des Benutzers ändert.

Dieses Ereignis ist nicht abbruchfähig und wird nicht nach oben weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("languagechange", (event) => {});

onlanguagechange = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beispiele

Sie können das `languagechange`-Ereignis in einer {{domxref("EventTarget/addEventListener", "addEventListener")}}-Methode verwenden:

```js
worker.addEventListener("languagechange", () => {
  console.log("languagechange event detected!");
});
```

Oder verwenden Sie die `onlanguagechange`-Ereignis-Handler-Eigenschaft:

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

- {{domxref("WorkerNavigator.language", "navigator.language")}}
- {{domxref("WorkerNavigator.languages", "navigator.languages")}}
- {{domxref("Navigator")}}
