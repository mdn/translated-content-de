---
title: Dokument- und Website-Struktur
slug: Learn/HTML/Introduction_to_HTML/Document_and_website_structure
l10n:
  sourceCommit: bd4edfc4dc2a3fd78841c0f9cd843cabf072a61e
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Advanced_text_formatting", "Learn/HTML/Introduction_to_HTML/Debugging_HTML", "Learn/HTML/Introduction_to_HTML")}}

Zusätzlich zur Definition einzelner Teile Ihrer Seite (wie "ein Absatz" oder "ein Bild") bietet [HTML](/de/docs/Glossary/HTML) auch eine Reihe von Blockelementen, die zur Definition von Bereichen Ihrer Website verwendet werden (wie "der Header", "das Navigationsmenü", "die Hauptinhaltsspalte"). Dieser Artikel befasst sich damit, wie Sie eine grundlegende Website-Struktur planen und den HTML-Code schreiben, der diese Struktur repräsentiert.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML, wie sie in
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
          >Erste Schritte mit HTML</a
        > behandelt werden. HTML-Textformatierung, wie sie in
        <a
          href="/de/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals"
          >HTML-Textgrundlagen</a
        > behandelt wird. Wie Hyperlinks funktionieren, wie in
        <a
          href="/de/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks"
          >Erstellung von Hyperlinks</a
        > behandelt.
      </td>
    </tr>
    <tr>
      <th scope="row">Zielsetzung:</th>
      <td>
        Lernen, wie Sie Ihr Dokument mit semantischen Tags strukturieren und wie Sie die Struktur einer einfachen Website erarbeiten.
      </td>
    </tr>
  </tbody>
</table>

## Grundlegende Abschnitte eines Dokuments

Webseiten können ziemlich unterschiedlich aussehen, aber sie tendieren dazu, ähnliche Standardkomponenten zu teilen, es sei denn, die Seite zeigt ein Vollbildvideo oder ein Spiel, ist Teil eines Kunstprojekts oder ist einfach schlecht strukturiert:

- Header:
  - : Normalerweise ein großer Streifen oben mit einer großen Überschrift, einem Logo und vielleicht einem Slogan. Dies bleibt normalerweise von einer Webseite zur nächsten gleich.
- Navigationsleiste:
  - : Links zu den Hauptbereichen der Website; normalerweise dargestellt durch Menütasten, Links oder Tabs. Wie der Header bleibt auch dieser Inhalt normalerweise von einer Webseite zur nächsten konsistent – eine inkonsistente Navigation auf Ihrer Website führt nur zu verwirrten, frustrierten Benutzern. Viele Webdesigner betrachten die Navigationsleiste als Teil des Headers und nicht als eigenständige Komponente, aber das ist keine Voraussetzung; in der Tat argumentieren einige, dass die Trennung besser für die [Barrierefreiheit](/de/docs/Learn/Accessibility) ist, da Bildschirmlesegeräte die beiden Funktionen besser lesen können, wenn sie getrennt sind.
- Hauptinhalt:
  - : Ein großer Bereich in der Mitte, der den größten Teil des einzigartigen Inhalts einer bestimmten Webseite enthält, zum Beispiel das Video, das Sie ansehen möchten, oder die Hauptgeschichte, die Sie lesen, oder die Karte, die Sie ansehen möchten, oder die Nachrichtenüberschriften usw. Dies ist der eine Teil der Website, der definitiv von Seite zu Seite variiert!
- Seitenleiste:
  - : Einige periphere Informationen, Links, Zitate, Werbung usw. Üblicherweise ist dies kontextbezogen zu dem, was im Hauptinhalt enthalten ist (zum Beispiel könnte auf einer Nachrichtenseite die Seitenleiste die Biografie des Autors oder Links zu verwandten Artikeln enthalten), aber es gibt auch Fälle, in denen Sie einige wiederkehrende Elemente wie ein sekundäres Navigationssystem finden.
- Footer:
  - : Ein Streifen am unteren Rand der Seite, der in der Regel Kleingedrucktes, Copyright-Hinweise oder Kontaktinformationen enthält. Es ist ein Ort, um allgemeine Informationen zu platzieren (wie der Header), aber normalerweise sind diese Informationen nicht kritisch oder sekundär zur Website selbst. Der Footer wird auch manchmal für [SEO](/de/docs/Glossary/SEO)-Zwecke verwendet, indem Links für den schnellen Zugriff auf beliebte Inhalte bereitgestellt werden.

