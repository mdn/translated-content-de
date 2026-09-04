---
title: Umgang mit häufigen HTML- und CSS-Problemen
short-title: Häufige HTML- und CSS-Probleme
slug: Learn_web_development/Extensions/Testing/HTML_and_CSS
l10n:
  sourceCommit: 6030ef1aadf967b80e2c79c3d3463cccc8ea0c95
---

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Testing_strategies","Learn_web_development/Extensions/Testing/Feature_detection", "Learn_web_development/Extensions/Testing")}}

Nun, da die Grundlagen gelegt sind, werden wir uns speziell mit den häufigen Browser-übergreifenden Problemen befassen, die Sie in HTML- und CSS-Code antreffen werden und welche Werkzeuge verwendet werden können, um Probleme zu verhindern oder zu beheben. Dazu gehört das Überprüfen des Codes mittels Linting, der Umgang mit CSS-Präfixen, die Verwendung von Entwicklertools im Browser zur Fehlersuche, die Verwendung von Polyfills, um Unterstützung für Browser hinzuzufügen, die Bewältigung von Problemen mit responsivem Design und mehr.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
        <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a>; eine Vorstellung von den
        <a
          href="/de/docs/Learn_web_development/Extensions/Testing/Introduction"
          >Grundprinzipien des Browser-übergreifenden Testens</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        In der Lage zu sein, häufige HTML- und CSS-Browser-übergreifende Probleme zu diagnostizieren und geeignete Werkzeuge und Techniken zu verwenden, um diese zu beheben.
      </td>
    </tr>
  </tbody>
</table>

## Die Probleme mit HTML und CSS

Einige Probleme mit HTML und CSS liegen darin, dass beide Sprachen relativ einfach sind und Entwickler sie oft nicht ernst genug nehmen, was die Sicherstellung eines gut gestalteten, effizienten und semantisch richtigen Codes betrifft, der den Zweck der Elemente auf der Seite beschreibt. Im schlimmsten Fall wird JavaScript verwendet, um den gesamten Inhalt und das Design der Webseite zu erzeugen, was Ihre Seiten unzugänglich und weniger performant macht (das Erzeugen von DOM-Elementen ist teuer). In anderen Fällen werden neue Funktionen nicht konsistent in allen Browsern unterstützt, was dazu führen kann, dass einige Funktionen und Stile für einige Benutzer nicht funktionieren. Auch Probleme mit responsivem Design sind häufig — eine Seite, die in einem Desktop-Browser gut aussieht, kann auf einem mobilen Gerät eine schlechte Erfahrung bieten, weil der Inhalt zu klein zum Lesen ist oder die Seite möglicherweise langsam ist aufgrund von aufwendigen Animationen.

Lassen Sie uns fortfahren und untersuchen, wie wir Browser-übergreifende Fehler, die bei HTML/CSS entstehen, reduzieren können.

## Zunächst: Allgemeine Probleme beheben

