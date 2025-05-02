---
title: "Element: input event"
short-title: input
slug: Web/API/Element/input_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}

Das **`input`**-Ereignis tritt auf, wenn der `value` eines {{HTMLElement("input")}}, {{HTMLElement("select")}} oder {{HTMLElement("textarea")}}-Elements als direktes Ergebnis einer Benutzeraktion (wie das Tippen in ein Textfeld oder das Aktivieren eines Kontrollkästchens) geändert wurde.

Das Ereignis gilt auch für Elemente mit aktivierter [`contenteditable`](/de/docs/Web/API/HTMLElement/contentEditable)-Eigenschaft und für jedes Element, wenn [`designMode`](/de/docs/Web/API/Document/designMode) eingeschaltet ist. Bei `contenteditable` und `designMode` ist das Ereignisziel der _Editing Host_. Wenn diese Eigenschaften auf mehrere Elemente zutreffen, ist der Editing Host das nächstgelegene überworfene Element, dessen übergeordnetes Element nicht bearbeitbar ist.

Für `<input>`-Elemente mit `type=checkbox` oder `type=radio` sollte das `input`-Ereignis jedes Mal ausgelöst werden, wenn ein Benutzer die Steuerung umschaltet, gemäß der [HTML Living Standard Spezifikation](https://html.spec.whatwg.org/multipage/input.html#the-input-element:event-input-2). Historisch gesehen war dies jedoch nicht immer der Fall. Überprüfen Sie die Kompatibilität oder verwenden Sie stattdessen das [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis für Elemente dieses Typs.

Für {{htmlelement("textarea")}} und {{htmlelement("input")}}-Elemente, die Texteingaben akzeptieren (`type=text`, `type=tel`, etc.), verwendet die Schnittstelle [`InputEvent`](/de/docs/Web/API/InputEvent); für andere Elemente ist es die Schnittstelle [`Event`](/de/docs/Web/API/Event).

Das `input`-Ereignis wird jedes Mal ausgelöst, wenn sich der `value` des Elements ändert. Dies unterscheidet sich vom [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis, das nur ausgelöst wird, wenn der Wert bestätigt wird, z.B. durch Drücken der Eingabetaste oder Auswählen eines Wertes aus einer Liste von Optionen. Beachten Sie, dass das `input`-Ereignis nicht ausgelöst wird, wenn JavaScript programmgesteuert den `value` eines Elements ändert.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Event-Handler-Eigenschaft.

```js-nolint
addEventListener("input", (event) => { })

oninput = (event) => { }
```

## Ereignistyp

Ein [`InputEvent`](/de/docs/Web/API/InputEvent). Erbt von [`UIEvent`](/de/docs/Web/API/UIEvent).

{{InheritanceDiagram("InputEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt Eigenschaften von ihren Eltern, [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`InputEvent.data`](/de/docs/Web/API/InputEvent/data) {{ReadOnlyInline}}
  - : Gibt eine Zeichenkette mit den eingefügten Zeichen zurück. Dies kann eine leere Zeichenkette sein, wenn die Änderung keinen Text einfügt (zum Beispiel beim Löschen von Zeichen).
- [`InputEvent.dataTransfer`](/de/docs/Web/API/InputEvent/dataTransfer) {{ReadOnlyInline}}
  - : Gibt ein [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt zurück, das Informationen über Richtext- oder Klartextdaten enthält, die zum bearbeitbaren Inhalt hinzugefügt oder daraus entfernt werden.
- [`InputEvent.inputType`](/de/docs/Web/API/InputEvent/inputType) {{ReadOnlyInline}}
  - : Gibt den Typ der Änderung für bearbeitbaren Inhalt zurück, wie beispielsweise das Einfügen, Löschen oder Formatieren von Text.
- [`InputEvent.isComposing`](/de/docs/Web/API/InputEvent/isComposing) {{ReadOnlyInline}}
  - : Gibt einen {{JSxRef("Boolean")}} zurück, der anzeigt, ob das Ereignis nach [`compositionstart`](/de/docs/Web/API/Element/compositionstart_event) und vor [`compositionend`](/de/docs/Web/API/Element/compositionend_event) ausgelöst wird.

## Beispiele

Dieses Beispiel protokolliert den Wert, wann immer Sie den Wert des {{HtmlElement("input")}}-Elements ändern.

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
