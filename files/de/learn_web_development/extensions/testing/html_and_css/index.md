---
title: Umgang mit häufigen HTML- und CSS-Problemen
slug: Learn_web_development/Extensions/Testing/HTML_and_CSS
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Testing_strategies","Learn_web_development/Extensions/Testing/Feature_detection", "Learn_web_development/Extensions/Testing")}}

Nachdem die Szene gesetzt ist, werden wir nun speziell auf die häufigen plattformübergreifenden Probleme eingehen, die Ihnen in HTML- und CSS-Code begegnen können, und welche Tools verwendet werden können, um Probleme zu verhindern oder zu beheben, sobald sie auftreten. Dazu gehören das Überprüfen von Code, die Handhabung von CSS-Präfixen, die Nutzung von Entwicklungswerkzeugen des Browsers zur Fehlersuche, das Verwenden von Polyfills, um Browsersupport hinzuzufügen, das Angehen von Problemen mit responsivem Design und mehr.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>; ein Verständnis der grundlegenden
        <a href="/de/docs/Learn_web_development/Extensions/Testing/Introduction">Prinzipien des plattformübergreifenden Testens</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die Fähigkeit, häufige plattformübergreifende HTML- und CSS-Probleme zu diagnostizieren und
        geeignete Werkzeuge und Techniken zur Behebung dieser zu verwenden.
      </td>
    </tr>
  </tbody>
</table>

## Die Probleme mit HTML und CSS

Einige der Probleme mit HTML und CSS liegen darin, dass beide Sprachen ziemlich einfach sind und Entwickler oft nicht genügend Sorgfalt darauf verwenden, sicherzustellen, dass der Code gut gebaut, effizient und semantisch sinnvoll ist. Im schlimmsten Fall wird JavaScript verwendet, um den gesamten Inhalt und den Stil der Webseite zu erzeugen, was Ihre Seiten unzugänglich und weniger leistungsfähig macht (DOM-Elemente zu generieren ist kostspielig). In anderen Fällen werden neue Features nicht konsistent in allen Browsern unterstützt, was dazu führen kann, dass bestimmte Features und Stile für einige Nutzer nicht funktionieren. Probleme mit responsivem Design sind ebenfalls häufig – eine Seite, die in einem Desktop-Browser gut aussieht, kann auf einem mobilen Gerät ein schlechtes Erlebnis bieten, weil der Inhalt zu klein ist, um ihn zu lesen, oder die Seite langsam ist, weil aufwendige Animationen verwendet werden.

Lassen Sie uns ansehen, wie wir plattformübergreifende Fehler reduzieren können, die durch HTML/CSS entstehen.

## Das Erste zuerst: allgemeine Probleme beheben

