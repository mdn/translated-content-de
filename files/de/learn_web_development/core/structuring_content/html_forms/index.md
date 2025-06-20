---
title: Formulare und Schaltflächen in HTML
short-title: Formulare und Schaltflächen
slug: Learn_web_development/Core/Structuring_content/HTML_forms
l10n:
  sourceCommit: b97dae0887fb02713db610eed4855545a9c81bcd
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content/Debugging_HTML", "Learn_web_development/Core/Structuring_content")}}

HTML-Formulare und Schaltflächen sind leistungsstarke Werkzeuge zur Interaktion mit den Benutzern einer Website. Am häufigsten bieten sie Benutzern Steuerelemente zur Manipulation einer Benutzeroberfläche (UI) oder zur Eingabe von Daten, wenn dies erforderlich ist.

In diesem Artikel geben wir eine Einführung in die Grundlagen von Formularen und Schaltflächen. Es gibt noch viel mehr zu wissen – viele Eingabetypen und Formularfunktionen werden nicht erwähnt –, aber dieser Artikel wird Ihnen eine solide Grundlage für die meisten Fälle bieten. Sie können die fortgeschrittenen oder spezialisierten Anwendungen nach dem Prinzip "eins nach dem anderen" lernen, als Teil des ständigen Lernens, das Sie während Ihrer Karriere durchführen werden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende HTML-Kenntnisse, wie in
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        >abgedeckt. Textuelle Semantik wie <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
          >Überschriften und Absätze</a
        > und <a href="/de/docs/Learn_web_development/Core/Structuring_content/Lists"
          >Listen</a
        >. <a href="/de/docs/Learn_web_development/Core/Structuring_content/Structuring_documents"
          >Strukturelles HTML</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Eine Wertschätzung dafür, dass Formulare und Schaltflächen neben Links die Hauptwerkzeuge sind, mit denen Benutzer mit einer Website interagieren können.</li>
          <li>Verschiedene Schaltflächentypen.</li>
          <li>Häufige <code>&lt;input&gt;</code>-Typen.</li>
          <li>Häufige Attribute wie <code>name</code> und <code>value</code>.</li>
          <li>Das <code>&lt;form&gt;</code>-Element und die Grundlagen der Formularübermittlung.</li>
          <li>Formulare zugänglich machen mit Labels und korrekter Semantik.</li>
          <li>Andere Steuerelementtypen: <code>&lt;textarea&gt;</code>, <code>&lt;select&gt;</code> und <code>&lt;option&gt;</code>.</li>
          <li>Grundlagen der clientseitigen Validierung.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Interaktion mit Benutzern

Bisher im Kurs haben Sie einige Möglichkeiten gesehen, wie Benutzer mit dem Web interagieren können:

- [Links](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links) können genutzt werden, um zu verschiedenen Inhaltsabschnitten zu navigieren, entweder auf derselben Seite oder auf einer anderen Seite.
- [`<video>` und `<audio>`](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)-Elemente verfügen im Allgemeinen über Steuerelemente wie Abspielen/Pause, schnelles Vor- oder Zurückspulen usw., die es Benutzern ermöglichen, Medieninhalte nach Belieben zu konsumieren.

Allerdings fördern diese Funktionen tendenziell einseitige Interaktionen, bei denen Benutzer passiv Inhalte konsumieren. Das ist in Ordnung, doch das Web ist eine beidseitige Erfahrung. Website-Benutzer legen fest, wie sie Inhalte und Dienste erleben möchten. Sie bestellen Taxis und fordern Rückrufe an. Sie geben Feedback und beschweren sich. Sie kaufen Produkte und lassen sie sich nach Hause liefern.

Um diese beidseitige Erfahrung zu bieten, müssen Sie Schaltflächen und Formulare verwenden.

Schaltflächen werden normalerweise mit HTML-{{htmlelement("button")}}-Elementen erstellt (sie werden manchmal auch mit {{htmlelement("input")}}-Elementen erstellt, deren `type`-Attribute auf einen Wert wie `button` oder `submit` gesetzt sind). Diese Drucktasten sind allgemeine Tasten – Sie können sie so verdrahten, dass jede Funktionalität ausgelöst wird, die Sie möchten, nur begrenzt durch Ihre Fantasie und Ihre Programmierkenntnisse.

Formulare werden mit Elementen wie {{htmlelement("form")}}, {{htmlelement("label")}}, {{htmlelement("input")}} und {{htmlelement("select")}} erstellt. Formularelemente können verwendet werden, um komplexere Steuerelemente zu erstellen als einfache Schaltflächen, zum Beispiel ein Dropdown-Menü mit mehreren Optionen, in dem Sie zwischen verschiedenen Themen für ein Benutzeroberflächenelement wählen können.

Jedoch können sie auch entscheidend sein, um Formulare zu erstellen, die Benutzer ausfüllen müssen, wenn sie Informationen an einen Website-Server übermitteln müssen. Denken Sie an E-Commerce-Websites – wenn Sie nach einem Produkt suchen möchten, das Sie kaufen möchten, verwenden Sie ein Formular, um Suchbegriffe einzugeben. Wenn Sie Artikel bezahlen und die Lieferung abschließen möchten, verwenden Sie ein Formular, um Ihre Postadresse einzugeben, und ein anderes Formular, um Ihre Kreditkartendaten einzugeben.

