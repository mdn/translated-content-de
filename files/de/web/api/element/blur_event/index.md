---
title: "Element: blur-Ereignis"
short-title: blur
slug: Web/API/Element/blur_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}

Das **`blur`**-Ereignis tritt ein, wenn ein Element den Fokus verloren hat. Das Ereignis steigt nicht auf, aber das nachfolgende [`focusout`](/de/docs/Web/API/Element/focusout_event)-Ereignis steigt auf.

Ein Element verliert den Fokus, wenn ein anderes Element ausgewählt wird.
Ein Element verliert auch dann den Fokus, wenn ein Stil angewendet wird, der keinen Fokus erlaubt, wie z.B. `hidden`, oder wenn das Element aus dem Dokument entfernt wird - in beiden Fällen verschiebt sich der Fokus auf das `body`-Element (Ansichtsfenster).
Beachten Sie jedoch, dass `blur` nicht ausgelöst wird, wenn ein fokussiertes Element aus dem Dokument entfernt wird.

<!-- Vor FF110 haben Elemente den Fokus nicht verloren, wenn sich der Stil auf versteckt (z.B.) geändert hat -->

Das Gegenteil von `blur` ist das [`focus`](/de/docs/Web/API/Element/focus_event)-Ereignis, das ausgelöst wird, wenn das Element _Fokus erhalten_ hat.

Das `blur`-Ereignis kann nicht abgebrochen werden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Event-Handler-Eigenschaft.

```js-nolint
addEventListener("blur", (event) => { })

onblur = (event) => { }
```

## Ereignistyp

Ein [`FocusEvent`](/de/docs/Web/API/FocusEvent). Erbt von [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("FocusEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem übergeordneten [`UIEvent`](/de/docs/Web/API/UIEvent) und indirekt von [`Event`](/de/docs/Web/API/Event)._

- [`FocusEvent.relatedTarget`](/de/docs/Web/API/FocusEvent/relatedTarget)
  - : Das Element, das den Fokus erhält, falls vorhanden.

## Beispiele

### Einfaches Beispiel

#### HTML

```html
<form id="form">
  <label>
    Some text:
    <input type="text" placeholder="text input" />
  </label>
  <label>
    Password:
    <input type="password" placeholder="password" />
  </label>
</form>
```

#### JavaScript

```js
const password = document.querySelector('input[type="password"]');

password.addEventListener("focus", (event) => {
  event.target.style.background = "pink";
});

password.addEventListener("blur", (event) => {
  event.target.style.background = "";
});
```

#### Ergebnis

{{EmbedLiveSample("Simple_example", '100%', '50px')}}

### Ereignisdelegation

Es gibt zwei Möglichkeiten, die Ereignisdelegation für dieses Ereignis zu implementieren: durch die Verwendung des [`focusout`](/de/docs/Web/API/Element/focusout_event)-Ereignisses oder durch das Setzen des `useCapture`-Parameters von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) auf `true`.

#### HTML

```html
<form id="form">
  <label>
    Some text:
    <input type="text" placeholder="text input" />
  </label>
  <label>
    Password:
    <input type="password" placeholder="password" />
  </label>
</form>
```

#### JavaScript

```js
const form = document.getElementById("form");

form.addEventListener(
  "focus",
  (event) => {
    event.target.style.background = "pink";
  },
  true,
);

form.addEventListener(
  "blur",
  (event) => {
    event.target.style.background = "";
  },
  true,
);
```

#### Ergebnis

{{EmbedLiveSample("Event_delegation", '100%', '50px')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

Der Wert von [`Document.activeElement`](/de/docs/Web/API/Document/activeElement) variiert je nach Browser, während dieses Ereignis verarbeitet wird ([Firefox Fehler 452307](https://bugzil.la/452307)): IE10 setzt es auf das Element, zu dem der Fokus wechselt, während Firefox und Chrome es oft auf das `body` des Dokuments setzen.

## Siehe auch

- Die Methode [`HTMLElement.blur()`](/de/docs/Web/API/HTMLElement/blur)
- Verwandte Ereignisse: [`focus`](/de/docs/Web/API/Element/focus_event), [`focusin`](/de/docs/Web/API/Element/focusin_event), [`focusout`](/de/docs/Web/API/Element/focusout_event)
- Dieses Ereignis auf `Window`-Zielen: [`blur`](/de/docs/Web/API/Window/blur_event)-Ereignis
- [Fokussierung: focus/blur](https://javascript.info/focus-blur)
