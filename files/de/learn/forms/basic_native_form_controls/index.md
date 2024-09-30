---
title: Grundlegende native Formularsteuerungen
slug: Learn/Forms/Basic_native_form_controls
l10n:
  sourceCommit: cd56d512284c5765f115cb002c1be5d23e7281d2
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Forms/How_to_structure_a_web_form", "Learn/Forms/HTML5_input_types", "Learn/Forms")}}

Im [vorherigen Artikel](/de/docs/Learn/Forms/How_to_structure_a_web_form) haben wir ein funktionales Webformular-Beispiel markiert, einige Formularsteuerelemente und allgemeine Strukturelemente vorgestellt und den Fokus auf Best Practices zur Barrierefreiheit gelegt. Als Nächstes werden wir uns die Funktionalität der verschiedenen Formularsteuerelemente oder Widgets im Detail ansehen – wir untersuchen alle verschiedenen Optionen, die zur Erfassung unterschiedlicher Datentypen zur Verfügung stehen. In diesem speziellen Artikel werden wir uns die ursprüngliche Gruppe von Formularsteuerelementen ansehen, die seit den frühen Tagen des Webs in allen Browsern verfügbar sind.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegendes
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Verständnis von HTML</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die ursprüngliche Gruppe von nativen Formularwidgets, die in Browsern zur Datenerfassung zur Verfügung stehen, im Detail zu verstehen und diese mithilfe von HTML zu implementieren.
      </td>
    </tr>
  </tbody>
</table>

Sie haben bereits einige Formularelemente kennengelernt, darunter {{HTMLelement('form')}}, {{HTMLelement('fieldset')}}, {{HTMLelement('legend')}}, {{HTMLelement('textarea')}}, {{HTMLelement('label')}}, {{HTMLelement('button')}} und {{HTMLelement('input')}}. Dieser Artikel behandelt:

- Die gängigen Eingabetypen {{HTMLelement('input/button', 'button')}}, {{HTMLelement('input/checkbox', 'checkbox')}}, {{HTMLelement('input/file', 'file')}}, {{HTMLelement('input/hidden', 'hidden')}}, {{HTMLelement('input/image', 'image')}}, {{HTMLelement('input/password', 'password')}}, {{HTMLelement('input/radio', 'radio')}}, {{HTMLelement('input/reset', 'reset')}}, {{HTMLelement('input/submit', 'submit')}} und {{HTMLelement('input/text', 'text')}}.
- Einige der Attribute, die allen Formularsteuerelementen gemeinsam sind.

