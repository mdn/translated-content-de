---
title: Formulare und Schaltflächen in HTML
short-title: Formulare und Schaltflächen
slug: Learn_web_development/Core/Structuring_content/HTML_forms
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content/Debugging_HTML", "Learn_web_development/Core/Structuring_content")}}

HTML-Formulare und -Schaltflächen sind leistungsstarke Werkzeuge zur Interaktion mit den Nutzern einer Website. Sie bieten den Nutzern am häufigsten Steuerelemente, um eine Benutzeroberfläche (UI) zu manipulieren oder Daten einzugeben, wenn dies erforderlich ist.

In diesem Artikel bieten wir eine Einführung in die Grundlagen von Formularen und Schaltflächen. Es gibt noch viel mehr zu wissen — viele Eingabetypparten und Formularfunktionen sind nicht erwähnt —, aber dieser Artikel gibt Ihnen eine solide Grundlage für die meisten Fälle. Sie können die fortgeschrittenen oder spezialisierten Verwendungen je nach Bedarf als Teil des ständigen Lernprozesses, den Sie während Ihrer Karriere durchlaufen werden, kennenlernen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende HTML-Kenntnisse, wie in
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        >
        behandelt. Textbasierte Semantik wie <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
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
          <li>Ein Verständnis dafür, dass Formulare und Schaltflächen neben Links die Hauptwerkzeuge für Nutzer sind, um mit einer Website zu interagieren.</li>
          <li>Verschiedene Schaltflächentypen.</li>
          <li>Gängige <code>&lt;input&gt;</code>-Typen.</li>
          <li>Übliche Attribute wie <code>name</code> und <code>value</code>.</li>
          <li>Das <code>&lt;form&gt;</code>-Element und die Grundlagen der Formularübermittlung.</li>
          <li>Formulare mit Labels und korrekter Semantik zugänglich machen.</li>
          <li>Andere Kontrolltypen: <code>&lt;textarea&gt;</code>, <code>&lt;select&gt;</code> und <code>&lt;option&gt;</code>.</li>
          <li>Grundlagen der clientseitigen Validierung.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Interaktion mit Nutzern

Bisher haben Sie im Kurs einige Möglichkeiten kennengelernt, wie Nutzer mit dem Web interagieren können:

- [Links](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links) können verwendet werden, um zu verschiedenen Abschnitten von Inhalten zu navigieren, entweder auf derselben Seite oder auf einer anderen Seite.
- [`<video>` und `<audio>`](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) Elemente verfügen in der Regel über Steuerelemente wie Wiedergabe/Pause, Vorspulen, Rückspulen usw., die es Nutzern ermöglichen, Medieninhalte nach Wunsch zu konsumieren.

Diese Funktionen ermöglichen jedoch meist nur einseitige Interaktionen, bei denen Nutzer Inhalte passiv konsumieren. Das ist in Ordnung, aber das Web ist eine wechselseitige Erfahrung. Websitenutzer setzen Präferenzen dafür, wie sie Inhalte und Dienstleistungen erleben möchten. Sie bestellen Taxis und bitten um Rückrufe. Sie geben Feedback und machen Beschwerden. Sie kaufen Produkte und lassen diese zu sich nach Hause liefern.

Um diese wechselseitige Erfahrung zu bieten, müssen Sie Schaltflächen und Formulare verwenden.

Schaltflächen werden normalerweise mit HTML-{{htmlelement("button")}}-Elementen erstellt (sie werden auch manchmal mit {{htmlelement("input")}}-Elementen erstellt, deren `type`-Attribute auf einen Wert wie `button` oder `submit` eingestellt sind). Diese Drückschalter sind universell — Sie können sie so programmieren, dass sie jede gewünschte Funktionalität auslösen, begrenzt nur durch Ihre Vorstellungskraft und Ihre Programmierfähigkeiten.

Formulare werden mit Elementen wie {{htmlelement("form")}}, {{htmlelement("label")}}, {{htmlelement("input")}} und {{htmlelement("select")}} erstellt. Formularelemente können verwendet werden, um komplexere Steuerelemente zu erstellen, als einfache Schaltflächen zulassen — zum Beispiel ein Dropdown-Menü mit mehreren Optionen, die es ermöglichen, zwischen verschiedenen Themen für ein Benutzerelement zu wählen.

Entscheidend ist jedoch, dass sie auch zur Erstellung von Formularen verwendet werden können, die Nutzer ausfüllen müssen, um Informationen an einen Webserver zu senden. Denken Sie an E-Commerce-Websites — wenn Sie ein Produkt suchen möchten, das Sie kaufen möchten, verwenden Sie ein Formular, um Suchbegriffe einzugeben. Wenn Sie für einige Artikel bezahlen und die Lieferung abschließen möchten, verwenden Sie ein Formular, um Ihre Postadresse einzugeben, und ein anderes Formular, um Ihre Kreditkartendaten einzugeben.

