---
title: "Node: previousSibling-Eigenschaft"
short-title: previousSibling
slug: Web/API/Node/previousSibling
l10n:
  sourceCommit: 9f7e7e9075e9f2b1937d2c8000f52a8ff76bff52
---

{{APIRef("DOM")}}

Die schreibgeschützte **`previousSibling`**-Eigenschaft des [`Node`](/de/docs/Web/API/Node)-Interfaces
gibt den Knoten zurück, der im `childNodes`-Array des Elternteils
unmittelbar dem angegebenen Knoten vorausgeht,
oder `null`, wenn der angegebene Knoten der erste in dieser Liste ist.

> [!NOTE]
> Browser fügen einem Dokument Textknoten hinzu, um Leerzeichen im Quellmarkup darzustellen.
> Daher kann ein Knoten, der zum Beispiel mit [`Node.firstChild`](/de/docs/Web/API/Node/firstChild)
> oder `Node.previousSibling` erhalten wird,
> auf einen Leerzeichen-Textknoten verweisen anstatt auf das eigentliche Element, das der Autor erhalten wollte.
>
> Weitere Informationen finden Sie unter [Arbeiten mit Leerzeichen im DOM](/de/docs/Web/CSS/CSS_text/Whitespace#working_with_whitespace_in_the_dom).
>
> Sie können [`previousElementSibling`](/de/docs/Web/API/Element/previousElementSibling) verwenden,
> um den vorherigen Elementknoten zu erhalten (überspringt Textknoten und alle anderen Nicht-Element-Knoten).
>
> Um in umgekehrter Richtung durch die `childNodes`-Liste zu navigieren, verwenden Sie [Node.nextSibling](/de/docs/Web/API/Node/nextSibling).

## Wert

Ein [`Node`](/de/docs/Web/API/Node), der das vorherige Geschwister des aktuellen Knotens darstellt,
oder `null`, wenn es keine gibt.

## Beispiele

Die folgenden Beispiele zeigen, wie `previousSibling` mit und ohne Textknoten gemischt mit Elementen funktioniert.

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

In diesem Beispiel gibt es Leerzeichentextknoten (Zeilenumbrüche) zwischen den {{htmlelement("span")}}-Elementen.

```html
<span id="b0"></span>
<span id="b1"></span>
<span id="b2"></span>
```

```js
document.getElementById("b1").previousSibling; // #text
document.getElementById("b1").previousSibling.previousSibling; // <span id="b0">
document.getElementById("b2").previousSibling.previousSibling; // <span id="b1">
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
