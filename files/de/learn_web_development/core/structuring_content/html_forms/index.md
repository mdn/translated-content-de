---
title: Formulare und Schaltflächen in HTML
short-title: Formulare und Schaltflächen
slug: Learn_web_development/Core/Structuring_content/HTML_forms
l10n:
  sourceCommit: 30cb9ca54d74a63bd95e0e0f5281e9ade578c044
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content/Test_your_skills/Forms_and_buttons", "Learn_web_development/Core/Structuring_content")}}

HTML-Formulare und -Schaltflächen sind leistungsstarke Werkzeuge zur Interaktion mit den Benutzern einer Website. Üblicherweise bieten sie den Benutzern Steuerelemente, um eine Benutzeroberfläche (UI) zu manipulieren oder Daten einzugeben, wenn dies erforderlich ist.

In diesem Artikel bieten wir eine Einführung in die Grundlagen von Formularen und Schaltflächen. Es gibt viel mehr zu wissen — viele Eingabetypen und Formulareigenschaften werden nicht erwähnt — aber dieser Artikel wird Ihnen eine solide Grundlage für die meisten Fälle geben. Sie können die fortgeschrittene oder spezialisierte Nutzung nach Bedarf als Teil des ständigen Lernens, das Sie während Ihrer Karriere tun werden, erlernen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende HTML-Kenntnisse, wie sie in
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax">Grundlegende HTML-Syntax</a> behandelt werden. Textuelle Semantik wie <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs">Überschriften und Absätze</a> und <a href="/de/docs/Learn_web_development/Core/Structuring_content/Lists">Listen</a>. <a href="/de/docs/Learn_web_development/Core/Structuring_content/Structuring_documents">Strukturelles HTML</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Ein Verständnis dafür, dass Formulare und Schaltflächen zusammen mit Links die Hauptwerkzeuge für Benutzer sind, um mit einer Website zu interagieren.</li>
          <li>Unterschiedliche Schaltflächentypen.</li>
          <li>Gängige <code>&lt;input&gt;</code>-Typen.</li>
          <li>Gängige Attribute wie <code>name</code> und <code>value</code>.</li>
          <li>Das <code>&lt;form&gt;</code>-Element und die Grundlagen der Formularübertragung.</li>
          <li>Formulare zugänglich machen mit Labels und korrekter Semantik.</li>
          <li>Andere Steuerungstypen: <code>&lt;textarea&gt;</code>, <code>&lt;select&gt;</code> und <code>&lt;option&gt;</code>.</li>
          <li>Grundlagen der clientseitigen Validierung.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Interaktion mit Benutzern

Bisher im Kurs haben Sie einige Möglichkeiten gesehen, wie Benutzer mit dem Web interagieren können:

- [Links](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links) können verwendet werden, um zu verschiedenen Inhaltsabschnitten zu navigieren, entweder auf derselben Seite oder einer anderen Seite.
- [`<video>` und `<audio>`](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)-Elemente bieten in der Regel Steuerelemente wie Play/Pause, Vor- und Zurückspulen usw., mit denen Benutzer Medieninhalte nach Belieben konsumieren können.

Diese Funktionen bieten jedoch tendenziell eine einseitige Interaktion, bei der Benutzer Inhalte passiv konsumieren. Das ist in Ordnung, aber das Web ist eine zweiseitige Erfahrung. Webseitenbenutzer legen Präferenzen fest, wie sie Inhalte und Dienste erleben möchten. Sie bestellen Taxis und fordern Rückrufe an. Sie geben Feedback und beschweren sich. Sie kaufen Produkte und lassen sie sich nach Hause liefern.

Um diese zweiseitige Erfahrung zu bieten, müssen Sie Schaltflächen und Formulare verwenden.

Schaltflächen werden normalerweise mit HTML-{{htmlelement("button")}}-Elementen erstellt (sie werden manchmal auch mit {{htmlelement("input")}}-Elementen erstellt, deren `type`-Attribute auf einen Wert wie `button` oder `submit` gesetzt sind). Diese Druckknöpfe sind Allzweck-Schaltflächen — Sie können sie an eine beliebige Funktionalität koppeln, die Sie wollen, begrenzt nur durch Ihre Fantasie und Ihre Programmierfähigkeiten.

Formulare werden mit Elementen wie {{htmlelement("form")}}, {{htmlelement("label")}}, {{htmlelement("input")}} und {{htmlelement("select")}} erstellt. Formularelemente können verwendet werden, um komplexere Steuerelemente zu erstellen, als es einfache Schaltflächen erlauben — zum Beispiel ein Dropdown-Menü mit mehreren Optionen, aus denen Sie zwischen verschiedenen Themen für ein Benutzeroberflächenelement wählen können.

