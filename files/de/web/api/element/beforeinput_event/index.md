---
title: "Element: beforeinput-Ereignis"
short-title: beforeinput
slug: Web/API/Element/beforeinput_event
l10n:
  sourceCommit: 195b87dbb0e63aab27700b606fc96c4cd7982f64
---

{{APIRef("UI Events")}}

Das DOM-Ereignis **`beforeinput`** wird ausgelöst, wenn der Wert eines {{HTMLElement("input")}}- oder {{HTMLElement("textarea")}}-Elements geändert werden soll. Anders als das Ereignis [`input`](/de/docs/Web/API/Element/input_event) wird es jedoch nicht bei {{HTMLElement("select")}}-Elementen ausgelöst. Das Ereignis gilt auch für Elemente mit aktiviertem [`contenteditable`](/de/docs/Web/API/HTMLElement/contentEditable) sowie für jedes Element, wenn [`designMode`](/de/docs/Web/API/Document/designMode) aktiviert ist.

Dadurch können Webanwendungen das Verhalten bei der Textbearbeitung ändern, bevor der Browser den DOM-Baum verändert. Außerdem erhalten sie mehr Kontrolle über Eingabeereignisse, um die Leistung zu verbessern.

Bei `contenteditable` und `designMode` ist das Ereignisziel der **Bearbeitungshost**. Wenn diese Eigenschaften für mehrere Elemente gelten, ist der Bearbeitungshost das nächstgelegene übergeordnete Element, dessen Elternelement nicht bearbeitbar ist.

> [!NOTE]
> Nicht jede Änderung durch Benutzer löst `beforeinput` aus. Außerdem kann das Ereignis ausgelöst werden, ohne abbrechbar zu sein. Dies kann vorkommen, wenn die Änderung durch Autovervollständigung, die Übernahme eines Korrekturvorschlags der Rechtschreibprüfung, automatisches Ausfüllen durch einen Passwortmanager, einen {{Glossary("Input_method_editor", "IME")}} oder auf andere Weise erfolgt. Die Einzelheiten unterscheiden sich je nach Browser und Betriebssystem. Um das Bearbeitungsverhalten in allen Fällen zu ändern, muss der Code das Ereignis `input` verarbeiten und gegebenenfalls Änderungen rückgängig machen, die nicht vom `beforeinput`-Handler verarbeitet wurden. Siehe die Fehlerberichte [1673558](https://bugzil.la/1673558) und [1763669](https://bugzil.la/1763669).

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("beforeinput", (event) => { })
```

Alternativ können Sie die [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle verwenden:

```js-nolint
onbeforeinput = (event) => { }
```

## Ereignistyp

Ein [`InputEvent`](/de/docs/Web/API/InputEvent). Erbt von [`UIEvent`](/de/docs/Web/API/UIEvent).

{{InheritanceDiagram("InputEvent")}}

## Beispiele

### Unterstützung erkennen

Die folgende Funktion gibt „true“ zurück, wenn `beforeinput` und damit `getTargetRanges` unterstützt wird.

```js
function isBeforeInputEventAvailable() {
  return (
    window.InputEvent &&
    typeof InputEvent.prototype.getTargetRanges === "function"
  );
}
```

### Einfacher Logger

Dieses Beispiel protokolliert den aktuellen Wert des Elements unmittelbar bevor dieser durch den neuen Wert ersetzt wird, der auf das {{HtmlElement("input")}}-Element angewendet wird.

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
