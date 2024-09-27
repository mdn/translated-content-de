---
title: Umgang mit häufigen HTML- und CSS-Problemen
slug: Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS
l10n:
  sourceCommit: 88467d31d2ad7bdfade8b38ec69f6702fee080d1
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/Testing_strategies","Learn/Tools_and_testing/Cross_browser_testing/JavaScript", "Learn/Tools_and_testing/Cross_browser_testing")}}

Nachdem wir die Szene gesetzt haben, werden wir nun speziell auf die häufigen plattformübergreifenden Probleme eingehen, denen Sie in HTML- und CSS-Code begegnen, und welche Werkzeuge eingesetzt werden können, um Probleme zu verhindern oder zu beheben. Dazu gehört das Linting von Code, das Verwalten von CSS-Präfixen, die Verwendung von Entwicklertools in Browsern zur Fehlersuche, die Nutzung von Polyfills, um Unterstützung in Browsern hinzuzufügen, die Bewältigung von Problemen mit responsivem Design und mehr.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den grundlegenden Sprachen
        <a href="/de/docs/Learn/HTML">HTML</a>,
        <a href="/de/docs/Learn/CSS">CSS</a> und
        <a href="/de/docs/Learn/JavaScript">JavaScript</a>; ein Verständnis der grundlegenden
        <a
          href="/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction"
          >Prinzipien des plattformübergreifenden Testens</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die Fähigkeit, häufige plattformübergreifende HTML- und CSS-Probleme zu diagnostizieren und geeignete Werkzeuge und Techniken zu verwenden, um sie zu beheben.
      </td>
    </tr>
  </tbody>
</table>

## Die Probleme mit HTML und CSS

Einige der Probleme mit HTML und CSS entstehen dadurch, dass beide Sprachen relativ einfach sind und Entwickler oft nicht darauf achten, dass der Code gut gestaltet, effizient und semantisch richtig ist, um den Zweck der Funktionen auf der Seite zu beschreiben. Im schlimmsten Fall wird JavaScript verwendet, um den gesamten Inhalt und Stil der Webseite zu generieren, was dazu führt, dass Ihre Seiten nicht zugänglich und weniger performant sind (das Erzeugen von DOM-Elementen ist aufwändig). In anderen Fällen werden neue Funktionen nicht konsistent über verschiedene Browser hinweg unterstützt, was dazu führen kann, dass einige Funktionen und Stile für einige Benutzer nicht funktionieren. Auch Probleme mit responsivem Design sind häufig – eine Seite, die in einem Desktop-Browser gut aussieht, bietet auf einem mobilen Gerät möglicherweise ein schlechtes Erlebnis, weil der Inhalt zu klein ist, um gelesen zu werden, oder die Seite möglicherweise langsam ist wegen aufwändiger Animationen.

Lassen Sie uns herausfinden, wie wir plattformübergreifende Fehler reduzieren können, die durch HTML/CSS verursacht werden.

## Zuerst das Wichtigste: Allgemeine Probleme beheben

