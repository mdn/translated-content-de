---
title: Erstellen von Links
slug: Learn_web_development/Core/Structuring_content/Creating_links
l10n:
  sourceCommit: 09877330004e55244a9e8eee2ca04a750970f72d
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Advanced_text_features", "Learn_web_development/Core/Structuring_content/Marking_up_a_letter", "Learn_web_development/Core/Structuring_content")}}

Links (auch bekannt als Hyperlinks) sind wirklich wichtig — sie sind das, was das Web _zu einem Netz_ macht. Dieser Artikel zeigt die erforderliche Syntax, um einen Link zu erstellen, und diskutiert bewährte Methoden für Links.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML, wie im
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        > behandelt. Text-basierte Semantik wie <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
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
          <li>Verstehen, warum Links die Grundfunktion des Webs sind. Es gibt kein Web ohne Links.</li>
          <li>Das <code>href</code>-Attribut.</li>
          <li>Absolute und relative Pfade und wann sie verwendet werden.</li>
          <li>Pfad-Syntax im Detail — Schrägstriche, Einzelpunkt und Doppelpunkt.</li>
          <li>Link-Zustände und warum sie wichtig sind — <code>:hover</code>, <code>:focus</code>, <code>:visited</code> und <code>:active</code>.</li>
          <li>Inline- und Block-Level-Links.</li>
          <li>Das Verständnis der Vorteile durch das Schreiben von gutem Link-Text, wie bessere Barrierefreiheit für Screenreader-Nutzer und potenziell positive SEO-Effekte.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein Hyperlink?

Hyperlinks sind eine der aufregendsten Innovationen, die das Web zu bieten hat. Sie sind seit Beginn des Webs eine Funktion und das, was das Web _zu einem Netz_ macht. Hyperlinks erlauben es uns, Dokumente mit anderen Dokumenten oder Ressourcen zu verknüpfen, auf bestimmte Teile von Dokumenten zu verlinken oder Apps über eine Webadresse verfügbar zu machen. Fast jeder Webinhalt kann in einen Link umgewandelt werden, sodass beim Anklicken oder anderweitigen Aktivieren der Webbrowser zu einer anderen Webadresse ({{Glossary("URL", "URL")}}) navigiert.

> [!NOTE]
> Eine URL kann auf HTML-Dateien, Textdateien, Bilder, Textdokumente, Video- und Audiodateien oder alles andere, was im Web existiert, verweisen. Wenn der Webbrowser nicht weiß, wie er die Datei anzeigen oder verarbeiten soll, fragt er, ob Sie die Datei öffnen möchten (in diesem Fall wird das Öffnen oder Handhaben der Datei an eine geeignete native App auf dem Gerät übergeben) oder die Datei herunterladen möchten (in diesem Fall können Sie sich später damit befassen).

Zum Beispiel enthält die Startseite der BBC viele Links, die nicht nur auf mehrere Nachrichtenartikel, sondern auch auf verschiedene Bereiche der Website (Navigationsfunktion), Anmelde-/Registrierungsseiten (Nutzertools) und mehr verweisen.

![Startseite von bbc.co.uk, die viele Nachrichtenartikel und eine Navigationsmenü-Funktionalität zeigt](updated-bbc-website.png)

## Anatomie eines Links

