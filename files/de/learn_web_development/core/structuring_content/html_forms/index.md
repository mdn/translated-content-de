---
title: Formulare und Schaltflächen in HTML
short-title: Formulare und Schaltflächen
slug: Learn_web_development/Core/Structuring_content/HTML_forms
l10n:
  sourceCommit: 5f677b960051016819ecb3b1f40bc3d36a43156d
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content/Debugging_HTML", "Learn_web_development/Core/Structuring_content")}}

HTML-Formulare und -Schaltflächen sind leistungsstarke Werkzeuge zur Interaktion mit den Benutzern einer Website. Am häufigsten bieten sie den Benutzern Steuerelemente, um eine Benutzeroberfläche (UI) zu manipulieren oder Daten einzugeben, wenn dies erforderlich ist.

In diesem Artikel bieten wir eine Einführung in die Grundlagen von Formularen und Schaltflächen. Es gibt noch viel mehr zu wissen — viele Eingabetypen und Formularfunktionen werden nicht erwähnt — aber dieser Artikel bietet Ihnen eine solide Grundlage für die meisten Fälle. Sie können die erweiterten oder spezialisierten Verwendungen bei Bedarf im Laufe Ihrer Karriere lernen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende HTML-Kenntnisse, wie im
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        > behandelt. Textsemantik auf Ebene von <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
          >Überschriften und Absätzen</a
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
          <li>Ein Verständnis dafür, dass Formulare und Schaltflächen neben Links die Hauptwerkzeuge sind, mit denen Benutzer mit einer Website interagieren.</li>
          <li>Verschiedene Schaltflächentypen.</li>
          <li>Gängige <code>&lt;input&gt;</code>-Typen.</li>
          <li>Gängige Attribute wie <code>name</code> und <code>value</code>.</li>
          <li>Das <code>&lt;form&gt;</code>-Element und die Grundlagen der Formularübermittlung.</li>
          <li>Formulare mit Labels und korrekter Semantik zugänglich machen.</li>
          <li>Andere Steuerungstypen: <code>&lt;textarea&gt;</code>, <code>&lt;select&gt;</code> und <code>&lt;option&gt;</code>.</li>
          <li>Grundlagen der clientseitigen Validierung.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Interaktion mit Benutzern

Bisher haben Sie im Kurs einige Möglichkeiten gesehen, wie Benutzer mit dem Web interagieren können:

- [Links](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links) können verwendet werden, um zu verschiedenen Inhaltsbereichen zu navigieren, entweder auf derselben Seite oder auf einer anderen Seite.
- [`<video>` und `<audio>`](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)-Elemente verfügen im Allgemeinen über Steuerungen wie Wiedergabe/Pause, schnelles Vor- und Zurückspulen usw., mit denen Benutzer Medieninhalte nach Belieben konsumieren können.

Diese Funktionen erleichtern jedoch tendenziell Einweg-Interaktionen, bei denen Benutzer Inhalte passiv konsumieren. Das ist in Ordnung, aber das Web ist ein bidirektionales Erlebnis. Website-Benutzer legen Präferenzen fest, wie sie Inhalte und Dienstleistungen erleben möchten. Sie bestellen Taxis und fordern Rückrufe an. Sie geben Feedback und beschweren sich. Sie kaufen Produkte und lassen sie sich nach Hause liefern.

Um dieses bidirektionale Erlebnis bereitzustellen, müssen Sie Schaltflächen und Formulare verwenden.

Schaltflächen werden normalerweise mit HTML-{{htmlelement("button")}}-Elementen erstellt (sie werden manchmal auch mit {{htmlelement("input")}}-Elementen erstellt, bei denen das `type`-Attribut auf einen Wert wie `button` oder `submit` gesetzt ist). Diese Drucktasten sind Allzweckschaltflächen — Sie können sie mit jeder Funktionalität verbinden, die Sie wünschen, nur begrenzt von Ihrer Vorstellungskraft und Ihren Programmierfähigkeiten.

Formulare werden mit Elementen wie {{htmlelement("form")}}, {{htmlelement("label")}}, {{htmlelement("input")}} und {{htmlelement("select")}} erstellt. Formularelemente können verwendet werden, um komplexere Steuerungen zu erstellen, als einfache Schaltflächen erlauben — zum Beispiel ein Dropdown-Menü mit mehreren Optionen, aus denen Sie verschiedene Themen für ein Benutzeroberflächenelement auswählen können.

Wesentlich ist jedoch, dass sie auch verwendet werden können, um Formulare zu erstellen, die Benutzer ausfüllen müssen, wenn sie Informationen an einen Website-Server übermitteln müssen. Denken Sie an E-Commerce-Websites — wenn Sie nach einem Produkt suchen möchten, das Sie kaufen möchten, verwenden Sie ein Formular, um Suchbegriffe einzugeben. Wenn Sie Artikel bezahlen und die Lieferung abschließen möchten, verwenden Sie ein Formular, um Ihre Postadresse einzugeben, und ein weiteres Formular, um Ihre Kreditkartendaten einzugeben.

