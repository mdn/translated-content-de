---
title: Erstellen von Links
slug: Learn_web_development/Core/Structuring_content/Creating_links
l10n:
  sourceCommit: 960a94a198ca60fb04fe63857ea61d7306465791
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Advanced_text_features", "Learn_web_development/Core/Structuring_content/Marking_up_a_letter", "Learn_web_development/Core/Structuring_content")}}

Links (auch als Hyperlinks bekannt) sind sehr wichtig — sie sind das, was das Web _zu einem Netz_ macht.
Dieser Artikel zeigt die erforderliche Syntax zur Erstellung eines Links und diskutiert bewährte Vorgehensweisen für Links.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML, wie in
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
          <li>Verstehen, warum Links die grundlegende Funktion des Internets sind. Es gibt kein Netz ohne Links.</li>
          <li>Das <code>href</code>-Attribut.</li>
          <li>Absolute und relative Pfade und wann sie verwendet werden sollten.</li>
          <li>Details der Pfadsyntax — Schrägstriche, einzelner Punkt und doppelter Punkt.</li>
          <li>Linkzustände und warum sie wichtig sind — <code>:hover</code>, <code>:focus</code>, <code>:visited</code> und <code>:active</code>.</li>
          <li>Inline- und Blocklink-Elemente.</li>
          <li>Verstehen der Vorteile des Schreibens guter Linktexte, wie z.B. bessere Zugänglichkeit für Screenreader-Nutzer und potenziell positive SEO-Effekte.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein Hyperlink?

Hyperlinks sind eine der spannendsten Innovationen, die das Internet zu bieten hat.
Sie sind seit Beginn ein Merkmal des Internets und machen das Internet _zu einem Netz_.
Hyperlinks erlauben es uns, Dokumente mit anderen Dokumenten oder Ressourcen zu verknüpfen, auf spezifische Abschnitte von Dokumenten zu verlinken oder Anwendungen an einer Webadresse verfügbar zu machen.
Fast jeder Webinhalt kann in einen Link umgewandelt werden, sodass bei einem Klick oder einer anderen Aktivierung der Webbrowser zu einer anderen Webadresse ({{Glossary("URL", "URL")}}) wechselt.

> [!NOTE]
> Eine URL kann auf HTML-Dateien, Textdateien, Bilder, Textdokumente, Video- und Audiodateien oder alles andere verweisen, das im Web lebt.
> Wenn der Webbrowser nicht weiß, wie man die Datei darstellt oder handhabt, wird er Sie fragen, ob Sie die Datei öffnen möchten (in diesem Fall wird das Öffnen oder Handhaben der Datei an eine geeignete native App auf dem Gerät übergeben) oder die Datei herunterladen möchten (dann können Sie später versuchen, sie zu bearbeiten).

Zum Beispiel enthält die BBC-Homepage viele Links, die nicht nur auf mehrere Nachrichten, sondern auch auf verschiedene Bereiche der Website (Navigationsfunktion), Anmelde-/Registrierungsseiten (Benutzerwerkzeuge) und mehr verweisen.

![Titelbild der Seite bbc.co.uk, zeigt viele Nachrichtenartikel, und Navigationsmenüfunktionalität](updated-bbc-website.png)

## Anatomie eines Links

