---
title: "Event: Methode preventDefault()"
short-title: preventDefault()
slug: Web/API/Event/preventDefault
l10n:
  sourceCommit: 35b2fac222ecac7dd08b05b9210628584806d92f
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`preventDefault()`**-Methode der [`Event`](/de/docs/Web/API/Event)-Schnittstelle teilt dem {{Glossary("user_agent", "User-Agent")}} mit, dass, wenn das Ereignis nicht explizit behandelt wird, seine Standardaktion nicht wie üblich ausgeführt werden sollte.

Das Ereignis verbreitet sich wie üblich weiter, es sei denn, einer seiner Ereignis-Listener ruft [`stopPropagation()`](/de/docs/Web/API/Event/stopPropagation) oder [`stopImmediatePropagation()`](/de/docs/Web/API/Event/stopImmediatePropagation) auf, die beide die Verbreitung sofort beenden.

Wie unten angegeben, hat das Aufrufen von **`preventDefault()`** für ein nicht abbruchfähiges Ereignis, wie eines, das über [`EventTarget.dispatchEvent()`](/de/docs/Web/API/EventTarget/dispatchEvent) ohne Angabe von `cancelable: true` ausgelöst wird, keine Wirkung.

Wenn ein passiver Listener `preventDefault()` aufruft, passiert nichts und es kann eine Warnung in der Konsole erzeugt werden.

> [!NOTE]
> Suchen Sie nach besseren Alternativen zu `preventDefault()`, um Standardaktionen zu blockieren. Sie können beispielsweise das `disabled`- oder `readonly`-Attribut an einem Formularelement verwenden, um Interaktionen zu verhindern, die [HTML-Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation), um ungültige Eingaben abzulehnen, oder die {{cssxref("overflow")}}-Eigenschaft, um das Scrollen zu verhindern.

## Syntax

```js-nolint
preventDefault()
```

## Beispiele

### Blockieren der Standard-Klickbehandlung

Das Umschalten eines Kontrollkästchens ist die Standardaktion beim Klicken auf ein Kontrollkästchen. Dieses Beispiel demonstriert, wie man dies verhindern kann:

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

## Anmerkungen

Das Aufrufen von `preventDefault()` während jeder Phase des Ereignisflusses hebt das Ereignis auf, was bedeutet, dass jede normalerweise durch die Implementierung als Ergebnis des Ereignisses getroffene Standardaktion nicht durchgeführt wird.

Sie können [`Event.cancelable`](/de/docs/Web/API/Event/cancelable) verwenden, um zu überprüfen, ob das Ereignis abbruchfähig ist. Das Aufrufen von `preventDefault()` für ein nicht abbruchfähiges Ereignis hat keine Wirkung.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
