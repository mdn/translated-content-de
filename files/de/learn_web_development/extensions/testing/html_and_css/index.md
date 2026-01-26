---
title: Umgang mit gängigen HTML- und CSS-Problemen
short-title: Gängige HTML- und CSS-Probleme
slug: Learn_web_development/Extensions/Testing/HTML_and_CSS
l10n:
  sourceCommit: 2b4a2ad5d9ba084a9eaa2f9204102655e7b575c4
---

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Testing_strategies","Learn_web_development/Extensions/Testing/Feature_detection", "Learn_web_development/Extensions/Testing")}}

Nun werden wir uns spezifisch mit den häufigen Problemen über verschiedene Browser hinweg befassen, auf die Sie in HTML- und CSS-Code stoßen werden, und untersuchen, welche Werkzeuge verwendet werden können, um Probleme zu verhindern oder bereits aufgetretene Probleme zu beheben. Dazu gehört das Linting von Code, das Handling von CSS-Präfixen, die Verwendung von Browser-Entwicklungstools zur Fehlerbehebung, das Verwenden von Polyfills, um Unterstützung in Browsern hinzuzufügen, das Angehen von responsiven Design-Problemen und mehr.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>; eine Vorstellung der grundlegenden
        <a
          href="/de/docs/Learn_web_development/Extensions/Testing/Introduction"
          >Prinzipien des Cross-Browser-Testing</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        In der Lage sein, gängige HTML- und CSS-Probleme über verschiedene Browser hinweg zu diagnostizieren und
        geeignete Werkzeuge und Techniken zu verwenden, um sie zu beheben.
      </td>
    </tr>
  </tbody>
</table>

## Die Schwierigkeiten mit HTML und CSS

Einige der Schwierigkeiten mit HTML und CSS rühren daher, dass beide Sprachen relativ einfach sind und Entwickler oft nicht den nötigen Ernst darauf verwenden, sicherzustellen, dass der Code gut gestaltet, effizient und semantisch korrekt die Funktionen auf der Seite beschreibt. Im schlimmsten Fall wird JavaScript verwendet, um den gesamten Webseiteninhalt und -stil zu generieren, wodurch Ihre Seiten unzugänglich werden und weniger performant sind (das Generieren von DOM-Elementen ist ressourcenintensiv). In anderen Fällen werden neue Funktionen nicht durchgehend von allen Browsern unterstützt, was dazu führt, dass einige Features und Styles für manche Benutzer nicht funktionieren. Auch Probleme mit responsivem Design sind häufig — eine Seite, die in einem Desktop-Browser gut aussieht, bietet möglicherweise eine furchtbare Erfahrung auf einem mobilen Gerät, weil der Inhalt zu klein ist, um gelesen zu werden, oder die Seite ist langsam wegen ressourcenintensiver Animationen.

Lassen Sie uns nun fortfahren und ansehen, wie wir Cross-Browser-Fehler, die aus HTML/CSS resultieren, vermindern können.

## Zuerst: Behebung allgemeiner Probleme

