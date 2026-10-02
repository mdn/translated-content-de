---
title: Formulare und Schaltflächen in HTML
short-title: Formulare und Schaltflächen
slug: Learn_web_development/Core/Structuring_content/HTML_forms
l10n:
  sourceCommit: bfead5c281d92a213f0191746fd98a6bdc4dc457
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content/Test_your_skills/Forms_and_buttons", "Learn_web_development/Core/Structuring_content")}}

HTML-Formulare und -Schaltflächen sind leistungsfähige Werkzeuge für die Interaktion mit den Nutzern einer Website. Meistens stellen sie Steuerelemente bereit, mit denen Nutzer eine Benutzeroberfläche (UI) bedienen oder bei Bedarf Daten eingeben können.

Dieser Artikel führt in die Grundlagen von Formularen und Schaltflächen ein. Es gibt noch viel mehr darüber zu wissen – zahlreiche Eingabetypen und Formularfunktionen bleiben unerwähnt –, aber dieser Artikel vermittelt Ihnen eine solide Grundlage für die meisten Anwendungsfälle. Fortgeschrittene oder spezialisierte Einsatzmöglichkeiten können Sie bei Bedarf im Laufe Ihrer beruflichen Entwicklung kennenlernen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML, wie unter
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        > behandelt. Semantik auf Textebene, etwa
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
          >Überschriften und Absätze</a
        > sowie
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Lists"
          >Listen</a
        >. <a href="/de/docs/Learn_web_development/Core/Structuring_content/Structuring_documents"
          >Strukturelles HTML</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen, dass Formulare und Schaltflächen neben Links die wichtigsten Werkzeuge sind, mit denen Nutzer mit einer Website interagieren.</li>
          <li>Verschiedene Arten von Schaltflächen.</li>
          <li>Gängige <code>&lt;input&gt;</code>-Typen.</li>
          <li>Gängige Attribute wie <code>name</code> und <code>value</code>.</li>
          <li>Das <code>&lt;form&gt;</code>-Element und die Grundlagen des Absendens von Formularen.</li>
          <li>Formulare mithilfe von Beschriftungen und korrekter Semantik zugänglich gestalten.</li>
          <li>Weitere Steuerelementtypen: <code>&lt;textarea&gt;</code>, <code>&lt;select&gt;</code> und <code>&lt;option&gt;</code>.</li>
          <li>Grundlagen der clientseitigen Validierung.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Interaktion mit Nutzern

Bisher haben Sie in diesem Kurs einige Möglichkeiten kennengelernt, wie Nutzer mit dem Web interagieren können:

- Über [Links](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links) gelangen Nutzer zu anderen Inhaltsabschnitten, entweder auf derselben oder auf einer anderen Seite.
- [`<video>`- und `<audio>`-Elemente](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio) bieten in der Regel Steuerelemente wie Wiedergabe/Pause, schnellen Vorlauf und Rücklauf, mit denen Nutzer Medieninhalte nach Wunsch abspielen können.

Diese Funktionen ermöglichen jedoch meist nur eine einseitige Interaktion, bei der Nutzer Inhalte passiv konsumieren. Das ist in Ordnung, aber das Web bietet auch Möglichkeiten zur wechselseitigen Interaktion. Nutzer einer Website legen fest, wie sie Inhalte und Dienste nutzen möchten. Sie bestellen Taxis und bitten um Rückrufe. Sie geben Feedback und reichen Beschwerden ein. Sie kaufen Produkte und lassen sie sich nach Hause liefern.

Für diese wechselseitige Interaktion benötigen Sie Schaltflächen und Formulare.

Schaltflächen werden normalerweise mit HTML-{{htmlelement("button")}}-Elementen erstellt (manchmal auch mit {{htmlelement("input")}}-Elementen, deren `type`-Attribut auf einen Wert wie `button` oder `submit` gesetzt ist). Diese Schaltflächen sind vielseitig einsetzbar: Sie können damit jede gewünschte Funktion auslösen, soweit Ihre Vorstellungskraft und Programmierkenntnisse reichen.

Formulare werden mit Elementen wie {{htmlelement("form")}}, {{htmlelement("label")}}, {{htmlelement("input")}} und {{htmlelement("select")}} erstellt. Mit Formularelementen lassen sich komplexere Steuerelemente erstellen als mit einfachen Schaltflächen – beispielsweise ein Dropdown-Menü mit mehreren Optionen, über das Nutzer zwischen verschiedenen Designs für ein Element der Benutzeroberfläche wählen können.

Vor allem können Sie damit aber auch Formulare erstellen, die Nutzer ausfüllen, um Informationen an den Server einer Website zu senden. Denken Sie an E-Commerce-Websites: Wenn Sie nach einem Produkt suchen, das Sie kaufen möchten, geben Sie Suchbegriffe in ein Formular ein. Wenn Sie Artikel bezahlen und die Lieferung abschließen möchten, geben Sie Ihre Postanschrift in ein Formular und Ihre Kreditkartendaten in ein weiteres Formular ein.

