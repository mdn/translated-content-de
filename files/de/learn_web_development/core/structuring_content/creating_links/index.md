---
title: Erstellen von Links
slug: Learn_web_development/Core/Structuring_content/Creating_links
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Advanced_text_features", "Learn_web_development/Core/Structuring_content/Marking_up_a_letter", "Learn_web_development/Core/Structuring_content")}}

Links (auch bekannt als Hyperlinks) sind wirklich wichtig – sie sind es, die das Web zu _einem Netz_ machen.
Dieser Artikel zeigt die Syntax, die benötigt wird, um einen Link zu erstellen, und diskutiert bewährte Methoden für Links.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende HTML-Kenntnisse, wie im
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        > behandelt. Textsemantik auf Ebene wie <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
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
          <li>Verstehen, warum Links die grundlegende Funktion des Internets sind. Es gibt kein Web ohne Links.</li>
          <li>Das <code>href</code>-Attribut.</li>
          <li>Absolute und relative Pfade und wann man sie benutzt.</li>
          <li>Pfadsyntax im Detail – Schrägstriche, Einzelpunkt und Doppelpunkt.</li>
          <li>Link-Zustände und warum sie wichtig sind – <code>:hover</code>, <code>:focus</code>, <code>:visited</code> und <code>:active</code>.</li>
          <li>Inline- und Block-Level-Links.</li>
          <li>Verstehen der Vorteile des Schreibens von gutem Linktext, wie z.B. bessere Zugänglichkeit für Benutzer von Screenreadern und potenziell positive SEO-Effekte.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein Hyperlink?

Hyperlinks sind eine der spannendsten Innovationen, die das Web zu bieten hat.
Sie sind seit Beginn des Web eine Funktion und machen das Web zu _einem Netz._
Hyperlinks ermöglichen es uns, Dokumente mit anderen Dokumenten oder Ressourcen zu verlinken, auf spezifische Teile von Dokumenten zu verlinken oder Apps unter einer Webadresse verfügbar zu machen.
Fast jeder Webinhalt kann in einen Link umgewandelt werden, sodass bei einem Klick oder einer anderen Aktivierung der Webbrowser zu einer anderen Webadresse ({{Glossary("URL", "URL")}}) wechselt.

> [!NOTE]
> Eine URL kann auf HTML-Dateien, Textdateien, Bilder, Textdokumente, Video- und Audiodateien oder alles andere, was im Web lebt, verweisen.
> Wenn der Webbrowser nicht weiß, wie er die Datei anzeigen oder handhaben soll, fragt er Sie, ob Sie die Datei öffnen möchten (in diesem Fall wird das Öffnen oder Handhaben der Datei an eine geeignete native App auf dem Gerät übergeben) oder die Datei herunterladen möchten (in diesem Fall können Sie später versuchen, damit umzugehen).

Zum Beispiel enthält die Homepage der BBC viele Links, die nicht nur auf mehrere Nachrichtenartikel, sondern auch auf verschiedene Bereiche der Website (Navigationsfunktionalität), Anmelde-/Registrierungsseiten (Benutzerwerkzeuge) und mehr verweisen.

![Vorderseite von bbc.co.uk, zeigt viele Nachrichtenartikel und Navigationsmenüfunktionen](updated-bbc-website.png)

## Anatomie eines Links

