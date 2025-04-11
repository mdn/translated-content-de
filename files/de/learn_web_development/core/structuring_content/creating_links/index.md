---
title: Erstellen von Links
slug: Learn_web_development/Core/Structuring_content/Creating_links
l10n:
  sourceCommit: fa255cdc0402c68ae00c5393fe312e51984574c9
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Advanced_text_features", "Learn_web_development/Core/Structuring_content/Marking_up_a_letter", "Learn_web_development/Core/Structuring_content")}}

Links (auch bekannt als Hyperlinks) sind wirklich wichtig — sie machen das Web _zu einem Netz_.
Dieser Artikel zeigt die Syntax, die zum Erstellen eines Links erforderlich ist, und bespricht bewährte Methoden im Umgang mit Links.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML, wie sie im
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        > behandelt werden. Semantik auf Textebene wie <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
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
          <li>Verstehen, warum Links die grundlegende Funktion des Webs sind. Es gibt kein Web ohne Links.</li>
          <li>Das <code>href</code>-Attribut.</li>
          <li>Absolute und relative Pfade und wann man sie verwendet.</li>
          <li>Pfadsyntax im Detail — Schrägstriche, Einzel- und Doppelpunkt.</li>
          <li>Link-Zustände und warum sie wichtig sind — <code>:hover</code>, <code>:focus</code>, <code>:visited</code> und <code>:active</code>.</li>
          <li>Inline- und Block-Links.</li>
          <li>Verständnis der Vorteile des Schreibens guter Linktexte, wie z. B. bessere Zugänglichkeit für Screenreader-Benutzer und potenziell positive SEO-Effekte.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein Hyperlink?

Hyperlinks gehören zu den aufregendsten Innovationen, die das Web zu bieten hat.
Sie sind seit Beginn ein Merkmal des Webs und machen das Web zu einem _Netz_.
Hyperlinks ermöglichen es uns, Dokumente mit anderen Dokumenten oder Ressourcen zu verknüpfen, auf spezifische Teile von Dokumenten zu verlinken oder Apps unter einer Webadresse bereitzustellen.
Nahezu jeder Webinhalt kann in einen Link umgewandelt werden, sodass beim Klicken oder anderweitigen Aktivieren der Webbrowser zu einer anderen Webadresse geht ({{Glossary("URL", "URL")}}).

> [!NOTE]
> Eine URL kann auf HTML-Dateien, Textdateien, Bilder, Textdokumente, Video- und Audiodateien oder auf alles andere, das im Web existiert, verweisen.
> Wenn der Webbrowser nicht weiß, wie er die Datei darstellen oder behandeln soll, fragt er Sie, ob Sie die Datei öffnen möchten (in diesem Fall wird das Öffnen oder Behandeln der Datei an eine geeignete native App auf dem Gerät übergeben) oder die Datei herunterladen möchten (in diesem Fall können Sie sich später darum kümmern).

Zum Beispiel enthält die BBC-Homepage viele Links, die nicht nur auf mehrere Nachrichtenartikel, sondern auch auf verschiedene Bereiche der Website (Navigationsfunktionalität), Anmelde-/Registrierungsseiten (Benutzerwerkzeuge) und mehr verweisen.

![Startseite von bbc.co.uk, zeigt viele Nachrichtenobjekte und Navigationsmenü-Funktionalität](updated-bbc-website.png)

## Anatomie eines Links