Wir konzentrieren uns hauptsächlich auf diese – traditionellere – Verwendung von Formularelementen in diesem Artikel. Beachten Sie, dass Schaltflächen auch häufig innerhalb von Formularen verwendet werden, um die eingegebenen Daten an den Server zu senden.

Mit dieser wichtigen Theorie aus dem Weg, lassen Sie uns fortfahren, den Code zu erkunden und zu sehen, wie Schaltflächen und Formulare implementiert werden.

## Schaltflächen

Wie oben angedeutet, haben Schaltflächen ein paar Hauptanwendungen im Web. Zunächst einmal werden sie verwendet, um Funktionen auszulösen, was bei der Erstellung von Benutzeroberflächen-Steuerelementen nützlich ist. Die einfachste Schaltfläche wird mit dem folgenden Code implementiert:

```html live-sample___basic-button
<button>Press me</button>
```

Dies wird wie folgt dargestellt:

{{EmbedLiveSample("basic-button", "100%", "60")}}

Der Text, der zwischen den `<button></button>`-Tags erscheint, wird innerhalb der Schaltfläche gerendert und erhält vom Browser ein grundlegendes Styling, sodass er standardmäßig wie eine Schaltfläche aussieht und sich auch so verhält. Soweit so gut. Es gibt jedoch ein Problem – unsere einsame Schaltfläche wird allein nichts Nützliches tun. Um sie etwas Nützliches tun zu lassen, müssen Sie sie in einem Formular platzieren (was wir später behandeln werden) oder etwas JavaScript hinzufügen.

Zum Beispiel, wenn Sie das folgende JavaScript auf die obige Schaltfläche anwenden:

```html hidden live-sample___basic-button-with-js
<button>Press me</button>
```

```js live-sample___basic-button-with-js
const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  btn.textContent = "YOU CLICKED ME!! ❤️";
  setTimeout(() => {
    btn.textContent = "Press me";
  }, 1000);
});
```

Würde dies die folgende Ausgabe erzeugen – versuchen Sie, darauf zu klicken:

{{EmbedLiveSample("basic-button-with-js", "100%", "60")}}

Sie müssen jetzt nicht verstehen, wie das JavaScript funktioniert. Sie werden später im Kurs mehr darüber erfahren.

Im nächsten Abschnitt sehen Sie eine Demonstration der zweiten Hauptanwendung von Schaltflächen – dem Übermitteln von Formularen.

## Die Anatomie eines Formulars

Ein grundlegendes Formular enthält drei Dinge:

- Ein {{htmlelement("form")}}-Element, das alle anderen Formularinhalte umschließt. Alle Formularelemente innerhalb der `<form></form>`-Tags sind Teil desselben Formulars, und ihre Daten werden beim Übermitteln des Formulars eingeschlossen.
- Ein oder mehrere Paare, bestehend aus einem {{htmlelement("label")}}-Element und einem Formularelement (normalerweise ein {{htmlelement("input")}}, aber es gibt auch andere Typen, zum Beispiel {{htmlelement("select")}}):
  - Das Formularelement erlaubt es dem Benutzer, Daten auszuwählen oder einzugeben, die an den Server gesendet werden, wenn das Formular übermittelt wird.
  - Das `<label>`-Element liefert ein zugehöriges Label, das beschreibt, welche Daten in das Formularelement eingegeben werden sollen.
- Ein {{htmlelement("button")}}-Element, das verwendet wird, um das Formular zu übermitteln.

Schauen wir uns ein Grundbeispiel an, das die genannten drei Elemente enthält. Dieses Formular könnte verwendet werden, um nach dem Namen und der E-Mail-Adresse eines Benutzers zu fragen, um ihn für einen Newsletter anzumelden (keine Sorge – es ist mit keinem Server verbunden, es wird also derzeit nichts passieren).

```html live-sample___form-anatomy
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>First form</title>
  </head>
  <body>
    <form action="./submit_page" method="get">
      <h2>Subscribe to our newsletter</h2>
      <p>
        <label for="name">Name (required):</label>
        <input type="text" name="name" id="name" required />
      </p>
      <p>
        <label for="email">Email (required):</label>
        <input type="email" name="email" id="email" required />
      </p>
      <p>
        <button>Sign me up!</button>
      </p>
    </form>
  </body>
</html>
```

Dies wird wie folgt dargestellt:

{{EmbedLiveSample("form-anatomy", "100%", "200", , , , , "allow-forms")}}

Wenn Sie sofort auf "Sign me up!" klicken, sehen Sie einen Validierungsfehler, da keine Daten eingegeben wurden. Wenn Sie die Felder mit einem Namen und einer E-Mail-Adresse ausfüllen und dann auf "Sign me up!" klicken, sehen Sie eine `404`-Fehlermeldung.

Wir werden später erklären, warum das so ist. Bevor Sie fortfahren, kopieren Sie den vorherigen HTML-Codeausschnitt in eine neue HTML-Datei mit Ihrem [Code-Editor](/de/docs/Learn_web_development/Getting_started/Environment_setup/Code_editors) und öffnen Sie ihn in einem neuen Browser-Tab.

### Das `<form>`-Element

Wie wir bereits gesagt haben, dient das {{htmlelement("form")}}-Element als äußerer Rahmen für das Formular und gruppiert alle darin enthaltenen Formularelemente zusammen. Wenn die `<button>` gedrückt wird, werden alle durch die Formularelemente dargestellten Daten an den Server gesendet. Das `<form>`-Element kann viele Attribute aufnehmen, aber die zwei wichtigsten, die in unserem Beispiel enthalten sind, sind wie folgt:

