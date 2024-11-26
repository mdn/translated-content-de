---
title: autocorrect
slug: Web/HTML/Global_attributes/autocorrect
l10n:
  sourceCommit: 9c88e407007af38ad6a5ec345ee399769904b02c
---

{{HTMLSidebar("Global_attributes")}}{{SeeCompatTable}}

Das **`autocorrect`** [globale Attribut](/de/docs/Web/HTML/Global_attributes) ist ein {{Glossary("Enumerated", "aufgezähltes")}} Attribut, das steuert, ob bearbeitbarer Text automatisch auf Rechtschreib- und/oder Interpunktionsfehler korrigiert wird.

Die Autokorrektur ist für bearbeitbare Textelemente relevant:

- {{htmlelement("input")}}-Elemente, mit Ausnahme von [`password`](/de/docs/Web/HTML/Element/input/password), [`email`](/de/docs/Web/HTML/Element/input/email) und [`url`](/de/docs/Web/HTML/Element/input/url), die keine Autokorrektur unterstützen.
- {{htmlelement("textarea")}}-Elemente.
- Jegliches Element, das das [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable)-Attribut gesetzt hat.

Bearbeitbare Elemente haben standardmäßig die Autokorrektur aktiviert, außer innerhalb eines {{htmlelement("form")}}-Elements, wo der Standardwert möglicherweise vom Formular vererbt wird.
Durch explizites Setzen des Attributs wird der Standardwert überschrieben.

## Wert

Mögliche Werte sind:

- `on` oder `""` (der leere String)

  - : Aktivieren der automatischen Korrektur von Rechtschreib- und Interpunktionsfehlern.

- `off`

  - : Deaktivieren der automatischen Korrektur von bearbeitbarem Text.

Die {{htmlelement("input")}}-Elementtypen, die die Autokorrektur nicht unterstützen, haben immer den `off`-Zustand: [`password`](/de/docs/Web/HTML/Element/input/password), [`email`](/de/docs/Web/HTML/Element/input/email) und [`url`](/de/docs/Web/HTML/Element/input/url).

Bei allen anderen bearbeitbaren Elementen wird durch Setzen eines anderen Wertes als der oben aufgeführten immer als `on` behandelt.
Der Standardwert für Elemente, die nicht in einem `<form>` verschachtelt sind, ist `on`.

Wenn sie in einem `<form>` verschachtelt sind, erben die folgenden Elemente ihren Standardwert für `autocorrect` vom Formular, wenn es gesetzt wurde: {{htmlelement("button")}}, {{htmlelement("fieldset")}}, {{htmlelement("input")}}, {{htmlelement("output")}}, {{htmlelement("select")}}, und {{htmlelement("textarea")}}.

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

Geben Sie ungültigen Text in die oben stehenden Felder für Frucht- und Gemüse-Text ein.
Wenn die Autokorrektur in Ihrem Browser aktiviert ist, sollte ein Tippfehler in einem Gemüsenamen automatisch korrigiert werden, nicht jedoch in einem Fruchtnamen.

### Aktivieren und Deaktivieren der Autokorrektur

Dieses Beispiel zeigt, wie Sie die Autokorrektur mit dem `autocorrect`-Attribut aktivieren und deaktivieren können.

#### HTML

Das HTML-Markup definiert einen {{htmlelement("button")}}, ein "name"-{{htmlelement("input")}}-Element vom [`type="text"`](/de/docs/Web/HTML/Element/input/text), ein "bio"-{{htmlelement("textarea")}}-Element und zwei {{htmlelement("label")}}-Elemente.

Das "username"-Element hat `autocorrect="off"` gesetzt, da die Autokorrektur eines Namens nervig wäre!
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

Der Code überprüft, ob `autocorrect` unterstützt wird, indem er überprüft, ob es im Prototyp vorhanden ist.
Wenn es nicht vorhanden ist, wird dies protokolliert.
Wenn es vorhanden ist, wird der Wert der `autocorrect`-Eigenschaft für jedes der Texteingabeelemente protokolliert.

Ein Klick-Handler wird für den Button hinzugefügt, der es Ihnen ermöglicht, den eingegebenen Text und das Protokoll zurückzusetzen.

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

Geben Sie ungültigen Text in die untenstehenden Felder für Namen und Biografie ein.
Wenn die Autokorrektur in Ihrem Browser aktiviert ist (siehe das Protokoll unten), sollte der Text in der "Biografie" automatisch korrigiert werden, nicht jedoch im "Name"-Feld.

{{EmbedLiveSample("Enabling and disabling autocorrection", "100%", "250")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
