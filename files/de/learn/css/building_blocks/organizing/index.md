---
title: Organisieren Ihres CSS
slug: Learn/CSS/Building_blocks/Organizing
l10n:
  sourceCommit: a966a8b4eade72a13de8a688c13f2d5056321f02
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Debugging_CSS", "Learn/CSS/Building_blocks/Fundamental_CSS_comprehension", "Learn/CSS/Building_blocks")}}

Wenn Sie beginnen, an größeren Stylesheets und großen Projekten zu arbeiten, werden Sie feststellen, dass es eine Herausforderung sein kann, eine riesige CSS-Datei zu pflegen. In diesem Artikel werfen wir einen kurzen Blick auf einige Best Practices für das Schreiben Ihres CSS, um es leicht wartbar zu machen, und einige der Lösungen, die Sie bei anderen finden werden, um die Wartbarkeit zu verbessern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Basissoftware installiert</a
        >, grundlegende Kenntnisse der
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >Arbeit mit Dateien</a
        >, HTML-Grundlagen (siehe
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >) und ein Verständnis dafür, wie CSS funktioniert (siehe
        <a href="/de/docs/Learn/CSS/First_steps">CSS Erste Schritte</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Erlernen einiger Tipps und Best Practices zur Organisation von Stylesheets und Kennenlernen einiger der gebräuchlichen Namenskonventionen und Werkzeuge, die bei der Organisation von CSS und der Zusammenarbeit im Team helfen.
      </td>
    </tr>
  </tbody>
</table>

## Tipps, um Ihr CSS ordentlich zu halten

Hier sind einige allgemeine Vorschläge, um Ihre Stylesheets organisiert und ordentlich zu halten.

### Hat Ihr Projekt einen Kodierungsstil-Leitfaden?

Wenn Sie mit einem Team an einem bestehenden Projekt arbeiten, sollten Sie zuerst prüfen, ob das Projekt einen bestehenden Stil-Leitfaden für CSS hat. Der Team-Stil-Leitfaden sollte immer Vorrang vor Ihren persönlichen Vorlieben haben. Oft gibt es nicht unbedingt ein richtig oder falsch, aber Konsistenz ist wichtig.

Schauen Sie sich zum Beispiel die [CSS-Richtlinien für MDN-Codebeispiele](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/CSS) an.

### Halten Sie es konsistent

Wenn Sie die Regeln für das Projekt festlegen dürfen oder alleine arbeiten, dann ist das Wichtigste, die Dinge konsistent zu halten. Konsistenz kann auf verschiedene Weise angewendet werden, wie z.B. dieselben Namenskonventionen für Klassen zu verwenden, eine Methode zur Beschreibung von Farben zu wählen oder einheitliche Formatierungen zu beibehalten. (Zum Beispiel: Verwenden Sie Tabs oder Leerzeichen zum Einrücken Ihres Codes? Wenn Leerzeichen, wie viele Leerzeichen?)

Ein Set von Regeln, die Sie immer befolgen, reduziert den geistigen Aufwand beim Schreiben von CSS, da einige Entscheidungen bereits getroffen sind.

### Lesbares CSS formatieren

Es gibt ein paar Möglichkeiten, wie CSS formatiert werden kann. Einige Entwickler setzen alle Regeln in eine einzige Zeile:

```css-nolint
.box {background-color: #567895; }
h2 {background-color: black; color: white; }
```

Andere Entwickler bevorzugen es, alles auf eine neue Zeile zu setzen:

```css
.box {
  background-color: #567895;
}

h2 {
  background-color: black;
  color: white;
}
```

CSS ist es egal, welche Methode Sie verwenden. Wir finden persönlich, dass es lesbarer ist, wenn sich jedes Eigenschaft-Wert-Paar auf einer neuen Zeile befindet.

### Kommentieren Sie Ihr CSS

Kommentare in Ihr CSS einzufügen, wird jedem zukünftigen Entwickler helfen, mit Ihrer CSS-Datei zu arbeiten, aber es wird auch Ihnen helfen, wenn Sie nach einer Pause zu dem Projekt zurückkehren.

```css
/* This is a CSS comment
It can be broken onto multiple lines. */
```

Ein guter Tipp ist es, zwischen logischen Abschnitten in Ihrem Stylesheet einen Kommentarblock einzufügen, um verschiedene Abschnitte beim Durchsuchen schnell zu finden oder eine Möglichkeit zu haben, nach bestimmten Abschnitten zu suchen. Wenn Sie eine Zeichenfolge verwenden, die in Ihrem Code nicht vorkommt, können Sie schnell von Abschnitt zu Abschnitt springen, indem Sie danach suchen — unten haben wir `||` verwendet.

```css
/* || General styles */

/* … */

/* || Typography */

/* … */

/* || Header and Main Navigation */

/* … */
```

Sie brauchen nicht jede einzelne Sache in Ihrem CSS zu kommentieren, da vieles selbsterklärend sein wird. Kommentiert werden sollten die Dinge, bei denen Sie aus einem bestimmten Grund eine spezielle Entscheidung getroffen haben.

Vielleicht haben Sie eine CSS-Eigenschaft auf eine bestimmte Weise genutzt, um ältere Browser-Inkompatibilitäten zu umgehen, zum Beispiel:

```css
.box {
  background-color: red; /* fallback for older browsers that don't support gradients */
  background-image: linear-gradient(to right, #ff0000, #aa0000);
}
```

Vielleicht haben Sie ein Tutorial befolgt, um etwas zu erreichen, und das CSS ist nicht sehr selbsterklärend oder erkennbar. In diesem Fall könnten Sie die URL des Tutorials in den Kommentaren hinzufügen. Sie werden sich selbst dafür danken, wenn Sie in einem Jahr zu diesem Projekt zurückkehren und sich vage erinnern, dass es ein großartiges Tutorial dazu gab, aber nicht mehr wissen, woher es stammt.

### Erstellen Sie logische Abschnitte in Ihrem Stylesheet

Es ist eine gute Idee, alle häufig verwendeten Stile zuerst im Stylesheet zu haben. Das bedeutet alle Stile, die generell angewendet werden, es sei denn, Sie machen etwas Spezielles mit diesem Element. Sie werden typischerweise Regeln für folgende Elemente einrichten:

- `body`
- `p`
- `h1`, `h2`, `h3`, `h4`, `h5`
- `ul` und `ol`
- Die `table`-Eigenschaften
- Links

In diesem Abschnitt des Stylesheets stellen wir Standard-Styling für den Text auf der Seite bereit, richten Standard-Styling für Datentabellen, Listen usw. ein.

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

Nach diesem Abschnitt könnten wir ein paar Utility-Klassen definieren, zum Beispiel eine Klasse, die den Standard-Listenstil für Listen entfernt, die wir als Flex-Elemente oder auf andere Weise anzeigen möchten. Wenn Sie ein paar Styling-Optionen haben, die Sie auf viele verschiedene Elemente anwenden möchten, können diese in diesen Abschnitt eingefügt werden.

```css
/* || UTILITIES */

.nobullets {
  list-style: none;
  margin: 0;
  padding: 0;
}

/* … */
```

Dann können wir alles hinzufügen, was seitenweit verwendet wird. Das könnte Dinge wie das Grundlayout der Seite, die Kopfzeile, die Navigationsstile usw. sein.

```css
/* || SITEWIDE */

.main-nav {
  /* … */
}

.logo {
  /* … */
}
```

Schließlich fügen wir CSS für spezifische Dinge hinzu, unterteilt nach Kontext, Seite oder sogar Komponente, in der sie verwendet werden.

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

Wenn Sie sehr spezifische Selektoren erstellen, werden Sie oft feststellen, dass Sie Abschnitte Ihres CSS duplizieren müssen, um dieselben Regeln auf ein anderes Element anzuwenden. Zum Beispiel könnten Sie etwas wie den untenstehenden Selektor haben, der die Regel auf ein `<p>` mit einer Klasse `box` innerhalb eines `<article>` mit der Klasse `main` anwendet.

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

Es wird Zeiten geben, in denen es sinnvoll ist, etwas spezifischer zu machen; dies wird jedoch in der Regel eine Ausnahme und nicht die Regel sein.

### Große Stylesheets in mehrere kleinere aufteilen

In Fällen, in denen Sie sehr unterschiedliche Stile für verschiedene Teile der Seite haben, könnten Sie ein Stylesheet haben, das alle globalen Regeln enthält, sowie einige kleinere Stylesheets, die die spezifischen Regeln enthalten, die für diese Abschnitte benötigt werden. Sie können auf einer Seite auf mehrere Stylesheets verlinken, und die normalen Regeln der Kaskade gelten, wobei Regeln in später verlinkten Stylesheets nach Regeln in früher verlinkten Stylesheets kommen.

Zum Beispiel könnten wir einen Online-Shop als Teil der Seite haben, mit viel CSS, das nur für das Styling der Produktlisten und Formulare im Store verwendet wird. Es wäre sinnvoll, diese Dinge in einem anderen Stylesheet zu haben, das nur auf den Store-Seiten verlinkt wird.

Dies kann es einfacher machen, Ihr CSS zu organisieren, und bedeutet zudem, dass, wenn mehrere Personen am CSS arbeiten, es weniger Situationen gibt, in denen zwei Personen gleichzeitig an demselben Stylesheet arbeiten müssen, was zu Konflikten in der Versionskontrolle führen könnte.

## Andere Hilfsmittel, die helfen können

CSS hat selbst nicht viele eingebaute Organisationselemente; daher hängt das Maß an Konsistenz in Ihrem CSS größtenteils von Ihnen ab. Die Web-Community hat verschiedene Werkzeuge und Ansätze entwickelt, die Ihnen helfen können, größere CSS-Projekte zu verwalten. Da Sie wahrscheinlich auf diese Hilfsmittel stoßen werden, wenn Sie mit anderen Personen arbeiten, und da sie oft allgemein von Nutzen sind, haben wir einen kurzen Leitfaden zu einigen von ihnen beigefügt.

### CSS-Methodologien

Anstatt Ihre eigenen Regeln für das Schreiben von CSS zu entwickeln, können Sie davon profitieren, einen der Ansätze zu übernehmen, die bereits von der Community entwickelt und in vielen Projekten getestet wurden. Diese Methodologien sind im Wesentlichen CSS-Kodierungsleitfäden, die einen sehr strukturierten Ansatz zum Schreiben und Organisieren von CSS verfolgen. Typischerweise führen sie dazu, dass CSS ausführlicher gemacht wird, als Sie vielleicht hätten, wenn Sie jeden Selektor zu einem benutzerdefinierten Regelset für dieses Projekt optimiert hätten.

Jedoch gewinnen Sie viel Struktur, indem Sie eine übernehmen. Da viele dieser Systeme weit verbreitet sind, ist es wahrscheinlicher, dass andere Entwickler den von Ihnen verwendeten Ansatz verstehen und in der Lage sind, ihr eigenes CSS auf die gleiche Weise zu schreiben, anstatt Ihre eigene persönliche Methodologie von Grund auf neu herauszufinden.

#### OOCSS

Die meisten der Ansätze, auf die Sie stoßen werden, verdanken etwas dem Konzept von Object Oriented CSS (OOCSS), einem Ansatz, der durch [die Arbeit von Nicole Sullivan](https://github.com/stubbornella/oocss/wiki) populär gemacht wurde. Die Grundidee von OOCSS besteht darin, Ihr CSS in wiederverwendbare Objekte aufzuteilen, die überall auf Ihrer Seite verwendet werden können. Das Standardbeispiel für OOCSS ist das Muster, das als [Das Medienobjekt](/de/docs/Web/CSS/Layout_cookbook/Media_objects) beschrieben wird. Das ist ein Muster mit einem Bild, Video oder einem anderen Element fester Größe auf der einen Seite und flexiblem Inhalt auf der anderen Seite. Es ist ein Muster, das wir häufig auf Webseiten für Kommentare, Listen und so weiter sehen.

Wenn Sie keinen OOCSS-Ansatz verfolgen, könnten Sie maßgeschneiderte CSS für die verschiedenen Stellen erstellen, an denen dieses Muster verwendet wird, indem Sie beispielsweise zwei Klassen erstellen, eine namens `comment` mit einer Vielzahl von Regeln für die Komponenten und eine weitere namens `list-item` mit fast denselben Regeln wie die Klasse `comment`, mit Ausnahme einiger kleiner Unterschiede. Die Unterschiede zwischen diesen beiden Komponenten bestehen darin, dass das Listenelement eine untere Grenze hat und Bilder in Kommentaren eine Grenze haben, während Listenelement-Bilder keine Grenze haben.

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

In OOCSS würden Sie ein Muster namens `media` erstellen, das alle gemeinsamen CSS für beide Muster enthält — eine Basisklasse für Dinge, die im Allgemeinen die Form des Medienobjekts haben. Dann würden wir eine zusätzliche Klasse hinzufügen, um mit diesen kleinen Unterschieden umzugehen und so das Styling auf spezifische Weise zu erweitern.

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

In Ihrem HTML müssten sowohl die `media`- als auch die `comment`-Klassen auf den Kommentar angewendet werden:

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

Die Arbeit, die Nicole Sullivan bei der Beschreibung und Förderung dieses Ansatzes geleistet hat, bedeutet, dass selbst Personen, die heute nicht streng einem OOCSS-Ansatz folgen, im Allgemeinen CSS auf diese Weise wiederverwenden — es ist in unser Verständnis als eine gute Möglichkeit, Dinge allgemein anzugehen, eingeflossen.

#### BEM

BEM steht für Block Element Modifier. In BEM ist ein Block eine eigenständige Entität wie ein Knopf, ein Menü oder ein Logo. Ein Element ist etwas wie ein Listenelement oder ein Titel, das an den Block gebunden ist, in dem es sich befindet. Ein Modifier ist eine Kennzeichnung an einem Block oder Element, die das Styling oder Verhalten ändert. Sie werden in der Lage sein, Code zu erkennen, der BEM verwendet, aufgrund des umfangreichen Einsatzes von Bindestrichen und Unterstrichen in den CSS-Klassen. Betrachten Sie zum Beispiel die Klassen, die auf dieses HTML von der Seite über [BEM-Namenskonventionen](https://getbem.com/naming/) angewendet werden:

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

Die zusätzlichen Klassen ähneln denen, die im OOCSS-Beispiel verwendet werden; jedoch verwenden sie die strengen Namenskonventionen von BEM.

BEM wird häufig in größeren Webprojekten verwendet und viele Menschen schreiben ihr CSS auf diese Weise. Es ist wahrscheinlich, dass Sie auf Beispiele stoßen werden, selbst in Tutorials, die BEM-Syntax verwenden, ohne zu erwähnen, warum das CSS auf diese Weise strukturiert ist.

Lesen Sie mehr über dieses System [BEM 101](https://css-tricks.com/bem-101/) auf CSS Tricks.

#### Andere gängige Systeme

Es gibt eine große Anzahl dieser Systeme in Gebrauch. Andere beliebte Ansätze umfassen [Scalable and Modular Architecture for CSS (SMACSS)](https://smacss.com/), entwickelt von Jonathan Snook, [ITCSS](https://itcss.io/) von Harry Roberts, und [Atomizer CSS (ACSS)](https://acss-io.github.io/atomizer/), ursprünglich erstellt von Yahoo!. Wenn Sie auf ein Projekt stoßen, das einen dieser Ansätze verwendet, ist der Vorteil, dass Sie suchen und viele Artikel und Leitfäden finden können, die Ihnen helfen, im gleichen Stil zu codieren.

Der Nachteil der Verwendung eines solchen Systems besteht darin, dass sie gerade für kleinere Projekte übermäßig komplex erscheinen können.

### Build-Systeme für CSS

Eine weitere Möglichkeit, CSS zu organisieren, besteht darin, einige der Tools auszunutzen, die für Front-End-Entwickler verfügbar sind, die es Ihnen ermöglichen, einen etwas programmatischeren Ansatz beim Schreiben von CSS zu nehmen. Es gibt eine Reihe von Tools, die wir als _Preprozessoren_ und _Postprozessoren_ bezeichnen. Ein Preprozessor läuft über Ihre Rohdateien und wandelt sie in ein Stylesheet um, während ein Postprozessor Ihr fertiges Stylesheet übernimmt und etwas damit tut — vielleicht um es zu optimieren, damit es schneller geladen wird.

Die Verwendung eines dieser Tools erfordert, dass Ihre Entwicklungsumgebung in der Lage ist, die Skripte auszuführen, die das Pre- und Post-Processing durchführen. Viele Code-Editoren können das für Sie tun, oder Sie können Befehlszeilen-Tools installieren, die helfen.

Der beliebteste Preprozessor ist [Sass](https://sass-lang.com/). Dies ist kein Sass-Tutorial, daher werde ich kurz einige der Dinge erklären, die Sass tun kann, die in Bezug auf die Organisation wirklich hilfreich sind, selbst wenn Sie keine der anderen Sass-Funktionen verwenden. Wenn Sie viel mehr über Sass lernen möchten, beginnen Sie mit dem Artikel [Sass Basics](https://sass-lang.com/guide/), und fahren Sie dann mit deren weiterer Dokumentation fort.

#### Variablen definieren

CSS hat jetzt native [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Using_CSS_custom_properties), was diese Funktion zunehmend weniger wichtig macht. Einer der Gründe, warum Sie Sass verwenden könnten, ist jedoch, dass Sie alle Farben und Schriftarten, die in einem Projekt verwendet werden, als Einstellungen definieren und dann diese Variable im Projekt verwenden können. Dies bedeutet, dass, wenn Sie feststellen, dass Sie den falschen Blauton verwendet haben, Sie ihn nur an einer Stelle ändern müssen.

Wenn wir eine Variable namens `$base-color` erstellen würden, wie in der ersten Zeile unten dargestellt, könnten wir sie im Stylesheet überall dort verwenden, wo diese Farbe benötigt wird.

```scss
$base-color: #c6538c;

.alert {
  border: 1px solid $base-color;
}
```

Nach der Umwandlung in CSS hätten Sie im endgültigen Stylesheet das folgende CSS.

```css
.alert {
  border: 1px solid #c6538c;
}
```

#### Kompilieren von Komponenten-Stylesheets

Ich habe weiter oben erwähnt, dass eine Möglichkeit, CSS zu organisieren, darin besteht, Stylesheets in kleinere Stylesheets aufzuteilen. Bei der Verwendung von Sass können Sie das auf eine andere Ebene bringen und viele sehr kleine Stylesheets haben — sogar so weit gehen, dass Sie ein separates Stylesheet für jede Komponente haben. Durch die Verwendung der in Sass enthaltenen Funktionalität (Teildateien) können diese alle zusammen in ein oder eine kleine Anzahl von Stylesheets kompiliert werden, die tatsächlich in Ihre Website eingebunden werden.

So könnten Sie zum Beispiel mit [Teildateien](https://sass-lang.com/documentation/at-rules/use/#partials) mehrere Style-Dateien innerhalb eines Verzeichnisses haben, zum Beispiel `foundation/_code.scss`, `foundation/_lists.scss`, `foundation/_footer.scss`, `foundation/_links.scss`, usw. Sie könnten dann die Sass `@use`-Regel verwenden, um diese in andere Stylesheets zu laden:

```scss
// foundation/_index.scss
@use "code";
@use "lists";
@use "footer";
@use "links";
```

Wenn die Teildateien alle in eine Indexdatei geladen werden, wie oben angedeutet, können Sie dann dieses gesamte Verzeichnis in einem weiteren Stylesheet auf einmal laden:

```scss
// style.scss
@use "foundation";
```

> [!NOTE]
> Ein einfacher Weg, Sass auszuprobieren, ist die Verwendung von [CodePen](https://codepen.io/) — Sie können Sass für Ihr CSS in den Einstellungen für ein Pen aktivieren, und CodePen wird dann den Sass-Parser für Sie ausführen, damit Sie die resultierende Webseite mit regulärem CSS sehen können. Manchmal werden Sie feststellen, dass CSS-Tutorials Sass anstelle von normalem CSS in ihren CodePen-Demos verwendet haben, daher ist es nützlich, ein wenig darüber zu wissen.

#### Post-Processing zur Optimierung

Wenn Sie sich Sorgen machen, Ihrem Stylesheet durch die Hinzufügung einer Menge zusätzlicher Kommentare und Leerzeichen Größe hinzuzufügen, könnte ein Post-Processing-Schritt darin bestehen, das CSS zu optimieren, indem alles Unnötige in der Produktionsversion entfernt wird. Ein Beispiel für eine Postprozessor-Lösung hierfür wäre [cssnano](https://cssnano.github.io/cssnano/).

## Zusammenfassung

Dies ist der letzte Teil unseres Bausteinmoduls, und wie Sie sehen können, gibt es viele Möglichkeiten, wie Sie Ihre Erkundung von CSS von diesem Punkt aus fortsetzen können — aber jetzt können Sie sich mit unseren Bewertungen testen: die erste ist unten verlinkt.

Um mehr über Layout in CSS zu erfahren, sehen Sie sich das [CSS Layout](/de/docs/Learn/CSS/CSS_layout)-Modul an.

Sie sollten jetzt auch die Fähigkeiten haben, den Rest des [MDN CSS](/de/docs/Web/CSS)-Materials zu erkunden. Sie können Eigenschaften und Werte nachschlagen, unser [CSS-Kochbuch](/de/docs/Web/CSS/Layout_cookbook) nach Mustern durchsuchen oder in einigen der speziellen Leitfäden weiterlesen, wie z.B. unseren [Leitfaden zum CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout).

{{PreviousMenuNext("Learn/CSS/Building_blocks/Debugging_CSS", "Learn/CSS/Building_blocks/Fundamental_CSS_comprehension", "Learn/CSS/Building_blocks")}}
