---
title: Formulare und Schaltflächen in HTML
short-title: Formulare und Schaltflächen
slug: Learn_web_development/Core/Structuring_content/HTML_forms
l10n:
  sourceCommit: 62ab95d20f246369cfab654c5a7a8727deb21ea6
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content/Debugging_HTML", "Learn_web_development/Core/Structuring_content")}}

HTML-Formulare und -Schaltflächen sind leistungsstarke Werkzeuge zur Interaktion mit den Nutzern einer Website. Am häufigsten bieten sie Benutzern Steuerungen zur Manipulation einer Benutzeroberfläche (UI) oder zur Eingabe von Daten, wenn erforderlich.

In diesem Artikel stellen wir eine Einführung in die Grundlagen von Formularen und Schaltflächen vor. Es gibt noch viel mehr zu wissen - viele Eingabetypen und Formularfunktionen werden nicht erwähnt - aber dieser Artikel wird Ihnen eine solide Grundlage für die meisten Fälle bieten. Sie können die fortgeschrittene oder spezialisierte Verwendung entsprechend Ihrem Bedarf während Ihrer gesamten Karriere lernen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML, wie in
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        > abgedeckt. Textuelle Semantik wie <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
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
          <li>Ein Bewusstsein dafür, dass Formulare und Schaltflächen zusammen mit Links die Hauptwerkzeuge sind, mit denen Benutzer mit einer Website interagieren können.</li>
          <li>Unterschiedliche Schaltflächentypen.</li>
          <li>Häufige <code>&lt;input&gt;</code>-Typen.</li>
          <li>Häufige Attribute wie <code>name</code> und <code>value</code>.</li>
          <li>Das <code>&lt;form&gt;</code>-Element und die Grundlagen der Formularübertragung.</li>
          <li>Formulare mit Labels und korrekter Semantik zugänglich machen.</li>
          <li>Andere Steuerungstypen: <code>&lt;textarea&gt;</code>, <code>&lt;select&gt;</code> und <code>&lt;option&gt;</code>.</li>
          <li>Grundlagen der Client-seitigen Validierung.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Interaktion mit Benutzern

Bisher haben Sie im Kurs ein paar Möglichkeiten kennengelernt, wie Benutzer mit dem Web interagieren können:

- [Links](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links) können verwendet werden, um zu verschiedenen Inhaltsbereichen zu navigieren, entweder auf derselben Seite oder auf einer anderen Seite.
- [`<video>` und `<audio>`](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)-Elemente bieten in der Regel Steuerungen wie Wiedergabe/Pause, Vorlauf, Rücklauf usw., die es den Benutzern ermöglichen, Medieninhalte nach ihren Wünschen zu konsumieren.

Diese Funktionen erleichtern jedoch tendenziell einseitige Interaktionen, bei denen Benutzer Inhalte passiv konsumieren. Das ist in Ordnung, aber das Web ist eine wechselseitige Erfahrung. Websites-Benutzer legen Präferenzen dafür fest, wie sie Inhalte und Dienste erleben möchten. Sie bestellen Taxis und fordern Rückrufe an. Sie geben Feedback und beschweren sich. Sie kaufen Produkte und lassen sie sich nach Hause liefern.

Um diese wechselseitige Erfahrung zu ermöglichen, müssen Sie Schaltflächen und Formulare verwenden.

Schaltflächen werden normalerweise mit HTML-{{htmlelement("button")}}-Elementen erstellt (sie werden auch manchmal mit {{htmlelement("input")}}-Elementen erstellt, bei denen das `type`-Attribut auf einen Wert wie `button` oder `submit` gesetzt ist). Diese Druckschaltflächen sind für allgemeine Zwecke gedacht — Sie können sie so verdrahten, dass sie jede gewünschte Funktionalität auslösen, die nur durch Ihre Vorstellungskraft und Ihre Programmierkenntnisse begrenzt ist.

Formulare werden mit Elementen wie {{htmlelement("form")}}, {{htmlelement("label")}}, {{htmlelement("input")}} und {{htmlelement("select")}} erstellt. Formularelemente können komplexere Steuerungen schaffen, als einfache Schaltflächen ermöglichen — zum Beispiel ein Dropdown-Menü mit verschiedenen Optionen, aus denen Sie zwischen verschiedenen Themen für ein Benutzeroberfläche-Element wählen können.

Entscheidend ist jedoch, dass sie auch zur Erstellung von Formularen für Benutzer verwendet werden können, die Informationen an einen Website-Server übermitteln müssen. Denken Sie an E-Commerce-Sites — wenn Sie ein Produkt zum Kauf suchen möchten, verwenden Sie ein Formular, um Suchbegriffe einzugeben. Wenn Sie einige Artikel bezahlen und die Lieferung abschließen möchten, verwenden Sie ein Formular, um Ihre Postadresse einzugeben, und ein anderes Formular, um Ihre Kreditkartendaten einzugeben.

