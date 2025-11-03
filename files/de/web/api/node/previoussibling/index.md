---
title: "Node: previousSibling-Eigenschaft"
short-title: previousSibling
slug: Web/API/Node/previousSibling
l10n:
  sourceCommit: aff319cd81d10cfda31b13adb3263deafb284b20
---

{{APIRef("DOM")}}

Die schreibgeschützte **`previousSibling`**-Eigenschaft der [`Node`](/de/docs/Web/API/Node)-Schnittstelle
gibt den Knoten zurück, der in der [`childNodes`](/de/docs/Web/API/Node/childNodes)-Liste des übergeordneten Knotens unmittelbar vor dem angegebenen Knoten steht,
oder `null`, wenn der angegebene Knoten der erste in dieser Liste ist.

> [!NOTE]
> Browser fügen einem Dokument Textknoten hinzu, um Leerzeichen im Quellmarkup darzustellen.
> Daher kann ein Knoten, der zum Beispiel mit [`Node.firstChild`](/de/docs/Web/API/Node/firstChild) oder `Node.previousSibling` erhalten wird, einen Leerzeichen-Textknoten anstelle des tatsächlichen Elements darstellen, das der Autor zu erhalten beabsichtigte.
>
> Weitere Informationen finden Sie unter [Arbeiten mit Leerzeichen im DOM](/de/docs/Web/CSS/CSS_text/Whitespace#working_with_whitespace_in_the_dom).
>
> Sie können [`previousElementSibling`](/de/docs/Web/API/Element/previousElementSibling) verwenden, um den vorhergehenden Element-Knoten zu erhalten (dabei werden Textknoten und andere Nicht-Element-Knoten übersprungen).
>
> Um in die entgegengesetzte Richtung durch die Liste der Kindknoten zu navigieren, verwenden Sie [Node.nextSibling](/de/docs/Web/API/Node/nextSibling).

## Wert

Ein [`Node`](/de/docs/Web/API/Node), der das vorherige Geschwisterelement des aktuellen Knotens darstellt,
oder `null`, wenn es keines gibt.

## Beispiele

Die folgenden Beispiele zeigen, wie `previousSibling` funktioniert, sowohl mit als auch ohne gemischte Textknoten in den Elementen.

### Erstes Beispiel

In diesem Beispiel haben wir eine Reihe von {{HTMLElement("span")}}-Elementen, die direkt nebeneinander stehen, ohne Leerraum dazwischen.

```html
<span id="b0"></span><span id="b1"></span><span id="b2"></span>
```

```js
document.getElementById("b1").previousSibling; // <span id="b0">
document.getElementById("b2").previousSibling.id; // "b1"
```

### Zweites Beispiel

In diesem Beispiel befinden sich Leerzeichen-Textknoten (Zeilenumbrüche) zwischen den {{htmlelement("span")}}-Elementen.

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
