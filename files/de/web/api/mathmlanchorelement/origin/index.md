---
title: "MathMLAnchorElement: origin-Eigenschaft"
short-title: origin
slug: Web/API/MathMLAnchorElement/origin
l10n:
  sourceCommit: 9ba3ab2c48fb51423f811d329818071e4c79caca
---

{{APIRef("MathML")}}

Die schreibgeschützte Eigenschaft **`origin`** des Interfaces [`MathMLAnchorElement`](/de/docs/Web/API/MathMLAnchorElement) gibt einen String zurück, der die Unicode-Serialisierung des Ursprungs des `href`-Attributs des Elements [`<a>`](/de/docs/Web/MathML/Reference/Element/a) enthält.

Die genaue Struktur variiert je nach URL-Typ:

- Für URLs, die die Schemas `ftp:`, `http:`, `https:`, `ws:` und `wss:` verwenden: das [`protocol`](/de/docs/Web/API/MathMLAnchorElement/protocol), gefolgt von `//`, gefolgt vom [`host`](/de/docs/Web/API/MathMLAnchorElement/host). Wie bei `host` wird der [`port`](/de/docs/Web/API/MathMLAnchorElement/port) nur eingeschlossen, wenn er nicht der Standardwert für das Protokoll ist.
- Für URLs, die das Schema `file:` verwenden, ist der Wert browserabhängig.
- Für URLs, die das Schema `blob:` verwenden: der Ursprung der auf `blob:` folgenden URL, jedoch nur, wenn diese URL das Schema `http:`, `https:` oder `file:` verwendet. Beispielsweise hat `blob:https://mozilla.org` den Ursprung `https://mozilla.org`.

In allen anderen Fällen wird der String `"null"` zurückgegeben.

Weitere Informationen finden Sie unter [`URL.origin`](/de/docs/Web/API/URL/origin).

## Wert

Ein String.

## Beispiele

### Grundlegende Verwendung

Bei folgendem MathML:

```html
<math>
  <a id="myAnchor" href="https://example.com/subsection#examples"> ... </a>
</math>
```

können Sie den `origin` des Ankers wie folgt abrufen:

```js
const mathAnchor = document.getElementById("myAnchor");
mathAnchor.origin; // returns 'https://example.com'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das MathML-Element [`<a>`](/de/docs/Web/MathML/Reference/Element/a)
