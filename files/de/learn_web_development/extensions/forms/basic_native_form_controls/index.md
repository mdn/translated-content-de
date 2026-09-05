---
title: Grundlegende native Formularelemente
slug: Learn_web_development/Extensions/Forms/Basic_native_form_controls
l10n:
  sourceCommit: c9f3d85f24d7839c9fe36a68d8042d088d906147
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/How_to_structure_a_web_form", "Learn_web_development/Extensions/Forms/HTML5_input_types", "Learn_web_development/Extensions/Forms")}}

Im [vorherigen Artikel](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form) haben wir ein funktionales Webformular-Beispiel erstellt, einige Formularelemente und gemeinsame Strukturelemente eingeführt und uns auf die besten Praktiken zur Barrierefreiheit konzentriert. Als nächstes werden wir die Funktionalität der verschiedenen Formularelemente oder Widgets im Detail betrachten — und alle verfügbaren Optionen untersuchen, um unterschiedliche Arten von Daten zu sammeln. In diesem speziellen Artikel werden wir uns mit dem ursprünglichen Satz von Formularelementen befassen, der seit den frühen Tagen des Webs in allen Browsern verfügbar ist.

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
        Ein detailliertes Verständnis der ursprünglichen nativen Formular-Widgets in Browsern zur Datenerfassung und deren Implementierung mit HTML.
      </td>
    </tr>
  </tbody>
</table>

Sie haben bereits einige Formularelemente kennengelernt, darunter {{HTMLelement('form')}}, {{HTMLelement('fieldset')}}, {{HTMLelement('legend')}}, {{HTMLelement('textarea')}}, {{HTMLelement('label')}}, {{HTMLelement('button')}} und {{HTMLelement('input')}}. Dieser Artikel umfasst:

- Die häufigen Eingabetypen {{HTMLelement('input/button', 'button')}}, {{HTMLelement('input/checkbox', 'checkbox')}}, {{HTMLelement('input/file', 'file')}}, {{HTMLelement('input/hidden', 'hidden')}}, {{HTMLelement('input/image', 'image')}}, {{HTMLelement('input/password', 'password')}}, {{HTMLelement('input/radio', 'radio')}}, {{HTMLelement('input/reset', 'reset')}}, {{HTMLelement('input/submit', 'submit')}} und {{HTMLelement('input/text', 'text')}}.
- Einige der Attribute, die allen Formularelementen gemeinsam sind.

> [!NOTE]
> Wir behandeln weitere, leistungsstärkere Formularelemente in den nächsten beiden Artikeln. Für eine fortgeschrittenere Referenz sollten Sie unser [HTML-Formular-Elemente-Referenz](/de/docs/Web/HTML/Reference/Elements#forms) und insbesondere unsere umfangreiche [`<input>` Typen](/de/docs/Web/HTML/Reference/Elements/input) Referenz konsultieren.

## Text-Eingabefelder

Text-{{htmlelement("input")}}-Felder sind die grundlegendsten Formular-Widgets. Sie sind eine sehr bequeme Möglichkeit, dem Benutzer die Eingabe aller Art von Daten zu ermöglichen, und wir haben bereits einige einfache Beispiele gesehen.

> [!NOTE]
> HTML-Formular-Textfelder sind einfache Klartext-Eingabesteuerungen. Das bedeutet, dass sie nicht zur Durchführung von Rich-Text-Bearbeitungen (Fett, Kursiv, usw.) verwendet werden können. Alle Rich-Text-Editoren, denen Sie begegnen werden, sind benutzerdefinierte Widgets, die mit HTML, CSS und JavaScript erstellt wurden.

Alle grundlegenden Textsteuerungen teilen einige gemeinsame Verhaltensweisen:

- Sie können als [`readonly`](/de/docs/Web/HTML/Reference/Elements/input#readonly) markiert werden (der Benutzer kann den Eingabewert nicht ändern, aber er wird trotzdem mit den restlichen Formulardaten gesendet) oder [`disabled`](/de/docs/Web/HTML/Reference/Elements/input#disabled) (der Eingabewert kann nicht geändert werden und wird niemals mit den restlichen Formulardaten gesendet).
- Sie können einen [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder) haben; dies ist der Text, der im Text-Eingabefeld erscheint und der kurz den Zweck des Feldes beschreiben sollte.
- Sie können im [`size`](/de/docs/Web/HTML/Reference/Attributes/size) (die physische Größe des Feldes) und [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength) (die maximale Anzahl von Zeichen, die in das Feld eingegeben werden können) eingeschränkt werden.
- Sie können von der Rechtschreibprüfung profitieren (mithilfe des [`spellcheck`](/de/docs/Web/HTML/Reference/Global_attributes/spellcheck) Attributs).

> [!NOTE]
> Das {{htmlelement("input")}}-Element ist einzigartig unter den HTML-Elementen, da es je nach Wert des [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) Attributs viele Formen annehmen kann. Es wird für die Erstellung der meisten Arten von Formular-Widgets verwendet, einschließlich einzeiliger Textfelder, Zeit- und Datumssteuerungen, Steuerungen ohne Texteingabe wie Kontrollkästchen, Radio Buttons und Farbwähler, sowie Schaltflächen.

### Einzeilige Textfelder

Ein einzeiliges Textfeld wird mit einem {{HTMLElement("input")}}-Element erstellt, dessen [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) Attribut auf [`text`](/de/docs/Web/HTML/Reference/Elements/input/text) gesetzt ist, oder indem das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) Attribut weggelassen wird (`text` ist der Standardwert). Der Wert `text` für dieses Attribut ist auch der Fallback-Wert, wenn der angegebene Wert für das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) Attribut vom Browser nicht erkannt wird (zum Beispiel, wenn Sie `type="color"` angeben und der Browser keine nativen Farbwähler unterstützt).

