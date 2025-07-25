---
title: Strukturierung von Dokumenten
slug: Learn_web_development/Core/Structuring_content/Structuring_documents
l10n:
  sourceCommit: f5fd4776d1c0cd6e4cffc9649f7c4f44badb7ae2
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Lists", "Learn_web_development/Core/Structuring_content/Advanced_text_features", "Learn_web_development/Core/Structuring_content")}}

Zusätzlich zur Definition einzelner Teile Ihrer Seite (wie "ein Absatz" oder "ein Bild") bietet {{Glossary("HTML", "HTML")}} auch eine Anzahl an Blockelementen, die verwendet werden, um Bereiche Ihrer Website zu definieren, wie "der Kopfbereich", "das Navigationsmenü" oder "die Hauptinhaltsspalte". Dieser Artikel befasst sich damit, wie man eine grundlegende Website-Struktur plant und den HTML-Code schreibt, um diese Struktur darzustellen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML, wie sie in
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        > behandelt werden. Textsemantik auf Ebene wie <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
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
          <li>Die gebräuchlichen semantischen HTML-Strukturelemente, zum Beispiel <code>&lt;main&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, und <code>&lt;footer&gt;</code> und wie man sie korrekt verwendet.</li>
          <li>Die Notwendigkeit, semantische Elemente an geeigneten Stellen zu verwenden, anstatt einfach <code>&lt;div&gt;</code>-Elemente überall zu verwenden, wo ein Blockcontainer benötigt wird, und die Vorteile davon (wie verbesserte Zugänglichkeit).</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Grundlegende Abschnitte eines Dokuments

Webseiten können und werden ziemlich unterschiedlich aussehen, aber sie haben alle die Tendenz, ähnliche Standardkomponenten zu teilen, es sei denn, die Seite zeigt ein Vollbild-Video oder ein Spiel an, ist Teil eines Kunstprojekts oder ist einfach schlecht strukturiert:

- Kopfbereich:
  - : Meist ein großer Streifen über dem oberen Teil mit einer großen Überschrift, einem Logo und vielleicht einem Slogan. Dieser bleibt normalerweise von einer Seite der Website zur nächsten gleich.
- Navigationsleiste:
  - : Links zu den Hauptbereichen der Website; normalerweise dargestellt durch Menütasten, Links oder Registerkarten. Wie beim Kopfbereich bleiben diese Inhalte in der Regel von einer Webseite zur anderen konsistent — eine inkonsistente Navigation auf Ihrer Website führt nur zu verwirrten und frustrierten Benutzern. Viele Webdesigner halten die Navigationsleiste für einen Teil des Kopfbereichs anstatt für eine eigene Komponente, aber das ist keine Anforderung; tatsächlich argumentieren einige auch, dass eine Trennung für die [Zugänglichkeit](/de/docs/Learn_web_development/Core/Accessibility) besser ist, da Bildschirmlesegeräte die beiden Funktionen besser lesen können, wenn sie getrennt sind.
- Hauptinhalt:
  - : Ein großer Bereich in der Mitte, der den größten Teil des einmaligen Inhalts einer bestimmten Webseite enthält, zum Beispiel das Video, das Sie ansehen möchten, die Hauptgeschichte, die Sie lesen, die Karte, die Sie anzeigen möchten, oder die Nachrichtenüberschriften, usw. Dies ist der eine Teil der Website, der sich definitiv von Seite zu Seite unterscheidet!
- Seitenleiste:
  - : Einige periphere Infos, Links, Zitate, Anzeigen, usw. Normalerweise sind diese kontextuell zu dem, was im Hauptinhalt enthalten ist (zum Beispiel auf einer Artikelseite könnten die Seitenleiste die Biografie des Autors oder Links zu verwandten Artikeln enthalten), aber es gibt auch Fälle, in denen Sie einige wiederkehrende Elemente wie ein sekundäres Navigationssystem finden.
- Fußzeile:
  - : Ein Streifen am unteren Ende der Seite, der im Allgemeinen Kleingedrucktes, Copyright-Hinweise oder Kontaktinformationen enthält. Es ist ein Ort, um häufige Informationen zu platzieren (wie der Kopfbereich), aber normalerweise sind diese Informationen nicht entscheidend oder sekundär für die Website selbst. Die Fußzeile wird manchmal auch für {{Glossary("SEO", "SEO")}}-Zwecke verwendet, indem Links für einen schnellen Zugriff auf beliebte Inhalte bereitgestellt werden.

