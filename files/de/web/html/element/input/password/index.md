---
title: <input type="password">
slug: Web/HTML/Element/input/password
l10n:
  sourceCommit: f10015d1752d5668d8fe0de29f9d9807de475d58
---

{{HTMLSidebar}}

`<input>`-Elemente vom Typ **`password`** bieten eine Möglichkeit, dass der Benutzer ein Passwort sicher eingibt.

Das Element wird als einzeiliges Texteditor-Steuerelement dargestellt, in dem der Text verschleiert wird, sodass er nicht gelesen werden kann, normalerweise indem jedes Zeichen durch ein Symbol wie den Stern ("\*") oder einen Punkt ("•") ersetzt wird. Dieses Zeichen variiert abhängig vom {{Glossary("user_agent", "User-Agent")}} und Betriebssystem.

{{EmbedInteractiveExample("pages/tabbed/input-password.html", "tabbed-standard")}}

Das genaue Verhalten des Eingabeprozesses kann von Browser zu Browser unterschiedlich sein. Einige Browser zeigen das getippte Zeichen einen Moment lang an, bevor es verschleiert wird, während andere es dem Benutzer ermöglichen, die Anzeige von Klartext ein- und auszuschalten. Beide Ansätze helfen einem Benutzer, zu überprüfen, ob das beabsichtigte Passwort eingegeben wurde, was besonders auf mobilen Geräten schwierig sein kann.

> [!NOTE]
> Alle Formulare, die sensible Informationen wie Passwörter enthalten (wie Anmeldeformulare), sollten über HTTPS bereitgestellt werden. Viele Browser implementieren jetzt Mechanismen, um vor unsicheren Anmeldeformularen zu warnen; siehe [Unsichere Passwörter](/de/docs/Web/Security/Insecure_passwords).

## Wert

