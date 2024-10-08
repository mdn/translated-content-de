---
title: UI Events
slug: Web/API/UI_Events
l10n:
  sourceCommit: 8c60ba86d4c10250eb80265a3be59add51540a82
---

{{DefaultAPISidebar("UI Events")}}

## Konzepte und Nutzung

Das UI Events API definiert ein System zur Handhabung von Benutzerinteraktionen wie Maus- und Tastatureingaben. Dies umfasst:

- Ereignisse, die bei bestimmten Benutzeraktionen wie Tastendrücken oder Mausklicks ausgelöst werden. Die meisten dieser Ereignisse werden auf der [`Element`](/de/docs/Web/API/Element)-Schnittstelle ausgelöst, aber die Ereignisse, die sich auf das Laden und Entladen von Ressourcen beziehen, werden auf der [`Window`](/de/docs/Web/API/Window)-Schnittstelle ausgelöst.
- Ereignisschnittstellen, die in die Handler für diese Ereignisse übergeben werden. Diese Schnittstellen erben von [`Event`](/de/docs/Web/API/Event) und stellen zusätzliche Informationen bereit, die spezifisch für die Art der Benutzerinteraktion sind: zum Beispiel wird das [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent) in einen [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignishandler übergeben und liefert Informationen über die gedrückte Taste.

## Schnittstellen

- [`CompositionEvent`](/de/docs/Web/API/CompositionEvent)
  - : Wird in Handler für Kompositionsereignisse übergeben. Kompositionsereignisse ermöglichen einem Benutzer, Zeichen einzugeben, die möglicherweise nicht auf der physischen Tastatur verfügbar sind.
- [`FocusEvent`](/de/docs/Web/API/FocusEvent)
  - : Wird in Handler für Fokussierungsereignisse übergeben, die mit Elementen verbunden sind, die Fokus erhalten oder verlieren.
- [`InputEvent`](/de/docs/Web/API/InputEvent)
  - : Wird in Handler für Eingabeereignisse übergeben, die mit der Benutzereingabe verbunden sind; zum Beispiel bei Verwendung eines {{HTMLElement("input")}}-Elements.
- [`KeyboardEvent`](/de/docs/Web/API/KeyboardEvent)
  - : Wird in Handler für Tastendruckereignisse übergeben.
- [`MouseEvent`](/de/docs/Web/API/MouseEvent)
  - : Wird in Ereignishandler für Mausereignisse übergeben, einschließlich Mausbewegung, Mausüberfahren und Maustaste hoch oder runter. Beachten Sie, dass [`auxclick`](/de/docs/Web/API/Element/auxclick_event), [`click`](/de/docs/Web/API/Element/click_event) und [`dblclick`](/de/docs/Web/API/Element/dblclick_event) Ereignisse [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Objekte übergeben.
- [`MouseScrollEvent`](/de/docs/Web/API/MouseScrollEvent) {{deprecated_inline}}
  - : Veraltete, nur in Firefox verfügbare, nicht standardisierte Schnittstelle für Scroll-Ereignisse. Verwenden Sie stattdessen [`WheelEvent`](/de/docs/Web/API/WheelEvent).
- [`MutationEvent`](/de/docs/Web/API/MutationEvent) {{deprecated_inline}}
  - : Wird in Mutation-Ereignishandler übergeben, die entwickelt wurden, um Benachrichtigungen über Änderungen am DOM zu ermöglichen. Jetzt veraltet: verwenden Sie stattdessen [`MutationObserver`](/de/docs/Web/API/MutationObserver).
- [`UIEvent`](/de/docs/Web/API/UIEvent)
  - : Eine Basis, von der andere UI-Ereignisse erben, und auch die Ereignisschnittstelle, die in bestimmte Ereignisse wie [`load`](/de/docs/Web/API/Window/load_event) und [`unload`](/de/docs/Web/API/Window/unload_event) übergeben wird.
- [`WheelEvent`](/de/docs/Web/API/WheelEvent)
  - : Wird in den Handler für das [`wheel`](/de/docs/Web/API/Element/wheel_event)-Ereignis übergeben, das ausgelöst wird, wenn der Benutzer ein Mausrad oder eine ähnliche Benutzeroberflächenkomponente wie ein Touchpad dreht.

## Ereignisse

- [`abort`](/de/docs/Web/API/Window/abort_event)
  - : Wird ausgelöst, wenn das Laden einer Ressource abgebrochen wurde (zum Beispiel, weil der Benutzer es abgebrochen hat).
- [`auxclick`](/de/docs/Web/API/Element/auxclick_event)
  - : Wird ausgelöst, wenn der Benutzer die nicht-primäre Zeiger-Taste klickt.
- [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event)
  - : Wird direkt vor der Aktualisierung des DOMs durch eine Benutzereingabe ausgelöst.
- [`blur`](/de/docs/Web/API/Element/blur_event)
  - : Wird ausgelöst, wenn ein Element den Fokus verloren hat.
- [`click`](/de/docs/Web/API/Element/click_event)
  - : Wird ausgelöst, wenn der Benutzer die primäre Zeiger-Taste klickt.
- [`compositionend`](/de/docs/Web/API/Element/compositionend_event)
  - : Wird ausgelöst, wenn ein Textkompositionssystem (wie ein Sprach-zu-Text-Prozessor) seine Sitzung beendet hat; zum Beispiel, weil der Benutzer es geschlossen hat.
- [`compositionstart`](/de/docs/Web/API/Element/compositionstart_event)
  - : Wird ausgelöst, wenn der Benutzer eine neue Sitzung mit einem Textkompositionssystem begonnen hat.
- [`compositionupdate`](/de/docs/Web/API/Element/compositionupdate_event)
  - : Wird ausgelöst, wenn ein Textkompositionssystem seinen Text mit einem neuen Zeichen aktualisiert, was in einer Aktualisierung der `data`-Eigenschaft des [`CompositionEvent`](/de/docs/Web/API/CompositionEvent) reflektiert wird.
- [`contextmenu`](/de/docs/Web/API/Element/contextmenu_event)
  - : Wird unmittelbar vor dem Aufrufen eines Kontextmenüs ausgelöst.
- [`dblclick`](/de/docs/Web/API/Element/dblclick_event)
  - : Wird ausgelöst, wenn der Benutzer die primäre Zeiger-Taste doppelklickt.
- [`error`](/de/docs/Web/API/HTMLElement/error_event)
  - : Wird ausgelöst, wenn eine Ressource nicht geladen werden kann oder nicht verarbeitet werden kann (zum Beispiel, wenn ein Bild ungültig ist oder ein Skript einen Fehler hat).
- [`focus`](/de/docs/Web/API/Element/focus_event)
  - : Wird ausgelöst, wenn ein Element den Fokus erhalten hat.
- [`focusin`](/de/docs/Web/API/Element/focusin_event)
  - : Wird ausgelöst, wenn ein Element dabei ist, den Fokus zu erhalten.
- [`focusout`](/de/docs/Web/API/Element/focusout_event)
  - : Wird ausgelöst, wenn ein Element dabei ist, den Fokus zu verlieren.
- [`input`](/de/docs/Web/API/Element/input_event)
  - : Wird unmittelbar nach der Aktualisierung des DOMs durch eine Benutzereingabe ausgelöst (zum Beispiel eine Texteingabe).
- [`keydown`](/de/docs/Web/API/Element/keydown_event)
  - : Wird ausgelöst, wenn der Benutzer eine Taste gedrückt hat.
- [`keypress`](/de/docs/Web/API/Element/keypress_event) {{deprecated_inline}}
  - : Wird ausgelöst, wenn der Benutzer eine Taste gedrückt hat, jedoch nur, wenn die Taste einen Zeichenwert erzeugt. Verwenden Sie stattdessen [`keydown`](/de/docs/Web/API/Element/keydown_event).
- [`keyup`](/de/docs/Web/API/Element/keyup_event)
  - : Wird ausgelöst, wenn der Benutzer eine Taste losgelassen hat.
- [`load`](/de/docs/Web/API/Window/load_event)
  - : Wird ausgelöst, wenn die gesamte Seite geladen wurde, einschließlich aller abhängigen Ressourcen wie Stylesheets und Bilder.
- [`mousedown`](/de/docs/Web/API/Element/mousedown_event)
  - : Wird ausgelöst, wenn der Benutzer eine Taste auf einer Maus oder einem anderen Zeigegerät drückt, während der Zeiger über dem Element ist.
- [`mouseenter`](/de/docs/Web/API/Element/mouseenter_event)
  - : Wird ausgelöst, wenn eine Maus oder ein anderes Zeigegerät innerhalb der Grenze des Elements oder eines seiner Nachkommen bewegt wird.
- [`mouseleave`](/de/docs/Web/API/Element/mouseleave_event)
  - : Wird ausgelöst, wenn eine Maus oder ein anderes Zeigegerät außerhalb der Grenze des Elements und all seiner Nachkommen bewegt wird.
- [`mousemove`](/de/docs/Web/API/Element/mousemove_event)
  - : Wird ausgelöst, wenn eine Maus oder ein anderes Zeigegerät über ein Element bewegt wird.
- [`mouseout`](/de/docs/Web/API/Element/mouseout_event)
  - : Wird ausgelöst, wenn eine Maus oder ein anderes Zeigegerät außerhalb der Grenze des Elements bewegt wird.
- [`mouseover`](/de/docs/Web/API/Element/mouseover_event)
  - : Wird ausgelöst, wenn eine Maus oder ein anderes Zeigegerät über ein Element bewegt wird.
- [`mouseup`](/de/docs/Web/API/Element/mouseup_event)
  - : Wird ausgelöst, wenn der Benutzer eine Taste auf einer Maus oder einem anderen Zeigegerät loslässt, während der Zeiger über dem Element ist.
- [`unload`](/de/docs/Web/API/Window/unload_event)
  - : Wird ausgelöst, wenn das Dokument oder eine Kinderressource entladen wird.
- [`wheel`](/de/docs/Web/API/Element/wheel_event)
  - : Wird ausgelöst, wenn der Benutzer ein Mausrad oder eine ähnliche Benutzeroberflächenkomponente wie ein Touchpad dreht.

## Beispiele

### Mausereignisse

Dieses Beispiel protokolliert Mausereignisse zusammen mit den X- und Y-Koordinaten, an denen das Ereignis erzeugt wurde. Versuchen Sie, die Maus in die gelben und roten Quadrate zu bewegen und darauf zu klicken oder doppelt zu klicken.

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

Dieses Beispiel protokolliert [`keydown`](/de/docs/Web/API/Element/keydown_event), [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event) und [`input`](/de/docs/Web/API/Element/input_event) Ereignisse. Versuchen Sie, in das Textfeld zu tippen. Beachten Sie, dass Tasten wie <kbd>Shift</kbd> `keydown`-Ereignisse erzeugen, aber keine `input`-Ereignisse.

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
