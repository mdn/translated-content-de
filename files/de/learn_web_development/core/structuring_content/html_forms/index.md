---
title: Formulare und Schaltflächen in HTML
slug: Learn_web_development/Core/Structuring_content/HTML_forms
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content/Debugging_HTML", "Learn_web_development/Core/Structuring_content")}}

HTML-Formulare und Schaltflächen sind leistungsstarke Werkzeuge zur Interaktion mit den Benutzern einer Website. Am häufigsten bieten sie den Benutzern Steuerelemente zur Manipulation einer Benutzeroberfläche (UI) oder zur Eingabe von Daten, wenn erforderlich.

In diesem Artikel bieten wir eine Einführung in die Grundlagen von Formularen und Schaltflächen. Es gibt noch viel mehr zu wissen — viele Eingabetypen und Formularfunktionen werden nicht erwähnt —, aber dieser Artikel wird Ihnen eine solide Grundlage für die meisten Fälle geben. Die fortgeschrittene oder spezialisierte Nutzung können Sie bei Bedarf im Rahmen des kontinuierlichen Lernens, das Sie im Laufe Ihrer Karriere durchlaufen werden, erlernen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML, wie sie in
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        > behandelt werden. Textliche Semantik wie <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
          >Überschriften und Absätze</a
        > und <a href="/de/docs/Learn_web_development/Core/Structuring_content/Lists"
          >Listen</a
        >. <a href="/de/docs/Learn_web_development/Core/Structuring_content/Structuring_documents"
          >Strukturierendes HTML</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernergebnisse:</th>
      <td>
        <ul>
          <li>Ein Bewusstsein dafür, dass Formulare und Schaltflächen zusammen mit Links die Hauptwerkzeuge für Benutzer sind, um mit einer Website zu interagieren.</li>
          <li>Verschiedene Schaltflächentypen.</li>
          <li>Gängige <code>&lt;input&gt;</code>-Typen.</li>
          <li>Gängige Attribute wie <code>name</code> und <code>value</code>.</li>
          <li>Das <code>&lt;form&gt;</code>-Element und die Grundlagen der Formularübermittlung.</li>
          <li>Formulare zugänglich machen mit Labels und korrekten Semantiken.</li>
          <li>Andere Steuerungstypen: <code>&lt;textarea&gt;</code>, <code>&lt;select&gt;</code> und <code>&lt;option&gt;</code>.</li>
          <li>Grundlagen der clientseitigen Validierung.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Interaktion mit Benutzern

Bisher haben Sie in dem Kurs einige Möglichkeiten gesehen, wie Benutzer mit dem Web interagieren können:

- [Links](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links) können verwendet werden, um zu verschiedenen Inhaltsbereichen zu navigieren, entweder auf derselben Seite oder auf einer anderen Seite.
- `<video>`- und `<audio>`-Elemente bieten in der Regel Steuerungen wie Abspielen/Pause, Vorlauf, Rücklauf usw., mit denen Benutzer Medieninhalte nach Belieben konsumieren können.

Diese Funktionen erleichtern jedoch in der Regel einseitige Interaktionen, wobei Benutzer Inhalte passiv konsumieren. Das ist in Ordnung, aber das Web ist ein zweiseitiges Erlebnis. Website-Benutzer legen fest, wie sie Inhalte und Dienste erleben möchten. Sie bestellen Taxis und fordern Rückrufe an. Sie geben Feedback und äußern Beschwerden. Sie kaufen Produkte und lassen sie sich nach Hause liefern.

Um dieses zweiseitige Erlebnis zu bieten, müssen Sie Schaltflächen und Formulare verwenden.

Schaltflächen werden in der Regel mit HTML-{{htmlelement("button")}}-Elementen erstellt (sie werden auch manchmal mit {{htmlelement("input")}}-Elementen erstellt, deren `type`-Attribute auf einen Wert wie `button` oder `submit` gesetzt sind). Diese Druckschaltflächen sind vielseitig einsetzbar — Sie können sie so programmieren, dass sie jede gewünschte Funktionalität auslösen, nur begrenzt durch Ihre Vorstellungskraft und Programmierkenntnisse.

Formulare werden mit Elementen wie {{htmlelement("form")}}, {{htmlelement("label")}}, {{htmlelement("input")}} und {{htmlelement("select")}} erstellt. Formularelemente können verwendet werden, um komplexere Steuerungen zu erstellen, als einfache Schaltflächen es ermöglichen — zum Beispiel ein Dropdown-Menü, das mehrere Optionen enthält und es Ihnen ermöglicht, zwischen verschiedenen Themen für ein Benutzeroberflächenelement zu wählen.

