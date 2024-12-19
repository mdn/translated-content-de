---
title: <input type="password">
slug: Web/HTML/Element/input/password
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{HTMLSidebar}}

`<input>`-Elemente vom Typ **`password`** ermöglichen es dem Benutzer, ein Passwort sicher einzugeben.

Das Element wird als einzeiliges, einfaches Texteditor-Kontrollfeld angezeigt, in dem der Text so verdeckt wird, dass er nicht gelesen werden kann. Dies geschieht normalerweise, indem jedes Zeichen durch ein Symbol wie das Sternchen ("\*") oder einen Punkt ("•") ersetzt wird.
Dieses Zeichen variiert abhängig vom {{Glossary("user_agent", "User-Agent")}} und dem Betriebssystem.

{{EmbedInteractiveExample("pages/tabbed/input-password.html", "tabbed-standard")}}

Das genaue Verhalten des Eingabeprozesses kann von Browser zu Browser unterschiedlich sein.
Einige Browser zeigen das getippte Zeichen für einen kurzen Moment an, bevor es verdeckt wird, während andere dem Benutzer erlauben, die Anzeige des Klartexts ein- und auszuschalten.
Beide Ansätze helfen einem Benutzer zu überprüfen, ob er das beabsichtigte Passwort eingegeben hat, was besonders auf mobilen Geräten schwierig sein kann.

> [!NOTE]
> Alle Formulare, die sensible Informationen wie Passwörter beinhalten (zum Beispiel Anmeldeformulare), sollten über HTTPS bereitgestellt werden.
> Viele Browser implementieren mittlerweile Mechanismen, um vor unsicheren Anmeldeformularen zu warnen; siehe [Unsichere Passwörter](/de/docs/Web/Security/Insecure_passwords).

## Wert

