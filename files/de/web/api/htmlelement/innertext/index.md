---
title: "HTMLElement: innerText-Eigenschaft"
short-title: innerText
slug: Web/API/HTMLElement/innerText
l10n:
  sourceCommit: 5c513c8e3075989886ae5f3b00d92f2b2988085a
---

{{APIRef("HTML DOM")}}

Die **`innerText`**-Eigenschaft des [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interfaces repräsentiert den gerenderten Textinhalt eines Knotens und seiner Nachkommen.

Als Getter approximiert sie den Text, den der Benutzer erhalten würde, wenn er die Inhalte des Elements mit dem Cursor markiert und dann in die Zwischenablage kopiert.
Als Setter ersetzt sie die Kinder des Elements mit dem angegebenen Wert und konvertiert dabei alle Zeilenumbrüche in {{HTMLElement("br")}}-Elemente.

> [!NOTE]
> `innerText` wird leicht mit [`Node.textContent`](/de/docs/Web/API/Node/textContent) verwechselt, aber es gibt wichtige Unterschiede zwischen den beiden.
> Grundsätzlich ist `innerText` sich des gerenderten Erscheinungsbildes von Text bewusst, während `textContent` dies nicht ist.

## Wert

Ein String, der den gerenderten Textinhalt eines Elements darstellt.

Wenn das Element selbst nicht [gerendert wird](https://html.spec.whatwg.org/multipage/rendering.html#being-rendered) (zum Beispiel, wenn es vom Dokument getrennt oder aus der Sicht verborgen ist), ist der zurückgegebene Wert derselbe wie die [`Node.textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft.

> [!WARNING]
> Das Setzen von `innerText` auf einem Knoten entfernt _alle_ Kinder des Knotens und ersetzt sie durch einen einzelnen Textknoten mit dem angegebenen String-Wert.

## Beispiele

Dieses Beispiel vergleicht `innerText` mit [`Node.textContent`](/de/docs/Web/API/Node/textContent).
Beachten Sie, wie `innerText` sich bewusst ist über Dinge wie {{htmlElement("br")}}-Elemente und versteckte Elemente ignoriert.

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
<textarea id="textContentOutput" rows="18" cols="40" readonly>…</textarea>
<h3>Result of innerText:</h3>
<textarea id="innerTextOutput" rows="6" cols="40" readonly>…</textarea>
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

{{EmbedLiveSample("Examples", 700, 650)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLScriptElement.innerText`](/de/docs/Web/API/HTMLScriptElement/innerText)
- [`HTMLElement.outerText`](/de/docs/Web/API/HTMLElement/outerText)
- [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML)
