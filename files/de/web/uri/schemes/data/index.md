---
title: Data-URLs
slug: Web/URI/Schemes/data
l10n:
  sourceCommit: 0eeaa04378b34bce70e618ee20434e1193cdec17
---

{{QuickLinksWithSubpages("/de/docs/Web/URI")}}

**Data-URLs** sind URLs, die mit dem `data:`-Schema beginnen und es Inhaltserstellern ermöglichen, kleine Dateien direkt in Dokumente einzubetten. Früher waren sie als "data URIs" bekannt, bis dieser Name von der WHATWG abgeschafft wurde.

> [!NOTE]
> Data-URLs werden von modernen Browsern als einzigartige, opake Ursprünge behandelt, anstatt den Ursprung des für die Navigation zuständigen Einstellungsobjekts zu erben.

## Syntax

Data-URLs bestehen aus vier Teilen: einem Präfix (`data:`), einem [MIME-Typ](/de/docs/Web/HTTP/MIME_types), der den Datentyp angibt, einem optionalen `base64`-Token, wenn es sich um nicht-textuelle Daten handelt, und den eigentlichen Daten:

```plain
data:[<mediatype>][;base64],<data>
```

Der `mediatype` ist eine [MIME-Typ](/de/docs/Web/HTTP/MIME_types)-Zeichenkette, wie z.B. `'image/jpeg'` für eine JPEG-Bilddatei. Falls nicht angegeben, wird `text/plain;charset=US-ASCII` als Standard verwendet.

