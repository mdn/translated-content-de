---
title: Grundlegende native Formularelemente
slug: Learn_web_development/Extensions/Forms/Basic_native_form_controls
l10n:
  sourceCommit: d19dec85109590176f946fcceef48c787d578b1e
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/How_to_structure_a_web_form", "Learn_web_development/Extensions/Forms/HTML5_input_types", "Learn_web_development/Extensions/Forms")}}

Im [vorherigen Artikel](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form) haben wir ein funktionsfähiges Webformular-Beispiel erstellt, einige Formularelemente und allgemeine Strukturelemente eingeführt und uns auf die besten Praktiken zur Barrierefreiheit konzentriert. Als Nächstes werden wir die Funktionalität der verschiedenen Formularelemente oder Widgets im Detail betrachten - wir untersuchen alle verschiedenen Optionen, die zur Erfassung unterschiedlicher Datentypen zur Verfügung stehen. In diesem speziellen Artikel werfen wir einen Blick auf die ursprüngliche Reihe von Formularelementen, die seit den frühen Tagen des Webs in allen Browsern verfügbar sind.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegendes
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Verständnis von HTML</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>
        Das originelle Set an nativen Form-Widgets, die in Browsern zur
        Datensammlung verfügbar sind, im Detail verstehen und deren
        Implementierung mittels HTML kennenlernen.
      </td>
    </tr>
  </tbody>
</table>

Sie haben bereits einige Formularelemente kennengelernt, darunter {{HTMLelement('form')}}, {{HTMLelement('fieldset')}}, {{HTMLelement('legend')}}, {{HTMLelement('textarea')}}, {{HTMLelement('label')}}, {{HTMLelement('button')}}, und {{HTMLelement('input')}}. Dieser Artikel behandelt:

- Die allgemeinen Eingabetypen {{HTMLelement('input/button', 'button')}}, {{HTMLelement('input/checkbox', 'checkbox')}}, {{HTMLelement('input/file', 'file')}}, {{HTMLelement('input/hidden', 'hidden')}}, {{HTMLelement('input/image', 'image')}}, {{HTMLelement('input/password', 'password')}}, {{HTMLelement('input/radio', 'radio')}}, {{HTMLelement('input/reset', 'reset')}}, {{HTMLelement('input/submit', 'submit')}}, und {{HTMLelement('input/text', 'text')}}.
- Einige der Attribute, die allen Formularelementen gemeinsam sind.

