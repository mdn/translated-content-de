---
title: Erstellen von Links
slug: Learn_web_development/Core/Structuring_content/Creating_links
l10n:
  sourceCommit: 160fdf443fbdd490cec19b536116a56736a75d96
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Advanced_text_features", "Learn_web_development/Core/Structuring_content/Marking_up_a_letter", "Learn_web_development/Core/Structuring_content")}}

Links (auch bekannt als Hyperlinks) sind sehr wichtig — sie machen das Web _zu einem Netz_.
Dieser Artikel zeigt die erforderliche Syntax, um einen Link zu erstellen, und diskutiert bewährte Verfahren für Links.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML, wie im
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        > behandelt. Text-Level-Semantik wie <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
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
          <li>Verstehen, warum Links das grundlegende Merkmal des Webs sind. Es gibt kein Web ohne Links.</li>
          <li>Das <code>href</code>-Attribut.</li>
          <li>Absolute und relative Pfade und wann sie zu verwenden sind.</li>
          <li>Pfadsyntax im Detail — Schrägstriche, Einzelpunkt und Doppelpunkt.</li>
          <li>Link-Zustände und warum sie wichtig sind — <code>:hover</code>, <code>:focus</code>, <code>:visited</code> und <code>:active</code>.</li>
          <li>Inline- und Block-Level-Links.</li>
          <li>Verstehen der Vorteile, guten Linktext zu schreiben, wie z.B. bessere Zugänglichkeit für Screenreader-Nutzer und mögliche positive SEO-Effekte.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein Hyperlink?

Hyperlinks sind eine der aufregendsten Innovationen, die das Web zu bieten hat.
Sie sind ein Merkmal des Webs seit Beginn und machen das Web _zu einem Netz_.
Hyperlinks ermöglichen es uns, Dokumente mit anderen Dokumenten oder Ressourcen zu verknüpfen, auf spezifische Teile von Dokumenten zu verlinken oder Apps unter einer Webadresse verfügbar zu machen.
Fast jedes Web-Content kann in einen Link umgewandelt werden, sodass beim Klicken oder anderweitigen Aktivieren der Webbrowser zu einer anderen Webadresse ({{Glossary("URL", "URL")}}) wechselt.

> [!NOTE]
> Eine URL kann auf HTML-Dateien, Textdateien, Bilder, Textdokumente, Video- und Audiodateien oder alles andere verweisen, was im Web existiert.
> Wenn der Webbrowser nicht weiß, wie er die Datei anzeigen oder verarbeiten soll, wird er fragen, ob Sie die Datei öffnen möchten (in diesem Fall wird die Aufgabe des Öffnens oder Verarbeitens der Datei an eine geeignete native App auf dem Gerät übergeben) oder die Datei herunterladen möchten (in diesem Fall können Sie versuchen, später damit umzugehen).

Zum Beispiel enthält die BBC-Homepage viele Links, die nicht nur auf mehrere Nachrichtenartikel, sondern auch auf verschiedene Bereiche der Website (Navigationsfunktionalität), Login-/Registrierungsseiten (Benutzerwerkzeuge) und mehr verweisen.

![Startseite von bbc.co.uk, die viele Nachrichtenartikel und Navigationsmenüfunktionalität zeigt](updated-bbc-website.png)

## Anatomie eines Links

