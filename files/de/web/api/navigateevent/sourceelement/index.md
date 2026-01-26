---
title: "NavigateEvent: sourceElement-Eigenschaft"
short-title: sourceElement
slug: Web/API/NavigateEvent/sourceElement
l10n:
  sourceCommit: 06ab986fc58ffb4e12b9f9962ee3c2783ce1290b
---

{{APIRef("Navigation API")}}

Die **`sourceElement`**-Eigenschaft der [`NavigateEvent`](/de/docs/Web/API/NavigateEvent)-Schnittstelle ist eine schreibgeschützte Eigenschaft, die ein [`Element`](/de/docs/Web/API/Element)-Objekt zurückgibt, das das auslösende Element darstellt, falls die Navigation von einem Element initiiert wurde.

Das auslösende Element kann sein:

- Ein HTML {{htmlelement("a")}}-Element (oder ein SVG [`<a>`](/de/docs/Web/SVG/Reference/Element/a)-Element).
- Ein {{htmlelement("area")}}-Element.
- Eine Schaltfläche zum Absenden ([`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit) oder [`<button type="submit">`](/de/docs/Web/HTML/Reference/Elements/button)).
- Ein abgesendetes {{htmlelement("form")}}-Element.

## Wert

Ein [`Element`](/de/docs/Web/API/Element)-Objekt, das das Element darstellt, das die Navigation initiiert hat, oder `null`, wenn die Navigation nicht von einem Element initiiert wurde.

## Beispiele

### Abrufen des `sourceElement` für ein Ereignis

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

- [Moderne client-seitige Navigation: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Beschreibung](https://github.com/WICG/navigation-api/blob/main/README.md)