Entscheidend ist jedoch, dass sie auch verwendet werden können, um Formulare zu erstellen, die Benutzer ausfüllen müssen, wenn sie Informationen an einen Website-Server übermitteln müssen. Denken Sie an E-Commerce-Seiten — wenn Sie nach einem Produkt suchen möchten, verwenden Sie ein Formular, um Suchbegriffe einzugeben. Wenn Sie einige Artikel bezahlen und die Lieferung abschließen möchten, verwenden Sie ein Formular, um Ihre Postadresse einzugeben, und ein weiteres Formular, um Ihre Kreditkartendaten einzugeben.

Wir konzentrieren uns hauptsächlich auf diese — eher traditionelle — Nutzung von Formularelementen in diesem Artikel. Beachten Sie, dass Schaltflächen auch häufig in Formularen verwendet werden, um die eingegebenen Daten an den Server zu übermitteln.

Mit dieser wichtigen Theorie im Hinterkopf, lassen Sie uns nun den Code erkunden und sehen, wie Schaltflächen und Formulare implementiert werden.

## Schaltflächen

Wie oben angedeutet, haben Schaltflächen im Web einige Hauptanwendungen. Zunächst einmal werden sie verwendet, um Funktionalität auszulösen, was nützlich ist, wenn man UI-Steuerungen erstellt. Die einfachste Schaltfläche wird mit dem folgenden Code implementiert:

```html live-sample___basic-button
<button>Press me</button>
```

Dies wird folgendermaßen dargestellt:

{{EmbedLiveSample("basic-button", "100%", "60")}}

Der Text, der zwischen den `<button></button>`-Tags erscheint, wird innerhalb der Schaltfläche angezeigt und vom Browser mit einigen grundlegenden Styles versehen, damit er standardmäßig wie eine Schaltfläche aussieht und sich verhält. Soweit, so gut. Es gibt jedoch ein Problem hier — unsere einsame Schaltfläche wird alleine nichts Nützliches tun. Um sie nützlich zu machen, müssen Sie sie in ein Formular einfügen (das wir später behandeln) oder etwas JavaScript hinzufügen.

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

Es würde Ihnen die folgende Ausgabe geben — versuchen Sie, darauf zu klicken:

{{EmbedLiveSample("basic-button-with-js", "100%", "60")}}

Es wird nicht erwartet, dass Sie jetzt verstehen, wie das JavaScript funktioniert. Sie werden später im Kurs mehr darüber erfahren.

Im nächsten Abschnitt sehen Sie eine Demonstration der zweiten Hauptanwendung von Schaltflächen — zum Absenden von Formularen.

## Die Anatomie eines Formulars

Ein einfaches Formular enthält drei Dinge:

- Ein {{htmlelement("form")}}-Element, das alle anderen Formularinhalte umschließt. Alle Formularelemente innerhalb der `<form></form>`-Tags gehören zum selben Formular, und ihre Daten sind enthalten, wenn das Formular übermittelt wird.
- Ein oder mehrere Paare, jeweils bestehend aus einem {{htmlelement("label")}}-Element und einem Formularelement (in der Regel ein {{htmlelement("input")}}-Element, es gibt aber auch andere Typen, zum Beispiel {{htmlelement("select")}}):
  - Das Formularelement erlaubt dem Benutzer, einige Daten auszuwählen oder einzugeben, die beim Absenden des Formulars an den Server gesendet werden.
  - Das `<label>`-Element sorgt für eine identifizierende Beschriftung, die mit dem Formularelement verbunden ist und die Daten beschreibt, die eingegeben werden sollen.
- Ein {{htmlelement("button")}}-Element, das zum Absenden des Formulars verwendet wird.

Sehen wir uns ein einfaches Beispiel an, das die obigen drei Elemente enthält. Dieses Formular könnte verwendet werden, um nach dem Namen und der E-Mail eines Benutzers zu fragen, um ihn für einen Newsletter zu registrieren (keine Sorge — es ist nicht mit einem Server verbunden, sodass es derzeit nichts tun wird).

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

Dies wird folgendermaßen dargestellt:

{{EmbedLiveSample("form-anatomy", "100%", "200")}}

Aufgrund der Funktionsweise von MDN können Sie Text in die Eingabefelder eingeben, aber Sie werden nicht sehen, dass das Formular korrekt abschließt, wenn Sie die Schaltfläche drücken. Um den folgenden Abschnitten zu folgen, kopieren Sie den obigen HTML-Code in eine neue HTML-Datei mit Ihrem [Code-Editor](/de/docs/Learn_web_development/Getting_started/Environment_setup/Code_editors) und öffnen Sie ihn in einem neuen Browser-Tab.

### Das `<form>`-Element

Wie bereits gesagt, fungiert das {{htmlelement("form")}}-Element als äußerer Wrapper für das Formular und gruppiert alle darin enthaltenen Formularelemente. Wenn die `<button>`-Schaltfläche gedrückt wird, werden alle Daten, die von den Formularelementen dargestellt werden, an den Server übermittelt. Das `<form>`-Element kann viele Attribute aufnehmen, aber die beiden wichtigsten, die wir hier aufgenommen haben, sind die folgenden:

- `action`: Beinhaltet einen Pfad zu der Seite, an die wir die übermittelten Formulardaten zur Verarbeitung senden möchten. Später, nachdem Sie das Formular abgesendet haben, werden Sie `/submit_page` in der URL sehen. Sie werden auch eine {{HTTPStatus("404")}}-Fehlermeldung erhalten, da die Seite eigentlich nicht existiert, aber das ist jetzt in Ordnung.
- `method`: Gibt die Methode zur Datenübertragung an, die Sie verwenden möchten, um die Formulardaten an den Server zu senden. Machen Sie sich darüber für den Moment keine Sorgen; der Wert `get` bewirkt, dass die Daten als Parameter am Ende der URL gesendet werden.

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Gehen Sie zum Beispiel im separaten Tab, versuchen Sie, einen Namen wie "Bob" und eine E-Mail-Adresse wie "bob@bob.com" einzugeben.
>
> Die obigen zwei Attribute bewirken, dass die Formulardaten in einer URL ähnlich der folgenden übermittelt werden:
>
> `/some/url/submit_page?name=Bob&email=bob%40bob.com`

#### Strukturierung von Formularen

Sie können beliebige HTML-Elemente innerhalb eines `<form>`-Elements einfügen, um die Formularelemente selbst zu strukturieren und Container bereitzustellen, die mit CSS für das Styling usw. angesprochen werden können.

In unserem Beispiel haben wir ein [Heading-Element](/de/docs/Web/HTML/Element/Heading_Elements) (`<h2>`) hinzugefügt, um den Zweck des Formulars zu beschreiben.

Wir haben jedes Eingabe-/Label-Paar und die Absenden-Schaltfläche auch in einem separaten {{htmlelement("p")}} untergebracht, so dass jedes auf einer separaten Zeile erscheint. Diese Elemente sind standardmäßig inline, was bedeutet, dass sie alle auf derselben Zeile sitzen würden, wenn wir das nicht tun würden.

Dies ist ein übliches Muster für die Strukturierung von Formularen. Einige Leute verwenden `<p>`-Elemente, um ihre Formularelemente zu trennen, andere verwenden {{htmlelement("div")}}, {{htmlelement("section")}} oder sogar {{htmlelement("li")}}-Elemente. Es spielt keine große Rolle, solange die verwendeten Elemente semantisch sinnvoll sind. Zum Beispiel macht es Sinn, Formularelementgruppen in separate Absätze oder Inhaltsabschnitte oder sogar Elemente in einer Liste zu unterteilen. Es wäre weniger sinnvoll, sie als [Blockzitate](/de/docs/Web/HTML/Element/blockquote), [Zwischentexte](/de/docs/Web/HTML/Element/aside) oder [Adressen](/de/docs/Web/HTML/Element/address) darzustellen.

Es gibt ein spezialisiertes Element zum Gruppieren von Formularelementen namens {{htmlelement("fieldset")}}. Dies ist in bestimmten Umständen nützlich, wie in komplexen Formularen und beim Gruppieren von mehreren Kontrollkästchen und Optionsschaltflächen. Wir werden später ein paar `<fieldset>`-Beispiele sehen.

### `<input>`-Elemente

Die {{htmlelement("input")}}-Elemente stellen die verschiedenen Datenobjekte dar, die in das Formular eingegeben werden. Lassen Sie uns eines der Beispiele aus unserem grundlegenden Formular untersuchen:

```html
<input type="text" name="name" id="name" required />
```

Die Attribute sind wie folgt:

- `type`: Bestimmt die Art des zu erstellenden Formularelements. Es gibt viele verschiedene Arten von Formularelementen, von einfachen Textfelder verschiedener Typen bis hin zu Options- und Kontrollkästchen und mehr. Der Typ `text` rendert ein einfaches Textfeld, das einen beliebigen Wert akzeptieren kann.
- `name`: Bestimmt einen Namen für das Datenobjekt. Wenn das Formular abgesendet wird, werden die Daten als Name/Wert-Paare gesendet. In jedem Fall ist der Name gleich dem Wert des `name`-Attributs und der Wert ist gleich dem eingegebenen Text im Textfeld.
- `id`: Bestimmt eine ID, die verwendet werden kann, um das Element zu identifizieren. In diesem Fall wird es verwendet, um das Formularelement mit seinem `<label>` zu verknüpfen.
- `required`: Bestimmt, dass ein Wert in das Formularelement eingegeben werden muss, bevor das Formular abgeschickt werden kann. Dies sollte nur bei den Eingaben gesetzt werden, die Sie benötigen, nicht bei optionalen Feldern.

