---
title: Grundlegende native Formularelemente
slug: Learn_web_development/Extensions/Forms/Basic_native_form_controls
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Forms/How_to_structure_a_web_form", "Learn_web_development/Extensions/Forms/HTML5_input_types", "Learn_web_development/Extensions/Forms")}}

Im [vorherigen Artikel](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form) haben wir ein funktionales Webformular-Beispiel erstellt, einige Formularelemente und gängige Strukturelemente eingeführt und uns auf Best Practices zur Barrierefreiheit konzentriert. Als nächstes werden wir die Funktionalität der verschiedenen Formularelemente im Detail betrachten – alle verfügbaren Optionen untersuchen, um verschiedene Arten von Daten zu sammeln. In diesem speziellen Artikel betrachten wir die ursprünglichen Formularelemente, die seit den Anfängen des Webs in allen Browsern verfügbar sind.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">Verständnis von HTML</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Um im Detail die ursprünglichen nativen Formularelemente zu verstehen, die in Browsern zur Datenerfassung verfügbar sind, und wie man sie mit HTML implementiert.
      </td>
    </tr>
  </tbody>
</table>

Sie haben bereits einige Formularelemente kennengelernt, darunter {{HTMLelement('form')}}, {{HTMLelement('fieldset')}}, {{HTMLelement('legend')}}, {{HTMLelement('textarea')}}, {{HTMLelement('label')}}, {{HTMLelement('button')}} und {{HTMLelement('input')}}. Dieser Artikel behandelt:

- Die gängigen Eingabetypen {{HTMLelement('input/button', 'button')}}, {{HTMLelement('input/checkbox', 'checkbox')}}, {{HTMLelement('input/file', 'file')}}, {{HTMLelement('input/hidden', 'hidden')}}, {{HTMLelement('input/image', 'image')}}, {{HTMLelement('input/password', 'password')}}, {{HTMLelement('input/radio', 'radio')}}, {{HTMLelement('input/reset', 'reset')}}, {{HTMLelement('input/submit', 'submit')}}, und {{HTMLelement('input/text', 'text')}}.
- Einige der Attribute, die allen Formularelementen gemeinsam sind.

> [!NOTE]
> Wir behandeln zusätzliche, leistungsfähigere Formularelemente in den nächsten beiden Artikeln. Wenn Sie eine fortgeschrittenere Referenz benötigen, sollten Sie unsere [HTML-Formularelement-Referenz](/de/docs/Web/HTML/Reference/Elements#forms) und insbesondere unsere umfangreiche [`<input>` Typenreferenz](/de/docs/Web/HTML/Reference/Elements/input) konsultieren.

## Texteingabefelder

Text {{htmlelement("input")}} Felder sind die grundlegendsten Formularelemente. Sie sind eine sehr bequeme Möglichkeit, den Benutzer beliebige Daten eingeben zu lassen, und wir haben bereits einige einfache Beispiele gesehen.

> [!NOTE]
> HTML-Formulartextfelder sind einfache Klartexteingabesteuerungen. Das bedeutet, dass Sie sie nicht für die Bearbeitung von Rich-Text (fett, kursiv usw.) verwenden können. Alle Rich-Text-Editoren, die Sie antreffen, sind benutzerdefinierte Widgets, die mit HTML, CSS und JavaScript erstellt wurden.

Alle grundlegenden Textsteuerelemente teilen einige gemeinsame Verhaltensweisen:

- Sie können als [`readonly`](/de/docs/Web/HTML/Reference/Elements/input#readonly) (der Benutzer kann den Eingabewert nicht ändern, aber er wird dennoch mit den restlichen Formulardaten gesendet) oder [`disabled`](/de/docs/Web/HTML/Reference/Elements/input#disabled) (der Eingabewert kann nicht geändert werden und wird nie mit den restlichen Formulardaten gesendet) markiert werden.
- Sie können einen [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder) haben; dies ist der Text, der im Text-Eingabefeld erscheint und kurz den Zweck des Feldes beschreiben sollte.
- Sie können in ihrer [`size`](/de/docs/Web/HTML/Reference/Attributes/size) (die physische Größe des Feldes) und ihrer [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength) (die maximale Anzahl von Zeichen, die in das Feld eingegeben werden können) eingeschränkt werden.
- Sie können von der Rechtschreibprüfung (durch das [`spellcheck`](/de/docs/Web/HTML/Reference/Global_attributes/spellcheck) Attribut) profitieren.

> [!NOTE]
> Das {{htmlelement("input")}} Element ist einzigartig unter den HTML-Elementen, da es in vielen verschiedenen Formen je nach Wert seines [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) Attributs auftreten kann. Es wird verwendet, um die meisten Arten von Formular-Widgets zu erstellen, einschließlich einzeiliger Textfelder, Zeit- und Datumskontrollen, Kontrollen ohne Texteingabe wie Kontrollkästchen, Optionsfelder und Farbwähler sowie Schaltflächen.

### Einzeilige Textfelder

Ein einzeiliges Textfeld wird mit einem {{HTMLElement("input")}} Element erstellt, dessen [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) Attributswert auf `text` gesetzt ist, oder indem das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) Attribut ganz weggelassen wird (`text` ist der Standardwert). Der Wert `text` für dieses Attribut ist auch der Rückfallwert, wenn der Wert, den Sie für das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) Attribut angeben, dem Browser unbekannt ist (zum Beispiel, wenn Sie `type="color"` angeben und der Browser keine nativen Farbwähler unterstützt).

