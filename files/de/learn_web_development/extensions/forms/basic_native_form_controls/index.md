---
title: Grundlegende native Formularelemente
slug: Learn_web_development/Extensions/Forms/Basic_native_form_controls
l10n:
  sourceCommit: 6ef7bc04d63cf8b512bdbea149a6cb875cc063e3
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/How_to_structure_a_web_form", "Learn_web_development/Extensions/Forms/HTML5_input_types", "Learn_web_development/Extensions/Forms")}}

Im [vorherigen Artikel](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form) haben wir ein funktionales Webformular-Beispiel markiert und dabei einige Formularelemente und allgemeine Strukturelemente vorgestellt, wobei der Fokus auf den besten Praktiken zur Barrierefreiheit lag. Als nächstes werden wir die Funktionalität der verschiedenen Formularelemente, oder Widgets, im Detail betrachten – wir untersuchen alle verschiedenen Optionen, die zur Verfügung stehen, um unterschiedliche Arten von Daten zu sammeln. In diesem speziellen Artikel werden wir uns mit der ursprünglichen Reihe von Formularelementen beschäftigen, die seit den frühen Tagen des Web in allen Browsern verfügbar sind.

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
        Das ursprüngliche Set an nativen Formular-Widgets in den Browsern zum Sammeln von Daten im Detail zu verstehen und wie man sie mit HTML implementiert.
      </td>
    </tr>
  </tbody>
</table>

Sie haben bereits einige Formularelemente kennengelernt, darunter {{HTMLelement('form')}}, {{HTMLelement('fieldset')}}, {{HTMLelement('legend')}}, {{HTMLelement('textarea')}}, {{HTMLelement('label')}}, {{HTMLelement('button')}} und {{HTMLelement('input')}}. Dieser Artikel behandelt:

- Die allgemeinen Eingabetypen {{HTMLelement('input/button', 'button')}}, {{HTMLelement('input/checkbox', 'checkbox')}}, {{HTMLelement('input/file', 'file')}}, {{HTMLelement('input/hidden', 'hidden')}}, {{HTMLelement('input/image', 'image')}}, {{HTMLelement('input/password', 'password')}}, {{HTMLelement('input/radio', 'radio')}}, {{HTMLelement('input/reset', 'reset')}}, {{HTMLelement('input/submit', 'submit')}} und {{HTMLelement('input/text', 'text')}}.
- Einige der Attribute, die für alle Formularelemente üblich sind.

