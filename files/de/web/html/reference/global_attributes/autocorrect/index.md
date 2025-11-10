---
title: HTML `autocorrect` globales Attribut
short-title: autocorrect
slug: Web/HTML/Reference/Global_attributes/autocorrect
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`autocorrect`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) ist ein {{Glossary("Enumerated", "aufgezähltes")}} Attribut, das steuert, ob die Autokorrektur für bearbeitbaren Text bei Rechtschreib- und/oder Zeichensetzungsfehlern aktiviert ist.

Das spezifische Verhalten der Autokorrektur, einschließlich der ersetzten Wörter, hängt vom Benutzeragenten und den Diensten des zugrunde liegenden Gerätes ab.
Auf macOS könnte beispielsweise ein Benutzeragent auf [registrierten Ersetzungstext und Zeichensetzung](https://support.apple.com/en-vn/guide/mac-help/mh35735/mac) zurückgreifen.
Andere Geräte und Browser können einen anderen Ansatz verwenden.

Die Autokorrektur ist relevant für bearbeitbare Textelemente:

- {{htmlelement("input")}}-Elemente, mit Ausnahme von [`password`](/de/docs/Web/HTML/Reference/Elements/input/password), [`email`](/de/docs/Web/HTML/Reference/Elements/input/email) und [`url`](/de/docs/Web/HTML/Reference/Elements/input/url), die keine Autokorrektur unterstützen.
- {{htmlelement("textarea")}}-Elemente.
- Jedes Element, das das [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) Attribut gesetzt hat.

Bearbeitbare Elemente haben standardmäßig die Autokorrektur aktiviert, außer in einem {{htmlelement("form")}}-Element, wo der Standardwert möglicherweise vom Formular geerbt wird.
Durch explizites Setzen des Attributs wird der Standardwert überschrieben.

## Wert

Mögliche Werte sind:

- `on` oder `""` (die leere Zeichenkette)
  - : Aktiviert die automatische Korrektur von Rechtschreib- und Zeichensetzungsfehlern.

- `off`
  - : Deaktiviert die automatische Korrektur für bearbeitbaren Text.

Die {{htmlelement("input")}}-Elementtypen, die keine Autokorrektur unterstützen, haben immer den `off`-Status: [`password`](/de/docs/Web/HTML/Reference/Elements/input/password), [`email`](/de/docs/Web/HTML/Reference/Elements/input/email) und [`url`](/de/docs/Web/HTML/Reference/Elements/input/url).

Für alle anderen bearbeitbaren Elemente wird jede andere als die oben aufgeführten Werteinstellung immer als `on` behandelt.
Der Standardwert für Elemente, die nicht in einem `<form>` verschachtelt sind, ist `on`.

Wenn sie in einem `<form>` verschachtelt sind, erben die folgenden Elemente ihren Standardwert von `autocorrect` vom Formular, falls es gesetzt ist: {{htmlelement("button")}}, {{htmlelement("fieldset")}}, {{htmlelement("input")}}, {{htmlelement("output")}}, {{htmlelement("select")}} und {{htmlelement("textarea")}}.

## Beispiele

### Grundbeispiel

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

Geben Sie in die obigen Textfelder für Obst und Gemüse ungültigen Text ein.
Wenn die Autokorrektur in Ihrem Browser unterstützt wird und das zugrunde liegende Gerät eine geeignete Ersetzung bereitstellt, sollte ein Tippfehler in einem Gemüsenamen automatisch korrigiert werden.
Tippfehler sollten im Obstnamenfeld nicht korrigiert werden.

### Aktivieren und Deaktivieren der Autokorrektur

Dieses Beispiel zeigt, wie Sie die Autokorrektur mit dem `autocorrect`-Attribut aktivieren und deaktivieren können.

#### HTML

Das HTML-Markup definiert einen {{htmlelement("button")}}, ein "name"-{{htmlelement("input")}}-Element vom [`type="text"`](/de/docs/Web/HTML/Reference/Elements/input/text), ein "bio"-{{htmlelement("textarea")}}-Element und zwei {{htmlelement("label")}}-Elemente.

Das "username"-Element hat `autocorrect="off"` gesetzt, da das Autokorrigieren eines Namens lästig wäre!
Die Bio ist nicht mit einem Wert für `autocorrect` versehen, was bedeutet, dass es aktiviert ist (wir hätten jeden anderen Wert außer `off` setzen können).

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

Der Code prüft, ob `autocorrect` unterstützt wird, indem er überprüft, ob es im Prototyp vorhanden ist.
Wenn es nicht vorhanden ist, wird dieser Umstand protokolliert.
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

Wenn die Autokorrektur von Ihrem Browser unterstützt wird, sollte der Protokollbereich unter den "Biography"- und "Name"-Eingabefeldern anzeigen, dass sie für "Biography"-Eingaben aktiviert, aber nicht für "Name"-Eingaben aktiviert ist.

{{EmbedLiveSample("Enabling and disabling autocorrection", "100%", "250")}}

Geben Sie ungültigen Text in die Namen- und Biografie-Texteingabefelder ein.
Wenn das Gerät ein Ersatzwort für das eingegebene Wort hat, wird dies verwendet, um den Text in der "Biography"-Eingabe (nur dort) automatisch zu korrigieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).
- [`spellcheck`](/de/docs/Web/HTML/Reference/Global_attributes/spellcheck).
