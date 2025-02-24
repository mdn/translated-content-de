---
title: <input type="password">
slug: Web/HTML/Element/input/password
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

`<input>`-Elemente des Typs **`password`** bieten eine Möglichkeit, wie der Benutzer sicher ein Passwort eingeben kann.

Das Element wird als einzeiliger Klartext-Editor angezeigt, in dem der Text unkenntlich gemacht wird, sodass er nicht gelesen werden kann, üblicherweise durch Ersetzen jedes Zeichens durch ein Symbol wie das Sternchen ("\*") oder einen Punkt ("•"). Dieses Zeichen variiert je nach {{Glossary("user_agent", "User Agent")}} und Betriebssystem.

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

Das genaue Verhalten des Eingabeprozesses kann von Browser zu Browser variieren. Einige Browser zeigen für einen Moment das eingegebene Zeichen an, bevor es unkenntlich gemacht wird, während andere dem Benutzer erlauben, die Anzeige von Klartext ein- und auszuschalten. Beide Ansätze helfen einem Benutzer, zu überprüfen, ob er das beabsichtigte Passwort eingegeben hat, was besonders auf mobilen Geräten schwierig sein kann.

> [!NOTE]
> Alle Formulare, die sensible Informationen wie Passwörter betreffen (wie z.B. Anmeldeformulare), sollten über HTTPS bereitgestellt werden. Viele Browser implementieren inzwischen Mechanismen, um vor unsicheren Anmeldeformularen zu warnen; siehe [Unsichere Passwörter](/de/docs/Web/Security/Insecure_passwords).

## Wert

