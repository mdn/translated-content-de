---
title: Umgang mit häufigen HTML- und CSS-Problemen
short-title: Häufige HTML- und CSS-Probleme
slug: Learn_web_development/Extensions/Testing/HTML_and_CSS
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Testing_strategies","Learn_web_development/Extensions/Testing/Feature_detection", "Learn_web_development/Extensions/Testing")}}

Nachdem wir die Grundlagen geklärt haben, betrachten wir nun speziell die häufigen browserübergreifenden Probleme, denen Sie in HTML- und CSS-Code begegnen werden, und welche Werkzeuge verwendet werden können, um Probleme zu verhindern oder zu beheben, die auftreten. Dazu gehört das Überprüfen des Codes mit Lintern, der Umgang mit CSS-Präfixen, die Verwendung von Entwicklerwerkzeugen im Browser zur Fehlersuche, die Verwendung von Polyfills zur Unterstützung in Browsern, die Lösung von Problemen bei responsivem Design und mehr.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den grundlegenden <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> Sprachen; eine Vorstellung
        von den grundlegenden
        <a
          href="/de/docs/Learn_web_development/Extensions/Testing/Introduction"
          >Prinzipien des browserübergreifenden Testens</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        In der Lage zu sein, häufige HTML- und CSS-Probleme bei der Browser-Kompatibilität zu diagnostizieren und
        geeignete Werkzeuge und Techniken zu verwenden, um sie zu beheben.
      </td>
    </tr>
  </tbody>
</table>

## Die Probleme mit HTML und CSS

Einige Probleme mit HTML und CSS liegen in der Tatsache, dass beide Sprachen ziemlich einfach sind und Entwickler oft nicht darauf achten, dass der Code gut gestaltet, effizient und semantisch korrekt ist, um die Funktion der Elemente auf der Seite zu beschreiben. Im schlimmsten Fall wird JavaScript verwendet, um den gesamten Webseiteninhalt und das Styling zu generieren, was Ihre Seiten unzugänglich und weniger performant macht (das Erzeugen von DOM-Elementen ist teuer). In anderen Fällen werden neuartige Funktionen nicht konsistent über alle Browser hinweg unterstützt, was dazu führen kann, dass einige Funktionen und Stile für einige Benutzer nicht funktionieren. Probleme mit dem responsiven Design sind ebenfalls häufig – eine Website, die auf einem Desktop-Browser gut aussieht, könnte auf einem mobilen Gerät ein schreckliches Erlebnis bieten, weil der Inhalt zu klein ist, um gelesen zu werden, oder die Website möglicherweise langsam ist aufgrund teurer Animationen.

Lassen Sie uns nun darauf eingehen, wie wir browserübergreifende Fehler, die aus HTML/CSS resultieren, reduzieren können.

## Als erstes: allgemeine Probleme beheben

