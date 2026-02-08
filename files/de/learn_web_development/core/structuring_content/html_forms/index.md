---
title: Formulare und Schaltflächen in HTML
short-title: Formulare und Schaltflächen
slug: Learn_web_development/Core/Structuring_content/HTML_forms
l10n:
  sourceCommit: 8b1662a185211610f2ccf60ba14dd77ecab24b1b
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content/Test_your_skills/Forms_and_buttons", "Learn_web_development/Core/Structuring_content")}}

HTML-Formulare und -Schaltflächen sind leistungsfähige Werkzeuge zur Interaktion mit den Benutzern einer Website. Am häufigsten bieten sie den Nutzern Steuerungen, um eine Benutzeroberfläche (UI) zu manipulieren oder Daten einzugeben, wenn dies erforderlich ist.

In diesem Artikel bieten wir eine Einführung in die Grundlagen von Formularen und Schaltflächen. Es gibt noch viel mehr zu wissen – viele Eingabetypen und Formularfunktionen werden nicht erwähnt – aber dieser Artikel wird Ihnen eine solide Grundlage für die meisten Fälle geben. Sie können fortgeschrittene oder spezialisierte Anwendungen bei Bedarf erlernen, als Teil des kontinuierlichen Lernens, das Sie während Ihrer Karriere durchlaufen werden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende HTML-Vertrautheit, wie sie im
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        >. Semantiken auf Textebene wie <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
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
          <li>Ein Verständnis dafür, dass Formulare und Schaltflächen, zusammen mit Links, die Hauptwerkzeuge sind, mit denen Benutzer mit einer Website interagieren.</li>
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

## Interaktion mit Benutzern

Bisher im Kurs haben Sie ein paar Möglichkeiten gesehen, wie Benutzer mit dem Web interagieren können:

- [Links](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links) können verwendet werden, um zu verschiedenen Inhaltsabschnitten zu navigieren, entweder auf derselben Seite oder auf einer anderen Seite.
- [`<video>` und `<audio>`](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)-Elemente enthalten in der Regel Steuerungen wie Abspielen/Pause, Vorlauf, Rücklauf usw., die es den Benutzern ermöglichen, Medieninhalte nach Wunsch zu konsumieren.

Diese Funktionen erleichtern jedoch eher einseitige Interaktionen, bei denen Benutzer Inhalte passiv konsumieren. Das ist in Ordnung, aber das Web ist ein zweiseitiges Erlebnis. Website-Benutzer legen Präferenzen dafür fest, wie sie Inhalte und Dienste erleben möchten. Sie bestellen Taxis und bitten um Rückrufe. Sie geben Feedback und machen Beschwerden. Sie kaufen Produkte und lassen sie sich nach Hause liefern.

Um dieses zweiseitige Erlebnis zu bieten, müssen Sie Schaltflächen und Formulare verwenden.

Schaltflächen werden in der Regel mit HTML-{{htmlelement("button")}}-Elementen erstellt (sie werden auch manchmal mit {{htmlelement("input")}}-Elementen erstellt, deren `type`-Attribute auf einen Wert wie `button` oder `submit` gesetzt sind). Diese Druckknöpfe sind vielseitig einsetzbar – Sie können sie so verdrahten, dass sie jede gewünschte Funktionalität auslösen, die nur durch Ihre Vorstellungskraft und Ihre Kodierungsfähigkeiten begrenzt ist.

Formulare werden mit Elementen wie {{htmlelement("form")}}, {{htmlelement("label")}}, {{htmlelement("input")}} und {{htmlelement("select")}} erstellt. Formularelemente können verwendet werden, um komplexere Steuerelemente als einfache Schaltflächen zu erstellen – zum Beispiel ein Dropdown-Menü mit mehreren Optionen, das es Ihnen ermöglicht, zwischen verschiedenen Themen für ein Benutzeroberflächenelement zu wählen.

Allerdings können sie auch entscheidend zur Erstellung von Formularen verwendet werden, die Benutzer ausfüllen müssen, wenn sie Informationen an einen Website-Server übermitteln. Denken Sie an E-Commerce-Websites – wenn Sie ein Produkt kaufen möchten, verwenden Sie ein Formular, um Suchbegriffe einzugeben. Wenn Sie einige Artikel bezahlen und die Lieferung abschließen möchten, verwenden Sie ein Formular, um Ihre Postadresse einzugeben, und ein weiteres Formular, um Ihre Kreditkartendaten einzugeben.

Wir werden uns hauptsächlich auf diese – traditionellere – Nutzung von Formularelementen in diesem Artikel konzentrieren. Beachten Sie, dass Schaltflächen auch häufig in Formularen verwendet werden, um die eingegebenen Daten an den Server zu übermitteln.

