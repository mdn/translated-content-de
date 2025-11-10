---
title: "data: URLs"
short-title: "data:"
slug: Web/URI/Reference/Schemes/data
l10n:
  sourceCommit: 9f7e7e9075e9f2b1937d2c8000f52a8ff76bff52
---

**Data-URLs**, URLs mit dem Präfix `data:`, ermöglichen es Inhaltsanbietern, kleine Dateien direkt in Dokumente einzubetten. Sie wurden früher als "Data-URIs" bezeichnet, bis dieser Name von der WHATWG zurückgezogen wurde.

> [!NOTE]
> Data-URLs werden von modernen Browsern als eindeutige, undurchsichtige Ursprünge behandelt und erben nicht den Ursprung des Einstellungsobjekts, das für die Navigation verantwortlich ist.

## Syntax

```url
data:[<media-type>][;base64],<data>
```

- `data:`
  - : Das Schema der URL.
- `<media-type>` {{optional_inline}}
  - : Der [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types), der den Typ der Daten angibt, z.B. `image/jpeg` für eine JPEG-Bilddatei. Wenn weggelassen, ist der Standardwert `text/plain;charset=US-ASCII`. Sie finden [eine vollständige Analyse der MIME-Typ-Struktur](/de/docs/Web/HTTP/Guides/MIME_types) und [eine Tabelle der gebräuchlichen MIME-Typen im Web](/de/docs/Web/HTTP/Guides/MIME_types/Common_types).
