---
title: Umgang mit häufigen HTML- und CSS-Problemen
short-title: Häufige HTML- und CSS-Probleme
slug: Learn_web_development/Extensions/Testing/HTML_and_CSS
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Testing_strategies","Learn_web_development/Extensions/Testing/Feature_detection", "Learn_web_development/Extensions/Testing")}}

Nachdem wir den Rahmen festgelegt haben, werden wir nun speziell auf die häufigen plattformübergreifenden Probleme eingehen, die Sie in HTML- und CSS-Code antreffen werden, und welche Tools verwendet werden können, um Probleme zu verhindern oder zu beheben. Dazu gehört das Linten von Code, der Umgang mit CSS-Präfixen, die Verwendung von Entwicklerwerkzeugen im Browser, um Probleme zu finden, die Verwendung von Polyfills, um Unterstützung in Browsern hinzuzufügen, die Bewältigung von Problemen mit responsivem Design und mehr.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den grundlegenden <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> Sprachen; ein Verständnis
        der grundlegenden
        <a
          href="/de/docs/Learn_web_development/Extensions/Testing/Introduction"
          >Prinzipien des plattformübergreifenden Testens</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        In der Lage sein, häufige plattformübergreifende HTML- und CSS-Probleme zu diagnostizieren und
        geeignete Werkzeuge und Techniken zu verwenden, um diese zu beheben.
      </td>
    </tr>
  </tbody>
</table>

## Die Probleme mit HTML und CSS

Einige der Probleme mit HTML und CSS liegen darin, dass beide Sprachen relativ einfach sind, und oft nehmen Entwickler sie nicht ernst genug, um sicherzustellen, dass der Code gut gestaltet, effizient und semantisch die Funktion der auf der Seite befindlichen Features beschreibt. Im schlimmsten Fall wird JavaScript verwendet, um den gesamten Webseiteninhalt und das Design zu generieren, was Ihre Seiten unzugänglich und weniger performant macht (das Generieren von DOM-Elementen ist teuer). In anderen Fällen werden neue Funktionen nicht konsistent durch alle Browser unterstützt, was dazu führen kann, dass einige Funktionen und Stile für einige Benutzer nicht funktionieren. Probleme mit dem responsiven Design sind ebenfalls häufig – eine Website, die in einem Desktop-Browser gut aussieht, kann auf einem Mobilgerät eine schreckliche Erfahrung sein, da der Inhalt zu klein ist, um ihn zu lesen, oder weil die Site vielleicht langsam ist, aufgrund teurer Animationen.

Schauen wir uns an, wie wir plattformübergreifende Fehler reduzieren können, die durch HTML/CSS entstehen.

## Zuerst das Allgemeine beheben

