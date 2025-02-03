---
title: Formulare und Schaltflächen in HTML
slug: Learn_web_development/Core/Structuring_content/HTML_forms
l10n:
  sourceCommit: f9881dd30bec0793e97782578dbb8b8d859ce9f9
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content/Debugging_HTML", "Learn_web_development/Core/Structuring_content")}}

HTML-Formulare und -Schaltflächen sind mächtige Werkzeuge zur Interaktion mit den Benutzern einer Webseite. Am häufigsten bieten sie Benutzern Steuerelemente, um eine Benutzeroberfläche (UI) zu manipulieren oder Daten einzugeben, wenn dies erforderlich ist.

In diesem Artikel geben wir eine Einführung in die Grundlagen von Formularen und Schaltflächen. Es gibt viel mehr zu wissen — viele Eingabetypen und Formularfunktionen werden nicht erwähnt — aber dieser Artikel wird Ihnen eine solide Grundlage für die meisten Fälle geben. Sie können die fortgeschrittenen oder spezialisierten Anwendungen nach Bedarf erlernen, als Teil des ständigen Lernprozesses, den Sie während Ihrer Karriere durchlaufen werden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML, wie sie in der
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegenden HTML-Syntax</a
        > behandelt wurden. Semantik auf Textebene, wie zum Beispiel <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
          >Überschriften und Absätze</a
        > und <a href="/de/docs/Learn_web_development/Core/Structuring_content/Lists"
          >Listen</a
        >. <a href="/de/docs/Learn_web_development/Core/Structuring_content/Structuring_documents"
          >Strukturierung von HTML-Dokumenten</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernergebnisse:</th>
      <td>
        <ul>
          <li>Ein Verständnis dafür, dass Formulare und Schaltflächen die Hauptwerkzeuge sind, mit denen Benutzer mit einer Website interagieren, zusammen mit Links.</li>
          <li>Verschiedene Schaltflächentypen.</li>
          <li>Gängige <code>&lt;input&gt;</code>-Typen.</li>
          <li>Gängige Attribute wie <code>name</code> und <code>value</code>.</li>
          <li>Das <code>&lt;form&gt;</code>-Element und die Grundlagen der Formularübermittlung.</li>
          <li>Erstellung barrierefreier Formulare mit Labels und korrekter Semantik.</li>
          <li>Weitere Steuerelemente: <code>&lt;textarea&gt;</code>, <code>&lt;select&gt;</code> und <code>&lt;option&gt;</code>.</li>
          <li>Grundlagen der clientseitigen Validierung.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Interaktion mit Benutzern

Bisher im Kurs haben Sie einige Möglichkeiten gesehen, wie Benutzer mit dem Web interagieren können:

- [Links](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links) können verwendet werden, um zu verschiedenen Inhaltsabschnitten zu navigieren, entweder auf derselben Seite oder auf einer anderen Seite.
- [`<video>` und `<audio>`](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) Elemente verfügen in der Regel über Steuerelemente wie Play/Pause, Vorspulen, Zurückspulen usw., die es Benutzern ermöglichen, Medieninhalte nach Belieben zu konsumieren.

Diese Funktionen erleichtern jedoch eher einseitige Interaktionen, bei denen Benutzer Inhalte passiv konsumieren. Das ist zwar in Ordnung, aber das Web ist eine zweiseitige Erfahrung. Website-Benutzer legen Präferenzen fest, wie sie Inhalte und Dienstleistungen erleben möchten. Sie bestellen Taxis und bitten um Rückrufe. Sie geben Feedback und beschweren sich. Sie kaufen Produkte und lassen sie sich nach Hause liefern.

Um diese zweiseitige Erfahrung zu ermöglichen, müssen Sie Schaltflächen und Formulare verwenden.

Schaltflächen werden in der Regel mit HTML-{{htmlelement("button")}}-Elementen erstellt (sie werden manchmal auch mit {{htmlelement("input")}}-Elementen erstellt, deren `type`-Attribute auf einen Wert wie `button` oder `submit` gesetzt sind). Diese Druckknöpfe sind universell einsetzbar — Sie können sie so programmieren, dass sie beliebige Funktionen auslösen, die nur durch Ihre Vorstellungskraft und Ihre Programmierfähigkeiten begrenzt sind.

Formulare werden mit Elementen wie {{htmlelement("form")}}, {{htmlelement("label")}}, {{htmlelement("input")}} und {{htmlelement("select")}} erstellt. Formularelemente können verwendet werden, um komplexere Steuerelemente zu erstellen, als einfache Schaltflächen es erlauben — zum Beispiel ein Dropdown-Menü mit mehreren Optionen, mit denen Sie zwischen verschiedenen Themen für ein Benutzeroberflächen-Element wählen können.

