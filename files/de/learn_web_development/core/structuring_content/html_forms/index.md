---
title: Formulare und Schaltflächen in HTML
short-title: Formulare und Schaltflächen
slug: Learn_web_development/Core/Structuring_content/HTML_forms
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content/Debugging_HTML", "Learn_web_development/Core/Structuring_content")}}

HTML-Formulare und Schaltflächen sind leistungsstarke Werkzeuge zur Interaktion mit den Benutzern einer Website. Meistens bieten sie Benutzern Steuerelemente, um eine Benutzeroberfläche (UI) zu manipulieren oder Daten einzugeben, wenn erforderlich.

In diesem Artikel geben wir eine Einführung in die Grundlagen von Formularen und Schaltflächen. Es gibt noch viel mehr zu wissen - viele Eingabetypen und Formularfunktionen werden nicht erwähnt - aber dieser Artikel wird Ihnen ein solides Fundament für die meisten Fälle bieten. Sie können die fortgeschrittenen oder spezialisierten Anwendungen je nach Bedarf erlernen, als Teil des ständigen Lernprozesses, den Sie in Ihrer Karriere durchlaufen werden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende HTML-Kenntnisse, wie sie im
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        > behandelt werden. Textbezogene Semantik wie <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
          >Überschriften und Absätze</a
        > und <a href="/de/docs/Learn_web_development/Core/Structuring_content/Lists"
          >Listen</a
        >. <a href="/de/docs/Learn_web_development/Core/Structuring_content/Structuring_documents"
          >Strukturelles HTML</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernergebnisse:</th>
      <td>
        <ul>
          <li>Ein Bewusstsein dafür, dass Formulare und Schaltflächen die Hauptwerkzeuge sind, mit denen Benutzer mit einer Website interagieren, zusammen mit Links.</li>
          <li>Verschiedene Schaltflächentypen.</li>
          <li>Häufige <code>&lt;input&gt;</code>-Typen.</li>
          <li>Häufige Attribute wie <code>name</code> und <code>value</code>.</li>
          <li>Das <code>&lt;form&gt;</code>-Element und die Grundlagen der Formularübermittlung.</li>
          <li>Formulare mit Labels und korrekter Semantik zugänglich machen.</li>
          <li>Andere Steuerelemente: <code>&lt;textarea&gt;</code>, <code>&lt;select&gt;</code> und <code>&lt;option&gt;</code>.</li>
          <li>Grundlagen der clientseitigen Validierung.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Interaktion mit Benutzern

Bisher haben Sie in dem Kurs einige Möglichkeiten kennengelernt, wie Benutzer mit dem Web interagieren können:

- [Links](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links) können verwendet werden, um zu verschiedenen Inhaltsabschnitten zu navigieren, entweder auf derselben oder einer anderen Seite.
- [`<video>`- und `<audio>`-](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) Elemente verfügen in der Regel über Steuerelemente wie Wiedergabe/Pause, Vorlauf, Rücklauf usw., mit denen Benutzer Medieninhalte nach ihren Wünschen konsumieren können.

Diese Funktionen ermöglichen jedoch in der Regel eine Einweg-Interaktion, bei der Benutzer Inhalte passiv konsumieren. Das ist in Ordnung, aber das Web ist eine wechselseitige Erfahrung. Benutzer von Websites legen fest, wie sie Inhalte und Dienste erleben möchten. Sie bestellen Taxis und fordern Rückrufe an. Sie geben Feedback und äußern Beschwerden. Sie kaufen Produkte und lassen sie sich nach Hause liefern.

Um diese wechselseitige Erfahrung zu ermöglichen, müssen Sie Schaltflächen und Formulare verwenden.

Schaltflächen werden normalerweise mit HTML-{{htmlelement("button")}}-Elementen erstellt (sie werden manchmal auch mit {{htmlelement("input")}}-Elementen erstellt, deren `type`-Attribut auf einen Wert wie `button` oder `submit` gesetzt ist). Diese Druckknöpfe sind allgemeiner Natur – Sie können sie mit beliebiger Funktionalität verbinden, die Sie sich vorstellen und programmieren können.

Formulare werden mit Elementen wie {{htmlelement("form")}}, {{htmlelement("label")}}, {{htmlelement("input")}} und {{htmlelement("select")}} erstellt. Formularelemente können verwendet werden, um komplexere Steuerelemente als einfache Schaltflächen zu erstellen – zum Beispiel ein Dropdown-Menü mit mehreren Optionen, mit denen Sie zwischen verschiedenen Themen für ein Benutzerschnittstellenelement wählen können.

Entscheidend ist jedoch, dass sie auch verwendet werden können, um Formulare zu erstellen, die Benutzer ausfüllen müssen, wenn sie Informationen an einen Webserver übermitteln möchten. Denken Sie an E-Commerce-Seiten – wenn Sie ein Produkt suchen möchten, verwenden Sie ein Formular, um Suchbegriffe einzugeben. Wenn Sie bezahlen und die Lieferung abschließen möchten, verwenden Sie ein Formular, um Ihre Postadresse einzugeben, und ein weiteres Formular, um Ihre Kreditkartendaten einzugeben.

