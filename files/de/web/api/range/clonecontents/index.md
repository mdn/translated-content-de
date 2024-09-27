---
title: "Range: cloneContents() Methode"
short-title: cloneContents()
slug: Web/API/Range/cloneContents
l10n:
  sourceCommit: 1a91b0b63f0cbaca9125bd48d4e5bc8afed2a7a3
---

{{ APIRef("DOM") }}

Die **`Range.cloneContents()`** Methode gibt ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) zurück, das die Objekte vom Typ [`Node`](/de/docs/Web/API/Node) kopiert, die im [`Range`](/de/docs/Web/API/Range) enthalten sind.

Event-Listener, die mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) hinzugefügt wurden, werden beim Klonen nicht kopiert. HTML-Attribut-Ereignisse werden wie bei der [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) Methode dupliziert. HTML `id` Attribute werden ebenfalls geklont, was zu einem ungültigen Dokument durch Klonen führen kann.

Teilweise ausgewählte Nodes beinhalten die übergeordneten Tags, die notwendig sind, um das Dokumentfragment gültig zu machen.

## Syntax

```js-nolint
cloneContents()
```

### Parameter

Keine.

### Rückgabewert

Ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment) Objekt.

## Beispiele

```js
range = document.createRange();
range.selectNode(document.getElementsByTagName("div").item(0));
documentFragment = range.cloneContents();
document.body.appendChild(documentFragment);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Das DOM-Schnittstellenverzeichnis](/de/docs/Web/API/Document_Object_Model)
