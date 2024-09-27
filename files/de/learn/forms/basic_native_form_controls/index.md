---
title: Grundlegende native Formularsteuerungen
slug: Learn/Forms/Basic_native_form_controls
l10n:
  sourceCommit: cd56d512284c5765f115cb002c1be5d23e7281d2
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Forms/How_to_structure_a_web_form", "Learn/Forms/HTML5_input_types", "Learn/Forms")}}

Im [vorherigen Artikel](/de/docs/Learn/Forms/How_to_structure_a_web_form) haben wir ein funktionsfähiges Webformular-Beispiel ausgezeichnet, einige Formularsteuerungen und allgemeine Strukturelemente eingeführt und dabei auf bewährte Verfahren zur Barrierefreiheit geachtet. Als Nächstes werden wir die Funktionalität der verschiedenen Formularsteuerungen oder Widgets im Detail betrachten und alle verschiedenen Möglichkeiten studieren, um verschiedene Arten von Daten zu sammeln. In diesem speziellen Artikel werden wir uns das ursprüngliche Set von Formularsteuerungen ansehen, das seit den frühen Tagen des Webs in allen Browsern verfügbar ist.

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
        Um das ursprüngliche Set an nativen Formular-Widgets, das in Browsern für die Datenerfassung verfügbar ist, im Detail zu verstehen und wie man sie mit HTML umsetzt.
      </td>
    </tr>
  </tbody>
</table>

Sie haben bereits einige Formularelemente kennengelernt, darunter {{HTMLelement('form')}}, {{HTMLelement('fieldset')}}, {{HTMLelement('legend')}}, {{HTMLelement('textarea')}}, {{HTMLelement('label')}}, {{HTMLelement('button')}} und {{HTMLelement('input')}}. Dieser Artikel behandelt:

- Die gängigen Eingabetypen {{HTMLelement('input/button', 'button')}}, {{HTMLelement('input/checkbox', 'checkbox')}}, {{HTMLelement('input/file', 'file')}}, {{HTMLelement('input/hidden', 'hidden')}}, {{HTMLelement('input/image', 'image')}}, {{HTMLelement('input/password', 'password')}}, {{HTMLelement('input/radio', 'radio')}}, {{HTMLelement('input/reset', 'reset')}}, {{HTMLelement('input/submit', 'submit')}} und {{HTMLelement('input/text', 'text')}}.
- Einige der Attribute, die allen Formularsteuerungen gemeinsam sind.