In diesem Artikel konzentrieren wir uns hauptsächlich auf diese – traditionellere – Verwendung von Formularelementen. Beachten Sie, dass Schaltflächen auch häufig innerhalb von Formularen verwendet werden, um die eingegebenen Daten an den Server zu übermitteln.

Mit dieser wichtigen Theorie im Gepäck, lassen Sie uns fortfahren und den Code erkunden, um zu sehen, wie Schaltflächen und Formulare implementiert werden.

## Schaltflächen

Wie oben angedeutet, haben Schaltflächen im Web einige Hauptverwendungen. Erstens werden sie verwendet, um Funktionalität zu triggern, was nützlich ist beim Erstellen von Benutzeroberflächen-Steuerelementen. Die einfachste Schaltfläche wird mit folgendem Code implementiert:

```html live-sample___basic-button
<button>Press me</button>
```

Dies wird wie folgt gerendert:

{{EmbedLiveSample("basic-button", "100%", "60")}}

Der Text, der zwischen den `<button></button>`-Tags erscheint, wird innerhalb der Schaltfläche gerendert, und der Browser gibt ihr ein grundlegendes Styling, sodass sie standardmäßig wie eine Schaltfläche aussieht und sich verhält. Soweit, so gut. Allerdings gibt es ein Problem – unsere einsame Schaltfläche wird von alleine nichts Nützliches tun. Um sie nützlich zu machen, müssen Sie sie in ein Formular integrieren (was wir später behandeln werden) oder etwas JavaScript hinzufügen.

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

Würde es Ihnen die folgende Ausgabe geben – versuchen Sie, darauf zu klicken:

{{EmbedLiveSample("basic-button-with-js", "100%", "60")}}

Es wird nicht erwartet, dass Sie derzeit verstehen, wie das JavaScript funktioniert. Sie werden später im Kurs mehr darüber lernen.

Im nächsten Abschnitt werden Sie eine Demonstration der zweiten Hauptverwendung von Schaltflächen sehen – Formulare einreichen.

## Die Anatomie eines Formulars

Ein einfaches Formular enthält drei Dinge:

- Ein {{htmlelement("form")}}-Element, welches den gesamten weiteren Formularinhalt umschließt. Alle Formularelemente innerhalb der `<form></form>`-Tags gehören zum gleichen Formular, und ihre Daten werden beim Absenden des Formulars eingeschlossen.
- Ein oder mehrere Paare, die jeweils aus einem {{htmlelement("label")}}-Element und einem Formularelement bestehen (in der Regel ein {{htmlelement("input")}}-Element, aber es gibt auch andere Typen, zum Beispiel {{htmlelement("select")}}):
  - Das Formulareingabeelement ermöglicht es dem Benutzer, Daten auszuwählen oder einzugeben, die beim Absenden des Formulars an den Server gesendet werden.
  - Das `<label>`-Element stellt ein beschreibendes Label bereit, das mit dem Formulareingabeelement verknüpft ist und die Daten beschreibt, die in es eingetragen werden sollen.
- Ein {{htmlelement("button")}}-Element, das zum Absenden des Formulars verwendet wird.

Betrachten wir ein einfaches Beispiel, das die oben genannten drei Elemente enthält. Dieses Formular könnte verwendet werden, um den Namen und die E-Mail-Adresse eines Benutzers zu erfragen, um ihn für einen Newsletter anzumelden (keine Sorge – es ist mit keinem Server verbunden, also wird es derzeit nichts tun).

```html live-sample___form-anatomy
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
```

Dies wird wie folgt gerendert:

{{EmbedLiveSample("form-anatomy", "100%", "200")}}

Aufgrund der Funktionsweise von MDN können Sie Text in die Eingabefelder eingeben, aber Sie werden das Formular nicht richtig absenden sehen, wenn Sie die Schaltfläche drücken. Um den nächsten Abschnitten zu folgen, kopieren Sie den obigen HTML-Code in eine neue HTML-Datei mit Ihrem [Code-Editor](/de/docs/Learn_web_development/Getting_started/Environment_setup/Code_editors) und öffnen Sie ihn in einem neuen Browser-Tab.

### Das `<form>`-Element

Wie bereits erwähnt, fungiert das {{htmlelement("form")}}-Element als äußerer Wrapper für das Formular und gruppiert alle Formularelemente darin. Wenn die `<button>` gedrückt wird, werden alle von den Formularelementen dargestellten Daten an den Server gesendet. Das `<form>`-Element kann viele Attribute annehmen, aber die beiden wichtigsten, die wir hier aufgenommen haben, sind wie folgt:

- `action`: Enthält einen Pfad zur Seite, an die wir die gesendeten Formulardaten zur Verarbeitung senden möchten. Später, nachdem Sie das Formular abgeschickt haben, werden Sie `/submit_page` in der URL sehen. Sie erhalten auch eine {{HTTPStatus("404")}}-Fehlermeldung, da diese Seite tatsächlich nicht existiert, aber das ist im Moment in Ordnung.
- `method`: Gibt die Datenübertragungsmethode an, mit der Sie die Formulardaten an den Server senden möchten. Machen Sie sich darüber im Moment keine allzu großen Sorgen; der Wert `get` bewirkt, dass die Daten als Parameter, die an das Ende der URL angehängt werden, gesendet werden.

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Gehen Sie zu dem Beispiel im separaten Tab, versuchen Sie, einen Namen wie "Bob" und eine E-Mail-Adresse wie "bob@bob.com" einzugeben.
>
> Die obigen zwei Attribute bewirken, dass die Formulardaten in einer URL entlang der folgenden Zeilen gesendet werden:
>
> `/some/url/submit_page?name=Bob&email=bob%40bob.com`

#### Formulare strukturieren

Sie können beliebige HTML-Elemente innerhalb eines `<form>`-Elements einfügen, um die Formularelemente selbst zu strukturieren und Container zum Ansteuern mit CSS für das Styling usw. bereitzustellen.

In unserem Beispiel haben wir ein [Überschriftselement](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) (`<h2>`) eingefügt, um den Zweck des Formulars zu beschreiben.

Wir haben auch jedes Eingabe-/Label-Paar und die Absenden-Schaltfläche in einen separaten {{htmlelement("p")}} gesetzt, sodass jeder in einer separaten Zeile erscheint. Diese Elemente sind standardmäßig inline, was bedeutet, dass sie alle auf derselben Linie sitzen würden, wenn wir das nicht gemacht hätten.

Dies ist ein häufiges Muster für die Formularstrukturierung. Einige Leute verwenden `<p>`-Elemente, um ihre Formularelemente zu trennen, andere verwenden {{htmlelement("div")}}, {{htmlelement("section")}}, oder sogar {{htmlelement("li")}}-Elemente. Es ist nicht wirklich wichtig, solange die verwendeten Elemente semantischen Sinn machen. Zum Beispiel macht es Sinn, die Gruppen von Formularelementen in separate Absätze oder Abschnitte von Inhalten oder sogar in Listenpunkte zu unterteilen. Es wäre weniger sinnvoll, sie als [Blockzitate](/de/docs/Web/HTML/Reference/Elements/blockquote), [Asides](/de/docs/Web/HTML/Reference/Elements/aside), oder [Adressen](/de/docs/Web/HTML/Reference/Elements/address) darzustellen.

Es gibt ein spezialisiertes Element zum Gruppieren von Formularelementen, das {{htmlelement("fieldset")}} heißt. Dies ist in bestimmten Umständen nützlich, wie bei komplexen Formularen und wenn mehrere Kontrollkästchen und Optionsfelder zusammengefügt werden. Wir werden später auf ein paar `<fieldset>`-Beispiele eingehen.

### `<input>`-Elemente

Die {{htmlelement("input")}}-Elemente repräsentieren die verschiedenen Datenpunkte, die in das Formular eingegeben werden. Lassen Sie uns eines der Beispiele aus unserem Basisformular untersuchen:

```html
<input type="text" name="name" id="name" required />
```

Die Attribute sind wie folgt:

- `type`: Gibt die Art des Formularelements an, das erstellt werden soll. Es gibt viele verschiedene Arten von Formularelementen, von einfachen Textfeldern verschiedener Typen bis zu Optionsfeldern, Kontrollkästchen und mehr. Der `text`-Typ rendert ein einfaches Textfeld, das jeden Wert akzeptieren kann.
- `name`: Gibt einen Namen für das Datenfeld an. Wenn das Formular abgesendet wird, werden die Daten als Name-/Wert-Paare gesendet. In jedem Fall ist der Name gleich dem Wert dieses `name`-Attributs, und der Wert ist gleich dem eingegebenen Text im Textfeld.
- `id`: Gibt eine ID an, die verwendet werden kann, um das Element zu identifizieren. In diesem Fall wird sie verwendet, um das Formularelement mit seinem `<label>` zu verknüpfen.
- `required`: Gibt an, dass ein Wert in das Formularelement eingegeben werden muss, bevor das Formular abgesendet werden kann. Dies sollte nur auf Eingaben gesetzt werden, die erforderlich sind, nicht auf optionale Felder.

Sie sollten sich bewusst sein, dass einige Eingabetypen normalerweise nicht ihre Werte aus Texteingaben in ein Feld erhalten. Zum Beispiel rendert [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color) ein Farbauswahl-Widget, aus dem Sie eine Farbe auswählen, während [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio) ein Optionsfeld-Element rendert, das ausgewählt oder nicht ausgewählt werden kann.

