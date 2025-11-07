---
title: Organisieren Sie Ihr CSS
slug: Learn_web_development/Core/Styling_basics/Organizing
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Sobald Sie beginnen, an größeren Stylesheets und großen Projekten zu arbeiten, werden Sie feststellen, dass die Verwaltung einer riesigen CSS-Datei herausfordernd sein kann. In diesem Artikel werfen wir einen kurzen Blick auf einige bewährte Vorgehensweisen beim Schreiben Ihres CSS, um es leicht wartbar zu machen, sowie auf einige der Lösungen, die andere verwenden, um die Wartbarkeit zu verbessern.

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
          >Arbeiten mit Dateien</a
        >, HTML-Grundlagen (siehe
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Einführung in HTML</a
        >) und eine Vorstellung davon, wie CSS funktioniert (siehe
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS-Grundlagen der Stilisierung</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Einige Tipps und bewährte Methoden zur Organisation von Stylesheets zu erlernen sowie einige der verwendeten Namenskonventionen und Werkzeuge kennenzulernen, die bei der CSS-Organisation und Teamarbeit helfen.
      </td>
    </tr>
  </tbody>
</table>

## Tipps, um Ihr CSS ordentlich zu halten

Hier sind einige allgemeine Vorschläge, wie Sie Ihre Stylesheets organisiert und ordentlich halten können.

### Hat Ihr Projekt einen Codierungsstil-Leitfaden?

Wenn Sie in einem Team an einem bestehenden Projekt arbeiten, sollten Sie zuerst prüfen, ob das Projekt einen vorhandenen Stil-Leitfaden für CSS hat. Der Team-Stil-Leitfaden sollte immer über Ihren persönlichen Vorlieben stehen. Oft gibt es keinen richtigen oder falschen Weg, die Dinge zu tun, aber Konsistenz ist wichtig.

Sehen Sie sich beispielsweise die [CSS-Richtlinien für MDN Code-Beispiele](/de/docs/MDN/Writing_guidelines/Code_style_guide/CSS) an.

### Halten Sie es konsistent

Wenn Sie die Regeln für das Projekt festlegen oder allein arbeiten, ist das Wichtigste, die Dinge konsistent zu halten. Konsistenz kann auf verschiedene Weise angewendet werden, wie z.B. die gleichen Namenskonventionen für Klassen zu verwenden, eine Methode zur Beschreibung von Farben zu wählen oder eine konsistente Formatierung beizubehalten. (Zum Beispiel: Verwenden Sie Tabs oder Leerzeichen, um Ihren Code einzurücken? Wenn Leerzeichen, wie viele?)

Wenn Sie immer einem festen Satz von Regeln folgen, reduziert sich der geistige Aufwand beim Schreiben von CSS, da einige Entscheidungen bereits getroffen sind.

### Formatierung von lesbarem CSS

Es gibt einige Möglichkeiten, wie CSS formatiert werden kann. Einige Entwickler setzen alle Regeln auf eine einzelne Zeile, etwa so:

```css-nolint
.box {background-color: #567895; }
h2 {background-color: black; color: white; }
```

Andere Entwickler ziehen es vor, alles auf eine neue Zeile zu setzen:

```css
.box {
  background-color: #567895;
}

h2 {
  background-color: black;
  color: white;
}
```

CSS ist es egal, welche Methode Sie verwenden. Wir persönlich finden es lesbarer, jedes Eigenschafts-Wert-Paar in eine neue Zeile zu setzen.

### Kommentieren Sie Ihr CSS

Kommentare zu Ihrem CSS hinzuzufügen, wird jedem zukünftigen Entwickler helfen, mit Ihrer CSS-Datei zu arbeiten, aber auch Ihnen, wenn Sie nach einer Pause zum Projekt zurückkehren.

```css
/* This is a CSS comment
It can be broken onto multiple lines. */
```

Ein guter Tipp ist, zwischen logischen Abschnitten in Ihrem Stylesheet auch einen Block von Kommentaren hinzuzufügen, um verschiedene Abschnitte schneller zu finden oder sogar etwas zu haben, wonach Sie suchen können, um direkt in diesen Teil des CSS zu springen. Wenn Sie eine Zeichenkette verwenden, die im Code nicht vorkommt, können Sie durch Suchen von Abschnitt zu Abschnitt springen — unten haben wir `||` verwendet.

```css
/* || General styles */

/* … */

/* || Typography */

/* … */

/* || Header and Main Navigation */

/* … */
```

Sie müssen nicht jede einzelne Sache in Ihrem CSS kommentieren, da vieles selbsterklärend sein wird. Kommentieren sollten Sie die Dinge, bei denen Sie aus einem bestimmten Grund eine besondere Entscheidung getroffen haben.

Möglicherweise haben Sie eine CSS-Eigenschaft auf eine bestimmte Weise verwendet, um ältere Browser-Inkompatibilitäten zu umgehen, zum Beispiel:

```css
.box {
  background-color: red; /* fallback for older browsers that don't support gradients */
  background-image: linear-gradient(to right, red, #aa0000);
}
```

Vielleicht haben Sie ein Tutorial verfolgt, um etwas zu erreichen, und das CSS ist nicht sehr selbsterklärend oder erkennbar. In diesem Fall könnten Sie die URL des Tutorials zu den Kommentaren hinzufügen. Sie werden sich selbst dankbar sein, wenn Sie in einem Jahr zu diesem Projekt zurückkehren und sich dunkel erinnern, dass es ein großartiges Tutorial dazu gab, aber nicht mehr wissen, woher es stammt.

### Erstellen Sie logische Abschnitte in Ihrem Stylesheet

Es ist eine gute Idee, alle allgemeinen Stile zuerst im Stylesheet zu haben. Das bedeutet alle Stile, die im Allgemeinen gelten, es sei denn, Sie tun etwas Spezielles mit diesem Element. Typischerweise werden Sie Regeln für folgende Elemente festlegen:

- `body`
- `p`
- `h1`, `h2`, `h3`, `h4`, `h5`
- `ul` und `ol`
- Die `table`-Eigenschaften
- Links

In diesem Abschnitt des Stylesheets bieten wir Standardstile für den Text auf der Website, für Daten-Tabellen und Listen an.

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

Nach diesem Abschnitt könnten wir einige Utility-Klassen definieren, zum Beispiel eine Klasse, die den Standardlistenstil für Listen entfernt, die wir als Flex-Elemente oder auf andere Weise anzeigen möchten. Wenn Sie einige Stilentscheidungen haben, von denen Sie wissen, dass Sie sie auf viele verschiedene Elemente anwenden möchten, können sie in diesem Abschnitt untergebracht werden.

```css
/* || UTILITIES */

.no-bullets {
  list-style: none;
  margin: 0;
  padding: 0;
}

/* … */
```

Dann fügen wir alles hinzu, das auf der gesamten Website verwendet wird. Das könnte Dinge wie das grundlegende Seitenlayout, die Kopfzeilennavigation usw. beinhalten.

```css
/* SITEWIDE */

.main-nav {
  /* … */
}

.logo {
  /* … */
}
```

Schließlich fügen wir CSS für bestimmte Dinge hinzu, aufgeteilt nach dem Kontext, der Seite oder sogar der Komponente, in der sie verwendet werden.

```css
/* || STORE PAGES */

.product-listing {
  /* … */
}

.product-box {
  /* … */
}
```

Durch diese Art der Anordnung haben wir zumindest eine Vorstellung davon, in welchem Teil des Stylesheets wir nach etwas suchen, das wir ändern möchten.

### Vermeiden Sie übermäßig spezifische Selektoren

Wenn Sie sehr spezifische Selektoren erstellen, werden Sie oft feststellen, dass Sie Abschnitte Ihres CSS duplizieren müssen, um dieselben Regeln auf ein anderes Element anzuwenden. Wenn Sie beispielsweise so etwas wie den unten stehenden Selektor haben, der die Regel auf ein `<p>` mit der Klasse `box` innerhalb eines `<article>` mit der Klasse `main` anwendet.

```css
article.main p.box {
  border: 1px solid #cccccc;
}
```

Falls Sie dieselben Regeln auf etwas außerhalb von `main` oder auf etwas anderes als ein `<p>` anwenden wollten, müssten Sie einen weiteren Selektor zu diesen Regeln hinzufügen oder ein ganz neues Regelset erstellen. Stattdessen könnten Sie den Selektor `.box` verwenden, um Ihre Regel auf jedes Element anzuwenden, das die Klasse `box` hat:

```css
.box {
  border: 1px solid #cccccc;
}
```

Es wird Zeiten geben, in denen es sinnvoll ist, etwas spezifischer zu machen; dies wird jedoch im Allgemeinen eine Ausnahme und keine gängige Praxis sein.

### Große Stylesheets in mehrere kleinere aufteilen

In Fällen, in denen Sie sehr unterschiedliche Stile für verschiedene Teile der Website haben, möchten Sie möglicherweise ein Stylesheet haben, das alle globalen Regeln enthält, sowie einige kleinere Stylesheets, die die spezifischen Regeln für diese Abschnitte beinhalten. Sie können auf einer Seite auf mehrere Stylesheets verlinken, und die normalen Regeln der Kaskade gelten, wobei Regeln in später verlinkten Stylesheets nach Regeln in früher verlinkten Stylesheets kommen.

Zum Beispiel könnten wir einen Online-Shop als Teil der Website haben, mit vielen CSS, das nur zum Gestalten der Produktlisten und Formulare für den Shop verwendet wird. Es wäre sinnvoll, diese Dinge in einem anderen Stylesheet zu haben, das nur auf Shop-Seiten verlinkt ist.

Dies kann es einfacher machen, Ihr CSS organisiert zu halten, und bedeutet auch, dass wenn mehrere Personen am CSS arbeiten, Sie weniger Situationen haben werden, in denen zwei Personen gleichzeitig an demselben Stylesheet arbeiten müssen, was zu Konflikten in der Quellcodeverwaltung führen kann.

## Andere Werkzeuge, die helfen können

CSS selbst hat nicht viel in Bezug auf eingebaute Organisation; daher hängt das Maß an Konsistenz in Ihrem CSS weitgehend von Ihnen ab. Die Web-Community hat verschiedene Werkzeuge und Ansätze entwickelt, die Ihnen helfen können, größere CSS-Projekte zu verwalten. Da Sie wahrscheinlich auf diese Hilfsmittel stoßen werden, wenn Sie mit anderen arbeiten, und da sie oft generell hilfreich sind, haben wir einen kurzen Leitfaden zu einigen von ihnen beigefügt.

### CSS-Methodologien

Statt Ihre eigenen Regeln für das Schreiben von CSS zu entwickeln, könnten Sie von der Übernahme eines der bereits von der Community entworfenen und über viele Projekte hinweg getesteten Ansätze profitieren. Diese Methodologien sind im Wesentlichen CSS-Codierungsleitfäden, die einen sehr strukturierten Ansatz für das Schreiben und Organisieren von CSS darstellen. Typischerweise neigen sie dazu, CSS ausführlicher darzustellen, als Sie es getan hätten, wenn Sie jeden Selektor auf ein benutzerdefiniertes Regelset für dieses Projekt optimiert hätten.

Jedoch gewinnt man durch die Übernahme einer Methodologie viel Struktur. Da viele dieser Systeme weit verbreitet sind, ist es für andere Entwickler wahrscheinlicher, den von Ihnen verwendeten Ansatz zu verstehen und ihre eigenen CSS auf die gleiche Weise zu schreiben, anstatt Ihre eigene persönliche Methodologie von Grund auf zu erarbeiten.

#### OOCSS

Die meisten Ansätze, auf die Sie stoßen werden, verdanken dem Konzept von Object Oriented CSS (OOCSS) etwas, einem Ansatz, der durch [die Arbeit von Nicole Sullivan](https://github.com/stubbornella/oocss/wiki) populär gemacht wurde. Die grundlegende Idee von OOCSS ist es, Ihr CSS in wiederverwendbare Objekte zu trennen, die überall dort verwendet werden können, wo Sie sie auf Ihrer Website benötigen. Das Standardbeispiel für OOCSS ist das Muster, das als [Das Medienobjekt](/de/docs/Web/CSS/How_to/Layout_cookbook/Media_objects) beschrieben wird. Dies ist ein Muster mit einem Bild, Video oder einem anderen Element fester Größe auf einer Seite und flexiblem Inhalt auf der anderen Seite. Es ist ein Muster, das wir überall auf Websites für Kommentare, Listen usw. sehen.

Wenn Sie keinen OOCSS-Ansatz verfolgen, könnten Sie ein benutzerdefiniertes CSS für die verschiedenen Orte erstellen, an denen dieses Muster verwendet wird, indem Sie zum Beispiel zwei Klassen erstellen: eine namens `comment` mit einer Reihe von Regeln für die Komponenten und eine andere namens `list-item` mit fast denselben Regeln wie die `comment`-Klasse, abgesehen von winzigen Unterschieden. Die Unterschiede zwischen diesen beiden Komponenten sind, dass das Listen-Element eine untere Grenze hat und Bilder in Kommentaren eine Grenze haben, während Listen-Elementbilder keine haben.

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

In OOCSS würden Sie ein Muster namens `media` erstellen, das alle gemeinsamen CSS für beide Muster enthält — eine Basisklasse für Dinge, die im Allgemeinen die Form des Medienobjekts haben. Dann würden wir eine zusätzliche Klasse hinzufügen, um diese Styling in spezifischen Weisen zu erweitern.

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

In Ihrem HTML müssten sowohl die `media`- als auch die `comment`-Klassen angewendet werden:

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

Die Arbeit, die Nicole Sullivan bei der Beschreibung dieses Ansatzes und seiner Förderung geleistet hat, bedeutet, dass selbst Menschen, die nicht strikt einem OOCSS-Ansatz folgen, heute im Allgemeinen CSS auf diese Weise wiederverwenden — es hat unser Verständnis als guter Ansatz für die allgemeine Vorgehensweise beeinflusst.

#### BEM

BEM steht für Block Element Modifier. In BEM ist ein Block eine eigenständige Entität wie ein Button, Menü oder Logo. Ein Element ist etwas wie ein Listenelement oder ein Titel, das an den Block gebunden ist, in dem es sich befindet. Ein Modifier ist ein Flag an einem Block oder Element, das das Styling oder Verhalten ändert. Sie werden Code, der BEM verwendet, an der umfangreichen Verwendung von Bindestrichen und Unterstrichen in den CSS-Klassen erkennen können. Zum Beispiel, schauen Sie sich die Klassen in diesem HTML auf der Seite über [BEM Namenskonventionen](https://getbem.com/naming/) an:

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

Die zusätzlichen Klassen sind ähnlich denen, die im OOCSS-Beispiel verwendet wurden; sie verwenden jedoch die strikten Benennungsregeln von BEM.

BEM wird häufig in größeren Webprojekten verwendet und viele Leute schreiben ihr CSS auf diese Weise. Es ist wahrscheinlich, dass Sie auf Beispiele, sogar in Tutorials, stoßen werden, die BEM-Syntax verwenden, ohne zu erwähnen, warum das CSS auf diese Weise strukturiert ist.

Lesen Sie mehr über dieses System [BEM 101](https://css-tricks.com/bem-101/) auf CSS Tricks.

#### Andere verbreitete Systeme

Es gibt eine große Anzahl dieser Systeme im Einsatz. Andere beliebte Ansätze umfassen [Scalable and Modular Architecture for CSS (SMACSS)](https://smacss.com/), erstellt von Jonathan Snook, [ITCSS](https://itcss.io/) von Harry Roberts, und [Atomizer CSS (ACSS)](https://acss-io.github.io/atomizer/), ursprünglich erstellt von Yahoo!. Wenn Sie auf ein Projekt stoßen, das einen dieser Ansätze verwendet, dann ist der Vorteil, dass Sie in der Lage sein werden, viele Artikel und Leitfäden zu finden, die Ihnen helfen zu verstehen, wie Sie im gleichen Stil kodieren.

Der Nachteil der Verwendung eines solchen Systems besteht darin, dass sie besonders für kleinere Projekte überwältigend komplex erscheinen können.

### Build-Systeme für CSS

Eine andere Möglichkeit, CSS zu organisieren, besteht darin, einige der Werkzeuge zu nutzen, die für Frontend-Entwickler verfügbar sind, die einen etwas programmatischen Ansatz für das Schreiben von CSS ermöglichen. Es gibt eine Reihe von Tools, die wir als _Pre-Processor_ und _Post-Processor_ bezeichnen. Ein Pre-Processor durchläuft Ihre Rohdateien und verwandelt sie in ein Stylesheet, während ein Post-Processor Ihr fertiges Stylesheet nimmt und etwas damit macht — vielleicht um es zu optimieren, damit es schneller lädt.

Die Verwendung eines dieser Tools erfordert, dass Ihre Entwicklungsumgebung in der Lage ist, die Skripte auszuführen, die das Pre- und Post-Processing durchführen. Viele Code-Editoren können das für Sie tun, oder Sie können Kommandozeilen-Tools installieren, um zu helfen.

Der beliebteste Pre-Processor ist [Sass](https://sass-lang.com/). Dies ist kein Sass-Tutorial, deshalb werde ich kurz einige der Dinge erklären, die Sass tun kann, die in Bezug auf Organisation wirklich hilfreich sind, selbst wenn Sie keine der anderen Sass-Funktionen verwenden. Wenn Sie viel mehr über Sass lernen möchten, beginnen Sie mit dem [Sass basics](https://sass-lang.com/guide/) Artikel und gehen dann zu ihrer anderen Dokumentation über.

#### Definition von Variablen

CSS hat jetzt native [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties), was diese Funktion zunehmend weniger wichtig macht. Einer der Gründe, Sass zu verwenden, besteht jedoch darin, alle in einem Projekt verwendeten Farben und Schriften als Einstellungen zu definieren und dann diese Variable im gesamten Projekt zu verwenden. Das bedeutet, dass wenn Sie feststellen, dass Sie den falschen Blauton verwendet haben, Sie ihn nur an einer Stelle ändern müssen.

Wenn wir eine Variable namens `$base-color` erstellen würden, wie in der ersten Zeile unten, könnten wir sie dann im gesamten Stylesheet überall dort verwenden, wo diese Farbe benötigt wird.

```scss
$base-color: #c6538c;

.alert {
  border: 1px solid $base-color;
}
```

Sobald es zu CSS kompiliert ist, hätten Sie das folgende CSS im endgültigen Stylesheet.

```css
.alert {
  border: 1px solid #c6538c;
}
```

#### Kompilierung von Komponenten-Stilen

Ich habe oben erwähnt, dass eine Möglichkeit, CSS zu organisieren, darin besteht, Stylesheets in kleinere Stylesheets zu zerlegen. Wenn Sie Sass verwenden, können Sie dies auf eine andere Ebene bringen und viele sehr kleine Stylesheets haben — sogar bis zu dem Punkt, dass Sie für jede Komponente ein eigenes Stylesheet haben. Durch die Verwendung der in Sass enthaltenen Funktionalität (Partials) können diese alle zusammen in ein oder eine kleine Anzahl von Stylesheets kompiliert werden, um tatsächlich in Ihre Website verlinkt zu werden.

Sie könnten zum Beispiel mit [Partials](https://sass-lang.com/documentation/at-rules/use/#partials) mehrere Stil-Dateien in einem Verzeichnis haben, z.B. `foundation/_code.scss`, `foundation/_lists.scss`, `foundation/_footer.scss`, `foundation/_links.scss`, usw. Sie könnten dann die Sass `@use`-Regel verwenden, um sie in andere Stylesheets zu laden:

```scss
// foundation/_index.scss
@use "code";
@use "lists";
@use "footer";
@use "links";
```

Wenn die Partials alle in eine Indexdatei geladen werden, wie oben angedeutet, können Sie dann dieses gesamte Verzeichnis in ein anderes Stylesheet in einem Rutsch laden:

```scss
// style.scss
@use "foundation";
```

> [!NOTE]
> Ein einfacher Weg, Sass auszuprobieren, ist die Verwendung von [CodePen](https://codepen.io/) — Sie können Sass für Ihr CSS in den Einstellungen für einen Pen aktivieren, und CodePen wird dann den Sass-Parser für Sie ausführen, damit Sie die resultierende Webseite mit angewendetem regulären CSS sehen können. Manchmal werden Sie feststellen, dass CSS-Tutorials Sass anstelle von reinem CSS in ihren CodePen-Demos verwendet haben, daher ist es nützlich, ein wenig darüber zu wissen.

#### Post-Processing zur Optimierung

Wenn Sie sich Sorgen machen, durch das Hinzufügen von vielen zusätzlichen Kommentaren und Leerzeichen die Größe Ihrer Stylesheets zu erhöhen, könnte ein Post-Processing-Schritt darin bestehen, das CSS zu optimieren, indem alles Unnötige in der Produktionsversion entfernt wird. Ein Beispiel für eine Post-Processor-Lösung, um dies zu tun, wäre [cssnano](https://cssnano.github.io/cssnano/).
