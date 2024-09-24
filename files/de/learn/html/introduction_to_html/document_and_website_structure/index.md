---
title: Dokument- und Website-Struktur
slug: Learn/HTML/Introduction_to_HTML/Document_and_website_structure
l10n:
  sourceCommit: bd4edfc4dc2a3fd78841c0f9cd843cabf072a61e
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Advanced_text_formatting", "Learn/HTML/Introduction_to_HTML/Debugging_HTML", "Learn/HTML/Introduction_to_HTML")}}

Zusätzlich zur Definition einzelner Teile Ihrer Seite (wie "ein Absatz" oder "ein Bild") verfügt {{glossary("HTML")}} auch über eine Reihe von Blockelementen, die dazu dienen, Bereiche Ihrer Website zu definieren (wie "der Kopfbereich", "das Navigationsmenü", "die Hauptinhalts-Spalte"). Dieser Artikel behandelt das Planen einer grundlegenden Website-Struktur und das Schreiben des HTML-Codes, um diese Struktur darzustellen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML, wie sie in
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
          >Einstieg in HTML</a
        > behandelt werden. HTML-Textformatierung, wie in
        <a
          href="/de/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals"
          >HTML-Text-Grundlagen</a
        > behandelt. Funktionsweise von Hyperlinks, wie in
        <a
          href="/de/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks"
          >Erstellen von Hyperlinks</a
        > behandelt.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Erlernen, wie man das Dokument mit semantischen Tags strukturiert und wie man die Struktur einer einfachen Website entwickelt.
      </td>
    </tr>
  </tbody>
</table>

## Grundlegende Abschnitte eines Dokuments

Webseiten können ziemlich unterschiedlich aussehen, aber sie neigen dazu, ähnliche Standardkomponenten zu teilen, es sei denn, die Seite zeigt ein Vollbildvideo oder ein Spiel, ist Teil eines Kunstprojekts oder ist einfach schlecht strukturiert:

- Kopfbereich:
  - : Üblicherweise ein großer Streifen oben mit einer großen Überschrift, einem Logo und vielleicht einem Slogan. Dieser Teil bleibt meist von einer Webseite zur anderen gleich.
- Navigationsleiste:
  - : Links zu den Hauptabschnitten der Seite; in der Regel durch Menüschaltflächen, Links oder Tabs dargestellt. Wie der Kopfbereich bleibt auch dieser Inhalt meist von einer Webseite zur nächsten gleich — inkonsistente Navigation auf Ihrer Website führt nur zu verwirrten und frustrierten Benutzern. Viele Webdesigner betrachten die Navigationsleiste als Teil des Kopfbereichs und nicht als eigenständige Komponente, aber das ist keine Anforderung; tatsächlich argumentieren einige, dass die Trennung für die [Barrierefreiheit](/de/docs/Learn/Accessibility) besser ist, da Bildschirmleser die beiden Funktionen besser lesen können, wenn sie getrennt sind.
- Hauptinhalt:
  - : Ein großer Bereich in der Mitte, der den Großteil der einzigartigen Inhalte der jeweiligen Webseite enthält, zum Beispiel das Video, das Sie ansehen möchten, oder die Hauptgeschichte, die Sie lesen, oder die Karte, die Sie ansehen möchten, oder die Nachrichtenüberschriften usw. Dies ist der eine Teil der Website, der sich definitiv von Seite zu Seite unterscheiden wird!
- Seitenleiste:
  - : Einige periphere Informationen, Links, Zitate, Anzeigen usw. Diese sind normalerweise kontextbezogen zu dem, was im Hauptinhalt enthalten ist (zum Beispiel könnte auf einer Nachrichtenartikelseite die Seitenleiste die Biografie des Autors oder Links zu verwandten Artikeln enthalten), aber es gibt auch Fälle, in denen Sie wiederholende Elemente wie ein sekundäres Navigationssystem finden.
