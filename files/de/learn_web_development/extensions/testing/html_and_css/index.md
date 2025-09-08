---
title: Umgang mit häufigen HTML- und CSS-Problemen
short-title: Häufige HTML- und CSS-Probleme
slug: Learn_web_development/Extensions/Testing/HTML_and_CSS
l10n:
  sourceCommit: 0ca040b6a9cfd931558bd1d3a402707abddc1924
---

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Testing_strategies","Learn_web_development/Extensions/Testing/Feature_detection", "Learn_web_development/Extensions/Testing")}}

Nachdem wir die Bühne bereitet haben, werfen wir nun einen spezifischen Blick auf die häufigen Probleme mit HTML- und CSS-Code, die Ihnen in verschiedenen Browsern begegnen können, und welche Werkzeuge eingesetzt werden können, um diese Probleme zu verhindern oder zu beheben. Dies umfasst das Linting von Code, den Umgang mit CSS-Präfixen, die Verwendung von Entwickler-Tools im Browser zur Fehlerverfolgung, die Nutzung von Polyfills zur Erweiterung des Browser-Supports, das Beheben von Problemen beim responsiven Design und mehr.

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
          >Prinzipien des Browser-Tests</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        In der Lage sein, häufige HTML- und CSS-Probleme mit verschiedenen Browsern zu diagnostizieren und geeignete Werkzeuge und Techniken zu deren Behebung zu nutzen.
      </td>
    </tr>
  </tbody>
</table>

## Das Problem mit HTML und CSS

Einige der Probleme mit HTML und CSS liegen in der Tatsache begründet, dass beide Sprachen ziemlich einfach sind und Entwickler oft nicht sicherstellen, dass der Code gut ausgearbeitet, effizient und semantisch korrekt ist. Im schlimmsten Fall wird JavaScript verwendet, um den gesamten Inhalt und Stil einer Webseite zu generieren, was die Seiten unzugänglich und weniger performant macht (das Erzeugen von DOM-Elementen ist teuer). In anderen Fällen werden neue Features nicht durchgängig in allen Browsern unterstützt, was dazu führen kann, dass einige Features und Stile für manche Benutzer nicht funktionieren. Probleme mit responsivem Design sind ebenfalls häufig — eine Website, die in einem Desktop-Browser gut aussieht, kann auf einem mobilen Gerät eine schreckliche Erfahrung bieten, weil der Inhalt zu klein zum Lesen ist oder die Seite aufgrund aufwendiger Animationen langsam ist.

Lassen Sie uns schauen, wie wir Fehler bei der Verwendung von HTML/CSS in verschiedenen Browsern reduzieren können.

## Zuerst das Allgemeine beheben