Wir haben im [ersten Artikel dieser Serie](/de/docs/Learn_web_development/Extensions/Testing/Introduction#testingdiscovery) gesagt, dass eine gute Strategie zu Beginn darin besteht, in ein paar modernen Browsern auf Desktop-/Mobilgeräten zu testen, um sicherzustellen, dass Ihr Code im Allgemeinen funktioniert, bevor Sie sich auf plattformübergreifende Probleme konzentrieren.

In unseren Artikeln [Debugging HTML](/de/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML) und [Debugging CSS](/de/docs/Learn_web_development/Core/Styling_basics/Debugging_CSS) haben wir einige wirklich grundlegende Anleitungen zum Debuggen von HTML/CSS bereitgestellt – wenn Sie mit den Grundlagen nicht vertraut sind, sollten Sie diese Artikel auf jeden Fall studieren, bevor Sie weitermachen.

Im Wesentlichen geht es darum zu überprüfen, ob Ihr HTML- und CSS-Code gut formatiert ist und keine Syntaxfehler enthält.

> [!NOTE]
> Ein häufiges Problem bei CSS und HTML entsteht, wenn verschiedene CSS-Regeln miteinander in Konflikt geraten. Dies kann besonders problematisch sein, wenn Sie Code von Drittanbietern verwenden. Beispielsweise könnten Sie ein CSS-Framework verwenden und feststellen, dass einer der Klassennamen mit einem kollidiert, den Sie bereits für einen anderen Zweck verwendet haben. Oder Sie könnten feststellen, dass von irgendeiner Art Drittanbieter-API generiertes HTML (zum Beispiel Anzeigenbanner) einen Klassennamen oder eine ID enthält, die Sie bereits für einen anderen Zweck verwenden. Um sicherzustellen, dass dies nicht passiert, sollten Sie die Werkzeuge, die Sie verwenden, zuerst recherchieren und Ihr Code darauf ausrichten. Es lohnt sich auch, CSS zu "namespace", z. B. wenn Sie ein Widget haben, stellen Sie sicher, dass es eine eindeutige Klasse hat, und beginnen Sie dann die Selektoren, die Elemente innerhalb des Widgets auswählen, mit dieser Klasse, um Konflikte weniger wahrscheinlich zu machen. Zum Beispiel `.audio-player ul a`.

### Validierung

Für HTML bedeutet Validierung, sicherzustellen, dass alle Tags ordnungsgemäß geschlossen und geschachtelt sind, dass Sie einen Doctype verwenden und Tags für den richtigen Zweck verwenden. Eine gute Strategie ist es, Ihren Code regelmäßig zu validieren. Ein Dienst, der dies leisten kann, ist der W3C [Markup Validation Service](https://validator.w3.org/), der es Ihnen ermöglicht, auf Ihren Code hinzuweisen und eine Liste von Fehlern zurückgibt:

![Die Startseite des HTML-Validators](validator.png)

Für CSS ist die Geschichte ähnlich – Sie müssen überprüfen, dass die Namen der Eigenschaften korrekt geschrieben sind, die Werte der Eigenschaften korrekt geschrieben sind und für die Eigenschaften, auf denen sie angewendet werden, gültig sind, dass keine geschweiften Klammern fehlen usw. Dafür gibt es ebenfalls einen [CSS Validator](https://jigsaw.w3.org/css-validator/) des W3C.

### Linters

Eine weitere gute Wahl ist eine sogenannte Linter-Anwendung, die nicht nur Fehler anzeigt, sondern auch Warnungen über schlechte Praktiken in Ihrem CSS und andere Punkte hervorheben kann. Linters können in der Regel angepasst werden, um strenger oder entspannter in der Fehler-/Warnmeldung zu sein.

Es gibt viele Online-Linter-Anwendungen, wie [Dirty Markup](https://www.10bestdesign.com/dirtymarkup/) für HTML, CSS und JavaScript. Diese ermöglichen es Ihnen, Ihren Code in ein Fenster einzufügen, und es werden Fehler mit Kreuzen markiert, die dann mit einer Fehlermeldung anzeigen, was das Problem ist, die Sie anzeigen können. Dirty Markup ermöglicht es Ihnen auch, Korrekturen an Ihrem Markup mithilfe der _Clean_-Schaltfläche vorzunehmen.

![Dirty Markup Anwendung zeigt die Meldung "Unexpected character in unquoted attribute" über dem folgenden falschen HTML-Markup an: <div id=combinators">](dirty-markup.png)

Es ist jedoch nicht sehr bequem, Ihren Code mehrmals auf eine Webseite zu kopieren und einzufügen, um dessen Gültigkeit zu überprüfen. Was Sie wirklich wollen, ist ein Linter, der in Ihren Standard-Workflow passt und möglichst wenig Aufwand erfordert.

Viele Code-Editoren haben Linter-Plugins. Siehe zum Beispiel:

- [SublimeLinter](https://www.sublimelinter.com/) für Sublime Text
- [Notepad++ Linter](https://sourceforge.net/projects/notepad-linter/)
- [VS Code Linters](https://marketplace.visualstudio.com/search?target=vscode&category=Linters&sortBy=Installs)

### Entwicklerwerkzeuge im Browser

Die Entwicklerwerkzeuge, die in den meisten Browsern integriert sind, verfügen auch über nützliche Tools zur Fehlersuche, hauptsächlich für CSS.

> [!NOTE]
> HTML-Fehler zeigen sich in der Regel nicht so einfach in den Entwicklerwerkzeugen, da der Browser versucht, schlecht formatiertes Markup automatisch zu korrigieren; das W3C-Validator ist der beste Weg, um HTML-Fehler zu finden – siehe [Validierung](#validierung) oben.

Zum Beispiel wird im CSS-Inspektor von Firefox CSS-Deklarationen angezeigt, die nicht angewendet werden, indem sie durchgestrichen sind, mit einem Warndreieck. Wenn Sie das Warndreieck überfahren, wird eine beschreibende Fehlermeldung angezeigt:

![Die Entwicklerwerkzeuge streichen ungültiges CSS durch und fügen ein hoverbares Warnsymbol hinzu](css-message-devtools.png)

Andere Browser-Entwicklerwerkzeuge haben ähnliche Funktionen.

## Häufige plattformübergreifende Probleme

Jetzt schauen wir uns einige der häufigsten plattformübergreifenden HTML- und CSS-Probleme an. Die Hauptbereiche, die wir uns ansehen werden, sind fehlende Unterstützung für moderne Funktionen und Layoutprobleme.

### Browser unterstützen moderne Funktionen nicht

Dies ist ein häufiges Problem, insbesondere wenn Sie ältere Browser unterstützen müssen oder Sie Funktionen verwenden, die in einigen Browsern implementiert sind, aber noch nicht in allen. Im Allgemeinen funktioniert die meisten Kernfunktionen von HTML und CSS (wie grundlegende HTML-Elemente, grundlegende CSS-Farben und Textstilierung) in allen Browsern, die Sie unterstützen möchten; mehr Probleme treten auf, wenn Sie beginnen möchten, neuere HTML-, CSS- und APIs zu verwenden. MDN zeigt Browser-Kompatibilitätsdaten für jede dokumentierte Funktion an; siehe zum Beispiel die [Browser-Unterstützungstabelle für die `:has()` Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/:has#browser_compatibility).

Sobald Sie eine Liste von Technologien identifiziert haben, die Sie verwenden werden und die nicht universell unterstützt werden, ist es eine gute Idee zu recherchieren, in welchen Browsern sie unterstützt werden und welche verwandten Techniken nützlich sind. Siehe [Hilfe finden](#hilfe_finden) unten.

### HTML-Fallback-Verhalten

Einige Probleme können einfach dadurch gelöst werden, dass man die natürliche Arbeitsweise von HTML/CSS ausnutzt.

Nicht erkannte HTML-Elemente werden vom Browser als anonyme Inline-Elemente behandelt (praktisch Inline-Elemente ohne semantischen Wert, ähnlich wie {{htmlelement("span")}}-Elemente). Sie können sie weiterhin mit ihren Namen referenzieren und mit CSS gestalten, zum Beispiel – Sie müssen nur sicherstellen, dass sie sich so verhalten, wie Sie es wünschen. Gestalten Sie sie einfach wie jedes andere Element, einschließlich der Festlegung der `display`-Eigenschaft auf etwas anderes als `inline`, wenn nötig.

Komplexere Elemente wie HTML [`<video>`](/de/docs/Web/HTML/Reference/Elements/video), [`<audio>`](/de/docs/Web/HTML/Reference/Elements/audio), [`<picture>`](/de/docs/Web/HTML/Reference/Elements/picture), [`<object>`](/de/docs/Web/HTML/Reference/Elements/object) und [`<canvas>`](/de/docs/Web/HTML/Reference/Elements/canvas) (und andere Funktionen nebenbei) haben natürliche Mechanismen, um Fallbacks hinzuzufügen, falls die verlinkten Ressourcen nicht unterstützt werden. Sie können Fallback-Inhalte zwischen den öffnenden und schließenden Tags hinzufügen, und nicht unterstützende Browser ignorieren das äußere Element effektiv und führen die eingebetteten Inhalte aus.

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

Dieses Beispiel enthält einen einfachen Link, der es Ihnen ermöglicht, das Video herunterzuladen, falls selbst der HTML-Videoplayer nicht funktioniert, sodass der Benutzer zumindest auf das Video zugreifen kann.

Ein weiteres Beispiel sind Formularelemente. Als neue [`<input>`](/de/docs/Web/HTML/Reference/Elements/input)-Typen eingeführt wurden, um spezifische Informationen in Formulare einzugeben, wie Zeiten, Daten, Farben, Zahlen usw., wenn ein Browser die neue Funktion nicht unterstützte, benutzte der Browser den Standard von `type="text"`. Einfügeelemente wurden hinzugefügt, die besonders nützlich auf mobilen Plattformen sind, bei denen es sehr wichtig ist, dem Benutzer ein schmerzfreies Eingeben von Daten zu ermöglichen. Plattformen bieten je nach Eingabetyp unterschiedliche UI-Widgets an, wie z. B. einen Kalenderiz für die Eingabe von Daten. Sollte ein Browser einen Eingabetyp nicht unterstützen, kann der Benutzer dennoch die erforderlichen Daten eingeben.

Das folgende Beispiel zeigt Datum- und Zeit-Eingaben:

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

Das Ergebnis dieses Codes ist wie folgt:

{{EmbedLiveSample("form-test", '100%', 100)}}

Sie können die **Play**-Taste drücken, um das Beispiel im MDN Playground zu öffnen und den Quellcode zu bearbeiten.

Wenn Sie das Beispiel anzeigen, sehen Sie die UI-Funktionen in Aktion, wenn Sie versuchen, Daten einzugeben. Auf Geräten mit dynamischen Tastaturen werden typspezifische Tastaturen angezeigt. In einem nicht unterstützenden Browser werden die Eingaben einfach zu normalen Texteinträgen zurückgesetzt, was bedeutet, dass der Benutzer dennoch die benötigten Informationen eingeben kann.

### CSS-Fallback-Verhalten

CSS ist vermutlich besser bei Fallbacks als HTML. Wenn ein Browser auf eine Deklaration oder Regel trifft, die er nicht versteht, überspringt er sie vollständig, ohne sie anzuwenden oder einen Fehler auszugeben. Dies mag frustrierend für Sie und Ihre Benutzer sein, wenn ein solcher Fehler unbemerkt in Produktionscode gelangt, aber immerhin bedeutet es, dass die gesamte Website nicht aufgrund eines Fehlers abstürzt und wenn clever genutzt, können Sie es zu Ihrem Vorteil nutzen.

Schauen wir uns ein Beispiel an – eine einfache Box, die mit CSS gestaltet ist, mit ein wenig Styling durch verschiedene CSS-Funktionen:

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

Sie können die **Play**-Taste drücken, um das Beispiel im MDN Playground zu öffnen und mit dem Quellcode zu spielen.

Der Button hat eine Reihe von Deklarationen, aber die, die uns am meisten interessiert, sind:

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

Hier geben wir eine [RGB](/de/docs/Web/CSS/color_value/rgb) {{cssxref("background-color")}} an, die bei Hover die Opazität ändert, um dem Benutzer einen Hinweis darauf zu geben, dass der Button interaktiv ist, und einige halbtransparente eingefügte {{cssxref("box-shadow")}} Schattierungen, um dem Button ein wenig Textur und Tiefe zu verleihen. Obwohl jetzt vollständig unterstützt, waren RGB-Farben und Boxschatten nicht immer vorhanden; erstmals in IE9. Browser, die keine RGB-Farben unterstützten, würden die Deklaration ignorieren, was bedeutet, dass in alten Browsern der Hintergrund überhaupt nicht angezeigt würde, sodass der Text unlesbar wäre, was überhaupt nicht gut ist!

![Schwer zu sehender pillenförmiger Button mit weißem Text auf fast weißem Hintergrund](unreadable-button.png)

Um das zu beheben, haben wir eine zweite `background-color`-Deklaration hinzugefügt, die einfach das `red`-Farbkennwort angibt – dies wird weit zurück in wirklich alten Browsern unterstützt und fungiert als Fallback, falls die modernen glitzernden Features nicht funktionieren. Was passiert, ist, dass ein Browser, der diese Seite besucht, zunächst den ersten Wert von `background-color` anwendet; wenn er zur zweiten `background-color`-Deklaration gelangt, wird er, wenn er RGB-Farben unterstützt, den initialen Wert mit diesem Wert überschreiben. Wenn nicht, ignoriert er einfach den gesamten Deklarationsblock und geht weiter.

> [!NOTE]
> Gleiches gilt für andere CSS-Funktionen wie [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries), [`@font-face`](/de/docs/Web/CSS/@font-face) und [`@supports`](/de/docs/Web/CSS/@supports) Blöcke – wenn sie nicht unterstützt werden, ignoriert der Browser sie einfach.

### Selektor-Unterstützung

Natürlich werden keine CSS-Funktionen angewendet, wenn Sie nicht die richtigen [Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors) verwenden, um das Element auszuwählen, das Sie gestalten möchten!

In einer kommagetrennten Liste von Selektoren, wenn Sie nur einen Selektor falsch schreiben, wird er möglicherweise kein Element auswählen. Wenn jedoch ein Selektor ungültig ist, wird die **ganze** Liste der Selektoren ignoriert, zusammen mit dem gesamten Stilblock. Aus diesem Grund sollten Sie ein `:-moz-` präfixiertes Pseudoklasse oder Pseudo-Element nur in einer [fehlertoleranten Selektorliste](/de/docs/Web/CSS/Reference/Selectors/Selector_list#forgiving_selector_list) wie `:where(::-moz-thumb)` einfügen. Fügen Sie keine `:-moz-` präfixierte Pseudo-Klasse oder Pseudo-Element innerhalb einer kommagetrennten Gruppe von Selektoren außerhalb einer [`:is()`](/de/docs/Web/CSS/Reference/Selectors/:is) oder [`:where()`](/de/docs/Web/CSS/Reference/Selectors/:where) fehlerignoranter Selektorliste ein, da alle Browser außer Firefox den gesamten Block ignorieren werden. Beachten Sie, dass sowohl `:is()` als auch `:where()` als Parameter in andere Selektorlisten übergeben werden können, einschließlich [`:has()`](/de/docs/Web/CSS/Reference/Selectors/:has) und [`:not()`](/de/docs/Web/CSS/Reference/Selectors/:not).

Wir finden es hilfreich, das Element, das Sie gestalten möchten, mit dem Entwicklerwerkzeug Ihres Browsers zu inspizieren und dann den DOM-Strukturpfad zu verwenden, den DOM-Inspektoren tendenziell bieten, um zu sehen, ob Ihr Selektor im Vergleich dazu Sinn ergibt.

Zum Beispiel bekommen Sie in den Firefox-Entwicklerwerkzeugen diese Art von Ausgabe am unteren Ende des DOM-Inspektors:

![Die Breadcrumb der Elements ist html > body > form > div.form > input#date](dom-breadcrumb-trail.png)

Wenn Sie beispielsweise diesen Selektor verwenden möchten, können Sie sehen, dass er das Eingabeelement nicht wie gewünscht auswählt:

```css
form > #date {
  /* … */
}
```

(Das `date`-Formulareingabeelement ist kein direktes Kind des `<form>`; Sie wären besser bedient, einen allgemeinen Nachfahren-Selektor anstelle eines Kind-Selektors zu verwenden).

### Umgang mit CSS-Präfixen

Eine andere Reihe von Problemen kommt mit CSS-Präfixen — dies sind Mechanismen, die ursprünglich verwendet wurden, um Browserherstellern zu erlauben, ihre eigene Version einer CSS (oder JavaScript)-Funktion zu implementieren, während die Technologie in einem experimentellen Zustand ist, damit sie damit spielen und sie richtig machen können, ohne mit Implementierungen anderer Browser oder den endgültigen nicht-präfixierten Implementierungen in Konflikt zu geraten.

Zum Beispiel verwendet Firefox `-moz-` und Chrome/Edge/Opera/Safari verwendet `-webkit-`. Andere Präfixe, die Sie im alten Code finden könnten und die sicher entfernt werden können, schließen `-ms-` ein, das von Internet Explorer und frühen Versionen von Edge verwendet wurde, und `-o`, das in den ursprünglichen Versionen von Opera verwendet wurde.

Präfixierte Funktionen sollten niemals in Produktionswebsites verwendet werden — sie sind Änderungen oder der Entfernung ohne Vorwarnung unterworfen, können Performance-Probleme in alten Browserversionen verursachen, die sie benötigen, und waren die Ursache von plattformübergreifenden Problemen. Dies ist besonders ein Problem, wenn Entwickler beschließen, nur die `-webkit-` Version einer Eigenschaft zu verwenden, was impliziert, dass die Seite in anderen Browsern nicht funktioniert. Dies geschah tatsächlich so häufig, dass andere Browserhersteller `-webkit-`-präfixierte Versionen mehrerer CSS-Eigenschaften implementierten. Während Browser noch immer einige präfixierte Eigenschafthnamen, Eigenschaftswerte und Pseudoklassen unterstützen, werden experimentelle Features jetzt hinter Flags platziert, damit Webentwickler sie während der Entwicklung testen können.

Wenn Sie ein Präfix verwenden, stellen Sie sicher, dass es benötigt wird; dass die Eigenschaft eines der wenigen verbleibenden präfixierten Features ist. Sie können nachschlagen, welche Browser Präfixe auf den MDN-Referenzseiten und Websites wie [caniuse.com](https://caniuse.com/) benötigen. Wenn Sie unsicher sind, können Sie dies auch durch Tests direkt in Browsern herausfinden. Fügen Sie die standardmäßige nicht-präfixierte Version nach dem präfixierten Stil ein; es wird ignoriert, wenn es nicht unterstützt wird und verwendet, wenn es unterstützt wird.

```css
.masked {
  -webkit-mask-image: url("MDN.svg");
  mask-image: url("MDN.svg");
  -webkit-mask-size: 50%;
  mask-size: 50%;
}
```

Versuchen Sie dieses einfache Beispiel:

1. Verwenden Sie diese Seite oder eine andere Website, die eine auffällige Überschrift oder ein anderes Block-Level-Element hat.
2. Klicken Sie Rechts-/Cmd+ auf das betreffende Element und wählen Sie Inspect/Element inspizieren (oder wie die Option in Ihrem Browser lautet) – Dies sollte die Entwicklerwerkzeuge in Ihrem Browser öffnen, mit dem Element, das im DOM-Inspektor hervorgehoben ist.
3. Suchen Sie nach einem Feature, das Sie verwenden können, um dieses Element auszuwählen. Zum Beispiel hat diese Seite auf MDN zur Zeit eine Logo mit einer ID `mdn-docs-logo`.
4. Speichern Sie einen Referenz zu diesem Element in einer Variable, zum Beispiel:

   ```js
   const test = document.getElementById("mdn-docs-logo");
   ```

5. Versuchen Sie nun, einen neuen Wert für das CSS-Feature, an dem Sie interessiert sind, auf dieses Element zu setzen; Sie können dies mit der [style](/de/docs/Web/API/HTMLElement/style)-Eigenschaft des Elements tun, versuchen Sie zum Beispiel, diese in die JavaScript-Konsole einzugeben:

   ```js
   test.style.transform = "rotate(90deg)";
   ```

Wenn Sie anfangen, den Eigenschaftsnamen nach dem zweiten Punkt einzugeben (beachten Sie, dass in JavaScript die CSS-Eigenschaftsnamen in {{Glossary("camel_case", "lower camel case")}} und nicht {{Glossary("kebab_case", "kebab-case")}} geschrieben werden), sollte die JavaScript-Konsole anfangen, die Namen der Eigenschaften zu vervollständigen, die im Browser existieren und dem, was Sie bisher geschrieben haben, entsprechen. Dies ist nützlich, um herauszufinden, welche Eigenschaften in diesem Browser implementiert sind.

Wenn Sie moderne Features einbinden müssen, testen Sie die Feature-Unterstützung mit [`@supports`](/de/docs/Web/CSS/@supports), das es Ihnen erlaubt, native Feature-Erkennungstests zu implementieren, und das präfixierte oder neue Feature innerhalb des `@supports`-Blocks einzunisten.

### Probleme mit Responsive Design

Responsives Design ist die Praxis, Web-Layouts zu erstellen, die sich an unterschiedliche Geräteformate anpassen – zum Beispiel unterschiedliche Bildschirmbreiten, Ausrichtungen (Hoch- oder Querformat) oder Auflösungen. Ein Desktop-Layout sieht zum Beispiel schrecklich aus, wenn es auf einem Mobilgerät angezeigt wird, also brauchen Sie ein geeignetes mobiles Layout mit [Media Queries](/de/docs/Web/CSS/CSS_media_queries), und stellen Sie sicher, dass es korrekt mit [Viewport](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport) angewendet wird. Eine ausführliche Beschreibung solcher Praktiken finden Sie in [unserem Tutorial zum responsives Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design).

Die Auflösung ist ebenfalls ein großes Problem — zum Beispiel benötigen Mobilgeräte wahrscheinlich keine großen schweren Bilder im Vergleich zu Desktop-Computern und haben eher langsamere Internetverbindungen und möglicherweise sogar teure Datenpläne, die verschwendete Bandbreite zu einem größeren Problem machen. Darüber hinaus können verschiedene Geräte eine Reihe von unterschiedlichen Auflösungen haben, was bedeutet, dass kleinere Bilder pixelig erscheinen könnten. Es gibt eine Reihe von Techniken, die es Ihnen ermöglichen, solche Probleme zu umgehen, von [Media Queries](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design#media_queries) bis hin zu komplexeren [Techniken für responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images#resolution_switching_different_sizes), einschließlich {{HTMLElement('picture')}} und der {{HTMLElement('img')}}-Element [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset) und [`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes) Attribute.

## Hilfe finden

Es gibt viele andere Probleme, die Sie mit HTML und CSS antreffen werden, was die Kenntnis, wie man Antworten online findet, unschätzbar macht.

Zu den besten Quellen für Unterstützungsinformationen gehören das Mozilla Developer Network (das ist, wo Sie sich jetzt befinden!), [stackoverflow.com](https://stackoverflow.com/) und [caniuse.com](https://caniuse.com/).

Um das Mozilla Developer Network (MDN) zu verwenden, machen die meisten Menschen eine Suchmaschinenabfrage der Technologie, zu der sie Informationen suchen, plus des Begriffs "mdn", zum Beispiel, "mdn HTML video". MDN enthält mehrere nützliche Inhaltearten:

- Referenzmaterial mit Browser-Support-Informationen für clientseitige Webtechnologien, z. B. die [`<video>` Referenzseite](/de/docs/Web/HTML/Reference/Elements/video).
- Anderes unterstützendes Referenzmaterial, zum Beispiel unser [Leitfaden zu Medientypen und Formaten im Web](/de/docs/Web/Media/Guides/Formats),
- Nützliche Tutorials, die spezifische Probleme lösen, wie z. B. [Einen plattformübergreifenden Videoplayer erstellen](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player).

[caniuse.com](https://caniuse.com/) bietet Unterstützungsinformationen, zusammen mit ein paar nützlichen externen Ressourcenlinks. Zum Beispiel siehe <https://caniuse.com/#search=video> (Sie müssen lediglich das Feature, das Sie suchen, in das Textfeld eingeben).

[stackoverflow.com](https://stackoverflow.com/) (SO) ist eine Forum-Website, auf der Sie Fragen stellen und andere Entwickler ihre Lösungen teilen können, frühere Beiträge durchsuchen und anderen Entwicklern helfen können. Es wird Ihnen geraten, zu überprüfen, ob es bereits eine Antwort auf Ihre Frage gibt, bevor Sie eine neue Frage stellen. Zum Beispiel suchten wir auf SO nach "Autofokus auf HTML-Dialog deaktivieren" und stießen sehr schnell auf [Disable showModal auto-focusing using HTML attributes](https://stackoverflow.com/questions/63267581/disable-showmodal-auto-focusing-using-html-attributes).

Abgesehen davon, versuchen Sie, Ihre bevorzugte Suchmaschine zu durchsuchen, um eine Antwort auf Ihr Problem zu finden. Es ist oft nützlich, nach spezifischen Fehlermeldungen zu suchen, wenn Sie welche haben — andere Entwickler werden wahrscheinlich die gleichen Probleme wie Sie gehabt haben.

## Zusammenfassung

Jetzt sollten Sie mit den Hauptarten von plattformübergreifenden HTML- und CSS-Problemen, die Sie in der Webentwicklung antreffen werden, vertraut sein und wissen, wie man sie behebt.

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Testing_strategies","Learn_web_development/Extensions/Testing/Feature_detection", "Learn_web_development/Extensions/Testing")}}
