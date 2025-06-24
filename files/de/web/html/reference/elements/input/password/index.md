---
title: <input type="password">
slug: Web/HTML/Reference/Elements/input/password
l10n:
  sourceCommit: 3e097148b4c6cb9c6d8824275599f855ca63827b
---

{{HTMLSidebar}}

`<input>`-Elemente mit dem Typ **`password`** bieten eine Möglichkeit, wie Benutzer sicher ein Passwort eingeben können.

Das Element wird als einzeilige Plain-Text-Editor-Steuerelement in dem der Text maskiert wird, sodass er nicht gelesen werden kann, meist indem jedes Zeichen durch ein Symbol wie das Sternchen ("\*") oder einen Punkt ("•") ersetzt wird. Dieses Zeichen variiert je nach {{Glossary("user_agent", "Benutzeragent")}} und Betriebssystem.

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

Das genaue Verhalten des Eingabeprozesses kann von Browser zu Browser variieren. Einige Browser zeigen das getippte Zeichen für einen Moment an, bevor es maskiert wird, während andere dem Benutzer erlauben, die Anzeige des Klartexts ein- und auszuschalten. Beide Ansätze helfen dem Benutzer zu prüfen, ob er das beabsichtigte Passwort eingegeben hat, was auf Mobilgeräten besonders schwierig sein kann.

> [!NOTE]
> Alle Formulare, die sensible Informationen wie Passwörter betreffen (wie Anmeldeformulare), sollten über HTTPS bereitgestellt werden. Viele Browser implementieren inzwischen Mechanismen, um vor unsicheren Anmeldeformularen zu warnen; siehe [Unsichere Passwörter](/de/docs/Web/Security/Insecure_passwords).

## Wert

Das [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut enthält eine Zeichenfolge, deren Wert der aktuelle Inhalt des Texteingabesteuerelements ist, das zum Eingeben des Passworts verwendet wird. Wenn der Benutzer noch nichts eingegeben hat, ist dieser Wert eine leere Zeichenfolge (`""`). Wenn die [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Eigenschaft angegeben ist, muss das Passwort-Eingabefeld einen anderen Wert als eine leere Zeichenfolge enthalten, um gültig zu sein.

Wenn das [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern)-Attribut angegeben ist, wird der Inhalt eines `password`-Steuerelements nur dann als gültig angesehen, wenn der Wert die Validierung besteht; siehe [Validierung](#validierung) für weitere Informationen.

> [!NOTE]
> Die Zeilenumbruchzeichen (U+000A) und Wagenrücklaufzeichen (U+000D) sind in einem `password`-Wert nicht zulässig. Beim Festlegen des Werts eines Passwort-Steuerelements werden Zeilenumbrüche und Wagenrückläufe aus dem Wert entfernt.

## Zusätzliche Attribute

Zusätzlich zu den [globalen Attributen](/de/docs/Web/HTML/Reference/Global_attributes) und den Attributen, die auf alle {{HTMLElement("input")}}-Elemente unabhängig von ihrem Typ angewendet werden, unterstützen Passwort-Feldeingaben die folgenden Attribute.

> [!NOTE]
> Das globale Attribut [`autocorrect`](/de/docs/Web/HTML/Reference/Global_attributes/autocorrect) kann zu Passwort-Eingaben hinzugefügt werden, aber der gespeicherte Status ist immer `off`.

### maxlength

Die maximale Zeichenfolgenlänge (gemessen in {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}}), die der Benutzer in das Passwortfeld eingeben kann. Dies muss ein ganzzahliger Wert von 0 oder höher sein. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben ist, hat das Passwortfeld keine maximale Länge. Dieser Wert muss auch gleich oder größer als der Wert von `minlength` sein.

Die Eingabe wird die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) nicht bestehen, wenn die Länge des eingegebenen Textes im Feld größer ist als `maxlength` {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}}. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wurde.

### minlength

Die minimale Zeichenfolgenlänge (gemessen in {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}}), die der Benutzer in das Passworteingabefeld eingeben kann. Dies muss ein nicht-negativer ganzzahliger Wert sein, der kleiner oder gleich dem durch `maxlength` angegebenen Wert ist. Wenn keine `minlength` angegeben ist oder ein ungültiger Wert angegeben ist, hat die Passwort-Eingabe keine Mindestlänge.

Die Eingabe wird die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) nicht bestehen, wenn die Länge des eingegebenen Textes im Feld kürzer ist als `minlength` {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}}. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wurde.

### pattern

