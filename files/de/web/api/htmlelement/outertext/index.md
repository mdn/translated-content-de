---
title: "HTMLElement: outerText Eigenschaft"
short-title: outerText
slug: Web/API/HTMLElement/outerText
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("DOM")}}

Die **`outerText`**-Eigenschaft des [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interfaces gibt denselben Wert zurück wie [`HTMLElement.innerText`](/de/docs/Web/API/HTMLElement/innerText).
Wenn sie als Setter verwendet wird, ersetzt sie den gesamten aktuellen Knoten durch den angegebenen Text (dies unterscheidet sich von `innerText`, welches den Inhalt _innerhalb_ des aktuellen Knotens ersetzt).

Siehe [`HTMLElement.innerText`](/de/docs/Web/API/HTMLElement/innerText) für weitere Informationen und Beispiele, die zeigen, wie beide Eigenschaften als Getter verwendet werden.

## Wert

Ein String, der den angezeigten Textinhalt eines Elements und seiner Nachkommen darstellt.

Wenn das Element selbst nicht [gerendert wird](https://html.spec.whatwg.org/multipage/rendering.html#being-rendered) (zum Beispiel, wenn es vom Dokument getrennt oder aus der Ansicht ausgeblendet ist), ist der zurückgegebene Wert derselbe wie die [`Node.textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft.

Bei Verwendung als Setter ersetzt sie den aktuellen Knoten durch den angegebenen Text und wandelt dabei alle Zeilenumbrüche in {{HTMLElement("br")}}-Elemente um.

## Beispiele

Dieses Beispiel hebt den grundlegenden Unterschied zwischen `outerText` und `innerText` hervor, wenn sie als Setter verwendet werden (sie sind gleich, wenn sie als Getter verwendet werden).

> [!NOTE]
> Das Beispiel ist eine modifizierte Version von [What is the difference between innerText and outerText?](https://stackoverflow.com/questions/18481382/what-is-the-difference-between-innertext-and-outertext/18481435#18481435) (Stack Overflow) von [codingintrigue](https://stackoverflow.com/users/571194/codingintrigue), lizenziert unter [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).

Betrachten Sie eine Seite, die den folgenden HTML-Code enthält:

```html
<div>
  <p>Original content</p>
</div>
```

`outerText` ersetzt das gesamte ausgewählte Element, daher ersetzt das JavaScript `p.outerText = "Whole element replaced"` das gesamte ausgewählte `p`-Element:

```html
<div>Whole element replaced</div>
```

Im Gegensatz dazu ersetzt `p.innerText = "Content inside element replaced"` den Inhalt _innerhalb_ des ausgewählten `p`-Elements:

```html
<div>
  <p>Content inside element replaced</p>
</div>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLElement.innerText`](/de/docs/Web/API/HTMLElement/innerText)
- [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML)
