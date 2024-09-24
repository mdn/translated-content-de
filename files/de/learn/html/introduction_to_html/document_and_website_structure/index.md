---
title: Struktur eines Dokuments und einer Website
slug: Learn/HTML/Introduction_to_HTML/Document_and_website_structure
l10n:
  sourceCommit: 5026c14bd6d2b6b377289aadac7eceae9282e806
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Advanced_text_formatting", "Learn/HTML/Introduction_to_HTML/Debugging_HTML", "Learn/HTML/Introduction_to_HTML")}}

Zusätzlich zur Definition einzelner Teile Ihrer Seite (wie "ein Absatz" oder "ein Bild") bietet {{Glossary("HTML", "HTML")}} eine Reihe von Block-Elementen zur Definition von Bereichen Ihrer Website (wie "die Kopfzeile", "das Navigationsmenü", "die Hauptinhaltsspalte"). Dieser Artikel untersucht, wie man eine grundlegende Website-Struktur plant und das HTML schreibt, um diese Struktur darzustellen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML, wie sie im
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
          >Einstieg in HTML</a
        > behandelt werden. HTML-Textformatierung, wie sie in
        <a
          href="/de/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals"
          >Grundlagen der HTML-Textformatierung</a
        > behandelt wird. Wie Hyperlinks funktionieren, wie im
        <a
          href="/de/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks"
          >Erstellen von Hyperlinks</a
        > erläutert.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen Sie, wie Sie Ihr Dokument mit semantischen Tags strukturieren und wie Sie die Struktur einer einfachen Website erarbeiten.
      </td>
    </tr>
  </tbody>
</table>

## Grundlegende Abschnitte eines Dokuments

Webseiten können und werden unterschiedlich aussehen, aber alle neigen dazu, ähnliche Standardkomponenten zu teilen, es sei denn, die Seite zeigt ein Vollbild-Video oder -Spiel, ist Teil eines Kunstprojekts oder ist einfach schlecht strukturiert:

- Header:
  - : Gewöhnlich ein großer Streifen oben mit einer großen Überschrift, Logo und vielleicht einem Slogan. Dies bleibt normalerweise von einer Webseite zur anderen gleich.
- Navigationsleiste:
  - : Links zu den Hauptbereichen der Website; normalerweise durch Menütasten, Links oder Tabs dargestellt. Wie der Header bleibt auch dieser Inhalt normalerweise von einer Seite zur nächsten konsistent – inkonsistente Navigation auf Ihrer Website führt nur zu verwirrten, frustrierten Nutzern. Viele Webdesigner betrachten die Navigationsleiste als Teil des Headers statt als ein eigenes Element, aber das ist keine Voraussetzung; tatsächlich argumentieren einige auch, dass die Trennung der beiden für die [Zugänglichkeit](/de/docs/Learn/Accessibility) besser ist, da Screenreader die beiden Funktionen besser lesen können, wenn sie getrennt sind.
- Hauptinhalt:
  - : Ein großer Bereich in der Mitte, der den Großteil des einzigartigen Inhalts einer bestimmten Webseite enthält, zum Beispiel das Video, das Sie sehen möchten, oder die Hauptgeschichte, die Sie lesen, oder die Karte, die Sie ansehen möchten, oder die Nachrichtenüberschriften usw. Dies ist der Teil der Website, der definitiv von Seite zu Seite variieren wird!
- Seitenleiste:
  - : Einige Randinformationen, Links, Zitate, Anzeigen usw. Normalerweise ist dies kontextbezogen zu dem, was im Hauptinhalt enthalten ist (zum Beispiel auf einer Nachrichtenartikel-Seite könnte die Seitenleiste die Biografie des Autors oder Links zu verwandten Artikeln enthalten), aber es gibt auch Fälle, in denen Sie wiederkehrende Elemente finden wie ein sekundäres Navigationssystem.
- Footer:
  - : Ein Streifen am unteren Ende der Seite, der im Allgemeinen Kleingedrucktes, Urheberrechtsvermerke oder Kontaktinformationen enthält. Es ist ein Ort, um allgemeine Informationen (wie die Kopfzeile) zu platzieren, aber normalerweise sind diese Informationen nicht kritisch oder zweitrangig zur Website selbst. Der Footer wird auch manchmal für {{Glossary("SEO", "SEO")}}-Zwecke verwendet, indem Links für den schnellen Zugriff auf beliebten Inhalt bereitgestellt werden.