Wir haben im [ersten Artikel dieser Serie](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction#testingdiscovery) gesagt, dass es eine gute Strategie ist, mit Tests in ein paar modernen Browsern auf Desktop/Mobilgeräte zu beginnen, um sicherzustellen, dass Ihr Code generell funktioniert, bevor Sie sich auf die plattformübergreifenden Probleme konzentrieren.

In unseren Artikeln [Debugging von HTML](/de/docs/Learn/HTML/Introduction_to_HTML/Debugging_HTML) und [Debugging von CSS](/de/docs/Learn/CSS/Building_blocks/Debugging_CSS) haben wir einige wirklich grundlegende Anleitungen zur Fehlerbehebung von HTML/CSS bereitgestellt – wenn Sie mit den Grundlagen nicht vertraut sind, sollten Sie diese Artikel unbedingt studieren, bevor Sie weitermachen.

Grundsätzlich geht es darum, zu überprüfen, ob Ihr HTML- und CSS-Code gut geformt ist und keine Syntaxfehler enthält.

> [!NOTE]
> Ein häufiges Problem mit CSS und HTML tritt auf, wenn verschiedene CSS-Regeln miteinander in Konflikt geraten. Dies kann besonders problematisch sein, wenn Sie Code von Drittanbietern verwenden. Beispielsweise könnten Sie ein CSS-Framework verwenden und feststellen, dass einer der Klassennamen, die es verwendet, mit einem kollidiert, den Sie bereits für einen anderen Zweck verwendet haben. Oder Sie könnten feststellen, dass HTML, das von einer Art Drittanbieter-API generiert wird (zum Beispiel Werbebanner), einen Klassennamen oder eine ID enthält, die Sie bereits für eine anderen Zweck verwenden. Um sicherzustellen, dass dies nicht passiert, sollten Sie zuerst die Werkzeuge, die Sie verwenden, recherchieren und Ihr Code-Design um diese herumgestalten. Es ist auch sinnvoll, CSS zu "namespacing", z. B. wenn Sie ein Widget haben, stellen Sie sicher, dass es eine eindeutige Klasse hat, und beginnen Sie dann mit den Selektoren, die Elemente innerhalb des Widgets auswählen, mit dieser Klasse, sodass Konflikte weniger wahrscheinlich sind. Zum Beispiel `.audio-player ul a`.

### Validierung

Bei HTML umfasst die Validierung, sicherzustellen, dass alle Ihre Tags ordnungsgemäß geschlossen und verschachtelt sind, dass Sie einen Doctype verwenden und dass Sie Tags für ihren korrekten Zweck verwenden. Eine gute Strategie besteht darin, Ihren Code regelmäßig zu validieren. Ein Dienst, der dies tun kann, ist der W3C [Markup Validation Service](https://validator.w3.org/), der es Ihnen ermöglicht, auf Ihren Code zu verweisen und eine Liste von Fehlern zurückgibt:

![Die HTML-Validator-Homepage](validator.png)

CSS hat eine ähnliche Geschichte – Sie müssen überprüfen, ob Ihre Eigenschaftsnamen richtig geschrieben sind, ob die Eigenschaftswerte richtig geschrieben sind und für die Eigenschaften, auf die sie angewendet werden, gültig sind, ob keine geschweiften Klammern fehlen usw. Das W3C hat einen [CSS Validator](https://jigsaw.w3.org/css-validator/) dafür zur Verfügung.

### Linters

Eine weitere gute Option ist eine sogenannte Linter-Anwendung, die nicht nur Fehler anzeigt, sondern auch Warnungen über schlechte Praktiken in Ihrem CSS und andere Punkte erkennen kann. Linter können in der Regel angepasst werden, um strenger oder entspannter bei der Fehler-/Warnmeldung zu sein.

Es gibt viele Online-Linter-Anwendungen, wie [Dirty Markup](https://www.10bestdesign.com/dirtymarkup/) für HTML, CSS und JavaScript. Diese erlauben es Ihnen, Ihren Code in ein Fenster einzufügen, und markieren dann alle Fehler mit Kreuzen, die schwebend anzeigen, welche Fehlermeldung das Problem beschreibt. Dirty Markup erlaubt es Ihnen auch, mit der Schaltfläche _Clean_ Korrekturen an Ihrem Markup vorzunehmen.

![Dirty Markup Anwendung zeigt die Meldung "Unerwartetes Zeichen in einem unzitierten Attribut" über folgendem falschen HTML-Markup: <div id=combinators">](dirty-markup.png)

Es ist jedoch nicht sehr bequem, Ihren Code mehrmals auf eine Webseite kopieren und einfügen zu müssen, um seine Gültigkeit zu überprüfen. Was Sie wirklich brauchen, ist ein Linter, der mit minimalem Aufwand in Ihren Standard-Workflow passt.

Viele Code-Editoren haben Linter-Plugins. Beispielsweise siehe:

- [SublimeLinter](https://www.sublimelinter.com/) für Sublime Text
- [Notepad++ linter](https://sourceforge.net/projects/notepad-linter/)
- [VSCode linters](https://marketplace.visualstudio.com/search?target=vscode&category=Linters&sortBy=Installs)

### Entwicklertools im Browser

Die Entwicklertools, die in den meisten Browsern integriert sind, enthalten auch nützliche Werkzeuge zum Aufspüren von Fehlern, hauptsächlich für CSS.

> [!NOTE]
> HTML-Fehler tauchen in Entwicklertools nicht so leicht auf, da der Browser versucht, schlecht geformtes Markup automatisch zu korrigieren; der W3C-Validator ist die beste Möglichkeit, HTML-Fehler zu finden – siehe [Validierung](#validierung) oben.

Ein Beispiel: Im Firefox zeigt der CSS-Inspektor nicht angewendete CSS-Deklarationen durchgestrichen mit einem Warnzeichen. Wenn Sie mit dem Mauszeiger über das Warnzeichen fahren, erhalten Sie eine beschreibende Fehlermeldung:

![Die Entwicklertools streichen ungültiges CSS durch und fügen ein schwebendes Warnsymbol hinzu](css-message-devtools.png)

Andere Browser-Entwicklungstools haben ähnliche Funktionen.

## Häufige plattformübergreifende Probleme

Nun wollen wir einen Blick auf einige der häufigsten plattformübergreifenden HTML- und CSS-Probleme werfen. Die Hauptbereiche, auf die wir eingehen werden, sind mangelnde Unterstützung für moderne Funktionen und Layout-Probleme.

### Browser unterstützen moderne Funktionen nicht

Dies ist ein häufiges Problem, insbesondere wenn Sie alte Browser unterstützen müssen oder Funktionen verwenden, die in einigen Browsern implementiert, aber noch nicht in allen vorhanden sind. Im Allgemeinen funktionieren die meisten Kernfunktionen von HTML und CSS (wie grundlegende HTML-Elemente, grundlegende CSS-Farben und Textstile) in allen Browsern, die Sie unterstützen möchten; mehr Probleme entstehen, wenn Sie beginnen, neuere HTML-, CSS- und API-Funktionen zu verwenden. MDN zeigt Informationen zur Browser-Kompatibilität für jede dokumentierte Funktion an; sehen Sie sich beispielsweise die [Browser-Unterstützungstabelle für die `:has()` Pseudo-Klasse](/de/docs/Web/CSS/:has#browser_compatibility) an.

Sobald Sie eine Liste von Technologien identifiziert haben, die Sie verwenden werden und die nicht universell unterstützt werden, ist es ratsam zu recherchieren, in welchen Browsern sie unterstützt werden und welche verwandten Techniken nützlich sind. Siehe [Hilfe finden](#hilfe_finden) unten.

### HTML-Fallback-Verhalten

Einige Probleme können gelöst werden, indem man einfach die natürliche Art und Weise, wie HTML/CSS funktionieren, ausnutzt.

Nicht erkannte HTML-Elemente werden von Browsern als anonyme Inline-Elemente behandelt (tatsächlich Inline-Elemente ohne semantischen Wert, ähnlich wie {{htmlelement("span")}}-Elemente). Sie können sich weiterhin auf sie mit ihren Namen beziehen und sie beispielsweise mit CSS stylen – Sie müssen nur sicherstellen, dass sie sich so verhalten, wie Sie es wünschen. Stylen Sie sie wie jedes andere Element, einschließlich des Setzens der `display`-Eigenschaft auf etwas anderes als `inline`, falls erforderlich.

Komplexere Elemente wie HTML [`<video>`](/de/docs/Web/HTML/Element/video), [`<audio>`](/de/docs/Web/HTML/Element/audio), [`<picture>`](/de/docs/Web/HTML/Element/picture), [`<object>`](/de/docs/Web/HTML/Element/object) und [`<canvas>`](/de/docs/Web/HTML/Element/canvas) (und andere Funktionen) haben natürliche Mechanismen, um Fallbacks einzufügen, falls die verlinkten Ressourcen nicht unterstützt werden. Sie können Fallback-Inhalte zwischen den öffnenden und schließenden Tags hinzufügen, und nicht unterstützende Browser ignorieren das äußere Element und führen den eingebetteten Inhalt aus.

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

Dieses Beispiel umfasst einen einfachen Link, der es Ihnen ermöglicht, das Video herunterzuladen, falls selbst der HTML-Videoplayer nicht funktioniert, damit der Benutzer das Video zumindest weiterhin abrufen kann.

Ein weiteres Beispiel sind Formularelemente. Als neue [`<input>`](/de/docs/Web/HTML/Element/input)-Typen eingeführt wurden, um spezifische Informationen in Formularen einzugeben, wie Zeiten, Daten, Farben, Zahlen usw., verwendet der Browser, wenn er das neue Feature nicht unterstützte, den Standard `type="text"`. Eingabetypen wurden hinzugefügt, die besonders nützlich sind, insbesondere auf mobilen Plattformen, auf denen eine schmerzfreie Dateneingabeerfahrung für die Benutzererfahrung sehr wichtig ist. Plattformen bieten unterschiedliche UI-Widgets je nach Eingabetyp, wie ein Kalender-Widget zur Eingabe von Daten. Sollte ein Browser einen Eingabetyp nicht unterstützen, kann der Benutzer die erforderlichen Daten weiterhin eingeben.

Das folgende Beispiel zeigt ein Datum und Uhrzeit-Eingaben:

```html
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

Die Ausgabe dieses Codes ist wie folgt:

{{EmbedGHLiveSample("learning-area/tools-testing/cross-browser-testing/html-css/forms-test", '100%', 150)}}

> [!NOTE]
> Sie können dies auch live als [forms-test.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/html-css/forms-test.html) auf GitHub sehen (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/html-css/forms-test.html)).

Wenn Sie das Beispiel betrachten, sehen Sie die UI-Funktionen in Aktion, wenn Sie versuchen, Daten einzugeben. Auf Geräten mit dynamischen Tastaturen werden typenspezifische Tastenfelder angezeigt. In einem nicht unterstützenden Browser werden die Eingaben einfach auf normale Texteingaben zurückgesetzt, was bedeutet, dass der Benutzer die richtigen Informationen immer noch eingeben kann.

### CSS-Fallback-Verhalten

CSS ist arguably besser bei Fallbacks als HTML. Wenn ein Browser auf eine Deklaration oder Regel trifft, die er nicht versteht, überspringt er sie einfach, ohne sie anzuwenden oder einen Fehler auszugeben. Dies könnte für Sie und Ihre Benutzer frustrierend sein, wenn ein solcher Fehler in den Produktivcode rutscht, aber zumindest bedeutet dies, dass die gesamte Seite nicht wegen eines Fehlers zusammenbricht, und wenn es clever eingesetzt wird, können Sie es zu Ihrem Vorteil nutzen.

Schauen wir uns ein Beispiel an – ein einfaches mit CSS gestaltetes Kästchen, das von verschiedenen CSS-Funktionen gestylte Elemente hat:

![Ein roter Pillenbutton mit abgerundeten Ecken, Lichteinfall-Schatten und Dropschatten](blingy-button.png)

> [!NOTE]
> Sie können dieses Beispiel auch live auf GitHub als [button-with-fallback.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/html-css/button-with-fallback.html) sehen (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/html-css/button-with-fallback.html)).

Der Button hat eine Reihe von Deklarationen, die Stile bereitstellen, aber die beiden, die uns am meisten interessieren, sind die folgenden:

```css
button {
  /* … */

  background-color: #ff0000;
  background-color: rgb(255 0 0 / 100%);
  box-shadow:
    inset 1px 1px 3px rgb(255 255 255 / 40%),
    inset -1px -1px 3px rgb(0 0 0 / 40%);
}

button:hover {
  background-color: rgb(255 0 0 / 50%);
}

button:active {
  box-shadow:
    inset 1px 1px 3px rgb(0 0 0 / 40%),
    inset -1px -1px 3px rgb(255 255 255 / 40%);
}
```

Hier bieten wir eine [RGB](/de/docs/Web/CSS/color_value/rgb)-{{cssxref("background-color")}} an, die beim Hovern die Opazität ändert, um dem Benutzer einen Hinweis darauf zu geben, dass der Button interaktiv ist, und einige halbtransparente Einlass-{{cssxref("box-shadow")}}-Schatten, um dem Button etwas Textur und Tiefe zu verleihen. Während RGB-Farben und Boxschatten mittlerweile vollständig unterstützt werden, wurden sie nicht von Anfang an verwendet; sie wurden ab IE9 unterstützt. Browser, die RGB-Farben nicht unterstützten, ignorierten die Deklaration, was bedeutete, dass in alten Browsern der Hintergrund überhaupt nicht gezeigt wurde, sodass der Text unleserlich war, absolut nicht gut!

![Schwer zu sehender Pillenbutton mit weißem Text auf einem fast weißen Hintergrund](unreadable-button.png)

Um das zu beheben, haben wir eine zweite `background-color`-Deklaration hinzugefügt, die einfach eine Hexfarbe angibt – diese wird in wirklich alten Browsern unterstützt und fungiert als Fallback, wenn die modernen glänzenden Features nicht funktionieren. Was passiert, ist, dass ein Browser, der diese Seite besucht, zuerst den ersten `background-color`-Wert anwendet; wenn er zur zweiten `background-color`-Deklaration gelangt, wird er den ursprünglichen Wert mit diesem überschreiben, wenn er RGB-Farben unterstützt. Andernfalls ignoriert er einfach die gesamte Deklaration und fährt fort.

> [!NOTE]
> Das Gleiche gilt für andere CSS-Funktionen wie [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries), [`@font-face`](/de/docs/Web/CSS/@font-face) und [`@supports`](/de/docs/Web/CSS/@supports)-Blöcke – wenn sie nicht unterstützt werden, ignoriert der Browser sie einfach.

### Selektoren-Unterstützung

Natürlich werden keine CSS-Funktionen angewendet, wenn Sie die richtigen [Selektoren](/de/docs/Learn/CSS/Building_blocks/Selectors) nicht verwenden, um das Element zu selektieren, das Sie stylen möchten!

In einer durch Kommas getrennten Liste von Selektoren kann es, wenn Sie nur einen Selektor falsch schreiben, vorkommen, dass er mit keinem Element übereinstimmt. Wenn jedoch ein Selektor ungültig ist, wird die **gesamte** Liste von Selektoren ignoriert, zusammen mit dem gesamten Style-Block. Aus diesem Grund sollten Sie nur eine `:-moz-`-präfixierte Pseudo-Klasse oder Pseudo-Element in einer [verzeihenden Selektorenliste](/de/docs/Web/CSS/Selector_list#forgiving_selector_list) einfügen, wie `:where(::-moz-thumb)`. Fügen Sie keine `:-moz-`-präfixierte Pseudo-Klasse oder Pseudo-Element in eine durch Kommas getrennte Gruppe von Selektoren außerhalb einer [`:is()`](/de/docs/Web/CSS/:is) oder [`:where()`](/de/docs/Web/CSS/:where)-verzeihenden Selektorenliste ein, da alle Browser außer Firefox den gesamten Block ignorieren. Beachten Sie, dass sowohl `:is()` als auch `:where()` als Parameter in anderen Selektorenlisten verwendet werden können, einschließlich [`:has()`](/de/docs/Web/CSS/:has) und [`:not()`](/de/docs/Web/CSS/:not).

Wir finden, dass es hilfreich ist, das Element, das Sie versuchen zu stylen, mit den Entwicklertools Ihres Browsers zu inspizieren und sich dann den DOM-Baum-Breadcrumb anzusehen, den DOM-Inspektoren meistens bereitstellen, um zu sehen, ob Ihr Selektor im Vergleich dazu Sinn macht.

Zum Beispiel erhalten Sie in den Entwicklertools von Firefox diese Art von Ausgabe am unteren Rand des DOM-Inspektors:

![Der Breadcrumb der Elemente ist html > body > form > div.form > input#date](dom-breadcrumb-trail.png)

Wenn Sie beispielsweise diesen Selektor verwenden wollten, könnten Sie sehen, dass er das Eingabeelement nicht wie gewünscht auswählt:

```css
form > #date
```

(Das `date`-Formular-Eingabeelement ist kein direktes Kind des `<form>`; Sie wären besser beraten, einen allgemeinen Nachfahrenselektor anstelle eines Kindselektors zu verwenden).

### Umgang mit CSS-Präfixen

Ein weiteres Problem sind CSS-Präfixe – diese sind ein Mechanismus, der ursprünglich verwendet wurde, um Browserherstellern zu ermöglichen, ihre eigene Version einer CSS- (oder JavaScript-)Funktion zu implementieren, während die Technologie noch im experimentellen Stadium ist, sodass sie damit spielen und sie richtig gestalten können, ohne mit den Implementierungen anderer Browser oder den endgültigen unpräfixierten Implementierungen zu kollidieren.

Zum Beispiel verwendet Firefox `-moz-` und Chrome/Edge/Opera/Safari verwenden `-webkit-`. Andere Präfixe, denen Sie in altem Code begegnen können und die Sie sicher entfernen können, sind `-ms-`, das von Internet Explorer und frühen Versionen von Edge verwendet wurde, und `-o`, das in den ursprünglichen Versionen von Opera verwendet wurde.

Präfixierte Features sollten niemals in produktiven Webseiten verwendet werden – sie können sich ohne Vorwarnung ändern oder entfernt werden, können bei alten Browserversionen, die sie erfordern, Leistungsprobleme verursachen und waren die Ursache plattformübergreifender Probleme. Dies war besonders ein Problem, wenn Entwickler sich entschieden, nur die `-webkit-`-Version einer Eigenschaft zu verwenden, was bedeutete, dass die Seite in anderen Browsern nicht funktionieren würde. Das passierte tatsächlich so oft, dass andere Browserhersteller `-webkit-`-präfixierte Versionen mehrerer CSS-Eigenschaften implementierten. Während Browser immer noch einige präfixierte Eigenschaftsnamen, Eigenschaftswerte und Pseudo-Klassen unterstützen, werden jetzt experimentelle Funktionen hinter Flags gesetzt, damit Webentwickler sie während der Entwicklung testen können.

Wenn Sie ein Präfix verwenden, stellen Sie sicher, dass es benötigt wird; dass die Eigenschaft eine der wenigen verbleibenden präfixierten Funktionen ist. Sie können recherchieren, welche Browser Präfixe auf MDN-Referenzseiten und Seiten wie [caniuse.com](https://caniuse.com/) benötigen. Wenn Sie sich nicht sicher sind, können Sie es auch durch direktes Testen in Browsern herausfinden. Fügen Sie die standardmäßig nicht-präfixierte Version nach der Deklaration des präfixierten Stils ein; sie wird ignoriert, wenn sie nicht unterstützt wird, und verwendet, wenn sie unterstützt wird.

```css
.masked {
  -webkit-mask-image: url(MDN.svg);
  mask-image: url(MDN.svg);
  -webkit-mask-size: 50%;
  mask-size: 50%;
}
```

Probieren Sie dieses einfache Beispiel aus:

1. Verwenden Sie diese Seite oder eine andere Seite, die eine auffällige Überschrift oder ein anderes Block-Level-Element hat.
2. Rechts- oder Cmd + Klicken Sie auf das betreffende Element und wählen Sie "Inspect/Inspektieren" (oder wie auch immer die Option in Ihrem Browser lautet) – dies sollte die Entwicklertools in Ihrem Browser öffnen, wobei das Element im DOM-Inspektor hervorgehoben ist.
3. Suchen Sie nach einer Funktion, die Sie verwenden können, um dieses Element auszuwählen. Zum Zeitpunkt des Schreibens hat diese Seite auf MDN beispielsweise ein Logo mit einer ID von `mdn-docs-logo`.
4. Speichern Sie eine Referenz auf dieses Element in einer Variablen:

   ```js
   const test = document.getElementById("mdn-docs-logo");
   ```

5. Versuchen Sie nun, einen neuen Wert für die CSS-Eigenschaft bereitzustellen, an der Sie interessiert sind; dies können Sie über die [style](/de/docs/Web/API/HTMLElement/style)-Eigenschaft des Elements tun, versuchen Sie zum Beispiel folgendes in die JavaScript-Konsole einzugeben:

   ```js
   test.style.transform = "rotate(90deg)";
   ```

Während Sie beginnen, nach dem zweiten Punkt den Eigenschaftsnamen einzutippen (beachten Sie, dass in JavaScript CSS-Eigenschaftsnamen in [lower camel case](/de/docs/Glossary/camel_case), nicht im [kebab-case](/de/docs/Glossary/kebab_case) geschrieben werden), sollte die JavaScript-Konsole beginnen, die Namen der Eigenschaften, die im Browser existieren und mit dem übereinstimmen, was Sie bisher geschrieben haben, automatisch zu vervollständigen. Dies ist nützlich, um herauszufinden, welche Eigenschaften in diesem Browser implementiert sind.

Wenn Sie moderne Funktionen einführen müssen, testen Sie die Unterstützung der Funktion mit [`@supports`](/de/docs/Web/CSS/@supports), das es Ihnen ermöglicht, native Funktionsdetektionstests durchzuführen, und das Präfix oder die neue Funktion innerhalb des `@supports`-Blocks zu verschachteln.

### Probleme mit responsivem Design

Responsives Design ist die Praxis, Weblayouts zu erstellen, die sich an verschiedene Geräteformfaktoren anpassen – beispielsweise unterschiedliche Bildschirmbreiten, Ausrichtungen (Hoch- oder Querformat) oder Auflösungen. Ein Desktop-Layout sieht zum Beispiel auf einem mobilen Gerät schrecklich aus, daher müssen Sie ein geeignetes mobiles Layout mit [Media Queries](/de/docs/Web/CSS/CSS_media_queries) bereitstellen und sicherstellen, dass es mit [Viewport](/de/docs/Web/HTML/Viewport_meta_tag) korrekt angewendet wird. Einen detaillierten Bericht über solche Praktiken finden Sie in [unserem Leitfaden zu responsivem Design](/de/docs/Learn/CSS/CSS_layout/Responsive_Design).

Auflösung ist auch ein großes Thema – zum Beispiel benötigen mobile Geräte weniger häufig große schwere Bilder als Desktops, und es ist wahrscheinlicher, dass sie langsamere Internetverbindungen haben und möglicherweise sogar teure Datentarife, die verschwendete Bandbreite zu einem größeren Problem machen. Hinzu kommt, dass Geräte eine Vielzahl verschiedener Auflösungen haben können, was bedeutet, dass kleinere Bilder pixelig aussehen könnten. Es gibt eine Reihe von Techniken, die es Ihnen ermöglichen, solche Probleme zu umgehen, von [Media Queries](/de/docs/Learn/CSS/CSS_layout/Responsive_Design#media_queries) bis zu komplexeren [Techniken für responsive Bilder](/de/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images#resolution_switching_different_sizes), einschließlich {{HTMLElement('picture')}} und der [`srcset`](/de/docs/Web/HTML/Element/img#srcset)- und [`sizes`](/de/docs/Web/HTML/Element/img#sizes)-Attribute des {{HTMLElement('img')}}-Elements.

## Hilfe finden

Es gibt viele andere Probleme, denen Sie mit HTML und CSS begegnen werden, was die Kenntnis darüber, wie man online Antworten findet, unschätzbar macht.

Unter den besten Quellen für Unterstützungsinformationen sind das Mozilla Developer Network (das ist, wo Sie sich jetzt befinden!), [stackoverflow.com](https://stackoverflow.com/) und [caniuse.com](https://caniuse.com/).

Um das Mozilla Developer Network (MDN) zu verwenden, führen die meisten Leute eine Suchmaschinenabfrage der Technologie, über die sie Informationen suchen, zusammen mit dem Begriff "mdn", z. B. "mdn HTML video". MDN enthält mehrere nützliche Arten von Inhalten:

- Referenzmaterial mit Browser-Unterstützungsinformationen für clientseitige Webtechnologien, z. B. die [\<video>-Referenzseite](/de/docs/Web/HTML/Element/video).
- Andere unterstützende Referenzmaterialien, z. B. der [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Formats),
- Nützliche Tutorials, die spezifische Probleme lösen, zum Beispiel [Erstellen eines plattformübergreifenden Videoplayers](/de/docs/Web/Media/Audio_and_video_delivery/cross_browser_video_player).

[caniuse.com](https://caniuse.com/) bietet Unterstützungsinformationen, zusammen mit einigen nützlichen externen Ressourcenlinks. Zum Beispiel sehen Sie <https://caniuse.com/#search=video> (Sie müssen nur das Feature, nach dem Sie suchen, in das Textfeld eingeben).

[stackoverflow.com](https://stackoverflow.com/) (SO) ist ein Forumsseite, wo Sie Fragen stellen können und andere Entwickler ihre Lösungen teilen, frühere Beiträge nachschlagen und anderen Entwicklern helfen können. Es wird empfohlen, nachzusehen, ob bereits eine Antwort auf Ihre Frage vorhanden ist, bevor Sie eine neue Frage stellen. Zum Beispiel haben wir auf SO nach "Autofokus im HTML-Dialog deaktivieren" gesucht und sehr schnell [Autofokus mit HTML-Attributen in showModal deaktivieren](https://stackoverflow.com/questions/63267581/disable-showmodal-auto-focusing-using-html-attributes) gefunden.

Abgesehen davon versuchen Sie, mit Ihrer bevorzugten Suchmaschine nach einer Antwort auf Ihr Problem zu suchen. Es ist oft nützlich, nach spezifischen Fehlermeldungen zu suchen, wenn Sie welche haben – andere Entwickler werden wahrscheinlich die gleichen Probleme wie Sie gehabt haben.

## Zusammenfassung

Jetzt sollten Sie mit den Hauptarten plattformübergreifender HTML- und CSS-Probleme, denen Sie in der Webentwicklung begegnen, vertraut sein und wissen, wie Sie sie beheben können.

{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/Testing_strategies","Learn/Tools_and_testing/Cross_browser_testing/JavaScript", "Learn/Tools_and_testing/Cross_browser_testing")}}
