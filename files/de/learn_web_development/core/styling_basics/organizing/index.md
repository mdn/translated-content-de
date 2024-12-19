---
title: Organisieren Ihres CSS
slug: Learn_web_development/Core/Styling_basics/Organizing
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

Wenn Sie beginnen, an größeren Stylesheets und großen Projekten zu arbeiten, werden Sie feststellen, dass es herausfordernd sein kann, eine riesige CSS-Datei zu verwalten. In diesem Artikel werfen wir einen kurzen Blick auf einige bewährte Verfahren, um Ihr CSS leicht wartbar zu schreiben, und auf einige der Lösungen, die von anderen verwendet werden, um die Wartbarkeit zu verbessern.

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
        >, HTML-Grundlagen (siehe
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Einführung in HTML</a
        >) und eine Vorstellung davon, wie CSS funktioniert (siehe
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS Styles Grundlagen</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen Sie einige Tipps und bewährte Verfahren zur Organisation von Stylesheets kennen und informieren Sie sich über einige der gebräuchlichen Benennungskonventionen und Tools, die bei der CSS-Organisation und der Teamarbeit helfen.
      </td>
    </tr>
  </tbody>
</table>

## Tipps, um Ihr CSS ordentlich zu halten

Hier sind einige allgemeine Vorschläge, wie Sie Ihre Stylesheets organisiert und ordentlich halten können.

### Hat Ihr Projekt einen Coding-Style-Guide?

Wenn Sie mit einem Team an einem bestehenden Projekt arbeiten, ist das Erste, was Sie prüfen sollten, ob das Projekt bereits einen Style-Guide für CSS hat. Der Team-Style-Guide sollte immer Ihre persönlichen Vorlieben übertrumpfen. Oft gibt es kein richtig oder falsch, aber Konsistenz ist wichtig.

Werfen Sie beispielsweise einen Blick auf die [CSS-Richtlinien für MDN-Codebeispiele](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/CSS).

### Halten Sie es konsistent

Wenn Sie die Regeln für das Projekt festlegen dürfen oder alleine arbeiten, dann ist es am wichtigsten, die Dinge konsistent zu halten. Konsistenz kann auf vielfältige Weise angewendet werden, zum Beispiel durch Verwendung derselben Benennungskonventionen für Klassen, Auswahl einer Methode zur Beschreibung von Farben oder Beibehaltung einheitlicher Formatierungen. (Zum Beispiel: Verwenden Sie Tabs oder Leerzeichen, um Ihren Code einzurücken? Wenn Leerzeichen, wie viele Leerzeichen?)

Das Befolgen eines festen Regelwerks reduziert den mentalen Aufwand beim Schreiben von CSS, da einige Entscheidungen bereits getroffen sind.

### Lesbare CSS-Formatierung

Es gibt ein paar Möglichkeiten, wie CSS formatiert wird. Einige Entwickler platzieren alle Regeln in eine einzelne Zeile, wie folgt:

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

CSS ist es egal, welche Methode Sie verwenden. Wir persönlich finden es lesbarer, das Paar aus Eigenschaft und Wert jeweils in einer neuen Zeile zu haben.

### Kommentieren Sie Ihr CSS

Kommentare zu Ihrem CSS hinzuzufügen, hilft jedem zukünftigen Entwickler, mit Ihrer CSS-Datei zu arbeiten, und es hilft Ihnen auch, wenn Sie nach einer Pause zum Projekt zurückkehren.

```css
/* This is a CSS comment
It can be broken onto multiple lines. */
```

Ein guter Tipp ist es, auch zwischen logischen Abschnitten in Ihrem Stylesheet einen Block von Kommentaren hinzuzufügen, um die verschiedenen Abschnitte beim Scannen schnell zu lokalisieren oder um Ihnen etwas zu geben, wonach Sie suchen können, um direkt zu diesem Teil des CSS zu springen. Wenn Sie eine Zeichenfolge verwenden, die im Code nicht erscheint, können Sie von Abschnitt zu Abschnitt springen, indem Sie danach suchen — unten haben wir `||` verwendet.

```css
/* || General styles */

/* … */

/* || Typography */

/* … */

/* || Header and Main Navigation */

/* … */
```

Sie müssen nicht jede einzelne Sache in Ihrem CSS kommentieren, da vieles selbsterklärend sein wird. Sie sollten jedoch die Dinge kommentieren, bei denen Sie aus einem bestimmten Grund eine Entscheidung getroffen haben.

Vielleicht haben Sie eine CSS-Eigenschaft auf eine bestimmte Weise verwendet, um ältere Browser-Inkompatibilitäten zu umgehen, zum Beispiel:

```css
.box {
  background-color: red; /* fallback for older browsers that don't support gradients */
  background-image: linear-gradient(to right, #ff0000, #aa0000);
}
```

Vielleicht haben Sie ein Tutorial befolgt, um etwas zu erreichen, und das CSS ist nicht sehr selbsterklärend oder erkennbar. In diesem Fall könnten Sie die URL des Tutorials in die Kommentare aufnehmen. Sie werden sich selbst dankbar sein, wenn Sie nach etwa einem Jahr zu diesem Projekt zurückkehren und sich vage daran erinnern, dass es ein großartiges Tutorial zu diesem Thema gab, sich jedoch nicht erinnern können, woher es stammt.

### Erstellen Sie logische Abschnitte in Ihrem Stylesheet

Es ist eine gute Idee, alle gemeinsamen Stile zuerst im Stylesheet zu haben. Dies bedeutet alle Stile, die im Allgemeinen gelten, es sei denn, Sie machen etwas Besonderes mit diesem Element. Typischerweise haben Sie Regeln eingerichtet für:

- `body`
- `p`
- `h1`, `h2`, `h3`, `h4`, `h5`
- `ul` und `ol`
- Die `table`-Eigenschaften
- Links

In diesem Abschnitt des Stylesheets bieten wir Standardstilierung für den Text auf der Seite, richten einen Standardstil für Datentabellen und Listen ein usw.

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

Nach diesem Abschnitt könnten wir einige Utility-Klassen definieren, zum Beispiel eine Klasse, die den Standardlistenstil für Listen entfernt, die wir als Flex-Elemente anzeigen werden oder auf andere Weise. Wenn Sie einige Styling-Optionen haben, die Sie auf viele verschiedene Elemente anwenden wissen, können diese in diesem Abschnitt untergebracht werden.

```css
/* || UTILITIES */

.no-bullets {
  list-style: none;
  margin: 0;
  padding: 0;
}

/* … */
```

Dann können wir alles hinzufügen, was auf der ganzen Website verwendet wird. Das könnten Dinge wie das grundlegende Seitenlayout, die Kopfzeilen-, Navigations-Stilierung usw. sein.

```css
/* SITEWIDE */

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

Durch die Anordnung der Dinge auf diese Weise haben wir zumindest eine Idee, in welchem Teil des Stylesheets wir nach etwas suchen, das wir ändern möchten.

### Vermeiden Sie zu spezifische Selektoren

Wenn Sie sehr spezifische Selektoren erstellen, werden Sie oft feststellen, dass Sie Teile Ihres CSS duplizieren müssen, um dieselben Regeln auf ein anderes Element anzuwenden. Zum Beispiel könnten Sie etwas wie den folgenden Selektor haben, der die Regel auf ein `<p>` mit einer Klasse `box` innerhalb eines `<article>` mit einer Klasse `main` anwendet.

```css
article.main p.box {
  border: 1px solid #ccc;
}
```

Wenn Sie dieselben Regeln dann auf etwas außerhalb von `main` oder auf etwas anderes als ein `<p>` anwenden möchten, müssten Sie einen weiteren Selektor zu diesen Regeln hinzufügen oder ein neues Regelset erstellen. Stattdessen könnten Sie den Selektor `.box` verwenden, um Ihre Regel auf jedes Element mit der Klasse `box` anzuwenden:

```css
.box {
  border: 1px solid #ccc;
}
```

Es wird Zeiten geben, in denen es sinnvoll ist, etwas spezfisischer zu machen; dies wird jedoch im Allgemeinen die Ausnahme statt der Regel sein.

### Große Stylesheets in mehrere kleinere aufteilen

In Fällen, wo Sie sehr unterschiedliche Stile für verschiedene Teile der Website haben, könnten Sie ein Stylesheet haben, das alle globalen Regeln enthält, sowie einige kleinere Stylesheets, die die spezifischen Regeln für diese Bereiche enthalten. Sie können von einer Seite aus auf mehrere Stylesheets verweisen, und die normalen Regeln der Kaskade gelten, wobei Regeln in später verlinkten Stylesheets nach Regeln in früher verlinkten Stylesheets kommen.

Beispielsweise könnten wir einen Online-Shop als Teil der Website haben, mit viel CSS, das nur für die Gestaltung der Produktlisten und Formulare im Shop verwendet wird. Es wäre sinnvoll, diese Dinge in einem anderen Stylesheet zu haben, das nur auf Shop-Seiten verlinkt ist.

Das kann dazu beitragen, Ihr CSS besser organisiert zu halten, und auch bedeuten, dass, wenn mehrere Personen am CSS arbeiten, weniger Situationen auftreten, in denen zwei Personen gleichzeitig am selben Stylesheet arbeiten müssen, was zu Konflikten in der Quellkontrolle führen könnte.

## Andere Werkzeuge, die helfen können

CSS selbst hat nicht viel in Bezug auf eingebaute Organisation; daher hängt das Maß an Konsistenz in Ihrem CSS weitgehend von Ihnen ab. Die Web-Community hat verschiedene Werkzeuge und Ansätze entwickelt, die Ihnen helfen können, größere CSS-Projekte zu verwalten. Da Sie diese Hilfsmittel wahrscheinlich bei der Zusammenarbeit mit anderen Personen kennenlernen werden und sie oft allgemein nützlich sind, haben wir hier einen kurzen Leitfaden zu einigen von ihnen aufgenommen.

### CSS-Methodologien

Anstatt Ihre eigenen Regeln für das Schreiben von CSS zu entwickeln, könnte es vorteilhaft sein, einen der Ansätze zu übernehmen, die bereits von der Community entwickelt und in vielen Projekten getestet wurden. Diese Methodologien sind im Wesentlichen Leitfäden für das Codieren von CSS, die einen sehr strukturierten Ansatz für das Schreiben und Organisieren von CSS darlegen. Sie neigen dazu, CSS ausführlicher zu schreiben, als Sie es möglicherweise getan hätten, wenn Sie jeden Selektor nach einem maßgeschneiderten Regelwerk für dieses Projekt geschrieben und optimiert hätten.

Sie gewinnen jedoch viel Struktur, indem Sie einen solchen Ansatz übernehmen. Da viele dieser Systeme weit verbreitet sind, verstehen andere Entwickler eher den Ansatz, den Sie verwenden, und können ihr eigenes CSS auf die gleiche Weise schreiben, anstatt erst Ihre persönliche Methodologie von Grund auf erarbeiten zu müssen.

#### OOCSS

Die meisten der Ansätze, die Sie kennenlernen werden, leiten sich aus dem Konzept von Object Oriented CSS (OOCSS) ab, einem Ansatz, der durch [die Arbeit von Nicole Sullivan](https://github.com/stubbornella/oocss/wiki) populär gemacht wurde. Die Grundidee von OOCSS besteht darin, Ihr CSS in wiederverwendbare Objekte zu unterteilen, die Sie überall auf Ihrer Site benötigen können. Das Standardbeispiel für OOCSS ist das Muster, das als [Media Object](/de/docs/Web/CSS/Layout_cookbook/Media_objects) beschrieben wird. Es handelt sich um ein Muster mit einem Element fester Größe, wie Bild oder Video, auf einer Seite und flexiblem Inhalt auf der anderen. Wir sehen dieses Muster häufig auf Websites für Kommentare, Listen usw.

Wenn Sie keinen OOCSS-Ansatz verwenden, könnten Sie ein benutzerdefiniertes CSS für die verschiedenen Stellen erstellen, an denen dieses Muster verwendet wird, zum Beispiel durch das Anlegen von zwei Klassen, eine namens `comment` mit vielen Regeln für die Komponentenbestandteile und eine andere namens `list-item` mit fast denselben Regeln wie die `comment`-Klasse, außer einigen kleinen Unterschieden. Der Unterschied zwischen diesen beiden Komponenten ist, dass das list-item einen unteren Rahmen hat und Bilder in Kommentaren einen Rahmen haben, während Bilder im list-item keinen haben.

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

In OOCSS würden Sie ein Muster namens `media` erstellen, das alle gemeinsamen CSS für beide Muster enthält — eine Basisklasse für Dinge, die im Allgemeinen die Form des Media-Objekts haben. Dann würden wir zusätzliche Klassen hinzufügen, um diese Stilierung auf spezifische Weise zu erweitern.

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

In Ihrem HTML müsste das Kommentar sowohl die `media`- als auch die `comment`-Klasse angewendet haben:

```html
<div class="media comment">
  <img src="" alt="" />
  <div class="content"></div>
</div>
```

Das list-item würde `media` und `list-item` angewendet haben:

```html
<ul>
  <li class="media list-item">
    <img src="" alt="" />
    <div class="content"></div>
  </li>
</ul>
```

Die Arbeit, die Nicole Sullivan bei der Beschreibung dieses Ansatzes und seiner Förderung geleistet hat, führt dazu, dass selbst Menschen, die einem OOCSS-Ansatz heute nicht genau folgen, CSS auf diese Weise in der Regel wiederverwenden — es hat unseren Ansatz als allgemein gute Methode beeinflusst.

#### BEM

BEM steht für Block Element Modifier. In BEM ist ein Block eine eigenständige Einheit wie ein Button, Menü oder Logo. Ein Element ist etwas wie ein Listenelement oder ein Titel, das an den Block gebunden ist, in dem es sich befindet. Ein Modifier ist ein Markierzeichen an einem Block oder Element, das die Darstellung oder das Verhalten verändert. Sie werden Code erkennen, der BEM verwendet, an der umfangreichen Nutzung von Bindestrichen und Unterstrichen in den CSS-Klassen. Schauen Sie sich beispielsweise die Klassen an, die auf dieses HTML aus der Seite über [BEM-Benennungskonventionen](https://getbem.com/naming/) angewendet werden:

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

Die zusätzlichen Klassen sind ähnlich den im OOCSS-Beispiel verwendeten; sie verwenden jedoch die strengen Benennungskonventionen von BEM.

BEM wird häufig in größeren Webprojekten verwendet, und viele Leute schreiben ihr CSS auf diese Weise. Wahrscheinlich werden Sie auf Beispiele, sogar in Tutorials, stoßen, die den BEM-Syntax verwenden, ohne darauf hinzuweisen, warum das CSS auf diese Weise strukturiert ist.

Lesen Sie mehr über dieses System in [BEM 101](https://css-tricks.com/bem-101/) auf CSS Tricks.

#### Andere gängige Systeme

Es gibt eine große Anzahl dieser Systeme in der Verwendung. Andere populäre Ansätze sind [Skalierbare und modulare CSS-Architektur (SMACSS)](https://smacss.com/), erstellt von Jonathan Snook, [ITCSS](https://itcss.io/) von Harry Roberts und [Atomizer CSS (ACSS)](https://acss-io.github.io/atomizer/), ursprünglich erstellt von Yahoo!. Wenn Sie auf ein Projekt stoßen, das einen dieser Ansätze verwendet, dann ist der Vorteil, dass Sie viele Artikel und Leitfäden finden werden, um Ihnen zu helfen, im gleichen Stil zu codieren.

Der Nachteil bei der Verwendung eines solchen Systems ist, dass sie für kleinere Projekte übermäßig komplex erscheinen können.

### Build-Systeme für CSS

Eine andere Möglichkeit, CSS zu organisieren, ist die Nutzung einiger der Werkzeuge, die für Frontend-Entwickler verfügbar sind und die es ermöglichen, einen etwas programmatischeren Ansatz beim Schreiben von CSS zu verfolgen. Es gibt eine Reihe von Werkzeugen, die wir als _Pre-Processor_ und _Post-Processor_ bezeichnen. Ein Pre-Processor läuft über Ihre Rohdateien und erstellt ein Stylesheet, während ein Post-Processor Ihr fertiges Stylesheet nimmt und etwas damit macht — vielleicht, um es zu optimieren, damit es schneller geladen wird.

Die Verwendung eines dieser Werkzeuge erfordert, dass Ihre Entwicklungsumgebung in der Lage ist, die Skripte auszuführen, die das Pre- und Post-Processing durchführen. Viele Code-Editoren können dies für Sie erledigen, oder Sie können CLI-Tools installieren, um zu helfen.

Der beliebteste Pre-Processor ist [Sass](https://sass-lang.com/). Dies ist kein Sass-Tutorial, also werde ich kurz einige der Dinge erklären, die Sass für Sie tun kann, die hinsichtlich der Organisation sehr hilfreich sind, selbst wenn Sie keine der anderen Sass-Funktionen verwenden. Wenn Sie mehr über Sass lernen möchten, beginnen Sie mit dem Artikel [Sass-Grundlagen](https://sass-lang.com/guide/), und gehen Sie dann zu ihrer weiteren Dokumentation über.

#### Variablen definieren

CSS hat jetzt native [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Using_CSS_custom_properties), was diese Funktion zunehmend unwichtiger macht. Einer der Gründe, warum Sie dennoch Sass verwenden könnten, ist, alle Farben und Schriften, die in einem Projekt verwendet werden, als Variablen zu definieren und diese Variable dann im gesamten Projekt zu verwenden. So müssen Sie, wenn Sie merken, dass Sie den falschen Blauton verwendet haben, diesen nur an einer Stelle ändern.

Wenn wir eine Variable namens `$base-color` erstellen würden, wie in der ersten Zeile unten, könnten wir sie überall im Stylesheet dort verwenden, wo diese Farbe benötigt wird.

```scss
$base-color: #c6538c;

.alert {
  border: 1px solid $base-color;
}
```

Einmal zu CSS kompiliert, würden Sie folgendes CSS im endgültigen Stylesheet finden.

```css
.alert {
  border: 1px solid #c6538c;
}
```

#### Kompilation von Komponenten-Stylesheets

Ich erwähnte oben, dass eine Möglichkeit, CSS zu organisieren, darin besteht, Stylesheets in kleinere zu unterteilen. Mit Sass können Sie dies auf eine andere Ebene bringen und eine Menge sehr kleiner Stylesheets haben — sogar so weit gehen, dass Sie ein separates Stylesheet für jede Komponente haben. Durch die Verwendung der in Sass enthaltenen Funktionalität (Partials) können diese alle zu einem oder einer kleinen Anzahl von Stylesheets kompiliert werden, um tatsächlich mit Ihrer Website verlinkt zu werden.

Wenn Sie zum Beispiel mit [Partials](https://sass-lang.com/documentation/at-rules/use/#partials) arbeiten, könnten Sie mehrere Style-Dateien in einem Verzeichnis haben, zum Beispiel `foundation/_code.scss`, `foundation/_lists.scss`, `foundation/_footer.scss`, `foundation/_links.scss` usw. Sie könnten dann die Sass-Regel `@use` verwenden, um sie in andere Stylesheets zu laden:

```scss
// foundation/_index.scss
@use "code";
@use "lists";
@use "footer";
@use "links";
```

Wenn die Partials alle in einer Indexdatei geladen werden, wie oben angedeutet, können Sie dann dieses gesamte Verzeichnis in ein anderes Stylesheet in einem Schritt laden:

```scss
// style.scss
@use "foundation";
```

> [!NOTE]
> Eine einfache Möglichkeit, Sass auszuprobieren, ist die Verwendung von [CodePen](https://codepen.io/) — Sie können Sass für Ihre CSS in den Einstellungen eines Pens aktivieren, und CodePen wird dann den Sass-Parser für Sie ausführen, damit Sie die resultierende Webseite mit regulärem CSS sehen können. Manchmal werden Sie feststellen, dass CSS-Tutorials Sass statt reinem CSS in ihren CodePen-Demos verwendet haben, also ist es nützlich, ein wenig darüber Bescheid zu wissen.

#### Nachbearbeitung zur Optimierung

Wenn Sie besorgt sind, Ihrer Stylesheets Größe hinzuzufügen, zum Beispiel durch viele zusätzliche Kommentare und Leerzeichen, dann könnte ein Schritt der Nachbearbeitung darin bestehen, das CSS zu optimieren, indem alles Unnötige in der Produktionsversion entfernt wird. Ein Beispiel für eine Post-Processor-Lösung, um dies zu tun, wäre [cssnano](https://cssnano.github.io/cssnano/).
