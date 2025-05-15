---
title: Grundlegende native Formularelemente
slug: Learn_web_development/Extensions/Forms/Basic_native_form_controls
l10n:
  sourceCommit: c05ef6211441aedb359d4020518ac152aa92db9e
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/How_to_structure_a_web_form", "Learn_web_development/Extensions/Forms/HTML5_input_types", "Learn_web_development/Extensions/Forms")}}

Im [vorherigen Artikel](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form) haben wir ein funktionales Webformular-Beispiel markiert, in dem einige Formularelemente und allgemeine Strukturelemente eingeführt wurden, mit einem Fokus auf Best Practices für Barrierefreiheit. Als Nächstes werden wir die Funktionalität der verschiedenen Formularelemente oder Widgets im Detail betrachten — wir untersuchen alle verschiedenen Optionen zur Erfassung unterschiedlicher Datentypen. In diesem speziellen Artikel betrachten wir die ursprüngliche Reihe von Formularelementen, die seit den frühen Tagen des Webs in allen Browsern verfügbar sind.

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
        Ein detailliertes Verständnis der ursprünglichen Reihe von nativen Formular-Widgets zu erreichen, die in Browsern zur Datenerfassung verfügbar sind, und wie man diese mit HTML implementiert.
      </td>
    </tr>
  </tbody>
</table>

Sie haben bereits einige Formularelemente kennengelernt, darunter {{HTMLelement('form')}}, {{HTMLelement('fieldset')}}, {{HTMLelement('legend')}}, {{HTMLelement('textarea')}}, {{HTMLelement('label')}}, {{HTMLelement('button')}} und {{HTMLelement('input')}}. Dieser Artikel behandelt:

- Die allgemeinen Eingabetypen {{HTMLelement('input/button', 'button')}}, {{HTMLelement('input/checkbox', 'checkbox')}}, {{HTMLelement('input/file', 'file')}}, {{HTMLelement('input/hidden', 'hidden')}}, {{HTMLelement('input/image', 'image')}}, {{HTMLelement('input/password', 'password')}}, {{HTMLelement('input/radio', 'radio')}}, {{HTMLelement('input/reset', 'reset')}}, {{HTMLelement('input/submit', 'submit')}} und {{HTMLelement('input/text', 'text')}}.
- Einige der Attribute, die allen Formularelementen gemeinsam sind.

> [!NOTE]
> Zusätzliche, leistungsstärkere Formularelemente behandeln wir in den nächsten beiden Artikeln. Wenn Sie eine fortgeschrittenere Referenz benötigen, sollten Sie unsere [HTML Formularelement-Referenz](/de/docs/Web/HTML/Reference/Elements#forms) konsultieren, insbesondere unsere ausführliche [`<input>` Typenreferenz](/de/docs/Web/HTML/Reference/Elements/input).

## Texteingabefelder

Text {{htmlelement("input")}} Felder sind die grundlegendsten Formular-Widgets. Sie sind eine sehr praktische Möglichkeit, dem Benutzer die Eingabe jeglicher Art von Daten zu ermöglichen, und wir haben bereits einige einfache Beispiele gesehen.

> [!NOTE]
> HTML-Formular-Textfelder sind einfache Klartext-Eingabekontrollen. Das bedeutet, dass Sie sie nicht zur Ausführung von Rich-Text-Bearbeitungen (fett, kursiv usw.) verwenden können. Alle Rich-Text-Editoren, die Sie treffen werden, sind benutzerdefinierte Widgets, die mit HTML, CSS und JavaScript erstellt wurden.

Alle grundlegenden Texteingabekontrollen teilen einige gemeinsame Verhaltensweisen:

- Sie können als [`readonly`](/de/docs/Web/HTML/Reference/Elements/input#readonly) (der Benutzer kann den Eingabewert nicht ändern, aber er wird dennoch mit den anderen Formulardaten gesendet) oder [`disabled`](/de/docs/Web/HTML/Reference/Elements/input#disabled) (der Eingabewert kann nicht geändert werden und wird nie mit den anderen Formulardaten gesendet) markiert werden.
- Sie können einen [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder) haben; dies ist der Text, der im Text-Eingabefeld erscheint, um kurz den Zweck des Feldes zu beschreiben.
- Sie können durch [`size`](/de/docs/Web/HTML/Reference/Attributes/size) (die physische Größe des Feldes) und [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength) (die maximale Anzahl an Zeichen, die in das Feld eingegeben werden können) eingeschränkt werden.
- Sie können von Rechtschreibprüfung profitieren (mithilfe des [`spellcheck`](/de/docs/Web/HTML/Reference/Global_attributes/spellcheck) Attributs).

> [!NOTE]
> Das {{htmlelement("input")}} Element ist einzigartig unter den HTML-Elementen, weil es viele Formen annehmen kann, abhängig von seinem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) Attributwert. Es wird verwendet, um die meisten Arten von Formular-Widgets zu erstellen, einschließlich einzeiliger Textfelder, Zeit- und Datumskontrollen, Kontrollen ohne Texteingabe wie Kontrollkästchen, Optionsfelder und Farbwähler sowie Schaltflächen.

### Einzeilige Textfelder

Ein einzeiliges Textfeld wird erstellt, indem ein {{HTMLElement("input")}} Element verwendet wird, dessen [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) Attributwert auf `text` gesetzt ist oder indem das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) Attribut ganz weggelassen wird (`text` ist der Standardwert). Der Wert `text` für dieses Attribut ist auch der Fallback-Wert, wenn der Wert, den Sie für das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) Attribut angeben, dem Browser unbekannt ist (zum Beispiel, wenn Sie `type="color"` angeben und der Browser native Farbwähler nicht unterstützt).

