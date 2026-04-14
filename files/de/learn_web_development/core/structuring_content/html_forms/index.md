---
title: Formulare und Buttons in HTML
short-title: Formulare und Buttons
slug: Learn_web_development/Core/Structuring_content/HTML_forms
l10n:
  sourceCommit: e83a94ff7da81e42f1b192016d7ab3054bf38874
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content/Test_your_skills/Forms_and_buttons", "Learn_web_development/Core/Structuring_content")}}

HTML-Formulare und -Buttons sind leistungsstarke Werkzeuge, um mit den Benutzern einer Website zu interagieren. Am häufigsten bieten sie Benutzern Steuerelemente, um eine Benutzeroberfläche (UI) zu manipulieren oder bei Bedarf Daten einzugeben.

In diesem Artikel bieten wir eine Einführung in die Grundlagen von Formularen und Buttons. Es gibt noch viel mehr zu wissen – viele Eingabetypen und Formularfunktionen werden nicht erwähnt – aber dieser Artikel gibt Ihnen eine solide Basis für die meisten Fälle. Sie können die fortgeschrittenen oder spezialisierten Verwendungszwecke nach Bedarf erlernen, während Sie sich kontinuierlich weiterbilden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML, wie sie in
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        > abgedeckt sind. Textebene Semantik wie <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
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
          <li>Ein Verständnis dafür, dass Formulare und Buttons neben Links die Hauptwerkzeuge für Benutzer sind, um mit einer Website zu interagieren.</li>
          <li>Verschiedene Button-Typen.</li>
          <li>Gängige <code>&lt;input&gt;</code>-Typen.</li>
          <li>Gängige Attribute wie <code>name</code> und <code>value</code>.</li>
          <li>Das <code>&lt;form&gt;</code>-Element und die Grundlagen der Formularübermittlung.</li>
          <li>Formulare barrierefrei machen mit Labels und korrekter Semantik.</li>
          <li>Andere Kontrolltypen: <code>&lt;textarea&gt;</code>, <code>&lt;select&gt;</code>, und <code>&lt;option&gt;</code>.</li>
          <li>Grundlagen der clientseitigen Validierung.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Interaktion mit Benutzern

Bisher haben Sie im Kurs einige Möglichkeiten gesehen, wie Benutzer mit dem Web interagieren können:

- [Links](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links) können verwendet werden, um zu verschiedenen Inhaltsabschnitten zu navigieren, entweder auf derselben Seite oder auf einer anderen Seite.
- Die [`<video>`- und `<audio>`](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)-Elemente bieten in der Regel Steuerelemente wie Wiedergabe/Pause, Vorlauf, Rücklauf usw., die es Benutzern ermöglichen, Medieninhalte nach Belieben zu konsumieren.

Diese Funktionen tendieren jedoch dazu, nur einseitige Interaktionen zu ermöglichen, wobei Benutzer Inhalte passiv konsumieren. Das ist in Ordnung, aber das Web bietet eine zweiseitige Erfahrung. Website-Nutzer legen fest, wie sie Inhalte und Dienste erleben möchten. Sie bestellen Taxis und fordern Rückrufe an. Sie geben Feedback und beschweren sich. Sie kaufen Produkte und lassen sie zu sich nach Hause liefern.

Um diese zweiseitige Erfahrung zu bieten, müssen Sie Buttons und Formulare verwenden.

Buttons werden normalerweise mit HTML-{{htmlelement("button")}}-Elementen erstellt (sie werden auch manchmal mit {{htmlelement("input")}}-Elementen erstellt, deren `type`-Attribute auf einen Wert wie `button` oder `submit` gesetzt sind). Diese Drücker sind universell einsetzbar – Sie können sie so verdrahten, dass sie jede gewünschte Funktionalität auslösen, nur begrenzt durch Ihre Vorstellungskraft und Programmierfertigkeiten.

Formulare werden mit Elementen wie {{htmlelement("form")}}, {{htmlelement("label")}}, {{htmlelement("input")}} und {{htmlelement("select")}} erstellt. Formularelemente können verwendet werden, um kompliziertere Steuerelemente als einfache Buttons zu erstellen – zum Beispiel ein Dropdown-Menü mit mehreren Optionen, das es Ihnen ermöglicht, zwischen verschiedenen Themen für ein UI-Element zu wählen.

Entscheidend ist jedoch, dass sie auch genutzt werden können, um Formulare zu erstellen, die Nutzer ausfüllen müssen, wenn sie Informationen an einen Website-Server senden. Denken Sie an E-Commerce-Seiten – wenn Sie ein Produkt kaufen möchten, verwenden Sie ein Formular, um Suchbegriffe einzugeben. Wenn Sie für einige Artikel bezahlen und die Lieferung abschließen möchten, verwenden Sie ein Formular, um Ihre Postadresse einzugeben, und ein weiteres Formular, um Ihre Kreditkartendaten einzugeben.

