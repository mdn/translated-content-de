---
title: Organisieren Ihres CSS
slug: Learn/CSS/Building_blocks/Organizing
l10n:
  sourceCommit: a966a8b4eade72a13de8a688c13f2d5056321f02
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Debugging_CSS", "Learn/CSS/Building_blocks/Fundamental_CSS_comprehension", "Learn/CSS/Building_blocks")}}

Wenn Sie beginnen, an größeren Stylesheets und großen Projekten zu arbeiten, werden Sie feststellen, dass es herausfordernd sein kann, eine riesige CSS-Datei zu verwalten. In diesem Artikel werfen wir einen kurzen Blick auf einige Best Practices für das Schreiben Ihres CSS, um es leicht wartbar zu machen, und auf einige der Lösungen, die andere verwenden, um die Wartbarkeit zu verbessern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Grundlegende Software installiert</a
        >, grundlegende Kenntnisse im
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >Umgang mit Dateien</a
        >, HTML-Grundlagen (siehe
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >), und eine Vorstellung davon, wie CSS funktioniert (siehe
        <a href="/de/docs/Learn/CSS/First_steps">CSS erste Schritte</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen Sie einige Tipps und Best Practices zum Organisieren von Stylesheets, und finden Sie heraus, welche Namenskonventionen und Werkzeuge häufig verwendet werden, um bei der Organisation von CSS und der Teamarbeit zu helfen.
      </td>
    </tr>
  </tbody>
</table>

## Tipps, um Ihr CSS übersichtlich zu halten

Hier sind einige allgemeine Vorschläge, wie Sie Ihre Stylesheets organisiert und übersichtlich halten können.

### Hat Ihr Projekt eine Coding Style Guide?

Wenn Sie mit einem Team an einem bestehenden Projekt arbeiten, sollten Sie zunächst prüfen, ob das Projekt einen bestehenden Style Guide für CSS hat. Der Team-Style Guide sollte immer Ihren persönlichen Vorlieben vorgezogen werden. Es gibt oft keinen richtigen oder falschen Weg, Dinge zu tun, aber Konsistenz ist wichtig.

Schauen Sie sich zum Beispiel die [CSS-Richtlinien für MDN-Code-Beispiele](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/CSS) an.

### Halten Sie es konsistent

Wenn Sie die Regeln für das Projekt festlegen oder alleine arbeiten, dann ist das Wichtigste, die Dinge konsistent zu halten. Konsistenz kann auf verschiedene Arten angewendet werden, zum Beispiel das gleiche Namenskonventionen für Klassen verwenden, eine Methode zur Beschreibung von Farben wählen oder einheitliche Formatierung beibehalten. (Zum Beispiel, werden Sie Tabs oder Leerzeichen verwenden, um Ihren Code einzurücken? Wenn Leerzeichen, wie viele?)

Wenn Sie ein Set von Regeln haben, dem Sie immer folgen, reduziert dies den mentalen Aufwand beim Schreiben von CSS, da einige der Entscheidungen schon getroffen sind.

### Lesbares CSS formatieren

Es gibt einige Möglichkeiten, wie CSS formatiert werden kann. Einige Entwickler setzen alle Regeln auf eine einzelne Zeile, wie unten gezeigt:

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

CSS ist es egal, welche Methode Sie verwenden. Wir finden persönlich, dass es lesbarer ist, wenn jedes Eigenschaft-Werte-Paar auf einer neuen Zeile steht.

### Kommentieren Sie Ihr CSS

Das Hinzufügen von Kommentaren zu Ihrem CSS wird jedem zukünftigen Entwickler helfen, mit Ihrer CSS-Datei zu arbeiten, und wird auch Ihnen helfen, wenn Sie nach einer Pause zum Projekt zurückkehren.

```css
/* This is a CSS comment
It can be broken onto multiple lines. */
```

Ein guter Tipp ist es, einen Block von Kommentaren zwischen logische Abschnitte in Ihrem Stylesheet hinzuzufügen, um es beim Durchsuchen schnell finden zu können oder sogar um sich etwas zu geben, wonach Sie suchen können, um direkt zu diesem Teil des CSS zu springen. Wenn Sie eine Zeichenfolge verwenden, die im Code nicht vorkommt, können Sie von Abschnitt zu Abschnitt springen, indem Sie danach suchen — unten haben wir `||` verwendet.

```css
/* || General styles */

/* … */

/* || Typography */

/* … */

/* || Header and Main Navigation */

/* … */
```

Sie brauchen nicht alles in Ihrem CSS zu kommentieren, da vieles selbsterklärend ist. Was Sie kommentieren sollten, sind die Dinge, bei denen Sie eine bestimmte Entscheidung aus einem bestimmten Grund getroffen haben.

Vielleicht haben Sie eine CSS-Eigenschaft auf eine bestimmte Weise verwendet, um ältere Browser-Inkompatibilitäten zu umgehen, zum Beispiel:

```css
.box {
  background-color: red; /* fallback for older browsers that don't support gradients */
  background-image: linear-gradient(to right, #ff0000, #aa0000);
}
```

Vielleicht sind Sie einem Tutorial gefolgt, um etwas zu erreichen, und das CSS ist nicht sehr selbsterklärend oder erkennbar. In diesem Fall könnten Sie die URL des Tutorials in die Kommentare einfügen. Sie werden sich selbst danken, wenn Sie nach einem Jahr oder so zu diesem Projekt zurückkehren und sich vage erinnern, dass es ein großartiges Tutorial zu diesem Thema gab, aber nicht mehr wissen, woher es stammt.

### Erstellen Sie logische Abschnitte in Ihrem Stylesheet

Es ist eine gute Idee, alle allgemeinen Stile zuerst im Stylesheet zu haben. Das bedeutet alle Stile, die im Allgemeinen angewendet werden, es sei denn, Sie tun etwas Besonderes mit diesem Element. Sie werden normalerweise Regeln für folgende Elemente festlegen:

- `body`
- `p`
- `h1`, `h2`, `h3`, `h4`, `h5`
- `ul` und `ol`
- Die `table`-Eigenschaften
- Links

In diesem Abschnitt des Stylesheets stellen wir das Standard-Styling für den Text auf der Seite bereit und richten ein Standard-Styling für Datentabellen und Listen usw. ein.

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

Nach diesem Abschnitt könnten wir einige Utility-Klassen definieren, zum Beispiel eine Klasse, die den Standard-Listenstil für Listen entfernt, die wir als Flex-Elemente oder auf andere Weise anzeigen möchten. Wenn Sie einige Styling-Optionen haben, von denen Sie wissen, dass Sie sie auf viele verschiedene Elemente anwenden möchten, können sie in diesem Abschnitt platziert werden.

```css
/* || UTILITIES */

.nobullets {
  list-style: none;
  margin: 0;
  padding: 0;
}

/* … */
```

Dann können wir alles hinzufügen, was siteweit verwendet wird. Das könnten Dinge wie das grundlegende Seitenlayout, das Header- und Navigationsstyling usw. sein.

```css
/* || SITEWIDE */

.main-nav {
  /* … */
}

.logo {
  /* … */
}
```

Schließlich werden wir CSS für spezifische Dinge einfügen, unterteilt nach Kontext, Seite oder sogar Komponente, in der sie verwendet werden.

```css
/* || STORE PAGES */

.product-listing {
  /* … */
}

.product-box {
  /* … */
}
```

Indem Sie die Dinge auf diese Weise ordnen, haben wir zumindest eine Vorstellung davon, in welchem Teil des Stylesheets wir nach etwas suchen, das wir ändern möchten.

### Vermeiden Sie zu spezifische Selektoren

Wenn Sie sehr spezifische Selektoren erstellen, werden Sie oft feststellen, dass Sie Teile Ihres CSS duplizieren müssen, um die gleichen Regeln auf ein anderes Element anzuwenden. Zum Beispiel könnten Sie einen Selektor wie unten gezeigt haben, der die Regel auf ein `<p>` mit einer Klasse von `box` innerhalb eines `<article>` mit einer Klasse von `main` anwendet.

```css
article.main p.box {
  border: 1px solid #ccc;
}
```

Wenn Sie dann die gleichen Regeln auf etwas außerhalb von `main` oder auf etwas anderes als ein `<p>` anwenden wollten, müssten Sie einen anderen Selektor zu diesen Regeln hinzufügen oder ein völlig neues Regelset erstellen. Stattdessen könnten Sie den Selektor `.box` verwenden, um Ihre Regel auf jedes Element anzuwenden, das die Klasse `box` hat:

```css
.box {
  border: 1px solid #ccc;
}
```

Es wird Zeiten geben, in denen es sinnvoll ist, etwas spezifischer zu machen; dies wird jedoch im Allgemeinen eher eine Ausnahme als die Regel sein.

### Große Stylesheets in mehrere kleinere unterteilen

In Fällen, in denen Sie für verschiedene Teile der Website sehr unterschiedliche Stile haben, möchten Sie vielleicht ein Stylesheet haben, das alle globalen Regeln enthält, sowie einige kleinere Stylesheets, die die spezifischen Regeln für diese Abschnitte enthalten. Sie können von einer Seite aus auf mehrere Stylesheets verlinken, und die normalen Regeln der Kaskade gelten, wobei Regeln in später verlinkten Stylesheets nach Regeln in früher verlinkten Stylesheets kommen.

Zum Beispiel könnten wir einen Online-Shop als Teil der Site haben, mit viel CSS, das nur für die Gestaltung der Produktlisten und Formulare des Shops verwendet wird. Es würde Sinn machen, diese Dinge in einem anderen Stylesheet zu haben, das nur auf den Shop-Seiten verlinkt ist.

Dies kann es erleichtern, Ihr CSS organisiert zu halten, und bedeutet auch, dass wenn mehrere Personen am CSS arbeiten, Sie weniger Situationen haben, in denen zwei Personen gleichzeitig an demselben Stylesheet arbeiten müssen, was zu Konflikten in der Versionskontrolle führt.

## Andere Werkzeuge, die helfen können

CSS selbst hat nicht viel eingebaute Organisation; daher hängt die Konsistenz Ihres CSS weitgehend von Ihnen ab. Die Web-Community hat verschiedene Werkzeuge und Ansätze entwickelt, die Ihnen helfen können, größere CSS-Projekte zu verwalten. Da Sie wahrscheinlich auf diese Hilfen stoßen werden, wenn Sie mit anderen Leuten arbeiten, und da sie oft generell hilfreich sind, haben wir einen kurzen Leitfaden zu einigen von ihnen aufgenommen.

### CSS-Methodologien

Anstatt sich Ihre eigenen Regeln für das Schreiben von CSS auszudenken, können Sie davon profitieren, einen der bereits von der Community entworfenen und in vielen Projekten getesteten Ansätze zu übernehmen. Diese Methodologien sind im Wesentlichen Leitfäden für das CSS-Coding, die einen sehr strukturierten Ansatz für das Schreiben und Organisieren von CSS bieten. In der Regel tendieren sie dazu, CSS ausführlicher zu gestalten, als Sie es getan hätten, wenn Sie jeden Selektor zu einem eigenen Satz von Regeln für dieses Projekt optimiert hätten.

Allerdings gewinnen Sie durch die Übernahme einer solchen Methodologie viel Struktur. Da viele dieser Systeme weit verbreitet sind, sind andere Entwickler eher in der Lage, den Ansatz zu verstehen, den Sie verwenden, und ihr eigenes CSS auf die gleiche Weise zu schreiben, anstatt Ihre eigene persönliche Methodologie von Grund auf zu erarbeiten.

#### OOCSS

Die meisten der Ansätze, auf die Sie stoßen werden, verdanken etwas dem Konzept von Object Oriented CSS (OOCSS), einem Ansatz, der durch [die Arbeit von Nicole Sullivan](https://github.com/stubbornella/oocss/wiki) populär wurde. Die Grundidee von OOCSS ist es, Ihr CSS in wiederverwendbare Objekte zu trennen, die überall auf Ihrer Website verwendet werden können. Das Standardbeispiel für OOCSS ist das Muster, das als [The Media Object](/de/docs/Web/CSS/Layout_cookbook/Media_objects) beschrieben wird. Dies ist ein Muster mit einem Bild, Video oder einem anderen Element mit fester Größe auf einer Seite und flexiblem Inhalt auf der anderen Seite. Es ist ein Muster, das wir überall auf Websites für Kommentare, Listen und so weiter sehen.

Wenn Sie keinen OOCSS-Ansatz verfolgen, könnten Sie benutzerdefiniertes CSS für die verschiedenen Orte erstellen, an denen dieses Muster verwendet wird, zum Beispiel indem Sie zwei Klassen erstellen, eine namens `comment` mit einer Reihe von Regeln für die Komponenten, und eine andere namens `list-item` mit fast den gleichen Regeln wie die `comment`-Klasse, mit Ausnahme einiger kleiner Unterschiede. Die Unterschiede zwischen diesen beiden Komponenten sind, dass der Listeneintrag unten eine Grenze hat und Bilder in Kommentaren eine Grenze haben, während Listeneintragsbilder dies nicht tun.

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

In OOCSS würden Sie ein Muster namens `media` erstellen, das alle gemeinsamen CSS für beide Muster weltweit enthält — eine Basisklasse für Dinge, die im Allgemeinen die Form des Medienobjekts haben. Dann würden wir eine zusätzliche Klasse hinzufügen, um diese winzigen Unterschiede zu berücksichtigen, und damit dieses Styling auf bestimmte Weisen erweitern.

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

In Ihrem HTML müsste der Kommentar sowohl die `media`- als auch die `comment`-Klasse erhalten:

```html
<div class="media comment">
  <img src="" alt="" />
  <div class="content"></div>
</div>
```

Der Listeneintrag hätte `media` und `list-item` angewendet:

```html
<ul>
  <li class="media list-item">
    <img src="" alt="" />
    <div class="content"></div>
  </li>
</ul>
```

Die Arbeit, die Nicole Sullivan bei der Beschreibung und Förderung dieses Ansatzes geleistet hat, bedeutet, dass selbst Leute, die nicht streng einem OOCSS-Ansatz folgen, im Allgemeinen CSS auf diese Weise wiederverwenden — es hat sich als ein guter Ansatz in unser Verständnis eingeprägt.

#### BEM

BEM steht für Block Element Modifier. In BEM ist ein Block eine eigenständige Einheit wie ein Button, Menü oder Logo. Ein Element ist etwas wie ein Listeneintrag oder ein Titel, das an den Block gebunden ist, in dem es sich befindet. Ein Modifier ist eine Kennzeichnung an einem Block oder Element, die das Styling oder Verhalten ändert. Sie werden Code, der BEM verwendet, an der umfangreichen Verwendung von Bindestrichen und Unterstrichen in den CSS-Klassen erkennen. Sehen Sie sich zum Beispiel die Klassen an, die in diesem HTML von der Seite über [BEM-Benennungskonventionen](https://getbem.com/naming/) angewendet werden:

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

Die zusätzlichen Klassen sind ähnlich wie die in dem OOCSS-Beispiel verwendeten; jedoch verwenden sie die strengen Benennungskonventionen von BEM.

BEM wird häufig in größeren Webprojekten verwendet, und viele Menschen schreiben ihr CSS auf diese Weise. Es ist wahrscheinlich, dass Sie auf Beispiele stoßen werden, selbst in Tutorials, die BEM-Syntax verwenden, ohne zu erwähnen, warum das CSS so strukturiert ist.

Lesen Sie mehr über dieses System [BEM 101](https://css-tricks.com/bem-101/) auf CSS Tricks.

#### Andere gängige Systeme

Es gibt eine große Anzahl dieser Systeme in Gebrauch. Andere beliebte Ansätze umfassen [Scalable and Modular Architecture for CSS (SMACSS)](https://smacss.com/), erstellt von Jonathan Snook, [ITCSS](https://itcss.io/) von Harry Roberts, und [Atomizer CSS (ACSS)](https://acss-io.github.io/atomizer/), ursprünglich von Yahoo! erstellt. Wenn Sie auf ein Projekt stoßen, das einen dieser Ansätze verwendet, ist der Vorteil, dass Sie viele Artikel und Leitfäden finden können, die Ihnen helfen, auf diese Weise zu codieren.

Der Nachteil der Verwendung eines solchen Systems ist, dass sie insbesondere bei kleineren Projekten übermäßig komplex erscheinen können.

### Build-Systeme für CSS

Ein weiterer Weg, CSS zu organisieren, besteht darin, einige der Werkzeuge zu nutzen, die für Frontend-Entwickler zur Verfügung stehen, die es Ihnen ermöglichen, einen etwas programmatischeren Ansatz beim Schreiben von CSS zu wählen. Es gibt eine Reihe von Werkzeugen, die wir als _Preprozessoren_ und _Postprozessoren_ bezeichnen. Ein Preprozessor läuft über Ihre Rohdateien und verwandelt sie in ein Stylesheet, während ein Postprozessor Ihr fertiges Stylesheet nimmt und etwas damit tut — vielleicht um es zu optimieren, damit es schneller geladen wird.

Die Verwendung dieser Werkzeuge erfordert, dass Ihre Entwicklungsumgebung in der Lage ist, die Skripte auszuführen, die das Prä- und Post-Processing durchführen. Viele Code-Editoren können dies für Sie tun, oder Sie können Befehlszeilenwerkzeuge installieren, die helfen.

Der beliebteste Preprozessor ist [Sass](https://sass-lang.com/). Dies ist kein Sass-Tutorial, daher werde ich nur kurz auf einige der Dinge eingehen, die Sass tun kann, die in Bezug auf die Organisation wirklich hilfreich sind, selbst wenn Sie keine der anderen Sass-Funktionen nutzen. Wenn Sie viel mehr über Sass erfahren möchten, beginnen Sie mit dem Artikel [Sass-Grundlagen](https://sass-lang.com/guide/), bevor Sie zur anderen Dokumentation übergehen.

#### Variablen definieren

CSS verfügt jetzt über native [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Using_CSS_custom_properties), was diese Funktion zunehmend unwichtiger macht. Allerdings könnte einer der Gründe für die Verwendung von Sass darin bestehen, alle

Farben und Schriftarten, die in einem Projekt verwendet werden, als Einstellungen zu definieren und dann diese Variable im gesamten Projekt zu verwenden. Das bedeutet, dass wenn Sie feststellen, dass Sie den falschen Blauton verwendet haben, Sie ihn nur an einer Stelle ändern müssen.

Wenn wir eine Variable namens `$base-color` erstellen, wie in der ersten Zeile unten, könnten wir sie dann überall im Stylesheet verwenden, wo diese Farbe erforderlich ist.

```scss
$base-color: #c6538c;

.alert {
  border: 1px solid $base-color;
}
```

Einmal in CSS kompiliert, hätten Sie das folgende CSS im endgültigen Stylesheet.

```css
.alert {
  border: 1px solid #c6538c;
}
```

#### Komponenten-Stylesheets kompilieren

Ich habe oben erwähnt, dass eine Möglichkeit, CSS zu organisieren, darin besteht, Stylesheets in kleinere zu unterteilen. Wenn Sie Sass verwenden, können Sie dies auf eine andere Ebene bringen und viele sehr kleine Stylesheets haben — sogar so weit gehen, ein separates Stylesheet für jede Komponente zu haben. Durch die Verwendung der in Sass enthaltenen Funktionalität (Partials) können diese alle zusammen in ein oder eine kleine Anzahl von Stylesheets kompiliert werden, um tatsächlich in Ihre Website eingebunden zu werden.

So könnten Sie zum Beispiel mit [Partials](https://sass-lang.com/documentation/at-rules/use/#partials) mehrere Style-Dateien in einem Verzeichnis haben, sagen wir `foundation/_code.scss`, `foundation/_lists.scss`, `foundation/_footer.scss`, `foundation/_links.scss`, usw. Sie könnten dann die Sass-Regel `@use` verwenden, um sie in andere Stylesheets zu laden:

```scss
// foundation/_index.scss
@use "code";
@use "lists";
@use "footer";
@use "links";
```

Wenn die Partials alle in eine Index-Datei geladen werden, wie oben angedeutet, können Sie dann dieses gesamte Verzeichnis in einem anderen Stylesheet in einem Rutsch laden:

```scss
// style.scss
@use "foundation";
```

> [!NOTE]
> Eine einfache Möglichkeit, Sass auszuprobieren, ist die Verwendung von [CodePen](https://codepen.io/) — Sie können Sass für Ihr CSS in den Einstellungen für einen Pen aktivieren und CodePen führt dann den Sass-Parser für Sie aus, sodass Sie die resultierende Webseite mit normalem CSS angewendet sehen können. Manchmal werden Sie feststellen, dass CSS-Tutorials in ihren CodePen-Demos Sass anstelle von einfachem CSS verwendet haben, es ist daher hilfreich, ein wenig darüber Bescheid zu wissen.

#### Post-Processing für Optimierung

Wenn Sie sich darüber Gedanken machen, Größe zu Ihren Stylesheets hinzuzufügen, zum Beispiel durch das Hinzufügen vieler zusätzlicher Kommentare und Leerzeichen, dann könnte ein Post-Processing-Schritt darin bestehen, das CSS zu optimieren, indem alles Unnötige in der Produktionsversion entfernt wird. Ein Beispiel für eine Post-Processor-Lösung zur Durchführung dieser Aufgabe wäre [cssnano](https://cssnano.github.io/cssnano/).

## Zusammenfassung

Dies ist der letzte Teil unseres Modulbausteins und wie Sie sehen können, gibt es viele Möglichkeiten, wie Ihre Erkundung von CSS von diesem Punkt aus fortgesetzt werden kann — aber jetzt können Sie sich mit unseren Bewertungen testen: Das erste ist unten verlinkt.

Um mehr über Layout in CSS zu erfahren, siehe das [CSS-Layout](/de/docs/Learn/CSS/CSS_layout)-Modul.

Sie sollten jetzt auch die Fähigkeiten haben, den Rest des [MDN CSS](/de/docs/Web/CSS)-Materials zu erkunden. Sie können Eigenschaften und Werte nachschlagen, unser [CSS-Kochbuch](/de/docs/Web/CSS/Layout_cookbook) für Muster zur Verwendung erkunden oder weiterlesen in einigen der spezifischen Leitfäden, wie unserem [Leitfaden zum CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout).

{{PreviousMenuNext("Learn/CSS/Building_blocks/Debugging_CSS", "Learn/CSS/Building_blocks/Fundamental_CSS_comprehension", "Learn/CSS/Building_blocks")}}
