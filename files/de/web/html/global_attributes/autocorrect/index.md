---
title: Autokorrektur
slug: Web/HTML/Global_attributes/autocorrect
l10n:
  sourceCommit: 709d3a56661f895e5b0a67ff969e381d503ddd45
---

{{HTMLSidebar("Global_attributes")}}

Das **`autocorrect`** [globale Attribut](/de/docs/Web/HTML/Global_attributes) ist ein {{Glossary("Enumerated", "aufgezähltes")}} Attribut, das steuert, ob editierbarer Text automatisch auf Rechtschreib- und/oder Zeichensetzungsfehler korrigiert wird.

Die Autokorrektur ist relevant für editierbare Textelemente:

- {{htmlelement("input")}}-Elemente, außer [`password`](/de/docs/Web/HTML/Element/input/password), [`email`](/de/docs/Web/HTML/Element/input/email) und [`url`](/de/docs/Web/HTML/Element/input/url), die keine Autokorrektur unterstützen.
- {{htmlelement("textarea")}}-Elemente.
- Jedes Element mit dem [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) Attribut.

Editierbare Elemente haben standardmäßig die Autokorrektur aktiviert, außer innerhalb eines {{htmlelement("form")}}-Elements, wo der Standardwert möglicherweise vom Formular geerbt wird.
Das explizite Setzen des Attributs überschreibt den Standardwert.

## Wert

Mögliche Werte sind:

- `on` oder `""` (der leere String)

  - : Aktiviert die automatische Korrektur von Rechtschreib- und Zeichensetzungsfehlern.

- `off`

  - : Deaktiviert die automatische Korrektur von editierbarem Text.

Für die {{htmlelement("input")}}-Elementtypen, die keine Autokorrektur unterstützen, ist der Zustand immer `off`: [`password`](/de/docs/Web/HTML/Element/input/password), [`email`](/de/docs/Web/HTML/Element/input/email) und [`url`](/de/docs/Web/HTML/Element/input/url).

Bei allen anderen editierbaren Elementen wird das Setzen eines anderen Werts als den aufgeführten immer als `on` behandelt.
Der Standardwert für Elemente, die nicht innerhalb eines `<form>` verschachtelt sind, ist `on`.

Wenn in einem `<form>` verschachtelt, erben die folgenden Elemente ihren Standardwert für `autocorrect` vom Formular, wenn es gesetzt wurde: {{htmlelement("button")}}, {{htmlelement("fieldset")}}, {{htmlelement("input")}}, {{htmlelement("output")}}, {{htmlelement("select")}} und {{htmlelement("textarea")}}.

## Beispiele

### Grundlegendes Beispiel

Dieses Beispiel demonstriert die Grundverwendung des `autocorrect`-Attributs.

#### HTML

Wir fügen zwei Text-`<input>`-Elemente mit unterschiedlichen Werten für ihre `autocorrect`-Attribute hinzu:

```html
<label for="vegetable">A vegetable: </label>
<input id="vegetable" name="vegetable" type="text" autocorrect="on" />

<label for="fruit">A fruit: </label>
<input id="fruit" name="fruit" type="text" autocorrect="off" />
```

#### Ergebnisse

{{EmbedLiveSample("Grundlegendes Beispiel", "100%", "75")}}

Geben Sie ungültigen Text in die Textfelder für Obst und Gemüse oben ein.
Wenn die Autokorrektur in Ihrem Browser aktiviert ist, sollte ein Tippfehler in einem Gemüsenamen automatisch korrigiert werden, nicht jedoch in einem Obstnamen.

### Autokorrektur aktivieren und deaktivieren

Dieses Beispiel zeigt, wie Sie die Autokorrektur mit dem `autocorrect`-Attribut aktivieren und deaktivieren können.

#### HTML

Das HTML-Markup definiert ein {{htmlelement("button")}}, ein "Name"-{{htmlelement("input")}}-Element vom [`type="text"`](/de/docs/Web/HTML/Element/input/text), ein "Bio"-{{htmlelement("textarea")}}-Element und zwei {{htmlelement("label")}}-Elemente.

Das "Benutzername"-Feld hat `autocorrect="off"` gesetzt, da die Autokorrektur eines Namens störend wäre!
Für die Bio ist kein Wert für `autocorrect` angegeben, was bedeutet, dass es aktiviert ist (wir hätten jeden anderen Wert außer `off` setzen können).

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

Der Code überprüft, ob `autocorrect` unterstützt wird, indem geprüft wird, ob es auf dem Prototyp vorhanden ist.
Wenn es nicht vorhanden ist, wird dies im Log festgehalten.
Wenn es vorhanden ist, wird der Wert der `autocorrect`-Eigenschaft für jedes der Texteingabeelemente protokolliert.

Ein Click-Handler wird für die Schaltfläche hinzugefügt, der es Ihnen ermöglicht, den eingegebenen Text und das Log zurückzusetzen.

```js
const resetButton = document.querySelector("#reset");
const userNameElement = document.querySelector("#username");
const bioElement = document.querySelector("#bio");

if (!("autocorrect" in HTMLElement.prototype)) {
  log("autocorrect not supported");
} else {
  log(`userNameElement.autocorrect: ${userNameElement.autocorrect}`);
  log(`userNameElement.autocorrect: ${bioElement.autocorrect}`);
}

resetButton.addEventListener("click", (e) => {
  userNameElement.value = "";
  bioElement.value = "";
});
```

#### Ergebnisse

Geben Sie ungültigen Text in die Eingabefelder für Name und Biografie unten ein.
Wenn die Autokorrektur in Ihrem Browser aktiviert ist (siehe das Log unten), sollte der Text in der "Biographie" automatisch korrigiert werden, nicht jedoch im Feld "Name".

{{EmbedLiveSample("Autokorrektur aktivieren und deaktivieren", "100%", "250")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