Wir konzentrieren uns hauptsächlich auf diese — traditionellere — Nutzung von Formularelementen in diesem Artikel. Beachten Sie, dass Schaltflächen auch häufig in Formularen verwendet werden, um die eingegebenen Daten an den Server zu senden.

Nachdem wir nun diese wichtige Theorie behandelt haben, lassen Sie uns den Code erkunden und sehen, wie Schaltflächen und Formulare implementiert werden.

## Schaltflächen

Wie oben angedeutet, haben Schaltflächen im Web einige Hauptanwendungen. Zunächst werden sie verwendet, um Funktionalitäten auszulösen, was nützlich ist, um UI-Kontrollen zu erstellen. Die einfachste Schaltfläche wird mit dem folgenden Code implementiert:

```html live-sample___basic-button
<button>Press me</button>
```

Dies wird wie folgt gerendert:

{{EmbedLiveSample("basic-button", "100%", "60")}}

Der Text, der zwischen den `<button></button>`-Tags erscheint, wird innerhalb der Schaltfläche gerendert, und der Browser gibt ihr ein einfaches Styling, sodass sie standardmäßig wie eine Schaltfläche aussieht und sich verhält. So weit, so gut. Es gibt jedoch ein Problem — unsere einsame Schaltfläche wird alleine nichts Nützliches tun. Um sie nützlich zu machen, müssen Sie sie in ein Formular einfügen (das wir später behandeln) oder etwas JavaScript hinzufügen.

Wenn Sie das folgende JavaScript auf die obige Schaltfläche anwenden:

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

Erhalten Sie die folgende Ausgabe — versuchen Sie, darauf zu klicken:

{{EmbedLiveSample("basic-button-with-js", "100%", "60")}}

Es wird nicht erwartet, dass Sie jetzt schon verstehen, wie das JavaScript funktioniert. Sie werden später im Kurs mehr darüber lernen.

Im nächsten Abschnitt sehen Sie eine Demonstration der zweiten Hauptverwendung von Schaltflächen — das Übermitteln von Formularen.

## Die Anatomie eines Formulars

Ein einfaches Formular enthält drei Dinge:

- Ein {{htmlelement("form")}}-Element, das den gesamten anderen Formularinhalt umschließt. Alle Formularelemente innerhalb der `<form></form>`-Tags sind Teil desselben Formulars, und ihre Daten werden beim Absenden des Formulars eingeschlossen.
- Ein oder mehrere Paare bestehend aus einem {{htmlelement("label")}}-Element und einem Formularelement (in der Regel ein {{htmlelement("input")}}-Element, aber es gibt auch andere Typen, zum Beispiel {{htmlelement("select")}}):
  - Das Formularelement ermöglicht es dem Nutzer, einige Daten auszuwählen oder einzugeben, die beim Absenden des Formulars an den Server gesendet werden.
  - Das `<label>`-Element bietet ein beschreibendes Etikett, das mit dem Formularelement verknüpft ist und die Daten beschreibt, die darin eingegeben werden sollen.
- Ein {{htmlelement("button")}}-Element, das zum Absenden des Formulars verwendet wird.

Schauen wir uns ein einfaches Beispiel an, das die obigen drei Punkte enthält. Dieses Formular könnte verwendet werden, um nach dem Namen und der E-Mail-Adresse eines Nutzers zu fragen, um ihn für einen Newsletter anzumelden (keine Sorge — es ist mit keinem Server verbunden, sodass aktuell nichts passieren wird).

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

Da MDN so funktioniert, können Sie Text in die Eingabefelder eingeben, aber Sie werden nicht sehen, dass das Formular richtig absendet, wenn Sie die Schaltfläche drücken. Um den nächsten Abschnitten zu folgen, kopieren Sie den obigen HTML-Code in eine neue HTML-Datei mit Ihrem [Code-Editor](/de/docs/Learn_web_development/Getting_started/Environment_setup/Code_editors) und öffnen Sie ihn in einem neuen Browsertab.

### Das `<form>`-Element

Wie bereits gesagt, fungiert das {{htmlelement("form")}}-Element als äußere Hülle für das Formular und gruppiert alle Formularelemente darin. Wenn der `<button>` gedrückt wird, werden alle durch die Formularelemente repräsentierten Daten an den Server übermittelt. Das `<form>`-Element kann viele Attribute haben, aber die beiden wichtigsten, die wir hier einbezogen haben, sind:

- `action`: Enthält einen Pfad zu der Seite, an die wir die übermittelten Formulardaten senden möchten, um sie zu verarbeiten. Später, nachdem Sie das Formular abgesendet haben, werden Sie `/submit_page` in der URL sehen. Es wird auch eine {{HTTPStatus("404")}}-Fehlerantwort geben, weil die Seite tatsächlich nicht existiert, aber das ist für jetzt in Ordnung.
- `method`: Gibt die Datenübertragungsmethode an, die Sie zum Senden der Formulardaten an den Server verwenden möchten. Machen Sie sich darüber vorerst keine Sorgen; der `get`-Wert führt dazu, dass die Daten als Parameter am Ende der URL gesendet werden.

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Gehen Sie zum Beispiel im separaten Tab, versuchen Sie, einen Namen wie "Bob" und eine E-Mail-Adresse wie "bob@bob.com" einzugeben.
>
> Die obigen zwei Attribute führen dazu, dass die Formulardaten in einer URL ähnlich der folgenden übermittelt werden:
>
> `/some/url/submit_page?name=Bob&email=bob%40bob.com`

#### Strukturierung von Formularen

Sie können beliebige HTML-Elemente innerhalb eines `<form>`-Elements einschließen, um die Formularelemente selbst zu strukturieren und Container bereitzustellen, die mit CSS für das Styling usw. gezielt angesprochen werden können.

In unserem Beispiel haben wir ein [Überschriftselement](/de/docs/Web/HTML/Element/Heading_Elements) (`<h2>`) eingefügt, um den Zweck des Formulars zu beschreiben.

Wir haben auch jedes Eingabe-Label-Paar und die Absende-Schaltfläche in ein separates {{htmlelement("p")}}-Element eingefügt, sodass jedes auf einer separaten Zeile erscheint. Diese Elemente sind standardmäßig inline, was bedeutet, dass sie, wenn wir das nicht tun würden, alle in derselben Zeile sitzen würden.

Dies ist ein häufiges Muster zur Strukturierung von Formularen. Einige Leute verwenden `<p>`-Elemente, um ihre Formularelemente zu trennen, andere verwenden {{htmlelement("div")}}, {{htmlelement("section")}} oder sogar {{htmlelement("li")}}-Elemente. Es spielt keine große Rolle, solange die verwendeten Elemente semantisch sinnvoll sind. Zum Beispiel macht es Sinn, Formelementgruppen in separate Absätze oder Inhaltsabschnitte oder sogar Listenelemente zu unterteilen. Es würde weniger Sinn machen, sie als [Blockzitate](/de/docs/Web/HTML/Element/blockquote), [Nebentexte](/de/docs/Web/HTML/Element/aside) oder [Adressen](/de/docs/Web/HTML/Element/address) darzustellen.

Es gibt ein spezialisiertes Element zum Gruppieren von Formelementen, das {{htmlelement("fieldset")}} genannt wird. Dies ist in bestimmten Situationen nützlich, wie zum Beispiel bei komplexen Formularen und beim Gruppieren mehrerer Checkboxen und Radiobuttons. Wir werden später einige `<fieldset>`-Beispiele ansehen.

### `<input>`-Elemente

Die {{htmlelement("input")}}-Elemente repräsentieren die verschiedenen in das Formular eingegebenen Daten. Sehen wir uns eines der Beispiele aus unserem einfachen Formular an:

```html
<input type="text" name="name" id="name" required />
```

Die Attribute sind wie folgt:

- `type`: Gibt den Typ des zu erstellenden Formularelements an. Es gibt viele verschiedene Typen von Formularelementen, von einfachen Textfeldern verschiedener Typen bis hin zu Radiobuttons, Checkboxen und mehr. Der Typ `text` rendert ein einfaches Textfeld, das jeden Wert akzeptieren kann.
- `name`: Gibt einen Namen für das Datenobjekt an. Wenn das Formular übermittelt wird, werden die Daten als Name/Wert-Paare gesendet. In jedem Fall ist der Name gleich dem Wert des `name`-Attributes, und der Wert ist gleich dem im Textfeld eingegebenen Text.
- `id`: Gibt eine ID an, die verwendet werden kann, um das Element zu identifizieren. In diesem Fall wird sie verwendet, um das Formularelement mit seinem `<label>` zu verknüpfen.
- `required`: Gibt an, dass in das Formularelement ein Wert eingegeben werden muss, bevor das Formular abgesendet werden kann. Dies sollte nur bei Eingaben gesetzt werden, die Sie erfordern, nicht bei optionalen Feldern.

Sie sollten sich bewusst sein, dass einige Eingabetypen ihre Werte normalerweise nicht aus dem in ein Feld eingegebenen Text erhalten. Beispielsweise rendert [`<input type="color">`](/de/docs/Web/HTML/Element/input/color) ein Farbauswahl-Widget, aus dem Sie eine Farbe auswählen, während [`<input type="radio">`](/de/docs/Web/HTML/Element/input/radio) ein Radiobutton-Steuerelement rendert, das ausgewählt werden kann oder nicht.

