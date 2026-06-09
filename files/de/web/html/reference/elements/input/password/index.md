---
title: '`<input type="password">` HTML-Attributwert'
short-title: <input type="password">
slug: Web/HTML/Reference/Elements/input/password
l10n:
  sourceCommit: 3944506d4afeeed774687cf3fd950878c6229bbc
---

`<input>`-Elemente des Typs **`password`** bieten eine Möglichkeit für den Benutzer, ein Passwort sicher einzugeben.

Das Element wird als einzeiliger Klartext-Editor angezeigt, bei dem der Text verschleiert wird, sodass er nicht gelesen werden kann. In der Regel wird jedes Zeichen durch ein Symbol wie einem Sternchen ("\*") oder einem Punkt ("•") ersetzt. Dieses Zeichen variiert je nach {{Glossary("user_agent", "Benutzeragent")}} und Betriebssystem.

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

Das genaue Verhalten des Eingabeprozesses kann von Browser zu Browser variieren. Einige Browser zeigen das eingegebene Zeichen für einen Moment an, bevor es verschleiert wird, während andere dem Benutzer ermöglichen, die Anzeige des Klartextes ein- und auszuschalten. Beide Ansätze helfen dem Benutzer, zu überprüfen, ob das beabsichtigte Passwort korrekt eingegeben wurde, was auf mobilen Geräten besonders schwierig sein kann.

> [!NOTE]
> Alle Formulare, die sensible Informationen wie Passwörter beinhalten (z. B. Login-Formulare), sollten über HTTPS bereitgestellt werden. Viele Browser implementieren inzwischen Mechanismen, um vor unsicheren Login-Formularen zu warnen.

## Wert

