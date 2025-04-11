---
title: Formulare und Schaltflächen in HTML
short-title: Formulare und Schaltflächen
slug: Learn_web_development/Core/Structuring_content/HTML_forms
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content/Debugging_HTML", "Learn_web_development/Core/Structuring_content")}}

HTML-Formulare und -Schaltflächen sind leistungsstarke Werkzeuge für die Interaktion mit den Benutzern einer Website. Am häufigsten bieten sie den Benutzern Steuerungen zur Manipulation einer Benutzeroberfläche (UI) oder zur Eingabe von Daten bei Bedarf.

In diesem Artikel bieten wir eine Einführung in die Grundlagen von Formularen und Schaltflächen. Es gibt viel mehr zu wissen — viele Eingabetypen und Formularfunktionen werden nicht erwähnt — aber dieser Artikel wird Ihnen eine solide Grundlage für die meisten Fälle geben. Sie können die erweiterten oder spezialisierten Anwendungen bei Bedarf als Teil des ständigen Lernprozesses, den Sie im Laufe Ihrer Karriere durchlaufen werden, kennenlernen.

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
          >Strukturierendes HTML</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Erkennen, dass Formulare und Schaltflächen zusammen mit Links die Hauptinstrumente für die Interaktion der Benutzer mit einer Website sind.</li>
          <li>Verschiedene Schaltflächentypen.</li>
          <li>Häufige <code>&lt;input&gt;</code>-Typen.</li>
          <li>Gemeinsame Attribute wie <code>name</code> und <code>value</code>.</li>
          <li>Das <code>&lt;form&gt;</code>-Element und die Grundlagen der Formularübermittlung.</li>
          <li>Formulare durch Labels und korrekte Semantik zugänglich machen.</li>
          <li>Weitere Steuerungstypen: <code>&lt;textarea&gt;</code>, <code>&lt;select&gt;</code> und <code>&lt;option&gt;</code>.</li>
          <li>Grundlagen der clientseitigen Validierung.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Interaktion mit Benutzern

Bisher im Kurs haben Sie einige Möglichkeiten gesehen, wie Benutzer mit dem Web interagieren können:

- [Links](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links) können verwendet werden, um zu verschiedenen Inhaltsteilen zu navigieren, entweder auf derselben Seite oder auf einer anderen Seite.
- [`<video>` und `<audio>`](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) Elemente bieten in der Regel Steuerungen wie Abspielen/Pause, schneller Vorlauf, Rücklauf usw., die es Benutzern ermöglichen, Medieninhalte nach Wunsch zu konsumieren.

Diese Funktionen fördern jedoch meist einseitige Interaktionen, bei denen Benutzer Inhalte passiv konsumieren. Das ist in Ordnung, aber das Web ist ein zweiseitiges Erlebnis. Website-Benutzer legen fest, wie sie Inhalte und Dienstleistungen erfahren möchten. Sie bestellen Taxis und fordern Rückrufe an. Sie geben Feedback und beschweren sich. Sie kaufen Produkte und lassen sie sich nach Hause liefern.

Um dieses zweiseitige Erlebnis zu bieten, müssen Sie Schaltflächen und Formulare verwenden.

Schaltflächen werden in der Regel mit den HTML-Elementen {{htmlelement("button")}} erstellt (sie werden auch manchmal mit {{htmlelement("input")}}-Elementen erstellt, bei denen das Attribut `type` auf einen Wert wie `button` oder `submit` gesetzt ist). Diese Druckschalter sind vielseitig einsetzbar — Sie können sie so verdrahten, dass sie jede Funktionalität auslösen, die Sie möchten, begrenzt nur durch Ihre Vorstellungskraft und Ihre Programmierfähigkeiten.

Formulare werden mit Elementen wie {{htmlelement("form")}}, {{htmlelement("label")}}, {{htmlelement("input")}} und {{htmlelement("select")}} erstellt. Formularelemente können verwendet werden, um komplexere Steuerungen zu erstellen, als einfache Schaltflächen erlauben — zum Beispiel ein Dropdown-Menü, das mehrere Optionen enthält und Ihnen die Auswahl zwischen verschiedenen Themen für ein Benutzerelement ermöglicht.

Sie können jedoch auch verwendet werden, um Formulare zu erstellen, die von Benutzern ausgefüllt werden sollen, wenn sie Informationen an einen Website-Server übermitteln müssen. Denken Sie an E-Commerce-Seiten — wenn Sie nach einem Produkt suchen möchten, verwenden Sie ein Formular, um Suchbegriffe einzugeben. Wenn Sie Artikel bezahlen und die Lieferung abschließen möchten, verwenden Sie ein Formular, um Ihre Postadresse einzugeben, und ein weiteres Formular, um Ihre Kreditkartendaten einzugeben.

