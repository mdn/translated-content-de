---
title: "HTMLElement: innerText-Eigenschaft"
short-title: innerText
slug: Web/API/HTMLElement/innerText
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("HTML DOM")}}

Die **`innerText`**-Eigenschaft des {{domxref("HTMLElement")}}-Interfaces stellt den gerenderten Textinhalt eines Knotens und seiner Nachkommen dar.

Als Getter approximiert es den Text, den ein Benutzer erhalten würde, wenn er den Inhalt des Elements mit dem Cursor markiert und dann in die Zwischenablage kopiert. Als Setter ersetzt es die Kinder des Elements mit dem angegebenen Wert und wandelt dabei Zeilenumbrüche in {{HTMLElement("br")}}-Elemente um.

> **Note:** `innerText` wird leicht mit {{domxref("Node.textContent")}} verwechselt, es gibt jedoch wichtige Unterschiede zwischen den beiden. Grundsätzlich ist `innerText` sich des gerenderten Erscheinungsbildes des Textes bewusst, während `textContent` dies nicht ist.

## Wert

Ein String, der den gerenderten Textinhalt eines Elements darstellt.

Wenn das Element selbst nicht [gerendert wird](https://html.spec.whatwg.org/multipage/rendering.html#being-rendered) (zum Beispiel, wenn es vom Dokument getrennt oder versteckt ist), entspricht der zurückgegebene Wert der {{domxref("Node.textContent")}}-Eigenschaft.

> [!WARNING]
> Das Setzen von `innerText` auf einen Knoten entfernt _alle_ Kinder des Knotens
> und ersetzt sie durch einen einzelnen Textknoten mit dem angegebenen String-Wert.

## Beispiele

Dieses Beispiel vergleicht `innerText` mit {{domxref("Node.textContent")}}.
Beachten Sie, dass `innerText` sich über Dinge wie {{htmlElement("br")}}-Elemente bewusst ist und versteckte Elemente ignoriert.

### HTML

```html
<h3>Quell-Element:</h3>
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
    Schauen Sie sich an<br />
    wie dieser Text<br />
    unten interpretiert wird.
  </span>
  <span style="display:none">VERSTECKTER TEXT</span>
</p>
<h3>Ergebnis von textContent:</h3>
<textarea id="textContentOutput" rows="6" cols="30" readonly>…</textarea>
<h3>Ergebnis von innerText:</h3>
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

- {{domxref("HTMLElement.outerText")}}
- {{domxref("Element.innerHTML")}}