> [!NOTE]
> Sie finden Beispiele für alle einzeiligen Textfeldtypen auf GitHub unter [single-line-text-fields.html](https://github.com/mdn/learning-area/blob/main/html/forms/native-form-widgets/single-line-text-fields.html) ([sie können es auch live ansehen](https://mdn.github.io/learning-area/html/forms/native-form-widgets/single-line-text-fields.html)).

Hier ist ein einfaches Beispiel für ein einzeiliges Textfeld:

```html
<input type="text" id="comment" name="comment" value="I'm a text field" />
```

Einzeilige Textfelder haben nur eine echte Einschränkung: Wenn Sie Text mit Zeilenumbrüchen eingeben, entfernt der Browser diese Zeilenumbrüche, bevor die Daten an den Server gesendet werden.

Das folgende Bild zeigt ein Texteingabefeld in den Zuständen Standard, Fokus und Deaktiviert. Die meisten Browser kennzeichnen den Fokusszustand mit einem Fokusring um das Steuerelement und den deaktivierten Zustand mit grauem Text oder einem verblassten/halbtransparenten Steuerelement.

![Bild des standardmäßigen, fokussierten und deaktivierten Zustands des Texteingabefelds in Chrome auf macOS](disabled.png)

Die in diesem Dokument verwendeten Screenshots wurden im Chrome-Browser auf macOS aufgenommen. Es können geringfügige Unterschiede in diesen Feldern/Schaltflächen in verschiedenen Browsern auftreten, aber die grundlegende Hervorhebungstechnik bleibt ähnlich.

> [!NOTE]
> Wir besprechen Werte für das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) Attribut, die spezifische Validierungsbeschränkungen durchsetzen, einschließlich der Eingabetypen für Farbe, E-Mail und URL, im nächsten Artikel, [Die HTML5-Eingabetypen](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types).

#### Passwortfeld

Einer der ursprünglichen Eingabetypen war der `password` Textfeldtyp:

```html
<input type="password" id="pwd" name="pwd" />
```

Der folgende Screenshot zeigt das Passwort-Eingabefeld, bei dem jedes eingegebene Zeichen als Punkt angezeigt wird.

![Passwortfeld in Chrome 115 auf macOS](password.png)

Der `password` Wert fügt keinen speziellen Beschränkungen für den eingegebenen Text hinzu, aber er verdeckt den Wert, der in das Feld eingegeben wurde (z. B. mit Punkten oder Sternchen), sodass er nicht leicht von anderen gelesen werden kann.

Denken Sie daran, dass dies nur eine Benutzeroberflächenfunktion ist; es sei denn, Sie übermitteln Ihr Formular sicher, es wird im Klartext gesendet, was für die Sicherheit schlecht ist — eine böswillige Partei könnte Ihre Daten abfangen und Passwörter, Kreditkartendetails oder was auch immer Sie eingereicht haben, stehlen. Der beste Weg, um Benutzer davor zu schützen, ist, alle Seiten mit Formularen über eine sichere Verbindung zu hosten (d.h. unter einer `https://` Adresse), damit die Daten verschlüsselt werden, bevor sie gesendet werden.