Eine "typische Website" könnte ungefähr so strukturiert sein:

![ein einfaches Beispiel für eine Website-Struktur mit einer Hauptüberschrift, Navigationsmenü, Hauptinhalt, Seitenleiste und Footer.](sample-website.png)

> [!NOTE]
> Das obige Bild illustriert die Hauptabschnitte eines Dokuments, die Sie mit HTML definieren können. Das _Aussehen_ der Seite, die hier gezeigt wird - einschließlich Layout, Farben und Schriftarten - wird jedoch durch die Anwendung von [CSS](/de/docs/Learn/CSS) auf das HTML erreicht.
>
> In diesem Modul lehren wir kein CSS, aber sobald Sie ein Verständnis der Grundlagen von HTML haben, probieren Sie unser [CSS Erste Schritte](/de/docs/Learn/CSS/First_steps) Modul aus, um zu lernen, wie Sie Ihre Seite gestalten können.

## HTML zur Strukturierung von Inhalten

Das einfache obige Beispiel ist zwar nicht schön, eignet sich jedoch hervorragend, um ein typisches Website-Layout zu veranschaulichen. Einige Websites haben mehr Spalten, manche sind viel komplexer, aber Sie verstehen das Prinzip. Mit dem richtigen CSS könnten Sie praktisch beliebige Elemente verwenden, um die verschiedenen Abschnitte zu umschließen und sie so zu gestalten, wie Sie es möchten. Aber wie bereits erwähnt, müssen wir Semantik respektieren und **das richtige Element für die jeweilige Aufgabe verwenden**.

Dies liegt daran, dass visuelle Aspekte nicht die ganze Geschichte erzählen. Wir verwenden Farbe und Schriftgröße, um sehenden Nutzern die nützlichsten Teile des Inhalts näher zu bringen, wie das Navigationsmenü und verwandte Links. Aber was ist mit Menschen mit Sehbehinderung, für die Konzepte wie "pink" und "große Schrift" möglicherweise nicht sehr nützlich sind?