Das [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut enthält eine Zeichenfolge, deren Wert der aktuelle Inhalt des zur Eingabe des Passworts verwendeten Text-Editor-Steuerelements ist. Wenn der Benutzer noch nichts eingegeben hat, ist dieser Wert eine leere Zeichenfolge (`""`). Wenn die [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Eigenschaft angegeben ist, muss das Passwort-Eingabefeld einen anderen Wert als eine leere Zeichenfolge enthalten, um gültig zu sein.

Wenn das [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern)-Attribut angegeben ist, wird der Inhalt eines `password`-Steuerelements nur dann als gültig angesehen, wenn der Wert die Validierung besteht; siehe [Validierung](#validierung) für weitere Informationen.

> [!NOTE]
> Die Zeilenumbruch (U+000A) und Wagenrücklauf (U+000D) Zeichen sind in einem `password`-Wert nicht erlaubt. Wenn der Wert eines Passwort-Steuerelements gesetzt wird, werden Zeilenumbruch- und Wagenrücklaufzeichen aus dem Wert entfernt.

## Zusätzliche Attribute

Neben den [globalen Attributen](/de/docs/Web/HTML/Reference/Global_attributes) und den Attributen, die auf alle {{HTMLElement("input")}}-Elemente unabhängig von ihrem Typ angewendet werden, unterstützen `password`-Feldeingaben die folgenden Attribute.

> [!NOTE]
> Das [`autocorrect`](/de/docs/Web/HTML/Reference/Global_attributes/autocorrect)-Globalattribut kann zu Password-Eingaben hinzugefügt werden, aber der gespeicherte Zustand ist immer `off`.

### maxlength

Die maximale Zeichenfolgenlänge (gemessen in {{Glossary("UTF-16", "UTF-16 Code-Einheiten")}}), die der Benutzer in das Passwortfeld eingeben kann. Dies muss ein ganzzahliger Wert von 0 oder höher sein. Wenn kein `maxlength` angegeben oder ein ungültiger Wert angegeben ist, hat das Passwortfeld keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

Die Eingabe wird die [Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) nicht bestehen, wenn die Länge des in das Feld eingegebenen Textes länger als `maxlength` {{Glossary("UTF-16", "UTF-16 Code-Einheiten")}} ist. Die Constraint-Validierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### minlength

Die minimale Zeichenfolgenlänge (gemessen in {{Glossary("UTF-16", "UTF-16 Code-Einheiten")}}), die der Benutzer in das Passwort-Eingabefeld eingeben kann. Dies muss ein nicht-negativer ganzzahliger Wert sein, der kleiner oder gleich dem durch `maxlength` angegebenen Wert ist. Wenn kein `minlength` angegeben oder ein ungültiger Wert angegeben ist, hat das Passwort-Eingabefeld keine Mindestlänge.

Die Eingabe wird die [Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) nicht bestehen, wenn die Länge des in das Feld eingegebenen Textes kürzer als `minlength` {{Glossary("UTF-16", "UTF-16 Code-Einheiten")}} ist. Die Constraint-Validierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### pattern

Das `pattern`-Attribut ist, wenn angegeben, ein regulärer Ausdruck, der mit dem [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) der Eingabe übereinstimmen muss, damit der Wert die [Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) besteht. Es muss ein gültiger regulärer JavaScript-Ausdruck sein, wie er vom {{jsxref("RegExp")}}-Typ verwendet wird, und wie in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert; das `'u'`-Flag wird beim Kompilieren des regulären Ausdrucks angegeben, sodass das Muster als Sequenz von Unicode-Codepunkten behandelt wird, anstatt als {{Glossary("ASCII", "ASCII")}}. Es sollten keine Schrägstriche um den Mustertext angegeben werden.

Wenn das angegebene Pattern nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut wird vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Reference/Elements/input#title)-Attribut, um Text anzugeben, den die meisten Browser als Tooltip anzeigen, um zu erklären, welche Anforderungen erfüllt werden müssen, um das Muster zu erfüllen. Sie sollten auch andere erklärende Texte in der Nähe einfügen.

Die Verwendung eines Musters wird für Passwort-Eingaben dringend empfohlen, um sicherzustellen, dass gültige Passwörter mit einer breiten Auswahl an Zeichenklassen von Ihren Benutzern ausgewählt und verwendet werden. Mit einem Muster können Sie Groß- und Kleinschreibungsregeln vorschreiben, die Verwendung einer bestimmten Anzahl von Ziffern und/oder Satzzeichen erfordern und vieles mehr. Siehe den Abschnitt [Validierung](#validierung) für Details und ein Beispiel.

### placeholder

Das `placeholder`-Attribut ist eine Zeichenkette, die dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Informationen in das Feld eingegeben werden sollen. Es sollte ein Wort oder eine kurze Phrase sein, die den erwarteten Datentyp demonstriert, anstatt eine erklärende Nachricht. Der Text _darf keine_ Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt des Steuerelements eine Richtung ({{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}) hat, das `placeholder` jedoch in der entgegengesetzten Richtung angezeigt werden muss, können Sie Unicode-Bidirektionalitätsalgorithmus-Formatierungszeichen verwenden, um die Richtung im `placeholder` zu überschreiben; siehe [Anleitung zur Verwendung von Unicode-Kontrollzeichen für bidi-Text](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für weitere Informationen.

> [!NOTE]
> Vermeiden Sie nach Möglichkeit die Verwendung des `placeholder`-Attributs. Es ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [`<input>`-Labels](/de/docs/Web/HTML/Reference/Elements/input#labels) für weitere Informationen.

### readonly

Ein Boolean-Attribut, das, wenn es vorhanden ist, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch weiterhin von JavaScript-Code geändert werden, der direkt den Wert der [`HTMLInputElement.value`](/de/docs/Web/API/HTMLInputElement)-Eigenschaft setzt.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keinen Einfluss auf Eingaben mit ebenfalls angegebenem `readonly`-Attribut.

### size

Das `size`-Attribut ist ein Zahlenwert, der angibt, wie viele Zeichen breit das Eingabefeld sein soll. Der Wert muss eine Zahl größer als null sein, und der Standardwert ist 20. Da die Zeichenbreiten variieren, kann dies möglicherweise nicht exakt sein und sollte nicht darauf verlassen werden; die resultierende Eingabe kann schmaler oder breiter als die angegebene Anzahl von Zeichen sein, je nach Zeichen und der verwendeten Schrift ({{cssxref("font")}}-Einstellungen).

Dies setzt _kein_ Limit, wie viele Zeichen der Benutzer in das Feld eingeben kann. Es gibt nur an, wie viele ungefähr auf einmal sichtbar sein können. Um ein oberes Limit für die Eingabedatenlänge festzulegen, verwenden Sie das [`maxlength`](#maxlength)-Attribut.

## Verwendung von Passwort-Eingaben

Passwort-Eingabefelder funktionieren im Allgemeinen ähnlich wie andere Text-Eingabefelder; der Hauptunterschied besteht in der Verschleierung des Inhalts, um zu verhindern, dass Personen in der Nähe des Benutzers das Passwort lesen.

### Ein einfaches Passwort-Eingabefeld

Hier sehen wir das einfachste Passwort-Eingabefeld, mit einer Beschriftung, die unter Verwendung des {{HTMLElement("label")}}-Elements festgelegt wurde.

```html
<label for="userPassword">Password: </label>
<input id="userPassword" type="password" />
```

{{EmbedLiveSample("A_basic_password_input", 600, 40)}}

### Automatisches Ausfüllen erlauben

Um zu ermöglichen, dass der Passwort-Manager des Benutzers das Passwort automatisch eingibt, geben Sie das [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete)-Attribut an. Für Passwörter sollte dies in der Regel einer der folgenden sein:

- `on`
  - : Erlauben Sie dem Browser oder einem Passwort-Manager, das Passwortfeld automatisch auszufüllen. Dies ist nicht so informativ wie die Verwendung von entweder `current-password` oder `new-password`.
- `off`
  - : Lassen Sie den Browser oder den Passwort-Manager das Passwortfeld nicht automatisch ausfüllen. Beachten Sie, dass einige Software diesen Wert ignoriert, da es in der Regel nachteilig für die Fähigkeit der Benutzer ist, sichere Passwortpraktiken beizubehalten.
- `current-password`
  - : Erlauben Sie dem Browser oder Passwort-Manager, das aktuelle Passwort für die Seite einzugeben. Dies bietet mehr Informationen als `on`, da es dem Browser oder dem Passwort-Manager ermöglicht, das derzeit bekannte Passwort für die Seite automatisch in das Feld einzugeben, aber keine neue vorzuschlagen.
- `new-password`
  - : Erlauben Sie dem Browser oder Passwort-Manager, ein neues Passwort für die Seite automatisch einzugeben. Dies wird in Formularen zur "Passwortänderung" und für "neue Benutzer" im Feld verwendet, dass den Benutzer nach einem neuen Passwort fragt. Das neue Passwort kann auf verschiedene Weise generiert werden, abhängig von dem verwendeten Passwort-Manager. Es kann ein neues vorgeschlagenes Passwort ausgefüllt werden, oder es wird möglicherweise dem Benutzer eine Oberfläche zur Erstellung eines neuen gezeigt.

```html
<label for="userPassword">Password:</label>
<input id="userPassword" type="password" autocomplete="current-password" />
```

{{EmbedLiveSample("Allowing_autocomplete", 600, 40)}}

### Das Passwort als Pflichtfeld markieren

Um dem Browser des Benutzers mitzuteilen, dass das Passwortfeld einen gültigen Wert haben muss, bevor das Formular übermittelt werden kann, geben Sie das Boolean-Attribut [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) an.

```html
<label for="userPassword">Password: </label>
<input id="userPassword" type="password" required />
<input type="submit" value="Submit" />
```

{{EmbedLiveSample("Making_the_password_mandatory", 600, 40)}}

### Einen Eingabemodus angeben

Wenn Ihre empfohlenen (oder vorgeschriebenen) Passwort-Syntaxregeln von einer anderen Texteingabeschnittstelle als der Standardtastatur profitieren würden, können Sie das [`inputmode`](/de/docs/Web/HTML/Reference/Elements/input#inputmode)-Attribut verwenden, um eine spezifische anzufordern. Der offensichtlichste Anwendungsfall hierfür ist, wenn das Passwort numerisch sein muss (wie eine PIN). Mobile Geräte mit virtuellen Tastaturen können beispielsweise in Erwägung ziehen, auf ein numerisches Tastaturlayout anstelle einer vollständigen Tastatur umzuschalten, um das Eingeben des Passworts zu erleichtern. Wenn die PIN einmalig ist, setzen Sie das [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete)-Attribut entweder auf `off` oder `one-time-code`, um vorzuschlagen, dass es nicht gespeichert wird.

```html
<label for="pin">PIN: </label>
<input id="pin" type="password" inputmode="numeric" />
```

{{EmbedLiveSample("Specifying_an_input_mode", 600, 40)}}

### Längenanforderungen festlegen

Wie üblich können Sie die Attribute [`minlength`](/de/docs/Web/HTML/Reference/Elements/input#minlength) und [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength) verwenden, um Mindest- und Höchstlängen für das Passwort festzulegen. Dieses Beispiel erweitert das vorherige, indem es festlegt, dass die PIN des Benutzers mindestens vier und höchstens acht Ziffern lang sein muss. Das [`size`](/de/docs/Web/HTML/Reference/Elements/input#size)-Attribut wird verwendet, um sicherzustellen, dass das Passwort-Eingabesteuerelement acht Zeichen breit ist.

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

Wie bei anderen Texteingabesteuerelementen können Sie die Methode [`select()`](/de/docs/Web/API/HTMLInputElement/select) verwenden, um den gesamten Text im Passwortfeld auszuwählen.

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

Sie können auch [`selectionStart`](/de/docs/Web/API/HTMLInputElement/selectionStart) und [`selectionEnd`](/de/docs/Web/API/HTMLInputElement/selectionEnd) verwenden, um zu erhalten (oder festzulegen), welcher Zeichenbereich im Steuerelement derzeit ausgewählt ist, und [`selectionDirection`](/de/docs/Web/API/HTMLInputElement/selectionDirection), um zu erfahren, in welche Richtung die Auswahl erfolgte (oder erweitern wird, abhängig von Ihrer Plattform; sehen Sie sich die Dokumentation für eine Erklärung an). Angesichts der Tatsache, dass der Text verschleiert ist, ist der Nutzen dieser Funktionen jedoch etwas begrenzt.

## Validierung

Wenn Ihre Anwendung Zeichensatzbeschränkungen oder andere Anforderungen für den tatsächlichen Inhalt des eingegebenen Passworts hat, können Sie das [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern)-Attribut verwenden, um einen regulären Ausdruck zu erstellen, der automatisch sicherstellt, dass Ihre Passwörter diese Anforderungen erfüllen.

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

### Antrag auf eine Sozialversicherungsnummer

Dieses Beispiel akzeptiert nur Eingaben, die dem Format einer [gültigen US-Sozialversicherungsnummer](https://en.wikipedia.org/wiki/Social_Security_number#Structure) entsprechen. Diese Nummern, die für Steuer- und Identifikationszwecke in den USA verwendet werden, haben die Form "123-45-6789". Verschiedene Regeln existieren auch dafür, welche Werte in jeder Gruppe erlaubt sind.

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

In diesem Beispiel wird ein [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern) verwendet, um den eingegebenen Wert auf Zeichenfolgen zu beschränken, die legale Sozialversicherungsnummern darstellen. Natürlich garantiert diese Regexp keine gültige SSN (da wir keinen Zugriff auf die Datenbank der Sozialversicherungsverwaltung haben), aber es stellt sicher, dass die Nummer eine sein könnte; es vermeidet im Allgemeinen Werte, die nicht gültig sein können. Außerdem erlaubt es, dass die drei Gruppen von Ziffern durch ein Leerzeichen, einen Bindestrich ("-") oder nichts getrennt werden.

Das [`inputmode`](/de/docs/Web/HTML/Reference/Elements/input#inputmode) ist auf `numeric` gesetzt, um Geräte mit virtuellen Tastaturen zu ermutigen, auf ein numerisches Tastaturlayout zur einfacheren Eingabe zu wechseln. Die [`minlength`](/de/docs/Web/HTML/Reference/Elements/input#minlength)- und [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength)-Attribute sind auf 9 bzw. 12 gesetzt, um zu verlangen, dass der Wert mindestens neun und höchstens 12 Zeichen beträgt (der erste ohne Trennzeichen zwischen den Zifferngruppen und der zweite mit ihnen). Das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut wird verwendet, um anzuzeigen, dass dieses Steuerelement einen Wert haben muss. Schließlich wird [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete) auf `off` gesetzt, um zu verhindern, dass Passwort-Manager und Sitzungswiederherstellungsfunktionen versuchen, seinen Wert festzulegen, da dies überhaupt kein Passwort ist.

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
        Eine Zeichenfolge, die ein Passwort darstellt, oder leer
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
      <td><strong>Implizite ARIA-Rolle</strong></td>
      <td><a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role">keine entsprechende Rolle</a></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