Browser erkennen die Sicherheitsrisiken beim Versenden von Formulardaten über eine unsichere Verbindung und zeigen Warnungen, damit Benutzer keine unsicheren Formulare verwenden. Für weitere Informationen zu den Implementierungen in Firefox siehe [Unsichere Passwörter](/de/docs/Web/Security/Insecure_passwords).

### Versteckter Inhalt

Ein weiteres ursprüngliches Textsteuerelement ist der `hidden` Eingabetyp. Dies wird verwendet, um ein Formularelement zu erstellen, das für den Benutzer unsichtbar ist, aber dennoch zusammen mit den restlichen Formulardaten an den Server gesendet wird, sobald es übermittelt wird – zum Beispiel möchten Sie möglicherweise einen Zeitstempel an den Server übermitteln, der angibt, wann eine Bestellung aufgegeben wurde. Da es verborgen ist, kann der Benutzer den Wert nicht sehen oder absichtlich ändern, er wird nie fokussiert und von einem Bildschirmlesegerät auch nicht wahrgenommen.

```html
<input type="hidden" id="timestamp" name="timestamp" value="1286705410" />
```

Wenn Sie ein solches Element erstellen, ist es erforderlich, seine `name` und `value` Attribute festzulegen. Der Wert kann dynamisch über JavaScript gesetzt werden. Der `hidden` Eingabetyp sollte kein zugeordnetes Label haben.

Andere Textinput-Typen, wie {{HTMLElement("input/search", "search")}}, {{HTMLElement("input/url", "url")}}, und {{HTMLElement("input/tel", "tel")}}, werden im nächsten Tutorial behandelt, [HTML5-Eingabetypen](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types).

## Anwählbare Elemente: Kontrollkästchen und Optionsfelder