Wir konzentrieren uns in diesem Artikel hauptsächlich auf diese - eher traditionelle - Verwendung von Formularelementen. Beachten Sie, dass auch häufig Schaltflächen innerhalb von Formularen verwendet werden, um die eingegebenen Daten an den Server zu übermitteln.

Mit dieser wichtigen Theorie im Hinterkopf, lassen Sie uns fortfahren, den Code zu erkunden und zu sehen, wie Schaltflächen und Formulare implementiert werden.

## Schaltflächen

Wie oben angedeutet, haben Schaltflächen einige Hauptverwendungen im Web. Erstens werden sie verwendet, um Funktionalitäten zu starten, was nützlich ist, wenn UI-Steuerelemente erstellt werden. Die einfachste Schaltfläche wird mit dem folgenden Code implementiert:

```html live-sample___basic-button
<button>Press me</button>
```

Dies wird wie folgt gerendert:

{{EmbedLiveSample("basic-button", "100%", "60")}}

Der Text, der zwischen den `<button></button>`-Tags erscheint, wird innerhalb der Schaltfläche gerendert, und er erhält vom Browser ein grundlegendes Styling, sodass er standardmäßig wie eine Schaltfläche aussieht und sich verhält. So weit, so gut. Es gibt hier jedoch ein Problem — unsere einsame Schaltfläche wird allein nichts Nützliches tun. Um sie nützlich zu machen, müssen Sie sie entweder in einem Formular platzieren (was wir später behandeln werden) oder etwas JavaScript hinzufügen.

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

Würde es Ihnen die folgende Ausgabe geben — versuchen Sie, darauf zu klicken:

{{EmbedLiveSample("basic-button-with-js", "100%", "60")}}

Es wird nicht erwartet, dass Sie jetzt verstehen, wie das JavaScript funktioniert. Sie werden später im Kurs mehr darüber lernen.

Im nächsten Abschnitt sehen Sie eine Demonstration der zweiten Hauptverwendung von Schaltflächen — das Übermitteln von Formularen.

## Der Aufbau eines Formulars

Ein einfaches Formular enthält drei Dinge:

- Ein {{htmlelement("form")}}-Element, das den gesamten anderen Formularinhalt umschließt. Alle Formularsteuerelemente innerhalb der `<form></form>`-Tags sind Teil desselben Formulars, und ihre Daten werden eingeschlossen, wenn das Formular übermittelt wird.
- Ein oder mehrere Paare, bestehend aus einem {{htmlelement("label")}}-Element und einem Formularsteuerelement (in der Regel ein {{htmlelement("input")}}-Element, es gibt jedoch auch andere Typen, beispielsweise {{htmlelement("select")}}):
  - Das Formularsteuerelement ermöglicht es dem Benutzer, Daten auszuwählen oder einzugeben, die beim Absenden des Formulars zum Server gesendet werden.
  - Das `<label>`-Element bietet ein identifizierendes Label, das mit dem Formularsteuerelement verbunden ist und die Daten beschreibt, die eingegeben werden sollen.
- Ein {{htmlelement("button")}}-Element, das zum Übermitteln des Formulars verwendet wird.

Schauen wir uns ein einfaches Beispiel an, das die oben genannten drei Punkte enthält. Dieses Formular könnte verwendet werden, um den Namen und die E-Mail-Adresse eines Benutzers anzufordern, um ihn für einen Newsletter anzumelden (keine Sorge — es ist mit keinem Server verbunden, sodass es derzeit nichts tut).

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

Dies wird wie folgt gerendert:

{{EmbedLiveSample("form-anatomy", "100%", "200", , , , , "allow-forms")}}

Wenn Sie sofort auf "Sign me up!" klicken, sehen Sie einen Validierungsfehler, da keine Daten eingegeben wurden. Wenn Sie die Felder mit einem Namen und einer E-Mail-Adresse ausfüllen und dann auf "Sign me up!" klicken, sehen Sie eine `404`-Fehlermeldung.

Wir werden später erklären, warum. Bevor Sie weitergehen, kopieren Sie den vorherigen HTML-Code in eine neue HTML-Datei mit Ihrem [Code-Editor](/de/docs/Learn_web_development/Getting_started/Environment_setup/Code_editors) und öffnen Sie sie in einem neuen Browser-Tab.

### Das `<form>`-Element

Wie wir bereits gesagt haben, fungiert das {{htmlelement("form")}}-Element als äußerer Wrapper für das Formular und gruppiert alle Formularsteuerelemente darin. Wenn die `<button>` gedrückt wird, werden alle durch die Formularsteuerelemente repräsentierten Daten an den Server übermittelt. Das `<form>`-Element kann viele Attribute haben, aber die beiden wichtigsten, die wir in unserem Beispiel enthalten haben, sind folgende:

- `action`: Enthält einen Pfad zu der Seite, an die wir die übermittelten Formulardaten senden möchten, um verarbeitet zu werden. Später, nachdem Sie das Formular übermittelt haben, sehen Sie `/submit_page` in der URL enthalten. Sie erhalten auch eine {{HTTPStatus("404")}}-Fehlerantwort, weil die Seite tatsächlich nicht existiert, aber das ist für jetzt in Ordnung.
- `method`: Gibt die [Methode](/de/docs/Web/HTTP/Reference/Methods) zur Datenübertragung an, die Sie verwenden möchten, um die Formulardaten an den Server zu senden. Machen Sie sich darüber vorerst keine Sorgen; der Wert `get` bewirkt, dass die Daten als Parameter an das Ende der URL angehängt gesendet werden.

#### Überprüfen der übermittelten Daten

1. Gehen Sie zu dem Beispiel im separaten Tab, versuchen Sie, einen Namen "Bob" und eine E-Mail-Adresse "bob@bob.com" einzugeben.
2. Drücken Sie die `<button>`.

Die `action`- und `method`-Attribute bewirken, dass die Formulardaten in einer URL in etwa wie folgt gesendet werden:

```plain
/some/url/submit_page?name=Bob&email=bob%40bob.com
```

#### Strukturierung von Formularen

Sie können innerhalb eines `<form>`-Elements beliebige HTML-Elemente einfügen, um die Formularelemente selbst zu strukturieren und Container zu bieten, die mit CSS zum Styling usw. angesprochen werden können.

In unserem Beispiel haben wir ein [Überschriftselement](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) (`<h2>`) hinzugefügt, um den Zweck des Formulars zu beschreiben.

Wir haben auch jedes Input/Label-Paar und die Senden-Schaltfläche in einem separaten {{htmlelement("p")}} platziert, sodass jeder auf einer separaten Zeile erscheint. Diese Elemente sind standardmäßig inline, das bedeutet, dass sie alle auf derselben Linie sitzen würden, wenn wir dies nicht tun würden.

Dies ist ein häufiges Muster für die Formularstrukturierung. Einige Leute verwenden `<p>`-Elemente, um ihre Formularelemente zu trennen, andere verwenden {{htmlelement("div")}}, {{htmlelement("section")}} oder sogar {{htmlelement("li")}}-Elemente. Es spielt keine große Rolle, solange die verwendeten Elemente einen semantischen Sinn ergeben. Zum Beispiel macht es Sinn, Formularelementgruppen in separate Absätze oder Abschnitte von Inhalten oder sogar Einträge in einer Liste zu unterteilen. Es würde weniger Sinn machen, sie als [Blockzitate](/de/docs/Web/HTML/Reference/Elements/blockquote), [Asides](/de/docs/Web/HTML/Reference/Elements/aside) oder [Adressen](/de/docs/Web/HTML/Reference/Elements/address) darzustellen.

Es gibt ein spezialisiertes Element zum Gruppieren von Formularelementen, das {{htmlelement("fieldset")}} genannt wird. Dies ist in bestimmten Situationen nützlich, wie z. B. in komplexen Formularen und beim Gruppieren mehrerer Kontrollkästchen und Optionsfelder. Wir werden später auf ein paar `<fieldset>`-Beispiele eingehen.

### `<input>`-Elemente

Die {{htmlelement("input")}}-Elemente repräsentieren die verschiedenen Datenelemente, die in das Formular eingegeben werden. Lassen Sie uns eines der Beispiele aus unserem Basisformular studieren:

```html
<input type="text" name="name" id="name" required />
```

Die Attribute sind wie folgt:

- `type`: Gibt an, welchen Typ von Formularsteuerelement erstellt werden soll. Es gibt viele verschiedene Typen von Formularsteuerelementen, von einfachen Textfeldern verschiedener Typen bis zu Optionsfeldern, Kontrollkästchen und mehr. Type `text` rendert ein einfaches Textfeld, das beliebige Werte akzeptieren kann.
- `name`: Gibt einen Namen für das Datenelement an. Wenn das Formular übermittelt wird, werden die Daten als Name/Wert-Paare gesendet. In jedem Fall ist der Name gleich dem Wert des `name`-Attributs, und der Wert entspricht dem Text, der in das Textfeld eingegeben wird.
- `id`: Gibt eine ID an, die verwendet werden kann, um das Element zu identifizieren. In diesem Fall wird er verwendet, um das Formularelement mit seinem `<label>` zu verbinden.
- `required`: Gibt an, dass ein Wert in das Formularelement eingegeben werden muss, bevor das Formular gesendet werden kann. Dies sollte nur bei Eingaben gesetzt werden, die Sie benötigen, nicht bei optionalen Feldern.

