---
title: Grundlegende native Formularelemente
slug: Learn_web_development/Extensions/Forms/Basic_native_form_controls
l10n:
  sourceCommit: 28f5f3b9b463fa842fa686ccc73c9e1d9b06282b
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/How_to_structure_a_web_form", "Learn_web_development/Extensions/Forms/HTML5_input_types", "Learn_web_development/Extensions/Forms")}}

Im [vorherigen Artikel](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form) haben wir ein funktionales Webformular-Beispiel markiert, einige Formularelemente und allgemeine Strukturelemente eingeführt und den Schwerpunkt auf Best Practices für Barrierefreiheit gelegt. Als Nächstes werden wir uns im Detail mit der Funktionalität der verschiedenen Formularelemente, oder Widgets, beschäftigen und alle verschiedenen Optionen untersuchen, die zur Erfassung unterschiedlicher Datentypen zur Verfügung stehen. In diesem speziellen Artikel werden wir uns das ursprüngliche Set an Formularelementen ansehen, das seit den Anfängen des Webs in allen Browsern verfügbar ist.

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
        Ein detailliertes Verständnis des ursprünglichen Sets an nativen
        Formular-Widgets, die in Browsern zur Datenerfassung verfügbar sind, und
        deren Implementierung mit HTML.
      </td>
    </tr>
  </tbody>
</table>

Sie haben bereits einige Formularelemente kennengelernt, darunter {{HTMLelement('form')}}, {{HTMLelement('fieldset')}}, {{HTMLelement('legend')}}, {{HTMLelement('textarea')}}, {{HTMLelement('label')}}, {{HTMLelement('button')}} und {{HTMLelement('input')}}. Dieser Artikel behandelt:

- Die gängigen Eingabetypen {{HTMLelement('input/button', 'button')}}, {{HTMLelement('input/checkbox', 'checkbox')}}, {{HTMLelement('input/file', 'file')}}, {{HTMLelement('input/hidden', 'hidden')}}, {{HTMLelement('input/image', 'image')}}, {{HTMLelement('input/password', 'password')}}, {{HTMLelement('input/radio', 'radio')}}, {{HTMLelement('input/reset', 'reset')}}, {{HTMLelement('input/submit', 'submit')}} und {{HTMLelement('input/text', 'text')}}.
- Einige der Attribute, die allen Formularelementen gemeinsam sind.

