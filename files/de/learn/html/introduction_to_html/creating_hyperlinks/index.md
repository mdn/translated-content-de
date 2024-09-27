---
title: Erstellen von Hyperlinks
slug: Learn/HTML/Introduction_to_HTML/Creating_hyperlinks
l10n:
  sourceCommit: 530c1f54e63834411aa38789b1ac82e3831c4dfa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals", "Learn/HTML/Introduction_to_HTML/Advanced_text_formatting", "Learn/HTML/Introduction_to_HTML")}}

Hyperlinks sind wirklich wichtig – sie sind es, die das Web _zu einem Netz_ machen.
Dieser Artikel zeigt die Syntax, die zum Erstellen eines Links erforderlich ist, und erörtert Best Practices für Links.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML, wie sie in
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
          >Erste Schritte mit HTML</a
        > behandelt werden. HTML-Textformatierung, wie sie in
        <a
          href="/de/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals"
          >Grundlagen der HTML-Textformatierung</a
        > behandelt wird.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen, wie man einen Hyperlink effektiv implementiert und mehrere Dateien miteinander verlinkt.
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein Hyperlink?

Hyperlinks sind eine der aufregendsten Innovationen, die das Web zu bieten hat.
Sie sind seit Anbeginn des Webs eine Funktion und machen das Web zu einem Netz.
Hyperlinks ermöglichen es uns, Dokumente mit anderen Dokumenten oder Ressourcen zu verknüpfen, auf bestimmte Teile von Dokumenten zu verlinken oder Apps unter einer Webadresse verfügbar zu machen.
Fast jeder Webinhalt kann in einen Link umgewandelt werden, sodass beim Klicken oder anderweitigen Aktivieren der Webbrowser zu einer anderen Webadresse ([URL](/de/docs/Glossary/URL)) wechselt.

> [!NOTE]
> Eine URL kann auf HTML-Dateien, Textdateien, Bilder, Textdokumente, Video- und Audiodateien oder alles andere verweisen, was im Web existiert.
> Wenn der Webbrowser nicht weiß, wie er die Datei anzeigen oder verarbeiten soll, wird er Sie fragen, ob Sie die Datei öffnen möchten (in diesem Fall wird die Aufgabe des Öffnens oder Verarbeitens der Datei an eine geeignete native App auf dem Gerät übergeben) oder die Datei herunterladen möchten (in diesem Fall können Sie versuchen, sie später zu behandeln).

Zum Beispiel enthält die Startseite der BBC viele Links, die nicht nur auf mehrere Nachrichtenartikel, sondern auch auf verschiedene Bereiche der Website (Navigationsfunktionalität), Anmeldeseiten (Nutzerwerkzeuge) und mehr verweisen.

![Startseite von bbc.co.uk, die viele Nachrichtenartikel und Navigationsmenü-Funktionen zeigt](updated-bbc-website.png)

## Anatomie eines Links

