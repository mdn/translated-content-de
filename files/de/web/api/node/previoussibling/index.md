---
title: "Node: previousSibling-Eigenschaft"
short-title: previousSibling
slug: Web/API/Node/previousSibling
l10n:
  sourceCommit: d4a50b63d9afd826e61eb8833e8e6337b5059e8a
---

{{APIRef("DOM")}}

Die schreibgeschützte **`previousSibling`**-Eigenschaft des [`Node`](/de/docs/Web/API/Node)-Interfaces gibt den Knoten zurück, der in der `childNodes`-Liste des übergeordneten Knotens unmittelbar dem angegebenen Knoten vorausgeht, oder `null`, wenn der angegebene Knoten der erste in dieser Liste ist.

> [!NOTE]
> Browser fügen einem Dokument Textknoten hinzu, um Leerzeichen im Quellcode darzustellen.
> Daher kann ein Knoten, der beispielsweise mit [`Node.firstChild`](/de/docs/Web/API/Node/firstChild) oder `Node.previousSibling` erhalten wird, auf einen Leerzeichen-Textknoten verweisen, anstatt auf das tatsächliche Element, das der Autor erhalten wollte.
>
> Weitere Informationen finden Sie unter [Arbeiten mit Leerzeichen im DOM](/de/docs/Web/CSS/CSS_text/Whitespace#working_with_whitespace_in_the_dom).
>
> Sie können [`previousElementSibling`](/de/docs/Web/API/Element/previousElementSibling) verwenden, um den vorherigen Element-Knoten zu erhalten (um Textknoten und andere Nicht-Element-Knoten zu überspringen).
>
> Um in die entgegengesetzte Richtung durch die `childNodes`-Liste zu navigieren, verwenden Sie [Node.nextSibling](/de/docs/Web/API/Node/nextSibling).

## Wert

Ein [`Node`](/de/docs/Web/API/Node), der das vorherige Geschwisterkind des aktuellen Knotens darstellt, oder `null`, wenn es keines gibt.

## Beispiele

Die folgenden Beispiele zeigen, wie `previousSibling` mit und ohne Textknoten funktioniert, die zwischen den Elementen gemischt sind.

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