Im Fall von Optionsfeldern müssen Sie normalerweise den Wert, der übermittelt werden würde, wenn er ausgewählt ist, in einem speziellen `value`-Attribut bereitstellen. Beachten Sie, dass Sie _können_ ein `value`-Attribut auf Eingabetypen wie `text` und `color` angeben – die Wirkung ist, dass der Wert in das Formularfeld vorab ausgefüllt wird, wenn es erstmals gerendert wird.

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> 1. Gehen Sie erneut zu dem Beispiel, das Sie in einem separaten Tab geladen haben, und versuchen Sie, das Formular ohne einen Wert in einem der Felder einzugeben. Sie werden eine Fehlermeldung sehen, die neben dem "Name"-Feld erscheint und etwas wie "Bitte füllen Sie dieses Feld aus" (es wird in verschiedenen Browsern variieren) sagt. Dies ist das `required`-Attribut – und die standardmäßige clientseitige Formularvalidierung des Browsers – in Aktion.
> 2. Versuchen Sie nun, das Formular mit einem gültigen Namen im ersten Feld zu senden, aber einem Wert, der keine gültige E-Mail-Adresse ist, im zweiten Feld (etwas wie "aaaa" reicht aus). Diesmal werden Sie eine Fehlermeldung sehen, die neben dem "E-Mail"-Feld erscheint und etwas wie "Bitte geben Sie eine E-Mail-Adresse ein" sagt.
> 3. Für diese Übung müssen Sie den Formularcode bearbeiten. Sie können dies tun, indem Sie das lokale Beispiel, das Sie in Ihrem Texteditor erstellt haben, öffnen, es dort bearbeiten und speichern. Versuchen Sie, das Formular so zu bearbeiten, dass es `value="Bob"` auf dem ersten Eingabefeld enthält. Wenn Sie den Code neu laden, werden Sie sehen, dass das erste Feld standardmäßig einen Wert von "Bob" enthält.

#### Spezialisierte Texteingabefelder

Die zweite Übung oben wirft einen interessanten Punkt auf. Das zweite Eingabefeld erwartet speziell eine E-Mail-Adresse und validiert eingegebene Werte entsprechend. Wenn Sie sich den Form-Code nochmals ansehen, werden Sie sehen, warum – das zweite `<input>` hat einen `type` von `email`. Es gibt mehrere spezialisierte Texteingabetypen, die für spezifische Datentypen ausgelegt sind – [`<input type="number">`](/de/docs/Web/HTML/Reference/Elements/input/number), [`<input type="password">`](/de/docs/Web/HTML/Reference/Elements/input/password), [`<input type="tel">`](/de/docs/Web/HTML/Reference/Elements/input/tel) usw.

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Folgen Sie einigen der oben genannten Links, um herauszufinden, wofür diese Eingabetypen verwendet werden. Schauen Sie sich in unserem [`<input>`](/de/docs/Web/HTML/Reference/Elements/input) Referenzabschnitt um und sehen Sie, ob Sie weitere spezialisierte Texteingabetypen finden können.

### `<label>`-Elemente

Wie oben erwähnt, bieten {{htmlelement("label")}}-Elemente beschreibende Labels, die mit Formularelementen verknüpft sind und die Daten beschreiben, die in sie eingegeben werden sollen. Sie können beliebigen Textinhalt in `<label>`-Elementen verwenden, aber sie sollten genau beschreiben, welche Daten das zugeordnete Formularelement erwartet. Die Zuordnung erfolgt durch Zuweisen eines `id`-Attributes zum Formularelement und eines `for`-Attributes im `<label>`-Element mit dem gleichen Wert wie die `id` des Formularelements.

Zum Beispiel:

```html
<label for="name">Name (required):</label>
<input type="text" name="name" id="name" required />
```

`<label>`-Elemente sind aus mehreren Gründen wichtig, vor allem:

- Wenn sehbehinderte Benutzer einen Screenreader verwenden, um sie bei der Ansicht und Interaktion mit Webinhalten zu unterstützen, liest der Screenreader die zugeordnete Beschriftung laut vor, wenn er auf jedes Steuerelement trifft. Dies erleichtert es den Benutzern, zu verstehen, welche Inhalte in jedes Steuerelement eingegeben werden sollen.
- Sie ermöglichen es Ihnen, die Formularelemente durch Klicken auf ihren Beschriftungstext sowie auf die Steuerelemente zu fokussieren. Dies ist besonders nützlich für Mobiltelefonbenutzer, bei denen es schwierig sein kann, ein Formularelement mit dem Finger auf einem Touchscreen genau auszuwählen. Die Vergrößerung des **Treffbereichs** ist in solchen Fällen nützlich.

#### Explizite und implizite Formularbeschriftungen

Der oben gezeigte Formulartyp wird als **explizite Formularbeschriftung** bezeichnet – die Zuordnung zwischen Steuerelement und Beschriftung erfolgt explizit über die `id`- und `for`-Attribute. Sie können auch eine **implizite Formularbeschriftung** implementieren, indem Sie das Steuerelement in die Beschriftung verschachteln, wie folgt:

```html
<label>
  Name (required):
  <input type="text" name="name" required />
</label>
```

Die Verschachtelung schafft eine implizite Zuordnung zwischen Steuerelement und Beschriftung, und Sie benötigen nicht mehr die `id`- und `for`-Attribute.