Im Fall von Radiobuttons müssen Sie in der Regel den Wert, der übermittelt würde, wenn er ausgewählt wird, in einem bestimmten `value`-Attribut angeben. Beachten Sie, dass Sie ein `value`-Attribut auch bei Eingabetypen wie `text` und `color` angeben _können_ — der Effekt ist, dass der Wert vorausgefüllt im Formularfeld erscheint, wenn es zum ersten Mal gerendert wird.

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> 1. Gehen Sie erneut zum Beispiel, das Sie in einem separaten Tab geladen haben, und versuchen Sie, das Formular abzusenden, ohne einen Wert in eines der Felder einzugeben. Sie sehen, dass eine Fehlermeldung neben dem "Name"-Feld erscheint, die etwas wie "Bitte füllen Sie dieses Feld aus" sagt (es variiert je nach Browser). Dies ist das `required`-Attribut — und die standardmäßige clientseitige Formularvalidierung des Browsers — in Aktion.
> 2. Versuchen Sie nun, das Formular abzusenden, nachdem Sie einen gültigen Namen im ersten Feld eingegeben haben, aber einen Wert, der keine gültige E-Mail-Adresse im zweiten Feld ist (etwas wie "aaaa" reicht aus). Dieses Mal erscheint eine Fehlermeldung neben dem "E-Mail"-Feld, die etwas wie "Bitte geben Sie eine E-Mail-Adresse ein" sagt.
> 3. Für diese Übung müssen Sie den Formularcode bearbeiten. Sie können dies tun, indem Sie das lokale Beispiel, das Sie in Ihrem Texteditor erstellt haben, öffnen, es dort bearbeiten und speichern. Versuchen Sie, das Formular so zu bearbeiten, dass `value="Bob"` auf dem ersten Eingabefeld enthalten ist. Wenn Sie den Code neu laden, sehen Sie, dass im ersten Feld standardmäßig der Wert "Bob" eingetragen ist.

#### Spezialisierte Texteingabefelder

Die zweite Übung oben wirft einen interessanten Punkt auf. Das zweite Eingabefeld erwartet speziell eine E-Mail-Adresse und validiert eingegebene Werte entsprechend. Wenn Sie sich den Formularcode erneut ansehen, sehen Sie, warum — das zweite `<input>` hat einen `type` von `email`. Es gibt mehrere spezialisierte Texteingabefeld-Typen, die für bestimmte Datentypen ausgelegt sind — [`<input type="number">`](/de/docs/Web/HTML/Element/input/number), [`<input type="password">`](/de/docs/Web/HTML/Element/input/password), [`<input type="tel">`](/de/docs/Web/HTML/Element/input/tel) usw.

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Folgen Sie einigen der obigen Links, um herauszufinden, wofür diese Eingabetypen verwendet werden. Schauen Sie sich unser [`<input>`](/de/docs/Web/HTML/Element/input)-Referenz an und sehen Sie, ob Sie noch weitere spezialisierte Texteingabefeld-Typen finden können.

### `<label>`-Elemente

Wie oben erwähnt, bieten {{htmlelement("label")}}-Elemente identifizierende Etiketten, die mit Formularelementen verknüpft sind und die Daten beschreiben, die darin eingegeben werden sollen. Sie können beliebigen Textinhalt in `<label>`-Elementen einfügen, sie sollten jedoch genau beschreiben, welche Daten das zugehörige Formularelement erwartet. Die Verknüpfung wird hergestellt, indem dem Formularelement ein `id`-Attribut zugewiesen wird und dann dem `<label>`-Element ein `for`-Attribut mit demselben Wert wie die `id` des Steuerelements.

Zum Beispiel:

```html
<label for="name">Name (required):</label>
<input type="text" name="name" id="name" required />
```

`<label>`-Elemente sind aus mehreren Gründen wichtig, insbesondere weil:

- Wenn sehbehinderte Nutzer einen Screenreader verwenden, um Webseitenelemente zu lesen und zu navigieren, wird der Screenreader den zugehörigen Labeltext lesen, wenn jedes Steuerelement aufgerufen wird. Dies erleichtert es Nutzern zu verstehen, welche Daten in jedes Steuerelement eingegeben werden sollen.
- Sie ermöglichen es Ihnen, die Formularelemente durch Klicken auf deren Labeltext sowie die Steuerelemente zu fokussieren. Dies ist besonders nützlich für Mobiltelefonbenutzer, bei denen es schwierig sein kann, ein Formularelement mit dem Finger auf einem Touchscreen genau auszuwählen. Die Vergrößerung des **Trefferbereichs** ist unter solchen Umständen nützlich.

