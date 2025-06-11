---
title: "HTMLElement: focus() Methode"
short-title: focus()
slug: Web/API/HTMLElement/focus
l10n:
  sourceCommit: 7cd51a73ad94df604db79ccacbbe0513d0967650
---

{{ APIRef("HTML DOM") }}

Die **`HTMLElement.focus()`** Methode setzt den Fokus auf das angegebene Element, sofern es fokussierbar ist. Das fokussierte Element ist das Element, das standardmäßig Tastatur- und ähnliche Ereignisse empfängt.

Standardmäßig scrollt der Browser das Element nach dem Fokussieren in den sichtbaren Bereich und kann ebenfalls eine sichtbare Hervorhebung des fokussierten Elements bereitstellen (in der Regel durch das Anzeigen eines "Fokusrings" um das Element). Es werden Parameteroptionen bereitgestellt, um das standardmäßige Scrollen zu deaktivieren und die sichtbare Hervorhebung auf Elementen zu erzwingen.

## Syntax

```js-nolint
focus()
focus(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein optionales Objekt zur Steuerung von Aspekten des Fokussierungsprozesses. Dieses Objekt kann folgende Eigenschaften enthalten:

    - `preventScroll` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob der Browser das Dokument scrollen soll, um das neu fokussierte Element in den sichtbaren Bereich zu bringen oder nicht. Ein Wert von `false` für `preventScroll` (standardmäßig) bedeutet, dass der Browser das Element nach dem Fokussieren in den sichtbaren Bereich scrollt. Wenn `preventScroll` auf `true` gesetzt ist, erfolgt kein Scrollen.
    - `focusVisible` {{optional_inline}} {{experimental_inline}}
      - : Ein boolescher Wert, der auf `true` gesetzt werden sollte, um die sichtbare Hervorhebung des fokussierten Elements zu erzwingen, oder auf `false`, um dies zu verhindern. Wenn die Eigenschaft nicht angegeben ist, liefert der Browser eine sichtbare Hervorhebung, wenn festgestellt wird, dass dies die Zugänglichkeit für Benutzer verbessern würde.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Fokussieren auf ein Textfeld

Dieses Beispiel verwendet eine Schaltfläche, um den Fokus auf ein Textfeld zu setzen.

#### HTML

```html
<input id="myTextField" value="Text field." />
<button id="focusButton">Click to set focus on the text field</button>
```

#### JavaScript

Der folgende Code fügt einen Ereignishandler hinzu, um den Fokus auf das Textfeld zu setzen, wenn die Schaltfläche gedrückt wird. Beachten Sie, dass die meisten Browser automatisch eine sichtbare Hervorhebung (einen "Fokusring") für ein fokussiertes Textfeld hinzufügen, sodass der Code `focusVisible` nicht auf `true` setzt.

```js
document.getElementById("focusButton").addEventListener("click", () => {
  document.getElementById("myTextField").focus();
});
```

#### Ergebnis

Wählen Sie die Schaltfläche aus, um den Fokus auf das Textfeld zu setzen.

{{ EmbedLiveSample('Focus_on_a_text_field') }}

### Fokussieren auf eine Schaltfläche

Dieses Beispiel demonstriert, wie man den Fokus auf ein Schaltflächenelement setzen kann.

#### HTML

Zuerst definieren wir drei Schaltflächen. Sowohl die mittlere als auch die rechte Schaltfläche setzen den Fokus auf die linkeste Schaltfläche. Die ganz rechte Schaltfläche wird ebenfalls `focusVisible` angeben.

```html
<button id="myButton">Button</button>
<button id="focusButton">Click to set focus on "Button"</button>
<button id="focusButtonVisibleIndication">
  Click to set focus and focusVisible on "Button"
</button>
```

#### JavaScript

Der folgende Code richtet Ereignishandler für Klickereignisse auf die mittleren und rechten Schaltflächen ein.

```js
document.getElementById("focusButton").addEventListener("click", () => {
  document.getElementById("myButton").focus();
});

document
  .getElementById("focusButtonVisibleIndication")
  .addEventListener("click", () => {
    document.getElementById("myButton").focus({ focusVisible: true });
  });
```

#### Ergebnis

Wählen Sie entweder die mittlere Schaltfläche oder die ganz rechte Schaltfläche, um den Fokus auf die linkeste Schaltfläche zu setzen.

Browser zeigen normalerweise keine sichtbare Fokushervorhebung auf Schaltflächenelementen, wenn der Fokus programmgesteuert gesetzt wird, sodass der Effekt des Auswählens der mittleren Schaltfläche möglicherweise nicht offensichtlich ist. Wenn die `focusVisible`-Option jedoch von Ihrem Browser unterstützt wird, sollten Sie den Fokuswechsel auf die linkeste Schaltfläche sehen, wenn die ganz rechte Schaltfläche ausgewählt wird.

{{ EmbedLiveSample('Focus_on_a_button') }}

### Fokussieren mit und ohne Scrollen

Dieses Beispiel zeigt den Effekt des Setzens des Fokus mit der Option [`preventScroll`](#preventscroll), die auf `true` und `false` (standardmäßig) gesetzt ist.

#### HTML

Das HTML definiert zwei Schaltflächen, die verwendet werden, um den Fokus auf eine dritte Schaltfläche zu setzen, die nicht im sichtbaren Bereich ist

```html
<button id="focus_scroll">Click to set focus on off-screen button</button>
<button id="focus_no_scroll">
  Click to set focus on offscreen button without scrolling
</button>

<div id="container">
  <button id="myButton">Button</button>
</div>
```

```css hidden
#myButton {
  margin-top: 500px; /* Push the button off-screen */
}
```

#### JavaScript

Dieser Code setzt einen Klick-Ereignishandler auf die erste und zweite Schaltfläche, um den Fokus auf die letzte Schaltfläche zu setzen. Beachten Sie, dass der erste Handler die `preventScroll`-Option nicht angibt, sodass das Scrollen zum fokussierten Element aktiviert ist.

```js
document.getElementById("focus_scroll").addEventListener("click", () => {
  document.getElementById("myButton").focus(); // default: {preventScroll:false}
});

document.getElementById("focus_no_scroll").addEventListener("click", () => {
  document.getElementById("myButton").focus({ preventScroll: true });
});
```

#### Ergebnis

Wählen Sie die erste Schaltfläche, um den Fokus zu setzen und zur nicht sichtbaren Schaltfläche zu scrollen. Wenn Sie die zweite Schaltfläche auswählen, wird der Fokus gesetzt, das Scrollen ist jedoch deaktiviert.

{{ EmbedLiveSample('Focus with and without scrolling') }}

## Spezifikationen

{{Specifications}}

## Anmerkungen

- Wenn Sie `HTMLElement.focus()` von einem `mousedown`-Ereignishandler aus aufrufen, müssen Sie `event.preventDefault()` aufrufen, um zu verhindern, dass der Fokus vom `HTMLElement` abwandert.
- Das Verhalten des Fokus in Bezug auf verschiedene HTML-Funktionen wie [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) oder {{Glossary("shadow_tree", "shadow dom")}}, die zuvor unzureichend spezifiziert waren, wurden im Oktober 2019 aktualisiert. Weitere Informationen finden Sie im [WHATWG-Blog](https://blog.whatwg.org/focusing-on-focus).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLElement.blur`](/de/docs/Web/API/HTMLElement/blur), um den Fokus von einem Element zu entfernen.
- [`document.activeElement`](/de/docs/Web/API/Document/activeElement), um zu wissen, welches Element momentan fokussiert ist.
