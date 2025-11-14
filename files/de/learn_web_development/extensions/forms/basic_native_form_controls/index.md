---
title: Grundlegende native Formularsteuerelemente
slug: Learn_web_development/Extensions/Forms/Basic_native_form_controls
l10n:
  sourceCommit: cc7f29133a331628d623e8cd705394b538d4368c
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/How_to_structure_a_web_form", "Learn_web_development/Extensions/Forms/HTML5_input_types", "Learn_web_development/Extensions/Forms")}}

Im [vorherigen Artikel](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form) haben wir ein funktionales Webformular-Beispiel markiert, einige Formularsteuerelemente und gemeinsame Strukturelemente eingeführt und uns auf Best Practices zur Barrierefreiheit konzentriert. Als Nächstes werden wir die Funktionalität der verschiedenen Formularsteuerelemente oder Widgets im Detail betrachten – wir untersuchen alle unterschiedlichen Optionen, die vorhanden sind, um verschiedene Arten von Daten zu sammeln. In diesem speziellen Artikel betrachten wir den ursprünglichen Satz von Formularsteuerelementen, die seit den frühen Tagen des Webs in allen Browsern verfügbar sind.

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
      <th scope="row">Ziel:</th>
      <td>
        Den ursprünglichen Satz von nativen Formular-Widgets, die in Browsern zur Datenerfassung verfügbar sind, im Detail zu verstehen und wie sie mit HTML implementiert werden.
      </td>
    </tr>
  </tbody>
</table>

Sie kennen bereits einige Formularelemente, einschließlich {{HTMLelement('form')}}, {{HTMLelement('fieldset')}}, {{HTMLelement('legend')}}, {{HTMLelement('textarea')}}, {{HTMLelement('label')}}, {{HTMLelement('button')}} und {{HTMLelement('input')}}. Dieser Artikel behandelt:

- Die häufigen Eingabetypen {{HTMLelement('input/button', 'button')}}, {{HTMLelement('input/checkbox', 'checkbox')}}, {{HTMLelement('input/file', 'file')}}, {{HTMLelement('input/hidden', 'hidden')}}, {{HTMLelement('input/image', 'image')}}, {{HTMLelement('input/password', 'password')}}, {{HTMLelement('input/radio', 'radio')}}, {{HTMLelement('input/reset', 'reset')}}, {{HTMLelement('input/submit', 'submit')}} und {{HTMLelement('input/text', 'text')}}.
- Einige der Attribute, die allen Formularsteuerelementen gemeinsam sind.

