---
title: Umgang mit häufigen HTML- und CSS-Problemen
short-title: Häufige HTML- und CSS-Probleme
slug: Learn_web_development/Extensions/Testing/HTML_and_CSS
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Testing_strategies","Learn_web_development/Extensions/Testing/Feature_detection", "Learn_web_development/Extensions/Testing")}}

Nachdem wir den Rahmen abgesteckt haben, werden wir uns nun speziell die häufigen browserübergreifenden Probleme ansehen, auf die Sie in HTML- und CSS-Code stoßen werden und welche Werkzeuge verwendet werden können, um Probleme zu verhindern oder zu beheben, die auftreten. Dazu gehört das Linting von Code, der Umgang mit CSS-Präfixen, die Verwendung von Browser-Entwicklertools zur Auffindung von Problemen, die Verwendung von Polyfills zur Hinzufügung von Unterstützung in Browsern, das Angehen von Problemen beim responsiven Design und mehr.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den grundlegenden
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> Sprachen; eine Vorstellung
        von den grundlegenden
        <a
          href="/de/docs/Learn_web_development/Extensions/Testing/Introduction"
          >Prinzipien des Cross-Browser-Testings</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die Fähigkeit, häufige HTML- und CSS-browserübergreifende Probleme zu diagnostizieren
        und geeignete Werkzeuge und Techniken zur Behebung zu verwenden.
      </td>
    </tr>
  </tbody>
</table>

## Die Probleme mit HTML und CSS

Einige der Probleme mit HTML und CSS liegen darin, dass beide Sprachen recht einfach sind und Entwickler sie oft nicht ernst genug nehmen, um sicherzustellen, dass der Code gut gestaltet, effizient und semantisch den Zweck der Funktionen auf der Seite beschreibt. Im schlimmsten Fall wird JavaScript verwendet, um den gesamten Webseiteneinsatz und -stil zu generieren, was Ihre Seiten unzugänglich und weniger performant macht (das Erzeugen von DOM-Elementen ist ressourcenintensiv). In anderen Fällen werden neu aufkommende Funktionen nicht konsistent über alle Browser hinweg unterstützt, was dazu führen kann, dass einige Funktionen und Stile für einige Benutzer nicht funktionieren. Probleme mit responsivem Design sind ebenfalls häufig — eine Seite, die in einem Desktop-Browser gut aussieht, kann auf einem mobilen Gerät eine schreckliche Erfahrung bieten, weil der Inhalt zu klein zum Lesen ist oder vielleicht die Seite langsam ist wegen ressourcenintensiver Animationen.

Schauen wir uns nun an, wie wir browserübergreifende Fehler reduzieren können, die aus HTML/CSS resultieren.

## Zunächst: Allgemeine Probleme beheben

