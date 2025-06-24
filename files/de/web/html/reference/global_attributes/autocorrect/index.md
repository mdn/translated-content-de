---
title: HTML autocorrect globales Attribut
short-title: autocorrect
slug: Web/HTML/Reference/Global_attributes/autocorrect
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{HTMLSidebar("Global_attributes")}}

Das **`autocorrect`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) ist ein {{Glossary("Enumerated", "aufzählbares")}} Attribut, das steuert, ob die Autokorrektur von bearbeitbarem Text für Rechtschreib- und/oder Interpunktionsfehler aktiviert ist.

Das spezifische Verhalten der Autokorrektur, einschließlich der Ersetzung bestimmter Wörter, hängt vom Benutzeragenten und den vom zugrunde liegenden Gerät bereitgestellten Diensten ab. Zum Beispiel könnte ein Benutzeragent auf macOS auf [registrierten Ersetzungstext und Interpunktion](https://support.apple.com/en-vn/guide/mac-help/mh35735/mac) zurückgreifen. Andere Geräte und Browser können einen anderen Ansatz verwenden.

Autokorrektur ist relevant für bearbeitbare Textelemente:

- {{htmlelement("input")}}-Elemente, außer [`password`](/de/docs/Web/HTML/Reference/Elements/input/password), [`email`](/de/docs/Web/HTML/Reference/Elements/input/email) und [`url`](/de/docs/Web/HTML/Reference/Elements/input/url), die keine Autokorrektur unterstützen.
- {{htmlelement("textarea")}}-Elemente.
- Jedes Element, das das Attribut [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) gesetzt hat.

Bearbeitbare Elemente haben standardmäßig die Autokorrektur aktiviert, außer innerhalb eines {{htmlelement("form")}}-Elements, wo der Standardwert möglicherweise vom Formular geerbt wird. Das explizite Setzen des Attributs überschreibt den Standard.

## Wert

Mögliche Werte sind:

- `on` oder `""` (die leere Zeichenfolge)

  - : Aktiviert die automatische Korrektur von Rechtschreib- und Interpunktionsfehlern.

- `off`
  - : Deaktiviert die automatische Korrektur von bearbeitbarem Text.

Die {{htmlelement("input")}}-Elementtypen, die keine Autokorrektur unterstützen, haben immer den Zustand `off`: [`password`](/de/docs/Web/HTML/Reference/Elements/input/password), [`email`](/de/docs/Web/HTML/Reference/Elements/input/email) und [`url`](/de/docs/Web/HTML/Reference/Elements/input/url).

Für alle anderen bearbeitbaren Elemente wird jede andere als die oben aufgeführten Werte immer als `on` behandelt. Der Standardwert für Elemente, die nicht in einem `<form>` verschachtelt sind, ist `on`.

Wenn sie in ein `<form>` verschachtelt sind, erben die folgenden Elemente ihren Standardwert von `autocorrect` vom Formular, wenn es gesetzt wurde: {{htmlelement("button")}}, {{htmlelement("fieldset")}}, {{htmlelement("input")}}, {{htmlelement("output")}}, {{htmlelement("select")}} und {{htmlelement("textarea")}}.

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

Geben Sie ungültigen Text in die oben aufgeführten Eingabefelder für Obst und Gemüse ein. Wenn die automatische Korrektur in Ihrem Browser unterstützt wird und es eine geeignete Ersetzung durch das zugrunde liegende Gerät gibt, sollte ein Tippfehler in einem Gemüsenamen automatisch korrigiert werden. Tippfehler sollten im Feld für den Obstnamen nicht korrigiert werden.

### Aktivieren und Deaktivieren der Autokorrektur

Dieses Beispiel zeigt, wie Sie die Autokorrektur mit dem `autocorrect`-Attribut aktivieren und deaktivieren können.

#### HTML

Das HTML-Markup definiert einen {{htmlelement("button")}}, ein "name" {{htmlelement("input")}}-Element vom [`type="text"`](/de/docs/Web/HTML/Reference/Elements/input/text), ein "bio" {{htmlelement("textarea")}}-Element und zwei {{htmlelement("label")}}-Elemente.

Das "username"-Element hat `autocorrect="off"` gesetzt, da das automatische Korrigieren eines Namens störend wäre! Die Biografie gibt keinen Wert für `autocorrect` an, was bedeutet, dass sie aktiviert ist (wir könnten jeden Wert außer `off` gesetzt haben).

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

Der Code überprüft, ob `autocorrect` unterstützt wird, indem er prüft, ob es im Prototyp vorhanden ist. Falls es nicht vorhanden ist, wird dies protokolliert. Falls es vorhanden ist, wird der Wert der `autocorrect`-Eigenschaft für jedes der Texteintrags-Elemente protokolliert.

Ein Klick-Handler wird für den Button hinzugefügt, der es Ihnen ermöglicht, den eingegebenen Text und die Protokollierung zurückzusetzen.

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

Falls die Autokorrektur von Ihrem Browser unterstützt wird, sollte der Protokollbereich unter den Eingabefeldern "Biografie" und "Name" zeigen, dass sie für die "Biografie"-Eingaben, aber nicht für die "Name"-Eingaben aktiviert ist.

{{EmbedLiveSample("Enabling and disabling autocorrection", "100%", "250")}}

Geben Sie ungültigen Text in die Eingabefelder für Name und Biografie ein. Wenn das Gerät einen Ersatz für das eingegebene Wort hat, wird dieser verwendet, um den Text nur im "Biografie"-Eingabefeld zu korrigieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).
- [`spellcheck`](/de/docs/Web/HTML/Reference/Global_attributes/spellcheck).
