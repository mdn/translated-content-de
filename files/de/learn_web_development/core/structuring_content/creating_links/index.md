---
title: Erstellen von Links
slug: Learn_web_development/Core/Structuring_content/Creating_links
l10n:
  sourceCommit: a92e10b293358bc796c43d5872a8981fd988a005
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Advanced_text_features", "Learn_web_development/Core/Structuring_content/Marking_up_a_letter", "Learn_web_development/Core/Structuring_content")}}

Links (auch als Hyperlinks bekannt) sind wirklich wichtig — sie machen das Web zu einem _Netz_.
Dieser Artikel zeigt die erforderliche Syntax, um einen Link zu erstellen, und bespricht bewährte Vorgehensweisen für Links.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML, wie sie in
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        > behandelt werden. Textbasierte Semantik wie <a href="/de/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs"
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
          <li>Absolute und relative Pfade und wann sie verwendet werden.</li>
          <li>Pfadsyntax im Detail — Schrägstriche, Einzelpunkt und Doppelpunkt.</li>
          <li>Link-Zustände und warum sie wichtig sind — <code>:hover</code>, <code>:focus</code>, <code>:visited</code> und <code>:active</code>.</li>
          <li>Inline- und Block-Level-Links.</li>
          <li>Verstehen der Vorteile des Schreibens guter Linktexte, wie bessere Zugänglichkeit für Bildschirmleserbenutzer und mögliche positive SEO-Effekte.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein Hyperlink?

Hyperlinks sind eine der aufregendsten Innovationen, die das Web zu bieten hat.
Sie sind seit Beginn ein Merkmal des Webs und machen das Web zu einem _Netz_.
Hyperlinks ermöglichen es uns, Dokumente mit anderen Dokumenten oder Ressourcen zu verknüpfen, auf bestimmte Teile von Dokumenten zu verweisen oder Apps unter einer Webadresse bereitzustellen.
Fast jeder Webinhalt kann in einen Link umgewandelt werden, sodass der Webbrowser beim Klicken oder anderswie aktivieren zu einer anderen Webadresse ({{Glossary("URL", "URL")}}) wechselt.

> [!NOTE]
> Eine URL kann auf HTML-Dateien, Textdateien, Bilder, Textdokumente, Video- und Audiodateien oder alles andere verweisen, was im Web existiert.
> Wenn der Webbrowser nicht weiß, wie er die Datei anzeigen oder handhaben soll, fragt er Sie, ob Sie die Datei öffnen möchten (in diesem Fall liegt die Verantwortung für das Öffnen oder Handhaben der Datei bei einer geeigneten nativen App auf dem Gerät) oder die Datei herunterladen möchten (in diesem Fall können Sie später versuchen, damit umzugehen).

Zum Beispiel enthält die BBC-Homepage viele Links, die nicht nur auf verschiedene Nachrichtenartikel, sondern auch auf verschiedene Bereiche der Website (Navigationsfunktionen), Anmelde-/Registrierungsseiten (Benutzerwerkzeuge) und mehr verweisen.

![Startseite von bbc.co.uk, die viele Nachrichtenartikel und Navigationsmenü-Funktionen zeigt](updated-bbc-website.png)

## Anatomie eines Links