Entscheidend ist jedoch, dass sie auch verwendet werden können, um Formulare zu erstellen, die Benutzer ausfüllen müssen, wenn sie Informationen an einen Website-Server übermitteln müssen. Denken Sie an E-Commerce-Sites — wenn Sie nach einem Produkt suchen möchten, das Sie kaufen möchten, verwenden Sie ein Formular, um Suchbegriffe einzugeben. Wenn Sie einige Artikel bezahlen und die Lieferung abschließen möchten, verwenden Sie ein Formular, um Ihre Postanschrift einzugeben, und ein weiteres Formular, um Ihre Kreditkartendaten einzugeben.

Wir konzentrieren uns hauptsächlich darauf — die traditionellere — Verwendung von Formularelementen in diesem Artikel. Beachten Sie, dass Schaltflächen in Formularen häufig verwendet werden, um die eingegebenen Daten an den Server zu senden.

Nachdem diese wichtige Theorie geklärt ist, wollen wir den Code erkunden und sehen, wie Schaltflächen und Formulare implementiert werden.

## Schaltflächen

Wie oben angedeutet, haben Schaltflächen einige Hauptverwendungszwecke im Internet. Zunächst werden sie verwendet, um Funktionen auszulösen, was nützlich ist, wenn man Benutzeroberflächensteuerungen erstellt. Die einfachste Schaltfläche wird mit dem folgenden Code implementiert:

```html live-sample___basic-button
<button>Press me</button>
```

Dies wird wie folgt gerendert:

{{EmbedLiveSample("basic-button", "100%", "60")}}

Der Text, der zwischen den `<button></button>`-Tags erscheint, wird innerhalb der Schaltfläche gerendert und erhält vom Browser ein grundlegendes Styling, damit er standardmäßig wie eine Schaltfläche aussieht und sich verhält. So weit, so gut. Es gibt jedoch ein Problem — unsere einsame Schaltfläche wird alleine nichts Sinnvolles tun. Um sie sinnvoll zu machen, müssen Sie sie in ein Formular einfügen (was wir später behandeln werden) oder etwas JavaScript hinzufügen.

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

würde es Ihnen die folgende Ausgabe geben — versuchen Sie, darauf zu klicken:

{{EmbedLiveSample("basic-button-with-js", "100%", "60")}}

Es wird nicht erwartet, dass Sie jetzt verstehen, wie das JavaScript funktioniert. Sie werden später im Kurs mehr darüber lernen.

Im nächsten Abschnitt sehen Sie eine Demonstration der zweiten Hauptverwendung von Schaltflächen — das Übermitteln von Formularen.

## Die Anatomie eines Formulars

Ein einfaches Formular enthält drei Dinge:

- Ein {{htmlelement("form")}}-Element, das den gesamten anderen Formularinhalt umschließt. Alle Formularsteuerungen innerhalb der `<form></form>`-Tags sind Teil desselben Formulars, und ihre Daten werden gesammelt, wenn das Formular übermittelt wird.
- Ein oder mehrere Paare, die jeweils aus einem {{htmlelement("label")}}-Element und einem Formulareingabeelement bestehen (meistens ein {{htmlelement("input")}}-Element, aber es gibt auch andere Typen, wie zum Beispiel {{htmlelement("select")}}):
  - Das Formulareingabeelement ermöglicht es dem Benutzer, einige Daten auszuwählen oder einzugeben, die an den Server gesendet werden, wenn das Formular übermittelt wird.
  - Das `<label>`-Element liefert ein identifizierendes Label, das mit der Formulareingabe verknüpft ist und die Daten beschreibt, die darin eingegeben werden sollen.
- Ein {{htmlelement("button")}}-Element, das zur Übermittlung des Formulars verwendet wird.

Schauen wir uns ein einfaches Beispiel an, das die oben genannten drei Elemente enthält. Dieses Formular könnte verwendet werden, um nach dem Namen und der E-Mail eines Benutzers zu fragen, um ihn für einen Newsletter anzumelden (keine Sorge — es ist mit keinem Server verbunden, sodass es derzeit nichts bewirken wird).

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

Wenn Sie sofort auf "Sign me up!" klicken, sehen Sie einen Validierungsfehler, weil keine Daten eingegeben wurden. Wenn Sie die Felder mit einem Namen und einer E-Mail-Adresse ausfüllen und dann auf "Sign me up!" klicken, erhalten Sie eine `404`-Fehlermeldung.

Wir werden später erklären, warum. Bevor Sie fortfahren, kopieren Sie die vorherige HTML-Codeauflistung in eine neue HTML-Datei mit Ihrem [Code-Editor](/de/docs/Learn_web_development/Getting_started/Environment_setup/Code_editors) und öffnen Sie sie in einer neuen Browser-Registerkarte.

### Das `<form>`-Element

