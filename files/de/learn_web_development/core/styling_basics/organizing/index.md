---
title: Organisieren Ihres CSS
slug: Learn_web_development/Core/Styling_basics/Organizing
l10n:
  sourceCommit: 451c6b58988664128473a881871707c5ec9737f2
---

Wenn Sie beginnen, an größeren Stylesheets und großen Projekten zu arbeiten, werden Sie feststellen, dass die Pflege einer riesigen CSS-Datei eine Herausforderung darstellen kann. In diesem Artikel werfen wir einen kurzen Blick auf einige bewährte Praktiken zum Schreiben von CSS, um es einfach wartbar zu machen, und auf einige der Lösungen, die andere verwenden, um die Wartbarkeit zu verbessern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >Grundlegende Software installiert</a
        >, Grundkenntnisse im
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files"
          >Umgang mit Dateien</a
        >, HTML-Grundlagen (Studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Einführung in HTML</a
        >) und ein Verständnis dafür, wie CSS funktioniert (Studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS-Grundlagen der Gestaltung</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen Sie einige Tipps und bewährte Praktiken zur Organisation von Stylesheets kennen und erfahren Sie mehr über einige der gebräuchlichen Namenskonventionen und Werkzeuge, die bei der CSS-Organisation und der Teamarbeit helfen.
      </td>
    </tr>
  </tbody>
</table>

## Tipps, um Ihr CSS ordentlich zu halten

Hier sind einige allgemeine Vorschläge, wie Sie Ihre Stylesheets organisiert und ordentlich halten können.

### Hat Ihr Projekt eine Coding-Stilrichtlinie?

Wenn Sie mit einem Team an einem bestehenden Projekt arbeiten, sollten Sie zuerst prüfen, ob das Projekt eine bestehende Stilrichtlinie für CSS hat. Die Team-Stilrichtlinie sollte immer über Ihren persönlichen Vorlieben stehen. Oft gibt es keinen richtigen oder falschen Weg, Dinge zu tun, aber Konsistenz ist wichtig.

Sehen Sie sich beispielsweise die [CSS-Richtlinien für MDN-Codebeispiele](/de/docs/MDN/Writing_guidelines/Code_style_guide/CSS) an.

### Halten Sie es konsistent

Wenn Sie die Regeln für das Projekt festlegen können oder alleine arbeiten, ist das Wichtigste, die Konsistenz zu wahren. Konsistenz kann in vielerlei Hinsicht angewendet werden, wie z. B. die Verwendung gleicher Namenskonventionen für Klassen, die Auswahl einer Methode zur Beschreibung von Farben oder die Beibehaltung eines konsistenten Formats. (Zum Beispiel: Verwenden Sie Tabs oder Leerzeichen zum Einrücken Ihres Codes? Wenn Leerzeichen, wie viele?)

Wenn Sie einen Satz von Regeln haben, denen Sie immer folgen, verringert sich der mentale Aufwand beim Schreiben von CSS, da einige der Entscheidungen bereits getroffen sind.

### Formatieren von lesbarem CSS

Es gibt ein paar Möglichkeiten, wie Sie CSS formatiert sehen werden. Einige Entwickler stellen alle Regeln in eine einzige Zeile, wie folgt:

```css-nolint
.box {background-color: #567895; }
h2 {background-color: black; color: white; }
```

Andere Entwickler ziehen es vor, alles in eine neue Zeile zu setzen:

```css
.box {
  background-color: #567895;
}

h2 {
  background-color: black;
  color: white;
}
```

CSS macht es nichts aus, welche Methode Sie verwenden. Wir persönlich finden es lesbarer, wenn sich jedes Eigenschaft-Wert-Paar auf einer neuen Zeile befindet.

### Kommentieren Sie Ihr CSS

Das Hinzufügen von Kommentaren zu Ihrem CSS hilft jedem zukünftigen Entwickler bei der Arbeit mit Ihrer CSS-Datei, aber es hilft auch Ihnen, wenn Sie nach einer Pause zum Projekt zurückkehren.

```css
/* This is a CSS comment
It can be broken onto multiple lines. */
```

Ein guter Tipp ist es, zwischen logischen Abschnitten in Ihrem Stylesheet auch einen Block von Kommentaren hinzuzufügen, um verschiedene Abschnitte schnell zu finden, wenn Sie es durchsehen, oder sogar um etwas zu haben, wonach Sie suchen können, um direkt in diesen Teil des CSS zu springen. Wenn Sie eine Zeichenfolge verwenden, die im Code nicht vorkommt, können Sie durch Suchen von Abschnitt zu Abschnitt springen — unten haben wir `||` verwendet.

```css
/* || General styles */

/* … */

/* || Typography */

/* … */

/* || Header and Main Navigation */

/* … */
```

Sie müssen nicht jede Kleinigkeit in Ihrem CSS kommentieren, da vieles selbsterklärend sein wird. Kommentieren sollten Sie die Dinge, bei denen Sie sich aus einem bestimmten Grund für eine Entscheidung entschieden haben.

Sie haben möglicherweise eine CSS-Eigenschaft auf eine bestimmte Weise verwendet, um ältere Browser-Inkompatibilitäten zu umgehen, zum Beispiel:

```css
.box {
  background-color: red; /* fallback for older browsers that don't support gradients */
  background-image: linear-gradient(to right, red, #aa0000);
}
```

Vielleicht haben Sie einem Tutorial gefolgt, um etwas zu erreichen, und das CSS ist nicht sehr selbsterklärend oder erkennbar. In diesem Fall könnten Sie die URL des Tutorials in die Kommentare aufnehmen. Sie werden sich selbst dankbar sein, wenn Sie zu diesem Projekt in einem Jahr zurückkehren und sich vage daran erinnern können, dass es ein großartiges Tutorial zu diesem Thema gab, aber nicht mehr wissen, woher es stammte.

### Erstellen Sie logische Abschnitte in Ihrem Stylesheet

Es ist eine gute Idee, alle allgemeinen Stile zuerst im Stylesheet zu haben. Das bedeutet, dass alle Stile, die im Allgemeinen angewendet werden, es sei denn, Sie machen etwas Besonderes mit diesem Element. Sie werden typischerweise Regeln für folgende Elemente haben:

- `body`
- `p`
- `h1`, `h2`, `h3`, `h4`, `h5`
- `ul` und `ol`
- Die Eigenschaften von `table`
- Links

In diesem Abschnitt des Stylesheets liefern wir ein Standardstyling für den Text auf der Seite, setzen einen Standardstil für Datentabellen und Listen usw.

```css
/* || GENERAL STYLES */

body {
  /* … */
}

h1,
h2,
h3,
h4 {
  /* … */
}

ul {
  /* … */
}

blockquote {
  /* … */
}
```

Nach diesem Abschnitt könnten wir einige Hilfsklassen definieren, zum Beispiel eine Klasse, die den Standardstil einer Liste entfernt, den wir als Flex-Elemente oder auf eine andere Weise anzeigen wollen. Wenn Sie ein paar Styling-Optionen haben, die Sie auf viele verschiedene Elemente anwenden möchten, können sie in diesem Abschnitt stehen.

```css
/* || UTILITIES */

.no-bullets {
  list-style: none;
  margin: 0;
  padding: 0;
}

/* … */
```

Dann können wir alles hinzufügen, was im gesamten Projekt verwendet wird. Das könnten Dinge wie die Grundstruktur der Seite, die Kopfzeilen-, Navigationsstil usw. sein.

```css
/* SITEWIDE */

.main-nav {
  /* … */
}

.logo {
  /* … */
}
```

Schließlich fügen wir CSS für spezifische Dinge hinzu, aufgeschlüsselt nach Kontext, Seite oder sogar Komponente, in denen sie verwendet werden.

```css
/* || STORE PAGES */

.product-listing {
  /* … */
}

.product-box {
  /* … */
}
```

Durch das Anordnen der Dinge auf diese Weise wissen wir zumindest, in welchem Teil des Stylesheets wir suchen müssen, um etwas zu ändern.

### Vermeiden Sie überschüssig spezifische Selektoren

Wenn Sie sehr spezifische Selektoren erstellen, werden Sie oft feststellen, dass Sie große Teile Ihres CSS duplizieren müssen, um dieselben Regeln auf ein anderes Element anzuwenden. Zum Beispiel könnten Sie einen Selektor wie den untenstehenden haben, der die Regel auf ein `<p>` mit einer Klasse `box` innerhalb eines `<article>` mit einer Klasse `main` anwendet.

```css
article.main p.box {
  border: 1px solid #ccc;
}
```

Wenn Sie dann dieselben Regeln auf etwas außerhalb von `main` oder auf etwas anderes als ein `<p>` anwenden möchten, müssten Sie einen weiteren Selektor zu diesen Regeln hinzufügen oder ein ganz neues Regelset erstellen. Stattdessen könnten Sie den Selektor `.box` verwenden, um Ihre Regel auf jedes Element anzuwenden, das die Klasse `box` hat:

```css
.box {
  border: 1px solid #ccc;
}
```

Es wird Zeiten geben, in denen es sinnvoll ist, etwas spezifischer zu machen; dies wird jedoch im Allgemeinen eine Ausnahme sein und nicht die übliche Praxis.

### Große Stylesheets in mehrere kleinere aufteilen

In Fällen, in denen Sie sehr unterschiedliche Stile für verschiedene Teile der Website haben, möchten Sie möglicherweise ein Stylesheet haben, das alle globalen Regeln enthält, sowie einige kleinere Stylesheets, die die spezifischen Regeln für diese Abschnitte enthalten. Sie können auf einer Seite auf mehrere Stylesheets verlinken, und die normalen Regeln der Kaskade gelten, wobei die in später verlinkten Stylesheets aufgeführten Regeln nach denen in früher verlinkten Stylesheets kommen.

Zum Beispiel könnten wir einen Online-Shop als Teil der Website haben, mit viel CSS, das nur zum Styling der Produktlisten und Formulare benötigt wird, die für den Shop erforderlich sind. Es würde Sinn machen, diese Dinge in einem anderen Stylesheet zu haben, das nur auf Shop-Seiten verlinkt ist.

Dies kann es einfacher machen, Ihr CSS organisiert zu halten, und bedeutet auch, dass, wenn mehrere Personen am CSS arbeiten, Sie weniger Situationen haben, in denen zwei Personen gleichzeitig an demselben Stylesheet arbeiten müssen, was zu Konflikten in der Versionskontrolle führen kann.

## Andere Werkzeuge, die helfen können

CSS selbst bietet nicht viele eingebaute Organisationsmöglichkeiten; daher hängt der Grad der Konsistenz in Ihrem CSS weitgehend von Ihnen ab. Die Web-Community hat verschiedene Werkzeuge und Ansätze entwickelt, die Ihnen dabei helfen können, größere CSS-Projekte zu verwalten. Da Sie diese Hilfsmittel wahrscheinlich dann kennenlernen, wenn Sie mit anderen zusammenarbeiten, und da sie oft allgemein hilfreich sind, haben wir einen kurzen Leitfaden zu einigen von ihnen aufgenommen.

### CSS-Methodologien

Anstatt eigene Regeln für das Schreiben von CSS zu entwickeln, könnten Sie davon profitieren, einen der bereits von der Community entworfenen und über viele Projekte hinweg getesteten Ansätze zu übernehmen. Diese Methodologien sind im Wesentlichen Kodierleitfäden für CSS, die einen sehr strukturierten Ansatz für das Schreiben und Organisieren von CSS verfolgen. In der Regel neigen sie dazu, CSS ausführlicher darzustellen, als wenn Sie jeden Selektor zu einem individuellen Regelset für dieses Projekt schreiben und optimieren würden.

Sie erzielen jedoch viel Struktur, indem Sie eine dieser Methodologien übernehmen. Da viele dieser Systeme weit verbreitet sind, ist es wahrscheinlicher, dass andere Entwickler den von Ihnen verwendeten Ansatz verstehen und in der Lage sind, ihr eigenes CSS auf die gleiche Weise zu schreiben, anstatt Ihre eigene Methodologie von Grund auf zu erarbeiten.

#### OOCSS

Die meisten Ansätze, auf die Sie stoßen werden, verdanken dem Konzept des objektorientierten CSS (OOCSS) etwas, einem Ansatz, der durch [die Arbeit von Nicole Sullivan](https://github.com/stubbornella/oocss/wiki) populär wurde. Die Grundidee von OOCSS ist es, Ihr CSS in wiederverwendbare Objekte zu unterteilen, die Sie überall auf Ihrer Seite verwenden können. Das Standardbeispiel für OOCSS ist das Muster, das als [Das Medienobjekt](/de/docs/Web/CSS/Layout_cookbook/Media_objects) bezeichnet wird. Dies ist ein Muster mit einem Bild, Video oder einem anderen Element mit fester Größe auf einer Seite und flexiblem Inhalt auf der anderen. Es ist ein Muster, das wir überall auf Websites für Kommentare, Listen und so weiter sehen.

Wenn Sie keinen OOCSS-Ansatz verfolgen, könnten Sie benutzerdefiniertes CSS für die verschiedenen Orte erstellen, an denen dieses Muster verwendet wird, indem Sie zum Beispiel zwei Klassen erstellen, eine namens `comment` mit einer Reihe von Regeln für die Bestandteile und eine andere namens `list-item` mit fast denselben Regeln wie die `comment`-Klasse, außer für einige kleine Unterschiede. Die Unterschiede zwischen diesen beiden Komponenten bestehen darin, dass das Listenelement eine untere Grenze hat und Bilder in Kommentaren eine Grenze haben, während Listenelementbilder keine haben.

```css
.comment {
  display: grid;
  grid-template-columns: 1fr 3fr;
}

.comment img {
  border: 1px solid grey;
}

.comment .content {
  font-size: 0.8rem;
}

.list-item {
  display: grid;
  grid-template-columns: 1fr 3fr;
  border-bottom: 1px solid grey;
}

.list-item .content {
  font-size: 0.8rem;
}
```

Im OOCSS würden Sie ein Muster namens `media` erstellen, das alle gemeinsamen CSS für beide Muster enthält — eine Basisklasse für Dinge, die im Allgemeinen die Form des Medienobjekts haben. Dann würden wir eine zusätzliche Klasse hinzufügen, um diese Stile auf spezifische Weise zu erweitern.

```css
.media {
  display: grid;
  grid-template-columns: 1fr 3fr;
}

.media .content {
  font-size: 0.8rem;
}

.comment img {
  border: 1px solid grey;
}

.list-item {
  border-bottom: 1px solid grey;
}
```

In Ihrem HTML müsste der Kommentar sowohl die `media` als auch die `comment` Klassen haben:

```html
<div class="media comment">
  <img src="" alt="" />
  <div class="content"></div>
</div>
```

Das Listenelement hätte `media` und `list-item` angewendet:

```html
<ul>
  <li class="media list-item">
    <img src="" alt="" />
    <div class="content"></div>
  </li>
</ul>
```

Die Arbeit, die Nicole Sullivan bei der Beschreibung und Förderung dieses Ansatzes geleistet hat, bedeutet, dass auch Menschen, die heute nicht strikt einem OOCSS-Ansatz folgen, CSS im Allgemeinen auf diese Weise wiederverwenden — es ist in unser Verständnis als eine gute Herangehensweise eingegangen.

#### BEM

BEM steht für Block Element Modifier. In BEM ist ein Block eine eigenständige Entität wie ein Button, Menü oder Logo. Ein Element ist beispielsweise ein Listenelement oder ein Titel, das dem Block, in dem es sich befindet, zugehört. Ein Modifier ist eine Markierung an einem Block oder Element, die das Styling oder Verhalten ändert. Sie werden Code, der BEM verwendet, am extensiven Einsatz von Strichen und Unterstrichen in den CSS-Klassen erkennen. Beispielsweise sehen Sie sich die Klassen an, die auf dieses HTML aus der Seite über [BEM-Namenskonventionen](https://getbem.com/naming/) angewendet werden:

```html
<form class="form form--theme-xmas form--simple">
  <label class="label form__label" for="inputId"></label>
  <input class="form__input" type="text" id="inputId" />

  <input
    class="form__submit form__submit--disabled"
    type="submit"
    value="Submit" />
</form>
```

Die zusätzlichen Klassen sind ähnlich denen, die im OOCSS-Beispiel verwendet werden; jedoch verwenden sie die strikten Namenskonventionen von BEM.

BEM wird häufig in größeren Webprojekten verwendet, und viele Menschen schreiben ihr CSS auf diese Weise. Es ist wahrscheinlich, dass Sie auf Beispiele stoßen, selbst in Tutorials, die BEM-Syntax verwenden, ohne zu erwähnen, warum das CSS auf diese Weise strukturiert ist.

Lesen Sie mehr über dieses System [BEM 101](https://css-tricks.com/bem-101/) auf CSS Tricks.

#### Andere gängige Systeme

Es gibt eine Vielzahl dieser Systeme in Gebrauch. Andere beliebte Ansätze umfassen [Scalable and Modular Architecture for CSS (SMACSS)](https://smacss.com/), erstellt von Jonathan Snook, [ITCSS](https://itcss.io/) von Harry Roberts und [Atomizer CSS (ACSS)](https://acss-io.github.io/atomizer/), ursprünglich von Yahoo! erstellt. Wenn Sie auf ein Projekt stoßen, das einen dieser Ansätze verwendet, ist der Vorteil, dass Sie viele Artikel und Leitfäden finden können, um Ihnen zu helfen, im gleichen Stil zu programmieren.

Der Nachteil der Verwendung eines solchen Systems ist, dass sie übermäßig komplex erscheinen können, insbesondere für kleinere Projekte.

### Build-Systeme für CSS

Eine weitere Möglichkeit, CSS zu organisieren, besteht darin, einige der für Front-End-Entwickler verfügbaren Tools zu nutzen, die Ihnen ermöglichen, einen etwas programmatischeren Ansatz beim Schreiben von CSS zu verfolgen. Es gibt eine Reihe von Tools, die wir als _Pre-Processors_ und _Post-Processors_ bezeichnen. Ein Pre-Processor läuft über Ihre Rohdateien und wandelt sie in ein Stylesheet um, während ein Post-Processor Ihr fertiges Stylesheet nimmt und etwas damit tut — vielleicht um es zu optimieren, damit es schneller geladen wird.

Die Verwendung dieser Tools erfordert, dass Ihre Entwicklungsumgebung die Skripte, die das Pre- und Post-Processing durchführen, ausführen kann. Viele Code-Editoren können dies für Sie tun oder Sie können Befehlszeilentools installieren, die helfen.

Der beliebteste Pre-Processor ist [Sass](https://sass-lang.com/). Dies ist kein Sass-Tutorial, daher werde ich kurz einige der Dinge erklären, die Sass tun kann, die in Bezug auf die Organisation wirklich hilfreich sind, selbst wenn Sie keine der anderen Sass-Funktionen verwenden. Wenn Sie viel mehr über Sass lernen möchten, beginnen Sie mit dem Artikel [Sass-Grundlagen](https://sass-lang.com/guide/), dann fahren Sie mit deren anderer Dokumentation fort.

#### Variablen definieren

CSS verfügt jetzt über native [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties), was dieses Feature zunehmend weniger wichtig macht. Einer der Gründe, warum Sie Sass verwenden könnten, ist jedoch, alle Farben und Schriftarten, die in einem Projekt verwendet werden, als Einstellungen zu definieren und diese Variable dann im gesamten Projekt zu verwenden. Dies bedeutet, dass, wenn Sie feststellen, dass Sie den falschen Blauton verwendet haben, Sie ihn nur an einer Stelle ändern müssen.

Wenn wir eine Variable namens `$base-color` erstellen, wie in der ersten Zeile unten, könnten wir sie dann im gesamten Stylesheet überall dort verwenden, wo diese Farbe benötigt wird.

```scss
$base-color: #c6538c;

.alert {
  border: 1px solid $base-color;
}
```

Sobald es zu CSS kompiliert wird, hätten Sie das folgende CSS im fertigen Stylesheet.

```css
.alert {
  border: 1px solid #c6538c;
}
```

#### Kompilieren von Komponenten-Stylesheets

Ich habe oben erwähnt, dass eine Möglichkeit zur Organisation von CSS darin besteht, Stylesheets in kleinere aufzuteilen. Beim Einsatz von Sass können Sie dies auf eine andere Ebene bringen und viele sehr kleine Stylesheets haben — sogar ein separates Stylesheet für jede Komponente. Durch die Nutzung der in Sass enthaltenen Funktionalität (Partials) können diese alle zusammen in ein oder wenige zu Ihrer Website tatsächlich verlinkbare Stylesheets kompiliert werden.

So könnten Sie beispielsweise mit [Partials](https://sass-lang.com/documentation/at-rules/use/#partials) mehrere Stil-Dateien in einem Verzeichnis haben, sagen wir `foundation/_code.scss`, `foundation/_lists.scss`, `foundation/_footer.scss`, `foundation/_links.scss` usw. Sie könnten dann die Sass-Regel `@use` verwenden, um sie in andere Stylesheets zu laden:

```scss
// foundation/_index.scss
@use "code";
@use "lists";
@use "footer";
@use "links";
```

Wenn die Partials alle in eine Index-Datei geladen werden, wie oben angedeutet, können Sie dann dieses gesamte Verzeichnis in ein anderes Stylesheet in einem Zug laden:

```scss
// style.scss
@use "foundation";
```

> [!NOTE]
> Eine einfache Möglichkeit, Sass auszuprobieren, ist die Verwendung von [CodePen](https://codepen.io/) — Sie können Sass für Ihr CSS in den Einstellungen für einen Pen aktivieren, und CodePen wird dann den Sass-Parser für Sie ausführen, damit Sie die resultierende Webseite mit regulärem CSS sehen können. Manchmal werden Sie feststellen, dass CSS-Tutorials Sass anstelle von normalem CSS in ihren CodePen-Demos verwendet haben, daher ist es praktisch, ein wenig darüber zu wissen.

#### Post-Processing zur Optimierung

Wenn Sie sich Sorgen über die Hinzufügung von Größe zu Ihren Stylesheets machen, zum Beispiel durch das Hinzufügen vieler zusätzlicher Kommentare und Leerzeichen, dann könnte ein Post-Processing-Schritt darin bestehen, das CSS zu optimieren, indem alles Unnötige in der Produktionsversion herausgestrichen wird. Ein Beispiel für eine Post-Processor-Lösung, um dies zu tun, wäre [cssnano](https://cssnano.github.io/cssnano/).
