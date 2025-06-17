---
title: Strukturierung von Dokumenten
slug: Learn_web_development/Core/Structuring_content/Structuring_documents
l10n:
  sourceCommit: 62ab95d20f246369cfab654c5a7a8727deb21ea6
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Lists", "Learn_web_development/Core/Structuring_content/Advanced_text_features", "Learn_web_development/Core/Structuring_content")}}

Zusätzlich zur Definition einzelner Teile Ihrer Seite (wie "ein Absatz" oder "ein Bild") bietet {{Glossary("HTML", "HTML")}} auch eine Reihe von Block-Elementen, die verwendet werden, um Bereiche Ihrer Website zu definieren, wie "der Header", "das Navigationsmenü" oder "die Hauptinhalts-Spalte". Dieser Artikel befasst sich damit, wie man eine grundlegende Website-Struktur plant und das HTML schreibt, um diese Struktur darzustellen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML, wie im
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        >. Textbezogene Semantik wie <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
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
          <li>Die gängigen HTML-semantischen Strukturelemente, zum Beispiel <code>&lt;main&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code> und <code>&lt;footer&gt;</code>, und wie man sie korrekt verwendet.</li>
          <li>Die Notwendigkeit, semantische Elemente an geeigneten Stellen zu verwenden, anstatt nur <code>&lt;div&gt;</code>-Elemente überall zu verwenden, wo ein Block-Container benötigt wird, und die Vorteile davon (wie verbesserte Zugänglichkeit).</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Grundlegende Abschnitte eines Dokuments

Webseiten können und werden ziemlich unterschiedlich aussehen, teilen jedoch in der Regel ähnliche Standardkomponenten, es sei denn, die Seite zeigt ein Vollbild-Video oder Spiel, ist Teil eines Kunstprojekts oder ist einfach schlecht strukturiert:

- Header:
  - : Meistens ein großer Streifen oben mit einer großen Überschrift, einem Logo und vielleicht einem Slogan. Dies bleibt normalerweise von einer Seite einer Website zur nächsten gleich.
- Navigationsleiste:
  - : Links zu den Hauptabschnitten der Website; normalerweise durch Menütasten, Links oder Registerkarten dargestellt. Wie der Header bleibt dieser Inhalt normalerweise von einer Webseite zur anderen konsistent — eine inkonsistente Navigation auf Ihrer Website führt nur zu verwirrten, frustrierten Benutzern. Viele Webdesigner betrachten die Navigationsleiste als Teil des Headers anstatt als ein eigenes Element, aber das ist keine Anforderung; einige argumentieren sogar, dass die Trennung der beiden für die [Zugänglichkeit](/de/docs/Learn_web_development/Core/Accessibility) besser ist, da Bildschirmlesegeräte die beiden Funktionen besser lesen können, wenn sie getrennt sind.
- Hauptinhalt:
  - : Ein großes Gebiet in der Mitte, das den größten Teil des einzigartigen Inhalts einer Webseite enthält, zum Beispiel das Video, das Sie ansehen möchten, oder die Hauptgeschichte, die Sie lesen, oder die Karte, die Sie ansehen möchten, oder die Nachrichtenüberschriften, usw. Dies ist der einzige Teil der Website, der definitiv von Seite zu Seite variieren wird!
- Seitenleiste:
  - : Einige periphere Informationen, Links, Zitate, Anzeigen usw. Meistens ist dies kontextbezogen zum Hauptinhalt (zum Beispiel könnte auf einer Nachrichtenseite die Seitenleiste die Biografie des Autors oder Links zu verwandten Artikeln enthalten), aber es gibt auch Fälle, in denen Sie einige wiederkehrende Elemente wie ein sekundäres Navigationssystem finden.
- Footer:
  - : Ein Streifen am unteren Rand der Seite, der im Allgemeinen Kleingedrucktes, Copyright-Hinweise oder Kontaktinformationen enthält. Es ist ein Ort für allgemeine Informationen (wie der Header), aber normalerweise sind diese Informationen nicht kritisch oder zweitrangig für die Website selbst. Der Footer wird manchmal auch für {{Glossary("SEO", "SEO")}}-Zwecke verwendet, indem Links für den schnellen Zugriff auf beliebte Inhalte bereitgestellt werden.

Eine "typische Website" könnte so strukturiert sein:

![Ein einfaches Website-Strukturbeispiel mit einer Hauptüberschrift, einem Navigationsmenü, Hauptinhalten, einer Seitenleiste und einem Footer.](sample-website.png)

> [!NOTE]
> Das obige Bild veranschaulicht die Hauptabschnitte eines Dokuments, die Sie mit HTML definieren können. Das _Aussehen_ der Seite, das hier gezeigt wird — einschließlich Layout, Farben und Schriftarten — wird durch Anwendung von [CSS](/de/docs/Learn_web_development/Core/Styling_basics) auf das HTML erreicht.

## HTML zum Strukturieren von Inhalten

Das gezeigte Beispiel ist zwar nicht sehr schön, eignet sich jedoch hervorragend zur Darstellung eines typischen Website-Layout-Beispiels. Einige Websites haben mehr Spalten, manche sind viel komplexer, aber Sie verstehen die Idee. Mit dem richtigen CSS könnten Sie fast jedes Element verwenden, um die verschiedenen Abschnitte zu umschließen, und es so gestalten, wie Sie es möchten, aber wie zuvor besprochen, müssen wir die Semantik respektieren und **das richtige Element für die jeweilige Aufgabe verwenden**.

Dies liegt daran, dass visuelle Darstellungen nicht die ganze Geschichte erzählen. Wir nutzen Farbe und Schriftgröße, um die Aufmerksamkeit sehender Benutzer auf die nützlichsten Teile des Inhalts zu lenken, wie das Navigationsmenü und verwandte Links. Aber wie wäre es z.B. mit Menschen mit Sehbehinderungen, für die Konzepte wie "Pink" und "große Schrift" möglicherweise nicht sehr hilfreich sind?

