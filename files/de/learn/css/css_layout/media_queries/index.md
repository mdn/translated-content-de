---
title: Einsteigerleitfaden zu Media Queries
slug: Learn/CSS/CSS_layout/Media_queries
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{learnsidebar}}{{PreviousMenuNext("Learn/CSS/CSS_layout/Responsive_Design", "Learn/CSS/CSS_layout/Legacy_Layout_Methods", "Learn/CSS/CSS_layout")}}

Die **CSS Media Query** gibt Ihnen die Möglichkeit, CSS nur dann anzuwenden, wenn die Browser- und Geräteumgebung einer von Ihnen festgelegten Regel entspricht, beispielsweise "Viewport ist breiter als 480 Pixel". Media Queries sind ein wesentlicher Bestandteil von Responsive Web Design, da sie es ermöglichen, unterschiedliche Layouts abhängig von der Größe des Viewports zu erstellen. Sie können aber auch verwendet werden, um andere Aspekte der Umgebung zu erkennen, auf der Ihre Website läuft, zum Beispiel, ob der Benutzer einen Touchscreen anstelle einer Maus verwendet. In dieser Lektion lernen Sie zunächst die in Media Queries verwendete Syntax kennen und verwenden sie dann in einem Arbeitsbeispiel, das zeigt, wie ein einfaches Design responsiv gestaltet werden kann.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlagen von HTML (studieren Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >) und eine Vorstellung davon, wie CSS funktioniert (studieren Sie
        <a href="/de/docs/Learn/CSS/First_steps">CSS erste Schritte</a> und
        <a href="/de/docs/Learn/CSS/Building_blocks">CSS Bausteine</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, wie Media Queries verwendet werden und der häufigste Ansatz, um damit responsive Designs zu erstellen.
      </td>
    </tr>
  </tbody>
</table>

## Grundlagen von Media Queries

Die einfachste Syntax für eine Media Query sieht wie folgt aus:

```css
@media media-type and (media-feature-rule) {
  /* CSS-Regeln hier */
}
```

Sie besteht aus:

- Einem Medientyp, der dem Browser mitteilt, für welche Art von Medien dieser Code gedacht ist (z.B. Druck oder Bildschirm).
- Einer Mediensprache, die eine Regel oder Test ist, der bestanden werden muss, damit das enthaltene CSS angewendet wird.
- Einem Satz von CSS-Regeln, die angewendet werden, wenn der Test bestanden wird und der Medientyp korrekt ist.

### Medientypen

Die möglichen Arten von Medien, die Sie angeben können, sind:

- `all`
- `print`
- `screen`

Die folgende Media Query setzt den Textkörper nur dann auf 12pt, wenn die Seite gedruckt wird. Sie wird nicht angewendet, wenn die Seite in einem Browser geladen wird.

```css
@media print {
  body {
    font-size: 12pt;
  }
}
```

> [!NOTE]
> Der Medientyp hier ist anders als der sogenannte {{glossary("MIME type")}}.

> [!NOTE]
> Es gab in der Spezifikation der Media Queries Level 3 eine Reihe weiterer definierter Medientypen; diese wurden veraltet und sollten vermieden werden.

> [!NOTE]
> Medientypen sind optional; wenn Sie in Ihrer Media Query keinen Medientyp angeben, wird die Media Query standardmäßig für alle Medientypen gelten.

### Regeln für Media Features

Nach der Angabe des Typs können Sie dann ein Media Feature mit einer Regel anvisieren.

#### Breite und Höhe

Das Feature, das wir am häufigsten erkennen, um responsive Designs zu erstellen (und das weit verbreitete Browserunterstützung hat), ist die Viewport-Breite. Wir können CSS anwenden, wenn der Viewport über oder unter einer bestimmten Breite liegt — oder genau einer Breite entspricht —, indem wir die Media Features `min-width`, `max-width` und `width` verwenden.

Diese Features werden verwendet, um Layouts zu erstellen, die auf verschiedene Bildschirmgrößen reagieren. Zum Beispiel, um die Textfarbe des Körpers auf Rot zu ändern, wenn der Viewport genau 600 Pixel breit ist, würden Sie die folgende Media Query verwenden.

```css
@media screen and (width: 600px) {
  body {
    color: red;
  }
}
```

[Öffnen Sie dieses Beispiel](https://mdn.github.io/css-examples/learn/media-queries/width.html) im Browser oder [sehen Sie den Quellcode](https://github.com/mdn/css-examples/blob/main/learn/media-queries/width.html).

Die `width` (und `height`) Media Features können als Bereiche verwendet werden und daher mit `min-` oder `max-` vorangestellt werden, um anzugeben, dass der angegebene Wert ein Minimum oder Maximum ist. Zum Beispiel, um die Farbe auf Blau zu ändern, wenn der Viewport 600 Pixel oder schmaler ist, verwenden Sie `max-width`:

```css
@media screen and (max-width: 600px) {
  body {
    color: blue;
  }
}
```

[Öffnen Sie dieses Beispiel](https://mdn.github.io/css-examples/learn/media-queries/max-width.html) im Browser oder [sehen Sie den Quellcode](https://github.com/mdn/css-examples/blob/main/learn/media-queries/max-width.html).

In der Praxis ist die Verwendung von Mindest- oder Höchstwerten viel nützlicher für responsives Design, sodass Sie `width` oder `height` selten allein verwenden werden.

Es gibt viele andere Media Features, für die Sie testen können, obwohl einige der neueren Features, die in den Levels 4 und 5 der Spezifikation für Media Queries eingeführt wurden, nur begrenzte Browserunterstützung haben. Jedes Feature ist auf MDN zusammen mit Informationen zur Browserunterstützung dokumentiert, und Sie können eine vollständige Liste unter [Verwendung von Media Queries: Syntax](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#syntax) finden.

#### Orientierung

Ein gut unterstütztes Media Feature ist `orientation`, das es uns ermöglicht, den Hochformat- oder Querformatmodus zu testen. Um die Körpertextfarbe zu ändern, wenn das Gerät sich im Querformat befindet, verwenden Sie die folgende Media Query.

```css
@media (orientation: landscape) {
  body {
    color: rebeccapurple;
  }
}
```

[Öffnen Sie dieses Beispiel](https://mdn.github.io/css-examples/learn/media-queries/orientation.html) im Browser oder [sehen Sie den Quellcode](https://github.com/mdn/css-examples/blob/main/learn/media-queries/orientation.html).

Eine Standard-Desktopansicht hat ein Querformat und ein Design, das in diesem Format gut funktioniert, funktioniert möglicherweise nicht so gut, wenn es auf einem Telefon oder Tablet im Hochformat angezeigt wird. Das Testen der Orientierung kann Ihnen helfen, ein Layout zu erstellen, das für Geräte im Hochformat optimiert ist.

#### Verwendung von Eingabegeräten

Als Teil der Spezifikation Level 4 wurde das Media Feature `hover` eingeführt. Dieses Feature bedeutet, dass Sie testen können, ob der Benutzer die Fähigkeit hat, über ein Element zu schweben, was im Wesentlichen bedeutet, dass er ein Zeigegerät verwendet; Touchscreen- und Tastaturnavigation schweben nicht.

```css
@media (hover: hover) {
  body {
    color: rebeccapurple;
  }
}
```

[Öffnen Sie dieses Beispiel](https://mdn.github.io/css-examples/learn/media-queries/hover.html) im Browser oder [sehen Sie den Quellcode](https://github.com/mdn/css-examples/blob/main/learn/media-queries/hover.html).

Wenn wir wissen, dass der Benutzer nicht schweben kann, könnten wir einige interaktive Features standardmäßig anzeigen. Für Benutzer, die schweben können, könnten wir wählen, sie verfügbar zu machen, wenn über einen Link geschwebt wird.

Ebenfalls in Level 4 ist das Media Feature `pointer`. Es nimmt drei mögliche Werte an, `none`, `fine` und `coarse`. Ein `fine`-Zeiger ist etwas wie eine Maus oder ein Trackpad. Er ermöglicht es dem Benutzer, ein kleines Gebiet präzise anzusteuern. Ein `coarse`-Zeiger ist Ihr Finger auf einem Touchscreen. Der Wert `none` bedeutet, dass der Benutzer kein Zeigegerät hat; vielleicht navigiert er nur mit der Tastatur oder mit Sprachbefehlen.

Die Verwendung von `pointer` kann Ihnen helfen, bessere Schnittstellen zu entwerfen, die auf die Art der Interaktion reagieren, die ein Benutzer mit einem Bildschirm hat. Zum Beispiel könnten Sie größere Trefferbereiche erstellen, wenn Sie wissen, dass der Benutzer das Gerät als Touchscreen verwendet.

#### Verwendung von Bereichssyntax

Ein häufiger Fall ist zu prüfen, ob die Viewport-Breite zwischen zwei Werten liegt:

```css
@media (min-width: 30em) and (max-width: 50em) {
  /* … */
}
```

Wenn Sie die Lesbarkeit verbessern möchten, können Sie die "Bereichs"-Syntax verwenden:

```css
@media (30em <= width <= 50em) {
  /* … */
}
```

In diesem Fall werden also Stile angewendet, wenn die Viewport-Breite zwischen `30em` und `50em` liegt.

## Komplexere Media Queries

Mit all den verschiedenen möglichen Media Queries möchten Sie vielleicht diese kombinieren oder Listen von Abfragen erstellen — jede von ihnen könnte zutreffen.

### "and"-Logik in Media Queries

Um Media Features zu kombinieren, können Sie `and` in ähnlicher Weise verwenden, wie wir oben `and` verwendet haben, um einen Medientyp und ein Feature zu kombinieren. Zum Beispiel möchten wir vielleicht `min-width` und `orientation` testen. Der Textkörper wird nur dann blau, wenn der Viewport mindestens 600 Pixel breit ist und das Gerät sich im Querformat befindet.

```css
@media screen and (min-width: 600px) and (orientation: landscape) {
  body {
    color: blue;
  }
}
```

[Öffnen Sie dieses Beispiel](https://mdn.github.io/css-examples/learn/media-queries/and.html) im Browser oder [sehen Sie den Quellcode](https://github.com/mdn/css-examples/blob/main/learn/media-queries/and.html).

### "or"-Logik in Media Queries

Wenn Sie eine Reihe von Abfragen haben, von denen jede zutreffen könnte, können Sie diese Abfragen durch Kommas trennen. Im folgenden Beispiel wird der Text blau, wenn der Viewport mindestens 600 Pixel breit ist ODER das Gerät sich im Querformat befindet. Wenn eine dieser Bedingungen zutrifft, entspricht die Abfrage.

```css
@media screen and (min-width: 600px), screen and (orientation: landscape) {
  body {
    color: blue;
  }
}
```

[Öffnen Sie dieses Beispiel](https://mdn.github.io/css-examples/learn/media-queries/or.html) im Browser oder [sehen Sie den Quellcode](https://github.com/mdn/css-examples/blob/main/learn/media-queries/or.html).

### "not"-Logik in Media Queries

Sie können eine gesamte Media Query negieren, indem Sie den `not`-Operator verwenden. Dies kehrt die Bedeutung der gesamten Media Query um. Im nächsten Beispiel wird der Text nur blau, wenn die Orientierung Hochformat ist.

```css
@media not (orientation: landscape) {
  body {
    color: blue;
  }
}
```

[Öffnen Sie dieses Beispiel](https://mdn.github.io/css-examples/learn/media-queries/not.html) im Browser oder [sehen Sie den Quellcode](https://github.com/mdn/css-examples/blob/main/learn/media-queries/not.html).

Sie können `not` auch verwenden, um spezifische Ausdrücke zu negieren.

```css
@media (not (width < 600px)) and (not (width > 1000px)) {
  body {
    color: blue;
  }
}
```

Dies gilt für die Stile, wenn die Viewport-Breite zwischen 600 und 1000 Pixeln liegt. Dies entspricht `(600px <= width <= 1000px)`.

## Wie man Breakpoints auswählt

In den frühen Tagen des Responsive Designs versuchten viele Designer, sehr spezifische Bildschirmgrößen anzuvisieren. Listen der Größen der Bildschirme von beliebten Handys und Tablets wurden veröffentlicht, damit Designs passend zu diesen Viewports erstellt werden konnten.

Es gibt jetzt viel zu viele Geräte mit einer großen Vielfalt an Größen, um dies praktikabel zu machen. Das bedeutet, dass anstelle von bestimmten Größen für alle Designs, ein besserer Ansatz darin besteht, das Design an dem Punkt zu ändern, an dem der Inhalt in irgendeiner Weise bricht. Vielleicht werden die Zeilenlängen viel zu lang, oder eine anders platzierte Sidebar wird eingequetscht und schwer zu lesen. Dies ist der Punkt, an dem Sie eine Media Query verwenden möchten, um das Design zu ändern, um es für den verfügbaren Raum besser zu machen. Dieser Ansatz bedeutet, dass es keine Rolle spielt, welche genauen Abmessungen das verwendete Gerät hat, jedes Intervall wird abgedeckt. Die Punkte, an denen eine Media Query eingeführt wird, werden als **Breakpoints** bezeichnet.

Der [Responsive Design-Modus](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) in den Firefox DevTools ist sehr nützlich, um herauszufinden, wo diese Breakpoints gesetzt werden sollten. Sie können einfach den Viewport kleiner und größer machen, um zu sehen, wo der Inhalt durch Hinzufügen einer Media Query und Anpassen des Designs verbessert werden könnte.

![Ein Screenshot eines Layouts in der mobilen Ansicht in den Firefox DevTools.](rwd-mode.png)

## Aktives Lernen: Mobile-First Responsive Design

Im Allgemeinen können Sie zwei Ansätze für ein Responsive Design verfolgen. Sie können mit Ihrer Desktop- oder Breitbildansicht beginnen und dann Breakpoints hinzufügen, um die Elemente zu verschieben, wenn der Viewport kleiner wird, oder Sie können mit der kleinsten Ansicht beginnen und Layouts hinzufügen, wenn der Viewport größer wird. Dieser zweite Ansatz wird als **Mobile-First** Responsive Design beschrieben und ist oft der beste Ansatz.

Die Ansicht für die kleinsten Geräte ist oft eine einfache einspaltige Inhaltsspalte, wie sie im normalen Fluss erscheint. Das bedeutet, dass Sie wahrscheinlich nicht viel Layouts für kleine Geräte benötigen – ordnen Sie Ihre Quelle gut und Sie haben standardmäßig ein lesbares Layout.

Die folgende Anleitung führt Sie durch diesen Ansatz mit einem sehr einfachen Layout. In einer Produktionsseite haben Sie wahrscheinlich mehr Dinge zu ändern innerhalb Ihrer Media Queries, jedoch wäre der Ansatz genau derselbe.

### Anleitung: Ein einfaches Mobile-First-Layout

Unser Ausgangspunkt ist ein HTML-Dokument mit etwas CSS, um den verschiedenen Teilen des Layouts Hintergrundfarben hinzuzufügen.

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

Wir haben keine Layoutänderungen vorgenommen, aber die Quelle des Dokuments so angeordnet, dass der Inhalt lesbar ist. Dies ist ein wichtiger erster Schritt und stellt sicher, dass der Inhalt, wenn er von einem Bildschirmlesegerät vorgelesen würde, verständlich wäre.

```html
<body>
  <div class="wrapper">
    <header>
      <nav>
        <ul>
          <li><a href="">Über</a></li>
          <li><a href="">Kontakt</a></li>
          <li><a href="">Das Team</a></li>
          <li><a href="">Blog</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <article>
        <div class="content">
          <h1>Gemüse!</h1>
          <p>…</p>
        </div>
        <aside class="related">
          <p>…</p>
        </aside>
      </article>

      <aside class="sidebar">
        <h2>Externe Gemüse-basierte Links</h2>
        <ul>
          <li>…</li>
        </ul>
      </aside>
    </main>

    <footer><p>&copy;2019</p></footer>
  </div>
</body>
```

Dieses einfache Layout funktioniert auch gut auf Mobilgeräten. Wenn wir das Layout im Responsive Design-Modus in den DevTools betrachten, sehen wir, dass es als einfache mobile Ansicht der Seite ziemlich gut funktioniert.

[Öffnen Sie Schritt 1](https://mdn.github.io/css-examples/learn/media-queries/step1.html) im Browser oder [sehen Sie den Quellcode](https://github.com/mdn/css-examples/blob/main/learn/media-queries/step1.html).

**Wenn Sie dieses Beispiel weiterverfolgen und implementieren möchten, machen Sie eine lokale Kopie von [step1.html](https://github.com/mdn/css-examples/blob/main/learn/media-queries/step1.html) auf Ihrem Computer.**

Von diesem Punkt aus beginnen Sie, die Ansicht im Responsive Design-Modus breiter zu ziehen, bis Sie sehen, dass die Zeilenlängen ziemlich lang werden und wir Platz für die Navigation haben, um in einer horizontalen Linie angezeigt zu werden. Hier werden wir unsere erste Media Query hinzufügen. Wir werden `em`s verwenden, da dies bedeutet, dass, wenn der Benutzer seine Textgröße vergrößert hat, der Breakpoint bei einer ähnlichen Zeilenlänge, aber breiterem Viewport erfolgt, als jemand mit einer kleineren Textgröße.

**Fügen Sie den unten stehenden Code am Ende Ihres CSS in step1.html hinzu.**

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

Dieses CSS gibt uns ein zweispaltiges Layout innerhalb des Artikels, mit dem Artikelauszug und den verwandten Informationen im `aside`-Element. Wir haben auch Flexbox verwendet, um die Navigation in eine Zeile zu setzen.

[Öffnen Sie Schritt 2](https://mdn.github.io/css-examples/learn/media-queries/step2.html) im Browser oder [sehen Sie den Quellcode](https://github.com/mdn/css-examples/blob/main/learn/media-queries/step2.html).

Lassen Sie uns die Breite weiter vergrößern, bis wir fühlen, dass genug Platz für die Sidebar ist, um ebenfalls eine neue Spalte zu bilden. Innerhalb einer Media Query machen wir das `main`-Element zu einem zweispaltigen Grid. Wir müssen dann den {{cssxref("margin-bottom")}} des Artikels entfernen, damit sich die beiden Sidebars miteinander ausrichten, und wir werden einen {{cssxref("border")}} an den oberen Rand der Fußzeile hinzufügen. Typischerweise sind diese kleinen Anpassungen die Art von Dingen, die Sie tun, um das Design an jedem Breakpoint gut aussehen zu lassen.

**Fügen Sie erneut den unten stehenden Code am Ende Ihres CSS in step1.html hinzu.**

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

[Öffnen Sie Schritt 3](https://mdn.github.io/css-examples/learn/media-queries/step3.html) im Browser oder [sehen Sie den Quellcode](https://github.com/mdn/css-examples/blob/main/learn/media-queries/step3.html).

Wenn Sie sich das letzte Beispiel in verschiedenen Breiten ansehen, können Sie sehen, wie das Design als einzelne Spalte, zwei Spalten oder drei Spalten je nach verfügbarer Breite reagiert und funktioniert. Dies ist ein sehr einfaches Beispiel für ein Mobile-First-Responsive-Design.

## Das Viewport-Meta-Tag

Wenn Sie sich den HTML-Quellcode in den obigen Beispielen ansehen, sehen Sie das folgende Element im Kopf des Dokuments:

```html
<meta name="viewport" content="width=device-width,initial-scale=1" />
```

Dies ist das [Viewport-Meta-Tag](/de/docs/Web/HTML/Viewport_meta_tag) – es existiert als Möglichkeit, zu steuern, wie mobile Browser Inhalte rendern. Dies ist nötig, weil die meisten mobilen Browser standardmäßig über ihre Viewport-Breite lügen. Nicht-responsive Websites sehen beim Rendern in einem schmalen Viewport allgemein wirklich schlecht aus, deshalb rendern mobile Browser die Seite in der Regel standardmäßig mit einer Viewport-Breite, die breiter ist als die tatsächliche Gerätebreite (normalerweise 980 Pixel), und verkleinern dann das gerenderte Ergebnis, damit es in die Anzeige passt.

Das ist alles gut und recht, aber es bedeutet, dass responsive Websites nicht wie erwartet funktionieren werden. Wenn die Viewport-Breite als 980 Pixel gemeldet wird, werden mobile Layouts (zum Beispiel erstellt mit einer Media Query von `@media screen and (max-width: 600px) { }`) nicht wie erwartet dargestellt.

Um diesem Problem abzuhelfen, beinhaltet ein Viewport-Meta-Tag wie das oben auf Ihrer Seite den Browser, die Inhalte statt mit einem 980 Pixel Viewport mit der tatsächlichen Gerätebreite zu rendern, und eine Standard-Initialskala für mehr Konsistenz einzustellen. Die Media Queries greifen dann wie erwartet.

Es gibt eine Reihe weiterer Optionen, die Sie innerhalb des `content`-Attributs des Viewport-Meta-Tags angeben können – siehe [Verwenden des Viewport-Meta-Tags zur Steuerung des Layouts auf mobilen Browsern](/de/docs/Web/HTML/Viewport_meta_tag) für weitere Details.

## Brauchen Sie wirklich eine Media Query?

Flexbox, Grid und Multi-Column-Layout bieten Ihnen Möglichkeiten, flexible und sogar responsive Komponenten zu erstellen, ohne eine Media Query zu benötigen. Es lohnt sich immer zu überlegen, ob diese Layoutmethoden erreichen können, was Sie wollen, ohne Media Queries hinzuzufügen. Zum Beispiel möchten Sie vielleicht eine Gruppe von Karten, die mindestens 200 Pixel breit sind, mit so vielen dieser 200 Pixel, wie in den Hauptartikel passen. Das kann mit einem Grid-Layout erreicht werden, ganz ohne Media Queries.

Dies könnte durch Folgendes erreicht werden:

```html
<ul class="grid">
  <li>
    <h2>Karte 1</h2>
    <p>…</p>
  </li>
  <li>
    <h2>Karte 2</h2>
    <p>…</p>
  </li>
  <li>
    <h2>Karte 3</h2>
    <p>…</p>
  </li>
  <li>
    <h2>Karte 4</h2>
    <p>…</p>
  </li>
  <li>
    <h2>Karte 5</h2>
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

[Öffnen Sie das Grid-Layout-Beispiel](https://mdn.github.io/css-examples/learn/media-queries/grid.html) im Browser oder [sehen Sie den Quellcode](https://github.com/mdn/css-examples/blob/main/learn/media-queries/grid.html).

Mit dem geöffneten Beispiel in Ihrem Browser machen Sie den Bildschirm breiter und schmaler, um zu sehen, wie sich die Anzahl der Spalten-Tracks ändert. Das Schöne an dieser Methode ist, dass Grid nicht die Viewport-Breite betrachtet, sondern die Breite, die es für diesen Bestandteil zur Verfügung hat. Es mag seltsam erscheinen, einen Abschnitt über Media Queries abzuschließen mit dem Vorschlag, dass Sie vielleicht gar keine benötigen! In der Praxis werden Sie jedoch feststellen, dass eine gute Nutzung moderner Layoutmethoden, verbessert durch Media Queries, die besten Ergebnisse liefert.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie finden einen Test, um zu überprüfen, ob Sie diese Informationen vor dem Weitermachen behalten haben — siehe [Testen Sie Ihre Fähigkeiten: Responsives Webdesign und Media Queries](/de/docs/Learn/CSS/CSS_layout/rwd_skills).

## Zusammenfassung

In dieser Lektion haben Sie etwas über Media Queries gelernt und auch entdeckt, wie man sie in der Praxis verwendet, um ein Mobile-First-Responsive-Design zu erstellen.

Sie könnten den Ausgangspunkt, den wir geschaffen haben, nutzen, um mehr Media Queries zu testen. Zum Beispiel könnten Sie die Größe der Navigation ändern, wenn Sie feststellen, dass der Besucher einen groben Zeiger benutzt, indem Sie das `pointer`-Media-Feature verwenden.

Sie könnten auch experimentieren, indem Sie verschiedene Komponenten hinzufügen und sehen, ob die Hinzufügung einer Media Query oder die Nutzung einer Layoutmethode wie Flexbox oder Grid der geeignetste Weg ist, um die Komponenten responsiv zu gestalten. Sehr oft gibt es kein Richtig oder Falsch – Sie sollten experimentieren und sehen, was am besten für Ihr Design und Ihre Inhalte funktioniert.

{{PreviousMenuNext("Learn/CSS/CSS_layout/Responsive_Design", "Learn/CSS/CSS_layout/Legacy_Layout_Methods", "Learn/CSS/CSS_layout")}}