- `action`: Enthält einen Pfad zu der Seite, an die wir die übermittelten Formulardaten zur Verarbeitung senden möchten. Später, nachdem Sie das Formular übermittelt haben, werden Sie `/submit_page` in der URL sehen. Sie erhalten auch eine {{HTTPStatus("404")}}-Fehlerantwort, da die Seite tatsächlich nicht existiert, aber das ist im Moment in Ordnung.
- `method`: Gibt die Datenübertragungsmethode an, die Sie zum Senden der Formulardaten an den Server verwenden möchten. Machen Sie sich darüber im Moment keine allzu großen Sorgen; der `get`-Wert bewirkt, dass die Daten als Parameter am Ende der URL gesendet werden.

#### Überprüfung der übermittelten Daten

1. Gehen Sie zu dem Beispiel im separaten Tab, versuchen Sie, einen Namen "Bob" und eine E-Mail-Adresse "bob@bob.com" einzugeben.
2. Drücken Sie die `<button>`.

Die `action`- und `method`-Attribute sorgen dafür, dass die Formulardaten in einer URL entlang der folgenden Zeilen übermittelt werden:

```plain
/some/url/submit_page?name=Bob&email=bob%40bob.com
```

#### Strukturierung von Formularen

Sie können beliebige HTML-Elemente in ein `<form>`-Element einfügen, um die Formularelemente selbst zu strukturieren und Container bereitzustellen, die mit CSS für das Styling usw. angesteuert werden können.

In unserem Beispiel haben wir ein [Überschriftselement](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) (`<h2>`) eingefügt, um den Zweck des Formulars zu beschreiben.

Wir haben auch jedes Eingabe-/Label-Paar und die Senden-Schaltfläche in ein separates {{htmlelement("p")}} gesetzt, sodass jedes auf einer separaten Zeile erscheint. Diese Elemente sind standardmäßig inline, was bedeutet, dass sie ohne dieses Vorgehen alle auf derselben Zeile stehen würden.

Dies ist ein allgemeines Muster zur Formularstrukturierung. Einige Leute verwenden `<p>`-Elemente, um ihre Formularelemente zu trennen, andere verwenden {{htmlelement("div")}}, {{htmlelement("section")}} oder sogar {{htmlelement("li")}}-Elemente. Es spielt keine große Rolle, solange die verwendeten Elemente semantisch sinnvoll sind. Beispielsweise ergibt es Sinn, Formularelementgruppen in separate Absätze oder Inhaltsabschnitte oder sogar Listenelemente aufzuteilen. Es wäre weniger sinnvoll, sie als [blockquotes](/de/docs/Web/HTML/Reference/Elements/blockquote), [asides](/de/docs/Web/HTML/Reference/Elements/aside) oder [addresses](/de/docs/Web/HTML/Reference/Elements/address) darzustellen.

Es gibt ein spezialisiertes Element zum Gruppieren von Formularelementen, das {{htmlelement("fieldset")}} genannt wird. Dies ist in bestimmten Umständen nützlich, zum Beispiel in komplexen Formularen und beim Gruppieren mehrerer Kontrollkästchen und Optionsfelder. Später werden wir einige `<fieldset>`-Beispiele betrachten.

### `<input>`-Elemente

Die {{htmlelement("input")}}-Elemente repräsentieren die verschiedenen Datenelemente, die in das Formular eingegeben werden. Lassen Sie uns eines der Beispiele aus unserem einfachen Formular studieren:

```html
<input type="text" name="name" id="name" required />
```

Die Attribute sind wie folgt:

- `type`: Gibt den Typ des zu erstellenden Formularelements an. Es gibt viele verschiedene Arten von Formularelementen, von einfachen Textfeldern unterschiedlicher Typen bis hin zu Optionsknöpfen, Kontrollkästchen und mehr. Der Typ `text` rendert ein einfaches Textfeld, das jeden Wert akzeptieren kann.
- `name`: Gibt einen Namen für das Datenelement an. Wenn das Formular übermittelt wird, werden die Daten in Name/Wert-Paaren gesendet. In jedem Fall ist der Name gleich dem Wert dieses `name`-Attributs, und der Wert ist gleich dem Text, der in das Textfeld eingegeben wird.
- `id`: Gibt eine ID an, die verwendet werden kann, um das Element zu identifizieren. In diesem Fall wird es verwendet, um das Formularelement mit seinem `<label>` zu verknüpfen.
- `required`: Gibt an, dass ein Wert in das Formularelement eingegeben werden muss, bevor das Formular übermittelt werden kann. Dies sollte nur bei Eingaben verwendet werden, die Sie benötigen, nicht bei optionalen Feldern.

Sie sollten sich bewusst sein, dass einige Eingabetypen normalerweise ihre Werte nicht aus in ein Feld eingegebenem Text erhalten. Zum Beispiel rendert [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color) ein Farbauswahl-Widget, aus dem Sie eine Farbe auswählen, während [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio) ein Optionsfeld-Steuerelement rendert, das ausgewählt oder nicht ausgewählt sein kann.

