---
title: Grundlegende native Formularelemente
slug: Learn/Forms/Basic_native_form_controls
l10n:
  sourceCommit: cd56d512284c5765f115cb002c1be5d23e7281d2
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Forms/How_to_structure_a_web_form", "Learn/Forms/HTML5_input_types", "Learn/Forms")}}

Im [vorherigen Artikel](/de/docs/Learn/Forms/How_to_structure_a_web_form) haben wir ein funktionierendes Webformular-Beispiel markiert, einige Formularelemente und gebräuchliche strukturelle Elemente eingeführt und uns auf die besten Praktiken für Barrierefreiheit konzentriert. Als nächstes werden wir die Funktionalität der verschiedenen Formularelemente oder Widgets im Detail betrachten — und alle verschiedenen Optionen untersuchen, die zur Sammlung unterschiedlicher Arten von Daten zur Verfügung stehen. In diesem speziellen Artikel schauen wir uns den ursprünglichen Satz von Formularelementen an, der seit den Anfängen des Webs in allen Browsern verfügbar ist.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Verständnis von HTML</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die ursprünglichen nativen Formular-Widgets zu verstehen, die in den Browsern zur Datenerfassung verfügbar sind, und wie man sie mit HTML umsetzt.
      </td>
    </tr>
  </tbody>
</table>

Sie haben bereits einige Formularelemente kennengelernt, darunter {{HTMLelement('form')}}, {{HTMLelement('fieldset')}}, {{HTMLelement('legend')}}, {{HTMLelement('textarea')}}, {{HTMLelement('label')}}, {{HTMLelement('button')}} und {{HTMLelement('input')}}. Dieser Artikel behandelt:

- Die gebräuchlichen Input-Typen {{HTMLelement('input/button', 'button')}}, {{HTMLelement('input/checkbox', 'checkbox')}}, {{HTMLelement('input/file', 'file')}}, {{HTMLelement('input/hidden', 'hidden')}}, {{HTMLelement('input/image', 'image')}}, {{HTMLelement('input/password', 'password')}}, {{HTMLelement('input/radio', 'radio')}}, {{HTMLelement('input/reset', 'reset')}}, {{HTMLelement('input/submit', 'submit')}} und {{HTMLelement('input/text', 'text')}}.
- Einige der Attribute, die allen Formularelementen gemeinsam sind.

