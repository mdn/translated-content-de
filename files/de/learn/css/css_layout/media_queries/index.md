---
title: Einsteigerleitfaden zu Media Queries
slug: Learn/CSS/CSS_layout/Media_queries
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{learnsidebar}}{{PreviousMenuNext("Learn/CSS/CSS_layout/Responsive_Design", "Learn/CSS/CSS_layout/Legacy_Layout_Methods", "Learn/CSS/CSS_layout")}}

Die **CSS Media Query** bietet Ihnen eine Möglichkeit, CSS nur dann anzuwenden, wenn der Browser und das Geräteumfeld einer von Ihnen festgelegten Regel entsprechen, zum Beispiel "Viewport ist breiter als 480 Pixel". Media Queries sind ein wesentlicher Bestandteil des responsiven Webdesigns, da sie es Ihnen ermöglichen, je nach Größe des Viewports unterschiedliche Layouts zu erstellen. Sie können jedoch auch verwendet werden, um andere Aspekte des Umfeldes zu erkennen, in dem Ihre Website läuft, zum Beispiel, ob der Benutzer einen Touchscreen anstelle einer Maus verwendet. In dieser Lektion lernen Sie zunächst die in Media Queries verwendete Syntax kennen und dann, wie Sie sie in einem praktischen Beispiel einsetzen können, das zeigt, wie ein einfaches Design responsive gemacht werden kann.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlagen von HTML (siehe
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >) und eine Vorstellung davon, wie CSS funktioniert (siehe
        <a href="/de/docs/Learn/CSS/First_steps">CSS Erste Schritte</a> und
        <a href="/de/docs/Learn/CSS/Building_blocks">CSS Bausteine</a
        >.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Verstehen, wie man Media Queries verwendet und den häufigsten Ansatz dafür, um responsive Designs zu erstellen.
      </td>
    </tr>
  </tbody>
</table>

## Grundlagen der Media Query

Die einfachste Syntax einer Media Query sieht so aus:

```css
@media media-type and (media-feature-rule) {
  /* CSS rules go here */
}
```

Sie besteht aus:

- Einem Medientyp, der dem Browser mitteilt, für welche Art von Medien dieser Code gedacht ist (z. B. Druck oder Bildschirm).
- Einer Media-Expression, die eine Regel oder ein Test ist, der erfüllt sein muss, damit das enthaltene CSS angewendet wird.
- Einer Reihe von CSS-Regeln, die angewendet werden, wenn der Test bestanden wird und der Medientyp korrekt ist.

### Medientypen

Die möglichen Medientypen, die Sie angeben können, sind:

- `all`
- `print`
- `screen`

Die folgende Media Query setzt den Textkörper nur auf 12pt, wenn die Seite gedruckt wird. Sie wird nicht angewendet, wenn die Seite in einem Browser geladen ist.

```css
@media print {
  body {
    font-size: 12pt;
  }
}
```

> [!NOTE]
> Der hier verwendete Medientyp unterscheidet sich von dem sogenannten [MIME-Typ](/de/docs/Glossary/MIME_type).

> [!NOTE]
> In der Spezifikation der Media Queries Level 3 waren eine Reihe weiterer Medientypen definiert; diese wurden jedoch verworfen und sollten vermieden werden.

> [!NOTE]
> Medientypen sind optional; wenn Sie in Ihrer Media Query keinen Medientyp angeben, wird die Media Query standardmäßig für alle Medientypen gelten.

### Regeln für Media-Features

Nach der Angabe des Typs können Sie dann mit einer Regel ein Media-Feature anvisieren.

#### Breite und Höhe

Das Feature, das wir am häufigsten zur Erstellung responsiver Designs erkennen (und das breit unterstützte Browserunterstützung hat), ist die Viewport-Breite. Wir können CSS anwenden, wenn der Viewport über oder unter einer bestimmten Breite — oder genau auf einer Breite — liegt, indem wir die Media-Features `min-width`, `max-width` und `width` verwenden.

Diese Features werden verwendet, um Layouts zu erstellen, die auf verschiedene Bildschirmgrößen reagieren. Um beispielsweise die Textfarbe des Körpers in rot zu ändern, wenn der Viewport genau 600 Pixel beträgt, würden Sie die folgende Media Query verwenden.

```css
@media screen and (width: 600px) {
  body {
    color: red;
  }
}
```

[Öffnen Sie dieses Beispiel](https://mdn.github.io/css-examples/learn/media-queries/width.html) im Browser oder [sehen Sie sich den Quellcode an](https://github.com/mdn/css-examples/blob/main/learn/media-queries/width.html).

Die Media-Features `width` (und `height`) können als Bereiche verwendet werden und können daher mit `min-` oder `max-` vorangestellt werden, um anzugeben, dass der angegebene Wert ein Mindestwert oder ein Höchstwert ist. Um beispielsweise die Farbe blau zu machen, wenn der Viewport 600 Pixel oder schmaler ist, verwenden Sie `max-width`:

```css
@media screen and (max-width: 600px) {
  body {
    color: blue;
  }
}
```

[Öffnen Sie dieses Beispiel](https://mdn.github.io/css-examples/learn/media-queries/max-width.html) im Browser oder [sehen Sie sich den Quellcode an](https://github.com/mdn/css-examples/blob/main/learn/media-queries/max-width.html).

In der Praxis ist die Verwendung von Mindest- oder Höchstwerten für responsives Design viel nützlicher, daher werden Sie selten `width` oder `height` alleine verwenden.

Es gibt viele andere Media-Features, auf die Sie testen können, obwohl einige der neueren Features, die in den Stufen 4 und 5 der Media Query-Spezifikation eingeführt wurden, begrenzte Browserunterstützung haben. Jedes Feature ist auf MDN dokumentiert, zusammen mit Informationen zur Browserunterstützung. Eine vollständige Liste finden Sie unter [Verwendung von Media Queries: Syntax](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#syntax).

#### Orientierung

Ein gut unterstütztes Media-Feature ist `orientation`, mit dem wir im Hoch- oder Querformat testen können. Um die Textfarbe des Körpers zu ändern, wenn sich das Gerät im Querformat befindet, verwenden Sie die folgende Media Query.

```css
@media (orientation: landscape) {
  body {
    color: rebeccapurple;
  }
}
```

[Öffnen Sie dieses Beispiel](https://mdn.github.io/css-examples/learn/media-queries/orientation.html) im Browser oder [sehen Sie sich den Quellcode an](https://github.com/mdn/css-examples/blob/main/learn/media-queries/orientation.html).

Eine Standard-Desktopansicht hat eine Querformat, und ein Design, das in dieser Orientierung gut funktioniert, funktioniert möglicherweise nicht so gut, wenn es auf einem Telefon oder Tablet im Hochformat angesehen wird. Das Testen der Orientierung kann Ihnen helfen, ein Layout zu erstellen, das für Geräte im Hochformat optimiert ist.

#### Verwendung von Zeigegeräten

Im Rahmen der Level 4-Spezifikation wurde das Media-Feature `hover` eingeführt. Dieses Feature bedeutet, dass Sie testen können, ob der Benutzer in der Lage ist, über ein Element zu schweben, was im Wesentlichen bedeutet, dass er irgendein Zeigegerät verwendet; Touchscreen und Tastaturnavigation schweben nicht.

```css
@media (hover: hover) {
  body {
    color: rebeccapurple;
  }
}
```

[Öffnen Sie dieses Beispiel](https://mdn.github.io/css-examples/learn/media-queries/hover.html) im Browser oder [sehen Sie sich den Quellcode an](https://github.com/mdn/css-examples/blob/main/learn/media-queries/hover.html).

Wenn wir wissen, dass der Benutzer nicht schweben kann, könnten wir einige interaktive Funktionen standardmäßig anzeigen. Für Benutzer, die schweben können, könnten wir sie beim Überfahren eines Links verfügbar machen.

Auch in Level 4 ist das Media-Feature `pointer`. Es nimmt drei mögliche Werte an: `none`, `fine` und `coarse`. Ein `fine` Zeiger ist etwas wie eine Maus oder ein Trackpad. Er ermöglicht es dem Benutzer, ein kleines Gebiet präzise anzuzielen. Ein `coarse` Zeiger ist Ihr Finger auf einem Touchscreen. Der Wert `none` bedeutet, dass der Benutzer kein Zeigegerät hat; vielleicht navigiert er nur mit der Tastatur oder mit Sprachbefehlen.

Die Verwendung von `pointer` kann Ihnen helfen, bessere Schnittstellen zu entwerfen, die auf die Art der Interaktion reagieren, die ein Benutzer mit einem Bildschirm hat. Beispielsweise könnten Sie größere Trefferbereiche erstellen, wenn Sie wissen, dass der Benutzer mit dem Gerät als Touchscreen interagiert.

#### Verwendung von Bereichssyntax

Ein häufiger Fall ist zu überprüfen, ob die Viewport-Breite zwischen zwei Werten liegt:

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

In diesem Fall werden die Stile angewendet, wenn die Viewport-Breite zwischen `30em` und `50em` liegt.

## Komplexere Media Queries

Mit all den verschiedenen möglichen Media Queries möchten Sie diese möglicherweise kombinieren oder Listen von Abfragen erstellen – von denen jede übereinstimmen könnte.

### "und"-Logik in Media Queries

Um Media-Features zu kombinieren, können Sie `and` verwenden, ähnlich wie wir `and` oben verwendet haben, um einen Medientyp und ein Feature zu kombinieren. Beispielsweise möchten wir möglicherweise eine `min-width` und `orientation` testen. Der Textkörper wird nur blau, wenn der Viewport mindestens 600 Pixel breit ist und sich das Gerät im Querformat befindet.

```css
@media screen and (min-width: 600px) and (orientation: landscape) {
  body {
    color: blue;
  }
}
```

[Öffnen Sie dieses Beispiel](https://mdn.github.io/css-examples/learn/media-queries/and.html) im Browser oder [sehen Sie sich den Quellcode an](https://github.com/mdn/css-examples/blob/main/learn/media-queries/and.html).

### "oder"-Logik in Media Queries

Wenn Sie eine Reihe von Abfragen haben, von denen jede übereinstimmen könnte, können Sie diese Abfragen durch Kommas trennen. Im folgenden Beispiel wird der Text blau, wenn der Viewport mindestens 600 Pixel breit ist ODER das Gerät im Querformat ist. Wenn eines dieser Dinge wahr ist, stimmt die Abfrage überein.

```css
@media screen and (min-width: 600px), screen and (orientation: landscape) {
  body {
    color: blue;
  }
}
```

[Öffnen Sie dieses Beispiel](https://mdn.github.io/css-examples/learn/media-queries/or.html) im Browser oder [sehen Sie sich den Quellcode an](https://github.com/mdn/css-examples/blob/main/learn/media-queries/or.html).

### "nicht"-Logik in Media Queries

Sie können eine gesamte Media Query negieren, indem Sie den `not`-Operator verwenden. Dies kehrt die Bedeutung der gesamten Media Query um. Daher wird im nächsten Beispiel der Text nur dann blau, wenn die Orientierung Hochformat ist.

```css
@media not (orientation: landscape) {
  body {
    color: blue;
  }
}
```

[Öffnen Sie dieses Beispiel](https://mdn.github.io/css-examples/learn/media-queries/not.html) im Browser oder [sehen Sie sich den Quellcode an](https://github.com/mdn/css-examples/blob/main/learn/media-queries/not.html).

Sie können auch `not` verwenden, um bestimmte Ausdrücke zu negieren.

```css
@media (not (width < 600px)) and (not (width > 1000px)) {
  body {
    color: blue;
  }
}
```

Dies wendet die Stile an, wenn die Viewport-Breite zwischen 600 und 1000 Pixel liegt. Dies ist gleichwertig mit `(600px <= width <= 1000px)`.

## Wie man Breakpoints wählt

In den frühen Tagen des responsiven Designs versuchten viele Designer, sehr spezifische Bildschirmgrößen anzusprechen. Listen der Größen der Bildschirme beliebter Telefone und Tablets wurden veröffentlicht, damit Designs erstellt werden konnten, die genau zu diesen Viewports passen.

Es gibt jetzt viel zu viele Geräte mit einer großen Auswahl an Größen, um das realisierbar zu machen. Das bedeutet, dass anstatt spezifische Größen für alle Designs anzupassen, ein besserer Ansatz darin besteht, das Design an der Stelle zu ändern, an der der Inhalt in irgendeiner Weise bricht. Vielleicht werden die Zeilenlängen viel zu lang, oder eine ausdrücklich gestaltete Seitenleiste wird zerdrückt und schwer zu lesen. Das ist der Punkt, an dem Sie eine Media Query verwenden möchten, um das Design an ein besseres für den verfügbaren Raum anzupassen. Dieser Ansatz bedeutet, dass es egal ist, welche genauen Abmessungen das verwendete Gerät hat, jede Reichweite wird abgedeckt. Die Punkte, an denen eine Media Query eingeführt wird, werden als **Breakpoints** bezeichnet.

Der [Responsive Design Modus](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) in den Firefox DevTools ist sehr nützlich, um herauszufinden, wo diese Breakpoints platziert werden sollten. Sie können den Viewport leicht verkleinern und vergrößern, um zu sehen, wo der Inhalt durch Hinzufügen einer Media Query und Optimierung des Designs verbessert werden könnte.

![Ein Screenshot eines Layouts in einer mobilen Ansicht in Firefox DevTools.](rwd-mode.png)

## Aktives Lernen: Mobile First Responsive Design

Im Großen und Ganzen können Sie zwei Ansätze für ein responsives Design verfolgen. Sie können mit Ihrer Desktop- oder breitesten Ansicht beginnen und dann Breakpoints hinzufügen, um Dinge zu ändern, während der Viewport kleiner wird, oder Sie können mit der kleinsten Ansicht beginnen und Layout hinzufügen, während der Viewport größer wird. Diese zweite Methode wird als **Mobile First** responsives Design beschrieben und ist oft der beste Ansatz.

Die Ansicht für die kleinsten Geräte ist oft eine einfache einspaltige Darstellung des Inhalts, wie sie im normalen Fluss erscheint. Das bedeutet, dass Sie wahrscheinlich nicht viel Layout für kleine Geräte durchführen müssen — ordnen Sie Ihre Quelle gut und Sie werden standardmäßig ein lesbares Layout haben.

Der folgende Rundgang bringt Sie durch diesen Ansatz mit einem sehr einfachen Layout. Auf einer Produktionsseite werden Sie wahrscheinlich mehr Dinge haben, die innerhalb Ihrer Media Queries angepasst werden müssen, aber der Ansatz wäre genau derselbe.

### Schritt-für-Schritt-Anleitung: Ein einfaches Mobile-First-Layout

Unser Ausgangspunkt ist ein HTML-Dokument mit etwas CSS, das angewendet wird, um den verschiedenen Teilen des Layouts Hintergrundfarben hinzuzufügen.

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

Wir haben keine Layoutänderungen vorgenommen, aber die Quelle des Dokuments ist so geordnet, dass der Inhalt lesbar ist. Dies ist ein wichtiger erster Schritt, der sicherstellt, dass, wenn der Inhalt von einem Screenreader vorgelesen würde, er verständlich wäre.

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

Dieses einfache Layout funktioniert auch gut auf mobilen Geräten. Wenn wir das Layout im Responsive Design Modus in den DevTools ansehen, sehen wir, dass es als einfache mobile Ansicht der Site ziemlich gut funktioniert.

[Öffnen Sie Schritt 1](https://mdn.github.io/css-examples/learn/media-queries/step1.html) im Browser, oder [sehen Sie sich den Quellcode an](https://github.com/mdn/css-examples/blob/main/learn/media-queries/step1.html).

**Wenn Sie diesem Beispiel folgen und es selbst implementieren möchten, machen Sie eine lokale Kopie von [step1.html](https://github.com/mdn/css-examples/blob/main/learn/media-queries/step1.html) auf Ihrem Computer.**

Von diesem Punkt aus beginnen Sie, die Ansicht des Responsive Design Modus zu erweitern, bis Sie sehen können, dass die Zeilenlängen recht lang werden und wir Platz haben, die Navigation in einer horizontalen Linie anzuzeigen. Hier werden wir unsere erste Media Query hinzufügen. Wir verwenden `em`, da dies bedeutet, dass, wenn der Benutzer seine Textgröße erhöht hat, der Breakpoint bei einer ähnlichen Zeilenlänge aber einem breiteren Viewport geschieht, als bei jemandem mit einer kleineren Textgröße.

**Fügen Sie den folgenden Code in das Ende Ihres CSS für step1.html ein.**

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

Dieses CSS gibt uns ein zweispaltiges Layout innerhalb des Artikels, des artikulierten Inhalts und der verwandten Informationen im Aside-Element. Wir haben auch Flexbox verwendet, um die Navigation in eine Reihe zu setzen.

[Öffnen Sie Schritt 2](https://mdn.github.io/css-examples/learn/media-queries/step2.html) im Browser, oder [sehen Sie sich den Quellcode an](https://github.com/mdn/css-examples/blob/main/learn/media-queries/step2.html).

Fahren wir fort, die Breite zu erweitern, bis wir denken, dass genug Platz für die Seitenleiste vorhanden ist, um ebenfalls eine neue Spalte zu bilden. Innerhalb einer Media Query machen wir das main-Element zu einem zweispaltigen Gitter. Dann müssen wir den {{cssxref("margin-bottom")}} auf dem Artikel entfernen, damit die beiden Seitenleisten miteinander ausgerichtet sind, und wir werden eine {{cssxref("border")}} auf die Oberseite der Fußzeile hinzufügen. Typischerweise sind diese kleinen Anpassungen die Art von Dingen, die Sie tun werden, um das Design an jedem Breakpoint gut aussehen zu lassen.

**Fügen Sie wieder den folgenden Code in das Ende Ihres CSS für step1.html ein.**

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

[Öffnen Sie Schritt 3](https://mdn.github.io/css-examples/learn/media-queries/step3.html) im Browser, oder [sehen Sie sich den Quellcode an](https://github.com/mdn/css-examples/blob/main/learn/media-queries/step3.html).

Wenn Sie sich das endgültige Beispiel in verschiedenen Breiten ansehen, können Sie sehen, wie das Design als Einzelspalte, zweispaltig oder dreispaltig funktioniert, je nach verfügbarer Breite. Dies ist ein sehr einfaches Beispiel für ein Mobile First Responsive Design.

## Das Viewport-Meta-Tag

Wenn Sie sich den HTML-Quellcode im obigen Beispiel ansehen, sehen Sie das folgende Element im Kopf des Dokuments:

```html
<meta name="viewport" content="width=device-width,initial-scale=1" />
```

Dies ist das [Viewport-Meta-Tag](/de/docs/Web/HTML/Viewport_meta_tag) — es existiert, um zu kontrollieren, wie mobile Browser Inhalte rendern. Dies ist erforderlich, da die meisten mobilen Browser standardmäßig über ihre Viewport-Breite lügen. Nicht-responsive Seiten sehen auf einem schmalen Viewport allgemein wirklich schlecht aus. Deshalb rendern mobile Browser die Website in der Regel standardmäßig mit einer Viewport-Breite, die breiter ist als die tatsächliche Gerätebreite (normalerweise 980 Pixel), und verkleinern dann das gerenderte Ergebnis, sodass es in die Anzeige passt.

Das ist alles gut und schön, bedeutet jedoch, dass responsive Seiten nicht wie erwartet funktionieren. Wenn die Viewport-Breite als 980 Pixel gemeldet wird, werden mobile Layouts (beispielsweise erstellt mit einer Media Query von `@media screen and (max-width: 600px) { }`) nicht wie erwartet gerendert.

Um dies zu beheben, gibt das Hinzufügen eines Viewport-Meta-Tags wie dem oben auf Ihrer Seite dem Browser an: "Rendere nicht den Inhalt mit einem 980-Pixel-Viewport — rendere ihn stattdessen mit der realen Gerätebreite und setze eine standardmäßige Anfangsmaßstabsebene für bessere Konsistenz." Die Media Queries kommen dann wie erwartet zum Einsatz.

Es gibt eine Reihe anderer Optionen, die Sie im `content`-Attribut des Viewport-Meta-Tags angeben können — siehe [Verwendung des Viewport-Meta-Tags zur Steuerung des Layouts in mobilen Browsern](/de/docs/Web/HTML/Viewport_meta_tag) für mehr Details.

## Brauchen Sie wirklich eine Media Query?

Flexbox, Grid und Multi-Column-Layout bieten Ihnen Möglichkeiten, flexible und sogar responsive Komponenten zu erstellen, ohne eine Media Query zu benötigen. Es lohnt sich immer, zu überlegen, ob diese Layoutmethoden das erreichen könnten, was Sie wollen, ohne Media Queries hinzuzufügen. Beispielsweise möchten Sie vielleicht eine Reihe von Karten, die mindestens 200 Pixel breit sind, mit so vielen dieser 200 Pixel, wie in den Hauptartikel passen. Dies kann mit Grid-Layout erreicht werden, ganz ohne Media Queries.

Dies könnte durch Folgendes erreicht werden:

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

[Öffnen Sie das Grid-Layout-Beispiel](https://mdn.github.io/css-examples/learn/media-queries/grid.html) im Browser, oder [sehen Sie sich den Quellcode an](https://github.com/mdn/css-examples/blob/main/learn/media-queries/grid.html).

Mit dem geöffneten Beispiel in Ihrem Browser, machen Sie den Bildschirm breiter und schmaler, um zu sehen, wie sich die Anzahl der Spaltenfelder ändert. Das schöne an dieser Methode ist, dass Grid nicht auf die Viewport-Breite schaut, sondern die Breite betrachtet, die ihm für diese Komponente zur Verfügung steht. Es mag seltsam erscheinen, einen Abschnitt über Media Queries damit zu beenden, dass man vorschlägt, dass man vielleicht gar keine braucht! In der Praxis werden Sie jedoch feststellen, dass eine gute Nutzung moderner Layoutmethoden, angereichert mit Media Queries, die besten Ergebnisse erzielt.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einen Test finden, der überprüft, ob Sie diese Informationen behalten haben, bevor Sie zum nächsten Punkt übergehen — siehe [Testen Sie Ihre Fähigkeiten: Responsives Webdesign und Media Queries](/de/docs/Learn/CSS/CSS_layout/rwd_skills).

## Zusammenfassung

In dieser Lektion haben Sie über Media Queries gelernt und auch entdeckt, wie man sie in der Praxis verwendet, um ein Mobile First Responsive Design zu erstellen.

Sie könnten den von uns erstellten Ausgangspunkt verwenden, um mehr Media Queries zu testen. Zum Beispiel könnten Sie die Größe der Navigation ändern, wenn Sie feststellen, dass der Besucher einen groben Zeiger hat, indem Sie das Media-Feature `pointer` verwenden.

Sie könnten auch mit dem Hinzufügen verschiedener Komponenten experimentieren und sehen, ob die Hinzufügung einer Media Query oder die Verwendung einer Layoutmethode wie Flexbox oder Grid der geeignetste Weg ist, um die Komponenten responsive zu machen. Sehr oft gibt es keinen richtigen oder falschen Weg — Sie sollten experimentieren und sehen, was am besten für Ihr Design und Ihren Inhalt funktioniert.

{{PreviousMenuNext("Learn/CSS/CSS_layout/Responsive_Design", "Learn/CSS/CSS_layout/Legacy_Layout_Methods", "Learn/CSS/CSS_layout")}}
