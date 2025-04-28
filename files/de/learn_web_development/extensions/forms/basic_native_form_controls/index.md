---
title: Grundlegende native Form-Steuerelemente
slug: Learn_web_development/Extensions/Forms/Basic_native_form_controls
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/How_to_structure_a_web_form", "Learn_web_development/Extensions/Forms/HTML5_input_types", "Learn_web_development/Extensions/Forms")}}

Im [vorherigen Artikel](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form) haben wir ein funktionelles Webformularbeispiel erstellt und dabei einige Formularsteuerelemente sowie gängige Strukturierungselemente eingeführt und den Fokus auf Best Practices für Barrierefreiheit gelegt. Als Nächstes werden wir die Funktionalität der verschiedenen Formularsteuerelemente oder Widgets im Detail betrachten und alle verfügbaren Optionen untersuchen, um unterschiedliche Arten von Daten zu erfassen. In diesem Artikel betrachten wir das ursprüngliche Set von Formularsteuerelementen, das seit den frühen Tagen des Webs in allen Browsern verfügbar ist.

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
        Ein detailliertes Verständnis des ursprünglichen Sets von nativen Formular-Widgets, die in Browsern zum Sammeln von Daten verfügbar sind, und deren Implementierung mit HTML.
      </td>
    </tr>
  </tbody>
</table>

Sie haben bereits einige Formularelemente kennengelernt, darunter {{HTMLelement('form')}}, {{HTMLelement('fieldset')}}, {{HTMLelement('legend')}}, {{HTMLelement('textarea')}}, {{HTMLelement('label')}}, {{HTMLelement('button')}} und {{HTMLelement('input')}}. Dieser Artikel behandelt:

- Die gängigen Eingabetypen {{HTMLelement('input/button', 'button')}}, {{HTMLelement('input/checkbox', 'checkbox')}}, {{HTMLelement('input/file', 'file')}}, {{HTMLelement('input/hidden', 'hidden')}}, {{HTMLelement('input/image', 'image')}}, {{HTMLelement('input/password', 'password')}}, {{HTMLelement('input/radio', 'radio')}}, {{HTMLelement('input/reset', 'reset')}}, {{HTMLelement('input/submit', 'submit')}} und {{HTMLelement('input/text', 'text')}}.
- Einige der Attribute, die allen Formularsteuerelementen gemeinsam sind.

