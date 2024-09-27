---
title: <input type="password">
slug: Web/HTML/Element/input/password
l10n:
  sourceCommit: b7955e77cd4293adf45ef23686df50b0305f02ad
---

{{HTMLSidebar}}

`<input>`-Elemente vom Typ **`password`** bieten eine Möglichkeit, dass Benutzer ein Passwort sicher eingeben können.

Das Element wird als einzeiliges Plaintext-Editor-Steuerelement angezeigt, bei dem der Text unlesbar gemacht wird, indem z.B. jedes Zeichen durch ein Symbol wie ein Sternchen ("\*") oder einen Punkt ("•") ersetzt wird. Dieses Zeichen variiert je nach [Benutzeragent](/de/docs/Glossary/user_agent) und Betriebssystem.

{{EmbedInteractiveExample("pages/tabbed/input-password.html", "tabbed-standard")}}

Das genaue Verhalten des Eingabeprozesses kann je nach Browser variieren. Einige Browser zeigen das getippte Zeichen kurz an, bevor es unkenntlich gemacht wird, während andere dem Benutzer erlauben, die Anzeige von Klartext ein- und auszuschalten. Beide Ansätze helfen einem Benutzer sicherzustellen, dass er das beabsichtigte Passwort eingegeben hat, was besonders auf mobilen Geräten schwierig sein kann.

> [!NOTE]
> Alle Formulare, die sensible Informationen wie Passwörter beinhalten (z.B. Login-Formulare), sollten über HTTPS bereitgestellt werden. Viele Browser implementieren inzwischen Mechanismen, um vor unsicheren Login-Formularen zu warnen; siehe [Unsichere Passwörter](/de/docs/Web/Security/Insecure_passwords).

## Wert

