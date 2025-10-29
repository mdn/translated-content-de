---
title: Organisieren Ihres CSS
slug: Learn_web_development/Core/Styling_basics/Organizing
l10n:
  sourceCommit: 2530db14de9ac226cf06f84540fa0101e804ca9b
---

Wenn Sie beginnen, an größeren Stylesheets und Projekten zu arbeiten, werden Sie feststellen, dass die Pflege einer riesigen CSS-Datei herausfordernd sein kann. In diesem Artikel werfen wir einen kurzen Blick auf einige Best Practices für das Schreiben Ihres CSS, um es einfach wartbar zu machen, und einige der Lösungen, die andere verwenden, um die Wartbarkeit zu verbessern.

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
        >), und eine Vorstellung davon, wie CSS funktioniert (siehe
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS Styling-Grundlagen</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Einige Tipps und Best Practices zur Organisation von Stylesheets zu lernen und über einige der häufig verwendeten Namenskonventionen und Tools zu erfahren, die bei der CSS-Organisation und Teamarbeit helfen.
      </td>
    </tr>
  </tbody>
</table>

## Tipps, um Ihr CSS ordentlich zu halten

Hier sind einige allgemeine Vorschläge, um Ihre Stylesheets organisiert und ordentlich zu halten.

### Hat Ihr Projekt eine Kodierungsstilrichtlinie?

Wenn Sie mit einem Team an einem bestehenden Projekt arbeiten, sollten Sie zuerst prüfen, ob das Projekt eine bestehende Stilrichtlinie für CSS hat. Die Team-Stilrichtlinie sollte immer den Vorrang vor Ihren persönlichen Vorlieben haben. Oft gibt es kein richtig oder falsch, aber Konsistenz ist wichtig.

Sehen Sie sich zum Beispiel die [CSS-Richtlinien für MDN-Codebeispiele](/de/docs/MDN/Writing_guidelines/Code_style_guide/CSS) an.

### Bleiben Sie konsistent

Wenn Sie die Regeln für das Projekt festlegen dürfen oder alleine arbeiten, dann ist das Wichtigste, Dinge konsistent zu halten. Konsistenz kann auf alle möglichen Arten angewendet werden, wie die gleichen Namenskonventionen für Klassen zu verwenden, eine Methode zur Beschreibung von Farben zu wählen oder ein einheitliches Format zu beibehalten. (Zum Beispiel: Nutzen Sie Tabs oder Leerzeichen zum Einrücken Ihres Codes? Wenn Leerzeichen, wie viele?)

Das Festlegen von Regeln, denen Sie immer folgen, reduziert den mentalen Aufwand beim Schreiben von CSS, da einige Entscheidungen bereits getroffen sind.

### Lesbares CSS formatieren

Es gibt ein paar Möglichkeiten, wie CSS formatiert wird. Einige Entwickler setzen alle Regeln in eine einzige Zeile, wie folgt:

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

CSS ist es egal, welche Methode Sie verwenden. Wir finden es persönlich lesbarer, wenn jedes Paar aus Eigenschaft und Wert in einer neuen Zeile steht.

### Kommentieren Sie Ihr CSS

Das Hinzufügen von Kommentaren zu Ihrem CSS hilft jedem zukünftigen Entwickler bei der Arbeit mit Ihrer CSS-Datei und auch Ihnen selbst, wenn Sie nach einer Pause zum Projekt zurückkehren.

```css
/* This is a CSS comment
It can be broken onto multiple lines. */
```

Ein guter Tipp ist, einen Block von Kommentaren zwischen logischen Abschnitten in Ihrem Stylesheet hinzuzufügen, um die verschiedenen Abschnitte beim Durchsuchen schnell zu lokalisieren oder sogar etwas zu haben, das Sie suchen können, um direkt zu diesem Teil des CSS zu springen. Wenn Sie eine Zeichenkette verwenden, die nicht im Code erscheinen wird, können Sie durch Suchen von Abschnitt zu Abschnitt springen — unten haben wir `||` verwendet.

```css
/* || General styles */

/* … */

/* || Typography */

/* … */

/* || Header and Main Navigation */

/* … */
```

Sie müssen nicht alles in Ihrem CSS kommentieren, da vieles selbsterklärend ist. Kommentieren sollten Sie die Dinge, bei denen Sie aus einem bestimmten Grund eine besondere Entscheidung getroffen haben.

Möglicherweise haben Sie eine CSS-Eigenschaft auf eine bestimmte Weise verwendet, um ältere Browser-Inkompatibilitäten zu umgehen, zum Beispiel:

```css
.box {
  background-color: red; /* fallback for older browsers that don't support gradients */
  background-image: linear-gradient(to right, red, #aa0000);
}
```

Vielleicht haben Sie ein Tutorial befolgt, um etwas zu erreichen, und das CSS ist nicht sehr selbsterklärend oder erkennbar. In diesem Fall könnten Sie die URL des Tutorials zu den Kommentaren hinzufügen. Sie werden sich selbst dankbar sein, wenn Sie nach einem Jahr zu diesem Projekt zurückkehren und sich vage erinnern, dass es ein großartiges Tutorial zu diesem Thema gab, aber nicht mehr wissen, woher es stammt.

### Logische Abschnitte in Ihrem Stylesheet erstellen

Es ist eine gute Idee, alle allgemeinen Stile zuerst im Stylesheet zu haben. Das bedeutet alle Stile, die im Allgemeinen gelten, es sei denn, Sie tun etwas Besonderes mit diesem Element. Normalerweise werden Sie Regeln für folgendes aufstellen:

- `body`
- `p`
- `h1`, `h2`, `h3`, `h4`, `h5`
- `ul` und `ol`
- Die `table`-Eigenschaften
- Links

In diesem Abschnitt des Stylesheets bieten wir eine Standardstilierung für die Typografie auf der Website an, richten einen Standardstil für Datentabellen und Listen ein und so weiter.

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

Nach diesem Abschnitt könnten wir einige Utility-Klassen definieren, zum Beispiel eine Klasse, die den Standardlistenstil für Listen entfernt, die wir als Flex-Elemente oder auf eine andere Weise anzeigen werden. Wenn Sie ein paar Stylingoptionen haben, die Sie auf viele verschiedene Elemente anwenden möchten, können diese in diesem Abschnitt platziert werden.

```css
/* || UTILITIES */

.no-bullets {
  list-style: none;
  margin: 0;
  padding: 0;
}

/* … */
```

Dann können wir alles hinzufügen, das auf der gesamten Website verwendet wird. Das könnte Dinge wie das grundlegende Seitendesign, die Kopfzeilennavigation und so weiter sein.

```css
/* SITEWIDE */

.main-nav {
  /* … */
}

.logo {
  /* … */
}
```

Schließlich schließen wir das CSS für spezielle Dinge ein, unterteilt nach Kontext, Seite oder sogar Komponenten, in denen sie verwendet werden.

```css
/* || STORE PAGES */

.product-listing {
  /* … */
}

.product-box {
  /* … */
}
```

Durch die Anordnung der Dinge auf diese Weise haben wir zumindest eine Vorstellung davon, in welchem Teil des Stylesheets wir nach etwas suchen, das wir ändern möchten.

### Vermeiden Sie übermäßig spezifische Selektoren

Wenn Sie sehr spezifische Selektoren erstellen, werden Sie oft feststellen, dass Sie Teile Ihres CSS duplizieren müssen, um die gleichen Regeln auf ein anderes Element anzuwenden. Zum Beispiel könnten Sie einen Selektor wie unten haben, der die Regel auf ein `<p>` mit einer Klasse `box` innerhalb eines `<article>` mit der Klasse `main` anwendet.

```css
article.main p.box {
  border: 1px solid #cccccc;
}
```

Wenn Sie dann die gleichen Regeln auf etwas außerhalb von `main`, oder auf etwas anderes als ein `<p>` anwenden möchten, müssten Sie einen weiteren Selektor zu diesen Regeln hinzufügen oder ein völlig neues Regelwerk erstellen. Stattdessen könnten Sie den Selektor `.box` verwenden, um Ihre Regel auf jedes Element anzuwenden, das die Klasse `box` hat:

```css
.box {
  border: 1px solid #cccccc;
}
```

Es wird Zeiten geben, in denen es sinnvoll ist, etwas spezifischer zu machen; dies wird jedoch im Allgemeinen eine Ausnahme und nicht die Regel sein.

### Große Stylesheets in mehrere kleinere aufteilen

In Fällen, in denen Sie sehr unterschiedliche Stile für verschiedene Teile der Website haben, könnten Sie ein Stylesheet haben, das alle globalen Regeln enthält, sowie einige kleinere Stylesheets, die die spezifischen Regeln für diese Abschnitte enthalten. Sie können mehrere Stylesheets von einer Seite aus verlinken, und die normalen Regeln der Kaskade gelten, wobei die Regeln in später verlinkten Stylesheets auf Regeln in früher verlinkten Stylesheets folgen.

Zum Beispiel könnten wir einen Online-Shop als Teil der Website haben, mit einer Menge CSS, das nur zur Stilisierung der Produktlisten und Formulare des Shops verwendet wird. Es würde Sinn machen, diese Dinge in einem anderen Stylesheet zu haben, das nur auf Shop-Seiten verlinkt ist.

Dies kann es einfacher machen, Ihr CSS organisiert zu halten und bedeutet auch, dass wenn mehrere Personen am CSS arbeiten, Sie weniger Situationen haben, in denen zwei Personen gleichzeitig an demselben Stylesheet arbeiten müssen, was zu Konflikten in der Versionskontrolle führen könnte.

## Weitere Tools, die helfen können

CSS selbst hat nicht viel in Bezug auf eingebaute Organisation; daher hängt der Grad der Konsistenz in Ihrem CSS weitgehend von Ihnen ab. Die Web-Community hat verschiedene Tools und Ansätze entwickelt, die Ihnen helfen können, größere CSS-Projekte zu verwalten. Da Sie diese Hilfen wahrscheinlich beim Arbeiten mit anderen Personen antreffen werden und da sie oft generell hilfreich sind, haben wir einen kurzen Leitfaden zu einigen davon aufgenommen.

### CSS-Methodologien

Anstatt Ihre eigenen Regeln zum Schreiben von CSS zu erstellen, könnten Sie von der Übernahme eines der von der Community bereits entworfenen und über viele Projekte getesteten Ansätze profitieren. Diese Methodologien sind im Wesentlichen CSS-Kodierungsrichtlinien, die einen sehr strukturierten Ansatz zur Schreibweise und Organisation von CSS nehmen. Typischerweise neigen sie dazu, CSS ausführlicher darzustellen als Sie möglicherweise, wenn Sie jeden Selektor auf ein benutzerdefiniertes Regelset für dieses Projekt optimieren würden.

Allerdings gewinnen Sie viel Struktur, wenn Sie eine dieser Methodologien übernehmen. Da viele dieser Systeme weit verbreitet sind, werden andere Entwickler eher verstehen, welchen Ansatz Sie verwenden, und in der Lage sein, ihr eigenes CSS auf die gleiche Weise zu schreiben, anstatt Ihre eigene Methodologie von Grund auf zu erarbeiten.

#### OOCSS

Die meisten Ansätze, denen Sie begegnen werden, verdanken dem Konzept des Objektorientierten CSS (OOCSS) etwas, ein Ansatz, der durch [die Arbeit von Nicole Sullivan](https://github.com/stubbornella/oocss/wiki) populär gemacht wurde. Die Grundidee von OOCSS ist, Ihr CSS in wiederverwendbare Objekte zu unterteilen, die überall auf Ihrer Website verwendet werden können. Das Standardbeispiel für OOCSS ist das als [The Media Object](/de/docs/Web/CSS/How_to/Layout_cookbook/Media_objects) beschriebene Muster. Dies ist ein Muster mit einem festen Bild, Video oder andere Element auf einer Seite und flexiblen Inhalten auf der anderen Seite. Es ist ein Muster, das wir überall auf Websites für Kommentare, Listen und so weiter sehen.

Wenn Sie keinen OOCSS-Ansatz verwenden, könnten Sie ein benutzerdefiniertes CSS für die verschiedenen Orte erstellen, an denen dieses Muster verwendet wird, zum Beispiel, indem Sie zwei Klassen erstellen, eine namens `comment` mit einer Menge von Regeln für die Komponenten und eine andere namens `list-item`, die fast die gleichen Regeln wie die `comment`-Klasse hat, mit Ausnahme einiger winziger Unterschiede. Die Unterschiede zwischen diesen beiden Komponenten bestehen darin, dass das Listenelement einen unteren Rand hat und Bilder in Kommentaren einen Rand haben, während Bilder in Listenelementen keinen Rand haben.

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

In OOCSS würden Sie ein Muster namens `media` erstellen, das alle gemeinsamen CSS für beide Muster enthält — eine Basisklasse für Dinge, die im Allgemeinen die Form des Media-Objekts haben. Dann würden wir eine zusätzliche Klasse hinzufügen, um diese winzigen Unterschiede zu behandeln, und so das Styling auf bestimmte Weise erweitern.

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

In Ihrem HTML müsste der Kommentar sowohl die `media`- als auch die `comment`-Klasse haben:

```html
<div class="media comment">
  <img src="" alt="" />
  <div class="content"></div>
</div>
```

Das Listenelement würde `media` und `list-item` haben:

```html
<ul>
  <li class="media list-item">
    <img src="" alt="" />
    <div class="content"></div>
  </li>
</ul>
```

Die Arbeit, die Nicole Sullivan bei der Beschreibung und Förderung dieses Ansatzes geleistet hat, bedeutet, dass selbst Menschen, die heute nicht strikt einem OOCSS-Ansatz folgen, im Allgemeinen CSS auf diese Weise wiederverwenden — es hat unser Verständnis als ein guter Weg, Dinge im Allgemeinen anzugehen, beeinflusst.

#### BEM

BEM steht für Block Element Modifier. In BEM ist ein Block eine eigenständige Einheit wie ein Button, Menü oder Logo. Ein Element ist etwas wie ein Listenelement oder ein Titel, das an den Block gebunden ist, in dem es sich befindet. Ein Modifier ist ein Kennzeichen für einen Block oder ein Element, das das Styling oder Verhalten ändert. Sie werden Code, der BEM verwendet, an der umfassenden Verwendung von Strichen und Unterstrichen in den CSS-Klassen erkennen. Schauen Sie sich zum Beispiel die Klassen in diesem HTML von der Seite über [BEM Benennungskonventionen](https://getbem.com/naming/) an:

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

Die zusätzlichen Klassen sind ähnlich denen, die im OOCSS-Beispiel verwendet werden; allerdings verwenden sie die strikten Namenskonventionen von BEM.

BEM wird weit verbreitet in größeren Webprojekten verwendet, und viele Leute schreiben ihr CSS auf diese Weise. Es ist wahrscheinlich, dass Sie auf Beispiele stoßen werden, sogar in Tutorials, die BEM-Syntax verwenden, ohne zu erwähnen, warum das CSS auf eine solche Weise strukturiert ist.

Lesen Sie mehr über dieses System [BEM 101](https://css-tricks.com/bem-101/) auf CSS Tricks.

#### Andere gängige Systeme

Es gibt eine große Anzahl dieser Systeme im Einsatz. Andere populäre Ansätze umfassen [Scalable and Modular Architecture for CSS (SMACSS)](https://smacss.com/), erstellt von Jonathan Snook, [ITCSS](https://itcss.io/) von Harry Roberts und [Atomizer CSS (ACSS)](https://acss-io.github.io/atomizer/), ursprünglich von Yahoo! erstellt. Wenn Sie auf ein Projekt stoßen, das einen dieser Ansätze verwendet, liegt der Vorteil darin, dass Sie viele Artikel und Leitfäden finden werden, die Ihnen helfen zu verstehen, wie Sie im selben Stil kodieren können.

Der Nachteil der Verwendung eines solchen Systems ist, dass sie besonders für kleinere Projekte übermäßig komplex erscheinen können.

### Builds-Systeme für CSS

Eine weitere Möglichkeit zur Organisation von CSS ist die Nutzung einiger der Werkzeuge, die Frontend-Entwicklern zur Verfügung stehen, wodurch Sie einen programmatischeren Ansatz zum Schreiben von CSS verfolgen können. Es gibt eine Reihe von Tools, die wir als _Präprozessoren_ und _Postprozessoren_ bezeichnen. Ein Präprozessor läuft über Ihre Rohdateien und verwandelt sie in ein Stylesheet, während ein Postprozessor Ihr fertiges Stylesheet nimmt und etwas damit tut — vielleicht um es zu optimieren, damit es schneller geladen wird.

Die Verwendung eines dieser Tools setzt voraus, dass Ihre Entwicklungsumgebung in der Lage ist, die Skripte auszuführen, die das Prä- und Post-Processing durchführen. Viele Code-Editoren können dies für Sie erledigen, oder Sie können Befehlszeilentools installieren, die Ihnen dabei helfen.

Der beliebteste Präprozessor ist [Sass](https://sass-lang.com/). Dies ist kein Sass-Tutorial, also werde ich kurz ein paar Dinge erklären, die Sass tun kann, die wirklich hilfreich sind in Bezug auf Organisation, auch wenn Sie keine der anderen Sass-Funktionen verwenden. Wenn Sie mehr über Sass lernen möchten, beginnen Sie mit dem Artikel [Sass-Grundlagen](https://sass-lang.com/guide/) und arbeiten sich dann durch deren andere Dokumentationen.

#### Variablen definieren

CSS hat jetzt native [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties), was diese Funktion zunehmend weniger wichtig macht. Einer der Gründe, warum Sie jedoch Sass verwenden könnten, ist die Möglichkeit, alle Farben und Schriftarten, die in einem Projekt verwendet werden, als Einstellungen zu definieren und dann diese Variable im gesamten Projekt zu verwenden. Das bedeutet, dass Sie, wenn Sie feststellen, dass Sie den falschen Blauton verwendet haben, ihn nur an einer Stelle ändern müssen.

Wenn wir eine Variable namens `$base-color` erstellen, wie in der ersten Zeile unten, könnten wir sie überall im Stylesheet verwenden, wo diese Farbe benötigt wird.

```scss
$base-color: #c6538c;

.alert {
  border: 1px solid $base-color;
}
```

Einmal zu CSS kompiliert, würden Sie das folgende CSS im finalen Stylesheet erhalten.

```css
.alert {
  border: 1px solid #c6538c;
}
```

#### Komponenten-Stylesheets kompilieren

Ich habe oben erwähnt, dass eine Möglichkeit zur Organisation von CSS darin besteht, Stylesheets in kleinere Stylesheets aufzuteilen. Wenn Sie Sass verwenden, können Sie dies auf eine andere Ebene bringen und eine Menge sehr kleiner Stylesheets haben — sogar so weit gehen, ein separates Stylesheet für jede Komponente zu haben. Durch die Nutzung der in Sass enthaltenen Funktionalität (Partials) können diese alle zu einem oder einer kleinen Anzahl von Stylesheets zusammenkompiliert werden, die auf Ihrer Website tatsächlich verlinkt sind.

So könnten Sie beispielsweise mit [Partials](https://sass-lang.com/documentation/at-rules/use/#partials) mehrere Stylesheet-Dateien in einem Verzeichnis haben, sagen wir `foundation/_code.scss`, `foundation/_lists.scss`, `foundation/_footer.scss`, `foundation/_links.scss` usw. Dann könnten Sie die Sass-Regel `@use` verwenden, um sie in andere Stylesheets zu laden:

```scss
// foundation/_index.scss
@use "code";
@use "lists";
@use "footer";
@use "links";
```

Wenn die Partials alle in eine Indexdatei geladen werden, wie oben angedeutet, können Sie dann dieses gesamte Verzeichnis auf einmal in ein anderes Stylesheet laden:

```scss
// style.scss
@use "foundation";
```

> [!NOTE]
> Ein einfacher Weg, um Sass auszuprobieren, ist die Verwendung von [CodePen](https://codepen.io/) — Sie können Sass für Ihr CSS in den Einstellungen für ein Pen aktivieren, und CodePen wird dann den Sass-Parser für Sie ausführen, um sicherzustellen, dass Sie die resultierende Webseite mit regulärem CSS sehen können. Manchmal werden Sie feststellen, dass CSS-Tutorials Sass anstelle von reinem CSS in ihren CodePen-Demos verwendet haben, weshalb es nützlich ist, ein wenig darüber Bescheid zu wissen.

#### Post-Processing zur Optimierung

Wenn Sie sich darüber Sorgen machen, die Größe Ihrer Stylesheets zu vergrößern, z. B. durch das Hinzufügen einer Menge zusätzlicher Kommentare und Leerzeichen, dann könnte ein Post-Processing-Schritt darin bestehen, das CSS zu optimieren, indem alles Unnötige in der Produktionsversion entfernt wird. Ein Beispiel für eine Post-Processor-Lösung, um dies zu tun, wäre [cssnano](https://cssnano.github.io/cssnano/).
