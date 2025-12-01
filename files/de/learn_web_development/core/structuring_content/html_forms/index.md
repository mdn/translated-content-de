---
title: Formulare und Schaltflächen in HTML
short-title: Formulare und Schaltflächen
slug: Learn_web_development/Core/Structuring_content/HTML_forms
l10n:
  sourceCommit: 5bb4748720cafcc003c40de725f3c24aa5e98054
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content/Test_your_skills/Forms_and_buttons", "Learn_web_development/Core/Structuring_content")}}

HTML-Formulare und -Schaltflächen sind mächtige Werkzeuge zur Interaktion mit Benutzern einer Website. Am häufigsten bieten sie den Benutzern Steuerungsmöglichkeiten zur Manipulation einer Benutzeroberfläche (UI) oder zur Eingabe von Daten, wenn dies erforderlich ist.

In diesem Artikel bieten wir eine Einführung in die Grundlagen von Formularen und Schaltflächen. Es gibt noch viel mehr zu wissen — viele Eingabetypen und Formulareigenschaften werden nicht erwähnt — aber dieser Artikel wird Ihnen eine solide Grundlage für die meisten Fälle geben. Sie können die erweiterten oder spezialisierteren Anwendungen nach Bedarf erlernen, im Rahmen des kontinuierlichen Lernens, das Sie im Laufe Ihrer Karriere begleiten wird.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML, wie sie in
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        > behandelt werden. Textbasierte Semantik wie <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
          >Überschriften und Absätze</a
        > und <a href="/de/docs/Learn_web_development/Core/Structuring_content/Lists"
          >Listen</a
        >. <a href="/de/docs/Learn_web_development/Core/Structuring_content/Structuring_documents"
          >Strukturales HTML</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Ein Verständnis dafür, dass Formulare und Schaltflächen die Hauptwerkzeuge für die Interaktion der Benutzer mit einer Website sind, zusammen mit Links.</li>
          <li>Unterschiedliche Schaltflächentypen.</li>
          <li>Gängige <code>&lt;input&gt;</code>-Typen.</li>
          <li>Gängige Attribute wie <code>name</code> und <code>value</code>.</li>
          <li>Das <code>&lt;form&gt;</code>-Element und die Grundlagen zur Formularübermittlung.</li>
          <li>Formulare zugänglich machen mit Labels und korrekter Semantik.</li>
          <li>Andere Steuerungstypen: <code>&lt;textarea&gt;</code>, <code>&lt;select&gt;</code> und <code>&lt;option&gt;</code>.</li>
          <li>Grundlagen der clientseitigen Validierung.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Interaktion mit Benutzern

Bisher im Kurs haben Sie ein paar Möglichkeiten gesehen, wie Benutzer mit dem Web interagieren können:

- [Links](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links) können verwendet werden, um zu verschiedenen Inhaltsabschnitten zu navigieren, entweder auf derselben Seite oder auf einer anderen Seite.
- [`<video>` und `<audio>`](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) Elemente bieten in der Regel Steuerungen wie abspielen/anhalten, vorspulen, zurückspulen usw., die es Benutzern ermöglichen, Medieninhalte nach Belieben zu konsumieren.

Diese Funktionen ermöglichen jedoch in der Regel einseitige Interaktionen, bei denen Benutzer Inhalte passiv konsumieren. Das ist in Ordnung, aber das Web ist ein Zwei-Wege-Erlebnis. Website-Benutzer legen Präferenzen dafür fest, wie sie Inhalte und Dienste erleben möchten. Sie bestellen Taxis und fordern Rückrufe an. Sie geben Feedback und beschweren sich. Sie kaufen Produkte und lassen sie sich nach Hause liefern.

Um dieses Zwei-Wege-Erlebnis zu bieten, müssen Sie Schaltflächen und Formulare verwenden.

Schaltflächen werden normalerweise mit HTML-{{htmlelement("button")}}-Elementen erstellt (sie werden auch manchmal mit {{htmlelement("input")}}-Elementen mit ihrem `type`-Attribut erstellt, das auf einen Wert wie `button` oder `submit` gesetzt ist). Diese Druckknöpfe sind vielseitig einsetzbar — Sie können sie mit jeder gewünschten Funktionalität verbinden, begrenzt nur durch Ihre Vorstellungskraft und Ihre Programmierkenntnisse.

Formulare werden mit Elementen wie {{htmlelement("form")}}, {{htmlelement("label")}}, {{htmlelement("input")}} und {{htmlelement("select")}} erstellt. Formularelemente können verwendet werden, um komplexere Steuerungen zu erstellen, als es einfache Schaltflächen erlauben — zum Beispiel ein Dropdown-Menü mit mehreren Optionen, das die Auswahl zwischen verschiedenen Themen für ein Benutzeroberflächenelement ermöglicht.

