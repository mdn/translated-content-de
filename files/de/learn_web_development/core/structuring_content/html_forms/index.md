---
title: Formulare und Schaltflächen in HTML
slug: Learn_web_development/Core/Structuring_content/HTML_forms
l10n:
  sourceCommit: b23adcb8016f0b5d7d5287960baf8281268d4ca0
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content/Debugging_HTML", "Learn_web_development/Core/Structuring_content")}}

HTML-Formulare und Schaltflächen sind mächtige Werkzeuge, um mit den Nutzern einer Website zu interagieren. Am häufigsten bieten sie den Nutzern Möglichkeiten, eine Nutzeroberfläche (UI) zu steuern oder Daten einzugeben, wenn dies erforderlich ist.

In diesem Artikel bieten wir eine Einführung in die Grundlagen von Formularen und Schaltflächen. Es gibt viel mehr zu wissen – viele Eingabetypen und Formularfunktionen werden nicht erwähnt – aber dieser Artikel wird Ihnen eine solide Grundlage für die meisten Fälle geben. Sie können die fortgeschrittene oder spezialisierte Verwendung nach Bedarf erlernen, als Teil des kontinuierlichen Lernens, das Sie im Laufe Ihrer Karriere durchführen werden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML, wie sie in
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        > behandelt werden. Semantik auf Textebene wie <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
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
          <li>Ein Verständnis dafür, dass Formulare und Schaltflächen die Hauptwerkzeuge für Nutzer sind, um mit einer Website zu interagieren, neben Links.</li>
          <li>Unterschiedliche Schaltflächentypen.</li>
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

## Interaktion mit Nutzern

Bisher haben Sie im Kurs ein paar Möglichkeiten gesehen, wie Nutzer mit dem Web interagieren können:

- [Links](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links) können verwendet werden, um zu verschiedenen Inhaltsabschnitten zu navigieren, entweder auf derselben Seite oder auf einer anderen Seite.
- [`<video>` und `<audio>`](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)-Elemente bieten in der Regel Steuerungen wie Abspielen/Pause, Vorspulen, Zurückspulen usw., die es Nutzern ermöglichen, Medieninhalte nach Wunsch zu konsumieren.

Diese Funktionen fördern jedoch in der Regel einseitige Interaktionen, bei denen die Nutzer Inhalte passiv konsumieren. Das ist in Ordnung, aber das Web ist eine zweiseitige Erfahrung. Webseiten-Nutzer legen fest, wie sie Inhalte und Dienste erleben möchten. Sie bestellen Taxis und fordern Rückrufe an. Sie geben Feedback und äußern Beschwerden. Sie kaufen Produkte und lassen sie sich nach Hause liefern.

Um diese zweiseitige Erfahrung zu bieten, müssen Sie Schaltflächen und Formulare verwenden.

Schaltflächen werden in der Regel mit HTML-{{htmlelement("button")}}-Elementen erstellt (sie werden auch manchmal mit {{htmlelement("input")}}-Elementen erstellt, deren `type`-Attribute auf einen Wert wie `button` oder `submit` gesetzt sind). Diese Druckknöpfe sind universell einsetzbar – Sie können sie so verbinden, dass sie jede gewünschte Funktion auslösen, begrenzt nur durch Ihre Vorstellungskraft und Programmierfähigkeiten.

Formulare werden unter Verwendung von Elementen wie {{htmlelement("form")}}, {{htmlelement("label")}}, {{htmlelement("input")}} und {{htmlelement("select")}} erstellt. Formularelemente können verwendet werden, um komplexere Steuerungen zu erstellen, als einfache Schaltflächen ermöglichen – zum Beispiel ein Dropdown-Menü, das mehrere Optionen enthält, mit denen Sie zwischen verschiedenen Themen für ein Benutzeroberflächenelement wählen können.

Wesentlich ist jedoch, dass sie auch verwendet werden können, um Formulare zu erstellen, die Nutzer ausfüllen müssen, wenn sie Informationen an einen Webserver senden müssen. Denken Sie an E-Commerce-Seiten – wenn Sie ein Produkt suchen möchten, verwenden Sie ein Formular, um Suchbegriffe einzugeben. Wenn Sie für einige Artikel bezahlen und die Lieferung abschließen möchten, verwenden Sie ein Formular, um Ihre Postanschrift einzugeben, und ein weiteres Formular, um Ihre Kreditkartendaten einzugeben.

Wir werden uns hauptsächlich auf diese – eher traditionelle – Nutzung von Formularelementen in diesem Artikel konzentrieren. Beachten Sie, dass auch Schaltflächen häufig in Formularen verwendet werden, um die eingegebenen Daten an den Server zu senden.

Mit dieser wichtigen Theorie im Hinterkopf, lassen Sie uns fortfahren und den Code erkunden und sehen, wie Schaltflächen und Formulare implementiert werden.

