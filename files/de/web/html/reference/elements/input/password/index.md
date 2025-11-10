---
title: <input type="password">
slug: Web/HTML/Reference/Elements/input/password
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

`<input>`-Elemente vom Typ **`password`** bieten eine Möglichkeit, dass der Benutzer ein Passwort sicher eingeben kann.

Das Element wird als einzeilige Klartext-Editor-Steuerung präsentiert, bei der der Text verdeckt ist, sodass er nicht gelesen werden kann, normalerweise indem jedes Zeichen durch ein Symbol wie das Sternchen ("\*") oder einen Punkt ("•") ersetzt wird. Dieses Zeichen variiert je nach {{Glossary("user_agent", "User-Agent")}} und Betriebssystem.

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

Das genaue Verhalten des Eingabeprozesses kann je nach Browser variieren. Einige Browser zeigen das eingegebene Zeichen einen Moment lang an, bevor es verdeckt wird, während andere dem Benutzer erlauben, die Anzeige von Klartext ein- und auszuschalten. Beide Ansätze helfen dem Benutzer sicherzustellen, dass er das beabsichtigte Passwort eingegeben hat, was insbesondere auf mobilen Geräten schwierig sein kann.

> [!NOTE]
> Alle Formulare, die sensible Informationen wie Passwörter enthalten (z. B. Anmeldeformulare), sollten über HTTPS bereitgestellt werden. Viele Browser implementieren mittlerweile Mechanismen, um vor unsicheren Anmeldeformularen zu warnen; siehe [Unsichere Passwörter](/de/docs/Web/Security/Insecure_passwords).

## Wert

Das [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut enthält eine Zeichenfolge, deren Wert der aktuelle Inhalt der Texteingabe-Steuerung ist, die zur Passworteingabe verwendet wird. Wenn der Benutzer noch nichts eingegeben hat, ist dieser Wert eine leere Zeichenfolge (`""`). Wenn das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut angegeben ist, muss das Passwort-Eingabefeld einen Wert enthalten, der nicht leer ist, um gültig zu sein.

Wenn das [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern)-Attribut angegeben ist, wird der Inhalt eines `password`-Elements nur dann als gültig betrachtet, wenn der Wert die Validierung besteht; siehe [Validierung](#validierung) für weitere Informationen.

> [!NOTE]
> Zeilenumbruch (U+000A) und Wagenrücklauf (U+000D) sind in einem `password`-Wert nicht zulässig. Beim Setzen des Werts eines Passwortelements werden Zeilenumbruch- und Wagenrücklaufzeichen aus dem Wert entfernt.

## Zusätzliche Attribute

Zusätzlich zu den [globalen Attributen](/de/docs/Web/HTML/Reference/Global_attributes) und den Attributen, die für alle {{HTMLElement("input")}}-Elemente unabhängig von ihrem Typ gelten, unterstützen Passwortfeld-Eingaben die folgenden Attribute.

> [!NOTE]
> Das globale Attribut [`autocorrect`](/de/docs/Web/HTML/Reference/Global_attributes/autocorrect) kann zu Passworteingaben hinzugefügt werden, aber der gespeicherte Zustand ist immer `off`.

### maxlength

Die maximale Zeichenlänge (gemessen in {{Glossary("UTF-16", "UTF-16-Code-Einheiten")}}), die der Benutzer in das Passwortfeld eingeben kann. Dies muss ein ganzzahliger Wert von 0 oder höher sein. Wenn `maxlength` nicht angegeben oder ein ungültiger Wert angegeben wird, hat das Passwortfeld keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

Die Eingabe wird die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) nicht bestehen, wenn die Länge des in das Feld eingegebenen Textes länger als `maxlength` {{Glossary("UTF-16", "UTF-16-Code-Einheiten")}} ist. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### minlength

Die minimale Zeichenlänge (gemessen in {{Glossary("UTF-16", "UTF-16-Code-Einheiten")}}), die der Benutzer in das Passwort-Eingabefeld eingeben kann. Dies muss ein nicht-negativer ganzzahliger Wert sein, der kleiner oder gleich dem von `maxlength` angegebenen Wert ist. Wenn `minlength` nicht angegeben oder ein ungültiger Wert angegeben wird, hat die Passworteingabe keine Mindestlänge.

Die Eingabe wird die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) nicht bestehen, wenn die Länge des in das Feld eingegebenen Textes kürzer als `minlength` {{Glossary("UTF-16", "UTF-16-Code-Einheiten")}} ist. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### pattern

