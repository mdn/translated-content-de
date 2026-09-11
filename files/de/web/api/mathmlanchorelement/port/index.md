---
title: "MathMLAnchorElement: port-Eigenschaft"
short-title: port
slug: Web/API/MathMLAnchorElement/port
l10n:
  sourceCommit: 9ba3ab2c48fb51423f811d329818071e4c79caca
---

{{APIRef("MathML")}}

Die **`port`**-Eigenschaft der [`MathMLAnchorElement`](/de/docs/Web/API/MathMLAnchorElement)-Schnittstelle ist ein String, der die Portnummer des `href`-Attributs des [`<a>`](/de/docs/Web/MathML/Reference/Element/a)-Elements enthält. Wenn der Port der Standardport für das Protokoll ist (`80` für `ws:` und `http:`, `443` für `wss:` und `https:` sowie `21` für `ftp:`), enthält diese Eigenschaft einen leeren String, `""`.

Diese Eigenschaft kann gesetzt werden, um den Port der URL zu ändern. Wenn die URL keinen [`host`](/de/docs/Web/API/MathMLAnchorElement/host) hat oder ihr Schema `file:` ist, hat das Setzen dieser Eigenschaft keine Wirkung. Ungültige Portnummern werden außerdem stillschweigend ignoriert.

Weitere Informationen finden Sie unter [`URL.port`](/de/docs/Web/API/URL/port).

## Wert

Ein String.

## Beispiele

### Grundlegende Verwendung

Bei folgendem MathML:

```html
<math>
  <a id="myAnchor" href="https://example.com:8001/subsection#examples"> ... </a>
</math>
```

können Sie den `port` des Ankers wie folgt abrufen:

```js
const mathAnchor = document.getElementById("myAnchor");
mathAnchor.port; // returns '8001'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das MathML-Element [`<a>`](/de/docs/Web/MathML/Reference/Element/a)
