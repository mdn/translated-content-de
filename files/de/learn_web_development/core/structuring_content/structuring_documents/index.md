---
title: Strukturierung von Dokumenten
slug: Learn_web_development/Core/Structuring_content/Structuring_documents
l10n:
  sourceCommit: 0915a5e602d475bd1a1a57d905f0bac1b7ed57b8
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Lists", "Learn_web_development/Core/Structuring_content/Advanced_text_features", "Learn_web_development/Core/Structuring_content")}}

Zusätzlich zur Definition einzelner Teile Ihrer Seite (wie "ein Absatz" oder "ein Bild") bietet {{Glossary("HTML", "HTML")}} auch eine Reihe von Blockebenen-Elementen zur Definition von Bereichen Ihrer Website (wie "der Kopfbereich", "das Navigationsmenü", "die Hauptinhaltsspalte"). Dieser Artikel untersucht, wie man eine grundlegende Website-Struktur plant und den HTML-Code schreibt, um diese Struktur darzustellen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende HTML-Kenntnisse, wie sie in
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        > behandelt werden. Textuelle Semantik wie <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
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
          <li>Die üblichen HTML-sematischen Strukturelemente, wie zum Beispiel <code>&lt;main&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code> und <code>&lt;footer&gt;</code>, und wie sie korrekt angewendet werden.</li>
          <li>Die Notwendigkeit, semantische Elemente an geeigneten Stellen zu verwenden, anstatt einfach <code>&lt;div&gt;</code>-Elemente überall dort zu nutzen, wo ein blockbasiertes Container-Element benötigt wird, und die Vorteile davon (wie eine verbesserte Barrierefreiheit).</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Grundlegende Abschnitte eines Dokuments

Webseiten können und werden oft ganz unterschiedlich aussehen, aber sie neigen dazu, ähnliche Standardkomponenten zu teilen, es sei denn, die Seite zeigt ein Vollbildvideo oder -spiel, ist Teil eines Kunstprojekts oder einfach schlecht strukturiert:

- Kopfbereich:
  - : In der Regel ein großer Streifen oben mit einer großen Überschrift, einem Logo und vielleicht einem Slogan. Dies bleibt für gewöhnlich von einer Seite einer Website zur anderen gleich.
- Navigationsleiste:
  - : Links zu den Hauptbereichen der Site; normalerweise in Form von Menütasten, Links oder Tabs dargestellt. Wie der Kopfbereich bleibt dieser Inhalt in der Regel von einer Webseite zur anderen konsistent — eine inkonsistente Navigation auf Ihrer Website wird nur zu verwirrten, frustrierten Nutzern führen. Viele Webdesigner betrachten die Navigationsleiste als Teil des Kopfbereichs und nicht als einzelnes Element, aber das ist keine Voraussetzung; tatsächlich argumentieren einige auch, dass es für die [Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility) besser ist, wenn die beiden getrennt sind, da Bildschirmleseprogramme die beiden Funktionen besser lesen können, wenn sie getrennt sind.
- Hauptinhalt:
  - : Ein großer Bereich in der Mitte, der die meisten der einzigartigen Inhalte einer bestimmten Webseite enthält, zum Beispiel das Video, das Sie ansehen möchten, oder die Hauptgeschichte, die Sie lesen, oder die Karte, die Sie betrachten möchten, oder die Nachrichtenüberschriften, usw. Dies ist der eine Teil der Website, der sich definitiv von Seite zu Seite unterscheiden wird!
- Seitenleiste:
  - : Einige Randinformationen, Links, Zitate, Anzeigen usw. Normalerweise ist dies kontextabhängig zu dem, was im Hauptinhalt enthalten ist (zum Beispiel kann auf einer Nachrichtenseite die Seitenleiste die Biografie des Autors oder Links zu verwandten Artikeln enthalten), aber es gibt auch Fälle, in denen Sie einige wiederkehrende Elemente wie ein sekundäres Navigationssystem finden.
- Fußbereich:
  - : Ein Streifen am unteren Ende der Seite, der in der Regel das Kleingedruckte, Urheberrechtshinweise oder Kontaktinformationen enthält. Es ist ein Ort, an dem allgemeine Informationen platziert werden (wie der Kopfbereich), aber in der Regel sind diese Informationen nicht kritisch oder sekundär für die Website selbst. Der Fußbereich wird manchmal auch für {{Glossary("SEO", "SEO")}}-Zwecke verwendet, indem Links für den schnellen Zugriff auf beliebte Inhalte bereitgestellt werden.

