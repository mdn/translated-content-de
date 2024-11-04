---
title: "HTMLElement: autocorrect-Eigenschaft"
short-title: autocorrect
slug: Web/API/HTMLElement/autocorrect
l10n:
  sourceCommit: 709d3a56661f895e5b0a67ff969e381d503ddd45
---

{{APIRef("HTML DOM")}}

Die **`autocorrect`**-Eigenschaft des [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interfaces steuert, ob die Texteingabe des Benutzers automatisch auf Rechtschreib- und/oder Zeichensetzungsfehler korrigiert wird.

Die Eigenschaft spiegelt den Wert des globalen HTML-Attributs [`autocorrect`](/de/docs/Web/HTML/Global_attributes/autocorrect) wider.

## Wert

`true`, wenn die automatische Korrektur für das Element aktiviert ist, und `false` ansonsten.

## Beispiele

### Autokorrektur aktivieren und deaktivieren

Dieses Beispiel zeigt, wie Sie die Autokorrektur aktivieren und deaktivieren können.

#### HTML

Das HTML-Markup definiert einen Umschaltknopf und ein {{htmlelement("input")}}-Element vom [`type="search"`](/de/docs/Web/HTML/Element/input/search).
Beachten Sie, dass, wenn die Autokorrektur unterstützt wird, sie standardmäßig aktiviert ist.

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

Der Code überprüft zuerst, ob die `autocorrect`-Eigenschaft unterstützt wird, indem er prüft, ob sie im `HTMLElement`-Prototyp vorhanden ist.
Wenn sie vorhanden ist, wird ein Klick-Handler hinzugefügt, der es Ihnen ermöglicht, den Wert umzuschalten.
Wenn sie nicht vorhanden ist, verbirgt die Benutzeroberfläche die interaktiven Elemente und protokolliert, dass `autocorrect` nicht unterstützt wird.

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

Aktivieren Sie den Knopf, um den autocorrect-Wert umzuschalten. Geben Sie ungültigen Text in das Textfeld ein, wie "Carot".
Dies sollte automatisch korrigiert werden, wenn die Funktion aktiviert ist.

{{EmbedLiveSample("Enable and disable autocorrection", "100%", "200")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`autocapitalize`](/de/docs/Web/HTML/Global_attributes/autocapitalize) HTML-Globalattribut
