---
title: Grundlegende native Formularsteuerungen
slug: Learn_web_development/Extensions/Forms/Basic_native_form_controls
l10n:
  sourceCommit: 2595b22899b54f079721069704128fb7f0451995
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Forms/How_to_structure_a_web_form", "Learn_web_development/Extensions/Forms/HTML5_input_types", "Learn_web_development/Extensions/Forms")}}

Im [vorherigen Artikel](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form) haben wir ein funktionales Webformular-Beispiel ausgezeichnet, einige Formularsteuerungen und häufige Strukturelemente eingeführt und uns auf Barrierefreiheits-Praktiken konzentriert. Als Nächstes werden wir die Funktionalität der verschiedenen Formularsteuerungen oder Widgets im Detail betrachten — alle verfügbaren Optionen, um verschiedene Arten von Daten zu sammeln. In diesem speziellen Artikel schauen wir uns den ursprünglichen Satz von Formularsteuerungen an, die seit den frühen Tagen des Webs in allen Browsern verfügbar sind.

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
        Ein detailliertes Verständnis der ursprünglichen nativen Formular-Widgets, die in Browsern für die Datenerfassung verfügbar sind, und wie man sie mit HTML implementiert.
      </td>
    </tr>
  </tbody>
</table>

Sie haben bereits einige Formularelemente kennengelernt, einschließlich {{HTMLelement('form')}}, {{HTMLelement('fieldset')}}, {{HTMLelement('legend')}}, {{HTMLelement('textarea')}}, {{HTMLelement('label')}}, {{HTMLelement('button')}} und {{HTMLelement('input')}}. Dieser Artikel behandelt:

- Die gängigen Eingabetypen {{HTMLelement('input/button', 'button')}}, {{HTMLelement('input/checkbox', 'checkbox')}}, {{HTMLelement('input/file', 'file')}}, {{HTMLelement('input/hidden', 'hidden')}}, {{HTMLelement('input/image', 'image')}}, {{HTMLelement('input/password', 'password')}}, {{HTMLelement('input/radio', 'radio')}}, {{HTMLelement('input/reset', 'reset')}}, {{HTMLelement('input/submit', 'submit')}}, und {{HTMLelement('input/text', 'text')}}.
- Einige der Attribute, die allen Formularsteuerungen gemeinsam sind.