Hier ist ein einfaches einzeiliges Textfeld-Beispiel:

```html live-sample___single-line
<input type="text" id="comment" name="comment" value="I'm a text field" />
```

Es wird so dargestellt:

{{embedlivesample("single-line", "100%", "80")}}

Einzeilige Textfelder haben nur eine echte Einschränkung: Wenn Sie Text mit Zeilenumbrüchen eingeben, entfernt der Browser diese Zeilenumbrüche, bevor die Daten an den Server gesendet werden.

Der untenstehende Screenshot zeigt ein Texteingabefeld im Standard-, fokussierten und deaktivierten Zustand. Die meisten Browser zeigen den fokussierten Zustand mit einem Fokusring um die Steuerung und den deaktivierten Zustand mit grauem Text oder einer verblassten/halbtransparenten Steuerung.

![Screenshot of the default, focused and disabled states text input in Chrome on macOS](disabled.png)

Die in diesem Dokument verwendeten Screenshots wurden im Chrome-Browser auf macOS aufgenommen. Es kann zwischen diesen Feldern/Schaltflächen in verschiedenen Browsern zu geringfügigen Unterschieden kommen, aber die grundlegende Hervorhebungstechnik bleibt ähnlich.

> [!NOTE]
> Wir diskutieren Werte für das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) Attribut, die spezifische Validierungseinschränkungen erzwingen, einschließlich der Farbauswahl, E-Mail- und URL-Eingabetypen, im nächsten Artikel, [Die HTML5-Eingabetypen](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types).

#### Passwortfeld

Einer der ursprünglichen Eingabetypen war der [`password`](/de/docs/Web/HTML/Reference/Elements/input/password) Textfeldtyp:

```html live-sample___password
<input type="password" id="pwd" name="pwd" />
```

Dies wird ähnlich wie das grundlegende einzeilige Textfeld dargestellt:

{{embedlivesample("password", "100%", "80")}}

Versuchen Sie jedoch, etwas in das Feld einzugeben — jedes eingegebene Zeichen wird als Punkt angezeigt.

Der `password`-Wert fügt den eingegebenen Text keine speziellen Einschränkungen hinzu, aber er verschleiert den eingegebenen Wert im Feld, sodass er nicht leicht von anderen gelesen werden kann.

Denken Sie daran, dass dies nur eine Benutzeroberflächenfunktion ist; es sei denn, Sie senden Ihr Formular sicher, wird es im Klartext gesendet, was schlecht für die Sicherheit ist — eine bösartige Partei könnte Ihre Daten abfangen und Passwörter, Kreditkartendetails oder was auch immer Sie gesendet haben, stehlen. Der beste Weg, Benutzer davor zu schützen, besteht darin, alle Seiten mit Formularen über eine sichere Verbindung (d.h. an einer `https://`-Adresse) zu hosten, sodass die Daten vor dem Senden verschlüsselt werden.

