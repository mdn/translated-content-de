---
title: Umgang mit häufigen HTML- und CSS-Problemen
slug: Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS
l10n:
  sourceCommit: 88467d31d2ad7bdfade8b38ec69f6702fee080d1
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/Testing_strategies","Learn/Tools_and_testing/Cross_browser_testing/JavaScript", "Learn/Tools_and_testing/Cross_browser_testing")}}

Nachdem das Szenario festgelegt wurde, werfen wir nun einen genaueren Blick auf die häufigen plattformübergreifenden Probleme, die in HTML- und CSS-Code auftreten können, und welche Werkzeuge verwendet werden können, um Probleme zu vermeiden oder zu beheben. Dazu gehören das Linting von Code, der Umgang mit CSS-Präfixen, die Nutzung von Browser-Entwicklertools zur Verfolgung von Problemen, die Verwendung von Polyfills zum Hinzufügen von Unterstützung in Browsern, die Bewältigung von Responsivitätsproblemen und mehr.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen
        <a href="/de/docs/Learn/HTML">HTML</a>,
        <a href="/de/docs/Learn/CSS">CSS</a> und
        <a href="/de/docs/Learn/JavaScript">JavaScript</a>; eine Idee von den zentralen
        <a href="/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction">Grundlagen des plattformübergreifenden Testens</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        In der Lage zu sein, häufige HTML- und CSS-Probleme im plattformübergreifenden Kontext zu diagnostizieren und geeignete Werkzeuge und Techniken zu deren Behebung zu verwenden.
      </td>
    </tr>
  </tbody>
</table>

## Die Schwierigkeiten mit HTML und CSS

Einige der Schwierigkeiten bei HTML und CSS liegen in der Tatsache, dass beide Sprachen relativ einfach sind und Entwickler sie oft nicht ernst nehmen, was die Sicherstellung einer gut gestalteten, effizienten und semantischen Beschreibung der Zwecke der Features auf der Seite betrifft. Im schlimmsten Fall wird JavaScript verwendet, um den gesamten Webseiteninhalt und -stil zu generieren, was Ihre Seiten unzugänglich und weniger performant macht (das Erstellen von DOM-Elementen ist aufwendig). In anderen Fällen werden aufkommende Features nicht konsistent in allen Browsern unterstützt, was dazu führen kann, dass einige Features und Stile für einige Benutzer nicht funktionieren. Responsivitätsprobleme sind ebenfalls häufig – eine Seite, die in einem Desktop-Browser gut aussieht, kann eine schreckliche Erfahrung auf einem mobilen Gerät bieten, weil der Inhalt zu klein zum Lesen ist oder die Seite wegen aufwendiger Animationen langsam ist.

Lassen Sie uns fortfahren und schauen, wie wir plattformübergreifende Fehler reduzieren können, die durch HTML/CSS entstehen.

## Zuerst: Allgemeine Probleme beheben

