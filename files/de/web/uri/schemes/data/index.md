---
title: Daten-URLs
slug: Web/URI/Schemes/data
l10n:
  sourceCommit: 6b730e3cfdf0f51940b44efa71bd59c84ce76e71
---

{{QuickLinksWithSubpages("/de/docs/Web/URI")}}

**Daten-URLs**, URLs mit dem Präfix `data:`, ermöglichen es Inhaltsanbietern, kleine Dateien direkt in Dokumente einzubetten. Sie wurden früher als "Daten-URIs" bezeichnet, bis dieser Name von der WHATWG zurückgezogen wurde.

> [!NOTE]
> Daten-URLs werden von modernen Browsern als einzigartige opake Ursprünge behandelt, anstatt den Ursprung des für die Navigation verantwortlichen Einstellungsobjekts zu erben.

## Syntax

Daten-URLs bestehen aus vier Teilen: einem Präfix (`data:`), einem [MIME-Typ](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types), der den Datentyp angibt, einem optionalen `base64`-Token, wenn es sich um nicht-textuelle Daten handelt, und den Daten selbst:

```plain
data:[<mediatype>][;base64],<data>
```

Der `mediatype` ist ein [MIME-Typ](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types)-String, wie zum Beispiel `'image/jpeg'` für eine JPEG-Bilddatei. Wenn er weggelassen wird, wird `text/plain;charset=US-ASCII` als Standard angenommen.

