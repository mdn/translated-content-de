---
title: "Element: input event"
short-title: input
slug: Web/API/Element/input_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("UI Events")}}

Das **`input`**-Ereignis wird ausgelöst, wenn der `value` eines {{HTMLElement("input")}}, {{HTMLElement("select")}} oder {{HTMLElement("textarea")}}-Elements aufgrund einer direkten Benutzeraktion (wie das Tippen in eine Textbox oder das Aktivieren eines Kontrollkästchens) geändert wurde.

Das Ereignis gilt auch für Elemente mit aktiviertem [`contenteditable`](/de/docs/Web/API/HTMLElement/contentEditable) und für jedes Element, wenn [`designMode`](/de/docs/Web/API/Document/designMode) aktiviert ist. Im Fall von `contenteditable` und `designMode` ist das Ereignisziel der _Bearbeitungshost_. Wenn diese Eigenschaften auf mehrere Elemente zutreffen, ist der Bearbeitungshost das nächste Vorfahrelement, dessen übergeordnetes Element nicht bearbeitbar ist.

Für `<input>`-Elemente mit `type=checkbox` oder `type=radio` sollte das `input`-Ereignis immer dann ausgelöst werden, wenn ein Benutzer das Steuerelement umschaltet, gemäß der [HTML Living Standard Spezifikation](https://html.spec.whatwg.org/multipage/input.html#the-input-element:event-input-2). Historisch gesehen war dies jedoch nicht immer der Fall. Überprüfen Sie die Kompatibilität oder verwenden Sie stattdessen das [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis für Elemente dieser Typen.

Für {{htmlelement("textarea")}} und {{htmlelement("input")}}-Elemente, die Texteingaben annehmen (`type=text`, `type=tel`, etc.), ist die Schnittstelle [`InputEvent`](/de/docs/Web/API/InputEvent); für andere ist die Schnittstelle [`Event`](/de/docs/Web/API/Event).

Das `input`-Ereignis wird jedes Mal ausgelöst, wenn sich der `value` des Elements ändert. Dies ist anders als das [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis, das nur ausgelöst wird, wenn der Wert festgelegt wird, wie zum Beispiel durch das Drücken der Eingabetaste oder das Auswählen eines Werts aus einer Liste von Optionen. Beachten Sie, dass das `input`-Ereignis nicht ausgelöst wird, wenn JavaScript den `value` eines Elements programmgesteuert ändert.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("input", (event) => { })

oninput = (event) => { }
```

## Ereignistyp

Ein [`InputEvent`](/de/docs/Web/API/InputEvent). Erbt von [`UIEvent`](/de/docs/Web/API/UIEvent).

{{InheritanceDiagram("InputEvent")}}

## Beispiele

Dieses Beispiel protokolliert den Wert, sobald Sie den Wert des {{HtmlElement("input")}}-Elements ändern.

### HTML

```html
<input placeholder="Enter some text" name="name" />
<p id="values"></p>
```

### JavaScript

```js
const input = document.querySelector("input");
const log = document.getElementById("values");

input.addEventListener("input", updateValue);

function updateValue(e) {
  log.textContent = e.target.value;
}
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse
  - [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event)
  - [`change`](/de/docs/Web/API/HTMLElement/change_event)
  - [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)