Ein grundlegender Link wird erstellt, indem der Text oder andere Inhalt in ein {{htmlelement("a")}}-Element eingewickelt und das [`href`](/de/docs/Web/HTML/Reference/Elements/a#href)-Attribut verwendet wird, auch bekannt als **Hypertext-Referenz** oder **Ziel**, das die Webadresse enthält.

```html
<p>
  I'm creating a link to
  <a href="https://www.mozilla.org/en-US/">the Mozilla homepage</a>.
</p>
```

Dies gibt uns folgendes Ergebnis:

Ich erstelle einen Link zur [Mozilla-Startseite](https://www.mozilla.org/en-US/).

> [!CALLOUT]
>
> **Probieren Sie es aus**
>
> Das Scrim von Scrimba [Anchor tags](https://scrimba.com/learn-html-and-css-c0p/~0a?via=mdn) <sup>[_MDN learning partner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> bietet eine interaktive Demonstration, wie man Links mit HTML erstellt, sowie eine Herausforderung, um Sie dazu zu bringen, Ihre eigenen Links zu erstellen.

### Block-Level-Links

Wie bereits erwähnt, kann fast jeder Inhalt in einen Link umgewandelt werden, sogar {{Glossary("Block/CSS", "Block-Level-Elemente")}}. Wenn Sie ein Überschriftenelement zu einem Link machen möchten, dann wickeln Sie es in ein Anker-(`<a>`)-Element ein, wie im folgenden Code-Snippet gezeigt:

```html
<a href="https://developer.mozilla.org/en-US/">
  <h1>MDN Web Docs</h1>
</a>
<p>
  Documenting web technologies, including CSS, HTML, and JavaScript, since 2005.
</p>
```

Dies verwandelt die Überschrift in einen Link:
{{EmbedLiveSample('Block-Level-Links', '100%', 150)}}

### Bild-Links

Um ein Bild in einen Link zu verwandeln, umwickeln Sie das {{htmlelement("img")}}-Element mit einem {{htmlelement("a")}}-Element. Das untenstehende Beispiel verwendet einen relativen Pfad, um auf eine lokal gespeicherte SVG-Bilddatei zu verweisen.

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
> Sie werden in einem zukünftigen Artikel mehr über die Verwendung von Bildern im Web erfahren.

### Hinzufügen von unterstützenden Informationen mit dem title-Attribut

Ein weiteres Attribut, das Sie möglicherweise zu Ihren Links hinzufügen möchten, ist `title`. Der Titel enthält zusätzliche Informationen über den Link, wie z.B. welche Art von Informationen die Seite enthält oder auf andere Aspekte der Website hinzuweisen, die beachtet werden sollten.

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

Dies ergibt das folgende Ergebnis und das Überfahren des Links mit der Maus zeigt den Titel als Tooltip an:

{{EmbedLiveSample('Hinzufügen von unterstützenden Informationen mit dem title-Attribut', '100%', 150)}}

> [!NOTE]
> Ein Linktitel wird nur beim Überfahren mit der Maus angezeigt, was bedeutet, dass Personen, die auf Tastatursteuerungen oder Touchscreens angewiesen sind, um Webseiten zu navigieren, Schwierigkeiten haben werden, Titelinformationen abzurufen. Wenn die Informationen eines Titels tatsächlich wichtig für die Benutzerfreundlichkeit der Seite sind, sollten Sie sie auf eine Weise präsentieren, die für alle Benutzer zugänglich ist, zum Beispiel, indem Sie sie in den regulären Text integrieren.

### Erstellen Ihrer eigenen Beispiels-Links

OK, jetzt sind Sie an der Reihe!

1. Klicken Sie auf **„Abspielen“** im Code-Block unten, um das Beispiel im MDN Playground zu bearbeiten, oder machen Sie eine Kopie unserer [Einstiegsvorlage](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html) und fügen Sie den untenstehenden Code dort ein.
2. Verlinken Sie den Text "Europäisches Eichhörnchen" und "Grauhörnchen" mit Wikipedia-Seiten, die die entsprechenden Arten beschreiben. Geben Sie jedem Link ein `title`-Attribut, das dem wissenschaftlichen Namen der Art entspricht.
3. Verlinken Sie den Text "Wikipedia Eichhörnchen-Seite" mit der Hauptseite von Wikipedia für Eichhörnchen.

Wenn Sie einen Fehler machen, können Sie Ihre Arbeit mit der _Zurücksetzen_-Schaltfläche im MDN Playground löschen. Wenn Sie wirklich feststecken, können Sie die Lösung unter dem Code-Block ansehen.

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

Um Linkziele vollständig zu verstehen, müssen Sie URLs und Datei-Pfade verstehen. Dieser Abschnitt gibt Ihnen die Informationen, die Sie benötigen, um dies zu erreichen.

Ein URL oder Uniform Resource Locator ist eine Textzeichenfolge, die definiert, wo sich etwas im Web befindet. Zum Beispiel befindet sich die englische Startseite von Mozilla unter `https://www.mozilla.org/en-US/`.

URLs verwenden Pfade, um Dateien zu finden. Pfade geben an, wo sich die Datei, die Sie interessiert, im Dateisystem befindet. Schauen wir uns ein Beispiel einer Verzeichnishierarchie an, siehe die Verzeichnisstruktur `creating-hyperlinks` unten:

![Eine einfache Verzeichnisstruktur. Das übergeordnete Verzeichnis heißt creating-hyperlinks und enthält zwei Dateien namens index.html und contacts.html sowie zwei Verzeichnisse namens projects und pdfs, die jeweils eine index.html-Datei bzw. eine project-brief.pdf-Datei enthalten](simple-directory.png)

Der **Root** dieser Verzeichnisstruktur wird `creating-hyperlinks` genannt. Wenn Sie lokal mit einer Website arbeiten, haben Sie ein Verzeichnis, das die gesamte Website enthält. Im **Root** haben wir eine `index.html`-Datei und eine `contacts.html`. In einer echten Website wäre `index.html` unsere Start- oder Landingpage (eine Webseite, die als Einstiegspunkt für eine Website oder einen bestimmten Abschnitt einer Website dient).

Es gibt auch zwei Verzeichnisse innerhalb unseres Root-Verzeichnisses — `pdfs` und `projects`. Diese haben jeweils eine einzelne Datei innen — ein PDF (`project-brief.pdf`) und eine `index.html`-Datei. Beachten Sie, dass Sie zwei `index.html`-Dateien in einem Projekt haben können, solange sie sich an verschiedenen Speicherorten im Dateisystem befinden. Die zweite `index.html` wäre möglicherweise die Haupt-Landingpage für projektbezogene Informationen.

Schauen wir uns einige Beispiele für Links zwischen verschiedenen Dateien in dieser Verzeichnisstruktur an, um unterschiedliche Linktypen zu demonstrieren:

- **Gleiches Verzeichnis**: Wenn Sie einen Hyperlink in `index.html` (der obersten `index.html`) einfügen möchten, der auf `contacts.html` verweist, würden Sie den Dateinamen angeben, den Sie verlinken möchten, da er sich im gleichen Verzeichnis wie die aktuelle Datei befindet. Die URL, die Sie verwenden würden, ist `contacts.html`:

  ```html
  <p>
    Want to contact a specific staff member? Find details on our
    <a href="contacts.html">contacts page</a>.
  </p>
  ```

- **In Unterverzeichnisse wechseln**: Wenn Sie einen Hyperlink in `index.html` (der obersten `index.html`) einfügen möchten, der auf `projects/index.html` verweist, müssen Sie in das `projects`-Verzeichnis gehen, bevor Sie die Datei angeben, auf die Sie verlinken möchten. Dies geschieht, indem Sie den Namen des Verzeichnisses angeben, dann einen Schrägstrich, dann den Namen der Datei. Die URL, die Sie verwenden würden, ist `projects/index.html`:

  ```html
  <p>Visit my <a href="projects/index.html">project homepage</a>.</p>
  ```

- **Zurück in übergeordnete Verzeichnisse wechseln**: Wenn Sie einen Hyperlink in `projects/index.html` einfügen möchten, der auf `pdfs/project-brief.pdf` verweist, müssten Sie eine Verzeichnisebene nach oben gehen und dann wieder in das `pdfs`-Verzeichnis hinuntergehen. Um ein Verzeichnis nach oben zu gehen, verwenden Sie zwei Punkte — `..` — also wäre die URL, die Sie verwenden würden, `../pdfs/project-brief.pdf`:

  ```html
  <p>A link to my <a href="../pdfs/project-brief.pdf">project brief</a>.</p>
  ```

> [!NOTE]
> Sie können mehrere Instanzen dieser Funktionen kombinieren, um bei Bedarf komplexe URLs zu erstellen, z. B.: `../../../complex/path/to/my/file.html`.

### Dokumentfragmente

Es ist möglich, auf einen bestimmten Teil eines HTML-Dokuments zu verlinken, bekannt als **Dokumentfragment**, anstatt nur auf den Anfang des Dokuments zu verlinken. Dazu müssen Sie zunächst einem Element, auf das Sie verlinken möchten, ein [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut zuweisen. Normalerweise macht es Sinn, auf eine bestimmte Überschrift zu verlinken, sodass dies folgendermaßen aussehen würde:

```html
<h2 id="Mailing_address">Mailing address</h2>
```

Dann, um auf dieses spezifische `id` zu verlinken, würden Sie es am Ende der URL einfügen, vorangestellt von einem Hash-Zeichen (`#`), zum Beispiel:

```html
<p>
  Want to write us a letter? Use our
  <a href="contacts.html#Mailing_address">mailing address</a>.
</p>
```

Sie können sogar die Dokumentfragmentreferenz allein verwenden, um auf _einen anderen Teil des aktuellen Dokuments_ zu verlinken:

```html
<p>
  The <a href="#Mailing_address">company mailing address</a> can be found at the
  bottom of this page.
</p>
```

### Absolute versus relative URLs

Zwei Begriffe, denen Sie im Web begegnen werden, sind **Absolute URL** und **Relative URL:**

**Absolute URL**: Verweist auf einen Standort, der durch seinen absoluten Standort im Web definiert ist, einschließlich {{Glossary("protocol", "Protokoll")}} und {{Glossary("domain_name", "Domainname")}}. Zum Beispiel, wenn eine `index.html`-Seite in ein Verzeichnis namens `projects` hochgeladen wird, das sich im **Root** eines Webservers befindet, und die Domain der Website `https://www.example.com` ist, wäre die Seite unter `https://www.example.com/projects/index.html` verfügbar (oder sogar einfach nur `https://www.example.com/projects/`, da die meisten Webserver nach einer Landingpage wie `index.html` suchen, wenn sie in der URL nicht angegeben ist).

Eine absolute URL verweist immer auf denselben Standort, egal wo sie verwendet wird.

**Relative URL**: Verweist auf einen Standort, der relativ zu der Datei, von der Sie verlinken, ist, mehr wie wir es im vorherigen Abschnitt betrachtet haben. Zum Beispiel, wenn wir von unserer Beispieldatei unter `https://www.example.com/projects/index.html` zu einer PDF-Datei im gleichen Verzeichnis verlinken wollten, wäre die URL nur der Dateiname — `project-brief.pdf` — keine zusätzlichen Informationen erforderlich. Wenn die PDF in einem Unterverzeichnis innerhalb von `projects` namens `pdfs` verfügbar war, wäre der relative Link `pdfs/project-brief.pdf` (die entsprechende absolute URL wäre `https://www.example.com/projects/pdfs/project-brief.pdf`).

Eine relative URL verweist auf unterschiedliche Orte, abhängig vom tatsächlichen Standort der Datei, von der Sie aus verweist — zum Beispiel, wenn wir unsere `index.html`-Datei aus dem `projects`-Verzeichnis heraus in das **Root** der Website verschieben würden (die oberste Ebene, nicht in einem Verzeichnis), würde der relative URL-Link `pdfs/project-brief.pdf` darin nun auf eine Datei unter `https://www.example.com/pdfs/project-brief.pdf` verweisen, nicht auf eine Datei unter `https://www.example.com/projects/pdfs/project-brief.pdf`.

Natürlich wird sich der Standort der Datei `project-brief.pdf` und des Verzeichnisses `pdfs` nicht plötzlich ändern, weil Sie die Datei `index.html` verschoben haben — dies würde Ihren Link an den falschen Ort verweisen, sodass er beim Anklicken nicht funktionieren würde. Sie müssen vorsichtig sein!

## Bewährte Methoden für Links

Es gibt einige bewährte Methoden zu befolgen, wenn man Links schreibt. Schauen wir uns diese jetzt an.

### Verwenden Sie klaren Linktext

Es ist einfach, Links auf Ihrer Seite zu platzieren. Das ist nicht genug. Wir müssen unsere Links für alle Leser, unabhängig von ihrem aktuellen Kontext und welchen Tools sie bevorzugen, zugänglich machen. Zum Beispiel:

- Screenreader-Nutzer springen gerne von Link zu Link auf der Seite und lesen Links aus dem Kontext.
- Suchmaschinen verwenden Linktext, um Zieldateien zu indexieren, daher ist es eine gute Idee, Schlüsselwörter in Ihren Linktext aufzunehmen, um effektiv zu beschreiben, worauf verlinkt wird.
- Visuelle Leser überfliegen die Seite, anstatt jedes Wort zu lesen, und ihre Augen werden zu Seitenmerkmalen hingezogen, die hervorstechen, wie Links. Sie werden beschreibenden Linktext nützlich finden.

Schauen wir uns ein konkretes Beispiel an:

**Guter** Linktext: [Firefox herunterladen](https://www.mozilla.org/en-US/firefox/new/?redirect_source=firefox-com)

```html example-good
<p><a href="https://www.mozilla.org/en-US/firefox/new/">Download Firefox</a></p>
```

<!-- markdownlint-disable descriptive-link-text -->

**Schlechter** Linktext: [Klicken Sie hier](https://www.mozilla.org/en-US/firefox/new/) um Firefox herunterzuladen

```html example-bad
<p>
  <a href="https://www.mozilla.org/en-US/firefox/new/">Click here</a> to
  download Firefox
</p>
```

<!-- markdownlint-enable descriptive-link-text -->

Weitere Tipps:

- Wiederholen Sie nicht die URL als Teil des Linktexts — URLs sehen hässlich aus und klingen noch hässlicher, wenn ein Screenreader sie Buchstabe für Buchstabe vorliest.
- Sagen Sie nicht „Link“ oder „verweist auf“ im Linktext — das ist nur Lärm. Screenreader sagen den Menschen, dass es einen Link gibt. Visuelle Benutzer werden auch wissen, dass es einen Link gibt, weil Links normalerweise in einer anderen Farbe gestylt und unterstrichen werden (diese Konvention sollte generell nicht gebrochen werden, da Benutzer daran gewöhnt sind).
- Halten Sie Ihren Linktext so kurz wie möglich — dies ist hilfreich, da Screenreader den gesamten Linktext interpretieren müssen.
- Minimieren Sie Fälle, in denen mehrere Kopien desselben Texts auf verschiedene Orte verlinkt sind. Dies kann Probleme für Screenreader-Nutzer verursachen, wenn es eine Liste von Links aus dem Kontext gibt, die als „hier klicken“, „hier klicken“, „hier klicken“ bezeichnet sind.

### Verlinken auf nicht-HTML-Ressourcen — eindeutige Wegweiser hinterlassen

Wenn Sie auf eine Ressource verlinken, die nicht auf der aktuellen Seite als „normale Navigation“ geöffnet wird, sollten Sie klare Formulierungen im Linktext darüber hinzufügen, was passieren wird. Zum Beispiel, wenn Sie eine Ressource herunterladen oder streamen, oder wenn der Link ein Popup öffnet oder einen anderen potenziell unerwarteten Effekt auslöst, sollte dies im Text angegeben werden. Das ist wichtig für Nutzer mit niedrigen Bandbreitenverbindungen, die möglicherweise vermeiden möchten, Assets von mehreren Megabyte herunterzuladen. Es hilft auch, Erwartungen für Screenreader-Nutzer zu setzen, die sonst möglicherweise nicht wissen, was passiert.

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

### Verwenden Sie das download-Attribut beim Verlinken auf einen Download

Wenn Sie auf eine Ressource verlinken, die heruntergeladen anstatt im Browser geöffnet werden soll, können Sie das `download`-Attribut verwenden, um einen standardmäßigen Speichernamen bereitzustellen. Hier ist ein Beispiel mit einem Download-Link zur neuesten Windows-Version von Firefox:

```html
<a
  href="https://download.mozilla.org/?product=firefox-latest-ssl&os=win64&lang=en-US"
  download="firefox-latest-64bit-installer.exe">
  Download Latest Firefox for Windows (64-bit) (English, US)
</a>
```

### Wann Links in einem neuen Tab geöffnet werden sollten

Links öffnen standardmäßig im selben Tab wie die Seite, auf der sie sich befinden, was es dem Benutzer ermöglicht, mit der Rücktaste des Browsers zur vorherigen Seite zu navigieren. Viele Sites (einschließlich MDN) entscheiden sich jedoch, bestimmte Links, insbesondere externe Links, in einem neuen Tab zu öffnen. Dies geschieht, indem das [`target`](/de/docs/Web/HTML/Reference/Elements/a#target)-Attribut auf `"_blank"` gesetzt wird.

```html
Firefox is developed by the
<a href="https://www.mozilla.org/en-US/" target="_blank">Mozilla Foundation</a>.
```

Ob Links in einem neuenTab geöffnet werden sollten, sollte eine bewusste Entscheidung sein, basierend auf Designüberlegungen zur Benutzererfahrung. Hier sind einige Dinge, über die Sie nachdenken sollten:

- Das Öffnen von Links in einem neuen Tab präsentiert die beiden Dokumente gleichzeitig, was für ein „paralleles“ Navigationserlebnis nützlich ist. Andererseits sind Links, die im selben Tab geöffnet werden, eher eine Fortsetzung der aktuellen Seite.
- Das Öffnen von Links in einem neuen Tab kann für Benutzer verwirrend sein, die daran gewöhnt sind, die Rücktaste zu verwenden.
- Auch wenn Links standardmäßig im selben Tab geöffnet werden, können Benutzer sie dennoch in einem neuen Tab öffnen, indem sie Tastenkombinationen oder Kontextmenüoptionen verwenden. Andererseits sind Links, die in einem neuen Tab geöffnet werden, schwer im gleichen Tab zu öffnen.
- Screenreader-Nutzer könnten durch Links, die in einem neuen Tab geöffnet werden, verwirrt werden, da sie möglicherweise nicht bemerken, dass sich der neue Tab geöffnet hat, und den Kontext bezüglich ihrer Position auf der Seite verlieren könnten.

Ein gängiger Ansatz ist, externe Links in neuen Tabs zu öffnen und interne Links im selben Tab. Einige Designer bevorzugen es, alle Links im selben Tab zu öffnen. Wenn Sie Links in neuen Tabs öffnen, wird empfohlen, dass Sie Hinweise für diese Links bereitstellen, wie ein Symbol neben dem Linktext.

## Erstellen eines Navigationsmenüs

Für diese Übung möchten wir, dass Sie einige Seiten mit einem Navigationsmenü verlinken, um eine mehrseitige Website zu erstellen. Dies ist eine der häufig verwendeten Methoden zur Erstellung einer Website — dieselbe Seitenstruktur wird auf jeder Seite verwendet, einschließlich desselben Navigationsmenüs, sodass beim Klicken auf Links der Eindruck entsteht, dass Sie am selben Ort bleiben und andere Inhalte angezeigt werden.

Sie müssen lokale Kopien der folgenden vier Seiten erstellen, alle im selben Verzeichnis. Für eine vollständige Dateiliste siehe das Verzeichnis [navigation-menu-start](https://github.com/mdn/learning-area/tree/main/html/introduction-to-html/navigation-menu-start):

- [index.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/index.html)
- [projects.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/projects.html)
- [pictures.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/pictures.html)
- [social.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/social.html)

Sie sollten:

1. Fügen Sie an der angegebenen Stelle auf einer Seite eine ungeordnete Liste ein, die die Namen der Seiten enthält, zu denen verlinkt werden soll. Ein Navigationsmenü ist normalerweise nur eine Liste von Links, daher ist das semantisch OK.
2. Ändern Sie jeden Seitennamen in einen Link zu dieser Seite.
3. Kopieren Sie das Navigationsmenü auf jede Seite.
4. Entfernen Sie auf jeder Seite nur den Link zu dieser Seite — es ist verwirrend und unnötig, dass eine Seite einen Link zu sich selbst enthält. Und das Fehlen eines Links dient als gute visuelle Erinnerung daran, welche Seite Sie gerade sind.

Das fertige Beispiel sollte ähnlich wie die folgende Seite aussehen:

![Ein Beispiel für ein einfaches HTML-Navigationsmenü mit Home-, Bilder-, Projekte- und Soziale Menüelementen](navigation-example.png)

> [!NOTE]
> Wenn Sie stecken bleiben oder sich nicht sicher sind, ob Sie es richtig gemacht haben, können Sie das Verzeichnis [navigation-menu-marked-up](https://github.com/mdn/learning-area/tree/main/html/introduction-to-html/navigation-menu-marked-up) überprüfen, um die richtige Antwort zu sehen.

## Email-Links

Es ist möglich, Links oder Schaltflächen zu erstellen, die beim Anklicken eine neue ausgehende E-Mail öffnen, anstatt auf eine Ressource oder Seite zu verlinken. Dies wird unter Verwendung des {{HTMLElement("a")}}-Elements und des `mailto:`-URL-Schemas durchgeführt.

In seiner einfachsten und am häufigsten verwendeten Form zeigt ein `mailto:`-Link die E-Mail-Adresse des beabsichtigten Empfängers an. Beispielsweise:

```html
<a href="mailto:nowhere@mozilla.org">Send email to nowhere</a>
```

Dies ergibt einen Link, der so aussieht: [E-Mail an nirgendwo senden](mailto:nowhere@mozilla.org).

Tatsächlich ist die E-Mail-Adresse optional. Wenn Sie diese weglassen und Ihr [`href`](/de/docs/Web/HTML/Reference/Elements/a#href) "mailto:" ist, wird ein neues ausgehendes E-Mail-Fenster durch den E-Mail-Client des Benutzers geöffnet, ohne eine Zieladresse. Dies wird häufig als "Teilen"-Links verwendet, die Benutzer klicken können, um eine E-Mail an eine von ihnen gewählte Adresse zu senden.

### Festlegen von Details

Neben der E-Mail-Adresse können Sie weitere Informationen angeben. Tatsächlich können alle Standard-Mail-Header-Felder zur `mailto`-URL hinzugefügt werden, die Sie angeben. Die am häufigsten verwendeten sind "subject", "cc", und "body" (was kein echtes Header-Feld ist, aber es Ihnen ermöglicht, eine kurze Inhaltsnachricht für die neue E-Mail anzugeben). Jedes Feld und sein Wert werden als Abfrageausdruck angegeben.

Hier ist ein Beispiel, das cc, bcc, subject und body enthält:

```html
<a
  href="mailto:nowhere@mozilla.org?cc=name2@rapidtables.com&bcc=name3@rapidtables.com&subject=The%20subject%20of%20the%20email&body=The%20body%20of%20the%20email">
  Send mail with cc, bcc, subject and body
</a>
```

> [!NOTE]
> Die Werte jedes Feldes müssen mit nicht-druckbaren Zeichen (unsichtbaren Zeichen wie Tabulatoren, Zeilenumbrüchen und Seitenumbrüchen) und Leerzeichen {{Glossary("Percent-encoding", "Prozentkodiert")}} URL-kodiert werden. Beachten Sie auch die Verwendung des Fragezeichens (`?`), um die Haupt-URL von den Feldwerten zu trennen, und der kaufmännischen Und (&), um jedes Feld in der `mailto:`-URL zu trennen. Dies ist eine Standard-URL-Abfragesyntax. Lesen Sie [Die GET-Methode](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data#the_get_method), um zu verstehen, wofür URL-Abfragesyntax häufiger verwendet wird.

Hier sind einige andere Beispiel-`mailto`-URLs:

- <mailto:>
- <mailto:nowhere@mozilla.org>
- <mailto:nowhere@mozilla.org,nobody@mozilla.org>
- <mailto:nowhere@mozilla.org?cc=nobody@mozilla.org>
- <mailto:nowhere@mozilla.org?cc=nobody@mozilla.org&subject=Dies%20ist%20der%20Betreff>

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Links](/de/docs/Learn_web_development/Core/Structuring_content/Test_your_skills/Links).

## Zusammenfassung

Das war's vorerst zu Links! Sie werden später im Kurs zu Links zurückkehren, wenn Sie beginnen, sie zu stylen. Als nächstes werden Sie in HTML einige Herausforderungen durchlaufen, die Ihr Verständnis der bisher behandelten Themen testen werden.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Advanced_text_features", "Learn_web_development/Core/Structuring_content/Marking_up_a_letter", "Learn_web_development/Core/Structuring_content")}}