> [!NOTE]
> Sie können Beispiele aller einzeiligen Textfeldtypen auf GitHub unter [single-line-text-fields.html](https://github.com/mdn/learning-area/blob/main/html/forms/native-form-widgets/single-line-text-fields.html) finden ([siehe es auch live](https://mdn.github.io/learning-area/html/forms/native-form-widgets/single-line-text-fields.html)).

Hier ist ein einfaches Beispiel für ein einzeiliges Textfeld:

```html
<input type="text" id="comment" name="comment" value="I'm a text field" />
```

Einzeilige Textfelder haben nur eine echte Einschränkung: Wenn Sie Text mit Zeilenumbrüchen eingeben, entfernt der Browser diese Zeilenumbrüche, bevor die Daten an den Server gesendet werden.

Der folgende Screenshot zeigt ein Texteingabefeld im Standard-, fokussierten und deaktivierten Zustand. Die meisten Browser zeigen den fokussierten Zustand mit einem Fokusring um die Kontrolle an und den deaktivierten Zustand mit grauem Text oder einer verblassten/halbtransparenten Kontrolle.

![Screenshot des Texteingabefelds im Standard-, fokussierten und deaktivierten Zustand in Chrome auf macOS](disabled.png)

Die Screenshots in diesem Dokument wurden im Chrome-Browser auf macOS aufgenommen. Es kann kleinere Abweichungen in diesen Feldern/Schaltflächen in verschiedenen Browsern geben, aber die grundlegende Hervorhebungstechnik bleibt ähnlich.

> [!NOTE]
> Wir diskutieren Werte für das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) Attribut, die spezifische Validierungsbeschränkungen durchsetzen, einschließlich der Farbeingabe-, E-Mail- und URL-Eingabetypen im nächsten Artikel, [Die HTML5 Eingabetypen](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types).

#### Passwortfeld

Einer der ursprünglichen Eingabetypen ist der `password` Textfeldtyp:

```html
<input type="password" id="pwd" name="pwd" />
```

Der folgende Screenshot zeigt ein Passwort-Eingabefeld, in dem jedes Eingabezeichen als Punkt angezeigt wird.

![Passwortfeld in Chrome 115 auf macOS](password.png)

Der `password` Wert fügt den eingegebenen Texten keine speziellen Einschränkungen hinzu, aber er verdeckt den eingegebenen Wert im Feld (z.B. mit Punkten oder Sternchen), damit er nicht leicht von anderen gelesen werden kann.

Denken Sie daran, dass dies nur eine Benutzeroberflächenfunktion ist; es sei denn, Sie senden Ihr Formular sicher, wird es im Klartext gesendet, was schlecht für die Sicherheit ist — eine bösartige Partei könnte Ihre Daten abfangen und Passwörter, Kreditkartendaten oder was auch immer Sie gesendet haben, stehlen. Die beste Möglichkeit, Benutzer vor dieser Gefahr zu schützen, besteht darin, Seiten, die Formulare enthalten, über eine sichere Verbindung zu hosten (d.h. unter einer `https://` Adresse), damit die Daten vor dem Senden verschlüsselt werden.

