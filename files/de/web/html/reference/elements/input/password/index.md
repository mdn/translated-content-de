---
title: <input type="password">
slug: Web/HTML/Reference/Elements/input/password
l10n:
  sourceCommit: cc7f29133a331628d623e8cd705394b538d4368c
---

`<input>`-Elemente vom Typ **`password`** bieten eine Möglichkeit, für den Benutzer ein Passwort sicher einzugeben.

Das Element wird als einzeilige einfache Texteditor-Steuerung angezeigt, in der der Text verdeckt wird, sodass er nicht lesbar ist, in der Regel durch Ersetzen jedes Zeichens durch ein Symbol wie das Sternchen ("\*") oder einen Punkt ("•"). Dieses Zeichen variiert je nach {{Glossary("user_agent", "Benutzeragent")}} und Betriebssystem.

{{InteractiveExample("HTML Demo: &lt;input type=&quot;password&quot;&gt;", "tabbed-standard")}}

```html interactive-example
<div>
  <label for="username">Username:</label>
  <input type="text" id="username" name="username" />
</div>

<div>
  <label for="pass">Password (8 characters minimum):</label>
  <input type="password" id="pass" name="password" minlength="8" required />
</div>

<input type="submit" value="Sign in" />
```

```css interactive-example
label {
  display: block;
}

input[type="submit"],
label {
  margin-top: 1rem;
}
```

Das genaue Verhalten des Eingabeprozesses kann von Browser zu Browser variieren. Einige Browser zeigen das eingegebene Zeichen für einen Moment an, bevor es verdeckt wird, während andere es dem Benutzer ermöglichen, die Anzeige des Klartexts ein- und auszuschalten. Beide Ansätze helfen dem Benutzer zu prüfen, ob er das beabsichtigte Passwort eingegeben hat, was insbesondere auf mobilen Geräten schwierig sein kann.

> [!NOTE]
> Alle Formulare, die sensible Informationen wie Passwörter enthalten (wie Login-Formulare), sollten über HTTPS bereitgestellt werden. Viele Browser implementieren inzwischen Mechanismen, um vor unsicheren Login-Formularen zu warnen.

## Wert

