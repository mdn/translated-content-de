---
title: "Element: input event"
short-title: input
slug: Web/API/Element/input_event
l10n:
  sourceCommit: 72ca3d725e3e56b613de3ac9727bd0d6d619c38a
---

{{APIRef}}

Das **`input`** Ereignis wird ausgelöst, wenn der `value` eines {{HTMLElement("input")}}, {{HTMLElement("select")}} oder {{HTMLElement("textarea")}} Elements als direkte Folge einer Benutzeraktion geändert wurde (wie das Tippen in ein Textfeld oder das Aktivieren eines Kontrollkästchens).

Das Ereignis gilt auch für Elemente mit aktiviertem [`contenteditable`](/de/docs/Web/API/HTMLElement/contentEditable) und für jedes Element, wenn [`designMode`](/de/docs/Web/API/Document/designMode) eingeschaltet ist. Im Falle von `contenteditable` und `designMode` ist das Ereignisziel der _Editing Host_. Wenn sich diese Eigenschaften auf mehrere Elemente anwenden, ist der Editing Host das nächste übergeordnete Element, dessen Eltern nicht bearbeitbar sind.

Für `<input>` Elemente mit `type=checkbox` oder `type=radio` sollte das `input` Ereignis immer dann ausgelöst werden, wenn ein Benutzer die Steuerung umschaltet, gemäß der [HTML Living Standard Spezifikation](https://html.spec.whatwg.org/multipage/input.html#the-input-element:event-input-2). Historisch gesehen war dies jedoch nicht immer der Fall. Überprüfen Sie die Kompatibilität oder verwenden Sie stattdessen das [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignis für Elemente dieser Typen.

Für {{htmlelement("textarea")}} und {{htmlelement("input")}} Elemente, die Texteingaben akzeptieren (`type=text`, `type=tel`, etc.), ist die Schnittstelle [`InputEvent`](/de/docs/Web/API/InputEvent); für andere ist die Schnittstelle [`Event`](/de/docs/Web/API/Event).

Das `input` Ereignis wird jedes Mal ausgelöst, wenn sich der `value` des Elements ändert. Dies unterscheidet sich vom [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignis, das nur ausgelöst wird, wenn der Wert festgeschrieben wird, beispielsweise durch Drücken der Eingabetaste oder durch Auswählen eines Wertes aus einer Liste von Optionen. Beachten Sie, dass das `input` Ereignis nicht ausgelöst wird, wenn JavaScript den `value` eines Elements programmgesteuert ändert.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("input", (event) => {});

oninput = (event) => {};
```

## Ereignistyp

Ein [`InputEvent`](/de/docs/Web/API/InputEvent). Erbt von [`UIEvent`](/de/docs/Web/API/UIEvent).

{{InheritanceDiagram("InputEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt Eigenschaften von ihren Eltern, [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`InputEvent.data`](/de/docs/Web/API/InputEvent/data) {{ReadOnlyInline}}
  - : Gibt einen String mit den eingefügten Zeichen zurück. Dies kann ein leerer String sein, wenn die Änderung keinen Text einfügt (zum Beispiel beim Löschen von Zeichen).
- [`InputEvent.dataTransfer`](/de/docs/Web/API/InputEvent/dataTransfer) {{ReadOnlyInline}}
  - : Gibt ein [`DataTransfer`](/de/docs/Web/API/DataTransfer) Objekt zurück, das Informationen über Richtext- oder Klartext-Daten enthält, die zu bearbeitbarem Inhalt hinzugefügt oder davon entfernt werden.
- [`InputEvent.inputType`](/de/docs/Web/API/InputEvent/inputType) {{ReadOnlyInline}}
  - : Gibt die Art der Änderung für bearbeitbare Inhalte zurück, wie zum Beispiel Einfügen, Löschen oder Formatieren von Text.
- [`InputEvent.isComposing`](/de/docs/Web/API/InputEvent/isComposing) {{ReadOnlyInline}}
  - : Gibt einen {{JSxRef("Boolean")}} Wert zurück, der angibt, ob das Ereignis nach [`compositionstart`](/de/docs/Web/API/Element/compositionstart_event) und vor [`compositionend`](/de/docs/Web/API/Element/compositionend_event) ausgelöst wird.

## Beispiele

Dieses Beispiel protokolliert den Wert, wann immer Sie den Wert des {{HtmlElement("input")}} Elements ändern.

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
