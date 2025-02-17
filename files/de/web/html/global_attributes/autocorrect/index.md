---
title: autocorrect
slug: Web/HTML/Global_attributes/autocorrect
l10n:
  sourceCommit: 7877e93317ff8ec7ec660eddcb4b77ae996afaa1
---

{{HTMLSidebar("Global_attributes")}}

Das **`autocorrect`**-[globale Attribut](/de/docs/Web/HTML/Global_attributes) ist ein {{Glossary("Enumerated", "aufgezähltes Attribut")}}, das steuert, ob die automatische Korrektur von bearbeitbarem Text für Rechtschreib- und/oder Interpunktionsfehler aktiviert ist.

Das spezifische Verhalten der Autokorrektur, einschließlich der Worte, die ersetzt werden, hängt vom Benutzer-Agent und den Diensten ab, die das zugrunde liegende Gerät bereitstellt.
Zum Beispiel könnte ein Benutzer-Agent auf macOS auf [registrierten Ersatztext und Satzzeichen](https://support.apple.com/en-vn/guide/mac-help/mh35735/mac) zurückgreifen.
Andere Geräte und Browser können einen anderen Ansatz verwenden.

Die Autokorrektur ist relevant für bearbeitbare Textelemente:

- {{htmlelement("input")}}-Elemente, mit Ausnahme von [`password`](/de/docs/Web/HTML/Element/input/password), [`email`](/de/docs/Web/HTML/Element/input/email) und [`url`](/de/docs/Web/HTML/Element/input/url), die keine Autokorrektur unterstützen.
- {{htmlelement("textarea")}}-Elemente.
- Jedes Element, das das [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable)-Attribut gesetzt hat.

Bearbeitbare Elemente haben standardmäßig die Autokorrektur aktiviert, außer innerhalb eines {{htmlelement("form")}}-Elements, wo der Standardwert möglicherweise vom Formular geerbt wird.
Das explizite Setzen des Attributs überschreibt den Standardwert.

## Wert

Mögliche Werte sind:

- `on` oder `""` (die leere Zeichenkette)

  - : Aktiviert die automatische Korrektur von Rechtschreib- und Interpunktionsfehlern.

- `off`

  - : Deaktiviert die automatische Korrektur von bearbeitbarem Text.

Die Typen des {{htmlelement("input")}}-Elements, die die Autokorrektur nicht unterstützen, haben immer den Zustand `off`: [`password`](/de/docs/Web/HTML/Element/input/password), [`email`](/de/docs/Web/HTML/Element/input/email) und [`url`](/de/docs/Web/HTML/Element/input/url).

Für alle anderen bearbeitbaren Elemente wird das Festlegen eines anderen Wertes als der oben aufgeführten immer als `on` behandelt.
Der Standardwert für Elemente, die sich nicht innerhalb eines `<form>` befinden, ist `on`.

Wenn sich ein Element in einem `<form>` befindet, erben folgende Elemente ihren Standardwert für `autocorrect` vom Formular, falls dieser gesetzt wurde: {{htmlelement("button")}}, {{htmlelement("fieldset")}}, {{htmlelement("input")}}, {{htmlelement("output")}}, {{htmlelement("select")}} und {{htmlelement("textarea")}}.

## Beispiele

### Einfaches Beispiel

Dieses Beispiel zeigt die grundlegende Verwendung des `autocorrect`-Attributs.

#### HTML

Wir fügen zwei Text-`<input>`-Elemente mit unterschiedlichen Werten für ihre `autocorrect`-Attribute ein:

```html
<label for="vegetable">A vegetable: </label>
<input id="vegetable" name="vegetable" type="text" autocorrect="on" />

<label for="fruit">A fruit: </label>
<input id="fruit" name="fruit" type="text" autocorrect="off" />
```

#### Ergebnisse

{{EmbedLiveSample("Basic example", "100%", "75")}}

Geben Sie ungültigen Text in die Eingabefelder für Obst und Gemüse oben ein.
Wenn die Autokorrektur von Ihrem Browser unterstützt wird und ein entsprechender Ersatz durch das zugrunde liegende Gerät bereitgestellt wird, sollte ein Tippfehler in einer Gemüseeingabe automatisch korrigiert werden.
Tippfehler sollten nicht im Eingabefeld für Obstnamen korrigiert werden.

### Aktivieren und Deaktivieren der Autokorrektur

In diesem Beispiel wird gezeigt, wie man die Autokorrektur mit dem `autocorrect`-Attribut ein- und ausschalten kann.

#### HTML

Das HTML-Markup definiert einen {{htmlelement("button")}}, ein "Name"-{{htmlelement("input")}}-Element des Typs [`type="text"`](/de/docs/Web/HTML/Element/input/text), ein "Bio"-{{htmlelement("textarea")}}-Element und zwei {{htmlelement("label")}}-Elemente.

Das "username"-Element hat `autocorrect="off"` gesetzt, da die Autokorrektur eines Namens störend wäre!
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
Falls es nicht vorhanden ist, wird dies protokolliert.
Falls es vorhanden ist, wird der Wert der `autocorrect`-Eigenschaft für jedes Texteingabeelement protokolliert.

Ein Klick-Handler wird für den Button hinzugefügt, mit dem Sie den eingegebenen Text und das Protokoll zurücksetzen können.

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

Wenn die Autokorrektur von Ihrem Browser unterstützt wird, sollte der Protokollbereich unter den Eingabefeldern "Biografie" und "Name" anzeigen, dass sie für Eingaben unter "Biografie" aktiviert, aber für Eingaben unter "Name" deaktiviert ist.

{{EmbedLiveSample("Enabling and disabling autocorrection", "100%", "250")}}

Geben Sie ungültigen Text in die Eingabefelder für Namen und Biografie ein.
Falls das Gerät einen Ersatz für das eingegebene Wort hat, wird dieser verwendet, um den Text nur im Eingabefeld "Biografie" automatisch zu korrigieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Global_attributes).
- [`spellcheck`](/de/docs/Web/HTML/Global_attributes/spellcheck).