Sie sollten sich bewusst sein, dass einige Eingabetypen normalerweise ihre Werte nicht aus einem eingegebenen Text erhalten. Zum Beispiel rendert [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color) ein Farbwahl-Widget, aus dem Sie eine Farbe wählen, während [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio) ein Optionsfeld-Steuerelement rendert, das ausgewählt oder nicht ausgewählt werden kann.

Bei Optionsfeldern müssen Sie in der Regel den Wert, der bei Auswahl übermittelt werden würde, in einem bestimmten `value`-Attribut bereitstellen. Beachten Sie, dass Sie ein `value`-Attribut für Eingabetypen wie `text` und `color` angeben _können_ — die Wirkung ist, dass der Wert im Formularfeld vorausgefüllt ist, wenn es zuerst gerendert wird.

#### `required`- und `value`-Attribute in Aktion

1. Gehen Sie erneut zu dem in einem separaten Tab geladenen Beispiel und versuchen Sie, das Formular zu senden, ohne einen Wert in eines der Felder einzugeben. Sie werden eine Fehlermeldung neben dem "Name"-Feld sehen, die etwa "Bitte füllen Sie dieses Feld aus" (es variiert je nach Browser) anzeigt. Dies ist das `required`-Attribut — und die standardmäßige Client-seitige Formularvalidierung des Browsers — in Aktion.
2. Versuchen Sie nun, das Formular mit einem gültigen Namen im ersten Feld zu senden, aber einem Wert, der keine gültige E-Mail-Adresse im zweiten Feld ist (etwas wie "aaaa" wird genügen). Diesmal sehen Sie eine Fehlermeldung neben dem "Email"-Feld, die etwa "Bitte geben Sie eine Email-Adresse ein" anzeigt.
3. Versuchen Sie, das Formular zu bearbeiten, um `value="Bob"` beim ersten Eingabefeld einzufügen. Wenn Sie den Code neu laden, sehen Sie, dass das erste Feld standardmäßig den Wert "Bob" enthält.

#### Spezialisierte Textfeldeingaben

Die zweite Übung oben wirft einen interessanten Punkt auf. Das zweite Eingabefeld erwartet speziell eine E-Mail-Adresse und validiert eingegebene Werte entsprechend. Wenn Sie das Formular erneut betrachten, sehen Sie, warum — das zweite `<input>` hat einen `type` von `email`. Es gibt mehrere spezialisierte Textfeldeingabelobewährten für bestimmte Datentypen — [`<input type="number">`](/de/docs/Web/HTML/Reference/Elements/input/number), [`<input type="password">`](/de/docs/Web/HTML/Reference/Elements/input/password), [`<input type="tel">`](/de/docs/Web/HTML/Reference/Elements/input/tel) usw.

Folgen Sie einigen der oben genannten Links, um herauszufinden, wofür diese Eingabetypen verwendet werden. Schauen Sie sich unser [`<input>`](/de/docs/Web/HTML/Reference/Elements/input)-Referenzdokument an und sehen Sie, ob Sie noch weitere spezialisierte Eingabetypen für Textfelder finden können.

### `<label>`-Elemente

Wie oben erwähnt, bieten {{htmlelement("label")}}-Elemente identifizierende Labels, die mit Formularelementen verbunden sind, um die Daten zu beschreiben, die darin eingegeben werden sollten. Sie können in `<label>`-Elementen beliebige Textinhalte einfügen, sollten aber genau beschreiben, welche Daten im zugehörigen Formularelement erwartet werden. Die Zuordnung wird erstellt, indem dem Formularelement ein `id`-Attribut zugewiesen wird und das `<label>`-Elelement ein `for`-Attribut mit demselben Wert wie die `id` des Steuerelements erhält.

Zum Beispiel:

```html
<label for="name">Name (required):</label>
<input type="text" name="name" id="name" required />
```

`<label>`-Elemente sind aus mehreren Gründen wichtig, insbesondere:

- Wenn sehbehinderte Benutzer einen Bildschirmleser verwenden, um ihnen zu helfen, Webinhalte zu lesen und zu interagieren, wird der Bildschirmleser den zugehörigen Label-Text vorlesen, wenn jedes Steuerungselement begegnet wird. Dies erleichtert es den Benutzern zu verstehen, welche Inhalte in jedes Steuerelement eingegeben werden sollten.
- Sie ermöglichen es Ihnen, die Formularelemente durch Klicken auf die Label-Texte sowie die Steuerelemente zu bearbeiten. Dies ist besonders nützlich für Benutzer von Mobiltelefonen, bei denen es schwierig sein kann, ein Formularelement auf einem Touchscreen genau mit dem Finger auszuwählen. In solchen Fällen ist es nützlich, den **Treffbereich** zu vergrößern.

#### Explizite und implizite Formular-Labels

