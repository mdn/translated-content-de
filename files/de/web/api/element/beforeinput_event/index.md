---
title: "Element: beforeinput-Ereignis"
short-title: beforeinput
slug: Web/API/Element/beforeinput_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}

Das DOM-**`beforeinput`**-Ereignis wird ausgelöst, wenn der Wert eines {{HTMLElement("input")}}- oder {{HTMLElement("textarea")}}-Elements geändert werden soll. Im Gegensatz zum [`input`](/de/docs/Web/API/Element/input_event)-Ereignis wird es jedoch nicht für das {{HTMLElement("select")}}-Element ausgelöst. Das Ereignis gilt auch für Elemente mit aktiviertem [`contenteditable`](/de/docs/Web/API/HTMLElement/contentEditable) und für jedes Element, wenn [`designMode`](/de/docs/Web/API/Document/designMode) eingeschaltet ist.

Dies ermöglicht es Webanwendungen, das Verhalten der Textbearbeitung zu überschreiben, bevor der Browser den DOM-Baum verändert, und bietet mehr Kontrolle über Eingabeereignisse, um die Leistung zu verbessern.

Bei `contenteditable` und `designMode` ist das Ziel des Ereignisses der **Bearbeitungs-Host**. Wenn diese Eigenschaften für mehrere Elemente gelten, ist der Bearbeitungs-Host das nächstgelegene Vorfahrenelement, dessen Elternteil nicht bearbeitbar ist.

> [!NOTE]
> Nicht jede Benutzeränderung führt dazu, dass `beforeinput` ausgelöst wird. Außerdem kann das Ereignis ausgelöst werden, aber nicht abbrechbar sein. Dies kann vorkommen, wenn die Änderung durch Autovervollständigung erfolgt, durch die Annahme einer Korrektur von einem Rechtschreibprüfer, durch Passwortmanager-Autofill, durch {{Glossary("Input_method_editor", "IME")}} oder auf andere Weise. Die Details variieren je nach Browser und Betriebssystem. Um das Bearbeitungsverhalten in allen Situationen zu überschreiben, muss der Code das `input`-Ereignis behandeln und möglicherweise Änderungen rückgängig machen, die nicht vom `beforeinput`-Handler behandelt wurden. Siehe Fehler [1673558](https://bugzil.la/1673558) und [1763669](https://bugzil.la/1763669).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("beforeinput", (event) => { })

onbeforeinput = (event) => { }
```

## Ereignistyp

Ein [`InputEvent`](/de/docs/Web/API/InputEvent). Erbt von [`UIEvent`](/de/docs/Web/API/UIEvent).

{{InheritanceDiagram("InputEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt Eigenschaften von ihren Eltern, [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`InputEvent.data`](/de/docs/Web/API/InputEvent/data) {{ReadOnlyInline}}
  - : Gibt eine Zeichenfolge mit den eingefügten Zeichen zurück. Dies kann eine leere Zeichenfolge sein, wenn die Änderung keinen Text einfügt (zum Beispiel beim Löschen von Zeichen).
- [`InputEvent.dataTransfer`](/de/docs/Web/API/InputEvent/dataTransfer) {{ReadOnlyInline}}
  - : Gibt ein [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt zurück, das Informationen über Rich-Text- oder Nur-Text-Daten enthält, die zu bearbeitbaren Inhalten hinzugefügt oder von ihnen entfernt werden.
- [`InputEvent.inputType`](/de/docs/Web/API/InputEvent/inputType) {{ReadOnlyInline}}
  - : Gibt den Typ der Änderung für bearbeitbare Inhalte zurück, wie z. B. das Einfügen, Löschen oder Formatieren von Text.
- [`InputEvent.isComposing`](/de/docs/Web/API/InputEvent/isComposing) {{ReadOnlyInline}}
  - : Gibt einen {{JSxRef("Boolean")}}-Wert zurück, der angibt, ob das Ereignis nach [`compositionstart`](/de/docs/Web/API/Element/compositionstart_event) und vor [`compositionend`](/de/docs/Web/API/Element/compositionend_event) ausgelöst wird.

## Beispiele

### Funktionsprüfung

Die folgende Funktion gibt true zurück, wenn `beforeinput` und somit `getTargetRanges` unterstützt werden.

```js
function isBeforeInputEventAvailable() {
  return (
    window.InputEvent &&
    typeof InputEvent.prototype.getTargetRanges === "function"
  );
}
```

### Einfacher Logger

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