Ein grundlegender Link wird erstellt, indem der Text oder andere Inhalt in ein {{htmlelement("a")}}-Element eingeschlossen wird und das [`href`](/de/docs/Web/HTML/Reference/Elements/a#href)-Attribut, auch bekannt als **Hypertext-Reference** oder **Ziel**, verwendet wird, das die Webadresse enthält.

```html
<p>
  I'm creating a link to
  <a href="https://www.mozilla.org/en-US/">the Mozilla homepage</a>.
</p>
```

Dies gibt uns das folgende Ergebnis:

Ich erstelle einen Link zur [Mozilla-Homepage](https://www.mozilla.org/en-US/).

### Blocklevel-Links

Wie bereits erwähnt, kann fast jeder Inhalt in einen Link umgewandelt werden, sogar {{Glossary("Block/CSS", "Blocklevel-Elemente")}}.
Wenn Sie ein Überschriftenelement zu einem Link machen möchten, dann schließen Sie es in ein Anker (`<a>`)-Element ein, wie im folgenden Code-Schnipsel gezeigt:

```html
<a href="https://developer.mozilla.org/en-US/">
  <h1>MDN Web Docs</h1>
</a>
<p>
  Documenting web technologies, including CSS, HTML, and JavaScript, since 2005.
</p>
```

Dies verwandelt die Überschrift in einen Link:
{{EmbedLiveSample('Blocklevel-Links', '100%', 150)}}

### Bild-Links

Um ein Bild in einen Link zu verwandeln, wird das {{htmlelement("img")}}-Element mit einem {{htmlelement("a")}}-Element eingeschlossen. Das folgende Beispiel verwendet einen relativen Pfad, um auf eine lokal gespeicherte SVG-Bilddatei zu verweisen.

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
> Sie werden mehr über die Verwendung von Bildern im Internet in einem zukünftigen Artikel erfahren.

### Hinzufügen unterstützender Informationen mit dem title-Attribut

Ein weiteres Attribut, das Sie Ihren Links hinzufügen möchten, ist `title`.
Der Titel enthält zusätzliche Informationen über den Link, z.B. welche Art von Informationen die Seite enthält oder Dinge, die man auf der Website beachten sollte.

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

Dies gibt uns das folgende Ergebnis und beim Überfahren des Links mit der Maus wird der Titel als Tooltip angezeigt:

{{EmbedLiveSample('Hinzufügen unterstützender Informationen mit dem title-Attribut', '100%', 150)}}

> [!NOTE]
> Ein Linktitel wird nur beim Überfahren mit der Maus angezeigt, was bedeutet, dass Personen, die auf Tastatursteuerung oder Touchscreens angewiesen sind, Schwierigkeiten haben werden, diese Informationen zu erreichen.
> Wenn die Informationen eines Titels wirklich wichtig für die Benutzbarkeit der Seite sind, sollten Sie sie auf eine Weise präsentieren, die für alle Benutzer zugänglich ist, z.B. indem Sie sie im regulären Text platzieren.

### Aktive Lernaufgabe: Erstellen eines eigenen Beispiel-Links

Erstellen Sie ein HTML-Dokument mit Ihrem lokalen Code-Editor und unserer [Startvorlage](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html).

- Fügen Sie im HTML-Body ein oder mehrere Absätze oder andere bereits bekannte Inhalte hinzu.
- Verändern Sie einen Teil des Inhalts in Links.
- Fügen Sie title-Attribute hinzu.

## Ein kurzer Überblick über URLs und Pfade

Um Linkziele vollständig zu verstehen, müssen Sie URLs und Dateipfade verstehen. Dieser Abschnitt bietet Ihnen die Informationen, die Sie dafür benötigen.

Eine URL, oder Uniform Resource Locator, ist eine Textzeichenfolge, die definiert, wo etwas im Internet zu finden ist. Zum Beispiel befindet sich die englische Homepage von Mozilla unter `https://www.mozilla.org/en-US/`.

URLs verwenden Pfade, um Dateien zu finden. Pfade geben an, wo sich die Datei, an der Sie interessiert sind, im Dateisystem befindet. Sehen wir uns ein Beispiel für eine Verzeichnisstruktur an, siehe die unten gezeigte `creating-hyperlinks`-Verzeichnisstruktur:

![Eine einfache Verzeichnisstruktur. Das übergeordnete Verzeichnis heißt creating-hyperlinks und enthält zwei Dateien namens index.html und contacts.html, sowie zwei Verzeichnisse namens projects und pdfs, die jeweils eine index.html- und eine project-brief.pdf-Datei enthalten](simple-directory.png)

Das **Stammverzeichnis** dieser Verzeichnisstruktur heißt `creating-hyperlinks`. Wenn Sie lokal mit einer Website arbeiten, haben Sie ein Verzeichnis, das die gesamte Site enthält. Im **Stammverzeichnis** haben wir eine `index.html`-Datei und eine `contacts.html`. In einer echten Website wäre `index.html` unsere Start- oder Einstiegsseite (eine Webseite, die als Einstiegspunkt für eine Website oder einen bestimmten Abschnitt einer Website dient).

Es gibt auch zwei Verzeichnisse innerhalb unseres Stammverzeichnisses — `pdfs` und `projects`. Diese haben jeweils eine einzige Datei darin — ein PDF (`project-brief.pdf`) und eine `index.html`-Datei. Beachten Sie, dass Sie zwei `index.html`-Dateien in einem Projekt haben können, solange sie sich an unterschiedlichen Standorten im Dateisystem befinden. Die zweite `index.html` wäre vielleicht die Hauptlandeseite für projektbezogene Informationen.

Sehen wir uns einige Beispiele für Links zwischen verschiedenen Dateien in dieser Verzeichnisstruktur an, um verschiedene Linktypen zu demonstrieren:

- **Gleiches Verzeichnis**: Wenn Sie einen Hyperlink in `index.html` (das Top-Level `index.html`) einfügen möchten, der auf `contacts.html` verweist, geben Sie den Dateinamen an, den Sie verlinken möchten, da er sich im gleichen Verzeichnis wie die aktuelle Datei befindet. Die URL, die Sie verwenden würden, ist `contacts.html`:

  ```html
  <p>
    Want to contact a specific staff member? Find details on our
    <a href="contacts.html">contacts page</a>.
  </p>
  ```

- **In Unterverzeichnisse wechseln**: Wenn Sie einen Hyperlink in `index.html` (das Top-Level `index.html`) einfügen möchten, der auf `projects/index.html` verweist, müssen Sie in das `projects`-Verzeichnis wechseln, bevor Sie die Datei angeben, die Sie verlinken möchten.
  Dies geschieht durch Angabe des Verzeichnisnamens, dann einen Schrägstrich und dann den Dateinamen. Die URL, die Sie verwenden würden, ist `projects/index.html`:

  ```html
  <p>Visit my <a href="projects/index.html">project homepage</a>.</p>
  ```

- **Zurück in übergeordnete Verzeichnisse wechseln**: Wenn Sie einen Hyperlink in `projects/index.html` einfügen möchten, der auf `pdfs/project-brief.pdf` verweist, müssen Sie ein Verzeichnisebene nach oben gehen, und dann in das `pdfs`-Verzeichnis wechseln.
  Um ein Verzeichnisebene nach oben zu gehen, benutzen Sie zwei Punkte — `..` — sodass die URL, die Sie verwenden würden, `../pdfs/project-brief.pdf` ist:

  ```html
  <p>A link to my <a href="../pdfs/project-brief.pdf">project brief</a>.</p>
  ```

> [!NOTE]
> Sie können mehrere Instanzen dieser Merkmale kombinieren, um komplexe URLs zu erstellen, falls nötig, zum Beispiel: `../../../complex/path/to/my/file.html`.

### Dokumentfragmente

Es ist möglich, auf einen bestimmten Teil eines HTML-Dokuments zu verlinken, bekannt als ein **Dokumentfragment**, anstatt nur auf den Anfang des Dokuments zu verweisen.
Um dies zu tun, müssen Sie einem Element zuerst ein [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut zuweisen, zu dem Sie verlinken möchten.
Es macht normalerweise Sinn, zu einer bestimmten Überschrift zu verlinken, sodass dies etwa so aussieht:

```html
<h2 id="Mailing_address">Mailing address</h2>
```

Um dann auf diese spezifische `id` zu verlinken, würden Sie sie am Ende der URL einschließen, vorangestellt von einem Hash/Pfund-Symbol (`#`), zum Beispiel:

```html
<p>
  Want to write us a letter? Use our
  <a href="contacts.html#Mailing_address">mailing address</a>.
</p>
```

Sie können sogar die Dokumentfragment-Referenz selbst verwenden, um auf _einen anderen Teil des aktuellen Dokuments_ zu verlinken:

```html
<p>
  The <a href="#Mailing_address">company mailing address</a> can be found at the
  bottom of this page.
</p>
```

### Absolute vs. relative URLs

Zwei Begriffe, denen Sie im Web begegnen, sind **absolute URL** und **relative URL:**

**Absolute URL**: Zeigt auf einen Standort, definiert durch seine absolute Position im Internet, einschließlich {{Glossary("protocol", "Protokoll")}} und {{Glossary("domain_name", "Domain-Name")}}.
Zum Beispiel, wenn eine `index.html`-Seite in ein Verzeichnis namens `projects` hochgeladen wird, das sich im **Stammverzeichnis** eines Webservers befindet, und die Domain der Website `https://www.example.com` ist, wäre die Seite verfügbar unter `https://www.example.com/projects/index.html` (oder sogar nur `https://www.example.com/projects/`, da die meisten Webserver einfach nach einer Einstiegsseite wie `index.html` suchen, um sie zu laden, wenn sie in der URL nicht angegeben ist).

Eine absolute URL zeigt immer auf denselben Ort, egal wo sie verwendet wird.

**Relative URL**: Zeigt auf einen Standort, der _relativ_ zu der Datei ist, von der aus Sie verlinken, mehr so wie das, was wir im vorherigen Abschnitt betrachtet haben.
Zum Beispiel, wenn wir von unserer Beispieldatei bei `https://www.example.com/projects/index.html` zu einer PDF-Datei im gleichen Verzeichnis verlinken wollten, wäre die URL einfach der Dateiname — `project-brief.pdf` — keine zusätzlichen Informationen nötig. Würde sich das PDF in einem Unterverzeichnis innerhalb von `projects` befinden, das `pdfs` heißt, wäre der relative Link `pdfs/project-brief.pdf` (der entsprechende absolute URL wäre `https://www.example.com/projects/pdfs/project-brief.pdf`).

Eine relative URL zeigt auf verschiedene Orte, je nachdem wo sich die Datei wirklich befindet, von der aus Sie verweisen — zum Beispiel, wenn wir unsere `index.html`-Datei aus dem `projects`-Verzeichnis entfernen und ins **Stammverzeichnis** der Website verschieben (das oberste Verzeichnis, nicht in einem Unterverzeichnis), würde der `pdfs/project-brief.pdf`-relative URL-Link darin auf eine Datei zeigen, die sich unter `https://www.example.com/pdfs/project-brief.pdf` befindet, nicht auf eine Datei unter `https://www.example.com/projects/pdfs/project-brief.pdf`.

Natürlich ändert sich der Standort der `project-brief.pdf`-Datei und des `pdfs`-Ordners nicht plötzlich, weil Sie die `index.html` verschoben haben — dies würde Ihren Link auf den falschen Ort zeigen lassen, sodass er nicht funktionieren würde, wenn darauf geklickt wird. Sie müssen vorsichtig sein!

## Best Practices für Links

Es gibt einige bewährte Verfahren, die beim Schreiben von Links befolgt werden sollten. Sehen wir uns diese nun an.

### Verwenden Sie klare Linkformulierung

Es ist einfach, Links auf Ihrer Seite einzufügen. Das reicht aber nicht aus. Wir müssen sicherstellen, dass unsere Links _für alle Leser zugänglich_ sind, unabhängig von ihrem aktuellen Kontext und den von ihnen bevorzugten Werkzeugen. Zum Beispiel:

- Screenreader-Nutzer springen gerne von Link zu Link auf der Seite und lesen Links aus dem Kontext heraus.
- Suchmaschinen verwenden den Linktext, um Zieldateien zu indexieren, daher ist es eine gute Idee, relevante Schlüsselwörter in Ihren Linktext aufzunehmen, um effektiv zu beschreiben, worauf verlinkt wird.
- Visuelle Leser überfliegen die Seite, anstatt jedes Wort zu lesen, und ihre Augen werden zu Seitenelementen gezogen, die auffallen, wie Links. Sie werden beschreibenden Linktext nützlich finden.

Sehen wir uns ein konkretes Beispiel an:

**Guter** Linktext: [Download Firefox](https://www.mozilla.org/en-US/firefox/new/?redirect_source=firefox-com)

```html example-good
<p><a href="https://www.mozilla.org/en-US/firefox/">Download Firefox</a></p>
```

**Schlechter** Linktext: [Klicken Sie hier](https://www.mozilla.org/en-US/firefox/), um Firefox herunterzuladen.

```html example-bad
<p>
  <a href="https://www.mozilla.org/en-US/firefox/">Click here</a> to download
  Firefox
</p>
```

Weitere Tipps:

- Wiederholen Sie die URL nicht als Teil des Linktextes — URLs sehen unschön aus und hören sich noch schlimmer an, wenn ein Screenreader sie Buchstabe für Buchstabe vorliest.
- Sagen Sie nicht "Link" oder "verlinkt mit" im Linktext — das ist nur Lärm. Screenreader sagen den Menschen bereits, dass es sich um einen Link handelt.
  Auch visuelle Benutzer wissen, dass es sich um einen Link handelt, da Links in der Regel in einer anderen Farbe angezeigt werden und unterstrichen sind (diese Konvention sollte im Allgemeinen nicht gebrochen werden, da Benutzer daran gewöhnt sind).
- Halten Sie Ihren Linktext so kurz wie möglich — dies ist hilfreich, da Screenreader den gesamten Linktext interpretieren müssen.
- Minimieren Sie Vorkommen, bei denen mehrfach derselbe Text auf verschiedene Orte verlinkt wird.
  Dies kann Probleme für Screenreader-Nutzer verursachen, insbesondere wenn es eine Liste von Links ohne Kontext gibt, die als "klicken Sie hier", "klicken Sie hier", "klicken Sie hier" gekennzeichnet sind.

### Verlinken zu Nicht-HTML-Ressourcen — Hinterlassen Sie klare Hinweise

Beim Verlinken zu einer Ressource, die nicht wie eine "normale Navigation" auf der aktuellen Seite geöffnet wird, sollten Sie den Linktext mit klaren Hinweisen versehen, was passieren wird. Beispielsweise, wenn Sie eine Ressource herunterladen oder streamen, oder wenn der Link ein Popup öffnen oder einen anderen potenziell unerwarteten Effekt haben wird, sollte dies im Text angegeben werden. Dies ist wichtig für Benutzer mit niedriger Bandbreite, die die Vermeidung des Herunterladens von Ressourcen mit mehreren Megabyte wünschen. Es hilft auch, Erwartungen für Screenreader-Nutzer zu setzen, die sonst möglicherweise nicht wissen, was passiert.

Sehen wir uns einige Beispiele an, um zu sehen, welche Art von Text hier verwendet werden kann:

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

Wenn Sie zu einer Ressource verlinken, die heruntergeladen und nicht im Browser geöffnet werden soll, können Sie das `download`-Attribut verwenden, um einen Standardspeichernamen bereitzustellen. Hier ist ein Beispiel mit einer Download-Verknüpfung zur neusten Windows-Version von Firefox:

```html
<a
  href="https://download.mozilla.org/?product=firefox-latest-ssl&os=win64&lang=en-US"
  download="firefox-latest-64bit-installer.exe">
  Download Latest Firefox for Windows (64-bit) (English, US)
</a>
```

### Wann Links in einem neuen Tab geöffnet werden sollten

Links öffnen standardmäßig im selben Tab, auf dem sich die Seite befindet, was es dem Benutzer ermöglicht, mit der Zurück-Taste des Browsers zur vorherigen Seite zu navigieren. Viele Seiten (einschließlich MDN) entscheiden sich jedoch dafür, bestimmte Links, insbesondere externe Links, in einem neuen Tab zu öffnen. Dies kann durch Festlegung des [`target`](/de/docs/Web/HTML/Reference/Elements/a#target)-Attributs auf `"_blank"` erfolgen.

```html
Firefox is developed by the
<a href="https://www.mozilla.org/en-US/" target="_blank">Mozilla Foundation</a>.
```

Ob Links in einem neuen Tab geöffnet werden sollten, sollte eine bewusste Entscheidung sein, die auf Überlegungen zum Benutzererlebnis basiert. Hier sind einige Punkte, die Sie berücksichtigen sollten:

- Das Öffnen von Links in einem neuen Tab präsentiert die beiden Dokumente gleichzeitig, was für eine "parallele" Navigationserfahrung nützlich ist. Andererseits sind Links, die im selben Tab geöffnet werden, mehr wie eine Fortsetzung der aktuellen Seite.
- Das Öffnen von Links in einem neuen Tab kann desorientierend für Benutzer sein, die es gewohnt sind, die Zurück-Taste zu verwenden.
- Auch wenn Links standardmäßig im selben Tab geöffnet werden, können Benutzer diese immer noch in einem neuen Tab öffnen, indem sie Tastenkombinationen oder Kontextmenüoptionen verwenden. Umgekehrt sind Links, die in einem neuen Tab geöffnet werden, schwer in einem selben Tab zu öffnen.
- Screenreader-Nutzer können durch Links, die in einem neuen Tab geöffnet werden, verwirrt sein, da sie möglicherweise nicht bemerken, dass ein neuer Tab geöffnet wurde, und den Kontext ihrer Position auf der Seite verlieren können.

Ein häufiger Ansatz ist, externe Links in neuen Tabs und interne Links im selben Tab zu öffnen.
Einige Designer ziehen es vor, alle Links im selben Tab zu öffnen.
Wenn Sie Links in neuen Tabs öffnen, wird empfohlen, visuelle Hinweise für diese Links bereitzustellen, wie z.B. ein Symbol neben dem Linktext.

## Aktive Lernaufgabe: Erstellen eines Navigationsmenüs

Für diese Übung möchten wir, dass Sie einige Seiten mit einem Navigationsmenü verlinken, um eine mehrseitige Website zu erstellen. Dies ist eine übliche Art, wie eine Website erstellt wird — dieselbe Seitenstruktur wird auf jeder Seite verwendet, einschließlich des gleichen Navigationsmenüs, sodass beim Klicken auf Links der Eindruck entsteht, dass Sie am selben Ort bleiben und nur unterschiedlicher Inhalt angezeigt wird.

Sie müssen lokale Kopien der folgenden vier Seiten erstellen, alle im selben Verzeichnis. Für eine vollständige Dateiliste siehe das [navigation-menu-start](https://github.com/mdn/learning-area/tree/main/html/introduction-to-html/navigation-menu-start) Verzeichnis:

- [index.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/index.html)
- [projects.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/projects.html)
- [pictures.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/pictures.html)
- [social.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/social.html)

Sie sollten:

1. Fügen Sie an der angegebenen Stelle auf einer Seite eine ungeordnete Liste hinzu, die die Namen der zu verlinkenden Seiten enthält.
   Ein Navigationsmenü ist in der Regel einfach eine Liste von Links, daher ist dies semantisch in Ordnung.
2. Ändern Sie jeden Seitennamen in einen Link zu dieser Seite.
3. Kopieren Sie das Navigationsmenü auf jede Seite.
4. Entfernen Sie auf jeder Seite nur den Link zu dieser Seite selbst — es ist verwirrend und unnötig, wenn eine Seite einen Link zu sich selbst enthält.
   Und das Fehlen eines Links dient als gute optische Erinnerung daran, auf welcher Seite Sie sich gerade befinden.

Das fertige Beispiel sollte ähnlich wie die folgende Seite aussehen:

![Ein Beispiel für ein einfaches HTML-Navigationsmenü mit Heimat, Bilder, Projekte und soziale Menüelemente](navigation-example.png)

> [!NOTE]
> Wenn Sie stecken bleiben oder sich nicht sicher sind, ob Sie es richtig gemacht haben, können Sie das [navigation-menu-marked-up](https://github.com/mdn/learning-area/tree/main/html/introduction-to-html/navigation-menu-marked-up) Verzeichnis überprüfen, um die richtige Antwort zu sehen.

## E-Mail-Links

Es ist möglich, Links oder Buttons zu erstellen, die beim Anklicken eine neue ausgehende E-Mail-Nachricht öffnen, anstatt auf eine Ressource oder Seite zu verlinken.
Dies geschieht mit dem {{HTMLElement("a")}}-Element und dem `mailto:`-URL-Schema.

In seiner grundlegendsten und am häufigsten verwendeten Form gibt ein `mailto:`-Link die E-Mail-Adresse des vorgesehenen Empfängers an. Zum Beispiel:

```html
<a href="mailto:nowhere@mozilla.org">Send email to nowhere</a>
```

Dies ergibt einen Link, der so aussieht: [E-Mail an nowhere senden](mailto:nowhere@mozilla.org).

Tatsächlich ist die E-Mail-Adresse optional. Wenn Sie sie weglassen und Ihr [`href`](/de/docs/Web/HTML/Reference/Elements/a#href) "mailto:" ist, wird ein neues ausgehendes E-Mail-Fenster vom E-Mail-Client des Benutzers ohne Zieladresse geöffnet.
Dies wird oft als "Teilen"-Links verwendet, auf die Benutzer klicken können, um eine E-Mail an eine von ihnen gewählte Adresse zu senden.

### Details angeben

Zusätzlich zur E-Mail-Adresse können Sie andere Informationen hinzufügen. Tatsächlich können alle Standard-E-Mail-Header-Felder der `mailto`-URL hinzugefügt werden, die Sie bereitstellen.
Die am häufigsten verwendeten davon sind "subject", "cc" und "body" (das ist kein echtes Header-Feld, ermöglicht jedoch das Angeben einer kurzen Inhaltsnachricht für die neue E-Mail).
Jedes Feld und sein Wert werden als Abfragebegriff angegeben.

Hier ist ein Beispiel, das cc, bcc, subject und body enthält:

```html
<a
  href="mailto:nowhere@mozilla.org?cc=name2@rapidtables.com&bcc=name3@rapidtables.com&subject=The%20subject%20of%20the%20email&body=The%20body%20of%20the%20email">
  Send mail with cc, bcc, subject and body
</a>
```

> [!NOTE]
> Die Werte jedes Feldes müssen URL-kodiert sein mit nicht druckbaren Zeichen (unsichtbare Zeichen wie Tabs, Wagenrückläufe und Seitenumbrüche) und mit Leerzeichen {{Glossary("Percent-encoding", "Prozent-codiert")}}.
> Beachten Sie außerdem die Verwendung des Fragezeichens (`?`), um die Haupt-URL von den Feldwerten zu trennen, und des Kaufmanns-Und (&), um jedes Feld in der `mailto:`-URL zu trennen.
> Dies ist die Standard-URL-Abfrageschreibweise.
> Lesen Sie [Methode GET](/de/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data#the_get_method), um zu verstehen, wofür die URL-Abfrageschreibweise üblicherweise verwendet wird.

Hier sind einige andere beispielhafte `mailto`-URLs:

- <mailto:>
- <mailto:nowhere@mozilla.org>
- <mailto:nowhere@mozilla.org,nobody@mozilla.org>
- <mailto:nowhere@mozilla.org?cc=nobody@mozilla.org>
- <mailto:nowhere@mozilla.org?cc=nobody@mozilla.org&subject=Dies%20ist%20das%20Thema>

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie finden weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihr Wissen: Links](/de/docs/Learn_web_development/Core/Structuring_content/Test_your_skills/Links).

## Zusammenfassung

Das war es zunächst einmal zu Links! Später im Kurs werden Sie zu Links zurückkehren, wenn Sie beginnen, deren Gestaltung zu betrachten. Als nächstes werden Sie für HTML einige Herausforderungen durchgehen, die Ihr Verständnis der bisher behandelten Themen testen werden.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Advanced_text_features", "Learn_web_development/Core/Structuring_content/Marking_up_a_letter", "Learn_web_development/Core/Structuring_content")}}