Ein einfacher Link wird erstellt, indem der Text oder andere Inhalte in ein {{htmlelement("a")}}-Element eingebettet und das [`href`](/de/docs/Web/HTML/Reference/Elements/a#href)-Attribut verwendet wird, das auch als **Hypertext-Referenz** oder **Ziel** bekannt ist und die Webadresse enthält.

```html
<p>
  I'm creating a link to
  <a href="https://www.mozilla.org/en-US/">the Mozilla homepage</a>.
</p>
```

Dies ergibt folgendes Ergebnis:

Ich erstelle einen Link zur [Mozilla-Homepage](https://www.mozilla.org/en-US/).

### Block-Level-Links

Wie bereits erwähnt, kann nahezu jeder Inhalt in einen Link verwandelt werden, sogar {{Glossary("Block/CSS", "Block-Level-Elemente")}}.
Wenn Sie ein Überschriftenelement in einen Link verwandeln möchten, hüllen Sie es wie im folgenden Codeausschnitt gezeigt in ein Anker- (`<a>`) Element ein:

```html
<a href="https://developer.mozilla.org/en-US/">
  <h1>MDN Web Docs</h1>
</a>
<p>
  Documenting web technologies, including CSS, HTML, and JavaScript, since 2005.
</p>
```

Dadurch wird die Überschrift in einen Link umgewandelt:
{{EmbedLiveSample('Block level links', '100%', 150)}}

### Bild-Links

Um ein Bild in einen Link zu verwandeln, umwickeln Sie das {{htmlelement("img")}}-Element mit einem {{htmlelement("a")}}-Element. Das unten stehende Beispiel verwendet einen relativen Pfad, um auf eine lokal gespeicherte SVG-Bilddatei zu verweisen.

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

Dadurch wird das MDN-Logo zu einem Link:
{{EmbedLiveSample('Image links', '100%', 150)}}

> [!NOTE]
> Mehr über die Verwendung von Bildern im Web erfahren Sie in einem späteren Artikel.

### Unterstützende Informationen mit dem title-Attribut hinzufügen

Ein weiteres Attribut, das Sie Ihren Links hinzufügen können, ist `title`.
Der Titel enthält zusätzliche Informationen über den Link, wie z. B. welche Art von Informationen die Seite enthält oder Dinge, auf die man auf der Website achten sollte.

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

Dies ergibt das folgende Ergebnis und beim Überfahren des Links mit der Maus wird der Titel als Tooltip angezeigt:

{{EmbedLiveSample('Adding supporting information with the title attribute', '100%', 150)}}

> [!NOTE]
> Ein Linktitel wird nur beim Überfahren mit der Maus angezeigt, was bedeutet, dass Personen, die auf Tastatursteuerung oder Touchscreens angewiesen sind, Schwierigkeiten haben werden, auf Titelinformationen zuzugreifen.
> Wenn die Informationen eines Titels tatsächlich wichtig für die Benutzerfreundlichkeit der Seite sind, sollten Sie sie auf eine Weise präsentieren, die für alle Benutzer zugänglich ist, beispielsweise indem Sie sie in den regulären Text einfügen.

### Aktives Lernen: Ihr eigenes Beispielslink erstellen

Erstellen Sie ein HTML-Dokument mit Ihrem lokalen Code-Editor und unserer [Startvorlage](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html).

- Fügen Sie im HTML-Body ein oder mehrere Absätze oder andere Inhaltstypen hinzu, die Sie bereits kennen.
- Verwandeln Sie einen Teil des Inhalts in Links.
- Fügen Sie title-Attribute ein.

## Ein kurzer Überblick zu URLs und Pfaden

Um Link-Ziele vollständig zu verstehen, müssen Sie URLs und Dateipfade verstehen. Dieser Abschnitt liefert Ihnen die Informationen, die Sie dafür benötigen.

Eine URL, oder Uniform Resource Locator, ist eine Zeichenkette, die angibt, wo sich etwas im Web befindet. Zum Beispiel befindet sich die englische Homepage von Mozilla unter `https://www.mozilla.org/en-US/`.

URLs verwenden Pfade, um Dateien zu finden. Pfade geben an, wo sich die Datei, die Sie interessiert, im Dateisystem befindet. Betrachten wir ein Beispiel für eine Verzeichnisstruktur, siehe die `creating-hyperlinks` Verzeichnisstruktur unten:

![Eine einfache Verzeichnisstruktur. Das übergeordnete Verzeichnis heißt creating-hyperlinks und enthält zwei Dateien namens index.html und contacts.html sowie zwei Verzeichnisse namens projects und pdfs, die eine index.html und eine projekt-brief.pdf Datei enthalten](simple-directory.png)

Der **Root** dieser Verzeichnisstruktur wird `creating-hyperlinks` genannt. Wenn Sie lokal mit einer Website arbeiten, haben Sie ein Verzeichnis, das die gesamte Website enthält. Im **Root** befinden sich eine `index.html`-Datei und eine `contacts.html`-Datei. In einer echten Website wäre `index.html` unsere Homepage oder Einstiegsseite (eine Webseite, die als Ausgangspunkt für eine Website oder einen bestimmten Abschnitt einer Website dient).

Es gibt auch zwei Verzeichnisse in unserem Root — `pdfs` und `projects`. Diese enthalten jeweils eine einzelne Datei — ein PDF (`project-brief.pdf`) bzw. eine `index.html`-Datei. Beachten Sie, dass Sie zwei `index.html`-Dateien in einem Projekt haben können, solange sie sich an unterschiedlichen Orten im Dateisystem befinden. Die zweite `index.html` könnte vielleicht die Haupteinstiegsseite für projektbezogene Informationen sein.

Schauen wir uns einige Beispiele für Links zwischen verschiedenen Dateien in dieser Verzeichnisstruktur an, um verschiedene Linktypen zu demonstrieren:

- **Gleiches Verzeichnis**: Wenn Sie einen Hyperlink in `index.html` (der obersten `index.html`) einfügen möchten, der auf `contacts.html` zeigt, geben Sie den Dateinamen an, auf den Sie verlinken möchten, da er sich im gleichen Verzeichnis wie die aktuelle Datei befindet. Die URL, die Sie verwenden würden, ist `contacts.html`:

  ```html
  <p>
    Want to contact a specific staff member? Find details on our
    <a href="contacts.html">contacts page</a>.
  </p>
  ```

- **In Unterverzeichnisse wechseln**: Wenn Sie einen Hyperlink in `index.html` (der obersten `index.html`) einfügen möchten, der auf `projects/index.html` zeigt, müssen Sie in das `projects`-Verzeichnis wechseln, bevor Sie die Datei angeben, auf die Sie verlinken möchten. Dies wird erreicht, indem Sie den Namen des Verzeichnisses angeben, dann einen Schrägstrich und dann den Namen der Datei. Die URL, die Sie verwenden würden, ist `projects/index.html`:

  ```html
  <p>Visit my <a href="projects/index.html">project homepage</a>.</p>
  ```

- **Zurück zu übergeordneten Verzeichnissen wechseln**: Wenn Sie einen Hyperlink in `projects/index.html` einfügen möchten, der auf `pdfs/project-brief.pdf` zeigt, müssten Sie ein Verzeichnisebene nach oben gehen und dann in das `pdfs`-Verzeichnis zurückkehren. Um ein Verzeichnis nach oben zu gelangen, verwenden Sie zwei Punkte — `..` — also wäre die URL, die Sie verwenden würden, `../pdfs/project-brief.pdf`:

  ```html
  <p>A link to my <a href="../pdfs/project-brief.pdf">project brief</a>.</p>
  ```

> [!NOTE]
> Sie können mehrere Instanzen dieser Funktionen zu komplexen URLs kombinieren, falls erforderlich, zum Beispiel: `../../../complex/path/to/my/file.html`.

### Dokumentfragmente

Es ist möglich, auf einen bestimmten Teil eines HTML-Dokuments zu verlinken, bekannt als **Dokumentfragment**, anstatt nur auf den oberen Teil des Dokuments zu verlinken. Dazu müssen Sie zuerst einem Element, auf das Sie verlinken möchten, ein [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) Attribut zuweisen. Es ist normalerweise sinnvoll, auf eine bestimmte Überschrift zu verlinken, also würde dies in etwa folgendermaßen aussehen:

```html
<h2 id="Mailing_address">Mailing address</h2>
```

Um dann auf diese spezifische `id` zu verlinken, fügen Sie diese am Ende der URL hinzu, vorangestellt von einem Hash- oder Pfund-Symbol (`#`), zum Beispiel:

```html
<p>
  Want to write us a letter? Use our
  <a href="contacts.html#Mailing_address">mailing address</a>.
</p>
```

Sie können sogar den Dokumentfragmentverweis alleine verwenden, um auf _einen anderen Teil des aktuellen Dokuments_ zu verlinken:

```html
<p>
  The <a href="#Mailing_address">company mailing address</a> can be found at the
  bottom of this page.
</p>
```

### Absolute versus relative URLs

Zwei Begriffe, auf die Sie im Web stoßen werden, sind **absolute URL** und **relative URL:**

**Absolute URL**: Zeigt auf einen Ort an, der durch seinen absoluten Standort im Web definiert ist, einschließlich {{Glossary("protocol", "Protokoll")}} und {{Glossary("domain_name", "Domainname")}}.
Zum Beispiel, wenn eine `index.html`-Seite in ein Verzeichnis namens `projects` hochgeladen wird, das sich innerhalb des **Root** eines Webservers befindet, und die Domain der Website `https://www.example.com` ist, wäre die Seite unter `https://www.example.com/projects/index.html` verfügbar (oder sogar nur `https://www.example.com/projects/`, da die meisten Webserver einfach nach einer Einstiegsseite wie `index.html` suchen, um sie zu laden, wenn diese nicht in der URL angegeben ist).

Eine absolute URL zeigt immer auf denselben Ort, egal wo sie verwendet wird.

**Relative URL**: Zeigt auf einen Ort, der _relativ_ zur Datei ist, von der aus Sie verlinken, eher wie das, was wir im vorherigen Abschnitt betrachtet haben.
Zum Beispiel, wenn wir von unserer Beispieldatei unter `https://www.example.com/projects/index.html` zu einer PDF-Datei im gleichen Verzeichnis verlinken wollten, wäre die URL nur der Dateiname — `project-brief.pdf` — keine weiteren Informationen erforderlich. Wenn das PDF in einem Unterverzeichnis innerhalb von `projects` namens `pdfs` verfügbar wäre, wäre der relative Link `pdfs/project-brief.pdf` (die entsprechende absolute URL wäre `https://www.example.com/projects/pdfs/project-brief.pdf`).

Eine relative URL zeigt an verschiedene Orte, abhängig von der tatsächlichen Position der Datei, auf die Sie verweisen — zum Beispiel wenn wir unsere `index.html`-Datei aus dem `projects`-Verzeichnis heraus und in den **Root** der Website (die oberste Ebene, in keinem Verzeichnis) verschieben würden, würde der relative URL-Link `pdfs/project-brief.pdf` darin nun auf eine Datei unter `https://www.example.com/pdfs/project-brief.pdf` zeigen, nicht auf eine Datei unter `https://www.example.com/projects/pdfs/project-brief.pdf`.

Natürlich ändert sich der Standort der Datei `project-brief.pdf` und des `pdfs`-Ordners nicht plötzlich, weil Sie die Datei `index.html` verschoben haben — dies würde dazu führen, dass Ihr Link auf den falschen Ort zeigt, so dass er nicht funktionieren würde, wenn darauf geklickt wird. Sie müssen also vorsichtig sein!

## Bewährte Praktiken für Links

Es gibt einige bewährte Methoden, die Sie beim Erstellen von Links befolgen sollten. Schauen wir uns diese jetzt an.

### Verwenden Sie aussagekräftige Link-Texte

Es ist einfach, Links auf Ihrer Seite einzufügen. Das reicht nicht aus. Wir müssen unsere Links _zugänglich_ für alle Leser machen, unabhängig von ihrem aktuellen Kontext und den Werkzeugen, die sie bevorzugen. Zum Beispiel:

- Screenreader-Benutzer springen gerne von Link zu Link auf der Seite und lesen Links aus dem Kontext heraus.
- Suchmaschinen verwenden Linktext, um Zieldateien zu indexieren, daher ist es eine gute Idee, Schlüsselwörter in Ihren Linktext aufzunehmen, um effektiv zu beschreiben, worauf verlinkt wird.
- Visuelle Leser überfliegen die Seite, anstatt jedes Wort zu lesen, und ihre Augen werden zu Seitenmerkmalen hingezogen, die herausstechen, wie Links. Sie werden beschreibenden Linktext nützlich finden.

Schauen wir uns ein konkretes Beispiel an:

**Guter** Linktext: [Firefox herunterladen](https://www.mozilla.org/en-US/firefox/new/?redirect_source=firefox-com)

```html example-good
<p><a href="https://www.mozilla.org/en-US/firefox/">Download Firefox</a></p>
```

**Schlechter** Linktext: [Klicken Sie hier](https://www.mozilla.org/en-US/firefox/), um Firefox herunterzuladen

```html example-bad
<p>
  <a href="https://www.mozilla.org/en-US/firefox/">Click here</a> to download
  Firefox
</p>
```

Weitere Tipps:

- Wiederholen Sie die URL nicht als Teil des Linktextes — URLs sehen hässlich aus und klingen noch hässlicher, wenn ein Screenreader sie Buchstabe für Buchstabe liest.
- Sagen Sie nicht "Link" oder "verlinkt zu" im Linktext — das ist nur Rauschen. Screenreader informieren die Leute darüber, dass es einen Link gibt.
  Visuelle Benutzer werden auch wissen, dass es einen Link gibt, denn Links sind im Allgemeinen in einer anderen Farbe und unterstrichen (dieses Konvention sollte im Allgemeinen nicht gebrochen werden, da Benutzer daran gewöhnt sind).
- Halten Sie Ihren Linktext so kurz wie möglich — dies ist hilfreich, weil Screenreader den gesamten Linktext interpretieren müssen.
- Minimieren Sie Instanzen, in denen mehrere Kopien desselben Textes an verschiedene Orte verlinken.
  Dies kann Probleme für Screenreader-Benutzer verursachen, wenn es eine Liste von Links aus dem Kontext gibt, die als "Klicken Sie hier", "Klicken Sie hier", "Klicken Sie hier" beschriftet sind.

### Verlinken zu nicht-HTML-Ressourcen — klare Hinweise hinterlassen

Wenn Sie zu einer Ressource verlinken, die nicht auf der aktuellen Seite als "normale Navigation" geöffnet wird, sollten Sie einen klaren Text im Linktext angeben, um zu beschreiben, was passieren wird. Zum Beispiel, wenn Sie eine Ressource herunterladen oder streamen oder wenn der Link ein Popup öffnen oder einen anderen potenziell unerwarteten Effekt ausführen wird, sollte dies im Text angegeben werden. Dies ist wichtig für Benutzer mit langsamen Verbindungen, die möglicherweise vermeiden möchten, mehrere Megabyte große Assets herunterzuladen. Es hilft auch, Erwartungen für Screenreader-Benutzer zu setzen, die sonst möglicherweise nicht wissen, was geschieht.

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

### Verwenden des download-Attributs beim Verlinken auf einen Download

Wenn Sie auf eine Ressource verlinken, die heruntergeladen und nicht im Browser geöffnet werden soll, können Sie das `download`-Attribut verwenden, um einen Standard-Speichernamen bereitzustellen. Hier ist ein Beispiel mit einem Download-Link zur neuesten Windows-Version von Firefox:

```html
<a
  href="https://download.mozilla.org/?product=firefox-latest-ssl&os=win64&lang=en-US"
  download="firefox-latest-64bit-installer.exe">
  Download Latest Firefox for Windows (64-bit) (English, US)
</a>
```

### Wann Links in einem neuen Tab öffnen

Links öffnen standardmäßig im gleichen Tab wie die Seite, auf der sie sich befinden, was es dem Benutzer ermöglicht, mit der Zurück-Schaltfläche des Browsers zur vorherigen Seite zu navigieren. Dennoch entscheiden sich viele Websites (einschließlich MDN) dafür, bestimmte Links, insbesondere externe Links, in einem neuen Tab zu öffnen. Dies wird erreicht, indem das [`target`](/de/docs/Web/HTML/Reference/Elements/a#target)-Attribut auf `"_blank"` gesetzt wird.

```html
Firefox is developed by the
<a href="https://www.mozilla.org/en-US/" target="_blank">Mozilla Foundation</a>.
```

Ob Links in einem neuen Tab geöffnet werden sollen, sollte eine bewusste Entscheidung sein, basierend auf Designüberlegungen zur Benutzererfahrung. Hier sind einige Dinge zu beachten:

- Das Öffnen von Links in einem neuen Tab präsentiert die beiden Dokumente gleichzeitig, was für ein paralleles Navigationserlebnis nützlich ist. Andererseits sind Links, die im selben Tab geöffnet werden, eher eine Fortsetzung der aktuellen Seite.
- Das Öffnen von Links in einem neuen Tab kann desorientierend für Benutzer sein, die es gewohnt sind, die Zurück-Schaltfläche zu verwenden.
- Auch wenn Links standardmäßig im selben Tab geöffnet werden, können Benutzer sie immer noch in einem neuen Tab öffnen, indem sie Tastenkombinationen oder Kontextmenüoptionen verwenden. Auf der anderen Seite sind Links, die in einem neuen Tab geöffnet werden, schwer im selben Tab zu öffnen.
- Screenreader-Benutzer könnten von Links, die in einem neuen Tab geöffnet werden, verwirrt sein, da sie möglicherweise nicht bemerken, dass der neue Tab geöffnet wurde, und den Kontext ihrer Position auf der Seite verlieren.

Ein üblicher Ansatz ist es, externe Links in neuen Tabs und interne Links im selben Tab zu öffnen.
Einige Designer bevorzugen es, alle Links im selben Tab zu öffnen.
Wenn Sie Links in neuen Tabs öffnen, wird empfohlen, Hinweise für diese Links bereitzustellen, wie z.B. ein Symbol neben dem Linktext.

## Aktives Lernen: ein Navigationsmenü erstellen

Für diese Übung möchten wir, dass Sie einige Seiten mit einem Navigationsmenü verlinken, um eine mehrseitige Website zu erstellen. Dies ist eine übliche Methode, wie eine Website erstellt wird — dieselbe Seitenstruktur wird auf jeder Seite verwendet, einschließlich des gleichen Navigationsmenüs, sodass beim Klicken auf Links der Eindruck entsteht, dass Sie am gleichen Ort bleiben und unterschiedliche Inhalte angezeigt werden.

Sie müssen lokale Kopien der folgenden vier Seiten erstellen, alle im selben Verzeichnis. Eine vollständige Dateiliste finden Sie im [navigation-menu-start](https://github.com/mdn/learning-area/tree/main/html/introduction-to-html/navigation-menu-start)-Verzeichnis:

- [index.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/index.html)
- [projects.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/projects.html)
- [pictures.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/pictures.html)
- [social.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/social.html)

Sie sollten:

1. Eine ungeordnete Liste an der angegebenen Stelle auf einer Seite einfügen, die die Seitennamen enthält, auf die verlinkt werden soll.
   Ein Navigationsmenü ist normalerweise einfach eine Liste von Links, daher ist dies semantisch in Ordnung.
2. Jeden Seitennamen in einen Link zu dieser Seite umwandeln.
3. Das Navigationsmenü auf jede Seite kopieren.
4. Auf jeder Seite nur den Link zu dieser gleichen Seite entfernen — es ist verwirrend und unnötig, dass eine Seite einen Link zu sich selbst enthält.
   Und das Fehlen eines Links dient als guter visueller Hinweis darauf, auf welcher Seite Sie sich gerade befinden.

Das fertige Beispiel sollte ähnlich dem folgenden aussehen:

![Ein Beispiel für ein einfaches HTML-Navigationsmenü mit den Menüeinträgen Startseite, Bilder, Projekte und Soziales](navigation-example.png)

> [!NOTE]
> Wenn Sie nicht weiterkommen oder nicht sicher sind, ob Sie es richtig haben, können Sie das Verzeichnis [navigation-menu-marked-up](https://github.com/mdn/learning-area/tree/main/html/introduction-to-html/navigation-menu-marked-up) überprüfen, um die richtige Antwort zu sehen.

## E-Mail-Links

Es ist möglich, Links oder Buttons zu erstellen, die, wenn sie angeklickt werden, eine neue ausgehende E-Mail öffnen, anstatt zu einer Ressource oder Seite zu verlinken.
Dies wird mit dem {{HTMLElement("a")}}-Element und dem `mailto:` URL-Schema gemacht.

In seiner grundlegendsten und am häufigsten verwendeten Form gibt ein `mailto:`-Link die E-Mail-Adresse des vorgesehenen Empfängers an. Zum Beispiel:

```html
<a href="mailto:nowhere@mozilla.org">Send email to nowhere</a>
```

Dies ergibt einen Link, der so aussieht: [E-Mail an nowhere senden](mailto:nowhere@mozilla.org).

Tatsächlich ist die E-Mail-Adresse optional. Wenn Sie sie weglassen und Ihr [`href`](/de/docs/Web/HTML/Reference/Elements/a#href) "mailto:" ist, wird von der E-Mail-Anwendung des Benutzers ein neues ausgehendes E-Mail-Fenster eröffnet, ohne dass eine Zieladresse angegeben wird.
Dies wird oft als "Teilen"-Links verwendet, die Benutzer anklicken können, um eine E-Mail an eine Adresse ihrer Wahl zu senden.

### Details angeben

Zusätzlich zur E-Mail-Adresse können Sie weitere Informationen angeben. Tatsächlich können alle Standard-Mail-Header-Felder in die `mailto`-URL eingefügt werden, die Sie angeben.
Die am häufigsten verwendeten davon sind "subject", "cc" und "body" (welches kein echtes Header-Feld ist, aber es Ihnen ermöglicht, eine kurze Inhaltsnachricht für die neue E-Mail anzugeben).
Jedes Feld und sein Wert wird als Abfrage-Darstellung terminiert.

Hier ist ein Beispiel, das ein cc, bcc, subject und body einschließt:

```html
<a
  href="mailto:nowhere@mozilla.org?cc=name2@rapidtables.com&bcc=name3@rapidtables.com&subject=The%20subject%20of%20the%20email&body=The%20body%20of%20the%20email">
  Send mail with cc, bcc, subject and body
</a>
```

> [!NOTE]
> Die Werte jedes Feldes müssen mit nicht druckbaren Zeichen (unsichtbare Zeichen wie Tabs, Zeilenumbrüche und Seitenumbrüche) URL-codiert und Leerzeichen {{Glossary("Percent-encoding", "prozent-codiert")}} werden.
> Beachten Sie außerdem den Einsatz des Fragezeichens (`?`), um die Haupt-URL von den Feldwerten zu trennen, und das Kaufmanns-Und (&), um jedes Feld in der `mailto:`-URL zu trennen.
> Dies ist die Standard-URL-Abfragenotation.
> Lesen Sie [Die GET-Methode](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data#the_get_method), um zu verstehen, wofür die URL-Abfragenotation üblicherweise verwendet wird.

Hier sind einige weitere Beispiele für `mailto`-URLs:

- <mailto:>
- <mailto:nowhere@mozilla.org>
- <mailto:nowhere@mozilla.org,nobody@mozilla.org>
- <mailto:nowhere@mozilla.org?cc=nobody@mozilla.org>
- <mailto:nowhere@mozilla.org?cc=nobody@mozilla.org&subject=Dies%20ist%20das%20Betreff>

## Testen Sie Ihr Können!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren – siehe [Testen Sie Ihr Können: Links](/de/docs/Learn_web_development/Core/Structuring_content/Test_your_skills/Links).

## Zusammenfassung

Das war es vorerst mit Links! Sie werden später im Kurs zu Links zurückkehren, wenn Sie beginnen, deren Styling zu betrachten. Als Nächstes werden Sie für HTML einige Herausforderungen durcharbeiten, die Ihr Verständnis der bisher behandelten Themen testen.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Advanced_text_features", "Learn_web_development/Core/Structuring_content/Marking_up_a_letter", "Learn_web_development/Core/Structuring_content")}}
