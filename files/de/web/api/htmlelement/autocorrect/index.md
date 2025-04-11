---
title: "HTMLElement: autocorrect-Eigenschaft"
short-title: autocorrect
slug: Web/API/HTMLElement/autocorrect
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`autocorrect`**-Eigenschaft des [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interfaces steuert, ob die Autokorrektur für bearbeitbaren Text bei Rechtschreib- und/oder Zeichensetzungsfehlern aktiviert ist oder nicht.

Das spezifische Verhalten der Autokorrektur, einschließlich der Wörter, die ersetzt werden, hängt vom Nutzeragenten und den Diensten des zugrundeliegenden Geräts ab. Zum Beispiel könnte ein Nutzeragent auf macOS auf [registrierten Ersatztext und Zeichensetzung](https://support.apple.com/en-vn/guide/mac-help/mh35735/mac) zurückgreifen. Andere Geräte und Browser könnten einen anderen Ansatz verwenden.

Die Eigenschaft spiegelt den Wert des globalen HTML-Attributs [`autocorrect`](/de/docs/Web/HTML/Reference/Global_attributes/autocorrect) wider.

## Wert

`true`, wenn die Autokorrektur für das Element aktiviert ist, und `false` andernfalls.

## Beispiele

### Autokorrektur aktivieren und deaktivieren

Dieses Beispiel zeigt, wie Sie die Autokorrektur aktivieren und deaktivieren können.

#### HTML

Das HTML-Markup definiert eine Umschaltfläche und ein {{htmlelement("input")}}-Element vom [`type="search"`](/de/docs/Web/HTML/Reference/Elements/input/search).
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

Der Code überprüft zuerst, ob die `autocorrect`-Eigenschaft unterstützt wird, indem er prüft, ob sie im `HTMLElement`-Prototyp vorhanden ist. Wenn sie vorhanden ist, wird ein Klick-Handler hinzugefügt, der es Ihnen ermöglicht, den Wert umzuschalten. Wenn sie nicht vorhanden ist, versteckt die Benutzeroberfläche die interaktiven Elemente und protokolliert, dass `autocorrect` nicht unterstützt wird.

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

Aktivieren Sie die Schaltfläche, um den Wert der Autokorrektur umzuschalten. Geben Sie ungültigen Text in das Textfeld ein, wie zum Beispiel "Carot". Wenn die Autokorrektur aktiviert ist und die Implementierung das entsprechende Ersatzwort "carrot" hat, sollte der Text automatisch korrigiert werden.

{{EmbedLiveSample("Enable and disable autocorrection", "100%", "200")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`autocapitalize`](/de/docs/Web/HTML/Reference/Global_attributes/autocapitalize) globales HTML-Attribut
