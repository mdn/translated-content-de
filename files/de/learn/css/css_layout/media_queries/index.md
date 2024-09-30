---
title: Einsteigerleitfaden zu Media Queries
slug: Learn/CSS/CSS_layout/Media_queries
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{learnsidebar}}{{PreviousMenuNext("Learn/CSS/CSS_layout/Responsive_Design", "Learn/CSS/CSS_layout/Legacy_Layout_Methods", "Learn/CSS/CSS_layout")}}

Die **CSS Media Query** bietet Ihnen die Möglichkeit, CSS nur dann anzuwenden, wenn die Browser- und Geräteumgebung einer von Ihnen festgelegten Regel entspricht, beispielsweise "Viewport ist breiter als 480 Pixel". Media Queries sind ein wesentlicher Bestandteil des responsiven Webdesigns, da sie es Ihnen ermöglichen, unterschiedliche Layouts in Abhängigkeit von der Viewport-Größe zu erstellen. Sie können jedoch auch verwendet werden, um andere Dinge über die Umgebung zu erkennen, in der Ihre Website läuft, zum Beispiel, ob der Benutzer ein Touchscreen verwendet statt einer Maus. In dieser Lektion lernen Sie zunächst die in Media Queries verwendete Syntax und setzen diese dann in einem praktischen Beispiel ein, das zeigt, wie ein einfaches Design responsiv gemacht werden könnte.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML-Grundlagen (studieren Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >) und eine Vorstellung davon, wie CSS funktioniert (studieren Sie
        <a href="/de/docs/Learn/CSS/First_steps">CSS erste Schritte</a> und
        <a href="/de/docs/Learn/CSS/Building_blocks">CSS Bausteine</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, wie man Media Queries verwendet, und den gebräuchlichsten Ansatz kennen, um sie zur Erstellung responsiver Designs einzusetzen.
      </td>
    </tr>
  </tbody>
</table>

## Grundlagen zu Media Queries

Die einfachste Media Query-Syntax sieht folgendermaßen aus:

```css
@media media-type and (media-feature-rule) {
  /* CSS rules go here */
}
```

Sie besteht aus:

- Einem Medientyp, der dem Browser mitteilt, für welche Art von Medien dieser Code gedacht ist (z.B. Druck, oder Bildschirm).
- Einer Media-Expression, die eine Regel oder ein Test ist, der bestanden werden muss, damit das enthaltene CSS angewendet wird.
- Einer Reihe von CSS-Regeln, die angewendet werden, wenn der Test bestanden wird und der Medientyp korrekt ist.

### Medientypen

Die möglichen Medienarten, die Sie angeben können, sind:

- `all`
- `print`
- `screen`

Die folgende Media Query wird das <body> nur dann auf 12pt setzen, wenn die Seite gedruckt wird. Sie wird nicht angewendet, wenn die Seite in einem Browser geladen wird.

```css
@media print {
  body {
    font-size: 12pt;
  }
}
```

> [!NOTE]
> Der hier verwendete Medientyp unterscheidet sich von dem sogenannten [MIME Type](/de/docs/Glossary/MIME_type).

> [!NOTE]
> Es wurden eine Reihe von anderen Medientypen in der Level 3 Media Queries-Spezifikation definiert; diese wurden jedoch veraltet und sollten vermieden werden.

> [!NOTE]
> Medientypen sind optional; wenn Sie keinen Medientyp in Ihrer Media Query angeben, wird die Media Query standardmäßig für alle Medientypen verwendet.

### Regeln für Medieneigenschaften

Nachdem Sie den Typ angegeben haben, können Sie dann mit einer Regel auf eine Medieneigenschaft abzielen.

#### Breite und Höhe

Die Eigenschaft, die wir am häufigsten zur Erstellung responsiver Designs erkennen (und die eine weit verbreitete Browserunterstützung hat), ist die Viewport-Breite, und wir können CSS anwenden, wenn der Viewport über oder unter einer bestimmten Breite oder bei einer exakten Breite — mithilfe der Medieneigenschaften `min-width`, `max-width` und `width`.

Diese Eigenschaften werden verwendet, um Layouts zu erstellen, die auf unterschiedliche Bildschirmgrößen reagieren. Um zum Beispiel die Textfarbe des <body> in rot zu ändern, wenn der Viewport genau 600 Pixel beträgt, würden Sie die folgende Media Query verwenden.

```css
@media screen and (width: 600px) {
  body {
    color: red;
  }
}
```

[Beispiel öffnen](https://mdn.github.io/css-examples/learn/media-queries/width.html) im Browser oder [den Quellcode ansehen](https://github.com/mdn/css-examples/blob/main/learn/media-queries/width.html).

Die Medieneigenschaften `width` (und `height`) können als Bereiche verwendet werden und daher mit `min-` oder `max-` vorangestellt werden, um anzuzeigen, dass der angegebene Wert ein Minimum oder ein Maximum ist. Zum Beispiel, um die Farbe blau zu machen, wenn der Viewport 600 Pixel oder schmäler ist, verwenden Sie `max-width`:

```css
@media screen and (max-width: 600px) {
  body {
    color: blue;
  }
}
```

[Beispiel öffnen](https://mdn.github.io/css-examples/learn/media-queries/max-width.html) im Browser oder [den Quellcode ansehen](https://github.com/mdn/css-examples/blob/main/learn/media-queries/max-width.html).

In der Praxis ist die Verwendung von Mindest- oder Höchstwerten für responsives Design viel nützlicher, sodass Sie selten `width` oder `height` allein sehen.

Es gibt viele andere Medieneigenschaften, die Sie testen können, obwohl einige der neueren Merkmale, die in Level 4 und 5 der Media Queries-Spezifikation eingeführt wurden, eine begrenzte Browserunterstützung haben. Jedes Merkmal ist auf MDN dokumentiert, zusammen mit Informationen zur Browserunterstützung, und Sie können eine vollständige Liste unter [Verwendung von Media Queries: Syntax](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#syntax) finden.

#### Orientierung

Ein gut unterstütztes Medieneigenschaft ist `orientation`, mit dem wir nach Hochformat oder Querformat testen können. Um die Textfarbe des <body> zu ändern, wenn das Gerät im Querformat ist, verwenden Sie die folgende Media Query.

```css
@media (orientation: landscape) {
  body {
    color: rebeccapurple;
  }
}
```

[Beispiel öffnen](https://mdn.github.io/css-examples/learn/media-queries/orientation.html) im Browser oder [den Quellcode ansehen](https://github.com/mdn/css-examples/blob/main/learn/media-queries/orientation.html).

Eine Standard-Desktopansicht hat eine Querformat-Ausrichtung, und ein Design, das in dieser Ausrichtung gut funktioniert, funktioniert möglicherweise nicht so gut, wenn es auf einem Telefon oder Tablet im Hochformat angezeigt wird. Die Prüfung auf Orientierung kann Ihnen helfen, ein Layout zu erstellen, das für Geräte im Hochformat optimiert ist.

#### Verwendung von Zeigegeräten

Im Rahmen der Spezifikation der Ebene 4 wurde die Medieneigenschaft `hover` eingeführt. Diese Fähigkeit ermöglicht es Ihnen zu testen, ob der Benutzer die Möglichkeit hat, über ein Element zu schweben, was im Wesentlichen bedeutet, dass er irgendeine Art von Zeigegerät verwendet; Touchscreen und Tastaturnavigation schweben nicht.

```css
@media (hover: hover) {
  body {
    color: rebeccapurple;
  }
}
```

[Beispiel öffnen](https://mdn.github.io/css-examples/learn/media-queries/hover.html) im Browser oder [den Quellcode ansehen](https://github.com/mdn/css-examples/blob/main/learn/media-queries/hover.html).

Wenn wir wissen, dass der Benutzer nicht schweben kann, könnten wir einige interaktive Features standardmäßig anzeigen. Für Benutzer, die schweben können, möchten wir vielleicht, dass sie verfügbar sind, wenn ein Link überschwommen wird.

Ebenfalls in der Ebene 4 ist die Medieneigenschaft `pointer`. Diese nimmt drei mögliche Werte an, `none`, `fine` und `coarse`. Ein `fine`-Zeiger ist etwas wie eine Maus oder ein Trackpad. Es ermöglicht dem Benutzer, ein kleines Gebiet präzise zu zielen. Ein `coarse`-Zeiger ist Ihr Finger auf einem Touchscreen. Der Wert `none` bedeutet, dass der Benutzer kein Zeigegerät besitzt; vielleicht navigiert er nur mit der Tastatur oder mit Sprachbefehlen.

Die Verwendung von `pointer` kann Ihnen helfen, bessere Schnittstellen zu entwerfen, die auf die Art der Interaktion reagieren, die ein Benutzer mit einem Bildschirm hat. Zum Beispiel könnten Sie größere Trefferbereiche erstellen, wenn Sie wissen, dass der Benutzer mit dem Gerät als Touchscreen interagiert.

#### Verwendung der Bereichs-Syntax

Ein häufig auftretender Fall ist, zu überprüfen, ob die Viewport-Breite zwischen zwei Werten liegt:

```css
@media (min-width: 30em) and (max-width: 50em) {
  /* … */
}
```

Wenn Sie die Lesbarkeit verbessern möchten, können Sie die "Bereich"-Syntax verwenden:

```css
@media (30em <= width <= 50em) {
  /* … */
}
```

In diesem Fall werden die Styles angewendet, wenn die Viewport-Breite zwischen `30em` und `50em` liegt.

## Komplexere Media Queries

Mit all den unterschiedlichen möglichen Media Queries möchten Sie vielleicht diese kombinieren oder Listen von Queries erstellen, von denen jede übereinstimmen könnte.

### "und"-Logik in Media Queries

Um Medieneigenschaften zu kombinieren, können Sie `and` in der gleichen Weise verwenden, wie wir `and` oben verwendet haben, um einen Medientyp und eine Eigenschaft zu kombinieren. Zum Beispiel könnten wir nach einem `min-width` und `orientation` testen. Der Text des <body> wird nur dann blau, wenn der Viewport mindestens 600 Pixel breit ist und das Gerät im Querformat ist.

```css
@media screen and (min-width: 600px) and (orientation: landscape) {
  body {
    color: blue;
  }
}
```

[Beispiel öffnen](https://mdn.github.io/css-examples/learn/media-queries/and.html) im Browser oder [den Quellcode ansehen](https://github.com/mdn/css-examples/blob/main/learn/media-queries/and.html).

### "oder"-Logik in Media Queries

Wenn Sie eine Reihe von Queries haben, von denen jede übereinstimmen könnte, können Sie diese Queries durch Kommas trennen. Im folgenden Beispiel wird der Text blau, wenn der Viewport mindestens 600 Pixel breit ist ODER das Gerät im Querformat ist. Wenn eine dieser Bedingungen zutrifft, passt die Query.

```css
@media screen and (min-width: 600px), screen and (orientation: landscape) {
  body {
    color: blue;
  }
}
```

[Beispiel öffnen](https://mdn.github.io/css-examples/learn/media-queries/or.html) im Browser oder [den Quellcode ansehen](https://github.com/mdn/css-examples/blob/main/learn/media-queries/or.html).

### "nicht"-Logik in Media Queries

Sie können eine ganze Media Query mit dem `not`-Operator negieren. Dies kehrt die Bedeutung der gesamten Media Query um. Somit wird im nächsten Beispiel der Text nur dann blau, wenn die Orientierung Hochformat ist.

```css
@media not (orientation: landscape) {
  body {
    color: blue;
  }
}
```

[Beispiel öffnen](https://mdn.github.io/css-examples/learn/media-queries/not.html) im Browser oder [den Quellcode ansehen](https://github.com/mdn/css-examples/blob/main/learn/media-queries/not.html).

Sie können auch `not` verwenden, um bestimmte Ausdrücke zu negieren.

```css
@media (not (width < 600px)) and (not (width > 1000px)) {
  body {
    color: blue;
  }
}
```

Dies wird die Stile anwenden, wenn die Viewport-Breite zwischen 600 und 1000 Pixel liegt. Dies entspricht dem Ausdruck `(600px <= width <= 1000px)`.

## Wie man Breakpoints auswählt

In den frühen Tagen des responsiven Designs versuchten viele Designer, sehr spezifische Bildschirmgrößen zu zielen. Listen der Größen der Bildschirme von beliebten Telefonen und Tablets wurden veröffentlicht, damit Entwürfe erstellt werden könnten, um diese Viewports ordentlich zu erreichen.

Es gibt jetzt viel zu viele Geräte mit einer riesigen Vielzahl von Größen, um dies machbar zu machen. Dies bedeutet, dass anstelle es, spezifische Größen für alle Entwürfe zu zielen, ein besserer Ansatz ist, das Design an der Größe zu ändern, an der der Inhalt auf irgendeine Weise zu brechen beginnt. Vielleicht werden die Zeilenlängen viel zu lang, oder eine seitlich geordnete Sidebar wird zerdrückt und schwer lesbar. An diesem Punkt möchten Sie eine Media Query verwenden, um das Design zu einem besseren für den verfügbaren Raum zu ändern. Dieser Ansatz bedeutet, dass es keine Rolle spielt, was die genauen Abmessungen des verwendeten Geräts sind, jede Bandbreite wird abgedeckt. Die Punkte, an denen eine Media Query eingeführt wird, sind als **Breakpoints** bekannt.

Der [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) in den Firefox Developer Tools ist sehr nützlich, um herauszufinden, wo diese Breakpoints positioniert werden sollten. Sie können den Viewport einfach verkleinern und vergrößern, um zu sehen, wo der Inhalt durch die Hinzufügung einer Media Query und die Anpassung des Designs verbessert werden könnte.

![Ein Screenshot eines Layouts in einer mobilen Ansicht in den Firefox Developer Tools.](rwd-mode.png)

## Aktives Lernen: Mobile-First-Responsive Design

Grundsätzlich können Sie bei einem responsiven Design zwei Ansätze verfolgen. Sie können mit Ihrer Desktop- oder breitesten Ansicht beginnen und dann Breakpoints hinzufügen, um Dinge zu verschieben, sobald der Viewport kleiner wird, oder Sie können mit der kleinsten Ansicht beginnen und Layout hinzufügen, während der Viewport größer wird. Dieser zweite Ansatz wird als **Mobile-First**-Responsive-Design beschrieben und ist oft der beste Ansatz, dem man folgen kann.

Die Ansicht für die allerkleinsten Geräte ist oft eine einfache einspaltige Darstellung von Inhalten, so wie sie im normalen Fluss erscheinen. Das bedeutet, dass Sie für kleine Geräte wahrscheinlich nicht viel Layout anpassen müssen – ordnen Sie Ihren Quellcode gut, und Sie haben standardmäßig ein lesbares Layout.

Der nachfolgende Leitfaden führt Sie durch diesen Ansatz mit einem sehr einfachen Layout. In einer Produktionssituation werden Sie wahrscheinlich mehr Dinge innerhalb Ihrer Media Queries anpassen müssen, dennoch wäre der Ansatz genau der gleiche.

### Schritt-für-Schritt-Anleitung: Ein einfaches Mobile-First-Layout

Unser Ausgangspunkt ist ein HTML-Dokument mit ein wenig CSS, um Hintergrundfarben zu den verschiedenen Teilen des Layouts hinzuzufügen.

```css
* {
  box-sizing: border-box;
}

body {
  width: 90%;
  margin: 2em auto;
  font:
    1em/1.3 Arial,
    Helvetica,
    sans-serif;
}

a:link,
a:visited {
  color: #333;
}

nav ul,
aside ul {
  list-style: none;
  padding: 0;
}

nav a:link,
nav a:visited {
  background-color: rgb(207 232 220 / 20%);
  border: 2px solid rgb(79 185 227);
  text-decoration: none;
  display: block;
  padding: 10px;
  color: #333;
  font-weight: bold;
}

nav a:hover {
  background-color: rgb(207 232 220 / 70%);
}

.related {
  background-color: rgb(79 185 227 / 30%);
  border: 1px solid rgb(79 185 227);
  padding: 10px;
}

.sidebar {
  background-color: rgb(207 232 220 / 50%);
  padding: 10px;
}

article {
  margin-bottom: 1em;
}
```

Wir haben keine Layoutänderungen vorgenommen, aber die Quelle des Dokuments ist in einer Weise angeordnet, die den Inhalt lesbar macht. Dies ist ein wichtiger erster Schritt, der sicherstellt, dass, wenn der Inhalt von einem Bildschirmleser vorgelesen würde, er verständlich wäre.

```html
<body>
  <div class="wrapper">
    <header>
      <nav>
        <ul>
          <li><a href="">About</a></li>
          <li><a href="">Contact</a></li>
          <li><a href="">Meet the team</a></li>
          <li><a href="">Blog</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <article>
        <div class="content">
          <h1>Veggies!</h1>
          <p>…</p>
        </div>
        <aside class="related">
          <p>…</p>
        </aside>
      </article>

      <aside class="sidebar">
        <h2>External vegetable-based links</h2>
        <ul>
          <li>…</li>
        </ul>
      </aside>
    </main>

    <footer><p>&copy;2019</p></footer>
  </div>
</body>
```

Dieses einfache Layout funktioniert auch auf dem Handy gut. Wenn wir das Layout im Responsive Design Mode in den Developer Tools anzeigen, sehen wir, dass es als einfache mobile Ansicht der Website ziemlich gut funktioniert.

[Schritt 1 öffnen](https://mdn.github.io/css-examples/learn/media-queries/step1.html) im Browser oder [den Quellcode ansehen](https://github.com/mdn/css-examples/blob/main/learn/media-queries/step1.html).

**Wenn Sie dieses Beispiel weiter umsetzen und implementieren möchten, erstellen Sie eine lokale Kopie von [step1.html](https://github.com/mdn/css-examples/blob/main/learn/media-queries/step1.html) auf Ihrem Computer.**

Von diesem Punkt aus beginnen Sie, die Ansicht im Responsive Design Mode breiter zu machen, bis Sie sehen, dass die Zeilenlängen ziemlich lang werden und wir Platz haben, dass die Navigation in einer horizontalen Linie angezeigt wird. Hier werden wir unsere erste Media Query hinzufügen. Wir verwenden ems, da dies bedeutet, dass, wenn der Benutzer seine Textgröße erhöht hat, der Breakpoint bei einer ähnlichen Zeilenlänge, aber einem breiteren Viewport, auftritt als bei jemandem mit kleinerer Textgröße.

**Fügen Sie den unten stehenden CSS-Code am Ende Ihres step1.html CSS-Codes hinzu.**

```css
@media screen and (min-width: 40em) {
  article {
    display: grid;
    grid-template-columns: 3fr 1fr;
    column-gap: 20px;
  }

  nav ul {
    display: flex;
  }

  nav li {
    flex: 1;
  }
}
```

Dieses CSS gibt uns ein zweispaltiges Layout innerhalb des Artikels, bestehend aus dem Artikelinhalt und Informationen im <aside>-Element. Wir haben auch Flexbox verwendet, um die Navigation in eine Reihe zu setzen.

[Schritt 2 öffnen](https://mdn.github.io/css-examples/learn/media-queries/step2.html) im Browser oder [den Quellcode ansehen](https://github.com/mdn/css-examples/blob/main/learn/media-queries/step2.html).

Lassen Sie uns die Breite weiter erweitern, bis wir das Gefühl haben, dass genügend Raum für das Sidebar vorhanden ist, um ebenfalls eine neue Spalte zu bilden. Innerhalb einer Media Query machen wir das <main>-Element zu einem zweispaltigen Raster. Wir müssen dann das {{cssxref("margin-bottom")}} beim <article> entfernen, damit die beiden Sidebars zueinander ausgerichtet sind, und wir fügen einen {{cssxref("border")}} an der oberen Kante des Fußes hinzu. Normalerweise sind dies die kleinen Anpassungen, die Sie machen, um das Design bei jedem Breakpoint gut aussehen zu lassen.

**Fügen Sie den unten stehenden CSS-Code erneut am Ende Ihres step1.html CSS-Codes hinzu.**

```css
@media screen and (min-width: 70em) {
  main {
    display: grid;
    grid-template-columns: 3fr 1fr;
    column-gap: 20px;
  }

  article {
    margin-bottom: 0;
  }

  footer {
    border-top: 1px solid #ccc;
    margin-top: 2em;
  }
}
```

[Schritt 3 öffnen](https://mdn.github.io/css-examples/learn/media-queries/step3.html) im Browser oder [den Quellcode ansehen](https://github.com/mdn/css-examples/blob/main/learn/media-queries/step3.html).

Wenn Sie sich das endgültige Beispiel bei verschiedenen Breiten ansehen, können Sie sehen, wie das Design als eine Spalte, zwei Spalten oder drei Spalten funktioniert, je nach verfügbarer Breite. Dies ist ein sehr einfaches Beispiel für ein Mobile-First-Responsive-Design.

## Der Viewport-Meta-Tag

Wenn Sie sich den HTML-Quellcode im obigen Beispiel ansehen, sehen Sie das folgende Element im Kopf des Dokuments enthalten:

```html
<meta name="viewport" content="width=device-width,initial-scale=1" />
```

Dies ist der [Viewport-Meta-Tag](/de/docs/Web/HTML/Viewport_meta_tag) — er existiert als eine Möglichkeit, die Art und Weise zu kontrollieren, wie mobile Browser Inhalte rendern. Dies ist notwendig, weil die meisten mobilen Browser standardmäßig über ihre Viewport-Breite lügen. Nicht-responsive Seiten sehen, wenn sie standardmäßig in einem schmalen Viewport geladen werden, normalerweise wirklich schlecht aus, daher rendern mobile Browser die Seite normalerweise mit einer Viewport-Breite, die breiter ist als die reale Gerätebreite (normalerweise 980 Pixel) und verkleinern dann das gerenderte Ergebnis so, dass es in die Anzeige passt.

Das ist alles schön und gut, aber es bedeutet, dass responsive Seiten nicht so funktionieren wie erwartet. Wenn die Viewport-Breite als 980 Pixel gemeldet wird, dann werden mobile Layouts (z.B. erstellt mit einer Media Query von `@media screen and (max-width: 600px) { }`) nicht wie erwartet gerendert.

Um dieses Problem zu beheben, teilt der Einschluss eines Viewport-Meta-Tags wie das oben auf Ihrer Seite dem Browser mit "Rendere den Inhalt nicht mit einem 980 Pixel-Viewport —_renderere ihn stattdessen unter Verwendung der realen Gerätebreite_ und setze eine Standardanzeigemassstabsebene für bessere Konsistenz." Die Media Queries werden dann wie erwartet aktiviert.

Es gibt eine Reihe von anderen Optionen, die Sie innerhalb des `content`-Attributs des Viewport-Meta-Tags einfügen können — siehe [Verwendung des Viewport-Meta-Tags zur Steuerung des Layouts auf mobilen Browsern](/de/docs/Web/HTML/Viewport_meta_tag) für mehr Details.

## Brauchen Sie wirklich eine Media Query?

Flexbox, Grid und Multi-Spalten-Layout bieten Ihnen Möglichkeiten, flexible und sogar responsive Komponenten ohne die Notwendigkeit einer Media Query zu erstellen. Es lohnt sich immer zu überlegen, ob diese Layout-Methoden das erreichen können was Sie wollen, ohne Media Queries hinzuzufügen. Zum Beispiel möchten Sie vielleicht ein Set von Karten, die mindestens 200 Pixel breit sind, mit so vielen dieser 200 Pixel wie in den Hauptartikel passen. Dies kann mit Grid Layout erreicht werden, ganz ohne Media Queries.

Dies könnte mit dem folgenden erreicht werden:

```html
<ul class="grid">
  <li>
    <h2>Card 1</h2>
    <p>…</p>
  </li>
  <li>
    <h2>Card 2</h2>
    <p>…</p>
  </li>
  <li>
    <h2>Card 3</h2>
    <p>…</p>
  </li>
  <li>
    <h2>Card 4</h2>
    <p>…</p>
  </li>
  <li>
    <h2>Card 5</h2>
    <p>…</p>
  </li>
</ul>
```

```css
.grid {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}

.grid li {
  border: 1px solid #666;
  padding: 10px;
}
```

[Das Gitterlayout-Beispiel öffnen](https://mdn.github.io/css-examples/learn/media-queries/grid.html) im Browser oder [den Quellcode ansehen](https://github.com/mdn/css-examples/blob/main/learn/media-queries/grid.html).

Wenn das Beispiel in Ihrem Browser geöffnet ist, machen Sie den Bildschirm breiter und schmaler, um zu sehen, wie sich die Anzahl der Spaltengitter ändert. Das schöne an dieser Methode ist, dass Grid nicht auf die Viewport-Breite schaut, sondern auf die Breite, die es für diese Komponente zur Verfügung hat. Es mag merkwürdig erscheinen, einen Abschnitt über Media Queries mit dem Vorschlag zu beenden, dass Sie möglicherweise gar keine benötigen! In der Praxis werden Sie jedoch feststellen, dass eine gute Nutzung moderner Layoutmethoden, ergänzt durch Media Queries, die besten Ergebnisse liefert.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einen Test finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Responsives Webdesign und Media Queries](/de/docs/Learn/CSS/CSS_layout/rwd_skills).

## Zusammenfassung

In dieser Lektion haben Sie etwas über Media Queries gelernt und auch erfahren, wie man sie in der Praxis einsetzt, um ein Mobile-First-Responsive-Design zu erstellen.

Sie könnten den Ausgangspunkt, den wir erstellt haben, verwenden, um mehr Media Queries auszuprobieren. Beispielsweise könnten Sie die Größe der Navigation ändern, wenn Sie feststellen, dass der Besucher einen grobkörnigen Zeiger hat, indem Sie die Medieneigenschaft `pointer` verwenden.

Sie könnten auch experimentieren, indem Sie verschiedene Komponenten hinzufügen und prüfen, ob die Hinzufügung einer Media Query oder die Verwendung einer Layoutmethode wie Flexbox oder Grid der geeignetste Weg ist, um die Komponenten responsiv zu machen. Sehr oft gibt es keinen richtigen oder falschen Weg — Sie sollten experimentieren und prüfen, was am besten zu Ihrem Design und Inhalt passt.

{{PreviousMenuNext("Learn/CSS/CSS_layout/Responsive_Design", "Learn/CSS/CSS_layout/Legacy_Layout_Methods", "Learn/CSS/CSS_layout")}}