Wenn die Daten [Zeichen enthalten, die in RFC 3986 als reservierte Zeichen definiert sind](https://datatracker.ietf.org/doc/html/rfc3986#section-2.2), oder Leerzeichen, Zeilenumbrüche oder andere nicht druckbare Zeichen enthalten, müssen diese {{Glossary("Percent-encoding", "prozentcodiert")}} werden.

Wenn die Daten textuell sind, können Sie den Text einbetten (unter Verwendung der entsprechenden Entitäten oder Escape-Zeichen, basierend auf dem eingeschlossenen Dokumenttyp). Andernfalls können Sie `base64` angeben, um base64-codierte Binärdaten einzubetten. Weitere Informationen über MIME-Typen finden Sie [hier](/de/docs/Web/HTTP/MIME_types) und [hier](/de/docs/Web/HTTP/MIME_types/Common_types).

Einige Beispiele:

- `data:,Hello%2C%20World%21`
  - : Die text/plain Daten `Hello, World!`. Beachten Sie, wie das Komma als `%2C` und das Leerzeichen als `%20` {{Glossary("Percent-encoding", "prozentcodiert")}} sind.
- `data:text/plain;base64,SGVsbG8sIFdvcmxkIQ==`
  - : Base64-codierte Version des obigen
- `data:text/html,%3Ch1%3EHello%2C%20World%21%3C%2Fh1%3E`
  - : Ein HTML-Dokument mit `<h1>Hello, World!</h1>`
- `data:text/html,%3Cscript%3Ealert%28%27hi%27%29%3B%3C%2Fscript%3E`
  - : Ein HTML-Dokument mit `<script>alert('hi');</script>`, das einen JavaScript-Alert ausführt. Beachten Sie, dass der schließende Skript-Tag erforderlich ist.

## Daten in das Base64-Format kodieren

Base64 ist eine Gruppe von Binär-zu-Text-Kodierungsschemata, die Binärdaten im {{Glossary("ASCII", "ASCII")}}-Zeichenformat darstellen, indem sie in eine Radix-64-Repräsentation übersetzt werden. Da sie nur aus Zeichen besteht, die für die URL-Syntax ("URL sicher") erlaubt sind, können wir Binärdaten sicher in Data-URLs kodieren. Base64 verwendet die Zeichen `+` und `/`, die in URLs spezielle Bedeutungen haben können. Da Data-URLs keine URL-Pfadsegmente oder Abfrageparameter haben, ist diese Kodierung in diesem Kontext sicher.

### Kodierung in JavaScript

Die Web-APIs haben native Methoden zum Kodieren oder Dekodieren von Base64: {{Glossary("Base64", "Base64")}}.

### Kodierung auf einem Unix-System

Die Base64-Kodierung einer Datei oder eines Strings auf Linux- und macOS-Systemen kann über die Kommandozeile `base64` (oder alternativ das `uuencode`-Utility mit dem `-m` Argument) erreicht werden.

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

Alternativ bietet eine GNU/Linux-Shell (wie z.B. [WSL](https://en.wikipedia.org/wiki/Windows_Subsystem_for_Linux)) das Dienstprogramm `base64`:

```bash
bash$ echo -n hello | base64
# outputs to console: aGVsbG8=
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
  - : Das Format für `data`-URLs ist sehr einfach, aber es ist leicht, zu vergessen, ein Komma vor dem "data"-Segment zu setzen oder die Daten falsch in das Base64-Format zu kodieren.
- Formatierung in HTML
  - : Eine `data`-URL bietet eine Datei innerhalb einer Datei, die möglicherweise sehr breit im Verhältnis zur Breite des umgebenden Dokuments ist. Als URL sollte `data` mit Leerzeichen (Zeilenumbruch, Tabulator oder Leerzeichen) formatiert werden können, aber es gibt praktische Probleme, die bei der [Verwendung von Base64-Kodierung](https://bugzil.la/73026#c12) auftreten.
- Längenbeschränkungen
  - : Browser sind nicht verpflichtet, eine bestimmte maximale Länge von Daten zu unterstützen. Zum Beispiel begrenzte der Opera 11-Browser URLs auf 65535 Zeichen, was `data`-URLs auf 65529 Zeichen begrenzt (65529 Zeichen sind die Länge der kodierten Daten, nicht die Quelle, wenn Sie das einfache `data:` verwenden, ohne einen MIME-Typ anzugeben). Firefox Version 97 und neuer unterstützt `data`-URLs von bis zu 32MB (vor Version 97 lag das Limit bei knapp 256MB). Chromium akzeptiert URLs über 512MB nicht, und Webkit (Safari) akzeptiert URLs über 2048MB nicht.
- Fehlende Fehlerbehandlung
  - : Ungültige Parameter in Medien oder Tippfehler bei der Angabe von `'base64'` werden ignoriert, aber es wird kein Fehler angezeigt.
- Keine Unterstützung für Abfragezeichenfolgen, etc.
  - : Der Datenteil einer Data-URL ist opak, sodass ein Versuch, eine Abfragezeichenfolge (seitenspezifische Parameter mit der Syntax `<url>?parameter-data`) mit einer Data-URL zu verwenden, die Abfragezeichenfolge nur in die Daten einbezieht, die die URL darstellt.
- Sicherheitsprobleme
  - : Eine Reihe von Sicherheitsproblemen (z.B. Phishing) wurden mit Data-URLs in Verbindung gebracht, insbesondere beim Navigieren zu ihnen im obersten Fenster des Browsers. Um solche Probleme zu mindern, wird die Navigation auf oberster Ebene zu `data:`-URLs in allen modernen Browsern blockiert. Weitere Details finden Sie in [diesem Blogbeitrag des Mozilla Security Teams](https://blog.mozilla.org/security/2017/11/27/blocking-top-level-navigations-data-urls-firefox-59/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Glossary("Base64", "Base64")}}
- {{Glossary("Percent-encoding", "Percent-encoding")}}
- [`atob()`](/de/docs/Web/API/WorkerGlobalScope/atob)
- [`btoa()`](/de/docs/Web/API/WorkerGlobalScope/btoa)
- CSS {{CSSXref("url", "url()")}}
- {{Glossary("URI", "URI")}}
