---
title: "Element: beforeinput Ereignis"
short-title: beforeinput
slug: Web/API/Element/beforeinput_event
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef}}

Das DOM-**`beforeinput`**-Ereignis wird ausgelöst, wenn der Wert eines {{HTMLElement("input")}}- oder {{HTMLElement("textarea")}}-Elements geändert werden soll. Im Gegensatz zum [`input`](/de/docs/Web/API/Element/input_event)-Ereignis wird es jedoch nicht beim {{HTMLElement("select")}}-Element ausgelöst. Das Ereignis gilt auch für Elemente, bei denen [`contenteditable`](/de/docs/Web/API/HTMLElement/contentEditable) aktiviert ist, und für jedes Element, wenn [`designMode`](/de/docs/Web/API/Document/designMode) eingeschaltet ist.

Dies ermöglicht es Webanwendungen, Textbearbeitungsverhalten zu überschreiben, bevor der Browser den DOM-Baum ändert, und bietet mehr Kontrolle über Eingabeereignisse, um die Leistung zu verbessern.

Im Fall von `contenteditable` und `designMode` ist das Ereignisziel der **Bearbeitungs-Host**. Wenn diese Eigenschaften auf mehrere Elemente angewandt werden, ist der Bearbeitungs-Host das nächste übergeordnete Element, dessen Elternteil nicht bearbeitbar ist.

> [!NOTE]
> Nicht jede Benutzeränderung führt dazu, dass `beforeinput` ausgelöst wird. Außerdem kann das Ereignis ausgelöst werden, ohne dass es abgebrochen werden kann. Dies kann passieren, wenn die Änderung durch Autovervollständigung, durch Annahme einer Korrektur eines Rechtschreibprüfers, durch Autofill eines Passwort-Managers, durch [IME](/de/docs/Glossary/Input_method_editor) oder auf andere Weise vorgenommen wird. Die Details variieren je nach Browser und Betriebssystem. Um das Bearbeitungsverhalten in allen Situationen zu überschreiben, muss der Code das `input`-Ereignis behandeln und möglicherweise alle Änderungen rückgängig machen, die nicht durch den `beforeinput`-Handler verarbeitet wurden. Siehe Fehler [1673558](https://bugzil.la/1673558) und [1763669](https://bugzil.la/1763669).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder legen Sie eine Ereignishandlereigenschaft fest.

```js
addEventListener("beforeinput", (event) => {});

onbeforeinput = (event) => {};
```

## Ereignistyp

Ein [`InputEvent`](/de/docs/Web/API/InputEvent). Erbt von [`UIEvent`](/de/docs/Web/API/UIEvent).

{{InheritanceDiagram("InputEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt Eigenschaften von ihren Eltern, [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`InputEvent.data`](/de/docs/Web/API/InputEvent/data) {{ReadOnlyInline}}
  - : Gibt einen String mit den eingefügten Zeichen zurück. Dies kann ein leerer String sein, wenn die Änderung keinen Text einfügt (zum Beispiel beim Löschen von Zeichen).
- [`InputEvent.dataTransfer`](/de/docs/Web/API/InputEvent/dataTransfer) {{ReadOnlyInline}}
  - : Gibt ein [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt zurück, das Informationen über Richtext- oder Nur-Text-Daten enthält, die zu bearbeitbarem Inhalt hinzugefügt oder entfernt werden.
- [`InputEvent.inputType`](/de/docs/Web/API/InputEvent/inputType) {{ReadOnlyInline}}
  - : Gibt den Typ der Änderung für bearbeitbaren Inhalt zurück, wie zum Beispiel Einfügen, Löschen oder Formatieren von Text.
- [`InputEvent.isComposing`](/de/docs/Web/API/InputEvent/isComposing) {{ReadOnlyInline}}
  - : Gibt einen {{JSxRef("Boolean")}}-Wert zurück, der angibt, ob das Ereignis nach [`compositionstart`](/de/docs/Web/API/Element/compositionstart_event) und vor [`compositionend`](/de/docs/Web/API/Element/compositionend_event) ausgelöst wird.

## Beispiele

### Merkmalserkennung

Die folgende Funktion gibt `true` zurück, wenn `beforeinput` und damit `getTargetRanges` unterstützt werden.

```js
function isBeforeInputEventAvailable() {
  return (
    window.InputEvent &&
    typeof InputEvent.prototype.getTargetRanges === "function"
  );
}
```

### Einfacher Logger

Dieses Beispiel protokolliert den aktuellen Wert des Elements, unmittelbar bevor dieser Wert mit dem neuen, auf das {{HtmlElement("input")}}-Element angewandten, ersetzt wird.

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

- Verwandtes Ereignis: [`input`](/de/docs/Web/API/Element/input_event)
