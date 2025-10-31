---
title: Organisieren Sie Ihr CSS
slug: Learn_web_development/Core/Styling_basics/Organizing
l10n:
  sourceCommit: f3bf4e2bd456159093d3820253be9f266ace070a
---

Wenn Sie beginnen, an größeren Stylesheets und großen Projekten zu arbeiten, werden Sie feststellen, dass die Pflege einer riesigen CSS-Datei herausfordernd sein kann. In diesem Artikel werfen wir einen kurzen Blick auf einige bewährte Praktiken zum Schreiben Ihres CSS, um es leicht wartbar zu machen, und auf einige der Lösungen, die von anderen verwendet werden, um die Wartungsfähigkeit zu verbessern.

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
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS-Styling-Grundlagen</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen Sie einige Tipps und bewährte Praktiken zur Organisation von Stylesheets kennen und informieren Sie sich über einige der gebräuchlichen Namenskonventionen und Werkzeuge, die bei der CSS-Organisation und der Teamarbeit helfen.
      </td>
    </tr>
  </tbody>
</table>

## Tipps, um Ihr CSS ordentlich zu halten

Hier sind einige allgemeine Vorschläge, wie Sie Ihre Stylesheets organisiert und ordentlich halten können.

### Hat Ihr Projekt einen Coding Style Guide?

Wenn Sie mit einem Team an einem bestehenden Projekt arbeiten, sollten Sie zuerst prüfen, ob das Projekt einen bestehenden Styleguide für CSS hat. Der Styleguide des Teams sollte immer über Ihre persönlichen Vorlieben triumphieren. Oft gibt es nicht die eine falsche oder richtige Methode, aber Konsistenz ist wichtig.

Werfen Sie zum Beispiel einen Blick auf die [CSS-Richtlinien für MDN-Codebeispiele](/de/docs/MDN/Writing_guidelines/Code_style_guide/CSS).

### Halten Sie es konsistent

Wenn Sie die Regeln für das Projekt festlegen dürfen oder alleine arbeiten, ist das Wichtigste, die Dinge konsistent zu halten. Konsistenz kann in vielerlei Hinsicht angewendet werden, etwa bei der Verwendung derselben Namenskonventionen für Klassen, bei der Wahl einer Methode zur Farbbeschreibung oder bei der Beibehaltung eines konsistenten Formats. (Zum Beispiel: Werden Sie Tabs oder Leerzeichen verwenden, um Ihren Code zu indizieren? Wenn Leerzeichen, wie viele?)

Eine festgelegte Reihe von Regeln, denen Sie immer folgen, verringert den mentalen Aufwand beim Schreiben von CSS, da einige Entscheidungen bereits getroffen sind.

### Lesbares CSS formatieren

Es gibt einige Möglichkeiten, wie Sie CSS formatiert sehen werden. Einige Entwickler setzen alle Regeln in eine einzige Zeile, so:

```css-nolint
.box {background-color: #567895; }
h2 {background-color: black; color: white; }
```

Andere Entwickler ziehen es vor, alles auf eine neue Zeile zu brechen:

```css
.box {
  background-color: #567895;
}

h2 {
  background-color: black;
  color: white;
}
```

CSS ist es egal, welche Methode Sie verwenden. Wir finden, dass es lesbarer ist, wenn jedes Eigenschaften-Wert-Paar auf einer neuen Zeile steht.

### Kommentieren Sie Ihr CSS

Das Hinzufügen von Kommentaren zu Ihrem CSS wird jedem zukünftigen Entwickler helfen, mit Ihrer CSS-Datei zu arbeiten, und es wird auch Ihnen helfen, wenn Sie nach einer Pause zum Projekt zurückkehren.

```css
/* This is a CSS comment
It can be broken onto multiple lines. */
```

Ein guter Tipp ist es, einen Kommentarblock zwischen logische Abschnitte Ihres Stylesheets zu setzen, um verschiedene Abschnitte beim Durchsuchen schnell zu finden oder gar, um Ihnen etwas zum Suchen zu geben, um direkt in diesen Teil des CSS zu springen. Wenn Sie eine Zeichenfolge verwenden, die nicht im Code vorkommt, können Sie durch Suchen von Abschnitt zu Abschnitt springen — unten haben wir `||` verwendet.

