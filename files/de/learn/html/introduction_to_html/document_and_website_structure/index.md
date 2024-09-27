---
title: Dokument- und Website-Struktur
slug: Learn/HTML/Introduction_to_HTML/Document_and_website_structure
l10n:
  sourceCommit: bd4edfc4dc2a3fd78841c0f9cd843cabf072a61e
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Advanced_text_formatting", "Learn/HTML/Introduction_to_HTML/Debugging_HTML", "Learn/HTML/Introduction_to_HTML")}}

Zusätzlich zur Definition einzelner Teile Ihrer Seite (wie "ein Absatz" oder "ein Bild") bietet [HTML](/de/docs/Glossary/HTML) auch eine Reihe von Blockelementen, die zum Definieren von Bereichen Ihrer Website verwendet werden (wie "der Header", "das Navigationsmenü", "die Hauptinhaltsspalte"). Dieser Artikel untersucht, wie man eine grundlegende Website-Struktur plant und das HTML schreibt, um diese Struktur darzustellen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende HTML-Kenntnisse, wie in
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
          >Erste Schritte mit HTML</a
        > behandelt. HTML-Textformatierung, wie in
        <a
          href="/de/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals"
          >HTML-Textgrundlagen</a
        > behandelt. Wie Hyperlinks funktionieren, wie in
        <a
          href="/de/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks"
          >Erstellen von Hyperlinks</a
        > behandelt.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie Sie Ihr Dokument mithilfe semantischer Tags strukturieren und wie Sie die Struktur einer einfachen Website erarbeiten.
      </td>
    </tr>
  </tbody>
</table>

## Grundlegende Bereiche eines Dokuments

Webseiten können und werden sehr unterschiedlich aussehen, aber sie neigen dazu, ähnliche Standardkomponenten zu teilen, es sei denn, die Seite zeigt ein Vollbildvideo oder -spiel, ist Teil eines Kunstprojekts oder ist einfach schlecht strukturiert:

- header:
  - : In der Regel ein großer Streifen oben mit einer großen Überschrift, einem Logo und vielleicht einer Tagline. Dies bleibt normalerweise von einer Webseite zur anderen gleich.
- Navigationsleiste:
  - : Links zu den Hauptbereichen der Website; normalerweise durch Menütasten, Links oder Tabs dargestellt. Wie der Header bleibt auch dieser Inhalt normalerweise von einer Webseite zur anderen konsistent – eine inkonsistente Navigation auf Ihrer Website würde nur zu verwirrten, frustrierten Benutzern führen. Viele Webdesigner betrachten die Navigationsleiste als Teil des Headers und nicht als eigenständige Komponente, aber das ist keine Anforderung. In der Tat argumentieren einige auch, dass es für die [Barrierefreiheit](/de/docs/Learn/Accessibility) besser ist, wenn die beiden getrennt sind, da Screenreader die beiden Funktionen besser lesen können, wenn sie getrennt sind.
- Hauptinhalt:
  - : Ein großer Bereich in der Mitte, der den größten Teil des einzigartigen Inhalts einer bestimmten Webseite enthält, zum Beispiel das Video, das Sie ansehen möchten, oder die Hauptgeschichte, die Sie lesen, oder die Karte, die Sie anzeigen möchten, oder die Nachrichtenüberschriften usw. Dies ist der einzige Teil der Website, der definitiv von Seite zu Seite variieren wird!
- Seitenleiste:
  - : Einige periphere Informationen, Links, Zitate, Anzeigen usw. Normalerweise ist dies kontextabhängig zu dem, was im Hauptinhalt enthalten ist (zum Beispiel auf einer Nachrichtenartikel-Seite könnte die Seitenleiste die Biografie des Autors oder Links zu verwandten Artikeln enthalten), aber es gibt auch Fälle, in denen Sie einige wiederkehrende Elemente wie ein sekundäres Navigationssystem finden.
- footer:
  - : Ein Streifen unten auf der Seite, der im Allgemeinen Kleingedrucktes, Urheberrechtshinweise oder Kontaktinformationen enthält. Es ist ein Ort, um gemeinsame Informationen (wie den Header) zu platzieren, aber normalerweise sind diese Informationen nicht kritisch oder sekundär für die Website selbst. Der Footer wird auch manchmal für [SEO](/de/docs/Glossary/SEO)-Zwecke verwendet, indem Links bereitgestellt werden, um schnellen Zugriff auf beliebte Inhalte zu ermöglichen.

