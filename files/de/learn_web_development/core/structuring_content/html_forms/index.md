---
title: Formulare und Schaltflächen in HTML
short-title: Formulare und Schaltflächen
slug: Learn_web_development/Core/Structuring_content/HTML_forms
l10n:
  sourceCommit: 874ad29df9150037acb8a4a3e7550a302c90a080
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content/Debugging_HTML", "Learn_web_development/Core/Structuring_content")}}

HTML-Formulare und -Schaltflächen sind leistungsstarke Werkzeuge für die Interaktion mit den Benutzern einer Website. Am häufigsten bieten sie den Benutzern Steuerungen zur Manipulation einer Benutzeroberfläche (UI) oder zur Eingabe von Daten, wenn dies erforderlich ist.

In diesem Artikel bieten wir eine Einführung in die Grundlagen von Formularen und Schaltflächen. Es gibt noch viel mehr zu wissen — viele Eingabetypen und Formularfunktionen werden nicht erwähnt — aber dieser Artikel wird Ihnen eine solide Grundlage für die meisten Fälle geben. Sie können die erweiterten oder spezialisierten Verwendungszwecke nach Bedarf als Teil des kontinuierlichen Lernens, das Sie während Ihrer Karriere durchlaufen werden, erlernen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegendes HTML-Verständnis, wie es im
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        > behandelt wird. Textlevel-Semantik wie <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
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
          <li>Die Erkenntnis, dass Formulare und Schaltflächen die Hauptwerkzeuge sind, mit denen Benutzer mit einer Website interagieren, zusammen mit Links.</li>
          <li>Verschiedene Schaltflächentypen.</li>
          <li>Gängige <code>&lt;input&gt;</code>-Typen.</li>
          <li>Gängige Attribute wie <code>name</code> und <code>value</code>.</li>
          <li>Das <code>&lt;form&gt;</code>-Element und die Grundlagen der Formularübermittlung.</li>
          <li>Formulare zugänglich machen mit Labels und korrekter Semantik.</li>
          <li>Andere Steuerungstypen: <code>&lt;textarea&gt;</code>, <code>&lt;select&gt;</code> und <code>&lt;option&gt;</code>.</li>
          <li>Grundlagen der Client-seitigen Validierung.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Interaktion mit Benutzern

Im Verlauf des Kurses haben Sie bereits einige Möglichkeiten gesehen, wie Benutzer mit dem Web interagieren können:

- [Links](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links) können verwendet werden, um zu verschiedenen Inhaltsbereichen zu navigieren, entweder auf derselben Seite oder auf einer anderen Seite.
- [`<video>`- und `<audio>`](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) Elemente verfügen in der Regel über Steuerungen wie Wiedergabe/Pause, Vorlauf, Rücklauf usw., die es Benutzern ermöglichen, Mediendateien nach Belieben zu konsumieren.

Diese Funktionen neigen jedoch dazu, einseitige Interaktionen zu erleichtern, bei denen Benutzer Inhalte passiv konsumieren. Das ist in Ordnung, aber das Web ist ein zweiseitiges Erlebnis. Website-Benutzer legen fest, wie sie Inhalte und Dienste erleben möchten. Sie bestellen Taxis und bitten um Rückrufe. Sie geben Feedback und beschweren sich. Sie kaufen Produkte und lassen sie sich nach Hause liefern.

Um dieses zweiseitige Erlebnis zu bieten, müssen Sie Schaltflächen und Formulare verwenden.

Schaltflächen werden normalerweise mit HTML-{{htmlelement("button")}}-Elementen erstellt (sie werden auch manchmal mit {{htmlelement("input")}}-Elementen erstellt, deren `type`-Attribute auf einen Wert wie `button` oder `submit` gesetzt sind). Diese Druckschaltflächen sind universell einsetzbar — Sie können sie so einrichten, dass sie jede gewünschte Funktionalität auslösen, begrenzt nur durch Ihre Vorstellungskraft und Ihre Programmierfähigkeiten.

Formulare werden mit Elementen wie {{htmlelement("form")}}, {{htmlelement("label")}}, {{htmlelement("input")}} und {{htmlelement("select")}} erstellt. Formularelemente können komplexere Steuerungen erstellen, als einfache Schaltflächen erlauben — beispielsweise ein Dropdown-Menü mit mehreren Optionen, das Ihnen ermöglicht, zwischen verschiedenen Themen für ein Benutzerschnittstellenelement zu wählen.

Entscheidend ist jedoch, dass sie auch verwendet werden können, um Formulare zu erstellen, die Benutzer ausfüllen müssen, um Informationen an einen Website-Server zu übermitteln. Denken Sie an E-Commerce-Websites — wenn Sie nach einem Produkt suchen möchten, um es zu kaufen, verwenden Sie ein Formular, um Suchbegriffe einzugeben. Wenn Sie einige Artikel bezahlen und die Lieferung abschließen möchten, verwenden Sie ein Formular, um Ihre Postanschrift einzugeben, und ein weiteres Formular, um Ihre Kreditkartendaten einzugeben.

