---
title: "Window: languagechange Ereignis"
short-title: languagechange
slug: Web/API/Window/languagechange_event
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef}}

Das **`languagechange`** Ereignis wird am globalen Scope-Objekt ausgelöst, wenn sich die bevorzugte Sprache des Benutzers ändert.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("languagechange", (event) => {});
onlanguagechange = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Aliase für Ereignis-Handler

Neben der `Window`-Schnittstelle ist die Ereignis-Handler-Eigenschaft `onlanguagechange` auch auf folgenden Zielen verfügbar:

- {{domxref("HTMLBodyElement")}}
- {{domxref("HTMLFrameSetElement")}}
- {{domxref("SVGSVGElement")}}

## Beispiele

Sie können das `languagechange` Ereignis in einer {{domxref("EventTarget/addEventListener", "addEventListener")}}-Methode verwenden:

```js
window.addEventListener("languagechange", () => {
  console.log("languagechange event detected!");
});
```

Oder verwenden Sie die `onlanguagechange` Ereignis-Handler-Eigenschaft:

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

- {{domxref("navigator.language")}}
- {{domxref("navigator.languages")}}
- {{domxref("navigator")}}