```css
/* || General styles */

/* … */

/* || Typography */

/* … */

/* || Header and Main Navigation */

/* … */
```

Sie müssen nicht jede einzelne Sache in Ihrem CSS kommentieren, da vieles selbsterklärend ist. Was Sie kommentieren sollten, sind die Dinge, bei denen Sie aus einem bestimmten Grund eine besondere Entscheidung getroffen haben.

Vielleicht haben Sie eine CSS-Eigenschaft auf eine bestimmte Weise verwendet, um ältere Browser-Inkompatibilitäten zu umgehen, zum Beispiel:

```css
.box {
  background-color: red; /* fallback for older browsers that don't support gradients */
  background-image: linear-gradient(to right, red, #aa0000);
}
```

Vielleicht folgten Sie einem Tutorial, um etwas zu erreichen, und das CSS ist nicht sehr selbsterklärend oder erkennbar. In diesem Fall könnten Sie die URL des Tutorials zu den Kommentaren hinzufügen. Sie werden sich selbst dankbar sein, wenn Sie in einem Jahr zu diesem Projekt zurückkehren und sich vage daran erinnern, dass es ein großartiges Tutorial zu dieser Sache gab, sich aber nicht erinnern können, woher es stammte.

### Erstellen Sie logische Abschnitte in Ihrem Stylesheet

Es ist eine gute Idee, alle allgemeinen Stile zuerst im Stylesheet zu haben. Das bedeutet, dass alle Stile, die im Allgemeinen gelten, es sei denn, Sie machen etwas Besonderes mit diesem Element. Typischerweise haben Sie Regeln für Folgendes eingerichtet:

- `body`
- `p`
- `h1`, `h2`, `h3`, `h4`, `h5`
- `ul` und `ol`
- Die `table`-Eigenschaften
- Links

In diesem Abschnitt des Stylesheets bieten wir grundlegendes Styling für den Text auf der Seite an, richten ein Standardstil für Datentabellen und Listen ein und so weiter.

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

Nach diesem Abschnitt könnten wir einige Utility-Klassen definieren, zum Beispiel eine Klasse, die den Standard-Listenstil für Listen entfernt, die wir als Flex-Items oder auf andere Weise darstellen wollen. Wenn Sie einige Styling-Entscheidungen haben, die Sie auf viele verschiedene Elemente anwenden möchten, können sie in diesem Abschnitt platziert werden.

```css
/* || UTILITIES */

.no-bullets {
  list-style: none;
  margin: 0;
  padding: 0;
}

/* … */
```

Dann können wir alles hinzufügen, was seitenweit verwendet wird. Das könnten Dinge wie das grundlegende Seitenlayout, die Kopfzeilen- und Navigationsstile usw. sein.

```css
/* SITEWIDE */

.main-nav {
  /* … */
}

.logo {
  /* … */
}
```

Schließlich fügen wir CSS für spezifische Dinge hinzu, aufgeteilt nach Kontext, Seite oder sogar Komponente, in der sie verwendet werden.

```css
/* || STORE PAGES */

.product-listing {
  /* … */
}

.product-box {
  /* … */
}
```

Durch die Anordnung der Dinge auf diese Weise haben wir zumindest eine Vorstellung davon, in welchem Teil des Stylesheets wir nach etwas suchen müssen, das wir ändern möchten.

### Vermeiden Sie übermäßig spezifische Selektoren

Wenn Sie sehr spezifische Selektoren erstellen, werden Sie oft feststellen, dass Sie Teile Ihres CSS duplizieren müssen, um die gleichen Regeln auf ein anderes Element anzuwenden. Beispielsweise könnten Sie einen Selektor wie unten haben, der die Regel auf einen `<p>` mit einer Klasse von `box` in einem `<article>` mit einer Klasse von `main` anwendet.

```css
article.main p.box {
  border: 1px solid #cccccc;
}
```

Wenn Sie dann die gleichen Regeln auf etwas außerhalb von `main` oder auf etwas anderes als ein `<p>` anwenden möchten, müssten Sie dem Regelwerk einen weiteren Selektor hinzufügen oder ein ganz neues Regelwerk erstellen. Stattdessen könnten Sie den Selektor `.box` verwenden, um Ihre Regel auf jedes Element anzuwenden, das die Klasse `box` hat:

```css
.box {
  border: 1px solid #cccccc;
}
```

