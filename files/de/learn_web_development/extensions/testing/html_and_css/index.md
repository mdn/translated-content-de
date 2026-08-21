---
title: Umgang mit häufigen HTML- und CSS-Problemen
short-title: Häufige HTML- und CSS-Probleme
slug: Learn_web_development/Extensions/Testing/HTML_and_CSS
l10n:
  sourceCommit: f99d00a1c3697e26a679925954e26564e7e79b98
---

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Testing_strategies","Learn_web_development/Extensions/Testing/Feature_detection", "Learn_web_development/Extensions/Testing")}}

Nachdem die Grundlagen festgelegt wurden, werfen wir nun einen genaueren Blick auf die häufigen browserübergreifenden Probleme, auf die Sie in HTML- und CSS-Code stoßen werden, und welche Werkzeuge verwendet werden können, um Probleme zu verhindern oder zu beheben. Dies umfasst Code-Linting, den Umgang mit CSS-Präfixen, die Verwendung von Browser-Entwicklertools zur Fehlerverfolgung, die Verwendung von Polyfills zur Unterstützung in Browsern, die Bewältigung von Problemen im responsiven Design und mehr.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a>, und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>; eine Vorstellung
        von den grundlegenden
        <a
          href="/de/docs/Learn_web_development/Extensions/Testing/Introduction"
          >Prinzipien des browserübergreifenden Testens</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>
        In der Lage sein, häufige HTML- und CSS-browserübergreifende Probleme zu diagnostizieren und
        geeignete Werkzeuge und Techniken zur Behebung dieser Probleme anzuwenden.
      </td>
    </tr>
  </tbody>
</table>

## Die Probleme mit HTML und CSS

Einige der Probleme mit HTML und CSS liegen darin, dass beide Sprachen relativ einfach sind und Entwickler sie oft nicht ernst genug nehmen, um sicherzustellen, dass der Code gut gestaltet, effizient und semantisch ist, um den Zweck der Features auf der Seite zu beschreiben. Im schlimmsten Fall wird JavaScript verwendet, um den gesamten Inhalt und Stil einer Webseite zu generieren, was Ihre Seiten unzugänglich und weniger performant macht (die Erzeugung von DOM-Elementen ist aufwendig). In anderen Fällen werden neue Features nicht einheitlich über alle Browser hinweg unterstützt, was dazu führen kann, dass einige Features und Stile für einige Nutzer nicht funktionieren. Probleme mit dem responsiven Design sind ebenfalls häufig — eine Site, die in einem Desktop-Browser gut aussieht, könnte auf einem mobilen Gerät eine schreckliche Erfahrung bieten, weil der Inhalt zu klein ist, um gelesen zu werden, oder vielleicht die Site langsam ist aufgrund ressourcenintensiver Animationen.

Lassen Sie uns erkunden, wie wir browserübergreifende Fehler, die aus HTML/CSS resultieren, reduzieren können.

## Zuerst die allgemeinen Probleme beheben

