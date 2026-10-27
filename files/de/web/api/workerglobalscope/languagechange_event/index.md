---
title: "WorkerGlobalScope: languagechange-Ereignis"
short-title: languagechange
slug: Web/API/WorkerGlobalScope/languagechange_event
l10n:
  sourceCommit: 92c5e81c587ffea6177431743106118984f1675d
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers("worker")}}

Das **`languagechange`**-Ereignis wird am globalen Scope-Objekt ausgelöst, wenn sich die bevorzugte Sprache des Benutzers ändert.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht nach oben weitergegeben.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("languagechange", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) des Interfaces zuweisen:

```js-nolint
onlanguagechange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Sie können das `languagechange`-Ereignis in der Methode [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) verwenden:

```js
self.addEventListener("languagechange", () => {
  console.log("languagechange event detected!");
});
```

Oder verwenden Sie die Event-Handler-Eigenschaft `onlanguagechange` (beachten Sie jedoch, dass dadurch gegebenenfalls andere Event-Listener ersetzt werden, die über `onlanguagechange` hinzugefügt wurden):

```js
self.onlanguagechange = (event) => {
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