Wir konzentrieren uns hauptsächlich auf die — traditionellere — Verwendung von Formularelementen in diesem Artikel. Beachten Sie, dass Schaltflächen auch häufig in Formularen verwendet werden, um die eingegebenen Daten an den Server zu übermitteln.

Nachdem wir diese wichtige Theorie behandelt haben, lassen Sie uns mit der Erkundung des Codes fortfahren und sehen, wie Schaltflächen und Formulare implementiert werden.

## Schaltflächen

Wie oben angedeutet, haben Schaltflächen ein paar Hauptanwendungen im Web. Zunächst einmal werden sie verwendet, um Funktionalitäten auszulösen, was nützlich ist, wenn Sie UI-Steuerelemente erstellen. Die einfachste Schaltfläche wird mit folgendem Code implementiert:

```html live-sample___basic-button
<button>Press me</button>
```

Dies wird wie folgt gerendert:

{{EmbedLiveSample("basic-button", "100%", "60")}}

Der Text, der zwischen den `<button></button>`-Tags erscheint, wird innerhalb der Schaltfläche gerendert und erhält vom Browser ein grundlegendes Styling, sodass er standardmäßig wie eine Schaltfläche aussieht und sich verhält. So weit, so gut. Es gibt jedoch ein Problem hier — unsere einsame Schaltfläche wird alleine nichts Nützliches tun. Um sie nützlich zu machen, müssen Sie sie in ein Formular einfügen (worüber wir später sprechen werden) oder etwas JavaScript hinzufügen.

Wenn Sie beispielsweise das folgende JavaScript auf die obige Schaltfläche anwenden:

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

würde dies die folgende Ausgabe ergeben — versuchen Sie, darauf zu klicken:

{{EmbedLiveSample("basic-button-with-js", "100%", "60")}}

Es wird zunächst nicht erwartet, dass Sie verstehen, wie das JavaScript funktioniert. Sie werden später im Kurs mehr darüber lernen.

Im nächsten Abschnitt sehen Sie eine Demonstration des zweiten Haupteinsatzes von Schaltflächen — dem Übermitteln von Formularen.

## Die Anatomie eines Formulars

Ein einfaches Formular enthält drei Dinge:

- Ein {{htmlelement("form")}}-Element, das alle anderen Formularinhalte umschließt. Alle Formularelemente innerhalb der `<form></form>`-Tags gehören zum selben Formular, und ihre Daten werden bei der Übermittlung des Formulars eingeschlossen.
- Ein oder mehrere Paare, die jeweils aus einem {{htmlelement("label")}}-Element und einem Formularelement (gewöhnlich einem {{htmlelement("input")}}-Element, aber es gibt auch andere Typen, z. B. {{htmlelement("select")}}) bestehen:
  - Das Formularelement ermöglicht es dem Benutzer, Daten auszuwählen oder einzugeben, die beim Senden des Formulars an den Server gesendet werden.
  - Das `<label>`-Element bietet ein Identifikationsetikett, das mit dem Formularelement verknüpft ist und die Daten beschreibt, die darin eingegeben werden sollen.
- Ein {{htmlelement("button")}}-Element, das verwendet wird, um das Formular zu übermitteln.

Werfen wir einen Blick auf ein grundlegendes Beispiel, das die oben genannten drei Elemente enthält. Dieses Formular könnte verwendet werden, um den Namen und die E-Mail-Adresse eines Benutzers abzufragen, um ihn für einen Newsletter anzumelden (keine Sorge — es ist derzeit mit keinem Server verbunden, sodass es im Moment nichts tut).

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

Aufgrund der Funktionsweise von MDN können Sie Text in die Eingabefelder eingeben, aber Sie werden sehen, dass das Formular beim Drücken der Schaltfläche nicht ordnungsgemäß übermittelt wird. Um den nächsten Abschnitten zu folgen, kopieren Sie den obigen HTML-Code in eine neue HTML-Datei mit Ihrem [Code-Editor](/de/docs/Learn_web_development/Getting_started/Environment_setup/Code_editors) und öffnen Sie ihn in einem neuen Browser-Tab.

### Das `<form>`-Element

Wie bereits gesagt, fungiert das {{htmlelement("form")}}-Element als äußerer Wrapper für das Formular und gruppiert alle darin enthaltenen Formularelemente. Wenn die `<button>` gedrückt wird, werden alle durch die Formularelemente repräsentierten Daten an den Server übermittelt. Das `<form>`-Element kann viele Attribute annehmen, aber die beiden wichtigsten, die wir hier aufgenommen haben, sind wie folgt:

- `action`: Enthält einen Pfad zu der Seite, an die wir die übermittelten Formulardaten zur Verarbeitung senden möchten. Später, nachdem Sie das Formular übermittelt haben, wird `/submit_page` in der URL enthalten sein. Sie erhalten auch eine {{HTTPStatus("404")}} Fehlerantwort, da die Seite tatsächlich nicht existiert, aber das ist für jetzt in Ordnung.
- `method`: Gibt die Datenschutzübertragungsmethode [Method](/de/docs/Web/HTTP/Reference/Methods) an, die Sie verwenden möchten, um die Formulardaten an den Server zu senden. Machen Sie sich darüber im Moment keine großen Sorgen; der `get`-Wert bewirkt, dass die Daten als Parameter am Ende der URL gesendet werden.

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Gehen Sie zum Beispiel im separaten Tab, versuchen Sie, einen Namen "Bob" und eine E-Mail-Adresse "bob@bob.com" einzugeben.
>
> Die beiden oben genannten Attribute bewirken, dass die Formulardaten in einer URL ähnlich der folgenden übermittelt werden:
>
> `/some/url/submit_page?name=Bob&email=bob%40bob.com`

#### Strukturierung von Formularen

Sie können beliebige HTML-Elemente in einem `<form>`-Element einfügen, um die Formularelemente selbst zu strukturieren und Container bereitzustellen, die mit CSS für das Styling usw. gezielt werden können.

In unserem Beispiel haben wir ein [Überschriftselement](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) (`<h2>`) eingefügt, um den Zweck des Formulars zu beschreiben.

Wir haben auch jedes Eingabefeld/Label-Paar und die Schaltfläche zum Übermitteln in ein separates {{htmlelement("p")}} gesetzt, sodass jedes in einer separaten Zeile angezeigt wird. Diese Elemente sind standardmäßig Inline, was bedeutet, dass sie alle in einer einzigen Zeile erscheinen würden, wenn wir das nicht tun würden.

Dies ist ein verbreitetes Muster zur Strukturierung von Formularen. Einige Leute verwenden `<p>`-Elemente, um ihre Formularelemente zu trennen, einige verwenden {{htmlelement("div")}}, {{htmlelement("section")}}, oder sogar {{htmlelement("li")}}-Elemente. Es ist nicht besonders wichtig, solange die verwendeten Elemente semantisch sinnvoll sind. Beispielsweise macht es Sinn, Formularelementgruppen in separate Absätze oder Inhaltsabschnitte zu unterteilen oder sogar in Listenelemente. Es wäre weniger sinnvoll, sie als [Blockzitate](/de/docs/Web/HTML/Reference/Elements/blockquote), [Asides](/de/docs/Web/HTML/Reference/Elements/aside) oder [Adressen](/de/docs/Web/HTML/Reference/Elements/address) darzustellen.

Es gibt ein spezialisiertes Element zum Gruppieren von Formularelementen namens {{htmlelement("fieldset")}}. Dies ist in bestimmten Umständen nützlich, z. B. in komplexen Formularen und beim Zusammenfassen mehrerer Kontrollkästchen und Optionsschaltflächen. Wir werden uns später ein paar `<fieldset>`-Beispiele ansehen.

### `<input>`-Elemente

Die {{htmlelement("input")}}-Elemente stellen die verschiedenen im Formular eingegebenen Daten dar. Lassen Sie uns eines der Beispiele aus unserem einfachen Formular studieren:

```html
<input type="text" name="name" id="name" required />
```

Die Attribute sind wie folgt:

- `type`: Gibt den Typ der Formsteuerung an, die erstellt werden soll. Es gibt viele verschiedene Typen von Formsteuerelementen, von einfachen Textfeldern verschiedener Typen bis hin zu Optionsschaltflächen, Kontrollkästchen und mehr. Der Typ `text` rendert ein einfaches Textfeld, das jeden Wert akzeptieren kann.
- `name`: Bestimmt einen Namen für das Datenelement. Wenn das Formular übermittelt wird, werden die Daten in Name/Wert-Paaren gesendet. In jedem Fall entspricht der Name diesem `name`-Attributwert, und der Wert entspricht dem im Textfeld eingegebenen Text.
- `id`: Gibt eine ID an, die verwendet werden kann, um das Element zu identifizieren. In diesem Fall wird es verwendet, um die Formsteuerung mit ihrem `<label>` zu verknüpfen.
- `required`: Gibt an, dass ein Wert in das Formularelement eingegeben werden muss, bevor das Formular gesendet werden kann. Dies sollte nur bei Eingaben gesetzt werden, die erforderlich sind, nicht bei optionalen Feldern.

Sie sollten sich bewusst sein, dass einige Eingabetypen normalerweise ihre Werte nicht aus einem in ein Feld eingegebenen Text erhalten. Beispielsweise rendert [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color) ein Farbauswahl-Widget, aus dem Sie eine Farbe auswählen können, während [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio) eine Optionsschaltfläche rendert, die ausgewählt oder nicht ausgewählt werden kann.

