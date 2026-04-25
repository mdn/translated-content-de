---
title: '`<input type="password">` HTML-Attributwert'
short-title: <input type="password">
slug: Web/HTML/Reference/Elements/input/password
l10n:
  sourceCommit: bf5017c389132af39b50106cf1763fa7106e87b4
---

`<input>`-Elemente des Typs **`password`** ermöglichen es dem Benutzer, ein Passwort sicher einzugeben.

Das Element wird als einzeiliges Texteditor-Steuerelement dargestellt, bei dem der Text so verschleiert wird, dass er nicht lesbar ist, normalerweise indem jedes Zeichen durch ein Symbol wie das Sternchen ("\*") oder einen Punkt ("•") ersetzt wird. Dieses Zeichen variiert je nach {{Glossary("user_agent", "User Agent")}} und Betriebssystem.

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

Das genaue Verhalten des Eingabevorgangs kann je nach Browser variieren. Einige Browser zeigen das eingegebene Zeichen für einen Moment an, bevor es verschleiert wird, während andere es dem Benutzer ermöglichen, die Anzeige von Klartext ein- und auszuschalten. Beide Ansätze helfen dem Benutzer zu überprüfen, dass er das beabsichtigte Passwort eingegeben hat, was besonders auf mobilen Geräten schwierig sein kann.

> [!NOTE]
> Alle Formulare mit sensiblen Informationen wie Passwörtern (z.B. Anmeldeformulare) sollten über HTTPS bereitgestellt werden. Viele Browser setzen inzwischen Mechanismen um, um vor unsicheren Anmeldeformularen zu warnen.

## Wert