Eine "typische Website" könnte ungefähr so strukturiert sein:

![Ein einfaches Beispiel für die Struktur einer Website mit einer Hauptüberschrift, einem Navigationsmenü, Hauptinhalt, Seitenleiste und Fußzeile.](sample-website.png)

> [!NOTE]
> Das obige Bild veranschaulicht die Hauptabschnitte eines Dokuments, die Sie mit HTML definieren können. Das _Erscheinungsbild_ der Seite, wie hier gezeigt — einschließlich Layout, Farben und Schriftarten — wird durch das Anwenden von [CSS](/de/docs/Learn_web_development/Core/Styling_basics) auf das HTML erreicht.

## HTML zur Strukturierung von Inhalten

Das oben gezeigte Beispiel ist nicht hübsch, aber es ist durchaus geeignet, um ein typisches Website-Layout-Beispiel zu illustrieren. Einige Websites haben mehr Spalten, einige sind viel komplexer, aber Sie verstehen die Idee. Mit dem richtigen CSS könnten Sie im Wesentlichen beliebige Elemente verwenden, um die verschiedenen Abschnitte einzurahmen und es so aussehen zu lassen, wie Sie es möchten, aber wie bereits diskutiert, müssen wir die Semantik respektieren und **das richtige Element für die richtige Aufgabe verwenden**.

Dies liegt daran, dass das Visuelle nicht die ganze Geschichte erzählt. Wir verwenden Farben und Schriftgrößen, um die Aufmerksamkeit von normalsehenden Benutzern auf die nützlichsten Teile des Inhalts zu lenken, wie das Navigationsmenü und verwandte Links. Aber was ist zum Beispiel mit sehbehinderten Menschen, die vielleicht mit Konzepten wie „pink“ und „große Schrift“ nicht viel anfangen können?

