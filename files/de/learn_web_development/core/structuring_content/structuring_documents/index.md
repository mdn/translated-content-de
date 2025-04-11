---
title: Strukturierung von Dokumenten
slug: Learn_web_development/Core/Structuring_content/Structuring_documents
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Lists", "Learn_web_development/Core/Structuring_content/Advanced_text_features", "Learn_web_development/Core/Structuring_content")}}

Neben der Definition einzelner Bestandteile Ihrer Seite (wie "ein Absatz" oder "ein Bild") verfügt {{Glossary("HTML", "HTML")}} auch über eine Reihe von Block-Elementen, die verwendet werden, um Bereiche Ihrer Website zu definieren (wie "den Header", "das Navigationsmenü", "die Hauptinhalts-Spalte"). Dieser Artikel befasst sich damit, wie Sie eine grundlegende Website-Struktur planen und den HTML-Code schreiben, um diese Struktur darzustellen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML, wie sie in
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax">Grundlegende HTML-Syntax</a> behandelt werden. Textbezogene Semantik wie <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs">Überschriften und Absätze</a> und <a href="/de/docs/Learn_web_development/Core/Structuring_content/Lists">Listen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die gängigen HTML-Semantischen Strukturelemente, zum Beispiel <code>&lt;main&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, und <code>&lt;footer&gt;</code>, und wie man sie korrekt einsetzt.</li>
          <li>Die Notwendigkeit, semantische Elemente an geeigneten Stellen zu verwenden, anstatt überall, wo ein Block-Container benötigt wird, nur <code>&lt;div&gt;</code>-Elemente zu verwenden, sowie die Vorteile davon (z. B. verbesserte Zugänglichkeit).</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Grundlegende Abschnitte eines Dokuments

Webseiten können und werden ziemlich unterschiedlich aussehen, aber sie neigen dazu, ähnliche Standardkomponenten zu teilen, es sei denn, die Seite zeigt ein Vollbildvideo oder -spiel, ist Teil eines Kunstprojekts oder ist einfach schlecht strukturiert:

- Header:
  - : Üblicherweise ein großer Streifen oben mit einer großen Überschrift, einem Logo und möglicherweise einem Slogan. Dieser bleibt normalerweise von einer Seite einer Website zur anderen gleich.
- Navigationsleiste:
  - : Links zu den Hauptbereichen der Website; normalerweise durch Menütasten, Links oder Tabs repräsentiert. Wie der Header bleibt dieser Inhalt in der Regel von einer Webseite zur anderen konsistent - inkonsistente Navigation auf Ihrer Website führt nur zu verwirrten, frustrierten Nutzern. Viele Webdesigner betrachten die Navigationsleiste als Teil des Headers und nicht als eigenständige Komponente, aber das ist keine Anforderung; tatsächlich argumentieren einige auch, dass die Trennung der beiden besser für die [Zugänglichkeit](/de/docs/Learn_web_development/Core/Accessibility) ist, da Bildschirmleser die beiden Funktionen besser lesen können, wenn sie getrennt sind.
- Hauptinhalt:
  - : Ein großer Bereich in der Mitte, der den größten Teil des einzigartigen Inhalts einer bestimmten Webseite enthält, zum Beispiel das Video, das Sie sich ansehen möchten, oder die Hauptgeschichte, die Sie lesen, oder die Karte, die Sie anzeigen möchten, oder die Nachrichtenüberschriften usw. Dies ist der eine Teil der Website, der sich definitiv von Seite zu Seite ändern wird!
- Sidebar:
  - : Einige zusätzliche Informationen, Links, Zitate, Anzeigen usw. Normalerweise ist dies kontextbezogen zu dem, was im Hauptinhalt enthalten ist (zum Beispiel auf einer Nachrichtenartikel-Seite könnte die Sidebar die Biografie des Autors oder Links zu verwandten Artikeln enthalten), aber es gibt auch Fälle, in denen Sie einige wiederkehrende Elemente finden, wie ein sekundäres Navigationssystem.
