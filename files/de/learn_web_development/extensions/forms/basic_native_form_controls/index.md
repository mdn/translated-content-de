---
title: Grundlegende native Formularelemente
slug: Learn_web_development/Extensions/Forms/Basic_native_form_controls
l10n:
  sourceCommit: a1ac64fa4da965d2a152f08221b1a9aed638fd16
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/How_to_structure_a_web_form", "Learn_web_development/Extensions/Forms/HTML5_input_types", "Learn_web_development/Extensions/Forms")}}

Im [vorherigen Artikel](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form) haben wir ein funktionales Webformular-Beispiel markiert, einige Formularelemente und übliche Strukturelemente eingeführt und uns auf bewährte Praktiken zur Barrierefreiheit konzentriert. Als nächstes werden wir die Funktionalität der verschiedenen Formularelemente oder Widgets im Detail betrachten – und alle verschiedenen Optionen studieren, die zur Erfassung verschiedener Datentypen zur Verfügung stehen. In diesem speziellen Artikel werden wir uns das ursprüngliche Set von Formularelementen ansehen, das seit den frühen Tagen des Web in allen Browsern verfügbar ist.

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
        Das ursprüngliche Set von nativen Formular-Widgets, die in Browsern zur Datenerfassung verfügbar sind, und deren Implementierung mit HTML im Detail zu verstehen.
      </td>
    </tr>
  </tbody>
</table>

Sie sind bereits mit einigen Formularelementen vertraut, einschließlich {{HTMLelement('form')}}, {{HTMLelement('fieldset')}}, {{HTMLelement('legend')}}, {{HTMLelement('textarea')}}, {{HTMLelement('label')}}, {{HTMLelement('button')}} und {{HTMLelement('input')}}. Dieser Artikel behandelt:

- Die häufigen Eingabetypen {{HTMLelement('input/button', 'button')}}, {{HTMLelement('input/checkbox', 'checkbox')}}, {{HTMLelement('input/file', 'file')}}, {{HTMLelement('input/hidden', 'hidden')}}, {{HTMLelement('input/image', 'image')}}, {{HTMLelement('input/password', 'password')}}, {{HTMLelement('input/radio', 'radio')}}, {{HTMLelement('input/reset', 'reset')}}, {{HTMLelement('input/submit', 'submit')}} und {{HTMLelement('input/text', 'text')}}.
- Einige der Attribute, die allen Formularelementen gemeinsam sind.

