---
title: Erstellen von Links
slug: Learn_web_development/Core/Structuring_content/Creating_links
l10n:
  sourceCommit: 65c873fda639b035b94db77dd0f9373f38549aa0
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Structuring_documents", "Learn_web_development/Core/Structuring_content/Test_your_skills/Links", "Learn_web_development/Core/Structuring_content")}}

Links (auch als Hyperlinks bekannt) sind wirklich wichtig — sie machen das Web zu einem _Netz_.
Dieser Artikel zeigt die erforderliche Syntax zum Erstellen eines Links und erörtert bewährte Methoden für Links.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML, wie im
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        > behandelt. Textuelle Semantik wie <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
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
          <li>Verstehen, warum Links das grundlegende Merkmal des Webs sind. Ohne Links gibt es kein Web.</li>
          <li>Das <code>href</code>-Attribut.</li>
          <li>Absolute und relative Pfade und wann diese verwendet werden sollten.</li>
          <li>Pfadsyntax im Detail — Schrägstriche, einfacher Punkt und Doppelpunkt.</li>
          <li>Link-Zustände und warum sie wichtig sind — <code>:hover</code>, <code>:focus</code>, <code>:visited</code> und <code>:active</code>.</li>
          <li>Inline- und Block-Level-Links.</li>
          <li>Verstehen der Vorteile guten Linktextes, wie bessere Barrierefreiheit für Benutzer von Bildschirmlesern und potenziell positive SEO-Effekte.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein Hyperlink?

Hyperlinks sind eine der spannendsten Innovationen, die das Web bietet.
Sie sind seit Beginn ein Merkmal des Webs und machen das Web zu einem _Netz_.
Hyperlinks ermöglichen es uns, Dokumente mit anderen Dokumenten oder Ressourcen zu verknüpfen, auf bestimmte Teile von Dokumenten zu verlinken oder Apps unter einer Webadresse verfügbar zu machen.
Fast jeder Webinhalt kann in einen Link umgewandelt werden, sodass beim Klicken oder anderweitiger Aktivierung der Webbrowser zu einer anderen Webadresse ({{Glossary("URL", "URL")}}) wechselt.

> [!NOTE]
> Eine URL kann auf HTML-Dateien, Textdateien, Bilder, Textdokumente, Video- und Audiodateien oder andere im Web vorhandene Dinge verweisen.
> Wenn der Webbrowser nicht weiß, wie er die Datei anzeigen oder handhaben soll, wird er Sie fragen, ob Sie die Datei öffnen möchten (in diesem Fall wird die Aufgabe des Öffnens oder Handhabens der Datei an eine geeignete native App auf dem Gerät übergeben) oder ob Sie die Datei herunterladen möchten (in diesem Fall können Sie später damit umgehen).

Ein Beispiel: Die Homepage der BBC enthält viele Links, die nicht nur auf verschiedene Nachrichtenartikel verweisen, sondern auch auf unterschiedliche Bereiche der Website (Navigationsfunktionalität), Anmelde-/Registrierungsseiten (Benutzerwerkzeuge) und mehr.

![Homepage von bbc.co.uk, zeigt viele Nachrichtenartikel und Navigationsmenü-Funktionalitäten](updated-bbc-website.png)

## Anatomie eines Links