Das `pattern`-Attribut, falls angegeben, ist ein regulärer Ausdruck, den der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) des Eingabefelds erfüllen muss, damit der Wert die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) besteht. Es muss ein gültiger JavaScript-Regulärer Ausdruck sein, wie er vom {{jsxref("RegExp")}}-Typ verwendet wird und wie in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert; das `'u'`-Flag wird beim Kompilieren des regulären Ausdrucks spezifiziert, sodass das Muster als eine Folge von Unicode-Code-Punkten behandelt wird, anstatt als {{Glossary("ASCII", "ASCII")}}. Um Schrägstriche herum sollten keine Mustertexte spezifiziert werden.

Wenn das angegebene Muster nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut wird vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Reference/Elements/input#title)-Attribut, um Text zu spezifizieren, den die meisten Browser als Tooltip anzeigen, um zu erklären, welche Anforderungen erfüllt werden müssen, um das Muster zu erfüllen. Sie sollten auch andere erklärende Texte in der Nähe hinzufügen.

Die Verwendung eines Musters wird nachdrücklich für Passworteingaben empfohlen, um sicherzustellen, dass gültige Passwörter mit einer Vielzahl von Zeichenklassen ausgewählt und von Ihren Benutzern verwendet werden. Mit einem Muster können Sie Groß-/Kleinschreibungsregeln vorschreiben, die Verwendung von Ziffern und/oder Satzzeichenzeichen fordern und so weiter. Einzelheiten und ein Beispiel finden Sie im Abschnitt [Validierung](#validierung).

### placeholder

Das `placeholder`-Attribut ist eine Zeichenfolge, die dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Informationen im Feld erwartet werden. Es sollte ein Wort oder eine kurze Phrase sein, die den erwarteten Datentyp demonstriert, anstatt eine erklärende Nachricht zu sein. Der Text _darf keine_ Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt des Steuerelements eine Richtung ({{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}) hat, aber der Platzhalter in der entgegengesetzten Richtung dargestellt werden muss, können Sie Unicode-Bidirektionalitätsalgorithmus-Formatierungszeichen verwenden, um die Richtung im Platzhalter zu überschreiben; siehe [Wie man Unicode-Steuerelemente für bidi-Text verwendet](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für weitere Informationen.

> [!NOTE]
> Vermeiden Sie nach Möglichkeit die Verwendung des `placeholder`-Attributs. Es ist nicht so semantisch nützlich wie andere Möglichkeiten, um Ihr Formular zu erklären und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Weitere Informationen finden Sie in [`<input>`-Labels](/de/docs/Web/HTML/Reference/Elements/input#labels).

### readonly

Ein Boolean-Attribut, das, falls vorhanden, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch immer noch durch JavaScript-Code geändert werden, der den Wert der [`HTMLInputElement.value`](/de/docs/Web/API/HTMLInputElement)-Eigenschaft direkt setzt.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Wirkung auf Eingaben mit dem ebenfalls spezifizierten `readonly`-Attribut.

### size

Das `size`-Attribut ist ein numerischer Wert, der angibt, wie viele Zeichen breit das Eingabefeld sein soll. Der Wert muss eine Zahl größer als null sein, und der Standardwert ist 20. Da die Breiten der Zeichen variieren, kann dies exakt sein oder nicht, und es sollte nicht darauf vertraut werden, dass es so ist; das resultierende Eingabefeld kann schmaler oder breiter sein als die angegebene Anzahl von Zeichen, abhängig von den Zeichen und der Schriftart ({{cssxref("font")}}-Einstellungen in Verwendung).

Dies setzt _keine_ Grenze dafür, wie viele Zeichen der Benutzer in das Feld eingeben kann. Es gibt nur an, wie viele Zeichen ungefähr gleichzeitig sichtbar sein können. Um eine Obergrenze für die Länge der Eingabedaten festzulegen, verwenden Sie das [`maxlength`](#maxlength)-Attribut.

## Verwendung von Passworteingaben

Passworteingabefelder funktionieren im Allgemeinen ähnlich wie andere Texteingabefelder; der Hauptunterschied besteht in der Verschleierung des Inhalts, um zu verhindern, dass Personen in der Nähe des Benutzers das Passwort lesen.

### Eine grundlegende Passworteingabe

Hier sehen wir die grundlegendste Passworteingabe mit einem Label, das mit dem {{HTMLElement("label")}}-Element erstellt wurde.

```html
<label for="userPassword">Password: </label>
<input id="userPassword" type="password" />
```

{{EmbedLiveSample("A_basic_password_input", 600, 40)}}

### Autocomplete erlauben

Um dem Passwortmanager des Benutzers zu erlauben, das Passwort automatisch einzugeben, geben Sie das [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete)-Attribut an. Für Passwörter sollte dies typischerweise einer der folgenden sein:

- `on`
  - : Erlaubt dem Browser oder einem Passwortmanager, das Passwortfeld automatisch auszufüllen. Dies ist nicht so informativ wie die Verwendung von `current-password` oder `new-password`.
- `off`
  - : Erlaubt dem Browser oder Passwortmanager nicht, das Passwortfeld automatisch auszufüllen. Beachten Sie, dass einige Software diesen Wert ignoriert, da er typischerweise der Fähigkeit der Benutzer schadet, sichere Passwortpraktiken zu pflegen.
- `current-password`
  - : Erlaubt dem Browser oder Passwortmanager, das aktuelle Passwort für die Seite einzugeben. Dies bietet mehr Information als `on`, da es dem Browser oder Passwortmanager erlaubt, das derzeit bekannte Passwort der Seite automatisch in das Feld einzugeben, jedoch kein neues vorzuschlagen.
- `new-password`
  - : Erlaubt dem Browser oder Passwortmanager, ein neues Passwort für die Seite automatisch einzugeben; dies wird auf "Ändern Sie Ihr Passwort"- und "Neue Benutzer"-Formularen auf dem Feld verwendet, das den Benutzer nach einem neuen Passwort fragt. Das neue Passwort kann auf verschiedene Weise generiert werden, abhängig vom verwendeten Passwortmanager. Es kann ein neues vorgeschlagenes Passwort ausfüllen oder dem Benutzer eine Oberfläche zum Erstellen eines geben.

```html
<label for="userPassword">Password:</label>
<input id="userPassword" type="password" autocomplete="current-password" />
```

{{EmbedLiveSample("Allowing_autocomplete", 600, 40)}}

### Passwort obligatorisch machen

Um dem Browser des Benutzers mitzuteilen, dass das Passwortfeld einen gültigen Wert haben muss, bevor das Formular abgeschickt werden kann, geben Sie das Boolean-Attribut [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) an.

```html
<label for="userPassword">Password: </label>
<input id="userPassword" type="password" required />
<input type="submit" value="Submit" />
```

{{EmbedLiveSample("Making_the_password_mandatory", 600, 40)}}

### Eingabemodus festlegen

Wenn Ihre empfohlenen (oder erforderlichen) Passwortsyntaxregeln von einer alternativen Texteingabeschnittstelle als der Standardtastatur profitieren würden, können Sie das [`inputmode`](/de/docs/Web/HTML/Reference/Elements/input#inputmode)-Attribut verwenden, um eine bestimmte anzufordern. Der offensichtlichste Anwendungsfall hierfür ist, wenn das Passwort numerisch sein muss (wie eine PIN). Mobile Geräte mit virtuellen Tastaturen, zum Beispiel, könnten daraufhin zu einem numerischen Tastenfeld-Layout wechseln anstatt einer vollständigen Tastatur, um das Eingeben des Passworts zu erleichtern. Wenn die PIN nur einmal verwendet werden soll, setzen Sie das [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete)-Attribut auf entweder `off` oder `one-time-code`, um vorzuschlagen, dass es nicht gespeichert wird.

```html
<label for="pin">PIN: </label>
<input id="pin" type="password" inputmode="numeric" />
```

{{EmbedLiveSample("Specifying_an_input_mode", 600, 40)}}

### Längenvorgaben setzen

Wie üblich können Sie die [`minlength`](/de/docs/Web/HTML/Reference/Elements/input#minlength)- und [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength)-Attribute verwenden, um minimale und maximale akzeptable Längen für das Passwort festzulegen. Dieses Beispiel erweitert das vorherige um die Anforderung, dass die Benutzer-PIN mindestens vier und höchstens acht Ziffern umfassen muss. Das [`size`](/de/docs/Web/HTML/Reference/Elements/input#size)-Attribut wird verwendet, um sicherzustellen, dass das Passworteingabewerkzeug acht Zeichen breit ist.

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

Wie bei anderen Texteingabewerkzeugen können Sie die [`select()`](/de/docs/Web/API/HTMLInputElement/select)-Methode verwenden, um den gesamten Text im Passwortfeld auszuwählen.

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

Sie können auch [`selectionStart`](/de/docs/Web/API/HTMLInputElement/selectionStart) und [`selectionEnd`](/de/docs/Web/API/HTMLInputElement/selectionEnd) verwenden, um den Bereich der aktuell im Steuerelement ausgewählten Zeichen zu bestimmen (oder setzen) und [`selectionDirection`](/de/docs/Web/API/HTMLInputElement/selectionDirection), um zu wissen, in welche Richtung die Auswahl erfolgte (oder erweitert wird, je nach Ihrer Plattform; siehe deren Dokumentation für eine Erklärung). Allerdings ist der Nutzen dieser Eigenschaften, da der Text verschleiert ist, eher begrenzt.

## Validierung

Falls Ihre Anwendung Zeichensatzbeschränkungen oder andere Anforderungen an den tatsächlichen Inhalt des eingegebenen Passworts hat, können Sie das [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern)-Attribut verwenden, um einen regulären Ausdruck festzulegen, der automatisch sicherstellt, dass Ihre Passwörter diesen Anforderungen entsprechen.

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

Dieses Beispiel akzeptiert nur Eingaben, die dem Format einer [gültigen US-amerikanischen Sozialversicherungsnummer](https://en.wikipedia.org/wiki/Social_Security_number#Structure) entsprechen. Diese Nummern, die in den USA für Steuer- und Identifikationszwecke verwendet werden, haben die Form "123-45-6789". Es gibt verschiedene Regeln dafür, welche Werte in jeder Gruppe erlaubt sind.

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

Hier wird ein [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern) verwendet, das den eingegebenen Wert auf Zeichenfolgen beschränkt, die legale Sozialversicherungsnummern darstellen. Natürlich garantiert dieser reguläre Ausdruck keine gültige SSN (da wir keinen Zugriff auf die Datenbank der Social Security Administration haben), aber er stellt sicher, dass die Nummer eine sein könnte; er vermeidet im Allgemeinen Werte, die nicht gültig sein können. Darüber hinaus ermöglicht er, dass die drei Zahlengruppen durch ein Leerzeichen, ein Minuszeichen ("-") oder nichts getrennt werden.

Das [`inputmode`](/de/docs/Web/HTML/Reference/Elements/input#inputmode) ist auf `numeric` gesetzt, um Geräte mit virtuellen Tastaturen dazu zu ermutigen, auf eine numerische Tastaturanzeige für einfachere Eingabe umzuschalten. Die [`minlength`](/de/docs/Web/HTML/Reference/Elements/input#minlength)- und [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength)-Attribute sind auf 9 bzw. 12 gesetzt, um zu verlangen, dass der Wert mindestens neun und höchstens zwölf Zeichen lang ist (die ersten ohne Trennzeichen zwischen den Gruppen von Ziffern und die letzteren mit ihnen). Das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut wird verwendet, um anzuzeigen, dass dieses Steuerelement einen Wert haben muss. Schließlich ist [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete) auf `off` gesetzt, um zu vermeiden, dass Passwortmanager und die Sitzungserstellungsfunktionen versuchen, seinen Wert zu setzen, da dies überhaupt kein Passwort ist.

#### JavaScript

Das JavaScript zeigt die eingegebene SSN auf dem Bildschirm an, damit Sie sie sehen können. Dies untergräbt den Zweck eines Passwortfeldes, hilft aber das `pattern` zu testen.

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
      <td><a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role">keine entsprechende Rolle</a></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
