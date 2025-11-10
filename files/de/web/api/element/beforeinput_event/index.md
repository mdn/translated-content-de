---
title: "Element: beforeinput Ereignis"
short-title: beforeinput
slug: Web/API/Element/beforeinput_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("UI Events")}}

Das DOM-**`beforeinput`**-Ereignis wird ausgelöst, wenn der Wert eines {{HTMLElement("input")}}- oder {{HTMLElement("textarea")}}-Elements geändert werden soll. Im Gegensatz zum [`input`](/de/docs/Web/API/Element/input_event)-Ereignis wird es jedoch nicht beim {{HTMLElement("select")}}-Element ausgelöst. Das Ereignis gilt auch für Elemente mit aktivierter [`contenteditable`](/de/docs/Web/API/HTMLElement/contentEditable)-Eigenschaft und für beliebige Elemente, wenn [`designMode`](/de/docs/Web/API/Document/designMode) aktiviert ist.

Dadurch können Web-Apps das Verhalten bei Texteinträgen überschreiben, bevor der Browser den DOM-Baum ändert, und sie bieten mehr Kontrolle über Eingabeereignisse zur Verbesserung der Leistung.

Im Fall von `contenteditable` und `designMode` ist das Ereignisziel der **Editing Host**. Wenn diese Eigenschaften auf mehrere Elemente zutreffen, ist der Editing Host das nächstgelegene Vorelement, dessen Elternteil nicht bearbeitbar ist.

> [!NOTE]
> Nicht jede Benutzermodifikation führt zur Auslösung von `beforeinput`. Außerdem kann es vorkommen, dass das Ereignis ausgelöst wird, aber nicht abgebrochen werden kann. Dies kann passieren, wenn die Änderung durch Autovervollständigung, durch Annahme einer Korrektur von einem Rechtschreibprüfer, durch automatisches Ausfüllen durch den Passwort-Manager, durch {{Glossary("Input_method_editor", "IME")}} oder auf andere Weise vorgenommen wird. Die Details variieren je nach Browser und Betriebssystem. Um das Bearbeitungsverhalten in allen Situationen zu überschreiben, muss der Code das `input`-Ereignis behandeln und möglicherweise Änderungen rückgängig machen, die nicht vom `beforeinput`-Handler behandelt wurden. Siehe Bugs [1673558](https://bugzil.la/1673558) und [1763669](https://bugzil.la/1763669).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder legen Sie eine Ereignis-Handler-Eigenschaft fest.

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
  - : Gibt eine Zeichenfolge mit den eingefügten Zeichen zurück. Dies kann eine leere Zeichenfolge sein, wenn die Änderung keinen Text einfügt (z. B. beim Löschen von Zeichen).
- [`InputEvent.dataTransfer`](/de/docs/Web/API/InputEvent/dataTransfer) {{ReadOnlyInline}}
  - : Gibt ein [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt zurück, das Informationen über richtext- oder plaintext-Daten enthält, die zu bearbeitbaren Inhalten hinzugefügt oder daraus entfernt werden.
- [`InputEvent.inputType`](/de/docs/Web/API/InputEvent/inputType) {{ReadOnlyInline}}
  - : Gibt den Typ der Änderung für bearbeitbare Inhalte zurück, wie z. B. Einfügen, Löschen oder Formatieren von Text.
- [`InputEvent.isComposing`](/de/docs/Web/API/InputEvent/isComposing) {{ReadOnlyInline}}
  - : Gibt einen {{JSxRef("Boolean")}}-Wert zurück, der angibt, ob das Ereignis nach [`compositionstart`](/de/docs/Web/API/Element/compositionstart_event) und vor [`compositionend`](/de/docs/Web/API/Element/compositionend_event) ausgelöst wird.

## Beispiele

### Funktionserkennung

Die folgende Funktion gibt `true` zurück, wenn `beforeinput` und somit `getTargetRanges` unterstützt wird.

```js
function isBeforeInputEventAvailable() {
  return (
    window.InputEvent &&
    typeof InputEvent.prototype.getTargetRanges === "function"
  );
}
```

### Einfacher Logger

Dieses Beispiel protokolliert den aktuellen Wert des Elements, unmittelbar bevor dieser Wert durch den neuen Wert ersetzt wird, der auf das {{HtmlElement("input")}}-Element angewendet wird.

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
