---
title: "Event: preventDefault()-Methode"
short-title: preventDefault()
slug: Web/API/Event/preventDefault
l10n:
  sourceCommit: 976891fb78ba24cb4ac6e58ae8a903b20eae4337
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`preventDefault()`**-Methode des [`Event`](/de/docs/Web/API/Event)-Interfaces teilt dem {{Glossary("user_agent", "User-Agent")}} mit, dass das Ereignis explizit behandelt wird, sodass die Standardaktion, wie z.B. das Scrollen der Seite, die Navigation von Links oder das Einfügen von Text, nicht ausgeführt werden soll.

Das Ereignis wird weiterhin wie gewohnt propagiert, es sei denn, einer seiner Ereignis-Listener ruft [`stopPropagation()`](/de/docs/Web/API/Event/stopPropagation) oder [`stopImmediatePropagation()`](/de/docs/Web/API/Event/stopImmediatePropagation) auf, von denen beide die Propagation sofort beenden.

Wie unten erwähnt, hat das Aufrufen von **`preventDefault()`** bei einem nicht abbrechbaren Ereignis, wie einem, das über [`EventTarget.dispatchEvent()`](/de/docs/Web/API/EventTarget/dispatchEvent) ausgelöst wurde, ohne `cancelable: true` anzugeben, keine Wirkung.

Wenn ein passiver Listener `preventDefault()` aufruft, passiert nichts und es kann eine Konsolenwarnung generiert werden.

> [!NOTE]
> Suchen Sie nach besseren Alternativen, als `preventDefault()` zu verwenden, um Standardaktionen zu blockieren. Sie können z.B. das `disabled`- oder `readonly`-Attribut bei einem Formularelement verwenden, um dessen Interaktion zu verhindern, [HTML-Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) nutzen, um ungültige Eingaben abzulehnen, oder die {{cssxref("overflow")}}-Eigenschaft verwenden, um das Scrollen zu verhindern.

## Syntax

```js-nolint
preventDefault()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiele

### Blockieren der Standard-Click-Handhabung

Das Umschalten eines Kontrollkästchens ist die Standardaktion des Klickens auf ein Kontrollkästchen. Dieses Beispiel zeigt, wie verhindert werden kann, dass das passiert:

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

#### HTML

```html
<p>Please click on the checkbox control.</p>

<form>
  <label for="id-checkbox">Checkbox:</label>
  <input type="checkbox" id="id-checkbox" />
</form>

<div id="output-box"></div>
```

#### Resultat

{{EmbedLiveSample("Blocking_default_click_handling")}}

## Hinweise

Das Aufrufen von `preventDefault()` während einer beliebigen Phase des Ereignisflusses hebt das Ereignis auf, was bedeutet, dass keine Standardaktion, die normalerweise von der Implementierung als Ergebnis des Ereignisses ausgeführt wird, stattfinden wird.

Sie können [`Event.cancelable`](/de/docs/Web/API/Event/cancelable) verwenden, um zu prüfen, ob das Ereignis abbrechbar ist. Das Aufrufen von `preventDefault()` bei einem nicht abbrechbaren Ereignis hat keine Wirkung.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