Wir sagten im [ersten Artikel dieser Serie](/de/docs/Learn_web_development/Extensions/Testing/Introduction#testingdiscovery), dass es eine gute Strategie ist, zunächst in ein paar modernen Browsern auf Desktop/Mobilgeräten zu testen, um sicherzustellen, dass Ihr Code im Allgemeinen funktioniert, bevor Sie sich auf die Probleme mit verschiedenen Browsern konzentrieren.

In unseren Artikeln [Debugging HTML](/de/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML) und [Debugging CSS](/de/docs/Learn_web_development/Core/Styling_basics/Debugging_CSS) gaben wir einige wirklich grundlegende Anleitungen zum Debuggen von HTML/CSS — wenn Sie mit den Grundlagen nicht vertraut sind, sollten Sie diese Artikel auf jeden Fall studieren, bevor Sie weitermachen.

Grundsätzlich geht es darum, zu überprüfen, ob Ihr HTML- und CSS-Code korrekt aufgebaut ist und keine Syntaxfehler enthält.

> [!NOTE]
> Ein häufiges Problem mit CSS und HTML tritt auf, wenn verschiedene CSS-Regeln miteinander in Konflikt geraten. Dies kann besonders problematisch sein, wenn Sie Drittcode verwenden. Beispielsweise verwenden Sie möglicherweise ein CSS-Framework und stellen fest, dass einer der Klassennamen, den es verwendet, mit einem von Ihnen bereits für einen anderen Zweck verwendeten Namen kollidiert. Oder Sie stellen fest, dass ein von einer Art Drittanbieter-API generiertes HTML (zum Beispiel Werbebanner) einen Klassennamen oder eine ID enthält, die Sie bereits für einen anderen Zweck verwenden. Um sicherzustellen, dass dies nicht passiert, müssen Sie die von Ihnen verwendeten Tools zuerst recherchieren und Ihren Code um sie herum gestalten. Es lohnt sich auch, CSS zu "namespacen", z.B. wenn Sie ein Widget haben, stellen Sie sicher, dass es eine eindeutige Klasse hat, und beginnen Sie dann die Selektoren, die Elemente innerhalb des Widgets auswählen, mit dieser Klasse, sodass Konflikte weniger wahrscheinlich sind. Zum Beispiel `.audio-player ul a`.

### Validierung

Für HTML beinhaltet die Validierung, sicherzustellen, dass alle Ihre Tags ordnungsgemäß geschlossen und verschachtelt sind, dass Sie einen Doctype verwenden und dass Sie Tags für ihren korrekten Zweck verwenden. Eine gute Strategie ist es, Ihren Code regelmäßig zu validieren. Ein Service, der dies tun kann, ist der W3C [Markup Validation Service](https://validator.w3.org/), der es Ihnen ermöglicht, auf Ihren Code zu verweisen und eine Liste von Fehlern zurückzugeben:

![Die Webseite des HTML-Validators](validator.png)

CSS hat eine ähnliche Geschichte — Sie müssen überprüfen, ob Ihre Eigenschaftsnamen korrekt geschrieben sind, ob Eigenschaftswerte korrekt geschrieben sind und für die Eigenschaften, auf denen sie verwendet werden, gültig sind, ob Sie keine geschweiften Klammern vergessen haben, und so weiter. Das W3C bietet dafür auch einen [CSS Validator](https://jigsaw.w3.org/css-validator/) an.

### Linters

Eine weitere gute Option ist eine sogenannte Linter-Anwendung, die nicht nur Fehler aufzeigt, sondern auch Warnungen über schlechte Praktiken in Ihrem CSS und andere Punkte markieren kann. Linters können im Allgemeinen so angepasst werden, dass sie strenger oder entspannter in ihrer Fehler-/Warnberichterstattung sind.

Es gibt viele Online-Linter-Anwendungen, wie [Dirty Markup](https://www.10bestdesign.com/dirtymarkup/) für HTML, CSS und JavaScript. Diese Anwendungen ermöglichen es Ihnen, Ihren Code in ein Fenster einzufügen, und es werden alle Fehler mit Kreuzen markiert, die dann angeklickt werden können, um eine Fehlermeldung zu erhalten, die Ihnen mitteilt, was das Problem ist. Dirty Markup ermöglicht es Ihnen auch, Ihre Markup-Fehler mit dem _Clean_-Button zu beheben.

![Die Anwendung Dirty Markup zeigt die Meldung "Unexpected character in unquoted attribute" neben dem folgenden fehlerhaften HTML-Markup: <div id=combinators">](dirty-markup.png)

Es ist jedoch nicht sehr bequem, ständig Ihren Code auf eine Webseite kopieren und einfügen zu müssen, um seine Gültigkeit zu überprüfen. Was Sie wirklich wollen, ist ein Linter, der in Ihren normalen Arbeitsablauf passt und dabei ein Minimum an Aufwand erfordert.

Viele Code-Editoren haben Linter-Plugins. Zum Beispiel:

- [SublimeLinter](https://www.sublimelinter.com/) für Sublime Text
- [Notepad++ linter](https://sourceforge.net/projects/notepad-linter/)
- [VS Code linters](https://marketplace.visualstudio.com/search?target=vscode&category=Linters&sortBy=Installs)

### Entwicklungstools im Browser

Die in den meisten Browsern integrierten Entwickler-Tools verfügen auch über nützliche Werkzeuge zum Aufspüren von Fehlern, hauptsächlich für CSS.

> [!NOTE]
> HTML-Fehler tauchen nicht so leicht in Entwicklungstools auf, da der Browser versucht, schlecht formatiertes Markup automatisch zu korrigieren; der W3C-Validator ist der beste Weg, um HTML-Fehler zu finden — siehe [Validierung](#validierung) oben.

Ein Beispiel: Im Firefox zeigt der CSS-Inspektor nicht angewendete CSS-Deklarationen durchgestrichen an, mit einem Warn-Dreieck. Wenn Sie das Warn-Dreieck überfahren, erhalten Sie eine beschreibende Fehlermeldung:

![Die Entwickler-Tools streichen ungültiges CSS durch und fügen ein überhoverbares Warnsymbol hinzu](css-message-devtools.png)

Andere Entwicklertools in Browsern haben ähnliche Funktionen.

## Häufige Probleme zwischen Browsern

Nun wollen wir uns einige der häufigsten HTML- und CSS-Probleme ansehen, die in verschiedenen Browsern auftreten können. Die Hauptbereiche, die wir uns ansehen werden, sind das Fehlen von Unterstützung für moderne Features und Layoutprobleme.

### Browser, die moderne Features nicht unterstützen

Dies ist ein häufiges Problem, besonders wenn Sie alte Browser unterstützen müssen oder Sie Features verwenden, die in einigen Browsern implementiert sind, jedoch noch nicht in allen. Im Allgemeinen funktioniert die meiste grundlegende HTML- und CSS-Funktionalität (wie grundlegende HTML-Elemente, CSS-Grundfarben und Textstile) in allen Browsern, die Sie unterstützen möchten. Mehr Probleme treten auf, wenn Sie neuere HTML-, CSS- und API-Features verwenden wollen. Auf MDN werden die Browser-Kompatibilitätsdaten für jedes dokumentierte Feature angezeigt; sehen Sie zum Beispiel die [Browser-Support-Tabelle für die `:has()` Pseudo-Klasse](/de/docs/Web/CSS/:has#browser_compatibility).

Sobald Sie eine Liste von Technologien identifiziert haben, die Sie verwenden möchten und die nicht universell unterstützt werden, ist es eine gute Idee zu recherchieren, in welchen Browsern sie unterstützt werden und welche verwandten Techniken nützlich sind. Siehe [Hilfe finden](#hilfe_finden) unten.

### Fallback-Verhalten von HTML

Einige Probleme können gelöst werden, indem einfach das natürliche Verhalten von HTML/CSS ausgenutzt wird.

Nicht erkannte HTML-Elemente werden vom Browser als anonyme Inline-Elemente behandelt (effektiv Inline-Elemente ohne semantischen Wert, ähnlich wie {{htmlelement("span")}}-Elemente). Sie können sie dennoch mit ihren Namen ansprechen und mit CSS gestalten — Sie müssen nur sicherstellen, dass sie sich so verhalten, wie Sie es möchten. Stilieren Sie sie einfach wie jedes andere Element und setzen Sie beispielsweise die `display`-Eigenschaft auf etwas anderes als `inline`, falls nötig.

Komplexere Elemente wie HTML [`<video>`](/de/docs/Web/HTML/Reference/Elements/video), [`<audio>`](/de/docs/Web/HTML/Reference/Elements/audio), [`<picture>`](/de/docs/Web/HTML/Reference/Elements/picture), [`<object>`](/de/docs/Web/HTML/Reference/Elements/object) und [`<canvas>`](/de/docs/Web/HTML/Reference/Elements/canvas) (und andere Features darüber hinaus) haben natürliche Mechanismen für Fallbacks, die hinzugefügt werden, falls die verlinkten Ressourcen nicht unterstützt werden. Sie können Fallback-Inhalte zwischen den öffnenden und schließenden Tags hinzufügen, und nicht unterstützende Browser ignorieren effektiv das äußere Element und führen den verschachtelten Inhalt aus.

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

Dieses Beispiel enthält einen einfachen Link, der es dem Benutzer ermöglicht, das Video herunterzuladen, falls der HTML-Video-Player nicht funktioniert, sodass der Benutzer dennoch Zugriff auf das Video hat.

Ein weiteres Beispiel sind Formularelemente. Als neue [`<input>`](/de/docs/Web/HTML/Reference/Elements/input)-Typen eingeführt wurden, um spezifische Informationen in Formulare einzugeben, wie Zeiten, Daten, Farben, Zahlen usw., verwendeten Browser, die das neue Feature nicht unterstützten, standardmäßig `type="text"`. Input-Typen wurden hinzugefügt, die besonders auf mobilen Plattformen sehr nützlich sind, wo eine schmerzfreie Eingabe von Daten sehr wichtig für die Benutzererfahrung ist. Plattformen bieten verschiedene UI-Widgets je nach Eingabetyp, z. B. ein Kalender-Widget für die Eingabe von Daten. Sollte ein Browser keinen Eingabetyp unterstützen, kann der Benutzer dennoch die erforderlichen Daten eingeben.

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

Das Ergebnis dieses Codes ist wie folgt:

{{EmbedLiveSample("form-test", '100%', 100)}}

Sie können die **Play**-Schaltfläche drücken, um das Beispiel im MDN Playground zu öffnen und den Quellcode zu bearbeiten.

Wenn Sie sich das Beispiel ansehen, sehen Sie die UI-Funktionen in Aktion, während Sie versuchen, Daten einzugeben. Auf Geräten mit dynamischen Tastaturen werden typenspezifische Tastenfelder angezeigt. In einem nicht unterstützenden Browser werden die Eingaben einfach als normale Texteingaben angezeigt, sodass der Benutzer dennoch die korrekten Informationen eingeben kann.

### Fallback-Verhalten von CSS

CSS ist in Bezug auf Fallbacks besser als HTML. Wenn ein Browser auf eine Deklaration oder Regel stößt, die er nicht versteht, überspringt er sie einfach komplett, ohne sie anzuwenden oder einen Fehler zu werfen. Dies mag frustrierend für Sie und Ihre Benutzer sein, wenn solch ein Fehler unbemerkt in den Produktionscode rutscht, aber zumindest bedeutet es, dass die gesamte Site nicht wegen eines Fehlers abstürzt, und wenn es clever verwendet wird, können Sie diesen Umstand zu Ihrem Vorteil nutzen.

Lassen Sie uns ein Beispiel betrachten — ein einfacher Kasten, der mit CSS gestaltet ist und einige Stile von verschiedenen CSS-Features nutzt:

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

Sie können die **Play**-Schaltfläche drücken, um das Beispiel im MDN Playground zu öffnen und mit dem Quellcode zu spielen.

Der Button hat eine Anzahl Deklarationen, aber die interessantesten sind:

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

Hier bieten wir eine [RGB](/de/docs/Web/CSS/color_value/rgb) {{cssxref("background-color")}} an, die die Opazität beim Überfahren ändert, um dem Benutzer einen Hinweis darauf zu geben, dass der Button interaktiv ist, und einige halbtransparente {{cssxref("box-shadow")}}-Schatten innen, um dem Button etwas Textur und Tiefe zu geben. Während jetzt voll unterstützt, gab es RGB-Farben und Box-Schatten nicht schon immer; beginnend ab IE9. Browser, die keine RGB-Farben unterstützen, würden die Deklaration ignorieren, was bedeutet, dass der Hintergrund in alten Browsern gar nicht angezeigt würde, sodass der Text unlesbar wäre — gar nicht gut!

![Schwer zu erkennender Pillenbutton mit weißem Text auf einem fast weißen Hintergrund](unreadable-button.png)

Um dies zu lösen, haben wir eine zweite `background-color`-Deklaration hinzugefügt, die einfach das `red`-Farbkeyword spezifiziert — dies wird schon in sehr alten Browsern unterstützt und fungiert als Fallback, falls die modernen glänzenden Features nicht funktionieren. Was passiert, ist, dass ein Browser, der diese Seite besucht, zuerst die erste `background-color`-Deklaration anwendet; wenn er zur zweiten `background-color`-Deklaration kommt, überschreibt er den ursprünglichen Wert mit diesem Wert, wenn er RGB-Farben unterstützt. Falls nicht, ignoriert er die gesamte Deklaration und macht weiter.

> [!NOTE]
> Das Gleiche gilt für andere CSS-Features wie [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries), [`@font-face`](/de/docs/Web/CSS/@font-face) und [`@supports`](/de/docs/Web/CSS/@supports)-Blöcke — wenn sie nicht unterstützt werden, ignoriert der Browser sie einfach.

### Selektorsupport

Natürlich werden keine CSS-Features angewendet, wenn Sie nicht die richtigen [Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors) verwenden, um das Element auszuwählen, das Sie gestalten möchten!

In einer kommagetrennten Liste von Selektoren, wenn Sie einfach einen Selektor falsch schreiben, wird er möglicherweise kein Element auswählen. Wenn jedoch ein Selektor ungültig ist, wird die **gesamte** Selektorliste ignoriert, zusammen mit dem gesamten Stilblock. Aus diesem Grund sollten Sie nur ein `:-moz-` präfixiertes Pseudo-Klasse oder Pseudo-Element in einer [nachsichtigen Selektorenliste](/de/docs/Web/CSS/Selector_list#forgiving_selector_list) wie `:where(::-moz-thumb)` verwenden. Schließen Sie kein `:-moz-` präfixiertes Pseudo-Klasse oder Pseudo-Element in einer kommagetrennten Gruppe von Selektoren außerhalb einer [`:is()`](/de/docs/Web/CSS/:is) oder [`:where()`](/de/docs/Web/CSS/:where) nachsichtigen Selektorenliste ein, da alle Browser außer Firefox den gesamten Block ignorieren würden. Beachten Sie, dass sowohl `:is()` als auch `:where()` als Parameter in anderen Selektorenlisten verwendet werden können, einschließlich [`:has()`](/de/docs/Web/CSS/:has) und [`:not()`](/de/docs/Web/CSS/:not).

Wir finden es hilfreich, das Element, das Sie gestalten möchten, mit den Entwickler-Tools Ihres Browsers zu untersuchen, und dann den DOM-Baum-Breadcrumb zu betrachten, den DOM-Inspektoren tendenziell bereitstellen, um zu sehen, ob Ihr Selektor im Vergleich dazu Sinn ergibt.

Zum Beispiel erhalten Sie in den Entwickler-Tools von Firefox diese Art von Ausgabe am unteren Rand des DOM-Inspektors:

![Der Breadcrumb der Elemente ist html > body > form > div.form > input#date](dom-breadcrumb-trail.png)

Wenn Sie beispielsweise versuchen, diesen Selektor zu verwenden, könnten Sie feststellen, dass er das Eingabeelement nicht wie gewünscht auswählt:

```css
form > #date {
  /* … */
}
```

(Das `date` Formulareingabeelement ist kein direktes Kind des `<form>`; Sie wären besser dran, einen allgemeinen Nachfahrenselektor anstelle eines Kindelements zu verwenden).

### Umgang mit CSS-Präfixen

Ein weiteres Problemset ergibt sich aus CSS-Präfixen — diese sind ein Mechanismus, der ursprünglich verwendet wurde, um Browseranbietern zu ermöglichen, ihre eigene Version eines CSS- (oder JavaScript-) Features zu implementieren, während die Technologie sich noch in einem experimentellen Zustand befindet, sodass sie damit spielen und es richtig hinbekommen können, ohne in Konflikt mit Implementierungen anderer Browser oder der finalen, unveränderten Implementierungen zu geraten.

Firefox verwendet beispielsweise `-moz-` und Chrome/Edge/Opera/Safari verwenden `-webkit-`. Andere Präfixe, die Sie in altem Code finden und sicher entfernen können, sind `-ms-`, das von Internet Explorer und frühen Versionen von Edge verwendet wurde, und `-o`, das in den ursprünglichen Versionen von Opera verwendet wurde.

Präfixierte Features sollten niemals in Produktionswebsites verwendet werden — sie können sich ändern oder ohne Vorwarnung entfernt werden, können in alten Browserversionen, die sie benötigen, Leistungsprobleme verursachen, und waren Ursache von Problemen zwischen verschiedenen Browsern. Dies ist besonders problematisch, wenn beispielsweise Entwickler entscheiden, nur die `-webkit-` Version einer Eigenschaft zu verwenden, was impliziert, dass die Seite in anderen Browsern nicht funktionieren wird. Dies kam tatsächlich so oft vor, dass andere Browseranbieter `-webkit-` präfixierte Versionen mehrerer CSS-Eigenschaften implementierten. Während Browser immer noch einige präfigierte Eigenschaftsnamen, Eigenschaftswerte und Pseudo-Klassen unterstützen, werden experimentelle Features jetzt hinter Flags platziert, sodass Webentwickler sie während der Entwicklung testen können.

Falls Sie ein Präfix verwenden, stellen Sie sicher, dass es benötigt wird; dass die Eigenschaft eines der wenigen verbleibenden präfigierten Features ist. Sie können herausfinden, welche Browser Präfixe benötigen, auf den MDN-Referenzseiten, und auf Seiten wie [caniuse.com](https://caniuse.com/). Wenn Sie sich unsicher sind, können Sie es auch durch direktes Testen in Browsern herausfinden. Schließen Sie die standardmäßige unveränderte Version nach der präfigierten Stildeklaration ein; sie wird ignoriert, wenn sie nicht unterstützt wird, und verwendet, wenn sie unterstützt wird.

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
2. Rechtsklicken Sie (oder Cmd + Klick) auf das betreffende Element und wählen Sie Inspektion/Inspektieren (oder was auch immer die Option in Ihrem Browser ist) — dies sollte die Entwicklertools in Ihrem Browser öffnen, wobei das Element im DOM-Inspektor hervorgehoben ist.
3. Suchen Sie nach einem Feature, das Sie verwenden können, um dieses Element auszuwählen. Zum Beispiel hat diese Seite auf MDN zum Zeitpunkt des Schreibens ein Logo mit einer ID von `mdn-docs-logo`.
4. Speichern Sie eine Referenz auf dieses Element in einer Variablen, z.B.:

   ```js
   const test = document.getElementById("mdn-docs-logo");
   ```

5. Versuchen Sie nun, einen neuen Wert für die CSS-Eigenschaft, die Sie interessiert, auf diesem Element zu setzen; das können Sie mit der [style](/de/docs/Web/API/HTMLElement/style) Eigenschaft des Elements tun, z.B. versuchen Sie diese in die JavaScript-Konsole einzugeben:

   ```js
   test.style.transform = "rotate(90deg)";
   ```

Wenn Sie beginnen, den Eigenschaftsnamen nach dem zweiten Punkt (beachten Sie, dass in JavaScript CSS-Eigenschaftsnamen in {{Glossary("camel_case", "Lower Camel Case")}} und nicht in {{Glossary("kebab_case", "Kebab-Case")}} geschrieben werden) zu tippen, sollte die JavaScript-Konsole beginnen, die Namen der existierenden Eigenschaften im Browser, die mit dem bisher geschriebenen übereinstimmen, automatisch zu vervollständigen. Dies ist nützlich, um herauszufinden, welche Eigenschaften in diesem Browser implementiert sind.

Wenn Sie moderne Features einbeziehen müssen, testen Sie die Unterstützung von Features mit [`@supports`](/de/docs/Web/CSS/@supports), was es Ihnen ermöglicht, native Feature-Erkennungstests zu implementieren und das präfigierte oder neue Feature innerhalb des `@supports` Blocks zu verschachteln.

### Probleme mit responsivem Design

Responsives Design ist die Praxis, Weblayouts zu erstellen, die sich an unterschiedliche Geräteformfaktoren anpassen — zum Beispiel verschiedene Bildschirmbreiten, Ausrichtungen (Hoch- oder Querformat) oder Auflösungen. Ein Desktop-Layout sieht beispielsweise in einem mobilen Gerät schrecklich aus, daher müssen Sie ein geeignetes mobiles Layout mit Hilfe von [Media Queries](/de/docs/Web/CSS/CSS_media_queries) bereitstellen und sicherstellen, dass es ordnungsgemäß mit dem [Viewport](/de/docs/Web/HTML/Guides/Viewport_meta_element) angewendet wird. Sie können eine detaillierte Beschreibung solcher Praktiken in [unserem Tutorial zum responsiven Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design) finden.

Auflösung ist ebenfalls ein großes Problem — zum Beispiel benötigen mobile Geräte weniger wahrscheinlich große schwere Bilder als Desktops, und sie haben möglicherweise langsamere Internetverbindungen und möglicherweise sogar teurere Datentarife, was verschwendete Bandbreite zu einem größeren Problem macht. Darüber hinaus können verschiedene Geräte eine Reihe von unterschiedlichen Auflösungen haben, was bedeutet, dass kleinere Bilder pixelig erscheinen könnten. Es gibt eine Reihe von Techniken, die Ihnen helfen, solche Probleme zu umgehen, von [Media Queries](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design#media_queries) bis hin zu komplexeren [Techniken für responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images#resolution_switching_different_sizes), einschließlich {{HTMLElement('picture')}} und dem {{HTMLElement('img')}} Element, das [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset) und [`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes) Attribute hat.

## Hilfe finden

Es gibt viele weitere Fragen, die Ihnen mit HTML und CSS begegnen werden, wodurch Kenntnisse darüber, wie Sie online nach Antworten suchen, unverzichtbar sind.

Unter den besten Informationsquellen sind das Mozilla Developer Network (das ist, wo Sie jetzt sind!), [stackoverflow.com](https://stackoverflow.com/) und [caniuse.com](https://caniuse.com/).

Um das Mozilla Developer Network (MDN) zu nutzen, machen die meisten Menschen eine Suchmaschine-Suche nach der Technologie, die sie interessiert, plus den Begriff "mdn", zum Beispiel "mdn HTML video". MDN enthält verschiedene nützliche Inhaltsarten:

- Referenzmaterial mit Informationen zur Browser-Kompatibilität für clientseitige Webtechnologien, z.B. die [`<video>` Referenzseite](/de/docs/Web/HTML/Reference/Elements/video).
- Weitere unterstützende Referenzmaterialien, zum Beispiel unser [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Guides/Formats),
- Nützliche Tutorials, die spezifische Probleme lösen, zum Beispiel [Erstellen eines plattformübergreifenden Video-Players](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player).

[caniuse.com](https://caniuse.com/) bietet Unterstützungsinformationen zusammen mit einigen nützlichen externen Ressourcenlinks. Zum Beispiel sehen Sie <https://caniuse.com/#search=video> (Sie müssen nur das Feature, das Sie suchen, in das Textfeld eingeben).

[stackoverflow.com](https://stackoverflow.com/) (SO) ist ein Forumsportal, auf dem Sie Fragen stellen können und Kollegen Entwickler ihre Lösungen teilen, vorherige Posts durchsuchen und anderen Entwicklern helfen können. Es wird empfohlen zu schauen, ob es bereits eine Antwort auf Ihre Frage gibt, bevor Sie eine neue Frage einstellen. Zum Beispiel suchten wir nach "Autofokus im HTML-Dialog deaktivieren" auf SO und fanden sehr schnell [Disable showModal auto-focusing using HTML attributes](https://stackoverflow.com/questions/63267581/disable-showmodal-auto-focusing-using-html-attributes).

Abgesehen davon, versuchen Sie, mit Ihrer bevorzugten Suchmaschine nach einer Antwort auf Ihr Problem zu suchen. Es ist oft nützlich, nach spezifischen Fehlermeldungen zu suchen, wenn Sie diese haben — andere Entwickler werden wahrscheinlich dieselben Probleme gehabt haben wie Sie.

## Zusammenfassung

Jetzt sollten Ihnen die Haupttypen von HTML- und CSS-Problemen, die Ihnen bei der Webentwicklung in verschiedenen Browsern begegnen können, und wie Sie sie beheben können, vertraut sein.

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Testing_strategies","Learn_web_development/Extensions/Testing/Feature_detection", "Learn_web_development/Extensions/Testing")}}