Eine "typische Website" könnte etwa so strukturiert sein:

![Ein einfaches Beispiel für eine Website-Struktur mit einer Hauptüberschrift, Navigationsmenü, Hauptinhalt, Seitenleiste und Fußbereich.](sample-website.png)

> [!NOTE]
> Das obige Bild veranschaulicht die Hauptabschnitte eines Dokuments, die Sie mit HTML definieren können. Das _Aussehen_ der hier gezeigten Seite — einschließlich Layout, Farben und Schriftarten — wird jedoch durch die Anwendung von [CSS](/de/docs/Learn_web_development/Core/Styling_basics) auf das HTML erreicht.

## HTML zur Strukturierung von Inhalten

Das oben gezeigte Beispiel ist nicht schön, aber es ist perfekt geeignet, um ein typisches Website-Layout zu veranschaulichen. Einige Websites haben mehr Spalten, andere sind viel komplexer, aber Sie verstehen die Idee. Mit dem richtigen CSS könnten Sie fast alle Elemente verwenden, um die verschiedenen Abschnitte zu umschließen und sie so zu gestalten, wie Sie es möchten, aber wie zuvor besprochen, müssen wir Semantik respektieren und **das richtige Element für den richtigen Job verwenden**.

Der Grund dafür ist, dass die visuellen Aspekte nicht die ganze Geschichte erzählen. Wir verwenden Farbe und Schriftgröße, um die Aufmerksamkeit sehender Nutzer auf die nützlichsten Teile des Inhalts zu lenken, wie das Navigationsmenü und verwandte Links, aber was ist mit beispielsweise sehbehinderten Menschen, die Konzepte wie "rosa" und "große Schrift" vielleicht nicht besonders nützlich finden?

