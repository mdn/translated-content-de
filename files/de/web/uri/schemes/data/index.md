---
title: Data-URLs
slug: Web/URI/Schemes/data
l10n:
  sourceCommit: 6b730e3cfdf0f51940b44efa71bd59c84ce76e71
---

{{QuickLinksWithSubpages("/de/docs/Web/URI")}}

**Data-URLs**, URLs mit dem Präfix `data:`, ermöglichen es Inhaltsentwicklern, kleine Dateien direkt in Dokumente einzubetten. Sie wurden früher als "data URIs" bezeichnet, bis dieser Name von der WHATWG zurückgezogen wurde.

> [!NOTE]
> Data-URLs werden von modernen Browsern als einzigartige, undurchsichtige Ursprünge behandelt, anstatt den Ursprung des für die Navigation verantwortlichen Einstellungsobjekts zu erben.

## Syntax

Data-URLs bestehen aus vier Teilen: einem Präfix (`data:`), einem [MIME-Typ](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types), das den Datentyp angibt, einem optionalen `base64`-Token bei nicht-textlichen Daten und den eigentlichen Daten:

```plain
data:[<mediatype>][;base64],<data>
```

Der `mediatype` ist eine [MIME-Typ](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types) Zeichenkette, wie zum Beispiel `'image/jpeg'` für eine JPEG-Bilddatei. Wird dieser weggelassen, lautet der Standardwert `text/plain;charset=US-ASCII`.

