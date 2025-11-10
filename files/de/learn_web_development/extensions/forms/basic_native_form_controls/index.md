---
title: Grundlegende native Formularelemente
slug: Learn_web_development/Extensions/Forms/Basic_native_form_controls
l10n:
  sourceCommit: 5f677b960051016819ecb3b1f40bc3d36a43156d
---

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/How_to_structure_a_web_form", "Learn_web_development/Extensions/Forms/HTML5_input_types", "Learn_web_development/Extensions/Forms")}}

Im [vorangegangenen Artikel](/de/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form) haben wir ein funktionales Webformular mit einigen Formularelementen und gängigen Strukturelementen markiert und uns auf bewährte Zugänglichkeitspraktiken konzentriert. Als Nächstes werden wir die Funktionalität der verschiedenen Formularelemente, oder Widgets, im Detail betrachten – und alle verfügbaren Optionen untersuchen, um verschiedene Arten von Daten zu sammeln. In diesem speziellen Artikel werden wir das ursprüngliche Set von Formularelementen betrachten, die seit den Anfängen des Webs in allen Browsern verfügbar sind.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegendes
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">
          Verständnis von HTML</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Das ursprüngliche Set von nativen Form-Widgets, die in Browsern zur Datenerfassung verfügbar sind, im Detail zu verstehen und zu lernen, wie man sie mit HTML implementiert.
      </td>
    </tr>
  </tbody>
</table>

Sie haben bereits einige Formularelemente kennengelernt, darunter {{HTMLelement('form')}}, {{HTMLelement('fieldset')}}, {{HTMLelement('legend')}}, {{HTMLelement('textarea')}}, {{HTMLelement('label')}}, {{HTMLelement('button')}}, und {{HTMLelement('input')}}. Dieser Artikel umfasst:

- Die gebräuchlichen Eingabetypen {{HTMLelement('input/button', 'button')}}, {{HTMLelement('input/checkbox', 'checkbox')}}, {{HTMLelement('input/file', 'file')}}, {{HTMLelement('input/hidden', 'hidden')}}, {{HTMLelement('input/image', 'image')}}, {{HTMLelement('input/password', 'password')}}, {{HTMLelement('input/radio', 'radio')}}, {{HTMLelement('input/reset', 'reset')}}, {{HTMLelement('input/submit', 'submit')}}, und {{HTMLelement('input/text', 'text')}}.
- Einige der Attribute, die allen Formularelementen gemeinsam sind.

