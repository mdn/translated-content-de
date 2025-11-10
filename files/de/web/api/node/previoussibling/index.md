---
title: "Knoten: previousSibling-Eigenschaft"
short-title: previousSibling
slug: Web/API/Node/previousSibling
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("DOM")}}

Die schreibgeschützte **`previousSibling`**-Eigenschaft des [`Node`](/de/docs/Web/API/Node)-Interfaces
gibt den Knoten zurück, der unmittelbar vor dem angegebenen in der [`childNodes`](/de/docs/Web/API/Node/childNodes)-Liste des übergeordneten Elements liegt,
oder `null`, wenn der angegebene Knoten der erste in dieser Liste ist.

> [!NOTE]
> Browser fügen Textknoten in ein Dokument ein, um Leerzeichen im Quelltext darzustellen.
> Daher kann ein Knoten, der z.B. mit [`Node.firstChild`](/de/docs/Web/API/Node/firstChild)
> oder `Node.previousSibling` erhalten wurde,
> auf einen Leerzeichentextknoten verweisen, anstatt auf das tatsächlich beabsichtigte Element.
>
> Weitere Informationen finden Sie unter [Arbeiten mit Leerzeichen im DOM](/de/docs/Web/CSS/Guides/Text/Whitespace#working_with_whitespace_in_the_dom).
>
> Sie können [`previousElementSibling`](/de/docs/Web/API/Element/previousElementSibling) verwenden,
> um den vorherigen Elementknoten zu erhalten (ohne Textknoten und andere Nicht-Element-Knoten).
>
> Um in der entgegengesetzten Richtung durch die Liste der Kindknoten zu navigieren, verwenden Sie [Node.nextSibling](/de/docs/Web/API/Node/nextSibling).

## Wert

Ein [`Node`](/de/docs/Web/API/Node), der das vorherige Geschwister des aktuellen Knotens darstellt,
oder `null`, wenn es keines gibt.

## Beispiele

Die folgenden Beispiele demonstrieren, wie `previousSibling` mit und ohne vermischte Textknoten mit Elementen funktioniert.

### Erstes Beispiel

In diesem Beispiel haben wir eine Reihe von {{HTMLElement("span")}}-Elementen, die direkt nebeneinander liegen, ohne Leerzeichen dazwischen.

```html
<span id="b0"></span><span id="b1"></span><span id="b2"></span>
```

```js
document.getElementById("b1").previousSibling; // <span id="b0">
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