Browser erkennen die Sicherheitsimplikationen des Sendens von Formulardaten über eine unsichere Verbindung und haben Warnungen, um Benutzer von der Verwendung unsicherer Formulare abzuschrecken. Weitere Informationen darüber, was Firefox implementiert, finden Sie unter [Unsichere Passwörter](/de/docs/Web/Security/Insecure_passwords).

### Versteckter Inhalt

Eine weitere ursprüngliche Textkontrolle ist der `hidden` Eingabetyp. Dieser wird verwendet, um eine Formulareingabe zu erstellen, die für den Benutzer unsichtbar ist, aber noch zusammen mit den anderen Formulardaten an den Server gesendet wird, sobald das Formular abgeschickt ist — zum Beispiel könnte man einen Zeitstempel an den Server senden, der angibt, wann eine Bestellung aufgegeben wurde. Da es versteckt ist, kann der Benutzer den Wert nicht sehen oder absichtlich ändern, es wird nie fokussiert und ein Screenreader bemerkt es auch nicht.

```html
<input type="hidden" id="timestamp" name="timestamp" value="1286705410" />
```

Wenn Sie ein solches Element erstellen, ist es erforderlich, seine `name` und `value` Attribute festzulegen. Der Wert kann dynamisch über JavaScript gesetzt werden. Der `hidden` Eingabetyp sollte kein zugehöriges Label haben.

Andere Texteingabetypen wie {{HTMLElement("input/search", "search")}}, {{HTMLElement("input/url", "url")}} und {{HTMLElement("input/tel", "tel")}} werden im nächsten Kurs behandelt, [HTML5 Eingabetypen](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types).

## Auswählbare Elemente: Kontrollkästchen und Optionsfelder