> [!NOTE]
> Wir behandeln zusätzliche, leistungsfähigere Formularelemente in den nächsten beiden Artikeln. Wenn Sie eine fortgeschrittenere Referenz wünschen, sollten Sie unsere [HTML-Formularelement-Referenz](/de/docs/Web/HTML/Reference/Elements#forms) konsultieren, insbesondere unsere umfangreiche Referenz zu den [`<input>`-Typen](/de/docs/Web/HTML/Reference/Elements/input).

## Text-Eingabefelder

Text-{{htmlelement("input")}}-Felder sind die grundlegendsten Formular-Widgets. Sie sind eine sehr bequeme Möglichkeit, dem Benutzer die Eingabe jeglicher Daten zu ermöglichen, und wir haben bereits einige einfache Beispiele gesehen.

> [!NOTE]
> HTML-Formular-Textfelder sind einfache Klartext-Eingabesteuerungen. Das bedeutet, dass Sie sie nicht für die Durchführung einer Rich-Text-Bearbeitung (fett, kursiv, etc.) verwenden können. Alle Rich-Text-Editoren, die Sie antreffen, sind benutzerdefinierte Widgets, die mit HTML, CSS und JavaScript erstellt wurden.

Alle grundlegenden Text-Steuerelemente teilen einige gemeinsame Verhaltensweisen:

- Sie können als [`readonly`](/de/docs/Web/HTML/Reference/Elements/input#readonly) (der Benutzer kann den Eingabewert nicht ändern, aber er wird dennoch mit den restlichen Formulardaten gesendet) oder [`disabled`](/de/docs/Web/HTML/Reference/Elements/input#disabled) (der Eingabewert kann nicht geändert werden und wird niemals mit den restlichen Formulardaten gesendet) markiert werden.
- Sie können einen [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder) haben; dies ist der Text, der im Text-Eingabefeld erscheint und kurz den Zweck des Feldes beschreiben sollte.
- Sie können in [`size`](/de/docs/Web/HTML/Reference/Attributes/size) (der physische Größe der Box) und [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength) (die maximale Anzahl an Zeichen, die in das Feld eingegeben werden können) eingeschränkt werden.
- Sie können von einer Rechtschreibprüfung profitieren (durch das [`spellcheck`](/de/docs/Web/HTML/Reference/Global_attributes/spellcheck)-Attribut).

> [!NOTE]
> Das {{htmlelement("input")}}-Element ist einzigartig unter den HTML-Elementen, da es je nach [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attributwert viele Formen annehmen kann. Es wird verwendet, um die meisten Arten von Formular-Widgets zu erstellen, einschließlich einzeiliger Textfelder, Zeit- und Datumssteuerungen, Steuerelemente ohne Texteingabe wie Kontrollkästchen, Radiobuttons und Farbauswähler sowie Schaltflächen.

### Einzeilige Textfelder

Ein einzeiliges Textfeld wird erstellt, indem man ein {{HTMLElement("input")}}-Element verwendet, dessen [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attributwert auf `text` gesetzt ist, oder indem man das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut ganz weglässt (`text` ist der Standardwert). Der Wert `text` für dieses Attribut ist auch der Fallback-Wert, wenn der von Ihnen angegebene Wert für das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut dem Browser unbekannt ist (zum Beispiel, wenn Sie `type="color"` angeben und der Browser native Farbauswähler nicht unterstützt).

> [!NOTE]
> Sie finden Beispiele für alle Typen von einzeiligen Textfeldern auf GitHub unter [single-line-text-fields.html](https://github.com/mdn/learning-area/blob/main/html/forms/native-form-widgets/single-line-text-fields.html) ([siehe es sich auch live an](https://mdn.github.io/learning-area/html/forms/native-form-widgets/single-line-text-fields.html)).

Hier ist ein grundlegendes Beispiel für ein einzeiliges Textfeld:

```html
<input type="text" id="comment" name="comment" value="I'm a text field" />
```

Einzeilige Textfelder haben nur eine echte Beschränkung: Wenn Sie Text mit Zeilenumbrüchen eingeben, entfernt der Browser diese Zeilenumbrüche, bevor die Daten an den Server gesendet werden.

Das untenstehende Bildschirmfoto zeigt eine Texteingabe im Standard-, Fokus- und deaktivierten Zustand. Die meisten Browser zeigen den fokussierten Zustand mit einem Fokusring um das Steuerelement und den deaktivierten Zustand mit grauem Text oder einem verblassten/halbtransparenten Steuerelement an.

![Bildschirmfoto der Standard-, Fokus- und deaktivierten Zustandstexteingabe in Chrome auf macOS](disabled.png)

Die in diesem Dokument verwendeten Screenshots wurden im Chrome-Browser auf macOS aufgenommen. Es kann geringfügige Variationen dieser Felder/Schaltflächen in verschiedenen Browsern geben, aber die grundlegende Markierungstechnik bleibt ähnlich.

> [!NOTE]
> Wir diskutieren die Werte für das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut, die bestimmte Validierungsbeschränkungen erzwingen, einschließlich der Eingabetypen für Farbe, E-Mail und URL, im nächsten Artikel, [Die HTML5-Eingabetypen](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types).

#### Passwortfeld

Einer der ursprünglichen Eingabetypen war der Textfeldtyp `password`:

```html
<input type="password" id="pwd" name="pwd" />
```

Das folgende Bildschirmfoto zeigt ein Passwort-Eingabefeld, in dem jedes Eingabezeichen als Punkt angezeigt wird.

![Passwortfeld in Chrome 115 auf macOS](password.png)

Der `password`-Wert fügt dem eingegebenen Text keine speziellen Einschränkungen hinzu, jedoch wird der eingegebene Wert in das Feld (z.B. mit Punkten oder Sternchen) verdeckt, sodass er nicht leicht von anderen gelesen werden kann.

Beachten Sie, dass dies nur ein Benutzeroberflächenmerkmal ist; es sei denn, Sie übermitteln Ihr Formular sicher, es wird im Klartext gesendet, was schlecht für die Sicherheit ist - eine böswillige Partei könnte Ihre Daten abfangen und Passwörter, Kreditkartendaten oder was auch immer Sie eingegeben haben, stehlen. Der beste Weg, Benutzer davor zu schützen, ist, alle Seiten, die Formulare enthalten, über eine sichere Verbindung zu hosten (d.h. an einer `https://`-Adresse), sodass die Daten verschlüsselt werden, bevor sie gesendet werden.

Browser erkennen die Sicherheitsimplikationen des Sendens von Formulardaten über eine unsichere Verbindung und haben Warnungen, um Benutzer davon abzuhalten, unsichere Formulare zu verwenden. Weitere Informationen zu den Implementierungen in Firefox finden Sie unter [Unsichere Passwörter](/de/docs/Web/Security/Insecure_passwords).

### Verborgener Inhalt

Ein weiteres ursprüngliches Textelement ist der Eingabetyp `hidden`. Dieser wird verwendet, um ein Formularelement zu erstellen, das für den Benutzer unsichtbar ist, aber zusammen mit den restlichen Formulardaten an den Server gesendet wird, sobald es übermittelt wird - zum Beispiel könnte man einen Zeitstempel an den Server senden wollen, um anzugeben, wann eine Bestellung aufgegeben wurde. Weil es verborgen ist, kann der Benutzer den Wert weder sehen noch absichtlich ändern, es wird niemals in den Fokus geraten, und ein Bildschirmleser wird es ebenfalls nicht bemerken.

```html
<input type="hidden" id="timestamp" name="timestamp" value="1286705410" />
```

Wenn Sie ein solches Element erstellen, ist es erforderlich, die Attribute `name` und `value` festzulegen. Der Wert kann dynamisch über JavaScript gesetzt werden. Der `hidden`-Eingabetyp sollte kein zugeordnetes Label haben.

Andere Arten von Texteingaben, wie {{HTMLElement("input/search", "search")}}, {{HTMLElement("input/url", "url")}} und {{HTMLElement("input/tel", "tel")}}, werden im nächsten Tutorial behandelt, [HTML5-Eingabetypen](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types).

## Überprüfbare Elemente: Kontrollkästchen und Radiobuttons

Überprüfbare Elemente sind Steuerelemente, deren Zustand Sie durch Klicken auf sie oder ihre zugeordneten Labels ändern können. Es gibt zwei Arten von überprüfbaren Elementen: das Kontrollkästchen und den Radiobutton. Beide verwenden das [`checked`](/de/docs/Web/HTML/Reference/Elements/input/checkbox#checked)-Attribut, um anzugeben, ob das Widget standardmäßig überprüft ist oder nicht.

Es ist erwähnenswert, dass sich diese Widgets nicht genau wie andere Formular-Widgets verhalten. Bei den meisten Formular-Widgets werden alle Widgets, die ein [`name`](/de/docs/Web/HTML/Reference/Elements/input#name)-Attribut haben, gesendet, auch wenn kein Wert ausgefüllt ist. Im Fall von überprüfbaren Elementen werden ihre Werte nur gesendet, wenn sie angekreuzt sind. Wenn sie nicht angekreuzt sind, wird nichts gesendet, nicht einmal ihr Name. Wenn sie geprüft sind, aber keinen Wert haben, wird der Name mit einem Wert von _on_ gesendet.

> [!NOTE]
> Sie finden die Beispiele aus diesem Abschnitt auf GitHub als [checkable-items.html](https://github.com/mdn/learning-area/blob/main/html/forms/native-form-widgets/checkable-items.html) ([siehe es sich auch live an](https://mdn.github.io/learning-area/html/forms/native-form-widgets/checkable-items.html)).

Für maximale Benutzerfreundlichkeit und Barrierefreiheit wird empfohlen, jede Liste verwandter Elemente in einem {{htmlelement("fieldset")}} zu umgeben, mit einem {{htmlelement("legend")}}, das eine allgemeine Beschreibung der Liste liefert. Jedes einzelne Paar von {{htmlelement("label")}}/{{htmlelement("input")}}-Elementen sollte in seinem eigenen Listeneintrag (oder ähnlichem) enthalten sein. Das zugeordnete {{htmlelement('label')}} wird im Allgemeinen unmittelbar vor oder nach dem Radiobutton oder Kontrollkästchen platziert, wobei die Anweisungen für die Gruppe der Radiobuttons oder Kontrollkästchen im Allgemeinen der Inhalt der {{htmlelement("legend")}} sind. Siehe die oben verlinkten Beispiele für strukturelle Beispiele.

### Kontrollkästchen

Ein Kontrollkästchen wird mit dem {{HTMLElement("input")}}-Element erstellt, dessen [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut auf den Wert {{HTMLElement("input/checkbox", "checkbox")}} gesetzt ist.

```html
<input type="checkbox" id="questionOne" name="subscribe" value="yes" checked />
```

Verwandte Kontrollkästchen-Elemente sollten das gleiche [`name`](/de/docs/Web/HTML/Reference/Elements/input#name)-Attribut verwenden. Die Einbeziehung des [`checked`](/de/docs/Web/HTML/Reference/Elements/input/checkbox#checked)-Attributs bewirkt, dass das Kontrollkästchen beim Laden der Seite automatisch aktiviert ist. Durch Klicken des Kontrollkästchens oder seines zugeordneten Labels wird das Kontrollkästchen ein- oder ausgeschaltet.

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

Das folgende Bildschirmfoto zeigt Kontrollkästchen im Standard-, Fokus- und deaktivierten Zustand. Kontrollkästchen im Standard- und deaktivierten Zustand erscheinen angekreuzt, während im fokussierten Zustand das Kontrollkästchen nicht angekreuzt ist, aber ein Fokusring herum liegt.

![Standard, Fokus und deaktivierte Kontrollkästchen in Chrome 115 auf macOS](checkboxes.png)

> [!NOTE]
> Alle Kontrollkästchen und Radiobuttons mit dem [`checked`](/de/docs/Web/HTML/Reference/Elements/input/checkbox#checked)-Attribut beim Laden entsprechen der {{cssxref(':default')}}-Pseudoklasse, selbst wenn sie nicht mehr angekreuzt sind. Alle, die derzeit angekreuzt sind, entsprechen der {{cssxref(':checked')}}-Pseudoklasse.

Durch die ein-/ausgeschaltete Natur des Kontrollkästchens wird das Kontrollkästchen als Umschaltknopf angesehen, wobei viele Entwickler und Designer auf dem Standard-Kontrollkästchen-Styling aufbauen, um Schalter zu erstellen, die wie Kipphebel aussehen. Sie können [hier ein Beispiel in Aktion sehen](https://mdn.github.io/learning-area/html/forms/toggle-switch-example/) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/toggle-switch-example/index.html)).

### Radiobutton

Ein Radiobutton wird mit dem {{HTMLElement("input")}}-Element erstellt, dessen [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut auf den Wert `radio` gesetzt ist:

```html
<input type="radio" id="soup" name="meal" value="soup" checked />
```

Mehrere Radiobuttons können miteinander verknüpft werden. Wenn sie denselben Wert für ihr [`name`](/de/docs/Web/HTML/Reference/Elements/input#name)-Attribut teilen, werden sie als eine Gruppe von Schaltflächen angesehen. Nur eine Schaltfläche in einer bestimmten Gruppe kann gleichzeitig angekreuzt sein; dies bedeutet, dass, wenn eine von ihnen angekreuzt ist, alle anderen automatisch nicht angekreuzt werden. Wenn das Formular gesendet wird, wird nur der Wert des angekreuzten Radiobuttons gesendet. Wenn keiner von ihnen angekreuzt ist, wird der gesamte Pool von Radiobuttons als in einem unbekannten Zustand betrachtet und es wird kein Wert mit dem Formular gesendet. Sobald einer der Radiobuttons in einer gleichbenannten Gruppe von Schaltflächen angekreuzt ist, ist es nicht möglich, dass der Benutzer alle Schaltflächen ungeprüft lässt, ohne das Formular zurückzusetzen.

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

Das folgende Bildschirmfoto zeigt Standard- und deaktivierte Radiobuttons im angekreuzten Zustand sowie einen fokussierten Radiobutton im ungekreuzten Zustand.

![Standard, Fokus- und deaktivierte Radiobuttons in Chrome 115 auf macOS](radios.png)

## Tatsächliche Schaltflächen

Der Radiobutton ist eigentlich keine Schaltfläche, trotz seines Namens; lassen Sie uns zu den tatsächlichen Schaltflächen weitergehen! Es gibt drei Eingabetypen, die Schaltflächen erzeugen:

- `submit`
  - : Sendet die Formulardaten an den Server. Bei {{HTMLElement("button")}}-Elementen führt das Weglassen des `type`-Attributs (oder eines ungültigen `type`-Werts) zu einer Absende-Schaltfläche.
- `reset`
  - : Setzt alle Formular-Widgets auf ihre Standardwerte zurück.
- `button`
  - : Schaltflächen, die keinen automatischen Effekt haben, aber mit JavaScript-Code angepasst werden können.

Dann haben wir auch das {{htmlelement("button")}}-Element selbst. Dieses kann ein `type`-Attribut mit dem Wert `submit`, `reset` oder `button` annehmen, um das Verhalten der drei genannten `<input>`-Typen nachzuahmen. Der Hauptunterschied zwischen den beiden besteht darin, dass tatsächliche `<button>`-Elemente viel einfacher zu gestalten sind.

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
> Der `image`-Eingabetyp wird auch als Schaltfläche gerendert. Dies werden wir später ebenfalls behandeln.

> [!NOTE]
> Sie finden die Beispiele aus diesem Abschnitt auf GitHub als [button-examples.html](https://github.com/mdn/learning-area/blob/main/html/forms/native-form-widgets/button-examples.html) ([siehe es sich auch live an](https://mdn.github.io/learning-area/html/forms/native-form-widgets/button-examples.html)).

Unten finden Sie Beispiele für jeden Schaltflächen-`<input>`-Typ, zusammen mit dem entsprechenden `<button>`-Typ.

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

Schaltflächen verhalten sich immer gleich, unabhängig davon, ob Sie ein {{HTMLElement("button")}}-Element oder ein {{HTMLElement("input")}}-Element verwenden. Wie Sie jedoch aus den Beispielen sehen können, ermöglichen Ihnen {{HTMLElement("button")}}-Elemente, HTML in ihrem Inhalt zu verwenden, der zwischen den öffnenden und schließenden `<button>`-Tags eingefügt wird. {{HTMLElement("input")}}-Elemente sind hingegen {{Glossary("void_element", "Leerelemente")}}; ihr angezeigter Inhalt wird innerhalb des `value`-Attributs eingefügt und akzeptiert daher nur Klartext als Inhalt.

Das folgende Bildschirmfoto zeigt eine Schaltfläche im Standard-, Fokus- und deaktivierten Zustand. Im fokussierten Zustand befindet sich ein Fokusring um die Schaltfläche, und im deaktivierten Zustand ist die Schaltfläche ausgegraut.

![Standard-, Fokus- und deaktivierte Schaltflächenzustände in Chrome 115 auf macOS](buttons.png)

### Bild-Schaltfläche

Die **Bild-Schaltfläche**-Steuerung wird genauso gerendert wie ein {{HTMLElement("img")}}-Element, außer dass sie sich bei einem Klick des Benutzers wie eine Absende-Schaltfläche verhält.

Eine Bild-Schaltfläche wird mit einem {{HTMLElement("input")}}-Element erstellt, dessen [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut auf den Wert `image` gesetzt ist. Dieses Element unterstützt genau den gleichen Satz von Attributen wie das {{HTMLElement("img")}}-Element, plus alle von anderen Formschaltflächen unterstützten Attribute.

```html
<input type="image" alt="Click me!" src="my-img.png" width="80" height="30" />
```

Wenn die Bild-Schaltfläche zum Absenden des Formulars verwendet wird, sendet dieses Steuerungselement nicht seinen Wert - stattdessen werden die X- und Y-Koordinaten des Klicks auf das Bild gesendet (die Koordinaten sind relativ zum Bild, das heißt die obere linke Ecke des Bildes stellt die Koordinate (0, 0) dar). Die Koordinaten werden als zwei Schlüssel/Werte-Paare gesendet:

- Der X-Wert-Schlüssel ist der Wert des [`name`](/de/docs/Web/HTML/Reference/Elements/input#name)-Attributs, gefolgt von dem String "_.x_".
- Der Y-Wert-Schlüssel ist der Wert des [`name`](/de/docs/Web/HTML/Reference/Elements/input#name)-Attributs, gefolgt von dem String "_.y_".

Wenn Sie zum Beispiel auf das Bild an der Koordinate (123, 456) klicken und es über die `get`-Methode absendet, sehen Sie die Werte, die an die URL wie folgt angehängt sind:

```url
https://example.com?pos.x=123&pos.y=456
```

Dies ist eine sehr bequeme Möglichkeit, eine "Hotmap" zu erstellen. Wie diese Werte gesendet und abgerufen werden, wird im Artikel [Formulardaten senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) detailliert beschrieben.

## Dateiauswahl

Es gibt einen letzten `<input>`-Typ, der uns im frühen HTML zur Verfügung gestellt wurde: den Dateieingabetyp. Formulare können Dateien an einen Server senden (dieses spezifische Verfahren wird ebenfalls im Artikel [Formulardaten senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) detailliert beschrieben). Das Dateiauswahl-Widget kann verwendet werden, um eine oder mehrere Dateien zum Senden auszuwählen.

Um ein [Dateiauswahl-Widget](/de/docs/Web/HTML/Reference/Elements/input/file) zu erstellen, verwenden Sie das {{HTMLElement("input")}}-Element, dessen [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut auf `file` gesetzt ist. Die Arten von Dateien, die akzeptiert werden, können über das [`accept`](/de/docs/Web/HTML/Reference/Elements/input#accept)-Attribut eingeschränkt werden. Darüber hinaus, wenn Sie dem Benutzer erlauben möchten, mehr als eine Datei auszuwählen, können Sie das [`multiple`](/de/docs/Web/HTML/Reference/Elements/input#multiple)-Attribut hinzufügen.

### Beispiel

In diesem Beispiel wird ein Dateiauswahl-Widget erstellt, das Grafikbilddateien anfordert. Der Benutzer darf in diesem Fall mehrere Dateien auswählen.

```html
<input type="file" name="file" id="file" accept="image/*" multiple />
```

Auf einigen mobilen Geräten kann der Dateiauswähler auf Fotos, Videos und Audio zugreifen, die direkt von der Kamera und dem Mikrofon des Geräts aufgenommen werden, indem man Erfassungsinformationen zum `accept`-Attribut hinzufügt, so:

```html
<input type="file" accept="image/*;capture=camera" />
<input type="file" accept="video/*;capture=camcorder" />
<input type="file" accept="audio/*;capture=microphone" />
```

Das folgende Bildschirmfoto zeigt das Dateiauswahl-Widget im Standard-, Fokus- und deaktivierten Zustand, wenn keine Datei ausgewählt ist.

![Dateiauswahl-Widget im Standard-, Fokus- und deaktivierten Zustand in Chrome 115 auf macOS](filepickers.png)

## Allgemeine Attribute

Viele der Elemente, die zur Definition von Formularelementen verwendet werden, haben einige ihrer eigenen spezifischen Attribute. Es gibt jedoch einen Satz von Attributen, die allen Formularelementen gemeinsam sind. Einige davon haben Sie bereits kennengelernt, aber unten finden Sie eine Liste dieser allgemeinen Attribute zu Ihrer Information:

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
        Dieses Boolesche Attribut lässt Sie angeben, dass das Element automatisch den Eingabefokus haben sollte, wenn die Seite geladen wird.
        Nur ein formularbezogenes Element in einem Dokument kann dieses Attribut festgelegt haben.
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
        Dieses Boolesche Attribut zeigt an, dass der Benutzer nicht mit dem Element interagieren kann.
        Wenn dieses Attribut nicht angegeben ist, übernimmt das Element die Einstellung des umschließenden Elements, beispielsweise {{HTMLElement("fieldset")}};
        wenn es kein umschließendes Element mit dem gesetzten Attribut <code>disabled</code> gibt, dann ist das Element aktiviert.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/input#form">form</a></code>
      </td>
      <td></td>
      <td>
        Das <code>&#x3C;form></code>-Element, mit dem das Widget verbunden ist, wird verwendet, wenn es nicht innerhalb dieses Formulars geschachtelt ist.
        Der Wert des Attributs muss das <code>id</code>-Attribut eines {{HTMLElement("form")}}-Elements im selben Dokument sein.
        Dies ermöglicht es Ihnen, ein Formular-Steuerungselement mit einem Formular zu verknüpfen, außerhalb dessen es sich befindet, selbst wenn es sich innerhalb eines anderen Formularelements befindet.
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

## Zusammenfassung

Dieser Artikel hat die älteren Eingabetypen behandelt – das ursprüngliche Set, das in den frühen Tagen von HTML eingeführt wurde und das in allen Browsern gut unterstützt wird. Im nächsten Abschnitt werden wir uns die moderneren Werte des `type`-Attributs ansehen.

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/How_to_structure_a_web_form", "Learn_web_development/Extensions/Forms/HTML5_input_types", "Learn_web_development/Extensions/Forms")}}
