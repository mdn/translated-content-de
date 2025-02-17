---
title: "HTMLAreaElement: origin-Eigenschaft"
short-title: origin
slug: Web/API/HTMLAreaElement/origin
l10n:
  sourceCommit: 8cc63f7e6619446ea38f6a38c457a597a9af564b
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`origin`**-Eigenschaft der [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement)-Schnittstelle gibt einen String zurück, der die Unicode-Serialisierung des Ursprungs (`origin`) des `href`-Attributes des `<area>`-Elements enthält.

Die genaue Struktur variiert je nach URL-Typ:

- Für URLs mit den Schemata `ftp:`, `http:`, `https:`, `ws:` und `wss:` wird das [`protocol`](/de/docs/Web/API/HTMLAnchorElement/protocol) gefolgt von `//` und anschließend dem [`host`](/de/docs/Web/API/HTMLAnchorElement/host) zurückgegeben. Ähnlich wie bei `host` wird der [`port`](/de/docs/Web/API/HTMLAnchorElement/port) nur einbezogen, wenn er nicht der Standardwert für das Protokoll ist.
- Für URLs mit dem Schema `file:` ist der Wert abhängig vom Browser.
- Für URLs mit dem Schema `blob:` wird der Ursprung der URL nach `blob:` verwendet, jedoch nur, wenn diese URL `http:`, `https:` oder `file:` als Schema verwendet. Zum Beispiel wird `blob:https://mozilla.org` den Ursprung `https://mozilla.org` haben.

In allen anderen Fällen wird der String `"null"` zurückgegeben.

Weitere Informationen finden Sie unter [`URL.origin`](/de/docs/Web/API/URL/origin).

## Wert

Ein String.

## Beispiele

```js
// An <area id="myArea" href="https://developer.mozilla.org/en-US/HTMLAreaElement"> element is in the document
const area = document.getElementById("myArea");
area.origin; // returns 'https://developer.mozilla.org'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement)-Schnittstelle, zu der diese Eigenschaft gehört.