Wie wir bereits gesagt haben, fungiert das {{htmlelement("form")}}-Element als äußerer Wrapper für das Formular und gruppiert alle Formularsteuerungen darin zusammen. Wenn die `<button>`-Taste gedrückt wird, werden alle von den Formulareingaben dargestellten Daten an den Server gesendet. Das `<form>`-Element kann viele Attribute enthalten, aber die beiden wichtigsten, die wir in unserem Beispiel aufgenommen haben, sind wie folgt:

- `action`: Enthält einen Pfad zur Seite, an die wir die übermittelten Formulardaten zur Verarbeitung senden möchten. Später, nach dem Absenden des Formulars, sehen Sie `/submit_page` in der URL enthalten. Sie werden auch eine {{HTTPStatus("404")}}-Fehlerantwort erhalten, da die Seite tatsächlich nicht existiert, aber das ist für jetzt in Ordnung.
- `method`: Gibt die Datenübertragungsmethode an [method](/de/docs/Web/HTTP/Reference/Methods), die Sie zum Senden der Formulardaten an den Server verwenden möchten. Machen Sie sich darüber im Moment keine großen Sorgen; Der Wert "get" bewirkt, dass die Daten als Parameter am Ende der URL gesendet werden.

#### Überprüfung der übermittelten Daten

1. Gehen Sie zum Beispiel in der separaten Registerkarte und versuchen Sie, einen Namen wie "Bob" und eine E-Mail-Adresse wie "bob@bob.com" einzugeben.
2. Drücken Sie die `<button>`-Taste.

Die `action`- und `method`-Attribute führen dazu, dass die Formulardaten in einer URL ähnlich der folgenden übermittelt werden:

```plain
/some/url/submit_page?name=Bob&email=bob%40bob.com
```

#### Formulare strukturieren

Sie können beliebige HTML-Elemente innerhalb eines `<form>`-Elements einfügen, um die Formularelemente selbst zu strukturieren und Container bereitzustellen, die mit CSS zum Stylen usw. angesprochen werden können.

In unserem Beispiel haben wir ein [Überschriftenelement](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) (`<h2>`) aufgenommen, um den Zweck des Formulars zu beschreiben.

Wir haben auch jedes Eingabe-/Label-Paar und die Absenden-Schaltfläche in ein separates {{htmlelement("p")}} gesetzt, sodass jedes in einer eigenen Zeile erscheint. Diese Elemente sind standardmäßig inline, was bedeutet, dass sie alle in derselben Zeile sitzen würden, wenn wir dies nicht tun würden.

Dies ist ein häufiges Muster für die Formularstrukturierung. Einige Leute verwenden `<p>`-Elemente, um ihre Formularelemente voneinander zu trennen, andere verwenden {{htmlelement("div")}}, {{htmlelement("section")}} oder sogar {{htmlelement("li")}}-Elemente. Es spielt keine große Rolle, solange die verwendeten Elemente semantischen Sinn ergeben. Zum Beispiel macht es Sinn, Formularelementgruppen in separate Absätze oder Abschnitte von Inhalten zu unterteilen oder sogar Elemente in einer Liste. Es wäre weniger sinnvoll, sie als [Blockzitate](/de/docs/Web/HTML/Reference/Elements/blockquote), [Nebenelemente](/de/docs/Web/HTML/Reference/Elements/aside) oder [Adressen](/de/docs/Web/HTML/Reference/Elements/address) darzustellen.

Es gibt ein spezialisiertes Element zum Gruppieren von Formularelementen, das {{htmlelement("fieldset")}} genannt wird. Dies ist in bestimmten Situationen nützlich, z. B. in komplexen Formularen und beim Gruppieren mehrerer Kontrollkästchen und Radiobuttons. Später werden wir ein paar `<fieldset>`-Beispiele ansehen.

### `<input>`-Elemente

Die {{htmlelement("input")}}-Elemente repräsentieren die verschiedenen Datenelemente, die in das Formular eingegeben werden. Sehen wir uns ein Beispiel aus unserem Basisformular an:

```html
<input type="text" name="name" id="name" required />
```

Die Attribute sind wie folgt:

- `type`: Gibt den Typ des Formularelementes an, das erstellt werden soll. Es gibt viele verschiedene Typen von Formularelementen, von einfachen Textfeldern unterschiedlicher Art bis hin zu Radiobuttons, Checkboxen und mehr. Der Typ "text" rendert ein einfaches Textfeld, das jeden Wert akzeptieren kann.
- `name`: Gibt einen Namen für das Datenelement an. Wenn das Formular übermittelt wird, werden die Daten in Name/Wert-Paaren gesendet. In jedem Fall ist der Name gleich dem Wert des `name`-Attributs, und der Wert entspricht dem im Textfeld eingegebenen Text.
- `id`: Gibt eine ID an, die zur Identifizierung des Elements verwendet werden kann. In diesem Fall wird es verwendet, um das Formularelement mit seinem `<label>` zu verknüpfen.
- `required`: Gibt an, dass ein Wert in das Formularelement eingegeben werden muss, bevor das Formular übermittelt werden kann. Dies sollte nur bei Eingaben festgelegt werden, die erforderlich sind, nicht bei optionalen Feldern.

