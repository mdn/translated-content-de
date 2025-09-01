---
title: Umgang mit häufigen HTML- und CSS-Problemen
short-title: Häufige HTML- und CSS-Probleme
slug: Learn_web_development/Extensions/Testing/HTML_and_CSS
l10n:
  sourceCommit: 328ca42e0da893fa5cd60145c5a3f0044c2a012b
---

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Testing_strategies","Learn_web_development/Extensions/Testing/Feature_detection", "Learn_web_development/Extensions/Testing")}}

Mit dem festgelegten Rahmen werden wir nun spezifisch auf die häufigen plattformübergreifenden Probleme eingehen, auf die Sie in HTML- und CSS-Code stoßen werden, und welche Werkzeuge verwendet werden können, um Probleme zu verhindern oder zu beheben, die auftreten. Dies beinhaltet das Überprüfen des Codes, den Umgang mit CSS-Präfixen, die Verwendung von Entwicklerwerkzeugen im Browser zur Fehlersuche, die Verwendung von Polyfills zur Unterstützung in Browsern, die Bewältigung von Problemen mit responsivem Design und mehr.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den grundlegenden
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> Sprachen; eine Vorstellung
        von den hohen
        <a href="/de/docs/Learn_web_development/Extensions/Testing/Introduction">Prinzipien des plattformübergreifenden Testens</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        In der Lage sein, häufige plattformübergreifende HTML- und CSS-Probleme zu diagnostizieren und geeignete Werkzeuge und Techniken zu verwenden, um sie zu beheben.
      </td>
    </tr>
  </tbody>
</table>

## Die Probleme mit HTML und CSS

Einige der Probleme mit HTML und CSS entstehen dadurch, dass beide Sprachen relativ einfach sind und Entwickler sie oft nicht ernst nehmen, in Bezug darauf sicherzustellen, dass der Code gut gemacht, effizient und semantisch die Zweckbestimmung der Funktionen auf der Seite beschreibt. Im schlimmsten Fall wird JavaScript verwendet, um den gesamten Inhalt und das Styling der Webseite zu erstellen, was Ihre Seiten unzugänglich und weniger performant macht (die Erstellung von DOM-Elementen ist teuer). In anderen Fällen werden neue Funktionen nicht einheitlich über verschiedene Browser unterstützt, was dazu führen kann, dass einige Funktionen und Stile für einige Benutzer nicht funktionieren. Probleme mit responsivem Design sind auch häufig – eine Seite, die in einem Desktop-Browser gut aussieht, kann auf einem mobilen Gerät eine schreckliche Erfahrung bieten, weil der Inhalt zu klein ist, um ihn zu lesen, oder vielleicht ist die Seite langsam wegen teurer Animationen.

Lassen Sie uns fortfahren und uns ansehen, wie wir plattformübergreifende Fehler, die aus HTML/CSS resultieren, reduzieren können.

## Zuerst das Wesentliche: Allgemeine Probleme beheben

