---
title: Erstellen von Links
slug: Learn_web_development/Core/Structuring_content/Creating_links
l10n:
  sourceCommit: 27f34d8b137f9bb2b467f9f9a1c4e1d04e12ed89
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Test_your_skills/Advanced_HTML_text", "Learn_web_development/Core/Structuring_content/Test_your_skills/Links", "Learn_web_development/Core/Structuring_content")}}

Links (auch bekannt als Hyperlinks) sind wirklich wichtig — sie sind das, was das Web zu einem _Netz_ macht.
Dieser Artikel zeigt die erforderliche Syntax zum Erstellen eines Links und diskutiert bewährte Praktiken für Links.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegendes Verständnis von HTML, wie es in
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        > behandelt wird. Textuelle Semantik wie <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
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
          <li>Absolute und relative Pfade und wann man sie verwendet.</li>
          <li>Pfadsyntax im Detail — Schrägstriche, einzelner Punkt und Doppelpunkt.</li>
          <li>Link-Zustände und warum sie wichtig sind — <code>:hover</code>, <code>:focus</code>, <code>:visited</code> und <code>:active</code>.</li>
          <li>Inline- und Block-Level-Links.</li>
          <li>Verstehen der Vorteile von gutem Link-Text, wie z.B. bessere Zugänglichkeit für Benutzer von Bildschirmlesegeräten und potenzielle positive SEO-Effekte.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein Hyperlink?

Hyperlinks sind eine der aufregendsten Innovationen, die das Web zu bieten hat.
Sie sind seit den Anfängen des Webs ein Feature und machen das Web zu einem _Netz_.
Hyperlinks ermöglichen es uns, Dokumente mit anderen Dokumenten oder Ressourcen zu verknüpfen, auf bestimmte Teile von Dokumenten zu verweisen oder Apps unter einer Webadresse verfügbar zu machen.
Fast jeder Webinhalt kann in einen Link umgewandelt werden, sodass beim Klicken oder anders aktivieren der Webbrowser zu einer anderen Webadresse ({{Glossary("URL", "URL")}}) navigiert.

> [!NOTE]
> Eine URL kann auf HTML-Dateien, Textdateien, Bilder, Textdokumente, Video- und Audiodateien oder alles andere auf dem Web verweisen.
> Wenn der Webbrowser nicht weiß, wie er die Datei anzeigen oder handhaben soll, wird er Sie fragen, ob Sie die Datei öffnen möchten (in diesem Fall wird die Pflicht zum Öffnen oder Handhaben der Datei an eine geeignete native App auf dem Gerät übertragen) oder die Datei herunterladen möchten (in diesem Fall können Sie später versuchen, sie zu bearbeiten).

Zum Beispiel enthält die BBC-Homepage viele Links, die nicht nur auf mehrere Nachrichtenberichte verweisen, sondern auch auf verschiedene Bereiche der Website (Navigationsfunktionalität), Anmelde-/Registrierungsseiten (Benutzerwerkzeuge) und mehr.

![Startseite von bbc.co.uk, zeigt viele Nachrichtenartikel und Navigationsmenü-Funktionalität](updated-bbc-website.png)

## Anatomie eines Links