Das [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut enthält einen String, dessen Wert der aktuelle Inhalt des zum Eingeben des Passworts verwendeten Texteingabebereichs ist. Wenn der Benutzer noch nichts eingegeben hat, ist dieser Wert eine leere Zeichenkette (`""`). Wenn die [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Eigenschaft angegeben ist, muss das Passwortfeld einen anderen Wert als eine leere Zeichenkette enthalten, um gültig zu sein.

Wenn das [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern)-Attribut angegeben ist, wird der Inhalt eines `password`-Feldes nur als gültig betrachtet, wenn der Wert die Validierung besteht; siehe [Validierung](#validierung) für weitere Informationen.

> [!NOTE]
> Die Zeichen Wagenrücklauf (U+000A) und Zeilenumbruch (U+000D) sind in einem `password`-Wert nicht erlaubt. Beim Setzen des Werts eines Passwortfeldes werden Wagenrücklauf- und Zeilenumbruchzeichen aus dem Wert entfernt.

## Zusätzliche Attribute

Zusätzlich zu den [globalen Attributen](/de/docs/Web/HTML/Reference/Global_attributes) und den Attributen, die auf alle {{HTMLElement("input")}}-Elemente unabhängig von ihrem Typ anwendbar sind, unterstützen Passwort-Feld-Eingaben die folgenden Attribute.

> [!NOTE]
> Das globale Attribut [`autocorrect`](/de/docs/Web/HTML/Reference/Global_attributes/autocorrect) kann zu Passwort-Eingaben hinzugefügt werden, aber der gespeicherte Zustand ist immer `off`.

### maxlength

Die maximale Zeichenfolgenlänge (gemessen in {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}}), die der Benutzer in das Passwortfeld eingeben kann. Dies muss ein ganzzahliger Wert von 0 oder höher sein. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat das Passwortfeld keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

Die Eingabe wird die [Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) nicht bestehen, wenn die Länge des in das Feld eingegebenen Textes größer als `maxlength` {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}} ist. Constraint-Validierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### minlength

Die minimale Zeichenfolgenlänge (gemessen in {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}}), die der Benutzer in das Passwort-Eingabefeld eingeben kann. Dies muss ein nicht-negativer ganzzahliger Wert sein, der kleiner oder gleich dem von `maxlength` angegebenen Wert ist. Wenn kein `minlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat die Passwort-Eingabe keine Mindestlänge.

Die Eingabe wird die [Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) nicht bestehen, wenn die Länge des in das Feld eingegebenen Textes kleiner als `minlength` {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}} ist. Constraint-Validierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### pattern

Das `pattern`-Attribut ist, wenn angegeben, ein regulärer Ausdruck, den der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) der Eingabe erfüllen muss, um die [Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) zu bestehen. Es muss ein gültiger regulärer JavaScript-Ausdruck sein, wie er durch den {{jsxref("RegExp")}}-Typ verwendet wird und wie er in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert ist; das `'u'`-Flag wird beim Kompilieren des regulären Ausdrucks angegeben, sodass das Muster als eine Reihe von Unicode-Codepunkten behandelt wird, anstatt als {{Glossary("ASCII", "ASCII")}}. Es dürfen keine Schrägstriche um den Mustertext angegeben werden.

Wenn das angegebene Muster nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut wird vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Reference/Elements/input#title)-Attribut, um Text anzugeben, den die meisten Browser als Tooltip anzeigen werden, um zu erklären, welche Anforderungen erfüllt werden müssen, um das Muster zu erfüllen. Sie sollten auch andere erklärende Texte in der Nähe verwenden.

Die Verwendung eines Musters wird für Passwort-Eingaben dringend empfohlen, um sicherzustellen, dass gültige Passwörter mit einer Vielzahl von Zeichenklassen von Ihren Benutzern ausgewählt und verwendet werden. Mit einem Muster können Sie Regeln für Groß- und Kleinschreibung vorschreiben, die Verwendung einer bestimmten Anzahl von Ziffern und/oder Satzzeichen fordern und so weiter. Siehe den Abschnitt [Validierung](#validierung) für Details und ein Beispiel.

### placeholder

Das `placeholder`-Attribut ist ein String, der dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Informationen im Feld erwartet werden. Es sollte ein Wort oder eine kurze Phrase sein, die die erwartete Art von Daten veranschaulicht, anstatt eine erklärende Nachricht zu sein. Der Text _darf keine_ Wagenrücklauf- oder Zeilenumbruchzeichen enthalten.

Wenn der Inhalt der Steuerung eine Richtung ({{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}) hat, aber der Platzhalter in der entgegengesetzten Richtung angezeigt werden muss, können Sie Unicode-Bidirektional-Algorithmus-Formatierungszeichen verwenden, um die Richtung im Platzhalter zu überschreiben; siehe [Wie man Unicode-Steuerungen für bidi-Text verwendet](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für weitere Informationen.

> [!NOTE]
> Vermeiden Sie nach Möglichkeit die Verwendung des `placeholder`-Attributs. Es ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [`<input>` Labels](/de/docs/Web/HTML/Reference/Elements/input#labels) für mehr Informationen.

### readonly

Ein Boolesches Attribut, das, wenn es vorhanden ist, bedeutet, dass dieses Feld nicht vom Benutzer bearbeitet werden kann. Sein `Wert` kann jedoch immer noch durch JavaScript-Code, der den Wert der [`HTMLInputElement.value`](/de/docs/Web/API/HTMLInputElement)-Eigenschaft direkt setzt, geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keinen Effekt auf Eingaben mit ebenfalls angegebenem `readonly`-Attribut.

### size

Das `size`-Attribut ist ein numerischer Wert, der angibt, wie viele Zeichen breit das Eingabefeld sein soll. Der Wert muss eine Zahl größer als null sein, und der Standardwert ist 20. Da Zeichenbreiten variieren, kann dies genau zutreffen oder nicht und sollte nicht als genau angenommen werden; die resultierende Eingabe kann je nach Zeichen und dem verwendeten Schriftart-({{cssxref("font")}})-Einstellungen schmaler oder breiter als die angegebene Anzahl von Zeichen sein.

Dies setzt _nicht_ eine Grenze dafür, wie viele Zeichen der Benutzer in das Feld eingeben kann. Es legt nur ungefähr fest, wie viele gleichzeitig sichtbar sein können. Um eine Obergrenze für die Länge der Eingabedaten festzulegen, verwenden Sie das [`maxlength`](#maxlength)-Attribut.

## Verwendung von Passwort-Eingaben

Passwort-Eingabeboxen funktionieren im Allgemeinen genauso wie andere Text-Eingabeboxen; der Hauptunterschied besteht darin, dass der Beitrag verdeckt wird, um zu verhindern, dass Personen in der Nähe des Benutzers das Passwort lesen.

### Eine grundlegende Passwort-Eingabe

Hier sehen wir die grundlegendste Passwort-Eingabe, mit einem Label, das unter Verwendung des {{HTMLElement("label")}}-Elements erstellt wurde.

```html
<label for="userPassword">Password: </label>
<input id="userPassword" type="password" />
```

{{EmbedLiveSample("A_basic_password_input", 600, 40)}}

### Automatisches Ausfüllen ermöglichen

Um dem Passwort-Manager des Benutzers zu ermöglichen, das Passwort automatisch einzugeben, geben Sie das [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete)-Attribut an. Für Passwörter sollte dies in der Regel einer der folgenden Werte sein:

- `on`
  - : Zulassen, dass der Browser oder ein Passwort-Manager das Passwortfeld automatisch ausfüllt. Dies ist nicht so informativ wie die Verwendung von entweder `current-password` oder `new-password`.
- `off`
  - : Nicht zulassen, dass der Browser oder ein Passwort-Manager das Passwortfeld automatisch ausfüllt. Beachten Sie, dass einige Software dies ignoriert, da es in der Regel schädlich für die Fähigkeit der Benutzersicherheit im Umgang mit sicheren Passwortpraktiken ist.
- `current-password`
  - : Zulassen, dass der Browser oder ein Passwort-Manager das aktuelle Passwort für die Seite eingibt. Dies bietet mehr Informationen als `on`, da es dem Browser oder Passwort-Manager ermöglicht, das derzeit bekannte Passwort für die Seite im Feld automatisch einzugeben, aber nicht, um ein neues vorzuschlagen.
- `new-password`
  - : Zulassen, dass der Browser oder Passwort-Manager ein neues Passwort für die Seite automatisch eingibt; dies wird auf "Ändern Sie Ihr Passwort" und "Neuer Benutzer"-Formularen verwendet, im Feld, in dem der Benutzer nach einem neuen Passwort gefragt wird. Das neue Passwort kann je nach verwendetem Passwort-Manager auf verschiedene Weisen generiert werden. Es kann ein neues vorgeschlagenes Passwort einfügen oder dem Benutzer eine Schnittstelle zur Erstellung eines neuen anzeigen.

```html
<label for="userPassword">Password:</label>
<input id="userPassword" type="password" autocomplete="current-password" />
```

{{EmbedLiveSample("Allowing_autocomplete", 600, 40)}}

### Das Passwort zwingend erforderlich machen

Um dem Browser des Benutzers mitzuteilen, dass das Passwortfeld einen gültigen Wert haben muss, bevor das Formular gesendet werden kann, geben Sie das Boolesche Attribut [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) an.

```html
<label for="userPassword">Password: </label>
<input id="userPassword" type="password" required />
<input type="submit" value="Submit" />
```

{{EmbedLiveSample("Making_the_password_mandatory", 600, 40)}}

### Einen Eingabemodus angeben

Wenn Ihre empfohlenen (oder erforderlichen) Passwort-Syntaxregeln von einem anderen Texteintragsinterface als dem Standardtastatur profitieren würden, können Sie das [`inputmode`](/de/docs/Web/HTML/Reference/Elements/input#inputmode)-Attribut verwenden, um eine spezifische anzufordern. Der offensichtlichste Anwendungsfall hierfür ist, wenn das Passwort numerisch sein muss (wie ein PIN). Mobile Geräte mit virtuellen Tastaturen können beispielsweise zu einem Ziffernblocklayout wechseln, anstelle einer vollständigen Tastatur, um das Passwort leichter einzugeben. Wenn der PIN nur einmal verwendet werden soll, stellen Sie das [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete)-Attribut auf entweder `off` oder `one-time-code` ein, um anzugeben, dass es nicht gespeichert werden soll.

```html
<label for="pin">PIN: </label>
<input id="pin" type="password" inputmode="numeric" />
```

{{EmbedLiveSample("Specifying_an_input_mode", 600, 40)}}

### Längenanforderungen festlegen

Wie gewohnt können Sie die [`minlength`](/de/docs/Web/HTML/Reference/Elements/input#minlength)- und [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength)-Attribute verwenden, um Mindest- und Höchstlängen für das Passwort festzulegen. Dieses Beispiel baut auf dem vorherigen auf, indem es festlegt, dass der PIN des Benutzers mindestens vier und höchstens acht Ziffern lang sein muss. Das [`size`](/de/docs/Web/HTML/Reference/Elements/input#size)-Attribut wird verwendet, um sicherzustellen, dass das Passwort-Eingabekontrollfenster acht Zeichen breit ist.

```html
<label for="pin">PIN:</label>
<input
  id="pin"
  type="password"
  inputmode="numeric"
  minlength="4"
  maxlength="8"
  size="8" />
