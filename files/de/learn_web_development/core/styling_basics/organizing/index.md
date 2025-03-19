---
title: Organisieren Ihres CSS
slug: Learn_web_development/Core/Styling_basics/Organizing
l10n:
  sourceCommit: 0e7eafea05cd771c86e77947639f3396e7a59b2b
---

{{LearnSidebar}}

Wenn Sie beginnen, an größeren Stylesheets und großen Projekten zu arbeiten, werden Sie feststellen, dass es herausfordernd sein kann, eine riesige CSS-Datei zu pflegen. In diesem Artikel werfen wir einen kurzen Blick auf einige Best Practices zum Schreiben Ihres CSS, um es leicht wartbar zu machen, sowie einige der Lösungen, die Sie von anderen verwenden werden, um die Wartbarkeit zu verbessern.

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
        >, HTML-Grundlagen (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Einführung in HTML</a
        >), und ein Verständnis darüber, wie CSS funktioniert (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS Styling Grundlagen</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>
        Einblicke in Tipps und Best Practices zur Organisation von Stylesheets zu gewinnen und sich über einige der gebräuchlichen Namenskonventionen und Tools zu informieren, die bei der CSS-Organisation und Teamarbeit helfen.
      </td>
    </tr>
  </tbody>
</table>

## Tipps, um Ihr CSS ordentlich zu halten

Hier sind einige allgemeine Vorschläge, wie Sie Ihre Stylesheets organisiert und ordentlich halten können.

### Hat Ihr Projekt eine Richtlinie für Kodierungsstile?

Wenn Sie mit einem Team an einem bestehenden Projekt arbeiten, sollten Sie zunächst prüfen, ob das Projekt eine bestehende Styleguide für CSS hat. Der Team-Styleguide sollte immer gegenüber Ihren persönlichen Vorlieben Vorrang haben. Oft gibt es kein richtig oder falsch, aber Konsistenz ist wichtig.

Schauen Sie sich beispielsweise die [CSS-Richtlinien für MDN-Codebeispiele](/de/docs/MDN/Writing_guidelines/Code_style_guide/CSS) an.

### Halten Sie es konsistent

Wenn Sie die Regeln für das Projekt festlegen oder alleine arbeiten, dann ist das Wichtigste, die Dinge konsistent zu halten. Konsistenz kann in vielerlei Hinsicht angewendet werden, z. B. indem Sie die gleichen Namenskonventionen für Klassen verwenden, eine Methode zur Farbbeschreibung wählen oder einheitliche Formatierung beibehalten. (Zum Beispiel: Verwenden Sie Registerkarten oder Leerzeichen, um Ihren Code zu einzurücken? Wenn Leerzeichen, wie viele?)

Ein Satz von Regeln, die Sie immer befolgen, reduziert den mentalen Aufwand beim Schreiben von CSS, da einige Entscheidungen bereits getroffen sind.

### Formatieren Sie lesbares CSS

Es gibt ein paar Möglichkeiten, wie Sie CSS formatiert sehen werden. Einige Entwickler setzen alle Regeln in eine Zeile, so:

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

CSS ist gleichgültig, welche Sie verwenden. Wir finden persönlich, dass es lesbarer ist, jedes Eigenwert-Paar in einer neuen Zeile zu haben.

### Kommentieren Sie Ihr CSS

Das Hinzufügen von Kommentaren zu Ihrem CSS wird jedem zukünftigen Entwickler helfen, mit Ihrer CSS-Datei zu arbeiten, und wird Ihnen auch helfen, wenn Sie nach einer Pause zum Projekt zurückkehren.

```css
/* This is a CSS comment
It can be broken onto multiple lines. */
```

Ein guter Tipp ist auch, zwischen logischen Abschnitten in Ihrem Stylesheet einen Kommentarblock hinzuzufügen, um verschiedene Abschnitte schnell zu finden oder um etwas zum Suchen zu haben, um direkt zu diesem Teil des CSS zu springen. Wenn Sie eine Zeichenfolge verwenden, die im Code nicht vorkommt, können Sie von Abschnitt zu Abschnitt springen, indem Sie danach suchen — unten haben wir `||` verwendet.

```css
/* || General styles */

/* … */

/* || Typography */

/* … */

/* || Header and Main Navigation */

/* … */
```

Sie müssen nicht jede einzelne Sache in Ihrem CSS kommentieren, da viel davon selbsterklärend sein wird. Kommentieren sollten Sie jedoch die Dinge, bei denen Sie aus einem bestimmten Grund eine besondere Entscheidung getroffen haben.

Vielleicht haben Sie eine CSS-Eigenschaft in einer speziellen Weise verwendet, um ältere Browser-Inkompatibilitäten zu umgehen, zum Beispiel:

```css
.box {
  background-color: red; /* fallback for older browsers that don't support gradients */
  background-image: linear-gradient(to right, #ff0000, #aa0000);
}
```

Vielleicht haben Sie ein Tutorial befolgt, um etwas zu erreichen, und das CSS ist nicht sehr selbsterklärend oder erkennbar. In diesem Fall könnten Sie die URL des Tutorials in die Kommentare einfügen. Sie werden sich selbst dankbar sein, wenn Sie in einem Jahr zu diesem Projekt zurückkehren und sich vage erinnern, dass es ein großartiges Tutorial zu diesem Thema gab, aber nicht mehr wissen, wo es war.

### Erstellen Sie logische Abschnitte in Ihrem Stylesheet

Es ist eine gute Idee, alle allgemeinen Styles zuerst im Stylesheet zu haben. Das bedeutet alle Styles, die im Allgemeinen gelten, es sei denn, Sie machen etwas Spezielles mit diesem Element. Normalerweise haben Sie Regeln für:

- `body`
- `p`
- `h1`, `h2`, `h3`, `h4`, `h5`
- `ul` und `ol`
- Die `table`-Eigenschaften
- Links

In diesem Abschnitt des Stylesheets bieten wir Standard-Styling für den Typ auf der Website, erstellen einen Standardstil für Datenschriften und Listen und so weiter.

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

Nach diesem Abschnitt könnten wir ein paar Utility-Klassen definieren, zum Beispiel eine Klasse, die den Standard-Listenstil für Listen entfernt, die wir als Flex-Elemente anzeigen werden oder auf andere Weise. Wenn Sie einige Styling-Optionen haben, die Sie auf viele verschiedene Elemente anwenden möchten, können diese in diesem Abschnitt abgelegt werden.

```css
/* || UTILITIES */

.no-bullets {
  list-style: none;
  margin: 0;
  padding: 0;
}

/* … */
```

Dann können wir alles hinzufügen, was websiteweit verwendet wird. Das könnten Dinge sein wie das grundlegende Seitenlayout, die Kopfzeile, Navigations-Styling und so weiter.

```css
/* SITEWIDE */

.main-nav {
  /* … */
}

.logo {
  /* … */
}
```

Schließlich fügen wir CSS für spezifische Dinge hinzu, unterteilt nach Kontext, Seite oder sogar Komponente, in denen sie verwendet werden.

```css
/* || STORE PAGES */

.product-listing {
  /* … */
}

.product-box {
  /* … */
}
```

Indem wir die Dinge in dieser Weise ordnen, haben wir zumindest eine Vorstellung davon, in welchem Teil des Stylesheets wir nach etwas suchen, das wir ändern möchten.

### Vermeiden Sie übermäßig spezifische Selektoren

Wenn Sie sehr spezifische Selektoren erstellen, werden Sie oft feststellen, dass Sie Teile Ihres CSS duplizieren müssen, um die gleichen Regeln auf ein anderes Element anzuwenden. Beispielsweise könnten Sie einen Selektor wie den untenstehenden haben, der die Regel auf ein `<p>` mit einer Klasse `box` in einem `<article>` mit einer Klasse `main` anwendet.

```css
article.main p.box {
  border: 1px solid #ccc;
}
```

Wenn Sie dann die gleichen Regeln auf etwas außerhalb von `main` oder auf etwas anderes als ein `<p>` anwenden wollten, müssten Sie einen weiteren Selektor zu diesen Regeln hinzufügen oder ein ganzes neues Regelset erstellen. Stattdessen könnten Sie den Selektor `.box` verwenden, um Ihre Regel auf ein beliebiges Element anzuwenden, das die Klasse `box` hat:

```css
.box {
  border: 1px solid #ccc;
}
```

Es wird Zeiten geben, in denen es sinnvoll ist, etwas spezifischer zu machen; dies wird jedoch im Allgemeinen eher eine Ausnahme als die übliche Praxis sein.

### Zerlegen Sie große Stylesheets in mehrere kleinere

In Fällen, in denen Sie sehr unterschiedliche Styles für verschiedene Bereiche der Website haben, möchten Sie möglicherweise ein Stylesheet haben, das alle globalen Regeln enthält, sowie einige kleinere Stylesheets, die die spezifischen Regeln für diese Abschnitte enthalten. Sie können mehrere Stylesheets von einer Seite aus verlinken, und die normalen Regeln der Kaskade gelten, wobei Regeln in später verlinkten Stylesheets nach Regeln in früher verlinkten Stylesheets kommen.

Zum Beispiel könnten wir einen Online-Shop als Teil der Website haben, mit einer Menge CSS, die nur für die Gestaltung der Produktlisten und Formulare für den Shop verwendet werden. Es wäre sinnvoll, diese Dinge in einem anderen Stylesheet zu haben, das nur auf Shop-Seiten verlinkt ist.

Dies kann es einfacher machen, Ihr CSS organisiert zu halten, und bedeutet auch, dass, wenn mehrere Personen am CSS arbeiten, Sie weniger Situationen haben werden, in denen zwei Personen gleichzeitig am selben Stylesheet arbeiten müssen, was zu Konflikten in der Versionskontrolle führt.

## Andere Werkzeuge, die helfen können

CSS selbst bietet nicht viel eingebaute Organisation, daher wird das Niveau an Konsistenz in Ihrem CSS weitgehend von Ihnen abhängen. Die Web-Community hat verschiedene Werkzeuge und Ansätze entwickelt, die Ihnen helfen können, größere CSS-Projekte zu verwalten. Da Sie wahrscheinlich auf diese Hilfsmittel stoßen werden, wenn Sie mit anderen Menschen arbeiten, und da sie allgemein hilfreich sind, haben wir einen kurzen Leitfaden zu einigen davon aufgenommen.

### CSS-Methodologien

Anstatt Ihre eigenen Regeln zum Schreiben von CSS zu entwickeln, könnten Sie von der Übernahme eines der von der Community entwickelten und in vielen Projekten erprobten Ansätze profitieren. Diese Methodologien sind im Wesentlichen CSS-Kodierungsleitfäden, die einen sehr strukturierten Ansatz zur Erstellung und Organisation von CSS verfolgen. Typischerweise neigen sie dazu, CSS ausführlicher darzustellen, als Sie es vielleicht tun würden, wenn Sie jeden Selektor zu einem benutzerdefinierten Satz von Regeln für dieses Projekt schreiben und optimieren würden.

Jedoch gewinnen Sie durch die Übernahme einer Methodik viel an Struktur. Da viele dieser Systeme weit verbreitet sind, verstehen andere Entwickler eher den von Ihnen verwendeten Ansatz und können ihr eigenes CSS auf gleiche Weise schreiben, anstatt Ihre eigene persönliche Methodik von Grund auf neu herauszufinden.

#### OOCSS

Die meisten der Ansätze, auf die Sie stoßen werden, verdanken etwas dem Konzept von Objektorientiertem CSS (OOCSS), einem Ansatz, der durch [die Arbeit von Nicole Sullivan](https://github.com/stubbornella/oocss/wiki) populär wurde. Die grundlegende Idee von OOCSS ist, Ihr CSS in wiederverwendbare Objekte zu trennen, die Sie überall auf Ihrer Seite verwenden können. Das Standardbeispiel für OOCSS ist das Muster, das als [Das Medienobjekt](/de/docs/Web/CSS/Layout_cookbook/Media_objects) beschrieben wird. Dies ist ein Muster mit einem fixierten Bild, Video oder anderem Element auf einer Seite und flexiblem Inhalt auf der anderen. Es ist ein Muster, das wir überall auf Websites für Kommentare, Listen und so weiter sehen.

Wenn Sie keinen OOCSS-Ansatz verfolgen, könnten Sie benutzerdefinierte CSS für die verschiedenen Orte erstellen, an denen dieses Muster verwendet wird, etwa indem Sie zwei Klassen erstellen, eine namens `comment` mit einer Menge von Regeln für die Komponenten und eine andere namens `list-item` mit fast denselben Regeln wie die Klasse `comment` außer einigen kleinen Unterschieden. Die Unterschiede zwischen diesen beiden Komponenten sind, dass das Listen-Element eine untere Grenze hat und Bilder in Kommentaren einen Rand haben, während Bilder von Listen-Elementen dies nicht tun.

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

In OOCSS würden Sie ein Muster namens `media` erstellen, das alle gemeinsamen CSS für beide Muster hat — eine Basisklasse für Dinge, die generell die Form des Medienobjekts haben. Dann würden wir eine zusätzliche Klasse hinzufügen, um diese Stile auf spezifische Weise zu erweitern.

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

In Ihrem HTML müsste der Kommentar sowohl die Klassen `media` als auch `comment` haben:

```html
<div class="media comment">
  <img src="" alt="" />
  <div class="content"></div>
</div>
```

Das Listen-Element hätte `media` und `list-item` angewendet:

```html
<ul>
  <li class="media list-item">
    <img src="" alt="" />
    <div class="content"></div>
  </li>
</ul>
```

Die Arbeit, die Nicole Sullivan bei der Beschreibung und Förderung dieses Ansatzes leistete, bedeutet, dass selbst Menschen, die heute nicht strikt einem OOCSS-Ansatz folgen, im Allgemeinen CSS auf diese Weise wiederverwenden — es hat in unserem Verständnis Fuß gefasst als eine gute Methode, mit Dingen im Allgemeinen umzugehen.

#### BEM

BEM steht für Block Element Modifier. In BEM ist ein Block ein eigenständiges Element wie ein Button, Menü oder Logo. Ein Element ist etwas wie ein Listenelement oder ein Titel, das an den Block gebunden ist, in dem es sich befindet. Ein Modifier ist ein Indikator auf einem Block oder Element, der das Styling oder Verhalten ändert. Sie werden Code erkennen, der BEM verwendet, aufgrund der umfangreichen Verwendung von Bindestrichen und Unterstrichen in den CSS-Klassen. Schauen Sie sich zum Beispiel die Klassen an, die auf diesem HTML aus der Seite über [BEM-Namenskonventionen](https://getbem.com/naming/) angewendet werden:

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

Die zusätzlichen Klassen ähneln denen, die im OOCSS-Beispiel verwendet werden, verwenden jedoch die strikten Namenskonventionen von BEM.

BEM wird häufig in größeren Webprojekten verwendet, und viele schreiben ihr CSS auf diese Art und Weise. Es ist wahrscheinlich, dass Sie auf Beispiele stoßen werden, sogar in Tutorials, die die BEM-Syntax verwenden, ohne zu erwähnen, warum das CSS auf diese Weise strukturiert ist.

Lesen Sie mehr über dieses System in [BEM 101](https://css-tricks.com/bem-101/) auf CSS Tricks.

#### Andere verbreitete Systeme

Es gibt eine Vielzahl dieser Systeme, die in Gebrauch sind. Andere beliebte Ansätze umfassen [Skalierbare und modulare Architektur für CSS (SMACSS)](https://smacss.com/), erstellt von Jonathan Snook, [ITCSS](https://itcss.io/) von Harry Roberts und [Atomizer CSS (ACSS)](https://acss-io.github.io/atomizer/), ursprünglich von Yahoo! entwickelt. Wenn Sie auf ein Projekt stoßen, das einen dieser Ansätze verwendet, dann besteht der Vorteil darin, dass Sie viele Artikel und Leitfäden finden können, die Ihnen helfen, in demselben Stil zu kodieren.

Der Nachteil bei der Verwendung eines solchen Systems ist, dass sie für kleinere Projekte oft übermäßig komplex erscheinen können.

### Build-Systeme für CSS

Ein weiterer Weg, um CSS zu organisieren, besteht darin, die Vorteile einiger der Tools zu nutzen, die für Front-End-Entwickler verfügbar sind und Ihnen einen etwas programmatischeren Ansatz zum Schreiben von CSS ermöglichen. Es gibt eine Reihe von Werkzeugen, die wir als _Preprozessoren_ und _Postprozessoren_ bezeichnen. Ein Preprozessor liest über Ihre Rohdaten und verwandelt sie in ein Stylesheet, während ein Postprozessor Ihr fertiges Stylesheet nimmt und etwas damit macht — möglicherweise zur Optimierung, damit es schneller lädt.

Die Verwendung eines dieser Tools erfordert, dass Ihre Entwicklungsumgebung in der Lage ist, die Skripte auszuführen, die das Vor- und Nachverarbeiten erledigen. Viele Code-Editoren können dies für Sie tun, oder Sie können Befehlszeilentools installieren, die helfen.

Der beliebteste Preprozessor ist [Sass](https://sass-lang.com/). Dies ist kein Sass-Tutorial, deshalb werde ich kurz erklären, was Sass tun kann und was in Bezug auf die Organisation wirklich hilfreich ist, auch wenn Sie keine der anderen Sass-Funktionen verwenden. Wenn Sie viel mehr über Sass erfahren möchten, beginnen Sie mit dem Artikel über die [Sass-Grundlagen](https://sass-lang.com/guide/), und gehen Sie dann zu deren weiterer Dokumentation über.

#### Definieren von Variablen

CSS hat jetzt native [Custom Properties](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties), was diese Funktion zunehmend weniger wichtig macht. Ein Grund, warum Sie Sass verwenden könnten, ist jedoch, dass Sie alle Farben und Schriftarten, die in einem Projekt verwendet werden, als Einstellungen definieren und diese Variable dann im gesamten Projekt verwenden können. Das bedeutet, wenn Sie feststellen, dass Sie den falschen Blauton verwendet haben, müssen Sie ihn nur an einer Stelle ändern.

Wenn wir eine Variable namens `$base-color` erstellen, wie in der ersten Zeile unten, könnten wir sie dann überall im Stylesheet verwenden, wo diese Farbe benötigt wird.

```scss
$base-color: #c6538c;

.alert {
  border: 1px solid $base-color;
}
```

Nach dem Kompilieren zu CSS hätten Sie im endgültigen Stylesheet das folgende CSS.

```css
.alert {
  border: 1px solid #c6538c;
}
```

#### Kompilieren von Komponenten-Stylesheets

Ich habe oben erwähnt, dass ein Weg, um CSS zu organisieren, darin besteht, Stylesheets in kleinere Stylesheets zu unterteilen. Bei der Verwendung von Sass können Sie dies auf ein anderes Niveau bringen und viele sehr kleine Stylesheets haben — sogar bis zu dem Punkt, an dem Sie für jede Komponente ein separates Stylesheet haben. Durch die Verwendung der Inklusivfunktionalität in Sass (Partials) können diese alle zusammen in ein oder wenige Stylesheets kompiliert werden, die tatsächlich in Ihre Website verlinkt werden.

Mit [Partials](https://sass-lang.com/documentation/at-rules/use/#partials) könnten Sie mehrere Stil-Dateien in einem Verzeichnis haben, z.B. `foundation/_code.scss`, `foundation/_lists.scss`, `foundation/_footer.scss`, `foundation/_links.scss`, etc. Sie könnten dann die Sass-Regel `@use` verwenden, um sie in andere Stylesheets zu laden:

```scss
// foundation/_index.scss
@use "code";
@use "lists";
@use "footer";
@use "links";
```

Wenn die Partials alle in einer Indexdatei geladen sind, wie oben angedeutet, können Sie dann das gesamte Verzeichnis in einem Zug in ein anderes Stylesheet laden:

```scss
// style.scss
@use "foundation";
```

> [!NOTE]
> Ein einfacher Weg, um Sass auszuprobieren, ist die Verwendung von [CodePen](https://codepen.io/) — Sie können Sass für Ihr CSS in den Einstellungen für einen Pen aktivieren, und CodePen wird dann den Sass-Parser für Sie ausführen, damit Sie die resultierende Webseite mit regulärem CSS sehen können. Manchmal werden Sie feststellen, dass CSS-Tutorials Sass anstelle von einfachem CSS in ihren CodePen-Demos verwendet haben, daher ist es hilfreich, ein wenig darüber zu wissen.

#### Post-Processing zur Optimierung

Wenn Sie sich Sorgen wegen der Größe Ihrer Stylesheets machen, z.B. weil Sie viele zusätzliche Kommentare und Leerzeichen hinzufügen, könnte ein Post-Processing-Schritt darin bestehen, das CSS zu optimieren, indem alles Unnötige in der Produktionsversion entfernt wird. Ein Beispiel für eine Post-Prozessor-Lösung, um dies zu tun, wäre [cssnano](https://cssnano.github.io/cssnano/).
