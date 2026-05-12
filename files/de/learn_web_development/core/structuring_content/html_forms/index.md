---
title: Formulare und Schaltflächen in HTML
short-title: Formulare und Schaltflächen
slug: Learn_web_development/Core/Structuring_content/HTML_forms
l10n:
  sourceCommit: 7d93b0f639e37e9340ed707e3cb7f9a75c1b3048
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content/Test_your_skills/Forms_and_buttons", "Learn_web_development/Core/Structuring_content")}}

HTML-Formulare und -Schaltflächen sind leistungsstarke Werkzeuge, um mit den Benutzern einer Website zu interagieren. Am häufigsten bieten sie Benutzern Bedienelemente, um eine Benutzeroberfläche (UI) zu manipulieren oder Daten einzugeben, wenn dies erforderlich ist.

In diesem Artikel geben wir eine Einführung in die Grundlagen von Formularen und Schaltflächen. Es gibt noch viel mehr zu wissen – viele Eingabetypen und Formularfunktionen werden nicht erwähnt – aber dieser Artikel wird Ihnen eine solide Grundlage für die meisten Fälle geben. Sie können die fortgeschrittenen oder spezialisierten Verwendungen nach Bedarf erlernen, als Teil des kontinuierlichen Lernens, das Sie während Ihrer Karriere machen werden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende HTML-Kenntnisse, wie sie in
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        > behandelt werden. Textuelle Semantik wie <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
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
          <li>Ein Verständnis dafür, dass Formulare und Schaltflächen, zusammen mit Links, die Hauptwerkzeuge für Benutzer sind, um mit einer Website zu interagieren.</li>
          <li>Verschiedene Schaltflächentypen.</li>
          <li>Gängige <code>&lt;input&gt;</code>-Typen.</li>
          <li>Gängige Attribute wie <code>name</code> und <code>value</code>.</li>
          <li>Das <code>&lt;form&gt;</code>-Element und die Grundlagen der Formularübermittlung.</li>
          <li>Formulare zugänglich machen mit Labels und korrekter Semantik.</li>
          <li>Andere Steuerungstypen: <code>&lt;textarea&gt;</code>, <code>&lt;select&gt;</code> und <code>&lt;option&gt;</code>.</li>
          <li>Grundlagen der clientseitigen Validierung.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Interaktion mit Benutzern

Bisher haben Sie in diesem Kurs einige Möglichkeiten kennengelernt, wie Benutzer mit dem Web interagieren können:

- [Links](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links) können verwendet werden, um zu verschiedenen Inhaltsbereichen zu navigieren, entweder auf derselben oder einer anderen Seite.
- [`<video>` und `<audio>`](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) Elemente verfügen im Allgemeinen über Steuerungselemente wie Abspielen/Pause, Vorspulen, Zurückspulen usw., die es Benutzern ermöglichen, Medieninhalte nach Belieben zu konsumieren.

Jedoch erleichtern diese Funktionen in der Regel nur einseitige Interaktionen, bei denen Benutzer passiv Inhalte konsumieren. Das ist in Ordnung, aber das Web ist eine zweiseitige Erfahrung. Website-Benutzer legen Präferenzen dafür fest, wie sie Inhalte und Dienstleistungen erleben möchten. Sie bestellen Taxis und fordern Rückrufaktionen an. Sie geben Feedback und beschweren sich. Sie kaufen Produkte und lassen sie zu sich nach Hause liefern.

Um diese zweiseitige Erfahrung zu bieten, müssen Sie Schaltflächen und Formulare verwenden.

Schaltflächen werden in der Regel mit HTML-{{htmlelement("button")}}-Elementen erstellt (sie werden auch manchmal mit {{htmlelement("input")}}-Elementen erstellt, deren `type`-Attribute auf einen Wert wie `button` oder `submit` gesetzt sind). Diese Druckknöpfe sind Allzweck-Schaltflächen – Sie können sie so anschließen, dass sie jede gewünschte Funktionalität auslösen, nur begrenzt durch Ihre Vorstellungskraft und Codierungsfähigkeiten.

Formulare werden mit Elementen wie {{htmlelement("form")}}, {{htmlelement("label")}}, {{htmlelement("input")}}, und {{htmlelement("select")}} erstellt. Formularelemente können verwendet werden, um komplexere Steuerungen als einfache Schaltflächen zu erstellen – zum Beispiel ein Dropdown-Menü, das mehrere Optionen enthält, zwischen denen Sie für ein User Interface-Element wählen können.

Entscheidend ist jedoch, dass sie auch verwendet werden können, um Formulare zu erstellen, die Benutzer ausfüllen müssen, wenn sie Informationen an einen Website-Server übermitteln müssen. Denken Sie an E-Commerce-Seiten – wenn Sie nach einem Produkt suchen möchten, um es zu kaufen, verwenden Sie ein Formular, um Suchbegriffe einzugeben. Wenn Sie einige Artikel bezahlen und die Lieferung abschließen möchten, verwenden Sie ein Formular, um Ihre Postadresse einzugeben, und ein anderes Formular, um Ihre Kreditkartendaten einzugeben.