> [!NOTE]
> Wir behandeln zusätzliche und leistungsfähigere Formularelemente in den nächsten zwei Artikeln. Wenn Sie eine fortgeschrittenere Referenz wünschen, sollten Sie unsere [HTML-Formularelement-Referenz](/de/docs/Web/HTML/Reference/Elements#forms) und im Besonderen unsere umfangreiche [`<input>`-Typen](/de/docs/Web/HTML/Reference/Elements/input) Referenz konsultieren.

## Texteingabefelder

Text-{{htmlelement("input")}}-Felder sind die grundlegendsten Formularelemente. Sie sind eine sehr praktische Möglichkeit, dem Benutzer das Eingeben beliebiger Daten zu ermöglichen, und wir haben bereits einige einfache Beispiele gesehen.

> [!NOTE]
> HTML-Formulartextfelder sind einfache Klartexteingabesteuerungen. Das bedeutet, dass sie nicht für die Bearbeitung von Rich-Text (fett, kursiv usw.) verwendet werden können. Alle Rich-Text-Editoren, denen Sie begegnen, sind benutzerdefinierte Widgets, die mit HTML, CSS und JavaScript erstellt wurden.

Alle grundlegenden Textsteuerungen teilen einige gemeinsame Verhaltensweisen:

- Sie können als [`readonly`](/de/docs/Web/HTML/Reference/Elements/input#readonly) (der Benutzer kann den Eingabewert nicht ändern, aber er wird dennoch mit den anderen Formulardaten gesendet) oder [`disabled`](/de/docs/Web/HTML/Reference/Elements/input#disabled) (der Eingabewert kann nicht geändert werden und wird niemals mit den anderen Formulardaten gesendet) markiert werden.
- Sie können einen [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder) haben; dies ist der Text, der innerhalb des Texteingabefeldes angezeigt wird und der Zweck des Feldes kurz beschreiben sollte.
- Sie können in [`size`](/de/docs/Web/HTML/Reference/Attributes/size) (die physische Größe des Feldes) und [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength) (die maximale Anzahl von Zeichen, die in das Feld eingegeben werden können) beschränkt werden.
- Sie können von der Rechtschreibprüfung (mittels des [`spellcheck`](/de/docs/Web/HTML/Reference/Global_attributes/spellcheck)-Attributs) profitieren.

> [!NOTE]
> Das {{htmlelement("input")}}-Element ist einzigartig unter den HTML-Elementen, da es viele Formen annehmen kann, je nach Wert seines [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attributs. Es wird verwendet, um die meisten Arten von Formular-Widgets zu erstellen, einschließlich einzeiliger Textfelder, Zeit- und Datumssteuerungen, Steuerungen ohne Texteingabe wie Kontrollkästchen, Optionsfelder und Farbwähler sowie Schaltflächen.

### Einzeilige Textfelder

Ein einzeiliges Textfeld wird mit einem {{HTMLElement("input")}}-Element erstellt, dessen [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attributwert auf [`text`](/de/docs/Web/HTML/Reference/Elements/input/text) gesetzt wird, oder indem das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut weggelassen wird (`text` ist der Standardwert). Der Wert `text` für dieses Attribut ist auch der Fallback-Wert, wenn der angegebene Wert für das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut vom Browser nicht bekannt ist (zum Beispiel, wenn Sie `type="color"` angeben und der Browser keine nativen Farbwähler unterstützt).

Hier ist ein einfaches Beispiel für ein einzeiliges Textfeld:

```html live-sample___single-line
<input type="text" id="comment" name="comment" value="I'm a text field" />
```

Es wird so gerendert:

{{embedlivesample("single-line", "100%", "80")}}

Einzeilige Textfelder haben nur eine echte Einschränkung: Wenn Sie Text mit Zeilenumbrüchen eingeben, entfernt der Browser diese Zeilenumbrüche, bevor die Daten an den Server gesendet werden.

Der Screenshot unten zeigt eine Texteingabe im Standard-, Fokus- und deaktivierten Zustand. Die meisten Browser zeigen den fokussierten Zustand mit einem Fokusrahmen um die Steuerung herum und den deaktivierten Zustand mit grauem Text oder einer verblassten/halbtransparenten Steuerung an.

![Screenshot des Standard-, Fokus- und deaktivierten Zustands der Texteingabe in Chrome auf macOS](disabled.png)

Die in diesem Dokument verwendeten Screenshots wurden mit dem Chrome-Browser auf macOS aufgenommen. Es kann geringfügige Unterschiede in diesen Feldern/Schaltflächen zwischen verschiedenen Browsern geben, jedoch bleibt die grundlegende Hervorhebungstechnik ähnlich.

> [!NOTE]
> Wir diskutieren die Werte für das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut, welche spezifische Validierungsanforderungen durchsetzen, einschließlich der Eingabetypen für Farbe, E-Mail und URL, im nächsten Artikel, [Die HTML5-Eingabetypen](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types).

#### Passwortfeld

Einer der ursprünglichen Eingabetypen war der [`password`](/de/docs/Web/HTML/Reference/Elements/input/password)-Textfeldtyp:

```html live-sample___password
<input type="password" id="pwd" name="pwd" />
```

Dies wird ähnlich wie das einfache einzeilige Textfeld gerendert:

{{embedlivesample("password", "100%", "80")}}

Versuchen Sie jedoch, in das Feld zu tippen - jedes eingegebene Zeichen wird als Punkt angezeigt.

Der `password`-Wert fügt dem eingegebenen Text keine besonderen Einschränkungen hinzu, aber er verschleiert den in das Feld eingegebenen Wert, sodass er nicht leicht von anderen gelesen werden kann.

Denken Sie daran, dass dies nur eine Benutzeroberflächenfunktion ist; es sei denn, Sie reichen Ihr Formular sicher ein, wird es im Klartext gesendet, was schlecht für die Sicherheit ist – eine böswillige Partei könnte Ihre Daten abfangen und Passwörter, Kreditkartendaten oder sonstige eingereichte Informationen stehlen. Der beste Weg, Benutzer davor zu schützen, besteht darin, jede Seite, die Formulare enthält, über eine sichere Verbindung (d.h. bei einer Adresse `https://`) zu hosten, damit die Daten vor dem Senden verschlüsselt werden.

Browser erkennen die Sicherheitsimplikationen des Sendens von Formulardaten über eine unsichere Verbindung und haben Warnungen, um Benutzer davon abzuhalten, unsichere Formulare zu verwenden.

### Versteckter Inhalt

Ein weiteres ursprüngliches Texteingabeelement ist der [`hidden`](/de/docs/Web/HTML/Reference/Elements/input/hidden)-Eingabetyp. Dieser wird verwendet, um ein Formularelement zu erstellen, das für den Benutzer unsichtbar ist, aber dennoch bei einer Formularübermittlung zusammen mit den restlichen Formulardaten an den Server gesendet wird – beispielsweise könnten Sie einen Zeitstempel an den Server senden wollen, der angibt, wann eine Bestellung aufgegeben wurde. Da es verborgen ist, kann der Benutzer den Wert nicht sehen oder absichtlich bearbeiten, es wird nie fokussiert, und ein Bildschirmleser wird es ebenfalls nicht bemerken.

```html
<input type="hidden" id="timestamp" name="timestamp" value="1286705410" />
```

Wenn Sie ein solches Element erstellen, müssen die Attribute `name` und `value` festgelegt werden. Der Wert kann dynamisch über JavaScript eingestellt werden. Der `hidden`-Eingabetyp sollte kein zugeordnetes Label haben.

Andere Texteingabetypen, wie {{HTMLElement("input/search", "search")}}, {{HTMLElement("input/url", "url")}} und {{HTMLElement("input/tel", "tel")}}, werden im nächsten Tutorial behandelt, [HTML5-Eingabetypen](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types).

## Überprüfbare Elemente: Kontrollkästchen und Optionsfelder

Überprüfbare Elemente sind Steuerungen, deren Zustand Sie durch Klicken auf sie oder ihre zugeordneten Labels ändern können. Es gibt zwei Arten von überprüfbaren Elementen: das Kontrollkästchen und das Optionsfeld. Beide verwenden das [`checked`](/de/docs/Web/HTML/Reference/Elements/input/checkbox#checked)-Attribut, um anzugeben, ob das Widget standardmäßig geprüft ist oder nicht.

Es ist erwähnenswert, dass sich diese Widgets nicht genau wie andere Formularelemente verhalten. Bei den meisten Formularelementen werden alle Widgets, die ein [`name`](/de/docs/Web/HTML/Reference/Elements/input#name)-Attribut haben, gesendet, auch wenn kein Wert ausgefüllt wurde, sobald das Formular übermittelt wird. Im Fall von überprüfbaren Elementen werden ihre Werte nur gesendet, wenn sie aktiviert sind. Wenn sie nicht aktiviert sind, wird nichts gesendet, nicht einmal ihr Name. Wenn sie aktiviert sind, aber keinen Wert haben, wird der Name mit einem Wert von _on_ gesendet.

Für maximale Benutzerfreundlichkeit/Barrierefreiheit wird empfohlen, jede Liste verwandter Elemente in einem {{htmlelement("fieldset")}} zu umgeben, mit einer {{htmlelement("legend")}}, die eine allgemeine Beschreibung der Liste bietet. Jedes einzelne Paar von {{htmlelement("label")}}/{{htmlelement("input")}}-Elementen sollte in seinem eigenen Listenelement (oder ähnlich) enthalten sein. Das zugeordnete {{htmlelement('label')}} wird im Allgemeinen direkt vor oder nach dem Optionsfeld oder Kontrollkästchen platziert, wobei die Anweisungen für die Gruppe der Optionsfelder oder Kontrollkästchen im Allgemeinen der Inhalt der {{htmlelement("legend")}} sind.

### Kontrollkästchen

Ein Kontrollkästchen wird mit dem {{HTMLElement("input")}}-Element erstellt, dessen [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut auf den Wert [`checkbox`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) gesetzt ist.

```html
<input type="checkbox" id="questionOne" name="subscribe" value="yes" checked />
```

Verwandte Kontrollkästchen sollten dasselbe [`name`](/de/docs/Web/HTML/Reference/Elements/input#name)-Attribut verwenden. Das Einschließen des [`checked`](/de/docs/Web/HTML/Reference/Elements/input/checkbox#checked)-Attributs sorgt dafür, dass das Kontrollkästchen automatisch aktiviert ist, wenn die Seite geladen wird. Durch Klicken auf das Kontrollkästchen oder sein zugeordnetes Label wird das Kontrollkästchen ein- und ausgeschaltet.

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

Dieses Beispiel wird wie folgt gerendert:

{{embedlivesample("checkbox", "100%", "150")}}

Der folgende Screenshot zeigt Kontrollkästchen im Standard-, Fokus- und deaktivierten Zustand. Kontrollkästchen im Standard- und deaktivierten Zustand erscheinen aktiviert, während im fokussierten Zustand das Kontrollkästchen deaktiviert ist und ein Fokusrahmen darum zu sehen ist.

![Standard-, Fokus- und deaktivierte Kontrollkästchen in Chrome 115 auf macOS](checkboxes.png)

> [!NOTE]
> Alle Kontrollkästchen und Optionsfelder, die beim Laden das [`checked`](/de/docs/Web/HTML/Reference/Elements/input/checkbox#checked)-Attribut haben, entsprechen der {{cssxref(':default')}}-Pseudoklasse, auch wenn sie nicht mehr aktiviert sind. Alle, die aktuell aktiviert sind, entsprechen der {{cssxref(':checked')}}-Pseudoklasse.

Aufgrund der Ein-Aus-Natur von Kontrollkästchen wird das Kontrollkästchen als Toggle-Button betrachtet, wobei viele Entwickler und Designer den Standard-Kontrollkästchen-Stil erweitern, um Schaltflächen zu erstellen, die wie Kippschalter aussehen. Sie können [hier ein Beispiel in Aktion sehen](https://mdn.github.io/learning-area/html/forms/toggle-switch-example/) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/toggle-switch-example/index.html)).

### Optionsfeld

Ein Optionsfeld wird mit dem {{HTMLElement("input")}}-Element erstellt, dessen [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut auf den Wert [`radio`](/de/docs/Web/HTML/Reference/Elements/input/radio) gesetzt ist:

```html
<input type="radio" id="soup" name="meal" value="soup" checked />
```

Mehrere Optionsfelder können zusammengebunden werden. Wenn sie denselben Wert für ihr [`name`](/de/docs/Web/HTML/Reference/Elements/input#name)-Attribut teilen, werden sie als in derselben Gruppe von Schaltflächen betrachtet. Nur eine Schaltfläche in einer gegebenen Gruppe kann zu einem Zeitpunkt aktiviert sein; wenn eine von ihnen aktiviert ist, werden alle anderen automatisch deaktiviert. Wenn das Formular gesendet wird, wird nur der Wert des aktivierten Optionsfeldes gesendet. Wenn keine von ihnen aktiviert ist, wird der gesamte Pool von Optionsfeldern als in einem unbekannten Zustand betrachtet, und es wird kein Wert mit dem Formular gesendet. Sobald eines der Optionsfelder in einer gleichnamigen Gruppe von Schaltflächen aktiviert ist, ist es dem Benutzer nicht möglich, alle Schaltflächen ohne Zurücksetzen des Formulars zu deaktivieren.

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

Dieses Beispiel wird wie folgt gerendert:

{{embedlivesample("radio", "100%", "150")}}

Der folgende Screenshot zeigt Standard- und deaktivierte Optionsfelder im aktivierten Zustand sowie ein fokussiertes Optionsfeld im deaktivierten Zustand.

![Standard-, Fokus- und deaktivierte Optionsfelder in Chrome 115 auf macOS](radios.png)

## Tatsächliche Schaltflächen

Das Optionsfeld ist trotz seines Namens keine echte Schaltfläche; sehen wir uns nun tatsächliche Schaltflächen an! Es gibt drei Eingabetypen, die Schaltflächen erzeugen:

- [`submit`](/de/docs/Web/HTML/Reference/Elements/input/submit)
  - : Sendet die Formulardaten an den Server. Für {{HTMLElement("button")}}-Elemente führt das Weglassen des `type`-Attributs (oder ein ungültiger `type`-Wert) zu einer Einsendes-Schaltfläche.
- [`reset`](/de/docs/Web/HTML/Reference/Elements/input/reset)
  - : Setzt alle Formularelemente auf ihre Standardwerte zurück.
- [`button`](/de/docs/Web/HTML/Reference/Elements/input/button)
  - : Schaltflächen, die keine automatische Wirkung haben, aber mit JavaScript-Code angepasst werden können.

Und dann gibt es das {{htmlelement("button")}}-Element selbst. Dieses kann ein `type`-Attribut mit den Werten `submit`, `reset` oder `button` enthalten, um das Verhalten der drei oben genannten `<input>`-Typen nachzuahmen. Der Hauptunterschied zwischen den beiden besteht darin, dass tatsächliche `<button>`-Elemente viel einfacher zu gestalten sind.

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
> Der `image`-Eingabetyp wird ebenfalls als Schaltfläche gerendert. Wir behandeln das später ebenfalls.

Unten finden Sie Beispiele für jeden Schaltflächen-`<input>`-Typ sowie den entsprechenden `<button>`-Typ. Jedes Paar wurde in einem {{htmlelement("div")}}-Element umschlossen, um es auf einer neuen Zeile zu trennen.

- Einsende-Schaltfläche:

  ```html live-sample___buttons
  <div>
    <button type="submit">This is a <strong>submit button</strong></button>

    <input type="submit" value="This is a submit button" />
  </div>
  ```

- Zurücksetzen-Schaltfläche:

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

Schaltflächen verhalten sich immer gleich, unabhängig davon, ob Sie ein {{HTMLElement("button")}}-Element oder ein {{HTMLElement("input")}}-Element verwenden. Wie Sie aus den Beispielen sehen können, ermöglichen {{HTMLElement("button")}}-Elemente jedoch die Verwendung von HTML in ihrem Inhalt, der zwischen den öffnenden und schließenden `<button>`-Tags eingefügt wird. {{HTMLElement("input")}}-Elemente hingegen sind {{Glossary("void_element", "leere Elemente")}}; ihr angezeigter Inhalt wird in das `value`-Attribut eingefügt und akzeptiert daher nur Klartext als Inhalt.

Der folgende Screenshot zeigt eine Schaltfläche im Standard-, Fokus- und deaktivierten Zustand. Im fokussierten Zustand ist ein Fokusrahmen um die Schaltfläche zu sehen, und im deaktivierten Zustand ist die Schaltfläche ausgegraut.

![Standard-, Fokus- und deaktivierte Schaltflächenzustände in Chrome 115 auf macOS](buttons.png)

### Bild-Schaltfläche

Die **Bild-Schaltfläche** wird genau wie ein {{HTMLElement("img")}}-Element gerendert, außer dass sie, wenn der Benutzer darauf klickt, sich wie eine Einsende-Schaltfläche verhält.

Eine Bild-Schaltfläche wird mit einem {{HTMLElement("input")}}-Element erstellt, dessen [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut auf den Wert [`image`](/de/docs/Web/HTML/Reference/Elements/input/image) gesetzt ist. Dieses Element unterstützt genau denselben Satz von Attributen wie das {{HTMLElement("img")}}-Element, plus alle von anderen Formularschaltflächen unterstützten Attribute.

```html
<input type="image" alt="Click me!" src="my-img.png" width="80" height="30" />
```

Wenn die Bild-Schaltfläche verwendet wird, um das Formular zu senden, sendet dieses Steuerungselement nicht seinen Wert – stattdessen werden die X- und Y-Koordinaten des Klicks auf das Bild gesendet (die Koordinaten sind relativ zum Bild, was bedeutet, dass die obere linke Ecke des Bildes die Koordinate (0, 0) darstellt). Die Koordinaten werden als zwei Schlüssel/Wert-Paare gesendet:

- Der X-Wert-Schlüssel ist der Wert des [`name`](/de/docs/Web/HTML/Reference/Elements/input#name)-Attributs, gefolgt von dem String "_.x_".
- Der Y-Wert-Schlüssel ist der Wert des [`name`](/de/docs/Web/HTML/Reference/Elements/input#name)-Attributs, gefolgt von dem String "_.y_".

Wenn Sie also beispielsweise auf das Bild an der Koordinate (123, 456) klicken und es über die `get`-Methode senden, sehen Sie die Werte wie folgt an die URL angehängt:

```url
https://example.com?pos.x=123&pos.y=456
```

Dies ist eine sehr bequeme Möglichkeit, eine "Hot Map" zu erstellen. Wie diese Werte gesendet und abgerufen werden, wird im Artikel [Senden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) im Detail erläutert.

## Datei-Auswahl

Ein zuletzt eingeführter `<input>`-Typ, der uns im frühen HTML zur Verfügung stand, ist der Datei-Eingabetyp. Formulare sind in der Lage, Dateien an einen Server zu senden (diese spezielle Aktion wird ebenfalls im Artikel [Senden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) im Detail behandelt). Das Datei-Auswahl-Widget kann verwendet werden, um eine oder mehrere Dateien auszuwählen und zu senden.

Um ein [Datei-Auswahl-Widget](/de/docs/Web/HTML/Reference/Elements/input/file) zu erstellen, verwenden Sie das {{HTMLElement("input")}}-Element mit seinem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut, das auf `file` gesetzt ist. Die Typen von akzeptierten Dateien können mit dem [`accept`](/de/docs/Web/HTML/Reference/Elements/input#accept)-Attribut eingeschränkt werden. Außerdem können Sie, wenn Sie dem Benutzer die Auswahl mehrerer Dateien ermöglichen möchten, dies durch Hinzufügen des [`multiple`](/de/docs/Web/HTML/Reference/Elements/input#multiple)-Attributs tun.

### Beispiel

In diesem Beispiel wird ein Datei-Auswahl-Widget erstellt, das nach Grafikbilddateien fragt. Der Benutzer darf in diesem Fall mehrere Dateien auswählen.

```html
<input type="file" name="file" id="file" accept="image/*" multiple />
```

Auf einigen mobilen Geräten kann das Datei-Auswahl-Widget auf Fotos, Videos und Audio zugreifen, die direkt von der Kamera und dem Mikrofon des Geräts erfasst wurden, indem Aufnahmedetails zum `accept`-Attribut wie folgt hinzugefügt werden:

```html
<input type="file" accept="image/*;capture=camera" />
<input type="file" accept="video/*;capture=camcorder" />
<input type="file" accept="audio/*;capture=microphone" />
```

Der folgende Screenshot zeigt das Datei-Auswahl-Widget im Standard-, Fokus- und deaktivierten Zustand, wenn keine Datei ausgewählt ist.

![Datei-Auswahl-Widget im Standard-, Fokus- und deaktivierten Zustand in Chrome 115 auf macOS](filepickers.png)

## Gemeinsame Attribute

Viele der Elemente, die zur Definition von Formularelementen verwendet werden, haben einige ihrer eigenen spezifischen Attribute. Es gibt jedoch eine Reihe von Attributen, die allen Formularelementen gemeinsam sind. Sie haben bereits einige dieser Attribute kennengelernt, aber unten finden Sie eine Liste dieser gemeinsamen Attribute, zu Ihrer Referenz:

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
        Dieses Boolean-Attribut ermöglicht es Ihnen, anzugeben, dass das Element automatisch den Eingabefokus haben soll, wenn die Seite geladen wird.
        In einem Dokument kann nur ein Formular-assoziiertes Element dieses Attribut angegeben haben.
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
        Dieses Boolean-Attribut zeigt an, dass der Benutzer nicht mit dem Element interagieren kann.
        Wenn dieses Attribut nicht angegeben ist, erbt das Element seine Einstellung vom umgebenden Element, zum Beispiel {{HTMLElement("fieldset")}};
        gibt es kein umgebendes Element mit dem <code>disabled</code>-Attribut festgelegt, dann ist das Element aktiviert.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/input#form">form</a></code>
      </td>
      <td></td>
      <td>
        Das <code>&#x3C;form></code>-Element, dem das Widget zugeordnet ist, wird verwendet, wenn es nicht innerhalb dieses Formulars verschachtelt ist.
        Der Wert des Attributs muss das <code>id</code>-Attribut eines {{HTMLElement("form")}}-Elements im selben Dokument sein.
        Auf diese Weise können Sie ein Formularelement mit einem Formular verknüpfen, in dem es sich außerhalb, auch wenn es sich in einem anderen Formularelement befindet, befindet.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/input#name">name</a></code>
      </td>
      <td></td>
      <td>Der Name des Elements; dies wird mit den Formulardaten gesendet.</td>
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

Dieser Artikel hat die älteren Eingabetypen behandelt — das ursprüngliche Set, das in den frühen Tagen von HTML eingeführt wurde und in allen Browsern gut unterstützt wird. Im nächsten Abschnitt werden wir uns die moderneren Werte des `type`-Attributs ansehen.

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/How_to_structure_a_web_form", "Learn_web_development/Extensions/Forms/HTML5_input_types", "Learn_web_development/Extensions/Forms")}}