Wir konzentrieren uns hauptsächlich auf diese – eher traditionelle – Verwendung von Formularelementen in diesem Artikel. Beachten Sie, dass Buttons auch häufig in Formularen verwendet werden, um die eingegebenen Daten an den Server zu senden.

Mit dieser wichtigen Theorie aus dem Weg gesehen, fahren wir nun fort, den Code zu erkunden und zu sehen, wie Buttons und Formulare implementiert werden.

## Buttons

Wie bereits angedeutet, haben Buttons im Web einige Hauptverwendungen. Erstens werden sie verwendet, um Funktionalitäten auszulösen, was nützlich ist, wenn man UI-Steuerungen erstellt. Der einfachste Button wird mit folgendem Code umgesetzt:

```html live-sample___basic-button
<button>Press me</button>
```

Dieser wird wie folgt gerendert:

{{EmbedLiveSample("basic-button", "100%", "60")}}

Der Text, der zwischen den `<button></button>`-Tags erscheint, wird innerhalb des Buttons gerendert und von den Browsern mit grundlegender Styling versehen, damit er standardmäßig wie ein Button aussieht und sich verhält. Soweit, so gut. Es gibt jedoch ein Problem — unser einsamer Button wird von alleine nichts Nützliches tun. Um ihm einen sinnvollen Zweck zu geben, müssen Sie ihn in ein Formular einfügen (das wir später behandeln werden) oder etwas JavaScript hinzufügen.

Zum Beispiel, wenn Sie das folgende JavaScript auf den obigen Button anwenden:

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

Es wird nicht erwartet, dass Sie jetzt schon verstehen, wie das JavaScript funktioniert. Sie werden später im Kurs mehr darüber lernen.

Im nächsten Abschnitt sehen Sie eine Demonstration der zweiten Hauptverwendung von Buttons – dem Absenden von Formularen.

## Die Anatomie eines Formulars

Ein grundlegendes Formular enthält drei Dinge:

- Ein {{htmlelement("form")}}-Element, das den gesamten übrigen Formularinhalt umschließt. Alle Steuerungselemente innerhalb der `<form></form>`-Tags sind Teil desselben Formulars und ihre Daten sind enthalten, wenn das Formular übermittelt wird.
- Ein oder mehrere Paare, die jeweils aus einem {{htmlelement("label")}}-Element und einem Formularsteuerungselement (üblicherweise ein {{htmlelement("input")}}-Element, aber es gibt auch andere Typen, wie z. B. {{htmlelement("select")}}) bestehen:
  - Das Steuerungselement ermöglicht dem Benutzer, einige Daten auszuwählen oder einzugeben, die beim Absenden des Formulars an den Server gesendet werden.
  - Das `<label>`-Element bietet ein Identifikationslabel, das mit dem Steuerungselement verbunden ist und beschreibt, welche Daten eingegeben werden sollten.
- Ein {{htmlelement("button")}}-Element, das zum Absenden des Formulars verwendet wird.

Schauen wir uns ein einfaches Beispiel an, das diese drei Elemente enthält. Dieses Formular könnte verwendet werden, um einen Benutzer nach seinem Namen und seiner E-Mail-Adresse zu fragen, um ihn für einen Newsletter anzumelden (keine Sorge – es ist mit keinem Server verbunden, daher passiert aktuell nichts).

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

Wenn Sie sofort auf "Sign me up!" klicken, sehen Sie einen Validierungsfehler, weil keine Daten eingegeben wurden. Wenn Sie die Felder mit einem Namen und einer E-Mail-Adresse ausfüllen und dann auf "Sign me up!" klicken, sehen Sie eine `404`-Fehlermeldung.

Wir werden später erklären, warum das so ist. Bevor wir weitermachen, kopieren Sie den vorherigen HTML-Code in eine neue HTML-Datei mit Ihrem [Code-Editor](/de/docs/Learn_web_development/Getting_started/Environment_setup/Code_editors) und öffnen Sie ihn in einem neuen Browser-Tab.

### Das `<form>`-Element

Wie bereits erwähnt, fungiert das {{htmlelement("form")}}-Element als äußere Umhüllung für das Formular, das alle Steuerungsfunktionen darin gruppiert. Wenn der `<button>` gedrückt wird, werden alle durch die Steuerungselemente dargestellten Daten an den Server übermittelt. Das `<form>`-Element kann viele Attribute enthalten, aber die beiden wichtigsten, die wir in unserem Beispiel aufgenommen haben, sind folgende:

- `action`: Enthält einen Pfad zu der Seite, an die die übermittelten Formulardaten verarbeitet werden sollen. Später, wenn Sie das Formular senden, sehen Sie `/submit_page` in der URL enthalten. Sie erhalten auch eine {{HTTPStatus("404")}}-Fehlerantwort, weil die Seite tatsächlich nicht existiert, aber das ist fürs Erste in Ordnung.
- `method`: Gibt die Datenübertragungs[Methode](/de/docs/Web/HTTP/Reference/Methods) an, die Sie zum Senden der Formulardaten an den Server verwenden möchten. Machen Sie sich darüber vorerst keine allzu großen Sorgen; der Wert `get` sorgt dafür, dass die Daten als Parameter an das Ende der URL angehängt gesendet werden.

#### Überprüfung der übermittelten Daten

1. Gehen Sie zu dem Beispiel im separaten Tab, versuchen Sie, einen Namen "Bob" und eine E-Mail-Adresse "bob@bob.com" einzugeben.
2. Drücken Sie den `<button>`.

Die `action`- und `method`-Attribute bewirken, dass die Formulardaten in einer URL ungefähr folgendermaßen übermittelt werden:

```plain
/some/url/submit_page?name=Bob&email=bob%40bob.com
```

#### Formulare strukturieren

Sie können beliebige HTML-Elemente in einem `<form>`-Element einfügen, um die Formularelemente selbst zu strukturieren und Container bereitzustellen, auf die mit CSS zur Gestaltung abgezielt werden kann usw.

In unserem Beispiel haben wir ein [Überschriften-Element](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) (`<h2>`) eingefügt, um den Zweck des Formulars zu beschreiben.

Wir haben auch jedes Eingabe/Label-Paar und den Absende-Button in ein separates {{htmlelement("p")}} eingepackt, so dass jeweils nur eines in einer separaten Zeile erscheint. Diese Elemente sind standardmäßig inline, was bedeutet, dass sie alle auf derselben Linie stehen würden, wenn wir das nicht getan hätten.

Dies ist ein häufiges Muster für die Formularstrukturierung. Manche verwenden `<p>`-Elemente, um ihre Formularelemente zu trennen, andere verwenden {{htmlelement("div")}}, {{htmlelement("section")}} oder sogar {{htmlelement("li")}}-Elemente. Es spielt nicht viel Rolle, solange die verwendeten Elemente semantisch sinnvoll sind. Zum Beispiel macht es Sinn, Formularelementgruppen in separate Absätze oder Abschnitte von Inhalten oder sogar Listenelemente zu teilen. Es wäre weniger sinnvoll, sie als [Blockzitate](/de/docs/Web/HTML/Reference/Elements/blockquote), [Nebeninhalte](/de/docs/Web/HTML/Reference/Elements/aside) oder [Adressen](/de/docs/Web/HTML/Reference/Elements/address) darzustellen.

Es gibt ein spezielles Element zur Gruppierung von Formularelementen, das {{htmlelement("fieldset")}} genannt wird. Dies ist in bestimmten Umständen nützlich, wie z. B. in komplexen Formularen und beim Gruppieren mehrerer Kontrollkästchen und Optionsschaltflächen. Wir werden später einige `<fieldset>`-Beispiele betrachten.

### `<input>`-Elemente

Die {{htmlelement("input")}}-Elemente repräsentieren die verschiedenen Datenitems, die in das Formular eingegeben werden. Lassen Sie uns eines der Beispiele aus unserem grundlegenden Formular genauer betrachten:

```html
<input type="text" name="name" id="name" required />
```

Die Attribute sind wie folgt:

- `type`: Gibt an, welche Art von Eingabesteuerung erstellt wird. Es gibt viele verschiedene Arten von Eingabesteuerungen, von einfachen Textfeldern unterschiedlicher Art bis hin zu Optionsschaltflächen, Kontrollkästchen und mehr. Der Typ `text` rendert ein basisches Textfeld, das jeden Wert akzeptieren kann.
- `name`: Gibt einen Namen für das Datenitem an. Wenn das Formular gesendet wird, werden die Daten in Namen/Wert-Paaren übermittelt. In jedem Fall ist der Name gleich diesem `name`-Attributwert und der Wert gleich dem im Textfeld eingegebenen Text.
- `id`: Gibt eine ID an, mit der das Element identifiziert werden kann. In diesem Fall wird es verwendet, um das Steuerelement mit seinem `<label>` zu verbinden.
- `required`: Gibt an, dass ein Wert in das Formularelement eingegeben werden muss, bevor das Formular gesendet werden kann. Dies sollte nur auf Eingaben gesetzt werden, die Sie benötigen, nicht auf optionale Felder.

Sie sollten sich bewusst sein, dass einige Eingabetypen normalerweise ihre Werte nicht aus einem in ein Feld eingegebenen Text erhalten. Zum Beispiel rendert [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color) ein Farbwahl-Widget, aus dem Sie eine Farbe auswählen, während [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio) ein Optionsschaltflächen-Steuerelement rendert, das ausgewählt werden kann oder nicht.

