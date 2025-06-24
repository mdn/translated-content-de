---
title: "HTMLElement: Eigenschaft innerText"
short-title: innerText
slug: Web/API/HTMLElement/innerText
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{APIRef("HTML DOM")}}

Die **`innerText`**-Eigenschaft des [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interfaces repräsentiert den gerenderten Textinhalt eines Knotens und seiner Nachkommen.

Als Getter approximiert sie den Text, den der Benutzer erhalten würde, wenn er den Inhalt des Elements mit dem Cursor markierte und dann in die Zwischenablage kopierte. Als Setter wird dies die Kinder des Elements durch den gegebenen Wert ersetzen, wobei jegliche Zeilenumbrüche in {{HTMLElement("br")}}-Elemente umgewandelt werden.

> [!NOTE] > `innerText` wird leicht mit [`Node.textContent`](/de/docs/Web/API/Node/textContent) verwechselt, aber es gibt wichtige Unterschiede zwischen den beiden.
> Grundsätzlich ist `innerText` sich des gerenderten Erscheinungsbildes des Textes bewusst, während `textContent` dies nicht ist.

## Wert

Ein String, der den gerenderten Textinhalt eines Elements repräsentiert.

Wenn das Element selbst nicht [gerendert wird](https://html.spec.whatwg.org/multipage/rendering.html#being-rendered) (zum Beispiel, wenn es vom Dokument getrennt oder vor der Ansicht verborgen ist), ist der zurückgegebene Wert derselbe wie die [`Node.textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft.

> [!WARNING]
> Das Setzen von `innerText` auf einem Knoten entfernt _alle_ Kinder des Knotens
> und ersetzt sie durch einen einzelnen Textknoten mit dem gegebenen String-Wert.

## Beispiele

Dieses Beispiel vergleicht `innerText` mit [`Node.textContent`](/de/docs/Web/API/Node/textContent).
Beachten Sie, wie `innerText` sich Dinge wie {{htmlElement("br")}}-Elemente bewusst ist und versteckte Elemente ignoriert.

### HTML

```html
<h3>Source element:</h3>
<p id="source">
  <style>
    #source {
      color: red;
    }
    #text {
      text-transform: uppercase;
    }
  </style>
  <span id="text">
    Take a look at<br />
    how this text<br />
    is interpreted below.
  </span>
  <span style="display:none">HIDDEN TEXT</span>
</p>
<h3>Result of textContent:</h3>
<textarea id="textContentOutput" rows="6" cols="30" readonly>…</textarea>
<h3>Result of innerText:</h3>
<textarea id="innerTextOutput" rows="6" cols="30" readonly>…</textarea>
```

### JavaScript

```js
const source = document.getElementById("source");
const textContentOutput = document.getElementById("textContentOutput");
const innerTextOutput = document.getElementById("innerTextOutput");

textContentOutput.value = source.textContent;
innerTextOutput.value = source.innerText;
```

### Ergebnis

{{EmbedLiveSample("Examples", 700, 450)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLElement.outerText`](/de/docs/Web/API/HTMLElement/outerText)
- [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML)