Wir haben im [ersten Artikel dieser Serie](/de/docs/Learn_web_development/Extensions/Testing/Introduction#testingdiscovery) gesagt, dass eine gute Strategie darin besteht, zuerst in ein paar modernen Browsern auf Desktop/Mobil zu testen, um sicherzustellen, dass Ihr Code im Allgemeinen funktioniert, bevor Sie sich auf die Browser-übergreifenden Probleme konzentrieren.

In unseren Artikeln [Debugging HTML](/de/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML) und [Debugging CSS](/de/docs/Learn_web_development/Core/Styling_basics/Debugging_CSS) haben wir einige wirklich grundlegende Anleitungen zum Debuggen von HTML/CSS bereitgestellt — falls Sie mit den Grundlagen nicht vertraut sind, sollten Sie diese Artikel definitiv studieren, bevor Sie weitermachen.

Grundsätzlich geht es darum zu überprüfen, ob Ihr HTML- und CSS-Code gut formatiert ist und keine Syntaxfehler enthält.

> [!NOTE]
> Ein häufiges Problem mit CSS und HTML entsteht, wenn verschiedene CSS-Regeln miteinander in Konflikt geraten. Dies kann besonders problematisch sein, wenn Sie Code von Drittanbietern verwenden. Zum Beispiel könnten Sie ein CSS-Framework verwenden und feststellen, dass einer der Klassennamen, die es verwendet, mit einem Namen kollidiert, den Sie bereits für einen anderen Zweck verwendet haben. Oder Sie könnten feststellen, dass von einer Art Drittanbieter-API generiertes HTML (zum Beispiel Anzeigenbanner) einen Klassennamen oder eine ID enthält, die Sie bereits für einen anderen Zweck verwenden. Um sicherzustellen, dass dies nicht passiert, müssen Sie die von Ihnen verwendeten Werkzeuge zuerst untersuchen und Ihren Code um diese herum gestalten. Es lohnt sich auch, CSS zu "namespace", z.B. wenn Sie ein Widget haben, stellen Sie sicher, dass es eine eindeutige Klasse hat, und beginnen Sie dann die Selektoren, die Elemente im Widget auswählen, mit dieser Klasse, sodass Konflikte weniger wahrscheinlich sind. Beispiel: `.audio-player ul a`.

### Validierung

Bei HTML umfasst die Validierung die Sicherstellung, dass alle Ihre Tags korrekt geschlossen und verschachtelt sind, Sie einen Doctype verwenden und Tags für ihren korrekten Zweck verwenden. Eine gute Strategie ist es, Ihren Code regelmäßig zu validieren. Ein Dienst, der dies tun kann, ist der W3C [Markup Validation Service](https://validator.w3.org/), der es Ihnen ermöglicht, auf Ihren Code zu verweisen und eine Liste von Fehlern zurückzugeben:

![Die HTML-Validator-Homepage](validator.png)

Bei CSS ist die Geschichte ähnlich — Sie müssen überprüfen, dass Ihre Eigenschaftsnamen richtig geschrieben sind, Eigenschaftswerte korrekt geschrieben und für die Eigenschaften, auf denen sie verwendet werden, gültig sind, Sie keine geschweiften Klammern vergessen haben usw. Auch hierfür hat das W3C einen [CSS-Validator](https://jigsaw.w3.org/css-validator/) zur Verfügung.

### Linter

Eine weitere gute Option ist die Verwendung einer sogenannten Linter-Anwendung, die nicht nur Fehler aufzeigt, sondern auch Warnungen über schlechte Praktiken in Ihrem CSS und andere Punkte anzeigen kann. Linter können in der Regel angepasst werden, um strenger oder entspannter bei der Fehler-/Warnberichterstattung zu sein.

Es gibt viele Online-Linter-Anwendungen, wie [Dirty Markup](https://www.10bestdesign.com/dirtymarkup/) für HTML, CSS und JavaScript. Diese ermöglichen es Ihnen, Ihren Code in ein Fenster einzufügen, und es hebt Fehler mit Kreuzen hervor, die dann überfahren werden können, um eine Fehlermeldung zu erhalten, die Sie darüber informiert, was das Problem ist. Dirty Markup ermöglicht es Ihnen auch, Korrekturen an Ihrem Markup über die _Clean_-Schaltfläche vorzunehmen.

![Dirty Markup-Anwendung zeigt die Nachricht "Unerwartetes Zeichen in nicht zitiertem Attribut" über dem folgenden fehlerhaften HTML-Markup an: <div id=combinators">"](dirty-markup.png)

Es ist jedoch sehr unpraktisch, Ihren Code mehrmals auf eine Webseite kopieren und einfügen zu müssen, um dessen Gültigkeit zu überprüfen. Was Sie wirklich wollen, ist ein Linter, der sich mit minimalem Aufwand in Ihre normale Arbeitsweise einfügt.

Viele Code-Editoren haben Linter-Plugins. Zum Beispiel:

- [SublimeLinter](https://www.sublimelinter.com/) für Sublime Text
- [Notepad++ Linter](https://sourceforge.net/projects/notepad-linter/)
- [VS Code Linters](https://marketplace.visualstudio.com/search?target=vscode&category=Linters&sortBy=Installs)

### Browser-Entwicklertools

Die in den meisten Browsern integrierten Entwicklertools bieten ebenfalls nützliche Funktionen zur Fehlersuche, hauptsächlich für CSS.

> [!NOTE]
> HTML-Fehler werden in Entwicklerwerkzeugen nicht so leicht angezeigt, da der Browser versucht, schlecht geformtes Markup automatisch zu korrigieren; der W3C-Validator ist der beste Weg, um HTML-Fehler zu finden — siehe [Validierung](#validierung) oben.

Ein Beispiel: Im Firefox zeigt der CSS-Inspektor CSS-Deklarationen, die nicht angewendet werden, durchgestrichen mit einem Warndreieck an. Durch Überfahren des Warndreiecks wird eine beschreibende Fehlermeldung bereitgestellt:

![Die Entwicklertools streichen ungültiges CSS durch und fügen ein überfahrbares Warnsymbol hinzu](css-message-devtools.png)

Andere Browser-Entwicklertools haben ähnliche Funktionen.

## Häufige Browser-übergreifende Probleme

Schauen wir uns nun einige der häufigsten Browser-übergreifenden HTML- und CSS-Probleme an. Die Hauptbereiche, die wir betrachten werden, sind das Fehlen von Unterstützung für moderne Funktionen und Layout-Probleme.

### Browser unterstützen moderne Funktionen nicht

Dies ist ein häufiges Problem, insbesondere wenn Sie alte Browser unterstützen müssen oder Funktionen verwenden, die in einigen Browsern implementiert sind, jedoch noch nicht in allen. Im Allgemeinen funktioniert die meiste grundlegende HTML- und CSS-Funktionalität (wie grundlegende HTML-Elemente, CSS-Grundfarben und Textgestaltung) in allen Browsern, die Sie unterstützen möchten; mehr Probleme treten auf, wenn Sie beginnen, neuere HTML-, CSS- und API-Funktionen zu nutzen. MDN zeigt für jede dokumentierte Funktion Browser-Kompatibilitätsdaten an; siehe zum Beispiel die [Browser-Unterstützungstabelle für die `:has()` Pseudo-Klasse](/de/docs/Web/CSS/Reference/Selectors/:has#browser_compatibility).

Sobald Sie eine Liste von Technologien identifiziert haben, die Sie verwenden möchten und die nicht universell unterstützt werden, ist es ratsam, zu recherchieren, in welchen Browsern sie unterstützt werden und welche verwandten Techniken nützlich sind. Siehe [Hilfsmittel finden](#hilfsmittel_finden) unten.

### HTML-Fallback-Verhalten

Einige Probleme können einfach durch das natürliche Verhalten von HTML/CSS gelöst werden.

Nicht erkannte HTML-Elemente werden vom Browser als anonyme Inline-Elemente behandelt (effektiv Inline-Elemente ohne semantischen Wert, ähnlich wie {{htmlelement("span")}}-Elemente). Sie können sich weiterhin auf sie beziehen und sie mit CSS stylen, zum Beispiel — Sie müssen nur sicherstellen, dass sie sich so verhalten, wie Sie es möchten. Stylen Sie sie einfach wie jedes andere Element, einschließlich der Einstellung der `display`-Eigenschaft auf etwas anderes als `inline`, falls erforderlich.

Komplexere Elemente wie HTML [`<video>`](/de/docs/Web/HTML/Reference/Elements/video), [`<audio>`](/de/docs/Web/HTML/Reference/Elements/audio), [`<picture>`](/de/docs/Web/HTML/Reference/Elements/picture), [`<object>`](/de/docs/Web/HTML/Reference/Elements/object) und [`<canvas>`](/de/docs/Web/HTML/Reference/Elements/canvas) (und andere Funktionen) haben natürliche Mechanismen für Fallbacks, die hinzugefügt werden können, falls die verlinkten Ressourcen nicht unterstützt werden. Sie können Fallback-Inhalte zwischen den öffnenden und schließenden Tags hinzufügen, und nicht unterstützende Browser ignorieren effektiv das äußere Element und führen den eingebetteten Inhalt aus.

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

Dieses Beispiel enthält einen einfachen Link, der es ermöglicht, das Video herunterzuladen, falls selbst der HTML-Video-Player nicht funktioniert, sodass der Benutzer zumindest das Video weiterhin ansehen kann.

Ein weiteres Beispiel sind Formularelemente. Als neue [`<input>`](/de/docs/Web/HTML/Reference/Elements/input)-Typen eingeführt wurden, um spezifische Informationen in Formulare einzugeben, wie z.B. Zeiten, Daten, Farben, Zahlen usw., verwendete der Browser standardmäßig `type="text"`, falls eine neue Funktion nicht unterstützt wurde. Input-Typen wurden hinzugefügt, die besonders nützlich sind, insbesondere auf mobilen Plattformen, wo es sehr wichtig für die Benutzererfahrung ist, eine reibungslose Möglichkeit zur Eingabe von Daten zu bieten. Plattformen bieten je nach Eingabetyp unterschiedliche UI-Widgets, z. B. ein Kalender-Widget zur Eingabe von Daten. Sollte ein Browser einen Eingabetyp nicht unterstützen, kann der Benutzer dennoch die erforderlichen Daten eingeben.

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

Die Ausgabe dieses Codes ist wie folgt:

{{EmbedLiveSample("form-test", '100%', 100)}}

Sie können die **Play**-Taste drücken, um das Beispiel im MDN Playground zu öffnen und den Quellcode zu bearbeiten.

Wenn Sie das Beispiel anzeigen, sehen Sie die UI-Funktionen in Aktion, wenn Sie versuchen, Daten einzugeben. Auf Geräten mit dynamischen Tastaturen werden typenspezifische Tastaturen angezeigt. In einem nicht unterstützenden Browser werden die Eingaben einfach zu normalen Texteingaben zurückgesetzt, was bedeutet, dass der Benutzer dennoch die korrekten Informationen eingeben kann.

### CSS-Fallback-Verhalten

CSS ist im Vergleich zu HTML möglicherweise besser für Fallbacks geeignet. Wenn ein Browser auf eine Deklaration oder Regel stößt, die er nicht versteht, überspringt er sie einfach komplett, ohne sie anzuwenden oder einen Fehler auszugeben. Das kann für Sie und Ihre Benutzer frustrierend sein, wenn ein solcher Fehler in den Produktionscode gelangt, aber zumindest bedeutet es, dass die ganze Seite nicht aufgrund eines Fehlers zusammenbricht, und bei geschickter Nutzung können Sie mit ihm zu Ihrem Vorteil arbeiten.

Lassen Sie uns ein Beispiel betrachten — eine einfache Box, die mit CSS gestylt ist und einige Stilmittel durch verschiedene CSS-Funktionen erhält:

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

Die Schaltfläche hat eine Reihe von Deklarationen angewendet, aber die, die uns am meisten interessieren, sind die folgenden:

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

Hier bieten wir eine [RGB](/de/docs/Web/CSS/Reference/Values/color_value/rgb) {{cssxref("background-color")}}, die die Deckkraft bei Hover ändert, um dem Benutzer einen Hinweis zu geben, dass die Schaltfläche interaktiv ist, und einige halbtransparente eingearbeitete {{cssxref("box-shadow")}} Schatten, um der Schaltfläche ein wenig Textur und Tiefe zu geben. RGB-Farben und Box-Shadows werden seit IE9 vollständig unterstützt, waren aber nicht immer verfügbar. Browser, die keine RGB-Farben unterstützten, ignorierten die Deklaration, sodass in alten Browsern der Hintergrund einfach überhaupt nicht dargestellt wurde, was bedeutete, dass der Text unlesbar war, also überhaupt nicht gut!

![Schwer zu erkennende Pillenschaltfläche mit weißem Text auf fast weißem Hintergrund](unreadable-button.png)

Um dies zu beheben, haben wir eine anfängliche `background-color`-Deklaration hinzugefügt, die einfach nur das `red`-Farbwort angibt — dies wird schon weit zurück in wirklich alten Browsern unterstützt und dient als Fallback, falls die modernen glänzenden Funktionen nicht funktionieren. Was passiert, ist, dass ein Browser, der diese Seite besucht, zuerst den ersten `background-color`-Wert anwendet; wenn er die zweite `background-color`-Deklaration erreicht, wird er den Anfangswert mit diesem Wert überschreiben, wenn er RGB-Farben unterstützt. Wenn nicht, ignoriert er die gesamte Deklaration einfach und macht weiter.

> [!NOTE]
> Das Gleiche gilt für andere CSS-Funktionen wie [Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using), {{cssxref("@font-face")}} und {{cssxref("@supports")}} Blöcke — wenn sie nicht unterstützt werden, ignoriert der Browser sie einfach.

### Selektorunterstützung

Natürlich werden keine CSS-Funktionen angewendet, wenn Sie nicht die richtigen [Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors) verwenden, um das Element auszuwählen, das Sie stylen möchten!

In einer durch Kommas getrennten Liste von Selektoren, wenn Sie einfach einen Selktor falsch schreiben, könnte es kein Element auswählen. Wenn jedoch ein Selektor ungültig ist, wird die **gesamte** Liste von Selektoren ignoriert, zusammen mit dem gesamten Stilblock. Aus diesem Grund schließen Sie **nur** eine `:-moz-`-vorzeichenbehaftete Pseudoklasse oder ein Pseudoelement in eine [verzeihende Selektorliste](/de/docs/Web/CSS/Reference/Selectors/Selector_list#forgiving_selector_list) ein, wie `:where(::-moz-thumb)`. Schließen Sie keine `:-moz-`-vorzeichenbehaftete Pseudoklasse oder ein Pseudoelement in eine durch Kommas getrennte Gruppe von Selektoren außerhalb einer {{cssxref(":is()")}} oder {{cssxref(":where()")}} verzeihenden Selektorliste ein, da alle Browser außer Firefox den gesamten Block ignorieren. Beachten Sie, dass sowohl `:is()` als auch `:where()` als Parameter in anderen Selektorlisten enthalten sein können, einschließlich {{cssxref(":has()")}} und {{cssxref(":not()")}}.

Wir finden es hilfreich, das Element, das Sie stylen möchten, mit den Entwicklertools Ihres Browsers zu inspizieren und dann den DOM-Strukturpfad, den DOM-Inspektoren tendenziell bereitstellen, zu betrachten, um zu sehen, ob Ihr Selektor im Vergleich dazu sinnvoll ist.

Zum Beispiel erhalten Sie in den Firefox-Entwicklertools diese Art von Ausgabe am unteren Rand des DOM-Inspektors:

![Das Breadcrumb der Elemente ist html > body > form > div.form > input#date](dom-breadcrumb-trail.png)

Wenn Sie zum Beispiel diesen Selektor verwenden würden, würden Sie sehen, dass er das Input-Element nicht wie gewünscht auswählt:

```css
form > #date {
  /* … */
}
```

(Das `date` Formular-Input ist kein direktes Kind des `<form>`; Sie wären besser dran, einen allgemeinen Nachfahrenselektor anstelle eines Kindselektors zu verwenden).

### Umgang mit CSS-Präfixen

Eine andere Gruppe von Problemen ergibt sich aus den CSS-Präfixen — diese sind ein Mechanismus, der ursprünglich verwendet wurde, um Browseranbietern zu ermöglichen, ihre eigene Version einer CSS- (oder JavaScript-)Funktion zu implementieren, während die Technologie sich noch in einem experimentellen Zustand befindet, damit sie mit ihr spielen und sie richtig machen können, ohne in Konflikt mit den Implementierungen anderer Browser oder den endgültigen, nicht vorzeichenbehafteten Implementierungen zu geraten.

Zum Beispiel verwendet Firefox `-moz-` und Chrome/Edge/Opera/Safari verwenden `-webkit-`. Andere Präfixe, die Sie in altem Code finden können und die sicher entfernt werden können, sind `-ms-`, welches von Internet Explorer und frühen Versionen von Edge verwendet wurde, und `-o`, welches in den ursprünglichen Versionen von Opera verwendet wurde.

Vorzeichenbehaftete Funktionen sollten niemals in Produktionswebseiten verwendet werden — sie können ohne Vorwarnung geändert oder entfernt werden, können Leistungsprobleme in alten Browser-Versionen verursachen, die sie benötigen, und haben zu Browser-übergreifenden Problemen geführt. Dies ist besonders dann ein Problem, wenn Entwickler sich entscheiden, nur die `-webkit-`-Version einer Eigenschaft zu verwenden, was implizierte, dass die Seite in anderen Browsern nicht funktioniert. Dies passierte tatsächlich so oft, dass andere Browseranbieter `-webkit-`-vorzeichenbehaftete Versionen von mehreren CSS-Eigenschaften implementierten. Während Browser immer noch einige vorzeichenbehaftete Eigenschaftsnamen, Eigenschaftswerte und Pseudoklassen unterstützen, werden jetzt experimentelle Funktionen hinter Flags eingeführt, sodass Webentwickler sie während der Entwicklung testen können.

Falls Sie ein Präfix verwenden müssen, stellen Sie sicher, dass es erforderlich ist; dass die Eigenschaft zu den wenigen verbleibenden vorzeichenbehafteten Funktionen gehört. Sie können nachschlagen, welche Browser Präfixe benötigen, auf MDN-Referenzseiten und auf Seiten wie [caniuse.com](https://caniuse.com/). Wenn Sie unsicher sind, können Sie es auch herausfinden, indem Sie einige Tests direkt in Browsern durchführen. Schließen Sie die Standard-Version ohne Präfix nach der Präfix-Stildeklaration ein; es wird ignoriert, wenn nicht unterstützt und verwendet, wenn unterstützt.

```css
.masked {
  -webkit-mask-image: url("MDN.svg");
  mask-image: url("MDN.svg");
  -webkit-mask-size: 50%;
  mask-size: 50%;
}
```

Probieren Sie dieses einfache Beispiel aus:

1. Verwenden Sie diese Seite oder eine andere Seite, die eine auffällige Überschrift oder ein anderes Blockelement hat.
2. Klicken Sie mit der rechten Maus-/Befehlstaste auf das betreffende Element und wählen Sie Inspektion/Inspektierelement (oder welche Option auch immer in Ihrem Browser vorhanden ist) — dies sollte die Entwicklertools in Ihrem Browser öffnen und das Element im DOM-Inspektor hervorheben.
3. Suchen Sie nach einer Funktion, die Sie verwenden können, um dieses Element auszuwählen. Zum Beispiel hat zum Zeitpunkt des Schreibens diese Seite auf MDN ein Logo mit einer ID von `mdn-docs-logo`.
4. Speichern Sie eine Referenz zu diesem Element in einer Variablen, zum Beispiel:

   ```js
   const test = document.getElementById("mdn-docs-logo");
   ```

5. Versuchen Sie nun, einen neuen Wert für die CSS-Eigenschaft, an der Sie interessiert sind, auf dieses Element anzuwenden; Sie können dies mit der [style](/de/docs/Web/API/HTMLElement/style) Eigenschaft des Elements tun, versuchen Sie zum Beispiel, diese in die JavaScript-Konsole einzugeben:

   ```js
   test.style.transform = "rotate(90deg)";
   ```

Während Sie anfangen, den Namen der Eigenschaften-Referenz nach dem zweiten Punkt zu tippen (beachten Sie, dass in JavaScript CSS-Eigenschaftsnamen in {{Glossary("camel_case", "lower camel case")}}, und nicht in {{Glossary("kebab_case", "kebab-case")}} geschrieben werden), sollte die JavaScript-Konsole beginnen, die Namen der Eigenschaften, die im Browser implementiert sind und mit dem, was Sie bisher geschrieben haben, übereinstimmen, automatisch zu vervollständigen. Dies ist nützlich, um herauszufinden, welche Eigenschaften in diesem Browser implementiert sind.

Wenn Sie moderne Funktionen einbinden müssen, verwenden Sie {{cssxref("@supports")}}, um die Unterstützung von Funktionen zu testen, mit welchem Sie native Funktionsnachweis-Tests implementieren können, und das vorzeichenbehaftete Feature oder das neue Feature innerhalb des `@supports`-Blocks einbetten können.

### Probleme mit responsivem Design

Responsives Design ist die Praxis, Weblayouts zu erstellen, die sich an verschiedene Geräteelemente anpassen — z. B. unterschiedliche Bildschirmbreiten, Ausrichtungen (Porträt oder Landschaft) oder Auflösungen. Ein Desktop-Layout zum Beispiel sieht auf einem Mobilgerät schrecklich aus, wenn es auf diesem betrachtet wird, also müssen Sie ein geeignetes Mobile-Layout bereitstellen, das durch [Media Queries](/de/docs/ZLearn_web_development/Core/CSS_layout/Responsive_Design) zugeordnet wird, und sicherstellen, dass es korrekt mit [viewport](/de/docs/Web/HTML/Reference/Elements/meta/name/viewport) angewendet wird. Eine detaillierte Darstellung solcher Praktiken finden Sie in [unserem Tutorial zu responsivem Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design).

Auch die Auflösung ist ein großes Problem — z. B. benötigen Mobilgeräte wahrscheinlich keine großen, schweren Bilder wie Desktop-Computer, und sie haben wahrscheinlich langsamere Internetverbindungen und möglicherweise teure Datentarife, die verschwendete Bandbreite zu einem größeren Problem machen. Darüber hinaus können verschiedene Geräte eine Reihe von unterschiedlichen Auflösungen aufweisen, was bedeutet, dass kleinere Bilder verschwommen erscheinen könnten. Es gibt eine Reihe von Techniken, mit denen Sie solche Probleme lösen können, die von [Media Queries](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design#media_queries) zu komplexeren [Techniken für responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images#resolution_switching_different_sizes) reichen, einschließlich {{HTMLElement('picture')}} und die {{HTMLElement('img')}} Elementattribute [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset) und [`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes).

## Hilfsmittel finden

Es gibt viele andere Probleme, auf die Sie mit HTML und CSS stoßen werden, sodass ein gutes Wissen darüber, wie man online nach Antworten sucht, von unschätzbarem Wert ist.

Zu den besten Quellen für Supportinformationen zählen die Mozilla Developer Network (das ist, wo Sie sich gerade befinden!), [stackoverflow.com](https://stackoverflow.com/) und [caniuse.com](https://caniuse.com/).

Um das Mozilla Developer Network (MDN) zu nutzen, verwendet die Mehrheit der Leute eine Suchmaschinensuche nach der Technologie, über die sie Informationen suchen, zusammen mit dem Begriff "mdn", z.B. "mdn HTML video". MDN enthält mehrere nützliche Arten von Inhalten:

- Referenzmaterial mit Browserunterstützungsinformationen für clientseitige Webtechnologien, z.B. die [\<video>-Referenzseite](/de/docs/Web/HTML/Reference/Elements/video).
- Weitere unterstützende Referenzmaterialien, zum Beispiel unser [Leitfaden zu Medientypen und Formaten im Web](/de/docs/Web/Media/Guides/Formats),
- Nützliche Tutorials, die spezifische Probleme lösen, zum Beispiel [Ein plattformübergreifender Videoplayer erstellen](/de/docs/Web/Media/Guides/Audio_and_video_delivery/cross_browser_video_player).

[caniuse.com](https://caniuse.com/) bietet Supportinformationen gemeinsam mit ein paar nützlichen externen Ressourcen-Links. Zum Beispiel sehen Sie <https://caniuse.com/#search=video> (Sie müssen nur die Funktion, nach der Sie suchen, in das Textfeld eingeben).

[stackoverflow.com](https://stackoverflow.com/) (SO) ist ein Forum, in dem Sie Fragen stellen können und andere Entwickler ihre Lösungen teilen, bereits vorhandene Beiträge durchsuchen und anderen Entwicklern helfen können. Ihnen wird empfohlen, zu prüfen, ob es bereits eine Antwort auf Ihre Frage gibt, bevor Sie eine neue Frage posten. Zum Beispiel haben wir auf SO nach "disabling autofocus on HTML dialog" gesucht und sehr schnell [disable showModal auto-focusing using HTML attributes](https://stackoverflow.com/questions/63267581/disable-showmodal-auto-focusing-using-html-attributes) gefunden.

Abgesehen davon versuchen Sie, Ihre bevorzugte Suchmaschine zu verwenden, um eine Antwort auf Ihr Problem zu finden. Es ist oft nützlich, nach spezifischen Fehlermeldungen zu suchen, wenn Sie welche haben — andere Entwickler werden wahrscheinlich die gleichen Probleme gehabt haben wie Sie.

## Zusammenfassung

Nun sollten Sie mit den wichtigsten Arten HTML- und CSS-Browser-übergreifender Probleme vertraut sein, denen Sie in der Webentwicklung begegnen werden, und wissen, wie Sie diese beheben können.

{{PreviousMenuNext("Learn_web_development/Extensions/Testing/Testing_strategies","Learn_web_development/Extensions/Testing/Feature_detection", "Learn_web_development/Extensions/Testing")}}