Eine "typische Website" könnte ungefähr so strukturiert sein:

![Ein einfaches Website-Strukturbeispiel mit einer Hauptüberschrift, einem Navigationsmenü, Hauptinhalt, einer Seitenleiste und einem Fußbereich.](sample-website.png)

> [!NOTE]
> Das obige Bild veranschaulicht die Hauptbereiche eines Dokuments, die Sie mit HTML definieren können. Das _Aussehen_ der hier gezeigten Seite – einschließlich Layout, Farben und Schriftarten – wird jedoch durch die Anwendung von [CSS](/de/docs/Learn/CSS) auf das HTML erreicht.
>
> In diesem Modul unterrichten wir kein CSS, aber sobald Sie ein Verständnis der HTML-Grundlagen haben, versuchen Sie, in unser Modul [CSS erste Schritte](/de/docs/Learn/CSS/First_steps) einzutauchen, um zu lernen, wie Sie Ihre Site stylen können.

## HTML zur Strukturierung von Inhalten

Das einfache oben gezeigte Beispiel ist nicht hübsch, aber es ist perfekt geeignet, um ein typisches Website-Layout-Beispiel zu illustrieren. Einige Websites haben mehr Spalten, einige sind viel komplexer, aber Sie verstehen das Konzept. Mit dem richtigen CSS könnten Sie so ziemlich jedes Element verwenden, um die verschiedenen Abschnitte zu ummanteln und es so aussehen zu lassen, wie Sie es möchten, aber wie bereits besprochen, müssen wir Semantik respektieren und **das richtige Element für den richtigen Job verwenden**.

Dies liegt daran, dass visuelle Darstellungen nicht die ganze Geschichte erzählen. Wir verwenden Farbe und Schriftgröße, um die Aufmerksamkeit sehender Benutzer auf die nützlichsten Teile des Inhalts zu lenken, wie das Navigationsmenü und verwandte Links. Aber was ist mit beispielsweise sehbehinderten Menschen, die möglicherweise Konzepte wie "pink" und "große Schrift" nicht sehr nützlich finden?

