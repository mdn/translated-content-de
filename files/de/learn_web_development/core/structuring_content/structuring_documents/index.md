---
title: Strukturierung von Dokumenten
slug: Learn_web_development/Core/Structuring_content/Structuring_documents
l10n:
  sourceCommit: 65c873fda639b035b94db77dd0f9373f38549aa0
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Marking_up_a_letter", "Learn_web_development/Core/Structuring_content/Creating_links", "Learn_web_development/Core/Structuring_content")}}

Zusätzlich zur Definition einzelner Teile Ihrer Seite (wie "ein Absatz" oder "ein Bild") verfügt {{Glossary("HTML", "HTML")}} auch über eine Reihe von Blockelementen, die verwendet werden, um Bereiche Ihrer Website zu definieren, wie "der Header", "das Navigationsmenü" oder "die Hauptinhalts-Spalte". Dieser Artikel befasst sich damit, wie man eine grundlegende Website-Struktur plant und das HTML schreibt, um diese Struktur darzustellen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende HTML-Kenntnisse, wie in
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >HTML-Grundsyntax</a
        > behandelt. Textbezogene Semantik wie <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
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
          <li>Die gemeinsamen semantischen HTML-Strukturelemente, beispielsweise <code>&lt;main&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code> und <code>&lt;footer&gt;</code>, und wie man sie korrekt verwendet.</li>
          <li>Die Notwendigkeit, semantische Elemente an geeigneten Stellen zu verwenden, anstatt einfach <code>&lt;div&gt;</code>-Elemente überall zu verwenden, wo ein block-level Container erforderlich ist, und die Vorteile davon (wie verbesserte Zugänglichkeit).</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Grundlegende Sektionen eines Dokuments

Webseiten können und werden sehr unterschiedlich aussehen, aber sie neigen dazu, ähnliche Standardkomponenten zu teilen, es sei denn, die Seite zeigt ein Video oder Spiel im Vollbildmodus, ist Teil eines Kunstprojekts oder ist einfach schlecht strukturiert:

- Header:
  - : Normalerweise ein großer Streifen oben mit einer großen Überschrift, einem Logo und vielleicht einem Slogan. Dies bleibt normalerweise auf allen Seiten einer Website gleich.
- Navigationsleiste:
  - : Links zu den Hauptbereichen der Seite; normalerweise dargestellt durch Menübuttons, Links oder Tabs. Wie der Header bleibt dieser Inhalt normalerweise von einer Webseite zur anderen konsistent – inkonsistente Navigation auf Ihrer Website führt nur zu verwirrten, frustrierten Benutzern. Viele Webdesigner erachten die Navigationsleiste als Teil des Headers, nicht als Einzelkomponente, aber das ist keine Anforderung; tatsächlich argumentieren einige auch, dass es für die [Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility) besser ist, wenn die beiden getrennt sind, da Bildschirmlesegeräte die Funktionen besser lesen können, wenn sie getrennt sind.
- Hauptinhalt:
  - : Ein großer Bereich in der Mitte, der den größten Teil des einzigartigen Inhalts einer bestimmten Webseite enthält, beispielsweise das Video, das Sie sich ansehen möchten, oder die Hauptgeschichte, die Sie lesen, oder die Karte, die Sie ansehen möchten, oder die Schlagzeilen, usw. Dies ist der Teil der Website, der definitiv von Seite zu Seite variieren wird!
- Seitenleiste:
  - : Einige periphere Infos, Links, Zitate, Anzeigen, usw. Dies ist normalerweise kontextbezogen zu dem, was im Hauptinhalt enthalten ist (zum Beispiel könnte auf einer Nachrichtenseite die Seitenleiste die Biografie des Autors oder Links zu verwandten Artikeln enthalten), aber es gibt auch Fälle, in denen Sie einige wiederkehrende Elemente finden, wie ein sekundäres Navigationssystem.
- Footer:
  - : Ein Streifen am unteren Rand der Seite, der normalerweise Kleingedrucktes, Urheberrechtsvermerke oder Kontaktinformationen enthält. Es ist ein Ort, um allgemeine Informationen zu platzieren (wie der Header), aber normalerweise sind diese Informationen nicht kritisch oder sekundär für die Website selbst. Der Footer wird manchmal auch für {{Glossary("SEO", "SEO")}}-Zwecke verwendet, indem Links für den schnellen Zugriff auf beliebte Inhalte bereitgestellt werden.

