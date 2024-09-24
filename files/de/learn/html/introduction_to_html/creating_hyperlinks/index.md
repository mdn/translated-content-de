---
title: Erstellen von Hyperlinks
slug: Learn/HTML/Introduction_to_HTML/Creating_hyperlinks
l10n:
  sourceCommit: 530c1f54e63834411aa38789b1ac82e3831c4dfa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals", "Learn/HTML/Introduction_to_HTML/Advanced_text_formatting", "Learn/HTML/Introduction_to_HTML")}}

Hyperlinks sind wirklich wichtig – sie sind das, was das Web zu einem _Netz_ macht. Dieser Artikel zeigt die Syntax, die benötigt wird, um einen Link zu erstellen, und diskutiert bewährte Methoden für Links.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegendes Wissen über HTML, wie es in
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
          >Einstieg in HTML</a
        > behandelt wird. HTML-Textformatierung, wie sie in
        <a
          href="/de/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals"
          >HTML-Textgrundlagen</a
        > behandelt wird.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Erlernen, wie man einen Hyperlink effektiv implementiert und mehrere
        Dateien miteinander verknüpft.
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein Hyperlink?

Hyperlinks sind eine der aufregendsten Innovationen, die das Web bietet. Sie sind seit Beginn ein Feature des Webs und machen das Web zu einem _Netz_. Hyperlinks ermöglichen es uns, Dokumente mit anderen Dokumenten oder Ressourcen zu verknüpfen, auf bestimmte Teile von Dokumenten zu verlinken oder Apps unter einer Webadresse verfügbar zu machen. Fast jeder Webinhalt kann in einen Link umgewandelt werden, sodass bei einem Klick oder einer anderen Aktivierung der Webbrowser zu einer anderen Webadresse ({{glossary("URL")}}) gelangt.

> [!NOTE]
> Eine URL kann auf HTML-Dateien, Textdateien, Bilder, Textdokumente, Video- und Audiodateien oder alles andere verweisen, was im Web vorhanden ist. Wenn der Webbrowser nicht weiß, wie er die Datei anzeigen oder handhaben soll, wird er Sie fragen, ob Sie die Datei öffnen möchten (in diesem Fall wird das Öffnen oder Handhaben der Datei an eine geeignete native App auf dem Gerät übergeben) oder die Datei herunterladen möchten (in diesem Fall können Sie später versuchen, damit umzugehen).

Zum Beispiel enthält die BBC-Homepage viele Links, die nicht nur zu mehreren Nachrichtenmeldungen, sondern auch zu verschiedenen Bereichen der Seite (Navigationsfunktionalität), Anmelde-/Registrierungsseiten (Benutzertools) und mehr führen.

![Titelbild von bbc.co.uk, zeigt viele Nachrichtenartikel und Navigationsmenü-Funktionalität](updated-bbc-website.png)

## Anatomie eines Links

