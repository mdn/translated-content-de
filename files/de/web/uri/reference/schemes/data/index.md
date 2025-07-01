---
title: "data: URLs"
short-title: "data:"
slug: Web/URI/Reference/Schemes/data
l10n:
  sourceCommit: 466ca1db767535c1aa9984b4e6c0db41b3a53475
---

**Data URLs**, URLs, die mit dem `data:`-Schema versehen sind, ermöglichen es Inhaltsautoren, kleine Dateien direkt in Dokumente einzubetten. Sie wurden früher als "data URIs" bezeichnet, bis dieser Name durch die WHATWG zurückgezogen wurde.

> [!NOTE]
> Data URLs werden von modernen Browsern als einzigartige opake Ursprünge behandelt, anstatt den Ursprung des für die Navigation verantwortlichen Einstellungselements zu erben.

## Syntax

```url
data:[<media-type>][;base64],<data>
```

- `data:`
  - : Das Schema der URL.
- `<media-type>` {{optional_inline}}
  - : Der [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types), der den Datentyp angibt, wie z.B. `image/jpeg` für eine JPEG-Bilddatei. Wenn weggelassen, wird standardmäßig `text/plain;charset=US-ASCII` verwendet. Sie können [eine umfassende Darstellung der MIME-Typ-Struktur](/de/docs/Web/HTTP/Guides/MIME_types) und [eine Tabelle der gängigen MIME-Typen im Web](/de/docs/Web/HTTP/Guides/MIME_types/Common_types) finden.
