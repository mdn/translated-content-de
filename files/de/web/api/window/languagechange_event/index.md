---
title: "Window: languagechange-Ereignis"
short-title: languagechange
slug: Web/API/Window/languagechange_event
l10n:
  sourceCommit: 023b9075df473020b3279afa031bb4a32e3b743b
---

{{APIRef("HTML DOM")}}

Das **`languagechange`**-Ereignis wird am globalen Scope-Objekt ausgelöst, wenn sich die bevorzugte Sprache des Benutzers ändert.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("languagechange", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onlanguagechange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Aliase für Event-Handler

Neben der `Window`-Schnittstelle ist die Event-Handler-Eigenschaft `onlanguagechange` auch für die folgenden Elemente verfügbar:

- [`HTMLBodyElement`](/de/docs/Web/API/HTMLBodyElement)
- [`HTMLFrameSetElement`](/de/docs/Web/API/HTMLFrameSetElement)
- [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)

## Beispiele

Sie können das `languagechange`-Ereignis mit der Methode [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener) verwenden:

```js
window.addEventListener("languagechange", () => {
  console.log("languagechange event detected!");
});
```

Oder verwenden Sie die Event-Handler-Eigenschaft `onlanguagechange`. Beachten Sie jedoch, dass dadurch gegebenenfalls andere Ereignis-Listener ersetzt werden, die über `onlanguagechange` hinzugefügt wurden:

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
