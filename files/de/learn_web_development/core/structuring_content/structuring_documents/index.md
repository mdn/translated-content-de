---
title: Strukturierung von Dokumenten
slug: Learn_web_development/Core/Structuring_content/Structuring_documents
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Lists", "Learn_web_development/Core/Structuring_content/Advanced_text_features", "Learn_web_development/Core/Structuring_content")}}

Zusätzlich zur Definition einzelner Teile Ihrer Seite (wie "ein Absatz" oder "ein Bild"), bietet {{Glossary("HTML", "HTML")}} auch eine Reihe von Blockelementen, die verwendet werden, um Bereiche Ihrer Website zu definieren (wie "der Kopfbereich", "das Navigationsmenü", "die Hauptinhaltsspalte"). Dieser Artikel befasst sich damit, wie Sie eine grundlegende Website-Struktur planen und den HTML-Code schreiben, um diese Struktur darzustellen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML, wie in
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
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
          <li>Die allgemeinen HTML-semantischen Strukturierungselemente, z.B. <code>&lt;main&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code> und <code>&lt;footer&gt;</code>, und wie man sie korrekt verwendet.</li>
          <li>Das Erfordernis, semantische Elemente an geeigneten Stellen zu verwenden, anstatt überall <code>&lt;div&gt;</code>-Elemente zu verwenden, wo ein Blockcontainer benötigt wird, und die Vorteile dessen (wie verbesserte Zugänglichkeit).</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Grundlegende Abschnitte eines Dokuments

Webseiten können und werden ziemlich unterschiedlich aussehen, aber sie haben meistens ähnliche Standardkomponenten gemeinsam, es sei denn, die Seite zeigt ein Vollbildvideo oder -spiel, ist Teil eines Kunstprojekts oder ist einfach schlecht strukturiert:

- Kopfbereich:
  - : Normalerweise ein großer Streifen oben mit einer großen Überschrift, einem Logo und eventuell einem Slogan. Dies bleibt in der Regel von einer Seite zur anderen einer Website gleich.
- Navigationsleiste:
  - : Links zu den Hauptbereichen der Seite; normalerweise durch Menütasten, Links oder Tabs dargestellt. Wie der Kopfbereich bleibt auch dieser Inhalt normalerweise von einer Webseite zur anderen konsistent — eine inkonsistente Navigation auf Ihrer Website führt nur zu verwirrten, frustrierten Benutzern. Viele Webdesigner betrachten die Navigationsleiste als Teil des Kopfbereichs statt als eigene Komponente, aber das ist keine Anforderung; tatsächlich argumentieren einige auch, dass das Trennen der beiden besser für die [Zugänglichkeit](/de/docs/Learn_web_development/Core/Accessibility) ist, da Screenreader die beiden Komponenten besser lesen können, wenn sie getrennt sind.
- Hauptinhalt:
  - : Ein großer Bereich in der Mitte, der den größten Teil des einzigartigen Inhalts einer bestimmten Webseite enthält, beispielsweise das Video, das Sie ansehen möchten, oder die Hauptstory, die Sie lesen, oder die Karte, die Sie ansehen möchten, oder die Nachrichtenschlagzeilen, etc. Dies ist der eine Teil der Website, der definitiv von Seite zu Seite variieren wird!
- Seitenleiste:
  - : Einige Zusatzinformationen, Links, Zitate, Anzeigen, etc. Meistens ist das kontextbezogen zu dem, was im Hauptinhalt enthalten ist (zum Beispiel könnte die Seitenleiste auf einer Nachrichtenartikel-Seite die Biografie des Autors enthalten oder Links zu verwandten Artikeln), aber es gibt auch Fälle, in denen Sie einige wiederkehrende Elemente wie ein sekundäres Navigationssystem finden.
- Fußzeile:
  - : Ein Streifen am unteren Rand der Seite, der in der Regel Impressum, Urheberrechtshinweise oder Kontaktinformationen enthält. Es ist ein Ort, um allgemeine Informationen abzulegen (wie der Kopfbereich), aber normalerweise sind diese Informationen nicht kritisch oder sekundär für die Website selbst. Die Fußzeile wird auch manchmal für {{Glossary("SEO", "SEO")}}-Zwecke verwendet, indem Links bereitgestellt werden, die einen schnellen Zugriff auf beliebte Inhalte ermöglichen.

