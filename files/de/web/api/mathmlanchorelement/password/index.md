---
title: "MathMLAnchorElement: password-Eigenschaft"
short-title: password
slug: Web/API/MathMLAnchorElement/password
l10n:
  sourceCommit: 9ba3ab2c48fb51423f811d329818071e4c79caca
---

{{APIRef("MathML")}}

Die **`password`**-Eigenschaft des [`MathMLAnchorElement`](/de/docs/Web/API/MathMLAnchorElement)-Interfaces ist ein String, der die Passwortkomponente des `href`-Attributs des [`<a>`](/de/docs/Web/MathML/Reference/Element/a)-Elements enthält. Wenn die URL kein Passwort hat, enthält diese Eigenschaft einen leeren String, `""`.

Diese Eigenschaft kann festgelegt werden, um das Passwort der URL zu ändern. Wenn die URL keinen [`host`](/de/docs/Web/API/MathMLAnchorElement/host) hat oder ihr Schema `file:` ist, hat das Festlegen dieser Eigenschaft keine Auswirkung.

Das Passwort wird beim Festlegen {{Glossary("Percent-encoding", "prozentkodiert")}}, beim Lesen jedoch nicht prozentdecodiert.

Weitere Informationen finden Sie unter [`URL.password`](/de/docs/Web/API/URL/password).

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

können Sie das `password` des Ankers wie folgt abrufen:

```js
const mathAnchor = document.getElementById("myAnchor");
mathAnchor.password; // returns 'bar'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das MathML-Element [`<a>`](/de/docs/Web/MathML/Reference/Element/a)