Wir sagten im [ersten Artikel dieser Serie](/de/docs/Learn_web_development/Extensions/Testing/Introduction#testingdiscovery), dass eine gute Strategie darin besteht, zuerst in ein paar modernen Browsern auf Desktop/Mobil zu testen, um sicherzustellen, dass Ihr Code im Allgemeinen funktioniert, bevor Sie sich auf die plattformübergreifenden Probleme konzentrieren.

In unseren Artikeln [Debugging HTML](/de/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML) und [Debugging CSS](/de/docs/Learn_web_development/Core/Styling_basics/Debugging_CSS) haben wir einige wirklich grundlegende Anleitungen zum Debuggen von HTML/CSS bereitgestellt – wenn Sie mit den Grundlagen nicht vertraut sind, sollten Sie diese Artikel definitiv studieren, bevor Sie weitermachen.

Grundsätzlich geht es darum, zu überprüfen, ob Ihr HTML- und CSS-Code gut strukturiert ist und keine Syntaxfehler enthält.

> [!NOTE]
> Ein häufiges Problem mit CSS und HTML entsteht, wenn unterschiedliche CSS-Regeln beginnen, miteinander in Konflikt zu geraten. Dies kann besonders problematisch sein, wenn Sie Code von Drittanbietern verwenden. Beispielsweise könnten Sie ein CSS-Framework verwenden und feststellen, dass einer der von ihm verwendeten Klassennamen mit einem der von Ihnen bereits für einen anderen Zweck verwendeten Namen kollidiert. Oder es könnte sein, dass der von einer Art Drittanbieter-API generierte HTML-Code (z. B. für Werbebanner) eine Klassenname oder ID enthält, die Sie bereits für einen anderen Zweck verwenden. Um sicherzustellen, dass dies nicht passiert, müssen Sie die von Ihnen verwendeten Werkzeuge zuerst recherchieren und Ihren Code darauf ausrichten. Zudem empfiehlt es sich, CSS zu "namespace", z.B. wenn Sie ein Widget haben, stellen Sie sicher, dass es eine eindeutige Klasse hat, und beginnen Sie die Selektoren, die Elemente innerhalb des Widgets auswählen, mit dieser Klasse, sodass Konflikte weniger wahrscheinlich sind. Zum Beispiel `.audio-player ul a`.

### Validierung

Bei HTML beinhaltet die Validierung, sicherzustellen, dass alle Tags ordnungsgemäß geschlossen und genestet sind, dass Sie ein Doctype verwenden und die Tags für ihren Zweck richtig einsetzen. Eine gute Strategie ist, Ihren Code regelmäßig zu validieren. Ein Dienst, der dies tun kann, ist der W3C [Markup Validation Service](https://validator.w3.org/), der es Ihnen ermöglicht, auf Ihren Code zu verweisen, und eine Liste von Fehlern zurückgibt:

![Die HTML Validator Startseite](validator.png)

CSS hat eine ähnliche Geschichte – Sie müssen überprüfen, dass Ihre Eigenschaftsnamen korrekt geschrieben sind, Eigenschaftswerte korrekt geschrieben sind und für die Eigenschaften, bei denen sie verwendet werden, gültig sind, dass keine geschweiften Klammern fehlen usw. Auch dafür stellt das W3C einen [CSS Validator](https://jigsaw.w3.org/css-validator/) bereit.

### Linters

Eine weitere gute Option ist eine sogenannte Linter-Anwendung, die nicht nur Fehler aufzeigt, sondern auch Warnungen über schlechte Praktiken in Ihrem CSS und andere Punkte ausgeben kann. Linters können im Allgemeinen dahingehend angepasst werden, strenger oder lockerer in ihrem Fehler-/Warnungsbericht zu sein.

Es gibt viele Online-Linter-Anwendungen, wie [Dirty Markup](https://www.10bestdesign.com/dirtymarkup/) für HTML, CSS und JavaScript. Diese erlauben es Ihnen, Ihren Code in ein Fenster zu kopieren und er wird alle Fehler mit Kreuzen markieren, die dann überflogen werden können, um eine Fehlermeldung zu erhalten, die Sie über das Problem informiert. Dirty Markup ermöglicht es auch, Korrekturen an Ihrem Markup mit der Schaltfläche _Clean_ vorzunehmen.

![Dirty Markup Anwendung zeigt die Nachricht "Unerwartetes Zeichen in nicht zitiertem Attribut" über folgendem fehlerhaften HTML-Markup: <div id=combinators">](dirty-markup.png)

Es ist jedoch nicht sehr bequem, Ihren Code mehrmals auf eine Webseite zu kopieren und einzufügen, um dessen Gültigkeit zu prüfen. Was Sie wirklich wollen, ist ein Linter, der sich mit minimalem Aufwand in Ihren Standardarbeitsablauf einfügt.

Viele Code-Editoren haben Linter-Plugins. Zum Beispiel siehe:

- [SublimeLinter](https://www.sublimelinter.com/) für Sublime Text
- [Notepad++ linter](https://sourceforge.net/projects/notepad-linter/)
- [VS Code linters](https://marketplace.visualstudio.com/search?target=vscode&category=Linters&sortBy=Installs)

### Browser-Entwickler-Tools

Die in die meisten Browser eingebauten Entwickler-Tools bieten ebenfalls nützliche Werkzeuge zur Fehlersuche, hauptsächlich für CSS.

> [!NOTE]
> HTML-Fehler werden in den Entwickler-Tools nicht so leicht angezeigt, da der Browser versuchen wird, schlecht geformtes Markup automatisch zu korrigieren; der W3C-Validator ist die beste Möglichkeit, HTML-Fehler zu finden – siehe [Validierung](#validierung) oben.

Ein Beispiel ist, dass der CSS-Inspektor in Firefox CSS-Deklarationen anzeigt, die nicht angewendet werden, weil sie durchgestrichen sind, und ein Warnsymbol hinzufügt. Wenn Sie mit dem Mauszeiger über das Warnsymbol fahren, wird eine beschreibende Fehlermeldung angezeigt:

![Die Entwicklerwerkzeuge streichen ungültiges CSS durch und fügen ein überhoverbares Warnsymbol hinzu](css-message-devtools.png)

Andere Browser-Entwickler-Tools haben ähnliche Funktionen.

## Häufige plattformübergreifende Probleme

Nun schauen wir uns einige der häufigsten plattformübergreifenden HTML- und CSS-Probleme an. Die Hauptbereiche, die wir betrachten werden, sind der fehlende Support für moderne Features und Layout-Probleme.

### Browser, die moderne Features nicht unterstützen

Dies ist ein häufiges Problem, besonders wenn Sie alte Browser unterstützen müssen oder Features verwenden, die in einigen Browsern, aber noch nicht in allen implementiert sind. Im Allgemeinen funktionieren die meisten grundlegenden HTML- und CSS-Funktionalitäten (wie grundlegende HTML-Elemente, CSS-Basisfarben und Textstyling) in allen Browsern, die Sie unterstützen möchten; mehr Probleme treten auf, wenn Sie neuere HTML-, CSS- und API-Funktionalitäten einsetzen möchten. MDN zeigt Browser-Kompatibilitätsdaten für jedes dokumentierte Feature an; sehen Sie zum Beispiel die [Browser-Kompatibilitätstabelle für die `:has()` Pseudo-Klasse](/de/docs/Web/CSS/:has#browser_compatibility).

Sobald Sie eine Liste von Technologien identifiziert haben, die Sie verwenden möchten und die nicht universell unterstützt werden, ist es eine gute Idee, zu recherchieren, in welchen Browsern sie unterstützt werden, und welche verwandten Techniken nützlich sind. Siehe [Hilfe finden](#hilfe_finden) unten.

### HTML-Fallback-Verhalten

Einige Probleme können gelöst werden, indem man einfach die natürliche Arbeitsweise von HTML/CSS nutzt.

Nicht erkannt HTML-Elemente werden vom Browser als anonyme Inline-Elemente behandelt (im Wesentlichen Inline-Elemente ohne semantischen Wert, ähnlich den {{htmlelement("span")}}-Elementen). Sie können dennoch auf sie mit ihren Namen verweisen und sie mit CSS gestalten – Sie müssen nur sicherstellen, dass sie sich so verhalten, wie Sie es möchten. Stylen Sie sie genauso wie jedes andere Element, einschließlich der Einstellung der `display`-Eigenschaft auf etwas anderes als `inline`, wenn nötig.

Komplexere Elemente wie HTML [`<video>`](/de/docs/Web/HTML/Element/video), [`<audio>`](/de/docs/Web/HTML/Element/audio), [`<picture>`](/de/docs/Web/HTML/Element/picture), [`<object>`](/de/docs/Web/HTML/Element/object) und [`<canvas>`](/de/docs/Web/HTML/Element/canvas) (und andere Features darüber hinaus) haben natürliche Mechanismen für Fallbacks, die hinzugefügt werden können, falls die verlinkten Ressourcen nicht unterstützt werden. Sie können Fallback-Inhalte zwischen den öffnenden und schließenden Tags einfügen, und nicht unterstützende Browser werden das äußere Element im Wesentlichen ignorieren und den verschachtelten Inhalt ausführen.

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

Dieses Beispiel enthält einen einfachen Link, der es Ihnen ermöglicht, das Video herunterzuladen, selbst wenn der HTML-Videoplayer nicht funktioniert, sodass der Benutzer das Video trotzdem ansehen kann.

Ein weiteres Beispiel sind Formularelemente. Wenn neue [`<input>`](/de/docs/Web/HTML/Element/input)-Typen für die Eingabe spezifischer Informationen in Formulare eingeführt werden, wie Zeiten, Daten, Farben, Zahlen usw., verwendet der Browser, wenn er das neue Feature nicht unterstützt, den Standard von `type="text"`. Eingabetypen wurden hinzugefügt, die besonders nützlich sind, insbesondere auf mobilen Plattformen, wo eine einfache Eingabemethode sehr wichtig für das Benutzererlebnis ist. Plattformen bieten unterschiedliche UI-Widgets, abhängig vom Eingabetyp, wie z.B. ein Kalender-Widget zur Eingabe von Daten. Sollte ein Browser einen Eingabetyp nicht unterstützen, kann der Benutzer die erforderlichen Daten dennoch eingeben.

Das folgende Beispiel zeigt Eingaben für Datum und Uhrzeit:

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

Wenn Sie sich das Beispiel ansehen, sehen Sie die UI-Features in Aktion, während Sie versuchen, Daten einzugeben. Auf Geräten mit dynamischen Tastaturen werden tastspezifische Eingaben angezeigt. In einem nicht unterstützenden Browser werden die Eingaben einfach auf normale Texteingaben zurückgesetzt, was bedeutet, dass der Benutzer die korrekten Informationen dennoch eingeben kann.

### CSS Fallback-Verhalten

CSS ist im Allgemeinen besser in der Handhabung von Fallbacks als HTML. Wenn ein Browser auf eine Deklaration oder Regel stößt, die er nicht versteht, überspringt er diese einfach vollständig, ohne sie anzuwenden oder einen Fehler auszulösen. Dies könnte frustrierend für Sie und Ihre Benutzer sein, wenn ein solcher Fehler den Produktionscode erreicht, aber wenigstens bedeutet es, dass die gesamte Site nicht wegen eines Fehlers zusammenbricht, und wenn es klug genutzt wird, können Sie es zu Ihrem Vorteil nutzen.

Schauen wir uns ein Beispiel an – eine einfache Box, die mit CSS gestylt ist und einige Styling-features von unterschiedlichen CSS-Features hat:

![Ein roter Pillenknopf mit abgerundeten Ecken, Innenschaten und Außenanschauung](blingy-button.png)

> [!NOTE]
> Sie können dieses Beispiel auch live auf GitHub als [button-with-fallback.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/html-css/button-with-fallback.html) sehen (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/html-css/button-with-fallback.html)).

Der Button hat mehrere Deklarationen, die das Styling betreffen, aber die beiden, die uns am meisten interessieren, sind die folgenden:

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

Hier bieten wir eine [RGB](/de/docs/Web/CSS/color_value/rgb) {{cssxref("background-color")}} an, die bei Hovern die Opazität ändert, um dem Benutzer einen Hinweis zu geben, dass der Button interaktiv ist, und einige halbtransparente {{cssxref("box-shadow")}}-Schattierungen, um dem Button Textur und Tiefe zu verleihen. Während diese jetzt vollständig unterstützt werden, waren RGB-Farben und Box-Schatten früher nicht in allen Browsern verfügbar; angefangen bei IE9. Browser, die keine RGB-Farben unterstützten, würden die Deklaration ignorieren, was bedeutete, dass in alten Browsern der Hintergrund überhaupt nicht angezeigt wurde, sodass der Text nicht zu lesen war, was gar nicht gut war!

![Schwer zu sehender Pillenknopf mit weißem Text auf einem fast weißen Hintergrund](unreadable-button.png)

Um dies zu lösen, haben wir eine zweite `background-color`-Deklaration hinzugefügt, die einfach eine Hex-Farbe angibt – diese wird in wirklich alten Browsern unterstützt und fungiert als Fallback, wenn die modernen glänzenden Features nicht funktionieren. Was passiert ist, dass ein Browser, der diese Seite besucht, zunächst die erste `background-color`-Wert aufruft; wenn er die zweite `background-color`-Deklaration erreicht, wird er den ersten Wert mit diesem Wert überschreiben, wenn er RGB-Farben unterstützt. Wenn nicht, ignoriert er die gesamte Deklaration und fährt fort.

> [!NOTE]
> Das Gleiche gilt für andere CSS-Features wie [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries), [`@font-face`](/de/docs/Web/CSS/@font-face) und [`@supports`](/de/docs/Web/CSS/@supports)-Blöcke – wenn sie nicht unterstützt werden, ignoriert der Browser sie einfach.

### Selektor-Support

Natürlich werden keine CSS-Features angewendet, wenn Sie nicht die richtigen [Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors) verwenden, um das Element auszuwählen, das Sie stylen möchten!

In einer kommaseparierten Liste von Selektoren, wenn Sie einen Selektor einfach falsch schreiben, könnte er kein Element auswählen. Wenn jedoch ein Selektor ungültig ist, wird die **gesamte** Liste der Selektoren ignoriert, zusammen mit dem gesamten Stilblock. Aus diesem Grund sollten Sie ein `:-moz-`-präfixiertes Pseudo-Klasse oder Pseudo-Element nur in einer [verzeihlichen Selektorliste](/de/docs/Web/CSS/Selector_list#forgiving_selector_list) enthalten, wie zum Beispiel `:where(::-moz-thumb)`. Erfassen Sie keine `:-moz-`-präfixierten Pseudo-Klasse oder Pseudo-Element innerhalb einer kommaseparierten Gruppe von Selektoren außerhalb einer [`:is()`](/de/docs/Web/CSS/:is) oder [`:where()`](/de/docs/Web/CSS/:where) verzeihlichen Selektorliste, da alle Browser außer Firefox den gesamten Block ignorieren werden. Beachten Sie, dass sowohl `:is()` als auch `:where()` als Parameter in anderen Selektorlisten verwendet werden können, einschließlich [`:has()`](/de/docs/Web/CSS/:has) und [`:not()`](/de/docs/Web/CSS/:not).

Wir finden, dass es hilfreich ist, das Element, das Sie zu stylen versuchen, mit den Entwickler-Tools Ihres Browsers zu inspizieren, dann den DOM-Baum-Breadcrumb-Trace zu betrachten, den DOM-Inspektoren normalerweise bereitstellen, um zu sehen, ob Ihr Selektor im Vergleich dazu sinnvoll ist.

Zum Beispiel erhalten Sie in den Firefox-Entwicklungstools diese Art von Ausgabe am unteren Rand des DOM-Inspektors:

![Der Breadcrumb der Elemente ist html > body > form > div.form > input#date](dom-breadcrumb-trail.png)

Wenn Sie beispielsweise versuchen, diesen Selektor zu verwenden, könnten Sie sehen, dass er das Eingabeelement nicht wie gewünscht auswählt:

```css
form > #date
```

(Das `date`-Formularfeld ist kein direktes Kind des `<form>`; Sie wären besser dran, einen allgemeinen Nachkommer-Selektor anstelle eines Kind-Selektors zu verwenden).

### Umgang mit CSS-Präfixen

Ein weiteres Problem besteht in den CSS-Präfixen – diese sind ein Mechanismus, der ursprünglich verwendet wurde, um Browserherstellern zu erlauben, ihre eigene Version eines CSS- (oder JavaScript-)Features zu implementieren, während die Technologie sich noch in einem experimentellen Stadium befindet, sodass sie damit spielen und es richtig machen können, ohne mit Implementierungen anderer Browser oder den endgültigen unpräfixierten Implementierungen in Konflikt zu geraten.

Zum Beispiel verwendet Firefox `-moz-` und Chrome/Edge/Opera/Safari verwenden `-webkit-`. Andere Präfixe, die Ihnen in altem Code begegnen können und die sicher entfernt werden können, sind `-ms-`, das von Internet Explorer und frühen Versionen von Edge verwendet wurde, und `-o`, das in den ursprünglichen Versionen von Opera verwendet wurde.

Präfixierte Features sollten nie in Produktionswebsites verwendet werden – sie können ohne Vorwarnung geändert oder entfernt werden, können in alten Browser-Versionen, die sie benötigen, Leistungsprobleme verursachen und waren die Ursache von plattformübergreifenden Problemen. Dies ist insbesondere ein Problem, wenn Entwickler sich entscheiden, nur die `-webkit-` Version einer Eigenschaft zu verwenden, was implizierte, dass die Seite in anderen Browsern nicht funktioniert. Dies geschah so oft, dass andere Browserhersteller `-webkit-` prefixed Versionen von mehreren CSS-Eigenschaften implementierten. Während Browser noch einige prefixed Eigenschaftsnamen, Eigenschaftswerte und Pseudo-Klassen unterstützen, werden experimentelle Features jetzt hinter Flags gesetzt, sodass Webentwickler sie während der Entwicklung testen können.

Wenn Sie ein Präfix verwenden, stellen Sie sicher, dass es benötigt wird; dass die Eigenschaft zu den wenigen verbleibenden prefixed Features gehört. Sie können nachsehen, welche Browser Präfixe auf MDN-Referenzseiten benötigen, und auf Seiten wie [caniuse.com](https://caniuse.com/). Wenn Sie unsicher sind, können Sie auch durch einige Tests direkt in Browsern herausfinden. Fügen Sie die Standardversion ohne Präfix nach der prefixed Stil-Deklaration hinzu; sie wird ignoriert, wenn nicht unterstützt, und verwendet, wenn unterstützt.

```css
.masked {
  -webkit-mask-image: url(MDN.svg);
  mask-image: url(MDN.svg);
  -webkit-mask-size: 50%;
  mask-size: 50%;
}
```

Versuchen Sie dieses einfache Beispiel:

1. Verwenden Sie diese Seite oder eine andere Seite, die ein auffälliges Überschrift oder ein anderes Block-Level-Element hat.
2. Rechts/Cmd + klicken Sie auf das betreffende Element und wählen Sie Untersuchen/Element untersuchen (oder was auch immer die Option in Ihrem Browser ist) – das sollte die Entwickler-Tools in Ihrem Browser öffnen, wobei das Element im DOM-Inspektor hervorgehoben ist.
3. Suchen Sie nach einer Funktion, die Sie verwenden können, um das Element auszuwählen. Zum Beispiel hat diese MDN-Seite zum Zeitpunkt des Schreibens ein Logo mit einer ID von `mdn-docs-logo`.
4. Speichern Sie eine Referenz zu diesem Element in einer Variablen, zum Beispiel:

   ```js
   const test = document.getElementById("mdn-docs-logo");
   ```

5. Versuchen Sie nun, einen neuen Wert für die CSS-Eigenschaft zu setzen, für die Sie sich interessieren, auf diesem Element; Sie können dies mit der [style](/de/docs/Web/API/HTMLElement/style) Eigenschaft des Elements tun, zum Beispiel versuchen Sie, diese in die JavaScript-Konsole eingeben:

   ```js
   test.style.transform = "rotate(90deg)";
   ```

Sobald Sie anfangen, den Eigenschaftsnamen nach dem zweiten Punkt einzugeben (beachten Sie, dass in JavaScript CSS-Eigenschaftsnamen in {{Glossary("camel_case", "Lower Camel Case")}}, nicht in {{Glossary("kebab_case", "Kebab-Case")}} geschrieben werden), sollte die JavaScript-Konsole beginnen, die Namen der Eigenschaften, die im Browser existieren und die mit dem übereinstimmen, was Sie bisher geschrieben haben, zu vervollständigen. Dies ist nützlich, um herauszufinden, welche Eigenschaften in diesem Browser implementiert sind.

Wenn Sie moderne Features einbeziehen müssen, testen Sie den Feature-Support mit [`@supports`](/de/docs/Web/CSS/@supports), die es Ihnen ermöglicht, native Feature-Erkennungstests durchzuführen und das Präfix oder das neue Feature innerhalb des `@supports`-Blocks zu schachteln.

### Probleme mit responsivem Design

Responsives Design ist die Praxis, Weblayouts zu erstellen, die sich an verschiedene Geräteformate anpassen – zum Beispiel unterschiedliche Bildschirmbreiten, Ausrichtungen (Hochformat oder Querformat) oder Auflösungen. Ein Desktop-Layout sieht zum Beispiel schrecklich aus, wenn es auf einem Mobilgerät betrachtet wird. Also müssen Sie ein geeignetes mobiles Layout mit [Media Queries](/de/docs/Web/CSS/CSS_media_queries) bereitstellen und sicherstellen, dass es korrekt mit dem [viewport](/de/docs/Web/HTML/Viewport_meta_tag) angewendet wird. Eine detaillierte Beschreibung solcher Praktiken finden Sie in unserem [responsiven Design Tutorial](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design).

Die Auflösung ist ebenfalls ein großes Thema – zum Beispiel benötigen mobile Geräte weniger wahrscheinlich große, schwere Bilder als Desktops, und sie sind tendenziell mit langsamerem Internet und möglicherweise sogar teuren Datentarifen konfrontiert, die verschwendete Bandbreite problematischer machen. Darüber hinaus können verschiedene Geräte unterschiedliche Auflösungen haben, was bedeutet, dass kleinere Bilder pixelig erscheinen könnten. Es gibt eine Reihe von Techniken, die es Ihnen ermöglichen, solche Probleme zu überwinden, von [Media Queries](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design#media_queries) zu komplexeren [responsiven Bildtechniken](/de/docs/Web/HTML/Responsive_images#resolution_switching_different_sizes), einschließlich {{HTMLElement('picture')}} und dem {{HTMLElement('img')}}-Element's [`srcset`](/de/docs/Web/HTML/Element/img#srcset) und [`sizes`](/de/docs/Web/HTML/Element/img#sizes) Attribute.

## Hilfe finden

Es gibt viele andere Probleme, auf die Sie mit HTML und CSS stoßen werden, was das Wissen, wie man online Antworten findet, unschätzbar macht.

Unter den besten unterstützenden Informationsquellen sind das Mozilla Developer Network (wo Sie sich gerade befinden), [stackoverflow.com](https://stackoverflow.com/) und [caniuse.com](https://caniuse.com/).

Um das Mozilla Developer Network (MDN) zu nutzen, machen die meisten Menschen eine Suchmaschinen-Suche nach der Technologie, über die sie Informationen finden möchten, plus den Begriff "mdn", zum Beispiel, "mdn HTML video". MDN enthält mehrere nützliche Arten von Inhalten:

- Referenzmaterial mit Browser-Support-Informationen für clientseitige Webtechnologien, z. B. die [`<video>` Referenzseite](/de/docs/Web/HTML/Element/video).
- Anderes unterstützendes Referenzmaterial, zum Beispiel unser [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Guides/Formats),
- Nützliche Tutorials, die spezifische Probleme lösen, zum Beispiel [Erstellen eines plattformübergreifenden Videoplayers](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player).

[caniuse.com](https://caniuse.com/) bietet Support-Informationen zusammen mit einigen nützlichen externen Ressourcelinks. Zum Beispiel siehe <https://caniuse.com/#search=video> (Sie müssen einfach den Begriff, nach dem Sie suchen, in das Textfeld eingeben).

[stackoverflow.com](https://stackoverflow.com/) (SO) ist ein Forum, in dem Sie Fragen stellen und andere Entwickler ihre Lösungen teilen können. Sie sollten nachsehen, ob es bereits eine Antwort auf Ihre Frage gibt, bevor Sie eine neue Frage stellen. Zum Beispiel haben wir auf SO nach "Autofokus im HTML-Dialog deaktivieren" gesucht und sehr schnell [Disable showModal auto-focusing using HTML attributes](https://stackoverflow.com/questions/63267581/disable-showmodal-auto-focusing-using-html-attributes) gefunden.

Abgesehen davon sollten Sie versuchen, Ihr bevorzugte Suchmaschine nach einer Antwort auf Ihr Problem zu durchsuchen. Es ist oft nützlich, nach spezifischen Fehlermeldungen zu suchen, wenn Sie welche haben – andere Entwickler werden wahrscheinlich die gleichen Probleme gehabt haben.

## Zusammenfassung

Nun sollten Sie mit den Haupttypen plattformübergreifender HTML- und CSS-Probleme, die Ihnen in der Webentwicklung begegnen, vertraut sein und wissen, wie Sie diese beheben können.

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Testing_strategies","Learn_web_development/Extensions/Testing/Feature_detection", "Learn_web_development/Extensions/Testing")}}
