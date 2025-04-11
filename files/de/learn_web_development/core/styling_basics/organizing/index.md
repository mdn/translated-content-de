---
title: Organisieren Ihres CSS
slug: Learn_web_development/Core/Styling_basics/Organizing
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

Wenn Sie anfangen, an größeren Stylesheets und großen Projekten zu arbeiten, werden Sie feststellen, dass die Verwaltung einer riesigen CSS-Datei herausfordernd sein kann. In diesem Artikel werfen wir einen kurzen Blick auf einige Best Practices für das Schreiben Ihres CSS, um es leicht wartbar zu machen, und auf einige der Lösungen, die Sie bei anderen finden werden, um die Wartbarkeit zu verbessern.

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
        >, HTML-Grundlagen (studieren Sie die
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Einführung in HTML</a
        >) und eine Vorstellung davon, wie CSS funktioniert (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS Stilgrundlagen</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Um einige Tipps und Best Practices für die Organisation von Stylesheets zu lernen und sich über einige der gängigen Namenskonventionen und Werkzeuge zu informieren, die bei der CSS-Organisation und Teamarbeit helfen.
      </td>
    </tr>
  </tbody>
</table>

## Tipps, um Ihr CSS ordentlich zu halten

Hier sind einige allgemeine Vorschläge, wie Sie Ihre Stylesheets organisiert und ordentlich halten können.

### Hat Ihr Projekt einen Stilguide für Code?

Wenn Sie mit einem Team an einem bestehenden Projekt arbeiten, sollten Sie zuerst prüfen, ob das Projekt bereits einen Stilguide für CSS hat. Der Team-Stilguide sollte immer den Vorzug vor Ihren eigenen Vorlieben haben. Oft gibt es kein richtig oder falsch, aber Konsistenz ist wichtig.

Sehen Sie sich zum Beispiel die [CSS-Richtlinien für MDN-Codebeispiele](/de/docs/MDN/Writing_guidelines/Code_style_guide/CSS) an.

### Halten Sie es konsistent

Wenn Sie die Regeln für das Projekt festlegen dürfen oder allein arbeiten, dann ist das Wichtigste, die Dinge konsistent zu halten. Konsistenz kann auf verschiedene Weise angewendet werden, wie zum Beispiel die Verwendung derselben Namenskonventionen für Klassen, die Wahl einer Methode zur Darstellung von Farben oder die Beibehaltung eines einheitlichen Formats. (Zum Beispiel, werden Sie für die Einrückung Ihrer Codes Tabs oder Leerzeichen verwenden? Wenn Leerzeichen, wie viele Leerzeichen?)

Einheitliche Regeln zu haben, denen Sie immer folgen, reduziert den mentalen Aufwand beim Schreiben von CSS, da einige Entscheidungen bereits getroffen sind.

### Lesbares CSS formatieren

Es gibt verschiedene Möglichkeiten, wie CSS formatiert wird. Einige Entwickler fassen alle Regeln auf einer einzigen Zeile zusammen:

```css-nolint
.box {background-color: #567895; }
h2 {background-color: black; color: white; }
```

Andere Entwickler ziehen es vor, alles auf neue Zeilen zu setzen:

```css
.box {
  background-color: #567895;
}

h2 {
  background-color: black;
  color: white;
}
```

CSS ist es egal, welche Methode Sie verwenden. Wir persönlich finden es lesbarer, jedes Paar aus Eigenschaft und Wert auf einer neuen Zeile zu haben.

### Kommentieren Sie Ihr CSS

Kommentare in Ihr CSS einzufügen wird jedem zukünftigen Entwickler helfen, mit Ihrer CSS-Datei zu arbeiten, und auch Ihnen, wenn Sie nach einer Pause zum Projekt zurückkehren.

```css
/* This is a CSS comment
It can be broken onto multiple lines. */
```

Ein guter Tipp ist es, auch einen Block von Kommentaren zwischen logischen Abschnitten in Ihrem Stylesheet hinzuzufügen, um verschiedene Abschnitte schnell zu finden oder um Ihnen etwas zu geben, wonach Sie suchen können, um direkt zu diesem Teil des CSS zu springen. Wenn Sie eine Zeichenkette verwenden, die nicht im Code vorkommt, können Sie von Abschnitt zu Abschnitt springen, indem Sie danach suchen — unten haben wir `||` verwendet.

```css
/* || General styles */

/* … */

/* || Typography */

/* … */

/* || Header and Main Navigation */

/* … */
```

Sie müssen nicht jede einzelne Sache in Ihrem CSS kommentieren, da vieles davon selbsterklärend sein wird. Was Sie kommentieren sollten, sind die Dinge, bei denen Sie sich aus einem bestimmten Grund für eine Entscheidung entschieden haben.

Vielleicht haben Sie eine CSS-Eigenschaft auf eine bestimmte Weise verwendet, um ältere Browser-Inkompatibilitäten zu umgehen, zum Beispiel:

```css
.box {
  background-color: red; /* fallback for older browsers that don't support gradients */
  background-image: linear-gradient(to right, #ff0000, #aa0000);
}
```

Vielleicht sind Sie einem Tutorial gefolgt, um etwas zu erreichen, und das CSS ist nicht sehr selbsterklärend oder erkennbar. In diesem Fall könnten Sie die URL des Tutorials zu den Kommentaren hinzufügen. Sie werden sich selbst danken, wenn Sie in einem Jahr oder so zu diesem Projekt zurückkehren und sich vage daran erinnern, dass es ein großartiges Tutorial zu diesem Thema gab, aber nicht mehr wissen, woher es war.

### Erstellen Sie logische Abschnitte in Ihrem Stylesheet

Es ist eine gute Idee, alle allgemeinen Stile zuerst im Stylesheet zu haben. Dies bedeutet, dass alle Styles, die im Allgemeinen angewendet werden, es sei denn, Sie machen etwas Besonderes mit diesem Element. Sie werden typischerweise Regeln für Folgendes aufstellen:

- `body`
- `p`
- `h1`, `h2`, `h3`, `h4`, `h5`
- `ul` und `ol`
- Die `table`-Eigenschaften
- Links

In diesem Abschnitt des Stylesheets bieten wir Standard-Styling für den Text auf der Seite an, richten eine Standard-Stilrichtung für Datentabellen und Listen ein und so weiter.

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

Nach diesem Abschnitt könnten wir einige Utility-Klassen definieren, zum Beispiel eine Klasse, die den Standardlistenstil für Listen entfernt, die wir als Flex-Elemente oder auf andere Weise darstellen möchten. Wenn Sie einige Stilentscheidungen haben, die Sie auf viele verschiedene Elemente anwenden möchten, können diese in diesem Abschnitt platziert werden.

```css
/* || UTILITIES */

.no-bullets {
  list-style: none;
  margin: 0;
  padding: 0;
}

/* … */
```

Dann können wir alles hinzufügen, was auf der gesamten Website verwendet wird. Das könnten Dinge wie das grundlegende Seitenlayout, das Header-, Navigationsstyling und so weiter sein.

```css
/* SITEWIDE */

.main-nav {
  /* … */
}

.logo {
  /* … */
}
```

Schließlich werden wir CSS für spezifische Dinge einfügen, unterteilt nach Kontext, Seite oder sogar Komponente, in denen sie verwendet werden.

```css
/* || STORE PAGES */

.product-listing {
  /* … */
}

.product-box {
  /* … */
}
```

Indem wir die Dinge auf diese Weise ordnen, haben wir zumindest eine Vorstellung davon, in welchem Teil des Stylesheets wir nach etwas suchen, das wir ändern möchten.

### Vermeiden Sie zu spezifische Selektoren

Wenn Sie sehr spezifische Selektoren erstellen, werden Sie oft feststellen, dass Sie große Teile Ihres CSS duplizieren müssen, um dieselben Regeln auf ein anderes Element anzuwenden. Zum Beispiel könnten Sie einen Selektor wie den unten stehenden haben, der die Regel auf ein `<p>` mit der Klasse `box` innerhalb eines `<article>` mit der Klasse `main` anwendet.

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

Es wird Zeiten geben, in denen es sinnvoll ist, etwas spezifischer zu machen; dies wird jedoch eher die Ausnahme als die Regel sein.

### Große Stylesheets in mehrere kleinere aufteilen

In Fällen, in denen Sie sehr unterschiedliche Styles für verschiedene Teile der Website haben, möchten Sie möglicherweise ein Stylesheet haben, das alle globalen Regeln enthält, sowie einige kleinere Stylesheets, die die spezifischen Regeln für diese Abschnitte enthalten. Sie können mehrere Stylesheets von einer Seite aus verlinken, und die normalen Regeln der Kaskade gelten, wobei die Regeln in später verlinkten Stylesheets nach den Regeln in früher verlinkten Stylesheets kommen.

Zum Beispiel könnten wir einen Online-Shop als Teil der Website haben, mit einer Menge CSS, das nur für das Stylen der Produktlisten und Formulare benötigt wird. Es würde Sinn machen, diese Dinge in einem anderen Stylesheet zu haben, das nur auf Shop-Seiten verlinkt wird.

Dies kann es einfacher machen, Ihr CSS zu organisieren, und bedeutet auch, dass, wenn mehrere Personen an dem CSS arbeiten, Sie weniger Situationen haben werden, in denen zwei Personen gleichzeitig am gleichen Stylesheet arbeiten müssen, was zu Konflikten in der Versionskontrolle führen kann.

## Andere Werkzeuge, die helfen können

CSS selbst hat nicht viel an eingebauter Organisation; daher hängt das Maß an Konsistenz in Ihrem CSS weitgehend von Ihnen ab. Die Web-Community hat verschiedene Werkzeuge und Ansätze entwickelt, die Ihnen helfen können, größere CSS-Projekte zu verwalten. Da Sie diese Hilfen wahrscheinlich bei der Zusammenarbeit mit anderen Menschen antreffen werden und da sie oft allgemein hilfreich sind, haben wir einen kurzen Leitfaden zu einigen von ihnen eingefügt.

### CSS-Methodologien

Anstatt Ihre eigenen Regeln für das Schreiben von CSS zu entwickeln, könnten Sie von einer der von der Community entworfenen und über viele Projekte hinweg getesteten Ansätze profitieren. Diese Methodologien sind im Wesentlichen CSS-Coding-Leitfäden, die einen sehr strukturierten Ansatz zur Erstellung und Organisation von CSS verfolgen. Typischerweise neigen sie dazu, CSS ausführlicher darzustellen, als Sie es vielleicht getan hätten, wenn Sie jeden Selektor zu einem benutzerdefinierten Satz von Regeln für dieses Projekt optimiert hätten.

Sie gewinnen jedoch eine Menge Struktur durch die Übernahme. Da viele dieser Systeme weit verbreitet sind, ist es wahrscheinlicher, dass andere Entwickler den von Ihnen verwendeten Ansatz verstehen und ihren eigenen CSS auf dieselbe Weise schreiben können, anstatt Ihre eigene Methode von Grund auf nachvollziehen zu müssen.

#### OOCSS

Die meisten der von Ihnen angetroffenen Ansätze verdanken etwas dem Konzept des Objektorientierten CSS (OOCSS), einem Ansatz, der durch [die Arbeit von Nicole Sullivan](https://github.com/stubbornella/oocss/wiki) populär wurde. Die Grundidee von OOCSS besteht darin, Ihr CSS in wiederverwendbare Objekte zu trennen, die überall auf Ihrer Website verwendet werden können. Das Standardbeispiel von OOCSS ist das Muster, das als [The Media Object](/de/docs/Web/CSS/Layout_cookbook/Media_objects) beschrieben wird. Dies ist ein Muster mit einem feststehenden Bild, Video oder anderem Element auf einer Seite und flexiblem Inhalt auf der anderen. Es ist ein Muster, das wir überall auf Websites für Kommentare, Listen und so weiter sehen.

Wenn Sie keinen OOCSS-Ansatz verfolgen, könnten Sie ein benutzerdefiniertes CSS für die verschiedenen Orte erstellen, an denen dieses Muster verwendet wird, indem Sie beispielsweise zwei Klassen erstellen, eine mit dem Namen `comment` mit einem Haufen von Regeln für die Komponenten und eine andere mit dem Namen `list-item` mit fast denselben Regeln wie die der Klasse `comment`, abgesehen von einigen kleinen Unterschieden. Die Unterschiede zwischen diesen beiden Komponenten sind, dass das list-item eine untere Umrandung hat und Bilder in Kommentaren eine Umrandung haben, während list-item-Bilder keine haben.

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

In OOCSS würden Sie ein Muster namens `media` erstellen, das alle gängigen CSS für beide Muster enthält — eine Basisklasse für Dinge, die im Allgemeinen die Form des Medienobjekts haben. Dann würden wir eine zusätzliche Klasse hinzufügen, um diese Stilisierung auf spezifische Weisen zu erweitern.

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

In Ihrem HTML würde der Kommentar sowohl die Klassen `media` als auch `comment` benötigen:

```html
<div class="media comment">
  <img src="" alt="" />
  <div class="content"></div>
</div>
```

Das list-item würde `media` und `list-item` anwenden:

```html
<ul>
  <li class="media list-item">
    <img src="" alt="" />
    <div class="content"></div>
  </li>
</ul>
```

Die Arbeit, die Nicole Sullivan bei der Beschreibung und Förderung dieses Ansatzes geleistet hat, bedeutet, dass selbst Menschen, die heute keinen strikt OOCSS-Ansatz verfolgen, im Allgemeinen CSS auf diese Weise wiederverwenden — es hat unser Verständnis als eine gute Herangehensweise an Dinge im Allgemeinen geprägt.

#### BEM

BEM steht für Block Element Modifier. In BEM ist ein Block eine eigenständige Entität wie eine Schaltfläche, ein Menü oder ein Logo. Ein Element ist etwas wie ein Listenelement oder ein Titel, das mit dem Block verbunden ist, in dem es sich befindet. Ein Modifier ist ein Flag auf einem Block oder Element, das das Styling oder Verhalten verändert. Sie werden Code erkennen, der BEM verwendet, aufgrund der umfangreichen Verwendung von Bindestrichen und Unterstrichen in den CSS-Klassen. Schauen Sie sich zum Beispiel die Klassen an, die auf dieses HTML von der Seite über [BEM-Namenskonventionen](https://getbem.com/naming/) angewendet werden:

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

Die zusätzlichen Klassen sind ähnlich wie die im OOCSS-Beispiel verwendeten; sie verwenden jedoch die strikten Namenskonventionen von BEM.

BEM wird häufig in größeren Webprojekten verwendet, und viele Menschen schreiben ihren CSS auf diese Weise. Es ist wahrscheinlich, dass Sie auf Beispiele stoßen werden, selbst in Tutorials, die BEM-Syntax verwenden, ohne zu erwähnen, warum das CSS auf diese Weise strukturiert ist.

Lesen Sie mehr über dieses System [BEM 101](https://css-tricks.com/bem-101/) auf CSS Tricks.

#### Andere gängige Systeme

Es gibt eine große Anzahl dieser Systeme im Einsatz. Andere beliebte Ansätze sind [Scalable and Modular Architecture for CSS (SMACSS)](https://smacss.com/), erstellt von Jonathan Snook, [ITCSS](https://itcss.io/) von Harry Roberts, und [Atomizer CSS (ACSS)](https://acss-io.github.io/atomizer/), ursprünglich erstellt von Yahoo!. Wenn Sie auf ein Projekt stoßen, das einen dieser Ansätze verwendet, dann ist der Vorteil, dass Sie in der Lage sein werden, viele Artikel und Leitfäden zu finden, die Ihnen helfen werden, im gleichen Stil zu codieren.

Der Nachteil bei der Verwendung eines solchen Systems ist, dass sie übermäßig komplex erscheinen können, insbesondere für kleinere Projekte.

### Build-Systeme für CSS

Eine andere Möglichkeit, CSS zu organisieren, besteht darin, einige der Werkzeuge zu nutzen, die für Front-End-Entwickler verfügbar sind, die es Ihnen ermöglichen, einen etwas programmatischeren Ansatz beim Schreiben von CSS zu verfolgen. Es gibt eine Reihe von Tools, die wir als _Pre-Processor_ und _Post-Processor_ bezeichnen. Ein Pre-Processor läuft über Ihre rohen Dateien und wandelt sie in ein Stylesheet um, während ein Post-Processor Ihr fertiges Stylesheet nimmt und etwas damit macht — vielleicht um es zu optimieren, damit es schneller geladen wird.

Die Verwendung eines dieser Tools erfordert, dass Ihre Entwicklungsumgebung in der Lage ist, die Skripte auszuführen, die das Pre- und Post-Processing durchführen. Viele Code-Editoren können dies für Sie tun oder Sie können Befehlszeilenwerkzeuge installieren, um zu helfen.

Der beliebteste Pre-Processor ist [Sass](https://sass-lang.com/). Dies ist kein Sass-Tutorial, also werde ich kurz einige der Dinge erklären, die Sass tun kann und die in Bezug auf die Organisation wirklich hilfreich sind, selbst wenn Sie keine anderen Sass-Funktionen verwenden. Wenn Sie viel mehr über Sass lernen möchten, beginnen Sie mit dem Artikel [Sass-Grundlagen](https://sass-lang.com/guide/), und gehen Sie dann zu ihrer anderen Dokumentation über.

#### Variablen definieren

CSS hat jetzt native [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties), wodurch diese Funktion zunehmend weniger wichtig wird. Ein Grund, warum Sie dennoch Sass verwenden könnten, ist, dass Sie alle Farben und Schriftarten, die in einem Projekt verwendet werden, als Einstellungen definieren und dann diese Variable im gesamten Projekt verwenden können. Das bedeutet, dass wenn Sie feststellen, dass Sie den falschen Blauton verwendet haben, Sie ihn nur an einer Stelle ändern müssen.

Wenn wir eine Variable namens `$base-color` erstellen, wie in der ersten Zeile unten, könnten wir sie im gesamten Stylesheet überall dort verwenden, wo diese Farbe benötigt wird.

```scss
$base-color: #c6538c;

.alert {
  border: 1px solid $base-color;
}
```

Nach dem Kompilieren zu CSS würden Sie das folgende CSS im endgültigen Stylesheet erhalten.

```css
.alert {
  border: 1px solid #c6538c;
}
```

#### Kompilieren von Komponenten-Stylesheets

Ich habe oben erwähnt, dass eine Möglichkeit zur Organisation von CSS darin besteht, Stylesheets in kleinere Stylesheets aufzuteilen. Wenn Sie Sass verwenden, können Sie dies auf eine andere Ebene bringen und viele sehr kleine Stylesheets haben - sogar bis zu dem Punkt, dass Sie ein separates Stylesheet für jede Komponente haben. Durch die Verwendung der enthaltenen Funktionalität in Sass (Partials) können diese alle in ein oder eine kleine Anzahl von Stylesheets kompiliert werden, um tatsächlich in Ihre Website eingefügt zu werden.

So könnten Sie beispielsweise mit [Partials](https://sass-lang.com/documentation/at-rules/use/#partials) mehrere Stil-Dateien in einem Verzeichnis haben, zum Beispiel `foundation/_code.scss`, `foundation/_lists.scss`, `foundation/_footer.scss`, `foundation/_links.scss` usw. Sie können dann die Sass `@use` Anweisung verwenden, um sie in andere Stylesheets zu laden:

```scss
// foundation/_index.scss
@use "code";
@use "lists";
@use "footer";
@use "links";
```

Wenn die Partials alle in eine Index-Datei geladen werden, wie oben angedeutet, können Sie dann dieses gesamte Verzeichnis in ein anderes Stylesheet in einem Schritt laden:

```scss
// style.scss
@use "foundation";
```

> [!NOTE]
> Eine einfache Möglichkeit, Sass auszuprobieren, ist die Verwendung von [CodePen](https://codepen.io/) — Sie können Sass für Ihr CSS in den Einstellungen für ein Pen aktivieren, und CodePen wird dann den Sass-Parser für Sie ausführen, so dass Sie die resultierende Webseite mit regulärem CSS sehen können. Manchmal werden Sie feststellen, dass CSS-Tutorials Sass anstelle von einfachem CSS in ihren CodePen-Demos verwendet haben, daher ist es nützlich, etwas darüber zu wissen.

#### Post-Processing zur Optimierung

Wenn Sie besorgt sind, durch das Hinzufügen von vielen zusätzlichen Kommentaren und Leerzeichen die Größe Ihrer Stylesheets zu erhöhen, dann könnte ein Post-Processing-Schritt sein, das CSS zu optimieren, indem alles Unnötige in der Produktionsversion entfernt wird. Ein Beispiel für eine Post-Processor-Lösung, um dies zu tun, wäre [cssnano](https://cssnano.github.io/cssnano/).