Browser erkennen die Sicherheitsimplikationen des Sendens von Formulardaten über eine unsichere Verbindung und haben Warnungen, um Benutzer davon abzuhalten, unsichere Formulare zu verwenden.

### Versteckter Inhalt

Ein weiteres ursprüngliches Textelement ist der [`hidden`](/de/docs/Web/HTML/Reference/Elements/input/hidden) Eingabetyp. Dieser wird verwendet, um ein Formularelement zu erstellen, das für den Benutzer unsichtbar ist, aber dennoch zusammen mit den restlichen Formulardaten an den Server gesendet wird, sobald das Formular abgeschickt wird — zum Beispiel könnten Sie einen Zeitstempel an den Server senden, der angibt, wann eine Bestellung aufgegeben wurde. Da es versteckt ist, kann der Benutzer den Wert weder sehen noch absichtlich bearbeiten, es wird niemals fokussiert und ein Bildschirmlesegerät wird es ebenfalls nicht bemerken.

```html
<input type="hidden" id="timestamp" name="timestamp" value="1286705410" />
```

Wenn Sie ein solches Element erstellen, müssen seine `name` und `value` Attribute festgelegt werden. Der Wert kann dynamisch über JavaScript gesetzt werden. Der `hidden` Eingabetyp sollte kein zugehöriges Label haben.

Andere Texteingabetypen wie {{HTMLElement("input/search", "search")}}, {{HTMLElement("input/url", "url")}} und {{HTMLElement("input/tel", "tel")}} werden im nächsten Tutorial behandelt, [HTML5 Eingabetypen](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types).

## Prüfelemente: Kontrollkästchen und Radio Buttons

