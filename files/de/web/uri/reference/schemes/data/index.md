---
title: "data: URLs"
short-title: "data:"
slug: Web/URI/Reference/Schemes/data
l10n:
  sourceCommit: c8b64fbd9beeee79caa5e3f0e8a47f02033e7c0d
---

**Data-URLs**, URLs, die mit dem Schema `data:` beginnen, ermöglichen es Inhaltsautoren, kleine Dateien direkt in Dokumente einzubetten. Sie wurden früher als "data URIs" bezeichnet, bis dieser Name von der WHATWG zurückgezogen wurde.

> [!NOTE]
> Data-URLs werden von modernen Browsern als einzigartige, undurchsichtige Ursprünge behandelt, statt den Ursprung des für die Navigation verantwortlichen Einstellungsobjekts zu erben.

## Syntax

```url
data:[<media-type>][;base64],<data>
```

- `data:`
  - : Das Schema der URL.
- `<media-type>` {{optional_inline}}
  - : Der [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types), der den Datentyp angibt, wie beispielsweise `image/jpeg` für eine JPEG-Bilddatei. Wenn er weggelassen wird, ist der Standard `text/plain;charset=US-ASCII`. Sie können [eine vollständige Analyse der MIME-Typ-Struktur](/de/docs/Web/HTTP/Guides/MIME_types) und [eine Tabelle mit häufigen MIME-Typen im Web](/de/docs/Web/HTTP/Guides/MIME_types/Common_types) finden.
