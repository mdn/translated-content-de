---
title: "Element: beforeinput-Ereignis"
short-title: beforeinput
slug: Web/API/Element/beforeinput_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("UI Events")}}

Das DOM **`beforeinput`**-Ereignis wird ausgelöst, wenn der Wert eines {{HTMLElement("input")}}- oder {{HTMLElement("textarea")}}-Elements kurz davor steht, geändert zu werden. Im Gegensatz zum [`input`](/de/docs/Web/API/Element/input_event)-Ereignis wird es jedoch nicht auf dem {{HTMLElement("select")}}-Element ausgelöst. Das Ereignis gilt auch für Elemente mit aktiviertem [`contenteditable`](/de/docs/Web/API/HTMLElement/contentEditable) und für jedes Element, wenn [`designMode`](/de/docs/Web/API/Document/designMode) aktiviert ist.

Dies ermöglicht Web-Apps, das Verhalten der Texteingabe zu überschreiben, bevor der Browser den DOM-Baum verändert, und bietet mehr Kontrolle über Eingabeereignisse zur Leistungsverbesserung.

Im Fall von `contenteditable` und `designMode` ist das Ereignisziel der **Editing Host**. Wenn diese Eigenschaften auf mehrere Elemente angewendet werden, ist der Editing Host das nächstgelegene Vorfahren-Element, dessen übergeordnetes Element nicht bearbeitbar ist.

> [!NOTE]
> Nicht jede Benutzeränderung führt dazu, dass `beforeinput` ausgelöst wird. Außerdem kann das Ereignis ausgelöst werden, aber nicht abgebrochen werden können. Dies kann geschehen, wenn die Änderung durch Autovervollständigung erfolgt, durch das Akzeptieren einer Korrektur aus einer Rechtschreibprüfung, durch automatisches Ausfüllen durch einen Passwort-Manager, durch {{Glossary("Input_method_editor", "IME")}} oder auf andere Weise. Die Details variieren je nach Browser und Betriebssystem. Um das Bearbeitungsverhalten in allen Situationen zu überschreiben, muss der Code das `input`-Ereignis behandeln und möglicherweise Änderungen rückgängig machen, die nicht durch den `beforeinput`-Handler behandelt wurden. Siehe die Fehler [1673558](https://bugzil.la/1673558) und [1763669](https://bugzil.la/1763669).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("beforeinput", (event) => { })

onbeforeinput = (event) => { }
```

## Ereignistyp

Ein [`InputEvent`](/de/docs/Web/API/InputEvent). Erbt von [`UIEvent`](/de/docs/Web/API/UIEvent).

{{InheritanceDiagram("InputEvent")}}

## Beispiele

### Feature-Erkennung

Die folgende Funktion gibt `true` zurück, wenn `beforeinput` und damit `getTargetRanges` unterstützt wird.

```js
function isBeforeInputEventAvailable() {
  return (
    window.InputEvent &&
    typeof InputEvent.prototype.getTargetRanges === "function"
  );
}
```

### Einfacher Logger

Dieses Beispiel protokolliert den aktuellen Wert des Elements unmittelbar bevor dieser Wert durch den neuen, auf das {{HtmlElement("input")}}-Element angewendeten, ersetzt wird.

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
