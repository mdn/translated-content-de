---
title: Client-side Formulare validieren
slug: Learn_web_development/Extensions/Forms/Form_validation
l10n:
  sourceCommit: 3681b0af6ad675c0be657f6d74933f439099e76b
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data", "Learn_web_development/Extensions/Forms")}}

Es ist wichtig sicherzustellen, dass alle erforderlichen Formularsteuerungen ausgefüllt und im richtigen Format sind, bevor Benutzerdaten an den Server gesendet werden. Diese **Validierung von Formularen auf der Client-Seite** hilft sicherzustellen, dass die eingegebenen Daten den Anforderungen entsprechen, die in den verschiedenen Formularsteuerungen festgelegt sind.

Dieser Artikel führt Sie durch grundlegende Konzepte und Beispiele zur Validierung von Formularen auf der Client-Seite.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Computerkenntnisse, ein vernünftiges Verständnis von
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu verstehen, was die Validierung von Formularen auf der Client-Seite ist, warum sie wichtig ist und wie man verschiedene Techniken anwendet, um sie zu implementieren.
      </td>
    </tr>
  </tbody>
</table>

Die Validierung auf der Client-Seite ist eine erste Überprüfung und ein wichtiges Merkmal für eine gute Benutzererfahrung; indem fehlerhafte Daten auf der Client-Seite abgefangen werden, kann der Benutzer sie sofort korrigieren.
Falls die Daten an den Server gelangen und dann abgelehnt werden, entsteht durch eine Hin- und Rückfahrt zum Server eine spürbare Verzögerung, um dem Benutzer mitzuteilen, dass er seine Daten korrigieren soll.

Allerdings _sollte die Validierung auf der Client-Seite nicht als_ umfassende Sicherheitsmaßnahme betrachtet werden! Ihre Anwendungen sollten immer auch eine Validierung, einschließlich Sicherheitsüberprüfungen, auf der _Server-Seite_ **sowie** auf der Client-Seite durchführen, da die Validierung auf der Client-Seite zu leicht zu umgehen ist, sodass böswillige Benutzer weiterhin leicht schlechte Daten an Ihren Server senden können.

> [!NOTE]
> Lesen Sie [Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security), um eine Vorstellung davon zu bekommen, was _passieren könnte_; die Implementierung der Validierung auf der Server-Seite liegt etwas außerhalb des Umfangs dieses Moduls, aber Sie sollten sie beachten.

## Was ist Formularvalidierung?

Wenn Sie eine beliebte Website mit einem Registrierungsformular besuchen, werden Sie feststellen, dass sie Feedback geben, wenn Sie Ihre Daten nicht im erwarteten Format eingeben.
Sie erhalten Nachrichten wie:

- "Dieses Feld ist erforderlich" (Sie können dieses Feld nicht leer lassen).
- "Bitte geben Sie Ihre Telefonnummer im Format xxx-xxxx ein" (Ein bestimmtes Datenformat ist erforderlich, um als gültig zu gelten).
- "Bitte geben Sie eine gültige E-Mail-Adresse ein" (die eingegebenen Daten sind nicht im richtigen Format).
- "Ihr Passwort muss zwischen 8 und 30 Zeichen lang sein und einen Großbuchstaben, ein Symbol und eine Zahl enthalten." (Ein sehr spezifisches Datenformat ist für Ihre Daten erforderlich).

Dies wird als **Formularvalidierung** bezeichnet.
Wenn Sie Daten eingeben, überprüft der Browser (und der Webserver), ob die Daten im korrekten Format und innerhalb der von der Anwendung festgelegten Einschränkungen liegen. Die im Browser durchgeführte Validierung wird als **Client-seitige** Validierung bezeichnet, während die auf dem Server durchgeführte Validierung als **Server-seitige** Validierung bezeichnet wird.
In diesem Kapitel konzentrieren wir uns auf die Client-seitige Validierung.

Wenn die Informationen korrekt formatiert sind, erlaubt die Anwendung, die Daten an den Server zu senden und (normalerweise) in einer Datenbank zu speichern; wenn die Informationen nicht korrekt formatiert sind, gibt sie dem Benutzer eine Fehlermeldung, die erklärt, was korrigiert werden muss, und gibt ihm die Möglichkeit, es erneut zu versuchen.

Wir möchten das Ausfüllen von Webformularen so einfach wie möglich gestalten. Warum bestehen wir also darauf, unsere Formulare zu validieren?
Dafür gibt es drei Hauptgründe:

- **Wir wollen die richtigen Daten im richtigen Format bekommen.** Unsere Anwendungen funktionieren möglicherweise nicht ordnungsgemäß, wenn die Daten unserer Benutzer im falschen Format gespeichert werden, nicht korrekt sind oder ganz fehlen.
- **Wir möchten die Daten unserer Benutzer schützen**. Unsere Benutzer dazu zu zwingen, sichere Passwörter einzugeben, erleichtert es, ihre Kontoinformationen zu schützen.
- **Wir möchten uns selbst schützen**. Es gibt viele Möglichkeiten, wie böswillige Benutzer ungeschützte Formulare missbrauchen können, um der Anwendung Schaden zuzufügen. Siehe [Website Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security).

  > [!WARNING]
  > Vertrauen Sie niemals Daten, die vom Client an Ihren Server gesendet werden. Auch wenn Ihr Formular korrekt validiert und fehlerhafte Eingaben auf der Client-Seite verhindert werden, kann ein böswilliger Benutzer die Netzwerk-Anfrage weiterhin ändern.

## Verschiedene Arten der Validierung auf der Client-Seite

Es gibt zwei verschiedene Arten der Validierung auf der Client-Seite, denen Sie im Web begegnen werden:

- **HTML-Formularvalidierung**
  HTML-Formularattribute können definieren, welche Formularsteuerelemente erforderlich sind und in welchem Format die Benutzereingaben vorliegen müssen, um gültig zu sein.
- **JavaScript-Formularvalidierung**
  JavaScript wird in der Regel integriert, um die HTML-Formularvalidierung zu verbessern oder anzupassen.

Die Validierung auf der Client-Seite kann mit wenig bis gar keinem JavaScript erreicht werden. Die HTML-Validierung ist schneller als JavaScript, aber weniger anpassbar als die JavaScript-Validierung. Es wird allgemein empfohlen, Ihre Formulare mit robusten HTML-Features zu beginnen und die Benutzererfahrung bei Bedarf mit JavaScript zu verbessern.

## Verwendung der integrierten Formularvalidierung

Eine der bedeutendsten Funktionen von [Formularsteuerungen](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types) ist die Fähigkeit, die meisten Benutzerdaten zu validieren, ohne sich auf JavaScript zu verlassen.
Dies wird durch die Verwendung von Validierungs-Attributen auf Formularelementen erreicht.
Viele dieser Attribute haben wir bereits früher im Kurs gesehen, aber um es zusammenzufassen:

- [`required`](/de/docs/Web/HTML/Reference/Attributes/required): Gibt an, ob ein Formularfeld ausgefüllt werden muss, bevor das Formular gesendet werden kann.
- [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength) und [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength): Gibt die Mindest- und Höchstlänge von Textdaten (Zeichenfolgen) an.
- [`min`](/de/docs/Web/HTML/Reference/Attributes/min), [`max`](/de/docs/Web/HTML/Reference/Attributes/max) und [`step`](/de/docs/Web/HTML/Reference/Attributes/step): Gibt die Mindest- und Höchstwerte für numerische Eingabetypen und den Schrittwert, beginnend ab dem Minimum an.
- [`type`](/de/docs/Web/HTML/Reference/Elements/input#input_types): Gibt an, ob die Daten eine Zahl, eine E-Mail-Adresse oder ein anderer spezifischer Voreingabetyp sein müssen.
- [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern): Gibt einen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) an, der ein Muster definiert, dem die eingegebenen Daten folgen müssen.

Wenn die in einem Formularfeld eingegebenen Daten alle durch die auf das Feld angewendeten Attribute festgelegten Regeln erfüllen, wird es als gültig angesehen. Andernfalls gilt es als ungültig.

Wenn ein Element gültig ist, gelten folgende Bedingungen:

- Das Element entspricht der {{cssxref(":valid")}} CSS-Pseudoklasse, mit der Sie einen spezifischen Stil auf gültige Elemente anwenden können. Das Steuerelement wird auch der {{cssxref(":user-valid")}} entsprechen, wenn der Benutzer mit dem Steuerelement interagiert hat, und kann anderen UI-Pseudoklassen entsprechen, wie beispielsweise {{cssxref(":in-range")}}, abhängig vom Eingabetyp und den Attributen.
- Wenn der Benutzer versucht, die Daten zu senden, sendet der Browser das Formular, vorausgesetzt, es gibt keine anderen Einschränkungen (z. B. JavaScript).

Wenn ein Element ungültig ist, gelten folgende Bedingungen:

- Das Element entspricht der {{cssxref(":invalid")}} CSS-Pseudoklasse. Wenn der Benutzer mit dem Steuerelement interagiert hat, entspricht es auch der {{cssxref(":user-invalid")}} CSS-Pseudoklasse. Andere UI-Pseudoklassen können ebenfalls übereinstimmen, wie z. B. {{cssxref(":out-of-range")}}, abhängig vom Fehler. Diese lassen Sie einen spezifischen Stil auf ungültige Elemente anwenden.
- Wenn der Benutzer versucht, die Daten zu senden, blockiert der Browser die Formularübermittlung und zeigt eine Fehlermeldung an. Die Fehlermeldung variiert je nach Art des Fehlers. Die [Constraint Validation API](#die_constraint_validierungs-api) ist unten beschrieben.

## Beispiele für integrierte Formularvalidierung

In diesem Abschnitt testen wir einige der oben besprochenen Attribute.

### Grundlegendes Starter-File

Beginnen wir mit einem einfachen Beispiel: ein Eingabefeld, das Ihnen die Wahl zwischen Banane oder Kirsche lässt.
Dieses Beispiel beinhaltet einen Text-{{HTMLElement("input")}} mit einem zugehörigen {{htmlelement("label")}} und einer {{htmlelement("button")}}-Schaltfläche zum Absenden.

```html live-sample___simple-start-file
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Favorite fruit start</title>
    <style>
      input:invalid {
        border: 2px dashed red;
      }

      input:valid {
        border: 2px solid black;
      }
    </style>
  </head>

  <body>
    <form>
      <label for="choose">Would you prefer a banana or a cherry?</label>
      <input id="choose" name="i_like" />
      <button>Submit</button>
    </form>
  </body>
</html>
```

{{EmbedLiveSample("simple-start-file", "100%", 80)}}

Um zu beginnen, kopieren Sie die vorherige HTML-Liste in eine neue `index.html`-Datei. Speichern Sie sie in einem neuen Verzeichnis auf Ihrer Festplatte.

### Das `required`-Attribut

Eine gängige HTML-Validierungsfunktion ist das [`required`](/de/docs/Web/HTML/Reference/Attributes/required)-Attribut.
Fügen Sie dieses Attribut zu einer Eingabe hinzu, um ein Element obligatorisch zu machen.
Wenn dieses Attribut gesetzt ist, entspricht das Element der {{cssxref(':required')}} UI-Pseudoklasse und das Formular wird nicht gesendet, wobei beim Absenden eine Fehlermeldung angezeigt wird, wenn die Eingabe leer ist.
Während es leer ist, wird die Eingabe auch als ungültig betrachtet und entspricht somit der {{cssxref(':invalid')}} UI-Pseudoklasse.

Wenn ein beliebiger Radio-Button in einer gleichnamigen Gruppe das `required`-Attribut hat, muss einer der Radio-Buttons in dieser Gruppe markiert sein, damit die Gruppe gültig ist; der markierte Radio-Button muss nicht derjenige mit dem gesetzten Attribut sein.

> [!NOTE]
> Verlangen Sie von den Benutzern nur die Eingabe von Daten, die Sie benötigen: Zum Beispiel, ist es wirklich notwendig, das Geschlecht oder den Titel einer Person zu wissen?

Fügen Sie Ihrem Eingabefeld ein `required`-Attribut hinzu, wie unten gezeigt.

```html live-sample___the-required-attribute
<form>
  <label for="choose">Would you prefer a banana or cherry? *</label>
  <input id="choose" name="i-like" required />
  <button>Submit</button>
</form>
```

> [!NOTE]
> Eine gängige Praxis ist es, ein Sternchen (oder eine andere Markierung) nach den Labels der erforderlichen Formularsteuerelemente zu setzen, damit sie bei sehenden Benutzern auffallen. Den Benutzern zu zeigen, wann Formulare erforderlich sind, ist nicht nur eine gute Benutzererfahrung, sondern es wird auch von den WCAG [Zugänglichkeits](/de/docs/Learn_web_development/Core/Accessibility)-Richtlinien verlangt.

Wir fügen CSS-Stile hinzu, die darauf basieren, ob das Element erforderlich, gültig oder ungültig ist:

```css live-sample___the-required-attribute
input:invalid {
  border: 2px dashed red;
}

input:invalid:required {
  background-image: linear-gradient(to right, pink, lightgreen);
}

input:valid {
  border: 2px solid black;
}
```

```js hidden live-sample___the-required-attribute live-sample___validate-regular-expression live-sample___constraining-values
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
```

Dieses CSS lässt die Eingabe bei Ungültigkeit einen roten, gestrichelten Rahmen und bei Gültigkeit einen subtileren, soliden schwarzen Rahmen haben.
Wir haben auch einen Hintergrund-Verlauf hinzugefügt, wenn die Eingabe erforderlich _und_ ungültig ist. Probieren Sie das neue Verhalten im folgenden Beispiel aus:

{{EmbedLiveSample("the-required-attribute", "100%", 80, , , , , "allow-forms")}}

Versuchen Sie, das Formular ohne einen Wert zu senden. Beachten Sie, wie die ungültige Eingabe den Fokus erhält und eine Standardfehlermeldung ("Bitte füllen Sie dieses Feld aus") erscheint. Das Formular wird auch daran gehindert, gesendet zu werden (obwohl wir beachten, dass wir auch verhindern, dass das Formular gesendet wird, selbst wenn ein Wert eingegeben wird, um einen Fehler zu verhindern, da MDN eingebettete Formulare behandelt).

### Validierung gegen einen regulären Ausdruck

Ein weiteres nützliches Validierungsmerkmal ist das [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)-Attribut, das als Wert einen [Regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) erwartet.
Ein regulärer Ausdruck (regexp) ist ein Muster, das zum Vergleichen von Zeichenkombinationen in Textzeichenfolgen verwendet werden kann, daher sind regexps ideal für die Formularvalidierung und dienen einer Vielzahl anderer Verwendungen in JavaScript.

Regexps sind ziemlich komplex und wir beabsichtigen nicht, Ihnen hier umfassend beizubringen. Unten finden Sie einige Beispiele, die Ihnen eine Grundidee darüber geben, wie sie funktionieren.

- `a` — Passt zu einem Zeichen, das `a` ist (nicht `b`, nicht `aa` usw.).
- `abc` — Passt zu `a`, gefolgt von `b`, gefolgt von `c`.
- `ab?c` — Passt zu `a`, optional gefolgt von einem einzelnen `b`, gefolgt von `c` (`ac` oder `abc`).
- `ab*c` — Passt zu `a`, optional gefolgt von einer beliebigen Anzahl von `b's`, gefolgt von `c` (`ac`, `abc`, `abbbbbc` usw.).
- `a|b` — Passt zu einem Zeichen, das `a` oder `b` ist.
- `abc|xyz` — Passt genau zu `abc` oder genau zu `xyz` (aber nicht zu `abcxyz` oder `a` oder `y` usw.).

Es gibt viele weitere Möglichkeiten, die wir hier nicht abdecken.
Für eine vollständige Liste und viele Beispiele konsultieren Sie unsere [Reguläre Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions)-Dokumentation.

Lassen Sie uns ein Beispiel implementieren.
Aktualisieren Sie Ihr HTML, um ein [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)-Attribut hinzuzufügen, wie folgt:

```html live-sample___validate-regular-expression
<form>
  <label for="choose">Would you prefer a banana or a cherry? *</label>
  <input id="choose" name="i-like" required pattern="[Bb]anana|[Cc]herry" />
  <button>Submit</button>
</form>
```

```css hidden live-sample___validate-regular-expression
input:invalid {
  border: 2px dashed red;
}

input:valid {
  border: 2px solid black;
}
```

Dies gibt uns das folgende Update — probieren Sie es aus:

{{EmbedLiveSample("validate-regular-expression", "100%", 80, , , , , "allow-forms")}}

Sie können auch die **Play**-Taste drücken, um das Beispiel im MDN Playground zu öffnen und den Quellcode dort zu bearbeiten.

In diesem Beispiel akzeptiert das {{HTMLElement("input")}}-Element einen von vier möglichen Werten: die Zeichenfolgen "banana", "Banana", "cherry" oder "Cherry". Reguläre Ausdrücke sind case-sensitiv, aber wir haben es so gemacht, dass es großgeschriebene sowie kleingeschriebene Versionen mit einem zusätzlichen "Aa" Muster innerhalb von eckigen Klammern unterstützt.

An diesem Punkt versuchen Sie, den Wert innerhalb des [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)-Attributs so zu ändern, dass einige der zuvor gesehenen Beispiele entsprechen, und sehen Sie, wie sich das auf die Werte auswirkt, die Sie eingeben können, um den Eingabewert gültig zu machen.
Versuchen Sie, einige Ihrer eigenen zu erstellen und beobachten Sie, wie sie funktionieren.
Machen Sie sie möglichst frucht-bezogen, damit Ihre Beispiele Sinn machen!

Wenn ein nicht leerer Wert des {{HTMLElement("input")}} nicht dem regulären Ausdrucksmuster entspricht, entspricht die `input`-Eingabe der {{cssxref(':invalid')}} Pseudoklasse. Wenn sie leer ist und das Element nicht erforderlich ist, wird sie nicht als ungültig betrachtet.

Einige {{HTMLElement("input")}}-Elementtypen benötigen kein [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)-Attribut, um gegen einen regulären Ausdruck validiert zu werden. Beispielsweise validiert das Festlegen des `email`-Typs die Eingabewerte gegen ein gut geformtes E-Mail-Adresse-Muster oder ein Muster, das eine durch Kommata getrennte Liste von E-Mail-Adressen darstellt, wenn es das [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple)-Attribut hat.

> [!NOTE]
> Das {{HTMLElement("textarea")}}-Element unterstützt das [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)-Attribut nicht.

### Einschränkung der Länge Ihrer Einträge

Sie können die Zeichenlänge aller von {{HTMLElement("input")}} oder {{HTMLElement("textarea")}} erstellten Textfelder mittels der [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength) und [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength)-Attribute beschränken.
Ein Feld ist ungültig, wenn es einen Wert hat und dieser Wert weniger Zeichen als der im [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength) angegebene Wert oder mehr als der im [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength) angegebene Wert hat.

Browser lassen den Benutzer oft nicht zu, einen längeren Wert als erwartet in Textfelder einzugeben. Eine bessere Benutzererfahrung als nur die Verwendung von `maxlength` ist es, auch Feedback zur Zeichenanzahl auf eine zugängliche Art und Weise zu geben und den Benutzer seinen Inhalt auf die passende Größe bearbeiten zu lassen.
Ein Beispiel dafür ist das Zeichenlimit beim Posting in sozialen Medien. JavaScript, einschließlich [Lösungen, die `maxlength` verwenden](https://github.com/mimo84/bootstrap-maxlength), kann dazu verwendet werden, das zu ermöglichen.

> [!NOTE]
> Längenbeschränkungen werden nie gemeldet, wenn der Wert programmgesteuert gesetzt wird. Sie werden nur für benutzerseitige Eingaben gemeldet.

### Einschränkung der Werte Ihrer Einträge

Für numerische Felder, einschließlich [`<input type="number">`](/de/docs/Web/HTML/Reference/Elements/input/number) und die verschiedenen Datumseingabetypen, können die [`min`](/de/docs/Web/HTML/Reference/Attributes/min) und [`max`](/de/docs/Web/HTML/Reference/Attributes/max)-Attribute verwendet werden, um einen Bereich gültiger Werte zu definieren.
Wenn das Feld einen Wert außerhalb dieses Bereichs enthält, wird es als ungültig betrachtet.

Schauen wir uns ein weiteres Beispiel an.
Erstellen Sie eine neue Kopie der [Grundlegenden Starter-Datei](#grundlegendes_starter-file) (speichern Sie sie im gleichen Verzeichnis als `index2.html`).

Löschen Sie nun den Inhalt des `<body>`-Elements und ersetzen Sie ihn durch das Folgende:

```html live-sample___constraining-values
<form>
  <div>
    <label for="choose">Would you prefer a banana or a cherry? *</label>
    <input
      type="text"
      id="choose"
      name="i-like"
      required
      minlength="6"
      maxlength="6" />
  </div>
  <div>
    <label for="number">How many would you like?</label>
    <input type="number" id="number" name="amount" value="1" min="1" max="10" />
  </div>
  <div>
    <button>Submit</button>
  </div>
</form>
```

- Hier sehen Sie, dass wir dem `text`-Feld ein `minlength` und `maxlength` von sechs gegeben haben, was der gleichen Länge wie Banane und Kirsche entspricht.
- Wir haben dem `number`-Feld auch ein `min` von eins und ein `max` von zehn gegeben.
  Eingegebene Zahlen außerhalb dieses Bereichs werden als ungültig angezeigt; Benutzer können die Erhöhungs-/Verringerungspfeile nicht verwenden, um den Wert außerhalb dieses Bereichs zu bewegen.
  Wenn der Benutzer manuell eine Zahl außerhalb dieses Bereichs eingibt, werden die Daten als ungültig betrachtet.
  Die Zahl ist nicht erforderlich, sodass das Entfernen des Wertes zu einem gültigen Wert führt.

```css hidden live-sample___constraining-values
input:invalid {
  border: 2px dashed red;
}

input:valid {
  border: 2px solid black;
}

div {
  margin-bottom: 10px;
}
```

Hier ist das Beispiel, das live läuft:

{{EmbedLiveSample("constraining-values", "100%", 100)}}

Sie können auch die **Play**-Taste drücken, um das Beispiel im MDN Playground zu öffnen und den Quellcode dort zu bearbeiten.

Numerische Eingabetypen wie `number`, `range` und `date` können auch das [`step`](/de/docs/Web/HTML/Reference/Attributes/step)-Attribut annehmen. Dieses Attribut gibt an, in welchem Schrittwert der Wert erhöht oder verringert wird, wenn die Steuerelemente verwendet werden (z. B. die Pfeiltasten auf der Tastatur oder das Verschieben des Schiebereglers). Das `step`-Attribut wurde in unserem Beispiel nicht angegeben, sodass der Wert standardmäßig `1` ist. Das bedeutet, dass Fließkommazahlen, wie 3.2, ebenfalls als ungültig angezeigt werden.

### Vollständiges Beispiel

Hier ist ein vollständiges Beispiel für die Verwendung der integrierten Validierungsfunktionen von HTML.
Zuerst etwas HTML:

```html
<form>
  <p>Please complete all required (*) fields.</p>
  <fieldset>
    <legend>Do you have a driver's license? *</legend>
    <input type="radio" required name="driver" id="r1" value="yes" />
    <label for="r1">Yes</label>
    <input type="radio" required name="driver" id="r2" value="no" />
    <label for="r2">No</label>
  </fieldset>
  <p>
    <label for="n1">How old are you?</label>
    <input type="number" min="12" max="120" step="1" id="n1" name="age" />
  </p>
  <p>
    <label for="t1">What's your favorite fruit? *</label>
    <input
      type="text"
      id="t1"
      name="fruit"
      list="l1"
      required
      pattern="[Bb]anana|[Cc]herry|[Aa]pple|[Ss]trawberry|[Ll]emon|[Oo]range" />
    <datalist id="l1">
      <option>Banana</option>
      <option>Cherry</option>
      <option>Apple</option>
      <option>Strawberry</option>
      <option>Lemon</option>
      <option>Orange</option>
    </datalist>
  </p>
  <p>
    <label for="t2">What's your email address?</label>
    <input type="email" id="t2" name="email" />
  </p>
  <p>
    <label for="t3">Leave a short message</label>
    <textarea id="t3" name="msg" maxlength="140" rows="5"></textarea>
  </p>
  <p>
    <button>Submit</button>
  </p>
</form>
```

Und nun etwas CSS, um das HTML zu gestalten:

```css
form {
  font: 1em sans-serif;
  max-width: 320px;
}

p > label {
  display: block;
}

input[type="text"],
input[type="email"],
input[type="number"],
textarea,
fieldset {
  width: 100%;
  border: 1px solid #333333;
  box-sizing: border-box;
}

input:invalid {
  box-shadow: 0 0 5px 1px red;
}

input:focus:invalid {
  box-shadow: none;
}
```

Dies wird wie folgt dargestellt:

{{EmbedLiveSample("Full_example", "100%", 420)}}

Sie können auch die **Play**-Taste drücken, um das Beispiel im MDN Playground zu öffnen und den Quellcode dort zu bearbeiten.

Siehe [Validerungsbezogene Attribute](/de/docs/Web/HTML/Guides/Constraint_validation#validation-related_attributes) für eine vollständige Liste von Attributen, die verwendet werden können, um Eingabewerte einzuschränken und die Eingabetypen, die sie unterstützen.

## Validierung von Formularen mit JavaScript

Wenn Sie den Text der nativen Fehlermeldungen ändern möchten, ist JavaScript erforderlich.
In diesem Abschnitt betrachten wir die verschiedenen Möglichkeiten, dies zu tun.

### Die Constraint Validierungs-API

Die Constraint Validierungs-API besteht aus einer Reihe von Methoden und Eigenschaften, die auf den folgenden Formularelement-DOM-Schnittstellen verfügbar sind:

- [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement) (repräsentiert ein [`<button>`](/de/docs/Web/HTML/Reference/Elements/button)-Element)
- [`HTMLFieldSetElement`](/de/docs/Web/API/HTMLFieldSetElement) (repräsentiert ein [`<fieldset>`](/de/docs/Web/HTML/Reference/Elements/fieldset)-Element)
- [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) (repräsentiert ein [`<input>`](/de/docs/Web/HTML/Reference/Elements/input)-Element)
- [`HTMLOutputElement`](/de/docs/Web/API/HTMLOutputElement) (repräsentiert ein [`<output>`](/de/docs/Web/HTML/Reference/Elements/output)-Element)
- [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement) (repräsentiert ein [`<select>`](/de/docs/Web/HTML/Reference/Elements/select)-Element)
- [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement) (repräsentiert ein [`<textarea>`](/de/docs/Web/HTML/Reference/Elements/textarea)-Element)

Die Constraint Validierungs-API stellt die folgenden Eigenschaften auf den oben genannten Elementen zur Verfügung.

- `validationMessage`: Gibt eine lokalisierte Nachricht zurück, die die Validierungsbeschränkungen beschreibt, die das Steuerelement nicht erfüllt (falls vorhanden). Wenn das Steuerelement kein Kandidat für die Constraint-Validierung ist (`willValidate` ist `false`) oder der Wert des Elements seine Einschränkungen erfüllt (gültig ist), wird eine leere Zeichenfolge zurückgegeben.
- `validity`: Gibt ein `ValidityState`-Objekt zurück, das mehrere Eigenschaften enthält, die den Gültigkeitszustand des Elements beschreiben. Sie können vollständige Details zu allen verfügbaren Eigenschaften auf der [`ValidityState`](/de/docs/Web/API/ValidityState)-Referenzseite finden; hier werden einige der häufigsten aufgelistet:
  - [`patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch): Gibt `true` zurück, wenn der Wert nicht dem angegebenen [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern) entspricht, und `false`, wenn er übereinstimmt. Bei `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - [`tooLong`](/de/docs/Web/API/ValidityState/tooLong): Gibt `true` zurück, wenn der Wert länger als die maximale Länge ist, die durch das [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength)-Attribut angegeben ist, oder `false`, wenn es kürzer oder gleich der maximalen Länge ist. Bei `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - [`tooShort`](/de/docs/Web/API/ValidityState/tooShort): Gibt `true` zurück, wenn der Wert kürzer als die minimale Länge ist, die durch das [`minlength`](/de/docs/Web/HTML/Reference/Elements/input#minlength)-Attribut angegeben ist, oder `false`, wenn es größer oder gleich dem Minimum ist. Bei `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - [`rangeOverflow`](/de/docs/Web/API/ValidityState/rangeOverflow): Gibt `true` zurück, wenn der Wert größer als der durch das [`max`](/de/docs/Web/HTML/Reference/Elements/input#max)-Attribut angegebenen Wert ist, oder `false`, wenn es kleiner oder gleich dem Maximum ist. Bei `true`, entspricht das Element der {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}} CSS-Pseudoklassen.
  - [`rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow): Gibt `true` zurück, wenn der Wert kleiner als der durch das [`min`](/de/docs/Web/HTML/Reference/Elements/input#min)-Attribut angegebenen Wert ist, oder `false`, wenn es größer oder gleich dem Minimum ist. Bei `true`, entspricht das Element der {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}} CSS-Pseudoklassen.
  - [`typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch): Gibt `true` zurück, wenn der Wert nicht in der erforderlichen Syntax ist (wenn [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) `email` oder `url` ist), oder `false`, wenn die Syntax korrekt ist. Bei `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - `valid`: Gibt `true` zurück, wenn das Element alle seine Validierungsbeschränkungen erfüllt und daher als gültig betrachtet wird, oder `false`, wenn es eine Beschränkung verletzt. Bei `true`, entspricht das Element der {{cssxref(":valid")}} CSS-Pseudoklasse; andernfalls der {{cssxref(":invalid")}} CSS-Pseudoklasse.
  - `valueMissing`: Gibt `true` zurück, wenn das Element ein [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut, aber keinen Wert hat, oder `false` sonst. Bei `true`, entspricht das Element der {{cssxref(":invalid")}} CSS-Pseudoklasse.

- `willValidate`: Gibt `true` zurück, wenn das Element beim Absenden des Formulars validiert wird; `false` andernfalls.

Die Constraint Validation API stellt auch die folgenden Methoden auf den oben genannten Elementen und dem [`form`](/de/docs/Web/HTML/Reference/Elements/form)-Element zur Verfügung.

- `checkValidity()`: Gibt `true` zurück, wenn der Wert des Elements keine Gültigkeitsprobleme aufweist; andernfalls `false`. Wenn das Element ungültig ist, löst diese Methode auch ein [`invalid` Event](/de/docs/Web/API/HTMLInputElement/invalid_event) auf dem Element aus.
- `reportValidity()`: Meldet ungültige Felder unter Verwendung von Events. Diese Methode ist nützlich in Kombination mit `preventDefault()` in einem `onSubmit`-Event-Handler.
- `setCustomValidity(message)`: Fügt dem Element eine benutzerdefinierte Fehlermeldung hinzu; wenn Sie eine benutzerdefinierte Fehlermeldung setzen, wird das Element als ungültig betrachtet und die angegebene Fehlermeldung angezeigt. Damit können Sie mit JavaScript-Code ein Validierungsmanko festlegen, das über die standardmäßigen HTML-Validierungsbeschränkungen hinausgeht. Die Nachricht wird dem Benutzer beim Melden des Problems angezeigt.

#### Implementierung einer benutzerdefinierten Fehlermeldung

Wie Sie in den vorherigen Beispielen zu HTML-Validierungsbeschränkungen gesehen haben, zeigt der Browser jedes Mal, wenn ein Benutzer versucht, ein ungültiges Formular abzusenden, eine Fehlermeldung an. Die Art und Weise, wie diese Nachricht angezeigt wird, hängt vom Browser ab.

Diese automatisierten Nachrichten haben zwei Nachteile:

- Es gibt keinen Standardweg, um ihr Aussehen mit CSS zu ändern.
- Sie hängen von der Browsersprache ab, was bedeutet, dass Sie eine Seite in einer Sprache haben können, aber eine Fehlermeldung in einer anderen Sprache angezeigt wird, wie es im folgenden Firefox-Screenshot zu sehen ist.

![Beispiel einer Fehlermeldung mit Firefox in Französisch auf einer englischen Seite](error-firefox-win7.png)

Die Anpassung dieser Fehlermeldungen ist einer der häufigsten Anwendungsfälle der Constraint Validation API.
Lassen Sie uns ein Beispiel durchgehen, um zu sehen, wie man das macht.

Wir beginnen mit etwas HTML. Fühlen Sie sich frei, dies in einer weiteren Kopie der [Grundlegenden Starter-Datei](#grundlegendes_starter-file), wenn Sie möchten:

```html
<form>
  <label for="mail">
    I would like you to provide me with an email address:
  </label>
  <input type="email" id="mail" name="mail" />
  <button>Submit</button>
</form>
```

Fügen Sie die folgende JavaScript-Datei der Seite hinzu:

```js
const email = document.getElementById("mail");

email.addEventListener("input", (event) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an email address!");
  } else {
    email.setCustomValidity("");
  }
});
```

Hier speichern wir einen Verweis auf das E-Mail-Eingabefeld und fügen dann einen Event-Listener hinzu, der bei jeder Änderung des Werts im Eingabefeld den enthaltenen Code ausführt.

Im enthaltenen Code überprüfen wir, ob die `validity.typeMismatch`-Eigenschaft der E-Mail-Eingabe `true` zurückgibt, was bedeutet, dass der enthaltene Wert nicht dem Muster einer gut geformten E-Mail-Adresse entspricht. Wenn dies der Fall ist, rufen wir die [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity)-Methode mit einer benutzerdefinierten Nachricht auf. Dadurch wird das Eingabefeld ungültig, sodass, wenn Sie versuchen, das Formular abzuschicken, dies fehlschlägt und die benutzerdefinierte Fehlermeldung angezeigt wird.

Wenn die `validity.typeMismatch`-Eigenschaft `false` zurückgibt, rufen wir die `setCustomValidity()`-Methode mit einer leeren Zeichenfolge auf. Dadurch wird das Eingabefeld gültig, sodass das Formular abgesendet wird. Bei der Validierung, wenn ein Formularsteuerelement einen `customError` hat, der nicht die leere Zeichenfolge ist, wird das Formular blockiert.

Sie können es unten ausprobieren (drücken Sie die **Play**-Taste, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten):

```html hidden live-sample___custom-error-message
<form>
  <label for="mail"
    >I would like you to provide me with an email address:</label
  >
  <input type="email" id="mail" name="mail" />
  <button>Submit</button>
</form>
```

```css hidden live-sample___custom-error-message
input:invalid {
  border: 2px dashed red;
}

input:valid {
  border: 2px solid black;
}
form {
  margin: 3rem 0;
}
```

```js hidden live-sample___custom-error-message
const email = document.getElementById("mail");

email.addEventListener("input", (event) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an email address!");
  } else {
    email.setCustomValidity("");
  }
});

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
```

{{EmbedLiveSample("custom-error-message", "100%", 120, , , , , "allow-forms")}}

#### Erweiterung der integrierten Formularvalidierung

Das vorherige Beispiel zeigte, wie Sie eine benutzerdefinierte Nachricht für einen bestimmten Fehlertyp (`validity.typeMismatch`) hinzufügen können.
Es ist auch möglich, die gesamte eingebaute Formularvalidierung zu verwenden und dann mit `setCustomValidity()` zu erweitern.

Hier demonstrieren wir, wie Sie die integrierte [`<input type="email">`](/de/docs/Web/HTML/Reference/Elements/input/email)-Validierung erweitern können, um nur Adressen zu akzeptieren, die die Domain `@example.com` haben.
Wir beginnen mit dem HTML für das Formular unten.

```html
<form>
  <label for="mail">Email address (@example.com only):</label>
  <input type="email" id="mail" />
  <button>Submit</button>
</form>
```

Der Validierungscode wird unten gezeigt.
Bei neuen Eingaben setzt der Code die benutzerdefinierte Fehlermeldung zuerst mit einem Aufruf von `setCustomValidity("")` zurück.
Dann verwendet er `email.validity.valid`, um zu überprüfen, ob die eingegebene Adresse ungültig ist und gibt im Falle einer ungültigen Eingabe aus dem Event-Handler zurück.
Dies stellt sicher, dass alle normalen eingebauten Validierungskontrollen ausgeführt werden, während der eingegebene Text keine gültige E-Mail-Adresse ist.

Sobald die E-Mail-Adresse gültig ist, fügt der Code eine benutzerdefinierte Einschränkung hinzu, indem `setCustomValidity()` mit einer Fehlermeldung aufgerufen wird, wenn die Adresse nicht mit `@example.com` endet.

```js
const email = document.getElementById("mail");

email.addEventListener("input", (event) => {
  // Validate with the built-in constraints
  email.setCustomValidity("");
  if (!email.validity.valid) {
    return;
  }

  // Extend with a custom constraints
  if (!email.value.endsWith("@example.com")) {
    email.setCustomValidity("Please enter an email address of @example.com");
  }
});
```

Versuchen Sie, eine ungültige E-Mail-Adresse abzusenden, eine gültige E-Mail-Adresse, die nicht mit `@example.com` endet, und eine, die mit `@example.com` endet.

{{EmbedLiveSample("extending built-in form validation", "", 200, , , , , "allow-forms")}}

#### Ein detaillierteres Beispiel

Nachdem wir nun ein wirklich einfaches Beispiel gesehen haben, schauen wir uns an, wie wir mit dieser API einige etwas komplexere benutzerdefinierte Validierungen erstellen können.

Zunächst das HTML. Erstellen Sie dies gerne mit uns zusammen:

```html
<form novalidate>
  <p>
    <label for="mail">
      <span>Please enter an email address *:</span>
      <input type="email" id="mail" name="mail" required minlength="8" />
      <span class="error" aria-live="polite"></span>
    </label>
  </p>
  <button>Submit</button>
</form>
```

Dieses Formular verwendet das [`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate)-Attribut, um die automatische Validierung des Browsers zu deaktivieren. Das Setzen des `novalidate`-Attributs im Formular verhindert, dass das Formular seine eigenen fehlerhaften Nachrichtenblasen anzeigt, und erlaubt es uns, stattdessen die benutzerdefinierten Fehlermeldungen auf eine Art und Weise im DOM anzuzeigen, die wir selbst auswählen.
Dies deaktiviert jedoch nicht die Unterstützung der Constraint-Validierungs-API noch die Anwendung von CSS-Pseudoklassen wie {{cssxref(":valid")}}, usw.
Das bedeutet, dass obwohl der Browser nicht automatisch die Gültigkeit des Formulars prüft, bevor es seine Daten sendet, Sie es dennoch selbst tun und das Formular entsprechend gestalten können.

Unser Eingabefeld zur Validierung ist ein [`<input type="email">`](/de/docs/Web/HTML/Reference/Elements/input/email), das `required` ist und eine `minlength` von 8 Zeichen hat. Lassen Sie uns dies mit unserem eigenen Code überprüfen und eine benutzerdefinierte Fehlermeldung für jede von ihnen anzeigen.

Wir beabsichtigen, die Fehlermeldungen innerhalb eines `<span>`-Elements anzuzeigen.
Das [`aria-live`](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions)-Attribut wird auf dieses `<span>` gesetzt, um sicherzustellen, dass unsere benutzerdefinierte Fehlermeldung allen präsentiert wird, einschließlich ihrer Wiedergabe durch Bildschirmleser.

Jetzt zu etwas grundlegenderem CSS, um das Erscheinungsbild des Formulars ein wenig zu verbessern und visuelles Feedback zu geben, wenn die Eingabedaten ungültig sind:

```css
body {
  font: 1em sans-serif;
  width: 200px;
  padding: 0;
  margin: 0 auto;
}

p * {
  display: block;
}

input[type="email"] {
  appearance: none;

  width: 100%;
  border: 1px solid #333333;
  margin: 0;

  font-family: inherit;
  font-size: 90%;

  box-sizing: border-box;
}

/* invalid fields */
input:invalid {
  border-color: #990000;
  background-color: #ffdddd;
}

input:focus:invalid {
  outline: none;
}

/* error message styles */
.error {
  width: 100%;
  padding: 0;

  font-size: 80%;
  color: white;
  background-color: #990000;
  border-radius: 0 0 5px 5px;

  box-sizing: border-box;
}

.error.active {
  padding: 0.3em;
}
```

Nun werfen wir einen Blick auf das JavaScript, das die benutzerdefinierte Fehlerüberprüfung implementiert.
Es gibt viele Möglichkeiten, einen DOM-Knoten zu wählen; hier holen wir uns das Formular selbst, das E-Mail-
Eingabefeld sowie das Span-Element, in das wir die Fehlermeldung platzieren werden.

Mit Event-Handlern überprüfen wir, ob die Formularfelder jedes Mal gültig sind, wenn der Benutzer etwas eingibt. Wenn ein Fehler vorliegt, zeigen wir ihn an. Wenn kein Fehler vorliegt, entfernen wir alle Fehlermeldungen.

```js
const form = document.querySelector("form");
const email = document.getElementById("mail");
const emailError = document.querySelector("#mail + span.error");

email.addEventListener("input", (event) => {
  if (email.validity.valid) {
    emailError.textContent = ""; // Remove the message content
    emailError.className = "error"; // Removes the `active` class
  } else {
    // If there is still an error, show the correct error
    showError();
  }
});

form.addEventListener("submit", (event) => {
  // if the email field is invalid
  if (!email.validity.valid) {
    // display an appropriate error message
    showError();
    // prevent form submission
    event.preventDefault();
  }
});

function showError() {
  if (email.validity.valueMissing) {
    // If empty
    emailError.textContent = "You need to enter an email address.";
  } else if (email.validity.typeMismatch) {
    // If it's not an email address,
    emailError.textContent = "Entered value needs to be an email address.";
  } else if (email.validity.tooShort) {
    // If the value is too short,
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }
  // Add the `active` class
  emailError.className = "error active";
}
```

Jedes Mal, wenn wir den Wert der Eingabe ändern, überprüfen wir, ob er gültige Daten enthält. Wenn er es tut, entfernen wir alle angezeigten Fehlermeldungen. Wenn die Daten nicht gültig sind, rufen wir `showError()` auf, um den entsprechenden Fehler anzuzeigen.

Jedes Mal, wenn wir versuchen, das Formular abzusenden, überprüfen wir erneut, ob die Daten gültig sind. Wenn dies der Fall ist, lassen wir das Formular übermitteln. Wenn nicht, rufen wir `showError()` auf, um den entsprechenden Fehler anzuzeigen, und verhindern das Absenden des Formulars mit [`preventDefault()`](/de/docs/Web/API/Event/preventDefault).

Die `showError()`-Funktion verwendet verschiedene Eigenschaften des `validity`-Objekts der Eingabe, um festzustellen, was der Fehler ist, um dann eine Fehlermeldung entsprechend anzuzeigen.

Hier ist das Live-Ergebnis (drücken Sie die **Play**-Taste, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten):

```html hidden live-sample___detailed-custom-validation
<form novalidate>
  <p>
    <label for="mail">
      <span>Please enter an email address *:</span>
      <input type="email" id="mail" name="mail" required minlength="8" />
      <span class="error" aria-live="polite"></span>
    </label>
  </p>
  <button>Submit</button>
</form>
```

```css hidden live-sample___detailed-custom-validation
body {
  font: 1em sans-serif;
  width: 200px;
  padding: 0;
  margin: 0 auto;
}

p * {
  display: block;
}

input[type="email"] {
  -webkit-appearance: none;
  appearance: none;

  width: 100%;
  border: 1px solid #333333;
  margin: 0;

  font-family: inherit;
  font-size: 90%;

  box-sizing: border-box;
}

/* This is our style for the invalid fields */
input:invalid {
  border-color: #990000;
  background-color: #ffdddd;
}

input:focus:invalid {
  outline: none;
}

/* This is the style of our error messages */
.error {
  width: 100%;
  padding: 0;

  font-size: 80%;
  color: white;
  background-color: #990000;
  border-radius: 0 0 5px 5px;

  box-sizing: border-box;
}

.error.active {
  padding: 0.3em;
}
```

```js hidden live-sample___detailed-custom-validation
// There are many ways to pick a DOM node; here we get the form itself and the email
// input box, as well as the span element into which we will place the error message.
const form = document.getElementsByTagName("form")[0];

const email = document.getElementById("mail");
const emailError = document.querySelector("#mail + span.error");

email.addEventListener("input", (event) => {
  // Each time the user types something, we check if the
  // form fields are valid.

  if (email.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    emailError.innerHTML = ""; // Reset the content of the message
    emailError.className = "error"; // Reset the visual state of the message
  } else {
    // If there is still an error, show the correct error
    showError();
  }
});

form.addEventListener("submit", (event) => {
  // if the form contains valid data, we let it submit

  if (!email.validity.valid) {
    // If it isn't, we display an appropriate error message
    showError();
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault();
  }
});

function showError() {
  if (email.validity.valueMissing) {
    // If the field is empty
    // display the following error message.
    emailError.textContent = "You need to enter an email address.";
  } else if (email.validity.typeMismatch) {
    // If the field doesn't contain an email address
    // display the following error message.
    emailError.textContent = "Entered value needs to be an email address.";
  } else if (email.validity.tooShort) {
    // If the data is too short
    // display the following error message.
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }

  // Set the styling appropriately
  emailError.className = "error active";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
});
```

{{EmbedLiveSample("detailed-custom-validation", "100%", 150, , , , , "allow-forms")}}

Die Constraint Validierungs-API gibt Ihnen ein leistungsstarkes Werkzeug, um die Formularvalidierung zu handhaben, und gibt Ihnen eine enorme Kontrolle über die Benutzeroberfläche, die über das hinausgeht, was Sie allein mit HTML und CSS tun können.

### Validierung von Formularen ohne integrierte API

In einigen Fällen, wie z. B. bei [benutzerdefinierten Steuerelementen](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls), können Sie die Constraint-Validierungs-API nicht verwenden oder möchten sie nicht verwenden. Sie können trotzdem JavaScript verwenden, um Ihr Formular zu validieren, aber Sie müssen Ihr eigenes schreiben.

Um ein Formular zu validieren, stellen Sie sich einige Fragen:

- Welche Art von Validierung sollte ich durchführen?
  - : Sie müssen bestimmen, wie Sie Ihre Daten validieren: Zeichenfolgenoperationen, Typ-Konvertierung, reguläre Ausdrücke und so weiter. Es liegt an Ihnen.
- Was sollte ich tun, wenn das Formular nicht validiert wird?
  - : Dies ist eindeutig eine Benutzeroberflächenfrage. Sie müssen entscheiden, wie sich das Formular verhält. Sendet das Formular die Daten trotzdem?
    Sollten Sie die Felder hervorheben, die fehlerhaft sind?
    Sollten Sie Fehlermeldungen anzeigen?
- Wie kann ich dem Benutzer helfen, ungültige Daten zu korrigieren?
  - : Um die Frustration des Benutzers zu reduzieren, ist es sehr wichtig, so viele hilfreiche Informationen wie möglich bereitzustellen, um sie bei der Korrektur ihrer Eingaben zu leiten.
    Sie sollten vorab Vorschläge machen, damit sie wissen, was erwartet wird, sowie klare Fehlermeldungen.
    Wenn Sie sich mit den Anforderungen an Benutzeroberflächen für die Formularvalidierung beschäftigen möchten, sind hier einige nützliche Artikel, die Sie lesen sollten:
    - [Helfen Sie den Benutzern, die richtigen Daten in Formulare einzugeben](https://web.dev/learn/forms/form-fields)
    - [Eingaben validieren](https://www.w3.org/WAI/tutorials/forms/validation/)
    - [Wie man Fehler in Formularen meldet: 10 Design-Richtlinien](https://www.nngroup.com/articles/errors-forms-design-guidelines/)

#### Ein Beispiel, das die Constraint Validierungs-API nicht verwendet

Um dies zu veranschaulichen, folgt hier eine vereinfachte Version des vorherigen Beispiels ohne die Constraint Validierungs-API.

Das HTML ist fast das gleiche; wir haben nur die HTML-Validierungsfunktionen entfernt.

```html
<form>
  <p>
    <label for="mail">
      <span>Please enter an email address:</span>
    </label>
    <input type="text" id="mail" name="mail" />
    <span id="error" aria-live="polite"></span>
  </p>
  <button>Submit</button>
</form>
```

Ebenso muss sich das CSS nicht sehr ändern; wir haben nur die {{cssxref(":invalid")}} CSS-Pseudoklasse in eine echte Klasse umgewandelt und die Attributselektoren vermieden.

```css
body {
  font: 1em sans-serif;
  width: 200px;
  padding: 0;
  margin: 0 auto;
}

form {
  max-width: 200px;
}

p * {
  display: block;
}

input {
  appearance: none;
  width: 100%;
  border: 1px solid #333333;
  margin: 0;

  font-family: inherit;
  font-size: 90%;

  box-sizing: border-box;
}

/* invalid fields */
input.invalid {
  border: 2px solid #990000;
  background-color: #ffdddd;
}

input:focus.invalid {
  outline: none;
  /* make sure keyboard-only users see a change when focusing */
  border-style: dashed;
}

/* error messages */
#error {
  width: 100%;
  font-size: 80%;
  color: white;
  background-color: #990000;
  border-radius: 0 0 5px 5px;
  box-sizing: border-box;
}

.active {
  padding: 0.3rem;
}
```

Die großen Änderungen sind im JavaScript-Code, der viel mehr Arbeit erledigen muss.

```js
const form = document.querySelector("form");
const email = document.getElementById("mail");
const error = document.getElementById("error");

// Regular expression for email validation as per HTML specification
const emailRegExp = /^[\w.!#$%&'*+/=?^`{|}~-]+@[a-z\d-]+(?:\.[a-z\d-]+)*$/i;

// Check if the email is valid
const isValidEmail = () => {
  const validity = email.value.length !== 0 && emailRegExp.test(email.value);
  return validity;
};

// Update email input class based on validity
const setEmailClass = (isValid) => {
  email.className = isValid ? "valid" : "invalid";
};

// Update error message and visibility
const updateError = (isValid) => {
  if (isValid) {
    error.textContent = "";
    error.removeAttribute("class");
  } else {
    error.textContent = "I expect an email, darling!";
    error.setAttribute("class", "active");
  }
};

// Handle input event to update email validity
const handleInput = () => {
  const validity = isValidEmail();
  setEmailClass(validity);
  updateError(validity);
};

// Handle form submission to show error if email is invalid
const handleSubmit = (event) => {
  event.preventDefault();

  const validity = isValidEmail();
  setEmailClass(validity);
  updateError(validity);
};

// Now we can rebuild our validation constraint
// Because we do not rely on CSS pseudo-class, we have to
// explicitly set the valid/invalid class on our email field
const validity = isValidEmail();
setEmailClass(validity);
// This defines what happens when the user types in the field
email.addEventListener("input", handleInput);
// This defines what happens when the user tries to submit the data
form.addEventListener("submit", handleSubmit);
```

Das Ergebnis sieht wie folgt aus:

{{EmbedLiveSample("An_example_that_doesnt_use_the_constraint_validation_API", "100%", 150)}}

Wie Sie sehen, ist es gar nicht so schwer, ein eigenes Validierungssystem zu erstellen. Der schwierige Teil ist es, es generisch genug zu machen, um plattformübergreifend und auf jedem Formular zu verwenden, das Sie erstellen könnten. Es gibt viele Bibliotheken, die zur Formularvalidierung zur Verfügung stehen, wie [Validate.js](https://rickharrison.github.io/validate.js/).

## Zusammenfassung

Die Validierung von Formularen auf der Client-Seite erfordert manchmal JavaScript, wenn Sie die Gestaltung und Fehlermeldungen anpassen möchten, aber es _erfordert immer_, sorgfältig über den Benutzer nachzudenken.
Denken Sie immer daran, Ihren Benutzern zu helfen, die Daten, die sie eingeben, zu korrigieren. Achten Sie darauf, dass Sie:

- Explizite Fehlermeldungen anzeigen.
- Seien Sie nachsichtig mit dem Eingabeformat.
- Zeigen Sie genau an, wo der Fehler auftritt, insbesondere bei großen Formularen.

Sobald Sie überprüft haben, dass das Formular korrekt ausgefüllt ist, kann das Formular gesendet werden.
Wir behandeln als Nächstes das [Senden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data).

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data", "Learn_web_development/Extensions/Forms")}}
