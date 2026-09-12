---
title: Organisieren Ihres CSS
slug: Learn_web_development/Core/Styling_basics/Organizing
l10n:
  sourceCommit: e3a2272d272f21ea38e5fff9bd6ccec2d0dfb1a8
---

Wenn Sie beginnen, mit größeren Stylesheets und umfangreichen Projekten zu arbeiten, werden Sie feststellen, dass die Pflege einer riesigen CSS-Datei schwierig sein kann. In diesem Artikel werfen wir einen kurzen Blick auf einige bewährte Vorgehensweisen zum Schreiben Ihres CSS, damit es leicht wartbar bleibt, sowie auf einige Lösungen, die andere verwenden, um die Wartbarkeit zu verbessern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >Grundlegende Software installiert</a
        >, grundlegende Kenntnisse im
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files"
          >Umgang mit Dateien</a
        >, HTML-Grundlagen (siehe
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Einführung in HTML</a
        >) sowie eine Vorstellung davon, wie CSS funktioniert (siehe
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen der CSS-Gestaltung</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Einige Tipps und bewährte Vorgehensweisen zum Organisieren von Stylesheets
        kennenlernen sowie mehr über einige häufig verwendete Namenskonventionen
        und Werkzeuge erfahren, die bei der CSS-Organisation und der Arbeit im
        Team helfen.
      </td>
    </tr>
  </tbody>
</table>

## Tipps, um Ihr CSS übersichtlich zu halten

Hier sind einige allgemeine Vorschläge, wie Sie Ihre Stylesheets organisiert und übersichtlich halten können.

### Hat Ihr Projekt einen Styleguide für Code?

Wenn Sie in einem Team an einem bestehenden Projekt arbeiten, sollten Sie zuerst prüfen, ob das Projekt bereits einen Styleguide für CSS hat. Der Styleguide des Teams sollte immer Vorrang vor Ihren persönlichen Vorlieben haben. Es gibt oft kein richtig oder falsch, aber Konsistenz ist wichtig.

Sehen Sie sich beispielsweise die [CSS-Richtlinien für MDN-Codebeispiele](/de/docs/MDN/Writing_guidelines/Code_style_guide/CSS) an.

### Bleiben Sie konsistent

Wenn Sie die Regeln für das Projekt festlegen können oder allein arbeiten, ist das Wichtigste, konsistent zu bleiben. Konsistenz kann auf viele Arten angewendet werden, etwa indem dieselben Namenskonventionen für Klassen verwendet werden, eine Methode zur Beschreibung von Farben gewählt wird oder eine einheitliche Formatierung beibehalten wird. (Verwenden Sie beispielsweise Tabs oder Leerzeichen zum Einrücken Ihres Codes? Falls Leerzeichen, wie viele?)

Ein Satz von Regeln, dem Sie immer folgen, verringert den mentalen Aufwand beim Schreiben von CSS, da einige Entscheidungen bereits getroffen sind.

### Lesbares CSS formatieren

Es gibt mehrere Arten, CSS zu formatieren. Manche Entwickler schreiben alle Regeln in eine einzige Zeile, etwa so:

```css-nolint
.box {background-color: #567895; }
h2 {background-color: black; color: white; }
```

Andere Entwickler ziehen es vor, alles in neue Zeilen umzubrechen:

```css
.box {
  background-color: #567895;
}

h2 {
  background-color: black;
  color: white;
}
```

CSS ist es egal, welche Variante Sie verwenden. Wir finden persönlich, dass es besser lesbar ist, jedes Eigenschaft-Wert-Paar in eine neue Zeile zu schreiben.

### Kommentieren Sie Ihr CSS

Das Hinzufügen von Kommentaren zu Ihrem CSS hilft zukünftigen Entwicklern bei der Arbeit mit Ihrer CSS-Datei, aber auch Ihnen selbst, wenn Sie nach einer Pause zum Projekt zurückkehren.

```css
/* This is a CSS comment
It can be broken onto multiple lines. */
```

Ein guter Tipp ist außerdem, zwischen logischen Abschnitten Ihres Stylesheets einen Kommentarblock hinzuzufügen. Dies hilft dabei, beim Durchsehen schnell verschiedene Abschnitte zu finden, oder gibt Ihnen sogar etwas, wonach Sie suchen können, um direkt zu diesem Teil des CSS zu springen. Wenn Sie eine Zeichenfolge verwenden, die nicht im Code vorkommt, können Sie durch Suchen danach von Abschnitt zu Abschnitt springen — unten haben wir `||` verwendet.

```css
/* || General styles */

/* … */

/* || Typography */

/* … */

/* || Header and Main Navigation */

/* … */
```

Sie müssen nicht jede einzelne Sache in Ihrem CSS kommentieren, da vieles selbsterklärend ist. Kommentieren sollten Sie die Dinge, bei denen Sie aus einem bestimmten Grund eine besondere Entscheidung getroffen haben.

Vielleicht haben Sie beispielsweise eine CSS-Eigenschaft auf eine bestimmte Weise verwendet, um Inkompatibilitäten mit älteren Browsern zu umgehen:

```css
.box {
  background-color: red; /* fallback for older browsers that don't support gradients */
  background-image: linear-gradient(to right, red, #aa0000);
}
```

Möglicherweise haben Sie einem Tutorial gefolgt, um etwas zu erreichen, und das CSS ist nicht besonders selbsterklärend oder wiedererkennbar. In diesem Fall könnten Sie die URL des Tutorials zu den Kommentaren hinzufügen. Sie werden sich selbst danken, wenn Sie in etwa einem Jahr zu diesem Projekt zurückkehren und sich vage daran erinnern, dass es ein großartiges Tutorial zu dieser Sache gab, aber nicht mehr wissen, woher es stammt.

### Erstellen Sie logische Abschnitte in Ihrem Stylesheet

Es ist eine gute Idee, alle allgemeinen Stilregeln zuerst im Stylesheet zu platzieren. Das bedeutet alle Styles, die im Allgemeinen angewendet werden, sofern Sie mit diesem Element nichts Besonderes machen. Üblicherweise werden Sie Regeln einrichten für:

- `body`
- `p`
- `h1`, `h2`, `h3`, `h4`, `h5`
- `ul` und `ol`
- Die `table`-Eigenschaften
- Links

In diesem Abschnitt des Stylesheets stellen wir Standard-Styles für die Schrift auf der Website bereit, richten einen Standardstil für Datentabellen und Listen ein und so weiter.

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

Nach diesem Abschnitt könnten wir einige Utility-Klassen definieren, beispielsweise eine Klasse, die den Standard-Listenstil für Listen entfernt, die wir als Flex-Elemente oder auf andere Weise anzeigen möchten. Wenn Sie einige Stiloptionen haben, von denen Sie wissen, dass Sie sie auf viele verschiedene Elemente anwenden möchten, können diese in diesem Abschnitt stehen.

```css
/* || UTILITIES */

.no-bullets {
  list-style: none;
  margin: 0;
  padding: 0;
}

/* … */
```

Anschließend können wir alles hinzufügen, was auf der gesamten Website verwendet wird. Das können Dinge wie das grundlegende Seitenlayout, der Header, die Navigation-Styles und so weiter sein.

```css
/* SITEWIDE */

.main-nav {
  /* … */
}

.logo {
  /* … */
}
```

Abschließend fügen wir CSS für bestimmte Dinge ein, aufgeteilt nach dem Kontext, der Seite oder sogar der Komponente, in denen sie verwendet werden.

```css
/* || STORE PAGES */

.product-listing {
  /* … */
}

.product-box {
  /* … */
}
```

Indem wir die Dinge auf diese Weise anordnen, haben wir zumindest eine Vorstellung davon, in welchem Teil des Stylesheets wir nach etwas suchen müssen, das wir ändern möchten.

### Vermeiden Sie zu spezifische Selektoren

Wenn Sie sehr spezifische Selektoren erstellen, werden Sie oft feststellen, dass Sie Teile Ihres CSS duplizieren müssen, um dieselben Regeln auf ein anderes Element anzuwenden. Beispielsweise könnten Sie einen Selektor wie den folgenden haben, der die Regel auf ein `<p>` mit der Klasse `box` innerhalb eines `<article>` mit der Klasse `main` anwendet.

```css
article.main p.box {
  border: 1px solid #cccccc;
}
```

Wenn Sie dieselben Regeln dann auf etwas außerhalb von `main` oder auf etwas anderes als ein `<p>` anwenden wollten, müssten Sie diesen Regeln einen weiteren Selektor hinzufügen oder einen völlig neuen Regelsatz erstellen. Stattdessen könnten Sie den Selektor `.box` verwenden, um Ihre Regel auf jedes Element anzuwenden, das die Klasse `box` hat:

```css
.box {
  border: 1px solid #cccccc;
}
```

Es wird Fälle geben, in denen es sinnvoll ist, etwas spezifischer zu machen; im Allgemeinen wird dies jedoch eher eine Ausnahme als die übliche Praxis sein.

### Teilen Sie große Stylesheets in mehrere kleinere auf

Wenn Sie für unterschiedliche Teile der Website sehr verschiedene Styles haben, möchten Sie möglicherweise ein Stylesheet mit allen globalen Regeln sowie einige kleinere Stylesheets mit den spezifischen Regeln für diese Abschnitte verwenden. Sie können von einer Seite aus auf mehrere Stylesheets verlinken, und die normalen Regeln der Kaskade gelten, wobei Regeln in später verlinkten Stylesheets nach Regeln in früher verlinkten Stylesheets kommen.

Beispielsweise könnte ein Online-Shop Teil der Website sein, mit viel CSS, das nur zum Gestalten der Produktlisten und Formulare des Shops verwendet wird. Es wäre sinnvoll, diese Dinge in einem anderen Stylesheet zu haben, das nur auf Shop-Seiten verlinkt wird.

Dies kann es erleichtern, Ihr CSS organisiert zu halten, und bedeutet außerdem, dass bei der Arbeit mehrerer Personen am CSS weniger Situationen entstehen, in denen zwei Personen gleichzeitig am selben Stylesheet arbeiten müssen, was zu Konflikten in der Versionsverwaltung führt.

## Weitere hilfreiche Werkzeuge

CSS selbst bietet nicht viele integrierte Möglichkeiten zur Organisation; daher hängt das Maß an Konsistenz in Ihrem CSS weitgehend von Ihnen ab. Die Web-Community hat verschiedene Werkzeuge und Ansätze entwickelt, die Ihnen bei der Verwaltung größerer CSS-Projekte helfen können. Da Sie bei der Zusammenarbeit mit anderen wahrscheinlich auf diese Hilfsmittel stoßen werden und sie oft allgemein nützlich sind, haben wir einen kurzen Leitfaden zu einigen davon aufgenommen.

### CSS-Methodologien

Anstatt eigene Regeln für das Schreiben von CSS entwickeln zu müssen, kann es vorteilhaft sein, einen der Ansätze zu übernehmen, die bereits von der Community entwickelt und in vielen Projekten getestet wurden. Diese Methodologien sind im Wesentlichen Leitfäden zum Codieren von CSS, die einen sehr strukturierten Ansatz für das Schreiben und Organisieren von CSS verfolgen. Typischerweise machen sie CSS ausführlicher, als es wäre, wenn Sie jeden Selektor für ein benutzerdefiniertes Regelwerk dieses Projekts schreiben und optimieren würden.

Durch die Übernahme eines solchen Ansatzes gewinnen Sie jedoch viel Struktur. Da viele dieser Systeme weit verbreitet sind, verstehen andere Entwickler den von Ihnen verwendeten Ansatz wahrscheinlich eher und können ihr eigenes CSS auf die gleiche Weise schreiben, anstatt Ihre persönliche Methodologie von Grund auf entschlüsseln zu müssen.

#### OOCSS

Die meisten Ansätze, auf die Sie stoßen werden, verdanken dem Konzept von Object Oriented CSS (OOCSS) etwas, einem durch [die Arbeit von Nicole Sullivan](https://github.com/stubbornella/oocss/wiki) bekannt gewordenen Ansatz. Die Grundidee von OOCSS besteht darin, Ihr CSS in wiederverwendbare Objekte zu unterteilen, die überall auf Ihrer Website eingesetzt werden können. Das Standardbeispiel für OOCSS ist das als [Media Object](/de/docs/Web/CSS/How_to/Layout_cookbook/Media_objects) beschriebene Muster. Dabei handelt es sich um ein Muster mit einem Bild, Video oder anderen Element fester Größe auf einer Seite und flexiblem Inhalt auf der anderen. Dieses Muster sehen wir auf Websites überall bei Kommentaren, Listen und so weiter.

Wenn Sie keinen OOCSS-Ansatz verwenden, könnten Sie benutzerdefiniertes CSS für die verschiedenen Stellen erstellen, an denen dieses Muster verwendet wird, beispielsweise durch das Erstellen zweier Klassen: eine namens `comment` mit einer Reihe von Regeln für die Bestandteile und eine andere namens `list-item` mit nahezu denselben Regeln wie die Klasse `comment`, abgesehen von einigen kleinen Unterschieden. Die Unterschiede zwischen diesen beiden Komponenten bestehen darin, dass das Listenelement einen unteren Rahmen hat und Bilder in Kommentaren einen Rahmen haben, während Bilder von Listenelementen keinen haben.

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

In OOCSS würden Sie ein Muster namens `media` erstellen, das das gesamte gemeinsame CSS für beide Muster enthält — eine Basisklasse für Dinge, die im Allgemeinen die Form des Media Object haben. Anschließend würden wir eine zusätzliche Klasse hinzufügen, um diese kleinen Unterschiede zu behandeln und damit das Styling auf spezifische Weise zu erweitern.

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

In Ihrem HTML müsste auf den Kommentar sowohl die Klasse `media` als auch `comment` angewendet werden:

```html
<div class="media comment">
  <img src="" alt="" />
  <div class="content"></div>
</div>
```

Auf das Listenelement würden `media` und `list-item` angewendet:

```html
<ul>
  <li class="media list-item">
    <img src="" alt="" />
    <div class="content"></div>
  </li>
</ul>
```

Die Arbeit, die Nicole Sullivan bei der Beschreibung und Förderung dieses Ansatzes geleistet hat, bedeutet, dass selbst Personen, die heute nicht strikt einem OOCSS-Ansatz folgen, CSS im Allgemeinen auf diese Weise wiederverwenden — dies ist Teil unseres Verständnisses davon geworden, wie man Dinge generell gut angeht.

#### BEM

BEM steht für Block Element Modifier. Bei BEM ist ein Block eine eigenständige Einheit wie eine Schaltfläche, ein Menü oder ein Logo. Ein Element ist etwas wie ein Listenelement oder ein Titel, das an den Block gebunden ist, in dem es sich befindet. Ein Modifier ist ein Kennzeichen für einen Block oder ein Element, das das Styling oder Verhalten verändert. Code, der BEM verwendet, erkennen Sie an der umfangreichen Verwendung von Bindestrichen und Unterstrichen in CSS-Klassen. Sehen Sie sich beispielsweise die Klassen an, die auf dieses HTML von der Seite über [BEM-Namenskonventionen](https://getbem.com/naming/) angewendet werden:

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

Die zusätzlichen Klassen ähneln denen aus dem OOCSS-Beispiel; sie verwenden jedoch die strikten Namenskonventionen von BEM.

BEM wird in größeren Webprojekten häufig verwendet, und viele Personen schreiben ihr CSS auf diese Weise. Es ist wahrscheinlich, dass Sie auch in Tutorials auf Beispiele stoßen, die BEM-Syntax verwenden, ohne zu erwähnen, warum das CSS so strukturiert ist.

Lesen Sie mehr über dieses System in [BEM 101](https://css-tricks.com/bem-101/) auf CSS Tricks.

#### Andere verbreitete Systeme

Eine große Anzahl solcher Systeme ist im Einsatz. Weitere beliebte Ansätze sind [Scalable and Modular Architecture for CSS (SMACSS)](https://smacss.com/), erstellt von Jonathan Snook, [ITCSS](https://itcss.io/) von Harry Roberts und [Atomizer CSS (ACSS)](https://acss-io.github.io/atomizer/), ursprünglich von Yahoo! erstellt. Wenn Sie auf ein Projekt stoßen, das einen dieser Ansätze verwendet, besteht der Vorteil darin, dass Sie viele Artikel und Leitfäden suchen und finden können, die Ihnen helfen zu verstehen, wie Sie im gleichen Stil programmieren.

Der Nachteil bei der Verwendung eines solchen Systems besteht darin, dass es insbesondere für kleinere Projekte übermäßig komplex erscheinen kann.

### Build-Systeme für CSS

Eine weitere Möglichkeit, CSS zu organisieren, besteht darin, einige der Werkzeuge für Front-End-Entwickler zu nutzen, die einen etwas programmatischeren Ansatz beim Schreiben von CSS ermöglichen. Es gibt eine Reihe von Werkzeugen, die wir als _Pre-Processor_ und _Post-Processor_ bezeichnen. Ein Pre-Processor verarbeitet Ihre Rohdateien und wandelt sie in ein Stylesheet um, während ein Post-Processor Ihr fertiges Stylesheet nimmt und etwas damit macht — möglicherweise optimiert er es, damit es schneller geladen wird.

Die Verwendung eines dieser Werkzeuge erfordert, dass Ihre Entwicklungsumgebung die Skripte für die Vor- und Nachverarbeitung ausführen kann. Viele Code-Editoren können dies für Sie übernehmen, oder Sie können Befehlszeilenwerkzeuge installieren, die dabei helfen.

Der beliebteste Pre-Processor ist [Sass](https://sass-lang.com/). Dies ist kein Sass-Tutorial, daher erläutere ich kurz einige Dinge, die Sass tun kann und die im Hinblick auf die Organisation sehr hilfreich sind, selbst wenn Sie keine der anderen Sass-Funktionen verwenden. Wenn Sie viel mehr über Sass erfahren möchten, beginnen Sie mit dem Artikel [Sass basics](https://sass-lang.com/guide/) und lesen Sie anschließend die weitere Dokumentation.

#### Variablen definieren

CSS verfügt inzwischen über native [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties), wodurch diese Funktion zunehmend weniger wichtig wird. Ein Grund für die Verwendung von Sass könnte jedoch darin liegen, alle in einem Projekt verwendeten Farben und Schriftarten als Einstellungen zu definieren und diese Variable dann im gesamten Projekt zu verwenden. Das bedeutet, dass Sie eine falsch verwendete Blaunuance nur an einer Stelle ändern müssen.

Wenn wir, wie in der ersten Zeile unten, eine Variable namens `$base-color` erstellen, könnten wir sie überall im Stylesheet verwenden, wo diese Farbe benötigt wird.

```scss
$base-color: #c6538c;

.alert {
  border: 1px solid $base-color;
}
```

Nach der Kompilierung zu CSS würde das folgende CSS im finalen Stylesheet entstehen.

```css
.alert {
  border: 1px solid #c6538c;
}
```

#### Komponenten-Stylesheets kompilieren

Oben habe ich erwähnt, dass eine Möglichkeit zur Organisation von CSS darin besteht, Stylesheets in kleinere Stylesheets aufzuteilen. Bei der Verwendung von Sass können Sie dies noch weiter treiben und viele sehr kleine Stylesheets verwenden — sogar bis hin zu einem separaten Stylesheet für jede Komponente. Mithilfe der in Sass enthaltenen Funktionalität (Partials) können diese alle zu einem oder einer kleinen Anzahl von Stylesheets kompiliert werden, die tatsächlich in Ihre Website eingebunden werden.

Mit [Partials](https://sass-lang.com/documentation/at-rules/use/#partials) könnten Sie beispielsweise mehrere Style-Dateien in einem Verzeichnis haben, etwa `foundation/_code.scss`, `foundation/_lists.scss`, `foundation/_footer.scss`, `foundation/_links.scss` und so weiter. Anschließend könnten Sie die Sass-Regel `@use` verwenden, um sie in andere Stylesheets zu laden:

```scss
// foundation/_index.scss
@use "code";
@use "lists";
@use "footer";
@use "links";
```

Wenn die Partials alle in eine Indexdatei geladen werden, wie oben angedeutet, können Sie anschließend dieses gesamte Verzeichnis auf einmal in ein anderes Stylesheet laden:

```scss
// style.scss
@use "foundation";
```

> [!NOTE]
> Eine einfache Möglichkeit, Sass auszuprobieren, ist [CodePen](https://codepen.io/) — Sie können Sass für Ihr CSS in den Einstellungen eines Pen aktivieren, und CodePen führt dann den Sass-Parser für Sie aus, damit Sie die resultierende Webseite mit angewendetem regulärem CSS sehen können. Manchmal werden Sie feststellen, dass CSS-Tutorials in ihren CodePen-Demos Sass statt reinem CSS verwendet haben; daher ist es praktisch, ein wenig darüber zu wissen.

#### Nachverarbeitung zur Optimierung

Wenn Sie sich Sorgen machen, dass Ihre Stylesheets größer werden, beispielsweise durch viele zusätzliche Kommentare und Leerzeichen, könnte ein Nachverarbeitungsschritt darin bestehen, das CSS zu optimieren, indem in der Produktionsversion alles Unnötige entfernt wird. Ein Beispiel für eine Post-Processor-Lösung hierfür ist [cssnano](https://cssnano.github.io/cssnano/).
