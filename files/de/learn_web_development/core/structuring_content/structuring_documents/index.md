---
title: Strukturierung von Dokumenten
slug: Learn_web_development/Core/Structuring_content/Structuring_documents
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Lists", "Learn_web_development/Core/Structuring_content/Advanced_text_features", "Learn_web_development/Core/Structuring_content")}}

Zusätzlich zur Definition einzelner Teile Ihrer Seite (wie "ein Absatz" oder "ein Bild") bietet {{Glossary("HTML", "HTML")}} auch eine Reihe von Blockebenen-Elementen, die zur Definition von Bereichen Ihrer Webseite genutzt werden (wie "die Kopfzeile", "das Navigationsmenü", "die Hauptinhalts-Spalte"). Dieser Artikel befasst sich damit, wie Sie eine grundlegende Webseitenstruktur planen und das HTML schreiben, um diese Struktur darzustellen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML, wie sie in
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
          <li>Die gängigen semantischen Strukturelemente von HTML, wie zum Beispiel <code>&lt;main&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code> und <code>&lt;footer&gt;</code>, und wie man sie korrekt verwendet.</li>
          <li>Die Notwendigkeit, semantische Elemente an geeigneten Stellen zu verwenden, anstatt einfach <code>&lt;div&gt;</code>-Elemente immer dann zu verwenden, wenn ein Blockebenen-Container benötigt wird, und die Vorteile davon (wie verbesserte Zugänglichkeit).</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Grundlegende Abschnitte eines Dokuments

Webseiten können recht unterschiedlich aussehen, aber sie neigen dazu, ähnliche Standardkomponenten zu teilen, es sei denn, die Seite zeigt ein Vollbild-Video oder Spiel, ist Teil eines Kunstprojekts oder ist einfach schlecht strukturiert:

- Kopfzeile:
  - : Normalerweise ein großer Streifen am oberen Rand mit einer großen Überschrift, einem Logo und eventuell einem Slogan. Diese bleibt normalerweise von einer Seite zur anderen eines Webauftritts gleich.
- Navigationsleiste:
  - : Links zu den Hauptbereichen der Seite; in der Regel durch Menü-Schaltflächen, Links oder Tabs dargestellt. Diese Inhalte bleiben normalerweise ebenfalls von einer Webseite zur anderen konsistent – eine inkonsistente Navigation auf Ihrer Webseite führt nur zu verwirrten, frustrierten Benutzern. Viele Webdesigner betrachten die Navigationsleiste als Teil der Kopfzeile anstatt als ein separates Element, aber das ist keine Pflicht; tatsächlich argumentieren einige auch, dass es besser für die [Zugänglichkeit](/de/docs/Learn_web_development/Core/Accessibility) ist, wenn die beiden getrennt sind, da Bildschirmleseprogramme die beiden Funktionen besser erfassen können, wenn sie getrennt sind.
- Hauptinhalt:
  - : Ein großer Bereich in der Mitte, der den größten Teil des einzigartigen Inhalts einer bestimmten Webseite enthält, zum Beispiel das Video, das Sie ansehen möchten, oder die Hauptgeschichte, die Sie lesen, oder die Karte, die Sie betrachten möchten, oder die Nachrichtenschlagzeilen usw. Dies ist der eine Teil der Webseite, der definitiv von einer Seite zur anderen variieren wird!
- Seitenleiste:
  - : Einige Randinformationen, Links, Zitate, Anzeigen usw. Normalerweise steht dies im Kontext zu dem, was der Hauptinhalt entält (zum Beispiel könnte auf einer Nachrichtenartikel-Seite die Seitenleiste die Biografie des Autors oder Links zu verwandten Artikeln enthalten), aber es gibt auch Fälle, in denen Sie einige wiederkehrende Elemente finden, wie ein sekundäres Navigationssystem.
- Fußzeile:
  - : Ein Streifen am unteren Rand der Seite, der normalerweise Kleingedrucktes, Urheberrechtshinweise oder Kontaktinformationen enthält. Es ist ein Ort, um allgemeine Informationen zu platzieren (wie die Kopfzeile), aber normalerweise sind diese Informationen nicht kritisch oder sekundär zur Webseite selbst. Die Fußzeile wird auch manchmal für {{Glossary("SEO", "SEO")}}-Zwecke verwendet, indem Links bereitgestellt werden, um schnell auf beliebte Inhalte zugreifen zu können.

