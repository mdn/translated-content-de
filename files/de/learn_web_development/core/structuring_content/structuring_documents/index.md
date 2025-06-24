---
title: Strukturierung von Dokumenten
slug: Learn_web_development/Core/Structuring_content/Structuring_documents
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Lists", "Learn_web_development/Core/Structuring_content/Advanced_text_features", "Learn_web_development/Core/Structuring_content")}}

Zusätzlich zur Definition einzelner Teile Ihrer Seite (wie "ein Absatz" oder "ein Bild") bietet {{Glossary("HTML", "HTML")}} auch eine Reihe von Blockelementen zur Definition von Bereichen Ihrer Website, wie "der Header", "das Navigationsmenü" oder "die Hauptinhaltsspalte". Dieser Artikel behandelt, wie man eine grundlegende Website-Struktur plant und das HTML schreibt, um diese Struktur darzustellen.

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
          <li>Die allgemeinen HTML-semantischen Strukturelemente, zum Beispiel <code>&lt;main&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code> und <code>&lt;footer&gt;</code>, und wie man sie korrekt verwendet.</li>
          <li>Die Notwendigkeit, semantische Elemente an geeigneten Stellen zu verwenden, anstatt nur <code>&lt;div&gt;</code>-Elemente zu verwenden, wo immer ein Block-Container benötigt wird, und die Vorteile davon (wie verbesserte Zugänglichkeit).</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Grundlegende Abschnitte eines Dokuments

Webseiten können und werden ziemlich unterschiedlich aussehen, aber sie neigen dazu, ähnliche Standardkomponenten zu teilen, es sei denn, die Seite zeigt ein Vollbildvideo oder -spiel, ist Teil eines Kunstprojekts oder ist einfach schlecht strukturiert:

- Header:
  - : Üblicherweise ein großer Streifen über der Seite mit einer großen Überschrift, Logo und möglicherweise einem Slogan. Diese bleibt in der Regel von einer Seite einer Website zur anderen gleich.
- Navigationsleiste:
  - : Links zu den Hauptbereichen der Website; normalerweise dargestellt durch Menüschaltflächen, Links oder Registerkarten. Wie der Header bleibt auch dieser Inhalt in der Regel von einer Webseite zur anderen konsistent — eine inkonsistente Navigation auf Ihrer Website führt nur zu verwirrten, frustrierten Nutzern. Viele Webdesigner betrachten die Navigationsleiste als Teil des Headers und nicht als eine eigene Komponente, aber das ist keine Pflicht; tatsächlich argumentieren einige auch, dass es für die [Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility) besser ist, wenn die beiden getrennt sind, da Screenreader die beiden Funktionen besser lesen können, wenn sie getrennt sind.
- Hauptinhalt:
  - : Ein großer Bereich in der Mitte, der den größten Teil des einzigartigen Inhalts einer gegebenen Webseite enthält, zum Beispiel das Video, das Sie sehen möchten, oder die Hauptgeschichte, die Sie lesen, oder die Karte, die Sie anzeigen möchten, oder die Nachrichtenüberschriften usw. Dies ist der einzige Teil der Website, der definitiv von Seite zu Seite variieren wird!
- Seitenleiste:
  - : Einige periphere Informationen, Links, Zitate, Anzeigen usw. Normalerweise passen diese zum Hauptinhalt (zum Beispiel könnte die Seitenleiste auf einer Nachrichtenartikel-Seite die Biografie des Autors oder Links zu verwandten Artikeln enthalten), aber es gibt auch Fälle, in denen Sie einige wiederkehrende Elemente wie ein sekundäres Navigationssystem finden.
- Footer:
  - : Ein Streifen am unteren Rand der Seite, der im Allgemeinen Kleingedrucktes, Urheberrechtshinweise oder Kontaktinformationen enthält. Es ist ein Ort, um häufige Informationen zu platzieren (wie der Header), aber normalerweise sind diese Informationen nicht kritisch oder zweitrangig für die Website selbst. Der Footer wird manchmal auch aus {{Glossary("SEO", "SEO")}}-Zwecken genutzt, indem Links für den schnellen Zugriff auf beliebten Inhalt bereitgestellt werden.

Eine "typische Website" könnte folgendermaßen strukturiert sein:

![Ein einfaches Website-Strukturbeispiel mit einer Hauptüberschrift, einem Navigationsmenü, Hauptinhalt, einer Seitenleiste und einem Footer.](sample-website.png)

> [!NOTE]
> Das obige Bild veranschaulicht die Hauptabschnitte eines Dokuments, die Sie mit HTML definieren können. Das _Erscheinungsbild_ der hier gezeigten Seite — einschließlich des Layouts, der Farben und Schriftarten — wird jedoch durch die Anwendung von [CSS](/de/docs/Learn_web_development/Core/Styling_basics) auf das HTML erreicht.

## HTML zur Strukturierung von Inhalten

Das oben gezeigte Beispiel ist nicht hübsch, aber es eignet sich perfekt zur Veranschaulichung eines typischen Website-Layout-Beispiels. Einige Websites haben mehr Spalten, andere sind wesentlich komplexer, aber Sie verstehen das Prinzip. Mit dem richtigen CSS könnten Sie fast jedes Element verwenden, um die verschiedenen Abschnitte zu umwickeln und sie so darzustellen, wie Sie es wollen. Wie zuvor besprochen, müssen wir jedoch die Semantik respektieren und **das richtige Element für den richtigen Zweck verwenden**.

Das liegt daran, dass visuelle Eindrücke nicht die ganze Geschichte erzählen. Wir nutzen Farbe und Schriftgröße, um sehenden Nutzern die nützlichsten Teile des Inhalts zu zeigen, wie das Navigationsmenü und verwandte Links, aber was ist beispielsweise mit sehbehinderten Menschen, die Konzepte wie "rosa" und "große Schrift" möglicherweise nicht nützlich finden?

