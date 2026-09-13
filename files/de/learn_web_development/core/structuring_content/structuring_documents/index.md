---
title: Strukturierung von Dokumenten
slug: Learn_web_development/Core/Structuring_content/Structuring_documents
l10n:
  sourceCommit: 2066cc916dfdcbb782340bf0ce562b230e947cba
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Marking_up_a_letter", "Learn_web_development/Core/Structuring_content/Creating_links", "Learn_web_development/Core/Structuring_content")}}

Zusätzlich zur Definition einzelner Teile Ihrer Seite (wie „ein Absatz“ oder „ein Bild“) bietet {{Glossary("HTML", "HTML")}} auch eine Anzahl von Block-Elementen, die verwendet werden, um Bereiche Ihrer Website zu definieren, wie „den Header“, „das Navigationsmenü“ oder „die Hauptinhaltsspalte“. Dieser Artikel befasst sich damit, wie man eine grundlegende Website-Struktur plant und das HTML schreibt, um diese darzustellen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML, wie sie in
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        >behandelt werden. Text-Bedeutungsebene wie <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
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
          <li>Die gängigen HTML-semantischen Struktur-Elemente, zum Beispiel <code>&lt;main&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code> und <code>&lt;footer&gt;</code>, und wie man sie korrekt verwendet.</li>
          <li>Die Notwendigkeit, semantische Elemente an geeigneten Stellen zu verwenden, anstatt einfach <code>&lt;div&gt;</code>-Elemente überall dort zu verwenden, wo ein Block-Container benötigt wird, und die Vorteile davon (wie verbesserte Zugänglichkeit).</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Grundlegende Abschnitte eines Dokuments

Webseiten können ziemlich unterschiedlich aussehen, aber sie neigen alle dazu, ähnliche Standardkomponenten zu teilen, es sei denn, die Seite zeigt ein Vollbildvideo oder -spiel, ist Teil eines Kunstprojekts oder ist einfach schlecht strukturiert:

- Header:
  - : Normalerweise ein großer Streifen oben mit einer großen Überschrift, einem Logo und eventuell einem Slogan. Dieser bleibt normalerweise von einer Seite zur nächsten einer Website gleich.
- Navigationsleiste:
  - : Links zu den Hauptabschnitten der Website; normalerweise durch Menütasten, Links oder Tabs dargestellt. Wie der Header bleibt dieser Inhalt normalerweise auf allen Webseiten konsistent — inkonsistente Navigation auf Ihrer Website führt nur zu verwirrten und frustrierten Nutzern. Viele Webdesigner betrachten die Navigationsleiste als Teil des Headers und nicht als einzelnes Element, aber das ist keine Voraussetzung; in der Tat argumentieren einige, dass es für die [Zugänglichkeit](/de/docs/Learn_web_development/Core/Accessibility) besser ist, die beiden getrennt zu halten, da Bildschirmleser die beiden Funktionen besser lesen können, wenn sie getrennt sind.
- Hauptinhalt:
  - : Ein großer Bereich in der Mitte, der den größten Teil des einzigartigen Inhalts einer bestimmten Webseite enthält, zum Beispiel das Video, das Sie ansehen möchten, oder die Hauptgeschichte, die Sie lesen, oder die Karte, die Sie sich ansehen möchten, oder die Nachrichtenüberschriften usw. Dies ist der eine Teil der Website, der definitiv von Seite zu Seite variieren wird!
- Seitenleiste:
  - : Einige periphere Informationen, Links, Zitate, Werbung usw. Normalerweise steht dies im Kontext zu dem, was im Hauptinhalt enthalten ist (zum Beispiel könnte auf einer Nachrichtenseite die Seitenleiste die Biografie des Autors oder Links zu verwandten Artikeln enthalten), aber es gibt auch Fälle, in denen Sie wiederkehrende Elemente wie ein sekundäres Navigationssystem finden.
- Footer:
  - : Ein Streifen am unteren Rand der Seite, der in der Regel Kleingedrucktes, Urheberrechtshinweise oder Kontaktinformationen enthält. Es ist ein Platz, um allgemeine Informationen unterzubringen (wie der Header), aber normalerweise sind diese Informationen nicht kritisch oder sekundär zur Website selbst. Der Footer wird manchmal auch für {{Glossary("SEO", "SEO")}}-Zwecke verwendet, indem Links für den schnellen Zugriff auf beliebte Inhalte bereitgestellt werden.

