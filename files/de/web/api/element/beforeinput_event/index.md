---
title: "Element: beforeinput-Ereignis"
short-title: beforeinput
slug: Web/API/Element/beforeinput_event
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef}}

Das DOM-**`beforeinput`**-Ereignis wird ausgelöst, wenn der Wert eines {{HTMLElement("input")}}- oder {{HTMLElement("textarea")}}-Elements geändert werden soll. Im Gegensatz zum [`input`](/de/docs/Web/API/Element/input_event)-Ereignis wird es jedoch nicht bei einem {{HTMLElement("select")}}-Element ausgelöst. Das Ereignis gilt auch für Elemente mit aktiviertem [`contenteditable`](/de/docs/Web/API/HTMLElement/contentEditable) und für jedes Element, wenn [`designMode`](/de/docs/Web/API/Document/designMode) eingeschaltet ist.

Dies ermöglicht es Webanwendungen, das Textbearbeitungsverhalten zu überschreiben, bevor der Browser den DOM-Baum ändert, und bietet mehr Kontrolle über Eingabeereignisse zur Verbesserung der Leistung.

Im Fall von `contenteditable` und `designMode` ist das Ereignisziel der **Bearbeitungshost**. Wenn diese Eigenschaften auf mehrere Elemente zutreffen, ist der Bearbeitungshost das nächste Vorfahrenelement, dessen Eltern nicht bearbeitbar sind.

> [!NOTE]
> Nicht jede Benutzeränderung führt zu einem `beforeinput`-Ereignis. Das Ereignis kann auch ausgelöst werden, aber nicht abbrechbar sein. Dies kann passieren, wenn die Änderung durch Autovervollständigung, durch Akzeptieren einer Korrektur von einer Rechtschreibprüfung, durch Autofill des Passwortmanagers, durch [IME](/de/docs/Glossary/Input_method_editor) oder auf andere Weise erfolgt. Die Einzelheiten variieren je nach Browser und Betriebssystem. Um das Bearbeitungsverhalten in allen Situationen zu überschreiben, muss der Code das `input`-Ereignis behandeln und möglicherweise alle Änderungen rückgängig machen, die nicht vom `beforeinput`-Handler behandelt wurden. Siehe Fehler [1673558](https://bugzil.la/1673558) und [1763669](https://bugzil.la/1763669).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

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
  - : Gibt eine Zeichenfolge mit den eingefügten Zeichen zurück. Dies kann eine leere Zeichenfolge sein, wenn die Änderung keinen Text einfügt (zum Beispiel beim Löschen von Zeichen).
- [`InputEvent.dataTransfer`](/de/docs/Web/API/InputEvent/dataTransfer) {{ReadOnlyInline}}
  - : Gibt ein [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt zurück, das Informationen über Richtext- oder Klartextdaten enthält, die zu bearbeitbaren Inhalten hinzugefügt oder daraus entfernt werden.
- [`InputEvent.inputType`](/de/docs/Web/API/InputEvent/inputType) {{ReadOnlyInline}}
  - : Gibt die Art der Änderung für bearbeitbare Inhalte zurück, beispielsweise das Einfügen, Löschen oder Formatieren von Text.
- [`InputEvent.isComposing`](/de/docs/Web/API/InputEvent/isComposing) {{ReadOnlyInline}}
  - : Gibt einen {{JSxRef("Boolean")}}-Wert zurück, der angibt, ob das Ereignis nach [`compositionstart`](/de/docs/Web/API/Element/compositionstart_event) und vor [`compositionend`](/de/docs/Web/API/Element/compositionend_event) ausgelöst wird.

## Beispiele

### Funktionsprüfung

Die folgende Funktion gibt `true` zurück, wenn `beforeinput` und damit `getTargetRanges` unterstützt werden.

```js
function isBeforeInputEventAvailable() {
  return (
    window.InputEvent &&
    typeof InputEvent.prototype.getTargetRanges === "function"
  );
}
```

### Einfache Protokollierung

Dieses Beispiel protokolliert den aktuellen Wert des Elements, unmittelbar bevor dieser Wert durch den neuen ersetzt wird, der auf das {{HtmlElement("input")}}-Element angewendet wird.

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