Entscheidend ist jedoch, dass sie auch verwendet werden können, um Formulare zu erstellen, die Benutzer ausfüllen müssen, wenn sie Informationen an einen Webserver übermitteln müssen. Denken Sie an E-Commerce-Seiten — wenn Sie nach einem Produkt suchen möchten, das Sie kaufen möchten, verwenden Sie ein Formular, um Suchbegriffe einzugeben. Wenn Sie einige Artikel bezahlen und die Lieferung abschließen möchten, verwenden Sie ein Formular, um Ihre Postadresse einzugeben, und ein weiteres Formular, um Ihre Kreditkartendaten einzugeben.

Wir werden uns in diesem Artikel hauptsächlich auf diese - eher traditionelle - Nutzung von Formularelementen konzentrieren. Beachten Sie, dass Schaltflächen auch häufig in Formularen verwendet werden, um die eingegebenen Daten an den Server zu übermitteln.

Mit dieser wichtigen Theorie aus dem Weg, lassen Sie uns den Code erkunden und sehen, wie Schaltflächen und Formulare implementiert werden.

## Schaltflächen

Wie oben angedeutet, haben Schaltflächen ein paar Hauptverwendungszwecke im Web. Zuerst einmal werden sie verwendet, um Funktionalität auszulösen, was beim Erstellen von UI-Steuerelementen nützlich ist. Die einfachste Schaltfläche wird mit folgendem Code implementiert:

```html live-sample___basic-button
<button>Press me</button>
```

Diese wird folgendermaßen gerendert:

{{EmbedLiveSample("basic-button", "100%", "60")}}

Der Text, der zwischen den `<button></button>`-Tags erscheint, wird innerhalb der Schaltfläche gerendert, und der Browser gibt ihm ein grundlegendes Styling, sodass er standardmäßig wie eine Schaltfläche aussieht und sich auch so verhält. Bis hierhin ist alles gut. Allerdings gibt es hier ein Problem — unsere einsame Schaltfläche wird allein nichts Nützliches tun. Um sie nützlich zu machen, müssen Sie sie in ein Formular einfügen (auf das wir später eingehen werden) oder etwas JavaScript hinzufügen.

Wenn Sie zum Beispiel das folgende JavaScript auf die obige Schaltfläche anwenden würden:

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

Würde es Ihnen die folgende Ausgabe geben — probieren Sie es aus, indem Sie darauf klicken:

{{EmbedLiveSample("basic-button-with-js", "100%", "60")}}

Sie müssen momentan nicht verstehen, wie das JavaScript funktioniert. Sie werden später im Kurs mehr darüber lernen.

Im nächsten Abschnitt sehen Sie eine Demonstration der zweiten Hauptverwendung von Schaltflächen — dem Übermitteln von Formularen.

## Der Aufbau eines Formulars

Ein einfaches Formular enthält drei Dinge:

- Ein {{htmlelement("form")}}-Element, das den gesamten anderen Formularinhalt umschließt. Alle Formularelemente innerhalb der `<form></form>`-Tags gehören zum selben Formular, und ihre Daten werden übermittelt, wenn das Formular abgeschickt wird.
- Eines oder mehrere Paare, die jeweils aus einem {{htmlelement("label")}}-Element und einem Formularelement bestehen (in der Regel ein {{htmlelement("input")}}-Element, es gibt aber auch andere Typen, zum Beispiel {{htmlelement("select")}}):
  - Das Formularelement ermöglicht es dem Benutzer, Daten einzugeben oder auszuwählen, die bei der Übermittlung des Formulars an den Server gesendet werden.
  - Das `<label>`-Element bietet ein beschreibendes Label, das mit dem Formularelement verbunden ist und die einzugebenden Daten beschreibt.
- Ein {{htmlelement("button")}}-Element, das zur Übermittlung des Formulars verwendet wird.

Lassen Sie uns ein einfaches Beispiel betrachten, das die oben genannten drei Elemente enthält. Dieses Formular könnte verwendet werden, um nach dem Namen und der E-Mail-Adresse eines Benutzers zu fragen, um ihn für einen Newsletter anzumelden (keine Sorge — es ist mit keinem Server verbunden, derzeit wird also nichts passieren).

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

Dies wird folgendermaßen gerendert:

{{EmbedLiveSample("form-anatomy", "100%", "200")}}

Aufgrund der Art und Weise, wie MDN funktioniert, können Sie Text in die Eingabefelder eingeben, aber Sie werden nicht sehen, wie das Formular ordnungsgemäß übermittelt wird, wenn Sie die Schaltfläche drücken. Um den nächsten Abschnitten zu folgen, kopieren Sie den obigen HTML-Code in eine neue HTML-Datei mit Ihrem [Code-Editor](/de/docs/Learn_web_development/Getting_started/Environment_setup/Code_editors) und öffnen Sie ihn in einem neuen Browsertab.

### Das `<form>`-Element

