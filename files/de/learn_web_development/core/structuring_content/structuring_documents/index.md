---
title: Strukturierung von Dokumenten
slug: Learn_web_development/Core/Structuring_content/Structuring_documents
l10n:
  sourceCommit: 27f34d8b137f9bb2b467f9f9a1c4e1d04e12ed89
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Test_your_skills/HTML_text_basics", "Learn_web_development/Core/Structuring_content/Advanced_text_features", "Learn_web_development/Core/Structuring_content")}}

Zusätzlich zur Definition einzelner Teile Ihrer Seite (wie "ein Absatz" oder "ein Bild") weist {{Glossary("HTML", "HTML")}} auch eine Reihe von Blockebenen-Elementen auf, die zur Definition von Bereichen Ihrer Website verwendet werden, wie z. B. "der Header", "das Navigationsmenü" oder "die Hauptinhalts-Spalte". Dieser Artikel behandelt, wie Sie eine grundlegende Website-Struktur planen und das HTML schreiben, um diese Struktur darzustellen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende HTML-Kenntnisse, wie im
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        > behandelt. Textuelle Semantik wie <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
          >Überschriften und Absätze</a
        > und <a href="/de/docs/Learn_web_development/Core/Structuring_content/Lists"
          >Listen</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die gängigen HTML-sematischen Strukturierungselemente, zum Beispiel <code>&lt;main&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, und <code>&lt;footer&gt;</code>, und wie man sie korrekt verwendet.</li>
          <li>Die Notwendigkeit, semantische Elemente an geeigneten Stellen zu verwenden, anstatt einfach <code>&lt;div&gt;</code>-Elemente überall dort zu nutzen, wo ein Blockebenen-Container benötigt wird, und die Vorteile davon (wie z. B. verbesserte Barrierefreiheit).</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Grundlegende Abschnitte eines Dokuments

Webseiten können sehr unterschiedlich aussehen, aber sie teilen in der Regel ähnliche Standardkomponenten, es sei denn, die Seite zeigt ein Vollbildvideo oder ein Spiel, ist Teil eines Kunstprojekts oder ist einfach schlecht strukturiert:

- Header:
  - : Normalerweise ein großer Streifen oben mit einer großen Überschrift, einem Logo und vielleicht einem Slogan. Dieser bleibt in der Regel von einer Seite einer Website zur anderen gleich.
- Navigationsleiste:
  - : Links zu den Hauptabschnitten der Seite; normalerweise dargestellt durch Menütasten, Links oder Tabs. Wie der Header bleibt dieser Inhalt in der Regel von einer Webseite zur anderen konsistent – eine inkonsistente Navigation auf Ihrer Website führt nur zu verwirrten, frustrierten Nutzern. Viele Webdesigner betrachten die Navigationsleiste als Teil des Headers und nicht als eine separate Komponente, aber das ist keine Anforderung; tatsächlich argumentieren einige, dass die Trennung der beiden die [Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility) verbessert, weil Bildschirmleser die beiden Funktionen besser lesen können, wenn sie getrennt sind.
- Hauptinhalt:
  - : Ein großer Bereich in der Mitte, der den größten Teil des einzigartigen Inhalts einer gegebenen Webseite enthält, zum Beispiel das Video, das Sie sehen möchten, oder die Hauptgeschichte, die Sie lesen, oder die Karte, die Sie ansehen möchten, oder die Nachrichtenüberschriften usw. Dies ist der Teil der Website, der sich definitiv von Seite zu Seite unterscheidet!
- Seitenleiste:
  - : Einige Nebeninformationen, Links, Zitate, Anzeigen usw. In der Regel ist dies kontextuell zu dem, was im Hauptinhalt enthalten ist (zum Beispiel könnte auf einer Nachrichtenartikel-Seite die Seitenleiste die Biographie des Autors oder Links zu verwandten Artikeln enthalten), aber es gibt auch Fälle, in denen Sie einige sich wiederholende Elemente finden, wie ein sekundäres Navigationssystem.
- Footer:
  - : Ein Streifen am unteren Rand der Seite, der in der Regel Kleingedrucktes, Urheberrechtshinweise oder Kontaktinformationen enthält. Es ist ein Platz, um allgemeine Informationen zu platzieren (wie der Header), aber normalerweise sind diese Informationen nicht kritisch oder zweitrangig für die Website selbst. Der Footer wird manchmal auch für {{Glossary("SEO", "SEO")}}-Zwecke verwendet, indem er Links für den schnellen Zugriff auf beliebte Inhalte bereitstellt.