In diesem Artikel konzentrieren wir uns hauptsächlich auf diese – traditionellere – Verwendung von Formularelementen. Beachten Sie, dass Schaltflächen auch häufig innerhalb von Formularen verwendet werden, um die eingegebenen Daten an den Server zu übermitteln.

Mit dieser wichtigen Theorie aus dem Weg, lassen Sie uns nun den Code erkunden und sehen, wie Schaltflächen und Formulare implementiert werden.

## Schaltflächen

Wie oben angedeutet, haben Schaltflächen ein paar Hauptverwendungszwecke im Web. Zunächst einmal werden sie verwendet, um Funktionen auszulösen, was nützlich ist, wenn UI-Steuerungen erstellt werden. Die einfachste Schaltfläche wird mit folgendem Code implementiert:

```html live-sample___basic-button
<button>Press me</button>
```

Dies wird folgendermaßen gerendert:

{{EmbedLiveSample("basic-button", "100%", "60")}}

Der Text, der zwischen den `<button></button>`-Tags erscheint, wird innerhalb der Schaltfläche gerendert, und sie erhält von vornherein ein einfaches Styling vom Browser, so dass sie standardmäßig wie eine Schaltfläche aussieht und sich verhält. Soweit so gut. Es gibt jedoch ein Problem hier – unsere einsame Schaltfläche tut nichts Nützliches alleine. Um sie etwas Nützliches tun zu lassen, müssen Sie sie in ein Formular (über das wir später sprechen werden) einfügen oder etwas JavaScript hinzufügen.

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

Es würde Ihnen die folgende Ausgabe geben – versuchen Sie, darauf zu klicken:

{{EmbedLiveSample("basic-button-with-js", "100%", "60")}}

Es wird nicht erwartet, dass Sie jetzt verstehen, wie das JavaScript funktioniert. Sie werden später im Kurs mehr darüber lernen.

Im nächsten Abschnitt sehen Sie eine Demonstration der zweiten Hauptverwendung von Schaltflächen – dem Absenden von Formularen.

## Die Anatomie eines Formulars

Ein einfaches Formular enthält drei Dinge:

- Ein {{htmlelement("form")}}-Element, das alle anderen Formularinhalte umschließt. Alle Formularelemente innerhalb der `<form></form>`-Tags gehören zum selben Formular, und ihre Daten werden eingeschlossen, wenn das Formular abgesendet wird.
- Ein oder mehrere Paare, die jeweils aus einem {{htmlelement("label")}}-Element und einem Formularelement bestehen (normalerweise ein {{htmlelement("input")}}-Element, aber es gibt andere Typen, zum Beispiel {{htmlelement("select")}}):
  - Das Formularelement ermöglicht es dem Benutzer, einige Daten auszuwählen oder einzugeben, die gesendet werden, wenn das Formular abgesendet wird.
  - Das `<label>`-Element liefert eine identifizierende Beschriftung, die mit dem Formularelement verknüpft ist und die Daten beschreibt, die eingegeben werden sollten.
- Ein {{htmlelement("button")}}-Element, das zum Absenden des Formulars verwendet wird.

Sehen wir uns ein einfaches Beispiel an, das die oben genannten drei Elemente enthält. Dieses Formular könnte verwendet werden, um nach dem Namen und der E-Mail eines Benutzers zu fragen, um ihn für einen Newsletter anzumelden (keine Sorge – es ist mit keinem Server verbunden und tut daher momentan nichts).

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

Dies wird folgendermaßen gerendert:

{{EmbedLiveSample("form-anatomy", "100%", "200", , , , , "allow-forms")}}

Wenn Sie sofort auf "Melden Sie mich an!" klicken, sehen Sie einen Validierungsfehler, weil keine Daten eingegeben wurden. Wenn Sie die Felder mit einem Namen und einer E-Mail-Adresse ausfüllen und dann auf "Melden Sie mich an!" klicken, sehen Sie eine `404`-Fehlermeldung.

Wir erklären später, warum das so ist. Bevor Sie fortfahren, kopieren Sie den vorherigen HTML-Code in eine neue HTML-Datei mit Ihrem [Code-Editor](/de/docs/Learn_web_development/Getting_started/Environment_setup/Code_editors) und öffnen Sie ihn in einem neuen Browser-Tab.

### Das `<form>`-Element

Wie wir bereits gesagt haben, fungiert das {{htmlelement("form")}}-Element als äußere Umhüllung für das Formular und gruppiert alle Formularelemente darin. Wenn die `<button>`-Taste gedrückt wird, werden alle durch die Formularelemente dargestellten Daten an den Server gesendet. Das `<form>`-Element kann viele Attribute haben, aber die beiden wichtigsten, die wir in unserem Beispiel aufgenommen haben, sind wie folgt:

- `action`: Enthält einen Pfad zu der Seite, an die die gesendeten Formulardaten zur Verarbeitung gesendet werden sollen. Später werden Sie nach dem Absenden des Formulars `/submit_page` in der URL sehen. Sie erhalten ebenfalls eine {{HTTPStatus("404")}}-Fehlerantwort, da die Seite nicht wirklich existiert, aber das ist fürs Erste in Ordnung.
- `method`: Gibt die [Methode](/de/docs/Web/HTTP/Reference/Methods) an, die zur Übermittlung der Formulardaten an den Server verwendet werden soll. Machen Sie sich darüber jetzt nicht zu viele Gedanken; der `get`-Wert bewirkt, dass die Daten als Parameter am Ende der URL angehängt werden.

#### Überprüfen der gesendeten Daten

1. Gehen Sie zur Beispielseite im separaten Tab und versuchen Sie, einen Namen "Bob" und eine E-Mail-Adresse "bob@bob.com" einzugeben.
2. Drücken Sie die `<button>`-Taste.

Die `action`- und `method`-Attribute bewirken, dass die Formulardaten in einer URL nach folgendem Schema gesendet werden:

```plain
/some/url/submit_page?name=Bob&email=bob%40bob.com
```

#### Strukturierung von Formularen

Sie können beliebige HTML-Elemente in einem `<form>`-Element einschließen, um die Formularelemente selbst zu strukturieren und Container bereitzustellen, die mit CSS zum Styling usw. gezielt werden können.

In unserem Beispiel haben wir ein [Überschriftenelement](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) (`<h2>`) eingeschlossen, um den Zweck des Formulars zu beschreiben.

Wir haben auch jedes Eingabe-/Beschriftungspaar und den Absende-Button in ein separates {{htmlelement("p")}} gesetzt, so dass jedes in einer separaten Zeile erscheint. Diese Elemente sind standardmäßig inline, was bedeutet, dass sie alle auf derselben Linie sitzen würden, wenn wir das nicht tun würden.

Dies ist ein gängiges Muster für die Strukturierung von Formularen. Einige Leute verwenden `<p>`-Elemente, um ihre Formularelemente zu trennen, andere verwenden {{htmlelement("div")}}, {{htmlelement("section")}} oder sogar {{htmlelement("li")}}-Elemente. Es spielt keine große Rolle, solange die verwendeten Elemente semantisch sinnvoll sind. Beispielsweise macht es Sinn, Formulargruppen in separate Absätze oder Inhaltabschnitte oder sogar in Listeneinträge zu unterteilen. Es wäre weniger sinnvoll, sie als [Blockzitate](/de/docs/Web/HTML/Reference/Elements/blockquote), [Nebentexte](/de/docs/Web/HTML/Reference/Elements/aside) oder [Adressen](/de/docs/Web/HTML/Reference/Elements/address) darzustellen.

Es gibt ein spezialisiertes Element für die Gruppierung von Formularelementen, das {{htmlelement("fieldset")}} genannt wird. Dies ist in bestimmten Fällen nützlich, z. B. bei komplexen Formularen und beim Gruppieren mehrerer Kontrollkästchen und Optionsfelder. Wir werden später ein paar `<fieldset>`-Beispiele anschauen.

### `<input>`-Elemente

Die {{htmlelement("input")}}-Elemente repräsentieren die unterschiedlichen in das Formular eingegebenen Daten. Lassen Sie uns ein Beispiel aus unserem einfachen Formular studieren:

```html
<input type="text" name="name" id="name" required />
```

Die Attribute sind wie folgt:

- `type`: Gibt den Typ des zu erstellenden Formularelements an. Es gibt viele verschiedene Formularelementtypen, von einfachen Textfeldern verschiedener Art bis hin zu Optionsfeldern, Kontrollkästchen und mehr. Typ `text` rendert ein einfaches Textfeld, das jeden beliebigen Wert akzeptieren kann.
- `name`: Gibt einen Namen für das Datenelement an. Wenn das Formular gesendet wird, werden die Daten in Namen/Wert-Paaren gesendet. In jedem Fall ist der Name gleich dem Wert des `name`-Attributs und der Wert gleich dem im Textfeld eingegebenen Text.
- `id`: Gibt eine ID an, die verwendet werden kann, um das Element zu identifizieren. In diesem Fall wird es verwendet, um das Formularelement mit seinem `<label>` zu verknüpfen.
- `required`: Gibt an, dass ein Wert in das Formularelement eingegeben werden muss, bevor das Formular gesendet werden kann. Dies sollte nur auf Feldern festgelegt werden, die Sie benötigen, nicht auf optionalen Feldern.