Entscheidend ist jedoch auch, dass sie verwendet werden können, um Formulare zu erstellen, die Benutzer ausfüllen müssen, wenn sie Informationen an einen Website-Server senden müssen. Denken Sie an E-Commerce-Sites — wenn Sie nach einem Produkt suchen möchten, verwenden Sie ein Formular, um Suchbegriffe einzugeben. Wenn Sie für einige Artikel bezahlen und die Lieferung abschließen möchten, verwenden Sie ein Formular, um Ihre Postanschrift einzugeben, und ein weiteres Formular, um Ihre Kreditkartendaten einzugeben.

Wir konzentrieren uns hauptsächlich auf diesen — eher traditionellen — Gebrauch von Formularelementen in diesem Artikel. Beachten Sie, dass Schaltflächen auch häufig in Formularen verwendet werden, um die eingegebenen Daten an den Server zu übermitteln.

Mit dieser wichtigen Theorie aus dem Weg, lassen Sie uns fortfahren, um den Code zu erkunden und zu sehen, wie Schaltflächen und Formulare implementiert werden.

## Schaltflächen

Wie oben angedeutet, haben Schaltflächen ein paar Hauptverwendungen im Web. Erstens werden sie verwendet, um Funktionalitäten auszulösen, was beim Erstellen von UI-Steuerungen nützlich ist. Die einfachste Schaltfläche wird mit dem folgenden Code implementiert:

```html live-sample___basic-button
<button>Press me</button>
```

Dies wird wie folgt gerendert:

{{EmbedLiveSample("basic-button", "100%", "60")}}

Der Text, der zwischen den `<button></button>`-Tags erscheint, wird innerhalb der Schaltfläche dargestellt und erhält vom Browser eine grundlegende Formatierung, damit er standardmäßig wie eine Schaltfläche aussieht und sich verhält. Bis jetzt, so gut. Es gibt jedoch ein Problem hier — unsere einsame Schaltfläche wird von selbst nichts Nützliches tun. Um sie nützlich zu machen, müssen Sie sie in ein Formular einfügen (auf das wir später eingehen werden) oder etwas JavaScript hinzufügen.

Zum Beispiel, wenn Sie das folgende JavaScript auf die oben genannte Schaltfläche anwenden würden:

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

Es würde Ihnen die folgende Ausgabe geben — versuchen Sie es zu klicken:

{{EmbedLiveSample("basic-button-with-js", "100%", "60")}}

Es wird nicht erwartet, dass Sie jetzt verstehen, wie das JavaScript funktioniert. Sie lernen später im Kurs mehr darüber.

Im nächsten Abschnitt sehen Sie eine Demonstration des zweiten Hauptverwendungszwecks von Schaltflächen — dem Einreichen von Formularen.

## Die Anatomie eines Formulars

Ein einfaches Formular enthält drei Dinge:

- Ein {{htmlelement("form")}}-Element, das den gesamten anderen Formularinhalt umschließt. Alle Formularelemente innerhalb der `<form></form>`-Tags gehören zum selben Formular und ihre Daten werden beim Absenden des Formulars einbezogen.
- Ein oder mehrere Paare, die jeweils aus einem {{htmlelement("label")}}-Element und einem Formularelement (normalerweise ein {{htmlelement("input")}}-Element, aber es gibt auch andere Typen, zum Beispiel {{htmlelement("select")}}) bestehen:
  - Das Formularelement ermöglicht es dem Benutzer, einige Daten auszuwählen oder einzugeben, die an den Server gesendet werden, wenn das Formular abgesendet wird.
  - Das `<label>`-Element bietet ein identifizierendes Label, das mit dem Formularelement verbunden ist und die Daten beschreibt, die darin eingegeben werden sollen.
- Ein {{htmlelement("button")}}-Element, das zum Einreichen des Formulars verwendet wird.

Werfen wir einen Blick auf ein einfaches Beispiel, das die oben genannten drei Elemente enthält. Dieses Formular könnte verwendet werden, um nach dem Namen und der E-Mail-Adresse eines Benutzers zu fragen, um ihn für einen Newsletter anzumelden (keine Sorge — es ist nicht mit einem Server verbunden, daher wird es derzeit nichts tun).

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

Wenn Sie sofort auf "Sign me up!" klicken, sehen Sie einen Validierungsfehler, da keine Daten eingegeben wurden. Wenn Sie die Felder mit einem Namen und einer E-Mail-Adresse ausfüllen und dann auf "Sign me up!" klicken, sehen Sie eine `404`-Fehlermeldung.

Wir werden später erläutern, warum das so ist. Bevor Sie weitermachen, kopieren Sie den vorherigen HTML-Code-Abschnitt in eine neue HTML-Datei mit Ihrem [Code-Editor](/de/docs/Learn_web_development/Getting_started/Environment_setup/Code_editors) und öffnen Sie ihn in einem neuen Browser-Tab.