Im Falle von Optionsknöpfen müssen Sie im Allgemeinen den Wert, der übermittelt werden würde, wenn er ausgewählt ist, in einem spezifischen `value`-Attribut angeben. Beachten Sie, dass Sie ein `value`-Attribut auf Eingabetypen wie `text` und `color` angeben _können_ — der Effekt ist, dass der Wert vorausfüllend in das Formularfeld eingegeben wird, wenn es zum ersten Mal gerendert wird.

#### `Erforderlich`- und `Wert`-Attribute in Aktion

1. Gehen Sie noch einmal zu dem Beispiel, das Sie in einem separaten Tab geladen haben, und versuchen Sie, das Formular ohne Eingabe eines Werts in eines der Felder abzusenden. Sie werden sehen, dass eine Fehlermeldung neben dem "Name"-Feld erscheint, die so etwas wie "Please fill in this field" sagt (es wird in verschiedenen Browsern variieren). Dies ist das `required`-Attribut – und die standardmäßige clientseitige Formularvalidierung des Browsers – in Aktion.
2. Versuchen Sie nun, das Formular mit einem gültigen Namen im ersten Feld, aber einem Wert, der keine gültige E-Mail-Adresse ist, im zweiten Feld zu übermitteln (etwas wie "aaaa" ist ausreichend). Diesmal sehen Sie eine Fehlermeldung, die neben dem "Email"-Feld erscheint und so etwas sagt wie "Please enter an email address".
3. Versuchen Sie, das Formular zu ändern, um `value="Bob"` auf dem ersten Eingabefeld einzuschließen. Wenn Sie den Code neu laden, sehen Sie, dass das erste Feld standardmäßig einen Wert von "Bob" enthält.

#### Spezialisierte Textfelder

Die zweite Übung oben wirft einen interessanten Punkt auf. Das zweite Eingabefeld erwartet speziell eine E-Mail-Adresse und validiert eingegebene Werte entsprechend. Wenn Sie sich den Formularcode nochmals ansehen, werden Sie sehen, warum – das zweite `<input>` hat den `type` `email`. Es gibt mehrere spezialisierte Textfeldeingabetypen, die für bestimmte Datentypen ausgelegt sind — [`<input type="number">`](/de/docs/Web/HTML/Reference/Elements/input/number), [`<input type="password">`](/de/docs/Web/HTML/Reference/Elements/input/password), [`<input type="tel">`](/de/docs/Web/HTML/Reference/Elements/input/tel) usw.

Folgen Sie einigen der obigen Links, um herauszufinden, wofür diese Eingabetypen verwendet werden. Werfen Sie einen Blick auf unser [`<input>`](/de/docs/Web/HTML/Reference/Elements/input)-Referenz und sehen Sie, ob Sie weitere spezialisierte Textfeldeingabetypen finden können.

### `<label>`-Elemente

Wie wir oben gesagt haben, liefern {{htmlelement("label")}}-Elemente die identifizierenden Labels, die mit Formularelementen assoziiert sind und beschreiben, welche Daten in sie eingegeben werden sollen. Sie können beliebigen Textinhalt in `<label>`-Elementen verwenden, aber sie sollten genau beschreiben, welche Daten das zugehörige Formularelement erwartet. Die Zuordnung wird hergestellt, indem dem Formularelement ein `id`-Attribut gegeben wird und dem `<label>`-Element ein `for`-Attribut mit demselben Wert wie die `id` des Steuerungselements.

Zum Beispiel:

```html
<label for="name">Name (required):</label>
<input type="text" name="name" id="name" required />
```

`<label>`-Elemente sind aus mehreren Gründen wichtig, insbesondere:

- Wenn sehbehinderte Benutzer einen Bildschirmleser verwenden, um sie beim Lesen und Interagieren mit Webseiteninhalten zu unterstützen, wird der Bildschirmleser den zugehörigen Labeltext vorlesen, wenn jedes Steuerelement angetroffen wird. Dies erleichtert es den Benutzern zu verstehen, welche Daten in jedes Steuerelement eingegeben werden sollen.
- Sie ermöglichen es Ihnen, die Formularelemente durch Klicken auf ihren Labeltext zu fokussieren, sowie die Steuerelemente selbst. Dies ist besonders nützlich für Handy-Benutzer, bei denen es schwierig sein kann, ein Formularelement mit dem Finger präzise auf einem Touchscreen auszuwählen. Die **Trefferfläche** zu vergrößern, ist in solchen Umständen nützlich.

#### Explizite und implizite Formularlabels

Die oben gesehene Form eines Labels wird als **explizites Formularlabel** bezeichnet – die Verbindung zwischen Steuerung und Label wird explizit über die `id`- und `for`-Attribute hergestellt. Sie können auch ein **implizites Formularlabel** implementieren, indem Sie die Steuerung innerhalb des Labels verschachteln, wie folgt:

```html
<label>
  Name (required):
  <input type="text" name="name" required />
</label>
```

Die Verschachtelung stellt eine implizite Verbindung zwischen Steuerung und Label her, und Sie benötigen keine `id`- und `for`-Attribute mehr.

Beide Ansätze sind in Ordnung, aber wir würden empfehlen, den expliziten Labelansatz zu verwenden. Der explizite Zusammenhang ist in der Regel einfacher zu erkennen und zu verstehen, insbesondere wenn Ihr HTML-Code komplexer wird. Darüber hinaus behandeln Bildschirmleser (und andere unterstützende Technologien) implizite Labels nicht immer korrekt.