Das [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut enthält eine Zeichenfolge, deren Wert den aktuellen Inhalt des Textbearbeitungs-Steuerelements darstellt, das zur Eingabe des Passworts verwendet wird. Wenn der Benutzer noch nichts eingegeben hat, ist dieser Wert eine leere Zeichenfolge (`""`). Wenn die [`required`](/de/docs/Web/HTML/Element/input#required)-Eigenschaft angegeben ist, muss die Passwort-Bearbeitungsbox einen anderen Wert als eine leere Zeichenfolge enthalten, um gültig zu sein.

Wenn das [`pattern`](/de/docs/Web/HTML/Element/input#pattern)-Attribut angegeben ist, wird der Inhalt eines `password`-Steuerelements nur dann als gültig angesehen, wenn der Wert die Validierung besteht; siehe [Validierung](#validierung) für weitere Informationen.

> [!NOTE]
> Die Zeichen für Zeilenumbruch (U+000A) und Wagenrücklauf (U+000D) sind in einem `password`-Wert nicht zulässig. Beim Setzen des Wertes eines Passwort-Steuerelements werden Zeilenumbruch- und Wagenrücklaufzeichen aus dem Wert entfernt.

## Zusätzliche Attribute

Zusätzlich zu den [globalen Attributen](/de/docs/Web/HTML/Global_attributes) und den Attributen, die auf alle {{HTMLElement("input")}}-Elemente unabhängig von ihrem Typ wirken, unterstützen Passworteingabefelder die folgenden Attribute.

> [!NOTE]
> Das globale Attribut [`autocorrect`](/de/docs/Web/HTML/Global_attributes/autocorrect) kann zu Passwortfeldern hinzugefügt werden, aber der gespeicherte Status ist immer `off`.

### maxlength

Die maximale Zeichenlänge (gemessen in UTF-16 Code-Einheiten), die der Benutzer in das Passwortfeld eingeben kann. Dies muss ein ganzzahliger Wert von 0 oder höher sein. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat das Passwortfeld keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

Die Eingabe schlägt bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl, wenn die Länge des in das Feld eingegebenen Textes mehr als `maxlength` UTF-16 Code-Einheiten beträgt. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### minlength

Die minimale Zeichenlänge (gemessen in UTF-16 Code-Einheiten), die der Benutzer in das Passwort-Eingabefeld eingeben kann. Dies muss ein nicht-negativer ganzzahliger Wert sein, der kleiner oder gleich dem durch `maxlength` angegebenen Wert ist. Wenn kein `minlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat das Passworteingabefeld keine Mindestlänge.

Die Eingabe schlägt bei der [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehl, wenn die Länge des in das Feld eingegebenen Textes weniger als `minlength` UTF-16 Code-Einheiten beträgt. Die Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### pattern

Das `pattern`-Attribut, wenn es angegeben ist, ist ein regulärer Ausdruck, den der [`value`](/de/docs/Web/HTML/Element/input#value)-Wert der Eingabe erfüllen muss, um die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) zu bestehen. Es muss ein gültiger JavaScript-Regulärer Ausdruck sein, wie er vom {{jsxref("RegExp")}}-Typ verwendet wird und wie in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert; das `'u'`-Flag wird beim Kompilieren des regulären Ausdrucks angegeben, sodass das Muster als Sequenz von Unicode-Codepunkten behandelt wird, anstatt als {{Glossary("ASCII", "ASCII")}}. Es sollten keine Schrägstriche um den Mustertext angegeben werden.

Wenn das angegebene Muster nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut wird vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Element/input#title)-Attribut, um Text anzugeben, den die meisten Browser als Tooltip anzeigen, um zu erklären, welche Anforderungen erfüllt werden müssen, um dem Muster zu entsprechen. Sie sollten auch andere erklärende Texte in der Nähe einfügen.

Die Verwendung eines Musters wird für Passworteingaben dringend empfohlen, um sicherzustellen, dass gültige Passwörter mit einer großen Vielfalt an Zeichenklassen von Ihren Benutzern ausgewählt und verwendet werden. Mit einem Muster können Sie Groß-/Kleinschreibungsregeln vorschreiben, die Verwendung einer bestimmten Anzahl von Ziffern und/oder Satzzeichen erfordern und so weiter. Weitere Informationen und ein Beispiel finden Sie im Abschnitt [Validierung](#validierung).

### placeholder

Das `placeholder`-Attribut ist eine Zeichenfolge, die dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Informationen im Feld erwartet werden. Es sollte ein Wort oder kurzer Satz sein, der den erwarteten Datentyp zeigt, anstatt eine erklärende Nachricht zu sein. Der Text _darf_ keine Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt des Steuerelements eine Richtung (LTR oder RTL) hat, aber der Platzhalter in der entgegengesetzten Richtung dargestellt werden muss, können Sie Formatierungszeichen des Unicode-Bidirektionalen-Algorithmus verwenden, um die Richtung innerhalb des Platzhalters zu überschreiben; siehe [Wie man Unicode-Kontrollen für bidi-Text verwendet](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für weitere Informationen.

> [!NOTE]
> Vermeiden Sie die Verwendung des `placeholder`-Attributs, wenn Sie können. Es ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Weitere Informationen finden Sie unter [`<input>`-Labels](/de/docs/Web/HTML/Element/input#labels).

### readonly

Ein Boolean-Attribut, das, wenn vorhanden, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch weiterhin von JavaScript-Code, der den Wert der [`HTMLInputElement.value`](/de/docs/Web/API/HTMLInputElement)-Eigenschaft direkt setzt, geändert werden.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Auswirkung auf Eingaben mit dem ebenfalls angegebenen `readonly`-Attribut.

### size

Das `size`-Attribut ist ein numerischer Wert, der angibt, wie viele Zeichen breit das Eingabefeld sein soll. Der Wert muss eine Zahl größer als null sein, und der Standardwert ist 20. Da sich die Zeichenbreiten unterscheiden, kann dies mehr oder weniger genau sein und sollte nicht darauf vertraut werden; das resultierende Eingabefeld kann schmaler oder breiter sein als die angegebene Anzahl von Zeichen, abhängig von den Zeichen und der Schriftart ({{cssxref("font")}}-Einstellungen in Verwendung).

Dieses setzt _keine_ Begrenzung darauf, wie viele Zeichen der Benutzer in das Feld eingeben kann. Es gibt nur an, wie viele ungefähr auf einmal sichtbar sein können. Um eine obere Grenze für die Eingabedatenlänge zu setzen, verwenden Sie das [`maxlength`](#maxlength)-Attribut.

## Verwendung von Passwort-Eingaben

Passwort-Eingabefelder funktionieren im Allgemeinen wie andere Texteingabefelder; der Hauptunterschied ist die Verschleierung des Inhalts, um zu verhindern, dass Personen in der Nähe des Benutzers das Passwort lesen können.

### Eine einfache Passworteingabe

Hier sehen wir die grundlegendste Passworteingabe, mit einem Label, das mit dem {{HTMLElement("label")}}-Element erstellt wurde.

```html
<label for="userPassword">Password: </label>
<input id="userPassword" type="password" />
```

{{EmbedLiveSample("A_basic_password_input", 600, 40)}}

### Autocomplete erlauben

Um dem Passwort-Manager des Benutzers zu ermöglichen, das Passwort automatisch einzugeben, spezifizieren Sie das [`autocomplete`](/de/docs/Web/HTML/Element/input#autocomplete)-Attribut. Für Passwörter sollte dies typischerweise eines der folgenden sein:

- `on`
  - : Erlaubt dem Browser oder einem Passwort-Manager, das Passwortfeld automatisch auszufüllen. Dies ist nicht so informativ wie die Verwendung von entweder `current-password` oder `new-password`.
- `off`
  - : Verhindern, dass der Browser oder Passwort-Manager das Passwortfeld automatisch ausfüllt. Beachten Sie, dass einige Software diesen Wert ignoriert, da er typischerweise die Fähigkeit der Benutzer beeinträchtigt, sichere Passwortpraktiken zu befolgen.
- `current-password`
  - : Erlaubt dem Browser oder Passwort-Manager, das aktuelle Passwort für die Seite einzugeben. Dies bietet mehr Informationen als `on`, da es dem Browser oder Passwort-Manager erlaubt, das derzeit bekannte Passwort für die Seite automatisch in das Feld einzugeben, jedoch kein neues vorzuschlagen.
- `new-password`
  - : Erlaubt dem Browser oder Passwort-Manager, ein neues Passwort für die Seite automatisch einzugeben; dies wird in Passwörter-Ändern- und Neue-Benutzer-Formularen verwendet, im Feld, das den Benutzer um ein neues Passwort bittet. Das neue Passwort kann auf verschiedene Weise generiert werden, abhängig vom verwendeten Passwort-Manager. Es kann ein neues vorgeschlagenes Passwort ausfüllen oder dem Benutzer eine Schnittstelle zum Erstellen eines solchen zeigen.

```html
<label for="userPassword">Password:</label>
<input id="userPassword" type="password" autocomplete="current-password" />
```

{{EmbedLiveSample("Allowing_autocomplete", 600, 40)}}

### Passwort als Pflichtfeld festlegen

Um dem Browser des Benutzers mitzuteilen, dass das Passwortfeld einen gültigen Wert haben muss, bevor das Formular gesendet werden kann, spezifizieren Sie das Boolean-Attribut [`required`](/de/docs/Web/HTML/Element/input#required).

```html
<label for="userPassword">Password: </label>
<input id="userPassword" type="password" required />
<input type="submit" value="Submit" />
```

{{EmbedLiveSample("Making_the_password_mandatory", 600, 40)}}

### Eingabemodus festlegen

Falls Ihre empfohlenen (oder vorgeschriebenen) Passwort-Syntaxregeln von einer anderen Texteingabeschnittstelle als der Standard-Tastatur profitieren würden, können Sie das [`inputmode`](/de/docs/Web/HTML/Element/input#inputmode)-Attribut verwenden, um eine spezifische anzufordern. Der offensichtlichste Anwendungsfall dafür ist, wenn das Passwort numerisch sein muss (z.B. eine PIN). Mobile Geräte mit virtuellen Tastaturen könnten beispielsweise dazu übergehen, ein numerisches Tastenfeld-Layout anstelle einer vollständigen Tastatur anzuzeigen, um das Eingeben des Passworts zu erleichtern. Wenn die PIN für den einmaligen Gebrauch bestimmt ist, setzen Sie das [`autocomplete`](/de/docs/Web/HTML/Element/input#autocomplete)-Attribut auf `off` oder `one-time-code`, um zu suggerieren, dass es nicht gespeichert wird.

```html
<label for="pin">PIN: </label>
<input id="pin" type="password" inputmode="numeric" />
```

{{EmbedLiveSample("Specifying_an_input_mode", 600, 40)}}

### Längenanforderungen festlegen

Wie gewöhnlich können Sie die Attribute [`minlength`](/de/docs/Web/HTML/Element/input#minlength) und [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength) verwenden, um minimale und maximale zulässige Längen für das Passwort festzulegen. Dieses Beispiel erweitert das vorherige, indem es spezifiziert, dass die Benutzer-PIN mindestens vier und nicht mehr als acht Ziffern lang sein muss. Das [`size`](/de/docs/Web/HTML/Element/input#size)-Attribut wird verwendet, um sicherzustellen, dass die Passwort-Eingabehülle acht Zeichen breit ist.

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

Wie bei anderen Texteingabesteuerelementen können Sie die Methode [`select()`](/de/docs/Web/API/HTMLInputElement/select) verwenden, um den gesamten Text im Passworteingabefeld auszuwählen.

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

Sie können auch [`selectionStart`](/de/docs/Web/API/HTMLInputElement/selectionStart) und [`selectionEnd`](/de/docs/Web/API/HTMLInputElement/selectionEnd) verwenden, um herauszufinden (oder festzulegen), welcher Bereich von Zeichen im Steuerelement derzeit ausgewählt ist, und [`selectionDirection`](/de/docs/Web/API/HTMLInputElement/selectionDirection), um zu wissen, in welche Richtung die Auswahl erfolgt ist (oder erweitert wird, abhängig von Ihrer Plattform; siehe die Dokumentation für eine Erklärung). Da jedoch der Text verschleiert wird, ist der Nutzen hiervon etwas begrenzt.

## Validierung

Wenn Ihre Anwendung Zeichensatzbeschränkungen oder andere Anforderungen an den tatsächlichen Inhalt des eingegebenen Passworts hat, können Sie das [`pattern`](/de/docs/Web/HTML/Element/input#pattern)-Attribut verwenden, um einen regulären Ausdruck festzulegen, der verwendet wird, um automatisch sicherzustellen, dass Ihre Passwörter diese Anforderungen erfüllen.

In diesem Beispiel sind nur Werte, die aus mindestens vier und nicht mehr als acht hexadezimalen Ziffern bestehen, gültig.

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

Dieses Beispiel akzeptiert nur Eingaben, die dem Format einer [gültigen US-amerikanischen Sozialversicherungsnummer](https://en.wikipedia.org/wiki/Social_Security_number#Structure) entsprechen. Diese Nummern, die in den USA für Steuer- und Identifikationszwecke verwendet werden, haben die Form "123-45-6789". Es gibt verschiedene Regeln, welche Werte in jeder Gruppe erlaubt sind.

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

Dies verwendet ein [`pattern`](/de/docs/Web/HTML/Element/input#pattern), das den eingegebenen Wert auf Zeichenfolgen beschränkt, die gültige Sozialversicherungsnummern darstellen. Offensichtlich garantiert dieser reguläre Ausdruck keine gültige SSN (da wir keinen Zugriff auf die Datenbank der Sozialversicherungsverwaltung haben), aber er stellt sicher, dass die Nummer eine sein könnte; er vermeidet im Allgemeinen Werte, die nicht gültig sein können. Darüber hinaus erlaubt er, dass die drei Gruppen von Ziffern durch ein Leerzeichen, einen Bindestrich ("-") oder nichts getrennt werden.

Das [`inputmode`](/de/docs/Web/HTML/Element/input#inputmode) ist auf `numeric` gesetzt, um Geräte mit virtuellen Tastaturen zu ermutigen, zu einem numerischen Tastenfeld-Layout für eine einfachere Eingabe zu wechseln. Die Attribute [`minlength`](/de/docs/Web/HTML/Element/input#minlength) und [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength) sind auf 9 bzw. 12 gesetzt, um zu fordern, dass der Wert mindestens neun und nicht mehr als 12 Zeichen beträgt (der erstgenannte ohne Trennzeichen zwischen den Gruppen von Ziffern und der letztgenannte mit diesen). Das Attribut [`required`](/de/docs/Web/HTML/Element/input#required) wird verwendet, um anzugeben, dass dieses Steuerelement einen Wert haben muss. Schließlich ist das Attribut [`autocomplete`](/de/docs/Web/HTML/Element/input#autocomplete) auf `off` gesetzt, um zu verhindern, dass Passwort-Manager und Sitzungswiederherstellungsfunktionen versuchen, seinen Wert zu setzen, da dies überhaupt kein Passwort ist.

#### JavaScript

Das JavaScript zeigt die eingegebene Sozialversicherungsnummer auf dem Bildschirm an, damit Sie sie sehen können. Dies widerspricht der Zweckbestimmung eines Passwortfeldes, hilft jedoch beim Experimentieren mit dem `pattern`.

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
        Eine Zeichenfolge, die ein Passwort oder leer darstellt
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
        [`setRangeText()`](/de/docs/Web/API/HTMLInputElement/setRangeText) und
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
