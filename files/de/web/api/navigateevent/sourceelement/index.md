---
title: "NavigateEvent: sourceElement Eigenschaft"
short-title: sourceElement
slug: Web/API/NavigateEvent/sourceElement
l10n:
  sourceCommit: 6a5c619dfad295ca9a9d317a4088908cfd33e686
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`sourceElement`** des
[`NavigateEvent`](/de/docs/Web/API/NavigateEvent)-Interfaces gibt ein [`Element`](/de/docs/Web/API/Element)-Objekt zurück, das das auslösende Element darstellt, in Fällen, in denen die Navigation durch ein Element initiiert wurde.

Das auslösende Element kann sein:

- Ein HTML {{htmlelement("a")}}-Element (oder SVG [`<a>`](/de/docs/Web/SVG/Reference/Element/a)-Element).
- Ein {{htmlelement("area")}}-Element.
- Ein Absende-Button ([`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit) oder [`<button type="submit">`](/de/docs/Web/HTML/Reference/Elements/button)).
- Ein gesendetes {{htmlelement("form")}}-Element.

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

- [Moderne clientseitige Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
