---
title: "HTMLElement: focus()-Methode"
short-title: focus()
slug: Web/API/HTMLElement/focus
l10n:
  sourceCommit: a7444882eb1b18918f3c924d83eb3c78f245643a
---

{{ APIRef("HTML DOM") }}

Die **`HTMLElement.focus()`**-Methode setzt den Fokus auf das angegebene Element, sofern es fokussierbar ist.
Das fokussierte Element ist das Element, das standardmäßig Tastatur- und ähnliche Ereignisse empfängt.

Standardmäßig scrollt der Browser das Element nach dem Fokussieren in den sichtbaren Bereich und kann auch eine sichtbare Hervorhebung des fokussierten Elements anzeigen (meistens durch einen "Fokusring" um das Element). Parameteroptionen können verwendet werden, um das standardmäßige Scrollen zu deaktivieren oder eine sichtbare Hervorhebung auf Elementen zu erzwingen.

## Syntax

```js-nolint
focus()
focus(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein optionales Objekt, um Aspekte des Fokussierungsprozesses zu steuern.
    Dieses Objekt kann die folgenden Eigenschaften enthalten:

    - `preventScroll` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob der Browser das Dokument scrollen soll, um das neu fokussierte Element sichtbar zu machen.
        Ein Wert von `false` für `preventScroll` (Standard) bedeutet, dass der Browser nach dem Fokussieren zum Element scrollt.
        Wenn `preventScroll` auf `true` gesetzt ist, erfolgt kein Scrollen.
    - `focusVisible` {{optional_inline}} {{experimental_inline}}
      - : Ein boolescher Wert, der auf `true` gesetzt werden soll, um eine sichtbare Hervorhebung zu erzwingen, oder auf `false`, um eine sichtbare Hervorhebung zu verhindern.
        Wenn die Eigenschaft nicht angegeben ist, sorgt der Browser für eine sichtbare Hervorhebung, wenn dies die Zugänglichkeit für Benutzer verbessert.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Fokus auf ein Textfeld setzen

Dieses Beispiel verwendet eine Schaltfläche, um den Fokus auf ein Textfeld zu setzen.

#### HTML

```html
<input id="myTextField" value="Text field." />
<button id="focusButton">Click to set focus on the text field</button>
```

#### JavaScript

Der unten stehende Code fügt einen Ereignishandler hinzu, um den Fokus auf das Textfeld zu setzen, wenn die Schaltfläche gedrückt wird.
Beachten Sie, dass die meisten Browser automatisch eine sichtbare Hervorhebung (einen "Fokusring") für ein fokussiertes Textfeld hinzufügen. Daher legt der Code `focusVisible` nicht auf `true` fest.

```js
document.getElementById("focusButton").addEventListener("click", () => {
  document.getElementById("myTextField").focus();
});
```

#### Ergebnis

Wählen Sie die Schaltfläche aus, um den Fokus auf das Textfeld zu setzen.

{{ EmbedLiveSample('Focus_on_a_text_field') }}

### Fokus auf eine Schaltfläche setzen

Dieses Beispiel zeigt, wie Sie den Fokus auf ein Schaltflächenelement setzen können.

#### HTML

Zuerst definieren wir drei Schaltflächen.
Sowohl die mittlere als auch die rechte Schaltfläche setzen den Fokus auf die linke Schaltfläche. Die rechte Schaltfläche legt zusätzlich `focusVisible` fest.

```html
<button id="myButton">Button</button>
<button id="focusButton">Click to set focus on "Button"</button>
<button id="focusButtonVisibleIndication">
  Click to set focus and focusVisible on "Button"
</button>
```

#### JavaScript

Der unten stehende Code richtet Ereignishandler für Klickereignisse auf der mittleren und rechten Schaltfläche ein.

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

Wählen Sie entweder die mittlere oder die rechte Schaltfläche aus, um den Fokus auf die linke Schaltfläche zu setzen.

Browser zeigen normalerweise keine sichtbare Fokusanzeige auf Schaltflächenelementen, wenn der Fokus programmgesteuert gesetzt wird, daher ist die Wirkung durch Auswahl der mittleren Schaltfläche möglicherweise nicht offensichtlich.
Wenn jedoch die Option `focusVisible` in Ihrem Browser unterstützt wird, sollten Sie sehen, wie sich der Fokus auf die linke Schaltfläche ändert, wenn die rechte Schaltfläche ausgewählt wird.

{{ EmbedLiveSample('Focus_on_a_button') }}

### Fokus mit und ohne Scrollen setzen

Dieses Beispiel zeigt die Wirkung des Fokussierens mit der Option [`preventScroll`](#preventscroll) auf `true` und `false` (Standardwert).

#### HTML

Das HTML definiert zwei Schaltflächen, die verwendet werden, um den Fokus auf eine dritte, außerhalb des sichtbaren Bereichs befindliche Schaltfläche zu setzen.

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

Dieser Code setzt einen Klick-Ereignishandler für die erste und zweite Schaltfläche, um den Fokus auf die letzte Schaltfläche zu setzen.
Beachten Sie, dass der erste Handler die Option `preventScroll` nicht angibt, sodass zum fokussierten Element gescrollt wird.

```js
document.getElementById("focus_scroll").addEventListener("click", () => {
  document.getElementById("myButton").focus(); // default: {preventScroll:false}
});

document.getElementById("focus_no_scroll").addEventListener("click", () => {
  document.getElementById("myButton").focus({ preventScroll: true });
});
```

#### Ergebnis

Wählen Sie die erste Schaltfläche aus, um den Fokus zu setzen und zur außerhalb des sichtbaren Bereichs befindlichen Schaltfläche zu scrollen.
Wählen Sie die zweite Schaltfläche aus, um den Fokus zu setzen, ohne zu scrollen.

{{ EmbedLiveSample('Focus with and without scrolling') }}

## Spezifikationen

{{Specifications}}

## Hinweise

- Wenn Sie `HTMLElement.focus()` aus einem `mousedown`-Ereignishandler aufrufen, müssen Sie `event.preventDefault()` aufrufen, um zu verhindern, dass der Fokus das `HTMLElement` verlässt.
- Das Verhalten des Fokus in Bezug auf verschiedene HTML-Funktionen wie [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex) oder den {{Glossary("shadow_tree", "Shadow DOM")}}, die zuvor ungenau spezifiziert waren, wurde im Oktober 2019 aktualisiert.
  Weitere Informationen finden Sie im [WHATWG-Blog](https://blog.whatwg.org/focusing-on-focus).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLElement.blur`](/de/docs/Web/API/HTMLElement/blur), um den Fokus von einem Element zu entfernen.
- [`document.activeElement`](/de/docs/Web/API/Document/activeElement), um zu wissen, welches Element derzeit fokussiert ist.
