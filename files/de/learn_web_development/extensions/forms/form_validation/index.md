---
title: Clientseitige Formularvalidierung
slug: Learn_web_development/Extensions/Forms/Form_validation
l10n:
  sourceCommit: bfead5c281d92a213f0191746fd98a6bdc4dc457
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data", "Learn_web_development/Extensions/Forms")}}

Bevor von Benutzern eingegebene Formulardaten an den Server gesendet werden, muss sichergestellt sein, dass alle erforderlichen Formularsteuerelemente ausgefüllt sind und die Daten das richtige Format haben. Diese **clientseitige Formularvalidierung** hilft dabei, sicherzustellen, dass die eingegebenen Daten den Anforderungen der jeweiligen Formularsteuerelemente entsprechen.

Dieser Artikel führt Sie anhand grundlegender Konzepte und Beispiele durch die clientseitige Formularvalidierung.

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
        und wie sich verschiedene Techniken zu ihrer Umsetzung einsetzen lassen.
      </td>
    </tr>
  </tbody>
</table>

Die clientseitige Validierung ist eine erste Überprüfung und ein wichtiger Bestandteil einer guten Benutzererfahrung: Werden ungültige Daten bereits auf der Clientseite erkannt, können Benutzer sie sofort korrigieren.
Werden die Daten erst auf dem Server zurückgewiesen, entsteht durch die Übertragung zum Server und zurück zur Clientseite eine spürbare Verzögerung, bevor Benutzer erfahren, dass sie ihre Angaben korrigieren müssen.

Die clientseitige Validierung sollte jedoch _nicht_ als umfassende Sicherheitsmaßnahme betrachtet werden! Ihre Anwendungen sollten **auch serverseitig** alle über Formulare übermittelten Daten validieren und Sicherheitsprüfungen durchführen. Die clientseitige Validierung lässt sich zu leicht umgehen, sodass böswillige Benutzer weiterhin problemlos schädliche Daten an Ihren Server senden können.

> [!NOTE]
> Lesen Sie [Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security), um eine Vorstellung davon zu bekommen, was passieren _könnte_. Die Implementierung der serverseitigen Validierung geht über den Rahmen dieses Moduls hinaus, Sie sollten sie aber im Hinterkopf behalten.

## Was ist Formularvalidierung?

Besuchen Sie eine beliebige Website mit einem Registrierungsformular. Wenn Sie Daten nicht im erwarteten Format eingeben, erhalten Sie eine Rückmeldung.
Beispielsweise erscheinen Meldungen wie:

- „Dieses Feld ist erforderlich“ (Sie dürfen das Feld nicht leer lassen).
- „Bitte geben Sie Ihre Telefonnummer im Format xxx-xxxx ein“ (Die Daten müssen ein bestimmtes Format haben, um als gültig zu gelten).
- „Bitte geben Sie eine gültige E-Mail-Adresse ein“ (Die eingegebenen Daten haben nicht das richtige Format).
- „Ihr Passwort muss zwischen 8 und 30 Zeichen lang sein und einen Großbuchstaben, ein Symbol und eine Zahl enthalten.“ (Die Daten müssen sehr konkrete Formatanforderungen erfüllen).

Dies wird **Formularvalidierung** genannt.
Wenn Sie Daten eingeben, prüfen der Browser (und der Webserver), ob sie das richtige Format haben und die von der Anwendung festgelegten Bedingungen erfüllen. Die Validierung im Browser heißt **clientseitige** Validierung, die Validierung auf dem Server **serverseitige** Validierung.
In diesem Kapitel konzentrieren wir uns auf die clientseitige Validierung.

Sind die Angaben korrekt formatiert, lässt die Anwendung zu, dass die Daten an den Server gesendet und (in der Regel) in einer Datenbank gespeichert werden. Andernfalls zeigt sie eine Fehlermeldung an, die erklärt, was korrigiert werden muss, und ermöglicht einen erneuten Versuch.

Wir möchten das Ausfüllen von Webformularen so einfach wie möglich machen. Warum bestehen wir also darauf, unsere Formulare zu validieren?
Dafür gibt es drei Hauptgründe:

- **Wir möchten die richtigen Daten im richtigen Format erhalten.** Unsere Anwendungen funktionieren nicht ordnungsgemäß, wenn die Daten unserer Benutzer im falschen Format gespeichert werden, fehlerhaft sind oder ganz fehlen.
- **Wir möchten die Daten unserer Benutzer schützen.** Wenn wir unsere Benutzer dazu verpflichten, sichere Passwörter einzugeben, lassen sich ihre Kontoinformationen leichter schützen.
- **Wir möchten uns selbst schützen.** Böswillige Benutzer können ungeschützte Formulare auf vielfältige Weise missbrauchen, um der Anwendung zu schaden. Weitere Informationen finden Sie unter [Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security).

  > [!WARNING]
  > Vertrauen Sie niemals Daten, die vom Client an Ihren Server gesendet werden. Selbst wenn Ihr Formular korrekt validiert und fehlerhafte Eingaben auf der Clientseite verhindert, können böswillige Benutzer die Netzwerkanfrage verändern.

