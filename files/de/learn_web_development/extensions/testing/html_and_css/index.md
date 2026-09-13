---
title: Umgang mit häufigen HTML- und CSS-Problemen
short-title: Häufige HTML- und CSS-Probleme
slug: Learn_web_development/Extensions/Testing/HTML_and_CSS
l10n:
  sourceCommit: f4c14731a1a157fc8d8f7357ac4d74d14a7d7fb5
---

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Testing_strategies","Learn_web_development/Extensions/Testing/Feature_detection", "Learn_web_development/Extensions/Testing")}}

Mit diesem Szenario im Hinterkopf werden wir nun spezifisch auf die häufigen browserübergreifenden Probleme eingehen, auf die Sie im HTML- und CSS-Code stoßen können, und welche Werkzeuge verwendet werden können, um Probleme zu verhindern oder zu beheben, die auftreten. Dazu gehören das Linten von Code, der Umgang mit CSS-Präfixen, die Verwendung von Browser-Entwicklungstools zur Fehlerverfolgung, der Einsatz von Polyfills zur Unterstützung in Browsern, das Bewältigen von Problemen beim responsiven Design und mehr.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>; eine Vorstellung von den grundlegenden
        <a
          href="/de/docs/Learn_web_development/Extensions/Testing/Introduction"
          >Prinzipien des browserübergreifenden Testens</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>
        In der Lage sein, häufige browserübergreifende HTML- und CSS-Probleme zu diagnostizieren und geeignete Werkzeuge und Techniken zur Behebung zu verwenden.
      </td>
    </tr>
  </tbody>
</table>

## Die Probleme mit HTML und CSS

Einige Probleme mit HTML und CSS liegen in der Tatsache, dass beide Sprachen relativ einfach sind und Entwickler sie oft nicht ernst nehmen, wenn es darum geht, sicherzustellen, dass der Code gut gestaltet, effizient und semantisch ist und den Zweck der Features auf der Seite beschreibt. Im schlimmsten Fall wird JavaScript verwendet, um den gesamten Inhalt und Stil der Webseite zu generieren, was Ihre Seiten unzugänglich und weniger performant macht (das Generieren von DOM-Elementen ist teuer). In anderen Fällen werden anfängliche Features nicht konsistent über Browser hinweg unterstützt, was dazu führen kann, dass einige Features und Stile für einige Benutzer nicht funktionieren. Probleme mit dem responsiven Design sind ebenfalls häufig – eine Website, die in einem Desktop-Browser gut aussieht, kann auf einem mobilen Gerät eine schreckliche Erfahrung bieten, weil der Inhalt zu klein zum Lesen ist oder die Seite möglicherweise wegen teurer Animationen langsam ist.

Schauen wir uns an, wie wir browserübergreifende Fehler reduzieren können, die sich aus HTML/CSS ergeben.

## Zuerst das Wichtigste: Allgemeine Probleme beheben