Eine "typische Website" könnte folgendermaßen strukturiert sein:

![ein einfaches Beispiel für eine Website-Struktur mit einer Hauptüberschrift, Navigationsmenü, Hauptinhalt, Seitenleiste und Footer.](sample-website.png)

> [!NOTE]
> Das obige Bild illustriert die Hauptabschnitte eines Dokuments, die Sie mit HTML definieren können. Das _Aussehen_ der hier gezeigten Seite – einschließlich Layout, Farben und Schriftarten – wird jedoch durch die Anwendung von [CSS](/de/docs/Learn/CSS) auf das HTML erreicht.
>
> In diesem Modul lehren wir kein CSS, aber sobald Sie ein Verständnis der Grundlagen von HTML haben, versuchen Sie in unser [CSS-Erste Schritte](/de/docs/Learn/CSS/First_steps) Modul einzutauchen, um zu lernen, wie Sie Ihre Website gestalten.

## HTML zur Strukturierung von Inhalten

Das einfache oben gezeigte Beispiel ist nicht hübsch, aber es ist perfekt geeignet, um ein typisches Website-Layout-Beispiel zu veranschaulichen. Einige Websites haben mehr Spalten, einige sind viel komplexer, aber Sie verstehen das Prinzip. Mit dem richtigen CSS könnten Sie praktisch beliebige Elemente verwenden, um die verschiedenen Abschnitte einzurahmen und sie so aussehen zu lassen, wie Sie möchten, aber wie bereits erwähnt, müssen wir die Semantik respektieren und **das richtige Element für die richtige Aufgabe verwenden**.

Dies liegt daran, dass visuelle Elemente nicht die ganze Geschichte erzählen. Wir verwenden Farbe und Schriftgröße, um die Aufmerksamkeit sehender Benutzer auf die nützlichsten Teile des Inhalts zu lenken, wie das Navigationsmenü und verwandte Links, aber was ist zum Beispiel mit sehbehinderten Menschen, die Konzepte wie "pink" und "große Schrift" möglicherweise nicht sehr nützlich finden?