```

{{EmbedLiveSample("Setting_length_requirements", 600, 40)}}

### Text auswählen

Wie bei anderen Texteingabesteuerungen können Sie die [`select()`](/de/docs/Web/API/HTMLInputElement/select)-Methode verwenden, um den gesamten Text im Passwortfeld auszuwählen.

#### HTML

```html
<label for="userPassword">Password: </label>
<input id="userPassword" type="password" size="12" />
<button id="selectAll">Select All</button>
```

#### JavaScript

```js
document.getElementById("selectAll").onclick = () => {
  document.getElementById("userPassword").select();
};
```

#### Ergebnis

{{EmbedLiveSample("Selecting_text", 600, 40)}}

Sie können auch [`selectionStart`](/de/docs/Web/API/HTMLInputElement/selectionStart) und [`selectionEnd`](/de/docs/Web/API/HTMLInputElement/selectionEnd) verwenden, um den Bereich von Zeichen im Steuerelement zu erhalten (oder festzulegen), der derzeit ausgewählt ist, und [`selectionDirection`](/de/docs/Web/API/HTMLInputElement/selectionDirection), um zu wissen, in welche Richtung die Auswahl erfolgt ist (oder sich erweitern wird, abhängig von Ihrer Plattform; siehe die Dokumentation für eine Erklärung). Angesichts der Tatsache, dass der Text verdeckt ist, ist die Nützlichkeit dieser Funktionen jedoch etwas begrenzt.

## Validierung

Wenn Ihre Anwendung Zeichensatzbeschränkungen oder andere Anforderungen an den tatsächlichen Inhalt des eingegebenen Passworts hat, können Sie das [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern)-Attribut verwenden, um einen regulären Ausdruck festzulegen, der automatisch sicherstellt, dass Ihre Passwörter diesen Anforderungen entsprechen.

In diesem Beispiel sind nur Werte gültig, die mindestens vier und höchstens acht hexadezimale Ziffern enthalten.

```html
<label for="hexId">Hex ID: </label>
<input
  id="hexId"
  type="password"
  pattern="[0-9a-fA-F]{4,8}"
  title="Enter an ID consisting of 4-8 hexadecimal digits"
  autocomplete="new-password" />