Das [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut enthält eine Zeichenkette, deren Wert der aktuelle Inhalt des zur Eingabe des Passworts verwendeten Textbearbeitungssteuerfelds ist. Wenn der Benutzer noch nichts eingegeben hat, ist dieser Wert eine leere Zeichenkette (`""`). Wenn die [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Eigenschaft angegeben ist, muss das Passwortbearbeitungsfeld einen anderen Wert als eine leere Zeichenkette enthalten, um gültig zu sein.

Wenn das [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern)-Attribut angegeben ist, wird der Inhalt eines `password`-Steuerfelds nur dann als gültig betrachtet, wenn der Wert die Validierung besteht; siehe [Validierung](#validierung) für weitere Informationen.

> [!NOTE]
> Die Steuerung (U+000A) und der Wagenrücklauf (U+000D)-Zeichen sind in einem `password`-Wert nicht erlaubt. Wenn der Wert eines Passwortsteuerfelds festgelegt wird, werden Steuerung und Wagenrücklaufzeichen aus dem Wert entfernt.

## Zusätzliche Attribute

Zusätzlich zu den [globalen Attributen](/de/docs/Web/HTML/Reference/Global_attributes) und den Attributen, die auf alle {{HTMLElement("input")}}-Elemente unabhängig von ihrem Typ wirken, unterstützen Passwortfeld-Eingaben die folgenden Attribute.

> [!NOTE]
> Das globale Attribut [`autocorrect`](/de/docs/Web/HTML/Reference/Global_attributes/autocorrect) kann Passwort-Eingaben hinzugefügt werden, aber der gespeicherte Zustand ist immer `off`.

### maxlength

Die maximale Zeichenfolgenlänge (gemessen in {{Glossary("UTF-16", "UTF-16 Code-Einheiten")}}), die der Benutzer in das Passwortfeld eingeben kann. Dies muss ein ganzzahliger Wert von 0 oder höher sein. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben ist, hat das Passwortfeld keine maximale Länge. Dieser Wert muss auch größer als oder gleich dem Wert von `minlength` sein.

Die Eingabe schlägt [Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl, wenn die Länge des in das Feld eingegebenen Textes länger als `maxlength` {{Glossary("UTF-16", "UTF-16 Code-Einheiten")}} ist. Die Constraint-Validierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### minlength

Die minimale Zeichenfolgenlänge (gemessen in {{Glossary("UTF-16", "UTF-16 Code-Einheiten")}}), die der Benutzer in das Passworteingabefeld eingeben kann. Dies muss ein nicht-negativer ganzzahliger Wert sein, der kleiner oder gleich dem von `maxlength` angegebenen Wert ist. Wenn kein `minlength` angegeben ist oder ein ungültiger Wert angegeben ist, hat die Passwort-Eingabe keine Mindestlänge.

Die Eingabe schlägt [Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) fehl, wenn die Länge des in das Feld eingegebenen Textes kürzer als `minlength` {{Glossary("UTF-16", "UTF-16 Code-Einheiten")}} ist. Die Constraint-Validierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### pattern

Das `pattern`-Attribut, wenn spezifiziert, ist ein regulärer Ausdruck, dem der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) der Eingabe entsprechen muss, damit der Wert die [Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) besteht. Es muss ein gültiger JavaScript-Regulärer Ausdruck sein, wie er vom {{jsxref("RegExp")}}-Typ verwendet wird, und wie in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert; das `'u'`-Flag wird beim Kompilieren des regulären Ausdrucks angegeben, sodass das Muster als eine Sequenz von Unicode-Codepunkten behandelt wird, anstatt als {{Glossary("ASCII", "ASCII")}}. Keine Schrägstriche sollten um den Musterttext spezifiziert werden.

Wenn das angegebene Muster nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut wird vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Reference/Elements/input#title)-Attribut, um einen Text anzugeben, den die meisten Browser als Tooltip anzeigen, um zu erklären, welche Anforderungen es gibt, um dem Muster zu entsprechen. Sie sollten auch anderen erklärenden Text in der Nähe einfügen.

Die Verwendung eines Musters wird für Passwort-Eingaben nachdrücklich empfohlen, um sicherzustellen, dass gültige Passwörter mit einer breiten Auswahl an Zeichensätzen ausgewählt und von Ihren Benutzern verwendet werden. Mit einem Muster können Sie Regeln für Groß- und Kleinschreibung vorschreiben, die Verwendung einer Anzahl von Ziffern und/oder Satzzeichenzeichen verlangen und so weiter. Siehe den Abschnitt [Validierung](#validierung) für Details und ein Beispiel.

### placeholder

Das `placeholder`-Attribut ist eine Zeichenkette, die dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Informationen in dem Feld erwartet werden. Es sollte ein Wort oder ein kurzer Satz sein, der den erwarteten Datentyp demonstriert, anstatt eine erklärende Nachricht. Der Text _darf keine_ Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt des Steuerelements eine Richtung (entweder {{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}) hat, der Platzhalter jedoch in der entgegengesetzten Richtung angezeigt werden soll, können Sie Unicode-Bidi-Algorithmus-Formatierungszeichen verwenden, um die Richtung innerhalb des Platzhalters zu überschreiben; siehe [Anleitung zur Verwendung von Unicode-Steuerzeichen für Bidi-Text](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für weitere Informationen.

> [!NOTE]
> Vermeiden Sie nach Möglichkeit die Verwendung des `placeholder`-Attributs. Es ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [`<input>`-Labels](/de/docs/Web/HTML/Reference/Elements/input#labels) für weitere Informationen.

### readonly

Ein Boolean-Attribut, das, wenn es vorhanden ist, bedeutet, dass dieses Feld nicht vom Benutzer bearbeitet werden kann. Sein `value` kann jedoch immer noch durch JavaScript-Code geändert werden, der direkt den Wert der [`HTMLInputElement.value`](/de/docs/Web/API/HTMLInputElement)-Eigenschaft festlegt.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keinen Einfluss auf Eingaben mit dem ebenfalls angegebenen `readonly`-Attribut.

### size

Das `size`-Attribut ist ein numerischer Wert, der angibt, wie viele Zeichen breit das Eingabefeld sein soll. Der Wert muss eine Zahl größer als null sein, und der Standardwert ist 20. Da sich die Zeichenbreiten unterscheiden, kann dies mehr oder weniger genau sein und sollte nicht darauf vertraut werden, dass es so ist; das resultierende Eingabefeld kann schmaler oder breiter als die angegebene Anzahl von Zeichen sein, abhängig von den Zeichen und den ({{cssxref("font")}}) Einstellungen.

Es setzt _keine_ Begrenzung dafür, wie viele Zeichen der Benutzer in das Feld eingeben kann. Es gibt nur an, wie viele ungefähr gleichzeitig gesehen werden können. Um eine obere Grenze für die Länge der Eingabedaten festzulegen, verwenden Sie das [`maxlength`](#maxlength)-Attribut.

## Verwendung von Passwort-Eingaben

Passwort-Eingabefelder funktionieren im Allgemeinen genauso wie andere textuelle Eingabefelder; der Hauptunterschied besteht im Verschleiern des Inhalts, um zu verhindern, dass Personen in der Nähe des Benutzers das Passwort lesen.

### Eine grundlegende Passwort-Eingabe

Hier sehen wir die grundlegendste Passwort-Eingabe, mit einem Label, das unter Verwendung des {{HTMLElement("label")}}-Elements festgelegt wurde.

```html
<label for="userPassword">Password: </label>
<input id="userPassword" type="password" />
```

{{EmbedLiveSample("A_basic_password_input", 600, 40)}}

### Autovervollständigen erlauben

Um zu ermöglichen, dass der Passwort-Manager des Benutzers das Passwort automatisch eingibt, geben Sie das [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete)-Attribut an. Für Passwörter sollte dies typischerweise eines der folgenden sein:

- `on`
  - : Erlaubt es dem Browser oder einem Passwort-Manager, das Passwortfeld automatisch auszufüllen. Dies ist nicht so informativ wie die Verwendung von entweder `current-password` oder `new-password`.
- `off`
  - : Erlaubt es dem Browser oder Passwort-Manager nicht, das Passwortfeld automatisch auszufüllen. Beachten Sie, dass einige Software diesen Wert ignoriert, da er normalerweise schädlich für die Fähigkeit der Benutzer ist, sichere Passwortpraktiken aufrechtzuerhalten.
- `current-password`
  - : Erlaubt es dem Browser oder Passwort-Manager, das aktuelle Passwort für die Website einzugeben. Dies bietet mehr Informationen als `on`, da es dem Browser oder Passwort-Manager ermöglicht, das aktuell bekannte Passwort für die Website im Feld einzugeben, jedoch kein neues vorzuschlagen.
- `new-password`
  - : Erlaubt es dem Browser oder Passwort-Manager, ein neues Passwort für die Seite automatisch einzugeben; dies wird auf "Ändern Sie Ihr Passwort" und "Neuer Benutzer"-Formularen, im Feld verwendet, das den Benutzer nach einem neuen Passwort fragt. Das neue Password kann auf verschiedene Arten generiert werden, abhängig vom verwendeten Passwort-Manager. Es kann einen neuen vorgeschlagenen Passwort ausfüllen, oder es kann dem Benutzer eine Oberfläche für die Erstellung eines anzeigen.

```html
<label for="userPassword">Password:</label>
<input id="userPassword" type="password" autocomplete="current-password" />
```

{{EmbedLiveSample("Allowing_autocomplete", 600, 40)}}

### Das Passwort obligatorisch machen

Um dem Browser des Benutzers zu signalisieren, dass das Passwortfeld einen gültigen Wert haben muss, bevor das Formular gesendet werden kann, geben Sie das Boolean-Attribut [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) an.

```html
<label for="userPassword">Password: </label>
<input id="userPassword" type="password" required />
<input type="submit" value="Submit" />
```

{{EmbedLiveSample("Making_the_password_mandatory", 600, 40)}}

### Ein Eingabemodus spezifizieren

Wenn Ihre empfohlenen (oder vorgeschriebenen) Passwortsyntax-Regeln von einer alternativen Texteintragsoberfläche als der Standardtastatur profitieren würden, können Sie das [`inputmode`](/de/docs/Web/HTML/Reference/Elements/input#inputmode)-Attribut verwenden, um eine bestimmte anzufordern. Der offensichtlichste Anwendungsfall dafür ist, wenn das Passwort numerisch sein muss (zum Beispiel eine PIN). Mobile Geräte mit virtuellen Tastaturen können beispielsweise entscheiden, zu einem Layout mit numerischer Tastatur anstelle einer vollständigen Tastatur zu wechseln, um das Eingeben des Passworts zu erleichtern. Wenn die PIN für einen einmaligen Gebrauch ist, setzen Sie das [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete)-Attribut auf entweder `off` oder `one-time-code`, um anzugeben, dass sie nicht gespeichert wird.

```html
<label for="pin">PIN: </label>
<input id="pin" type="password" inputmode="numeric" />
```

{{EmbedLiveSample("Specifying_an_input_mode", 600, 40)}}

### Längenanforderungen festlegen

Wie üblich können Sie die [`minlength`](/de/docs/Web/HTML/Reference/Elements/input#minlength) und [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength)-Attribute verwenden, um die minimalen und maximalen akzeptablen Längen für das Passwort festzulegen. Dieses Beispiel erweitert das vorherige, indem angegeben wird, dass die PIN des Benutzers mindestens vier und höchstens acht Ziffern haben muss. Das [`size`](/de/docs/Web/HTML/Reference/Elements/input#size)-Attribut wird verwendet, um sicherzustellen, dass die Passworteingabesteuerelement acht Zeichen breit ist.

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

Sie können auch [`selectionStart`](/de/docs/Web/API/HTMLInputElement/selectionStart) und [`selectionEnd`](/de/docs/Web/API/HTMLInputElement/selectionEnd) verwenden, um den Bereich der im Steuerfeld ausgewählten Zeichen zu erhalten (oder festzulegen) sowie [`selectionDirection`](/de/docs/Web/API/HTMLInputElement/selectionDirection), um zu wissen, in welche Richtung die Auswahl erfolgte (oder erweitert wird, je nach Plattform; siehe die Dokumentation für eine Erklärung). Da der Text jedoch verdeckt ist, ist der Nutzen dieser Funktionen etwas eingeschränkt.

## Validierung

Wenn Ihre Anwendung Zeichensatzbeschränkungen oder andere Anforderungen an den tatsächlichen Inhalt des eingegebenen Passworts hat, können Sie das [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern)-Attribut verwenden, um einen regulären Ausdruck festzulegen, der automatisch sicherstellt, dass Ihre Passwörter diese Anforderungen erfüllen.

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

### Anfordern einer Sozialversicherungsnummer

Dieses Beispiel akzeptiert nur Eingaben, die dem Format einer [gültigen US-amerikanischen Sozialversicherungsnummer](https://en.wikipedia.org/wiki/Social_Security_number#Structure) entsprechen. Diese Nummern werden in den USA aus steuerlichen und zu Identifikationszwecken in der Form "123-45-6789" verwendet. Regeln für zulässige Werte in jeder Gruppe existieren ebenfalls.

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

Dies verwendet ein [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern), das den eingegebenen Wert auf Zeichenfolgen beschränkt, die rechtlichen Sozialversicherungsnummern entsprechen. Offensichtlich kann dieser Regex keine gültige SSN garantieren (da wir keinen Zugang zur Datenbank der Social Security Administration haben), aber er sorgt dafür, dass die Nummer eine solche sein könnte; er vermeidet in der Regel Werte, die nicht gültig sein können. Darüber hinaus ermöglicht er, dass die drei Gruppen von Ziffern durch ein Leerzeichen, einen Bindestrich ("-") oder nichts getrennt werden.

Das [`inputmode`](/de/docs/Web/HTML/Reference/Elements/input#inputmode) ist auf `numeric` eingestellt, um Geräte mit virtuellen Tastaturen dazu zu ermutigen, zu einem Layout mit numerischer Tastatur zu wechseln, um die Eingabe zu erleichtern. Die [`minlength`](/de/docs/Web/HTML/Reference/Elements/input#minlength)- und [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength)-Attribute werden auf 9 bzw. 12 gesetzt, um zu verlangen, dass der Wert mindestens neun und höchstens zwölf Zeichen hat (ersteres ohne Trennzeichen zwischen den Zifferngruppen und letzteres mit ihnen). Das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut wird verwendet, um anzugeben, dass dieses Steuerelement einen Wert haben muss. Schließlich ist [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete) auf `off` eingestellt, um zu verhindern, dass Passwort-Manager und Sitzungswiederherstellungsfunktionen versuchen, seinen Wert festzulegen, da dies überhaupt kein Passwort ist.

#### JavaScript

Das JavaScript zeigt die eingegebene SSN auf dem Bildschirm an, damit Sie sie sehen können. Dies untergräbt den Zweck eines Passwortfelds, hilft aber, mit dem `pattern` zu experimentieren.

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
      <td><strong>Unterstützte allgemeine Attribute</strong></td>
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
