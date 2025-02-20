---
title: "HTMLAreaElement: port-Eigenschaft"
short-title: port
slug: Web/API/HTMLAreaElement/port
l10n:
  sourceCommit: 8cc63f7e6619446ea38f6a38c457a597a9af564b
---

{{ApiRef("HTML DOM")}}

Die **`port`**-Eigenschaft der [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement)-Schnittstelle ist ein String, der die Portnummer des `href`-Werts des `<area>`-Elements enthält. Wenn der Port der Standardport für das Protokoll ist (`80` für `ws:` und `http:`, `443` für `wss:` und `https:`, sowie `21` für `ftp:`), enthält diese Eigenschaft einen leeren String, `""`.

Diese Eigenschaft kann gesetzt werden, um den Port der URL zu ändern. Hat die URL keinen [`host`](/de/docs/Web/API/HTMLAnchorElement/host) oder ist ihr Schema `file:`, hat das Setzen dieser Eigenschaft keine Auswirkung. Ebenso werden ungültige Portnummern stillschweigend ignoriert.

Weitere Informationen finden Sie unter [`URL.port`](/de/docs/Web/API/URL/port).

## Wert

Ein String.

## Beispiele

### Den Port eines Area-Links abrufen

```js
// An <area id="myArea" href="https://developer.mozilla.org:443/en-US/docs/HTMLAreaElement"> element is in the document
const area = document.getElementByID("myArea");
area.port; // Returns ''
```

```js
// Another <area id="myArea" href="https://developer.mozilla.org:8888/en-US/docs/HTMLAreaElement"> element is in the document
const area = document.getElementByID("myArea");
area.port; // Returns:'8888'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement)-Schnittstelle, zu der es gehört.
