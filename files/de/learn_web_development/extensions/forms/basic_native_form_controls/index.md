---
title: Grundlagen der nativen Formularsteuerelemente
slug: Learn_web_development/Extensions/Forms/Basic_native_form_controls
l10n:
  sourceCommit: 2066cc916dfdcbb782340bf0ce562b230e947cba
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/How_to_structure_a_web_form", "Learn_web_development/Extensions/Forms/HTML5_input_types", "Learn_web_development/Extensions/Forms")}}

Im [vorherigen Artikel](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form) haben wir ein funktionales Webformular-Beispiel erstellt, einige Formularsteuerelemente und allgemeine Strukturelemente eingeführt und uns auf die besten Praktiken zur Barrierefreiheit konzentriert. Als nächstes werden wir die Funktionalität der verschiedenen Formularsteuerelemente oder Widgets im Detail betrachten und alle verschiedenen Optionen untersuchen, die zur Erfassung unterschiedlicher Datenarten verfügbar sind. In diesem speziellen Artikel werden wir uns die ursprüngliche Reihe von Formularsteuerelementen ansehen, die seit den frühen Tagen des Webs in allen Browsern verfügbar sind.

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
        Das ursprüngliche Set nativer Formular-Widgets, die in Browsern verfügbar sind, im Detail zu verstehen und zu lernen, wie man sie mit HTML implementiert.
      </td>
    </tr>
  </tbody>
</table>

Sie haben bereits einige Formularelemente kennengelernt, einschließlich {{HTMLelement('form')}}, {{HTMLelement('fieldset')}}, {{HTMLelement('legend')}}, {{HTMLelement('textarea')}}, {{HTMLelement('label')}}, {{HTMLelement('button')}} und {{HTMLelement('input')}}. Dieser Artikel behandelt:

- Die gängigen Eingabetypen {{HTMLelement('input/button', 'button')}}, {{HTMLelement('input/checkbox', 'checkbox')}}, {{HTMLelement('input/file', 'file')}}, {{HTMLelement('input/hidden', 'hidden')}}, {{HTMLelement('input/image', 'image')}}, {{HTMLelement('input/password', 'password')}}, {{HTMLelement('input/radio', 'radio')}}, {{HTMLelement('input/reset', 'reset')}}, {{HTMLelement('input/submit', 'submit')}} und {{HTMLelement('input/text', 'text')}}.
- Einige der Attribute, die allen Formularsteuerelementen gemeinsam sind.