Es wird Zeiten geben, in denen es Sinn macht, etwas spezifischer zu machen; dies wird jedoch im Allgemeinen eher die Ausnahme als die Norm sein.

### Brechen Sie große Stylesheets in mehrere kleinere auf

Wenn Sie sehr unterschiedliche Stile für verschiedene Teile der Website haben, möchten Sie möglicherweise ein Stylesheet haben, das alle globalen Regeln enthält, sowie einige kleinere Stylesheets, die die spezifischen Regeln für diese Abschnitte enthalten. Sie können auf einer Seite mehrere Stylesheets verlinken, und die normalen Regeln der Kaskade gelten, wobei die später verlinkten Stylesheets die Regeln der vorher verlinkten Stylesheets überschreiben.

Zum Beispiel könnten wir als Teil der Website einen Online-Shop haben, mit viel CSS, das nur zum Stylen der Produktlistings und Formulare des Shops verwendet wird. Es würde Sinn machen, diese Dinge in einem anderen Stylesheet zu haben, das nur auf Shop-Seiten verlinkt ist.

Dies kann es einfacher machen, Ihr CSS organisiert zu halten und bedeutet auch, dass, wenn mehrere Personen am CSS arbeiten, weniger Situationen auftreten, in denen zwei Personen gleichzeitig am selben Stylesheet arbeiten müssen, was zu Konflikten in der Versionskontrolle führen kann.

## Andere Werkzeuge, die helfen können

CSS selbst verfügt nicht über viel eingebaute Organisation; daher hängt das Maß an Konsistenz in Ihrem CSS weitgehend von Ihnen ab. Die Web-Community hat verschiedene Werkzeuge und Ansätze entwickelt, die Ihnen helfen können, größere CSS-Projekte zu verwalten. Da Sie wahrscheinlich auf diese Hilfsmittel stoßen werden, wenn Sie mit anderen arbeiten, und da sie oft generell von Nutzen sind, haben wir einen kurzen Leitfaden zu einigen von ihnen beigefügt.

### CSS-Methodologien

Statt eigene Regeln für das Schreiben von CSS zu erstellen, könnten Sie von der Übernahme eines der bereits von der Community entworfenen und in vielen Projekten getesteten Ansätze profitieren. Diese Methodologien sind im Wesentlichen CSS-Coding-Leitfäden, die einen sehr strukturierten Ansatz für das Schreiben und Organisieren von CSS verfolgen. Typischerweise tendieren sie dazu, CSS ausführlicher zu gestalten, als wenn Sie jeden Selektor einer benutzerdefinierten Regelmenge für dieses Projekt geschrieben und optimiert hätten.

Jedoch gewinnen Sie durch die Übernahme einer Methodologie viel Struktur. Da viele dieser Systeme weit verbreitet sind, ist es wahrscheinlicher, dass andere Entwickler den von Ihnen verwendeten Ansatz verstehen und ihren eigenen CSS in derselben Weise schreiben können, anstatt Ihre persönliche Methodologie von Grund auf nachvollziehen zu müssen.

#### OOCSS