> **Hinweis:** [Etwa 8 % der Männer und 0,5 % der Frauen](https://www.color-blindness.com/) sind farbenblind; oder, anders ausgedrückt, ungefähr 1 von 12 Männern und 1 von 200 Frauen. Blinde und sehbehinderte Menschen stellen etwa 4-5 % der Weltbevölkerung dar (2015 gab es [940 Millionen Menschen mit irgendeinem Grad an Sehverlust](https://en.wikipedia.org/wiki/Visual_impairment), während die Gesamtbevölkerung [etwa 7,5 Milliarden](https://en.wikipedia.org/wiki/World_human_population#/media/File:World_population_history.svg) betrug).

In Ihrem HTML-Code können Sie Inhaltsbereiche basierend auf ihrer _Funktionalität_ markieren — Sie können Elemente verwenden, die die oben beschriebenen Inhaltsbereiche eindeutig repräsentieren, und unterstützende Technologien wie Screenreader können diese Elemente erkennen und bei Aufgaben wie „finde die Hauptnavigation” oder „finde den Hauptinhalt” helfen. Wie bereits früher im Kurs erwähnt, gibt es eine Reihe von [Konsequenzen, wenn man nicht die richtige Elementstruktur und Semantik für den richtigen Job verwendet](/de/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals#why_do_we_need_structure).

Um eine solche semantische Auszeichnung umzusetzen, bietet HTML spezielle Tags, die Sie zur Darstellung solcher Abschnitte verwenden können, zum Beispiel:

- **header:** {{htmlelement("header")}}.
- **Navigationsleiste:** {{htmlelement("nav")}}.
- **Hauptinhalt:** {{htmlelement("main")}}, mit verschiedenen Inhaltsteilbereichen, die durch {{HTMLElement("article")}}, {{htmlelement("section")}} und {{htmlelement("div")}}-Elemente dargestellt werden.
- **Seitenleiste:** {{htmlelement("aside")}}; oft innerhalb von {{htmlelement("main")}} platziert.
- **footer:** {{htmlelement("footer")}}.

### Aktives Lernen: den Code unseres Beispiels erkunden

Unser oben gesehenes Beispiel wird durch den folgenden Code dargestellt (Sie können das Beispiel auch in unserem [GitHub-Repository finden](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/document_and_website_structure/index.html)). Wir möchten, dass Sie sich das obige Beispiel ansehen und dann die untenstehende Liste ansehen, um zu sehen, welche Teile welchen Abschnitt des visuellen Inhalts ausmachen.

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />

    <title>My page title</title>
    <link
      href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300|Sonsie+One"
      rel="stylesheet" />
    <link rel="stylesheet" href="style.css" />
  </head>

  <body>
    <!-- Here is our main header that is used across all the pages of our website -->

    <header>
      <h1>Header</h1>
    </header>

    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Our team</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <!-- A Search form is another common non-linear way to navigate through a website. -->

      <form>
        <input type="search" name="q" placeholder="Search query" />
        <input type="submit" value="Go!" />
      </form>
    </nav>

    <!-- Here is our page's main content -->
    <main>
      <!-- It contains an article -->
      <article>
        <h2>Article heading</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Donec a diam
          lectus. Set sit amet ipsum mauris. Maecenas congue ligula as quam
          viverra nec consectetur ant hendrerit. Donec et mollis dolor. Praesent
          et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt
          congue enim, ut porta lorem lacinia consectetur.
        </p>

        <section>
          <h3>Subsection</h3>

          <p>
            Donec ut librero sed accu vehicula ultricies a non tortor. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Aenean ut
            gravida lorem. Ut turpis felis, pulvinar a semper sed, adipiscing id
            dolor.
          </p>

          <p>
            Pelientesque auctor nisi id magna consequat sagittis. Curabitur
            dapibus, enim sit amet elit pharetra tincidunt feugiat nist
            imperdiet. Ut convallis libero in urna ultrices accumsan. Donec sed
            odio eros.
          </p>
        </section>

        <section>
          <h3>Another subsection</h3>

          <p>
            Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus. Cum
            soclis natoque penatibus et manis dis parturient montes, nascetur
            ridiculus mus. In rutrum accumsan ultricies. Mauris vitae nisi at
            sem facilisis semper ac in est.
          </p>

          <p>
            Vivamus fermentum semper porta. Nunc diam velit, adipscing ut
            tristique vitae sagittis vel odio. Maecenas convallis ullamcorper
            ultricied. Curabitur ornare, ligula semper consectetur sagittis,
            nisi diam iaculis velit, is fringille sem nunc vet mi.
          </p>
        </section>
      </article>

      <!-- the aside content can also be nested within the main content -->
      <aside>
        <h2>Related</h2>

        <ul>
          <li><a href="#">Oh I do like to be beside the seaside</a></li>
          <li><a href="#">Oh I do like to be beside the sea</a></li>
          <li><a href="#">Although in the North of England</a></li>
          <li><a href="#">It never stops raining</a></li>
          <li><a href="#">Oh well…</a></li>
        </ul>
      </aside>
    </main>

    <!-- And here is our main footer that is used across all the pages of our website -->

    <footer>
      <p>©Copyright 2050 by nobody. All rights reversed.</p>
    </footer>
  </body>
</html>
```

Nehmen Sie sich Zeit, um den Code zu betrachten und zu verstehen — die Kommentare im Code sollten Ihnen ebenfalls helfen, ihn zu verstehen. Wir bitten Sie in diesem Artikel nicht darum, viel mehr zu tun, denn der Schlüssel zum Verständnis des Dokumentenlayouts besteht darin, eine solide HTML-Struktur zu schreiben und sie dann mit CSS zu gestalten. Wir warten damit, bis Sie anfangen, das CSS-Layout im Rahmen des CSS-Themas zu studieren.

## HTML-Layout-Elemente im Detail

Es ist gut, die Gesamtbedeutung aller HTML-Abschnittselemente im Detail zu verstehen — dies ist etwas, woran Sie allmählich arbeiten werden, wenn Sie mehr Erfahrung in der Webentwicklung sammeln. Sie können viele Details finden, indem Sie unsere [HTML-Elementreferenz](/de/docs/Web/HTML/Element) lesen. Für den Moment sind dies die Hauptdefinitionen, die Sie zu verstehen versuchen sollten:

- {{HTMLElement('main')}} ist für Inhalte, die _einzigartig für diese Seite_ sind. Verwenden Sie `<main>` nur _einmal_ pro Seite und platzieren Sie es direkt innerhalb von {{HTMLElement('body')}}. Idealerweise sollte es nicht in andere Elemente verschachtelt werden.
- {{HTMLElement('article')}} umschließt einen Block zusammenhängender Inhalte, der ohne den Rest der Seite eigenständig sinnvoll ist (z. B. ein einzelner Blogbeitrag).
- {{HTMLElement('section')}} ist ähnlich wie `<article>`, dient jedoch mehr zum Gruppieren eines einzelnen Teils der Seite, der eine einzelne Funktionalität darstellt (z. B. eine Mini-Karte oder eine Sammlung von Artikelüberschriften und Zusammenfassungen) oder ein Thema. Es gilt als Best Practice, jeden Abschnitt mit einer [Überschrift](/de/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals) zu beginnen; beachten Sie auch, dass Sie `<article>` in verschiedene `<section>`s oder `<section>`s in verschiedene `<article>`s aufteilen können, abhängig vom Kontext.
- {{HTMLElement('aside')}} enthält Inhalte, die nicht direkt mit dem Hauptinhalt zusammenhängen, aber zusätzliche Informationen liefern können, die indirekt damit verbunden sind (Glossareinträge, Autorenbiografie, verwandte Links usw.).
- {{HTMLElement('header')}} repräsentiert eine Gruppe von einführenden Inhalten. Wenn es ein Kind von {{HTMLElement('body')}} ist, definiert es den globalen Header einer Webseite, aber wenn es ein Kind von {{HTMLElement('article')}} oder {{HTMLElement('section')}} ist, definiert es einen spezifischen Header für diesen Abschnitt (versuchen Sie nicht, dies mit [Titeln und Überschriften](/de/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#adding_a_title) zu verwechseln).
- {{HTMLElement('nav')}} enthält die Hauptnavigationsfunktionalität der Seite. Sekundäre Links usw. würden nicht in die Navigation gehören.
- {{HTMLElement('footer')}} stellt eine Gruppe von Endinhalten für eine Seite dar.

Jedes der oben genannten Elemente kann angeklickt werden, um den entsprechenden Artikel im Abschnitt „HTML-Elementreferenz“ zu lesen, der weitere Details zu jedem Element bietet.

### Nicht-semantische Wrapper

Manchmal stoßen Sie auf eine Situation, in der Sie kein ideales semantisches Element finden können, um einige Elemente zusammenzufassen oder Inhalte einzuwickeln. Manchmal möchten Sie vielleicht eine Gruppe von Elementen zusammenfassen, um sie alle als eine einzige Einheit mit etwas [CSS](/de/docs/Glossary/CSS) oder [JavaScript](/de/docs/Glossary/JavaScript) zu beeinflussen. Für solche Fälle stellt HTML die {{HTMLElement("div")}}- und {{HTMLElement("span")}}-Elemente bereit. Sie sollten diese vorzugsweise mit einem geeigneten [`class`](/de/docs/Web/HTML/Global_attributes#class)-Attribut verwenden, um ihnen eine Art Beschriftung zu geben, damit sie leicht gezielt werden können.

{{HTMLElement("span")}} ist ein Inline-Element ohne Semantik, das Sie nur dann verwenden sollten, wenn Sie kein besseres semantisches Textelement finden können, um Ihren Inhalt zu ummanteln, oder wenn Sie keine spezifische Bedeutung hinzufügen möchten. Zum Beispiel:

```html
<p>
  The King walked drunkenly back to his room at 01:00, the beer doing nothing to
  aid him as he staggered through the door.
  <span class="editor-note">
    [Editor's note: At this point in the play, the lights should be down low].
  </span>
</p>
```

In diesem Fall soll die Anmerkung des Herausgebers dem Regisseur des Stücks lediglich eine zusätzliche Anleitung geben; sie soll keine zusätzliche semantische Bedeutung haben. Für sehende Benutzer könnte CSS verwendet werden, um die Anmerkung ein wenig vom Haupttext zu distanzieren.

{{HTMLElement("div")}} ist ein Blockelement ohne Semantik, das Sie nur dann verwenden sollten, wenn Sie kein besseres semantisches Blockelement finden können oder keine spezifische Bedeutung hinzufügen möchten. Stellen Sie sich zum Beispiel ein Einkaufswagen-Widget vor, das Sie jederzeit während Ihres Aufenthalts auf einer E-Commerce-Seite aufrufen können:

```html-nolint
<div class="shopping-cart">
  <h2>Shopping cart</h2>
  <ul>
    <li>
      <p>
        <a href=""><strong>Silver earrings</strong></a>: $99.95.
      </p>
      <img src="../products/3333-0985/thumb.png" alt="Silver earrings" />
    </li>
    <li>…</li>
  </ul>
  <p>Total cost: $237.89</p>
</div>
```

Dies ist eigentlich kein `<aside>`, da es nicht unbedingt mit dem Hauptinhalt der Seite zusammenhängt (Sie möchten es von überall aus sichtbar haben). Es rechtfertigt nicht einmal besonders die Verwendung eines `<section>`, da es nicht Teil des Hauptinhalts der Seite ist. In diesem Fall ist also ein `<div>` in Ordnung. Wir haben eine Überschrift als Wegweiser eingefügt, um Screenreader-Benutzer bei der Suche danach zu unterstützen.

> [!WARNING]
> Divs sind so bequem zu verwenden, dass es leicht ist, sie zu viel zu verwenden. Da sie keinen semantischen Wert haben, blähen sie einfach Ihren HTML-Code auf. Achten Sie darauf, sie nur dann zu verwenden, wenn es keine bessere semantische Lösung gibt, und versuchen Sie, deren Nutzung auf ein Minimum zu reduzieren, da es sonst schwierig wäre, Ihre Dokumente zu aktualisieren und zu warten.

### Zeilenumbrüche und horizontale Linien

Zwei Elemente, die Sie gelegentlich verwenden und kennen möchten, sind {{htmlelement("br")}} und {{htmlelement("hr")}}.

#### \<br>: das Zeilenumbruch-Element

`<br>` erzeugt einen Zeilenumbruch in einem Absatz; es ist der einzige Weg, eine feste Struktur in einer Situation zu erzwingen, in der Sie eine Reihe fixer kurzer Zeilen wünschen, wie in einer Postanschrift oder einem Gedicht. Zum Beispiel:

```html
<p>
  There once was a man named O'Dell<br />
  Who loved to write HTML<br />
  But his structure was bad, his semantics were sad<br />
  and his markup didn't read very well.
</p>
```

Ohne die `<br>`-Elemente würde der Absatz einfach in einer langen Zeile dargestellt werden (wie wir zu Beginn des Kurses gesagt haben, [ignoriert HTML die meisten Leerzeichen](/de/docs/Learn/HTML/Introduction_to_HTML/Getting_started#whitespace_in_html)); mit `<br>`-Elementen im Code wird das Markup so dargestellt:

{{EmbedLiveSample('br_the_line_break_element', '100%', 150)}}

#### \<hr>: das thematische Umbruch-Element

`<hr>`-Elemente erstellen eine horizontale Linie im Dokument, die einen thematischen Wechsel im Text kennzeichnet (wie ein Themen- oder Szenenwechsel). Optisch sieht es einfach wie eine horizontale Linie aus. Als Beispiel:

```html
<p>
  Ron was backed into a corner by the marauding netherbeasts. Scared, but
  determined to protect his friends, he raised his wand and prepared to do
  battle, hoping that his distress call had made it through.
</p>
<hr />
<p>
  Meanwhile, Harry was sitting at home, staring at his royalty statement and
  pondering when the next spin off series would come out, when an enchanted
  distress letter flew through his window and landed in his lap. He read it
  hazily and sighed; "better get back to work then", he mused.
</p>
```

Würde so dargestellt:

{{EmbedLiveSample('hr_the_thematic_break_element', '100%', '185px')}}

## Planung einer einfachen Website

Sobald Sie die Struktur einer einfachen Webseite geplant haben, ist der nächste logische Schritt, zu versuchen, herauszufinden, welche Inhalte Sie auf einer gesamten Website haben möchten, welche Seiten Sie benötigen und wie sie organisiert und miteinander verknüpft werden sollten, um die bestmögliche Benutzererfahrung zu gewährleisten. Dies wird [Informationsarchitektur](/de/docs/Glossary/Information_architecture) genannt. Bei einer großen, komplexen Website kann viel Planung in diesen Prozess fließen, aber für eine einfache Website mit ein paar Seiten kann dies ziemlich einfach und unterhaltsam sein!

1. Bedenken Sie, dass Sie einige Elemente haben werden, die für die meisten (wenn nicht alle) Seiten gemeinsam sind – wie das Navigationsmenü und die Fußzeileninhalte. Wenn Ihre Website beispielsweise für ein Unternehmen ist, ist es eine gute Idee, Ihre Kontaktinformationen in der Fußzeile auf jeder Seite verfügbar zu haben. Notieren Sie, was Sie auf jeder Seite gemeinsam haben möchten.![Die gemeinsamen Merkmale der Reiseseite, die auf jeder Seite stehen sollen: Titel und Logo, Kontakt, Urheberrechte, Geschäftsbedingungen, Sprachauswahl, Barrierefreiheitspolitik](common-features.png)
2. Zeichnen Sie als nächstes eine grobe Skizze, wie die Struktur jeder Seite aussehen könnte (sie könnte wie unsere einfache Website oben aussehen). Notieren Sie, was jeder Block sein wird.![Ein einfaches Diagramm einer Beispiellistenstruktur mit einem Header, Hauptinhalt, zwei optionalen Seitenleisten und einem Footer](site-structure.png)
3. Denken Sie nun über alle anderen (nicht auf jeder Seite gemeinsamen) Inhalte nach, die Sie auf Ihrer Website haben möchten – schreiben Sie eine große Liste auf.![Eine lange Liste aller Funktionen, die wir auf unserer Reiseseite hinzufügen könnten, vom Suchen bis zu Sonderangeboten und länderspezifischen Informationen](feature-list.png)
4. Versuchen Sie als nächstes, alle diese Inhaltsartikel in Gruppen zu sortieren, um Ihnen eine Vorstellung davon zu geben, welche Teile zusammen auf verschiedenen Seiten leben könnten. Dies ist sehr ähnlich zu einer Technik namens [Karten-Sortieren](/de/docs/Glossary/Card_sorting).![Die Artikel, die auf einer Urlaubsseite erscheinen sollen, in 5 Kategorien geordnet: Suche, Sonderangebote, Länderspezifische Infos, Suchergebnisse und Kaufen](card-sorting.png)
5. Versuchen Sie jetzt, ein grobes Flussdiagramm der Website zu skizzieren - haben Sie eine Blase für jede Seite auf Ihrer Website, und zeichnen Sie Linien, um den typischen Arbeitsablauf zwischen den Seiten zu zeigen. Die Startseite wird wahrscheinlich in der Mitte sein und mit den meisten, wenn nicht allen anderen verbunden sein; die meisten Seiten in einer kleinen Website sollten über die Hauptebenen verfügbar sein, obwohl es Ausnahmen gibt. Sie möchten vielleicht auch Anmerkungen darüber machen, wie Dinge präsentiert werden könnten.![Eine Karte der Website, die die Startseite, Länderseite, Suchergebnisse, Sonderseite, Warenkorb und Kaufseite zeigt](site-map.png)

### Aktives Lernen: Erstellen Sie Ihr eigenes Flussdiagramm

Versuchen Sie, die obige Übung für eine Website Ihrer eigenen Kreation durchzuführen. Worüber möchten Sie eine Website erstellen?

> [!NOTE]
> Speichern Sie Ihre Arbeiten irgendwo; Sie könnten sie später noch benötigen.

## Zusammenfassung

Zu diesem Zeitpunkt sollten Sie eine bessere Vorstellung davon haben, wie man eine Webseite/Website strukturiert. Im nächsten Artikel dieses Moduls lernen wir, wie man [HTML debuggt](/de/docs/Learn/HTML/Introduction_to_HTML/Debugging_HTML).

{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Advanced_text_formatting", "Learn/HTML/Introduction_to_HTML/Debugging_HTML", "Learn/HTML/Introduction_to_HTML")}}