Wenn die Daten [Zeichen enthalten, die in RFC 3986 als reserviert definiert sind](https://datatracker.ietf.org/doc/html/rfc3986#section-2.2), oder Leerzeichen, Zeilenumbrüche oder andere nicht druckbare Zeichen enthalten, müssen diese Zeichen {{Glossary("Percent-encoding", "prozentkodiert")}} werden.

Wenn die Daten textlich sind, können Sie den Text einbetten (unter Verwendung der entsprechenden Entitäten oder Escape-Sequenzen, basierend auf dem Typ des umschließenden Dokuments). Andernfalls können Sie `base64` angeben, um base64-kodierte Binärdaten einzubetten. Weitere Informationen zu MIME-Typen finden Sie [hier](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types) und [hier](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types).

Einige Beispiele:

- `data:,Hello%2C%20World%21`
  - : Die text/plain Daten `Hello, World!`. Beachten Sie, wie das Komma als `%2C` und das Leerzeichen als `%20` {{Glossary("Percent-encoding", "prozentkodiert")}} sind.
- `data:text/plain;base64,SGVsbG8sIFdvcmxkIQ==`
  - : Base64-kodierte Version des obigen Beispiels
- `data:text/html,%3Ch1%3EHello%2C%20World%21%3C%2Fh1%3E`
  - : Ein HTML-Dokument mit `<h1>Hello, World!</h1>`
- `data:text/html,%3Cscript%3Ealert%28%27hi%27%29%3B%3C%2Fscript%3E`
  - : Ein HTML-Dokument mit `<script>alert('hi');</script>`, das einen JavaScript-Alarm ausführt. Beachten Sie, dass das schließende Script-Tag erforderlich ist.

## Kodierung von Daten im base64-Format

Base64 ist eine Gruppe von Kodierungsschemata, die Binärdaten in ein {{Glossary("ASCII", "ASCII")}} Zeichenkettenformat umwandeln, indem es in eine Radix-64-Darstellung übersetzt wird. Da nur Zeichen verwendet werden, die von der URL-Syntax erlaubt sind ("URL sicher"), können wir Binärdaten sicher in Data-URLs kodieren. Base64 verwendet die Zeichen `+` und `/`, die in URLs spezielle Bedeutungen haben können. Da Data-URLs keine URL-Pfadsegmente oder Abfrageparameter haben, ist diese Kodierung in diesem Kontext sicher.

### Kodierung in JavaScript

Die Web-APIs bieten native Methoden zur Kodierung oder Dekodierung in base64: {{Glossary("Base64", "Base64")}}.

### Kodierung auf einem Unix-System

Die base64-Kodierung einer Datei oder Zeichenkette auf Linux- und macOS-Systemen kann mit dem Command-Line-Tool `base64` (oder alternativ mit dem `uuencode` Dienstprogramm mit dem `-m` Argument) erreicht werden.

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

Unter Windows kann [Convert.ToBase64String](https://learn.microsoft.com/en-us/dotnet/api/system.convert.tobase64string?view=net-5.0) aus PowerShell zur Ausführung der Base64-Kodierung verwendet werden:

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

In diesem Abschnitt werden Probleme beschrieben, die häufig beim Erstellen und Verwenden von `data` URLs auftreten.

```html
data:text/html,lots of text…<p><a name%3D"bottom">bottom</a>?arg=val</p>
```

Dies stellt eine HTML-Ressource dar, deren Inhalt ist:

```html
lots of text…
<p><a name="bottom">bottom</a>?arg=val</p>
```

- Syntax
  - : Das Format für `data` URLs ist sehr einfach, aber es ist leicht, das Komma vor dem "Daten"-Segment zu vergessen oder die Daten falsch in das base64-Format zu kodieren.
- Formatierung in HTML
  - : Eine `data` URL bietet eine Datei innerhalb einer Datei, die potenziell sehr breit im Verhältnis zur Breite des umschließenden Dokuments sein kann. Als URL sollte die `data` mit Leerzeichen (Zeilenumbruch, Tab oder Leerzeichen) formatiert werden können, aber es gibt praktische Probleme, die bei der [Verwendung von base64-Kodierung](https://bugzil.la/73026#c12) auftreten.
- Längenbeschränkungen
  - : Browser sind nicht verpflichtet, eine bestimmte maximale Datenlänge zu unterstützen. Zum Beispiel begrenzte der Opera 11-Browser URLs auf 65535 Zeichen, was `data` URLs auf 65529 Zeichen (65529 Zeichen sind die Länge der kodierten Daten, nicht der Quelle, wenn Sie den einfachen `data:` verwenden, ohne einen MIME-Typ anzugeben) beschränkte. Firefox-Version 97 und neuer unterstützt `data` URLs von bis zu 32MB (vor 97 lag das Limit bei fast 256MB). Chromium lehnt URLs über 512MB ab und Webkit (Safari) URLs über 2048MB.
- Fehlendes Fehlerhandling
  - : Ungültige Parameter in Medien, oder Tippfehler bei der Angabe von `'base64'`, werden ignoriert, aber es wird kein Fehler angezeigt.
- Keine Unterstützung für Abfragezeichenfolgen etc.
  - : Der Datenbereich einer Data-URL ist undurchsichtig, daher wird ein Versuch, eine Abfragezeichenfolge (seitenspezifische Parameter mit der Syntax `<url>?parameter-data`) mit einer Data-URL zu verwenden, einfach die Abfragezeichenfolge in die Daten, die die URL repräsentiert, einbeziehen.
- Sicherheitsprobleme
  - : Eine Reihe von Sicherheitsproblemen (zum Beispiel Phishing) wurden mit Data-URLs und deren Navigation auf der obersten Ebene des Browsers in Verbindung gebracht. Um solche Probleme abzumildern, wird die Navigation auf oberster Ebene zu `data:` URLs in allen modernen Browsern blockiert. Weitere Details finden Sie in [diesem Blogpost vom Mozilla Security Team](https://blog.mozilla.org/security/2017/11/27/blocking-top-level-navigations-data-urls-firefox-59/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{compat}}

## Siehe auch

- {{Glossary("Base64", "Base64")}}
- {{Glossary("Percent-encoding", "Prozentkodierung")}}
- [`atob()`](/de/docs/Web/API/WorkerGlobalScope/atob)
- [`btoa()`](/de/docs/Web/API/WorkerGlobalScope/btoa)
- CSS {{CSSXref("url", "url()")}}
- {{Glossary("URI", "URI")}}
