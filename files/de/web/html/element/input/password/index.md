---
title: <input type="password">
slug: Web/HTML/Element/input/password
l10n:
  sourceCommit: 709d3a56661f895e5b0a67ff969e381d503ddd45
---

{{HTMLSidebar}}

`<input>`-Elemente des Typs **`password`** bieten eine Möglichkeit, dass der Benutzer ein Passwort sicher eingibt.

Das Element wird als einzeiliger einfacher Texteditor-Steuerelement dargestellt, bei dem der Text maskiert ist, sodass er nicht gelesen werden kann, in der Regel indem jedes Zeichen durch ein Symbol wie das Sternchen ("\*") oder einen Punkt ("•") ersetzt wird. Dieses Zeichen variiert je nach {{Glossary("user_agent", "user agent")}} und Betriebssystem.

{{EmbedInteractiveExample("pages/tabbed/input-password.html", "tabbed-standard")}}

Das genaue Verhalten des Eingabeprozesses kann je nach Browser variieren. Einige Browser zeigen das eingegebene Zeichen kurz an, bevor es es maskiert, während andere dem Benutzer ermöglichen, die Anzeige von Klartext ein- und auszuschalten. Beide Ansätze helfen dem Benutzer dabei, sicherzustellen, dass er das beabsichtigte Passwort eingegeben hat, was insbesondere auf mobilen Geräten schwierig sein kann.

> [!NOTE]
> Alle Formulare, die sensible Informationen wie Passwörter betreffen (wie Anmeldeformulare), sollten über HTTPS bereitgestellt werden. Viele Browser implementieren mittlerweile Mechanismen, um vor unsicheren Anmeldeformularen zu warnen; siehe [Unsichere Passwörter](/de/docs/Web/Security/Insecure_passwords).

## Wert