Wir konzentrieren uns in diesem Artikel hauptsächlich auf diese — traditionellere — Verwendung von Formularelementen. Beachten Sie, dass Schaltflächen auch häufig in Formularen verwendet werden, um die eingegebenen Daten an den Server zu übermitteln.

Mit dieser wichtigen Theorie im Hinterkopf, wenden wir uns nun dem Code zu und untersuchen, wie Schaltflächen und Formulare implementiert werden.

## Schaltflächen

Wie oben angedeutet, haben Schaltflächen im Web ein paar Hauptanwendungen. Zunächst einmal werden sie verwendet, um Funktionen auszulösen, was bei der Erstellung von UI-Steuerungen nützlich ist. Die einfachste Schaltfläche wird mit folgendem Code implementiert:

```html live-sample___basic-button
<button>Press me</button>
```

Das wird wie folgt gerendert:

{{EmbedLiveSample("basic-button", "100%", "60")}}

Der Text, der zwischen den `<button></button>`-Tags erscheint, wird innerhalb der Schaltfläche gerendert und erhält vom Browser eine grundlegende Gestaltung, damit es standardmäßig wie eine Schaltfläche aussieht und sich auch so verhält. Soweit, so gut. Es gibt jedoch ein Problem — unsere einsame Schaltfläche wird alleine nichts Nützliches tun. Um sie zu etwas Nützlichem zu machen, müssen Sie sie in ein Formular einfügen (was wir später besprechen werden) oder etwas JavaScript hinzufügen.

Wenn Sie beispielsweise das folgende JavaScript auf die obige Schaltfläche anwenden würden:

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

Sie werden nicht erwartet, das JavaScript aktuell zu verstehen. Sie werden später im Kurs mehr darüber erfahren.

Im nächsten Abschnitt sehen Sie eine Demonstration des zweiten Hauptanwendungsbereichs von Schaltflächen — das Einreichen von Formularen.

## Der Aufbau eines Formulars

Ein einfaches Formular enthält drei Dinge:

- Ein {{htmlelement("form")}}-Element, das den gesamten anderen Formularinhalt umschließt. Alle Formularsteuerelemente innerhalb der `<form></form>`-Tags gehören zu demselben Formular und ihre Daten werden übermittelt, wenn das Formular abgesendet wird.
- Ein oder mehrere Paare, die jeweils aus einem {{htmlelement("label")}}-Element und einem Formularsteuerelement bestehen (normalerweise ein {{htmlelement("input")}}-Element, es gibt aber auch andere Typen, zum Beispiel {{htmlelement("select")}}):
  - Das Formularsteuerelement erlaubt dem Benutzer, Daten auszuwählen oder einzugeben, die an den Server gesendet werden, wenn das Formular übermittelt wird.
  - Das `<label>`-Element bietet eine Bezeichnung, die mit dem Formularsteuerelement verknüpft ist und die Daten beschreibt, die darin eingegeben werden sollen.
- Ein {{htmlelement("button")}}-Element, das zum Übermitteln des Formulars verwendet wird.

Schauen wir uns ein einfaches Beispiel an, das die oben genannten drei Gegenstände enthält. Dieses Formular könnte verwendet werden, um nach dem Namen und der E-Mail-Adresse eines Benutzers zu fragen, um ihn für einen Newsletter anzumelden (keine Sorge — es ist nicht mit einem Server verbunden, es wird also momentan nichts tun).

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

Aufgrund der Funktionsweise von MDN können Sie Text in die Eingabefelder eingeben, aber Sie werden nicht sehen, dass das Formular richtig übermittelt wird, wenn Sie die Schaltfläche drücken. Um den folgenden Abschnitten zu folgen, kopieren Sie den obigen HTML-Code in eine neue HTML-Datei mit Ihrem [Code-Editor](/de/docs/Learn_web_development/Getting_started/Environment_setup/Code_editors) und öffnen Sie ihn in einem neuen Browser-Tab.

### Das `<form>`-Element

Wie bereits erwähnt, fungiert das {{htmlelement("form")}}-Element als äußerer Wrapper für das Formular und gruppiert alle Formularsteuerelemente darin zusammen. Wenn die `<button>`-Taste gedrückt wird, werden alle durch die Formularsteuerelemente dargestellten Daten an den Server übermittelt. Das `<form>`-Element kann viele Attribute enthalten, aber die beiden wichtigsten, die wir hier eingeschlossen haben, sind folgende:

- `action`: Beinhaltet einen Pfad zu der Seite, an die wir die übermittelten Formulardaten zur Verarbeitung senden möchten. Nach der Formularübermittlung sehen Sie `/submit_page` in der URL enthalten. Sie erhalten auch eine {{HTTPStatus("404")}}-Fehlermeldung, weil die Seite tatsächlich nicht existiert, aber das ist vorerst in Ordnung.
- `method`: Gibt die Datenübertragungsmethode an, die Sie zum Senden der Formulardaten an den Server verwenden möchten. Machen Sie sich darüber noch keine großen Gedanken; der Wert `get` führt dazu, dass die Daten als Parameter an das Ende der URL angehängt werden.

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Gehen Sie zu dem Beispiel im separaten Tab, versuchen Sie, den Namen "Bob" und die E-Mail-Adresse "bob@bob.com" einzugeben.
>
> Die obigen beiden Attribute bewirken, dass die Formulardaten in einer URL in etwa folgendermaßen übermittelt werden:
>
> `/some/url/submit_page?name=Bob&email=bob%40bob.com`

#### Strukturelle Formulare

Sie können beliebige HTML-Elemente in ein `<form>`-Element einfügen, um die Formularelemente selbst zu strukturieren und Container bereitzustellen, auf die mit CSS für die Gestaltung usw. gezielt werden kann.

In unserem Beispiel haben wir ein [Überschriftselement](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) (`<h2>`) eingefügt, um den Zweck des Formulars zu beschreiben.

Wir haben auch jedes Eingabe-/Label-Paar und die Absendeschaltfläche in ein separates {{htmlelement("p")}} eingefügt, sodass jeder in einer eigenen Zeile erscheint. Diese Elemente sind standardmäßig inline, was bedeutet, dass sie, wenn wir dies nicht tun, alle in der selben Linie sitzen würden.

Dies ist ein gängiges Muster für die Strukturierung von Formularen. Einige Leute verwenden `<p>`-Elemente, um ihre Formularelemente zu trennen, andere verwenden {{htmlelement("div")}}, {{htmlelement("section")}} oder sogar {{htmlelement("li")}} Elemente. Es spielt keine große Rolle, solange die verwendeten Elemente einen semantischen Sinn ergeben. Zum Beispiel ist es sinnvoll, Formular-Elementgruppen in separate Absätze oder Abschnitte von Inhalten oder sogar Listenpunkte zu unterteilen. Es wäre weniger sinnvoll, sie als [blockquotes](/de/docs/Web/HTML/Reference/Elements/blockquote), [asides](/de/docs/Web/HTML/Reference/Elements/aside) oder [Adressen](/de/docs/Web/HTML/Reference/Elements/address) darzustellen.

Es gibt ein spezialisiertes Element zum Gruppieren von Formularelementen namens {{htmlelement("fieldset")}}. Dies ist in bestimmten Umständen nützlich, etwa in komplexen Formularen und bei der Gruppierung mehrerer Kontrollkästchen und Optionsfelder. Wir schauen uns später ein paar `<fieldset>` Beispiele an.

### `<input>` Elemente

Die {{htmlelement("input")}} Elemente repräsentieren die verschiedenen Datenelemente, die ins Formular eingegeben werden. Lassen Sie uns ein Beispiel aus unserem Basisformular studieren:

```html
<input type="text" name="name" id="name" required />
```

Die Attribute sind wie folgt:

- `type`: Gibt den Typ der zu erstellenden Formularsteuerung an. Es gibt viele verschiedene Typen von Formularsteuerungen, von einfachen Texteinträgen unterschiedlicher Typen bis hin zu Optionsfeldern, Kontrollkästchen und mehr. Typ `text` rendert ein grundlegendes Textfeld, das jeden Wert akzeptieren kann.
- `name`: Gibt einen Namen für das Datenelement an. Wenn das Formular übermittelt wird, werden die Daten in Name/Wert-Paaren gesendet. In jedem Fall ist der Name gleich dem Wert des Attributs `name`, und der Wert entspricht dem in das Textfeld eingegebenen Text.
- `id`: Gibt eine ID an, die verwendet werden kann, um das Element zu identifizieren. In diesem Fall wird es verwendet, um die Formularsteuerung mit ihrem `<label>` zu verbinden.
- `required`: Gibt an, dass ein Wert in das Formularelement eingegeben werden muss, bevor das Formular übermittelt werden kann. Dies sollte nur bei den Eingaben gesetzt werden, die Sie benötigen, nicht bei optionalen Feldern.

Sie sollten wissen, dass einige Eingabetypen in der Regel ihre Werte nicht aus dem in ein Feld eingegebenen Text erhalten. Zum Beispiel rendert [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color) ein Farbauswahl-Widget, aus dem Sie eine Farbe auswählen, während [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio) ein Optionsfeld-Steuerelement rendert, das ausgewählt oder nicht ausgewählt werden kann.