Das [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut enthält eine Zeichenfolge, deren Wert der aktuelle Inhalt der zur Eingabe des Passworts verwendeten Textbearbeitungskontrolle ist. Wenn der Benutzer noch nichts eingegeben hat, ist dieser Wert eine leere Zeichenkette (`""`). Wenn die [`required`](/de/docs/Web/HTML/Element/input#required)-Eigenschaft festgelegt ist, muss das Passwort-Eingabefeld einen Wert enthalten, der nicht leer ist, um gültig zu sein.

Wenn das [`pattern`](/de/docs/Web/HTML/Element/input#pattern)-Attribut angegeben ist, wird der Inhalt einer Passwortkontrolle nur dann als gültig betrachtet, wenn der Wert die Validierung besteht; siehe [Validierung](#validierung) für weitere Informationen.

> [!NOTE]
> Die Zeichen Zeilenumbruch (U+000A) und Wagenrücklauf (U+000D) sind in einem `password`-Wert nicht erlaubt. Beim Setzen des Wertes einer Passwortkontrolle werden Zeilenumbruch- und Wagenrücklaufzeichen aus dem Wert entfernt.

## Zusätzliche Attribute

Zusätzlich zu den [globalen Attributen](/de/docs/Web/HTML/Global_attributes) und den Attributen, die auf alle {{HTMLElement("input")}}-Elemente unabhängig von ihrem Typ wirken, unterstützen Passwort-Feldeinträge die folgenden Attribute.

> [!NOTE]
> Das globale Attribut [`autocorrect`](/de/docs/Web/HTML/Global_attributes/autocorrect) kann zu Passworteingaben hinzugefügt werden, aber der gespeicherte Zustand ist immer `off`.

### maxlength

Die maximale Zeichenlänge (gemessen in UTF-16-Code-Einheiten), die der Benutzer in das Passwortfeld eingeben kann. Dies muss ein ganzzahliger Wert von 0 oder höher sein. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat das Passwortfeld keine maximale Länge. Dieser Wert muss auch größer oder gleich dem Wert von `minlength` sein.

Die Eingabe schlägt bei [Constraints-Validierung](/de/docs/Web/HTML/Constraint_validation) fehl, wenn die Länge des in das Feld eingegebenen Textes länger als `maxlength` UTF-16-Code-Einheiten ist. Constraints-Validierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### minlength

Die minimale Zeichenlänge (gemessen in UTF-16-Code-Einheiten), die der Benutzer in das Passwort-Eingabefeld eingeben kann. Dies muss ein nicht-negativer ganzzahliger Wert sein, der kleiner oder gleich dem durch `maxlength` angegebenen Wert ist. Wenn kein `minlength` angegeben ist oder ein ungültiger Wert angegeben wird, hat das Passwortfeld keine Mindestlänge.

Die Eingabe scheitert bei [Constraints-Validierung](/de/docs/Web/HTML/Constraint_validation), wenn die Länge des in das Feld eingegebenen Textes kürzer als `minlength` UTF-16-Code-Einheiten ist. Constraints-Validierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### pattern

Das `pattern`-Attribut, wenn angegeben, ist ein regulärer Ausdruck, den der [`value`](/de/docs/Web/HTML/Element/input#value) der Eingabe erfüllen muss, um die [Constraints-Validierung](/de/docs/Web/HTML/Constraint_validation) zu bestehen. Es muss ein gültiger JavaScript- regulärer Ausdruck sein, wie er vom {{jsxref("RegExp")}}-Typ verwendet wird und in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert ist; das `'u'`-Flag wird beim Kompilieren des regulären Ausdrucks festgelegt, so dass das Muster als eine Folge von Unicode-Codepunkten behandelt wird, anstatt als {{Glossary("ASCII", "ASCII")}}. Um das Muster herum sollten keine Schrägstriche angegeben werden.

Wenn das angegebene Muster nicht angegeben ist oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Element/input#title)-Attribut, um Text anzugeben, den die meisten Browser als Tooltip anzeigen, um zu erklären, welche Anforderungen das Muster erfüllen muss. Sie sollten auch andere erklärende Texte in der Nähe hinzufügen.

Der Einsatz eines Musters wird für Passworteingaben dringend empfohlen, um sicherzustellen, dass gültige Passwörter mit einer breiten Auswahl an Zeichenklassen von Ihren Benutzern ausgewählt und verwendet werden. Mit einem Muster können Sie Groß- und Kleinschreibung regeln, die Verwendung einer bestimmten Anzahl von Ziffern und/oder Satzzeichen verlangen und so weiter. Siehe den Abschnitt [Validierung](#validierung) für Details und ein Beispiel.

### placeholder

Das `placeholder`-Attribut ist eine Zeichenkette, die einen kurzen Hinweis darauf gibt, welche Art von Informationen erwartet werden. Es sollte ein Wort oder ein kurzer Satz sein, der den erwarteten Datentyp demonstriert, anstatt eine erklärende Nachricht zu liefern. Der Text _darf_ keine Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt des Steuerelements eine Richtung hat ({{Glossary("LTR", "LTR")}} oder {{Glossary("RTL", "RTL")}}), der Platzhalter jedoch in der entgegengesetzten Richtung angezeigt werden muss, können Sie Unicode-Bidi-Algorithmus-Formatierungszeichen verwenden, um die Richtung innerhalb des Platzhalters zu überschreiben; siehe [Anleitung zur Verwendung von Unicode-Steuerelementen für bidirektionalen Text](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für weitere Informationen.

> [!NOTE]
> Vermeiden Sie die Verwendung des `placeholder`-Attributs, wenn Sie können. Es ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [`<input>`-Labels](/de/docs/Web/HTML/Element/input#labels) für weitere Informationen.

### readonly

Ein boolesches Attribut, das, wenn es vorhanden ist, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch weiterhin von JavaScript-Code geändert werden, der den Wert der [`HTMLInputElement.value`](/de/docs/Web/API/HTMLInputElement)-Eigenschaft direkt setzt.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Auswirkung auf Eingaben mit dem ebenfalls angegebenen Attribut `readonly`.

### size

Das `size`-Attribut ist ein numerischer Wert, der angibt, wie viele Zeichen breit das Eingabefeld sein soll. Der Wert muss eine Zahl größer als Null sein, und der Standardwert ist 20. Da Zeichenbreiten variieren, könnte dies ungenau sein und sollte nicht darauf verlassen werden; das resultierende Eingabefeld kann je nach Zeichen und Schriftart ({{cssxref("font")}}-Einstellungen, die verwendet werden) schmaler oder breiter als die angegebene Anzahl von Zeichen sein.

Dies setzt _keine_ Begrenzung, wie viele Zeichen der Benutzer in das Feld eingeben kann. Es gibt nur an, wie viele ungefähr gleichzeitig gesehen werden können. Um eine obere Grenze für die Länge der Eingabedaten festzulegen, verwenden Sie das [`maxlength`](#maxlength)-Attribut.

## Verwendung von Passwort-Eingaben

Passwort-Eingabefelder funktionieren im Allgemeinen genauso wie andere textuelle Eingabefelder; der Hauptunterschied besteht darin, den Inhalt so zu verdecken, dass Personen in der Nähe des Benutzers das Passwort nicht lesen können.

### Eine grundlegende Passwort-Eingabe

Hier sehen wir die grundlegendste Passwort-Eingabe mit einem Label, das mithilfe des {{HTMLElement("label")}}-Elements erstellt wurde.

```html
<label for="userPassword">Password: </label>
<input id="userPassword" type="password" />
```

{{EmbedLiveSample("A_basic_password_input", 600, 40)}}

### Autovervollständigung ermöglichen

Um dem Passworteingangsmanager des Benutzers zu erlauben, das Passwort automatisch einzugeben, geben Sie das [`autocomplete`](/de/docs/Web/HTML/Element/input#autocomplete)-Attribut an. Für Passwörter sollte dies typischerweise einer der folgenden Werte sein:

- `on`
  - : Erlaubt dem Browser oder einem Passwort-Manager, das Passwortfeld automatisch auszufüllen. Dies ist nicht so informativ wie die Verwendung entweder `current-password` oder `new-password`.
- `off`
  - : Erlaubt dem Browser oder einem Passwort-Manager nicht, das Passwortfeld automatisch auszufüllen. Beachten Sie, dass einige Software dieses Wert ignoriert, da er typischerweise die Fähigkeit der Nutzer, sichere Passwortpraktiken beizubehalten, beeinträchtigt.
- `current-password`
  - : Erlaubt dem Browser oder einem Passwort-Manager, das aktuelle Passwort für die Website einzugeben. Dies bietet mehr Informationen als `on`, da es dem Browser oder Passwort-Manager ermöglicht, das momentan bekannte Passwort für die Website automatisch in das Feld einzugeben, es jedoch nicht erlaubt, ein neues vorzuschlagen.
- `new-password`
  - : Erlaubt dem Browser oder einem Passwort-Manager, ein neues Passwort für die Website automatisch zu erzeugen; dies wird auf Passwortänderungs- und New User-Formularen in dem Feld verwendet, in dem der Benutzer nach einem neuen Passwort gefragt wird. Das neue Passwort kann je nach dem verwendeten Passwort-Manager auf verschiedene Weise generiert werden. Es könnte ein neues vorgeschlagenes Passwort ausfüllen oder dem Benutzer eine Schnittstelle zur Erstellung eines solchen anbieten.

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

### Einen Eingabemodus angeben

Wenn Ihre empfohlenen (oder erforderlichen) Passwortsyntax-Regeln von einer alternativen Texteingabeschnittstelle als der Standardtastatur profitieren würden, können Sie das [`inputmode`](/de/docs/Web/HTML/Element/input#inputmode)-Attribut verwenden, um eine bestimmte anzufordern. Der offensichtlichste Anwendungsfall hierfür ist, wenn das Passwort numerisch sein muss (z. B. eine PIN). Mobile Geräte mit virtuellen Tastaturen könnten zum Beispiel auf ein numerisches Tastaturdesign anstelle einer vollständigen Tastatur umschalten, um das Eingeben des Passworts zu erleichtern. Wenn die PIN für die einmalige Verwendung gedacht ist, setzen Sie das [`autocomplete`](/de/docs/Web/HTML/Element/input#autocomplete)-Attribut entweder auf `off` oder `one-time-code`, um vorzuschlagen, dass es nicht gespeichert wird.

```html
<label for="pin">PIN: </label>
<input id="pin" type="password" inputmode="numeric" />
```

{{EmbedLiveSample("Specifying_an_input_mode", 600, 40)}}

### Längenanforderungen festlegen

Wie üblich können Sie die [`minlength`](/de/docs/Web/HTML/Element/input#minlength)- und [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength)-Attribute verwenden, um die minimal und maximal akzeptablen Längen für das Passwort festzulegen. Dieses Beispiel erweitert das vorherige, indem es festlegt, dass die PIN des Benutzers mindestens vier und höchstens acht Ziffern lang sein muss. Das [`size`](/de/docs/Web/HTML/Element/input#size)-Attribut wird verwendet, um sicherzustellen, dass die Passwort-Eingabesteuerung acht Zeichen breit ist.

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

Wie bei anderen textuellen Eingabesteuerungen können Sie die [`select()`](/de/docs/Web/API/HTMLInputElement/select)-Methode verwenden, um den gesamten Text im Passwortfeld auszuwählen.

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

Sie können auch [`selectionStart`](/de/docs/Web/API/HTMLInputElement/selectionStart) und [`selectionEnd`](/de/docs/Web/API/HTMLInputElement/selectionEnd) verwenden, um (oder setzen) den aktuell ausgewählten Bereich von Zeichen in der Kontrolle zu erhalten, sowie [`selectionDirection`](/de/docs/Web/API/HTMLInputElement/selectionDirection), um zu wissen, in welche Richtung die Auswahl stattgefunden hat (oder erweitert wird, abhängig von Ihrer Plattform; siehe dessen Dokumentation für eine Erklärung). Allerdings ist der Nutzen dieser Funktionen angesichts des verschleierten Textes etwas eingeschränkt.

## Validierung

Wenn Ihre Anwendung Zeichensatzbeschränkungen oder andere Anforderungen an den tatsächlichen Inhalt des eingegebenen Passworts hat, können Sie das [`pattern`](/de/docs/Web/HTML/Element/input#pattern)-Attribut verwenden, um einen regulären Ausdruck festzulegen, der verwendet wird, um automatisch sicherzustellen, dass Ihre Passwörter diese Anforderungen erfüllen.

In diesem Beispiel sind nur Werte mit mindestens vier und höchstens acht hexadezimalen Ziffern gültig.

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

### Anfrage nach einer Sozialversicherungsnummer

Dieses Beispiel akzeptiert nur Eingaben, die dem Format für eine [gültige Sozialversicherungsnummer der Vereinigten Staaten](https://en.wikipedia.org/wiki/Social_Security_number#Structure) entsprechen. Diese Nummern, die in den USA zu Steuer- und Identifikationszwecken verwendet werden, haben das Format "123-45-6789". Es gibt verschiedene Regeln darüber, welche Werte in jeder Gruppe erlaubt sind.

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

Dieses Beispiel verwendet ein [`pattern`](/de/docs/Web/HTML/Element/input#pattern), das den eingegebenen Wert auf Zeichenfolgen beschränkt, die gesetzliche Sozialversicherungsnummern darstellen. Natürlich garantiert dieser reguläre Ausdruck keine gültige SSN (da wir keinen Zugang zur Datenbank der Sozialversicherungsverwaltung haben), stellt jedoch sicher, dass die Nummer eine sein könnte; er vermeidet generell Werte, die nicht gültig sein können. Darüber hinaus erlaubt er, dass die drei Gruppen von Ziffern durch ein Leerzeichen, einen Bindestrich ("-") oder nichts getrennt werden.

Der [`inputmode`](/de/docs/Web/HTML/Element/input#inputmode) ist auf `numeric` gesetzt, um Geräte mit virtuellen Tastaturen zu ermutigen, auf ein numerisches Tastaturlayout zur einfacheren Eingabe zu wechseln. Die [`minlength`](/de/docs/Web/HTML/Element/input#minlength)- und [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength)-Attribute sind auf 9 bzw. 12 gesetzt, um sicherzustellen, dass der Wert mindestens neun und höchstens 12 Zeichen lang ist (zuerst ohne Trennzeichen zwischen den Gruppen von Ziffern und letzteres mit ihnen). Das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut wird verwendet, um anzugeben, dass diese Kontrolle einen Wert haben muss. Schließlich ist [`autocomplete`](/de/docs/Web/HTML/Element/input#autocomplete) auf `off` gesetzt, um zu verhindern, dass Passwort-Manager und Sitzungswiederherstellungsfunktionen versuchen, seinen Wert zu setzen, da dies gar kein Passwort ist.

#### JavaScript

Das JavaScript zeigt die eingegebene SSN auf dem Bildschirm an, damit Sie sie sehen können. Dies unterminiert den Zweck eines Passwortfelds, hilft jedoch, das `pattern` auszuprobieren.

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
      <td><strong>Unterstützte allgemeine Attribute</strong></td>
      <td>
         <a href="/de/docs/Web/HTML/Element/input#autocomplete"><code>autocomplete</code></a>,
         <a href="/de/docs/Web/HTML/Element/input#inputmode"><code>inputmode</code></a>,
         <a href="/de/docs/Web/HTML/Element/input#maxlength"><code>maxlength</code></a>,
         <a href="/de/docs/Web/HTML/Element/input#minlength"><code>minlength</code></a>,
         <a href="/de/docs/Web/HTML/Element/input#pattern"><code>pattern</code></a>,
         <a href="/de/docs/Web/HTML/Element/input#placeholder"><code>placeholder</code></a>,
         <a href="/de/docs/Web/HTML/Element/input#readonly"><code>readonly</code></a>,
         <a href="/de/docs/Web/HTML/Element/input#required"><code>required</code></a>, und
         <a href="/de/docs/Web/HTML/Element/input#size"><code>size</code></a>
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
      <td><a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">keine entsprechende Rolle</a></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
