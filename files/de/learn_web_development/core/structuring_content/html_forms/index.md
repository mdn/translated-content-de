---
title: Formulare und Schaltflächen in HTML
short-title: Formulare und Schaltflächen
slug: Learn_web_development/Core/Structuring_content/HTML_forms
l10n:
  sourceCommit: 27f34d8b137f9bb2b467f9f9a1c4e1d04e12ed89
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content/Test_your_skills/Forms_and_buttons", "Learn_web_development/Core/Structuring_content")}}

HTML-Formulare und -Schaltflächen sind leistungsstarke Werkzeuge zur Interaktion mit Benutzern einer Website. Am häufigsten bieten sie Benutzern Steuerungsmöglichkeiten, um eine Benutzeroberfläche (UI) zu manipulieren oder Daten einzugeben, wenn dies erforderlich ist.

In diesem Artikel bieten wir eine Einführung in die Grundlagen von Formularen und Schaltflächen. Es gibt viel mehr zu wissen — viele Eingabetypen und Formularfunktionen werden nicht erwähnt — aber dieser Artikel wird Ihnen eine solide Grundlage für die meisten Fälle geben. Sie können die fortgeschrittenen oder spezialisierten Anwendungen basierend auf Ihrem Bedarf als Teil des kontinuierlichen Lernens während Ihrer Karriere erlernen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML, wie sie in
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        > behandelt werden. Textbezogene Semantiken wie <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
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
          <li>Erkennen, dass Formulare und Schaltflächen zusammen mit Links die Hauptwerkzeuge für Benutzer zur Interaktion mit einer Website sind.</li>
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

Bisher im Kurs haben Sie einige Möglichkeiten kennengelernt, wie Benutzer mit dem Web interagieren können:

- [Links](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links) können verwendet werden, um zu verschiedenen Inhaltsabschnitten zu navigieren, entweder auf derselben Seite oder auf einer anderen Seite.
- [`<video>` und `<audio>`](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)-Elemente verfügen in der Regel über Steuerungen wie Abspielen/Pause, Vor- und Zurückspulen usw., die es den Benutzern ermöglichen, Mediendateien nach Belieben zu konsumieren.

Diese Funktionen erleichtern jedoch in der Regel einseitige Interaktionen, bei denen Benutzer Inhalte passiv konsumieren. Das ist in Ordnung, aber das Web ist eine wechselseitige Erfahrung. Website-Benutzer legen Präferenzen fest, wie sie Inhalte und Dienstleistungen erleben möchten. Sie bestellen Taxis und fordern Rückrufe an. Sie geben Feedback und machen Beschwerden. Sie kaufen Produkte und lassen sie sich nach Hause liefern.

Um diese wechselseitige Erfahrung zu bieten, müssen Sie Schaltflächen und Formulare verwenden.

Schaltflächen werden meist mit HTML-{{htmlelement("button")}}-Elementen erstellt (sie werden manchmal auch mit {{htmlelement("input")}}-Elementen erstellt, bei denen das `type`-Attribut auf einen Wert wie `button` oder `submit` gesetzt ist). Diese Druckschaltflächen sind Allzweck-Schalter — Sie können sie so programmieren, dass sie beliebige Funktionen auslösen, je nach Ihrer Vorstellungskraft und Ihren Programmierfähigkeiten.

Formulare werden mit Elementen wie {{htmlelement("form")}}, {{htmlelement("label")}}, {{htmlelement("input")}} und {{htmlelement("select")}} erstellt. Formularelemente können verwendet werden, um komplexere Steuerungen zu erstellen, als einfache Schaltflächen dies ermöglichen — zum Beispiel ein Dropdown-Menü mit mehreren Optionen, die es Ihnen ermöglichen, zwischen verschiedenen Themen für ein Benutzeroberflächenelement zu wählen.

Entscheidend ist jedoch, dass sie auch verwendet werden können, um Formulare zu erstellen, die Benutzer ausfüllen müssen, wenn sie Informationen an den Server der Website senden möchten. Denken Sie an E-Commerce-Seiten — wenn Sie nach einem Produkt suchen möchten, um es zu kaufen, verwenden Sie ein Formular, um Suchbegriffe einzugeben. Wenn Sie einige Artikel bezahlen und die Lieferung abschließen möchten, verwenden Sie ein Formular, um Ihre Postadresse einzugeben, und ein anderes Formular, um Ihre Kreditkartendaten einzugeben.

Wir werden uns in diesem Artikel hauptsächlich auf diese — eher traditionelle — Verwendung von Formularelementen konzentrieren. Beachten Sie, dass Schaltflächen auch häufig innerhalb von Formularen verwendet werden, um die eingegebenen Daten an den Server zu senden.

