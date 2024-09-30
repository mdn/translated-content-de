---
title: "Node: previousSibling Eigenschaft"
short-title: previousSibling
slug: Web/API/Node/previousSibling
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("DOM")}}

Die schreibgeschützte **`previousSibling`**-Eigenschaft der [`Node`](/de/docs/Web/API/Node)-Schnittstelle
gibt den Knoten zurück, der unmittelbar vor dem angegebenen Knoten in der [`childNodes`](/de/docs/Web/API/Node/childNodes)-Liste seines Elternknotens steht,
oder `null`, wenn der angegebene Knoten der erste in dieser Liste ist.

> [!NOTE]
> Browser fügen einem Dokument Textknoten hinzu, um Leerzeichen im Quellmarkup darzustellen.
> Daher kann ein Knoten, der beispielsweise mit [`Node.firstChild`](/de/docs/Web/API/Node/firstChild)
> oder `Node.previousSibling` abgerufen wird,
> auf einen Leerzeichentextknoten verweisen, anstatt auf das tatsächliche Element, das der Autor abrufen wollte.
>
> Siehe [Leerzeichen im DOM](/de/docs/Web/API/Document_Object_Model/Whitespace) für weitere Informationen.
>
> Sie können [`previousElementSibling`](/de/docs/Web/API/Element/previousElementSibling) verwenden,
> um den vorherigen Elementknoten zu erhalten (Überspringen von Textknoten und anderen nicht-Elementknoten).
>
> Um in die entgegengesetzte Richtung durch die Liste der Kindknoten zu navigieren, verwenden Sie [Node.nextSibling](/de/docs/Web/API/Node/nextSibling).

## Wert

Ein [`Node`](/de/docs/Web/API/Node), der das vorherige Geschwister des aktuellen Knotens darstellt,
oder `null`, wenn es keine gibt.

## Beispiele

Die folgenden Beispiele zeigen, wie `previousSibling` funktioniert, mit und ohne zwischen den Elementen gemischte Textknoten.

### Erstes Beispiel

In diesem Beispiel haben wir eine Reihe von `img`-Elementen, die direkt nebeneinander stehen, ohne Leerzeichen dazwischen.

```html
<img id="b0" /><img id="b1" /><img id="b2" />
```

```js
document.getElementById("b1").previousSibling; // <img id="b0">
document.getElementById("b2").previousSibling.id; // "b1"
```

### Zweites Beispiel

In diesem Beispiel befinden sich Leerzeichentextknoten (Zeilenumbrüche) zwischen den `img`-Elementen.

```html
<img id="b0" />
<img id="b1" />
<img id="b2" />
```

```js
document.getElementById("b1").previousSibling; // #text
document.getElementById("b1").previousSibling.previousSibling; // <img id="b0">
document.getElementById("b2").previousSibling.previousSibling; // <img id="b1">
document.getElementById("b2").previousSibling; // #text
document.getElementById("b2").previousSibling.id; // undefined
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Node.nextSibling`](/de/docs/Web/API/Node/nextSibling)
- [`Element.previousElementSibling`](/de/docs/Web/API/Element/previousElementSibling)