```

{{EmbedLiveSample("Validation", 600, 40)}}

## Beispiele

### Anfordern einer Sozialversicherungsnummer

Dieses Beispiel akzeptiert nur Eingaben, die dem Format für eine [gültige Sozialversicherungsnummer der Vereinigten Staaten](https://en.wikipedia.org/wiki/Social_Security_number#Structure) entsprechen. Diese Nummern, die in den USA für Steuer- und Identifikationszwecke verwendet werden, haben die Form "123-45-6789". Es gibt auch verschiedene Regeln, welche Werte in jeder Gruppe zulässig sind.

#### HTML

```html
<label for="ssn">SSN:</label>
<input
  type="password"
  id="ssn"
  inputmode="numeric"
  minlength="9"
  maxlength="12"
  pattern="(?!000)([0-6]\d{2}|7([0-6]\d|7[012]))([ -])?(?!00)\d\d\3(?!0000)\d{4}"
  required
  autocomplete="off" />
<br />
<label for="ssn">Value:</label>
<span id="current"></span>
```

Dies verwendet ein [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern), das den eingegebenen Wert auf Zeichenfolgen beschränkt, die rechtmäßige Sozialversicherungsnummern darstellen. Natürlich garantiert dieser reguläre Ausdruck keine gültige SSN (da wir keinen Zugang zur Datenbank der Sozialversicherungsverwaltung haben), aber es wird sichergestellt, dass die Nummer eine sein könnte; es vermeidet im Allgemeinen Werte, die nicht gültig sein können. Außerdem erlaubt es, dass die drei Zifferngruppen durch Leerzeichen, Bindestriche ("-") oder nichts getrennt werden.

Das [`inputmode`](/de/docs/Web/HTML/Reference/Elements/input#inputmode) ist auf `numeric` gesetzt, um Geräte mit virtuellen Tastaturen dazu zu ermuntern, zu einem numerischen Tastaturlayout zu wechseln, um die Eingabe zu erleichtern. Die [`minlength`](/de/docs/Web/HTML/Reference/Elements/input#minlength)- und [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength)-Attribute sind auf 9 und 12 gesetzt, bzw., um zu verlangen, dass der Wert mindestens neun und höchstens zwölf Zeichen lang ist (das erste ohne Trennzeichen zwischen den Zifferngruppen und das letzte mit ihnen). Das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut wird verwendet, um anzuzeigen, dass dieses Steuerungsfeld einen Wert haben muss. Schließlich wird [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete) auf `off` gesetzt, um zu verhindern, dass Passwort-Manager und Sitzungswiederherstellungsfunktionen versuchen, seinen Wert einzustellen, da es sich hierbei überhaupt nicht um ein Passwort handelt.

#### JavaScript

Das JavaScript zeigt die eingegebene SSN auf dem Bildschirm an, sodass Sie sie sehen können. Dies negiert den Zweck eines Passwortfeldes, hilft jedoch dabei, mit dem `pattern` zu experimentieren.

```js
const ssn = document.getElementById("ssn");
const current = document.getElementById("current");