#### Explizite und implizite Formularlabels

Der oben gezeigte Formularlabel-Stil wird als **explizites Formularlabel** bezeichnet — die Verknüpfung zwischen Kontrolle und Label wird explizit durch die `id`- und `for`-Attribute hergestellt. Sie können auch ein **implizites Formularlabel** durch Schachteln des Labels mit dem Kontrollelement erstellen, wie z. B. so:

```html
<label>
  Name (required):
  <input type="text" name="name" required />
</label>
```

Das Schachteln stellt eine implizite Verknüpfung zwischen Kontrolle und Label her, und Sie benötigen nicht mehr die `id`- und `for`-Attribute.

Beide Ansätze sind in Ordnung, aber wir würden empfehlen, den expliziten Kennzeichnungsansatz zu verwenden. Dies liegt daran, dass die explizite Verknüpfung in der Regel leichter zu identifizieren und zu verstehen ist, insbesondere wenn Ihr HTML-Code komplexer wird. Darüber hinaus behandeln Screenreader (und andere assistive Technologien) implizite Labels nicht immer korrekt.

In [HTML Inputs and Labels: A Love Story](https://css-tricks.com/html-inputs-and-labels-a-love-story/), csstricks.com (2021), können Sie mehr über Best Practices zur Formularbeschriftung nachlesen.

### Das `<button>`-Element

Wenn ein {{htmlelement("button")}}-Element innerhalb eines `<form>`-Elements enthalten ist, besteht sein Standardverhalten darin, dass es das Formular absendet, sofern keine ungültigen Daten vorhanden sind, die eine Absendung durch die clientseitige Formularvalidierung blockieren. Sie haben dieses Verhalten bereits gesehen, als Sie mit unserem einfachen Formularbeispiel gespielt haben.

Es gibt andere Schaltflächenverhalten, die über das `type`-Attribut des `<button>`-Elements angegeben werden können:

- `<button type="submit">` deklariert ausdrücklich, dass eine Schaltfläche wie eine Abschickschaltfläche funktionieren soll. Sie müssen dies nie wirklich deklarieren, es sei denn, Sie haben aus irgendeinem Grund andere Schaltflächen in Ihrem `<form>`-Element, und Sie möchten klarstellen, welche das submit-Button ist. Dies wird sehr selten sein.
- `<button type="reset">` erstellt eine _Reset-Schaltfläche_ — diese löscht sofort alle Daten aus dem Formular und setzt es auf den ursprünglichen Zustand zurück. **Verwenden Sie keine Reset-Schaltflächen** — sie waren in den frühen Tagen des Web beliebt, aber sie sind in der Regel lästiger als hilfreich. Die meisten Leute haben die Erfahrung gemacht, ein langes Formular auszufüllen, nur um versehentlich auf die Reset-Schaltfläche statt auf die Abschickschaltfläche zu klicken, was bedeutet, dass sie von vorne anfangen müssen.
- `<button type="button">` erstellt eine Schaltfläche mit demselben Verhalten wie Schaltflächen außerhalb von `<form>`-Elementen. Wie wir zuvor gesehen haben, tun sie standardmäßig absolut nichts, und es wird JavaScript benötigt, um ihnen Funktionalität zu verleihen.

> [!NOTE]
> Sie können die oben genannten Schaltflächentypen auch mit einem `<input>`-Element erstellen, indem Sie die gleichen `type`-Werte angeben — [`<input type="submit">`](/de/docs/Web/HTML/Element/input/submit), [`<input type="reset">`](/de/docs/Web/HTML/Element/input/reset) und [`<input type="button">`](/de/docs/Web/HTML/Element/input/button). Diese haben jedoch viele Nachteile gegenüber ihren `<button>`-Gegenstücken. Sie sollten `<button>` verwenden.

## Ein Anmerkung zur Barrierefreiheit

Wir haben bereits die Wichtigkeit von Formularlabels für die Barrierefreiheit besprochen, möchten hier aber noch einen Kommentar zur allgemeinen Wichtigkeit der Verwendung der richtigen semantischen Elemente zur Erstellung von Formularen einschließen (zum Beispiel verwenden Sie einen `<button>`, um Ihr Formular abzusenden, und nicht ein `<div>`, das so programmiert ist, dass es sich wie ein `<button>` verhält). Es ist durchaus möglich, eine Kombination aus CSS und JavaScript zu verwenden, um fast jedes HTML-Element wie ein Formularelement aussehen und verhalten zu lassen. Entwickler tun dies in der Regel aus Designgründen — einige Formularelemente sind schwer zu stylen.

Wenn Sie dies jedoch tun, machen Sie sich und Ihren Nutzern das Leben schwerer. Der Browser bietet mehrere `<button>`- und Formularelementeigenschaften standardmäßig, ohne dass JavaScript oder anderer zusätzlicher Code erforderlich ist, um Formulare für alle Benutzer benutzbarer zu machen.

Beispielsweise:

- Semantische Elemente werden von Technologien zur Unterstützung, wie z. B. Screenreadern, verstanden, die ihre Bedeutung den Nutzern vermitteln, die sie nicht sehen können.
- Formularelemente und Schaltflächen sind standardmäßig tastaturzugänglich. Im vorherigen Beispiel versuchen Sie, mit <kbd>Tab</kbd> und <kbd>Shift</kbd> + <kbd>Tab</kbd> (sogenanntes "Tabbing") vorwärts und rückwärts zwischen den Formularelementen zu wechseln.
- Beachten Sie auch, dass das Tabbing zwischen den Formularelementen dazu führt, dass das fokussierte Element mit einem blauen Umriss hervorgehoben wird (der sogenannte **Focus-Outline**). Dies ist eine wichtige Funktion für Tastaturbenutzer, um zu wissen, wo sie sich gerade im Formular befinden.

Wenn Sie die richtigen semantischen Elemente nicht verwenden, um Ihre Formulare zu implementieren, müssen Sie all diese Funktionalität neu implementieren, andernfalls verhalten sich Ihre Formularelemente nicht so, wie die Benutzer es erwarten, und wirken daher defekt. Alles summiert sich.

## Andere Steuerungstypen

Es gibt viele andere Steuerungstypen, die Sie verwenden können, um Daten in einem Formular zu sammeln. Sehen wir uns ein etwas komplexeres Beispiel an und dann werden wir es erkunden und erklären.

> [!NOTE]
> In diesem Beispiel nehmen wir an, dass der Nutzer bereits registriert und angemeldet ist, daher sind keine Angaben wie Name und E-Mail-Adresse erforderlich.

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

Wir empfehlen Ihnen, dieses Beispiel in einem separaten Browser-Tab zu öffnen, während Sie die nächsten Abschnitte durcharbeiten, in denen wir uns jeden Steuerungstyp nacheinander ansehen. Um dies zu erreichen, kopieren Sie den Code in eine HTML-Datei mit Ihrem Code-Editor und öffnen Sie ihn in einem Browser-Tab.

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Bevor Sie weitermachen, spielen Sie mit den verschiedenen Formularelementen, wählen Sie einige Werte aus und versuchen Sie, das Formular abzusenden.

### Radiobuttons

Die "Hotelzimmertypen auswählen" ist mit [`<input type="radio">`](/de/docs/Web/HTML/Element/input/radio)-Steuerelementen implementiert. Diese werden als Satz von Druckknopfsteuerungen gerendert, bei denen immer nur einer der Satz ausgewählt werden kann — Sie können nicht mehr als einen gleichzeitig auswählen. Sie sind nach den Tasten an altmodischen Radios benannt, bei denen Sie eine Taste drücken und die zuvor ausgewählte wieder herauskommt.

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

`radio`-Eingabetypen funktionieren im Wesentlichen genauso wie `text`-Eingabetypen, jedoch mit einigen Unterschieden:

- Die `name`-Attribute für jeden Satz von Radiobuttons müssen denselben Wert enthalten, um sie als ein Set miteinander zu verknüpfen. Wenn sie verschiedene Werte enthalten, sind sie effektiv separate Sets, mit verschiedenen Werten bei der Übermittlung.
- Sie müssen ein `value`-Attribut hinzufügen, das den Wert enthält, der für jeden Radiobutton übermittelt werden soll. Der übermittelte Wert wird ein Name/Wert-Paar sein, aber der Name wird immer derselbe sein, zum Beispiel `hotel=economy` oder `hotel=superior`.
- Das `<label>` für jeden Radiobutton sollte genau diesen Wert beschreiben, anstatt den Gesamtwert, den Sie auswählen. Der bevorzugte Weg, um eine Beschreibung des Gesamtwertes zu geben, ist, sie in eine {{htmlelement("fieldset")}} zu setzen, die ein {{htmlelement("legend")}}-Element als ein Kind enthält, das die Beschreibung enthält.

> [!NOTE]
> Neben der Strukturierung und Kennzeichnung von Formularen haben Fieldsets andere Verwendungen, z. B. [Deaktivierung](#deaktivierung_von_formularelementen) eines gesamten Steuerelements, als eine Einheit.

Es ist auch erwähnenswert, dass wir das `checked`-Attribut auf den ersten Radiobutton angewendet haben — dies bewirkt, dass es ausgewählt wird, wenn die Seite zuerst geladen wird. So rechtfertigen wir es, den Hotelzimmerwert als "erforderlich" zu markieren — eine Option wird immer ausgewählt, und Sie können einen Radiobutton nicht abwählen, ohne einen anderen zu wählen.

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Versuchen Sie, das `checked`-Attribut vom ersten Radiobutton zu entfernen, speichern Sie und laden Sie neu, um den Effekt zu sehen, den es hat. Setzen Sie es zurück, bevor Sie weitermachen.

#### Deaktivierung von Formularelementen

Im Radiobutton-Beispiel werden Sie bemerken, dass das dritte Radiobutton mit dem `disabled`-Attribut festgelegt ist. Dies bewirkt, dass das gerenderte Steuerelement ausgegraut und nicht auswählbar ist. Dies ist in vielen Situationen nützlich, in denen eine Option normalerweise verfügbar ist, nur gerade nicht. Zum Beispiel könnte ein Produkt nicht vorrätig sein oder im Fall unseres Beispiels sind alle Penthouses ausgebucht!

Sie können das `disabled`-Attribut auf jedes Formularelement setzen, einschließlich `<button>`-Elementen. `<fieldset>`-Elemente kann auch das `disabled`-Attribut akzeptieren — dies bewirkt, dass jedes Formularelement innerhalb des Feldsatzes deaktiviert wird.

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Versuchen Sie, das `disabled`-Attribut auf den beiden `<fieldset>`-Elementen zu setzen, speichern Sie und laden Sie neu, um den Effekt zu sehen, den es hat. Entfernen Sie diese erneut, bevor Sie weitermachen.

### Checkboxen

Unsere "Besuchen von Kursen"-Auswahl wird mit [`<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox)-Steuerelementen implementiert. Diese werden als Satz von An/Aus-Status-Checkboxen gerendert. Im Gegensatz zu Radiobuttons können Sie mehr als eine gleichzeitig auswählen.

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

Wie Sie aus den Codeausschnitten sehen können, werden Radiobuttons und Checkboxen auf sehr ähnliche Weise implementiert (sie können auch `checked`-Attribute nehmen, um sie als vorgewählt zu rendern, wenn die Seite geladen wird). Sie verhalten sich auch recht ähnlich, außer dass Radiobuttons es Ihnen ermöglichen, null oder eine von vielen auszuwählen, und Checkboxen es Ihnen ermöglichen, null oder mehr aus vielen auszuwählen.

Der Hauptunterschied (abgesehen vom `type`-Wert!) besteht darin, dass jede Checkbox einen anderen `name`-Wert hat und ihnen in der Regel keine `value`-Attribute zugewiesen werden. Verhaltensbezogen bedeutet dies, dass sie verschiedene Datenwerte repräsentieren, während ein Radiobutton-Set nur einen repräsentiert. Bei der Übermittlung wird jeder Wert mit einem Wert von `on` übermittelt, wenn die Checkbox aktiviert wurde — `yoga=on`, `balloon=on` usw.

> [!NOTE]
> Es ist möglich, den gesendeten Wert für eine Checkbox zu ändern, indem man ihm ein `value`-Attribut gibt, z. B.: `<input type="checkbox" id="yoga" name="yoga" value="yes" />` würde zu `yoga=yes` führen, wenn es aktiviert ist. Allerdings hat dies keinen großen Sinn. Eine Checkbox wird entweder mit einem einzigen Wert gesendet, wenn sie aktiviert ist, oder sie wird überhaupt nicht gesendet. Es spielt wirklich keine Rolle, welcher Wert an den Server gesendet wird.

### Dropdown-Menüs

Dropdown-Menüs, z. B. die "Wie kommen Sie hierher"-Auswahlsteuerung in unserem Beispiel, werden nicht mit einem `<input>`-Typ, sondern mit den {{htmlelement("select")}}- und {{htmlelement("option")}}-Elementen implementiert:

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

Das `<select>`-Element umschließt alle verschiedenen Wertoptionen. Es ist der Ort, an dem Sie das `id`-Attribut setzen, das das Steuerelement mit seinem Label assoziiert, und das `name`-Attribut, das den Namen des zu sendenden Datenobjekts festlegt.

Jeder mögliche Wert für das Datenobjekt wird durch ein `<option>`-Element dargestellt, das im `<select>`-Element verschachtelt ist. Jedes `<option>`-Element kann ein `value`-Attribut annehmen, das den Wert angibt, der übermittelt wird, wenn diese Option aus der Auswahlliste gewählt wird. Wenn Sie keinen `value` angeben, wird der Text innerhalb der `<option></option>`-Tags als Wert verwendet.

> [!NOTE]
> Wenn Sie möchten, dass eine bestimmte Option beim Laden der Seite ausgewählt wird, können Sie das `selected`-Attribut zum entsprechenden `<option>`-Element hinzufügen.

### Mehrzeilige Texteingabefelder

Mehrzeilige Texteingabefelder werden mit {{htmlelement("textarea")}}-Elementen erstellt:

```html-nolint
<label for="comments">Any other comments:</label>
<textarea id="comments" name="comments" rows="5" cols="33"></textarea>
```

Sie verhalten sich auf dieselbe Weise wie `<input type="text">`-Elemente, mit dem Unterschied, dass sie mehrere Textzeilen zulassen. Das `rows`-Attribut gibt die Anzahl der Zeilen an, die das Textfeld standardmäßig hoch ist, während das `cols`-Attribut die Anzahl der Spalten angibt, die das Textfeld standardmäßig breit ist. Wenn sie nicht angegeben sind, werden die Werte `cols="20"` und `rows="2"` verwendet.

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Die meisten Browser rendern Textfelder mit einem Ziehgriff in einer Ecke, mit dem die Größe geändert werden kann. Versuchen Sie, dieses zu verwenden, um das Textfeld in unserem Demo zu ändern.

## Formularvalidierung

Früher haben wir einige der grundlegenden clientseitigen Formularvalidierungen angesehen, die der Browser bereitstellt. Das `required`-Attribut wird verwendet, um anzugeben, dass ein Feld ausgefüllt werden muss, bevor das Formular übermittelt werden kann; es überprüft auch, dass der richtige Werttyp für bestimmte Typen wie E-Mail-Adressen, URLs, Zahlen usw. eingegeben wird. Die Validierung ist aus zwei Hauptgründen wichtig:

- Sicherstellen, dass Daten im richtigen Format übermittelt werden, damit sie in Ihrer Anwendung keine Fehler verursachen.
- Sicherstellen, dass Daten keine Sicherheitsprobleme verursachen. Böse Menschen wissen, wie man Daten speziell formatiert übermittelt, damit sie bei unsicheren Anwendungen Befehle zur Löschung von Datenbanken ausführen oder die Kontrolle über ein System erlangen können.

Formularvalidierung ist ein riesiges Thema, das für diesen Artikel nicht im Rahmen ist, daher belassen wir es nun hierbei. Beachten Sie nur, dass es zwei Arten von Formularvalidierung gibt:

- Clientseitige Validierung, die im Browser passiert, implementiert mit einer Kombination von Formularvalidierungsattributen (wie `required`) und JavaScript. Clientseitige Validierung ist nützlich, um Nutzern sofortige Hinweise zu geben, wenn sie falsche Daten eingegeben haben, aber sie ist nicht so effektiv bei der Verhinderung, dass bösartige Daten durchkommen. Es ist zu einfach, JavaScript zu deaktivieren oder clientseitigen Code so zu ändern, dass die Validierung nicht mehr funktioniert.
- Serverseitige Validierung, die auf dem Server passiert, implementiert mit der jeweiligen Sprache, die der Server verwendet. Nachricht in falschem Format können aus Versehen oder absichtlich an einen Server gesendet werden. Die konventionelle Weisheit besteht darin, sicherzustellen, dass Ihr Server nichts vertraut, was ein Client sendet, um Bugs oder Sicherheitsprobleme durch falsche Nachrichtenformate zu vermeiden. Serverseitige Validierung ist großartig zum Stoppen bösartiger Nachrichten, da es schwieriger ist, den Code zu manipulieren, der auf dem Server läuft. Serverseitige Validierung ist nicht so gut bei der Bereitstellung von Hinweisen für Benutzer über falsche Daten, weil die Daten zum Server gehen müssen, um validiert zu werden, und dann das Ergebnis zurück an den Client gesendet werden muss, bevor der Benutzer benachrichtigt werden kann.

Kurz gesagt, entscheiden Sie sich nicht zwischen der Verwendung entweder clientseitiger oder serverseitiger Validierung — Sie werden beides benötigen. Sie benötigen clientseitige Validierung, um den Nutzern Feedback zu ihrer Eingabe zu geben und serverseitige Validierung, um sicherzustellen, dass Nachrichten in einem Format übermittelt werden, das Ihr Server sicher handhaben kann. Wenn Sie beginnen möchten, mehr über Validierung zu lernen, ist ein guter Ausgangspunkt [Client-side form validation](/de/docs/Learn_web_development/Extensions/Forms/Form_validation).

## Zusammenfassung

Das war's für jetzt. Es gibt noch viel mehr über Formulare zu wissen, aber fürs Erste haben Sie genug Verständnis, um in Ihrem Studium voranzuschreiten.

Als nächstes werden wir uns ansehen, wie man Probleme in Ihrem HTML-Code debuggen kann.

## Siehe auch

- [Web forms — Working with user data](/de/docs/Learn_web_development/Extensions/Forms)

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content/Debugging_HTML", "Learn_web_development/Core/Structuring_content")}}