Wir sagten bereits im [ersten Artikel dieser Serie](/de/docs/Learn_web_development/Extensions/Testing/Introduction#testingdiscovery), dass eine gute Strategie darin besteht, zuerst in ein paar modernen Browsern auf Desktop-/Mobilgeräten zu testen, um sicherzustellen, dass Ihr Code generell funktioniert, bevor Sie sich auf Cross-Browser-Probleme konzentrieren.

In unseren Artikeln [Debugging HTML](/de/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML) und [Debugging CSS](/de/docs/Learn_web_development/Core/Styling_basics/Debugging_CSS) haben wir einige wirklich grundlegende Anleitungen zum Debuggen von HTML/CSS gegeben — wenn Sie mit den Grundlagen nicht vertraut sind, sollten Sie diese Artikel unbedingt studieren, bevor Sie weitermachen.

Grundsätzlich geht es darum, zu überprüfen, ob Ihr HTML- und CSS-Code gut formatiert ist und keine Syntaxfehler enthält.

> [!NOTE]
> Ein häufiges Problem mit CSS und HTML tritt auf, wenn unterschiedliche CSS-Regeln miteinander in Konflikt geraten. Dies kann besonders problematisch sein, wenn Sie Drittanbieter-Code verwenden. Beispielsweise könnten Sie ein CSS-Framework verwenden und feststellen, dass einer der dort verwendeten Klassennamen mit einem kollidiert, den Sie bereits für einen anderen Zweck genutzt haben. Oder Sie stellen fest, dass HTML, das von einer Art Drittanbieter-API generiert wird (z.B. für Werbebanner), eine Klassenname oder ID enthält, die Sie bereits für einen anderen Zweck verwenden. Um sicherzustellen, dass dies nicht geschieht, müssen Sie die Tools, die Sie verwenden, zuerst recherchieren und Ihren Code darum herum gestalten. Es ist auch nützlich, CSS "zu namespacieren", z.B., wenn Sie ein Widget haben, stellen Sie sicher, dass es eine eindeutige Klasse hat, und beginnen Sie dann die Selektoren, die Elemente innerhalb des Widgets auswählen, mit dieser Klasse, sodass Konflikte weniger wahrscheinlich sind. Zum Beispiel `.audio-player ul a`.

### Validierung

Für HTML umfasst die Validierung sicherzustellen, dass alle Ihre Tags ordnungsgemäß geschlossen und verschachtelt sind, ein Doctype verwenden und die Tags für ihren korrekten Zweck nutzen. Eine gute Strategie ist, Ihren Code regelmäßig zu validieren. Ein Dienst, der dies ermöglicht, ist der W3C [Markup Validation Service](https://validator.w3.org/), der es Ihnen ermöglicht, auf Ihren Code zu verweisen und eine Liste von Fehlern zurückzugeben:

![Die HTML-Validator-Homepage](validator.png)

CSS erzählt eine ähnliche Geschichte — Sie müssen prüfen, ob Ihre Eigenschaftsnamen korrekt geschrieben sind, Eigenschaftswerte korrekt geschrieben sind und für die Eigenschaften, auf denen sie verwendet werden, gültig sind, keine geschweiften Klammern fehlen usw. Der W3C hat auch einen [CSS-Validator](https://jigsaw.w3.org/css-validator/) für diesen Zweck zur Verfügung.

### Linter

Eine weitere gute Option ist es, eine sogenannte Linter-Anwendung zu wählen, die nicht nur auf Fehler hinweist, sondern auch vor schlechten Praktiken in Ihrem CSS und anderen Punkten warnt. Linter können in der Regel angepasst werden, um bei der Fehler-/Warnungsmeldung strenger oder entspannter zu sein.

Es gibt viele Online-Linter-Anwendungen wie [Dirty Markup](https://www.10bestdesign.com/dirtymarkup/) für HTML, CSS und JavaScript. Diese erlauben es Ihnen, Ihren Code in ein Fenster einzufügen und werden alle Fehler mit Kreuzen markieren, die dann überfahren werden können, um eine Fehlermeldung anzuzeigen, die Ihnen mitteilt, was das Problem ist. Dirty Markup erlaubt es Ihnen auch, mit der Schaltfläche _Clean_ Korrekturen an Ihrem Markup vorzunehmen.

![Dirty Markup-Anwendung zeigt die Nachricht "Unexpected character in unquoted attribute" über folgendem falschen HTML-Markup an: <div id=combinators"> ](dirty-markup.png)

Es ist jedoch nicht sehr bequem, Ihren Code mehrmals auf eine Webseite kopieren und einfügen zu müssen, um seine Gültigkeit zu überprüfen. Was Sie wirklich wollen, ist ein Linter, der in Ihren Standard-Arbeitsablauf mit minimalem Aufwand integriert werden kann.

Viele Code-Editoren haben Linter-Plugins. Zum Beispiel siehe:

- [SublimeLinter](https://www.sublimelinter.com/) für Sublime Text
- [Notepad++ linter](https://sourceforge.net/projects/notepad-linter/)
- [VS Code linters](https://marketplace.visualstudio.com/search?target=vscode&category=Linters&sortBy=Installs)

### Browser-Entwicklerwerkzeuge

Die in die meisten Browser eingebauten Entwicklerwerkzeuge bieten auch nützliche Hilfsmittel zur Suche nach Fehlern, hauptsächlich für CSS.

> [!NOTE]
> HTML-Fehler werden in den Entwicklerwerkzeugen nicht so leicht angezeigt, da der Browser automatisch versucht, schlecht formatierte Markups zu korrigieren; der W3C-Validator ist der beste Weg, um HTML-Fehler zu finden — siehe [Validierung](#validierung) oben.

Zum Beispiel zeigt im Firefox-Entwicklerwerkzeug der CSS-Inspektor CSS-Deklarationen, die nicht angewendet werden, durchgestrichen mit einem Warnschild an. Wenn Sie das Warnschild überfahren, wird eine beschreibende Fehlermeldung angezeigt:

![Die Entwicklerwerkzeuge streichen ungültiges CSS durch und fügen ein vollkommen geeignetes Warnsymbol hinzu](css-message-devtools.png)

Andere Browser-Entwicklertools haben ähnliche Funktionen.

## Häufige Cross-Browser-Probleme

Nun wenden wir uns den häufigsten Cross-Browser HTML- und CSS-Problemen zu. Die Hauptbereiche, die wir betrachten werden, sind der Mangel an Unterstützung für moderne Funktionen und Layoutprobleme.

### Browser unterstützen keine modernen Funktionen

Dies ist ein häufiges Problem, insbesondere wenn Sie alte Browser unterstützen oder Funktionen einsetzen müssen, die in einigen Browsern implementiert, aber noch nicht in allen vorhanden sind. Im Allgemeinen funktioniert die meiste Kernfunktionalität von HTML und CSS (wie grundlegende HTML-Elemente, CSS-Grundfarben und Textstil) in allen Browsern, die Sie unterstützen möchten; mehr Probleme treten auf, wenn Sie beginnen, neuere HTML-, CSS- und API-Funktionen verwenden zu wollen. MDN zeigt Browser-Kompatibilitätsdaten für jedes dokumentierte Feature an; zum Beispiel siehe die [Browser-Unterstützungstabelle für die `:has()` Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/:has#browser_compatibility).

Sobald Sie eine Liste der Technologien identifiziert haben, die Sie verwenden möchten, die nicht universell unterstützt werden, ist es eine gute Idee zu recherchieren, in welchen Browsern sie unterstützt werden, und welche verwandten Techniken nützlich sind. Siehe [Hilfe finden](#hilfe_finden) unten.

### HTML-Fallback-Verhalten

Einige Probleme können einfach gelöst werden, indem man die natürliche Funktionsweise von HTML/CSS ausnutzt.

Nicht erkannte HTML-Elemente werden vom Browser als anonyme Inline-Elemente behandelt (tatsächlich Inline-Elemente ohne semantischen Wert, ähnlich wie {{htmlelement("span")}}-Elemente). Sie können immer noch auf sie mit ihren Namen verweisen und sie mit CSS stylen, zum Beispiel - Sie müssen nur sicherstellen, dass sie sich so verhalten, wie Sie es möchten. Stylen Sie sie genauso wie jedes andere Element, indem Sie den `display`-Eigenschaft auf etwas anderes als `inline` setzen, falls nötig.

Komplexere Elemente wie HTML-Elemente wie [`<video>`](/de/docs/Web/HTML/Reference/Elements/video), [`<audio>`](/de/docs/Web/HTML/Reference/Elements/audio), [`<picture>`](/de/docs/Web/HTML/Reference/Elements/picture), [`<object>`](/de/docs/Web/HTML/Reference/Elements/object) und [`<canvas>`](/de/docs/Web/HTML/Reference/Elements/canvas) (und andere Features abgesehen) haben natürliche Mechanismen, um Fallbacks hinzuzufügen, falls die verlinkten Ressourcen nicht unterstützt werden. Sie können Fallback-Inhalte zwischen den öffnenden und schließenden Tags hinzufügen, und nicht unterstützende Browser ignorieren das äußere Element und führen den eingebetteten Inhalt aus.

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

Dieses Beispiel enthält einen einfachen Link, der den Download des Videos ermöglicht, falls selbst der HTML-Videoplayer nicht funktioniert, sodass der Benutzer zumindest weiterhin auf das Video zugreifen kann.

Ein weiteres Beispiel sind Formularelemente. Als neue [`<input>`](/de/docs/Web/HTML/Reference/Elements/input)-Typen eingeführt wurden, um spezifische Informationen in Formulare einzugeben, wie Zeiten, Daten, Farben, Zahlen usw., wenn ein Browser die neue Funktion nicht unterstützte, verwendete der Browser standardmäßig `type="text"`. Eingabetypen wurden hinzugefügt, die besonders auf mobilen Plattformen sehr nützlich sind, wo es wichtig ist, eine schmerzfreie Möglichkeit zur Dateneingabe anzubieten. Plattformen bieten je nach Eingabetyp verschiedene UI-Widgets an, wie z.B. ein Kalender-Widget zur Eingabe von Datumsangaben. Sollte ein Browser einen Eingabetyp nicht unterstützen, kann der Benutzer trotzdem die erforderlichen Daten eingeben.

Das folgende Beispiel zeigt Datums- und Zeiteingaben:

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

Die Ausgabe dieses Codes sieht folgendermaßen aus:

{{EmbedLiveSample("form-test", '100%', 100)}}

Sie können die **Play**-Taste drücken, um das Beispiel im MDN Playground zu öffnen und den Quellcode zu bearbeiten.

Wenn Sie das Beispiel ansehen, sehen Sie die UI-Funktionen in Aktion, während Sie versuchen, Daten einzugeben. Auf Geräten mit dynamischen Tastaturen werden typenspezifische Tastenfelder angezeigt. In einem nicht unterstützenden Browser werden die Eingaben einfach auf normale Texteingaben zurückgestellt, was bedeutet, dass der Benutzer dennoch die korrekten Informationen eingeben kann.

### CSS-Fallback-Verhalten

CSS ist bei Fallbacks möglicherweise besser als HTML. Wenn ein Browser auf eine Deklaration oder Regel stößt, die er nicht versteht, wird sie einfach vollständig übersprungen, ohne angewendet zu werden oder einen Fehler zu verursachen. Dies mag für Sie und Ihre Benutzer frustrierend sein, wenn ein solcher Fehler in die Produktionscode einfließt, aber zumindest bedeutet dies, dass die gesamte Seite nicht abstürzt, weil ein Fehler vorliegt, und wenn es geschickt eingesetzt wird, können Sie es zu Ihrem Vorteil nutzen.

Betrachten wir ein Beispiel — eine einfache Box, die mit CSS gestylt wurde und einige Styling besitzt, das durch verschiedene CSS-Features bereitgestellt wird:

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

Der Button hat eine Reihe von Deklarationen auf sich angewendet, aber die, die uns am meisten interessieren, sind wie folgt:

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

Hier bieten wir eine [RGB](/de/docs/Web/CSS/Reference/Values/color_value/rgb) {{cssxref("background-color")}} an, die beim Hover ihre Opazität ändert, um dem Benutzer einen Hinweis zu geben, dass der Button interaktiv ist, und einige halbtransparente, eingestellte {{cssxref("box-shadow")}} Schatten, die dem Button etwas Textur und Tiefe verleihen. Während RGB-Farben und Box-Schatten mittlerweile vollständig unterstützt werden, waren sie nicht schon immer verfügbar; ab IE9. Browser, die RGB-Farben nicht unterstützen, würden die Deklaration ignorieren, was bedeutete, dass der Hintergrund in alten Browsern überhaupt nicht angezeigt wurde und der Text unlesbar wäre, das ist überhaupt nicht gut!

![Kaum zu sehender Pillenknopf mit weißem Text auf fast weißem Hintergrund](unreadable-button.png)

Um dies zu beheben, haben wir eine zweite `background-color` Deklaration hinzugefügt, die nur das Farb-Keyword `red` angibt — dies wird in wirklich alten Browsern unterstützt und dient als Fallback, wenn die modernen glänzenden Funktionen nicht funktionieren. Was passiert ist, dass ein Browser, der diese Seite besucht, zuerst den ersten `background-color`-Wert anwendet; wenn es zur zweiten `background-color`-Deklaration gelangt, wird es den initialen Wert mit diesem Wert überschreiben, wenn es RGB-Farben unterstützt. Wenn nicht, wird die gesamte Deklaration einfach ignoriert und es geht weiter.

> [!NOTE]
> Das Gleiche gilt für andere CSS-Funktionen wie [Medienabfragen](/de/docs/Web/CSS/Guides/Media_queries/Using), {{cssxref("@font-face")}} und {{cssxref("@supports")}} Blöcke — wenn sie nicht unterstützt werden, werden sie vom Browser einfach ignoriert.

### Selektoren-Unterstützung

Natürlich werden keine CSS-Funktionen überhaupt angewendet, wenn Sie nicht die richtigen [Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors) verwenden, um das Element auszuwählen, das Sie stylen möchten!

In einer kommagetrennten Liste von Selektoren, wenn Sie nur einen Selektor falsch schreiben, könnte er kein Element erreichen. Wenn jedoch ein Selektor ungültig ist, wird die **gesamte** Liste von Selektoren ignoriert, zusammen mit dem gesamten Stilblock. Aus diesem Grund, schließen Sie nur eine `:-moz-` vorangestellte Pseudoklasse oder Pseudoelement in einer [verzeihlichen Selektorliste](/de/docs/Web/CSS/Reference/Selectors/Selector_list#forgiving_selector_list), wie `:where(::-moz-thumb)`. Schließen Sie keine `:-moz-` vorangestellten Pseudoklasse oder Pseudoelement in einer kommagetrennten Gruppe von Selektoren außerhalb einer {{cssxref(":is()")}} oder {{cssxref(":where()")}} verzeihlichen Selektorliste ein, da alle Browser außer Firefox den gesamten Block ignorieren. Beachten Sie, dass sowohl `:is()` als auch `:where()` als Parameter in anderen Selektorlisten übergeben werden können, einschließlich {{cssxref(":has()")}} und {{cssxref(":not()")}}.

Wir finden es hilfreich, das Element, das Sie zu stylen versuchen, mit den Entwicklertools Ihres Browsers zu inspizieren und dann den DOM-Baumkrümelpfad anzusehen, den DOM-Inspektoren in der Regel anbieten, um zu sehen, ob Ihr Selektor im Vergleich dazu sinnvoll ist.

Zum Beispiel erhalten Sie in den Firefox-Entwicklertools diese Art der Ausgabe am Ende des DOM-Inspektors:

![Der Breadcrumb der Elemente ist html > body > form > div.form > input#date](dom-breadcrumb-trail.png)

Wenn Sie zum Beispiels versuchen, diesen Selektor zu verwenden, könnten Sie sehen, dass er das Eingabeelement nicht wie gewünscht auswählen würde:

```css
form > #date {
  /* … */
}
```

(Das `date` Formulareingabe ist kein direktes Kind des `<form>`; es wäre besser, einen allgemeinen Nachkommen-Selektor statt eines Kind-Selektors zu verwenden).

### Handhabung von CSS-Präfixen

Ein weiteres Problem entsteht bei CSS-Präfixen — sie sind ein Mechanismus, der ursprünglich verwendet wurde, um Browserherstellern zu ermöglichen, ihre eigene Version eines CSS- (oder JavaScript-) Merkmals zu implementieren, während die Technologie noch experimentell ist, damit sie damit spielen und es richtig hinbekommen können, ohne mit anderen Implementierungen oder der endgültigen nicht vorangestellten Implementierung in Konflikt zu geraten.

Beispielsweise verwendet Firefox `-moz-` und Chrome/Edge/Opera/Safari `-webkit-`. Andere Präfixe, die in alten Codes vorkommen und problemlos entfernt werden können, schließen `-ms-` ein, das von Internet Explorer und frühen Versionen von Edge verwendet wurde, und `-o`, das in den ursprünglichen Versionen von Opera verwendet wurde.

Vorangestellte Funktionen sollten niemals in Produktionswebsites verwendet werden — sie unterliegen Änderungen oder Entfernungen ohne Vorwarnung, können Leistungsprobleme in alten Browserversionen verursachen, die sie benötigen, und waren die Ursache für Cross-Browser-Probleme. Dies war besonders ein Problem, wenn z.B. Entwickler nur die `-webkit-` Version einer Eigenschaft verwendeten, was bedeutete, dass die Seite in anderen Browsern nicht funktionieren würde. Dies geschah tatsächlich so oft, dass andere Browseranbieter `-webkit-` vorangestellte Versionen von mehreren CSS-Eigenschaften implementierten. Während Browser weiterhin einige vorangestellte Eigenschaftsnamen, Eigenschaftswerte und Pseudoklassen unterstützen, werden nun experimentelle Funktionen hinter Flags gestellt, damit Webentwickler sie während der Entwicklung testen können.

Wenn Sie ein Präfix verwenden, stellen Sie sicher, dass es benötigt wird; dass die Eigenschaft eines der wenigen verbliebenen vorangestellten Funktionen ist. Sie können nachsehen, welche Browser Präfixe benötigen, auf den MDN-Referenzseiten und Seiten wie [caniuse.com](https://caniuse.com/). Wenn Sie sich unsicher sind, können Sie dies auch feststellen, indem Sie direkt in Browsern einige Tests durchführen. Fügen Sie die Standard-nicht-vorangestellte Version nach der vorangestellten Stilerklärung hinzu; sie wird ignoriert, wenn nicht unterstützt, und verwendet, wenn unterstützt.

```css
.masked {
  -webkit-mask-image: url("MDN.svg");
  mask-image: url("MDN.svg");
  -webkit-mask-size: 50%;
  mask-size: 50%;
}
```

Probieren Sie dieses einfache Beispiel aus:

1. Verwenden Sie diese Seite oder eine andere, die eine prominente Überschrift oder ein anderes Blockelement hat.
2. Rechtsklicken/Cmd + klicken Sie auf das betreffende Element und wählen Sie **Inspect/Inspect element** (oder was auch immer die Option in Ihrem Browser ist) — dies sollte die Entwicklertools in Ihrem Browser öffnen, mit dem hervorgehobenen Element im DOM-Inspektor.
3. Suchen Sie nach einer Funktion, die Sie verwenden können, um dieses Element zu wählen. Zum Beispiel hat zum Zeitpunkt des Schreibens, diese Seite auf MDN ein Logo mit einer ID von `mdn-docs-logo`.
4. Speichern Sie eine Referenz auf dieses Element in einer Variable, z.B.:

   ```js
   const test = document.getElementById("mdn-docs-logo");
   ```

5. Versuchen Sie nun einen neuen Wert für die CSS-Eigenschaft zu setzen, an der Sie interessiert sind und die auf dieses Element angewendet werden; dies können Sie über die [style](/de/docs/Web/API/HTMLElement/style) Eigenschaft des Elements tun, z.B. versuchen, dies in die JavaScript-Konsole einzugeben:

   ```js
   test.style.transform = "rotate(90deg)";
   ```

Während Sie anfangen, den Eigenschaftsnamens-Representanten nach dem zweiten Punkt zu tippen (beachten Sie, dass in JavaScript, CSS-Eigenschaftsnamen im {{Glossary("camel_case", "lower camel case")}}, nicht im {{Glossary("kebab_case", "kebab-case")}} geschrieben sind), sollte die JavaScript-Konsole beginnen, die Namen der Eigenschaften zu vervollständigen, die im Browser existieren und mit dem übereinstimmen, was Sie bisher geschrieben haben. Dies ist nützlich, um herauszufinden, welche Eigenschaften in diesem Browser implementiert sind.

Wenn Sie moderne Funktionen einbeziehen müssen, testen Sie die Unterstützung der Funktionen mit {{cssxref("@supports")}}, die es ermöglicht, native Feature-Detection-Tests zu implementieren und die vorangestellte oder neue Funktion in den `@supports` Block zu verschachteln.

### Probleme mit responsivem Design

Das responsive Design ist die Praktik, Webseitenlayouts zu erstellen, die sich unterschiedlichen Geräteformen anpassen — z.B. verschiedene Bildschirmbreiten, Ausrichtungen (Hoch- oder Querformat) oder Auflösungen. Ein Desktop-Layout wird beispielsweise auf einem Mobilgerät schrecklich aussehen, daher müssen Sie ein geeignetes mobiles Layout mithilfe von [Medienabfragen](/de/docs/Web/CSS/Guides/Media_queries) bereitstellen und sicherstellen, dass es korrekt mit [viewport](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport) angewendet wird. Eine detaillierte Darstellung dieser Praktiken finden Sie in [unserem Tutorial zum responsiven Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design).

Auch die Auflösung ist ein großes Thema – zumal mobile Geräte weniger wahrscheinlich sind, große und schwere Bilder zu benötigen als Desktop-Computer und eher langsamere Internetverbindungen und möglicherweise sogar teure Datentarife haben, die eine verschwendete Bandbreite problematischer machen. Zusätzlich haben verschiedene Geräte möglicherweise eine Reihe unterschiedlicher Auflösungen, was bedeutet, dass kleinere Bilder pixelig erscheinen könnten. Es gibt eine Reihe von Techniken, die Ihnen helfen, solche Probleme zu umgehen, von [Medienabfragen](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design#media_queries) zu komplexeren [responsive Bildtechniken](/de/docs/Web/HTML/Guides/Responsive_images#resolution_switching_different_sizes), einschließlich {{HTMLElement('picture')}} und dem {{HTMLElement('img')}} Element's [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset) und [`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes) Attribute.

## Hilfe finden

Es gibt viele andere Probleme, auf die Sie in HTML und CSS stoßen, und es ist wertvoll, zu wissen, wie man im Internet nach Antworten sucht.

Zu den besten Informationsquellen gehören das Mozilla Developer Network (wo Sie sich gerade befinden!), [stackoverflow.com](https://stackoverflow.com/) und [caniuse.com](https://caniuse.com/).

Um das Mozilla Developer Network (MDN) zu nutzen, führen die meisten Menschen eine Suchmaschinenabfrage zu der Technologie durch, über die sie Informationen suchen, zusammen mit dem Begriff „mdn“, zum Beispiel „mdn HTML video“. MDN enthält verschiedene nützliche Inhaltstypen:

- Referenzmaterial mit Browser-Kompatibilitätsinformationen für clientseitige Webtechnologien, z.B. die [`<video>` Referenzseite](/de/docs/Web/HTML/Reference/Elements/video).
- Anderes unterstützendes Referenzmaterial, zum Beispiel unser [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Guides/Formats),
- Nützliche Tutorials, die spezifische Probleme lösen, zum Beispiel [Erstellen eines browserübergreifenden Videoplayers](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player).

[caniuse.com](https://caniuse.com/) bietet Unterstützung zusammen mit einigen nützlichen externen Ressourcenlinks. Zum Beispiel siehe <https://caniuse.com/#search=video> (Sie müssen nur die Funktion, nach der Sie suchen, in das Textfeld eingeben).

[stackoverflow.com](https://stackoverflow.com/) (SO) ist eine Forumsseite, auf der Sie Fragen stellen und Lösungen von anderen Entwicklern erhalten können. Hier können Sie auch nach früheren Beiträgen suchen und anderen Entwicklern helfen. Es wird geraten, zuerst nachzusehen, ob es bereits eine Antwort auf Ihre Frage gibt, bevor Sie eine neue Frage posten. Zum Beispiel suchten wir nach „Autofokus in HTML-Dialog deaktivieren“ auf SO und fanden sehr schnell [Autofokus mit HTML-Attributen deaktivieren](https://stackoverflow.com/questions/63267581/disable-showmodal-auto-focusing-using-html-attributes).

Abgesehen davon sollten Sie mit Ihrer bevorzugten Suchmaschine nach einer Lösung für Ihr Problem suchen. Es ist oft nützlich, spezifische Fehlermeldungen zu suchen, falls Ihnen welche vorliegen — andere Entwickler haben wahrscheinlich dieselben Probleme wie Sie gehabt.

## Zusammenfassung

Nun sollten Sie mit den Haupttypen von Cross-Browser-HTML- und CSS-Problemen vertraut sein, auf die Sie in der Webentwicklung stoßen werden, und wissen, wie Sie sie beheben können.

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Testing_strategies","Learn_web_development/Extensions/Testing/Feature_detection", "Learn_web_development/Extensions/Testing")}}