Das [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut enthält einen String, dessen Wert der aktuelle Inhalt des Textbearbeitungsfeldes ist, das zum Eingeben des Passworts verwendet wird. Wenn der Benutzer noch nichts eingegeben hat, ist dieser Wert ein leerer String (`""`). Wenn die [`required`](/de/docs/Web/HTML/Element/input#required)-Eigenschaft angegeben ist, muss das Passwort-Eingabefeld einen anderen Wert als einen leeren String enthalten, um gültig zu sein.

Wenn das [`pattern`](/de/docs/Web/HTML/Element/input#pattern)-Attribut angegeben ist, wird der Inhalt eines `password`-Steuerelements nur als gültig angesehen, wenn der Wert die Validierung besteht; siehe [Validierung](#validierung) für weitere Informationen.

> [!NOTE]
> Die Zeilenumbruchzeichen (U+000A) und Wagenrücklaufzeichen (U+000D) sind in einem `password`-Wert nicht erlaubt. Beim Setzen des Wertes eines Passwort-Steuerelements werden Zeilenumbruch- und Wagenrücklaufzeichen aus dem Wert entfernt.

## Zusätzliche Attribute

Zusätzlich zu den [globalen Attributen](/de/docs/Web/HTML/Global_attributes) und den Attributen, die für alle {{HTMLElement("input")}}-Elemente unabhängig von ihrem Typ gelten, unterstützen Passwort-Feld-Eingaben die folgenden Attribute.

> [!NOTE]
> Das globale [`autocorrect`](/de/docs/Web/HTML/Global_attributes/autocorrect)-Attribut kann zu Passwort-Eingaben hinzugefügt werden, aber der gespeicherte Zustand ist immer `off`.

### maxlength

Die maximale Zeichenanzahl (gemessen in UTF-16 Code-Einheiten), die der Benutzer in das Passwortfeld eingeben kann. Dies muss ein ganzzahliger Wert von 0 oder höher sein. Wenn keine `maxlength` angegeben oder ein ungültiger Wert angegeben ist, hat das Passwortfeld keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

Die Eingabe wird die [Constraint-Validierung](/de/docs/Web/HTML/Constraint_validation) nicht bestehen, wenn die Länge des in das Feld eingegebenen Textes länger als `maxlength` UTF-16 Code-Einheiten ist. Die Constraint-Validierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### minlength

Die minimale Zeichenanzahl (gemessen in UTF-16 Code-Einheiten), die der Benutzer in das Passwort-Eingabefeld eingeben kann. Dies muss ein nicht-negativer ganzzahliger Wert sein, der kleiner oder gleich dem durch `maxlength` angegebenen Wert ist. Wenn keine `minlength` angegeben oder ein ungültiger Wert angegeben ist, hat die Passwort-Eingabe keine Mindestlänge.

Die Eingabe wird die [Constraint-Validierung](/de/docs/Web/HTML/Constraint_validation) nicht bestehen, wenn die Länge des in das Feld eingegebenen Textes weniger als `minlength` UTF-16 Code-Einheiten beträgt. Die Constraint-Validierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### pattern

Das `pattern`-Attribut, wenn angegeben, ist ein regulärer Ausdruck, den der [`value`](/de/docs/Web/HTML/Element/input#value)-Wert des Eingabefelds erfüllen muss, um die [Constraint-Validierung](/de/docs/Web/HTML/Constraint_validation) zu bestehen. Es muss ein gültiger JavaScript-Regulärer-Ausdruck sein, wie er vom {{jsxref("RegExp")}}-Typ verwendet wird und in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert ist; das 'u'-Flag ist beim Kompilieren des regulären Ausdrucks angegeben, so dass das Muster als eine Sequenz von Unicode-Codepunkten behandelt wird, anstatt als {{Glossary("ASCII", "ASCII")}}. Um den Mustertest herum sollten keine Vorwärts-Schrägstriche spezifiziert werden.

Wenn das angegebene Muster nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut wird vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Element/input#title)-Attribut, um Text zu spezifizieren, den die meisten Browser als Tooltip anzeigen werden, um zu erklären, welche Anforderungen erfüllt werden müssen, um das Muster zu erfüllen. Sie sollten auch andere erklärende Texte in der Nähe einfügen.

Die Verwendung eines Musters wird für Passworteingaben dringend empfohlen, um sicherzustellen, dass gültige Passwörter mit einer großen Auswahl an Zeichensätzen von Ihren Benutzern ausgewählt und verwendet werden. Mit einem Muster können Sie Regelungen zu Groß- und Kleinschreibung vorschreiben, die Verwendung einer bestimmten Anzahl von Ziffern und/oder Satzzeichenzeichen erfordern und so weiter. Siehe den Abschnitt [Validierung](#validierung) für Details und ein Beispiel.

### placeholder

Das `placeholder`-Attribut ist ein String, der dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Informationen im Feld erwartet werden. Es sollte ein Wort oder eine kurze Phrase sein, die den erwarteten Datentyp demonstriert, anstatt eine erklärende Nachricht. Der Text _darf keine_ Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt der Steuerung eine Richtungsabhängigkeit ({{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}) hat, jedoch der Platzhalter in der entgegengesetzten Richtung dargestellt werden soll, können Sie die bidirektionalen Algorithmus-Formatierungszeichen von Unicode verwenden, um die Richtung innerhalb des Platzhalters zu überschreiben; siehe [Wie man Unicode-Steuerzeichen für bidi-Text verwendet](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für mehr Informationen.

> [!NOTE]
> Vermeiden Sie die Verwendung des `placeholder`-Attributs, wenn Sie können. Es ist semantisch nicht so nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [`<input>` Labels](/de/docs/Web/HTML/Element/input#labels) für mehr Informationen.

### readonly

Ein boolesches Attribut, das, wenn vorhanden, bedeutet, dass dieses Feld nicht vom Benutzer bearbeitet werden kann. Sein `value` kann jedoch weiterhin von JavaScript-Code geändert werden, der direkt den Wert der [`HTMLInputElement.value`](/de/docs/Web/API/HTMLInputElement)-Eigenschaft setzt.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Auswirkungen auf Eingaben, bei denen das `readonly`-Attribut ebenfalls angegeben ist.

### size

Das `size`-Attribut ist ein numerischer Wert, der angibt, wie viele Zeichen breit das Eingabefeld sein soll. Der Wert muss eine Zahl größer als null sein, und der Standardwert ist 20. Da Zeichenbreiten variieren, kann dies mehr oder weniger exakt sein und sollte nicht darauf verlassen werden; das resultierende Eingabefeld kann schmaler oder breiter als die angegebene Anzahl von Zeichen sein, abhängig von den Zeichen und der Schriftart ({{cssxref("font")}} Einstellungen in Gebrauch).

Dies setzt _nicht_ eine Grenze dafür, wie viele Zeichen der Benutzer in das Feld eingeben kann. Es gibt nur an, wie viele ungefähr gleichzeitig gesehen werden können. Um ein oberes Limit für die Länge der Eingabedaten festzulegen, verwenden Sie das [`maxlength`](#maxlength)-Attribut.

## Verwendung von Passworteingaben

Passwort-Eingabefelder funktionieren im Allgemeinen wie andere Texteingabefelder; der Hauptunterschied ist das Unkenntlichmachen des Inhalts, um zu verhindern, dass Personen in der Nähe des Benutzers das Passwort lesen.

### Eine grundlegende Passworteingabe

Hier sehen wir die grundlegendste Passworteingabe, bei der ein Label mit dem {{HTMLElement("label")}}-Element erstellt wird.

```html
<label for="userPassword">Password: </label>
<input id="userPassword" type="password" />
```

{{EmbedLiveSample("A_basic_password_input", 600, 40)}}

### Automatische Vervollständigung erlauben

Um es dem Passwort-Manager des Benutzers zu ermöglichen, das Passwort automatisch einzugeben, geben Sie das [`autocomplete`](/de/docs/Web/HTML/Element/input#autocomplete)-Attribut an. Für Passwörter sollte dies in der Regel einer der folgenden Werte sein:

- `on`
  - : Dem Browser oder einem Passwort-Manager erlauben, das Passwortfeld automatisch auszufüllen. Dies ist nicht so informativ wie die Verwendung von `current-password` oder `new-password`.
- `off`
  - : Dem Browser oder Passwort-Manager nicht erlauben, das Passwortfeld automatisch auszufüllen. Beachten Sie, dass einige Software diese Einstellung ignoriert, da sie typischerweise die Fähigkeit der Benutzer gefährdet, sichere Passwortpraktiken aufrechtzuerhalten.
- `current-password`
  - : Dem Browser oder Passwort-Manager erlauben, das aktuelle Passwort für die Seite einzugeben. Dies bietet mehr Informationen als `on`, da es dem Browser oder Passwort-Manager ermöglicht, das aktuell bekannte Passwort für die Seite automatisch in das Feld einzugeben, jedoch nicht, ein neues vorzuschlagen.
- `new-password`
  - : Dem Browser oder Passwort-Manager erlauben, ein neues Passwort für die Seite automatisch einzugeben; dies wird auf "Passwort ändern" und "neuer Benutzer"-Formularen auf dem Feld verwendet, das den Benutzer nach einem neuen Passwort fragt. Das neue Passwort kann auf verschiedene Arten generiert werden, abhängig vom verwendeten Passwort-Manager. Es kann ein neues vorgeschlagenes Passwort ausgefüllt werden, oder es könnte dem Benutzer eine Schnittstelle zur Erstellung eines angezeigt werden.

```html
<label for="userPassword">Password:</label>
<input id="userPassword" type="password" autocomplete="current-password" />
```

{{EmbedLiveSample("Allowing_autocomplete", 600, 40)}}

### Das Passwort obligatorisch machen

Um dem Browser des Benutzers mitzuteilen, dass das Passwortfeld einen gültigen Wert haben muss, bevor das Formular abgeschickt werden kann, geben Sie das boolesche [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut an.

```html
<label for="userPassword">Password: </label>
<input id="userPassword" type="password" required />
<input type="submit" value="Submit" />
```

{{EmbedLiveSample("Making_the_password_mandatory", 600, 40)}}

### Einen Eingabemodus festlegen

Wenn Ihre empfohlenen (oder erforderlichen) Passwortsyntaxregeln von einer alternativen Texteingabeschnittstelle als der Standardtastatur profitieren würden, können Sie das [`inputmode`](/de/docs/Web/HTML/Element/input#inputmode)-Attribut verwenden, um eine spezifische anzufordern. Der offensichtlichste Anwendungsfall hierfür ist, wenn das Passwort numerisch sein muss (wie z.B. bei einer PIN). Mobile Geräte mit virtuellen Tastaturen könnten beispielsweise zu einem numerischen Tastaturlayout statt einer vollständigen Tastatur wechseln, um die Passworteingabe zu erleichtern. Wenn die PIN nur einmal verwendet werden soll, setzen Sie das [`autocomplete`](/de/docs/Web/HTML/Element/input#autocomplete)-Attribut auf entweder `off` oder `one-time-code`, um anzugeben, dass sie nicht gespeichert werden soll.

```html
<label for="pin">PIN: </label>
<input id="pin" type="password" inputmode="numeric" />
```

{{EmbedLiveSample("Specifying_an_input_mode", 600, 40)}}

### Längenanforderungen festlegen

Wie üblich können Sie die [`minlength`](/de/docs/Web/HTML/Element/input#minlength)- und [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength)-Attribute verwenden, um minimale und maximale akzeptable Längen für das Passwort festzulegen. Dieses Beispiel erweitert das vorherige, indem es angibt, dass die PIN des Benutzers mindestens vier und höchstens acht Ziffern lang sein muss. Das [`size`](/de/docs/Web/HTML/Element/input#size)-Attribut wird verwendet, um sicherzustellen, dass die Passwort-Eingabekontrolle acht Zeichen breit ist.

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

Sie können auch [`selectionStart`](/de/docs/Web/API/HTMLInputElement/selectionStart) und [`selectionEnd`](/de/docs/Web/API/HTMLInputElement/selectionEnd) verwenden, um den Bereich der Zeichen zu ermitteln (oder festzulegen), der derzeit im Steuerelement ausgewählt ist, und [`selectionDirection`](/de/docs/Web/API/HTMLInputElement/selectionDirection), um zu wissen, in welche Richtung die Auswahl erfolgte (oder erweitert wird, abhängig von Ihrer Plattform; siehe deren Dokumentation für eine Erklärung). Da der Text jedoch unkenntlich ist, ist der Nutzen dieser Funktionen etwas eingeschränkt.

## Validierung

Wenn Ihre Anwendung Zeichensatzbeschränkungen oder andere Anforderungen an den tatsächlichen Inhalt des eingegebenen Passworts hat, können Sie das [`pattern`](/de/docs/Web/HTML/Element/input#pattern)-Attribut verwenden, um einen regulären Ausdruck festzulegen, der verwendet wird, um automatisch sicherzustellen, dass Ihre Passwörter diese Anforderungen erfüllen.

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

Dieses Beispiel akzeptiert nur Eingaben, die dem Format für eine [gültige US-Sozialversicherungsnummer](https://en.wikipedia.org/wiki/Social_Security_number#Structure) entsprechen. Diese Nummern, die in den USA für Steuer- und Identifikationszwecke verwendet werden, haben die Form "123-45-6789". Es gibt verschiedene Regeln, welche Werte in jeder Gruppe erlaubt sind.

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

Dies verwendet ein [`pattern`](/de/docs/Web/HTML/Element/input#pattern), das den eingegebenen Wert auf Zeichenfolgen beschränkt, die legale Sozialversicherungsnummern darstellen. Offensichtlich garantiert diese Regex nicht eine gültige Sozialversicherungsnummer (da wir keinen Zugriff auf die Datenbank der Sozialversicherungsbehörde haben), aber sie stellt sicher, dass die Nummer eine sein könnte; es werden allgemein Werte vermieden, die nicht gültig sein können. Darüber hinaus erlaubt es, dass die drei Gruppen von Ziffern durch ein Leerzeichen, ein Bindestrich ("-") oder nichts getrennt werden.

Das [`inputmode`](/de/docs/Web/HTML/Element/input#inputmode) ist auf `numeric` gesetzt, um Geräte mit virtuellen Tastaturen zu ermutigen, auf ein numerisches Tastaturlayout für eine einfachere Eingabe umzuschalten. Die [`minlength`](/de/docs/Web/HTML/Element/input#minlength)- und [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength)-Attribute sind auf 9 bzw. 12 gesetzt, um zu verlangen, dass der Wert mindestens neun und höchstens 12 Zeichen beträgt (die ersteren ohne Trennzeichen zwischen den Zifferngruppen und die letzteren mit ihnen). Das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut wird verwendet, um anzugeben, dass dieses Steuerelement einen Wert haben muss. Schließlich wird [`autocomplete`](/de/docs/Web/HTML/Element/input#autocomplete) auf `off` gesetzt, um zu verhindern, dass Passwort-Manager und Sitzungswiederherstellungsfunktionen versuchen, seinen Wert zu setzen, da es sich hier überhaupt nicht um ein Passwort handelt.

#### JavaScript

Das JavaScript zeigt die eingegebene Sozialversicherungsnummer auf dem Bildschirm an, damit Sie sie sehen können. Dies widerspricht dem Zweck eines Passwortfeldes, aber es hilft bei Experimenten mit dem `pattern`.

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
        Ein String, der ein Passwort repräsentiert, oder leer
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
      <td><strong>Unterstützte Gemeinsame Attribute</strong></td>
      <td>
         <a href="/de/docs/Web/HTML/Element/input#autocomplete"><code>autocomplete</code></a>,
         <a href="/de/docs/Web/HTML/Element/input#inputmode"><code>inputmode</code></a>,
         <a href="/de/docs/Web/HTML/Element/input#maxlength"><code>maxlength</code></a>,
         <a href="/de/docs/Web/HTML/Element/input#minlength"><code>minlength</code></a>,
         <a href="/de/docs/Web/HTML/Element/input#pattern"><code>pattern</code></a>,
         <a href="/de/docs/Web/HTML/Element/input#placeholder"><code>placeholder</code></a>,
         <a href="/de/docs/Web/HTML/Element/input#readonly"><code>readonly</code></a>,
         <a href="/de/docs/Web/HTML/Element/input#required"><code>required</code></a> und
         <a href="/de/docs/Web/HTML/Element/input#size"><code>size</code></a>
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
        [`setRangeText()`](/de/docs/Web/API/HTMLInputElement/setRangeText)
        und
        [`setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange)
      </td>
    </tr>
    <tr>
      <td><strong>Implizierte ARIA Rolle</strong></td>
      <td><a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">keine entsprechende Rolle</a></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