Sie können mehr über Best Practices bei der Formularkennzeichnung in [HTML Inputs and Labels: A Love Story](https://css-tricks.com/html-inputs-and-labels-a-love-story/), csstricks.com (2021) lesen.

### Das `<button>`-Element

Wenn ein {{htmlelement("button")}}-Element innerhalb eines `<form>`-Elements eingeschlossen ist, besteht sein Standardverhalten darin, dass es das Formular übermittelt, vorausgesetzt es sind keine ungültigen Daten vorhanden, die durch eine clientseitige Formularvalidierung die Übermittlung blockieren. Sie haben dieses Verhalten bereits beim Ausprobieren unseres einfachen Formularbeispiels oben gesehen.

Es gibt andere Schaltflächenverhalten, die über das `type`-Attribut des `<button>`-Elements angegeben werden können:

- `<button type="submit">` erklärt ausdrücklich, dass eine Schaltfläche sich wie eine Übermittlungsschaltfläche verhalten soll. Sie müssen dies nicht wirklich deklarieren, es sei denn, Sie fügen aus irgendeinem Grund andere Schaltflächen in Ihrem `<form>` ein und Sie möchten klarstellen, welche die Übermittlungsschaltfläche ist. Dies ist sehr selten.
- `<button type="reset">` erstellt eine _Zurücksetzen-Schaltfläche_ — dies löscht sofort alle Daten aus dem Formular und setzt es in seinen Anfangszustand zurück. **Verwenden Sie keine Zurücksetzen-Schaltflächen** — sie waren in den frühen Tagen des Webs beliebt, aber sie sind in der Regel mehr störend als hilfreich. Die meisten Menschen haben erlebt, dass sie ein langes Formular ausfüllen, nur um versehentlich die Zurücksetzungsschaltfläche statt der Übermittlungsschaltfläche zu klicken, was bedeutet, dass sie von vorne beginnen müssen.
- `<button type="button">` erstellt eine Schaltfläche mit demselben Verhalten wie Schaltflächen, die außerhalb von `<form>`-Elementen angegeben sind. Wie wir bereits gesehen haben, tun sie von Natur aus nichts, und es ist JavaScript erforderlich, um ihnen Funktionalität zu geben.

> [!NOTE]
> Sie können die oben genannten Schaltflächentypen auch mit einem `<input>` Element mit den gleichen `type`-Werten erstellen — [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit), [`<input type="reset">`](/de/docs/Web/HTML/Reference/Elements/input/reset) und [`<input type="button">`](/de/docs/Web/HTML/Reference/Elements/input/button). Diese haben jedoch viele Nachteile im Vergleich zu ihren `<button>` Gegenstücken. Sie sollten `<button>` verwenden.

## Ein Exkurs zur Barrierefreiheit

Wir haben bereits über die Bedeutung von Formularlabels für die Zugänglichkeit gesprochen, möchten jedoch auch einige Kommentare zur allgemeinen Bedeutung der Verwendung der richtigen semantischen Elemente zur Erstellung von Formularen abgeben (beispielsweise verwenden Sie ein `<button>`, um Ihr Formular zu übermitteln, und kein `<div>`, das so programmiert ist, dass es sich wie ein `<button>` verhält.) Es ist durchaus möglich, eine Kombination aus CSS und JavaScript zu verwenden, um so ziemlich jedes HTML-Element wie ein Formularelement aussehen und sich verhalten zu lassen. Entwickler tun dies in der Regel aus Designgründen – einige Formularelemente sind schwer zu gestalten.

Doch wenn Sie dies tun, machen Sie sich und Ihren Benutzern das Leben schwerer. Der Browser bietet mehrere `<button>`- und Formularelementfunktionen von Haus aus, ohne dass JavaScript oder anderer zusätzlicher Code erforderlich ist, um Formulare benutzerfreundlicher für alle Benutzer zu machen.

Zum Beispiel:

- Semantische Elemente werden von unterstützenden Technologien wie Bildschirmlesern verstanden, die ihre Bedeutung an Benutzer kommunizieren, die sie nicht sehen können.
- Formularelemente und Schaltflächen sind standardmäßig tastaturzugänglich. Im vorherigen Beispiel können Sie mit <kbd>Tab</kbd> und <kbd>Shift</kbd> + <kbd>Tab</kbd> (das „Tabbing“ genannt wird) vor- und rückwärts zwischen den Formularelementen navigieren.
- Beachten Sie auch, wie das Tabbing zwischen den Formularelementen das aktuell fokussierte Element mit einem blauen Rahmen hervorhebt (als **Fokusrahmen** bezeichnet). Dies ist eine wichtige Funktion für Tastaturbenutzer, um zu wissen, wo sie sich derzeit im Formular befinden.

Wenn Sie nicht die richtigen semantischen Elemente verwenden, um Ihre Formulare zu implementieren, müssen Sie all diese Funktionalitäten selbst neu implementieren, andernfalls verhalten sich Ihre Formularelemente möglicherweise nicht wie erwartet und wirken fehlerhaft. Das summiert sich alles.

## Andere Steuerelementtypen

Es gibt viele andere Steuerungstypen, die Sie verwenden können, um Daten in einem Formular zu sammeln. Schauen wir uns ein etwas komplexeres Beispiel an und erkunden und erklären es dann.

> [!NOTE]
> In diesem Beispiel gehen wir davon aus, dass der Benutzer bereits registriert und angemeldet ist, weshalb keine Angaben wie Name und E-Mail-Adresse gesammelt werden müssen.

```html live-sample___form-other-controls
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Second form</title>
  </head>
  <body>
    <form action="./payment_page" method="get">
      <h2>Register for the meetup</h2>
      <fieldset>
        <legend>Choose hotel room type:</legend>
        <div>
          <input
            type="radio"
            id="hotelChoice1"
            name="hotel"
            value="economy"
            checked />
          <label for="hotelChoice1">Economy (+$0)</label>

          <input type="radio" id="hotelChoice2" name="hotel" value="superior" />
          <label for="hotelChoice2">Superior (+$50)</label>

          <input
            type="radio"
            id="hotelChoice3"
            name="hotel"
            value="penthouse"
            disabled />
          <label for="hotelChoice3">Penthouse (+$150)</label>
        </div>
      </fieldset>
      <fieldset>
        <legend>Choose classes to attend:</legend>
        <div>
          <input type="checkbox" id="yoga" name="yoga" />
          <label for="yoga">Yoga (+$10)</label>

          <input type="checkbox" id="coffee" name="coffee" />
          <label for="coffee">Coffee roasting (+$20)</label>

          <input type="checkbox" id="balloon" name="balloon" />
          <label for="balloon">Balloon animal art (+$5)</label>
        </div>
      </fieldset>
      <p>
        <label for="transport">How are you getting here:</label>
        <select name="transport" id="transport">
          <option value="">--Please choose an option--</option>
          <option value="plane">Plane</option>
          <option value="bike">Bike</option>
          <option value="walk">Walk</option>
          <option value="bus">Bus</option>
          <option value="train">Train</option>
          <option value="jetPack">Jet pack</option>
        </select>
      </p>
      <p>
        <label for="comments">Any other comments:</label>
        <textarea id="comments" name="comments" rows="5" cols="33"></textarea>
      </p>
      <p>
        <button>Continue to payment</button>
      </p>
    </form>
  </body>
</html>
```

Dies wird wie folgt dargestellt:

{{EmbedLiveSample("form-other-controls", "100%", "500", , , , , "allow-forms")}}

Wir empfehlen Ihnen, dieses Beispiel in einem separaten Browser-Tab zu öffnen, während Sie die nächsten Abschnitte durchgehen, in denen wir uns jeden Steuerungstyp der Reihe nach ansehen. Um dies zu erreichen, kopieren Sie den Code in eine HTML-Datei mit Ihrem Code-Editor und öffnen Sie ihn in einem Browser-Tab.

Bevor Sie fortfahren, spielen Sie mit den verschiedenen Formularelementen in Ihrer lokalen Kopie und wählen Sie einige Werte aus. Versuchen Sie, das Formular zu übermitteln und sehen Sie, wie die Daten in der URL aussehen.

### Optionsknöpfe

Die "Wähle Hotelzimmer-Typ" Knöpfe werden mit [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio) Steuerelementen implementiert. Diese werden als eine Reihe von Schaltflächen gerendert, bei denen jeweils nur eine Taste gleichzeitig ausgewählt sein kann – Sie können nicht mehr als eine gleichzeitig auswählen. Sie sind nach den Tasten auf altmodischen Radios benannt, bei denen Sie eine Taste drücken und die zuvor ausgewählte wieder herausspringt.

Unser Beispielcode sieht wie folgt aus:

```html
<fieldset>
  <legend>Choose hotel room type:</legend>
  <div>
    <input
      type="radio"
      id="hotelChoice1"
      name="hotel"
      value="economy"
      checked />
    <label for="hotelChoice1">Economy (+$0)</label>

    <input type="radio" id="hotelChoice2" name="hotel" value="superior" />
    <label for="hotelChoice2">Superior (+$50)</label>

    <input
      type="radio"
      id="hotelChoice3"
      name="hotel"
      value="penthouse"
      disabled />
    <label for="hotelChoice3">Penthouse (+$150)</label>
  </div>
</fieldset>
```

`radio`-Eingabetypen funktionieren meistens wie `text`-Eingabetypen, aber mit einigen Unterschieden:

- Die `name`-Attribute für jede Optionsfeldgruppe müssen denselben Wert enthalten, um sie zu einer Einheit zu verbinden. Wenn sie unterschiedliche Werte enthalten, sind sie effektiv separate Gruppen mit verschiedenen Werten bei der Übermittlung.
- Sie müssen ein `value`-Attribut angeben, das den Wert enthält, der für jedes Optionsfeld übermittelt werden soll. Der übermittelte Wert wird ein Name/Wert-Paar sein, aber der Name wird immer derselbe sein, zum Beispiel `hotel=economy` oder `hotel=superior`.
- Das `<label>` für jedes Optionsfeld sollte diese spezifische Wertwahl beschreiben, anstatt den Gesamtwert, den Sie auswählen. Der bevorzugte Weg, um eine Beschreibung der Gesamtwertauswahl bereitzustellen, besteht darin, sie in ein {{htmlelement("fieldset")}} zu wickeln, das ein {{htmlelement("legend")}}-Element als Kind hat und die Beschreibung enthält.

> [!NOTE]
> Neben der Strukturierung und Kennzeichnung von Formularen haben Feldsets andere Verwendungen, wie zum Beispiel das [Deaktivieren](#deaktivieren_von_formularelementen) eines gesamten Satzes von Steuerelementen als eine Einheit.

Es ist auch zu beachten, dass wir das `checked`-Attribut auf das erste Optionsfeld angewendet haben – dies bewirkt, dass es ausgewählt wird, wenn die Seite zum ersten Mal lädt. Dadurch wird immer eine Option ausgewählt sein und Sie können ein Optionsfeld nicht abwählen, ohne ein anderes auszuwählen.

Versuchen Sie das `checked`-Attribut vom ersten Optionsfeld zu entfernen, speichern Sie, und laden Sie dann neu, um den Effekt zu sehen. Fügen Sie es wieder ein, bevor Sie fortfahren.

#### Deaktivieren von Formularelementen

Im Optionsfeld-Beispiel werden Sie feststellen, dass das dritte Optionsfeld das Attribut `disabled` gesetzt hat. Dies bewirkt, dass das gerenderte Steuerelement ausgegraut und nicht auswählbar ist. Dies ist in vielen Situationen nützlich, in denen eine Option normalerweise verfügbar ist, aber gerade jetzt nicht. Zum Beispiel könnte ein Produkt nicht auf Lager sein oder, wie in unserem Beispiel, sind Penthouse-Suiten alle ausgebucht!

Sie können das `disabled`-Attribut auf jedes Formularelement setzen, einschließlich `<button>`-Elemente. `<fieldset>`-Elemente können auch das `disabled`-Attribut akzeptieren – dies bewirkt, dass jedes Formularelement innerhalb des Feldsets deaktiviert wird.

Versuchen Sie, das `disabled`-Attribut auf die beiden `<fieldset>`-Elemente zu setzen, speichern Sie, und laden Sie dann neu, um den Effekt zu sehen. Entfernen Sie sie wieder, bevor Sie fortfahren.

### Kontrollkästchen

Unsere "Kurse, die besucht werden sollen"-Auswählelemente werden mit [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) Steuerelementen implementiert. Diese rendern sich als eine Reihe von An/Aus-Zustandskontrollkästchen. Im Gegensatz zu Optionsknöpfen können Sie mehr als eins gleichzeitig auswählen.

```html
<fieldset>
  <legend>Choose classes to attend:</legend>
  <div>
    <input type="checkbox" id="yoga" name="yoga" />
    <label for="yoga">Yoga (+$10)</label>

    <input type="checkbox" id="coffee" name="coffee" />
    <label for="coffee">Coffee roasting (+$20)</label>

    <input type="checkbox" id="balloon" name="balloon" />
    <label for="balloon">Balloon animal art (+$5)</label>
  </div>
</fieldset>
```

Wie Sie aus den Code-Snippets sehen können, werden Optionsknöpfe und Kontrollkästchen auf sehr ähnliche Weise implementiert (sie können auch `checked`-Attribute annehmen, um sie vorausgewählt anzuzeigen, wenn die Seite lädt). Sie verhalten sich auch recht ähnlich, außer dass Optionsknöpfe Ihnen erlauben, null oder eins von vielen auszuwählen, während Kontrollkästchen Ihnen erlauben, null oder mehr von vielen auszuwählen.

Der Hauptunterschied (abgesehen vom `type`-Wert!) besteht darin, dass jedes Kontrollkästchen einen anderen `name`-Wert hat und ihnen in der Regel keine `value`-Attribute vergeben werden. Im Verhalten bedeutet dies, dass sie unterschiedliche Datenwerte darstellen, während eine Optionsknopfgruppe nur einen repräsentiert. Bei der Übermittlung wird jeder Wert mit einem Wert von `on` gesendet, wenn das Kontrollkästchen aktiviert war – `yoga=on`, `balloon=on` usw.

> [!NOTE]
> Es ist möglich, den gesendeten Wert für ein Kontrollkästchen zu ändern, indem ihm ein `value`-Attribut gegeben wird, zum Beispiel: `<input type="checkbox" id="yoga" name="yoga" value="yes" />` würde `yoga=yes` senden, wenn es aktiviert ist. Allerdings gibt es keinen großen Grund dies zu tun. Ein Kontrollkästchen wird entweder mit einem einzelnen Wert gesendet, wenn es aktiviert ist, oder es wird überhaupt nicht gesendet. Es spielt keine große Rolle, welcher Wert an den Server gesendet wird.

### Dropdown-Menüs

Dropdown-Menüs, wie zum Beispiel das Auswahlsteuerelement "Wie kommen Sie hierhin" in unserem Beispiel, werden nicht mit einem `<input>` Typ, sondern mit den {{htmlelement("select")}}- und {{htmlelement("option")}}-Elementen implementiert:

```html
<label for="transport">How are you getting here:</label>
<select name="transport" id="transport">
  <option value="">--Please choose an option--</option>
  <option value="plane">Plane</option>
  <option value="bike">Bike</option>
  <option value="walk">Walk</option>
  <option value="bus">Bus</option>
  <option value="train">Train</option>
  <option value="jetPack">Jet pack</option>
</select>
```

Das `<select>`-Element umschließt alle verschiedenen Wertauswahlmöglichkeiten. Hierbei setzen Sie das `id`-Attribut, das das Steuerelement mit seinem Label assoziiert, und das `name`-Attribut, das den Namen des zu übermittelnden Datenelements festlegt.

Jeder mögliche Wert für das Datenelement wird durch ein `<option>`-Element dargestellt, das innerhalb des `<select>`-Elements verschachtelt ist. Jedes `<option>`-Element kann ein `value`-Attribut aufnehmen, das den Wert spezifiziert, der übermittelt wird, wenn diese Option aus der Dropdown-Liste ausgewählt wird. Wenn Sie kein `value` angeben, wird der Text innerhalb der `<option></option>`-Tags als Wert verwendet.

> [!NOTE]
> Wenn Sie möchten, dass eine bestimmte Option beim Laden der Seite vorausgewählt ist, können Sie das `selected`-Attribut zum entsprechenden `<option>`-Element hinzufügen.

### Mehrzeilige Texteingabefelder

Mehrzeilige Texteingabefelder werden mit {{htmlelement("textarea")}}-Elementen erstellt:

```html
<label for="comments">Any other comments:</label>
<textarea id="comments" name="comments" rows="5" cols="33"></textarea>
```

Sie verhalten sich auf die gleiche Weise wie `<input type="text">`-Elemente, außer dass sie es erlauben, mehrere Zeilen Text einzugeben. Das `rows`-Attribut gibt die Zahl der Zeilen an, die das Textfeld standardmäßig hoch ist, während das `cols`-Attribut die Zahl der Spalten angibt, die das Textfeld standardmäßig breit ist. Wenn sie nicht spezifiziert sind, werden die Werte `cols="20"` und `rows="2"` verwendet.

Die meisten Browser rendern Textfelder mit einem Ziehgriff in einer Ecke, der zum Ändern der Größe verwendet werden kann. Versuchen Sie, diesen zu verwenden, um die Größe des Textfeldes in unserem Demo zu ändern.

## Formularvalidierung

Früher haben wir uns einige der grundlegenden clientseitigen Formularvalidierungen angesehen, die der Browser bietet. Das `required`-Attribut wird verwendet, um anzugeben, dass ein Feld ausgefüllt werden muss, bevor das Formular abgesendet werden kann; es prüft auch, dass der richtige Werttyp für spezifische Werttypen wie E-Mail-Adressen, URLs, Zahlen usw. eingegeben wird. Die Validierung ist aus zwei Hauptgründen wichtig:

- Sicherstellen, dass Daten im richtigen Format eingereicht werden, damit sie in Ihrer Anwendung keine Fehler verursachen.
- Sicherstellen, dass Daten keine Sicherheitsprobleme verursachen. Böse Menschen wissen, wie man Daten so einreicht, dass sie in unsicheren Anwendungen Befehle ausführen können, um Datenbanken zu löschen oder ein System zu übernehmen.

Formularvalidierung ist ein großes Thema, das den Rahmen dieses Artikels sprengen würde, also belassen wir es vorerst dabei. Beachten Sie einfach, dass es zwei Arten der Formularvalidierung gibt:

- Clientseitige Validierung, die im Browser stattfindet und mit einer Kombination aus Formularvalidierungsattributen (wie `required`) und JavaScript implementiert wird. Clientseitige Validierung ist nützlich, um Benutzern sofortige Hinweise zu geben, wenn sie falsche Daten eingegeben haben, aber nicht so effektiv beim Stoppen von böswilligen Daten durchzukommen. Es ist zu einfach, JavaScript zu deaktivieren oder clientseitigen Code zu ändern, sodass die Validierung nicht mehr funktioniert.
- Serverseitige Validierung, die auf dem Server stattfindet, implementiert mit welcher Sprache auch immer der Server verwendet. Schlecht formatierte Nachrichten können zufällig oder absichtlich an einen Server gesendet werden. Konventionelle Weisheit ist es, sicherzustellen, dass Ihr Server nichts von dem vertraut, was ein Client sendet, um Bugs oder Sicherheitsprobleme durch fehlerhafte Nachrichten zu vermeiden. Serverseitige Validierung ist großartig, um böswillige Nachrichten zu stoppen, da es schwieriger ist, den auf dem Server laufenden Code zu manipulieren. Serverseitige Validierung ist nicht so gut darin, Benutzern Hinweise auf falsche Daten zu geben, da die Daten an den Server zur Validierung gesendet werden müssen, bevor das Ergebnis zurück zum Client gesendet wird, bevor der Benutzer benachrichtigt werden kann.

Kurz gesagt, entscheiden Sie nicht zwischen clientseitiger oder serverseitiger Validierung - Sie benötigen beides. Sie benötigen eine clientseitige Validierung, um den Benutzern Rückmeldungen zu ihrer Eingabe zu geben, und eine serverseitige Validierung, um sicherzustellen, dass Nachrichten in einem Format vorliegen, das Ihr Server sicher verarbeiten kann. Wenn Sie mehr über Validierung lernen möchten, ist ein guter Anfangspunkt [Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation).

## Zusammenfassung

Das war's für jetzt. Es gibt noch viel mehr über Formulare zu wissen, aber fürs Erste haben wir Ihnen genug Verständnis vermittelt, um in Ihren Studien voranzukommen.

Als nächstes werden wir uns ansehen, wie Sie Probleme in Ihrem HTML-Code debuggen können.

## Siehe auch

- [Webformulare — Arbeiten mit Benutzerdaten](/de/docs/Learn_web_development/Extensions/Forms)

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content/Debugging_HTML", "Learn_web_development/Core/Structuring_content")}}
