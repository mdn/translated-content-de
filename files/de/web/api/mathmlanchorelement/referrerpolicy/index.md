---
title: "MathMLAnchorElement: Eigenschaft referrerPolicy"
short-title: referrerPolicy
slug: Web/API/MathMLAnchorElement/referrerPolicy
l10n:
  sourceCommit: 7220cba37bea17e7e18a674ec730366e8af815ab
---

{{APIRef("HTML DOM")}}

Die Eigenschaft **`referrerPolicy`** der Schnittstelle [`MathMLAnchorElement`](/de/docs/Web/API/MathMLAnchorElement) ist ein String, der festlegt, wie viel vom [Referrer](/de/docs/Web/HTTP/Reference/Headers/Referer) beim Folgen des Links gesendet wird und unter welchen Umständen.

Sie spiegelt das Attribut `referrerpolicy` des Elements [`<a>`](/de/docs/Web/MathML/Reference/Element/a) wider.

## Wert

Ein String; die möglichen Werte finden Sie beim [Attribut `referrerpolicy` des Elements `<a>`](/de/docs/Web/MathML/Reference/Element/a#referrerpolicy).

## Beispiele

### Grundlegende Verwendung

Gegeben sei dieses MathML:

```html
<math>
  <a id="myAnchor" href="https://example.com" referrerpolicy="no-referrer"
    >...</a
  >
</math>
```

Den Wert von `referrerPolicy` des Links können Sie so abrufen:

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
