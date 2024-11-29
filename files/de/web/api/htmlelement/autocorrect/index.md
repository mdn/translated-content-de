---
title: "HTMLElement: autocorrect-Eigenschaft"
short-title: autocorrect
slug: Web/API/HTMLElement/autocorrect
l10n:
  sourceCommit: 6b278eb98d94ec8d85f03f77aef7c5d08edcd88f
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

Die **`autocorrect`**-Eigenschaft des [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interfaces steuert, ob die Autokorrektur des bearbeitbaren Textes für Rechtschreib- und/oder Zeichensetzungsfehler aktiviert ist oder nicht.

Das spezifische Verhalten der Autokorrektur, einschließlich der ersetzten Wörter, hängt vom Benutzeragenten und den vom zugrunde liegenden Gerät bereitgestellten Diensten ab.
Auf macOS könnte sich ein Benutzeragent beispielsweise auf [registrierten Ersetzungstext und Zeichensetzung](https://support.apple.com/en-vn/guide/mac-help/mh35735/mac) stützen.
Andere Geräte und Browser können einen anderen Ansatz verwenden.

Diese Eigenschaft spiegelt den Wert des globalen HTML-Attributs [`autocorrect`](/de/docs/Web/HTML/Global_attributes/autocorrect) wider.

## Wert

`true`, wenn die Autokorrektur für das Element aktiviert ist, andernfalls `false`.

## Beispiele

### Autokorrektur aktivieren und deaktivieren

Dieses Beispiel zeigt, wie Sie die Autokorrektur aktivieren und deaktivieren können.

#### HTML

Der HTML-Markup definiert eine Umschalttaste und ein {{htmlelement("input")}}-Element des Typs [`type="search"`](/de/docs/Web/HTML/Element/input/search).
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

Der Code prüft zuerst, ob die `autocorrect`-Eigenschaft unterstützt wird, indem überprüft wird, ob sie im `HTMLElement`-Prototyp vorhanden ist.
Wenn sie vorhanden ist, wird ein Klick-Handler hinzugefügt, um Ihnen das Umschalten des Wertes zu ermöglichen.
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

Aktivieren Sie die Taste, um den Wert der Autokorrektur umzuschalten.
Geben Sie ungültigen Text in das Textfeld ein, wie z.B. "Carot".
Wenn die Autokorrektur aktiviert ist und die Implementierung das entsprechende Ersatzwort "carrot" besitzt, sollte der Text automatisch korrigiert werden.

{{EmbedLiveSample("Enable and disable autocorrection", "100%", "200")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`autocapitalize`](/de/docs/Web/HTML/Global_attributes/autocapitalize) globales HTML-Attribut
