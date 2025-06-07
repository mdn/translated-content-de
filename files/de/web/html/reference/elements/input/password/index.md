---
title: <input type="password">
slug: Web/HTML/Reference/Elements/input/password
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

{{HTMLSidebar}}

`<input>`-Elemente vom Typ **`password`** bieten eine Möglichkeit, dem Benutzer das sichere Eingeben eines Passworts zu ermöglichen.

Das Element wird als einzeiliger Klartext-Editor-Steuerelement dargestellt, bei dem der Text so verdeckt wird, dass er nicht gelesen werden kann, normalerweise indem jedes Zeichen durch ein Symbol wie das Sternchen ("\*") oder einen Punkt ("•") ersetzt wird. Dieses Zeichen variiert je nach {{Glossary("user_agent", "Benutzeragent")}} und Betriebssystem.

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

Das genaue Verhalten des Eingabeprozesses kann von Browser zu Browser variieren. Einige Browser zeigen das eingegebene Zeichen für einen Moment, bevor es verdeckt wird, während andere dem Benutzer erlauben, die Anzeige des Klartexts ein- und auszuschalten. Beide Ansätze helfen einem Benutzer zu überprüfen, ob er das beabsichtigte Passwort eingegeben hat, was auf mobilen Geräten besonders schwierig sein kann.

> [!NOTE]
> Alle Formulare, die sensible Informationen wie Passwörter beinhalten (wie Anmeldeformulare), sollten über HTTPS bereitgestellt werden. Viele Browser implementieren mittlerweile Mechanismen, um vor unsicheren Anmeldeformularen zu warnen; siehe [Unsichere Passwörter](/de/docs/Web/Security/Insecure_passwords).

## Wert

Das [`value`](/de/docs/Web/HTML/Reference/Elements/input#value)-Attribut enthält eine Zeichenfolge, deren Wert der aktuelle Inhalt des zur Passworteingabe verwendeten Textbearbeitungskontrollfelds ist. Wenn der Benutzer noch nichts eingegeben hat, ist dieser Wert eine leere Zeichenfolge (`""`). Wenn die [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Eigenschaft angegeben ist, muss das Passwort-Eingabefeld einen Wert enthalten, der nicht leer ist, um gültig zu sein.

Wenn das [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern)-Attribut angegeben ist, gilt der Inhalt eines `password`-Steuerelements nur dann als gültig, wenn der Wert die Überprüfung besteht; siehe [Validierung](#validierung) für mehr Informationen.

> [!NOTE]
> Die Zeichen für Zeilenumbruch (U+000A) und Wagenrücklauf (U+000D) sind in einem `password`-Wert nicht zulässig. Beim Festlegen des Wertes eines Passwort-Steuerelements werden Zeilenumbruch- und Wagenrücklaufzeichen aus dem Wert entfernt.

## Zusätzliche Attribute

Zusätzlich zu den [globalen Attributen](/de/docs/Web/HTML/Reference/Global_attributes) und den Attributen, die für alle {{HTMLElement("input")}}-Elemente unabhängig von ihrem Typ gelten, unterstützen Passwort-Feld-Eingaben die folgenden Attribute.

> [!NOTE]
> Das globale Attribut [`autocorrect`](/de/docs/Web/HTML/Reference/Global_attributes/autocorrect) kann zu Passwort-Eingaben hinzugefügt werden, der gespeicherte Zustand ist jedoch immer `off`.

### maxlength

Die maximale Zeichenlänge (gemessen in UTF-16 Code-Einheiten), die der Benutzer in das Passwort-Feld eingeben kann. Dies muss ein ganzzahliger Wert von 0 oder höher sein. Wenn `maxlength` nicht angegeben ist oder ein ungültiger Wert spezifiziert ist, hat das Passwort-Feld keine maximale Länge. Dieser Wert muss außerdem größer oder gleich dem Wert von `minlength` sein.

Die Eingabe wird die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/ Constraint_validation) nicht bestehen, wenn die Länge des in das Feld eingegebenen Textes länger ist als `maxlength` UTF-16 Code-Einheiten. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert durch den Benutzer geändert wird.

### minlength

Die minimale Zeichenlänge (gemessen in UTF-16 Code-Einheiten), die der Benutzer in das Passwort-Eingabefeld eingeben kann. Dies muss ein wertpositiver Ganzzahlenwert sein, der kleiner oder gleich dem von `maxlength` angegebenen Wert ist. Wenn `minlength` nicht angegeben ist oder ein ungültiger Wert spezifiziert ist, hat die Passwort-Eingabe keine Mindestlänge.

Die Eingabe wird die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) nicht bestehen, wenn die Länge des in das Feld eingegebenen Textes kürzer ist als `minlength` UTF-16 Code-Einheiten. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert durch den Benutzer geändert wird.