Ein einfacher Link wird erstellt, indem der Text oder andere Inhalt innerhalb eines {{htmlelement("a")}}-Elements eingeschlossen wird. Verwenden Sie das [`href`](/de/docs/Web/HTML/Element/a#href)-Attribut, auch bekannt als **Hypertext Reference** oder **Ziel**, das die Webadresse enthält.

```html
<p>
  I'm creating a link to
  <a href="https://www.mozilla.org/en-US/">the Mozilla homepage</a>.
</p>
```

Dies ergibt das folgende Ergebnis:

Ich erstelle einen Link zu [der Mozilla-Homepage](https://www.mozilla.org/en-US/).

### Block-Level-Links

Wie bereits erwähnt, kann fast jeder Inhalt in einen Link umgewandelt werden, sogar {{Glossary("Block/CSS", "Block-Level-Elemente")}}.
Wenn Sie möchten, dass ein Überschriftselement ein Link wird, dann umschließen Sie es mit einem Anker- (`<a>`) Element, wie im folgenden Codeausschnitt gezeigt:

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

Wenn Sie ein Bild haben, das Sie in einen Link umwandeln möchten, verwenden Sie das {{htmlelement("a")}}-Element, um die Bilddatei zu umschließen, die mit dem {{htmlelement("img")}}-Element referenziert wird. Das folgende Beispiel verwendet einen relativen Pfad, um eine lokal gespeicherte SVG-Bilddatei zu referenzieren.

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

### Hinzufügen unterstützender Informationen mit dem title-Attribut

Ein weiteres Attribut, das Sie möglicherweise Ihren Links hinzufügen möchten, ist `title`.
Der Titel enthält zusätzliche Informationen über den Link, z. B. welche Art von Informationen die Seite enthält oder worauf Sie auf der Website achten sollten.

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

Dies ergibt folgendes Ergebnis, und das Überfahren mit der Maus zeigt den Titel als Tooltip an:

{{EmbedLiveSample('Adding supporting information with the title attribute', '100%', 150)}}

> [!NOTE]
> Ein Linktitel wird nur beim Überfahren mit der Maus angezeigt, was bedeutet, dass Personen, die auf Tastatursteuerungen oder Touchscreens angewiesen sind, Schwierigkeiten haben werden, auf die Titelinformationen zuzugreifen.
> Wenn die Informationen eines Titels wirklich wichtig für die Benutzerfreundlichkeit der Seite sind, sollten Sie sie auf eine Weise präsentieren, die für alle Benutzer zugänglich ist, zum Beispiel indem Sie sie im regulären Text einfügen.

### Aktives Lernen: Erstellen Sie Ihren eigenen Beispiel-Link

Erstellen Sie ein HTML-Dokument mit Ihrem lokalen Code-Editor und unserer [Anfangsvorlage](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html).

- Fügen Sie im HTML-Körper ein oder mehrere Absätze oder andere Inhaltsarten ein, die Sie bereits kennen.
- Ändern Sie einen Teil des Inhalts in Links.
- Fügen Sie title-Attribute hinzu.

## Ein schneller Überblick über URLs und Pfade

Um Link-Ziele vollständig zu verstehen, müssen Sie URLs und Dateipfade verstehen. Dieser Abschnitt liefert Ihnen die Informationen, die Sie benötigen, um dies zu erreichen.

Eine URL oder Uniform Resource Locator ist eine Textzeichenfolge, die angibt, wo sich etwas im Web befindet. Zum Beispiel befindet sich die englische Startseite von Mozilla unter `https://www.mozilla.org/en-US/`.

URLs verwenden Pfade, um Dateien zu finden. Pfade spezifizieren, wo die Datei, die Sie interessiert, im Dateisystem liegt. Schauen wir uns ein Beispiel für eine Verzeichnisstruktur an, siehe die `creating-hyperlinks` Verzeichnisstruktur unten:

![Eine einfache Verzeichnisstruktur. Das Hauptverzeichnis heißt creating-hyperlinks und enthält zwei Dateien namens index.html und contacts.html und zwei Verzeichnisse namens projects und pdfs, die jeweils eine index.html und eine project-brief.pdf Datei enthalten](simple-directory.png)

Das **Stammverzeichnis** dieser Verzeichnisstruktur heißt `creating-hyperlinks`. Wenn Sie lokal mit einer Website arbeiten, haben Sie ein Verzeichnis, das die gesamte Seite enthält. Innerhalb des **Stamms** haben wir eine `index.html` Datei und eine `contacts.html`. In einer echten Website wäre `index.html` unsere Startseite oder Landing Page (eine Webseite, die als Einstiegspunkt für eine Website oder einen bestimmten Abschnitt einer Website dient).

Es gibt auch zwei Verzeichnisse innerhalb unseres Stamms — `pdfs` und `projects`. Diese haben jeweils eine einzelne Datei — ein PDF (`project-brief.pdf`) und eine `index.html` Datei. Beachten Sie, dass Sie in einem Projekt zwei `index.html` Dateien haben können, solange sie sich an verschiedenen Stellen im Dateisystem befinden. Die zweite `index.html` wäre vielleicht die Hauptlandeseite für projektrelevante Informationen.

Schauen wir uns einige Beispiele für Links zwischen verschiedenen Dateien in dieser Verzeichnisstruktur an, um verschiedene Link-Typen zu demonstrieren:

- **Gleiches Verzeichnis**: Wenn Sie einen Hyperlink in `index.html` (der obersten Ebene `index.html`) einfügen möchten, der auf `contacts.html` verweist, geben Sie den Dateinamen an, zu dem Sie einen Link erstellen möchten, da er sich im gleichen Verzeichnis wie die aktuelle Datei befindet. Die URL, die Sie verwenden würden, ist `contacts.html`:

  ```html
  <p>
    Want to contact a specific staff member? Find details on our
    <a href="contacts.html">contacts page</a>.
  </p>
  ```

- **Hinunter in Unterverzeichnisse**: Wenn Sie einen Hyperlink in `index.html` (der obersten Ebene `index.html`) einfügen möchten, der auf `projects/index.html` verweist, müssen Sie in das `projects` Verzeichnis hinuntergehen, bevor Sie die Datei angeben, zu der Sie einen Link erstellen möchten.
  Dies wird getan, indem Sie den Namen des Verzeichnisses angeben, dann einen Schrägstrich, dann den Namen der Datei. Die URL, die Sie verwenden würden, ist `projects/index.html`:

  ```html
  <p>Visit my <a href="projects/index.html">project homepage</a>.</p>
  ```

- **Zurück in übergeordnete Verzeichnisse gehen**: Wenn Sie einen Hyperlink in `projects/index.html` einfügen möchten, der auf `pdfs/project-brief.pdf` verweist, müssen Sie ein Verzeichnis höher gehen und dann in das `pdfs` Verzeichnis hineingehen.
  Um ein Verzeichnis höher zu gehen, verwenden Sie zwei Punkte — `..` — also die URL, die Sie verwenden würden, ist `../pdfs/project-brief.pdf`:

  ```html
  <p>A link to my <a href="../pdfs/project-brief.pdf">project brief</a>.</p>
  ```

> [!NOTE]
> Sie können mehrere Vorkommen dieser Funktionen zu komplexen URLs kombinieren, wenn nötig, zum Beispiel: `../../../complex/path/to/my/file.html`.

### Dokumentfragmente

Es ist möglich, auf einen bestimmten Teil eines HTML-Dokuments zu verlinken, bekannt als **Dokumentfragment**, anstatt nur an den Anfang des Dokuments zu verlinken.
Dazu müssen Sie zuerst einem Element, zu dem Sie verlinken möchten, ein [`id`](/de/docs/Web/HTML/Global_attributes/id) Attribut zuweisen.
Es macht normalerweise Sinn, auf eine bestimmte Überschrift zu verlinken, sodass dies in etwa wie folgt aussehen würde:

```html
<h2 id="Mailing_address">Mailing address</h2>
```

Um dann auf diese spezifische `id` zu verlinken, würden Sie diese am Ende der URL hinzufügen, vorangestellt von einem Rautezeichen (`#`), zum Beispiel:

```html
<p>
  Want to write us a letter? Use our
  <a href="contacts.html#Mailing_address">mailing address</a>.
</p>
```

Sie können sogar den Dokumentfragment-Verweis selbst verwenden, um auf _einen anderen Teil des aktuellen Dokuments_ zu verlinken:

```html
<p>
  The <a href="#Mailing_address">company mailing address</a> can be found at the
  bottom of this page.
</p>
```

### Absolute versus relative URLs

Zwei Begriffe, denen Sie im Web begegnen werden, sind **absolute URL** und **relative URL:**

**Absolute URL**: Verweist auf eine nach ihrer absoluten Lage im Web definierte Position, einschließlich {{Glossary("protocol", "Protokoll")}} und {{Glossary("domain_name", "Domainname")}}.
Zum Beispiel, wenn eine `index.html` Seite in ein Verzeichnis namens `projects` hochgeladen wird, das innerhalb des **Stamms** eines Webservers sitzt, und die Domain der Website `https://www.example.com` ist, wäre die Seite verfügbar unter `https://www.example.com/projects/index.html` (oder sogar nur `https://www.example.com/projects/`, da die meisten Webserver einfach nach einer Startseite wie `index.html` suchen, falls diese nicht in der URL angegeben ist.)

Eine absolute URL zeigt immer auf die gleiche Stelle, egal wo sie verwendet wird.

**Relative URL**: Verweist auf eine Position, die _relativ_ zur Datei ist, von der aus Sie verlinken, mehr wie das, was wir im vorherigen Abschnitt betrachtet haben.
Zum Beispiel, wenn wir von unserer Beispieldatei bei `https://www.example.com/projects/index.html` auf eine PDF-Datei im gleichen Verzeichnis verlinken wollten, wäre die URL einfach der Dateiname — `project-brief.pdf` — keine zusätzlichen Informationen nötig. Wenn die PDF in einem Unterverzeichnis innerhalb `projects` namens `pdfs` verfügbar wäre, wäre der relative Link `pdfs/project-brief.pdf` (die entsprechende absolute URL wäre `https://www.example.com/projects/pdfs/project-brief.pdf`.)

Eine relative URL zeigt auf verschiedene Orte, je nach tatsächlichem Standort der Datei, von der aus Sie verlinken — zum Beispiel, wenn wir unsere `index.html` Datei aus dem `projects` Verzeichnis heraus in den **Stamm** der Website verschieben würden (die oberste Ebene, in keinem Verzeichnis), würde der `pdfs/project-brief.pdf` relative URL Link darin jetzt auf eine Datei verweisen, die bei `https://www.example.com/pdfs/project-brief.pdf` liegt, nicht auf eine Datei, die bei `https://www.example.com/projects/pdfs/project-brief.pdf` liegt.

Natürlich wird sich der Standort der `project-brief.pdf` Datei und des `pdfs` Ordners nicht plötzlich ändern, weil Sie die `index.html` Datei verschoben haben — das würde Ihren Link auf den falschen Ort zeigen lassen, sodass er nicht funktionieren würde, wenn man darauf klickt. Sie müssen vorsichtig sein!

## Beste Praktiken für Links

Es gibt einige bewährte Praktiken, die beim Schreiben von Links befolgt werden sollten. Schauen wir uns diese nun an.

### Verwenden Sie klare Link-Texte

Es ist einfach, Links auf Ihrer Seite hinzuzufügen. Das ist nicht genug. Wir müssen unsere Links für alle Leser _zugänglich_ machen, unabhängig von ihrem aktuellen Kontext und den bevorzugten Tools. Zum Beispiel:

- Benutzer von Bildschirmlesern springen gerne von Link zu Link auf der Seite und lesen Links außerhalb des Kontexts.
- Suchmaschinen verwenden Linktexte, um Zieldateien zu indexieren, daher ist es eine gute Idee, Schlüsselwörter in Ihren Linktext aufzunehmen, um effektiv zu beschreiben, worauf sich der Link bezieht.
- Visuelle Leser überfliegen die Seite eher, als jedes Wort zu lesen, und ihre Augen werden von herausragenden Seitenelementen angezogen, wie Links. Sie finden beschreibende Linktexte nützlich.

Schauen wir uns ein spezifisches Beispiel an:

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

- Wiederholen Sie nicht die URL als Teil des Linktextes — URLs sehen hässlich aus und hören sich noch schlimmer an, wenn ein Bildschirmleser sie Buchstabe für Buchstabe vorliest.
- Sagen Sie nicht "Link" oder "links zu" im Linktext — das ist nur Lärm. Bildschirmleser sagen den Menschen, dass es einen Link gibt.
  Auch visuelle Benutzer werden wissen, dass es einen Link gibt, weil Links meist in einer anderen Farbe und unterstrichen dargestellt werden (diese Konvention sollte größtenteils nicht gebrochen werden, da die Benutzer daran gewöhnt sind).
- Halten Sie Ihren Linktext so kurz wie möglich — das ist hilfreich, weil Bildschirmleser den gesamten Linktext interpretieren müssen.
- Minimieren Sie Fälle, in denen mehrfach gleiche Texte zu unterschiedlichen Orten verlinken.
  Dies kann Probleme für Benutzer von Bildschirmlesern verursachen, wenn es eine Liste von Links außer Kontext gibt, die als "klicken Sie hier", "klicken Sie hier", "klicken Sie hier" gekennzeichnet sind.

### Links zu Nicht-HTML-Ressourcen — hinterlassen Sie klare Wegweiser

Beim Verlinken zu einer Ressource, die heruntergeladen (wie eine PDF oder Word-Dokument), gestreamt (wie Video oder Audio) wird oder eine andere potenziell unerwartete Wirkung hat (öffnet ein Popup-Fenster), sollten Sie klare Formulierungen hinzufügen, um Verwirrung zu reduzieren.

Zum Beispiel:

- Wenn Sie eine niedrige Bandbreitenverbindung haben, klicken Sie auf einen Link und dann startet unerwartet ein Download mit mehreren Megabyte.

Schauen wir uns einige Beispiele an, um zu sehen, welche Art von Text hier verwendet werden kann:

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

### Verwenden Sie das download Attribut beim Verlinken zu einem Download

Wenn Sie auf eine Ressource verlinken, die heruntergeladen statt im Browser geöffnet wird, können Sie das `download` Attribut verwenden, um einen standardmäßigen Speichernamen bereitzustellen. Hier ist ein Beispiel mit einem Download-Link zur neuesten Windows-Version von Firefox:

```html
<a
  href="https://download.mozilla.org/?product=firefox-latest-ssl&os=win64&lang=en-US"
  download="firefox-latest-64bit-installer.exe">
  Download Latest Firefox for Windows (64-bit) (English, US)
</a>
```

## Aktives Lernen: Erstellen eines Navigationsmenüs

Für diese Übung möchten wir, dass Sie einige Seiten mit einem Navigationsmenü verlinken, um eine mehrseitige Website zu erstellen. Dies ist eine übliche Art und Weise, wie eine Website erstellt wird — dieselbe Seitenstruktur wird auf jeder Seite verwendet, einschließlich des gleichen Navigationsmenüs, sodass beim Klicken auf Links der Eindruck entsteht, dass Sie an derselben Stelle bleiben und nur unterschiedliche Inhalte angezeigt werden.

Sie müssen lokale Kopien der folgenden vier Seiten erstellen, alle im selben Verzeichnis. Für eine vollständige Dateiliste siehe das [navigation-menu-start](https://github.com/mdn/learning-area/tree/main/html/introduction-to-html/navigation-menu-start) Verzeichnis:

- [index.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/index.html)
- [projects.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/projects.html)
- [pictures.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/pictures.html)
- [social.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/social.html)

Sie sollten:

1. Fügen Sie auf einer Seite an der angegebenen Stelle eine ungeordnete Liste hinzu, die die Namen der zu verlinkenden Seiten enthält.
   Ein Navigationsmenü ist normalerweise einfach eine Liste von Links, daher ist dies semantisch in Ordnung.
2. Ändern Sie jeden Seitennamen in einen Link zu dieser Seite.
3. Kopieren Sie das Navigationsmenü auf jede Seite.
4. Entfernen Sie auf jeder Seite nur den Link zu derselben Seite — es ist verwirrend und unnötig, dass eine Seite einen Link zu sich selbst enthält.
   Darüber hinaus wirkt das Fehlen eines Links als gute visuelle Erinnerung, auf welcher Seite Sie sich derzeit befinden.

Das fertige Beispiel sollte ähnlich wie die folgende Seite aussehen:

![Ein Beispiel für ein einfaches HTML-Navigationsmenü, mit Menüelementen für Home, Bilder, Projekte und Sozial](navigation-example.png)

> [!NOTE]
> Wenn Sie feststecken oder sich nicht sicher sind, ob Sie es richtig gemacht haben, können Sie das Verzeichnis [navigation-menu-marked-up](https://github.com/mdn/learning-area/tree/main/html/introduction-to-html/navigation-menu-marked-up) einsehen, um die richtige Antwort zu sehen.

## E-Mail-Links

Es ist möglich, Links oder Schaltflächen zu erstellen, die beim Klicken eine neue ausgehende E-Mail-Nachricht öffnen, anstatt auf eine Ressource oder Seite zu verlinken. Dies wird unter Verwendung des {{HTMLElement("a")}}-Elements und des `mailto:`-URL-Schemas durchgeführt.

In seiner grundlegendsten und am häufigsten verwendeten Form gibt ein `mailto:`-Link die E-Mail-Adresse des vorgesehenen Empfängers an. Zum Beispiel:

```html
<a href="mailto:nowhere@mozilla.org">Send email to nowhere</a>
```

Dies ergibt einen Link, der so aussieht: [E-Mail an nowhere senden](mailto:nowhere@mozilla.org).

Tatsächlich ist die E-Mail-Adresse optional. Wenn Sie sie weglassen und Ihr [`href`](/de/docs/Web/HTML/Element/a#href) "mailto:" ist, wird ein neues ausgehendes E-Mail-Fenster vom E-Mail-Client des Benutzers ohne Zieladresse geöffnet.
Dies wird oft als "Teilen"-Links verwendet, die Benutzer anklicken können, um eine E-Mail an eine Adresse ihrer Wahl zu senden.

### Angaben spezifizieren

Zusätzlich zur E-Mail-Adresse können Sie weitere Informationen angeben. Tatsächlich können alle standardmäßigen E-Mail-Headerfelder der `mailto` URL, die Sie angeben, hinzugefügt werden.
Die am häufigsten verwendeten davon sind "subject", "cc" und "body" (was kein echtes Headerfeld ist, sondern es Ihnen ermöglicht, eine kurze Inhaltsnachricht für die neue E-Mail anzugeben).
Jedes Feld und sein Wert wird als Abfragebegriff spezifiziert.

Hier ist ein Beispiel, das eine cc, bcc, subject und body enthält:

```html
<a
  href="mailto:nowhere@mozilla.org?cc=name2@rapidtables.com&bcc=name3@rapidtables.com&subject=The%20subject%20of%20the%20email&body=The%20body%20of%20the%20email">
  Send mail with cc, bcc, subject and body
</a>
```

> [!NOTE]
> Die Werte jedes Feldes müssen mit nicht druckbaren Zeichen (unsichtbare Zeichen wie Tabs, Wagenrücklauf und Seitenumbrüche) und Leerzeichen {{Glossary("Percent-encoding", "percent-escaped")}} URL-codiert werden.
> Beachten Sie auch die Verwendung des Fragezeichens (`?`), um die Haupt-URL von den Feldwerten zu trennen, und der kaufmännischen Unds (&), um jedes Feld in der `mailto:` URL zu trennen.
> Dies ist eine Standard-URL-Abfragenotation.
> Lesen Sie [Die GET-Methode](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data#the_get_method), um zu verstehen, wofür die URL-Abfragenotation häufiger verwendet wird.

Hier sind einige andere Beispiel-`mailto`-URLs:

- <mailto:>
- <mailto:nowhere@mozilla.org>
- <mailto:nowhere@mozilla.org,nobody@mozilla.org>
- <mailto:nowhere@mozilla.org?cc=nobody@mozilla.org>
- <mailto:nowhere@mozilla.org?cc=nobody@mozilla.org&subject=This%20is%20the%20subject>

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: Links](/de/docs/Learn_web_development/Core/Structuring_content/Test_your_skills:_Links).

## Zusammenfassung

Das war's vorerst zu Links! Sie werden später im Kurs zu Links zurückkehren, wenn Sie beginnen, sie zu stylen. Als Nächstes für HTML werden Sie ein paar Herausforderungen durcharbeiten, die Ihr Verständnis der bisher behandelten Themen prüfen werden.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Advanced_text_features", "Learn_web_development/Core/Structuring_content/Marking_up_a_letter", "Learn_web_development/Core/Structuring_content")}}
