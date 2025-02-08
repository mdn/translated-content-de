---
title: autocorrect
slug: Web/HTML/Global_attributes/autocorrect
l10n:
  sourceCommit: 01e8b5077df6d79e52f2521dfbe734e0923d1fc4
---

{{HTMLSidebar("Global_attributes")}}

Das **`autocorrect`**-[globale Attribut](/de/docs/Web/HTML/Global_attributes) ist ein {{Glossary("Enumerated", "aufgezähltes Attribut")}}, das steuert, ob die automatische Korrektur von bearbeitbarem Text für Rechtschreib- und/oder Zeichensetzungsfehler aktiviert ist.

Das spezifische Verhalten der automatischen Korrektur, einschließlich der ersetzten Wörter, hängt vom jeweiligen User-Agent und den Diensten des zugrundeliegenden Geräts ab.
Beispielsweise könnte ein User-Agent unter macOS auf [registrierten Ersetzungstext und Zeichensetzung](https://support.apple.com/en-vn/guide/mac-help/mh35735/mac) zurückgreifen. Andere Geräte und Browser verwenden möglicherweise eine andere Methode.

Autokorrektur ist für folgende bearbeitbare Text-Elemente relevant:

- {{htmlelement("input")}}-Elemente, mit Ausnahme von [`password`](/de/docs/Web/HTML/Element/input/password), [`email`](/de/docs/Web/HTML/Element/input/email) und [`url`](/de/docs/Web/HTML/Element/input/url), die keine Autokorrektur unterstützen.
- {{htmlelement("textarea")}}-Elemente.
- Jedes Element, das das Attribut [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) gesetzt hat.

Bearbeitbare Elemente haben standardmäßig die Autokorrektur aktiviert, außer innerhalb eines {{htmlelement("form")}}-Elements, bei dem der Standardwert möglicherweise vom Formular vererbt wird.
Das explizite Setzen des Attributs überschreibt den Standardwert.

## Wert

Mögliche Werte sind:

- `on` oder `""` (der leere String)

  - : Aktiviert die automatische Korrektur von Rechtschreib- und Zeichensetzungsfehlern.

- `off`

  - : Deaktiviert die automatische Korrektur von bearbeitbarem Text.

Die {{htmlelement("input")}}-Elementtypen, die keine Autokorrektur unterstützen, haben immer den Zustand `off`: [`password`](/de/docs/Web/HTML/Element/input/password), [`email`](/de/docs/Web/HTML/Element/input/email) und [`url`](/de/docs/Web/HTML/Element/input/url).

Bei allen anderen bearbeitbaren Elementen wird das Setzen eines anderen Wertes als der oben aufgeführten immer als `on` behandelt.
Der Standardwert für Elemente, die nicht innerhalb eines `<form>` verschachtelt sind, ist `on`.

Wenn sie in einem `<form>` verschachtelt sind, erben die folgenden Elemente ihren Standardwert für `autocorrect` vom Formular, sofern dieser gesetzt wurde: {{htmlelement("button")}}, {{htmlelement("fieldset")}}, {{htmlelement("input")}}, {{htmlelement("output")}}, {{htmlelement("select")}}, und {{htmlelement("textarea")}}.

## Beispiele

### Einfaches Beispiel

Dieses Beispiel zeigt die grundlegende Nutzung des `autocorrect`-Attributs.

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

Geben Sie fehlerhaften Text in die Textfelder für Obst und Gemüse oben ein.
Wenn Autokorrektur von Ihrem Browser unterstützt wird und das zugrunde liegende Gerät eine passende Ersetzung bereitstellt, sollte ein Tippfehler in der Gemüseeingabe automatisch korrigiert werden.
Tippfehler im Obstfeld sollten jedoch nicht korrigiert werden.

### Autokorrektur aktivieren und deaktivieren

Dieses Beispiel zeigt, wie Sie die Autokorrektur mithilfe des `autocorrect`-Attributs aktivieren und deaktivieren können.

#### HTML

Das HTML-Markup definiert einen {{htmlelement("button")}}, ein "name"-{{htmlelement("input")}}-Element vom [`type="text"`](/de/docs/Web/HTML/Element/input/text), ein "bio"-{{htmlelement("textarea")}}-Element und zwei {{htmlelement("label")}}-Elemente.

Das "username"-Element hat `autocorrect="off"` gesetzt, da eine Autokorrektur bei Namen störend wäre! Die Bio hat keinen Wert für `autocorrect` angegeben, was bedeutet, dass es aktiviert ist (wir hätten jeden anderen Wert außer `off` setzen können).

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

Der Code prüft, ob `autocorrect` unterstützt wird, indem überprüft wird, ob es im Prototyp vorhanden ist. Ist es nicht vorhanden, wird dies protokolliert. Ist es vorhanden, wird der Wert der `autocorrect`-Eigenschaft für jedes der Texteingabeelemente protokolliert.

Ein Klick-Handler wird für den Button hinzugefügt, der es erlaubt, den eingegebenen Text und das Protokoll zurückzusetzen.

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

Wenn die Autokorrektur von Ihrem Browser unterstützt wird, sollte der Bereich unter den Eingabefeldern "Biography" und "Name" anzeigen, dass sie für Eingaben im Feld "Biography" aktiviert ist, aber nicht für das Feld "Name".

{{EmbedLiveSample("Enabling and disabling autocorrection", "100%", "250")}}

Geben Sie fehlerhaften Text in die Textfelder für name und biography ein. Wenn das Gerät einen Ersatz für das eingegebene Wort hat, wird dieser verwendet, um den Text nur im Eingabefeld "Biography" automatisch zu korrigieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