> **Hinweis:** [Etwa 8% der Männer und 0,5% der Frauen](https://www.color-blindness.com/) sind farbenblind; oder anders ausgedrückt, ungefähr 1 von 12 Männern und 1 von 200 Frauen. Blinde und sehbehinderte Menschen repräsentieren ungefähr 4-5% der Weltbevölkerung (im Jahr 2015 gab es [940 Millionen Menschen mit einem gewissen Grad an Sehbehinderung](https://en.wikipedia.org/wiki/Visual_impairment), während die Gesamtbevölkerung [etwa 7,5 Milliarden](https://en.wikipedia.org/wiki/World_human_population#/media/File:World_population_history.svg) betrug).

In Ihrem HTML-Code können Sie Abschnitte von Inhalten basierend auf ihrer _Funktionalität_ markieren — Sie können Elemente verwenden, die die oben beschriebenen Inhaltsabschnitte eindeutig darstellen, und unterstützende Technologien wie Bildschirmlesegeräte können diese Elemente erkennen und Aufgaben wie "finde die Hauptnavigation" oder "finde den Hauptinhalt" unterstützen. Wie wir bereits früher im Kurs erwähnt haben, gibt es eine Reihe von [Konsequenzen, nicht die richtige Elementstruktur und Semantik für die richtige Aufgabe zu verwenden](/de/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals#why_do_we_need_structure).

Um eine solche semantische Auszeichnung zu implementieren, bietet HTML spezielle Tags, die Sie verwenden können, um solche Abschnitte zu repräsentieren, zum Beispiel:

- **Header:** {{htmlelement("header")}}.
- **Navigationsleiste:** {{htmlelement("nav")}}.
- **Hauptinhalt:** {{htmlelement("main")}}, mit verschiedenen Inhaltsunterabschnitten, die durch {{HTMLElement("article")}}, {{htmlelement("section")}}, und {{htmlelement("div")}}-Elemente dargestellt werden.
- **Seitenleiste:** {{htmlelement("aside")}}; oft innerhalb von {{htmlelement("main")}} platziert.
- **Footer:** {{htmlelement("footer")}}.

### Aktives Lernen: den Code für unser Beispiel erkunden

Unser oben gesehenes Beispiel wird durch den folgenden Code dargestellt (Sie können das Beispiel auch in unserem [GitHub-Repository finden](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/document_and_website_structure/index.html)). Wir möchten, dass Sie sich das obige Beispiel ansehen und dann die folgende Liste durchsehen, um zu sehen, welche Teile welchen Abschnitt der visuellen Darstellung ausmachen.

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

Nehmen Sie sich Zeit, um den Code zu überblicken und zu verstehen – die Kommentare im Code sollten Ihnen ebenfalls helfen, ihn zu verstehen. Wir verlangen in diesem Artikel nicht viel mehr von Ihnen, da der Schlüssel zum Verständnis des Dokumentenlayouts darin besteht, eine solide HTML-Struktur zu schreiben und sie dann mit CSS zu gestalten. Wir werden warten, bis Sie beginnen, CSS-Layout im Rahmen des CSS-Themas zu studieren.

## HTML-Layout-Elemente im Detail

Es ist gut, die Gesamtheit der Bedeutung aller HTML-Abschnittselemente im Detail zu verstehen — dies ist etwas, an dem Sie allmählich arbeiten werden, wenn Sie beginnen, mehr Erfahrungen mit der Webentwicklung zu sammeln. Sie können viele Details erhalten, indem Sie unser [HTML-Element-Referenz](/de/docs/Web/HTML/Element) lesen. Für jetzt sind hier die Hauptdefinitionen, die Sie versuchen sollten zu verstehen:

- {{HTMLElement('main')}} ist für Inhalte, die _einzigartig auf dieser Seite_ sind. Verwenden Sie `<main>` nur _einmal_ pro Seite und setzen Sie es direkt in {{HTMLElement('body')}}. Idealerweise sollte es nicht innerhalb anderer Elemente verschachtelt sein.
- {{HTMLElement('article')}} schließt einen Block von verwandten Inhalten ein, der ohne den Rest der Seite eigenständig Sinn macht (z.B. ein einzelner Blogeintrag).
- {{HTMLElement('section')}} ist ähnlich wie `<article>`, aber es dient eher zum Gruppieren eines einzelnen Teils der Seite, der eine einzige Funktion darstellt (z.B. eine Mini-Karte, oder eine Sammlung von Artikelüberschriften und Zusammenfassungen), oder ein Thema. Es gilt als Best Practice, jede Sektion mit einer [Überschrift](/de/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals) zu beginnen; beachten Sie auch, dass Sie `<article>`s in verschiedene `<section>`s aufteilen können oder `<section>`s in verschiedene `<article>`s, je nach Kontext.
- {{HTMLElement('aside')}} enthält Inhalt, der nicht direkt mit dem Hauptinhalt verwandt ist, aber zusätzliche Informationen bieten kann, die indirekt damit zusammenhängen (Glossareinträge, Autorenbiografien, verwandte Links, etc.).
- {{HTMLElement('header')}} repräsentiert eine Gruppe von einleitendem Inhalt. Wenn es ein Kind von {{HTMLElement('body')}} ist, definiert es den globalen Header einer Webseite, aber wenn es ein Kind eines {{HTMLElement('article')}} oder {{HTMLElement('section')}} ist, definiert es einen bestimmten Header für diesen Abschnitt (versuchen Sie nicht, dies mit [Titeln und Überschriften](/de/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#adding_a_title) zu verwechseln).
- {{HTMLElement('nav')}} enthält die Hauptnavigationsfunktionalität für die Seite. Sekundäre Links, etc., würden nicht in der Navigation platziert werden.
- {{HTMLElement('footer')}} repräsentiert eine Gruppe von Endinhalt für eine Seite.

Jedes der oben genannten Elemente kann angeklickt werden, um den entsprechenden Artikel im Abschnitt "HTML-Element-Referenz" zu lesen, der detailliertere Informationen über jedes einzelne bietet.

### Nicht-semantische Wrapper

Manchmal stoßen Sie auf eine Situation, in der Sie kein ideales semantisches Element finden können, um einige Elemente zusammenzufassen oder einige Inhalte einzurahmen. Manchmal möchten Sie vielleicht einfach eine Gruppe von Elementen zusammenfassen, um sie als eine einzige Entität mit etwas [CSS](/de/docs/Glossary/CSS) oder [JavaScript](/de/docs/Glossary/JavaScript) zu verändern. Für solche Fälle bietet HTML die {{HTMLElement("div")}} und {{HTMLElement("span")}}-Elemente. Sie sollten diese vorzugsweise mit einem geeigneten [`class`](/de/docs/Web/HTML/Global_attributes#class)-Attribut verwenden, um ihnen eine Art Label zu geben, damit sie leicht angesprochen werden können.

{{HTMLElement("span")}} ist ein Inline-nicht-semantisches Element, das Sie nur verwenden sollten, wenn Sie kein besseres semantisches Textelement zur Hand haben, um Ihren Inhalt einzurahmen, oder keine spezifische Bedeutung hinzufügen möchten. Zum Beispiel:

```html
<p>
  The King walked drunkenly back to his room at 01:00, the beer doing nothing to
  aid him as he staggered through the door.
  <span class="editor-note">
    [Editor's note: At this point in the play, the lights should be down low].
  </span>
</p>
```

In diesem Fall soll die Notiz des Herausgebers lediglich zusätzliche Anweisungen für den Regisseur des Stücks bieten; sie soll keine zusätzliche semantische Bedeutung haben. Für sehende Nutzer würde CSS vielleicht verwendet, um die Notiz etwas vom Haupttext zu distanzieren.

{{HTMLElement("div")}} ist ein Blocklevel-nicht-semantisches Element, das Sie nur verwenden sollten, wenn Sie kein besseres semantisches Blockelement zur Hand haben oder keine spezifische Bedeutung hinzufügen möchten. Stellen Sie sich zum Beispiel ein Warenkorbsystem vor, das Sie jederzeit während Ihres Aufenthalts auf einer E-Commerce-Website aufrufen können:

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

Dies ist eigentlich kein `<aside>`, da es sich nicht unbedingt auf den Hauptinhalt der Seite bezieht (Sie möchten es von überall aus sichtbar haben). Es rechtfertigt es nicht einmal, ein `<section>` zu verwenden, da es nicht Teil des Hauptinhalts der Seite ist. Ein `<div>` ist also in diesem Fall in Ordnung. Wir haben eine Überschrift hinzugefügt, um Bildschirmleser-Nutzern beim Auffinden zu helfen.

> [!WARNING]
> Divs sind so bequem zu verwenden, dass es einfach ist, sie zu oft zu verwenden. Da sie keinen semantischen Wert haben, überladen sie Ihren HTML-Code nur. Achten Sie darauf, sie nur zu verwenden, wenn es keine bessere semantische Lösung gibt, und versuchen Sie, ihre Verwendung auf das Minimum zu reduzieren, ansonsten werden Sie Schwierigkeiten haben, Ihre Dokumente zu aktualisieren und zu pflegen.

### Zeilenumbrüche und horizontale Linien

Zwei Elemente, die Sie gelegentlich verwenden werden und über die Sie Bescheid wissen sollten, sind {{htmlelement("br")}} und {{htmlelement("hr")}}.

#### \<br>: das Zeilenumbruch-Element

`<br>` erzeugt einen Zeilenumbruch in einem Absatz; es ist der einzige Weg, um in einem Kontext, in dem Sie eine Reihe fester kurzer Zeilen wünschen, wie bei einer Postanschrift oder einem Gedicht, eine starre Struktur zu erzwingen. Zum Beispiel:

```html
<p>
  There once was a man named O'Dell<br />
  Who loved to write HTML<br />
  But his structure was bad, his semantics were sad<br />
  and his markup didn't read very well.
</p>
```

Ohne die `<br>`-Elemente würde der Absatz nur in einer langen Linie gerendert (wie wir zu Beginn des Kurses sagten, [HTML ignoriert die meisten Leerzeichen](/de/docs/Learn/HTML/Introduction_to_HTML/Getting_started#whitespace_in_html)); mit `<br>`-Elementen im Code wird das Markup so gerendert:

{{EmbedLiveSample('br_the_line_break_element', '100%', 150)}}

#### \<hr>: das thematische Umbruch-Element

`<hr>`-Elemente erzeugen eine horizontale Linie im Dokument, die einen thematischen Wechsel im Text anzeigt (z.B. einen Wechsel des Themas oder der Szene). Optisch sieht es nur aus wie eine horizontale Linie. Als Beispiel:

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

Würde so gerendert werden:

{{EmbedLiveSample('hr_the_thematic_break_element', '100%', '185px')}}

## Planung einer einfachen Website

Sobald Sie die Struktur einer einfachen Webseite geplant haben, ist der nächste logische Schritt zu versuchen zu erarbeiten, welchen Inhalt Sie auf einer gesamten Website haben möchten, welche Seiten Sie benötigen, und wie sie angeordnet sein und miteinander verbunden sein sollten, um das bestmögliche Benutzererlebnis zu bieten. Dies wird [Informationsarchitektur](/de/docs/Glossary/Information_architecture) genannt. Bei einer großen, komplexen Website kann eine Menge Planung in diesen Prozess fließen, aber für eine einfache Website mit einigen Seiten kann dies fairly einfach und lustig sein!

1. Bedenken Sie, dass Sie einige Elemente haben werden, die auf den meisten (wenn nicht allen) Seiten gleich sind – wie das Navigationsmenü und den Footer-Inhalt. Wenn Ihre Seite beispielsweise ein Geschäftsauftritt ist, ist es eine gute Idee, Ihre Kontaktinformationen im Footer auf jeder Seite verfügbar zu machen. Notieren Sie, was Sie auf jeder Seite gleich haben möchten.![die gemeinsamen Merkmale der Reisesite, die auf jeder Seite erscheinen sollen: Titel und Logo, Kontakt, Urheberrecht, Geschäftsbedingungen, Sprachauswahl, Barrierefreiheitspolitik](common-features.png)
2. Zeichnen Sie als Nächstes eine grobe Skizze, wie die Struktur jeder Seite aussehen könnte (es könnte wie unsere einfache Website oben aussehen). Notieren Sie, was jedes Block sein wird.![Ein einfaches Diagramm des Beispielseitengerüstes mit einer Kopfzeile, einem Hauptinhaltsbereich, zwei optionalen Seitenleisten und einem Footer](site-structure.png)
3. Machen Sie nun ein Brainstorming aller anderen (nicht auf jeder Seite gemeinsamen) Inhalte, die Sie auf Ihrer Website haben möchten – schreiben Sie eine lange Liste auf.![Eine lange Liste aller Funktionen, die wir auf unserer Reise-Website hinzufügen könnten, von der Suche bis hin zu Sonderangeboten und länderspezifischen Informationen](feature-list.png)
4. Versuchen Sie nun, all diese Inhalte in Gruppen zu sortieren, um eine Vorstellung davon zu bekommen, welche Teile zusammen auf verschiedenen Seiten vorkommen könnten. Dies ähnelt sehr einer Technik, die [Cardsorting](/de/docs/Glossary/Card_sorting) genannt wird.![Die Elemente, die auf einer Urlaubsseite erscheinen sollten, sortiert in 5 Kategorien: Suche, Sonderangebote, länderspezifische Infos, Suchergebnisse und Kaufmöglichkeiten](card-sorting.png)
5. Zeichnen Sie nun eine grobe Sitemap – zeichnen Sie für jede Seite Ihrer Website eine Blase und Linien, um den typischen Workflow zwischen Seiten zu zeigen. Die Homepage wird wahrscheinlich in der Mitte stehen und mit den meisten, wenn nicht allen, der anderen verbunden sein; die meisten Seiten einer kleinen Seite sollten über die Hauptnavigation erreichbar sein, auch wenn es Ausnahmen gibt. Sie könnten auch Notizen dazu machen wollen, wie Dinge präsentiert werden könnten.![Eine Karte der Seite mit der Homepage, einer Länderseite, Suchergebnissen, Sonderseiten, Check-out und Kaufseite](site-map.png)

### Aktives Lernen: Erstellen Sie Ihre eigene Sitemap

Versuchen Sie, die obige Übung für eine Website Ihrer eigenen Kreation durchzuführen. Worum möchten Sie eine Seite erstellen?

> [!NOTE]
> Speichern Sie Ihre Arbeit irgendwo; Sie könnten sie später noch benötigen.

## Zusammenfassung

An diesem Punkt sollten Sie ein besseres Verständnis dafür haben, wie Sie eine Webseite oder Website strukturieren können. Im nächsten Artikel dieses Moduls werden wir lernen, wie man [HTML debuggt](/de/docs/Learn/HTML/Introduction_to_HTML/Debugging_HTML).

{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Advanced_text_formatting", "Learn/HTML/Introduction_to_HTML/Debugging_HTML", "Learn/HTML/Introduction_to_HTML")}}
