---
title: Strukturierung von Dokumenten
slug: Learn_web_development/Core/Structuring_content/Structuring_documents
l10n:
  sourceCommit: d77a4f46c7d4ffd5f02831a706edd2e932380097
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Lists", "Learn_web_development/Core/Structuring_content/Advanced_text_features", "Learn_web_development/Core/Structuring_content")}}

Zusätzlich zur Definition einzelner Teile Ihrer Seite (wie z. B. "ein Absatz" oder "ein Bild") bietet {{Glossary("HTML", "HTML")}} auch eine Reihe von Blockelementen, die verwendet werden, um Bereiche Ihrer Website zu definieren, wie "den Header", "das Navigationsmenü" oder "die Hauptinhalts-Spalte". Dieser Artikel untersucht, wie man eine grundlegende Website-Struktur plant und den HTML-Code schreibt, um diese Struktur darzustellen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende HTML-Kenntnisse, wie sie in
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        > behandelt werden. Textlevel-Semantik wie <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
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
          <li>Die gängigen HTML-semantic-structural-Elemente, zum Beispiel <code>&lt;main&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, und <code>&lt;footer&gt;</code>, und wie man sie korrekt verwendet.</li>
          <li>Die Notwendigkeit, semantische Elemente an geeigneten Stellen zu verwenden, anstatt nur <code>&lt;div&gt;</code>-Elemente überall dort zu verwenden, wo ein Blocklevel-Container erforderlich ist, und die Vorteile daraus (wie z. B. verbesserte Barrierefreiheit).</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Grundlegende Abschnitte eines Dokuments

Webseiten können und werden recht unterschiedlich aussehen, aber sie neigen dazu, ähnliche Standardkomponenten zu teilen, es sei denn, die Seite zeigt ein Vollbildvideo oder Spiel, ist Teil eines Kunstprojekts oder ist einfach schlecht strukturiert:

- Header:
  - : Normalerweise ein großer Streifen oben mit einer großen Überschrift, einem Logo und möglicherweise einem Slogan. Dies bleibt normalerweise von einer Seite einer Website zur anderen gleich.
- Navigationsleiste:
  - : Links zu den Hauptbereichen der Website; in der Regel durch Menütasten, Links oder Registerkarten dargestellt. Wie der Header bleibt dieser Inhalt normalerweise von einer Webseite zur anderen konsistent — eine inkonsistente Navigation auf Ihrer Website führt nur zu verwirrten, frustrierten Benutzern. Viele Webdesigner betrachten die Navigationsleiste als Teil des Headers statt als ein einzelnes Element, aber das ist keine Voraussetzung; einige argumentieren sogar, dass es für [Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility) besser ist, die beiden zu trennen, da Screenreader die beiden Funktionen besser lesen können, wenn sie getrennt sind.
- Hauptinhalt:
  - : Ein großer Bereich in der Mitte, der den meisten einzigartigen Inhalt einer bestimmten Webseite enthält, z. B. das Video, das Sie ansehen möchten, oder die Hauptgeschichte, die Sie lesen, oder die Karte, die Sie anzeigen möchten, oder die Nachrichtenüberschriften usw. Dies ist der einzige Teil der Website, der definitiv von Seite zu Seite variiert!
- Sidebar:
  - : Einige periphere Informationen, Links, Zitate, Anzeigen usw. Gewöhnlich ist dies im Kontext zu dem, was im Hauptinhalt enthalten ist (zum Beispiel könnte auf einer Nachrichtenartikel-Seite die Sidebar die Biografie des Autors oder Links zu verwandten Artikeln enthalten), aber es gibt auch Fälle, in denen Sie einige wiederkehrende Elemente wie ein sekundäres Navigationssystem finden.
- Footer:
  - : Ein Streifen am unteren Rand der Seite, der in der Regel Kleingedrucktes, Copyright-Hinweise oder Kontaktinformationen enthält. Es ist ein Ort, um allgemeine Informationen (wie den Header) abzulegen, aber normalerweise sind diese Informationen nicht kritisch oder nebensächlich zur Website selbst. Der Footer wird manchmal auch für {{Glossary("SEO", "SEO")}}-Zwecke verwendet, indem Links für den schnellen Zugriff auf beliebte Inhalte bereitgestellt werden.

Eine "typische Website" könnte in etwa so strukturiert sein:

![Ein einfaches Beispiel für eine Website-Struktur mit einer Hauptüberschrift, einem Navigationsmenü, Hauptinhalt, einer Seitenleiste und einem Footer.](sample-website.png)

> [!NOTE]
> Das obige Bild illustriert die Hauptabschnitte eines Dokuments, die Sie mit HTML definieren können. Das _Erscheinungsbild_ der hier gezeigten Seite — einschließlich des Layouts, der Farben und Schriftarten — wird jedoch durch das Anwenden von [CSS](/de/docs/Learn_web_development/Core/Styling_basics) auf das HTML erzielt.

## HTML zur Strukturierung von Inhalten

Das gezeigte Beispiel ist zwar nicht schön, aber es eignet sich hervorragend, um ein typisches Website-Layout zu veranschaulichen. Einige Websites haben mehr Spalten, einige sind viel komplexer, aber Sie verstehen das Prinzip. Mit dem richtigen CSS könnten Sie fast beliebige Elemente verwenden, um die verschiedenen Abschnitte zu umrahmen und sie so gestalten, wie Sie es möchten. Wie bereits besprochen, müssen wir jedoch die Semantik respektieren und **das richtige Element für die richtige Aufgabe verwenden**.

Dies liegt daran, dass visuelle Merkmale nicht die ganze Geschichte erzählen. Wir verwenden Farbe und Schriftgröße, um die Aufmerksamkeit sehender Benutzer auf die nützlichsten Teile des Inhalts zu lenken, wie das Navigationsmenü und verwandte Links. Aber was ist zum Beispiel mit sehbehinderten Menschen, die möglicherweise Konzepte wie "rosa" und "große Schrift" nicht sehr nützlich finden?