Ein grundlegender Link wird erstellt, indem der Text oder andere Inhalt innerhalb eines {{htmlelement("a")}}-Elements eingeschlossen wird, und indem das [`href`](/de/docs/Web/HTML/Reference/Elements/a#href)-Attribut, auch bekannt als **Hypertext-Referenz** oder **Ziel**, verwendet wird, das die Webadresse enthält.

```html
<p>
  I'm creating a link to
  <a href="https://www.mozilla.org/en-US/">the Mozilla homepage</a>.
</p>
```

Dies ergibt das folgende Ergebnis:

Ich erstelle einen Link zur [Mozilla-Homepage](https://www.mozilla.org/en-US/).

> [!NOTE]
> Das Scrimba [Anchor-Tag](https://scrimba.com/learn-html-and-css-c0p/~0a?via=mdn) <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> Skript bietet eine interaktive Demonstration, wie man Links mit HTML erstellt, und eine Herausforderung, um Sie dazu zu bringen, Ihre eigenen Links zu erstellen.

### Block-Level-Links

Wie bereits erwähnt, kann fast jeder Inhalt in einen Link umgewandelt werden, sogar {{Glossary("Block/CSS", "Block-Level-Elemente")}}.
Wenn Sie ein Überschriftenelement zu einem Link machen möchten, umschließen Sie es mit einem Anker (`<a>`) Element, wie im folgenden Codebeispiel gezeigt:

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

### Bildlinks

Um ein Bild in einen Link zu verwandeln, umschließen Sie das {{htmlelement("img")}}-Element mit einem {{htmlelement("a")}}-Element. Das folgende Beispiel verwendet einen relativen Pfad, um auf eine lokal gespeicherte SVG-Bilddatei zu verweisen.

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
> Sie werden mehr über die Verwendung von Bildern im Web in einem zukünftigen Artikel erfahren.

### Hinzufügen unterstützender Informationen mit dem title-Attribut

Ein weiteres Attribut, das Sie möglicherweise zu Ihren Links hinzufügen möchten, ist `title`.
Der Titel enthält zusätzliche Informationen über den Link, z.B. welche Art von Informationen die Seite enthält oder worauf auf der Website zu achten ist.

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

Dies ergibt das folgende Ergebnis, und das Überfahren des Links zeigt den Titel als Tooltip an:

{{EmbedLiveSample('Adding supporting information with the title attribute', '100%', 150)}}

> [!NOTE]
> Ein Link-Titel wird nur beim Überfahren mit der Maus angezeigt, was bedeutet, dass Personen, die auf Tastatursteuerungen oder Touchscreens angewiesen sind, Schwierigkeiten haben werden, Titelinformationen zu erhalten.
> Wenn die Informationen eines Titels wirklich wichtig für die Benutzerfreundlichkeit der Seite sind, sollten Sie diese in einer Weise präsentieren, die für alle Benutzer zugänglich ist, beispielsweise indem Sie sie im regulären Text darstellen.

### Erstellen Ihrer eigenen Beispiellinks

OK, jetzt sind Sie dran!

1. Klicken Sie auf **"Play"** im untenstehenden Codeblock, um das Beispiel im MDN Playground zu bearbeiten, oder machen Sie eine Kopie unserer [Startvorlage](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) und kopieren Sie den untenstehenden Code dorthin.
2. Verknüpfen Sie den Text "Rotes Eichhörnchen" und "Östliches Graues Eichhörnchen" mit Wikipedia-Seiten, die die entsprechenden Arten beschreiben. Geben Sie jedem Link ein `title`-Attribut, das dem wissenschaftlichen Namen der Art entspricht.
3. Verknüpfen Sie den Text "Wikipedia-Eichhörnchen-Seite" mit der Haupt-Wikipedia-Seite für Eichhörnchen.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Zurücksetzen_-Schaltfläche im MDN Playground löschen. Wenn Sie wirklich feststecken, können Sie die Lösung unter dem Codeblock anzeigen.

```html live-sample___links-1
<h1>Squirrels</h1>

<p>
  Squirrels are commonly thought of as tree-dwelling mammals, but the squirrel
  family extends far beyond that to include ground-dwelling rodents such as
  chipmunks and prairie dogs, and flying squirrels.
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

{{ EmbedLiveSample('links-1', "100%", 280) }}

<details>
<summary>Klicken Sie hier, um die Lösung anzuzeigen</summary>

Ihr fertiges HTML sollte so aussehen:

```html
<h1>Squirrels</h1>

<p>
  Squirrels are commonly thought of as tree-dwelling mammals, but the squirrel
  family extends far beyond that to include ground-dwelling rodents such as
  chipmunks and prairie dogs, and flying squirrels.
</p>

<p>Two of the most common and best-known squirrel species are the:</p>

<ul>
  <li>
    <a
      href="https://en.wikipedia.org/wiki/Red_squirrel"
      title="Sciurus vulgaris">
      Red squirrel
    </a>
  </li>
  <li>
    <a
      href="https://en.wikipedia.org/wiki/Eastern_gray_squirrel"
      title="Sciurus carolinensis">
      Eastern gray squirrel
    </a>
  </li>
</ul>

<p>
  For a good starting point on squirrel information, see the
  <a href="https://en.wikipedia.org/wiki/Squirrel">Wikipedia Squirrel page</a>.
</p>
```

</details>

## Ein schneller Überblick über URLs und Pfade

Um Linkziele vollständig zu verstehen, müssen Sie URLs und Dateipfade verstehen. Dieser Abschnitt gibt Ihnen die Informationen, die Sie dafür benötigen.

Eine URL, oder Uniform Resource Locator, ist eine Zeichenfolge, die beschreibt, wo sich etwas im Web befindet. Beispielsweise befindet sich die englische Homepage von Mozilla unter `https://www.mozilla.org/en-US/`.

URLs verwenden Pfade, um Dateien zu finden. Pfade geben an, wo sich die Datei, an der Sie interessiert sind, im Dateisystem befindet. Schauen wir uns ein Beispiel für eine Verzeichnisstruktur an, s siehe die Verzeichnisstruktur `creating-hyperlinks` unten:

![Eine einfache Verzeichnisstruktur. Das übergeordnete Verzeichnis heißt creating-hyperlinks und enthält zwei Dateien namens index.html und contacts.html sowie zwei Verzeichnisse namens projects und pdfs, die jeweils eine index.html und eine project-brief.pdf Datei enthalten](simple-directory.png)

Der **Wurzel** dieser Verzeichnisstruktur wird as `creating-hyperlinks` bezeichnet. Wenn Sie lokal mit einer Website arbeiten, haben Sie ein Verzeichnis, das die gesamte Website enthält. Innerhalb der **Wurzel** haben wir eine `index.html`-Datei und eine `contacts.html`. Auf einer echten Website wäre `index.html` unsere Start- oder Zielseite (eine Webseite, die als Einstiegspunkt für eine Website oder einen bestimmten Abschnitt einer Website dient).

Es gibt auch zwei Verzeichnisse innerhalb unserer Wurzel – `pdfs` und `projects`. Diese haben jeweils eine einzelne Datei – ein PDF (`project-brief.pdf`) und eine `index.html`-Datei. Beachten Sie, dass Sie zwei `index.html`-Dateien in einem Projekt haben können, solange sie sich an verschiedenen Standorten im Dateisystem befinden. Die zweite `index.html` wäre möglicherweise die Haupt-Landingpage für projektbezogene Informationen.

Schauen wir uns einige Beispiele für Links zwischen verschiedenen Dateien in dieser Verzeichnisstruktur an, um verschiedene Linktypen zu demonstrieren:

- **Gleiches Verzeichnis**: Wenn Sie einen Hyperlink in `index.html` (die oberste `index.html`) einfügen möchten, der auf `contacts.html` verweist, würden Sie den Namen der Datei angeben, auf die Sie verweisen möchten, da sie sich im selben Verzeichnis wie die aktuelle Datei befindet. Die zu verwendende URL ist `contacts.html`:

  ```html
  <p>
    Want to contact a specific staff member? Find details on our
    <a href="contacts.html">contacts page</a>.
  </p>
  ```

- **Abstieg in Unterverzeichnisse**: Wenn Sie einen Hyperlink in `index.html` (die oberste `index.html`) einfügen möchten, der auf `projects/index.html` verweist, müssten Sie in das `projects`-Verzeichnis absteigen, bevor Sie die Datei angeben, auf die Sie verweisen möchten.
  Dies wird erreicht, indem Sie den Namen des Verzeichnisses angeben, dann einen Schrägstrich, gefolgt vom Namen der Datei. Die URL, die Sie verwenden würden, lautet `projects/index.html`:

  ```html
  <p>Visit my <a href="projects/index.html">project homepage</a>.</p>
  ```

- **Wiederaufsteigen in übergeordnete Verzeichnisse**: Wenn Sie einen Hyperlink in `projects/index.html` einfügen möchten, der auf `pdfs/project-brief.pdf` verweist, müssten Sie ein Verzeichnis höher steigen und dann in das `pdfs`-Verzeichnis absteigen.
  Um ein Verzeichnis höher zu steigen, verwenden Sie zwei Punkte — `..` — also lautet die zu verwendende URL `../pdfs/project-brief.pdf`:

  ```html
  <p>A link to my <a href="../pdfs/project-brief.pdf">project brief</a>.</p>
  ```

> [!NOTE]
> Sie können mehrere Instanzen dieser Funktionen in komplexe URLs kombinieren, falls erforderlich, zum Beispiel: `../../../complex/path/to/my/file.html`.

### Dokumentfragmente

Es ist möglich, auf einen bestimmten Teil eines HTML-Dokuments zu verweisen, der als **Dokumentfragment** bekannt ist, anstatt nur auf den Anfang des Dokuments.
Um dies zu tun, müssen Sie zuerst ein [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut dem Element zuweisen, auf das Sie verweisen möchten.
Es macht normalerweise Sinn, auf eine bestimmte Überschrift zu verweisen, sodass es in etwa so aussieht:

```html
<h2 id="Mailing_address">Mailing address</h2>
```

Um dann auf diese spezifische `id` zu verweisen, würden Sie sie am Ende der URL hinzufügen, wobei ein Rautezeichen (`#`) vorausgeht, zum Beispiel:

```html
<p>
  Want to write us a letter? Use our
  <a href="contacts.html#Mailing_address">mailing address</a>.
</p>
```

Sie können sogar das Dokumentfragment nur verwenden, um _auf einen anderen Teil des aktuellen Dokuments_ zu verweisen:

```html
<p>
  The <a href="#Mailing_address">company mailing address</a> can be found at the
  bottom of this page.
</p>
```

### Absolute versus relative URLs

Zwei Begriffe, auf die Sie im Web stoßen werden, sind **absolute URL** und **relative URL:**

**Absolute URL**: Verweist auf einen Standort, der durch seinen absoluten Standort im Web definiert ist, einschließlich {{Glossary("protocol", "Protokoll")}} und {{Glossary("domain_name", "Domainname")}}.
Wenn beispielsweise eine `index.html`-Seite in ein Verzeichnis namens `projects` hochgeladen wird, das sich innerhalb der **Wurzel** eines Webservers befindet, und die Domain der Website `https://www.example.com` ist, wäre die Seite unter `https://www.example.com/projects/index.html` verfügbar (oder sogar nur unter `https://www.example.com/projects/`, da die meisten Webserver einfach nach einer Startseite wie `index.html` suchen, wenn sie nicht in der URL angegeben wird).

Eine absolute URL verweist immer auf denselben Ort, egal wo sie verwendet wird.

**Relative URL**: Verweist auf einen Standort, der relativ zu der Datei ist, auf die Sie verweisen, ähnlicher dem, was wir im vorherigen Abschnitt betrachtet haben.
Wenn wir beispielsweise von unserer Beispiel-Datei unter `https://www.example.com/projects/index.html` auf eine PDF-Datei im gleichen Verzeichnis verweisen möchten, wäre die URL einfach der Dateiname — `project-brief.pdf` — keine weiteren Informationen erforderlich. Wenn das PDF in einem Unterverzeichnis innerhalb von `projects` namens `pdfs` verfügbar wäre, wäre der relative Link `pdfs/project-brief.pdf` (die äquivalente absolute URL wäre `https://www.example.com/projects/pdfs/project-brief.pdf`).

Eine relative URL zeigt auf verschiedene Orte, je nach dem tatsächlichen Standort der Datei, von der Sie verweisen — wenn wir beispielsweise unsere `index.html`-Datei aus dem `projects`-Verzeichnis in die **Wurzel** der Website verschieben (das oberste Level, nicht in Verzeichnissen), würde der relative URL-Link `pdfs/project-brief.pdf` darin nun auf eine Datei an `https://www.example.com/pdfs/project-brief.pdf` verweisen, nicht auf eine Datei an `https://www.example.com/projects/pdfs/project-brief.pdf`.

Natürlich wird sich der Standort der Datei `project-brief.pdf` und des `pdfs`-Ordners nicht plötzlich ändern, weil Sie die `index.html`-Datei verschoben haben — dies würde Ihren Link auf den falschen Ort verweisen lassen, sodass er nicht funktionieren würde, wenn man darauf klickt. Sie müssen vorsichtig sein!

## Best Practices für Links

Es gibt einige bewährte Praktiken, die beim Schreiben von Links beachtet werden sollten. Schauen wir uns diese nun an.

### Verwenden Sie klare Linktexte

Es ist einfach, Links auf Ihrer Seite zu platzieren. Das ist nicht genug. Wir müssen unsere Links _zugänglich_ für alle Leser machen, unabhängig von ihrem aktuellen Kontext und den Tools, die sie bevorzugen. Zum Beispiel:

- Bildschirmlesegeräte-Benutzer mögen es, von Link zu Link auf der Seite zu springen und Links aus dem Kontext zu lesen.
- Suchmaschinen verwenden Linktexte, um Zieldateien zu indexieren, daher ist es eine gute Idee, Schlüsselwörter in Ihren Linktext aufzunehmen, um effektiv zu beschreiben, was verlinkt wird.
- Visuelle Leser überfliegen die Seite eher, anstatt jedes Wort zu lesen, und ihre Augen werden auf Seitenmerkmale gelenkt, die hervorstechen, wie Links. Sie finden beschreibende Linktexte nützlich.

Schauen wir uns ein spezifisches Beispiel an:

**Guter** Linktext: [Download Firefox](https://www.firefox.com/en-US/?redirect_source=firefox-com)

```html example-good
<p><a href="https://www.firefox.com/en-US/">Download Firefox</a></p>
```

<!-- markdownlint-disable descriptive-link-text -->

**Schlechter** Linktext: [Klicken Sie hier](https://www.firefox.com/en-US/) um Firefox herunterzuladen

```html example-bad
<p>
  <a href="https://www.firefox.com/en-US/">Click here</a> to download Firefox
</p>
```

<!-- markdownlint-enable descriptive-link-text -->

Weitere Tipps:

- Wiederholen Sie die URL nicht als Teil des Linktextes — URLs sehen hässlich aus und klingen noch hässlicher, wenn ein Bildschirmleser sie Buchstabe für Buchstabe vorliest.
- Sagen Sie nicht "Link" oder "verlinkt mit" im Linktext — das ist nur Lärm. Bildschirmlesegeräte sagen den Benutzern, dass es einen Link gibt.
  Visuelle Benutzer werden auch wissen, dass es einen Link gibt, weil Links normalerweise in einer anderen Farbe und unterstrichen gestaltet sind (diese Konvention sollte im Allgemeinen nicht gebrochen werden, da Benutzer daran gewöhnt sind).
- Halten Sie Ihren Linktext so kurz wie möglich — dies ist hilfreich, da Bildschirmlesegeräte den gesamten Linktext interpretieren müssen.
- Minimieren Sie Fälle, in denen mehrere Kopien desselben Textes an verschiedene Orte verlinkt sind.
  Dies kann Probleme für Benutzer von Bildschirmlesegeräten verursachen, wenn eine Liste von Links außerhalb des Kontexts angezeigt wird, die mit "klicken Sie hier", "klicken Sie hier", "klicken Sie hier" beschriftet ist.

### Verlinkung zu Nicht-HTML-Ressourcen — hinterlassen Sie klare Wegweiser

Beim Verlinken einer Ressource, die nicht auf der aktuellen Seite als "normale Navigation" geöffnet wird, sollten Sie in klarer Sprache im Linktext angeben, was passieren wird. Beispielsweise sollten Sie, wenn Sie eine Ressource herunterladen oder streamen oder wenn der Link ein Popup öffnen oder einen anderen potenziell unerwarteten Effekt auslösen wird, dies im Text angeben. Dies ist wichtig für Benutzer mit langsamen Verbindungen, die möglicherweise vermeiden möchten, Assets von mehreren Megabyte herunterzuladen. Es hilft auch, die Erwartungen für Benutzer von Bildschirmlesegeräten zu setzen, die andernfalls möglicherweise nicht wissen, was passiert.

Schauen wir uns einige Beispiele an, um zu sehen, welche Art von Text hier verwendet werden kann:

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

### Verwenden Sie das Download-Attribut, wenn Sie auf einen Download verlinken

Wenn Sie auf eine Ressource verlinken, die heruntergeladen werden soll, anstatt im Browser geöffnet zu werden, können Sie das `download`-Attribut verwenden, um einen standardmäßigen Dateinamen zum Speichern anzugeben. Hier ist ein Beispiel mit einem Download-Link zur neuesten Windows-Version von Firefox:

```html
<a
  href="https://download.mozilla.org/?product=firefox-latest-ssl&os=win64&lang=en-US"
  download="firefox-latest-64bit-installer.exe">
  Download Latest Firefox for Windows (64-bit) (English, US)
</a>
```

### Wann sollten Links in einem neuen Tab geöffnet werden

Links öffnen sich standardmäßig im gleichen Tab, in dem sich die Seite befindet, was es dem Benutzer ermöglicht, über die Zurück-Schaltfläche des Browsers zur vorherigen Seite zu navigieren. Viele Websites (einschließlich MDN) wählen jedoch, bestimmte Links, insbesondere externe Links, in einem neuen Tab zu öffnen. Dies wird erreicht, indem das [`target`](/de/docs/Web/HTML/Reference/Elements/a#target)-Attribut auf `"_blank"` gesetzt wird.

```html
Firefox is developed by the
<a href="https://www.mozilla.org/en-US/" target="_blank">Mozilla Foundation</a>.
```

Ob Links in einem neuen Tab geöffnet werden oder nicht, sollte bewusst auf der Grundlage von Erfahrungen und Designüberlegungen erfolgen. Hier sind einige Dinge, die Sie beachten sollten:

- Links, die in einem neuen Tab geöffnet werden, präsentieren die beiden Dokumente gleichzeitig, was für eine "parallele" Navigationserfahrung nützlich ist. Auf der anderen Seite sind Links, die sich im gleichen Tab öffnen, eher wie eine Fortsetzung der aktuellen Seite.
- Links, die in einem neuen Tab geöffnet werden, können verwirrend für Benutzer sein, die sich an die Nutzung der Zurück-Schaltfläche gewöhnt haben.
- Selbst wenn Links standardmäßig im gleichen Tab geöffnet werden, können Benutzer sie immer noch in einem neuen Tab öffnen, durch Tastaturkürzel oder Kontextmenüoptionen. Auf der anderen Seite sind Links, die sich in einem neuen Tab öffnen, schwer in demselben Tab zu öffnen.
- Benutzer von Bildschirmlesegeräten können durch Links, die sich in einem neuen Tab öffnen, verwirrt werden, da sie möglicherweise nicht erkennen, dass sich ein neuer Tab geöffnet hat, und sie möglicherweise den Kontext darüber verlieren, wo sie sich auf der Seite befinden.

Ein häufiger Ansatz ist es, externe Links in neuen Tabs zu öffnen und interne Links im gleichen Tab.
Einige Designer bevorzugen es, alle Links im gleichen Tab zu öffnen.
Wenn Sie Links in neuen Tabs öffnen, wird empfohlen, Hinweise für diese Links bereitzustellen, wie z.B. ein Icon neben dem Linktext.

## Erstellen eines Navigationsmenüs

Für diese Übung möchten wir, dass Sie einige Seiten mit einem Navigationsmenü verknüpfen, um eine mehrseitige Website zu erstellen. Dies ist eine übliche Methode zur Erstellung einer Website – dieselbe Seitenstruktur wird auf jeder Seite verwendet, einschließlich des gleichen Navigationsmenüs, sodass beim Klicken auf Links der Eindruck entsteht, dass Sie am selben Ort bleiben und unterschiedliche Inhalte angezeigt werden.

Sie müssen lokale Kopien der folgenden vier Seiten erstellen, alle im selben Verzeichnis. Eine vollständige Dateiliste finden Sie im Verzeichnis [navigation-menu-start](https://github.com/mdn/learning-area/tree/main/html/introduction-to-html/navigation-menu-start):

- [index.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/index.html)
- [projects.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/projects.html)
- [pictures.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/pictures.html)
- [social.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/social.html)

Sie sollten:

1. Fügen Sie eine ungeordnete Liste an der angegebenen Stelle auf einer Seite hinzu, die die Namen der Seiten enthält, auf die verlinkt werden soll.
   Ein Navigationsmenü ist normalerweise nur eine Liste von Links, daher ist dies semantisch in Ordnung.
2. Verändern Sie jeden Seitennamen in einen Link zu dieser Seite.
3. Kopieren Sie das Navigationsmenü auf jede Seite.
4. Entfernen Sie auf jeder Seite nur den Link zu derselben Seite — es ist verwirrend und unnötig, wenn eine Seite einen Link zu sich selbst enthält.
   Und das Fehlen eines Links dient als gute visuelle Erinnerung daran, auf welcher Seite Sie sich gerade befinden.

Das fertige Beispiel sollte in etwa wie die folgende Seite aussehen:

![Ein Beispiel für ein einfaches HTML-Navigationsmenü mit Home-, Bilder-, Projekte- und Sozial-Menüelementen](navigation-example.png)

> [!NOTE]
> Wenn Sie sich festgefahren fühlen oder nicht sicher sind, ob Sie es richtig gemacht haben, können Sie das Verzeichnis [navigation-menu-marked-up](https://github.com/mdn/learning-area/tree/main/html/introduction-to-html/navigation-menu-marked-up) überprüfen, um die richtige Antwort zu sehen.

## E-Mail-Links

Es ist möglich, Links oder Schaltflächen zu erstellen, die beim Klicken eine neue ausgehende E-Mail-Nachricht öffnen, anstatt auf eine Ressource oder Seite zu verlinken.
Dies wird mit dem {{HTMLElement("a")}}-Element und dem `mailto:` URL-Schema erreicht.

In seiner grundlegendsten und am häufigsten verwendeten Form gibt ein `mailto:`-Link die E-Mail-Adresse des beabsichtigten Empfängers an. Zum Beispiel:

```html
<a href="mailto:nowhere@mozilla.org">Send email to nowhere</a>
```

Dies ergibt einen Link, der so aussieht: [E-Mail an nowhere senden](mailto:nowhere@mozilla.org).

Tatsächlich ist die E-Mail-Adresse optional. Wenn Sie sie weglassen und Ihr [`href`](/de/docs/Web/HTML/Reference/Elements/a#href) "mailto:" ist, wird vom E-Mail-Client des Benutzers ein neues Fenster mit einer ausgehenden E-Mail geöffnet, ohne eine Empfängeradresse anzugeben.
Dies ist oft nützlich als "Teilen"-Links, die Benutzer anklicken können, um eine E-Mail an eine Adresse ihrer Wahl zu senden.

### Details angeben

Zusätzlich zur E-Mail-Adresse können Sie weitere Informationen angeben. Tatsächlich können alle Standard-Mail-Header-Felder zur `mailto`-URL hinzugefügt werden, die Sie bereitstellen.
Die am häufigsten verwendeten dieser Felder sind "subject", "cc" und "body" (was kein echtes Header-Feld ist, aber es ermöglicht Ihnen, eine kurze Inhaltsnachricht für die neue E-Mail anzugeben).
Jedes Feld und dessen Wert wird als Abfragebegriff angegeben.

Hier ist ein Beispiel, das cc, bcc, subject und body enthält:

```html
<a
  href="mailto:nowhere@mozilla.org?cc=name2@rapidtables.com&bcc=name3@rapidtables.com&subject=The%20subject%20of%20the%20email&body=The%20body%20of%20the%20email">
  Send mail with cc, bcc, subject and body
</a>
```

> [!NOTE]
> Die Werte jedes Feldes müssen mit nicht druckbaren Zeichen (unsichtbaren Zeichen wie Tabs, Wagenrückläufen und Seitenumbrüchen) und Leerzeichen {{Glossary("Percent-encoding", "percent-codiert")}} URL-kodiert werden.
> Beachten Sie auch die Verwendung des Fragezeichens (`?`), um die Haupt-URL von den Feldwerten zu trennen, und der kaufmännischen Und-Zeichen (`&`), um jedes Feld in der `mailto:`-URL zu trennen.
> Dies ist die Standard-URL-Abfragungssyntax.
> Lesen Sie [Die GET-Methode](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data#the_get_method), um zu verstehen, wofür die URL-Abfragungssyntax häufiger verwendet wird.

Hier sind einige weitere Beispiel-`mailto`-URLs:

- <mailto:>
- <mailto:nowhere@mozilla.org>
- <mailto:nowhere@mozilla.org,nobody@mozilla.org>
- <mailto:nowhere@mozilla.org?cc=nobody@mozilla.org>
- <mailto:nowhere@mozilla.org?cc=nobody@mozilla.org&subject=This%20is%20the%20subject>

## Zusammenfassung

Das war's fürs Erste zu Links! Sie werden später im Kurs zu Links zurückkehren, wenn Sie anfangen, sich mit deren Stilgestaltung auseinanderzusetzen. Als Nächstes geben wir Ihnen einige Tests, mit denen Sie überprüfen können, wie gut Sie die bereitgestellten Informationen über Links verstanden und behalten haben.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Test_your_skills/Advanced_HTML_text", "Learn_web_development/Core/Structuring_content/Test_your_skills/Links", "Learn_web_development/Core/Structuring_content")}}