Nachdem wir diese wichtige Theorie behandelt haben, lassen Sie uns mit der Erkundung des Codes fortfahren und sehen, wie Schaltflächen und Formulare implementiert werden.

## Schaltflächen

Wie oben angedeutet, haben Schaltflächen im Web einige Hauptverwendungszwecke. Erstens werden sie verwendet, um Funktionen auszulösen, was beim Erstellen von UI-Steuerungen nützlich ist. Die einfachste Schaltfläche wird mithilfe des folgenden Codes implementiert:

```html live-sample___basic-button
<button>Press me</button>
```

Dies wird wie folgt gerendert:

{{EmbedLiveSample("basic-button", "100%", "60")}}

Der Text, der zwischen den `<button></button>`-Tags erscheint, wird innerhalb der Schaltfläche gerendert und erhält vom Browser ein grundlegendes Styling, sodass er standardmäßig wie eine Schaltfläche aussieht und sich so verhält. So weit, so gut. Es gibt jedoch ein Problem hier — unsere einsame Schaltfläche wird alleine nichts Nützliches tun. Um sie nützlich zu machen, müssen Sie sie in ein Formular einfügen (was wir später behandeln werden) oder etwas JavaScript hinzufügen.

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

Dies würde Ihnen die folgende Ausgabe geben — versuchen Sie, darauf zu klicken:

{{EmbedLiveSample("basic-button-with-js", "100%", "60")}}

Sie müssen derzeit nicht verstehen, wie das JavaScript funktioniert. Sie werden später im Verlauf des Kurses mehr darüber lernen.

Im nächsten Abschnitt sehen Sie eine Demonstration des zweiten Hauptverwendungszwecks von Schaltflächen — dem Absenden von Formularen.

## Die Anatomie eines Formulars

Ein einfaches Formular enthält drei Dinge:

- Ein {{htmlelement("form")}}-Element, das den gesamten anderen Formularinhalt umschließt. Alle Formularelemente innerhalb der `<form></form>`-Tags gehören zum selben Formular, und ihre Daten werden inkludiert, wenn das Formular gesendet wird.
- Ein oder mehrere Paare, bestehend jeweils aus einem {{htmlelement("label")}}-Element und einem Formsteuerelement (normalerweise ein {{htmlelement("input")}}-Element, es gibt jedoch auch andere Typen wie {{htmlelement("select")}}):
  - Das Formsteuerelement erlaubt dem Benutzer, einige Daten auszuwählen oder einzugeben, die bei der Einreichung des Formulars an den Server gesendet werden.
  - Das `<label>`-Element bietet ein identifizierendes Label, das mit dem Formsteuerelement verknüpft ist und die Daten beschreibt, die darin eingegeben werden sollen.
- Ein {{htmlelement("button")}}-Element, das zum Absenden des Formulars verwendet wird.

Schauen wir uns ein einfaches Beispiel an, das die oben genannten drei Elemente enthält. Dieses Formular könnte verwendet werden, um nach dem Namen und der E-Mail-Adresse eines Benutzers zu fragen, um ihn für einen Newsletter anzumelden (keine Sorge — es ist mit keinem Server verbunden und wird derzeit nichts tun).

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

Wenn Sie sofort auf "Sign me up!" klicken, werden Sie einen Validierungsfehler sehen, weil keine Daten eingegeben wurden. Wenn Sie die Felder mit einem Namen und einer E-Mail-Adresse ausfüllen, dann auf "Sign me up!" klicken, erhalten Sie eine `404`-Fehlermeldung.

Wir werden später erklären, warum. Bevor Sie weitermachen, kopieren Sie den vorherigen HTML-Code in eine neue HTML-Datei mit Ihrem [Code-Editor](/de/docs/Learn_web_development/Getting_started/Environment_setup/Code_editors) und öffnen Sie diese in einem neuen Browser-Tab.

### Das `<form>`-Element

Wie wir bereits gesagt haben, fungiert das {{htmlelement("form")}}-Element als äußerer Wrapper für das Formular und fasst alle darin enthaltenen Formularelemente zusammen. Wenn die `<button>`-Taste gedrückt wird, werden alle durch die Formularelemente dargestellten Daten an den Server gesendet. Das `<form>`-Element kann viele Attribute aufnehmen, aber die beiden wichtigsten, die wir in unserem Beispiel aufgenommen haben, sind wie folgt:

- `action`: Enthält einen Pfad zur Seite, an die wir die eingereichten Formulardaten zur Verarbeitung senden möchten. Später, nachdem Sie das Formular eingereicht haben, werden Sie `/submit_page` in der URL sehen. Sie erhalten auch eine {{HTTPStatus("404")}}-Fehlerantwort, da die Seite tatsächlich nicht existiert, aber das ist für jetzt in Ordnung.
- `method`: Gibt die zu verwendende Datenübertragungsmethode an, um die Formulardaten an den Server zu senden. Machen Sie sich darüber vorerst keine allzu großen Sorgen; Der `get`-Wert bewirkt, dass die Daten als Parameter am Ende der URL gesendet werden.

