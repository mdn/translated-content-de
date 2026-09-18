---
title: "MathMLAnchorElement: origin-Eigenschaft"
short-title: origin
slug: Web/API/MathMLAnchorElement/origin
l10n:
  sourceCommit: 76c2e04d720aa8260ba7d75788ed96776aac35c6
---

{{APIRef("MathML")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`origin`** des Interfaces [`MathMLAnchorElement`](/de/docs/Web/API/MathMLAnchorElement) gibt einen String zurück, der die Unicode-Serialisierung des Ursprungs des `href`-Attributs des Elements [`<a>`](/de/docs/Web/MathML/Reference/Element/a) enthält.

Die genaue Struktur variiert je nach URL-Typ:

- Für URLs mit den Schemas `ftp:`, `http:`, `https:`, `ws:` und `wss:` folgt auf [`protocol`](/de/docs/Web/API/MathMLAnchorElement/protocol) `//`, gefolgt von [`host`](/de/docs/Web/API/MathMLAnchorElement/host). Wie bei `host` wird [`port`](/de/docs/Web/API/MathMLAnchorElement/port) nur eingeschlossen, wenn er nicht der Standardport für das Protokoll ist.
- Für URLs mit dem Schema `file:` ist der Wert browserabhängig.
- Für URLs mit dem Schema `blob:` wird der Ursprung der auf `blob:` folgenden URL verwendet, jedoch nur, wenn diese URL das Schema `http:`, `https:` oder `file:` verwendet. Beispielsweise hat `blob:https://mozilla.org` den Wert `https://mozilla.org`.

In allen anderen Fällen wird der String `"null"` zurückgegeben.

Weitere Informationen finden Sie unter [`URL.origin`](/de/docs/Web/API/URL/origin).

## Wert

Ein String.

## Beispiele

### Grundlegende Verwendung

Bei diesem MathML:

```html
<math>
  <a id="myAnchor" href="https://example.com/subsection#examples"> ... </a>
</math>
```

können Sie `origin` des Ankers wie folgt abrufen:

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