Ein grundlegender Link wird erstellt, indem der Text oder andere Inhalte innerhalb eines {{htmlelement("a")}}-Elements umwickelt und das [`href`](/de/docs/Web/HTML/Element/a#href)-Attribut verwendet wird, auch bekannt als **Hypertext-Referenz** oder **Ziel**, das die Webadresse enthält.

```html
<p>
  I'm creating a link to
  <a href="https://www.mozilla.org/en-US/">the Mozilla homepage</a>.
</p>
```

Dies ergibt das folgende Ergebnis:

Ich erstelle einen Link zur [Mozilla-Homepage](https://www.mozilla.org/en-US/).

### Block-Level-Links

Wie bereits erwähnt, kann fast jeder Inhalt in einen Link umgewandelt werden, sogar {{Glossary("Block/CSS", "Block-Level-Elemente")}}.
Wenn Sie ein Überschriftselement in einen Link verwandeln möchten, umwickeln Sie es mit einem Anker (`<a>`) Element, wie im folgenden Code-Snippet gezeigt wird:

```html
<a href="https://developer.mozilla.org/en-US/">
  <h1>MDN Web Docs</h1>
</a>
<p>
  Documenting web technologies, including CSS, HTML, and JavaScript, since 2005.
</p>
```

Dies verwandelt die Überschrift in einen Link:
{{EmbedLiveSample('Block level links', '100%', 150)}}

### Bild-Links

Wenn Sie ein Bild in einen Link umwandeln möchten, verwenden Sie das {{htmlelement("a")}}-Element, um die Bilddatei zu umwickeln, die mit dem {{htmlelement("img")}}-Element referenziert wird. Das folgende Beispiel verwendet einen relativen Pfad, um eine lokal gespeicherte SVG-Bilddatei zu referenzieren.

```css hidden
img {
  height: 100px;
  width: 150px;
  border: 1px solid gray;
}
```

```html
<a href="https://developer.mozilla.org/en-US/">
  <img src="mdn_logo.svg" alt="MDN Web Docs" />
</a>
```

Dies macht das MDN-Logo zu einem Link:
{{EmbedLiveSample('Image links', '100%', 150)}}

> [!NOTE]
> Sie erfahren mehr über die Verwendung von Bildern im Web in einem zukünftigen Artikel.

### Hinzufügen unterstützender Informationen mit dem Titelattribut

Ein weiteres Attribut, das Sie möglicherweise zu Ihren Links hinzufügen möchten, ist `title`.
Der Titel enthält zusätzliche Informationen über den Link, wie z.B. welche Art von Informationen die Seite enthält oder Dinge, die man auf der Website beachten sollte.

```html-nolint
<p>
  I'm creating a link to
  <a
    href="https://www.mozilla.org/en-US/"
    title="The best place to find more information about Mozilla's
          mission and how to contribute">
    the Mozilla homepage</a>.
</p>
```

Dies ergibt das folgende Ergebnis und wenn Sie mit der Maus über den Link fahren, wird der Titel als Tooltip angezeigt:

{{EmbedLiveSample('Adding supporting information with the title attribute', '100%', 150)}}

> [!NOTE]
> Ein Linktitel wird nur beim Überfahren mit der Maus angezeigt, was bedeutet, dass Menschen, die auf Tastatursteuerung oder Touchscreens angewiesen sind, Schwierigkeiten haben, auf Titelinformationen zuzugreifen.
> Wenn die Informationen eines Titels wirklich wichtig für die Benutzerfreundlichkeit der Seite sind, sollten Sie sie auf eine Art und Weise präsentieren, die für alle Benutzer zugänglich ist, zum Beispiel indem Sie sie in den regulären Text einfügen.

### Aktives Lernen: Erstellen Sie Ihren eigenen Beispiel-Link

Erstellen Sie ein HTML-Dokument mit Ihrem lokalen Code-Editor und unserer [Einführungsvorlage](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html).

- Fügen Sie im HTML-Body ein oder mehrere Absätze oder andere Arten von Inhalten hinzu, die Sie bereits kennen.
- Ändern Sie einige Inhalte in Links.
- Fügen Sie Titelattribute ein.

## Ein schneller Überblick über URLs und Pfade

Um Linkziele vollständig zu verstehen, müssen Sie URLs und Dateipfade verstehen. Dieser Abschnitt gibt Ihnen die Informationen, die Sie benötigen, um dies zu erreichen.

Eine URL oder Uniform Resource Locator ist eine Textzeichenfolge, die definiert, wo sich etwas im Web befindet. Zum Beispiel befindet sich Mozillas englische Homepage unter `https://www.mozilla.org/en-US/`.

URLs verwenden Pfade, um Dateien zu finden. Pfade geben an, wo sich die Datei, an der Sie interessiert sind, im Dateisystem befindet. Sehen wir uns ein Beispiel für eine Verzeichnisstruktur an, siehe die `creating-hyperlinks` Verzeichnisstruktur unten:

![Eine einfache Verzeichnisstruktur. Das übergeordnete Verzeichnis heißt creating-hyperlinks und enthält zwei Dateien namens index.html und contacts.html sowie zwei Verzeichnisse namens projects und pdfs, die jeweils eine index.html-Datei und eine project-brief.pdf-Datei enthalten](simple-directory.png)

Der **Root** dieser Verzeichnisstruktur wird `creating-hyperlinks` genannt. Wenn Sie lokal mit einer Website arbeiten, haben Sie ein Verzeichnis, das die gesamte Seite enthält. Innerhalb des **Root** haben wir eine `index.html`-Datei und eine `contacts.html`. In einer echten Website wäre `index.html` unsere Startseite oder Landing Page (eine Webseite, die als Einstiegspunkt für eine Website oder einen bestimmten Abschnitt einer Website dient).

Es gibt auch zwei Verzeichnisse in unserem Root – `pdfs` und `projects`. Diese enthalten jeweils eine einzige Datei – ein PDF (`project-brief.pdf`) und eine `index.html`-Datei. Beachten Sie, dass Sie zwei `index.html`-Dateien in einem Projekt haben können, solange sie sich an verschiedenen Speicherorten im Dateisystem befinden. Die zweite `index.html` wäre vielleicht die Haupt-Landingpage für projektbezogene Informationen.

Sehen wir uns einige Beispiele für Links zwischen einigen verschiedenen Dateien in dieser Verzeichnisstruktur an, um verschiedene Linktypen zu demonstrieren:

- **Gleiches Verzeichnis**: Wenn Sie einen Hyperlink innerhalb von `index.html` (der obersten `index.html`) einfügen möchten, der auf `contacts.html` verweist, geben Sie den Dateinamen an, auf den Sie verlinken möchten, da er sich im selben Verzeichnis wie die aktuelle Datei befindet. Die URL, die Sie benutzen würden, ist `contacts.html`:

  ```html
  <p>
    Want to contact a specific staff member? Find details on our
    <a href="contacts.html">contacts page</a>.
  </p>
  ```

- **Gehe in Unterverzeichnisse**: Wenn Sie einen Hyperlink innerhalb von `index.html` (der obersten `index.html`) einfügen möchten, der auf `projects/index.html` verweist, müssten Sie in das `projects` Verzeichnis gehen, bevor Sie die Datei angeben, auf die Sie verlinken möchten.
  Dies wird erreicht, indem Sie den Namen des Verzeichnisses angeben, dann ein Schrägstrich, dann den Namen der Datei. Die URL, die Sie benutzen würden, ist `projects/index.html`:

  ```html
  <p>Visit my <a href="projects/index.html">project homepage</a>.</p>
  ```

- **Gehe zurück in übergeordnete Verzeichnisse**: Wenn Sie einen Hyperlink innerhalb von `projects/index.html` einfügen möchten, der auf `pdfs/project-brief.pdf` verweist, müssten Sie eine Verzeichnisebene nach oben gehen, dann wieder in das `pdfs` Verzeichnis.
  Um ein Verzeichnis nach oben zu gehen, verwenden Sie zwei Punkte – `..` – so dass die URL, die Sie verwenden würden, `../pdfs/project-brief.pdf` lautet:

  ```html
  <p>A link to my <a href="../pdfs/project-brief.pdf">project brief</a>.</p>
  ```

> [!NOTE]
> Sie können mehrere Instanzen dieser Funktionen zu komplexen URLs kombinieren, falls erforderlich, zum Beispiel: `../../../complex/path/to/my/file.html`.

### Dokumentenfragmente

Es ist möglich, auf einen bestimmten Teil eines HTML-Dokuments zu verlinken, bekannt als ein **Dokumentenfragment**, anstatt nur an den Anfang des Dokuments zu verlinken.
Um dies zu tun, müssen Sie zuerst einem Element, auf das Sie verlinken möchten, ein [`id`](/de/docs/Web/HTML/Global_attributes/id) Attribut zuweisen.
Normalerweise macht es Sinn, auf eine spezifische Überschrift zu verlinken, sodass dies folgendermaßen aussehen würde:

```html
<h2 id="Mailing_address">Mailing address</h2>
```

Um dann auf diese spezifische `id` zu verlinken, würden Sie sie am Ende der URL hinzufügen, vorweg mit einem Hash-/Pound-Symbol (`#`), zum Beispiel:

```html
<p>
  Want to write us a letter? Use our
  <a href="contacts.html#Mailing_address">mailing address</a>.
</p>
```

Sie können sogar die Dokumentfragment-Referenz allein verwenden, um auf _einen anderen Teil des aktuellen Dokuments_ zu verlinken:

```html
<p>
  The <a href="#Mailing_address">company mailing address</a> can be found at the
  bottom of this page.
</p>
```

### Absolute vs. relative URLs

Zwei Begriffe, deren Sie im Internet begegnen werden, sind **absolute URL** und **relative URL:**

**Absolute URL**: Zeigt auf einen Ort, der durch seinen absoluten Ort im Internet definiert ist, einschließlich {{Glossary("protocol", "Protokoll")}} und {{Glossary("domain_name", "Domainname")}}.
Zum Beispiel, wenn eine `index.html` Seite in ein Verzeichnis namens `projects` hochgeladen wird, das innerhalb des **Root** eines Webservers sitzt, und die Domain der Website `https://www.example.com` ist, wäre die Seite unter `https://www.example.com/projects/index.html` verfügbar (oder sogar nur `https://www.example.com/projects/`, da die meisten Webserver einfach nach einer Landingpage wie `index.html` suchen, die geladen werden soll, wenn sie nicht in der URL angegeben ist).

Eine absolute URL zeigt immer auf dieselbe Stelle, egal wo sie verwendet wird.

**Relative URL**: Zeigt auf einen Ort, der _relativ_ zu der Datei ist, von der Sie verlinken, mehr wie das, was wir im vorherigen Abschnitt betrachtet haben.
Zum Beispiel, wenn wir von unserer Beispiel-Datei bei `https://www.example.com/projects/index.html` auf eine PDF-Datei im selben Verzeichnis verlinken möchten, wäre die URL nur der Dateiname — `project-brief.pdf` — keine zusätzlichen Informationen nötig. Wenn das PDF in einem Unterverzeichnis innerhalb `projects` namens `pdfs` verfügbar wäre, wäre der relative Link `pdfs/project-brief.pdf` (die äquivalente absolute URL wäre `https://www.example.com/projects/pdfs/project-brief.pdf`).

Eine relative URL zeigt auf unterschiedliche Orte, abhängig von der tatsächlichen Lage der Datei, auf die Sie sich beziehen – beispielsweise wenn wir unsere `index.html` Datei aus dem `projects` Verzeichnis heraus in den **Root** der Website (die oberste Ebene, nicht in einem Verzeichnis) verschieben, würde der `pdfs/project-brief.pdf` relative URL-Link darin jetzt auf eine Datei bei `https://www.example.com/pdfs/project-brief.pdf` zeigen, nicht auf eine Datei unter `https://www.example.com/projects/pdfs/project-brief.pdf`.

Natürlich ändert sich der Standort der `project-brief.pdf` Datei und des `pdfs` Ordners nicht plötzlich, nur weil Sie die `index.html` Datei verschoben haben – das würde dazu führen, dass Ihr Link auf die falsche Stelle zeigt, sodass er nicht funktioniert, wenn man darauf klickt. Sie müssen vorsichtig sein!

## Bewährte Methoden für Links

Es gibt einige bewährte Methoden, denen Sie beim Schreiben von Links folgen sollten. Lassen Sie uns diese jetzt ansehen.

### Verwenden Sie klare Link-Formulierungen

Es ist leicht, Links auf Ihrer Seite hinzuzufügen. Das ist nicht genug. Wir müssen unsere Links _zugänglich_ für alle Leser machen, unabhängig von ihrem aktuellen Kontext und welchen Tools sie bevorzugen. Zum Beispiel:

- Screenreader-Benutzer springen gerne von Link zu Link auf der Seite und lesen Links aus dem Kontext heraus.
- Suchmaschinen verwenden Linktexte, um Zieldateien zu indexieren, daher ist es eine gute Idee, Schlüsselwörter in Ihren Linktext aufzunehmen, um effektiv zu beschreiben, worauf verlinkt wird.
- Visuelle Leser überfliegen die Seite, anstatt jedes Wort zu lesen, und ihre Augen werden auf Seitenelemente, die herausragen, wie Links, gelenkt. Sie finden beschreibenden Linktext nützlich.

Sehen wir uns ein spezifisches Beispiel an:

**Guter** Linktext: [Firefox herunterladen](https://www.mozilla.org/en-US/firefox/new/?redirect_source=firefox-com)

```html example-good
<p><a href="https://www.mozilla.org/en-US/firefox/">Download Firefox</a></p>
```

**Schlechter** Linktext: [Klicken Sie hier](https://www.mozilla.org/en-US/firefox/) um Firefox herunterzuladen

```html example-bad
<p>
  <a href="https://www.mozilla.org/en-US/firefox/">Click here</a> to download
  Firefox
</p>
```

Weitere Tipps:

- Wiederholen Sie die URL nicht als Teil des Linktexts — URLs sehen hässlich aus und klingen noch hässlicher, wenn ein Screenreader sie Buchstabe für Buchstabe vorliest.
- Sagen Sie nicht "Link" oder "links zu" im Linktext – das ist nur Lärm. Screenreader sagen den Leuten, dass es einen Link gibt.
  Visuelle Benutzer werden auch wissen, dass es einen Link gibt, weil Links im Allgemeinen in einer anderen Farbe und unterstrichen gestylt sind (dieses Konvention sollte im Allgemeinen nicht gebrochen werden, da Benutzer daran gewöhnt sind).
- Halten Sie Ihren Linktext so kurz wie möglich — dies ist hilfreich, da Screenreader den gesamten Linktext interpretieren müssen.
- Minimieren Sie Fälle, in denen mehrere Kopien desselben Textes an verschiedenen Orten verlinkt werden.
  Dies kann für Screenreader-Benutzer Probleme verursachen, wenn es eine Liste von Links außerhalb des Kontexts gibt, die mit "klicken Sie hier", "klicken Sie hier", "klicken Sie hier" beschriftet sind.

### Verlinkung von nicht-HTML-Ressourcen – lassen Sie klare Wegweiser

Wenn Sie auf eine Ressource verlinken, die heruntergeladen (wie ein PDF oder Word-Dokument), gestreamt (wie Video oder Audio) werden soll, oder eine andere potenziell unerwartete Wirkung hat (ein Popup-Fenster öffnet), sollten Sie klare Formulierungen hinzufügen, um Verwirrung zu reduzieren.

Zum Beispiel:

- Wenn Sie in einer Verbindung mit niedriger Bandbreite sind, klicken Sie auf einen Link, und dann startet unerwartet ein mehr megabyte-großer Download.

Sehen wir uns einige Beispiele an, um zu sehen, welche Art von Text hier verwendet werden kann:

```html
<p>
  <a href="https://www.example.com/large-report.pdf">
    Download the sales report (PDF, 10MB)
  </a>
</p>

<p>
  <a href="https://www.example.com/video-stream/" target="_blank">
    Watch the video (stream opens in separate tab, HD quality)
  </a>
</p>
```

### Verwenden des Download-Attributs beim Verlinken auf einen Download

Wenn Sie auf eine Ressource verlinken, die heruntergeladen und nicht im Browser geöffnet werden soll, können Sie das `download`-Attribut verwenden, um einen Standard-Speicherdateinamen bereitzustellen. Hier ist ein Beispiel mit einem Download-Link zur neuesten Windows-Version von Firefox:

```html
<a
  href="https://download.mozilla.org/?product=firefox-latest-ssl&os=win64&lang=en-US"
  download="firefox-latest-64bit-installer.exe">
  Download Latest Firefox for Windows (64-bit) (English, US)
</a>
```

## Aktives Lernen: Erstellen eines Navigationsmenüs

Für diese Übung möchten wir, dass Sie einige Seiten mit einem Navigationsmenü verlinken, um eine mehrseitige Website zu erstellen. Dies ist eine der üblichen Methoden, mit denen eine Website erstellt wird – die gleiche Seitenstruktur wird auf jeder Seite verwendet, einschließlich desselben Navigationsmenüs, sodass es den Eindruck erweckt, dass Sie am gleichen Ort bleiben und unterschiedliche Inhalte aufgerufen werden.

Sie müssen lokale Kopien der folgenden vier Seiten erstellen, wobei sich alle im selben Verzeichnis befinden. Für eine vollständige Dateiliste sehen Sie das Verzeichnis [navigation-menu-start](https://github.com/mdn/learning-area/tree/main/html/introduction-to-html/navigation-menu-start):

- [index.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/index.html)
- [projects.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/projects.html)
- [pictures.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/pictures.html)
- [social.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/social.html)

Sie sollten:

1. Fügen Sie eine ungeordnete Liste an der angegebenen Stelle auf einer Seite hinzu, die die Namen der zu verlinkenden Seiten enthält.
   Ein Navigationsmenü ist in der Regel nur eine Liste von Links, daher ist dies semantisch in Ordnung.
2. Ändern Sie jeden Seitennamen in einen Link zu dieser Seite.
3. Kopieren Sie das Navigationsmenü auf jede Seite.
4. Entfernen Sie auf jeder Seite nur den Link zu dieser Seite selbst – es ist verwirrend und unnötig, dass eine Seite einen Link zu sich selbst enthält.
   Ausserdem dient das Fehlen eines Links als eine gute visuelle Erinnerung daran, auf welcher Seite Sie sich gerade befinden.

Das fertige Beispiel sollte ähnlich wie die folgende Seite aussehen:

![Ein Beispiel für ein einfaches HTML-Navigationsmenü, mit den Menüeinträgen Startseite, Bilder, Projekte und Social](navigation-example.png)

> [!NOTE]
> Wenn Sie stecken bleiben oder sich nicht sicher sind, ob Sie es richtig gemacht haben, können Sie das [navigation-menu-marked-up](https://github.com/mdn/learning-area/tree/main/html/introduction-to-html/navigation-menu-marked-up) Verzeichnis prüfen, um die richtige Antwort zu sehen.

## E-Mail-Links

Es ist möglich, Links oder Schaltflächen zu erstellen, die, wenn Sie sie klicken, eine neue ausgehende E-Mail-Nachricht öffnen, anstatt zu einer Ressource oder Seite zu verlinken.
Dies geschieht mit dem {{HTMLElement("a")}}-Element und dem `mailto:`-URL-Schema.

In seiner einfachsten und am häufigsten verwendeten Form gibt ein `mailto:`-Link die E-Mail-Adresse des vorgesehenen Empfängers an. Zum Beispiel:

```html
<a href="mailto:nowhere@mozilla.org">Send email to nowhere</a>
```

Dies ergibt einen Link, der so aussieht: [E-Mail an nirgendwo senden](mailto:nowhere@mozilla.org).

Tatsächlich ist die E-Mail-Adresse optional. Wenn Sie sie weglassen und Ihr [`href`](/de/docs/Web/HTML/Element/a#href) ist "mailto:", wird von der E-Mail-Anwendung des Benutzers ein neues ausgehendes E-Mail-Fenster geöffnet, ohne Zieladresse.
Dies ist oft nützlich als "Teilen"-Links, die Benutzer anklicken können, um eine E-Mail an eine von ihnen ausgewählte Adresse zu senden.

### Details angeben

Zusätzlich zur E-Mail-Adresse können Sie auch andere Informationen angeben. Tatsächlich können alle Standard-Mail-Headerfelder der `mailto`-URL hinzugefügt werden, die Sie angeben.
Die am häufigsten verwendeten davon sind "subject", "cc" und "body" (das ist kein echtes Header-Feld, ermöglicht Ihnen jedoch, eine kurze Inhaltsnachricht für die neue E-Mail anzugeben).
Jedes Feld und sein Wert wird als Abfragebegriff angegeben.

Hier ist ein Beispiel, das cc, bcc, Betreff und Körper enthält:

```html
<a
  href="mailto:nowhere@mozilla.org?cc=name2@rapidtables.com&bcc=name3@rapidtables.com&subject=The%20subject%20of%20the%20email&body=The%20body%20of%20the%20email">
  Send mail with cc, bcc, subject and body
</a>
```

> [!NOTE]
> Die Werte jedes Feldes müssen mit nicht druckbaren Zeichen (unsichtbaren Zeichen wie Tabulatoren, Wagenrückläufen und Seitenumbrüchen) und Leerzeichen {{Glossary("Percent-encoding", "prozentsignalisiert")}} URL-kodiert werden.
> Beachten Sie auch die Verwendung des Fragezeichens (`?`), um die Haupt-URL von den Feldwerten zu trennen, und die Ampersands (&), um jedes Feld in der `mailto:`-URL zu trennen.
> Dies ist die Standard-URL-Abfragenotation.
> Lesen Sie [Die GET-Methode](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data#the_get_method), um zu verstehen, wofür die URL-Abfragenotation häufiger verwendet wird.

Hier sind einige weitere Beispiel-`mailto`-URLs:

- <mailto:>
- <mailto:nowhere@mozilla.org>
- <mailto:nowhere@mozilla.org,nobody@mozilla.org>
- <mailto:nowhere@mozilla.org?cc=nobody@mozilla.org>
- <mailto:nowhere@mozilla.org?cc=nobody@mozilla.org&subject=This%20is%20the%20subject>

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen – siehe [Test your skills: Links](/de/docs/Learn_web_development/Core/Structuring_content/Test_your_skills:_Links).

## Zusammenfassung

Das war's vorerst mit Links! Sie werden später im Kurs zu Links zurückkehren, wenn Sie anfangen, diese zu stylen. Als nächstes im HTML werden Sie einige Herausforderungen durchgehen, die Ihr Verständnis der bisher behandelten Themen testen.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Advanced_text_features", "Learn_web_development/Core/Structuring_content/Marking_up_a_letter", "Learn_web_development/Core/Structuring_content")}}
