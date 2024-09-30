---
title: "HTMLElement: focus()-Methode"
short-title: focus()
slug: Web/API/HTMLElement/focus
l10n:
  sourceCommit: 1ca8335a919a2877ab9dc1bf6ad5967682d7c876
---

{{ APIRef("HTML DOM") }}

Die **`HTMLElement.focus()`**-Methode setzt den Fokus auf das angegebene Element, sofern es fokussiert werden kann.
Das fokussierte Element ist das Element, das standardmäßig Tastatur- und ähnliche Ereignisse empfängt.

Standardmäßig scrollt der Browser das Element in den sichtbaren Bereich, nachdem es fokussiert wurde, und er kann auch eine sichtbare Hervorhebung des fokussierten Elements bereitstellen (in der Regel durch die Anzeige eines "Fokusrings" um das Element).
Parameteroptionen werden bereitgestellt, um das standardmäßige Scrollen zu deaktivieren und die sichtbare Hervorhebung bei Elementen zu erzwingen.

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
      - : Ein boolescher Wert, der angibt, ob der Browser das Dokument scrollen sollte, um das neu fokussierte Element in den sichtbaren Bereich zu bringen.
        Ein Wert von `false` für `preventScroll` (der Standardwert) bedeutet, dass der Browser das Element nach dem Fokussieren in den sichtbaren Bereich scrollt.
        Wenn `preventScroll` auf `true` gesetzt ist, tritt kein Scrollen auf.
    - `focusVisible` {{optional_inline}} {{experimental_inline}}
      - : Ein boolescher Wert, der auf `true` gesetzt werden sollte, um die sichtbare Hervorhebung des fokussierten Elements zu erzwingen oder auf `false`, um sie zu verhindern.
        Wenn die Eigenschaft nicht angegeben ist, wird eine sichtbare Hervorhebung bereitgestellt, wenn der Browser feststellt, dass dies die Barrierefreiheit für Benutzer verbessern würde.

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
Beachten Sie, dass die meisten Browser automatisch eine sichtbare Hervorhebung (einen "Fokusring") für ein fokussiertes Textfeld hinzufügen, daher setzt der Code `focusVisible` nicht auf `true`.

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
Sowohl der mittlere als auch der rechte Button setzen den Fokus auf den äußersten linken Button.
Der ganz rechte Button spezifiziert auch `focusVisible`.

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

Wählen Sie entweder den mittleren Button oder den ganz rechten Button, um den Fokus auf den äußersten linken Button zu setzen.

Browser zeigen normalerweise keine sichtbare Fokus-Hervorhebung auf Button-Elementen, wenn der Fokus programmgesteuert gesetzt wird, daher ist die Wirkung der Auswahl des mittleren Buttons möglicherweise nicht offensichtlich.
Wenn die `focusVisible`-Option jedoch von Ihrem Browser unterstützt wird, sollten Sie sehen, dass sich der Fokus auf den äußersten linken Button ändert, wenn der ganz rechte Button ausgewählt wird.

{{ EmbedLiveSample('Focus_on_a_button') }}

### Fokus mit und ohne Scrollen

Dieses Beispiel zeigt die Wirkung des Setzens des Fokus mit der Option [`preventScroll`](#preventscroll) auf `true` und `false` (der Standardwert).

#### HTML

Das HTML definiert zwei Buttons, die verwendet werden, um den Fokus auf einen dritten Button zu setzen, der außerhalb des sichtbaren Bereichs liegt.

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

Dieser Code setzt einen Klick-Ereignishandler auf den ersten und zweiten Button, um den Fokus auf den letzten Button zu setzen.
Beachten Sie, dass der erste Handler die `preventScroll`-Option nicht spezifiziert, sodass das Scrollen zum fokussierten Element aktiviert ist.

```js
document.getElementById("focus_scroll").addEventListener("click", () => {
  document.getElementById("myButton").focus(); // default: {preventScroll:false}
});

document.getElementById("focus_no_scroll").addEventListener("click", () => {
  document.getElementById("myButton").focus({ preventScroll: true });
});
```

#### Ergebnis

Wählen Sie den ersten Button, um den Fokus zu setzen und zum außerhalb des sichtbaren Bereichs liegenden Button zu scrollen.
Wenn Sie den zweiten Button auswählen, wird der Fokus gesetzt, aber das Scrollen ist deaktiviert.

{{ EmbedLiveSample('Focus with and without scrolling') }}

## Spezifikationen

{{Specifications}}

## Anmerkungen

- Wenn Sie `HTMLElement.focus()` aus einem mousedown-Ereignishandler aufrufen, müssen Sie `event.preventDefault()` aufrufen, um zu verhindern, dass der Fokus das `HTMLElement` verlässt.
- Das Verhalten des Fokus in Bezug auf verschiedene HTML-Funktionen wie [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex) oder [shadow dom](/de/docs/Glossary/shadow_tree), die zuvor unter-spezifiziert blieben, wurden im Oktober 2019 aktualisiert.
  Weitere Informationen finden Sie im [WHATWG-Blog](https://blog.whatwg.org/focusing-on-focus).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLElement.blur`](/de/docs/Web/API/HTMLElement/blur) zum Entfernen des Fokus von einem Element.
- [`document.activeElement`](/de/docs/Web/API/Document/activeElement) um zu wissen, welches Element derzeit fokussiert ist.
