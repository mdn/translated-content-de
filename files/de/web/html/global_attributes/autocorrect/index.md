---
title: autocorrect
slug: Web/HTML/Global_attributes/autocorrect
l10n:
  sourceCommit: 6b278eb98d94ec8d85f03f77aef7c5d08edcd88f
---

{{HTMLSidebar("Global_attributes")}}{{SeeCompatTable}}

Das **`autocorrect`** [globale Attribut](/de/docs/Web/HTML/Global_attributes) ist ein {{Glossary("Enumerated", "aufgezähltes")}} Attribut, das steuert, ob die automatische Korrektur von bearbeitbarem Text für Rechtschreib- und/oder Satzzeichenfehler aktiviert ist.

Das spezifische Verhalten der Autokorrektur, einschließlich der zu ersetzenden Wörter, hängt vom Benutzeragenten und den Diensten des zugrunde liegenden Geräts ab. Beispielsweise könnte ein Benutzeragent auf macOS auf [registrierte Ersetzungstexte und Satzzeichen](https://support.apple.com/en-vn/guide/mac-help/mh35735/mac) zurückgreifen. Andere Geräte und Browser können einen anderen Ansatz verwenden.

Die Autokorrektur ist relevant für bearbeitbare Textelemente:

- {{htmlelement("input")}}-Elemente, außer [`password`](/de/docs/Web/HTML/Element/input/password), [`email`](/de/docs/Web/HTML/Element/input/email) und [`url`](/de/docs/Web/HTML/Element/input/url), die keine Autokorrektur unterstützen.
- {{htmlelement("textarea")}}-Elemente.
- Jedes Element, das das Attribut [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) gesetzt hat.

Bearbeitbare Elemente haben standardmäßig die Autokorrektur aktiviert, außer innerhalb eines {{htmlelement("form")}}-Elements, wo der Standardwert möglicherweise vom Formular geerbt wird. Durch explizites Setzen des Attributs wird der Standard überschrieben.

## Wert

Mögliche Werte sind:

- `on` oder `""` (der leere String)

  - : Automatische Korrektur von Rechtschreib- und Satzzeichenfehlern aktivieren.

- `off`

  - : Automatische Korrektur von bearbeitbarem Text deaktivieren.

Die {{htmlelement("input")}}-Elementtypen, die keine Autokorrektur unterstützen, haben immer den `off`-Status: [`password`](/de/docs/Web/HTML/Element/input/password), [`email`](/de/docs/Web/HTML/Element/input/email) und [`url`](/de/docs/Web/HTML/Element/input/url).

Für alle anderen bearbeitbaren Elemente wird jede andere als die oben aufgeführten Werte immer als `on` behandelt. Der Standardwert für Elemente, die nicht innerhalb eines `<form>` verschachtelt sind, ist `on`.

Wenn sie in einem `<form>` verschachtelt sind, erben die folgenden Elemente den Standardwert von `autocorrect` vom Formular, wenn dieser gesetzt wurde: {{htmlelement("button")}}, {{htmlelement("fieldset")}}, {{htmlelement("input")}}, {{htmlelement("output")}}, {{htmlelement("select")}} und {{htmlelement("textarea")}}.

## Beispiele

### Einfaches Beispiel

Dieses Beispiel demonstriert die grundlegende Verwendung des `autocorrect`-Attributs.

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

Geben Sie ungültigen Text in die Textfelder für Früchte und Gemüse oben ein. Wenn die Autokorrektur in Ihrem Browser unterstützt wird und es eine passende Ersetzung durch das zugrunde liegende Gerät gibt, sollte ein Tippfehler im Gemüsenamen-Eingabefeld automatisch korrigiert werden. Tippfehler sollten im Fruchtnamenfeld nicht korrigiert werden.

### Aktivieren und Deaktivieren der Autokorrektur

Dieses Beispiel zeigt, wie Sie die Autokorrektur mit dem `autocorrect`-Attribut aktivieren und deaktivieren können.

#### HTML

Das HTML-Markup definiert einen {{htmlelement("button")}}, ein "name" {{htmlelement("input")}}-Element vom [`type="text"`](/de/docs/Web/HTML/Element/input/text), ein "bio" {{htmlelement("textarea")}}-Element und zwei {{htmlelement("label")}}-Elemente.

Das "username"-Element hat `autocorrect="off"` gesetzt, da die Autokorrektur eines Namens lästig wäre! Die Biografie gibt keinen Wert für `autocorrect` an, was bedeutet, dass es aktiviert ist (wir hätten jeden Wert außer `off` setzen können).

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

Der Code überprüft, ob `autocorrect` unterstützt wird, indem überprüft wird, ob es im Prototyp vorhanden ist. Wenn es nicht vorhanden ist, wird dies protokolliert. Wenn es vorhanden ist, wird der Wert der `autocorrect`-Eigenschaft für jedes der Texteingabeelemente protokolliert.

Ein Klick-Handler wird für den Button hinzugefügt, der es Ihnen ermöglicht, den eingegebenen Text und das Log zurückzusetzen.

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

Wenn die Autokorrektur von Ihrem Browser unterstützt wird, sollte der Logbereich unter den Eingaben "Biografie" und "Name" zeigen, dass sie für "Biografie"-Eingaben aktiviert ist, aber nicht für "Name"-Eingaben.

{{EmbedLiveSample("Enabling and disabling autocorrection", "100%", "250")}}

Geben Sie ungültigen Text in die Namens- und Biografie-Textfelder ein. Wenn das Gerät ein Ersatzwort für das eingegebene Wort hat, wird dieses verwendet, um den Text nur im "Biografie"-Eingabebereich automatisch zu korrigieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