## Schaltflächen

Wie oben angedeutet, haben Schaltflächen ein paar Hauptverwendungen im Web. Erstens werden sie verwendet, um Funktionen auszulösen, was nützlich ist, wenn UI-Steuerelemente erstellt werden. Die einfachste Schaltfläche wird mit dem folgenden Code implementiert:

```html live-sample___basic-button
<button>Press me</button>
```

Dies wird wie folgt gerendert:

{{EmbedLiveSample("basic-button", "100%", "60")}}

Der Text, der zwischen den `<button></button>`-Tags erscheint, wird innerhalb der Schaltfläche gerendert und erhält vom Browser eine grundlegende Stilgebung, sodass er standardmäßig wie eine Schaltfläche aussieht und sich verhält. Soweit, so gut. Es gibt jedoch ein Problem – unsere einsame Schaltfläche wird alleine nichts Nützliches tun. Um etwas Nützliches zu tun, müssen Sie es entweder in ein Formular einschließen (das wir später behandeln werden) oder etwas JavaScript hinzufügen.

Zum Beispiel, wenn Sie das folgende JavaScript auf die oben stehende Schaltfläche anwenden:

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

Es würde Ihnen die folgende Ausgabe liefern — versuchen Sie, es anzuklicken:

{{EmbedLiveSample("basic-button-with-js", "100%", "60")}}

Es wird jetzt nicht erwartet, dass Sie verstehen, wie das JavaScript funktioniert. Sie werden später im Kurs mehr darüber lernen.

Im nächsten Abschnitt sehen Sie eine Demonstration der zweiten Hauptverwendung von Schaltflächen – der Übermittlung von Formularen.

## Der Aufbau eines Formulars

Ein einfaches Formular enthält drei Dinge:

- Ein {{htmlelement("form")}}-Element, das den gesamten anderen Formularinhalt umschließt. Alle Formularsteuerungen innerhalb der `<form></form>`-Tags sind Teil desselben Formulars, und ihre Daten werden mitgesendet, wenn das Formular abgeschickt wird.
- Ein oder mehrere Paare, die jeweils aus einem {{htmlelement("label")}}-Element und einem Formularsteuerungselement bestehen (normalerweise ein {{htmlelement("input")}}-Element, aber es gibt auch andere Typen, zum Beispiel {{htmlelement("select")}}):
  - Das Formularsteuerungselement ermöglicht es dem Nutzer, Daten auszuwählen oder einzugeben, die beim Abschicken des Formulars an den Server gesendet werden.
  - Das `<label>`-Element bietet eine identifizierende Beschriftung, die mit der Formularsteuerung verbunden ist und die Daten beschreibt, die darin eingegeben werden sollen.
- Ein {{htmlelement("button")}}-Element, das verwendet wird, um das Formular abzuschicken.

Schauen wir uns ein einfaches Beispiel an, das die obigen drei Elemente enthält. Dieses Formular könnte verwendet werden, um nach dem Namen und der E-Mail-Adresse eines Nutzers zu fragen, um ihn für einen Newsletter anzumelden (keine Sorge – es ist nicht mit einem Server verbunden und tut derzeit nichts).

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

Aufgrund der Funktionsweise von MDN können Sie Text in die Eingabefelder eingeben, aber das Formular wird nicht ordnungsgemäß abgeschickt, wenn Sie die Schaltfläche drücken. Um die folgenden Abschnitte nachzuvollziehen, kopieren Sie den obigen HTML-Code in eine neue HTML-Datei mit Ihrem [Code-Editor](/de/docs/Learn_web_development/Getting_started/Environment_setup/Code_editors) und öffnen Sie sie in einem neuen Browser-Tab.

### Das `<form>`-Element

Wie bereits gesagt, fungiert das {{htmlelement("form")}}-Element als äußerer Wrapper für das Formular und gruppiert alle darin enthaltenen Formularsteuerungen zusammen. Wenn der `<button>` gedrückt wird, werden alle durch die Formularelemente dargestellten Daten an den Server gesendet. Das `<form>`-Element kann viele Attribute enthalten, aber die beiden wichtigsten, die wir hier aufgenommen haben, sind die folgenden:

- `action`: Enthält einen Pfad zu der Seite, an die wir die übermittelten Formulardaten senden wollen, um sie zu verarbeiten. Später, nachdem Sie das Formular übermittelt haben, werden Sie `/submit_page` in der URL sehen. Sie werden auch eine {{HTTPStatus("404")}}-Fehlerantwort erhalten, da die Seite tatsächlich nicht existiert, aber das ist im Moment in Ordnung.
- `method`: Gibt die [Methode](/de/docs/Web/HTTP/Methods) der Datenübertragung an, die Sie für das Senden der Formulardaten an den Server verwenden möchten. Machen Sie sich darüber jetzt keine großen Gedanken; der Wert `get` bewirkt, dass die Daten als Parameter an das Ende der URL angehängt werden.

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Gehen Sie zum Beispiel im separaten Tab, versuchen Sie, einen Namen wie "Bob" und eine E-Mail-Adresse wie "bob@bob.com" einzugeben.
>
> Die obigen beiden Attribute bewirken, dass die Formulardaten in einer URL in etwa folgendermaßen übermittelt werden:
>
> `/some/url/submit_page?name=Bob&email=bob%40bob.com`