Sie sollten wissen, dass einige Eingabetypen ihre Werte normalerweise nicht aus einem in ein Feld eingegebenen Text beziehen. Zum Beispiel rendert `<input type="color">` ein Farbwähl-Widget, aus dem Sie eine Farbe auswählen können, während `<input type="radio">` ein Radiobutton-Element rendert, das ausgewählt oder nicht ausgewählt werden kann.

Im Fall von Radiobuttons müssen Sie in der Regel den Wert, der übermittelt werden soll, falls er ausgewählt wird, in einem bestimmten `value`-Attribut angeben. Beachten Sie, dass Sie _können_ ein `value`-Attribut bei Eingabetypen wie "text" und "color" angeben — die Auswirkung ist, dass der Wert in das Formularfeld vorab ausgefüllt wird, wenn es zuerst gerendert wird.

#### `required`- und `value`-Attribute in Aktion

1. Gehen Sie erneut zu dem geladenen Beispiel in einer separaten Registerkarte und versuchen Sie, das Formular ohne Eingabe eines Wertes in einem der Felder zu übermitteln. Sie werden eine Fehlermeldung neben dem Feld "Name" sehen, in der etwas steht wie "Please fill in this field" (es variiert je nach verwendetem Browser). Dies ist das `required`-Attribut — und die standardmäßige clientseitige Formularvalidierung des Browsers — in Aktion.
2. Jetzt versuchen Sie, das Formular mit einem gültigen Namen im ersten Feld einzugeben, aber einem Wert, der keine gültige E-Mail-Adresse im zweiten Feld ist (etwas wie "aaaa" genügt). Dieses Mal sehen Sie eine Fehlermeldung neben dem Feld "Email", in der etwas steht wie "Please enter an email address".
3. Versuchen Sie, das Formular so zu bearbeiten, dass `value="Bob"` im ersten Eingabefeld enthalten ist. Wenn Sie den Code neu laden, werden Sie sehen, dass das erste Feld standardmäßig den Wert "Bob" enthält.

#### Spezialisierte Textfeldeingaben

Die zweite Übung oben wirft einen interessanten Punkt auf. Das zweite Eingabefeld erwartet speziell eine E-Mail-Adresse und validiert die eingegebenen Werte entsprechend. Wenn Sie den Formularcode erneut ansehen, werden Sie sehen, warum — das zweite `<input>` hat einen `type` von `email`. Es gibt mehrere spezialisierte Textfeldeingabetypen, die für spezifische Datentypen entworfen wurden — `<input type="number">`, `<input type="password">`, `<input type="tel">`, usw.

Folgen Sie einigen der obigen Links, um herauszufinden, wofür diese Eingabetypen verwendet werden. Schauen Sie sich unsere [`<input>`](/de/docs/Web/HTML/Reference/Elements/input)-Referenz an und sehen Sie, ob Sie noch mehr spezialisierte Textfeldeingabetypen finden können.

### `<label>`-Elemente

Wie wir oben schon gesagt haben, liefern {{htmlelement("label")}}-Elemente identifizierende Labels, die mit Formularelementen verknüpft sind und die Daten beschreiben, die in sie eingegeben werden sollen. Sie können beliebigen Textinhalt in `<label>`-Elemente einfügen, aber sie sollten genau beschreiben, welche Daten das zugeordnete Formularelement erwartet. Die Zuordnung wird erstellt, indem man dem Formularelement ein `id`-Attribut gibt und dann das `<label>`-Element mit einem `for`-Attribut versehen wird, das den gleichen Wert wie die `id` des Steuerelements hat.

Zum Beispiel:

```html
<label for="name">Name (required):</label>
<input type="text" name="name" id="name" required />
```

`<label>`-Elemente sind aus mehreren Gründen wichtig, insbesondere weil:

- Wenn sehbehinderte Benutzer einen Bildschirmleser verwenden, um ihnen beim Lesen und Interagieren mit Webseiteninhalten zu helfen, liest der Bildschirmleser den zugeordneten Labeltext vor, wenn sich ein Steuerelement im Fokus befindet. dies erleichtert es den Benutzern zu verstehen, welche Inhalte in jedes Steuerelement eingegeben werden sollen.
- Sie ermöglichen es Ihnen, die Formularelemente durch Klicken auf ihren Labeltext sowie die Steuerelemente selbst in den Fokus zu setzen. Dies ist besonders nützlich für mobile Benutzer, bei denen es schwierig sein kann, ein Formularelement genau mit dem Finger auf einem Touchscreen auszuwählen. Die Vergrößerung des **Trefferbereichs** ist in solchen Situationen nützlich.

#### Explizite und implizite Formulareingabelabels