Eine "typische Website" könnte etwa so strukturiert sein:

![Ein einfaches Beispiel für eine Website-Struktur mit einer Hauptüberschrift, einem Navigationsmenü, Hauptinhalt, einer Seitenleiste und einem Footer.](sample-website.png)

> [!NOTE]
> Das obige Bild veranschaulicht die Hauptabschnitte eines Dokuments, die Sie mit HTML definieren können. Das _Erscheinungsbild_ der hier gezeigten Seite – einschließlich Layout, Farben und Schriftarten – wird jedoch durch Anwendung von [CSS](/de/docs/Learn_web_development/Core/Styling_basics) auf das HTML erreicht.

## HTML zur Strukturierung von Inhalten

Das gezeigte Beispiel ist nicht hübsch, aber es eignet sich hervorragend zur Veranschaulichung eines typischen Website-Layout-Beispiels. Einige Websites haben mehr Spalten, einige sind viel komplexer, aber Sie verstehen die Idee. Mit dem richtigen CSS könnten Sie fast beliebige Elemente verwenden, um die unterschiedlichen Abschnitte einzurahmen und es so aussehen zu lassen, wie Sie es wünschen, aber wie bereits erwähnt, müssen wir die Semantik respektieren und **das richtige Element für den richtigen Job verwenden**.

Dies liegt daran, dass die Optik nicht die ganze Geschichte erzählt. Wir verwenden Farbe und Schriftgröße, um die Aufmerksamkeit sehender Benutzer auf die nützlichsten Teile des Inhalts zu lenken, wie z. B. das Navigationsmenü und verwandte Links, aber was ist mit sehbehinderten Menschen zum Beispiel, die Konzepte wie "pink" und "große Schrift" vielleicht nicht sehr nützlich finden?