#### Strukturierung von Formularen

Sie können beliebige HTML-Elemente innerhalb eines `<form>`-Elements einfügen, um die Formularelemente selbst zu strukturieren und Container zu bieten, die Sie mit CSS für die Gestaltung anvisieren können.

In unserem Beispiel haben wir ein [Überschriftenelement](/de/docs/Web/HTML/Element/Heading_Elements) (`<h2>`) aufgenommen, um den Zweck des Formulars zu beschreiben.

Wir haben auch jedes Eingabe-/Label-Paar und die Absenden-Schaltfläche in einem separaten {{htmlelement("p")}} untergebracht, sodass jedes in einer separaten Zeile erscheint. Diese Elemente sind standardmäßig alle inline, was bedeutet, dass sie alle in derselben Zeile sitzen würden, wenn wir das nicht getan hätten.

Dies ist ein häufiges Schema für die Strukturierung von Formularen. Einige Leute verwenden <p>-Elemente, um ihre Formularelemente zu trennen, andere verwenden {{htmlelement("div")}}, {{htmlelement("section")}} oder sogar {{htmlelement("li")}}-Elemente. Es spielt nicht wirklich eine große Rolle, solange die verwendeten Elemente semantisch sinnvoll sind. Zum Beispiel macht es Sinn, Formularelementgruppen in separate Absätze oder Inhaltsabschnitte oder sogar Elemente in einer Liste aufzuteilen. Es wäre weniger sinnvoll, sie als [Blockzitate](/de/docs/Web/HTML/Element/blockquote), [Asides](/de/docs/Web/HTML/Element/aside) oder [Adressen](/de/docs/Web/HTML/Element/address) darzustellen.

Es gibt ein spezialisiertes Element zum Gruppieren von Formularelementen, das {{htmlelement("fieldset")}} heißt. Dies ist in bestimmten Situationen nützlich, z.B. in komplexen Formularen und beim Gruppieren mehrerer Kontrollkästchen und Optionsschalter. Wir werden uns im späteren Verlauf einige Beispiele für `<fieldset>` ansehen.

### `<input>`-Elemente

Die {{htmlelement("input")}}-Elemente repräsentieren die verschiedenen in das Formular eingegebenen Daten. Lassen Sie uns eines der Beispiele aus unserem einfachen Formular untersuchen:

```html
<input type="text" name="name" id="name" required />
```

Die Attribute sind wie folgt:

- `type`: Gibt die Art der zu erstellenden Formsteuerung an. Es gibt viele verschiedene Arten von Formsteuerungen, von einfachen Textfeldern verschiedener Typen bis hin zu Optionsschaltern, Kontrollkästchen und mehr. Der Typ `text` rendert ein einfaches Textfeld, das jeden Wert akzeptieren kann.
- `name`: Gibt einen Namen für das Datenelement an. Wenn das Formular übermittelt wird, werden die Daten in Name/Wert-Paaren gesendet. In jedem Fall ist der Name gleich dem Wert dieses `name`-Attributs, und der Wert entspricht dem in das Textfeld eingegebenen Text.
- `id`: Gibt eine ID an, die zur Identifizierung des Elements verwendet werden kann. In diesem Fall wird sie verwendet, um das Formularelement mit seiner `<label>` zu verbinden.
- `required`: Gibt an, dass ein Wert in das Formelelement eingegeben werden muss, bevor das Formular übermittelt werden kann. Dies sollte nur bei Eingaben gesetzt werden, die Sie benötigen, nicht bei optionalen Feldern.

Sie sollten sich bewusst sein, dass einige Eingabetypen ihre Werte normalerweise nicht aus Text beziehen, der in ein Feld eingegeben wird. Zum Beispiel rendert [`<input type="color">`](/de/docs/Web/HTML/Element/input/color) ein Farbwähler-Widget, aus dem Sie eine Farbe auswählen, während [`<input type="radio">`](/de/docs/Web/HTML/Element/input/radio) ein Optionsschaltflächensteuerungselement rendert, das ausgewählt werden kann oder nicht.

