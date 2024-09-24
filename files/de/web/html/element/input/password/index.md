---
title: <input type="password">
slug: Web/HTML/Element/input/password
l10n:
  sourceCommit: b7955e77cd4293adf45ef23686df50b0305f02ad
---

{{HTMLSidebar}}

`<input>`-Elemente vom Typ **`password`** bieten eine Möglichkeit, für den Benutzer ein Passwort sicher einzugeben.

Das Element wird als einzeilige Klartext-Editor-Steuerung dargestellt, in der der Text verschleiert wird, damit er nicht gelesen werden kann, normalerweise durch Ersetzen jedes Zeichens mit einem Symbol, wie dem Sternzeichen ("\*") oder einem Punkt ("•"). Dieses Zeichen variiert je nach {{Glossary("user agent")}} und Betriebssystem.

{{EmbedInteractiveExample("pages/tabbed/input-password.html", "tabbed-standard")}}

Das genaue Verhalten des Eingabeprozesses kann von Browser zu Browser variieren. Einige Browser zeigen das eingegebene Zeichen kurzzeitig an, bevor es verschleiert wird, während andere es dem Benutzer ermöglichen, die Darstellung des Klartextes ein- und auszuschalten. Beide Ansätze helfen dem Benutzer, zu überprüfen, ob das beabsichtigte Passwort eingegeben wurde, was besonders auf mobilen Geräten schwierig sein kann.

> [!NOTE]
> Alle Formulare, die sensible Informationen wie Passwörter enthalten (wie Anmeldeformulare), sollten über HTTPS bereitgestellt werden. Viele Browser implementieren jetzt Mechanismen, um vor unsicheren Anmeldeformularen zu warnen; siehe [Unsichere Passwörter](/de/docs/Web/Security/Insecure_passwords).

## Wert