Eine "typische Webseite" könnte in etwa so strukturiert sein:

![Ein einfaches Beispiel einer Webseitenstruktur mit Hauptüberschrift, Navigationsmenü, Hauptinhalt, Seitenleiste und Fußzeile.](sample-website.png)

> [!NOTE]
> Das obige Bild zeigt die Hauptabschnitte eines Dokuments, die Sie mit HTML definieren können. Das _Aussehen_ der hier gezeigten Seite – einschließlich Layout, Farben und Schriftarten – wird durch die Anwendung von [CSS](/de/docs/Learn_web_development/Core/Styling_basics) auf das HTML erreicht.

## HTML zur Strukturierung von Inhalten

Das gezeigte Beispiel ist nicht hübsch, aber es eignet sich perfekt, um ein typisches Layout-Beispiel für eine Webseite zu demonstrieren. Einige Webseiten haben mehr Spalten, einige sind viel komplexer, aber Sie verstehen die Idee. Mit dem richtigen CSS könnten Sie praktisch jedes Element verwenden, um die verschiedene Abschnitte zu umschließen und es so aussehen zu lassen, wie Sie es möchten, aber wie schon vorher diskutiert, müssen wir die Semantik respektieren und **das richtige Element für die richtige Aufgabe** verwenden.

Das liegt daran, dass das Visuelle nicht die ganze Geschichte erzählt. Wir verwenden Farbe und Schriftgröße, um die Aufmerksamkeit sehender Benutzer auf die nützlichsten Teile des Inhalts zu lenken, wie das Navigationsmenü und verwandte Links, aber was ist zum Beispiel mit sehbehinderten Personen, die Konzepte wie "rosa" und "große Schrift" möglicherweise nicht sehr hilfreich finden?

