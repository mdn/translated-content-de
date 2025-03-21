---
title: "Range: cloneContents() Methode"
short-title: cloneContents()
slug: Web/API/Range/cloneContents
l10n:
  sourceCommit: 2c0de98b0607ef262d9ef0877259ba41aaf53e6d
---

{{ APIRef("DOM") }}

Die **`cloneContents()`**-Methode des [`Range`](/de/docs/Web/API/Range)-Interfaces kopiert die ausgewählten [`Node`](/de/docs/Web/API/Node)-Kinder des [`commonAncestorContainer`](/de/docs/Web/API/Range/commonAncestorContainer) des Bereichs und platziert sie in einem neuen [`DocumentFragment`](/de/docs/Web/API/DocumentFragment)-Objekt.

Knoten werden unter Verwendung desselben Algorithmus wie bei [`Node.cloneNode()`](/de/docs/Web/API/Node/cloneNode) geklont, was bedeutet, dass mit Skripten angehängte Event-Listener nicht geklont werden. HTML-`id`-Attribute werden geklont, was durch Cloning zu einem ungültigen Dokument führen kann.

Die ersten und letzten ausgewählten Kinder von `commonAncestorContainer` können teilweise ausgewählt sein. In diesem Fall wird der Kindknoten selbst geklont, aber sein Inhalt ist nur der ausgewählte Teil, indem rekursiv der Bereich zwischen der Start-/End-Grenze des ursprünglichen Bereichs und der End-/Start-Grenze dieses Kindknotens geklont wird.

```plain
<p>paragraph 1</p><p>paragraph 2</p><p>paragraph 3</p>
       ^----------- selection ------------^

cloneContents() returns:

<p>graph 1</p><p>paragraph 2</p><p>para</p>
```

## Syntax

```js-nolint
cloneContents()
```

### Parameter

Keine.

### Rückgabewert

Ein [`DocumentFragment`](/de/docs/Web/API/DocumentFragment)-Objekt.

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

- [Das DOM-Interfaces-Index](/de/docs/Web/API/Document_Object_Model)