#### Überprüfen der gesendeten Daten

1. Gehen Sie zum Beispiel im separaten Tab, versuchen Sie, einen Namen wie "Bob" und eine E-Mail-Adresse wie "bob@bob.com" einzugeben.
2. Drücken Sie die `<button>`.

Die Attribute `action` und `method` bewirken, dass die Formulardaten in einer URL gesendet werden, die in etwa folgendermaßen aussieht:

```plain
/some/url/submit_page?name=Bob&email=bob%40bob.com
```

#### Strukturieren von Formularen

Sie können beliebige HTML-Elemente innerhalb eines `<form>`-Elements einfügen, um die Formularelemente selbst zu strukturieren und Container bereitzustellen, die mit CSS für das Styling usw. gezielt angesteuert werden können.

In unserem Beispiel haben wir ein [Überschriftselement](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) (`<h2>`) eingefügt, um den Zweck des Formulars zu beschreiben.

Wir haben auch jedes Input-/Label-Paar und die Absendetaste in separate {{htmlelement("p")}}-Elemente eingeschlossen, sodass jedes auf einer separaten Zeile erscheint. Diese Elemente sind standardmäßig inline, was bedeutet, dass sie alle in einer Zeile sitzen würden, wenn wir das nicht getan hätten.

Dies ist ein häufiges Muster für die Formularstrukturierung. Einige Leute verwenden `<p>`-Elemente, um ihre Formularelemente zu trennen, andere verwenden {{htmlelement("div")}}, {{htmlelement("section")}} oder sogar {{htmlelement("li")}}-Elemente. Es macht keinen großen Unterschied, solange die verwendeten Elemente semantisch Sinn ergeben. Zum Beispiel macht es Sinn, Formelelementgruppen in separate Absätze oder Inhaltsabschnitte oder sogar als Elemente in einer Liste zu unterteilen. Es wäre weniger sinnvoll, sie als [Blockzitate](/de/docs/Web/HTML/Reference/Elements/blockquote), [Nebentexte](/de/docs/Web/HTML/Reference/Elements/aside) oder [Adressen](/de/docs/Web/HTML/Reference/Elements/address) darzustellen.

Es gibt ein spezialisiertes Element zum Gruppieren von Formularelementen zusammen, das {{htmlelement("fieldset")}} genannt wird. Dies ist nützlich in bestimmten Situationen, z.B. in komplexen Formularen und beim Gruppieren mehrerer Kontrollkästchen und Radiobuttontasten. Wir werden später ein paar Beispiele für `<fieldset>` anschauen.

### `<input>`-Elemente

Die {{htmlelement("input")}}-Elemente repräsentieren die verschiedenen in das Formular eingegebenen Daten. Lassen Sie uns eines der Beispiele aus unserem einfachen Formular untersuchen:

```html
<input type="text" name="name" id="name" required />
```

Die Attribute sind wie folgt:

- `type`: Gibt den Typ des zu erstellenden Formsteuerelements an. Es gibt viele verschiedene Typen von Formsteuerelementen, von einfachen Textfeldern verschiedener Typen bis hin zu Radio-Buttons, Kontrollkästchen und mehr. Typ `text` rendert ein einfaches Textfeld, das jeden Wert akzeptieren kann.
- `name`: Gibt einen Namen für das Datenobjekt an. Wenn das Formular eingereicht wird, werden die Daten als Name/Wert-Paare gesendet. In jedem Fall ist der Name gleich dem Wert dieses `name`-Attributwerts, und der Wert entspricht dem in das Textfeld eingegebenen Text.
- `id`: Gibt eine ID an, die zur Identifizierung des Elements verwendet werden kann. In diesem Fall wird es verwendet, um das Formsteuerelement mit seinem `<label>` zu verknüpfen.
- `required`: Gibt an, dass ein Wert in das Formularelement eingegeben werden muss, bevor das Formular eingereicht werden kann. Dies sollte nur bei Eingaben gesetzt werden, die Sie benötigen, nicht bei optionalen Feldern.

Sie sollten beachten, dass einige Eingabetypen ihre Werte normalerweise nicht von im Feld eingegebenem Text erhalten. Zum Beispiel rendert [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color) ein Farbauswahl-Widget, aus dem Sie eine Farbe auswählen, während [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio) eine Radiobutton-Steuerung rendert, die ausgewählt oder nicht ausgewählt werden kann.

