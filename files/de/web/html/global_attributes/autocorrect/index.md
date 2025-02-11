---
title: autocorrect
slug: Web/HTML/Global_attributes/autocorrect
l10n:
  sourceCommit: a7444882eb1b18918f3c924d83eb3c78f245643a
---

{{HTMLSidebar("Global_attributes")}}

Das **`autocorrect`** [globale Attribut](/de/docs/Web/HTML/Global_attributes) ist ein {{Glossary("Enumerated", "aufzählbares Attribut")}}, das steuert, ob die Autokorrektur für bearbeitbaren Text bei Rechtschreib- und/oder Zeichensetzungsfehlern aktiviert ist.

Das spezifische Verhalten der Autokorrektur, einschließlich der ersetzten Wörter, hängt vom User-Agent und den Diensten des zugrunde liegenden Geräts ab.
Zum Beispiel könnte ein User-Agent unter macOS auf [registrierten Ersatztext und Zeichensetzung](https://support.apple.com/en-vn/guide/mac-help/mh35735/mac) zurückgreifen.
Andere Geräte und Browser könnten einen anderen Ansatz verwenden.

Autokorrektur ist relevant für bearbeitbare Textelemente:

- {{htmlelement("input")}}-Elemente, mit Ausnahme von [`password`](/de/docs/Web/HTML/Element/input/password), [`email`](/de/docs/Web/HTML/Element/input/email) und [`url`](/de/docs/Web/HTML/Element/input/url), welche die Autokorrektur nicht unterstützen.
- {{htmlelement("textarea")}}-Elemente.
- Jegliche Elemente, die das Attribut [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) gesetzt haben.

Bearbeitbare Elemente haben standardmäßig die Autokorrektur aktiviert, außer innerhalb eines {{htmlelement("form")}}-Elements, wo der Standardwert möglicherweise vom Formular vererbt wird.
Das explizite Setzen des Attributs überschreibt den Standard.

## Wert

Die möglichen Werte sind:

- `on` oder `""` (die leere Zeichenkette)

  - : Aktiviert die automatische Korrektur von Rechtschreib- und Zeichensetzungsfehlern.

- `off`

  - : Deaktiviert die automatische Korrektur von bearbeitbarem Text.

Die `autocorrect`-Eigenschaft bei {{htmlelement("input")}}-Elementtypen, die keine Autokorrektur unterstützen, ist immer auf `off` gesetzt: [`password`](/de/docs/Web/HTML/Element/input/password), [`email`](/de/docs/Web/HTML/Element/input/email) und [`url`](/de/docs/Web/HTML/Element/input/url).

Für alle anderen bearbeitbaren Elemente wird jeder Wert, der von den oben aufgeführten abweicht, stets als `on` behandelt.
Der Standardwert für Elemente, die nicht in einem `<form>` verschachtelt sind, ist `on`.

Wenn sie sich in einem `<form>` befinden, übernehmen die folgenden Elemente den Standardwert von `autocorrect` des Formulars, falls dieser gesetzt ist: {{htmlelement("button")}}, {{htmlelement("fieldset")}}, {{htmlelement("input")}}, {{htmlelement("output")}}, {{htmlelement("select")}} und {{htmlelement("textarea")}}.

## Beispiele

### Einfaches Beispiel

Dieses Beispiel demonstriert die grundlegende Verwendung des Attributs `autocorrect`.

#### HTML

Wir fügen zwei `<input>`-Textfelder mit unterschiedlichen Werten für ihre `autocorrect`-Attribute ein:

```html
<label for="vegetable">A vegetable: </label>
<input id="vegetable" name="vegetable" type="text" autocorrect="on" />

<label for="fruit">A fruit: </label>
<input id="fruit" name="fruit" type="text" autocorrect="off" />
```

#### Ergebnisse

{{EmbedLiveSample("Basic example", "100%", "75")}}

Geben Sie falschen Text in die Eingabefelder für Früchte und Gemüse oben ein.
Falls Autokorrektur auf Ihrem Browser unterstützt wird und es eine passende Ersetzung durch das zugrunde liegende Gerät gibt, sollte ein Tippfehler im Eingabefeld für Gemüse automatisch korrigiert werden.
Tippfehler sollten im Eingabefeld für Früchte nicht korrigiert werden.

### Aktivieren und Deaktivieren der Autokorrektur

Dieses Beispiel zeigt, wie Sie die Autokorrektur mithilfe des Attributs `autocorrect` aktivieren und deaktivieren können.

#### HTML

Das HTML-Markup definiert einen {{htmlelement("button")}}, ein "Name" {{htmlelement("input")}}-Element vom Typ [`type="text"`](/de/docs/Web/HTML/Element/input/text), ein "Bio" {{htmlelement("textarea")}}-Element und zwei {{htmlelement("label")}}-Elemente.

Das Element "username" hat `autocorrect="off"` gesetzt, da die automatische Korrektur eines Namens störend wäre!
Die Bio gibt keinen Wert für `autocorrect` an, was bedeutet, dass es aktiviert ist (wir hätten jeden Wert außer `off` setzen können).

```html
<button id="reset">Reset</button>
<label for="username">Name: </label>
<input id="username" name="username" type="text" autocorrect="off" />
<label for="bio">Biography: </label>
<textarea id="bio" name="bio"></textarea>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 75px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}

button,
input,
textarea {
  display: block;
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

Der Code überprüft, ob `autocorrect` unterstützt wird, indem geprüft wird, ob es im Prototyp vorhanden ist.
Wenn es nicht vorhanden ist, wird dies protokolliert.
Falls es vorhanden ist, wird der Wert der `autocorrect`-Eigenschaft für jedes Texteingabeelement protokolliert.

Ein Klick-Handler wird für den Button hinzugefügt, der es ermöglicht, den eingegebenen Text und die Protokolle zurückzusetzen.

```js
const resetButton = document.querySelector("#reset");
const userNameElement = document.querySelector("#username");
const bioElement = document.querySelector("#bio");

if (!("autocorrect" in HTMLElement.prototype)) {
  log("autocorrect not supported");
} else {
  log(`userNameElement.autocorrect: ${userNameElement.autocorrect}`);
  log(`bioElement.autocorrect: ${bioElement.autocorrect}`);
}

resetButton.addEventListener("click", (e) => {
  userNameElement.value = "";
  bioElement.value = "";
});
```

#### Ergebnisse

Falls die Autokorrektur von Ihrem Browser unterstützt wird, sollte der Log-Bereich unterhalb der "Biography"- und "Name"-Eingabefelder zeigen, dass sie für "Biography"-Eingaben aktiviert ist, jedoch nicht für "Name"-Eingaben.

{{EmbedLiveSample("Enabling and disabling autocorrection", "100%", "250")}}

Geben Sie falschen Text in die Eingabefelder für Name und Biografie ein.
Falls das Gerät eine Ersetzung für das eingegebene Wort hat, wird diese verwendet, um den Text im Eingabefeld "Biography" automatisch zu korrigieren (nur dort).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
