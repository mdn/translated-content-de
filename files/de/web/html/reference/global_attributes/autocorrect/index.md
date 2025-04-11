---
title: autocorrect
slug: Web/HTML/Reference/Global_attributes/autocorrect
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar("Global_attributes")}}

Das **`autocorrect`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) ist ein {{Glossary("Enumerated", "enumeriertes")}} Attribut, das steuert, ob die automatische Korrektur von bearbeitbarem Text für Rechtschreib- und/oder Zeichensetzungsfehler aktiviert ist.

Das spezifische Verhalten der automatischen Korrektur, einschließlich welcher Wörter ersetzt werden, hängt vom Benutzeragenten und den Diensten des zugrunde liegenden Geräts ab. Zum Beispiel könnte auf macOS ein Benutzeragent auf [registrierte Ersetzungstexte und Zeichensetzung](https://support.apple.com/en-vn/guide/mac-help/mh35735/mac) angewiesen sein. Andere Geräte und Browser könnten einen anderen Ansatz verwenden.

Die automatische Korrektur ist für bearbeitbare Textelemente relevant:

- {{htmlelement("input")}}-Elemente, außer für [`password`](/de/docs/Web/HTML/Reference/Elements/input/password), [`email`](/de/docs/Web/HTML/Reference/Elements/input/email) und [`url`](/de/docs/Web/HTML/Reference/Elements/input/url), die keine automatische Korrektur unterstützen.
- {{htmlelement("textarea")}}-Elemente.
- Jedes Element, das das [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)-Attribut gesetzt hat.

Bearbeitbare Elemente haben standardmäßig die automatische Korrektur aktiviert, außer innerhalb eines {{htmlelement("form")}}-Elements, wo der Standardwert möglicherweise vom Formular geerbt wird. Das explizite Setzen des Attributs überschreibt den Standard.

## Wert

Mögliche Werte sind:

- `on` oder `""` (der leere String)

  - : Aktiviert die automatische Korrektur von Rechtschreib- und Zeichensetzungsfehlern.

- `off`

  - : Deaktiviert die automatische Korrektur von bearbeitbarem Text.

Die {{htmlelement("input")}}-Elementtypen, die keine automatische Korrektur unterstützen, haben immer den `off`-Status: [`password`](/de/docs/Web/HTML/Reference/Elements/input/password), [`email`](/de/docs/Web/HTML/Reference/Elements/input/email) und [`url`](/de/docs/Web/HTML/Reference/Elements/input/url).

Für alle anderen bearbeitbaren Elemente wird jede andere als die oben aufgeführten Werteinstellung immer als `on` behandelt. Der Standardwert für Elemente, die nicht in einem `<form>` verschachtelt sind, ist `on`.

Wenn sie in einem `<form>` verschachtelt sind, erben die folgenden Elemente ihren Standardwert von `autocorrect` vom Formular, wenn dieser gesetzt wurde: {{htmlelement("button")}}, {{htmlelement("fieldset")}}, {{htmlelement("input")}}, {{htmlelement("output")}}, {{htmlelement("select")}} und {{htmlelement("textarea")}}.

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

Geben Sie ungültigen Text in die Eingabefelder für Früchte und Gemüse oben ein. Wenn die automatische Korrektur in Ihrem Browser unterstützt wird und es eine passende Ersetzung durch das zugrunde liegende Gerät gibt, sollte ein Tippfehler im Gemüse-Eingabefeld automatisch korrigiert werden. Tippfehler sollten im Früchte-Eingabefeld nicht korrigiert werden.

### Aktivieren und Deaktivieren der automatischen Korrektur

Dieses Beispiel zeigt, wie Sie die automatische Korrektur mit dem `autocorrect`-Attribut aktivieren und deaktivieren können.

#### HTML

Das HTML-Markup definiert ein {{htmlelement("button")}}, ein "name"-{{htmlelement("input")}}-Element vom [`type="text"`](/de/docs/Web/HTML/Reference/Elements/input/text), ein "bio"-{{htmlelement("textarea")}}-Element und zwei {{htmlelement("label")}}-Elemente.

Das "username"-Element hat `autocorrect="off"` gesetzt, da die automatische Korrektur eines Namens störend wäre! Die Bio gibt keinen Wert für `autocorrect` an, was bedeutet, dass sie aktiviert ist (wir hätten jeden Wert außer `off` setzen können).

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

Der Code prüft, ob das `autocorrect` unterstützt wird, indem er checkt, ob es im Prototyp vorhanden ist. Wenn es nicht vorhanden ist, wird diese Tatsache protokolliert. Wenn es vorhanden ist, wird der Wert der `autocorrect`-Eigenschaft für jedes der Texteingabeelemente protokolliert.

Ein Klick-Handler wird dem Button hinzugefügt, der es Ihnen ermöglicht, den eingegebenen Text und das Protokoll zurückzusetzen.

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

Wenn die automatische Korrektur von Ihrem Browser unterstützt wird, sollte der Protokollbereich unter den Eingabefeldern "Biografie" und "Name" anzeigen, dass sie für die "Biografie"-Eingabefelder aktiviert ist, aber nicht für die "Name"-Eingabefelder.

{{EmbedLiveSample("Enabling and disabling autocorrection", "100%", "250")}}

Geben Sie ungültigen Text in die Namens- und Biografie-Texteingabefelder ein. Wenn das Gerät einen Ersatz für das eingegebene Wort hat, wird dieser verwendet, um den Text nur im "Biografie"-Eingabefeld automatisch zu korrigieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).
- [`spellcheck`](/de/docs/Web/HTML/Reference/Global_attributes/spellcheck).