ssn.oninput = (event) => {
  current.textContent = ssn.value;
};
```

#### Ergebnis

{{EmbedLiveSample("Requesting_a_Social_Security_number", 600, 60)}}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <td><strong><a href="#value">Wert</a></strong></td>
      <td>
        Eine Zeichenkette, die ein Passwort darstellt, oder leer
      </td>
    </tr>
    <tr>
      <td><strong>Ereignisse</strong></td>
      <td>
        [`change`](/de/docs/Web/API/HTMLElement/change_event) und
        [`input`](/de/docs/Web/API/Element/input_event)
      </td>
    </tr>
    <tr>
      <td><strong>Unterstützte gemeinsame Attribute</strong></td>
      <td>
         <a href="/de/docs/Web/HTML/Reference/Elements/input#autocomplete"><code>autocomplete</code></a>,
         <a href="/de/docs/Web/HTML/Reference/Elements/input#inputmode"><code>inputmode</code></a>,
         <a href="/de/docs/Web/HTML/Reference/Elements/input#maxlength"><code>maxlength</code></a>,
         <a href="/de/docs/Web/HTML/Reference/Elements/input#minlength"><code>minlength</code></a>,
         <a href="/de/docs/Web/HTML/Reference/Elements/input#pattern"><code>pattern</code></a>,
         <a href="/de/docs/Web/HTML/Reference/Elements/input#placeholder"><code>placeholder</code></a>,
         <a href="/de/docs/Web/HTML/Reference/Elements/input#readonly"><code>readonly</code></a>,
         <a href="/de/docs/Web/HTML/Reference/Elements/input#required"><code>required</code></a>, und
         <a href="/de/docs/Web/HTML/Reference/Elements/input#size"><code>size</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>IDL-Attribute</strong></td>
      <td>
        <code>selectionStart</code>, <code>selectionEnd</code>,
        <code>selectionDirection</code>, und <code>value</code>
      </td>
    </tr>
    <tr>
      <td><strong>DOM-Schnittstelle</strong></td>
      <td><p>[`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)</p></td>
    </tr>
    <tr>
      <td><strong>Methoden</strong></td>
      <td>
        [`select()`](/de/docs/Web/API/HTMLInputElement/select),
        [`setRangeText()`](/de/docs/Web/API/HTMLInputElement/setRangeText),
        und
        [`setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange)
      </td>
    </tr>
    <tr>
      <td><strong>Implizite ARIA-Rolle</strong></td>
      <td><a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role">keine entsprechende Rolle</a></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