Das Attribut `pattern` ist, wenn angegeben, ein regulärer Ausdruck, den der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) des Eingabefelds erfüllen muss, damit der Wert die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) bestehen kann. Es muss ein gültiger JavaScript-Regulärer-Ausdruck sein, wie er vom {{jsxref("RegExp")}}-Typ verwendet wird, und wie in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert ist; das `'u'`-Flag wird beim Kompilieren des regulären Ausdrucks angegeben, sodass das Muster als eine Sequenz von Unicode-Codepunkten behandelt wird, anstatt als {{Glossary("ASCII", "ASCII")}}. Es sollten keine Schrägstriche um den Mustertext angegeben werden.

Wenn das angegebene Muster nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut wird vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Reference/Elements/input#title)-Attribut, um Text festzulegen, den die meisten Browser als Tooltip anzeigen, um zu erklären, welche Anforderungen erfüllt sein müssen, um das Muster zu erfüllen. Sie sollten auch anderen erklärenden Text in der Nähe einfügen.

Die Verwendung eines Musters wird für Passworteingaben dringend empfohlen, um sicherzustellen, dass gültige Passwörter mit einer Vielzahl von Zeichenklassen von Ihren Benutzern ausgewählt und verwendet werden. Mit einem Muster können Sie Großschreibregeln vorschreiben, die Verwendung einer Anzahl von Ziffern und/oder Satzzeichenzeichen erfordern und so weiter. Siehe den Abschnitt [Validierung](#validierung) für Einzelheiten und ein Beispiel.

### placeholder

Das Attribut `placeholder` ist eine Zeichenfolge, die dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Informationen im Feld erwartet werden. Es sollte ein Wort oder eine kurze Phrase sein, die den erwarteten Datentyp demonstriert, anstatt einer erklärenden Nachricht. Der Text _darf keine_ Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt einer Steuerelementrichtungsweisung ({{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}) aber der Platzhalter in der entgegengesetzten Richtung angezeigt werden muss, können Sie Unicode-Richtungsalgorithmus-Formatierungszeichen verwenden, um die Direktionalität im Platzhalter zu überschreiben; siehe [Wie man Unicode-Steuerungen für bidi-Text verwendet](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für weitere Informationen.

> [!NOTE]
> Vermeiden Sie es, das `placeholder`-Attribut zu verwenden, wenn möglich. Es ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [`<input>`-Labels](/de/docs/Web/HTML/Reference/Elements/input#labels) für weitere Informationen.

### readonly

Ein Boolean-Attribut, das, wenn vorhanden, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch immer noch von JavaScript-Code geändert werden, der den Wert der [`HTMLInputElement.value`](/de/docs/Web/API/HTMLInputElement)-Eigenschaft direkt festlegt.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Wirkung auf Eingaben mit dem ebenfalls angegebenen `readonly`-Attribut.

### size

Das Attribut `size` ist ein numerischer Wert, der anzeigt, wie viele Zeichen breit das Eingabefeld sein sollte. Der Wert muss eine Zahl größer als null sein, und der Standardwert ist 20. Da Zeichenbreiten variieren, muss dies nicht exakt sein und sollte nicht darauf vertraut werden; die resultierende Eingabe kann enger oder breiter als die angegebene Anzahl von Zeichen sein, abhängig von den Zeichen und den ({{cssxref("font")}}-Einstellungen) verwendeten Schriftarten.

Dies setzt _kein_ Limit, wie viele Zeichen der Benutzer in das Feld eingeben kann. Es gibt nur ungefähr an, wie viele zu einem Zeitpunkt sichtbar sein können. Um ein oberes Limit für die Länge der Eingabedaten festzulegen, verwenden Sie das [`maxlength`](#maxlength)-Attribut.

## Verwendung von Passwort-Eingaben

Passwort-Eingabefelder funktionieren im Allgemeinen genauso wie andere Text-Eingabefelder; der Hauptunterschied ist die Verschleierung des Inhalts, um zu verhindern, dass Personen in der Nähe des Benutzers das Passwort lesen.

### Eine grundlegende Passwort-Eingabe

Hier sehen wir die einfachste Passwort-Eingabe, mit einem Label das mit dem {{HTMLElement("label")}}-Element festgelegt wurde.

```html
<label for="userPassword">Password: </label>
<input id="userPassword" type="password" />
```

{{EmbedLiveSample("A_basic_password_input", 600, 40)}}

### Autovervollständigung erlauben

Um dem Passwort-Manager des Benutzers zu erlauben, das Passwort automatisch einzugeben, geben Sie das [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete)-Attribut an. Für Passwörter sollte dies typischerweise einer der folgenden Werte sein:

- `on`
  - : Erlaubt dem Browser oder einem Passwort-Manager, das Passwortfeld automatisch auszufüllen. Dies ist nicht so informativ wie die Verwendung von `current-password` oder `new-password`.
- `off`
  - : Erlaubt nicht, dass der Browser oder Passwort-Manager das Passwortfeld automatisch ausfüllt. Beachten Sie, dass einige Software diesen Wert ignoriert, da er typischerweise nachteilig für die Fähigkeit der Benutzer ist, sichere Passwortpraktiken zu pflegen.
- `current-password`
  - : Erlauben Sie dem Browser oder Passwort-Manager, das aktuelle Passwort für die Website einzugeben. Dies bietet mehr Informationen als `on`, da es dem Browser oder Passwort-Manager ermöglicht, das derzeit bekannte Passwort für die Website automatisch in das Feld einzugeben, ohne ein neues vorzuschlagen.
- `new-password`
  - : Erlaubt dem Browser oder Passwort-Manager, ein neues Passwort für die Website automatisch einzugeben; dies wird in Formularen zum "Ändern Ihres Passworts" und "Neuer Benutzer" auf dem Feld verwendet, das den Benutzer nach einem neuen Passwort fragt. Das neue Passwort kann auf verschiedene Weisen generiert werden, abhängig vom verwendeten Passwort-Manager. Es kann ein neues vorgeschlagenes Passwort vorgeneriert werden, oder es kann dem Benutzer eine Schnittstelle zur Erstellung eines neuen Passworts gezeigt werden.

```html
<label for="userPassword">Password:</label>
<input id="userPassword" type="password" autocomplete="current-password" />
```

{{EmbedLiveSample("Allowing_autocomplete", 600, 40)}}

### Das Passwort verpflichtend machen

Um dem Browser des Benutzers mitzuteilen, dass das Passwortfeld einen gültigen Wert haben muss, bevor das Formular gesendet werden kann, geben Sie das Boolean-Attribut [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) an.

```html
<label for="userPassword">Password: </label>
<input id="userPassword" type="password" required />
<input type="submit" value="Submit" />
```

{{EmbedLiveSample("Making_the_password_mandatory", 600, 40)}}

### Einen Eingabemodus angeben

Wenn Ihre empfohlenen (oder erforderlichen) Passwortsyntaxregeln von einer anderen Texteingabeschnittstelle als der Standardtastatur profitieren würden, können Sie das [`inputmode`](/de/docs/Web/HTML/Reference/Elements/input#inputmode)-Attribut verwenden, um eine spezifische anzufordern. Der offensichtlichste Anwendungsfall dafür ist, wenn das Passwort numerisch sein muss (wie ein PIN). Mobile Geräte mit virtuellen Tastaturen könnten beispielsweise zu einem numerischen Tastenfeld anstelle einer vollständigen Tastatur wechseln, um das Eingeben des Passworts zu erleichtern. Wenn der PIN für die einmalige Verwendung gedacht ist, setzen Sie das [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete)-Attribut entweder auf `off` oder `one-time-code`, um darauf hinzuweisen, dass es nicht gespeichert wird.

```html
<label for="pin">PIN: </label>
<input id="pin" type="password" inputmode="numeric" />
```

{{EmbedLiveSample("Specifying_an_input_mode", 600, 40)}}

### Längenanforderungen festlegen

Wie üblich können Sie die [`minlength`](/de/docs/Web/HTML/Reference/Elements/input#minlength)- und [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength)-Attribute verwenden, um minimale und maximale akzeptable Längen für das Passwort festzulegen. Dieses Beispiel erweitert das vorherige, indem es festlegt, dass der PIN des Benutzers mindestens vier und höchstens acht Ziffern lang sein muss. Das [`size`](/de/docs/Web/HTML/Reference/Elements/input#size)-Attribut wird verwendet, um sicherzustellen, dass die Passworteingabesteuerung acht Zeichen breit ist.

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

Wie bei anderen Text-Eingabesteuerelementen können Sie die [`select()`](/de/docs/Web/API/HTMLInputElement/select)-Methode verwenden, um den gesamten Text im Passwortfeld auszuwählen.

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

Sie können auch [`selectionStart`](/de/docs/Web/API/HTMLInputElement/selectionStart) und [`selectionEnd`](/de/docs/Web/API/HTMLInputElement/selectionEnd) verwenden, um zu erfahren (oder festzulegen), welcher Bereich von Zeichen im Steuerelement derzeit ausgewählt ist, und [`selectionDirection`](/de/docs/Web/API/HTMLInputElement/selectionDirection), um festzustellen, welche Richtung die Auswahl hat (oder in welche Richtung sie je nach Plattform erweitert werden wird; siehe deren Dokumentation für eine Erklärung). Da der Text jedoch verschleiert ist, ist der Nutzen dieser Möglichkeiten etwas eingeschränkt.

## Validierung

Wenn Ihre Anwendung Zeichensatzbeschränkungen oder andere Anforderungen für den tatsächlichen Inhalt des eingegebenen Passworts hat, können Sie das [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern)-Attribut verwenden, um einen regulären Ausdruck festzulegen, der automatisch sicherstellt, dass Ihre Passwörter diesen Anforderungen entsprechen.

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

### Eine Sozialversicherungsnummer anfordern

Dieses Beispiel akzeptiert nur Eingaben, die dem Format für eine [gültige Sozialversicherungsnummer der Vereinigten Staaten](https://en.wikipedia.org/wiki/Social_Security_number#Structure) entsprechen. Diese Nummern, die in den USA für Steuer- und Identifikationszwecke verwendet werden, haben das Format "123-45-6789". Es existieren verschiedene Regeln dafür, welche Werte in jeder Gruppe erlaubt sind.

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

Dies verwendet ein [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern), das den eingegebenen Wert auf Zeichenfolgen beschränkt, die legale Sozialversicherungsnummern darstellen. Natürlich garantiert dieses Regex keine gültige SSN (da wir keinen Zugang zur Datenbank der Sozialversicherungsverwaltung haben), aber es stellt sicher, dass die Nummer eine sein könnte; es vermeidet generell Werte, die nicht gültig sein können. Darüber hinaus erlaubt es die Trennung der drei Gruppen von Ziffern durch ein Leerzeichen, einen Bindestrich ("-") oder gar nichts.

Das [`inputmode`](/de/docs/Web/HTML/Reference/Elements/input#inputmode) ist auf `numeric` gesetzt, um Geräte mit virtuellen Tastaturen dazu zu ermutigen, auf ein numerisches Tastaturlayout für eine einfachere Eingabe zu wechseln. Die Attribute [`minlength`](/de/docs/Web/HTML/Reference/Elements/input#minlength) und [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength) sind auf 9 und 12 gesetzt, um zu verlangen, dass der Wert mindestens neun und höchstens 12 Zeichen lang ist (erstere ohne Trennzeichen zwischen den Zifferngruppen und letztere mit ihnen). Das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut wird verwendet, um anzuzeigen, dass dieses Steuerelement einen Wert haben muss. Schließlich ist [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete) auf `off` gesetzt, um zu vermeiden, dass Passwort-Manager und Session-Wiederherstellungsfunktionen versuchen, dessen Wert zu setzen, da dies kein Passwort ist.

#### JavaScript

Das JavaScript zeigt die eingegebene SSN auf dem Bildschirm an, damit Sie sie sehen können. Dies untergräbt den Zweck eines Passwortfeldes, aber es hilft, mit dem `pattern` zu experimentieren.

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
      <td><strong>Unterstützte gemeinsame Attribute</strong></td>
      <td>
         <a href="/de/docs/Web/HTML/Reference/Elements/input#autocomplete"><code>autocomplete</code></a>,
         <a href="/de/docs/Web/HTML/Reference/Elements/input#inputmode"><code>inputmode</code></a>,
         <a href="/de/docs/Web/HTML/Reference/Elements/input#maxlength"><code>maxlength</code></a>,
         <a href="/de/docs/Web/HTML/Reference/Elements/input#minlength"><code>minlength</code></a>,
         <a href="/de/docs/Web/HTML/Reference/Elements/input#pattern"><code>pattern</code></a>,
         <a href="/de/docs/Web/HTML/Reference/Elements/input#placeholder"><code>placeholder</code></a>,
         <a href="/de/docs/Web/HTML/Reference/Elements/input#readonly"><code>readonly</code></a>,
         <a href="/de/docs/Web/HTML/Reference/Elements/input#required"><code>required</code></a> und
         <a href="/de/docs/Web/HTML/Reference/Elements/input#size"><code>size</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>IDL-Attribute</strong></td>
      <td>
        <code>selectionStart</code>, <code>selectionEnd</code>,
        <code>selectionDirection</code> und <code>value</code>
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
        [`setRangeText()`](/de/docs/Web/API/HTMLInputElement/setRangeText) und
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
