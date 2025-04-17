---
title: "NavigateEvent: sourceElement-Eigenschaft"
short-title: sourceElement
slug: Web/API/NavigateEvent/sourceElement
l10n:
  sourceCommit: 1831fa08612cea504bd5abe38126dad46e81c1e4
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die schreibgeschützte **`sourceElement`**-Eigenschaft des [`NavigateEvent`](/de/docs/Web/API/NavigateEvent)-Interfaces gibt ein [`Element`](/de/docs/Web/API/Element)-Objekt zurück, das das auslösende Element darstellt, in den Fällen, in denen die Navigation durch ein Element initiiert wurde.

Das auslösende Element kann sein:

- Ein HTML-{{htmlelement("a")}}-Element (oder SVG-[`<a>`](/de/docs/Web/SVG/Reference/Element/a)-Element).
- Ein {{htmlelement("area")}}-Element.
- Eine Schaltfläche zum Absenden ([`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit) oder [`<button type="submit">`](/de/docs/Web/HTML/Reference/Elements/button)).
- Ein übermitteltes {{htmlelement("form")}}-Element.

## Wert

Ein [`Element`](/de/docs/Web/API/Element)-Objekt, das das Element darstellt, das die Navigation initiiert hat, oder `null`, falls die Navigation nicht durch ein Element initiiert wurde.

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

- [Moderne clientseitige Navigation: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