### Das `<form>`-Element

Wie wir bereits gesagt haben, fungiert das {{htmlelement("form")}}-Element als äußere Hülle für das Formular und gruppiert alle Formularelemente darin zusammen. Wenn die `<button>` gedrückt wird, werden alle durch die Formularelemente dargestellten Daten an den Server gesendet. Das `<form>`-Element kann viele Attribute annehmen, aber die beiden wichtigsten, die wir in unserem Beispiel enthalten haben, sind die folgenden:

- `action`: Enthält einen Pfad zur Seite, auf die wir die abgesendeten Formulardaten zum Verarbeiten senden möchten. Später, nach dem Absenden des Formulars, wird `/submit_page` in der URL enthalten sein. Sie erhalten auch eine {{HTTPStatus("404")}}-Fehlermeldung, weil die Seite eigentlich nicht existiert, aber das ist momentan in Ordnung.
- `method`: Gibt die Übertragungsmethode der Daten an, die Sie zum Senden der Formulardaten an den Server verwenden möchten. Machen Sie sich vorerst keine großen Sorgen darüber; der `get`-Wert bewirkt, dass die Daten als Parameter am Ende der URL gesendet werden.

#### Überprüfen der abgesendeten Daten

1. Gehen Sie zu dem Beispiel im separaten Tab, versuchen Sie, einen Namen wie "Bob" und eine E-Mail-Adresse wie "bob@bob.com" einzugeben.
2. Drücken Sie die `<button>`.

Die `action`- und `method`-Attribute führen dazu, dass die Formulardaten in einer URL der folgenden Art gesendet werden:

```plain
/some/url/submit_page?name=Bob&email=bob%40bob.com
```

#### Strukturierung von Formularen

Sie können beliebige HTML-Elemente innerhalb eines `<form>`-Elements einfügen, um die Formularelemente selbst zu strukturieren und Container zum Stylen mit CSS usw. zur Verfügung zu stellen.

In unserem Beispiel haben wir ein [Überschriftselement](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) (`<h2>`) eingefügt, um den Zweck des Formulars zu beschreiben.

Wir haben auch jedes Eingabe-/Label-Paar und die Absenden-Schaltfläche in ein separates {{htmlelement("p")}} eingefügt, sodass jedes in einer eigenen Zeile erscheint. Diese Elemente sind standardmäßig inline, was bedeutet, dass sie alle in derselben Zeile sitzen würden, wenn wir das nicht tun würden.

Dies ist ein häufiges Muster für die Strukturierung von Formularen. Einige Leute verwenden `<p>`-Elemente, um ihre Formularelemente zu trennen, andere verwenden {{htmlelement("div")}}, {{htmlelement("section")}} oder sogar {{htmlelement("li")}}-Elemente. Es macht nicht viel Unterschied, solange die verwendeten Elemente semantisch Sinn machen. Zum Beispiel macht es Sinn, Formularelementgruppen in separate Absätze oder Abschnitte von Inhalten oder sogar Elemente in einer Liste zu unterteilen. Es hätte weniger Sinn, sie als [blockquote](/de/docs/Web/HTML/Reference/Elements/blockquote), [aside](/de/docs/Web/HTML/Reference/Elements/aside) oder [address](/de/docs/Web/HTML/Reference/Elements/address) darzustellen.

Es gibt ein spezialisiertes Element zum Gruppieren von Formularelementen, das als {{htmlelement("fieldset")}} bezeichnet wird. Dies ist in bestimmten Situationen nützlich, z. B. in komplexen Formularen und beim Gruppieren mehrerer Kontrollkästchen und Radio-Buttons. Wir werden später ein paar `<fieldset>`-Beispiele betrachten.

### `<input>`-Elemente

Die {{htmlelement("input")}}-Elemente repräsentieren die verschiedenen in das Formular eingegebenen Daten. Lassen Sie uns eines der Beispiele aus unserem einfachen Formular studieren:

```html
<input type="text" name="name" id="name" required />
```

Die Attribute sind wie folgt:

- `type`: Gibt an, welche Art von Formularsteuerung erstellt werden soll. Es gibt viele verschiedene Arten von Formularsteuerungen, von einfachen Texteingabefeldern verschiedener Typen bis zu Radio-Buttons, Kontrollkästchen und mehr. Der Typ `text` rendert ein einfaches Texteingabefeld, das jeden Wert akzeptieren kann.
- `name`: Legt einen Namen für das Datenelement fest. Wenn das Formular gesendet wird, werden die Daten in Namen-/Werte-Paaren gesendet. In jedem Fall ist der Name gleich dem Wert des `name`-Attributs, und der Wert entspricht dem im Textfeld eingegebenen Text.
- `id`: Legt eine ID fest, die verwendet werden kann, um das Element zu identifizieren. In diesem Fall wird es verwendet, um die Formularsteuerung mit ihrem `<label>` zu verknüpfen.
- `required`: Gibt an, dass ein Wert in das Formularelement eingegeben werden muss, bevor das Formular gesendet werden kann. Dies sollte nur bei Eingabefeldern gesetzt werden, die Sie benötigen, nicht bei optionalen Feldern.