Im Fall von Optionsschaltern müssen Sie im Allgemeinen den Wert, der übermittelt würde, wenn sie ausgewählt ist, in einem bestimmten `value`-Attribut angeben. Beachten Sie, dass Sie ein `value`-Attribut auch bei Eingabetypen wie `text` und `color` angeben _können_ – der Effekt ist, dass der Wert beim ersten Rendern des Formelements vorausgefüllt wird.

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> 1. Gehen Sie erneut zum im separaten Tab geladenen Beispiel und versuchen Sie, das Formular ohne Eingabe eines Wertes in eines der Felder zu übermitteln. Sie werden eine Fehlermeldung neben dem Feld "Name" sehen, mit einem Text wie "Bitte füllen Sie dieses Feld aus" (es wird bei verschiedenen Browsern unterschiedlich angezeigt). Dies ist das Attribut `required` – und die browserseitige Standardüberprüfung von Formularen – in Aktion.
> 2. Versuchen Sie jetzt, das Formular mit einem gültigen Namen im ersten Feld zu übermitteln, aber einem Wert, der keine gültige E-Mail-Adresse im zweiten Feld ist (etwas wie "aaaa" reicht aus). Sie werden diesmal eine Fehlermeldung neben dem Feld "E-Mail" sehen, mit einem Text wie "Bitte geben Sie Eine E-Mail-Adresse ein."
> 3. Für diese Übung müssen Sie den Formularcode bearbeiten. Sie können dies tun, indem Sie das lokale Beispiel, das Sie in Ihrem Texteditor erstellt haben, öffnen, es dort bearbeiten und speichern. Versuchen Sie, das Formular zu bearbeiten, um `value="Bob"` in das erste Eingabefeld einzufügen. Wenn Sie den Code neu laden, sehen Sie, dass das erste Feld einen Wert von "Bob" standardmäßig enthält.

#### Spezialisierte Texteingabefelder

Die zweite Übung oben führt zu einem interessanten Punkt. Das zweite Eingabefeld erwartet speziell eine E-Mail-Adresse und überprüft die eingegebenen Werte entsprechend. Wenn Sie den Formularcode erneut betrachten, werden Sie sehen, warum – das zweite `<input>` hat einen `type` von `email`. Es gibt mehrere spezialisierte Texteingabefeldtypen, die dazu bestimmt sind, bestimmte Datentypen zu verarbeiten – [`<input type="number">`](/de/docs/Web/HTML/Element/input/number), [`<input type="password">`](/de/docs/Web/HTML/Element/input/password), [`<input type="tel">`](/de/docs/Web/HTML/Element/input/tel) usw.

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Folgen Sie einigen der obigen Links, um herauszufinden, wofür diese Eingabetypen verwendet werden. Schauen Sie sich in unserem [`<input>`](/de/docs/Web/HTML/Element/input)-Referenzdokument um und sehen Sie, ob Sie noch andere spezialisierte Texteingabefeldtypen finden können.

### `<label>`-Elemente

Wie bereits gesagt, bieten {{htmlelement("label")}}-Elemente identifizierende Etiketten, die mit Formsteuerungen verbunden sind und die zu ersetzenden Daten beschreiben. Sie können beliebigen Textinhalt in `<label>`-Elementen platzieren, aber sie sollten genau beschreiben, welche Daten die zugehörige Steuerung erwartet. Die Verbindung erfolgt, indem Sie dem Formularelement ein `id`-Attribut geben und dann dem `<label>`-Element ein `for`-Attribut mit demselben Wert wie die `id` der Steuerung vergeben.

Zum Beispiel:

```html
<label for="name">Name (required):</label>
<input type="text" name="name" id="name" required />
```

`<label>`-Elemente sind aus mehreren Gründen wichtig, insbesondere:

- Wenn sehbehinderte Nutzer einen Bildschirmleser verwenden, um ihnen beim Lesen und Interagieren mit Webinhalt zu helfen, liest der Bildschirmleser den zugehörigen Etikett-Text vor, wenn jede Steuerung aufgerufen wird. Dies erleichtert es den Nutzern zu verstehen, welche Inhalte in die Steuerung eingegeben werden sollen.
- Sie ermöglichen es Ihnen, die Formularelemente zu fokussieren, indem Sie sowohl auf den Text ihres Etiketts als auch auf die Steuerung klicken. Dies ist besonders nützlich für Handynutzer, bei denen es schwierig sein kann, ein Formularelement genau mit dem Finger auf einen Touchscreen auszuwählen. Die Vergrößerung des **Treffbereichs** ist in solchen Situationen nützlich.

#### Explizite und implizite Formetiketten

Der oben gezeigte Formularlabel-Stil wird als **explizites Formlabel** bezeichnet – die Verbindung zwischen Steuerung und Etikett wird explizit über die `id`- und `for`-Attribute hergestellt. Sie können auch ein **implizites Formlabel** implementieren, indem Sie die Steuerung innerhalb des Etiketts verschachteln, so:

```html
<label>
  Name (required):
  <input type="text" name="name" required />
</label>
```