Auswählbare Elemente sind Kontrollen, deren Zustand Sie durch Anklicken dieser oder ihrer zugehörigen Labels ändern können. Es gibt zwei Arten von auswählbaren Elementen: das Kontrollkästchen und das Optionsfeld. Beide verwenden das [`checked`](/de/docs/Web/HTML/Reference/Elements/input/checkbox#checked) Attribut, um anzugeben, ob das Widget standardmäßig ausgewählt ist oder nicht.

Es ist erwähnenswert, dass diese Widgets nicht genau wie andere Formular-Widgets verhalten. Für die meisten Formular-Widgets, wenn das Formular eingereicht wird, werden alle Widgets, die ein [`name`](/de/docs/Web/HTML/Reference/Elements/input#name) Attribut haben, gesendet, auch wenn kein Wert ausgefüllt wurde. Im Fall von auswählbaren Elementen werden deren Werte nur gesendet, wenn sie ausgewählt sind. Sind sie nicht ausgewählt, wird nichts gesendet, nicht einmal deren Namen. Sind sie ausgewählt, haben aber keinen Wert, wird der Name mit einem Wert von _on_ gesendet.

> [!NOTE]
> Sie können die Beispiele aus diesem Abschnitt auf GitHub als [checkable-items.html](https://github.com/mdn/learning-area/blob/main/html/forms/native-form-widgets/checkable-items.html) finden ([siehe es auch live](https://mdn.github.io/learning-area/html/forms/native-form-widgets/checkable-items.html)).

Für maximale Benutzerfreundlichkeit/Barrierefreiheit wird empfohlen, jede Liste verwandter Elemente in einem {{htmlelement("fieldset")}} einzuschließen, mit einem {{htmlelement("legend")}}, das eine allgemeine Beschreibung der Liste bereitstellt. Jedes einzelne Paar von {{htmlelement("label")}}/{{htmlelement("input")}} Elementen sollte in einem eigenen Listenelement (oder ähnlichem) enthalten sein. Das zugehörige {{htmlelement('label')}} wird im Allgemeinen direkt vor oder nach dem Optionsfeld oder Kontrollkästchen platziert, wobei die Anweisungen für die Gruppe der Optionsfelder oder Kontrollkästchen im Allgemeinen der Inhalt des {{htmlelement("legend")}} sind. Beispiele für die Struktur finden Sie in den oben verlinkten Beispielen.

### Kontrollkästchen

Ein Kontrollkästchen wird erstellt, indem das {{HTMLElement("input")}} Element mit einem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) Attribut auf den Wert {{HTMLElement("input/checkbox", "checkbox")}} gesetzt wird.

```html
<input type="checkbox" id="questionOne" name="subscribe" value="yes" checked />
```

Verwandte Kontrollkästchen sollten dasselbe [`name`](/de/docs/Web/HTML/Reference/Elements/input#name) Attribut verwenden. Das Hinzufügen des [`checked`](/de/docs/Web/HTML/Reference/Elements/input/checkbox#checked) Attributs macht das Kontrollkästchen automatisch ausgewählt, wenn die Seite geladen wird. Das Anklicken des Kontrollkästchens oder seines zugehörigen Labels schaltet das Kontrollkästchen ein und aus.

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

Der folgende Screenshot zeigt Kontrollkästchen im Standard-, fokussierten und deaktivierten Zustand. Kontrollkästchen in den Standard- und deaktivierten Zuständen erscheinen ausgewählt, wohingegen im fokussierten Zustand das Kontrollkästchen deaktiviert ist, mit einem Fokusring darum.

![Standard-, fokussierter und deaktivierter Zustand von Kontrollkästchen in Chrome 115 auf macOS](checkboxes.png)

> [!NOTE]
> Alle Kontrollkästchen und Optionsfelder mit dem [`checked`](/de/docs/Web/HTML/Reference/Elements/input/checkbox#checked) Attribut beim Laden entsprechen der {{cssxref(':default')}} Pseudo-Klasse, auch wenn sie nicht mehr ausgewählt sind. Alle, die derzeit ausgewählt sind, entsprechen der {{cssxref(':checked')}} Pseudo-Klasse.

Aufgrund der Ein-Aus-Natur von Kontrollkästchen wird das Kontrollkästchen als Kippschalter betrachtet, wobei viele Entwickler und Designer den Standardstil des Kontrollkästchens erweitern, um Knöpfe zu erstellen, die wie Kippschalter aussehen. Sie können [ein Beispiel hier in Aktion sehen](https://mdn.github.io/learning-area/html/forms/toggle-switch-example/) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/toggle-switch-example/index.html)).

### Optionsfeld

Ein Optionsfeld wird erstellt, indem das {{HTMLElement("input")}} Element verwendet wird, mit dessen [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) Attribut auf den Wert `radio` gesetzt:

```html
<input type="radio" id="soup" name="meal" value="soup" checked />
```

Mehrere Optionsfelder können miteinander verbunden werden. Wenn sie denselben Wert für ihr [`name`](/de/docs/Web/HTML/Reference/Elements/input#name) Attribut teilen, werden sie als in derselben Gruppe von Schaltflächen betrachtet. Nur eine Schaltfläche in einer gegebenen Gruppe kann gleichzeitig ausgewählt werden; das bedeutet, dass, wenn eine von ihnen ausgewählt ist, alle anderen automatisch deaktiviert werden. Wenn das Formular gesendet wird, wird nur der Wert des ausgewählten Optionsfelds gesendet. Wenn keines von ihnen ausgewählt ist, wird die gesamte Gruppe von Optionsfeldern als in einem unbekannten Zustand betrachtet und es wird kein Wert mit dem Formular gesendet. Sobald eines der Optionsfelder in einer gleichnamigen Gruppe von Schaltflächen ausgewählt ist, ist es dem Benutzer nicht möglich, alle Schaltflächen zu deaktivieren, ohne das Formular zurückzusetzen.

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

Der folgende Screenshot zeigt standardmäßig und deaktivierte Optionsfelder im ausgewählten Zustand, zusammen mit einem fokussierten Optionsfeld im deaktivierten Zustand.

![Standard-, fokussierter und deaktivierter Zustand von Optionsfeldern in Chrome 115 auf macOS](radios.png)

## Tatsächliche Schaltflächen

Das Optionsfeld ist eigentlich keine Schaltfläche, trotz seines Namens; lassen Sie uns mit tatsächlichen Schaltflächen weitermachen! Es gibt drei Eingabetypen, die Schaltflächen produzieren:

- `submit`
  - : Sendet die Formulardaten an den Server. Bei {{HTMLElement("button")}} Elementen führt das Weglassen des `type` Attributs (oder ein ungültiger Wert von `type`) zu einer Übermittlungsschaltfläche.
- `reset`
  - : Setzt alle Formularelemente auf ihre Standardwerte zurück.
- `button`
  - : Schaltflächen, die keine automatische Wirkung haben, aber mittels JavaScript-Code angepasst werden können.

Dann haben wir auch das {{htmlelement("button")}} Element selbst. Dieses kann ein `type` Attribut mit den Werten `submit`, `reset` oder `button` annehmen, um das Verhalten der drei oben genannten `<input>` Typen zu imitieren. Der Hauptunterschied zwischen den beiden ist, dass tatsächliche `<button>` Elemente viel einfacher zu stylen sind.

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
> Der `image` Eingabetyp wird auch als Schaltfläche gerendert. Wir werden das später ebenfalls behandeln.

> [!NOTE]
> Sie können die Beispiele aus diesem Abschnitt auf GitHub als [button-examples.html](https://github.com/mdn/learning-area/blob/main/html/forms/native-form-widgets/button-examples.html) finden ([siehe es auch live](https://mdn.github.io/learning-area/html/forms/native-form-widgets/button-examples.html)).

Unten finden Sie Beispiele für jeden `<input>` Typ der Schaltfläche, zusammen mit dem äquivalenten `<button>` Typ.

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

Schaltflächen verhalten sich immer gleich, ob Sie ein {{HTMLElement("button")}} Element oder ein {{HTMLElement("input")}} Element verwenden. Wie Sie aus den Beispielen sehen können, ermöglichen {{HTMLElement("button")}} Elemente jedoch die Verwendung von HTML in ihrem Inhalt, der zwischen den öffnenden und schließenden `<button>` Tags eingefügt wird. {{HTMLElement("input")}} Elemente hingegen sind {{Glossary("void_element", "Void-Elemente")}}; ihr angezeigter Inhalt wird in das `value` Attribut eingefügt und akzeptiert daher nur Klartext als Inhalt.

Der folgende Screenshot zeigt eine Schaltfläche im Standardzustand, Fokussierungszustand und deaktivierten Zustand. Im Fokussierungszustand gibt es einen Fokusring um die Schaltfläche, und im deaktivierten Zustand ist die Schaltfläche ausgegraut.

![Standard-, Fokussier- und Deaktivierungszustand der Schaltfläche in Chrome 115 auf macOS](buttons.png)

### Bildschaltfläche

Die **Bildschaltfläche**-Kontrolle wird genau wie ein {{HTMLElement("img")}} Element gerendert, außer dass sie sich wie eine Übermittlungsschaltfläche verhält, wenn der Benutzer darauf klickt.

Eine Bildschaltfläche wird durch ein {{HTMLElement("input")}} Element erstellt, dessen [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) Attribut auf `image` gesetzt ist. Dieses Element unterstützt genau denselben Satz von Attributen wie das {{HTMLElement("img")}} Element, plus alle von anderen Formularschaltflächen unterstützten Attribute.

```html
<input type="image" alt="Click me!" src="my-img.png" width="80" height="30" />
```

Wenn die Bildschaltfläche verwendet wird, um das Formular zu senden, sendet diese Kontrolle ihren Wert nicht — stattdessen werden die X- und Y-Koordinaten des Klicks auf das Bild gesendet (die Koordinaten sind relativ zum Bild, was bedeutet, dass die obere linke Ecke des Bildes die Koordinate (0, 0) darstellt). Die Koordinaten werden als zwei Schlüssel/Wert-Paare gesendet:

- Der X-Wert-Schlüssel ist der Wert des [`name`](/de/docs/Web/HTML/Reference/Elements/input#name) Attributs gefolgt von der Zeichenfolge "_.x_".
- Der Y-Wert-Schlüssel ist der Wert des [`name`](/de/docs/Web/HTML/Reference/Elements/input#name) Attributs gefolgt von der Zeichenfolge "_.y_".

Wenn Sie also beispielsweise auf das Bild an der Koordinate (123, 456) klicken und es über die `get` Methode senden, werden Sie die Werte der URL folgendermaßen hinzugefügt sehen:

```url
http://foo.com?pos.x=123&pos.y=456
```

Dies ist eine sehr bequeme Art, eine "Hot Map" zu erstellen. Wie diese Werte gesendet und abgerufen werden, wird im Artikel [Formulardaten senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) im Detail beschrieben.

## Dateiauswahl

Es gibt einen letzten `<input>` Typ, der uns in frühem HTML erreichte: den Datei-Eingabetyp. Formulare können Dateien an einen Server senden (diese spezielle Aktion wird auch im Artikel [Formulardaten senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) im Detail beschrieben). Das Dateiauswahl-Widget kann verwendet werden, um eine oder mehrere Dateien zum Senden auszuwählen.

Um ein [Dateiauswahl-Widget](/de/docs/Web/HTML/Reference/Elements/input/file) zu erstellen, verwenden Sie das {{HTMLElement("input")}} Element mit dessen [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) Attribut auf `file` gesetzt. Die Arten von Dateien, die akzeptiert werden, können mittels des [`accept`](/de/docs/Web/HTML/Reference/Elements/input#accept) Attributs eingeschränkt werden. Wenn Sie zusätzlich möchten, dass der Benutzer mehr als eine Datei auswählen darf, können Sie dies mit dem [`multiple`](/de/docs/Web/HTML/Reference/Elements/input#multiple) Attribut tun.

### Beispiel

In diesem Beispiel wird eine Dateiauswahl erstellt, die Grafiken anfragt. In diesem Fall darf der Benutzer mehrere Dateien auswählen.

```html
<input type="file" name="file" id="file" accept="image/*" multiple />
```

Auf einigen mobilen Geräten kann der Dateiauswähler auf Fotos, Videos und Audio zugreifen, die direkt durch die Kamera und das Mikrofon des Geräts aufgenommen wurden, indem Erfassungsinformationen zum `accept` Attribut wie folgt hinzugefügt werden:

```html
<input type="file" accept="image/*;capture=camera" />
<input type="file" accept="video/*;capture=camcorder" />
<input type="file" accept="audio/*;capture=microphone" />
```

Der folgende Screenshot zeigt das Dateiauswahl-Widget im Standard-, Fokussierungs- und Deaktivierungszustand, wenn keine Datei ausgewählt ist.

![Dateiauswahl-Widget im Standard-, Fokussierungs- und Deaktivierungszustand in Chrome 115 auf macOS](filepickers.png)

## Gemeinsame Attribute

Viele der Elemente zur Definition von Formularelementen haben einige ihrer eigenen spezifischen Attribute. Es gibt jedoch einen Satz von Attributen, die allen Formularelementen gemeinsam sind. Einige davon sind Ihnen bereits begegnet, aber unten ist eine Liste dieser gemeinsamen Attribute für Ihre Referenz:

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
        Dieses boolesche Attribut ermöglicht Ihnen anzugeben, dass das Element beim Laden der Seite automatisch den Fokuss erlangen soll.
        Nur ein formularassziiertes Element in einem Dokument kann dieses Attribut spezifiziert haben.
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
        Dieses boolesche Attribut zeigt an, dass der Benutzer nicht mit dem Element interagieren kann.
        Wenn dieses Attribut nicht spezifiziert ist, erbt das Element seine Einstellung von dem enthaltenen Element, zum Beispiel {{HTMLElement("fieldset")}};
        wenn es kein enthaltendes Element mit dem <code>disabled</code> Attribut gibt, ist das Element aktiviert.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/input#form">form</a></code>
      </td>
      <td></td>
      <td>
        Das <code>&#x3C;form></code> Element, mit dem das Widget verbunden ist, wird verwendet, wenn es nicht innerhalb dieses Formulars verschachtelt ist.
        Der Wert des Attributs muss das <code>id</code> Attribut eines {{HTMLElement("form")}} Elements im selben Dokument sein.
        Dies ermöglicht es Ihnen, ein Formularelement mit einem Formular zu verbinden, dessen es nicht an sich außerh
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/input#name">name</a></code>
      </td>
      <td></td>
      <td>Der Name des Elements; dies wird mit den Formulardaten übermittelt.</td>
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

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihr Wissen: Grundlegende Kontrollen](/de/docs/Learn_web_development/Extensions/Forms/Test_your_skills/Basic_controls).

## Zusammenfassung

Dieser Artikel hat die älteren Eingabetypen behandelt — das ursprüngliche Set, das in den frühen Tagen von HTML eingeführt wurde und in allen Browsern gut unterstützt wird. Im nächsten Abschnitt werden wir uns die moderneren Werte des `type` Attributs ansehen.

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/How_to_structure_a_web_form", "Learn_web_development/Extensions/Forms/HTML5_input_types", "Learn_web_development/Extensions/Forms")}}
