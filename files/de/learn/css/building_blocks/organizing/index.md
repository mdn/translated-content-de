---
title: Organisieren Ihres CSS
slug: Learn/CSS/Building_blocks/Organizing
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Debugging_CSS", "Learn/CSS/Building_blocks/Fundamental_CSS_comprehension", "Learn/CSS/Building_blocks")}}

Wenn Sie beginnen, an größeren Stylesheets und großen Projekten zu arbeiten, werden Sie entdecken, dass die Verwaltung einer riesigen CSS-Datei herausfordernd sein kann. In diesem Artikel werfen wir einen kurzen Blick auf einige bewährte Methoden, um Ihr CSS so zu schreiben, dass es leicht wartbar ist, sowie auf einige der Lösungen, die Sie von anderen verwenden, um die Wartbarkeit zu verbessern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Grundlegende Software installiert</a
        >, Grundkenntnisse im
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >Arbeiten mit Dateien</a
        >, HTML-Grundlagen (studieren Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >) und eine Vorstellung davon, wie CSS funktioniert (studieren Sie
        <a href="/de/docs/Learn/CSS/First_steps">Erste Schritte mit CSS</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Einige Tipps und bewährte Methoden zum Organisieren von Stylesheets zu lernen und sich über einige der gebräuchlichen Namenskonventionen und Werkzeuge zu informieren, die bei der Organisation von CSS und der Teamarbeit helfen.
      </td>
    </tr>
  </tbody>
</table>

## Tipps, um Ihr CSS ordentlich zu halten

Hier sind einige allgemeine Vorschläge, um Ihre Stylesheets organisiert und ordentlich zu halten.

### Hat Ihr Projekt einen Kodierungsstil-Leitfaden?

Wenn Sie in einem Team an einem bestehenden Projekt arbeiten, sollten Sie als erstes überprüfen, ob das Projekt einen bestehenden Styleguide für CSS hat. Der Team-Styleguide sollte immer über Ihren eigenen Vorlieben stehen. Es gibt oft keinen richtigen oder falschen Weg, Dinge zu tun, aber Konsistenz ist wichtig.

Schauen Sie sich zum Beispiel die [CSS-Richtlinien für MDN-Codebeispiele](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/CSS) an.

### Halten Sie es konsistent

Wenn Sie die Regeln für das Projekt festlegen oder allein arbeiten, dann ist das Wichtigste, die Dinge konsistent zu halten. Konsistenz kann auf verschiedene Arten angewendet werden, z.B. durch die Verwendung derselben Namenskonventionen für Klassen, die Wahl einer Methode zur Beschreibung von Farben oder die Beibehaltung eines einheitlichen Formats. (Zum Beispiel, werden Sie Tabs oder Leerzeichen verwenden, um Ihren Code einzurücken? Wenn Leerzeichen, wie viele?)

Wenn Sie eine Reihe von Regeln haben, denen Sie immer folgen, reduziert sich der mentale Aufwand beim Schreiben von CSS, da einige Entscheidungen bereits getroffen sind.

### Formatieren von lesbarem CSS

Es gibt ein paar Möglichkeiten, wie Sie CSS formatiert sehen werden. Einige Entwickler setzen alle Regeln in eine Zeile, wie folgt:

```css-nolint
.box {background-color: #567895; }
h2 {background-color: black; color: white; }
```

Andere Entwickler bevorzugen es, alles in eine neue Zeile zu setzen:

```css
.box {
  background-color: #567895;
}

h2 {
  background-color: black;
  color: white;
}
```

CSS ist es egal, welche Sie verwenden. Wir persönlich finden es lesbarer, jedes Paar aus Eigenschaft und Wert in eine neue Zeile zu setzen.

### Kommentieren Sie Ihr CSS

Das Hinzufügen von Kommentaren zu Ihrem CSS wird jedem zukünftigen Entwickler helfen, mit Ihrer CSS-Datei zu arbeiten, aber es wird auch Ihnen helfen, wenn Sie nach einer Pause zu dem Projekt zurückkehren.

```css
/* Dies ist ein CSS-Kommentar
Er kann auf mehrere Zeilen aufgeteilt werden. */
```

Ein guter Tipp ist es, zwischen logischen Abschnitten in Ihrem Stylesheet einen Block von Kommentaren einzufügen, um verschiedene Abschnitte schnell zu finden, wenn Sie es überfliegen, oder um Ihnen sogar etwas zu geben, wonach Sie suchen können, um direkt zu diesem Teil des CSS zu springen. Wenn Sie eine Zeichenfolge verwenden, die im Code nicht vorkommt, können Sie durch Suchen danach von Abschnitt zu Abschnitt springen — unten haben wir `||` verwendet.

```css
/* || Allgemeine Stile */

/* … */

/* || Typografie */

/* … */

/* || Kopf- und Hauptnavigation */

/* … */
```

Sie müssen nicht jeden einzelnen Punkt in Ihrem CSS kommentieren, da vieles davon selbsterklärend sein wird. Was Sie kommentieren sollten, sind die Dinge, bei denen Sie aus einem bestimmten Grund eine Entscheidung getroffen haben.

Möglicherweise haben Sie eine CSS-Eigenschaft auf eine bestimmte Weise genutzt, um ältere Browser-Inkompatibilitäten zu umgehen, zum Beispiel:

```css
.box {
  background-color: red; /* Fallback für ältere Browser, die keine Verläufe unterstützen */
  background-image: linear-gradient(to right, #ff0000, #aa0000);
}
```

Vielleicht haben Sie ein Tutorial befolgt, um etwas zu erreichen, und das CSS ist nicht sehr selbsterklärend oder erkennbar. In diesem Fall könnten Sie die URL des Tutorials zu den Kommentaren hinzufügen. Sie werden sich selbst danken, wenn Sie in einem Jahr oder so zu diesem Projekt zurückkehren und sich vage erinnern können, dass es ein großartiges Tutorial zu diesem Thema gab, aber sich nicht erinnern können, woher es stammt.

### Erstellen Sie logische Abschnitte in Ihrem Stylesheet

Es ist eine gute Idee, alle allgemeinen Stile zuerst im Stylesheet zu haben. Das bedeutet alle Stile, die im Allgemeinen angewendet werden, es sei denn, Sie machen etwas Besonderes mit diesem Element. Sie werden typischerweise Regeln für folgendes eingerichtet haben:

- `body`
- `p`
- `h1`, `h2`, `h3`, `h4`, `h5`
- `ul` und `ol`
- Die `table`-Eigenschaften
- Links

In diesem Abschnitt des Stylesheets stellen wir Standard-Styling für die Typografie auf der Seite bereit, richten Standard-Styling für Datentabellen und Listen ein und mehr.

```css
/* || ALLGEMEINE STILE */

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

Nach diesem Abschnitt könnten wir einige Dienstprogrammklassen definieren, beispielsweise eine Klasse, die den Standard-Listenstil für Listen entfernt, die wir als Flex-Elemente oder auf andere Weise anzeigen werden. Wenn Sie einige Styling-Optionen haben, von denen Sie wissen, dass Sie sie auf viele verschiedene Elemente anwenden möchten, können sie in diesen Abschnitt eingefügt werden.

```css
/* || DIENSTPROGRAMME */

.nobullets {
  list-style: none;
  margin: 0;
  padding: 0;
}

/* … */
```

Dann können wir alles hinzufügen, was auf der gesamten Website verwendet wird. Das könnten Dinge wie das grundlegende Seitenlayout, Kopfbereich, Navigation-Styling und so weiter sein.

```css
/* || SEITENWEIT */

.main-nav {
  /* … */
}

.logo {
  /* … */
}
```

Schließlich werden wir CSS für bestimmte Dinge einschließen, aufgeteilt nach Kontext, Seite oder sogar Komponente, in der sie verwendet werden.

```css
/* || STORE-SEITEN */

.product-listing {
  /* … */
}

.product-box {
  /* … */
}
```

Durch diese Reihenfolge haben wir zumindest eine Vorstellung davon, in welchem Teil des Stylesheets wir nach etwas suchen, das wir ändern möchten.

### Vermeiden Sie übermäßig spezifische Selektoren

Wenn Sie sehr spezifische Selektoren erstellen, werden Sie oft feststellen, dass Sie große Teile Ihres CSS duplizieren müssen, um die gleichen Regeln auf ein anderes Element anzuwenden. Zum Beispiel könnten Sie so etwas wie den folgenden Selektor haben, der die Regel auf ein `<p>` mit der Klasse `box` innerhalb eines `<article>` mit der Klasse `main` anwendet.

```css
article.main p.box {
  border: 1px solid #ccc;
}
```

Wenn Sie die gleichen Regeln auf etwas außerhalb von `main`, oder auf etwas anderes als ein `<p>` anwenden möchten, müssten Sie entweder einen anderen Selektor zu diesen Regeln hinzufügen oder ein ganz neues Regelset erstellen. Stattdessen könnten Sie den Selektor `.box` verwenden, um Ihre Regel auf jedes Element anzuwenden, das die Klasse `box` hat:

```css
.box {
  border: 1px solid #ccc;
}
```

Es wird Zeiten geben, in denen es sinnvoll ist, etwas spezifischer zu machen; dies wird jedoch in der Regel eine Ausnahme sein und nicht die Regel.

### Große Stylesheets in mehrere kleinere aufteilen

In Fällen, in denen Sie sehr unterschiedliche Stile für verschiedene Teile der Website haben, möchten Sie vielleicht ein Stylesheet haben, das alle globalen Regeln enthält, sowie einige kleinere Stylesheets, die die spezifischen Regeln für diese Abschnitte enthalten. Sie können auf einer Seite auf mehrere Stylesheets verlinken, und die normalen Regeln der Kaskade gelten, wobei Regeln in später verlinkten Stylesheets nach den Regeln in früher verlinkten Stylesheets kommen.

Zum Beispiel könnten wir einen Online-Shop als Teil der Website haben, mit viel CSS, das nur für die Gestaltung der Produktlisten und Formulare benötigt wird. Es wäre sinnvoll, diese Dinge in einem anderen Stylesheet zu haben, das nur auf Shop-Seiten verlinkt ist.

Dies kann es einfacher machen, Ihr CSS organisiert zu halten, und bedeutet auch, dass, wenn mehrere Personen am CSS arbeiten, es weniger Situationen geben wird, in denen zwei Personen gleichzeitig an demselben Stylesheet arbeiten müssen, was zu Konflikten in der Versionskontrolle führen würde.

## Andere Werkzeuge, die helfen können

CSS selbst bietet nicht viel in Bezug auf eingebaute Organisation; daher hängt das Maß an Konsistenz in Ihrem CSS weitgehend von Ihnen ab. Die Web-Community hat verschiedene Werkzeuge und Ansätze entwickelt, die Ihnen helfen können, größere CSS-Projekte zu verwalten. Da Sie wahrscheinlich auf diese Hilfen stoßen werden, wenn Sie mit anderen zusammenarbeiten, und da sie oft allgemein nützlich sind, haben wir einen kurzen Leitfaden zu einigen von ihnen aufgenommen.

### CSS-Methodologien

Anstatt Ihre eigenen Regeln für das Schreiben von CSS entwickeln zu müssen, können Sie von der Übernahme eines der bereits von der Community entworfenen und über viele Projekte hinweg getesteten Ansätze profitieren. Diese Methodologien sind im Wesentlichen CSS-Kodierungsrichtlinien, die einen sehr strukturierten Ansatz für das Schreiben und Organisieren von CSS verfolgen. In der Regel neigen sie dazu, CSS ausführlicher zu schreiben, als Sie es getan hätten, wenn Sie jeden Selektor auf eine benutzerdefinierte Reihe von Regeln für dieses Projekt optimiert hätten.

Sie gewinnen jedoch eine Menge Struktur, indem Sie eine davon übernehmen. Da viele dieser Systeme weit verbreitet sind, ist es wahrscheinlicher, dass andere Entwickler den Ansatz verstehen, den Sie verwenden, und in der Lage sind, ihr eigenes CSS auf die gleiche Weise zu schreiben, anstatt Ihre eigene Methodologie von Grund auf herauszufinden.

#### OOCSS

Die meisten Ansätze, auf die Sie stoßen werden, schulden dem Konzept von Object Oriented CSS (OOCSS) etwas, einem Ansatz, der durch [die Arbeit von Nicole Sullivan](https://github.com/stubbornella/oocss/wiki) populär gemacht wurde. Die Grundidee von OOCSS ist, Ihr CSS in wiederverwendbare Objekte zu trennen, die überall auf Ihrer Website verwendet werden können. Das Standardbeispiel für OOCSS ist das Muster, das als [Das Medienobjekt](/de/docs/Web/CSS/Layout_cookbook/Media_objects) beschrieben wird. Dies ist ein Muster mit einem Element mit fester Größe wie einem Bild oder Video auf einer Seite und flexiblem Inhalt auf der anderen. Es ist ein Muster, das wir überall auf Websites für Kommentare, Listen und so weiter sehen.

Wenn Sie keinen OOCSS-Ansatz verfolgen, könnten Sie kundenspezifisches CSS für die verschiedenen Stellen erstellen, an denen dieses Muster verwendet wird, indem Sie beispielsweise zwei Klassen erstellen, eine namens `comment` mit einer Reihe von Regeln für die Komponenten und eine andere namens `list-item` mit fast den gleichen Regeln wie die `comment`-Klasse, abgesehen von einigen kleinen Unterschieden. Der Unterschied zwischen diesen beiden Komponenten besteht darin, dass das Listenelement eine Untergrenze hat und Bilder in Kommentaren einen Rand haben, während Listenelement-Bilder dies nicht tun.

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

In OOCSS würden Sie ein Muster namens `media` erstellen, das alle gemeinsamen CSS für beide Muster enthält - eine Basisklasse für Dinge, die im Allgemeinen die Form des Medienobjekts haben. Dann würden wir eine zusätzliche Klasse hinzufügen, um diese Unterschiede auf spezifische Weise anzupassen.

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

Das Listenelement würde `media` und `list-item` haben:

```html
<ul>
  <li class="media list-item">
    <img src="" alt="" />
    <div class="content"></div>
  </li>
</ul>
```

Die Arbeit, die Nicole Sullivan bei der Beschreibung und Förderung dieses Ansatzes geleistet hat, bedeutet, dass selbst Menschen, die heute keinen strikt OOCSS-Ansatz verfolgen, CSS im Allgemeinen auf diese Weise wiederverwenden - es ist in unser Verständnis als guter Ansatz zur Herangehensweise im Allgemeinen eingeflossen.

#### BEM

BEM steht für Block Element Modifier. Bei BEM ist ein Block ein eigenständiges Element wie ein Button, Menü oder Logo. Ein Element ist etwas wie ein Listenelement oder ein Titel, das an den Block gebunden ist, in dem es sich befindet. Ein Modifier ist ein Flag auf einem Block oder Element, das das Styling oder Verhalten ändert. Sie werden Code, der BEM verwendet, an der umfangreichen Verwendung von Bindestrichen und Unterstrichen in den CSS-Klassen erkennen. Schauen Sie sich zum Beispiel die Klassen an, die auf dieses HTML von der Seite über [BEM-Namenskonventionen](https://getbem.com/naming/) angewendet werden:

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

BEM wird in größeren Webprojekten weit verbreitet verwendet und viele Menschen schreiben ihr CSS auf diese Weise. Es ist wahrscheinlich, dass Sie auf Beispiele stoßen werden, auch in Tutorials, die die BEM-Syntax verwenden, ohne zu erwähnen, warum das CSS in dieser Weise strukturiert ist.

Lesen Sie mehr über dieses System in [BEM 101](https://css-tricks.com/bem-101/) auf CSS Tricks.

#### Andere gängige Systeme

Es gibt eine große Anzahl dieser Systeme in Verwendung. Weitere beliebte Ansätze sind [Scalable and Modular Architecture for CSS (SMACSS)](https://smacss.com/), erstellt von Jonathan Snook, [ITCSS](https://itcss.io/) von Harry Roberts und [Atomic CSS (ACSS)](https://acss.io/), ursprünglich von Yahoo! entwickelt. Wenn Sie auf ein Projekt stoßen, das einen dieser Ansätze verwendet, ist der Vorteil, dass Sie viele Artikel und Anleitungen finden können, die Ihnen helfen, im gleichen Stil zu kodieren.

Der Nachteil der Verwendung eines solchen Systems besteht darin, dass sie für kleinere Projekte übermäßig komplex erscheinen können.

### Build-Systeme für CSS

Eine andere Möglichkeit, CSS zu organisieren, besteht darin, einige der Werkzeuge zu nutzen, die für Frontend-Entwickler verfügbar sind, und die es Ihnen ermöglichen, einen etwas programmatischeren Ansatz für das Schreiben von CSS zu wählen. Es gibt eine Reihe von Werkzeugen, die wir als _Pre-Processor_ und _Post-Processor_ bezeichnen. Ein Pre-Processor läuft über Ihre Rohdateien und wandelt sie in ein Stylesheet um, während ein Post-Processor Ihr fertiges Stylesheet nimmt und etwas damit macht - vielleicht um es zu optimieren, damit es schneller lädt.

Die Verwendung eines dieser Werkzeuge erfordert, dass Ihre Entwicklungsumgebung in der Lage ist, die Skripte auszuführen, die das Pre- und Post-Processing durchführen. Viele Code-Editoren können dies für Sie übernehmen, oder Sie können Kommandozeilen-Tools installieren, die helfen.

Der beliebteste Pre-Processor ist [Sass](https://sass-lang.com/). Dies ist kein Sass-Tutorial, daher erkläre ich kurz ein paar Dinge, die Sass tun kann, die in Bezug auf Organisation wirklich hilfreich sind, auch wenn Sie keine anderen Funktionen von Sass verwenden. Wenn Sie mehr über Sass lernen möchten, beginnen Sie mit dem Artikel [Sass-Grundlagen](https://sass-lang.com/guide/), dann gehen Sie weiter zu deren anderen Dokumentationen.

#### Variablen definieren

CSS verfügt jetzt über native [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Using_CSS_custom_properties), was diese Funktion zunehmend weniger wichtig macht. Ein Grund, warum Sie Sass verwenden könnten, besteht jedoch darin, alle Farben und Schriften, die in einem Projekt verwendet werden, als Einstellungen zu definieren und diese Variable dann im gesamten Projekt zu verwenden. Das bedeutet, dass wenn Sie feststellen, dass Sie den falschen Blauton verwendet haben, Sie ihn nur an einer Stelle ändern müssen.

Wenn wir eine Variable namens `$base-color` erstellen würden, wie in der ersten Zeile unten, könnten wir sie dann im gesamten Stylesheet verwenden, wo immer diese Farbe benötigt wird.

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

#### Kompilation von Komponenten-Stylesheets

Ich erwähnte oben, dass eine Möglichkeit, CSS zu organisieren, darin besteht, Stylesheets in kleinere aufzuteilen. Bei der Verwendung von Sass können Sie dies auf eine andere Ebene bringen und viele sehr kleine Stylesheets haben - sogar soweit gehen, dass jedes eine separate Stylesheet für jede Komponente hat. Durch die Verwendung der inkludierten Funktionalität in Sass (Partials), können diese alle zusammen in ein oder eine kleine Anzahl von Stylesheets kompiliert werden, die tatsächlich in Ihre Website eingebunden werden.

So könnten Sie beispielsweise mit [Partials](https://sass-lang.com/documentation/at-rules/use/#partials) mehrere Stildateien in einem Verzeichnis haben, z.B. `foundation/_code.scss`, `foundation/_lists.scss`, `foundation/_footer.scss`, `foundation/_links.scss`, usw. Sie könnten dann die Sass `@use` Regel verwenden, um sie in andere Stylesheets zu laden:

```scss
// foundation/_index.scss
@use "code";
@use "lists";
@use "footer";
@use "links";
```

Wenn die Partials alle in eine Indexdatei geladen werden, wie oben angedeutet, können Sie dann das gesamte Verzeichnis in einem Zug in ein anderes Stylesheet laden:

```scss
// style.scss
@use "foundation";
```

> [!NOTE]
> Eine einfache Möglichkeit, Sass auszuprobieren, ist die Verwendung von [CodePen](https://codepen.io/) - Sie können Sass für Ihr CSS in den Einstellungen für ein Pen aktivieren und CodePen wird dann den Sass-Parser für Sie ausführen, damit Sie die resultierende Webseite mit regulärem CSS sehen können. Manchmal werden Sie feststellen, dass CSS-Tutorials Sass anstelle von reinem CSS in ihren CodePen-Demos verwendet haben, daher ist es hilfreich, ein wenig darüber zu wissen.

#### Post-Processing zur Optimierung

Wenn Sie besorgt sind, die Größe Ihrer Stylesheets zu erhöhen, z.B. durch das Hinzufügen von vielen zusätzlichen Kommentaren und Leerzeichen, könnte ein Post-Processing-Schritt darin bestehen, das CSS zu optimieren, indem alles Unnötige in der Produktionsversion entfernt wird. Ein Beispiel für eine Post-Processor-Lösung zum Erreichen dieses Ziels wäre [cssnano](https://cssnano.github.io/cssnano/).

## Zusammenfassung

Dies ist der letzte Teil unseres Baustein-Moduls, und wie Sie sehen können, gibt es viele Möglichkeiten, wie Ihre Erkundung von CSS von diesem Punkt an weitergehen kann — aber jetzt können Sie mit unseren Bewertungen beginnen: Die erste ist unten verlinkt.

Um mehr über Layout in CSS zu lernen, sehen Sie sich das [CSS-Layout](/de/docs/Learn/CSS/CSS_layout)-Modul an.

Sie sollten auch jetzt die Fähigkeiten haben, den Rest des [MDN CSS](/de/docs/Web/CSS)-Materials zu erkunden. Sie können Eigenschaften und Werte nachschlagen, unser [CSS Cookbook](/de/docs/Web/CSS/Layout_cookbook) für Muster zur Verwendung durchsuchen oder in einigen der spezifischen Anleitungen weiterlesen, wie z.B. unserem [Leitfaden zum CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout).

{{PreviousMenuNext("Learn/CSS/Building_blocks/Debugging_CSS", "Learn/CSS/Building_blocks/Fundamental_CSS_comprehension", "Learn/CSS/Building_blocks")}}
