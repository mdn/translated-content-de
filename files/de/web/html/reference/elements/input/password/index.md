---
title: '`<input type="password">` HTML-Attributwert'
short-title: <input type="password">
slug: Web/HTML/Reference/Elements/input/password
l10n:
  sourceCommit: bcb7d4dde9f0a43664c64587d9d70b8835286eb7
---

`<input>`-Elemente vom Typ **`password`** ermöglichen es Benutzern, ein Passwort geschützt einzugeben.

Das Element wird als einzeiliges Eingabefeld dargestellt, in dem der Text unkenntlich gemacht wird, damit er nicht gelesen werden kann. Üblicherweise wird dazu jedes Zeichen durch ein Symbol wie ein Sternchen („\*“) oder einen Punkt („•“) ersetzt. Welches Zeichen verwendet wird, hängt vom {{Glossary("user_agent", "User Agent")}} und vom Betriebssystem ab.

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

## Wert

Das Attribut [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) enthält eine Zeichenfolge mit dem aktuellen Inhalt des Eingabefelds für das Passwort. Wenn der Benutzer noch nichts eingegeben hat, ist dieser Wert eine leere Zeichenfolge (`""`). Ist die Eigenschaft [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) angegeben, muss das Passwortfeld einen Wert enthalten, der keine leere Zeichenfolge ist, um gültig zu sein.

Ist das Attribut [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern) angegeben, gilt der Inhalt eines `password`-Eingabefelds nur dann als gültig, wenn sein Wert die Validierung besteht. Weitere Informationen finden Sie unter [Validierung](#validierung).

> [!NOTE]
> Zeilenumbruchzeichen (U+000A) und Wagenrücklaufzeichen (U+000D) sind in einem `password`-Wert nicht zulässig. Beim Setzen des Werts eines Passwortfelds werden diese Zeichen aus dem Wert entfernt.

## Zusätzliche Attribute

Neben den [globalen Attributen](/de/docs/Web/HTML/Reference/Global_attributes) und den Attributen, die für alle {{HTMLElement("input")}}-Elemente unabhängig von ihrem Typ gelten, unterstützen Passwortfelder die folgenden Attribute.

> [!NOTE]
> Das globale Attribut [`autocorrect`](/de/docs/Web/HTML/Reference/Global_attributes/autocorrect) kann Passwortfeldern hinzugefügt werden; der gespeicherte Zustand ist jedoch immer `off`.

### maxlength

Die maximale Länge der Zeichenfolge, gemessen in {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}}, die ein Benutzer in das Passwortfeld eingeben kann. Der Wert muss eine ganze Zahl ab 0 sein. Wenn `maxlength` nicht angegeben ist oder einen ungültigen Wert hat, hat das Passwortfeld keine maximale Länge. Der Wert muss außerdem größer oder gleich dem Wert von `minlength` sein.

Die Eingabe besteht die [Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) nicht, wenn der eingegebene Text länger als `maxlength` {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}} ist. Die Constraint-Validierung wird nur angewendet, wenn der Benutzer den Wert ändert.

### minlength

Die minimale Länge der Zeichenfolge, gemessen in {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}}, die ein Benutzer in das Passwortfeld eingeben kann. Der Wert muss eine nicht negative ganze Zahl sein, die kleiner oder gleich dem durch `maxlength` festgelegten Wert ist. Wenn `minlength` nicht angegeben ist oder einen ungültigen Wert hat, hat das Passwortfeld keine minimale Länge.

Die Eingabe besteht die [Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) nicht, wenn der eingegebene Text kürzer als `minlength` {{Glossary("UTF-16", "UTF-16-Codeeinheiten")}} ist. Die Constraint-Validierung wird nur angewendet, wenn der Benutzer den Wert ändert.

### pattern