Sie sollten wissen, dass einige Eingabetypen normalerweise keine Werte aus einem eingegebenen Textfeld erhalten. Zum Beispiel rendert [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color) ein Farbwähler-Widget, aus dem Sie eine Farbe auswählen, während [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio) ein Optionskontrollfeld rendert, das ausgewählt werden kann oder nicht.

Im Fall von Optionsfeldern müssen Sie im Allgemeinen den zu sendenden Wert angeben, wenn es ausgewählt wird, in einem bestimmten `value`-Attribut. Beachten Sie, dass Sie auch ein `value`-Attribut auf Eingabetypen wie `text` und `color` angeben können – der Effekt ist, dass der Wert beim ersten Rendern des Formularelements vorab eingetragen wird.

#### `required`- und `value`-Attribute in Aktion

1. Gehen Sie erneut zum Beispiel, das Sie in einem separaten Tab geladen haben, und versuchen Sie, das Formular ohne einen eingegebenen Wert in einem der Felder abzusenden. Sie sehen eine Fehlermeldung neben dem Feld "Name", die so etwas wie "Bitte füllen Sie dieses Feld aus" anzeigt (sie variiert je nach Browser). Dies ist das `required`-Attribut – und die standardmäßige clientseitige Formularvalidierung des Browsers – in Aktion.
2. Nun versuchen Sie, das Formular mit einem gültigen Namen in das erste Feld einzugeben, aber mit einem Wert, der keine gültige E-Mail-Adresse ist, im zweiten Feld (etwas wie "aaaa" wird genügen). Dieses Mal sehen Sie eine Fehlermeldung, die neben dem Feld "E-Mail" erscheint und die so etwas wie "Bitte geben Sie eine E-Mail-Adresse an" sagt.
3. Versuchen Sie, das Formular zu bearbeiten, um `value="Bob"` beim ersten Input hinzuzufügen. Wenn Sie den Code neu laden, sehen Sie, dass das erste Feld standardmäßig einen Wert von "Bob" enthält.

#### Spezialisierte Textfeld-Eingaben

Die zweite Übung oben lenkt den Blick auf einen interessanten Punkt. Das zweite Eingabefeld erwartet spezifisch eine E-Mail-Adresse und validiert die eingegebenen Werte als solche. Wenn Sie sich den Formularcode erneut ansehen, werden Sie sehen, warum – die zweite `<input>` hat einen `type` von `email`.

Es gibt mehrere spezialisierte Textfeld-Eingabetypen, die dazu bestimmt sind, spezifische Datentypen zu behandeln, wie zum Beispiel [`<input type="number">`](/de/docs/Web/HTML/Reference/Elements/input/number), [`<input type="password">`](/de/docs/Web/HTML/Reference/Elements/input/password), [`<input type="tel">`](/de/docs/Web/HTML/Reference/Elements/input/tel), [`<input type="url">`](/de/docs/Web/HTML/Reference/Elements/input/url) und so weiter.

Folgen Sie einigen der obigen Links, um herauszufinden, wofür diese Eingabetypen verwendet werden. Werfen Sie einen Blick auf unser [`<input>`](/de/docs/Web/HTML/Reference/Elements/input)-Referenzdokument und sehen Sie nach, ob Sie noch weitere spezialisierte Textfeld-Eingabetypen finden können.

### `<label>`-Elemente

Wie bereits erwähnt, bieten {{htmlelement("label")}}-Elemente identifizierende Beschriftungen, die mit Formularelementen verknüpft sind und die Daten beschreiben, die in sie eingegeben werden sollten. Sie können beliebigen Textinhalt in `<label>`-Elementen verwenden, aber sie sollten genau beschreiben, welche Daten das zugeordnete Formularelement erwartet. Die Zuordnung wird durch das Zuweisen eines `id`-Attributs für das Formularelement erstellt, dann erhält das `<label>`-Element ein `for`-Attribut mit dem gleichen Wert wie das `id` des Elements.

Zum Beispiel:

```html
<label for="name">Name (required):</label>
<input type="text" name="name" id="name" required />
```

`<label>`-Elemente sind aus mehreren Gründen wichtig, insbesondere:

- Wenn sehbehinderte Benutzer einen Screenreader verwenden, um ihnen dabei zu helfen, Webseiteninhalte zu lesen und mit ihnen zu interagieren, liest der Screenreader beim Treffen auf jedes Steuerungselement den zugehörigen Label-Text vor. Dies erleichtert es den Benutzern zu verstehen, welche Inhalte in das jeweilige Steuerelement eingegeben werden sollen.
- Sie ermöglichen es Ihnen auch, die Formularelemente zu fokussieren, indem Sie auf ihren Label-Text sowie auf die Steuerungselemente klicken. Dies ist besonders nützlich für Benutzer von Mobiltelefonen, bei denen es schwierig sein kann, ein Formularelement mit dem Finger auf einem Touchscreen genau auszuwählen. Die Vergrößerung der **Trefferfläche** ist in solchen Situationen nützlich.

#### Explizite und implizite Formularbeschriftungen

