---
title: "HTMLElement: autocorrect-Eigenschaft"
short-title: autocorrect
slug: Web/API/HTMLElement/autocorrect
l10n:
  sourceCommit: 587c39b8fe43e66c79c2055b4791a60483049e82
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

Die **`autocorrect`**-Eigenschaft des [`HTMLElement`](/de/docs/Web/API/HTMLElement) Interface steuert, ob die Texteingabe des Benutzers automatisch auf Rechtschreib- und/oder Zeichensetzungsfehler korrigiert wird.

Die Eigenschaft spiegelt den Wert des globalen HTML-Attributs [`autocorrect`](/de/docs/Web/HTML/Global_attributes/autocorrect) wider.

## Wert

`true`, wenn die Autokorrektur für das Element aktiviert ist, andernfalls `false`.

## Beispiele

### Autokorrektur aktivieren und deaktivieren

Dieses Beispiel zeigt, wie Sie die Autokorrektur aktivieren und deaktivieren können.

#### HTML

Das HTML-Markup definiert eine Umschalttaste und ein {{htmlelement("input")}}-Element mit [`type="search"`](/de/docs/Web/HTML/Element/input/search).
Beachten Sie, dass die Autokorrektur, falls unterstützt, standardmäßig aktiviert ist.

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

Der Code überprüft zunächst, ob `autocorrect` unterstützt wird, indem geprüft wird, ob es im `HTMLElement`-Prototyp vorhanden ist.
Falls vorhanden, wird ein Klick-Handler hinzugefügt, der Ihnen erlaubt, den Wert umzuschalten.
Falls es nicht vorhanden ist, versteckt die Benutzeroberfläche die interaktiven Elemente und protokolliert, dass `autocorrect` nicht unterstützt wird.

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

<!-- cSpell:ignore Carot -->

Aktivieren Sie die Schaltfläche, um den Autokorrekturwert umzuschalten. Geben Sie ungültigen Text in das Textfeld ein, z.B. "Carot".
Dies sollte automatisch korrigiert werden, wenn die Funktion aktiviert ist.

{{EmbedLiveSample("Enable and disable autocorrection", "100%", "200")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML-Globalattribut [`autocapitalize`](/de/docs/Web/HTML/Global_attributes/autocapitalize)