Das [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut enthält einen String, dessen Wert der aktuelle Inhalt des zum Eingeben des Passworts verwendeten Textbearbeitungselements ist. Hat der Benutzer noch nichts eingegeben, ist dieser Wert ein leerer String (`""`). Wenn die [`required`](/de/docs/Web/HTML/Element/input#required)-Eigenschaft angegeben ist, muss das Passwort-Eingabefeld einen anderen Wert als einen leeren String enthalten, um gültig zu sein.

Wenn das [`pattern`](/de/docs/Web/HTML/Element/input#pattern)-Attribut angegeben ist, wird der Inhalt eines `password`-Feldes nur dann als gültig angesehen, wenn der Wert die Validierung besteht; siehe [Validierung](#validierung) für weitere Informationen.

> [!NOTE]
> Die Zeichen Zeilenvorschub (U+000A) und Wagenrücklauf (U+000D) sind in einem `password`-Wert nicht erlaubt. Wenn der Wert eines Passwort-Eingabefelds festgelegt wird, werden Zeilenvorschub- und Wagenrücklaufzeichen aus dem Wert entfernt.

## Zusätzliche Attribute

Zusätzlich zu den [globalen Attributen](/de/docs/Web/HTML/Global_attributes) und den Attributen, die auf alle {{HTMLElement("input")}}-Elemente unabhängig von ihrem Typ angewendet werden, unterstützen Passwort-Felder die folgenden Attribute.

> [!NOTE]
> Das globale Attribut [`autocorrect`](/de/docs/Web/HTML/Global_attributes/autocorrect) kann zu Passwort-Eingaben hinzugefügt werden, aber der gespeicherte Zustand ist immer `off`.

### maxlength

Die maximale Zeichenlänge (gemessen in UTF-16-Codeeinheiten), die der Benutzer in das Passwort-Feld eingeben kann. Dies muss ein ganzzahliger Wert von 0 oder höher sein. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert festgelegt wird, hat das Passwort-Feld keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

Die Eingabe wird die [Constraint-Validierung](/de/docs/Web/HTML/Constraint_validation) nicht bestehen, wenn die Länge des in das Feld eingegebenen Textes länger ist als `maxlength` UTF-16-Codeeinheiten. Die Constraint-Validierung wird nur angewendet, wenn der Wert durch den Benutzer geändert wird.

### minlength

Die minimale Zeichenlänge (gemessen in UTF-16-Codeeinheiten), die der Benutzer in das Passwort-Eingabefeld eingeben kann. Dies muss ein nicht-negativer ganzzahliger Wert sein, der kleiner oder gleich dem Wert sein muss, der durch `maxlength` angegeben ist. Wenn kein `minlength` angegeben ist oder ein ungültiger Wert festgelegt wird, hat das Passwort keine Mindestlänge.

Die Eingabe wird die [Constraint-Validierung](/de/docs/Web/HTML/Constraint_validation) nicht bestehen, wenn die Länge des in das Feld eingegebenen Textes weniger als `minlength` UTF-16-Codeeinheiten beträgt. Die Constraint-Validierung wird nur angewendet, wenn der Wert durch den Benutzer verändert wird.

### pattern

Beim angegebenen `pattern`-Attribut handelt es sich um einen regulären Ausdruck, gegen den der [`value`](/de/docs/Web/HTML/Element/input#value) des Inputs bestehen muss, um die [Constraint-Validierung](/de/docs/Web/HTML/Constraint_validation) zu bestehen. Es muss ein gültiger regulärer JavaScript-Ausdruck sein, wie er vom {{jsxref("RegExp")}}-Typ verwendet wird und in unserem [Leitfaden über reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert ist; das `'u'`-Flag wird beim Kompilieren des regulären Ausdrucks spezifiziert, damit das Muster als Folge von Unicode-Codepunkten anstelle von {{Glossary("ASCII", "ASCII")}} behandelt wird. Es sollte keine Schrägstriche um den Mustertest herum angegeben werden.

Wenn das angegebene Muster nicht angegeben wird oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut wird vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Element/input#title)-Attribut, um Text anzugeben, den die meisten Browser als Tooltip anzeigen, um zu erklären, welche Anforderungen erfüllt sein müssen, um das Muster zu erfüllen. Sie sollten auch andere erklärende Texte in der Nähe einschließen.

Die Verwendung eines Musters wird für Passwort-Eingaben dringend empfohlen, um sicherzustellen, dass gültige Passwörter mit einer Vielzahl von Zeichensatzklassen ausgewählt und verwendet werden. Mit einem Muster können Sie Regeln für Groß- und Kleinschreibung festlegen, die Verwendung einer bestimmten Anzahl von Ziffern und/oder Satzzeichen erzwingen usw. Weitere Details und ein Beispiel finden Sie im Abschnitt [Validierung](#validierung).

### placeholder

Das `placeholder`-Attribut ist ein String, der dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Informationen in dem Feld erwartet werden. Es sollte ein Wort oder eine kurze Phrase sein, die den erwarteten Typ der Daten demonstriert, anstatt eine erklärende Nachricht zu sein. Der Text _darf_ keine Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt des Steuerelements eine Richtung (LTR oder RTL) hat, der Platzhalter jedoch in der entgegengesetzten Richtung dargestellt werden muss, können Sie Unicode-Bidirektionale-Algorithmus-Formatierungszeichen verwenden, um die Richtungen innerhalb des Platzhalters zu überschreiben; siehe [Anleitung zur Verwendung von Unicode-Bidi-Steuerelementen](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für weitere Informationen.

> [!NOTE]
> Vermeiden Sie die Verwendung des `placeholder`-Attributs, wenn Sie können. Es ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [`<input>`-Labels](/de/docs/Web/HTML/Element/input#labels) für weitere Informationen.

### readonly

Ein Boolean-Attribut, das, wenn es vorhanden ist, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch immer noch von JavaScript-Code geändert werden, der direkt den Wert der [`HTMLInputElement.value`](/de/docs/Web/API/HTMLInputElement)-Eigenschaft setzt.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Auswirkungen auf Eingaben mit dem auch spezifizierten `readonly`-Attribut.

### size

Das `size`-Attribut ist ein numerischer Wert, der angibt, wie viele Zeichen breit das Eingabefeld sein soll. Der Wert muss eine Zahl größer als null sein, und der Standardwert ist 20. Da Zeichenbreiten variieren, kann dies mehr oder weniger genau sein und sollte nicht darauf verlassen werden, dass es so ist; das resultierende Eingabe kann schmaler oder breiter sein als die angegebene Anzahl von Zeichen, abhängig von den Zeichen und den verwendeten Schriftart-( {{cssxref("font")}}) Einstellungen.

Dies setzt _kein_ Limit für die Anzahl Zeichen, die der Benutzer in das Feld eingeben kann. Es spezifiziert nur ungefähr, wie viele gleichzeitig sichtbar sein können. Um eine Obergrenze für die Länge der Eingabedaten festzulegen, verwenden Sie das [`maxlength`](#maxlength)-Attribut.

## Verwendung von Passwort-Eingaben

Passwort-Eingabefelder funktionieren im Allgemeinen genauso wie andere Text-Eingabefelder; der Hauptunterschied besteht in der Maskierung des Inhalts, um zu verhindern, dass Personen in der Nähe des Benutzers das Passwort lesen.

### Eine einfache Passwort-Eingabe

Hier sehen wir die grundlegendste Passwort-Eingabe mit einem Label, das mit dem {{HTMLElement("label")}}-Element erstellt wurde.

```html
<label for="userPassword">Password: </label>
<input id="userPassword" type="password" />
```

{{EmbedLiveSample("A_simple_password_input", 600, 40)}}

### Automatisches Ausfüllen zulassen

Um dem Passwort-Manager des Benutzers zu erlauben, das Passwort automatisch einzugeben, geben Sie das [`autocomplete`](/de/docs/Web/HTML/Element/input#autocomplete)-Attribut an. Für Passwörter sollte dies in der Regel einer der folgenden Werte sein:

- `on`
  - : Erlauben Sie dem Browser oder einem Passwort-Manager, das Passwortfeld automatisch auszufüllen. Dies ist nicht so informativ wie die Verwendung von `current-password` oder `new-password`.
- `off`
  - : Erlauben Sie nicht, dass der Browser oder Passwort-Manager das Passwortfeld automatisch ausfüllt. Beachten Sie, dass einige Software diesen Wert ignoriert, da er im Allgemeinen die Fähigkeiten der Benutzer beeinträchtigt, sichere Passwortpraktiken aufrechtzuerhalten.
- `current-password`
  - : Erlauben Sie dem Browser oder Passwort-Manager, das aktuelle Passwort für die Seite einzugeben. Dies bietet mehr Informationen als `on`, da es dem Browser oder Passwort-Manager ermöglicht, das aktuell bekannte Passwort für die Seite automatisch im Feld einzugeben, jedoch nicht ein neues vorzuschlagen.
- `new-password`
  - : Erlauben Sie dem Browser oder Passwort-Manager, ein neues Passwort für die Seite automatisch einzugeben; dies wird auf „Passwort ändern“- und „Neuer Benutzer“-Formularen im Feld verwendet, in dem der Benutzer nach einem neuen Passwort gefragt wird. Das neue Passwort kann auf verschiedene Arten generiert werden, abhängig vom verwendeten Passwort-Manager. Es kann ein neues vorgeschlagenes Passwort ausgefüllt werden, oder es könnte dem Benutzer eine Schnittstelle zum Erstellen eines angeboten werden.

```html
<label for="userPassword">Password:</label>
<input id="userPassword" type="password" autocomplete="current-password" />
```

{{EmbedLiveSample("Allowing_autocomplete", 600, 40)}}

### Das Passwort als Pflichtfeld festlegen

Um dem Browser des Benutzers mitzuteilen, dass das Passwortfeld vor dem Absenden des Formulars einen gültigen Wert haben muss, geben Sie das Boolean-Attribut [`required`](/de/docs/Web/HTML/Element/input#required) an.

```html
<label for="userPassword">Password: </label>
<input id="userPassword" type="password" required />
<input type="submit" value="Submit" />
```

{{EmbedLiveSample("Making_the_password_mandatory", 600, 40)}}

### Einen Eingabemodus festlegen

Wenn die empfohlenen (oder erforderlichen) Passwort-Syntaxregeln von einer alternativen Texteingabeschnittstelle als der Standardtastatur profitieren würden, können Sie das [`inputmode`](/de/docs/Web/HTML/Element/input#inputmode)-Attribut verwenden, um eine spezielle anzufordern. Der offensichtlichste Anwendungsfall hierfür ist, wenn das Passwort numerisch (wie eine PIN) sein muss. Zum Beispiel können mobile Geräte mit virtuellen Tastaturen dafür entscheiden, zu einem numerischen Tastaturlayout anstelle einer vollständigen Tastatur zu wechseln, um die Passworteingabe zu erleichtern. Wenn die PIN für den einmaligen Gebrauch ist, setzen Sie das [`autocomplete`](/de/docs/Web/HTML/Element/input#autocomplete)-Attribut auf entweder `off` oder `one-time-code`, um vorzuschlagen, dass es nicht gespeichert wird.

```html
<label for="pin">PIN: </label>
<input id="pin" type="password" inputmode="numeric" />
```

{{EmbedLiveSample("Specifying_an_input_mode", 600, 40)}}

### Längenanforderungen festlegen

Wie gewöhnlich können Sie die [`minlength`](/de/docs/Web/HTML/Element/input#minlength)- und [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength)-Attribute verwenden, um minimale und maximale akzeptable Längen für das Passwort festzulegen. Dieses Beispiel erweitert das vorherige, indem spezifiziert wird, dass die PIN des Benutzers mindestens vier und maximal acht Ziffern lang sein muss. Das [`size`](/de/docs/Web/HTML/Element/input#size)-Attribut wird verwendet, um sicherzustellen, dass das Passwort-Eingabefeld acht Zeichen breit ist.

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

Wie bei anderen textuellen Eingabesteuerelementen können Sie die [`select()`](/de/docs/Web/API/HTMLInputElement/select)-Methode verwenden, um den gesamten Text im Passwortfeld auszuwählen.

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

Sie können auch [`selectionStart`](/de/docs/Web/API/HTMLInputElement/selectionStart) und [`selectionEnd`](/de/docs/Web/API/HTMLInputElement/selectionEnd) verwenden, um den aktuellen Bereich der im Steuerelement ausgewählten Zeichen zu erhalten (oder zu setzen), und [`selectionDirection`](/de/docs/Web/API/HTMLInputElement/selectionDirection), um zu wissen, in welche Richtung die Auswahl erfolgt ist (oder erweitert wird, abhängig von Ihrer Plattform; siehe deren Dokumentation für eine Erklärung). Da der Text jedoch maskiert ist, ist der Nutzen dieser Funktionen etwas begrenzt.

## Validierung

Wenn Ihre Anwendung Zeichensatzbeschränkungen oder andere Anforderungen an den tatsächlichen Inhalt des eingegebenen Passworts hat, können Sie das [`pattern`](/de/docs/Web/HTML/Element/input#pattern)-Attribut verwenden, um einen regulären Ausdruck festzulegen, der verwendet werden soll, um automatisch sicherzustellen, dass Ihre Passwörter diese Anforderungen erfüllen.

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

### Anforderung einer Sozialversicherungsnummer

Dieses Beispiel akzeptiert nur Eingaben, die dem Format einer [gültigen US-amerikanischen Sozialversicherungsnummer](https://de.wikipedia.org/wiki/Sozialversicherungsnummer) entsprechen. Diese Zahlen, die in den USA für Steuer- und Identifikationszwecke verwendet werden, haben die Form „123-45-6789“. Es gibt verschiedene Regeln dafür, welche Werte in jeder Gruppe zulässig sind.

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

Dies verwendet ein [`pattern`](/de/docs/Web/HTML/Element/input#pattern), das den eingegebenen Wert auf Strings limitiert, die rechtlich gültige Sozialversicherungsnummern darstellen. Offensichtlich garantiert dieses Regexp keine gültige SSN (da wir keinen Zugang zur Datenbank der Sozialversicherungsbehörde haben), aber es stellt sicher, dass die Nummer eine sein könnte; es vermeidet im Allgemeinen Werte, die nicht gültig sein können. Darüber hinaus erlaubt es, dass die drei Gruppen von Ziffern durch ein Leerzeichen, einen Bindestrich („-“) oder durch nichts getrennt werden.

Das [`inputmode`](/de/docs/Web/HTML/Element/input#inputmode) ist auf `numeric` gesetzt, um Geräten mit virtuellen Tastaturen zu empfehlen, zu einem numerischen Tastenfeld zu wechseln, um die Eingabe zu erleichtern. Die [`minlength`](/de/docs/Web/HTML/Element/input#minlength) und [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength) Attribute sind auf 9 bzw. 12 gesetzt, um zu verlangen, dass der Wert mindestens neun und maximal 12 Zeichen lang ist (erstere ohne Trennzeichen zwischen den Zifferngruppen und letztere mit ihnen). Das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut wird verwendet, um anzuzeigen, dass dieses Feld einen Wert haben muss. Schließlich ist [`autocomplete`](/de/docs/Web/HTML/Element/input#autocomplete) auf `off` gesetzt, um zu vermeiden, dass Passwort-Manager und die Sitzungswiederherstellungsfunktionen versuchen, seinen Wert zu setzen, da dies überhaupt kein Passwort ist.

#### JavaScript

Dies ist nur ein einfacher Code, um die eingegebene SSN auf dem Bildschirm anzuzeigen, damit Sie sie sehen können. Natürlich widerspricht dies dem Zweck eines Passwortfeldes, aber es ist hilfreich, um mit dem `pattern` zu experimentieren.

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
      <td><strong>Unterstützte gemeinsame Attribute</strong></td>
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
      <td><strong>Methode</strong></td>
      <td>
        [`select()`](/de/docs/Web/API/HTMLInputElement/select),
        [`setRangeText()`](/de/docs/Web/API/HTMLInputElement/setRangeText)
        und
        [`setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange)
      </td>
    </tr>
    <tr>
      <td><strong>Implizierte ARIA-Rolle</strong></td>
      <td><a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">Keine entsprechende Rolle</a></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Kompatibilität von CSS-Eigenschaften](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
