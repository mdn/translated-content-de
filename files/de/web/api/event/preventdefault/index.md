---
title: "Event: Methode preventDefault()"
short-title: preventDefault()
slug: Web/API/Event/preventDefault
l10n:
  sourceCommit: 7484d45816002fbf082a59c5d95c38a1eb2b2e4b
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die Methode **`preventDefault()`** der Schnittstelle [`Event`](/de/docs/Web/API/Event) teilt dem {{Glossary("user_agent", "User Agent")}} mit, dass das Ereignis ausdrücklich behandelt wird. Daher soll die Standardaktion des Ereignisses – etwa das Scrollen der Seite, das Folgen eines Links oder das Einfügen von Text – nicht ausgeführt werden.

Das Ereignis wird weiterhin wie gewohnt weitergegeben, sofern nicht einer seiner Event Listener [`stopPropagation()`](/de/docs/Web/API/Event/stopPropagation) oder [`stopImmediatePropagation()`](/de/docs/Web/API/Event/stopImmediatePropagation) aufruft. Beide Methoden beenden die Weitergabe sofort.

Wie unten erläutert, hat der Aufruf von **`preventDefault()`** bei einem Ereignis, das nicht abgebrochen werden kann, keine Wirkung. Das gilt beispielsweise für ein Ereignis, das über [`EventTarget.dispatchEvent()`](/de/docs/Web/API/EventTarget/dispatchEvent) ausgelöst wurde, ohne `cancelable: true` anzugeben.

Wenn ein passiver Listener `preventDefault()` aufruft, geschieht nichts. Möglicherweise wird eine Warnung in der Konsole ausgegeben.

> [!NOTE]
> Suchen Sie nach besseren Alternativen zu `preventDefault()`, um Standardaktionen zu unterbinden. Beispielsweise können Sie bei einem Formularsteuerelement das Attribut `disabled` oder `readonly` verwenden, um eine Interaktion damit zu verhindern, mit der [HTML-Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) ungültige Eingaben zurückweisen oder mit der Eigenschaft {{cssxref("overflow")}} das Scrollen verhindern.

## Syntax

```js-nolint
preventDefault()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Standardverhalten beim Klicken verhindern

Beim Klicken auf eine Checkbox wird ihr Zustand standardmäßig umgeschaltet. Dieses Beispiel zeigt, wie Sie das verhindern:

#### HTML

```html
<p>Please click on the checkbox control.</p>

<form>
  <label for="id-checkbox">Checkbox:</label>
  <input type="checkbox" id="id-checkbox" />
</form>

<div id="output-box"></div>
```

#### JavaScript

```js
const checkbox = document.querySelector("#id-checkbox");

checkbox.addEventListener("click", checkboxClick);

function checkboxClick(event) {
  const warn = "preventDefault() won't let you check this!\n";
  document.getElementById("output-box").innerText += warn;
  event.preventDefault();
}
```

#### Ergebnis

{{EmbedLiveSample("Blocking_default_click_handling")}}

## Hinweise

Ein Aufruf von `preventDefault()` in einer beliebigen Phase des Ereignisablaufs bricht das Ereignis ab. Dadurch wird eine Standardaktion, die die Implementierung normalerweise als Reaktion auf das Ereignis ausführen würde, nicht ausgeführt.

Mit [`Event.cancelable`](/de/docs/Web/API/Event/cancelable) können Sie prüfen, ob das Ereignis abgebrochen werden kann. Bei einem Ereignis, das nicht abgebrochen werden kann, hat der Aufruf von `preventDefault()` keine Wirkung.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