Auf diese eher traditionelle Verwendung von Formularelementen konzentrieren wir uns in diesem Artikel. Beachten Sie, dass Schaltflächen auch häufig innerhalb von Formularen verwendet werden, um die eingegebenen Daten an den Server zu senden.

Nachdem wir diese wichtigen Grundlagen geklärt haben, sehen wir uns nun den Code an und untersuchen, wie Schaltflächen und Formulare implementiert werden.

## Schaltflächen

Wie bereits angedeutet, haben Schaltflächen im Web zwei Hauptanwendungen. Erstens lösen sie Funktionen aus, was beim Erstellen von Steuerelementen für Benutzeroberflächen nützlich ist. Die einfachste Schaltfläche wird mit folgendem Code implementiert:

```html live-sample___basic-button
<button>Press me</button>
```

Sie wird wie folgt dargestellt:

{{EmbedLiveSample("basic-button", "100%", "60")}}

Der Text zwischen den Tags `<button></button>` wird innerhalb der Schaltfläche angezeigt. Der Browser versieht sie mit einer grundlegenden Formatierung, sodass sie standardmäßig wie eine Schaltfläche aussieht und funktioniert. So weit, so gut. Allerdings gibt es ein Problem: Unsere einzelne Schaltfläche bewirkt für sich genommen noch nichts Nützliches. Damit sie eine sinnvolle Funktion erfüllt, müssen Sie sie in ein Formular einfügen (darauf gehen wir später ein) oder JavaScript hinzufügen.

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

Erhalten Sie das folgende Ergebnis – klicken Sie darauf:

{{EmbedLiveSample("basic-button-with-js", "100%", "60")}}

Sie müssen vorerst nicht verstehen, wie das JavaScript funktioniert. Im weiteren Verlauf des Kurses erfahren Sie mehr darüber.

Im nächsten Abschnitt sehen Sie eine Demonstration der zweiten Hauptanwendung von Schaltflächen: dem Absenden von Formularen.

## Der Aufbau eines Formulars

Ein einfaches Formular besteht aus drei Bestandteilen:

- Einem {{htmlelement("form")}}-Element, das den gesamten übrigen Formularinhalt umschließt. Alle Formularelemente innerhalb der Tags `<form></form>` gehören zum selben Formular, und ihre Daten werden beim Absenden des Formulars mitgesendet.
- Einem oder mehreren Paaren, die jeweils aus einem {{htmlelement("label")}}-Element und einem Formularsteuerelement bestehen (meist einem {{htmlelement("input")}}-Element, aber es gibt auch andere Typen, beispielsweise {{htmlelement("select")}}):
  - Das Formularsteuerelement ermöglicht es Nutzern, Daten auszuwählen oder einzugeben, die beim Absenden des Formulars an den Server gesendet werden.
  - Das `<label>`-Element stellt eine mit dem Formularsteuerelement verknüpfte Beschriftung bereit. Sie beschreibt, welche Daten dort eingegeben werden sollen.
- Einem {{htmlelement("button")}}-Element zum Absenden des Formulars.

Sehen wir uns ein einfaches Beispiel mit diesen drei Bestandteilen an. Mit diesem Formular könnten Sie nach dem Namen und der E-Mail-Adresse einer Person fragen, um sie für einen Newsletter anzumelden (keine Sorge – es ist mit keinem Server verbunden und bewirkt daher derzeit nichts).

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

```js hidden live-sample___form-anatomy live-sample___form-other-controls
document.querySelectorAll("form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
  });
});
```

Es wird wie folgt dargestellt:

{{EmbedLiveSample("form-anatomy", "100%", "200", , , , , "allow-forms")}}

Wenn Sie sofort auf „Sign me up!“ klicken, erscheint ein Validierungsfehler, weil Sie keine Daten eingegeben haben. Wenn Sie die Felder mit einem Namen und einer E-Mail-Adresse ausfüllen und anschließend auf „Sign me up!“ klicken, passiert nichts. Das liegt daran, dass wir das Absenden des Formulars verhindern, wodurch Sie sonst von dieser Seite weggeleitet würden.

Bevor Sie fortfahren, kopieren Sie den vorangehenden HTML-Code mit Ihrem [Code-Editor](/de/docs/Learn_web_development/Getting_started/Environment_setup/Code_editors) in eine neue HTML-Datei und öffnen Sie diese in einem neuen Browser-Tab.

### Das `<form>`-Element

Wie bereits erwähnt, dient das {{htmlelement("form")}}-Element als äußere Hülle des Formulars und fasst alle darin enthaltenen Formularsteuerelemente zusammen. Wenn die `<button>`-Schaltfläche gedrückt wird, werden alle durch die Formularsteuerelemente repräsentierten Daten an den Server gesendet. Das `<form>`-Element kann viele Attribute besitzen. Die beiden wichtigsten, die wir auch in unserem Beispiel verwendet haben, sind:

- `action`: Enthält den Pfad zu der Seite, an die die abgesendeten Formulardaten zur Verarbeitung gesendet werden sollen. Nachdem Sie das Formular abgesendet haben, sehen Sie `/submit_page` in der URL. Sie erhalten außerdem eine {{HTTPStatus("404")}}-Fehlerantwort, weil die Seite tatsächlich nicht existiert. Das ist vorerst kein Problem.
- `method`: Gibt die [Methode](/de/docs/Web/HTTP/Reference/Methods) an, mit der die Formulardaten an den Server übertragen werden sollen. Machen Sie sich darüber vorerst nicht zu viele Gedanken: Der Wert `get` bewirkt, dass die Daten als Parameter am Ende der URL angehängt werden.

#### Die abgesendeten Daten ansehen

1. Wechseln Sie zu dem Beispiel im separaten Tab und geben Sie als Namen „Bob“ und als E-Mail-Adresse „bob@bob.com“ ein.
2. Drücken Sie die `<button>`-Schaltfläche.

Die Attribute `action` und `method` bewirken, dass die Formulardaten über eine URL nach folgendem Muster gesendet werden:

```plain
/some/url/submit_page?name=Bob&email=bob%40bob.com
```

#### Formulare strukturieren

Innerhalb eines `<form>`-Elements können Sie beliebige HTML-Elemente verwenden, um die Formularelemente zu strukturieren und Container bereitzustellen, die Sie beispielsweise mit CSS gestalten können.

In unserem Beispiel haben wir ein [Überschriftenelement](/de/docs/Web/HTML/Reference/Elements/Heading_Elements) (`<h2>`) eingefügt, um den Zweck des Formulars zu beschreiben.

Außerdem haben wir jedes Eingabefeld/Beschriftungs-Paar und die Schaltfläche zum Absenden jeweils in ein eigenes {{htmlelement("p")}}-Element gesetzt, damit sie in getrennten Zeilen erscheinen. Diese Elemente sind standardmäßig Inline-Elemente. Ohne diese Maßnahme würden sie daher alle in derselben Zeile stehen.

Das ist eine gängige Methode, um Formulare zu strukturieren. Manche verwenden `<p>`-Elemente, um Formularelemente voneinander zu trennen, andere nutzen {{htmlelement("div")}}-, {{htmlelement("section")}}- oder sogar {{htmlelement("li")}}-Elemente. Entscheidend ist vor allem, dass die verwendeten Elemente semantisch sinnvoll sind. Beispielsweise ist es sinnvoll, Gruppen von Formularelementen in eigene Absätze, Inhaltsabschnitte oder sogar Listeneinträge zu unterteilen. Weniger sinnvoll wäre es, sie als [Blockzitate](/de/docs/Web/HTML/Reference/Elements/blockquote), [ergänzende Inhalte](/de/docs/Web/HTML/Reference/Elements/aside) oder [Adressen](/de/docs/Web/HTML/Reference/Elements/address) darzustellen.

Für das Gruppieren von Formularelementen gibt es ein spezielles Element namens {{htmlelement("fieldset")}}. Es ist in bestimmten Situationen nützlich, etwa bei komplexen Formularen oder zum Gruppieren mehrerer Kontrollkästchen und Optionsfelder. Später sehen wir uns einige Beispiele mit `<fieldset>` an.

### `<input>`-Elemente

Die {{htmlelement("input")}}-Elemente repräsentieren die verschiedenen Daten, die in das Formular eingegeben werden. Sehen wir uns eines der Elemente aus unserem einfachen Formular genauer an:

```html
<input type="text" name="name" id="name" required />
```

Die Attribute haben folgende Bedeutung:

- `type`: Legt den Typ des zu erstellenden Formularsteuerelements fest. Es gibt viele verschiedene Typen, von einfachen Textfeldern unterschiedlicher Art bis hin zu Optionsfeldern, Kontrollkästchen und weiteren Steuerelementen. Der Typ `text` stellt ein einfaches Textfeld dar, das beliebige Werte aufnehmen kann.
- `name`: Legt einen Namen für das Datenelement fest. Beim Absenden des Formulars werden die Daten als Name-Wert-Paare gesendet. Der Name entspricht jeweils dem Wert dieses `name`-Attributs, und der Wert entspricht dem im Textfeld eingegebenen Text.
- `id`: Legt eine ID fest, über die das Element identifiziert werden kann. Hier wird sie verwendet, um das Formularsteuerelement mit seinem `<label>` zu verknüpfen.
- `required`: Legt fest, dass in das Formularelement ein Wert eingegeben werden muss, bevor das Formular abgesendet werden kann. Dieses Attribut sollten Sie nur bei erforderlichen Eingabefeldern setzen, nicht bei optionalen Feldern.