Prüfelemente sind Steuerungen, deren Zustand Sie durch Klicken auf sie oder deren zugehörige Labels ändern können. Es gibt zwei Arten von Prüfelementen: das Kontrollkästchen und den Radio-Button. Beide verwenden das [`checked`](/de/docs/Web/HTML/Reference/Elements/input/checkbox#checked) Attribut, um anzuzeigen, ob das Widget standardmäßig aktiviert ist oder nicht.

Es ist anzumerken, dass sich diese Widgets nicht genau wie andere Formular-Widgets verhalten. Für die meisten Formular-Widgets werden alle Widgets, die ein [`name`](/de/docs/Web/HTML/Reference/Elements/input#name) Attribut haben, gesendet, auch wenn kein Wert ausgefüllt wurde, sobald das Formular abgeschickt wird. Bei Prüfelementen werden ihre Werte nur gesendet, wenn sie aktiviert sind. Wenn sie nicht aktiviert sind, wird nichts gesendet, nicht einmal ihr Name. Wenn sie aktiviert sind, aber keinen Wert haben, wird der Name mit einem Wert von _on_ gesendet.

Für maximale Benutzerfreundlichkeit/Barrierefreiheit wird empfohlen, jede Liste verwandter Elemente in ein {{htmlelement("fieldset")}} zu umgeben, mit einem {{htmlelement("legend")}}, das eine allgemeine Beschreibung der Liste liefert. Jedes einzelne Paar von {{htmlelement("label")}}/{{htmlelement("input")}}-Elementen sollte in einem eigenen Listenelement (oder ähnlich) enthalten sein. Das zugeordnete {{htmlelement('label')}} wird im Allgemeinen direkt vor oder nach dem Radio-Button oder Kontrollkästchen platziert, wobei die Anweisungen für die Gruppe von Radio-Buttons oder Kontrollkästchen in der Regel der Inhalt des {{htmlelement("legend")}} sind.

### Kontrollkästchen

Ein Kontrollkästchen wird mit dem {{HTMLElement("input")}}-Element erstellt, bei dem das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) Attribut auf den Wert [`checkbox`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) gesetzt ist.

```html
<input type="checkbox" id="questionOne" name="subscribe" value="yes" checked />
```

Verwandte Kontrollkästchen sollten dasselbe [`name`](/de/docs/Web/HTML/Reference/Elements/input#name) Attribut verwenden. Das Hinzufügen des [`checked`](/de/docs/Web/HTML/Reference/Elements/input/checkbox#checked) Attributs macht das Kontrollkästchen automatisch aktiviert, wenn die Seite geladen wird. Das Klicken auf das Kontrollkästchen oder sein zugehöriges Label schaltet das Kontrollkästchen ein und aus.

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

Der folgende Screenshot zeigt Kontrollkästchen im Standard-, fokussierten und deaktivierten Zustand. Kontrollkästchen im Standard- und deaktivierten Zustand erscheinen aktiviert, während im fokussierten Zustand das Kontrollkästchen nicht aktiviert ist und ein Fokusring darum erscheint.

![Default, focused and disabled Checkboxes in chrome 115 on macOS](checkboxes.png)

> [!NOTE]
> Alle Kontrollkästchen und Radio-Buttons mit dem [`checked`](/de/docs/Web/HTML/Reference/Elements/input/checkbox#checked) Attribut auf Laden entsprechen der {{cssxref(':default')}} Pseudo-Klasse, auch wenn sie nicht mehr aktiviert sind. Alle, die derzeit aktiviert sind, entsprechen der {{cssxref(':checked')}} Pseudo-Klasse.

Aufgrund der Ein-/Aus-Natur von Kontrollkästchen wird das Kontrollkästchen als Umschaltknopf angesehen, wobei viele Entwickler und Designer das Standard-Kontrollkästchen-Styling erweitern, um Schaltflächen zu erstellen, die wie Umschalter aussehen. Sie können [ein Beispiel in Aktion hier sehen](https://mdn.github.io/learning-area/html/forms/toggle-switch-example/) (sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/toggle-switch-example/index.html)).

### Radio-Button

Ein Radio-Button wird mit dem {{HTMLElement("input")}}-Element erstellt, bei dem das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) Attribut auf den Wert [`radio`](/de/docs/Web/HTML/Reference/Elements/input/radio) gesetzt ist:

```html
<input type="radio" id="soup" name="meal" value="soup" checked />
```

Mehrere Radio-Buttons können miteinander verbunden werden. Wenn sie denselben Wert für ihr [`name`](/de/docs/Web/HTML/Reference/Elements/input#name) Attribut teilen, werden sie als zur gleichen Gruppe von Schaltflächen gehörend betrachtet. Nur eine Schaltfläche in einer bestimmten Gruppe kann gleichzeitig aktiv sein; das bedeutet, wenn eine von ihnen aktiviert ist, werden alle anderen automatisch deaktiviert. Wenn das Formular gesendet wird, wird nur der Wert des aktivierten Radio-Buttons gesendet. Wenn keiner von ihnen aktiviert ist, wird der gesamte Pool von Radiobuttons als unbekannter Status betrachtet und es wird kein Wert mit dem Formular gesendet. Sobald einer der Radiobuttons in einer gleichnamigen Gruppe von Schaltern aktiviert ist, ist es dem Benutzer nicht möglich, alle Schalter ohne Zurücksetzen des Formulars zu deaktivieren.

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

Der folgende Screenshot zeigt Standard- und deaktivierte Radio-Buttons im aktivierten Zustand sowie einen fokussierten Radio-Button im deaktivierten Zustand.

![Default, focused and disabled Radio buttons in chrome 115 on macOS](radios.png)

## Tatsächliche Schaltflächen

Der Radio-Button ist trotz seines Namens eigentlich kein Button; lassen Sie uns fortfahren und schauen wir uns tatsächliche Buttons an! Es gibt drei Eingabetypen, die Buttons erzeugen:

- [`submit`](/de/docs/Web/HTML/Reference/Elements/input/submit)
  - : Sendet die Formulardaten an den Server. Für {{HTMLElement("button")}}-Elemente führt das Weglassen des `type` Attributs (oder ein ungültiger Wert des `type`) zu einem Submit-Button.
- [`reset`](/de/docs/Web/HTML/Reference/Elements/input/reset)
  - : Setzt alle Formularelemente auf ihre Standardwerte zurück.
- [`button`](/de/docs/Web/HTML/Reference/Elements/input/button)
  - : Schaltflächen, die keine automatische Wirkung haben, sondern mit JavaScript-Code angepasst werden können.

Dann haben wir auch das {{htmlelement("button")}} Element selbst. Dieses kann ein `type` Attribut mit dem Wert `submit`, `reset` oder `button` haben, um das Verhalten der oben genannten drei `<input>` Typen zu imitieren. Der Hauptunterschied zwischen den beiden ist, dass tatsächliche `<button>` Elemente viel einfacher zu stylen sind.

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
> Der `image` Eingabetyp wird ebenfalls als Taste dargestellt. Wir werden diesen später ebenfalls behandeln.

Nachfolgend finden Sie Beispiele für jeden Button `<input>` Typ, zusammen mit dem äquivalenten `<button>` Typ. Jedes Paar wurde in ein {{htmlelement("div")}}-Element eingeschlossen, um es auf eine neue Zeile zu setzen.

- Submit-Button:

  ```html live-sample___buttons
  <div>
    <button type="submit">This is a <strong>submit button</strong></button>

    <input type="submit" value="This is a submit button" />
  </div>
  ```

- Reset-Button:

  ```html live-sample___buttons
  <div>
    <button type="reset">This is a <strong>reset button</strong></button>

    <input type="reset" value="This is a reset button" />
  </div>
  ```

- Anonymer Button:

  ```html live-sample___buttons
  <div>
    <button type="button">This is an <strong>anonymous button</strong></button>

    <input type="button" value="This is an anonymous button" />
  </div>
  ```

Diese Beispiele werden so dargestellt:

{{embedlivesample("buttons", "100%", "150")}}

Schaltflächen verhalten sich immer gleich, unabhängig davon, ob Sie ein {{HTMLElement("button")}}-Element oder ein {{HTMLElement("input")}}-Element verwenden. Wie Sie aus den Beispielen sehen können, ermöglichen jedoch {{HTMLElement("button")}}-Elemente die Verwendung von HTML in ihrem Inhalt, der zwischen den öffnenden und schließenden `<button>`-Tags eingefügt wird. {{HTMLElement("input")}}-Elemente dagegen sind {{Glossary("void_element", "Leer-Elemente")}}; ihr angezeigter Inhalt wird im `value` Attribut eingefügt und akzeptiert daher nur Klartext als Inhalt.

Der folgende Screenshot zeigt eine Schaltfläche im Standard-, Fokus- und deaktivierten Zustand. Im fokussierten Zustand gibt es einen Fokusring um die Schaltfläche und im deaktivierten Zustand ist die Schaltfläche ausgegraut.

![Default, focus, and disabled button states in chrome 115 on macOS](buttons.png)

### Bildtaste

Die **Bildtaste**-Steuerung wird genauso gerendert wie ein {{HTMLElement("img")}}-Element, mit der Ausnahme, dass sie, wenn der Benutzer darauf klickt, wie eine Submit-Taste funktioniert.

Eine Bildtaste wird erstellt, indem ein {{HTMLElement("input")}}-Element mit dem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) Attributwert [`image`](/de/docs/Web/HTML/Reference/Elements/input/image) verwendet wird. Dieses Element unterstützt genau dasselbe Attributset wie das {{HTMLElement("img")}}-Element, zusätzlich zu allen Attributen, die von anderen Formular-Buttons unterstützt werden.

```html
<input type="image" alt="Click me!" src="my-img.png" width="80" height="30" />
```

Wenn die Bildtaste verwendet wird, um das Formular zu senden, sendet diese Steuerung nicht ihren Wert — stattdessen werden die X- und Y-Koordinaten des Klicks auf das Bild gesendet (die Koordinaten beziehen sich auf das Bild, was bedeutet, dass die obere linke Ecke des Bildes die Koordinate (0, 0) darstellt). Die Koordinaten werden als zwei Schlüssel/Wert-Paare gesendet:

- Der X-Wert-Schlüssel ist der Wert des [`name`](/de/docs/Web/HTML/Reference/Elements/input#name) Attributs gefolgt von der Zeichenfolge "_.x_".
- Der Y-Wert-Schlüssel ist der Wert des [`name`](/de/docs/Web/HTML/Reference/Elements/input#name) Attributs gefolgt von der Zeichenfolge "_.y_".

So werden zum Beispiel beim Klicken auf das Bild bei der Koordinate (123, 456) und beim Absenden über die `get`-Methode die Werte wie folgt an die URL angehängt:

```url
https://example.com?pos.x=123&pos.y=456
```

Dies ist eine sehr bequeme Möglichkeit, eine "Hot Map" zu erstellen. Wie diese Werte gesendet und abgerufen werden, wird im Artikel [Senden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) detailliert beschrieben.

## Dateiauswahl

Es gibt einen letzten `<input>`-Typ, der uns in den frühen Tagen von HTML begegnet ist: den Datei-Eingabetyp. Formulare können Dateien an einen Server senden (diese spezielle Aktion wird auch im Artikel [Senden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) detailliert beschrieben). Das Datei-Auswahl-Widget kann verwendet werden, um eine oder mehrere Dateien zum Senden auszuwählen.

Um ein [Datei-Auswahl-Widget](/de/docs/Web/HTML/Reference/Elements/input/file) zu erstellen, verwenden Sie das {{HTMLElement("input")}}-Element mit seinem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) Attribut auf `file` gesetzt. Die akzeptierten Dateitypen können mit dem [`accept`](/de/docs/Web/HTML/Reference/Elements/input#accept) Attribut eingeschränkt werden. Zusätzlich, wenn Sie dem Benutzer gestatten möchten, mehr als eine Datei auszuwählen, können Sie dies durch Hinzufügen des [`multiple`](/de/docs/Web/HTML/Reference/Elements/input#multiple) Attributs tun.

### Beispiel

In diesem Beispiel wird ein Datei-Auswahl-Widget erstellt, das grafische Bilddateien anfordert. Der Benutzer darf in diesem Fall mehrere Dateien auswählen.

```html
<input type="file" name="file" id="file" accept="image/*" multiple />
```

Auf einigen mobilen Geräten kann der Dateiauswähler direkt auf Fotos, Videos und Audio zugreifen, die von der Kamera und dem Mikrofon des Geräts aufgenommen wurden, indem Erfassungsinformationen wie folgt zum `accept` Attribut hinzugefügt werden:

```html
<input type="file" accept="image/*;capture=camera" />
<input type="file" accept="video/*;capture=camcorder" />
<input type="file" accept="audio/*;capture=microphone" />
```

Der folgende Screenshot zeigt das Datei-Auswahl-Widget im Standard-, Fokus- und deaktivierten Zustand, wenn keine Datei ausgewählt ist.

![File picker widget in default, focus, and disabled states in chrome 115 on macOS](filepickers.png)

## Gemeinsame Attribute

Viele der Elemente, die zur Definition von Formularelementen verwendet werden, haben einige ihrer eigenen spezifischen Attribute. Es gibt jedoch einen Satz von Attributen, die allen Formular-Elementen gemeinsam sind. Sie haben einige davon bereits getroffen, aber unten ist eine Liste dieser gemeinsamen Attribute, zu Ihrer Referenz:

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
        Dieses Boolean-Attribut erlaubt es Ihnen, anzugeben, dass das Element beim Laden der Seite automatisch den Eingabefokus haben sollte.
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
        Dieses Boolean-Attribut gibt an, dass der Benutzer nicht mit dem Element interagieren kann.
        Wenn dieses Attribut nicht angegeben ist, erbt das Element seine Einstellung vom umgebenden Element, z. B. {{HTMLElement("fieldset")}};
        wenn es kein umgebendes Element mit dem <code>disabled</code> Attribut gibt, dann ist das Element aktiviert.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/input#form">form</a></code>
      </td>
      <td></td>
      <td>
        Das <code>&#x3C;form></code> Element, mit dem das Widget verknüpft ist, wird verwendet, wenn es nicht in diesem Formular verschachtelt ist.
        Der Wert des Attributs muss die <code>id</code> Attribut eines {{HTMLElement("form")}} Elements im selben Dokument sein.
        Damit können Sie ein Formularelement mit einem Formular verknüpfen, dem es außerhalb liegt, auch wenn es innerhalb eines anderen Formularelements liegt.
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
      <td>Der Anfangswert des Elements.</td>
    </tr>
  </tbody>
</table>

## Zusammenfassung

Dieser Artikel hat die älteren Eingabetypen behandelt — den ursprünglichen Satz, der in den frühen Tagen von HTML eingeführt wurde und in allen Browsern gut unterstützt wird. Im nächsten Abschnitt schauen wir uns die moderneren Werte des `type` Attributs an.

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/How_to_structure_a_web_form", "Learn_web_development/Extensions/Forms/HTML5_input_types", "Learn_web_development/Extensions/Forms")}}