Das Attribut [`value`](/de/docs/Web/HTML/Element/input#value) enthält eine Zeichenkette, deren Wert der aktuelle Inhalt der Texteingabesteuerung ist, die zur Passworteingabe verwendet wird. Wenn der Benutzer noch nichts eingegeben hat, ist dieser Wert eine leere Zeichenkette (`""`). Falls die Eigenschaft [`required`](/de/docs/Web/HTML/Element/input#required) angegeben ist, muss das Passwortbearbeitungsfeld einen Wert ungleich einer leeren Zeichenkette enthalten, um gültig zu sein.

Wenn das Attribut [`pattern`](/de/docs/Web/HTML/Element/input#pattern) angegeben ist, wird der Inhalt einer `password`-Steuerung nur als gültig betrachtet, wenn der Wert die Validierung besteht; siehe [Validierung](#validierung) für weitere Informationen.

> [!NOTE]
> Die Zeichen Zeilenumbruch (U+000A) und Wagenrücklauf (U+000D) sind in einem `password`-Wert nicht zulässig. Beim Festlegen des Werts einer Passwortsteuerung werden Zeilenumbruch- und Wagenrücklaufzeichen aus dem Wert entfernt.

## Zusätzliche Attribute

Zusätzlich zu den Attributen, die für alle {{HTMLElement("input")}}-Elemente unabhängig von ihrem Typ gelten, unterstützen Passwortfelder die folgenden Attribute.

### maxlength

Die maximale Zeichenlänge (gemessen in UTF-16-Codeeinheiten), die der Benutzer in das Passwortfeld eingeben kann. Dieser Wert muss eine ganze Zahl von 0 oder höher sein. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat das Passwortfeld keine maximale Länge. Dieser Wert muss außerdem größer oder gleich dem von `minlength` sein.

Die Eingabe schlägt bei der [Constraints-Validierung](/de/docs/Web/HTML/Constraint_validation) fehl, wenn die Länge des in das Feld eingegebenen Textes größer ist als `maxlength` UTF-16-Codeeinheiten. Die Constraints-Validierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### minlength

Die minimale Zeichenlänge (gemessen in UTF-16-Codeeinheiten), die der Benutzer in das Passworteingabefeld eingeben kann. Dieser Wert muss eine nicht-negative ganze Zahl sein, die kleiner oder gleich dem durch `maxlength` angegebenen Wert ist. Wenn kein `minlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat die Passworteingabe keine Mindestlänge.

Die Eingabe schlägt bei der [Constraints-Validierung](/de/docs/Web/HTML/Constraint_validation) fehl, wenn die Länge des in das Feld eingegebenen Textes weniger als `minlength` UTF-16-Codeeinheiten beträgt. Die Constraints-Validierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### pattern

Das Attribut `pattern`, wenn angegeben, ist ein regulärer Ausdruck, den der [`Wert`](/de/docs/Web/HTML/Element/input#value) des Eingabefeldes erfüllen muss, um die [Constraints-Validierung](/de/docs/Web/HTML/Constraint_validation) zu bestehen. Es muss ein gültiger JavaScript-Regulärer-Ausdruck sein, wie er vom {{jsxref("RegExp")}}-Typ verwendet wird, und wie in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert ist; das `'u'`-Flag wird beim Kompilieren des regulären Ausdrucks angegeben, so dass das Muster als eine Folge von Unicode-Codepunkten statt als [ASCII](/de/docs/Glossary/ASCII) behandelt wird. Um den Mustersatz sollten keine Schrägstriche angegeben werden.

Wenn das angegebene Muster nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut wird vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Element/input#title) Attribut, um einen Text anzugeben, den die meisten Browser als Tooltip anzeigen, um zu erklären, welche Anforderungen bestehen, um das Muster zu erfüllen. Sie sollten auch anderen erklärenden Text in der Nähe einfügen.

Die Verwendung eines Musters wird für Passwort-Eingabefelder dringend empfohlen, um sicherzustellen, dass gültige Passwörter mit einer Vielzahl von Zeichensätzen ausgewählt und von Ihren Benutzern verwendet werden. Mit einem Muster können Sie Groß- und Kleinschreibungsregeln vorschreiben, die Verwendung einer bestimmten Anzahl von Ziffern und/oder Satzzeichen erfordern usw. Siehe den Abschnitt [Validierung](#validierung) für Details und ein Beispiel.

### placeholder

Das `placeholder`-Attribut ist eine Zeichenkette, die dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Informationen im Feld erwartet werden. Es sollte ein Wort oder eine kurze Phrase sein, die den erwarteten Datentyp demonstriert, anstatt einer erklärenden Nachricht. Der Text _darf_ keine Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt der Steuerung eine Richtung ([LTR](/de/docs/Glossary/LTR) oder [RTL](/de/docs/Glossary/RTL)) hat, aber der Platzhalter in der entgegengesetzten Richtung angezeigt werden muss, können Sie Zeichen zur Formatierung des Unicode-Bidirektionalen-Algorithmus verwenden, um die Richtung innerhalb des Platzhalters zu überschreiben; siehe [Anleitung zur Verwendung von Unicode-Steuerelementen für Bidirektionalen-Text](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für weitere Informationen.

> [!NOTE]
> Vermeiden Sie, das `placeholder`-Attribut zu verwenden, wenn Sie können. Es ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Weitere Informationen finden Sie unter [`<input>`-Labels](/de/docs/Web/HTML/Element/input#labels).

### readonly

Ein boolesches Attribut, das, wenn vorhanden, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `Wert` kann jedoch weiterhin über JavaScript-Code geändert werden, der den Wert der [`HTMLInputElement.value`](/de/docs/Web/API/HTMLInputElement)-Eigenschaft direkt setzt.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Auswirkungen auf Eingaben, bei denen das `readonly`-Attribut auch angegeben ist.

### size

Das `size`-Attribut ist ein numerischer Wert, der angibt, wie viele Zeichen breit das Eingabefeld sein soll. Der Wert muss eine Zahl größer als null sein, und der Standardwert ist 20. Da Zeichenbreiten variieren, kann dies mehr oder weniger genau sein und sollte nicht unbedingt darauf vertraut werden; das resultierende Eingabefeld kann schmaler oder breiter als die angegebene Anzahl von Zeichen sein, abhängig von den Zeichen und der Schriftart ({{cssxref("font")}} Einstellungen in Verwendung).

Dies legt _keine_ Grenze dafür fest, wie viele Zeichen der Benutzer in das Feld eingeben kann. Es gibt nur an, wie viele ungefähr gleichzeitig gesehen werden können. Um eine Obergrenze für die Länge der Eingabedaten festzulegen, verwenden Sie das [`maxlength`](#maxlength)-Attribut.

## Verwendung von Passwort-Eingaben

Passworteingabefelder funktionieren im Allgemeinen wie andere Texteingabefelder; der Hauptunterschied ist die Verschleierung des Inhalts, um zu verhindern, dass Personen in der Nähe des Benutzers das Passwort lesen.

### Ein einfaches Passwort-Eingabefeld

Hier sehen wir die grundlegendste Passwort-Eingabe, mit einem Etikett, das das {{HTMLElement("label")}}-Element verwendet.

```html
<label for="userPassword">Password: </label>
<input id="userPassword" type="password" />
```

{{EmbedLiveSample("A_simple_password_input", 600, 40)}}

### Autovervollständigung erlauben

Um dem Passwort-Manager des Benutzers zu erlauben, das Passwort automatisch einzugeben, geben Sie das Attribut [`autocomplete`](/de/docs/Web/HTML/Element/input#autocomplete) an. Für Passwörter sollte dies typischerweise einer der folgenden Werte sein:

- `on`
  - : Erlaubt dem Browser oder einem Passwort-Manager, das Passwortfeld automatisch auszufüllen. Dies ist nicht so informativ wie die Verwendung von `current-password` oder `new-password`.
- `off`
  - : Verhindert, dass der Browser oder der Passwort-Manager das Passwortfeld automatisch ausfüllt. Beachten Sie, dass einige Software diesen Wert ignoriert, da dies typischerweise den Benutzern schadet, sichere Passwortpraktiken einzuhalten.
- `current-password`
  - : Erlaubt dem Browser oder Passwort-Manager, das aktuelle Passwort für die Website einzugeben. Dies gibt mehr Informationen als `on`, da es dem Browser oder Passwort-Manager ermöglicht, das derzeit bekannte Passwort für die Site automatisch in das Feld einzugeben, aber nicht, ein neues vorzuschlagen.
- `new-password`
  - : Erlaubt dem Browser oder Passwort-Manager, ein neues Passwort für die Site automatisch einzugeben; dies wird in "Passwort ändern" und "Neuer Benutzer"-Formularen auf dem Feld verwendet, das den Benutzer nach einem neuen Passwort fragt. Das neue Passwort kann auf verschiedene Arten generiert werden, abhängig vom verwendeten Passwort-Manager. Es kann ein neues vorgeschlagenes Passwort ausfüllen oder dem Benutzer eine Schnittstelle zum Erstellen eines anzuzeigen.

```html
<label for="userPassword">Password:</label>
<input id="userPassword" type="password" autocomplete="current-password" />
```

{{EmbedLiveSample("Allowing_autocomplete", 600, 40)}}

### Das Passwort obligatorisch machen

Um dem Browser des Benutzers mitzuteilen, dass das Passwortfeld einen gültigen Wert haben muss, bevor das Formular gesendet werden kann, geben Sie das boolesche Attribut [`required`](/de/docs/Web/HTML/Element/input#required) an.

```html
<label for="userPassword">Password: </label>
<input id="userPassword" type="password" required />
<input type="submit" value="Submit" />
```

{{EmbedLiveSample("Making_the_password_mandatory", 600, 40)}}

### Ein Eingabemodus spezifizieren

Wenn Ihre empfohlenen (oder erforderlichen) Passwortsyntaxregeln von einer anderen Texteingabeschnittstelle als der herkömmlichen Tastatur profitieren würden, können Sie das Attribut [`inputmode`](/de/docs/Web/HTML/Element/input#inputmode) verwenden, um eine bestimmte anzufordern. Der offensichtlichste Anwendungsfall hierfür ist, wenn das Passwort numerisch sein muss (wie bei einer PIN). Mobile Geräte mit virtuellen Tastaturen könnten zum Beispiel optisch zu einem numerischen Tastaturlayout wechseln, anstatt eine vollständige Tastatur anzuzeigen, um die Passworteingabe zu erleichtern. Wenn die PIN für Einmalverwendung ist, setzen Sie das Attribut [`autocomplete`](/de/docs/Web/HTML/Element/input#autocomplete) auf entweder `off` oder `one-time-code`, um darauf hinzuweisen, dass es nicht gespeichert wird.

```html
<label for="pin">PIN: </label>
<input id="pin" type="password" inputmode="numeric" />
```

{{EmbedLiveSample("Specifying_an_input_mode", 600, 40)}}

### Längenanforderungen festlegen

Wie gewohnt können Sie die Attribute [`minlength`](/de/docs/Web/HTML/Element/input#minlength) und [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength) verwenden, um minimale und maximale akzeptable Längen für das Passwort festzulegen. Dieses Beispiel erweitert das vorherige, indem es angibt, dass die PIN des Benutzers mindestens vier und höchstens acht Ziffern lang sein muss. Das Attribut [`size`](/de/docs/Web/HTML/Element/input#size) wird verwendet, um sicherzustellen, dass die Passwort-Eingabesteuerung acht Zeichen breit ist.

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

Wie bei anderen Texteingabesteuerungen können Sie mit der [`select()`](/de/docs/Web/API/HTMLInputElement/select)-Methode den gesamten Text im Passwortfeld auswählen.

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

Sie können auch [`selectionStart`](/de/docs/Web/API/HTMLInputElement/selectionStart) und [`selectionEnd`](/de/docs/Web/API/HTMLInputElement/selectionEnd) verwenden, um zu ermitteln (oder festzulegen), welcher Zeichensatz im Steuerelement derzeit ausgewählt ist, und [`selectionDirection`](/de/docs/Web/API/HTMLInputElement/selectionDirection), um zu wissen, in welche Richtung die Auswahl vorgenommen wurde (oder verlängert wird, je nach Plattform; siehe die Dokumentation für eine Erklärung). Da der Text jedoch verdeckt ist, ist der Nutzen dieser Funktionen etwas eingeschränkt.

## Validierung

Wenn Ihre Anwendung Zeichensatzbeschränkungen oder andere Anforderungen an den tatsächlichen Inhalt des eingegebenen Passworts hat, können Sie das [`pattern`](/de/docs/Web/HTML/Element/input#pattern)-Attribut verwenden, um einen regulären Ausdruck festzulegen, mit dem automatisch sichergestellt wird, dass Ihre Passwörter diese Anforderungen erfüllen.

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

In diesem Beispiel wird nur Eingabe akzeptiert, die dem Format einer [gültigen US-amerikanischen Sozialversicherungsnummer](https://en.wikipedia.org/wiki/Social_Security_number#Structure) entspricht. Diese Nummern, die in den USA zu Steuer- und Identifikationszwecken verwendet werden, haben das Format "123-45-6789". Es existieren verschiedene Regeln dafür, welche Werte in jeder Gruppe erlaubt sind.

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

Dies verwendet ein [`pattern`](/de/docs/Web/HTML/Element/input#pattern), das den eingegebenen Wert auf Zeichenfolgen beschränkt, die als legale Sozialversicherungsnummern dargestellt werden. Offensichtlich garantiert dieser reguläre Ausdruck keine gültige SSN (da wir keinen Zugriff auf die Datenbank der Sozialversicherungsverwaltung haben), aber es stellt sicher, dass die Nummer eine gültige sein könnte; es vermeidet im Allgemeinen Werte, die nicht gültig sein können. Zusätzlich erlaubt es, dass die drei Gruppen von Ziffern durch ein Leerzeichen, einen Bindestrich ("-") oder nichts getrennt sind.

Der [`inputmode`](/de/docs/Web/HTML/Element/input#inputmode) ist auf `numeric` gesetzt, um Geräte mit virtuellen Tastaturen dazu zu ermutigen, zu einem numerischen Tastaturlayout zu wechseln, um die Eingabe zu erleichtern. Die Attribute [`minlength`](/de/docs/Web/HTML/Element/input#minlength) und [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength) sind auf 9 und 12 gesetzt, um zu verlangen, dass der Wert mindestens neun und höchstens 12 Zeichen beträgt (ersteres ohne trennende Zeichen zwischen den Zifferngruppen und letzteres mit ihnen). Das Attribut [`required`](/de/docs/Web/HTML/Element/input#required) wird verwendet, um anzugeben, dass dieses Steuerelement einen Wert haben muss. Schließlich wird [`autocomplete`](/de/docs/Web/HTML/Element/input#autocomplete) auf `off` gesetzt, um zu vermeiden, dass Passwortmanager und Sitzungswiederherstellungsfunktionen versuchen, seinen Wert zu setzen, da dies überhaupt kein Passwort ist.

#### JavaScript

Dies ist nur ein einfacher Code, um die eingegebene SSN auf dem Bildschirm anzuzeigen, damit Sie sie sehen können. Natürlich wird damit der Zweck eines Passwortfeldes zunichte gemacht, aber es ist hilfreich, um mit dem `pattern` zu experimentieren.

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
        Eine Zeichenkette, die ein Passwort oder leer repräsentiert
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
      <td><strong>Methoden</strong></td>
      <td>
        [`select()`](/de/docs/Web/API/HTMLInputElement/select),
        [`setRangeText()`](/de/docs/Web/API/HTMLInputElement/setRangeText)
        und
        [`setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange)
      </td>
    </tr>
    <tr>
      <td><strong>Implizierte ARIA-Rolle</strong></td>
      <td><a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">keine entsprechende Rolle</a></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Kompatibilität von CSS-Eigenschaften](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