Im Fall von Optionsschaltflächen müssen Sie in der Regel den Wert, der übermittelt wird, falls er ausgewählt ist, im spezifischen `value`-Attribut angeben. Beachten Sie, dass Sie _können_ ein `value`-Attribut bei Eingabetypen wie `text` und `color` angeben – der Effekt ist, dass der Wert beim erstmaligen Rendern vorausgefüllt in das Formularelement eingetragen wird.

#### `required`- und `value`-Attribute in Aktion

1. Gehen Sie erneut zu dem Beispiel, das Sie in einem separaten Tab geladen haben, und versuchen Sie, das Formular ohne Eingabe in ein beliebiges Feld abzusenden. Sie sehen eine Fehlernachricht neben dem "Name"-Feld erscheinen, die so etwas sagt wie "Bitte füllen Sie dieses Feld aus" (es variiert je nach Browser). Dies ist das `required`-Attribut – und die Standard-Client-seitige Formularvalidierung des Browsers – in Aktion.
2. Versuchen Sie nun, das Formular mit einem gültigen Namen im ersten Feld zu senden, aber mit einem Wert, der keine gültige E-Mail-Adresse im zweiten Feld ist (etwas wie "aaaa" wird ausreichen). Diesmal sehen Sie eine Fehlernachricht neben dem "E-Mail"-Feld erscheinen, die so etwas sagt wie "Bitte geben Sie eine E-Mail-Adresse ein".
3. Versuchen Sie, das Formular zu bearbeiten, um `value="Bob"` auf dem ersten Eingabeelement hinzuzufügen. Wenn Sie den Code neu laden, sehen Sie, dass das erste Feld standardmäßig den Wert "Bob" eingetragen hat.

#### Spezialisierte Textfeldeingaben

Die zweite Übung oben wirft eine interessante Frage auf. Das zweite Eingabefeld erwartet spezifisch eine E-Mail-Adresse und validiert eingegebene Werte entsprechend. Wenn Sie sich den Code des Formulars noch einmal ansehen, sehen Sie, warum – das zweite `<input>` hat einen `type` von `email`. Es gibt mehrere spezialisierte Textfeldeingabetypen, die für den Umgang mit bestimmten Arten von Daten ausgelegt sind – [`<input type="number">`](/de/docs/Web/HTML/Reference/Elements/input/number), [`<input type="password">`](/de/docs/Web/HTML/Reference/Elements/input/password), [`<input type="tel">`](/de/docs/Web/HTML/Reference/Elements/input/tel) usw.

Folgen Sie einigen der oben genannten Links, um herauszufinden, wofür diese Eingabetypen verwendet werden. Schauen Sie sich in unserem [`<input>`](/de/docs/Web/HTML/Reference/Elements/input)-Referenzmaterial um und sehen Sie, ob Sie noch mehr spezialisierte Textfeldeingabetypen finden können.

### `<label>`-Elemente

Wie oben erwähnt, bieten {{htmlelement("label")}}-Elemente identifizierende Labels, die mit Formulareingabesteuerungen verbunden sind und beschreiben, welche Daten in sie eingegeben werden sollten. Sie können jeden beliebigen Textinhalt in `<label>`-Elementen einfügen, aber sie sollten genau beschreiben, welche Daten die zugehörige Formulareingabesteuerung erwartet. Die Verbindung wird erstellt, indem dem Steuerungselement ein `id`-Attribut gegeben wird und dann dem `<label>`-Element ein `for`-Attribut mit demselben Wert wie die `id`.

Zum Beispiel:

```html
<label for="name">Name (required):</label>
<input type="text" name="name" id="name" required />
```

`<label>`-Elemente sind aus mehreren Gründen wichtig, insbesondere:

- Wenn sehbehinderte Nutzer einen Bildschirmleser verwenden, um ihnen das Lesen und Interagieren mit Webinhalten zu erleichtern, liest der Bildschirmleser den zugehörigen Labeltext vor, wenn jedes Steuerungselement aufgerufen wird. Dies erleichtert es dem Nutzer, zu verstehen, welche Inhalte in jede Steuerung eingegeben werden sollen.
- Sie ermöglichen es, die Formularelemente durch Klicken auf ihren Labeltext sowie auf die Steuerungen zu fokussieren. Das ist besonders nützlich für Mobiltelefonbenutzer, bei denen es schwierig sein kann, ein Formularelement mit dem Finger auf einem Touchscreen genau auszuwählen. Die Vergrößerung der **Trefffläche** ist in solchen Fällen nützlich.

#### Explizite und implizite Formlabels