> [!NOTE]
> [Ungefähr 8 % der Männer und 0,5 % der Frauen](https://www.color-blindness.com/) sind farbenblind; oder anders ausgedrückt, etwa 1 von 12 Männern und 1 von 200 Frauen. Blinde und sehbehinderte Menschen repräsentieren etwa 4-5 % der Weltbevölkerung (im Jahr 2015 gab es [940 Millionen Menschen mit Sehbehinderungen](https://en.wikipedia.org/wiki/Visual_impairment), während die Gesamtbevölkerung [bei etwa 7,5 Milliarden lag](https://en.wikipedia.org/wiki/World_human_population#/media/File:World_population_history.svg)).

In Ihrem HTML-Code können Sie Abschnitte des Inhalts basierend auf ihrer _Funktionalität_ markieren — Sie können Elemente verwenden, die die oben beschriebenen Inhaltsabschnitte eindeutig repräsentieren, und unterstützende Technologien wie Bildschirmlesegeräte können diese Elemente erkennen und bei Aufgaben wie „finde die Hauptnavigation“ oder „finde den Hauptinhalt“ helfen. Wie bereits in diesem Kurs erwähnt, gibt es eine Reihe von [Konsequenzen, wenn das richtige Elementstrukturelement und Semantik nicht für die richtige Aufgabe verwendet wird](/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs#why_do_we_need_structure).

Um eine solche semantische Markierung zu implementieren, bietet HTML spezielle Tags, die Sie verwenden können, um solche Abschnitte darzustellen, zum Beispiel:

- **header:** {{htmlelement("header")}}.
- **Navigation bar:** {{htmlelement("nav")}}.
- **Hauptinhalt:** {{htmlelement("main")}}, mit verschiedenen Inhaltsunterabschnitten, dargestellt durch {{HTMLElement("article")}}, {{htmlelement("section")}}, und {{htmlelement("div")}} Elemente.
- **Seitenleiste:** {{htmlelement("aside")}}; oft innerhalb von {{htmlelement("main")}} platziert.
- **footer:** {{htmlelement("footer")}}.

### Erkunden des Codes für unser Beispiel

Das oben gesehene Beispiel wird durch den folgenden Code dargestellt (Sie können das Beispiel auch in unserem [GitHub-Repository finden](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/document_and_website_structure/index.html)). Wir möchten, dass Sie sich das untenstehende Listing ansehen, um zu sehen, welche Teile jeden Bereich der visuellen Ausgabe ausmachen.

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

Nehmen Sie sich etwas Zeit, um den Code zu überblicken und zu verstehen — die Kommentare innerhalb des Codes sollten Ihnen ebenfalls beim Verständnis helfen. Wir bitten Sie in diesem Artikel nicht viel mehr zu tun, denn der Schlüssel zum Verständnis des Dokumentlayouts liegt darin, eine solide HTML-Struktur zu schreiben, um diese dann mit CSS zu gestalten. Wir werden damit warten, bis Sie beginnen, CSS-Layouts im Rahmen des CSS-Themas zu studieren.

## HTML-Strukturelemente im Detail

Es ist gut, das übergeordnete Verständnis aller HTML-Abschnittelemente im Detail zu verstehen — dies ist etwas, an dem Sie schrittweise arbeiten werden, wenn Sie mehr Erfahrung mit der Webentwicklung sammeln. Sie können viele Details bekommen, indem Sie unsere [HTML-Elementreferenz](/de/docs/Web/HTML/Reference/Elements) lesen. Für jetzt sind dies die Hauptdefinitionen, die Sie zu verstehen versuchen sollten:

- {{HTMLElement('main')}} ist für Inhalte _einzigartig auf dieser Seite._ Verwenden Sie `<main>` nur _einmal_ pro Seite und platzieren Sie es direkt innerhalb von {{HTMLElement('body')}}. Idealerweise sollte dies nicht innerhalb anderer Elemente verschachtelt sein.
- {{HTMLElement('article')}} umrahmt einen Block verwandten Inhalts, der ohne den Rest der Seite für sich allein sinnvoll ist (zum Beispiel ein einzelner Blogbeitrag).
- {{HTMLElement('section')}} ist ähnlich wie `<article>`, aber mehr dazu da, um einen einzelnen Teil der Seite zu gruppieren, der einen einzigen Funktionsblock oder ein Thema darstellt (wie eine Mini-Karte oder eine Gruppe von Artikelüberschriften und Zusammenfassungen). Es wird als beste Praxis angesehen, jede Section mit einer [Überschrift](/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs) zu beginnen; beachten Sie auch, dass Sie `<article>` in verschiedene `<section>`s unterteilen oder `<section>`s in verschiedene `<article>`s aufteilen können, je nach Kontext.
- {{HTMLElement('aside')}} enthält Inhalte, die nicht direkt mit dem Hauptinhalt zu tun haben, aber zusätzliche Informationen indirekt damit bieten können (Glossareinträge, Autorenbiografie, verwandte Links, etc.).
- {{HTMLElement('header')}} repräsentiert eine Gruppe einleitender Inhalte. Wenn es ein Kind von {{HTMLElement('body')}} ist, definiert es die globale Kopfzeile einer Webseite, aber wenn es ein Kind von {{HTMLElement('article')}} oder {{HTMLElement('section')}} ist, definiert es eine spezifische Kopfzeile für diesen Bereich (nicht zu verwechseln mit [Titeln und Überschriften](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#adding_a_title)).
- {{HTMLElement('nav')}} enthält die Hauptnavigationsfunktionalität für die Seite. Sekundäre Links etc. würden nicht in das Navigationsmenü gehören.
- {{HTMLElement('footer')}} repräsentiert eine Gruppe von Endinhalten für eine Seite.

Jedes der vorgenannten Elemente kann angeklickt werden, um den entsprechenden Artikel im Abschnitt "HTML-Elementreferenz" zu lesen, der mehr Details über jedes der Elemente bietet.

### Nicht-semantische Wrapper

Manchmal stoßen Sie auf Situationen, in denen Sie kein ideales semantisches Element finden können, um einige Elemente zusammenzufassen oder Feldinhalte zu umschließen. Manchmal möchten Sie einfach eine Gruppe von Elementen zusammensetzen, um sie alle als eine einzige Einheit mit einigen {{Glossary("CSS", "CSS")}} oder {{Glossary("JavaScript", "JavaScript")}} zu beeinflussen. Für solche Fälle bietet HTML die {{HTMLElement("div")}}- und {{HTMLElement("span")}}-Elemente. Diese sollten Sie vorzugsweise mit einem geeigneten [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class)-Attribut verwenden, um ihnen eine Art von Kennzeichnung zu geben, damit sie einfach gezielt werden können.

{{HTMLElement("span")}} ist ein Inline-Nicht-semantisches Element, das Sie nur dann verwenden sollten, wenn Sie sich kein besseres semantisches Textelement ausdenken können, um Ihren Inhalt zu umschließen, oder wenn Sie nicht möchten, dass eine spezifische Bedeutung hinzugefügt wird. Zum Beispiel:

```html
<p>
  The King walked drunkenly back to his room at 01:00, the beer doing nothing to
  aid him as he staggered through the door.
  <span class="editor-note">
    [Editor's note: At this point in the play, the lights should be down low].
  </span>
</p>
```

In diesem Fall soll die Anmerkung des Editors lediglich zusätzliche Anweisungen für den Regisseur des Stücks liefern; sie soll nicht eine zusätzliche semantische Bedeutung haben. Für sehfähige Benutzer könnte CSS verwendet werden, um die Note leicht von dem Haupttext zu distanzieren.

{{HTMLElement("div")}} ist ein blocklevel Nicht-semantisches Element, das Sie nur dann verwenden sollten, wenn Sie sich kein besseres semantisches Blockelement ausdenken können, oder wenn Sie keine spezifische Bedeutung hinzufügen wollen. Stellen Sie sich zum Beispiel ein Einkaufswagen-Widget vor, das Sie jederzeit während Ihres Besuchs auf einer E-Commerce-Website abrufen können:

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

Dies ist wirklich kein `<aside>`, da es nicht unbedingt auf den Hauptinhalt der Seite bezogen ist (Sie möchten, dass es von überall aus sichtbar ist). Es rechtfertigt auch nicht unbedingt die Verwendung eines `<section>`, da es nicht Teil des Hauptinhalts der Seite ist. Daher ist ein `<div>` für diesen Fall akzeptabel. Wir haben eine Überschrift eingefügt, um den Benutzern des Screenreaders zu helfen, es zu finden.

> [!WARNING]
> Divs sind so praktisch zu verwenden, dass es leicht ist, sie zu viel zu benutzen. Da sie keinen semantischen Wert tragen, belasten sie einfach Ihren HTML-Code. Achten Sie darauf, sie nur dann zu verwenden, wenn es keine bessere semantische Lösung gibt, und versuchen Sie, ihre Verwendung auf ein Minimum zu beschränken, andernfalls werden Sie Probleme haben, Ihre Dokumente zu aktualisieren und zu warten.

> [!NOTE]
> Das interaktive Tutorial [Semantic HTML](https://scrimba.com/learn-accessible-web-design-c031/~0b?via=mdn) <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> von Scrimba bietet eine nützliche Zusammenfassung der semantischen Markierung und warum Sie diese verwenden sollten, sowie eine Herausforderung, die Ihre Fähigkeit testet, einen HTML-Codebestand mit semantischen Elementen zu verbessern.

### Zeilenumbrüche und horizontale Regeln

Zwei Elemente, die Sie gelegentlich verwenden werden und über die Sie Bescheid wissen möchten, sind {{htmlelement("br")}} und {{htmlelement("hr")}}.

#### \<br>: das Zeilenumbruch-Element

`<br>` erstellt einen Zeilenumbruch in einem Absatz; es ist der einzige Weg, eine starre Struktur in einer Situation zu erzwingen, in der Sie eine Reihe von festen kurzen Zeilen wollen, wie in einer Postadresse oder einem Gedicht. Zum Beispiel:

```html
<p>
  There once was a man named O'Dell<br />
  Who loved to write HTML<br />
  But his structure was bad, his semantics were sad<br />
  and his markup didn't read very well.
</p>
```

Ohne die `<br>`-Elemente würde der Absatz einfach in einer langen Zeile gerendert (wie bereits früher im Kurs gesagt, [ignoriert HTML den meisten Whitespace](/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax#whitespace_in_html)); mit `<br>`-Elementen im Code, wird das Markup wie folgt gerendert:

{{EmbedLiveSample('br_the_line_break_element', '100%', 150)}}

#### \<hr>: das thematische Umbruchelement

`<hr>`-Elemente erstellen eine horizontale Regel im Dokument, die einen thematischen Wechsel im Text bezeichnet (wie zum Beispiel einen Themen- oder Szenenwechsel). Optisch sieht es einfach wie eine horizontale Linie aus. Als Beispiel:

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

Würde wie folgt gerendert:

{{EmbedLiveSample('hr_the_thematic_break_element', '100%', '185px')}}

## Strukturierung einer grundlegenden Website

Der nächste Schritt nach der Planung der Struktur einer einzelnen Webseite ist die Planung der Struktur einer ganzen Website mit mehreren Seiten, einschließlich wie sie angeordnet sein sollten und wie sie miteinander verlinken sollten, um die bestmögliche Benutzererfahrung zu gewährleisten. Dies wird als {{Glossary("Information_architecture", "Informationsarchitektur")}} bezeichnet.

In einer großen, komplexen Website kann viel Planung in diesen Prozess einfließen, aber für eine grundlegende Website mit ein paar Seiten kann es eine schnelle und unterhaltsame Übung sein.

Der Prozess könnte folgendermaßen aussehen:

1. Sie werden ein paar Elemente haben, die für die meisten (wenn nicht alle) Seiten gemeinsam sind — wie zum Beispiel das Navigationsmenü und den Footer-Inhalt. Wenn Ihre Seite beispielsweise für ein Unternehmen ist, ist es eine gute Idee, Ihre Kontaktinformationen im Footer auf jeder Seite verfügbar zu haben. Notieren Sie, was Sie auf jeder Seite gemeinsam haben möchten. Zum Beispiel:
   - Kopfbereich:
     - Titel und Logo
     - Sprachauswahl der Website
   - Navigationsmenü
   - Fußzeile:
     - Copyright-Hinweis
     - Link zu den allgemeinen Geschäftsbedingungen, Kontaktinformationen und Barrierefreiheit
2. Zeichnen Sie danach eine grobe Skizze, wie Sie sich die Struktur jeder Seite vorstellen, dass sie aussehen könnte (es könnte unserer einfachen Website oben ähneln). Notieren Sie, was jeder Block sein wird.![Ein einfaches Diagramm einer Beispiel-Seitenstruktur, mit einem Kopfbereich, Hauptinhaltsbereich, zwei optionalen Seitenleisten und einer Fußzeile](/shared-assets/images/diagrams/learn/structuring-documents/site-structure.svg)
3. Jetzt brainstormen Sie alle anderen Inhalte (die nicht für jede Seite gemeinsam sind), die Sie auf Ihrer Website haben möchten. Zum Beispiel:
   - Flüge
   - Unterkunft
   - Transport
   - Dinge zu tun
   - Sonderangebote
   - Beliebte Urlaubspakete, zum Beispiel Wintersonne, Skifahren
   - Suchergebnisse
   - Bewertungen
   - Visa-/Einreiseanforderungen
   - Währung
   - Sprachen und Kultur
   - Urlaub kaufen

4. Versuchen Sie als Nächstes, alle diese Inhaltsgegenstände in Gruppen zu sortieren, um Ihnen eine Vorstellung davon zu geben, welche Teile zusammen auf verschiedenen Seiten leben könnten. Dies ähnelt sehr einer Technik namens {{Glossary("Card_sorting", "Kartensortierung")}}.
   - Suche
     - Flüge
     - Unterkunft
     - Transport
     - Dinge zu tun
   - Sonderangebote
     - Beliebte Ferien
     - Wintersonne
     - Skifahren
   - Suchergebnisse
     - Bewertungen
     - Länderspezifische Informationen
       - Visa-/Einreisebedingungen
       - Währung
       - Sprachen und Kultur
   - Urlaub kaufen

5. Versuchen Sie jetzt, einen groben Sitemap zu skizzieren — erstellen Sie ein Kästchen für jede Seite auf Ihrer Website und zeichnen Sie Linien, um den typischen Workflow zwischen Seiten zu zeigen. Die Homepage wird wahrscheinlich oben oder in der Mitte sein und auf die meisten, wenn nicht alle, anderen verlinken. Die meisten Seiten in einer kleinen Website sollten vom Hauptnavigationsmenü aus erreichbar sein, obwohl es Ausnahmen gibt. Sie könnten auch Notizen darüber hinzufügen möchten, wie die Dinge präsentiert werden könnten.![Eine Karte der Website, die die Homepage, die Länderseite, die Suchergebnisseite und den Specials- sowie den Checkout- und Kaufablauf zeigt](/shared-assets/images/diagrams/learn/structuring-documents/site-map.svg)

Versuchen Sie, die obige Übung für eine Website Ihrer eigenen Kreation durchzuführen. Worüber würden Sie eine Website erstellen wollen? Als erweitertes Ziel verwenden Sie das bisher erworbene HTML-Wissen, um einige der Seiten auf der Website zu erstellen. Sie könnten unser [grundlegendes HTML-Template](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) als Ausgangspunkt verwenden.

## Zusammenfassung

An diesem Punkt sollten Sie eine bessere Vorstellung davon haben, wie man eine Webseite/Website strukturiert. Im nächsten Artikel dieses Moduls werden wir uns einige fortgeschrittene Texttechniken ansehen.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Lists", "Learn_web_development/Core/Structuring_content/Advanced_text_features", "Learn_web_development/Core/Structuring_content")}}