- `;base64` {{optional_inline}}
  - : Gibt an, dass die Daten base64-dekodiert werden sollen; siehe [Daten in das Base64-Format kodieren](#daten_in_das_base64-format_kodieren).
- `<data>`
  - : Die Daten selbst. Wenn die Daten [Zeichen beinhalten, die in RFC 3986 als reservierte Zeichen definiert sind](https://datatracker.ietf.org/doc/html/rfc3986#section-2.2), oder Leerzeichen, Zeilenumbrüche oder andere nicht druckbare Zeichen enthalten, müssen diese Zeichen {{Glossary("Percent-encoding", "Prozent-kodiert")}} werden. Wenn die Daten textuell sind, können Sie den Text (unter Verwendung der entsprechenden Entitäten oder Escape-Zeichen basierend auf dem Typ des umschließenden Dokuments) einbetten. Andernfalls können Sie `base64` angeben, um base64-kodierte Binärdaten einzubetten.

Einige Beispiele:

- `data:,Hello%2C%20World%21`
  - : Die text/plain Daten `Hello, World!`. Beachten Sie, wie das Komma als `%2C` {{Glossary("Percent-encoding", "Prozent-kodiert")}} und das Leerzeichen als `%20`.
- `data:text/plain,Hello%2C%20%57%6F%72%6C%64%21`
  - : Die text/plain Daten `Hello, World!`, wobei die `World`-Zeichen sowie das Komma und die Leerzeichen Prozent-kodiert sind: Sie können alle Zeichen Prozent-kodieren, wenn sie nicht kodiert werden müssen. Beachten Sie, dass {{jsxref("decodeURIComponent()")}} verwendet werden kann, um alle kodierten Zeichen zu dekodieren.
- `data:text/plain;base64,SGVsbG8sIFdvcmxkIQ==`
  - : Die base64-kodierte Version des obigen
- `data:text/html,%3Ch1%3EHello%2C%20World%21%3C%2Fh1%3E`
  - : Ein HTML-Dokument mit `<h1>Hello, World!</h1>`
- `data:text/html,%3Cscript%3Ealert%28%27hi%27%29%3B%3C%2Fscript%3E`
  - : Ein HTML-Dokument mit `<script>alert('hi');</script>`, das einen JavaScript-Alarm auslöst. Beachten Sie, dass das Schließende `script`-Tag erforderlich ist.

## Daten in das Base64-Format kodieren

Base64 ist eine Gruppe von Binär-zu-Text-Kodierungsschemata, die Binärdaten in einer {{Glossary("ASCII", "ASCII")}}-Zeichenfolgenformat darstellen, indem sie in eine Radix-64-Darstellung übersetzt werden. Da sie nur aus Zeichen bestehen, die von der URL-Syntax erlaubt sind ("URL-sicher"), können wir Binärdaten sicher in Daten-URLs kodieren. Base64 verwendet die Zeichen `+` und `/`, die in URLs eine besondere Bedeutung haben können. Da Data-URLs keine URL-Pfadsegmente oder Abfrageparameter haben, ist diese Kodierung in diesem Zusammenhang sicher.

### Kodierung in JavaScript

Die Web-APIs haben native Methoden zur Kodierung oder Dekodierung zu Base64: {{Glossary("Base64", "Base64")}}.

### Kodierung auf einem Unix-System

Die Base64-Kodierung einer Datei oder Zeichenfolge auf Linux- und macOS-Systemen kann mit dem Kommandozeilen-Tool `base64` (oder alternativ mit dem `uuencode` Dienstprogramm mit `-m` Argument) erreicht werden.

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

Unter Windows kann [Convert.ToBase64String](https://learn.microsoft.com/en-us/dotnet/api/system.convert.tobase64string?view=net-5.0) von PowerShell verwendet werden, um die Base64-Kodierung durchzuführen:

```plain
[convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes("hello"))
# outputs to console: aGVsbG8=
```

Alternativ bietet eine GNU/Linux-Shell (wie [WSL](https://en.wikipedia.org/wiki/Windows_Subsystem_for_Linux)) das Dienstprogramm `base64`:

```bash
bash$ echo -n hello | base64
# outputs to console: aGVsbG8=
```

## Häufige Probleme

Dieser Abschnitt beschreibt Probleme, die häufig beim Erstellen und Verwenden von `data`-URLs auftreten.

```plain
data:text/html,lots of text…<p><span class%3D"bottom">bottom</span>?arg=val</p>
```

Dies stellt eine HTML-Ressource dar, deren Inhalt ist:

```html
lots of text…
<p><span class="bottom">bottom</span>?arg=val</p>
```

- Syntax
  - : Das Format für `data`-URLs ist sehr einfach, aber es ist leicht, zu vergessen, ein Komma vor dem "Daten"-Segment zu setzen oder die Daten falsch in das Base64-Format zu kodieren.
- Formatierung in HTML
  - : Eine `data`-URL bietet eine Datei innerhalb einer Datei, die im Vergleich zur Breite des umschließenden Dokuments möglicherweise sehr breit ist. Als URL sollte das `data` mit Leerzeichen (Zeilenumbruch, Tabulator oder Leerzeichen) formatiert werden können, aber es gibt praktische Probleme, die bei der [Verwendung der Base64-Kodierung](https://bugzil.la/73026#c12) auftreten.
- Längenbeschränkungen
  - : Browser sind nicht verpflichtet, eine bestimmte maximale Länge von Daten zu unterstützen.
    Chromium und Firefox beschränken `data`-URLs auf 512 MB, und Safari (WebKit) beschränkt sie auf 2048 MB.
    Beachten Sie, dass Firefox 97 das Limit von 256 KB auf 32 MB erhöht hat, und [Firefox 136 es auf 512 MB erhöht hat](/de/docs/Mozilla/Firefox/Releases/136).
- Mangelnde Fehlerbehandlung
  - : Ungültige Parameter im Media oder Tippfehler beim Festlegen von `'base64'` werden ignoriert, jedoch wird kein Fehler angegeben.
- Keine Unterstützung für Abfragezeichenfolgen, usw.
  - : Der Datenanteil einer Daten-URL ist undurchsichtig, daher führt ein Versuch, eine Abfragezeichenfolge (seitenbezogene Parameter, mit der Syntax `<url>?parameter-data`) mit einer Daten-URL zu verwenden, nur dazu, dass die Abfragezeichenfolge in den Daten enthalten ist, die die URL darstellt.
- Sicherheitsprobleme
  - : Eine Reihe von Sicherheitsproblemen (zum Beispiel Phishing) wurden mit Daten-URLs und deren Verwendung zur Navigation auf der obersten Ebene im Browser in Verbindung gebracht. Um solche Probleme zu mildern, wird die oberste Navigation zu `data:` URLs in allen modernen Browsern blockiert. Weitere Informationen finden Sie in [diesem Blogbeitrag des Mozilla Security Teams](https://blog.mozilla.org/security/2017/11/27/blocking-top-level-navigations-data-urls-firefox-59/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Glossary("Base64", "Base64")}}
- {{Glossary("Percent-encoding", "Prozent-Kodierung")}}
- [`atob()`](/de/docs/Web/API/WorkerGlobalScope/atob)
- [`btoa()`](/de/docs/Web/API/WorkerGlobalScope/btoa)
- CSS {{CSSXref("url_value", "&lt;url&gt;")}}
- {{Glossary("URI", "URI")}}
