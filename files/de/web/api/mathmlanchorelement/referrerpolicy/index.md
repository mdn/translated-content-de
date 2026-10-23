---
title: "MathMLAnchorElement: Eigenschaft referrerPolicy"
short-title: referrerPolicy
slug: Web/API/MathMLAnchorElement/referrerPolicy
l10n:
  sourceCommit: 85577061e99da7082b48263fa19f9b1ef4187eda
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}{{non-standard_header}}

Die Eigenschaft **`referrerPolicy`** der Schnittstelle [`MathMLAnchorElement`](/de/docs/Web/API/MathMLAnchorElement) ist ein String, der festlegt, wie viele Informationen über den [Referrer](/de/docs/Web/HTTP/Reference/Headers/Referer) beim Folgen des Links gesendet werden und unter welchen Umständen dies geschieht.

Sie spiegelt das Attribut `referrerpolicy` des Elements [`<a>`](/de/docs/Web/MathML/Reference/Element/a) wider.

## Wert

Ein String; die möglichen Werte finden Sie unter [Attribut `referrerpolicy` des Elements `<a>`](/de/docs/Web/MathML/Reference/Element/a#referrerpolicy).

## Beispiele

### Grundlegende Verwendung

Gegeben sei das folgende MathML:

```html
<math>
  <a id="myAnchor" href="https://example.com" referrerpolicy="no-referrer"
    >...</a
  >
</math>
```

So können Sie den Wert von `referrerPolicy` für den Link abrufen:

```js
const mathAnchor = document.getElementById("myAnchor");
mathAnchor.referrerPolicy; // "no-referrer"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das MathML-Element [`<a>`](/de/docs/Web/MathML/Reference/Element/a)