Wir haben im [ersten Artikel dieser Serie](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction#testingdiscovery) gesagt, dass eine gute Strategie darin besteht, in ein paar modernen Browsern auf Desktop/Mobil zu testen, um sicherzustellen, dass Ihr Code allgemein funktioniert, bevor Sie sich auf plattformübergreifende Probleme konzentrieren.

In unseren Artikeln zu [Debugging von HTML](/de/docs/Learn/HTML/Introduction_to_HTML/Debugging_HTML) und [Debugging von CSS](/de/docs/Learn/CSS/Building_blocks/Debugging_CSS) haben wir einige wirklich grundlegende Anleitungen zum Debuggen von HTML/CSS bereitgestellt — wenn Sie mit den Grundlagen nicht vertraut sind, sollten Sie diese Artikel unbedingt studieren, bevor Sie weitermachen.

Im Wesentlichen geht es darum, zu überprüfen, ob Ihr HTML- und CSS-Code gut formatiert ist und keine Syntaxfehler enthält.

> [!NOTE]
> Ein häufiges Problem bei CSS und HTML tritt auf, wenn verschiedene CSS-Regeln miteinander in Konflikt geraten. Dies kann insbesondere dann problematisch sein, wenn Sie Drittanbieter-Code verwenden. Zum Beispiel könnten Sie ein CSS-Framework verwenden und feststellen, dass einer der Klassennamen, die es verwendet, mit einem von Ihnen bereits für einen anderen Zweck verwendeten Klassennamen kollidiert. Oder Sie könnten feststellen, dass von einer Art Drittanbieter-API generiertes HTML (zum Beispiel Werbebanner) einen Klassennamen oder eine ID enthält, die Sie bereits für einen anderen Zweck verwenden. Um sicherzustellen, dass dies nicht passiert, müssen Sie zuerst die von Ihnen verwendeten Tools recherchieren und Ihren Code darum herum gestalten. Es ist auch sinnvoll, CSS zu "namespacing", z.B. wenn Sie ein Widget haben, stellen Sie sicher, dass es eine eindeutige Klasse hat, und beginnen Sie dann die Selektoren, die Elemente innerhalb des Widgets auswählen, mit dieser Klasse, um Konflikte unwahrscheinlicher zu machen. Beispiel: `.audio-player ul a`.

### Validierung

Für HTML umfasst die Validierung die Sicherstellung, dass alle Ihre Tags ordnungsgemäß geschlossen und geschachtelt sind, Sie einen Doctype verwenden und die Tags für ihren korrekten Zweck verwenden. Eine gute Strategie besteht darin, Ihren Code regelmäßig zu validieren. Ein Dienst, der dies tun kann, ist der W3C [Markup Validation Service](https://validator.w3.org/), der es Ihnen ermöglicht, auf Ihren Code zu verweisen und eine Liste von Fehlern zurückzugeben:

![Die HTML-Validator-Startseite](validator.png)

CSS hat eine ähnliche Geschichte — Sie müssen überprüfen, ob Ihre Eigenschaftsnamen korrekt geschrieben sind, Eigenschaftswerte korrekt und für die Eigenschaften, auf denen sie verwendet werden, gültig sind, dass keine geschweiften Klammern fehlen und so weiter. Hierfür bietet der W3C auch einen [CSS Validator](https://jigsaw.w3.org/css-validator/) an.

### Linter

Eine weitere gute Option ist die Verwendung einer sogenannten Linter-Anwendung, die nicht nur Fehler aufzeigt, sondern auch Warnungen über schlechte Praktiken in Ihrem CSS und andere Punkte hervorheben kann. Linter können in der Regel so angepasst werden, dass sie in ihrer Fehler-/Warnberichterstattung strenger oder lockerer sind.

Es gibt viele Online-Linter-Anwendungen, wie [Dirty Markup](https://www.10bestdesign.com/dirtymarkup/) für HTML, CSS und JavaScript. Diese erlauben es Ihnen, Ihren Code in ein Fenster einzufügen, und es wird Fehler mit Kreuzen markieren, die dann überflogen werden können, um eine Fehlermeldung zu erhalten, die Ihnen mitteilt, was das Problem ist. Dirty Markup erlaubt es Ihnen auch, Ihre Markup-Fehler mit der Schaltfläche _Clean_ zu beheben.

![Die Dirty Markup-Anwendung zeigt die Meldung "Unexpected character in unquoted attribute" über dem folgenden fehlerhaften HTML-Markup: <div id=combinators">](dirty-markup.png)

Es ist jedoch nicht sehr bequem, Ihren Code immer wieder auf eine Webseite kopieren und einfügen zu müssen, um dessen Gültigkeit zu überprüfen. Was Sie wirklich wollen, ist ein Linter, der sich mit minimalem Aufwand in Ihren Standard-Arbeitsablauf integriert.

Viele Code-Editoren haben Linter-Plugins. Zum Beispiel sehen Sie:

- [SublimeLinter](https://www.sublimelinter.com/) für Sublime Text
- [Notepad++ linter](https://sourceforge.net/projects/notepad-linter/)
- [VSCode linters](https://marketplace.visualstudio.com/search?target=vscode&category=Linters&sortBy=Installs)

### Entwickler-Tools des Browsers

Die Entwickler-Tools, die in die meisten Browser integriert sind, bieten ebenfalls nützliche Werkzeuge zum Aufspüren von Fehlern, hauptsächlich für CSS.

> [!NOTE]
> HTML-Fehler werden in den Entwickler-Tools nicht so leicht angezeigt, da der Browser versuchen wird, schlecht formatiertes Markup automatisch zu korrigieren; der W3C Validator ist der beste Weg, um HTML-Fehler zu finden — siehe [Validierung](#validierung) oben.

Zum Beispiel zeigt der CSS-Inspektor in Firefox nicht angewendete CSS-Deklarationen durchgestrichen mit einem Warn-Dreieck. Wenn Sie das Warn-Dreieck überfliegen, wird eine beschreibende Fehlermeldung angezeigt:

![Die Entwickler-Tools streichen ungültiges CSS durch und fügen ein überfliegbares Warnsymbol hinzu](css-message-devtools.png)

Andere Browser-Entwicklertools haben ähnliche Funktionen.

## Häufige plattformübergreifende Probleme

Schauen wir uns nun einige der häufigsten plattformübergreifenden HTML- und CSS-Probleme an. Die Hauptbereiche, die wir untersuchen werden, sind fehlende Unterstützung für moderne Funktionen und Layout-Probleme.

### Browser, die moderne Funktionen nicht unterstützen

Dies ist ein häufiges Problem, insbesondere wenn Sie alte Browser unterstützen müssen oder Sie Funktionen verwenden, die in einigen Browsern, aber noch nicht in allen implementiert sind. Im Allgemeinen funktioniert die meiste Kernfunktionalität von HTML und CSS (wie grundlegende HTML-Elemente, grundlegende CSS-Farben und Textgestaltung) in allen Browsern, die Sie unterstützen wollen; mehr Probleme werden aufgedeckt, wenn Sie beginnen, neuere HTML-, CSS- und API-Funktionen verwenden zu wollen. MDN zeigt Browserkompatibilitätsdaten für jede dokumentierte Funktion an; siehe zum Beispiel die [Browser-Support-Tabelle für die `:has()` Pseudo-Klasse](/de/docs/Web/CSS/:has#browser_compatibility).

Sobald Sie eine Liste der Technologien identifiziert haben, die Sie verwenden wollen und die nicht universell unterstützt werden, ist es eine gute Idee, zu recherchieren, in welchen Browsern sie unterstützt werden, und welche verwandten Techniken nützlich sind. Siehe [Hilfe finden](#hilfe_finden) unten.

### HTML-Fallback-Verhalten

Einige Probleme können einfach gelöst werden, indem man sich die natürliche Arbeitsweise von HTML/CSS zunutze macht.

Nicht erkannte HTML-Elemente werden vom Browser als anonyme Inline-Elemente behandelt (im Wesentlichen Inline-Elemente ohne semantischen Wert, ähnlich wie {{htmlelement("span")}}-Elemente). Sie können sie immer noch bei ihren Namen nennen und mit CSS gestalten, z.B. — Sie müssen nur sicherstellen, dass sie sich so verhalten, wie Sie es wünschen. Gestalten Sie sie genauso wie jedes andere Element, einschließlich der Einstellung der `display`-Eigenschaft auf etwas anderes als `inline`, falls erforderlich.

Komplexere Elemente wie HTML [`<video>`](/de/docs/Web/HTML/Element/video), [`<audio>`](/de/docs/Web/HTML/Element/audio), [`<picture>`](/de/docs/Web/HTML/Element/picture), [`<object>`](/de/docs/Web/HTML/Element/object) und [`<canvas>`](/de/docs/Web/HTML/Element/canvas) (und andere Funktionen darüber hinaus) haben natürliche Mechanismen für Fallbacks, die hinzugefügt werden können, falls die verlinkten Ressourcen nicht unterstützt werden. Sie können Fallback-Inhalte zwischen den öffnenden und schließenden Tags hinzufügen, und nicht unterstützende Browser ignorieren effektiv das äußere Element und führen den eingebetteten Inhalt aus.

Beispiel:

```html
<video id="video" controls preload="metadata" poster="img/poster.jpg">
  <source
    src="video/tears-of-steel-battle-clip-medium.webm"
    type="video/webm" />
  <!-- Herunterladen anbieten -->
  <p>
    Ihr Browser unterstützt kein WebM-Video; hier ist ein Link, um das Video
    direkt
    <a href="video/tears-of-steel-battle-clip-medium.mp4">anzusehen</a>.
  </p>
</video>
```

Dieses Beispiel enthält einen einfachen Link, der es Ihnen erlaubt, das Video herunterzuladen, falls sogar der HTML-Videoplayer nicht funktioniert, so dass der Benutzer zumindest noch Zugriff auf das Video hat.

Ein weiteres Beispiel sind Formularelemente. Als neue [`<input>`](/de/docs/Web/HTML/Element/input)-Typen für die Eingabe spezifischer Informationen in Formulare eingeführt wurden, wie z.B. Zeiten, Daten, Farben, Zahlen usw., wenn ein Browser die neue Funktion nicht unterstützte, verwendete der Browser den Standard `type="text"`. Eingabetypen wurden hinzugefügt, die besonders auf mobilen Plattformen sehr nützlich sind, wo die Bereitstellung einer schmerzfreien Möglichkeit der Dateneingabe für die Benutzererfahrung sehr wichtig ist. Plattformen bieten je nach Eingabetyp unterschiedliche Benutzeroberflächen-Widgets an, wie z.B. ein Kalender-Widget zur Eingabe von Daten. Sollte ein Browser einen Eingabetyp nicht unterstützen, kann der Benutzer dennoch die benötigten Daten eingeben.

Das folgende Beispiel zeigt Eingaben für Datum und Uhrzeit:

```html
<form>
  <div>
    <label for="date">Geben Sie ein Datum ein:</label>
    <input id="date" type="date" />
  </div>
  <div>
    <label for="time">Geben Sie eine Uhrzeit ein:</label>
    <input id="time" type="time" />
  </div>
</form>
```

Die Ausgabe dieses Codes ist wie folgt:

{{EmbedGHLiveSample("learning-area/tools-testing/cross-browser-testing/html-css/forms-test", '100%', 150)}}

> [!NOTE]
> Sie können dies auch live als [forms-test.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/html-css/forms-test.html) auf GitHub sehen (sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/html-css/forms-test.html) an).

Wenn Sie sich das Beispiel ansehen, sehen Sie die UI-Funktionen in Aktion, wenn Sie versuchen, Daten einzugeben. Auf Geräten mit dynamischen Tastaturen werden typenspezifische Tastenfelder angezeigt. Auf einem nicht unterstützenden Browser werden die Eingaben einfach auf normale Texteingaben zurückgesetzt, was bedeutet, dass der Benutzer immer noch die richtigen Informationen eingeben kann.

### CSS-Fallback-Verhalten

CSS ist wohl besser bei Fallbacks als HTML. Wenn ein Browser eine Deklaration oder Regel nicht versteht, überspringt er sie einfach komplett, ohne sie anzuwenden oder einen Fehler zu erzeugen. Das mag frustrierend für Sie und Ihre Benutzer sein, wenn ein solcher Fehler in den Produktionscode gelangt, aber zumindest bedeutet das, dass die gesamte Seite nicht wegen eines Fehlers zusammenbricht, und wenn es clever verwendet wird, können Sie es zu Ihrem Vorteil nutzen.

Schauen wir uns ein Beispiel an — eine einfache Box, die mit CSS gestylt ist und etwas Styling mit verschiedenen CSS-Funktionen hat:

![Eine rote Pillen-Schaltfläche mit abgerundeten Ecken, Schattierung nach innen und Schlagschatten](blingy-button.png)

> [!NOTE]
> Sie können dieses Beispiel auch live auf GitHub sehen als [button-with-fallback.html](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/html-css/button-with-fallback.html) (sehen Sie sich auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/tools-testing/cross-browser-testing/html-css/button-with-fallback.html) an).

Der Button hat eine Reihe von Deklarationen für das Styling, aber die zwei, die uns am meisten interessieren, sind wie folgt:

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

Hier bieten wir eine [RGB](/de/docs/Web/CSS/color_value/rgb) {{cssxref("background-color")}}, die die Opazität beim Überfahren verändert, um dem Benutzer einen Hinweis zu geben, dass die Schaltfläche interaktiv ist, und einige halbtransparente Inset-{{cssxref("box-shadow")}}-Schatten, um der Schaltfläche etwas Textur und Tiefe zu verleihen. Obwohl jetzt vollständig unterstützt, waren RGB-Farben und Box-Schattierungen nicht immer verfügbar; beginnend in IE9. Browser, die keine RGB-Farben unterstützten, würden die Deklaration ignorieren, was bedeutete, dass in alten Browsern der Hintergrund überhaupt nicht angezeigt würde, sodass der Text unleserlich wäre — das ist überhaupt nicht gut!

![Schwer lesbare Pillen-Schaltfläche mit weißem Text auf einem fast weißen Hintergrund](unreadable-button.png)

Um dies zu beheben, haben wir eine zweite `background-color` Deklaration hinzugefügt, die nur eine Hex-Farbe angibt — dies wird weit zurück in wirklich alten Browsern unterstützt und dient als Fallback, wenn die modernen glänzenden Funktionen nicht funktionieren. Was passiert, ist, dass ein Browser, der diese Seite besucht, zuerst den ersten `background-color`-Wert anwendet; wenn er zur zweiten `background-color`-Deklaration gelangt, wird er den anfänglichen Wert mit diesem überschreiben, wenn er RGB-Farben unterstützt. Wenn nicht, wird er einfach die gesamte Deklaration ignorieren und weitergehen.

> [!NOTE]
> Dasselbe gilt für andere CSS-Funktionen wie [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries), [`@font-face`](/de/docs/Web/CSS/@font-face) und [`@supports`](/de/docs/Web/CSS/@supports) Blöcke — wenn sie nicht unterstützt werden, ignoriert der Browser sie einfach.

### Selektorunterstützung

Natürlich werden keine CSS-Funktionen überhaupt angewendet, wenn Sie nicht die richtigen [Selektoren](/de/docs/Learn/CSS/Building_blocks/Selectors) verwenden, um das Element auszuwählen, das Sie stylen möchten!

In einer durch Kommas getrennten Liste von Selektoren, wenn Sie einfach einen Selektor falsch schreiben, könnte er möglicherweise kein Element matchen. Wenn jedoch ein Selektor ungültig ist, wird die **ganze** Liste von Selektoren ignoriert, zusammen mit dem gesamten Stilblock. Aus diesem Grund sollten Sie nur eine `:-moz-` vorangestellte Pseudoklasse oder ein Pseudoelement in eine [erlaubte Selektorliste](/de/docs/Web/CSS/Selector_list#forgiving_selector_list) aufnehmen, wie `:where(::-moz-thumb)`. Schließen Sie keine `:-moz-` vorangestellte Pseudoklasse oder Pseudoelemente in eine durch Kommas getrennte Gruppe von Selektoren außerhalb einer [`:is()`](/de/docs/Web/CSS/:is) oder [`:where()`](/de/docs/Web/CSS/:where) erlaubten Selektorliste ein, da alle Browser außer Firefox den gesamten Block ignorieren werden. Beachten Sie, dass sowohl `:is()` als auch `:where()` als Parameter in anderen Selektorlisten übergeben werden können, einschließlich [`:has()`](/de/docs/Web/CSS/:has) und [`:not()`](/de/docs/Web/CSS/:not).

Wir finden es hilfreich, das zu stylende Element mit den Entwickler-Tools Ihres Browsers zu inspizieren und dann die Breadcrumb-Trail des DOM-Baums zu betrachten, die DOM-Inspektoren in der Regel bereitstellen, um zu sehen, ob Ihr Selektor im Vergleich dazu sinnvoll ist.

Zum Beispiel erhalten Sie in den Firefox-Entwicklertools diese Art von Ausgabe am unteren Rand des DOM-Inspektors:

![Das Breadcrumb der Elemente ist html > body > form > div.form > input#date](dom-breadcrumb-trail.png)

Wenn Sie zum Beispiel versuchen würden, diesen Selektor zu verwenden, würden Sie sehen können, dass er das gewünschte Eingabeelement nicht auswählen würde:

```css
form > #date
```

(Das `date`-Eingabeelement ist kein direktes Kind des `<form>`; Sie wären besser dran, einen allgemeinen Nachkommen-Selektor anstelle eines Kinder-Selektors zu verwenden).

### Umgang mit CSS-Präfixen

Ein weiteres Problemfeld sind CSS-Präfixe — diese sind ein Mechanismus, der ursprünglich verwendet wurde, um Browserherstellern zu ermöglichen, ihre eigene Version einer CSS- (oder JavaScript-) Funktion zu implementieren, während die Technologie sich noch in einem experimentellen Stadium befindet, sodass sie damit spielen und es richtig machen können, ohne mit Implementierungen anderer Browser oder den endgültigen unpräfixierten Implementierungen in Konflikt zu geraten.

Zum Beispiel verwendet Firefox `-moz-` und Chrome/Edge/Opera/Safari verwenden `-webkit-`. Andere Präfixe, denen Sie in altem Code begegnen können, die jedoch sicher entfernt werden können, sind `-ms-`, das von Internet Explorer und frühen Versionen von Edge verwendet wurde, und `-o`, das in den ursprünglichen Versionen von Opera verwendet wurde.

Präfixierte Funktionen sollten nie auf Produktionswebseiten verwendet werden — sie können ohne Vorwarnung verändert oder entfernt werden, möglicherweise Leistungsprobleme in alten Browserversionen verursachen, die sie benötigen, und waren die Ursache von plattformübergreifenden Problemen. Dies ist insbesondere dann ein Problem, wenn Entwickler beschließen, nur die `-webkit-` Version einer Eigenschaft zu verwenden, was implizierte, dass die Seite in anderen Browsern nicht funktionieren würde. Dies geschah tatsächlich so oft, dass andere Browserhersteller `-webkit-`-präfixierte Versionen mehrerer CSS-Eigenschaften implementierten. Während Browser immer noch einige präfixierte Eigenschaftsnamen, Eigenschaftswerte und Pseudoklassen unterstützen, werden experimentelle Funktionen jetzt hinter Flags platziert, damit Webentwickler sie während der Entwicklung testen können.

Wenn Sie ein Präfix verwenden, stellen Sie sicher, dass es benötigt wird und dass es sich um eine der wenigen verbleibenden präfixierten Funktionen handelt. Sie können nachsehen, welche Browser Präfixe auf den MDN-Referenzseiten benötigen, und auf Seiten wie [caniuse.com](https://caniuse.com/). Wenn Sie unsicher sind, können Sie auch feststellen, indem Sie einige Tests direkt in Browsern durchführen. Fügen Sie die standardmäßige unpräfixierte Version nach der präfixierten Stil-Deklaration hinzu; sie wird ignoriert, wenn sie nicht unterstützt wird und verwendet, wenn sie unterstützt wird.

```css
.masked {
  -webkit-mask-image: url(MDN.svg);
  mask-image: url(MDN.svg);
  -webkit-mask-size: 50%;
  mask-size: 50%;
}
```

Versuchen Sie dieses einfache Beispiel:

1. Verwenden Sie diese Seite oder eine andere Seite, die eine markante Überschrift oder ein anderes Block-Level-Element hat.
2. Rechts-/Cmd + klicken Sie auf das betreffende Element und wählen Sie Inspect/Element untersuchen (oder was auch immer die Option in Ihrem Browser ist) — dies sollte die Entwickler-Tools in Ihrem Browser öffnen, mit dem hervorgehobenen Element im DOM-Inspektor.
3. Suchen Sie nach einer Funktion, die Sie verwenden können, um dieses Element auszuwählen. Zum Beispiel hat diese Seite zum Zeitpunkt des Schreibens auf MDN ein Logo mit einer ID von `mdn-docs-logo`.
4. Speichern Sie eine Referenz auf dieses Element in einer Variablen, zum Beispiel:

   ```js
   const test = document.getElementById("mdn-docs-logo");
   ```

5. Versuchen Sie jetzt, einen neuen Wert für die CSS-Eigenschaft, an der Sie interessiert sind, auf diesem Element festzulegen; Sie können dies mithilfe der [style](/de/docs/Web/API/HTMLElement/style) Eigenschaft des Elements tun, z.B. versuchen Sie, diese in die JavaScript-Konsole einzugeben:

   ```js
   test.style.transform = "rotate(90deg)";
   ```

Wenn Sie anfangen, den Eigenschaftsname-Vertretung nach dem zweiten Punkt zu schreiben (beachten Sie, dass in JavaScript, CSS-Eigenschaftsnamen im {{Glossary("camel_case", "lower camel case")}}, nicht {{Glossary("kebab_case", "kebab-case")}} geschrieben sind), sollte die JavaScript-Konsole beginnen, die Namen der Eigenschaften, die im Browser existieren und mit dem, was Sie bisher geschrieben haben, übereinstimmen, automatisch zu vervollständigen. Dies ist nützlich, um herauszufinden, welche Eigenschaften in diesem Browser implementiert sind.

Wenn Sie moderne Funktionen einbeziehen müssen, testen Sie die Unterstützung der Funktion mit [`@supports`](/de/docs/Web/CSS/@supports), die es Ihnen ermöglicht, native Feature-Detektions-Tests zu implementieren und die präfixierte oder neue Funktion innerhalb des `@supports`-Blocks zu verschachteln.

### Probleme mit responsivem Design

Responsives Design ist die Praxis, Weblayouts zu erstellen, die sich an verschiedene Geräteformfaktoren anpassen — zum Beispiel unterschiedliche Bildschirmbreiten, Ausrichtungen (Porträt oder Landschaft) oder Auflösungen. Ein Desktop-Layout wird beispielsweise auf einem mobilen Gerät schrecklich aussehen, daher müssen Sie ein geeignetes mobiles Layout mit [Media Queries](/de/docs/Web/CSS/CSS_media_queries) bereitstellen und sicherstellen, dass es korrekt mit [Viewport](/de/docs/Web/HTML/Viewport_meta_tag) angewendet wird. Sie finden eine ausführliche Darstellung solcher Praktiken in [unserem Guide zu Responsive Design](/de/docs/Learn/CSS/CSS_layout/Responsive_Design).

Auflösung ist auch ein großes Thema — zum Beispiel benötigen mobile Geräte vermutlich weniger große, schwere Bilder als Desktop-Computer und haben möglicherweise langsamere Internetverbindungen oder sogar teure Datentarife, die verschwendete Bandbreite mehr zu einem Problem machen könnten. Außerdem können verschiedene Geräte eine Reihe unterschiedlicher Auflösungen haben, was bedeutet, dass kleinere Bilder verpixelt erscheinen könnten. Es gibt eine Reihe von Techniken, die es Ihnen ermöglichen, solche Probleme zu umgehen, von [Media Queries](/de/docs/Learn/CSS/CSS_layout/Responsive_Design#media_queries) bis zu komplexeren [techniken für responsive Bilder](/de/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images#Auflösungen_wechseln_unterschiedliche_Größen), einschließlich {{HTMLElement('picture')}} und die {{HTMLElement('img')}}-Elemente.[`srcset`](/de/docs/Web/HTML/Element/img#srcset) und [`größen`](/de/docs/Web/HTML/Element/img#sizes)-Attribute.

## Hilfe finden

Es gibt viele andere Probleme, auf die Sie bei HTML und CSS stoßen werden, was das Wissen darüber, wie man Antworten online findet, unschätzbar macht.

Zu den besten Informationsquellen gehören das Mozilla Developer Network (wo Sie gerade sind!), [stackoverflow.com](https://stackoverflow.com/) und [caniuse.com](https://caniuse.com/).

Um das Mozilla Developer Network (MDN) zu verwenden, machen die meisten Menschen eine Suchmaschinenanfrage nach der Technologie, zu der sie Informationen suchen, plus dem Begriff "mdn", zum Beispiel "mdn HTML video". MDN enthält mehrere nützliche Inhaltstypen:

- Referenzmaterial mit Informationen zur Browserunterstützung für clientseitige Webtechnologien, z.B. die [\<video>-Referenzseite](/de/docs/Web/HTML/Element/video).
- Andere unterstützende Referenzmaterialien, z.B. die [Leitfaden zu Medientypen und Formaten im Web](/de/docs/Web/Media/Formats),
- Nützliche Tutorials, die spezifische Probleme lösen, zum Beispiel [Einen plattformübergreifenden Videoplayer erstellen](/de/docs/Web/Media/Audio_and_video_delivery/cross_browser_video_player).

[caniuse.com](https://caniuse.com/) bietet Unterstützung Informationen, zusammen mit einigen nützlichen externen Ressourcen Links. Zum Beispiel sehen Sie unter <https://caniuse.com/#search=video> (Sie müssen nur die Funktion, nach der Sie suchen, in das Textfeld eingeben).

[stackoverflow.com](https://stackoverflow.com/) (SO) ist ein Forum, auf dem Sie Fragen stellen und von anderen Entwicklern Lösungen teilen lassen, zu bereits vorhandenen Beiträgen nachschauen und anderen Entwicklern helfen können. Sie sollten sich vor dem Verfassen einer neuen Frage umsehen und sehen, ob es bereits eine Antwort auf Ihre Frage gibt. Zum Beispiel haben wir nach "Autofokus bei HTML-Dialog deaktivieren" auf SO gesucht und sehr schnell [Autofokus mit HTML-Attributen in showModal deaktivieren](https://stackoverflow.com/questions/63267581/disable-showmodal-auto-focusing-using-html-attributes) gefunden.

Abgesehen davon, versuchen Sie, in Ihrer bevorzugten Suchmaschine nach einer Lösung für Ihr Problem zu suchen. Es ist oft nützlich, nach spezifischen Fehlermeldungen zu suchen, wenn Sie welche haben — andere Entwickler werden wahrscheinlich die gleichen Probleme gehabt haben wie Sie.

## Zusammenfassung

Jetzt sollten Sie mit den Hauptarten von plattformübergreifenden HTML- und CSS-Problemen vertraut sein, denen Sie in der Webentwicklung begegnen werden, und wissen, wie Sie sie beheben können.

{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/Testing_strategies","Learn/Tools_and_testing/Cross_browser_testing/JavaScript", "Learn/Tools_and_testing/Cross_browser_testing")}}
