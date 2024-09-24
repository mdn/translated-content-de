---
title: "HTMLAnchorElement: port Eigenschaft"
short-title: port
slug: Web/API/HTMLAnchorElement/port
l10n:
  sourceCommit: 354f23773b65bad14192eca53e4a63471061b158
---

{{ApiRef("HTML DOM")}}

Die **`port`**-Eigenschaft des [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement)-Interfaces ist ein String, der die Portnummer der URL enthält, oder ein leerer String, wenn der Port der Standardport für das Protokoll ist.

> [!NOTE]
> Wenn das [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement)-Objekt sich auf eine URL bezieht, die keine explizite Portnummer enthält (z. B. `https://localhost`) oder eine Portnummer enthält, die der Standardportnummer entspricht, die zum Protokollteil der URL gehört (z. B. `https://localhost:443`), dann wird die `port`-Eigenschaft der leere String sein: `''`.

## Wert

Ein String.

## Beispiele

### Die Portnummer von einem Ankerlink erhalten

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

- Das [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement)-Interface, zu dem es gehört.