Das Attribut `pattern` ist, sofern angegeben, ein regulärer Ausdruck, mit dem [`value`](/de/docs/Web/HTML/Reference/Elements/input#value) übereinstimmen muss, damit der Wert die [Constraint-Validierung](/de/docs/Web/HTML/Guides/Constraint_validation) besteht. Es muss ein gültiger regulärer JavaScript-Ausdruck sein, wie er vom Typ {{jsxref("RegExp")}} verwendet und in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) beschrieben wird. Beim Kompilieren des regulären Ausdrucks wird das Flag `'u'` angegeben, sodass das Muster als Folge von Unicode-Codepunkten statt als {{Glossary("ASCII", "ASCII")}} behandelt wird. Der Mustertext darf nicht von Schrägstrichen umgeben sein.

Wenn kein Muster angegeben oder das angegebene Muster ungültig ist, wird kein regulärer Ausdruck angewendet und das Attribut vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das Attribut [`title`](/de/docs/Web/HTML/Reference/Elements/input#title), um einen Text anzugeben, den die meisten Browser als Tooltip anzeigen und der die Anforderungen an das Muster erklärt. Fügen Sie außerdem einen erläuternden Text in der Nähe hinzu.

Die Verwendung eines Musters für Passwortfelder wird dringend empfohlen. So können Sie dazu beitragen, dass Ihre Benutzer gültige Passwörter mit einer breiten Auswahl an Zeichenklassen wählen und verwenden. Mit einem Muster können Sie Regeln für die Groß- und Kleinschreibung festlegen, eine bestimmte Anzahl von Ziffern und/oder Satzzeichen verlangen und weitere Anforderungen definieren. Einzelheiten und ein Beispiel finden Sie unter [Validierung](#validierung).

### placeholder

Das Attribut `placeholder` ist eine Zeichenfolge, die dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Information im Feld erwartet wird. Es sollte sich um ein Wort oder einen kurzen Ausdruck handeln, der die erwartete Datenart veranschaulicht, nicht um eine ausführliche Erklärung. Der Text darf _keine_ Wagenrücklauf- oder Zeilenumbruchzeichen enthalten.

Wenn der Inhalt des Eingabefelds eine Schreibrichtung hat ({{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}), der Platzhalter aber in der entgegengesetzten Richtung dargestellt werden soll, können Sie Unicode-Formatierungszeichen für den bidirektionalen Algorithmus verwenden, um die Schreibrichtung innerhalb des Platzhalters zu überschreiben. Weitere Informationen finden Sie unter [Unicode-Steuerzeichen für bidirektionalen Text verwenden](https://www.w3.org/International/questions/qa-bidi-unicode-controls).

> [!NOTE]
> Vermeiden Sie nach Möglichkeit das Attribut `placeholder`. Es ist semantisch weniger hilfreich als andere Möglichkeiten, Ihr Formular zu erläutern, und kann unerwartete technische Probleme mit Ihren Inhalten verursachen. Weitere Informationen finden Sie unter [Beschriftungen für `<input>`](/de/docs/Web/HTML/Reference/Elements/input#labels).

### readonly

Ein boolesches Attribut, das angibt, dass der Benutzer dieses Feld nicht bearbeiten kann. Sein `value` kann jedoch weiterhin durch JavaScript-Code geändert werden, der die Eigenschaft [`HTMLInputElement.value`](/de/docs/Web/API/HTMLInputElement) direkt setzt.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert enthalten muss, hat `required` bei Eingabefeldern, für die auch das Attribut `readonly` angegeben ist, keine Wirkung.

### size

Das Attribut `size` ist ein numerischer Wert, der angibt, wie viele Zeichen breit das Eingabefeld sein soll. Der Wert muss größer als null sein; der Standardwert ist 20. Da Zeichen unterschiedlich breit sind, ist die Breite nicht unbedingt exakt und sollte auch nicht als exakt vorausgesetzt werden. Je nach Zeichen und Schriftart (den verwendeten {{cssxref("font")}}-Einstellungen) kann das resultierende Eingabefeld schmaler oder breiter als die angegebene Anzahl von Zeichen sein.

Dadurch wird _nicht_ begrenzt, wie viele Zeichen der Benutzer in das Feld eingeben kann. Das Attribut gibt nur ungefähr an, wie viele Zeichen gleichzeitig sichtbar sind. Verwenden Sie das Attribut [`maxlength`](#maxlength), um die Länge der Eingabedaten nach oben zu begrenzen.

## Passwortfelder verwenden

Passwortfelder funktionieren im Allgemeinen wie andere Texteingabefelder. Der wesentliche Unterschied besteht darin, dass ihr Inhalt unkenntlich gemacht wird, damit Personen in der Nähe des Benutzers das Passwort nicht lesen können.

Das genaue Verhalten bei der Eingabe kann sich von Browser zu Browser unterscheiden. Manche Browser zeigen ein eingegebenes Zeichen kurz an, bevor sie es verbergen. Andere ermöglichen es dem Benutzer, die Klartextanzeige ein- und auszuschalten. Beide Ansätze helfen Benutzern zu überprüfen, ob sie das beabsichtigte Passwort eingegeben haben – was insbesondere auf Mobilgeräten schwierig sein kann.

> [!NOTE]
> Formulare mit vertraulichen Informationen wie Passwörtern (etwa Anmeldeformulare) sollten über HTTPS bereitgestellt werden.
> Viele Browser verfügen inzwischen über Mechanismen, die vor unsicheren Anmeldeformularen warnen.

### Ein einfaches Passwortfeld

Hier sehen Sie ein einfaches Passwortfeld mit einer Beschriftung, die über das Element {{HTMLElement("label")}} zugeordnet wird.

```html
<label for="userPassword">Password: </label>
<input id="userPassword" type="password" />
```

{{EmbedLiveSample("A_basic_password_input", 600, 40)}}

### Autovervollständigung zulassen

Geben Sie das Attribut [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete) an, damit der Passwortmanager des Benutzers das Passwort automatisch eintragen kann. Für Passwörter sollte es üblicherweise einen der folgenden Werte haben:

- `on`
  - : Erlaubt dem Browser oder einem Passwortmanager, das Passwortfeld automatisch auszufüllen. Dieser Wert ist weniger aussagekräftig als `current-password` oder `new-password`.
- `off`
  - : Untersagt dem Browser oder Passwortmanager, das Passwortfeld automatisch auszufüllen. Beachten Sie, dass manche Programme diesen Wert ignorieren, da er es Benutzern in der Regel erschwert, sichere Passwortpraktiken einzuhalten.
- `current-password`
  - : Erlaubt dem Browser oder Passwortmanager, das aktuelle Passwort für die Website einzutragen. Dieser Wert liefert mehr Informationen als `on`: Der Browser oder Passwortmanager kann ein bereits bekanntes aktuelles Passwort für die Website in das Feld eintragen, soll aber kein neues vorschlagen.
- `new-password`
  - : Erlaubt dem Browser oder Passwortmanager, automatisch ein neues Passwort für die Website einzutragen. Dieser Wert wird in Formularen zum Ändern des Passworts oder zum Registrieren neuer Benutzer für das Feld verwendet, in dem ein neues Passwort eingegeben werden soll. Je nach verwendetem Passwortmanager kann das neue Passwort auf unterschiedliche Weise erzeugt werden. Er kann ein neues Passwort vorschlagen und eintragen oder dem Benutzer eine Oberfläche zum Erstellen eines Passworts anzeigen.

```html
<label for="userPassword">Password:</label>
<input id="userPassword" type="password" autocomplete="current-password" />
```

{{EmbedLiveSample("Allowing_autocomplete", 600, 40)}}

### Das Passwort als Pflichtangabe festlegen

Geben Sie das boolesche Attribut [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) an, um dem Browser des Benutzers mitzuteilen, dass das Passwortfeld einen gültigen Wert enthalten muss, bevor das Formular gesendet werden kann.

```html
<label for="userPassword">Password: </label>
<input id="userPassword" type="password" required />
<input type="submit" value="Submit" />
```

{{EmbedLiveSample("Making_the_password_mandatory", 600, 40)}}

### Einen Eingabemodus festlegen

Wenn sich Ihre empfohlenen oder vorgeschriebenen Syntaxregeln für Passwörter mit einer anderen Texteingabeoberfläche als der Standardtastatur leichter erfüllen lassen, können Sie mit dem Attribut [`inputmode`](/de/docs/Web/HTML/Reference/Elements/input#inputmode) eine bestimmte Oberfläche anfordern. Ein naheliegender Anwendungsfall ist ein Passwort, das nur aus Ziffern bestehen darf, beispielsweise eine PIN. Mobilgeräte mit virtuellen Tastaturen können dann etwa zu einem numerischen Tastenfeld statt einer vollständigen Tastatur wechseln, um die Eingabe zu erleichtern. Wenn die PIN nur einmal verwendet werden soll, setzen Sie das Attribut [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete) auf `off` oder `one-time-code`, um anzugeben, dass sie nicht gespeichert werden soll.

```html
<label for="pin">PIN: </label>
<input id="pin" type="password" inputmode="numeric" />
```

{{EmbedLiveSample("Specifying_an_input_mode", 600, 40)}}

### Anforderungen an die Länge festlegen

Wie üblich können Sie mit den Attributen [`minlength`](/de/docs/Web/HTML/Reference/Elements/input#minlength) und [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength) die zulässige Mindest- und Höchstlänge des Passworts festlegen. Dieses Beispiel erweitert das vorherige und legt fest, dass die PIN des Benutzers aus mindestens vier und höchstens acht Ziffern bestehen muss. Mit dem Attribut [`size`](/de/docs/Web/HTML/Reference/Elements/input#size) wird festgelegt, dass das Passwortfeld acht Zeichen breit sein soll.

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

Wie bei anderen Texteingabefeldern können Sie mit der Methode [`select()`](/de/docs/Web/API/HTMLInputElement/select) den gesamten Text im Passwortfeld auswählen.

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

Mit [`selectionStart`](/de/docs/Web/API/HTMLInputElement/selectionStart) und [`selectionEnd`](/de/docs/Web/API/HTMLInputElement/selectionEnd) können Sie außerdem ermitteln oder festlegen, welcher Zeichenbereich im Eingabefeld gerade ausgewählt ist. Mit [`selectionDirection`](/de/docs/Web/API/HTMLInputElement/selectionDirection) können Sie feststellen, in welche Richtung die Auswahl erfolgte oder – abhängig von Ihrer Plattform – erweitert wird. Eine Erklärung finden Sie in der Dokumentation dieser Eigenschaft. Da der Text jedoch unkenntlich gemacht ist, ist der Nutzen dieser Eigenschaften etwas eingeschränkt.

## Validierung

Wenn Ihre Anwendung Einschränkungen für den Zeichensatz oder andere Anforderungen an den tatsächlichen Inhalt des eingegebenen Passworts hat, können Sie mit dem Attribut [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern) einen regulären Ausdruck festlegen. Damit wird automatisch geprüft, ob die Passwörter diese Anforderungen erfüllen.

In diesem Beispiel sind nur Werte gültig, die aus mindestens vier und höchstens acht Hexadezimalziffern bestehen.

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

### Eine US-Sozialversicherungsnummer abfragen

Dieses Beispiel akzeptiert nur Eingaben, die dem Format einer [gültigen US-amerikanischen Sozialversicherungsnummer](https://en.wikipedia.org/wiki/Social_Security_number#Structure) entsprechen. Diese Nummern werden in den USA für Steuer- und Identifikationszwecke verwendet und haben die Form „123-45-6789“. Darüber hinaus gelten verschiedene Regeln dafür, welche Werte in den einzelnen Gruppen zulässig sind.

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

Hier wird ein [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern) verwendet, das den eingegebenen Wert auf Zeichenfolgen beschränkt, die zulässige Sozialversicherungsnummern darstellen können. Dieser reguläre Ausdruck garantiert natürlich nicht, dass eine SSN gültig ist, da kein Zugriff auf die Datenbank der Social Security Administration besteht. Er stellt aber sicher, dass die Nummer gültig sein könnte, und schließt im Allgemeinen Werte aus, die nicht gültig sein können. Außerdem erlaubt er, die drei Zifferngruppen durch ein Leerzeichen oder einen Bindestrich („-“) zu trennen oder sie ohne Trennzeichen einzugeben.

[`inputmode`](/de/docs/Web/HTML/Reference/Elements/input#inputmode) ist auf `numeric` gesetzt, damit Geräte mit virtueller Tastatur für eine einfachere Eingabe zu einem numerischen Tastenfeld wechseln können. Die Attribute [`minlength`](/de/docs/Web/HTML/Reference/Elements/input#minlength) und [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength) sind auf 9 beziehungsweise 12 gesetzt. Damit muss der Wert mindestens neun und darf höchstens zwölf Zeichen lang sein – ohne Trennzeichen zwischen den Zifferngruppen im ersten Fall und mit Trennzeichen im zweiten. Das Attribut [`required`](/de/docs/Web/HTML/Reference/Elements/input#required) gibt an, dass dieses Eingabefeld einen Wert enthalten muss. Schließlich ist [`autocomplete`](/de/docs/Web/HTML/Reference/Elements/input#autocomplete) auf `off` gesetzt, damit Passwortmanager und Funktionen zur Wiederherstellung von Sitzungen nicht versuchen, den Wert einzutragen: Schließlich handelt es sich nicht um ein Passwort.

#### JavaScript

Das JavaScript zeigt die eingegebene SSN auf dem Bildschirm an, damit Sie sie sehen können. Das widerspricht zwar dem Zweck eines Passwortfelds, erleichtert aber das Experimentieren mit `pattern`.

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
        Eine Zeichenfolge, die ein Passwort darstellt, oder eine leere Zeichenfolge
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
      <td><strong>Implizite ARIA-Rolle</strong></td>
      <td><a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role">keine entsprechende Rolle</a></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