Wir haben im [ersten Artikel dieser Serie](/de/docs/Learn_web_development/Extensions/Testing/Introduction#testingdiscovery) gesagt, dass es eine gute Strategie ist, zunächst in ein paar modernen Browsern auf Desktop/Mobil zu testen, um sicherzustellen, dass Ihr Code im Allgemeinen funktioniert, bevor Sie sich auf die Probleme mit der Browser-Kompatibilität konzentrieren.

In unseren Artikeln [Debugging HTML](/de/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML) und [Debugging CSS](/de/docs/Learn_web_development/Core/Styling_basics/Debugging_CSS) haben wir einige wirklich grundlegende Anleitungen zum Debuggen von HTML/CSS bereitgestellt—wenn Sie mit den Grundlagen nicht vertraut sind, sollten Sie diese Artikel unbedingt studieren, bevor Sie weitermachen.

Grundsätzlich geht es darum, zu überprüfen, ob Ihr HTML- und CSS-Code gut aufgebaut ist und keine Syntaxfehler enthält.

> [!NOTE]
> Ein häufiges Problem mit CSS und HTML tritt auf, wenn verschiedene CSS-Regeln beginnen, miteinander in Konflikt zu geraten. Dies kann besonders problematisch sein, wenn Sie Drittcode verwenden. Beispiel: Sie verwenden möglicherweise ein CSS-Framework und stellen fest, dass einer der Klassennamen, die es verwendet, mit einem kollidiert, den Sie bereits für einen anderen Zweck verwendet haben. Oder Sie stellen fest, dass HTML, das von einer Art Drittanbieter-API erzeugt wird (z. B. Ad-Banner), einen Klassennamen oder eine ID enthält, die Sie bereits für einen anderen Zweck verwenden. Um sicherzustellen, dass dies nicht passiert, müssen Sie die Tools, die Sie verwenden, zuerst recherchieren und Ihren Code darauf auslegen. Es ist auch sinnvoll, CSS zu "namespacen", z. B., wenn Sie ein Widget haben, sollten Sie sicherstellen, dass es eine eindeutige Klasse hat, und dann die Selektoren, die Elemente innerhalb des Widgets auswählen, mit dieser Klasse beginnen, sodass Konflikte weniger wahrscheinlich sind. Zum Beispiel `.audio-player ul a`.

### Validierung

Bei HTML geht es bei der Validierung darum, sicherzustellen, dass alle Ihre Tags richtig geschlossen und verschachtelt sind, Sie einen Doctype verwenden und Sie Tags für ihre richtige Bestimmung verwenden. Eine gute Strategie ist, Ihren Code regelmäßig zu validieren. Ein Service, der dies tun kann, ist der W3C [Markup Validation Service](https://validator.w3.org/), der es Ihnen ermöglicht, auf Ihren Code zu verweisen und eine Liste von Fehlern zurückzugeben:

![Die HTML-Validator-Startseite](validator.png)

Bei CSS ist die Geschichte ähnlich — Sie müssen überprüfen, ob Ihre Eigenschaftsnamen korrekt geschrieben sind, die Eigenschaftswerte korrekt geschrieben sind und für die Eigenschaften, auf denen sie verwendet werden, gültig sind, Sie keine geschweiften Klammern vergessen haben usw. Auch hierfür gibt es vom W3C einen [CSS-Validator](https://jigsaw.w3.org/css-validator/).

### Linter

Eine weitere gute Option ist die Verwendung eines sogenannten Linter-Programms, das nicht nur Fehler aufzeigt, sondern auch Warnungen über schlechte Praktiken in Ihrem CSS und andere Punkte feststellt. Linter können in der Regel so konfiguriert werden, dass sie strenger oder entspannter in ihrer Fehler/Warnungs-Berichterstattung sind.

Es gibt viele Online-Linter-Anwendungen, wie zum Beispiel [Dirty Markup](https://www.10bestdesign.com/dirtymarkup/) für HTML, CSS und JavaScript. Diese Anwendungen ermöglichen es Ihnen, Ihren Code in ein Fenster einzufügen, und sie zeigen Fehler mit Kreuzen an, die dann durch Hover eine Fehlermeldung anzeigen, die Sie über das Problem informiert. Dirty Markup ermöglicht es Ihnen auch, Korrekturen an Ihrem Markup mithilfe der Schaltfläche _Clean_ vorzunehmen.

![Dirty Markup-Anwendung zeigt die Nachricht "Unexpected character in unquoted attribute" über dem folgenden fehlerhaften HTML-Markup an: <div id=combinators">](dirty-markup.png)

Es ist jedoch nicht sehr praktisch, Ihren Code mehrmals auf eine Webseite kopieren und einfügen zu müssen, um seine Gültigkeit zu prüfen. Was Sie wirklich wollen, ist ein Linter, der sich leicht in Ihren Standard-Workflow einfügt.

Viele Code-Editoren haben Linter-Plugins. Zum Beispiel:

- [SublimeLinter](https://www.sublimelinter.com/) für Sublime Text
- [Notepad++ Linter](https://sourceforge.net/projects/notepad-linter/)
- [VS Code Linters](https://marketplace.visualstudio.com/search?target=vscode&category=Linters&sortBy=Installs)

### Entwicklerwerkzeuge im Browser

Die in den meisten Browsern eingebauten Entwicklerwerkzeuge bieten ebenfalls nützliche Tools zum Aufspüren von Fehlern, hauptsächlich für CSS.

> [!NOTE]
> HTML-Fehler werden in den Entwicklerwerkzeugen nicht so leicht angezeigt, da der Browser versucht, schlecht geformtes Markup automatisch zu korrigieren; der W3C-Validator ist der beste Weg, um HTML-Fehler zu finden — siehe [Validierung](#validierung) oben.

Als Beispiel zeigt der CSS-Inspektor in Firefox CSS-Deklarationen, die nicht angewendet werden, mit einem durchgestrichenen Schriftzug und einem Warnsymbol an. Beim Hovern über das Warnsymbol wird eine beschreibende Fehlermeldung angezeigt:

![Die Entwicklerwerkzeuge streichen ungültige CSS aus und fügen ein hoverbares Warnsymbol hinzu](css-message-devtools.png)

Andere Browser-Entwicklerwerkzeuge haben ähnliche Funktionen.

## Häufige browserübergreifende Probleme

Gehen wir nun auf einige der häufigsten browserübergreifenden HTML- und CSS-Probleme ein. Die Hauptbereiche, die wir betrachten werden, sind fehlende Unterstützung für moderne Funktionen und Layout-Probleme.

### Browser, die moderne Funktionen nicht unterstützen

Dies ist ein häufiges Problem, besonders wenn Sie alte Browser unterstützen müssen oder Sie Funktionen verwenden, die in einigen Browsern, aber noch nicht in allen implementiert sind. Im Allgemeinen funktioniert die meiste grundlegende HTML- und CSS-Funktionalität (wie grundlegende HTML-Elemente, CSS-Grundfarben und Textgestaltung) in allen Browsern, die Sie unterstützen möchten; mehr Probleme treten auf, wenn Sie neuere HTML-, CSS- und API-Funktionen verwenden möchten. MDN zeigt Browser-Kompatibilitätsdaten für jede dokumentierte Funktion an; zum Beispiel sehen Sie die [Browser-Unterstützungstabelle für die `:has()` Pseudo-Klasse](/de/docs/Web/CSS/:has#browser_compatibility).

Nachdem Sie eine Liste der Technologien identifiziert haben, die Sie verwenden werden und die nicht universell unterstützt werden, ist es eine gute Idee, zu recherchieren, in welchen Browsern sie unterstützt werden und welche verwandten Techniken nützlich sind. Siehe [Hilfe finden](#hilfe_finden) unten.

### HTML-Fallback-Verhalten

Einige Probleme können gelöst werden, indem man einfach die natürliche Funktionsweise von HTML/CSS ausnutzt.

Nicht erkannte HTML-Elemente werden vom Browser als anonyme Inline-Elemente behandelt (im Grunde genommen Inline-Elemente ohne semantischen Wert, ähnlich den {{htmlelement("span")}} Elementen). Sie können sich immer noch auf sie durch ihre Namen beziehen und sie mit CSS gestalten — Sie müssen nur sicherstellen, dass sie sich so verhalten, wie Sie es möchten. Gestalten Sie sie einfach wie jedes andere Element, indem Sie z. B. die `display`-Eigenschaft auf etwas anderes als `inline` setzen, falls nötig.

Komplexere Elemente wie HTML [`<video>`](/de/docs/Web/HTML/Reference/Elements/video), [`<audio>`](/de/docs/Web/HTML/Reference/Elements/audio), [`<picture>`](/de/docs/Web/HTML/Reference/Elements/picture), [`<object>`](/de/docs/Web/HTML/Reference/Elements/object) und [`<canvas>`](/de/docs/Web/HTML/Reference/Elements/canvas) (und andere Funktionen) haben natürliche Mechanismen, um Fallbacks hinzuzufügen, falls die verknüpften Ressourcen nicht unterstützt werden. Sie können Fallback-Inhalte zwischen den öffnenden und schließenden Tags hinzufügen, und nicht unterstützende Browser ignorieren das äußere Element und führen den eingeschlossenen Inhalt aus.

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

Dieses Beispiel enthält einen einfachen Link, der es Ihnen ermöglicht, das Video herunterzuladen, falls sogar der HTML-Videoplayer nicht funktioniert, so dass der Benutzer dennoch auf das Video zugreifen kann.

Ein weiteres Beispiel sind Formularelemente. Als neue [`<input>`](/de/docs/Web/HTML/Reference/Elements/input) Typen eingeführt wurden, um bestimmte Informationen in Formulare einzugeben, wie Zeiten, Daten, Farben, Zahlen usw., verwendete der Browser, wenn eine neue Funktion nicht unterstützt wurde, den Standardwert `type="text"`. Input-Typen wurden hinzugefügt, die besonders auf mobilen Plattformen sehr nützlich sind, da es wichtig ist, eine benutzerfreundliche Möglichkeit zur Dateneingabe bereitzustellen. Plattformen bieten je nach Eingabetyp verschiedene Benutzeroberflächen-Widgets an, z. B. ein Kalender-Widget zur Eingabe von Daten. Sollte ein Browser einen Eingabetyp nicht unterstützen, kann der Benutzer dennoch die erforderlichen Daten eingeben.

Das folgende Beispiel zeigt Datum- und Uhrzeiteingaben:

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
> Sie können dieses Beispiel auch live als [forms-test.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/html-css/forms-test.html) auf GitHub sehen (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/html-css/forms-test.html)).

Wenn Sie das Beispiel ansehen, sehen Sie die Benutzeroberflächenfunktionen in Aktion, wenn Sie versuchen, Daten einzugeben. Auf Geräten mit dynamischen Tastaturen werden typspezifische Tastaturen angezeigt. In einem nicht unterstützenden Browser werden die Eingaben einfach zu normalen Texteingaben zurückgesetzt, was bedeutet, dass der Benutzer dennoch die richtigen Informationen eingeben kann.

### CSS-Fallback-Verhalten

CSS ist arguably besser als HTML, wenn es um Fallbacks geht. Wenn ein Browser auf eine Deklaration oder Regel stößt, die er nicht versteht, überspringt er sie einfach komplett, ohne sie anzuwenden oder einen Fehler zu werfen. Dies mag frustrierend für Sie und Ihre Benutzer sein, wenn ein solcher Fehler in den Produktionscode gelangt, aber immerhin bedeutet es, dass die gesamte Seite nicht wegen eines Fehlers abstürzt, und wenn es klug eingesetzt wird, können Sie es zu Ihrem Vorteil nutzen.

Schauen wir uns ein Beispiel an — eine einfache Box, die mit CSS gestaltet wurde und einige Stile hat, die durch verschiedene CSS-Funktionen bereitgestellt werden:

![Ein roter Pillenknopf mit abgerundeten Ecken, eingedrücktem Schatten und Schlagschatten](blingy-button.png)

> [!NOTE]
> Sie können dieses Beispiel auch live auf GitHub als [button-with-fallback.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/html-css/button-with-fallback.html) sehen (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/html-css/button-with-fallback.html)).

Der Knopf hat eine Reihe von Deklarationen, die Stil bieten, aber die beiden, die uns am meisten interessieren, sind wie folgt:

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

Hier bieten wir eine [RGB](/de/docs/Web/CSS/color_value/rgb) {{cssxref("background-color")}} an, die die Deckkraft beim Hover ändert, um dem Benutzer einen Hinweis zu geben, dass der Knopf interaktiv ist, und einige halbtransparente eingelassene {{cssxref("box-shadow")}} Schattierungen, um dem Knopf etwas Textur und Tiefe zu verleihen. Während RGB-Farben und Box-Schatten jetzt vollständig unterstützt werden, sind sie nicht immer in Nutzf; dem IE9 zu finden. Browser, die keine RGB-Farben unterstützten, würden die Deklaration ignorieren, was in alten Browsern dazu führte, dass der Hintergrund gar nicht angezeigt wurde, sodass der Text unleserlich war, was überhaupt nicht gut ist!

![Schwer lesbarer Pillenknopf mit weißem Text auf einem fast weißen Hintergrund](unreadable-button.png)

Um dies zu lösen, haben wir eine zweite `background-color` Deklaration hinzugefügt, die einfach eine Hex-Farbe angibt — dies wird weit zurück in wirklich alten Browsern unterstützt und dient als Fallback, falls die modernen glänzenden Funktionen nicht funktionieren. Was passiert, ist, dass ein Browser, der diese Seite besucht, zunächst den ersten `background-color` Wert anwendet; wenn er zur zweiten `background-color` Deklaration gelangt, überschreibt er den anfänglichen Wert mit diesem Wert, wenn er RGB-Farben unterstützt. Andernfalls ignoriert er einfach die gesamte Deklaration und geht weiter.

> [!NOTE]
> Das Gleiche gilt für andere CSS-Funktionen wie [media queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries), [`@font-face`](/de/docs/Web/CSS/@font-face) und [`@supports`](/de/docs/Web/CSS/@supports) Blöcke — wenn sie nicht unterstützt werden, ignoriert der Browser sie einfach.

### Selector-Unterstützung

Natürlich werden keine CSS-Funktionen angewendet, wenn Sie nicht die richtigen [Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors) verwenden, um das Element auszuwählen, das Sie stylen möchten!

In einer kommagetrennten Liste von Selektoren, wenn Sie einfach einen Selektor falsch schreiben, passt er möglicherweise zu keinem Element. Wenn jedoch ein Selektor ungültig ist, wird die **gesamte** Liste von Selektoren ignoriert, zusammen mit dem gesamten Stilblock. Aus diesem Grund sollten Sie nur eine `:-moz-` Präfix-Pseudo-Klasse oder ein Pseudo-Element in einer [verzeihenden Selektorliste](/de/docs/Web/CSS/Selector_list#forgiving_selector_list) wie `:where(::-moz-thumb)` einfügen. Schließen Sie kein `:-moz-` Präfix-Pseudo-Klasse oder ein Pseudo-Element in eine durch Kommas getrennte Gruppe von Selektoren außerhalb einer [`:is()`](/de/docs/Web/CSS/:is) oder [`:where()`](/de/docs/Web/CSS/:where) verzeihenden Selektorliste ein, da alle Browser außer Firefox den gesamten Block ignorieren. Beachten Sie, dass sowohl `:is()` als auch `:where()` als Parameter in anderen Selektorlisten, einschließlich [`:has()`](/de/docs/Web/CSS/:has) und [`:not()`](/de/docs/Web/CSS/:not), übergeben werden können.

Wir finden es hilfreich, das Element, das Sie stylen möchten, mit den Entwicklerwerkzeugen Ihres Browsers zu inspizieren und dann den DOM-Baum-Breadcrumb-Trail zu betrachten, den DOM-Inspektoren normalerweise bereitstellen, um zu sehen, ob Ihr Selektor mit ihm übereinstimmt.

Zum Beispiel erhalten Sie in den Firefox-Entwicklerwerkzeugen diese Art der Ausgabe am unteren Rand des DOM-Inspektors:

![Der Breadcrumb von Elementen lautet html > body > form > div.form > input#date](dom-breadcrumb-trail.png)

Wenn Sie beispielsweise versuchen würden, diesen Selektor zu verwenden, könnten Sie feststellen, dass er das Eingabeelement nicht wie gewünscht auswählt:

```css
form > #date {
  /* … */
}
```

(Das `date` Formulareingabeelement ist kein direktes Kind des `<form>`; Sie wären besser beraten, einen allgemeinen Nachkommen-Selektor anstelle eines Kindselektors zu verwenden).

### Umgang mit CSS-Präfixen

Ein weiteres Set von Problemen tritt mit CSS-Präfixen auf – diese sind ein Mechanismus, der ursprünglich verwendet wurde, um Browseranbietern zu ermöglichen, ihre eigene Version einer CSS- (oder JavaScript-) Funktion zu implementieren, während die Technologie sich noch in einem experimentellen Zustand befindet, sodass sie damit spielen und sie ohne Konflikte mit Implementierungen anderer Browser oder den endgültigen implementierungslosen Implementierungen richtig verstehen können.

Beispielsweise verwendet Firefox `-moz-` und Chrome/Edge/Opera/Safari verwenden `-webkit-`. Andere Präfixe, die Ihnen in altem Code begegnen können und die sicher entfernt werden können, sind `-ms-`, das von Internet Explorer und frühen Versionen von Edge verwendet wurde, und `-o`, das in den ursprünglichen Versionen von Opera verwendet wurde.

Präfix-Funktionen sollten nie in Produktionswebsites verwendet werden – sie können ohne Vorwarnung geändert oder entfernt werden, Performance-Probleme in alten Browsern verursachen, die sie erfordern, und waren die Ursache für browserübergreifende Probleme. Dies ist insbesondere ein Problem, wenn Entwickler sich entscheiden, nur die `-webkit-` Version einer Eigenschaft zu verwenden, was implizierte, dass die Site in anderen Browsern nicht funktionieren würde. Dies geschah so häufig, dass andere Browservendoren `-webkit-` Präfix-Versionen mehrerer CSS-Eigenschaften implementierten. Während Browser weiterhin einige Präfix-Eigenschaftsnamen, Eigenschaftswerte und Pseudo-Klassen unterstützen, werden jetzt experimentelle Funktionen hinter Flags platziert, sodass Webentwickler sie während der Entwicklung testen können.

Wenn Sie ein Präfix verwenden, stellen Sie sicher, dass es benötigt wird; dass die Eigenschaft eine der wenigen verbleibenden Präfix-Funktionen ist. Sie können nachschlagen, welche Browser Präfixe auf MDN Referenzseiten, und Sites wie [caniuse.com](https://caniuse.com/) erfordern. Wenn Sie sich unsicher sind, können Sie es auch durch einige Tests direkt in den Browsern herausfinden. Schließen Sie die standardmäßige nicht-präfixierte Version nach der Präfix-Stil-Deklaration ein; sie wird ignoriert, wenn sie nicht unterstützt wird, und verwendet, wenn sie unterstützt wird.

```css
.masked {
  -webkit-mask-image: url("MDN.svg");
  mask-image: url("MDN.svg");
  -webkit-mask-size: 50%;
  mask-size: 50%;
}
```

Versuchen Sie dieses einfache Beispiel:

1. Verwenden Sie diese Seite oder eine andere Website, die eine prominente Überschrift oder ein anderes Blockelement hat.
2. Rechtsklicken/Sekundärklick (bzw. cmd + Klick) auf das betreffende Element und wählen Sie Untersuchen/Element untersuchen (oder was auch immer die Option in Ihrem Browser ist) – dies sollte die Entwicklerwerkzeuge in Ihrem Browser öffnen, mit dem hervorgehobenen Element im DOM-Inspektor.
3. Suchen Sie nach einer Funktion, die Sie verwenden können, um dieses Element auszuwählen. Zum Beispiel hat zum Zeitpunkt des Schreibens dieser Seite auf MDN ein Logo mit einer ID von `mdn-docs-logo`.
4. Speichern Sie eine Referenz zu diesem Element in einer Variablen, z. B.:

   ```js
   const test = document.getElementById("mdn-docs-logo");
   ```

5. Versuchen Sie nun, einen neuen Wert für die CSS-Eigenschaft, an der Sie interessiert sind, auf diesem Element festzulegen; Sie können dies mithilfe der [style](/de/docs/Web/API/HTMLElement/style) Eigenschaft des Elements tun, versuchen Sie beispielsweise, diese in die JavaScript-Konsole einzugeben:

   ```js
   test.style.transform = "rotate(90deg)";
   ```

Wenn Sie beginnen, den Eigenschaftsnamen-Darstellung nach dem zweiten Punkt einzugeben (beachten Sie, dass CSS-Eigenschaftsnamen in JavaScript in {{Glossary("camel_case", "Lower Camel Case")}}, nicht in {{Glossary("kebab_case", "Kebab-Case")}} geschrieben werden), sollte die JavaScript-Konsole beginnen, die Namen der Eigenschaften zu vervollständigen, die im Browser existieren und zu dem passen, was Sie bisher geschrieben haben. Dies ist nützlich, um herauszufinden, welche Eigenschaften in diesem Browser implementiert sind.

Wenn Sie moderne Funktionen einbeziehen müssen, testen Sie die Unterstützung der Funktion mit [`@supports`](/de/docs/Web/CSS/@supports), die es Ihnen erlaubt, native Funktionsnachweistests zu implementieren, und verankern Sie die präfixierte oder neue Funktion innerhalb des `@supports` Blocks.

### Probleme mit responsivem Design

Responsives Design ist die Praxis, Weblayouts zu erstellen, die sich an unterschiedliche Geräteformfaktoren anpassen – zum Beispiel unterschiedliche Bildschirmbreiten, Ausrichtungen (Hoch- oder Querformat) oder Auflösungen. Ein Desktop-Layout sieht zum Beispiel schrecklich aus, wenn es auf einem mobilen Gerät angezeigt wird, daher müssen Sie ein passendes mobiles Layout mit [media queries](/de/docs/Web/CSS/CSS_media_queries) bereitstellen und sicherstellen, dass es mit dem [viewport](/de/docs/Web/HTML/Guides/Viewport_meta_element) Element korrekt angewendet wird. Sie finden einen detaillierten Bericht über solche Praktiken in unserem [Leitfaden für responsives Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design).

Auflösung ist ebenfalls ein großes Problem – zum Beispiel sind mobile Geräte weniger wahrscheinlich große, schwere Bilder zu benötigen als Desktop-Computer und haben möglicherweise langsamere Internetverbindungen und möglicherweise sogar kostspielige Datentarife, die verschwendete Bandbreite mehr zu einem Problem machen. Zusätzlich können verschiedene Geräte eine Reihe von unterschiedlichen Auflösungen haben, was bedeutet, dass kleinere Bilder möglicherweise verpixelt erscheinen könnten. Es gibt eine Reihe von Techniken, die Ihnen helfen, solche Probleme zu umgehen, von [media queries](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design#media_queries) bis zu komplexeren [techniken für responsive Images](/de/docs/Web/HTML/Guides/Responsive_images#resolution_switching_different_sizes), einschließlich des {{HTMLElement('picture')}} und des {{HTMLElement('img')}} Elements mit den Attributes [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset) und [`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes).

## Hilfe finden

Es gibt viele andere Probleme, auf die Sie mit HTML und CSS stoßen werden, sodass Wissen darüber, wie man online Antworten findet, von unschätzbarem Wert ist.

Zu den besten Informationsquellen zählen das Mozilla Developer Network (das ist, wo Sie sich gerade befinden!), [stackoverflow.com](https://stackoverflow.com/), und [caniuse.com](https://caniuse.com/).

Um das Mozilla Developer Network (MDN) zu nutzen, führen die meisten Leute eine Suchmaschinensuche nach der Technologie durch, zu der sie Informationen suchen möchten, zusammen mit dem Begriff "mdn", zum Beispiel "mdn HTML video". MDN enthält mehrere nützliche Inhaltstypen:

- Referenzmaterial mit Browser-Unterstützungsinformationen für clientseitige Webtechnologien, z. B. die [`<video>` Referenzseite](/de/docs/Web/HTML/Reference/Elements/video).
- Anderes unterstützendes Referenzmaterial, zum Beispiel unser [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Guides/Formats),
- Nützliche Tutorials, die spezifische Probleme lösen, zum Beispiel [Erstellen eines browserübergreifenden Videoplayers](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player).

[caniuse.com](https://caniuse.com/) bietet Unterstützung sinformationen mit ein paar nützlichen Links zu externen Ressourcen. Beispielsweise siehe <https://caniuse.com/#search=video> (Sie müssen nur das Feature, nach dem sie suchen, in das Textfeld eingeben).

[stackoverflow.com](https://stackoverflow.com/) (SO) ist ein Forum, auf dem Sie Fragen stellen und von anderen Entwicklern Lösungen erhalten können, frühere Beiträge durchsuchen und anderen Entwicklern helfen können. Sie sollten sehen, ob es bereits eine Antwort auf Ihre Frage gibt, bevor Sie eine neue Frage stellen. Zum Beispiel haben wir "autofokus auf HTML-Dialog deaktivieren" auf SO gesucht und sehr schnell [Deaktivieren von showModal automatischem Fokus mit HTML-Attributen](https://stackoverflow.com/questions/63267581/disable-showmodal-auto-focusing-using-html-attributes) gefunden.

Abgesehen davon probieren Sie, Ihre Lieblingssuchmaschine zu benutzen, um eine Antwort auf Ihr Problem zu finden. Es ist oft nützlich, nach bestimmten Fehlermeldungen zu suchen, wenn Sie welche haben — andere Entwickler werden wahrscheinlich die gleichen Probleme gehabt haben wie Sie.

## Zusammenfassung

Nun sollten Sie mit den wichtigsten Arten von HTML- und CSS-Problemen bei der Browser-Kompatibilität vertraut sein, denen Sie bei der Webentwicklung begegnen und wie Sie diese beheben können.

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Testing_strategies","Learn_web_development/Extensions/Testing/Feature_detection", "Learn_web_development/Extensions/Testing")}}