Eine "typische Website" könnte folgendermaßen strukturiert sein:

![Ein einfaches Website-Strukturbeispiel mit einer Hauptüberschrift, Navigationsmenü, Hauptinhalt, Seitenleiste und Footer.](sample-website.png)

> [!NOTE]
> Das obige Bild veranschaulicht die Hauptbereiche eines Dokuments, die Sie mit HTML definieren können. Das _Erscheinungsbild_ der hier gezeigten Seite – einschließlich Layout, Farben und Schriftarten – wird jedoch durch die Anwendung von [CSS](/de/docs/Learn_web_development/Core/Styling_basics) auf das HTML erreicht.

## HTML zur Strukturierung von Inhalten

Das oben gezeigte Beispiel ist nicht schön, aber es eignet sich gut zur Veranschaulichung eines typischen Website-Layout-Beispiels. Einige Websites haben mehr Spalten, einige sind viel komplexer, aber der Gedanke wird klar. Mit dem richtigen CSS könnten Sie so ziemlich jede Elemente verwenden, um verschiedene Bereiche zu umschließen und es so aussehen lassen, wie Sie es möchten, aber wie vorher besprochen, müssen wir Semantik respektieren und **das richtige Element für die richtige Aufgabe verwenden**.

Dies liegt daran, dass visuelle Darstellungen nicht die ganze Geschichte erzählen. Wir verwenden Farbe und Schriftgröße, um sehenden Benutzern die nützlichsten Teile des Inhalts näher zu bringen, wie das Navigationsmenü und verwandte Links, aber was ist mit sehbehinderten Menschen, die Konzepte wie "rosa" und "große Schrift" möglicherweise nicht sehr nützlich finden?