Ein grundlegender Link wird erstellt, indem der Text oder andere Inhalte in ein {{htmlelement("a")}}-Element eingeschlossen werden und das Attribut [`href`](/de/docs/Web/HTML/Element/a#href) verwendet wird, auch bekannt als **Hypertext-Referenz** oder **Ziel**, das die Webadresse enthält.

```html
<p>
  I'm creating a link to
  <a href="https://www.mozilla.org/en-US/">the Mozilla homepage</a>.
</p>
```

Dies gibt uns das folgende Ergebnis:\
Ich erstelle einen Link zur [Mozilla-Homepage](https://www.mozilla.org/en-US/).

### Blockebenen-Links

Wie zuvor erwähnt, kann fast jeder Inhalt in einen Link umgewandelt werden, selbst [Blockebenen-Elemente](/de/docs/Glossary/Block/CSS).
Wenn Sie ein Überschriftselement zu einem Link machen möchten, dann schließen Sie es in ein Anker- (`<a>`) Element ein, wie im folgenden Code-Snippet gezeigt:

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

### Bildlinks

Wenn Sie ein Bild haben, das Sie in einen Link umwandeln möchten, verwenden Sie das {{htmlelement("a")}}-Element, um die Bilddatei zu umschließen, die mit dem {{htmlelement("img")}}-Element referenziert wird. Das untenstehende Beispiel verwendet einen relativen Pfad, um eine lokal gespeicherte SVG-Bilddatei zu referenzieren.

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

### Hinzufügen von unterstützenden Informationen mit dem Titel-Attribut

Ein weiteres Attribut, das Sie Ihren Links hinzufügen können, ist `title`.
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

{{EmbedLiveSample('Adding supporting information with the title attribute', '100%', 150)}}

> [!NOTE]
> Ein Linktitel wird nur beim Mouseover angezeigt, was bedeutet, dass Personen, die auf Tastatursteuerelemente oder Touchscreens angewiesen sind, Schwierigkeiten haben werden, auf Titelinformationen zuzugreifen.
> Wenn die Informationen eines Titels für die Benutzerfreundlichkeit der Seite wirklich wichtig sind, sollten Sie sie in einer Weise präsentieren, die für alle Benutzer zugänglich ist, z. B. indem sie im regulären Text enthalten sind.

### Aktives Lernen: Erstellen Ihres eigenen Beispiel-Links

Erstellen Sie ein HTML-Dokument mit Ihrem lokalen Code-Editor und unserer [Vorlage zum Einstieg](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html).

- Fügen Sie im HTML-Body ein oder mehrere Absätze oder andere Arten von Inhalten hinzu, die Sie bereits kennen.
- Ändern Sie einige der Inhalte in Links.
- Fügen Sie Titelattribute hinzu.

## Eine kurze Einführung in URLs und Pfade

Um Linkziele vollständig zu verstehen, müssen Sie URLs und Dateipfade verstehen. Dieser Abschnitt bietet Ihnen die Informationen, die Sie benötigen, um dies zu erreichen.

Eine URL, oder Uniform Resource Locator, ist eine Textzeichenfolge, die angibt, wo sich etwas im Web befindet. Zum Beispiel befindet sich die englische Homepage von Mozilla unter `https://www.mozilla.org/en-US/`.

URLs verwenden Pfade, um Dateien zu finden. Pfade geben an, wo sich die Datei, die Sie interessiert, im Dateisystem befindet. Schauen wir uns ein Beispiel für eine Verzeichnisstruktur an, siehe das Verzeichnis [creating-hyperlinks](https://github.com/mdn/learning-area/tree/main/html/introduction-to-html/creating-hyperlinks).

![Eine einfache Verzeichnisstruktur. Das Elternverzeichnis heißt creating-hyperlinks und enthält zwei Dateien namens index.html und contacts.html sowie zwei Verzeichnisse namens projects und pdfs, die jeweils eine Datei index.html und eine Datei project-brief.pdf enthalten](simple-directory.png)

Das **Root** dieser Verzeichnisstruktur heißt `creating-hyperlinks`. Wenn Sie lokal mit einer Website arbeiten, haben Sie ein Verzeichnis, das die gesamte Seite enthält. Im **Root** haben wir eine `index.html`-Datei und eine `contacts.html`. In einer echten Website wäre `index.html` unsere Startseite oder Einstiegsseite (eine Webseite, die als Einstiegspunkt für eine Website oder einen bestimmten Abschnitt einer Website dient).

Es gibt auch zwei Verzeichnisse in unserem Root – `pdfs` und `projects`. Diese enthalten jeweils eine einzelne Datei – ein PDF (`project-brief.pdf`) und eine `index.html`-Datei. Beachten Sie, dass Sie zwei `index.html`-Dateien in einem Projekt haben können, solange sie sich an unterschiedlichen Dateisystempositionen befinden. Die zweite `index.html` wäre vielleicht die Haupt-Landingpage für projektbezogene Informationen.

- **Gleiches Verzeichnis**: Wenn Sie einen Hyperlink in `index.html` (das Top-Level-`index.html`) einfügen möchten, der auf `contacts.html` verweist, geben Sie den Dateinamen an, auf den Sie verlinken möchten, da er sich im selben Verzeichnis wie die aktuelle Datei befindet. Die URL, die Sie verwenden würden, ist `contacts.html`:

  ```html
  <p>
    Want to contact a specific staff member? Find details on our
    <a href="contacts.html">contacts page</a>.
  </p>
  ```

- **Hinunter in Unterverzeichnisse gehen**: Wenn Sie einen Hyperlink in `index.html` (das Top-Level-`index.html`) einfügen möchten, der auf `projects/index.html` verweist, müssen Sie in das Verzeichnis `projects` hinuntergehen, bevor Sie angeben, auf welche Datei Sie verlinken möchten.
  Dies wird durchgeführt, indem der Name des Verzeichnisses angegeben wird, dann ein Schrägstrich, dann der Name der Datei. Die URL, die Sie verwenden würden, ist `projects/index.html`:

  ```html
  <p>Visit my <a href="projects/index.html">project homepage</a>.</p>
  ```

- **Zurück in Elternverzeichnisse gehen**: Wenn Sie einen Hyperlink in `projects/index.html` einfügen möchten, der auf `pdfs/project-brief.pdf` verweist, müssen Sie eine Verzeichnisebene nach oben gehen und dann in das `pdfs`-Verzeichnis hinuntergehen.
  Um ein Verzeichnis nach oben zu gehen, verwenden Sie zwei Punkte – `..` – also ist die URL, die Sie verwenden würden, `../pdfs/project-brief.pdf`:

  ```html
  <p>A link to my <a href="../pdfs/project-brief.pdf">project brief</a>.</p>
  ```

> [!NOTE]
> Sie können mehrere Instanzen dieser Funktionen in komplexe URLs kombinieren, falls erforderlich, zum Beispiel: `../../../complex/path/to/my/file.html`.

### Dokumentfragmente

Es ist möglich, auf einen bestimmten Teil eines HTML-Dokuments zu verlinken, bekannt als **Dokumentfragment**, anstatt nur zum Anfang des Dokuments zu verlinken.
Dazu müssen Sie zunächst einem Element, auf das Sie verlinken möchten, ein [`id`](/de/docs/Web/HTML/Global_attributes#id)-Attribut zuweisen.
Normalerweise macht es Sinn, auf eine bestimmte Überschrift zu verlinken, also würde das ungefähr so aussehen:

```html
<h2 id="Mailing_address">Mailing address</h2>
```

Dann, um auf diese spezifische `id` zu verlinken, würden Sie sie am Ende der URL einfügen, vorangestellt von einem Rautezeichen (`#`), zum Beispiel:

```html
<p>
  Want to write us a letter? Use our
  <a href="contacts.html#Mailing_address">mailing address</a>.
</p>
```

Sie können sogar den Dokumentfragment-Referenz allein verwenden, um auf _einen anderen Teil des aktuellen Dokuments_ zu verlinken:

```html
<p>
  The <a href="#Mailing_address">company mailing address</a> can be found at the
  bottom of this page.
</p>
```

### Absolute versus relative URLs

Zwei Begriffe, die Ihnen im Web begegnen werden, sind **absolute URL** und **relative URL:**

**absolute URL**: Weist auf einen Standort hin, der durch seinen absoluten Speicherort im Web definiert ist, einschließlich [Protokoll](/de/docs/Glossary/protocol) und [Domainname](/de/docs/Glossary/domain_name).
Zum Beispiel, wenn eine `index.html`-Seite in ein Verzeichnis namens `projects` hochgeladen wird, das im **Root** eines Webservers sitzt, und die Domain der Website `https://www.example.com` ist, wäre die Seite unter `https://www.example.com/projects/index.html` verfügbar (oder sogar einfach `https://www.example.com/projects/`, da die meisten Webserver einfach nach einer Einstiegsseite wie `index.html` suchen, wenn sie in der URL nicht angegeben ist).

Eine absolute URL verweist immer auf den gleichen Speicherort, egal wo sie verwendet wird.

**relative URL**: Weist auf einen Speicherort hin, der _relativ_ zur Datei ist, von der Sie verlinken, mehr wie das, was wir im vorherigen Abschnitt betrachtet haben.
Zum Beispiel, wenn wir von unserer Beispieldatei unter `https://www.example.com/projects/index.html` auf eine PDF-Datei im selben Verzeichnis verlinken wollten, wäre die URL einfach der Dateiname — `project-brief.pdf` — keine zusätzlichen Informationen benötigt. Wenn das PDF in einem Unterverzeichnis innerhalb `projects` namens `pdfs` verfügbar wäre, wäre der relative Link `pdfs/project-brief.pdf` (die äquivalente absolute URL wäre `https://www.example.com/projects/pdfs/project-brief.pdf`).

Eine relative URL verweist auf verschiedene Orte, abhängig von dem tatsächlichen Speicherort der Datei, von der aus Sie verlinken — zum Beispiel, wenn wir unsere `index.html`-Datei aus dem `projects`-Verzeichnis heraus in das **Root** der Website verschieben (die oberste Ebene, nicht in irgendwelchen Verzeichnissen), würde der relative URL-Link `pdfs/project-brief.pdf` darin jetzt auf eine Datei verweisen, die sich unter `https://www.example.com/pdfs/project-brief.pdf` befindet, nicht auf eine Datei, die sich unter `https://www.example.com/projects/pdfs/project-brief.pdf` befindet.

Natürlich wird sich der Speicherort der `project-brief.pdf`-Datei und des `pdfs`-Ordners nicht plötzlich ändern, weil Sie die `index.html`-Datei verschoben haben — dies würde dazu führen, dass Ihr Link auf den falschen Ort zeigt, sodass er nicht funktioniert, wenn Sie darauf klicken. Sie müssen vorsichtig sein!

## Beste Praktiken für Links

Beim Schreiben von Links gibt es einige bewährte Praktiken, die Sie befolgen sollten. Schauen wir uns diese jetzt an.

### Verwenden Sie klare Link-Formulierungen

Es ist einfach, Links auf Ihrer Seite einzufügen. Das reicht jedoch nicht. Wir müssen unsere Links _zugänglich_ für alle Leser machen, unabhängig von ihrem aktuellen Kontext und den bevorzugten Werkzeugen. Zum Beispiel:

- Benutzer von Bildschirmlesegeräten springen gerne von Link zu Link auf der Seite und lesen Links aus dem Kontext.
- Suchmaschinen verwenden Linktext, um Zieldateien zu indizieren, daher ist es eine gute Idee, Schlüsselwörter in Ihren Linktext aufzunehmen, um effektiv zu beschreiben, was verlinkt wird.
- Visuelle Leser überfliegen die Seite eher als jedes Wort zu lesen, und ihre Augen werden zu Seitenelementen hingezogen, die hervorstechen, wie Links. Sie werden beschreibenden Linktext nützlich finden.

Lassen Sie uns ein spezifisches Beispiel betrachten:

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

- Wiederholen Sie die URL nicht als Teil des Linktextes – URLs sehen hässlich aus und klingen sogar noch hässlicher, wenn ein Bildschirmleser sie Buchstabe für Buchstabe vorliest.
- Sagen Sie nicht "Link" oder "verlinkt zu" im Linktext – das ist nur Lärm. Bildschirmleser sagen den Leuten, dass es einen Link gibt.
  Visuelle Benutzer werden auch wissen, dass es einen Link gibt, weil Links in der Regel in einer anderen Farbe dargestellt und unterstrichen sind (diese Konvention sollte in der Regel nicht durchbrochen werden, da Benutzer daran gewöhnt sind).
- Halten Sie Ihren Linktext so kurz wie möglich – das ist hilfreich, weil Bildschirmleser den gesamten Linktext interpretieren müssen.
- Minimieren Sie Instanzen, bei denen mehrere Kopien desselben Textes zu verschiedenen Orten verlinken.
  Dies kann Probleme für Benutzer von Bildschirmlesegeräten verursachen, wenn es eine Liste von Links außerhalb des Kontexts gibt, die als "klicken Sie hier", "klicken Sie hier", "klicken Sie hier" bezeichnet sind.

### Verlinkung zu Nicht-HTML-Ressourcen — klare Wegweiser hinterlassen

Wenn Sie zu einer Ressource verlinken, die heruntergeladen (wie ein PDF oder Word-Dokument), gestreamt (wie Video oder Audio) wird oder eine andere potenziell unerwartete Wirkung hat (ein Popup-Fenster öffnet), sollten Sie klare Formulierungen beifügen, um Verwirrung zu reduzieren.

Zum Beispiel:

- Wenn Sie in einer Verbindung mit niedriger Bandbreite sind, einen Link anklicken und dann ein Download von mehreren Megabyte unerwartet beginnt.

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

### Verwenden Sie das Download-Attribut beim Verlinken zu einem Download

Wenn Sie zu einer Ressource verlinken, die heruntergeladen und nicht im Browser geöffnet werden soll, können Sie das `download`-Attribut verwenden, um einen Standard-Speicherdateinamen bereitzustellen. Hier ist ein Beispiel mit einem Download-Link zur neuesten Windows-Version von Firefox:

```html
<a
  href="https://download.mozilla.org/?product=firefox-latest-ssl&os=win64&lang=en-US"
  download="firefox-latest-64bit-installer.exe">
  Download Latest Firefox for Windows (64-bit) (English, US)
</a>
```

## Aktives Lernen: Erstellen eines Navigationsmenüs

Für diese Übung möchten wir, dass Sie einige Seiten mit einem Navigationsmenü verknüpfen, um eine mehrseitige Website zu erstellen. Dies ist eine übliche Methode, wie eine Website erstellt wird — die gleiche Seitenstruktur wird auf jeder Seite verwendet, einschließlich desselben Navigationsmenüs, sodass beim Anklicken von Links der Eindruck entsteht, dass Sie am selben Ort bleiben und nur unterschiedliche Inhalte aufgerufen werden.

Sie müssen lokale Kopien der folgenden vier Seiten erstellen, die sich alle im selben Verzeichnis befinden. Eine vollständige Dateiliste finden Sie im Verzeichnis [navigation-menu-start](https://github.com/mdn/learning-area/tree/main/html/introduction-to-html/navigation-menu-start):

- [index.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/index.html)
- [projects.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/projects.html)
- [pictures.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/pictures.html)
- [social.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/social.html)

Sie sollten:

1. Fügen Sie an der angegebenen Stelle auf einer Seite eine ungeordnete Liste hinzu, die die Namen der Seiten enthält, zu denen verlinkt werden soll.
   Ein Navigationsmenü ist in der Regel einfach eine Liste von Links, daher ist dies semantisch in Ordnung.
2. Ändern Sie jeden Seitennamen in einen Link zu dieser Seite.
3. Kopieren Sie das Navigationsmenü auf jede Seite.
4. Entfernen Sie auf jeder Seite nur den Link zu dieser Seite selbst — es ist verwirrend und unnötig, dass eine Seite einen Link zu sich selbst enthält.
   Und das Fehlen eines Links dient als gutes visuelles Zeichen dafür, auf welcher Seite Sie sich gerade befinden.

Das fertige Beispiel sollte ähnlich wie die folgende Seite aussehen:

![Ein Beispiel für ein einfaches HTML-Navigationsmenü, mit Menüelementen für Startseite, Bilder, Projekte und Soziales](navigation-example.png)

> [!NOTE]
> Wenn Sie nicht weiterkommen oder nicht sicher sind, ob Sie es richtig haben, können Sie das Verzeichnis [navigation-menu-marked-up](https://github.com/mdn/learning-area/tree/main/html/introduction-to-html/navigation-menu-marked-up) ansehen, um die korrekte Antwort zu sehen.

## E-Mail-Links

Es ist möglich, Links oder Schaltflächen zu erstellen, die, wenn sie geklickt werden, eine neue ausgehende E-Mail-Nachricht öffnen, anstatt auf eine Ressource oder Seite zu verlinken.
Dies wird mit dem {{HTMLElement("a")}}-Element und dem `mailto:` URL-Schema durchgeführt.

In seiner grundlegendsten und am häufigsten verwendeten Form gibt ein `mailto:`-Link die E-Mail-Adresse des vorgesehenen Empfängers an. Zum Beispiel:

```html
<a href="mailto:nowhere@mozilla.org">Send email to nowhere</a>
```

Dies ergibt einen Link, der so aussieht: [E-Mail an nirgendwo schicken](mailto:nowhere@mozilla.org).

Tatsächlich ist die E-Mail-Adresse optional. Wenn Sie sie weglassen und Ihre [`href`](/de/docs/Web/HTML/Element/a#href) "mailto:" ist, wird ein neues ausgehendes E-Mail-Fenster von dem E-Mail-Client des Benutzers geöffnet, ohne dass eine Zieladresse angegeben ist.
Dies wird oft als "Teilen"-Links verwendet, die Benutzer anklicken können, um eine E-Mail an eine von ihnen gewählte Adresse zu senden.

### Details angeben

Neben der E-Mail-Adresse können Sie auch andere Informationen angeben. Tatsächlich können alle Standard-Mail-Header-Felder zur `mailto`-URL hinzugefügt werden, die Sie angeben.
Die am häufigsten verwendeten sind "subject", "cc" und "body" (die kein wirkliches Header-Feld ist, aber es Ihnen ermöglicht, eine kurze Inhaltsnachricht für die neue E-Mail anzugeben).
Jedes Feld und sein Wert wird als Abfragebegriff angegeben.

Hier ein Beispiel, das cc, bcc, subject und body enthält:

```html
<a
  href="mailto:nowhere@mozilla.org?cc=name2@rapidtables.com&bcc=name3@rapidtables.com&subject=The%20subject%20of%20the%20email&body=The%20body%20of%20the%20email">
  Send mail with cc, bcc, subject and body
</a>
```

> [!NOTE]
> Die Werte jedes Feldes müssen URL-kodiert werden, wobei nicht druckbare Zeichen (unsichtbare Zeichen wie Tabulatoren, Wagenrückläufe und Seitenumbrüche) und Leerzeichen [prozentual kodiert](/de/docs/Glossary/Percent-encoding) werden.
> Beachten Sie auch die Verwendung des Fragezeichens (`?`), um die Haupt-URL von den Feldwerten zu trennen, und das kaufmännische Und-Zeichen (&), um jedes Feld in der `mailto:`-URL zu trennen.
> Dies ist die Standard-URL-Abfragesyntax.
> Lesen Sie [Die GET-Methode](/de/docs/Learn/Forms/Sending_and_retrieving_form_data#the_get_method), um zu verstehen, wofür die URL-Abfragesyntax häufiger verwendet wird.

Hier sind einige andere Beispiel-`mailto`-URLs:

- <mailto:>
- <mailto:nowhere@mozilla.org>
- <mailto:nowhere@mozilla.org,nobody@mozilla.org>
- <mailto:nowhere@mozilla.org?cc=nobody@mozilla.org>
- <mailto:nowhere@mozilla.org?cc=nobody@mozilla.org&subject=Dies%20ist%20der%20Betreff>

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen – siehe [Testen Sie Ihre Fähigkeiten: Links](/de/docs/Learn/HTML/Introduction_to_HTML/Test_your_skills:_Links).

## Zusammenfassung

Das war's vorerst mit Links! Sie werden später im Kurs auf Links zurückkommen, wenn Sie beginnen, sie zu stilisieren. Als nächstes werden wir uns wieder mit der Textsemantik befassen und einige fortgeschrittene/ungewöhnliche Funktionen betrachten, die Sie nützlich finden werden — [Fortgeschrittene Textformatierung](/de/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting) ist Ihr nächster Halt.

{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals", "Learn/HTML/Introduction_to_HTML/Advanced_text_formatting", "Learn/HTML/Introduction_to_HTML")}}
