---
title: UI-Ereignisse
slug: Web/API/UI_Events
l10n:
  sourceCommit: 8c60ba86d4c10250eb80265a3be59add51540a82
---

{{DefaultAPISidebar("UI Events")}}

## Konzepte und Verwendung

Die UI-Ereignisse-API definiert ein System zum Umgang mit Benutzerinteraktionen wie Maus- und Tastatureingaben. Dazu gehören:

- Ereignisse, die bei bestimmten Benutzeraktionen wie Tastendrücken oder Mausklicks ausgelöst werden. Die meisten dieser Ereignisse werden auf der {{domxref("Element")}}-Schnittstelle ausgelöst, aber die Ereignisse in Bezug auf das Laden und Entladen von Ressourcen werden auf der {{domxref("Window")}}-Schnittstelle ausgelöst.
- Ereignisschnittstellen, die an die Handler dieser Ereignisse übergeben werden. Diese Schnittstellen erben von {{domxref("Event")}} und liefern zusätzliche Informationen, die speziell für die Art der Benutzerinteraktion sind: Zum Beispiel wird das {{domxref("KeyboardEvent")}} an einen {{domxref("Element.keydown_event", "keydown")}}-Ereignishandler übergeben und liefert Informationen über die gedrückte Taste.

## Schnittstellen

- {{domxref("CompositionEvent")}}
  - : Wird an Handler für Kompositionsereignisse übergeben. Kompositionsereignisse ermöglichen es einem Benutzer, Zeichen einzugeben, die möglicherweise nicht auf der physischen Tastatur verfügbar sind.
- {{domxref("FocusEvent")}}
  - : Wird an Handler für Fokuserignisse übergeben, die mit dem Fokuserhalt oder -verlust von Elementen verbunden sind.
- {{domxref("InputEvent")}}
  - : Wird an Handler für Eingabeereignisse übergeben, die mit der Benutzereingabe verbunden sind; beispielsweise die Verwendung eines {{HTMLElement("input")}}-Elements.
- {{domxref("KeyboardEvent")}}
  - : Wird an Handler für Tastendruckereignisse übergeben.
- {{domxref("MouseEvent")}}
  - : Wird an Ereignishandler für Mausereignisse übergeben, einschließlich Mausbewegungen, über- und herausfahren, sowie Maustasten hoch oder runter. Beachten Sie, dass bei {{domxref("Element.auxclick_event", "auxclick")}}, {{domxref("Element.click_event", "click")}} und {{domxref("Element.dblclick_event", "dblclick")}}-Ereignissen {{domxref("PointerEvent")}}-Objekte übergeben werden.
- {{domxref("MouseScrollEvent")}} {{deprecated_inline}}
  - : Veraltete, nur Firefox-kompatible, nicht standardisierte Schnittstelle für Bildlaufereignisse. Verwenden Sie stattdessen {{domxref("WheelEvent")}}.
- {{domxref("MutationEvent")}} {{deprecated_inline}}
  - : Wird an Mutationserignishandler übergeben, die entwickelt wurden, um Benachrichtigungen über Änderungen am DOM zu ermöglichen. Jetzt veraltet: Verwenden Sie stattdessen {{domxref("MutationObserver")}}.
- {{domxref("UIEvent")}}
  - : Eine Basis, von der andere UI-Ereignisse erben, und auch die Ereignisschnittstelle, die in einige Ereignisse wie {{domxref("Window.load_event", "load")}} und {{domxref("Window.unload_event", "unload")}} übergeben wird.
- {{domxref("WheelEvent")}}
  - : Wird an den Handler für das {{domxref("Element.wheel_event", "wheel")}}-Ereignis übergeben, das ausgelöst wird, wenn der Benutzer ein Mausrad oder eine ähnliche Benutzeroberflächenkomponente wie ein Touchpad dreht.

## Ereignisse

- {{domxref("Window.abort_event", "abort")}}
  - : Wird ausgelöst, wenn das Laden einer Ressource abgebrochen wurde (zum Beispiel, weil der Benutzer es abgebrochen hat).
- {{domxref("Element.auxclick_event", "auxclick")}}
  - : Wird ausgelöst, wenn der Benutzer die nicht-primäre Zeigertaste klickt.
- {{domxref("Element.beforeinput_event", "beforeinput")}}
  - : Wird direkt bevor das DOM mit einigen Benutzereingaben aktualisiert werden soll, ausgelöst.
- {{domxref("Element.blur_event", "blur")}}
  - : Wird ausgelöst, wenn ein Element den Fokus verloren hat.