Wir sagten im [ersten Artikel dieser Serie](/de/docs/Learn_web_development/Extensions/Testing/Introduction#testingdiscovery), dass eine gute Strategie ist, mit dem Testen in ein paar modernen Browsern auf Desktop/Mobile zu beginnen, um sicherzustellen, dass Ihr Code im Allgemeinen funktioniert, bevor Sie sich auf die browserübergreifenden Probleme konzentrieren.

In unseren Artikeln über [Debugging von HTML](/de/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML) und [Debugging von CSS](/de/docs/Learn_web_development/Core/Styling_basics/Debugging_CSS) haben wir einige wirklich grundlegende Anleitungen zum Debuggen von HTML/CSS gegeben — wenn Sie nicht mit den Grundlagen vertraut sind, sollten Sie diese Artikel definitiv studieren, bevor Sie weitermachen.

Im Wesentlichen geht es darum, zu überprüfen, ob Ihr HTML- und CSS-Code gut formatiert ist und keine Syntaxfehler enthält.

> [!NOTE]
> Ein häufiges Problem mit CSS und HTML tritt auf, wenn verschiedene CSS-Regeln miteinander in Konflikt geraten. Dies kann insbesondere dann problematisch sein, wenn Sie Drittcode verwenden. Zum Beispiel könnten Sie ein CSS-Framework verwenden und feststellen, dass einer der Klassennamen, die es verwendet, mit einem Namen kollidiert, den Sie bereits für einen anderen Zweck verwendet haben. Oder Sie könnten feststellen, dass HTML, das von einer Art Drittanbieter-API generiert wird (zum Beispiel Werbebanner), einen Klassennamen oder eine ID enthält, die Sie bereits für einen anderen Zweck verwenden. Um sicherzustellen, dass dies nicht passiert, müssen Sie die Werkzeuge, die Sie verwenden, zuerst recherchieren und Ihren Code darum herum gestalten. Es ist auch sinnvoll, CSS zu "namespace", z.B. wenn Sie ein Widget haben, stellen Sie sicher, dass es eine eindeutige Klasse hat, und beginnen Sie dann die Selektoren, die Elemente innerhalb des Widgets auswählen, mit dieser Klasse, so dass Konflikte weniger wahrscheinlich werden. Zum Beispiel `.audio-player ul a`.

### Validierung

Für HTML bedeutet Validierung, sicherzustellen, dass alle Ihre Tags ordnungsgemäß geschlossen und verschachtelt sind, dass Sie einen Doctype verwenden und dass Sie Tags für ihren richtigen Zweck verwenden. Eine gute Strategie ist es, Ihren Code regelmäßig zu validieren. Ein Service, der dies tun kann, ist der W3C [Markup Validation Service](https://validator.w3.org/), der es Ihnen ermöglicht, auf Ihren Code zu verweisen und eine Liste von Fehlern zurückzugeben:

![Die Startseite des HTML Validators](validator.png)

CSS hat eine ähnliche Geschichte — Sie müssen überprüfen, ob Ihre Eigenschaftsnamen korrekt geschrieben sind, Eigenschaftswerte korrekt geschrieben sind und für die Eigenschaften, auf denen sie verwendet werden, gültig sind, dass keine geschweiften Klammern fehlen usw. Das W3C hat ebenfalls einen [CSS Validator](https://jigsaw.w3.org/css-validator/) für diesen Zweck.

### Linter

Eine weitere gute Option ist eine sogenannte Linter-Anwendung, die nicht nur Fehler aufzeigt, sondern auch Warnungen über schlechte Praktiken in Ihrem CSS und andere Punkte anzeigen kann. Linter können in der Regel angepasst werden, um strikter oder entspannter in ihrer Fehler-/Warnmeldung zu sein.

Es gibt viele Online-Linter-Anwendungen, wie [Dirty Markup](https://www.10bestdesign.com/dirtymarkup/) für HTML, CSS und JavaScript. Diese ermöglichen es Ihnen, Ihren Code in ein Fenster einzufügen, und sie werden Fehler mit Kreuzen markieren, die dann gehakt werden können, um eine Fehlermeldung über das Problem anzuzeigen. Dirty Markup ermöglicht es Ihnen auch, Ihre Markup über die _Clean_ Schaltfläche zu korrigieren.

![Dirty Markup-Anwendung zeigt die Nachricht "Unerwartetes Zeichen in einem unbestimmten Attribut" über folgendem fehlerhaften HTML-Markup: <div id=combinators">](dirty-markup.png)

Es ist jedoch nicht sehr bequem, Ihren Code mehrmals zu kopieren und auf eine Webseite einzufügen, um seine Gültigkeit zu überprüfen. Was Sie wirklich wollen, ist ein Linter, der sich in Ihren Standard-Workflow mit minimalem Aufwand einfügt.

Viele Code-Editoren haben Linter-Plugins. Zum Beispiel siehe:

- [SublimeLinter](https://www.sublimelinter.com/) für Sublime Text
- [Notepad++ Linter](https://sourceforge.net/projects/notepad-linter/)
- [VS Code Linter](https://marketplace.visualstudio.com/search?target=vscode&category=Linters&sortBy=Installs)

### Browser Entwicklerwerkzeuge

Die Entwicklerwerkzeuge, die in die meisten Browser eingebaut sind, bieten ebenfalls nützliche Werkzeuge zum Aufspüren von Fehlern, hauptsächlich für CSS.

> [!NOTE]
> HTML-Fehler tauchen in Entwicklerwerkzeugen nicht so leicht auf, da der Browser versucht, schlecht geformte Markup automatisch zu korrigieren; der W3C-Validator ist der beste Weg, um HTML-Fehler zu finden — siehe [Validierung](#validierung) oben.

Ein Beispiel: Im CSS-Inspektor von Firefox werden CSS-Deklarationen, die nicht angewendet werden, durchgestrichen angezeigt, mit einem Warn-Dreieck. Wenn das Warn-Dreieck gehakt wird, wird eine beschreibende Fehlermeldung angezeigt:

![Die Entwicklerwerkzeuge durchstreichen ungültiges CSS und fügen ein hoverbares Warnsymbol hinzu](css-message-devtools.png)

Andere Browser-Entwicklertools haben ähnliche Funktionen.

## Häufige browserübergreifende Probleme

Schauen wir uns nun einige der häufigsten browserübergreifenden HTML- und CSS-Probleme an. Die Hauptbereiche, die wir uns ansehen werden, sind fehlende Unterstützung für moderne Funktionen und Layout-Probleme.

### Browser, die moderne Funktionen nicht unterstützen

Dies ist ein häufiges Problem, insbesondere wenn Sie alte Browser unterstützen müssen oder Sie Funktionen verwenden, die in einigen Browsern implementiert wurden, aber noch nicht in allen. Im Allgemeinen funktionieren die meisten grundlegenden HTML- und CSS-Funktionen (wie grundlegende HTML-Elemente, grundlegende CSS-Farben und Textstil) in allen Browsern, die Sie unterstützen möchten; mehr Probleme treten auf, wenn Sie neuere HTML-, CSS- und APIs verwenden möchten. MDN zeigt Browser-Kompatibilitätsdaten für jede dokumentierte Funktion. Zum Beispiel sehen Sie sich die [Browser-Support-Tabelle für die `:has()` Pseudo-Klasse](/de/docs/Web/CSS/Reference/Selectors/:has#browser_compatibility) an.

Sobald Sie eine Liste von Technologien identifiziert haben, die Sie verwenden werden und die nicht universell unterstützt werden, ist es sinnvoll, zu recherchieren, in welchen Browsern sie unterstützt werden und welche verwandten Techniken nützlich sind. Siehe [Hilfe finden](#hilfe_finden) unten.

### HTML Fallback-Verhalten

Einige Probleme können gelöst werden, indem einfach die natürliche Funktionsweise von HTML/CSS genutzt wird.

Nicht erkannte HTML-Elemente werden vom Browser als anonyme Inline-Elemente behandelt (effektiv Inline-Elemente ohne semantischen Wert, ähnlich wie {{htmlelement("span")}}-Elemente). Sie können immer noch auf sie nach ihren Namen verweisen und sie mit CSS stylen, zum Beispiel — Sie müssen nur sicherstellen, dass sie sich so verhalten, wie Sie es wünschen. Stylen Sie sie einfach wie jedes andere Element, einschließlich der Einstellung der `display` Eigenschaft auf etwas anderes als `inline`, falls erforderlich.

Komplexere Elemente wie HTML [`<video>`](/de/docs/Web/HTML/Reference/Elements/video), [`<audio>`](/de/docs/Web/HTML/Reference/Elements/audio), [`<picture>`](/de/docs/Web/HTML/Reference/Elements/picture), [`<object>`](/de/docs/Web/HTML/Reference/Elements/object) und [`<canvas>`](/de/docs/Web/HTML/Reference/Elements/canvas) (und andere Funktionen darüber hinaus) haben natürliche Mechanismen für Fallbacks, die hinzugefügt werden können, falls die verlinkten Ressourcen nicht unterstützt werden. Sie können Fallback-Inhalte zwischen den öffnenden und schließenden Tags hinzufügen, und nicht unterstützende Browser werden das äußere Element effektiv ignorieren und den eingebetteten Inhalt ausführen.

Zum Beispiel:

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

Dieses Beispiel enthält einen einfachen Link, der Ihnen erlaubt, das Video herunterzuladen, falls selbst der HTML-Videoplayer nicht funktioniert, so dass der Benutzer zumindest noch auf das Video zugreifen kann.

Ein weiteres Beispiel sind Formularelemente. Als neue [`<input>`](/de/docs/Web/HTML/Reference/Elements/input) Typen für das Eingeben spezifischer Informationen in Formulare eingeführt wurden, wie Zeiten, Daten, Farben, Zahlen usw., verwendet der Browser, falls er die neue Funktion nicht unterstützt, den Standard `type="text"`. Eingabetypen wurden hinzugefügt, die besonders auf mobilen Plattformen sehr nützlich sind, wo die Bereitstellung einer schmerzfreien Möglichkeit zur Dateneingabe sehr wichtig für die Benutzererfahrung ist. Plattformen stellen je nach Eingabetyp verschiedene UI-Widgets bereit, wie z.B. ein Kalender-Widget zur Eingabe von Daten. Sollte ein Browser einen Eingabetyp nicht unterstützen, kann der Benutzer trotzdem die erforderlichen Daten eingeben.

Das folgende Beispiel zeigt Datums- und Zeitangaben:

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

Die Ausgabe dieses Codes ist wie folgt dargestellt:

{{EmbedLiveSample("form-test", '100%', 100)}}

Sie können die **Play**-Taste drücken, um das Beispiel im MDN Playground zu öffnen und den Quellcode zu bearbeiten.

Wenn Sie das Beispiel ansehen, werden Sie die UI-Funktionen in Aktion sehen, wenn Sie versuchen, Daten einzugeben. Auf Geräten mit dynamischen Tastaturen werden typenspezifische Tastaturen angezeigt. In einem nicht unterstützenden Browser werden die Eingaben einfach auf normale Texteingaben zurückgesetzt, was bedeutet, dass der Benutzer trotzdem die richtigen Informationen eingeben kann.

### CSS Fallback-Verhalten

CSS ist im Hinblick auf Fallbacks möglicherweise besser als HTML. Wenn ein Browser auf eine Deklaration oder Regel stößt, die er nicht versteht, überspringt er sie einfach komplett, ohne sie anzuwenden oder einen Fehler zu werfen. Dies könnte für Sie und Ihre Benutzer frustrierend sein, wenn ein solcher Fehler in den Produktionscode gelangt, aber zumindest bedeutet es, dass die ganze Seite nicht infolge eines Fehlers zusammenbricht, und wenn es klug verwendet wird, können Sie es zu Ihrem Vorteil nutzen.

Schauen wir uns ein Beispiel an — ein einfaches Box, das mit CSS gestylt ist und einige Styles hat, die von verschiedenen CSS-Funktionen bereitgestellt werden:

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
  background-color: rgb(255 0 0 / 90%);
  box-shadow:
    inset 3px 3px 3px rgb(255 255 255 / 40%),
    inset -3px -3px 3px rgb(0 0 0 / 40%);
}

button:hover,
button:focus {
  background-color: rgb(255 0 0 / 50%);
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

Sie können die **Play**-Taste drücken, um das Beispiel im MDN Playground zu öffnen und den Quellcode auszuprobieren.

Die Schaltfläche hat eine Reihe von Deklarationen, aber die, an denen wir am meisten interessiert sind, sind die folgenden:

```css
button {
  /* … */

  background-color: red;
  background-color: rgb(255 0 0 / 90%);
  box-shadow:
    inset 3px 3px 3px rgb(255 255 255 / 40%),
    inset -3px -3px 3px rgb(0 0 0 / 40%);
}

button:hover,
button:focus {
  background-color: rgb(255 0 0 / 50%);
}

button:active {
  box-shadow:
    inset 3px 3px 3px rgb(0 0 0 / 40%),
    inset -3px -3px 3px rgb(255 255 255 / 40%);
}
```

Hier bieten wir eine [RGB](/de/docs/Web/CSS/Reference/Values/color_value/rgb) {{cssxref("background-color")}} an, die die Deckkraft beim Hovern ändert, um dem Benutzer einen Hinweis darauf zu geben, dass die Schaltfläche interaktiv ist, und einige halbtransparente innere {{cssxref("box-shadow")}} Schatten, um der Schaltfläche etwas Textur und Tiefe zu verleihen. Während RGB-Farben und Box-Schatten heute vollständig unterstützt werden, waren sie nicht immer vorhanden; angefangen mit IE9. Browser, die RGB-Farben nicht unterstützen, würden die Deklaration ignorieren, was bedeutet, dass in alten Browsern der Hintergrund überhaupt nicht angezeigt wird, sodass der Text unlesbar wird, gar nicht gut überhaupt!

![Schwer zu sehende Pillenschaltfläche mit weißem Text auf fast weißem Hintergrund](unreadable-button.png)

Um dies zu lösen, haben wir eine zweite `background-color` Deklaration hinzugefügt, die nur das Farbschlüsselwort `red` angibt — dies wird weit zurück in wirklich alten Browsern unterstützt und fungiert als Fallback, wenn die modernen glänzenden Funktionen nicht funktionieren. Was passiert ist, dass ein Browser, der diese Seite besucht, zuerst den ersten `background-color` Wert anwendet; wenn er zur zweiten `background-color` Deklaration kommt, wird er den Anfangswert mit diesem Wert überschreiben, wenn er RGB-Farben unterstützt. Wenn nicht, wird er die gesamte Deklaration einfach ignorieren und weitermachen.

> [!NOTE]
> Dasselbe gilt für andere CSS-Funktionen wie [media queries](/de/docs/Web/CSS/Guides/Media_queries/Using), [`@font-face`](/de/docs/Web/CSS/Reference/At-rules/@font-face) und [`@supports`](/de/docs/Web/CSS/Reference/At-rules/@supports) Blöcke — wenn sie nicht unterstützt werden, ignoriert der Browser sie einfach.

### Selektorunterstützung

Natürlich gelten keine CSS-Funktionen überhaupt, wenn Sie nicht die richtigen [Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors) verwenden, um das Element auszuwählen, das Sie stylen möchten!

In einer kommaseparierten Liste von Selektoren, wenn Sie einfach einen Selektor falsch schreiben, könnte er kein Element auswählen. Wenn jedoch ein Selektor ungültig ist, wird die **gesamte** Liste von Selektoren ignoriert, zusammen mit dem gesamten Stilblock. Aus diesem Grund sollte ein `:-moz-`-präfigierter Pseudo-Klasse oder Pseudo-Element nur in einer [verzeihenden Selektorliste](/de/docs/Web/CSS/Reference/Selectors/Selector_list#forgiving_selector_list) wie `:where(::-moz-thumb)` enthalten sein. Fügen Sie kein `:-moz-`-präfigiertes Pseudo-Klasse oder Pseudo-Element innerhalb einer kommaseparierten Gruppe von Selektoren außerhalb einer [`:is()`](/de/docs/Web/CSS/Reference/Selectors/:is) oder [`:where()`](/de/docs/Web/CSS/Reference/Selectors/:where) verzeihenden Selektorliste ein, da alle Browser außer Firefox den gesamten Block ignorieren werden. Beachten Sie, dass sowohl `:is()` als auch `:where()` als Parameter in anderen Selektorlisten übergeben werden können, einschließlich [`:has()`](/de/docs/Web/CSS/Reference/Selectors/:has) und [`:not()`](/de/docs/Web/CSS/Reference/Selectors/:not).

Wir finden, dass es hilfreich ist, das Element, das Sie versuchen zu stylen, mit den Entwicklertools Ihres Browsers zu inspizieren, dann die DOM-Baum-Breadcrumb-Trail zu überprüfen, die DOM-Inspektoren tendenziell bieten, um zu sehen, ob Ihr Selektor im Vergleich dazu sinnvoll ist.

Zum Beispiel erhalten Sie in den Firefox-Entwicklertools diese Art von Ausgabe am unteren Rand des DOM-Inspektors:

![Das Breadcrumb der Elemente ist html > body > form > div.form > input#date](dom-breadcrumb-trail.png)

Wenn Sie zum Beispiel versuchen, diesen Selektor zu verwenden, würden Sie feststellen, dass er das Eingabeelement nicht wie gewünscht auswählen würde:

```css
form > #date {
  /* … */
}
```

(Das `date` Formular-Eingabeelement ist kein unmittelbares Kind des `<form>`; Sie würden besser einen allgemeinen Nachkommen-Selektor anstelle eines Kind-Selektors verwenden).

### Umgang mit CSS-Präfixen

Ein weiteres Problem sind CSS-Präfixe — sie sind ein Mechanismus, der ursprünglich verwendet wurde, um Browserherstellern zu ermöglichen, ihre eigene Version einer CSS- (oder JavaScript-) Funktion zu implementieren, während die Technologie sich in einem experimentellen Zustand befindet, damit sie damit spielen und sie richtig gestalten können, ohne mit Implementierungen anderer Browser in Konflikt zu geraten, oder den endgültigen unpräfigierten Implementierungen.

Zum Beispiel verwendet Firefox `-moz-` und Chrome/Edge/Opera/Safari verwenden `-webkit-`. Andere Präfixe, auf die Sie in altem Code stoßen könnten und die sicher entfernt werden können, sind `-ms-`, das von Internet Explorer und frühen Versionen von Edge verwendet wurde, und `-o`, das in den ursprünglichen Versionen von Opera verwendet wurde.

Präfixierte Funktionen sollten nie in Produktionswebsites verwendet werden — sie können sich ohne Vorwarnung ändern oder entfernt werden, Leistungsprobleme in alten Browserversionen verursachen, die sie benötigen, und sind die Ursache für browserübergreifende Probleme. Dies ist besonders problematisch, zum Beispiel, wenn Entwickler sich entscheiden, nur die `-webkit-` Version einer Eigenschaft zu verwenden, was implizierte, dass die Seite in anderen Browsern nicht funktioniert. Dies passierte tatsächlich so oft, dass andere Browserhersteller `-webkit-` präfixierte Versionen von mehreren CSS-Eigenschaften implementierten. Während Browser immer noch einige präfixierte Eigenschaftsnamen, Eigenschaftswerte und Pseudoklassen unterstützen, werden experimentelle Funktionen jetzt hinter Flags platziert, sodass Webentwickler sie während der Entwicklung testen können.

Wenn Sie ein Präfix verwenden, stellen Sie sicher, dass es benötigt wird; dass die Eigenschaft eine der wenigen verbleibenden präfixierten Funktionen ist. Sie können herausfinden, welche Browser Präfixe benötigen, auf den MDN-Referenzseiten und Seiten wie [caniuse.com](https://caniuse.com/). Wenn Sie unsicher sind, können Sie dies auch durch einige Tests direkt in Browsern herausfinden. Fügen Sie nach der Präfixstil-Deklaration die standardmäßige unpräfixierte Version ein; sie wird ignoriert, wenn sie nicht unterstützt wird und verwendet, wenn sie unterstützt wird.

```css
.masked {
  -webkit-mask-image: url("MDN.svg");
  mask-image: url("MDN.svg");
  -webkit-mask-size: 50%;
  mask-size: 50%;
}
```

Versuchen Sie dieses einfache Beispiel:

1. Verwenden Sie diese Seite oder eine andere Seite, die einen prominenten Überschrift oder ein anderes Block-Element hat.
2. Klicken Sie Rechts/Cmd + auf das entsprechende Element und wählen Sie Inspekt/Inspekt Element (oder was auch immer die Option in Ihrem Browser ist) — dies sollte die Entwicklertools in Ihrem Browser öffnen und das Element im DOM-Inspektor hervorgehoben zeigen.
3. Suchen Sie nach einer Funktion, die Sie verwenden können, um dieses Element auszuwählen. Zum Beispiel hat die MDN-Seite zum Zeitpunkt des Schreibens ein Logo mit einer ID von `mdn-docs-logo`.
4. Speichern Sie einen Verweis auf dieses Element in einer Variablen, zum Beispiel:

   ```js
   const test = document.getElementById("mdn-docs-logo");
   ```

5. Versuchen Sie nun, einen neuen Wert für die CSS-Eigenschaft zu setzen, die Sie auf diesem Element interessiert; Sie können dies tun, indem Sie die [style](/de/docs/Web/API/HTMLElement/style) Eigenschaft des Elements verwenden, zum Beispiel versuchen Sie diese in die JavaScript-Konsole einzutippen:

   ```js
   test.style.transform = "rotate(90deg)";
   ```

Wenn Sie anfangen, nach dem zweiten Punkt den Eigenschaftsnamen darzustellen (beachten Sie, dass in JavaScript CSS-Eigenschaftsnamen im {{Glossary("camel_case", "lower camel case")}} und nicht im {{Glossary("kebab_case", "kebab-case")}} geschrieben werden), sollte die JavaScript-Konsole damit beginnen, die Namen der Eigenschaften automatisch zu vervollständigen, die im Browser existieren und zu dem, was Sie bisher geschrieben haben, passen. Dies ist nützlich, um herauszufinden, welche Eigenschaften in diesem Browser implementiert sind.

Wenn Sie moderne Funktionen einschließen müssen, testen Sie die Unterstützung der Funktionen mit [`@supports`](/de/docs/Web/CSS/Reference/At-rules/@supports), die es Ihnen ermöglicht, native Funktionsdetektionstests zu implementieren und das präfixierte oder neue Feature innerhalb des `@supports`-Blocks zu verschachteln.

### Probleme beim responsiven Design

Responsives Design ist die Praxis, Weblayouts zu erstellen, die sich an verschiedene Geräteformate anpassen — z.B. verschiedene Bildschirmbreiten, Ausrichtungen (Portrait oder Landschaft) oder Auflösungen. Ein Desktop-Layout sieht beispielsweise auf einem mobilen Gerät schrecklich aus, daher müssen Sie ein geeignetes mobiles Layout mit [media queries](/de/docs/Web/CSS/Guides/Media_queries) bereitstellen und sicherstellen, dass es korrekt mit [viewport](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport) angewendet wird. Sie können einen detaillierten Bericht über solche Praktiken in [unserem Tutorial zum responsiven Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design) finden.

Die Auflösung ist auch ein großes Problem — zum Beispiel benötigen mobile Geräte weniger wahrscheinlich große, gewichtige Bilder als Desktop-Computer und haben eher langsamere Internetverbindungen und möglicherweise sogar kostspielige Datentarife, die verschwendete Bandbreite zu einem größeren Problem machen. Außerdem können verschiedene Geräte eine Reihe verschiedener Auflösungen haben, was bedeutet, dass kleinere Bilder pixelig erscheinen könnten. Es gibt eine Reihe von Techniken, die Ihnen helfen, solche Probleme zu umgehen, von [media queries](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design#media_queries) bis zu komplexeren [Techniken zu responsivem Bild](/de/docs/Web/HTML/Guides/Responsive_images#resolution_switching_different_sizes), einschließlich {{HTMLElement('picture')}} und das {{HTMLElement('img')}}-Element [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset) und [`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes) Attribute.

## Hilfe finden

Es gibt viele andere Probleme, auf die Sie mit HTML und CSS stoßen werden, weshalb Kenntnisse darüber, wie Sie online Antworten finden, von unschätzbarem Wert sind.

Zu den besten Quellen für Informationsunterstützung gehören das Mozilla Developer Network (hier befinden Sie sich jetzt!), [stackoverflow.com](https://stackoverflow.com/) und [caniuse.com](https://caniuse.com/).

Um das Mozilla Developer Network (MDN) zu verwenden, machen die meisten Leute eine Suchmaschine-Suche nach der Technologie, über die sie Informationen finden wollen, plus dem Begriff "mdn", zum Beispiel "mdn HTML video". MDN enthält mehrere nützliche Inhaltstypen:

- Referenzmaterial mit Browserunterstützungsinformationen für clientseitige Webtechnologien, zum Beispiel die [`<video>`-Referenzseite](/de/docs/Web/HTML/Reference/Elements/video).
- Andere unterstützende Referenzmaterialien, wie zum Beispiel unser [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Guides/Formats),
- Nützliche Tutorials, die spezifische Probleme lösen, wie zum Beispiel [Erstellen eines browserübergreifenden Videoplayers](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player).

[caniuse.com](https://caniuse.com/) bietet Informationsunterstützung sowie einige nützliche Links zu externen Ressourcen. Zum Beispiel siehe <https://caniuse.com/#search=video> (Sie müssen nur die Funktion, die Sie suchen, in das Textfeld eingeben).

[stackoverflow.com](https://stackoverflow.com/) (SO) ist ein Forum, auf dem Sie Fragen stellen und andere Entwickler ihre Lösungen teilen lassen können, frühere Posts nachschlagen und anderen Entwicklern helfen können. Sie sollten schauen, ob es bereits eine Antwort auf Ihre Frage gibt, bevor Sie eine neue Frage posten. Zum Beispiel haben wir auf SO nach "disable autofocus on HTML dialog" gesucht und sehr schnell [Disable showModal auto-focusing using HTML attributes](https://stackoverflow.com/questions/63267581/disable-showmodal-auto-focusing-using-html-attributes) gefunden.

Abgesehen davon, versuchen Sie, Ihre Lieblingssuchmaschine zu verwenden, um eine Antwort auf Ihr Problem zu finden. Es ist oft nützlich, nach spezifischen Fehlermeldungen zu suchen, wenn Sie welche haben — andere Entwickler werden wahrscheinlich dieselben Probleme wie Sie gehabt haben.

## Zusammenfassung

Jetzt sollten Sie mit den Haupttypen von browserübergreifenden HTML- und CSS-Problemen vertraut sein, denen Sie in der Webentwicklung begegnen werden, und wissen, wie man sie behebt.

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Testing_strategies","Learn_web_development/Extensions/Testing/Feature_detection", "Learn_web_development/Extensions/Testing")}}