Eine "typische Website" könnte folgendermaßen strukturiert sein:

![eine einfache Website-Struktur, die eine Hauptüberschrift, ein Navigationsmenü, Hauptinhalt, Seitenleiste und Fußzeile zeigt.](sample-website.png)

> [!NOTE]
> Das obige Bild veranschaulicht die Hauptabschnitte eines Dokuments, die Sie mit HTML definieren können. Das _Erscheinungsbild_ der hier gezeigten Seite — einschließlich Layout, Farben und Schriftarten — wird jedoch durch die Anwendung von [CSS](/de/docs/Learn_web_development/Core/Styling_basics) auf das HTML erreicht.

## HTML zur Strukturierung von Inhalten

Das oben gezeigte Beispiel ist nicht schön, eignet sich jedoch hervorragend zur Veranschaulichung eines typischen Website-Layout-Beispiels. Einige Websites haben mehr Spalten, einige sind viel komplexer, aber Sie bekommen eine Vorstellung. Mit dem richtigen CSS könnten Sie praktisch beliebige Elemente verwenden, um die verschiedenen Abschnitte zu umschließen und es so aussehen zu lassen, wie Sie es wollten, aber wie bereits erwähnt, müssen wir die Semantik respektieren und **das richtige Element für die richtige Aufgabe verwenden**.

Das liegt daran, dass visuelle Aspekte nicht die ganze Geschichte erzählen. Wir verwenden Farbe und Schriftgröße, um die Aufmerksamkeit sehender Benutzer auf die nützlichsten Teile des Inhalts zu lenken, wie das Navigationsmenü und verwandte Links, aber was ist mit sehbehinderten Menschen, die möglicherweise Konzepte wie "rosa" und "große Schrift" nicht sehr nützlich finden?