Eine „typische Website“ könnte ungefähr so strukturiert sein:

![Beispiel für eine einfache Website-Struktur mit einer Hauptüberschrift, einem Navigationsmenü, Hauptinhalt, Seitenleiste und Footer.](sample-website.png)

> [!NOTE]
> Das obige Bild zeigt die Hauptabschnitte eines Dokuments, die Sie mit HTML definieren können. Das _Erscheinungsbild_ der hier gezeigten Seite — einschließlich Layout, Farben und Schriftarten — wird jedoch durch Anwendung von [CSS](/de/docs/Learn_web_development/Core/Styling_basics) auf das HTML erreicht.

## HTML zur Strukturierung von Inhalten

Das gezeigte Beispiel sieht zwar nicht schön aus, eignet sich aber perfekt, um ein typisches Website-Layoutbeispiel zu veranschaulichen. Einige Websites haben mehr Spalten, einige sind viel komplexer, aber Sie verstehen die Idee. Mit dem richtigen CSS könnten Sie so ziemlich jedes Element verwenden, um die verschiedenen Abschnitte zu umwickeln und es so aussehen zu lassen, wie Sie es möchten, aber wie bereits erwähnt, müssen wir die Semantik respektieren und **das richtige Element für den richtigen Zweck verwenden**.

Dies liegt daran, dass die visuelle Darstellung nicht die ganze Geschichte erzählt. Wir verwenden Farben und Schriftgrößen, um den sehenden Benutzern zu zeigen, welcher Teil des Inhalts am nützlichsten ist, wie das Navigationsmenü und verwandte Links, aber was ist mit sehbehinderten Menschen, die Konzepte wie „pink“ und „große Schrift“ möglicherweise nicht als sehr nützlich empfinden?