Im Fall von Optionsfeldern müssen Sie im Allgemeinen den Wert angeben, der übermittelt werden würde, wenn er ausgewählt ist, innerhalb eines bestimmten `value`-Attributs. Beachten Sie, dass Sie _können_ ein `value`-Attribut bei Eingabetypen wie `text` und `color` angeben — der Effekt ist, dass der Wert ausgefüllt wird, wenn das Formularelement zum ersten Mal gerendert wird.

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> 1. Gehen Sie erneut zu dem Beispiel, das Sie in einem separaten Tab geladen haben, und versuchen Sie, das Formular ohne einen Wert in einem der beiden Felder eingeben zu übermitteln. Sie sehen eine Fehlermeldung neben dem "Name"-Feld auftauchen, die in etwa "Bitte füllen Sie dieses Feld aus" besagt (sie variiert je nach Browser). Dies ist das `required`-Attribut — und die standardmäßige clientseitige Formularvalidierung des Browsers — in Aktion.
> 2. Versuchen Sie nun, das Formular mit einem gültigen Namen im ersten Feld zu senden, aber einem Wert, der keine gültige E-Mail-Adresse im zweiten Feld ist (etwas wie "aaaa" wird genügen). Diese Mal sehen Sie eine Fehlermeldung neben dem "Email"-Feld auftauchen, die in etwa "Bitte geben Sie eine Email-Adresse ein" besagt.
> 3. Für diese Übung müssen Sie den Formularcode bearbeiten. Sie können dies tun, indem Sie das lokale Beispiel, das Sie in Ihrem Texteditor erstellt haben, öffnen, es dort bearbeiten und speichern. Versuchen Sie, das Formular so zu bearbeiten, dass `value="Bob"` im ersten Eingabefeld enthalten ist. Wenn Sie den Code neu laden, sehen Sie, dass das erste Feld standardmäßig den Wert "Bob" hat.

#### Spezialisierte Texteingabefelder

Die zweite Übung oben weist auf einen interessanten Punkt hin. Das zweite Eingabefeld erwartet speziell eine E-Mail-Adresse und validiert eingegebene Werte als solche. Wenn Sie den Formularcode erneut ansehen, werden Sie sehen, warum — das zweite `<input>` hat einen `type` von `email`. Es gibt mehrere spezialisierte Texteingabefeldtypen, die darauf ausgelegt sind, spezifische Datentypen zu verarbeiten — [`<input type="number">`](/de/docs/Web/HTML/Reference/Elements/input/number), [`<input type="password">`](/de/docs/Web/HTML/Reference/Elements/input/password), [`<input type="tel">`](/de/docs/Web/HTML/Reference/Elements/input/tel), etc.

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Folgen Sie einigen der oben genannten Links, um herauszufinden, wofür diese Eingabetypen verwendet werden. Schauen Sie sich unsere [`<input>`](/de/docs/Web/HTML/Reference/Elements/input) Referenz an und sehen Sie, ob Sie noch weitere spezialisierte Texteingabefeld-Typen finden können.

### `<label>` Elemente

Wie bereits oben erwähnt, bieten {{htmlelement("label")}}-Elemente identifizierende Labels, die mit Formularsteuerelementen verknüpft sind und die Daten beschreiben, die in sie eingegeben werden sollen. Sie können in `<label>`-Elemente beliebigen Textinhalt einfügen, aber dieser sollte genau beschreiben, welche Daten das zugeordnete Formularsteuerelement erwartet. Die Zuordnung wird erstellt, indem dem Formularsteuerelement ein `id`-Attribut zugewiesen wird, und dem `<label>`-Element ein `for`-Attribut mit demselben Wert wie die `id` des Steuerelements.

Zum Beispiel:

```html
<label for="name">Name (required):</label>
<input type="text" name="name" id="name" required />
```

`<label>`-Elemente sind aus mehreren Gründen wichtig, insbesondere:

- Wenn sehbehinderte Benutzer einen Screenreader verwenden, um ihnen zu helfen, Webseitenelemente zu lesen und damit zu interagieren, liest der Screenreader den zugehörigen `label`-Text vor, wenn jedes Steuerelement aufgerufen wird. Dies erleichtert es den Benutzern zu verstehen, welche Inhalte in jedes Steuerelement eingegeben werden sollen.
- Sie ermöglichen es Ihnen, Formularsteuerelemente durch Klicken auf ihren `label`-Text sowie die Steuerelemente selbst zu fokussieren. Dies ist besonders nützlich für mobile Benutzer, bei denen es schwierig sein kann, ein Formularsteuerelement mit dem Finger auf einem Touchscreen genau auszuwählen. Die Vergrößerung des **Treffbereichs** ist in solchen Situationen nützlich.

#### Explizite und implizite Formularlabels

Der oben gezeigte Formularlabel-Stil wird als **explizites Formularlabel** bezeichnet — die Zuordnung zwischen Steuerelement und Label wird explizit über die `id`- und `for`-Attribute hergestellt. Sie können auch ein **implizites Formularlabel** implementieren, indem Sie das Steuerelement in das Label einbetten, wie folgt:

```html
<label>
  Name (required):
  <input type="text" name="name" required />
</label>
```

Die Einbettung schafft eine implizite Zuordnung zwischen Steuerelement und Label, und Sie benötigen die `id`- und `for`-Attribute nicht mehr.

Jede Herangehensweise ist in Ordnung, aber wir würden empfehlen, den expliziten Beschriftungsansatz zu verwenden. Dies liegt daran, dass die explizite Zuordnung in der Regel leichter zu identifizieren und zu verstehen ist, insbesondere wenn Ihr HTML-Code komplexer wird. Zudem behandeln Screenreader (und andere unterstützende Technologien) nicht immer implizite Labels korrekt.

Sie können mehr über empfohlene Praktiken zur Formularbeschriftung in [HTML Inputs and Labels: A Love Story](https://css-tricks.com/html-inputs-and-labels-a-love-story/), csstricks.com (2021) lesen.

### Das `<button>`-Element

Wenn ein {{htmlelement("button")}}-Element in einem `<form>`-Element enthalten ist, wird standardmäßig, sofern keine ungültigen Daten vorliegen, die Übermittlung des Formulars ausgelöst durch [clientseitige Formularvalidierung]. Sie haben dieses Verhalten bereits gesehen, als Sie mit unserem einfachen Formularbeispiel oben gespielt haben.

Es gibt auch andere Schaltflächenverhalten, die über das Attribut `type` des `<button>`-Elements angegeben werden können:

- `<button type="submit">` erklärt explizit, dass eine Schaltfläche sich wie eine Submit-Schaltfläche verhalten soll. Sie müssen dies normalerweise nicht deklarieren, es sei denn, Sie haben aus irgendeinem Grund andere Schaltflächen in Ihrem `<form>` enthalten und möchten deutlich machen, welche Schaltfläche die Submit-Schaltfläche ist. Dies wird sehr selten der Fall sein.
- `<button type="reset">` erstellt eine _Reset-Schaltfläche_ — dadurch werden alle Daten im Formular sofort gelöscht und es wird auf seinen ursprünglichen Zustand zurückgesetzt. **Verwenden Sie keine Reset-Schaltflächen** — früher waren sie im frühen Web beliebt, aber sie sind normalerweise störender, als sie nützlich sind. Die meisten Menschen haben schon erlebt, dass sie ein langes Formular ausgefüllt haben, nur um versehentlich auf die Reset-Schaltfläche anstatt auf die Submit-Schaltfläche zu klicken, was bedeutet, dass sie von vorne anfangen müssen.
- `<button type="button">` erzeugt eine Schaltfläche mit demselben Verhalten wie Schaltflächen, die außerhalb von `<form>`-Elementen angegeben sind. Wie wir bereits gesehen haben, tun sie standardmäßig absolut nichts, und JavaScript wird benötigt, um ihnen Funktionalität zu geben.

> [!NOTE]
> Sie können die oben genannten Schaltfächentypen auch mit einem `<input>`-Element erstellen, in dem dieselben `type`-Werte angegeben sind — [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit), [`<input type="reset">`](/de/docs/Web/HTML/Reference/Elements/input/reset) und [`<input type="button">`](/de/docs/Web/HTML/Reference/Elements/input/button). Diese haben jedoch viele Nachteile im Vergleich zu ihren `<button>` Gegenstücken. Sie sollten daher `<button>` verwenden.

## Ein Exkurs zur Barrierefreiheit

Wir haben bereits über die Bedeutung von Formularbeschriftungen für die Zugänglichkeit gesprochen, aber wir wollten auch einige Kommentare zur allgemeinen Bedeutung der Verwendung der richtigen semantischen Elemente zum Erstellen von Formularen einfügen (zum Beispiel verwenden Sie eine `<button>`, um Ihr Formular zu übermitteln, und nicht ein `<div>`, das so programmiert ist, dass es sich wie eine `<button>` verhält). Es ist durchaus möglich, eine Kombination aus CSS und JavaScript zu verwenden, um nahezu jedes HTML-Element so aussehen und sich so verhalten zu lassen wie ein Formularelement. Entwickler tun dies normalerweise aus Designgründen — einige Formularelemente sind schwer zu gestalten.

Wenn Sie dies jedoch tun, erschweren Sie sich und Ihren Benutzern das Leben. Der Browser bietet mehrere `<button>`- und Formularelementfunktionen standardmäßig an, ohne dass JavaScript oder anderer zusätzlicher Code erforderlich ist, um Formulare für alle Benutzer benutzerfreundlicher zu machen.

Beispiele:

- Semantische Elemente werden von unterstützenden Technologien wie Screenreadern verstanden, die ihre Bedeutung Benutzern kommunizieren, die sie nicht sehen können.
- Formularsteuerungen und Schaltflächen sind von Haus aus tastaturzugänglich. Im vorherigen Beispiel versuchen Sie, zwischen den Formularelementen mit <kbd>Tab</kbd> und <kbd>Shift</kbd> + <kbd>Tab</kbd> zu navigieren (dies wird als "Tabben" bezeichnet).
- Beachten Sie auch, wie das "Tabben" zwischen den Formularelementen dazu führt, dass das fokussierte Element durch einen blauen Umriss hervorgehoben wird (dies wird als **Fokusumriss** bezeichnet). Dies ist ein wichtiges Merkmal für Tastaturbenutzer, um zu wissen, wo sie sich derzeit im Formular befinden.

Wenn Sie die richtigen semantischen Elemente nicht verwenden, um Ihre Formulare zu implementieren, müssen Sie all diese Funktionalitäten neu implementieren, andernfalls werden sich Ihre Formularelemente nicht so verhalten, wie es Benutzer erwarten, und erscheinen daher "kaputt". Alles summiert sich.

## Andere Steuerelementtypen

Es gibt viele weitere Steuerungstypen, die Sie verwenden können, um Daten in einem Formular zu sammeln. Schauen wir uns ein etwas komplexeres Beispiel an, und dann werden wir es erkunden und erklären.

> [!NOTE]
> In diesem Beispiel gehen wir davon aus, dass der Benutzer bereits registriert ist und eingeloggt ist, wodurch keine Details wie Name und E-Mail-Adresse gesammelt werden müssen.

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

Wir empfehlen, dieses Beispiel in einem separaten Browser-Tab zu öffnen, während Sie die nächsten Abschnitte durchgehen, in denen wir uns jeden Steuerungstyp der Reihe nach anschauen. Um dies zu erreichen, kopieren Sie den Code in eine HTML-Datei mithilfe Ihres Code-Editors und öffnen Sie ihn in einem Browser-Tab.

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Bevor Sie weitermachen, spielen Sie mit den verschiedenen Formularelementen, wählen Sie einige Werte aus und versuchen Sie, das Formular abzusenden.

### Optionsfelder

Die Schaltflächen „Hotelzimmer-Typ auswählen“ werden mit [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio) Steuerungen implementiert. Diese Rendieren als eine Gruppe von Druckschalter-Steuerungen, bei denen nur eine der Gruppe zu einem Zeitpunkt ausgewählt werden kann — Sie können nicht mehr als eine auf einmal auswählen. Sie sind nach den Tasten an altmodischen Radios benannt, bei denen Sie eine gedrückt halten und die vorher ausgewählte springt wieder heraus.

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

`radio` Eingabetypen funktionieren grundsätzlich wie `text` Eingabetypen, jedoch mit einigen Unterschieden:

- Die `name` Attribute für jede Gruppe von Optionsbuttons müssen denselben Wert enthalten, um sie als eine Gruppe zu verknüpfen. Wenn sie unterschiedliche Werte enthalten, werden sie effektiv separate Gruppen mit unterschiedlichen Werten bei der Übermittlung sein.
- Sie müssen ein `value`-Attribut angeben, das den zu übermittelnden Wert für jeden Optionsbutton enthält. Der übermittelte Wert wird ein Name/Wert-Paar sein, aber der Name wird immer derselbe sein, z.B. `hotel=economy` oder `hotel=superior`.
- Das `<label>` für jedes Optionsfeld sollte diese spezielle Wertauswahl beschreiben, anstatt den Gesamtwert, den Sie auswählen. Die bevorzugte Methode, um eine Beschreibung der Gesamtwertwahl bereitzustellen, besteht darin, sie in ein {{htmlelement("fieldset")}} zu legen, das ein {{htmlelement("legend")}}-Element als Kind übernimmt, das die Beschreibung enthält.

> [!NOTE]
> Neben der Strukturierung und Beschriftung von Formularen haben Fieldsets andere Verwendungen, wie beispielsweise das [Deaktivieren](#deaktivieren_von_formularsteuerungen) eines gesamten Steuerungssatzes als eine Einheit.

Es ist ebenfalls erwähnenswert, dass wir das `checked`-Attribut auf das erste Optionsfeld angewendet haben — dies bewirkt, dass es ausgewählt ist, wenn die Seite zum ersten Mal geladen wird. So wird der Wert „Hotelzimmer-Typ“ als „erforderlich“ markiert — eine Option wird immer ausgewählt sein, und Sie können ein Optionsfeld nicht deaktivieren, ohne ein anderes auszuwählen.

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Versuchen Sie, das `checked`-Attribut vom ersten Optionsbutton zu entfernen, speichern Sie es, dann laden Sie es neu, um den Effekt zu sehen, den es hat. Setzen Sie es vor dem Weitergehen zurück.

#### Deaktivieren von Formularsteuerungen

Im Beispiel mit den Optionsfeldern werden Sie bemerken, dass das dritte Optionsfeld das `disabled`-Attribut gesetzt hat. Dies bewirkt, dass das gerenderte Steuerelement ausgegraut und nicht auswählbar ist. Dies ist in vielen Situationen nützlich, in denen eine Option normalerweise verfügbar ist, nur eben derzeit nicht. Zum Beispiel könnte ein Produkt nicht auf Lager sein, oder wie in unserem Beispiel der Fall, sind Penthouses alle ausgebucht!

Sie können das `disabled`-Attribut auf jedes Formularelement setzen, einschließlich `<button>`-Elemente. `<fieldset>`-Elemente können das `disabled`-Attribut ebenfalls akzeptieren — dies bewirkt, dass jedes Formularelement innerhalb des Fieldsets deaktiviert wird.

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Versuchen Sie, das `disabled`-Attribut auf die beiden `<fieldset>`-Elemente zu setzen, speichern Sie es, dann laden Sie es neu, um den Effekt zu sehen, den es hat. Entfernen Sie sie wieder, bevor Sie weitermachen.

### Kontrollkästchen

Unsere „Kurse, an denen teilzunehmen ist“-Auswähler werden mit [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) Steuerungen implementiert. Diese werden als eine Gruppe von Ein-/Aus-Status-Kontrollkästchen gerendert. Im Gegensatz zu Optionsfeldern können Sie mehr als eines auf einmal auswählen.

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

Wie Sie aus den Code-Snippets sehen können, werden Optionsfelder und Kontrollkästchen auf sehr ähnliche Weise implementiert (sie können auch `checked`-Attribute übernehmen, um sie vorgeselektiert zu rendern, wenn die Seite geladen wird). Sie verhalten sich auch in ziemlich ähnlicher Weise, außer dass Optionsfelder es Ihnen ermöglichen, null oder ein Element aus vielen zu wählen, und Kontrollkästchen ermöglichen es Ihnen, null oder mehr Elemente aus vielen auszuwählen.

Der Hauptunterschied (abgesehen vom `type`-Wert!) ist, dass jedes Kontrollkästchen einen anderen `name`-Wert hat und ihnen im Allgemeinen keine `value`-Attribute gegeben werden. Verhaltensmäßig bedeutet dies, dass sie unterschiedliche Datenwerte darstellen, während eine Optionsfeld-Gruppe nur einen darstellt. Bei der Übermittlung wird jeder Wert mit einem Wert von `on` übermittelt, wenn das Kontrollkästchen aktiviert war — `yoga=on`, `ballon=on`, usw.

> [!NOTE]
> Es ist möglich, den übermittelten Wert für ein Kontrollkästchen durch Angabe eines `value`-Attributs zu ändern, zum Beispiel: `<input type="checkbox" id="yoga" name="yoga" value="yes" />` würde zu `yoga=yes` führen, wenn es aktiviert ist. Es hat jedoch nicht viel Nutzen, dies zu tun. Ein Kontrollkästchen wird entweder mit einem einzigen Wert übermittelt, wenn es aktiviert ist, oder gar nicht übermittelt. Es liegt nicht wirklich am Server, welcher Wert gesendet wird.

### Dropdown-Menüs

Dropdown-Menüs, wie z. B. das Auswahlkontrollelement „Wie kommen Sie hierher?“ in unserem Beispiel werden nicht mit einem `<input>` Typ implementiert, sondern mit den {{htmlelement("select")}} und {{htmlelement("option")}} Elementen:

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

Das `<select>` Element umschließt alle verschiedenen Wertauswahlmöglichkeiten. Hier legen Sie das `id`-Attribut fest, das die Steuerung mit seinem Label verknüpft, und das `name`-Attribut, das den Namen des zu übermittelnden Datenelements festlegt.

Jeder mögliche Wert für das Datenelement wird durch ein `<option>`-Element dargestellt, das in das `<select>` Elemente eingebettet ist. Jedes `<option>`-Element kann ein `value`-Attribut aufnehmen, das den zu übermittelnden Wert angibt, wenn diese Auswahl aus der Dropdown-Liste getroffen wird. Wenn Sie keinen `value` angeben, wird der Text innerhalb der `<option></option>` Tags als Wert verwendet.

> [!NOTE]
> Wenn Sie ein spezifisches Element auf der Seite initial ausgewählt haben möchten, können Sie ein `selected`-Attribut auf das entsprechende `<option>` Element hinzufügen.

### Mehrzeilige Text-Eingabefelder

Mehrzeilige Texteingabefelder werden mithilfe von {{htmlelement("textarea")}} Elementen erstellt:

```html-nolint
<label for="comments">Any other comments:</label>
<textarea id="comments" name="comments" rows="5" cols="33"></textarea>
```

Sie verhalten sich ähnlich wie `<input type="text">`-Elemente, außer dass sie die Eingabe mehrerer Zeilen Text ermöglichen. Das `rows` Attribut gibt die Anzahl der Zeilen an, die der Textbereich standardmäßig hoch ist, während das `cols`-Attribut die Anzahl der Spalten angibt, die der Textbereich standardmäßig breit ist. Wenn sie nicht angegeben werden, betragen die verwendeten Werte `cols="20"` und `rows="2"`.

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Die meisten Browser erstellen Textbereiche mit einem Ziehgriff in einer Ecke, der zum Ändern der Größe verwendet werden kann. Versuchen Sie dies, um die Größe des Textbereichs in unserem Demo zu ändern.

## Formularvalidierung

Früher haben wir einige der grundlegenden clientseitigen Formularüberprüfungen behandelt, die vom Browser bereitgestellt werden. Das `required`-Attribut wird verwendet, um anzugeben, dass ein Feld ausgefüllt werden muss, bevor das Formular übermittelt werden kann. Es überprüft auch, ob der korrekte Werttyp für spezifische Werttypen wie E-Mail-Adressen, URLs, Zahlen usw. eingegeben wird. Validierung ist aus zwei Hauptgründen wichtig:

- Sicherstellen, dass Daten im korrekten Format übermittelt werden, damit keine Fehler in Ihrer Anwendung entstehen.
- Sicherstellen, dass Daten keine Sicherheitsprobleme verursachen. Böse Menschen wissen, wie man Daten spezifisch formatiert, sodass sie in unsicheren Anwendungen Befehle ausführen können, um Datenbanken zu löschen oder die Kontrolle über ein System zu übernehmen.

Formularvalidierung ist ein großes Thema, das den Umfang dieses Artikels sprengt, daher belassen wir es hier vorerst. Bedenken Sie jedoch, dass es zwei Arten der Formularvalidierung gibt:

- Clientseitige Validierung, die im Browser erfolgt, implementiert mithilfe einer Kombination von Formularüberprüfungsattributen (wie `required`) und JavaScript. Die clientseitige Validierung ist nützlich, um den Benutzern sofortige Hinweise zu geben, wenn sie falsche Daten eingegeben haben, ist jedoch weniger wirksam, um bösartige Daten abzufangen. Es ist zu einfach, JavaScript abzuschalten oder den clientseitigen Code so zu ändern, dass die Validierung nicht mehr funktioniert.
- Serverseitige Validierung, die auf dem Server erfolgt, implementiert in jeder Sprache, die der Server verwendet. Schlecht formatierte Nachrichten können an einen Server durch Unfall oder absichtlich gesendet werden. Konventionelles Wissen ist, sicherzustellen, dass Ihr Server nichts, das ein Client sendet, vertraut, um Fehler oder Sicherheitsprobleme zu vermeiden, die durch fehlerhafte Nachrichten verursacht werden. Die serverseitige Validierung ist großartig für das Abfangen bösartiger Nachrichten, da es schwieriger ist, mit dem auf dem Server laufenden Code zu manipulieren. Die serverseitige Validierung ist nicht so gut darin, den Benutzern Hinweise auf falsche Daten zu geben, da die Daten zum Server gesendet werden müssen, um validiert zu werden, und dann das Ergebnis an den Client zurückgesendet werden muss, bevor der Benutzer benachrichtigt werden kann.

Kurz gesagt, entscheiden Sie sich nicht zwischen der Verwendung von entweder clientseitiger oder serverseitiger Validierung — Sie werden beides benötigen. Sie benötigen die clientseitige Validierung, um den Benutzern Feedback zu ihrer Eingabe zu geben, und die serverseitige Validierung, um sicherzustellen, dass Nachrichten in einem Format sind, das Ihr Server sicher verarbeiten kann. Wenn Sie mehr über Validierung lernen möchten, ist ein guter Ausgangspunkt [Client-side form validation](/de/docs/Learn_web_development/Extensions/Forms/Form_validation).

## Zusammenfassung

Das war's erstmal. Es gibt noch viel mehr über Formulare zu wissen, aber vorerst haben wir Ihnen genug Verständnis gegeben, um mit Ihren Studien fortzufahren.

Als nächstes werden wir uns ansehen, wie Sie Probleme im HTML-Code debuggen können.

## Siehe auch

- [Webformulare — Arbeiten mit Benutzerdaten](/de/docs/Learn_web_development/Extensions/Forms)

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content/Debugging_HTML", "Learn_web_development/Core/Structuring_content")}}