Das [`value`](/de/docs/Web/HTML/Element/input#value)-Attribut enthält einen String, dessen Wert die aktuellen Inhalte der Texteingabesteuerung sind, die zur Eingabe des Passworts verwendet werden. Wenn der Benutzer noch nichts eingegeben hat, ist dieser Wert ein leerer String (`""`). Wenn die [`required`](/de/docs/Web/HTML/Element/input#required)-Eigenschaft angegeben ist, muss das Passwort-Eingabefeld einen Wert selain eines leeren Strings enthalten, um gültig zu sein.

Wenn das [`pattern`](/de/docs/Web/HTML/Element/input#pattern)-Attribut angegeben ist, wird der Inhalt einer `password`-Steuerung nur als gültig angesehen, wenn der Wert die Validierung besteht; siehe [Validierung](#validierung) für weitere Informationen.

> [!NOTE]
> Die Zeilenumbruch (U+000A) und Wagenrücklauf (U+000D) Zeichen sind in einem `password`-Wert nicht zulässig. Beim Setzen des Werts einer Passwortsteuerung werden Zeilenumbruch und Wagenrücklaufzeichen aus dem Wert entfernt.

## Zusätzliche Attribute

Zusätzlich zu den Attributen, die auf allen {{HTMLElement("input")}} Elementen unabhängig von ihrem Typ angewendet werden, unterstützen Passworteingabefelder die folgenden Attribute:

### maxlength

Die maximale Zeichenlänge (in UTF-16 Codeeinheiten gemessen), die der Benutzer in das Passwortfeld eingeben kann. Dies muss ein ganzzahliger Wert von 0 oder höher sein. Wenn kein `maxlength` angegeben ist oder ein ungültiger Wert angegeben ist, hat das Passwortfeld keine maximale Länge. Dieser Wert muss größer oder gleich dem Wert von `minlength` sein.

Die Eingabe wird für [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehlschlagen, wenn die Länge des in das Feld eingegebenen Textes länger als `maxlength` UTF-16 Codeeinheiten ist. Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### minlength

Die minimale Zeichenlänge (in UTF-16 Codeeinheiten gemessen), die der Benutzer in das Passwort-Eingabefeld eingeben kann. Dies muss ein nicht-negativer Ganzzahlwert sein, der kleiner oder gleich dem von `maxlength` angegebenen Wert ist. Wenn kein `minlength` angegeben ist oder ein ungültiger Wert angegeben ist, hat die Passworteingabe keine Mindestlänge.

Die Eingabe wird für [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) fehlschlagen, wenn die Länge des in das Feld eingegebenen Textes kürzer als `minlength` UTF-16 Codeeinheiten ist. Einschränkungsvalidierung wird nur angewendet, wenn der Wert vom Benutzer geändert wird.

### pattern

Das `pattern`-Attribut, wenn es angegeben ist, ist ein regulärer Ausdruck, den der [`value`](/de/docs/Web/HTML/Element/input#value) des Eingabefeldes für das Bestehen der [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) erfüllen muss. Es muss ein gültiger JavaScript-Regulärer Ausdruck sein, wie er von dem {{jsxref("RegExp")}}-Typ verwendet wird, und wie in unserem [Leitfaden zu regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions) dokumentiert; das `'u'`-Flag wird beim Kompilieren des regulären Ausdrucks angegeben, sodass das Muster als eine Folge von Unicode-Codepunkten behandelt wird, anstatt als {{Glossary("ASCII")}}. Keine Schrägstriche sollten um den Mustertext herum angegeben werden.

Wenn das angegebene Muster nicht angegeben oder ungültig ist, wird kein regulärer Ausdruck angewendet und dieses Attribut wird vollständig ignoriert.

> [!NOTE]
> Verwenden Sie das [`title`](/de/docs/Web/HTML/Element/input#title)-Attribut, um Text anzugeben, den die meisten Browser als Tooltip anzeigen werden, um zu erklären, was die Anforderungen zum Erfüllen des Musters sind. Sie sollten auch in der Nähe andere erklärende Texte einfügen.

Die Verwendung eines Musters wird dringend für Passworteingaben empfohlen, um sicherzustellen, dass gültige Passwörter mit einer großen Auswahl von Zeichenklassen ausgewählt und verwendet werden. Mit einem Muster können Sie Groß- und Kleinschreibungsregeln festlegen, die Verwendung einer bestimmten Anzahl von Ziffern und/oder Satzzeichenzeichen verlangen und so weiter. Siehe den Abschnitt [Validierung](#validierung) für Details und ein Beispiel.

### placeholder

Das `placeholder`-Attribut ist ein String, der dem Benutzer einen kurzen Hinweis darauf gibt, welche Art von Informationen in dem Feld erwartet werden. Es sollte ein Wort oder eine kurze Phrase sein, die den erwarteten Datentyp demonstriert, eher als eine erklärende Nachricht. Der Text _darf keine_ Wagenrückläufe oder Zeilenumbrüche enthalten.

Wenn der Inhalt der Steuerung eine Richtung ({{Glossary("LTR")}} oder {{Glossary("RTL")}}) hat, aber er den Platzhalter in der entgegengesetzten Richtung anzeigen muss, können Sie Unicode-Formatierungszeichen des bidirektionalen Algorithmus verwenden, um die Richtung innerhalb des Platzhalters zu überschreiben; siehe [Wie man Unicode-Steuerungen für bidi Text verwendet](https://www.w3.org/International/questions/qa-bidi-unicode-controls) für mehr Informationen.

> [!NOTE]
> Vermeiden Sie die Verwendung des `placeholder`-Attributs, wenn es möglich ist. Es ist nicht so semantisch nützlich wie andere Möglichkeiten, Ihr Formular zu erklären, und kann unerwartete technische Probleme mit Ihrem Inhalt verursachen. Siehe [`<input>`-Labels](/de/docs/Web/HTML/Element/input#labels) für mehr Informationen.

### readonly

Ein boolesches Attribut, das, falls vorhanden, bedeutet, dass dieses Feld vom Benutzer nicht bearbeitet werden kann. Sein `value` kann jedoch immer noch durch JavaScript-Code verändert werden, der direkt den Wert der {{domxref("HTMLInputElement","HTMLInputElement.value")}}-Eigenschaft setzt.

> [!NOTE]
> Da ein schreibgeschütztes Feld keinen Wert haben kann, hat `required` keine Auswirkungen auf Eingaben mit dem zusätzlich angegebenen `readonly`-Attribut.

### size

Das `size`-Attribut ist ein numerischer Wert, der angibt, wie viele Zeichen breit das Eingabefeld sein sollte. Der Wert muss eine Zahl größer als null sein, und der Standardwert ist 20. Da sich Zeichenbreiten unterscheiden, kann dies mehr oder weniger genau sein und sollte nicht darauf vertraut werden, dass es genau ist; das resultierende Eingabefeld kann je nach den verwendeten Zeichen und dem verwendeten Schriftart ({{cssxref("font")}}-Einstellungen) schmaler oder breiter als die angegebene Anzahl von Zeichen sein.

Dies setzt _kein_ Limit für die Anzahl der Zeichen, die der Benutzer in das Feld eingeben kann. Es gibt nur ungefähr an, wie viele gleichzeitig sichtbar sein können. Um ein oberes Limit für die Länge der Eingabedaten festzulegen, verwenden Sie das [`maxlength`](#maxlength)-Attribut.

## Verwendung von Passworteingaben

Passworteingabefelder funktionieren im Allgemeinen genauso wie andere Texteingabefelder; der Hauptunterschied ist die Verschleierung des Inhalts, um zu verhindern, dass Personen in der Nähe des Benutzers das Passwort lesen.

### Ein einfaches Passwortfeld

Hier sehen wir das einfachste Passworteingabefeld, mit einem Label, das mit dem {{HTMLElement("label")}}-Element erstellt wurde.

```html
<label for="userPassword">Password: </label>
<input id="userPassword" type="password" />
```

{{EmbedLiveSample("A_simple_password_input", 600, 40)}}

### Autocomplete erlauben

Um dem Passwortmanager des Benutzers zu ermöglichen, das Passwort automatisch einzugeben, geben Sie das [`autocomplete`](/de/docs/Web/HTML/Element/input#autocomplete)-Attribut an. Für Passwörter sollte dies typischerweise einer der folgenden Werte sein:

- `on`
  - : Erlauben Sie dem Browser oder einem Passwortmanager, das Passwortfeld automatisch auszufüllen. Dies ist nicht so informativ wie die Verwendung von `current-password` oder `new-password`.
- `off`
  - : Erlauben Sie dem Browser oder Passwortmanager nicht, das Passwortfeld automatisch auszufüllen. Beachten Sie, dass einige Software diesen Wert ignoriert, da er in der Regel schädlich für die Fähigkeit der Benutzer ist, sichere Passwortpraktiken zu pflegen.
- `current-password`
  - : Erlauben Sie dem Browser oder Passwortmanager, das aktuelle Passwort für die Website einzugeben. Dies bietet mehr Informationen als `on`, da es dem Browser oder Passwortmanager ermöglicht, das derzeit bekannte Passwort für die Website automatisch in das Feld einzugeben, jedoch nicht, ein neues vorzuschlagen.
- `new-password`
  - : Erlauben Sie dem Browser oder Passwortmanager, automatisch ein neues Passwort für die Website einzugeben; dies wird bei "Passwort ändern"- und "Neuer Benutzer"-Formularen im Feld verwendet, wo der Benutzer nach einem neuen Passwort gefragt wird. Das neue Passwort kann auf verschiedene Weise generiert werden, abhängig vom verwendeten Passwortmanager. Es kann ein neues vorgeschlagenes Passwort eingefüllt werden, oder es könnte dem Benutzer eine Oberfläche für die Erstellung eines neuen Passworts angezeigt werden.

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

Wenn Ihre empfohlenen (oder erforderlichen) Passwort-Syntaxregeln eine alternative Texteingabeschnittstelle als die Standardtastatur vorschlagen würden, können Sie das [`inputmode`](/de/docs/Web/HTML/Element/input#inputmode)-Attribut verwenden, um eine bestimmte anzufordern. Der offensichtlichste Anwendungsfall dafür ist, wenn das Passwort numerisch sein muss (wie z.B. ein PIN). Mobile Geräte mit virtuellen Tastaturen können beispielsweise auf ein numerisches Tastenlayout umschalten, anstatt einer vollständigen Tastatur, um das Eingeben des Passworts zu erleichtern. Wenn die PIN nur einmalig verwendet werden soll, setzen Sie das [`autocomplete`](/de/docs/Web/HTML/Element/input#autocomplete)-Attribut entweder auf `off` oder `one-time-code`, um anzuzeigen, dass es nicht gespeichert wird.

```html
<label for="pin">PIN: </label>
<input id="pin" type="password" inputmode="numeric" />
```

{{EmbedLiveSample("Specifying_an_input_mode", 600, 40)}}

### Längenanforderungen festlegen

Wie üblich können Sie die [`minlength`](/de/docs/Web/HTML/Element/input#minlength)- und [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength)-Attribute verwenden, um Mindest- und Höchstlängen für das Passwort festzulegen. Dieses Beispiel erweitert das vorherige, indem es angibt, dass die PIN des Benutzers mindestens vier und höchstens acht Ziffern lang sein muss. Das [`size`](/de/docs/Web/HTML/Element/input#size)-Attribut wird verwendet, um sicherzustellen, dass das Passwort-Eingabefeld acht Zeichen breit ist.

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

Wie bei anderen Texteingabesteuerungen können Sie die {{domxref("HTMLInputElement.select", "select()")}}-Methode verwenden, um den gesamten Text im Passwortfeld auszuwählen.

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

Sie können auch {{domxref("HTMLInputElement.selectionStart", "selectionStart")}} und {{domxref("HTMLInputElement.selectionEnd", "selectionEnd")}} verwenden, um zu erhalten (oder zu setzen), welche Zeichen im Steuerfeld aktuell ausgewählt sind, und {{domxref("HTMLInputElement.selectionDirection", "selectionDirection")}}, um zu wissen, in welche Richtung die Auswahl erfolgte (oder erweitert wird, je nach Plattform; siehe deren Dokumentation für eine Erklärung). Aufgrund der Verschleierung des Textes ist der Nutzen dieser Funktionen jedoch auf eine gewisse Weise eingeschränkt.

## Validierung

Wenn Ihre Anwendung Zeichensatzbeschränkungen oder andere Anforderungen an den tatsächlichen Inhalt des eingegebenen Passworts hat, können Sie das [`pattern`](/de/docs/Web/HTML/Element/input#pattern)-Attribut verwenden, um einen regulären Ausdruck festzulegen, der verwendet wird, um automatisch sicherzustellen, dass Ihre Passwörter diese Anforderungen erfüllen.

In diesem Beispiel sind nur Werte gültig, die aus mindestens vier und höchstens acht hexadezimalen Ziffern bestehen.

```html
<label for="hexId">Hex-ID: </label>
<input
  id="hexId"
  type="password"
  pattern="[0-9a-fA-F]{4,8}"
  title="Geben Sie eine ID bestehend aus 4-8 hexadezimalen Ziffern ein"
  autocomplete="new-password" />
```

{{EmbedLiveSample("Validation", 600, 40)}}

## Beispiele

### Ein Sozialversicherungsnummer anfragen

Dieses Beispiel akzeptiert nur Eingaben, die dem Format einer [gültigen US-amerikanischen Sozialversicherungsnummer](https://en.wikipedia.org/wiki/Social_Security_number#Structure) entsprechen. Diese Nummern, die in den USA zu Steuer- und Identifizierungszwecken verwendet werden, haben das Format "123-45-6789". Es existieren verschiedene Regeln, welche Werte in jeder Gruppe erlaubt sind.

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
<label for="ssn">Wert:</label>
<span id="current"></span>
```

Dies verwendet ein [`pattern`](/de/docs/Web/HTML/Element/input#pattern), das den eingegebenen Wert auf Zeichenfolgen beschränkt, die legale Sozialversicherungsnummern darstellen. Offensichtlich garantiert dieser reguläre Ausdruck keine gültige SSN (da wir keinen Zugriff auf die Datenbank der Sozialversicherungsadministration haben), aber er stellt sicher, dass die Nummer eine gültige sein könnte; er vermeidet im Allgemeinen Werte, die nicht gültig sein können. Darüber hinaus erlaubt er, dass die drei Gruppen von Ziffern durch ein Leerzeichen, einen Bindestrich ("-") oder nichts getrennt werden.

Das [`inputmode`](/de/docs/Web/HTML/Element/input#inputmode) wird auf `numeric` gesetzt, um Geräte mit virtuellen Tastaturen zu ermutigen, auf ein numerisches Tastenlayout für eine einfachere Eingabe zu wechseln. Die [`minlength`](/de/docs/Web/HTML/Element/input#minlength)- und [`maxlength`](/de/docs/Web/HTML/Element/input#maxlength)-Attribute sind auf 9 und 12 eingestellt, um zu verlangen, dass der Wert mindestens neun und höchstens 12 Zeichen beträgt (erstere ohne Trennzeichen zwischen den Zifferngruppen und letztere mit ihnen). Das [`required`](/de/docs/Web/HTML/Element/input#required)-Attribut wird verwendet, um anzuzeigen, dass dieser Steuerung ein Wert haben muss. Schließlich wird [`autocomplete`](/de/docs/Web/HTML/Element/input#autocomplete) auf `off` gesetzt, um zu verhindern, dass Passwortmanager und Sitzungs-Wiederherstellungsfunktionen versuchen, deren Wert zu setzen, da dies kein Passwort ist.

#### JavaScript

Dies ist nur etwas einfacher Code, um die eingegebene SSN auf dem Bildschirm anzuzeigen, damit Sie sie sehen können. Offensichtlich wird hierdurch der Zweck eines Passwortfelds vereitelt, aber es ist nützlich, um mit dem `pattern` zu experimentieren.

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
        {{domxref("HTMLElement/change_event", "change")}} und
        {{domxref("Element/input_event", "input")}}
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
      <td><p>{{domxref("HTMLInputElement")}}</p></td>
    </tr>
    <tr>
      <td><strong>Methoden</strong></td>
      <td>
        {{domxref("HTMLInputElement.select", "select()")}},
        {{domxref("HTMLInputElement.setRangeText", "setRangeText()")}},
        und
        {{domxref("HTMLInputElement.setSelectionRange", "setSelectionRange()")}}
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
