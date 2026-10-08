---
title: Grundlegende native Formularsteuerelemente
slug: Learn_web_development/Extensions/Forms/Basic_native_form_controls
l10n:
  sourceCommit: c44003c788a907ef19e0d766e98f29ffca5b6798
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/How_to_structure_a_web_form", "Learn_web_development/Extensions/Forms/HTML5_input_types", "Learn_web_development/Extensions/Forms")}}

Im [vorherigen Artikel](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form) haben wir ein funktionsfähiges Webformular mit Markup versehen, einige Formularsteuerelemente und gängige Strukturelemente vorgestellt und uns auf Best Practices für die Barrierefreiheit konzentriert. Als Nächstes betrachten wir die Funktionsweise der verschiedenen Formularsteuerelemente – auch Widgets genannt – im Detail und untersuchen die Möglichkeiten, unterschiedliche Arten von Daten zu erfassen. In diesem Artikel geht es um die ursprünglichen Formularsteuerelemente, die seit den Anfängen des Webs in allen Browsern verfügbar sind.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >HTML-Kenntnisse</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die ursprünglichen nativen Formular-Widgets zur Datenerfassung
        in Browsern im Detail verstehen und lernen, wie sie mit HTML
        implementiert werden.
      </td>
    </tr>
  </tbody>
</table>

Einige Formularelemente kennen Sie bereits, darunter {{HTMLelement('form')}}, {{HTMLelement('fieldset')}}, {{HTMLelement('legend')}}, {{HTMLelement('textarea')}}, {{HTMLelement('label')}}, {{HTMLelement('button')}} und {{HTMLelement('input')}}. Dieser Artikel behandelt:

- Die gängigen input-Typen {{HTMLelement('input/button', 'button')}}, {{HTMLelement('input/checkbox', 'checkbox')}}, {{HTMLelement('input/file', 'file')}}, {{HTMLelement('input/hidden', 'hidden')}}, {{HTMLelement('input/image', 'image')}}, {{HTMLelement('input/password', 'password')}}, {{HTMLelement('input/radio', 'radio')}}, {{HTMLelement('input/reset', 'reset')}}, {{HTMLelement('input/submit', 'submit')}} und {{HTMLelement('input/text', 'text')}}.
- Einige Attribute, die allen Formularsteuerelementen gemeinsam sind.