Wir konzentrieren uns hauptsächlich auf diese — traditionellere — Verwendung von Formularelementen in diesem Artikel. Beachten Sie, dass Schaltflächen auch allgemein innerhalb von Formularen verwendet werden, um die eingegebenen Daten an den Server zu übermitteln.

Nachdem wir diese wichtige Theorie behandelt haben, gehen wir weiter zur Erforschung des Codes und sehen, wie Schaltflächen und Formulare implementiert werden.

## Schaltflächen

Wie oben angedeutet, haben Schaltflächen ein paar Hauptverwendungszwecke im Web. Erstens werden sie verwendet, um Funktionalität auszulösen, was nützlich ist, um Benutzeroberflächensteuerungen zu erstellen. Die einfachste Schaltfläche wird mit dem folgenden Code implementiert:

```html live-sample___basic-button
<button>Press me</button>
```

Dies wird wie folgt gerendert:

{{EmbedLiveSample("basic-button", "100%", "60")}}

Der Text, der zwischen den `<button></button>`-Tags erscheint, wird innerhalb der Schaltfläche gerendert, und der Browser gibt ihm ein grundlegendes Styling, sodass er standardmäßig wie eine Schaltfläche aussieht und sich auch so verhält. Soweit so gut. Es gibt jedoch ein Problem — unsere einsame Schaltfläche wird von alleine nichts Nützliches tun. Um sie nützlich zu machen, müssen Sie sie entweder in ein Formular einfügen (was wir später behandeln werden) oder etwas JavaScript hinzufügen.

Wenn Sie zum Beispiel das folgende JavaScript auf die obige Schaltfläche anwenden:

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

würde es Ihnen die folgende Ausgabe geben — versuchen Sie, darauf zu klicken:

{{EmbedLiveSample("basic-button-with-js", "100%", "60")}}

Von Ihnen wird nicht erwartet, dass Sie jetzt verstehen, wie das JavaScript funktioniert. Sie werden später im Kurs mehr darüber lernen.

Im nächsten Abschnitt sehen Sie eine Demonstration der zweiten Hauptverwendung von Schaltflächen — der Übermittlung von Formularen.

## Die Anatomie eines Formulars

Ein einfaches Formular enthält drei Dinge:

- Ein {{htmlelement("form")}}-Element, das alle anderen Formularinhalte umschließt. Alle Formularsteuerungen innerhalb der `<form></form>`-Tags sind Teil desselben Formulars, und ihre Daten werden beim Absenden des Formulars einbezogen.
- Ein oder mehrere Paare, die jeweils aus einem {{htmlelement("label")}}-Element und einem Steuerungselement (normalerweise einem {{htmlelement("input")}}-Element, aber es gibt auch andere Typen wie {{htmlelement("select")}}) bestehen:
  - Das Steuerungselement ermöglicht dem Benutzer, einige Daten auszuwählen oder einzugeben, die beim Absenden des Formulars an den Server gesendet werden.
  - Das `<label>`-Element liefert eine identifizierende Bezeichnung, die mit der Steuerung verknüpft ist und die Daten beschreibt, die dort eingegeben werden sollen.
- Ein {{htmlelement("button")}}-Element, das verwendet wird, um das Formular abzusenden.

Schauen wir uns ein einfaches Beispiel an, das die oben genannten drei Elemente enthält. Dieses Formular könnte verwendet werden, um nach dem Namen und der E-Mail-Adresse eines Benutzers zu fragen, um ihn für einen Newsletter anzumelden (keine Sorge — es ist derzeit nicht mit einem Server verbunden, daher wird es momentan nichts tun).

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

Wenn Sie "Sign me up!" sofort anklicken, sehen Sie einen Validierungsfehler, da keine Daten eingegeben wurden. Wenn Sie die Felder mit einem Namen und einer E-Mail-Adresse ausfüllen und dann auf "Sign me up!" klicken, sehen Sie eine `404`-Fehlermeldung.

Wir werden später erklären, warum das so ist. Bevor Sie weitermachen, kopieren Sie die vorherige HTML-Code-Liste in eine neue HTML-Datei mit Ihrem [Code-Editor](/de/docs/Learn_web_development/Getting_started/Environment_setup/Code_editors) und öffnen Sie sie in einem neuen Browsertab.

### Das `<form>`-Element

Wie wir bereits gesagt haben, dient das {{htmlelement("form")}}-Element als äußerer Rahmen für das Formular, das alle Steuerungselemente darin zusammenhält. Wenn die `<button>`-Taste gedrückt wird, werden alle Daten, die durch die Formularsteuerungen dargestellt werden, an den Server übermittelt. Das `<form>`-Element kann viele Attribute haben, aber die zwei wichtigsten, die wir in unserem Beispiel enthalten haben, sind die folgenden:

- `action`: Beinhaltet einen Pfad zu der Seite, an die die übermittelten Formulardaten gesendet werden sollen, um dort verarbeitet zu werden. Später, nachdem Sie das Formular übermittelt haben, sehen Sie `/submit_page` in der URL. Sie erhalten auch eine {{HTTPStatus("404")}}-Fehlermeldung, weil die Seite tatsächlich nicht existiert, aber das ist für jetzt in Ordnung.
- `method`: Gibt die Datenübertragungsmethode [method](/de/docs/Web/HTTP/Reference/Methods) an, die Sie verwenden möchten, um die Formulardaten an den Server zu senden. Machen Sie sich darüber im Moment nicht allzu viele Gedanken; der `get`-Wert bewirkt, dass die Daten als Parameter angehängt an das Ende der URL gesendet werden.

#### Überprüfung der übermittelten Daten

1. Gehen Sie zu dem Beispiel im separaten Tab, versuchen Sie, den Namen "Bob" und die E-Mail-Adresse "bob@bob.com" einzugeben.
2. Drücken Sie die `<button>`.

Die `action`- und `method`-Attribute verursachen, dass die Formulardaten in einer URL ähnlich der folgenden übermittelt werden:

```plain
/some/url/submit_page?name=Bob&email=bob%40bob.com
```

#### Strukturierung von Formularen

Sie können beliebige HTML-Elemente in ein `<form>`-Element einfügen, um die Formularelemente selbst zu strukturieren und Container bereitzustellen, die mit CSS für das Styling usw. gezielt werden können.

In unserem Beispiel haben wir ein [Überschriftselement](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) (`<h2>`) eingefügt, um den Zweck des Formulars zu beschreiben.

Wir haben auch jeweils ein Eingabe-/Bezeichnungspaar und die Absende-Schaltfläche in ein separates {{htmlelement("p")}} gesetzt, sodass jedes in einer separaten Zeile erscheint. Diese Elemente sind standardmäßig inline, was bedeutet, dass sie alle ohne diese Maßnahme in der gleichen Zeile sitzen würden.

Dies ist ein häufiges Muster zur Formularstrukturierung. Einige Personen verwenden `<p>`-Elemente, um ihre Formularelemente zu trennen, einige verwenden {{htmlelement("div")}}, {{htmlelement("section")}} oder sogar {{htmlelement("li")}}-Elemente. Es ist nicht von großer Bedeutung, solange die verwendeten Elemente semantisch sinnvoll sind. Zum Beispiel ist es sinnvoll, Formularelementgruppen in separate Absätze oder Inhaltsabschnitte oder sogar Elemente einer Liste zu unterteilen. Es wäre weniger sinnvoll, sie als [Blockzitate](/de/docs/Web/HTML/Reference/Elements/blockquote), [Abseiten](/de/docs/Web/HTML/Reference/Elements/aside) oder [Adressen](/de/docs/Web/HTML/Reference/Elements/address) darzustellen.

Es gibt ein spezielles Element zum Gruppieren von Formularelementen namens {{htmlelement("fieldset")}}. Dies ist in bestimmten Fällen nützlich, wie in komplexen Formularen und beim Gruppieren von mehreren Auswahlkästchen und Optionsschaltflächen. Wir werden später einige Beispiele für `<fieldset>` ansehen.

### `<input>`-Elemente

Die {{htmlelement("input")}}-Elemente stellen die verschiedenen Datenpunkte dar, die in das Formular eingegeben werden. Studieren wir eines der Beispiele aus unserem einfachen Formular:

```html
<input type="text" name="name" id="name" required />
```

Die Attribute sind wie folgt:

- `type`: Gibt den Typ des Formularsteuerungselements an, das erstellt werden soll. Es gibt viele verschiedene Arten von Formularsteuerungen, von einfachen Textfeldern verschiedener Typen bis hin zu Optionsschaltflächen, Auswahlkästchen und mehr. Der Typ `text` rendert ein einfaches Textfeld, das jeden Wert akzeptieren kann.
- `name`: Gibt einen Namen für das Datenelement an. Wenn das Formular übermittelt wird, werden die Daten im Namen/Werte-Paar gesendet. In jedem Fall ist der Name gleich dem Wert dieses `name`-Attributs, und der Wert ist gleich dem Text, der in das Textfeld eingegeben wurde.
- `id`: Gibt eine ID an, die verwendet werden kann, um das Element zu identifizieren. In diesem Fall wird es verwendet, um das Formularsteuerungselement mit seinem `<label>` zu verknüpfen.
- `required`: Gibt an, dass ein Wert in das Formularelement eingegeben werden muss, bevor das Formular übermittelt werden kann. Dies sollte nur auf Eingaben eingestellt werden, die Sie benötigen, nicht auf optionale Felder.