- Footer:
  - : Ein Streifen am unteren Rand der Seite, der im Allgemeinen Kleingedrucktes, Urheberrechtsvermerke oder Kontaktinformationen enthält. Dies ist ein Ort, um allgemeine Informationen zu platzieren (wie der Kopfbereich), aber normalerweise sind diese Informationen nicht kritisch oder sekundär zur Website selbst. Der Footer wird manchmal auch für {{Glossary("SEO")}}-Zwecke verwendet, indem Links zum schnellen Zugriff auf beliebte Inhalte bereitgestellt werden.

Eine "typische Website" könnte etwa so strukturiert sein:

![ein einfaches Website-Struktur-Beispiel mit Hauptüberschrift, Navigationsmenü, Hauptinhalt, Seitenleiste und Footer.](sample-website.png)

> [!NOTE]
> Das obige Bild veranschaulicht die Hauptabschnitte eines Dokuments, die Sie mit HTML definieren können. Das _Erscheinungsbild_ der hier gezeigten Seite - einschließlich Layout, Farben und Schriftarten - wird jedoch durch die Anwendung von [CSS](/de/docs/Learn/CSS) auf das HTML erreicht.
>
> In diesem Modul lehren wir kein CSS, aber sobald Sie ein Verständnis für die Grundlagen von HTML erworben haben, versuchen Sie, in unser Modul [Erste Schritte mit CSS](/de/docs/Learn/CSS/First_steps) einzutauchen, um zu lernen, wie Sie Ihre Seite gestalten können.

## HTML zur Strukturierung von Inhalten

Das oben gezeigte einfache Beispiel ist nicht hübsch, aber es eignet sich perfekt zur Veranschaulichung eines typischen Website-Layout-Beispiels. Einige Websites haben mehr Spalten, einige sind viel komplexer, aber Sie verstehen die Idee. Mit dem richtigen CSS könnten Sie ziemlich beliebige Elemente verwenden, um die verschiedenen Abschnitte zu umhüllen und es so aussehen zu lassen, wie Sie es wollten, aber wie zuvor besprochen, müssen wir die Semantik respektieren und **das richtige Element für die richtige Arbeit verwenden**.

Dies liegt daran, dass visuelle Darstellungen nicht die ganze Geschichte erzählen. Wir verwenden Farbe und Schriftgröße, um sehende Benutzer auf die nützlichsten Teile des Inhalts, wie das Navigationsmenü und verwandte Links, aufmerksam zu machen, aber was ist mit sehbehinderten Menschen, die mit Konzepten wie "rosa" und "große Schrift" beispielsweise möglicherweise nicht viel anfangen können?