> [!NOTE]
> In den nächsten beiden Artikeln behandeln wir weitere, leistungsfähigere Formularsteuerelemente. Wenn Sie eine weiterführende Referenz suchen, lesen Sie unsere [Referenz zu HTML-Formularelementen](/de/docs/Web/HTML/Reference/Elements#forms), insbesondere die ausführliche Referenz zu den [Typen von `<input>`](/de/docs/Web/HTML/Reference/Elements/input).

## Texteingabefelder

Textfelder mit {{htmlelement("input")}} gehören zu den grundlegendsten Formular-Widgets. Sie ermöglichen die Eingabe unterschiedlichster Daten. Einige einfache Beispiele haben wir bereits gesehen.

> [!NOTE]
> Texteingabefelder in HTML-Formularen sind einfache Steuerelemente für Klartext. Sie eignen sich daher nicht zur Bearbeitung von formatiertem Text (fett, kursiv usw.). Editoren für formatierten Text sind benutzerdefinierte Widgets, die mit HTML, CSS und JavaScript erstellt werden.

Alle grundlegenden Textsteuerelemente haben einige gemeinsame Eigenschaften:

- Sie können als [`readonly`](/de/docs/Web/HTML/Reference/Elements/input#readonly) gekennzeichnet werden (Benutzer können den Eingabewert nicht ändern, er wird aber mit den übrigen Formulardaten gesendet) oder als [`disabled`](/de/docs/Web/HTML/Reference/Elements/input#disabled) (der Eingabewert kann nicht geändert werden und wird nie mit den übrigen Formulardaten gesendet).
- Sie können einen [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder) haben: Text, der im Eingabefeld erscheint und dessen Zweck kurz beschreiben soll.
- Sie können durch [`size`](/de/docs/Web/HTML/Reference/Attributes/size) (die sichtbare Größe des Feldes) und [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength) (die maximale Anzahl eingebbarer Zeichen) begrenzt werden.
- Für sie kann die Rechtschreibprüfung aktiviert werden (mit dem Attribut [`spellcheck`](/de/docs/Web/HTML/Reference/Global_attributes/spellcheck)).

> [!NOTE]
> Das Element {{htmlelement("input")}} ist unter den HTML-Elementen einzigartig, weil es je nach Wert seines Attributs [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) viele Formen annehmen kann. Es wird für die meisten Arten von Formular-Widgets verwendet: einzeilige Textfelder, Steuerelemente für Uhrzeit und Datum, Steuerelemente ohne Texteingabe wie Kontrollkästchen, Optionsfelder und Farbwähler sowie Schaltflächen.

### Einzeilige Textfelder

Ein einzeiliges Textfeld wird mit einem {{HTMLElement("input")}}-Element erstellt, dessen Attribut [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) auf [`text`](/de/docs/Web/HTML/Reference/Elements/input/text) gesetzt ist. Sie können das Attribut [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) auch ganz weglassen (`text` ist der Standardwert). Der Wert `text` ist außerdem der Fallback-Wert, wenn der Browser den angegebenen Wert für [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) nicht kennt (beispielsweise, wenn Sie `type="color"` angeben und der Browser keine nativen Farbwähler unterstützt).

Hier ist ein einfaches Beispiel für ein einzeiliges Textfeld:

```html live-sample___single-line
<input type="text" id="comment" name="comment" value="I'm a text field" />
```

Es wird so dargestellt:

{{embedlivesample("single-line", "100%", "80")}}

Für einzeilige Textfelder gibt es nur eine feste Einschränkung: Wenn Sie Text mit Zeilenumbrüchen eingeben, entfernt der Browser diese vor dem Senden der Daten an den Server.

Der folgende Screenshot zeigt ein Textfeld im Standardzustand, mit Fokus und im deaktivierten Zustand. Die meisten Browser kennzeichnen den Fokus durch eine Umrandung des Steuerelements und den deaktivierten Zustand durch grauen Text oder ein verblasstes, halbtransparentes Steuerelement.

![Screenshot eines Textfelds im Standardzustand, mit Fokus und im deaktivierten Zustand in Chrome unter macOS](disabled.png)

Die Screenshots in diesem Dokument wurden mit Chrome unter macOS aufgenommen. Die Darstellung dieser Felder und Schaltflächen kann sich je nach Browser geringfügig unterscheiden; die grundlegende Hervorhebung ist jedoch ähnlich.

> [!NOTE]
> Werte des Attributs [`type`](/de/docs/Web/HTML/Reference/Elements/input#type), die bestimmte Validierungsregeln vorgeben – darunter die Eingabetypen für Farben, E-Mail-Adressen und URLs –, behandeln wir im nächsten Artikel, [HTML5-Eingabetypen](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types).

#### Passwortfeld

Einer der ursprünglichen Eingabetypen war das Textfeld vom Typ [`password`](/de/docs/Web/HTML/Reference/Elements/input/password):

```html live-sample___password
<input type="password" id="pwd" name="pwd" />
```

Es wird ähnlich dargestellt wie ein einfaches einzeiliges Textfeld:

{{embedlivesample("password", "100%", "80")}}

Versuchen Sie jedoch, etwas in das Feld einzugeben: Jedes eingegebene Zeichen wird als Punkt angezeigt.

Der Wert `password` schränkt den eingegebenen Text nicht zusätzlich ein. Er verdeckt aber den Wert im Feld, damit andere ihn nicht ohne Weiteres lesen können.

Beachten Sie, dass dies lediglich eine Funktion der Benutzeroberfläche ist: Wenn Sie das Formular nicht sicher übertragen, werden die Daten als Klartext gesendet. Das ist ein Sicherheitsrisiko – Angreifer könnten Ihre Daten abfangen und Passwörter, Kreditkartendaten oder andere übermittelte Angaben stehlen. Am besten schützen Sie Benutzer, indem Sie Seiten mit Formularen über eine sichere Verbindung bereitstellen, also unter einer `https://`-Adresse. So werden die Daten vor dem Senden verschlüsselt.

Browser erkennen die Sicherheitsrisiken beim Senden von Formulardaten über eine unsichere Verbindung und zeigen Warnungen an, um Benutzer von der Verwendung unsicherer Formulare abzuhalten.

### Versteckte Inhalte

Ein weiteres ursprüngliches Textsteuerelement ist der Eingabetyp [`hidden`](/de/docs/Web/HTML/Reference/Elements/input/hidden). Damit erstellen Sie ein Formularsteuerelement, das für Benutzer unsichtbar ist, beim Absenden aber zusammen mit den übrigen Formulardaten an den Server gesendet wird. So könnten Sie beispielsweise einen Zeitstempel übermitteln, der angibt, wann eine Bestellung aufgegeben wurde. Da das Steuerelement versteckt ist, können Benutzer seinen Wert weder sehen noch gezielt bearbeiten. Es erhält nie den Fokus und wird auch von Screenreadern nicht erfasst.

```html
<input type="hidden" id="timestamp" name="timestamp" value="1286705410" />
```

Wenn Sie ein solches Element erstellen, müssen Sie seine Attribute `name` und `value` festlegen. Der Wert kann dynamisch per JavaScript gesetzt werden. Ein input-Element vom Typ `hidden` sollte kein zugeordnetes label haben.

Weitere Texteingabetypen wie {{HTMLElement("input/search", "search")}}, {{HTMLElement("input/url", "url")}} und {{HTMLElement("input/tel", "tel")}} behandeln wir im nächsten Tutorial, [HTML5-Eingabetypen](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types).

## Auswählbare Elemente: Kontrollkästchen und Optionsfelder

Auswählbare Elemente sind Steuerelemente, deren Zustand Sie durch Anklicken des Elements oder seines zugeordneten Labels ändern können. Es gibt zwei Arten: Kontrollkästchen und Optionsfelder. Beide verwenden das Attribut [`checked`](/de/docs/Web/HTML/Reference/Elements/input/checkbox#checked), um festzulegen, ob sie standardmäßig ausgewählt sind.

Diese Widgets verhalten sich nicht genau wie andere Formular-Widgets. Bei den meisten Formular-Widgets werden beim Absenden alle Widgets mit einem Attribut [`name`](/de/docs/Web/HTML/Reference/Elements/input#name) übermittelt, auch wenn kein Wert eingetragen wurde. Bei auswählbaren Elementen werden die Werte nur übermittelt, wenn sie ausgewählt sind. Ist ein Element nicht ausgewählt, wird nichts übermittelt – nicht einmal sein Name. Ist es ausgewählt, hat aber keinen Wert, wird der Name mit dem Wert _on_ übermittelt.

Für eine möglichst gute Bedienbarkeit und Barrierefreiheit sollten Sie jede Gruppe zusammengehöriger Elemente in ein {{htmlelement("fieldset")}} einschließen und mit einem {{htmlelement("legend")}} eine übergreifende Beschreibung angeben. Jedes einzelne Paar aus {{htmlelement("label")}}- und {{htmlelement("input")}}-Element sollte in einem eigenen Listenelement (oder einem ähnlichen Element) stehen. Das zugehörige {{htmlelement('label')}} steht üblicherweise direkt vor oder nach dem Optionsfeld beziehungsweise Kontrollkästchen. Anweisungen für die Gruppe stehen normalerweise im {{htmlelement("legend")}}.

### Kontrollkästchen

Ein Kontrollkästchen wird mit einem {{HTMLElement("input")}}-Element erstellt, dessen Attribut [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) den Wert [`checkbox`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) hat.

```html
<input type="checkbox" id="questionOne" name="subscribe" value="yes" checked />
```

Zusammengehörige Kontrollkästchen sollten dasselbe Attribut [`name`](/de/docs/Web/HTML/Reference/Elements/input#name) verwenden. Mit dem Attribut [`checked`](/de/docs/Web/HTML/Reference/Elements/input/checkbox#checked) ist das Kontrollkästchen beim Laden der Seite automatisch ausgewählt. Ein Klick auf das Kontrollkästchen oder sein zugeordnetes Label schaltet es ein oder aus.

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

Dieses Beispiel wird so dargestellt:

{{embedlivesample("checkbox", "100%", "150")}}

Der folgende Screenshot zeigt Kontrollkästchen im Standardzustand, mit Fokus und im deaktivierten Zustand. Im Standardzustand und im deaktivierten Zustand sind sie ausgewählt. Das Kontrollkästchen mit Fokus ist dagegen nicht ausgewählt und von einer Fokusumrandung umgeben.

![Kontrollkästchen im Standardzustand, mit Fokus und im deaktivierten Zustand in Chrome 115 unter macOS](checkboxes.png)

> [!NOTE]
> Kontrollkästchen und Optionsfelder, die beim Laden das Attribut [`checked`](/de/docs/Web/HTML/Reference/Elements/input/checkbox#checked) haben, entsprechen der Pseudoklasse {{cssxref(':default')}} – auch wenn sie später nicht mehr ausgewählt sind. Aktuell ausgewählte Elemente entsprechen der Pseudoklasse {{cssxref(':checked')}}.

Da Kontrollkästchen zwischen zwei Zuständen wechseln, gelten sie als Umschalter. Viele Entwickler und Designer erweitern ihre Standardgestaltung, um Schaltflächen zu erstellen, die wie Kippschalter aussehen. Sie können [hier ein Beispiel ausprobieren](https://mdn.github.io/learning-area/html/forms/toggle-switch-example/) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/toggle-switch-example/index.html)).

### Optionsfeld

Ein Optionsfeld wird mit einem {{HTMLElement("input")}}-Element erstellt, dessen Attribut [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) den Wert [`radio`](/de/docs/Web/HTML/Reference/Elements/input/radio) hat:

```html
<input type="radio" id="soup" name="meal" value="soup" checked />
```

Mehrere Optionsfelder können zu einer Gruppe zusammengefasst werden. Wenn sie denselben Wert für ihr Attribut [`name`](/de/docs/Web/HTML/Reference/Elements/input#name) haben, gehören sie zur selben Gruppe. Innerhalb einer Gruppe kann jeweils nur ein Feld ausgewählt sein. Wird eines ausgewählt, werden alle anderen automatisch abgewählt. Beim Absenden des Formulars wird nur der Wert des ausgewählten Optionsfelds übermittelt. Ist keines ausgewählt, gilt die gesamte Gruppe als in einem unbestimmten Zustand, und es wird kein Wert mit dem Formular übermittelt. Sobald eines der Optionsfelder einer Gruppe mit gleichem Namen ausgewählt wurde, können Benutzer nicht mehr alle Felder abwählen, ohne das Formular zurückzusetzen.

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

Dieses Beispiel wird so dargestellt:

{{embedlivesample("radio", "100%", "150")}}

Der folgende Screenshot zeigt ein ausgewähltes Optionsfeld im Standardzustand und ein ausgewähltes, deaktiviertes Optionsfeld sowie ein nicht ausgewähltes Optionsfeld mit Fokus.

![Optionsfelder im Standardzustand, mit Fokus und im deaktivierten Zustand in Chrome 115 unter macOS](radios.png)

## Echte Schaltflächen

Ein Optionsfeld ist trotz seines englischen Namens „radio button“ keine Schaltfläche. Sehen wir uns nun echte Schaltflächen an! Drei input-Typen erzeugen Schaltflächen:

- [`submit`](/de/docs/Web/HTML/Reference/Elements/input/submit)
  - : Sendet die Formulardaten an den Server. Bei {{HTMLElement("button")}}-Elementen entsteht eine Submit-Schaltfläche, wenn das Attribut `type` fehlt oder einen ungültigen Wert hat.
- [`reset`](/de/docs/Web/HTML/Reference/Elements/input/reset)
  - : Setzt alle Formular-Widgets auf ihre Standardwerte zurück.
- [`button`](/de/docs/Web/HTML/Reference/Elements/input/button)
  - : Eine Schaltfläche ohne automatische Wirkung, deren Verhalten mit JavaScript-Code festgelegt werden kann.

Daneben gibt es das Element {{htmlelement("button")}} selbst. Sein Attribut `type` kann die Werte `submit`, `reset` oder `button` annehmen und so das Verhalten der drei genannten `<input>`-Typen nachbilden. Der wichtigste Unterschied: Echte `<button>`-Elemente lassen sich wesentlich einfacher gestalten.

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
> Auch der input-Typ `image` wird als Schaltfläche dargestellt. Diesen behandeln wir weiter unten.

Nachfolgend finden Sie Beispiele für jeden Schaltflächen-`<input>`-Typ sowie den entsprechenden `<button>`-Typ. Jedes Paar ist in ein {{htmlelement("div")}}-Element eingeschlossen, damit es in einer neuen Zeile steht.

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

- Schaltfläche ohne vordefinierte Funktion:

  ```html live-sample___buttons
  <div>
    <button type="button">This is an <strong>anonymous button</strong></button>

    <input type="button" value="This is an anonymous button" />
  </div>
  ```

Diese Beispiele werden so dargestellt:

{{embedlivesample("buttons", "100%", "150")}}

Schaltflächen verhalten sich gleich, unabhängig davon, ob Sie ein {{HTMLElement("button")}}- oder ein {{HTMLElement("input")}}-Element verwenden. Wie Sie an den Beispielen sehen, können {{HTMLElement("button")}}-Elemente jedoch HTML als Inhalt enthalten. Dieser steht zwischen dem öffnenden und dem schließenden `<button>`-Tag. {{HTMLElement("input")}}-Elemente sind dagegen {{Glossary("void_element", "leere Elemente")}}. Ihr angezeigter Inhalt wird über das Attribut `value` festgelegt und kann daher nur aus Klartext bestehen.

Der folgende Screenshot zeigt eine Schaltfläche im Standardzustand, mit Fokus und im deaktivierten Zustand. Bei Fokus ist sie von einer Fokusumrandung umgeben; im deaktivierten Zustand wird sie ausgegraut.

![Schaltfläche im Standardzustand, mit Fokus und im deaktivierten Zustand in Chrome 115 unter macOS](buttons.png)

### Bild-Schaltfläche

Das Steuerelement **Bild-Schaltfläche** wird genau wie ein {{HTMLElement("img")}}-Element dargestellt. Wird es angeklickt, verhält es sich jedoch wie eine Submit-Schaltfläche.

Eine Bild-Schaltfläche wird mit einem {{HTMLElement("input")}}-Element erstellt, dessen Attribut [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) den Wert [`image`](/de/docs/Web/HTML/Reference/Elements/input/image) hat. Dieses Element unterstützt dieselben Attribute wie das {{HTMLElement("img")}}-Element sowie alle Attribute, die andere Formularschaltflächen unterstützen.

```html
<input type="image" alt="Click me!" src="my-img.png" width="80" height="30" />
```

Wenn die Bild-Schaltfläche zum Absenden des Formulars verwendet wird, übermittelt sie nicht ihren Wert. Stattdessen werden die X- und Y-Koordinaten des Klicks auf das Bild übermittelt. Die Koordinaten beziehen sich auf das Bild; seine obere linke Ecke entspricht also (0, 0). Sie werden als zwei Schlüssel-Wert-Paare gesendet:

- Der Schlüssel für den X-Wert besteht aus dem Wert des Attributs [`name`](/de/docs/Web/HTML/Reference/Elements/input#name), gefolgt von der Zeichenfolge „_.x_“.
- Der Schlüssel für den Y-Wert besteht aus dem Wert des Attributs [`name`](/de/docs/Web/HTML/Reference/Elements/input#name), gefolgt von der Zeichenfolge „_.y_“.

Wenn Sie beispielsweise bei den Koordinaten (123, 456) auf das Bild klicken und das Formular mit der Methode `get` absenden, sehen Sie die Werte folgendermaßen an die URL angehängt:

```url
https://example.com?pos.x=123&pos.y=456
```

Damit lässt sich auf einfache Weise eine interaktive Bildkarte erstellen. Wie diese Werte gesendet und abgerufen werden, erläutert der Artikel [Formulardaten senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data).

## Dateiauswahl

Ein letzter `<input>`-Typ stammt noch aus der frühen HTML-Zeit: die Dateieingabe. Formulare können Dateien an einen Server senden (dieser Vorgang wird ebenfalls im Artikel [Formulardaten senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) erläutert). Mit einem Dateiauswahl-Widget lassen sich eine oder mehrere Dateien für den Versand auswählen.

Um ein [Dateiauswahl-Widget](/de/docs/Web/HTML/Reference/Elements/input/file) zu erstellen, verwenden Sie ein {{HTMLElement("input")}}-Element mit dem Wert `file` für das Attribut [`type`](/de/docs/Web/HTML/Reference/Elements/input#type). Über das Attribut [`accept`](/de/docs/Web/HTML/Reference/Elements/input#accept) können Sie die zulässigen Dateitypen einschränken. Wenn Benutzer mehr als eine Datei auswählen können sollen, fügen Sie außerdem das Attribut [`multiple`](/de/docs/Web/HTML/Reference/Elements/input#multiple) hinzu.

### Beispiel

Dieses Beispiel erstellt eine Dateiauswahl für Bilddateien. Benutzer können dabei mehrere Dateien auswählen.

```html
<input type="file" name="file" id="file" accept="image/*" multiple />
```

Auf manchen Mobilgeräten kann die Dateiauswahl auch auf Fotos, Videos und Audioaufnahmen zugreifen, die direkt mit Kamera oder Mikrofon des Geräts erstellt werden. Dazu ergänzen Sie das Attribut `accept` um Angaben zur Aufnahme:

```html
<input type="file" accept="image/*;capture=camera" />
<input type="file" accept="video/*;capture=camcorder" />
<input type="file" accept="audio/*;capture=microphone" />
```

Der folgende Screenshot zeigt das Dateiauswahl-Widget im Standardzustand, mit Fokus und im deaktivierten Zustand, wenn keine Datei ausgewählt ist.

![Dateiauswahl-Widget im Standardzustand, mit Fokus und im deaktivierten Zustand in Chrome 115 unter macOS](filepickers.png)

## Gemeinsame Attribute

Viele Elemente zur Definition von Formularsteuerelementen haben eigene Attribute. Daneben gibt es Attribute, die allen Formularelementen gemeinsam sind. Einige davon kennen Sie bereits. Die folgende Tabelle bietet einen Überblick:

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
        Mit diesem booleschen Attribut legen Sie fest, dass das Element beim Laden der Seite automatisch den Eingabefokus erhalten soll.
        In einem Dokument darf dieses Attribut nur für ein formularzugeordnetes Element angegeben werden.
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
        Dieses boolesche Attribut gibt an, dass Benutzer nicht mit dem Element interagieren können.
        Ist es nicht angegeben, übernimmt das Element die Einstellung seines umschließenden Elements, beispielsweise eines {{HTMLElement("fieldset")}}-Elements.
        Wenn kein umschließendes Element das Attribut <code>disabled</code> gesetzt hat, ist das Element aktiviert.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/input#form">form</a></code>
      </td>
      <td></td>
      <td>
        Das <code>&#x3C;form></code>-Element, dem das Widget zugeordnet ist. Dieses Attribut wird verwendet, wenn das Widget nicht innerhalb dieses Formulars verschachtelt ist.
        Sein Wert muss dem Attribut <code>id</code> eines {{HTMLElement("form")}}-Elements im selben Dokument entsprechen.
        So können Sie ein Formularsteuerelement einem Formular zuordnen, außerhalb dessen es steht – selbst wenn es sich innerhalb eines anderen Formularelements befindet.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/input#name">name</a></code>
      </td>
      <td></td>
      <td>Der Name des Elements; er wird mit den Formulardaten übermittelt.</td>
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

Dieser Artikel hat die älteren Eingabetypen behandelt – die ursprünglichen Typen aus den Anfangstagen von HTML, die von allen Browsern gut unterstützt werden. Im nächsten Abschnitt sehen wir uns die moderneren Werte des Attributs `type` an.

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/How_to_structure_a_web_form", "Learn_web_development/Extensions/Forms/HTML5_input_types", "Learn_web_development/Extensions/Forms")}}