Sie sollten wissen, dass einige Eingabetypen normalerweise ihre Werte nicht aus Text erhalten, die in ein Feld eingegeben werden. Zum Beispiel rendert [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color) ein Farbauswahl-Widget, aus dem Sie eine Farbe auswählen, während [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio) eine Optionsschaltflächensteuerung rendert, die ausgewählt werden kann oder nicht.

Im Fall von Optionsschaltflächen müssen Sie im Allgemeinen den Wert angeben, der gesendet werden würde, wenn er in einem spezifischen `value`-Attribut ausgewählt ist. Beachten Sie, dass Sie ein `value`-Attribut auf Eingabetypen wie `text` und `color` angeben _können_ — der Effekt ist, dass der Wert beim ersten Rendern des Formularfeldes vorausgefüllt wird.

#### `required`- und `value`-Attribute in Aktion

1. Gehen Sie erneut zu dem Beispiel, das Sie in einem separaten Tab geladen haben, und versuchen Sie, das Formular zu senden, ohne einen Wert in eines der Felder einzugeben. Sie sehen eine Fehlermeldung, die neben dem "Name"-Feld erscheint und etwas wie "Please fill in this field" anzeigt (sie variiert in den verschiedenen Browsern). Dies ist das `required`-Attribut — und die standardmäßige clientseitige Formularvalidierung des Browsers — in Aktion.
2. Versuchen Sie nun, das Formular zu senden, indem Sie einen gültigen Namen im ersten Feld eingeben, aber einen Wert, der keine gültige E-Mail-Adresse im zweiten Feld ist (etwas wie "aaaa" reicht aus). Dieses Mal sehen Sie eine Fehlermeldung, die neben dem "Email"-Feld erscheint und etwas wie "Please enter an email address" anzeigt.
3. Versuchen Sie, das Formular zu bearbeiten, um `value="Bob"` bei der ersten Eingabe hinzuzufügen. Wenn Sie den Code neu laden, sehen Sie, dass das erste Feld standardmäßig einen Wert von "Bob" hat.

#### Spezialisierte Texteingabefelder

Die zweite Übung oben wirft einen interessanten Punkt auf. Das zweite Eingabefeld erwartet speziell eine E-Mail-Adresse und überprüft die eingegebenen Werte als solche. Wenn Sie sich den Formularcode noch einmal ansehen, sehen Sie, warum — das zweite `<input>` hat einen `type` von `email`. Es gibt mehrere spezialisierte Texteingabefeldtypen, die speziell für bestimmte Datentypen vorgesehen sind — [`<input type="number">`](/de/docs/Web/HTML/Reference/Elements/input/number), [`<input type="password">`](/de/docs/Web/HTML/Reference/Elements/input/password), [`<input type="tel">`](/de/docs/Web/HTML/Reference/Elements/input/tel), usw.

Folgen Sie einigen der obigen Links, um herauszufinden, wofür diese Eingabetypen verwendet werden. Sehen Sie sich unser [`<input>`](/de/docs/Web/HTML/Reference/Elements/input) Referenzdokument an und schauen Sie, ob Sie noch andere spezialisierte Texteingabefeldtypen finden können.

### `<label>`-Elemente

Wie wir oben gesagt haben, liefern {{htmlelement("label")}}-Elemente identifizierende Bezeichnungen, die mit Formularsteuerungen verknüpft sind und die Daten beschreiben, die dort eingegeben werden sollen. Sie können beliebige Textinhalte in `<label>`-Elemente setzen, aber sie sollten genau beschreiben, welche Daten die zugehörige Steuerung erwartet. Die Verknüpfung wird hergestellt, indem der Formularsteuerung ein `id`-Attribut gegeben wird und das `<label>`-Element ein `for`-Attribut mit demselben Wert wie die `id` des Steuerungselements erhält.

Zum Beispiel:

```html
<label for="name">Name (required):</label>
<input type="text" name="name" id="name" required />
```

`<label>`-Elemente sind aus mehreren Gründen wichtig, insbesondere:

- Wenn sehbehinderte Benutzer einen Bildschirmleser verwenden, um sie beim Lesen und Interagieren mit Webprojekten zu unterstützen, wird der Bildschirmleser den zugehörigen Labeltext lesen, wenn jedes Steuerelement getroffen wird. Dies erleichtert es den Benutzern zu verstehen, welche Inhalte in jedes Steuerelement eingegeben werden sollen.
- Sie ermöglichen es, die Steuerelemente durch Klicken auf ihren Labeltext zu fokussieren sowie die Steuerelemente selbst. Dies ist besonders hilfreich für Benutzer von Mobiltelefonen, bei denen es schwierig sein kann, ein Steuerelement genau mit dem Finger auf einem Touchscreen auszuwählen. Die Vergrößerung der **Trefffläche** ist in solchen Fällen nützlich.