- {{domxref("Element.click_event", "click")}}
  - : Wird ausgelöst, wenn der Benutzer die primäre Zeigertaste klickt.
- {{domxref("Element.compositionend_event", "compositionend")}}
  - : Wird ausgelöst, wenn ein Textkompositionssystem (wie ein Spracherkennungsverfahren) seine Sitzung beendet hat; zum Beispiel, weil der Benutzer es geschlossen hat.
- {{domxref("Element.compositionstart_event", "compositionstart")}}
  - : Wird ausgelöst, wenn der Benutzer eine neue Sitzung mit einem Textkompositionssystem begonnen hat.
- {{domxref("Element.compositionupdate_event", "compositionupdate")}}
  - : Wird ausgelöst, wenn ein Textkompositionssystem seinen Text mit einem neuen Zeichen aktualisiert, was sich in einem Update der `data`-Eigenschaft des {{domxref("CompositionEvent")}} widerspiegelt.
- {{domxref("Element.contextmenu_event", "contextmenu")}}
  - : Wird direkt bevor ein Kontextmenü aufgerufen wird, ausgelöst.
- {{domxref("Element.dblclick_event", "dblclick")}}
  - : Wird ausgelöst, wenn der Benutzer die primäre Zeigertaste doppelklickt.
- {{domxref("HTMLElement/error_event", "error")}}
  - : Wird ausgelöst, wenn eine Ressource nicht geladen werden kann oder nicht verarbeitet werden kann (zum Beispiel, wenn ein Bild ungültig ist oder ein Skript einen Fehler enthält).
- {{domxref("Element.focus_event", "focus")}}
  - : Wird ausgelöst, wenn ein Element den Fokus erhalten hat.
- {{domxref("Element.focusin_event", "focusin")}}
  - : Wird ausgelöst, wenn ein Element gerade dabei ist, den Fokus zu erhalten.
- {{domxref("Element.focusout_event", "focusout")}}
  - : Wird ausgelöst, wenn ein Element gerade dabei ist, den Fokus zu verlieren.
- {{domxref("Element.input_event", "input")}}
  - : Wird kurz nachdem das DOM mit einigen Benutzereingaben aktualisiert wurde (zum Beispiel einige Texteingaben) ausgelöst.
- {{domxref("Element.keydown_event", "keydown")}}
  - : Wird ausgelöst, wenn der Benutzer eine Taste gedrückt hat.
- {{domxref("Element.keypress_event", "keypress")}} {{deprecated_inline}}
  - : Wird ausgelöst, wenn der Benutzer eine Taste gedrückt hat, nur wenn die Taste einen Zeichenwert erzeugt. Verwenden Sie stattdessen {{domxref("Element.keydown_event", "keydown")}}.
- {{domxref("Element.keyup_event", "keyup")}}
  - : Wird ausgelöst, wenn der Benutzer eine Taste losgelassen hat.
- {{domxref("Window.load_event", "load")}}
  - : Wird ausgelöst, wenn die gesamte Seite geladen wurde, einschließlich aller abhängigen Ressourcen wie Stylesheets und Bilder.
- {{domxref("Element.mousedown_event", "mousedown")}}
  - : Wird ausgelöst, wenn der Benutzer eine Taste auf einer Maus oder einem anderen Zeigegerät drückt, während sich der Zeiger über dem Element befindet.
- {{domxref("Element.mouseenter_event", "mouseenter")}}
  - : Wird ausgelöst, wenn eine Maus oder ein anderes Zeigegerät in den Bereich des Elements oder eines seiner Nachkommen bewegt wird.
- {{domxref("Element.mouseleave_event", "mouseleave")}}
  - : Wird ausgelöst, wenn eine Maus oder ein anderes Zeigegerät außerhalb der Grenzen des Elements und aller seiner Nachkommen bewegt wird.
- {{domxref("Element.mousemove_event", "mousemove")}}
  - : Wird ausgelöst, wenn eine Maus oder ein anderes Zeigegerät über ein Element bewegt wird.
- {{domxref("Element.mouseout_event", "mouseout")}}
  - : Wird ausgelöst, wenn eine Maus oder ein anderes Zeigegerät außerhalb der Grenzen des Elements bewegt wird.
- {{domxref("Element.mouseover_event", "mouseover")}}
  - : Wird ausgelöst, wenn eine Maus oder ein anderes Zeigegerät über ein Element bewegt wird.
