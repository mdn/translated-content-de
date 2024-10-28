---
title: Basis-Native Formularelemente
slug: Learn/Forms/Basic_native_form_controls
l10n:
  sourceCommit: baac7f2a43813a7930ff97b11d9c38b413f97c78
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Forms/How_to_structure_a_web_form", "Learn/Forms/HTML5_input_types", "Learn/Forms")}}

Im [vorherigen Artikel](/de/docs/Learn/Forms/How_to_structure_a_web_form) haben wir ein funktionales Webformular-Beispiel mit Markup versehen, das einige Formularelemente und gemeinsame strukturelle Elemente einführt und den Fokus auf Best Practices zur Barrierefreiheit legt. Als Nächstes betrachten wir die Funktionalität der verschiedenen Formularelemente im Detail - wir studieren alle verschiedenen Optionen, die zur Verfügung stehen, um verschiedene Arten von Daten zu sammeln. In diesem speziellen Artikel betrachten wir das ursprüngliche Set von Formularelementen, das seit den frühen Tagen des Webs in allen Browsern verfügbar ist.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Verständnis von HTML</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Das ursprüngliche Set von nativen Formular-Widgets, die in Browsern zur Datenerfassung verfügbar sind, im Detail zu verstehen und zu lernen, wie man sie mit HTML implementiert.
      </td>
    </tr>
  </tbody>
</table>

Sie haben bereits einige Formularelemente kennengelernt, darunter {{HTMLelement('form')}}, {{HTMLelement('fieldset')}}, {{HTMLelement('legend')}}, {{HTMLelement('textarea')}}, {{HTMLelement('label')}}, {{HTMLelement('button')}} und {{HTMLelement('input')}}. Dieser Artikel behandelt:

- Die allgemeinen Eingabetypen {{HTMLelement('input/button', 'button')}}, {{HTMLelement('input/checkbox', 'checkbox')}}, {{HTMLelement('input/file', 'file')}}, {{HTMLelement('input/hidden', 'hidden')}}, {{HTMLelement('input/image', 'image')}}, {{HTMLelement('input/password', 'password')}}, {{HTMLelement('input/radio', 'radio')}}, {{HTMLelement('input/reset', 'reset')}}, {{HTMLelement('input/submit', 'submit')}} und {{HTMLelement('input/text', 'text')}}.
- Einige der Attribute, die allen Formularelementen gemeinsam sind.

