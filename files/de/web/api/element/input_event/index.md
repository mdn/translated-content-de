---
title: "Element: Eingabeereignis"
short-title: Eingabe
slug: Web/API/Element/input_event
l10n:
  sourceCommit: 72ca3d725e3e56b613de3ac9727bd0d6d619c38a
---

{{APIRef}}

Das **`input`**-Ereignis wird ausgelöst, wenn der `value` eines {{HTMLElement("input")}}, {{HTMLElement("select")}} oder {{HTMLElement("textarea")}}-Elements als direkte Folge einer Benutzeraktion (wie das Tippen in ein Textfeld oder das Aktivieren eines Kontrollkästchens) geändert wurde.

Das Ereignis gilt auch für Elemente, bei denen {{domxref("HTMLElement.contentEditable", "contenteditable")}} aktiviert ist, und für jedes Element, wenn {{domxref("Document.designMode", "designMode")}} eingeschaltet ist. Im Fall von `contenteditable` und `designMode` ist das Ereignisziel der _Bearbeitungshost_. Wenn diese Eigenschaften auf mehrere Elemente angewendet werden, ist der Bearbeitungshost das nächstgelegene Vorfahrelement, dessen Elternteil nicht bearbeitbar ist.

Für `<input>`-Elemente mit `type=checkbox` oder `type=radio` sollte das `input`-Ereignis ausgelöst werden, wann immer ein Benutzer das Kontrollkästchen umschaltet, gemäß der [HTML Living Standard Spezifikation](https://html.spec.whatwg.org/multipage/input.html#the-input-element:event-input-2). Historisch gesehen war dies jedoch nicht immer der Fall. Prüfen Sie die Kompatibilität oder verwenden Sie das {{domxref("HTMLElement/change_event", "change")}}-Ereignis stattdessen für Elemente dieses Typs.

Für {{htmlelement("textarea")}} und {{htmlelement("input")}}-Elemente, die Texteingaben akzeptieren (`type=text`, `type=tel`, etc.), ist die Schnittstelle {{DOMxRef("InputEvent")}}; für andere ist die Schnittstelle {{DOMxRef("Event")}}.

Das `input`-Ereignis wird jedes Mal ausgelöst, wenn sich der `value` des Elements ändert. Dies unterscheidet sich vom {{domxref("HTMLElement/change_event", "change")}}-Ereignis, das nur ausgelöst wird, wenn der Wert festgelegt wird, beispielsweise durch Drücken der Eingabetaste oder Auswählen eines Wertes aus einer Liste von Optionen. Beachten Sie, dass das `input`-Ereignis nicht ausgelöst wird, wenn JavaScript den `value` eines Elements programmatisch ändert.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}} oder setzen Sie eine Ereignishandlereigenschaft.

```js
addEventListener("input", (event) => {});

oninput = (event) => {};
```

## Ereignistyp

Ein {{domxref("InputEvent")}}. Erbt von {{domxref("UIEvent")}}.

{{InheritanceDiagram("InputEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt Eigenschaften von ihren Eltern, {{DOMxRef("UIEvent")}} und {{DOMxRef("Event")}}._

- {{DOMxRef("InputEvent.data")}} {{ReadOnlyInline}}
  - : Gibt eine Zeichenkette mit den eingefügten Zeichen zurück. Diese kann leer sein, wenn die Änderung keinen Text einfügt (zum Beispiel beim Löschen von Zeichen).
- {{DOMxRef("InputEvent.dataTransfer")}} {{ReadOnlyInline}}
  - : Gibt ein {{DOMxRef("DataTransfer")}}-Objekt zurück, das Informationen über Richtext- oder Nur-Text-Daten enthält, die zu bearbeitbaren Inhalten hinzugefügt oder daraus entfernt werden.
- {{DOMxRef("InputEvent.inputType")}} {{ReadOnlyInline}}
  - : Gibt den Typ der Änderung für bearbeitbare Inhalte zurück, wie beispielsweise das Einfügen, Löschen oder Formatieren von Text.
- {{DOMxRef("InputEvent.isComposing")}} {{ReadOnlyInline}}
  - : Gibt einen {{JSxRef("Boolean")}}-Wert zurück, der angibt, ob das Ereignis nach {{domxref("Element/compositionstart_event", "compositionstart")}} und vor {{domxref("Element/compositionend_event", "compositionend")}} ausgelöst wird.

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

  - {{domxref("Element/beforeinput_event", "beforeinput")}}
  - {{domxpath("HTMLElement/change_event", "change")}}
  - {{domxep("HTMLInputElement/invalid_event", "invalid")}}