Im Fall von Optionsschaltflächen müssen Sie im Allgemeinen den Wert, der übermittelt würde, wenn er ausgewählt ist, in einem spezifischen `value`-Attribut bereitstellen. Beachten Sie, dass Sie _einen Wert_ im `value`-Attribut für Eingabetypen wie `text` und `color` angeben können — der Effekt ist, dass der Wert beim ersten Rendern des Formularfelds vorausgefüllt wird.

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> 1. Gehen Sie erneut zum Beispiel, das Sie in einem separaten Tab geladen haben, und versuchen Sie, das Formular ohne eingetragenen Wert in einem der Felder zu übermitteln. Sie werden sehen, dass eine Fehlermeldung in der Nähe des "Name"-Feldes erscheint, die etwas wie "Bitte füllen Sie dieses Feld aus" (es wird je nach Browser unterschiedlich sein) besagt. Das ist das `required`-Attribut — und die standardmäßige clientseitige Formularvalidierung des Browsers — in Aktion.
> 2. Versuchen Sie nun, das Formular mit einem gültig eingetragenen Namen im ersten Feld, jedoch einem Wert, der keine gültige E-Mail-Adresse ist, im zweiten Feld (etwas wie "aaaa" funktioniert schon), zu übermitteln. Diesmal sehen Sie eine Fehlermeldung neben dem "Email"-Feld, die etwas wie "Bitte geben Sie eine E-Mail-Adresse ein" besagt.
> 3. Für diese Übung müssen Sie den Formularcode bearbeiten. Sie können dies tun, indem Sie das lokale Beispiel, das Sie in Ihrem Texteditor erstellt haben, öffnen, dort bearbeiten und speichern. Versuchen Sie, das Formular so zu ändern, dass `value="Bob"` im ersten Eingabefeld enthalten ist. Wenn Sie den Code neu laden, werden Sie sehen, dass das erste Feld einen Wert von "Bob" enthält, der standardmäßig eingegeben wird.

#### Spezialisierte Texteingabefelder

Die zweite Übung oben wirft einen interessanten Punkt auf. Das zweite Eingabefeld erwartet speziell eine E-Mail-Adresse und validiert eingegebene Werte entsprechend. Wenn Sie sich den Formularcode erneut ansehen, werden Sie sehen, warum — das zweite `<input>` hat einen `type` von `email`. Es gibt mehrere spezialisierte Texteingabetypen, die speziell für die Behandlung bestimmter Datentypen entwickelt wurden — [`<input type="number">`](/de/docs/Web/HTML/Reference/Elements/input/number), [`<input type="password">`](/de/docs/Web/HTML/Reference/Elements/input/password), [`<input type="tel">`](/de/docs/Web/HTML/Reference/Elements/input/tel) usw.

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Folgen Sie einigen der oben genannten Links, um herauszufinden, wofür diese Eingabetypen verwendet werden. Schauen Sie sich in unserem [`<input>`](/de/docs/Web/HTML/Reference/Elements/input) Referenzabschnitt um und sehen Sie, ob Sie noch mehr spezialisierte Texteingabetypen finden können.

### `<label>`-Elemente

Wie wir oben gesagt haben, bieten {{htmlelement("label")}}-Elemente beschreibende Bezeichnungen an, die mit Formkontrollen verknüpft sind, die die Daten beschreiben, die in sie eingegeben werden sollen. Sie können beliebige Textinhalte in `<label>`-Elementen haben, aber sie sollten genau beschreiben, welche Daten die zugehörige Formsteuerung erwartet. Die Zuordnung wird hergestellt, indem der Formsteuerung ein `id`-Attribut gegeben und dem `<label>`-Element ein `for`-Attribut mit demselben Wert wie die `id` der Steuerung zugewiesen wird.

Zum Beispiel:

```html
<label for="name">Name (required):</label>
<input type="text" name="name" id="name" required />
```

`<label>`-Elemente sind aus mehreren Gründen wichtig, insbesondere:

- Wenn sehbehinderte Benutzer einen Bildschirmleser verwenden, um Webseit-Inhalte zu lesen und mit ihnen zu interagieren, liest der Bildschirmleser den zugehörigen Labeltext vor, wenn jede Steuerung aufgerufen wird. Dies hilft den Benutzern, besser zu verstehen, welche Inhalte in jede Steuerung eingegeben werden sollen.
- Sie ermöglichen es Ihnen, die Formularelemente durch Klicken auf deren Labeltext sowie die Steuerungen selbst zu fokussieren. Dies ist besonders nützlich für Benutzer von Mobiltelefonen, bei denen es schwierig sein kann, ein Formelement mit dem Finger auf einem Touchscreen genau auszuwählen. Die Vergrößerung des **Treffbereichs** ist in solchen Fällen nützlich.

#### Explizite und implizite Formularlabels

