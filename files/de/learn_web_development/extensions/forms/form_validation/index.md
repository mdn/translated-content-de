---
title: Clientseitige Formularvalidierung
slug: Learn_web_development/Extensions/Forms/Form_validation
l10n:
  sourceCommit: 977386fc14a76dec21374aef1e0571900b28dab4
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data", "Learn_web_development/Extensions/Forms")}}

Bevor von Benutzern eingegebene Formulardaten an den Server gesendet werden, muss sichergestellt sein, dass alle erforderlichen Formularsteuerelemente ausgefüllt sind und die Daten das richtige Format haben. Diese **clientseitige Formularvalidierung** hilft sicherzustellen, dass die eingegebenen Daten den Anforderungen der jeweiligen Formularsteuerelemente entsprechen.

Dieser Artikel führt Sie durch die grundlegenden Konzepte der clientseitigen Formularvalidierung und zeigt Beispiele.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende Computerkenntnisse und ein angemessenes Verständnis von
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, was clientseitige Formularvalidierung ist, warum sie wichtig ist
        und wie verschiedene Techniken zu ihrer Umsetzung angewendet werden.
      </td>
    </tr>
  </tbody>
</table>

Die clientseitige Validierung ist eine erste Prüfung und ein wichtiger Bestandteil einer guten Benutzererfahrung: Werden ungültige Daten bereits auf der Clientseite erkannt, können Benutzer sie sofort korrigieren. Werden die Daten erst auf dem Server zurückgewiesen, entsteht durch die Übertragung zum Server und zurück eine spürbare Verzögerung, bevor Benutzer erfahren, dass sie ihre Daten korrigieren müssen.

Clientseitige Validierung _darf jedoch nicht_ als umfassende Sicherheitsmaßnahme betrachtet werden! Ihre Anwendungen sollten **auch serverseitig** sämtliche über Formulare übermittelten Daten validieren und Sicherheitsprüfungen durchführen. Clientseitige Validierung lässt sich zu leicht umgehen, sodass böswillige Benutzer Ihrem Server weiterhin problemlos schädliche Daten senden können.

> [!NOTE]
> Lesen Sie [Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security), um eine Vorstellung davon zu bekommen, was passieren _könnte_. Die Umsetzung serverseitiger Validierung geht etwas über den Rahmen dieses Moduls hinaus, Sie sollten sie aber im Hinterkopf behalten.

## Was ist Formularvalidierung?

Besuchen Sie eine beliebige Website mit einem Registrierungsformular. Wenn Sie Daten nicht im erwarteten Format eingeben, erhalten Sie eine entsprechende Rückmeldung. Beispielsweise könnten folgende Meldungen erscheinen:

- „Dieses Feld ist erforderlich“ (Das Feld darf nicht leer bleiben).
- „Bitte geben Sie Ihre Telefonnummer im Format xxx-xxxx ein“ (Damit die Eingabe gültig ist, muss sie einem bestimmten Format entsprechen).
- „Bitte geben Sie eine gültige E-Mail-Adresse ein“ (Die eingegebenen Daten haben nicht das richtige Format).
- „Ihr Passwort muss zwischen 8 und 30 Zeichen lang sein und einen Großbuchstaben, ein Symbol und eine Ziffer enthalten.“ (Die Daten müssen einem genau festgelegten Format entsprechen).

Dies wird **Formularvalidierung** genannt. Bei der Dateneingabe prüfen der Browser und der Webserver, ob die Daten das richtige Format haben und die von der Anwendung festgelegten Einschränkungen erfüllen. Eine Validierung im Browser heißt **clientseitige** Validierung, eine Validierung auf dem Server **serverseitige** Validierung. In diesem Kapitel konzentrieren wir uns auf die clientseitige Validierung.

Sind die Informationen korrekt formatiert, lässt die Anwendung zu, dass die Daten an den Server gesendet und dort (in der Regel) in einer Datenbank gespeichert werden. Andernfalls erhalten Benutzer eine Fehlermeldung, die erklärt, was korrigiert werden muss, und können es erneut versuchen.

Wir möchten das Ausfüllen von Webformularen so einfach wie möglich machen. Warum bestehen wir also darauf, Formulare zu validieren? Dafür gibt es drei Hauptgründe:

- **Wir möchten die richtigen Daten im richtigen Format erhalten.** Unsere Anwendungen funktionieren nicht ordnungsgemäß, wenn Benutzerdaten im falschen Format gespeichert werden, fehlerhaft sind oder ganz fehlen.
- **Wir möchten die Daten unserer Benutzer schützen.** Wenn Benutzer sichere Passwörter eingeben müssen, lassen sich ihre Kontoinformationen leichter schützen.
- **Wir möchten uns selbst schützen.** Böswillige Benutzer können ungeschützte Formulare auf vielfältige Weise missbrauchen, um einer Anwendung zu schaden. Siehe [Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security).

  > [!WARNING]
  > Vertrauen Sie niemals Daten, die ein Client an Ihren Server sendet. Selbst wenn Ihr Formular clientseitig korrekt validiert und fehlerhafte Eingaben verhindert, können böswillige Benutzer die Netzwerkanfrage verändern.