#### Explizite und implizite Formularbezeichnungen

Der oben gezeigte Formularbezeichnungsstil wird als **explizite Formularbezeichnung** bezeichnet — die Zuordnung zwischen Steuerung und Bezeichnung wird explizit über die `id`- und `for`-Attribute vorgenommen. Sie können auch eine **implizite Formularbezeichnung** implementieren, indem Sie das Steuerelement innerhalb der Bezeichnung einbetten, wie hier:

```html
<label>
  Name (required):
  <input type="text" name="name" required />
</label>
```

Die Einbettung stellt eine implizite Verknüpfung zwischen Steuerung und Bezeichnung her, und Sie benötigen die `id`- und `for`-Attribute nicht mehr.

Beide Ansätze sind in Ordnung, aber wir würden empfehlen, den Ansatz der expliziten Bezeichnung zu verwenden. Dies liegt daran, dass die explizite Zuordnung in der Regel einfacher zu identifizieren und zu verstehen ist, insbesondere wenn Ihr HTML-Code komplexer wird. Darüber hinaus verarbeiten Bildschirmleser (und andere unterstützende Technologien) implizite Bezeichnungen nicht immer korrekt.

Sie können mehr über die besten Praktiken zur Formularkennzeichnung in [HTML Inputs and Labels: A Love Story](https://css-tricks.com/html-inputs-and-labels-a-love-story/), csstricks.com (2021) lesen.

### Das `<button>`-Element

Wenn ein {{htmlelement("button")}}-Element innerhalb eines `<form>`-Elements enthalten ist, ist das Standardverhalten, dass es das Formular übermittelt, vorausgesetzt, es sind keine ungültigen Daten vorhanden, die die Übermittlung durch die clientseitige Formularvalidierung blockieren. Sie haben dieses Verhalten bereits oben im Beispiel unseres einfachen Formulars gesehen.

Es gibt andere Schaltflächenverhalten, die über das `type`-Attribut des `<button>`-Elements angegeben werden können:

- `<button type="submit">` gibt explizit an, dass eine Schaltfläche wie eine Absende-Schaltfläche funktionieren soll. Sie müssen dies wirklich niemals angeben, es sei denn, Sie sind aus irgendeinem Grund andere Schaltflächen innerhalb Ihres `<form>` und Sie möchten klarstellen, welche die Absende-Schaltfläche ist. Dies wird sehr selten sein.
- `<button type="reset">` erstellt eine _Zurücksetzen-Schaltfläche_ — dies löscht sofort alle Daten aus dem Formular und setzt es in den Anfangszustand zurück. **Verwenden Sie keine Zurücksetz-Schaltflächen** — sie waren früher in den frühen Tagen des Webs beliebt, sind aber heutzutage meist nerviger als hilfreich. Die meisten Menschen haben schon einmal ein langes Formular ausgefüllt und dann versehentlich die Zurücksetzen-Schaltfläche statt der Absende-Schaltfläche gedrückt, wodurch sie neu beginnen mussten.
- `<button type="button">` erstellt eine Schaltfläche mit dem gleichen Verhalten wie Schaltflächen, die außerhalb von `<form>`-Elementen angegeben sind. Wie wir früher gesehen haben, tun sie standardmäßig absolut nichts, und JavaScript wird benötigt, um ihnen Funktionalität zu geben.

> [!NOTE]
> Sie können die oben genannten Schaltflächentypen auch mit einem `<input>`-Element mit den gleichen `type`-Werten erstellen — [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit), [`<input type="reset">`](/de/docs/Web/HTML/Reference/Elements/input/reset) und [`<input type="button">`](/de/docs/Web/HTML/Reference/Elements/input/button). Diese haben jedoch viele Nachteile im Vergleich zu ihren `<button>`-Gegenstücken. Sie sollten `<button>` vorziehen.

## Ein Exkurs zur Barrierefreiheit

Wir haben bereits die Bedeutung von Formularelementen für die Barrierefreiheit besprochen, aber wir wollten auch einen Kommentar zur allgemeinen Bedeutung der Verwendung der richtigen semantischen Elemente zur Erstellung von Formularen einfügen (z.B. verwenden Sie ein `<button>`, um Ihr Formular zu übermitteln, und nicht ein `<div>`, das so programmiert ist, dass es wie ein `<button>` funktioniert). Es ist durchaus möglich, eine Kombination aus CSS und JavaScript zu verwenden, um praktisch jedes HTML-Element wie ein Formularelement aussehen und verhalten zu lassen. Entwickler tun dies gewöhnlich aus Designgründen — einige Formularsteuerungen sind schwer zu stylen.

Wenn Sie dies jedoch tun, machen Sie sich selbst und Ihren Benutzern das Leben schwerer. Der Browser bietet mehrere `<button>`- und Formularsteuerungsfunktionen standardmäßig, ohne dass JavaScript oder anderer zusätzlicher Code erforderlich ist, um Formulare für alle Benutzer benutzerfreundlicher zu machen.

Zum Beispiel:

- Semantische Elemente werden von unterstützender Technologie wie Bildschirmlesern verstanden, die ihre Bedeutung an Benutzer kommunizieren, die sie nicht sehen können.
- Formularsteuerelemente und Schaltflächen sind standardmäßig über die Tastatur zugänglich. Im obigen Beispiel versuchen Sie, mit <kbd>Tab</kbd> und <kbd>Shift</kbd> + <kbd>Tab</kbd> zwischen den Formularelementen vor- und zurück zu gehen (genannt "Tabben").
- Beachten Sie auch, wie das Tabben zwischen den Formularelementen dazu führt, dass das fokussierte Element durch einen blauen Umriss (sogenanntes **Fokusumriss**) hervorgehoben wird. Dies ist eine wichtige Funktion für Tastaturnutzer, um zu wissen, wo sie sich gerade im Formular befinden.

Wenn Sie beim Implementieren Ihrer Formulare nicht die richtigen semantischen Elemente verwenden, müssen Sie all diese Funktionalitäten neu implementieren, andernfalls werden Ihre Formularelemente nicht wie erwartet funktionieren und daher als kaputt empfunden werden. All das summiert sich.

## Andere Steuerungstypen

Es gibt viele andere Steuerungstypen, mit denen Sie Daten in einem Formular sammeln können. Schauen wir uns ein etwas komplexeres Beispiel an, und anschließend werden wir es erkunden und erklären.

> [!NOTE]
> In diesem Beispiel gehen wir davon aus, dass der Benutzer bereits registriert und angemeldet ist und daher keine Details wie Name und E-Mail sammeln muss.

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

Wir empfehlen Ihnen, dieses Beispiel in einem separaten Browsertab zu öffnen, während Sie die nächsten Abschnitte durchlaufen, in denen wir jeden Steuerungstyp nacheinander betrachten. Um dies zu erreichen, kopieren Sie den Code in eine HTML-Datei mit Ihrem Code-Editor und öffnen Sie sie in einem Browsertab.

Bevor Sie weitermachen, spielen Sie mit den verschiedenen Formularelementen in Ihrer lokalen Kopie und wählen Sie einige Werte aus. Versuchen Sie, das Formular zu übermitteln, und sehen Sie, wie die in der URL übermittelten Daten aussehen.

### Optionsschaltflächen

Die "Zimmerkategorie im Hotel wählen"-Schaltflächen werden mit [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio)-Steuerungselementen implementiert. Diese rendern als eine Reihe von Drucktasten, bei denen immer nur ein Element der Reihe gleichzeitig ausgewählt werden kann — Sie können nicht mehr als eines gleichzeitig auswählen. Sie sind nach den Tasten auf altmodischen Radios benannt, bei denen Sie eine Taste drücken und die zuvor ausgewählte Taste wieder herausspringt.

Unser Beispielcode sieht so aus:

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

`radio`-Eingabetypen funktionieren größtenteils wie `text`-Eingabetypen, jedoch mit einigen Unterschieden:

- Die `name`-Attribute für jede Reihe von Optionsschaltflächen müssen denselben Wert enthalten, um sie als eine Einheit zu verknüpfen. Wenn sie unterschiedliche Werte haben, sind sie effektiv separate Reihen mit unterschiedlichen Werten bei der Übermittlung.
- Sie müssen ein `value`-Attribut einfügen, das den Wert enthält, der für jede Optionsschaltfläche übermittelt werden soll. Der übermittelte Wert wird ein Namen/Werte-Paar sein, aber der Name wird immer derselbe sein, zum Beispiel `hotel=economy` oder `hotel=superior`.
- Das `<label>` für jede Optionsschaltfläche sollte diese bestimmte Wertauswahl beschreiben, anstatt den insgesamt gewählten Wert. Der bevorzugte Weg, um eine Beschreibung der insgesamt gewählten Wertauswahl bereitzustellen, besteht darin, sie in ein {{htmlelement("fieldset")}} zu wickeln, das ein {{htmlelement("legend")}}-Element als Kind nimmt, das die Beschreibung enthält.

> [!NOTE]
> Neben der Strukturierung und Kennzeichnung von Formularen haben Feldsatzes weitere Verwendungen, wie z.B. das [Deaktivieren](#deaktivieren_von_formularelementen) eines gesamten Satzes von Steuerungen als eine Einheit.

Es ist auch erwähnenswert, dass wir das `checked`-Attribut auf die erste Optionsschaltfläche angewendet haben — dies bewirkt, dass sie ausgewählt wird, wenn die Seite zum ersten Mal geladen wird. Dies bedeutet, dass immer eine Option ausgewählt ist und Sie eine Optionsschaltfläche nicht abwählen können, ohne eine andere auszuwählen.

Versuchen Sie, das `checked`-Attribut aus der ersten Optionsschaltfläche zu entfernen, speichern Sie, und laden Sie dann erneut, um den Effekt zu sehen, den es hat. Setzen Sie es wieder ein, bevor Sie weitergehen.

#### Deaktivieren von Formularelementen

Im Beispiel der Optionsschaltflächen werden Sie feststellen, dass die dritte Optionsschaltfläche das `disabled`-Attribut hat. Dies führt dazu, dass das gerenderte Steuerelement ausgegraut und nicht auswählbar ist. Dies ist in vielen Situationen nützlich, in denen eine Option normalerweise verfügbar ist, derzeit aber nicht. Zum Beispiel könnte ein Produkt ausverkauft sein, oder wie in unserem Beispiel, sind Penthousesuiten alle ausgebucht!

Sie können das `disabled`-Attribut auf jedes Formularelement setzen, einschließlich `<button>`-Elementen. `<fieldset>`-Elemente können auch das `disabled`-Attribut akzeptieren — dies führt dazu, dass jedes Formularelement innerhalb des Feldsatzes deaktiviert wird.

Versuchen Sie, das `disabled`-Attribut auf die `<fieldset>`-Elemente zu setzen, speichern Sie, und laden Sie dann erneut, um den Effekt zu sehen, den es hat. Entfernen Sie sie wieder, bevor Sie weitermachen.

### Auswahlkästchen

Unsere "zu besuchende Klassen"-Auswahlen werden unter Verwendung von [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox)-Steuerungen implementiert. Diese rendern als eine Reihe von An/Aus-Zustandskästchen. Im Gegensatz zu Optionsschaltflächen können Sie mehr als eines gleichzeitig auswählen.

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

Wie Sie an den Code-Snippets sehen können, werden Optionsschaltflächen und Auswahlkästchen auf sehr ähnliche Weise implementiert (sie können auch `checked`-Attribute annehmen, um sie vorausgewählt zu rendern, wenn die Seite geladen wird). Sie verhalten sich auch in ziemlich ähnlicher Weise, nur dass Optionsschaltflächen es Ihnen erlauben, null oder ein Element aus vielen zu wählen, während Auswahlkästchen es Ihnen erlauben, null oder mehr Elemente aus vielen zu wählen.

Der Hauptunterschied (abgesehen vom `type`-Wert!) besteht darin, dass jedes Auswahlkästchen einen anderen `name`-Wert hat und sie normalerweise keine `value`-Attribute haben. Was das Verhalten angeht, bedeutet das, dass sie verschiedene Datenwerte darstellen, während ein Satz von Optionsschaltflächen nur einen repräsentiert. Bei der Übermittlung wird jeder Wert mit einem Wert von `on` gesendet, wenn das Kontrollkästchen aktiviert ist — `yoga=on`, `balloon=on`, usw.

> [!NOTE]
> Es ist möglich, den übermittelten Wert für ein Auswahlkästchen zu ändern, indem Sie ihm ein `value`-Attribut geben, z.B.: `<input type="checkbox" id="yoga" name="yoga" value="yes" />` würde `yoga=yes` übermitteln, wenn es angekreuzt ist. Dies hat jedoch wenig Sinn. Ein Auswahlkästchen wird entweder mit einem einzigen Wert gesendet, wenn es angekreuzt ist, oder es wird überhaupt nicht gesendet. Es spielt keine große Rolle, welcher Wert an den Server gesendet wird.

### Dropdown-Menüs

Dropdown-Menüs, wie das Auswahlsteuerelement "Wie kommen Sie hierher?" in unserem Beispiel, werden nicht mit einem `<input>`-Typ implementiert, sondern mit den {{htmlelement("select")}}- und {{htmlelement("option")}}-Elementen:

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

Das `<select>`-Element umfasst alle verschiedenen Wertauswahlen. Dort setzen Sie das `id`-Attribut, das die Steuerung mit ihrer Bezeichnung verknüpft, sowie das `name`-Attribut, das den Namen des zu übermittelnden Datenpunkts festlegt.

Jeder mögliche Wert für den Datenpunkt wird durch ein `<option>`-Element repräsentiert, das im `<select>`-Element verschachtelt ist. Jedes `<option>`-Element kann ein `value`-Attribut aufnehmen, das den Wert angibt, der übermittelt werden soll, wenn diese Option aus der Dropdown-Liste ausgewählt wird. Wenn Sie keinen `value` angeben, wird der Text innerhalb der `<option></option>`-Tags als Wert verwendet.

> [!NOTE]
> Wenn Sie möchten, dass eine bestimmte Option beim Laden der Seite vorausgewählt wird, können Sie dem entsprechenden `<option>`-Element ein `selected`-Attribut hinzufügen.

### Mehrzeilige Texteingabefelder

Mehrzeilige Texteingabefelder werden mit {{htmlelement("textarea")}}-Elementen erstellt:

```html
<label for="comments">Any other comments:</label>
<textarea id="comments" name="comments" rows="5" cols="33"></textarea>
```

Sie verhalten sich in gleicher Weise wie `<input type="text">`-Elemente, außer dass sie das Eingeben von mehrzeiligem Text erlauben. Das `rows`-Attribut gibt die Anzahl der Zeilen an, die das Textfeld standardmäßig hoch sein wird, während das `cols`-Attribut die Anzahl der Spalten angibt, die das Textfeld standardmäßig breit sein wird. Wenn sie nicht angegeben werden, sind die Werte `cols="20"` und `rows="2"`.

Die meisten Browser rendern Textfelder mit einem Ziehgriff in einer Ecke, der benutzt werden kann, um die Größe zu verändern. Versuchen Sie, diesen Ziehgriff zu verwenden, um die Textfeldgröße in unserer Demo zu ändern.

## Formularvalidierung

Früher haben wir uns einige der grundlegenden clientseitigen Formularüberprüfungen durch den Browser angesehen. Das `required`-Attribut wird verwendet, um anzugeben, dass ein Feld ausgefüllt werden muss, bevor das Formular übermittelt werden kann; es überprüft auch, ob der richtige Werttyp für spezielle Werttypen wie E-Mail-Adressen, URLs, Zahlen usw. eingegeben wird. Die Validierung ist aus zwei Hauptgründen wichtig:

- Sicherstellen, dass Daten im richtigen Format gesendet werden, damit es keine Fehler in Ihrer Anwendung gibt.
- Sicherstellen, dass Daten keine Sicherheitsprobleme verursachen. Böse Menschen wissen, wie man Daten in einem speziellen Format einreicht, damit sie in unsicheren Anwendungen Befehle ausführen können, um Datenbanken zu löschen oder ein System zu übernehmen.

Formularvalidierung ist ein großes Thema, das den Rahmen dieses Artikels sprengt, also belassen wir es hier erst einmal dabei. Beachten Sie einfach, dass es zwei Arten von Formularvalidierung gibt:

- Clientseitige Validierung, die im Browser stattfindet und mit einer Kombination aus Formularvalidierungsattributen (wie `required`) und JavaScript implementiert wird. Die clientseitige Validierung ist nützlich, um den Benutzern sofortige Hinweise zu geben, wenn sie falsche Daten eingegeben haben, jedoch nicht so effektiv, um böswillige Daten zu stoppen. Es ist zu einfach, JavaScript auszuschalten oder clientseitigen Code so zu ändern, dass die Validierung nicht mehr funktioniert.
- Serverseitige Validierung, die auf dem Server stattfindet und mit welcher Sprache auch immer der Server verwendet, implementiert wird. Schlechte Nachrichten können versehentlich oder absichtlich auf einen Server gesendet werden. Die allgemeine Meinung ist, sicherzustellen, dass Ihr Server nichts vertraut, was ein Client schickt, um Fehler oder Sicherheitsprobleme zu vermeiden, die durch fehlerhafte Nachrichten verursacht werden. Serverseitige Validierung ist großartig, um bösartige Nachrichten zu stoppen, da es schwerer ist, den auf dem Server laufenden Code zu manipulieren. Serverseitige Validierung ist nicht so gut im Bereitstellen von Hinweisen über falsche Daten an Benutzer, da die Daten zum Server gehen müssen, um validiert zu werden, und dann das Ergebnis an den Client zurückgeschickt werden muss, bevor der Benutzer benachrichtigt werden kann.

Kurz gesagt, entscheiden Sie sich nicht zwischen der Verwendung von entweder clientseitiger oder serverseitiger Validierung - Sie brauchen beides. Sie brauchen die clientseitige Validierung, um Benutzern Feedback über ihre Eingabe zu geben und die serverseitige Validierung, um sicherzustellen, dass Nachrichten in einem Format sind, mit dem Ihr Server sicher umgehen kann. Wenn Sie mehr über Validierung erfahren möchten, ist ein guter Ausgangspunkt [Client-side form validation](/de/docs/Learn_web_development/Extensions/Forms/Form_validation).

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige zusätzliche Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Formulare und Schaltflächen](/de/docs/Learn_web_development/Core/Structuring_content/Test_your_skills/Forms_and_buttons).

## Zusammenfassung

Das war's für den Moment. Es gibt noch viel mehr über Formulare zu wissen, aber für jetzt haben wir Ihnen genug Verständnis gegeben, um in Ihren Studien weiterzugehen.

Als Nächstes werden wir uns ansehen, wie man Probleme im HTML-Code debuggiert.

## Siehe auch

- [Web forms — Arbeiten mit Benutzerdaten](/de/docs/Learn_web_development/Extensions/Forms)

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content/Debugging_HTML", "Learn_web_development/Core/Structuring_content")}}