> [!NOTE]
> [Ungefähr 8 % der Männer und 0,5 % der Frauen](https://www.color-blindness.com/) sind farbenblind; oder, anders ausgedrückt, etwa 1 von 12 Männern und 1 von 200 Frauen. Blinde und sehbehinderte Menschen repräsentieren etwa 4-5 % der Weltbevölkerung (im Jahr 2015 gab es [940 Millionen Menschen mit einer Form von Sehverlust](https://en.wikipedia.org/wiki/Visual_impairment), während die Gesamtbevölkerung [etwa 7,5 Milliarden](https://en.wikipedia.org/wiki/World_human_population#/media/File:World_population_history.svg) betrug).

In Ihrem HTML-Code können Sie Inhaltsabschnitte basierend auf ihrer _Funktionalität_ markieren — Sie können Elemente verwenden, die die oben beschriebenen Inhaltsabschnitte eindeutig repräsentieren, und unterstützende Technologien wie Bildschirmleser können diese Elemente erkennen und bei Aufgaben wie „Finden Sie die Hauptnavigation“ oder „Finden Sie den Hauptinhalt“ helfen. Wie wir bereits vorher im Kurs erwähnt haben, gibt es eine Reihe von [Konsequenzen, wenn man nicht die richtige Elementstruktur und Semantik für den richtigen Zweck nutzt](/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs#why_do_we_need_structure).

Um eine solche semantische Markierung zu implementieren, bietet HTML spezielle Tags, die Sie verwenden können, um solche Abschnitte darzustellen, zum Beispiel:

- **header:** {{htmlelement("header")}}.
- **Navigationsleiste:** {{htmlelement("nav")}}.
- **Hauptinhalt:** {{htmlelement("main")}}, mit verschiedenen Inhaltsunterabschnitten repräsentiert durch {{HTMLElement("article")}}, {{htmlelement("section")}} und {{htmlelement("div")}}-Elemente.
- **Seitenleiste:** {{htmlelement("aside")}}; oft innerhalb von {{htmlelement("main")}} platziert.
- **footer:** {{htmlelement("footer")}}.

### Erforschung des Codes für unser Beispiel

Das oben gezeigte Beispiel wird durch den folgenden Code repräsentiert (Sie können den Code auch in unserem [GitHub-Repository finden](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/document_and_website_structure/index.html) und [das Beispiel live ansehen](https://mdn.github.io/learning-area/html/introduction-to-html/document_and_website_structure/)). Wir möchten, dass Sie sich das untenstehende Listing ansehen, um zu sehen, welche Teile jede Sektion des visuellen Outputs ausmachen.

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

Nehmen Sie sich Zeit, um den Code zu überprüfen und zu verstehen – die Kommentare im Code sollten Ihnen auch dabei helfen, ihn zu verstehen. Wir bitten Sie in diesem Artikel nicht viel mehr zu tun, denn der Schlüssel zum Verständnis der Dokumentenlayout besteht darin, eine solide HTML-Struktur zu schreiben und diese dann mit CSS zu gestalten. Darauf warten wir, bis Sie beginnen, das CSS-Layout als Teil des CSS-Themas zu studieren.

## HTML-Layout-Elemente im Detail

Es ist gut, die allgemeine Bedeutung aller HTML-Abschnittselemente im Detail zu verstehen – das ist etwas, woran Sie kontinuierlich arbeiten, während Sie mehr Erfahrung mit der Webentwicklung sammeln. Sie können viele Details finden, indem Sie unser [HTML-Element-Referenz](/de/docs/Web/HTML/Reference/Elements) lesen. Für den Moment sind dies die Hauptdefinitionen, die Sie verstehen sollten:

- {{HTMLElement('main')}} ist für Inhalte, _die einzigartig für diese Seite sind._ Verwenden Sie `<main>` nur _einmal_ pro Seite und platzieren Sie es direkt innerhalb von {{HTMLElement('body')}}. Idealerweise sollte dies nicht in andere Elemente verschachtelt sein.
- {{HTMLElement('article')}} umschließt einen Block verwandter Inhalte, die auch ohne den Rest der Seite Sinn ergeben (zum Beispiel ein einzelner Blogpost).
- {{HTMLElement('section')}} ist ähnlich wie `<article>`, aber mehr dazu da, einen einzigen Teil einer Seite zu gruppieren, der eine einzelne Funktionalität darstellt (wie eine Minikarte oder eine Reihe von Artikelüberschriften und -zusammenfassungen) oder ein Thema. Es wird als beste Praxis angesehen, jeden Abschnitt mit einer [Überschrift](/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs) zu beginnen; beachten Sie auch, dass Sie `<article>`s in mehrere `<section>`s unterteilen können oder `<section>`s in mehrere `<article>`s, abhängig vom Kontext.
- {{HTMLElement('aside')}} enthält Inhalte, die nicht direkt mit dem Hauptinhalt zusammenhängen, aber zusätzliche Informationen bereitstellen können, die indirekt damit verbunden sind (Glossareinträge, Autorenbiografie, verwandte Links usw.).
- {{HTMLElement('header')}} repräsentiert eine Gruppe einleitender Inhalte. Ist es ein Kind von {{HTMLElement('body')}}, definiert es den globalen Kopf einer Webseite, aber wenn es ein Kind von {{HTMLElement('article')}} oder {{HTMLElement('section')}} ist, definiert es einen spezifischen Kopf für diesen Abschnitt (versuchen Sie nicht, dies mit [Titeln und Überschriften](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#adding_a_title) zu verwechseln).
- {{HTMLElement('nav')}} enthält die Hauptnavigationsfunktionalität für die Seite. Sekundäre Links usw. würden nicht in der Navigation untergebracht werden.
- {{HTMLElement('footer')}} repräsentiert eine Gruppe von Endinhalten für eine Seite.

Jedes der genannten Elemente kann angeklickt werden, um den entsprechenden Artikel im Abschnitt „HTML-Element-Referenz“ zu lesen, der mehr Details zu jedem bietet.

### Nicht-semantische Wrapper

Manchmal stößt man auf Situationen, in denen man kein ideales semantisches Element finden kann, um einige Elemente zusammenzufassen oder Inhalte zu umwickeln. Manchmal möchte man einfach eine Gruppe von Elementen zusammenfassen, um sie als einzelne Einheit mit etwas {{Glossary("CSS", "CSS")}} oder {{Glossary("JavaScript", "JavaScript")}} zu beeinflussen. Für solche Fälle bietet HTML die {{HTMLElement("div")}}- und {{HTMLElement("span")}}-Elemente. Sie sollten diese vorzugsweise mit einem geeigneten [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class)-Attribut verwenden, um ihnen eine Art von Bezeichnung zu geben, damit sie leicht anvisiert werden können.

{{HTMLElement("span")}} ist ein nicht-semantisches Inline-Element, das Sie nur verwenden sollten, wenn Sie kein besseres semantisches Textelement zur Hand haben oder kein spezifisches Bedeutungsmerkmal hinzufügen möchten. Zum Beispiel:

```html
<p>
  The King walked drunkenly back to his room at 01:00, the beer doing nothing to
  aid him as he staggered through the door.
  <span class="editor-note">
    [Editor's note: At this point in the play, the lights should be down low].
  </span>
</p>
```

In diesem Fall soll die Anmerkung des Herausgebers lediglich als zusätzliche Anweisung für den Regisseur des Stücks dienen; sie soll keine zusätzliche semantische Bedeutung haben. Für sehende Benutzer würde CSS möglicherweise verwendet werden, um die Anmerkung etwas vom Haupttext zu distanzieren.

{{HTMLElement("div")}} ist ein nicht-semantisches Block-Element, das Sie nur verwenden sollten, wenn Sie kein besseres semantisches Block-Element finden können oder keine spezifische Bedeutung hinzufügen möchten. Zum Beispiel, stellen Sie sich ein Einkaufswagen-Widget vor, das Sie jederzeit während Ihrer Zeit auf einer E-Commerce-Site aufrufen könnten:

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

Dies ist wirklich kein `<aside>`, da es sich nicht notwendigerweise auf den Hauptinhalt der Seite bezieht (Sie möchten es von überall aus ansehen können). Es rechtfertigt nicht einmal wirklich die Verwendung eines `<section>`, da es nicht Teil des Hauptinhalts der Seite ist. Daher ist ein `<div>` in diesem Fall in Ordnung. Wir haben eine Überschrift als Wegweiser hinzugefügt, um Bildschirmbenutzern beim Auffinden zu helfen.

> [!WARNING]
> Divs sind so bequem zu verwenden, dass es leicht ist, sie zu oft zu verwenden. Da sie keinen semantischen Wert haben, verstopfen sie nur Ihren HTML-Code. Achten Sie darauf, sie nur dann zu verwenden, wenn es keine bessere semantische Lösung gibt, und versuchen Sie, ihren Gebrauch auf ein Minimum zu reduzieren, sonst werden Sie es schwer haben, Ihre Dokumente zu aktualisieren und zu pflegen.

> [!NOTE]
> Scrimba's [Semantic HTML](https://scrimba.com/learn-accessible-web-design-c031/~0b?via=mdn) <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> interaktives Tutorial bietet eine nützliche Zusammenfassung der semantischen Markierung und warum Sie sie verwenden sollten, sowie eine Herausforderung, die Ihre Fähigkeit testet, einen HTML-Code mit semantischen Elementen zu verbessern.

### Zeilenumbrüche und horizontale Linien

Zwei Elemente, die Sie gelegentlich verwenden werden und über die Sie Bescheid wissen sollten, sind {{htmlelement("br")}} und {{htmlelement("hr")}}.

#### \<br>: das Zeilenumbruch-Element

`<br>` erzeugt einen Zeilenumbruch in einem Absatz; es ist die einzige Möglichkeit, eine starre Struktur zu erzwingen, in einer Situation, in der Sie eine Reihe von festen kurzen Zeilen wünschen, wie bei einer Postadresse oder einem Gedicht. Zum Beispiel:

```html
<p>
  There once was a man named O'Dell<br />
  Who loved to write HTML<br />
  But his structure was bad, his semantics were sad<br />
  and his markup didn't read very well.
</p>
```

Ohne die `<br>`-Elemente würde der Absatz nur in einer langen Zeile wiedergegeben werden (wie wir früher im Kurs gesagt haben, [HTML ignoriert die meisten Leerzeichen](/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax#whitespace_in_html)); mit `<br>`-Elementen im Code wird das Markup so dargestellt:

{{EmbedLiveSample('br_the_line_break_element', '100%', 150)}}

#### \<hr>: das thematische Trennzeichen

`<hr>`-Elemente erzeugen eine horizontale Linie im Dokument, die auf einen thematischen Wechsel im Text (wie einen Themen- oder Szenenwechsel) hinweist. Optisch sieht es einfach wie eine horizontale Linie aus. Als Beispiel:

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

Würde so dargestellt werden:

{{EmbedLiveSample('hr_the_thematic_break_element', '100%', '185px')}}

## Strukturierung einer grundlegenden Website

Der nächste Schritt nach der Planung der Struktur einer einzelnen Webseite ist die Planung der Struktur einer ganzen mehrseitigen Website, einschließlich wie sie angeordnet werden und wie sie zur besten Benutzererfahrung miteinander verlinkt werden sollten. Dies nennt man {{Glossary("Information_architecture", "Informationsarchitektur")}}.

Bei einer großen, komplexen Website kann viel Planung in diesen Prozess einfließen, aber für eine grundlegende Website mit ein paar Seiten kann es eine schnelle und unterhaltsame Übung sein.

Der Prozess könnte folgendermaßen aussehen:

1. Sie werden einige Elemente haben, die den meisten (wenn nicht allen) Seiten gemeinsam sind – wie das Navigationsmenü und die Footer-Inhalte. Wenn Ihr Standort zum Beispiel ein Unternehmen ist, ist es eine gute Idee, Ihre Kontaktinformationen im Footer auf jeder Seite verfügbar zu haben. Notieren Sie sich, was Sie auf jeder Seite haben möchten. Zum Beispiel:
   - Header:
     - Titel und Logo
     - Sprachauswahl der Seite
   - Navigationsmenü
   - Footer:
     - Urheberrechtshinweis
     - Link zu Geschäftsbedingungen, Kontaktdetails und Zugänglichkeitspolitik

2. Zeichnen Sie nun eine grobe Skizze davon, wie Sie die Struktur jeder Seite haben möchten (es könnte wie unsere einfache Website oben aussehen). Notieren Sie, was jeder Block sein wird![Ein einfaches Diagramm einer Beispiel-Sitestruktur, mit Header, Hauptinhaltsbereich, zwei optionalen Seitenleisten und Footer](/shared-assets/images/diagrams/learn/structuring-documents/site-structure.svg)
3. Jetzt brainstormen Sie alle anderen (nicht auf jeder Seite gemeinsamen) Inhalte, die Sie auf Ihrer Website haben möchten. Zum Beispiel:
   - Flüge
   - Unterkunft
   - Transport
   - Dinge zu tun
   - Sonderangebote
   - Beliebte Urlaubsangebote, zum Beispiel Wintersonne, Skifahren
   - Suchergebnisse
   - Bewertungen
   - Visum-/Einreisebestimmungen
   - Währung
   - Sprachen und Kultur
   - Urlaub kaufen

4. Versuchen Sie nun, alle diese Inhaltselemente in Gruppen zu ordnen, um Ihnen eine Vorstellung davon zu geben, welche Teile zusammen auf verschiedenen Seiten leben könnten. Dies ist sehr ähnlich einer Technik, die als {{Glossary("Card_sorting", "Cardsorting")}} bekannt ist.
   - Suche
     - Flüge
     - Unterkunft
     - Transport
     - Dinge zu tun
   - Sonderangebote
     - Beliebte Urlaube
     - Wintersonne
     - Skifahren
   - Suchergebnisse
     - Bewertungen
     - Landesspezifische Informationen
       - Visum-/Einreisebestimmungen
       - Währung
       - Sprachen und Kultur
   - Urlaub kaufen

5. Versuchen Sie nun, eine grobe Sitemap zu skizzieren – haben Sie ein Feld für jede Seite auf Ihrer Seite und zeichnen Sie Linien, um den typischen Workflow zwischen den Seiten zu zeigen. Die Startseite wird wahrscheinlich oben oder in der Mitte sein und zu den meisten, wenn nicht allen anderen verlinken. Die meisten Seiten in einer kleinen Site sollten über die Hauptnavigation verfügbar sein, obwohl es Ausnahmen gibt. Sie könnten auch Anmerkungen darüber machen, wie Dinge präsentiert werden könnten![Eine Karte der Seite, die die Homepage, die Landesseite, Suchergebnisse, Sonderseite und den Checkout- und Kaufablauf zeigt](/shared-assets/images/diagrams/learn/structuring-documents/site-map.svg)

Versuchen Sie, die obige Übung für eine Website mit eigener Kreation durchzuführen. Worum möchten Sie eine Seite erstellen? Als Stretch-Goal verwenden Sie das HTML-Wissen, das Sie bisher erworben haben, um einige der Seiten auf der Site zu erstellen. Sie könnten unser [grundlegendes HTML-Template](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) als Ausgangspunkt verwenden.

## Zusammenfassung

An diesem Punkt sollten Sie eine bessere Vorstellung davon haben, wie man eine Webseite/Website strukturiert. Im nächsten Artikel dieses Moduls werden wir uns ansehen, wie man Hyperlinks erstellt, eine der grundlegenden Funktionen des Webs.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Marking_up_a_letter", "Learn_web_development/Core/Structuring_content/Creating_links", "Learn_web_development/Core/Structuring_content")}}
