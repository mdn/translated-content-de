---
title: "HTMLElement: focus()-Methode"
short-title: focus()
slug: Web/API/HTMLElement/focus
l10n:
  sourceCommit: 1ca8335a919a2877ab9dc1bf6ad5967682d7c876
---

{{ APIRef("HTML DOM") }}

Die **`HTMLElement.focus()`**-Methode setzt den Fokus auf das angegebene Element, sofern es fokussierbar ist.
Das fokussierte Element ist das Element, das standardmäßig Tastatur- und ähnliche Ereignisse empfängt.

Standardmäßig scrollt der Browser das Element nach dem Fokussieren in den sichtbaren Bereich und kann auch eine sichtbare Anzeige des fokussierten Elements bereitstellen (typischerweise durch Anzeige eines "Fokusrings" um das Element).
Parameteroptionen stehen zur Verfügung, um das standardmäßige Scrollen zu deaktivieren und die sichtbare Anzeige auf Elementen zu erzwingen.

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
      - : Ein boolescher Wert, der angibt, ob der Browser das Dokument scrollen soll, um das neu fokussierte Element in den sichtbaren Bereich zu bringen.
        Ein Wert von `false` für `preventScroll` (die Standardeinstellung) bedeutet, dass der Browser das Element nach dem Fokussieren in den sichtbaren Bereich scrollt.
        Wenn `preventScroll` auf `true` gesetzt ist, erfolgt kein Scrollen.
    - `focusVisible` {{optional_inline}} {{experimental_inline}}
      - : Ein boolescher Wert, der auf `true` gesetzt werden sollte, um eine sichtbare Anzeige zu erzwingen, oder auf `false`, um diese zu verhindern.
        Wenn die Eigenschaft nicht angegeben wird, bietet ein Browser eine sichtbare Anzeige, wenn er feststellt, dass dies die Zugänglichkeit für Benutzer verbessern würde.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Fokus auf ein Textfeld

Dieses Beispiel verwendet einen Button, um den Fokus auf ein Textfeld zu setzen.

#### HTML

```html
<input id="myTextField" value="Text field." />
<button id="focusButton">Klicken, um den Fokus auf das Textfeld zu setzen</button>
```

#### JavaScript

Der untenstehende Code fügt einen Ereignishandler hinzu, um den Fokus auf das Textfeld zu setzen, wenn der Button gedrückt wird.
Beachten Sie, dass die meisten Browser automatisch eine sichtbare Anzeige (einen "Fokusring") für ein fokussiertes Textfeld hinzufügen, sodass der Code `focusVisible` nicht auf `true` setzt.

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
Sowohl der mittlere als auch der rechte Button setzen den Fokus auf den ganz linken Button.
Der äußerste rechte Button wird zusätzlich `focusVisible` angeben.

```html
<button id="myButton">Button</button>
<button id="focusButton">Klicken, um den Fokus auf "Button" zu setzen</button>
<button id="focusButtonVisibleIndication">
  Klicken, um den Fokus und focusVisible auf "Button" zu setzen
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

Wählen Sie entweder den mittleren Button oder den äußersten rechten Button, um den Fokus auf den äußersten linken Button zu setzen.

Browser zeigen in der Regel keine sichtbare Fokusanzeige auf Button-Elementen, wenn der Fokus programmgesteuert gesetzt wird, daher ist die Wirkung der Auswahl des mittleren Buttons möglicherweise nicht offensichtlich.
Vorausgesetzt, die `focusVisible`-Option wird in Ihrem Browser unterstützt, sollten Sie jedoch eine Fokusänderung auf dem äußersten linken Button sehen, wenn der äußerste rechte Button ausgewählt wird.

{{ EmbedLiveSample('Focus_on_a_button') }}

### Fokus mit und ohne Scrollen

Dieses Beispiel zeigt die Wirkung der Fokussierung mit der Option [`preventScroll`](#preventscroll) auf `true` und `false` (die Standardeinstellung).

#### HTML

Das HTML definiert zwei Buttons, die zum Setzen des Fokus auf einen dritten Button verwendet werden, der sich außerhalb des sichtbaren Bereichs befindet.

```html
<button id="focus_scroll">Klicken, um den Fokus auf den außerhalb des Bildschirms befindlichen Button zu setzen</button>
<button id="focus_no_scroll">
  Klicken, um den Fokus auf den außerhalb des Bildschirms befindlichen Button ohne Scrollen zu setzen
</button>

<div id="container">
  <button id="myButton" style="margin-top: 500px;">Button</button>
</div>
```

#### JavaScript

Dieses Codebeispiel legt einen Klickereignishandler auf den ersten und zweiten Button, um den Fokus auf den letzten Button zu setzen.
Beachten Sie, dass der erste Handler die `preventScroll`-Option nicht angibt, sodass das Scrollen zum fokussierten Element aktiviert wird.

```js
document.getElementById("focus_scroll").addEventListener("click", () => {
  document.getElementById("myButton").focus(); // default: {preventScroll:false}
});

document.getElementById("focus_no_scroll").addEventListener("click", () => {
  document.getElementById("myButton").focus({ preventScroll: true });
});
```

#### Ergebnis

Wählen Sie den ersten Button, um den Fokus zu setzen und zum außerhalb des Bildschirms befindlichen Button zu scrollen.
Die Auswahl des zweiten Buttons setzt den Fokus, aber das Scrollen ist deaktiviert.

{{ EmbedLiveSample('Focus with and without scrolling') }}

## Spezifikationen

{{Specifications}}

## Hinweise

- Wenn Sie `HTMLElement.focus()` von einem Mousedown-Ereignishandler aus aufrufen, müssen Sie `event.preventDefault()` aufrufen, damit der Fokus nicht das `HTMLElement` verlässt.
- Das Verhalten des Fokus im Zusammenhang mit verschiedenen HTML-Funktionen wie [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex) oder {{Glossary("shadow tree", "shadow dom")}}, die zuvor unzureichend spezifiziert waren, wurde im Oktober 2019 aktualisiert.
  Weitere Informationen finden Sie im [WHATWG-Blog](https://blog.whatwg.org/focusing-on-focus).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLElement.blur")}} zum Entfernen des Fokus von einem Element.
- {{domxref("document.activeElement")}} um zu erfahren, welches Element derzeit fokussiert ist.