Die meisten der Ansätze, die Ihnen begegnen, schulden etwas dem Konzept von Object Oriented CSS (OOCSS), einem Ansatz, der durch [die Arbeit von Nicole Sullivan](https://github.com/stubbornella/oocss/wiki) populär wurde. Die Grundidee von OOCSS ist es, Ihr CSS in wiederverwendbare Objekte zu trennen, die überall auf Ihrer Website verwendet werden können. Das Standardbeispiel für OOCSS ist das Muster, das als [Media Object](/de/docs/Web/CSS/How_to/Layout_cookbook/Media_objects) bezeichnet wird. Dies ist ein Muster mit einem festen Bild-, Video- oder anderen Element auf der einen Seite und flexiblem Inhalt auf der anderen Seite. Es ist ein Muster, das wir überall auf Websites für Kommentare, Listen und so weiter sehen.

Wenn Sie keinen OOCSS-Ansatz verfolgen, könnten Sie individuelles CSS für die verschiedenen Stellen erstellen, an denen dieses Muster verwendet wird, indem Sie beispielsweise zwei Klassen erstellen, eine namens `comment` mit einer Reihe von Regeln für die Komponenten und eine andere namens `list-item` mit fast denselben Regeln wie die `comment`-Klasse außer einigen winzigen Unterschieden. Die Unterschiede zwischen diesen beiden Komponenten sind, dass das Listenelement eine untere Umrandung hat und Bilder in Kommentaren eine Umrandung haben, während Listenelement-Bilder dies nicht tun.

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

In OOCSS würden Sie ein Muster namens `media` erstellen, das das gesamte gemeinsame CSS für beide Muster hatte — eine Basisklasse für Dinge, die im Allgemeinen die Form des Medienobjekts haben. Dann würden wir eine zusätzliche Klasse hinzufügen, um diese winzigen Unterschiede zu handhaben und so das Styling spezifisch zu erweitern.

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

Das Listenelement hätte die Klassen `media` und `list-item`:

```html
<ul>
  <li class="media list-item">
    <img src="" alt="" />
    <div class="content"></div>
  </li>
</ul>
```

Die Arbeit, die Nicole Sullivan bei der Beschreibung dieses Ansatzes und seiner Förderung geleistet hat, bedeutet, dass selbst Menschen, die heute nicht strikt dem OOCSS-Ansatz folgen, im Allgemeinen CSS wiederverwenden — es hat sich in unserem Verständnis als eine gute Möglichkeit etabliert, Dinge im Allgemeinen anzugehen.

#### BEM

BEM steht für Block Element Modifier. In BEM ist ein Block eine eigenständige Einheit wie ein Button, Menü oder Logo. Ein Element ist etwas wie ein Listenelement oder ein Titel, das an den Block gebunden ist, in dem es sich befindet. Ein Modifikator ist eine Markierung auf einem Block oder Element, die das Styling oder Verhalten ändert. Sie werden Code, der BEM verwendet, an der extensiven Verwendung von Bindestrichen und Unterstrichen in den CSS-Klassen erkennen können. Schauen Sie sich zum Beispiel die Klassen an, die auf dieses HTML aus der Seite über [BEM Naming Conventions](https://getbem.com/naming/) angewendet werden:

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

Die zusätzlichen Klassen sind den im OOCSS-Beispiel verwendeten ähnlich, verwenden jedoch die strengen Namenskonventionen von BEM.

BEM wird häufig in größeren Webprojekten verwendet und viele Menschen schreiben ihr CSS auf diese Weise. Sie werden wahrscheinlich auf Beispiele stoßen, selbst in Tutorials, die BEM-Syntax verwenden, ohne zu erwähnen, warum das CSS auf diese Weise strukturiert ist.

Lesen Sie mehr über dieses System in [BEM 101](https://css-tricks.com/bem-101/) auf CSS Tricks.

#### Andere gängige Systeme

Es gibt eine große Anzahl dieser Systeme im Einsatz. Andere beliebte Ansätze sind [Scalable and Modular Architecture for CSS (SMACSS)](https://smacss.com/), kreiert von Jonathan Snook, [ITCSS](https://itcss.io/) von Harry Roberts, und [Atomizer CSS (ACSS)](https://acss-io.github.io/atomizer/), ursprünglich von Yahoo! entwickelt. Wenn Sie auf ein Projekt stoßen, das einen dieser Ansätze verwendet, dann ist der Vorteil, dass Sie viele Artikel und Leitfäden finden werden, die Ihnen helfen zu verstehen, wie Sie im gleichen Stil kodieren.

Der Nachteil der Verwendung eines solches Systems ist, dass sie für kleinere Projekte oft übermäßig komplex erscheinen können.

### Build-Systeme für CSS

Eine andere Möglichkeit, CSS zu organisieren, besteht darin, einige der Tools zu nutzen, die für Frontend-Entwickler verfügbar sind und die es Ihnen ermöglichen, einen etwas programmatischeren Ansatz beim Schreiben von CSS zu verfolgen. Es gibt eine Reihe von Tools, die wir als _Preprozessoren_ und _Postprozessoren_ bezeichnen. Ein Preprozessor läuft über Ihre Rohdateien und verwandelt sie in ein Stylesheet, während ein Postprozessor Ihr fertiges Stylesheet nimmt und etwas damit anstellt — vielleicht um es zu optimieren, damit es schneller geladen wird.

Die Verwendung dieser Tools erfordert, dass Ihre Entwicklungsumgebung in der Lage ist, die Skripte auszuführen, die das Pre- und Post-Processing durchführen. Viele Code-Editoren können dies für Sie tun, oder Sie können Befehlszeilentools installieren, die dabei helfen.

Der beliebteste Preprozessor ist [Sass](https://sass-lang.com/). Dies ist kein Sass-Tutorial, daher erkläre ich kurz ein paar der Dinge, die Sass in organisatorischer Hinsicht wirklich hilfreich machen kann, selbst wenn Sie keine der anderen Sass-Funktionen verwenden. Wenn Sie viel mehr über Sass erfahren möchten, beginnen Sie mit dem Artikel [Sass basics](https://sass-lang.com/guide/), und setzen Sie dann die anderen Dokumentationen fort.

#### Variablen definieren

CSS verfügt jetzt über native [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties), wodurch diese Funktion zunehmend an Bedeutung verliert. Einer der Gründe, warum Sie Sass verwenden könnten, ist jedoch, die Möglichkeit, alle Farben und Schriftarten in einem Projekt als Einstellungen zu definieren und diese Variable dann im Projekt zu verwenden. Das bedeutet, dass Sie, wenn Sie feststellen, dass Sie den falschen Blauton verwendet haben, diesen nur an einer Stelle ändern müssen.

Wenn wir eine Variable namens `$base-color` erstellen würden, wie in der ersten Zeile unten gezeigt, könnten wir sie im gesamten Stylesheet überall dort verwenden, wo diese Farbe erforderlich ist.

```scss
$base-color: #c6538c;

.alert {
  border: 1px solid $base-color;
}
```

Einmal zu CSS kompiliert, hätten Sie das folgende CSS im endgültigen Stylesheet.

```css
.alert {
  border: 1px solid #c6538c;
}
```

#### Kompilieren von Komponenten-Stylesheets

Ich habe oben erwähnt, dass eine Möglichkeit, CSS zu organisieren, darin besteht, Stylesheets in kleinere Stylesheets aufzuteilen. Bei der Verwendung von Sass können Sie dies auf eine andere Ebene bringen und eine Vielzahl sehr kleiner Stylesheets haben — sogar bis zu dem Punkt, dass Sie ein separates Stylesheet für jede Komponente haben. Durch die Verwendung der in Sass enthaltenen Funktionalität (Partials) können diese alle zu einem oder einer kleinen Anzahl von Stylesheets zusammengeführt werden, die tatsächlich in Ihre Website verlinkt werden.

So könnten Sie mit [Partials](https://sass-lang.com/documentation/at-rules/use/#partials) mehrere Stil-Dateien innerhalb eines Verzeichnisses haben, etwa `foundation/_code.scss`, `foundation/_lists.scss`, `foundation/_footer.scss`, `foundation/_links.scss` usw. Sie könnten dann die Sass `@use`-Regel verwenden, um sie in anderen Stylesheets zu laden:

```scss
// foundation/_index.scss
@use "code";
@use "lists";
@use "footer";
@use "links";
```

Wenn alle Partials in eine Indexdatei geladen werden, wie oben angedeutet, können Sie dann das gesamte Verzeichnis in einem anderen Stylesheet auf einmal laden:

```scss
// style.scss
@use "foundation";
```

> [!NOTE]
> Ein einfacher Weg, Sass auszuprobieren, ist die Verwendung von [CodePen](https://codepen.io/) — Sie können Sass für Ihr CSS in den Einstellungen für einen Pen aktivieren, und CodePen führt dann den Sass-Parser für Sie aus, damit Sie die resultierende Webseite mit regulärem CSS angewendet sehen. Manchmal werden Sie feststellen, dass CSS-Tutorials in ihren CodePen-Demos Sass anstelle von einfachem CSS verwendet haben, daher ist es nützlich, ein wenig darüber zu wissen.

#### Post-Processing zur Optimierung

Wenn Sie besorgt sind, Ihre Stylesheets durch das Hinzufügen vieler zusätzlicher Kommentare und Leerzeichen zu vergrößern, könnte ein Post-Processing-Schritt darin bestehen, das CSS zu optimieren, indem alles Unnötige in der Produktionsversion entfernt wird. Ein Beispiel für eine Postprozessorlösung, um dies zu tun, wäre [cssnano](https://cssnano.github.io/cssnano/).
