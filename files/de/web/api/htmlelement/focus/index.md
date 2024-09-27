---
title: "HTMLElement: `focus()` Methode"
short-title: focus()
slug: Web/API/HTMLElement/focus
l10n:
  sourceCommit: 1ca8335a919a2877ab9dc1bf6ad5967682d7c876
---

{{ APIRef("HTML DOM") }}

Die **`HTMLElement.focus()`** Methode setzt den Fokus auf das angegebene Element, sofern es fokussierbar ist. Das fokussierte Element ist das Element, das standardmäßig Tastatur- und ähnliche Ereignisse empfängt.

Standardmäßig wird der Browser das Element nach dem Fokussieren in den sichtbaren Bereich scrollen und möglicherweise eine sichtbare Anzeige des fokussierten Elements bereitstellen (typischerweise durch Anzeigen eines "Fokusrings" um das Element). Es werden Parameteroptionen bereitgestellt, um das standardmäßige Scrollen zu deaktivieren und eine sichtbare Anzeige auf Elementen zu erzwingen.

## Syntax

```js-nolint
focus()
focus(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein optionales Objekt zur Steuerung von Aspekten des Fokussierprozesses. Dieses Objekt kann die folgenden Eigenschaften enthalten:

    - `preventScroll` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, ob der Browser das Dokument scrollen soll, um das neu fokussierte Element in den sichtbaren Bereich zu bringen. Ein Wert von `false` für `preventScroll` (Standardwert) bedeutet, dass der Browser das Element nach dem Fokussieren in den sichtbaren Bereich scrollt. Wenn `preventScroll` auf `true` gesetzt wird, erfolgt kein Scrollen.
    - `focusVisible` {{optional_inline}} {{experimental_inline}}
      - : Ein boolescher Wert, der auf `true` gesetzt werden sollte, um eine sichtbare Anzeige des fokussierten Elements zu erzwingen, oder auf `false`, um dies zu verhindern. Wenn die Eigenschaft nicht angegeben ist, wird ein Browser eine sichtbare Anzeige bereitstellen, wenn er feststellt, dass dies die Zugänglichkeit für Benutzer verbessern würde.

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

Der untenstehende Code fügt einen Ereignishandler hinzu, um den Fokus auf das Textfeld zu setzen, wenn der Button gedrückt wird. Beachten Sie, dass die meisten Browser automatisch eine sichtbare Anzeige (einen "Fokusring") für ein fokussiertes Textfeld hinzufügen, daher setzt der Code `focusVisible` nicht auf `true`.

```js
document.getElementById("focusButton").addEventListener("click", () => {
  document.getElementById("myTextField").focus();
});
```

#### Ergebnis

Wählen Sie den Button aus, um den Fokus auf das Textfeld zu setzen.

{{ EmbedLiveSample('Focus_on_a_text_field') }}

### Fokus auf einen Button

Dieses Beispiel zeigt, wie Sie den Fokus auf ein Button-Element setzen können.

#### HTML

Zuerst definieren wir drei Buttons. Sowohl der mittlere als auch der rechte Button werden den Fokus auf den linken Button setzen. Der rechte Button spezifiziert zusätzlich `focusVisible`.

```html
<button id="myButton">Button</button>
<button id="focusButton">Click to set focus on "Button"</button>
<button id="focusButtonVisibleIndication">
  Click to set focus and focusVisible on "Button"
</button>
```

#### JavaScript

Der untenstehende Code richtet Handler für Klickereignisse auf den mittleren und rechten Buttons ein.

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

Wählen Sie entweder den mittleren oder den rechten Button aus, um den Fokus auf den linken Button zu setzen.

Browser zeigen normalerweise keine sichtbare Fokusanzeige auf Button-Elementen, wenn der Fokus programmgesteuert gesetzt wird, daher ist die Wirkung der Auswahl des mittleren Buttons möglicherweise nicht offensichtlich. Wenn die `focusVisible` Option in Ihrem Browser unterstützt wird, sollten Sie jedoch den Fokuswechsel auf den linken Button sehen, wenn der rechte Button ausgewählt wird.

{{ EmbedLiveSample('Focus_on_a_button') }}

### Fokus mit und ohne Scrollen

Dieses Beispiel zeigt den Effekt, den Fokus mit der Option [`preventScroll`](#preventscroll) auf `true` und `false` (Standardwert) zu setzen.

#### HTML

Das HTML definiert zwei Buttons, die verwendet werden, um den Fokus auf einen dritten Button zu setzen, der sich außerhalb des Bildschirms befindet.

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

Dieser Code setzt einen Klickereignishandler auf den ersten und zweiten Button, um den Fokus auf den letzten Button zu setzen. Beachten Sie, dass der erste Handler die `preventScroll` Option nicht spezifiziert, sodass das Scrollen zum fokussierten Element aktiviert wird.

```js
document.getElementById("focus_scroll").addEventListener("click", () => {
  document.getElementById("myButton").focus(); // default: {preventScroll:false}
});

document.getElementById("focus_no_scroll").addEventListener("click", () => {
  document.getElementById("myButton").focus({ preventScroll: true });
});
```

#### Ergebnis

Wählen Sie den ersten Button, um den Fokus zu setzen und zum außerhalb sichtbaren Button zu scrollen. Die Auswahl des zweiten Buttons setzt den Fokus, aber das Scrollen ist deaktiviert.

{{ EmbedLiveSample('Focus with and without scrolling') }}

## Spezifikationen

{{Specifications}}

## Anmerkungen

- Wenn Sie `HTMLElement.focus()` von einem Mousedown-Ereignishandler aus aufrufen, müssen Sie `event.preventDefault()` aufrufen, um zu verhindern, dass der Fokus das `HTMLElement` verlässt.
- Das Verhalten des Fokus in Bezug auf verschiedene HTML-Funktionen wie [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex) oder [Shadow-DOM](/de/docs/Glossary/shadow_tree), die zuvor unter-spezifiziert waren, wurde im Oktober 2019 aktualisiert. Weitere Informationen finden Sie im [WHATWG-Blog](https://blog.whatwg.org/focusing-on-focus).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLElement.blur`](/de/docs/Web/API/HTMLElement/blur), um den Fokus von einem Element zu entfernen.
- [`document.activeElement`](/de/docs/Web/API/Document/activeElement), um zu wissen, welches Element derzeit fokussiert ist.