> [!NOTE]
> Wir behandeln zusätzliche, leistungsfähigere Formularsteuerelemente in den nächsten beiden Artikeln. Wenn Sie eine fortgeschrittenere Referenz wünschen, sollten Sie unsere [HTML-Formularelement-Referenz](/de/docs/Web/HTML/Reference/Elements#forms) und insbesondere unsere umfangreiche [`<input>`-Typen](/de/docs/Web/HTML/Reference/Elements/input) Referenz konsultieren.

## Texteingabefelder

Text-{{htmlelement("input")}}-Felder sind die grundlegendsten Formular-Widgets. Sie sind eine sehr bequeme Möglichkeit, den Benutzer beliebige Daten eingeben zu lassen, und wir haben bereits einige einfache Beispiele gesehen.

> [!NOTE]
> HTML-Formulartextfelder sind einfache Nur-Text-Eingabesteuerungen. Das bedeutet, dass Sie sie nicht zur Durchführung von Rich-Text-Bearbeitungen (fett, kursiv usw.) verwenden können. Alle Rich-Text-Editoren, denen Sie begegnen, sind benutzerdefinierte Widgets, die mit HTML, CSS und JavaScript erstellt wurden.

Alle grundlegenden Texteingabesteuerungen haben einige gemeinsame Verhaltensweisen:

- Sie können als [`readonly`](/de/docs/Web/HTML/Reference/Elements/input#readonly) gekennzeichnet werden (der Benutzer kann den Eingabewert nicht ändern, aber er wird dennoch mit den restlichen Formulardaten gesendet) oder [`disabled`](/de/docs/Web/HTML/Reference/Elements/input#disabled) (der Eingabewert kann nicht geändert werden und wird nie mit den restlichen Formulardaten gesendet).
- Sie können einen [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder) haben; dies ist der Text, der innerhalb des Texteingabefelds erscheint und dazu verwendet werden sollte, den Zweck des Feldes kurz zu beschreiben.
- Sie können in [`size`](/de/docs/Web/HTML/Reference/Attributes/size) (die physische Größe des Feldes) und [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength) (die maximale Anzahl der Zeichen, die in das Feld eingegeben werden können) eingeschränkt werden.
- Sie können von der Rechtschreibprüfung profitieren (mithilfe des [`spellcheck`](/de/docs/Web/HTML/Reference/Global_attributes/spellcheck) Attributs).

> [!NOTE]
> Das {{htmlelement("input")}}-Element ist einzigartig unter den HTML-Elementen, da es je nach Wert des [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attributs viele Formen annehmen kann. Es wird verwendet, um die meisten Arten von Formular-Widgets zu erstellen, einschließlich einzeiliger Textfelder, Zeit- und Datumssteuerelemente, Steuerelemente ohne Texteingabe wie Kontrollkästchen, Optionsfelder, Farbwähler und Schaltflächen.

### Einzeilige Textfelder

Ein einzeiliges Textfeld wird mit einem {{HTMLElement("input")}}-Element erstellt, dessen [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut auf `text` gesetzt ist oder indem das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut weggelassen wird (der Standardwert ist `text`). Der Wert `text` für dieses Attribut ist auch der Rückfallwert, wenn der Wert, den Sie für das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut angeben, dem Browser unbekannt ist (zum Beispiel, wenn Sie `type="color"` angeben und der Browser keine nativen Farbwähler unterstützt).

> [!NOTE]
> Sie können Beispiele für alle Arten von einzeiligen Textfeldern auf GitHub unter [single-line-text-fields.html](https://github.com/mdn/learning-area/blob/main/html/forms/native-form-widgets/single-line-text-fields.html) finden ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/forms/native-form-widgets/single-line-text-fields.html)).

Hier ist ein einfaches Beispiel für ein einzeiliges Textfeld:

```html
<input type="text" id="comment" name="comment" value="I'm a text field" />
```

Einzeilige Textfelder haben nur eine echte Einschränkung: Wenn Sie Text mit Zeilenumbrüchen eingeben, entfernt der Browser diese Zeilenumbrüche, bevor die Daten an den Server gesendet werden.

Der unten stehende Screenshot zeigt eine Texteingabe in den Standard-, Fokus- und deaktivierten Zuständen. Die meisten Browser kennzeichnen den Fokuszustand durch einen Fokusring um das Steuerelement und den deaktivierten Zustand durch grauen Text oder ein verblasstes/halbtransparentes Steuerelement.

![Screenshot der Texteingabe in den Standard-, Fokus- und deaktivierten Zuständen in Chrome auf macOS](disabled.png)

Die in diesem Dokument verwendeten Screenshots wurden im Chrome-Browser auf macOS aufgenommen. Es kann kleinere Variationen in diesen Feldern/Schaltflächen in verschiedenen Browsern geben, aber die grundlegende Hervorhebungstechnik bleibt ähnlich.

> [!NOTE]
> Wir diskutieren Werte für das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut, die spezifische Validierungseinschränkungen erzwingen, einschließlich Farb-, E-Mail- und URL-Eingabetypen, im nächsten Artikel, [HTML5-Eingabetypen](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types).

#### Passwortfeld

Einer der ursprünglichen Eingabetyppen war der `password` Textfeldtyp:

```html
<input type="password" id="pwd" name="pwd" />
```

Der folgende Screenshot zeigt ein Passwort-Eingabefeld, bei dem jedes Eingabezeichen als Punkt dargestellt wird.

![Passwortfeld in Chrome 115 auf macOS](password.png)

Der `password`-Wert fügt den eingegebenen Texten keine speziellen Einschränkungen hinzu, aber er verschleiert den eingegebenen Wert im Feld (z.B. mit Punkten oder Sternchen), sodass er nicht leicht von anderen gelesen werden kann.

Beachten Sie, dass dies nur eine Benutzeroberflächenfunktion ist; es sei denn, Sie senden Ihr Formular sicher, es wird im Klartext gesendet, was schlecht für die Sicherheit ist — eine böswillige Partei könnte Ihre Daten abfangen und Passwörter, Kreditkartendetails oder was auch immer Sie eingereicht haben stehlen. Der beste Weg, Benutzer davor zu schützen, ist, alle Seiten, die Formulare enthalten, über eine sichere Verbindung zu hosten (d.h. unter einer `https://`-Adresse), sodass die Daten verschlüsselt werden, bevor sie gesendet werden.

Browser erkennen die Sicherheitsimplikationen des Sendens von Formulardaten über eine unsichere Verbindung und haben Warnungen, um Benutzer davon abzuhalten, unsichere Formulare zu verwenden. Weitere Informationen dazu, was Firefox implementiert, finden Sie unter [Unsichere Passwörter](/de/docs/Web/Security/Insecure_passwords).

### Verborgener Inhalt

Ein weiteres ursprüngliches Textsteuerelement ist der `hidden` Eingabetyp. Dieser wird verwendet, um ein Formularsteuerelement zu erstellen, das für den Benutzer unsichtbar ist, aber dennoch zusammen mit den restlichen Formulardaten an den Server gesendet wird, sobald das Formular abgeschickt wird — zum Beispiel möchten Sie vielleicht einen Zeitstempel an den Server senden, der angibt, wann eine Bestellung aufgegeben wurde. Da es versteckt ist, kann der Benutzer den Wert weder sehen noch absichtlich bearbeiten, es wird nie den Fokus erhalten und auch ein Screenreader wird es nicht bemerken.

```html
<input type="hidden" id="timestamp" name="timestamp" value="1286705410" />
```

Wenn Sie ein solches Element erstellen, ist es erforderlich, seine `name`- und `value`-Attribute zu setzen. Der Wert kann dynamisch über JavaScript gesetzt werden. Der `hidden` Eingabetyp sollte kein zugeordnetes Label haben.

Andere Text-Eingabetypen, wie {{HTMLElement("input/search", "search")}}, {{HTMLElement("input/url", "url")}} und {{HTMLElement("input/tel", "tel")}}, werden im nächsten Tutorial behandelt, [HTML5 Eingabetypen](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types).

## Ankreuzbare Elemente: Kontrollkästchen und Optionsfelder

Ankreuzbare Elemente sind Steuerelemente, deren Zustand Sie durch Klicken auf sie oder ihre zugehörigen Labels ändern können. Es gibt zwei Arten von ankreuzbaren Elementen: das Kontrollkästchen und das Optionsfeld. Beide verwenden das [`checked`](/de/docs/Web/HTML/Reference/Elements/input/checkbox#checked)-Attribut, um anzugeben, ob das Widget standardmäßig aktiviert ist oder nicht.

Es ist erwähnenswert, dass sich diese Widgets nicht genau wie andere Form-Widgets verhalten. Für die meisten Formular-Widgets gilt, dass alle mit einem [`name`](/de/docs/Web/HTML/Reference/Elements/input#name)-Attribut versehenen Widgets gesendet werden, auch wenn kein Wert ausgefüllt wurde. Im Falle von ankreuzbaren Elementen werden ihre Werte nur gesendet, wenn sie aktiviert sind. Wenn sie nicht aktiviert sind, wird nichts gesendet, nicht einmal ihr Name. Wenn sie aktiviert sind, aber keinen Wert haben, wird der Name mit einem Wert von _on_ gesendet.

> [!NOTE]
> Sie finden die Beispiele aus diesem Abschnitt auf GitHub als [checkable-items.html](https://github.com/mdn/learning-area/blob/main/html/forms/native-form-widgets/checkable-items.html) ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/forms/native-form-widgets/checkable-items.html)).

Für maximale Benutzerfreundlichkeit/Zugänglichkeit wird empfohlen, jede Liste verwandter Elemente in ein {{htmlelement("fieldset")}} zu umschließen, mit einem {{htmlelement("legend")}}, das eine allgemeine Beschreibung der Liste liefert. Jedes einzelne Paar von {{htmlelement("label")}}/{{htmlelement("input")}}-Elementen sollte in seinem eigenen Listenelement (oder einem ähnlichen) enthalten sein. Das zugehörige {{htmlelement('label')}} wird in der Regel unmittelbar vor oder nach dem Radio-Button oder Kontrollkästchen platziert, wobei die Anweisungen für die Gruppe von Radio-Button oder Kontrollkästchen in der Regel der Inhalt des {{htmlelement("legend")}} sind. Siehe die oben verlinkten Beispiele für Strukturbeispiele.

### Kontrollkästchen

Ein Kontrollkästchen wird mit dem {{HTMLElement("input")}}-Element erstellt, dessen [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut auf den Wert {{HTMLElement("input/checkbox", "checkbox")}} gesetzt ist.

```html
<input type="checkbox" id="questionOne" name="subscribe" value="yes" checked />
```

Verwandte Kontrollkästchenelemente sollten dasselbe [`name`](/de/docs/Web/HTML/Reference/Elements/input#name)-Attribut verwenden. Wenn das [`checked`](/de/docs/Web/HTML/Reference/Elements/input/checkbox#checked)-Attribut enthalten ist, wird das Kontrollkästchen automatisch beim Laden der Seite aktiviert. Ein Klick auf das Kontrollkästchen oder sein zugehöriges Label schaltet das Kontrollkästchen ein und aus.

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

Der folgende Screenshot zeigt Kontrollkästchen in den Standard-, Fokus- und deaktivierten Zuständen. Kontrollkästchen in den Standard- und deaktivierten Zuständen erscheinen aktiviert, während im Fokuszustand das Kontrollkästchen deaktiviert ist, mit Fokusring drum herum.

![Standard-, Fokus- und deaktivierte Kontrollkästchen in Chrome 115 auf macOS](checkboxes.png)

> [!NOTE]
> Alle Kontrollkästchen und Optionsfelder mit dem [`checked`](/de/docs/Web/HTML/Reference/Elements/input/checkbox#checked)-Attribut beim Laden entsprechen der {{cssxref(':default')}} Pseudo-Klasse, auch wenn sie nicht mehr aktiviert sind. Alle, die derzeit aktiviert sind, entsprechen der {{cssxref(':checked')}} Pseudo-Klasse.

Aufgrund der Ein-Aus-Natur von Kontrollkästchen wird das Kontrollkästchen als Umschalttaste betrachtet, wobei viele Entwickler und Designer die Standarddarstellung von Kontrollkästchen erweitern, um Schaltflächen zu erstellen, die wie Kippschalter aussehen. Sie können ein [Beispiel hier in Aktion sehen](https://mdن.github.io/learning-area/html/forms/toggle-switch-example/) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/toggle-switch-example/index.html)).

### Optionsfeld

Ein Optionsfeld wird mit dem {{HTMLElement("input")}}-Element erstellt, dessen [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut auf den Wert `radio` gesetzt ist:

```html
<input type="radio" id="soup" name="meal" value="soup" checked />
```

Mehrere Optionsfelder können miteinander verbunden werden. Wenn sie denselben Wert für ihr [`name`](/de/docs/Web/HTML/Reference/Elements/input#name)-Attribut teilen, gelten sie als Gruppe von Schaltflächen. Nur eine Schaltfläche in einer bestimmten Gruppe kann gleichzeitig aktiviert sein; dies bedeutet, dass, wenn eine von ihnen aktiviert wird, alle anderen automatisch deaktiviert werden. Wenn das Formular gesendet wird, wird nur der Wert des aktivierten Optionsfeldes gesendet. Wenn keins von ihnen aktiviert ist, wird der gesamte Pool von Optionsfeldern als in einem unbekannten Zustand betrachtet und es wird kein Wert mit dem Formular gesendet. Sobald eines der Optionsfelder in einer gleichnamigen Gruppe aktiviert ist, ist es dem Benutzer nicht mehr möglich, alle Schaltflächen zu deaktivieren, ohne das Formular zurückzusetzen.

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

![Standard-, Fokus- und deaktivierte Optionen in Chrome 115 auf macOS](radios.png)

## Tatsächliche Schaltflächen

Der Radio-Button ist tatsächlich keine Schaltfläche, trotz seines Namens; lassen Sie uns zu den tatsächlichen Schaltflächen übergehen! Es gibt drei Eingabetypen, die Schaltflächen erzeugen:

- `submit`
  - : Sendet die Formulardaten an den Server. Bei {{HTMLElement("button")}}-Elementen führt das Weglassen des `type`-Attributs (oder ein ungültiger Wert für `type`) zu einer Absenden-Schaltfläche.
- `reset`
  - : Setzt alle Formular-Widgets auf ihre Standardwerte zurück.
- `button`
  - : Schaltflächen, die keine automatische Wirkung haben, aber mithilfe von JavaScript-Code angepasst werden können.

Dann haben wir auch das {{htmlelement("button")}}-Element selbst. Dieses kann ein `type`-Attribut von Wert `submit`, `reset` oder `button` haben, um das Verhalten der drei oben genannten `<input>`-Typen nachzuahmen. Der Hauptunterschied zwischen den beiden ist, dass tatsächliche `<button>`-Elemente viel einfacher zu stylen sind.

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
> Der `image`-Eingabetyp wird ebenfalls als Schaltfläche dargestellt. Wir werden das später ebenfalls behandeln.

> [!NOTE]
> Sie können die Beispiele aus diesem Abschnitt auf GitHub als [button-examples.html](https://github.com/mdn/learning-area/blob/main/html/forms/native-form-widgets/button-examples.html) finden ([sehen Sie es auch live](https://mdn.github.io/learning-area/html/forms/native-form-widgets/button-examples.html)).

Unten finden Sie Beispiele für jeden Schaltflächen-`<input>`-Typ sowie den entsprechenden `<button>`-Typ.

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

Schaltflächen verhalten sich immer gleich, ob Sie ein {{HTMLElement("button")}}-Element oder ein {{HTMLElement("input")}}-Element verwenden. Wie Sie aus den Beispielen sehen können, ermöglichen es jedoch {{HTMLElement("button")}}-Elemente, HTML in ihrem Inhalt zu verwenden, das zwischen den öffnenden und schließenden `<button>`-Tags eingefügt wird. {{HTMLElement("input")}}-Elemente sind hingegen {{Glossary("void_element", "leere Elemente")}}; ihr angezeigter Inhalt wird im `value`-Attribut eingefügt und akzeptiert daher nur reinen Text als Inhalt.

Der folgende Screenshot zeigt eine Schaltfläche in den Standard-, Fokus- und deaktivierten Zuständen. Im Fokuszustand gibt es einen Fokusring um die Schaltfläche, und im deaktivierten Zustand ist die Schaltfläche ausgegraut.

![Standard-, Fokus- und deaktivierte Schaltflächenzustände in Chrome 115 auf macOS](buttons.png)

### Bild-Schaltfläche

Das Steuerungselement **Bild-Schaltfläche** wird genauso gerendert wie ein {{HTMLElement("img")}}-Element, außer dass es beim Anklicken wie eine Absende-Schaltfläche funktioniert.

Eine Bild-Schaltfläche wird mit einem {{HTMLElement("input")}}-Element erstellt, dessen [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut auf den Wert `image` gesetzt ist. Dieses Element unterstützt genau dieselbe Menge an Attributen wie das {{HTMLElement("img")}}-Element, plus alle Attribute, die von anderen Formularschaltflächen unterstützt werden.

```html
<input type="image" alt="Click me!" src="my-img.png" width="80" height="30" />
```

Wenn die Bild-Schaltfläche zum Senden des Formulars verwendet wird, sendet diese Steuerung nicht ihren Wert — stattdessen werden die X- und Y-Koordinaten des Klicks auf das Bild gesendet (die Koordinaten sind relativ zum Bild, das bedeutet, dass die obere linke Ecke des Bildes die Koordinate (0, 0) darstellt). Die Koordinaten werden als zwei Schlüssel-Wert-Paare gesendet:

- Der X-Wert-Schlüssel ist der Wert des [`name`](/de/docs/Web/HTML/Reference/Elements/input#name)-Attributs, gefolgt von dem String "_.x_".
- Der Y-Wert-Schlüssel ist der Wert des [`name`](/de/docs/Web/HTML/Reference/Elements/input#name)-Attributs, gefolgt von dem String "_.y_".

Wenn Sie also beispielsweise auf das Bild an der Koordinate (123, 456) klicken und es über die `get`-Methode sendet, sehen Sie die Werte, die an die URL angehängt sind, wie folgt:

```url
http://foo.com?pos.x=123&pos.y=456
```

Dies ist eine sehr praktische Möglichkeit, eine "Hot Map" zu erstellen. Wie diese Werte gesendet und abgerufen werden, wird im Artikel [Senden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) detailliert beschrieben.

## Dateiauswahl

Es gibt einen letzten `<input>`-Typ, der uns im frühen HTML überliefert wurde: den Datei-Eingabetyp. Formulare können Dateien an einen Server senden (diese spezielle Aktion wird ebenfalls im Artikel [Senden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) detailliert beschrieben). Das Dateiauswahl-Widget kann verwendet werden, um eine oder mehrere Dateien auszuwählen, die gesendet werden sollen.

Um ein [Dateiauswahl-Widget](/de/docs/Web/HTML/Reference/Elements/input/file) zu erstellen, verwenden Sie das {{HTMLElement("input")}}-Element, dessen [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut auf `file` gesetzt ist. Die Arten von Dateien, die akzeptiert werden, können mit dem [`accept`](/de/docs/Web/HTML/Reference/Elements/input#accept)-Attribut eingeschränkt werden. Außerdem können Sie, wenn Sie dem Benutzer erlauben möchten, mehr als eine Datei auszuwählen, dies durch Hinzufügen des [`multiple`](/de/docs/Web/HTML/Reference/Elements/input#multiple)-Attributs tun.

### Beispiel

In diesem Beispiel wird ein Dateiauswahl-Widget erstellt, das grafische Bilddateien verlangt. Dem Benutzer ist es gestattet, mehrere Dateien auszuwählen.

```html
<input type="file" name="file" id="file" accept="image/*" multiple />
```

Auf einigen mobilen Geräten kann die Dateiauswahl auf Fotos, Videos und Audiozugreifen, das direkt von der Kamera und dem Mikrofon des Geräts aufgenommen wird, indem Capture-Informationen zum `accept`-Attribut hinzugefügt werden, wie folgt:

```html
<input type="file" accept="image/*;capture=camera" />
<input type="file" accept="video/*;capture=camcorder" />
<input type="file" accept="audio/*;capture=microphone" />
```

Der folgende Screenshot zeigt das Dateiauswahl-Widget in den Standard-, Fokus- und deaktivierten Zuständen, wenn keine Datei ausgewählt ist.

![Dateiauswahl-Widget in den Standard-, Fokus- und deaktivierten Zuständen in Chrome 115 auf macOS](filepickers.png)

## Gemeinsame Attribute

Viele der Elemente, die zur Definition von Formularsteuerelementen verwendet werden, haben einige ihrer eigenen spezifischen Attribute. Es gibt jedoch eine Reihe von Attributen, die allen Formularelementen gemeinsam sind. Sie haben einige davon bereits kennengelernt, aber unten finden Sie eine Liste dieser gemeinsamen Attribute zu Ihrer Referenz:

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
        Dieses boolesche Attribut lässt Sie angeben, dass das Element automatisch den Eingabefokus erhalten soll, wenn die Seite geladen wird.
        Nur ein mit Formular assoziiertes Element in einem Dokument kann dieses Attribut haben.
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
        Wenn dieses Attribut nicht angegeben ist, erbt das Element seine Einstellung vom umgebenden Element, zum Beispiel {{HTMLElement("fieldset")}};
        wenn es kein umgebenes Element mit dem <code>disabled</code>-Attribut gibt, ist das Element aktiviert.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/input#form">form</a></code>
      </td>
      <td></td>
      <td>
        Das <code>&#x3C;form></code>-Element, mit dem das Widget verknüpft ist, wird verwendet, wenn es nicht innerhalb dieses Formulars verschachtelt ist.
        Der Wert des Attributs muss das <code>id</code>-Attribut eines {{HTMLElement("form")}}-Elements im selben Dokument sein.
        Dies ermöglicht es Ihnen, ein Formularsteuerungselement einem Formular zuzuordnen, außerhalb dessen es sich befindet, selbst wenn es sich innerhalb eines anderen Formularelements befindet.
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
      <td>Der Anfangswert des Elements.</td>
    </tr>
  </tbody>
</table>

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Grundlegende Steuerelemente](/de/docs/Learn_web_development/Extensions/Forms/Test_your_skills/Basic_controls).

## Zusammenfassung

Dieser Artikel hat die älteren Eingabetyppen behandelt — das ursprüngliche Set, das in den frühen Tagen von HTML eingeführt wurde und in allen Browsern gut unterstützt wird. Im nächsten Abschnitt werden wir uns die moderneren Werte des `type`-Attributs ansehen.

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/How_to_structure_a_web_form", "Learn_web_development/Extensions/Forms/HTML5_input_types", "Learn_web_development/Extensions/Forms")}}