Nachdem wir diese wichtige Theorie geklärt haben, lassen Sie uns fortfahren, um den Code zu erkunden und zu sehen, wie Schaltflächen und Formulare implementiert werden.

## Schaltflächen

Wie oben angedeutet, haben Schaltflächen ein paar Hauptanwendungen im Web. Zunächst einmal werden sie verwendet, um Funktionalität auszulösen, was nützlich ist, wenn Sie UI-Steuerungen erstellen. Die einfachste Schaltfläche wird mit dem folgenden Code implementiert:

```html live-sample___basic-button
<button>Press me</button>
```

Dies wird wie folgt gerendert:

{{EmbedLiveSample("basic-button", "100%", "60")}}

Der Text, der zwischen den `<button></button>`-Tags erscheint, wird innerhalb der Schaltfläche gerendert, und er erhält vom Browser ein grundlegendes Styling, sodass er standardmäßig wie eine Schaltfläche aussieht und sich verhält. Soweit, so gut. Es gibt jedoch ein Problem hier – unsere einsame Schaltfläche wird nichts Nützliches alleine tun. Um sie nützlich zu machen, müssen Sie sie in ein Formular einfügen (was wir später behandeln werden) oder ein wenig JavaScript hinzufügen.

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

Es würde Ihnen die folgende Ausgabe geben – versuchen Sie, darauf zu klicken:

{{EmbedLiveSample("basic-button-with-js", "100%", "60")}}

Sie müssen derzeit nicht verstehen, wie das JavaScript funktioniert. Sie werden später im Kurs mehr darüber lernen.

Im nächsten Abschnitt sehen Sie eine Demonstration des zweiten Haupteinsatzes von Schaltflächen – das Übermitteln von Formularen.

## Die Anatomie eines Formulars

Ein einfaches Formular enthält drei Dinge:

- Ein {{htmlelement("form")}}-Element, das den gesamten anderen Formularinhalt umschließt. Alle Formularelemente innerhalb der `<form></form>`-Tags gehören zum selben Formular und deren Daten werden eingeschlossen, wenn das Formular abgesendet wird.
- Ein oder mehrere Paare, die jeweils aus einem {{htmlelement("label")}}-Element und einem Formularelement (normalerweise ein {{htmlelement("input")}}-Element, es gibt jedoch auch andere Typen wie {{htmlelement("select")}}) bestehen:
  - Das Formularelement ermöglicht es dem Benutzer, Daten auszuwählen oder einzugeben, die bei der Formularübermittlung an den Server gesendet werden.
  - Das `<label>`-Element bietet eine beschreibende Bezeichnung, die dem Formularelement zugeordnet ist und die Daten beschreibt, die eingegeben werden sollen.
- Ein {{htmlelement("button")}}-Element, das zum Absenden des Formulars verwendet wird.

Schauen wir uns ein einfaches Beispiel an, das die oben genannten drei Elemente enthält. Dieses Formular könnte verwendet werden, um nach dem Namen und der E-Mail-Adresse eines Benutzers zu fragen, um ihn für einen Newsletter anzumelden (keine Sorge – es ist mit keinem Server verbunden, daher wird es derzeit nichts tun).

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

Wenn Sie "Melden Sie mich an!" sofort klicken, sehen Sie einen Validierungsfehler, weil keine Daten eingegeben wurden. Wenn Sie die Felder mit einem Namen und einer E-Mail-Adresse ausfüllen und dann "Melden Sie mich an!" klicken, sehen Sie eine `404`-Fehlermeldung.

Wir erklären Ihnen später, warum. Bevor Sie fortfahren, kopieren Sie die vorherige HTML-Codeübersicht in eine neue HTML-Datei mit Ihrem [Code-Editor](/de/docs/Learn_web_development/Getting_started/Environment_setup/Code_editors) und öffnen Sie sie in einem neuen Browser-Tab.

### Das `<form>`-Element

Wie wir bereits gesagt haben, fungiert das {{htmlelement("form")}}-Element als äußere Umhüllung für das Formular und gruppiert alle die darin enthaltenen Formularelemente zusammen. Wenn die `<button>` gedrückt wird, werden alle durch die Formularelemente dargestellten Daten an den Server gesendet. Das `<form>`-Element kann viele Attribute aufnehmen, aber die beiden wichtigsten, die wir in unserem Beispiel verwendet haben, sind wie folgt:

- `action`: Enthält einen Pfad zur Seite, an die wir die übermittelten Formulardaten zur Verarbeitung senden möchten. Später, nachdem Sie das Formular übermittelt haben, sehen Sie `/submit_page` in der URL enthalten. Sie erhalten auch eine {{HTTPStatus("404")}} Fehlerantwort, weil die Seite tatsächlich nicht existiert, aber das ist jetzt in Ordnung.
- `method`: Gibt die Datenübertragungsmethode an, die Sie zum Senden der Formulardaten an den Server verwenden möchten. Machen Sie sich darüber momentan keine Sorgen; der `get`-Wert führt dazu, dass die Daten als Parameter angehängt an die URL gesendet werden.

