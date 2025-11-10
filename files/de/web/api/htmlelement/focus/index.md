---
title: "HTMLElement: focus()-Methode"
short-title: focus()
slug: Web/API/HTMLElement/focus
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{ APIRef("HTML DOM") }}

Die **`HTMLElement.focus()`**-Methode setzt den Fokus auf das angegebene Element, wenn es fokussierbar ist.
Das fokussierte Element ist das Element, das standardmäßig Tastatur- und ähnliche Ereignisse empfängt.

Standardmäßig scrollt der Browser das Element nach dem Fokussieren in den sichtbaren Bereich und bietet möglicherweise eine sichtbare Indikation des fokussierten Elements (typischerweise durch das Anzeigen eines "Fokus-Rings" um das Element).
Parameteroptionen werden bereitgestellt, um das standardmäßige Scrollen zu deaktivieren und eine sichtbare Indikation auf Elementen zu erzwingen.

## Syntax

```js-nolint
focus()
focus(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein optionales Objekt zur Steuerung von Aspekten des Fokussierungsvorgangs.
    Dieses Objekt kann die folgenden Eigenschaften enthalten:
    - `preventScroll` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob der Browser das Dokument scrollen soll, um das neu fokussierte Element in den sichtbaren Bereich zu bringen.
        Ein Wert von `false` für `preventScroll` (der Standard) bedeutet, dass der Browser das Element nach dem Fokussieren in den sichtbaren Bereich scrollen wird.
        Wenn `preventScroll` auf `true` gesetzt ist, tritt kein Scrollen auf.
    - `focusVisible` {{optional_inline}} {{experimental_inline}}
      - : Ein boolescher Wert, der auf `true` gesetzt werden sollte, um eine sichtbare Indikation zu erzwingen, oder auf `false`, um sie zu verhindern, dass das Element fokussiert ist.
        Wenn die Eigenschaft nicht angegeben ist, bietet ein Browser eine sichtbare Indikation, wenn er entscheidet, dass dies die Barrierefreiheit für Benutzer verbessern würde.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Fokus auf ein Textfeld

Dieses Beispiel verwendet einen Button, um den Fokus auf ein Textfeld zu setzen.

#### HTML

```html
<input id="myTextField" value="Text field." />
<button id="focusButton">Click to set focus on the text field</button>
```

#### JavaScript

Der folgende Code fügt einen Ereignishandler hinzu, um den Fokus auf das Textfeld zu setzen, wenn der Button gedrückt wird.
Beachten Sie, dass die meisten Browser automatisch eine sichtbare Indikation (einen "Fokus-Ring") für ein fokussiertes Textfeld hinzufügen, sodass der Code `focusVisible` nicht auf `true` setzt.

```js
document.getElementById("focusButton").addEventListener("click", () => {
  document.getElementById("myTextField").focus();
});
```

#### Ergebnis

Wählen Sie den Button, um den Fokus auf das Textfeld zu setzen.

{{ EmbedLiveSample('Focus_on_a_text_field') }}

### Fokus auf einen Button

Dieses Beispiel zeigt, wie Sie den Fokus auf ein Button-Element setzen können.

#### HTML

Zuerst definieren wir drei Buttons.
Sowohl der mittlere als auch der rechte Button setzen den Fokus auf den linken Button.
Der rechte Button wird auch `focusVisible` angeben.

```html
<button id="myButton">Button</button>
<button id="focusButton">Click to set focus on "Button"</button>
<button id="focusButtonVisibleIndication">
  Click to set focus and focusVisible on "Button"
</button>
```

#### JavaScript

Der folgende Code richtet Ereignishandler für Klickereignisse auf den mittleren und den rechten Button ein.

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

Wählen Sie entweder den mittleren Button oder den rechten Button, um den Fokus auf den linken Button zu setzen.

Browser zeigen normalerweise keine sichtbare Fokus-Indikation auf Button-Elementen, wenn der Fokus programmgesteuert gesetzt wird, daher ist der Effekt des Auswählens des mittleren Buttons möglicherweise nicht offensichtlich.
Wenn die `focusVisible`-Option jedoch in Ihrem Browser unterstützt wird, sollten Sie sehen, dass sich der Fokus auf den linken Button ändert, wenn der rechte Button ausgewählt ist.

{{ EmbedLiveSample('Focus_on_a_button') }}

### Fokus mit und ohne Scrollen

Dieses Beispiel zeigt den Effekt des Setzens des Fokus mit der Option [`preventScroll`](#preventscroll) auf `true` und `false` (dem Standard).

#### HTML

Das HTML definiert zwei Buttons, die verwendet werden, um den Fokus eines dritten Buttons zu setzen, der außerhalb des Bildschirms liegt.

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

Dieser Code setzt einen Klick-Ereignishandler auf den ersten und zweiten Button, um den Fokus auf den letzten Button zu setzen.
Beachten Sie, dass der erste Handler die `preventScroll`-Option nicht angibt, sodass das Scrollen zum fokussierten Element aktiviert ist.

```js
document.getElementById("focus_scroll").addEventListener("click", () => {
  document.getElementById("myButton").focus(); // default: {preventScroll:false}
});

document.getElementById("focus_no_scroll").addEventListener("click", () => {
  document.getElementById("myButton").focus({ preventScroll: true });
});
```

#### Ergebnis

Wählen Sie den ersten Button, um den Fokus zu setzen und zum außerhalb des Bildschirms gelegenen Button zu scrollen.
Das Auswählen des zweiten Buttons setzt den Fokus, aber das Scrollen ist deaktiviert.

{{ EmbedLiveSample('Focus with and without scrolling') }}

## Spezifikationen

{{Specifications}}

## Anmerkungen

- Wenn Sie `HTMLElement.focus()` aus einem mousedown-Ereignishandler aufrufen, müssen Sie `event.preventDefault()` aufrufen, um zu verhindern, dass der Fokus das `HTMLElement` verlässt.
- Das Verhalten des Fokus in Bezug auf verschiedene HTML-Funktionen wie [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) oder {{Glossary("shadow_tree", "shadow dom")}}, die zuvor unzureichend spezifiziert waren, wurden im Oktober 2019 aktualisiert.
  Weitere Informationen finden Sie im [WHATWG-Blog](https://blog.whatwg.org/focusing-on-focus).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLElement.blur`](/de/docs/Web/API/HTMLElement/blur), um den Fokus von einem Element zu entfernen.
- [`document.activeElement`](/de/docs/Web/API/Document/activeElement), um zu wissen, welches Element derzeit fokussiert ist.
