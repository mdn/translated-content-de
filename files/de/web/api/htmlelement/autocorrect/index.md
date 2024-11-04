---
title: "HTMLElement: autocorrect-Eigenschaft"
short-title: autocorrect
slug: Web/API/HTMLElement/autocorrect
l10n:
  sourceCommit: 1ea99c8e68a85aac13ba846bbe95a6f686771221
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

Die **`autocorrect`**-Eigenschaft des [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interfaces steuert, ob die Benutzereingabe automatisch auf Rechtschreib- und/oder Satzzeichenfehler korrigiert wird.

Die Eigenschaft spiegelt den Wert des HTML-Globalattributs [`autocorrect`](/de/docs/Web/HTML/Global_attributes/autocorrect) wider.

## Wert

`true`, wenn die automatische Korrektur für das Element aktiviert ist, und `false` andernfalls.

## Beispiele

### Automatische Korrektur ein- und ausschalten

Dieses Beispiel zeigt, wie Sie die automatische Korrektur ein- und ausschalten können.

#### HTML

Das HTML-Markup definiert einen Umschaltknopf und ein {{htmlelement("input")}}-Element vom [`type="search"`](/de/docs/Web/HTML/Element/input/search).
Beachten Sie, dass die automatische Korrektur, falls unterstützt, standardmäßig aktiviert ist.

```html
<button id="toggleAutocorrect"></button>
<input type="search" id="searchinput" />
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

#### JavaScript

Der Code prüft zunächst, ob `autocorrect` unterstützt wird, indem er prüft, ob es im `HTMLElement`-Prototyp vorhanden ist.
Wenn es vorhanden ist, wird ein Klick-Handler hinzugefügt, um das Umschalten des Wertes zu ermöglichen.
Wenn es nicht vorhanden ist, verbirgt die Benutzeroberfläche die interaktiven Elemente und protokolliert, dass `autocorrect` nicht unterstützt wird.

```js
const toggleButton = document.querySelector("button");
const searchInput = document.querySelector("#searchinput");

function setButtonText() {
  toggleButton.textContent = searchInput.autocorrect ? "Enabled" : "Disabled";
  log(`autocorrect: ${searchInput.autocorrect}`);
}

if (`autocorrect` in HTMLElement.prototype) {
  setButtonText();

  toggleButton.addEventListener("click", (e) => {
    searchInput.autocorrect = !searchInput.autocorrect;
    setButtonText();
  });
} else {
  toggleButton.hidden = true;
  searchInput.hidden = true;
  log("autocorrect not supported");
}
```

#### Ergebnis

Aktivieren Sie den Knopf, um den Wert der automatischen Korrektur umzuschalten. Geben Sie ungültigen Text in das Textfeld ein, wie "Carot".
Dies sollte automatisch korrigiert werden, wenn die Funktion aktiviert ist.

{{EmbedLiveSample("Enable and disable autocorrection", "100%", "200")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`autocapitalize`](/de/docs/Web/HTML/Global_attributes/autocapitalize) HTML-Globalattribut