- {{domxref("Element.mouseup_event", "mouseup")}}
  - : Wird ausgelöst, wenn der Benutzer eine Taste auf einer Maus oder einem anderen Zeigegerät loslässt, während sich der Zeiger über dem Element befindet.
- {{domxref("Window.unload_event", "unload")}}
  - : Wird ausgelöst, wenn das Dokument oder eine untergeordnete Ressource entladen wird.
- {{domxref("Element.wheel_event", "wheel")}}
  - : Wird ausgelöst, wenn der Benutzer ein Mausrad oder eine ähnliche Benutzeroberflächenkomponente wie ein Touchpad dreht.

## Beispiele

### Mausereignisse

Dieses Beispiel protokolliert Mausereignisse zusammen mit den X- und Y-Koordinaten, an denen das Ereignis erzeugt wurde. Versuchen Sie, die Maus in die gelben und roten Quadrate zu bewegen und zu klicken oder zu doppelklicken.

#### HTML

```html
<div id="outer">
  <div id="inner"></div>
</div>

<div id="log">
  <pre id="contents"></pre>
  <button id="clear">Clear log</button>
</div>
```

#### CSS

```css
body {
  display: flex;
  gap: 1rem;
}

#outer {
  height: 200px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: yellow;
}

#inner {
  height: 100px;
  width: 100px;
  background-color: red;
}

#contents {
  height: 150px;
  width: 250px;
  border: 1px solid black;
  padding: 0.5rem;
  overflow: scroll;
}
```

#### JavaScript

```js
const outer = document.querySelector("#outer");
const inner = document.querySelector("#inner");
const contents = document.querySelector("#contents");
const clear = document.querySelector("#clear");
let lines = 0;

outer.addEventListener("click", (event) => {
  log(event);
});

outer.addEventListener("dblclick", (event) => {
  log(event);
});

outer.addEventListener("mouseover", (event) => {
  log(event);
});

outer.addEventListener("mouseout", (event) => {
  log(event);
});

outer.addEventListener("mouseenter", (event) => {
  log(event);
});

outer.addEventListener("mouseleave", (event) => {
  log(event);
});

function log(event) {
  const prefix = `${String(lines++).padStart(3, "0")}: `;
  const line = `${event.type}(${event.clientX}, ${event.clientY})`;
  contents.textContent = `${contents.textContent}${prefix}${line}\n`;
  contents.scrollTop = contents.scrollHeight;
}

clear.addEventListener("click", () => {
  contents.textContent = "";
  lines = 0;
});
```

#### Ergebnis

{{EmbedLiveSample("Mouse events", 0, 250)}}

### Tastatur- und Eingabeereignisse

Dieses Beispiel protokolliert {{domxref("Element.keydown_event", "keydown")}}, {{domxref("Element.beforeinput_event", "beforeinput")}} und {{domxref("Element.input_event", "input")}}-Ereignisse. Versuchen Sie, in das Textfeld zu tippen. Beachten Sie, dass Tasten wie <kbd>Shift</kbd> `keydown`-Ereignisse erzeugen, aber keine `input`-Ereignisse.

#### HTML

```html
<textarea id="story" rows="5" cols="33"></textarea>

<div id="log">
  <pre id="contents"></pre>
  <button id="clear">Clear log</button>
</div>
```

#### CSS

```css
body {
  display: flex;
  gap: 1rem;
}

#story {
  padding: 0.5rem;
}

#contents {
  height: 150px;
  width: 250px;
  border: 1px solid black;
  padding: 0.5rem;
  overflow: scroll;
}
```

#### JavaScript

```js
const story = document.querySelector("#story");
const contents = document.querySelector("#contents");
const clear = document.querySelector("#clear");
let lines = 0;

story.addEventListener("keydown", (event) => {
  log(`${event.type}(${event.key})`);
});

story.addEventListener("beforeinput", (event) => {
  log(`${event.type}(${event.data})`);
});

story.addEventListener("input", (event) => {
  log(`${event.type}(${event.data})`);
});

function log(line) {
  const prefix = `${String(lines++).padStart(3, "0")}: `;
  contents.textContent = `${contents.textContent}${prefix}${line}\n`;
  contents.scrollTop = contents.scrollHeight;
}

clear.addEventListener("click", () => {
  contents.textContent = "";
  lines = 0;
});
```

#### Ergebnis

{{EmbedLiveSample("Keyboard and input events", 0, 250)}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Pointer Events API](/de/docs/Web/API/Pointer_events)
- [Touch Events](/de/docs/Web/API/Touch_events)
