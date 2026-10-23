---
title: "MathMLAnchorElement: ping-Eigenschaft"
short-title: ping
slug: Web/API/MathMLAnchorElement/ping
l10n:
  sourceCommit: 85577061e99da7082b48263fa19f9b1ef4187eda
---

{{ApiRef("HTML DOM")}}{{SeeCompatTable}}{{non-standard_header}}

Die **`ping`**-Eigenschaft der [`MathMLAnchorElement`](/de/docs/Web/API/MathMLAnchorElement)-Schnittstelle ist eine durch Leerzeichen getrennte Liste von URLs. Wenn dem Link gefolgt wird, sendet der Browser {{HTTPMethod("POST")}}-Anfragen mit dem Inhalt `PING` an diese URLs.

Sie spiegelt das `ping`-Attribut des [`<a>`](/de/docs/Web/MathML/Reference/Element/a)-Elements wider.

> [!NOTE]
> Diese Eigenschaft ist in Firefox nicht wirksam. Ihre Verwendung kann aufgrund von Datenschutz- und Sicherheitsbedenken eingeschränkt sein.

## Wert

Ein String.

## Beispiele

### Grundlegende Verwendung

Gegeben sei dieses MathML:

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

Sie können den `ping`-Wert des Ankers wie folgt abrufen:

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