Wie bereits erwähnt, fungiert das {{htmlelement("form")}}-Element als äußere Hülle für das Formular und gruppiert alle darin enthaltenen Formularelemente. Wenn die `<button>`-Schaltfläche gedrückt wird, werden alle von den Formularelementen dargestellten Daten an den Server übermittelt. Das `<form>`-Element kann viele Attribute aufnehmen, aber die beiden wichtigsten, die wir hier aufgenommen haben, sind:

- `action`: Enthält einen Pfad zu der Seite, an die die übermittelten Formulardaten zur Verarbeitung gesendet werden sollen. Später, nachdem Sie das Formular übermittelt haben, sehen Sie `/submit_page` in der URL enthalten. Sie werden auch eine {{HTTPStatus("404")}} Fehlerantwort erhalten, da die Seite tatsächlich nicht existiert, aber das ist vorerst in Ordnung.
- `method`: Gibt die [Methode](/de/docs/Web/HTTP/Methods) an, die Sie für die Übertragung der Formulardaten an den Server verwenden möchten. Machen Sie sich darüber vorerst keine Sorgen; der `get`-Wert verursacht, dass die Daten als Parameter an das Ende der URL gehängt werden.

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Gehen Sie im separaten Tab zum Beispiel, versuchen Sie einen Namen "Bob" und eine E-Mail-Adresse "bob@bob.com" einzugeben.
>
> Die beiden oben genannten Attribute bewirken, dass die Formulardaten in einer URL wie der folgenden übermittelt werden:
>
> `/some/url/submit_page?name=Bob&email=bob%40bob.com`

#### Formulare strukturieren

Sie können beliebige HTML-Elemente innerhalb eines `<form>`-Elements einfügen, um die Formularelemente selbst zu strukturieren und Container bereitzustellen, die Sie mit CSS für das Styling usw. ansprechen können.

In unserem Beispiel haben wir ein [Überschriftselement](/de/docs/Web/HTML/Element/Heading_Elements) (`<h2>`) eingefügt, um den Zweck des Formulars zu beschreiben.

Wir haben auch jedes Eingabe-/Label-Paar und die Schaltfläche zur Übermittlung in ein separates {{htmlelement("p")}}-Element gesetzt, sodass jedes in einer eigenen Zeile angezeigt wird. Diese Elemente sind standardmäßig alle inline, was bedeutet, dass sie alle in einer Zeile sitzen würden, wenn wir dies nicht tun würden.

Dies ist ein häufiges Muster für die Strukturierung von Formularen. Einige verwenden `<p>`-Elemente, um ihre Formularelemente zu trennen, andere verwenden {{htmlelement("div")}}, {{htmlelement("section")}} oder sogar {{htmlelement("li")}}-Elemente. Es spielt keine große Rolle, solange die verwendeten Elemente semantisch sinnvoll sind. Zum Beispiel macht es Sinn, Formularelementgruppen in separate Absätze oder Abschnitte von Inhalten oder sogar Listenelemente zu unterteilen. Es würde weniger Sinn machen, sie als [Blockzitate](/de/docs/Web/HTML/Element/blockquote), [Nebensächlichkeiten](/de/docs/Web/HTML/Element/aside) oder [Adressen](/de/docs/Web/HTML/Element/address) darzustellen.

Es gibt ein spezielles Element zur Gruppierung von Formularelementen, das {{htmlelement("fieldset")}} genannt wird. Dies ist in bestimmten Situationen nützlich, wie bei komplexen Formularen und beim Gruppieren mehrerer Checkboxen und Radiobuttons. Wir werden uns später ein paar `<fieldset>`-Beispiele ansehen.

### `<input>`-Elemente

Die {{htmlelement("input")}}-Elemente stellen die verschiedenen Datenelemente dar, die in das Formular eingegeben werden. Schauen wir uns eines der Beispiele aus unserem einfachen Formular an:

```html
<input type="text" name="name" id="name" required />
```

Die Attribute sind wie folgt:

- `type`: Gibt den Typ des Formularelements an, das erstellt werden soll. Es gibt viele verschiedene Arten von Formularelementen, von einfachen Textfeldern verschiedener Typen bis hin zu Radiobuttons, Checkboxen und mehr. Der Typ `text` rendert ein einfaches Textfeld, das beliebige Werte akzeptieren kann.
- `name`: Gibt einen Namen für das Datenelement an. Wenn das Formular übermittelt wird, werden die Daten in Name/Wert-Paaren gesendet. In jedem Fall entspricht der Name diesem `name`-Attributwert und der Wert dem in das Textfeld eingegebenen Text.
- `id`: Gibt eine ID an, die verwendet werden kann, um das Element zu identifizieren. In diesem Fall wird es zur Zuordnung des Formularelements zu seinem `<label>` verwendet.
- `required`: Gibt an, dass ein Wert in das Formularelement eingegeben werden muss, bevor das Formular übermittelt werden kann. Dies sollte nur bei inputs gesetzt werden, die Sie benötigen, nicht bei optionalen Feldern.

