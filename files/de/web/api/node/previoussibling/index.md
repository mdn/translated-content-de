---
title: "Node: previousSibling-Eigenschaft"
short-title: previousSibling
slug: Web/API/Node/previousSibling
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("DOM")}}

Die schreibgeschützte **`previousSibling`**-Eigenschaft der [`Node`](/de/docs/Web/API/Node)-Schnittstelle
gibt den Knoten zurück, der dem angegebenen unmittelbar in der [`childNodes`](/de/docs/Web/API/Node/childNodes)-Liste des übergeordneten Knotens vorausgeht,
oder `null`, wenn der angegebene Knoten der erste in dieser Liste ist.

> [!NOTE]
> Browser fügen Textknoten in ein Dokument ein, um Leerzeichen im Quellmarkup darzustellen.
> Daher kann ein Knoten, der zum Beispiel mit [`Node.firstChild`](/de/docs/Web/API/Node/firstChild)
> oder `Node.previousSibling` erhalten wird,
> auf einen Leerzeichen-Textknoten verweisen, anstatt auf das eigentliche Element, das der Autor beabsichtigte zu erhalten.
>
> Für weitere Informationen siehe [Leerzeichen im DOM](/de/docs/Web/API/Document_Object_Model/Whitespace).
>
> Sie können [`previousElementSibling`](/de/docs/Web/API/Element/previousElementSibling) verwenden,
> um den vorherigen Elementknoten zu erhalten (Überspringen von Textknoten und anderen nicht-Elementknoten).
>
> Um in entgegen gesetzter Richtung durch die Liste der Kindknoten zu navigieren, verwenden Sie [Node.nextSibling](/de/docs/Web/API/Node/nextSibling).

## Wert

Ein [`Node`](/de/docs/Web/API/Node), der das vorherige Geschwister des aktuellen Knotens darstellt,
oder `null`, wenn es keine gibt.

## Beispiele

Die folgenden Beispiele zeigen, wie `previousSibling` funktioniert, sowohl mit als auch ohne Textknoten, die mit Elementen gemischt sind.

### Erstes Beispiel

In diesem Beispiel haben wir eine Reihe von `img`-Elementen, die direkt nebeneinander liegen, ohne Leerzeichen dazwischen.

```html
<img id="b0" /><img id="b1" /><img id="b2" />
```

```js
document.getElementById("b1").previousSibling; // <img id="b0">
document.getElementById("b2").previousSibling.id; // "b1"
```

### Zweites Beispiel

In diesem Beispiel gibt es Leerzeichen-Textknoten (Zeilenumbrüche) zwischen den `img`-Elementen.

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