> **Hinweis:** [Ungefähr 8% der Männer und 0,5% der Frauen](https://www.color-blindness.com/) sind farbenblind; oder anders ausgedrückt, etwa 1 von 12 Männern und 1 von 200 Frauen. Blinde und sehbehinderte Menschen machen etwa 4-5% der Weltbevölkerung aus (2015 gab es [940 Millionen Menschen mit einer gewissen Sehbehinderung](https://en.wikipedia.org/wiki/Visual_impairment), während die Gesamtbevölkerung [etwa 7,5 Milliarden](https://en.wikipedia.org/wiki/World_human_population#/media/File:World_population_history.svg) betrug).

In Ihrem HTML-Code können Sie Inhaltsabschnitte basierend auf ihrer _Funktionalität_ auszeichnen — Sie können Elemente verwenden, die die oben beschriebenen Inhaltsabschnitte eindeutig repräsentieren, und unterstützende Technologien wie Vorlesesoftware können diese Elemente erkennen und bei Aufgaben wie "die Hauptnavigation finden" oder "den Hauptinhalt finden" helfen. Wie wir bereits im Kurs erwähnt haben, gibt es eine Reihe von [Folgen, wenn die richtige Elementstruktur und Semantik nicht für die richtige Aufgabe verwendet wird](/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs#why_do_we_need_structure).

Um eine solche semantische Markierung zu implementieren, bietet HTML spezielle Tags, die Sie verwenden können, um solche Abschnitte darzustellen, zum Beispiel:

- **Kopfbereich:** {{htmlelement("header")}}.
- **Navigationsleiste:** {{htmlelement("nav")}}.
- **Hauptinhalt:** {{htmlelement("main")}}, mit verschiedenen Inhaltsteilabschnitten, die durch {{HTMLElement("article")}}, {{htmlelement("section")}}, und {{htmlelement("div")}}-Elemente repräsentiert werden.
- **Seitenleiste:** {{htmlelement("aside")}}; oft innerhalb von {{htmlelement("main")}} platziert.
- **Fußzeile:** {{htmlelement("footer")}}.

### Aktives Lernen: Erforschen Sie den Code für unser Beispiel

Unser oben gesehenes Beispiel wird durch den folgenden Code dargestellt (Sie können das Beispiel auch in unserem [GitHub-Repository finden](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/document_and_website_structure/index.html)). Wir möchten, dass Sie sich das obige Beispiel ansehen und dann das unten stehende Listing durchgehen, um zu sehen, welche Teile welchen Abschnitt der Darstellung ausmachen.

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

Nehmen Sie sich die Zeit, den Code zu durchschauen und zu verstehen — die Kommentare im Code sollten Ihnen ebenfalls helfen, ihn zu verstehen. Wir bitten Sie nicht, viel mehr in diesem Artikel zu tun, da der Schlüssel zum Verständnis des Dokumentlayouts darin besteht, eine solide HTML-Struktur zu schreiben und diese dann mit CSS zu gestalten. Wir werden damit warten, bis Sie beginnen, CSS-Layouts als Teil des CSS-Themas zu studieren.

## HTML-Layout-Elemente im Detail

Es ist gut, die Gesamtbedeutung aller HTML-Sektionierungselemente im Detail zu verstehen — dies ist etwas, woran Sie nach und nach arbeiten werden, wenn Sie mehr Erfahrung mit der Web-Entwicklung sammeln. Sie können viele Details lesen, indem Sie unser [HTML-Elementreferenz](/de/docs/Web/HTML/Element) lesen. Für den Moment sind dies die wichtigsten Definitionen, die Sie verstehen sollten:

- {{HTMLElement('main')}} ist für Inhalte, die _einzigartig für diese Seite_ sind. Verwenden Sie `<main>` nur _einmal_ pro Seite und platzieren Sie es direkt innerhalb des {{HTMLElement('body')}}. Idealerweise sollte es nicht in andere Elemente verschachtelt werden.
- {{HTMLElement('article')}} umfasst einen Block verwandter Inhalte, der für sich allein Sinn ergibt, ohne den Rest der Seite (z.B. ein einzelner Blogbeitrag).
- {{HTMLElement('section')}} ist ähnlich wie `<article>`, eher dazu gedacht, einen einzelnen Teil der Seite zu gruppieren, der eine einzelne Funktionalität oder ein Thema darstellt (z.B. eine Mini-Karte oder eine Sammlung von Artikelüberschriften und -zusammenfassungen). Es wird als gute Praxis angesehen, jedes <section> mit einer [Überschrift](/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs) zu beginnen; beachten Sie auch, dass Sie `<article>`s in verschiedene `<section>`s aufteilen können oder `<section>`s in verschiedene `<article>`s, je nach Kontext.
- {{HTMLElement('aside')}} enthält Inhalte, die nicht direkt mit dem Hauptinhalt in Verbindung stehen, aber zusätzliche Informationen bieten können, die indirekt damit zusammenhängen (Glossareinträge, Autorenbiografie, verwandte Links usw.).
- {{HTMLElement('header')}} repräsentiert eine Gruppe von einleitenden Inhalten. Wenn es ein Kind von {{HTMLElement('body')}} ist, definiert es den globalen Kopfbereich einer Webseite, aber wenn es ein Kind von einem {{HTMLElement('article')}} oder {{HTMLElement('section')}} ist, definiert es einen spezifischen Kopfbereich für diesen Abschnitt (verwechseln Sie dies nicht mit [Titeln und Überschriften](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#adding_a_title)).
- {{HTMLElement('nav')}} enthält die Hauptnavigationsfunktionalität für die Seite. Sekundäre Links usw. würden nicht in die Navigation gehören.
- {{HTMLElement('footer')}} repräsentiert eine Gruppe von abschließenden Inhalten für eine Seite.

Jedes der oben genannten Elemente kann geklickt werden, um den entsprechenden Artikel im Abschnitt "HTML-Elementreferenz" zu lesen, der weitere Details zu jedem bereitstellt.

### Nicht-semantische Umschließungen

Manchmal stoßen Sie auf eine Situation, in der Sie kein ideales semantisches Element finden können, um einige Elemente zusammenzufassen oder einige Inhalte zu umschließen. Manchmal möchten Sie einfach nur eine Gruppe von Elementen zusammenfassen, um sie als eine einzelne Einheit mit etwas {{Glossary("CSS", "CSS")}} oder {{Glossary("JavaScript", "JavaScript")}} zu beeinflussen. Für solche Fälle bietet HTML die {{HTMLElement("div")}} und {{HTMLElement("span")}} Elemente. Sie sollten diese vorzugsweise mit einem geeigneten [`class`](/de/docs/Web/HTML/Global_attributes/class)-Attribut verwenden, um ihnen eine Art Label zu geben, das sie leicht ansprechbar macht.

{{HTMLElement("span")}} ist ein Inline-nicht-semantisches Element, das Sie nur verwenden sollten, wenn Sie kein besseres semantisches Textelement finden können, um Ihren Inhalt zu umschließen, oder ihm keine spezifische Bedeutung hinzufügen möchten. Zum Beispiel:

```html
<p>
  The King walked drunkenly back to his room at 01:00, the beer doing nothing to
  aid him as he staggered through the door.
  <span class="editor-note">
    [Editor's note: At this point in the play, the lights should be down low].
  </span>
</p>
```

In diesem Fall soll die Anmerkung des Herausgebers lediglich eine zusätzliche Anweisung für den Regisseur des Stücks bieten; sie soll keine zusätzliche semantische Bedeutung haben. Für sehende Benutzer würde CSS möglicherweise verwendet werden, um die Notiz etwas vom Haupttext zu entfernen.

{{HTMLElement("div")}} ist ein Blocklevel-nicht-semantisches Element, das Sie nur verwenden sollten, wenn Sie kein besseres semantisches Blockelement finden können oder ihm keine spezifische Bedeutung hinzufügen möchten. Stellen Sie sich beispielsweise ein Einkaufskorb-Widget vor, das Sie jederzeit während Ihrer Zeit auf einer E-Commerce-Website aufrufen können:

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

Dies ist wirklich kein `<aside>`, da es nicht unbedingt mit dem Hauptinhalt der Seite zusammenhängt (Sie möchten es von überall aus sichtbar haben). Es verdient nicht einmal besonders, ein `<section>` zu verwenden, da es nicht Teil des Hauptinhalts der Seite ist. Ein `<div>` ist in diesem Fall also in Ordnung. Wir haben eine Überschrift als Wegweiser hinzugefügt, um Nutzern von Vorlesesoftware zu helfen, es zu finden.

> [!WARNING]
> Divs sind so bequem zu verwenden, dass es leicht ist, sie zu oft zu nutzen. Da sie keinen semantischen Wert tragen, überladen sie einfach Ihren HTML-Code. Verwenden Sie sie nur, wenn es keine bessere semantische Lösung gibt, und versuchen Sie, ihre Verwendung auf ein Minimum zu reduzieren, da Sie sonst Schwierigkeiten haben werden, Ihre Dokumente zu aktualisieren und zu pflegen.

### Zeilenumbrüche und horizontale Linien

Zwei Elemente, die Sie gelegentlich verwenden werden und über die Sie Bescheid wissen sollten, sind {{htmlelement("br")}} und {{htmlelement("hr")}}.

#### \<br>: das Zeilenumbruch-Element

`<br>` erzeugt einen Zeilenumbruch in einem Absatz; es ist der einzige Weg, eine starre Struktur in einer Situation zu erzwingen, in der Sie eine Reihe von fixen kurzen Zeilen möchten, wie in einer Postadresse oder einem Gedicht. Zum Beispiel:

```html
<p>
  There once was a man named O'Dell<br />
  Who loved to write HTML<br />
  But his structure was bad, his semantics were sad<br />
  and his markup didn't read very well.
</p>
```

Ohne die `<br>`-Elemente würde der Absatz einfach in einer langen Zeile dargestellt werden (wie wir bereits früher im Kurs gesagt haben, [ignoriert HTML die meisten Leerzeichen](/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax#whitespace_in_html)); mit `<br>`-Elementen im Code wird das Markup so gerendert:

{{EmbedLiveSample('br_the_line_break_element', '100%', 150)}}

#### \<hr>: das thematische Umbruch-Element

`<hr>`-Elemente erzeugen eine horizontale Linie im Dokument, die einen thematischen Wechsel im Text anzeigt (wie einen Wechsel des Themas oder der Szene). Visuell sieht es einfach wie eine horizontale Linie aus. Als Beispiel:

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

Nachdem Sie die Struktur einer einfachen Webseite geplant haben, ist der nächste logische Schritt, zu versuchen herauszufinden, welchen Inhalt Sie auf einer ganzen Website platzieren möchten, welche Seiten Sie benötigen und wie diese angeordnet werden und sich gegenseitig verlinken sollen, um die bestmögliche Benutzererfahrung zu bieten. Dies wird als {{Glossary("Information_architecture", "Informationsarchitektur")}} bezeichnet. Bei einer großen, komplexen Website kann viel Planung in diesen Prozess einfließen, aber für eine einfache Website mit ein paar Seiten kann dies ziemlich einfach und unterhaltsam sein!

1. Bedenken Sie, dass Sie einige Elemente haben werden, die für die meisten (wenn nicht alle) Seiten gemeinsam sind — wie das Navigationsmenü und den Fußzeileninhalt. Wenn Ihre Website beispielsweise für ein Unternehmen ist, ist es eine gute Idee, Ihre Kontaktinformationen in der Fußzeile auf jeder Seite verfügbar zu haben. Notieren Sie sich, was Sie auf jeder Seite gemeinsam haben möchten.![die gemeinsamen Merkmale der Reiseseite, die auf jeder Seite vorhanden sein sollen: Titel und Logo, Kontakt, Urheberrecht, Nutzungsbedingungen, Sprachwahl, Barrierefreiheitspolitik](common-features.png)
2. Zeichnen Sie als Nächstes eine grobe Skizze dessen, wie die Struktur jeder Seite aussehen könnte (dies könnte wie unsere einfache Website oben aussehen). Notieren Sie, was jeder Block sein wird.![Ein einfaches Diagramm einer Webseiten-Struktur mit Kopfbereich, Hauptinhaltsbereich, zwei optionalen Seitenleisten und Fußzeile](site-structure.png)
3. Machen Sie jetzt ein Brainstorming all der anderen (nicht auf jeder Seite gemeinsamen) Inhalte, die Sie auf Ihrer Website haben möchten — schreiben Sie eine große Liste auf.![Eine lange Liste aller Features, die wir auf unserer Reiseseite unterbringen könnten, von Suche bis zu Sonderangeboten und länderspezifischen Informationen](feature-list.png)
4. Versuchen Sie nun, all diese Inhalte in Gruppen zu sortieren, um eine Vorstellung davon zu bekommen, welche Teile zusammen auf verschiedenen Seiten leben könnten. Dies ist sehr ähnlich zu einer Technik, die als {{Glossary("Card_sorting", "Kartensortierung")}} bezeichnet wird.![Die Artikel, die auf einer Reiseseite erscheinen sollten, sortiert in 5 Kategorien: Suche, Angebote, länderspezifische Infos, Suchergebnisse und Kauf-Sachen](card-sorting.png)
5. Versuchen Sie nun, einen groben Sitemap-Plan zu skizzieren — haben Sie eine Blase für jede Seite auf Ihrer Website und ziehen Sie Linien, um den typischen Workflow zwischen den Seiten zu zeigen. Die Homepage wird wahrscheinlich in der Mitte stehen und verlinken zu den meisten, wenn nicht allen anderen; die meisten Seiten in einer kleinen Website sollten über die Hauptnavigation erreichbar sein, obwohl es Ausnahmen gibt. Sie möchten vielleicht auch Notizen darüber machen, wie die Dinge präsentiert werden könnten.![Eine Karte der Website, die die Homepage, Länderseite, Suchergebnisse, Angebotsseite, Kasse und Kaufseite zeigt](site-map.png)

### Aktives Lernen: Erstellen Sie Ihre eigene Sitemap

Versuchen Sie, die obige Übung für eine Website Ihrer eigenen Wahl durchzuführen. Wofür möchten Sie eine Website erstellen?

> [!NOTE]
> Speichern Sie Ihre Arbeit irgendwo; Sie könnten sie später noch brauchen.

## Zusammenfassung

An diesem Punkt sollten Sie eine bessere Vorstellung davon haben, wie man eine Webseite/Website strukturiert. Im nächsten Artikel dieses Moduls werden wir uns einige fortgeschrittene Texttechniken ansehen.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Lists", "Learn_web_development/Core/Structuring_content/Advanced_text_features", "Learn_web_development/Core/Structuring_content")}}
