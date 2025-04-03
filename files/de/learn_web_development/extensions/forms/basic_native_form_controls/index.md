---
title: Grundlegende native Formularsteuerelemente
slug: Learn_web_development/Extensions/Forms/Basic_native_form_controls
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Forms/How_to_structure_a_web_form", "Learn_web_development/Extensions/Forms/HTML5_input_types", "Learn_web_development/Extensions/Forms")}}

Im [vorherigen Artikel](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form) haben wir ein funktionales Webformular-Beispiel erstellt, einige Formularsteuerelemente und allgemeine Strukturelemente eingeführt und uns auf bewährte Praktiken zur Barrierefreiheit konzentriert. Als Nächstes werden wir die Funktionalität der verschiedenen Formularsteuerelemente, oder Widgets, im Detail betrachten — alle verschiedenen Optionen, die zur Erfassung verschiedener Datentypen zur Verfügung stehen. In diesem Artikel betrachten wir die ursprüngliche Gruppe von Formularsteuerelementen, die seit den Anfängen des Webs in allen Browsern verfügbar sind.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Verständnis von HTML</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Ein detailliertes Verständnis der ursprünglichen Gruppe von nativen Formularwidgets,
        die in Browsern zum Sammeln von Daten verfügbar sind, und deren Implementierung
        mittels HTML.
      </td>
    </tr>
  </tbody>
</table>

Sie haben bereits einige Formularelemente kennengelernt, einschließlich {{HTMLelement('form')}}, {{HTMLelement('fieldset')}}, {{HTMLelement('legend')}}, {{HTMLelement('textarea')}}, {{HTMLelement('label')}}, {{HTMLelement('button')}} und {{HTMLelement('input')}}. Dieser Artikel behandelt:

- Die gängigen Eingabetypen {{HTMLelement('input/button', 'button')}}, {{HTMLelement('input/checkbox', 'checkbox')}}, {{HTMLelement('input/file', 'file')}}, {{HTMLelement('input/hidden', 'hidden')}}, {{HTMLelement('input/image', 'image')}}, {{HTMLelement('input/password', 'password')}}, {{HTMLelement('input/radio', 'radio')}}, {{HTMLelement('input/reset', 'reset')}}, {{HTMLelement('input/submit', 'submit')}} und {{HTMLelement('input/text', 'text')}}.
- Einige der Attribute, die allen Formularsteuerelementen gemeinsam sind.