Im Fall von Radiobuttons müssen Sie normalerweise den Wert angeben, der übermittelt werden würde, wenn er ausgewählt wird, in einem spezifischen `value`-Attribut. Beachten Sie, dass Sie _können_ ein `value`-Attribut auf Eingabetypen wie `text` und `color` angeben — die Wirkung ist, dass der Wert beim ersten Rendern in das Formelfeld vorausgefüllt ist.

#### `required`- und `value`-Attribute in Aktion

1. Gehen Sie erneut zu dem Beispiel, das Sie in einem separaten Tab geladen haben, und versuchen Sie, das Formular ohne Wert in beiden Feldern abzuschicken. Sie werden eine Fehlermeldung neben dem "Name"-Feld sehen, die so etwas wie "Bitte füllen Sie dieses Feld aus" sagt (es variiert je nach Browser). Dies ist das `required`-Attribut — und die Standard-Client-seitige Formularvalidierung des Browsers — in Aktion.
2. Versuchen Sie nun, das Formular mit einem gültigen Namen im ersten Feld, aber einem Wert, der keine gültige E-Mail-Adresse ist, im zweiten Feld abzusenden (etwas wie "aaaa" wird ausreichen). Dieses Mal sehen Sie eine Fehlermeldung neben dem "Email"-Feld, die so etwas wie "Bitte geben Sie eine E-Mail-Adresse ein" sagt.
3. Versuchen Sie, das Formular so zu bearbeiten, dass `value="Bob"` auf der ersten Eingabe enthalten ist. Wenn Sie den Code neu laden, sehen Sie, dass das erste Feld standardmäßig einen Wert von "Bob" eingegeben hat.

#### Spezialisierte Texteingabefelder

Die zweite Übung oben wirft einen interessanten Punkt auf. Das zweite Eingabefeld erwartet speziell eine E-Mail-Adresse und validiert eingegebene Werte entsprechend. Wenn Sie sich den Formularcode erneut ansehen, werden Sie sehen, warum — das zweite `<input>` hat einen `type` von `email`. Es gibt mehrere spezialisierte Texteingabetypen, die zum Handling bestimmter Datentypen entwickelt wurden — [`<input type="number">`](/de/docs/Web/HTML/Reference/Elements/input/number), [`<input type="password">`](/de/docs/Web/HTML/Reference/Elements/input/password), [`<input type="tel">`](/de/docs/Web/HTML/Reference/Elements/input/tel) usw.

Folgen Sie einigen der obigen Links, um herauszufinden, wofür diese Eingabetypen verwendet werden. Schauen Sie sich auch unsere [`<input>`](/de/docs/Web/HTML/Reference/Elements/input)-Referenz an und sehen Sie, ob Sie noch weitere spezialisierte Texteingabefelder finden.

### `<label>`-Elemente

Wie oben erwähnt, bieten {{htmlelement("label")}}-Elemente identifizierende Labels, die mit Formsteuerungen verknüpft sind und die Datenbeschreibung enthalten, die in sie eingegeben werden sollen. Sie können jeden beliebigen Textinhalt in `<label>`-Elementen verwenden, aber sie sollten genau beschreiben, welche Daten die zugehörige Formsteuerung erwartet. Die Verknüpfung erfolgt, indem der Formsteuerung ein `id`-Attribut gegeben wird und dem `<label>`-Element ein `for`-Attribut mit demselben Wert wie die `id` der Steuerung.

Zum Beispiel:

```html
<label for="name">Name (required):</label>
<input type="text" name="name" id="name" required />
```

`<label>`-Elemente sind aus mehreren Gründen wichtig, insbesondere:

- Wenn sehbehinderte Benutzer einen Screenreader verwenden, um ihnen beim Lesen und Interagieren mit Webseiteninhalten zu helfen, liest der Screenreader den zugehörigen Labeltext vor, wenn jede Steuerung begegnet wird. Dies erleichtert es den Benutzern zu verstehen, welche Inhalte in jede Steuerung eingegeben werden sollen.
- Sie ermöglichen es, die Formularelemente zu fokussieren, indem man auf ihren Labeltext sowie auf die Steuerungen klickt. Dies ist besonders nützlich für Mobiltelefonbenutzer, bei denen es schwierig sein kann, ein Formularelement mit dem Finger auf einem Touchscreen genau auszuwählen. Die Vergrößerung der **Anklickfläche** ist in solchen Fällen nützlich.

#### Explizite und implizite Formularetiquetten

Der oben gezeigte Form-Etikettenstil wird als **explizite Form-Etikette** bezeichnet — die Verknüpfung zwischen Steuerung und Etikette wird explizit mittels `id`- und `for`-Attributen hergestellt. Sie können auch eine **implizite Formularetiquette** implementieren, indem die Steuerung innerhalb des Labels verschachtelt wird, wie folgt:

```html
<label>
  Name (required):
  <input type="text" name="name" required />
</label>
```

Die Verschachtelung erzeugt eine implizite Verknüpfung zwischen Steuerung und Etikette, und Sie benötigen die `id`- und `for`-Attribute nicht mehr.

Beide Ansätze sind in Ordnung, aber wir würden empfehlen, den Ansatz der expliziten Etikettierung zu verwenden. Dies liegt daran, dass die explizite Verknüpfung normalerweise einfacher zu identifizieren und zu verstehen ist, insbesondere wenn Ihr HTML-Code komplexer wird. Zudem interpretiert mancher Screenreader (und andere unterstützende Technologien) implizite Etiketten nicht immer korrekt.

Sie können mehr über Best Practices zur Etikettierung von Formularen in [HTML Inputs and Labels: A Love Story](https://css-tricks.com/html-inputs-and-labels-a-love-story/), csstricks.com (2021) lesen.

### Das `<button>`-Element

Wenn ein {{htmlelement("button")}}-Element in einem `<form>`-Element enthalten ist, besteht sein Standardverhalten darin, das Formular abzusenden, vorausgesetzt es sind keine ungültigen Daten vorhanden, die die Übermittlung durch die clientseitige Formularvalidierung blockieren. Sie haben dieses Verhalten bereits bemerkt, als Sie unser einfaches Formularbeispiel ausprobiert haben.

Es gibt andere Schaltflächenverhalten, die über das `type`-Attribut des `<button>`-Elements angegeben werden können:

- `<button type="submit">` erklärt explizit, dass eine Schaltfläche wie eine Absende-Schaltfläche verhalten soll. Dies wirklich zu deklarieren ist normalerweise nicht nötig, es sei denn, Sie fügen aus irgendeinem Grund andere Schaltflächen innerhalb Ihres `<form>`-Elements ein und möchten klarstellen, welche die Absende-Schaltfläche ist. Dies wird sehr selten der Fall sein.
- `<button type="reset">` erzeugt eine _Zurücksetz-Schaltfläche_ — diese löscht sofort alle Daten aus dem Formular und setzt es in seinen Anfangszustand zurück. **Verwenden Sie keine Zurücksetz-Schaltflächen** — sie waren in den frühen Tagen des Webs populär, sind aber normalerweise ärgerlicher als sie hilfreich sind. Die meisten Menschen haben die Erfahrung gemacht, ein langes Formular ausgefüllt zu haben, nur um versehentlich auf die Zurücksetz- statt auf die Absende-Schaltfläche zu klicken, was bedeutet, dass sie von vorne beginnen müssen.
- `<button type="button">` erzeugt eine Schaltfläche mit demselben Verhalten wie die, die außerhalb von `<form>`-Elementen angegeben sind. Wie wir früher gesehen haben, tun sie standardmäßig absolut nichts, und JavaScript ist erforderlich, um ihnen Funktionalität zu geben.

> [!NOTE]
> Sie können die obigen Schaltflächentypen auch mit einem `<input>`-Element erstellen, das dieselben `type`-Werte spezifiziert — [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit), [`<input type="reset">`](/de/docs/Web/HTML/Reference/Elements/input/reset), und [`<input type="button">`](/de/docs/Web/HTML/Reference/Elements/input/button). Diese haben jedoch viele Nachteile im Vergleich zu ihren `<button>`-Gegenstücken. Sie sollten `<button>` anstelle dessen verwenden.

## Ein Exkurs zur Barrierefreiheit

Wir haben bereits über die Bedeutung von Formularetiketten für die Barrierefreiheit gesprochen, wollten aber auch einige Kommentare zur allgemeinen Bedeutung der Verwendung der korrekten semantischen Elemente zur Erstellung von Formularen einschließen (zum Beispiel verwenden Sie eine `<button>`, um Ihr Formular abzusenden, und nicht ein `<div>`, das so programmiert ist, dass es sich wie ein `<button>` verhält.) Es ist durchaus möglich, mit einer Kombination aus CSS und JavaScript so ziemlich jedes HTML-Element so aussehen und sich so verhalten zu lassen wie ein Formularelement. Entwickler tun dies normalerweise aus Designgründen — einige Formularelemente sind schwer zu stylen.

Sie machen sich jedoch das Leben schwerer, wenn Sie dies tun, und das Ihrer Nutzer. Der Browser bietet von Haus aus mehrere `<button>`- und Formsteuerelementfunktionen, ohne dass JavaScript oder anderer zusätzlicher Code erforderlich ist, um Formulare für alle Benutzer benutzerfreundlicher zu machen.

Beispielsweise:

- Semantische Elemente werden von unterstützender Technologie verstanden, wie beispielsweise Screenreadern, welche ihre Bedeutung an Benutzer weitergeben, die sie nicht sehen können.
- Formsteuerungen und Schaltflächen sind standardmäßig über die Tastatur zugänglich. Im vorherigen Beispiel versuchen Sie, vorwärts und rückwärts zwischen den Formularelementen mit <kbd>Tab</kbd> und <kbd>Shift</kbd> + <kbd>Tab</kbd> (genannt "Tabbing") zu navigieren.
- Beachten Sie auch, wie das Tabbing zwischen den Formularelementen dazu führt, dass das fokussierte Element mit einem blauen Umriss hervorgehoben wird (genannt die **Fokusumrandung**). Dies ist eine wichtige Funktion für Benutzer mit Tastatur, um zu wissen, wo sie sich gerade im Formular befinden.

Wenn Sie die korrekten semantischen Elemente verwenden, um Ihre Formulare zu implementieren, müssen Sie all diese Funktionalitäten nicht selbst neu implementieren, sonst verhalten sich Ihre Formularelemente nicht so, wie Benutzer erwarten, und wirken daher kaputt. Es summiert sich alles.

## Andere Steuerungstypen

Es gibt viele andere Steuerungstypen, die Sie zur Datensammlung in einem Formular verwenden können. Schauen wir uns ein etwas komplexeres Beispiel an und dann werden wir es erkunden und erklären.

> [!NOTE]
> In diesem Beispiel gehen wir davon aus, dass der Benutzer bereits registriert und angemeldet ist, daher sind keine Details wie Name und E-Mail erforderlich.

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

Wir empfehlen, dieses Beispiel in einem separaten Browser-Tab zu öffnen, während Sie die nächsten Abschnitte bearbeiten, in denen wir jeden Steuerungstyp der Reihe nach untersuchen. Kopieren Sie dazu den Code mit Ihrem Code-Editor in eine HTML-Datei und öffnen Sie sie in einem Browser-Tab.

Bevor Sie fortfahren, interagieren Sie mit den verschiedenen Formsteuerelementen in Ihrer lokalen Kopie und wählen Sie einige Werte aus. Versuchen Sie, das Formular abzusenden und sehen Sie, wie die gesendeten Daten in der URL aussehen.

### Radiobuttons

Die "Zimmerkategorie auswählen"-Schaltflächen werden mit [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio)-Steuerungen umgesetzt. Diese werden als eine Gruppe von Druckschaltflächen gerendert, bei denen immer nur eine der Gruppe zu einem bestimmten Zeitpunkt ausgewählt sein kann – Sie können nicht mehr als eine gleichzeitig auswählen. Sie sind nach den Tasten auf altmodischen Radios benannt, bei denen man eine Taste drückt und die zuvor ausgewählte Taste wieder ausklickt.

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

`radio` Eingabetypen funktionieren größtenteils gleich wie `text` Eingabetypen, jedoch mit ein paar Unterschieden:

- Die `name`-Attribute für jede Gruppe von Radiobuttons müssen denselben Wert enthalten, um sie als Gruppe zusammenzufassen. Wenn sie unterschiedliche Werte enthalten, sind sie effektiv separate Gruppen mit unterschiedlichen Werten bei der Übermittlung.
- Sie müssen ein `value`-Attribut einfügen, das den zu übermittelnden Wert für jeden Radiobutton enthält. Der übermittelte Wert wird ein Name/Wert-Paar sein, aber der Name wird immer gleich sein, zum Beispiel `hotel=economy` oder `hotel=superior`.
- Das `<label>` für jeden Radiobutton sollte diese bestimmte Wertauswahl beschreiben, anstatt den gesamten Wert, den Sie auswählen. Die bevorzugte Möglichkeit, eine Beschreibung der gesamten Wertauswahl bereitzustellen, besteht darin, sie in einem {{htmlelement("fieldset")}} zu umschließen, das ein {{htmlelement("legend")}}-Element als Kind enthält, das die Beschreibung enthält.

> [!NOTE]
> Neben der Strukturierung und Etikettierung von Formularen haben Fieldsets andere Verwendungen, z.B. das [Deaktivieren](#deaktivierung_von_formularsteuerelementen) einer gesamten Steuerungseinheit als ein zusammengehöriges Element.

Es ist auch erwähnenswert, dass wir das `checked`-Attribut auf den ersten Radiobutton angewendet haben — dies bewirkt, dass er ausgewählt ist, wenn die Seite zum ersten Mal geladen wird. Dies bedeutet, dass immer eine Option ausgewählt wird und Sie einen Radiobutton nicht deselektieren können, ohne einen anderen zu wählen.

Versuchen Sie, das `checked`-Attribut aus dem ersten Radiobutton zu entfernen, speichern, dann neu laden, um den Effekt zu sehen, den es hat. Setzen Sie es wieder ein, bevor Sie fortfahren.

#### Deaktivierung von Formularsteuerelementen

Im Radiobutton-Beispiel werden Sie bemerken, dass der dritte Radiobutton das `disabled`-Attribut gesetzt hat. Dies bewirkt, dass die gerenderte Steuerung ausgegraut und nicht auswählbar ist. Dies ist in vielen Situationen nützlich, in denen eine Option normalerweise verfügbar ist, jedoch jetzt nicht. Zum Beispiel könnte ein Produkt nicht auf Lager sein oder, wie in unserem Beispiel, sind Penthouse-Suiten alle ausgebucht!

Sie können das `disabled`-Attribut auf jede Formsteuerung setzen, einschließlich `<button>`-Elementen. `<fieldset>`-Elemente können auch das `disabled`-Attribut annehmen — dies bewirkt, dass jedes Formsteuerelement innerhalb des Fieldsets deaktiviert wird.

Versuchen Sie, das `disabled`-Attribut auf die beiden `<fieldset>`-Elemente zu setzen, speichern und neu laden, um den Effekt zu sehen, den es hat. Entfernen Sie sie wieder, bevor Sie fortfahren.

### Kontrollkästchen

Unsere "Kurse zum Besuch auswählen"-Selektoren werden mit [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox)-Steuerungen umgesetzt. Diese werden als Reihe von Ein/Aus-Zustandskästchen gerendert. Im Gegensatz zu Radiobuttons können Sie mehr als eines gleichzeitig auswählen.

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

Wie Sie aus den Codeausschnitten sehen können, werden Radiobuttons und Kontrollkästchen auf sehr ähnliche Weise implementiert (sie können auch `checked`-Attribute aufnehmen, um sie als vorausgewählt beim Laden der Seite zu rendern). Sie verhalten sich auch in ähnlicher Weise, außer dass Radiobuttons es Ihnen erlauben, null oder eines von vielen Elementen auszuwählen, und Kontrollkästchen es Ihnen erlauben, null oder mehr als eines von vielen auszuwählen.

Der Hauptunterschied (abgesehen vom `type`-Wert!) besteht darin, dass jedes Kontrollkästchen einen anderen `name`-Wert hat und in der Regel keine `value`-Attribute erhalten. Verhaltensmäßig bedeutet dies, dass sie unterschiedliche Datenwerte repräsentieren, während eine Gruppe von Radiobuttons nur einen repräsentiert. Bei der Übermittlung wird jeder Wert mit einem Wert von `on` übermittelt, wenn das Kontrollkästchen aktiviert wurde — `yoga=on`, `balloon=on` usw.

> [!NOTE]
> Es ist möglich, den übermittelten Wert für ein Kontrollkästchen zu ändern, indem ihm ein `value`-Attribut zugewiesen wird, zum Beispiel: `<input type="checkbox" id="yoga" name="yoga" value="yes" />` würde `yoga=yes` übermitteln, wenn es aktiviert ist. Es gibt jedoch wenig Sinn darin, dies zu tun. Ein Kontrollkästchen wird entweder mit einem einzigen Wert übermittelt, wenn es aktiviert ist, oder es wird überhaupt nicht übermittelt. Es spielt keine große Rolle, welcher Wert an den Server gesendet wird.

### Dropdown-Menüs

Dropdown-Menüs, zum Beispiel die "Wie reisen Sie an"-Auswahlsteuerung in unserem Beispiel, werden nicht mit einem `<input>`-Typ implementiert, sondern mit den {{htmlelement("select")}}- und {{htmlelement("option")}}-Elementen:

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

Das `<select>`-Element umschließt alle verschiedenen Wertauswahlen. Dort wird das `id`-Attribut gesetzt, das die Kontrolle mit ihrem Label verbindet, und das `name`-Attribut, das den Namen des zu übermittelnden Datenobjekts festlegt.

Jeder mögliche Wert für das Datenobjekt wird durch ein `<option>`-Element repräsentiert, das innerhalb des `<select>`-Elements eingeschachtelt ist. Jedes `<option>`-Element kann ein `value`-Attribut annehmen, das den Wert festlegt, der bei Auswahl aus der Dropdown-Liste übermittelt werden soll. Wenn Sie keinen `value` angeben, wird der Text innerhalb der `<option></option>`-Tags als Wert verwendet.

> [!NOTE]
> Wenn Sie möchten, dass ein bestimmter Eintrag beim Laden der Seite vorausgewählt ist, können Sie dem entsprechenden `<option>`-Element ein `selected`-Attribut hinzufügen.

### Mehrzeilige Texteingabefelder

Mehrzeilige Texteingabefelder werden mit {{htmlelement("textarea")}}-Elementen erstellt:

```html
<label for="comments">Any other comments:</label>
<textarea id="comments" name="comments" rows="5" cols="33"></textarea>
```

Sie verhalten sich genauso wie `<input type="text">`-Elemente, außer dass sie die Eingabe mehrerer Textzeilen erlauben. Das `rows`-Attribut gibt die Anzahl der Zeilen an, die das Textfeld standardmäßig hoch sein wird, während das `cols`-Attribut die Anzahl der Spalten angibt, die das Textfeld standardmäßig breit sein wird. Wenn sie nicht angegeben sind, lauten die verwendeten Werte `cols="20"` und `rows="2"`.

Die meisten Browser rendern Textbereiche mit einem Ziehgriff in einer Ecke, mit dem die Größe geändert werden kann. Versuchen Sie, diesen in unserem Demo-Beispiel zu verwenden, um die Größe des Textfelds zu ändern.

## Formularvalidierung

Früher haben wir einige der grundlegenden clientseitigen Formularvalidierungsmethoden, die der Browser bietet, untersucht. Das `required`-Attribut wird verwendet, um sicherzustellen, dass ein Feld ausgefüllt werden muss, bevor das Formular abgeschickt werden kann, es überprüft auch, dass der korrekte Typ von Wert für spezifische Werttypen wie E-Mail-Adressen, URLs, Nummern, usw. eingegeben wurde. Validierung ist aus zwei Hauptgründen wichtig:

- Sicherstellen, dass Daten im korrekten Format übermittelt werden, damit sie keine Fehler in Ihrer Anwendung verursachen.
- Sicherstellen, dass Daten keine Sicherheitsprobleme verursachen. Schlecht gesonnene Personen wissen, wie sie speziell formatierte Daten übermitteln können, sodass sie bei unsicheren Anwendungen Befehle zum Löschen von Datenbanken oder zur Übernahme eines Systems ausführen können.

Validierung von Formularen ist ein großes Thema, das den Rahmen dieses Artikels sprengt, daher werden wir es hier belassen. Beachten Sie einfach, dass es zwei Hauptarten der Formularvalidierung gibt:

- Clientseitige Validierung, die im Browser erfolgt, implementiert mithilfe einer Kombination aus Formularvalidierungsattributen (wie `required`) und JavaScript. Clientseitige Validierung ist nützlich, um Benutzern sofortige Hinweise zu geben, wenn sie die falschen Daten eingegeben haben, ist jedoch nicht so effektiv beim Stoppen bösartiger Daten. Es ist zu einfach, JavaScript zu deaktivieren oder den clientseitigen Code so zu ändern, dass die Validierung nicht mehr funktioniert.
- Serverseitige Validierung, die auf dem Server erfolgt, implementiert in welcher Sprache auch immer der Server verwendet. Schlecht formatierte Nachrichten können aus Versehen oder absichtlich an einen Server gesendet werden. Die allgemeine Weisheit lautet, sicherzustellen, dass Ihr Server nichts vertraut, was ein Client sendet, um Fehler oder Sicherheitsprobleme durch fehlerhafte Nachrichten zu vermeiden. Serverseitige Validierung ist großartig, um bösartige Nachrichten zu stoppen, da es schwieriger ist, den auf dem Server laufenden Code zu manipulieren. Serverseitige Validierung ist jedoch nicht so gut darin, den Benutzern Hinweise über unkorrekte Daten zu geben, da die Daten zum Server gehen müssen, um validiert zu werden, und das Ergebnis an den Client zurückgesendet werden muss, bevor der Benutzer benachrichtigt werden kann.

Kurz gesagt, entscheiden Sie sich nicht zwischen der Verwendung von entweder clientseitiger oder serverseitiger Validierung — Sie benötigen beides. Sie benötigen clientseitige Validierung, um Benutzern Feedback zu ihrer Eingabe zu geben, und serverseitige Validierung, um sicherzustellen, dass Nachrichten in einem Format vorliegen, das Ihr Server sicher verarbeiten kann. Wenn Sie beginnen möchten, mehr über Validierung zu lernen, ist [Client-side form validation](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) ein guter Ausgangspunkt.

## Zusammenfassung

Das war's für den Moment. Es gibt viel mehr über Formulare zu wissen, aber für den Moment haben wir Ihnen genug Verständnis vermittelt, um in Ihren Studien weiter voranzukommen.

Als nächstes bieten wir Ihnen einige Tests an, die Sie verwenden können, um zu überprüfen, wie gut Sie die Informationen, die wir über HTML-Formulare bereitgestellt haben, verstanden und behalten haben.

## Siehe auch

- [Web forms — Working with user data](/de/docs/Learn_web_development/Extensions/Forms)

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content/Test_your_skills/Forms_and_buttons", "Learn_web_development/Core/Structuring_content")}}