Wir sagten im [ersten Artikel dieser Serie](/de/docs/Learn_web_development/Extensions/Testing/Introduction#testingdiscovery), dass eine gute Strategie ist, zuerst in ein paar modernen Browsern auf Desktop/Mobilgeräten zu testen, um sicherzustellen, dass Ihr Code im Allgemeinen funktioniert, bevor Sie sich auf plattformübergreifende Probleme konzentrieren.

In unseren Artikeln [Debugging HTML](/de/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML) und [Debugging CSS](/de/docs/Learn_web_development/Core/Styling_basics/Debugging_CSS) haben wir einige wirklich grundlegende Anleitungen zur Fehlerbehebung in HTML/CSS gegeben — wenn Sie nicht mit den Grundlagen vertraut sind, sollten Sie diese Artikel auf jeden Fall studieren, bevor Sie fortfahren.

Grundsätzlich geht es darum, zu überprüfen, ob Ihr HTML- und CSS-Code gut formatiert ist und keine Syntaxfehler enthält.

> [!NOTE]
> Ein häufiges Problem mit CSS und HTML entsteht, wenn verschiedene CSS-Regeln beginnen, miteinander in Konflikt zu geraten. Dies kann besonders problematisch sein, wenn Sie Drittcode verwenden. Zum Beispiel könnten Sie ein CSS-Framework verwenden und feststellen, dass einer der Klassennamen, die es verwendet, mit einem von Ihnen bereits für einen anderen Zweck verwendeten Namen kollidiert. Oder Sie könnten feststellen, dass HTML, das von einer Art Drittanbieter-API generiert wird (zum Beispiel Werbebanner), einen Klassennamen oder eine ID enthält, die Sie bereits für einen anderen Zweck verwenden. Um sicherzustellen, dass dies nicht passiert, sollten Sie zuerst die Werkzeuge recherchieren, die Sie verwenden, und Ihr Code darum herum entwerfen. Es ist auch sinnvoll, CSS zu "namespacen", z. B. wenn Sie ein Widget haben, stellen Sie sicher, dass es eine eindeutige Klasse hat und beginnen Sie dann die Selektoren, die Elemente innerhalb des Widgets auswählen, mit dieser Klasse, sodass Konflikte weniger wahrscheinlich sind. Zum Beispiel `.audio-player ul a`.

### Validierung

Für HTML beinhaltet die Validierung die Überprüfung, ob alle Ihre Tags richtig geschlossen und verschachtelt sind, ob Sie einen Doctype verwenden und ob Sie Tags für ihren korrekten Zweck verwenden. Eine gute Strategie ist es, Ihren Code regelmäßig zu validieren. Ein Dienst, der dies leisten kann, ist der W3C [Markup Validation Service](https://validator.w3.org/), der es Ihnen ermöglicht, auf Ihren Code zu verweisen und eine Liste von Fehlern zurückzugeben:

![Die HTML-Validator-Startseite](validator.png)

CSS hat eine ähnliche Geschichte — Sie müssen überprüfen, ob Ihre Eigenschaftsnamen richtig geschrieben sind, ob Eigenschaftswerte korrekt geschrieben sind und für die Eigenschaften, auf denen sie verwendet werden, gültig sind, ob keine geschweiften Klammern fehlen und so weiter. Das W3C bietet auch einen [CSS Validator](https://jigsaw.w3.org/css-validator/) für diesen Zweck an.

### Linters

Eine weitere gute Option ist eine sogenannte Linter-Anwendung, die nicht nur Fehler aufzeigt, sondern auch Warnungen über schlechte Praktiken in Ihrem CSS und andere Punkte anzeigen kann. Linter können in der Regel so angepasst werden, dass sie strenger oder entspannter in ihrer Fehler-/Warnberichterstattung sind.

Es gibt viele Online-Linter-Anwendungen, wie [Dirty Markup](https://www.10bestdesign.com/dirtymarkup/) für HTML, CSS und JavaScript. Diese ermöglichen es Ihnen, Ihren Code in ein Fenster zu kopieren, und sie markieren Fehler mit Kreuzen, die dann gehovt werden können, um eine Fehlermeldung zu erhalten, die Sie über das Problem informiert. Dirty Markup erlaubt es Ihnen auch, Korrekturen an Ihrem Markup mit der _Clean_-Taste vorzunehmen.

![Dirty Markup-Anwendung zeigt die Nachricht "Unexpected character in unquoted attribute" über folgendes fehlerhafte HTML-Markup: <div id=combinators">](dirty-markup.png)

Es ist jedoch nicht sehr praktisch, Ihren Code mehrmals auf eine Webseite kopieren und einfügen zu müssen, um seine Gültigkeit zu überprüfen. Was Sie wirklich wollen, ist ein Linter, der in Ihren Standardworkflow passt, mit minimalem Aufwand.

Viele Code-Editoren haben Linter-Plugins. Beispielsweise siehe:

- [SublimeLinter](https://www.sublimelinter.com/) für Sublime Text
- [Notepad++ Linter](https://sourceforge.net/projects/notepad-linter/)
- [VS Code Linters](https://marketplace.visualstudio.com/search?target=vscode&category=Linters&sortBy=Installs)

### Entwicklerwerkzeuge des Browsers

Die Entwicklerwerkzeuge, die in den meisten Browsern eingebaut sind, bieten auch nützliche Werkzeuge zur Fehlersuche, hauptsächlich für CSS.

> [!NOTE]
> HTML-Fehler werden in den Entwicklerwerkzeugen nicht so leicht sichtbar, da der Browser versucht, schlecht geformtes Markup automatisch zu korrigieren; der W3C-Validator ist der beste Weg, um HTML-Fehler zu finden — siehe [Validierung](#validierung) oben.

Ein Beispiel: Im Firefox zeigt der CSS-Inspektor CSS-Deklarationen, die nicht angewendet werden, durchstreichen, mit einem Warnsymbol. Wenn Sie das Warnsymbol überfahren, erhalten Sie eine beschreibende Fehlermeldung:

![Die Entwicklerwerkzeuge streichen ungültiges CSS durch und fügen ein überfahrbares Warnsymbol hinzu](css-message-devtools.png)

Andere Entwicklerwerkzeuge von Browsern haben ähnliche Funktionen.

## Häufige plattformübergreifende Probleme

Nun wollen wir uns einige der häufigsten plattformübergreifenden HTML- und CSS-Probleme ansehen. Die Hauptbereiche, die wir betrachten werden, sind mangelnde Unterstützung für moderne Funktionen und Layout-Probleme.

### Browser unterstützen moderne Funktionen nicht

Das ist ein häufiges Problem, besonders wenn Sie alte Browser unterstützen müssen, oder Sie Funktionen verwenden, die in einigen Browsern, aber noch nicht in allen implementiert sind. Generell funktioniert die meiste grundlegende HTML- und CSS-Funktionalität (wie grundlegende HTML-Elemente, grundlegende CSS-Farben und Textdarstellung) über alle Browser hinweg, die Sie unterstützen möchten; mehr Probleme treten auf, wenn Sie beginnen, neuere HTML-, CSS- und APIs zu verwenden. MDN zeigt Kompatibilitätsdaten für jeden dokumentierten Funktionsumfang an; zum Beispiel siehe die [Browser-Unterstützungstabelle für die `:has()` Pseudoklasse](/de/docs/Web/CSS/:has#browser_compatibility).

Sobald Sie eine Liste der Technologien identifiziert haben, die Sie verwenden werden und die nicht universell unterstützt werden, ist es eine gute Idee, zu recherchieren, in welchen Browsern sie unterstützt werden und welche verwandten Techniken nützlich sind. Siehe [Hilfe finden](#hilfe_finden) unten.

### HTML-Fallback-Verhalten

Einige Probleme können gelöst werden, indem man einfach das natürliche Verhalten von HTML/CSS ausnutzt.

Nicht erkannte HTML-Elemente werden vom Browser als anonyme Inline-Elemente behandelt (effektiv Inline-Elemente ohne semantischen Wert, ähnlich wie {{htmlelement("span")}}-Elemente). Sie können dennoch mit ihren Namen darauf verweisen und sie mit CSS stylen – Sie müssen nur sicherstellen, dass sie sich so verhalten, wie Sie es wünschen. Stylen Sie sie einfach wie jedes andere Element, indem Sie beispielsweise die `display`-Eigenschaft auf etwas anderes als `inline` setzen, wenn nötig.

Komplexere Elemente wie HTML [`<video>`](/de/docs/Web/HTML/Reference/Elements/video), [`<audio>`](/de/docs/Web/HTML/Reference/Elements/audio), [`<picture>`](/de/docs/Web/HTML/Reference/Elements/picture), [`<object>`](/de/docs/Web/HTML/Reference/Elements/object), und [`<canvas>`](/de/docs/Web/HTML/Reference/Elements/canvas) (und andere Features außer dieser) haben natürliche Mechanismen, um Fallbacks hinzuzufügen, falls die verlinkten Ressourcen nicht unterstützt werden. Sie können Fallback-Inhalte zwischen den öffnenden und schließenden Tags hinzufügen, und nicht unterstützende Browser ignorieren das äußere Element effektiv und führen den verschachtelten Inhalt aus.

Beispielsweise:

```html
<video id="video" controls preload="metadata" poster="img/poster.jpg">
  <source
    src="video/tears-of-steel-battle-clip-medium.webm"
    type="video/webm" />
  <!-- Offer download -->
  <p>
    Your browser does not support WebM video; here is a link to
    <a href="video/tears-of-steel-battle-clip-medium.mp4"
      >view the video directly</a
    >
  </p>
</video>
```

Dieses Beispiel enthält einen einfachen Link, der es Ihnen erlaubt, das Video herunterzuladen, falls sogar der HTML-Videoplayer nicht funktioniert, sodass der Benutzer zumindest das Video dennoch zugreifen kann.

Ein weiteres Beispiel sind Formularelemente. Als neue [`<input>`](/de/docs/Web/HTML/Reference/Elements/input)-Typen eingeführt wurden, um spezifische Informationen in Formulare einzugeben, wie Zeiten, Daten, Farben, Zahlen usw., verwendete der Browser, falls er das neue Feature nicht unterstützte, mit dem Standard von `type="text"`. Input-Typen wurden hinzugefügt, die besonders nützlich sind, insbesondere auf mobilen Plattformen, wo es sehr wichtig ist, auf einfache Weise Daten einzugeben, um die Benutzererfahrung angenehm zu gestalten. Plattformen bieten je nach Eingabetyp verschiedene UI-Widgets an, wie z. B. ein Kalender-Widget zur Eingabe von Daten. Sollte ein Browser einen Eingabetyp nicht unterstützen, kann der Benutzer dennoch die erforderlichen Daten eingeben.

Das folgende Beispiel zeigt Datums- und Uhrzeiteingaben:

```html live-sample___form-test
<form>
  <div>
    <label for="date">Enter a date:</label>
    <input id="date" type="date" />
  </div>
  <div>
    <label for="time">Enter a time:</label>
    <input id="time" type="time" />
  </div>
</form>
```

```css hidden live-sample___form-test
div {
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

input {
  flex: 2;
}

label {
  flex: 1;
  text-align: right;
}

body {
  width: 400px;
  margin: 0 auto;
}
```

Die Ausgabe dieses Codes ist wie folgt:

{{EmbedLiveSample("form-test", '100%', 100)}}

Sie können die **Play**-Taste drücken, um das Beispiel im MDN Playground zu öffnen und den Quellcode zu bearbeiten.

Wenn Sie sich das Beispiel ansehen, werden Sie die UI-Funktionen in Aktion sehen, wenn Sie versuchen, Daten einzugeben. Auf Geräten mit dynamischen Tastaturen werden typenspezifische Tastenfelder angezeigt. In einem nicht unterstützenden Browser werden die Eingaben einfach zu normalen Texteingaben, was bedeutet, dass der Benutzer die korrekten Informationen dennoch eingeben kann.

### CSS-Fallback-Verhalten

CSS ist argumentativ besser bei Fallbacks als HTML. Wenn ein Browser auf eine Deklaration oder Regel stößt, die er nicht versteht, überspringt er diese einfach komplett, ohne sie anzuwenden oder einen Fehler zu werfen. Das mag für Sie und Ihre Benutzer frustrierend sein, wenn ein solcher Fehler in den Produktionscode rutscht, aber zumindest bedeutet es, dass die gesamte Seite nicht wegen eines Fehlers abstürzt, und wenn es klug genutzt wird, können Sie es zu Ihrem Vorteil nutzen.

Schauen wir uns ein Beispiel an — eine einfache Box, die mit CSS gestylt ist, und die einige Stile von verschiedenen CSS-Features erhalten hat:

```html hidden live-sample___blingy-button
<button>Press me</button>
```

```css hidden live-sample___blingy-button
html {
  font-family: sans-serif;
  height: 100%;
}

button {
  width: 150px;
  margin: auto;
  line-height: 2;
  font-size: 1.1rem;
  text-align: center;
  color: white;
  text-shadow: 1px 1px 1px black;
  border-radius: 20px / 15px;
  border: none;
  cursor: pointer;

  background-color: red;
  background-color: rgb(255 0 0 / 75%);
  box-shadow:
    inset 3px 3px 3px rgb(255 255 255 / 40%),
    inset -3px -3px 3px rgb(0 0 0 / 40%);
}

button:hover,
button:focus {
  background-color: rgb(255 0 0 / 100%);
}

button:active {
  box-shadow:
    inset 3px 3px 3px rgb(0 0 0 / 40%),
    inset -3px -3px 3px rgb(255 255 255 / 40%);
}

body {
  height: inherit;
  display: flex;
  align-items: center;
}
```

{{EmbedLiveSample("blingy-button", "100%", 60)}}

Sie können die **Play**-Taste drücken, um das Beispiel im MDN Playground zu öffnen und mit dem Quellcode zu spielen.

Der Button hat eine Reihe von Deklarationen erhalten, aber die, die uns am meisten interessieren, sind folgende:

```css
button {
  /* … */

  background-color: red;
  background-color: rgb(255 0 0 / 75%);
  box-shadow:
    inset 3px 3px 3px rgb(255 255 255 / 40%),
    inset -3px -3px 3px rgb(0 0 0 / 40%);
}

button:hover,
button:focus {
  background-color: rgb(255 0 0 / 100%);
}

button:active {
  box-shadow:
    inset 3px 3px 3px rgb(0 0 0 / 40%),
    inset -3px -3px 3px rgb(255 255 255 / 40%);
}
```

Hier bieten wir eine [RGB](/de/docs/Web/CSS/color_value/rgb) {{cssxref("background-color")}} an, die die Transparenz beim Überfahren ändert, um dem Benutzer einen Hinweis darauf zu geben, dass der Button interaktiv ist, und einige halbtransparente Innenkanten {{cssxref("box-shadow")}} Schatten, um dem Button ein wenig Textur und Tiefe zu verleihen. Obwohl jetzt vollständig unterstützt, sind RGB-Farben und Schatten noch nicht ewig vorhanden; sie begannen in IE9. Browser, die RGB-Farben nicht unterstützten, ignorierten die Deklaration, was bedeutete, dass in alten Browsern der Hintergrund überhaupt nicht angezeigt wurde, sodass der Text unleserlich wurde, was überhaupt nicht gut ist!

![Schwer zu sehender Pillen-Button mit weißem Text auf einem fast weißen Hintergrund](unreadable-button.png)

Um dies zu beheben, haben wir eine zweite `background-color` Deklaration hinzugefügt, die einfach die Farbengruppe `red` angibt — das wird seit längst veralteten Browsern unterstützt und dient als Fallback, wenn die modernen, glänzenden Features nicht funktionieren. Was passiert ist, dass ein Browser, der diese Seite besucht, zuerst den ersten `background-color` Wert anwendet; beim Erreichen der zweiten `background-color` Deklaration wird er den ursprünglichen Wert mit diesem Wert überschreiben, wenn er RGB-Farben unterstützt. Wenn nicht, ignoriert er einfach die gesamte Deklaration und fährt fort.

> [!NOTE]
> Das Gleiche gilt für andere CSS-Funktionen wie [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries), [`@font-face`](/de/docs/Web/CSS/@font-face) und [`@supports`](/de/docs/Web/CSS/@supports) Blöcke — wenn sie nicht unterstützt werden, ignoriert der Browser sie einfach.

### Selektorunterstützung

Natürlich werden keine CSS-Features angewendet, wenn Sie nicht die richtigen [Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors) verwenden, um das Element auszuwählen, das Sie stylen möchten!

In einer durch Kommas getrennten Selektorliste kann es vorkommen, dass ein Selektor nicht mit einem Element übereinstimmt, wenn er einfach falsch geschrieben ist. Wenn ein Selektor jedoch ungültig ist, wird die **gesamte** Selektorliste ignoriert, zusammen mit dem gesamten Stilblock. Aus diesem Grund sollten Sie ein `:-moz-`-präfixiertes Pseudoelement oder eine Pseudoklasse nur in einer [nachsichtigen Selektorenliste](/de/docs/Web/CSS/Selector_list#forgiving_selector_list) einschließen, wie `:where(::-moz-thumb)`. Schließen Sie ein `:-moz-`-präfixiertes Pseudoelement oder eine Pseudoklasse nicht innerhalb einer durch Komma getrennten Gruppe von Selektoren außerhalb einer [`:is()`](/de/docs/Web/CSS/:is) oder [`:where()`](/de/docs/Web/CSS/:where) nachsichtigen Selektorenliste ein, da alle anderen Browser als Firefox den gesamten Block ignorieren. Beachten Sie, dass sowohl `:is()` als auch `:where()` als Parameter in anderen Selektorenlisten verwendet werden können, einschließlich [`:has()`](/de/docs/Web/CSS/:has) und [`:not()`](/de/docs/Web/CSS/:not).

Wir finden, dass es hilfreich ist, das Element, das Sie stylen möchten, mit den Entwicklerwerkzeugen Ihres Browsers zu inspizieren und dann den DOM-Baum-Krümelpfad, den DOM-Inspektoren tendenziell bereitstellen, anzusehen, um zu sehen, ob Ihr Selektor im Vergleich dazu Sinn ergibt.

Zum Beispiel erhalten Sie in den Firefox-Entwicklerwerkzeugen diese Art von Ausgabe am unteren Rand des DOM-Inspektors:

![Der Krümelpfad der Elemente ist html > body > form > div.form > input#date](dom-breadcrumb-trail.png)

Wenn Sie beispielsweise diesen Selektor verwenden wollten, würden Sie sehen, dass er das Eingabeelement nicht wie gewünscht auswählen würde:

```css
form > #date {
  /* … */
}
```

(Das `date`-Formulareingabefeld ist kein direktes Kind des `<form>`-Elements; Sie wären besser beraten, einen allgemeinen Nachkommen-Selektor anstelle eines Kind-Selektors zu verwenden).

### Umgang mit CSS-Präfixen

Ein weiteres Set von Problemen ergibt sich aus CSS-Präfixen — dies sind Mechanismen, die ursprünglich verwendet wurden, um Browser-Anbietern die Implementierung ihrer eigenen Version eines CSS- (oder JavaScript-) Features zu ermöglichen, während die Technologie in einem experimentellen Zustand ist, damit sie damit spielen und es richtig machen können, ohne mit den Implementierungen anderer Browser oder den endgültigen unpräfixierten Implementierungen in Konflikt zu geraten.

Zum Beispiel verwendet Firefox `-moz-` und Chrome/Edge/Opera/Safari verwenden `-webkit-`. Andere Präfixe, die Ihnen in altem Code begegnen können und die sicher entfernt werden können, sind `-ms-`, das von Internet Explorer und frühen Versionen von Edge verwendet wurde, und `-o`, das in den ursprünglichen Versionen von Opera verwendet wurde.

Präfixierte Features sollten nie auf Produktionswebsites verwendet werden — sie können sich ohne Vorwarnung ändern oder entfernt werden, können Leistungsprobleme in alten Versionen verursachen, die sie benötigen, und sind die Ursache für plattformübergreifende Probleme gewesen. Dies ist besonders ein Problem, zum Beispiel, wenn Entwickler sich entscheiden, nur die `-webkit-`-Version einer Eigenschaft zu verwenden, was impliziert, dass die Seite in anderen Browsern nicht funktionieren wird. Dies ist tatsächlich so oft passiert, dass andere Browser-Hersteller `-webkit-`-präfixierte Versionen mehrerer CSS-Eigenschaften implementiert haben. Während Browser immer noch einige präfixierte Eigenschaftsnamen, Eigenschaftswerte und Pseudoklassen unterstützen, werden jetzt experimentelle Funktionen hinter Flags versteckt, damit Web-Entwickler sie während der Entwicklung testen können.

Verwenden Sie ein Präfix nur, wenn es notwendig ist; dass die Eigenschaft eine der wenigen verbleibenden präfixierten Features ist. Sie können nachsehen, welche Browser Präfixe erfordern, auf MDN-Referenzseiten und Seiten wie [caniuse.com](https://caniuse.com/). Wenn Sie unsicher sind, können Sie auch direkt in Browsern testen. Schließen Sie die Standard-unpräfixte Version nach der präfixierten Stil-Deklaration ein; sie wird ignoriert, wenn nicht unterstützt, und verwendet wenn unterstützt.

```css
.masked {
  -webkit-mask-image: url("MDN.svg");
  mask-image: url("MDN.svg");
  -webkit-mask-size: 50%;
  mask-size: 50%;
}
```

Probieren Sie dieses einfache Beispiel aus:

1. Verwenden Sie diese Seite oder eine andere Seite, die eine prominente Überschrift oder ein anderes Blockelement hat.
2. Rechts- oder Cmd-klicken Sie auf das betreffende Element und wählen Sie Inspect/Inspect element (oder was auch immer die Option in Ihrem Browser ist) — dies sollte die Entwicklerwerkzeuge in Ihrem Browser öffnen, mit dem hervorgehobenen Element im DOM-Inspektor.
3. Suchen Sie nach einem Feature, das Sie verwenden können, um dieses Element auszuwählen. Beispielsweise hat die Seite zum Zeitpunkt des Schreibens dieses Textes ein Logo mit einer ID von `mdn-docs-logo`.
4. Speichern Sie eine Referenz zu diesem Element in einer Variable, zum Beispiel:

   ```js
   const test = document.getElementById("mdn-docs-logo");
   ```

5. Versuchen Sie nun, einen neuen Wert für die CSS-Eigenschaft festzulegen, die Sie an diesem Element interessiert; Sie können dies mit der [style](/de/docs/Web/API/HTMLElement/style) Eigenschaft des Elements tun, zum Beispiel versuchen Sie, dies in die JavaScript-Konsole einzugeben:

   ```js
   test.style.transform = "rotate(90deg)";
   ```

Wenn Sie beginnen, den Eigentumsnamen nach dem zweiten Punkt einzugeben (beachten Sie, dass in JavaScript CSS-Eigenschaftsnamen in {{Glossary("camel_case", "lower camel case")}} und nicht in {{Glossary("kebab_case", "kebab-case")}} geschrieben werden), sollte die JavaScript-Konsole beginnen, die Namen der in dem Browser vorhandenen Eigenschaften, die dem bisher Geschriebenen entsprechen, automatisch zu vervollständigen. Dies ist nützlich, um herauszufinden, welche Eigenschaften in diesem Browser implementiert sind.

Wenn Sie moderne Funktionen einbeziehen müssen, testen Sie die Unterstützung von Funktionen mit [`@supports`](/de/docs/Web/CSS/@supports), die es Ihnen ermöglicht, native Funktionstests zu implementieren, und die präfixierte oder neue Funktion innerhalb des `@supports`-Blocks zu verschachteln.

### Probleme mit responsivem Design

Responsive Design ist die Praxis, Web-Layouts zu erstellen, die sich an verschiedene Formfaktoren von Geräten anpassen - beispielsweise unterschiedliche Bildschirmbreiten, Ausrichtungen (Porträt oder Landschaft) oder Auflösungen. Ein Desktop-Layout zum Beispiel wird auf einem mobilen Gerät schrecklich aussehen, daher müssen Sie ein geeignetes Mobil-Layout mit [Media Queries](/de/docs/Web/CSS/CSS_media_queries) bereitstellen und sicherstellen, dass es korrekt mit [viewport](/de/docs/Web/HTML/Guides/Viewport_meta_element) angewendet wird. Eine detaillierte Beschreibung solcher Praktiken finden Sie in [unserem Tutorial zum responsiven Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design).

Die Auflösung ist auch ein großes Problem — mobile Geräte benötigen zum Beispiel seltener große, schwere Bilder als Desktop-Computer und sind wahrscheinlicher mit langsameren Internetverbindungen ausgestattet, möglicherweise sogar mit teuren Datentarifen, die ungenutzte Bandbreite problematischer machen. Außerdem können verschiedene Geräte eine Reihe von unterschiedlichen Auflösungen haben, was bedeutet, dass kleinere Bilder pixelig erscheinen könnten. Es gibt eine Reihe von Techniken, die Ihnen helfen können, solche Probleme zu umgehen, von [media queries](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design#media_queries) zu komplexeren [responsive image techniques](/de/docs/Web/HTML/Guides/Responsive_images#resolution_switching_different_sizes), einschließlich {{HTMLElement('picture')}} und den [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset) und [`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes) Attributen des {{HTMLElement('img')}} Elements.

## Hilfe finden

Es gibt viele andere Probleme, auf die Sie bei HTML und CSS stoßen werden, was das Wissen, wie man online Antworten findet, unschätzbar macht.

Zu den besten Quellen für Unterstützungsinformationen zählen das Mozilla Developer Network (das ist, wo Sie sich jetzt befinden), [stackoverflow.com](https://stackoverflow.com/) und [caniuse.com](https://caniuse.com/).

Um das Mozilla Developer Network (MDN) zu nutzen, machen die meisten Menschen eine Suchmaschinenanfrage der Technologie, zu der sie Informationen finden möchten, plus den Begriff "mdn", zum Beispiel "mdn HTML video". MDN enthält mehrere nützliche Inhaltstypen:

- Referenzmaterial mit Browserunterstützungsinformationen für clientseitige Webtechnologien, zum Beispiel die [`<video>` Referenzseite](/de/docs/Web/HTML/Reference/Elements/video).
- Andere unterstützende Referenzmaterialien, zum Beispiel unser [Leitfaden zu Medientypen und Formaten im Web](/de/docs/Web/Media/Guides/Formats),
- Nützliche Tutorials, die spezifische Probleme lösen, zum Beispiel [Erstellen eines plattformübergreifenden Video-Players](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player).

[caniuse.com](https://caniuse.com/) liefert Unterstützungsinformationen zusammen mit einigen nützlichen externen Ressourcenlinks. Sehen Sie zum Beispiel <https://caniuse.com/#search=video> an (Sie müssen nur das Feature, nach dem Sie suchen, in das Textfeld eingeben).

[stackoverflow.com](https://stackoverflow.com/) (SO) ist ein Forensite, auf der Sie Fragen stellen und andere Entwickler ihre Lösungen teilen können, frühere Beiträge nachschlagen und anderen Entwicklern helfen können. Es wird empfohlen, zuerst zu schauen, ob es bereits eine Antwort auf Ihre Frage gibt, bevor Sie eine neue Frage stellen. Zum Beispiel haben wir auf SO nach "Autofokus auf HTML-Dialog deaktivieren" gesucht und sehr schnell [Autofokus von showModal mit HTML-Attributen deaktivieren](https://stackoverflow.com/questions/63267581/disable-showmodal-auto-focusing-using-html-attributes) gefunden.

Abgesehen davon, versuchen Sie, Ihre bevorzugte Suchmaschine zu verwenden, um eine Antwort auf Ihr Problem zu finden. Es ist oft nützlich, nach spezifischen Fehlermeldungen zu suchen, falls Sie diese haben — andere Entwickler hatten wahrscheinlich die gleichen Probleme wie Sie.

## Zusammenfassung

Nun sollten Sie mit den Hauptarten plattformübergreifender HTML- und CSS-Probleme vertraut sein, denen Sie in der Webentwicklung begegnen und wissen, wie man sie behebt.

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Testing_strategies","Learn_web_development/Extensions/Testing/Feature_detection", "Learn_web_development/Extensions/Testing")}}