Sie sollten sich bewusst sein, dass einige Eingabetypen ihre Werte normalerweise nicht aus einem Text entnehmen, der in ein Feld eingegeben wurde. Beispielsweise rendert [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color) ein Farbwähler-Widget, aus dem Sie eine Farbe auswählen, während [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio) eine Radio-Button-Steuerung rendert, die ausgewählt oder nicht ausgewählt werden kann.

Im Fall von Radio-Buttons müssen Sie normalerweise den Wert angeben, der übermittelt würde, wenn er ausgewählt wurde, indem Sie ein bestimmtes `value`-Attribut verwenden. Beachten Sie, dass Sie ein `value`-Attribut bei Eingabetypen wie `text` und `color` angeben können — die Wirkung ist, dass der Wert beim ersten Rendern des Formularfelds vorausgefüllt ist.

#### `required`- und `value`-Attribute in Aktion

1. Gehen Sie erneut zu dem Beispiel, das Sie in einem separaten Tab geladen haben, und versuchen Sie, das Formular ohne eingegebenen Wert in beiden Feldern zu senden. Sie werden sehen, dass eine Fehlermeldung neben dem Feld "Name" erscheint, die etwas wie "Bitte dieses Feld ausfüllen" sagt (es variiert zwischen den verschiedenen Browsern). Dies ist das `required`-Attribut — und die clientseitige Formularvalidierung des Browsers — in Aktion.
2. Versuchen Sie nun, das Formular mit einem gültigen Namen im ersten Feld einzureichen, aber einem Wert, der keine gültige E-Mail-Adresse im zweiten Feld ist (etwas wie "aaaa" reicht aus). Dieses Mal wird eine Fehlermeldung neben dem Feld "Email" erscheinen, die sagt, dass eine E-Mail-Adresse eingegeben werden soll.
3. Versuchen Sie, das Formular so zu bearbeiten, dass es das Attribut `value="Bob"` im ersten `input` enthält. Wenn Sie den Code neu laden, sehen Sie, dass im ersten Feld standardmäßig "Bob" als Wert eingetragen ist.

#### Spezialisierte Texteingabefelder

Das zweite obige Szenario wirft einen interessanten Punkt auf. Das zweite Eingabefeld erwartet speziell eine E-Mail-Adresse und validiert eingegebene Werte entsprechend. Wenn Sie den Formularcode erneut ansehen, werden Sie sehen, warum — das zweite `<input>` hat einen `type` von `email`. Es gibt mehrere spezialisierte Eingabetypen von Textfeldern, die für bestimmte Datentypen ausgelegt sind — [`<input type="number">`](/de/docs/Web/HTML/Reference/Elements/input/number), [`<input type="password">`](/de/docs/Web/HTML/Reference/Elements/input/password), [`<input type="tel">`](/de/docs/Web/HTML/Reference/Elements/input/tel) usw.

Folgen Sie einigen der obigen Links, um herauszufinden, wofür diese Eingabetypen verwendet werden. Schauen Sie sich unsere [Referenz zu `<input>`](/de/docs/Web/HTML/Reference/Elements/input) an und sehen Sie, ob Sie noch mehr spezialisierte Eingabetypen von Textfeldern finden können.

### `<label>`-Elemente

Wie wir oben gesagt haben, bieten {{htmlelement("label")}}-Elemente beschreibende Labels, die mit Formularelementen verknüpft sind und die Daten beschreiben, die in sie eingegeben werden sollen. Sie können beliebigen Textinhalt in `<label>`-Elementen verwenden, aber sie sollten genau beschreiben, welche Daten das verknüpfte Formularelement erwartet. Die Verknüpfung wird hergestellt, indem das Formularelement ein `id`-Attribut erhält und das `<label>`-Element ein `for`-Attribut mit demselben Wert wie die Steuerung `id`.

Beispielsweise:

```html
<label for="name">Name (required):</label>
<input type="text" name="name" id="name" required />
```

`<label>`-Elemente sind aus mehreren Gründen wichtig, insbesondere weil:

- Wenn sehbehinderte Benutzer einen Bildschirmleser verwenden, um ihnen beim Lesen und Interagieren mit Webinhalten zu helfen, liest der Bildschirmleser den zugehörigen Labeltext vor, wenn er auf jedes Steuerelement trifft. Dies macht es den Benutzern leichter zu verstehen, welche Inhalte in welches Steuerelement eingegeben werden sollen.
- Sie ermöglichen es Ihnen, die Formularelemente sowohl durch Klicken auf ihren Labeltext als auch auf die Steuerungen selbst zu fokussieren. Dies ist besonders nützlich für Mobiltelefonbenutzer, da es schwierig sein kann, ein Formularelement auf dem Touchscreen mit dem Finger genau auszuwählen. Die Hit-Zone größer zu machen, ist in solchen Fällen sinnvoll.