- `;base64` {{optional_inline}}
  - : Gibt an, dass die Daten base64-dekodiert werden sollten; siehe [Kodierung von Daten im Base64-Format](#kodierung_von_daten_im_base64-format).
- `<data>`
  - : Die Daten selbst. Wenn die Daten [Zeichen enthalten, die in RFC 3986 als reservierte Zeichen definiert sind](https://datatracker.ietf.org/doc/html/rfc3986#section-2.2), oder Leerzeichen, Zeilenumbrüche oder andere nicht druckbare Zeichen enthalten, müssen diese Zeichen {{Glossary("Percent-encoding", "prozentcodiert")}} werden. Wenn die Daten textuell sind, können Sie den Text einbetten (unter Verwendung der entsprechenden Entitäten oder Escape-Sequenzen, basierend auf dem Typ des umgebenden Dokuments). Andernfalls können Sie `base64` angeben, um base64-kodierte Binärdaten einzubetten.

Einige Beispiele:

- `data:,Hello%2C%20World%21`
  - : Die text/plain-Daten `Hello, World!`. Beachten Sie, wie das Komma als {{Glossary("Percent-encoding", "%2C prozentkodiert")}} und das Leerzeichen als `%20` dargestellt wird.
- `data:text/plain;base64,SGVsbG8sIFdvcmxkIQ==`
  - : Base64-kodierte Version des obigen Beispiels
- `data:text/html,%3Ch1%3EHello%2C%20World%21%3C%2Fh1%3E`
  - : Ein HTML-Dokument mit `<h1>Hello, World!</h1>`
- `data:text/html,%3Cscript%3Ealert%28%27hi%27%29%3B%3C%2Fscript%3E`
  - : Ein HTML-Dokument mit `<script>alert('hi');</script>`, das eine JavaScript-Warnung ausführt. Beachten Sie, dass das schließende Script-Tag erforderlich ist.

## Kodierung von Daten im Base64-Format

Base64 ist eine Gruppe von Binär-zu-Text-Kodierungsschemata, die Binärdaten in einem {{Glossary("ASCII", "ASCII")}}-String-Format darstellen, indem sie in eine Radix-64-Darstellung übersetzt werden. Da es nur aus Zeichen besteht, die von der URL-Syntax erlaubt sind ("URL-sicher"), können wir Binärdaten sicher in Data URLs kodieren. Base64 verwendet die Zeichen `+` und `/`, die in URLs spezielle Bedeutungen haben können. Da Data URLs keine URL-Pfadsegmente oder Abfrageparameter haben, ist diese Kodierung in diesem Kontext sicher.

### Kodierung in JavaScript

Die Web-APIs haben native Methoden, um in Base64 zu kodieren oder zu dekodieren: {{Glossary("Base64", "Base64")}}.

### Kodierung auf einem Unix-System

Die Base64-Kodierung einer Datei oder eines Strings auf Linux- und macOS-Systemen kann mit dem Befehlszeilen-Tool `base64` (oder alternativ dem `uuencode`-Dienstprogramm mit dem Argument `-m`) erreicht werden.

```bash
echo -n hello|base64
# outputs to console: aGVsbG8=

echo -n hello>a.txt
base64 a.txt
# outputs to console: aGVsbG8=

base64 a.txt>b.txt
# outputs to file b.txt: aGVsbG8=
```

### Kodierung auf Microsoft Windows

Auf Windows kann [Convert.ToBase64String](https://learn.microsoft.com/en-us/dotnet/api/system.convert.tobase64string?view=net-5.0) von PowerShell verwendet werden, um die Base64-Kodierung durchzuführen:

```plain
[convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes("hello"))
# outputs to console: aGVsbG8=
```

Alternativ bietet eine GNU/Linux-Shell (wie [WSL](https://de.wikipedia.org/wiki/Windows_Subsystem_for_Linux)) das Dienstprogramm `base64`:

```bash
bash$ echo -n hello | base64
# outputs to console: aGVsbG8=
```

## Häufige Probleme

Dieser Abschnitt beschreibt Probleme, die häufig beim Erstellen und Verwenden von `data` URLs auftreten.

```plain
data:text/html,lots of text…<p><a name%3D"bottom">bottom</a>?arg=val</p>
```

Dies stellt eine HTML-Ressource dar, deren Inhalt ist:

```html
lots of text…
<p><a name="bottom">bottom</a>?arg=val</p>
```

- Syntax
  - : Das Format für `data` URLs ist sehr einfach, aber es ist leicht zu vergessen, ein Komma vor dem "data"-Segment zu setzen oder die Daten falsch im Base64-Format zu kodieren.
- Formatierung in HTML
  - : Eine `data` URL bietet eine Datei innerhalb einer Datei, die potenziell sehr breit im Verhältnis zur Breite des umgebenden Dokuments sein kann. Als URL sollte die `data` mit Leerzeichen (Zeilenumbruch, Tabulator oder Leerzeichen) formatiert sein, aber es gibt praktische Probleme, die [bei der Verwendung der Base64-Kodierung](https://bugzil.la/73026#c12) auftreten.
- Längenbeschränkungen
  - : Browser sind nicht verpflichtet, eine bestimmte maximale Datenlänge zu unterstützen. Chromium und Firefox begrenzen `data` URLs auf 512MB, und Safari (WebKit) begrenzt sie auf 2048MB. Beachten Sie, dass Firefox 97 das Limit von 256KB auf 32MB erhöht hat und [Firefox 136 es auf 512MB erhöht hat](/de/docs/Mozilla/Firefox/Releases/136).
- Fehlende Fehlerbehandlung
  - : Ungültige Parameter im Medium oder Tippfehler beim Spezifizieren von `'base64'` werden ignoriert, aber es wird kein Fehler ausgegeben.
- Keine Unterstützung von Abfragezeichenfolgen, etc.
  - : Der Datenbereich einer Daten-URL ist opak, daher wird ein Versuch, eine Abfragezeichenfolge (seitenbezogene Parameter, mit der Syntax `<url>?parameter-data`) mit einer Daten-URL zu verwenden, die Abfragezeichenfolge einfach in die Daten einbeziehen, die die URL darstellt.
- Sicherheitsprobleme
  - : Eine Reihe von Sicherheitsproblemen (zum Beispiel Phishing) wurden mit Daten-URLs in Verbindung gebracht, insbesondere wenn sie in der obersten Ebene des Browsers geladen werden. Um solche Probleme zu mindern, wird das Laden von `data:` URLs auf oberster Ebene in allen modernen Browsern blockiert. Siehe [diesen Blogbeitrag des Mozilla Security Teams](https://blog.mozilla.org/security/2017/11/27/blocking-top-level-navigations-data-urls-firefox-59/) für mehr Details.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Glossary("Base64", "Base64")}}
- {{Glossary("Percent-encoding", "Percent-encoding")}}
- [`atob()`](/de/docs/Web/API/WorkerGlobalScope/atob)
- [`btoa()`](/de/docs/Web/API/WorkerGlobalScope/btoa)
- CSS {{CSSXref("url_value", "&lt;url&gt;")}}
- {{Glossary("URI", "URI")}}