Wie wir im [ersten Artikel dieser Serie](/de/docs/Learn_web_development/Extensions/Testing/Introduction#testingdiscovery) gesagt haben, besteht eine gute Strategie zunächst darin, in ein paar modernen Browsern auf Desktop/Mobilgeräten zu testen, um sicherzustellen, dass Ihr Code allgemein funktioniert, bevor Sie sich auf die browserübergreifenden Probleme konzentrieren.

In unseren Artikeln [HTML-Debugging](/de/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML) und [CSS-Debugging](/de/docs/Learn_web_development/Core/Styling_basics/Debugging_CSS) haben wir einige grundlegende Anleitungen zum Debuggen von HTML/CSS bereitgestellt – wenn Sie mit den Grundlagen nicht vertraut sind, sollten Sie diese Artikel unbedingt studieren, bevor Sie fortfahren.

Im Wesentlichen geht es darum zu überprüfen, ob Ihr HTML- und CSS-Code gut formatiert ist und keine Syntaxfehler enthält.

> [!NOTE]
> Ein häufiges Problem mit CSS und HTML tritt auf, wenn verschiedene CSS-Regeln anfangen, miteinander zu kollidieren. Dies kann besonders problematisch sein, wenn Sie Code von Drittanbietern verwenden. Wenn Sie beispielsweise ein CSS-Framework verwenden und feststellen, dass einer der Klassennamen, die es verwendet, mit einem kollidiert, den Sie bereits für einen anderen Zweck verwendet haben. Oder Sie finden heraus, dass HTML, das von einer Art Drittanbieter-API generiert wird (z.B. Anzeigebanner), einen Klassennamen oder eine ID enthält, die Sie bereits für einen anderen Zweck verwenden. Um sicherzustellen, dass dies nicht passiert, müssen Sie die von Ihnen verwendeten Werkzeuge zuerst erforschen und Ihren Code um sie herum gestalten. Es ist auch ratsam, CSS zu „namespacen“, z.B. wenn Sie ein Widget haben, stellen Sie sicher, dass es eine eindeutige Klasse hat, und beginnen Sie dann die Selektoren, die die Elemente innerhalb des Widgets auswählen, mit dieser Klasse, sodass Konflikte weniger wahrscheinlich sind. Zum Beispiel `.audio-player ul a`.

### Validierung

Bei HTML beinhaltet die Validierung, sicherzustellen, dass alle Ihre Tags ordnungsgemäß geschlossen und verschachtelt sind, Sie einen Doctype verwenden und die Tags für ihren korrekten Zweck verwenden. Eine gute Strategie ist, Ihren Code regelmäßig zu validieren. Ein Dienst, der dies tun kann, ist der W3C [Markup Validation Service](https://validator.w3.org/), der Ihnen ermöglicht, auf Ihren Code zu verweisen und eine Liste von Fehlern zurückgibt:

![Die HTML-Validator-Startseite](validator.png)

CSS hat eine ähnliche Geschichte – Sie müssen überprüfen, ob Ihre Eigenschaftsnamen richtig geschrieben sind, Eigenschaftswerte richtig geschrieben und für die Eigenschaften gültig sind, auf denen sie verwendet werden, Sie keine geschweiften Klammern vermissen usw. Das W3C hat auch einen [CSS-Validator](https://jigsaw.w3.org/css-validator/) für diesen Zweck verfügbar.

### Linter

Eine weitere gute Option ist eine sogenannte Linter-Anwendung, die nicht nur Fehler aufzeigt, sondern auch Warnungen über schlechte Praktiken in Ihrem CSS und andere Punkte anzeigen kann. Linter können in der Regel angepasst werden, um strenger oder entspannter in ihrer Fehler-/Warnberichterstattung zu sein.

Es gibt viele Online-Linter-Anwendungen, wie z.B. [Dirty Markup](https://www.10bestdesign.com/dirtymarkup/) für HTML, CSS und JavaScript. Diese erlauben Ihnen, Ihren Code in ein Fenster einzufügen, und es werden alle Fehler mit Kreuzen markiert, die Sie dann überfahren können, um eine Fehlermeldung zu erhalten, die Ihnen sagt, wo das Problem liegt. Dirty Markup ermöglicht Ihnen auch, Ihre Markup-Fehler mit der _Clean_-Schaltfläche zu beheben.

![Dirty Markup-Anwendung zeigt die Nachricht "Unexpected character in unquoted attribute" über dem folgenden inkorrekten HTML-Markup: <div id=combinators">](dirty-markup.png)

Allerdings ist es nicht sehr praktisch, Ihren Code mehrmals zu kopieren und in eine Webseite einzufügen, um dessen Gültigkeit zu überprüfen. Was Sie wirklich wollen, ist ein Linter, der sich in Ihren Standard-Arbeitsablauf mit minimalem Aufwand integriert.

Viele Code-Editoren bieten Linter-Plugins. Zum Beispiel:

- [SublimeLinter](https://www.sublimelinter.com/) für Sublime Text
- [Notepad++ linter](https://sourceforge.net/projects/notepad-linter/)
- [VS Code Linter](https://marketplace.visualstudio.com/search?target=vscode&category=Linters&sortBy=Installs)

### Browser-Entwicklungstools

Die Entwicklerwerkzeuge, die in die meisten Browser eingebaut sind, verfügen ebenfalls über nützliche Tools zur Fehlerverfolgung, hauptsächlich für CSS.

> [!NOTE]
> HTML-Fehler werden in den Entwicklerwerkzeugen nicht so leicht sichtbar, da der Browser versucht, schlecht formatiertes Markup automatisch zu korrigieren; der W3C-Validator ist der beste Weg, um HTML-Fehler zu finden — siehe [Validierung](#validierung) oben.

Als Beispiel wird im Firefox-CSS-Inspektor CSS-Deklarationen, die nicht angewendet werden, durchgestrichen angezeigt, mit einem Warnsymbol. Beim Überfahren des Warnsymbols wird eine beschreibende Fehlermeldung angezeigt:

![Die Entwicklerwerkzeuge streichen ungültiges CSS durch und fügen ein überfahrbares Warnsymbol hinzu](css-message-devtools.png)

Andere Browserentwicklertools haben ähnliche Funktionen.

## Häufige browserübergreifende Probleme

Kommen wir nun zu einigen der häufigsten browserübergreifenden HTML- und CSS-Probleme. Die Hauptbereiche, die wir betrachten werden, sind der Mangel an Unterstützung für moderne Features und Layout-Probleme.

### Browser, die moderne Features nicht unterstützen

Dies ist ein häufiges Problem, insbesondere wenn Sie alte Browser unterstützen müssen oder Sie Features verwenden, die in einigen Browsern implementiert sind, aber noch nicht in allen. Im Allgemeinen funktionieren die meisten der grundlegenden HTML- und CSS-Funktionalitäten (wie grundlegende HTML-Elemente, CSS-Grundfarben und Textstyling) über alle Browser hinweg, die Sie unterstützen möchten; mehr Probleme werden aufgedeckt, wenn Sie neuere HTML-, CSS- und API-Funktionen verwenden möchten. MDN zeigt die Browser-Kompatibilitätsdaten für jede dokumentierte Funktion an; beispielsweise die [Browser-Unterstützungstabelle für die `:has()`-Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/:has#browser_compatibility).

Sobald Sie eine Liste von Technologien identifiziert haben, die Sie verwenden werden und die nicht universell unterstützt werden, ist es eine gute Idee zu recherchieren, in welchen Browsern sie unterstützt werden und welche verwandten Techniken nützlich sind. Siehe [Hilfe finden](#hilfe_finden) unten.

### HTML-Fallback-Verhalten

Einige Probleme können einfach dadurch gelöst werden, dass man sich die natürliche Funktionsweise von HTML/CSS zunutze macht.

Nicht erkannte HTML-Elemente werden vom Browser als anonyme Inline-Elemente behandelt (effektiv Inline-Elemente ohne semantischen Wert, ähnlich wie {{htmlelement("span")}}-Elemente). Sie können sie immer noch mit ihren Namen ansprechen und mit CSS stylen, zum Beispiel – Sie müssen nur sicherstellen, dass sie sich so verhalten, wie Sie es möchten. Stylen Sie sie genau wie andere Elemente, einschließlich der Einstellung der `display`-Eigenschaft auf etwas anderes als `inline`, falls erforderlich.

Komplexere Elemente wie HTML [`<video>`](/de/docs/Web/HTML/Reference/Elements/video), [`<audio>`](/de/docs/Web/HTML/Reference/Elements/audio), [`<picture>`](/de/docs/Web/HTML/Reference/Elements/picture), [`<object>`](/de/docs/Web/HTML/Reference/Elements/object) und [`<canvas>`](/de/docs/Web/HTML/Reference/Elements/canvas) (und andere Features) haben natürliche Mechanismen, um Fallbacks hinzuzufügen, falls die verknüpften Ressourcen nicht unterstützt werden. Sie können Fallback-Inhalte zwischen den öffnenden und schließenden Tags hinzufügen, und nicht unterstützende Browser ignorieren das äußere Element effektiv und führen den verschachtelten Inhalt aus.

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

Dieses Beispiel enthält einen einfachen Link, der es Ihnen ermöglicht, das Video herunterzuladen, falls sogar der HTML-Video-Player nicht funktioniert, damit der Benutzer das Video dennoch erreichen kann.

Ein weiteres Beispiel sind Formularelemente. Als neue [`<input>`](/de/docs/Web/HTML/Reference/Elements/input)-Typen für die Eingabe spezifischer Informationen in Formulare eingeführt wurden, wie Zeitangaben, Daten, Farben, Zahlen usw., wenn ein Browser das neue Feature nicht unterstützte, verwendete der Browser den Standard `type="text"`. Es wurden Input-Typen hinzugefügt, die sehr nützlich sind, insbesondere auf mobilen Plattformen, wo es sehr wichtig ist, einen schmerzfreien Weg zur Eingabe von Daten für das Benutzererlebnis zu bieten. Plattformen bieten je nach Eingabetyp unterschiedliche UI-Widgets, z.B. ein Kalender-Widget zur Eingabe von Daten. Sollte ein Browser einen Eingabetyp nicht unterstützen, kann der Benutzer dennoch die erforderlichen Daten eingeben.

Das folgende Beispiel zeigt Eingaben für Datum und Uhrzeit:

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

Die Ausgabe dieses Codes sieht wie folgt aus:

{{EmbedLiveSample("form-test", '100%', 100)}}

Sie können auf die Schaltfläche **Abspielen** drücken, um das Beispiel im MDN Playground zu öffnen und den Quellcode zu bearbeiten.

Wenn Sie das Beispiel ansehen, sehen Sie die UI-Funktionen in Aktion, wenn Sie versuchen, Daten einzugeben. Auf Geräten mit dynamischen Tastaturen werden tippspezifische Tastenfelder angezeigt. In einem nicht unterstützenden Browser werden die Eingaben einfach auf normale Texteingaben zurückgesetzt, was bedeutet, dass der Benutzer dennoch die korrekten Informationen eingeben kann.

### CSS-Fallback-Verhalten

CSS ist im Hinblick auf Fallbacks wahrscheinlich besser als HTML. Wenn ein Browser auf eine Deklaration oder Regel stößt, die er nicht versteht, überspringt er sie einfach, ohne sie anzuwenden oder einen Fehler zu werfen. Dies kann frustrierend für Sie und Ihre Benutzer sein, wenn ein solcher Fehler in den Produktionscode gelangt, aber zumindest kommt dadurch die ganze Website nicht wegen eines Fehlers zum Absturz, und wenn es clever verwendet wird, können Sie dies zu Ihrem Vorteil nutzen.

Schauen wir uns ein Beispiel an – eine einfache Box, die mit CSS gestaltet wurde und einige Stilisierungen durch verschiedene CSS-Features erhält:

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

Sie können die Schaltfläche **Abspielen** drücken, um das Beispiel im MDN Playground zu öffnen und mit dem Quellcode zu spielen.

Der Button hat eine Reihe von Deklarationen, die darauf angewendet werden, aber die, die uns am meisten interessiert, sind folgende:

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

Hier geben wir eine [RGB](/de/docs/Web/CSS/Reference/Values/color_value/rgb) {{cssxref("background-color")}} an, die die Opazität beim Hover ändert, um dem Benutzer einen Hinweis zu geben, dass der Button interaktiv ist, und einige halbtransparente inset-{{cssxref("box-shadow")}}-Schatten, um dem Button etwas Textur und Tiefe zu geben. Während RGB-Farben und Box-Schatten jetzt vollständig unterstützt werden, waren sie noch nicht immer verfügbar; beginnend mit IE9. Browser, die RGB-Farben nicht unterstützten, ignorierten die Deklaration, was bedeutete, dass in alten Browsern der Hintergrund einfach gar nicht angezeigt wurde, sodass der Text unlesbar war, was überhaupt nicht gut ist!

![Schwer zu lesender Pillenknopf mit weißem Text auf fast weißem Hintergrund](unreadable-button.png)

Um dies zu beheben, haben wir eine anfängliche Deklaration `background-color` hinzugefügt, die einfach die `red`-Farbschlüsselwort angibt – dies wird schon in wirklich alten Browsern unterstützt und dient als Fallback, wenn die modernen glänzenden Features nicht funktionieren. Was passiert ist, dass ein Browser, der diese Seite besucht, zunächst den ersten `background-color`-Wert anwendet; wenn er zur zweiten `background-color`-Deklaration gelangt, wird er den anfänglichen Wert mit diesem Wert überschreiben, wenn er RGB-Farben unterstützt. Wenn nicht, wird er die gesamte Deklaration einfach ignorieren und weitermachen.

> [!NOTE]
> Das gleiche gilt für andere CSS-Features wie [Media-Queries](/de/docs/Web/CSS/Guides/Media_queries/Using), {{cssxref("@font-face")}} und {{cssxref("@supports")}}-Blöcke – wenn sie nicht unterstützt werden, ignoriert der Browser sie einfach.

### Selektor-Unterstützung

Natürlich werden keine CSS-Features angewendet, wenn Sie nicht die richtigen [Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors) verwenden, um das Element auszuwählen, das Sie stylen möchten!

In einer durch Kommas getrennten Liste von Selektoren, wenn Sie nur einen Selektor falsch schreiben, könnte es kein Element auswählen. Wenn jedoch ein Selektor ungültig ist, wird die **gesamte** Liste von Selektoren ignoriert, zusammen mit dem gesamten Stilblock. Aus diesem Grund sollten Sie nur eine `:-moz-`-Präfix-Pseudoklasse oder -Pseudoelement in einer [großzügigen Selektorenliste](/de/docs/Web/CSS/Reference/Selectors/Selector_list#forgiving_selector_list) wie `:where(::-moz-thumb)` einfügen. Schließen Sie keine `:-moz-`-Präfix-Pseudoklasse oder -Pseudoelement innerhalb einer durch Kommas getrennten Gruppe von Selektoren außerhalb einer {{cssxref(":is()")}}- oder {{cssxref(":where()")}}-großzügigen Selektorenliste ein, da alle Browser außer Firefox den gesamten Block ignorieren werden. Beachten Sie, dass sowohl `:is()` als auch `:where()` als Parameter in anderen Selektorenlisten, einschließlich {{cssxref(":has()")}} und {{cssxref(":not()")}}, übergeben werden können.

Wir finden, dass es hilfreich ist, das Element, das Sie stylen möchten, mit den Entwicklerwerkzeugen Ihres Browsers zu inspizieren und dann den DOM-Tree-Breadcrumb-Trail zu betrachten, den DOM-Inspekteure oft bereitstellen, um zu sehen, ob Ihr Selektor im Vergleich zu ihm Sinn ergibt.

Zum Beispiel erhalten Sie in den Entwicklerwerkzeugen von Firefox diese Art von Ausgabe am unteren Rand des DOM-Inspekteurs:

![Der Breadcrumb-Pfad der Elemente ist html > body > form > div.form > input#date](dom-breadcrumb-trail.png)

Wenn Sie beispielsweise diesen Selektor verwenden wollten, könnten Sie sehen, dass er das Eingabe-Element nicht wie gewünscht auswählen würde:

```css
form > #date {
  /* … */
}
```

(Das `date`-Formulareingabeelement ist kein direktes Kind des `<form>`-Elements; Sie wären besser dran, einen allgemeinen Nachkommen-Selektor anstelle eines Kind-Selektors zu verwenden).

### Umgang mit CSS-Präfixen

Eine weitere Problemgruppe resultiert aus CSS-Präfixen – dies ist ein Mechanismus, der ursprünglich dazu verwendet wurde, Browser-Anbietern zu erlauben, ihre eigene Version eines CSS (oder JavaScript)-Features zu implementieren, während die Technologie sich noch in einem experimentellen Stadium befindet, sodass sie damit spielen und sie richtig umsetzen können, ohne mit Implementierungen anderer Browser zu kollidieren oder den finalen unpräfigierten Implementierungen.

Beispielsweise verwendet Firefox `-moz-` und Chrome/Edge/Opera/Safari verwenden `-webkit-`. Andere Präfixe, die Ihnen in alten Codes begegnen können und sicher entfernt werden können, sind `-ms-`, das von Internet Explorer und frühen Versionen von Edge verwendet wurde, und `-o`, das in den ursprünglichen Versionen von Opera verwendet wurde.

Präfix-Features sollten niemals auf Produktions-Websites verwendet werden – sie können ohne Vorwarnung geändert oder entfernt werden, können in alten Browserversionen, die sie erfordern, zu Leistungsproblemen führen und waren die Ursache für browserübergreifende Probleme. Dies war insbesondere ein Problem, wenn Entwickler beschlossen, nur die `-webkit-`-Version einer Eigenschaft zu verwenden, was implizierte, dass die Seite in anderen Browsern nicht funktioniert. Dies geschah so häufig, dass andere Browser-Anbieter `-webkit-`-präfixierte Versionen mehrerer CSS-Eigenschaften implementierten. Während Browser immer noch einige präfixierte Eigenschaftsnamen, Eigenschaftswerte und Pseudoklassen unterstützen, werden experimentelle Features nun hinter Flags platziert, damit Webentwickler sie während der Entwicklung testen können.

Wenn Sie ein Präfix verwenden, stellen Sie sicher, dass es benötigt wird und dass die Eigenschaft eines der wenigen verbleibenden präfigierten Features ist. Sie können nachschlagen, welche Browser Präfixe auf MDN-Referenzseiten und Websites wie [caniuse.com](https://caniuse.com/) erfordern. Wenn Sie unsicher sind, können Sie dies auch durch direkte Tests in Browsern herausfinden. Fügen Sie die Standard- nicht präfigierte Version nach der präfigierten Stildeklaration hinzu; sie wird ignoriert, wenn sie nicht unterstützt wird, und verwendet, wenn sie unterstützt wird.

```css
.masked {
  -webkit-mask-image: url("MDN.svg");
  mask-image: url("MDN.svg");
  -webkit-mask-size: 50%;
  mask-size: 50%;
}
```

Probieren Sie dieses einfache Beispiel aus:

1. Verwenden Sie diese Seite oder eine andere Site, die eine prominente Überschrift oder ein anderes Blockelement hat.
2. Rechts-/Cmd-Klicken Sie auf das fragliche Element und wählen Sie Inspect/Inspect element (oder was auch immer die Option in Ihrem Browser ist) – dies sollte die Entwicklerwerkzeuge in Ihrem Browser öffnen, mit dem hervorgehobenen Element im DOM-Inspekteur.
3. Suchen Sie nach einem Feature, das Sie verwenden können, um dieses Element auszuwählen. Zum Beispiel hat zu der Zeit, als dieser Artikel geschrieben wurde, diese Seite auf MDN ein Logo mit einer ID von `mdn-docs-logo`.
4. Speichern Sie eine Referenz zu diesem Element in einer Variablen, zum Beispiel:

   ```js
   const test = document.getElementById("mdn-docs-logo");
   ```

5. Versuchen Sie nun, einen neuen Wert für die CSS-Eigenschaft, die Sie interessiert, zu diesem Element zu setzen; dies können Sie über die [style](/de/docs/Web/API/HTMLElement/style)-Eigenschaft des Elements tun, zum Beispiel versuchen Sie, diese in die JavaScript-Konsole einzugeben:

   ```js
   test.style.transform = "rotate(90deg)";
   ```

Wenn Sie beginnen, den Eigenschaftenzeichnungswert nach dem zweiten Punkt einzugeben (beachten Sie, dass in JavaScript CSS-Eigenschaftsnamen in {{Glossary("camel_case", "Camel Case")}} und nicht {{Glossary("kebab_case", "Kebab-Fall")}} geschrieben werden), sollte die JavaScript-Konsole beginnen, die Namen der Eigenschaften zu vervollständigen, die im Browser vorhanden sind und mit dem, was Sie bisher geschrieben haben, übereinstimmen. Dies ist nützlich, um herauszufinden, welche Eigenschaften in diesem Browser implementiert sind.

Wenn Sie moderne Funktionen einschließen müssen, testen Sie die Funktionsunterstützung mit {{cssxref("@supports")}}, das es Ihnen ermöglicht, native Funktionsdetektionstests zu implementieren, und nisten Sie das präfigierte oder neue Feature innerhalb des `@supports`-Blocks ein.

### Probleme im responsiven Design

Responsives Design ist die Praxis, Weblayouts zu erstellen, die sich an unterschiedliche Geräteformfaktoren anpassen – zum Beispiel unterschiedliche Bildschirmbreiten, Ausrichtungen (Porträt oder Landschaft) oder Auflösungen. Ein Desktop-Layout sieht zum Beispiel schrecklich aus, wenn es auf einem Mobilgerät angezeigt wird, sodass Sie ein geeignetes mobiles Layout mit [Media-Queries](/de/docs/Web/CSS/Guides/Media_queries) bereitstellen müssen und sicherstellen, dass es korrekt mit [Viewport](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport) angewendet wird. Sie finden eine detaillierte Darstellung solcher Praktiken in [unserem Tutorial zum responsiven Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design).

Die Auflösung ist ebenfalls ein großes Thema – zum Beispiel benötigen mobile Geräte in der Regel keine großen schweren Bilder wie Desktop-Computer und haben eher langsamere Internetverbindungen und möglicherweise sogar teure Datentarife, die Bandbreitenverschwendung zu einem größeren Problem machen. Außerdem können verschiedene Geräte eine Reihe unterschiedlicher Auflösungen haben, was zu pixeligen kleineren Bildern führen kann. Es gibt eine Reihe von Techniken, die Ihnen helfen, solche Probleme zu umgehen, von [Media Queries](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design#media_queries) zu komplexeren [techniken für responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images#resolution_switching_different_sizes), einschließlich der {{HTMLElement('picture')}}- und {{HTMLElement('img')}}-Elemente mit den Attributen [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset) und [`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes).

## Hilfe finden

Es gibt viele andere Probleme, die Sie mit HTML und CSS begegnen werden. Daher ist es unverzichtbar, zu wissen, wie man online Antworten findet.

Zu den besten Informationsquellen gehören das Mozilla Developer Network (da sind Sie jetzt gerade!), [stackoverflow.com](https://stackoverflow.com/) und [caniuse.com](https://caniuse.com/).

Um das Mozilla Developer Network (MDN) zu verwenden, führen die meisten Leute eine Suchmaschinenanfrage der Technologie, über die sie Informationen finden möchten, zuzüglich des Begriffs "mdn" durch, zum Beispiel "mdn HTML video". MDN enthält mehrere nützliche Arten von Inhalten:

- Referenzmaterial mit Browser-Unterstützungsinformationen für clientseitige Webtechnologien, z.B. die [\<video>-Referenzseite](/de/docs/Web/HTML/Reference/Elements/video).
- Anderes unterstützendes Referenzmaterial, wie beispielsweise unser [Leitfaden zu Medientypen und Formaten im Web](/de/docs/Web/Media/Guides/Formats),
- Nützliche Tutorials, die spezifische Probleme lösen, zum Beispiel [Erstellen eines browserübergreifenden Videoplayers](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player).

[caniuse.com](https://caniuse.com/) bietet Unterstützungsinformationen zusammen mit einigen nützlichen externen Ressourcenlinks. Zum Beispiel, siehe <https://caniuse.com/#search=video> (Sie müssen nur die Funktion eingeben, nach der Sie suchen, in das Textfeld).

[stackoverflow.com](https://stackoverflow.com/) (SO) ist eine Forum-Seite, auf der Sie Fragen stellen und andere Entwickler ihre Lösungen teilen können, frühere Beiträge ansehen und anderen Entwicklern helfen können. Ihnen wird geraten, zu schauen, ob es bereits eine Antwort auf Ihre Frage gibt, bevor Sie eine neue Frage stellen. Zum Beispiel suchten wir nach "Autofokus im HTML-Dialog deaktivieren" auf SO und fanden sehr schnell [Autofokus im HTML-Dialog mit HTML-Attributen deaktivieren](https://stackoverflow.com/questions/63267581/disable-showmodal-auto-focusing-using-html-attributes).

Abgesehen davon versuchen Sie, Ihre bevorzugte Suchmaschine nach einer Antwort auf Ihr Problem zu durchsuchen. Es ist oft nützlich, nach spezifischen Fehlermeldungen zu suchen, wenn Sie welche haben – andere Entwickler werden wahrscheinlich dieselben Probleme wie Sie gehabt haben.

## Zusammenfassung

Jetzt sollten Sie die Haupttypen von browserübergreifenden HTML- und CSS-Problemen kennen, auf die Sie in der Webentwicklung stoßen und wissen, wie Sie sie beheben.

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Testing_strategies","Learn_web_development/Extensions/Testing/Feature_detection", "Learn_web_development/Extensions/Testing")}}