> [!NOTE]
> [Etwa 8 % der Männer und 0,5 % der Frauen](https://www.color-blindness.com/) sind farbenblind; oder anders ausgedrückt, ungefähr 1 von 12 Männern und 1 von 200 Frauen. Blinde und sehbehinderte Menschen machen etwa 4-5 % der Weltbevölkerung aus (2015 gab es [940 Millionen Menschen mit irgendeinem Grad an Sehverlust](https://en.wikipedia.org/wiki/Visual_impairment), während die Gesamtbevölkerung [etwa 7,5 Milliarden](https://en.wikipedia.org/wiki/World_human_population#/media/File:World_population_history.svg) betrug).

In Ihrem HTML-Code können Sie Abschnitte von Inhalten basierend auf ihrer _Funktionalität_ kennzeichnen – Sie können Elemente verwenden, die die oben beschriebenen Inhaltsabschnitte eindeutig repräsentieren, und Technologien, die Unterstützung für Menschen mit Behinderungen bieten, wie Bildschirmleser, können diese Elemente erkennen und bei Aufgaben wie "Finde die Hauptnavigation" oder "Finde den Hauptinhalt" helfen. Wie wir bereits früher im Kurs erwähnt haben, gibt es eine Reihe von [Konsequenzen, wenn man nicht die richtige Elementstruktur und Semantik für den richtigen Job verwendet](/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs#why_do_we_need_structure).

Um eine solche semantische Markierung zu implementieren, bietet HTML spezielle Tags, die Sie verwenden können, um solche Abschnitte darzustellen, zum Beispiel:

- **Header:** {{htmlelement("header")}}.
- **Navigationsleiste:** {{htmlelement("nav")}}.
- **Hauptinhalt:** {{htmlelement("main")}}, mit verschiedenen Inhaltsunterteilungen, die durch {{HTMLElement("article")}}, {{htmlelement("section")}} und {{htmlelement("div")}}-Elemente repräsentiert werden.
- **Seitenleiste:** {{htmlelement("aside")}}; oft innerhalb von {{htmlelement("main")}} platziert.
- **Footer:** {{htmlelement("footer")}}.

### Den Code unseres Beispiels erkunden

Das oben gezeigte Beispiel wird durch den folgenden Code dargestellt (Sie können das Beispiel auch in unserem [GitHub-Repository finden](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/document_and_website_structure/index.html)). Wir möchten, dass Sie sich das folgende Listing ansehen, um zu sehen, welche Teile jeden Abschnitt der visuellen Ausgabe ausmachen.

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
    <!-- The main header used across all the pages of our website -->

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

      <!-- A Search form: another common non-linear
           way to navigate through a site. -->

      <form>
        <input type="search" name="q" placeholder="Search query" />
        <input type="submit" value="Go!" />
      </form>
    </nav>

    <!-- Our page's main content -->
    <main>
      <!-- An article -->
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

    <!-- The footer that is used across all the pages of our website -->

    <footer>
      <p>©Copyright 2050 by nobody. All rights reversed.</p>
    </footer>
  </body>
</html>
```

Nehmen Sie sich Zeit, den Code zu betrachten und zu verstehen – die Kommentare im Code sollten Ihnen ebenfalls helfen, ihn zu verstehen. Wir bitten Sie in diesem Artikel nicht, viel mehr zu tun, da der Schlüssel zum Verständnis des Dokumentenlayouts darin besteht, eine solide HTML-Struktur zu schreiben und diese dann mit CSS zu gestalten. Wir warten damit, bis Sie beginnen, sich mit CSS-Layout im Rahmen des CSS-Themas zu beschäftigen.

## HTML-Layout-Elemente im Detail

Es ist gut, die allgemeine Bedeutung aller HTML-Sectioning-Elemente im Detail zu verstehen – dies ist etwas, das Sie allmählich erarbeiten werden, während Sie mehr Erfahrung in der Webentwicklung sammeln. Sie können viele Details in unserem [HTML-Element-Referenz](/de/docs/Web/HTML/Reference/Elements) nachlesen. Für den Moment sind dies die Hauptdefinitionen, die Sie verstehen sollten:

- {{HTMLElement('main')}} ist für Inhalte _einzigartig für diese Seite._ Verwenden Sie `<main>` nur _einmal_ pro Seite und platzieren Sie es direkt innerhalb von {{HTMLElement('body')}}. Idealerweise sollte es nicht in andere Elemente verschachtelt sein.
- {{HTMLElement('article')}} schließt einen Block verwandter Inhalte ein, die ohne den Rest der Seite Sinn machen (zum Beispiel einen einzelnen Blogbeitrag).
- {{HTMLElement('section')}} ist ähnlich wie `<article>`, aber es dient mehr dazu, einen einzelnen Teil der Seite zu gruppieren, der ein einzelnes Stück Funktionalität darstellt (wie ein Minikarten oder eine Reihe von Artikelüberschriften und Zusammenfassungen), oder ein Thema. Es gilt als Best Practice, jede Sektion mit einer [Überschrift](/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs) zu beginnen; beachten Sie auch, dass Sie `<article>`s in verschiedene `<section>`s aufteilen können oder `<section>`s in verschiedene `<article>`s, je nach Kontext.
- {{HTMLElement('aside')}} enthält Inhalte, die nicht direkt mit dem Hauptinhalt in Beziehung stehen, aber zusätzliche Informationen indirekt damit bereitstellen können (Glossar-Einträge, Autorenbiographie, verwandte Links, usw.).
- {{HTMLElement('header')}} repräsentiert eine Gruppe von einleitenden Inhalten. Wenn es ein Kind von {{HTMLElement('body')}} ist, definiert es den globalen Header einer Webseite, aber wenn es ein Kind eines {{HTMLElement('article')}} oder {{HTMLElement('section')}} ist, definiert es einen spezifischen Header für diesen Abschnitt (versuchen Sie nicht, dies mit [Titeln und Überschriften](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#adding_a_title) zu verwechseln).
- {{HTMLElement('nav')}} enthält die Hauptnavigationsfunktionalität für die Seite. Sekundäre Links usw. würden nicht in die Navigation gehen.
- {{HTMLElement('footer')}} repräsentiert eine Gruppe von Endinhalten für eine Seite.

Jedes der genannten Elemente kann angeklickt werden, um den entsprechenden Artikel im Abschnitt "HTML-Element-Referenz" zu lesen, der mehr Details zu jedem einzelnen bereitstellt.

### Nicht-semantische Wrapper

Manchmal stoßen Sie auf eine Situation, in der Sie kein ideales semantisches Element finden, um einige Elemente zusammenzufassen oder Inhalte einzurahmen. Manchmal möchten Sie einfach eine Gruppe von Elementen zusammenfassen, um sie als eine einzige Einheit mit etwas {{Glossary("CSS", "CSS")}} oder {{Glossary("JavaScript", "JavaScript")}} zu beeinflussen. Für solche Fälle bietet HTML die {{HTMLElement("div")}} und {{HTMLElement("span")}} Elemente. Sie sollten diese vorzugsweise mit einem passenden [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class)-Attribut verwenden, um ihnen eine Art von Label zu geben, sodass sie leicht von Ihnen gezielt werden können.

{{HTMLElement("span")}} ist ein Inline-Element ohne Semantik, das Sie nur verwenden sollten, wenn Sie kein besseres semantisches Textelement finden, um Ihre Inhalte einzuschließen, oder keine spezifische Bedeutung hinzufügen möchten. Zum Beispiel:

```html
<p>
  The King walked drunkenly back to his room at 01:00, the beer doing nothing to
  aid him as he staggered through the door.
  <span class="editor-note">
    [Editor's note: At this point in the play, the lights should be down low].
  </span>
</p>
```

In diesem Fall soll die Notiz des Herausgebers lediglich zusätzliche Anweisungen für den Regisseur des Stücks bieten; sie soll keine zusätzliche semantische Bedeutung haben. Für sehende Benutzer würde CSS möglicherweise verwendet werden, um die Notiz ein wenig vom Haupttext zu distanzieren.

{{HTMLElement("div")}} ist ein Blockelement ohne Semantik, das Sie nur verwenden sollten, wenn Sie kein besseres semantisches Blockelement finden, oder keine spezifische Bedeutung hinzufügen möchten. Stellen Sie sich zum Beispiel ein Einkaufswagen-Widget vor, das Sie jederzeit während Ihrer Zeit auf einer E-Commerce-Seite aufrufen können:

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

Das ist eigentlich kein `<aside>`, da es sich nicht unbedingt auf den Hauptinhalt der Seite bezieht (Sie möchten es von überall aus sichtbar haben). Es rechtfertigt nicht einmal die Verwendung eines `<section>`, da es nicht Teil des Hauptinhalts der Seite ist. In diesem Fall ist ein `<div>` in Ordnung. Wir haben eine Überschrift hinzugefügt, um Benutzern von Bildschirmlesern zu helfen, es zu finden.

> [!WARNING]
> Divs sind so bequem zu benutzen, dass es leicht ist, sie zu viel zu verwenden. Da sie keinen semantischen Wert tragen, belasten sie nur Ihren HTML-Code. Achten Sie darauf, sie nur zu verwenden, wenn es keine bessere semantische Lösung gibt und versuchen Sie, ihren Gebrauch auf ein Minimum zu reduzieren, andernfalls haben Sie Schwierigkeiten, Ihre Dokumente zu aktualisieren und zu pflegen.

> [!NOTE]
> Scrimbas [Semantisches HTML](https://scrimba.com/learn-accessible-web-design-c031/~0b?via=mdn) <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> interaktives Tutorial bietet eine nützliche Zusammenfassung der semantischen Markierung und warum Sie sie verwenden sollten, plus eine Herausforderung, die Ihre Fähigkeit testet, einen HTML-Code mit semantischen Elementen zu verbessern.

### Zeilenumbrüche und horizontale Linien

Zwei Elemente, die Sie gelegentlich verwenden werden und kennen sollten, sind {{htmlelement("br")}} und {{htmlelement("hr")}}.

#### \<br>: das Zeilenumbruch-Element

`<br>` erzeugt einen Zeilenumbruch in einem Absatz; es ist der einzige Weg, um eine starre Struktur in einer Situation zu erzwingen, in der Sie eine Reihe fester kurzer Zeilen möchten, wie in einer Postadresse oder einem Gedicht. Zum Beispiel:

```html
<p>
  There once was a man named O'Dell<br />
  Who loved to write HTML<br />
  But his structure was bad, his semantics were sad<br />
  and his markup didn't read very well.
</p>
```

Ohne die `<br>`-Elemente würde der Absatz einfach in einer langen Zeile gerendert (wie wir früher im Kurs gesagt haben, [HTML ignoriert die meisten Leerzeichen](/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax#whitespace_in_html)); mit `<br>`-Elementen im Code, wird das Markup so gerendert:

{{EmbedLiveSample('br_the_line_break_element', '100%', 150)}}

#### \<hr>: das thematische Umbruch-Element

`<hr>`-Elemente erzeugen eine horizontale Linie im Dokument, die einen thematischen Wechsel im Text anzeigt (wie einen Themenwechsel oder Szenenwechsel). Optisch sieht sie einfach wie eine horizontale Linie aus. Als Beispiel:

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

## Strukturierung einer einfachen Website

Der nächste Schritt nach der Planung der Struktur einer einzelnen Webseite besteht darin, die Struktur einer ganzen mehrseitigen Website zu planen, einschließlich, wie sie organisiert sein sollten und miteinander verlinken, um das bestmögliche Benutzererlebnis zu gewährleisten. Dies wird {{Glossary("Information_architecture", "Informationsarchitektur")}} genannt.

Bei einer großen, komplexen Website kann viel Planung in diesen Prozess einfließen, aber für eine einfache Website mit einigen Seiten kann es eine schnelle und unterhaltsame Übung sein.

Der Prozess könnte so aussehen:

1. Sie haben einige Elemente, die den meisten (wenn nicht allen) Seiten gemeinsam sind – wie das Navigationsmenü und den Footer-Inhalt. Wenn Ihre Seite zum Beispiel für ein Unternehmen ist, ist es eine gute Idee, Ihre Kontaktinformationen im Footer auf jeder Seite verfügbar zu machen. Notieren Sie, was Sie auf jeder Seite gemeinsam haben möchten. Zum Beispiel:
   - Header:
     - Titel und Logo
     - Sprachwahl der Seite
   - Navigationsmenü
   - Footer:
     - Urheberrechtshinweis
     - Link zu den Allgemeinen Geschäftsbedingungen, Kontaktdaten und Barrierefreiheitspolitik

2. Zeichnen Sie als nächstes eine grobe Skizze des gewünschten Layouts jeder Seite (es könnte wie unsere einfache Website oben aussehen). Notieren Sie, was jeder Block sein wird.![Eine einfache Diagrammierung einer Beispiel-Webseitenstruktur, mit Header, Hauptinhaltsbereich, zwei optionalen Seitenleisten und Footer](/shared-assets/images/diagrams/learn/structuring-documents/site-structure.svg)
3. Nun, erstellen Sie eine Liste aller anderen (nicht auf jeder Seite zu findenden) Inhalte, die Sie auf Ihrer Website haben möchten. Zum Beispiel:
   - Flüge
   - Unterkünfte
   - Transport
   - Dinge zu tun
   - Sonderangebote
   - Beliebte Urlaubspakete, zum Beispiel Wintersonne, Skifahren
   - Suchergebnisse
   - Bewertungen
   - Visa-/Einreisebestimmungen
   - Währung
   - Sprachen und Kultur
   - Urlaub kaufen

4. Als nächstes, versuchen Sie, all diese Inhalte in Gruppen zu sortieren, um eine Vorstellung davon zu bekommen, welche Teile zusammen auf verschiedenen Seiten leben könnten. Dies ist sehr ähnlich zu einer Technik namens {{Glossary("Card_sorting", "Karten-Sortierung")}}.
   - Suche
     - Flüge
     - Unterkünfte
     - Transport
     - Dinge zu tun
   - Sonderangebote
     - Beliebte Urlaube
     - Wintersonne
     - Skifahren
   - Suchergebnisse
     - Bewertungen
     - Länderspezifische Informationen
       - Visa-/Einreisebestimmungen
       - Währung
       - Sprachen und Kultur
   - Urlaub kaufen

5. Nun versuchen Sie, ein grobes Sitemap zu skizzieren – haben Sie ein Feld für jede Seite auf Ihrer Seite und ziehen Sie Linien, um den typischen Arbeitsablauf zwischen den Seiten zu zeigen. Die Startseite wird wahrscheinlich oben oder in der Mitte sein und mit den meisten, wenn nicht allen, anderen verlinken. Die meisten Seiten in einer kleinen Webseite sollten über die Hauptnavigation erreichbar sein, obwohl es Ausnahmen gibt. Sie möchten möglicherweise auch Notizen darüber, wie Dinge präsentiert werden könnten.![Eine Karte der Webseite, die die Startseite, Länderseite, Suchergebnisse, Sonderseite und den Checkout- und Kaufablauf zeigt](/shared-assets/images/diagrams/learn/structuring-documents/site-map.svg)

Versuchen Sie, die Übung oben auf eine Webseite Ihrer eigenen Kreation anzuwenden. Worüber würden Sie gerne eine Webseite erstellen? Als Stretch-Ziel verwenden Sie das HTML-Wissen, das Sie bisher erworben haben, um einige der Seiten auf der Webseite zu erstellen. Sie könnten unsere [grundlegende HTML-Vorlage](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) als Ausgangspunkt verwenden.

## Zusammenfassung

An diesem Punkt sollten Sie eine bessere Vorstellung davon haben, wie man eine Webseite/Website strukturiert. Im nächsten Artikel dieses Moduls werden wir einige fortgeschrittene Texttechniken betrachten.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Test_your_skills/HTML_text_basics", "Learn_web_development/Core/Structuring_content/Advanced_text_features", "Learn_web_development/Core/Structuring_content")}}