> [!NOTE]
> [Ungefähr 8% der Männer und 0.5% der Frauen](https://www.color-blindness.com/) sind farbenblind; oder anders ausgedrückt, etwa 1 von 12 Männern und 1 von 200 Frauen. Blinde und sehbehinderte Menschen machen ungefähr 4-5% der Weltbevölkerung aus (2015 gab es [940 Millionen Menschen mit einem gewissen Grad an Sehverlust](https://en.wikipedia.org/wiki/Visual_impairment), während die Gesamtbevölkerung [etwa 7.5 Milliarden](https://en.wikipedia.org/wiki/World_human_population#/media/File:World_population_history.svg) betrug).

In Ihrem HTML-Code können Sie Inhaltsbereiche nach ihrer _Funktion_ markieren – Sie können Elemente verwenden, die die oben beschriebenen Inhaltsbereiche unmissverständlich darstellen, und unterstützende Technologien wie Bildschirmlesegeräte können diese Elemente erkennen und bei Aufgaben wie "Hauptnavigation finden" oder "Hauptinhalt finden" helfen. Wie bereits früher im Kurs erwähnt, gibt es eine Reihe von [Konsequenzen, wenn man die richtige Elementstruktur und Semantik nicht für die richtige Aufgabe verwendet](/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs#why_do_we_need_structure).

Um eine solche semantische Auszeichnung zu implementieren, bietet HTML spezielle Tags, die Sie verwenden können, um solche Abschnitte darzustellen, zum Beispiel:

- **Header:** {{htmlelement("header")}}.
- **Navigationsleiste:** {{htmlelement("nav")}}.
- **Hauptinhalt:** {{htmlelement("main")}}, mit verschiedenen Inhaltsunterabschnitten dargestellt durch {{HTMLElement("article")}}, {{htmlelement("section")}}, und {{htmlelement("div")}}-Elementen.
- **Seitenleiste:** {{htmlelement("aside")}}; oft innerhalb von {{htmlelement("main")}} platziert.
- **Footer:** {{htmlelement("footer")}}.

### Den Code für unser Beispiel erforschen

Das oben gezeigte Beispiel wird durch den folgenden Code dargestellt (Sie können das Beispiel auch in unserem [GitHub-Repository finden](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/document_and_website_structure/index.html)). Wir möchten, dass Sie die folgende Liste ansehen, um zu sehen, welche Teile jede Sektion des visuellen Ergebnisses ausmachen.

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

Nehmen Sie sich etwas Zeit, um den Code anzusehen und zu verstehen – die Kommentare im Code sollten Ihnen auch helfen, ihn zu verstehen. Wir bitten Sie nicht, viel anderes in diesem Artikel zu tun, da der Schlüssel zum Verständnis des Dokumentenlayouts darin besteht, eine solide HTML-Struktur zu schreiben und sie dann mit CSS zu gestalten. Damit warten wir, bis Sie beginnen, CSS-Layout als Teil des CSS-Themas zu studieren.

## HTML-Layout-Elemente im Detail

Es ist gut, die Gesamtbedeutung aller HTML-Sektionselemente im Detail zu verstehen – das ist etwas, woran Sie allmählich arbeiten werden, während Sie mehr Erfahrung in der Webentwicklung sammeln. Sie finden viele Details in unserem [HTML-Element-Referenz](/de/docs/Web/HTML/Reference/Elements). Für den Moment sind dies die Hauptdefinitionen, die Sie versuchen sollten zu verstehen:

- {{HTMLElement('main')}} ist für Inhalte _einzigartig zu dieser Seite._ Nutzen Sie `<main>` nur _einmal_ pro Seite und platzieren Sie es direkt innerhalb des {{HTMLElement('body')}}. Idealerweise sollte es nicht innerhalb anderer Elemente geschachtelt sein.
- {{HTMLElement('article')}} umschließt einen Block verwandter Inhalte, der ohne den Rest der Seite allein sinnvoll ist (zum Beispiel ein einzelner Blog-Beitrag).
- {{HTMLElement('section')}} ist ähnlich wie `<article>`, aber es ist mehr zum Gruppieren eines einzelnen Teils der Seite, der eine einzige Funktionalität darstellt (wie eine Mini-Karte oder eine Sammlung von Artikelschlagzeilen und Zusammenfassungen) oder ein Thema. Es wird als Best Practice angesehen, jede Sektion mit einer [Überschrift](/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs) zu beginnen; beachten Sie auch, dass Sie `<article>`s in verschiedene `<section>`s oder `<section>`s in verschiedene `<article>`s unterteilen können, je nach Kontext.
- {{HTMLElement('aside')}} enthält Inhalte, die nicht direkt zum Hauptinhalt gehören, aber zusätzliche Informationen bieten können, die indirekt damit zusammenhängen (Glossareinträge, Autorenbiografie, verwandte Links, usw.).
- {{HTMLElement('header')}} stellt eine Gruppe von einleitenden Inhalten dar. Wenn es ein Kind von {{HTMLElement('body')}} ist, definiert es den globalen Header einer Webseite, aber wenn es ein Kind von {{HTMLElement('article')}} oder {{HTMLElement('section')}} ist, definiert es einen spezifischen Header für diesen Abschnitt (verwechseln Sie dies nicht mit [Titeln und Überschriften](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#adding_a_title)).
- {{HTMLElement('nav')}} enthält die Hauptnavigation der Seite. Sekundäre Links, usw., würden nicht in der Navigation stehen.
- {{HTMLElement('footer')}} stellt eine Gruppe von Endinhalten für eine Seite dar.

Jedes der oben genannten Elemente kann angeklickt werden, um den entsprechenden Artikel im Abschnitt "HTML-Element-Referenz" zu lesen, der mehr Details zu jedem bereitstellt.

### Nicht-semantische Wrapper

Manchmal stoßen Sie auf eine Situation, in der Sie kein ideales semantisches Element finden, um einige Elemente zusammen zu gruppieren oder Inhalte zu umschließen. Manchmal möchten Sie vielleicht einfach eine Gruppe von Elementen zusammenfassen, um sie alle als eine einzige Einheit mit etwas {{Glossary("CSS", "CSS")}} oder {{Glossary("JavaScript", "JavaScript")}} zu beeinflussen. Für solche Fälle bietet HTML die {{HTMLElement("div")}}- und {{HTMLElement("span")}}-Elemente. Sie sollten diese vorzugsweise mit einem geeigneten [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class)-Attribut verwenden, um ihnen eine Art von Label zu geben, damit sie leicht anzusprechen sind.

{{HTMLElement("span")}} ist ein inline nicht-semantisches Element, das Sie nur verwenden sollten, wenn Sie sich kein besseres semantisches Textelement einfallen lassen können, um Ihren Inhalt zu umschließen, oder wenn Sie keine spezifische Bedeutung hinzufügen möchten. Zum Beispiel:

```html
<p>
  The King walked drunkenly back to his room at 01:00, the beer doing nothing to
  aid him as he staggered through the door.
  <span class="editor-note">
    [Editor's note: At this point in the play, the lights should be down low].
  </span>
</p>
```

In diesem Fall soll die Anmerkung des Editors lediglich eine zusätzliche Richtung für den Regisseur des Stücks geben; sie soll keine zusätzliche semantische Bedeutung haben. Für sehende Benutzer könnte CSS verwendet werden, um die Anmerkung etwas vom Haupttext zu distanzieren.

{{HTMLElement("div")}} ist ein block-level nicht-semantisches Element, das Sie nur verwenden sollten, wenn Ihnen kein besseres semantisches Blockelement einfällt, oder wenn Sie keine spezifische Bedeutung hinzufügen möchten. Zum Beispiel stellen Sie sich ein Einkaufswagen-Widget vor, das Sie jederzeit während Ihres Aufenthalts auf einer E-Commerce-Seite aufrufen könnten:

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

Diese ist nicht wirklich ein `<aside>`, da sie nicht unbedingt mit dem Hauptinhalt der Seite zusammenhängt (Sie möchten sie von überall aus sichtbar haben). Sie rechtfertigt nicht einmal die Verwendung eines `<section>`, da sie nicht Teil des Hauptinhalts der Seite ist. Ein `<div>` ist in diesem Fall ausreichend. Wir haben eine Überschrift als Wegweiser hinzugefügt, um Benutzern von Bildschirmlesegeräten beim Finden zu helfen.

> [!WARNING]
> Divs sind so bequem zu verwenden, dass es leicht ist, sie zu oft zu verwenden. Da sie keinen semantischen Wert haben, belasten sie einfach Ihren HTML-Code. Achten Sie darauf, sie nur dann zu verwenden, wenn es keine bessere semantische Lösung gibt und versuchen Sie, ihren Einsatz auf ein Minimum zu reduzieren, da Sie sonst Schwierigkeiten haben, Ihre Dokumente zu aktualisieren und zu warten.

> [!NOTE]
> Scrimbas [Semantisches HTML](https://scrimba.com/learn-accessible-web-design-c031/~0b?via=mdn) <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>-interaktives Tutorial bietet eine nützliche Auffrischung des semantischen Markups und warum Sie es verwenden sollten, sowie eine Herausforderung, die Ihre Fähigkeit testet, eine HTML-Codebasis mit semantischen Elementen zu verbessern.

### Zeilenumbrüche und horizontale Linien

Zwei Elemente, die Sie gelegentlich verwenden werden und über die Sie Bescheid wissen möchten, sind {{htmlelement("br")}} und {{htmlelement("hr")}}.

#### \<br>: das Zeilenumbruch-Element

`<br>` erzeugt einen Zeilenumbruch in einem Absatz; er ist die einzige Möglichkeit, eine starre Struktur in einer Situation durchzusetzen, in der Sie eine Reihe von festen kurzen Zeilen wünschen, wie in einer Adresse oder einem Gedicht. Zum Beispiel:

```html
<p>
  There once was a man named O'Dell<br />
  Who loved to write HTML<br />
  But his structure was bad, his semantics were sad<br />
  and his markup didn't read very well.
</p>
```

Ohne die `<br>`-Elemente würde der Absatz einfach in einer langen Zeile gerendert (wie wir bereits früher im Kurs gesagt haben, [ignoriert HTML die meisten weißen Zeichen](/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax#whitespace_in_html)); mit `<br>`-Elementen im Code wird das Markup so gerendert:

{{EmbedLiveSample('br_the_line_break_element', '100%', 150)}}

#### \<hr>: das thematische Trenner-Element

`<hr>`-Elemente erstellen eine horizontale Linie im Dokument, die einen thematischen Wechsel im Text kennzeichnet (wie ein Themen- oder Szenenwechsel). Visuell sieht es einfach aus wie eine horizontale Linie. Als Beispiel:

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

## Strukturierung einer grundlegenden Website

Der nächste Schritt nach der Planung der Struktur einer einzelnen Webseite besteht darin, die Struktur einer vollständigen mehrseitigen Website zu planen, einschließlich wie sie angeordnet und miteinander verlinkt werden sollen, um die bestmögliche Benutzererfahrung zu bieten. Dies nennt man {{Glossary("Information_architecture", "Informationsarchitektur")}}.

Bei einer großen, komplexen Website kann viel Planung in diesen Prozess einfließen, aber für eine grundlegende Website mit ein paar Seiten kann es eine schnelle und unterhaltsame Übung sein.

Der Prozess könnte folgendermaßen aussehen:

1. Sie werden einige Elemente haben, die auf den meisten (wenn nicht allen) Seiten gemeinsam sind – wie das Navigationsmenü und den Footer-Inhalt. Wenn Ihre Seite beispielsweise für ein Unternehmen ist, ist es eine gute Idee, Ihre Kontaktinformationen im Footer auf jeder Seite verfügbar zu haben. Notieren Sie, was Sie auf jeder Seite gemeinsam haben möchten. Zum Beispiel:
   - Header:
     - Titel und Logo
     - Sprachauswahl der Seite
   - Navigationsmenü
   - Footer:
     - Urheberrechtsvermerk
     - Link zu den allgemeinen Geschäftsbedingungen, Kontaktdaten und Barrierefreiheitspolitik

2. Zeichnen Sie als Nächstes eine grobe Skizze, wie die Struktur jeder Seite aussehen könnte (es könnte wie unsere einfache Website oben aussehen). Notieren Sie, was jeder Block sein wird.![Ein einfaches Diagramm einer Beispiel-Websitestruktur, mit einem Header, Hauptinhaltsbereich, zwei optionalen Seitenleisten und Footer](/shared-assets/images/diagrams/learn/structuring-documents/site-structure.svg)
3. Nun brainstormen Sie alle anderen (nicht für jede Seite gemeinsamen) Inhalte, die Sie auf Ihrer Website haben möchten. Zum Beispiel:
   - Flüge
   - Unterkunft
   - Transport
   - Dinge zu tun
   - Sonderangebote
   - Beliebte Urlaubsangebote, z. B. Wintersonne, Skifahren
   - Suchergebnisse
   - Bewertungen
   - Visum-/Einreiseanforderungen
   - Währung
   - Sprachen und Kultur
   - Urlaub kaufen

4. Versuchen Sie als Nächstes, alle diesen Inhaltselemente in Gruppen zu sortieren, um Ihnen eine Vorstellung davon zu geben, welche Teile auf unterschiedlichen Seiten zusammenleben könnten. Dies ähnelt sehr einer Technik namens {{Glossary("Card_sorting", "Kartensortierung")}}.
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
     - Länderspezifische Infos
       - Visum-/Einreiseanforderungen
       - Währung
       - Sprachen und Kultur
   - Urlaub kaufen

5. Versuchen Sie nun, eine grobe Sitemap zu skizzieren — haben Sie ein Kästchen für jede Seite auf Ihrer Website und ziehen Sie Linien, um den typischen Arbeitsablauf zwischen den Seiten zu zeigen. Die Homepage wird wahrscheinlich oben oder in der Mitte sein und zu den meisten, wenn nicht allen anderen verlinken. Die meisten Seiten auf einer kleinen Website sollten über die Hauptnavigation verfügbar sein, obwohl es Ausnahmen gibt. Möglicherweise möchten Sie auch Anmerkungen dazu machen, wie Dinge präsentiert werden könnten.![Eine Karte der Website, die die Startseite, Länderseite, Suchergebnisseite, Spezialseite und den Checkout- und Kaufablauf zeigt](/shared-assets/images/diagrams/learn/structuring-documents/site-map.svg)

Versuchen Sie, die obige Übung für eine Website aus eigener Kreation durchzuführen. Worüber möchten Sie eine Website erstellen? Als erweitertes Ziel verwenden Sie das bisher erworbene HTML-Wissen, um einige der Seiten auf der Website zu erstellen. Sie könnten unsere [Grund-HTML-Vorlage](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) als Ausgangspunkt verwenden.

## Zusammenfassung

An diesem Punkt sollten Sie eine bessere Vorstellung davon haben, wie man eine Webseite/Website strukturiert. Im nächsten Artikel dieses Moduls sehen wir uns an, wie man Hyperlinks erstellt, eines der grundlegenden Features des Web.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Marking_up_a_letter", "Learn_web_development/Core/Structuring_content/Creating_links", "Learn_web_development/Core/Structuring_content")}}