> [!NOTE] > [Etwa 8% der Männer und 0,5% der Frauen](https://www.color-blindness.com/) sind farbenblind; anders ausgedrückt, betrifft es etwa 1 von 12 Männern und 1 von 200 Frauen. Blinde und sehbehinderte Menschen machen etwa 4-5% der Weltbevölkerung aus (im Jahr 2015 gab es [940 Millionen Menschen mit Sehverlust](https://en.wikipedia.org/wiki/Visual_impairment), während die Gesamtbevölkerung [rund 7,5 Milliarden](https://en.wikipedia.org/wiki/World_human_population#/media/File:World_population_history.svg) betrug).

In Ihrem HTML-Code können Sie Inhaltsabschnitte basierend auf ihrer _Funktionalität_ kennzeichnen — Sie können Elemente verwenden, die die oben beschriebenen Inhaltsabschnitte eindeutig darstellen, und unterstützende Technologien wie Screenreader können diese Elemente erkennen und bei Aufgaben wie "Finde die Hauptnavigation" oder "Finde den Hauptinhalt" helfen. Wie wir bereits früher im Kurs erwähnt haben, gibt es eine Reihe [von Konsequenzen, wenn man nicht die richtige Elementstruktur und Semantik für den richtigen Zweck verwendet](/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs#why_do_we_need_structure).

Um eine solche semantische Kennzeichnung zu implementieren, stellt HTML spezielle Tags zur Verfügung, die Sie zur Darstellung solcher Abschnitte verwenden können, zum Beispiel:

- **Header:** {{htmlelement("header")}}.
- **Navigationsleiste:** {{htmlelement("nav")}}.
- **Hauptinhalt:** {{htmlelement("main")}}, mit verschiedenen Inhaltsunterabschnitten, die durch {{HTMLElement("article")}}, {{htmlelement("section")}}, und {{htmlelement("div")}}-Elemente dargestellt werden.
- **Seitenleiste:** {{htmlelement("aside")}}; oft innerhalb von {{htmlelement("main")}} platziert.
- **Footer:** {{htmlelement("footer")}}.

### Erkundung des Codes für unser Beispiel

Das oben gezeigte Beispiel wird durch den folgenden Code dargestellt (Sie können das Beispiel auch in unserem [GitHub-Repository finden](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/document_and_website_structure/index.html)). Wir möchten, dass Sie die Liste unten anschauen, um zu sehen, welche Teile jede Sektion der visuellen Ausgabe ausmachen.

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

Nehmen Sie sich Zeit, um den Code zu durchschauen und ihn zu verstehen — die Kommentare im Code sollten Ihnen ebenfalls helfen, ihn zu verstehen. Wir bitten Sie nicht, viel mehr in diesem Artikel zu tun, denn der Schlüssel zum Verständnis der Dokumentlayout ist das Schreiben einer soliden HTML-Struktur und dann das Layout mit CSS. Das warten wir ab, bis Sie beginnen, das CSS-Layout als Teil des CSS-Themas zu studieren.

## HTML-Layout-Elemente im Detail

Es ist gut, die allgemeine Bedeutung aller HTML-Abschnitts-Elemente im Detail zu verstehen — dies ist etwas, woran Sie allmählich arbeiten werden, wenn Sie anfangen, mehr Erfahrung mit der Webentwicklung zu sammeln. Sie können viele Details finden, indem Sie unser [HTML-Element-Referenzdokument](/de/docs/Web/HTML/Reference/Elements) lesen. Für jetzt sind dies die Hauptdefinitionen, die Sie zu verstehen versuchen sollten:

- {{HTMLElement('main')}} ist für Inhalte, _die einzigartig für diese Seite sind._ Verwenden Sie `<main>` nur _einmal_ pro Seite und platzieren Sie es direkt innerhalb von {{HTMLElement('body')}}. Idealerweise sollte es nicht in andere Elemente verschachtelt sein.
- {{HTMLElement('article')}} schließt einen Block verwandten Inhalts ein, der alleine ohne den Rest der Seite sinnvoll ist (zum Beispiel ein einzelner Blogbeitrag).
- {{HTMLElement('section')}} ist ähnlich wie `<article>`, dient jedoch mehr zum Gruppieren eines einzelnen Teils der Seite, der ein einzelnes Funktionsstück ausmacht (wie eine Minikarte oder eine Sammlung von Artikelüberschriften und -zusammenfassungen) oder ein Thema. Es gilt als beste Praxis, jede Sektion mit einer [Überschrift](/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs) zu beginnen; beachten Sie auch, dass Sie `<article>`s in verschiedene `<section>`s aufteilen können oder `<section>`s in verschiedene `<article>`s, je nach Kontext.
- {{HTMLElement('aside')}} enthält Inhalte, die nicht direkt mit dem Hauptinhalt in Verbindung stehen, jedoch zusätzliche indirekt damit verwandte Informationen liefern können (Glossareinträge, Autorenbiografie, verwandte Links usw.).
- {{HTMLElement('header')}} repräsentiert eine Gruppe von einleitenden Inhalten. Wenn es ein Kind von {{HTMLElement('body')}} ist, definiert es den globalen Header einer Webseite. Wenn es ein Kind von {{HTMLElement('article')}} oder {{HTMLElement('section')}} ist, definiert es einen spezifischen Header für diesen Abschnitt (versuchen Sie nicht, dies mit [Titeln und Überschriften](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#adding_a_title) zu verwechseln).
- {{HTMLElement('nav')}} enthält die Hauptnavigationsfunktionalität für die Seite. Sekundäre Links usw. würden nicht in die Navigation passen.
- {{HTMLElement('footer')}} repräsentiert eine Gruppe von Endinhalten für eine Seite.

Jedes der oben genannten Elemente kann angeklickt werden, um den entsprechenden Artikel im Bereich "HTML-Element-Referenz" zu lesen, der mehr Details über jedes einzelne bietet.

### Nicht-semantische Umhüllungen

Manchmal stoßen Sie auf Situationen, in denen Sie kein ideales semantisches Element finden, um einige Elemente zusammenzufassen oder einige Inhalte zu umhüllen. Manchmal möchten Sie einfach eine Reihe von Elementen gruppieren, um sie als eine einzelne Einheit mit etwas {{Glossary("CSS", "CSS")}} oder {{Glossary("JavaScript", "JavaScript")}} zu beeinflussen. Für solche Fälle bietet HTML die {{HTMLElement("div")}}- und {{HTMLElement("span")}}-Elemente. Sie sollten diese vorzugsweise mit einem geeigneten [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class)-Attribut verwenden, um ihnen eine Art Bezeichnung zu geben, damit sie leicht gezielt werden können.

{{HTMLElement("span")}} ist ein Inline-Element ohne semantischen Wert, das Sie nur dann verwenden sollten, wenn Sie kein besseres semantisches Textelement finden, um Ihren Inhalt zu umhüllen, oder wenn Sie keine spezifische Bedeutung hinzufügen möchten. Zum Beispiel:

```html
<p>
  The King walked drunkenly back to his room at 01:00, the beer doing nothing to
  aid him as he staggered through the door.
  <span class="editor-note">
    [Editor's note: At this point in the play, the lights should be down low].
  </span>
</p>
```

In diesem Fall ist die Anmerkung des Redakteurs lediglich dazu gedacht, zusätzliche Anweisungen für den Regisseur des Stücks zu geben. Sie soll keine zusätzliche semantische Bedeutung haben. Für sehende Nutzer könnte CSS verwendet werden, um die Anmerkung leicht vom Haupttext zu distanzieren.

{{HTMLElement("div")}} ist ein Blockelement ohne semantischen Wert, das Sie nur verwenden sollten, wenn Sie kein besseres semantisches Blockelement zur Verfügung haben oder keine spezifische Bedeutung hinzufügen möchten. Stellen Sie sich zum Beispiel ein Einkaufskorb-Widget vor, das Sie jederzeit während Ihres Besuchs auf einer E-Commerce-Website aufrufen können:

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

Dies ist eigentlich kein `<aside>`, da es nicht unbedingt mit dem Hauptinhalt der Seite zusammenhängt (Sie wollen, dass es von überall aus einsehbar ist). Es rechtfertigt auch nicht wirklich die Verwendung eines `<section>`, da es nicht Teil des Hauptinhalts der Seite ist. Ein `<div>` ist in diesem Fall in Ordnung. Wir haben eine Überschrift als Wegweiser hinzugefügt, um Benutzer von Bildschirmlesern bei der Suche zu unterstützen.

> [!WARNING]
> Divs sind so praktisch, dass man leicht dazu verleitet wird, sie zu oft zu verwenden. Da sie keinen semantischen Wert haben, belasten sie einfach Ihren HTML-Code. Achten Sie darauf, sie nur dann zu verwenden, wenn es keine bessere semantische Lösung gibt, und versuchen Sie, ihre Verwendung auf ein Minimum zu reduzieren, andernfalls wird es schwierig, Ihre Dokumente zu aktualisieren und zu pflegen.

> [!NOTE]
> Das interaktive Tutorial [Semantic HTML](https://scrimba.com/learn-accessible-web-design-c031/~0b?via=mdn) <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> von Scrimba bietet eine nützliche Zusammenfassung der semantischen Markierung und der Gründe, warum Sie sie verwenden sollten, sowie eine Herausforderung, die Ihre Fähigkeit testet, einen HTML-Codebasis mit semantischen Elementen zu verbessern.

### Zeilenumbrüche und horizontale Linien

Zwei Elemente, die Sie gelegentlich verwenden und kennen sollten, sind {{htmlelement("br")}} und {{htmlelement("hr")}}.

#### \<br>: das Zeilenumbruch-Element

`<br>` erzeugt einen Zeilenumbruch in einem Absatz; es ist die einzige Möglichkeit, eine feste Struktur in einer Situation zu erzwingen, in der Sie eine Reihe von festen kurzen Zeilen wünschen, wie in einer Postadresse oder einem Gedicht. Zum Beispiel:

```html
<p>
  There once was a man named O'Dell<br />
  Who loved to write HTML<br />
  But his structure was bad, his semantics were sad<br />
  and his markup didn't read very well.
</p>
```

Ohne die `<br>`-Elemente würde der Absatz nur als eine lange Zeile gerendert werden (wie wir bereits zuvor im Kurs gesagt haben, [ignoriert HTML die meiste Leerzeichen](/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax#whitespace_in_html)); mit `<br>`-Elementen im Code wird das Markup wie folgt gerendert:

{{EmbedLiveSample('br_the_line_break_element', '100%', 150)}}

#### \<hr>: das thematische Umbruch-Element

`<hr>`-Elemente erzeugen eine horizontale Linie im Dokument, die einen thematischen Wechsel im Text anzeigt (wie einen Themen- oder Szenenwechsel). Visuell sieht es einfach wie eine horizontale Linie aus. Als Beispiel:

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

Der nächste Schritt nach der Planung der Struktur einer einzelnen Webseite ist die Planung der Struktur einer gesamten Website mit mehreren Seiten, einschließlich der Frage, wie sie angeordnet sein und miteinander verlinken sollen, um die bestmögliche Benutzererfahrung zu gewährleisten. Dies nennt man {{Glossary("Information_architecture", "Informationsarchitektur")}}.

Bei einer großen, komplexen Website kann viel Planung in diesen Prozess einfließen, aber für eine einfache Website mit ein paar Seiten kann es eine schnelle und unterhaltsame Übung sein.

Der Prozess könnte folgendermaßen aussehen:

1. Sie haben einige Elemente, die den meisten (wenn nicht allen) Seiten gemeinsam sind — wie das Navigationsmenü und den Footer-Inhalt. Wenn Ihre Website beispielsweise für ein Unternehmen ist, ist es eine gute Idee, Ihre Kontaktinformationen im Footer auf jeder Seite verfügbar zu haben. Notieren Sie, was auf jeder Seite gleich sein soll. Zum Beispiel:

   - Header:
     - Titel und Logo
     - Sprachauswahl des Standorts
   - Navigationsmenü
   - Footer:
     - Urheberrechtshinweis
     - Link zu den Allgemeinen Geschäftsbedingungen, Kontaktdaten und Barrierefreiheitsrichtlinien

2. Als Nächstes zeichnen Sie eine grobe Skizze, wie Sie die Struktur jeder Seite aussehen lassen möchten (es könnte wie oben unsere einfache Website aussehen). Notieren Sie, was jeder Block sein wird.![Eine einfache Diagrammbeispiel einer Website-Struktur, mit Header, Hauptinhaltsbereich, zwei optionalen Seitenleisten und Footer](site-structure.png)
3. Jetzt brainstormen Sie alle anderen (nicht auf jeder Seite gleichen) Inhalte, die Sie auf Ihrer Website haben möchten. Zum Beispiel:

   - Flüge
   - Unterkünfte
   - Transport
   - Dinge, die man tun kann
   - Sonderangebote
   - Beliebte Urlaubsangebote, zum Beispiel Wintersonne, Skifahren
   - Suchergebnisse
   - Bewertungen
   - Visa-/Einreiseanforderungen
   - Währung
   - Sprachen und Kultur
   - Urlaubsbuchung

4. Sortieren Sie nun alle diese Inhalte in Gruppen, um eine Vorstellung davon zu bekommen, welche Teile zusammen auf verschiedenen Seiten leben könnten. Dies ist sehr ähnlich zu einer Technik, die {{Glossary("Card_sorting", "Kartensortierung")}} genannt wird.

   - Suche
     - Flüge
     - Unterkünfte
     - Transport
     - Dinge, die man tun kann
   - Sonderangebote
     - Beliebte Urlaubsangebote
     - Wintersonne
     - Skifahren
   - Suchergebnisse
     - Bewertungen
     - Länderspezifische Infos
       - Visa-/Einreiseanforderungen
       - Währung
       - Sprachen und Kultur
   - Urlaubsbuchung

5. Versuchen Sie jetzt, eine grobe Sitemap zu skizzieren — haben Sie einen Kasten für jede Seite auf Ihrer Website und ziehen Sie Linien, um den typischen Workflow zwischen den Seiten zu zeigen. Die Startseite wird wahrscheinlich oben oder in der Mitte sein und mit den meisten, wenn nicht allen anderen verlinken. Die meisten Seiten in einer kleinen Website sollten über die Hauptnavigation verfügbar sein, obwohl es Ausnahmen gibt. Sie könnten auch Notizen darüber machen, wie Dinge präsentiert werden könnten.![Eine Karte der Seite, die die Startseite, Länderseite, Suchergebnisse, Sonderseite und Checkout- und Kaufabläufe zeigt](site-map.png)

Versuchen Sie, die oben beschriebene Übung für eine Website Ihrer eigenen Kreation durchzuführen. Worüber möchten Sie eine Website erstellen? Als erweitertes Ziel verwenden Sie das bisher erworbene HTML-Wissen, um einige der Seiten auf der Website zu erstellen. Sie könnten unsere [Grundlegende HTML-Vorlage](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) als Ausgangspunkt verwenden.

## Zusammenfassung

An diesem Punkt sollten Sie eine bessere Vorstellung davon haben, wie eine Webseite/Website strukturiert werden kann. Im nächsten Artikel dieses Moduls werden wir uns einige fortgeschrittene Texttechniken ansehen.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Lists", "Learn_web_development/Core/Structuring_content/Advanced_text_features", "Learn_web_development/Core/Structuring_content")}}
