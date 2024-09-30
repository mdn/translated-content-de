---
title: "Window: languagechange Ereignis"
short-title: languagechange
slug: Web/API/Window/languagechange_event
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef}}

Das **`languagechange`**-Ereignis wird am globalen Scope-Objekt ausgelöst, wenn sich die bevorzugte Sprache des Benutzers ändert.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("languagechange", (event) => {});
onlanguagechange = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Event-Handler-Aliase

Zusätzlich zur `Window`-Schnittstelle ist die Ereignis-Handler-Eigenschaft `onlanguagechange` auch auf den folgenden Zielen verfügbar:

- [`HTMLBodyElement`](/de/docs/Web/API/HTMLBodyElement)
- [`HTMLFrameSetElement`](/de/docs/Web/API/HTMLFrameSetElement)
- [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)

## Beispiele

Sie können das `languagechange`-Ereignis in einer [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)-Methode verwenden:

```js
window.addEventListener("languagechange", () => {
  console.log("languagechange event detected!");
});
```

Oder Sie verwenden die `onlanguagechange`-Ereignis-Handler-Eigenschaft:

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