> [!NOTE]
> Wir behandeln zusätzliche, leistungsstärkere Formularsteuerungen in den nächsten beiden Artikeln. Wenn Sie eine fortgeschrittenere Referenz wünschen, sollten Sie unsere [HTML-Formular-Elementreferenz](/de/docs/Web/HTML/Element#forms) konsultieren, insbesondere unsere umfassende [Referenz für `<input>`-Typen](/de/docs/Web/HTML/Element/input).

## Texteingabefelder

Text-{{htmlelement("input")}}-Felder sind die grundlegendsten Formular-Widgets. Sie sind eine sehr praktische Möglichkeit, dem Benutzer die Eingabe jeder Art von Daten zu ermöglichen, und wir haben bereits einige einfache Beispiele gesehen.

> [!NOTE]
> HTML-Formular-Textfelder sind einfache Klartext-Eingabesteuerungen. Dies bedeutet, dass Sie sie nicht für die Bearbeitung von Rich-Text (fett, kursiv etc.) verwenden können. Alle Rich-Text-Editoren, die Sie finden, sind benutzerdefinierte Widgets, die mit HTML, CSS und JavaScript erstellt wurden.

Alle grundlegenden Textsteuerungen teilen einige gemeinsame Verhaltensweisen:

- Sie können als [`readonly`](/de/docs/Web/HTML/Element/input#readonly) (der Benutzer kann den Eingabewert nicht ändern, aber er wird zusammen mit den anderen Formulardaten gesendet) oder [`disabled`](/de/docs/Web/HTML/Element/input#disabled) (der Eingabewert kann nicht geändert werden und wird niemals mit den anderen Formulardaten gesendet) markiert werden.
- Sie können einen [`placeholder`](/de/docs/Web/HTML/Element/input#placeholder) haben; dies ist der Text, der innerhalb des Texteingabefeldes erscheint und kurz den Zweck des Feldes beschreiben sollte.
- Sie können hinsichtlich der [`size`](/de/docs/Web/HTML/Attributes/size) (der physischen Größe des Feldes) und der [`maxlength`](/de/docs/Web/HTML/Attributes/maxlength) (der maximalen Anzahl der Zeichen, die in das Feld eingegeben werden können) eingeschränkt werden.
- Sie können von der Rechtschreibprüfung profitieren (mithilfe des [`spellcheck`](/de/docs/Web/HTML/Global_attributes/spellcheck)-Attributs).

> [!NOTE]
> Das {{htmlelement("input")}}-Element ist einzigartig unter den HTML-Elementen, weil es je nach Wert seines [`type`](/de/docs/Web/HTML/Element/input#type)-Attributs viele Formen annehmen kann. Es wird für die Erstellung der meisten Formular-Widgets verwendet, einschließlich einzeiliger Textfelder, Zeit- und Datumssteuerungen, Steuerungen ohne Texteingabe wie Kontrollkästchen, Optionsfelder, Farbpicker und Schaltflächen.

### Einzeilige Textfelder

Ein einzeiliges Textfeld wird mit einem {{HTMLElement("input")}}-Element erstellt, dessen [`type`](/de/docs/Web/HTML/Element/input#type)-Attributswert auf `text` gesetzt ist oder indem das [`type`](/de/docs/Web/HTML/Element/input#type)-Attribut weggelassen wird (`text` ist der Standardwert). Der Wert `text` für dieses Attribut ist ebenfalls der Rückfallwert, wenn der von Ihnen angegebene Wert für das [`type`](/de/docs/Web/HTML/Element/input#type)-Attribut dem Browser unbekannt ist (z. B. wenn Sie `type="color"` angeben und der Browser native Farbpicker nicht unterstützt).

> [!NOTE]
> Sie können Beispiele für alle einzeiligen Textfeldtypen auf GitHub unter [single-line-text-fields.html](https://github.com/mdn/learning-area/blob/main/html/forms/native-form-widgets/single-line-text-fields.html) finden ([sehen Sie es sich auch live an](https://mdn.github.io/learning-area/html/forms/native-form-widgets/single-line-text-fields.html)).

Hier ist ein einfaches Beispiel für ein einzeiliges Textfeld:

![Einzeiliges Textfeld](0-2d57598c.md)

Einzeilige Textfelder haben nur eine echte Einschränkung: Wenn Sie Text mit Zeilenumbrüchen eingeben, entfernt der Browser diese Zeilenumbrüche, bevor die Daten an den Server gesendet werden.

Der unten stehende Screenshot zeigt ein Texteingabefeld in den Standard-, Fokus- und Deaktiviert-Zuständen. Die meisten Browser zeigen den Fokuszustand mit einem Fokusring um die Steuerung und den Deaktiviert-Zustand mit grauem Text oder einer verblassten/semi-opaken Steuerung an.

![Screenshot des Standard-, Fokus- und Deaktiviert-Zustands eines Texteingabefelds in Chrome auf macOS](disabled.png)

Die in diesem Dokument verwendeten Screenshots wurden im Chrome-Browser auf macOS aufgenommen. Es kann zu geringfügigen Abweichungen in diesen Feldern/Schaltflächen zwischen verschiedenen Browsern kommen, aber die grundlegende Hervorhebungstechnik bleibt ähnlich.

> [!NOTE]
> Wir besprechen die Werte für das [`type`](/de/docs/Web/HTML/Element/input#type)-Attribut, die spezifische Validierungsrestriktionen erzwingen, einschließlich der Eingabetypen für Farbe, E-Mail und URL, im nächsten Artikel, [Die HTML5-Eingabetypen](/de/docs/Learn/Forms/HTML5_input_types).

#### Passwortfeld

Einer der ursprünglichen Eingabetypen war der `password`-Textfeldtyp:

![Passwortfeld](1-cc44374f.md)

Der folgende Screenshot zeigt ein Passwort-Eingabefeld, in dem jedes eingegebene Zeichen als Punkt dargestellt wird.

![Passwortfeld in Chrome 115 auf macOS](password.png)

Der `password`-Wert fügt den eingegebenen Texten keine besonderen Einschränkungen hinzu, aber er verschleiert den in das Feld eingegebenen Wert (z. B. mit Punkten oder Sternchen), sodass er von anderen nicht leicht gelesen werden kann.

Denken Sie daran, dass dies nur eine Benutzeroberflächenfunktion ist; es sei denn, Sie übermitteln Ihr Formular sicher, wird es im Klartext gesendet, was für die Sicherheit schlecht ist – eine böswillige Partei könnte Ihre Daten abfangen und Passwörter, Kreditkartendetails oder was auch immer Sie eingereicht haben, stehlen. Der beste Weg, um Benutzer davor zu schützen, besteht darin, alle Seiten, die Formulare enthalten, über eine sichere Verbindung zu hosten (d. h. an einer `https://`-Adresse), sodass die Daten verschlüsselt werden, bevor sie gesendet werden.

Browser erkennen die Sicherheitsimplikationen des Sendens von Formulardaten über eine unsichere Verbindung und haben Warnungen, um Benutzer von der Nutzung unsicherer Formulare abzuhalten. Weitere Informationen darüber, was Firefox implementiert, finden Sie unter [Unsichere Passwörter](/de/docs/Web/Security/Insecure_passwords).

### Versteckter Inhalt

Eine andere ursprüngliche Textsteuerung ist der `hidden`-Eingabetyp. Dies wird verwendet, um eine Formularsteuerung zu erstellen, die für den Benutzer unsichtbar ist, aber dennoch zusammen mit den anderen Formulardaten an den Server gesendet wird, nachdem das Formular abgeschickt wurde — beispielsweise könnten Sie einen Zeitstempel an den Server senden wollen, der angibt, wann eine Bestellung aufgegeben wurde. Da es versteckt ist, kann der Benutzer den Wert nicht sehen oder absichtlich bearbeiten, es wird niemals fokussiert und ein Bildschirmlesegerät wird es auch nicht bemerken.

![Verstecktes Eingabefeld](2-8c07d2bb.md)

Wenn Sie ein solches Element erstellen, ist es erforderlich, seine `name`- und `value`-Attribute festzulegen. Der Wert kann dynamisch über JavaScript gesetzt werden. Der `hidden`-Eingabetyp sollte kein zugehöriges Label haben.

Andere Texteingabetypen wie {{HTMLElement("input/search", "search")}}, {{HTMLElement("input/url", "url")}} und {{HTMLElement("input/tel", "tel")}} werden im nächsten Tutorial behandelt, [HTML5-Eingabetypen](/de/docs/Learn/Forms/HTML5_input_types).

## Kontrollierbare Elemente: Kontrollkästchen und Optionsfelder

Kontrollierbare Elemente sind Steuerungen, deren Zustand Sie durch Klicken auf sie oder deren zugehörige Labels ändern können. Es gibt zwei Arten von kontrollierbaren Elementen: das Kontrollkästchen und das Optionsfeld. Beide verwenden das [`checked`](/de/docs/Web/HTML/Element/input/checkbox#checked)-Attribut, um anzugeben, ob das Widget standardmäßig aktiviert ist oder nicht.

Es ist erwähnenswert, dass sich diese Widgets nicht genau wie andere Formular-Widgets verhalten. Bei den meisten Formular-Widgets werden alle Widgets, die ein [`name`](/de/docs/Web/HTML/Element/input#name)-Attribut haben, gesendet, sobald das Formular abgeschickt wird, auch wenn kein Wert ausgefüllt wurde. Bei kontrollierbaren Elementen werden ihre Werte nur gesendet, wenn sie aktiviert sind. Wenn sie nicht aktiviert sind, wird nichts gesendet, nicht einmal ihr Name. Wenn sie aktiviert sind, aber keinen Wert haben, wird der Name mit einem Wert von _on_ gesendet.

> [!NOTE]
> Sie finden die Beispiele aus diesem Abschnitt auf GitHub unter [checkable-items.html](https://github.com/mdn/learning-area/blob/main/html/forms/native-form-widgets/checkable-items.html) ([sehen Sie es sich auch live an](https://mdn.github.io/learning-area/html/forms/native-form-widgets/checkable-items.html)).

Für maximale Nutzbarkeit/Barrierefreiheit wird empfohlen, jede Liste verwandter Elemente in einem {{htmlelement("fieldset")}} einzufassen, mit einem {{htmlelement("legend")}}, das eine Gesamtbeschreibung der Liste bietet. Jedes einzelne Paar von {{htmlelement("label")}}/{{htmlelement("input")}}-Elementen sollte in seinem eigenen Listenelement (oder ähnlichem) enthalten sein. Das zugeordnete {{htmlelement('label')}} wird normalerweise unmittelbar vor oder nach dem Optionsfeld oder Kontrollkästchen platziert, wobei die Anweisungen für die Gruppe von Optionsfeldern oder Kontrollkästchen in der Regel der Inhalt des {{htmlelement("legend")}} sind. Siehe die oben verlinkten Beispiele für strukturelle Beispiele.

### Kontrollkästchen

Ein Kontrollkästchen wird mit dem {{HTMLElement("input")}}-Element erstellt, wobei das [`type`](/de/docs/Web/HTML/Element/input#type)-Attribut auf den Wert {{HTMLElement("input/checkbox", "checkbox")}} gesetzt ist.

![Kontrollkästchen](3-33b8e84e.md)

Verwandte Kontrollkästchen-Elemente sollten dasselbe [`name`](/de/docs/Web/HTML/Element/input#name)-Attribut verwenden. Durch das Hinzufügen des [`checked`](/de/docs/Web/HTML/Element/input/checkbox#checked)-Attributs wird das Kontrollkästchen beim Laden der Seite automatisch aktiviert. Ein Klick auf das Kontrollkästchen oder sein zugehöriges Label schaltet das Kontrollkästchen ein und aus.

![Aktiviertes Kontrollkästchen](4-1906d647.md)

Der folgende Screenshot zeigt Kontrollkästchen in den Standard-, Fokus- und Deaktiviert-Zuständen. Kontrollkästchen in den Standard- und Deaktiviert-Zuständen erscheinen aktiviert, während im Fokus-Zustand das Kontrollkästchen deaktiviert ist, mit einem Fokusring um es herum.

![Standard-, Fokus- und Deaktiviert-Zustand von Kontrollkästchen in Chrome 115 auf macOS](checkboxes.png)

> [!NOTE]
> Alle Kontrollkästchen und Optionsfelder mit dem [`checked`](/de/docs/Web/HTML/Element/input/checkbox#checked)-Attribut beim Laden entsprechen der {{cssxref(':default')}} Pseudoklasse, selbst wenn sie nicht mehr aktiviert sind. Alle, die derzeit aktiviert sind, entsprechen der {{cssxref(':checked')}} Pseudoklasse.

Aufgrund der Ein-Aus-Natur von Kontrollkästchen wird das Kontrollkästchen als Umschaltknopf betrachtet, wobei viele Entwickler und Designer auf die Standard-Kontrollkästchen-Styling aufbauen, um Schaltflächen zu erstellen, die wie Kippschalter aussehen. Sie können [hier ein Beispiel in Aktion sehen](https://mdn.github.io/learning-area/html/forms/toggle-switch-example/) (sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/html/forms/toggle-switch-example/index.html) an).

### Optionsfeld

Ein Optionsfeld wird mit dem {{HTMLElement("input")}}-Element erstellt, wobei das [`type`](/de/docs/Web/HTML/Element/input#type)-Attribut auf den Wert `radio` gesetzt ist:

![Optionsfeld](5-8b42c315.md)

Mehrere Optionsfelder können miteinander verbunden werden. Wenn sie denselben Wert für ihr [`name`](/de/docs/Web/HTML/Element/input#name)-Attribut teilen, werden sie als Teil derselben Schaltflächengruppe betrachtet. Es kann immer nur eine Schaltfläche in einer bestimmten Gruppe aktiviert werden; dies bedeutet, dass, wenn eine von ihnen aktiviert wird, alle anderen automatisch deaktiviert werden. Wenn das Formular abgeschickt wird, wird nur der Wert des aktivierten Optionsfelds gesendet. Wenn keines von ihnen aktiviert ist, wird die gesamte Gruppe von Optionsfeldern als unbekannter Zustand betrachtet, und es wird kein Wert mit dem Formular gesendet. Sobald eines der mit demselben Namen versehenen Optionsfelder aktiviert ist, ist es dem Benutzer nicht möglich, alle Schaltflächen zu deaktivieren, ohne das Formular zurückzusetzen.

![Gruppierte Optionsfelder](6-b50c19dd.md)

Der folgende Screenshot zeigt standardmäßig und deaktivierte Optionsfelder im aktiven Zustand sowie ein im unkontrollierten Zustand fokussiertes Optionsfeld.

![Standard-, Fokus- und Deaktiviert-Zustand von Optionsfeldern in Chrome 115 auf macOS](radios.png)

## Tatsächliche Schaltflächen

Das Optionsfeld ist keine tatsächliche Schaltfläche, trotz seines Namens; kommen wir also zu den tatsächlichen Schaltflächen! Es gibt drei Eingabetypen, die Schaltflächen erzeugen:

- `submit`
  - : Sendet die Formulardaten an den Server. Bei {{HTMLElement("button")}}-Elementen führt das Weglassen des `type`-Attributs (oder ein ungültiger Wert von `type`) zu einer Absende-Schaltfläche.
- `reset`
  - : Setzt alle Formular-Widgets auf ihre Standardwerte zurück.
- `button`
  - : Schaltflächen, die keine automatische Wirkung haben, aber mit JavaScript-Code angepasst werden können.

Dann gibt es auch das {{htmlelement("button")}}-Element selbst. Es kann ein `type`-Attribut mit dem Wert `submit`, `reset` oder `button` annehmen, um das Verhalten der drei oben genannten `<input>`-Typen nachzuahmen. Der Hauptunterschied zwischen den beiden besteht darin, dass tatsächliche `<button>`-Elemente viel einfacher zu stylen sind.

![Tatsächliche Schaltfläche](7-4f1e0a2c.md)

![Absende-Schaltfläche](8-1c3dff69.md)

![Zurücksetz-Schaltfläche](9-33100678.md)

{{ EmbedLiveSample('Actual_buttons', '500', '250') }}

> [!NOTE]
> Der `image`-Eingabetyp rendert auch als Schaltfläche. Wir werden das ebenfalls später behandeln.

> [!NOTE]
> Sie finden die Beispiele aus diesem Abschnitt auf GitHub unter [button-examples.html](https://github.com/mdn/learning-area/blob/main/html/forms/native-form-widgets/button-examples.html) ([sehen Sie es sich auch live an](https://mdn.github.io/learning-area/html/forms/native-form-widgets/button-examples.html)).

Unten finden Sie Beispiele für jeden `<input>`-Schaltflächentyp sowie für den entsprechenden `<button>`-Typ.

### submit

![Absende-Schaltfläche](10-138bbc54.md)

### reset

![Zurücksetz-Schaltfläche](11-86fd2bd2.md)

### Anonym

![Anonyme Schaltfläche](12-c79de55f.md)

Schaltflächen verhalten sich bei der Verwendung eines {{HTMLElement("button")}} Elements oder eines {{HTMLElement("input")}} Elements immer gleich. Wie Sie jedoch aus den Beispielen sehen können, ermöglichen Ihnen {{HTMLElement("button")}}-Elemente die Verwendung von HTML in ihrem Inhalt, der zwischen den öffnenden und schließenden `<button>`-Tags eingefügt wird. {{HTMLElement("input")}}-Elemente hingegen sind [Void-Elemente](/de/docs/Glossary/void_element); deren angezeigter Inhalt wird innerhalb des `value`-Attributs eingefügt und akzeptiert daher nur Klartext als Inhalt.

Der folgende Screenshot zeigt eine Schaltfläche in den Standard-, Fokus- und Deaktiviert-Zuständen. Im Fokus-Zustand gibt es einen Fokusring um die Schaltfläche, und im Deaktiviert-Zustand ist die Schaltfläche ausgegraut.

![Standard-, Fokus- und Deaktiviert-Zustand einer Schaltfläche in Chrome 115 auf macOS](buttons.png)

### Bild-Schaltfläche

Die **Bild-Schaltfläche**-Steuerung wird genau wie ein {{HTMLElement("img")}}-Element gerendert, außer dass, wenn der Benutzer darauf klickt, sie sich wie eine Absende-Schaltfläche verhält.

Eine Bild-Schaltfläche wird mit einem {{HTMLElement("input")}}-Element erstellt, dessen [`type`](/de/docs/Web/HTML/Element/input#type)-Attribut auf den Wert `image` gesetzt ist. Dieses Element unterstützt genau denselben Satz von Attributen wie das {{HTMLElement("img")}}-Element sowie alle von anderen Formularschaltflächen unterstützten Attribute.

![Bild-Schaltfläche](13-8953b3b3.md)

Wenn die Bild-Schaltfläche verwendet wird, um das Formular zu senden, wird dieser Kontrolle ihr Wert nicht übermittelt – stattdessen werden die X- und Y-Koordinaten des Klicks auf das Bild übermittelt (die Koordinaten sind relativ zum Bild, was bedeutet, dass die obere linke Ecke des Bildes die Koordinate (0, 0) darstellt). Die Koordinaten werden als zwei Schlüssel/Wert-Paare gesendet:

- Der X-Wert-Schlüssel ist der Wert des [`name`](/de/docs/Web/HTML/Element/input#name)-Attributs gefolgt von dem String "_.x_".
- Der Y-Wert-Schlüssel ist der Wert des [`name`](/de/docs/Web/HTML/Element/input#name)-Attributs gefolgt von dem String "_.y_".

Wenn Sie also beispielsweise auf das Bild bei der Koordinate (123, 456) klicken und es über die `get`-Methode gesendet wird, sehen Sie die Werte wie folgt an die URL angehängt:

![Beispiel für eine Bild-Schaltfläche](14-92e587fd.md)

Dies ist eine sehr bequeme Möglichkeit, eine "Hot Map" zu erstellen. Wie diese Werte gesendet und abgerufen werden, wird im Artikel [Senden von Formulardaten](/de/docs/Learn/Forms/Sending_and_retrieving_form_data) detailliert beschrieben.

## Datei-Selektor

Es gibt einen letzten `<input>`-Typ, der uns im frühen HTML gebracht wurde: den Datei-Eingabetyp. Formulare können Dateien an einen Server senden (diese spezielle Aktion wird auch im Artikel [Senden von Formulardaten](/de/docs/Learn/Forms/Sending_and_retrieving_form_data) detailliert beschrieben). Das Widget Datei-Selektor kann verwendet werden, um eine oder mehrere Dateien zum Versenden auszuwählen.

Um ein [Datei-Selektor-Widget](/de/docs/Web/HTML/Element/input/file) zu erstellen, verwenden Sie das {{HTMLElement("input")}}-Element mit seinem [`type`](/de/docs/Web/HTML/Element/input#type)-Attribut auf `file`. Die Arten von Dateien, die akzeptiert werden, können mit dem [`accept`](/de/docs/Web/HTML/Element/input#accept)-Attribut eingeschränkt werden. Darüber hinaus können Sie, wenn Sie dem Benutzer erlauben möchten, mehr als eine Datei auszuwählen, dies durch Hinzufügen des [`multiple`](/de/docs/Web/HTML/Element/input#multiple)-Attributs tun.

### Beispiel

In diesem Beispiel wird ein Datei-Selektor erstellt, der grafische Bilddateien anfordert. In diesem Fall darf der Benutzer mehrere Dateien auswählen.

![Beispiel für einen Datei-Selektor](15-b82cb5f0.md)

Auf einigen mobilen Geräten kann der Datei-Selektor Fotos, Videos und Audio direkt von der Kamera und dem Mikrofon des Geräts erfassen, indem Capture-Informationen dem `accept`-Attribut hinzugefügt werden, wie folgt:

![Beispiel für erweiterte Datei-Auswahldienste in Mobilgeräten](16-9455cc9a.md)

Der folgende Screenshot zeigt das Datei-Selektor-Widget in den Standard-, Fokus- und Deaktiviert-Zuständen, wenn keine Datei ausgewählt ist.

![Datei-Selektor-Widget in Standard-, Fokus- und Deaktiviert-Zuständen in Chrome 115 auf macOS](filepickers.png)

## Gemeinsame Attribute

Viele der zur Definition von Formularsteuerungen verwendeten Elemente haben einige ihrer eigenen spezifischen Attribute. Es gibt jedoch einen Satz von Attributen, die allen Formularelementen gemeinsam sind. Einige davon sind Ihnen bereits begegnet, aber hier ist eine Liste dieser gemeinsamen Attribute als Referenz:

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
        Dieses Boolean-Attribut lässt Sie angeben, dass das Element beim Laden der Seite automatisch den Eingabefokus haben soll.
        Nur ein mit einem Formular verbundenes Element in einem Dokument kann dieses Attribut angegeben haben.
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
        Wenn dieses Attribut nicht angegeben ist, erbt das Element seine Einstellung aus dem enthaltenen Element, z.B. {{HTMLElement("fieldset")}};
        gibt es kein enthaltendes Element mit dem `disabled`-Attribut, so ist das Element aktiviert.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/de/docs/Web/HTML/Element/input#form">form</a></code>
      </td>
      <td></td>
      <td>
        Das <code>&#x3C;form></code>-Element, dem das Widget zugeordnet ist, wird verwendet, wenn es nicht innerhalb dieses Formulars verschachtelt ist.
        Der Wert des Attributs muss das <code>id</code>-Attribut eines {{HTMLElement("form")}}-Elements im selben Dokument sein.
        Dies ermöglicht Ihnen, eine Formularsteuerung mit einem Formular zu verknüpfen, das sich außerhalb davon befindet, selbst wenn es innerhalb eines anderen Formular-Elements ist.
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

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Grundlegende Steuerungen](/de/docs/Learn/Forms/Test_your_skills:_Basic_controls).

## Zusammenfassung

Dieser Artikel hat die älteren Eingabetypen behandelt — das ursprüngliche Set, das in den frühen Tagen von HTML eingeführt wurde und in allen Browsern gut unterstützt wird. Im nächsten Abschnitt werfen wir einen Blick auf die moderneren Werte des `type`-Attributs.

{{PreviousMenuNext("Learn/Forms/How_to_structure_a_web_form", "Learn/Forms/HTML5_input_types", "Learn/Forms")}}

### Erweiterte Themen

- [Wie man benutzerdefinierte Formularsteuerungen erstellt](/de/docs/Learn/Forms/How_to_build_custom_form_controls)
- [Formulare über JavaScript senden](/de/docs/Learn/Forms/Sending_forms_through_JavaScript)
- [Eigenschaftskompatibilitätstabelle für Formular-Widgets](/de/docs/Learn/Forms/Property_compatibility_table_for_form_controls)
