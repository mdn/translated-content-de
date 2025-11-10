---
title: "Window: languagechange Ereignis"
short-title: languagechange
slug: Web/API/Window/languagechange_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}

Das **`languagechange`** Ereignis wird im globalen Scope-Objekt ausgelöst, wenn sich die bevorzugte Sprache des Benutzers ändert.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Event-Handler-Eigenschaft.

```js-nolint
addEventListener("languagechange", (event) => { })

onlanguagechange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Aliase für Event-Handler

Zusätzlich zum `Window`-Interface ist die Event-Handler-Eigenschaft `onlanguagechange` auch bei den folgenden Zielen verfügbar:

- [`HTMLBodyElement`](/de/docs/Web/API/HTMLBodyElement)
- [`HTMLFrameSetElement`](/de/docs/Web/API/HTMLFrameSetElement)
- [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)

## Beispiele

Sie können das `languagechange` Ereignis in einer [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) Methode verwenden:

```js
window.addEventListener("languagechange", () => {
  console.log("languagechange event detected!");
});
```

Oder verwenden Sie die `onlanguagechange` Event-Handler-Eigenschaft:

```js
window.onlanguagechange = (event) => {
  console.log("languagechange event detected!");
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`navigator.language`](/de/docs/Web/API/Navigator/language)
- [`navigator.languages`](/de/docs/Web/API/Navigator/languages)
- [`navigator`](/de/docs/Web/API/Navigator)
