---
title: Erstellen von Hyperlinks
slug: Learn/HTML/Introduction_to_HTML/Creating_hyperlinks
l10n:
  sourceCommit: 5026c14bd6d2b6b377289aadac7eceae9282e806
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals", "Learn/HTML/Introduction_to_HTML/Advanced_text_formatting", "Learn/HTML/Introduction_to_HTML")}}

Hyperlinks sind sehr wichtig — sie machen das Web zu einem _Netz_.
Dieser Artikel zeigt die erforderliche Syntax, um einen Link zu erstellen, und bespricht bewährte Praktiken für Links.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende HTML-Kenntnisse, wie in
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
          >Erste Schritte mit HTML</a
        > behandelt. HTML-Textformatierung, wie in
        <a
          href="/de/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals"
          >HTML-Textgrundlagen</a
        > behandelt.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie man einen Hyperlink effektiv implementiert und mehrere
        Dateien miteinander verlinkt.
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein Hyperlink?

Hyperlinks sind eine der spannendsten Innovationen, die das Web zu bieten hat. Sie sind seit Anbeginn ein Merkmal des Webs und machen das Web zu einem _Netz_.
Hyperlinks ermöglichen es uns, Dokumente mit anderen Dokumenten oder Ressourcen zu verknüpfen, auf bestimmte Teile von Dokumenten zu verweisen oder Apps unter einer Web-Adresse bereitzustellen.
Fast jedes Web-Inhaltsstück kann in einen Link umgewandelt werden, sodass der Webbrowser beim Klicken oder sonstigen Aktivieren zu einer anderen Web-Adresse ({{Glossary("URL", "URL")}}) wechselt.

> [!NOTE]
> Eine URL kann auf HTML-Dateien, Textdateien, Bilder, Textdokumente, Video- und Audiodateien oder sonstige auf dem Web befindliche Objekte verweisen.
> Wenn der Webbrowser nicht weiß, wie er die Datei anzeigen oder handhaben soll, wird gefragt, ob die Datei geöffnet (in welchem Fall die Verantwortung zum Öffnen oder Handhaben der Datei an eine geeignete native App auf dem Gerät übergeben wird) oder heruntergeladen werden soll (in welchem Fall Sie sich später darum kümmern können).

Zum Beispiel enthält die BBC-Startseite viele Links, die nicht nur auf verschiedene Nachrichtenberichte, sondern auch auf verschiedene Bereiche der Website (Navigationsfunktionalität), Anmelde-/Registrierungsseiten (Benutzerwerkzeuge) und mehr verweisen.

![Startseite von bbc.co.uk, die viele Nachrichtenartikel und Navigationsmenü-Funktionalität zeigt](updated-bbc-website.png)

## Aufbau eines Links

