---
title: "HTMLAnchorElement: port-Eigenschaft"
short-title: port
slug: Web/API/HTMLAnchorElement/port
l10n:
  sourceCommit: 8cc63f7e6619446ea38f6a38c457a597a9af564b
---

{{ApiRef("HTML DOM")}}

Die **`port`**-Eigenschaft der [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement)-Schnittstelle ist ein String, der die Portnummer des `href`-Attributs des `<a>`-Elements enthält. Wenn der Port der Standardport für das Protokoll ist (`80` für `ws:` und `http:`, `443` für `wss:` und `https:`, sowie `21` für `ftp:`), enthält diese Eigenschaft einen leeren String, `""`.

Diese Eigenschaft kann gesetzt werden, um den Port der URL zu ändern. Wenn die URL keinen [`host`](/de/docs/Web/API/HTMLAnchorElement/host) hat oder ihr Schema `file:` ist, hat das Setzen dieser Eigenschaft keine Wirkung. Ungültige Portnummern werden stillschweigend ignoriert.

Lesen Sie mehr unter [`URL.port`](/de/docs/Web/API/URL/port).

## Wert

Ein String.

## Beispiele

### Abrufen des Ports aus einem Anchor-Link

```js
// An <a id="myAnchor" href="https://developer.mozilla.org:443/en-US/docs/HTMLAnchorElement"> element is in the document
const anchor = document.getElementByID("myAnchor");
anchor.port; // returns ''
```

```js
// Another <a id="myAnchor" href="https://developer.mozilla.org:8888/en-US/docs/HTMLAnchorElement"> element is in the document
const anchor = document.getElementByID("myAnchor");
anchor.port; // Returns:'8888'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement)-Schnittstelle, zu der sie gehört.