> [!NOTE]
> Weitere, leistungsstärkere Formularelemente behandeln wir in den nächsten zwei Artikeln. Wenn Sie ein fortgeschritteneres Nachschlagewerk suchen, sollten Sie unser [HTML-Formularelement-Referenz](/de/docs/Web/HTML/Reference/Elements#forms) einsehen, insbesondere unsere umfangreiche [Referenz zu `<input>`-Typen](/de/docs/Web/HTML/Reference/Elements/input).

## Texteingabefelder

Text-{{htmlelement("input")}} Felder sind die grundlegendsten Form-Widgets. Sie sind eine sehr bequeme Möglichkeit, dem Benutzer die Eingabe aller Arten von Daten zu ermöglichen, und wir haben bereits einige einfache Beispiele gesehen.

> [!NOTE]
> HTML-Formulartextfelder sind einfache Klartexteingabesteuerungen. Das bedeutet, dass Sie sie nicht zum Ausführen von Rich-Text-Bearbeitung verwenden können (Fett, Kursiv usw.). Alle Rich-Text-Editoren, die Sie antreffen, sind benutzerdefinierte Widgets, die mit HTML, CSS und JavaScript erstellt wurden.

Alle grundlegenden Textfelder teilen einige gemeinsame Verhaltensweisen:

- Sie können als [`readonly`](/de/docs/Web/HTML/Reference/Elements/input#readonly) (der Benutzer kann den Eingabewert nicht ändern, aber er wird dennoch mit den restlichen Formulardaten gesendet) oder [`disabled`](/de/docs/Web/HTML/Reference/Elements/input#disabled) markiert werden (der Eingabewert kann nicht geändert werden und wird nie mit den restlichen Formulardaten gesendet).
- Sie können einen [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder) haben; dies ist der Text, der im Texteingabefeld erscheint und kurz den Zweck des Feldes beschreiben sollte.
- Sie können in ihrer [`size`](/de/docs/Web/HTML/Reference/Attributes/size) (die physische Größe des Feldes) und [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength) (die maximale Anzahl von Zeichen, die in das Feld eingegeben werden können) eingeschränkt sein.
- Sie können von der Rechtschreibprüfung profitieren (mittels des [`spellcheck`](/de/docs/Web/HTML/Reference/Global_attributes/spellcheck)-Attributs).

> [!NOTE]
> Das {{htmlelement("input")}}-Element ist einzigartig unter den HTML-Elementen, da es viele Formen annehmen kann, abhängig vom Wert seines [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attributs. Es wird zum Erstellen der meisten Form-Widgets verwendet, einschließlich einzeiliger Textfelder, Zeit- und Datumssteuerungen, Steuerungen ohne Texteingabe wie Kontrollkästchen, Optionsfelder und Farbwähler sowie Schaltflächen.

### Einzeilige Textfelder

Ein einzeiliges Textfeld wird mit einem {{HTMLElement("input")}}-Element erstellt, dessen [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attributwert auf [`text`](/de/docs/Web/HTML/Reference/Elements/input/text) gesetzt ist, oder durch Weglassen des [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attributs (der Standardwert ist `text`). Der Wert `text` für dieses Attribut ist auch der Fallback-Wert, wenn der von Ihnen für das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut angegebene Wert dem Browser unbekannt ist (zum Beispiel, wenn Sie `type="color"` angeben und der Browser keine nativen Farbwähler unterstützt).

Hier ist ein einfaches Beispiel für ein einzeiliges Textfeld:

```html live-sample___single-line
<input type="text" id="comment" name="comment" value="I'm a text field" />
```

Es wird folgendermaßen gerendert:

{{embedlivesample("single-line", "100%", "80")}}

Einzeilige Textfelder haben nur eine echte Einschränkung: Wenn Sie Text mit Zeilenumbrüchen eingeben, entfernt der Browser diese Zeilenumbrüche, bevor die Daten an den Server gesendet werden.

Der folgende Screenshot zeigt ein Texteingabefeld in den Standard-, fokussierten und deaktivierten Zuständen. Die meisten Browser zeigen den fokussierten Zustand mit einem Fokus-Ring um die Steuerung und den deaktivierten Zustand mit grauem Text oder einer verblassten/semi-opaken Steuerung.

![Screenshot der Standard-, Fokus- und deaktivierten Zustände des Texteingabefeldes in Chrome auf macOS](disabled.png)

Die in diesem Dokument verwendeten Screenshots wurden auf dem Chrome-Browser auf macOS aufgenommen. Es kann geringfügige Variationen bei diesen Feldern/Schaltflächen in verschiedenen Browsern geben, aber die grundlegende Hervorhebungstechnik bleibt ähnlich.

> [!NOTE]
> Wir besprechen die Werte für das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut, die spezifische Validierungsbeschränkungen erzwingen, einschließlich Farb-, E-Mail- und URL-Eingabetypen, im nächsten Artikel, [Die HTML5-Eingabetypen](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types).

#### Passwortfeld

Einer der ursprünglichen Eingabetypen war der [`password`](/de/docs/Web/HTML/Reference/Elements/input/password)-Textfeldtyp:

```html live-sample___password
<input type="password" id="pwd" name="pwd" />
```

Dies wird ähnlich wie das grundlegende einzeilige Textfeld gerendert:

{{embedlivesample("password", "100%", "80")}}

Versuchen Sie jedoch, in das Feld zu tippen - jedes eingegebene Zeichen wird als Punkt angezeigt.

Der `password`-Wert fügt dem eingegebenen Text keine besonderen Beschränkungen hinzu, aber er verschleiert den in das Feld eingegebenen Wert, sodass er von anderen nicht leicht gelesen werden kann.

Denken Sie daran, dass dies nur eine Benutzeroberflächenfunktion ist; es sei denn, Sie senden Ihr Formular sicher, wird es im Klartext gesendet, was schlecht für die Sicherheit ist - eine böswillige Partei könnte Ihre Daten abfangen und Passwörter, Kreditkartendetails oder was auch immer Sie eingereicht haben, stehlen. Der beste Weg, Benutzer davor zu schützen, ist, Seiten mit Formularen über eine sichere Verbindung (d.h. bei einer `https://`-Adresse) zu hosten, damit die Daten vor dem Senden verschlüsselt werden.

Browser erkennen die Sicherheitsimplikationen des Sendens von Formulardaten über eine unsichere Verbindung und haben Warnungen, um Benutzer davon abzuhalten, unsichere Formulare zu verwenden.

### Versteckte Inhalte

Ein weiteres ursprüngliches Texteingabeelement ist der [`hidden`](/de/docs/Web/HTML/Reference/Elements/input/hidden)-Eingabetyp. Dies wird verwendet, um eine Formsteuerung zu erstellen, die für den Benutzer unsichtbar ist, aber dennoch an den Server gesendet wird, wenn das Formular gesendet wird - zum Beispiel könnten Sie einen Zeitstempel an den Server senden wollen, der angibt, wann eine Bestellung aufgegeben wurde. Da es versteckt ist, kann der Benutzer es nicht sehen oder absichtlich bearbeiten, es erhält niemals den Fokus, und ein Screenreader wird es auch nicht wahrnehmen.

```html
<input type="hidden" id="timestamp" name="timestamp" value="1286705410" />
```

Wenn Sie ein solches Element erstellen, müssen Sie seine `name`- und `value`-Attribute setzen. Der Wert kann dynamisch über JavaScript gesetzt werden. Dem `hidden`-Eingabetyp sollte kein zugehöriges Label hinzugefügt werden.

Andere Texteingabetypen wie {{HTMLElement("input/search", "search")}}, {{HTMLElement("input/url", "url")}}, und {{HTMLElement("input/tel", "tel")}}, werden im nächsten Tutorial behandelt, [HTML5-Eingabetypen](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types).

## Prüfbare Elemente: Kontrollkästchen und Optionsfelder

Prüfbare Elemente sind Steuerungen, deren Zustand Sie ändern können, indem Sie darauf oder auf ihre zugehörigen Labels klicken. Es gibt zwei Arten von prüfbaren Elementen: das Kontrollkästchen und das Optionsfeld. Beide verwenden das [`checked`](/de/docs/Web/HTML/Reference/Elements/input/checkbox#checked)-Attribut, um anzuzeigen, ob das Widget standardmäßig aktiviert ist oder nicht.

Es ist erwähnenswert, dass sich diese Widgets nicht genau wie andere Formelelemente verhalten. Bei den meisten Formelelementen werden, sobald das Formular gesendet wird, alle Widgets, die ein [`name`](/de/docs/Web/HTML/Reference/Elements/input#name)-Attribut haben, gesendet, auch wenn kein Wert ausgefüllt wurde. Im Fall prüfbarer Elemente werden ihre Werte nur gesendet, wenn sie aktiviert sind. Wenn sie nicht aktiviert sind, wird nichts gesendet, nicht einmal ihr Name. Wenn sie aktiviert sind, aber keinen Wert haben, wird der Name mit einem Wert von _on_ gesendet.

Für maximale Benutzerfreundlichkeit/Barrierefreiheit wird empfohlen, jede Liste verwandter Elemente in ein {{htmlelement("fieldset")}} zu setzen, mit einem {{htmlelement("legend")}}, das eine allgemeine Beschreibung der Liste bietet. Jedes einzelne Paar von {{htmlelement("label")}}/{{htmlelement("input")}}-Elementen sollte in sein eigenes Listenelement (oder ähnliches) eingeschlossen werden. Das zugehörige {{htmlelement('label')}} wird in der Regel direkt vor oder nach dem Optionsfeld oder Kontrollkästchen platziert, wobei die Anweisungen für die Gruppe von Optionsfeldern oder Kontrollkästchen im Allgemeinen der Inhalt des {{htmlelement("legend")}} sind.

### Kontrollkästchen

Ein Kontrollkästchen wird mit dem {{HTMLElement("input")}}-Element erstellt, wobei das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut auf den Wert [`checkbox`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) gesetzt ist.

```html
<input type="checkbox" id="questionOne" name="subscribe" value="yes" checked />
```

Verwandte Kontrollkästchen-Elemente sollten dasselbe [`name`](/de/docs/Web/HTML/Reference/Elements/input#name)-Attribut verwenden. Das Einschließen des [`checked`](/de/docs/Web/HTML/Reference/Elements/input/checkbox#checked)-Attributs aktiviert das Kontrollkästchen automatisch, wenn die Seite geladen wird. Durch Klicken auf das Kontrollkästchen oder sein zugehöriges Label wird das Kontrollkästchen ein- und ausgeschaltet.

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

Dieses Beispiel wird so gerendert:

{{embedlivesample("checkbox", "100%", "150")}}

Der folgende Screenshot zeigt Kontrollkästchen in den Standard-, fokussierten und deaktivierten Zuständen. Kontrollkästchen in den Standard- und deaktivierten Zuständen erscheinen aktiviert, während im fokussierten Zustand das Kontrollkästchen deaktiviert ist, mit einem Fokus-Ring darum.

![Standard-, Fokus- und deaktivierte Kontrollkästchen in Chrome 115 auf macOS](checkboxes.png)

> [!NOTE]
> Alle Kontrollkästchen und Optionsfelder mit dem beim Laden gesetzten [`checked`](/de/docs/Web/HTML/Reference/Elements/input/checkbox#checked)-Attribut entsprechen der {{cssxref(':default')}}-Pseudoklasse, auch wenn sie nicht mehr aktiviert sind. Alle, die gerade aktiv sind, entsprechen der {{cssxref(':checked')}}-Pseudoklasse.

Aufgrund der Ein-Aus-Natur von Kontrollkästchen wird das Kontrollkästchen als Umschaltknopf angesehen, wobei viele Entwickler und Designer die Standardkontrollkästchen-Styling erweitern, um Schaltflächen zu schaffen, die wie Umschalter aussehen. Sie können [hier ein Beispiel in Aktion sehen](https://mdn.github.io/learning-area/html/forms/toggle-switch-example/) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/toggle-switch-example/index.html)).

### Optionsfeld

Ein Optionsfeld wird mit dem {{HTMLElement("input")}}-Element erstellt, dessen [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut auf den Wert [`radio`](/de/docs/Web/HTML/Reference/Elements/input/radio) gesetzt ist:

```html
<input type="radio" id="soup" name="meal" value="soup" checked />
```

Mehrere Optionsfelder können miteinander verbunden werden. Wenn sie denselben Wert für ihr [`name`](/de/docs/Web/HTML/Reference/Elements/input#name)-Attribut haben, gelten sie als Teil derselben Gruppe von Schaltflächen. Nur eine Schaltfläche in einer bestimmten Gruppe darf gleichzeitig aktiviert sein; dies bedeutet, dass, wenn eine von ihnen aktiviert ist, alle anderen automatisch deaktiviert werden. Wenn das Formular gesendet wird, wird nur der Wert der aktivierten Optionsschaltfläche gesendet. Wenn keine von ihnen aktiviert ist, wird der gesamte Pool an Optionsfeldern als in einem unbekannten Zustand befindlich betrachtet und es wird kein Wert mit dem Formular gesendet. Wenn eine der gleichnamigen Gruppen-Optionsfelder aktiviert ist, kann der Benutzer nicht alle Knöpfe deaktivieren, ohne das Formular zurückzusetzen.

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

Dieses Beispiel wird so gerendert:

{{embedlivesample("radio", "100%", "150")}}

Der folgende Screenshot zeigt Standard- und deaktivierte Optionsfelder im aktivierten Zustand sowie ein fokussiertes Optionsfeld im deaktivierten Zustand.

![Standard-, Fokus- und deaktivierte Optionsfelder in Chrome 115 auf macOS](radios.png)

## Tatsächliche Schaltflächen

Die Optionsschaltfläche ist trotz ihres Namens eigentlich keine Schaltfläche; lassen Sie uns weitermachen und uns tatsächliche Schaltflächen ansehen! Es gibt drei Eingabetypen, die Schaltflächen erzeugen:

- [`submit`](/de/docs/Web/HTML/Reference/Elements/input/submit)
  - : Sendet die Formulardaten an den Server. Bei {{HTMLElement("button")}}-Elementen führt das Weglassen des `type`-Attributs (oder ein ungültiger Wert von `type`) zu einer Submit-Schaltfläche.
- [`reset`](/de/docs/Web/HTML/Reference/Elements/input/reset)
  - : Setzt alle Formularelemente auf ihre Standardwerte zurück.
- [`button`](/de/docs/Web/HTML/Reference/Elements/input/button)
  - : Schaltflächen, die keine automatische Wirkung haben, aber mit JavaScript-Code angepasst werden können.

Dann haben wir auch das {{htmlelement("button")}}-Element selbst. Dieses kann ein `type`-Attribut mit dem Wert `submit`, `reset` oder `button` haben, um das Verhalten der drei oben genannten `<input>`-Typen nachzuahmen. Der Hauptunterschied zwischen den beiden ist, dass eigentliche `<button>`-Elemente viel einfacher zu stylen sind.

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
> Der `image`-Eingabetyp wird ebenfalls als Schaltfläche gerendert. Wir werden das später ebenfalls behandeln.

Nachfolgend finden Sie Beispiele für jeden `<input>`-Schaltflächentyp sowie den entsprechenden `<button>`-Typ. Jedes Paar wurde in ein {{htmlelement("div")}}-Element eingefügt, um es in eine neue Zeile zu trennen.

- Submit-Schaltfläche:

  ```html live-sample___buttons
  <div>
    <button type="submit">This is a <strong>submit button</strong></button>

    <input type="submit" value="This is a submit button" />
  </div>
  ```

- Reset-Schaltfläche:

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

Diese Beispiele werden wie folgt gerendert:

{{embedlivesample("buttons", "100%", "150")}}

Schaltflächen verhalten sich immer gleich, unabhängig davon, ob Sie ein {{HTMLElement("button")}}-Element oder ein {{HTMLElement("input")}}-Element verwenden. Wie Sie jedoch aus den Beispielen ersehen können, ermöglichen {{HTMLElement("button")}}-Elemente die Verwendung von HTML in ihrem Inhalt, der zwischen dem öffnenden und schließenden `<button>`-Tag eingefügt wird. {{HTMLElement("input")}}-Elemente hingegen sind {{Glossary("void_element", "void-Elemente")}}; ihr angezeigter Inhalt wird im `value`-Attribut eingefügt und akzeptiert daher nur Klartext als Inhalt.

Der folgende Screenshot zeigt eine Schaltfläche in den Standard-, fokussierten und deaktivierten Zuständen. Im fokussierten Zustand befindet sich ein Fokus-Ring um die Schaltfläche und im deaktivierten Zustand ist die Schaltfläche ausgegraut.

![Standard-, Fokus- und deaktivierte Schaltflächenzustände in Chrome 115 auf macOS](buttons.png)

### Bildschaltfläche

Die **Bildschaltfläche**-Steuerung wird genau wie ein {{HTMLElement("img")}}-Element gerendert, außer dass sie, wenn der Benutzer darauf klickt, sich wie eine Submit-Schaltfläche verhält.

Eine Bildschaltfläche wird mit einem {{HTMLElement("input")}}-Element erstellt, dessen [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut auf den Wert [`image`](/de/docs/Web/HTML/Reference/Elements/input/image) gesetzt ist. Dieses Element unterstützt genau die gleiche Menge an Attributen wie das {{HTMLElement("img")}}-Element sowie alle von anderen Schaltflächen unterstützten Attribute.

```html
<input type="image" alt="Click me!" src="my-img.png" width="80" height="30" />
```

Wenn die Bildschaltfläche verwendet wird, um das Formular zu übermitteln, sendet diese Steuerung nicht ihren Wert - stattdessen werden die X- und Y-Koordinaten des Klicks auf das Bild gesendet (die Koordinaten sind relativ zum Bild, was bedeutet, dass die obere linke Ecke des Bildes die Koordinate (0, 0) darstellt). Die Koordinaten werden als zwei Schlüssel/Wert-Paare gesendet:

- Der X-Wert-Schlüssel ist der Wert des [`name`](/de/docs/Web/HTML/Reference/Elements/input#name)-Attributs gefolgt von dem String "_.x_".
- Der Y-Wert-Schlüssel ist der Wert des [`name`](/de/docs/Web/HTML/Reference/Elements/input#name)-Attributs gefolgt von dem String "_.y_".

Wenn Sie also auf das Bild bei der Koordinate (123, 456) klicken und es per `get`-Methode übermitteln, werden die Werte wie folgt an die URL angehängt:

```url
https://example.com?pos.x=123&pos.y=456
```

Dies ist ein sehr praktischer Weg, um eine "Hot Map" zu erstellen. Wie diese Werte gesendet und abgerufen werden, wird im Artikel [Formulardaten senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) detailliert beschrieben.

## Dateiauswahl

Es gibt einen letzten `<input>`-Typ, der uns in frühen HTML-Versionen zur Verfügung gestellt wurde: den Dateieingabetyp. Formulare können Dateien an einen Server senden (diese spezielle Aktion wird ebenfalls im Artikel [Formulardaten senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) beschrieben). Das Dateiauswahl-Widget kann verwendet werden, um eine oder mehrere Dateien zur Übermittlung auszuwählen.

Um ein [Dateiauswahl-Widget](/de/docs/Web/HTML/Reference/Elements/input/file) zu erstellen, verwenden Sie das {{HTMLElement("input")}}-Element mit seinem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut, das auf `file` gesetzt ist. Die Arten von akzeptierten Dateien können mit dem [`accept`](/de/docs/Web/HTML/Reference/Elements/input#accept)-Attribut eingeschränkt werden. Wenn Sie außerdem den Benutzer mehr als eine Datei auswählen lassen möchten, können Sie dies tun, indem Sie das [`multiple`](/de/docs/Web/HTML/Reference/Elements/input#multiple)-Attribut hinzufügen.

### Beispiel

In diesem Beispiel wird ein Dateiauswahl-Widget erstellt, das grafische Bilddateien anfordert. Der Benutzer darf in diesem Fall mehrere Dateien auswählen.

```html
<input type="file" name="file" id="file" accept="image/*" multiple />
```

Auf einigen mobilen Geräten kann der Dateiauswähler auf Fotos, Videos und direkt durch die Kamera und das Mikrofon des Geräts aufgenommene Audiodaten zugreifen, indem Capture-Informationen zum `accept`-Attribut hinzugefügt werden:

```html
<input type="file" accept="image/*;capture=camera" />
<input type="file" accept="video/*;capture=camcorder" />
<input type="file" accept="audio/*;capture=microphone" />
```

Der folgende Screenshot zeigt das Dateiauswahl-Widget in den Standard-, Fokus- und deaktivierten Zuständen, wenn keine Datei ausgewählt ist.

![Dateiauswahl-Widget in den Standard-, Fokus- und deaktivierten Zuständen in Chrome 115 auf macOS](filepickers.png)

## Allgemeine Attribute

Viele der zur Definition von Formularelementen verwendeten Elemente haben einige ihrer eigenen spezifischen Attribute. Es gibt jedoch eine Reihe von Attributen, die allen Formelementen gemeinsam sind. Einige davon sind Ihnen bereits begegnet, aber unten finden Sie eine Liste dieser allgemeinen Attribute, als Referenz:

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
        Dieses boolesche Attribut erlaubt Ihnen anzugeben, dass das Element automatisch den Eingabefokus haben soll, wenn die Seite geladen wird.
        Nur ein Form-feld-assoziiertes Element in einem Dokument kann dieses Attribut spezifiziert haben.
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
        Dieses boolesche Attribut gibt an, dass der Benutzer nicht mit dem Element interagieren kann.
        Wenn dieses Attribut nicht angegeben ist, übernimmt das Element seine Einstellung vom umgebenden Element, z.B. {{HTMLElement("fieldset")}};
        wenn es kein umgebendes Element mit dem auf `disabled` gesetzten Attribut gibt, ist das Element aktiviert.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/input#form">form</a></code>
      </td>
      <td></td>
      <td>
        Das <code>&#x3C;form></code>-Element, mit dem das Widget verbunden ist, wird verwendet, wenn es nicht innerhalb dieses Formulars verschachtelt ist.
        Der Wert des Attributs muss das <code>id</code>-Attribut eines {{HTMLElement("form")}}-Elements im selben Dokument sein.
        Dadurch können Sie ein Formelelement mit einem Formular außerhalb davon verknüpfen, auch wenn es sich innerhalb eines anderen Formularelements befindet.
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

Dieser Artikel hat die älteren Eingabetypen behandelt - das originale Set, das in den frühen Tagen von HTML eingeführt wurde und in allen Browsern gut unterstützt wird. Im nächsten Abschnitt werfen wir einen Blick auf die moderneren Werte des `type`-Attributs.

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/How_to_structure_a_web_form", "Learn_web_development/Extensions/Forms/HTML5_input_types", "Learn_web_development/Extensions/Forms")}}