Der oben gesehene Formularlabelstil wird als **explizites Formularlabel** bezeichnet — die Zuordnung zwischen Steuerung und Label wird explizit über die `id`- und `for`-Attribute hergestellt. Sie können auch ein **implizites Formularlabel** implementieren, indem Sie die Steuerung innerhalb des Labels verschachteln, wie dies:

```html
<label>
  Name (required):
  <input type="text" name="name" required />
</label>
```

Die Verschachtelung stellt eine implizite Zuordnung zwischen Steuerung und Label her, und Sie benötigen keine `id`- und `for`-Attribute mehr.

Beide Ansätze sind in Ordnung, aber wir würden empfehlen, den expliziten Zuordnungsansatz zu verwenden. Dies liegt daran, dass die explizite Zuordnung in der Regel einfacher zu erkennen und zu verstehen ist, insbesondere wenn Ihr HTML-Code komplexer wird. Darüber hinaus gehen Bildschirmleser (und andere assistive Technologien) nicht immer korrekt mit impliziten Labels um.

Sie können mehr über Best Practices zu Formularlabels in [HTML Inputs and Labels: A Love Story](https://css-tricks.com/html-inputs-and-labels-a-love-story/), csstricks.com (2021) erfahren.

### Das `<button>`-Element

Wenn ein {{htmlelement("button")}}-Element in ein `<form>`-Element eingefügt wird, ist sein Standardverhalten, dass es das Formular übermittelt, vorausgesetzt, es sind keine ungültigen Daten vorhanden, die die Übermittlung durch die clientseitige Formularvalidierung blockieren. Dieses Verhalten haben Sie bereits gesehen, als Sie mit unserem einfachen Formularbeispiel gespielt haben.

Es gibt andere Schaltflächenverhalten, die durch das `type`-Attribut des `<button>`-Elements angegeben werden können:

- `<button type="submit">` erklärt ausdrücklich, dass eine Schaltfläche wie eine Übermittlungsschaltfläche funktionieren sollte. Sie müssen dies wirklich nie deklarieren, es sei denn, Sie möchten aus irgendeinem Grund andere Schaltflächen in Ihrem `<form>` aufnehmen und klarstellen, welche die Übermittlungsschaltfläche sein soll. Das wird sehr selten sein.
- `<button type="reset">` erstellt eine _Zurücksetzen-Schaltfläche_ — diese löscht sofort alle Daten aus dem Formular und setzt es auf seinen Anfangszustand zurück. **Verwenden Sie keine Zurücksetzen-Schaltflächen** — sie waren in den frühen Tagen des Webs beliebt, sind aber in der Regel eher lästig als hilfreich. Die meisten Menschen haben erlebt, wie sie ein langes Formular ausgefüllt haben, nur um versehentlich die Zurücksetzen-Schaltfläche statt der Übermittlungsschaltfläche zu drücken, was bedeutet, dass sie wieder von vorne anfangen müssen.
- `<button type="button">` erstellt eine Schaltfläche mit dem gleichen Verhalten wie die außerhalb von `<form>`-Elementen angegebenen Schaltflächen. Wie wir bereits gesehen haben, tun diese standardmäßig absolut nichts, und JavaScript ist erforderlich, um ihnen Funktionalität zu geben.

> [!NOTE]
> Sie können die oben genannten Schaltflächentypen auch mit einem `<input>`-Element erstellen, indem Sie dieselben `type`-Werte angeben — [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit), [`<input type="reset">`](/de/docs/Web/HTML/Reference/Elements/input/reset) und [`<input type="button">`](/de/docs/Web/HTML/Reference/Elements/input/button). Diese haben jedoch viele Nachteile im Vergleich zu ihren `<button>`-Gegenstücken. Sie sollten `<button>` stattdessen verwenden.

## Eine Bemerkung zur Barrierefreiheit

Wir haben bereits über die Bedeutung von Formularlabels für die Barrierefreiheit gesprochen, aber wir wollten auch einige Kommentare zur allgemeinen Bedeutung der Verwendung der richtigen semantischen Elemente zur Erstellung von Formularen einfügen (z.B. verwenden Sie eine `<button>`, um Ihr Formular zu übermitteln und nicht ein `<div>`, das programmiert wurde, sich wie ein `<button>` zu verhalten.) Es ist vollkommen möglich, eine Kombination aus CSS und JavaScript zu verwenden, um so ziemlich jedes HTML-Element so aussehen und verhalten zu lassen, wie ein Formularelement. Entwickler tun dies normalerweise aus Designgründen — einige Formsteuerungen sind schwer zu stylen.

Wenn Sie dies jedoch tun, machen Sie sowohl Ihr als auch das Leben Ihrer Benutzer schwerer. Der Browser bietet mehrere `<button>`- und Formsteuerelementfunktionen standardmäßig, ohne dass JavaScript oder anderer zusätzlicher Code erforderlich sind, um Formulare für alle Benutzer benutzerfreundlicher zu machen.

Zum Beispiel:

- Semantische Elemente werden von unterstützenden Technologien wie Screenreadern verstanden, die ihre Bedeutung für Benutzer, die sie nicht sehen können, kommunizieren.
- Formularelemente und Schaltflächen sind standardmäßig tastaturbedienbar. Beim vorherigen Beispiel versuchen Sie, mit <kbd>Tab</kbd> und <kbd>Shift</kbd> + <kbd>Tab</kbd> (sogenanntes "Tabben") zwischen den Formelementen vorwärts und rückwärts zu navigieren.
- Beachten Sie außerdem, wie das Tabben zwischen den Formelementen dazu führt, dass das fokussierte Element mit einem blauen Umriss hervorgehoben wird (äußert sich als **Fokusumriss**). Dies ist eine wichtige Funktion für Tastaturbenutzer, um zu wissen, wo sie sich aktuell im Formular befinden.

Wenn Sie nicht die richtigen semantischen Elemente verwenden, um Ihre Formulare zu implementieren, müssen Sie all diese Funktionen neu implementieren, da Ihre Formularelemente sonst nicht so funktionieren, wie Benutzer es erwarten, und daher kaputt erscheinen. Es summiert sich alles.

## Andere Steuerungstypen

Es gibt viele andere Steuerungstypen, die Sie zur Datenerfassung in einem Formular verwenden können. Lassen Sie uns ein etwas komplexeres Beispiel ansehen, und dann werden wir es erkunden und erklären.

> [!NOTE]
> In diesem Beispiel gehen wir davon aus, dass der Benutzer bereits registriert und angemeldet ist, daher müssen keine Angaben wie Name und E-Mail gesammelt werden.

```html live-sample___form-other-controls
<form action="./payment_page" method="get">
  <h2>Register for the meetup</h2>
  <fieldset>
    <legend>Choose hotel room type (required):</legend>
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
```

Dies wird wie folgt gerendert:

{{EmbedLiveSample("form-other-controls", "100%", "500")}}

Wir empfehlen Ihnen, dieses Beispiel in einem separaten Browser-Tab zu öffnen, während Sie die nächsten Abschnitte durcharbeiten, in denen wir uns jede Steuerung in turn ansehen. Um dies zu erreichen, kopieren Sie den Code in eine HTML-Datei mit Ihrem Code-Editor und öffnen Sie ihn in einem Browser-Tab.

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Bevor Sie fortfahren, spielen Sie mit den verschiedenen Formsteuerelementen, wählen Sie einige Werte aus und versuchen Sie, das Formular zu übermitteln.

### Optionsschaltflächen

Die "Wählen Sie den Zimmertyp" Schaltflächen sind mit [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio) Steuerungen implementiert. Diese werden als eine Reihe von Druckschaltflächen gerendert, bei denen jeweils nur eine der Steuerelemente gleichzeitig ausgewählt werden kann — Sie können nicht mehrere gleichzeitig auswählen. Sie sind nach den Schaltflächen auf altmodischen Radios benannt, bei denen durch Drücken eines Knopfes der vorher ausgewählte ausgekoppelt wurde.

Unser Beispielcode sieht folgendermaßen aus:

```html
<fieldset>
  <legend>Choose hotel room type (required):</legend>
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

`radio`-Eingabetypen funktionieren größtenteils so wie `text`-Eingabetypen, jedoch mit einigen Unterschieden:

- Die `name`-Attribute für jede Gruppe von Optionsschaltflächen müssen denselben Wert enthalten, um sie als eine Gruppe zu verknüpfen. Wenn sie unterschiedliche Werte enthalten, sind sie effektiv separate Gruppen mit unterschiedlichen Werten beim Senden.
- Sie müssen ein `value`-Attribut einschließen, das den zu sendenden Wert für jede Optionsschaltfläche enthält. Der gesendete Wert wird ein Name/Wert-Paar sein, aber der Name wird immer derselbe sein, z.B. `hotel=economy` oder `hotel=superior`.
- Das `<label>` für jede Optionsschaltfläche sollte diese bestimmte Wertwahl beschreiben, statt des gesamten Wertes, den Sie auswählen. Die bevorzugte Methode, um eine Beschreibung der gesamten Wertwahl bereitzustellen, besteht darin, sie in ein {{htmlelement("fieldset")}} einzuschließen, das ein {{htmlelement("legend")}}-Element als Kind enthält, das die Beschreibung enthält.

> [!NOTE]
> Neben der Strukturierung und Beschriftung von Formularen gibt es andere Verwendungszwecke für Fieldsets, z.B. das Deaktivieren](#!disabling_form_controls) einer ganzen Gruppe von Steuerungen als eine Einheit.

Es ist auch erwähnenswert, dass wir das `checked`-Attribut auf die erste Optionsschaltfläche angewendet haben — dies bewirkt, dass sie ausgewählt wird, wenn die Seite zuerst geladen wird. So können wir rechtfertigen, den Wert des Hotelzimmertyps als "erforderlich" zu kennzeichnen — eine Option wird immer ausgewählt, und Sie können eine Optionsschaltfläche nicht abwählen, ohne eine andere auszuwählen.

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Versuchen Sie, das `checked`-Attribut von der ersten Optionsschaltfläche zu entfernen, speichern Sie und laden Sie neu, um den Effekt zu sehen, den es hat. Setzen Sie es zurück, bevor Sie fortfahren.

#### Formularsteuerungen deaktivieren

Im Optionsschaltflächen-Beispiel werden Sie feststellen, dass die dritte Optionsschaltfläche das Attribut `disabled` gesetzt hat. Dies führt dazu, dass die gerenderte Steuerung ausgegraut und nicht auswählbar ist. Dies ist in vielen Situationen nützlich, in denen eine Option normalerweise verfügbar ist, aber gerade nicht. Beispielsweise könnte ein Produkt nicht vorrätig sein oder in unserem Beispielsfall sind die Penthousesuiten alle ausgebucht!

Sie können das `disabled`-Attribut für jedes Formularelement setzen, einschließlich `<button>`-Elementen. `<fieldset>`-Elemente können auch das `disabled`-Attribut akzeptieren — dies führt dazu, dass jedes Formularelement innerhalb des Fieldsets deaktiviert wird.

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Versuchen Sie, das `disabled`-Attribut auf die beiden `<fieldset>`-Elemente zu setzen, speichern Sie, und laden Sie neu, um den Effekt zu sehen, den es hat. Entfernen Sie es wieder, bevor Sie weitermachen.

### Kontrollkästchen

Unsere "Klassen, die besucht werden sollen" Selektoren sind mit [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) Steuerungen implementiert. Diese werden als eine Reihe von An/Aus-Zustandskontrollkästchen gerendert. Im Gegensatz zu Optionsschaltflächen können Sie mehr als eines gleichzeitig auswählen.

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

Wie aus den Codeausschnitten ersichtlich, werden Optionsschaltflächen und Kontrollkästchen sehr ähnlich implementiert (sie können auch `checked` Attribute haben, um sie voreingestellt zu machen, wenn die Seite zuerst geladen wird). Sie verhalten sich auch ziemlich ähnlich, außer dass Optionsschaltflächen es Ihnen ermöglichen, null oder eine von vielen auszuwählen, und Kontrollkästchen es Ihnen ermöglichen, null oder mehrere aus vielen auszuwählen.

Der Hauptunterschied (abgesehen vom `type`-Wert!) besteht darin, dass jedes Kontrollkästchen einen anderen `name`-Wert hat und ihnen im Allgemeinen keine `value` Attribute gegeben werden. Verhaltensmäßig bedeutet dies, dass sie unterschiedliche Datenwerte darstellen, während eine Gruppe von Optionsschaltflächen nur einen darstellt. Beim Senden wird jeder Wert mit einem Wert von `on` übermittelt, wenn das Kontrollkästchen aktiviert wurde — `yoga=on`, `balloon=on` usw.

> [!NOTE]
> Es ist möglich, den Wert, der für ein Kontrollkästchen gesendet wird, zu ändern, indem ihm ein `value`-Attribut gegeben wird, z.B.: `<input type="checkbox" id="yoga" name="yoga" value="yes" />` würde `yoga=yes` senden, wenn es aktiviert ist. Es gibt jedoch nicht wirklich einen großen Nutzen darin. Ein Kontrollkästchen wird entweder mit einem einzelnen Wert gesendet, wenn es aktiviert ist, oder es wird überhaupt nicht gesendet. Es ist für den Server wirklich egal, welcher Wert gesendet wird.

### Dropdown-Menüs

Dropdown-Menüs, wie z.B. die Auswahl "Wie kommen Sie hierher" in unserem Beispiel, werden nicht mit einem `<input>` Typ implementiert, sondern mit den {{htmlelement("select")}} und {{htmlelement("option")}} Elementen:

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

Das `<select>`-Element umschließt alle verschiedenen Wertoptionen. Es ist der Ort, an dem Sie das `id`-Attribut setzen, das die Steuerung mit ihrem Label verknüpft, und das `name`-Attribut, das den Namen des zu sendenden Datenelements festlegt.

Jede mögliche Auswahl für das Datenelement wird durch ein `<option>`-Element dargestellt, das im `<select>`-Element verschachtelt ist. Jedes `<option>`-Element kann ein `value`-Attribut annehmen, das angibt, welcher Wert gesendet wird, wenn diese Option aus der Dropdown-Liste ausgewählt wird. Wenn Sie kein `value` angeben, wird der Text innerhalb der `<option></option>`-Tags als Wert verwendet.

> [!NOTE]
> Wenn Sie möchten, dass eine spezifische Option beim Laden der Seite ausgewählt wird, können Sie dem entsprechenden `<option>`-Element ein `selected`-Attribut hinzufügen.

### Mehrzeilige Texteingabefelder

Mehrzeilige Texteingabefelder werden durch die {{htmlelement("textarea")}} Elemente erstellt:

```html
<label for="comments">Any other comments:</label>
<textarea id="comments" name="comments" rows="5" cols="33"></textarea>
```

Sie verhalten sich auf die gleiche Weise wie `<input type="text">`-Elemente, mit dem Unterschied, dass sie die Eingabe mehrerer Textzeilen ermöglichen. Das `rows`-Attribut gibt die Anzahl der Zeilen an, die das Textfeld standardmäßig hoch ist, während das `cols`-Attribut die Anzahl der Spalten angibt, die das Textfeld standardmäßig breit ist. Wenn sie nicht angegeben sind, werden die Werte `cols="20"` und `rows="2"` verwendet.

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Die meisten Browser rendern Textbereiche mit einem Ziehgriff in einer Ecke, mit dem Sie die Größe ändern können. Versuchen Sie, diesen zu verwenden, um den Textbereich in unserem Beispiel zu ändern.

## Formularvalidierung

Früher haben wir einige der grundlegenden clientseitigen Formularvalidierungen gesehen, die der Browser bereitstellt. Das `required`-Attribut wird verwendet, um anzugeben, dass ein Feld ausgefüllt werden muss, bevor das Formular übermittelt werden kann; es prüft auch, ob der eingegebene Wert dem erwarteten Datentyp entspricht, wie z.B. E-Mail-Adressen, URLs, Zahlen usw. Die Validierung ist aus zwei Hauptgründen wichtig:

- Sicherstellen, dass Daten im richtigen Format gesendet werden, um Fehler in Ihrer Anwendung zu vermeiden.
- Sicherstellen, dass Daten keine Sicherheitsprobleme verursachen. Böse Menschen wissen, wie man Daten speziell formatiert, damit sie auf unsicheren Anwendungen Befehle ausführen können, um Datenbanken zu löschen oder ein System zu übernehmen.

Die Formularvalidierung ist ein riesiges Thema, das über den Rahmen dieses Artikels hinausgeht, deshalb werden wir es hier belassen. Beachten Sie jedoch, dass es zwei Arten der Formularvalidierung gibt:

- Client-seitige Validierung, die im Browser stattfindet, implementiert durch eine Kombination von Formularvalidierungsattributen (wie `required`) und JavaScript. Client-seitige Validierung ist nützlich, um Benutzern sofort Tipps zu geben, wenn sie falsche Daten eingegeben haben, ist jedoch nicht so effektiv, um bösartige Daten zu verhindern. Es ist zu einfach, JavaScript zu deaktivieren oder den Client-Code so zu ändern, dass die Validierung nicht mehr funktioniert.
- Server-seitige Validierung, die auf dem Server stattfindet, implementiert in der Programmiersprache, die der Server verwendet. Fehlerhafte Nachrichten können entweder versehentlich oder absichtlich gesendet werden. Die konventionelle Weisheit besagt, dass Sie sicherstellen sollten, dass Ihr Server nichts vertraut, was ein Client sendet, um Fehler oder Sicherheitsprobleme, die durch fehlerhafte Nachrichten verursacht werden, zu vermeiden. Server-seitige Validierung ist ideal, um bösartige Nachrichten zu stoppen, da es schwieriger ist, den auf dem Server laufenden Code zu manipulieren. Server-seitige Validierung gibt jedoch weniger Hinweise auf falsche Daten, da die Daten zum Server gesendet werden müssen, um validiert zu werden, und das Ergebnis dann an den Client zurückgesendet werden muss, bevor der Benutzer benachrichtigt werden kann.

Kurz gesagt, entscheiden Sie sich nicht zwischen der Verwendung von client-seitiger oder server-seitiger Validierung - Sie benötigen beides. Sie benötigen client-seitige Validierung, um Benutzern Feedback zu ihrer Eingabe zu geben, und server-seitige Validierung, um sicherzustellen, dass Nachrichten in einem Format sind, mit dem Ihr Server sicher umgehen kann. Wenn Sie mehr über Validierung lernen möchten, ist ein guter Start [Client-side form validation](/de/docs/Learn_web_development/Extensions/Forms/Form_validation).

## Zusammenfassung

Das wäre es fürs Erste. Es gibt noch viel mehr über Formulare zu wissen, aber vorerst haben wir Ihnen genügend Verständnis gegeben, um in Ihrem Studium weiterzukommen.

Als Nächstes schauen wir uns an, wie Sie Probleme in Ihrem HTML-Code debuggen können.

## Siehe auch

- [Webformulare — Arbeiten mit Benutzerdaten](/de/docs/Learn_web_development/Extensions/Forms)

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content/Debugging_HTML", "Learn_web_development/Core/Structuring_content")}}