Der oben gesehene Formlabel-Stil wird als **explizites Formlabel** bezeichnet – die Zuordnung zwischen Steuerungselement und Label erfolgt explizit über die `id`- und `for`-Attribute. Sie können auch ein **implizites Formlabel** implementieren, indem Sie die Steuerung in das Label einbetten, wie folgt:

```html
<label>
  Name (required):
  <input type="text" name="name" required />
</label>
```

Das Einbetten schafft eine implizite Verbindung zwischen Steuerung und Label, und Sie benötigen nicht mehr die `id`- und `for`-Attribute.

Jede Methode ist in Ordnung, aber wir empfehlen die Verwendung des expliziten Labelansatzes. Dies liegt daran, dass die explizite Verbindung in der Regel leichter zu identifizieren und zu verstehen ist, insbesondere wenn Ihr HTML-Code komplexer wird. Darüber hinaus behandeln Bildschirmleser (und andere unterstützende Technologien) implizite Labels nicht immer korrekt.

Sie können mehr über Best Practices für die Erstellung von Formentiketten unter [HTML Inputs and Labels: A Love Story](https://css-tricks.com/html-inputs-and-labels-a-love-story/), css-tricks.com (2021) lesen.

### Das `<button>`-Element

Wenn ein {{htmlelement("button")}}-Element innerhalb eines `<form>`-Elements eingefügt wird, ist sein Standardverhalten, dass es das Formular absendet, vorausgesetzt, es sind keine ungültigen Daten vorhanden, die eine Übermittlung durch die clientseitige Formularvalidierung blockieren würden. Sie haben dieses Verhalten bereits gesehen, als Sie mit unserem einfachen Formbeispiel gespielt haben.

Das Verhalten anderer Buttons kann über das `type`-Attribut des `<button>`-Elements angegeben werden:

- `<button type="submit">` gibt ausdrücklich an, dass ein Button sich wie ein Absende-Button verhalten soll. Sie müssen dies eigentlich nie explizit angeben, es sei denn, Sie fügen aus irgendeinem Grund andere Schaltflächen in Ihr `<form>` ein und möchten deutlich machen, welches die Absende-Schaltfläche ist. Dies wird sehr selten sein.
- `<button type="reset">` erzeugt einen _Zurücksetz-Button_ — dieser löscht sofort alle Daten aus dem Formular und setzt sie in den ursprünglichen Zustand zurück. **Verwenden Sie keine Rücksetz-Buttons** — sie waren in den frühen Tagen des Webs beliebt, aber sie sind in der Regel eher ärgerlich als hilfreich. Die meisten Menschen haben die Erfahrung gemacht, ein langes Formular auszufüllen, nur um versehentlich auf die Zurücksetz-Schaltfläche statt auf die Absende-Schaltfläche zu klicken, was bedeutet, dass sie neu anfangen müssen.
- `<button type="button">` erzeugt einen Button mit demselben Verhalten wie Buttons außerhalb von `<form>`-Elementen. Wie wir bereits gesehen haben, tun sie standardmäßig überhaupt nichts, und JavaScript ist erforderlich, um ihnen Funktionen zu geben.

Obwohl Sie diese Buttontypen mit einem `<input>`-Element mit denselben `type`-Werten erstellen können – wie [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit), [`<input type="reset">`](/de/docs/Web/HTML/Reference/Elements/input/reset), und [`<input type="button">`](/de/docs/Web/HTML/Reference/Elements/input/button) – haben sie viele Nachteile gegenüber ihren `<button>`-Gegenstücken. Deshalb sollten Sie `<button>` verwenden.

> [!NOTE]
> Scrimba<sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> hat eine kostenlose Lektion — [The very basics of forms](https://scrimba.com/learn-responsive-web-design-c029/~031?via=mdn) — die einen nützlichen interaktiven Überblick über die Formulargrundlagen bietet, die wir zuvor in diesem Artikel behandelt haben.

## Ein Exkurs zur Barrierefreiheit

Wir haben bereits über die Bedeutung von Formularlabels für die Barrierefreiheit gesprochen, aber wir wollten auch einige Kommentare zur allgemeinen Bedeutung der Verwendung der richtigen semantischen Elemente zur Erstellung von Formularen hinzufügen (z. B. verwenden Sie ein `<button>`, um Ihr Formular zu senden, und nicht ein `<div>`, das programmiert ist, sich wie ein `<button>` zu verhalten). Es ist durchaus möglich, eine Kombination aus CSS und JavaScript zu verwenden, um so ziemlich jedes HTML-Element so aussehen und verhalten zu lassen wie ein Formularelement. Entwickler tun dies in der Regel aus Designgründen – einige Formularelemente sind schwer zu stylen.

Wenn Sie dies jedoch tun, machen Sie sich und Ihren Benutzern das Leben schwerer. Der Browser bietet eine Reihe von Funktionen für `<button>` und Formularelemente von Haus aus, ohne dass JavaScript oder anderer zusätzlicher Code benötigt wird, um Formulare für alle Benutzer benutzerfreundlicher zu machen.

Beispielsweise:

- Semantische Elemente werden von unterstützender Technologie wie Bildschirmlesern verstanden, die ihre Bedeutung den Benutzern vermitteln, die sie nicht sehen können.
- Formularelemente und Buttons sind standardmäßig über die Tastatur zugänglich. Im vorherigen Beispiel versuchen Sie, sich mit <kbd>Tab</kbd> und <kbd>Shift</kbd> + <kbd>Tab</kbd> (sogenanntes "Tabbing") vorwärts und rückwärts zwischen den Formularelementen zu bewegen.
- Beachten Sie auch, wie das Tabbing zwischen den Formularelementen dazu führt, dass das fokussierte Element mit einem blauen Umriss hervorgehoben wird (genannt **Fokusumriss**). Dies ist eine wichtige Funktion für Tastaturbenutzer, um zu wissen, wo sie sich im Formular derzeit befinden.

Wenn Sie nicht die richtigen semantischen Elemente verwenden, um Ihre Formulare zu implementieren, werden Ihre Formularelemente nicht wie erwartet funktionieren und erscheinen fehlerhaft. Sie müssten all diese Funktionalität selbst neu implementieren, was sich alles summiert.

## Andere Steuerungstypen

Es gibt viele andere Steuerungstypen, die Sie verwenden können, um Daten in einem Formular zu sammeln. Schauen wir uns ein etwas komplexeres Beispiel an und dann werden wir es erkunden und erklären.

> [!NOTE]
> In diesem Beispiel gehen wir davon aus, dass der Benutzer bereits registriert und angemeldet ist, daher müssen keine Informationen wie Name und E-Mail erfasst werden.

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

Wir empfehlen Ihnen, dieses Beispiel in einem separaten Browser-Tab zu öffnen, während Sie die nächsten Abschnitte durcharbeiten, in denen wir jeden Steuerungstyp nacheinander betrachten. Kopieren Sie dazu den Code in eine HTML-Datei mit Ihrem Code-Editor und öffnen Sie ihn in einem Browser-Tab.

Bevor Sie fortfahren, probieren Sie die verschiedenen Formularelemente in Ihrer lokalen Kopie aus und wählen Sie einige Werte aus. Versuchen Sie, das Formular zu senden, und sehen Sie, wie die gesendeten Daten in der URL aussehen.

### Optionsschaltflächen

Die "Zimmerkategorie des Hotels wählen"-Buttons werden mit [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio)-Steuerelementen implementiert. Diese werden als eine Reihe von Druckschaltflächensteuerelementen rendert, bei denen nur einer des Sets zu einem Zeitpunkt ausgewählt werden kann – Sie können nicht mehr als einen gleichzeitig auswählen. Sie sind nach den Knöpfen an altmodischen Radios benannt, bei denen Sie einen Knopf drücken und der zuvor gewählte herauspoppt.

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

`radio`-Eingabetypen funktionieren größtenteils genauso wie `text`-Eingabetypen, jedoch mit einigen Unterschieden:

- Die `name`-Attribute für jede Gruppe von Optionsschaltflächen müssen denselben Wert enthalten, um sie als ein Set zu verknüpfen. Wenn sie verschiedene Werte enthalten, sind sie effektiv separate Sets mit unterschiedlichen Werten bei der Übermittlung.
- Sie müssen ein `value`-Attribut mit dem zu übermittelnden Wert für jede Optionsschaltfläche hinzufügen. Der übermittelte Wert wird ein Name/Wertpaar sein, aber der Name wird immer derselbe sein, zum Beispiel `hotel=economy` oder `hotel=superior`.
- Das `<label>` für jede Optionsschaltfläche sollte diese bestimmte Wahlmöglichkeit beschreiben, anstatt den gesamten Wert, den Sie wählen möchten. Die bevorzugte Methode, die gesamte Wertwahl zu beschreiben, besteht darin, sie in ein {{htmlelement("fieldset")}} zu packen, das ein {{htmlelement("legend")}}-Element als Kind enthält, das die Beschreibung enthält.

> [!NOTE]
> Neben der Strukturierung und Beschriftung von Formularen, haben Fieldsets auch andere Verwendungszwecke, wie z. B. [das Deaktivieren](#formularelemente_deaktivieren) eines gesamten Satzes von Steuerungen als eine Einheit.

Es ist auch erwähnenswert, dass wir das `checked`-Attribut auf die erste Optionsschaltfläche angewandt haben – dies bewirkt, dass sie beim ersten Laden der Seite ausgewählt wird. Dies bedeutet, dass immer eine Option ausgewählt wird und Sie eine Optionsschaltfläche nicht abwählen können, ohne eine andere auszuwählen.

Versuchen Sie, das `checked`-Attribut von der ersten Optionsschaltfläche zu entfernen, speichern Sie, dann laden Sie neu, um den Effekt zu sehen, den es hat. Setzen Sie es wieder zurück, bevor Sie weitermachen.

#### Formularelemente deaktivieren

Im Beispiel mit den Optionsschaltflächen bemerken Sie, dass die dritte Optionsschaltfläche das `disabled`-Attribut gesetzt hat. Dies bewirkt, dass die gerenderte Steuerung abgegraut und nicht auswählbar ist. Dies ist in vielen Situationen nützlich, in denen eine Option normalerweise verfügbar ist, nur nicht im Moment. Zum Beispiel könnte ein Produkt nicht auf Lager sein, oder wie in unserem Beispiel, sind alle Penthouse-Suiten ausgebucht!

Sie können das `disabled`-Attribut auf jedem Formularelement setzen, einschließlich `<button>`-Elementen. `<fieldset>`-Elemente können auch das `disabled`-Attribut akzeptieren – dies bewirkt, dass jedes Formularelement innerhalb des Fieldsets deaktiviert wird.

Versuchen Sie, das `disabled`-Attribut auf den beiden `<fieldset>`-Elementen zu setzen, speichern Sie, dann laden Sie neu, um den Effekt zu sehen, den es hat. Entfernen Sie sie wieder, bevor Sie weitermachen.

### Kontrollkästchen

Unsere "Anzukreuzende Klassen"-Auswahl-Buttons werden mit [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox)-Kontrollkästchen-Steuerelementen implementiert. Diese rendert als ein Satz von Ein-/Aus-Status Kontrollen. Im Gegensatz zu den Optionsschaltflächen können Sie mehr als einen gleichzeitig auswählen.

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

Wie Sie aus den Code-Snippets sehen können, werden Optionsschaltflächen und Kontrollkästchen auf sehr ähnliche Weise implementiert (sie können auch `checked`-Attribute erhalten, damit sie beim Laden der Seite vorausgewählt erscheinen). Sie verhalten sich auch in ziemlich ähnlicher Weise, außer dass Optionsschaltflächen Ihnen ermöglichen, null oder ein Teil aus vielen auszuwählen, und Kontrollkästchen Ihnen ermöglichen, null oder mehr Teile aus vielen auszuwählen.

Der Hauptunterschied (abgesehen vom `type`-Wert!) besteht darin, dass jedes Kontrollkästchen einen anderen `name`-Wert hat, und sie im Allgemeinen keine `value`-Attribute erhalten. Verhaltensmäßig bedeutet dies, dass sie verschiedene Datenwerte darstellen, während ein Optionsschaltflächenset nur einen repräsentiert. Bei der Übermittlung wird jeder Wert mit einem Wert von `on` gesendet, wenn das Kontrollkästchen angekreuzt wurde — `yoga=on`, `balloon=on` usw.

> [!NOTE]
> Es ist möglich, den übermittelten Wert für ein Kontrollkästchen zu ändern, indem man ihm ein `value`-Attribut zuweist, zum Beispiel: `<input type="checkbox" id="yoga" name="yoga" value="yes" />` würde resultieren in `yoga=yes`, wenn es angekreuzt ist.

### Dropdown-Menüs

Dropdown-Menüs, zum Beispiel das "Wie kommen Sie hierher?"-Auswahlkontrollelement in unserem Beispiel, werden nicht mit einem `<input>`-Typ implementiert, sondern mit den {{htmlelement("select")}}- und {{htmlelement("option")}}-Elementen:

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

Das `<select>`-Element umschließt alle unterschiedlichen Wertoptionen. Es ist dort, wo Sie das `id`-Attribut setzen, das die Steuerung mit ihrem Label verbindet, und das `name`-Attribut, das den Namen des zu übermittelnden Datenobjekts festlegt.

Jeder mögliche Wert für das Datenitem wird durch ein `<option>`-Element dargestellt, das innerhalb des `<select>`-Elements verschachtelt ist. Jedes `<option>`-Element kann ein `value`-Attribut akzeptieren, das den Wert angibt, der übermittelt werden soll, wenn diese Option aus der Dropdown-Liste gewählt wird. Wenn Sie kein `value` angeben, wird der Text innerhalb der `<option></option>`-Tags als Wert verwendet.

> [!NOTE]
> Wenn Sie möchten, dass eine bestimmte Option beim Laden der Seite ausgewählt ist, können Sie ein `selected`-Attribut zum entsprechenden `<option>`-Element hinzufügen.

### Eingabefelder für mehrzeiligen Text

Eingabefelder für mehrzeiligen Text werden mit {{htmlelement("textarea")}}-Elementen erstellt:

```html
<label for="comments">Any other comments:</label>
<textarea id="comments" name="comments" rows="5" cols="33"></textarea>
```

Sie verhalten sich genauso wie `<input type="text">`-Elemente, außer dass sie das Eingeben von mehrzeiligem Text erlauben. Das `rows`-Attribut gibt die Anzahl der Zeilen an, die das Textfeld standardmäßig haben wird, während das `cols`-Attribut die Anzahl der Spalten angibt, die das Textfeld standardmäßig haben wird. Wenn sie nicht spezifiziert sind, sind die verwendeten Standardwerte `cols="20"` und `rows="2"`.

Die meisten Browser rendern Textfelder mit einem Ziehgriff in einer Ecke, mit dem sie geändert werden können. Versuchen Sie, diesen zu verwenden, um die Größe des Textfelds in unserem Demo zu ändern.

## Formularvalidierung

Früher haben wir uns einige der grundlegenden clientseitigen Formularvalidierungen angesehen, die vom Browser bereitgestellt werden. Das `required`-Attribut wird verwendet, um anzugeben, dass ein Feld ausgefüllt werden muss, bevor das Formular gesendet werden kann; es überprüft auch, ob der korrekte Werttyp für spezifische Werttypen wie E-Mail-Adressen, URLs, Nummern usw. eingegeben wird. Validierung ist aus zwei Hauptgründen wichtig:

- Sicherstellen, dass Daten im richtigen Format übermittelt werden, damit sie keine Fehler in Ihrer Anwendung verursachen.
- Sicherstellen, dass Daten keine Sicherheitsprobleme verursachen. Böswillige Personen wissen, wie man Daten speziell formatiert übermitteln kann, damit sie, bei unsicheren Anwendungen, Befehle ausführen können, um Datenbanken zu löschen oder ein System zu übernehmen.

Formularvalidierung ist ein riesiges Thema, das über den Rahmen dieses Artikels hinausgeht, daher belassen wir es vorerst dabei. Beachten Sie jedoch, dass es zwei Arten von Formularvalidierung gibt:

- Clientseitige Validierung, welche im Browser geschieht, wird mittels einer Kombination aus Formularvalidierungsattributen (wie `required`) und JavaScript implementiert. Clientseitige Validierung ist nützlich, um Benutzern sofortige Hinweise zu geben, wenn sie die falschen Daten eingegeben haben, aber nicht so effektiv, um böswillige Daten abzufangen. Es ist zu einfach, JavaScript zu deaktivieren oder den clientseitigen Code zu ändern, damit die Validierung nicht mehr funktioniert.
- Serverseitige Validierung, welche auf dem Server stattfindet, wird mit der Sprache implementiert, die der Server verwendet. Schlecht formatierte Nachrichten können versehentlich oder absichtlich an einen Server gesendet werden. Konventionelles Wissen besagt, dass Sichergestellt werden sollte, dass Ihr Server nichts von einem Client anvertraut, um Bugs oder Sicherheitsprobleme zu vermeiden, die durch Fehlermeldungen verursacht werden. Serverseitige Validierung ist großartig für das Stoppen böswilliger Nachrichten, da es schwieriger ist, den auf dem Server laufenden Code zu manipulieren. Serverseitige Validierung ist nicht so gut, um Benutzern Hinweise über falsche Daten zu geben, weil die Daten zum Server weitergegeben und validiert werden müssen, bevor das Ergebnis an den Client zurückgesendet werden kann.

Kurz gesagt, entscheiden Sie sich nicht, entweder clientseitige oder serverseitige Validierung zu verwenden - Sie benötigen beide. Sie benötigen clientseitige Validierung, um Benutzern Feedback zu ihrer Eingabe zu geben, und serverseitige Validierung, um sicherzustellen, dass Nachrichten in einem Format sind, das Ihr Server sicher verarbeiten kann. Wenn Sie mehr über Validierung lernen möchten, ist ein guter Ausgangspunkt [Client-seitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation).

## Zusammenfassung

Das ist alles für jetzt. Es gibt noch viel mehr über Formulare zu wissen, aber für den Moment haben wir Ihnen genug Verständnis vermittelt, um Ihre Studien fortzusetzen.

Als nächstes geben wir Ihnen einige Tests, die Sie verwenden können, um zu überprüfen, wie gut Sie die Informationen über HTML-Formulare verstanden und behalten haben.

## Siehe auch

- [Webformulare — Arbeiten mit Benutzerdaten](/de/docs/Learn_web_development/Extensions/Forms)

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content/Test_your_skills/Forms_and_buttons", "Learn_web_development/Core/Structuring_content")}}