> **Hinweis:** [Etwa 8 % der Männer und 0,5 % der Frauen](https://www.color-blindness.com/) sind farbenblind; oder, anders ausgedrückt, etwa 1 von 12 Männern und 1 von 200 Frauen. Blinde und sehbehinderte Menschen repräsentieren etwa 4-5 % der Weltbevölkerung (im Jahr 2015 gab es [940 Millionen Menschen mit einem gewissen Grad an Sehbehinderung](https://en.wikipedia.org/wiki/Visual_impairment), während die Gesamtbevölkerung [etwa 7,5 Milliarden](https://en.wikipedia.org/wiki/World_human_population#/media/File:World_population_history.svg) betrug).

In Ihrem HTML-Code können Sie Abschnitte von Inhalten basierend auf deren _Funktionalität_ markieren — Sie können Elemente verwenden, die die oben beschriebenen Inhaltsabschnitte eindeutig darstellen, und assistive Technologien wie Bildschirmleser können diese Elemente erkennen und bei Aufgaben wie "finde die Hauptnavigation" oder "finde den Hauptinhalt" helfen. Wie wir früher im Kurs erwähnt haben, gibt es eine Anzahl von [Folgen, wenn Sie nicht die richtige Elementstruktur und Semantik für die richtige Arbeit verwenden](/de/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals#why_do_we_need_structure).

Um eine solche semantische Markierung umzusetzen, bietet HTML spezielle Tags, die Sie verwenden können, um solche Abschnitte darzustellen, zum Beispiel:

- **Header:** {{htmlelement("header")}}.
- **Navigationsleiste:** {{htmlelement("nav")}}.
- **Hauptinhalt:** {{htmlelement("main")}}, mit verschiedenen Inhaltsteilabschnitten, die durch {{htmlelement("article")}}, {{htmlelement("section")}}, und {{htmlelement("div")}}-Elemente dargestellt werden.
- **Seitenleiste:** {{htmlelement("aside")}}; oft innerhalb von {{htmlelement("main")}} platziert.
- **Footer:** {{htmlelement("footer")}}.

### Aktives Lernen: den Code für unser Beispiel erkunden

Unser oben gesehenes Beispiel wird durch den folgenden Code dargestellt (Sie können das Beispiel auch [in unserem GitHub-Repository finden](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/document_and_website_structure/index.html)). Wir möchten, dass Sie sich das obige Beispiel ansehen und dann über die untenstehende Liste schauen, um zu sehen, welche Teile welchen Abschnitt des Visuellen ausmachen.

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
    <!-- Hier ist unser Haupt-Kopfbereich, der auf allen Seiten unserer Website verwendet wird -->

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

      <!-- Ein Suchformular ist eine weitere übliche nicht-lineare Möglichkeit, durch eine Website zu navigieren. -->

      <form>
        <input type="search" name="q" placeholder="Search query" />
        <input type="submit" value="Go!" />
      </form>
    </nav>

    <!-- Hier ist der Hauptinhalt unserer Seite -->
    <main>
      <!-- Er enthält einen Artikel -->
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

      <!-- der Seiteninhalt kann auch innerhalb des Hauptinhalts verschachtelt werden -->
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

    <!-- Und hier ist unser Haupt-Footer, der auf allen Seiten unserer Website verwendet wird -->

    <footer>
      <p>©Copyright 2050 by nobody. All rights reversed.</p>
    </footer>
  </body>
</html>
```

Nehmen Sie sich etwas Zeit, um den Code durchzugehen und zu verstehen — die Kommentare im Code sollten Ihnen auch helfen, ihn zu verstehen. Wir bitten Sie in diesem Artikel nicht um viel mehr, denn der Schlüssel zum Verständnis des Dokumentenlayouts besteht darin, eine solide HTML-Struktur zu schreiben und sie dann mit CSS zu gestalten. Wir werden damit warten, bis Sie beginnen, das CSS-Layout als Teil des CSS-Themas zu studieren.

## HTML-Layout-Elemente im Detail

Es ist gut, die Gesamtbedeutung aller HTML-Abteilungselemente im Detail zu verstehen — daran arbeiten Sie schrittweise, während Sie mehr Erfahrung mit der Webentwicklung sammeln. Sie finden viele Details, indem Sie unser [HTML-Element-Referenz](/de/docs/Web/HTML/Element) lesen. Für den Moment sind dies die Hauptdefinitionen, die Sie verstehen sollten:

- {{HTMLElement('main')}} ist für Inhalte, die _einzigartig für diese Seite_ sind. Verwenden Sie `<main>` nur _einmal_ pro Seite und platzieren Sie es direkt innerhalb von {{HTMLElement('body')}}. Idealerweise sollte dies nicht innerhalb anderer Elemente verschachtelt werden.
- {{HTMLElement('article')}} schließt einen Block von verwandten Inhalten ein, der auch ohne den Rest der Seite Sinn macht (z.B. ein einzelner Blog-Post).
- {{HTMLElement('section')}} ist ähnlich wie `<article>`, es dient jedoch mehr dazu, einen einzigen Teil der Seite zu gruppieren, der eine einzige Funktionalität (z.B. eine Mini-Karte oder eine Reihe von Artikelüberschriften und -zusammenfassungen) oder ein Thema darstellt. Es ist als best practice anerkannt, jede Sektion mit einer [Überschrift](/de/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals) zu beginnen; beachten Sie auch, dass Sie `<article>`s in verschiedene `<section>`s oder `<section>`s in verschiedene `<article>`s unterteilen können, abhängig vom Kontext.
- {{HTMLElement('aside')}} enthält Inhalte, die nicht direkt zum Hauptinhalt gehören, aber zusätzliche Informationen bereitstellen können, die indirekt damit zusammenhängen (Glossareinträge, Autorenbiografie, verwandte Links usw.).
- {{HTMLElement('header')}} repräsentiert eine Gruppe von einleitenden Inhalten. Wenn es ein Kind von {{HTMLElement('body')}} ist, definiert es den globalen Kopfbereich einer Webseite, wenn es jedoch ein Kind von {{HTMLElement('article')}} oder {{HTMLElement('section')}} ist, definiert es einen spezifischen Kopfbereich für diesen Abschnitt (verwechseln Sie dies nicht mit [Titeln und Überschriften](/de/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML#adding_a_title)).
- {{HTMLElement('nav')}} enthält die Hauptnavigationsfunktionalität für die Seite. Sekundäre Links usw. würden nicht in die Navigation eingehen.
- {{HTMLElement('footer')}} repräsentiert eine Gruppe von Endinhalten einer Seite.

Jedes der vorgenannten Elemente kann angeklickt werden, um den entsprechenden Artikel im Abschnitt "HTML-Elementreferenz" zu lesen, das mehr Details zu jedem Element liefert.

### Nicht-semantische Wrapper

Manchmal stoßen Sie auf Situationen, in denen Sie kein ideales semantisches Element finden können, um einige Elemente zusammen zu gruppieren oder Inhalte zu umhüllen. Manchmal möchten Sie vielleicht nur eine Reihe von Elementen gruppieren, um sie als eine Einheit mit etwas {{glossary("CSS")}} oder {{glossary("JavaScript")}} zu beeinflussen. Für solche Fälle bietet HTML die Elemente {{HTMLElement("div")}} und {{HTMLElement("span")}}. Sie sollten diese bevorzugt mit einem geeigneten [`class`](/de/docs/Web/HTML/Global_attributes#class) Attribut verwenden, um ihnen eine Art Kennzeichnung zu geben, damit sie leicht anvisiert werden können.

{{HTMLElement("span")}} ist ein Inline-Element ohne Semantik, das Sie nur verwenden sollten, wenn Sie sich kein besseres semantisches Textelement ausdenken können, um Ihren Inhalt zu umwickeln oder keine spezifische Bedeutung hinzufügen möchten. Zum Beispiel:

```html
<p>
  The King walked drunkenly back to his room at 01:00, the beer doing nothing to
  aid him as he staggered through the door.
  <span class="editor-note">
    [Editor's note: At this point in the play, the lights should be down low].
  </span>
</p>
```

In diesem Fall soll die Redaktionsnotiz lediglich zusätzliche Anweisungen für den Spielleiter bereitstellen; sie soll keine zusätzliche semantische Bedeutung haben. Für sehende Benutzer würde CSS möglicherweise verwendet, um die Notiz ein wenig vom Haupttext abzusetzen.

{{HTMLElement("div")}} ist ein blockartiges Element ohne Semantik, das Sie nur verwenden sollten, wenn Sie sich kein besseres semantisches Blockelement ausdenken können oder keine spezifische Bedeutung hinzufügen möchten. Nehmen wir zum Beispiel ein Einkaufswagen-Widget, das Sie zu jedem Zeitpunkt während Ihrer Zeit auf einer E-Commerce-Seite aufrufen können:

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

Das ist wirklich kein `<aside>`, da es nicht unbedingt mit dem Hauptinhalt der Seite zusammenhängt (Sie möchten es von überall aus sichtbar haben). Es rechtfertigt auch nicht unbedingt die Verwendung von `<section>`, da es nicht Teil des Hauptinhalts der Seite ist. Also ist in diesem Fall ein `<div>` in Ordnung. Wir haben eine Überschrift als Hinweis eingefügt, um Bildschirmlesernutzern beim Auffinden zu helfen.

> [!WARNING]
> Divs sind so bequem zu verwenden, dass es leicht ist, sie zu viel zu verwenden. Da sie keinen semantischen Wert tragen, überladen sie nur Ihren HTML-Code. Nehmen Sie Rücksicht darauf, sie nur dann zu verwenden, wenn es keine bessere semantische Lösung gibt, und versuchen Sie, ihre Nutzung auf ein Minimum zu reduzieren, ansonsten werden Sie Schwierigkeiten haben, Ihre Dokumente zu aktualisieren und zu warten.

### Zeilenumbrüche und horizontale Linien

Zwei Elemente, die Sie gelegentlich verwenden möchten und über die Sie Bescheid wissen sollten, sind {{htmlelement("br")}} und {{htmlelement("hr")}}.

#### \<br>: das Zeilenumbruch-Element

`<br>` erzeugt einen Zeilenumbruch in einem Absatz; es ist der einzige Weg, um eine starre Struktur in einer Situation zu erzwingen, in der Sie eine Serie von festen kurzen Zeilen wollen, wie zum Beispiel in einer Postanschrift oder einem Gedicht. Zum Beispiel:

```html
<p>
  There once was a man named O'Dell<br />
  Who loved to write HTML<br />
  But his structure was bad, his semantics waren sad<br />
  and his markup didn't read very well.
</p>
```

Ohne die `<br>`-Elemente würde der Absatz einfach in einer langen Zeile angezeigt werden (wie wir früher im Kurs gesagt haben, [HTML ignoriert die meisten Leerzeichen](/de/docs/Learn/HTML/Introduction_to_HTML/Getting_started#whitespace_in_html)); mit `<br>`-Elementen im Code wird das Markup so gerendert:

{{EmbedLiveSample('br_the_line_break_element', '100%', 150)}}

#### \<hr>: das thematische Trenner-Element

`<hr>`-Elemente erzeugen eine horizontale Linie im Dokument, die einen thematischen Wechsel im Text anzeigt (wie einen Wechsel im Thema oder Szene). Visuell sieht es einfach wie eine horizontale Linie aus. Als Beispiel:

```html
<p>
  Ron wurde in eine Ecke von den marodierenden Unterweltschaffen gedrängt. Verängstigt, aber entschlossen, seine Freunde zu beschützen, hob er seinen Zauberstab und bereitete sich auf den Kampf vor, in der Hoffnung, dass sein Notruf angekommen war.
</p>
<hr />
<p>
  Inzwischen saß Harry zu Hause, starrte auf seine Tantiemenabrechnung und überlegte, wann die nächste Spin-off-Serie herauskommen würde, als plötzlich ein verzauberter Notrufbrief durch sein Fenster flog und ihm in den Schoß fiel. Er las ihn müde und seufzte; "Dann mal wieder an die Arbeit", dachte er.
</p>
```

Würde so gerendert werden:

{{EmbedLiveSample('hr_the_thematic_break_element', '100%', '185px')}}

## Planung einer einfachen Website

Sobald Sie die Struktur einer einfachen Webseite geplant haben, ist der nächste logische Schritt zu versuchen, herauszufinden, welchen Inhalt Sie auf einer ganzen Website platzieren möchten, welche Seiten Sie benötigen und wie sie organisiert und miteinander verbunden werden sollten, um die bestmögliche Benutzererfahrung zu bieten. Dies wird als {{glossary("Informationsarchitektur")}} bezeichnet. Bei einer großen, komplexen Website kann in diesen Prozess viel Planung einfließen, aber für eine einfache Website mit wenigen Seiten kann dies ziemlich einfach und unterhaltsam sein!

1. Bedenken Sie, dass Sie einige Elemente haben, die für die meisten (wenn nicht sogar alle) Seiten gemeinsam sind - wie das Navigationsmenü und die Footer-Inhalte. Wenn Ihre Website z.B. für ein Unternehmen ist, ist es eine gute Idee, Ihre Kontaktinformationen im Footer auf jeder Seite verfügbar zu machen. Notieren Sie sich, was Sie auf jeder Seite gemeinsam haben möchten.![die gemeinsamen Eigenschaften der Reise-Website, die auf jeder Seite sein soll: Titel und Logo, Kontakt, Urheberrecht, Geschäftsbedingungen, Sprachauswahl, Barrierefreiheitspolitik](common-features.png)
2. Zeichnen Sie als Nächstes ein grobes Diagramm, wie Sie die Struktur jeder Seite gestalten möchten (es könnte wie unsere einfache Website oben aussehen). Notieren Sie, was jeder Block sein wird.![Ein einfaches Diagramm einer Beispiel-Website-Struktur, mit einem Kopfbereich, Hauptinhalt, zwei optionalen Seitenleisten und Footer](site-structure.png)
3. Brainstormen Sie nun all die anderen (nicht auf jeder Seite gemeinsamen) Inhalte, die Sie auf Ihrer Website haben möchten - schreiben Sie eine große Liste auf.![Eine lange Liste aller Funktionen, die wir auf unserer Reise-Website hinzufügen könnten, von Suchen über Sonderangebote bis hin zu länderspezifischen Infos](feature-list.png)
4. Versuchen Sie nun, all diese Inhaltselemente in Gruppen zu sortieren, um eine Vorstellung davon zu bekommen, welche Teile zusammen auf verschiedenen Seiten leben könnten. Dies ist sehr ähnlich wie eine Technik namens {{glossary("Kartensortierung")}}.![Die Elemente, die auf einer Urlaub-Website erscheinen sollten, sortiert in 5 Kategorien: Suche, Sonderangebote, Länderspezifische Infos, Suchergebnisse und Kaufmöglichkeiten](card-sorting.png)
5. Skizzieren Sie nun einen groben Sitemap - haben Sie eine Blase für jede Seite auf Ihrer Website, und zeichnen Sie Linien, um den typischen Workflow zwischen den Seiten zu zeigen. Die Startseite wird wahrscheinlich in der Mitte sein und wird wahrscheinlich mit den meisten, wenn nicht allen anderen verbunden sein; die meisten der Seiten in einer kleinen Website sollten über die Hauptnavigation erreichbar sein, obwohl es Ausnahmen gibt. Sie möchten möglicherweise auch Notizen darüber machen, wie Dinge präsentiert werden könnten.![Ein Diagramm der Website, das die Startseite, Länderseite, Suchergebnisse, Sonderseite, Kasse und Kaufseite zeigt](site-map.png)

### Aktives Lernen: Erstellen Sie Ihr eigenes Sitemap

Versuchen Sie, die obige Übung für eine Website Ihrer eigenen Kreation durchzuführen. Worüber würden Sie gerne eine Website erstellen?

> [!NOTE]
> Speichern Sie Ihre Arbeit irgendwo; Sie könnten sie später noch benötigen.

## Zusammenfassung

An diesem Punkt sollten Sie eine bessere Vorstellung davon haben, wie man eine Webseite/Website strukturiert. Im nächsten Artikel dieses Moduls lernen wir, wie man [HTML debuggt](/de/docs/Learn/HTML/Introduction_to_HTML/Debugging_HTML).

{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Advanced_text_formatting", "Learn/HTML/Introduction_to_HTML/Debugging_HTML", "Learn/HTML/Introduction_to_HTML")}}