### pattern

Das `pattern`-Attribut, wenn angegeben, ist ein regulärer Ausdruck, den der [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) der Eingabe bestehen muss, um die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) zu bestehen. Es muss ein gültiger JavaScript-Regulärausdruck sein, wie er vom {{jsxref("RegExp")}}-Typ verwendet wird und in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert ist; das `u`-Flag ist beim Kompilieren des regulären Ausdrucks angegeben, sodass das Muster als Folge von Unicode-Codespunkten behandelt wird, anstatt als {{Glossary("ASCII", "ASCII")}}. Es sollten keine Schrägstriche um den Mustertest angegeben werden.

Wenn das angegebene Muster nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut komplett ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Reference/Elements/input#title)-Attribut, um Text anzugeben, den die meisten Browser als Tooltip zur Erklärung der Anforderungen zur Übereinstimmung mit dem Muster anzeigen. Sie sollten auch andere erläuternde Texte in der Nähe einfügen.

Die Verwendung eines Musters wird für Passwort-Eingaben dringend empfohlen, um sicherzustellen, dass gültige Passwörter mit einer Vielzahl von Zeichenklassen ausgewählt und von Ihren Benutzern verwendet werden. Mit einem Muster können Sie Groß-/Kleinschreibungsregeln vorschreiben, die Verwendung einer bestimmten Anzahl von Ziffern und/oder Satzzeichen erfordern usw. Einzelheiten und ein Beispiel finden Sie im Abschnitt [Validierung](#validierung).

### placeholder

Das `placeholder`-Attribut ist eine Zeichenfolge, die dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Informationen in dem Feld erwartet werden. Es sollte ein Wort oder ein kurzer Satz sein, der den erwarteten Datentyp zeigt, anstatt einer erklärenden Nachricht. Der Text _darf_ keine Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt der Steuerung eine Richtung ({{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}) hat, der Platzhalter jedoch in der entgegengesetzten Richtung präsentiert werden muss, können Sie Unicode-Algorithmus-Formatierungszeichen für bidirektionalen Text innerhalb des Platzhalters verwenden, um die Richtung zu überschreiben; siehe [Wie man Unicode-Steuerelemente für bidirektionalen Text verwendet](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für mehr Informationen.

> [!NOTE]
> Vermeiden Sie, das `placeholder`-Attribut zu verwenden, wenn möglich. Es ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Weitere Informationen finden Sie in [`<input>`-Labels](/de/docs/Web/HTML/Reference/Elements/input#labels).

### readonly

Ein Boolean-Attribut, das, wenn es vorhanden ist, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch weiterhin über JavaScript-Code geändert werden, der den Wert der [`HTMLInputElement.value`](/de/docs/Web/API/HTMLInputElement)-Eigenschaft direkt setzt.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Wirkung auf Eingaben mit dem ebenfalls spezifizierten `readonly`-Attribut.

### size

Das `size`-Attribut ist ein numerischer Wert, der angibt, wie viele Zeichen breit das Eingabefeld sein sollte. Der Wert muss eine Zahl größer als null sein, und der Standardwert ist 20. Da Zeichenbreiten variieren, kann dies genauer oder ungenauer sein und sollte nicht darauf vertraut werden; das resultierende Eingabefeld kann schmaler oder breiter sein als die angegebene Anzahl von Zeichen, abhängig von den Zeichen und der Verwendung von Schriftart-Einstellungen ({{cssxref("font")}}).

Dies setzt _keine_ Grenze für die Anzahl der Zeichen, die der Benutzer in das Feld eingeben kann. Es gibt nur ungefähr an, wie viele auf einmal gesehen werden können. Um eine obere Grenze für die Länge der Eingabedaten festzulegen, verwenden Sie das [`maxlength`](#maxlength)-Attribut.

## Verwendung von Passwort-Eingaben

Passwort-Eingabefelder funktionieren im Allgemeinen genau wie andere textuelle Eingabefelder; der Hauptunterschied besteht darin, dass der Inhalt verdeckt wird, um zu verhindern, dass Personen in der Nähe des Benutzers das Passwort lesen können.

### Eine einfache Passwort-Eingabe

Hier sehen wir die einfachste Passwort-Eingabe, mit einem über das {{HTMLElement("label")}}-Element erstellten Label.

```html
<label for="userPassword">Password: </label>
<input id="userPassword" type="password" />
```

{{EmbedLiveSample("A_basic_password_input", 600, 40)}}

### Automatisches Ausfüllen erlauben

Um dem Passwort-Manager des Benutzers zu erlauben, das Passwort automatisch einzugeben, geben Sie das [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete)-Attribut an. Für Passwörter sollte dies typischerweise eine der folgenden sein:

- `on`
  - : Dem Browser oder einem Passwort-Manager erlauben, das Passwort-Feld automatisch auszufüllen. Dies ist nicht so informativ wie die Verwendung von entweder `current-password` oder `new-password`.
- `off`
  - : Dem Browser oder Passwort-Manager nicht erlauben, das Passwort-Feld automatisch auszufüllen. Beachten Sie, dass einige Software diesen Wert ignoriert, da er typischerweise schädlich für die Fähigkeit der Benutzer ist, sichere Passwortpraktiken einzuhalten.
- `current-password`
  - : Dem Browser oder Passwort-Manager erlauben, das aktuelle Passwort für die Seite einzugeben. Dies bietet mehr Informationen als `on`, da es dem Browser oder Passwort-Manager ermöglicht, das derzeit bekannte Passwort für die Seite automatisch in das Feld einzutragen, aber kein neues vorzuschlagen.
- `new-password`
  - : Dem Browser oder Passwort-Manager erlauben, ein neues Passwort für die Seite automatisch einzugeben; dies wird bei „Passwort ändern“- und „Neuer Benutzer“-Formularen verwendet, in dem Feld, das vom Benutzer ein neues Passwort verlangt. Das neue Passwort kann auf verschiedene Weise generiert werden, je nach verwendetem Passwort-Manager. Es kann ein neues vorgeschlagenes Passwort einfüllen, oder es könnte dem Benutzer eine Schnittstelle zum Erstellen zeigen.

```html
<label for="userPassword">Password:</label>
<input id="userPassword" type="password" autocomplete="current-password" />
```

{{EmbedLiveSample("Allowing_autocomplete", 600, 40)}}

### Das Passwort verpflichtend machen

Um dem Browser des Benutzers mitzuteilen, dass das Passwortfeld einen gültigen Wert haben muss, bevor das Formular abgeschickt werden kann, geben Sie das Boolean-Attribut [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) an.

```html
<label for="userPassword">Password: </label>
<input id="userPassword" type="password" required />
<input type="submit" value="Submit" />
```

{{EmbedLiveSample("Making_the_password_mandatory", 600, 40)}}

### Einen Eingabemodus angeben

Wenn Ihre empfohlenen (oder erforderlichen) Passwortsyntax-Regeln von einer anderen Texteintrittsschnittstelle als der Standardtastatur profitieren würden, können Sie das [`inputmode`](/de/docs/Web/HTML/Reference/Elements/input#inputmode)-Attribut verwenden, um eine spezielle anzufordern. Der offensichtlichste Anwendungsfall hierfür ist, wenn das Passwort numerisch sein muss (z.B. eine PIN). Mobile Geräte mit virtuellen Tastaturen könnten beispielsweise zu einem Zahlenblock-Layout wechseln anstatt einer vollständigen Tastatur, um das Eintragen des Passworts zu erleichtern. Wenn die PIN nur einmal verwendbar ist, setzen Sie das [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete)-Attribut auf entweder `off` oder `one-time-code`, um anzugeben, dass es nicht gespeichert wird.

```html
<label for="pin">PIN: </label>
<input id="pin" type="password" inputmode="numeric" />
```

{{EmbedLiveSample("Specifying_an_input_mode", 600, 40)}}

### Festlegen von Längenanforderungen

Wie üblich können Sie die Attribute [`minlength`](/de/docs/Web/HTML/Reference/Elements/input#minlength) und [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength) verwenden, um minimale und maximale akzeptable Längen für das Passwort festzulegen. Dieses Beispiel erweitert das vorhergehende durch die Angabe, dass die PIN des Benutzers mindestens vier und höchstens acht Ziffern haben muss. Das [`size`](/de/docs/Web/HTML/Reference/Elements/input#size)-Attribut wird verwendet, um sicherzustellen, dass die Passwort-Eingabekontrolle acht Zeichen breit ist.

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

Wie bei anderen Text-Eingabekontrollen können Sie die [`select()`](/de/docs/Web/API/HTMLInputElement/select)-Methode verwenden, um den gesamten Text im Passwort-Feld auszuwählen.

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

Sie können auch [`selectionStart`](/de/docs/Web/API/HTMLInputElement/selectionStart) und [`selectionEnd`](/de/docs/Web/API/HTMLInputElement/selectionEnd) verwenden, um zu erfahren (oder festzulegen), welcher Zeichenbereich im Steuerelement gerade ausgewählt ist, und [`selectionDirection`](/de/docs/Web/API/HTMLInputElement/selectionDirection), um zu wissen, in welche Richtung die Auswahl erfolgt ist (oder erweitert wird, je nach Plattform; siehe deren Dokumentation für eine Erklärung). Da der Text jedoch verdeckt ist, ist der Nutzen dieser Funktionen etwas begrenzt.

## Validierung

Wenn Ihre Anwendung Zeichensatzbeschränkungen oder sonstige Anforderungen an den tatsächlichen Inhalt des eingegebenen Passworts hat, können Sie das [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern)-Attribut verwenden, um einen regulären Ausdruck festzulegen, mit dem Ihre Passwörter diese Anforderungen automatisiert erfüllen.

In diesem Beispiel sind nur Werte gültig, die aus mindestens vier und nicht mehr als acht hexadezimalen Ziffern bestehen.

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

### Eine Sozialversicherungsnummer anfragen

Dieses Beispiel akzeptiert nur Eingaben, die dem Format einer [gültigen Sozialversicherungsnummer der Vereinigten Staaten](https://en.wikipedia.org/wiki/Social_Security_number#Structure) entsprechen. Diese Nummern, die in den USA für Steuer- und Identifikationszwecke verwendet werden, haben das Format "123-45-6789". Es existieren verschiedene Regeln, welche Werte in jeder Gruppe erlaubt sind.

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

Dies verwendet ein [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern), das den eingegebenen Wert auf Zeichenfolgen beschränkt, die legale Sozialversicherungsnummern darstellen. Offensichtlich garantiert dieser Reguläre Ausdruck nicht eine gültige SSN (da wir keinen Zugriff auf die Datenbank der Sozialversicherungsverwaltung haben), aber es stellt sicher, dass die Nummer eine sein könnte; es vermeidet im Allgemeinen Werte, die nicht gültig sein können. Zudem erlaubt es, dass die drei Gruppen von Ziffern durch Leerzeichen, einen Bindestrich ("-") oder nichts getrennt sind.

Das [`inputmode`](/de/docs/Web/HTML/Reference/Elements/input#inputmode) wird auf `numeric` gesetzt, um Geräte mit virtuellen Tastaturen dazu zu ermutigen, zu einem Zahlenblock-Layout für eine einfachere Eingabe zu wechseln. Die Attribute [`minlength`](/de/docs/Web/HTML/Reference/Elements/input#minlength) und [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength) sind auf 9 bzw. 12 gesetzt, um zu verlangen, dass der Wert mindestens neun und nicht mehr als 12 Zeichen lang ist (der erstere ohne Trennzeichen zwischen den Zifferngruppen und der letztere mit ihnen). Das [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut wird verwendet, um anzuzeigen, dass diese Steuerung einen Wert haben muss. Schließlich ist [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete) auf `off` gesetzt, um zu vermeiden, dass Passwort-Manager und Sitzungswiederherstellungsfunktionen versuchen, seinen Wert zu setzen, da dies überhaupt kein Passwort ist.

#### JavaScript

Das JavaScript zeigt die eingegebene SSN auf dem Bildschirm an, damit Sie sie sehen können. Dies widerspricht dem Zweck eines Passwort-Felds, aber es hilft, mit dem `pattern` zu experimentieren.

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