> [!NOTE]
> Wir behandeln zusätzliche, leistungsstärkere Formularelemente in den nächsten beiden Artikeln. Wenn Sie eine fortgeschrittenere Referenz wünschen, sollten Sie unsere [HTML-Formularelement-Referenz](/de/docs/Web/HTML/Reference/Elements#forms) und insbesondere unsere umfangreiche [`<input>`-Typen](/de/docs/Web/HTML/Reference/Elements/input) Referenz konsultieren.

## Texteingabefelder

Text-{{htmlelement("input")}}-Felder sind die grundlegendsten Formular-Widgets. Sie sind eine sehr bequeme Möglichkeit, Benutzern das Eingeben jeglicher Art von Daten zu ermöglichen, und wir haben bereits einige einfache Beispiele gesehen.

> [!NOTE]
> HTML-Formular-Textfelder sind einfache Eingabesteuerelemente für Klartext. Das bedeutet, dass Sie sie nicht für die Bearbeitung von formatiertem Text (fett, kursiv usw.) verwenden können. Alle Rich-Text-Editoren, die Sie finden, sind benutzerdefinierte Widgets, die mit HTML, CSS und JavaScript erstellt wurden.

Alle grundlegenden Textsteuerungen haben einige gemeinsame Verhaltensweisen:

- Sie können als [`readonly`](/de/docs/Web/HTML/Reference/Elements/input#readonly) markiert werden (der Benutzer kann den Eingabewert nicht ändern, aber er wird dennoch mit den restlichen Formulardaten gesendet) oder [`disabled`](/de/docs/Web/HTML/Reference/Elements/input#disabled) (der Eingabewert kann nicht geändert werden und wird niemals mit den restlichen Formulardaten gesendet).
- Sie können einen [`placeholder`](/de/docs/Web/HTML/Reference/Elements/input#placeholder) haben; dies ist der Text, der in der Texteingabebox erscheint und kurz den Zweck der Box beschreiben sollte.
- Sie können in der [`size`](/de/docs/Web/HTML/Reference/Attributes/size) (die physische Größe der Box) und [`maxlength`](/de/docs/Web/HTML/Reference/Attributes/maxlength) (die maximale Anzahl von Zeichen, die in die Box eingegeben werden können) eingeschränkt werden.
- Sie können von der Rechtschreibprüfung profitieren (mit dem [`spellcheck`](/de/docs/Web/HTML/Reference/Global_attributes/spellcheck)-Attribut).

> [!NOTE]
> Das {{htmlelement("input")}}-Element ist einzigartig unter den HTML-Elementen, da es je nach Wert seines [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attributs viele Formen annehmen kann. Es wird für die Erstellung der meisten Arten von Formular-Widgets verwendet, darunter Einzelzeileneingabefelder, Zeit- und Datumssteuerungen, Steuerelemente ohne Texteingabe wie Kontrollkästchen, Optionsfelder und Farbwähler sowie Schaltflächen.

### Einzelzeilige Textfelder

Ein einzelzeiliges Textfeld wird mit einem {{HTMLElement("input")}}-Element erstellt, dessen [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attributwert auf `text` gesetzt ist, oder indem das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut ganz weggelassen wird (`text` ist der Standardwert). Der Wert `text` für dieses Attribut ist auch der Fallback-Wert, wenn der von Ihnen für das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut angegebene Wert vom Browser nicht erkannt wird (zum Beispiel, wenn Sie `type="color"` angeben und der Browser keine nativen Farbwähler unterstützt).

> [!NOTE]
> Sie können Beispiele für alle Einzelzeilentextfeldtypen auf GitHub unter [single-line-text-fields.html](https://github.com/mdn/learning-area/blob/main/html/forms/native-form-widgets/single-line-text-fields.html) finden ([siehe es auch live](https://mdn.github.io/learning-area/html/forms/native-form-widgets/single-line-text-fields.html)).

Hier ist ein einfaches Beispiel für ein einzelzeiliges Textfeld:

```html
<input type="text" id="comment" name="comment" value="I'm a text field" />
```

Einzelzeilige Textfelder haben nur eine echte Einschränkung: Wenn Sie Text mit Zeilenumbrüchen eingeben, entfernt der Browser diese Zeilenumbrüche, bevor die Daten an den Server gesendet werden.

Der Screenshot unten zeigt eine Texteingabe im Standard-, fokussierten und deaktivierten Zustand. Die meisten Browser zeigen den fokussierten Zustand mit einem Fokusrahmen um die Kontrolle herum und den deaktivierten Zustand durch grauen Text oder ein ausgegrautes/halbtransparentes Steuerelement an.

![Screenshot der Texteingabe in Standard-, fokussierten und deaktivierten Zuständen in Chrome auf macOS](disabled.png)

Die in diesem Dokument verwendeten Screenshots wurden im Chrome-Browser auf macOS aufgenommen. Es kann zu geringfügigen Unterschieden in diesen Feldern/Schaltflächen zwischen verschiedenen Browsern kommen, aber die grundlegende Hervorhebungstechnik bleibt ähnlich.

> [!NOTE]
> In den nächsten Artikeln diskutieren wir Werte für das [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut, die spezifische Validierungsbeschränkungen durchsetzen, einschließlich Farbe, E-Mail und URL-Eingabetypen, in dem Artikel [Die HTML5-Eingabetypen](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types).

#### Passwortfeld

Einer der ursprünglichen Eingabetypen war der `password`-Textfeldtyp:

```html
<input type="password" id="pwd" name="pwd" />
```

Der folgende Screenshot zeigt ein Passwort-Eingabefeld, in dem jedes Eingabezeichen als Punkt dargestellt wird.

![Passwortfeld in Chrome 115 auf macOS](password.png)

Der `password`-Wert fügt den eingegebenen Texten keine besonderen Einschränkungen hinzu, sondern maskiert den in das Feld eingegebenen Wert (z. B. mit Punkten oder Sternchen), damit er nicht leicht von anderen gelesen werden kann.

Beachten Sie, dass dies lediglich eine Benutzeroberflächenfunktion ist; sofern Sie Ihr Formular nicht sicher übermitteln, wird es im Klartext gesendet, was für die Sicherheit schlecht ist — eine böswillige Partei könnte Ihre Daten abfangen und Passwörter, Kreditkartendaten oder andere Informationen stehlen, die Sie übermittelt haben. Der beste Weg, Benutzer davor zu schützen, ist, alle Seiten mit Formularen über eine sichere Verbindung zu hosten (d.h. sie befinden sich unter einer `https://`-Adresse), sodass die Daten vor dem Senden verschlüsselt werden.

Browser erkennen die Sicherheitsimplikationen beim Senden von Formulardaten über eine unsichere Verbindung und haben Warnungen, um Benutzer davon abzuhalten, unsichere Formulare zu verwenden. Weitere Informationen zu den Implementierungen von Firefox finden Sie unter [Insecure passwords](/de/docs/Web/Security/Insecure_passwords).

### Verborgener Inhalt

Ein weiteres ursprüngliches Textelement ist der `hidden`-Eingabetyp. Dies wird verwendet, um ein Formularelement zu erstellen, das für den Benutzer unsichtbar ist, aber dennoch zusammen mit den anderen Formulardaten an den Server gesendet wird. Zum Beispiel könnten Sie einen Zeitstempel an den Server senden wollen, der angibt, wann eine Bestellung aufgegeben wurde. Da es versteckt ist, kann der Benutzer den Wert weder sehen noch absichtlich bearbeiten, es erhält niemals den Fokus, und ein Bildschirmleseprogramm wird es auch nicht bemerken.

```html
<input type="hidden" id="timestamp" name="timestamp" value="1286705410" />
```

Wenn Sie ein solches Element erstellen, ist es erforderlich, seine `name`- und `value`-Attribute festzulegen. Der Wert kann dynamisch über JavaScript festgelegt werden. Der `hidden`-Eingabetyp sollte kein zugehöriges Label haben.

Andere Texteingabetypen wie {{HTMLElement("input/search", "search")}}, {{HTMLElement("input/url", "url")}}, und {{HTMLElement("input/tel", "tel")}}, werden in der nächsten Anleitung [HTML5-Eingabetypen](/de/docs/Learn_web_development/Extensions/Forms/HTML5_input_types) behandelt.

## Auswählbare Elemente: Kontrollkästchen und Optionsfelder

Auswählbare Elemente sind Steuerelemente, deren Zustand Sie durch Klicken auf sie oder ihre zugehörigen Labels ändern können. Es gibt zwei Arten von auswählbaren Elementen: das Kontrollkästchen und das Optionsfeld. Beide verwenden das Attribut [`checked`](/de/docs/Web/HTML/Reference/Elements/input/checkbox#checked), um anzuzeigen, ob das Widget standardmäßig aktiviert ist oder nicht.

Es ist erwähnenswert, dass diese Widgets nicht genau wie andere Formularelemente funktionieren. Bei den meisten Formularelementen werden nach dem Absenden des Formulars alle Widgets mit einem [`name`](/de/docs/Web/HTML/Reference/Elements/input#name)-Attribut gesendet, auch wenn kein Wert ausgefüllt wurde. Im Fall von auswählbaren Elementen werden ihre Werte nur dann gesendet, wenn sie aktiviert sind. Wenn sie nicht aktiviert sind, wird nichts gesendet, nicht einmal ihr Name. Wenn sie aktiviert sind, aber keinen Wert haben, wird der Name mit einem Wert von _on_ gesendet.

> [!NOTE]
> Sie können die Beispiele aus diesem Abschnitt auf GitHub als [checkable-items.html](https://github.com/mdn/learning-area/blob/main/html/forms/native-form-widgets/checkable-items.html) finden ([siehe es auch live](https://mdn.github.io/learning-area/html/forms/native-form-widgets/checkable-items.html)).

Für maximale Benutzerfreundlichkeit und Zugänglichkeit wird empfohlen, jede Liste verwandter Elemente in einem {{htmlelement("fieldset")}} zu umgeben, mit einem {{htmlelement("legend")}}, das eine allgemeine Beschreibung der Liste bietet. Jedes Paar von {{htmlelement("label")}}/{{htmlelement("input")}}-Elementen sollte in einem eigenen Listenelement (oder ähnlichem) enthalten sein. Das zugehörige {{htmlelement('label')}} befindet sich in der Regel unmittelbar vor oder hinter dem Optionsfeld oder Kontrollkästchen, wobei die Anweisungen für die Gruppe von Radio- oder Kontrollkästchen in der Regel der Inhalt des {{htmlelement("legend")}} sind. Siehe die oben verlinkten Beispiele für strukturelle Beispiele.

### Kontrollkästchen

Ein Kontrollkästchen wird mit dem {{HTMLElement("input")}}-Element erstellt, dessen [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut auf den Wert {{HTMLElement("input/checkbox", "checkbox")}} gesetzt ist.

```html
<input type="checkbox" id="questionOne" name="subscribe" value="yes" checked />
```

Verwandte Kontrollkästchenelemente sollten dasselbe [`name`](/de/docs/Web/HTML/Reference/Elements/input#name)-Attribut verwenden. Die Einfügung des [`checked`](/de/docs/Web/HTML/Reference/Elements/input/checkbox#checked)-Attributs sorgt dafür, dass das Kontrollkästchen beim Laden der Seite automatisch aktiviert ist. Durch Klicken auf das Kontrollkästchen oder sein zugehöriges Label wird das Kontrollkästchen ein- und ausgeschaltet.

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

Der folgende Screenshot zeigt Kontrollkästchen im Standard-, fokussierten und deaktivierten Zustand. Kontrollkästchen im Standard- und deaktivierten Zustand erscheinen aktiviert, während im fokussierten Zustand das Kontrollkästchen deaktiviert ist und ein Fokusrahmen darum herum ist.

![Standard-, fokussierte und deaktivierte Kontrollkästchen in Chrome 115 auf macOS](checkboxes.png)

> [!NOTE]
> Alle Kontrollkästchen und Optionsfelder, die bei geladenem [`checked`](/de/docs/Web/HTML/Reference/Elements/input/checkbox#checked)-Attribut vorhanden sind, entsprechen der {{cssxref(':default')}}-Pseudo-Klasse, auch wenn sie nicht mehr aktiviert sind. Alle derzeit aktivierten entsprechen der {{cssxref(':checked')}}-Pseudo-Klasse.

Aufgrund der Ein-/Aus-Natur von Kontrollkästchen wird das Kontrollkästchen als Umschaltschalter betrachtet, wobei viele Entwickler und Designer die Standard-Kontrollkästchen-Styling erweitern, um Schaltflächen zu erstellen, die wie Kippschalter aussehen. Sie können [hier ein Beispiel in Aktion sehen](https://mdn.github.io/learning-area/html/forms/toggle-switch-example/) (auch den [Quellcode ansehen](https://github.com/mdn/learning-area/blob/main/html/forms/toggle-switch-example/index.html)).

### Optionsfeld

Ein Optionsfeld wird mittels des {{HTMLElement("input")}}-Elements erstellt, dessen [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut auf den Wert `radio` gesetzt ist:

```html
<input type="radio" id="soup" name="meal" value="soup" checked />
```

Mehrere Optionsfelder können miteinander verbunden werden. Wenn sie denselben Wert für ihr [`name`](/de/docs/Web/HTML/Reference/Elements/input#name)-Attribut haben, werden sie als in derselben Gruppe von Schaltflächen angesehen. Nur eine Schaltfläche in einer bestimmten Gruppe kann gleichzeitig aktiviert werden; das bedeutet, dass wenn eine von ihnen aktiviert wird, alle anderen automatisch deaktiviert werden. Beim Absenden des Formulars wird nur der Wert des aktivierten Optionsfelds gesendet. Wenn keines von ihnen aktiviert ist, wird der gesamte Pool von Optionsfeldern als in einem unbekannten Zustand betrachtet und es wird kein Wert mit dem Formular gesendet. Sobald eines der Optionsfelder in einer gleichnamigen Gruppe von Schaltflächen aktiviert ist, ist es für den Benutzer nicht möglich, alle Schaltflächen zu deaktivieren, ohne das Formular zurückzusetzen.

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

Der folgende Screenshot zeigt Standard- und deaktivierte Optionsfelder im aktivierten Zustand sowie ein fokussiertes Optionsfeld im deaktivierten Zustand.

![Standard-, fokussierte und deaktivierte Optionsfelder in Chrome 115 auf macOS](radios.png)

## Tatsächliche Schaltflächen

Das Optionsfeld ist trotz seines Namens keine tatsächliche Schaltfläche; werfen wir einen Blick auf tatsächliche Schaltflächen! Es gibt drei Eingabetypen, die Schaltflächen erzeugen:

- `submit`
  - : Sendet die Formulardaten an den Server. Für {{HTMLElement("button")}}-Elemente führt das Weglassen des `type`-Attributs (oder ein ungültiger `type`-Wert) zu einer Submit-Schaltfläche.
- `reset`
  - : Setzt alle Formular-Widgets auf ihre Standardwerte zurück.
- `button`
  - : Schaltflächen, die keine automatische Wirkung haben, aber mit JavaScript-Code angepasst werden können.

Dann gibt es noch das {{htmlelement("button")}}-Element selbst. Dieses kann ein `type`-Attribut mit den Werten `submit`, `reset` oder `button` haben, um das Verhalten der drei oben genannten `<input>`-Typen nachzuahmen. Der Hauptunterschied zwischen den beiden ist, dass tatsächliche `<button>`-Elemente viel einfacher zu stylen sind.

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
> Der `image`-Eingabetyp wird auch als Schaltfläche gerendert. Wir werden darauf später ebenfalls eingehen.

> [!NOTE]
> Sie können die Beispiele aus diesem Abschnitt auf GitHub als [button-examples.html](https://github.com/mdn/learning-area/blob/main/html/forms/native-form-widgets/button-examples.html) finden ([siehe es auch live](https://mdn.github.io/learning-area/html/forms/native-form-widgets/button-examples.html)).

Unten finden Sie Beispiele für jeden `<input>`-Button-Typ sowie den äquivalenten `<button>`-Typ.

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

Schaltflächen verhalten sich immer gleich, ob Sie ein {{HTMLElement("button")}}-Element oder ein {{HTMLElement("input")}}-Element verwenden. Wie Sie anhand der Beispiele sehen können, ermöglichen {{HTMLElement("button")}}-Elemente jedoch die Verwendung von HTML in ihrem Inhalt, der zwischen den öffnenden und schließenden `<button>`-Tags eingefügt wird. {{HTMLElement("input")}}-Elemente hingegen sind {{Glossary("void_element", "leere Elemente")}}; ihr angezeigter Inhalt wird in das `value`-Attribut eingefügt und akzeptiert daher nur Klartext als Inhalt.

Der folgende Screenshot zeigt eine Schaltfläche im Standard-, fokussierten und deaktivierten Zustand. Im fokussierten Zustand gibt es einen Fokusrahmen um die Schaltfläche, und im deaktivierten Zustand ist die Schaltfläche ausgegraut.

![Standard-, Fokussierungs- und Deaktivierungszustände einer Schaltfläche in Chrome 115 auf macOS](buttons.png)

### Bildschaltfläche

Das Steuerelement **Bildschaltfläche** wird genau wie ein {{HTMLElement("img")}}-Element gerendert, außer dass, wenn der Benutzer darauf klickt, es sich wie eine Senden-Schaltfläche verhält.

Eine Bildschaltfläche wird mit einem {{HTMLElement("input")}}-Element erstellt, dessen [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut auf den Wert `image` gesetzt ist. Dieses Element unterstützt genau denselben Satz von Attributen wie das {{HTMLElement("img")}}-Element, plus alle Attribute, die von anderen Formularschaltflächen unterstützt werden.

```html
<input type="image" alt="Click me!" src="my-img.png" width="80" height="30" />
```

Wenn die Bildschaltfläche verwendet wird, um das Formular zu senden, übermittelt dieses Steuerelement nicht seinen Wert — stattdessen werden die X- und Y-Koordinaten des Klicks auf das Bild gesendet (die Koordinaten sind relativ zum Bild, was bedeutet, dass die obere linke Ecke des Bildes die Koordinate (0, 0) darstellt). Die Koordinaten werden als zwei Schlüssel/Wert-Paare gesendet:

- Der X-Wert-Schlüssel ist der Wert des [`name`](/de/docs/Web/HTML/Reference/Elements/input#name)-Attributs gefolgt von dem String "_.x_".
- Der Y-Wert-Schlüssel ist der Wert des [`name`](/de/docs/Web/HTML/Reference/Elements/input#name)-Attributs gefolgt von dem String "_.y_".

Wenn Sie also zum Beispiel auf das Bild an der Koordinate (123, 456) klicken und es über die `get`-Methode senden, werden die Werte der URL wie folgt hinzugefügt:

```url
http://foo.com?pos.x=123&pos.y=456
```

Dies ist eine sehr bequeme Möglichkeit, eine "Hot Map" zu erstellen. Wie diese Werte gesendet und abgerufen werden, wird im Artikel [Formulardaten senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) detailliert beschrieben.

## Dateiauswahl

Es gibt einen letzten `<input>`-Typ, der in frühen HTML-Versionen kam: den Dateieingabe-Typ. Formulare sind in der Lage, Dateien an einen Server zu senden (diese spezielle Aktion wird ebenfalls im Artikel [Formulardaten senden](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data) detailliert beschrieben). Das Dateiauswahl-Widget kann verwendet werden, um eine oder mehrere Dateien zum Senden auszuwählen.

Um ein [Dateiauswahl-Widget](/de/docs/Web/HTML/Reference/Elements/input/file) zu erstellen, verwenden Sie das {{HTMLElement("input")}}-Element mit seinem [`type`](/de/docs/Web/HTML/Reference/Elements/input#type)-Attribut, das auf `file` gesetzt ist. Die Arten von Dateien, die akzeptiert werden, können mit dem [`accept`](/de/docs/Web/HTML/Reference/Elements/input#accept)-Attribut eingeschränkt werden. Darüber hinaus, wenn Sie dem Benutzer erlauben möchten, mehr als eine Datei auszuwählen, können Sie dies tun, indem Sie das [`multiple`](/de/docs/Web/HTML/Reference/Elements/input#multiple)-Attribut hinzufügen.

### Beispiel

In diesem Beispiel wird ein Dateiauswahl-Widget erstellt, das nach Grafikbilddateien fragt. In diesem Fall darf der Benutzer mehrere Dateien auswählen.

```html
<input type="file" name="file" id="file" accept="image/*" multiple />
```

Auf einigen mobilen Geräten kann der Dateiauswahl-Widget auf Fotos, Videos und Audiomaterial zugreifen, das direkt von der Kamera und dem Mikrofon des Geräts erfasst wird, indem Umschlagsinformationen zum `accept`-Attribut wie folgt hinzugefügt werden:

```html
<input type="file" accept="image/*;capture=camera" />
<input type="file" accept="video/*;capture=camcorder" />
<input type="file" accept="audio/*;capture=microphone" />
```

Der folgende Screenshot zeigt das Dateiauswahl-Widget im Standard-, Fokus- und deaktivierten Zustand, wenn keine Datei ausgewählt ist.

![Dateiauswahl-Widget in Standard-, Fokus- und deaktivierten Zuständen in Chrome 115 auf macOS](filepickers.png)

## Gemeinsame Attribute

Viele der Elemente, die zur Definition von Formularelementen verwendet werden, haben einige ihrer eigenen spezifischen Attribute. Es gibt jedoch eine Reihe von Attributen, die allen Formelementen gemeinsam sind. Einige davon haben Sie bereits kennengelernt, aber unten finden Sie eine Liste dieser gemeinsamen Attribute zu Ihrer Referenz:

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
        Mit diesem booleschen Attribut können Sie angeben, dass das Element beim Laden der Seite automatisch den Eingabefokus erhält.
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
        Wenn dieses Attribut nicht angegeben ist, erbt das Element seine Einstellung vom umgebenden Element, zum Beispiel {{HTMLElement("fieldset")}};
        wenn es kein umgebenes Element mit gesetztem <code>disabled</code>-Attribut gibt, dann ist das Element aktiviert.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/input#form">form</a></code>
      </td>
      <td></td>
      <td>
        Das <code>&#x3C;form></code>-Element, mit dem das Widget verknüpft ist, wird verwendet, wenn es nicht in diesem Formular verschachtelt ist.
        Der Wert des Attributs muss das <code>id</code>-Attribut eines {{HTMLElement("form")}}-Elements im selben Dokument sein.
        Dies ermöglicht es Ihnen, ein Formularelement mit einem Formular zu verknüpfen, außerhalb von welchem ​​es sich befindet, selbst wenn es sich in einem anderen Formularelement befindet.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Reference/Elements/input#name">name</a></code>
      </td>
      <td></td>
      <td>Der Name des Elements; dies wird zusammen mit den Formulardaten gesendet.</td>
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

Dieser Artikel hat die älteren Eingabetypen behandelt — das ursprüngliche Set, das in den frühen Tagen von HTML eingeführt wurde und in allen Browsern gut unterstützt wird. Im nächsten Abschnitt werden wir die moderneren Werte des `type`-Attributs betrachten.

{{PreviousMenuNext("Learn_web_development/Extensions/Forms/How_to_structure_a_web_form", "Learn_web_development/Extensions/Forms/HTML5_input_types", "Learn_web_development/Extensions/Forms")}}