#### Überprüfen der übermittelten Daten

1. Gehen Sie zu dem Beispiel im separaten Tab, versuchen Sie, einen Namen "Bob" und eine E-Mail-Adresse "bob@bob.com" einzugeben.
2. Drücken Sie den `<button>`.

Die `action`- und `method`-Attribute führen dazu, dass die Formulardaten in einer URL ungefähr nach folgendem Muster eingereicht werden:

```plain
/some/url/submit_page?name=Bob&email=bob%40bob.com
```

#### Formularstrukturierung

Sie können beliebige HTML-Elemente in einem `<form>`-Element einfügen, um die Formularelemente selbst zu strukturieren und Container bereitzustellen, die mit CSS für das Styling usw. gezielt angesprochen werden können.

In unserem Beispiel haben wir ein [Überschriftenelement](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) (`<h2>`) eingefügt, um den Zweck des Formulars zu beschreiben.

Wir haben auch jedes Paar aus Eingabe/Label und die Absenden-Schaltfläche in ein separates {{htmlelement("p")}}-Element eingefügt, sodass jedes in einer separaten Zeile angezeigt wird. Diese Elemente sind standardmäßig inline, was bedeutet, dass sie alle in derselben Zeile erscheinen würden, wenn wir dies nicht tun würden.

Dies ist ein häufiges Muster zur Formularstrukturierung. Einige verwenden `<p>`-Elemente, um ihre Formularelemente zu trennen, einige verwenden {{htmlelement("div")}}, {{htmlelement("section")}} oder sogar {{htmlelement("li")}}-Elemente. Es spielt keine große Rolle, solange die verwendeten Elemente semantischen Sinn ergeben. Zum Beispiel ergibt es Sinn, Formularelementgruppen in separate Absätze oder Inhaltsabschnitte oder sogar Elemente in einer Liste zu unterteilen. Es wäre weniger sinnvoll, sie als [Blockzitate](/de/docs/Web/HTML/Reference/Elements/blockquote), [Nebenelemente](/de/docs/Web/HTML/Reference/Elements/aside) oder [Adressen](/de/docs/Web/HTML/Reference/Elements/address) darzustellen.

Es gibt ein spezialisiertes Element zum Gruppieren von Formularelementen, das {{htmlelement("fieldset")}} genannt wird. Dies ist in bestimmten Umständen nützlich, wie in komplexen Formularen und beim Gruppieren mehrerer Kontrollkästchen und Optionsfelder. Wir werden später ein paar `<fieldset>`-Beispiele betrachten.

### `<input>`-Elemente

Die {{htmlelement("input")}}-Elemente stehen für die unterschiedlichen Datenelemente, die in das Formular eingegeben wurden. Lassen Sie uns eines der Beispiele aus unserem Basisformular studieren:

```html
<input type="text" name="name" id="name" required />
```

Die Attribute sind wie folgt:

- `type`: Gibt den Typ des zu erstellenden Formularelements an. Es gibt viele verschiedene Arten von Formularelementen, von einfachen Textfeldern unterschiedlicher Art bis hin zu Optionsfeldern, Kontrollkästchen und mehr. Der Typ `text` rendert ein Basis-Textfeld, das beliebige Werte akzeptieren kann.
- `name`: Gibt einen Namen für das Datenelement an. Wenn das Formular übermittelt wird, werden die Daten in Namens-/Wertpaaren gesendet. In jedem Fall ist der Name gleich dem Wert dieses `name`-Attributs und der Wert gleich dem im Textfeld eingegebenen Text.
- `id`: Gibt eine ID an, die verwendet werden kann, um das Element zu identifizieren. In diesem Fall wird es verwendet, um das Formularelement mit seinem `<label>` zu verknüpfen.
- `required`: Gibt an, dass ein Wert in das Formularelement eingegeben werden muss, bevor das Formular übermittelt werden kann. Dies sollte nur auf erforderlichen Eingaben gesetzt werden, nicht auf optionalen Feldern.

Sie sollten wissen, dass einige Eingabetypen ihre Werte normalerweise nicht aus im Feld eingegebenem Text erhalten. Zum Beispiel rendert [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color) ein Farbauswahl-Widget, aus dem Sie eine Farbe auswählen, während [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio) ein Auswahlknopf-Steuerelement wiedergibt, das ausgewählt oder nicht ausgewählt sein kann.

Im Fall von Optionsfeldern müssen Sie im Allgemeinen den Wert, der eingereicht werden soll, wenn es ausgewählt ist, in einem spezifischen `value`-Attribut angeben. Beachten Sie, dass Sie ein `value`-Attribut auf Eingabetypen wie `text` und `color` angeben _können_ – die Wirkung ist, dass der Wert beim ersten Darstellen der Formularelement in das Feld eingetragen wird.