Das Verschachteln erzeugt eine implizite Verbindung zwischen Steuerung und Etikett, und Sie benötigen die `id`- und `for`-Attribute nicht mehr.

Beide Ansätze sind in Ordnung, aber wir würden empfehlen, den expliziten Etikettierungsansatz zu verwenden. Dies liegt daran, dass die explizite Verbindung in der Regel leichter zu identifizieren und zu verstehen ist, insbesondere wenn Ihr HTML-Code komplexer wird. Außerdem gehen Bildschirmleser (und andere unterstützende Technologien) nicht immer korrekt mit impliziten Labels um.

Sie können mehr über die besten Praktiken zur Formular-Kennzeichnung in [HTML Inputs and Labels: A Love Story](https://css-tricks.com/html-inputs-and-labels-a-love-story/), csstricks.com (2021) erfahren.

### Das `<button>`-Element

Wenn ein {{htmlelement("button")}}-Element innerhalb eines `<form>`-Elements enthalten ist, besteht das Standardverhalten darin, dass es das Formular übermittelt, sofern keine ungültigen Daten vorhanden sind, die die Übermittlung durch die clientseitige Formularvalidierung blockieren. Sie haben dieses Verhalten bereits beim Ausprobieren unseres einfachen Formularbeispiels oben gesehen.

Es gibt andere Schaltflächenverhalten, die über das `type`-Attribut des `<button>`-Elements angegeben werden können:

- `<button type="submit">` erklärt ausdrücklich, dass eine Schaltfläche wie eine Senden-Schaltfläche funktionieren soll. Sie müssen dies nicht wirklich deklarieren, es sei denn, Sie haben aus irgendeinem Grund andere Schaltflächen innerhalb Ihres `<form>`, und Sie möchten klarstellen, welche die Senden-Schaltfläche ist. Dies wird sehr selten sein.
- `<button type="reset">` erstellt eine _Zurücksetzen-Schaltfläche_ — dies löscht sofort alle Daten aus dem Formular und setzt es in seinen Anfangszustand zurück. **Verwenden Sie keine Zurücksetzen-Schaltflächen** — sie waren in den frühen Tagen des Webs beliebt, aber sie sind normalerweise ärgerlicher als hilfreich. Die meisten Leute haben schon einmal ein langes Formular ausgefüllt, nur um aus Versehen die Zurücksetzen-Schaltfläche statt der Absenden-Schaltfläche zu drücken, was bedeutet, dass sie von vorne anfangen müssen.
- `<button type="button">` erstellt eine Schaltfläche mit demselben Verhalten wie Schaltflächen außerhalb von `<form>`-Elementen. Wie wir bereits gesehen haben, tun sie absolut nichts standardmäßig, und JavaScript ist erforderlich, um ihnen Funktionalität zu verleihen.

> [!NOTE]
> Sie können die oben genannten Schaltflächentypen auch mit einem `<input>`-Element erstellen, das dieselben `type`-Werte festgelegt hat — [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit), [`<input type="reset">`](/de/docs/Web/HTML/Element/input/reset) und [`<input type="button">`](/de/docs/Web/HTML/Element/input/button). Diese haben jedoch viele Nachteile im Vergleich zu ihren `<button>`-Gegenstücken. Sie sollten `<button>` stattdessen verwenden.

## Ein Exkurs zur Barrierefreiheit

Wir haben bereits über die Bedeutung von Formularlabels für die Barrierefreiheit gesprochen, aber wir wollten auch einige Kommentare zur allgemeinen Bedeutung der Verwendung der richtigen semantischen Elemente für die Erstellung von Formularen hinzufügen (zum Beispiel verwenden Sie ein `<button>`, um Ihr Formular zu übermitteln, und nicht ein `<div>`, das zu einem `<button>` programmiert wurde). Es ist durchaus möglich, eine Kombination aus CSS und JavaScript zu verwenden, um praktisch jedes HTML-Element wie ein Formularelement aussehen und sich verhalten zu lassen. Entwickler tun dies in der Regel aus Designgründen – einige Formularelemente sind schwer zu stylen.

Wenn Sie dies tun, machen Sie sich und Ihren Nutzern das Leben jedoch schwerer. Der Browser bietet mehrere `<button>`- und Formularsteuerungsfunktionen standardmäßig, ohne dass JavaScript oder anderer zusätzlicher Code erforderlich ist, um Formulare für alle Nutzer benutzbarer zu machen.

Zum Beispiel:

- Semantische Elemente werden von unterstützender Technologie wie Bildschirmlesern verstanden, die ihre Bedeutung an Nutzer kommunizieren, die sie nicht sehen können.
- Formularelemente und Schaltflächen sind standardmäßig über die Tastatur zugänglich. Im vorherigen Beispiel versuchen Sie, vorwärts und rückwärts zwischen den Formularelementen unter Verwendung von <kbd>Tab</kbd> und <kbd>Shift</kbd> + <kbd>Tab</kbd> (sogenanntes "Tabbing") zu navigieren.
- Beachten Sie auch, wie das Tabbing zwischen den Formularelementen dazu führt, dass das fokussierte Element mit einem blauen Rahmen (dem **Fokusrahmen**) hervorgehoben wird. Dies ist eine wichtige Funktion für Tastaturnutzer, um zu wissen, wo sie sich momentan im Formular befinden.

Wenn Sie nicht die richtigen semantischen Elemente verwenden, um Ihre Formulare zu implementieren, müssen Sie all diese Funktionalitäten neu implementieren, anderenfalls verhalten sich Ihre Formularelemente nicht so, wie die Nutzer es erwarten, und scheinen daher defekt zu sein. Das alles summiert sich.

## Andere Steuerungstypen

Es gibt viele andere Steuerungstypen, die Sie verwenden können, um Daten in einem Formular zu sammeln. Schauen wir uns ein etwas komplexeres Beispiel an und erklären dann die Details.

> [!NOTE]
> In diesem Beispiel gehen wir davon aus, dass der Nutzer bereits registriert und angemeldet ist, daher müssen keine Details wie Name und E-Mail eingeholt werden.

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
      <option value="jetpack">Jetpack</option>
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

Wir empfehlen Ihnen, dieses Beispiel in einem separaten Browser-Tab zu öffnen, während Sie die nächsten Abschnitte durchgehen, in denen wir jeden Steuerungstyp der Reihe nach betrachten. Um dies zu erreichen, kopieren Sie den Code in eine HTML-Datei mit Ihrem Code-Editor und öffnen Sie sie in einem Browser-Tab.

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Bevor Sie weitermachen, spielen Sie mit den verschiedenen Formularelementen, wählen Sie einige Werte aus und versuchen Sie, das Formular abzuschicken.

### Optionsschalter

Die "Zimmertyp im Hotel auswählen"-Schaltflächen werden mit [`<input type="radio">`](/de/docs/Web/HTML/Element/input/radio)-Steuerelementen implementiert. Diese rendert als eine Gruppe von Druckknopfsteuerungen, bei denen nur eines der Gruppe gleichzeitig ausgewählt werden kann – Sie können nicht mehr als eines gleichzeitig auswählen. Sie sind nach den Knöpfen an altmodischen Radios benannt, bei denen Sie einen Knopf drücken und der zuvor ausgewählte wieder herauskommt.

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

`radio`-Eingabetypen funktionieren im Wesentlichen wie `text`-Eingabetypen, jedoch mit einigen Unterschieden:

- Die `name`-Attribute für jede Gruppe von Optionsschaltern müssen denselben Wert enthalten, um sie als eine Gruppe zu verbinden. Wenn sie unterschiedliche Werte enthalten, werden sie im Wesentlichen separate Gruppen mit unterschiedlichen Werten bei der Übermittlung sein.
- Sie müssen ein `value`-Attribut hinzufügen, das den Wert enthält, der für jeden Optionsschalter übermittelt werden soll. Der übermittelte Wert wird ein Name/Wert-Paar sein, wobei der Name immer derselbe sein wird, zum Beispiel `hotel=economy` oder `hotel=superior`.
- Das `<label>` für jeden Optionsschalter sollte diese bestimmte Wertauswahl beschreiben, anstatt die allgemeine Auswahl des übergeordneten Werts. Die bevorzugte Methode, um eine Beschreibung der allgemeinen Auswahl des übergeordneten Werts anzubieten, besteht darin, sie in ein {{htmlelement("fieldset")}} zu wickeln, das ein {{htmlelement("legend")}}-Element als Kind enthält, welches die Beschreibung enthält.

> [!NOTE]
> Neben dem Strukturieren und Kennzeichnen von Formularen haben Fieldsets noch andere Verwendungszwecke, wie zum Beispiel das [Deaktivieren](#deactivieren_form_controls) einer gesamten Steuerungsgruppe als eine Einheit.

Es ist auch erwähnenswert, dass wir das `checked`-Attribut auf den ersten Optionsschalter angewendet haben — dies bewirkt, dass er bei der ersten Seitennutzung ausgewählt wird. Dies ist, wie wir rechtfertigen können, den Hotelzimmer-Typ als "erforderlich" zu markieren — eine Option wird immer ausgewählt, und Sie können keinen Kontrollschalter abwählen, ohne einen anderen auszuwählen.

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Versuchen Sie, das `checked`-Attribut von dem ersten Optionsschalter zu entfernen, speichern Sie und laden Sie die Seite neu, um den Effekt zu sehen, den es hat. Setzen Sie es zurück, bevor Sie weitermachen.

#### Deaktivieren von Formularelementen

Im Beispiel mit dem Optionsschalter werden Sie bemerken, dass der dritte Optionsschalter das `disabled`-Attribut gesetzt hat. Dies bewirkt, dass die gerenderten Steuerungen ausgegraut und nicht auswählbar sind. Dies ist in vielen Situationen nützlich, in denen eine Option normalerweise verfügbar ist, jetzt jedoch nicht. Zum Beispiel könnte ein Produkt nicht vorrätig sein, oder wie im Fall unseres Beispiels alle Penthouse-Suiten bereits ausgebucht.

Das `disabled`-Attribut kann auf jedem Formulelement gesetzt werden, einschließlich `<button>`-Elementen. Auch `<fieldset>`-Elemente können das `disabled`-Attribut akzeptieren — dies bewirkt, dass jede Formsteuerung innerhalb des Fieldsets deaktiviert wird.

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Versuchen Sie, das `disabled`-Attribut auf den beiden `<fieldset>`-Elementen zu setzen, speichern Sie und laden Sie die Seite neu, um den Effekt zu sehen. Entfernen Sie sie wieder, bevor Sie weitermachen.

### Kontrollkästchen

Unsere „zu besuchenden Kurse“-Wähler werden mit [`<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox)-Steuerelementen implementiert. Diese rendert als eine Gruppe von Schaltern für einen Ein-/Aus-Zustand. Im Gegensatz zu Optionsschaltern können Sie mehr als einen gleichzeitig auswählen.

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

Wie Sie aus den Codeschnipseln sehen können, werden Optionsschalter und Kontrollkästchen auf sehr ähnliche Weise implementiert (sie können auch `checked`-Attribute annehmen, um sie vorausgewählt zu rendern, wenn die Seite lädt). Sie verhalten sich auch auf eine ziemlich ähnliche Art und Weise, mit dem Unterschied, dass Optionsschalter Ihnen erlauben, null oder ein Element aus vielen auszuwählen, während Kontrollkästchen Ihnen erlauben, null oder mehr Elemente aus vielen auszuwählen.

Der Hauptunterschied (abgesehen vom `type`-Wert!) besteht darin, dass jedes Kontrollkästchen einen anderen `name`-Wert hat und in der Regel keine `value`-Attribute angegeben werden. Aus Sicht des Verhaltens bedeutet dies, dass sie unterschiedliche Datenwerte darstellen, während eine Gruppe von Optionsschaltern nur einen repräsentiert. Bei der Einreichung wird jeder Wert als Name-Wert-Paar mit `on` gesendet, wenn das Kontrollkästchen aktiviert war — `yoga=on`, `balloon=on` usw.

> [!NOTE]
> Es ist möglich, den zu übermittelnden Wert eines Kontrollkästchens zu ändern, indem Sie ihm ein `value`-Attribut zuweisen, beispielsweise: `<input type="checkbox" id="yoga" name="yoga" value="yes" />` würde `yoga=yes` übermitteln, wenn aktiviert. Es macht jedoch wenig Sinn, dies zu tun. Ein Kontrollkästchen wird entweder mit einem einzelnen Wert gesendet wenn es aktiviert ist, oder es wird überhaupt nicht gesendet. Es spielt keine Rolle, welcher Wert an den Server gesendet wird.

### Dropdown-Menüs

Dropdown-Menüs, beispielsweise die „Wie kommen Sie hier her“-Auswahlsteuerung in unserem Beispiel, werden nicht mit einem `<input>`-Typ implementiert, sondern mit den {{htmlelement("select")}}- und {{htmlelement("option")}}-Elementen:

```html-nolint
<label for="transport">How are you getting here:</label>
<select name="transport" id="transport">
  <option value="">--Please choose an option--</option>
  <option value="plane">Plane</option>
  <option value="bike">Bike</option>
  <option value="walk">Walk</option>
  <option value="bus">Bus</option>
  <option value="train">Train</option>
  <option value="jetpack">Jetpack</option>
</select>
```

Das `<select>`-Element umschließt alle unterschiedlichen Auswahlwerte. Es ist der Ort, an dem Sie das `id`-Attribut setzen, das die Steuerung mit ihrem Label verbindet, und das `name`-Attribut, das den Namen des zu übermittelnden Datenelements festlegt.

Jeder mögliche Wert für das Datenelement wird durch ein `<option>`-Element dargestellt, das innerhalb des `<select>`-Elements verschachtelt ist. Jedes `<option>`-Element kann ein `value`-Attribut annehmen, das den Wert angibt, der übermittelt werden soll, wenn diese Option aus der Dropdown-Liste ausgewählt wird. Wenn Sie keinen `value` angeben, wird der Text innerhalb der `<option></option>`-Tags als Wert verwendet.

> [!NOTE]
> Wenn Sie möchten, dass eine bestimmte Option beim ersten Laden der Seite ausgewählt wird, können Sie dem entsprechenden `<option>`-Element ein `selected`-Attribut hinzufügen.

### Mehrzeilige Texteingabefelder

Mehrzeilige Texteingabefelder werden mit {{htmlelement("textarea")}}-Elementen erstellt:

```html-nolint
<label for="comments">Any other comments:</label>
<textarea id="comments" name="comments" rows="5" cols="33"></textarea>
```

Sie verhalten sich genauso wie `<input type="text">`-Elemente, außer dass sie mehrere Textzeilen akzeptieren. Das `rows`-Attribut gibt die Anzahl der Zeilen an, die das Textfeld standardmäßig hoch ist, während das `cols`-Attribut angibt, wie viele Spalten breit das Textfeld standardmäßig ist. Wenn sie nicht angegeben werden, lauten die verwendeten Werte `cols="20"` und `rows="2"`.

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Die meisten Browser rendern Textbereiche mit einem Ziehgriff in einer Ecke, der zum Ändern der Größe verwendet werden kann. Versuchen Sie, diesen zu verwenden, um den Textbereich in unserem Demo-Beispiel zu vergrößern oder zu verkleinern.

## Formularvalidierung

Zu Beginn haben wir uns einige grundlegende clientseitige Formularvalidierungen des Browsers angesehen. Das `required`-Attribut wird verwendet, um anzugeben, dass ein Feld ausgefüllt sein muss, bevor das Formular übermittelt werden kann; es überprüft auch, dass der richtige Werttyp für spezifische Werttypen wie E-Mail-Adressen, URLs, Zahlen usw. eingegeben wird. Validierung ist aus zwei Hauptgründen wichtig:

- Sicherstellen, dass Daten im richtigen Format übermittelt werden, sodass sie keine Fehler in Ihrer Anwendung verursachen.
- Sicherstellen, dass Daten keine Sicherheitsprobleme verursachen. Schädliche Menschen wissen, wie man Daten speziell formatiert, damit sie in unsicheren Anwendungen Befehle ausführen können, um Datenbanken zu löschen oder ein System zu übernehmen.

Formularvalidierung ist ein enormes Thema, das den Rahmen dieses Artikels sprengen würde, daher lassen wir es vorerst dabei. Beachten Sie einfach, dass es zwei Arten von Formularvalidierung gibt:

- Clientseitige Validierung, die im Browser erfolgt und mit einer Kombination aus Formularvalidierungsattributen (wie `required`) und JavaScript implementiert wird. Clientseitige Validierung ist nützlich, um Nutzern sofortige Hinweise zu geben, wenn sie falsche Daten eingegeben haben, aber sie ist nicht so effektiv dabei, schädliche Daten zu stoppen. Es ist zu einfach, JavaScript auszuschalten oder clientseitigen Code so zu ändern, dass die Validierung nicht mehr funktioniert.
- Serverseitige Validierung, die auf dem Server erfolgt und mit der verwendeten Sprache des Servers implementiert wird. Auf schlechte Weise formatiere Nachrichten können absichtlich oder aus Versehen an einen Server geschickt werden. Generelle Weisheit ist, sicherzustellen, dass Ihr Server nichts vertraut, was ein Client sendet, um Fehler oder Sicherheitsprobleme zu vermeiden, die durch fehlerhafte Nachrichten verursacht werden könnten. Serverseitige Validierung ist großartig, um schädliche Nachrichten zurückzuhalten, da es schwieriger ist, den auf dem Server laufenden Code zu manipulieren. Serverseitige Validierung ist jedoch nicht so gut darin, Nutzern Hinweise auf fehlerhafte Eingaben zu geben, weil die Daten zum Server gehen müssen, um validiert zu werden, und dann das Ergebnis wieder an den Client gesendet werden muss, bevor der Nutzer benachrichtigt werden kann.

Kurz gesagt, entscheiden Sie sich nicht zwischen der Verwendung entweder der client- oder serverseitigen Validierung – Sie benötigen beide. Sie brauchen die clientseitige Validierung, um den Nutzern Feedback zu ihren Eingaben zu geben, und die serverseitige Validierung, um sicherzustellen, dass Nachrichten in einem Format sind, das Ihr Server sicher verarbeiten kann. Wenn Sie mehr über Validierung lernen möchten, ist [Client-side form validation](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) ein guter Anfang.

## Zusammenfassung

Das war's fürs Erste. Es gibt noch viel mehr über Formulare zu wissen, aber vorerst haben wir Ihnen genügend Verständnis vermittelt, um in Ihrem Studium weiterzukommen.

Als Nächstes werden wir uns ansehen, wie man Probleme im HTML-Code debuggt.

## Siehe auch

- [Web-Formulare — Umgang mit Benutzerdaten](/de/docs/Learn_web_development/Extensions/Forms)

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content/Debugging_HTML", "Learn_web_development/Core/Structuring_content")}}
