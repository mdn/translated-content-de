---
title: "Knoten: previousSibling Eigenschaft"
short-title: previousSibling
slug: Web/API/Node/previousSibling
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("DOM")}}

Die schreibgeschützte **`previousSibling`**-Eigenschaft des {{domxref("Node")}}-Interfaces gibt den Knoten zurück, der in der Liste der {{domxref("Node.childNodes", "childNodes")}} des übergeordneten Elements unmittelbar vor dem angegebenen steht, oder `null`, wenn der angegebene Knoten der erste in dieser Liste ist.

> [!NOTE]
> Browser fügen Textknoten in ein Dokument ein, um Leerzeichen in der Quellmarkierung darzustellen.
> Daher kann ein Knoten, der zum Beispiel mit [`Node.firstChild`](/de/docs/Web/API/Node/firstChild) oder `Node.previousSibling` gewonnen wird, sich auf einen Leerzeichen-Textknoten beziehen und nicht auf das tatsächliche Element, das der Autor erhalten wollte.
>
> Weitere Informationen finden Sie unter [Whitespace im DOM](/de/docs/Web/API/Document_Object_Model/Whitespace).
>
> Sie können [`previousElementSibling`](/de/docs/Web/API/Element/previousElementSibling) verwenden, um den vorherigen Elementknoten zu erhalten (Überspringen von Textknoten und anderen Nicht-Element-Knoten).
>
> Um in die entgegengesetzte Richtung durch die Liste der Kindknoten zu navigieren, verwenden Sie [Node.nextSibling](/de/docs/Web/API/Node/nextSibling).

## Wert

Ein {{domxref("Node")}}, der das vorherige Geschwister des aktuellen Knotens darstellt, oder `null`, wenn keines vorhanden ist.

## Beispiele

Die folgenden Beispiele zeigen, wie `previousSibling` mit und ohne gemischte Textknoten bei den Elementen funktioniert.

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

In diesem Beispiel gibt es zwischen den `img`-Elementen Leerzeichen-Textknoten (Zeilenumbrüche).

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

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{domxref("Node.nextSibling")}}
- {{domxref("Element.previousElementSibling")}}
