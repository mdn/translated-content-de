---
title: "MathMLAnchorElement: href-Eigenschaft"
short-title: href
slug: Web/API/MathMLAnchorElement/href
l10n:
  sourceCommit: 76c2e04d720aa8260ba7d75788ed96776aac35c6
---

{{APIRef("MathML")}}{{SeeCompatTable}}

Die **`href`**-Eigenschaft der Schnittstelle [`MathMLAnchorElement`](/de/docs/Web/API/MathMLAnchorElement) ist ein {{Glossary("stringifier", "Stringifier")}}, der die absolute URL zurückgibt, die dem `href`-Attribut des Elements [`<a>`](/de/docs/Web/MathML/Reference/Element/a) entspricht (oder einen leeren String, wenn `href` nicht gesetzt ist). Das Setzen dieser Eigenschaft aktualisiert das `href`-Attribut des Elements auf den angegebenen Wert.

## Wert

Ein String.

- Wenn das `href`-Attribut nicht vorhanden ist, ist der Wert ein leerer String (`""`).
- Wenn das `href`-Attribut vorhanden ist, aber keine gültige relative oder absolute URL darstellt, entspricht der Wert unverändert dem Wert des Attributs.
- Wenn das `href`-Attribut vorhanden ist und eine gültige relative oder absolute URL darstellt, ist der Wert die absolute URL, aufgelöst relativ zur Basis-URL des Dokuments. Der leere String (`""`) wird als gültige relative URL betrachtet und zur Basis-URL des Dokuments aufgelöst.

## Beispiele

### Grundlegende Verwendung

Gegeben sei dieses MathML:

```html
<math>
  <a id="myAnchor" href="https://example.com#examples"> ... </a>
</math>
```

Sie können das `href` des Ankers wie folgt abrufen:

```js
const mathAnchor = document.getElementById("myAnchor");
mathAnchor.href; // returns 'https://example.com#examples'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das MathML-Element [`<a>`](/de/docs/Web/MathML/Reference/Element/a)