Ein grundlegender Link wird erstellt, indem der Text oder andere Inhalt innerhalb eines {{htmlelement("a")}}-Elements eingeschlossen und das [`href`](/de/docs/Web/HTML/Reference/Elements/a#href)-Attribut verwendet wird, das auch als **Hypertext-Referenz** oder **Ziel** bekannt ist und die Webadresse enthält.

```html
<p>
  I'm creating a link to
  <a href="https://www.mozilla.org/en-US/">the Mozilla homepage</a>.
</p>
```

Dies gibt uns folgendes Ergebnis:

Ich erstelle einen Link zur [Mozilla-Homepage](https://www.mozilla.org/en-US/).

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Scrimbas [Anker-Tags](https://scrimba.com/learn-html-and-css-c0p/~0a?via=mdn) <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> bietet eine interaktive Demonstration, wie Links mit HTML erstellt werden, sowie eine Herausforderung, um Sie dazu zu bringen, Ihre eigenen Links zu erstellen.

### Block-Level-Links

Wie bereits erwähnt, kann fast jeder Inhalt in einen Link umgewandelt werden, selbst {{Glossary("Block/CSS", "Block-Level-Elemente")}}.
Wenn Sie ein Überschriftselement zu einem Link machen möchten, dann umschließen Sie es in einem Anker (`<a>`) Element, wie im folgenden Code-Snippet gezeigt:

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

Um ein Bild in einen Link umzuwandeln, umschließen Sie das {{htmlelement("img")}}-Element mit einem {{htmlelement("a")}}-Element. Das folgende Beispiel verwendet einen relativen Pfad, um eine lokal gespeicherte SVG-Bilddatei zu referenzieren.

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
> Mehr über die Verwendung von Bildern im Web erfahren Sie in einem zukünftigen Artikel.

### Hinzufügen unterstützender Informationen mit dem Titel-Attribut

Ein weiteres Attribut, das Sie möglicherweise zu Ihren Links hinzufügen möchten, ist `title`.
Der Titel enthält zusätzliche Informationen über den Link, wie welche Art von Informationen die Seite enthält oder Dinge, die auf der Website zu beachten sind.

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

Dies ergibt folgendes Ergebnis und das Schweben über den Link zeigt den Titel als Tooltip an:

{{EmbedLiveSample('Adding supporting information with the title attribute', '100%', 150)}}

> [!NOTE]
> Ein Linktitel wird nur bei Mausüberflug angezeigt, was bedeutet, dass Personen, die auf Tastatursteuerungen oder Touchscreens zur Navigation durch Webseiten angewiesen sind, Schwierigkeiten haben werden, Titelinformationen abzurufen.
> Wenn die Informationen eines Titels wirklich wichtig für die Benutzerfreundlichkeit der Seite sind, sollten Sie sie auf eine Weise präsentieren, die für alle Benutzer zugänglich ist, beispielsweise indem Sie sie in den regulären Text einfügen.

### Erstellen Ihrer eigenen Beispiel-Links

OK, nun sind Sie an der Reihe!

1. Klicken Sie auf **"Play"** im folgenden Code-Block, um das Beispiel im MDN Playground zu bearbeiten, oder machen Sie eine Kopie unserer [Startvorlage](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) und kopieren Sie den untenstehenden Code hinein.
2. Verlinken Sie den Text "Rotes Eichhörnchen" und "Östliches Grauhörnchen" zu Wikipedia-Seiten, die die jeweiligen Arten beschreiben. Geben Sie jedem Link ein `title`-Attribut, das dem wissenschaftlichen Namen der Art entspricht.
3. Verlinken Sie den Text "Wikipedia Squirrel page" zur Haupt-Wikipedia-Seite für Eichhörnchen.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Zurücksetzen_-Taste im MDN Playground löschen. Wenn Sie wirklich nicht weiterkommen, können Sie die Lösung unterhalb des Code-Blocks ansehen.

```html live-sample___links-1
<h1>Squirrels</h1>

<p>
  Squirrels are commonly thought of as tree-dwelling mammals, but the squirrel
  family extends far beyond that to include ground-dwelling rodents such as
  chipmunks and prarie dogs, and flying squrrels.
</p>

<p>Two of the most common and best-known squirrel species are the:</p>

<ul>
  <li>Red squirrel</li>
  <li>Eastern gray squirrel</li>
</ul>

<p>
  For a good starting point on squirrel information, see the Wikipedia Squirrel
  page.
</p>
```

{{EmbedLiveSample('links-1', "100%", 280)}}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

<!-- cSpell:disable -->

Ihr fertiges HTML sollte wie folgt aussehen:

```html-nolint
<h1>Squirrels</h1>

<p>
  Squirrels are commonly thought of as tree-dwelling mammals, but the squirrel
  family extends far beyond that to include ground-dwelling rodents such as
  chipmunks and prarie dogs, and flying squrrels.
</p>

<p>Two of the most common and best-known squirrel species are the:</p>

<ul>
  <li><a href="https://en.wikipedia.org/wiki/Red_squirrel"
         title="Sciurus vulgaris">
    Red squirrel
  </a></li>
  <li><a href="https://en.wikipedia.org/wiki/Eastern_gray_squirrel"
         title="Sciurus carolinensis">
    Eastern gray squirrel
  </a></li>
</ul>

<p>For a good starting point on squirrel information, see the
  <a href="https://en.wikipedia.org/wiki/Squirrel">Wikipedia Squirrel
  page</a>.</p>
```

<!-- cSpell:enable -->

</details>

## Ein kurzer Überblick über URLs und Pfade

Um Linkziele vollständig zu verstehen, müssen Sie URLs und Dateipfade verstehen. Dieser Abschnitt gibt Ihnen die Informationen, die Sie benötigen, um dies zu erreichen.

Eine URL, oder Uniform Resource Locator, ist eine Zeichenfolge, die den Ort eines Elements im Web definiert. Zum Beispiel befindet sich die englische Homepage von Mozilla unter `https://www.mozilla.org/en-US/`.

URLs verwenden Pfade, um Dateien zu finden. Pfade geben an, wo sich die Datei befindet, an der Sie interessiert sind, im Dateisystem befindet. Schauen wir uns ein Beispiel für eine Verzeichnisstruktur an, siehe die unten gezeigte `creating-hyperlinks`-Verzeichnisstruktur:

![Eine einfache Verzeichnisstruktur. Das übergeordnete Verzeichnis heißt creating-hyperlinks und enthält zwei Dateien namens index.html und contacts.html sowie zwei Verzeichnisse namens projects und pdfs, die jeweils eine index.html und eine projekt-brief.pdf-Datei enthalten](simple-directory.png)

Das **Root** dieser Verzeichnisstruktur wird `creating-hyperlinks` genannt. Wenn Sie lokal mit einer Website arbeiten, haben Sie ein Verzeichnis, das die gesamte Seite enthält. Im **Root** haben wir eine `index.html` Datei und eine `contacts.html`. Auf einer echten Website wäre `index.html` unsere Homepage oder Startseite (eine Webseite, die als Einstiegspunkt für eine Website oder einen bestimmten Abschnitt einer Website dient).

Es gibt auch zwei Verzeichnisse innerhalb unseres Roots — `pdfs` und `projects`. Diese haben jeweils eine einzelne Datei — eine PDF-Datei (`project-brief.pdf`) und eine `index.html` Datei. Beachten Sie, dass Sie zwei `index.html`-Dateien in einem Projekt haben können, solange sie sich an unterschiedlichen Stellen im Dateisystem befinden. Die zweite `index.html` wäre vielleicht die Hauptstartseite für projektbezogene Informationen.

Schauen wir uns einige Beispiele für Links zwischen einigen verschiedenen Dateien in dieser Verzeichnisstruktur an, um verschiedene Linktypen zu demonstrieren:

- **Gleiches Verzeichnis**: Wenn Sie einen Hyperlink in `index.html` (der obersten Ebene `index.html`) einschließen wollten, der auf `contacts.html` verweist, würden Sie den Dateinamen angeben, zu dem Sie verlinken möchten, da er sich im selben Verzeichnis wie die aktuelle Datei befindet. Die URL, die Sie verwenden würden, ist `contacts.html`:

  ```html
  <p>
    Want to contact a specific staff member? Find details on our
    <a href="contacts.html">contacts page</a>.
  </p>
  ```

- **Ins Unterverzeichnis wechseln**: Wenn Sie einen Hyperlink in `index.html` (der obersten Ebene `index.html`) einschließen wollten, der auf `projects/index.html` verweist, müssten Sie in das `projects`-Verzeichnis wechseln, bevor Sie die Datei angeben, zu der Sie verlinken möchten.
  Dies geschieht, indem Sie den Namen des Verzeichnisses angeben, dann einen Schrägstrich und dann den Namen der Datei. Die URL, die Sie verwenden würden, ist `projects/index.html`:

  ```html
  <p>Visit my <a href="projects/index.html">project homepage</a>.</p>
  ```

- **Ins übergeordnete Verzeichnis zurückwechseln**: Wenn Sie einen Hyperlink in `projects/index.html` auf `pdfs/project-brief.pdf` einschließen wollten, müssten Sie eine Verzeichnisebene nach oben wechseln und dann zurück in das `pdfs`-Verzeichnis.
  Um eine Verzeichnisebene nach oben zu wechseln, verwenden Sie zwei Punkte — `..` — die URL, die Sie verwenden würden, lautet also `../pdfs/project-brief.pdf`:

  ```html
  <p>A link to my <a href="../pdfs/project-brief.pdf">project brief</a>.</p>
  ```

> [!NOTE]
> Sie können mehrere Instanzen dieser Funktionen in komplexen URLs kombinieren, wenn nötig, zum Beispiel: `../../../complex/path/to/my/file.html`.

### Dokumentfragmente

Es ist möglich, auf einen bestimmten Teil eines HTML-Dokuments zu verlinken, der als **Dokumentfragment** bekannt ist, anstatt nur auf den Anfang des Dokuments.
Dazu müssen Sie zuerst einer [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut zu dem Element zuweisen, zu dem Sie verlinken möchten.
Es macht normalerweise Sinn, zu einer bestimmten Überschrift zu verlinken, also könnte dies folgendermaßen aussehen:

```html
<h2 id="Mailing_address">Mailing address</h2>
```

Um dann auf diese spezifische `id` zu verlinken, würden Sie sie am Ende der URL einfügen, gefolgt von einem Hash/Nummernzeichen (`#`), zum Beispiel:

```html
<p>
  Want to write us a letter? Use our
  <a href="contacts.html#Mailing_address">mailing address</a>.
</p>
```

Sie können sogar den Dokumentfragmentverweis selbst verwenden, um auf einen _anderen Teil des aktuellen Dokuments_ zu verlinken:

```html
<p>
  The <a href="#Mailing_address">company mailing address</a> can be found at the
  bottom of this page.
</p>
```

### Absolute und relative URLs

Zwei Begriffe, auf die Sie im Web stoßen werden, sind **absolute URL** und **relative URL**:

**Absolute URL**: Verweist auf einen Ort, der durch seinen absoluten Ort im Web definiert ist, einschließlich {{Glossary("protocol", "Protokoll")}} und {{Glossary("domain_name", "Domainname")}}.
Zum Beispiel, wenn eine `index.html`-Seite in ein Verzeichnis namens `projects` hochgeladen wird, das sich im **Root** eines Webservers befindet, und die Domain der Website `https://www.example.com` ist, wäre die Seite unter `https://www.example.com/projects/index.html` (oder sogar nur `https://www.example.com/projects/`, da die meisten Webserver nach einer Startseite wie `index.html` suchen, die geladen wird, wenn sie nicht in der URL angegeben ist) verfügbar.

Eine absolute URL wird immer auf denselben Ort verweisen, egal wo sie verwendet wird.

**Relative URL**: Verweist auf einen Ort, der _relativ_ zu der Datei ist, von der Sie verlinken, mehr wie das, was wir im vorherigen Abschnitt untersucht haben.
Zum Beispiel, wenn wir von unserer Beispieldatei bei `https://www.example.com/projects/index.html` zu einer PDF-Datei im selben Verzeichnis verlinken wollten, wäre die URL nur der Dateiname — `project-brief.pdf` — keine weiteren Informationen benötigt. Wenn das PDF in einem Unterverzeichnis im `projects`-Verzeichnis namens `pdfs` verfügbar wäre, wäre der relative Link `pdfs/project-brief.pdf` (die entsprechende absolute URL wäre `https://www.example.com/projects/pdfs/project-brief.pdf`).

Eine relative URL wird auf unterschiedliche Orte verweisen, je nachdem, wo sich die Datei befindet, auf die Sie sich beziehen — zum Beispiel, wenn wir unsere `index.html`-Datei aus dem `projects`-Verzeichnis in das **Root** der Website (die oberste Ebene, nicht in einem Verzeichnis) verschieben würden, würde der `pdfs/project-brief.pdf` relative URL-Link darin jetzt auf eine Datei verweisen, die sich bei `https://www.example.com/pdfs/project-brief.pdf` befindet, nicht auf eine Datei bei `https://www.example.com/projects/pdfs/project-brief.pdf`.

Natürlich wird sich der Standort der `project-brief.pdf`-Datei und des `pdfs`-Ordners nicht plötzlich ändern, weil Sie die `index.html`-Datei verschoben haben — dies würde dazu führen, dass Ihr Link auf den falschen Ort verweist, sodass er bei einem Klick nicht funktioniert. Sie müssen vorsichtig sein!

## Beste Praktiken für Links

Es gibt einige bewährte Praktiken, die beim Schreiben von Links zu beachten sind. Schauen wir uns diese jetzt an.

### Verwenden Sie klare Linkbezeichnungen

Es ist einfach, Links auf Ihrer Seite zu platzieren. Das reicht nicht. Wir müssen unsere Links _zugänglich_ für alle Leser machen, unabhängig von ihrem aktuellen Kontext und den Tools, die sie bevorzugen. Zum Beispiel:

- Screenreader-Benutzer springen gerne von Link zu Link auf der Seite und lesen Links aus dem Kontext heraus.
- Suchmaschinen verwenden Linktext, um Zieldateien zu indexieren, deshalb ist es eine gute Idee, Schlüsselwörter in Ihren Linktext aufzunehmen, um effektiv zu beschreiben, was verlinkt wird.
- Visuelle Leser überfliegen die Seite, anstatt jedes Wort zu lesen, und ihre Augen werden zu herausstechenden Elementen auf der Seite gezogen, wie Links. Sie werden beschreibenden Linktext nützlich finden.

Schauen wir uns ein konkretes Beispiel an:

**Guter** Linktext: [Firefox herunterladen](https://www.mozilla.org/en-US/firefox/new/?redirect_source=firefox-com)

```html example-good
<p><a href="https://www.mozilla.org/en-US/firefox/new/">Download Firefox</a></p>
```

<!-- markdownlint-disable descriptive-link-text -->

**Schlechter** Linktext: [Hier klicken](https://www.mozilla.org/en-US/firefox/new/), um Firefox herunterzuladen

```html example-bad
<p>
  <a href="https://www.mozilla.org/en-US/firefox/new/">Click here</a> to
  download Firefox
</p>
```

<!-- markdownlint-enable descriptive-link-text -->

Andere Tipps:

- Wiederholen Sie die URL nicht als Teil des Linktexts — URLs sehen hässlich aus und klingen noch hässlicher, wenn sie von einem Screenreader buchstabenweise vorgelesen werden.
- Sagen Sie nicht "Link" oder "Links zu" im Linktext — das ist einfach nur Rauschen. Screenreader informieren die Benutzer darüber, dass es sich um einen Link handelt.
  Visuelle Benutzer werden ebenfalls erkennen, dass es sich um einen Link handelt, da Links in der Regel in einer anderen Farbe und unterstrichen dargestellt werden (dieses Konvention sollte im Allgemeinen nicht gebrochen werden, da Benutzer daran gewöhnt sind).
- Halten Sie Ihren Linktext so kurz wie möglich — das ist hilfreich, da Screenreader den gesamten Linktext interpretieren müssen.
- Minimieren Sie Instanzen, in denen mehrere Kopien desselben Textes an verschiedenen Orten verlinkt sind.
  Dies kann Probleme für Screenreader-Benutzer verursachen, insbesondere wenn es eine Liste von Links außerhalb des Kontexts gibt, die mit "hier klicken", "hier klicken", "hier klicken" beschriftet sind.

### Verlinken zu nicht-HTML-Ressourcen — hinterlassen Sie klare Zeichen

Wenn Sie zu einer Ressource verlinken, die nicht auf der aktuellen Seite als "normale Navigation" geöffnet wird, sollten Sie dem Linktext klar hinzufügen, was passieren wird. Zum Beispiel, wenn Sie eine Ressource herunterladen oder streamen oder wenn der Link ein Popup öffnet oder eine andere potenziell unerwartete Wirkung hat, sollte dies im Text angegeben werden. Dies ist wichtig für Benutzer mit langsamen Verbindungen, die möglicherweise vermeiden möchten, mehrere Megabyte große Ressourcen herunterzuladen. Es hilft auch, Erwartungen für Screenreader-Benutzer zu setzen, die möglicherweise nicht wissen, was sonst passiert.

Schauen wir uns einige Beispiele an, um zu sehen, was für eine Art Text hier verwendet werden kann:

```html
<p>
  <a href="/large-report.pdf" download>
    Download the sales report (PDF, 10MB)
  </a>
</p>

<p>
  <a href="https://www.example.com/video-stream/" target="_blank">
    Watch the video (stream opens in separate tab, HD quality)
  </a>
</p>
```

### Verwenden Sie das Attribut "download", wenn Sie auf einen Download verlinken

Wenn Sie einen Link zu einer Ressource erstellen, die heruntergeladen und nicht im Browser geöffnet werden soll, können Sie das `download`-Attribut verwenden, um einen standardmäßigen Dateinamen für das Speichern bereitzustellen. Hier ist ein Beispiel mit einem Download-Link zur neuesten Windows-Version von Firefox:

```html
<a
  href="https://download.mozilla.org/?product=firefox-latest-ssl&os=win64&lang=en-US"
  download="firefox-latest-64bit-installer.exe">
  Download Latest Firefox for Windows (64-bit) (English, US)
</a>
```

### Wann sollten Links in einem neuen Tab geöffnet werden

Links öffnen standardmäßig im gleichen Tab wie die Seite, auf der sie sich befinden, was dem Benutzer ermöglicht, mit der Zurück-Taste des Browsers zur vorherigen Seite zu navigieren. Viele Websites (einschließlich MDN) entscheiden sich jedoch, bestimmte Links, insbesondere externe Links, in einem neuen Tab zu öffnen. Dies wird erreicht, indem das [`target`](/de/docs/Web/HTML/Reference/Elements/a#target)-Attribut auf `"_blank"` gesetzt wird.

```html
Firefox is developed by the
<a href="https://www.mozilla.org/en-US/" target="_blank">Mozilla Foundation</a>.
```

Ob Links in einem neuen Tab geöffnet werden oder nicht, sollte eine bewusste Entscheidung sein, basierend auf Überlegungen zum Benutzererlebnisdesign. Hier sind einige Dinge, die Sie berücksichtigen sollten:

- Dass Links in einem neuen Tab geöffnet werden, zeigt die beiden Dokumente gleichzeitig an, was für ein "paralleles" Navigationserlebnis nützlich ist. Andererseits sind Links, die im selben Tab geöffnet werden, mehr wie eine Fortsetzung der aktuellen Seite.
- Das Öffnen von Links in einem neuen Tab kann für Benutzer, die an die Verwendung der Zurück-Taste gewöhnt sind, verwirrend sein.
- Selbst wenn Links standardmäßig im selben Tab geöffnet werden, können Benutzer sie trotzdem in einem neuen Tab öffnen, indem sie Tastenkombinationen oder Kontextmenüoptionen verwenden. Andererseits sind Links, die in einem neuen Tab geöffnet werden, schwerer im selben Tab zu öffnen.
- Screenreader-Benutzer könnten durch Links, die in einem neuen Tab geöffnet werden, verwirrt sein, da sie möglicherweise nicht erkennen, dass sich der neue Tab geöffnet hat und sie den Kontext ihres Standorts auf der Seite verlieren könnten.

Ein gängiger Ansatz ist es, externe Links in neuen Tabs zu öffnen und interne Links im selben Tab.
Manche Designer bevorzugen, alle Links im selben Tab zu öffnen.
Wenn Sie Links in neuen Tabs öffnen, wird empfohlen, dass Sie Hinweise für diese Links geben, wie z.B. ein Symbol neben dem Linktext.

## Erstellen eines Navigationsmenüs

Für diese Übung möchten wir, dass Sie einige Seiten mit einem Navigationsmenü verbinden, um eine mehrseitige Website zu erstellen. Dies ist eine gängige Methode, um eine Website zu erstellen — die gleiche Seitenstruktur wird auf jeder Seite verwendet, einschließlich des gleichen Navigationsmenüs, sodass beim Klicken auf Links der Eindruck entsteht, dass Sie sich am selben Ort befinden und unterschiedliche Inhalte angezeigt werden.

Sie müssen lokale Kopien der folgenden vier Seiten erstellen, alle im selben Verzeichnis. Für eine vollständige Dateiliste siehe das [navigation-menu-start](https://github.com/mdn/learning-area/tree/main/html/introduction-to-html/navigation-menu-start) Verzeichnis:

- [index.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/index.html)
- [projects.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/projects.html)
- [pictures.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/pictures.html)
- [social.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/social.html)

Sie sollten:

1. Eine ungeordnete Liste an der angegebenen Stelle auf einer Seite hinzufügen, die die Namen der zu verlinkenden Seiten enthält.
   Ein Navigationsmenü ist in der Regel nur eine Liste von Links, daher ist dies semantisch in Ordnung.
2. Jeden Seitennamen in einen Link zu dieser Seite verwandeln.
3. Das Navigationsmenü auf jede Seite kopieren.
4. Auf jeder Seite nur den Link zu dieser selben Seite entfernen — es ist verwirrend und unnötig, wenn eine Seite einen Link zu sich selbst enthält.
   Und das Fehlen eines Links dient als gute visuelle Erinnerung daran, auf welcher Seite Sie sich gerade befinden.

Das fertige Beispiel sollte ähnlich der folgenden Seite aussehen:

![Ein Beispiel für ein einfaches HTML-Navigationsmenü mit Home, Bilder, Projekte und soziale Menüpunkte](navigation-example.png)

> [!NOTE]
> Wenn Sie steckenbleiben oder nicht sicher sind, ob Sie es richtig gemacht haben, können Sie das Verzeichnis [navigation-menu-marked-up](https://github.com/mdn/learning-area/tree/main/html/introduction-to-html/navigation-menu-marked-up) überprüfen, um die richtige Antwort zu sehen.

## E-Mail-Links

Es ist möglich, Links oder Schaltflächen zu erstellen, die beim Klicken eine neue ausgehende E-Mail-Nachricht öffnen, anstatt zu einer Ressource oder Seite zu verlinken.
Dies wird mit dem {{HTMLElement("a")}}-Element und dem `mailto:` URL-Schema gemacht.

In seiner einfachsten und am häufigsten verwendeten Form gibt ein `mailto:`-Link die E-Mail-Adresse des vorgesehenen Empfängers an. Zum Beispiel:

```html
<a href="mailto:nowhere@mozilla.org">Send email to nowhere</a>
```

Dies ergibt einen Link, der so aussieht: [E-Mail an nowhere senden](mailto:nowhere@mozilla.org).

Tatsächlich ist die E-Mail-Adresse optional. Wenn Sie diese weglassen und Ihr [`href`](/de/docs/Web/HTML/Reference/Elements/a#href) "mailto:" ist, wird durch das E-Mail-Programm des Benutzers ein neues ausgehendes E-Mail-Fenster geöffnet, ohne dass eine Zieladresse angegeben wird.
Dies ist oft nützlich als "Teilen"-Links, die Benutzer klicken können, um eine E-Mail an eine Adresse ihrer Wahl zu senden.

### Details angeben

Zusätzlich zur E-Mail-Adresse können Sie weitere Informationen angeben. Tatsächlich können alle Standard-Mail-Header-Felder zur `mailto`-URL hinzugefügt werden, die Sie bereitstellen.
Die am häufigsten verwendeten davon sind "subject", "cc" und "body" (was kein echtes Header-Feld ist, aber es erlaubt Ihnen, eine kurze Inhaltsnachricht für die neue E-Mail anzugeben).
Jedes Feld und sein Wert werden als Abfragebegriff angegeben.

Hier ist ein Beispiel, das eine cc, bcc, Betreff und Text enthält:

```html
<a
  href="mailto:nowhere@mozilla.org?cc=name2@rapidtables.com&bcc=name3@rapidtables.com&subject=The%20subject%20of%20the%20email&body=The%20body%20of%20the%20email">
  Send mail with cc, bcc, subject and body
</a>
```

> [!NOTE]
> Die Werte jedes Feldes müssen mit nicht druckbaren Zeichen (unsichtbare Zeichen wie Tabulatoren, Zeilenumbrüche und Seitenumbrüche) und Leerzeichen {{Glossary("Percent-encoding", "prozentkodiert")}} sein.
> Beachten Sie auch die Verwendung des Fragezeichens (`?`), um die Haupt-URL von den Feldwerten zu trennen, und das Kaufmännische Und (&), um jedes Feld in der `mailto:`-URL zu trennen.
> Dies ist die Standard-URL-Abfragenotation.
> Lesen Sie [Die GET-Methode](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data#the_get_method), um zu verstehen, wofür die URL-Abfragenotation allgemein verwendet wird.

Hier sind einige andere Beispiel-`mailto`-URLs:

- <mailto:>
- <mailto:nowhere@mozilla.org>
- <mailto:nowhere@mozilla.org,nobody@mozilla.org>
- <mailto:nowhere@mozilla.org?cc=nobody@mozilla.org>
- <mailto:nowhere@mozilla.org?cc=nobody@mozilla.org&subject=This%20is%20the%20subject>

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen beibehalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: Links](/de/docs/Learn_web_development/Core/Structuring_content/Test_your_skills/Links).

## Zusammenfassung

Das war's vorerst mit den Links! Sie werden später im Kurs auf Links zurückkommen, wenn Sie anfangen, sich mit deren Gestaltung zu beschäftigen. Als Nächstes bei HTML werden Sie einige Herausforderungen durchlaufen, die Ihr Verständnis der bisher behandelten Themen testen.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Advanced_text_features", "Learn_web_development/Core/Structuring_content/Marking_up_a_letter", "Learn_web_development/Core/Structuring_content")}}