Beachten Sie, dass manche Eingabetypen ihre Werte normalerweise nicht aus Text beziehen, der in ein Feld eingegeben wird. Beispielsweise stellt [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color) eine Farbauswahl dar, aus der Sie eine Farbe auswählen. [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio) stellt dagegen ein Optionsfeld dar, das ausgewählt sein kann oder nicht.

Bei Optionsfeldern müssen Sie den Wert, der im ausgewählten Zustand gesendet werden soll, in der Regel in einem eigenen `value`-Attribut angeben. Beachten Sie, dass Sie auch bei Eingabetypen wie `text` und `color` ein `value`-Attribut angeben _können_. Dadurch ist das Formularfeld beim ersten Anzeigen bereits mit diesem Wert vorbelegt.

#### Die Attribute `required` und `value` in der Praxis

1. Wechseln Sie erneut zu dem Beispiel, das Sie in einem separaten Tab geöffnet haben, und versuchen Sie, das Formular abzusenden, ohne in eines der Felder einen Wert einzugeben. Neben dem Feld „Name“ erscheint eine Fehlermeldung wie „Bitte füllen Sie dieses Feld aus“ (der genaue Wortlaut variiert je nach Browser). Hier sehen Sie das `required`-Attribut und die standardmäßige clientseitige Formularvalidierung des Browsers in Aktion.
2. Versuchen Sie nun, das Formular mit einem gültigen Namen im ersten Feld, aber einem Wert, der keine gültige E-Mail-Adresse ist, im zweiten Feld abzusenden (zum Beispiel „aaaa“). Diesmal erscheint neben dem Feld „Email“ eine Fehlermeldung wie „Bitte geben Sie eine E-Mail-Adresse ein“.
3. Bearbeiten Sie das Formular und fügen Sie dem ersten Eingabefeld `value="Bob"` hinzu. Wenn Sie den Code neu laden, sehen Sie, dass im ersten Feld standardmäßig „Bob“ eingetragen ist.

#### Spezialisierte Textfelder

Die zweite Übung wirft eine interessante Frage auf. Das zweite Eingabefeld erwartet ausdrücklich eine E-Mail-Adresse und überprüft eingegebene Werte entsprechend. Wenn Sie sich den Formularcode noch einmal ansehen, erkennen Sie den Grund: Das zweite `<input>` hat den `type`-Wert `email`.

Es gibt mehrere spezialisierte Textfeldtypen, die für bestimmte Datenarten vorgesehen sind, etwa [`<input type="number">`](/de/docs/Web/HTML/Reference/Elements/input/number), [`<input type="password">`](/de/docs/Web/HTML/Reference/Elements/input/password), [`<input type="tel">`](/de/docs/Web/HTML/Reference/Elements/input/tel) und [`<input type="url">`](/de/docs/Web/HTML/Reference/Elements/input/url).

Folgen Sie einigen der obigen Links, um herauszufinden, wofür diese Eingabetypen verwendet werden. Sehen Sie sich auch unsere Referenz zu [`<input>`](/de/docs/Web/HTML/Reference/Elements/input) an und prüfen Sie, ob Sie weitere spezialisierte Textfeldtypen finden.

### `<label>`-Elemente

Wie bereits erwähnt, stellen {{htmlelement("label")}}-Elemente Beschriftungen bereit, die mit Formularsteuerelementen verknüpft sind und beschreiben, welche Daten dort eingegeben werden sollen. Sie können beliebigen Text in ein `<label>`-Element schreiben. Er sollte jedoch genau beschreiben, welche Daten das zugehörige Formularsteuerelement erwartet. Die Verknüpfung entsteht, indem Sie dem Formularsteuerelement ein `id`-Attribut und dem `<label>`-Element ein `for`-Attribut mit demselben Wert zuweisen.

Zum Beispiel:

```html
<label for="name">Name (required):</label>
<input type="text" name="name" id="name" required />
```

`<label>`-Elemente sind aus mehreren Gründen wichtig, insbesondere:

- Wenn sehbehinderte Nutzer einen Screenreader verwenden, um Inhalte einer Webseite zu lesen und mit ihnen zu interagieren, liest der Screenreader beim Erreichen eines Steuerelements den zugehörigen Beschriftungstext vor. So können die Nutzer leichter verstehen, welche Inhalte sie in das jeweilige Steuerelement eingeben sollen.
- Sie ermöglichen es, Formularelemente nicht nur durch Anklicken des Steuerelements, sondern auch durch Anklicken seines Beschriftungstextes zu fokussieren. Das ist besonders für Nutzer von Mobiltelefonen hilfreich, für die es schwierig sein kann, ein Formularelement auf einem Touchscreen präzise mit dem Finger auszuwählen. In solchen Fällen ist eine größere **Trefferfläche** nützlich.

