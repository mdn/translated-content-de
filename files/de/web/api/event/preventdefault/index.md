---
title: "Event: preventDefault()-Methode"
short-title: preventDefault()
slug: Web/API/Event/preventDefault
l10n:
  sourceCommit: d495d8a165c7598dee686d5672268cb045f164c6
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`preventDefault()`**-Methode der [`Event`](/de/docs/Web/API/Event)-Schnittstelle teilt dem {{Glossary("user_agent", "User Agent")}} mit, dass das Ereignis explizit behandelt wird, sodass die Standardaktion, wie z.B. das Scrollen der Seite, die Navigation eines Links oder das Einfügen von Text, nicht ausgeführt werden soll.

Das Ereignis wird weiterhin wie gewohnt propagiert, es sei denn, einer seiner Ereignis-Listener ruft [`stopPropagation()`](/de/docs/Web/API/Event/stopPropagation) oder [`stopImmediatePropagation()`](/de/docs/Web/API/Event/stopImmediatePropagation) auf, womit die Propagierung sofort beendet wird.

Wie unten angegeben, hat das Aufrufen von **`preventDefault()`** für ein nicht abbrechbares Ereignis, wie eines, das über [`EventTarget.dispatchEvent()`](/de/docs/Web/API/EventTarget/dispatchEvent) ausgelöst wird, ohne Angabe von `cancelable: true` keine Wirkung.

Wenn ein passiver Listener `preventDefault()` aufruft, wird nichts passieren und möglicherweise wird eine Konsolenwarnung generiert.

> [!NOTE]
> Suchen Sie nach besseren Alternativen als `preventDefault()` zu verwenden, um Standardaktionen zu blockieren. Beispielsweise können Sie das `disabled`- oder `readonly`-Attribut bei einem Formularsteuerelement verwenden, um dessen Interaktion zu verhindern, [HTML-Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) nutzen, um ungültige Eingaben abzulehnen, oder die {{cssxref("overflow")}}-Eigenschaft verwenden, um das Scrollen zu verhindern.

## Syntax

```js-nolint
preventDefault()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiele

### Blockieren der Standard-Klickbehandlung

Das Umschalten eines Kontrollkästchens ist die Standardaktion beim Klicken auf ein Kontrollkästchen. Dieses Beispiel demonstriert, wie dies verhindert werden kann:

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

Das Aufrufen von `preventDefault()` während jeder Phase des Ereignisflusses bricht das Ereignis ab, was bedeutet, dass jede Standardaktion, die normalerweise von der Implementierung als Ergebnis des Ereignisses ausgeführt wird, nicht erfolgt.

Sie können [`Event.cancelable`](/de/docs/Web/API/Event/cancelable) verwenden, um zu überprüfen, ob das Ereignis abbrechbar ist. Das Aufrufen von `preventDefault()` für ein nicht abbrechbares Ereignis hat keine Wirkung.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