Der oben gezeigte Formular-Label-Stil wird als **explizites Formular-Label** bezeichnet – die Zuordnung zwischen Steuerung und Label wird explizit über die `id`- und `for`-Attribute hergestellt. Sie können auch ein **implizites Formular-Label** implementieren, indem Sie das Steuerungselement innerhalb des Labels verschachteln, wie folgt:

```html
<label>
  Name (required):
  <input type="text" name="name" required />
</label>
```

Die Verschachtelung schafft eine implizite Zuordnung zwischen Steuerung und Label, und Sie benötigen nicht mehr die `id`- und `for`-Attribute.

Beide Ansätze sind in Ordnung, aber wir empfehlen, die explizite Etikettierungsweise zu verwenden. Dies liegt daran, dass die explizite Verbindung normalerweise einfacher zu erkennen und zu verstehen ist, insbesondere wenn Ihr HTML-Code immer komplexer wird. Darüber hinaus behandeln Screenreader (und andere unterstützende Technologien) implizite Labels nicht immer korrekt.

Sie können mehr über bewährte Verfahren zur Formularetikettierung in [HTML Inputs und Labels: Eine Liebesgeschichte](https://css-tricks.com/html-inputs-and-labels-a-love-story/), csstricks.com (2021) lesen.

### Das `<button>`-Element

Wenn ein {{htmlelement("button")}}-Element innerhalb eines `<form>`-Elements enthalten ist, ist sein Standardverhalten, dass es das Formular übermittelt, vorausgesetzt, es sind keine ungültigen Daten vorhanden, die die Übermittlung durch die Client-seitige Formularvalidierung blockieren. Dieses Verhalten haben Sie bereits beim Spielen mit unserem Basisformularbeispiel oben gesehen.

Es gibt andere Schaltflächenverhalten, die mit dem `type`-Attribut des `<button>`-Elements angegeben werden können:

- `<button type="submit">` deklariert explizit, dass eine Schaltfläche wie eine Senden-Schaltfläche verhalten soll. Sie müssen dies nicht wirklich deklarieren, es sei denn, Sie haben aus irgendeinem Grund weitere Schaltflächen innerhalb Ihres `<form>`, und Sie möchten klarstellen, welche die Senden-Schaltfläche ist. Dies wird sehr selten der Fall sein.
- `<button type="reset">` erstellt eine _Zurücksetzen-Schaltfläche_ — diese löscht sofort alle Daten aus dem Formular und setzt es in seinen Ursprungszustand zurück. **Verwenden Sie keine Zurücksetzen-Schaltflächen** — sie waren in den frühen Tagen des Webs populär, aber sie sind normalerweise mehr störend als hilfreich. Die meisten Menschen haben erlebt, ein langes Formular auszufüllen, nur um versehentlich die Zurücksetzen-Schalter anstelle der Senden-Schaltfläche zu drücken, was bedeutet, dass sie von vorne beginnen müssen.
- `<button type="button">` erstellt eine Schaltfläche mit dem gleichen Verhalten wie Schaltflächen, die außerhalb von `<form>`-Elementen angegeben sind. Wie wir bereits gesehen haben, tun sie standardmäßig überhaupt nichts, und JavaScript ist erforderlich, um ihnen Funktionalität zu geben.

> [!NOTE]
> Sie können die oben genannten Schaltflächentypen auch mit einem `<input>`-Element mit denselben `type`-Werten erstellen — [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit), [`<input type="reset">`](/de/docs/Web/HTML/Reference/Elements/input/reset) und [`<input type="button">`](/de/docs/Web/HTML/Reference/Elements/input/button). Diese haben jedoch viele Nachteile im Vergleich zu ihren `<button>`-Gegenstücken. Sie sollten `<button>` stattdessen verwenden.

## Ein Hinweis zur Barrierefreiheit

Wir haben bereits über die Bedeutung der Formularetiketten für die Barrierefreiheit gesprochen, aber wir wollten auch einige Kommentare zur allgemeinen Bedeutung der Verwendung der korrekten semantischen Elemente für die Erstellung von Formularen einbeziehen (zum Beispiel, verwenden Sie eine `<button>`, um Ihr Formular zu senden und nicht eine `<div>`, die so programmiert ist, dass sie sich wie eine `<button>` verhält). Es ist durchaus möglich, eine Kombination aus CSS und JavaScript zu verwenden, um fast jedes HTML-Element aussehen und sich wie ein Formularelement verhalten zu lassen. Entwickler tun dies in der Regel aus gestalterischen Gründen — einige Formularelemente sind schwer zu stylen.

Wenn Sie dies jedoch tun, machen Sie sich und den Benutzern das Leben schwerer. Der Browser stellt standardmäßig mehrere `<button>`- und Formularelement-Features zur Verfügung, ohne dass JavaScript oder zusätzlicher Code erforderlich wäre, um Formulare für alle Benutzer benutzerfreundlicher zu gestalten.

Zum Beispiel:

- Semantische Elemente werden von unterstützender Technologie wie Screenreadern verstanden, die ihre Bedeutung an Benutzer kommunizieren, die sie nicht sehen können.
- Formularelemente und Schaltflächen sind standardmäßig tastaturbedienbar. Im vorherigen Beispiel versuchen Sie, vorwärts und rückwärts zwischen den Formularelementen mit <kbd>Tab</kbd> und <kbd>Shift</kbd> + <kbd>Tab</kbd> zu navigieren (dies wird "Tabbing" genannt).
- Beachten Sie auch, wie das Durchblättern der Formularelemente dazu führt, dass das fokussierte Element mit einem blauen Umriss hervorgehoben wird (dies wird als **Fokusumriss** bezeichnet). Dies ist eine wichtige Funktion für Tastaturbenutzer, um zu wissen, wo sie sich im Formular gerade befinden.

Wenn Sie nicht die richtigen semantischen Elemente zur Implementierung Ihrer Formulare verwenden, müssen Sie diese gesamte Funktionalität erneut implementieren, ansonsten werden Ihre Formularelemente nicht so funktionieren, wie Benutzer es erwarten, und daher als defekt erscheinen. Es summiert sich alles.

## Andere Steuerungstypen

Es gibt viele andere Steuerungstypen, die Sie verwenden können, um Daten in einem Formular zu sammeln. Schauen wir uns ein etwas komplexeres Beispiel an, und dann werden wir es erkunden und erklären.

> [!NOTE]
> In diesem Beispiel gehen wir davon aus, dass der Benutzer bereits registriert und angemeldet ist, daher müssen keine Angaben wie Name und E-Mail erfasst werden.

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

Dies wird wie folgt gerendert:

{{EmbedLiveSample("form-other-controls", "100%", "500", , , , , "allow-forms")}}

Wir empfehlen Ihnen, dieses Beispiel in einem separaten Browser-Tab zu öffnen, während Sie die nächsten Abschnitte durchgehen, in denen wir jeden Steuerungstyp der Reihe nach betrachten. Um dies zu erreichen, kopieren Sie den Code in eine HTML-Datei mit Ihrem Code-Editor und öffnen Sie sie in einem Browser-Tab.

Bevor Sie fortfahren, spielen Sie mit den verschiedenen Formularelementen in Ihrer lokalen Kopie und wählen Sie einige Werte aus. Versuchen Sie, das Formular zu senden und sehen Sie, wie die in der URL gesendeten Daten aussehen.

### Optionsfelder

Die "Zimmerkategorie im Hotel wählen"-Schaltflächen werden mithilfe von [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio)-Steuerelementen implementiert. Diese werden als ein Satz von Druckknopfelementen gerendert, bei denen jeweils nur eines der Sets gleichzeitig ausgewählt werden kann — Sie können nicht mehr als eines gleichzeitig auswählen. Sie sind nach den Tasten auf altmodischen Radios benannt, bei denen man eine Taste drückt und die zuvor ausgewählte wieder herausspringt.

Unser Beispielcode sieht folgendermaßen aus:

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

`radio`-Eingabetypen funktionieren größtenteils ähnlich wie `text`-Eingabetypen, aber es gibt einige Unterschiede:

- Die `name`-Attribute für jedes Set von Optionsfeldern müssen denselben Wert enthalten, um sie als ein Set zu assozieren. Wenn sie unterschiedliche Werte enthalten, sind sie praktisch separate Sets, mit unterschiedlichen Werten bei der Übermittlung.
- Sie müssen ein `value`-Attribut angeben, das den zu übermittelnden Wert für jedes Optionsfeld enthält. Der übermittelte Wert wird ein Name/Wert-Paar sein, aber der Name wird immer derselbe sein, beispielsweise `hotel=economy` oder `hotel=superior`.
- Das `<label>` für jedes Optionsfeld sollte diese spezielle Wertewahl beschreiben und nicht die Wahl des gesamten Wertes. Die bevorzugte Methode, um eine Beschreibung der gesamten Wertewahl bereitzustellen, besteht darin, sie in einem {{htmlelement("fieldset")}} zu umschließen, welches ein Kind {{htmlelement("legend")}}-Element als enthaltene Beschreibung annimmt.

> [!NOTE]
> Neben der Strukturierung und Beschriftung von Formularen haben Feldsets andere Verwendungen, wie das [Deaktivieren](#deaktivieren_von_formularelementen) eines gesamten Steuerelementsatzes als einheitliche Einheit.

Es ist auch erwähnenswert, dass wir das `checked`-Attribut auf das erste Optionsfeld angewendet haben — dies bewirkt, dass es bei jedem Seitenladen ausgewählt wird. Das bedeutet, dass immer eine Option ausgewählt wird, und Sie können ein Optionsfeld nicht abwählen, ohne ein anderes auszuwählen.

Versuchen Sie, das `checked`-Attribut vom ersten Optionsfeld zu entfernen, speichern, dann neu laden, um den Effekt zu sehen. Setzen Sie es zurück, bevor Sie fortfahren.

#### Deaktivieren von Formularelementen

Im Beispiel für das Optionsfeld werden Sie feststellen, dass das dritte Optionsfeld das `disabled`-Attribut gesetzt hat. Dies bewirkt, dass das gerenderte Steuerelement ausgegraut und nicht auswählbar ist. Dies ist in vielen Situationen nützlich, in denen eine Option normalerweise verfügbar ist, nur nicht gerade jetzt. Beispielsweise könnte ein Produkt nicht vorrätig sein oder, wie in unserem Beispielsfall, Penthäuser sind alle ausgebucht!

Sie können das `disabled`-Attribut bei jedem Formularelement setzen, einschließlich `<button>`-Elementen. `<fieldset>`-Elemente können auch das `disabled`-Attribut annehmen — dies bewirkt, dass jedes Formularelement innerhalb des Feldsets deaktiviert wird.

Versuchen Sie das `disabled`-Attribut bei den beiden `<fieldset>`-Elementen zu setzen, speichern, dann neu laden, um den Effekt zu sehen. Entfernen Sie sie wieder, bevor Sie fortfahren.

### Kontrollkästchen

Unsere "Klassen zu besuchen"-Auswähler werden mittels [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox)-Steuerelementen implementiert. Diese werden als ein Satz von An/Aus-Zustands-Kontrollkästchen gerendert. Anders als bei Optionsfeldern können Sie mehr als eins gleichzeitig auswählen.

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

Wie Sie aus den Code-Snippets sehen können, sind Optionsfelder und Kontrollkästchen auf sehr ähnliche Weise implementiert (sie können auch `checked`-Attribute annehmen, um sie vorab ausgewählt zu laden, wenn die Seite geladen wird). Sie verhalten sich auch in einer recht ähnlichen Weise, außer dass Optionsfelder es Ihnen erlauben, null oder ein Element aus vielen auszuwählen, während Kontrollkästchen es Ihnen erlauben, null oder mehr Elemente aus vielen auszuwählen.

Der Hauptunterschied (abgesehen vom `type`-Wert!) ist, dass jedes Kontrollkästchen einen unterschiedlichen `name`-Wert hat, und sie haben in der Regel keine `value`-Attribute. Verhaltenstechnisch bedeutet dies, dass sie verschiedene Datenelemente darstellen, wohingegen ein Satz von Optionsfeldern nur eines darstellt. Bei der Übermittlung wird jeder Wert mit einem Wert von `on` gesendet, wenn das Kontrollkästchen aktiviert wurde — `yoga=on`, `balloon=on` usw.

> [!NOTE]
> Es ist möglich, den gesendeten Wert für ein Kontrollkästchen zu ändern, indem man ihm ein `value`-Attribut gibt. Beispielsweise: `<input type="checkbox" id="yoga" name="yoga" value="yes" />` würde `yoga=yes` übermitteln, wenn es aktiviert ist. Allerdings gibt es keinen großen Grund, dies zu tun. Ein Kontrollkästchen wird entweder mit einem einzigen Wert gesendet, wenn es aktiviert wurde, oder es wird überhaupt nicht gesendet. Es spielt nicht wirklich eine große Rolle, welcher Wert an den Server gesendet wird.

### Dropdown-Menüs

Dropdown-Menüs, wie z.B. die Auswahlsteuerung "Wie kommen Sie hierher" in unserem Beispiel werden nicht mit einem `<input>`-Typ, sondern mit den {{htmlelement("select")}}- und {{htmlelement("option")}}-Elementen implementiert:

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

Das `<select>`-Element umschließt alle unterschiedlichen Werteauswahlen. Hier wird das `id`-Attribut gesetzt, das das Steuerelement mit seinem Label assoziiert, und das `name`-Attribut, das den Namen des Datenelements, das übermittelt werden soll, setzt.

Jeder mögliche Wert für das Datenelement wird durch ein `<option>`-Element dargestellt, das im `<select>`-Element verschachtelt ist. Jedes `<option>`-Element kann ein `value`-Attribut enthalten, das den zu submitierenden Wert angibt, wenn diese Option aus der Dropdown-Liste ausgewählt wurde. Wenn Sie keinen `value` angeben, wird der Text innerhalb der `<option></option>`-Tags als Wert verwendet.

> [!NOTE]
> Wenn Sie möchten, dass eine bestimmte Option beim Laden der Seite ausgewählt wird, können Sie ein `selected`-Attribut beim relevanten `<option>`-Element hinzufügen.

### Mehrzeilige Texteingabefelder

Mehrzeilige Texteingabefelder werden mit {{htmlelement("textarea")}}-Elementen erstellt:

```html
<label for="comments">Any other comments:</label>
<textarea id="comments" name="comments" rows="5" cols="33"></textarea>
```

Sie verhalten sich genauso wie `<input type="text">`-Elemente, außer dass sie die Eingabe von mehreren Textzeilen erlauben. Das `rows`-Attribut spezifiziert die Anzahl der standardmäßigen Zeilen, die Textarea bietet, während das `cols`-Attribut die standardmäßige Spaltenanzahl angibt. Wenn sie nicht angegeben werden, sind die verwendeten Werte `cols="20"` und `rows="2"`.

Die meisten Browser rendern Textareas mit einem Ziehgriff in einer Ecke, die verwendet werden kann, um die Größe zu ändern. Versuchen Sie, in unserem Demo die Größe der Textarea mit diesem zu ändern.

## Formularvalidierung

Früher haben wir einige der grundlegenden Client-seitigen Formularvalidierung behandelt, die vom Browser bereitgestellt wird. Das `required`-Attribut wird verwendet, um anzugeben, dass ein Feld gefüllt sein muss, bevor das Formular gesendet werden kann; es prüft auch, ob der korrekte Werttyp für bestimmte Wertetypen wie E-Mail-Adressen, URLs, Zahlen usw. eingegeben wird. Validierung ist aus zwei Hauptgründen wichtig:

- Sicherstellung, dass Daten im richtigen Format übermittelt werden, damit sie keine Fehler in Ihrer Anwendung verursachen.
- Sicherstellung, dass Daten keine Sicherheitsprobleme verursachen. Schlechte Menschen wissen, wie man Daten formatiert, sodass, auf unsicheren Anwendungen, diese bestimmte Befehle ausführen können, die Datenbanken löschen oder die Kontrolle über ein System übernehmen.

Formularvalidierung ist ein großes Thema, das für diesen Artikel nicht im Rahmen liegt, daher lassen wir es vorerst dabei. Beachten Sie nur, dass es zwei Arten der Formularvalidierung gibt:

- Client-seitige Validierung, die im Browser passiert, implementiert mit einer Kombination aus Formularvalidiervalidierungsattributen (wie `required`) und JavaScript. Die client-seitige Validierung ist nützlich, um Benutzern sofort Hinweise zu geben, wenn sie die falschen Daten eingegeben haben, aber nicht so effektiv, um bösartige Daten auszubremsen. Es ist zu einfach, JavaScript auszuschalten oder Client-seitigen Code zu ändern, sodass die Validierung nicht mehr funktioniert.
- Server-seitige Validierung, die auf dem Server stattfindet und in der Sprache implementiert wird, die der Server verwendet. Schlecht-formulierte Nachrichten können versehentlich oder absichtlich an einen Server gesendet werden. Konventionelle Weisheit empfiehlt sicherzustellen, dass Ihr Server nichts glaubt, was ein Client sendet, um Fehler oder Sicherheitsprobleme zu vermeiden, die durch fehlerhafte Nachrichten verursacht werden. Server-seitige Validierung ist großartig, um bösartige Nachrichten zu stoppen, da es schwieriger ist, den auf dem Server laufenden Code zu manipulieren. Die server-seitige Validierung ist jedoch weniger gut darin, Benutzern Hinweise über unkorrekte Daten zu geben, da die Daten erst an den Server gesendet werden müssen, damit sie validiert werden können, und dann das Ergebnis zurück an den Client geschickt werden muss, bevor der Benutzer benachrichtigt werden kann.

Kurz gesagt, entscheiden Sie sich nicht zwischen der Verwendung von entweder Client-seitiger oder Server-seitiger Validierung - Sie benötigen beides. Sie benötigen die Client-seitige Validierung, um den Benutzern Feedback zu deren Eingaben zu geben, und die Server-seitige Validierung, um sicherzustellen, dass die Nachrichten im von Ihrem Server sicher behandelbaren Format sind. Wenn Sie anfangen möchten, mehr über Validierung zu lernen, dann ist [Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) ein guter Ausgangspunkt.

## Zusammenfassung

Das war's für den Moment. Es gibt noch viel mehr über Formulare zu wissen, aber vorerst haben wir Ihnen genug Verständnis vermittelt, um weiter in Ihren Studien voranzukommen.

Als nächstes werden wir uns ansehen, wie Sie Probleme in Ihrem HTML-Code debuggen können.

## Siehe auch

- [Webformulare — Arbeiten mit Benutzerdaten](/de/docs/Learn_web_development/Extensions/Forms)

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content/Debugging_HTML", "Learn_web_development/Core/Structuring_content")}}