Wir haben in [dem ersten Artikel dieser Serie](/de/docs/Learn_web_development/Extensions/Testing/Introduction#testingdiscovery) gesagt, dass eine gute Strategie darin besteht, zuerst in ein paar modernen Browsern auf Desktop/Mobile zu testen, um sicherzustellen, dass Ihr Code im Allgemeinen funktioniert, bevor Sie sich auf die browserübergreifenden Probleme konzentrieren.

In unseren Artikeln [Debugging HTML](/de/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML) und [Debugging CSS](/de/docs/Learn_web_development/Core/Styling_basics/Debugging_CSS) haben wir einige wirklich grundlegende Anleitungen zum Debuggen von HTML/CSS bereitgestellt — wenn Sie mit den Grundlagen nicht vertraut sind, sollten Sie diese Artikel definitiv studieren, bevor Sie weitermachen.

Im Grunde geht es darum, zu überprüfen, ob Ihr HTML- und CSS-Code gut geformt ist und keine Syntaxfehler enthält.

> [!NOTE]
> Ein häufiges Problem mit CSS und HTML tritt auf, wenn unterschiedliche CSS-Regeln anfangen, miteinander zu kollidieren. Dies kann besonders problematisch sein, wenn Sie Drittcode verwenden. Beispielsweise könnten Sie ein CSS-Framework verwenden und feststellen, dass einer der Klassennamen, die es verwendet, mit einem kollidiert, den Sie bereits für einen anderen Zweck verwendet haben. Oder Sie könnten feststellen, dass HTML, das von einer Art Drittanbieter-API generiert wird (beispielsweise für Werbebanner), einen Klassennamen oder eine ID enthält, die Sie bereits für einen anderen Zweck verwenden. Um sicherzustellen, dass dies nicht passiert, müssen Sie die Werkzeuge, die Sie verwenden, zuerst recherchieren und Ihren Code um sie herum gestalten. Es ist auch ratsam, CSS zu "namespace", z. B. wenn Sie ein Widget haben, stellen Sie sicher, dass es eine eindeutige Klasse hat, und beginnen Sie dann die Selektoren, die Elemente innerhalb des Widgets auswählen, mit dieser Klasse, damit Konflikte weniger wahrscheinlich sind. Zum Beispiel `.audio-player ul a`.

### Validierung

Bei HTML bezieht sich die Validierung auf das Sicherstellen, dass alle Ihre Tags richtig geschlossen und verschachtelt sind, Sie einen Doctype verwenden und die Tags für ihren richtigen Zweck verwenden. Eine gute Strategie ist es, Ihren Code regelmäßig zu validieren. Ein Dienst, der dies tun kann, ist der W3C [Markup Validation Service](https://validator.w3.org/), der es Ihnen ermöglicht, auf Ihren Code zu verweisen und eine Liste von Fehlern zurückgibt:

![Die HTML-Validator-Startseite](validator.png)

Bei CSS ist die Geschichte ähnlich — Sie müssen überprüfen, ob Ihre Eigenschaftsnamen korrekt buchstabiert sind, Eigenschaftswerte korrekt buchstabiert und gültig für die Eigenschaften sind, auf die sie angewendet werden, Sie keine geschweiften Klammern vergessen haben und so weiter. Auch hierfür hat das W3C einen [CSS-Validator](https://jigsaw.w3.org/css-validator/) verfügbar.

### Linters

Eine weitere gute Option ist die Wahl einer sogenannten Linter-Anwendung, die nicht nur Fehler aufzeigt, sondern auch Warnungen über schlechte Praktiken in Ihrem CSS und andere Dinge hervorhebt. Linter können in der Regel angepasst werden, um strenger oder entspannter bei der Fehler-/Warnungsmeldung zu sein.

Es gibt viele Online-Linter-Anwendungen, wie [Dirty Markup](https://www.10bestdesign.com/dirtymarkup/) für HTML, CSS und JavaScript. Diese ermöglichen es Ihnen, Ihren Code in ein Fenster zu kopieren, und er wird alle Fehler mit Kreuzen markieren, die dann angezeigt werden können, um eine Fehlermeldung anzuzeigen, die Sie über das Problem informiert. Dirty Markup erlaubt es Ihnen auch, Ihre Markup-Fehler mit dem _Clean_-Button zu beheben.

![Dirty Markup-Anwendung, die die Nachricht "Unerwartetes Zeichen in nicht zitiertem Attribut" über dem folgenden fehlerhaften HTML-Markup anzeigt: <div id=combinators">](dirty-markup.png)

Es ist jedoch nicht sehr praktisch, Ihren Code mehrmals auf eine Webseite kopieren und einfügen zu müssen, um dessen Gültigkeit zu überprüfen. Was Sie wirklich wollen, ist ein Linter, der sich in Ihren Standard-Workflow mit minimalem Aufwand einfügt.

Viele Code-Editoren haben Linter-Plugins. Beispielsweise:

- [SublimeLinter](https://www.sublimelinter.com/) für Sublime Text
- [Notepad++ Linter](https://sourceforge.net/projects/notepad-linter/)
- [VS Code Linters](https://marketplace.visualstudio.com/search?target=vscode&category=Linters&sortBy=Installs)

### Browser-Entwicklertools

Die Entwicklertools, die in den meisten Browsern enthalten sind, bieten ebenfalls nützliche Werkzeuge zur Fehlersuche, hauptsächlich für CSS.

> [!NOTE]
> HTML-Fehler tauchen in Entwicklertools nicht so leicht auf, da der Browser versucht, schlecht formatiertes Markup automatisch zu korrigieren; der W3C-Validator ist der beste Weg, HTML-Fehler zu finden — siehe [Validierung](#validierung) oben.

Zum Beispiel zeigt der CSS-Inspektor in Firefox CSS-Erklärungen, die nicht angewendet werden, durchgestrichen an, mit einem Warnsymbol. Wenn Sie das Warnsymbol überfahren, wird eine beschreibende Fehlermeldung angezeigt:

![Die Entwicklertools streichen ungültiges CSS durch und fügen ein übersichtliches Warnsymbol hinzu](css-message-devtools.png)

Andere Browser-Entwicklertools haben ähnliche Funktionen.

## Häufige browserübergreifende Probleme

Nun schauen wir uns einige der häufigsten browserübergreifenden HTML- und CSS-Probleme an. Die Hauptbereiche, die wir betrachten werden, sind mangelnde Unterstützung für moderne Features und Layout-Probleme.

### Browser unterstützen moderne Features nicht

Dies ist ein häufiges Problem, insbesondere wenn Sie ältere Browser unterstützen müssen oder Sie Features verwenden, die in einigen Browsern, aber noch nicht in allen implementiert sind. Im Allgemeinen funktioniert die meiste Kern-HTML- und CSS-Funktionalität (wie grundlegende HTML-Elemente, grundlegende CSS-Farben und Textstilierungen) über alle Browser hinweg, die Sie unterstützen möchten; mehr Probleme treten auf, wenn Sie neuere HTML-, CSS- und API-Features nutzen möchten. MDN zeigt die Browser-Kompatibilitätsdaten für jedes dokumentierte Feature an; sehen Sie sich zum Beispiel die [Browser-Support-Tabelle für die `:has()` Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/:has#browser_compatibility) an.

Sobald Sie eine Liste von Technologien identifiziert haben, die Sie verwenden werden und die nicht universell unterstützt werden, ist es eine gute Idee, zu recherchieren, in welchen Browsern sie unterstützt werden und welche verwandten Techniken nützlich sind. Siehe [Hilfe finden](#hilfe_finden) unten.

### HTML-Fallback-Verhalten

Einige Probleme können einfach durch die natürliche Funktionsweise von HTML/CSS gelöst werden.

Nicht erkannte HTML-Elemente werden vom Browser als anonymes Inline-Element behandelt (effektiv Inline-Elemente ohne semantischen Wert, ähnlich wie {{htmlelement("span")}}-Elemente). Sie können immer noch auf sie mit ihren Namen verweisen und sie mit CSS gestalten — Sie müssen nur sicherstellen, dass sie sich so verhalten, wie Sie es wünschen. Gestalten Sie sie so, wie Sie jedes andere Element gestalten würden, indem Sie beispielsweise die `display`-Eigenschaft auf etwas anderes als `inline` setzen, falls erforderlich.

Komplexere Elemente wie HTML [`<video>`](/de/docs/Web/HTML/Reference/Elements/video), [`<audio>`](/de/docs/Web/HTML/Reference/Elements/audio), [`<picture>`](/de/docs/Web/HTML/Reference/Elements/picture), [`<object>`](/de/docs/Web/HTML/Reference/Elements/object) und [`<canvas>`](/de/docs/Web/HTML/Reference/Elements/canvas) (und andere Features) haben natürliche Mechanismen, um Fallbacks hinzuzufügen, falls die verlinkten Ressourcen nicht unterstützt werden. Sie können Fallback-Inhalte zwischen den öffnenden und schließenden Tags hinzufügen, und nicht unterstützende Browser ignorieren effektiv das äußere Element und führen den verschachtelten Inhalt aus.

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

Dieses Beispiel enthält einen einfachen Link, der es Ihnen ermöglicht, das Video herunterzuladen, falls der HTML-Videoplayer nicht funktioniert, sodass der Nutzer zumindest weiterhin auf das Video zugreifen kann.

Ein weiteres Beispiel sind Formularelemente. Als neue [`<input>`](/de/docs/Web/HTML/Reference/Elements/input) Typen eingeführt wurden, um spezifische Informationen in Formulare einzugeben, wie Zeiten, Daten, Farben, Zahlen etc., wenn ein Browser das neue Feature nicht unterstützte, verwendete der Browser den Standard `type="text"`. Eingabearten wurden hinzugefügt, die besonders auf mobilen Plattformen sehr nützlich sind, wo es wichtig ist, einen schmerzfreien Weg zur Dateneingabe für eine gute Benutzererfahrung zu bieten. Plattformen bieten verschiedene UI-Widgets je nach Eingabetyp an, wie z. B. ein Kalender-Widget zur Eingabe von Daten. Sollte ein Browser einen Eingabetyp nicht unterstützen, kann der Benutzer die erforderlichen Daten trotzdem eingeben.

Das folgende Beispiel zeigt Datum- und Zeiteingaben:

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

Wenn Sie das Beispiel anzeigen, sehen Sie die UI-Features in Aktion, sobald Sie versuchen, Daten einzugeben. Auf Geräten mit dynamischen Tastaturen werden typen-spezifische Tastaturen angezeigt. In einem nicht unterstützenden Browser werden die Eingaben einfach zu normalen Texteingaben zurückkehren, was bedeutet, dass der Benutzer weiterhin die korrekten Informationen eingeben kann.

### CSS-Fallback-Verhalten

CSS ist in Bezug auf Fallbacks möglicherweise besser als HTML. Wenn ein Browser auf eine Deklaration oder Regel stößt, die er nicht versteht, überspringt er sie einfach komplett, ohne sie anzuwenden oder einen Fehler zu werfen. Dies mag frustrierend für Sie und Ihre Benutzer sein, wenn ein solcher Fehler in den Produktionscode gelangt, aber wenigstens bedeutet es, dass die gesamte Site nicht wegen eines Fehlers zusammenbricht, und, wenn geschickt genutzt, können Sie dies zu Ihrem Vorteil nutzen.

Betrachten wir ein Beispiel — eine einfache Box, die mit CSS gestylt wurde und einige Stile durch verschiedene CSS-Features bereitgestellt bekam:

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

Sie können die **Play**-Taste drücken, um das Beispiel im MDN Playground zu öffnen und den Quellcode zu spielen.

Der Button hat eine Reihe von Deklarationen, aber die, die uns am meisten interessieren, sind die folgenden:

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

Hier geben wir eine [RGB](/de/docs/Web/CSS/Reference/Values/color_value/rgb) {{cssxref("background-color")}} an, die die Deckkraft beim Schweben ändert, um dem Benutzer zu zeigen, dass der Button interaktiv ist, und einige halbtransparente, eingestanzte {{cssxref("box-shadow")}} um dem Button ein wenig Textur und Tiefe zu geben. Während RGB-Farben und Box-Schattierungen heute vollständig unterstützt werden, waren manche Browser früher nicht in der Lage, sie darzustellen; sie starteten in IE9. Browser, die keine RGB-Farben unterstützen, würden die Deklaration ignorieren, was bedeutet, dass in alten Browsern das Hintergrundbild überhaupt nicht angezeigt würde, wodurch der Text unlesbar würde, was gar nicht gut ist!

![Schwer zu sehender Pillen-Button mit weißem Text auf fast weißem Hintergrund](unreadable-button.png)

Um dies zu beheben, haben wir eine initiale `background-color` Deklaration hinzugefügt, die einfach das `red` Farb-Stichwort spezifiziert — dies wird sehr weit zurück bis in sehr alte Browser unterstützt und dient als Fallback, falls die modernen glänzenden Features nicht funktionieren. Was passiert, ist, dass ein Browser, der diese Seite besucht, zunächst den ersten `background-color` Wert anwendet; wenn er zur zweiten `background-color` Deklaration gelangt, wird er den anfänglichen Wert mit diesem Wert überschreiben, wenn er RGB-Farben unterstützt. Wenn nicht, ignoriert er einfach die gesamte Deklaration und fährt fort.

> [!NOTE]
> Das Gleiche gilt für andere CSS-Features wie [Media-Queries](/de/docs/Web/CSS/Guides/Media_queries/Using), {{cssxref("@font-face")}} und {{cssxref("@supports")}} Blöcke — wenn sie nicht unterstützt werden, ignoriert der Browser sie einfach.

### Selector-Support

Natürlich werden keine CSS-Features angewendet, wenn Sie nicht die richtigen [Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors) verwenden, um das gewünschte Element zu stylen!

In einer durch Kommas getrennten Liste von Selektoren, wenn Sie einfach einen Selektor falsch schreiben, könnte er kein Element auswählen. Wenn jedoch ein Selektor ungültig ist, wird die **gesamte** Liste von Selektoren ignoriert, zusammen mit dem gesamten Stilblock. Aus diesem Grund sollten Sie nur einen `:-moz-`-präfixierten Pseudoklass oder Pseudoelement in einer [nachsichtigen Selektorliste](/de/docs/Web/CSS/Reference/Selectors/Selector_list#forgiving_selector_list), wie z. B. `:where(::-moz-thumb)` verwenden. Fügen Sie keinen `:-moz-`-präfixierten Pseudoklass oder Pseudoelement in eine durch Kommas getrennte Gruppe von Selektoren ein, die sich außerhalb einer {{cssxref(":is()")}}- oder {{cssxref(":where()")}}-nachsichtigen Selektorliste befindet, da alle Browser außer Firefox den gesamten Block ignorieren werden. Beachten Sie, dass sowohl `:is()` als auch `:where()` als Parameter in anderen Selektorlisten, einschließlich {{cssxref(":has()")}} und {{cssxref(":not()")}}, übergeben werden können.

Wir finden, dass es hilfreich ist, das Element, das Sie stylen möchten, mit den Entwicklertools Ihres Browsers zu inspizieren und dann den DOM-Baum-Krümelpfad anzusehen, den DOM-Inspektoren in der Regel bereitstellen, um zu sehen, ob Ihr Selektor im Vergleich dazu Sinn ergibt.

Zum Beispiel erhalten Sie in den Firefox Entwicklertools diese Art von Ausgabe unten im DOM-Inspektor:

![Der Krümelpfad der Elemente ist html > body > form > div.form > input#date](dom-breadcrumb-trail.png)

Wenn Sie beispielsweise versuchen würden, diesen Selektor zu verwenden, würden Sie sehen, dass er das Eingabeelement nicht wie gewünscht auswählen würde:

```css
form > #date {
  /* … */
}
```

(Das `date`-Formular-Eingabeelement ist kein direktes Kind des `<form>`; Sie würden besser einen allgemeinen Nachkommen-Selektor anstelle eines Kind-Selektors verwenden).

### Umgang mit CSS-Präfixen

Eine andere Reihe von Problemen kommt mit CSS-Präfixen — dies ist ein Mechanismus, der ursprünglich verwendet wurde, um Browserherstellern zu ermöglichen, ihre eigene Version eines CSS- (oder JavaScript-)Features zu implementieren, während die Technologie sich in einem experimentellen Zustand befindet, sodass sie damit spielen und es richtig machen können, ohne mit Implementierungen anderer Browser zu kollidieren, oder mit den endgültigen unpräfixierten Implementierungen.

Zum Beispiel verwendet Firefox `-moz-` und Chrome/Edge/Opera/Safari verwenden `-webkit-`. Andere Präfixe, denen Sie in altem Code begegnen können und die sicher entfernt werden können, sind `-ms-`, das von Internet Explorer und frühen Versionen von Edge verwendet wurde, und `-o`, das in den ursprünglichen Versionen von Opera verwendet wurde.

Präfixierte Features sollten niemals in Produktionswebsites verwendet werden — sie unterliegen Änderungen oder Entfernung ohne Vorwarnung, können Leistungsprobleme in alten Browserversionen verursachen, die diese benötigen, und waren die Ursache für browserübergreifende Probleme. Dies ist insbesondere ein Problem, wenn Entwickler beschließen, nur die `-webkit-` Version einer Eigenschaft zu verwenden, was implizierte, dass die Site in anderen Browsern nicht funktioniert. Dies geschah tatsächlich so oft, dass andere Browserhersteller `-webkit-`-präfixierte Versionen mehrerer CSS-Eigenschaften implementierten. Während Browser immer noch einige präfixierte Eigenschaftsnamen, Eigenschaftswerte und Pseudoklassen unterstützen, werden experimentelle Features jetzt hinter Flags platziert, damit Webentwickler sie während der Entwicklung testen können.

Wenn Sie ein Präfix verwenden, stellen Sie sicher, dass es benötigt wird; dass die Eigenschaft eine der wenigen verbleibenden präfixierten Features ist. Sie können nachsehen, welche Browser Präfixe auf MDN-Referenzseiten erfordern, und auf Websites wie [caniuse.com](https://caniuse.com/). Wenn Sie unsicher sind, können Sie es auch herausfinden, indem Sie einige Tests direkt in Browsern durchführen. Fügen Sie die standardmäßige unpräfixierte Version nach der präfixierten Stil-Deklaration hinzu; sie wird ignoriert, wenn sie nicht unterstützt wird und verwendet, wenn sie unterstützt wird.

```css
.masked {
  -webkit-mask-image: url("MDN.svg");
  mask-image: url("MDN.svg");
  -webkit-mask-size: 50%;
  mask-size: 50%;
}
```

Versuchen Sie dieses einfache Beispiel:

1. Verwenden Sie diese Seite oder eine andere Site, die eine prominente Überschrift oder ein anderes Block-Element hat.
2. Klicken Sie mit der rechten oder Befehlstaste auf das betreffende Element und wählen Sie Inspektieren/Element inspizieren (oder was auch immer die Option in Ihrem Browser ist) — dies sollte die Entwicklertools in Ihrem Browser öffnen, wobei das Element im DOM-Inspektor hervorgehoben ist.
3. Suchen Sie nach einem Feature, mit dem Sie das Element auswählen können. Zum Beispiel hat diese Seite auf MDN zum Zeitpunkt des Schreibens ein Logo mit einer ID von `mdn-docs-logo`.
4. Speichern Sie einen Verweis auf dieses Element in einer Variablen, zum Beispiel:

   ```js
   const test = document.getElementById("mdn-docs-logo");
   ```

5. Versuchen Sie nun, einen neuen Wert für die CSS-Eigenschaft, an der Sie interessiert sind, auf diesem Element festzulegen; Sie können dies mit der [style](/de/docs/Web/API/HTMLElement/style) Eigenschaft des Elements tun, zum Beispiel versuchen Sie, diese in die JavaScript-Konsole einzugeben:

   ```js
   test.style.transform = "rotate(90deg)";
   ```

Sobald Sie beginnen, den Eigenschaftsnamen Repräsentation nach dem zweiten Punkt einzugeben (beachten Sie, dass in JavaScript CSS-Eigenschaftsnamen in {{Glossary("camel_case", "Low-Camel-Case")}} und nicht in {{Glossary("kebab_case", "Kebab-Case")}} geschrieben werden), sollte die JavaScript-Konsole beginnen, die Namen der Eigenschaften, die im Browser existieren und mit dem, was Sie bisher geschrieben haben, übereinstimmen, automatisch zu vervollständigen. Dies ist nützlich, um herauszufinden, welche Eigenschaften in diesem Browser implementiert sind.

Wenn Sie moderne Features einfügen müssen, testen Sie die Feature-Unterstützung mit {{cssxref("@supports")}}, die es Ihnen ermöglicht, native Funktionsdetektionstests durchzuführen, und das präfixierte oder neue Feature innerhalb des `@supports` Blocks zu verschachteln.

### Probleme mit responsivem Design

Responsives Design ist die Praxis, Weblayouts zu erstellen, die an verschiedene Geräteformfaktoren angepasst werden — wie zum Beispiel unterschiedliche Bildschirmbreiten, Ausrichtungen (Hoch- oder Querformat) oder Auflösungen. Ein Desktop-Layout sieht beispielsweise auf einem mobilen Gerät schrecklich aus, sodass Sie ein geeignetes mobiles Layout mit [Media-Queries](/de/docs/Web/CSS/Guides/Media_queries) bereitstellen und sicherstellen müssen, dass es korrekt mit dem [Viewport](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport) angewendet wird. Eine ausführliche Darstellung solcher Praktiken finden Sie in [unserem Tutorial zum responsiven Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design).

Auflösung ist ebenfalls ein großes Thema — zum Beispiel werden Mobilgeräte weniger wahrscheinlich große, schwere Bilder benötigen als Desktop-Computer und wahrscheinlich langsamere Internetverbindungen haben und möglicherweise sogar teure Datenpläne, wodurch verschwendete Bandbreite mehr zu einem Problem wird. Darüber hinaus können verschiedene Geräte eine Reihe verschiedener Auflösungen haben, was bedeutet, dass kleinere Bilder verpixelt erscheinen könnten. Es gibt eine Reihe von Techniken, die es Ihnen ermöglichen, solche Probleme zu umgehen, von [Media-Queries](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design#media_queries) bis zu komplexeren [Techniken für responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images#resolution_switching_different_sizes), einschließlich {{HTMLElement('picture')}} und dem {{HTMLElement('img')}} Element's [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset) und [`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes) Attribute.

## Hilfe finden

Es gibt viele andere Probleme, denen Sie mit HTML und CSS begegnen werden, weshalb das Wissen, wie man online Antworten findet, von unschätzbarem Wert ist.

Zu den besten Informationsquellen gehören das Mozilla Developer Network (hier sind Sie jetzt!), [stackoverflow.com](https://stackoverflow.com/) und [caniuse.com](https://caniuse.com/).

Um das Mozilla Developer Network (MDN) zu nutzen, machen die meisten Leute eine Suchmaschinen-Suche der Technologie, zu der sie Informationen suchen, plus den Begriff "mdn", zum Beispiel "mdn HTML video". MDN enthält mehrere nützliche Inhaltstypen:

- Referenzmaterial mit Browser-Unterstützungsinformationen für clientseitige Webtechnologien, z. B. die [\<video> Referenzseite](/de/docs/Web/HTML/Reference/Elements/video).
- Weiteres unterstützendes Referenzmaterial, zum Beispiel unser [Leitfaden zu Medienarten und -formaten im Web](/de/docs/Web/Media/Guides/Formats),
- Nützliche Tutorials, die spezifische Probleme lösen, zum Beispiel, [Erstellung eines browserübergreifenden Videoplayers](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player).

[caniuse.com](https://caniuse.com/) bietet Unterstützungshinweise zusammen mit ein paar nützlichen Links zu externen Ressourcen. Zum Beispiel siehe <https://caniuse.com/#search=video> (Sie müssen nur das gesuchte Feature in das Textfeld eingeben).

[stackoverflow.com](https://stackoverflow.com/) (SO) ist eine Forum-Seite, auf der Sie Fragen stellen und Lösungen von anderen Entwicklern teilen lassen können, nach früheren Beiträgen suchen und anderen Entwicklern helfen können. Sie sollten sich ansehen, ob es bereits eine Antwort auf Ihre Frage gibt, bevor Sie eine neue Frage stellen. Zum Beispiel haben wir noch nichts aktualisiert "Deaktivieren von Auto-Fokus auf HTML Dialog" auf SO gesucht und schnell gefunden [Deaktivieren des ShowModal-Autofokus mit HTML-Attributen](https://stackoverflow.com/questions/63267581/disable-showmodal-auto-focusing-using-html-attributes).

Abgesehen davon, versuchen Sie, in Ihrer bevorzugten Suchmaschine nach einer Antwort auf Ihr Problem zu suchen. Es ist oft nützlich, nach spezifischen Fehlermeldungen zu suchen, wenn Sie sie haben — andere Entwickler werden wahrscheinlich die gleichen Probleme wie Sie gehabt haben.

## Zusammenfassung

Jetzt sollten Sie mit den Haupttypen von browserübergreifenden HTML- und CSS-Problemen, die Ihnen in der Webentwicklung begegnen werden, und deren Behebung vertraut sein.

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Testing_strategies","Learn_web_development/Extensions/Testing/Feature_detection", "Learn_web_development/Extensions/Testing")}}
