---
title: "HTMLElement: autocorrect-Eigenschaft"
short-title: autocorrect
slug: Web/API/HTMLElement/autocorrect
l10n:
  sourceCommit: aff319cd81d10cfda31b13adb3263deafb284b20
---

{{APIRef("HTML DOM")}}

Die **`autocorrect`**-Eigenschaft des [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interfaces steuert, ob die Autokorrektur von bearbeitbarem Text für Rechtschreib- und/oder Zeichensetzungsfehler aktiviert ist.

Das spezifische Autokorrekturverhalten, einschließlich der zu ersetzenden Wörter, hängt vom User-Agent und den Diensten des zugrunde liegenden Geräts ab. Beispielsweise könnte ein User-Agent unter macOS auf [registrierten Ersetzungstext und Zeichensetzung](https://support.apple.com/en-vn/guide/mac-help/mh35735/mac) zurückgreifen. Andere Geräte und Browser könnten einen anderen Ansatz verwenden.

Die Eigenschaft spiegelt den Wert des globalen HTML-Attributs [`autocorrect`](/de/docs/Web/HTML/Reference/Global_attributes/autocorrect) wider.

## Wert

`true`, wenn die Autokorrektur für das Element aktiviert ist, und `false` andernfalls.

## Beispiele

### Autokorrektur aktivieren und deaktivieren

Dieses Beispiel zeigt, wie Sie die Autokorrektur aktivieren und deaktivieren können.

#### HTML

Das HTML-Markup definiert eine Umschalttaste und ein {{htmlelement("input")}}-Element des Typs [`type="search"`](/de/docs/Web/HTML/Reference/Elements/input/search). Beachten Sie, dass, wenn die Autokorrektur unterstützt wird, sie standardmäßig aktiviert ist.

```html
<button id="toggleAutocorrect">Unknown</button>
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

Der Code prüft zunächst, ob `autocorrect` unterstützt wird, indem überprüft wird, ob es im `HTMLElement`-Prototyp vorhanden ist. Wenn es vorhanden ist, wird ein Klick-Handler hinzugefügt, um Ihnen das Umschalten des Wertes zu ermöglichen. Wenn es nicht vorhanden ist, versteckt die Benutzeroberfläche die interaktiven Elemente und protokolliert, dass `autocorrect` nicht unterstützt wird.

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

Aktivieren Sie die Schaltfläche, um den Wert der Autokorrektur umzuschalten. Geben Sie ungültigen Text in das Textfeld ein, wie z.B. "Carot". Wenn die Autokorrektur aktiviert ist und die Implementierung das passende Ersatzwort "carrot" hat, sollte der Text automatisch korrigiert werden.

{{EmbedLiveSample("Enable and disable autocorrection", "100%", "200")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`autocapitalize`](/de/docs/Web/HTML/Reference/Global_attributes/autocapitalize) globales HTML-Attribut