#### Explizite und implizite Formularbeschriftungen

Die oben gezeigte Art der Formularbeschriftung heißt **explizite Formularbeschriftung**: Die Verknüpfung zwischen Steuerelement und Beschriftung wird ausdrücklich über die Attribute `id` und `for` hergestellt. Sie können auch eine **implizite Formularbeschriftung** erstellen, indem Sie das Steuerelement in das Beschriftungselement einschließen:

```html
<label>
  Name (required):
  <input type="text" name="name" required />
</label>
```

Durch die Verschachtelung entsteht eine implizite Verknüpfung zwischen Steuerelement und Beschriftung. Die Attribute `id` und `for` sind dann nicht mehr erforderlich.

Beide Vorgehensweisen sind möglich, wir empfehlen jedoch die explizite Beschriftung. Die ausdrückliche Verknüpfung ist meist leichter zu erkennen und zu verstehen, insbesondere wenn Ihr HTML-Code komplexer wird. Außerdem verarbeiten Screenreader (und andere unterstützende Technologien) implizite Beschriftungen nicht immer korrekt.

Weitere Informationen über bewährte Methoden für Formularbeschriftungen finden Sie unter [HTML Inputs and Labels: A Love Story](https://css-tricks.com/html-inputs-and-labels-a-love-story/) auf csstricks.com (2021).

### Das `<button>`-Element

Wenn sich ein {{htmlelement("button")}}-Element innerhalb eines `<form>`-Elements befindet, sendet es das Formular standardmäßig ab – sofern keine ungültigen Daten vorliegen, wegen derer die clientseitige Formularvalidierung das Absenden verhindert. Dieses Verhalten haben Sie bereits beim Ausprobieren unseres einfachen Formularbeispiels gesehen.

Über das `type`-Attribut des `<button>`-Elements können Sie ein anderes Verhalten festlegen:

- `<button type="submit">` legt ausdrücklich fest, dass sich die Schaltfläche wie eine Schaltfläche zum Absenden verhält. Das müssen Sie normalerweise nicht angeben. Es kann jedoch sinnvoll sein, wenn Ihr `<form>` aus irgendeinem Grund weitere Schaltflächen enthält und Sie deutlich machen möchten, welche davon das Formular absendet. Das kommt sehr selten vor.
- `<button type="reset">` erstellt eine _Schaltfläche zum Zurücksetzen_. Sie entfernt sofort alle eingegebenen Formulardaten und stellt den Ausgangszustand wieder her. **Verwenden Sie keine Schaltflächen zum Zurücksetzen.** In der Anfangszeit des Webs waren sie beliebt, aber meistens sind sie eher lästig als hilfreich. Viele Menschen haben schon einmal ein langes Formular ausgefüllt und dann versehentlich statt auf die Schaltfläche zum Absenden auf die zum Zurücksetzen geklickt – und mussten von vorn beginnen.
- `<button type="button">` erstellt eine Schaltfläche mit demselben Verhalten wie Schaltflächen außerhalb von `<form>`-Elementen. Wie wir bereits gesehen haben, bewirken sie standardmäßig überhaupt nichts. Um ihnen eine Funktion zu geben, benötigen Sie JavaScript.

Sie können diese Schaltflächentypen zwar auch mit einem `<input>`-Element und denselben `type`-Werten erstellen – beispielsweise mit [`<input type="submit">`](/de/docs/Web/HTML/Reference/Elements/input/submit), [`<input type="reset">`](/de/docs/Web/HTML/Reference/Elements/input/reset) und [`<input type="button">`](/de/docs/Web/HTML/Reference/Elements/input/button) –, diese haben gegenüber den entsprechenden `<button>`-Elementen jedoch viele Nachteile. Verwenden Sie daher stattdessen `<button>`.

> [!NOTE]
> Scrimba<sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> bietet eine kostenlose Lektion – [Die Grundlagen von Formularen](https://scrimba.com/learn-responsive-web-design-c029/~031?via=mdn) –, die eine hilfreiche interaktive Wiederholung der bisher in diesem Artikel behandelten Formulargrundlagen enthält.

## Ein Hinweis zur Barrierefreiheit

Wir haben bereits darüber gesprochen, wie wichtig Formularbeschriftungen für die Barrierefreiheit sind. Darüber hinaus möchten wir betonen, wie wichtig es grundsätzlich ist, Formulare mit den passenden semantischen Elementen zu erstellen: Verwenden Sie beispielsweise ein `<button>`-Element, um Ihr Formular abzusenden, und kein `<div>`-Element, das so programmiert wurde, dass es sich wie ein `<button>` verhält. Mit einer Kombination aus CSS und JavaScript lässt sich nahezu jedes HTML-Element so gestalten und programmieren, dass es wie ein Formularelement aussieht und funktioniert. Entwickler tun dies meist aus gestalterischen Gründen, da manche Formularsteuerelemente schwer zu formatieren sind.

Dadurch machen Sie sich und Ihren Nutzern das Leben jedoch schwerer. Der Browser stellt standardmäßig mehrere Funktionen für `<button>`- und Formularsteuerelemente bereit. Sie benötigen weder JavaScript noch anderen zusätzlichen Code, damit diese Funktionen Formulare für alle Nutzer besser bedienbar machen.

Zum Beispiel:

- Unterstützende Technologien wie Screenreader erkennen semantische Elemente und vermitteln Nutzern, die sie nicht sehen können, deren Bedeutung.
- Formularsteuerelemente und Schaltflächen sind standardmäßig über die Tastatur zugänglich. Versuchen Sie im vorigen Beispiel, sich mit <kbd>Tab</kbd> und <kbd>Shift</kbd> + <kbd>Tab</kbd> zwischen den Formularelementen vorwärts und rückwärts zu bewegen.
- Beachten Sie auch, dass beim Wechseln zwischen den Formularelementen das fokussierte Element durch eine blaue Umrandung hervorgehoben wird (den **Fokusrahmen**). Diese Funktion ist für Tastaturnutzer wichtig, damit sie erkennen können, an welcher Stelle im Formular sie sich gerade befinden.

Wenn Sie Ihre Formulare nicht mit den passenden semantischen Elementen implementieren, verhalten sich die Formularelemente nicht so, wie Nutzer es erwarten, und wirken fehlerhaft. Sie müssten all diese Funktionen selbst nachbilden – und dieser Aufwand summiert sich.

## Weitere Steuerelementtypen

Es gibt viele weitere Steuerelementtypen, mit denen Sie Daten in einem Formular erfassen können. Sehen wir uns ein etwas komplexeres Beispiel an, das wir anschließend untersuchen und erläutern.

> [!NOTE]
> In diesem Beispiel gehen wir davon aus, dass die Nutzer bereits registriert und angemeldet sind. Deshalb müssen wir Angaben wie Name und E-Mail-Adresse nicht erfassen.

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

Es wird wie folgt dargestellt:

{{EmbedLiveSample("form-other-controls", "100%", "500", , , , , "allow-forms")}}

Wir empfehlen Ihnen, dieses Beispiel in einem separaten Browser-Tab zu öffnen, während Sie die nächsten Abschnitte durcharbeiten. Darin betrachten wir die einzelnen Steuerelementtypen nacheinander. Kopieren Sie dazu den Code mit Ihrem Code-Editor in eine HTML-Datei und öffnen Sie diese in einem Browser-Tab.

Bevor Sie fortfahren, probieren Sie die verschiedenen Formularsteuerelemente in Ihrer lokalen Kopie aus und wählen Sie einige Werte aus. Senden Sie das Formular testweise ab und sehen Sie sich an, wie die gesendeten Daten in der URL aussehen.

### Optionsfelder

Die Schaltflächen unter „Choose hotel room type“ sind mit [`<input type="radio">`](/de/docs/Web/HTML/Reference/Elements/input/radio) implementiert. Sie werden als Gruppe von Auswahlmöglichkeiten dargestellt, aus der jeweils nur eine ausgewählt sein kann. Sie können nicht mehrere gleichzeitig auswählen. Der Name stammt von den Tasten älterer Radiogeräte: Wenn man eine Taste drückt, springt die zuvor gedrückte wieder heraus.

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

Eingabeelemente vom Typ `radio` funktionieren größtenteils wie solche vom Typ `text`, allerdings mit einigen Unterschieden:

- Die `name`-Attribute aller Optionsfelder einer Gruppe müssen denselben Wert enthalten, damit sie als zusammengehörig gelten. Haben sie unterschiedliche Werte, bilden sie praktisch getrennte Gruppen und liefern beim Absenden unterschiedliche Daten.
- Jedes Optionsfeld benötigt ein `value`-Attribut mit dem Wert, der gesendet werden soll. Der gesendete Wert ist Teil eines Name-Wert-Paars, dessen Name innerhalb der Gruppe immer gleich bleibt, zum Beispiel `hotel=economy` oder `hotel=superior`.
- Das `<label>` eines Optionsfelds sollte die jeweilige Auswahlmöglichkeit beschreiben und nicht die gesamte Gruppe. Um die Auswahl als Ganzes zu beschreiben, fassen Sie die Optionsfelder vorzugsweise in einem {{htmlelement("fieldset")}} zusammen. Dieses enthält ein {{htmlelement("legend")}}-Element mit der Beschreibung.

> [!NOTE]
> Neben der Strukturierung und Beschriftung von Formularen haben Fieldsets weitere Einsatzmöglichkeiten, etwa das [Deaktivieren](#formularsteuerelemente_deaktivieren) einer gesamten Gruppe von Steuerelementen auf einmal.

Beachten Sie außerdem, dass wir dem ersten Optionsfeld das Attribut `checked` hinzugefügt haben. Dadurch ist es beim ersten Laden der Seite ausgewählt. Somit ist immer eine Option ausgewählt, und Sie können ein Optionsfeld nur abwählen, indem Sie ein anderes auswählen.

Entfernen Sie testweise das `checked`-Attribut vom ersten Optionsfeld, speichern Sie die Datei und laden Sie die Seite neu, um den Effekt zu sehen. Fügen Sie das Attribut wieder hinzu, bevor Sie fortfahren.

#### Formularsteuerelemente deaktivieren

Im Beispiel mit den Optionsfeldern sehen Sie, dass das dritte Optionsfeld das Attribut `disabled` besitzt. Dadurch wird das dargestellte Steuerelement ausgegraut und kann nicht ausgewählt werden. Das ist in vielen Situationen nützlich, in denen eine Option normalerweise verfügbar ist, momentan aber nicht. Beispielsweise könnte ein Produkt ausverkauft sein – oder, wie in unserem Beispiel, alle Penthouse-Suiten sind ausgebucht!

Sie können das Attribut `disabled` für jedes Formularsteuerelement setzen, auch für `<button>`-Elemente. `<fieldset>`-Elemente können dieses Attribut ebenfalls besitzen. Dadurch werden alle Formularsteuerelemente innerhalb des Fieldsets deaktiviert.

Setzen Sie testweise das Attribut `disabled` für die beiden `<fieldset>`-Elemente, speichern Sie die Datei und laden Sie die Seite neu, um den Effekt zu sehen. Entfernen Sie die Attribute wieder, bevor Sie fortfahren.

### Kontrollkästchen

Die Auswahlmöglichkeiten unter „classes to attend“ sind mit [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) implementiert. Sie werden als Kontrollkästchen dargestellt, die jeweils aktiviert oder deaktiviert sein können. Anders als bei Optionsfeldern können Sie mehrere gleichzeitig auswählen.

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

Wie Sie an den Codeausschnitten erkennen können, werden Optionsfelder und Kontrollkästchen sehr ähnlich implementiert (beide können auch das Attribut `checked` besitzen, damit sie beim Laden der Seite vorausgewählt sind). Ihr Verhalten ist ebenfalls recht ähnlich. Bei Optionsfeldern können Sie aus mehreren Möglichkeiten keine oder eine auswählen, bei Kontrollkästchen dagegen keine, eine oder mehrere.

Der wichtigste Unterschied – abgesehen vom Wert des Attributs `type` – ist, dass jedes Kontrollkästchen einen anderen `name`-Wert hat und sie normalerweise keine `value`-Attribute erhalten. Das bedeutet, dass sie unterschiedliche Datenwerte repräsentieren, während eine Gruppe von Optionsfeldern nur einen Datenwert repräsentiert. Beim Absenden wird für jedes markierte Kontrollkästchen der Wert `on` gesendet, beispielsweise `yoga=on`, `balloon=on` usw.

> [!NOTE]
> Sie können den für ein Kontrollkästchen gesendeten Wert ändern, indem Sie ihm ein `value`-Attribut geben. Beispielsweise würde `<input type="checkbox" id="yoga" name="yoga" value="yes" />` bei aktiviertem Kontrollkästchen dazu führen, dass `yoga=yes` gesendet wird.

### Dropdown-Menüs

Dropdown-Menüs, beispielsweise die Auswahl „How are you getting here“ in unserem Beispiel, werden nicht mit einem `<input>`-Typ implementiert, sondern mit den Elementen {{htmlelement("select")}} und {{htmlelement("option")}}:

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

Das `<select>`-Element umschließt alle möglichen Werte. Hier setzen Sie das `id`-Attribut, das das Steuerelement mit seiner Beschriftung verknüpft, sowie das `name`-Attribut, das den Namen des zu sendenden Datenelements festlegt.

Jeder mögliche Wert des Datenelements wird durch ein `<option>`-Element innerhalb des `<select>`-Elements repräsentiert. Jedes `<option>`-Element kann ein `value`-Attribut besitzen, das den Wert festlegt, der gesendet wird, wenn diese Option aus der Dropdown-Liste ausgewählt wird. Wenn Sie kein `value`-Attribut angeben, wird der Text zwischen den Tags `<option></option>` als Wert verwendet.

Mit dem {{htmlelement("optgroup")}}-Element können Sie die Optionen innerhalb eines `<select>`-Dropdown-Menüs außerdem in mehrere Untergruppen aufteilen. Auf der Referenzseite dieses Elements erfahren Sie, wie das funktioniert.

> [!NOTE]
> Wenn beim Laden der Seite eine bestimmte Option ausgewählt sein soll, können Sie dem entsprechenden `<option>`-Element das Attribut `selected` hinzufügen.

### Mehrzeilige Texteingabefelder

Mehrzeilige Texteingabefelder werden mit {{htmlelement("textarea")}}-Elementen erstellt:

```html
<label for="comments">Any other comments:</label>
<textarea id="comments" name="comments" rows="5" cols="33"></textarea>
```

Sie verhalten sich wie `<input type="text">`-Elemente, ermöglichen aber die Eingabe mehrerer Textzeilen. Das Attribut `rows` legt fest, wie viele Zeilen das Textfeld standardmäßig hoch ist; `cols` legt fest, wie viele Spalten es standardmäßig breit ist. Werden diese Attribute nicht angegeben, gelten die Werte `cols="20"` und `rows="2"`.

Die meisten Browser zeigen Textfelder mit einem Ziehpunkt in einer Ecke an, über den Sie ihre Größe ändern können. Probieren Sie aus, damit die Größe des Textfelds in unserer Demo zu verändern.

## Formularvalidierung

Weiter oben haben wir uns einige Grundlagen der clientseitigen Formularvalidierung angesehen, die der Browser bereitstellt. Mit dem Attribut `required` legen Sie fest, dass ein Feld ausgefüllt sein muss, bevor das Formular abgesendet werden kann. Bei bestimmten Datentypen wie E-Mail-Adressen, URLs und Zahlen überprüft der Browser außerdem, ob der eingegebene Wert dem erwarteten Typ entspricht. Die Validierung ist aus zwei Gründen wichtig:

- Sie stellt sicher, dass Daten im richtigen Format gesendet werden und dadurch keine Fehler in Ihrer Anwendung verursachen.
- Sie hilft, Sicherheitsprobleme durch Daten zu verhindern. Angreifer wissen, wie sie Daten so formatieren können, dass diese in unsicheren Anwendungen Befehle ausführen, um beispielsweise Datenbanken zu löschen oder die Kontrolle über ein System zu übernehmen.

Die Formularvalidierung ist ein umfangreiches Thema, das über den Rahmen dieses Artikels hinausgeht. Deshalb belassen wir es vorerst dabei. Behalten Sie jedoch im Hinterkopf, dass es zwei Arten der Formularvalidierung gibt:

- Die clientseitige Validierung findet im Browser statt und wird durch eine Kombination aus Formularvalidierungsattributen (wie `required`) und JavaScript umgesetzt. Sie ist nützlich, um Nutzern unmittelbar Rückmeldung zu geben, wenn sie falsche Daten eingegeben haben. Sie kann jedoch schädliche Daten nicht zuverlässig abwehren. JavaScript lässt sich allzu leicht deaktivieren oder clientseitiger Code so verändern, dass die Validierung nicht mehr funktioniert.
- Die serverseitige Validierung findet auf dem Server statt und wird in der Sprache implementiert, die der Server verwendet. Fehlerhaft formatierte Daten können versehentlich oder absichtlich an einen Server gesendet werden. Deshalb sollte Ihr Server grundsätzlich keinen vom Client gesendeten Daten vertrauen, um Fehler und Sicherheitsprobleme durch fehlerhafte Eingaben zu vermeiden. Die serverseitige Validierung kann schädliche Daten gut abwehren, da der auf dem Server ausgeführte Code schwerer zu manipulieren ist. Sie eignet sich allerdings weniger gut, um Nutzern unmittelbar Hinweise zu falschen Eingaben zu geben: Die Daten müssen erst zur Validierung an den Server gesendet und das Ergebnis anschließend an den Client zurückgeschickt werden, bevor die Nutzer benachrichtigt werden können.

Kurz gesagt: Entscheiden Sie sich nicht entweder für die clientseitige oder für die serverseitige Validierung – Sie benötigen beide. Die clientseitige Validierung gibt Nutzern Rückmeldung zu ihren Eingaben. Die serverseitige Validierung stellt sicher, dass Daten in einem Format vorliegen, das Ihr Server sicher verarbeiten kann. Wenn Sie mehr über Validierung erfahren möchten, ist [Clientseitige Formularvalidierung](/de/docs/Learn_web_development/Extensions/Forms/Form_validation) ein guter Ausgangspunkt.

## Zusammenfassung

Das war es fürs Erste. Über Formulare gibt es noch viel mehr zu wissen, aber Sie haben nun eine ausreichende Grundlage, um Ihre Kenntnisse weiter auszubauen.

Als Nächstes bieten wir Ihnen einige Tests an, mit denen Sie überprüfen können, wie gut Sie die Informationen zu HTML-Formularen verstanden und behalten haben.

## Siehe auch

- [Webformulare – Arbeiten mit Nutzerdaten](/de/docs/Learn_web_development/Extensions/Forms)

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Planet_data_table", "Learn_web_development/Core/Structuring_content/Test_your_skills/Forms_and_buttons", "Learn_web_development/Core/Structuring_content")}}
