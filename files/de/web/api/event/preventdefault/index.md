---
title: "Event: preventDefault() Methode"
short-title: preventDefault()
slug: Web/API/Event/preventDefault
l10n:
  sourceCommit: ffff697fbd3004c3da50323ef4d868b3ad47e4d0
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`preventDefault()`**-Methode der [`Event`](/de/docs/Web/API/Event)-Schnittstelle teilt dem {{Glossary("user_agent", "User-Agent")}} mit, dass, wenn das Ereignis nicht explizit behandelt wird, seine Standardaktion nicht wie üblich ausgeführt werden sollte.

Das Ereignis wird wie gewohnt weiterhin verbreitet,
es sei denn, einer seiner Ereignis-Listener ruft
[`stopPropagation()`](/de/docs/Web/API/Event/stopPropagation)
oder [`stopImmediatePropagation()`](/de/docs/Web/API/Event/stopImmediatePropagation) auf,
wodurch die Ausbreitung sofort beendet wird.

Wie unten erwähnt hat das Aufrufen von **`preventDefault()`** für ein
nicht-abbrechbares Ereignis, wie eines, das über
[`EventTarget.dispatchEvent()`](/de/docs/Web/API/EventTarget/dispatchEvent) gesendet wurde, ohne dass `cancelable: true` angegeben wurde, keine Auswirkung.

Wenn ein passiver Listener `preventDefault()` aufruft, wird nichts passieren und es kann eine Warnung in der Konsole generiert werden.

> [!NOTE]
> Suchen Sie nach besseren Alternativen als die Verwendung von `preventDefault()`, um Standardaktionen zu blockieren. Sie können beispielsweise das `disabled`- oder `readonly`-Attribut an einem Formularelement verwenden, um dessen Interaktion zu verhindern, [HTML-Beschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) nutzen, um ungültige Eingaben abzulehnen, oder die {{cssxref("overflow")}}-Eigenschaft verwenden, um das Scrollen zu verhindern.

## Syntax

```js-nolint
preventDefault()
```

### Parameter

Keine.

### Rückgabewert

Kein Wert ({{jsxref("undefined")}}).

## Beispiele

### Blockierung der Standard-Klickverarbeitung

Das Umschalten eines Kontrollkästchens ist die Standardaktion beim Klicken auf ein Kontrollkästchen. Dieses Beispiel
zeigt, wie man das verhindern kann:

#### JavaScript

```js
const checkbox = document.querySelector("#id-checkbox");

checkbox.addEventListener("click", checkboxClick, false);

function checkboxClick(event) {
  const warn = "preventDefault() won't let you check this!\n";
  document.getElementById("output-box").innerText += warn;
  event.preventDefault();
}
```

#### HTML

```html
<p>Please click on the checkbox control.</p>

<form>
  <label for="id-checkbox">Checkbox:</label>
  <input type="checkbox" id="id-checkbox" />
</form>

<div id="output-box"></div>
```

#### Ergebnis

{{EmbedLiveSample("Blocking_default_click_handling")}}

## Hinweise

Das Aufrufen von `preventDefault()` in jeder Phase des Ereignisflusses hebt das Ereignis auf,
was bedeutet, dass jede Standardaktion, die normalerweise als Ergebnis des
Ereignisses von der Implementierung durchgeführt wird, nicht erfolgt.

Sie können [`Event.cancelable`](/de/docs/Web/API/Event/cancelable) verwenden, um zu überprüfen, ob das Ereignis abbrechbar ist.
Das Aufrufen von `preventDefault()` für ein nicht-abbrechbares Ereignis hat keine Wirkung.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