Wenn die Daten [Zeichen enthalten, die in RFC 3986 als reservierte Zeichen definiert sind](https://datatracker.ietf.org/doc/html/rfc3986#section-2.2), oder Leerzeichen, Zeilenumbrüche oder andere nicht druckbare Zeichen enthalten, müssen diese Zeichen {{Glossary("Percent-encoding", "prozentkodiert")}} werden.

Wenn die Daten textuell sind, können Sie den Text einbetten (unter Verwendung der entsprechenden Entities oder Escapes, basierend auf dem Typ des umgebenden Dokuments). Andernfalls können Sie `base64` angeben, um base64-kodierte Binärdaten einzubetten. Sie finden mehr Informationen zu MIME-Typen [hier](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types) und [hier](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types).

Einige Beispiele:

- `data:,Hello%2C%20World%21`
  - : Die Text/Plain-Daten `Hello, World!`. Beachten Sie, wie das Komma als `%2C` {{Glossary("Percent-encoding", "prozentkodiert")}} ist und das Leerzeichen als `%20`.
- `data:text/plain;base64,SGVsbG8sIFdvcmxkIQ==`
  - : Base64-kodierte Version des obigen
- `data:text/html,%3Ch1%3EHello%2C%20World%21%3C%2Fh1%3E`
  - : Ein HTML-Dokument mit `<h1>Hello, World!</h1>`
- `data:text/html,%3Cscript%3Ealert%28%27hi%27%29%3B%3C%2Fscript%3E`
  - : Ein HTML-Dokument mit `<script>alert('hi');</script>`, das einen JavaScript-Alert ausführt. Beachten Sie, dass das schließende Script-Tag erforderlich ist.

## Daten in Base64-Format kodieren

Base64 ist eine Gruppe von Binär-zu-Text-Kodierungsschemata, die Binärdaten in einem {{Glossary("ASCII")}}-String-Format durch Umwandlung in eine Radix-64-Darstellung darstellen. Da es nur aus Zeichen besteht, die von der URL-Syntax erlaubt sind ("URL-sicher"), können wir Binärdaten sicher in Daten-URLs kodieren. Base64 verwendet die Zeichen `+` und `/`, die in URLs besondere Bedeutungen haben können. Da Daten-URLs keine URL-Pfadsegmente oder Abfrageparameter haben, ist diese Kodierung in diesem Kontext sicher.

### Kodierung in JavaScript

Die Web-APIs haben native Methoden zum Kodieren oder Dekodieren in Base64: [Base64](/de/docs/Glossary/Base64).

### Kodierung auf einem Unix-System

Die Base64-Kodierung einer Datei oder Zeichenkette auf Linux- und macOS-Systemen kann mit dem Kommandozeilen-Tool `base64` erreicht werden (oder alternativ mit dem `uuencode`-Dienstprogramm mit dem Argument `-m`).

```bash
echo -n hello|base64
# Ausgabe auf Konsole: aGVsbG8=

echo -n hello>a.txt
base64 a.txt
# Ausgabe auf Konsole: aGVsbG8=

base64 a.txt>b.txt
# Ausgabe in Datei b.txt: aGVsbG8=
```

### Kodierung auf Microsoft Windows

Unter Windows kann [Convert.ToBase64String](https://learn.microsoft.com/en-us/dotnet/api/system.convert.tobase64string?view=net-5.0) aus PowerShell zur Durchführung der Base64-Kodierung verwendet werden:

```plain
[convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes("hello"))
# Ausgabe auf Konsole: aGVsbG8=
```

Alternativ stellt eine GNU/Linux-Shell (wie [WSL](https://en.wikipedia.org/wiki/Windows_Subsystem_for_Linux)) das Dienstprogramm `base64` bereit:

```bash
bash$ echo -n hello | base64
# Ausgabe auf Konsole: aGVsbG8=
```

## Häufige Probleme

Dieser Abschnitt beschreibt Probleme, die häufig beim Erstellen und Verwenden von `data`-URLs auftreten.

```html
data:text/html,lots of text…<p><a name%3D"bottom">bottom</a>?arg=val</p>
```

Dies stellt eine HTML-Ressource dar, deren Inhalt ist:

```html
lots of text…
<p><a name="bottom">bottom</a>?arg=val</p>
```

- Syntax
  - : Das Format für `data`-URLs ist sehr einfach, aber es ist leicht, zu vergessen, ein Komma vor das "data"-Segment zu setzen oder die Daten falsch in Base64-Format zu kodieren.
- Formatierung in HTML
  - : Eine `data`-URL bietet eine Datei innerhalb einer Datei, die im Vergleich zur Breite des umgebenden Dokuments potenziell sehr breit sein kann. Als URL sollte die `data` mit Leerzeichen (Zeilenumbruch, Tabulator oder Leerzeichen) formatierbar sein, aber es gibt praktische Probleme, die [bei der Verwendung von Base64-Kodierung](https://bugzil.la/73026#c12) auftreten.
- Längenbegrenzungen
  - : Browser sind nicht verpflichtet, eine bestimmte maximale Länge von Daten zu unterstützen. Zum Beispiel begrenzte der Opera 11-Browser URLs auf 65535 Zeichen, was `data`-URLs auf 65529 Zeichen begrenzt (65529 Zeichen ist die Länge der kodierten Daten, nicht die Quelle, wenn Sie das einfache `data:` ohne Angabe eines MIME-Typs verwenden). Firefox Version 97 und neuer unterstützt `data`-URLs von bis zu 32 MB (vor Version 97 lag das Limit bei fast 256 MB). Chromium lehnt URLs über 512 MB ab, und Webkit (Safari) URLs über 2048 MB.
- Fehlende Fehlermeldung
  - : Ungültige Parameter in Medien, oder Tippfehler beim Angeben von `'base64'`, werden ignoriert, aber es wird kein Fehler ausgegeben.
- Keine Unterstützung für Abfragezeichenfolgen usw.
  - : Der Datenteil einer Daten-URL ist opak, so dass ein Versuch, eine Abfragezeichenfolge (seitenspezifische Parameter, mit der Syntax `<url>?parameter-data`) mit einer Daten-URL zu verwenden, die Abfragezeichenfolge nur in die Daten einbezieht, die die URL darstellt.
- Sicherheitsprobleme
  - : Eine Reihe von Sicherheitsproblemen (zum Beispiel Phishing) wurden mit Daten-URLs verbunden, insbesondere wenn zu ihnen im obersten Level des Browsers navigiert wird. Um solche Probleme zu mindern, wird die Navigation zu `data:` URLs im obersten Level in allen modernen Browsern blockiert. Weitere Details finden Sie in [diesem Blogbeitrag vom Mozilla Security Team](https://blog.mozilla.org/security/2017/11/27/blocking-top-level-navigations-data-urls-firefox-59/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{compat}}

## Siehe auch

- {{Glossary("Base64")}}
- {{Glossary("Percent-encoding")}}
- {{domxref("WorkerGlobalScope.atob()", "atob()")}}
- {{domxref("WorkerGlobalScope.btoa()", "btoa()")}}
- CSS {{CSSXref("url", "url()")}}
- {{Glossary("URI")}}