> [!NOTE]
> In den nächsten beiden Artikeln behandeln wir zusätzliche, leistungsfähigere Formularsteuerelemente. Wenn Sie eine umfassendere Referenz suchen, sollten Sie unsere [HTML-Formularelementreferenz](/de/docs/Web/HTML/Element#forms) konsultieren, insbesondere unsere umfangreiche [`<input>` Typen](/de/docs/Web/HTML/Element/input) Referenz.

## Texteingabefelder

Text-{{htmlelement("input")}}-Felder sind die grundlegendsten Formularwidgets. Sie sind eine sehr bequeme Möglichkeit, dem Benutzer die Eingabe jeglicher Daten zu ermöglichen, und wir haben bereits einige einfache Beispiele gesehen.

> [!NOTE]
> HTML-Formular-Textfelder sind einfache, reine Texteingabesteuerungen. Das bedeutet, dass Sie sie nicht für die Bearbeitung von Rich-Text (fett, kursiv, etc.) verwenden können. Alle Rich-Text-Editoren, die Sie finden, sind benutzerdefinierte Widgets, die mit HTML, CSS und JavaScript erstellt wurden.

Alle grundlegenden Textsteuerungen teilen einige gemeinsame Verhaltensweisen:

- Sie können als [`readonly`](/de/docs/Web/HTML/Element/input#readonly) (der Benutzer kann den Eingabewert nicht ändern, er wird aber trotzdem mit den restlichen Formulardaten gesendet) oder [`disabled`](/de/docs/Web/HTML/Element/input#disabled) (der Eingabewert kann nicht geändert werden und wird nie mit den restlichen Formulardaten gesendet) gekennzeichnet werden.
- Sie können einen [`placeholder`](/de/docs/Web/HTML/Element/input#placeholder) haben; dies ist der Text, der innerhalb des Texteingabefeldes erscheint und den Zweck des Feldes kurz beschreiben soll.
- Sie können in der [`size`](/de/docs/Web/HTML/Attributes/size) (physische Größe des Feldes) und in der [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength) (maximale Anzahl der Zeichen, die in das Feld eingegeben werden können) eingeschränkt werden.
- Sie können von der Rechtschreibprüfung profitieren (mittels des [`spellcheck`](/de/docs/Web/HTML/Global_attributes/spellcheck) Attributs).

> [!NOTE]
> Das {{htmlelement("input")}}-Element ist einzigartig unter den HTML-Elementen, da es je nach Wert seines [`type`](/de/docs/Web/HTML/Element/input#type) Attributs viele Formen annehmen kann. Es wird zur Erstellung der meisten Arten von Formularwidgets verwendet, einschließlich einzeiliger Textfelder, Zeit- und Datum-Steuerelemente, Steuerelemente ohne Texteingabe wie Kontrollkästchen, Optionsfelder und Farbwähler sowie Schaltflächen.

### Einzeilige Textfelder

Ein einzeiliges Textfeld wird mit einem {{HTMLElement("input")}}-Element erstellt, dessen [`type`](/de/docs/Web/HTML/Element/input#type)-Attributwert auf `text` gesetzt ist, oder durch Weglassen des [`type`](/de/docs/Web/HTML/Element/input#type)-Attributs insgesamt (der Standardwert ist `text`). Der Wert `text` für dieses Attribut ist auch der Fallback-Wert, wenn der von Ihnen angegebene Wert für das [`type`](/de/docs/Web/HTML/Element/input#type)-Attribut vom Browser nicht erkannt wird (zum Beispiel, wenn Sie `type="color"` angeben und der Browser keinen nativen Farbwähler unterstützt).

> [!NOTE]
> Sie können Beispiele für alle einzeiligen Textfeldtypen auf GitHub unter [single-line-text-fields.html](https://github.com/mdn/learning-area/blob/main/html/forms/native-form-widgets/single-line-text-fields.html) finden ([sehen Sie es sich auch live an](https://mdn.github.io/learning-area/html/forms/native-form-widgets/single-line-text-fields.html)).

Hier ist ein einfaches Beispiel für ein einzeiliges Textfeld:

```html
<input type="text" id="comment" name="comment" value="I'm a text field" />
```

Einzeilige Textfelder haben nur eine echte Einschränkung: Wenn Sie Text mit Zeilenumbrüchen eingeben, entfernt der Browser diese Zeilenumbrüche, bevor die Daten an den Server gesendet werden.

Der folgende Screenshot zeigt ein Texteingabefeld in den Zuständen Standard, fokussiert und deaktiviert. Die meisten Browser zeigen den fokussierten Zustand mit einem Fokusring um das Steuerelement an und den deaktivierten Zustand mit grauem Text oder einem verwischten/halbtransparenten Steuerelement.

![Screenshot des Standard-, fokussierten und deaktivierten Zustands einer Texteingabe in Chrome auf macOS](disabled.png)

Die im Dokument enthaltenen Screenshots wurden im Chrome-Browser unter macOS aufgenommen. Es kann geringfügige Abweichungen in diesen Feldern/Schaltflächen in verschiedenen Browsern geben, aber die grundlegende Hervorhebungstechnik bleibt ähnlich.

> [!NOTE]
> Wir besprechen Werte für das [`type`](/de/docs/Web/HTML/Element/input#type)-Attribut, die bestimmte Validierungsbeschränkungen durchsetzen, einschließlich Farb-, E-Mail- und URL-Eingabetypen, im nächsten Artikel, [HTML5-Eingabetypen](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types).

#### Passwortfeld

Einer der ursprünglichen Eingabetypen war der Typ `password`:

```html
<input type="password" id="pwd" name="pwd" />
```

Der folgende Screenshot zeigt ein Passwortfeld, in dem jedes eingegebene Zeichen als Punkt dargestellt wird.

![Passwortfeld in Chrome 115 auf macOS](password.png)

Der `password`-Wert fügt dem eingegebenen Text keine besonderen Einschränkungen hinzu, verdeckt jedoch den in das Feld eingegebenen Wert (z. B. mit Punkten oder Sternchen), sodass er von anderen nicht leicht gelesen werden kann.

Beachten Sie, dass dies nur ein Benutzeroberflächenmerkmal ist; es sei denn, Sie übermitteln Ihr Formular sicher, wird es im Klartext gesendet, was schlecht für die Sicherheit ist — eine böswillige Partei könnte Ihre Daten abfangen und Passwörter, Kreditkartendetails oder andere eingereichte Informationen stehlen. Der beste Weg, Benutzer davor zu schützen, besteht darin, alle Seiten, die Formulare beinhalten, über eine sichere Verbindung (d.h. auf einer `https://`-Adresse) zu hosten, sodass die Daten verschlüsselt werden, bevor sie gesendet werden.

Browser erkennen die Sicherheitsimplikationen des Sendens von Formulardaten über eine unsichere Verbindung und haben Warnungen, um Benutzer davon abzuhalten, unsichere Formulare zu verwenden. Weitere Informationen darüber, was Firefox implementiert, finden Sie unter [Unsichere Passwörter](/de/docs/Web/Security/Insecure_passwords).

### Verborgener Inhalt

Ein weiteres ursprüngliches Textsteuerungselement ist der `hidden`-Eingabetyp. Dieser wird verwendet, um ein Formularelement zu erstellen, das für den Benutzer unsichtbar ist, aber dennoch mit den restlichen Formulardaten an den Server gesendet wird, sobald es abgesendet wird — zum Beispiel könnte man einen Zeitstempel an den Server übermitteln wollen, der angibt, wann eine Bestellung aufgegeben wurde. Da es verborgen ist, kann der Benutzer den Wert weder sehen noch absichtlich ändern, es erhält nie den Fokus und ein Screenreader bemerkt es ebenfalls nicht.

```html
<input type="hidden" id="timestamp" name="timestamp" value="1286705410" />
```

Wenn Sie ein solches Element erstellen, ist es erforderlich, dessen `name`- und `value`-Attribute zu setzen. Der Wert kann dynamisch über JavaScript gesetzt werden. Der `hidden`-Eingabetyp sollte kein zugehöriges Label haben.

Andere Texteingabetypen, wie {{HTMLElement("input/search", "search")}}, {{HTMLElement("input/url", "url")}} und {{HTMLElement("input/tel", "tel")}}, werden im nächsten Tutorial behandelt, [HTML5-Eingabetypen](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types).

## Kontrollierbare Elemente: Kontrollkästchen und Optionsfelder

Kontrollierbare Elemente sind Steuerelemente, deren Status durch Klicken auf sie oder ihre zugehörigen Labels geändert werden kann. Es gibt zwei Arten von kontrollierbaren Elementen: das Kontrollkästchen und das Optionsfeld. Beide verwenden das [`checked`](/de/docs/Web/HTML/Element/input/checkbox#checked)-Attribut, um anzugeben, ob das Widget standardmäßig aktiviert ist oder nicht.

Es ist erwähnenswert, dass sich diese Widgets nicht genau wie andere Formular-Widgets verhalten. Bei den meisten Formular-Widgets, einmal das Formular übermittelt, werden alle Widgets mit einem [`name`](/de/docs/Web/HTML/Element/input#name)-Attribut gesendet, auch wenn kein Wert ausgefüllt wurde. Im Fall von kontrollierbaren Elementen werden ihre Werte nur gesendet, wenn sie aktiviert sind. Wenn sie nicht aktiviert sind, wird nichts gesendet, nicht einmal ihr Name. Wenn sie aktiviert sind, aber keinen Wert haben, wird der Name mit einem Wert von _on_ gesendet.

> [!NOTE]
> Sie können die Beispiele in diesem Abschnitt auf GitHub als [checkable-items.html](https://github.com/mdn/learning-area/blob/main/html/forms/native-form-widgets/checkable-items.html) finden ([sehen Sie es sich auch live an](https://mdn.github.io/learning-area/html/forms/native-form-widgets/checkable-items.html)).

Für maximale Benutzerfreundlichkeit/Barrierefreiheit sollten Sie jede Liste verwandter Elemente in einem {{htmlelement("fieldset")}} umschließen, mit einem {{htmlelement("legend")}}, das eine allgemeine Beschreibung der Liste liefert. Jedes einzelne Paar aus {{htmlelement("label")}}/{{htmlelement("input")}}-Elementen sollte in einem eigenen Listenelement (oder Ähnlichem) enthalten sein. Das zugeordnete {{htmlelement('label')}} wird in der Regel direkt vor oder nach dem Optionsfeld oder Kontrollkästchen platziert, wobei die Anweisungen für die Gruppe von Options- oder Kontrollkästchen im Allgemeinen der Inhalt des {{htmlelement("legend")}} sind. Für strukturelle Beispiele siehe die oben verlinkten Beispiele.

### Kontrollkästchen

Ein Kontrollkästchen wird mit dem {{HTMLElement("input")}}-Element erstellt, dessen [`type`](/de/docs/Web/HTML/Element/input#type)-Attribut auf den Wert {{HTMLElement("input/checkbox", "checkbox")}} gesetzt ist.

```html
<input type="checkbox" id="questionOne" name="subscribe" value="yes" checked />
```

Zusammengehörige Kontrollkästchen-Elemente sollten dasselbe [`name`](/de/docs/Web/HTML/Element/input#name)-Attribut verwenden. Das Einfügen des [`checked`](/de/docs/Web/HTML/Element/input/checkbox#checked)-Attributs sorgt dafür, dass das Kontrollkästchen automatisch aktiviert wird, wenn die Seite geladen wird. Durch Klicken auf das Kontrollkästchen oder sein zugehöriges Label wird das Kontrollkästchen aktiviert und deaktiviert.

```html
<fieldset>
  <legend>Choose all the vegetables you like to eat</legend>
  <ul>
    <li>
      <label for="carrots">Carrots</label>
      <input
        type="checkbox"
        id="carrots"
        name="vegetable"
        value="carrots"
        checked />
    </li>
    <li>
      <label for="peas">Peas</label>
      <input type="checkbox" id="peas" name="vegetable" value="peas" />
    </li>
    <li>
      <label for="cabbage">Cabbage</label>
      <input type="checkbox" id="cabbage" name="vegetable" value="cabbage" />
    </li>
  </ul>
</fieldset>
```

Der folgende Screenshot zeigt Kontrollkästchen in den Zuständen Standard, fokussiert und deaktiviert. Kontrollkästchen im Standard- und deaktivierten Zustand erscheinen aktiviert, während im fokussierten Zustand das Kontrollkästchen deaktiviert ist und ein Fokusring darum zu sehen ist.

![Standard-, fokussierte und deaktivierte Kontrollkästchen in Chrome 115 auf macOS](checkboxes.png)

> [!NOTE]
> Alle Kontrollkästchen und Optionsfelder, die beim Laden das [`checked`](/de/docs/Web/HTML/Element/input/checkbox#checked)-Attribut haben, entsprechen der Pseudoklasse {{cssxref(':default')}} , selbst wenn sie nicht mehr aktiviert sind. Alle, die derzeit aktiviert sind, entsprechen der Pseudoklasse {{cssxref(':checked')}}.

Aufgrund des Ein-/Aus-Natur von Kontrollkästchen wird das Kontrollkästchen als Umschaltknopf betrachtet, wobei viele Entwickler und Designer die standardmäßige Kontrollkästchenformatierung nutzen, um Schaltflächen zu erstellen, die wie Umschalter aussehen. Sie können [hier ein Beispiel in Aktion sehen](https://mdn.github.io/learning-area/html/forms/toggle-switch-example/) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/toggle-switch-example/index.html)).

### Optionsfeld

Ein Optionsfeld wird mit dem {{HTMLElement("input")}}-Element erstellt, dessen [`type`](/de/docs/Web/HTML/Element/input#type)-Attribut auf den Wert `radio` gesetzt ist:

```html
<input type="radio" id="soup" name="meal" value="soup" checked />
```

Mehrere Optionsfelder können miteinander verknüpft werden. Wenn sie denselben Wert für ihr [`name`](/de/docs/Web/HTML/Element/input#name)-Attribut haben, werden sie als eine Gruppe von Schaltflächen betrachtet. Es darf immer nur ein Knopf in einer gegebenen Gruppe aktiviert sein; das bedeutet, dass wenn einer von ihnen aktiviert wird, alle anderen automatisch deaktiviert werden. Wenn das Formular gesendet wird, wird nur der Wert des aktivierten Optionsfelds gesendet. Wenn keines der Felder aktiviert ist, wird der gesamte Pool von Optionsfeldern als unbekannter Zustand betrachtet und es wird kein Wert mit dem Formular gesendet. Wenn eines der Optionsfelder in einer Gruppe von gleichnamigen Knöpfen aktiviert ist, kann der Benutzer nicht mehr alle Knöpfe deaktivieren, ohne das Formular zurückzusetzen.

```html
<fieldset>
  <legend>What is your favorite meal?</legend>
  <ul>
    <li>
      <label for="soup">Soup</label>
      <input type="radio" id="soup" name="meal" value="soup" checked />
    </li>
    <li>
      <label for="curry">Curry</label>
      <input type="radio" id="curry" name="meal" value="curry" />
    </li>
    <li>
      <label for="pizza">Pizza</label>
      <input type="radio" id="pizza" name="meal" value="pizza" />
    </li>
  </ul>
</fieldset>
```

Der folgende Screenshot zeigt standardmäßige und deaktivierte Optionsfelder im aktivierten Zustand sowie ein fokussiertes Optionsfeld im deaktivierten Zustand.

![Standard-, fokussierte und deaktivierte Optionsfelder in Chrome 115 auf macOS](radios.png)

## Tatsächliche Schaltflächen

Das Optionsfeld ist trotz seines Namens keine tatsächliche Schaltfläche; lassen Sie uns weitergehen und tatsächliche Schaltflächen betrachten! Es gibt drei Eingabetypen, die Schaltflächen erzeugen:

- `submit`
  - : Sendet die Formulardaten an den Server. Bei {{HTMLElement("button")}}-Elementen führt das Weglassen des `type`-Attributs (oder eines ungültigen Wertes von `type`) zu einer Submit-Schaltfläche.
- `reset`
  - : Setzt alle Formular-Widgets auf ihre Standardwerte zurück.
- `button`
  - : Schaltflächen, die keine automatische Wirkung haben, aber über JavaScript-Code angepasst werden können.

Dann haben wir auch das {{htmlelement("button")}}-Element selbst. Dieses kann ein `type`-Attribut mit dem Wert `submit`, `reset` oder `button` haben, um das Verhalten der drei oben genannten `<input>`-Typen nachzuahmen. Der Hauptunterschied zwischen den beiden ist, dass tatsächliche `<button>`-Elemente viel einfacher zu gestalten sind.

```html
<input type="submit" value="Submit this form" />
<input type="reset" value="Reset this form" />
<input type="button" value="Do Nothing without JavaScript" />

<button type="submit">Submit this form</button>
<button type="reset">Reset this form</button>
<button type="button">Do Nothing without JavaScript</button>
```

```html hidden
<div class="button-demo">
  <p>Using &lt;input></p>
  <p>
    <input type="submit" value="Submit this form" />
    <input type="reset" value="Reset this form" />
    <input type="button" value="Do Nothing without JavaScript" />
  </p>
  <p>Using &lt;button></p>
  <p>
    <button type="submit">Submit this form</button>
    <button type="reset">Reset this form</button>
    <button type="button">Do Nothing without JavaScript</button>
  </p>
</div>
```

```css hidden
button,
input {
  display: none;
}
.button-demo button,
.button-demo input {
  all: revert;
}
```

{{ EmbedLiveSample('Actual_buttons', '500', '250') }}

> [!NOTE]
> Der `image`-Eingabetyp wird ebenfalls als Schaltfläche gerendert. Wir werden das später auch behandeln.

> [!NOTE]
> Sie können die Beispiele aus diesem Abschnitt auf GitHub als [button-examples.html](https://github.com/mdn/learning-area/blob/main/html/forms/native-form-widgets/button-examples.html) finden ([sehen Sie es sich auch live an](https://mdn.github.io/learning-area/html/forms/native-form-widgets/button-examples.html)).

Im Folgenden finden Sie Beispiele für jeden Schaltflächen-`<input>`-Typ sowie den entsprechenden `<button>`-Typ.

### submit

```html
<button type="submit">This is a <strong>submit button</strong></button>

<input type="submit" value="This is a submit button" />
```

### reset

```html
<button type="reset">This is a <strong>reset button</strong></button>

<input type="reset" value="This is a reset button" />
```

### anonym

```html
<button type="button">This is an <strong>anonymous button</strong></button>

<input type="button" value="This is an anonymous button" />
```

Schaltflächen verhalten sich immer gleich, ob Sie ein {{HTMLElement("button")}}-Element oder ein {{HTMLElement("input")}}-Element verwenden. Wie Sie sehen können, ermöglichen es jedoch {{HTMLElement("button")}}-Elemente, HTML in ihrem Inhalt zu verwenden, das zwischen den öffnenden und schließenden `<button>`-Tags eingefügt wird. {{HTMLElement("input")}}-Elemente hingegen sind {{Glossary("void_element", "leere Elemente")}}; ihr angezeigter Inhalt wird im `value`-Attribut eingefügt und akzeptiert daher nur reinen Text als Inhalt.

Der folgende Screenshot zeigt eine Schaltfläche in den Zuständen Standard, fokussiert und deaktiviert. Im fokussierten Zustand gibt es einen Fokusring um die Schaltfläche, und im deaktivierten Zustand ist die Schaltfläche ausgegraut.

![Standard-, Fokus- und deaktivierte Schaltflächenzustände in Chrome 115 auf macOS](buttons.png)

### Bildschaltfläche

Das **Bildschaltflächen**-Steuerelement wird genau wie ein {{HTMLElement("img")}}-Element gerendert, mit der Ausnahme, dass es, wenn der Benutzer darauf klickt, sich wie eine Absende-Schaltfläche verhält.

Eine Bildschaltfläche wird mit einem {{HTMLElement("input")}}-Element erstellt, dessen [`type`](/de/docs/Web/HTML/Element/input#type)-Attribut auf den Wert `image` gesetzt ist. Dieses Element unterstützt genau denselben Satz von Attributen wie das {{HTMLElement("img")}}-Element, plus alle von anderen Formularschaltflächen unterstützten Attribute.

```html
<input type="image" alt="Click me!" src="my-img.png" width="80" height="30" />
```

Wenn die Bildschaltfläche verwendet wird, um das Formular zu übermitteln, sendet dieses Steuerelement nicht seinen Wert — stattdessen werden die X- und Y-Koordinaten des Klicks auf das Bild übermittelt (die Koordinaten sind relativ zum Bild, was bedeutet, dass die linke obere Ecke des Bildes die Koordinate (0, 0) darstellt). Die Koordinaten werden als zwei Schlüssel/Wert-Paare gesendet:

- Der X-Wert-Schlüssel ist der Wert des [`name`](/de/docs/Web/HTML/Element/input#name)-Attributes, gefolgt von dem String "_.x_".
- Der Y-Wert-Schlüssel ist der Wert des [`name`](/de/docs/Web/HTML/Element/input#name)-Attributes, gefolgt von dem String "_.y_".

Wenn Sie also auf das Bild an der Koordinate (123, 456) klicken und es über die `get`-Methode gesendet wird, sehen Sie die Werte im URL wie folgt angehängt:

```url
http://foo.com?pos.x=123&pos.y=456
```

Dies ist eine sehr bequeme Möglichkeit, eine "Hot Map" zu erstellen. Wie diese Werte gesendet und abgerufen werden, wird im Artikel [Formulardaten senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) detailliert beschrieben.

## Datei-Auswahl

Es gibt einen letzten `<input>`-Typ, der uns im frühen HTML übermittelt wurde: den Dateityp der Eingabe. Formulare können Dateien an einen Server senden (diese spezifische Aktion wird ebenfalls im Artikel [Formulardaten senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) behandelt). Das Datei-Auswahl-Widget kann verwendet werden, um eine oder mehrere Dateien zum Versenden auszuwählen.

Um ein [Datei-Auswahl-Widget](/de/docs/Web/HTML/Element/input/file) zu erstellen, verwenden Sie das {{HTMLElement("input")}}-Element mit dem [`type`](/de/docs/Web/HTML/Element/input#type)-Attribut auf `file`. Die Arten der akzeptierten Dateien können durch das [`accept`](/de/docs/Web/HTML/Element/input#accept)-Attribut eingeschränkt werden. Darüber hinaus, wenn Sie dem Benutzer erlauben möchten, mehr als eine Datei auszuwählen, können Sie dies tun, indem Sie das [`multiple`](/de/docs/Web/HTML/Element/input#multiple)-Attribut hinzufügen.

### Beispiel

In diesem Beispiel wird ein Datei-Auswahl-Widget erstellt, das Grafikbilddateien anfordert. Dem Benutzer ist in diesem Fall erlaubt, mehrere Dateien auszuwählen.

```html
<input type="file" name="file" id="file" accept="image/*" multiple />
```

Auf einigen mobilen Geräten kann der Datei-Auswahl-Widget direkt auf Fotos, Videos und Audios zugreifen, die von der Kamera und dem Mikrofon des Geräts aufgenommen wurden, indem der `"accept"`-Attribut ein Erfassungsinformation zugefügt wird, wie zum Beispiel:

```html
<input type="file" accept="image/*;capture=camera" />
<input type="file" accept="video/*;capture=camcorder" />
<input type="file" accept="audio/*;capture=microphone" />
```

Der folgende Screenshot zeigt das Datei-Auswahl-Widget in den Zuständen Standard, Fokus und deaktiviert, wenn keine Datei ausgewählt ist.

![Datei-Auswahl-Widget in Standard-, Fokus- und deaktivierten Zuständen in Chrome 115 auf macOS](filepickers.png)

## Gemeinsame Attribute

Viele der Elemente, die zur Definition von Formularsteuerelementen verwendet werden, haben einige ihrer eigenen spezifischen Attribute. Es gibt jedoch eine Reihe von Attributen, die allen Formularelementen gemeinsam sind. Sie haben einige davon bereits kennengelernt, aber unten finden Sie eine Liste dieser gemeinsamen Attribute als Referenz:

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Attributname</th>
      <th scope="col">Standardwert</th>
      <th scope="col">Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code
          ><a href="/de/docs/Web/HTML/Global_attributes/autofocus"
            >autofocus</a
          ></code
        >
      </td>
      <td>false</td>
      <td>
        Dieses boolesche Attribut lässt Sie angeben, dass das Element automatisch den Eingabefokus
        haben soll, wenn die Seite geladen wird. Nur ein formularassoziiertes Element in einem
        Dokument kann dieses Attribut angegeben haben.
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/de/docs/Web/HTML/Attributes/disabled">disabled</a></code
        >
      </td>
      <td>false</td>
      <td>
        Dieses boolesche Attribut gibt an, dass der Benutzer nicht mit dem Element interagieren kann.
        Wenn dieses Attribut nicht angegeben ist, erbt das Element seine Einstellung
        vom umschließenden Element, zum Beispiel {{HTMLElement("fieldset")}};
        wenn es kein umschließendes Element mit dem <code>disabled</code>-Attribut gibt, dann ist das Element aktiviert.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Element/input#form">form</a></code>
      </td>
      <td></td>
      <td>
        Das <code>&#x3C;form></code>-Element, mit dem das Widget verknüpft ist, wird verwendet, wenn es nicht innerhalb dieses Formulars verschachtelt ist.
        Der Wert des Attributs muss das <code>id</code>-Attribut eines {{HTMLElement("form")}}-Elements im selben Dokument sein.
        Dies ermöglicht es Ihnen, ein Formularsteuerelement mit einem Formular zu verknüpfen, außerhalb dessen es sich befindet, selbst wenn es sich innerhalb eines anderen Formularelements befindet.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Element/input#name">name</a></code>
      </td>
      <td></td>
      <td>Der Name des Elements; dieser wird mit den Formulardaten übermittelt.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Element/input#value">value</a></code>
      </td>
      <td></td>
      <td>Der Anfangswert des Elements.</td>
    </tr>
  </tbody>
</table>

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Grundlegende Steuerelemente](/de/docs/Learn_web_development/Extensions/Forms/Test_your_skills:_Basic_controls).

## Zusammenfassung

Dieser Artikel hat die älteren Eingabetypen behandelt — die ursprüngliche Gruppe, die in den frühen Tagen von HTML eingeführt wurde und in allen Browsern gut unterstützt wird. Im nächsten Abschnitt werden wir uns die moderneren Werte des `type`-Attributs ansehen.

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/How_to_structure_a_web_form", "Learn_web_development/Extensions/Forms/HTML5_input_types", "Learn_web_development/Extensions/Forms")}}