> [!NOTE]
> Wir behandeln zusätzliche, leistungsstärkere Formularelemente in den nächsten beiden Artikeln. Wenn Sie eine fortgeschrittenere Referenz suchen, sollten Sie unsere [HTML Formular-Elementreferenz](/de/docs/Web/HTML/Element#forms) konsultieren, insbesondere unsere umfangreiche [`<input>` Typenreferenz](/de/docs/Web/HTML/Element/input).

## Text-Eingabefelder

Text-{{htmlelement("input")}}-Felder sind die grundlegendsten Formular-Widgets. Sie sind eine sehr bequeme Möglichkeit, dem Benutzer die Eingabe beliebiger Daten zu ermöglichen, und wir haben bereits einige einfache Beispiele gesehen.

> [!NOTE]
> HTML-Formular-Textfelder sind einfache, nur-Text-Eingabesteuerungen. Das bedeutet, dass Sie damit keine Rich-Text-Bearbeitung (fett, kursiv, etc.) durchführen können. Alle Rich-Text-Editoren, die Sie antreffen werden, sind benutzerdefinierte Widgets, die mit HTML, CSS und JavaScript erstellt wurden.

Alle grundlegenden Textsteuerungen teilen einige gemeinsame Verhaltensweisen:

- Sie können als [`readonly`](/de/docs/Web/HTML/Element/input#readonly) markiert werden (der Benutzer kann den Eingabewert nicht ändern, aber er wird dennoch mit den restlichen Formulardaten gesendet) oder als [`disabled`](/de/docs/Web/HTML/Element/input#disabled) (der Eingabewert kann nicht geändert werden und wird nie mit den restlichen Formulardaten gesendet).
- Sie können einen [`placeholder`](/de/docs/Web/HTML/Element/input#placeholder) haben; dies ist der Text, der innerhalb des Text-Eingabefeldes erscheint und verwendet werden sollte, um den Zweck des Feldes kurz zu beschreiben.
- Sie können in ihrer [`size`](/de/docs/Web/HTML/Attributes/size) (der physikalischen Größe des Feldes) und der [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength) (die maximale Anzahl von Zeichen, die in das Feld eingegeben werden können) eingeschränkt werden.
- Sie können von der Rechtschreibprüfung (mittels des [`spellcheck`](/de/docs/Web/HTML/Global_attributes/spellcheck)-Attributs) profitieren.

> [!NOTE]
> Das {{htmlelement("input")}}-Element ist einzigartig unter den HTML-Elementen, weil es je nach Wert seines [`type`](/de/docs/Web/HTML/Element/input#type)-Attributs viele Formen annehmen kann. Es wird verwendet, um die meisten Arten von Formular-Widgets zu erstellen, einschließlich einzeiliger Textfelder, Zeit- und Datumssteuerungen, Steuerungen ohne Texteingabe wie Kontrollkästchen, Optionsfelder und Farbauswahlen sowie Schaltflächen.

### Einzeilige Textfelder

Ein einzeiliges Textfeld wird mit einem {{HTMLElement("input")}}-Element erstellt, dessen [`type`](/de/docs/Web/HTML/Element/input#type)-Attributswert auf `text` gesetzt ist, oder indem das [`type`](/de/docs/Web/HTML/Element/input#type)-Attribut ganz weggelassen wird (`text` ist der Standardwert). Der Wert `text` für dieses Attribut ist auch der Rückfallwert, wenn der von Ihnen angegebene Wert für das [`type`](/de/docs/Web/HTML/Element/input#type)-Attribut dem Browser unbekannt ist (zum Beispiel, wenn Sie `type="color"` angeben und der Browser keine nativen Color-Picker unterstützt).

> [!NOTE]
> Sie können Beispiele aller einzeiligen Textfeldtypen auf GitHub unter [single-line-text-fields.html](https://github.com/mdn/learning-area/blob/main/html/forms/native-form-widgets/single-line-text-fields.html) (auch [Live-Demo ansehen](https://mdn.github.io/learning-area/html/forms/native-form-widgets/single-line-text-fields.html)) finden.

Hier ist ein einfaches Beispiel für ein einzeiliges Textfeld:

```html
<input type="text" id="comment" name="comment" value="I'm a text field" />
```

Einzeilige Textfelder haben nur eine wahre Einschränkung: Wenn Sie Text mit Zeilenumbrüchen eingeben, entfernen diese Felder die Zeilenumbrüche, bevor die Daten an den Server gesendet werden.

Der Screenshot unten zeigt ein Texteingabefeld in den Standard-, Fokussierungs- und Deaktivierungszuständen. Die meisten Browser zeigen den Fokussierungszustand durch einen Fokusring um die Steuerung und den Deaktivierungszustand mit grauem Text oder einer verblassten/semi-opaken Steuerung an.

![Screenshot der Standard-, Fokus- und Deaktivierungszustände eines Texteingabefelds in Chrome auf macOS](disabled.png)

Die in diesem Dokument verwendeten Screenshots wurden im Chrome-Browser auf macOS aufgenommen. Es kann geringfügige Variationen in diesen Feldern/Schaltflächen über verschiedene Browser hinweg geben, aber die grundlegende Hervorhebungstechnik bleibt ähnlich.

> [!NOTE]
> Wir besprechen Werte für das [`type`](/de/docs/Web/HTML/Element/input#type)-Attribut, die spezifische Validierungsbeschränkungen erzwingen, einschließlich Farbe, E-Mail und URL-Eingabetypen, im nächsten Artikel, [Die HTML5-Eingabetypen](/de/docs/Learn/Forms/HTML5_input_types).

#### Passwortfeld

Einer der ursprünglichen Eingabetypen war der `password`-Textfeldtyp:

```html
<input type="password" id="pwd" name="pwd" />
```

Der folgende Screenshot zeigt ein Passwort-Eingabefeld, in dem jedes eingegebene Zeichen als Punkt angezeigt wird.

![Passwortfeld in Chrome 115 auf macOS](password.png)

Der `password`-Wert fügt den eingegebenen Texten keine besonderen Beschränkungen hinzu, sondern verbirgt den in das Feld eingegebenen Wert (z. B. mit Punkten oder Sternchen), sodass er nicht leicht von anderen gelesen werden kann.

Beachten Sie, dass dies nur eine Benutzeroberflächenfunktion ist; sofern Sie Ihr Formular nicht sicher übermitteln, wird es im Klartext gesendet, was für die Sicherheit schlecht ist — eine böswillige Partei könnte Ihre Daten abfangen und Passwörter, Kreditkartendetails oder was auch immer Sie übermittelt haben, stehlen. Der beste Weg, Benutzer davor zu schützen, besteht darin, beliebige Seiten, die Formulare enthalten, über eine sichere Verbindung bereitzustellen (d. h. unter einer `https://`-Adresse), sodass die Daten verschlüsselt werden, bevor sie gesendet werden.

Browser erkennen die Sicherheitsbedenken beim Senden von Formulardaten über eine unsichere Verbindung an und haben Warnungen, um Benutzer davon abzuhalten, unsichere Formulare zu verwenden. Weitere Informationen zu dem, was Firefox implementiert, finden Sie unter [Unsichere Passwörter](/de/docs/Web/Security/Insecure_passwords).

### Versteckte Inhalte

Ein weiteres ursprüngliches Textelement ist der `hidden`-Eingabetyp. Dieser wird verwendet, um eine Formularkontrolle zu erstellen, die für den Benutzer unsichtbar ist, aber dennoch zusammen mit den restlichen Formulardaten an den Server gesendet wird, sobald das Formular abgeschickt wird - zum Beispiel möchten Sie vielleicht einen Zeitstempel an den Server senden, der angibt, wann eine Bestellung aufgegeben wurde. Da es verborgen ist, kann der Benutzer den Wert nicht sehen oder absichtlich ändern, es wird niemals den Fokus erhalten und ein Screenreader wird es auch nicht bemerken.

```html
<input type="hidden" id="timestamp" name="timestamp" value="1286705410" />
```

Wenn Sie ein solches Element erstellen, ist es erforderlich, seine `name`- und `value`-Attribute festzulegen. Der Wert kann dynamisch über JavaScript gesetzt werden. Der `hidden`-Eingabetyp sollte kein zugehöriges Label haben.

Andere Text-Eingabetypen wie {{HTMLElement("input/search", "search")}}, {{HTMLElement("input/url", "url")}} und {{HTMLElement("input/tel", "tel")}} werden im nächsten Tutorial behandelt, [HTML5-Eingabetypen](/de/docs/Learn/Forms/HTML5_input_types).

## Ankreuzbare Elemente: Kontrollkästchen und Optionsfelder

Ankreuzbare Elemente sind Steuerelemente, deren Zustand Sie ändern können, indem Sie auf sie oder ihre zugehörigen Labels klicken. Es gibt zwei Arten von ankreuzbaren Elementen: das Kontrollkästchen und das Optionsfeld. Beide verwenden das [`checked`](/de/docs/Web/HTML/Element/input/checkbox#checked)-Attribut, um anzuzeigen, ob das Widget standardmäßig ausgewählt ist oder nicht.

Es ist erwähnenswert, dass sich diese Widgets nicht genau wie andere Formularelemente verhalten. Bei den meisten Formularelementen werden alle Widgets, die ein [`name`](/de/docs/Web/HTML/Element/input#name)-Attribut haben, gesendet, nachdem das Formular abgeschickt wurde, selbst wenn kein Wert ausgefüllt wurde. Bei den ankreuzbaren Elementen werden deren Werte nur gesendet, wenn sie angekreuzt sind. Wenn sie nicht angekreuzt sind, wird nichts gesendet, nicht einmal deren Name. Sind sie angekreuzt, haben aber keinen Wert, wird der Name mit einem Wert von _on_ gesendet.

> [!NOTE]
> Sie können die Beispiele aus diesem Abschnitt auf GitHub unter [checkable-items.html](https://github.com/mdn/learning-area/blob/main/html/forms/native-form-widgets/checkable-items.html) finden (auch [Live-Demo ansehen](https://mdn.github.io/learning-area/html/forms/native-form-widgets/checkable-items.html)).

Für maximale Benutzerfreundlichkeit/Barrierefreiheit wird empfohlen, jede Liste verwandter Elemente in ein {{htmlelement("fieldset")}} zu umschließen, mit einem {{htmlelement("legend")}}, das eine allgemeine Beschreibung der Liste bietet. Jedes Paar von {{htmlelement("label")}}/{{htmlelement("input")}}-Elementen sollte in seinem eigenen Listenelement (oder einem ähnlichen) enthalten sein. Das zugehörige {{htmlelement('label')}} wird in der Regel direkt vor oder nach dem Optionsfeld oder Kontrollkästchen platziert, wobei die Anweisungen für die Gruppe der Optionsfelder oder Kontrollkästchen in der Regel der Inhalt des {{htmlelement("legend")}} sind. Beispiele für die Strukturierung finden Sie in den oben verlinkten Beispielen.

### Kontrollkästchen

Ein Kontrollkästchen wird mit dem {{HTMLElement("input")}}-Element erstellt, dessen [`type`](/de/docs/Web/HTML/Element/input#type)-Attribut auf den Wert {{HTMLElement("input/checkbox", "checkbox")}} gesetzt ist.

```html
<input type="checkbox" id="questionOne" name="subscribe" value="yes" checked />
```

Verwandte Kontrollkästchen-Elemente sollten dasselbe [`name`](/de/docs/Web/HTML/Element/input#name)-Attribut verwenden. Das Einschließen des [`checked`](/de/docs/Web/HTML/Element/input/checkbox#checked)-Attributs bewirkt, dass das Kontrollkästchen automatisch aktiviert ist, wenn die Seite geladen wird. Ein Klick auf das Kontrollkästchen oder sein zugehöriges Label schaltet das Kontrollkästchen ein und aus.

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

Der folgende Screenshot zeigt Kontrollkästchen in den Standard-, Fokus- und Deaktivierungszuständen. Kontrollkästchen im Standard- und Deaktivierungszustand erscheinen angekreuzt, während im Fokuszustand das Kontrollkästchen nicht angekreuzt ist, aber einen Fokusring um sich hat.

![Standard-, Fokus- und Deaktivierungs-Kontrollkästchen in Chrome 115 auf macOS](checkboxes.png)

> [!NOTE]
> Alle Kontrollkästchen und Optionsfelder, die das [`checked`](/de/docs/Web/HTML/Element/input/checkbox#checked)-Attribut beim Laden haben, entsprechen der {{cssxref(':default')}}-Pseudoklasse, auch wenn sie nicht mehr angekreuzt sind. Alle, die aktuell angekreuzt sind, entsprechen der {{cssxref(':checked')}}-Pseudoklasse.

Aufgrund der Ein-Aus-Natur von Kontrollkästchen gilt das Kontrollkästchen als Umschalttaste, wobei viele Entwickler und Designer die Standard-Kontrollkästchen-Stilgebung erweitern, um Schaltflächen zu erstellen, die wie Kippschalter aussehen. Sie können [hier ein Beispiel in Aktion sehen](https://mdn.github.io/learning-area/html/forms/toggle-switch-example/) (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/toggle-switch-example/index.html)).

### Optionsfeld

Ein Optionsfeld wird mit Hilfe des {{HTMLElement("input")}}-Elements erstellt, dessen [`type`](/de/docs/Web/HTML/Element/input#type)-Attribut auf den Wert `radio` gesetzt ist:

```html
<input type="radio" id="soup" name="meal" value="soup" checked />
```

Mehrere Optionsfelder können miteinander verbunden werden. Wenn sie denselben Wert für ihr [`name`](/de/docs/Web/HTML/Element/input#name)-Attribut haben, wird angenommen, dass sie sich in derselben Gruppe von Schaltflächen befinden. In einer bestimmten Gruppe kann jeweils nur eine Schaltfläche aktiviert sein; dies bedeutet, dass, wenn eine von ihnen aktiviert wird, alle anderen automatisch deaktiviert werden. Wenn das Formular gesendet wird, wird nur der Wert der aktivierten Optionsfeld-Schaltfläche gesendet. Wenn keines von ihnen aktiviert ist, wird der gesamte Pool von Optionsfeld-Schaltflächen als unbekannter Zustand angesehen, und es wird kein Wert mit dem Formular gesendet. Sobald eine der in einer gleichnamigen Gruppe befindlichen Optionsfeld-Schaltflächen aktiviert ist, ist es dem Benutzer nicht möglich, alle Schaltflächen abzuwählen, ohne das Formular zurückzusetzen.

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

Der folgende Screenshot zeigt standardmäßig und deaktivierte Optionsfeld-Schaltflächen im aktivierten Zustand sowie eine im nicht aktivierten Zustand fokussierte Optionsfeld-Schaltfläche.

![Standard-, Fokus- und Deaktivierungs-Optionsfeld-Schaltflächen in Chrome 115 auf macOS](radios.png)

## Eigentliche Schaltflächen

Das Optionsfeld ist trotz seines Namens keine Schaltfläche; lassen Sie uns nun die eigentlichen Schaltflächen betrachten! Es gibt drei Eingabetypen, die Schaltflächen erzeugen:

- `submit`
  - : Sendet die Formulardaten an den Server. Bei {{HTMLElement("button")}}-Elementen führt das Weglassen des `type`-Attributs (oder eines ungültigen Werts von `type`) zu einer Senden-Schaltfläche.
- `reset`
  - : Setzt alle Formular-Widgets auf ihre Standardwerte zurück.
- `button`
  - : Schaltflächen, die keine automatische Wirkung haben, aber mit JavaScript-Code angepasst werden können.

Dann haben wir noch das {{htmlelement("button")}}-Element selbst. Es kann ein `type`-Attribut mit dem Wert `submit`, `reset` oder `button` annehmen, um das Verhalten der drei genannten `<input>`-Typen nachzuahmen. Der Hauptunterschied zwischen den beiden besteht darin, dass echte `<button>`-Elemente viel einfacher zu gestalten sind.

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
> Der `image` Eingabetyp rendert ebenfalls als Schaltfläche. Wir werden dies später ebenfalls behandeln.

> [!NOTE]
> Sie können die Beispiele aus diesem Abschnitt auf GitHub unter [button-examples.html](https://github.com/mdn/learning-area/blob/main/html/forms/native-form-widgets/button-examples.html) finden (auch [Live-Demo ansehen](https://mdn.github.io/learning-area/html/forms/native-form-widgets/button-examples.html)).

Nachfolgend finden Sie Beispiele für jeden `<input>`-Schalttyp und den entsprechenden `<button>`-Typ.

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

### anonymous

```html
<button type="button">This is an <strong>anonymous button</strong></button>

<input type="button" value="This is an anonymous button" />
```

Schaltflächen verhalten sich immer gleich, unabhängig davon, ob Sie ein {{HTMLElement("button")}}-Element oder ein {{HTMLElement("input")}}-Element verwenden. Wie Sie jedoch aus den Beispielen ersehen können, ermöglichen es Ihnen {{HTMLElement("button")}}-Elemente, HTML in ihrem Inhalt zu verwenden, das zwischen den öffnenden und schließenden `<button>`-Tags eingefügt wird. {{HTMLElement("input")}}-Elemente hingegen sind {{Glossary("void_element", "void elements")}}; ihr angezeigter Inhalt wird innerhalb des `value`-Attributs eingefügt und akzeptiert daher nur einfachen Text als Inhalt.

Der folgende Screenshot zeigt eine Schaltfläche im Standard-, Fokus- und Deaktivierungszustand. Im Fokuszustand befindet sich ein Fokusring um die Schaltfläche, und im Deaktivierungszustand ist die Schaltfläche abgeblendet.

![Standard-, Fokus- und Deaktivierungszustände einer Schaltfläche in Chrome 115 auf macOS](buttons.png)

### Bildschaltfläche

Die **Bildschaltfläche**-Steuerung wird genau wie ein {{HTMLElement("img")}}-Element wiedergegeben, außer dass sie, wenn der Benutzer darauf klickt, wie eine Senden-Schaltfläche funktioniert.

Eine Bildschaltfläche wird mit einem {{HTMLElement("input")}}-Element erstellt, dessen [`type`](/de/docs/Web/HTML/Element/input#type)-Attribut auf den Wert `image` gesetzt ist. Dieses Element unterstützt genau dieselbe Reihe von Attributen wie das {{HTMLElement("img")}}-Element, plus alle Attribute, die von anderen Formularschaltflächen unterstützt werden.

```html
<input type="image" alt="Click me!" src="my-img.png" width="80" height="30" />
```

Wenn die Bildschaltfläche zum Absenden des Formulars verwendet wird, übermittelt diese Steuerung nicht ihren Wert - stattdessen werden die X- und Y-Koordinaten des Klicks auf das Bild übermittelt (die Koordinaten beziehen sich auf das Bild, d. h. die obere linke Ecke des Bildes repräsentiert die Koordinate (0, 0)). Die Koordinaten werden als zwei Schlüssel-/Wert-Paare gesendet:

- Der X-Wert-Schlüssel ist der Wert des [`name`](/de/docs/Web/HTML/Element/input#name)-Attributs, gefolgt von der Zeichenfolge "_.x_".
- Der Y-Wert-Schlüssel ist der Wert des [`name`](/de/docs/Web/HTML/Element/input#name)-Attributs, gefolgt von der Zeichenfolge "_.y_".

Wenn Sie also beispielsweise auf das Bild bei der Koordinate (123, 456) klicken und es über die `get`-Methode senden, sehen Sie die Werte wie folgt an die URL angehängt:

```url
http://foo.com?pos.x=123&pos.y=456
```

Dies ist eine sehr bequeme Möglichkeit, eine "Hot-Map" zu erstellen. Wie diese Werte gesendet und abgerufen werden, wird im Artikel [Formulardaten senden](/de/docs/Learn/Forms/Sending_and_retrieving_form_data) erläutert.

## Dateiauswahler

Es gibt einen weiteren `<input>`-Typ, der uns in den frühen HTML-Tagen erreichte: den Dateieingabetyp. Formulare können Dateien an einen Server senden (diese spezifische Aktion wird ebenfalls im Artikel [Formulardaten senden](/de/docs/Learn/Forms/Sending_and_retrieving_form_data) erläutert). Das Datei-Auswahl-Widget kann verwendet werden, um eine oder mehrere Dateien zum Senden auszuwählen.

Um ein [Datei-Auswahl-Widget](/de/docs/Web/HTML/Element/input/file) zu erstellen, verwenden Sie das {{HTMLElement("input")}}-Element, dessen [`type`](/de/docs/Web/HTML/Element/input#type)-Attribut auf `file` gesetzt ist. Die Typen von Dateien, die akzeptiert werden, können mit dem [`accept`](/de/docs/Web/HTML/Element/input#accept)-Attribut eingeschränkt werden. Außerdem, wenn Sie dem Benutzer erlauben möchten, mehr als eine Datei auszuwählen, können Sie dies tun, indem Sie das [`multiple`](/de/docs/Web/HTML/Element/input#multiple)-Attribut hinzufügen.

### Beispiel

In diesem Beispiel wird ein Datei-Auswahl-Widget erstellt, das nach Grafikbilddateien fragt. Der Benutzer darf in diesem Fall mehrere Dateien auswählen.

```html
<input type="file" name="file" id="file" accept="image/*" multiple />
```

Auf einigen mobilen Geräten kann der Dateiauswahler auf Fotos, Videos und Audiodateien zugreifen, die direkt mit der Kamera und dem Mikrofon des Geräts aufgenommen wurden, indem der Aufnahmeinformationen zum `accept`-Attribut wie folgt hinzugefügt werden:

```html
<input type="file" accept="image/*;capture=camera" />
<input type="file" accept="video/*;capture=camcorder" />
<input type="file" accept="audio/*;capture=microphone" />
```

Der folgende Screenshot zeigt das Datei-Auswahl-Widget im Standard-, Fokus- und Deaktivierungszustand, wenn keine Datei ausgewählt ist.

![Datei-Auswahl-Widget im Standard-, Fokus- und Deaktivierungszustand in Chrome 115 auf macOS](filepickers.png)

## Allgemeine Attribute

Viele der Elemente, die zur Definition von Formularelementen verwendet werden, haben einige ihrer eigenen spezifischen Attribute. Es gibt jedoch eine Reihe von Attributen, die allen Formularelementen gemeinsam sind. Einige dieser Attribute sind Ihnen bereits begegnet, aber unten ist eine Liste dieser üblichen Attribute zu Ihrer Information:

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
        Dieses Boolean-Attribut ermöglicht es Ihnen, anzugeben, dass das Element beim Laden der Seite automatisch den Eingabefokus haben soll.
        Nur ein Formular-assoziiertes Element in einem Dokument kann dieses Attribut angegeben haben.
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
        Dieses Boolean-Attribut zeigt an, dass der Benutzer nicht mit dem Element interagieren kann.
        Wenn dieses Attribut nicht angegeben ist, erbt das Element seine Einstellung vom enthaltenen Element, zum Beispiel {{HTMLElement("fieldset")}};
        wenn es kein enthaltenes Element mit dem <code>disabled</code>-Attribut gibt, ist das Element aktiviert.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Element/input#form">form</a></code>
      </td>
      <td></td>
      <td>
        Das <code>&#x3C;form></code>-Element, mit dem das Widget verbunden ist, wird verwendet, wenn es nicht innerhalb dieses Formulars verschachtelt ist.
        Der Wert des Attributs muss die <code>id</code> eines {{HTMLElement("form")}}-Elements im selben Dokument sein.
        Dies ermöglicht es Ihnen, eine Formularkontrolle mit einem Formular zu verbinden, das sich außerhalb dessen befindet, selbst wenn es sich innerhalb eines anderen Formularelements befindet.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Element/input#name">name</a></code>
      </td>
      <td></td>
      <td>Der Name des Elements wird zusammen mit den Formulardaten übermittelt.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Element/input#value">value</a></code>
      </td>
      <td></td>
      <td>Der Anfangswert des Elements.</td>
    </tr>
  </tbody>
</table>

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Basissteuerungen](/de/docs/Learn/Forms/Test_your_skills:_Basic_controls).

## Zusammenfassung

Dieser Artikel hat die älteren Eingabetypen behandelt — das ursprüngliche Set, das in den frühen Tagen von HTML eingeführt wurde und in allen Browsern gut unterstützt wird. Im nächsten Abschnitt werfen wir einen Blick auf die moderneren Werte des `type`-Attributs.

{{PreviousMenuNext("Learn/Forms/How_to_structure_a_web_form", "Learn/Forms/HTML5_input_types", "Learn/Forms")}}

### Fortgeschrittene Themen

- [Anleitung zum Erstellen benutzerdefinierter Formularelemente](/de/docs/Learn/Forms/How_to_build_custom_form_controls)
- [Formulare mit JavaScript senden](/de/docs/Learn/Forms/Sending_forms_through_JavaScript)
- [Eigenschaftskompatibilitätstabelle für Formularelemente](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