Der Formularbeschriftungsstil, den Sie oben gesehen haben, wird als **explizite Formularbeschriftung** bezeichnet – die Zuordnung zwischen Steuerelement und Beschriftung wird explizit über die `id`- und `for`-Attribute hergestellt. Sie können auch eine **implizite Formularbeschriftung** implementieren, indem Sie das Steuerelement innerhalb der Beschriftung verschachteln, wie hier:

```html
<label>
  Name (required):
  <input type="text" name="name" required />
</label>
```

Die Verschachtelung stellt eine implizite Zuordnung zwischen Steuerelement und Beschriftung dar, und Sie benötigen die `id`- und `for`-Attribute nicht mehr.

Entweder Ansatz ist in Ordnung, aber wir würden empfehlen, die explizite Beschriftungsmethode zu verwenden. Dies liegt daran, dass die explizite Zuordnung in der Regel leichter zu erkennen und zu verstehen ist, besonders wenn Ihr HTML-Code komplexer wird. Darüber hinaus behandeln Screenreader (und andere unterstützende Technologien) implizite Beschriftungen nicht immer korrekt.

Sie können mehr über bewährte Methoden zur Formularkennzeichnung in [HTML Inputs and Labels: A Love Story](https://css-tricks.com/html-inputs-and-labels-a-love-story/) auf css-tricks.com (2021) lesen.

### Das `<button>`-Element

Wenn ein {{htmlelement("button")}}-Element innerhalb eines `<form>`-Elements enthalten ist, ist das Standardverhalten, dass es das Formular absendet, sofern keine ungültigen Daten vorhanden sind, die den Sendevorgang durch clientseitige Formularvalidierung blockieren. Sie haben dieses Verhalten bereits bei unserem einfachen Formularbeispiel oben gesehen.

Andere Schaltflächenverhalten können über das `type`-Attribut des `<button>`-Elements angegeben werden:

- `<button type="submit">` erklärt explizit, dass eine Schaltfläche wie eine Absende-Schaltfläche funktionieren soll. Sie müssen dies nicht wirklich erklären, es sei denn, Sie fügen aus irgendeinem Grund andere Schaltflächen innerhalb Ihres `<form>`-Elements ein und möchten deutlich machen, welche die Absende-Schaltfläche ist. Dies wird sehr selten der Fall sein.
- `<button type="reset">` erstellt eine _Zurücksetzen-Schaltfläche_ — diese löscht sofort alle Daten aus dem Formular, wodurch es auf seinen ursprünglichen Zustand zurückgesetzt wird. **Verwenden Sie keine Zurücksetzen-Schaltflächen** — sie waren in den Anfangszeiten des Webs populär, sind aber meist störender als hilfreich. Die meisten Menschen haben die Erfahrung gemacht, ein langes Formular auszufüllen, nur um dann versehentlich die Zurücksetzen-Schaltfläche statt der Absende-Schaltfläche zu drücken, was bedeutet, dass sie von vorne beginnen müssen.
- `<button type="button">` erstellt eine Schaltfläche mit dem gleichen Verhalten wie Schaltflächen, die außerhalb von `<form>`-Elementen angegeben sind. Wie wir bereits gesehen haben, tun sie standardmäßig absolut nichts, und JavaScript wird benötigt, um ihnen Funktionalität zu verleihen.

Obwohl Sie diese Schaltflächentypen durch die Verwendung eines `<input>`-Elements mit den gleichen `type`-Werten erstellen können – wie [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit), [`<input type="reset">`](/de/docs/Web/HTML/Reference/Elements/input/reset), und [`<input type="button">`](/de/docs/Web/HTML/Reference/Elements/input/button) – haben sie viele Nachteile im Vergleich zu ihren `<button>`-Gegenstücken. Daher sollten Sie `<button>` verwenden.

> [!NOTE]
> Scrimba<sup>[_MDN Learning Partner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> bietet eine kostenlose Lektion — [The very basics of forms](https://scrimba.com/learn-responsive-web-design-c029/~031?via=mdn) — die eine nützliche interaktive Wiederholung der zuvor in diesem Artikel behandelten Grundlagen der Formulare bietet.

## Ein kurzer Exkurs zur Barrierefreiheit

Wir haben bereits über die Bedeutung von Formularbeschriftungen für die Barrierefreiheit gesprochen, wollten aber auch einige Kommentare zur allgemeinen Bedeutung der Verwendung der korrekten semantischen Elemente zur Erstellung von Formularen hinzufügen (zum Beispiel verwenden Sie ein `<button>`, um Ihr Formular abzusenden, und nicht ein mit einem `<button>` programmiertes `<div>`). Es ist durchaus möglich, eine Kombination aus CSS und JavaScript zu verwenden, um fast jedes HTML-Element wie ein Formularelement aussehen und sich wie ein solches verhalten zu lassen. Entwickler tun dies normalerweise aus Designgründen – einige Formularelemente sind schwer zu stylen.

Wenn Sie dies jedoch tun, machen Sie sich und Ihren Benutzern das Leben schwerer. Der Browser bietet viele `<button>`- und Formularelemente-Features standardmäßig, ohne dass JavaScript oder anderer zusätzlicher Code erforderlich ist, um Formulare für alle Benutzer benutzerfreundlicher zu machen.

Zum Beispiel:

- Semantische Elemente werden von unterstützender Technologie wie Screenreadern verstanden, die ihre Bedeutung für Benutzer kommunizieren, die sie nicht sehen können.
- Formularelemente und Schaltflächen sind standardmäßig tastaturzugänglich. Im vorherigen Beispiel versuchen Sie, mit <kbd>Tab</kbd> und <kbd>Shift</kbd> + <kbd>Tab</kbd> vorwärts und rückwärts zwischen den Formularelementen zu wechseln (dies wird als "Tabbing" bezeichnet).
- Beachten Sie auch, wie Tabben zwischen den Formularelementen das fokussierte Element durch eine blaue Umrandung hervorhebt (dies wird **Fokusumriss** genannt). Dies ist eine wichtige Funktion für Tastaturnutzer, um zu wissen, wo sie sich derzeit im Formular befinden.

Wenn Sie nicht die korrekten semantischen Elemente zur Implementierung Ihrer Formulare verwenden, verhalten sich Ihre Formularelemente nicht so, wie Benutzer es erwarten, und erscheinen fehlerhaft. Sie müssen all diese Funktionen selbst nachimplementieren, was zusätzlichen Aufwand bedeutet.

## Andere Steuerungstypen

Es gibt viele andere Steuerungstypen, die Sie für die Datenerfassung in einem Formular verwenden können. Sehen wir uns ein etwas komplexeres Beispiel an und erkunden und erklären es anschließend.

> [!NOTE]
> In diesem Beispiel gehen wir davon aus, dass der Benutzer bereits registriert und angemeldet ist und es daher nicht nötig ist, Details wie Name und E-Mail abzufragen.

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

Dies wird folgendermaßen gerendert:

{{EmbedLiveSample("form-other-controls", "100%", "500", , , , , "allow-forms")}}

Wir empfehlen Ihnen, dieses Beispiel in einem separaten Browser-Tab zu öffnen, während Sie die nächsten Abschnitte durcharbeiten, in denen wir die einzelnen Steuerungstypen der Reihe nach betrachten. Um dies zu erreichen, kopieren Sie den Code in eine HTML-Datei mit Ihrem Code-Editor und öffnen Sie ihn in einem Browser-Tab.

Bevor Sie fortfahren, probieren Sie die verschiedenen Formularelemente in Ihrer lokalen Kopie aus und wählen Sie einige Werte. Versuchen Sie, das Formular abzusenden und sehen Sie sich an, wie die gesendeten Daten in der URL aussehen.

### Optionsfelder

Die Tasten "Zimmertyp im Hotel wählen" werden mit [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio) Steuerungen implementiert. Diese werden als eine Gruppe von Drucktasten-Steuerungen dargestellt, bei denen immer nur eine der Gruppe zugleich ausgewählt werden kann — Sie können nicht mehr als eine auf einmal auswählen. Sie sind nach den Knöpfen benannt, die auf altmodischen Radios gefunden wurden, bei denen Sie eine Taste drücken und die zuvor ausgewählte Taste wieder herausspringt.

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

`radio`-Eingabetypen funktionieren ähnlich wie `text`-Eingabetypen, aber mit einigen Unterschieden:

- Die `name`-Attribute für jede Gruppe von Optionsfeldern müssen denselben Wert enthalten, um sie als eine Gruppe zu verknüpfen. Wenn sie unterschiedliche Werte enthalten, sind sie effektiv separate Gruppen mit unterschiedlichen Werten bei der Übermittlung.
- Sie müssen ein `value`-Attribut einschließen, das den zu übermittelnden Wert für jedes Optionsfeld enthält. Der übermittelte Wert wird ein Name/Wert-Paar sein, aber der Name wird immer derselbe sein, zum Beispiel `hotel=economy` oder `hotel=superior`.
- Das `<label>` für jedes Optionsfeld sollte diese spezielle Wertoption beschreiben, anstatt den gesamten auszuwählenden Wert. Der bevorzugte Weg, den Gesamtauswahlwert zu beschreiben, besteht darin, sie in einem {{htmlelement("fieldset")}} zu kapseln, was ein Kind-{{htmlelement("legend")}}-Element aufnimmt, das die Beschreibung enthält.

> [!NOTE]
> Neben der Strukturierung und Beschriftung von Formularen haben Fieldsets andere Verwendungszwecke, wie zum Beispiel das [Deaktivieren](#deaktivieren_von_formularsteuerungen) einer gesamten Steuerungsgruppe als eine Einheit.

Es ist auch erwähnenswert, dass wir das `checked`-Attribut auf das erste Optionsfeld angewendet haben – dadurch wird es ausgewählt, wenn die Seite das erste Mal geladen wird. Das bedeutet, dass immer eine Option ausgewählt sein wird, und Sie können kein Optionsfeld ohne Auswahl eines anderen abwählen.

Versuchen Sie, das `checked`-Attribut vom ersten Optionsfeld zu entfernen, speichern und laden Sie es erneut, um den Effekt zu sehen. Setzen Sie es wieder zurück, bevor Sie weitermachen.

#### Deaktivieren von Formularsteuerungen

Im Beispiel für Optionsfelder werden Sie feststellen, dass das dritte Optionsfeld das `disabled`-Attribut gesetzt hat. Dies bewirkt, dass die gerenderte Steuerung ausgegraut und nicht auswählbar ist. Dies ist in vielen Situationen nützlich, in denen eine Option normalerweise verfügbar, gerade jedoch nicht verfügbar ist. Ein Produkt könnte zum Beispiel ausverkauft sein oder, wie in unserem Beispiel, sind alle Penthouse-Suiten ausgebucht!

Sie können das `disabled`-Attribut auf jede Formularelement-Steuerung setzen, einschließlich `<button>`-Elementen. Auch `<fieldset>`-Elemente können das `disabled`-Attribut akzeptieren – dies bewirkt, dass jede Steuerung innerhalb des Fieldsets deaktiviert wird.

Versuchen Sie, das `disabled`-Attribut auf die beiden `<fieldset>`-Elemente zu setzen, speichern und laden Sie neu, um den Effekt zu sehen. Entfernen Sie sie wieder, bevor Sie weitermachen.

### Kontrollkästchen

Unsere "Klassen, die Sie besuchen möchten" Auswahlmöglichkeiten werden mit [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) Steuerungen implementiert. Diese werden als eine Gruppe von Ein-/Aus-Zustandskontrollkästchen gerendert. Im Gegensatz zu Optionsfeldern können Sie mehr als eine gleichzeitig auswählen.

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

Wie Sie aus den Codeausschnitten sehen können, werden Optionsfelder und Kontrollkästchen auf sehr ähnliche Weise implementiert (sie können auch `checked`-Attribute annehmen, um sie beim Laden der Seite voreingestellt zu rendern). Sie verhalten sich auch auf fast ähnliche Weise, außer dass Optionsfelder es ermöglichen, null oder ein Element aus vielen auszuwählen, während Kontrollkästchen es ermöglichen, null oder mehr Elemente aus vielen auszuwählen.

Der Hauptunterschied (abgesehen vom `type`-Wert!) ist, dass jedes Kontrollkästchen einen anderen `name`-Wert hat und sie im Allgemeinen keine `value`-Attribute bekommen. Verhaltensweise bedeutet dies, dass sie unterschiedliche Datenelemente darstellen, während eine Optionsfeldgruppe nur eines darstellt. Bei der Übermittlung wird jedes Element mit einem Wert von `on` gesendet, wenn das Kontrollkästchen markiert war — `yoga=on`, `balloon=on`, usw.

> [!NOTE]
> Es ist möglich, den übermittelten Wert für ein Kontrollkästchen durch das Hinzufügen eines `value`-Attributs zu ändern, zum Beispiel: `<input type="checkbox" id="yoga" name="yoga" value="yes" />` würde `yoga=yes` senden, wenn es markiert ist.

### Dropdown-Menüs

Dropdown-Menüs, wie zum Beispiel die "Wie kommen Sie hierher"-Auswahlsteuerung in unserem Beispiel, werden nicht mit einem `<input>`-Typ, sondern mit den {{htmlelement("select")}}- und {{htmlelement("option")}}-Elementen implementiert:

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

Das `<select>`-Element umschließt alle verschiedenen Wertoptionen. Hier setzen Sie das `id`-Attribut, das die Steuerung mit ihrem Label verknüpft, und das `name`-Attribut, das den Namen des zu übermittelnden Datenelements festlegt.

Jeder mögliche Wert für das Datenelement wird durch ein `<option>`-Element dargestellt, das innerhalb des `<select>`-Elements verschachtelt ist. Jedes `<option>`-Element kann ein `value`-Attribut annehmen, das den zu übermittelnden Wert angibt, wenn diese Option aus der Dropdown-Liste ausgewählt wird. Wenn kein `value` angegeben wird, wird der Text innerhalb der `<option></option>`-Tags als Wert verwendet.

Sie können die Optionen in einem Dropdown-Menü `<select>` auch in mehrere Untergruppen aufteilen, indem Sie das {{htmlelement("optgroup")}}-Element verwenden. Informieren Sie sich auf der Referenzseite dieses Elements, wie das geht.

> [!NOTE]
> Wenn Sie möchten, dass eine bestimmte Option beim Laden der Seite ausgewählt ist, können Sie ein `selected`-Attribut zum entsprechenden `<option>`-Element hinzufügen.

### Mehrzeilige Texteingabefelder

Mehrzeilige Texteingabefelder werden mit {{htmlelement("textarea")}}-Elementen erstellt:

```html
<label for="comments">Any other comments:</label>
<textarea id="comments" name="comments" rows="5" cols="33"></textarea>
```

Sie verhalten sich ähnlich wie `<input type="text">`-Elemente, bis auf dass sie mehrere Textzeilen erlauben. Das `rows`-Attribut gibt an, wie viele Zeilen das Textfeld standardmäßig hoch sein wird, während das `cols`-Attribut bestimmt, wie viele Spalten breit das Textfeld standardmäßig sein wird. Werden diese nicht angegeben, lauten die verwendeten Werte `cols="20"` und `rows="2"`.

Die meisten Browser rendern Textbereiche mit einem Zuggriff in einer Ecke, der verwendet werden kann, um sie zu verändern. Versuchen Sie diesen, um die Textfläche in unserem Demo zu skalieren.

## Formularvalidierung

Früher haben wir einige der grundlegenden clientseitigen Formularvalidierung betrachtet, die vom Browser bereitgestellt wird. Das `required`-Attribut wird verwendet, um anzugeben, dass ein Feld ausgefüllt werden muss, bevor das Formular gesendet werden kann; es überprüft auch, ob der richtige Werttyp für bestimmte Werttypen wie E-Mail-Adressen, URLs, Zahlen usw. eingegeben wird. Validierung ist aus zwei Hauptgründen wichtig:

- Sicherstellen, dass Daten im korrekten Format eingegeben werden, damit sie keine Fehler in Ihrer Anwendung verursachen.
- Sicherstellen, dass Daten keine Sicherheitsprobleme verursachen. Schadhafte Personen wissen, wie sie Daten so formatiert abschicken, dass sie in unsicheren Anwendungen spezielle Befehle ausführen können, um zum Beispiel Datenbanken zu löschen oder die Kontrolle über ein System zu übernehmen.

Formularvalidierung ist ein großes Thema, das über den Rahmen dieses Artikels hinausgeht, daher lassen wir es hier für jetzt. Behalten Sie jedoch im Hinterkopf, dass es zwei Arten von Formularvalidierung gibt:

- Clientseitige Validierung, die im Browser geschieht, wird mit einer Kombination aus Formularvalidierungsattributen (wie `required`) und JavaScript implementiert. Clientseitige Validierung ist nützlich, um den Benutzern sofortige Hinweise zu geben, wenn sie falsche Daten eingegeben haben, ist jedoch nicht so effektiv beim Blockieren von schädlichen Daten. Es ist zu einfach, JavaScript zu deaktivieren oder clientseitigen Code zu ändern, damit die Validierung nicht mehr funktioniert.
- Serverseitige Validierung, die auf dem Server stattfindet, wird mit der Sprache implementiert, die der Server verwendet. Schlechte Nachrichten können absichtlich oder versehentlich an einen Server gesendet werden. Die vorherrschende Meinung ist, dass Ihr Server nichts vertrauen sollte, was ein Client sendet, um Fehler oder Sicherheitsprobleme durch fehlerhafte Nachrichten zu vermeiden. Serverseitige Validierung ist großartig, um schädliche Nachrichten zu stoppen, da es schwieriger ist, Code zu verändern, der auf dem Server läuft. Serverseitige Validierung ist nicht so gut darin, Benutzern Hinweise auf fehlerhafte Daten zu geben, da die Daten zum Server gesendet werden müssen, um validiert zu werden, bevor das Ergebnis an den Client zurückgesendet wird.

Kurz gesagt, Sie sollten sich nicht entscheiden, entweder clientseitige oder serverseitige Validierung zu verwenden - Sie benötigen beide. Sie brauchen clientseitige Validierung, um den Benutzern Rückmeldungen zu ihren Eingaben zu geben, und serverseitige Validierung, um sicherzustellen, dass Nachrichten in einem Format sind, das Ihr Server sicher verarbeiten kann. Wenn Sie mit der Validierung lernen anfangen möchten, ist [Client-side form validation](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) ein guter Anfang.

## Zusammenfassung

Das war es für jetzt. Es gibt noch viel mehr über Formulare zu wissen, aber fürs Erste haben wir Ihnen genügend Wissen vermittelt, um Ihre Studien fortzusetzen.

Als nächstes werden wir Ihnen einige Tests geben, die Sie verwenden können, um zu überprüfen, wie gut Sie das, was wir zu HTML-Formularen bereitgestellt haben, verstanden und behalten haben.

## Siehe auch

- [Web forms — Working with user data](/de/docs/Learn_web_development/Extensions/Forms)

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content/Test_your_skills/Forms_and_buttons", "Learn_web_development/Core/Structuring_content")}}
