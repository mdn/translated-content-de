---
title: CSS organisieren
slug: Learn_web_development/Core/Styling_basics/Organizing
l10n:
  sourceCommit: b25798255cfb773885c94557b74179400ac7153d
---

Wenn Sie mit größeren Stylesheets und umfangreichen Projekten arbeiten, werden Sie feststellen, dass die Pflege einer großen CSS-Datei eine Herausforderung sein kann. In diesem Artikel sehen wir uns einige bewährte Vorgehensweisen an, mit denen Sie Ihr CSS leichter wartbar machen können. Außerdem stellen wir Ansätze vor, die andere nutzen, um die Wartbarkeit zu verbessern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >Grundlegende Software ist installiert</a
        >, Grundkenntnisse im
        <a
          href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files"
          >Umgang mit Dateien</a
        >, HTML-Grundlagen (siehe
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Einführung in HTML</a
        >) und eine Vorstellung davon, wie CSS funktioniert (siehe
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen der Gestaltung mit CSS</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Tipps und bewährte Vorgehensweisen zum Organisieren von Stylesheets
        kennenlernen sowie mehr über gängige Namenskonventionen und Werkzeuge
        erfahren, die bei der Organisation von CSS und der Zusammenarbeit im
        Team helfen.
      </td>
    </tr>
  </tbody>
</table>

## Tipps für übersichtliches CSS

Hier finden Sie einige allgemeine Vorschläge, wie Sie Ihre Stylesheets geordnet und übersichtlich halten können.

### Gibt es für Ihr Projekt einen Code-Styleguide?

Wenn Sie in einem Team an einem bestehenden Projekt arbeiten, sollten Sie zuerst prüfen, ob es bereits einen Styleguide für CSS gibt. Der Styleguide des Teams sollte immer Vorrang vor Ihren persönlichen Vorlieben haben. Oft gibt es keine eindeutig richtige oder falsche Vorgehensweise, aber Einheitlichkeit ist wichtig.

Sehen Sie sich beispielsweise die [CSS-Richtlinien für MDN-Codebeispiele](/de/docs/MDN/Writing_guidelines/Code_style_guide/CSS) an.

### Bleiben Sie einheitlich

Wenn Sie die Regeln für das Projekt selbst festlegen können oder allein arbeiten, ist Einheitlichkeit das Wichtigste. Das gilt für viele Bereiche: Verwenden Sie beispielsweise dieselben Namenskonventionen für Klassen, legen Sie sich auf eine Schreibweise für Farben fest und formatieren Sie Ihren Code einheitlich. (Verwenden Sie zum Beispiel Tabulatoren oder Leerzeichen zum Einrücken? Falls Leerzeichen: wie viele?)

Ein fester Satz von Regeln, an den Sie sich immer halten, verringert den gedanklichen Aufwand beim Schreiben von CSS, weil manche Entscheidungen bereits getroffen sind.

### CSS lesbar formatieren

CSS kann auf unterschiedliche Weise formatiert werden. Manche Entwickler schreiben alle Deklarationen in eine einzige Zeile:

```css-nolint
.box {background-color: #567895; }
h2 {background-color: black; color: white; }
```

Andere Entwickler bevorzugen für jede Deklaration eine neue Zeile:

```css
.box {
  background-color: #567895;
}

h2 {
  background-color: black;
  color: white;
}
```

Für CSS spielt es keine Rolle, welche Variante Sie verwenden. Wir persönlich finden es lesbarer, wenn jedes Paar aus Property und Wert in einer eigenen Zeile steht.

### Kommentieren Sie Ihr CSS

Kommentare in Ihrem CSS helfen anderen Entwicklern, später mit Ihrer CSS-Datei zu arbeiten. Sie helfen aber auch Ihnen selbst, wenn Sie nach einer Pause zu dem Projekt zurückkehren.

```css
/* This is a CSS comment
It can be broken onto multiple lines. */
```

Ein guter Tipp ist außerdem, zwischen logisch zusammengehörigen Abschnitten Ihres Stylesheets Kommentarblöcke einzufügen. So lassen sich die einzelnen Abschnitte beim Überfliegen schnell finden. Sie können auch nach einer bestimmten Zeichenfolge suchen, um direkt zur entsprechenden Stelle im CSS zu springen. Wenn Sie eine Zeichenfolge verwenden, die sonst nicht im Code vorkommt, können Sie auf diese Weise von Abschnitt zu Abschnitt springen – im folgenden Beispiel verwenden wir `||`.

```css
/* || General styles */

/* … */

/* || Typography */

/* … */

/* || Header and Main Navigation */

/* … */
```

Sie müssen nicht jede Einzelheit Ihres CSS kommentieren, denn vieles erklärt sich von selbst. Kommentieren sollten Sie vor allem Stellen, an denen Sie sich aus einem bestimmten Grund für eine Vorgehensweise entschieden haben.

Vielleicht haben Sie beispielsweise eine CSS-Property auf eine bestimmte Weise verwendet, um Inkompatibilitäten mit älteren Browsern zu umgehen:

```css
.box {
  background-color: red; /* fallback for older browsers that don't support gradients */
  background-image: linear-gradient(to right, red, #aa0000);
}
```

Vielleicht sind Sie auch einem Tutorial gefolgt, um etwas umzusetzen, und das CSS ist nicht ohne Weiteres verständlich oder wiederzuerkennen. In diesem Fall könnten Sie die URL des Tutorials in einem Kommentar festhalten. Sie werden froh darüber sein, wenn Sie in etwa einem Jahr zu dem Projekt zurückkehren und sich nur noch vage an ein gutes Tutorial zu diesem Thema erinnern, aber nicht mehr wissen, wo Sie es gefunden haben.

### Gliedern Sie Ihr Stylesheet in logische Abschnitte

Es ist sinnvoll, die allgemeinen Formatierungen an den Anfang des Stylesheets zu stellen. Dazu gehören alle Styles, die normalerweise gelten, sofern Sie für ein Element keine Sonderregel festlegen. Üblicherweise definieren Sie Regeln für:

- `body`
- `p`
- `h1`, `h2`, `h3`, `h4`, `h5`
- `ul` und `ol`
- die Properties von `table`
- Links

In diesem Abschnitt des Stylesheets legen wir die Standardformatierung für die Schrift auf der Website sowie Standardstyles für Datentabellen, Listen und Ähnliches fest.

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

Danach könnten wir einige Utility-Klassen definieren, beispielsweise eine Klasse, die den Standard-Listenstil für Listen entfernt, die wir als Flex-Elemente oder auf andere Weise darstellen möchten. Wenn Sie bestimmte Formatierungen auf viele verschiedene Elemente anwenden möchten, können Sie sie in diesem Abschnitt unterbringen.

```css
/* || UTILITIES */

.no-bullets {
  list-style: none;
  margin: 0;
  padding: 0;
}

/* … */
```

Anschließend können wir alles hinzufügen, was auf der gesamten Website verwendet wird. Dazu könnten das grundlegende Seitenlayout, der Header, die Formatierung der Navigation und Ähnliches gehören.

```css
/* SITEWIDE */

.main-nav {
  /* … */
}

.logo {
  /* … */
}
```

Zum Schluss fügen wir das CSS für spezifische Bereiche hinzu, gegliedert nach Kontext, Seite oder sogar Komponente, in der es verwendet wird.

```css
/* || STORE PAGES */

.product-listing {
  /* … */
}

.product-box {
  /* … */
}
```

Wenn wir die Regeln so anordnen, wissen wir zumindest ungefähr, in welchem Teil des Stylesheets wir nach einer Stelle suchen müssen, die wir ändern möchten.

### Vermeiden Sie übermäßig spezifische Selektoren

Wenn Sie sehr spezifische Selektoren erstellen, müssen Sie häufig Teile Ihres CSS duplizieren, um dieselben Regeln auf ein anderes Element anzuwenden. Beispielsweise könnten Sie einen Selektor wie den folgenden verwenden, der die Regel auf ein `<p>` mit der Klasse `box` innerhalb eines `<article>` mit der Klasse `main` anwendet.

```css
article.main p.box {
  border: 1px solid #cccccc;
}
```

Wenn Sie dieselben Regeln anschließend auf etwas außerhalb von `main` oder auf ein anderes Element als ein `<p>` anwenden möchten, müssten Sie diesen Regeln einen weiteren Selektor hinzufügen oder einen völlig neuen Regelsatz erstellen. Stattdessen könnten Sie mit dem Selektor `.box` Ihre Regel auf jedes Element mit der Klasse `box` anwenden:

```css
.box {
  border: 1px solid #cccccc;
}
```

Manchmal ist ein spezifischerer Selektor sinnvoll. Im Allgemeinen sollte das jedoch die Ausnahme und nicht die Regel sein.

### Teilen Sie große Stylesheets in mehrere kleinere auf

Wenn unterschiedliche Bereiche Ihrer Website sehr verschiedene Styles benötigen, können Sie ein Stylesheet für alle globalen Regeln und mehrere kleinere Stylesheets für die spezifischen Regeln dieser Bereiche verwenden. Eine Seite kann mehrere Stylesheets einbinden. Dabei gelten die normalen Regeln der Kaskade: Regeln in später eingebundenen Stylesheets folgen auf Regeln in früher eingebundenen Stylesheets.

Angenommen, zu Ihrer Website gehört ein Onlineshop. Für die Produktlisten und Formulare des Shops benötigen Sie möglicherweise viel CSS, das sonst nirgends verwendet wird. Es wäre sinnvoll, dieses CSS in einem eigenen Stylesheet unterzubringen, das nur auf den Shopseiten eingebunden wird.

So lässt sich Ihr CSS leichter organisieren. Wenn mehrere Personen daran arbeiten, müssen außerdem seltener zwei Personen gleichzeitig dasselbe Stylesheet bearbeiten, was Konflikte in der Versionsverwaltung reduziert.

## Weitere hilfreiche Werkzeuge

CSS selbst bietet kaum eingebaute Möglichkeiten zur Organisation. Wie einheitlich Ihr CSS ist, hängt deshalb größtenteils von Ihnen ab. Die Web-Community hat verschiedene Werkzeuge und Ansätze entwickelt, die beim Verwalten größerer CSS-Projekte helfen können. Da Sie bei der Zusammenarbeit mit anderen wahrscheinlich darauf stoßen werden und sie auch allgemein nützlich sind, stellen wir einige davon kurz vor.

### CSS-Methodiken

Statt eigene Regeln für das Schreiben von CSS zu entwickeln, können Sie einen Ansatz übernehmen, den die Community bereits entworfen und in vielen Projekten erprobt hat. Diese Methodiken sind im Wesentlichen Styleguides für CSS, die einen sehr strukturierten Ansatz für das Schreiben und Organisieren von CSS vorgeben. In der Regel führen sie zu ausführlicherem CSS, als wenn Sie jeden Selektor nach eigens für das Projekt festgelegten Regeln schreiben und optimieren würden.

Dafür gewinnen Sie durch ihre Verwendung viel Struktur. Da viele dieser Systeme weit verbreitet sind, verstehen andere Entwickler Ihren Ansatz wahrscheinlich leichter und können ihr CSS auf dieselbe Weise schreiben, ohne sich erst Ihre persönliche Methodik erschließen zu müssen.

#### OOCSS

Die meisten Ansätze, denen Sie begegnen werden, sind in irgendeiner Weise vom Konzept des Object Oriented CSS (OOCSS) beeinflusst, das durch [die Arbeit von Nicole Sullivan](https://github.com/stubbornella/oocss/wiki) bekannt wurde. Die Grundidee von OOCSS besteht darin, CSS in wiederverwendbare Objekte aufzuteilen, die Sie überall auf Ihrer Website einsetzen können. Das Standardbeispiel für OOCSS ist das als [Media Object](/de/docs/Web/CSS/How_to/Layout_cookbook/Media_objects) bezeichnete Muster. Dabei steht auf einer Seite ein Bild, Video oder anderes Element mit fester Größe und auf der anderen Seite flexibler Inhalt. Dieses Muster findet sich auf vielen Websites, beispielsweise bei Kommentaren und Auflistungen.

Ohne OOCSS könnten Sie für die verschiedenen Stellen, an denen dieses Muster verwendet wird, jeweils eigenes CSS erstellen: etwa eine Klasse namens `comment` mit vielen Regeln für die Bestandteile der Komponente und eine weitere namens `list-item` mit fast denselben Regeln wie `comment`, abgesehen von einigen kleinen Unterschieden. In diesem Beispiel hat das Listenelement einen unteren Rahmen, und Bilder in Kommentaren haben einen Rahmen, während Bilder in Listenelementen keinen haben.

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

Mit OOCSS würden Sie ein gemeinsames Muster namens `media` erstellen, das das CSS für beide Varianten enthält – eine Basisklasse für Elemente, die grundsätzlich dem Aufbau des Media Object entsprechen. Dann würden Sie eine weitere Klasse hinzufügen, um die kleinen Unterschiede abzudecken und die Formatierung gezielt zu erweitern.

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

In Ihrem HTML müsste der Kommentar sowohl die Klasse `media` als auch die Klasse `comment` erhalten:

```html
<div class="media comment">
  <img src="" alt="" />
  <div class="content"></div>
</div>
```

Das Listenelement würde die Klassen `media` und `list-item` erhalten:

```html
<ul>
  <li class="media list-item">
    <img src="" alt="" />
    <div class="content"></div>
  </li>
</ul>
```

Nicole Sullivan hat diesen Ansatz beschrieben und verbreitet. Deshalb verwenden heute auch Entwickler, die OOCSS nicht strikt folgen, CSS häufig auf diese Weise wieder – es gilt inzwischen allgemein als guter Ansatz.

#### BEM

BEM steht für Block Element Modifier. Ein Block ist in BEM eine eigenständige Einheit, etwa ein Button, ein Menü oder ein Logo. Ein Element ist beispielsweise ein Listenelement oder ein Titel, der zu dem jeweiligen Block gehört. Ein Modifier ist eine Kennzeichnung an einem Block oder Element, die dessen Formatierung oder Verhalten verändert. Code, der BEM verwendet, erkennen Sie am häufigen Einsatz von Bindestrichen und Unterstrichen in CSS-Klassen. Sehen Sie sich beispielsweise die Klassen in diesem HTML aus dem Artikel über [BEM-Namenskonventionen](https://css-tricks.com/bem-101/) an:

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

Die zusätzlichen Klassen ähneln denen aus dem OOCSS-Beispiel, folgen jedoch den strengen Namenskonventionen von BEM.

BEM wird in größeren Webprojekten häufig verwendet, und viele Menschen schreiben ihr CSS auf diese Weise. Wahrscheinlich werden Sie auch in Tutorials auf Beispiele mit BEM-Syntax stoßen, ohne dass erklärt wird, warum das CSS so strukturiert ist.

Weitere Informationen zu diesem System finden Sie in [BEM 101](https://css-tricks.com/bem-101/) auf CSS-Tricks.

#### Weitere verbreitete Systeme

Es gibt viele solcher Systeme. Weitere beliebte Ansätze sind [Scalable and Modular Architecture for CSS (SMACSS)](https://smacss.com/) von Jonathan Snook, [ITCSS](https://itcss.io/) von Harry Roberts und [Atomizer CSS (ACSS)](https://acss-io.github.io/atomizer/), ursprünglich von Yahoo! entwickelt. Wenn Sie auf ein Projekt stoßen, das einen dieser Ansätze verwendet, können Sie nach zahlreichen Artikeln und Leitfäden suchen, die Ihnen helfen, Code im gleichen Stil zu schreiben.

Ein Nachteil solcher Systeme ist, dass sie insbesondere für kleinere Projekte übermäßig komplex wirken können.

### Build-Systeme für CSS

Eine weitere Möglichkeit, CSS zu organisieren, besteht darin, Werkzeuge für die Frontend-Entwicklung zu nutzen, mit denen Sie CSS etwas stärker programmatisch schreiben können. Es gibt verschiedene Werkzeuge, die wir als _Präprozessoren_ und _Postprozessoren_ bezeichnen. Ein Präprozessor verarbeitet Ihre Quelldateien und erzeugt daraus ein Stylesheet. Ein Postprozessor verarbeitet dagegen ein bereits fertiges Stylesheet – beispielsweise, um es so zu optimieren, dass es schneller geladen wird.

Für die Verwendung dieser Werkzeuge muss Ihre Entwicklungsumgebung die Skripte für die Vor- und Nachverarbeitung ausführen können. Viele Code-Editoren übernehmen das für Sie. Alternativ können Sie entsprechende Kommandozeilenwerkzeuge installieren.

Der beliebteste Präprozessor ist [Sass](https://sass-lang.com/). Dies ist kein Sass-Tutorial. Daher erkläre ich nur kurz einige Möglichkeiten von Sass, die für die Organisation besonders hilfreich sind, selbst wenn Sie keine anderen Sass-Funktionen verwenden. Wenn Sie mehr über Sass erfahren möchten, beginnen Sie mit dem Artikel [Sass basics](https://sass-lang.com/guide/) und lesen Sie anschließend die weitere Dokumentation.

#### Variablen definieren

CSS verfügt inzwischen über native [Custom Properties](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties), wodurch diese Funktion von Sass zunehmend an Bedeutung verliert. Ein Grund für die Verwendung von Sass kann dennoch sein, alle in einem Projekt verwendeten Farben und Schriftarten als Einstellungen zu definieren und die entsprechenden Variablen im gesamten Projekt zu nutzen. Wenn Sie später feststellen, dass Sie den falschen Blauton verwendet haben, müssen Sie ihn dadurch nur an einer Stelle ändern.

Wenn wir wie in der ersten Zeile unten eine Variable namens `$base-color` erstellen, können wir sie überall im Stylesheet verwenden, wo diese Farbe benötigt wird.

```scss
$base-color: #c6538c;

.alert {
  border: 1px solid $base-color;
}
```

Nach der Kompilierung zu CSS enthält das fertige Stylesheet das folgende CSS:

```css
.alert {
  border: 1px solid #c6538c;
}
```

#### Komponenten-Stylesheets kompilieren

Wie oben erwähnt, können Sie CSS organisieren, indem Sie große Stylesheets in kleinere aufteilen. Mit Sass können Sie noch einen Schritt weitergehen und viele sehr kleine Stylesheets verwenden – sogar ein eigenes Stylesheet für jede Komponente. Mithilfe der in Sass enthaltenen Funktion für Partials lassen sich diese zu einem oder wenigen Stylesheets kompilieren, die Sie dann tatsächlich in Ihre Website einbinden.

Mit [Partials](https://sass-lang.com/documentation/at-rules/use/#partials) könnten Sie beispielsweise mehrere Style-Dateien in einem Verzeichnis ablegen, etwa `foundation/_code.scss`, `foundation/_lists.scss`, `foundation/_footer.scss`, `foundation/_links.scss` und so weiter. Anschließend können Sie sie mit der Sass-Regel `@use` in andere Stylesheets laden:

```scss
// foundation/_index.scss
@use "code";
@use "lists";
@use "footer";
@use "links";
```

Wenn alle Partials wie oben angedeutet in eine Indexdatei geladen werden, können Sie das gesamte Verzeichnis auf einmal in ein anderes Stylesheet laden:

```scss
// style.scss
@use "foundation";
```

> [!NOTE]
> Eine einfache Möglichkeit, Sass auszuprobieren, bietet [CodePen](https://codepen.io/): In den Einstellungen eines Pens können Sie Sass für Ihr CSS aktivieren. CodePen führt dann den Sass-Parser aus, sodass Sie die resultierende Webseite mit angewendetem regulärem CSS sehen können. Manchmal verwenden CSS-Tutorials in ihren CodePen-Demos Sass statt einfachem CSS. Daher ist es hilfreich, ein wenig darüber zu wissen.

#### Nachverarbeitung zur Optimierung

Wenn Sie befürchten, dass Ihre Stylesheets beispielsweise durch viele zusätzliche Kommentare und Leerzeichen zu groß werden, können Sie das CSS in einem Nachverarbeitungsschritt optimieren. Dabei wird in der Produktionsversion alles Unnötige entfernt. Ein Beispiel für einen entsprechenden Postprozessor ist [cssnano](https://cssnano.github.io/cssnano/).
