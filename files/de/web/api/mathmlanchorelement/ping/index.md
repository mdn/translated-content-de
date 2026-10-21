---
title: "MathMLAnchorElement: ping-Eigenschaft"
short-title: ping
slug: Web/API/MathMLAnchorElement/ping
l10n:
  sourceCommit: 7220cba37bea17e7e18a674ec730366e8af815ab
---

{{ApiRef("HTML DOM")}}

Die Eigenschaft **`ping`** der Schnittstelle [`MathMLAnchorElement`](/de/docs/Web/API/MathMLAnchorElement) enthält eine durch Leerzeichen getrennte Liste von URLs. Wenn dem Link gefolgt wird, sendet der Browser {{HTTPMethod("POST")}}-Anfragen mit dem Body `PING` an diese URLs.

Sie spiegelt das Attribut `ping` des Elements [`<a>`](/de/docs/Web/MathML/Reference/Element/a) wider.

> [!NOTE]
> Diese Eigenschaft ist in Firefox nicht wirksam. Ihre Verwendung kann aufgrund von Datenschutz- und Sicherheitsbedenken eingeschränkt sein.

## Wert

Ein String.

## Beispiele

### Grundlegende Verwendung

Gegeben sei folgendes MathML:

```html
<math>
  <a
    id="myAnchor"
    href="https://example.com"
    ping="https://example-tracking.com https://example-analytics.com"
    >...</a
  >
</math>
```

Den Wert von `ping` für den Link können Sie wie folgt abrufen:

```js
const mathAnchor = document.getElementById("myAnchor");
mathAnchor.ping; // "https://example-tracking.com https://example-analytics.com"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das MathML-Element [`<a>`](/de/docs/Web/MathML/Reference/Element/a)