Anwählbare Elemente sind Steuerelemente, deren Zustand Sie durch Klicken auf sie oder ihre zugehörigen Labels ändern können. Es gibt zwei Arten von anwählbaren Elementen: das Kontrollkästchen und das Optionsfeld. Beide verwenden das [`checked`](/de/docs/Web/HTML/Reference/Elements/input/checkbox#checked) Attribut, um anzuzeigen, ob das Widget standardmäßig aktiviert ist oder nicht.

Es ist anzumerken, dass diese Widgets nicht genau wie andere Formularelemente funktionieren. Bei den meisten Formularelementen werden, sobald das Formular übermittelt wird, alle Widgets, die ein [`name`](/de/docs/Web/HTML/Reference/Elements/input#name) Attribut haben, gesendet, auch wenn kein Wert ausgefüllt wurde. Im Falle von anwählbaren Elementen werden ihre Werte nur gesendet, wenn sie angekreuzt sind. Wenn sie nicht angekreuzt sind, wird nichts gesendet, nicht einmal ihr Name. Wenn sie angekreuzt sind, aber keinen Wert haben, wird der Name mit einem Wert von _on_ gesendet.

> [!NOTE]
> Sie können die Beispiele aus diesem Abschnitt auf GitHub als [checkable-items.html](https://github.com/mdn/learning-area/blob/main/html/forms/native-form-widgets/checkable-items.html) ([sie können es auch live ansehen](https://mdn.github.io/learning-area/html/forms/native-form-widgets/checkable-items.html)) ansehen.

Für maximale Benutzerfreundlichkeit/Barrierefreiheit wird empfohlen, jede Liste verwandter Elemente in einem {{htmlelement("fieldset")}} zu umgeben, dabei sollte ein {{htmlelement("legend")}} eine allgemeine Beschreibung der Liste bereitstellen. Jedes individuelle Paar aus {{htmlelement("label")}}/{{htmlelement("input")}} Elementen sollte in seinem eigenen Listenelement (oder ähnlichen) enthalten sein. Das zugehörige {{htmlelement('label')}} wird in der Regel direkt vor oder nach dem Optionsfeld oder Kontrollkästchen platziert, wobei die Anweisungen für die Gruppe von Optionsfeldern oder Kontrollkästchen in der Regel der Inhalt des {{htmlelement("legend")}} sind. Siehe die oben verlinkten Beispiele für strukturelle Beispiele.

### Kontrollkästchen

Ein Kontrollkästchen wird mit dem {{HTMLElement("input")}}-Element erstellt, dessen [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) Attribut auf {{HTMLElement("input/checkbox", "checkbox")}} gesetzt ist.

```html
<input type="checkbox" id="questionOne" name="subscribe" value="yes" checked />
```

Verwandte Kontrollkästchen-Elemente sollten das gleiche [`name`](/de/docs/Web/HTML/Reference/Elements/input#name) Attribut verwenden. Das Einbeziehen des [`checked`](/de/docs/Web/HTML/Reference/Elements/input/checkbox#checked) Attributs macht das Kontrollkästchen bei der Seitenladung automatisch aktiviert. Durch Klicken auf das Kontrollkästchen oder dessen zugeordnetes Label wird das Kontrollkästchen ein- und ausgeschaltet.

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

Der folgende Screenshot zeigt Kontrollkästchen in den Zuständen Standard, Fokus und Deaktiviert. Kontrollkästchen im Standard- und Deaktiviert-Zustand erscheinen aktiviert, während im Fokuszustand das Kontrollkästchen deaktiviert ist und ein Fokusring darum liegt.

![Standard, fokussiert und deaktivierte Kontrollkästchen in chrome 115 auf macOS](checkboxes.png)

> [!NOTE]
> Alle Kontrollkästchen und Optionsfelder, die das [`checked`](/de/docs/Web/HTML/Reference/Elements/input/checkbox#checked) Attribut beim Laden haben, entsprechen der {{cssxref(':default')}} Pseudoklasse, selbst wenn sie nicht mehr aktiviert sind. Alle, die derzeit aktiviert sind, entsprechen der {{cssxref(':checked')}} Pseudoklasse.

Aufgrund der Ein-Aus-Natur von Kontrollkästchen wird das Kontrollkästchen als Toggle-Button betrachtet, wobei viele Entwickler und Designer den Standardstil des Kontrollkästchens erweitern, um Schaltflächen zu erstellen, die wie Umschalter aussehen. Sie können [hier ein Beispiel in Aktion sehen](https://mdn.github.io/learning-area/html/forms/toggle-switch-example/) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/toggle-switch-example/index.html)).

### Optionsfeld

Ein Optionsfeld wird mit dem {{HTMLElement("input")}}-Element erstellt, dessen [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) Attribut auf den Wert `radio` gesetzt ist:

```html
<input type="radio" id="soup" name="meal" value="soup" checked />
```

Mehrere Optionsfelder können miteinander verbunden werden. Wenn sie denselben Wert für ihr [`name`](/de/docs/Web/HTML/Reference/Elements/input#name) Attribut teilen, werden sie als Teil derselben Gruppe von Schaltflächen betrachtet. In einer gegebenen Gruppe von Buttons kann immer nur ein Button aktiviert sein; das bedeutet, dass wenn einer angekreuzt ist, alle anderen automatisch deaktiviert werden. Wenn das Formular gesendet wird, wird nur der Wert des ausgewählten Optionsfeldes gesendet. Wenn keines von ihnen aktiviert ist, wird die gesamte Gruppe als in einem unbekannten Zustand betrachtet und es wird kein Wert mit dem Formular gesendet. Sobald eines der Optionsfelder in einer Gruppe mit demselben Namen angekreuzt ist, kann es dem Benutzer nicht mehr möglich sein, alle Schaltflächen abzuwählen, ohne das Formular zurückzusetzen.

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

Der folgende Screenshot zeigt standardmäßige und deaktivierte Optionsfelder im aktivierten Zustand, zusammen mit einem fokussierten Optionsfeld im deaktivierten Zustand.

![Standard, fokussierte und deaktivierte Optionsfelder in chrome 115 auf macOS](radios.png)

## Tatsächliche Schaltflächen

Das Optionsfeld ist eigentlich keine Schaltfläche, trotz seines Namens; lassen Sie uns zu den tatsächlichen Schaltflächen übergehen! Es gibt drei Eingabetypen, die Schaltflächen erzeugen:

- `submit`
  - : Sendet die Formulardaten an den Server. Für {{HTMLElement("button")}}-Elemente führt das Weglassen des `type` Attributs (oder ein ungültiger Wert für `type`) zu einer Absenden-Schaltfläche.
- `reset`
  - : Setzt alle Formularelemente auf ihre Standardwerte zurück.
- `button`
  - : Schaltflächen, die keine automatische Wirkung haben, sondern mit JavaScript-Code angepasst werden können.

Dann gibt es auch das {{htmlelement("button")}} Element selbst. Dieses kann ein `type` Attribut mit dem Wert `submit`, `reset` oder `button` haben, um das Verhalten der drei oben genannten `<input>` Typen nachzuahmen. Der Hauptunterschied zwischen den beiden ist, dass tatsächliche `<button>` Elemente viel einfacher zu stylen sind.

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
> Der `image` Eingabetyp wird auch als Schaltfläche dargestellt. Wir werden das später ebenfalls behandeln.

> [!NOTE]
> Sie können die Beispiele aus diesem Abschnitt auf GitHub als [button-examples.html](https://github.com/mdn/learning-area/blob/main/html/forms/native-form-widgets/button-examples.html) ([sie können es auch live ansehen](https://mdn.github.io/learning-area/html/forms/native-form-widgets/button-examples.html)) ansehen.

Unten finden Sie Beispiele für jeden `<input>` Schaltflächentyp, zusammen mit dem äquivalenten `<button>` Typ.

### Submit

```html
<button type="submit">This is a <strong>submit button</strong></button>

<input type="submit" value="This is a submit button" />
```

### Reset

```html
<button type="reset">This is a <strong>reset button</strong></button>

<input type="reset" value="This is a reset button" />
```

### Anonymous

```html
<button type="button">This is an <strong>anonymous button</strong></button>

<input type="button" value="This is an anonymous button" />
```

Schaltflächen verhalten sich immer gleich, egal ob Sie ein {{HTMLElement("button")}} Element oder ein {{HTMLElement("input")}} Element verwenden. Wie Sie jedoch aus den Beispielen sehen können, ermöglichen {{HTMLElement("button")}} Elemente die Verwendung von HTML in ihrem Inhalt, der zwischen den öffnenden und schließenden `<button>` Tags eingefügt wird. {{HTMLElement("input")}} Elemente sind hingegen {{Glossary("void_element", "leere Elemente")}}; ihr angezeigter Inhalt wird im `value` Attribut eingefügt und akzeptiert daher nur Klartext als Inhalt.

Der folgende Screenshot zeigt eine Schaltfläche in den Zuständen Standard, Fokus und Deaktiviert. Im Fokussierungszustand gibt es einen Fokusring um die Schaltfläche, und im deaktivierten Zustand ist die Schaltfläche ausgegraut.

![Standard-, Fokus- und deaktivierte Schaltflächenzustände in chrome 115 auf macOS](buttons.png)

### Bildschaltfläche

Das **Bildschaltflächen**-Steuerelement wird genau wie ein {{HTMLElement("img")}} Element dargestellt, außer dass es, wenn der Benutzer darauf klickt, wie eine Absenden-Schaltfläche funktioniert.

Eine Bildschaltfläche wird mit einem {{HTMLElement("input")}} Element erstellt, dessen [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) Attribut auf den Wert `image` gesetzt ist. Dieses Element unterstützt genau dieselbe Reihe von Attributen wie das {{HTMLElement("img")}} Element, plus alle Attribute, die von anderen Formularschaltflächen unterstützt werden.

```html
<input type="image" alt="Click me!" src="my-img.png" width="80" height="30" />
```

Wenn die Bildschaltfläche verwendet wird, um das Formular zu übermitteln, sendet dieses Steuerelement nicht seinen Wert — stattdessen werden die X- und Y-Koordinaten des Klicks auf das Bild gesendet (die Koordinaten sind relativ zum Bild, was bedeutet, dass die linke obere Ecke des Bildes die Koordinate (0, 0) darstellt). Die Koordinaten werden als zwei Schlüssel/Wert-Paare gesendet:

- Der X-Wert-Schlüssel ist der Wert des [`name`](/de/docs/Web/HTML/Reference/Elements/input#name) Attributs gefolgt von dem String "_.x_".
- Der Y-Wert-Schlüssel ist der Wert des [`name`](/de/docs/Web/HTML/Reference/Elements/input#name) Attributs gefolgt von dem String "_.y_".

Wenn Sie also zum Beispiel an der Koordinate (123, 456) auf das Bild klicken und es über die `get` Methode eingereicht wird, sehen Sie die Werte an die URL angehängt wie folgt:

```url
http://foo.com?pos.x=123&pos.y=456
```

Dies ist eine sehr bequeme Möglichkeit, eine "Hot Map" zu erstellen. Wie diese Werte gesendet und abgerufen werden, wird im Artikel [Senden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) detailliert erläutert.

## Dateiauswahl

Es gibt einen letzten `<input>` Typ, der uns in HTML zu Beginn zur Verfügung gestellt wurde: den Datei-Eingabetyp. Formulare sind in der Lage, Dateien an einen Server zu senden (diese spezifische Aktion wird ebenfalls im Artikel [Senden von Formulardaten](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) detailliert beschrieben). Das Datei-Auswahl-Widget kann verwendet werden, um eine oder mehrere Dateien zum Senden auszuwählen.

Um ein [Datei-Auswahl-Widget](/de/docs/Web/HTML/Reference/Elements/input/file) zu erstellen, verwenden Sie das {{HTMLElement("input")}} Element mit seinem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type) Attribut auf `file` gesetzt. Die Arten von Dateien, die akzeptiert werden, können mithilfe des [`accept`](/de/docs/Web/HTML/Reference/Elements/input#accept) Attributs eingeschränkt werden. Zusätzlich, wenn Sie dem Benutzer erlauben möchten, mehr als eine Datei auszuwählen, können Sie dies tun, indem Sie das [`multiple`](/de/docs/Web/HTML/Reference/Elements/input#multiple) Attribut hinzufügen.

### Beispiel

In diesem Beispiel wird ein Datei-Auswahl-Widget erstellt, das grafische Bilddateien anfordert. Der Benutzer darf in diesem Fall mehrere Dateien auswählen.

```html
<input type="file" name="file" id="file" accept="image/*" multiple />
```

Auf einigen mobilen Geräten kann der Datei-Auswahl-Dialogfeld über die hinzugefügte Capture-Information zum `accept` Attribut auf die Fotos, Videos und Audio zugreifen, die direkt von der Kamera und dem Mikrofon des Geräts aufgenommen werden:

```html
<input type="file" accept="image/*;capture=camera" />
<input type="file" accept="video/*;capture=camcorder" />
<input type="file" accept="audio/*;capture=microphone" />
```

Das folgende Bild zeigt das Datei-Auswahl-Widget in den Zuständen Standard, Fokus und Deaktiviert, wenn keine Datei ausgewählt ist.

![Datei-Auswahl-Widget in den Zuständen Standard, Fokus und Deaktiviert in chrome 115 auf macOS](filepickers.png)

## Allgemeine Attribute

Viele der Elemente, die zur Definition von Formularelementen verwendet werden, haben einige ihrer eigenen spezifischen Attribute. Es gibt jedoch eine Reihe von Attributen, die allen Formularelementen gemeinsam sind. Einige dieser Attribute haben Sie bereits kennengelernt, aber im Folgenden finden Sie eine Liste dieser gemeinsamen Attribute als Referenz:

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
        Dieses boolesche Attribut ermöglicht es Ihnen, anzugeben, dass das Element beim Laden der Seite automatisch den Eingabefokus haben soll.
        Nur ein formularassoziiertes Element in einem Dokument kann dieses Attribut angegeben haben.
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
        Wenn dieses Attribut nicht angegeben ist, erbt das Element seine Einstellung vom umgebenden Element, beispielsweise {{HTMLElement("fieldset")}};
        wenn es kein umgebendes Element mit dem `disabled` Attribut gibt, dann ist das Element aktiviert.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/input#form">form</a></code>
      </td>
      <td></td>
      <td>
        Das <code>&#x3C;form></code> Element, mit dem das Widget verbunden ist, wird verwendet, wenn es nicht innerhalb dieses Formulars verschachtelt ist.
        Der Wert des Attributs muss der <code>id</code> Attribut eines {{HTMLElement("form")}} Elements im selben Dokument sein.
        Dadurch können Sie ein Formularelement mit einem Formular assoziieren, das außerhalb davon liegt, auch wenn es sich innerhalb eines anderen Formular-Elements befindet.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/input#name">name</a></code>
      </td>
      <td></td>
      <td>Der Name des Elements; dieser wird mit den Formulardaten übermittelt.</td>
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

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Grundlegende Steuerelemente](/de/docs/Learn_web_development/Extensions/Forms/Test_your_skills:_Basic_controls).

## Zusammenfassung

Dieser Artikel hat die älteren Eingabetypen behandelt — das ursprüngliche Set, das in den frühen Tagen von HTML eingeführt wurde und in allen Browsern gut unterstützt wird. Im nächsten Abschnitt werden wir einen Blick auf die moderneren Werte des `type` Attributs werfen.

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/How_to_structure_a_web_form", "Learn_web_development/Extensions/Forms/HTML5_input_types", "Learn_web_development/Extensions/Forms")}}