> **Hinweis:** [Etwa 8 % der Männer und 0,5 % der Frauen](https://www.color-blindness.com/) sind farbenblind; oder, anders gesagt, ungefähr 1 von 12 Männern und 1 von 200 Frauen. Blinde und sehbehinderte Menschen repräsentieren in etwa 4-5 % der Weltbevölkerung (2015 gab es [940 Millionen Menschen mit irgendeinem Grad von Sehverlust](https://en.wikipedia.org/wiki/Visual_impairment), während die Gesamtbevölkerung [rund 7,5 Milliarden](https://en.wikipedia.org/wiki/World_human_population#/media/File:World_population_history.svg) betrug).

In Ihrem HTML-Code können Sie Inhaltsabschnitte basierend auf ihrer _Funktionalität_ markieren – Sie können Elemente verwenden, die die oben beschriebenen Inhaltsabschnitte eindeutig darstellen, und Hilfstechnologien wie Bildschirmleseprogramme können diese Elemente erkennen und bei Aufgaben wie "die Hauptnavigation finden" oder "den Hauptinhalt finden" helfen. Wie wir bereits früher im Kurs erwähnt haben, gibt es eine Reihe von [Konsequenzen, wenn man die richtige Elementstruktur und Semantik nicht für die richtige Aufgabe verwendet](/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs#why_do_we_need_structure).

Um eine solche semantische Auszeichnung zu implementieren, bietet HTML spezielle Tags, die Sie zur Darstellung solcher Abschnitte verwenden können, zum Beispiel:

- **header:** {{htmlelement("header")}}.
- **Navigationsleiste:** {{htmlelement("nav")}}.
- **Hauptinhalt:** {{htmlelement("main")}}, mit verschiedenen Inhaltsteilabschnitten, die durch {{HTMLElement("article")}}, {{htmlelement("section")}} und {{htmlelement("div")}}-Elemente dargestellt werden.
- **Seitenleiste:** {{htmlelement("aside")}}; oft im {{htmlelement("main")}} platziert.
- **footer:** {{htmlelement("footer")}}.

### Aktives Lernen: Den Code für unser Beispiel erkunden

Unser oben gesehenes Beispiel wird durch den folgenden Code dargestellt (Sie können das Beispiel auch in unserem [GitHub-Repository finden](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/document_and_website_structure/index.html)). Wir möchten, dass Sie das obige Beispiel betrachten und dann das untenstehende Listing prüfen, um zu sehen, welche Teile welchen Abschnitt des visuellen Beispiels bilden.

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

Nehmen Sie sich Zeit, den Code zu überprüfen und zu verstehen – die Kommentare im Code sollten Ihnen ebenfalls helfen, ihn zu verstehen. Wir bitten Sie in diesem Artikel nicht, viel mehr zu tun, denn der Schlüssel zum Verständnis des Dokumentenlayouts liegt darin, eine solide HTML-Struktur zu schreiben und diese dann mit CSS zu gestalten. Wir warten damit, bis Sie beginnen, das CSS-Layout als Teil des CSS-Themas zu studieren.

## HTML-Layout-Elemente im Detail

Es ist gut, das allgemeine Verständnis aller HTML-Sektionierungselemente im Detail zu haben – das ist etwas, woran Sie allmählich arbeiten werden, wenn Sie mehr Erfahrung mit Webentwicklung sammeln. Sie können viele Details lesen, indem Sie unser [HTML-Element-Referenz](/de/docs/Web/HTML/Reference/Elements) lesen. Für jetzt sind dies die Hauptdefinitionen, die Sie versuchen sollten, zu verstehen:

- {{HTMLElement('main')}} ist für Inhalte, _die einzigartig für diese Seite sind_. Verwenden Sie `<main>` nur _einmal_ pro Seite und platzieren Sie es direkt im {{HTMLElement('body')}}. Idealerweise sollte dies nicht in andere Elemente verschachtelt werden.
- {{HTMLElement('article')}} schließt einen Block verwandten Inhalts ein, der ohne den Rest der Seite sinnvoll ist (z. B. ein einzelner Blogbeitrag).
- {{HTMLElement('section')}} ist ähnlich wie `<article>`, aber es dient mehr dazu, einen einzelnen Teil der Seite zu gruppieren, der ein einzelnes Funktionalitätselement repräsentiert (z. B. eine Minikarte, oder eine Reihe von Artikelschlagzeilen und -zusammenfassungen) oder ein Thema. Es wird als gute Praxis angesehen, jede Sektion mit einer [Überschrift](/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs) zu beginnen; beachten Sie auch, dass Sie `<article>`s in verschiedene `<section>`s aufteilen können oder `<section>`s in verschiedene `<article>`s, je nach Kontext.
- {{HTMLElement('aside')}} enthält Inhalte, die nicht direkt mit dem Hauptinhalt in Verbindung stehen, aber zusätzliche Informationen, die indirekt damit verbunden sind, bereitstellen können (Glossareinträge, Autorenbiografie, verwandte Links usw.).
- {{HTMLElement('header')}} repräsentiert eine Gruppe einleitender Inhalte. Wenn es ein Kind von {{HTMLElement('body')}} ist, definiert es die globale Kopfzeile einer Webseite, aber wenn es ein Kind von {{HTMLElement('article')}} oder {{HTMLElement('section')}} ist, definiert es eine spezifische Kopfzeile für diesen Abschnitt (versuchen Sie nicht, dies mit [Titeln und Überschriften](/de/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#adding_a_title) zu verwechseln).
- {{HTMLElement('nav')}} enthält die Hauptnavigationsfunktionalität für die Seite. Sekundäre Links usw. würden nicht in die Navigation gehen.
- {{HTMLElement('footer')}} repräsentiert eine Gruppe von Endinhalten für eine Seite.

Jedes der oben genannten Elemente kann angeklickt werden, um den entsprechenden Artikel im Abschnitt "HTML-Element-Referenz" zu lesen, der mehr Details zu jedem bietet.

### Nicht-semantische Wrapper

Manchmal stoßen Sie auf Situationen, in denen Sie kein ideales semantisches Element finden können, um einige Elemente zusammenzufassen oder Inhalte zu umschließen. Manchmal möchten Sie einfach eine Gruppe von Elementen zusammenfassen, um sie alle als eine einzelne Einheit mit etwas {{Glossary("CSS", "CSS")}} oder {{Glossary("JavaScript", "JavaScript")}} zu beeinflussen. Für Fälle wie diese bietet HTML die {{HTMLElement("div")}} und {{HTMLElement("span")}}-Elemente. Sie sollten diese vorzugsweise mit einem geeigneten [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class)-Attribut verwenden, um ihnen eine Art von Bezeichnung zu geben, so dass sie einfach anvisiert werden können.

{{HTMLElement("span")}} ist ein Inline-, nicht-semantisches Element, das Sie nur verwenden sollten, wenn Sie kein besseres semantisches Textelement finden können, um Ihren Inhalt zu umschließen, oder wenn Sie keine spezifische Bedeutung hinzufügen möchten. Zum Beispiel:

```html
<p>
  The King walked drunkenly back to his room at 01:00, the beer doing nothing to
  aid him as he staggered through the door.
  <span class="editor-note">
    [Editor's note: At this point in the play, the lights should be down low].
  </span>
</p>
```

In diesem Fall soll die Redaktion lediglich zusätzliche Anweisungen für den Regisseur des Stücks geben; sie soll keine zusätzliche semantische Bedeutung haben. Für sehende Benutzer würde CSS möglicherweise verwendet, um die Notiz leicht vom Haupttext zu distanzieren.

{{HTMLElement("div")}} ist ein Blockebenen-, nicht-semantisches Element, das Sie nur verwenden sollten, wenn Sie kein besseres semantisches Blockelement finden können oder Sie keine spezifische Bedeutung hinzufügen möchten. Zum Beispiel stellen Sie sich ein Einkaufswagen-Widget vor, das Sie zu jedem Zeitpunkt während Ihres Aufenthaltes auf einer E-Commerce-Site aufrufen können:

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

Dies ist nicht wirklich ein `<aside>`, da es sich nicht unbedingt auf den Hauptinhalt der Seite bezieht (Sie möchten es von überall sichtbar haben). Es rechtfertigt nicht einmal besonders die Verwendung eines `<section>`, da es nicht Teil des Hauptinhalts der Seite ist. Also ist ein `<div>` in diesem Fall in Ordnung. Wir haben eine Überschrift als Wegweiser hinzugefügt, um Bildschirmlesernutzern zu helfen, sie zu finden.

> [!WARNING]
> Divs sind so bequem zu verwenden, dass es leicht ist, sie zu oft zu verwenden. Da sie keinen semantischen Wert haben, verstopfen sie einfach Ihren HTML-Code. Achten Sie darauf, sie nur dann zu verwenden, wenn es keine bessere semantische Lösung gibt, und versuchen Sie, ihren Einsatz zu minimieren, andernfalls werden Sie Probleme haben, Ihre Dokumente zu aktualisieren und zu warten.

### Zeilenumbrüche und horizontale Linien

Zwei Elemente, die Sie gelegentlich verwenden werden und die Sie kennen sollten, sind {{htmlelement("br")}} und {{htmlelement("hr")}}.

#### \<br>: das Zeilenumbruch-Element

`<br>` erzeugt einen Zeilenumbruch in einem Absatz; es ist die einzige Möglichkeit, eine starre Struktur in einer Situation zu erzwingen, in der Sie eine Serie von festen kurzen Zeilen wünschen, wie in einer Postanschrift oder einem Gedicht. Zum Beispiel:

```html
<p>
  There once was a man named O'Dell<br />
  Who loved to write HTML<br />
  But his structure was bad, his semantics were sad<br />
  and his markup didn't read very well.
</p>
```

Ohne die `<br>`-Elemente würde der Absatz nur in einer langen Zeile dargestellt werden (wie wir früher im Kurs gesagt haben, [HTML ignoriert die meisten Leerzeichen](/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax#whitespace_in_html)); mit `<br>`-Elementen im Code wird das Markup so dargestellt:

{{EmbedLiveSample('br_the_line_break_element', '100%', 150)}}

#### \<hr>: das thematische Trennlinienelement

`<hr>`-Elemente erzeugen eine horizontale Linie im Dokument, die einen thematischen Wechsel im Text anzeigt (wie einen Themen- oder Szenenwechsel). Visuell sieht es einfach wie eine horizontale Linie aus. Ein Beispiel:

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

Wird so gerendert:

{{EmbedLiveSample('hr_the_thematic_break_element', '100%', '185px')}}

## Planung einer einfachen Webseite

Sobald Sie die Struktur einer einfachen Webseite geplant haben, ist der nächste logische Schritt, zu versuchen, herauszufinden, welchen Inhalt Sie auf einer ganzen Webseite platzieren möchten, welche Seiten Sie benötigen und wie sie angeordnet sein und miteinander verlinkt werden sollten, um das beste Nutzererlebnis zu erzielen. Das wird genannt {{Glossary("Information_architecture", "Informationsarchitektur")}}. In einer großen, komplexen Webseite kann viel Planung in diesen Prozess eingehen, aber für eine einfache Webseite mit nur wenigen Seiten kann dies recht einfach und lustig sein!

1. Bedenken Sie, dass es einige Elemente gibt, die für die meisten (wenn nicht alle) Seiten gemeinsam sind – wie das Navigationsmenü und den Fußzeileninhalt. Wenn Ihre Seite beispielsweise für ein Geschäft ist, ist es eine gute Idee, Ihre Kontaktinformationen in der Fußzeile auf jeder Seite verfügbar zu haben. Beachten Sie, was Sie auf jeder Seite gemeinsam haben möchten.![die gemeinsamen Merkmale der Reiseseite, die auf jede Seite kommen sollen: Titel und Logo, Kontakt, Urheberrechte, Geschäftsbedingungen, Sprachwahl, Barrierefreiheitspolitik](common-features.png)
2. Zeichnen Sie als nächstes eine grobe Skizze davon, wie die Struktur jeder Seite aussehen könnte (es könnte wie unsere einfache Webseite oben aussehen). Beachten Sie, was jeder Block darstellen wird.![Ein einfaches Diagramm eines Beispielseitenaufbaus mit Kopfzeile, Hauptinhaltsbereich, zwei optionalen Seitenleisten und Fußzeile](site-structure.png)
3. Überlegen Sie sich alle anderen (nicht auf jeder Seite gleichen) Inhalte, die Sie auf Ihrer Webseite haben möchten – schreiben Sie eine große Liste auf.![Eine lange Liste aller Funktionen, die wir auf unserer Reiseseite haben könnten, von der Suche bis zu Sonderangeboten und länderspezifischen Informationen](feature-list.png)
4. Versuchen Sie dann, alle diese Inhaltelemente in Gruppen zu sortieren, um eine Idee zu bekommen, welche Teile auf verschiedenen Seiten zusammenleben könnten. Das ist sehr ähnlich einer Technik namens {{Glossary("Card_sorting", "Kartensortierung")}}.![Die Elemente, die auf einer Urlaubsseite erscheinen sollten, sortiert in 5 Kategorien: Suche, Spezialangebote, Länderspezifische Infos, Suchergebnisse und Einkaufen](card-sorting.png)
5. Versuchen Sie nun, eine grobe Sitemap zu skizzieren – haben Sie eine Blase für jede Seite auf Ihrer Webseite und zeichnen Sie Linien, um den typischen Workflow zwischen den Seiten zu zeigen. Die Homepage wird wahrscheinlich im Zentrum stehen und zu den meisten, wenn nicht allen anderen Seiten verlinken; die meisten Seiten einer kleinen Seite sollten aus der Hauptnavigation zugänglich sein, obwohl es Ausnahmen gibt. Sie möchten vielleicht auch Notizen dazu machen, wie Dinge präsentiert werden könnten.![Eine Übersicht der Webseite mit Homepage, Länder-Seite, Suchergebnisse, Sonderangeboteseite, Checkout und Kaufseite](site-map.png)

### Aktives Lernen: Erstellen Sie Ihre eigene Sitemap

Versuchen Sie, die obige Übung für eine Webseite Ihrer eigenen Kreation durchzuführen. Worum möchten Sie eine Seite erstellen?

> [!NOTE]
> Speichern Sie Ihre Arbeit irgendwo; Sie könnten sie später brauchen.

## Zusammenfassung

Zu diesem Zeitpunkt sollten Sie eine bessere Vorstellung davon haben, wie eine Webseite strukturiert werden kann. Im nächsten Artikel dieses Moduls werden wir uns einige fortgeschrittene Texttechniken ansehen.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Lists", "Learn_web_development/Core/Structuring_content/Advanced_text_features", "Learn_web_development/Core/Structuring_content")}}