#### Explizite und implizite Formular-Labels

Der Formular-Label-Stil, den Sie oben gesehen haben, wird als **explizites Formular-Label** bezeichnet — die Verknüpfung zwischen Steuerung und Label wird explizit über die `id`- und `for`-Attribute hergestellt. Sie können auch ein **implizites Formular-Label** implementieren, indem Sie das Steuerungselement im Label verschachteln, wie folgt:

```html
<label>
  Name (required):
  <input type="text" name="name" required />
</label>
```

Die Verschachtelung stellt eine implizite Verknüpfung zwischen Steuerung und Label her, sodass Sie die `id`- und `for`-Attribute nicht mehr benötigen.

Beide Ansätze sind in Ordnung, aber wir würden empfehlen, den Ansatz der expliziten Beschriftung zu verwenden. Dies liegt daran, dass die explizite Verknüpfung in der Regel leichter zu identifizieren und zu verstehen ist, insbesondere wenn Ihr HTML-Code komplexer wird. Außerdem handhaben Bildschirmleser (und andere unterstützende Technologien) implizite Labels nicht immer korrekt.

Sie können mehr über Best Practices für Formular-Labels in [HTML Inputs and Labels: A Love Story](https://css-tricks.com/html-inputs-and-labels-a-love-story/), csstricks.com (2021) lesen.

### Das `<button>`-Element

Wenn ein {{htmlelement("button")}}-Element innerhalb eines `<form>`-Elements enthalten ist, ist sein Standardverhalten, dass es das Formular absendet, vorausgesetzt es gibt keine ungültigen Daten, die die Absendung durch die clientseitige Formularvalidierung blockieren. Dieses Verhalten haben Sie bereits beim Spielen mit unserem einfachen Formularbeispiel oben gesehen.

Es gibt andere Schaltflächenverhalten, die über das `type`-Attribut des `<button>`-Elements angegeben werden können:

- `<button type="submit">` erklärt explizit, dass eine Schaltfläche sich wie eine Absende-Schaltfläche verhalten soll. Es gibt keinen großen Grund, dies zu deklarieren, es sei denn, Sie haben aus irgendeinem Grund andere Schaltflächen innerhalb Ihres `<form>`, und Sie möchten klarstellen, welche davon die Absende-Schaltfläche ist. Dies ist sehr selten.
- `<button type="reset">` erstellt eine _Reset-Schaltfläche_ — dieses löscht sofort alle Daten aus dem Formular und stellt es in seinen ursprünglichen Zustand zurück. **Verwenden Sie keine Reset-Schaltflächen** — sie waren in den frühen Tagen des Webs beliebt, sind aber normalerweise ärgerlicher als hilfreich. Die meisten Leute haben schon einmal ein langes Formular ausgefüllt, nur um versehentlich auf die Reset-Schaltfläche anstelle der Absende-Schaltfläche zu klicken, was bedeutet, dass sie von vorne beginnen müssen.
- `<button type="button">` erstellt eine Schaltfläche mit dem gleichen Verhalten wie Schaltflächen, die außerhalb von `<form>`-Elementen angegeben sind. Wie wir früher gesehen haben, tun sie absolut nichts von selbst, und es wird JavaScript benötigt, um ihnen Funktionalität zu geben.

> [!NOTE]
> Sie können auch die oben genannten Schaltflächentypen mit einem `<input>`-Element und denselben `type`-Werten erstellen — [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit), [`<input type="reset">`](/de/docs/Web/HTML/Reference/Elements/input/reset) und [`<input type="button">`](/de/docs/Web/HTML/Reference/Elements/input/button). Diese haben jedoch viele Nachteile im Vergleich zu ihren `<button>`-Gegenstücken. Sie sollten `<button>` verwenden.

## Ein Hinweis zur Barrierefreiheit

Wir haben bereits über die Bedeutung von Formular-Labels für die Barrierefreiheit gesprochen, aber wir wollten auch einige Kommentare zur allgemeinen Bedeutung der Verwendung der korrekten semantischen Elemente bei der Erstellung von Formularen (z. B. verwenden Sie eine `<button>`, um Ihr Formular abzusenden, und nicht ein `<div>`, das wie ein `<button>` programmiert ist) hinzufügen. Es ist durchaus möglich, eine Kombination aus CSS und JavaScript zu verwenden, um so ziemlich jedes HTML-Element wie ein Formularelement aussehen und sich verhalten zu lassen. Entwickler tun dies in der Regel aus Designgründen — einige Formularsteuerelemente sind schwer zu gestalten.

Wenn Sie dies jedoch tun, machen Sie sich das Leben schwerer und auch das der Benutzer. Der Browser stellt mehrere `<button>`- und Formularelementfunktionen standardmäßig bereit, ohne dass JavaScript oder andere zusätzliche Codes erforderlich sind, um Formulare für alle Benutzer nutzbarer zu machen.

Zum Beispiel:

- Semantische Elemente werden von unterstützenden Technologien wie Bildschirmlesern verstanden, die ihre Bedeutung an Benutzer vermitteln, die sie nicht sehen können.
- Formularelemente und Schaltflächen sind standardmäßig per Tastatur zugänglich. Im vorherigen Beispiel versuchen Sie vorwärts und rückwärts zwischen den Formularelementen mit <kbd>Tab</kbd> und <kbd>Shift</kbd> + <kbd>Tab</kbd> (sogenanntes "Tabbing") zu navigieren.
- Beachten Sie auch, wie das Tabbing zwischen den Formularelementen dazu führt, dass das fokussierte Element mit einem blauen Umriss hervorgehoben wird (genannt **Fokusumriss**). Dies ist eine wichtige Funktion, damit Tastaturnutzer wissen, wo sie sich im Formular befinden.

Wenn Sie nicht die korrekten semantischen Elemente verwenden, um Ihre Formulare umzusetzen, müssen Sie all diese Funktionalitäten neu implementieren, ansonsten werden sich Ihre Formularelemente nicht so verhalten, wie Benutzer es erwarten, und daher als kaputt erscheinen. Es summiert sich alles.

## Andere Steuerungstypen

Es gibt viele andere Steuerungstypen, die Sie verwenden können, um Daten in einem Formular zu sammeln. Lassen Sie uns ein etwas komplexeres Beispiel betrachten und dann erkunden und erklären wir es.

> [!NOTE]
> In diesem Beispiel gehen wir davon aus, dass der Benutzer bereits registriert und angemeldet ist, daher müssen keine Details wie Name und E-Mail gesammelt werden.

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

Wir empfehlen Ihnen, dieses Beispiel in einem separaten Browser-Tab zu öffnen, während Sie die nächsten Abschnitte durcharbeiten, in denen wir uns jeden Steuerungstyp der Reihe nach ansehen werden. Um dies zu erreichen, kopieren Sie den Code in eine HTML-Datei mit Ihrem Code-Editor und öffnen Sie ihn in einem Browser-Tab.

Bevor Sie fortfahren, spielen Sie mit den verschiedenen Formularelementen in Ihrer lokalen Kopie und wählen Sie einige Werte aus. Versuchen Sie, das Formular zu senden und sehen Sie, wie die in der URL gesendeten Daten aussehen.

### Radio-Buttons

Die "Wählen Sie den Zimmertyp" Schaltflächen sind mit [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio) Steuerungen implementiert. Diese rendern als eine Gruppe von Schaltflächen, bei denen jeweils nur eine der Gruppe ausgewählt werden kann — Sie können nicht mehrere gleichzeitig auswählen. Sie sind nach den Schaltflächen benannt, die auf altmodischen Radios zu finden sind, bei denen man eine Schaltfläche drückt und die zuvor ausgewählte wieder herausploppt.

Unser Beispielcode sieht folgendermaßen aus:

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

`radio`-Eingabetypen funktionieren größtenteils auf die gleiche Weise wie `text`-Eingabetypen, jedoch mit einigen Unterschieden:

- Die `name`-Attribute für jede Gruppe von Radio-Buttons müssen denselben Wert enthalten, um sie als eine Gruppe zu verbinden. Wenn sie unterschiedliche Werte enthalten, sind sie effektiv separate Gruppen, mit unterschiedlichen Werten bei der Übermittlung.
- Sie müssen ein `value`-Attribut angeben, das den zu übermittelnden Wert für jeden Radio-Button enthält. Der übermittelte Wert wird ein Name-/Wertepaar sein, aber der Name wird immer derselbe sein, zum Beispiel `hotel=economy` oder `hotel=superior`.
- Das `<label>` für jeden Radio-Button sollte diese spezielle Wertwahl beschreiben, eher als die Gesamtwertwahl. Der bevorzugte Weg zur Bereitstellung einer Beschreibung der Gesamtwertwahl besteht darin, sie in ein {{htmlelement("fieldset")}} zu wickeln, das ein {{htmlelement("legend")}}-Element als untergeordnetes Element enthält, das die Beschreibung enthält.

> [!NOTE]
> Neben der Strukturierung und Beschriftung von Formularen haben Feldsätze andere Verwendungen, wie zum Beispiel das [Deaktivieren](#deaktivieren_von_formularelementen) einer gesamten Gruppe von Steuerungen als eine Einheit.

Es ist auch wichtig zu bemerken, dass wir das `checked`-Attribut auf den ersten Radio-Button angewendet haben — dies bewirkt, dass dieser ausgewählt wird, wenn die Seite zum ersten Mal geladen wird. Dies bedeutet, dass immer eine Option ausgewählt wird und Sie einen Radio-Button nicht mehr abwählen können, ohne einen anderen auszuwählen.

Versuchen Sie, das `checked`-Attribut aus dem ersten Radio-Button zu entfernen, speichern Sie es und laden Sie die Seite neu, um den Effekt zu sehen, den das hat. Setzen Sie es zurück, bevor Sie weitermachen.

#### Deaktivieren von Formularelementen

Im Radio-Button-Beispiel werden Sie bemerkt haben, dass der dritte Radio-Button das `disabled`-Attribut aufgesetzt hat. Dies bewirkt, dass die gerenderte Steuerung ausgegraut und nicht auswählbar ist. Dies ist in vielen Situationen nützlich, in denen eine Option normalerweise verfügbar ist, nur nicht jetzt. Zum Beispiel könnte ein Produkt ausverkauft sein oder, wie in unserem Beispiel, sind die Penthouse-Suiten alle ausgebucht!

Sie können das `disabled`-Attribut bei jedem Formularelement setzen, einschließlich `<button>`-Elementen. `<fieldset>`-Elemente können auch das `disabled`-Attribut akzeptieren — dies bewirkt, dass jede Formsteuerung innerhalb des Feldsatzes deaktiviert wird.

Versuchen Sie, das `disabled`-Attribut auf den beiden `<fieldset>`-Elementen zu setzen, speichern und dann neu zu laden, um den Effekt zu sehen, den das hat. Entfernen Sie sie wieder, bevor Sie fortfahren.

### Kontrollkästchen

Unsere Selektoren "zu besuchende Kurse" werden mit [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) Steuerungen implementiert. Diese rendern als eine Gruppe von Ein-/Aus-Zustands-Kontrollkästchen. Im Gegensatz zu Radio-Buttons können Sie mehr als eines gleichzeitig auswählen.

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

Wie Sie aus den Codesnippets erkennen können, werden Radio-Buttons und Kontrollkästchen auf sehr ähnliche Weise implementiert (sie können auch `checked`-Attribute annehmen, um sie ausgewählt darzustellen, wenn die Seite geladen wird). Sie verhalten sich auch auf recht ähnliche Weise, außer dass Radio-Buttons es Ihnen ermöglichen, null oder ein Element aus vielen auszuwählen, während Kontrollkästchen es Ihnen ermöglichen, null oder mehr aus vielen auszuwählen.

Der Hauptunterschied (abgesehen vom `type`-Wert!) ist, dass jedes Kontrollkästchen einen anderen `name`-Wert hat, und sie haben in der Regel keine `value`-Attribute. Verhaltensmäßig bedeutet dies, dass sie unterschiedliche Datenwerte darstellen, während eine Radio-Button-Gruppe nur einen darstellt. Bei der Übermittlung wird jeder Wert mit einem Wert von `on` gesendet, wenn das Kontrollkästchen markiert war — `yoga=on`, `balloon=on` usw.

> [!NOTE]
> Es ist möglich, den gesendeten Wert für ein Kontrollkästchen durch Angabe eines `value`-Attributs zu ändern, zum Beispiel: `<input type="checkbox" id="yoga" name="yoga" value="yes" />` würde `yoga=yes` senden, wenn es markiert ist. Es gibt jedoch nicht viel Sinn darin. Ein Kontrollkästchen wird entweder mit einem einzigen Wert gesendet, wenn es markiert ist, oder es wird überhaupt nicht gesendet. Es spielt keine große Rolle, welcher Wert an den Server gesendet wird.

### Dropdown-Menüs

Dropdown-Menüs, zum Beispiel die Auswahl der "Wie kommen Sie hierher"-Steuerung in unserem Beispiel, werden nicht mit einem `<input>`-Typ implementiert, sondern mit den {{htmlelement("select")}} und {{htmlelement("option")}} Elementen:

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

Jeder mögliche Wert für das Datenelement wird durch ein `<option>`-Element dargestellt, das innerhalb des `<select>`-Elements verschachtelt ist. Jedes `<option>`-Element kann ein `value`-Attribut annehmen, das den zu sendenden Wert festlegt, wenn diese Option aus der Dropdown-Liste ausgewählt wird. Wenn Sie kein `value` angeben, wird der Text innerhalb der `<option></option>`-Tags als Wert verwendet.

> [!NOTE]
> Wenn Sie möchten, dass eine bestimmte Option beim Laden der Seite ausgewählt ist, können Sie dem entsprechenden `<option>`-Element ein `selected`-Attribut hinzufügen.

### Mehrzeilige Texteingabefelder

Mehrzeilige Texteingabefelder werden mit {{htmlelement("textarea")}}-Elementen erstellt:

```html
<label for="comments">Any other comments:</label>
<textarea id="comments" name="comments" rows="5" cols="33"></textarea>
```

Sie verhalten sich auf die gleiche Weise wie `<input type="text">`-Elemente, außer dass sie mehrzeiligen Text zulassen. Das `rows`-Attribut gibt die Anzahl der Zeilen an, die das Textfeld standardmäßig umfassen soll, während das `cols`-Attribut die Anzahl der Spalten angibt, die das Textfeld standardmäßig umfassen soll. Wenn sie nicht angegeben sind, werden die Werte `cols="20"` und `rows="2"` verwendet.

Die meisten Browser rendern Textbereiche mit einem Ziehgriff in einer Ecke, mit dem sie in der Größe verändert werden können. Versuchen Sie, dieses zu verwenden, um den Textbereich in unserem Demo zu vergrößern oder zu verkleinern.

## Formularvalidierung

Früher haben wir uns einige der grundlegenden clientseitigen Formularvalidierungen angeschaut, die vom Browser bereitgestellt werden. Das `required`-Attribut wird verwendet, um anzugeben, dass ein Feld ausgefüllt werden muss, bevor das Formular gesendet werden kann; es überprüft auch die korrekte Wertart für bestimmte Wertarten wie E-Mail-Adressen, URLs, Zahlen usw. Die Validierung ist aus zwei Hauptgründen wichtig:

- Sicherstellen, dass Daten im richtigen Format übermittelt werden, damit sie keine Fehler in Ihrer Anwendung verursachen.
- Sicherstellen, dass Daten keine Sicherheitsprobleme verursachen. Schlechte Menschen wissen, wie sie Daten gezielt formatieren können, damit sie auf unsicheren Anwendungen Befehle ausführen können, um Datenbanken zu löschen oder ein System zu übernehmen.

Formularvalidierung ist ein großes Thema, das über den Rahmen dieses Artikels hinausgeht, daher belassen wir es an dieser Stelle. Denken Sie nur daran, dass es zwei Arten von Formularvalidierung gibt:

- Clientseitige Validierung, die im Browser erfolgt und mit einer Kombination aus Formularvalidierungsattributen (wie `required`) und JavaScript implementiert wird. Clientseitige Validierung ist nützlich, um Benutzern sofortige Hinweise zu geben, wenn sie falsche Daten eingegeben haben. Sie ist jedoch nicht so effektiv beim Stoppen von böswilligen Daten. Es ist zu einfach, JavaScript auszuschalten oder clientseitigen Code so anzupassen, dass die Validierung nicht mehr funktioniert.
- Serverseitige Validierung, die auf dem Server erfolgt und mit der in dieser Anwendungssprache implementiert wird. Schlecht formulierte Nachrichten können versehentlich oder absichtlich an einen Server gesendet werden. Die allgemeine Weisheit ist, sicherzustellen, dass Ihr Server nichts vertraut, was ein Client sendet, um Bugs oder Sicherheitsprobleme zu verhindern, die durch fehlerhafte Nachrichten verursacht werden könnten. Serverseitige Validierung ist großartig zum Schutz vor böswilligen Nachrichten, da es schwieriger ist, den auf dem Server laufenden Code zu manipulieren. Die serverseitige Validierung ist nicht so gut darin, Benutzern Hinweise auf falsche Daten zu geben, da die Daten zur Validierung an den Server gesendet werden müssen, und das Ergebnis dann an den Client zurückgesendet werden muss, bevor der Benutzer benachrichtigt werden kann.

Kurz gesagt: Entscheiden Sie sich nicht zwischen der clientseitigen oder der serverseitigen Validierung - Sie benötigen beides. Sie benötigen die clientseitige Validierung, um den Benutzern Feedback zu ihren Eingaben zu geben, und die serverseitige Validierung, um sicherzustellen, dass Nachrichten in einem Format sind, das Ihr Server sicher verarbeiten kann. Wenn Sie mit der Validierung beginnen und mehr darüber erfahren möchten, ist ein guter Ausgangspunkt [Client-side form validation](/de/docs/Learn_web_development/Extensions/Forms/Form_validation).

## Zusammenfassung

Das ist alles für jetzt. Es gibt noch viel mehr über Formulare zu wissen, aber fürs Erste haben wir Ihnen genug Verständnis gegeben, um in Ihren Studien voranzukommen.

Als nächstes werden wir Ihnen einige Tests geben, die Sie verwenden können, um zu überprüfen, wie gut Sie die Informationen, die wir zu HTML-Formularen bereitgestellt haben, verstanden und gespeichert haben.

## Siehe auch

- [Web forms — Working with user data](/de/docs/Learn_web_development/Extensions/Forms)

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content/Test_your_skills/Forms_and_buttons", "Learn_web_development/Core/Structuring_content")}}
