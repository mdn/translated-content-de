---
title: "Element: beforeinput-Ereignis"
short-title: beforeinput
slug: Web/API/Element/beforeinput_event
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef}}

Das DOM-**`beforeinput`**-Ereignis wird ausgelöst, wenn der Wert eines {{HTMLElement("input")}}- oder {{HTMLElement("textarea")}}-Elements geändert werden soll. Anders als das {{domxref("Element/input_event", "input")}}-Ereignis wird es jedoch nicht auf dem {{HTMLElement("select")}}-Element ausgelöst. Das Ereignis gilt auch für Elemente mit aktiviertem {{domxref("HTMLElement.contentEditable", "contenteditable")}} und für jedes Element, wenn {{domxref("Document.designMode", "designMode")}} aktiviert ist.

Dies ermöglicht es Webanwendungen, das Verhalten von Texteingaben zu überschreiben, bevor der Browser den DOM-Baum modifiziert, und bietet mehr Kontrolle über Eingabeereignisse zur Verbesserung der Leistung.

Im Fall von `contenteditable` und `designMode` ist das Ereignisziel der **Bearbeitungshost**. Wenn diese Eigenschaften auf mehrere Elemente angewendet werden, ist der Bearbeitungshost das nächste Vorfahrelement, dessen Elternteil nicht editierbar ist.

> [!NOTE]
> Nicht jede Benutzermodifikation führt zur Auslösung von `beforeinput`. Außerdem kann es sein, dass das Ereignis ausgelöst wird, aber nicht abbruchfähig ist. Dies kann passieren, wenn die Modifikation durch Autovervollständigung, durch die Annahme einer Korrektur von einem Rechtschreibprüfer, durch Passwort-Manager-Autovervollständigung, durch {{Glossary("Input method editor", "IME")}} oder auf andere Weise erfolgt. Die Details variieren je nach Browser und Betriebssystem. Um das Bearbeitungsverhalten in allen Situationen zu überschreiben, muss der Code das `input`-Ereignis behandeln und möglicherweise alle Modifikationen rückgängig machen, die nicht vom `beforeinput`-Handler behandelt wurden. Siehe die Fehler [1673558](https://bugzil.la/1673558) und [1763669](https://bugzil.la/1763669).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("beforeinput", (event) => {});

onbeforeinput = (event) => {};
```

## Ereignistyp

Ein {{domxref("InputEvent")}}. Erbt von {{domxref("UIEvent")}}.

{{InheritanceDiagram("InputEvent")}}

## Ereigniseigenschaften

_Dieses Interface erbt Eigenschaften von seinen Eltern, {{DOMxRef("UIEvent")}} und {{DOMxRef("Event")}}._

- {{DOMxRef("InputEvent.data")}} {{ReadOnlyInline}}
  - : Gibt eine Zeichenkette mit den eingefügten Zeichen zurück. Dies kann eine leere Zeichenkette sein, wenn die Änderung keinen Text einfügt (zum Beispiel beim Löschen von Zeichen).
- {{DOMxRef("InputEvent.dataTransfer")}} {{ReadOnlyInline}}
  - : Gibt ein {{DOMxRef("DataTransfer")}}-Objekt zurück, das Informationen über Richtext- oder Klartext-Daten enthält, die zu bearbeitbaren Inhalten hinzugefügt oder von diesen entfernt werden.
- {{DOMxRef("InputEvent.inputType")}} {{ReadOnlyInline}}
  - : Gibt den Typ der Änderung für bearbeitbare Inhalte zurück, wie z.B. Einfügen, Löschen oder Formatieren von Text.
- {{DOMxRef("InputEvent.isComposing")}} {{ReadOnlyInline}}
  - : Gibt einen {{JSxRef("Boolean")}}-Wert zurück, der angibt, ob das Ereignis nach {{domxref("Element/compositionstart_event", "compositionstart")}} und vor {{domxref("Element/compositionend_event", "compositionend")}} ausgelöst wird.

## Beispiele

### Feature Detection

Die folgende Funktion gibt true zurück, wenn `beforeinput` und damit `getTargetRanges` unterstützt wird.

```js
function isBeforeInputEventAvailable() {
  return (
    window.InputEvent &&
    typeof InputEvent.prototype.getTargetRanges === "function"
  );
}
```

### Einfacher Logger

Dieses Beispiel protokolliert den aktuellen Wert des Elements, unmittelbar bevor dieser Wert mit dem neuen Wert ersetzt wird, der auf das {{HtmlElement("input")}}-Element angewendet wird.

#### HTML

```html
<input placeholder="Enter some text" name="name" />
<p id="values"></p>
```

#### JavaScript

```js
const input = document.querySelector("input");
const log = document.getElementById("values");

input.addEventListener("beforeinput", updateValue);

function updateValue(e) {
  log.textContent = e.target.value;
}
```

#### Ergebnis

{{EmbedLiveSample("Simple_logger")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandtes Ereignis: {{domxref("Element/input_event", "input")}}
