---
title: "NavigateEvent: sourceElement-Eigenschaft"
short-title: sourceElement
slug: Web/API/NavigateEvent/sourceElement
l10n:
  sourceCommit: 0496643fbc14a6bad2bf46c94ab27c541f6928ff
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die schreibgeschützte **`sourceElement`**-Eigenschaft des [`NavigateEvent`](/de/docs/Web/API/NavigateEvent)-Interfaces gibt ein [`Element`](/de/docs/Web/API/Element)-Objekt zurück, das das auslösende Element darstellt, in Fällen, in denen die Navigation durch ein Element initiiert wurde.

Das auslösende Element kann sein:

- Ein HTML {{htmlelement("a")}}-Element (oder SVG [`<a>`](/de/docs/Web/SVG/Reference/Element/a)-Element).
- Ein {{htmlelement("area")}}-Element.
- Ein Submit-Button ([`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit) oder [`<button type="submit">`](/de/docs/Web/HTML/Reference/Elements/button)).
- Ein übermitteltes {{htmlelement("form")}}-Element.

## Wert

Ein [`Element`](/de/docs/Web/API/Element)-Objekt, das das Element darstellt, das die Navigation initiiert hat, oder `null`, wenn die Navigation nicht durch ein Element initiiert wurde.

## Beispiele

```js
navigation.addEventListener("navigate", (event) => {
  console.log(event.sourceElement);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Moderne clientseitige Routenführung: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erläuterung](https://github.com/WICG/navigation-api/blob/main/README.md)