- Footer:
  - : Ein Streifen am unteren Ende der Seite, der in der Regel Kleingedrucktes, Urheberrechtsvermerke oder Kontaktinformationen enthält. Es ist ein Ort, um gemeinsame Informationen zu platzieren (wie der Header), aber normalerweise sind diese Informationen nicht kritisch oder zweitrangig zur Website selbst. Der Footer wird auch manchmal für {{Glossary("SEO", "SEO")}}-Zwecke verwendet, indem Links für den Schnellzugriff auf beliebte Inhalte bereitgestellt werden.

Eine "typische Website" könnte so strukturiert sein:

![Ein einfaches Website-Strukturbeispiel mit einer Hauptüberschrift, Navigationsmenü, Hauptinhalt, Seitenleiste und Footer.](sample-website.png)

> [!NOTE]
> Das obige Bild veranschaulicht die Hauptabschnitte eines Dokuments, die Sie mit HTML definieren können. Das _Aussehen_ der Seite, das hier gezeigt wird - einschließlich Layout, Farben und Schriftarten - wird jedoch durch die Anwendung von [CSS](/de/docs/Learn_web_development/Core/Styling_basics) auf das HTML erreicht.

## HTML zur Strukturierung von Inhalten

Das oben gezeigte Beispiel ist nicht schön, aber es ist perfekt geeignet, um ein typisches Website-Layout-Beispiel zu veranschaulichen. Einige Websites haben mehr Spalten, andere sind viel komplexer, aber Sie bekommen die Idee. Mit dem richtigen CSS könnten Sie nahezu beliebige Elemente verwenden, um die verschiedenen Abschnitte zu umschließen und so gestalten, wie Sie es möchten, aber wie zuvor diskutiert, müssen wir die Semantik respektieren und **das richtige Element für die richtige Aufgabe verwenden**.

Dies liegt daran, dass visuelle Eindrücke nicht die ganze Geschichte erzählen. Wir verwenden Farbe und Schriftgröße, um sehenden Benutzern dabei zu helfen, auf die nützlichsten Teile des Inhalts aufmerksam zu machen, wie das Navigationsmenü und verwandte Links, aber was ist mit Menschen mit Seheinschränkungen, die möglicherweise Konzepte wie "rosa" und "große Schrift" nicht sehr nützlich finden?