Sie sollten sich bewusst sein, dass einige Eingabetypen in der Regel ihre Werte nicht aus eingegebenem Text in einem Feld erhalten. Zum Beispiel rendert [`<input type="color">`](/de/docs/Web/HTML/Element/input/color) ein Farbauswahl-Widget, aus dem Sie eine Farbe wählen können, während [`<input type="radio">`](/de/docs/Web/HTML/Element/input/radio) ein Optionsschaltflächen-Steuerelement rendert, das ausgewählt oder nicht ausgewählt werden kann.

Im Fall von Optionsschaltflächen müssen Sie in der Regel den Wert, der beim Auswählen gesendet würde, in einem spezifischen `value`-Attribut angeben. Beachten Sie, dass Sie _können_ ein `value`-Attribut bei Eingabetypen wie `text` und `color` angeben — der Effekt ist, dass der Wert beim ersten Rendern in das Formularfeld voreingefüllt wird.

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> 1. Gehen Sie erneut zum Beispiel im separaten Tab und versuchen Sie, das Formular ohne eingegebenen Wert in beiden Feldern abzusenden. Sie werden eine Fehlermeldung neben dem "Name"-Feld sehen, die etwas wie "Bitte füllen Sie dieses Feld aus" sagt (sie variiert je nach Browser). Dies ist das `required`-Attribut — und die standardmäßige clientseitige Formularvalidierung des Browsers — in Aktion.
> 2. Versuchen Sie nun, das Formular mit einem gültigen Namen im ersten Feld, aber einem Wert, der keine gültige E-Mail-Adresse ist, im zweiten Feld (etwas wie "aaaa" wird genügen) abzusenden. Dieses Mal sehen Sie eine Fehlermeldung neben dem "E-Mail"-Feld, die besagt "Bitte geben Sie eine E-Mail-Adresse ein".
> 3. Für diese Übung müssen Sie den Formcode bearbeiten. Sie können dies tun, indem Sie das lokale Beispiel, das Sie in Ihrem Texteditor erstellt haben, öffnen, es dort bearbeiten und speichern. Versuchen Sie, das Formular zu bearbeiten, um `value="Bob"` beim ersten Eingabefeld hinzuzufügen. Wenn Sie den Code neu laden, sehen Sie, dass das erste Feld standardmäßig den Wert "Bob" eingetragen hat.

#### Spezialisierte Textfeldeingaben

Die zweite Übung oben wirft eine interessante Frage auf. Das zweite Eingabefeld erwartet spezifisch eine E-Mail-Adresse und validiert eingegebene Werte entsprechend. Wenn Sie sich den Formcode erneut ansehen, werden Sie den Grund sehen — das zweite `<input>` hat einen `type` von `email`. Es gibt mehrere spezialisierte Textfeldeingabetypen, die zur Behandlung bestimmter Datentypen entwickelt wurden — [`<input type="number">`](/de/docs/Web/HTML/Element/input/number), [`<input type="password">`](/de/docs/Web/HTML/Element/input/password), [`<input type="tel">`](/de/docs/Web/HTML/Element/input/tel) usw.

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Folgen Sie einigen der obigen Links, um herauszufinden, wofür diese Eingabetypen verwendet werden. Schauen Sie sich unser [`<input>`](/de/docs/Web/HTML/Element/input) Referenzmaterial an und sehen Sie, ob Sie noch mehr spezialisierte Textfeldeingabetypen finden können.

### `<label>`-Elemente

Wie oben erwähnt, bieten {{htmlelement("label")}}-Elemente beschreibende Labels, die mit Formulareingabefeldern verknüpft sind und die Datenbeschreibung darstellen, die in diese eingegeben werden sollen. Sie können beliebige Textinhalte in `<label>`-Elemente einfügen, aber sie sollten genau beschreiben, welche Daten im zugehörigen Formelement erwartet werden. Die Verknüpfung wird hergestellt, indem dem Formularelement ein `id`-Attribut zugeordnet wird und dann dem `<label>`-Element ein `for`-Attribut mit demselben Wert wie die `id` des Steuerelements gegeben wird.

Beispiel:

```html
<label for="name">Name (required):</label>
<input type="text" name="name" id="name" required />
```

`<label>`-Elemente sind aus mehreren Gründen wichtig, insbesondere:

- Wenn sehbehinderte Benutzer einen Screenreader verwenden, um ihnen beim Lesen und Interagieren mit Web-Seiten-Inhalten zu helfen, liest der Screenreader den zugehörigen Label-Text vor, wenn jedes Steuerelement erkannt wird. Dies erleichtert es den Benutzern, zu verstehen, welche Inhalte in jedes Steuerelement eingegeben werden sollen.
- Sie ermöglichen es Ihnen, die Formularelemente zu fokussieren, indem Sie auf ihren Label-Text klicken sowie auf die Steuerelemente. Dies ist besonders nützlich für Benutzer von Mobiltelefonen, bei denen es schwierig sein kann, ein Formularelement mit dem Finger auf einem Touchscreen exakt auszuwählen. In solchen Umständen ist es nützlich, die **Trefffläche** zu vergrößern.