> **Hinweis:** [Etwa 8 % der Männer und 0,5 % der Frauen](https://www.color-blindness.com/) sind farbenblind; oder, anders ausgedrückt, ungefähr 1 von 12 Männern und 1 von 200 Frauen. Blinde und sehbehinderte Menschen machen etwa 4-5 % der Weltbevölkerung aus (2015 gab es [940 Millionen Menschen mit einem gewissen Verlust der Sehkraft](https://en.wikipedia.org/wiki/Visual_impairment), während die Gesamtbevölkerung bei [ca. 7,5 Milliarden](https://en.wikipedia.org/wiki/World_human_population#/media/File:World_population_history.svg) lag).

In Ihrem HTML-Code können Sie Inhaltsabschnitte basierend auf ihrer _Funktionalität_ markieren — Sie können Elemente verwenden, die die oben beschriebenen Inhaltsabschnitte eindeutig darstellen, und unterstützende Technologien wie Bildschirmlesegeräte können diese Elemente erkennen und bei Aufgaben wie "die Hauptnavigation finden" oder "den Hauptinhalt finden" helfen. Wie im Kurs bereits erwähnt, gibt es eine Reihe von [Konsequenzen, wenn die richtige Elementstruktur und Semantik nicht korrekt verwendet wird](/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs#why_do_we_need_structure).

Um eine solche semantische Markierung zu implementieren, bietet HTML spezielle Tags, die Sie verwenden können, um solche Abschnitte darzustellen, zum Beispiel:

- **Header:** {{htmlelement("header")}}.
- **Navigationsleiste:** {{htmlelement("nav")}}.
- **Hauptinhalt:** {{htmlelement("main")}}, mit verschiedenen Inhaltsuntersektionen dargestellt durch {{HTMLElement("article")}}, {{htmlelement("section")}} und {{htmlelement("div")}}-Elemente.
- **Seitenleiste:** {{htmlelement("aside")}}; oft innerhalb von {{htmlelement("main")}} platziert.
- **Footer:** {{htmlelement("footer")}}.

### Erkundung des Codes für unser Beispiel

Das oben gezeigte Beispiel wird durch den folgenden Code dargestellt (Sie können das Beispiel auch in unserem [GitHub-Repository](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/document_and_website_structure/index.html) finden). Wir möchten, dass Sie sich die folgende Auflistung ansehen, um zu sehen, welche Teile jede Sektion der visuellen Ausgabe ausmachen.

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

Nehmen Sie sich etwas Zeit, um den Code zu überblicken und zu verstehen — die Kommentare im Code sollten Ihnen ebenfalls beim Verständnis helfen. Wir bitten Sie in diesem Artikel nicht, viel mehr zu tun, denn der Schlüssel zum Verständnis des Dokumentlayouts liegt darin, eine solide HTML-Struktur zu schreiben und es dann mit CSS zu gestalten. Wir werden darauf warten, bis Sie beginnen, sich als Teil des CSS-Themas mit CSS-Layout zu beschäftigen.

## HTML-Layout-Elemente im Detail

Es ist gut, die allgemeine Bedeutung aller HTML-Gliederungselemente im Detail zu verstehen — daran werden Sie nach und nach arbeiten, wenn Sie mehr Erfahrung mit der Webentwicklung sammeln. Viele Details finden Sie in unserem [HTML-Element-Referenz](/de/docs/Web/HTML/Reference/Elements). Für jetzt sind dies die Hauptdefinitionen, die Sie zu verstehen versuchen sollten:

- {{HTMLElement('main')}} ist für den Inhalt, der _einzigartig auf dieser Seite_ ist. Verwenden Sie `<main>` nur _einmal_ pro Seite und platzieren Sie es direkt innerhalb von {{HTMLElement('body')}}. Idealerweise sollte es nicht innerhalb anderer Elemente genestet sein.
- {{HTMLElement('article')}} umschließt einen Block mit zusammenhängendem Inhalt, der auch ohne den Rest der Seite Sinn ergibt (zum Beispiel ein einzelner Blogbeitrag).
- {{HTMLElement('section')}} ist ähnlich wie `<article>`, dient jedoch eher dem Gruppieren eines einzelnen Teils der Seite, der eine einzelne Funktionalität darstellt (wie eine Minikarte oder eine Reihe von Artikelüberschriften und Zusammenfassungen) oder ein Thema. Es gilt als beste Praxis, jeden Abschnitt mit einer [Überschrift](/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs) zu beginnen; beachten Sie auch, dass Sie `<article>`s in verschiedene `<section>`s oder `<section>`s in verschiedene `<article>`s aufteilen können, je nach Kontext.
- {{HTMLElement('aside')}} enthält Inhalte, die nicht direkt mit dem Hauptinhalt in Verbindung stehen, aber indirekt daran anknüpfen können (Glossareinträge, Autorenbiografie, verwandte Links, usw.).
- {{HTMLElement('header')}} repräsentiert eine Gruppe von einführenden Inhalten. Wenn es ein Kind von {{HTMLElement('body')}} ist, definiert es den globalen Header einer Webseite, aber wenn es ein Kind von {{HTMLElement('article')}} oder {{HTMLElement('section')}} ist, definiert es einen spezifischen Header für diesen Abschnitt (versuchen Sie nicht, dies mit [Titeln und Überschriften](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#adding_a_title) zu verwechseln).
- {{HTMLElement('nav')}} enthält die Hauptnavigation für die Seite. Sekundäre Links, usw., würden nicht in der Navigation stehen.
- {{HTMLElement('footer')}} repräsentiert eine Gruppe von Endinhalten für eine Seite.

Jedes der genannten Elemente kann angeklickt werden, um den entsprechenden Artikel im Abschnitt "HTML-Element-Referenz" zu lesen, der mehr Details zu jedem Element bietet.

### Nicht-semantische Wrapper

Manchmal stoßen Sie auf Situationen, in denen Sie kein ideales semantisches Element finden können, um einige Elemente zusammen zu gruppieren oder Inhalte zu umschließen. Manchmal möchten Sie einfach eine Gruppe von Elementen zusammenfassen, um sie als eine einzige Einheit mit etwas {{Glossary("CSS", "CSS")}} oder {{Glossary("JavaScript", "JavaScript")}} zu behandeln. Für solche Fälle bietet HTML die {{HTMLElement("div")}} und {{HTMLElement("span")}} Elemente. Sie sollten diese vorzugsweise mit einem geeigneten [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class) Attribut verwenden, um ihnen eine Art Beschriftung zu geben, sodass sie leicht anvisiert werden können.

{{HTMLElement("span")}} ist ein Inline-nicht-semantisches Element, das Sie nur verwenden sollten, wenn Sie kein besseres semantisches Textelelement finden, um Ihren Inhalt zu umschließen, oder keine spezifische Bedeutung hinzufügen möchten. Zum Beispiel:

```html
<p>
  The King walked drunkenly back to his room at 01:00, the beer doing nothing to
  aid him as he staggered through the door.
  <span class="editor-note">
    [Editor's note: At this point in the play, the lights should be down low].
  </span>
</p>
```

In diesem Fall soll die Notiz des Redakteurs lediglich zusätzliche Anleitung für den Regisseur des Stücks bieten; sie soll keine zusätzliche semantische Bedeutung haben. Für sehende Benutzer könnte CSS verwendet werden, um die Notiz ein wenig vom Haupttext zu distanzieren.

{{HTMLElement("div")}} ist ein Block-Level-nicht-semantisches Element, das Sie nur verwenden sollten, wenn Sie kein besseres semantisches Blockelement finden oder keine spezifische Bedeutung hinzufügen möchten. Stellen Sie sich zum Beispiel ein Einkaufswagen-Widget vor, das Sie jederzeit während Ihres Besuchs auf einer E-Commerce-Seite aufrufen können:

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

Das ist nicht wirklich ein `<aside>`, da es sich nicht unbedingt auf den Hauptinhalt der Seite bezieht (Sie möchten, dass es von überall aus sichtbar ist). Es rechtfertigt auch nicht unbedingt die Verwendung eines `<section>`, da es nicht Teil des Hauptinhalts der Seite ist. Ein `<div>` ist in diesem Fall in Ordnung. Wir haben eine Überschrift als Wegweiser für Bildschirmleser-Benutzer hinzugefügt.

> [!WARNING]
> Divs sind so praktisch, dass es leicht ist, sie zu oft zu verwenden. Da sie keinen semantischen Wert tragen, verstopfen sie einfach Ihren HTML-Code. Achten Sie darauf, sie nur zu verwenden, wenn es keine bessere semantische Lösung gibt, und versuchen Sie, ihren Gebrauch auf ein Minimum zu reduzieren, sonst haben Sie Schwierigkeiten, Ihre Dokumente zu aktualisieren und zu pflegen.

> [!NOTE]
> Scrimbas [Semantisches HTML](https://scrimba.com/learn-accessible-web-design-c031/~0b?via=mdn) <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> interaktives Tutorial bietet eine nützliche Zusammenfassung des semantischen Markups und warum Sie es verwenden sollten, sowie eine Herausforderung, die Ihre Fähigkeit testet, eine HTML-Codebasis mit semantischen Elementen zu verbessern.

### Zeilenumbrüche und horizontale Linien

Zwei Elemente, die Sie gelegentlich verwenden werden und über die Sie Bescheid wissen möchten, sind {{htmlelement("br")}} und {{htmlelement("hr")}}.

#### \<br>: das Zeilenumbruch-Element

`<br>` erzeugt einen Zeilenumbruch in einem Absatz; es ist der einzige Weg, um eine starre Struktur in einer Situation zu erzwingen, in der Sie eine Reihe fester kurzer Zeilen wünschen, wie in einer Postadresse oder einem Gedicht. Zum Beispiel:

```html
<p>
  There once was a man named O'Dell<br />
  Who loved to write HTML<br />
  But his structure was bad, his semantics were sad<br />
  and his markup didn't read very well.
</p>
```

Ohne die `<br>`-Elemente würde der Absatz nur in einer langen Zeile dargestellt (wie wir zu Beginn des Kurses gesagt haben, [ignoriert HTML die meisten Leerzeichen](/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax#whitespace_in_html)); mit `<br>`-Elementen im Code rendert das Markup so:

{{EmbedLiveSample('br_the_line_break_element', '100%', 150)}}

#### \<hr>: das thematische Trennelement

`<hr>`-Elemente erzeugen eine horizontale Linie im Dokument, die einen thematischen Wechsel im Text anzeigt (wie einen Themen- oder Szenenwechsel). Optisch sieht es nur wie eine horizontale Linie aus. Ein Beispiel:

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

Würde so gerendert:

{{EmbedLiveSample('hr_the_thematic_break_element', '100%', '185px')}}

## Strukturierung einer einfachen Website

Der nächste Schritt nach der Planung der Struktur einer einzelnen Webseite ist die Planung der Struktur einer gesamten mehrseitigen Website, einschließlich der Anordnung und Verlinkung, um die bestmögliche Benutzererfahrung zu gewährleisten. Dies wird als {{Glossary("Information_architecture", "Informationsarchitektur")}} bezeichnet.

Bei einer großen, komplexen Website kann in diesen Prozess viel Planung einfließen, aber für eine grundlegende Website mit wenigen Seiten kann es eine schnelle und lustige Übung sein.

Der Prozess könnte folgendermaßen aussehen:

1. Sie werden einige Elemente haben, die in den meisten (wenn nicht allen) Seiten gemeinsam sind — wie das Navigationsmenü und der Footer-Inhalt. Wenn Ihre Seite beispielsweise für ein Unternehmen ist, ist es eine gute Idee, Ihre Kontaktinformationen im Footer auf jeder Seite verfügbar zu machen. Notieren Sie, was Sie auf jeder Seite gemeinsam haben möchten. Zum Beispiel:

   - Header:
     - Titel und Logo
     - Website-Sprachauswahl
   - Navigationsmenü
   - Footer:
     - Copyright-Hinweis
     - Link zu Nutzungsbedingungen, Kontaktdaten und Barrierefreiheitserklärung

2. Zeichnen Sie als nächstes eine grobe Skizze dessen, wie die Struktur jeder Seite aussehen könnte (es könnte so aussehen wie unsere einfache Website oben). Notieren Sie, was jeder Block sein soll.![Ein einfaches Diagramm einer Beispiel-Website-Struktur mit einem Header, Hauptinhaltsbereich, zwei optionalen Seitenleisten und Footer](site-structure.png)
3. Brainstormen Sie nun alle anderen (nicht für jede Seite gemeinsamen) Inhalte, die Sie auf Ihrer Website haben möchten. Zum Beispiel:

   - Flüge
   - Unterkünfte
   - Transport
   - Aktivitäten
   - Sonderangebote
   - Beliebte Urlaubspakete, z.B. Wintersonne, Skifahren
   - Suchergebnisse
   - Bewertungen
   - Visum-/Einreisebestimmungen
   - Währung
   - Sprachen und Kultur
   - Urlaube kaufen

4. Versuchen Sie nun, alle diese Inhalte in Gruppen zu sortieren, um Ihnen eine Vorstellung davon zu geben, welche Teile auf verschiedenen Seiten zusammen vorhanden sein könnten. Dies ist sehr ähnlich einer Technik namens {{Glossary("Card_sorting", "Kartensortierung")}}.

   - Suche
     - Flüge
     - Unterkünfte
     - Transport
     - Aktivitäten
   - Sonderangebote
     - Beliebte Urlaube
     - Wintersonne
     - Skifahren
   - Suchergebnisse
     - Bewertungen
     - Länderspezifische Informationen
       - Visum-/Einreisebestimmungen
       - Währung
       - Sprachen und Kultur
   - Urlaube kaufen

5. Versuchen Sie nun, ein grobes Sitemap zu skizzieren — verwenden Sie ein Kästchen für jede Seite auf Ihrer Website und zeichnen Sie Linien, um den typischen Workflow zwischen den Seiten darzustellen. Die Startseite wird wahrscheinlich oben oder in der Mitte stehen und mit den meisten, wenn nicht allen anderen verlinkt sein. Die meisten Seiten in einer kleinen Website sollten über die Hauptnavigation zugänglich sein, obwohl es Ausnahmen gibt. Vielleicht möchten Sie auch Hinweise darauf aufnehmen, wie Dinge dargestellt werden könnten.![Eine Karte der Website mit der Startseite, Länderseite, Suchergebnissen, Sonderseite und dem Checkout- und Kaufablauf](site-map.png)

Versuchen Sie, die obige Übung für eine Website Ihrer eigenen Kreation durchzuführen. Worüber möchten Sie eine Website erstellen? Als Stretch-Ziel verwenden Sie das bisher erworbene HTML-Wissen, um einige der Seiten auf der Website zu erstellen. Sie könnten unsere [grundlegende HTML-Vorlage](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) als Ausgangspunkt verwenden.

## Zusammenfassung

An diesem Punkt sollten Sie eine bessere Vorstellung davon haben, wie Sie eine Webseite oder eine ganze Website strukturieren. Im nächsten Artikel dieses Moduls werden wir uns einige fortgeschrittene Texttechniken ansehen.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Lists", "Learn_web_development/Core/Structuring_content/Advanced_text_features", "Learn_web_development/Core/Structuring_content")}}