#### `required`- und `value`-Attribute in Aktion

1. Gehen Sie erneut zu dem Beispiel, das Sie in einem separaten Tab geladen haben, und versuchen Sie, das Formular ohne Eingabe eines Wertes in einem der beiden Felder abzusenden. Sie werden eine Fehlermeldung neben dem "Name"-Feld sehen, die in etwa so lautet: "Bitte füllen Sie dieses Feld aus" (es variiert in verschiedenen Browsern). Dies ist das `required`-Attribut – und die Standard-Client-Formularüberprüfung des Browsers – in Aktion.
2. Versuchen Sie nun, das Formular mit einem gültigen Namen im ersten Feld, aber einem Wert, der keine gültige E-Mail-Adresse ist, im zweiten Feld zu senden (etwas wie "aaaa" reicht aus). Diesmal sehen Sie eine Fehlermeldung neben dem "E-Mail"-Feld, die in etwa so lautet: "Bitte geben Sie eine E-Mail-Adresse ein".
3. Versuchen Sie, das Formular so zu bearbeiten, dass es `value="Bob"` im ersten Eingabefeld enthält. Wenn Sie den Code neu laden, sehen Sie, dass das erste Feld standardmäßig den Wert "Bob" enthält.

#### Spezialisierte Textfeld-Eingaben

Die zweite oben erwähnte Übung wirft einen interessanten Punkt auf. Das zweite Eingabefeld erwartet speziell eine E-Mail-Adresse und validiert die eingegebenen Werte entsprechend. Wenn Sie sich den Formularcode erneut ansehen, werden Sie sehen, warum – das zweite `<input>` hat einen `type` von `email`. Es gibt mehrere spezialisierte Textfeld-Eingabetypen, die verwendet werden, um bestimmte Arten von Daten zu verarbeiten – [`<input type="number">`](/de/docs/Web/HTML/Reference/Elements/input/number), [`<input type="password">`](/de/docs/Web/HTML/Reference/Elements/input/password), [`<input type="tel">`](/de/docs/Web/HTML/Reference/Elements/input/tel), usw.

Folgen Sie einigen der oben genannten Links, um herauszufinden, wofür diese Eingabetypen verwendet werden. Werfen Sie einen Blick auf unsere [`<input>`](/de/docs/Web/HTML/Reference/Elements/input)-Referenz und sehen Sie, ob Sie weitere spezialisierte Textfeld-Eingabetypen finden können.

### `<label>`-Elemente

Wie wir oben gesagt haben, bieten {{htmlelement("label")}}-Elemente beschreibende Bezeichnungen, die den Formularelementen zugeordnet sind und die Daten beschreiben, die in sie eingegeben werden sollen. Sie können beliebigen Textinhalt in `<label>`-Elemente einfügen, aber er sollte genau beschreiben, welche Daten das zugehörige Formularelement erwartet. Die Verbindung wird hergestellt, indem dem Formularelement ein `id`-Attribut gegeben wird, dann dem `<label>`-Element ein `for`-Attribut mit dem gleichen Wert wie die `id` des Elements.

Zum Beispiel:

```html
<label for="name">Name (required):</label>
<input type="text" name="name" id="name" required />
```

`<label>`-Elemente sind aus mehreren Gründen wichtig, insbesondere weil:

- Wenn sehbehinderte Benutzer einen Screenreader verwenden, um ihnen bei der Navigation durch und Interaktion mit Webseiten-Inhalten zu helfen, liest der Screenreader den zugehörigen Beschriftungstext vor, wenn jedes Steuerungselement aufgerufen wird. Dies erleichtert es den Benutzern, zu verstehen, welche Inhalte in jedes Steuerungselement eingegeben werden sollen.
- Sie ermöglichen es Ihnen, die Formularelemente durch Klicken auf ihren Beschriftungstext sowie die Steuerelemente zu fokussieren. Dies ist besonders nützlich für Mobiltelefonbenutzer, bei denen es schwierig sein kann, ein Formularelement mit dem Finger auf einem Touchscreen genau auszuwählen. Das Vergrößern der **Trefferzone** ist in solchen Fällen nützlich.

#### Explizite und implizite Formularelemente

Der oben gezeigte Formularstil wird als **explizites Formularelement** bezeichnet – die Verbindung zwischen Steuerung und Bezeichnung wird explizit über die `id`- und `for`-Attribute hergestellt. Sie können auch ein **implizites Formularelement** implementieren, indem Sie die Steuerung innerhalb der Beschriftung verschachteln, wie folgt:

```html
<label>
  Name (required):
  <input type="text" name="name" required />
</label>
```