#### Explizite und implizite Formularlabels

Der oben gezeigte Formularlabel-Stil wird als **explizites Formularlabel** bezeichnet — die Verknüpfung zwischen Steuerelement und Label wird explizit durch die `id`- und `for`-Attribute hergestellt. Sie können auch ein **implizites Formularlabel** implementieren, indem Sie das Steuerungselement innerhalb des Labels verschachteln, wie folgt:

```html
<label>
  Name (required):
  <input type="text" name="name" required />
</label>
```

Die Verschachtelung macht eine implizite Assoziation zwischen Steuerelement und Label und die `id`- und `for`-Attribute sind nicht mehr erforderlich.

Beide Ansätze sind in Ordnung, aber wir empfehlen die Verwendung des expliziten Label-Ansatzes. Dies liegt daran, dass die explizite Verknüpfung in der Regel leichter zu identifizieren und zu verstehen ist, insbesondere wenn Ihr HTML-Code komplexer wird. Darüber hinaus unterstützen Screenreader (und andere assistive Technologien) nicht immer korrekt implizite Labels.

Weitere Informationen zu den besten Praktiken bei der Formularbeschriftung finden Sie in [HTML Inputs and Labels: A Love Story](https://css-tricks.com/html-inputs-and-labels-a-love-story/), csstricks.com (2021).

### Das `<button>`-Element

Wenn ein {{htmlelement("button")}}-Element innerhalb eines `<form>`-Elements enthalten ist, ist sein Standardverhalten, dass es das Formular absendet, sofern keine ungültigen Daten vorhanden sind, die die Übermittlung durch die clientseitige Formularvalidierung blockieren. Dieses Verhalten haben Sie bereits bemerkt, als Sie mit unserem einfachen Formulardemo oben gespielt haben.

Es gibt andere Schaltflächenverhalten, die über das `type`-Attribut des `<button>`-Elements angegeben werden können:

- `<button type="submit">` erklärt explizit, dass eine Schaltfläche wie eine Absenden-Schaltfläche verhalten soll. Sie müssen dies eigentlich nicht deklarieren, es sei denn, Sie haben zu irgendeinem Zeitpunkt andere Schaltflächen in Ihrem `<form>` und möchten klarstellen, welche die Absende-Schaltfläche ist. Dies wird sehr selten passieren.
- `<button type="reset">` erstellt eine _Zurücksetzen-Schaltfläche_ — dies löscht sofort alle Daten aus dem Formular und setzt es auf seinen Anfangszustand zurück. **Verwenden Sie keine Zurücksetzen-Schaltflächen** — sie waren in den frühen Tagen des Webs beliebt, aber sie sind in der Regel eher ärgerlich als hilfreich. Die meisten Menschen haben schon einmal ein langes Formular ausgefüllt, nur um versehentlich auf die Zurücksetz-Schaltfläche statt auf die Absende-Schaltfläche zu klicken und erneut beginnen zu müssen.
- `<button type="button">` erstellt eine Schaltfläche mit demselben Verhalten wie Schaltflächen, die außerhalb von `<form>`-Elementen angegeben sind. Wie wir früher gesehen haben, tun sie standardmäßig nichts und benötigen JavaScript, um ihnen Funktionalität zu geben.

> [!NOTE]
> Sie können auch die oben genannten Schaltflächentypen mit einem `<input>`-Element mit denselben `type`-Werten erstellen — [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit), [`<input type="reset">`](/de/docs/Web/HTML/Element/input/reset) und [`<input type="button">`](/de/docs/Web/HTML/Element/input/button). Diese haben jedoch viele Nachteile im Vergleich zu ihren `<button>`-Äquivalenten. Sie sollten `<button>` verwenden.

## Ein Exkurs zur Barrierefreiheit

Wir haben bereits über die Wichtigkeit von Formularlabels für die Barrierefreiheit gesprochen, aber wir wollten auch noch einige Kommentare zur allgemeinen Bedeutung der Verwendung der korrekten semantischen Elemente zur Erstellung von Formularen aufnehmen (zum Beispiel nutzen Sie ein `<button>` zum Absenden Ihres Formulars und nicht ein `<div>`, das wie ein `<button>` programmiert ist). Es ist durchaus möglich, mit einer Kombination aus CSS und JavaScript fast jedes HTML-Element wie ein Formelement aussehen und verhalten zu lassen. Entwickler tun dies in der Regel aus Designgründen — einige Formularelemente sind schwer zu gestalten.

Wenn Sie dies jedoch tun, machen Sie sich und Ihren Benutzern das Leben schwerer. Der Browser stellt standardmäßig mehrere `<button>`- und Formkontrollfunktionen bereit, ohne dass JavaScript oder anderer zusätzlicher Code benötigt wird, um Formulare für alle Benutzer benutzerfreundlicher zu gestalten.

Beispielsweise:

- Semantische Elemente werden von assistiven Technologien wie Screenreadern verstanden, die ihre Bedeutung für Benutzer, die sie nicht sehen können, kommunizieren.
- Formularelemente und Schaltflächen sind standardmäßig tastaturzugänglich. Im vorherigen Beispiel versuchen Sie, sich mit <kbd>Tab</kbd> und <kbd>Shift</kbd> + <kbd>Tab</kbd> (das wird „Tabben“ genannt) vorwärts und rückwärts zwischen den Formelementen zu bewegen.
- Beachten Sie auch, dass das Tabben zwischen den Formelementen dazu führt, dass das fokussierte Element mit einem blauen Umriss hervorgehoben wird (genannt **Fokusumriss**). Dies ist eine wichtige Funktion für Tastaturnutzer, um zu wissen, wo sie sich gerade im Formular befinden.

Wenn Sie nicht die korrekten semantischen Elemente zur Implementierung Ihrer Formulare nutzen, müssen Sie all diese Funktionen erneut implementieren, ansonsten verhalten sich Ihre Formularelemente nicht so, wie Benutzer es erwarten, und erscheinen daher fehlerhaft. Es summiert sich alles.

## Andere Steuerungstypen

Es gibt viele andere Steuerungstypen, die Sie verwenden können, um Daten in einem Formular zu sammeln. Sehen wir uns ein etwas komplexeres Beispiel an, und dann werden wir es weiter untersuchen und erklären.

> [!NOTE]
> In diesem Beispiel gehen wir davon aus, dass der Benutzer bereits registriert und angemeldet ist, sodass keine Angaben wie Name und E-Mail erforderlich sind.

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

Dies wird folgendermaßen dargestellt:

{{EmbedLiveSample("form-other-controls", "100%", "500")}}

Wir empfehlen Ihnen, dieses Beispiel in einem separaten Browser-Tab zu öffnen, während Sie die nächsten Abschnitte durchgehen, in denen wir uns jeden Steuertyp der Reihe nach ansehen. Um dies zu erreichen, kopieren Sie den Code in eine HTML-Datei mit Ihrem Code-Editor und öffnen Sie ihn in einem Browsertab.

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Bevor Sie weitermachen, spielen Sie mit den verschiedenen Formularelementen, wählen Sie einige Werte aus und versuchen Sie, das Formular zu übermitteln.

### Optionsschaltflächen

Die "Zimmerart im Hotel auswählen"-Schaltflächen werden mit [`<input type="radio">`](/de/docs/Web/HTML/Element/input/radio)-Steuerungen implementiert. Diese werden als eine Gruppe von Druckknopfsteuerungen gerendert, bei denen nur eines der Set ausgewählt werden kann — Sie können nicht mehr als eines gleichzeitig auswählen. Sie sind nach den Tasten benannt, die auf altmodischen Radios zu finden sind, bei denen Sie eine Taste drücken und die zuvor ausgewählte wieder herausspringt.

Unser Beispielcode sieht wie folgt aus:

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

`radio`-Eingabefelder funktionieren meist genauso wie `text`-Eingabefelder, aber es gibt ein paar Unterschiede:

- Die `name`-Attribute für jeden Satz von Optionsschaltflächen müssen denselben Wert enthalten, um sie als ein Set zusammenzuführen. Wenn sie unterschiedliche Werte enthalten, werden sie effektiv separate Sets, mit unterschiedlichen Werten bei der Übermittlung.
- Sie müssen ein `value`-Attribut hinzufügen, das den zu übermittelnden Wert für jede Optionsschaltfläche enthält. Der übermittelte Wert wird ein Name/Wert-Paar sein, aber der Name wird immer gleich sein, zum Beispiel `hotel=economy` oder `hotel=superior`.
- Das `<label>` für jede Optionsschaltfläche sollte diese bestimmte Wertsoption beschreiben, anstatt des gesamten zu wählenden Wertes. Die bevorzugte Methode, um eine Beschreibung der gesamten Wertauswahl bereitzustellen, besteht darin, sie in einem {{htmlelement("fieldset")}} zu umschließen, das ein {{htmlelement("legend")}}-Element als Kind akzeptiert, welches die Beschreibung enthält.

> [!NOTE]
> Neben der Strukturierung und Beschriftung von Formularen haben Fieldsets andere Verwendungszwecke, wie zum Beispiel das [Deaktivieren](#deaktivieren_von_formularelementen) einer gesamten Steuereinheit als eine Einheit.

Es ist auch erwähnenswert, dass wir das `checked`-Attribut auf die erste Optionsschaltfläche angewendet haben — dies bewirkt, dass sie ausgewählt wird, wenn die Seite zum ersten Mal geladen wird. So rechtfertigen wir die Kennzeichnung des Zimmertyptyps als „erforderlich“ — eine Option wird immer ausgewählt sein, und Sie können eine Optionsschaltfläche nicht ohne Auswahl einer anderen abwählen.

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Versuchen Sie, das `checked`-Attribut von der ersten Optionsschaltfläche zu entfernen, speichern Sie und laden Sie neu, um den Effekt zu sehen. Setzen Sie es zurück, bevor Sie weitergehen.

#### Deaktivieren von Formularelementen

Im Beispiel mit den Optionsschaltflächen werden Sie bemerken, dass die dritte Radiotaste das `disabled`-Attribut gesetzt hat. Dies führt dazu, dass das gerenderte Steuerungselement ausgegraut und nicht auswählbar wird. Dies ist in vielen Situationen nützlich, in denen eine Option normalerweise verfügbar, gerade jedoch nicht verfügbar ist. Zum Beispiel könnte ein Produkt vergriffen sein, oder in unserem Beispiel gibt es keine Penthouse-Suiten mehr!

Sie können das `disabled`-Attribut für jedes Formularelement setzen, einschließlich `<button>`-Elementen. `<fieldset>`-Elemente können auch das `disabled`-Attribut akzeptieren — das führt dazu, dass alle Formularelemente innerhalb des Fieldsets deaktiviert werden.

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Versuchen Sie, das `disabled`-Attribut auf die beiden `<fieldset>`-Elemente zu setzen, speichern Sie und laden Sie neu, um den Effekt zu sehen. Entfernen Sie sie wieder, bevor Sie weitermachen.

### Kontrollkästchen

Unsere "Kurse besuchen, um" Selektoren sind mit [`<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox)-Steuerungen implementiert. Diese werden als eine Gruppe von An/Aus-Kontrollkästchen dargestellt. Im Gegensatz zu Optionsschaltflächen können Sie mehr als eines gleichzeitig auswählen.

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

Wie Sie an den Code-Snippets sehen, sind Radiobuttons und Kontrollkästchen auf sehr ähnliche Weise implementiert (sie können auch `checked`-Attribute erhalten, um sie beim Laden der Seite vorab auszuwählen). Sie verhalten sich auch ziemlich ähnlich, außer dass Optionsschaltflächen Ihnen erlauben, null oder ein Element aus vielen auszuwählen, während Kontrollkästchen Ihnen erlauben, null oder mehr Elemente aus vielen auszuwählen.

Der Hauptunterschied (neben dem `type`-Wert) besteht darin, dass jedes Kontrollkästchen einen anderen `name`-Wert hat und sie in der Regel keine `value`-Attribute enthalten. Verhaltenstechnisch bedeutet dies, dass sie verschiedene Datenwerte repräsentieren, während ein Optionsschaltflächensatz nur einen repräsentiert. Bei der Übermittlung wird jeder Wert mit einem Wert von `on` gesendet, wenn das Kontrollkästchen angekreuzt wurde — `yoga=on`, `balloon=on`, usw.

> [!NOTE]
> Es ist möglich, den gesendeten Wert für ein Kontrollkästchen durch Festlegen eines `value`-Attributs zu ändern, zum Beispiel: `<input type="checkbox" id="yoga" name="yoga" value="yes" />` würde zu `yoga=yes` führen, wenn aktiviert. Es gibt jedoch nicht viel Sinn, dies zu tun. Ein Kontrollkästchen wird entweder mit einem einzelnen Wert gesendet, wenn aktiviert, oder es wird überhaupt nicht übermittelt. Es spielt keine große Rolle, welcher Wert an den Server gesendet wird.

### Dropdown-Menüs

Dropdown-Menüs, beispielsweise die "Wie kommen Sie hierher"-Auswahl im Beispiel, werden nicht mit einem `<input>`-Element, sondern mit den {{htmlelement("select")}}- und {{htmlelement("option")}}-Elementen implementiert:

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

Das `<select>`-Element umfasst alle verschiedenen Wertoptionen. Hier wird das `id`-Attribut gesetzt, das das Steuerelement mit seinem Label verknüpft, sowie das `name`-Attribut, das den Namen des zu sendenden Datenobjekts festlegt.

Jede mögliche Wertoption für das Datenobjekt wird durch ein `<option>`-Element dargestellt, das innerhalb des `<select>`-Elements eingebettet ist. Jedes `<option>`-Element kann ein `value`-Attribut haben, das den Wert angibt, der beim Auswählen dieser Option aus der Dropdown-Liste gesendet wird. Wenn kein `value` angegeben ist, wird der Text innerhalb der `<option></option>`-Tags als Wert verwendet.

> [!NOTE]
> Wenn Sie möchten, dass eine bestimmte Option beim Laden der Seite ausgewählt wird, können Sie ein `selected`-Attribut zum relevanten `<option>`-Element hinzufügen.

### Mehrzeilige Texteingabefelder

Mehrzeilige Texteingabefelder werden mit {{htmlelement("textarea")}}-Elementen erstellt:

```html-nolint
<label for="comments">Any other comments:</label>
<textarea id="comments" name="comments" rows="5" cols="33"></textarea>
```

Sie verhalten sich auf die gleiche Weise wie `<input type="text">`-Elemente, außer dass sie mehrere Textzeilen zulassen. Das `rows`-Attribut gibt an, wie viele Zeilen hoch das Textfeld standardmäßig ist, während das `cols`-Attribut angibt, wie viele Spalten breit das Textfeld standardmäßig ist. Wenn sie nicht angegeben sind, werden die Werte `cols="20"` und `rows="2"` verwendet.

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Die meisten Browser rendern Textfelder mit einem Ziehgriff in einer Ecke, mit dem sie neu dimensioniert werden können. Versuchen Sie dies, um das Textfeld in unserem Demo zu verändern.

## Formularvalidierung

Früher haben wir einige der grundlegenden clientseitigen Formularvalidierungen untersucht, die vom Browser bereitgestellt werden. Das `required`-Attribut wird verwendet, um anzugeben, dass ein Feld vor dem Absenden des Formulars ausgefüllt werden muss; es überprüft auch, dass der korrekte Werttyp für bestimmte Werttypen wie E-Mail-Adressen, URLs, Zahlen usw. eingegeben wird. Validierung ist aus zwei Hauptgründen wichtig:

- Sicherstellen, dass Daten im richtigen Format gesendet werden, damit sie keine Fehler in Ihrer Anwendung verursachen.
- Sicherstellen, dass Daten keine Sicherheitsprobleme verursachen. Böse Menschen wissen, wie sie Daten speziell formatieren müssen, damit sie auf unsicheren Anwendungen Befehle ausführen können, um Datenbanken zu löschen oder ein System zu übernehmen.

Formularvalidierung ist ein riesiges Thema, das über den Rahmen dieses Artikels hinausgeht, daher belassen wir es für jetzt dabei. Beachten Sie einfach, dass es zwei Arten von Formularvalidierung gibt:

- Client-side Validierung, die im Browser stattfindet, implementiert durch eine Kombination aus Formularvalidierungs-Attributen (wie `required`) und JavaScript. Client-side Validierung ist nützlich, um Benutzern sofort Hinweise zu geben, wenn sie die falschen Daten eingegeben haben, ist aber nicht so effektiv darin, bösartige Daten aufzuhalten. Es ist zu einfach, JavaScript zu deaktivieren oder clientseitigen Code so zu verändern, dass die Validierung nicht mehr funktioniert.
- Server-side Validierung, die auf dem Server stattfindet, implementiert in der Sprache, die der Server verwendet. Fehlgestaltete Nachrichten können versehentlich oder absichtlich an einen Server gesendet werden. Die herkömmliche Weisheit ist, sicherzustellen, dass Ihr Server nichts vertraut, was ein Client sendet, um Fehler oder Sicherheitsprobleme durch fehlerhaft formatierte Nachrichten zu vermeiden. Server-side Validierung ist großartig, um bösartige Nachrichten zu stoppen, da es schwieriger ist, den auf dem Server laufenden Code zu manipulieren. Server-side Validierung ist nicht so gut darin, Benutzern Hinweise auf fehlerhafte Daten zu geben, da die Daten zum Server gesendet werden müssen, um validiert zu werden, und das Feedback an den Client zurückgesendet werden muss, bevor der Benutzer benachrichtigt werden kann.

Zusammengefasst: Wählen Sie nicht zwischen der Verwendung entweder clientseitiger oder serverseitiger Validierung — Sie brauchen beide. Sie benötigen clientseitige Validierung, um Benutzern Feedback zu ihren Eingaben zu geben, und serverseitige Validierung, um sicherzustellen, dass Nachrichten in einem Format sind, das Ihr Server sicher handhaben kann. Wenn Sie mehr über Validierung lernen möchten, ist ein guter Ausgangspunkt [Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation).

## Zusammenfassung

Das war's für den Moment. Es gibt noch viel mehr über Formulare zu wissen, aber für jetzt haben wir Ihnen genug Verständnis gegeben, um in Ihrem Studium voranzukommen.

Als Nächstes werden wir uns ansehen, wie Sie Probleme in Ihrem HTML-Code debuggen können.

## Siehe auch

- [Webformulare — Arbeiten mit Benutzerdaten](/de/docs/Learn_web_development/Extensions/Forms)

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content/Debugging_HTML", "Learn_web_development/Core/Structuring_content")}}