> **Hinweis:** [Etwa 8% der Männer und 0,5% der Frauen](https://www.color-blindness.com/) sind farbenblind; oder anders gesagt, ungefähr 1 von 12 Männern und 1 von 200 Frauen. Blinde und sehbehinderte Menschen machen etwa 4-5% der Weltbevölkerung aus (im Jahr 2015 gab es [940 Millionen Menschen mit einem gewissen Grad an Sehverlust](https://en.wikipedia.org/wiki/Visual_impairment), während die Gesamtbevölkerung [bei etwa 7,5 Milliarden lag](https://en.wikipedia.org/wiki/World_human_population#/media/File:World_population_history.svg)).

In Ihrem HTML-Code können Sie Abschnitte von Inhalten basierend auf ihrer _Funktionalität_ markieren — Sie können Elemente verwenden, die die oben beschriebenen Inhaltsabschnitte unmissverständlich darstellen, und Hilfstechnologien wie Screenreader können diese Elemente erkennen und bei Aufgaben wie "die Hauptnavigation finden" oder "den Hauptinhalt finden" helfen. Wie wir bereits früher im Kurs erwähnt haben, gibt es eine Reihe von [Konsequenzen bei der nicht korrekten Verwendung der Elementstruktur und Semantik für die richtige Aufgabe](/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs#why_do_we_need_structure).

Um eine solche semantische Markierung zu implementieren, bietet HTML spezielle Tags, die Sie verwenden können, um solche Abschnitte darzustellen, beispielsweise:

- **Header:** {{htmlelement("header")}}.
- **Navigationsleiste:** {{htmlelement("nav")}}.
- **Hauptinhalt:** {{htmlelement("main")}}, mit verschiedenen Inhaltsunterabschnitten dargestellt durch {{HTMLElement("article")}}, {{htmlelement("section")}} und {{htmlelement("div")}}-Elemente.
- **Sidebar:** {{htmlelement("aside")}}; häufig in {{htmlelement("main")}} platziert.
- **Footer:** {{htmlelement("footer")}}.

### Erkundung des Beispielcodes

Das oben gezeigte Beispiel wird durch den folgenden Code dargestellt (Sie können das Beispiel auch in unserem [GitHub-Repository finden](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/document_and_website_structure/index.html)). Wir möchten, dass Sie sich die Auflistung unten ansehen, um zu sehen, welche Teile welchen Abschnitt der visuellen Ausgabe ausmachen.

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

Nehmen Sie sich Zeit, den Code zu überprüfen und zu verstehen — die Kommentare im Code sollten Ihnen auch helfen, ihn zu verstehen. Wir bitten Sie in diesem Artikel nicht um viel mehr, denn der Schlüssel zum Verständnis des Dokumentenlayouts besteht darin, eine solide HTML-Struktur zu schreiben und sie dann mit CSS zu gestalten. Wir warten darauf, dass Sie beginnen, CSS-Layout im Rahmen des CSS-Themas zu studieren.

## HTML-Layout-Elemente im Detail

Es ist gut, die Gesamtbedeutung aller HTML-Abschnittselemente im Detail zu verstehen — das ist etwas, woran Sie allmählich arbeiten werden, wenn Sie mehr Erfahrung mit der Webentwicklung sammeln. Viele Details finden Sie in unserem [HTML-Element-Referenz](/de/docs/Web/HTML/Reference/Elements). Für jetzt sind dies die Hauptdefinitionen, die Sie versuchen sollten zu verstehen:

- {{HTMLElement('main')}} ist für Inhalte, die _einzigartig für diese Seite_ sind. Verwenden Sie `<main>` nur _einmal_ pro Seite und platzieren Sie es direkt innerhalb von {{HTMLElement('body')}}. Idealerweise sollte es nicht innerhalb anderer Elemente verschachtelt sein.
- {{HTMLElement('article')}} umschließt einen Block verwandten Inhalts, der ohne den Rest der Seite in sich selbst Sinn ergibt (zum Beispiel ein einzelner Blog-Post).
- {{HTMLElement('section')}} ist ähnlich wie `<article>`, aber es ist mehr dafür gedacht, einen einzelnen Teil der Seite zu gruppieren, der ein einzelnes Stück Funktionalität (wie eine Mini-Karte oder eine Menge von Artikelüberschriften und Zusammenfassungen) oder ein Thema darstellt. Es wird als Best Practice angesehen, jede Sektion mit einer [Überschrift](/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs) zu beginnen; beachten Sie auch, dass Sie `<article>` in verschiedene `<section>`s oder `<section>`s in verschiedene `<article>`s aufteilen können, je nach Kontext.
- {{HTMLElement('aside')}} enthält Inhalte, die nicht direkt mit dem Hauptinhalt in Zusammenhang stehen, aber zusätzliche Informationen liefern können, die in gewisser Weise damit zusammenhängen (Glossareinträge, Autorenbiografie, verwandte Links usw.).
- {{HTMLElement('header')}} steht für eine Gruppe einleitenden Inhalts. Wenn es ein Kind von {{HTMLElement('body')}} ist, definiert es den globalen Header einer Webseite, aber wenn es ein Kind eines {{HTMLElement('article')}} oder {{HTMLElement('section')}} ist, definiert es einen spezifischen Header für diesen Abschnitt (versuchen Sie, dies nicht mit [Titeln und Überschriften](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#adding_a_title) zu verwechseln).
- {{HTMLElement('nav')}} enthält die Hauptnavigationsfunktionalität für die Seite. Sekundäre Links usw. würden nicht in der Navigation erscheinen.
- {{HTMLElement('footer')}} steht für eine Gruppe von Endinhalten für eine Seite.

Jedes der oben genannten Elemente kann angeklickt werden, um den entsprechenden Artikel im Abschnitt "HTML-Element-Referenz" zu lesen, der weitere Details zu jedem bietet.

### Nicht-semantische Wrapper

Manchmal stoßen Sie auf eine Situation, in der Sie kein ideales semantisches Element finden können, um einige Elemente zusammenzufassen oder Inhalt zu umhüllen. Manchmal möchten Sie einfach eine Gruppe von Elementen zusammenfassen, um sie alle als eine einzelne Einheit mit etwas {{Glossary("CSS", "CSS")}} oder {{Glossary("JavaScript", "JavaScript")}} zu beeinflussen. Für solche Fälle bietet HTML die {{HTMLElement("div")}} und {{HTMLElement("span")}}-Elemente. Sie sollten diese vorzugsweise mit einem geeigneten [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class)-Attribut verwenden, um ihnen eine Art Label zu geben, damit sie leicht angezielt werden können.

{{HTMLElement("span")}} ist ein Inline-nicht-semantisches Element, das Sie nur verwenden sollten, wenn Sie kein besseres semantisches Textelement zum Umhüllen Ihrer Inhalte finden können oder keine spezifische Bedeutung hinzufügen möchten. Zum Beispiel:

```html
<p>
  The King walked drunkenly back to his room at 01:00, the beer doing nothing to
  aid him as he staggered through the door.
  <span class="editor-note">
    [Editor's note: At this point in the play, the lights should be down low].
  </span>
</p>
```

In diesem Fall soll die Notiz des Herausgebers lediglich zusätzliche Anweisungen für den Regisseur des Stücks geben; sie soll keine zusätzlichen semantischen Bedeutungen haben. Für sehende Benutzer würde CSS möglicherweise verwendet, um die Notiz etwas vom Haupttext zu distanzieren.

{{HTMLElement("div")}} ist ein Blocklevel-nicht-semantisches Element, das Sie nur verwenden sollten, wenn Ihnen kein besseres semantisches Blockelement einfällt oder Sie keine spezifische Bedeutung hinzufügen möchten. Stellen Sie sich zum Beispiel ein Einkaufswagen-Widget vor, das Sie jederzeit während Ihrer Zeit auf einer E-Commerce-Site aufrufen können:

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

Dies ist wirklich kein `<aside>`, da es nicht notwendigerweise mit dem Hauptinhalt der Seite in Beziehung steht (Sie möchten es von überall aus einsehbar haben). Es rechtfertigt auch nicht unbedingt die Verwendung eines `<section>`, da es nicht Teil des Hauptinhalts der Seite ist. Ein `<div>` ist in diesem Fall völlig in Ordnung. Wir haben eine Überschrift als Wegweiser eingefügt, um Screenreader-Nutzern zu helfen, es zu finden.

> [!WARNING]
> Divs sind so bequem zu verwenden, dass es leicht ist, sie zu übermäßig zu verwenden. Da sie keinen semantischen Wert haben, füllen sie einfach Ihren HTML-Code auf. Achten Sie darauf, sie nur dann zu verwenden, wenn es keine bessere semantische Lösung gibt, und versuchen Sie, ihre Nutzung auf ein Minimum zu beschränken, sonst werden Sie Schwierigkeiten haben, Ihre Dokumente zu aktualisieren und zu pflegen.

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Scrimbas [Semantisches HTML](https://scrimba.com/learn-accessible-web-design-c031/~0b?via=mdn) <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> interaktives Tutorial bietet eine nützliche Zusammenfassung des semantischen Markups und warum Sie es verwenden sollten, plus eine Herausforderung, die Ihre Fähigkeit testet, einen HTML-Code mit semantischen Elementen zu verbessern.

### Zeilenumbrüche und horizontale Linien

Zwei Elemente, die Sie gelegentlich verwenden werden und über die Sie Bescheid wissen möchten, sind {{htmlelement("br")}} und {{htmlelement("hr")}}.

#### \<br>: das Zeilenumbruch-Element

`<br>` erstellt einen Zeilenumbruch in einem Absatz; es ist die einzige Möglichkeit, eine feste Struktur in einer Situation zu erzwingen, in der Sie eine Reihe von festen kurzen Zeilen haben möchten, wie in einer Postadresse oder einem Gedicht. Zum Beispiel:

```html
<p>
  There once was a man named O'Dell<br />
  Who loved to write HTML<br />
  But his structure was bad, his semantics were sad<br />
  and his markup didn't read very well.
</p>
```

Ohne die `<br>`-Elemente würde der Absatz einfach in einer langen Zeile dargestellt werden (wie wir bereits früher im Kurs gesagt haben, [ignoriert HTML den meisten Whitespace](/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax#whitespace_in_html)); mit `<br>`-Elementen im Code wird das Markup folgendermaßen angezeigt:

{{EmbedLiveSample('br_the_line_break_element', '100%', 150)}}

#### \<hr>: das thematische Trennelement

`<hr>`-Elemente erstellen eine horizontale Linie im Dokument, die einen thematischen Wechsel im Text kennzeichnet (wie ein Themen- oder Szenenwechsel). Visuell sieht es einfach wie eine horizontale Linie aus. Als Beispiel:

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

Würde so angezeigt werden:

{{EmbedLiveSample('hr_the_thematic_break_element', '100%', '185px')}}

## Strukturierung einer einfachen Website

Der nächste Schritt nach der Planung der Struktur einer einzelnen Webseite besteht darin, die Struktur einer ganzen mehrseitigen Website zu planen, einschließlich wie sie angeordnet und verbunden werden sollen, um die bestmögliche Benutzererfahrung zu gewährleisten. Dies wird als {{Glossary("Information_architecture", "Informationsarchitektur")}} bezeichnet.

In einer großen, komplexen Website kann viel Planung in diesen Prozess fließen, aber für eine einfache Website mit einigen Seiten kann es eine schnelle und unterhaltsame Übung sein.

Der Prozess könnte so aussehen:

1. Sie haben einige Elemente, die für die meisten (wenn nicht alle) Seiten gemeinsam sind – wie das Navigationsmenü und den Footer-Inhalt. Wenn Ihre Website zum Beispiel für ein Unternehmen ist, ist es eine gute Idee, Ihre Kontaktinformationen im Footer auf jeder Seite verfügbar zu haben. Notieren Sie, was Sie auf jeder Seite gemeinsam haben möchten. Zum Beispiel:

   - Header:
     - Titel und Logo
     - Sprache der Seite wählen
   - Navigationsmenü
   - Footer:
     - Copyright-Hinweis
     - Link zu den Geschäftsbedingungen, Kontaktdaten und Barrierefreiheitspolitik

2. Zeichnen Sie als nächstes eine grobe Skizze dessen, wie Sie die Struktur jeder Seite aussehen lassen möchten (es könnte wie unsere oben einfache Website aussehen). Notieren Sie, was jeder Block sein wird.![Ein einfaches Diagramm einer Beispielsitenstruktur mit einem Header, Hauptinhalt, zwei optionalen Seitenleisten und einem Footer](site-structure.png)
3. Jetzt brainstormen Sie alle anderen (nicht auf jeder Seite gemeinsamen) Inhalte, die Sie auf Ihrer Website haben möchten. Zum Beispiel:

   - Flüge
   - Unterkünfte
   - Transport
   - Aktivitäten
   - Sonderangebote
   - Beliebte Reisepakete, z. B. Wintersonne, Skifahren
   - Suchergebnisse
   - Bewertungen
   - Visa-/Einreisebestimmungen
   - Währung
   - Sprachen und Kultur
   - Urlaubsbuchungen

4. Als nächstes versuchen Sie, all diese Inhalte in Gruppen zu sortieren, um Ihnen eine Vorstellung davon zu geben, welche Teile auf verschiedenen Seiten zusammenleben könnten. Das ist sehr ähnlich zu einer Technik namens {{Glossary("Card_sorting", "Card Sorting")}}.

   - Suche
     - Flüge
     - Unterkünfte
     - Transport
     - Aktivitäten
   - Sonderangebote
     - Beliebte Urlaubsreisen
     - Wintersonne
     - Skifahren
   - Suchergebnisse
     - Bewertungen
     - Länderspezifische Infos
       - Visa-/Einreisebestimmungen
       - Währung
       - Sprachen und Kultur
   - Urlaubsbuchungen

5. Jetzt versuchen Sie, ein grobes Sitemap zu skizzieren — haben Sie für jede Seite auf Ihrer Website ein Kästchen und ziehen Sie Linien, um den typischen Workflow zwischen den Seiten zu zeigen. Die Startseite wird wahrscheinlich oben oder in der Mitte sein und mit den meisten, wenn nicht allen anderen verlinkt sein. Die meisten Seiten auf einer kleinen Website sollten über die Hauptnavigation verfügbar sein, obwohl es Ausnahmen gibt. Möglicherweise möchten Sie auch Notizen darüber machen, wie Dinge präsentiert werden könnten.![Eine Karte der Website, die die Startseite, Länder-Seite, Suchergebnisse, Sonderangebote-Seite und den Checkout- und Kaufablauf zeigt](site-map.png)

Versuchen Sie, die obige Übung für eine Website Ihrer eigenen Kreation auszuführen. Worüber möchten Sie eine Website erstellen? Als Stretch-Goal verwenden Sie das bisher erworbene HTML-Wissen, um einige der Seiten auf der Site zu erstellen. Sie könnten unser [grundlegendes HTML-Template](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) als Ausgangspunkt verwenden.

## Zusammenfassung

An diesem Punkt sollten Sie eine bessere Vorstellung davon haben, wie man eine Webseite/Website strukturiert. Im nächsten Artikel dieses Moduls werden wir einige fortgeschrittene Texttechniken betrachten.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Lists", "Learn_web_development/Core/Structuring_content/Advanced_text_features", "Learn_web_development/Core/Structuring_content")}}
