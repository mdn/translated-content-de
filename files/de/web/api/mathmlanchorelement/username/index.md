---
title: "MathMLAnchorElement: Eigenschaft username"
short-title: username
slug: Web/API/MathMLAnchorElement/username
l10n:
  sourceCommit: 9ba3ab2c48fb51423f811d329818071e4c79caca
---

{{APIRef("MathML")}}

Die Eigenschaft **`username`** der Schnittstelle [`MathMLAnchorElement`](/de/docs/Web/API/MathMLAnchorElement) ist ein String, der die Benutzernamenkomponente des `href`-Attributs des Elements [`<a>`](/de/docs/Web/MathML/Reference/Element/a) enthält. Wenn die URL keinen Benutzernamen hat, enthält diese Eigenschaft einen leeren String, `""`.

Diese Eigenschaft kann festgelegt werden, um den Benutzernamen der URL zu ändern. Wenn die URL keinen [`host`](/de/docs/Web/API/MathMLAnchorElement/host) hat oder ihr Schema `file:` ist, hat das Festlegen dieser Eigenschaft keine Auswirkung.

Der Benutzername wird beim Festlegen {{Glossary("Percent-encoding", "prozentkodiert")}}, beim Auslesen jedoch nicht prozentdekodiert.

Weitere Informationen finden Sie unter [`URL.username`](/de/docs/Web/API/URL/username).

## Wert

Ein String.

## Beispiele

### Grundlegende Verwendung

Ausgehend von diesem MathML:

```html
<math>
  <a id="myAnchor" href="https://foo:bar@example.com#examples"> ... </a>
</math>
```

können Sie den `username` des Ankers wie folgt abrufen:

```js
const mathAnchor = document.getElementById("myAnchor");
mathAnchor.username; // returns 'foo'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das MathML-Element [`<a>`](/de/docs/Web/MathML/Reference/Element/a)
