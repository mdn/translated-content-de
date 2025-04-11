---
title: <input type="password">
slug: Web/HTML/Reference/Elements/input/password
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

`<input>`-Elemente des Typs **`password`** bieten dem Benutzer eine Möglichkeit, ein Passwort sicher einzugeben.

Das Element wird als einzeiliger, einfacher Texteditor-Steuerelement dargestellt, in dem der Text unkenntlich gemacht wird, damit er nicht gelesen werden kann, meistens durch das Ersetzen jedes Zeichens mit einem Symbol wie dem Asterisk ("\*") oder einem Punkt ("•"). Dieses Zeichen variiert je nach {{Glossary("user_agent", "User-Agent")}} und Betriebssystem.

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

Das genaue Verhalten der Eingabe kann von Browser zu Browser variieren. Einige Browser zeigen das eingegebene Zeichen einen Moment lang an, bevor es unkenntlich gemacht wird, während andere es dem Benutzer ermöglichen, die Anzeige des Klartextes ein- und auszuschalten. Beide Ansätze helfen dem Benutzer, zu überprüfen, ob das gewünschte Passwort eingegeben wurde, was auf mobilen Geräten besonders schwierig sein kann.

> [!NOTE]
> Alle Formulare, die sensible Informationen wie Passwörter enthalten (wie Anmeldeformulare), sollten über HTTPS bereitgestellt werden. Viele Browser implementieren mittlerweile Mechanismen, um vor unsicheren Anmeldeformularen zu warnen; siehe [Unsichere Passwörter](/de/docs/Web/Security/Insecure_passwords).

## Wert

