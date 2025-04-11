---
title: "HTMLElement: focus() Methode"
short-title: focus()
slug: Web/API/HTMLElement/focus
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ APIRef("HTML DOM") }}

Die **`HTMLElement.focus()`** Methode setzt den Fokus auf das angegebene Element, wenn dieses fokussiert werden kann.
Das fokussierte Element ist das Element, das standardmäßig Tastatur- und ähnliche Ereignisse empfängt.

Standardmäßig scrollt der Browser das Element nach dem Fokussieren in den Sichtbereich und kann auch eine sichtbare Hervorhebung des fokussierten Elements bereitstellen (typischerweise durch das Anzeigen eines "Fokus-Rings" um das Element).
Parameteroptionen werden bereitgestellt, um das standardmäßige Scrollen zu deaktivieren und eine sichtbare Hervorhebung auf Elementen zu erzwingen.

## Syntax

```js-nolint
focus()
focus(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein optionales Objekt zur Steuerung von Aspekten des Fokussierungsprozesses.
    Dieses Objekt kann die folgenden Eigenschaften enthalten:

    - `preventScroll` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob der Browser das Dokument scrollen soll, um das neu fokussierte Element in den Sichtbereich zu bringen.
        Ein Wert von `false` für `preventScroll` (die Standardeinstellung) bedeutet, dass der Browser das Element nach dem Fokussieren in den Sichtbereich scrollt.
        Wenn `preventScroll` auf `true` gesetzt ist, findet kein Scrollen statt.
    - `focusVisible` {{optional_inline}} {{experimental_inline}}
      - : Ein boolescher Wert, der auf `true` gesetzt werden sollte, um eine sichtbare Hervorhebung zu erzwingen, oder auf `false`, um eine sichtbare Hervorhebung zu verhindern, dass das Element fokussiert ist.
        Wenn die Eigenschaft nicht angegeben ist, stellt der Browser eine sichtbare Hervorhebung bereit, wenn er feststellt, dass dies die Zugänglichkeit für Benutzer verbessern würde.

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
Beachten Sie, dass die meisten Browser automatisch eine sichtbare Hervorhebung (einen "Fokus-Ring") für ein fokussiertes Textfeld hinzufügen, sodass der Code nicht `focusVisible` auf `true` setzt.

```js
document.getElementById("focusButton").addEventListener("click", () => {
  document.getElementById("myTextField").focus();
});
```

#### Ergebnis

Wählen Sie den Button, um den Fokus auf das Textfeld zu setzen.

{{ EmbedLiveSample('Focus_on_a_text_field') }}

### Fokus auf einen Button

Dieses Beispiel demonstriert, wie Sie den Fokus auf ein Button-Element setzen können.

#### HTML

Zuerst definieren wir drei Buttons.
Sowohl der mittlere als auch der rechte Button setzen den Fokus auf den ganz linken Button.
Der ganz rechte Button wird auch `focusVisible` angeben.

```html
<button id="myButton">Button</button>
<button id="focusButton">Click to set focus on "Button"</button>
<button id="focusButtonVisibleIndication">
  Click to set focus and focusVisible on "Button"
</button>
```

#### JavaScript

Der folgende Code richtet Handler für Klickereignisse auf den mittleren und rechten Buttons ein.

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

Wählen Sie entweder den mittleren oder den ganz rechten Button, um den Fokus auf den ganz linken Button zu setzen.

Browser zeigen normalerweise keine sichtbare Fokus-Hervorhebung auf Button-Elementen, wenn der Fokus programmgesteuert gesetzt wird, daher kann die Wirkung beim Auswählen des mittleren Buttons nicht offensichtlich sein.
Wenn die `focusVisible`-Option von Ihrem Browser unterstützt wird, sollten Sie jedoch den Fokuswechsel auf den ganz linken Button sehen, wenn der ganz rechte Button ausgewählt ist.

{{ EmbedLiveSample('Focus_on_a_button') }}

### Fokus mit und ohne Scrollen

Dieses Beispiel zeigt die Wirkung des Fokussierens mit der Option [`preventScroll`](#preventscroll), die `true` und `false` (Standard) gesetzt ist.

#### HTML

Das HTML definiert zwei Buttons, die verwendet werden, um den Fokus eines dritten, außerhalb des Sichtbereichs befindlichen Buttons zu setzen

```html
<button id="focus_scroll">Click to set focus on off-screen button</button>
<button id="focus_no_scroll">
  Click to set focus on offscreen button without scrolling
</button>

<div id="container">
  <button id="myButton" style="margin-top: 500px;">Button</button>
</div>
```

#### JavaScript

Dieser Code setzt einen Klickereignishandler auf den ersten und zweiten Button, um den Fokus auf den letzten Button zu setzen.
Beachten Sie, dass der erste Handler die `preventScroll`-Option nicht angibt, sodass das Scrollen zum fokussierten Element ermöglicht wird.

```js
document.getElementById("focus_scroll").addEventListener("click", () => {
  document.getElementById("myButton").focus(); // default: {preventScroll:false}
});

document.getElementById("focus_no_scroll").addEventListener("click", () => {
  document.getElementById("myButton").focus({ preventScroll: true });
});
```

#### Ergebnis

Wählen Sie den ersten Button, um den Fokus zu setzen und zum außerhalb des Sichtbereichs befindlichen Button zu scrollen.
Das Auswählen des zweiten Buttons setzt den Fokus, aber das Scrollen ist deaktiviert.

{{ EmbedLiveSample('Focus with and without scrolling') }}

## Spezifikationen

{{Specifications}}

## Hinweise

- Wenn Sie `HTMLElement.focus()` von einem `mousedown`-Ereignishandler aufrufen, müssen Sie `event.preventDefault()` aufrufen, um zu verhindern, dass der Fokus das `HTMLElement` verlässt.
- Das Verhalten des Fokus in Bezug auf verschiedene HTML-Features wie [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) oder {{Glossary("shadow_tree", "shadow dom")}}, das zuvor unzureichend spezifiziert war, wurde im Oktober 2019 aktualisiert.
  Weitere Informationen finden Sie im [WHATWG Blog](https://blog.whatwg.org/focusing-on-focus).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLElement.blur`](/de/docs/Web/API/HTMLElement/blur), um den Fokus von einem Element zu entfernen.
- [`document.activeElement`](/de/docs/Web/API/Document/activeElement), um zu wissen, welches das aktuell fokussierte Element ist.
