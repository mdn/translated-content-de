---
title: "NavigateEvent: sourceElement-Eigenschaft"
short-title: sourceElement
slug: Web/API/NavigateEvent/sourceElement
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("Navigation API")}}

Die schreibgeschützte **`sourceElement`**-Eigenschaft des [`NavigateEvent`](/de/docs/Web/API/NavigateEvent)-Interfaces gibt ein [`Element`](/de/docs/Web/API/Element)-Objekt zurück, das das auslösende Element repräsentiert, in Fällen, in denen die Navigation von einem Element initiiert wurde.

Das auslösende Element kann sein:

- Ein HTML-{{htmlelement("a")}}-Element (oder SVG-[`<a>`](/de/docs/Web/SVG/Reference/Element/a)-Element).
- Ein {{htmlelement("area")}}-Element.
- Eine Schaltfläche zum Absenden ([`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit) oder [`<button type="submit">`](/de/docs/Web/HTML/Reference/Elements/button)).
- Ein abgesendetes {{htmlelement("form")}}-Element.

## Wert

Ein [`Element`](/de/docs/Web/API/Element)-Objekt, das das Element repräsentiert, welches die Navigation initiiert hat, oder `null`, wenn die Navigation nicht durch ein Element initiiert wurde.

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
- [Navigation API Erklärungen](https://github.com/WICG/navigation-api/blob/main/README.md)