Sie sollten wissen, dass einige Eingabetypen ihre Werte normalerweise nicht aus dem in einem Feld eingegebenen Text beziehen. Zum Beispiel rendert [`<input type="color">`](/de/docs/Web/HTML/Element/input/color) ein Farbauswahl-Widget, aus dem Sie eine Farbe auswählen, während [`<input type="radio">`](/de/docs/Web/HTML/Element/input/radio) ein Radiobutton-Steuerelement rendert, das ausgewählt oder nicht ausgewählt werden kann.

Im Fall von Radiobuttons müssen Sie in der Regel den Wert angeben, der übermittelt werden soll, wenn er ausgewählt wird, innerhalb eines spezifischen `value`-Attributs. Beachten Sie, dass Sie _können_ ein `value`-Attribut für Eingabetypen wie `text` und `color` angeben — die Wirkung ist, dass der Wert beim ersten Rendern in das Formularelement vorausgefüllt wird.

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> 1. Öffnen Sie das Beispiel erneut in einem separaten Tab und versuchen Sie, das Formular ohne Eingabe in eines der Felder zu übermitteln. Sie werden sehen, dass eine Fehlermeldung neben dem "Name"-Feld erscheint, die etwas wie "Bitte füllen Sie dieses Feld aus" sagt (sie variiert je nach Browser). Dies ist das `required`-Attribut — und die standardmäßige clientseitige Formularvalidierung des Browsers — in Aktion.
> 2. Versuchen Sie nun, das Formular mit einem gültigen Namen im ersten Feld, jedoch einem ungültigen Wert in das zweite Feld (etwas wie "aaaa" reicht) übermitteln. Diesmal wird eine Fehlermeldung neben dem "E-Mail"-Feld angezeigt, die so etwas wie "Bitte geben Sie eine E-Mail-Adresse ein" besagt.
> 3. Für diese Übung müssen Sie den Formularcode bearbeiten. Sie können dies tun, indem Sie das lokale Beispiel, das Sie in Ihrem Texteditor erstellt haben, öffnen, es dort bearbeiten und speichern. Versuchen Sie, das Formular zu bearbeiten, um `value="Bob"` zum ersten Eingabefeld hinzuzufügen. Wenn Sie den Code neu laden, sehen Sie, dass das erste Feld standardmäßig mit dem Wert "Bob" gefüllt ist.

#### Spezialisierte Textfeldeingaben

Die zweite Übung oben hebt einen interessanten Punkt hervor. Das zweite Eingabefeld erwartet speziell eine E-Mail-Adresse und validiert eingegebene Werte als solche. Wenn Sie sich den Formularcode erneut ansehen, sehen Sie warum — das zweite `<input>` hat einen `type` von `email`. Es gibt mehrere spezialisierte Textfeldeingabetypen, die für spezifische Datentypen gestaltet sind — [`<input type="number">`](/de/docs/Web/HTML/Element/input/number), [`<input type="password">`](/de/docs/Web/HTML/Element/input/password), [`<input type="tel">`](/de/docs/Web/HTML/Element/input/tel) usw.

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Folgen Sie einigen der obigen Links, um herauszufinden, wofür diese Eingabetypen verwendet werden. Schauen Sie sich unser [`<input>`](/de/docs/Web/HTML/Element/input)-Referenz an und sehen Sie, ob Sie noch weitere spezialisierte Textfeldeingabetypen finden können.

### `<label>`-Elemente

Wie oben erwähnt, bieten {{htmlelement("label")}}-Elemente identifizierende Labels, die mit Formularelementen verbunden sind und die Daten beschreiben, die eingegeben werden sollten. Sie können beliebigen Text in `<label>`-Elemente einfügen, aber sie sollten genau beschreiben, welche Daten das verbundene Formularelement erwartet. Die Zuordnung wird erstellt, indem Sie dem Formularelement ein `id`-Attribut geben und dann dem `<label>`-Element ein `for`-Attribut mit demselben Wert wie die `id`.

Zum Beispiel:

```html
<label for="name">Name (required):</label>
<input type="text" name="name" id="name" required />
```

`<label>`-Elemente sind aus mehreren Gründen wichtig, insbesondere da:

- Wenn sehbehinderte Benutzer einen Bildschirmleser verwenden, um sie beim Lesen und Interagieren mit Webseiteninhalten zu unterstützen, liest der Bildschirmleser den zugehörigen Labeltext vor, wenn jedes Steuerelement aufgerufen wird. Dies erleichtert den Benutzern das Verständnis der Inhalte, die in jedes Steuerelement eingegeben werden sollten.
- Sie ermöglichen es Ihnen, die Formularelemente durch Klicken auf ihre Labeltexte sowie auf die Steuerelemente selbst zu fokussieren. Dies ist besonders nützlich für Mobiltelefonnutzer, bei denen es schwierig sein kann, ein Formularelement mit dem Finger präzise auf einem Touchscreen auszuwählen. Die Vergrößerung des **Treffbereichs** ist in solchen Situationen nützlich.