> **Note:** [Etwa 8% der Männer und 0,5% der Frauen](https://www.color-blindness.com/) sind farbenblind; oder anders ausgedrückt, etwa 1 von 12 Männern und 1 von 200 Frauen. Blinde und sehbehinderte Menschen machen etwa 4-5% der Weltbevölkerung aus (2015 gab es [940 Millionen Menschen mit einem gewissen Grad an Sehverlust](https://en.wikipedia.org/wiki/Visual_impairment), während die Gesamtbevölkerung [etwa 7,5 Milliarden](https://en.wikipedia.org/wiki/World_human_population#/media/File:World_population_history.svg) betrug).

In Ihrem HTML-Code können Sie Inhaltsabschnitte basierend auf ihrer _Funktionalität_ markieren — Sie können Elemente verwenden, die die oben beschriebenen Inhaltsabschnitte unmissverständlich darstellen, und unterstützende Technologien wie Screenreader können diese Elemente erkennen und bei Aufgaben wie "die Hauptnavigation finden" oder "den Hauptinhalt finden" helfen. Wie wir zu Beginn des Kurses erwähnt haben, gibt es eine Reihe von [Konsequenzen, wenn die richtige Elementstruktur und Semantik nicht für die jeweilige Aufgabe verwendet wird](/de/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals#why_do_we_need_structure).

Um eine solche semantische Auszeichnung zu implementieren, stellt HTML spezielle Tags zur Verfügung, die Sie zur Darstellung solcher Abschnitte verwenden können, zum Beispiel:

- **header:** {{htmlelement("header")}}.
- **Navigationsleiste:** {{htmlelement("nav")}}.
- **Hauptinhalt:** {{htmlelement("main")}}, mit verschiedenen Inhaltsunterabschnitten, die durch {{HTMLElement("article")}}, {{htmlelement("section")}}, und {{htmlelement("div")}}-Elemente dargestellt werden.
- **Seitenleiste:** {{htmlelement("aside")}}; häufig innerhalb von {{htmlelement("main")}} platziert.
- **footer:** {{htmlelement("footer")}}.

### Aktives Lernen: den Code für unser Beispiel erkunden

Unser oben gesehenes Beispiel wird durch den folgenden Code dargestellt (Sie können das Beispiel auch in unserem [GitHub-Repository finden](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/document_and_website_structure/index.html)). Wir möchten, dass Sie sich das oben gezeigte Beispiel ansehen und dann das untenstehende Listing durchsehen, um zu sehen, welche Teile welchen Abschnitt des Bildes ausmachen.

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
    <!-- Here is our main header that is used across all the pages of our website -->

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

      <!-- A Search form is another common non-linear way to navigate through a website. -->

      <form>
        <input type="search" name="q" placeholder="Search query" />
        <input type="submit" value="Go!" />
      </form>
    </nav>

    <!-- Here is our page's main content -->
    <main>
      <!-- It contains an article -->
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

    <!-- And here is our main footer that is used across all the pages of our website -->

    <footer>
      <p>©Copyright 2050 by nobody. All rights reversed.</p>
    </footer>
  </body>
</html>
```

Nehmen Sie sich etwas Zeit, um den Code durchzulesen und zu verstehen — die Kommentare im Code sollten Ihnen ebenfalls helfen, ihn zu verstehen. Wir verlangen in diesem Artikel nicht viel mehr von Ihnen, denn der Schlüssel zum Verständnis des Dokumentenlayouts besteht darin, eine solide HTML-Struktur zu schreiben und diese dann mit CSS aufzubauen. Wir warten damit, bis Sie beginnen, CSS-Layout als Teil des CSS-Themas zu studieren.

## HTML-Layout-Elemente im Detail

Es ist gut, das Gesamtkonzept aller HTML-Abschnittselemente im Detail zu verstehen — dies ist etwas, woran Sie allmählich arbeiten werden, wenn Sie mehr Erfahrung in der Webentwicklung sammeln. Sie können viele Details lesen, indem Sie unser [HTML-Element-Referenz](/de/docs/Web/HTML/Element) lesen. Für jetzt sind dies die Hauptdefinitionen, die Sie verstehen sollten:

- {{HTMLElement('main')}} ist für Inhalte, die _einzigartig für diese Seite_ sind. Verwenden Sie `<main>` nur _einmal_ pro Seite und platzieren Sie es direkt innerhalb von {{HTMLElement('body')}}. Idealerweise sollte es nicht in andere Elemente eingebettet sein.
- {{HTMLElement('article')}} umschließt einen Block verwandter Inhalte, der auch ohne den Rest der Seite Sinn ergibt (z. B. ein einzelner Blog-Post).
- {{HTMLElement('section')}} ist ähnlich wie `<article>`, dient jedoch mehr dazu, einen Einzelteil der Seite zu gruppieren, der ein einzelnes Funktionsstück bildet (z.B. eine Mini-Karte oder eine Gruppe von Artikelüberschriften und Zusammenfassungen) oder ein Thema. Es wird als Best Practice angesehen, jede Abschnitt mit einer [Überschrift](/de/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals) zu beginnen; beachten Sie auch, dass Sie `<article>`s in verschiedene `<section>`s aufteilen können oder `<section>`s in verschiedene `<article>`s, je nach Kontext.
- {{HTMLElement('aside')}} enthält Inhalte, die nicht direkt mit dem Hauptinhalt zusammenhängen, aber indirekt damit verbundene zusätzliche Informationen bereitstellen können (Glossar-Einträge, Autorenbiographie, verwandte Links usw.).
- {{HTMLElement('header')}} repräsentiert eine Gruppe von einleitenden Inhalten. Wenn es ein Kind von {{HTMLElement('body')}} ist, definiert es die globale Kopfzeile einer Webseite, aber wenn es ein Kind von {{HTMLElement('article')}} oder {{HTMLElement('section')}} ist, definiert es eine spezifische Kopfzeile für diesen Abschnitt (verwechseln Sie dies nicht mit [Titeln und Überschriften](/de/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#adding_a_title)).
- {{HTMLElement('nav')}} enthält die Hauptnavigationsfunktionalität für die Seite. Sekundäre Links etc. würden nicht in die Navigation gehören.
- {{HTMLElement('footer')}} repräsentiert eine Gruppe von Endinhalten für eine Seite.

Jedes der genannten Elemente kann angeklickt werden, um den entsprechenden Artikel im Abschnitt "HTML-Elementreferenz" zu lesen, der mehr Details zu jedem bietet.

### Nicht-semantische Umhüllungen

Manchmal stoßen Sie auf eine Situation, in der Sie kein ideales semantisches Element finden, um einige Elemente zusammen zu gruppieren oder Inhalte zu umschließen. Manchmal möchten Sie vielleicht lediglich eine Reihe von Elementen zusammenfügen, um sie alle als eine einzige Einheit mit etwas {{Glossary("CSS", "CSS")}} oder {{Glossary("JavaScript", "JavaScript")}} zu bearbeiten. Für solche Fälle stellt HTML die {{HTMLElement("div")}} und {{HTMLElement("span")}}-Elemente zur Verfügung. Sie sollten diese vorzugsweise mit einem passenden [`class`](/de/docs/Web/HTML/Global_attributes/class)-Attribut verwenden, um ihnen eine Art von Bezeichnung zu geben, so dass sie leicht anvisiert werden können.

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

In diesem Fall soll die Anmerkung des Editors lediglich zusätzliche Hinweise für den Spielleiter geben; sie soll keine zusätzliche semantische Bedeutung haben. Für sehende Benutzer würde CSS vielleicht verwendet, um die Notiz etwas vom Haupttext zu distanzieren.

{{HTMLElement("div")}} ist ein Block-nicht-semantisches Element, das Sie nur verwenden sollten, wenn Ihnen kein besseres semantisches Block-Element einfällt, um es zu verwenden, oder keine spezifische Bedeutung hinzufügen möchten. Stellen Sie sich zum Beispiel ein Einkaufswagen-Widget vor, das Sie jederzeit während eines Besuchs auf einer E-Commerce-Seite aufrufen können:

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

Dies ist eigentlich kein `<aside>`, da es nicht unbedingt mit dem Hauptinhalt der Seite zusammenhängt (Sie möchten, dass es von überall aus angezeigt werden kann). Es lohnt sich auch nicht besonders, ein `<section>` zu verwenden, da es nicht Teil des Hauptinhalts der Seite ist. Daher ist ein `<div>` in diesem Fall in Ordnung. Wir haben eine Überschrift als Orientierungshilfe für Screenreader-Benutzer eingefügt, um sie zu finden.

> [!WARNING]
> Divs sind so praktisch, dass es leicht ist, sie zu viel zu verwenden. Da sie keinen semantischen Wert haben, fügen sie Ihrem HTML-Code nur Ballast hinzu. Achten Sie darauf, sie nur dann zu verwenden, wenn es keine bessere semantische Lösung gibt, und versuchen Sie, ihre Verwendung auf ein Minimum zu reduzieren, da Sie sonst Schwierigkeiten beim Aktualisieren und Pflegen Ihrer Dokumente haben werden.

### Zeilenumbrüche und horizontale Regeln

Zwei Elemente, die Sie gelegentlich verwenden und kennen möchten, sind {{htmlelement("br")}} und {{htmlelement("hr")}}.

#### \<br>: das Zeilenumbruch-Element

`<br>` erzeugt einen Zeilenumbruch in einem Absatz; es ist die einzige Möglichkeit, eine rigide Struktur in einer Situation zu erzwingen, in der Sie eine Reihe von festen kurzen Zeilen möchten, wie in einer Postadresse oder einem Gedicht. Zum Beispiel:

```html
<p>
  There once was a man named O'Dell<br />
  Who loved to write HTML<br />
  But his structure was bad, his semantics were sad<br />
  and his markup didn't read very well.
</p>
```

Ohne die `<br>`-Elemente würde der Absatz einfach in einer langen Zeile dargestellt (wie wir zu Beginn des Kurses sagten, [ignoriert HTML die meisten Leerzeichen](/de/docs/Learn/HTML/Introduction_to_HTML/Getting_started#whitespace_in_html)); mit `<br>`-Elementen im Code wird das Markup wie folgt dargestellt:

{{EmbedLiveSample('br_the_line_break_element', '100%', 150)}}

#### \<hr>: das thematische Trennelement

`<hr>`-Elemente erzeugen eine horizontale Linie im Dokument, die eine thematische Änderung im Text kennzeichnet (wie eine Änderungen im Thema oder der Szene). Visuell sieht es einfach wie eine horizontale Linie aus. Ein Beispiel:

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

Würde so dargestellt:

{{EmbedLiveSample('hr_the_thematic_break_element', '100%', '185px')}}

## Planung einer einfachen Website

Sobald Sie die Struktur einer einfachen Webseite geplant haben, ist der nächste logische Schritt, zu überlegen, welchen Inhalt Sie auf einer ganzen Website haben möchten, welche Seiten Sie benötigen und wie sie angeordnet und miteinander verbunden sein sollten, um die bestmögliche Benutzererfahrung zu bieten. Dies wird als {{Glossary("Information_architecture", "Informationsarchitektur")}} bezeichnet. Bei einer großen, komplexen Website kann in diesen Prozess viel Planung einfließen, aber für eine einfache Website mit einigen wenigen Seiten kann dies recht einfach und lustig sein!

1. Bedenken Sie, dass Sie einige Elemente haben, die auf den meisten (wenn nicht allen) Seiten gemeinsam sind – wie das Navigationsmenü und den Footer-Inhalt. Wenn Ihre Seite beispielsweise für ein Unternehmen gedacht ist, ist es eine gute Idee, Ihre Kontaktinformationen im Footer auf jeder Seite verfügbar zu haben. Notieren Sie, was Sie auf jeder Seite gemeinsam haben möchten.![die gemeinsamen Merkmale der Reise-Website, die auf jeder Seite stehen sollen: Titel und Logo, Kontakt, Urheberrecht, Geschäftsbedingungen, Sprachauswahl, Barrierefreiheitspolitik](common-features.png)
2. Zeichnen Sie als nächstes eine grobe Skizze, wie die Struktur jeder Seite aussehen könnte (sie könnte wie unsere einfache Website oben aussehen). Notieren Sie, was jeder Block sein wird.![Ein einfaches Diagramm einer Beispielsitenstruktur, mit einem Header, Hauptinhaltsbereich, zwei optionalen Seitenleisten und Footer](site-structure.png)
3. Sammeln Sie nun alle anderen (nicht auf jeder Seite gemeinsame) Inhalte, die Sie auf Ihrer Webseite haben möchten - schreiben Sie eine große Liste auf.![Eine lange Liste von all den Funktionen, die wir auf unserer Reise-Website einfügen könnten, von der Suche über Sonderangebote bis zu landesspezifischen Informationen](feature-list.png)
4. Versuchen Sie als nächstes, all diese Inhaltsgegenstände in Gruppen zu sortieren, um Ihnen eine Vorstellung davon zu geben, welche Teile auf verschiedenen Seiten zusammenleben könnten. Dies ist sehr ähnlich einer Technik, die als {{Glossary("Card_sorting", "Karten-Sortierung")}} bezeichnet wird.![Die Elemente, die auf einer Urlaubs-Website erscheinen sollten, in fünf Kategorien sortiert: Suche, Sonderangebote, Länderspezifische Informationen, Suchergebnisse und Käufe](card-sorting.png)
5. Versuchen Sie nun, eine grobe Sitemap zu skizzieren – haben Sie eine Blase für jede Seite auf Ihrer Website und ziehen Sie Linien, um den typischen Workflow zwischen den Seiten zu zeigen. Die Startseite wird wahrscheinlich in der Mitte sein und mit den meisten, wenn nicht allen anderen verbunden sein; die meisten der Seiten auf einer kleinen Seite sollten über die Hauptnavigation erreichbar sein, obwohl es Ausnahmen gibt. Möglicherweise möchten Sie auch Notizen darüber einfügen, wie Dinge dargestellt werden könnten.![Eine Karte der Website, die die Startseite, Länderseite, Suchergebnisse, Angebote-Seite, Kasse und Kaufseite zeigt](site-map.png)

### Aktives Lernen: erstellen Sie Ihre eigene Sitemap

Versuchen Sie, die obige Übung für eine Website Ihrer eigenen Kreation durchzuführen. Wofür möchten Sie eine Website erstellen?

> [!NOTE]
> Speichern Sie Ihre Arbeit irgendwo; Sie könnten sie später noch brauchen.

## Zusammenfassung

An diesem Punkt sollten Sie eine bessere Vorstellung davon haben, wie man eine Webseite/Site strukturiert. Im nächsten Artikel dieses Moduls werden wir lernen, wie man [HTML debuggt](/de/docs/Learn/HTML/Introduction_to_HTML/Debugging_HTML).

{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Advanced_text_formatting", "Learn/HTML/Introduction_to_HTML/Debugging_HTML", "Learn/HTML/Introduction_to_HTML")}}