Beide Ansätze sind in Ordnung, aber wir würden empfehlen, den expliziten Beschriftungsansatz zu verwenden. Dies liegt daran, dass die explizite Zuordnung in der Regel leichter zu identifizieren und zu verstehen ist, insbesondere wenn Ihr HTML-Code komplexer wird. Darüber hinaus behandeln Screenreader (und andere Hilfstechnologien) implizite Beschriftungen nicht immer korrekt.

Sie können mehr über bewährte Methoden beim Formulardesign in [HTML Inputs and Labels: A Love Story](https://css-tricks.com/html-inputs-and-labels-a-love-story/), csstricks.com (2021) lesen.

### Das `<button>`-Element

Wenn ein {{htmlelement("button")}}-Element innerhalb eines `<form>`-Elements enthalten ist, ist sein Standardverhalten, dass es das Formular übermittelt, vorausgesetzt, dass keine ungültigen Daten vorhanden sind, die die Übermittlung durch die clientseitige Formularvalidierung blockieren. Dieses Verhalten haben Sie bereits gesehen, als Sie mit unserem Basisformular-Beispiel gespielt haben.

Es gibt andere Schaltflächenverhalten, die über das `type`-Attribut des `<button>`-Elements angegeben werden können:

- `<button type="submit">` erklärt ausdrücklich, dass eine Schaltfläche sich wie eine Absenden-Schaltfläche verhalten soll. Sie müssen dies normalerweise nicht deklarieren, es sei denn, Sie haben aus irgendeinem Grund andere Schaltflächen innerhalb Ihres `<form>` und möchten klarmachen, welches die Absenden-Schaltfläche ist. Dies wird jedoch sehr selten der Fall sein.
- `<button type="reset">` erstellt eine _zurücksetzen-Schaltfläche_ – diese löscht sofort alle Daten aus dem Formular, wodurch es in seinen Ausgangszustand zurückgesetzt wird. **Verwenden Sie keine Rücksetzschaltflächen** – sie waren in den frühen Tagen des Webs beliebt, sind aber normalerweise eher lästig als hilfreich. Die meisten Menschen haben bereits die Erfahrung gemacht, ein langes Formular auszufüllen, nur um versehentlich die Rücksetzschaltfläche anstelle der Absenden-Schaltfläche zu drücken, was bedeutet, dass sie erneut von vorne beginnen müssen.
- `<button type="button">` erstellt eine Schaltfläche mit demselben Verhalten wie Schaltflächen, die außerhalb von `<form>`-Elementen angegeben sind. Wie wir bereits zuvor gesehen haben, machen sie von Haus aus absolut nichts, und JavaScript ist notwendig, um ihnen Funktionalitäten zu verleihen.

> [!NOTE]
> Sie können auch die oben genannten Schaltflächentypen mit einem `<input>`-Element erzeugen, bei dem dieselben `type`-Werte angegeben sind – [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit), [`<input type="reset">`](/de/docs/Web/HTML/Reference/Elements/input/reset), und [`<input type="button">`](/de/docs/Web/HTML/Reference/Elements/input/button). Diese haben jedoch viele Nachteile im Vergleich zu ihren `<button>`-Gegenstücken. Sie sollten lieber `<button>` verwenden.

## Eine Randbemerkung zur Barrierefreiheit

Wir haben bereits über die Wichtigkeit von Formularbeschriftungen für die Barrierefreiheit gesprochen, aber wir wollten auch einige Kommentare zur allgemeinen Bedeutung der Verwendung der richtigen semantischen Elemente bei der Erstellung von Formularen einfügen (zum Beispiel verwenden Sie eine `<button>`, um Ihr Formular abzusenden, und nicht ein `<div>`, das wie eine `<button>`-programmierte wird). Es ist durchaus möglich, eine Kombination aus CSS und JavaScript zu verwenden, um fast jedes HTML-Element wie ein Formularelement aussehen und sich verhalten zu lassen. Entwickler tun dies normalerweise aus Designgründen – einige Formularelemente sind schwer zu stylen.

Wenn Sie dies jedoch tun, machen Sie sich das Leben selbst und Ihren Benutzern schwerer. Der Browser stellt von Haus aus mehrere `<button>`- und Formularelementfunktionen bereit, ohne dass JavaScript oder anderer zusätzlicher Code erforderlich ist, um Formulare für alle Benutzer nutzbarer zu machen.

Zum Beispiel:

- Semantische Elemente werden von Hilfstechnologien wie Screenreadern verstanden, die ihre Bedeutung Benutzern vermitteln, die sie nicht sehen können.
- Formularelemente und Schaltflächen sind von Haus aus über die Tastatur zugänglich. Versuchen Sie im vorherigen Beispiel, mit <kbd>Tab</kbd> und <kbd>Shift</kbd> + <kbd>Tab</kbd> vorwärts und rückwärts zwischen den Formelementen zu navigieren (dies wird als "Tabbing" bezeichnet).
- Beachten Sie auch, wie das Tabben zwischen den Formelementen dazu führt, dass das fokussierte Element mit einem blauen Umriss hervorgehoben wird (dies wird als **Fokus-Umriss** bezeichnet). Dies ist ein wichtiges Feature für Tastaturnutzer, um zu wissen, wo sie sich gerade im Formular befinden.

Wenn Sie die richtigen semantischen Elemente nicht verwenden, um Ihre Formulare zu implementieren, müssen Sie all diese Funktionen erneut implementieren, andernfalls werden Ihre Formularelemente nicht so funktionieren, wie die Benutzer es erwarten und daher als defekt erscheinen. Es summiert sich alles.

## Andere Steuerungstypen

Es gibt viele andere Steuerungstypen, die Sie verwenden können, um Daten in einem Formular zu sammeln. Betrachten wir ein etwas komplexeres Beispiel und gehen wir es dann durch und erklären es.

> [!NOTE]
> In diesem Beispiel gehen wir davon aus, dass der Benutzer bereits registriert und angemeldet ist und daher keine Details wie Name und E-Mail gesammelt werden müssen.

```html live-sample___form-other-controls
<form action="./payment_page" method="get">
  <h2>Register for the meetup</h2>
  <p>
    <fieldset>
      <legend>Choose hotel room type (required):</legend>
      <div>
        <input type="radio" id="hotelChoice1" name="hotel" value="economy" checked />
        <label for="hotelChoice1">Economy (+$0)</label>

        <input type="radio" id="hotelChoice2" name="hotel" value="superior" />
        <label for="hotelChoice2">Superior (+$50)</label>

        <input type="radio" id="hotelChoice3" name="hotel" value="penthouse" disabled />
        <label for="hotelChoice3">Penthouse (+$150)</label>
      </div>
    </fieldset>
  </p>
  <p>
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
  </p>
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
```

Dies wird wie folgt gerendert:

{{EmbedLiveSample("form-other-controls", "100%", "500")}}

Wir empfehlen, dieses Beispiel in einem separaten Browser-Tab zu öffnen, während Sie die nächsten Abschnitte durcharbeiten, in denen wir jeden Steuerungstyp der Reihe nach anschauen. Um dies zu erreichen, kopieren Sie den Code in eine HTML-Datei mit Ihrem Code-Editor und öffnen Sie es in einem Browser-Tab.

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Bevor Sie weitermachen, spielen Sie mit den verschiedenen Formularelementen, wählen Sie einige Werte aus und versuchen Sie, das Formular abzusenden.

### Radio-Buttons

Die "Wählen Sie den Hotelzimmertyp"-Schaltflächen werden mit [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio)-Steuerelementen implementiert. Diese werden als eine Gruppe von Druckknöpfen gerendert, bei denen jeweils nur einer der Gruppe ausgewählt werden kann – Sie können nicht mehr als einen gleichzeitig auswählen. Sie sind nach den Tasten auf altmodischen Radios benannt, bei denen Sie eine Taste drücken und die vorher ausgewählte wieder herausspringt.

Unser Beispielcode sieht so aus:

```html-nolint
<fieldset>
  <legend>Choose hotel room type (required):</legend>
  <div>
    <input type="radio" id="hotelChoice1" name="hotel" value="economy" checked />
    <label for="hotelChoice1">Economy (+$0)</label>

    <input type="radio" id="hotelChoice2" name="hotel" value="superior" />
    <label for="hotelChoice2">Superior (+$50)</label>

    <input type="radio" id="hotelChoice3" name="hotel" value="penthouse" disabled />
    <label for="hotelChoice3">Penthouse (+$150)</label>
  </div>
</fieldset>
```

`radio`-Eingabetypen funktionieren größtenteils genauso wie `text`-Eingabetypen, jedoch mit ein paar Unterschieden:

- Die `name`-Attribute für jede Gruppe von Radioschaltflächen müssen denselben Wert enthalten, um sie als eine Gruppe zusammenzufassen. Wenn sie unterschiedliche Werte enthalten, sind sie tatsächlich separate Gruppen mit unterschiedlichen Werten bei der Übergabe.
- Sie müssen ein `value`-Attribut angeben, das den zu übermittelnden Wert für jede Radioschaltfläche enthält. Der übermittelte Wert wird ein Name/Wert-Paar sein, aber der Name wird immer derselbe sein, zum Beispiel `hotel=economy` oder `hotel=superior`.
- Das `<label>` für jede Radioschaltfläche sollte diese bestimmte Wertwahl beschreiben, anstatt den Gesamtwert, den Sie auswählen. Der bevorzugte Weg, um eine Beschreibung der gesamten Wertwahl bereitzustellen, besteht darin, sie in ein {{htmlelement("fieldset")}} zu packen, welches ein {{htmlelement("legend")}}-Element als Kind enthält, das die Beschreibung enthält.

> [!NOTE]
> Neben der Strukturierung und Beschriftung von Formularen haben Fieldsets andere Verwendungszwecke, wie z. B. das [Deaktivieren](#formularsteuerelemente_deaktivieren) eines ganzen Satzes von Steuerelementen als eine Einheit.

Es ist auch erwähnenswert, dass wir das `checked`-Attribut auf die erste Radioschaltfläche angewendet haben – dies bewirkt, dass sie ausgewählt wird, wenn die Seite erstmals geladen wird. Auf diese Weise rechtfertigt sich, die Markierung des Hotelzimmertypwertes als „erforderlich“ – eine Option wird immer ausgewählt sein, und Sie können kein Optionsfeld abwählen, ohne ein anderes auszuwählen.

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Entfernen Sie das `checked`-Attribut von der ersten Radioschaltfläche, speichern Sie, und laden Sie die Seite neu, um den Effekt zu sehen. Stellen Sie es wieder zurück, bevor Sie fortfahren.

#### Formularsteuerelemente deaktivieren

Im Beispiel mit den Radioschaltflächen werden Sie feststellen, dass die dritte Radioschaltfläche das `disabled`-Attribut hat. Dies bewirkt, dass das gerenderte Steuerelement ausgegraut und nicht auswählbar ist. Dies ist in vielen Situationen nützlich, in denen eine Option normalerweise verfügbar ist, gerade jedoch nicht. Zum Beispiel könnte ein Produkt nicht auf Lager sein, oder wie in unserem Beispiel der Fall, sind alle Penthouse-Suiten bereits ausgebucht!

Sie können das `disabled`-Attribut auf jedes Formularelement anwenden, einschließlich `<button>`-Elemente. `<fieldset>`-Elemente können auch das `disabled`-Attribut annehmen – dies bewirkt, dass jedes Formularelement innerhalb des Fieldsets deaktiviert wird.

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Versuchen Sie, das `disabled`-Attribut auf die beiden `<fieldset>`-Elemente zu setzen, speichern Sie, und laden Sie die Seite neu, um den Effekt zu sehen. Entfernen Sie sie wieder, bevor Sie fortfahren.

### Kontrollkästchen

Unsere "Kurse, die besucht werden sollen"-Auswähler werden mit [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox)-Steuerelementen implementiert. Diese werden als eine Gruppe von An/Aus-Kästchen angezeigt. Im Gegensatz zu Radioschaltflächen können Sie mehr als eines gleichzeitig auswählen.

```html-nolint
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

Wie Sie an den Codeausschnitten sehen können, werden Radioschaltflächen und Kontrollkästchen auf sehr ähnliche Weise implementiert (sie können auch `checked`-Attribute haben, um sie beim ersten Laden der Seite vorausgewählt zu rendern). Sie verhalten sich auch ziemlich ähnlich, außer dass Radioschaltflächen es Ihnen ermöglichen, null oder ein Element aus vielen auszuwählen, und Kontrollkästchen es Ihnen ermöglichen, null oder mehr aus vielen auszuwählen.

Der Hauptunterschied (abgesehen vom `type`-Wert!) besteht darin, dass jedes Kontrollkästchen einen anderen `name`-Wert hat und sie in der Regel keine `value`-Attribute haben. In Bezug auf das Verhalten bedeutet dies, dass sie unterschiedliche Datenwerte darstellen, während ein Satz von Radioschaltflächen nur einen darstellt. Bei der Übermittlung wird jedes Kontrollkästchen mit einem Wert von `on` übermittelt, wenn es ausgewählt wurde – `yoga=on`, `balloon=on` usw.

> [!NOTE]
> Es ist möglich, den übermittelten Wert für ein Kontrollkästchen durch Angabe eines `value`-Attributs zu ändern, zum Beispiel: `<input type="checkbox" id="yoga" name="yoga" value="yes" />` würde zu `yoga=yes` führen, wenn es ausgewählt ist. Es hat jedoch wenig Sinn, dies zu tun. Ein Kontrollkästchen wird entweder mit einem einzigen Wert übermittelt, wenn es ausgewählt ist, oder es wird überhaupt nicht übermittelt. Es spielt wirklich keine Rolle, welcher Wert an den Server gesendet wird.

### Dropdown-Menüs

Dropdown-Menüs, beispielsweise das "Wie kommen Sie hierher"-Auswahlfeld in unserem Beispiel, werden nicht mit einem `<input>`-Typ, sondern mit den {{htmlelement("select")}}- und {{htmlelement("option")}}-Elementen implementiert:

```html-nolint
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

Das `<select>`-Element umschließt alle unterschiedlichen Wertauswahlen. Es ist der Ort, an dem Sie das `id`-Attribut setzen, das das Steuerelement mit seinem Label verknüpft, und das `name`-Attribut, das den Namen des zu übermittelnden Datenfeldes setzt.

Jeder mögliche Wert für das Datenfeld wird von einem `<option>`-Element dargestellt, das in das `<select>`-Element verschachtelt ist. Jedes `<option>`-Element kann ein `value`-Attribut annehmen, das den zu sendenden Wert festlegt, wenn diese Option aus dem Dropdown-Menü ausgewählt wird. Wenn Sie keinen `value` angeben, wird der Text innerhalb der `<option></option>`-Tags als Wert verwendet.

> [!NOTE]
> Wenn Sie eine bestimmte Option beim Laden der Seite vorausgewählt haben möchten, können Sie ein `selected`-Attribut dem entsprechenden `<option>`-Element hinzufügen.

### Mehrzeilige Texteingabefelder

Mehrzeilige Texteingabefelder werden mit {{htmlelement("textarea")}}-Elementen erstellt:

```html-nolint
<label for="comments">Any other comments:</label>
<textarea id="comments" name="comments" rows="5" cols="33"></textarea>
```

Sie verhalten sich auf die gleiche Weise wie `<input type="text">`-Elemente, außer dass sie mehrere Zeilen Text zur Eingabe zulassen. Das `rows`-Attribut legt die Anzahl der Zeilen fest, die das Textfeld standardmäßig hoch sein wird, während das `cols`-Attribut die Anzahl der Spalten festlegt, die das Textfeld standardmäßig breit sein wird. Wenn sie nicht angegeben werden, lauten die verwendeten Werte `cols="20"` und `rows="2"`.

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Die meisten Browser rendern Textbereiche mit einem Ziehgriff in einer Ecke, der verwendet werden kann, um ihn zu vergrößern. Versuchen Sie, diesen in unserem Beispiel zu verwenden, um den Textbereich zu vergrößern.

## Formularvalidierung

Früher haben wir uns einige der grundlegenden clientseitigen Formularvalidierungen angeschaut, die der Browser bereitstellt. Das `required`-Attribut wird verwendet, um anzugeben, dass ein Feld ausgefüllt werden muss, bevor das Formular abgesendet werden kann; es prüft auch, ob der korrekte Werttyp für bestimmte Werttypen wie E-Mail-Adressen, URLs, Zahlen usw. eingegeben wird. Validierung ist wichtig aus zwei Hauptgründen:

- Sicherstellen, dass die Daten im richtigen Format übermittelt werden, damit sie keine Fehler in Ihrer Anwendung verursachen.
- Sicherstellen, dass Daten keine Sicherheitsprobleme verursachen. Böse Menschen wissen, wie man Daten so formatiert, dass sie auf unsicheren Anwendungen ausgeführt werden können, um Befehle zum Löschen von Datenbanken oder zur Übernahme eines Systems zu starten.

Formularvalidierung ist ein riesiges Thema, das über den Rahmen dieses Artikels hinausgeht, daher belassen wir es hier zunächst. Denken Sie einfach daran, dass es zwei Arten der Formularvalidierung gibt:

- Clientseitige Validierung, die im Browser stattfindet und mit einer Kombination aus Formularvalidierungsattributen (wie `required`) und JavaScript implementiert wird. Die clientseitige Validierung ist nützlich, um Benutzern sofortige Hinweise zu geben, wenn sie falsche Daten eingegeben haben, ist aber nicht so effektiv, um bösartige Daten von der Übermittlung abzuhalten. Es ist zu einfach, JavaScript zu deaktivieren oder den clientseitigen Code so zu verändern, dass die Validierung nicht mehr funktioniert.
- Serverseitige Validierung, die auf dem Server stattfindet und mit der Sprache, die der Server verwendet, implementiert wird. Fehlerhaft formatierte Nachrichten können versehentlich oder mit Absicht an einen Server gesendet werden. Die konventionelle Weisheit besagt, dass Sie sicherstellen sollten, dass Ihr Server nichts von dem vertraut, was ein Client sendet, um Fehler oder Sicherheitsprobleme zu vermeiden, die durch fehlerhafte Nachrichten verursacht werden. Serverseitige Validierung ist großartig, um bösartige Nachrichten zu stoppen, da es schwieriger ist, den auf dem Server laufenden Code zu manipulieren. Serverseitige Validierung ist nicht so gut darin, Benutzern Hinweise auf falsche Daten zu geben, da die Daten an den Server gesendet werden müssen, um validiert zu werden, dann muss das Ergebnis an den Client zurückgesendet werden, bevor der Benutzer benachrichtigt werden kann.

Kurz gesagt, entscheiden Sie sich nicht zwischen der Verwendung von entweder clientseitiger oder serverseitiger Validierung – Sie benötigen beides. Sie benötigen die clientseitige Validierung, um den Benutzern Feedback zu ihrer Eingabe zu geben, und die serverseitige Validierung, um sicherzustellen, dass Nachrichten in einem Format vorliegen, das Ihr Server sicher handhaben kann. Wenn Sie mehr über Validierung lernen möchten, ist ein guter Anfangspunkt [Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation).

## Zusammenfassung

Das war's für den Moment. Es gibt noch viel mehr über Formulare zu wissen, aber für den Moment haben wir Ihnen genug Verständnis vermittelt, um mit Ihren Studien fortzufahren.

Als nächstes schauen wir uns an, wie man Probleme im HTML-Code debuggen kann.

## Siehe auch

- [Webformulare – Arbeiten mit Benutzerdaten](/de/docs/Learn_web_development/Extensions/Forms)

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content/Debugging_HTML", "Learn_web_development/Core/Structuring_content")}}