> [!NOTE]
> In den nächsten beiden Artikeln behandeln wir zusätzliche, leistungsstärkere Formularelemente. Wenn Sie eine fortgeschrittenere Referenz benötigen, sollten Sie unsere [HTML-Formularelement-Referenz](/de/docs/Web/HTML/Element#forms) und insbesondere unsere umfangreiche Referenz zu [`<input>` Typen](/de/docs/Web/HTML/Element/input) konsultieren.

## Text-Eingabefelder

Text {{htmlelement("input")}} Felder sind die grundlegendsten Formular-Widgets. Sie sind eine sehr bequeme Möglichkeit, dem Benutzer die Eingabe beliebiger Daten zu ermöglichen, und wir haben bereits einige einfache Beispiele gesehen.

> [!NOTE]
> HTML-Formular-Textfelder sind einfache Klartext-Eingabesteuerungen. Das bedeutet, dass Sie sie nicht für die Bearbeitung von formatiertem Text (fett, kursiv usw.) verwenden können. Alle Rich-Text-Editoren, die Sie antreffen werden, sind benutzerdefinierte Widgets, die mit HTML, CSS und JavaScript erstellt wurden.

Alle grundlegenden Textsteuerungen teilen einige gemeinsame Verhaltensweisen:

- Sie können als [`readonly`](/de/docs/Web/HTML/Element/input#readonly) gekennzeichnet werden (der Benutzer kann den Eingabewert nicht ändern, aber er wird immer noch mit den restlichen Formulardaten gesendet) oder [`disabled`](/de/docs/Web/HTML/Element/input#disabled) (der Eingabewert kann nicht geändert werden und wird niemals mit den restlichen Formulardaten gesendet).
- Sie können einen [`placeholder`](/de/docs/Web/HTML/Element/input#placeholder) haben; dies ist der Text, der innerhalb des Text-Eingabefeldes erscheint und kurz den Zweck des Feldes beschreiben sollte.
- Sie können in [`size`](/de/docs/Web/HTML/Attributes/size) (die physische Größe des Feldes) und [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength) (die maximale Anzahl der einzugebenden Zeichen) eingeschränkt werden.
- Sie können von der Rechtschreibprüfung (unter Verwendung des [`spellcheck`](/de/docs/Web/HTML/Global_attributes/spellcheck) Attributs) profitieren.

> [!NOTE]
> Das {{htmlelement("input")}} Element ist einzigartig unter den HTML-Elementen, da es viele Formen annehmen kann, je nach dem Wert seines [`type`](/de/docs/Web/HTML/Element/input#type) Attributs. Es wird zur Erstellung der meisten Arten von Formular-Widgets verwendet, einschließlich einzeiliger Textfelder, Zeit- und Datumssteuerungen, Steuerungen ohne Texteingabe wie Kontrollkästchen, Optionsfelder und Farbauswähler, sowie Schaltflächen.

### Einzeilige Textfelder

Ein einzeiliges Textfeld wird mit einem {{HTMLElement("input")}}-Element erstellt, dessen [`type`](/de/docs/Web/HTML/Element/input#type) Attribut auf `text` gesetzt ist, oder indem das [`type`](/de/docs/Web/HTML/Element/input#type) Attribut ganz weggelassen wird (`text` ist der Standardwert). Der Wert `text` für dieses Attribut ist auch der Fallback-Wert, falls der von Ihnen angegebene Wert für das [`type`](/de/docs/Web/HTML/Element/input#type) Attribut vom Browser nicht erkannt wird (zum Beispiel, wenn Sie `type="color"` angeben und der Browser keine nativen Farbauswähler unterstützt).

> [!NOTE]
> Sie finden Beispiele für alle Arten von einzeiligen Textfeldern auf GitHub unter [single-line-text-fields.html](https://github.com/mdn/learning-area/blob/main/html/forms/native-form-widgets/single-line-text-fields.html) ([siehe es sich auch live an](https://mdn.github.io/learning-area/html/forms/native-form-widgets/single-line-text-fields.html)).

Hier ist ein grundlegendes Beispiel für ein einzeiliges Textfeld:

```html
<input type="text" id="comment" name="comment" value="I'm a text field" />
```

Einzeilige Textfelder haben nur eine wahre Einschränkung: Wenn Sie Text mit Zeilenumbrüchen eingeben, entfernt der Browser diese Zeilenumbrüche, bevor die Daten an den Server gesendet werden.

Der untenstehende Screenshot zeigt ein Texteingabefeld im Standard-, fokussierten und deaktivierten Zustand. Die meisten Browser kennzeichnen den fokussierten Zustand mit einem Fokus-Ring um die Steuerung und den deaktivierten Zustand mit grauem Text oder einer verblassten/halbtransparenten Steuerung.

![Screenshot des Text-Eingabefeldes im Standard-, fokussierten und deaktivierten Zustand in Chrome auf macOS](disabled.png)

Die in diesem Dokument verwendeten Screenshots wurden im Chrome-Browser auf macOS aufgenommen. Es kann zu geringfügigen Abweichungen in diesen Feldern/Schaltflächen zwischen verschiedenen Browsern kommen, aber die grundlegende Hervorhebungstechnik bleibt ähnlich.

> [!NOTE]
> Wir diskutieren Werte für das [`type`](/de/docs/Web/HTML/Element/input#type) Attribut, die spezielle Validierungsbedingungen durchsetzen, einschließlich Farb-, E-Mail- und URL-Eingabetypen, im nächsten Artikel, [Die HTML5-Input-Typen](/de/docs/Learn/Forms/HTML5_input_types).

#### Passwortfeld

Einer der ursprünglichen Eingabetypen war der `password` Textfeldtyp:

```html
<input type="password" id="pwd" name="pwd" />
```

Der folgende Screenshot zeigt ein Passwort-Eingabefeld, in dem jedes eingegebene Zeichen als Punkt angezeigt wird.

![Passwortfeld in chrome 115 auf macOS](password.png)

Der `password` Wert fügt keinen besonderen Einschränkungen für den eingegebenen Text hinzu, er verbirgt jedoch den in das Feld eingegebenen Wert (z.B. mit Punkten oder Sternchen), sodass er nicht leicht von anderen gelesen werden kann.

Bedenken Sie, dass dies nur eine Benutzeroberflächenfunktion ist; es sei denn, Sie senden Ihr Formular sicher, es wird im Klartext gesendet, was schlecht für die Sicherheit ist — eine böswillige Partei könnte Ihre Daten abfangen und Passwörter, Kreditkartendetails oder was auch immer Sie gesendet haben, stehlen. Der beste Weg, Benutzer davor zu schützen, ist es, alle Seiten mit Formularen über eine sichere Verbindung (d.h. unter einer `https://` Adresse) zu hosten, sodass die Daten verschlüsselt werden, bevor sie gesendet werden.

Browser erkennen die Sicherheitsimplikationen des Sendens von Formulardaten über eine unsichere Verbindung und haben Warnungen, um Benutzer von der Nutzung unsicherer Formulare abzuhalten. Weitere Informationen dazu, wie Firefox dies umsetzt, finden Sie unter [Unsichere Passwörter](/de/docs/Web/Security/Insecure_passwords).

### Verborgener Inhalt

Ein weiteres ursprüngliches Textelement ist der `hidden` Eingabetyp. Dieser wird verwendet, um ein Formularelement zu erstellen, das für den Benutzer unsichtbar ist, aber nach dem Absenden zusammen mit den anderen Formulardaten an den Server gesendet wird — zum Beispiel könnten Sie einen Zeitstempel an den Server senden wollen, der angibt, wann eine Bestellung aufgegeben wurde. Da es versteckt ist, kann der Benutzer den Wert weder sehen noch absichtlich ändern. Es wird niemals den Fokus erhalten, und auch ein Screenreader wird es nicht bemerken.

```html
<input type="hidden" id="timestamp" name="timestamp" value="1286705410" />
```

Wenn Sie ein solches Element erstellen, müssen Sie die Attribute `name` und `value` festlegen. Der Wert kann dynamisch über JavaScript gesetzt werden. Der `hidden` Eingabetyp sollte kein zugehöriges Label haben.

Andere Arten von Texteingaben, wie {{HTMLElement("input/search", "search")}}, {{HTMLElement("input/url", "url")}} und {{HTMLElement("input/tel", "tel")}}, werden im nächsten Tutorial behandelt, [HTML5 Eingabetypen](/de/docs/Learn/Forms/HTML5_input_types).

## Ankreuzbare Elemente: Kontrollkästchen und Optionsfelder

Ankreuzbare Elemente sind Steuerungen, deren Zustand Sie durch Klicken darauf oder auf ihre zugehörigen Labels ändern können. Es gibt zwei Arten von ankreuzbaren Elementen: das Kontrollkästchen und das Optionsfeld. Beide verwenden das [`checked`](/de/docs/Web/HTML/Element/input/checkbox#checked) Attribut, um anzuzeigen, ob das Widget standardmäßig aktiviert ist oder nicht.

Es ist erwähnenswert, dass diese Widgets nicht genau wie andere Formular-Widgets funktionieren. Bei den meisten Formular-Widgets werden beim Absenden des Formulars alle Widgets, die ein [`name`](/de/docs/Web/HTML/Element/input#name) Attribut besitzen, gesendet, selbst wenn kein Wert ausgefüllt wurde. Im Falle von ankreuzbaren Elementen werden ihre Werte nur gesendet, wenn sie aktiviert sind. Wenn sie nicht aktiviert sind, wird nichts gesendet, nicht einmal ihr Name. Wenn sie aktiviert sind, aber keinen Wert haben, wird der Name mit einem Wert von _on_ gesendet.

> [!NOTE]
> Sie finden die Beispiele aus diesem Abschnitt auf GitHub unter [checkable-items.html](https://github.com/mdn/learning-area/blob/main/html/forms/native-form-widgets/checkable-items.html) ([siehe es sich auch live an](https://mdn.github.io/learning-area/html/forms/native-form-widgets/checkable-items.html)).

Um maximale Benutzerfreundlichkeit/Barrierefreiheit zu gewährleisten, wird empfohlen, jede Liste von verwandten Elementen in einem {{htmlelement("fieldset")}} zu umgeben, mit einer {{htmlelement("legend")}}, die eine allgemeine Beschreibung der Liste bietet. Jedes einzelne Paar von {{htmlelement("label")}}/{{htmlelement("input")}} Elementen sollte in seinem eigenen Listenelement (oder ähnlichem) enthalten sein. Das zugehörige {{htmlelement('label')}} wird im Allgemeinen direkt vor oder nach dem Optionsfeld oder Kontrollkästchen platziert, wobei die Anweisungen für die Gruppe von Optionsfeldern oder Kontrollkästchen im Allgemeinen den Inhalt der {{htmlelement("legend")}} darstellen. Siehe die oben verlinkten Beispiele für Strukturexemplare.

### Kontrollkästchen

Ein Kontrollkästchen wird mit dem {{HTMLElement("input")}} Element erstellt, dessen [`type`](/de/docs/Web/HTML/Element/input#type) Attribut auf den Wert {{HTMLElement("input/checkbox", "checkbox")}} gesetzt ist.

```html
<input type="checkbox" id="questionOne" name="subscribe" value="yes" checked />
```

Verwandte Kontrollkästchen-Elemente sollten das gleiche [`name`](/de/docs/Web/HTML/Element/input#name) Attribut verwenden. Das Einfügen des [`checked`](/de/docs/Web/HTML/Element/input/checkbox#checked) Attributs aktiviert das Kontrollkästchen automatisch, wenn die Seite geladen wird. Durch Klicken auf das Kontrollkästchen oder das zugehörige Label wird das Kontrollkästchen ein- und ausgeschaltet.

```html
<fieldset>
  <legend>Wählen Sie alle Gemüse, die Sie gerne essen</legend>
  <ul>
    <li>
      <label for="carrots">Karotten</label>
      <input
        type="checkbox"
        id="carrots"
        name="vegetable"
        value="carrots"
        checked />
    </li>
    <li>
      <label for="peas">Erbsen</label>
      <input type="checkbox" id="peas" name="vegetable" value="peas" />
    </li>
    <li>
      <label for="cabbage">Kohl</label>
      <input type="checkbox" id="cabbage" name="vegetable" value="cabbage" />
    </li>
  </ul>
</fieldset>
```

Der folgende Screenshot zeigt Kontrollkästchen im Standard-, fokussierten und deaktivierten Zustand. Kontrollkästchen im Standard- und deaktivierten Zustand erscheinen aktiviert, während im fokussierten Zustand das Kontrollkästchen deaktiviert ist, mit einem Fokus-Ring darum.

![Standard-, fokussierte und deaktivierte Kontrollkästchen in chrome 115 auf macOS](checkboxes.png)

> [!NOTE]
> Alle Kontrollkästchen und Optionsfelder mit dem [`checked`](/de/docs/Web/HTML/Element/input/checkbox#checked) Attribut beim Laden entsprechen der {{cssxref(':default')}} Pseudoklasse, selbst wenn sie nicht mehr aktiv sind. Alle, die momentan aktiv sind, entsprechen der {{cssxref(':checked')}} Pseudoklasse.

Aufgrund der Ein-Aus-Natur von Kontrollkästchen wird das Kontrollkästchen als Kippschalter betrachtet, wobei viele Entwickler und Designer die Standard-Kontrollkästchen-Stilisierung erweitern, um Schaltflächen zu erstellen, die wie Kippschalter aussehen. Sie können [hier ein Beispiel in Aktion sehen](https://mdn.github.io/learning-area/html/forms/toggle-switch-example/) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/toggle-switch-example/index.html)).

### Optionsfeld

Ein Optionsfeld wird mit dem {{HTMLElement("input")}} Element erstellt, dessen [`type`](/de/docs/Web/HTML/Element/input#type) Attribut auf den Wert `radio` gesetzt ist:

```html
<input type="radio" id="soup" name="meal" value="soup" checked />
```

Mehrere Optionsfelder können miteinander verbunden werden. Wenn sie denselben Wert für ihr [`name`](/de/docs/Web/HTML/Element/input#name) Attribut teilen, werden sie als Teil derselben Gruppe von Schaltflächen betrachtet. Nur eine Schaltfläche in einer bestimmten Gruppe darf zur gleichen Zeit aktiviert sein; das bedeutet, dass, wenn eine von ihnen aktiviert wird, alle anderen automatisch deaktiviert werden. Wenn das Formular gesendet wird, wird nur der Wert des aktivierten Optionsfeldes gesendet. Wenn keine von ihnen aktiviert ist, wird der gesamte Pool von Optionsfeldern als in einem unbekannten Zustand betrachtet und kein Wert wird mit dem Formular gesendet. Sobald eines der Optionsfeldern in einer Name-geteilten Gruppe von Schaltflächen aktiviert ist, ist es nicht möglich, dass der Benutzer alle Schaltflächen deaktiviert, ohne das Formular zurückzusetzen.

```html
<fieldset>
  <legend>Was ist Ihre Lieblingsspeise?</legend>
  <ul>
    <li>
      <label for="soup">Suppe</label>
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

Der folgende Screenshot zeigt Standard- und deaktivierte Optionsfelder im aktivierten Zustand sowie ein fokussiertes Optionsfeld im deaktivierten Zustand.

![Standard-, fokussierte und deaktivierte Optionsfelder in chrome 115 auf macOS](radios.png)

## Tatsächliche Schaltflächen

Das Optionsfeld ist eigentlich keine Schaltfläche, trotz seines Namens; lassen Sie uns weitermachen und tatsächliche Schaltflächen betrachten! Es gibt drei Input-Typen, die Schaltflächen erzeugen:

- `submit`
  - : Sendet die Formulardaten an den Server. Für {{HTMLElement("button")}} Elemente führt das Weglassen des `type` Attributs (oder ein ungültiger Wert von `type`) zu einer Senden-Schaltfläche.
- `reset`
  - : Setzt alle Formular-Widgets auf ihre Standardwerte zurück.
- `button`
  - : Schaltflächen, die keinen automatischen Effekt haben, aber mit JavaScript-Code angepasst werden können.

Dann haben wir auch noch das {{htmlelement("button")}} Element selbst. Dieses kann ein `type` Attribut mit dem Wert `submit`, `reset` oder `button` annehmen, um das Verhalten der drei oben genannten `<input>` Typen zu simulieren. Der Hauptunterschied zwischen den beiden ist, dass tatsächliche `<button>` Elemente viel einfacher zu stilisieren sind.

```html
<input type="submit" value="Submit this form" />
<input type="reset" value="Reset this form" />
<input type="button" value="Do Nothing without JavaScript" />

<button type="submit">Submit this form</button>
<button type="reset">Reset this form</button>
<button type="button">Do Nothing without JavaScript</button>
```

```html hidden
<div class="buttondemo">
  <p>Verwendung von &lt;input></p>
  <p>
    <input type="submit" value="Submit this form" />
    <input type="reset" value="Reset this form" />
    <input type="button" value="Do Nothing without JavaScript" />
  </p>
  <p>Verwendung von &lt;button></p>
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
.buttondemo button,
.buttondemo input {
  all: revert;
}
```

{{ EmbedLiveSample('Actual_buttons', '500', '250') }}

> [!NOTE]
> Der `image` Eingabetyp wird auch als Schaltfläche gerendert. Wir werden das später auch behandeln.

> [!NOTE]
> Sie finden die Beispiele aus diesem Abschnitt auf GitHub unter [button-examples.html](https://github.com/mdn/learning-area/blob/main/html/forms/native-form-widgets/button-examples.html) ([siehe es sich auch live an](https://mdn.github.io/learning-area/html/forms/native-form-widgets/button-examples.html)).

Unten finden Sie Beispiele für jeden Schaltflächentyp `<input>`, zusammen mit dem entsprechenden `<button>` Typ.

### submit

```html
<button type="submit">Dies ist eine <strong>Senden-Schaltfläche</strong></button>

<input type="submit" value="Dies ist eine Senden-Schaltfläche" />
```

### reset

```html
<button type="reset">Dies ist eine <strong>Zurücksetz-Schaltfläche</strong></button>

<input type="reset" value="Dies ist eine Zurücksetz-Schaltfläche" />
```

### anonym

```html
<button type="button">Dies ist eine <strong>anonyme Schaltfläche</strong></button>

<input type="button" value="Dies ist eine anonyme Schaltfläche" />
```

Schaltflächen verhalten sich immer gleich, unabhängig davon, ob Sie ein {{HTMLElement("button")}} Element oder ein {{HTMLElement("input")}} Element verwenden. Wie Sie an den Beispielen sehen können, lassen {{HTMLElement("button")}} Elemente jedoch die Verwendung von HTML in ihrem Inhalt zu, der zwischen die öffnenden und schließenden `<button>`-Tags eingefügt wird. {{HTMLElement("input")}} Elemente hingegen sind {{glossary("void element", "void elements")}}; ihr angezeigter Inhalt wird im `value` Attribut eingefügt und akzeptiert daher nur Klartext als Inhalt.

Der folgende Screenshot zeigt eine Schaltfläche im Standard-, fokussierten und deaktivierten Zustand. Im fokussierten Zustand gibt es einen Fokus-Ring um die Schaltfläche, und im deaktivierten Zustand ist die Schaltfläche ausgegraut.

![Standard-, Fokus- und deaktivierte Zustände einer Schaltfläche in chrome 115 auf macOS](buttons.png)

### Bildschaltfläche

Das **Bildschaltflächen**-Steuerelement wird genau wie ein {{HTMLElement("img")}} Element gerendert, außer dass es, wenn der Benutzer darauf klickt, sich wie eine Senden-Schaltfläche verhält.

Eine Bildschaltfläche wird mit einem {{HTMLElement("input")}} Element erstellt, dessen [`type`](/de/docs/Web/HTML/Element/input#type) Attribut auf den Wert `image` gesetzt ist. Dieses Element unterstützt genau den gleichen Satz von Attributen wie das {{HTMLElement("img")}} Element, plus alle Attribute, die von anderen Formularschaltflächen unterstützt werden.

```html
<input type="image" alt="Click me!" src="my-img.png" width="80" height="30" />
```

Wenn die Bildschaltfläche zum Absenden des Formulars verwendet wird, übermittelt dieses Steuerelement nicht seinen Wert — stattdessen werden die X- und Y-Koordinaten des Klicks auf das Bild übermittelt (die Koordinaten sind relativ zum Bild, was bedeutet, dass die obere linke Ecke des Bildes die Koordinate (0, 0) darstellt). Die Koordinaten werden als zwei Schlüssel/Wert-Paare gesendet:

- Der X-Wert Schlüssel ist der Wert des [`name`](/de/docs/Web/HTML/Element/input#name) Attributs, gefolgt von dem String "_.x_".
- Der Y-Wert Schlüssel ist der Wert des [`name`](/de/docs/Web/HTML/Element/input#name) Attributs, gefolgt von dem String "_.y_".

Wenn Sie also z.B. auf das Bild bei der Koordinate (123, 456) klicken und es wird über die `get` Methode übermittelt, sehen Sie die Werte an die URL angehängt wie folgt:

```url
http://foo.com?pos.x=123&pos.y=456
```

Dies ist eine sehr bequeme Möglichkeit, eine "Hot Map" zu erstellen. Wie diese Werte gesendet und abgerufen werden, wird im Artikel [Formulardaten senden und abrufen](/de/docs/Learn/Forms/Sending_and_retrieving_form_data) detailliert beschrieben.

## Dateiauswahl

Es gibt einen letzten `<input>` Typ, der uns mit frühem HTML erreichte: den Dateiauswahltyp. Formulare können Dateien an einen Server senden (diese spezielle Aktion wird auch im Artikel [Formulardaten senden](/de/docs/Learn/Forms/Sending_and_retrieving_form_data) detailliert beschrieben). Das Dateiauswahl-Widget kann verwendet werden, um eine oder mehrere Dateien zum Senden auszuwählen.

Um ein [Dateiauswahl-Widget](/de/docs/Web/HTML/Element/input/file) zu erstellen, verwenden Sie das {{HTMLElement("input")}} Element mit seinem [`type`](/de/docs/Web/HTML/Element/input#type) Attribut auf `file` gesetzt. Die akzeptierten Dateitypen können mit dem [`accept`](/de/docs/Web/HTML/Element/input#accept) Attribut eingeschränkt werden. Darüber hinaus, wenn Sie dem Benutzer erlauben wollen, mehr als eine Datei auszuwählen, können Sie dies durch Hinzufügen des [`multiple`](/de/docs/Web/HTML/Element/input#multiple) Attributs tun.

### Beispiel

In diesem Beispiel wird ein Dateiauswahl-Widget erstellt, das nach grafischen Bilddateien fragt. Dem Benutzer ist es erlaubt, mehrere Dateien auszuwählen.

```html
<input type="file" name="file" id="file" accept="image/*" multiple />
```

Auf einigen Mobilgeräten kann die Dateiauswahl auf Fotos, Videos und Audio zugreifen, die direkt von der Kamera und dem Mikrofon des Geräts aufgenommen wurden, indem Erfassungsinformationen zum `accept` Attribut hinzugefügt werden, beispielsweise:

```html
<input type="file" accept="image/*;capture=camera" />
<input type="file" accept="video/*;capture=camcorder" />
<input type="file" accept="audio/*;capture=microphone" />
```

Der folgende Screenshot zeigt das Dateiauswahl-Widget im Standard-, Fokus- und deaktivierten Zustand, wenn keine Datei ausgewählt ist.

![Dateiauswahl-Widget im Standard-, Fokus- und deaktivierten Zustand in chrome 115 auf macOS](filepickers.png)

## Gemeinsame Attribute

Viele der Elemente, die zur Definition von Formularelementen verwendet werden, besitzen einige spezifische Attribute. Es gibt jedoch einen Satz von Attributen, die allen Formularelementen gemeinsam sind. Einige dieser haben Sie bereits kennengelernt, aber unten ist eine Liste dieser gemeinsamen Attribute zur Referenz:

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
        Dieses boolesche Attribut ermöglicht es Ihnen zu spezifizieren, dass das Element automatisch den Eingabefokus erhält, wenn die Seite geladen wird.
        Nur ein Formular-assoziiertes Element in einem Dokument kann dieses Attribut spezifiziert haben.
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
        Dieses boolesche Attribut zeigt an, dass der Benutzer nicht mit dem Element interagieren kann.
        Wenn dieses Attribut nicht spezifiziert ist, erbt das Element seine Einstellung vom umgebenden Element, zum Beispiel {{HTMLElement("fieldset")}};
        wenn es kein umgebendes Element mit dem gesetzten <code>disabled</code> Attribut gibt, dann ist das Element aktiviert.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Element/input#form">form</a></code>
      </td>
      <td></td>
      <td>
        Das <code>&#x3C;form></code> Element, mit dem das Widget verbunden ist, falls es nicht innerhalb dieses Formulars verschachtelt ist.
        Der Wert des Attributs muss dem <code>id</code> Attribut eines {{HTMLElement("form")}} Elements im selben Dokument entsprechen.
        Dies ermöglicht es Ihnen, ein Formularelement mit einem Formular zu verbinden, das sich außerhalb davon befindet, selbst wenn es sich innerhalb eines anderen Formularelements befindet.
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
      <td>Der anfängliche Wert des Elements.</td>
    </tr>
  </tbody>
</table>

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihr Wissen: Grundlegende Steuerungen](/de/docs/Learn/Forms/Test_your_skills:_Basic_controls).

## Zusammenfassung

Dieser Artikel hat die älteren Eingabetypen behandelt — den ursprünglichen Satz, der in den frühen Tagen von HTML eingeführt wurde und in allen Browsern gut unterstützt wird. Im nächsten Abschnitt werden wir uns die moderneren Werte des `type` Attributs ansehen.

{{PreviousMenuNext("Learn/Forms/How_to_structure_a_web_form", "Learn/Forms/HTML5_input_types", "Learn/Forms")}}

### Fortgeschrittene Themen

- [Wie man benutzerdefinierte Formularelemente erstellt](/de/docs/Learn/Forms/How_to_build_custom_form_controls)
- [Formulare über JavaScript senden](/de/docs/Learn/Forms/Sending_forms_through_JavaScript)
- [Eigenschaftskompatibilitäts-Tabelle für Formularelemente](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