> **Hinweis:** [Etwa 8% der Männer und 0,5% der Frauen](https://www.color-blindness.com/) sind farbenblind; oder, anders ausgedrückt, etwa 1 von 12 Männern und 1 von 200 Frauen. Blinde und sehbehinderte Menschen stellen etwa 4-5% der Weltbevölkerung dar (2015 gab es [940 Millionen Menschen mit einer gewissen Sehbehinderung](https://en.wikipedia.org/wiki/Visual_impairment), während die Gesamtbevölkerung [rund 7,5 Milliarden](https://en.wikipedia.org/wiki/World_human_population#/media/File:World_population_history.svg) betrug).

In Ihrem HTML-Code können Sie Inhaltsabschnitte basierend auf ihrer _Funktionalität_ markieren — Sie können Elemente verwenden, die die oben beschriebenen Inhaltsabschnitte eindeutig darstellen, und unterstützende Technologien wie Bildschirmleseprogramme können diese Elemente erkennen und bei Aufgaben wie "finde die Hauptnavigation" oder "finde den Hauptinhalt" helfen. Wie bereits früher im Kurs erwähnt, gibt es eine Reihe von [Konsequenzen, wenn man nicht die richtige Elementstruktur und Semantik für den richtigen Job verwendet](/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs#why_do_we_need_structure).

Um eine solche semantische Auszeichnung zu implementieren, stellt HTML spezielle Tags bereit, die Sie verwenden können, um solche Abschnitte darzustellen, zum Beispiel:

- **header:** {{htmlelement("header")}}.
- **Navigationsleiste:** {{htmlelement("nav")}}.
- **Hauptinhalt:** {{htmlelement("main")}}, mit verschiedenen Inhaltsunterabschnitten, die durch {{HTMLElement("article")}}, {{htmlelement("section")}} und {{htmlelement("div")}}-Elemente dargestellt werden.
- **Seitenleiste:** {{htmlelement("aside")}}; wird oft innerhalb von {{htmlelement("main")}} platziert.
- **footer:** {{htmlelement("footer")}}.

### Aktives Lernen: Den Code für unser Beispiel erkunden

Unser oben gesehenes Beispiel wird durch den folgenden Code dargestellt (Sie können das Beispiel auch in unserem [GitHub-Repository finden](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/document_and_website_structure/index.html)). Wir möchten, dass Sie sich das obige Beispiel ansehen und dann das folgende Listing durchsehen, um zu sehen, welche Teile welchen Abschnitte des Visuellen entsprechen.

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

Nehmen Sie sich die Zeit, den Code zu überfliegen und ihn zu verstehen — die Kommentare im Code sollten Ihnen auch helfen, ihn zu verstehen. Wir verlangen in diesem Artikel nicht viel mehr von Ihnen, denn der Schlüssel zum Verständnis der Dokumentlayout-Struktur ist das Schreiben einer soliden HTML-Struktur und dann das Layout mit CSS. Wir werden darauf warten, bis Sie beginnen, das CSS-Layout im Rahmen des CSS-Themenbereichs zu lernen.

## HTML-Layout-Elemente im Detail

Es ist gut, das Gesamtbild aller HTML-Gliederungselemente im Detail zu verstehen — das ist etwas, woran Sie allmählich arbeiten werden, wenn Sie mehr Erfahrung in der Webentwicklung sammeln. Sie können viele Details in unserem [HTML-Element-Referenz](/de/docs/Web/HTML/Reference/Elements) lesen. Für jetzt sind dies die Hauptdefinitionen, die Sie versuchen sollten zu verstehen:

- {{HTMLElement('main')}} ist für Inhalte, die _einzigartig auf dieser Seite sind._ Verwenden Sie `<main>` nur _einmal_ pro Seite und platzieren Sie es direkt innerhalb von {{HTMLElement('body')}}. Idealerweise sollte es nicht innerhalb anderer Elemente verschachtelt werden.
- {{HTMLElement('article')}} umschließt einen Block von verwandten Inhalten, die ohne den Rest der Seite sinnvoll sind (z. B. ein einzelner Blogeintrag).
- {{HTMLElement('section')}} ist ähnlich wie `<article>`, aber es ist mehr für das Gruppieren eines einzelnen Teils der Seite gedacht, der ein einzelnes Stück Funktionalität (z. B. eine Mini-Karte oder eine Reihe von Artikelüberschriften und Zusammenfassungen) oder ein Thema darstellt. Es gilt als Best Practice, jede Sektion mit einer [Überschrift](/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs) zu beginnen; beachten Sie auch, dass Sie `<article>`s in verschiedene `<section>`s unterteilen oder `<section>`s in unterschiedliche `<article>`s, je nach Kontext.
- {{HTMLElement('aside')}} enthält Inhalte, die nicht direkt mit dem Hauptinhalt in Beziehung stehen, aber zusätzliche Informationen bieten, die in indirekter Beziehung dazu stehen (Glossareinträge, Autorenbiografie, verwandte Links, usw.).
- {{HTMLElement('header')}} repräsentiert eine Gruppe von einleitenden Inhalten. Wenn es ein Kind von {{HTMLElement('body')}} ist, definiert es den globalen Kopfbereich einer Webseite, aber wenn es ein Kind von {{HTMLElement('article')}} oder {{HTMLElement('section')}} ist, definiert es einen spezifischen Kopfbereich für diesen Abschnitt (verwechseln Sie dies nicht mit [Titeln und Überschriften](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#adding_a_title)).
- {{HTMLElement('nav')}} enthält die Hauptnavigationsfunktionalität für die Seite. Sekundäre Links, etc., sollten nicht in der Navigation platziert werden.
- {{HTMLElement('footer')}} repräsentiert eine Gruppe von Endinhalten für eine Seite.

Jedes der zuvor genannten Elemente kann angeklickt werden, um den entsprechenden Artikel im Abschnitt "HTML-Elementreferenz" zu lesen, der weitere Details zu jedem bietet.

### Nicht-semantische Wrapper

Manchmal stoßen Sie auf Situationen, in denen Sie kein ideales semantisches Element finden können, um einige Elemente zusammenzufassen oder einige Inhalte einzuwickeln. Manchmal möchten Sie vielleicht einfach nur eine Gruppe von Elementen zusammenfassen, um sie alle als eine Einheit mit etwas {{Glossary("CSS", "CSS")}} oder {{Glossary("JavaScript", "JavaScript")}} zu beeinflussen. Für solche Fälle bietet HTML die {{HTMLElement("div")}} und {{HTMLElement("span")}}-Elemente. Sie sollten diese möglichst mit einem geeigneten [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class)-Attribut verwenden, um ihnen eine gewisse Bezeichnung zu geben, sodass sie leicht ansprechbar sind.

{{HTMLElement("span")}} ist ein Inline-nicht-semantisches Element, das Sie nur verwenden sollten, wenn Sie kein besseres semantisches Textelement finden, um Ihren Inhalt zu umschließen, oder keine spezifische Bedeutung hinzufügen möchten. Zum Beispiel:

```html
<p>
  The King walked drunkenly back to his room at 01:00, the beer doing nothing to
  aid him as he staggered through the door.
  <span class="editor-note">
    [Editor's note: At this point in the play, the lights should be down low].
  </span>
</p>
```

In diesem Fall soll die Notiz des Editors lediglich zusätzliche Anweisungen für den Regisseur des Stückes geben; es soll keine zusätzliche semantische Bedeutung haben. Für sehende Nutzer würde möglicherweise CSS verwendet, um die Notiz etwas vom Haupttext zu distanzieren.

{{HTMLElement("div")}} ist ein Blockebenen-nicht-semantisches Element, das Sie nur verwenden sollten, wenn Ihnen kein besseres semantisches Blockelement einfällt, oder wenn Sie keine spezifische Bedeutung hinzufügen möchten. Stellen Sie sich zum Beispiel ein Einkaufswagen-Widget vor, das Sie jederzeit während Ihres Einkaufs auf einer E-Commerce-Website aufrufen können:

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

Das ist nicht wirklich ein `<aside>`, da es nicht unbedingt mit dem Hauptinhalt der Seite in Zusammenhang steht (Sie möchten es von überall aus verfügbar haben). Es rechtfertigt auch nicht unbedingt die Verwendung eines `<section>`, da es nicht Teil des Hauptinhalts der Seite ist. Ein `<div>` ist in diesem Fall ausreichend. Wir haben eine Überschrift als Wegweiser hinzugefügt, um Nutzern von Bildschirmleseprogrammen bei der Suche danach zu helfen.

> [!WARNING]
> Divs sind so praktisch, dass es leicht ist, sie zu häufig zu verwenden. Da sie keinen semantischen Wert haben, verstopfen sie einfach Ihren HTML-Code. Achten Sie darauf, sie nur dann zu verwenden, wenn es keine bessere semantische Lösung gibt, und versuchen Sie, ihren Gebrauch auf das Minimum zu reduzieren, da Sie sonst Schwierigkeiten haben werden, Ihre Dokumente zu aktualisieren und zu pflegen.

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Scrimbas [Semantisches HTML](https://scrimba.com/learn-accessible-web-design-c031/~0b?via=mdn) <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> interaktives Tutorial bietet eine nützliche Zusammenfassung der semantischen Auszeichnung und warum Sie sie verwenden sollten, sowie eine Herausforderung, die Ihre Fähigkeit testet, eine HTML-Codebasis mit semantischen Elementen zu verbessern.

### Zeilenumbrüche und horizontale Linien

Zwei Elemente, die Sie gelegentlich verwenden werden und über die Sie Bescheid wissen möchten, sind {{htmlelement("br")}} und {{htmlelement("hr")}}.

#### \<br>: das Zeilenumbruch-Element

`<br>` erzeugt einen Zeilenumbruch in einem Absatz; es ist die einzige Möglichkeit, eine starre Struktur in einer Situation zu erzwingen, in der Sie eine Reihe von festen kurzen Zeilen wünschen, wie in einer Postadresse oder einem Gedicht. Zum Beispiel:

```html
<p>
  There once was a man named O'Dell<br />
  Who loved to write HTML<br />
  But his structure was bad, his semantics were sad<br />
  and his markup didn't read very well.
</p>
```

Ohne die `<br>`-Elemente würde der Absatz nur in einer langen Linie dargestellt werden (wie bereits früher im Kurs erwähnt, [ignoriert HTML die meisten Leerzeichen](/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax#whitespace_in_html)); mit `<br>`-Elementen im Code wird das Markup so gerendert:

{{EmbedLiveSample('br_the_line_break_element', '100%', 150)}}

#### \<hr>: das thematische Trennungs-Element

`<hr>`-Elemente erzeugen eine horizontale Linie im Dokument, die einen thematischen Wechsel im Text anzeigt (wie einen Themenwechsel oder eine Szenenänderung). Visuell sieht es einfach wie eine horizontale Linie aus. Ein Beispiel:

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

Sobald Sie die Struktur einer einfachen Webseite geplant haben, ist der nächste logische Schritt, zu versuchen, herauszufinden, welchen Inhalt Sie auf einer ganzen Website unterbringen möchten, welche Seiten Sie benötigen und wie diese angeordnet und miteinander verlinkt werden sollten, um die bestmögliche Benutzererfahrung zu bieten. Dies wird als {{Glossary("Information_architecture", "Informationsarchitektur")}} bezeichnet. Bei einer großen, komplexen Website kann viel Planung in diesen Prozess einfließen, aber für eine einfache Website mit wenigen Seiten kann dies recht einfach und unterhaltsam sein!

1. Bedenken Sie, dass Sie einige Elemente haben werden, die den meisten (wenn nicht allen) Seiten gemeinsam sind — wie das Navigationsmenü und den Fußbereich-Inhalt. Wenn Ihre Website beispielsweise für ein Unternehmen ist, ist es eine gute Idee, Ihre Kontaktinformationen im Fußbereich auf jeder Seite verfügbar zu haben. Notieren Sie, was Sie auf jeder Seite gemeinsam haben möchten.![die gemeinsamen Merkmale der Reise-Website, die auf jeder Seite stehen sollen: Titel und Logo, Kontakt, Urheberrecht, Geschäftsbedingungen, Sprachauswahl, Barrierefreiheitspolitik](common-features.png)
2. Zeichnen Sie als Nächstes eine grobe Skizze, wie die Struktur jeder Seite aussehen könnte (sie könnte wie unsere einfache Website oben aussehen). Notieren Sie, was jeder Block sein wird.![Eine einfache Skizze einer Beispielseitenstruktur mit einem Kopfbereich, Hauptinhaltsbereich, zwei optionalen Seitenleisten und Fußbereich](site-structure.png)
3. Jetzt sollten Sie alle weiteren Inhalte (die nicht auf jeder Seite gleich sein sollen) auf Ihrer Website brainstormen — schreiben Sie eine große Liste auf.![Eine lange Liste aller Funktionen, die wir auf unserer Reise-Website unterbringen könnten, von Suche bis zu speziellen Angeboten und länderspezifischen Infos](feature-list.png)
4. Versuchen Sie als Nächstes, all diese Inhaltelemente in Gruppen zu sortieren, um eine Vorstellung davon zu bekommen, welche Teile zusammen auf unterschiedlichen Seiten erscheinen könnten. Dies ist sehr ähnlich einer Technik namens {{Glossary("Card_sorting", "Karten-Sortierung")}}.![Die Elemente, die auf einer Urlaubsseite auftauchen sollen, in 5 Kategorien sortiert: Suche, Sonderangebote, Länderspezifische Infos, Suchergebnisse und Einkaufen](card-sorting.png)
5. Jetzt versuchen Sie, eine grobe Sitemap zu skizzieren — haben Sie eine Blase für jede Seite Ihrer Website und ziehen Sie Linien, um den typischen Workflow zwischen den Seiten zu zeigen. Die Startseite wird wahrscheinlich in der Mitte sein und mit den meisten, wenn nicht allen anderen, verlinkt; die meisten Seiten in einer kleinen Website sollten von der Hauptnavigation aus verfügbar sein, obwohl es Ausnahmen gibt. Sie möchten vielleicht auch Notizen darüber machen, wie Dinge präsentiert werden könnten.![Eine Karte der Website zeigt die Startseite, Länderseite, Suchergebnisse, Sonderangebotsseite, Kassenseite und Kaufseite](site-map.png)

### Aktives Lernen: Erstellen Sie Ihre eigene Sitemap

Versuchen Sie, die obige Übung für eine von Ihnen erstellte Website durchzuführen. Worum möchten Sie eine Website erstellen?

> [!NOTE]
> Speichern Sie Ihre Arbeit irgendwo; Sie könnten sie später benötigen.

## Zusammenfassung

An diesem Punkt sollten Sie eine bessere Vorstellung davon haben, wie man eine Webseite/Website strukturiert. Im nächsten Artikel dieses Moduls werden wir einige fortgeschrittene Texttechniken untersuchen.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Lists", "Learn_web_development/Core/Structuring_content/Advanced_text_features", "Learn_web_development/Core/Structuring_content")}}
