---
title: autocorrect
slug: Web/HTML/Global_attributes/autocorrect
l10n:
  sourceCommit: 1ea99c8e68a85aac13ba846bbe95a6f686771221
---

{{HTMLSidebar("Global_attributes")}}{{SeeCompatTable}}

Das **`autocorrect`** [globale Attribut](/de/docs/Web/HTML/Global_attributes) ist ein {{Glossary("Enumerated", "aufgezähltes")}} Attribut, das steuert, ob bearbeitbarer Text automatisch auf Rechtschreib- und/oder Zeichensetzungsfehler korrigiert wird.

Autokorrektur ist relevant für bearbeitbare Textelemente:

- {{htmlelement("input")}}-Elemente, außer [`password`](/de/docs/Web/HTML/Element/input/password), [`email`](/de/docs/Web/HTML/Element/input/email) und [`url`](/de/docs/Web/HTML/Element/input/url), die keine Autokorrektur unterstützen.
- {{htmlelement("textarea")}}-Elemente.
- Jedes Element, das das [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable)-Attribut gesetzt hat.

Bearbeitbare Elemente haben standardmäßig die Autokorrektur aktiviert, außer innerhalb eines {{htmlelement("form")}}-Elements, wo der Standardwert möglicherweise vom Formular geerbt wird.
Das explizite Setzen des Attributs überschreibt den Standardwert.

## Wert

Mögliche Werte sind:

- `on` oder `""` (der leere String)

  - : Automatische Korrektur von Rechtschreib- und Zeichensetzungsfehlern aktivieren.

- `off`

  - : Automatische Korrektur von bearbeitbarem Text deaktivieren.

Die {{htmlelement("input")}}-Elementtypen, die keine Autokorrektur unterstützen, haben immer den `off`-Status: [`password`](/de/docs/Web/HTML/Element/input/password), [`email`](/de/docs/Web/HTML/Element/input/email) und [`url`](/de/docs/Web/HTML/Element/input/url).

Für alle anderen bearbeitbaren Elemente wird das Setzen eines anderen als der oben aufgeführten Werte immer als `on` behandelt.
Der Standardwert für Elemente, die nicht in einem `<form>` verschachtelt sind, ist `on`.

Wenn sie in einem `<form>` verschachtelt sind, erben die folgenden Elemente ihren Standardwert von `autocorrect` vom Formular, falls es gesetzt wurde: {{htmlelement("button")}}, {{htmlelement("fieldset")}}, {{htmlelement("input")}}, {{htmlelement("output")}}, {{htmlelement("select")}} und {{htmlelement("textarea")}}.

## Beispiele

### Einfaches Beispiel

Dieses Beispiel zeigt die grundlegende Verwendung des `autocorrect`-Attributs.

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

Geben Sie ungültigen Text in die Textfelder für Früchte und Gemüse oben ein.
Wenn die Autokorrektur in Ihrem Browser aktiviert ist, sollte ein Tippfehler im Namen eines Gemüses automatisch korrigiert werden, nicht aber bei einem Fruchtnamen.

### Aktivieren und Deaktivieren der Autokorrektur

Dieses Beispiel zeigt, wie Sie die Autokorrektur mit dem `autocorrect`-Attribut aktivieren und deaktivieren können.

#### HTML

Der HTML-Code definiert einen {{htmlelement("button")}}, ein "name" {{htmlelement("input")}}-Element vom [`type="text"`](/de/docs/Web/HTML/Element/input/text), ein "bio" {{htmlelement("textarea")}}-Element und zwei {{htmlelement("label")}}-Elemente.

Das "username"-Element hat `autocorrect="off"` gesetzt, weil die Autokorrektur eines Namens ärgerlich wäre!
Die Bio hat keinen Wert für `autocorrect` angegeben, was bedeutet, dass es aktiviert ist (wir hätten jeden anderen Wert als `off` setzen können).

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

Der Code überprüft, ob das `autocorrect` unterstützt wird, indem er prüft, ob es im Prototypen vorhanden ist.
Wenn es nicht vorhanden ist, wird dies protokolliert.
Wenn es vorhanden ist, wird der Wert der `autocorrect`-Eigenschaft für jedes der Texteingabeelemente protokolliert.

Ein Klick-Handler wird für den Button hinzugefügt, damit Sie den eingegebenen Text und das Protokoll zurücksetzen können.

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

Geben Sie ungültigen Text in die Textfelder für Namen und Biografie unten ein.
Wenn die Autokorrektur in Ihrem Browser aktiviert ist (siehe das Protokoll unten), sollte der Text in der "Biography" automatisch korrigiert werden, nicht jedoch im "Name"-Feld.

{{EmbedLiveSample("Enabling and disabling autocorrection", "100%", "250")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
