---
title: "MathMLAnchorElement: href-Eigenschaft"
short-title: href
slug: Web/API/MathMLAnchorElement/href
l10n:
  sourceCommit: 9ba3ab2c48fb51423f811d329818071e4c79caca
---

{{APIRef("MathML")}}

Die **`href`**-Eigenschaft der Schnittstelle [`MathMLAnchorElement`](/de/docs/Web/API/MathMLAnchorElement) ist ein {{Glossary("stringifier", "Stringifier")}}, der die absolute URL zurückgibt, die dem `href`-Attribut des Elements [`<a>`](/de/docs/Web/MathML/Reference/Element/a) entspricht (oder eine leere Zeichenfolge, wenn `href` nicht gesetzt ist). Das Setzen dieser Eigenschaft aktualisiert das `href`-Attribut des Elements auf den bereitgestellten Wert.

## Wert

Eine Zeichenfolge.

- Wenn das `href`-Attribut fehlt, ist der Wert eine leere Zeichenfolge (`""`).
- Wenn das `href`-Attribut vorhanden ist, aber keine gültige relative oder absolute URL enthält, entspricht der Wert unverändert dem Wert des Attributs.
- Wenn das `href`-Attribut vorhanden ist und eine gültige relative oder absolute URL enthält, ist der Wert die absolute URL, aufgelöst relativ zur Basis-URL des Dokuments. Die leere Zeichenfolge (`""`) wird als gültige relative URL betrachtet und zur Basis-URL des Dokuments aufgelöst.

## Beispiele

### Grundlegende Verwendung

Ausgehend von diesem MathML:

```html
<math>
  <a id="myAnchor" href="https://example.com#examples"> ... </a>
</math>
```

können Sie das `href` des Ankers wie folgt abrufen:

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