## Verschiedene Arten der clientseitigen Validierung

Im Web begegnen Ihnen zwei Arten der clientseitigen Validierung:

- **HTML-Formularvalidierung**
  HTML-Attribute können festlegen, welche Formularsteuerelemente erforderlich sind und welches Format die eingegebenen Daten haben müssen, damit sie gültig sind.
- **JavaScript-Formularvalidierung**
  JavaScript wird üblicherweise eingesetzt, um die HTML-Formularvalidierung zu erweitern oder anzupassen.

Clientseitige Validierung lässt sich mit wenig oder ganz ohne JavaScript umsetzen. HTML-Validierung ist schneller als JavaScript-Validierung, lässt sich aber weniger flexibel anpassen. Im Allgemeinen empfiehlt es sich, Formulare zunächst mit den zuverlässigen Funktionen von HTML zu erstellen und die Benutzererfahrung bei Bedarf mit JavaScript zu verbessern.

## Integrierte Formularvalidierung verwenden

Eine der wichtigsten Eigenschaften von [Formularsteuerelementen](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types) ist, dass sich die meisten Benutzereingaben ohne JavaScript validieren lassen. Dazu werden Validierungsattribute auf Formularelementen verwendet. Viele davon haben Sie im Verlauf dieses Kurses bereits kennengelernt. Zur Erinnerung:

- [`required`](/de/docs/Web/HTML/Reference/Attributes/required): Legt fest, ob ein Formularfeld ausgefüllt werden muss, bevor das Formular gesendet werden kann.
- [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength) und [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength): Legen die minimale und maximale Länge von Textdaten (Zeichenfolgen) fest.
- [`min`](/de/docs/Web/HTML/Reference/Attributes/min), [`max`](/de/docs/Web/HTML/Reference/Attributes/max) und [`step`](/de/docs/Web/HTML/Reference/Attributes/step): Legen die minimalen und maximalen Werte für numerische Eingabetypen sowie die Schrittweite der Werte, ausgehend vom Minimum, fest.
- [`type`](/de/docs/Web/HTML/Reference/Elements/input#input_types): Legt fest, ob die Daten beispielsweise eine Zahl, eine E-Mail-Adresse oder einen anderen vordefinierten Typ haben müssen.
- [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern): Legt einen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) fest, dessen Muster die eingegebenen Daten entsprechen müssen.

Erfüllen die in ein Formularfeld eingegebenen Daten alle Regeln der darauf angewendeten Attribute, gelten sie als gültig. Andernfalls gelten sie als ungültig.

Wenn ein Element gültig ist, gilt Folgendes:

- Das Element entspricht der CSS-Pseudoklasse {{cssxref(":valid")}}, mit der Sie gültigen Elementen einen bestimmten Stil zuweisen können. Wenn Benutzer mit dem Steuerelement interagiert haben, entspricht es auch {{cssxref(":user-valid")}}. Abhängig vom Eingabetyp und den Attributen kann es weiteren UI-Pseudoklassen wie {{cssxref(":in-range")}} entsprechen.
- Wenn Benutzer versuchen, die Daten zu senden, sendet der Browser das Formular ab, sofern nichts anderes – beispielsweise JavaScript – dies verhindert.

Wenn ein Element ungültig ist, gilt Folgendes:

- Das Element entspricht der CSS-Pseudoklasse {{cssxref(":invalid")}}. Wenn Benutzer mit dem Steuerelement interagiert haben, entspricht es auch der CSS-Pseudoklasse {{cssxref(":user-invalid")}}. Abhängig vom Fehler können weitere UI-Pseudoklassen wie {{cssxref(":out-of-range")}} zutreffen. Damit können Sie ungültigen Elementen einen bestimmten Stil zuweisen.
- Wenn Benutzer versuchen, die Daten zu senden, verhindert der Browser das Absenden des Formulars und zeigt eine Fehlermeldung an. Welche Meldung erscheint, hängt von der Art des Fehlers ab. Die [Constraint Validation API](#die_constraint_validation_api) wird weiter unten beschrieben.

## Beispiele für integrierte Formularvalidierung

In diesem Abschnitt probieren wir einige der oben besprochenen Attribute aus.

### Einfache Ausgangsdatei

Beginnen wir mit einem einfachen Beispiel: einer Eingabe, mit der Sie auswählen können, ob Sie Bananen oder Kirschen bevorzugen. Das Beispiel enthält ein Text-{{HTMLElement("input")}} mit zugehörigem {{htmlelement("label")}} und einem {{htmlelement("button")}} zum Absenden.

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

Erstellen Sie zunächst eine Kopie des vorstehenden HTML-Codes in einer neuen Datei namens `index.html`. Speichern Sie diese in einem neuen Verzeichnis auf Ihrer Festplatte.

### Das Attribut required

Ein häufig verwendetes HTML-Validierungsattribut ist [`required`](/de/docs/Web/HTML/Reference/Attributes/required). Fügen Sie es einer Eingabe hinzu, um sie zu einem Pflichtfeld zu machen. Ist dieses Attribut gesetzt, entspricht das Element der UI-Pseudoklasse {{cssxref(':required')}}. Bleibt die Eingabe leer, kann das Formular nicht abgesendet werden und beim Absendeversuch erscheint eine Fehlermeldung. Solange die Eingabe leer ist, gilt sie außerdem als ungültig und entspricht der UI-Pseudoklasse {{cssxref(':invalid')}}.

Wenn ein beliebiger Radio-Button innerhalb einer Gruppe mit gleichem Namen das Attribut `required` hat, muss einer der Radio-Buttons dieser Gruppe ausgewählt sein, damit die Gruppe gültig ist. Es muss nicht der Radio-Button sein, auf dem das Attribut gesetzt ist.

> [!NOTE]
> Verlangen Sie nur Daten, die Sie tatsächlich benötigen. Ist es beispielsweise wirklich notwendig, das Geschlecht oder die Anrede einer Person zu kennen?

Fügen Sie Ihrer Eingabe wie unten gezeigt ein `required`-Attribut hinzu.

```html live-sample___the-required-attribute
<form>
  <label for="choose">Would you prefer a banana or cherry? *</label>
  <input id="choose" name="i-like" required />
  <button>Submit</button>
</form>
```

> [!NOTE]
> Häufig wird hinter den Beschriftungen erforderlicher Formularsteuerelemente ein Sternchen (oder eine andere Markierung) gesetzt, damit sie für sehende Benutzer erkennbar sind. Benutzer darauf hinzuweisen, welche Formularfelder erforderlich sind, verbessert nicht nur die Benutzererfahrung, sondern ist auch nach den WCAG-Richtlinien zur [Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility) erforderlich.

Wir fügen CSS-Stile hinzu, die abhängig davon angewendet werden, ob das Element erforderlich, gültig oder ungültig ist:

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

```js hidden live-sample___simple-start-file live-sample___the-required-attribute live-sample___validate-regular-expression live-sample___constraining-values live-sample___full-example live-sample___extending-built-in-form-validation
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
```

Durch dieses CSS erhält die Eingabe einen rot gestrichelten Rahmen, wenn sie ungültig ist, und einen dezenteren, durchgezogenen schwarzen Rahmen, wenn sie gültig ist. Außerdem haben wir einen Hintergrundverlauf hinzugefügt, der erscheint, wenn die Eingabe _sowohl_ erforderlich _als auch_ ungültig ist. Probieren Sie das neue Verhalten im folgenden Beispiel aus:

{{EmbedLiveSample("the-required-attribute", "100%", 80, , , , , "allow-forms")}}

Versuchen Sie, das Formular ohne Wert abzusenden. Beachten Sie, dass die ungültige Eingabe den Fokus erhält und eine Standardfehlermeldung („Bitte füllen Sie dieses Feld aus“) erscheint. Das Absenden des Formulars wird ebenfalls verhindert. Beachten Sie allerdings, dass wir auch bei eingegebenem Wert das Absenden unterbinden, um einen Fehler bei der Verarbeitung eingebetteter Formulare durch MDN zu vermeiden.

### Validierung anhand eines regulären Ausdrucks

Ein weiteres nützliches Validierungsattribut ist [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern), dessen Wert ein [regulärer Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) sein muss. Ein regulärer Ausdruck (Regexp) ist ein Muster, mit dem sich Zeichenkombinationen in Zeichenfolgen abgleichen lassen. Reguläre Ausdrücke eignen sich daher gut für die Formularvalidierung und haben zahlreiche weitere Einsatzmöglichkeiten in JavaScript.

Reguläre Ausdrücke sind recht komplex; dieser Artikel soll sie nicht umfassend erklären. Die folgenden Beispiele vermitteln Ihnen eine grundlegende Vorstellung ihrer Funktionsweise.

- `a` — Entspricht genau einem Zeichen `a` (nicht `b`, nicht `aa` usw.).
- `abc` — Entspricht `a`, gefolgt von `b`, gefolgt von `c`.
- `ab?c` — Entspricht `a`, optional gefolgt von einem einzelnen `b`, gefolgt von `c` (`ac` oder `abc`).
- `ab*c` — Entspricht `a`, optional gefolgt von beliebig vielen `b`, gefolgt von `c` (`ac`, `abc`, `abbbbbc` usw.).
- `a|b` — Entspricht einem Zeichen, das entweder `a` oder `b` ist.
- `abc|xyz` — Entspricht genau `abc` oder genau `xyz` (aber nicht `abcxyz`, `a` oder `y` usw.).

Es gibt viele weitere Möglichkeiten, auf die wir hier nicht eingehen. Eine vollständige Übersicht und zahlreiche Beispiele finden Sie in unserer Dokumentation zu [regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions).

Setzen wir ein Beispiel um. Ergänzen Sie Ihr HTML um ein [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)-Attribut:

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

Das Ergebnis sieht wie folgt aus – probieren Sie es aus:

{{EmbedLiveSample("validate-regular-expression", "100%", 80, , , , , "allow-forms")}}

Sie können auch auf die Schaltfläche **Play** klicken, um das Beispiel im MDN Playground zu öffnen und dort den Quellcode zu bearbeiten.

In diesem Beispiel akzeptiert das {{HTMLElement("input")}}-Element einen von vier möglichen Werten: die Zeichenfolgen „banana“, „Banana“, „cherry“ oder „Cherry“. Reguläre Ausdrücke unterscheiden zwischen Groß- und Kleinschreibung. Durch ein zusätzliches „Aa“-Muster in eckigen Klammern unterstützen wir hier sowohl groß- als auch kleingeschriebene Varianten.

Ändern Sie nun den Wert des [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)-Attributs so, dass er einigen der zuvor gezeigten Beispiele entspricht. Beobachten Sie, wie sich dadurch verändert, welche Werte Sie eingeben können, damit die Eingabe gültig ist. Versuchen Sie auch, eigene Muster zu schreiben. Beziehen Sie sie nach Möglichkeit auf Obst, damit Ihre Beispiele sinnvoll bleiben!

Wenn ein nicht leerer Wert des {{HTMLElement("input")}} nicht dem Muster des regulären Ausdrucks entspricht, entspricht `input` der Pseudoklasse {{cssxref(':invalid')}}. Ist das Feld leer und nicht erforderlich, gilt es nicht als ungültig.

Einige Typen des {{HTMLElement("input")}}-Elements benötigen kein [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern)-Attribut, um anhand eines regulären Ausdrucks validiert zu werden. Wird beispielsweise der Typ `email` angegeben, wird der Eingabewert anhand eines Musters für eine korrekt formatierte E-Mail-Adresse geprüft. Ist zusätzlich das Attribut [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple) vorhanden, wird auch eine durch Kommas getrennte Liste von E-Mail-Adressen akzeptiert.

> [!NOTE]
> Das {{HTMLElement("textarea")}}-Element unterstützt das Attribut [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern) nicht.

### Länge von Eingaben begrenzen

Mit den Attributen [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength) und [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength) können Sie die Zeichenanzahl aller mit {{HTMLElement("input")}} oder {{HTMLElement("textarea")}} erstellten Textfelder begrenzen. Ein Feld ist ungültig, wenn es einen Wert enthält und dieser weniger Zeichen als der Wert von [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength) oder mehr Zeichen als der Wert von [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength) hat.

Browser lassen Benutzer häufig keine längeren Werte als vorgesehen in Textfelder eingeben. Eine bessere Benutzererfahrung als die alleinige Verwendung von `maxlength` bietet eine barrierefrei zugängliche Anzeige der Zeichenanzahl, bei der Benutzer ihren Inhalt selbst auf die zulässige Länge kürzen können. Ein Beispiel dafür sind Zeichenbegrenzungen für Beiträge in sozialen Medien. Dies lässt sich mit JavaScript umsetzen, auch mithilfe von [Lösungen, die `maxlength` verwenden](https://github.com/mimo84/bootstrap-maxlength).

> [!NOTE]
> Verstöße gegen Längenbeschränkungen werden nicht gemeldet, wenn der Wert programmatisch gesetzt wird. Sie werden nur bei Eingaben durch Benutzer gemeldet.

### Werte von Eingaben begrenzen

Für numerische Felder, darunter [`<input type="number">`](/de/docs/Web/HTML/Reference/Elements/input/number) und die verschiedenen Datumseingabetypen, können Sie mit den Attributen [`min`](/de/docs/Web/HTML/Reference/Attributes/min) und [`max`](/de/docs/Web/HTML/Reference/Attributes/max) einen Bereich gültiger Werte festlegen. Enthält das Feld einen Wert außerhalb dieses Bereichs, ist es ungültig.

Betrachten wir ein weiteres Beispiel. Erstellen Sie eine neue Kopie der [einfachen Ausgangsdatei](#einfache_ausgangsdatei) und speichern Sie sie im selben Verzeichnis unter dem Namen `index2.html`.

Löschen Sie nun den Inhalt des `<body>`-Elements und ersetzen Sie ihn durch Folgendes:

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

- Das `text`-Feld hat einen `minlength`- und einen `maxlength`-Wert von jeweils sechs. Das entspricht der Länge von „banana“ und „cherry“.
- Für das `number`-Feld haben wir `min` auf eins und `max` auf zehn gesetzt.
  Eingegebene Zahlen außerhalb dieses Bereichs werden als ungültig angezeigt. Mit den Pfeilen zum Erhöhen und Verringern lässt sich der Wert nicht außerhalb des Bereichs verschieben.
  Gibt ein Benutzer manuell eine Zahl außerhalb dieses Bereichs ein, sind die Daten ungültig.
  Die Zahl ist nicht erforderlich. Wird der Wert entfernt, ist das Feld daher gültig.

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

Hier sehen Sie das Beispiel in Aktion:

{{EmbedLiveSample("constraining-values", "100%", 100)}}

Sie können auch auf die Schaltfläche **Play** klicken, um das Beispiel im MDN Playground zu öffnen und dort den Quellcode zu bearbeiten.

Numerische Eingabetypen wie `number`, `range` und `date` können auch das Attribut [`step`](/de/docs/Web/HTML/Reference/Attributes/step) verwenden. Es legt fest, um welchen Schrittwert sich der Wert erhöht oder verringert, wenn die Eingabesteuerelemente verwendet werden, etwa die Pfeile eines Zahlenfelds oder der Schieberegler einer Bereichseingabe. In unserem Beispiel fehlt das Attribut `step`, sodass standardmäßig der Wert `1` gilt. Fließkommazahlen wie 3.2 werden daher ebenfalls als ungültig angezeigt.

### Vollständiges Beispiel

Das folgende vollständige Beispiel zeigt, wie die integrierten Validierungsfunktionen von HTML verwendet werden. Zunächst das HTML:

```html live-sample___full-example
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

Und nun etwas CSS zur Gestaltung des HTML:

```css live-sample___full-example
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

Das Ergebnis sieht so aus:

{{EmbedLiveSample("full-example", "100%", 480)}}

Sie können auch auf die Schaltfläche **Play** klicken, um das Beispiel im MDN Playground zu öffnen und dort den Quellcode zu bearbeiten.

Unter [Validierungsbezogene Attribute](/de/docs/Web/HTML/Guides/Constraint_validation#validation-related_attributes) finden Sie eine vollständige Liste der Attribute, mit denen Eingabewerte eingeschränkt werden können, sowie der Eingabetypen, die sie unterstützen.

## Formulare mit JavaScript validieren

Wenn Sie den Text der standardmäßigen Fehlermeldungen ändern möchten, benötigen Sie JavaScript. In diesem Abschnitt betrachten wir die verschiedenen Möglichkeiten dafür.

### Die Constraint Validation API

Die Constraint Validation API umfasst Methoden und Eigenschaften, die auf den folgenden DOM-Schnittstellen für Formularelemente verfügbar sind:

- [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement) (repräsentiert ein [`<button>`](/de/docs/Web/HTML/Reference/Elements/button)-Element)
- [`HTMLFieldSetElement`](/de/docs/Web/API/HTMLFieldSetElement) (repräsentiert ein [`<fieldset>`](/de/docs/Web/HTML/Reference/Elements/fieldset)-Element)
- [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) (repräsentiert ein [`<input>`](/de/docs/Web/HTML/Reference/Elements/input)-Element)
- [`HTMLOutputElement`](/de/docs/Web/API/HTMLOutputElement) (repräsentiert ein [`<output>`](/de/docs/Web/HTML/Reference/Elements/output)-Element)
- [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement) (repräsentiert ein [`<select>`](/de/docs/Web/HTML/Reference/Elements/select)-Element)
- [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement) (repräsentiert ein [`<textarea>`](/de/docs/Web/HTML/Reference/Elements/textarea)-Element)

Die Constraint Validation API stellt auf diesen Elementen folgende Eigenschaften bereit:

- `validationMessage`: Gibt eine lokalisierte Meldung zurück, die beschreibt, welche Validierungsanforderungen das Steuerelement gegebenenfalls nicht erfüllt. Ist das Steuerelement kein Kandidat für die Validierung (`willValidate` ist `false`) oder erfüllt der Wert des Elements alle Anforderungen (ist also gültig), wird eine leere Zeichenfolge zurückgegeben.
- `validity`: Gibt ein `ValidityState`-Objekt mit mehreren Eigenschaften zurück, die den Gültigkeitszustand des Elements beschreiben. Einzelheiten zu allen verfügbaren Eigenschaften finden Sie auf der Referenzseite zu [`ValidityState`](/de/docs/Web/API/ValidityState). Einige der gebräuchlichsten sind:
  - [`patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch): Gibt `true` zurück, wenn der Wert nicht dem angegebenen [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern) entspricht, andernfalls `false`. Bei `true` entspricht das Element der CSS-Pseudoklasse {{cssxref(":invalid")}}.
  - [`tooLong`](/de/docs/Web/API/ValidityState/tooLong): Gibt `true` zurück, wenn der Wert länger ist als die mit dem Attribut [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength) festgelegte Höchstlänge, andernfalls `false`. Bei `true` entspricht das Element der CSS-Pseudoklasse {{cssxref(":invalid")}}.
  - [`tooShort`](/de/docs/Web/API/ValidityState/tooShort): Gibt `true` zurück, wenn der Wert kürzer ist als die mit dem Attribut [`minlength`](/de/docs/Web/HTML/Reference/Elements/input#minlength) festgelegte Mindestlänge, andernfalls `false`. Bei `true` entspricht das Element der CSS-Pseudoklasse {{cssxref(":invalid")}}.
  - [`rangeOverflow`](/de/docs/Web/API/ValidityState/rangeOverflow): Gibt `true` zurück, wenn der Wert größer ist als das mit dem Attribut [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) festgelegte Maximum, andernfalls `false`. Bei `true` entspricht das Element den CSS-Pseudoklassen {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}}.
  - [`rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow): Gibt `true` zurück, wenn der Wert kleiner ist als das mit dem Attribut [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) festgelegte Minimum, andernfalls `false`. Bei `true` entspricht das Element den CSS-Pseudoklassen {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}}.
  - [`typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch): Gibt `true` zurück, wenn der Wert nicht der erforderlichen Syntax entspricht (wenn [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) `email` oder `url` ist), andernfalls `false`. Bei `true` entspricht das Element der CSS-Pseudoklasse {{cssxref(":invalid")}}.
  - `valid`: Gibt `true` zurück, wenn das Element alle Validierungsanforderungen erfüllt und somit gültig ist, andernfalls `false`. Bei `true` entspricht das Element der CSS-Pseudoklasse {{cssxref(":valid")}}, andernfalls {{cssxref(":invalid")}}.
  - `valueMissing`: Gibt `true` zurück, wenn das Element ein [`required`](/de/docs/Web/HTML/Reference/Elements/input#required)-Attribut, aber keinen Wert hat, andernfalls `false`. Bei `true` entspricht das Element der CSS-Pseudoklasse {{cssxref(":invalid")}}.
- `willValidate`: Gibt `true` zurück, wenn das Element beim Absenden des Formulars validiert wird, andernfalls `false`.

Die Constraint Validation API stellt außerdem die folgenden Methoden auf den oben genannten Elementen und dem [`form`](/de/docs/Web/HTML/Reference/Elements/form)-Element bereit:

- `checkValidity()`: Gibt `true` zurück, wenn der Wert des Elements gültig ist, andernfalls `false`. Ist das Element ungültig, löst diese Methode außerdem ein [`invalid`-Ereignis](/de/docs/Web/API/HTMLInputElement/invalid_event) auf dem Element aus.
- `reportValidity()`: Meldet ungültige Felder mithilfe von Ereignissen. Diese Methode ist in Verbindung mit `preventDefault()` in einem `onSubmit`-Event-Handler nützlich.
- `setCustomValidity(message)`: Fügt dem Element eine benutzerdefinierte Fehlermeldung hinzu. Wird eine solche Meldung gesetzt, gilt das Element als ungültig und der angegebene Fehler wird angezeigt. So können Sie mit JavaScript einen Validierungsfehler festlegen, der über die standardmäßigen HTML-Validierungsanforderungen hinausgeht. Die Meldung wird Benutzern angezeigt, wenn der Fehler gemeldet wird.

#### Eine benutzerdefinierte Fehlermeldung umsetzen

Wie Sie in den vorherigen Beispielen zu HTML-Validierungsanforderungen gesehen haben, zeigt der Browser jedes Mal eine Fehlermeldung an, wenn Benutzer versuchen, ein ungültiges Formular abzusenden. Wie die Meldung dargestellt wird, hängt vom Browser ab.

Diese automatisch erzeugten Meldungen haben zwei Nachteile:

- Es gibt keine standardisierte Möglichkeit, ihr Erscheinungsbild mit CSS zu ändern.
- Sie hängen von der Spracheinstellung des Browsers ab. Deshalb kann eine Seite in einer Sprache angezeigt werden, während die Fehlermeldung in einer anderen Sprache erscheint, wie der folgende Firefox-Screenshot zeigt.

![Beispiel einer französischen Firefox-Fehlermeldung auf einer englischsprachigen Seite](error-firefox-win7.png)

Das Anpassen dieser Fehlermeldungen ist einer der häufigsten Anwendungsfälle der Constraint Validation API. Sehen wir uns anhand eines Beispiels an, wie das funktioniert.

Wir beginnen mit etwas HTML. Wenn Sie möchten, können Sie es in eine weitere Kopie der [einfachen Ausgangsdatei](#einfache_ausgangsdatei) einfügen:

```html
<form>
  <label for="mail">
    I would like you to provide me with an email address:
  </label>
  <input type="email" id="mail" name="mail" />
  <button>Submit</button>
</form>
```

Fügen Sie der Seite das folgende JavaScript hinzu:

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

Hier speichern wir zunächst eine Referenz auf die E-Mail-Eingabe. Anschließend fügen wir ihr einen Event-Listener hinzu, der den enthaltenen Code jedes Mal ausführt, wenn sich der Eingabewert ändert.

Im Code prüfen wir, ob die Eigenschaft `validity.typeMismatch` der E-Mail-Eingabe `true` zurückgibt. Das bedeutet, dass der enthaltene Wert nicht dem Muster einer korrekt formatierten E-Mail-Adresse entspricht. In diesem Fall rufen wir die Methode [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity) mit einer benutzerdefinierten Meldung auf. Dadurch wird die Eingabe ungültig: Beim Versuch, das Formular abzusenden, schlägt das Absenden fehl und die benutzerdefinierte Fehlermeldung wird angezeigt.

Gibt `validity.typeMismatch` dagegen `false` zurück, rufen wir `setCustomValidity()` mit einer leeren Zeichenfolge auf. Dadurch wird die Eingabe gültig und das Formular kann abgesendet werden. Hat während der Validierung ein Formularsteuerelement einen `customError`, der keine leere Zeichenfolge ist, wird das Absenden des Formulars verhindert.

Sie können es unten ausprobieren. Klicken Sie auf die Schaltfläche **Play**, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten:

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

#### Integrierte Formularvalidierung erweitern

Das vorherige Beispiel hat gezeigt, wie Sie eine benutzerdefinierte Meldung für einen bestimmten Fehlertyp (`validity.typeMismatch`) hinzufügen können. Sie können aber auch die gesamte integrierte Formularvalidierung nutzen und sie mit `setCustomValidity()` ergänzen.

Hier zeigen wir, wie sich die integrierte Validierung von [`<input type="email">`](/de/docs/Web/HTML/Reference/Elements/input/email) so erweitern lässt, dass nur Adressen mit der Domain `@example.com` akzeptiert werden. Wir beginnen mit dem folgenden HTML-{{htmlelement("form")}}:

```html live-sample___extending-built-in-form-validation
<form>
  <label for="mail">Email address (@example.com only):</label>
  <input type="email" id="mail" />
  <button>Submit</button>
</form>
```

Der Validierungscode ist unten dargestellt. Bei jeder neuen Eingabe setzt er zunächst die benutzerdefinierte Gültigkeitsmeldung durch einen Aufruf von `setCustomValidity("")` zurück. Anschließend prüft er mit `email.validity.valid`, ob die eingegebene Adresse ungültig ist. Falls ja, beendet er den Event-Handler. Dadurch greifen alle üblichen integrierten Validierungsprüfungen, solange der eingegebene Text keine gültige E-Mail-Adresse ist.

Sobald die E-Mail-Adresse gültig ist, fügt der Code eine benutzerdefinierte Einschränkung hinzu: Endet die Adresse nicht auf `@example.com`, ruft er `setCustomValidity()` mit einer Fehlermeldung auf.

```js live-sample___extending-built-in-form-validation
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

Versuchen Sie, eine ungültige E-Mail-Adresse, eine gültige E-Mail-Adresse ohne die Endung `@example.com` und eine gültige Adresse mit dieser Endung abzusenden.

{{EmbedLiveSample("extending-built-in-form-validation", "", 200, , , , , "allow-forms")}}

#### Ein ausführlicheres Beispiel

Nachdem wir ein sehr einfaches Beispiel betrachtet haben, sehen wir uns nun an, wie sich mit dieser API eine etwas komplexere benutzerdefinierte Validierung erstellen lässt.

Zuerst das HTML. Sie können das Beispiel gern Schritt für Schritt nachvollziehen:

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

Dieses Formular verwendet das Attribut [`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate), um die automatische Validierung des Browsers auszuschalten. Wird `novalidate` auf dem Formular gesetzt, zeigt es keine eigenen Fehlermeldungs-Pop-ups an. Stattdessen können wir benutzerdefinierte Fehlermeldungen auf eine von uns gewählte Weise im DOM anzeigen. Die Constraint Validation API und die Anwendung von CSS-Pseudoklassen wie {{cssxref(":valid")}} bleiben jedoch verfügbar. Obwohl der Browser die Gültigkeit des Formulars vor dem Senden der Daten nicht automatisch prüft, können Sie die Prüfung also selbst durchführen und das Formular entsprechend gestalten.

Die zu validierende Eingabe ist ein [`<input type="email">`](/de/docs/Web/HTML/Reference/Elements/input/email), das `required` ist und dessen `minlength` acht Zeichen beträgt. Wir prüfen diese Anforderungen mit eigenem Code und zeigen für jeden Fehler eine benutzerdefinierte Meldung an.

Die Fehlermeldungen sollen innerhalb eines `<span>`-Elements erscheinen. Auf diesem `<span>` ist das Attribut [`aria-live`](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) gesetzt, damit unsere benutzerdefinierte Fehlermeldung allen zugänglich ist und auch Benutzern von Screenreadern vorgelesen wird.

Nun fügen wir etwas einfaches CSS hinzu, um das Erscheinungsbild des Formulars zu verbessern und bei ungültigen Eingabedaten eine visuelle Rückmeldung zu geben:

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

Sehen wir uns jetzt das JavaScript für die benutzerdefinierte Fehlervalidierung an. Es gibt viele Möglichkeiten, einen DOM-Knoten auszuwählen. Hier greifen wir auf das Formular selbst, das E-Mail-Eingabefeld und das span-Element zu, in dem die Fehlermeldung erscheinen soll.

Mithilfe von Event-Handlern prüfen wir bei jeder Eingabe, ob die Formularfelder gültig sind. Liegt ein Fehler vor, zeigen wir ihn an; andernfalls entfernen wir eine eventuell vorhandene Fehlermeldung.

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

Jedes Mal, wenn sich der Eingabewert ändert, prüfen wir, ob er gültige Daten enthält. Wenn ja, entfernen wir eine angezeigte Fehlermeldung. Sind die Daten ungültig, rufen wir `showError()` auf, um den entsprechenden Fehler anzuzeigen.

Bei jedem Versuch, das Formular abzusenden, prüfen wir erneut, ob die Daten gültig sind. Falls ja, lassen wir das Formular absenden. Andernfalls rufen wir `showError()` auf, um den entsprechenden Fehler anzuzeigen, und verhindern das Absenden mit [`preventDefault()`](/de/docs/Web/API/Event/preventDefault).

Die Funktion `showError()` verwendet verschiedene Eigenschaften des `validity`-Objekts der Eingabe, um den Fehler zu ermitteln und eine passende Fehlermeldung anzuzeigen.

Hier sehen Sie das Ergebnis. Klicken Sie auf die Schaltfläche **Play**, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten:

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

Die Constraint Validation API ist ein leistungsfähiges Werkzeug für die Formularvalidierung. Sie gibt Ihnen weit mehr Kontrolle über die Benutzeroberfläche, als allein mit HTML und CSS möglich ist.

### Formulare ohne integrierte API validieren

In manchen Fällen, etwa bei [benutzerdefinierten Steuerelementen](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls), können oder möchten Sie die Constraint Validation API nicht verwenden. Sie können Ihr Formular trotzdem mit JavaScript validieren, müssen den dafür benötigten Code aber selbst schreiben.

Stellen Sie sich bei der Validierung eines Formulars einige Fragen:

- Welche Art von Validierung soll ich durchführen?
  - : Sie müssen entscheiden, wie Ihre Daten validiert werden sollen: durch Zeichenfolgenoperationen, Typumwandlung, reguläre Ausdrücke und so weiter. Die Entscheidung liegt bei Ihnen.
- Was soll passieren, wenn das Formular ungültig ist?
  - : Das betrifft die Benutzeroberfläche. Sie müssen entscheiden, wie sich das Formular verhalten soll. Soll es die Daten trotzdem senden?
    Sollen fehlerhafte Felder hervorgehoben werden?
    Sollen Fehlermeldungen angezeigt werden?
- Wie kann ich Benutzern helfen, ungültige Daten zu korrigieren?
  - : Um Frustration zu vermeiden, ist es sehr wichtig, möglichst viele hilfreiche Informationen zur Korrektur der Eingaben bereitzustellen. Geben Sie frühzeitig Hinweise darauf, was erwartet wird, und zeigen Sie klare Fehlermeldungen an. Wenn Sie sich näher mit den Anforderungen an die Benutzeroberfläche bei der Formularvalidierung befassen möchten, lesen Sie diese hilfreichen Artikel:
    - [Benutzern helfen, die richtigen Daten in Formulare einzugeben](https://web.dev/learn/forms/form-fields)
    - [Eingaben validieren](https://www.w3.org/WAI/tutorials/forms/validation/)
    - [Fehler in Formularen melden: 10 Gestaltungsrichtlinien](https://www.nngroup.com/articles/errors-forms-design-guidelines/)

#### Ein Beispiel ohne die Constraint Validation API

Zur Veranschaulichung folgt eine vereinfachte Version des vorherigen Beispiels ohne die Constraint Validation API.

Das HTML ist fast gleich; wir haben lediglich die HTML-Validierungsfunktionen entfernt.

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

Auch das CSS muss kaum geändert werden: Wir haben die CSS-Pseudoklasse {{cssxref(":invalid")}} durch eine gewöhnliche Klasse ersetzt und auf den Attributselektor verzichtet.

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

Die größten Änderungen betreffen den JavaScript-Code, der nun deutlich mehr Arbeit übernehmen muss.

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

Das Ergebnis sieht so aus:

{{EmbedLiveSample("An_example_that_doesnt_use_the_constraint_validation_API", "100%", 150)}}

Wie Sie sehen, ist es nicht besonders schwer, selbst ein Validierungssystem zu erstellen. Die Schwierigkeit besteht darin, es so allgemein zu gestalten, dass es plattformübergreifend und mit jedem von Ihnen erstellten Formular funktioniert. Für die Formularvalidierung stehen zahlreiche Bibliotheken zur Verfügung, beispielsweise [Validate.js](https://rickharrison.github.io/validate.js/).

## Zusammenfassung

Für die clientseitige Formularvalidierung ist mitunter JavaScript nötig, wenn Sie die Gestaltung und Fehlermeldungen anpassen möchten. Sie erfordert aber _immer_, die Bedürfnisse der Benutzer sorgfältig zu berücksichtigen. Denken Sie stets daran, Benutzern bei der Korrektur ihrer Daten zu helfen. Achten Sie dazu auf Folgendes:

- Zeigen Sie eindeutige Fehlermeldungen an.
- Akzeptieren Sie möglichst flexible Eingabeformate.
- Zeigen Sie genau an, wo ein Fehler auftritt – besonders bei umfangreichen Formularen.

Nachdem Sie geprüft haben, dass das Formular korrekt ausgefüllt ist, kann es abgesendet werden. Als Nächstes befassen wir uns mit dem [Senden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data).

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data", "Learn_web_development/Extensions/Forms")}}
