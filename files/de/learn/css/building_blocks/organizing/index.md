---
title: Organisieren Ihres CSS
slug: Learn/CSS/Building_blocks/Organizing
l10n:
  sourceCommit: baac7f2a43813a7930ff97b11d9c38b413f97c78
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Debugging_CSS", "Learn/CSS/Building_blocks/Fundamental_CSS_comprehension", "Learn/CSS/Building_blocks")}}

Wenn Sie anfangen, an größeren Stylesheets und großen Projekten zu arbeiten, werden Sie feststellen, dass die Pflege einer umfangreichen CSS-Datei herausfordernd sein kann. In diesem Artikel werfen wir einen kurzen Blick auf einige Best Practices beim Schreiben Ihres CSS, um es leicht wartbar zu machen, und einige der Lösungen, die andere verwenden, um die Wartbarkeit zu verbessern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Grundlegende Software installiert</a
        >, Grundkenntnisse im Umgang mit
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >Dateien</a
        >, HTML-Grundlagen (studieren Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >) und eine Vorstellung davon, wie CSS funktioniert (studieren Sie
        <a href="/de/docs/Learn/CSS/First_steps">CSS Erste Schritte</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Einige Tipps und Best Practices zum Organisieren von Stylesheets zu
        erlernen und sich über einige der Namenskonventionen und Werkzeuge im
        alltäglichen Gebrauch zu informieren, die bei der CSS-Organisation und
        der Teamarbeit helfen.
      </td>
    </tr>
  </tbody>
</table>

## Tipps, um Ihr CSS ordentlich zu halten

Hier sind einige allgemeine Vorschläge, wie Sie Ihre Stylesheets organisiert und ordentlich halten können.

### Hat Ihr Projekt einen Coding-Style-Leitfaden?

Wenn Sie im Team an einem bestehenden Projekt arbeiten, sollten Sie zunächst prüfen, ob das Projekt einen vorhandenen Style-Leitfaden für CSS hat. Der Team-Style-Leitfaden sollte immer Vorrang vor Ihren persönlichen Vorlieben haben. Es gibt oft keine richtige oder falsche Art, Dinge zu tun, aber Konsistenz ist wichtig.

Werfen Sie zum Beispiel einen Blick auf die [CSS-Richtlinien für MDN-Codebeispiele](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/CSS).

### Halten Sie es konsequent

Wenn Sie die Regeln für das Projekt festlegen dürfen oder alleine arbeiten, dann ist das Wichtigste, die Dinge konsequent zu halten. Konsistenz kann auf viele Arten angewendet werden, wie zum Beispiel dieselben Namenskonventionen für Klassen zu verwenden, eine Methode zur Farbbeschreibung zu wählen oder einheitliches Formatieren beizubehalten (z.B. verwenden Sie Tabs oder Leerzeichen zum Einrücken Ihres Codes? Wie viele Leerzeichen, falls Sie Leerzeichen verwenden?).

Eine Reihe von Regeln, denen Sie immer folgen, reduziert die Menge des erforderlichen mentalen Aufwands beim Schreiben von CSS, da einige Entscheidungen bereits getroffen sind.

### Lesbares CSS formatieren

Es gibt mehrere Arten, CSS zu formatieren. Einige Entwickler setzen alle Regeln in eine einzige Zeile, wie folgt:

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

CSS ist dies egal. Wir persönlich finden, dass es lesbarer ist, jedes Eigenschafts-Wert-Paar in eine neue Zeile zu setzen.

### Kommentieren Sie Ihr CSS

Das Hinzufügen von Kommentaren zu Ihrem CSS wird jedem zukünftigen Entwickler helfen, mit Ihrer CSS-Datei zu arbeiten, und hilft auch Ihnen, wenn Sie nach einer Pause zum Projekt zurückkehren.

```css
/* This is a CSS comment
It can be broken onto multiple lines. */
```

Ein guter Tipp ist, auch einen Block von Kommentaren zwischen logisch zusammengehörenden Abschnitten in Ihrem Stylesheet hinzuzufügen, um diese schnell lokalisieren zu können, wenn man es durchscannt, oder um etwas zu haben, wonach man suchen kann, um direkt zu diesem Teil des CSS zu springen. Wenn Sie einen String verwenden, der im Code nicht vorkommt, können Sie von Abschnitt zu Abschnitt springen, indem Sie danach suchen — unten haben wir `||` verwendet.

```css
/* || General styles */

/* … */

/* || Typography */

/* … */

/* || Header and Main Navigation */

/* … */
```

Sie müssen nicht jede einzelne Sache in Ihrem CSS kommentieren, da viel davon selbsterklärend sein wird. Kommentieren sollten Sie die Dinge, bei denen Sie eine bestimmte Entscheidung aus einem bestimmten Grund getroffen haben.

Vielleicht haben Sie eine CSS-Eigenschaft auf eine spezifische Weise verwendet, um ältere Browser-Inkompatibilitäten zu umgehen, zum Beispiel:

```css
.box {
  background-color: red; /* fallback for older browsers that don't support gradients */
  background-image: linear-gradient(to right, #ff0000, #aa0000);
}
```

Vielleicht haben Sie ein Tutorial befolgt, um etwas zu erreichen, und das CSS ist nicht sehr selbsterklärend oder erkennbar. In diesem Fall könnten Sie die URL des Tutorials zu den Kommentaren hinzufügen. Sie werden sich selbst dankbar sein, wenn Sie nach einem Jahr zu diesem Projekt zurückkehren und sich vage erinnern, dass es ein großartiges Tutorial zu diesem Thema gab, aber nicht mehr wissen, woher es stammt.

### Erstellen Sie logische Abschnitte in Ihrem Stylesheet

Es ist eine gute Idee, alle allgemeinen Stile zuerst im Stylesheet zu haben. Das bedeutet alle Stile, die im Allgemeinen gelten, es sei denn, Sie tun etwas Besonderes mit diesem Element. In der Regel haben Sie Regeln für:

- `body`
- `p`
- `h1`, `h2`, `h3`, `h4`, `h5`
- `ul` und `ol`
- Die `table`-Eigenschaften
- Links

In diesem Abschnitt des Stylesheets bieten wir Standardstile für den Text auf der Website, richten einen Standardstil für Datentabellen und Listen ein und so weiter.

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

Nach diesem Abschnitt könnten wir einige Utility-Klassen definieren, zum Beispiel eine Klasse, die den Standard-Listentyp für Listen entfernt, die wir als Flex-Items oder auf andere Weise darstellen möchten. Wenn Sie einige Styling-Optionen haben, die Sie auf viele verschiedene Elemente angewendet sehen möchten, können sie in diesem Abschnitt untergebracht werden.

```css
/* || UTILITIES */

.no-bullets {
  list-style: none;
  margin: 0;
  padding: 0;
}

/* … */
```

Dann können wir alles hinzufügen, was standortweit verwendet wird. Das könnten Dinge wie das grundlegende Seitenlayout, die Kopfzeilen-, Navigationsstile und so weiter sein.

```css
/* SITEWIDE */

.main-nav {
  /* … */
}

.logo {
  /* … */
}
```

Schließlich fügen wir CSS für spezifische Dinge hinzu, aufgeschlüsselt nach Kontext, Seite oder sogar Komponente, in der sie verwendet werden.

```css
/* || STORE PAGES */

.product-listing {
  /* … */
}

.product-box {
  /* … */
}
```

Durch die Anordnung der Dinge auf diese Weise haben wir zumindest eine Vorstellung davon, in welchem Teil des Stylesheets wir nach etwas suchen werden, das wir ändern möchten.

### Vermeiden Sie übermäßig spezifische Selektoren

Wenn Sie sehr spezifische Selektoren erstellen, werden Sie oft feststellen, dass Sie große Teile Ihres CSS duplizieren müssen, um dieselben Regeln auf ein anderes Element anzuwenden. Zum Beispiel könnten Sie den unten stehenden Selektor haben, der die Regel auf ein `<p>` mit einer Klasse von `box` innerhalb eines `<article>` mit einer Klasse von `main` anwendet.

```css
article.main p.box {
  border: 1px solid #ccc;
}
```

Wenn Sie dann dieselben Regeln auf etwas außerhalb von `main` oder auf etwas anderes als ein `<p>` anwenden möchten, müssten Sie einen weiteren Selektor zu diesen Regeln hinzufügen oder einen ganz neuen Regelsatz erstellen. Stattdessen könnten Sie den Selektor `.box` verwenden, um Ihre Regel auf jedes Element anzuwenden, das die Klasse `box` hat:

```css
.box {
  border: 1px solid #ccc;
}
```

Es wird Zeiten geben, in denen es sinnvoll ist, etwas spezifischer zu machen; dies wird jedoch in der Regel eine Ausnahme und nicht die übliche Praxis sein.

### Große Stylesheets in mehrere kleinere aufteilen

In Fällen, in denen Sie sehr unterschiedliche Stile für verschiedene Teile der Website haben, möchten Sie möglicherweise ein Stylesheet haben, das alle globalen Regeln enthält, sowie einige kleinere Stylesheets, die die spezifischen Regeln enthalten, die für diese Abschnitte erforderlich sind. Sie können von einer Seite aus auf mehrere Stylesheets verlinken, und die normalen Regeln des Cascadings gelten, wobei Regeln in später verlinkten Stylesheets nach Regeln in früher verlinkten Stylesheets kommen.

Zum Beispiel könnten wir einen Online-Shop als Teil der Website haben, mit einer Menge CSS, die nur zur Gestaltung der Produktlisten und Formulare für den Shop verwendet wird. Es würde Sinn machen, diese Dinge in einem anderen Stylesheet zu haben, das nur auf Shop-Seiten verlinkt ist.

Dies kann es erleichtern, Ihr CSS zu organisieren, und bedeutet auch, dass, wenn mehrere Personen am CSS arbeiten, es weniger Situationen gibt, in denen zwei Personen gleichzeitig an demselben Stylesheet arbeiten müssen, was zu Konflikten in der Versionskontrolle führen kann.

## Andere Werkzeuge, die helfen können

CSS selbst hat nicht viel an integrierter Organisation; daher hängt der Grad der Konsistenz in Ihrem CSS weitgehend von Ihnen ab. Die Web-Community hat verschiedene Werkzeuge und Ansätze entwickelt, die Ihnen helfen können, größere CSS-Projekte zu verwalten. Da Sie wahrscheinlich auf diese Hilfsmittel stoßen, wenn Sie mit anderen Menschen arbeiten, und da sie oft allgemein hilfreich sind, haben wir eine kurze Anleitung zu einigen von ihnen beigefügt.

### CSS-Methodologien

Anstatt Ihre eigenen Regeln für das Schreiben von CSS zu finden, können Sie davon profitieren, einen der Ansätze zu übernehmen, die bereits von der Community entworfen und über viele Projekte hinweg getestet wurden. Diese Methodologien sind im Wesentlichen CSS-Coding-Leitfäden, die einen sehr strukturierten Ansatz für das Schreiben und Organisieren von CSS nehmen. Typischerweise neigen sie dazu, CSS ausführlicher darzustellen, als Sie es vielleicht getan hätten, wenn Sie jeden Selektor für ein Projekt nach einem individuellen Regelwerk optimiert hätten.

Durch die Übernahme erhalten Sie jedoch viel Struktur. Da viele dieser Systeme weit verbreitet sind, ist es wahrscheinlicher, dass andere Entwickler den von Ihnen verwendeten Ansatz verstehen und in der Lage sind, ihr eigenes CSS auf dieselbe Weise zu schreiben, anstatt Ihre eigene persönliche Methodologie von Grund auf neu zu erarbeiten.

#### OOCSS

Die meisten der Ansätze, denen Sie begegnen werden, verdanken etwas dem Konzept von Object Oriented CSS (OOCSS), ein Ansatz, der durch [die Arbeit von Nicole Sullivan](https://github.com/stubbornella/oocss/wiki) populär gemacht wurde. Die Grundidee von OOCSS ist es, Ihr CSS in wiederverwendbare Objekte zu unterteilen, die überall auf Ihrer Website genutzt werden können, wo Sie sie benötigen. Das Standardbeispiel für OOCSS ist das Muster, das als [The Media Object](/de/docs/Web/CSS/Layout_cookbook/Media_objects) beschrieben wird. Dies ist ein Muster mit einem festen Bild, Video oder anderem Element auf einer Seite und flexiblem Inhalt auf der anderen. Es ist ein Muster, das wir auf Websites überall für Kommentare, Listen usw. sehen.

Wenn Sie keinen OOCSS-Ansatz verfolgen, könnten Sie ein benutzerdefiniertes CSS für die verschiedenen Stellen erstellen, an denen dieses Muster verwendet wird, indem Sie zum Beispiel zwei Klassen erstellen, eine namens `comment` mit einer Reihe von Regeln für die Komponenten, und eine andere namens `list-item` mit fast denselben Regeln wie die `comment`-Klasse, außer mit einigen kleineren Unterschieden. Die Unterschiede zwischen diesen beiden Komponenten sind, dass der Listeneintrag einen unteren Rand hat und Bilder in Kommentaren einen Rand haben, während Listeneinträge keinen Rand haben.

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

In OOCSS würden Sie ein Muster namens `media` erstellen, das alle allgemeinen CSS für beide Muster enthält — eine Basisklasse für Dinge, die im Allgemeinen die Form des Medienobjekts haben. Dann würden wir eine zusätzliche Klasse hinzufügen, um diese Unterschiede im Styling spezifisch zu adressieren.

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

In Ihrem HTML würde der Kommentar sowohl die `media`- als auch die `comment`-Klasse benötigen:

```html
<div class="media comment">
  <img src="" alt="" />
  <div class="content"></div>
</div>
```

Der Listeneintrag würde `media` und `list-item` angewendet haben:

```html
<ul>
  <li class="media list-item">
    <img src="" alt="" />
    <div class="content"></div>
  </li>
</ul>
```

Die Arbeit, die Nicole Sullivan bei der Beschreibung dieses Ansatzes geleistet und ihn populär gemacht hat, bedeutet, dass selbst Leute, die heute nicht streng einem OOCSS-Ansatz folgen, im Allgemeinen CSS auf diese Weise wiederverwenden — es hat sich als gute Möglichkeit etabliert, Dinge im Allgemeinen anzugehen.

#### BEM

BEM steht für Block Element Modifier. In BEM ist ein Block ein eigenständiges Element wie ein Button, Menü oder Logo. Ein Element ist etwas wie ein Listeneintrag oder ein Titel, das an den Block gebunden ist, in dem es sich befindet. Ein Modifikator ist eine Markierung an einem Block oder Element, die das Styling oder Verhalten ändert. Sie werden an dem extensiven Gebrauch von Bindestrichen und Unterstrichen in den CSS-Klassen erkennen, dass ein Code BEM verwendet. Sehen Sie sich zum Beispiel die Klassen an, die auf dieses HTML aus der Seite über [BEM-Namenskonventionen](https://getbem.com/naming/) angewendet werden:

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

Die zusätzlichen Klassen sind ähnlich denen, die im OOCSS-Beispiel verwendet wurden, jedoch nutzen sie die strengen Namenskonventionen von BEM.

BEM wird häufig in größeren Webprojekten verwendet, und viele Menschen schreiben ihr CSS auf diese Weise. Es ist wahrscheinlich, dass Sie in Tutorials oder Beispielen auf Beispiele stoßen, die BEM-Syntax verwenden, ohne zu erwähnen, warum das CSS in dieser Weise strukturiert ist.

Lesen Sie mehr über dieses System in [BEM 101](https://css-tricks.com/bem-101/) auf CSS Tricks.

#### Andere gängige Systeme

Es gibt eine große Anzahl dieser Systeme im Einsatz. Andere beliebte Ansätze sind [Scalable and Modular Architecture for CSS (SMACSS)](https://smacss.com/), erstellt von Jonathan Snook, [ITCSS](https://itcss.io/) von Harry Roberts und [Atomizer CSS (ACSS)](https://acss-io.github.io/atomizer/), ursprünglich erstellt von Yahoo!. Wenn Sie auf ein Projekt stoßen, das einen dieser Ansätze verwendet, dann liegt der Vorteil darin, dass Sie viele Artikel und Anleitungen finden können, die Ihnen helfen zu verstehen, wie Sie im selben Stil codieren können.

Der Nachteil der Verwendung eines solchen Systems ist, dass sie für kleinere Projekte oft übermäßig komplex erscheinen können.

### Build-Systeme für CSS

Eine andere Möglichkeit, CSS zu organisieren, ist, einige der Werkzeuge zu nutzen, die für Frontend-Entwickler zur Verfügung stehen, die es Ihnen erlauben, einen eher programmatischen Ansatz beim Schreiben von CSS zu verfolgen. Es gibt eine Reihe von Tools, die wir als _Pre-Processor_ und _Post-Processor_ bezeichnen. Ein Pre-Processor läuft über Ihre Rohdateien und wandelt sie in ein Stylesheet um, während ein Post-Processor Ihr fertiges Stylesheet nimmt und etwas damit macht — vielleicht um es zu optimieren, damit es schneller lädt.

Die Verwendung dieser Tools erfordert, dass Ihre Entwicklungsumgebung in der Lage ist, die Skripte auszuführen, die das Pre- und Post-Processing durchführen. Viele Code-Editoren können dies für Sie tun, oder Sie können Befehlszeilentools installieren, um zu helfen.

Der beliebteste Pre-Processor ist [Sass](https://sass-lang.com/). Dies ist kein Sass-Tutorial, daher werde ich kurz einige der Dinge erklären, die Sass tun kann, die wirklich hilfreich sind, was die Organisation betrifft, selbst wenn Sie keine anderen Sass-Features verwenden. Wenn Sie viel mehr über Sass erfahren möchten, beginnen Sie mit dem Artikel [Sass basics](https://sass-lang.com/guide/) und gehen Sie dann zu ihrer weiteren Dokumentation.

#### Definition von Variablen

CSS hat jetzt native [Benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Using_CSS_custom_properties), was diese Funktion zunehmend weniger wichtig macht. Ein Grund, warum Sie jedoch Sass verwenden könnten, ist, alle Farben und Schriftarten, die in einem Projekt verwendet werden, als Einstellungen definieren zu können und dann diese Variable im gesamten Projekt zu verwenden. Das bedeutet, dass, wenn Sie feststellen, dass Sie den falschen Blauton verwendet haben, Sie ihn nur an einer Stelle ändern müssen.

Wenn wir eine Variable namens `$base-color` erstellen, wie in der ersten Zeile unten, könnten wir sie an jedem Ort im Stylesheet verwenden, der diese Farbe erfordert.

```scss
$base-color: #c6538c;

.alert {
  border: 1px solid $base-color;
}
```

Einmal zu CSS kompiliert, hätten Sie folgendes CSS im endgültigen Stylesheet.

```css
.alert {
  border: 1px solid #c6538c;
}
```

#### Kompilieren von Komponenten-Stylesheets

Ich habe oben erwähnt, dass eine Möglichkeit, CSS zu organisieren, darin besteht, Stylesheets in kleinere aufzuteilen. Bei der Verwendung von Sass können Sie dies auf eine andere Ebene heben und viele sehr kleine Stylesheets haben — sogar so weit gehen, ein separates Stylesheet für jede Komponente zu haben. Indem Sie die in Sass enthaltene Funktionalität (Partials) nutzen, können diese alle zusammen in ein oder eine kleine Anzahl von Stylesheets kompiliert werden, die tatsächlich auf Ihre Website verlinkt werden.

Mit [Partials](https://sass-lang.com/documentation/at-rules/use/#partials) könnten Sie beispielsweise mehrere Styldateien in einem Verzeichnis haben, etwa `foundation/_code.scss`, `foundation/_lists.scss`, `foundation/_footer.scss`, `foundation/_links.scss` usw. Sie könnten dann die Sass `@use`-Regel verwenden, um sie in andere Stylesheets zu laden:

```scss
// foundation/_index.scss
@use "code";
@use "lists";
@use "footer";
@use "links";
```

Wenn die Partials alle in eine Index-Datei geladen sind, wie oben angedeutet, können Sie dann das gesamte Verzeichnis in ein anderes Stylesheet in einem Schritt laden:

```scss
// style.scss
@use "foundation";
```

> [!NOTE]
> Eine einfache Möglichkeit, Sass auszuprobieren, ist die Nutzung von [CodePen](https://codepen.io/) - Sie können Sass für Ihr CSS in den Einstellungen eines Pens aktivieren und CodePen führt dann den Sass-Parser für Sie aus, sodass Sie die resultierende Webseite mit angewendetem regulären CSS sehen können. Manchmal werden Sie feststellen, dass CSS-Tutorials Sass statt einfachem CSS in ihren CodePen-Demos verwendet haben. Deshalb ist es hilfreich, ein wenig darüber zu wissen.

#### Post-Processing zur Optimierung

Wenn Sie besorgt sind, Ihrem Stylesheet Größe hinzuzufügen, zum Beispiel durch die Zugabe einer Menge zusätzlicher Kommentare und Leerzeichen, könnte ein Post-Processing-Schritt darin bestehen, das CSS zu optimieren, indem alles Unnötige in der Produktionsversion entfernt wird. Ein Beispiel für eine Post-Processor-Lösung zur Durchführung dieser Aufgabe wäre [cssnano](https://cssnano.github.io/cssnano/).

## Zusammenfassung

Dies ist der letzte Teil unseres Bausteine-Moduls, und wie Sie sehen können, gibt es viele Wege, wie Sie Ihre Erkundung von CSS von diesem Punkt aus fortsetzen können — aber jetzt können Sie mit unseren Bewertungen fortfahren: die erste ist unten verlinkt.

Um mehr über das Layout in CSS zu erfahren, siehe das Modul [CSS-Layout](/de/docs/Learn/CSS/CSS_layout).

Sie sollten nun auch die Fähigkeiten haben, den Rest des [MDN CSS](/de/docs/Web/CSS) Materials zu erkunden. Sie können Eigenschaften und Werte nachschlagen, unser [CSS-Cookbook](/de/docs/Web/CSS/Layout_cookbook) nach Mustern durchsuchen oder in einigen spezifischen Leitfäden weiterlesen, wie beispielsweise unserem [Leitfaden zum CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout).

{{PreviousMenuNext("Learn/CSS/Building_blocks/Debugging_CSS", "Learn/CSS/Building_blocks/Fundamental_CSS_comprehension", "Learn/CSS/Building_blocks")}}
