---
title: Organisieren Ihres CSS
slug: Learn_web_development/Core/Styling_basics/Organizing
l10n:
  sourceCommit: 8dac6c62fc3cee2de82960d4dd9d9be16a3a1761
---

{{LearnSidebar}}

Wenn Sie beginnen, an größeren Stylesheets und umfangreichen Projekten zu arbeiten, werden Sie feststellen, dass die Pflege einer riesigen CSS-Datei herausfordernd sein kann. In diesem Artikel werfen wir einen kurzen Blick auf einige Best Practices, um Ihr CSS so zu schreiben, dass es leicht zu warten ist, und auf einige der Lösungen, die von anderen verwendet werden, um die Wartbarkeit zu verbessern.

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
        >, HTML-Grundlagen (lesen Sie
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Einführung in HTML</a
        >), und eine Vorstellung davon, wie CSS funktioniert (lesen Sie
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS Styling Grundlagen</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Einige Tipps und Best Practices zur Organisation von Stylesheets zu erlernen sowie sich über einige der in der Praxis verwendeten Namenskonventionen und Werkzeuge zu informieren, die bei der Organisation von CSS und der Zusammenarbeit im Team helfen können.
      </td>
    </tr>
  </tbody>
</table>

## Tipps, um Ihr CSS ordentlich zu halten

Hier sind einige allgemeine Vorschläge, um Ihre Stylesheets organisiert und übersichtlich zu halten.

### Hat Ihr Projekt eine Codierungsstil-Richtlinie?

Wenn Sie mit einem Team an einem bestehenden Projekt arbeiten, sollten Sie als Erstes überprüfen, ob das Projekt bereits eine Styleguide für CSS enthält. Die Team-Stilrichtlinie sollte immer Vorrang vor Ihren eigenen persönlichen Vorlieben haben. Oft gibt es kein richtig oder falsch, aber Konsistenz ist wichtig.

Sehen Sie sich beispielsweise die [CSS-Richtlinien für MDN-Codebeispiele](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/CSS) an.

### Halten Sie es konsistent

Wenn Sie die Regeln für das Projekt festlegen dürfen oder alleine arbeiten, ist das Wichtigste, die Dinge konsistent zu halten. Konsistenz kann auf verschiedene Weise angewendet werden, beispielsweise durch die Verwendung derselben Namenskonventionen für Klassen, die Wahl einer Methode zur Beschreibung von Farben oder die Beibehaltung eines einheitlichen Formats. (Beispielsweise: Verwenden Sie Tabs oder Leerzeichen, um Ihren Code einzurücken? Wenn Leerzeichen, wie viele?)

Das Einhalten eines Satzes von Regeln, dem Sie immer folgen, reduziert den mentalen Aufwand beim Schreiben von CSS, da einige Entscheidungen bereits getroffen wurden.

### Formatieren von lesbarem CSS

Es gibt einige Möglichkeiten, wie Sie CSS formatiert vorfinden können. Manche Entwickler packen alle Regeln in eine einzige Zeile, so:

```css-nolint
.box {background-color: #567895; }
h2 {background-color: black; color: white; }
```

Andere Entwickler bevorzugen es, alles in eine neue Zeile zu schreiben:

```css
.box {
  background-color: #567895;
}

h2 {
  background-color: black;
  color: white;
}
```

CSS ist das egal, welche Methode Sie verwenden. Wir persönlich finden es lesbarer, wenn jedes Paar aus Eigenschaft und Wert in einer neuen Zeile steht.

### Kommentieren Sie Ihr CSS

Kommentare in Ihrem CSS hinzuzufügen, wird zukünftigen Entwicklern helfen, mit Ihrer CSS-Datei zu arbeiten, und wird auch Ihnen helfen, wenn Sie nach einer Pause zu dem Projekt zurückkehren.

```css
/* This is a CSS comment
It can be broken onto multiple lines. */
```

Ein guter Tipp ist, zwischen logischen Abschnitten in Ihrem Stylesheet Kommentarblöcke hinzuzufügen, um verschiedene Abschnitte schnell zu finden, wenn Sie die Datei durchsuchen, oder sogar, um Ihnen einen Suchbegriff zu geben, um direkt zu diesem Teil des CSS zu springen. Wenn Sie eine Zeichenkette verwenden, die nicht im Code vorkommt, können Sie durch Suchen von Abschnitt zu Abschnitt springen — unten haben wir `||` verwendet.

```css
/* || General styles */

/* … */

/* || Typography */

/* … */

/* || Header and Main Navigation */

/* … */
```

Sie müssen nicht jede einzelne Sache in Ihrem CSS kommentieren, da vieles selbsterklärend ist. Kommentieren sollten Sie jene Dinge, bei denen Sie aus einem bestimmten Grund eine bestimmte Entscheidung getroffen haben.

Sie könnten beispielsweise eine CSS-Eigenschaft in einer spezifischen Weise verwendet haben, um ältere Browser-Inkompatibilitäten zu umgehen:

```css
.box {
  background-color: red; /* fallback for older browsers that don't support gradients */
  background-image: linear-gradient(to right, #ff0000, #aa0000);
}
```

Vielleicht haben Sie ein Tutorial gefolgt, um etwas zu erreichen, und das CSS ist nicht sehr selbsterklärend oder erkennbar. In diesem Fall könnten Sie die URL des Tutorials zu den Kommentaren hinzufügen. Sie werden sich selbst danken, wenn Sie in einem Jahr zu diesem Projekt zurückkehren und sich vage daran erinnern, dass es ein großartiges Tutorial zu diesem Thema gab, aber sich nicht erinnern, wo es herkam.

### Erstellen Sie logische Abschnitte in Ihrem Stylesheet

Es ist eine gute Idee, alle allgemeinen Stylen zuerst im Stylesheet aufzunehmen. Das bedeutet alle Styles, die im Allgemeinen gelten, es sei denn, Sie machen etwas Besonderes mit diesem Element. Typischerweise werden Sie Regeln für Folgendes festlegen:

- `body`
- `p`
- `h1`, `h2`, `h3`, `h4`, `h5`
- `ul` und `ol`
- Die `table`-Eigenschaften
- Links

In diesem Abschnitt des Stylesheets bieten wir grundlegende Stile für den Typographie-Inhalt der Website an, richten einen Standardstil für Datentabellen und Listen ein, und so weiter.

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

Nach diesem Abschnitt könnten wir ein paar Utility-Klassen definieren, beispielsweise eine Klasse, die den Standard-Listenstil für Listen entfernt, die wir als Flex-Elemente oder auf andere Weise anzeigen möchten. Wenn Sie einige Styling-Optionen haben, die Sie auf viele verschiedene Elemente anwenden möchten, können diese in diesem Abschnitt untergebracht werden.

```css
/* || UTILITIES */

.no-bullets {
  list-style: none;
  margin: 0;
  padding: 0;
}

/* … */
```

Dann können wir alles hinzufügen, was auf der gesamten Website verwendet wird. Das könnten Dinge wie das grundlegende Seitenlayout, die Header- und Navigationsstyles sein.

```css
/* SITEWIDE */

.main-nav {
  /* … */
}

.logo {
  /* … */
}
```

Schließlich fügen wir CSS für spezifische Dinge hinzu, aufgeschlüsselt nach Kontext, Seite oder sogar Komponenten, in denen sie verwendet werden.

```css
/* || STORE PAGES */

.product-listing {
  /* … */
}

.product-box {
  /* … */
}
```

Durch eine solche Reihenfolge haben wir zumindest eine Idee, in welchem Teil des Stylesheets wir etwas suchen, das wir ändern möchten.

### Vermeiden Sie zu spezifische Selektoren

Wenn Sie sehr spezifische Selektoren erstellen, werden Sie oft feststellen, dass Sie Teile Ihres CSS duplizieren müssen, um dieselben Regeln auf ein anderes Element anzuwenden. Zum Beispiel könnten Sie etwas wie den folgenden Selektor haben, der eine Regel auf ein `<p>` mit der Klasse `box` innerhalb eines `<article>` mit der Klasse `main` anwendet:

```css
article.main p.box {
  border: 1px solid #ccc;
}
```

Wenn Sie dann dieselben Regeln auf etwas außerhalb von `main` oder auf etwas anderes als ein `<p>` anwenden wollten, müssten Sie entweder einen weiteren Selektor zu diesen Regeln hinzufügen oder ein komplett neues Regelset erstellen. Stattdessen könnten Sie den Selektor `.box` verwenden, um Ihre Regel auf jedes Element anzuwenden, das die Klasse `box` hat:

```css
.box {
  border: 1px solid #ccc;
}
```

Es wird Gelegenheiten geben, in denen es Sinn macht, etwas spezifischer zu gestalten; das sollte jedoch in der Regel die Ausnahme und nicht die Regel sein.

### Große Stylesheets in mehrere kleinere aufteilen

Wenn Sie sehr unterschiedliche Stile für verschiedene Teile der Seite haben, könnten Sie ein Stylesheet erstellen, das alle globalen Regeln enthält, sowie einige kleinere Stylesheets, die die spezifischen Regeln für diese Abschnitte enthalten. Sie können mehrere Stylesheets von einer Seite aus verlinken, und die üblichen Regeln der Kaskade gelten, wobei Regeln in später verlinkten Stylesheets nach den Regeln in früher verlinkten Stylesheets kommen.

Zum Beispiel könnten wir einen Online-Shop als Teil der Seite haben, mit viel CSS, das nur verwendet wird, um die Produktlisten und Formulare für den Shop zu stylen. Dann wäre es sinnvoll, diese Dinge in einem anderen Stylesheet zu haben, das nur auf den Shop-Seiten verlinkt wird.

Dies kann helfen, Ihr CSS besser zu organisieren, und es bedeutet auch, dass, wenn mehrere Personen am CSS arbeiten, es weniger Situationen gibt, in denen zwei Personen gleichzeitig am selben Stylesheet arbeiten müssen, was zu Konflikten in der Versionskontrolle führen könnte.

## Andere Hilfsmittel, die helfen können

CSS selbst bietet nicht viele eingebaute Möglichkeiten zur Organisation; daher hängt das Maß an Konsistenz in Ihrem CSS weitgehend von Ihnen ab. Die Web-Community hat jedoch verschiedene Werkzeuge und Ansätze entwickelt, die Ihnen helfen können, größere CSS-Projekte zu verwalten. Da Sie wahrscheinlich auf diese Hilfsmittel stoßen werden, wenn Sie mit anderen Personen zusammenarbeiten, und da sie oft generell hilfreich sind, haben wir eine kurze Einführung in einige dieser Hilfsmittel aufgenommen.

### CSS-Methodologien

Anstatt Ihre eigenen Regeln für das Schreiben von CSS zu entwickeln, könnten Sie davon profitieren, einen der Ansätze zu übernehmen, die bereits von der Community gestaltet und in vielen Projekten getestet wurden. Diese Methodologien sind im Grunde CSS-Codierungs-Leitfäden, die einen sehr strukturierten Ansatz für das Schreiben und Organisieren von CSS bieten. Typischerweise neigen sie dazu, CSS ausführlicher zu machen, als Sie es vielleicht hätten, wenn Sie jeden Selektor nach einem eigenen Regelwerk für das Projekt optimiert hätten.

Allerdings gewinnen Sie durch die Übernahme einer solchen Methodologie viel Struktur. Da viele dieser Systeme weit verbreitet sind, verstehen andere Entwickler eher den Ansatz, den Sie verwenden, und können ihr eigenes CSS auf gleiche Weise schreiben, anstatt sich von Grund auf Ihre persönliche Methodik zu erarbeiten.

#### OOCSS

Die meisten Ansätze, denen Sie begegnen werden, basieren auf dem Konzept von Object Oriented CSS (OOCSS), einem Ansatz, der durch [die Arbeit von Nicole Sullivan](https://github.com/stubbornella/oocss/wiki) populär wurde. Der grundlegende Gedanke von OOCSS besteht darin, Ihr CSS in wiederverwendbare Objekte zu unterteilen, die überall auf Ihrer Website verwendet werden können. Das Standardbeispiel für OOCSS ist das Muster, das als [The Media Object](/de/docs/Web/CSS/Layout_cookbook/Media_objects) beschrieben wird. Das ist ein Muster mit einem Element fester Größe wie einem Bild oder Video auf der einen Seite und flexiblem Inhalt auf der anderen Seite. Es ist ein Muster, das wir häufig auf Websites für Kommentare, Auflistungen und ähnliche Dinge sehen.

Wenn Sie nicht einem OOCSS-Ansatz folgen, könnten Sie beispielsweise benutzerdefinierte CSS für die verschiedenen Orte erstellen, an denen dieses Muster verwendet wird, indem Sie zwei Klassen erstellen: eine namens `comment` mit einer Reihe von Regeln für die Komponenten und eine namens `list-item` mit fast denselben Regeln wie die Klasse `comment`, außer für ein paar winzige Unterschiede.

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

In OOCSS würden Sie ein Muster namens `media` erstellen, das alle gemeinsamen CSS für beide Muster enthält — eine Basisklasse für alles, was in die Form des Media-Objekts passt. Dann würden wir eine zusätzliche Klasse hinzufügen, um diese Stile auf spezifische Weise zu erweitern.

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

In Ihrem HTML müsste der Kommentar sowohl die Klassen `media` als auch `comment` enthalten:

```html
<div class="media comment">
  <img src="" alt="" />
  <div class="content"></div>
</div>
```

Das Listen-Element hätte die Klassen `media` und `list-item`:

```html
<ul>
  <li class="media list-item">
    <img src="" alt="" />
    <div class="content"></div>
  </li>
</ul>
```

Dank der Arbeit von Nicole Sullivan verstehen selbst diejenigen, die OOCSS heute nicht strikt anwenden, im Allgemeinen, dass das Wiederverwenden von CSS auf diese Weise sinnvoll ist — es hat sich als eine gute Herangehensweise in unserer kollektiven Vorstellung etabliert.

#### BEM

BEM steht für Block Element Modifier. In BEM ist ein Block eine eigenständige Entität wie ein Button, Menü oder Logo. Ein Element ist etwas wie ein Listenelement oder ein Titel, das an den Block gebunden ist, in dem es sich befindet. Ein Modifier ist ein Flag auf einem Block oder Element, das das Styling oder Verhalten ändert. Sie erkennen Code, der BEM verwendet, an der ausgiebigen Verwendung von Bindestrichen und Unterstrichen in den CSS-Klassen. Sehen Sie sich beispielsweise die Klassen im HTML dieser Seite über [BEM-Namenskonventionen](https://getbem.com/naming/) an:

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

Die zusätzlichen Klassen sind ähnlich denjenigen aus dem OOCSS-Beispiel; allerdings verwenden sie die strikten Namenskonventionen von BEM.

BEM wird häufig in größeren Webprojekten eingesetzt, und viele Leute schreiben ihr CSS auf diese Weise. Es ist wahrscheinlich, dass Sie auf Beispiele stoßen, sogar in Tutorials, die BEM-Syntax verwenden, ohne darauf einzugehen, warum das CSS auf diese Weise strukturiert ist.

Lesen Sie mehr über dieses System in [BEM 101](https://css-tricks.com/bem-101/) bei CSS Tricks.

#### Andere gängige Systeme

Es gibt eine Vielzahl solcher Systeme im Einsatz. Andere beliebte Ansätze sind [Scalable and Modular Architecture for CSS (SMACSS)](https://smacss.com/), erstellt von Jonathan Snook, [ITCSS](https://itcss.io/) von Harry Roberts und [Atomizer CSS (ACSS)](https://acss-io.github.io/atomizer/), ursprünglich von Yahoo! entwickelt. Wenn Sie auf ein Projekt stoßen, das einen dieser Ansätze verwendet, können Sie viele Artikel und Anleitungen finden, die Ihnen helfen zu verstehen, wie Sie im gleichen Stil coden.

Der Nachteil bei der Nutzung solcher Systeme ist, dass sie für kleinere Projekte übermäßig komplex wirken können.

### Build-Systeme für CSS

Eine andere Möglichkeit, CSS zu organisieren, ist die Nutzung von Werkzeugen, die für Frontend-Entwickler verfügbar sind, und die einen programmatischeren Ansatz für das Schreiben von CSS ermöglichen. Es gibt eine Reihe von Werkzeugen, die wir _Preprozessoren_ und _Postprozessoren_ nennen. Ein Preprozessor verarbeitet Ihre Rohdateien und wandelt sie in ein Stylesheet um, während ein Postprozessor Ihr fertiges Stylesheet optimiert — beispielsweise um es schneller laden zu lassen.

Die Nutzung solcher Werkzeuge erfordert, dass Ihre Entwicklungsumgebung die Skripte ausführen kann, die das Pre- und Post-Processing übernehmen. Viele Code-Editoren können dies für Sie tun, oder Sie können Kommandozeilen-Tools installieren, um dies zu ermöglichen.

Der beliebteste Preprozessor ist [Sass](https://sass-lang.com/). Dies ist kein Sass-Tutorial, daher werde ich nur kurz ein paar Dinge erklären, die Sass in Bezug auf Organisation leisten kann, auch wenn Sie keine anderen Funktionen verwenden. Wenn Sie mehr über Sass lernen möchten, beginnen Sie mit dem Artikel [Sass basics](https://sass-lang.com/guide/) und gehen Sie dann zur weiteren Dokumentation über.

#### Variablen definieren

CSS bietet inzwischen native [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties), wodurch diese Funktion weniger wichtig wird. Einer der Gründe, Sass zu nutzen, ist jedoch, dass Sie alle Farben und Schriften, die in einem Projekt verwendet werden, als Variablen definieren können, um diese dann projektweit zu verwenden. Dadurch müssen Sie bei Änderung eines Farbtons nur an einer Stelle eine Anpassung vornehmen.

Wenn wir eine Variable `$base-color` erstellen, wie in der ersten Zeile unten, könnten wir sie im gesamten Stylesheet verwenden, wo immer diese Farbe benötigt wird.

```scss
$base-color: #c6538c;

.alert {
  border: 1px solid $base-color;
}
```

Nach der Kompilierung in CSS erhalten Sie das folgende CSS in der endgültigen Stylesheet-Datei.

```css
.alert {
  border: 1px solid #c6538c;
}
```

#### Kompilieren von Komponenten-Stylesheets

Wie oben erwähnt, ist eine Möglichkeit, CSS zu organisieren, das Aufteilen in kleinere Stylesheets. Mit Sass können Sie dies auf eine weitere Ebene bringen und viele sehr kleine Stylesheets haben — sogar für jede Komponente ein separates Stylesheet. Mithilfe der im Sass enthaltenen Funktionen (Partials) können diese zu einem oder wenigen Stylesheets zusammengefasst werden, die tatsächlich in Ihre Website eingebunden werden.

Zum Beispiel können Sie mit [Partials](https://sass-lang.com/documentation/at-rules/use/#partials) mehrere Stildateien in ein Verzeichnis wie `foundation/_code.scss`, `foundation/_lists.scss`, `foundation/_footer.scss`, `foundation/_links.scss` usw. einfügen. Sie können diese Dateien dann mit der Sass-Regel `@use` in andere Stylesheets laden:

```scss
// foundation/_index.scss
@use "code";
@use "lists";
@use "footer";
@use "links";
```

Wenn alle Partials in einer Indexdatei geladen werden, können Sie das gesamte Verzeichnis auf einmal in ein anderes Stylesheet laden:

```scss
// style.scss
@use "foundation";
```

> [!NOTE]
> Eine einfache Möglichkeit, Sass auszuprobieren, ist die Nutzung von [CodePen](https://codepen.io/) — Sie können Sass für Ihr CSS in den Einstellungen eines Pens aktivieren. CodePen führt dann den Sass-Parser für Sie aus, sodass Sie die resultierende Webseite mit regulärem CSS sehen können. Manchmal finden Sie auch, dass CSS-Tutorials Sass statt reinem CSS in ihren CodePen-Demos verwenden, weshalb es praktisch ist, ein wenig darüber zu wissen.

#### Post-Processing zur Optimierung

Wenn Sie besorgt darüber sind, die Größe Ihres Stylesheets zu vergrößern, beispielsweise durch viele zusätzliche Kommentare und Leerzeichen, könnten Sie in einem Post-Processing-Schritt das CSS optimieren, indem Sie alles Unnötige in der Produktionsversion entfernen. Ein Beispiel für eine Post-Processing-Lösung dafür ist [cssnano](https://cssnano.github.io/cssnano/).