> [!NOTE]
> Wir behandeln zusätzliche, leistungsfähigere Formularsteuerelemente in den nächsten beiden Artikeln. Wenn Sie eine fortgeschrittenere Referenz wünschen, sollten Sie unsere [HTML-Formular-Elementreferenz](/de/docs/Web/HTML/Reference/Elements#forms) konsultieren, insbesondere unsere ausführliche Referenz zu [`<input>`-Typen](/de/docs/Web/HTML/Reference/Elements/input).

## Text-Eingabefelder

Text-{{htmlelement("input")}}-Felder sind die grundlegendsten Formular-Widgets. Sie sind eine sehr bequeme Möglichkeit, dem Benutzer das Eingeben jeglicher Art von Daten zu ermöglichen, und wir haben bereits einige einfache Beispiele gesehen.

> [!NOTE]
> HTML-Formulartextfelder sind einfache Klartexteingabesteuerelemente. Das bedeutet, dass Sie sie nicht zur Bearbeitung von Rich Text (fett, kursiv, etc.) verwenden können. Alle Rich-Text-Editoren, die Sie antreffen, sind benutzerdefinierte Widgets, die mit HTML, CSS und JavaScript erstellt wurden.

Alle grundlegenden Textsteuerelemente teilen einige gemeinsame Verhaltensweisen:

- Sie können als [`readonly`](/de/docs/Web/HTML/Reference/Elements/input#readonly) (der Benutzer kann den Eingabewert nicht ändern, aber er wird trotzdem mit den restlichen Formulardaten gesendet) oder [`disabled`](/de/docs/Web/HTML/Reference/Elements/input#disabled) (der Eingabewert kann nicht geändert werden und wird niemals mit den restlichen Formulardaten gesendet) markiert werden.
- Sie können einen [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder) haben; das ist der Text, der im Text-Eingabefeld erscheint, um kurz den Zweck des Feldes zu beschreiben.
- Sie können in der [`size`](/de/docs/Web/HTML/Reference/Attributes/size) (der physischen Größe des Feldes) und der [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength) (der maximalen Anzahl von Zeichen, die in das Feld eingegeben werden können) beschränkt werden.
- Sie können von der Rechtschreibprüfung profitieren (mithilfe des [`spellcheck`](/de/docs/Web/HTML/Reference/Global_attributes/spellcheck)-Attributs).

> [!NOTE]
> Das {{htmlelement("input")}}-Element ist einzigartig unter den HTML-Elementen, da es abhängig vom Wert seines [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attributs viele Formen annehmen kann. Es wird zur Erstellung der meisten Arten von Formular-Widgets verwendet, einschließlich einzeiliger Textfelder, Zeit- und Datumskontrollen, Kontrollen ohne Texteingabe wie Kontrollkästchen, Optionsfelder und Farbwähler sowie Schaltflächen.

### Einzeilige Textfelder

Ein einzeiliges Textfeld wird mit einem {{HTMLElement("input")}}-Element erstellt, dessen [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attributwert auf [`text`](/de/docs/Web/HTML/Reference/Elements/input/text) gesetzt ist, oder indem das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut ganz weggelassen wird (`text` ist der Standardwert). Der Wert `text` für dieses Attribut ist auch der Fallback-Wert, wenn der Wert, den Sie für das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut angeben, vom Browser nicht erkannt wird (z.B. wenn Sie `type="color"` angeben und der Browser keine nativen Farbwähler unterstützt).

Hier ist ein einfaches Beispiel für einzeilige Textfelder:

```html live-sample___single-line
<input type="text" id="comment" name="comment" value="I'm a text field" />
```

Es wird folgendermaßen dargestellt:

{{embedlivesample("single-line", "100%", "80")}}

Einzeilige Textfelder haben nur eine echte Einschränkung: Wenn Sie Text mit Zeilenumbrüchen eingeben, entfernt der Browser diese Zeilenumbrüche, bevor die Daten an den Server gesendet werden.

Das untenstehende Screenshot zeigt eine Texteingabe in den Standard-, Fokus- und Deaktiviert-Zuständen. Die meisten Browser zeigen den Fokuszustand mit einem Fokusring um das Steuerelement an und den deaktivierten Zustand mit grauem Text oder einem verblassten/halbtransparenten Steuerelement.

![Screenshot der Text-Eingaben im Standard-, Fokus- und Deaktiviert-Zustand in Chrome auf macOS](disabled.png)

Die im Dokument verwendeten Screenshots wurden im Chrome-Browser auf macOS aufgenommen. Es können kleine Variationen in diesen Feldern/Schaltflächen über verschiedene Browser hinweg auftreten, aber die grundlegende Hervorhebungstechnik bleibt ähnlich.

> [!NOTE]
> Wir diskutieren Werte für das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut, die spezifische Validierungseinschränkungen durchsetzen, einschließlich der Eingabetypen für Farben, E-Mails und URLs, im nächsten Artikel, [Die HTML5 Eingabetypen](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types).

#### Passwortfeld

Einer der ursprünglichen Eingabetypen war der [`password`](/de/docs/Web/HTML/Reference/Elements/input/password)-Textfeldtyp:

```html live-sample___password
<input type="password" id="pwd" name="pwd" />
```

Dies wird ähnlich wie das einfache einzeilige Textfeld dargestellt:

{{embedlivesample("password", "100%", "80")}}

Versuchen Sie jedoch, in das Feld zu tippen — jedes eingegebene Zeichen wird als Punkt angezeigt.

Der `password`-Wert fügt dem eingegebenen Text keine speziellen Einschränkungen hinzu, verdeckt jedoch den in das Feld eingegebenen Wert, sodass er nicht leicht von anderen gelesen werden kann.

Denken Sie daran, dass dies nur ein Benutzeroberflächenmerkmal ist; es sei denn, Sie übermitteln Ihr Formular sicher, es wird im Klartext gesendet, was schlecht für die Sicherheit ist — eine böswillige Partei könnte Ihre Daten abfangen und Passwörter, Kreditkartendaten oder was auch immer Sie übermittelt haben, stehlen. Der beste Weg, Benutzer davor zu schützen, besteht darin, alle Seiten, die Formulare enthalten, über eine sichere Verbindung zu hosten (d.h. an einer `https://`-Adresse), sodass die Daten verschlüsselt werden, bevor sie gesendet werden.

Browser erkennen die Sicherheitsimplikationen von Formular-Datenübertragungen über eine unsichere Verbindung und haben Warnungen, um Benutzer davon abzuhalten, unsichere Formulare zu verwenden.

### Verborgener Inhalt

Ein weiteres ursprüngliches Textsteuerungselement ist der [`hidden`](/de/docs/Web/HTML/Reference/Elements/input/hidden)-Eingabetyp. Dieser wird verwendet, um ein Formular-Steuerelement zu erstellen, das für den Benutzer unsichtbar ist, aber dennoch zusammen mit den restlichen Formulardaten an den Server gesendet wird, sobald es übermittelt wird — zum Beispiel könnte man einen Zeitstempel an den Server senden, der angibt, wann eine Bestellung aufgegeben wurde. Da er verborgen ist, kann der Benutzer den Wert weder sehen noch absichtlich ändern, er wird nie fokussiert und ein Bildschirmlesegerät wird ihn ebenfalls nicht bemerken.

```html
<input type="hidden" id="timestamp" name="timestamp" value="1286705410" />
```

Wenn Sie ein solches Element erstellen, ist es erforderlich, seine `name`- und `value`-Attribute festzulegen. Der Wert kann dynamisch über JavaScript festgelegt werden. Der `hidden`-Eingabetyp sollte kein zugehöriges Label haben.

Andere Text-Eingabetypen wie {{HTMLElement("input/search", "search")}}, {{HTMLElement("input/url", "url")}} und {{HTMLElement("input/tel", "tel")}} werden im nächsten Tutorial behandelt, [HTML5 Eingabetypen](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types).

## Überprüfbare Elemente: Kontrollkästchen und Optionsfelder

Überprüfbare Elemente sind Steuerungen, deren Status Sie ändern können, indem Sie auf sie oder ihre zugehörigen Labels klicken. Es gibt zwei Arten von überprüfbaren Elementen: das Kontrollkästchen und das Optionsfeld. Beide verwenden das [`checked`](/de/docs/Web/HTML/Reference/Elements/input/checkbox#checked)-Attribut, um anzugeben, ob das Widget standardmäßig aktiviert ist oder nicht.

Es ist erwähnenswert, dass sich diese Widgets nicht genau wie andere Formularelemente verhalten. Bei den meisten Formularelementen werden, wenn das Formular übermittelt wird, alle Widgets, die ein [`name`](/de/docs/Web/HTML/Reference/Elements/input#name)-Attribut haben, gesendet, auch wenn kein Wert ausgefüllt wurde. Im Fall von überprüfbaren Elementen werden deren Werte nur gesendet, wenn sie aktiviert sind. Wenn sie nicht aktiviert sind, wird nichts gesendet, nicht einmal ihr Name. Wenn sie aktiviert sind, aber keinen Wert haben, wird der Name mit einem Wert von _on_ gesendet.

Für maximale Benutzerfreundlichkeit/Barrierefreiheit wird empfohlen, jede Liste verwandter Elemente in ein {{htmlelement("fieldset")}} zu verpacken, mit einem {{htmlelement("legend")}}, das eine allgemeine Beschreibung der Liste bietet. Jedes einzelne Paar von {{htmlelement("label")}}/{{htmlelement("input")}}-Elementen sollte in einem eigenen Listenelement (oder einem ähnlichen) enthalten sein. Das zugehörige {{htmlelement('label')}} wird im Allgemeinen unmittelbar vor oder nach dem Optionsfeld oder Kontrollkästchen platziert, wobei die Anweisungen für die Gruppe der Optionsfelder oder Kontrollkästchen im Allgemeinen der Inhalt des {{htmlelement("legend")}} sind.

### Kontrollkästchen

Ein Kontrollkästchen wird mit dem {{HTMLElement("input")}}-Element erstellt, dessen [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut auf den Wert [`checkbox`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) gesetzt ist.

```html
<input type="checkbox" id="questionOne" name="subscribe" value="yes" checked />
```

Verwandte Kontrollkästchenelemente sollten das gleiche [`name`](/de/docs/Web/HTML/Reference/Elements/input#name)-Attribut verwenden. Die Aufnahme des [`checked`](/de/docs/Web/HTML/Reference/Elements/input/checkbox#checked)-Attributs lässt das Kontrollkästchen beim Laden der Seite automatisch aktiviert erscheinen. Durch Klicken auf das Kontrollkästchen oder sein zugehöriges Label wird das Kontrollkästchen ein- und ausgeschaltet.

```html live-sample___checkbox
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

Dieses Beispiel wird folgendermaßen dargestellt:

{{embedlivesample("checkbox", "100%", "150")}}

Das folgende Screenshot zeigt Kontrollkästchen im Standard-, Fokus- und Deaktiviert-Zustand. Kontrollkästchen im Standard- und Deaktiviert-Zustand erscheinen aktiviert, während im Fokuszustand das Kontrollkästchen deaktiviert ist und ein Fokusring darum angezeigt wird.

![Standard-, Fokus- und Deaktiviert-Kontrollkästchen in Chrome 115 auf macOS](checkboxes.png)

> [!NOTE]
> Alle Kontrollkästchen und Optionsfelder mit dem [`checked`](/de/docs/Web/HTML/Reference/Elements/input/checkbox#checked)-Attribut beim Laden entsprechen der {{cssxref(':default')}}-Pseudoklasse, auch wenn sie nicht mehr aktiv sind. Alle, die derzeit aktiviert sind, entsprechen der {{cssxref(':checked')}}-Pseudoklasse.

Aufgrund der Ein-Aus-Natur von Kontrollkästchen wird das Kontrollkästchen als Umschaltknopf betrachtet, wobei viele Entwickler und Designer die Standard-Kontrollkästchenstyling erweitern, um Knöpfe zu erstellen, die wie Umschalter aussehen. Sie können [hier ein Beispiel in Aktion sehen](https://mdn.github.io/learning-area/html/forms/toggle-switch-example/) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/toggle-switch-example/index.html)).

### Optionsfeld

Ein Optionsfeld wird mit dem {{HTMLElement("input")}}-Element erstellt, dessen [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut auf den Wert [`radio`](/de/docs/Web/HTML/Reference/Elements/input/radio) gesetzt ist:

```html
<input type="radio" id="soup" name="meal" value="soup" checked />
```

Mehrere Optionsfelder können miteinander verknüpft werden. Wenn sie denselben Wert für ihr [`name`](/de/docs/Web/HTML/Reference/Elements/input#name)-Attribut teilen, werden sie als Teil derselben Gruppe von Schaltflächen betrachtet. Nur eine Schaltfläche in einer bestimmten Gruppe kann gleichzeitig aktiviert sein; das bedeutet, dass, wenn eine von ihnen aktiviert wird, alle anderen automatisch deaktiviert werden. Wenn das Formular gesendet wird, wird nur der Wert des aktivierten Optionsfelds gesendet. Wenn keiner von ihnen aktiviert ist, wird die gesamte Gruppe von Optionsfeldern als in einem unbekannten Zustand betrachtet und kein Wert wird mit dem Formular gesendet. Sobald eines der Optionsfelder in einer gleichnamigen Gruppe von Schaltflächen aktiviert ist, kann der Benutzer nicht mehr alle Schaltflächen deaktivieren, ohne das Formular zurückzusetzen.

```html live-sample___radio
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

Dieses Beispiel wird folgendermaßen dargestellt:

{{embedlivesample("radio", "100%", "150")}}

Das folgende Screenshot zeigt Standard- und deaktivierte Optionsfelder im aktivierten Zustand sowie eine fokussierte Optionsfeld im deaktivierten Zustand.

![Standard-, Fokus- und Deaktiviert-Optionsfelder in Chrome 115 auf macOS](radios.png)

## Tatsächliche Schaltflächen

Das Optionsfeld ist eigentlich keine Schaltfläche, trotz seines Namens; lassen Sie uns zu den tatsächlichen Schaltflächen übergehen! Es gibt drei Eingabetypen, die Schaltflächen erzeugen:

- [`submit`](/de/docs/Web/HTML/Reference/Elements/input/submit)
  - : Sendet die Formulardaten an den Server. Bei {{HTMLElement("button")}}-Elementen führt das Weglassen des `type`-Attributs (oder ein ungültiger Wert von `type`) zu einer Senden-Schaltfläche.
- [`reset`](/de/docs/Web/HTML/Reference/Elements/input/reset)
  - : Setzt alle Formularelemente auf ihre Standardwerte zurück.
- [`button`](/de/docs/Web/HTML/Reference/Elements/input/button)
  - : Schaltflächen, die keinen automatischen Effekt haben, aber mit JavaScript-Code angepasst werden können.

Dann haben wir auch noch das {{htmlelement("button")}}-Element selbst. Dies kann ein `type`-Attribut mit dem Wert `submit`, `reset` oder `button` haben, um das Verhalten der drei genannten `<input>`-Typen nachzuahmen. Der Hauptunterschied zwischen den beiden ist, dass tatsächliche `<button>`-Elemente viel leichter zu stylen sind.

```html live-sample___actual_buttons_ex
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
```

{{ EmbedLiveSample('actual_buttons_ex', '500', '250') }}

> [!NOTE]
> Der `image`-Eingabetyp wird ebenfalls als Schaltfläche dargestellt. Wir werden darauf später noch eingehen.

Im Folgenden finden Sie Beispiele für jeden `<input>`-Typ von Schaltflächen sowie den entsprechenden `<button>`-Typ. Jedes Paar wurde in ein {{htmlelement("div")}}-Element eingeschlossen, um es in eine neue Zeile zu trennen.

- Sende-Schaltfläche:

  ```html live-sample___buttons
  <div>
    <button type="submit">This is a <strong>submit button</strong></button>

    <input type="submit" value="This is a submit button" />
  </div>
  ```

- Rücksetztaste:

  ```html live-sample___buttons
  <div>
    <button type="reset">This is a <strong>reset button</strong></button>

    <input type="reset" value="This is a reset button" />
  </div>
  ```

- Anonyme Schaltfläche:

  ```html live-sample___buttons
  <div>
    <button type="button">This is an <strong>anonymous button</strong></button>

    <input type="button" value="This is an anonymous button" />
  </div>
  ```

Diese Beispiele werden folgendermaßen dargestellt:

{{embedlivesample("buttons", "100%", "150")}}

Schaltflächen verhalten sich immer gleich, unabhängig davon, ob Sie ein {{HTMLElement("button")}}-Element oder ein {{HTMLElement("input")}}-Element verwenden. Wie Sie aus den Beispielen sehen können, ermöglichen es {{HTMLElement("button")}}-Elemente jedoch, HTML in ihrem Inhalt zu verwenden, das zwischen den öffnenden und schließenden `<button>`-Tags eingefügt wird. {{HTMLElement("input")}}-Elemente hingegen sind {{Glossary("void_element", "void elements")}}; ihr angezeigter Inhalt wird in das `value`-Attribut eingefügt und akzeptiert daher nur Klartext als Inhalt.

Das folgende Screenshot zeigt eine Schaltfläche im Standard-, Fokus- und Deaktiviert-Zustand. Im Fokuszustand gibt es einen Fokusring um die Schaltfläche, und im deaktivierten Zustand ist die Schaltfläche ausgegraut.

![Standard-, Fokus- und Deaktiviert-Button-Zustände in Chrome 115 auf macOS](buttons.png)

### Bildschaltfläche

Das **Bildschaltfläche**-Steuerelement wird genau wie ein {{HTMLElement("img")}}-Element gerendert, außer dass es sich wie eine Senden-Schaltfläche verhält, wenn der Benutzer darauf klickt.

Eine Bildschaltfläche wird mit einem {{HTMLElement("input")}}-Element erstellt, dessen [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut auf den Wert [`image`](/de/docs/Web/HTML/Reference/Elements/input/image) gesetzt ist. Dieses Element unterstützt genau dieselbe Attributsmenge wie das {{HTMLElement("img")}}-Element, plus alle Attribute, die von anderen Formular-Schaltflächen unterstützt werden.

```html
<input type="image" alt="Click me!" src="my-img.png" width="80" height="30" />
```

Wenn die Bildschaltfläche verwendet wird, um das Formular zu senden, sendet dieses Steuerelement seinen Wert nicht — stattdessen werden die X- und Y-Koordinaten des Klicks auf das Bild übermittelt (die Koordinaten sind relativ zum Bild, was bedeutet, dass die obere linke Ecke des Bildes die Koordinate (0, 0) darstellt). Die Koordinaten werden als zwei Schlüssel-Wert-Paare gesendet:

- Der X-Wert-Schlüssel ist der Wert des [`name`](/de/docs/Web/HTML/Reference/Elements/input#name)-Attributs gefolgt von dem String "_.x_".
- Der Y-Wert-Schlüssel ist der Wert des [`name`](/de/docs/Web/HTML/Reference/Elements/input#name)-Attributs gefolgt von dem String "_.y_".

Wenn Sie also zum Beispiel auf das Bild bei der Koordinate (123, 456) klicken und es über die `get`-Methode gesendet wird, sehen Sie die Werte, die wie folgt an die URL angehängt werden:

```url
https://example.com?pos.x=123&pos.y=456
```

Dies ist eine sehr praktische Möglichkeit, eine "Hot Map" zu erstellen. Wie diese Werte gesendet und abgerufen werden, wird im Artikel [Senden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) erläutert.

## Dateiauswahl

Es gibt einen letzten `<input>`-Typ, der uns schon in den frühen HTML-Tagen gegeben wurde: den Dateieingabetyp. Formulare können Dateien an einen Server senden (diese spezielle Aktion wird ebenfalls im Artikel [Senden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) detailliert beschrieben). Das Dateiauswahl-Widget kann verwendet werden, um eine oder mehrere Dateien zum Senden auszuwählen.

Um ein [Dateiauswahl-Widget](/de/docs/Web/HTML/Reference/Elements/input/file) zu erstellen, verwenden Sie das {{HTMLElement("input")}}-Element mit seinem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut auf `file`. Die akzeptierten Dateitypen können durch das [`accept`](/de/docs/Web/HTML/Reference/Elements/input#accept)-Attribut eingeschränkt werden. Außerdem, wenn Sie dem Benutzer erlauben möchten, mehr als eine Datei auszuwählen, können Sie dies tun, indem Sie das [`multiple`](/de/docs/Web/HTML/Reference/Elements/input#multiple)-Attribut hinzufügen.

### Beispiel

In diesem Beispiel wird eine Dateiauswahl erstellt, die grafische Bilddateien anfordert. Der Benutzer darf in diesem Fall mehrere Dateien auswählen.

```html
<input type="file" name="file" id="file" accept="image/*" multiple />
```

Auf einigen mobilen Geräten kann der Dateiauswahl auf Fotos, Videos und Audio zugreifen, die direkt von der Kamera und dem Mikrofon des Geräts aufgenommen wurden, indem Capture-Informationen zum `accept`-Attribut hinzugefügt werden, so:

```html
<input type="file" accept="image/*;capture=camera" />
<input type="file" accept="video/*;capture=camcorder" />
<input type="file" accept="audio/*;capture=microphone" />
```

Das folgende Screenshot zeigt das Dateiauswahl-Widget im Standard-, Fokus- und Deaktiviert-Zustand, wenn keine Datei ausgewählt ist.

![Dateiauswahl-Widget im Standard-, Fokus- und Deaktiviert-Zustand in Chrome 115 auf macOS](filepickers.png)

## Gemeinsame Attribute

Viele der Elemente, die zur Definition von Formularsteuerelementen verwendet werden, haben einige ihrer eigenen spezifischen Attribute. Es gibt jedoch einen Satz von Attributen, die allen Formularelementen gemeinsam sind. Einige davon haben Sie bereits kennengelernt, aber unten finden Sie eine Liste dieser gemeinsamen Attribute zu Ihrer Referenz:

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
          ><a href="/de/docs/Web/HTML/Reference/Global_attributes/autofocus"
            >autofocus</a
          ></code
        >
      </td>
      <td>false</td>
      <td>
        Dieses boolesche Attribut erlaubt es Ihnen zu spezifizieren, dass das Element automatisch den Eingabefokus haben soll, wenn die Seite geladen wird.
        Nur ein formularassoziiertes Element in einem Dokument kann dieses Attribut spezifiziert haben.
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/de/docs/Web/HTML/Reference/Attributes/disabled">disabled</a></code
        >
      </td>
      <td>false</td>
      <td>
        Dieses boolesche Attribut gibt an, dass der Benutzer mit dem Element nicht interagieren kann.
        Wenn dieses Attribut nicht spezifiziert ist, erbt das Element seine Einstellung vom umgebenden Element, z.B. {{HTMLElement("fieldset")}};
        wenn kein umgebendes Element mit dem <code>disabled</code>-Attribut gesetzt ist, dann ist das Element aktiviert.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/input#form">form</a></code>
      </td>
      <td></td>
      <td>
        Das <code>&#x3C;form></code>-Element, dem das Widget zugeordnet ist, wird verwendet, wenn es nicht innerhalb dieses Formulars verschachtelt ist.
        Der Wert des Attributs muss der <code>id</code>-Attribut eines {{HTMLElement("form")}}-Elements im selben Dokument sein.
        Dies ermöglicht es Ihnen, ein Steuerungselement einem Formular zuzuordnen, in dem es sich außerhalb befindet, auch wenn es sich innerhalb eines anderen Formularelements befindet.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/input#name">name</a></code>
      </td>
      <td></td>
      <td>Der Name des Elements; dieser wird mit den Formulardaten übermittelt.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/input#value">value</a></code>
      </td>
      <td></td>
      <td>Der anfängliche Wert des Elements.</td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Dieser Artikel hat die älteren Eingabetypen behandelt — das ursprüngliche Set, das in den frühen Tagen von HTML eingeführt wurde und in allen Browsern gut unterstützt wird. Im nächsten Abschnitt werfen wir einen Blick auf die moderneren Werte des `type`-Attributs.

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/How_to_structure_a_web_form", "Learn_web_development/Extensions/Forms/HTML5_input_types", "Learn_web_development/Extensions/Forms")}}