> [!NOTE]
> Weitere, leistungsstärkere Formularsteuerelemente behandeln wir in den nächsten beiden Artikeln. Wenn Sie ein fortgeschritteneres Nachschlagewerk benötigen, sollten Sie unsere [Referenz zu HTML-Formularelementen](/de/docs/Web/HTML/Element#forms) und insbesondere unsere umfangreiche [Referenz zu `<input>`-Typen](/de/docs/Web/HTML/Element/input) konsultieren.

## Texteingabefelder

Text-{{htmlelement("input")}}-Felder sind die grundlegendsten Formular-Widgets. Sie sind eine sehr bequeme Möglichkeit, dem Benutzer das Eingeben beliebiger Daten zu ermöglichen, und wir haben bereits einige einfache Beispiele gesehen.

> [!NOTE]
> HTML-Textfelder für Formulare sind einfache Klartext-Eingabesteuerelemente. Das bedeutet, dass Sie sie nicht zur Durchführung von Rich-Text-Bearbeitungen (Fett, Kursiv usw.) verwenden können. Alle Rich-Text-Editoren, die Sie finden werden, sind benutzerdefinierte Widgets, die mit HTML, CSS und JavaScript erstellt wurden.

Alle grundlegenden Textsteuerelemente teilen einige gemeinsame Verhaltensweisen:

- Sie können als [`readonly`](/de/docs/Web/HTML/Element/input#readonly) markiert werden (der Benutzer kann den Eingabewert nicht ändern, aber er wird trotzdem mit dem Rest der Formulardaten gesendet) oder als [`disabled`](/de/docs/Web/HTML/Element/input#disabled) (der Eingabewert kann nicht geändert werden und wird niemals mit dem Rest der Formulardaten gesendet).
- Sie können einen [`placeholder`](/de/docs/Web/HTML/Element/input#placeholder) haben; dies ist der Text, der im Texteingabefeld erscheint und kurz den Zweck des Feldes beschreiben sollte.
- Sie können in [`size`](/de/docs/Web/HTML/Attributes/size) (die physische Größe des Feldes) und [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength) (die maximale Anzahl von Zeichen, die in das Feld eingegeben werden können) eingeschränkt werden.
- Sie können von der Rechtschreibprüfung profitieren (mit dem Attribut [`spellcheck`](/de/docs/Web/HTML/Global_attributes/spellcheck)).

> [!NOTE]
> Das {{htmlelement("input")}}-Element ist einzigartig unter den HTML-Elementen, da es je nach Wert seines [`type`](/de/docs/Web/HTML/Element/input#type)-Attributs viele Formen annehmen kann. Es wird zum Erstellen der meisten Typen von Formular-Widgets verwendet, einschließlich einzeiliger Texteingabefelder, Zeit- und Datumskontrollen, Kontrollkästchen, Radio-Buttons, Farbwähler und Schaltflächen.

### Einzeilige Texteingabefelder

Ein einzeiliges Texteingabefeld wird mit einem {{HTMLElement("input")}}-Element erstellt, dessen [`type`](/de/docs/Web/HTML/Element/input#type)-Attribut auf `text` gesetzt ist oder indem das [`type`](/de/docs/Web/HTML/Element/input#type)-Attribut ganz ausgelassen wird (`text` ist der Standardwert). Der Wert `text` für dieses Attribut ist auch der Fallback-Wert, wenn der Wert, den Sie für das [`type`](/de/docs/Web/HTML/Element/input#type)-Attribut angeben, dem Browser unbekannt ist (z. B. wenn Sie `type="color"` angeben und der Browser keine nativen Farbwähler unterstützt).

> [!NOTE]
> Sie können Beispiele für alle Typen von einzeiligen Texteingabefeldern auf GitHub unter [single-line-text-fields.html](https://github.com/mdn/learning-area/blob/main/html/forms/native-form-widgets/single-line-text-fields.html) finden ([siehe es auch live](https://mdn.github.io/learning-area/html/forms/native-form-widgets/single-line-text-fields.html)).

Hier ist ein grundlegendes Beispiel für ein einzeiliges Texteingabefeld:

```html
<input type="text" id="comment" name="comment" value="I'm a text field" />
```

Einzeilige Texteingabefelder haben nur eine wahre Einschränkung: Wenn Sie Text mit Zeilenumbrüchen eingeben, entfernt der Browser diese Zeilenumbrüche, bevor die Daten an den Server gesendet werden.

Der Screenshot unten zeigt ein Texteingabefeld im Standard-, Fokus- und deaktivierten Zustand. Die meisten Browser zeigen den Fokuszustand mit einem Fokusring um das Steuerelement an, und der deaktivierte Zustand wird durch grauen Text oder ein verblasst/halbtransparentes Steuerelement angezeigt.

![Screenshot der Standard-, Fokus- und deaktivierten Zustände eines Texteingabefelds in Chrome auf macOS](disabled.png)

Die in diesem Dokument verwendeten Screenshots wurden im Chrome-Browser auf macOS aufgenommen. Es kann geringfügige Unterschiede in diesen Feldern/Buttons in verschiedenen Browsern geben, aber die grundlegende Hervorhebungstechnik bleibt ähnlich.

> [!NOTE]
> Wir besprechen die Werte für das [`type`](/de/docs/Web/HTML/Element/input#type)-Attribut, die spezifische Validierungseinschränkungen erzwingen, einschließlich der Eingabetypen für Farbe, E-Mail und URL, im nächsten Artikel, [Die HTML5-Eingabetypen](/de/docs/Learn/Forms/HTML5_input_types).

#### Passwortfeld

Einer der ursprünglichen Eingabetypen war der Textfeldtyp `password`:

```html
<input type="password" id="pwd" name="pwd" />
```

Der folgende Screenshot zeigt ein Passwort-Eingabefeld, in dem jedes Eingabezeichen als Punkt dargestellt wird.

![Passwortfeld in Chrome 115 auf macOS](password.png)

Der `password`-Wert fügt den eingegebenen Text keine speziellen Einschränkungen hinzu, aber er verbirgt den in das Feld eingegebenen Wert (z. B. mit Punkten oder Sternchen), sodass er von anderen nicht leicht gelesen werden kann.

Beachten Sie, dass dies nur eine Benutzeroberflächenfunktion ist; es sei denn, Sie übermitteln Ihr Formular sicher, wird es im Klartext gesendet, was schlecht für die Sicherheit ist – eine bösartige Partei könnte Ihre Daten abfangen und Passwörter, Kreditkartendaten oder andere gesendete Informationen stehlen. Der beste Weg, Benutzer davor zu schützen, besteht darin, alle Seiten, die Formulare betreffen, über eine sichere Verbindung zu hosten (d. h. unter einer `https://`-Adresse), sodass die Daten verschlüsselt werden, bevor sie gesendet werden.

Browser erkennen die Sicherheitsimplikationen des Sendens von Formulardaten über eine unsichere Verbindung und haben Warnungen, um Benutzer davon abzuhalten, unsichere Formulare zu verwenden. Weitere Informationen zu den Implementierungen von Firefox finden Sie unter [Unsichere Passwörter](/de/docs/Web/Security/Insecure_passwords).

### Versteckter Inhalt

Eine weitere ursprüngliche Textsteuerung ist der `hidden`-Eingabetyp. Dieser wird verwendet, um ein Formularelement zu erstellen, das für den Benutzer unsichtbar ist, aber dennoch zusammen mit den restlichen Formulardaten an den Server gesendet wird, sobald es abgesendet wird – zum Beispiel möchten Sie vielleicht einen Zeitstempel an den Server senden, der angibt, wann eine Bestellung aufgegeben wurde. Da es verborgen ist, kann der Benutzer den Wert weder sehen noch absichtlich bearbeiten, es wird nie den Fokus erhalten und auch nicht von Screenreadern bemerkt.

```html
<input type="hidden" id="timestamp" name="timestamp" value="1286705410" />
```

Wenn Sie ein solches Element erstellen, müssen die Attribute `name` und `value` gesetzt werden. Der Wert kann dynamisch über JavaScript festgelegt werden. Der `hidden`-Eingabetyp sollte kein zugeordnetes Label haben.

Andere Texteingabetypen, wie {{HTMLElement("input/search", "search")}}, {{HTMLElement("input/url", "url")}}, und {{HTMLElement("input/tel", "tel")}}, werden im nächsten Tutorial behandelt, [HTML5 Eingabetypen](/de/docs/Learn/Forms/HTML5_input_types).

## Kontrollierbare Elemente: Checkboxen und Radio-Buttons

Kontrollierbare Elemente sind Steuerelemente, deren Zustand Sie durch Klicken auf sie oder ihre zugeordneten Labels ändern können. Es gibt zwei Arten von kontrollierbaren Elementen: das Kontrollkästchen und den Radio-Button. Beide verwenden das [`checked`](/de/docs/Web/HTML/Element/input/checkbox#checked)-Attribut, um anzugeben, ob das Widget standardmäßig aktiviert ist oder nicht.

Es ist wichtig zu beachten, dass sich diese Widgets nicht genauso verhalten wie andere Formular-Widgets. Für die meisten Formular-Widgets werden, sobald das Formular gesendet wird, alle Widgets, die ein [`name`](/de/docs/Web/HTML/Element/input#name)-Attribut haben, gesendet, auch wenn kein Wert ausgefüllt wurde. Bei kontrollierbaren Elementen werden ihre Werte nur dann gesendet, wenn sie aktiviert sind. Wenn sie nicht aktiviert sind, wird nichts gesendet, nicht einmal ihr Name. Wenn sie aktiviert, aber kein Wert festgelegt ist, wird der Name mit einem Wert von _on_ gesendet.

> [!NOTE]
> Sie können die Beispiele aus diesem Abschnitt auf GitHub unter [checkable-items.html](https://github.com/mdn/learning-area/blob/main/html/forms/native-form-widgets/checkable-items.html) finden ([auch live ansehen](https://mdn.github.io/learning-area/html/forms/native-form-widgets/checkable-items.html)).

Zur maximalen Benutzerfreundlichkeit/Barrierefreiheit wird empfohlen, jede Liste verwandter Elemente in ein {{htmlelement("fieldset")}} zu umfassen, mit einem {{htmlelement("legend")}}, das eine allgemeine Beschreibung der Liste bietet. Jedes einzelne Paar von {{htmlelement("label")}}/{{htmlelement("input")}}-Elementen sollte in einem eigenen Listenelement (oder ähnlich) enthalten sein. Das zugeordnete {{htmlelement('label')}} wird im Allgemeinen sofort vor oder nach dem Radio-Button oder Checkbox platziert, wobei die Anweisungen für die Gruppe von Radio-Buttons oder Checkboxes im Allgemeinen der Inhalt des {{htmlelement("legend")}} sind. Siehe die oben verlinkten Beispiele für strukturelle Beispiele.

### Checkbox

Ein Kontrollkästchen wird mit dem {{HTMLElement("input")}}-Element erstellt, dessen [`type`](/de/docs/Web/HTML/Element/input#type)-Attribut auf den Wert {{HTMLElement("input/checkbox", "checkbox")}} gesetzt ist.

```html
<input type="checkbox" id="questionOne" name="subscribe" value="yes" checked />
```

Verwandte Kontrollkästchen sollten dasselbe [`name`](/de/docs/Web/HTML/Element/input#name)-Attribut verwenden. Das Einschließen des [`checked`](/de/docs/Web/HTML/Element/input/checkbox#checked)-Attributs aktiviert das Kontrollkästchen automatisch, wenn die Seite geladen wird. Durch Klicken auf das Kontrollkästchen oder sein zugeordnetes Label wird das Kontrollkästchen ein- und ausgeschaltet.

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

Der folgende Screenshot zeigt Kontrollkästchen im Standard-, Fokus- und deaktivierten Zustand. Kontrollkästchen im Standard- und deaktivierten Zustand erscheinen aktiviert, während im fokussierten Zustand das Kontrollkästchen deaktiviert ist, mit einem Fokusring darum.

![Standard-, Fokus- und deaktivierte Kontrollkästchen in Chrome 115 auf macOS](checkboxes.png)

> [!NOTE]
> Alle Kontrollkästchen und Radio-Buttons mit dem [`checked`](/de/docs/Web/HTML/Element/input/checkbox#checked)-Attribut beim Laden entsprechen der {{cssxref(':default')}}-Pseudo-Klasse, selbst wenn sie nicht mehr aktiviert sind. Alle, die derzeit aktiviert sind, entsprechen der {{cssxref(':checked')}}-Pseudo-Klasse.

Aufgrund der Ein-Aus-Natur von Kontrollkästchen wird das Kontrollkästchen als Umschalt-Button betrachtet, wobei viele Entwickler und Designer das Standard-Kontrollkästchen-Styling erweitern, um Buttons im Aussehen von Kippschaltern zu erstellen. Sie können [ein Beispiel in Aktion hier sehen](https://mdn.github.io/learning-area/html/forms/toggle-switch-example/) (sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/toggle-switch-example/index.html) an).

### Radio-Button

Ein Radio-Button wird mit dem {{HTMLElement("input")}}-Element erstellt, dessen [`type`](/de/docs/Web/HTML/Element/input#type)-Attribut auf den Wert `radio` gesetzt ist:

```html
<input type="radio" id="soup" name="meal" value="soup" checked />
```

Mehrere Radio-Buttons können miteinander verknüpft werden. Wenn sie den gleichen Wert für ihr [`name`](/de/docs/Web/HTML/Element/input#name)-Attribut haben, gelten sie als eine Gruppe von Buttons. Nur ein Button in einer bestimmten Gruppe darf aktiviert sein; dies bedeutet, dass, wenn einer von ihnen aktiviert ist, alle anderen automatisch deaktiviert werden. Wenn das Formular gesendet wird, wird nur der Wert des aktivierten Radio-Buttons gesendet. Wenn keiner von ihnen aktiviert ist, wird der gesamte Pool von Radio-Buttons als unbekannter Zustand betrachtet und kein Wert wird mit dem Formular gesendet. Sobald einer der Radio-Buttons in einer gleichnamigen Gruppe aktiviert ist, kann der Benutzer nicht alle Buttons gleichzeitig deaktivieren, ohne das Formular zurückzusetzen.

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

Der folgende Screenshot zeigt Standard- und deaktivierte Radio-Buttons im aktivierten Zustand sowie einen fokussierten Radio-Button im deaktivierten Zustand.

![Standard-, Fokus- und deaktivierte Radio-Buttons in Chrome 115 auf macOS](radios.png)

## Tatsächliche Schaltflächen

Der Radio-Button ist trotz seines Namens eigentlich keine Schaltfläche; sehen wir uns tatsächliche Schaltflächen an! Es gibt drei Eingabetypen, die Schaltflächen erzeugen:

- `submit`
  - : Sendet die Formulardaten an den Server. Für {{HTMLElement("button")}}-Elemente führt das Weglassen des `type`-Attributs (oder ein ungültiger Wert von `type`) zu einer Absenden-Schaltfläche.
- `reset`
  - : Setzt alle Formular-Widgets auf ihre Standardwerte zurück.
- `button`
  - : Schaltflächen, die keine automatische Wirkung haben, aber mit JavaScript-Code angepasst werden können.

Dann haben wir noch das {{htmlelement("button")}}-Element selbst. Dieses kann ein `type`-Attribut mit den Werten `submit`, `reset` oder `button` haben, um das Verhalten der oben genannten drei `<input>`-Typen zu imitieren. Der Hauptunterschied zwischen den beiden besteht darin, dass tatsächliche `<button>`-Elemente viel einfacher zu gestalten sind.

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
.buttondemo button,
.buttondemo input {
  all: revert;
}
```

{{ EmbedLiveSample('Actual_buttons', '500', '250') }}

> [!NOTE]
> Der `image`-Eingabetyp wird ebenfalls als Schaltfläche gerendert. Auch darauf werden wir später eingehen.

> [!NOTE]
> Sie können die Beispiele aus diesem Abschnitt auf GitHub unter [button-examples.html](https://github.com/mdn/learning-area/blob/main/html/forms/native-form-widgets/button-examples.html) finden ([auch live ansehen](https://mdn.github.io/learning-area/html/forms/native-form-widgets/button-examples.html)).

Unten finden Sie Beispiele für jeden Button-`<input>`-Typ, zusammen mit dem entsprechenden `<button>`-Typ.

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

Schaltflächen verhalten sich immer gleich, unabhängig davon, ob Sie ein {{HTMLElement("button")}}-Element oder ein {{HTMLElement("input")}}-Element verwenden. Wie Sie aus den Beispielen sehen, erlauben es {{HTMLElement("button")}}-Elemente jedoch, HTML in ihrem Inhalt zu verwenden, das zwischen den öffnenden und schließenden `<button>`-Tags eingefügt wird. {{HTMLElement("input")}}-Elemente andererseits sind [leere Elemente](/de/docs/Glossary/void_element); ihr angezeigter Inhalt wird im `value`-Attribut eingefügt und daher wird nur Klartext als Inhalt akzeptiert.

Der folgende Screenshot zeigt eine Schaltfläche im Standard-, Fokus- und deaktivierten Zustand. Im Fokuszustand gibt es einen Fokusring um die Schaltfläche, und im deaktivierten Zustand ist die Schaltfläche ausgegraut.

![Standard-, Fokus- und deaktivierter Schaltflächenzustand in Chrome 115 auf macOS](buttons.png)

### Bild-Button

Das **Bild-Button**-Steuerelement wird genau wie ein {{HTMLElement("img")}}-Element dargestellt, außer dass es, wenn der Benutzer darauf klickt, sich wie eine Absenden-Schaltfläche verhält.

Ein Bild-Button wird mit einem {{HTMLElement("input")}}-Element erstellt, dessen [`type`](/de/docs/Web/HTML/Element/input#type)-Attribut auf den Wert `image` gesetzt ist. Dieses Element unterstützt genau den gleichen Satz von Attributen wie das {{HTMLElement("img")}}-Element, sowie alle von anderen Formularschaltflächen unterstützten Attribute.

```html
<input type="image" alt="Click me!" src="my-img.png" width="80" height="30" />
```

Wenn der Bild-Button verwendet wird, um das Formular zu übermitteln, sendet dieses Steuerelement nicht seinen Wert – stattdessen werden die X- und Y-Koordinaten des Klicks auf das Bild gesendet (die Koordinaten sind relativ zum Bild, wobei die obere linke Ecke des Bildes die Koordinate (0, 0) darstellt). Die Koordinaten werden als zwei Schlüssel/Wert-Paare gesendet:

- Der X-Wert-Schlüssel ist der Wert des [`name`](/de/docs/Web/HTML/Element/input#name)-Attributs gefolgt von dem String "_.x_".
- Der Y-Wert-Schlüssel ist der Wert des [`name`](/de/docs/Web/HTML/Element/input#name)-Attributs gefolgt von dem String "_.y_".

Wenn Sie also beispielsweise auf das Bild an der Koordinate (123, 456) klicken und es über die `get`-Methode gesendet wird, sehen Sie die Werte, die an die URL angehängt werden, wie folgt:

```url
http://foo.com?pos.x=123&pos.y=456
```

Dies ist eine sehr praktische Methode, um eine "Hot Map" zu erstellen. Wie diese Werte gesendet und abgerufen werden, wird im Artikel [Senden von Formulardaten](/de/docs/Learn/Forms/Sending_and_retrieving_form_data) detailliert beschrieben.

## Dateiauswahl

Es gibt noch einen letzten `<input>`-Typ, der uns im frühen HTML erreicht hat: den Dateieingabetyp. Formulare können Dateien an einen Server senden (diese spezielle Aktion wird ebenfalls im Artikel [Senden von Formulardaten](/de/docs/Learn/Forms/Sending_and_retrieving_form_data) behandelt). Das Dateiauswahl-Widget kann verwendet werden, um eine oder mehrere Dateien zum Senden auszuwählen.

Um ein [Dateiauswahl-Widget](/de/docs/Web/HTML/Element/input/file) zu erstellen, verwenden Sie das {{HTMLElement("input")}}-Element, dessen [`type`](/de/docs/Web/HTML/Element/input#type)-Attribut auf `file` gesetzt ist. Die akzeptierten Dateitypen können mit dem Attribut [`accept`](/de/docs/Web/HTML/Element/input#accept) eingeschränkt werden. Darüber hinaus, wenn Sie dem Benutzer erlauben möchten, mehr als eine Datei auszuwählen, können Sie dies durch Hinzufügen des Attributs [`multiple`](/de/docs/Web/HTML/Element/input#multiple) tun.

### Beispiel

In diesem Beispiel wird ein Dateiauswahl-Widget erstellt, das Grafikbilddateien anfordert. In diesem Fall darf der Benutzer mehrere Dateien auswählen.

```html
<input type="file" name="file" id="file" accept="image/*" multiple />
```

Auf einigen mobilen Geräten kann der Dateiauswähler auf Fotos, Videos und Audio zugreifen, die direkt von der Kamera und dem Mikrofon des Geräts aufgenommen wurden, indem Aufnahmeinformationen wie folgt zum `accept`-Attribut hinzugefügt werden:

```html
<input type="file" accept="image/*;capture=camera" />
<input type="file" accept="video/*;capture=camcorder" />
<input type="file" accept="audio/*;capture=microphone" />
```

Der folgende Screenshot zeigt das Dateiauswahl-Widget im Standard-, Fokus- und deaktivierten Zustand, wenn keine Datei ausgewählt ist.

![Dateiauswahl-Widget in Standard-, Fokus- und deaktivierten Zuständen in Chrome 115 auf macOS](filepickers.png)

## Gemeinsame Attribute

Viele der zum Definieren von Formularsteuerelementen verwendeten Elemente haben einige ihrer eigenen spezifischen Attribute. Es gibt jedoch eine Reihe von Attributen, die allen Formularelementen gemeinsam sind. Einige davon sind Ihnen bereits begegnet, aber unten finden Sie eine Liste dieser gemeinsamen Attribute zur Referenz:

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
        Dieses Boolean-Attribut ermöglicht es Ihnen anzugeben, dass das Element beim Laden der Seite automatisch den Eingabefokus haben soll.
        Nur ein formularassoziiertes Element in einem Dokument kann dieses Attribut haben.
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
        Dieses Boolean-Attribut gibt an, dass der Benutzer nicht mit dem Element interagieren kann.
        Wenn dieses Attribut nicht angegeben ist, erbt das Element seine Einstellung vom umschließenden Element, z.B. {{HTMLElement("fieldset")}};
        wenn es kein umschließendes Element mit dem Attribut <code>disabled</code> gibt, dann ist das Element aktiviert.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Element/input#form">form</a></code>
      </td>
      <td></td>
      <td>
        Das <code>&#x3C;form></code>-Element, dem das Widget zugeordnet ist, wird verwendet, wenn es nicht in diesem Formular verschachtelt ist.
        Der Wert des Attributs muss der <code>id</code> eines {{HTMLElement("form")}}-Elements im selben Dokument entsprechen.
        Dies ermöglicht es, ein Formularsteuerelement einem Formular zuzuordnen, das sich außerhalb befindet, selbst wenn es innerhalb eines anderen Formularelements ist.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Element/input#name">name</a></code>
      </td>
      <td></td>
      <td>Der Name des Elements; dieser wird zusammen mit den Formulardaten gesendet.</td>
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

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren – siehe [Testen Sie Ihr Wissen: Grundlegende Steuerungen](/de/docs/Learn/Forms/Test_your_skills:_Basic_controls).

## Zusammenfassung

Dieser Artikel hat die älteren Eingabetypen behandelt – die ursprüngliche Gruppe, die in den frühen Tagen von HTML eingeführt wurde und die in allen Browsern gut unterstützt wird. Im nächsten Abschnitt werden wir uns die moderneren Werte des `type`-Attributs ansehen.

{{PreviousMenuNext("Learn/Forms/How_to_structure_a_web_form", "Learn/Forms/HTML5_input_types", "Learn/Forms")}}

### Erweiterte Themen

- [Anleitung zum Erstellen benutzerdefinierter Formularsteuerungen](/de/docs/Learn/Forms/How_to_build_custom_form_controls)
- [Formulare mit JavaScript senden](/de/docs/Learn/Forms/Sending_forms_through_JavaScript)
- [Eigenschaftskompatibilitätstabelle für Formular-Widgets](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