Das [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut enthält einen String, dessen Wert der aktuelle Inhalt des Texteditor-Steuerelements ist, das zur Eingabe des Passworts verwendet wird. Wenn der Benutzer noch nichts eingegeben hat, ist dieser Wert ein leerer String (`""`). Wenn die [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Eigenschaft angegeben ist, muss das Passwortfeld einen anderen Wert als einen leeren String haben, um gültig zu sein.

Wenn das [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern)-Attribut angegeben ist, wird der Inhalt eines `password`-Steuerelements nur dann als gültig angesehen, wenn der Wert die Validierung besteht; siehe [Validierung](#validierung) für weitere Informationen.

> [!NOTE]
> Die Zeichen Zeilenumbruch (U+000A) und Wagenrücklauf (U+000D) sind in einem `password`-Wert nicht erlaubt. Beim Setzen des Passwortwertes werden Zeilenumbruch- und Wagenrücklauf-Zeichen aus dem Wert entfernt.

## Zusätzliche Attribute

Zusätzlich zu den [globalen Attributen](/de/docs/Web/HTML/Reference/Global_attributes) und den Attributen, die auf alle {{HTMLElement("input")}}-Elemente unabhängig von deren Typ wirken, unterstützen Passwortfeld-Eingaben die folgenden Attribute.

> [!NOTE]
> Das globale Attribut [`autocorrect`](/de/docs/Web/HTML/Reference/Global_attributes/autocorrect) kann zu Passwort-Eingaben hinzugefügt werden, aber der gespeicherte Zustand ist immer `off`.

### maxlength

Die maximale Zeichenlänge (gemessen in UTF-16 Code-Einheiten), die der Benutzer in das Passwortfeld eingeben kann. Dies muss ein ganzzahliger Wert von 0 oder höher sein. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben wurde, hat das Passwortfeld keine Maximal-Länge. Dieser Wert muss außerdem größer oder gleich dem Wert von `minlength` sein.

Die Eingabe schlägt bei der [Einschränkungs-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl, wenn die Länge des in das Feld eingegebenen Textes länger ist als `maxlength` UTF-16-Code-Einheiten. Einschränkungs-Validierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### minlength

Die minimale Zeichenlänge (gemessen in UTF-16 Code-Einheiten), die der Benutzer in das Passwort-Eingabefeld eingeben kann. Dies muss ein nicht-negativer ganzzahliger Wert sein, der kleiner oder gleich dem von `maxlength` angegebenen Wert ist. Wenn kein `minlength` angegeben ist oder ein ungültiger Wert angegeben wurde, hat das Passwort-Eingabefeld keine Mindestlänge.

Die Eingabe schlägt bei der [Einschränkungs-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl, wenn die Länge des in das Feld eingegebenen Textes kürzer ist als `minlength` UTF-16-Code-Einheiten. Einschränkungs-Validierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### pattern

Das `pattern`-Attribut, wenn angegeben, ist ein regulärer Ausdruck, der mit dem [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Wert des Eingabeformulars übereinstimmen muss, damit der Wert die [Einschränkungs-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) besteht. Es muss ein gültiger JavaScript regulärer Ausdruck sein, wie er vom {{jsxref("RegExp")}}-Typ verwendet wird und wie er in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert ist; das `'u'`-Flag ist beim Kompilieren des regulären Ausdrucks angegeben, sodass das Muster als Sequenz von Unicode-Codepunkten behandelt wird, anstatt als {{Glossary("ASCII", "ASCII")}}. Keine Schrägstriche sollten um den Mustertext angegeben werden.

Wenn das angegebene Muster nicht spezifiziert oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut wird vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Reference/Elements/input#title)-Attribut, um Text anzugeben, den die meisten Browser als Tooltip anzeigen, um zu erklären, welche Anforderungen erfüllt sein müssen, um das Muster zu erfüllen. Sie sollten auch anderen erläuternden Text in der Nähe einfügen.

Die Verwendung eines Musters wird für Passwort-Eingaben dringend empfohlen, um sicherzustellen, dass gültige Passwörter mit einer Vielzahl von Zeichenklassen von Ihren Benutzern ausgewählt und verwendet werden. Mit einem Muster können Sie Regelungen zu Groß- und Kleinschreibung vorschreiben, die Verwendung einer bestimmten Anzahl von Zahlen und/oder Satzzeichen anfordern usw. Siehe den Abschnitt [Validierung](#validierung) für Details und ein Beispiel.

### placeholder

Das `placeholder`-Attribut ist ein String, der dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Information im Feld erwartet wird. Es sollte ein Wort oder ein kurzer Satz sein, der die erwartete Art von Daten demonstriert, anstelle einer erklärenden Nachricht. Der Text _darf keine_ Wagenrücklaufzeichen oder Zeilenumbrüche enthalten.

Wenn der Inhalt des Steuerelements eine Richtung (LTR oder RTL) hat, der Platzhalter jedoch in der entgegengesetzten Richtung angezeigt werden muss, können Sie die Unicode-Bidi-Algorithmus-Formatierungszeichen verwenden, um die Richtung innerhalb des Platzhalters zu überschreiben; siehe [Wie man Unicode-Kontrollen für bidi-Text verwendet](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für weitere Informationen.

> [!NOTE]
> Vermeiden Sie, wenn möglich, das `placeholder`-Attribut zu verwenden. Es ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann zu unerwarteten technischen Problemen mit Ihrem Inhalt führen. Siehe [`<input>`-Beschriftungen](/de/docs/Web/HTML/Reference/Elements/input#labels) für weitere Informationen.

### readonly

Ein Boolean-Attribut, das, falls vorhanden, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch weiterhin durch JavaScript-Code geändert werden, der direkt den Wert der [`HTMLInputElement.value`](/de/docs/Web/API/HTMLInputElement)-Eigenschaft setzt.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Wirkung auf Eingaben mit dem ebenfalls angegebenen `readonly`-Attribut.

### size

Das `size`-Attribut ist ein numerischer Wert, der angibt, wie viele Zeichen breit das Eingabefeld sein soll. Der Wert muss eine Zahl größer als Null sein und der Standardwert ist 20. Da sich Zeichenbreiten unterscheiden, kann dies mehr oder weniger exakt sein und sollte nicht darauf vertraut werden, dass es so ist; die resultierende Eingabe kann schmaler oder breiter als die angegebene Anzahl von Zeichen sein, abhängig von den Zeichen und der Schrift ({cssxref("font")}}-Einstellungen in Verwendung).

Dies setzt _kein_ Limit für die Anzahl der Zeichen, die der Benutzer in das Feld eingeben kann. Es gibt nur ungefähr an, wie viele gleichzeitig sichtbar sein können. Um eine Obergrenze für die Länge der Eingabedaten festzulegen, verwenden Sie das [`maxlength`](#maxlength)-Attribut.

## Verwendung von Passwort-Eingaben

Passwort-Eingabefelder funktionieren im Allgemeinen genauso wie andere Text-Eingabefelder; der Hauptunterschied besteht in der Unkenntlichmachung des Inhalts, um zu verhindern, dass Personen in der Nähe des Benutzers das Passwort lesen.

### Eine einfache Passwort-Eingabe

Hier sehen wir die einfachste Passwort-Eingabe, mit einer Beschriftung, die durch das {{HTMLElement("label")}}-Element erstellt wurde.

```html
<label for="userPassword">Password: </label>
<input id="userPassword" type="password" />
```

{{EmbedLiveSample("A_basic_password_input", 600, 40)}}

### Autovervollständigung erlauben

Um dem Passwortmanager des Benutzers zu erlauben, das Passwort automatisch einzugeben, geben Sie das [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete)-Attribut an. Für Passwörter sollte dies typischerweise eines der folgenden sein:

- `on`
  - : Erlaubt dem Browser oder einem Passwortmanager, das Passwortfeld automatisch auszufüllen. Dies ist nicht so aussagekräftig wie die Verwendung von entweder `current-password` oder `new-password`.
- `off`
  - : Erlaubt dem Browser oder Passwortmanager nicht, das Passwortfeld automatisch auszufüllen. Beachten Sie, dass einige Software diesen Wert ignoriert, da er normalerweise die Fähigkeit der Benutzer gefährdet, sichere Passwortpraktiken zu befolgen.
- `current-password`
  - : Erlaubt dem Browser oder Passwortmanager, das aktuelle Passwort für die Seite einzugeben. Dies bietet mehr Informationen als `on`, da es dem Browser oder Passwortmanager ermöglicht, das derzeit bekannte Passwort für die Seite automatisch in das Feld einzugeben, aber kein neues vorzuschlagen.
- `new-password`
  - : Erlaubt dem Browser oder Passwortmanager, ein neues Passwort für die Seite automatisch einzugeben; dies wird bei "Ändern Sie Ihr Passwort"- und "Neuer Benutzer"-Formularen verwendet, im Feld, das den Benutzer nach einem neuen Passwort fragt. Das neue Passwort kann auf verschiedene Weise generiert werden, abhängig vom verwendeten Passwortmanager. Es kann ein neu vorgeschlagenes Passwort ausfüllen oder dem Benutzer möglicherweise eine Benutzeroberfläche zum Erstellen eines neuen anzeigen.

```html
<label for="userPassword">Password:</label>
<input id="userPassword" type="password" autocomplete="current-password" />
```

{{EmbedLiveSample("Allowing_autocomplete", 600, 40)}}

### Das Passwort obligatorisch machen

Um dem Browser des Benutzers mitzuteilen, dass das Passwortfeld einen gültigen Wert haben muss, bevor das Formular gesendet werden kann, geben Sie das Boolean-Attribut [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) an.

```html
<label for="userPassword">Password: </label>
<input id="userPassword" type="password" required />
<input type="submit" value="Submit" />
```

{{EmbedLiveSample("Making_the_password_mandatory", 600, 40)}}

### Ein Eingabemodus festlegen

Falls Ihre empfohlenen (oder erforderlichen) Passwortsyntaxregeln von einer alternativen Texteingabe-Schnittstelle als der Standardtastatur profitieren würden, können Sie das [`inputmode`](/de/docs/Web/HTML/Reference/Elements/input#inputmode)-Attribut verwenden, um eine spezifische anzufordern. Der offensichtlichste Anwendungsfall dafür ist, wenn das Passwort numerisch sein muss (wie zum Beispiel eine PIN). Mobile Geräte mit virtuellen Tastaturen könnten beispielsweise zu einem numerischen Tastatur-Layout wechseln, anstatt einer vollständigen Tastatur, um die Eingabe des Passworts zu erleichtern. Wenn die PIN einmalig verwendet werden soll, setzen Sie das [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete)-Attribut auf entweder `off` oder `one-time-code`, um vorzuschlagen, dass es nicht gespeichert wird.

```html
<label for="pin">PIN: </label>
<input id="pin" type="password" inputmode="numeric" />
```

{{EmbedLiveSample("Specifying_an_input_mode", 600, 40)}}

### Längenanforderungen setzen

Wie gewohnt können Sie die Attribute [`minlength`](/de/docs/Web/HTML/Reference/Elements/input#minlength) und [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength) verwenden, um minimale und maximale akzeptable Längen für das Passwort festzulegen. Dieses Beispiel baut auf das vorherige auf, indem es angibt, dass die PIN des Benutzers mindestens vier und höchstens acht Ziffern umfassen muss. Das [`size`](/de/docs/Web/HTML/Reference/Elements/input#size)-Attribut wird verwendet, um sicherzustellen, dass die Passwort-Eingabesteuerung acht Zeichen breit ist.

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

Sie können auch [`selectionStart`](/de/docs/Web/API/HTMLInputElement/selectionStart) und [`selectionEnd`](/de/docs/Web/API/HTMLInputElement/selectionEnd) verwenden, um den Bereich von Zeichen zu erhalten (oder zu setzen), der im Steuerelement gerade ausgewählt ist, und [`selectionDirection`](/de/docs/Web/API/HTMLInputElement/selectionDirection), um zu wissen, in welcher Richtung die Auswahl erfolgte (oder erweitert wird, abhängig von Ihrer Plattform; siehe die Dokumentation für eine Erklärung). Angesichts dessen, dass der Text unkenntlich gemacht wird, ist der Nutzen davon jedoch begrenzt.

## Validierung

Wenn Ihre Anwendung Zeichensatzbeschränkungen oder andere Anforderungen für den tatsächlichen Inhalt des eingegebenen Passworts hat, können Sie das [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern)-Attribut verwenden, um einen regulären Ausdruck festzulegen, der verwendet wird, um sicherzustellen, dass Ihre Passwörter diese Anforderungen automatisch erfüllen.

In diesem Beispiel sind nur Werte gültig, die aus mindestens vier und höchstens acht hexadezimalen Ziffern bestehen.

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

### Anfrage nach einer Sozialversicherungsnummer

Dieses Beispiel akzeptiert nur Eingaben, die dem Format einer [gültigen Sozialversicherungsnummer der Vereinigten Staaten](https://de.wikipedia.org/wiki/Sozialversicherungsnummer#Vereinigte_Staaten) entsprechen. Diese Nummern, die für Steuer- und Identifikationszwecke in den USA verwendet werden, liegen im Format "123-45-6789" vor. Es gibt auch verschiedene Regeln, welche Werte in jeder Gruppe zulässig sind.

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

Dieses Beispiel verwendet ein [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern), das den eingegebenen Wert auf Zeichenfolgen beschränkt, die gesetzliche Sozialversicherungsnummern darstellen. Offensichtlich garantiert dieses Regexp keine gültige SSN (da wir keinen Zugang zur Datenbank der Sozialversicherungsverwaltung haben), aber es stellt sicher, dass die Nummer eine sein könnte; es vermeidet im Allgemeinen Werte, die nicht gültig sein können. Außerdem erlaubt es, dass die drei Gruppen von Ziffern durch ein Leerzeichen, einen Bindestrich („-“) oder gar nichts getrennt werden.

Das [`inputmode`](/de/docs/Web/HTML/Reference/Elements/input#inputmode) ist auf `numeric` gesetzt, um Geräte mit virtuellen Tastaturen dazu zu ermutigen, zu einem numerischen Tastatur-Layout zu wechseln, um die Eingabe zu erleichtern. Die Attribute [`minlength`](/de/docs/Web/HTML/Reference/Elements/input#minlength) und [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength) sind auf 9 bzw. 12 gesetzt, um zu verlangen, dass der Wert mindestens neun und höchstens 12 Zeichen beträgt (erstere ohne trennende Zeichen zwischen den Zifferngruppen und letztere mit ihnen). Das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut wird verwendet, um anzugeben, dass dieses Steuerelement einen Wert haben muss. Schließlich ist [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete) auf `off` gesetzt, um zu vermeiden, dass Passwortmanager und Sitzungswiederherstellungsfunktionen versuchen, seinen Wert zu setzen, da dies überhaupt kein Passwort ist.

#### JavaScript

Das JavaScript zeigt die eingegebene SSN auf dem Bildschirm an, damit Sie sie sehen können. Dies konterkariert den Zweck eines Passwortfeldes, hilft aber beim Experimentieren mit dem `pattern`.

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
        Ein String, der ein Passwort darstellt, oder leer
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
      <td><strong>Unterstützte allgemeine Attribute</strong></td>
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
      <td><a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">keine entsprechende Rolle</a></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
