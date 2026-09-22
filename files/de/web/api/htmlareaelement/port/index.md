---
title: "HTMLAreaElement: port-Eigenschaft"
short-title: port
slug: Web/API/HTMLAreaElement/port
l10n:
  sourceCommit: e02a864c445ce44efe815d921ab8fcc46fbfd4c5
---

{{ApiRef("HTML DOM")}}

Die **`port`**-Eigenschaft der [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement)-Schnittstelle ist ein String, der die Portnummer des `href`-Attributs des `<area>`-Elements enthält. Wenn der Port der Standardport für das Protokoll ist (`80` für `ws:` und `http:`, `443` für `wss:` und `https:` sowie `21` für `ftp:`), enthält diese Eigenschaft einen leeren String, `""`.

Diese Eigenschaft kann festgelegt werden, um den Port der URL zu ändern. Wenn die URL keinen [`host`](/de/docs/Web/API/HTMLAnchorElement/host) hat oder ihr Schema `file:` ist, hat das Festlegen dieser Eigenschaft keine Wirkung. Ungültige Portnummern werden außerdem stillschweigend ignoriert.

Weitere Informationen finden Sie unter [`URL.port`](/de/docs/Web/API/URL/port).

## Wert

Ein String.

## Beispiele

### Den Port aus einem Area-Link abrufen

```js
// An <area id="myArea" href="https://developer.mozilla.org:443/en-US/docs/HTMLAreaElement"> element is in the document
const area = document.getElementById("myArea");
area.port; // Returns ''
```

```js
// Another <area id="myArea" href="https://developer.mozilla.org:8888/en-US/docs/HTMLAreaElement"> element is in the document
const area = document.getElementById("myArea");
area.port; // Returns:'8888'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement)-Schnittstelle, zu der sie gehört.