Ein grundlegender Link wird erstellt, indem der Text oder andere Inhalte innerhalb eines {{htmlelement("a")}}-Elements eingewickelt und das [`href`](/de/docs/Web/HTML/Element/a#href)-Attribut verwendet werden, auch bekannt als **Hypertextreferenz** oder **Ziel**, das die Webadresse enthält.

```html
<p>
  Ich erstelle einen Link zur
  <a href="https://www.mozilla.org/en-US/">Mozilla-Startseite</a>.
</p>
```

Dies ergibt folgendes Ergebnis:\
Ich erstelle einen Link zur [Mozilla-Startseite](https://www.mozilla.org/en-US/).

### Block-Level-Links

Wie bereits erwähnt, kann fast jeder Inhalt in einen Link umgewandelt werden, auch {{Glossary("Block/CSS", "Block-Level-Elemente")}}. Wenn Sie ein Überschriftenelement in einen Link umwandeln möchten, wickeln Sie es in ein Anker- (`<a>`) Element, wie im folgenden Code-Snippet gezeigt:

```html
<a href="https://developer.mozilla.org/en-US/">
  <h1>MDN Web Docs</h1>
</a>
<p>
  Dokumentation von Web-Technologien, einschließlich CSS, HTML und JavaScript, seit 2005.
</p>
```

Dies verwandelt die Überschrift in einen Link: {{EmbedLiveSample('Block level links', '100%', 150)}}

### Bild-Links

Wenn Sie ein Bild in einen Link umwandeln möchten, verwenden Sie das {{htmlelement("a")}}-Element, um die mit dem {{htmlelement("img")}}-Element referenzierte Bilddatei einzuwickeln. Das folgende Beispiel verwendet einen relativen Pfad, um eine lokal gespeicherte SVG-Bilddatei zu referenzieren.

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

Dies macht das MDN-Logo zu einem Link: {{EmbedLiveSample('Image links', '100%', 150)}}

> [!NOTE]
> Mehr über die Verwendung von Bildern im Web erfahren Sie in einem zukünftigen Artikel.

### Hinzufügen von unterstützenden Informationen mit dem title-Attribut

Ein weiteres Attribut, das Sie möglicherweise Ihren Links hinzufügen möchten, ist `title`.
Der Titel enthält zusätzliche Informationen über den Link, wie z. B., welche Art von Informationen die Seite enthält, oder Dinge, auf die man auf der Webseite achten sollte.

```html-nolint
<p>
  Ich erstelle einen Link zur
  <a
    href="https://www.mozilla.org/en-US/"
    title="Der beste Ort, um mehr über Mozillas Mission und wie man beitragen kann zu erfahren">
    Mozilla-Startseite</a>.
</p>
```

Dies ergibt folgendes Ergebnis und beim Überfahren des Links wird der Titel als Tooltip angezeigt:

{{EmbedLiveSample('Adding supporting information with the title attribute', '100%', 150)}}

> [!NOTE]
> Ein Linktitel wird nur beim Überfahren mit der Maus angezeigt, was bedeutet, dass Personen, die sich auf Tastatursteuerungen oder Touchscreens verlassen, Schwierigkeiten haben werden, Titelinformationen zu erreichen. Wenn die Informationen eines Titels wirklich wichtig für die Benutzbarkeit der Seite sind, sollten Sie sie auf eine Weise präsentieren, die für alle Benutzer zugänglich ist, zum Beispiel indem Sie sie in den normalen Text einfügen.

### Aktives Lernen: Erstellen Ihres eigenen Beispiel-Links

Erstellen Sie ein HTML-Dokument mit Ihrem lokalen Code-Editor und unserer [Einstiegsvorlage](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/getting-started/index.html).

- Fügen Sie im HTML-Body einen oder mehrere Absätze oder andere Inhalte ein, die Sie bereits kennen.
- Verändern Sie einige der Inhalte in Links.
- Fügen Sie Title-Attribute hinzu.

## Ein kurzer Leitfaden zu URLs und Pfaden

Um Link-Ziele vollständig zu verstehen, müssen Sie URLs und Dateipfade verstehen. Dieser Abschnitt gibt Ihnen die notwendigen Informationen, um dies zu erreichen.

Eine URL oder Uniform Resource Locator ist eine Textzeichenkette, die definiert, wo sich etwas im Web befindet. Zum Beispiel befindet sich Mozillas englische Startseite unter `https://www.mozilla.org/en-US/`.

URLs verwenden Pfade, um Dateien zu finden. Pfade geben an, wo sich die Datei, die Sie interessiert, im Dateisystem befindet. Werfen wir einen Blick auf ein Beispiel für eine Verzeichnisstruktur, siehe das Verzeichnis [creating-hyperlinks](https://github.com/mdn/learning-area/tree/main/html/introduction-to-html/creating-hyperlinks).

![Eine einfache Verzeichnisstruktur. Das übergeordnete Verzeichnis heißt creating-hyperlinks und enthält zwei Dateien namens index.html und contacts.html sowie zwei Verzeichnisse namens projects und pdfs, die jeweils eine Datei index.html und eine Datei project-brief.pdf enthalten](simple-directory.png)

Der **Root** dieser Verzeichnisstruktur heißt `creating-hyperlinks`. Wenn Sie lokal mit einer Website arbeiten, haben Sie ein Verzeichnis, das die gesamte Website enthält. Im **Root** haben wir eine `index.html`-Datei und eine `contacts.html`-Datei. In einer echten Website wäre `index.html` unsere Startseite oder Landingpage (eine Webseite, die als Einstiegspunkt für eine Website oder einen bestimmten Abschnitt einer Website dient).

Es gibt auch zwei Verzeichnisse innerhalb unseres Root-Verzeichnisses — `pdfs` und `projects`. Diese enthalten jeweils eine Datei — eine PDF-Datei (`project-brief.pdf`) und eine `index.html`-Datei. Beachten Sie, dass Sie zwei `index.html`-Dateien in einem Projekt haben können, solange sie sich an unterschiedlichen Stellen im Dateisystem befinden. Die zweite `index.html` könnte vielleicht die Haupt-Landingpage für projektbezogene Informationen sein.

- **Gleiches Verzeichnis**: Wenn Sie einen Hyperlink in `index.html` (das oberste `index.html`) einfügen möchten, der auf `contacts.html` verweist, geben Sie einfach den Dateinamen an, auf den Sie verlinken möchten, da er sich im gleichen Verzeichnis wie die aktuelle Datei befindet. Die URL, die Sie verwenden würden, ist `contacts.html`:

  ```html
  <p>
    Möchten Sie einen bestimmten Mitarbeiter kontaktieren? Finden Sie die Details auf unserer
    <a href="contacts.html">Kontaktseite</a>.
  </p>
  ```

- **In Unterverzeichnisse wechseln**: Wenn Sie einen Hyperlink in `index.html` (das oberste `index.html`) einfügen möchten, der auf `projects/index.html` verweist, müssen Sie in das `projects`-Verzeichnis gehen, bevor Sie die Datei angeben, auf die Sie verlinken möchten. Dies geschieht, indem Sie den Namen des Verzeichnisses angeben, dann einen Schrägstrich und dann den Namen der Datei. Die URL, die Sie verwenden würden, ist `projects/index.html`:

  ```html
  <p>Besuchen Sie meine <a href="projects/index.html">Projekt-Homepage</a>.</p>
  ```

- **Zurück in übergeordnete Verzeichnisse wechseln**: Wenn Sie einen Hyperlink in `projects/index.html` einfügen möchten, der auf `pdfs/project-brief.pdf` verweist, müssten Sie ein Verzeichnisebene nach oben gehen und dann in das `pdfs`-Verzeichnis wechseln. Um ein Verzeichnis nach oben zu wechseln, verwenden Sie zwei Punkte – `..` – also lautet die URL, die Sie verwenden würden: `../pdfs/project-brief.pdf`:

  ```html
  <p>Ein Link zu meinem <a href="../pdfs/project-brief.pdf">Projektbrief</a>.</p>
  ```

> [!NOTE]
> Sie können mehrere Instanzen dieser Funktionen zu komplexen URLs kombinieren, falls erforderlich, zum Beispiel: `../../../complex/path/to/my/file.html`.

### Dokumentfragmente

Es ist möglich, auf einen bestimmten Teil eines HTML-Dokuments zu verlinken, bekannt als **Dokumentfragment**, anstatt nur auf den Anfang des Dokuments zu verlinken. Dazu müssen Sie zuerst einem Element, auf das Sie verlinken möchten, ein [`id`](/de/docs/Web/HTML/Global_attributes#id)-Attribut zuweisen. In der Regel macht es Sinn, zu einer bestimmten Überschrift zu verlinken, was ungefähr so aussehen würde:

```html
<h2 id="Mailing_address">Postanschrift</h2>
```

Dann würden Sie zu dieser spezifischen `id` verlinken, indem Sie sie am Ende der URL anfügen, vorangestellt mit einem Rauten-/Pfundsymbol (`#`), zum Beispiel:

```html
<p>
  Möchten Sie uns einen Brief schreiben? Verwenden Sie unsere
  <a href="contacts.html#Mailing_address">Postanschrift</a>.
</p>
```

Sie können sogar den Dokumentfragmentverweis allein verwenden, um _einen anderen Teil des aktuellen Dokuments_ zu verlinken:

```html
<p>
  Die <a href="#Mailing_address">Unternehmenspostanschrift</a> finden Sie am
  Ende dieser Seite.
</p>
```

### Absolute versus relative URLs

Zwei Begriffe, auf die Sie im Web stoßen werden, sind **absolute URL** und **relative URL:**

**Absolute URL**: Zeigt auf eine Position, die durch ihre absolute Position im Web definiert ist, einschließlich {{glossary("protocol")}} und {{glossary("domain name")}}.
Wenn eine `index.html`-Seite beispielsweise in ein Verzeichnis namens `projects` hochgeladen wird, das sich im **Root** eines Webservers befindet, und die Domain der Website `https://www.example.com` ist, wäre die Seite unter `https://www.example.com/projects/index.html` verfügbar (oder sogar nur unter `https://www.example.com/projects/`, da die meisten Webserver einfach nach einer Startseite wie `index.html` suchen, wenn sie nicht in der URL angegeben ist).

Eine absolute URL weist immer auf dieselbe Position, egal wo sie verwendet wird.

**Relative URL**: Zeigt auf eine Position, die _relativ_ zu der Datei ist, von der Sie verlinken, mehr wie das, was wir im vorherigen Abschnitt betrachtet haben. Wenn wir beispielsweise von unserer Beispielfileseite unter `https://www.example.com/projects/index.html` zu einer PDF-Datei im selben Verzeichnis verlinken wollten, wäre die URL einfach der Dateiname — `project-brief.pdf` — keine zusätzlichen Informationen erforderlich. Befände sich die PDF in einem Unterverzeichnis innerhalb von `projects` namens `pdfs`, wäre der relative Link `pdfs/project-brief.pdf` (die gleichwertige absolute URL wäre `https://www.example.com/projects/pdfs/project-brief.pdf`).

Eine relative URL zeigt auf verschiedene Stellen, je nachdem, wo sich die Datei befindet, von der aus Sie verweisen — wenn wir beispielsweise unsere `index.html`-Datei aus dem `projects`-Verzeichnis herausnehmen und in das **Root** der Website verschieben (die oberste Ebene, nicht in einem Verzeichnis), würde der relative URL-Link `pdfs/project-brief.pdf` darin nun auf eine Datei unter `https://www.example.com/pdfs/project-brief.pdf` verweisen, nicht auf eine Datei unter `https://www.example.com/projects/pdfs/project-brief.pdf`.

Natürlich ändern sich der Standort der `project-brief.pdf`-Datei und des `pdfs`-Ordners nicht plötzlich, weil Sie die `index.html`-Datei verschoben haben — dadurch würde Ihr Link auf den falschen Ort verweisen, sodass er bei einem Klick darauf nicht funktionieren würde. Sie müssen vorsichtig sein!

## Bewährte Methoden für Links

Es gibt einige bewährte Methoden, die beim Schreiben von Links zu beachten sind. Schauen wir uns diese jetzt an.

### Verwenden Sie klare Linktexte

Es ist einfach, Links auf Ihrer Seite zu platzieren. Das reicht nicht aus. Wir müssen unsere Links _zugänglich_ für alle Leser machen, unabhängig von ihrem aktuellen Kontext und den von ihnen bevorzugten Tools. Zum Beispiel:

- Bildschirmleserbenutzer springen gerne von Link zu Link auf der Seite und lesen Links aus dem Kontext heraus.
- Suchmaschinen verwenden Linktexte, um Zieldateien zu indexieren, daher ist es eine gute Idee, Schlüsselwörter in Ihrem Linktext zu inkludieren, um effektiv zu beschreiben, worauf verwiesen wird.
- Visuelle Leser überfliegen die Seite, anstatt jedes Wort zu lesen, und ihre Augen werden zu auffälligen Seitenmerkmalen wie Links gezogen. Sie finden beschreibende Linktexte nützlich.

Schauen wir uns ein konkretes Beispiel an:

**Guter** Linktext: [Laden Sie Firefox herunter](https://www.mozilla.org/en-US/firefox/new/?redirect_source=firefox-com)

```html example-good
<p><a href="https://www.mozilla.org/en-US/firefox/">Laden Sie Firefox herunter</a></p>
```

**Schlechter** Linktext: [Hier klicken](https://www.mozilla.org/en-US/firefox/), um Firefox herunterzuladen

```html example-bad
<p>
  <a href="https://www.mozilla.org/en-US/firefox/">Hier klicken</a>, um
  Firefox herunterzuladen
</p>
```

Weitere Tipps:

- Wiederholen Sie die URL nicht als Teil des Linktexts — URLs sehen unschön aus und klingen noch unschöner, wenn ein Bildschirmleser sie Buchstabe für Buchstabe vorliest.
- Sagen Sie nicht "Link" oder "führt zu" im Linktext — das ist nur Rauschen. Bildschirmleser sagen den Leuten, dass es sich um einen Link handelt.
Visuelle Benutzer wissen auch, dass es sich um einen Link handelt, da Links in der Regel in einer anderen Farbe und unterstrichen angezeigt werden (diese Konvention sollte im Allgemeinen nicht gebrochen werden, da Benutzer daran gewöhnt sind).
- Halten Sie Ihren Linktext so kurz wie möglich — das ist hilfreich, da Bildschirmleser den gesamten Linktext interpretieren müssen.
- Minimieren Sie Instanzen, in denen mehrere Kopien desselben Textes an verschiedene Orte verlinkt werden.
Das kann Probleme für Bildschirmleserbenutzer verursachen, wenn es eine Liste von Links außerhalb des Kontexts gibt, die mit "hier klicken", "hier klicken", "hier klicken" gekennzeichnet sind.

### Verlinkung zu Nicht-HTML-Ressourcen — klare Wegweiser hinterlassen

Beim Verlinken zu einer Ressource, die heruntergeladen (wie ein PDF oder Word-Dokument), gestreamt (wie Video oder Audio) oder einen anderen potenziell unerwarteten Effekt hat (zum Beispiel ein Popup-Fenster öffnet), sollten Sie klare Formulierungen hinzufügen, um Verwirrung zu vermeiden.

Zum Beispiel:

- Wenn Sie eine langsame Internetverbindung haben, auf einen Link klicken und dann ein mehrere Megabyte großer Download unerwartet startet.

Schauen wir uns einige Beispiele an, um zu sehen, welche Art von Text hier verwendet werden kann:

```html
<p>
  <a href="https://www.example.com/large-report.pdf">
  Laden Sie den Verkaufsbericht herunter (PDF, 10MB)
  </a>
</p>

<p>
  <a href="https://www.example.com/video-stream/" target="_blank">
    Sehen Sie sich das Video an (Stream öffnet sich in einem neuen Tab, HD-Qualität)
  </a>
</p>
```

### Verwenden Sie das download-Attribut beim Verlinken zu einem Download

Wenn Sie zu einer Ressource verlinken, die heruntergeladen und nicht im Browser geöffnet werden soll, können Sie das `download`-Attribut verwenden, um einen Standard-Speicherdateinamen bereitzustellen. Hier ist ein Beispiel mit einem Download-Link zur neuesten Windows-Version von Firefox:

```html
<a
  href="https://download.mozilla.org/?product=firefox-latest-ssl&os=win64&lang=en-US"
  download="firefox-latest-64bit-installer.exe">
  Laden Sie den neuesten Firefox für Windows herunter (64-Bit) (Englisch, US)
</a>
```

## Aktives Lernen: Erstellen eines Navigationsmenüs

Für diese Übung möchten wir, dass Sie einige Seiten mit einem Navigationsmenü verknüpfen, um eine mehrseitige Website zu erstellen. Dies ist eine häufige Methode, um eine Website zu erstellen – die gleiche Seitenstruktur wird auf jeder Seite genutzt, einschließlich des gleichen Navigationsmenüs. Wenn Links geklickt werden, entsteht der Eindruck, dass Sie am selben Ort bleiben und unterschiedliche Inhalte angezeigt werden.

Sie müssen lokale Kopien der folgenden vier Seiten erstellen, alle im selben Verzeichnis. Für eine vollständige Dateiliste siehe das Verzeichnis [navigation-menu-start](https://github.com/mdn/learning-area/tree/main/html/introduction-to-html/navigation-menu-start):

- [index.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/index.html)
- [projects.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/projects.html)
- [pictures.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/pictures.html)
- [social.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/navigation-menu-start/social.html)

Sie sollten:

1. Fügen Sie an der angegebenen Stelle auf einer Seite eine ungeordnete Liste ein, die die Namen der zu verlinkenden Seiten enthält.
   Ein Navigationsmenü ist in der Regel nur eine Liste von Links und daher semantisch in Ordnung.
2. Verändern Sie jeden Seitennamen in einen Link zu dieser Seite.
3. Kopieren Sie das Navigationsmenü auf jede Seite.
4. Entfernen Sie auf jeder Seite einfach den Link zu dieser Seite – es ist verwirrend und unnötig, dass eine Seite einen Link zu sich selbst enthält.
   Außerdem ist das Fehlen eines Links ein guter visueller Hinweis darauf, auf welcher Seite Sie sich gerade befinden.

Das fertige Beispiel sollte ähnlich wie die folgende Seite aussehen:

![Ein Beispiel für ein einfaches HTML-Navigationsmenü, mit Home, Pictures, Projects und Social Menüelementen](navigation-example.png)

> [!NOTE]
> Wenn Sie nicht weiterkommen oder nicht sicher sind, ob Sie es richtig gemacht haben, können Sie im Verzeichnis [navigation-menu-marked-up](https://github.com/mdn/learning-area/tree/main/html/introduction-to-html/navigation-menu-marked-up) die richtige Antwort überprüfen.

## E-Mail-Links

Es ist möglich, Links oder Schaltflächen zu erstellen, die bei einem Klick ein neues ausgehendes E-Mail-Nachrichtenfenster öffnen, anstatt auf eine Ressource oder Seite zu verlinken. Dies geschieht mit dem {{HTMLElement("a")}}-Element und dem `mailto:`-URL-Schema.

In seiner grundlegendsten und häufigsten Form gibt ein `mailto:`-Link die E-Mail-Adresse des beabsichtigten Empfängers an. Zum Beispiel:

```html
<a href="mailto:nowhere@mozilla.org">E-Mail an nowhere senden</a>
```

Dies ergibt einen Link, der so aussieht: [E-Mail an nowhere senden](mailto:nowhere@mozilla.org).

Tatsächlich ist die E-Mail-Adresse optional. Wenn Sie sie weglassen und Ihr [`href`](/de/docs/Web/HTML/Element/a#href) "mailto:" lautet, wird ein neues ausgehendes E-Mail-Fenster vom E-Mail-Client des Benutzers ohne Zieladresse geöffnet. Dies ist häufig als "Teilen"-Links nützlich, die Benutzer anklicken können, um eine E-Mail an eine Adresse ihrer Wahl zu senden.

### Details angeben

Zusätzlich zur E-Mail-Adresse können Sie weitere Informationen angeben. Tatsächlich können alle Standard-Mail-Headerfelder zur `mailto`-URL hinzugefügt werden, die Sie angeben. Die am häufigsten verwendeten dieser Felder sind "subject", "cc" und "body" (was kein echtes Headerfeld ist, aber es Ihnen ermöglicht, eine kurze Inhaltsnachricht für die neue E-Mail festzulegen). Jedes Feld und sein Wert werden als Abfragebegriff angegeben.

Hier ist ein Beispiel, das eine cc, bcc, Betreff und Text enthält:

```html
<a
  href="mailto:nowhere@mozilla.org?cc=name2@rapidtables.com&bcc=name3@rapidtables.com&subject=Das%20Thema%20der%20E-Mail&body=Der%20Inhalt%20der%20E-Mail">
  E-Mail mit cc, bcc, Betreff und Inhalt senden
</a>
```

> [!NOTE]
> Die Werte jedes Feldes müssen mit nicht-druckbaren Zeichen (unsichtbaren Zeichen wie Tabs, Wagenrückläufen und Seitenumbrüchen) und Leerzeichen {{Glossary("Prozentkodierung", "prozentcodiert")}} URL-enkodiert werden.
> Beachten Sie auch die Verwendung des Fragezeichens (`?`), um die Haupt-URL von den Feldwerten zu trennen, sowie der kaufmännischen Und-Zeichen (&), um jedes Feld in der `mailto:`-URL zu trennen. Dies ist die Standard-URL-Abfragenotation. Lesen Sie [Die GET-Methode](/de/docs/Learn/Forms/Sending_and_retrieving_form_data#The_GET_method), um zu verstehen, wofür die URL-Abfragenotation häufiger verwendet wird.

Hier sind einige weitere Beispiel-`mailto`-URLs:

- <mailto:>
- <mailto:nowhere@mozilla.org>
- <mailto:nowhere@mozilla.org,nobody@mozilla.org>
- <mailto:nowhere@mozilla.org?cc=nobody@mozilla.org>
- <mailto:nowhere@mozilla.org?cc=nobody@mozilla.org&subject=Dies%20ist%20das%20Thema>

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich noch an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Links](/de/docs/Learn/HTML/Introduction_to_HTML/Test_your_skills:_Links).

## Zusammenfassung

Das war's für den Moment mit Links! Sie werden später im Kurs auf Links zurückkommen, wenn Sie anfangen, sie zu stylen. Als Nächstes geht es bei HTML zurück zu Textsemantiken und zu einigen fortgeschrittenen/ungewöhnlichen Funktionen, die Sie nützlich finden werden – [Erweiterte Textformatierung](/de/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting) ist Ihr nächster Halt.

{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals", "Learn/HTML/Introduction_to_HTML/Advanced_text_formatting", "Learn/HTML/Introduction_to_HTML")}}
