---
title: "HTMLAnchorElement: origin-Eigenschaft"
short-title: origin
slug: Web/API/HTMLAnchorElement/origin
l10n:
  sourceCommit: 8cc63f7e6619446ea38f6a38c457a597a9af564b
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`origin`**-Eigenschaft des [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement)-Interfaces gibt einen String zurück, der die Unicode-Serialisierung des Ursprungs (`origin`) des `href`-Attributs des `<a>`-Elements enthält.

Die genaue Struktur variiert je nach Typ der URL:

- Für URLs mit den Schemas `ftp:`, `http:`, `https:`, `ws:` und `wss:` wird das [`protocol`](/de/docs/Web/API/HTMLAnchorElement/protocol) gefolgt von `//` und anschließend von dem [`host`](/de/docs/Web/API/HTMLAnchorElement/host) zurückgegeben. Genau wie bei `host` wird der [`port`](/de/docs/Web/API/HTMLAnchorElement/port) nur eingeschlossen, wenn er nicht der Standardwert für das Protokoll ist.
- Für URLs mit dem Schema `file:` ist der Wert browserabhängig.
- Für URLs mit dem Schema `blob:` wird der Ursprung der URL, die auf `blob:` folgt, zurückgegeben, jedoch nur, wenn diese URL das Schema `http:`, `https:` oder `file:` verwendet. Zum Beispiel hat `blob:https://mozilla.org` den Ursprung `https://mozilla.org`.

In allen anderen Fällen wird der String `"null"` zurückgegeben.

Weitere Informationen finden Sie unter [`URL.origin`](/de/docs/Web/API/URL/origin).

## Wert

Ein String.

## Beispiele

```js
// An <a id="myAnchor" href="https://developer.mozilla.org/en-US/HTMLAnchorElement"> element is in the document
const anchor = document.getElementById("myAnchor");
anchor.origin; // returns 'https://developer.mozilla.org'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement)-Interface, zu dem es gehört.