> **Hinweis:** [Ungefähr 8% der Männer und 0,5% der Frauen](https://www.color-blindness.com/) sind farbenblind; oder anders ausgedrückt, ungefähr 1 von 12 Männern und 1 von 200 Frauen. Blinde und sehbehinderte Menschen machen etwa 4-5% der Weltbevölkerung aus (2015 gab es [940 Millionen Menschen mit einem gewissen Grad an Sehverlust](https://en.wikipedia.org/wiki/Visual_impairment), während die Gesamtbevölkerung [etwa 7,5 Milliarden](https://en.wikipedia.org/wiki/World_human_population#/media/File:World_population_history.svg) betrug).

In Ihrem HTML-Code können Sie Inhaltsbereiche basierend auf ihrer _Funktionalität_ kennzeichnen - Sie können Elemente verwenden, die die oben beschriebenen Inhaltsbereiche eindeutig darstellen, und unterstützende Technologien wie Bildschirmlesegeräte können diese Elemente erkennen und bei Aufgaben wie "finde die Hauptnavigation" oder "finde den Hauptinhalt" helfen. Wie wir bereits früher im Kurs erwähnt haben, gibt es eine Reihe von [Konsequenzen, wenn man nicht die richtige Elementstruktur und Semantik für die richtige Aufgabe verwendet](/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs#why_do_we_need_structure).

Um eine solche semantische Auszeichnung umzusetzen, bietet HTML dedizierte Tags, die Sie verwenden können, um solche Abschnitte darzustellen, zum Beispiel:

- **Header:** {{htmlelement("header")}}.
- **Navigationsleiste:** {{htmlelement("nav")}}.
- **Hauptinhalt:** {{htmlelement("main")}}, mit verschiedenen Inhaltsunterabschnitten dargestellt durch {{HTMLElement("article")}}, {{htmlelement("section")}}, und {{htmlelement("div")}} Elemente.
- **Sidebar:** {{htmlelement("aside")}}; oft innerhalb von {{htmlelement("main")}} platziert.
- **Footer:** {{htmlelement("footer")}}.

### Aktives Lernen: den Code unseres Beispiels erkunden

Unser oben gesehenes Beispiel wird durch den folgenden Code dargestellt (Sie können das Beispiel auch in unserem [GitHub-Repository finden](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/document_and_website_structure/index.html)). Wir möchten, dass Sie sich das obige Beispiel ansehen und dann die Liste unten durchgehen, um zu sehen, welche Teile welchem Abschnitt der visuellen Darstellung entsprechen.

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

      <!-- A Search form: another common non-linear way to navigate through a site. -->

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

Nehmen Sie sich etwas Zeit, um den Code zu überblicken und zu verstehen - die Kommentare im Code sollten Ihnen auch helfen, ihn zu verstehen. Wir bitten Sie in diesem Artikel nicht um viel mehr, weil das Schreiben einer soliden HTML-Struktur der Schlüssel zum Verständnis des Dokumentenlayouts ist, und dann mit CSS gestaltet wird. Wir werden warten, bis Sie beginnen, das CSS-Layout als Teil des CSS-Themas zu studieren.

## HTML-Layout-Elemente im Detail

Es ist gut, die gesamte Bedeutung aller HTML-Abschnittselemente im Detail zu verstehen - dies ist etwas, woran Sie arbeiten werden, wenn Sie mehr Erfahrung in der Webentwicklung sammeln. Viele Details finden Sie, wenn Sie unseren [HTML-Element-Referenz](/de/docs/Web/HTML/Reference/Elements) lesen. Für jetzt sind dies die Hauptdefinitionen, die Sie zu verstehen versuchen sollten:

- {{HTMLElement('main')}} ist für Inhalt _einzigartig für diese Seite._ Verwenden Sie `<main>` nur _einmal_ pro Seite und platzieren Sie es direkt in {{HTMLElement('body')}}. Idealerweise sollte dies nicht in andere Elemente eingebettet sein.
- {{HTMLElement('article')}} umschließt ein Block von verwandtem Inhalt, der auch ohne den Rest der Seite eigenständig Sinn macht (z. B. ein einzelner Blogbeitrag).
- {{HTMLElement('section')}} ist ähnlich wie `<article>`, dient jedoch mehr dem Gruppieren eines einzelnen Teils der Seite, der eine einzige Funktionalität (z. B. eine Mini-Karte oder eine Reihe von Artikelschlagzeilen und -zusammenfassungen) oder ein Thema darstellt. Es gilt als Best Practice, jede Sektion mit einer [Überschrift](/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs) zu beginnen; beachten Sie auch, dass Sie `<article>` in verschiedene `<section>`s oder `<section>`s in verschiedene `<article>`s, abhängig vom Kontext, unterteilen können.
- {{HTMLElement('aside')}} enthält Inhalte, die nicht direkt mit dem Hauptinhalt zusammenhängen, aber zusätzliche Informationen liefern können, die indirekt damit verwandt sind (Glossareinträge, Biografie des Autors, verwandte Links usw.).
- {{HTMLElement('header')}} repräsentiert eine Gruppe von Einführungsinhalten. Wenn es ein Kind von {{HTMLElement('body')}} ist, definiert es den globalen Header einer Webseite, aber wenn es ein Kind von {{HTMLElement('article')}} oder {{HTMLElement('section')}} ist, definiert es einen spezifischen Header für diesen Abschnitt (versuchen Sie nicht, dies mit [Titeln und Überschriften](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#adding_a_title) zu verwechseln).
- {{HTMLElement('nav')}} enthält die Hauptnavigationsfunktionalität für die Seite. Sekundäre Links usw. würden nicht in die Navigation gehen.
- {{HTMLElement('footer')}} repräsentiert eine Gruppe von Endinhalten für eine Seite.

Jedes der genannten Elemente kann angeklickt werden, um den entsprechenden Artikel im Abschnitt "HTML-Elementreferenz" zu lesen, der mehr Details zu jedem bietet.

### Nicht-semantische Wrapper

Manchmal stoßen Sie auf eine Situation, in der Sie kein ideales semantisches Element finden können, um einige Elemente zusammenzufassen oder einige Inhalte zu umschließen. Manchmal möchten Sie einfach eine Gruppe von Elementen zusammenfassen, um sie alle als eine einzige Einheit mit etwas {{Glossary("CSS", "CSS")}} oder {{Glossary("JavaScript", "JavaScript")}} zu beeinflussen. Für solche Fälle bietet HTML die Elemente {{HTMLElement("div")}} und {{HTMLElement("span")}}. Sie sollten diese vorzugsweise mit einem geeigneten [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class)-Attribut verwenden, um ihnen eine Art von Label zu geben, damit sie leicht angesprochen werden können.

{{HTMLElement("span")}} ist ein Inline-nicht-semantisches Element, das Sie nur verwenden sollten, wenn Sie kein besseres semantisches Textelement finden können, um Ihren Inhalt zu umschließen, oder keine spezifische Bedeutung hinzufügen möchten. Zum Beispiel:

```html
<p>
  The King walked drunkenly back to his room at 01:00, the beer doing nothing to
  aid him as he staggered through the door.
  <span class="editor-note">
    [Editor's note: At this point in the play, the lights should be down low].
  </span>
</p>
```

In diesem Fall soll die Anmerkung des Editors lediglich zusätzliche Anweisungen für den Regisseur des Stücks liefern; sie ist nicht dafür gedacht, eine zusätzliche semantische Bedeutung zu haben. Bei sehenden Benutzern könnte CSS verwendet werden, um die Anmerkung leicht vom Haupttext zu distanzieren.

{{HTMLElement("div")}} ist ein Blocklevel-nicht-semantisches Element, das Sie nur verwenden sollten, wenn Ihnen kein besseres semantisches Blockelement einfällt, oder Sie keine spezifische Bedeutung hinzufügen möchten. Stellen Sie sich zum Beispiel ein Einkaufskorb-Widget vor, das Sie jederzeit während Ihres Aufenthalts auf einer E-Commerce-Website aufrufen können:

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

Dies ist wirklich kein `<aside>`, da es sich nicht unbedingt auf den Hauptinhalt der Seite bezieht (Sie möchten es von überall aus sichtbar). Es rechtfertigt nicht einmal die Verwendung eines `<section>`, da es nicht Teil des Hauptinhalts der Seite ist. Ein `<div>` ist in diesem Fall also in Ordnung. Wir haben eine Überschrift als Hinweis hinzugefügt, um Benutzern von Bildschirmlesegeräten bei der Suche zu helfen.

> [!WARNING]
> Divs sind so bequem zu verwenden, dass es leicht ist, sie zu oft zu verwenden. Da sie keinen semantischen Wert tragen, überladen sie nur Ihren HTML-Code. Achten Sie darauf, sie nur zu verwenden, wenn es keine bessere semantische Lösung gibt, und versuchen Sie, ihre Verwendung auf ein Minimum zu reduzieren, da Sie sonst Schwierigkeiten haben werden, Ihre Dokumente zu aktualisieren und zu pflegen.

### Zeilenumbrüche und horizontale Linien

Zwei Elemente, die Sie gelegentlich verwenden und kennen möchten, sind {{htmlelement("br")}} und {{htmlelement("hr")}}.

#### \<br>: das Zeilenumbruch-Element

`<br>` erstellt einen Zeilenumbruch in einem Absatz; es ist der einzige Weg, eine starre Struktur in einer Situation zu erzwingen, in der Sie eine Reihe von festgelegten kurzen Zeilen wünschen, wie z. B. bei einer Postadresse oder einem Gedicht. Zum Beispiel:

```html
<p>
  There once was a man named O'Dell<br />
  Who loved to write HTML<br />
  But his structure was bad, his semantics were sad<br />
  and his markup didn't read very well.
</p>
```

Ohne die `<br>`-Elemente würde der Absatz einfach in einer langen Zeile gerendert werden (wie wir bereits früher im Kurs sagten, [ignoriert HTML die meisten Leerzeichen](/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax#whitespace_in_html)); mit `<br>`-Elementen im Code wird das Markup so gerendert:

{{EmbedLiveSample('br_the_line_break_element', '100%', 150)}}

#### \<hr>: das thematische Umbruch-Element

`<hr>`-Elemente erstellen eine horizontale Linie im Dokument, die einen thematischen Wechsel im Text anzeigt (wie z. B. einen Themen- oder Szenenwechsel). Visuell sieht es einfach wie eine horizontale Linie aus. Zum Beispiel:

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

## Planung einer einfachen Website

Sobald Sie die Struktur einer einfachen Webseite geplant haben, ist der nächste logische Schritt, herauszufinden, welchen Inhalt Sie auf einer ganzen Website haben möchten, welche Seiten Sie benötigen und wie sie angeordnet und miteinander verlinkt werden sollten, um die bestmögliche Benutzererfahrung zu bieten. Dies wird {{Glossary("Information_architecture", "Informationsarchitektur")}} genannt. In einer großen, komplexen Website kann viel Planung in diesen Prozess einfließen, aber bei einer einfachen Website mit einigen Seiten kann dies recht einfach und sogar spaßig sein!

1. Beachten Sie, dass Sie auf den meisten (wenn nicht allen) Seiten einige gemeinsame Elemente haben werden, wie z. B. das Navigationsmenü und den Footer-Inhalt. Wenn Ihre Website zum Beispiel für ein Unternehmen ist, ist es eine gute Idee, Ihre Kontaktinformationen im Footer auf jeder Seite verfügbar zu machen. Notieren Sie, was auf jeder Seite gemeinsam sein soll.![Die gemeinsamen Merkmale der Reiseseite, die auf jede Seite kommen sollen: Titel und Logo, Kontakt, Copyright, Geschäftsbedingungen, Sprachauswahl, Barrierefreiheitspolitik](common-features.png)
2. Zeichnen Sie als nächstes eine grobe Skizze, wie die Struktur jeder Seite aussehen könnte (sie könnte wie unsere einfache Website oben aussehen). Notieren Sie, was jeder Block sein wird.![Eine einfache Diagramm eines Beispielseitenaufbaus mit einem Header, Hauptinhaltsbereich, zwei optionalen Seitenleisten und Footer](site-structure.png)
3. Erstellen Sie nun ein Brainstorming über all den anderen (nicht jeder Seite gemeinsamen) Inhalt, den Sie auf Ihrer Website haben möchten - schreiben Sie eine große Liste auf.![Eine lange Liste aller Features, die wir auf unserer Reiseseite haben könnten, von der Suche über Sonderangebote bis hin zu Länderinformationen](feature-list.png)
4. Versuchen Sie als nächstes, all diese Inhaltselemente in Gruppen zu sortieren, um eine Vorstellung davon zu bekommen, welche Teile zusammen in verschiedenen Seiten leben könnten. Dies ist sehr ähnlich zu einer Technik namens {{Glossary("Card_sorting", "Card Sorting")}}.![Die Elemente, die auf einer Urlauberseite erscheinen sollten, sortiert in 5 Kategorien: Suche, Angebote, länderspezifische Informationen, Suchergebnisse und Einkaufen](card-sorting.png)
5. Versuchen Sie nun, eine grobe Sitemap zu skizzieren - haben Sie eine Blase für jede Seite auf Ihrer Seite, und ziehen Sie Linien, um zu zeigen, wie die typischen Arbeitsabläufe zwischen den Seiten aussehen. Die Startseite wird wahrscheinlich in der Mitte sein und die meisten, wenn nicht alle anderen verlinken; die meisten Seiten auf einer kleinen Seite sollten über die Hauptnavigation erreichbar sein, obwohl es Ausnahmen gibt. Sie können auch Notizen darüber einschließen, wie Dinge dargestellt werden könnten.![Eine Karte der Seite, die die Startseite, Landseite, Suchergebnisse, Sonderangebote, Kasse und Einkaufsseite zeigt](site-map.png)

### Aktives Lernen: Erstellen Sie Ihre eigene Sitemap

Versuchen Sie, die oben beschriebene Übung für eine eigene Website durchzuführen. Worum möchten Sie eine Seite erstellen?

> [!NOTE]
> Speichern Sie Ihre Arbeit irgendwo; Sie könnten sie später benötigen.

## Zusammenfassung

An diesem Punkt sollten Sie eine bessere Vorstellung davon haben, wie Sie eine Webseite/Seite strukturieren. Im nächsten Artikel dieses Moduls werden wir einige fortgeschrittene Texttechniken betrachten.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Lists", "Learn_web_development/Core/Structuring_content/Advanced_text_features", "Learn_web_development/Core/Structuring_content")}}