> [!NOTE]
> Wir behandeln zusätzliche, leistungsfähigere Formularsteuerungen in den nächsten beiden Artikeln. Wenn Sie eine fortgeschrittenere Referenz suchen, sollten Sie unsere [HTML-Formular-Elementreferenz](/de/docs/Web/HTML/Element#forms) und insbesondere unsere umfangreiche [`<input>` Typen](/de/docs/Web/HTML/Element/input) Referenz konsultieren.

## Texteingabefelder

Text {{htmlelement("input")}} Felder sind die grundlegendsten Formular-Widgets. Sie sind eine sehr praktische Möglichkeit, dem Benutzer die Eingabe beliebiger Daten zu ermöglichen, und wir haben bereits einige einfache Beispiele gesehen.

> [!NOTE]
> HTML-Formular-Textfelder sind einfache Nur-Text-Eingabesteuerungen. Das bedeutet, dass Sie sie nicht für die Bearbeitung von formatiertem Text (fett, kursiv usw.) verwenden können. Alle Rich-Text-Editoren, die Sie finden, sind benutzerdefinierte Widgets, die mit HTML, CSS und JavaScript erstellt wurden.

Alle grundlegenden Textsteuerelemente haben einige gemeinsame Verhaltensweisen:

- Sie können als [`readonly`](/de/docs/Web/HTML/Element/input#readonly) markiert werden (der Benutzer kann den Eingabewert nicht ändern, aber er wird trotzdem mit den restlichen Formulardaten gesendet) oder als [`disabled`](/de/docs/Web/HTML/Element/input#disabled) (der Eingabewert kann nicht geändert werden und wird nie mit den restlichen Formulardaten gesendet).
- Sie können einen [`placeholder`](/de/docs/Web/HTML/Element/input#placeholder) haben; dies ist der Text, der im Text-Eingabefeld erscheint und kurz den Zweck des Feldes beschreiben sollte.
- Sie können in der [`size`](/de/docs/Web/HTML/Attributes/size) (der physischen Größe des Feldes) und der [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength) (der maximalen Anzahl von Zeichen, die in das Feld eingegeben werden können) eingeschränkt werden.
- Sie können von der Rechtschreibprüfung profitieren (mithilfe des [`spellcheck`](/de/docs/Web/HTML/Global_attributes/spellcheck) Attributs).

> [!NOTE]
> Das {{htmlelement("input")}} Element ist einzigartig unter den HTML-Elementen, da es je nach Wert seines [`type`](/de/docs/Web/HTML/Element/input#type) Attributs viele Formen annehmen kann. Es wird zur Erstellung der meisten Arten von Formular-Widgets verwendet, einschließlich einzeiliger Textfelder, Zeit- und Datumssteuerungen, Steuerungen ohne Texteingabe wie Kontrollkästchen, Optionsfelder und Farbwähler sowie Schaltflächen.

### Einzeilige Textfelder

Ein einzeiliges Textfeld wird mit einem {{HTMLElement("input")}} Element erstellt, dessen [`type`](/de/docs/Web/HTML/Element/input#type) Attributswert auf `text` gesetzt ist oder indem das [`type`](/de/docs/Web/HTML/Element/input#type) Attribut weggelassen wird (`text` ist der Standardwert). Der Wert `text` für dieses Attribut ist auch der Rückfallwert, wenn der von Ihnen angegebene Wert für das [`type`](/de/docs/Web/HTML/Element/input#type) Attribut vom Browser nicht bekannt ist (zum Beispiel wenn Sie `type="color"` angeben und der Browser keine nativen Farbwähler unterstützt).

> [!NOTE]
> Sie können Beispiele für alle einzeiligen Textfeldtypen auf GitHub bei [single-line-text-fields.html](https://github.com/mdn/learning-area/blob/main/html/forms/native-form-widgets/single-line-text-fields.html) finden ([siehe es auch live](https://mdn.github.io/learning-area/html/forms/native-form-widgets/single-line-text-fields.html)).

Hier ist ein einfaches Beispiel für ein einzeiliges Textfeld:

```html
<input type="text" id="comment" name="comment" value="I'm a text field" />
```

Einzeilige Textfelder haben nur eine echte Einschränkung: Wenn Sie Text mit Zeilenumbrüchen eingeben, entfernt der Browser diese Zeilenumbrüche, bevor er die Daten an den Server sendet.

Das folgende Bildschirmfoto zeigt eine Texteingabe im Standard-, Fokus- und deaktivierten Zustand. Die meisten Browser zeigen den fokussierten Zustand mithilfe eines Fokus-Rings um das Steuerelement und den deaktivierten Zustand mit grauem Text oder einem verblassten/halbtransparenten Steuerelement an.

![Screenshot der Standard-, Fokus- und deaktivierten Zustände der Texteingabe in Chrome auf macOS](disabled.png)

Die in diesem Dokument verwendeten Screenshots wurden im Chrome-Browser auf macOS aufgenommen. Es kann geringfügige Abweichungen in diesen Feldern/Schaltflächen in verschiedenen Browsern geben, aber die grundlegende Hervorhebungstechnik bleibt ähnlich.

> [!NOTE]
> Wir diskutieren Werte für das [`type`](/de/docs/Web/HTML/Element/input#type) Attribut, die spezifische Validierungseinschränkungen erzwingen, einschließlich Farb-, E-Mail- und URL-Eingabetypen, im nächsten Artikel, [Die HTML5-Eingabetypen](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types).

#### Passwortfeld

Einer der ursprünglichen Eingabetypen war der `password`-Textfeldtyp:

```html
<input type="password" id="pwd" name="pwd" />
```

Das folgende Bildschirmfoto zeigt das Passwort-Eingabefeld, in dem jedes Eingabezeichen als Punkt dargestellt wird.

![Passwortfeld in Chrome 115 unter macOS](password.png)

Der `password`-Wert fügt dem eingegebenen Text keine speziellen Einschränkungen hinzu, er verdeckt jedoch den in das Feld eingegebenen Wert (z. B. mit Punkten oder Sternchen), sodass ihn andere nicht leicht lesen können.

Beachten Sie, dass dies nur eine Benutzeroberflächenfunktion ist; es sei denn, Sie senden Ihr Formular sicher, wird es im Klartext gesendet, was schlecht für die Sicherheit ist — eine böswillige Partei könnte Ihre Daten abfangen und Passwörter, Kreditkartendaten oder andere Informationen stehlen, die Sie eingereicht haben. Der beste Weg, Benutzer davor zu schützen, besteht darin, alle Seiten, die Formulare enthalten, über eine sichere Verbindung (d.h. unter einer `https://`-Adresse) zu hosten, damit die Daten verschlüsselt werden, bevor sie gesendet werden.

Browser erkennen die Sicherheitsimplikationen beim Senden von Formulardaten über eine unsichere Verbindung und haben Warnungen, um Benutzer davon abzuhalten, unsichere Formulare zu verwenden. Weitere Informationen zu den Implementierungen von Firefox finden Sie unter [Unsichere Passwörter](/de/docs/Web/Security/Insecure_passwords).

### Verborgene Inhalte

Ein weiteres originales Textsteuerelement ist der `hidden` Eingabetyp. Dieser wird verwendet, um ein Formularelement zu erstellen, das für den Benutzer unsichtbar ist, aber trotzdem mit dem Rest der Formulardaten an den Server gesendet wird, sobald das Formular abgeschickt wird — zum Beispiel könnten Sie einen Zeitstempel an den Server übermitteln, der angibt, wann eine Bestellung aufgegeben wurde. Da es verborgen ist, kann der Benutzer den Wert weder sehen noch absichtlich bearbeiten, es wird niemals den Fokus erhalten, und ein Bildschirmlesegerät wird es auch nicht bemerken.

```html
<input type="hidden" id="timestamp" name="timestamp" value="1286705410" />
```

Wenn Sie ein solches Element erstellen, ist es erforderlich, seine `name` und `value` Attribute festzulegen. Der Wert kann dynamisch über JavaScript gesetzt werden. Der `hidden` Eingabetyp sollte kein zugeordnetes Label haben.

Andere Text-Eingabetypen, wie {{HTMLElement("input/search", "search")}}, {{HTMLElement("input/url", "url")}}, und {{HTMLElement("input/tel", "tel")}}, werden im nächsten Tutorial behandelt, [HTML5-Eingabetypen](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types).

## Ankreuzbare Elemente: Kontrollkästchen und Optionsfelder

Ankreuzbare Elemente sind Steuerungen, deren Zustand Sie durch Anklicken ändern können, sowohl das Element selbst als auch sein zugehöriges Label. Es gibt zwei Arten von ankreuzbaren Elementen: das Kontrollkästchen und das Optionsfeld. Beide verwenden das [`checked`](/de/docs/Web/HTML/Element/input/checkbox#checked) Attribut, um anzugeben, ob das Widget standardmäßig aktiviert ist oder nicht.

Es ist bemerkenswert, dass sich diese Widgets nicht genau wie andere Formular-Widgets verhalten. Für die meisten Formular-Widgets werden, sobald das Formular abgeschickt wird, alle Widgets, die ein [`name`](/de/docs/Web/HTML/Element/input#name) Attribut haben, gesendet, selbst wenn kein Wert ausgefüllt wurde. Bei ankreuzbaren Elementen werden deren Werte jedoch nur gesendet, wenn sie aktiviert sind. Wenn sie nicht aktiviert sind, wird nichts gesendet, nicht einmal ihr Name. Wenn sie aktiviert sind, aber keinen Wert haben, wird der Name mit einem Wert von _on_ gesendet.

> [!NOTE]
> Sie können die Beispiele aus diesem Abschnitt auf GitHub als [checkable-items.html](https://github.com/mdn/learning-area/blob/main/html/forms/native-form-widgets/checkable-items.html) finden (auch [live ansehen](https://mdn.github.io/learning-area/html/forms/native-form-widgets/checkable-items.html)).

Für maximale Benutzerfreundlichkeit/Barrierefreiheit wird empfohlen, jede Liste verwandter Elemente in einem {{htmlelement("fieldset")}} zu umgeben, mit einem {{htmlelement("legend")}}, das eine allgemeine Beschreibung der Liste liefert. Jedes einzelne Paar von {{htmlelement("label")}}/{{htmlelement("input")}} Elementen sollte in seinem eigenen Listenelement (oder ähnlichem) enthalten sein. Das zugeordnete {{htmlelement('label')}} wird in der Regel unmittelbar vor oder nach dem Optionsfeld oder Kontrollkästchen platziert, wobei die Anweisungen für die Gruppe der Optionsfelder oder Kontrollkästchen in der Regel der Inhalt des {{htmlelement("legend")}} sind. Sehen Sie sich die oben verlinkten Beispiele für strukturelle Beispiele an.

### Kontrollkästchen

Ein Kontrollkästchen wird mit dem {{HTMLElement("input")}} Element erstellt, dessen [`type`](/de/docs/Web/HTML/Element/input#type) Attribut auf den Wert {{HTMLElement("input/checkbox", "checkbox")}} gesetzt ist:

```html
<input type="checkbox" id="questionOne" name="subscribe" value="yes" checked />
```

Verwandte Kontrollkästchen-Elemente sollten das gleiche [`name`](/de/docs/Web/HTML/Element/input#name) Attribut verwenden. Die Angabe des [`checked`](/de/docs/Web/HTML/Element/input/checkbox#checked) Attributs macht das Kontrollkästchen automatisch beim Laden der Seite aktiviert. Durch Klicken auf das Kontrollkästchen oder sein zugehöriges Label wird das Kontrollkästchen umgeschaltet.

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

Das folgende Bildschirmfoto zeigt Kontrollkästchen im Standard-, Fokus- und deaktivierten Zustand. Kontrollkästchen im Standard- und deaktivierten Zustand erscheinen aktiviert, während sich im Fokuszustand ein Fokus-Ring um das Kontrollkästchen befindet, es jedoch nicht aktiviert ist.

![Standard-, Fokus- und deaktivierte Kontrollkästchen in Chrome 115 unter macOS](checkboxes.png)

> [!NOTE]
> Kontrollkästchen und Optionsfelder mit dem [`checked`](/de/docs/Web/HTML/Element/input/checkbox#checked) Attribut beim Laden entsprechen der {{cssxref(':default')}} Pseudoklasse, selbst wenn sie nicht mehr aktiviert sind. Alle, die derzeit aktiviert sind, entsprechen der {{cssxref(':checked')}} Pseudoklasse.

Aufgrund der Ein/Aus-Natur von Kontrollkästchen wird das Kontrollkästchen als Umschaltschalter betrachtet, wobei viele Entwickler und Designer auf dem Standard-Kontrollkästchenstil aufbauen, um Schaltflächen zu erstellen, die wie Kippschalter aussehen. Sie können [ein Beispiel in Aktion hier sehen](https://mdn.github.io/learning-area/html/forms/toggle-switch-example/) (auch der [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/toggle-switch-example/index.html)).

### Optionsfeld

Ein Optionsfeld wird mit dem {{HTMLElement("input")}} Element erstellt, dessen [`type`](/de/docs/Web/HTML/Element/input#type) Attribut auf den Wert `radio` gesetzt ist:

```html
<input type="radio" id="soup" name="meal" value="soup" checked />
```

Mehrere Optionsfelder können miteinander verknüpft werden. Wenn sie denselben Wert für ihr [`name`](/de/docs/Web/HTML/Element/input#name) Attribut haben, werden sie als in derselben Gruppe von Schaltflächen befindlich betrachtet. Nur eine Schaltfläche in einer gegebenen Gruppe kann gleichzeitig aktiviert sein; dies bedeutet, dass, wenn eine von ihnen aktiviert wird, alle anderen automatisch deaktiviert werden. Wenn das Formular abgeschickt wird, wird nur der Wert des aktivierten Optionsfeldes gesendet. Wenn keines von ihnen aktiviert ist, wird die gesamte Gruppe von Optionsfeldern als im unbekannten Zustand betrachtet und kein Wert wird mit dem Formular gesendet. Sobald eines der Optionsfelder in einer Gruppe mit demselben Namen aktiviert wird, ist es nicht möglich, dass der Benutzer alle Schaltflächen wieder deaktiviert, ohne das Formular zurückzusetzen.

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

Das folgende Bildschirmfoto zeigt Standard- und deaktivierte Optionsfelder im aktivierten Zustand sowie ein fokussiertes Optionsfeld im deaktivierten Zustand.

![Standard-, Fokus- und deaktivierte Optionsfelder in Chrome 115 unter macOS](radios.png)

## Tatsächliche Schaltflächen

Das Optionsfeld ist eigentlich keine Schaltfläche, trotz seines Namens; schauen wir uns also tatsächliche Schaltflächen an! Es gibt drei Eingabetypen, die Schaltflächen erzeugen:

- `submit`
  - : Sendet die Formulardaten an den Server. Bei {{HTMLElement("button")}} Elementen führt das Weglassen des `type` Attributs (oder ein ungültiger Wert für `type`) zu einer Absendeschaltfläche.
- `reset`
  - : Setzt alle Formular-Widgets auf ihre Standardwerte zurück.
- `button`
  - : Schaltflächen, die keine automatische Wirkung haben, aber durch JavaScript-Code angepasst werden können.

Dann haben wir auch das {{htmlelement("button")}} Element selbst. Dieses kann ein `type` Attribut mit dem Wert `submit`, `reset`, oder `button` haben, um das Verhalten der oben genannten drei `<input>` Typen nachzuahmen. Der Hauptunterschied zwischen den beiden besteht darin, dass tatsächliche `<button>` Elemente viel einfacher zu stylen sind.

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
> Der `image` Eingabetyp wird ebenfalls als Schaltfläche gerendert. Wir werden das später ebenfalls behandeln.

> [!NOTE]
> Sie können die Beispiele aus diesem Abschnitt auf GitHub als [button-examples.html](https://github.com/mdn/learning-area/blob/main/html/forms/native-form-widgets/button-examples.html) finden (auch [live ansehen](https://mdn.github.io/learning-area/html/forms/native-form-widgets/button-examples.html)).

Unten finden Sie Beispiele für jeden `<input>` Typ von Schaltflächen, zusammen mit dem äquivalenten `<button>` Typ.

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

Schaltflächen verhalten sich immer gleich, ganz gleich, ob Sie ein {{HTMLElement("button")}} Element oder ein {{HTMLElement("input")}} Element verwenden. Wie Sie aus den Beispielen sehen können, ermöglichen {{HTMLElement("button")}} Elemente jedoch die Verwendung von HTML in ihrem Inhalt, der zwischen den öffnenden und schließenden `<button>` Tags eingefügt wird. {{HTMLElement("input")}} Elemente hingegen sind {{Glossary("void_element", "leere Elemente")}}; ihr angezeigter Inhalt wird im `value` Attribut eingefügt und akzeptiert daher nur einfachen Text als Inhalt.

Das folgende Bildschirmfoto zeigt eine Schaltfläche im Standard-, Fokus- und deaktivierten Zustand. Im Fokuszustand gibt es einen Fokus-Ring um die Schaltfläche, und im deaktivierten Zustand ist die Schaltfläche ausgegraut.

![Standard-, Fokus- und deaktivierte Schaltflächenzustände in Chrome 115 unter macOS](buttons.png)

### Bildschaltfläche

Die **Bildschaltfläche** Steuerung wird genau wie ein {{HTMLElement("img")}} Element gerendert, außer dass sie wie eine Absendeschaltfläche funktioniert, wenn der Benutzer darauf klickt.

Eine Bildschaltfläche wird mit einem {{HTMLElement("input")}} Element erstellt, dessen [`type`](/de/docs/Web/HTML/Element/input#type) Attribut auf den Wert `image` gesetzt ist. Dieses Element unterstützt genau denselben Satz von Attributen wie das {{HTMLElement("img")}} Element, plus alle von anderen Formular-Schaltflächen unterstützten Attribute.

```html
<input type="image" alt="Click me!" src="my-img.png" width="80" height="30" />
```

Wenn die Bildschaltfläche zum Abschicken des Formulars verwendet wird, sendet diese Steuerung nicht ihren Wert — stattdessen werden die X- und Y-Koordinaten des Klicks auf das Bild gesendet (die Koordinaten sind relativ zum Bild, was bedeutet, dass die obere linke Ecke des Bildes die Koordinate (0, 0) darstellt). Die Koordinaten werden als zwei Schlüssel/Wert-Paare gesendet:

- Der X-Wert-Schlüssel ist der Wert des [`name`](/de/docs/Web/HTML/Element/input#name) Attributs gefolgt von der Zeichenfolge "_.x_".
- Der Y-Wert-Schlüssel ist der Wert des [`name`](/de/docs/Web/HTML/Element/input#name) Attributs gefolgt von der Zeichenfolge "_.y_".

Zum Beispiel, wenn Sie auf das Bild an der Koordinate (123, 456) klicken und es über die `get` Methode senden, sehen Sie die Werte wie folgt an die URL angehängt:

```url
http://foo.com?pos.x=123&pos.y=456
```

Dies ist eine sehr bequeme Möglichkeit, eine "heiße Karte" zu erstellen. Wie diese Werte gesendet und abgerufen werden, ist im Artikel [Formulardaten senden und abrufen](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) detailliert beschrieben.

## Dateiauswahl

Es gibt einen letzten `<input>` Typ, der uns in frühzeitigem HTML zur Verfügung gestellt wurde: den Dateieingabetyp. Formulare können Dateien an einen Server senden (diese spezifische Aktion ist ebenfalls im Artikel [Formulardaten senden und abrufen](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) detailliert beschrieben). Das Dateiauswahlelement kann verwendet werden, um eine oder mehrere Dateien zur Übermittlung auszuwählen.

Um ein [Dateiauswahlelement](/de/docs/Web/HTML/Element/input/file) zu erstellen, verwenden Sie das {{HTMLElement("input")}} Element, dessen [`type`](/de/docs/Web/HTML/Element/input#type) Attribut auf `file` gesetzt ist. Die Art der akzeptierten Dateien kann mithilfe des [`accept`](/de/docs/Web/HTML/Element/input#accept) Attributs eingeschränkt werden. Zusätzlich, wenn Sie dem Benutzer erlauben möchten, mehr als eine Datei auszuwählen, können Sie dies durch Hinzufügen des [`multiple`](/de/docs/Web/HTML/Element/input#multiple) Attributs tun.

### Beispiel

In diesem Beispiel wird ein Dateiauswahlelement erstellt, das Grafikbilddateien anfordert. In diesem Fall darf der Benutzer mehrere Dateien auswählen.

```html
<input type="file" name="file" id="file" accept="image/*" multiple />
```

Auf einigen mobilen Geräten kann der Dateiauswähler auf Fotos, Videos und Audio, die direkt von der Kamera und dem Mikrofon des Geräts aufgenommen wurden, zugreifen, indem Aufnahmedaten wie folgt zum `accept` Attribut hinzugefügt werden:

```html
<input type="file" accept="image/*;capture=camera" />
<input type="file" accept="video/*;capture=camcorder" />
<input type="file" accept="audio/*;capture=microphone" />
```

Das folgende Bildschirmfoto zeigt das Dateiauswahlelement im Standard-, Fokus- und deaktivierten Zustand, wenn keine Datei ausgewählt ist.

![Dateiauswahl-Widget in Standard-, Fokus- und deaktivierten Zuständen in Chrome 115 auf macOS](filepickers.png)

## Allgemeine Attribute

Viele der verwendeten Elemente zur Definition von Formularsteuerungen haben einige ihrer eigenen spezifischen Attribute. Es gibt jedoch eine Reihe von Attributen, die allen Formularelementen gemeinsam sind. Einige davon kennen Sie bereits, aber unten finden Sie eine Liste dieser allgemeinen Attribute als Referenz:

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
        Dieses Boolean-Attribut ermöglicht Ihnen, anzugeben, dass das Element beim Laden der Seite automatisch den Eingabefokus haben soll.
        Nur ein formularzugehöriges Element in einem Dokument kann dieses Attribut angegeben haben.
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
        Wenn dieses Attribut nicht angegeben ist, erbt das Element seine Einstellung vom enthaltenen Element, zum Beispiel {{HTMLElement("fieldset")}};
        wenn es kein enthaltendes Element mit gesetztem <code>disabled</code> Attribut gibt, ist das Element aktiviert.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Element/input#form">form</a></code>
      </td>
      <td></td>
      <td>
        Das <code>&#x3C;form></code> Element, mit dem das Widget verbunden ist, wird verwendet, wenn es nicht innerhalb dieses Formulars verschachtelt ist.
        Der Wert des Attributs muss das <code>id</code> Attribut eines {{HTMLElement("form")}} Elements im selben Dokument sein.
        Dies ermöglicht Ihnen, ein Formularelement mit einem Formular zu verbinden, welches es nicht enthält, selbst wenn es innerhalb eines anderen Formularelements ist.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Element/input#name">name</a></code>
      </td>
      <td></td>
      <td>Der Name des Elements; dies wird mit den Formulardaten übermittelt.</td>
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

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, dass Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Grundlegende Steuerungen](/de/docs/Learn_web_development/Extensions/Forms/Test_your_skills:_Basic_controls).

## Zusammenfassung

Dieser Artikel hat die älteren Eingabetypen behandelt — den ursprünglichen Satz, der zu den frühen Tagen von HTML eingeführt wurde und in allen Browsern gut unterstützt wird. Im nächsten Abschnitt schauen wir uns die moderneren Werte des `type` Attributs an.

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/How_to_structure_a_web_form", "Learn_web_development/Extensions/Forms/HTML5_input_types", "Learn_web_development/Extensions/Forms")}}