> [!NOTE]
> Wir behandeln zusätzliche, leistungsstärkere Formularelemente in den nächsten zwei Artikeln. Wenn Sie eine detailliertere Referenz suchen, sollten Sie unsere [HTML-Formularelementreferenz](/de/docs/Web/HTML/Reference/Elements#forms) und insbesondere unsere umfassende [Referenz der `<input>`-Typen](/de/docs/Web/HTML/Reference/Elements/input) konsultieren.

## Texteingabefelder

Text-{{htmlelement("input")}}-Felder sind die grundlegendsten Formular-Widgets. Sie sind eine sehr bequeme Möglichkeit, dem Benutzer die Eingabe jeglicher Art von Daten zu ermöglichen, und wir haben bereits einige einfache Beispiele gesehen.

> [!NOTE]
> HTML-Formular-Textfelder sind einfache Klartext-Eingabesteuerungen. Das bedeutet, dass Sie sie nicht für die Bearbeitung von formatiertem Text (Fett, Kursiv usw.) verwenden können. Alle Rich-Text-Editoren, die Sie antreffen werden, sind benutzerdefinierte Widgets, die mit HTML, CSS und JavaScript erstellt wurden.

Alle grundlegenden Textsteuerungen teilen einige gemeinsame Verhaltensweisen:

- Sie können als [`readonly`](/de/docs/Web/HTML/Reference/Elements/input#readonly) markiert werden (der Benutzer kann den Eingabewert nicht ändern, aber er wird dennoch mit dem Rest der Formulardaten gesendet) oder [`disabled`](/de/docs/Web/HTML/Reference/Elements/input#disabled) (der Eingabewert kann nicht geändert werden und wird nie mit dem Rest der Formulardaten gesendet).
- Sie können einen [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder) haben; dies ist der Text, der im Text-Eingabefeld erscheint und zur kurzen Beschreibung des Zwecks des Feldes verwendet werden sollte.
- Sie können in ihrer [`size`](/de/docs/Web/HTML/Reference/Attributes/size) (der physikalischen Größe des Feldes) und der [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength) (der maximalen Anzahl von Zeichen, die im Feld eingegeben werden können) eingeschränkt werden.
- Sie können von der Rechtschreibprüfung profitieren (unter Verwendung des [`spellcheck`](/de/docs/Web/HTML/Reference/Global_attributes/spellcheck)-Attributs).

> [!NOTE]
> Das {{htmlelement("input")}}-Element ist einzigartig unter den HTML-Elementen, da es viele Formen annehmen kann, abhängig vom Wert seines [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attributes. Es wird zur Erstellung der meisten Arten von Formular-Widgets verwendet, einschließlich einzeiliger Textfelder, Zeit- und Datumssteuerungen, Steuerungen ohne Texteingabe wie Kontrollkästchen, Optionsfelder und Farbwähler sowie Schaltflächen.

### Einzeilige Textfelder

Ein einzeiliges Textfeld wird mit einem {{HTMLElement("input")}}-Element erstellt, dessen [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attributwert auf `text` gesetzt ist oder indem das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut ganz weggelassen wird (`text` ist der Standardwert). Der Wert `text` für dieses Attribut ist auch der Rückfallwert, wenn der von Ihnen angegebene Wert für das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut dem Browser unbekannt ist (zum Beispiel, wenn Sie `type="color"` angeben und der Browser keine nativen Farbwähler unterstützt).

> [!NOTE]
> Sie können Beispiele aller einzeiligen Textfeldtypen auf GitHub unter [single-line-text-fields.html](https://github.com/mdn/learning-area/blob/main/html/forms/native-form-widgets/single-line-text-fields.html) finden ([sehen Sie es sich auch live an](https://mdn.github.io/learning-area/html/forms/native-form-widgets/single-line-text-fields.html)).

Hier ist ein grundlegendes Beispiel für ein einzeiliges Textfeld:

```html
<input type="text" id="comment" name="comment" value="I'm a text field" />
```

Einzeilige Textfelder haben nur eine echte Einschränkung: Wenn Sie Text mit Zeilenumbrüchen eingeben, entfernt der Browser diese Zeilenumbrüche, bevor die Daten an den Server gesendet werden.

Der Screenshot unten zeigt ein Texteingabefeld in den Zuständen "Standard", "Fokussiert" und "Deaktiviert". Die meisten Browser zeigen den fokussierten Zustand mit einem Fokusring um die Steuerung und den deaktivierten Zustand mit grauem Text oder einer verblassten/halbtransparenten Steuerung an.

![Screenshot des Text-Eingabefelds in den Standard-, Fokussiert- und Deaktiviert-Zuständen in Chrome auf macOS](disabled.png)

Die in diesem Dokument verwendeten Screenshots wurden im Chrome-Browser auf macOS aufgenommen. Es kann bei diesen Feldern/Schaltflächen geringfügige Variationen zwischen verschiedenen Browsern geben, aber die grundlegende Hervorhebungstechnik bleibt ähnlich.

> [!NOTE]
> Wir erörtern die Werte für das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut, die spezifische Validierungseinschränkungen durchsetzen, wie z. B. Eingabetypen für Farbe, E-Mail und URL im nächsten Artikel, [Die HTML5-Eingabetypen](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types).

#### Passwortfeld

Eines der ursprünglichen Eingabetypen war der `password`-Textfeldtyp:

```html
<input type="password" id="pwd" name="pwd" />
```

Der folgende Screenshot zeigt ein Passwort-Eingabefeld, in dem jedes Eingabezeichen als Punkt angezeigt wird.

![Passwortfeld in Chrome 115 auf macOS](password.png)

Der `password`-Wert fügt den eingegebenen Texten keine speziellen Einschränkungen hinzu, aber er verschleiert den in das Feld eingegebenen Wert (z. B. mit Punkten oder Sternchen), sodass er nicht leicht von anderen gelesen werden kann.

Bedenken Sie, dass dies nur eine Benutzeroberflächenfunktion ist; es sei denn, Sie übermitteln Ihr Formular auf sichere Weise, wird es im Klartext gesendet, was schlecht für die Sicherheit ist – eine böswillige Partei könnte Ihre Daten abfangen und Passwörter, Kreditkartendetails oder was auch immer Sie übermittelt haben, stehlen. Der beste Weg, um Benutzer dagegen zu schützen, besteht darin, alle Seiten, die Formulare enthalten, über eine sichere Verbindung zu hosten (d.h. sie befinden sich an einer `https://`-Adresse), damit die Daten vor dem Senden verschlüsselt werden.

Browser erkennen die Sicherheitsimplikationen beim Senden von Formulardaten über eine unsichere Verbindung und verfügen über Warnungen, um Benutzer von der Verwendung unsicherer Formulare abzuhalten. Weitere Informationen zu dem, was Firefox implementiert, finden Sie unter [Unsichere Passwörter](/de/docs/Web/Security/Insecure_passwords).

### Versteckte Inhalte

Ein weiteres ursprüngliches Textelement ist der Eingabetyp `hidden`. Dieser wird verwendet, um eine Formulareingabe zu erstellen, die für den Benutzer unsichtbar ist, aber dennoch zusammen mit den restlichen Formulardaten an den Server gesendet wird, sobald das Formular übermittelt wird – zum Beispiel können Sie einen Zeitstempel an den Server senden, der angibt, wann eine Bestellung aufgegeben wurde. Da es verborgen ist, kann der Benutzer den Wert nicht sehen und auch nicht absichtlich bearbeiten, es wird nie den Fokus erhalten und ein Bildschirmleser wird es auch nicht bemerken.

```html
<input type="hidden" id="timestamp" name="timestamp" value="1286705410" />
```

Wenn Sie ein solches Element erstellen, ist es erforderlich, seine `name`- und `value`-Attribute zu setzen. Der Wert kann dynamisch über JavaScript gesetzt werden. Der Eingabetyp `hidden` sollte kein zugehöriges Beschriftungselement haben.

Andere Texteingabetypen wie {{HTMLElement("input/search", "search")}}, {{HTMLElement("input/url", "url")}} und {{HTMLElement("input/tel", "tel")}} werden im nächsten Tutorial behandelt, [HTML5-Eingabetypen](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types).

## Ankreuzbare Elemente: Kontrollkästchen und Optionsfelder

Ankreuzbare Elemente sind Steuerungen, deren Zustand Sie durch Klicken auf sie oder ihre zugehörigen Etiketten ändern können. Es gibt zwei Arten von anklickbaren Elementen: das Kontrollkästchen und das Optionsfeld. Beide verwenden das Attribut [`checked`](/de/docs/Web/HTML/Reference/Elements/input/checkbox#checked), um anzugeben, ob das Widget standardmäßig aktiviert ist oder nicht.

Es ist erwähnenswert, dass diese Widgets nicht genau wie andere Formular-Widgets funktionieren. Bei den meisten Formular-Widgets werden, wenn das Formular übermittelt wird, alle Widgets mit einem [`name`](/de/docs/Web/HTML/Reference/Elements/input#name)-Attribut gesendet, selbst wenn kein Wert ausgefüllt wurde. Im Fall von ankreuzbaren Elementen werden ihre Werte nur gesendet, wenn sie aktiviert sind. Wenn sie nicht aktiviert sind, wird nichts gesendet, nicht einmal ihr Name. Wenn sie aktiviert sind, aber keinen Wert haben, wird der Name mit einem Wert von _on_ gesendet.

> [!NOTE]
> Sie können die Beispiele aus diesem Abschnitt auf GitHub als [checkable-items.html](https://github.com/mdn/learning-area/blob/main/html/forms/native-form-widgets/checkable-items.html) finden ([sehen Sie es sich auch live an](https://mdn.github.io/learning-area/html/forms/native-form-widgets/checkable-items.html)).

Für maximale Benutzerfreundlichkeit und Barrierefreiheit wird empfohlen, jede Liste verwandter Elemente in einem {{htmlelement("fieldset")}} zu umgeben, mit einem {{htmlelement("legend")}}, das eine allgemeine Beschreibung der Liste liefert. Jedes einzelne Paar von {{htmlelement("label")}}/{{htmlelement("input")}}-Elementen sollte in einem eigenen Listenelement (oder ähnlichem) enthalten sein. Das zugehörige {{htmlelement('label')}} befindet sich in der Regel direkt vor oder nach dem Optionsfeld oder dem Kontrollkästchen, mit den Anweisungen für die Gruppe von Optionsfeldern oder Kontrollkästchen, die in der Regel den Inhalt des {{htmlelement("legend")}} bilden. Siehe die oben verlinkten Beispiele für strukturelle Beispiele.

### Kontrollkästchen

Ein Kontrollkästchen wird mit dem {{HTMLElement("input")}}-Element erstellt, dessen [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut auf den Wert {{HTMLElement("input/checkbox", "checkbox")}} gesetzt ist.

```html
<input type="checkbox" id="questionOne" name="subscribe" value="yes" checked />
```

Verwandte Kontrollkästchen-Elemente sollten das gleiche [`name`](/de/docs/Web/HTML/Reference/Elements/input#name)-Attribut verwenden. Das Einschließen des Attributs [`checked`](/de/docs/Web/HTML/Reference/Elements/input/checkbox#checked) sorgt dafür, dass das Kontrollkästchen automatisch aktiviert ist, wenn die Seite geladen wird. Durch Klicken auf das Kontrollkästchen oder sein zugehöriges Etikett wird das Kontrollkästchen ein- und ausgeschaltet.

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

Der folgende Screenshot zeigt Kontrollkästchen in den Zuständen "Standard", "Fokussiert" und "Deaktiviert". Kontrollkästchen erscheinen in den Zuständen "Standard" und "Deaktiviert" aktiviert, während im Zustand "Fokussiert" das Kontrollkästchen deaktiviert ist, mit einem Fokusring darum.

![Standard-, fokussierte und deaktivierte Kontrollkästchen in Chrome 115 auf macOS](checkboxes.png)

> [!NOTE]
> Alle Kontrollkästchen und Optionsfelder mit dem Attribut [`checked`](/de/docs/Web/HTML/Reference/Elements/input/checkbox#checked) beim Laden entsprechen der {{cssxref(':default')}}-Pseudoklasse, selbst wenn sie nicht mehr aktiviert sind. Alle, die derzeit aktiviert sind, entsprechen der {{cssxref(':checked')}}-Pseudoklasse.

Aufgrund der Ein-Aus-Natur von Kontrollkästchen wird das Kontrollkästchen als Umschaltknopf betrachtet, wobei viele Entwickler und Designer das Standard-Kontrollkästchen-Styling erweitern, um Schaltflächen zu erstellen, die wie Kippschalter aussehen. Sie können [hier ein Beispiel in Aktion sehen](https://mdn.github.io/learning-area/html/forms/toggle-switch-example/) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/toggle-switch-example/index.html)).

### Radiobutton

Ein Radiobutton wird mit dem {{HTMLElement("input")}}-Element erstellt, dessen [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut auf den Wert `radio` gesetzt ist:

```html
<input type="radio" id="soup" name="meal" value="soup" checked />
```

Mehrere Radiobuttons können miteinander verknüpft werden. Wenn sie denselben Wert für ihr [`name`](/de/docs/Web/HTML/Reference/Elements/input#name)-Attribut teilen, werden sie als Teil derselben Gruppe von Schaltflächen betrachtet. Nur eine Schaltfläche in einer gegebenen Gruppe darf gleichzeitig aktiviert sein; das bedeutet, dass, wenn eine von ihnen aktiviert wird, alle anderen automatisch deaktiviert werden. Wenn das Formular gesendet wird, wird nur der Wert des aktivierten Radiobuttons gesendet. Wenn keiner von ihnen aktiviert ist, wird die gesamte Gruppe von Radiobuttons als in einem unbekannten Zustand betrachtet und es wird kein Wert mit dem Formular gesendet. Sobald einer der Radiobuttons in einer gleichnamigen Gruppe von Schaltflächen aktiviert ist, ist es dem Benutzer nicht möglich, alle Schaltflächen ohne Zurücksetzen des Formulars zu deaktivieren.

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

Der folgende Screenshot zeigt standardmäßige und deaktivierte Radiobuttons im aktivierten Zustand sowie einen fokussierten Radiobutton im deaktivierten Zustand.

![Standard-, fokussierte und deaktivierte Radiobutton-Zustände in Chrome 115 auf macOS](radios.png)

## Tatsächliche Schaltflächen

Der Radiobutton ist trotz seines Namens keine tatsächliche Schaltfläche; lassen Sie uns also zu den tatsächlichen Schaltflächen übergehen! Es gibt drei Eingabetypen, die Schaltflächen erzeugen:

- `submit`
  - : Sendet die Formulardaten an den Server. Bei {{HTMLElement("button")}}-Elementen führt das Weglassen des `type`-Attributs (oder ein ungültiger `type`-Wert) zu einer Sendeschaltfläche.
- `reset`
  - : Setzt alle Formular-Widgets auf ihre Standardwerte zurück.
- `button`
  - : Schaltflächen, die keine automatische Wirkung haben, aber mit JavaScript-Code angepasst werden können.

Dann gibt es auch das {{htmlelement("button")}}-Element selbst. Dies kann ein `type`-Attribut mit dem Wert `submit`, `reset` oder `button` haben, um das Verhalten der drei `<input>`-Typen zu imitieren, die oben erwähnt wurden. Der Hauptunterschied zwischen den beiden ist, dass tatsächlich `<button>`-Elemente viel einfacher zu stylen sind.

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
> Der `image`-Eingabetyp wird ebenfalls als Schaltfläche gerendert. Wir werden das auch später behandeln.

> [!NOTE]
> Sie können die Beispiele aus diesem Abschnitt auf GitHub als [button-examples.html](https://github.com/mdn/learning-area/blob/main/html/forms/native-form-widgets/button-examples.html) finden ([sehen Sie es sich auch live an](https://mdn.github.io/learning-area/html/forms/native-form-widgets/button-examples.html)).

Unten finden Sie Beispiele für jeden `<input>`-Schaltflächentyp sowie den entsprechenden `<button>`-Typ.

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

Schaltflächen verhalten sich immer gleich, unabhängig davon, ob Sie ein {{HTMLElement("button")}}-Element oder ein {{HTMLElement("input")}}-Element verwenden. Wie Sie aus den Beispielen sehen können, lassen {{HTMLElement("button")}}-Elemente die Verwendung von HTML in ihrem Inhalt zu, der zwischen den öffnenden und schließenden `<button>`-Tags eingefügt wird. {{HTMLElement("input")}}-Elemente hingegen sind {{Glossary("void_element", "void-Elemente")}}; ihr angezeigter Inhalt wird im `value`-Attribut eingefügt und akzeptiert daher nur Klartext als Inhalt.

Der folgende Screenshot zeigt eine Schaltfläche in den Zuständen "Standard", "Fokussiert" und "Deaktiviert". Im fokussierten Zustand gibt es einen Fokusring um die Schaltfläche, und im deaktivierten Zustand ist die Schaltfläche ausgegraut.

![Standard-, fokussierte und deaktivierte Schaltflächenzustände in Chrome 115 auf macOS](buttons.png)

### Bildbutton

Die **Bildbutton-Steuerung** wird genau wie ein {{HTMLElement("img")}}-Element gerendert, außer dass sie beim Klicken des Benutzers wie eine Schaltfläche zum Senden des Formulars funktioniert.

Ein Bildbutton wird mit einem {{HTMLElement("input")}}-Element erstellt, dessen [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut auf den Wert `image` gesetzt ist. Dieses Element unterstützt genau denselben Satz von Attributen wie das {{HTMLElement("img")}}-Element sowie alle von anderen Formular-Buttons unterstützten Attribute.

```html
<input type="image" alt="Click me!" src="my-img.png" width="80" height="30" />
```

Wenn der Bildbutton verwendet wird, um das Formular zu senden, übermittelt diese Steuerung nicht ihren Wert – stattdessen werden die X- und Y-Koordinaten des Klicks auf das Bild gesendet (die Koordinaten sind relativ zum Bild, was bedeutet, dass die obere linke Ecke des Bildes die Koordinate (0, 0) darstellt). Die Koordinaten werden als zwei Schlüssel/Wert-Paare gesendet:

- Der X-Wert-Schlüssel ist der Wert des [`name`](/de/docs/Web/HTML/Reference/Elements/input#name)-Attributes, gefolgt von der Zeichenkette "_.x_".
- Der Y-Wert-Schlüssel ist der Wert des [`name`](/de/docs/Web/HTML/Reference/Elements/input#name)-Attributes, gefolgt von der Zeichenkette "_.y_".

Wenn Sie also zum Beispiel auf das Bild bei der Koordinate (123, 456) klicken und es über die `get`-Methode gesendet wird, sehen Sie die Werte wie folgt an die URL angehängt:

```url
http://foo.com?pos.x=123&pos.y=456
```

Dies ist eine sehr bequeme Möglichkeit, eine "Hotmap" zu erstellen. Wie diese Werte gesendet und abgerufen werden, wird im Artikel [Senden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) ausführlich beschrieben.

## Dateiauswahl

Es gibt einen letzten `<input>`-Typ, der uns im frühen HTML zur Verfügung stand: den Datei-Eingabetyp. Formulare sind in der Lage, Dateien an einen Server zu senden (diese spezifische Aktion wird ebenfalls im Artikel [Senden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) ausführlich beschrieben). Das Dateiauswahl-Widget kann verwendet werden, um eine oder mehrere Dateien zum Senden auszuwählen.

Um ein [Dateiauswahl-Widget](/de/docs/Web/HTML/Reference/Elements/input/file) zu erstellen, verwenden Sie das {{HTMLElement("input")}}-Element, dessen [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut auf `file` gesetzt ist. Die Arten von Dateien, die akzeptiert werden, können mithilfe des [`accept`](/de/docs/Web/HTML/Reference/Elements/input#accept)-Attributes eingeschränkt werden. Wenn Sie außerdem dem Benutzer ermöglichen möchten, mehr als eine Datei auszuwählen, können Sie dies tun, indem Sie das [`multiple`](/de/docs/Web/HTML/Reference/Elements/input#multiple)-Attribut hinzufügen.

### Beispiel

In diesem Beispiel wird ein Dateiauswahl-Widget erstellt, das nach Bilddateien fragt. Der Benutzer darf in diesem Fall mehrere Dateien auswählen.

```html
<input type="file" name="file" id="file" accept="image/*" multiple />
```

Auf einigen mobilen Geräten kann das Dateiauswahl-Widget Fotos, Videos und Audio direkt mit der Kamera und dem Mikrofon des Geräts aufnehmen, indem Capture-Informationen zum `accept`-Attribut wie folgt hinzugefügt werden:

```html
<input type="file" accept="image/*;capture=camera" />
<input type="file" accept="video/*;capture=camcorder" />
<input type="file" accept="audio/*;capture=microphone" />
```

Der folgende Screenshot zeigt das Dateiauswahl-Widget im Standard-, Fokus- und deaktivierten Zustand, wenn keine Datei ausgewählt ist.

![Dateiauswahl-Widget in den Standard-, Fokus- und Deaktiviert-Zuständen in Chrome 115 auf macOS](filepickers.png)

## Allgemeine Attribute

Viele der Elemente, die zur Definition von Formularelementen verwendet werden, haben einige ihrer eigenen spezifischen Attribute. Es gibt jedoch einen Satz von Attributen, die allen Formularelementen gemeinsam sind. Sie haben einige dieser Attribute bereits kennengelernt, aber unten ist eine Liste dieser gemeinsamen Attribute zu Ihrer Referenz:

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
        Dieses boolesche Attribut ermöglicht es Ihnen, anzugeben, dass das Element automatisch den Eingabefokus haben soll, wenn die Seite geladen wird.
        Nur ein Formular-assoziiertes Element in einem Dokument kann dieses Attribut spezifiziert haben.
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
        Wenn dieses Attribut nicht spezifiziert ist, erbt das Element seine Einstellung vom enthaltenen Element, zum Beispiel {{HTMLElement("fieldset")}};
        wenn es kein enthaltenes Element mit dem `disabled`-Attribut gibt, ist das Element aktiviert.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/input#form">form</a></code>
      </td>
      <td></td>
      <td>
        Das <code>&#x3C;form></code>-Element, mit dem das Widget assoziiert ist, wird verwendet, wenn es nicht innerhalb des Formulars verschachtelt ist.
        Der Wert des Attributs muss das <code>id</code>-Attribut eines {{HTMLElement("form")}}-Elements im gleichen Dokument sein.
        Dies ermöglicht es Ihnen, eine Formulareingabe mit einem Formular zu verknüpfen, mit dem es sich außerhalb befindet, selbst wenn es innerhalb eines anderen Formular-Elements ist.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/input#name">name</a></code>
      </td>
      <td></td>
      <td>Der Name des Elements; dieser wird mit den Formulardaten gesendet.</td>
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

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen – siehe [Testen Sie Ihre Fähigkeiten: Grundlegende Steuerelemente](/de/docs/Learn_web_development/Extensions/Forms/Test_your_skills/Basic_controls).

## Zusammenfassung

Dieser Artikel hat die älteren Eingabetypen behandelt – das ursprüngliche Set, das in den frühen Tagen von HTML eingeführt wurde und in allen Browsern gut unterstützt wird. Im nächsten Abschnitt werden wir uns die moderneren Werte des `type`-Attributes anschauen.

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/How_to_structure_a_web_form", "Learn_web_development/Extensions/Forms/HTML5_input_types", "Learn_web_development/Extensions/Forms")}}