## Verschiedene Arten der clientseitigen Validierung

Im Web begegnen Ihnen zwei Arten der clientseitigen Validierung:

- **HTML-Formularvalidierung**
  Mit HTML-Formularattributen lässt sich festlegen, welche Formularsteuerelemente erforderlich sind und welches Format die eingegebenen Daten haben müssen, um gültig zu sein.
- **JavaScript-Formularvalidierung**
  JavaScript wird üblicherweise eingesetzt, um die HTML-Formularvalidierung zu erweitern oder anzupassen.

Clientseitige Validierung ist mit wenig oder ganz ohne JavaScript möglich. HTML-Validierung ist schneller als JavaScript-Validierung, lässt sich aber weniger stark anpassen. Im Allgemeinen empfiehlt es sich, Formulare zunächst mit den zuverlässigen HTML-Funktionen umzusetzen und die Benutzererfahrung bei Bedarf mit JavaScript zu verbessern.

## Integrierte Formularvalidierung verwenden

Eine der wichtigsten Eigenschaften von [Formularsteuerelementen](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types) ist, dass sich die meisten Benutzereingaben ohne JavaScript validieren lassen.
Dazu werden Validierungsattribute für Formularelemente verwendet.
Viele davon haben wir bereits behandelt. Hier eine Zusammenfassung:

- [`required`](/de/docs/Web/HTML/Reference/Attributes/required): Legt fest, ob ein Formularfeld ausgefüllt sein muss, bevor das Formular gesendet werden kann.
- [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength) und [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength): Legen die minimale und maximale Länge von Textdaten (Zeichenfolgen) fest.
- [`min`](/de/docs/Web/HTML/Reference/Attributes/min), [`max`](/de/docs/Web/HTML/Reference/Attributes/max) und [`step`](/de/docs/Web/HTML/Reference/Attributes/step): Legen den minimalen und maximalen Wert für numerische Eingabetypen sowie die Schrittweite der Werte, ausgehend vom Minimum, fest.
- [`type`](/de/docs/Web/HTML/Reference/Elements/input#input_types): Legt fest, ob die Daten eine Zahl, eine E-Mail-Adresse oder einen anderen vordefinierten Typ haben müssen.
- [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern): Legt einen [regulären Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) fest, dessen Muster die eingegebenen Daten entsprechen müssen.

Erfüllen die in ein Formularfeld eingegebenen Daten alle durch seine Attribute festgelegten Regeln, gelten sie als gültig. Andernfalls gelten sie als ungültig.

Wenn ein Element gültig ist, trifft Folgendes zu:

- Das Element entspricht der CSS-Pseudoklasse {{cssxref(":valid")}}, mit der Sie gültige Elemente gezielt gestalten können. Wenn Benutzer mit dem Steuerelement interagiert haben, entspricht es auch {{cssxref(":user-valid")}}. Je nach Eingabetyp und Attributen kann es weiteren UI-Pseudoklassen wie {{cssxref(":in-range")}} entsprechen.
- Wenn Benutzer versuchen, die Daten zu senden, übermittelt der Browser das Formular, sofern nichts anderes dies verhindert (z. B. JavaScript).

Wenn ein Element ungültig ist, trifft Folgendes zu:

- Das Element entspricht der CSS-Pseudoklasse {{cssxref(":invalid")}}. Wenn Benutzer mit dem Steuerelement interagiert haben, entspricht es außerdem der CSS-Pseudoklasse {{cssxref(":user-invalid")}}. Je nach Fehler können auch weitere UI-Pseudoklassen wie {{cssxref(":out-of-range")}} zutreffen. Damit können Sie ungültige Elemente gezielt gestalten.
- Wenn Benutzer versuchen, die Daten zu senden, verhindert der Browser die Formularübermittlung und zeigt eine Fehlermeldung an. Die Meldung hängt von der Art des Fehlers ab. Die [Constraint Validation API](#die_constraint_validation_api) wird weiter unten beschrieben.

## Beispiele für die integrierte Formularvalidierung

In diesem Abschnitt probieren wir einige der oben besprochenen Attribute aus.

### Einfache Ausgangsdatei

Beginnen wir mit einem einfachen Beispiel: einem Eingabefeld, in dem Sie angeben können, ob Sie Bananen oder Kirschen bevorzugen.
Das Beispiel enthält ein Text-{{HTMLElement("input")}} mit einem zugehörigen {{htmlelement("label")}} und einem {{htmlelement("button")}} zum Absenden.

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

Erstellen Sie zunächst eine Kopie des vorherigen HTML-Codes in einer neuen Datei namens `index.html`. Speichern Sie diese in einem neuen Verzeichnis auf Ihrer Festplatte.

### Das Attribut required

Ein häufig verwendetes HTML-Validierungsmerkmal ist das Attribut [`required`](/de/docs/Web/HTML/Reference/Attributes/required).
Fügen Sie es einem Eingabefeld hinzu, um das Element zu einem Pflichtfeld zu machen.
Ist dieses Attribut gesetzt, entspricht das Element der UI-Pseudoklasse {{cssxref(':required')}}. Ist das Eingabefeld leer, wird das Formular nicht gesendet und stattdessen eine Fehlermeldung angezeigt.
Solange das Eingabefeld leer ist, gilt es außerdem als ungültig und entspricht der UI-Pseudoklasse {{cssxref(':invalid')}}.

Wenn ein beliebiger Radio-Button in einer Gruppe mit gleichem Namen das Attribut `required` hat, muss einer der Radio-Buttons dieser Gruppe ausgewählt sein, damit die Gruppe gültig ist. Dabei muss nicht unbedingt der Radio-Button mit dem Attribut ausgewählt werden.

> [!NOTE]
> Verlangen Sie von Benutzern nur Angaben, die Sie tatsächlich benötigen. Ist es beispielsweise wirklich notwendig, das Geschlecht oder die Anrede einer Person zu kennen?

Fügen Sie Ihrem Eingabefeld wie unten gezeigt das Attribut `required` hinzu.

```html live-sample___the-required-attribute
<form>
  <label for="choose">Would you prefer a banana or cherry? *</label>
  <input id="choose" name="i-like" required />
  <button>Submit</button>
</form>
```

> [!NOTE]
> Üblicherweise wird hinter den Beschriftungen erforderlicher Formularsteuerelemente ein Sternchen (oder eine andere Markierung) platziert, damit sie für sehende Benutzer erkennbar sind. Benutzer darauf hinzuweisen, welche Formularfelder erforderlich sind, verbessert nicht nur die Benutzererfahrung, sondern ist auch nach den WCAG-Richtlinien zur [Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility) erforderlich.

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

Dieses CSS gibt dem Eingabefeld einen roten gestrichelten Rahmen, wenn es ungültig ist, und einen dezenteren durchgezogenen schwarzen Rahmen, wenn es gültig ist.
Außerdem haben wir einen Hintergrundverlauf hinzugefügt, wenn das Eingabefeld _sowohl_ erforderlich _als auch_ ungültig ist. Probieren Sie das neue Verhalten im folgenden Beispiel aus:

{{EmbedLiveSample("the-required-attribute", "100%", 80, , , , , "allow-forms")}}

Versuchen Sie, das Formular ohne Wert abzusenden. Beachten Sie, dass das ungültige Eingabefeld den Fokus erhält und eine Standardfehlermeldung („Bitte füllen Sie dieses Feld aus“) erscheint. Auch das Absenden des Formulars wird verhindert. Beachten Sie jedoch, dass wir das Absenden selbst dann verhindern, wenn ein Wert eingegeben wurde, um einen Fehler bei der Verarbeitung eingebetteter Formulare durch MDN zu vermeiden.

### Validierung anhand eines regulären Ausdrucks

Ein weiteres nützliches Validierungsmerkmal ist das Attribut [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern), dessen Wert ein [regulärer Ausdruck](/de/docs/Web/JavaScript/Guide/Regular_expressions) sein muss.
Ein regulärer Ausdruck (Regexp) ist ein Muster, mit dem sich Zeichenkombinationen in Zeichenfolgen abgleichen lassen. Deshalb eignen sich reguläre Ausdrücke gut für die Formularvalidierung und haben zahlreiche weitere Einsatzmöglichkeiten in JavaScript.

Reguläre Ausdrücke sind recht komplex; eine umfassende Einführung ist in diesem Artikel nicht vorgesehen.
Die folgenden Beispiele sollen Ihnen eine grundlegende Vorstellung davon vermitteln, wie sie funktionieren.

- `a` — Entspricht einem einzelnen Zeichen `a` (nicht `b`, nicht `aa` usw.).
- `abc` — Entspricht `a`, gefolgt von `b`, gefolgt von `c`.
- `ab?c` — Entspricht `a`, optional gefolgt von einem einzelnen `b`, gefolgt von `c` (`ac` oder `abc`).
- `ab*c` — Entspricht `a`, optional gefolgt von beliebig vielen `b`, gefolgt von `c` (`ac`, `abc`, `abbbbbc` usw.).
- `a|b` — Entspricht einem einzelnen Zeichen `a` oder `b`.
- `abc|xyz` — Entspricht genau `abc` oder genau `xyz` (aber nicht `abcxyz`, `a`, `y` usw.).

Es gibt viele weitere Möglichkeiten, auf die wir hier nicht eingehen.
Eine vollständige Übersicht und zahlreiche Beispiele finden Sie in unserer Dokumentation zu [regulären Ausdrücken](/de/docs/Web/JavaScript/Guide/Regular_expressions).

Setzen wir ein Beispiel um.
Aktualisieren Sie Ihr HTML und fügen Sie wie folgt ein Attribut [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern) hinzu:

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

Daraus ergibt sich die folgende aktualisierte Version – probieren Sie sie aus:

{{EmbedLiveSample("validate-regular-expression", "100%", 80, , , , , "allow-forms")}}

Sie können auch auf die Schaltfläche **Play** klicken, um das Beispiel im MDN Playground zu öffnen und dort den Quellcode zu bearbeiten.

In diesem Beispiel akzeptiert das Element {{HTMLElement("input")}} vier mögliche Werte: die Zeichenfolgen „banana“, „Banana“, „cherry“ oder „Cherry“. Reguläre Ausdrücke unterscheiden zwischen Groß- und Kleinschreibung. Durch ein zusätzliches „Aa“-Muster in eckigen Klammern unterstützen wir hier beide Schreibweisen.

Ändern Sie nun den Wert des Attributs [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern) entsprechend einigen der vorherigen Beispiele. Beobachten Sie, welche Werte Sie eingeben können, damit die Eingabe gültig ist.
Versuchen Sie auch, eigene Muster zu schreiben, und sehen Sie, wie es funktioniert.
Beziehen Sie sie nach Möglichkeit auf Obst, damit Ihre Beispiele sinnvoll bleiben!

Wenn ein nicht leerer Wert des {{HTMLElement("input")}} nicht dem Muster des regulären Ausdrucks entspricht, entspricht das `input` der Pseudoklasse {{cssxref(':invalid')}}. Ist das Element leer und nicht erforderlich, gilt es nicht als ungültig.

Bei einigen Typen des Elements {{HTMLElement("input")}} ist kein Attribut [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern) nötig, um die Eingabe anhand eines regulären Ausdrucks zu validieren. Beim Typ `email` wird der eingegebene Wert beispielsweise anhand eines Musters für eine korrekt formatierte E-Mail-Adresse geprüft. Wenn das Attribut [`multiple`](/de/docs/Web/HTML/Reference/Attributes/multiple) gesetzt ist, wird stattdessen auch eine durch Kommas getrennte Liste von E-Mail-Adressen akzeptiert.

> [!NOTE]
> Das Element {{HTMLElement("textarea")}} unterstützt das Attribut [`pattern`](/de/docs/Web/HTML/Reference/Attributes/pattern) nicht.

### Die Länge Ihrer Eingaben begrenzen

Mit den Attributen [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength) und [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength) können Sie die Zeichenlänge aller mit {{HTMLElement("input")}} oder {{HTMLElement("textarea")}} erstellten Textfelder begrenzen.
Ein Feld ist ungültig, wenn es einen Wert enthält, der weniger Zeichen als der Wert von [`minlength`](/de/docs/Web/HTML/Reference/Attributes/minlength) oder mehr Zeichen als der Wert von [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength) hat.

Browser lassen Benutzer häufig keine längeren Werte als vorgesehen in Textfelder eingeben. Benutzerfreundlicher als die alleinige Verwendung von `maxlength` ist es, zusätzlich auf barrierefreie Weise die Zeichenzahl anzuzeigen und Benutzern zu ermöglichen, ihren Text entsprechend zu kürzen.
Ein Beispiel dafür ist die Zeichenbegrenzung bei Beiträgen in sozialen Medien. Dafür kann JavaScript verwendet werden, auch mit [Lösungen, die `maxlength` einsetzen](https://github.com/mimo84/bootstrap-maxlength).

> [!NOTE]
> Verstöße gegen Längenbeschränkungen werden niemals gemeldet, wenn der Wert programmgesteuert gesetzt wird. Sie werden nur bei Benutzereingaben gemeldet.

### Die Werte Ihrer Eingaben begrenzen

Bei numerischen Feldern, darunter [`<input type="number">`](/de/docs/Web/HTML/Reference/Elements/input/number) und die verschiedenen Eingabetypen für Datumsangaben, können Sie mit den Attributen [`min`](/de/docs/Web/HTML/Reference/Attributes/min) und [`max`](/de/docs/Web/HTML/Reference/Attributes/max) einen Bereich gültiger Werte festlegen.
Enthält das Feld einen Wert außerhalb dieses Bereichs, ist es ungültig.

Sehen wir uns ein weiteres Beispiel an.
Erstellen Sie eine neue Kopie der [einfachen Ausgangsdatei](#einfache_ausgangsdatei) und speichern Sie sie im selben Verzeichnis unter dem Namen `index2.html`.

Löschen Sie nun den Inhalt des Elements `<body>` und ersetzen Sie ihn durch Folgendes:

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

- Das Feld `text` hat hier ein `minlength` und ein `maxlength` von jeweils sechs. Das entspricht der Länge von „banana“ und „cherry“.
- Für das Feld `number` haben wir außerdem `min` auf eins und `max` auf zehn gesetzt.
  Eingegebene Zahlen außerhalb dieses Bereichs werden als ungültig angezeigt. Mit den Pfeilen zum Erhöhen und Verringern lässt sich der Wert nicht über diesen Bereich hinaus verändern.
  Geben Benutzer manuell eine Zahl außerhalb des Bereichs ein, sind die Daten ungültig.
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

Hier ist das interaktive Beispiel:

{{EmbedLiveSample("constraining-values", "100%", 100)}}

Sie können auch auf die Schaltfläche **Play** klicken, um das Beispiel im MDN Playground zu öffnen und dort den Quellcode zu bearbeiten.

Numerische Eingabetypen wie `number`, `range` und `date` unterstützen außerdem das Attribut [`step`](/de/docs/Web/HTML/Reference/Attributes/step). Es legt fest, in welchen Schritten sich der Wert beim Verwenden der Eingabesteuerelemente erhöht oder verringert (etwa mit den Pfeilschaltflächen eines Zahlenfelds oder durch Verschieben des Schiebereglers). In unserem Beispiel fehlt das Attribut `step`, sodass standardmäßig der Wert `1` gilt. Das bedeutet, dass auch Dezimalzahlen wie 3,2 als ungültig angezeigt werden.

### Vollständiges Beispiel

Das folgende vollständige Beispiel zeigt die Verwendung der integrierten HTML-Validierungsfunktionen.
Zunächst das HTML:

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

Und nun etwas CSS, um das HTML zu gestalten:

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

Eine vollständige Liste der Attribute, mit denen Eingabewerte eingeschränkt werden können, und der Eingabetypen, die sie unterstützen, finden Sie unter [Validierungsbezogene Attribute](/de/docs/Web/HTML/Guides/Constraint_validation#validation-related_attributes).

## Formulare mit JavaScript validieren

Wenn Sie den Text der integrierten Fehlermeldungen ändern möchten, benötigen Sie JavaScript.
In diesem Abschnitt betrachten wir die verschiedenen Möglichkeiten dafür.

### Die Constraint Validation API

Die Constraint Validation API besteht aus Methoden und Eigenschaften, die auf den folgenden DOM-Schnittstellen für Formularelemente verfügbar sind:

- [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement) (repräsentiert ein Element [`<button>`](/de/docs/Web/HTML/Reference/Elements/button))
- [`HTMLFieldSetElement`](/de/docs/Web/API/HTMLFieldSetElement) (repräsentiert ein Element [`<fieldset>`](/de/docs/Web/HTML/Reference/Elements/fieldset))
- [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) (repräsentiert ein Element [`<input>`](/de/docs/Web/HTML/Reference/Elements/input))
- [`HTMLOutputElement`](/de/docs/Web/API/HTMLOutputElement) (repräsentiert ein Element [`<output>`](/de/docs/Web/HTML/Reference/Elements/output))
- [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement) (repräsentiert ein Element [`<select>`](/de/docs/Web/HTML/Reference/Elements/select))
- [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement) (repräsentiert ein Element [`<textarea>`](/de/docs/Web/HTML/Reference/Elements/textarea))

Die Constraint Validation API stellt für die genannten Elemente folgende Eigenschaften bereit:

- `validationMessage`: Gibt eine lokalisierte Meldung zurück, die beschreibt, welche Validierungsbedingungen das Steuerelement nicht erfüllt (falls vorhanden). Ist das Steuerelement kein Kandidat für die Validierung (`willValidate` ist `false`) oder erfüllt der Wert des Elements seine Bedingungen (ist also gültig), wird eine leere Zeichenfolge zurückgegeben.
- `validity`: Gibt ein `ValidityState`-Objekt zurück, dessen Eigenschaften den Gültigkeitszustand des Elements beschreiben. Ausführliche Informationen zu allen verfügbaren Eigenschaften finden Sie auf der Referenzseite zu [`ValidityState`](/de/docs/Web/API/ValidityState). Hier sind einige der gebräuchlichsten:
  - [`patternMismatch`](/de/docs/Web/API/ValidityState/patternMismatch): Gibt `true` zurück, wenn der Wert nicht dem angegebenen [`pattern`](/de/docs/Web/HTML/Reference/Elements/input#pattern) entspricht, andernfalls `false`. Bei `true` entspricht das Element der CSS-Pseudoklasse {{cssxref(":invalid")}}.
  - [`tooLong`](/de/docs/Web/API/ValidityState/tooLong): Gibt `true` zurück, wenn der Wert länger ist als die durch das Attribut [`maxlength`](/de/docs/Web/HTML/Reference/Elements/input#maxlength) festgelegte Höchstlänge. Ist er kürzer oder genauso lang, wird `false` zurückgegeben. Bei `true` entspricht das Element der CSS-Pseudoklasse {{cssxref(":invalid")}}.
  - [`tooShort`](/de/docs/Web/API/ValidityState/tooShort): Gibt `true` zurück, wenn der Wert kürzer ist als die durch das Attribut [`minlength`](/de/docs/Web/HTML/Reference/Elements/input#minlength) festgelegte Mindestlänge. Ist er länger oder genauso lang, wird `false` zurückgegeben. Bei `true` entspricht das Element der CSS-Pseudoklasse {{cssxref(":invalid")}}.
  - [`rangeOverflow`](/de/docs/Web/API/ValidityState/rangeOverflow): Gibt `true` zurück, wenn der Wert größer ist als das durch das Attribut [`max`](/de/docs/Web/HTML/Reference/Elements/input#max) festgelegte Maximum. Ist er kleiner oder gleich dem Maximum, wird `false` zurückgegeben. Bei `true` entspricht das Element den CSS-Pseudoklassen {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}}.
  - [`rangeUnderflow`](/de/docs/Web/API/ValidityState/rangeUnderflow): Gibt `true` zurück, wenn der Wert kleiner ist als das durch das Attribut [`min`](/de/docs/Web/HTML/Reference/Elements/input#min) festgelegte Minimum. Ist er größer oder gleich dem Minimum, wird `false` zurückgegeben. Bei `true` entspricht das Element den CSS-Pseudoklassen {{cssxref(":invalid")}} und {{cssxref(":out-of-range")}}.
  - [`typeMismatch`](/de/docs/Web/API/ValidityState/typeMismatch): Gibt `true` zurück, wenn der Wert nicht die erforderliche Syntax hat (wenn [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) `email` oder `url` ist), andernfalls `false`. Bei `true` entspricht das Element der CSS-Pseudoklasse {{cssxref(":invalid")}}.
  - `valid`: Gibt `true` zurück, wenn das Element alle Validierungsbedingungen erfüllt und somit als gültig gilt. Wird eine Bedingung nicht erfüllt, wird `false` zurückgegeben. Bei `true` entspricht das Element der CSS-Pseudoklasse {{cssxref(":valid")}}, andernfalls der CSS-Pseudoklasse {{cssxref(":invalid")}}.
  - `valueMissing`: Gibt `true` zurück, wenn das Element ein Attribut [`required`](/de/docs/Web/HTML/Reference/Elements/input#required), aber keinen Wert hat, andernfalls `false`. Bei `true` entspricht das Element der CSS-Pseudoklasse {{cssxref(":invalid")}}.

- `willValidate`: Gibt `true` zurück, wenn das Element beim Absenden des Formulars validiert wird, andernfalls `false`.

Die Constraint Validation API stellt außerdem folgende Methoden für die genannten Elemente und das Element [`form`](/de/docs/Web/HTML/Reference/Elements/form) bereit:

- `checkValidity()`: Gibt `true` zurück, wenn der Wert des Elements keine Gültigkeitsprobleme aufweist, andernfalls `false`. Wenn das Element ungültig ist, löst diese Methode außerdem ein [`invalid`-Ereignis](/de/docs/Web/API/HTMLInputElement/invalid_event) auf dem Element aus.
- `reportValidity()`: Meldet ungültige Felder mithilfe von Ereignissen. Diese Methode ist in Verbindung mit `preventDefault()` in einem `onSubmit`-Ereignishandler nützlich.
- `setCustomValidity(message)`: Fügt dem Element eine benutzerdefinierte Fehlermeldung hinzu. Wenn Sie eine solche Meldung festlegen, gilt das Element als ungültig und der angegebene Fehler wird angezeigt. So können Sie mit JavaScript weitere Validierungsfehler festlegen, die über die standardmäßigen HTML-Validierungsbedingungen hinausgehen. Die Meldung wird Benutzern angezeigt, wenn das Problem gemeldet wird.

#### Eine benutzerdefinierte Fehlermeldung implementieren

Wie Sie an den vorherigen Beispielen für HTML-Validierungsbedingungen gesehen haben, zeigt der Browser jedes Mal eine Fehlermeldung an, wenn Benutzer versuchen, ein ungültiges Formular abzusenden. Wie diese Meldung dargestellt wird, hängt vom Browser ab.

Diese automatischen Meldungen haben zwei Nachteile:

- Es gibt keine standardisierte Möglichkeit, ihr Erscheinungsbild mit CSS zu ändern.
- Sie richten sich nach der Spracheinstellung des Browsers. Dadurch kann eine Seite in einer Sprache verfasst sein, während die Fehlermeldung in einer anderen Sprache erscheint, wie im folgenden Firefox-Screenshot.

![Beispiel einer Fehlermeldung auf einer englischen Seite bei französischer Spracheinstellung in Firefox](error-firefox-win7.png)

Die Anpassung dieser Fehlermeldungen ist einer der häufigsten Anwendungsfälle der Constraint Validation API.
Sehen wir uns anhand eines Beispiels an, wie das geht.

Wir beginnen mit etwas HTML. Sie können es in eine weitere Kopie der [einfachen Ausgangsdatei](#einfache_ausgangsdatei) einfügen:

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

Hier speichern wir eine Referenz auf das E-Mail-Eingabefeld und fügen ihm dann einen Ereignis-Listener hinzu. Dieser führt den enthaltenen Code jedes Mal aus, wenn sich der Wert im Eingabefeld ändert.

In diesem Code prüfen wir, ob die Eigenschaft `validity.typeMismatch` des E-Mail-Eingabefelds `true` zurückgibt. Das bedeutet, dass der eingegebene Wert nicht dem Muster einer korrekt formatierten E-Mail-Adresse entspricht. In diesem Fall rufen wir die Methode [`setCustomValidity()`](/de/docs/Web/API/HTMLInputElement/setCustomValidity) mit einer benutzerdefinierten Meldung auf. Dadurch wird das Eingabefeld ungültig. Beim Versuch, das Formular abzusenden, schlägt die Übermittlung fehl und die benutzerdefinierte Fehlermeldung wird angezeigt.

Gibt die Eigenschaft `validity.typeMismatch` `false` zurück, rufen wir `setCustomValidity()` mit einer leeren Zeichenfolge auf. Dadurch wird das Eingabefeld gültig und das Formular kann gesendet werden. Wenn bei der Validierung ein Formularsteuerelement einen `customError` hat, der keine leere Zeichenfolge ist, wird die Formularübermittlung verhindert.

Probieren Sie es unten aus (klicken Sie auf die Schaltfläche **Play**, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten):

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

#### Die integrierte Formularvalidierung erweitern

Das vorherige Beispiel hat gezeigt, wie Sie eine benutzerdefinierte Meldung für einen bestimmten Fehlertyp (`validity.typeMismatch`) hinzufügen können.
Sie können auch die gesamte integrierte Formularvalidierung verwenden und sie anschließend mit `setCustomValidity()` ergänzen.

Hier zeigen wir, wie Sie die integrierte Validierung von [`<input type="email">`](/de/docs/Web/HTML/Reference/Elements/input/email) so erweitern, dass nur Adressen mit der Domain `@example.com` akzeptiert werden.
Wir beginnen mit dem folgenden HTML-{{htmlelement("form")}}.

```html live-sample___extending-built-in-form-validation
<form>
  <label for="mail">Email address (@example.com only):</label>
  <input type="email" id="mail" />
  <button>Submit</button>
</form>
```

Der Validierungscode ist unten zu sehen.
Bei jeder neuen Eingabe setzt der Code zunächst die benutzerdefinierte Gültigkeitsmeldung mit `setCustomValidity("")` zurück.
Anschließend prüft er mit `email.validity.valid`, ob die eingegebene Adresse ungültig ist. Ist dies der Fall, wird der Ereignishandler beendet.
So wird sichergestellt, dass alle normalen integrierten Validierungsprüfungen ausgeführt werden, solange der eingegebene Text keine gültige E-Mail-Adresse ist.

Sobald die E-Mail-Adresse gültig ist, fügt der Code eine benutzerdefinierte Bedingung hinzu: Endet die Adresse nicht auf `@example.com`, wird `setCustomValidity()` mit einer Fehlermeldung aufgerufen.

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

Versuchen Sie, eine ungültige E-Mail-Adresse abzusenden, dann eine gültige Adresse, die nicht auf `@example.com` endet, und schließlich eine, die darauf endet.

{{EmbedLiveSample("extending-built-in-form-validation", "", 200, , , , , "allow-forms")}}

#### Ein ausführlicheres Beispiel

Nachdem wir ein sehr einfaches Beispiel gesehen haben, betrachten wir nun, wie sich mit dieser API eine etwas komplexere benutzerdefinierte Validierung umsetzen lässt.

Zuerst das HTML. Auch dieses Beispiel können Sie gern selbst nachbauen:

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

Dieses Formular verwendet das Attribut [`novalidate`](/de/docs/Web/HTML/Reference/Elements/form#novalidate), um die automatische Validierung des Browsers auszuschalten. Ist das Attribut `novalidate` für das Formular gesetzt, zeigt es keine eigenen Fehlermeldungen in Sprechblasen an. Stattdessen können wir unsere benutzerdefinierten Fehlermeldungen auf die gewünschte Weise im DOM darstellen.
Die Unterstützung der Constraint Validation API und die Anwendung von CSS-Pseudoklassen wie {{cssxref(":valid")}} bleiben davon jedoch unberührt.
Das bedeutet: Auch wenn der Browser die Gültigkeit des Formulars vor dem Absenden nicht automatisch prüft, können Sie dies weiterhin selbst tun und das Formular entsprechend gestalten.

Die zu validierende Eingabe ist ein [`<input type="email">`](/de/docs/Web/HTML/Reference/Elements/input/email), das `required` ist und ein `minlength` von 8 Zeichen hat. Wir prüfen diese Anforderungen mit eigenem Code und zeigen für jeden Fehler eine benutzerdefinierte Meldung an.

Die Fehlermeldungen sollen innerhalb eines `<span>`-Elements erscheinen.
Das Attribut [`aria-live`](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) wird für dieses `<span>` gesetzt, damit unsere benutzerdefinierte Fehlermeldung allen Benutzern zugänglich ist und auch von Screenreadern vorgelesen wird.

Nun fügen wir etwas grundlegendes CSS hinzu, um das Erscheinungsbild des Formulars zu verbessern und bei ungültigen Eingabedaten eine visuelle Rückmeldung zu geben:

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

Sehen wir uns nun das JavaScript an, das die benutzerdefinierte Fehlervalidierung umsetzt.
Es gibt viele Möglichkeiten, einen DOM-Knoten auszuwählen. Hier holen wir das Formular selbst, das E-Mail-Eingabefeld und das span-Element, in das wir die Fehlermeldung einfügen werden.

Mithilfe von Ereignishandlern prüfen wir bei jeder Eingabe, ob die Formularfelder gültig sind. Liegt ein Fehler vor, zeigen wir ihn an. Andernfalls entfernen wir vorhandene Fehlermeldungen.

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

Jedes Mal, wenn sich der Wert des Eingabefelds ändert, prüfen wir, ob es gültige Daten enthält. Falls ja, entfernen wir eine gegebenenfalls angezeigte Fehlermeldung. Sind die Daten ungültig, rufen wir `showError()` auf, um den passenden Fehler anzuzeigen.

Bei jedem Versuch, das Formular abzusenden, prüfen wir erneut, ob die Daten gültig sind. Falls ja, lassen wir das Absenden zu. Andernfalls rufen wir `showError()` auf, um den passenden Fehler anzuzeigen, und verhindern die Formularübermittlung mit [`preventDefault()`](/de/docs/Web/API/Event/preventDefault).

Die Funktion `showError()` verwendet verschiedene Eigenschaften des `validity`-Objekts des Eingabefelds, um den Fehler zu ermitteln und eine passende Fehlermeldung anzuzeigen.

Hier ist das interaktive Ergebnis (klicken Sie auf die Schaltfläche **Play**, um das Beispiel im MDN Playground auszuführen und den Quellcode zu bearbeiten):

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

Die Constraint Validation API ist ein leistungsfähiges Werkzeug für die Formularvalidierung. Sie gibt Ihnen deutlich mehr Kontrolle über die Benutzeroberfläche, als mit HTML und CSS allein möglich ist.

### Formulare ohne integrierte API validieren

In manchen Fällen, beispielsweise bei [benutzerdefinierten Steuerelementen](/de/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls), können oder möchten Sie die Constraint Validation API nicht verwenden. Sie können Ihr Formular trotzdem mit JavaScript validieren, müssen die dafür nötige Logik aber selbst schreiben.

Stellen Sie sich bei der Validierung eines Formulars einige Fragen:

- Welche Art von Validierung soll ich durchführen?
  - : Sie müssen entscheiden, wie Sie Ihre Daten validieren: mit Zeichenfolgenoperationen, Typumwandlung, regulären Ausdrücken usw. Die Entscheidung liegt bei Ihnen.
- Was soll geschehen, wenn das Formular ungültig ist?
  - : Das ist eine Frage der Benutzeroberfläche. Sie müssen festlegen, wie sich das Formular verhält. Soll es die Daten trotzdem senden?
    Sollen fehlerhafte Felder hervorgehoben werden?
    Sollen Fehlermeldungen angezeigt werden?
- Wie kann ich Benutzern helfen, ungültige Daten zu korrigieren?
  - : Um Frustration zu vermeiden, sollten Sie möglichst viele hilfreiche Informationen bereitstellen, die Benutzer bei der Korrektur ihrer Eingaben unterstützen.
    Geben Sie vorab Hinweise darauf, was erwartet wird, und formulieren Sie klare Fehlermeldungen.
    Wenn Sie sich näher mit den Anforderungen an Benutzeroberflächen für die Formularvalidierung beschäftigen möchten, lesen Sie diese hilfreichen Artikel:
    - [Benutzern helfen, die richtigen Daten in Formulare einzugeben](https://web.dev/learn/forms/form-fields)
    - [Eingaben validieren](https://www.w3.org/WAI/tutorials/forms/validation/)
    - [Fehler in Formularen melden: 10 Gestaltungsrichtlinien](https://www.nngroup.com/articles/errors-forms-design-guidelines/)

#### Ein Beispiel ohne die Constraint Validation API

Zur Veranschaulichung folgt eine vereinfachte Version des vorherigen Beispiels ohne die Constraint Validation API.

Das HTML ist nahezu identisch; wir haben lediglich die HTML-Validierungsfunktionen entfernt.

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

Auch das CSS muss kaum geändert werden: Wir haben die CSS-Pseudoklasse {{cssxref(":invalid")}} durch eine reguläre Klasse ersetzt und auf den Attributselektor verzichtet.

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

Die größten Änderungen betreffen den JavaScript-Code, der nun deutlich mehr Aufgaben übernehmen muss.

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

Wie Sie sehen, ist es nicht besonders schwierig, selbst ein Validierungssystem zu erstellen. Die Herausforderung besteht darin, es so allgemein zu gestalten, dass es plattformübergreifend und für jedes Ihrer Formulare funktioniert. Für die Formularvalidierung stehen viele Bibliotheken zur Verfügung, beispielsweise [Validate.js](https://rickharrison.github.io/validate.js/).

## Zusammenfassung

Die clientseitige Formularvalidierung erfordert manchmal JavaScript, wenn Sie die Gestaltung und Fehlermeldungen anpassen möchten. Sie erfordert aber _immer_, dass Sie sorgfältig über die Bedürfnisse der Benutzer nachdenken.
Denken Sie stets daran, Ihren Benutzern bei der Korrektur ihrer Angaben zu helfen. Achten Sie dazu auf Folgendes:

- Zeigen Sie eindeutige Fehlermeldungen an.
- Seien Sie beim Eingabeformat möglichst flexibel.
- Zeigen Sie genau an, wo der Fehler auftritt, insbesondere bei großen Formularen.

Nachdem Sie überprüft haben, dass das Formular korrekt ausgefüllt ist, kann es gesendet werden.
Als Nächstes behandeln wir das [Senden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data).

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/UI_pseudo-classes", "Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data", "Learn_web_development/Extensions/Forms")}}