Ein grundlegender Link wird erstellt, indem der Text oder andere Inhalte innerhalb eines {{htmlelement("a")}}-Elements umschlossen und das [`href`](/de/docs/Web/HTML/Reference/Elements/a#href)-Attribut verwendet wird, auch bekannt als **Hypertext-Referenz** oder **Ziel**, welches die Webadresse enthält.

```html
<p>
  I'm creating a link to
  <a href="https://www.mozilla.org/en-US/">the Mozilla homepage</a>.
</p>
```

Dies ergibt folgendes Ergebnis:

Ich erstelle einen Link zur [Mozilla-Homepage](https://www.mozilla.org/en-US/).

> [!NOTE]
> Scrimbas [Anker-Tags](https://scrimba.com/learn-html-and-css-c0p/~0a?via=mdn) <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> bieten eine interaktive Demonstration zum Erstellen von Links mit HTML sowie eine Herausforderung, um Ihre eigenen Links zu erstellen.

### Block-Level-Links

Wie bereits erwähnt, kann fast jeder Inhalt zu einem Link gemacht werden, sogar {{Glossary("Block/CSS", "Block-Level-Elemente")}}.
Wenn Sie ein Überschriftenelement zu einem Link machen möchten, dann umschließen Sie es mit einem Anker (`<a>`) Element, wie im folgenden Codeausschnitt gezeigt:

```html
<a href="https://developer.mozilla.org/en-US/">
  <h1>MDN Web Docs</h1>
</a>
<p>
  Documenting web technologies, including CSS, HTML, and JavaScript, since 2005.
</p>
```

Dies macht die Überschrift zu einem Link:
{{EmbedLiveSample('Block-Level-Links', '100%', 150)}}

### Bild-Links

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
{{EmbedLiveSample('Bild-Links', '100%', 150)}}

> [!NOTE]
> Sie werden mehr über die Verwendung von Bildern im Web in einem zukünftigen Artikel erfahren.

### Zusätzliche Informationen mit dem `title`-Attribut hinzufügen

Ein weiteres Attribut, das Sie Ihren Links hinzufügen möchten, ist `title`.
Der Titel enthält zusätzliche Informationen über den Link, z. B. welche Art von Informationen die Seite enthält oder worauf auf der Website zu achten ist.

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

Dies ergibt das folgende Ergebnis, und beim Überfahren des Links wird der Titel als Tooltip angezeigt:

{{EmbedLiveSample('Zusätzliche Informationen mit dem Title-Attribut', '100%', 150)}}

> [!NOTE]
> Ein Linktitel wird nur bei Mausüberhang angezeigt, was bedeutet, dass Personen, die zur Navigation auf Webseiten auf Tastaturkontrollen oder Touchscreens angewiesen sind, Schwierigkeiten haben werden, auf Titelinformationen zuzugreifen.
> Wenn die Informationen eines Titels für die Benutzerfreundlichkeit der Seite wirklich wichtig sind, sollten Sie diese so präsentieren, dass sie für alle Benutzer zugänglich sind, z. B. indem Sie sie in den regulären Text einfügen.

### Erstellen eigener Beispiels-Links

Okay, jetzt sind Sie an der Reihe!

1. Klicken Sie auf **"Play"** im unten stehenden Codeblock, um das Beispiel im MDN Playground zu bearbeiten, oder machen Sie eine Kopie unserer [Getting-Started-Vorlage](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) und kopieren Sie den unten stehenden Code dorthin.
2. Verlinken Sie den Text "Rotes Eichhörnchen" und "Östliches Grauhörnchen" zu den Wikipedia-Seiten, die die jeweiligen Arten beschreiben. Geben Sie jedem Link ein `title`-Attribut, welches dem wissenschaftlichen Namen der Art entspricht.
3. Verlinken Sie den Text "Wikipedia Eichhörnchen Seite" zur Haupt-Wikipedia-Seite für Eichhörnchen.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit dem _Zurücksetzen_-Button im MDN Playground löschen. Wenn Sie wirklich stecken bleiben, können Sie die Lösung unter dem Codeblock anzeigen.

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

## Ein kurzer Überblick über URLs und Pfade

Um Linkziele vollständig zu verstehen, müssen Sie URLs und Dateipfade verstehen. Dieser Abschnitt gibt Ihnen die erforderlichen Informationen, um dies zu erreichen.

Eine URL, oder Uniform Resource Locator, ist eine Zeichenfolge, die definiert, wo sich etwas im Web befindet. Zum Beispiel befindet sich die englische Homepage von Mozilla unter `https://www.mozilla.org/en-US/`.

URLs verwenden Pfade, um Dateien zu finden. Pfade geben an, wo sich die Datei, die Sie interessiert, im Dateisystem befindet. Schauen wir uns ein Beispiel für eine Verzeichnisstruktur an, siehe die unten gezeigte `creating-hyperlinks`-Verzeichnisstruktur:

![Eine einfache Verzeichnisstruktur. Das übergeordnete Verzeichnis heißt creating-hyperlinks und enthält zwei Dateien namens index.html und contacts.html sowie zwei Verzeichnisse namens projects und pdfs, die jeweils eine index.html- und eine project-brief.pdf-Datei enthalten](simple-directory.png)

Das **Root** dieser Verzeichnisstruktur heißt `creating-hyperlinks`. Beim lokalen Arbeiten mit einer Website haben Sie ein Verzeichnis, das die gesamte Seite enthält. Im **Root** befindet sich eine `index.html`-Datei und eine `contacts.html`. In einer echten Website wäre `index.html` unsere Start- oder Zielseite (eine Webseite, die als Zugangspunkt für eine Website oder einen bestimmten Abschnitt einer Website dient).

Es gibt auch zwei Verzeichnisse in unserem Root — `pdfs` und `projects`. Jedes davon hat eine einzige Datei darin — ein PDF (`project-brief.pdf`) und eine `index.html`-Datei. Beachten Sie, dass Sie zwei `index.html`-Dateien in einem Projekt haben können, solange sie sich an verschiedenen Dateisystemstandorten befinden. Die zweite `index.html` wäre vielleicht die Hauptzielseite für projektbezogene Informationen.

Lassen Sie uns einige Beispiele für Links zwischen verschiedenen Dateien in dieser Verzeichnisstruktur ansehen, um unterschiedliche Linktypen zu demonstrieren:

- **Gleiches Verzeichnis**: Wenn Sie einen Hyperlink in `index.html` (dem obersten `index.html`) einfügen möchten, der auf `contacts.html` verweist, geben Sie einfach den Datei-

Namen an, weil er sich im gleichen Verzeichnis wie die aktuelle Datei befindet. Die zu verwendende URL ist `contacts.html`:

```html
<p>
  Want to contact a specific staff member? Find details on our
  <a href="contacts.html">contacts page</a>.
</p>
```

- **In Unterverzeichnisse steigen**: Wenn Sie einen Hyperlink innerhalb von `index.html` (dem obersten `index.html`) einfügen möchten, der auf `projects/index.html` verweist, müssen Sie in das `projects`-Verzeichnis hinabsteigen, bevor Sie die Datei angeben, auf die Sie verlinken möchten. Dies geschieht, indem Sie den Namen des Verzeichnisses angeben, dann einen Schrägstrich, und dann den Namen der Datei. Die zu verwendende URL ist `projects/index.html`:

  ```html
  <p>Visit my <a href="projects/index.html">project homepage</a>.</p>
  ```

- **In übergeordnete Verzeichnisse zurückkehren**: Wenn Sie einen Hyperlink innerhalb von `projects/index.html` einfügen möchten, der auf `pdfs/project-brief.pdf` verweist, müssen Sie eine Verzeichnisebene nach oben gehen und dann in das `pdfs`-Verzeichnis hinabsteigen. Um ein Verzeichnis nach oben zu gehen, verwenden Sie zwei Punkte — `..`. Die zu verwendende URL ist `../pdfs/project-brief.pdf`:

  ```html
  <p>A link to my <a href="../pdfs/project-brief.pdf">project brief</a>.</p>
  ```

> [!NOTE]
> Sie können mehrere Instanzen dieser Funktionen in komplexen URLs kombinieren, wenn erforderlich, zum Beispiel: `../../../complex/path/to/my/file.html`.

### Dokumentfragmente

Es ist möglich, auf einen bestimmten Teil eines HTML-Dokuments zu verlinken, bekannt als ein **Dokumentfragment**, anstatt nur an den Anfang des Dokuments zu verlinken.
Dazu müssen Sie zuerst einem Element, auf das Sie verlinken möchten, ein [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut zuweisen.
Normalerweise macht es Sinn, auf eine bestimmte Überschrift zu verlinken, also würde dies so aussehen:

```html
<h2 id="Mailing_address">Mailing address</h2>
```

Um dann auf diese spezifische `id` zu verlinken, fügen Sie diese am Ende der URL hinzu, vorangestellt von einem Raute-/Pfundzeichen (`#`), zum Beispiel:

```html
<p>
  Want to write us a letter? Use our
  <a href="contacts.html#Mailing_address">mailing address</a>.
</p>
```

Sie können sogar den Dokumentfragmentverweis allein verwenden, um _auf einen anderen Teil des aktuellen Dokuments_ zu verlinken:

```html
<p>
  The <a href="#Mailing_address">company mailing address</a> can be found at the
  bottom of this page.
</p>
```

### Absolute vs. relative URLs

Zwei Begriffe, auf die Sie im Web stoßen werden, sind **absolute URL** und **relative URL**:

**Absolute URL**: Zeigt auf einen Ort, der durch seinen absoluten Standort im Web definiert ist, einschließlich {{Glossary("protocol", "Protokoll")}} und {{Glossary("domain_name", "Domainname")}}.
Zum Beispiel, wenn eine `index.html`-Seite in ein Verzeichnis namens `projects` hochgeladen wird, das im **Root** eines Webservers liegt, und die Domain der Website lautet `https://www.example.com`, wäre die Seite verfügbar unter `https://www.example.com/projects/index.html` (oder sogar nur `https://www.example.com/projects/`, da die meisten Webserver einfach nach einer Zielseite wie `index.html` suchen, um sie zu laden, wenn sie nicht in der URL angegeben ist).

Eine absolute URL wird immer auf denselben Standort verweisen, egal wo sie verwendet wird.

**Relative URL**: Zeigt auf einen Ort, der _relativ_ zu der Datei ist, die Sie verlinken, ähnlich wie das, was wir im vorherigen Abschnitt angesehen haben.
Zum Beispiel, wenn wir von unserer Beispieldatei unter `https://www.example.com/projects/index.html` zu einer PDF-Datei im gleichen Verzeichnis verlinken wollten, wäre die URL einfach der Dateiname — `project-brief.pdf` — keine zusätzlichen Informationen nötig. Wenn das PDF in einem Unterverzeichnis innerhalb von `projects` namens `pdfs` verfügbar wäre, wäre der relative Link `pdfs/project-brief.pdf` (die entsprechende absolute URL wäre `https://www.example.com/projects/pdfs/project-brief.pdf`).

Eine relative URL wird auf verschiedene Orte verweisen, abhängig von dem tatsächlichen Standort der Datei, von der Sie sich beziehen — zum Beispiel, wenn wir unsere `index.html`-Datei aus dem `projects`-Verzeichnis heraus und in das **Root** der Website (die oberste Ebene, in keinem Verzeichnis) verschoben hätten, würde der relative URL-Link `pdfs/project-brief.pdf` darin nun auf eine Datei unter `https://www.example.com/pdfs/project-brief.pdf` verweisen, nicht auf eine Datei unter `https://www.example.com/projects/pdfs/project-brief.pdf`.

Natürlich ändern sich der Standort der `project-brief.pdf`-Datei und des `pdfs`-Ordners nicht plötzlich, nur weil Sie die `index.html`-Datei verschoben haben — dies würde Ihren Link auf den falschen Ort verweisen lassen, sodass er nicht funktioniert, wenn darauf geklickt wird. Sie müssen vorsichtig sein!

## Best Practices für Links

Es gibt einige bewährte Methoden, die beim Schreiben von Links beachtet werden sollten. Schauen wir uns diese jetzt an.

### Verwenden Sie klare Linktexte

Es ist einfach, Links auf Ihrer Seite einzufügen. Das reicht jedoch nicht. Wir müssen unsere Links für alle Leser _zugänglich_ machen, unabhängig von ihrem aktuellen Kontext und ihren bevorzugten Hilfsmitteln. Zum Beispiel:

- Benutzer von Bildschirmlesern springen gerne von Link zu Link auf der Seite und lesen Links aus dem Kontext heraus.
- Suchmaschinen verwenden Linktexte, um Zieldateien zu indexieren. Es ist daher eine gute Idee, Schlüsselwörter in Ihren Linktext aufzunehmen, um effektiv zu beschreiben, was verlinkt wird.
- Visuelle Leser überfliegen die Seite, anstatt jedes Wort zu lesen, und ihre Augen werden zu auffälligen Seitenmerkmalen wie Links hingezogen. Sie finden beschreibende Linktexte nützlich.

Lassen Sie uns ein spezifisches Beispiel betrachten:

**Guter** Linktext: [Firefox herunterladen](https://www.firefox.com/en-US/?redirect_source=firefox-com)

```html example-good
<p><a href="https://www.firefox.com/en-US/">Download Firefox</a></p>
```

<!-- markdownlint-disable descriptive-link-text -->

**Schlechter** Linktext: [Hier klicken](https://www.firefox.com/en-US/), um Firefox herunterzuladen

```html example-bad
<p>
  <a href="https://www.firefox.com/en-US/">Click here</a> to download Firefox
</p>
```

<!-- markdownlint-enable descriptive-link-text -->

Andere Tipps:

- Wiederholen Sie nicht die URL als Teil des Linktextes — URLs sehen hässlich aus und klingen noch hässlicher, wenn ein Bildschirmleser sie Buchstabe für Buchstabe liest.
- Sagen Sie nicht "Link" oder "verlinkt zu" im Linktext — das ist nur Lärm. Bildschirmleser informieren die Benutzer darüber, dass ein Link besteht.
  Auch visuelle Benutzer wissen, dass es einen Link gibt, da Links normalerweise in einer anderen Farbe und unterstrichen dargestellt werden (diese Konvention sollte im Allgemeinen nicht gebrochen werden, da Benutzer daran gewöhnt sind).
- Halten Sie Ihren Linktext so kurz wie möglich — das ist hilfreich, weil Bildschirmleser den gesamten Linktext interpretieren müssen.
- Minimieren Sie Instanzen, in denen mehrfach derselbe Text auf verschiedene Orte verlinkt wird.
  Dies kann Probleme für Benutzer von Bildschirmlesern verursachen, wenn es eine Liste von Links ohne Kontext gibt, die als "hier klicken", "hier klicken", "hier klicken" bezeichnet werden.

### Verlinken zu nicht-HTML-Ressourcen — klare Wegweiser hinterlassen

Beim Verlinken zu einer Ressource, die nicht auf der aktuellen Seite als "normale Navigation" geöffnet wird, sollten Sie im Linktext klar angeben, was passieren wird. Zum Beispiel, wenn Sie eine Ressource herunterladen oder streamen, oder wenn der Link ein Pop-up öffnen oder einen anderen möglicherweise unerwarteten Effekt auslösen wird, sollte dies im Text angegeben werden. Dies ist wichtig für Benutzer mit niedriger Bandbreite, die möglicherweise vermeiden möchten, Assets mit mehreren Megabyte herunterzuladen. Es hilft auch, Erwartungen für Benutzer von Bildschirmlesern zu setzen, die möglicherweise nicht wissen, was sonst passiert.

Lassen Sie uns einige Beispiele ansehen, um zu sehen, welche Art von Text hier verwendet werden kann:

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

### Verwenden Sie das Download-Attribut beim Verlinken auf einen Download

Wenn Sie auf eine Ressource verlinken, die eher heruntergeladen als im Browser geöffnet werden soll, können Sie das `download`-Attribut verwenden, um einen standardmäßigen Speichernamen bereitzustellen. Hier ist ein Beispiel mit einem Download-Link zur neuesten Windows-Version von Firefox:

```html
<a
  href="https://download.mozilla.org/?product=firefox-latest-ssl&os=win64&lang=en-US"
  download="firefox-latest-64bit-installer.exe">
  Download Latest Firefox for Windows (64-bit) (English, US)
</a>
```

### Wann man Links in einem neuen Tab öffnet

Links öffnen standardmäßig im selben Tab wie die Seite, auf der sie sich befinden, was es dem Benutzer ermöglicht, mit der Zurück-Schaltfläche des Browsers zur vorherigen Seite zu navigieren. Viele Websites (einschließlich MDN) wählen jedoch, bestimmte Links, insbesondere externe Links, in einem neuen Tab zu öffnen. Dies wird durch Setzen des [`target`](/de/docs/Web/HTML/Reference/Elements/a#target)-Attributs auf `"_blank"` erreicht.

```html
Firefox is developed by the
<a href="https://www.mozilla.org/en-US/" target="_blank">Mozilla Foundation</a>.
```

Ob Links in einem neuen Tab geöffnet werden sollten oder nicht, sollte eine bewusste Entscheidung sein, basierend auf Überlegungen zur Benutzererfahrung. Hier sind einige Dinge, über die man nachdenken sollte:

- Links, die in einem neuen Tab geöffnet werden, präsentieren die beiden Dokumente gleichzeitig, was für ein "paralleles" Navigationserlebnis nützlich ist. Auf der anderen Seite sind Links, die im gleichen Tab geöffnet werden, eher eine Fortsetzung der aktuellen Seite.
- Links, die in einem neuen Tab geöffnet werden, können für Benutzer verwirrend sein, die daran gewöhnt sind, die Zurück-Schaltfläche zu verwenden.
- Auch wenn Links standardmäßig im gleichen Tab geöffnet werden, können Benutzer diese immer noch in einem neuen Tab öffnen, indem sie Tastaturkürzel oder Kontextmenüoptionen verwenden. Auf der anderen Seite sind Links, die in einem neuen Tab geöffnet werden, schwer im gleichen Tab zu öffnen.
- Benutzer von Bildschirmlesern können durch Links, die in einem neuen Tab öffnen, verwirrt werden, da sie möglicherweise nicht realisieren, dass der neue Tab geöffnet wurde, und den Kontext ihrer Position auf der Seite verlieren.

Ein häufiger Ansatz ist, externe Links in neuen Tabs und interne Links im gleichen Tab zu öffnen.
Einige Designer bevorzugen, alle Links im gleichen Tab zu öffnen.
Wenn Sie Links in neuen Tabs öffnen, wird empfohlen, Hinweise für diese Links anzubieten, wie ein Symbol neben dem Linktext.

## Erstellen eines Navigationsmenüs

Für diese Übung möchten wir, dass Sie einige Seiten mit einem Navigationsmenü verbinden, um eine mehrseitige Website zu erstellen.

Dies ist eine häufige Art, wie eine Website erstellt wird — die gleiche Seitenstruktur wird auf jeder Seite verwendet, einschließlich desselben Navigationsmenüs, sodass beim Klicken auf Verknüpfungen der Eindruck entsteht, dass Sie am gleichen Ort bleiben, und verschiedene Inhalte aufgerufen werden.

Sie müssen lokale Kopien der folgenden vier Seiten machen, alle im gleichen Verzeichnis. Für eine vollständige Dateiliste, siehe das [navigation-menu-start](https://github.com/mdn/learning-area/tree/main/html/introduction-to-html/navigation-menu-start)-Verzeichnis:

- [index.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/index.html)
- [projects.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/projects.html)
- [pictures.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/pictures.html)
- [social.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/social.html)

Sie sollten:

1. Fügen Sie an der angegebenen Stelle auf einer Seite eine ungeordnete Liste hinzu, die die Namen der verlinkenden Seiten enthält.
   Ein Navigationsmenü ist normalerweise einfach eine Liste von Links, also ist das semantisch in Ordnung.
2. Ändern Sie jeden Seitennamen in einen Link zu dieser Seite.
3. Kopieren Sie das Navigationsmenü auf jede Seite.
4. Entfernen Sie auf jeder Seite nur den Link zu derselben Seite — es ist verwirrend und unnötig, dass eine Seite einen Link zu sich selbst enthält.
   Außerdem stellt das Fehlen eines Links eine gute visuelle Erinnerung daran dar, auf welcher Seite Sie sich gerade befinden.

Das fertige Beispiel sollte wie die folgende Seite aussehen:

![Ein Beispiel für ein einfaches HTML-Navigationsmenü mit Home-, Bilder-, Projekte- und Sozial-Menüelementen](navigation-example.png)

> [!NOTE]
> Wenn Sie stecken bleiben oder nicht sicher sind, ob Sie es richtig gemacht haben, können Sie das [navigation-menu-marked-up](https://github.com/mdn/learning-area/tree/main/html/introduction-to-html/navigation-menu-marked-up)-Verzeichnis überprüfen, um die richtige Antwort zu sehen.

## E-Mail-Links

Es ist möglich, Links oder Schaltflächen zu erstellen, die beim Klicken eine neue ausgehende E-Mail-Nachricht öffnen, anstatt zu einer Ressource oder Seite zu verlinken.
Dies wird mit dem {{HTMLElement("a")}}-Element und dem `mailto:` URL-Schema durchgeführt.

In seiner einfachsten und am häufigsten verwendeten Form zeigt ein `mailto:`-Link die E-Mail-Adresse des vorgesehenen Empfängers an. Zum Beispiel:

```html
<a href="mailto:nowhere@mozilla.org">Send email to nowhere</a>
```

Dies ergibt einen Link, der so aussieht: [E-Mail an niemand senden](mailto:nowhere@mozilla.org).

Tatsächlich ist die E-Mail-Adresse optional. Wenn Sie diese weglassen und Ihr [`href`](/de/docs/Web/HTML/Reference/Elements/a#href) "mailto:" ist, wird ein neues ausgehendes E-Mail-Fenster vom E-Mail-Client des Benutzers geöffnet, ohne dass eine Zieladresse vorhanden ist.
Dies wird oft als "Teilen"-Links verwendet, die Benutzer klicken können, um eine E-Mail an eine Adresse ihrer Wahl zu senden.

### Details angeben

Zusätzlich zur E-Mail-Adresse können Sie weitere Informationen angeben. Tatsächlich können alle Standard-Mail-Headerfelder zur `mailto`-URL hinzugefügt werden, die Sie angeben.
Die am häufigsten verwendeten dieser Felder sind "subject", "cc" und "body" (was kein echtes Headerfeld ist, aber es Ihnen ermöglicht, eine kurze Inhaltsnachricht für die neue E-Mail anzugeben).
Jedes Feld und sein Wert wird als Abfrage angegeben.

Hier ist ein Beispiel, das cc, bcc, Betreff und Body beinhaltet:

```html
<a
  href="mailto:nowhere@mozilla.org?cc=name2@rapidtables.com&bcc=name3@rapidtables.com&subject=The%20subject%20of%20the%20email&body=The%20body%20of%20the%20email">
  Send mail with cc, bcc, subject and body
</a>
```

> [!NOTE]
> Die Werte jedes Feldes müssen URL-codiert mit nicht druckbaren Zeichen (unsichtbare Zeichen wie Tabs, Wagenrückläufe und Seitenumbrüche) und Leerzeichen {{Glossary("Percent-encoding", "prozentsignalisiert")}} werden.
> Beachten Sie auch die Verwendung des Fragezeichens (`?`), um die Haupt-URL von den Feldwerten zu trennen, und der Kaufmanns-Unds (&), um jedes Feld in der `mailto:`-URL zu trennen.
> Dies ist eine Standard-URL-Abfrage-Notation.
> Lesen Sie [Die GET-Methode](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data#the_get_method), um zu verstehen, wofür URL-Abfragenotation häufiger verwendet wird.

Hier sind einige andere Beispiel-`mailto`-URLs:

- <mailto:>
- <mailto:nowhere@mozilla.org>
- <mailto:nowhere@mozilla.org,nobody@mozilla.org>
- <mailto:nowhere@mozilla.org?cc=nobody@mozilla.org>
- <mailto:nowhere@mozilla.org?cc=nobody@mozilla.org&subject=Dies%20ist%20das%20Thema>

## Zusammenfassung

Das war's vorerst mit den Links! Sie werden später im Kurs zu Links zurückkehren, wenn Sie beginnen, diese zu gestalten. Als nächstes geben wir Ihnen einige Tests, die Sie verwenden können, um zu überprüfen, wie gut Sie die Informationen, die wir zu Links bereitgestellt haben, verstanden und behalten haben.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Structuring_documents", "Learn_web_development/Core/Structuring_content/Test_your_skills/Links", "Learn_web_development/Core/Structuring_content")}}
