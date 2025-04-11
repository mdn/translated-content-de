---
title: "Event: preventDefault() Methode"
short-title: preventDefault()
slug: Web/API/Event/preventDefault
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`preventDefault()`** Methode der [`Event`](/de/docs/Web/API/Event) Schnittstelle teilt dem {{Glossary("user_agent", "User-Agent")}} mit, dass die Standardaktion nicht ausgeführt werden soll, wenn das Ereignis nicht ausdrücklich behandelt wird, wie es normalerweise der Fall wäre.

Das Ereignis wird weiterhin wie gewohnt propagiert, es sei denn, einer der Event-Listener ruft [`stopPropagation()`](/de/docs/Web/API/Event/stopPropagation) oder [`stopImmediatePropagation()`](/de/docs/Web/API/Event/stopImmediatePropagation) auf, welche beide die Propagation sofort beenden.

Wie unten angemerkt, hat das Aufrufen von **`preventDefault()`** für ein nicht abbrechbares Ereignis, wie eines, das über [`EventTarget.dispatchEvent()`](/de/docs/Web/API/EventTarget/dispatchEvent) gesendet wird, ohne `cancelable: true` anzugeben, keine Wirkung.

Wenn ein passiver Listener `preventDefault()` aufruft, passiert nichts und es kann eine Warnung in der Konsole angezeigt werden.

> [!NOTE]
> Suchen Sie nach besseren Alternativen, als `preventDefault()` zu verwenden, um Standardaktionen zu blockieren. Zum Beispiel können Sie das `disabled`- oder `readonly`-Attribut auf einem Formularsteuerelement verwenden, um die Interaktion damit zu verhindern, die [HTML-Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) verwenden, um ungültige Eingaben abzulehnen, oder die {{cssxref("overflow")}}-Eigenschaft verwenden, um das Scrollen zu verhindern.

## Syntax

```js-nolint
preventDefault()
```

## Beispiele

### Standard-Click-Verarbeitung blockieren

Das Umschalten eines Kontrollkästchens ist die Standardaktion eines Klicks auf ein Kontrollkästchen. Dieses Beispiel demonstriert, wie man das verhindert:

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

Das Aufrufen von `preventDefault()` während irgendeines Stadiums des Ereignisflusses hebt das Ereignis auf, was bedeutet, dass jede Standardaktion, die normalerweise als Ergebnis des Ereignisses von der Implementierung ausgeführt werden würde, nicht stattfindet.

Sie können [`Event.cancelable`](/de/docs/Web/API/Event/cancelable) verwenden, um zu überprüfen, ob das Ereignis abbrechbar ist. Das Aufrufen von `preventDefault()` für ein nicht abbrechbares Ereignis hat keine Wirkung.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