Der oben gezeigte Formulareingabelabelstil wird als **explizites Formulareingabelabel** bezeichnet — die Zuordnung zwischen Steuerelement und Label wird explizit über die `id`- und `for`-Attribute hergestellt. Sie können auch ein **implizites Formulareingabelabel** implementieren, indem Sie das Steuerelement innerhalb des Labels verschachteln, wie folgt:

```html
<label>
  Name (required):
  <input type="text" name="name" required />
</label>
```

Die Verschachtelung erzeugt eine implizite Zuordnung zwischen Steuerelement und Label, und Sie benötigen nicht mehr die `id`- und `for`-Attribute.

Jeder Ansatz ist in Ordnung, aber wir würden empfehlen, die explizite Labeling-Methode zu verwenden. Dies liegt daran, dass die explizite Zuordnung in der Regel einfacher zu identifizieren und zu verstehen ist, insbesondere wenn Ihr HTML-Code komplexer wird. Darüber hinaus verarbeiten Bildschirmleser (und andere unterstützende Technologien) nicht immer implizite Labels korrekt.

Sie können mehr über Best Practices zur Formulareingabelabels in [HTML Inputs and Labels: A Love Story](https://css-tricks.com/html-inputs-and-labels-a-love-story/), csstricks.com (2021) lesen.

### Das `<button>`-Element

Wenn ein {{htmlelement("button")}}-Element innerhalb eines `<form>`-Elements enthalten ist, besteht seine Standardfunktion darin, das Formular zu übermitteln, vorausgesetzt, es sind keine ungültigen Daten vorhanden, die die Übermittlung durch die clientseitige Formularvalidierung blockieren. Dieses Verhalten haben Sie bereits beim Spielen mit unserem Basisformbeispiel oben gesehen.

Es gibt andere Schaltflächenverhalten, die über das `type`-Attribut des `<button>`-Elements angegeben werden können:

- `<button type="submit">` erklärt explizit, dass eine Schaltfläche wie eine Absende-Schaltfläche funktionieren soll. Sie müssen dies nicht wirklich deklarieren, es sei denn, Sie haben aus irgendeinem Grund andere Schaltflächen in Ihrem `<form>` enthalten, und Sie möchten klarstellen, welche die Abschicken-Schaltfläche ist. Dies wird sehr selten vorkommen.
- `<button type="reset">` erstellt eine _Zurücksetzen-Schaltfläche_ — das löscht sofort alle Daten aus dem Formular und setzt es in seinen Ausgangszustand zurück. **Verwenden Sie keine Zurücksetzen-Schaltflächen** — sie waren in den frühen Tagen des Webs beliebt, sind aber in der Regel nerviger als hilfreich. Die meisten Leute haben erlebt, ein langes Formular auszufüllen, nur um versehentlich auf die Zurücksetzen- statt auf die Abschicken-Schaltfläche zu klicken, was bedeutet, dass sie von vorne anfangen müssen.
- `<button type="button">` erstellt eine Schaltfläche mit demselben Verhalten wie Schaltflächen, die außerhalb von `<form>`-Elementen angegeben sind. Wie wir zuvor gesehen haben, tun sie standardmäßig absolut nichts und benötigen JavaScript, um ihnen Funktionalität zu geben.

Obwohl Sie diese Schaltflächentypen erstellen können, indem Sie ein `<input>`-Element mit denselben `type`-Werten verwenden – wie [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit), [`<input type="reset">`](/de/docs/Web/HTML/Reference/Elements/input/reset) und [`<input type="button">`](/de/docs/Web/HTML/Reference/Elements/input/button) – haben sie viele Nachteile im Vergleich zu ihren `<button>`-Gegenstücken. Daher sollten Sie `<button>` verwenden.

> [!NOTE]
> Scrimba<sup>[_MDN learning partner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> bietet eine kostenlose Lektion an — [The very basics of forms](https://scrimba.com/learn-responsive-web-design-c029/~031?via=mdn) — die eine nützliche interaktive Wiederholung der zuvor in diesem Artikel behandelten Grundlagen von Formularen bietet.

## Ein Exkurs zur Zugänglichkeit

Wir haben bereits über die Bedeutung von Formulareingabelabels für die Zugänglichkeit gesprochen, aber wir wollten auch einige Kommentare zur allgemeinen Bedeutung der Verwendung der korrekten semantischen Elemente bei der Erstellung von Formularen einfügen (zum Beispiel verwenden Sie eine `<button>`, um Ihr Formular abzusenden und nicht ein `<div>`, das programmiert wurde, um wie eine `<button>` zu funktionieren). Es ist durchaus möglich, eine Kombination aus CSS und JavaScript zu verwenden, um fast jedes HTML-Element so aussehen und verhalten zu lassen wie ein Formularelement. Entwickler tun dies normalerweise aus gestalterischen Gründen — einige Formularelemente sind schwer zu gestalten.

Wenn Sie dies jedoch tun, machen Sie sich das Leben schwerer und auch Ihren Benutzern. Der Browser bietet mehrere Funktionen für `<button>`- und Formularelemente standardmäßig an, ohne dass JavaScript oder anderer zusätzlicher Code erforderlich ist, um Formulare für alle Benutzer benutzerfreundlicher zu machen.

Zum Beispiel:

- Semantische Elemente werden von unterstützender Technologie wie Bildschirmlesern verstanden, die ihre Bedeutung für Benutzer kommunizieren, die sie nicht sehen können.
- Formularelemente und Schaltflächen sind standardmäßig tastaturzugänglich. Im vorherigen Beispiel versuchen Sie, mit <kbd>Tab</kbd> und <kbd>Shift</kbd> + <kbd>Tab</kbd> (sogenanntes "Tabbing") vorwärts und rückwärts zwischen den Formularelementen zu wechseln.
- Beachten Sie auch, wie das Tabben zwischen den Formularelementen dazu führt, dass das fokussierte Element mit einem blauen Umriss hervorgehoben wird (genannt **Fokusumriss**). Dies ist ein wichtiges Feature für Tastaturnutzer, um zu wissen, wo sie sich gerade im Formular befinden.

Wenn Sie nicht die richtigen semantischen Elemente verwenden, um Ihre Formulare zu implementieren, müssen Sie all diese Funktionalität neu implementieren, sonst verhalten sich Ihre Formularelemente nicht wie erwartet und erscheinen daher defekt. Es summiert sich alles.

## Andere Steuerungstypen

Es gibt viele andere Steuerungstypen, die Sie verwenden können, um Daten in einem Formular zu sammeln. Schauen wir uns ein etwas komplexeres Beispiel an und dann werden wir es untersuchen und erklären.

> [!NOTE]
> In diesem Beispiel gehen wir davon aus, dass der Benutzer bereits registriert und angemeldet ist, daher müssen keine Details wie Name und E-Mail abgefragt werden.

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

Wir empfehlen Ihnen, dieses Beispiel in einem separaten Browser-Tab zu öffnen, während Sie die nächsten Abschnitte durchgehen, in denen wir jeden Steuerungstyp der Reihe nach anschauen. Um dies zu erreichen, kopieren Sie den Code in eine HTML-Datei mit Ihrem Code-Editor und öffnen Sie sie in einem Browser-Tab.

Bevor Sie fortfahren, spielen Sie mit den verschiedenen Formularelementen in Ihrer lokalen Kopie und wählen Sie einige Werte aus. Versuchen Sie, das Formular zu übermitteln und sehen Sie, wie die gesendeten Daten in der URL aussehen.

### Radiobuttons

Die Schaltflächen "Zimmerkategorie auswählen" werden mit [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio)-Steuerungen implementiert. Diese werden als eine Reihe von Druckschaltflächen gerendert, bei denen nur eine der Reihe gleichzeitig ausgewählt werden kann — Sie können nicht mehr als eine gleichzeitig auswählen. Sie sind benannt nach den Tasten, die auf altmodischen Radios zu finden sind, bei denen Sie eine Taste drücken und die zuvor ausgewählte herausspringt.

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

´radio´-Eingabetypen funktionieren meist wie ´text´-Eingabetypen, jedoch mit einigen Unterschieden:

- Die `name`-Attribute für jede Gruppe von Radiobuttons müssen denselben Wert enthalten, um sie als eine Gruppe zusammenzufassen. Wenn sie unterschiedliche Werte enthalten, sind sie effektiv separate Gruppen mit unterschiedlichen Werten bei der Übermittlung.
- Sie müssen ein `value`-Attribut enthalten, das den zu übermittelnden Wert für jede Radio-Schaltfläche angibt. Der übermittelte Wert wird ein Name/Wert-Paar sein, aber der Name wird immer derselbe sein, zum Beispiel `hotel=economy` oder `hotel=superior`.
- Das `<label>` für jede Radio-Schaltfläche sollte diese bestimmte Wertauswahl beschreiben, anstatt den Gesamtwert, den Sie auswählen. Der bevorzugte Weg, bietet eine Beschreibung der Gesamtwertauswahl, besteht darin, sie in ein {{htmlelement("fieldset")}}-Element einzuwickeln, das ein {{htmlelement("legend")}}-Element als Kind enthält, das die Beschreibung enthält.

> [!NOTE]
> Neben der Strukturierung und Beschriftung von Formularen haben Fieldsets weitere Verwendungen, wie zum Beispiel [Deaktivieren](#deaktivieren_von_formularelementen) eines gesamten Satzes von Steuerungen als eine Einheit.

Es ist auch erwähnenswert, dass wir das `checked`-Attribut auf die erste Radio-Schaltfläche angewendet haben — dies bewirkt, dass es beim ersten Laden der Seite ausgewählt wird. Das bedeutet, dass immer eine Option ausgewählt wird und Sie eine Radio-Schaltfläche nicht abwählen können, ohne eine andere auszuwählen.

Versuchen Sie, das `checked`-Attribut aus der ersten Radio-Schaltfläche zu entfernen, speichern Sie und laden Sie erneut, um den Effekt zu sehen, den es hat. Legen Sie es wieder an, bevor Sie fortfahren.

#### Deaktivieren von Formularelementen

Im Beispiel der Radio-Schaltflächen werden Sie bemerken, dass die dritte Radio-Schaltfläche das `disabled`-Attribut eingestellt hat. Dies bewirkt, dass die gerenderte Steuerung ausgegraut und nicht auswählbar ist. Dies ist in vielen Situationen nützlich, in denen eine Option normalerweise verfügbar ist, nur nicht in diesem Moment. Zum Beispiel könnte ein Produkt nicht vorrätig sein oder, wie in unserem Beispiel, sind die Penthouse-Suiten alle ausgebucht!

Sie können das `disabled`-Attribut auf jedes Formularelement einstellen, einschließlich `<button>`-Elemente. `<fieldset>`-Elemente können auch das `disabled`-Attribut akzeptieren — dies bewirkt, dass jede Formularelement innerhalb des Fieldsets deaktiviert wird.

Versuchen Sie, das `disabled`-Attribut auf die beiden `<fieldset>`-Elemente zu setzen, speichern Sie und laden Sie erneut, um den Effekt zu sehen, den es hat. Entfernen Sie sie wieder, bevor Sie fortfahren.

### Kontrollkästchen

Unsere "Klassen, die besucht werden sollen"-Auswahlen werden mit [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox)-Steuerungen implementiert. Diese werden als eine Reihe von An/Aus-Zustand-Kontrollkästchen gerendert. Im Gegensatz zu Radio-Schaltflächen können Sie mehr als eine gleichzeitig auswählen.

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

Wie Sie aus den Code-Snippets sehen können, sind Radio-Schaltflächen und Kontrollkästchen auf sehr ähnliche Weise implementiert (sie können auch `checked`-Attribute haben, um sie als vorausgewählt zu rendern, wenn die Seite geladen wird). Sie verhalten sich auch auf ziemlich ähnliche Weise, außer dass Radio-Schaltflächen es Ihnen ermöglichen, null oder ein Element aus vielen auszuwählen, und Kontrollkästchen es Ihnen ermöglichen, null oder mehr Elemente aus vielen auszuwählen.

Der Hauptunterschied (abgesehen vom `type`-Wert!) besteht darin, dass jedes Kontrollkästchen einen anderen `name`-Wert hat, und sie haben in der Regel keine `value`-Attribute. Vom Verhalten her bedeutet dies, dass sie verschiedene Datenwerte repräsentieren, während ein Radio-Schaltflächensatz nur einen repräsentiert. Bei der Übermittlung wird jeder Wert mit einem Wert von `on` übermittelt, wenn das Kontrollkästchen markiert wurde — `yoga=on`, `balloon=on` usw.

> [!NOTE]
> Es ist möglich, den übermittelten Wert für ein Kontrollkästchen durch Hinzufügen eines `value`-Attributs zu ändern, zum Beispiel: `<input type="checkbox" id="yoga" name="yoga" value="yes" />` würde beim Markieren `yoga=yes` übermitteln. Es gibt jedoch keinen großen Grund, dies zu tun. Ein Kontrollkästchen wird entweder mit einem einzigen Wert übermittelt, wenn es markiert ist, oder es wird überhaupt nicht übermittelt. Es spielt wirklich keine Rolle, welcher Wert an den Server gesendet wird.

### Dropdown-Menüs

Dropdown-Menüs, wie das "Wie kommen Sie hierher"-Steuerelement in unserem Beispiel, werden nicht mit einem `<input>`-Typ implementiert, sondern mit den {{htmlelement("select")}}- und {{htmlelement("option")}}-Elementen:

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

Das `<select>`-Element umschließt alle verschiedenen Wertauswahlen. Hier legen Sie das `id`-Attribut fest, das die Steuerung mit ihrem Label verknüpft, und das `name`-Attribut, das den Namen des Datenelements festlegt, das übermittelt werden soll.

Jede mögliche Wertauswahl für das Datenelement wird durch ein `<option>`-Element dargestellt, das innerhalb des `<select>`-Elements verschachtelt ist. Jedes `<option>`-Element kann ein `value`-Attribut haben, das den Wert angibt, der beim Auswählen dieser Option aus der Dropdown-Liste übermittelt werden soll. Wenn kein `value` angegeben ist, wird der Text innerhalb der `<option></option>`-Tags als Wert verwendet.

> [!NOTE]
> Wenn Sie möchten, dass eine bestimmte Option beim Laden der Seite ausgewählt ist, können Sie ein `selected`-Attribut zu dem entsprechenden `<option>`-Element hinzufügen.

### Mehrzeilige Texteingabefelder

Mehrzeilige Texteingabefelder werden mit {{htmlelement("textarea")}}-Elementen erstellt:

```html
<label for="comments">Any other comments:</label>
<textarea id="comments" name="comments" rows="5" cols="33"></textarea>
```

Sie verhalten sich auf die gleiche Weise wie `<input type="text">`-Elemente, außer dass sie die Eingabe von mehreren Textzeilen ermöglichen. Das `rows`-Attribut gibt an, wie viele Zeilen hoch das Textgebiet standardmäßig sein wird, während das `cols`-Attribut angibt, wie viele Spalten breit das Textgebiet standardmäßig sein wird. Wenn sie nicht angegeben sind, werden die Werte `cols="20"` und `rows="2"` verwendet.

Die meisten Browser rendern Textgebiete mit einem Ziehgriff in einer Ecke, mit dem es in der Größe verändert werden kann. Versuchen Sie, dies zu verwenden, um das Textgebiet in unserem Demo zu skalieren.

## Formularvalidierung

Früher haben wir einige der grundlegenden clientseitigen Formularvalidierungen betrachtet, die der Browser bereitstellt. Das `required`-Attribut wird verwendet, um anzugeben, dass ein Feld ausgefüllt werden muss, bevor das Formular übermittelt werden kann; es überprüft auch, ob der richtige Werttyp für bestimmte Wertypen wie E-Mail-Adressen, URLs, Zahlen usw. eingegeben wird. Die Validierung ist aus zwei Hauptgründen wichtig:

- Sicherstellen, dass Daten im richtigen Format übermittelt werden, sodass sie in Ihrer Anwendung keine Fehler verursachen.
- Sicherstellen, dass Daten keine Sicherheitsprobleme verursachen. Böse Menschen wissen, wie man Daten in einem bestimmten Format sendet, sodass sie auf unsicheren Anwendungen Befehle zur Löschung von Datenbanken ausführen oder ein System übernehmen können.

Die Formularvalidierung ist ein riesiges Thema, das über den Umfang dieses Artikels hinausgeht, daher belassen wir es hier für jetzt. Beachten Sie jedoch, dass es zwei Arten der Formularvalidierung gibt:

- Clientseitige Validierung, die im Browser erfolgt, implementiert durch eine Kombination aus Formularvaliderungsattributen (wie `required`) und JavaScript. Clientseitige Validierung ist nützlich, um Benutzern sofortige Hinweise zu geben, wenn sie falsche Daten eingegeben haben, aber ist nicht so effektiv beim Verhindern, dass böswillige Daten durchkommen. Es ist zu einfach, JavaScript auszuschalten oder den clientseitigen Code so zu ändern, dass die Validierung nicht mehr funktioniert.
- Serverseitige Validierung, die auf dem Server erfolgt, implementiert mit welcher Sprache der Server auch immer verwendet. Schlecht geformte Nachrichten können versehentlich oder absichtlich an einen Server gesendet werden. Konventionelle Weisheit besagt, dass Ihr Server nichts von dem vertrauen sollte, was ein Client sendet, um Fehler oder Sicherheitsprobleme zu vermeiden, die durch fehlerhafte Nachrichten verursacht werden. Serverseitige Validierung ist großartig, um böswillige Nachrichten zu stoppen, da es schwer ist, den auf dem Server laufenden Code zu manipulieren. Serverseitige Validierung ist nicht so gut beim Bereitstellen von Benutzerhinweisen über falsche Daten, da Daten zum Server gesendet werden müssen, um validiert zu werden, dann muss das Ergebnis an den Client zurückgesendet werden, bevor der Benutzer benachrichtigt werden kann.

Kurz gesagt, entscheiden Sie sich nicht zwischen der Verwendung von clientseitiger und serverseitiger Validierung - Sie werden beides benötigen. Sie benötigen clientseitige Validierung, um den Benutzern Feedback zu ihren Eingaben zu geben, und serverseitige Validierung, um sicherzustellen, dass Nachrichten in einem Format sind, mit dem Ihr Server sicher umgehen kann. Wenn Sie mehr über Validierung lernen möchten, ist ein guter Ausgangspunkt [Client-side form validation](/de/docs/Learn_web_development/Extensions/Forms/Form_validation).

## Zusammenfassung

Das war alles für jetzt. Es gibt noch viel mehr über Formulare zu wissen, aber im Moment haben wir Ihnen genug Verständnis gegeben, um in Ihrem Studium weiterzukommen.

Als nächstes werden wir Ihnen einige Tests geben, mit denen Sie überprüfen können, wie gut Sie die Informationen zu HTML-Formularen verstanden und behalten haben.

## Siehe auch

- [Web forms — Working with user data](/de/docs/Learn_web_development/Extensions/Forms)

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content/Test_your_skills/Forms_and_buttons", "Learn_web_development/Core/Structuring_content")}}