#### Explizite und implizite Formularlabels

Der oben gesehene Formularlabel-Stil wird als **explizites Formularlabel** bezeichnet — die Zuordnung zwischen Steuerelement und Label wird explizit über die `id`- und `for`-Attribute hergestellt. Sie können auch ein **implizites Formularlabel** implementieren, indem Sie das Steuerelement innerhalb des Labels verschachteln, so:

```html
<label>
  Name (required):
  <input type="text" name="name" required />
</label>
```

Die Verschachtelung bewirkt eine implizite Zuordnung zwischen Steuerelement und Label, und Sie müssen die `id`- und `for`-Attribute nicht mehr verwenden.

Beide Ansätze sind in Ordnung, aber wir würden empfehlen, den expliziten Etikettierungsansatz zu verwenden. Denn die explizite Zuordnung ist in der Regel leichter zu identifizieren und zu verstehen, insbesondere wenn Ihr HTML-Code komplexer wird. Außerdem behandeln Bildschirmleser (und andere unterstützende Technologien) implizite Labels nicht immer korrekt.

Sie können mehr über Best Practices bei der Etikettierung von Formularen in [HTML Inputs and Labels: A Love Story](https://css-tricks.com/html-inputs-and-labels-a-love-story/), csstricks.com (2021) lesen.

### Das `<button>`-Element

Wenn ein {{htmlelement("button")}}-Element innerhalb eines `<form>`-Elements enthalten ist, besteht sein Standardverhalten darin, dass es das Formular übermittelt, sofern keine ungültigen Daten vorhanden sind, die durch die clientseitige Formularvalidierung blockiert werden. Dieses Verhalten haben Sie bereits beim Ausprobieren unseres Basisformularbeispiels oben gesehen.

Es gibt andere Schaltflächenverhalten, die über das `type`-Attribut des `<button>`-Elements angegeben werden können:

- `<button type="submit">` erklärt ausdrücklich, dass eine Schaltfläche wie eine Übermittlungsschaltfläche funktionieren soll. Sie müssen dies eigentlich nie angeben, es sei denn, Sie fügen andere Schaltflächen in Ihr `<form>` ein und möchten deutlich machen, welche die Übermittlungsschaltfläche ist. Dies wird sehr selten der Fall sein.
- `<button type="reset">` erstellt eine _Zurücksetzen-Schaltfläche_ — diese löscht sofort alle Daten aus dem Formular, sodass es in seinen Anfangszustand zurückgesetzt wird. **Verwenden Sie keine Zurücksetzen-Schaltflächen** — sie waren in den frühen Tagen des Webs beliebt, aber sie sind in der Regel nerviger als hilfreich. Die meisten Menschen haben schon einmal ein langes Formular ausgefüllt, nur um versehentlich auf die Zurücksetzen-Schaltfläche statt auf die Absenden-Schaltfläche zu klicken, wodurch sie von vorne anfangen müssen.
- `<button type="button">` erstellt eine Schaltfläche mit demselben Verhalten wie Schaltflächen, die außerhalb von `<form>`-Elementen angegeben sind. Wie wir zuvor gesehen haben, tun solche Schaltflächen standardmäßig gar nichts und benötigen JavaScript, um ihnen Funktionalität zu verleihen.

> [!NOTE]
> Sie können die oben genannten Schaltflächentypen auch mit einem `<input>`-Element erstellen, das dieselben `type`-Werte angegeben hat — [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit), [`<input type="reset">`](/de/docs/Web/HTML/Element/input/reset), und [`<input type="button">`](/de/docs/Web/HTML/Element/input/button). Diese haben jedoch viele Nachteile gegenüber ihren `<button>`-Gegenstücken. Sie sollten `<button>` verwenden.

## Ein Hinweis zur Barrierefreiheit

Wir haben bereits über die Bedeutung von Formularlabels für die Barrierefreiheit gesprochen, aber wir möchten auch einige Kommentare zur allgemeinen Wichtigkeit der Verwendung der richtigen semantischen Elemente zur Erstellung von Formularen (zum Beispiel verwenden Sie <%button>` zur Übermittlung Ihres Formulars und nicht ein <%div>`-Element, das programmiert ist, sich wie ein `<button>` zu verhalten.) Mit einer Kombination aus CSS und JavaScript ist es durchaus möglich, nahezu jedes HTML-Element so zu gestalten, dass es wie ein Formularelement aussieht und sich so verhält. Entwickler tun dies in der Regel aus Gestaltungsgründen — einige Formularelemente sind schwer zu gestalten.

Wenn Sie dies jedoch tun, machen Sie sich selbst und Ihren Benutzern das Leben schwerer. Der Browser bietet von Haus aus zahlreiche Funktionen für `<button>`- und Formularelemente, ohne dass JavaScript oder zusätzlicher Code erforderlich sind, um Formulare für alle Benutzer nutzbarer zu machen.

Beispielsweise:

- Semantische Elemente werden von unterstützenden Technologien wie Bildschirmlesern verstanden, die ihre Bedeutung an Benutzer vermitteln, die sie nicht sehen können.
- Formularelemente und Schaltknöpfe sind standardmäßig tastaturzugänglich. Im vorangegangenen Beispiel können Sie versuchen, mit der <kbd>Tab</kbd>-Taste und <kbd>Shift</kbd> + <kbd>Tab</kbd> (genannt "tabbing") vorwärts und rückwärts zwischen den Formularelementen zu wechseln.
- Beachten Sie auch, dass das Tabben zwischen den Formularelementen dazu führt, dass das fokussierte Element mit einem blauen Umriss hervorgehoben wird, was als **Fokus-Highlight** bezeichnet wird. Dies ist eine wichtige Funktion für Tastaturnutzer, um zu wissen, wo sie sich derzeit im Formular befinden.

Wenn Sie nicht die richtigen semantischen Elemente zur Implementierung Ihrer Formulare verwenden, müssen Sie diese gesamte Funktionalität neu implementieren, sonst verhalten sich Ihre Formularelemente nicht wie von den Benutzern erwartet, und scheinen daher kaputt zu sein. Das summiert sich alles.

## Andere Kontrolltypen

Es gibt viele andere Steuerelementtypen, die Sie verwenden können, um Daten in einem Formular zu sammeln. Schauen wir uns ein etwas komplexeres Beispiel an und dann werden wir es erkunden und erklären.

> [!NOTE]
> In diesem Beispiel gehen wir davon aus, dass der Benutzer bereits registriert und angemeldet ist, weshalb keine Angaben wie Name und E-Mail abgefragt werden.

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

Dies wird folgendermaßen gerendert:

{{EmbedLiveSample("form-other-controls", "100%", "500")}}

Wir empfehlen, dass Sie dieses Beispiel in einem separaten Browsertab öffnen, während Sie die nächsten Abschnitte durcharbeiten, in denen wir jeden Steuerelementtyp einzeln betrachten. Kopieren Sie dazu den Code in eine HTML-Datei mit Ihrem Code-Editor und öffnen Sie ihn in einem Browsertab.

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Bevor Sie weitermachen, spielen Sie mit den verschiedenen Formularelementen herum, wählen Sie einige Werte aus und versuchen Sie, das Formular zu übermitteln.

### Radiobuttons

Die "Art des Hotelzimmers wählen" Schaltflächen sind mit [`<input type="radio">`](/de/docs/Web/HTML/Element/input/radio)-Steuerelementen implementiert. Diese rendern als eine Reihe von Druckknopfelementen, bei denen jeweils nur eines ausgewählt werden kann - Sie können nicht mehr als eines gleichzeitig auswählen. Sie sind nach den Tasten auf altmodischen Radios benannt, bei denen man einen Knopf drückt und der zuvor ausgewählte wieder herausspringt.

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

`radio` Eingabetypen funktionieren größtenteils wie `text` Eingabetypen, aber mit einigen Unterschieden:

- Die `name`-Attribute für jeden Satz von Radiobuttons müssen denselben Wert enthalten, um sie als ein Set zu verknüpfen. Wenn sie unterschiedliche Werte enthalten, werden sie effektiv separate Sets sein, mit unterschiedlichen Werten bei der Übermittlung.
- Sie müssen ein `value`-Attribut angeben, das den zu übermittelnden Wert für jeden Radiobutton enthält. Der übermittelte Wert wird ein Name/Wert-Paar sein, aber der Name bleibt immer gleich, zum Beispiel `hotel=economy` oder `hotel=superior`.
- Das `<label>` für jeden Radiobutton sollte diese spezielle Wertauswahl beschreiben, anstatt die gesamte Auswahl, die Sie treffen. Die bevorzugte Art, eine Beschreibung der gesamten Wertauswahl bereitzustellen, ist, sie mit einem {{htmlelement("fieldset")}} zu umgeben, das ein {{htmlelement("legend")}}-Element als Kind aufnimmt, das die Beschreibung enthält.

> [!NOTE]
> Neben der Strukturierung und Beschriftung von Formularen haben Fieldsets weitere Verwendungen, wie zum Beispiel [Deaktivierung](#deaktivierung-von-formularsteuerelementen) eines gesamten Satzes von Steuerelementen als eine Einheit.

Es ist auch erwähnenswert, dass wir das `checked`-Attribut auf den ersten Radio Button angewendet haben — dies bewirkt, dass es ausgewählt wird, wenn die Seite zum ersten Mal geladen wird. So begründen wir die Markierung des Hotelzimmertyps als "erforderlich" — eine Option wird immer ausgewählt sein, und Sie können einen Radiobutton nicht abwählen, ohne einen anderen auszuwählen.

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Versuchen Sie, das `checked`-Attribut vom ersten Radiobutton zu entfernen, speichern Sie und laden Sie neu, um den Effekt zu sehen. Setzen Sie es zurück, bevor Sie weitergehen.

#### Deaktivierung von Formularsteuerelementen

Im Radiobutton-Beispiel werden Sie bemerken, dass der dritte Radiobutton das `disabled`-Attribut gesetzt hat. Dies bewirkt, dass das gerenderte Steuerelement ausgegraut und nicht auswählbar ist. Dies ist in vielen Situationen nützlich, in denen eine Option normalerweise verfügbar ist, nur im Moment nicht. Zum Beispiel könnte ein Produkt nicht vorrätig sein, oder wie in unserem Beispiel, sind Penthouse-Suiten ausgebucht!

Sie können das `disabled`-Attribut bei jedem Formularelement setzen, einschließlich `<button>`-Elementen. `<fieldset>`-Elemente können auch das `disabled`-Attribut annehmen — dies bewirkt, dass alle Formularelemente innerhalb des Fieldsets deaktiviert werden.

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Versuchen Sie, das `disabled`-Attribut auf die beiden `<fieldset>`-Elemente zu setzen, speichern Sie und laden Sie neu, um den Effekt zu sehen. Entfernen Sie sie wieder, bevor Sie weitergehen.

### Kontrollkästchen

Unsere "besuchten Kurse"-Selektoren sind mit [`<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox)-Steuerelementen implementiert. Diese rendern als eine Reihe von Ein/Aus-Zustand-Kästchen. Anders als Radiobuttons können Sie mehr als eines gleichzeitig auswählen.

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

Wie Sie an den Code-Schnipseln sehen können, werden Radiobuttons und Kontrollkästchen auf sehr ähnliche Weise implementiert (sie können auch `checked`-Attribute annehmen, um sie beim Laden der Seite vorausgewählt zu rendern). Sie verhalten sich auch ziemlich ähnlich, außer dass Radiobuttons Ihnen erlauben, null oder ein Einzelstück aus vielen auszuwählen, und Kontrollkästchen erlauben Ihnen, null oder mehr Elemente aus vielen auszuwählen.

Der Hauptunterschied (abgesehen vom `type`-Wert!) ist, dass jedes Kontrollkästchen einen unterschiedlichen `name`-Wert hat und sie im Allgemeinen keine `value`-Attribute haben. Vom Verhalten her bedeutet dies, dass sie verschiedene Datenwerte repräsentieren, während ein Radiobutton-Set nur einen repräsentiert. Bei der Übermittlung wird jeder Wert mit einem Wert von `on` übermittelt, wenn das Kontrollkästchen angehörter war — `yoga=on`, `balloon=on` usw.

> [!NOTE]
> Es ist möglich, den übermittelten Wert für ein Kontrollkästchen zu ändern, indem ihm ein `value`-Attribut gegeben wird, zum Beispiel: `<input type="checkbox" id="yoga" name="yoga" value="yes" />` würde dazu führen, dass `yoga=yes` übermittelt wird, wenn angehört. Allerdings gibt es nicht viel Grund, dies zu tun. Ein Kontrollkästchen wird entweder mit einem einzelnen Wert übermittelt, wenn es angehört ist, oder es wird überhaupt nicht übermittelt. Es spielt keine wirkliche Rolle, welcher Wert an den Server gesendet wird.

### Dropdown-Menüs

Dropdown-Menüs, wie die "Wie kommen Sie hierher"-Auswahlsteuerung in unserem Beispiel, werden nicht mit einem `<input>`-Typ, sondern mit den {{htmlelement("select")}}- und {{htmlelement("option")}}-Elementen implementiert:

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

Das `<select>`-Element umschließt alle verschiedenen Wertauswahlen. Es ist der Ort, an dem Sie das `id`-Attribut einstellen, das die Steuerung mit ihrem Label assoziiert, und das `name`-Attribut, das den Namen des Datenwertes, der übermittelt werden soll, festlegt.

Jeder mögliche Wert für das Datenwert wird durch ein `<option>`-Element dargestellt, das im `<select>`-Element verschachtelt ist. Jedes `<option>`-Element kann ein `value`-Attribut übernehmen, das den zu übermittelnden Wert angibt, wenn diese Option in der Dropdown-Liste ausgewählt wird. Wenn Sie keinen `value` spezifieren, wird der Text innerhalb der `<option></option>`-Tags als Wert verwendet.

> [!NOTE]
> Wenn Sie möchten, dass eine bestimmte Option beim Laden der Seite ausgewählt wird, können Sie das `selected`-Attribut zum relevanten `<option>`-Element hinzufügen.

### Mehrzeilige Texteingabefelder

Mehrzeilige Texteingabefelder werden mit {{htmlelement("textarea")}}-Elementen erstellt:

```html-nolint
<label for="comments">Any other comments:</label>
<textarea id="comments" name="comments" rows="5" cols="33"></textarea>
```

Sie verhalten sich in derselben Weise wie `<input type="text">`-Elemente, außer dass sie mehrere Textzeilen zulassen. Das `rows`-Attribut gibt die Anzahl der Zeilen an, die das Textfeld standardmäßig hoch sein wird, während das `cols`-Attribut die Anzahl der Spalten angibt, die das Textfeld standardmäßig breit sein wird. Wenn sie nicht angegeben sind, werden die Werte `cols="20"` und `rows="2"` verwendet.

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Die meisten Browser rend

> [

](
)en Textbereiche mit einem Ziehgriff in einer Ecke, der verwendet werden kann, um ihre Größe zu ändern. Versuchen Sie, diesen zu verwenden, um den Textbereich in unserem Demo zu ändern.

## Formularvalidierung

Früher haben wir uns einige der grundlegenden clientseitigen Formularvalidierung angesehen, die vom Browser bereitgestellt wird. Das `required`-Attribut wird verwendet, um anzugeben, dass ein Feld ausgefüllt werden muss, bevor das Formular übermittelt werden kann; es überprüft auch, dass der richtige Werttyp für bestimmte Werttypen wie E-Mail-Adressen, URLs, Zahlen usw. eingegeben wird. Die Validierung ist aus zwei Hauptgründen wichtig:

- Sicherstellen, dass Daten im richtigen Format übermittelt werden, sodass sie keine Fehler in Ihrer Anwendung verursachen.
- Sicherstellen, dass Daten keine Sicherheitsprobleme verursachen. Böse Menschen wissen, wie man Daten so formatiert, dass sie in unsicheren Anwendungen spezielle Formatierungen ausführen können, um Befehle auszuführen, Datenbanken zu löschen oder ein System zu übernehmen.

Formularvalidierung ist ein riesiges Thema, das den Rahmen dieses Artikels sprengt, daher werden wir es vorerst damit belassen. Denken Sie nur daran, dass es zwei Arten von Formularvalidierung gibt:

- Clientseitige Validierung, die im Browser stattfindet, mit einer Kombination aus Formularvalidierungsattributen (wie `required`) und JavaScript implementiert wird. Clientseitige Validierung ist nützlich, um Benutzern sofort Hinweise zu geben, wenn sie falsche Daten eingegeben haben, ist jedoch nicht so effektiv, um zu verhindern, dass schädliche Daten durchkommen. Es ist zu einfach, JavaScript auszuschalten oder den clientseitigen Code so zu ändern, dass die Validierung nicht mehr funktioniert.
- Serverseitige Validierung, die auf dem Server stattfindet, mit welcher Sprache der Server auch immer arbeitet. Schlecht formatierte Nachrichten können versehentlich oder absichtlich an einen Server gesendet werden. Die konventionelle Weisheit besagt, dass Sie sicherstellen, dass Ihr Server nichts vertraut, was ein Client sendet, um Fehler oder Sicherheitsprobleme zu vermeiden, die durch fehlerhafte Nachrichten verursacht werden. Serverseitige Validierung ist großartig, um böswillige Nachrichten zu stoppen, da es schwieriger ist, den Code zu verändern, der auf dem Server läuft. Serverseitige Validierung ist nicht so gut darin, Benutzern Hinweise auf falsche Daten zu geben, da die Daten an den Server gesendet werden müssen, um validiert zu werden, und das Ergebnis dann an den Client zurückgesendet werden muss, bevor der Benutzer benachrichtigt werden kann.

Kurz gesagt, entscheiden Sie sich nicht zwischen der Verwendung von entweder clientseitiger oder serverseitiger Validierung - Sie benötigen beides. Sie benötigen clientseitige Validierung, um Benutzern Feedback zu ihren Eingaben zu geben und serverseitige Validierung, um sicherzustellen, dass Nachrichten in einem Format vorliegen, das Ihr Server sicher verarbeiten kann. Wenn Sie anfangen möchten, mehr über Validierung zu lernen, ist ein guter Ausgangspunkt [Clientseitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation).

## Zusammenfassung

Das war's für den Moment. Es gibt noch viel mehr zu wissen über Formulare, aber für jetzt haben wir Ihnen genug Verständnis gegeben, um in Ihren Studien voranzukommen.

Als nächstes werden wir uns ansehen, wie man Probleme in Ihrem HTML-Code debuggt.

## Siehe auch

- [Web-Formulare — Arbeiten mit Benutzerdaten](/de/docs/Learn_web_development/Extensions/Forms)

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content/Debugging_HTML", "Learn_web_development/Core/Structuring_content")}}
