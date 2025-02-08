---
title: "HTMLElement: autocorrect-Eigenschaft"
short-title: autocorrect
slug: Web/API/HTMLElement/autocorrect
l10n:
  sourceCommit: 01e8b5077df6d79e52f2521dfbe734e0923d1fc4
---

{{APIRef("HTML DOM")}}

Die **`autocorrect`**-Eigenschaft der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle steuert, ob die Rechtschreib- und/oder Zeichensetzungsfehler in bearbeitbarem Text automatisch korrigiert werden.

Das spezifische Verhalten der automatischen Korrektur, einschließlich der ersetzten Wörter, hängt vom Benutzeragenten und den Diensten des zugrunde liegenden Geräts ab.
Zum Beispiel könnte ein Benutzeragent auf macOS auf [registrierten Ersatztext und Zeichensetzung](https://support.apple.com/en-vn/guide/mac-help/mh35735/mac) zurückgreifen.
Andere Geräte und Browser können dabei unterschiedliche Ansätze verwenden.

Die Eigenschaft spiegelt den Wert des [`autocorrect`](/de/docs/Web/HTML/Global_attributes/autocorrect)-HTML-Globalattributs wider.

## Wert

`true`, wenn die automatische Korrektur für das Element aktiviert ist, und `false`, wenn dies nicht der Fall ist.

## Beispiele

### Automatische Korrektur aktivieren und deaktivieren

Dieses Beispiel zeigt, wie Sie die automatische Korrektur aktivieren und deaktivieren können.

#### HTML

Das HTML-Markup definiert eine Umschalttaste (Toggle-Button) und ein {{htmlelement("input")}}-Element vom [`type="search"`](/de/docs/Web/HTML/Element/input/search).
Beachten Sie, dass, wenn die automatische Korrektur unterstützt wird, sie standardmäßig aktiviert ist.

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

Der Code prüft zuerst, ob die `autocorrect`-Eigenschaft unterstützt wird, indem geprüft wird, ob sie im `HTMLElement`-Prototyp vorhanden ist.
Wenn sie vorhanden ist, wird ein Klick-Handler hinzugefügt, der Ihnen das Aktivieren und Deaktivieren des Wertes erlaubt.
Falls nicht, verbirgt die Benutzeroberfläche die interaktiven Elemente und protokolliert, dass `autocorrect` nicht unterstützt wird.

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

Aktivieren Sie die Schaltfläche, um den Wert der automatischen Korrektur umzuschalten.
Geben Sie falschen Text in das Textfeld ein, beispielsweise "Carot".
Wenn die automatische Korrektur aktiviert ist und die Implementierung das passende Ersatzwort "carrot" enthält, sollte der Text automatisch korrigiert werden.

{{EmbedLiveSample("Enable and disable autocorrection", "100%", "200")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`autocapitalize`](/de/docs/Web/HTML/Global_attributes/autocapitalize)-HTML-Globalattribut