- `;base64` {{optional_inline}}
  - : Gibt an, dass die Daten base64-dekodiert werden sollten; siehe [Daten in das Base64-Format kodieren](#daten_in_das_base64-format_kodieren).
- `<data>`
  - : Die Daten selbst. Wenn die Daten [Zeichen enthalten, die in RFC 3986 als reservierte Zeichen definiert sind](https://datatracker.ietf.org/doc/html/rfc3986#section-2.2), oder Leerzeichen, Zeilenumbrüche oder andere nicht druckbare Zeichen enthalten, müssen diese Zeichen {{Glossary("Percent-encoding", "prozentual kodiert")}} werden. Wenn die Daten Text sind, können Sie den Text (unter Verwendung der entsprechenden Entitäten oder Escapes basierend auf dem Typ des umgebenden Dokuments) einbetten. Andernfalls können Sie `base64` angeben, um base64-kodierte Binärdaten einzubetten.

Einige Beispiele:

- `data:,Hello%2C%20World%21`
  - : Der `text/plain`-Daten `Hello, World!`. Beachten Sie, wie das Komma als `%2C` und das Leerzeichen als `%20` {{Glossary("Percent-encoding", "prozentual kodiert")}} werden.
- `data:text/plain;base64,SGVsbG8sIFdvcmxkIQ==`
  - : Base64-kodierte Version des obigen Textes
- `data:text/html,%3Ch1%3EHello%2C%20World%21%3C%2Fh1%3E`
  - : Ein HTML-Dokument mit `<h1>Hello, World!</h1>`
- `data:text/html,%3Cscript%3Ealert%28%27hi%27%29%3B%3C%2Fscript%3E`
  - : Ein HTML-Dokument mit `<script>alert('hi');</script>`, das einen JavaScript-Alarm ausführt. Beachten Sie, dass das abschließende Script-Tag erforderlich ist.

## Daten in das Base64-Format kodieren

Base64 ist eine Gruppe von Binär-zu-Text-Kodierungsschemata, die Binärdaten im {{Glossary("ASCII", "ASCII")}}-Zeichenformat darstellen, indem sie in eine Radix-64-Darstellung übersetzt werden. Da nur Zeichen verwendet werden, die von der URL-Syntax erlaubt sind ("URL-sicher"), können wir Binärdaten sicher in Data-URLs kodieren. Base64 verwendet die Zeichen `+` und `/`, die möglicherweise besondere Bedeutungen in URLs haben. Weil Data-URLs keine URL-Pfad-Segmente oder Abfrageparameter haben, ist diese Kodierung in diesem Kontext sicher.

### Kodierung in JavaScript

Die Web-APIs haben native Methoden zum Kodieren oder Dekodieren in Base64: {{Glossary("Base64", "Base64")}}.

### Kodierung auf einem Unix-System

Die Base64-Kodierung einer Datei oder eines Strings auf Linux- und macOS-Systemen kann mit dem Befehlszeilenprogramm `base64` (oder alternativ dem `uuencode`-Dienstprogramm mit dem Argument `-m`) erreicht werden.

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

Unter Windows kann [Convert.ToBase64String](https://learn.microsoft.com/en-us/dotnet/api/system.convert.tobase64string?view=net-5.0) aus PowerShell verwendet werden, um die Base64-Kodierung durchzuführen:

```plain
[convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes("hello"))
# outputs to console: aGVsbG8=
```

Alternativ bietet ein GNU/Linux-Shell (wie [WSL](https://en.wikipedia.org/wiki/Windows_Subsystem_for_Linux)) das Dienstprogramm `base64`:

```bash
bash$ echo -n hello | base64
# outputs to console: aGVsbG8=
```

## Häufige Probleme

Dieser Abschnitt beschreibt Probleme, die häufig auftreten, wenn `data`-URLs erstellt und verwendet werden.

```plain
data:text/html,lots of text…<p><span class%3D"bottom">bottom</span>?arg=val</p>
```

Dies stellt eine HTML-Ressource dar, deren Inhalt folgendermaßen aussieht:

```html
lots of text…
<p><span class="bottom">bottom</span>?arg=val</p>
```

- Syntax
  - : Das Format für `data`-URLs ist sehr einfach, aber es ist leicht, das Komma vor dem "Daten"-Segment zu vergessen oder die Daten nicht korrekt ins Base64-Format zu kodieren.
- Formatierung in HTML
  - : Eine `data`-URL bietet eine Datei innerhalb einer Datei, die potenziell relativ zur Breite des umgebenden Dokuments sehr breit sein kann. Als URL sollte die `data` mit Leerzeichen (Zeilenumbruch, Tabulator oder Leerzeichen) formatierbar sein, aber es gibt praktische Probleme, die [bei Verwendung der Base64-Kodierung](https://bugzil.la/73026#c12) auftreten.
- Längenbeschränkungen
  - : Browser sind nicht verpflichtet, eine bestimmte maximale Länge der Daten zu unterstützen.
    Chromium und Firefox beschränken `data`-URLs auf 512 MB, und Safari (WebKit) beschränkt sie auf 2048 MB.
    Beachten Sie, dass Firefox 97 das Limit von 256 KB auf 32 MB erhöht hat, und [Firefox 136 es auf 512 MB erhöht hat](/de/docs/Mozilla/Firefox/Releases/136).
- Fehlende Fehlerbehandlung
  - : Ungültige Parameter in Medien oder Tippfehler bei der Angabe von `'base64'` werden ignoriert, aber es wird kein Fehler angezeigt.
- Keine Unterstützung für Abfragezeichenfolgen usw.
  - : Der Datenanteil einer `data`-URL ist undurchsichtig, daher führt ein Versuch, eine Abfragezeichenfolge (seitenbezogene Parameter mit der Syntax `<url>?parameter-data`) mit einer `data`-URL zu verwenden, lediglich dazu, dass die Abfragezeichenfolge in der von der URL repräsentierten Daten enthalten ist.
- Sicherheitsprobleme
  - : Eine Reihe von Sicherheitsproblemen (zum Beispiel Phishing) wurden mit `data`-URLs in Verbindung gebracht und der Navigation zu ihnen auf oberster Ebene des Browsers. Um solche Probleme zu reduzieren, wird die Navigation auf oberster Ebene zu `data:`-URLs in allen modernen Browsern blockiert. Siehe [diesen Blogbeitrag vom Mozilla Security Team](https://blog.mozilla.org/security/2017/11/27/blocking-top-level-navigations-data-urls-firefox-59/) für weitere Details.

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