> [!NOTE]
> Wir behandeln zusätzliche, leistungsstärkere Formularsteuerelemente in den nächsten beiden Artikeln. Wenn Sie eine fortgeschrittenere Referenz benötigen, sollten Sie unsere [HTML-Formularelementreferenz](/de/docs/Web/HTML/Reference/Elements#forms) konsultieren, insbesondere unsere umfangreiche [`<input>` Typen](/de/docs/Web/HTML/Reference/Elements/input) Referenz.

## Text-Eingabefelder

Text {{htmlelement("input")}} Felder sind die grundlegendsten Formular-Widgets. Sie sind eine sehr bequeme Möglichkeit, dem Benutzer das Eingeben aller Arten von Daten zu ermöglichen, und wir haben bereits einige einfache Beispiele gesehen.

> [!NOTE]
> HTML-Formular-Textfelder sind einfache Klartexteingabesteuerungen. Das bedeutet, dass Sie sie nicht zum Erstellen von Rich-Text-Bearbeitungen (fett, kursiv, etc.) verwenden können. Alle Rich-Text-Editoren, denen Sie begegnen, sind benutzerdefinierte Widgets, die mit HTML, CSS und JavaScript erstellt wurden.

Alle grundlegenden Textsteuerelemente teilen einige gemeinsame Verhaltensweisen:

- Sie können als [`readonly`](/de/docs/Web/HTML/Reference/Elements/input#readonly) (der Benutzer kann den Eingabewert nicht ändern, aber er wird dennoch mit dem Rest der Formulardaten gesendet) oder [`disabled`](/de/docs/Web/HTML/Reference/Elements/input#disabled) (der Eingabewert kann nicht verändert werden und wird nie mit den restlichen Formulardaten gesendet) markiert werden.
- Sie können ein [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder) haben; dies ist der Text, der innerhalb des Texteingabefeldes erscheint und kurz den Zweck des Feldes beschreibt.
- Sie können in ihrer [`size`](/de/docs/Web/HTML/Reference/Attributes/size) (die physische Größe des Feldes) und [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength) (die maximale Anzahl von Zeichen, die in das Feld eingegeben werden können) eingeschränkt werden.
- Sie können von einer Rechtschreibprüfung profitieren (mit dem [`spellcheck`](/de/docs/Web/HTML/Reference/Global_attributes/spellcheck)-Attribut).

> [!NOTE]
> Das {{htmlelement("input")}} Element ist einzigartig unter den HTML-Elementen, da es je nach Wert seines [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attributs viele Formen annehmen kann. Es wird verwendet, um die meisten Arten von Formular-Widgets zu erstellen, einschließlich einzeiliger Textfelder, Zeit- und Datumskontrollen, Steuerungen ohne Texteingabe wie Checkboxen, Radiobuttons und Farbwähler sowie Buttons.

### Einzeilige Textfelder

Ein einzeiliges Textfeld wird mit einem {{HTMLElement("input")}} Element erstellt, dessen [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut auf `text` gesetzt ist, oder durch das Weglassen des [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attributs insgesamt (`text` ist der Standardwert). Der Wert `text` für dieses Attribut ist auch der Rückfallwert, wenn der von Ihnen angegebene Wert für das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut vom Browser nicht erkannt wird (zum Beispiel, wenn Sie `type="color"` angeben und der Browser keine nativen Farbwähler unterstützt).

> [!NOTE]
> Sie können Beispiele aller Arten von einzeiligen Textfeldern auf GitHub unter [single-line-text-fields.html](https://github.com/mdn/learning-area/blob/main/html/forms/native-form-widgets/single-line-text-fields.html) finden ([sehen Sie sich das auch live an](https://mdn.github.io/learning-area/html/forms/native-form-widgets/single-line-text-fields.html)).

Hier ist ein grundlegendes Beispiel eines einzeiligen Textfeldes:

```html
<input type="text" id="comment" name="comment" value="I'm a text field" />
```

Einzeilige Textfelder haben nur eine echte Einschränkung: Wenn Sie Text mit Zeilenumbrüchen eingeben, entfernt der Browser diese Zeilenumbrüche, bevor die Daten an den Server gesendet werden.

Das untenstehende Bild zeigt eine Texteingabe in den Standard-, fokussierten und deaktivierten Zuständen. Die meisten Browser zeigen den fokussierten Zustand mit einem Fokusring um die Steuerung an und den deaktivierten Zustand mit grauem Text oder einer verblassten/halbtransparenten Steuerung.

![Screenshot der Standard-, fokussierten und deaktivierten Text Eingabe in Chrome auf macOS](disabled.png)

Die in diesem Dokument verwendeten Screenshots wurden im Chrome-Browser auf macOS aufgenommen. Es kann in diesen Feldern/Buttons geringe Variationen zwischen verschiedenen Browsern geben, aber die grundlegende Hervorhebungstechnik bleibt ähnlich.

> [!NOTE]
> Wir besprechen die Werte für das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut, die spezifische Validierungseinschränkungen erzwingen, einschließlich Farb-, E-Mail- und URL-Eingabetypen, im nächsten Artikel, [Die HTML5-Eingabetypen](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types).

#### Passwortfeld

Einer der ursprünglichen Eingabetypen war der `password` Textfeldtyp:

```html
<input type="password" id="pwd" name="pwd" />
```

Der folgende Screenshot zeigt ein Passwort-Eingabefeld, bei dem jedes eingegebene Zeichen als Punkt angezeigt wird.

![Passwortfeld in Chrome 115 auf macOS](password.png)

Der `password` Wert fügt dem eingegebenen Text keine speziellen Einschränkungen hinzu, aber er verschleiert den Wert, der in das Feld eingegeben wird (z. B. mit Punkten oder Sternchen), sodass andere ihn nicht leicht lesen können.

Beachten Sie, dass dies nur ein Benutzeroberflächenmerkmal ist; es wird in Klartext gesendet, es sei denn, Sie übermitteln Ihr Formular sicher, was schlecht für die Sicherheit ist – eine böswillige Partei könnte Ihre Daten abfangen und Passwörter, Kreditkartendaten oder alles andere, was Sie übermittelt haben, stehlen. Der beste Weg, Benutzer davor zu schützen, besteht darin, alle Seiten, die Formulare enthalten, über eine sichere Verbindung zu hosten (d.h. an einer `https://` Adresse), damit die Daten verschlüsselt werden, bevor sie gesendet werden.

Browser erkennen die Sicherheitsimplikationen des Sendens von Formulardaten über eine unsichere Verbindung und haben Warnungen, um Benutzer davon abzuhalten, unsichere Formulare zu verwenden.

### Versteckte Inhalte

Ein weiteres ursprüngliches Textelement ist der `hidden` Eingabetyp. Er wird verwendet, um ein Formularelement zu erstellen, das für den Benutzer unsichtbar ist, aber weiterhin an den Server gesendet wird, sobald das Formular übermittelt wurde – zum Beispiel, Sie möchten möglicherweise einen Zeitstempel an den Server senden, der angibt, wann eine Bestellung aufgegeben wurde. Da es versteckt ist, kann der Benutzer den Wert weder sehen noch absichtlich ändern, es erhält niemals den Fokus und ein Screenreader nimmt es ebenfalls nicht wahr.

```html
<input type="hidden" id="timestamp" name="timestamp" value="1286705410" />
```

Wenn Sie ein solches Element erstellen, müssen die `name` und `value` Attribute gesetzt werden. Der Wert kann dynamisch über JavaScript festgelegt werden. Der `hidden` Eingabetyp sollte kein zugewiesenes Label haben.

Andere Texteingabetypen wie {{HTMLElement("input/search", "search")}}, {{HTMLElement("input/url", "url")}} und {{HTMLElement("input/tel", "tel")}} werden im nächsten Tutorial behandelt, [HTML5-Eingabetypen](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types).

## Überprüfbare Elemente: Checkboxen und Radio-Buttons

Überprüfbare Elemente sind Steuerungen, deren Zustand Sie durch Klicken auf diese oder ihre zugehörigen Labels ändern können. Es gibt zwei Arten von überprüfbaren Elementen: die Checkbox und den Radio-Button. Beide verwenden das [`checked`](/de/docs/Web/HTML/Reference/Elements/input/checkbox#checked) Attribut, um anzuzeigen, ob das Widget standardmäßig ausgewählt ist oder nicht.

Es ist erwähnenswert, dass sich diese Widgets nicht genau wie andere Formularelemente verhalten. Bei den meisten Formularelementen werden alle Widgets, die ein [`name`](/de/docs/Web/HTML/Reference/Elements/input#name) Attribut haben, gesendet, auch wenn kein Wert ausgefüllt wurde. Im Fall überprüfbarer Elemente werden ihre Werte nur gesendet, wenn sie aktiviert sind. Sind sie nicht aktiviert, wird nichts gesendet, nicht einmal ihr Name. Sind sie aktiviert, haben aber keinen Wert, wird der Name mit einem Wert von _on_ gesendet.

> [!NOTE]
> Sie können die Beispiele aus diesem Abschnitt auf GitHub als [checkable-items.html](https://github.com/mdn/learning-area/blob/main/html/forms/native-form-widgets/checkable-items.html) finden ([sehen Sie sich das auch live an](https://mdn.github.io/learning-area/html/forms/native-form-widgets/checkable-items.html)).

Für maximale Benutzerfreundlichkeit und Barrierefreiheit wird empfohlen, jede Liste verwandter Elemente in ein {{htmlelement("fieldset")}} zu umgeben, mit einem {{htmlelement("legend")}}, das eine Gesamtbeschreibung der Liste bietet. Jedes einzelne Paar von {{htmlelement("label")}}/{{htmlelement("input")}}-Elementen sollte in seinem eigenen Listenelement (oder Ähnlichem) enthalten sein. Das zugehörige {{htmlelement('label')}} wird in der Regel direkt vor oder nach dem Radio-Button oder der Checkbox platziert, wobei die Anweisungen für die Gruppe von Radio-Buttons oder Checkboxes in der Regel der Inhalt des {{htmlelement("legend")}} sind. Siehe die oben verlinkten Beispiele für strukturelle Beispiele.

### Checkbox

Eine Checkbox wird mit dem {{HTMLElement("input")}} Element erstellt, wobei das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) Attribut auf den Wert {{HTMLElement("input/checkbox", "checkbox")}} gesetzt ist.

```html
<input type="checkbox" id="questionOne" name="subscribe" value="yes" checked />
```

Zugehörige Checkbox-Elemente sollten das gleiche [`name`](/de/docs/Web/HTML/Reference/Elements/input#name) Attribut verwenden. Die Einbeziehung des [`checked`](/de/docs/Web/HTML/Reference/Elements/input/checkbox#checked) Attributs aktiviert die Checkbox automatisch, wenn die Seite geladen wird. Das Klicken auf die Checkbox oder ihr zugeordnetes Label schaltet die Checkbox ein und aus.

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

Der folgende Screenshot zeigt Checkboxen im Standard-, fokussierten und deaktivierten Zustand. Checkboxen im Standard- und deaktivierten Zustand erscheinen markiert, während im fokussierten Zustand die Checkbox nicht markiert ist, mit einem Fokusring um sie herum.

![Standard-, fokussierte und deaktivierte Checkboxen in Chrome 115 auf macOS](checkboxes.png)

> [!NOTE]
> Alle Checkboxen und Radio-Buttons mit dem [`checked`](/de/docs/Web/HTML/Reference/Elements/input/checkbox#checked) Attribut beim Laden entsprechen der {{cssxref(':default')}} Pseudoklasse, auch wenn sie nicht mehr markiert sind. Alle, die derzeit markiert sind, entsprechen der {{cssxref(':checked')}} Pseudoklasse.

Aufgrund der Ein-/Aus-Natur von Checkboxen wird die Checkbox als Kippschalter-Button betrachtet, wobei viele Entwickler und Designer auf der Standard-Checkbox-Styling aufbauen und Buttons erstellen, die wie Kippschalter aussehen. Sie können [hier ein Beispiel in Aktion sehen](https://mdn.github.io/learning-area/html/forms/toggle-switch-example/) (sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/toggle-switch-example/index.html) an).

### Radio-Button

Ein Radio-Button wird mit dem {{HTMLElement("input")}} Element erstellt, wobei das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) Attribut auf den Wert `radio` gesetzt ist:

```html
<input type="radio" id="soup" name="meal" value="soup" checked />
```

Mehrere Radio-Buttons können miteinander verbunden werden. Wenn sie denselben Wert für ihr [`name`](/de/docs/Web/HTML/Reference/Elements/input#name) Attribut teilen, werden sie als in derselben Gruppe von Buttons betrachtet. Nur ein Button in einer gegebenen Gruppe kann gleichzeitig aktiviert sein; das bedeutet, wenn einer von ihnen aktiviert ist, werden alle anderen automatisch deaktiviert. Wenn das Formular gesendet wird, wird nur der Wert des ausgewählten Radio-Buttons gesendet. Wenn keiner von ihnen ausgewählt ist, wird der gesamte Pool von Radio-Buttons als in einem unbekannten Zustand betrachtet und kein Wert wird mit dem Formular gesendet. Sobald einer der Radio-Buttons in einer gleichnamigen Gruppe von Buttons ausgewählt ist, kann der Benutzer nicht alle Buttons abwählen, ohne das Formular zurückzusetzen.

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

Der folgende Screenshot zeigt standardmäßige und deaktivierte Radio-Buttons im aktivierten Zustand sowie einen fokussierten Radio-Button im nicht aktivierten Zustand.

![Standard-, fokussierte und deaktivierte Radio-Buttons in Chrome 115 auf macOS](radios.png)

## Tatsächliche Buttons

Der Radio-Button ist tatsächlich kein Button, trotz seines Namens; lassen Sie uns weitermachen und uns echte Buttons ansehen! Es gibt drei Eingabetypen, die Buttons erzeugen:

- `submit`
  - : Sendet die Formulardaten an den Server. Für {{HTMLElement("button")}}-Elemente führt das Weglassen des `type` Attributs (oder ein ungültiger `type`-Wert) zu einem Submit-Button.
- `reset`
  - : Setzt alle Formular-Widgets auf ihre Standardwerte zurück.
- `button`
  - : Buttons, die keine automatische Wirkung haben, aber mit JavaScript-Code angepasst werden können.

Dann haben wir auch das {{htmlelement("button")}} Element selbst. Dieses kann ein `type` Attribut mit dem Wert `submit`, `reset` oder `button` annehmen, um das Verhalten der drei oben genannten `<input>` Typen nachzuahmen. Der Hauptunterschied zwischen den beiden ist, dass tatsächliche `<button>` Elemente viel einfacher zu stylen sind.

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
> Der `image` Eingabetyp wird ebenfalls als Button gerendert. Wir werden darauf später ebenfalls eingehen.

> [!NOTE]
> Sie können die Beispiele aus diesem Abschnitt auf GitHub als [button-examples.html](https://github.com/mdn/learning-area/blob/main/html/forms/native-form-widgets/button-examples.html) finden ([sehen Sie sich das auch live an](https://mdn.github.io/learning-area/html/forms/native-form-widgets/button-examples.html)).

Unten finden Sie Beispiele für jeden Button `<input>` Typ sowie den entsprechenden `<button>` Typ.

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

Buttons verhalten sich immer gleich, ob Sie ein {{HTMLElement("button")}} Element oder ein {{HTMLElement("input")}} Element verwenden. Wie Sie in den Beispielen sehen können, erlauben {{HTMLElement("button")}} Elemente jedoch die Verwendung von HTML in ihrem Inhalt, der zwischen den öffnenden und schließenden `<button>` Tags eingefügt wird. {{HTMLElement("input")}} Elemente hingegen sind {{Glossary("void_element", "leere Elemente")}}; ihr angezeigter Inhalt wird innerhalb des `value`-Attributs eingefügt und akzeptiert daher nur Klartext als Inhalt.

Der folgende Screenshot zeigt einen Button im Standard-, fokussierten und deaktivierten Zustand. Im fokussierten Zustand gibt es einen Fokusring um den Button, und im deaktivierten Zustand ist der Button ausgegraut.

![Standard-, fokussierter und deaktivierter Button-Zustand in Chrome 115 auf macOS](buttons.png)

### Bildschaltfläche

Das **Bildbutton**-Steuerelement wird genau wie ein {{HTMLElement("img")}} Element gerendert, außer dass es, wenn der Benutzer darauf klickt, sich wie ein Submit-Button verhält.

Ein Bildbutton wird mit einem {{HTMLElement("input")}} Element erstellt, dessen [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) Attribut auf den Wert `image` gesetzt ist. Dieses Element unterstützt genau denselben Satz von Attributen wie das {{HTMLElement("img")}} Element sowie alle von anderen Formularbuttons unterstützten Attribute.

```html
<input type="image" alt="Click me!" src="my-img.png" width="80" height="30" />
```

Wenn der Bildbutton verwendet wird, um das Formular zu senden, sendet diese Steuerung nicht ihren Wert – stattdessen werden die X- und Y-Koordinaten des Klicks auf das Bild gesendet (die Koordinaten sind relativ zum Bild, was bedeutet, dass die obere linke Ecke des Bildes die Koordinate (0, 0) darstellt). Die Koordinaten werden als zwei Schlüssel/Wert-Paare gesendet:

- Der X-Wert-Schlüssel ist der Wert des [`name`](/de/docs/Web/HTML/Reference/Elements/input#name)-Attributs gefolgt von dem String "_.x_".
- Der Y-Wert-Schlüssel ist der Wert des [`name`](/de/docs/Web/HTML/Reference/Elements/input#name)-Attributs gefolgt von dem String "_.y_".

Wenn Sie also beispielsweise auf das Bild bei der Koordinate (123, 456) klicken und es über die `get` Methode senden, sehen Sie die Werte, die an die URL angehängt werden, wie folgt:

```url
https://example.com?pos.x=123&pos.y=456
```

Dies ist eine sehr bequeme Möglichkeit, eine "Hot Map" zu erstellen. Wie diese Werte gesendet und abgerufen werden, wird im Artikel [Senden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) detailliert beschrieben.

## Dateiauswahl

Es gibt letzten Endes noch einen `<input>` Typ, der uns im frühen HTML erreichte: den Dateieingabetyp. Formulare können Dateien an einen Server senden (diese spezifische Handlung wird auch in dem Artikel [Senden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) detailliert beschrieben). Das Dateiauswahl-Widget kann verwendet werden, um ein oder mehrere Dateien zum Senden auszuwählen.

Um ein [Dateiauswahl-Widget](/de/docs/Web/HTML/Reference/Elements/input/file) zu erstellen, verwenden Sie das {{HTMLElement("input")}} Element mit seinem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) Attribut auf `file` gesetzt. Die Arten von Dateien, die akzeptiert werden, können mithilfe des [`accept`](/de/docs/Web/HTML/Reference/Elements/input#accept) Attributs eingeschränkt werden. Darüber hinaus können Sie dem Benutzer das Auswählen mehrerer Dateien ermöglichen, indem Sie das [`multiple`](/de/docs/Web/HTML/Reference/Elements/input#multiple) Attribut hinzufügen.

### Beispiel

In diesem Beispiel wird ein Dateiauswahl-Widget erstellt, das nach Grafikbilddateien fragt. Der Benutzer darf in diesem Fall mehrere Dateien auswählen.

```html
<input type="file" name="file" id="file" accept="image/*" multiple />
```

Auf einigen mobilen Geräten kann das Dateiauswahl-Widget Fotos, Videos und Audio direkt von der Kamera und dem Mikrofon des Geräts erfassen, indem in das `accept` Attribut Angaben zur Erfassung wie folgt hinzugefügt werden:

```html
<input type="file" accept="image/*;capture=camera" />
<input type="file" accept="video/*;capture=camcorder" />
<input type="file" accept="audio/*;capture=microphone" />
```

Der folgende Screenshot zeigt das Dateiauswahl-Widget im Standard-, Fokus- und deaktivierten Zustand, wenn keine Datei ausgewählt ist.

![Dateiauswahl-Widget im Standard-, Fokus- und deaktivierten Zustand in Chrome 115 auf macOS](filepickers.png)

## Gemeinsame Attribute

Viele der Elemente, die zur Definition von Formularsteuerelementen verwendet werden, besitzen einige ihrer eigenen spezifischen Attribute. Es gibt jedoch einen Satz von Attributen, die allen Formularelementen gemeinsam sind. Einige davon sind Ihnen bereits bekannt, aber im Folgenden finden Sie eine Liste dieser gemeinsamen Attribute zu Ihrer Referenz:

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
        Dieses Boolean Attribut erlaubt es Ihnen anzugeben, dass das Element automatisch den Eingabefokus haben soll, wenn die Seite geladen wird.
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
        Dieses Boolean Attribut zeigt an, dass der Benutzer nicht mit dem Element interagieren kann.
        Wenn dieses Attribut nicht spezifiziert ist, erbt das Element seine Einstellung vom umschließenden Element, zum Beispiel {{HTMLElement("fieldset")}};
        gibt es kein umschließendes Element mit dem <code>disabled</code> Attribut, ist das Element aktiviert.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/input#form">form</a></code>
      </td>
      <td></td>
      <td>
        Das <code>&#x3C;form></code> Element, dem das Widget zugeordnet ist, wird genutzt, wenn es nicht innerhalb dieses Formulars geschachtelt ist.
        Der Wert des Attributs muss das <code>id</code> Attribut eines {{HTMLElement("form")}} Elements im selben Dokument sein.
        Dies ermöglicht es Ihnen, ein Formularsteuerelement mit einem Formular zu verknüpfen, außerhalb dessen es sich befindet, selbst wenn es sich innerhalb eines anderen Formularelements befindet.
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

## Zusammenfassung

Dieser Artikel hat die älteren Eingabetypen behandelt – die ursprüngliche Gruppe, die in den frühen Tagen von HTML eingeführt wurde und in allen Browsern gut unterstützt wird. Im nächsten Abschnitt werden wir die moderneren Werte des `type`-Attributs betrachten.

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/How_to_structure_a_web_form", "Learn_web_development/Extensions/Forms/HTML5_input_types", "Learn_web_development/Extensions/Forms")}}