Die Verschachtelung schafft eine implizite Verbindung zwischen Steuerung und Bezeichnung, und die `id`- und `for`-Attribute sind nicht mehr erforderlich.

Beide Ansätze sind in Ordnung, aber wir würden empfehlen, den expliziten Beschriftungsansatz zu verwenden. Dies liegt daran, dass die explizite Verbindung normalerweise einfacher zu identifizieren und zu verstehen ist, insbesondere wenn Ihr HTML-Code komplexer wird. Darüber hinaus handhaben Screenreader (und andere unterstützende Technologien) implizite Beschriftungen nicht immer korrekt.

Sie können mehr über beste Praktiken beim Beschriften von Formularen in [HTML Inputs and Labels: A Love Story](https://css-tricks.com/html-inputs-and-labels-a-love-story/), csstricks.com (2021) erfahren.

### Das `<button>`-Element

Wenn ein {{htmlelement("button")}}-Element in einem `<form>`-Element enthalten ist, ist sein Standardverhalten, dass es das Formular absendet, vorausgesetzt, es sind keine ungültigen Daten vorhanden, die die Übermittlung durch die clientseitige Formularüberprüfung blockieren. Sie haben dieses Verhalten bereits gesehen, als Sie mit unserem Basisform-Beispiel oben gespielt haben.

Es gibt andere Schaltflächenverhalten, die über das `type`-Attribut des `<button>`-Elements angegeben werden können:

- `<button type="submit">` gibt ausdrücklich an, dass eine Schaltfläche wie eine Absenden-Schaltfläche verhalten soll. Sie brauchen dies nie wirklich anzugeben, es sei denn, Sie schließen aus irgendeinem Grund andere Schaltflächen in Ihr `<form>` ein und möchten klarstellen, welche die Absenden-Schaltfläche ist. Dies wird sehr selten sein.
- `<button type="reset">` erstellt eine _Rücksetztaste_ – dies löscht sofort alle Daten aus dem Formular, setzt es auf seinen ursprünglichen Zustand zurück. **Verwenden Sie keine Rücksetztasten** – sie waren früher im Internet beliebt, aber sie sind normalerweise eher nervig als hilfreich. Die meisten Menschen haben die Erfahrung gemacht, ein langes Formular auszufüllen, nur um versehentlich die Rücksetztaste statt der Absenden-Schaltfläche zu drücken, was bedeutet, dass sie von vorne beginnen müssen.
- `<button type="button">` erstellt eine Schaltfläche mit dem gleichen Verhalten wie Schaltflächen außerhalb von `<form>`-Elementen. Wie wir bereits gesehen haben, tun sie standardmäßig absolut nichts, und es wird JavaScript benötigt, um ihnen Funktionalität zu verleihen.

Obwohl Sie diese Schaltflächentypen durch die Verwendung eines `<input>`-Elements mit denselben `type`-Werten – wie etwa [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit), [`<input type="reset">`](/de/docs/Web/HTML/Reference/Elements/input/reset), und [`<input type="button">`](/de/docs/Web/HTML/Reference/Elements/input/button) – erstellen können, haben sie viele Nachteile im Vergleich zu ihren `<button>`-Gegenstücken. Sie sollten daher `<button>` verwenden.

> [!NOTE]
> Scrimba<sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> bietet eine kostenlose Lektion — [Die Grundlagen der Formulare](https://scrimba.com/learn-responsive-web-design-c029/~031?via=mdn) — an, die eine nützliche interaktive Zusammenfassung der Grundlagen bietet, die wir zuvor in diesem Artikel behandelt haben.

## Ein Hinweis zur Barrierefreiheit

Wir haben bereits über die Bedeutung von Formularbezeichnungen für die Barrierefreiheit gesprochen, möchten jedoch auch einige Anmerkungen zur allgemeinen Bedeutung der Verwendung der richtigen semantischen Elemente zur Erstellung von Formularen machen (z. B. verwenden Sie eine `<button>`, um Ihr Formular abzusenden, und nicht ein `<div>`, das wie eine `<button>`-programmierte wurde). Es ist durchaus möglich, eine Kombination aus CSS und JavaScript zu verwenden, um praktisch jedes HTML-Element wie ein Formularelement aussehen und sich verhalten zu lassen. Entwickler tun dies normalerweise aus Designgründen – einige Formularelemente sind schwer zu gestalten.

Wenn Sie dies jedoch tun, machen Sie sich und Ihren Benutzern das Leben schwerer. Der Browser stellt mehrere `<button>`- und Formularelementfunktionen standardmäßig bereit, ohne dass JavaScript oder anderer zusätzlicher Code erforderlich ist, um Formulare für alle Benutzer benutzerfreundlicher zu gestalten.

Zum Beispiel:

- Semantische Elemente werden von unterstützender Technologie wie Screenreadern verstanden, die ihre Bedeutung an Benutzer übermitteln, die sie nicht sehen können.
- Formularelemente und Schaltflächen sind standardmäßig mit der Tastatur zugänglich. Im vorherigen Beispiel versuchen Sie, sich vorwärts und rückwärts zwischen den Formelementen mithilfe von <kbd>Tab</kbd> und <kbd>Shift</kbd> + <kbd>Tab</kbd> (auch "Tabbing" genannt) zu bewegen.
- Beachten Sie auch, wie das Tabben zwischen den Formelementen dazu führt, dass das fokussierte Element mit einem blauen Umriss hervorgehoben wird (genannt **Fokus-Umriss**). Dies ist eine wichtige Funktion für Tastaturnutzer, um zu wissen, wo sie sich derzeit im Formular befinden.

Wenn Sie nicht die richtigen semantischen Elemente verwenden, um Ihre Formulare zu implementieren, müssen Sie all diese Funktionen neu implementieren, sonst verhalten sich Ihre Formularelemente nicht so, wie die Benutzer es erwarten, und erscheinen daher als defekt. Alles summiert sich.

## Andere Steuerungstypen

Es gibt viele andere Steuerungstypen, die Sie verwenden können, um Daten in einem Formular zu sammeln. Lassen Sie uns ein etwas komplexeres Beispiel ansehen und dann untersuchen und erklären.

> [!NOTE]
> In diesem Beispiel gehen wir davon aus, dass der Benutzer bereits registriert und angemeldet ist und daher keine Details wie Name und E-Mail gesammelt werden müssen.

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

Wir empfehlen Ihnen, dieses Beispiel in einem separaten Browser-Tab zu öffnen, während Sie die nächsten Abschnitte durchgehen, in denen wir jeden Steuerungstyp der Reihe nach untersuchen. Um dies zu erreichen, kopieren Sie den Code in eine HTML-Datei mit Ihrem Code-Editor und öffnen Sie ihn in einem Browser-Tab.

Bevor Sie fortfahren, spielen Sie mit den verschiedenen Formularelementen in Ihrer lokalen Kopie und wählen Sie einige Werte aus. Versuchen Sie, das Formular abzusenden und sehen Sie, wie die eingereichten Daten in der URL aussehen.

### Optionsfelder

Die Schaltflächen "Zimmerart wählen" sind mithilfe von [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio)-Steuerelementen implementiert. Diese werden als eine Reihe von Druckknöpfen dargestellt, von denen jeweils nur einer ausgewählt werden kann – Sie können nicht mehr als einen gleichzeitig auswählen. Sie sind nach den Tasten der altmodischen Radios benannt, bei denen Sie eine Taste drücken und die zuvor ausgewählte wieder herauspringt.

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

`radio`-Eingabetypen funktionieren im Wesentlichen wie `text`-Eingabetypen, jedoch mit einigen Unterschieden:

- Die `name`-Attribute für jede Gruppe von Optionsfeldern müssen denselben Wert enthalten, um sie zusammen als ein Satz zu verbinden. Wenn sie unterschiedliche Werte enthalten, werden sie effektiv separate Sätze mit unterschiedlichen Werten bei der Einreichung sein.
- Sie müssen ein `value`-Attribut angeben, das den Wert enthält, der für jeden Radio-Knopf eingereicht wird. Der eingereichte Wert wird ein Namens-/Wertpaar sein, aber der Name wird immer derselbe sein, z.B. `hotel=economy` oder `hotel=superior`.
- Die `<label>` für jede Radio-Taste sollte diese spezifische Wertwahl beschreiben, anstatt den gesamten gewählten Wert. Der bevorzugte Weg, um eine Beschreibung der gesamten Wertwahl bereitzustellen, besteht darin, die Radiobuttons in ein {{htmlelement("fieldset")}} einzuschließen, das ein {{htmlelement("legend")}} Element als Kind enthält, das die Beschreibung enthält.

> [!NOTE]
> Neben der Strukturierung und Beschriftung von Formularen haben Fieldsets andere Verwendungsmöglichkeiten, wie zum Beispiel [Deaktivieren](#deaktivieren_von_formularelementen) einer gesamten Gruppe von Steuerelementen als eine Einheit.

Es ist auch erwähnenswert, dass wir das `checked`-Attribut auf das erste Radio-Knopf angewendet haben – dies bewirkt, dass es ausgewählt wird, wenn die Seite das erste Mal geladen wird. Dies bedeutet, dass eine Option immer ausgewählt sein wird und Sie ein Radio-Knopf nicht abwählen können, ohne ein anderes zu wählen.

Versuchen Sie, das `checked`-Attribut aus dem ersten Radio-Knopf zu entfernen, speichern Sie und laden Sie dann neu, um den Effekt zu sehen, den es hat. Setzen Sie es zurück, bevor Sie fortfahren.

#### Deaktivieren von Formularelementen

Im Optionsfeld-Beispiel werden Sie feststellen, dass das dritte Radio-Knopf das Attribut `disabled` gesetzt hat. Dies bewirkt, dass das gerenderte Steuerelement ausgegraut und nicht auswählbar ist. Dies ist in vielen Situationen nützlich, in denen eine Option normalerweise verfügbar ist, nur gerade nicht. Beispielsweise könnte ein Produkt ausverkauft sein, oder wie in unserem Beispiel sind die Penthouse-Suiten alle ausgebucht!

Sie können das `disabled`-Attribut auf jedes Formularelement setzen, einschließlich `<button>`-Elementen. `<fieldset>`-Elemente können ebenfalls das `disabled`-Attribut akzeptieren – dies bewirkt, dass jedes Formularelement innerhalb des Fieldsets deaktiviert wird.

Versuchen Sie, das `disabled`-Attribut auf den beiden `<fieldset>`-Elementen zu setzen, speichern Sie und laden Sie dann neu, um den Effekt zu sehen, den es hat. Entfernen Sie es wieder, bevor Sie weitermachen.

### Kontrollkästchen

Unsere Auswahlmöglichkeiten "Kurse, an denen Sie teilnehmen möchten" werden mithilfe von [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox)-Steuerelementen implementiert. Diese werden als eine Reihe von An-/Aus-Zustand-Kontrollkästchen gerendert. Im Gegensatz zu Optionsfeldern können Sie mehr als eins gleichzeitig auswählen.

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

Wie Sie an den Codeausschnitten erkennen können, werden Optionsfelder und Kontrollkästchen auf sehr ähnliche Weise implementiert (sie können auch `checked`-Attribute annehmen, um sie vorab ausgewählt zu rendern, wenn die Seite geladen wird). Sie verhalten sich auch sehr ähnlich, außer dass Optionsfelder es Ihnen erlauben, null oder ein Element aus vielen auszuwählen, und Kontrollkästchen es Ihnen erlauben, null oder mehr aus vielen auszuwählen.

Der Hauptunterschied (abgesehen vom `type`-Wert!) besteht darin, dass jedes Kontrollkästchen einen anderen `name`-Wert hat und sie im Allgemeinen keine `value`-Attribute erhalten. Verhaltenstechnisch bedeutet dies, dass sie unterschiedliche Datenwerte darstellen, während ein Satz von Optionsfeldern nur einen repräsentiert. Bei der Einreichung wird jeder Wert mit einem Wert von `on` gesendet, wenn das Kontrollkästchen angekreuzt war – `yoga=on`, `balloon=on` usw.

> [!NOTE]
> Es ist möglich, den Wert, der beim Ankreuzen eines Kontrollkästchens gesendet wird, durch Hinzufügen eines `value`-Attributs zu ändern, z.B.: `<input type="checkbox" id="yoga" name="yoga" value="yes" />` würde `yoga=yes` senden, wenn es angekreuzt ist. Allerdings hat dies keinen wirklichen Wert. Ein Kontrollkästchen wird entweder mit einem einzigen Wert gesendet, wenn es angekreuzt ist, oder es wird gar nicht gesendet. Es spielt keine große Rolle, welcher Wert an den Server gesendet wird.

### Dropdown-Menüs

Dropdown-Menüs, wie zum Beispiel das Auswahlkontrolle "Wie kommen Sie dorthin" in unserem Beispiel, werden nicht mit einem `<input>`-Typ erstellt, sondern mit den {{htmlelement("select")}} und {{htmlelement("option")}}-Elementen:

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

Das `<select>`-Element umschließt alle verschiedenen Wertauswahlmöglichkeiten. Es ist der Ort, an dem Sie das `id`-Attribut festlegen, das die Steuerung mit ihrem Label verbindet, und das `name`-Attribut, das den Namen des Datenelements für die Übermittlung festlegt.

Jede mögliche Wahl für das Datenelement wird durch ein `<option>`-Element dargestellt, das im `<select>`-Element verschachtelt ist. Jedes `<option>`-Element kann ein `value`-Attribut haben, das angibt, welcher Wert übermittelt wird, wenn diese Option aus der Dropdown-Liste ausgewählt wird. Wenn Sie keinen `value` angeben, wird der Text innerhalb der `<option></option>`-Tags als Wert verwendet.

> [!NOTE]
> Wenn Sie möchten, dass bei der ersten Seitenerstellung eine bestimmte Option ausgewählt wird, können Sie ein `selected`-Attribut zu dem entsprechenden `<option>`-Element hinzufügen.

### Mehrzeilige Text-Eingabefelder

Mehrzeilige Text-Eingabefelder werden mithilfe von {{htmlelement("textarea")}}-Elementen erstellt:

```html
<label for="comments">Any other comments:</label>
<textarea id="comments" name="comments" rows="5" cols="33"></textarea>
```

Sie verhalten sich wie `<input type="text">`-Elemente, außer dass sie mehrere Textzeilen eingeben lassen. Das `rows`-Attribut gibt die Anzahl der Zeilen an, die das Textfeld standardmäßig hoch sein wird, während das `cols`-Attribut die Anzahl der Spalten angibt, die das Textfeld standardmäßig breit sein wird. Wenn sie nicht angegeben sind, werden die Werte `cols="20"` und `rows="2"` verwendet.

Die meisten Browser rendern Texteingabefelder mit einem Ziehgriff in einer Ecke, die verwendet werden kann, um es zu skalieren. Probieren Sie aus, das Texteingabefeld in unserem Demo zu skalieren.

## Formularvalidierung

Früher haben wir uns einige der grundlegenden clientseitigen Formularüberprüfung angesehen, die der Browser bereitstellt. Das `required`-Attribut wird verwendet, um anzugeben, dass ein Feld ausgefüllt werden muss, bevor das Formular eingereicht werden kann. Es überprüft auch, ob der richtige Werttyp für bestimmte Wertetypen wie E-Mail-Adressen, URLs, Zahlen usw. eingegeben wurde. Validierung ist aus zwei Hauptgründen wichtig:

- Sicherstellen, dass Daten im richtigen Format übermittelt werden, damit sie keine Fehler in Ihrer Anwendung verursachen.
- Sicherstellen, dass die Daten keine Sicherheitsprobleme verursachen. Böse Menschen wissen, wie Daten speziell so formatiert übermittelt werden, dass sie in unsicheren Anwendungen möglicherweise Befehle zum Löschen von Datenbanken ausführen oder die Kontrolle über ein System übernehmen können.

Formularvalidierung ist ein umfangreiches Thema, das über den Umfang dieses Artikels hinausgeht, so dass wir es hier belassen werden. Nur im Hinterkopf behalten, dass es zwei Arten der Formvalidierung gibt:

- Clientseitige Validierung, die im Browser stattfindet, implementiert durch eine Kombination aus Formvalidierungsattributen (wie `required`) und JavaScript. Clientseitige Validierung ist nützlich, um Benutzern sofortige Hinweise zu geben, wenn sie falsche Daten eingegeben haben, aber es ist nicht so effektiv beim Stoppen von böswilligen Daten. Es ist zu einfach, JavaScript auszuschalten oder Client-seitigen Code so zu ändern, dass die Validierung nicht mehr funktioniert.
- Serverseitige Validierung, die auf dem Server stattfindet, implementiert in welcher Sprache auch immer der Server verwendet. Fehlerhafte Nachrichten können an einen Server geschickt werden, entweder zufällig oder absichtlich. Konventionelle Weisheit ist es, sicherzustellen, dass Ihr Server nichts von einem Client vertraut, um Fehler oder Sicherheitsprobleme durch fehlerhafte Nachrichten zu vermeiden. Serverseitige Validierung ist großartig, um böswillige Nachrichten zu stoppen, da es schwerer ist, den auf dem Server laufenden Code zu manipulieren. Serverseitige Validierung ist nicht so gut darin, Benutzern Hinweise auf falsche Daten zu geben, weil die Daten an den Server gesendet werden müssen, um validiert zu werden, dann muss das Ergebnis zurück an den Client gesendet werden, bevor der Benutzer benachrichtigt werden kann.

Kurz gesagt, wählen Sie nicht zwischen der Verwendung von entweder clientseitiger oder serverseitiger Validierung – Sie benötigen beides. Sie benötigen clientseitige Validierung, um den Benutzern Rückmeldungen zu ihren Eingaben zu geben und serverseitige Validierung, um sicherzustellen, dass Nachrichten in einem Format vorliegen, das Ihr Server sicher behandeln kann. Wenn Sie anfangen möchten, mehr über Validierung zu lernen, ist [Client-side form validation](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) ein guter Ausgangspunkt.

## Zusammenfassung

Das war's für den Moment. Es gibt noch viel mehr über Formulare zu wissen, aber für den Moment haben wir Ihnen ausreichend Verständnis vermittelt, um in Ihren Studien fortzufahren.

Als Nächstes geben wir Ihnen einige Tests, mit denen Sie überprüfen können, wie gut Sie die Informationen über HTML-Formulare, die wir bereitgestellt haben, verstanden und behalten haben.

## Siehe auch

- [Webformulare — Arbeiten mit Benutzerdaten](/de/docs/Learn_web_development/Extensions/Forms)

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content/Test_your_skills/Forms_and_buttons", "Learn_web_development/Core/Structuring_content")}}