Ein einfacher Link wird erstellt, indem der Text oder andere Inhalt in ein {{htmlelement("a")}}-Element eingebettet und das [`href`](/de/docs/Web/HTML/Element/a#href)-Attribut verwendet wird, auch bekannt als **Hypertext-Referenz** oder **Ziel**, das die Webadresse enthält.

```html
<p>
  I'm creating a link to
  <a href="https://www.mozilla.org/en-US/">the Mozilla homepage</a>.
</p>
```

Dies liefert uns das folgende Ergebnis:\
Ich erstelle einen Link zur [Mozilla-Startseite](https://www.mozilla.org/en-US/).

### Block-Level-Links

Wie zuvor erwähnt, kann fast jeder Inhalt in einen Link umgewandelt werden, sogar {{Glossary("Block/CSS", "Block-Level-Elemente")}}.
Wenn Sie ein Überschriftenelement in einen Link verwandeln möchten, betten Sie es in ein `anchor` (`<a>`) Element ein, wie im folgenden Codebeispiel gezeigt:

```html
<a href="https://developer.mozilla.org/en-US/">
  <h1>MDN Web Docs</h1>
</a>
<p>
  Documenting web technologies, including CSS, HTML, and JavaScript, since 2005.
</p>
```

Dies macht die Überschrift zu einem Link:
{{EmbedLiveSample('Block level links', '100%', 150)}}

### Bild-Links

Wenn Sie ein Bild, das Sie in einen Link verwandeln möchten, haben, verwenden Sie das {{htmlelement("a")}}-Element, um die mit dem {{htmlelement("img")}}-Element referenzierte Bilddatei einzubetten. Das folgende Beispiel verwendet einen relativen Pfad, um eine lokal gespeicherte SVG-Bilddatei zu referenzieren.

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
> Sie werden mehr darüber erfahren, wie Sie Bilder im Web verwenden können, in einem späteren Artikel.

### Hinzufügen unterstützender Informationen mit dem `title`-Attribut

Ein weiteres Attribut, das Sie Ihren Links hinzufügen möchten, ist `title`.
Der Titel enthält zusätzliche Informationen über den Link, z. B. welche Art von Informationen die Seite enthält oder Dinge, die auf der Website zu beachten sind.

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

Dies gibt uns das folgende Ergebnis und wenn man über den Link schwebt, wird der Titel als Tooltip angezeigt:

{{EmbedLiveSample('Adding supporting information with the title attribute', '100%', 150)}}

> [!NOTE]
> Ein Linktitel wird nur bei Maus-Hover angezeigt, was bedeutet, dass Personen, die auf Tastatursteuerungen oder Touchscreens angewiesen sind, um Webseiten zu navigieren, möglicherweise Schwierigkeiten haben, Titelinformationen zu erhalten.
> Wenn die Informationen eines Titels tatsächlich wichtig für die Benutzerfreundlichkeit der Seite sind, sollten Sie sie in einer Weise darstellen, die für alle Benutzer zugänglich ist, z. B. indem Sie sie in den regulären Text einfügen.

### Aktives Lernen: Erstellen Ihres eigenen Beispiel-Links

Erstellen Sie ein HTML-Dokument mit Ihrem lokalen Code-Editor und unserer [Vorlage für den Einstieg](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html).

- Fügen Sie im HTML-Body einen oder mehrere Absätze oder andere Inhalte hinzu, die Sie bereits kennen.
- Verwandeln Sie einige der Inhalte in Links.
- Fügen Sie `title`-Attribute hinzu.

## Eine kurze Einführung in URLs und Pfade

Um Linkziele vollständig zu verstehen, müssen Sie URLs und Dateipfade verstehen. Dieser Abschnitt gibt Ihnen die notwendigen Informationen, um dies zu erreichen.

Eine URL oder Uniform Resource Locator ist eine Zeichenfolge, die definiert, wo sich etwas im Web befindet. Zum Beispiel ist die englische Startseite von Mozilla unter `https://www.mozilla.org/en-US/` zu finden.

URLs verwenden Pfade, um Dateien zu finden. Pfade geben an, wo sich die Datei, die Sie interessiert, im Dateisystem befindet. Schauen wir uns ein Beispiel für eine Verzeichnisstruktur an, sehen Sie sich das Verzeichnis [creating-hyperlinks](https://github.com/mdn/learning-area/tree/main/html/introduction-to-html/creating-hyperlinks) an.

![Eine einfache Verzeichnisstruktur. Das übergeordnete Verzeichnis heißt creating-hyperlinks und enthält zwei Dateien namens index.html und contacts.html sowie zwei Verzeichnisse namens projects und pdfs, die jeweils eine index.html und eine project-brief.pdf-Datei enthalten](simple-directory.png)

Das **root** dieser Verzeichnisstruktur heißt `creating-hyperlinks`. Wenn Sie lokal mit einer Website arbeiten, gibt es ein Verzeichnis, das die gesamte Website enthält. Innerhalb des **root** haben wir eine `index.html` Datei und eine `contacts.html`. Auf einer echten Website wäre `index.html` unsere Homepage oder Startseite (eine Webseite, die als Einstiegspunkt für eine Website oder einen bestimmten Abschnitt einer Website dient).

Es gibt auch zwei Verzeichnisse innerhalb unseres root — `pdfs` und `projects`. Diese haben jeweils eine einzelne Datei in sich — ein PDF (`project-brief.pdf`) und eine `index.html` Datei. Beachten Sie, dass Sie zwei `index.html`-Dateien in einem Projekt haben können, solange sie sich in verschiedenen Dateisystemstandorten befinden. Die zweite `index.html` wäre vielleicht die Haupt-Einstiegsseite für projektbezogene Informationen.

- **Gleiches Verzeichnis**: Wenn Sie einen Hyperlink innerhalb von `index.html` (dem Top-Level `index.html`) einfügen möchten, der auf `contacts.html` verweist, geben Sie den Dateinamen an, zu dem Sie verlinken möchten, da er sich im gleichen Verzeichnis wie die aktuelle Datei befindet. Die URL, die Sie verwenden würden, ist `contacts.html`:

  ```html
  <p>
    Want to contact a specific staff member? Find details on our
    <a href="contacts.html">contacts page</a>.
  </p>
  ```

- **In Unterverzeichnisse absteigen**: Wenn Sie einen Hyperlink innerhalb von `index.html` (dem Top-Level `index.html`) einfügen möchten, der auf `projects/index.html` verweist, müssen Sie in das `projects`-Verzeichnis hinuntergehen, bevor Sie die gewünschte Datei angeben. Dies geschieht, indem Sie den Namen des Verzeichnisses, dann einen Schrägstrich und dann den Namen der Datei angeben. Die URL, die Sie verwenden würden, ist `projects/index.html`:

  ```html
  <p>Visit my <a href="projects/index.html">project homepage</a>.</p>
  ```

- **In übergeordnete Verzeichnisse zurückkehren**: Wenn Sie einen Hyperlink innerhalb von `projects/index.html` einfügen möchten, der auf `pdfs/project-brief.pdf` verweist, müssen Sie eine Verzeichnisebene nach oben und dann in das `pdfs`-Verzeichnis zurückkehren. Um ein Verzeichnis nach oben zu gehen, verwenden Sie zwei Punkte — `..` — die URL, die Sie verwenden würden, ist `../pdfs/project-brief.pdf`:

  ```html
  <p>A link to my <a href="../pdfs/project-brief.pdf">project brief</a>.</p>
  ```

> [!NOTE]
> Sie können mehrere Instanzen dieser Funktionen kombinieren, um bei Bedarf komplexe URLs zu erstellen, z. B.: `../../../complex/path/to/my/file.html`.

### Dokumentfragmente

Es ist möglich, auf einen bestimmten Teil eines HTML-Dokuments, ein sogenanntes **Dokumentfragment**, zu verlinken, anstatt nur auf den Anfang des Dokuments zu verlinken. Dazu müssen Sie zuerst einem Element, auf das Sie verlinken möchten, ein [`id`](/de/docs/Web/HTML/Global_attributes/id)-Attribut zuweisen. Es macht normalerweise Sinn, auf eine spezifische Überschrift zu verlinken, das sieht dann folgendermaßen aus:

```html
<h2 id="Mailing_address">Mailing address</h2>
```

Um auf diese spezifische `id` zu verlinken, fügen Sie sie am Ende der URL, dem Hashzeichen (`#`) vorangestellt, hinzu, z. B.:

```html
<p>
  Want to write us a letter? Use our
  <a href="contacts.html#Mailing_address">mailing address</a>.
</p>
```

Sie können den Dokumentfragment-Referenz sogar allein verwenden, um _einen anderen Teil des aktuellen Dokuments_ zu verlinken:

```html
<p>
  The <a href="#Mailing_address">company mailing address</a> can be found at the
  bottom of this page.
</p>
```

### Absolute vs. relative URLs

Zwei Begriffe, auf die Sie im Web stoßen werden, sind **absolute URL** und **relative URL:**

**absolute URL**: Verweist auf einen Ort, der durch seinen absoluten Standort im Web definiert ist, einschließlich {{Glossary("protocol", "Protokoll")}} und {{Glossary("domain_name", "Domainname")}}.
Beispielsweise, wenn eine `index.html` Seite in ein Verzeichnis namens `projects` hochgeladen wird, das sich im **root** eines Webservers befindet, und die Domain der Website `https://www.example.com` lautet, wäre die Seite unter `https://www.example.com/projects/index.html` verfügbar (oder sogar nur `https://www.example.com/projects/`, da die meisten Webserver nach einer Einstiegsseite wie `index.html` suchen, falls sie in der URL nicht angegeben wird.)

Eine absolute URL zeigt immer auf den gleichen Standort, egal wo sie verwendet wird.

**relative URL**: Verweist auf einen Standort, der _relativ_ zu der Datei ist, von der aus Sie verlinken, ähnlich wie wir es im vorherigen Abschnitt gesehen haben.
Beispielsweise, wenn wir von unserer Beispieldatei unter `https://www.example.com/projects/index.html` zu einer PDF-Datei im gleichen Verzeichnis verlinken wollten, wäre die URL einfach der Dateiname — `project-brief.pdf` — keine zusätzlichen Informationen erforderlich. Wenn die PDF-Datei in einem Unterverzeichnis innerhalb `projects` namens `pdfs` verfügbar wäre, wäre der relative Link `pdfs/project-brief.pdf` (die entsprechende absolute URL wäre `https://www.example.com/projects/pdfs/project-brief.pdf`.)

Eine relative URL zeigt auf verschiedene Orte, abhängig vom tatsächlichen Standort der Datei, von der aus Sie verweisen — zum Beispiel, wenn wir unsere `index.html`-Datei aus dem `projects`-Verzeichnis heraus in das **root** der Website (die oberste Ebene, in keinem Verzeichnis) verschieben würden, würde der relative URL-Link `pdfs/project-brief.pdf` darin jetzt auf eine Datei unter `https://www.example.com/pdfs/project-brief.pdf` verweisen und nicht mehr auf eine Datei unter `https://www.example.com/projects/pdfs/project-brief.pdf`.

Natürlich ändern sich der Standort der `project-brief.pdf`-Datei und des `pdfs`-Ordners nicht plötzlich, weil Sie die `index.html`-Datei verschoben haben — das würde Ihren Link auf den falschen Ort weisen, sodass er nicht funktionieren würde, wenn man darauf klickt. Sie müssen vorsichtig sein!

## Beste Praktiken für Links

Es gibt einige bewährte Praktiken, die beim Verfassen von Links beachtet werden sollten. Schauen wir uns diese jetzt an.

### Verwenden Sie klare Linkformulierungen

Es ist einfach, Links auf Ihrer Seite zu platzieren. Das ist nicht genug. Wir müssen unsere Links _zugänglich_ für alle Leser machen, unabhängig vom aktuellen Kontext und welche Werkzeuge sie bevorzugen. Beispiele:

- Screenreader-Benutzer springen gerne von Link zu Link auf der Seite und lesen Links außerhalb des Kontexts.
- Suchmaschinen verwenden Linktexte, um Zieldateien zu indexieren, daher ist es eine gute Idee, Schlüsselwörter in Ihrem Linktext zu inkludieren, um effektiv zu beschreiben, was verlinkt wird.
- Visuelle Leser überfliegen die Seite, anstatt jedes Wort zu lesen, und ihre Augen werden zu auffälligen Merkmalen geführt, wie Links. Sie werden beschreibende Linktexte nützlich finden.

Schauen wir uns ein konkretes Beispiel an:

**Guter** Linktext: [Firefox herunterladen](https://www.mozilla.org/en-US/firefox/new/?redirect_source=firefox-com)

```html example-good
<p><a href="https://www.mozilla.org/en-US/firefox/">Download Firefox</a></p>
```

**Schlechter** Linktext: [Hier klicken](https://www.mozilla.org/en-US/firefox/), um Firefox herunterzuladen

```html example-bad
<p>
  <a href="https://www.mozilla.org/en-US/firefox/">Click here</a> to download
  Firefox
</p>
```

Weitere Tipps:

- Wiederholen Sie nicht die URL als Teil des Linktexts — URLs sehen hässlich aus und klingen noch hässlicher, wenn ein Screenreader sie buchstabenweise vorliest.
- Sagen Sie nicht "Link" oder "führt zu" im Linktext — das ist nur Rauschen. Screenreader sagen den Leuten, dass es einen Link gibt. Visuelle Benutzer wissen auch, dass es einen Link gibt, denn Links sind in der Regel in einer anderen Farbe und unterstrichen (diese Konvention sollte im Allgemeinen nicht gebrochen werden, da Benutzer daran gewöhnt sind).
- Halten Sie Ihren Linktext so kurz wie möglich — das ist hilfreich, da Screenreader den gesamten Linktext interpretieren müssen.
- Minimieren Sie Instanzen, in denen mehrere Kopien des gleichen Textes zu verschiedenen Orten verlinken. Dies kann für Screenreader-Benutzer problematisch werden, wenn es eine Liste von Links außerhalb des Kontexts gibt, die mit "hier klicken", "hier klicken", "hier klicken" beschriftet sind.

### Verlinken nicht-HTML-Ressourcen — klare Wegmarken hinterlassen

Wenn Sie zu einer Ressource verlinken, die heruntergeladen wird (z. B. ein PDF oder Word-Dokument), gestreamt wird (wie Video oder Audio) oder eine andere möglicherweise unerwartete Wirkung hat (öffnet ein Popup-Fenster), sollten Sie klare Formulierungen hinzufügen, um Verwirrung zu vermeiden.

Zum Beispiel:

- Wenn Sie eine langsame Internetverbindung verwenden, auf einen Link klicken und dann unerwartet ein Download von mehreren Megabyte beginnt.

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

### Verwenden Sie das `download`-Attribut beim Verlinken eines Downloads

Wenn Sie zu einer Ressource verlinken, die heruntergeladen und nicht im Browser geöffnet werden soll, können Sie das `download`-Attribut verwenden, um einen Standard-Download-Dateinamen anzugeben. Hier ein Beispiel mit einem Download-Link für die neueste Windows-Version von Firefox:

```html
<a
  href="https://download.mozilla.org/?product=firefox-latest-ssl&os=win64&lang=en-US"
  download="firefox-latest-64bit-installer.exe">
  Download Latest Firefox for Windows (64-bit) (English, US)
</a>
```

## Aktives Lernen: Erstellen eines Navigationsmenüs

Für diese Übung möchten wir, dass Sie einige Seiten mit einem Navigationsmenü verlinken, um eine mehrseitige Website zu erstellen. Dies ist eine übliche Weise, wie eine Website erstellt wird — die gleiche Seitenstruktur wird auf jeder Seite verwendet, einschließlich des gleichen Navigationsmenüs, sodass beim Klicken auf Links der Eindruck entsteht, dass Sie am gleichen Ort bleiben und unterschiedliche Inhalte angezeigt werden.

Sie müssen lokale Kopien der folgenden vier Seiten erstellen, alle im gleichen Verzeichnis. Eine vollständige Dateiliste finden Sie im [navigation-menu-start](https://github.com/mdn/learning-area/tree/main/html/introduction-to-html/navigation-menu-start) Verzeichnis:

- [index.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/index.html)
- [projects.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/projects.html)
- [pictures.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/pictures.html)
- [social.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/social.html)

Sie sollten:

1. Fügen Sie auf einer Seite an der angegebenen Stelle eine ungeordnete Liste hinzu, die die Namen der zu verlinkenden Seiten enthält. Ein Navigationsmenü ist normalerweise nur eine Liste von Links, daher ist dies semantisch in Ordnung.
2. Ändern Sie jeden Seitennamen in einen Link zu dieser Seite.
3. Kopieren Sie das Navigationsmenü auf jede Seite.
4. Entfernen Sie auf jeder Seite nur den Link zu dieser Seite selbst — es ist verwirrend und unnötig, dass eine Seite einen Link zu sich selbst enthält. Und das Fehlen eines Links dient als gute visuelle Erinnerung, auf welcher Seite Sie sich derzeit befinden.

Das fertige Beispiel sollte ähnlich wie die folgende Seite aussehen:

![Ein Beispiel für ein einfaches HTML-Navigationsmenü mit Home, Pictures, Projects und Social Menüelementen](navigation-example.png)

> [!NOTE]
> Wenn Sie nicht weiterkommen oder sich nicht sicher sind, ob Sie es richtig gemacht haben, können Sie das Verzeichnis [navigation-menu-marked-up](https://github.com/mdn/learning-area/tree/main/html/introduction-to-html/navigation-menu-marked-up) überprüfen, um die richtige Antwort zu sehen.

## E-Mail-Links

Es ist möglich, Links oder Schaltflächen zu erstellen, die beim Anklicken ein neues ausgehendes E-Mail-Fenster öffnen, anstatt auf eine Ressource oder Seite zu verlinken. Dies erfolgt mit dem {{HTMLElement("a")}}-Element und dem `mailto:`-URL-Schema.

In seiner einfachsten und am häufigsten verwendeten Form gibt ein `mailto:`-Link die E-Mail-Adresse des vorgesehenen Empfängers an. Zum Beispiel:

```html
<a href="mailto:nowhere@mozilla.org">Send email to nowhere</a>
```

Dies führt zu einem Link, der so aussieht: [E-Mail an nirgendwo senden](mailto:nowhere@mozilla.org).

Tatsächlich ist die E-Mail-Adresse optional. Wenn Sie sie weglassen und Ihr [`href`](/de/docs/Web/HTML/Element/a#href) "mailto:" ist, öffnet der E-Mail-Client des Benutzers ein neues ausgehendes E-Mail-Fenster ohne Zieladresse. Dies ist oft nützlich als "Teilen"-Links, die Benutzer anklicken können, um eine E-Mail an eine Adresse ihrer Wahl zu senden.

### Details angeben

Zusätzlich zur E-Mail-Adresse können Sie weitere Informationen bereitstellen. Tatsächlich kann jede Standard-Mail-Headerzeile zur `mailto`-URL hinzugefügt werden, die Sie angeben. Die am häufigsten verwendeten sind "subject", "cc" und "body" (was kein echter Header-Feld ist, sondern es Ihnen ermöglicht, eine kurze Inhaltsnachricht für die neue E-Mail anzugeben). Jedes Feld und sein Wert wird als Abfragebegriff angegeben.

Hier ist ein Beispiel, das ein cc, bcc, subject und body beinhaltet:

```html
<a
  href="mailto:nowhere@mozilla.org?cc=name2@rapidtables.com&bcc=name3@rapidtables.com&subject=The%20subject%20of%20the%20email&body=The%20body%20of%20the%20email">
  Send mail with cc, bcc, subject and body
</a>
```

> [!NOTE]
> Die Werte jedes Feldes müssen URL-kodiert sein, mit nicht druckbaren Zeichen (unsichtbaren Zeichen wie Tabs, Wagenrückläufen und Seitenumbrüchen) und Leerzeichen {{Glossary("Percent-encoding", "Prozent-codiert")}}.
> Beachten Sie auch die Verwendung des Fragezeichens (`?`), um die Haupt-URL von den Feldwerten zu trennen, und der Kaufmanns-und-Zeichen (&), um jedes Feld in der `mailto:`-URL zu trennen.
> Dies ist die Standardnotation für URL-Abfragen.
> Lesen Sie [Die GET-Methode](/de/docs/Learn/Forms/Sending_and_retrieving_form_data#the_get_method), um zu verstehen, wofür die URL-Abfrage-Notation üblicherweise verwendet wird.

Hier sind ein paar weitere Beispiele für `mailto`-URLs:

- <mailto:>
- <mailto:nowhere@mozilla.org>
- <mailto:nowhere@mozilla.org,nobody@mozilla.org>
- <mailto:nowhere@mozilla.org?cc=nobody@mozilla.org>
- <mailto:nowhere@mozilla.org?cc=nobody@mozilla.org&subject=This%20is%20the%20subject>

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Links](/de/docs/Learn/HTML/Introduction_to_HTML/Test_your_skills:_Links).

## Zusammenfassung

Das war's erstmal zu Links! Sie werden später im Kurs zu Links zurückkehren, wenn Sie beginnen, das Styling zu betrachten. Als Nächstes für HTML kehren wir zu Textsemantik zurück und betrachten einige fortgeschrittenere/unübliche Funktionen, die Sie nützlich finden werden — [Fortgeschrittene Textformatierung](/de/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting) ist Ihr nächster Halt.

{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals", "Learn/HTML/Introduction_to_HTML/Advanced_text_formatting", "Learn/HTML/Introduction_to_HTML")}}
