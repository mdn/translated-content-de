---
title: Data-URLs
slug: Web/URI/Schemes/data
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{QuickLinksWithSubpages("/de/docs/Web/URI")}}

**Data-URLs**, URLs, die mit dem Schema `data:` beginnen, ermöglichen es Inhaltsentwicklern, kleine Dateien direkt in Dokumente einzubetten. Früher wurden sie als "data URIs" bezeichnet, bis dieser Name von der WHATWG verworfen wurde.

> [!NOTE]
> Data-URLs werden von modernen Browsern als einzigartige, undurchsichtige Ursprünge behandelt, anstatt den Ursprung des verantwortlichen Einstellungsobjekts für die Navigation zu erben.

## Syntax

Data-URLs bestehen aus vier Teilen: einem Präfix (`data:`), einem [MIME-Typ](/de/docs/Web/HTTP/MIME_types), der den Datentyp angibt, einem optionalen `base64`-Token, falls nicht-textuell, und den Daten selbst:

```plain
data:[<media-type>][;base64],<data>
```

Der `media-type` ist ein [MIME-Typ](/de/docs/Web/HTTP/MIME_types)-String, wie zum Beispiel `'image/jpeg'` für eine JPEG-Bilddatei. Wird er weggelassen, wird standardmäßig `text/plain;charset=US-ASCII` angenommen.

Wenn die Daten [Zeichen enthalten, die in RFC 3986 als reservierte Zeichen definiert sind](https://datatracker.ietf.org/doc/html/rfc3986#section-2.2), oder Leerzeichen, Zeilenumbrüche oder andere nicht druckbare Zeichen enthalten, müssen diese Zeichen {{Glossary("Percent-encoding", "prozentcodiert")}} werden.

Wenn die Daten textuell sind, können Sie den Text einbetten (unter Verwendung der entsprechenden Entitäten oder Escapes basierend auf dem Typ des umgebenden Dokuments). Andernfalls können Sie `base64` angeben, um base64-codierte Binärdaten einzubetten. Weitere Informationen zu MIME-Typen finden Sie [hier](/de/docs/Web/HTTP/MIME_types) und [hier](/de/docs/Web/HTTP/MIME_types/Common_types).

Einige Beispiele:

- `data:,Hello%2C%20World%21`
  - : Die text/plain-Daten `Hello, World!`. Beachten Sie, wie das Komma als `%2C` und das Leerzeichen als `%20` {{Glossary("Percent-encoding", "prozentcodiert")}} sind.
- `data:text/plain;base64,SGVsbG8sIFdvcmxkIQ==`
  - : Base64-codierte Version des obigen Beispiels
- `data:text/html,%3Ch1%3EHello%2C%20World%21%3C%2Fh1%3E`
  - : Ein HTML-Dokument mit `<h1>Hello, World!</h1>`
- `data:text/html,%3Cscript%3Ealert%28%27hi%27%29%3B%3C%2Fscript%3E`
  - : Ein HTML-Dokument mit `<script>alert('hi');</script>`, das einen JavaScript-Alarm auslöst. Beachten Sie, dass das abschließende Script-Tag erforderlich ist.

## Daten in das Base64-Format kodieren

Base64 ist eine Gruppe von Binär-zu-Text-Kodierungsschemata, die Binärdaten in einem {{Glossary("ASCII", "ASCII")}}-String-Format darstellen, indem sie in eine Radix-64-Darstellung übersetzt werden. Da sie nur Zeichen verwenden, die von der URL-Syntax erlaubt sind ("URL-sicher"), können wir Binärdaten sicher in Data-URLs kodieren. Base64 verwendet die Zeichen `+` und `/`, die in URLs eine spezielle Bedeutung haben können. Da Data-URLs keine URL-Pfadsegmente oder Abfrageparameter haben, ist diese Kodierung in diesem Kontext sicher.

### Kodierung in JavaScript

Die Web-APIs haben native Methoden zum Kodieren oder Dekodieren in Base64: {{Glossary("Base64", "Base64")}}.

### Kodierung auf einem Unix-System

Die Base64-Kodierung einer Datei oder eines Strings auf Linux- und macOS-Systemen kann über die Kommandozeile `base64` (oder alternativ das `uuencode`-Tool mit dem Argument `-m`) erreicht werden.

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

Alternativ bietet eine GNU/Linux-Shell (wie [WSL](https://en.wikipedia.org/wiki/Windows_Subsystem_for_Linux)) das Dienstprogramm `base64`:

```bash
bash$ echo -n hello | base64
# outputs to console: aGVsbG8=
```

## Häufige Probleme

In diesem Abschnitt werden Probleme beschrieben, die häufig beim Erstellen und Verwenden von `data`-URLs auftreten.

```html
data:text/html,lots of text…<p><a name%3D"bottom">bottom</a>?arg=val</p>
```

Dies stellt eine HTML-Ressource dar, deren Inhalt ist:

```html
lots of text…
<p><a name="bottom">bottom</a>?arg=val</p>
```

- Syntax
  - : Das Format für `data`-URLs ist sehr einfach, aber es ist leicht zu vergessen, ein Komma vor dem "Daten"-Segment zu setzen oder die Daten falsch ins Base64-Format zu kodieren.
- Formatierung in HTML
  - : Eine `data`-URL bietet eine Datei innerhalb einer Datei, die im Verhältnis zur Breite des umgebenden Dokuments potenziell sehr breit sein kann. Als URL sollte das `data` mit Leerzeichen (Zeilenumbruch, Tabulator oder Leerzeichen) formatiert werden können, aber es gibt praktische Probleme, die [bei der Verwendung der Base64-Kodierung](https://bugzil.la/73026#c12) auftreten.
- Längenbeschränkungen
  - : Browser sind nicht verpflichtet, eine bestimmte maximale Datenlänge zu unterstützen. Beispielsweise begrenzte der Opera 11-Browser URLs auf eine Länge von 65535 Zeichen, was `data`-URLs auf 65529 Zeichen beschränkt (65529 Zeichen ist die Länge der kodierten Daten, nicht die der Quelle, wenn Sie das einfache `data:` verwenden, ohne einen MIME-Typ anzugeben). Firefox Version 97 und neuer unterstützt `data`-URLs von bis zu 32MB (vor 97 lag das Limit bei fast 256MB). Chromium lehnt URLs über 512MB ab, und WebKit (Safari) URLs über 2048MB.
- Fehlende Fehlerbehandlung
  - : Ungültige Parameter im `media` oder Tippfehler bei der Angabe von `'base64'` werden ignoriert, es wird jedoch kein Fehler angezeigt.
- Keine Unterstützung für Abfragezeichenfolgen usw.
  - : Der Datenteil einer Data-URL ist undurchsichtig, daher führt der Versuch, eine Abfragezeichenfolge (seitenspezifische Parameter, mit der Syntax `<url>?parameter-data`) mit einer Data-URL zu verwenden, nur dazu, dass die Abfragezeichenfolge in die Daten aufgenommen wird, die die URL darstellt.
- Sicherheitsprobleme
  - : Eine Reihe von Sicherheitsproblemen (zum Beispiel Phishing) wurden mit Data-URLs in Verbindung gebracht, insbesondere mit der Navigation dorthin im obersten Tab des Browsers. Um solche Probleme zu mildern, wird die Navigation auf oberster Ebene zu `data:`-URLs in allen modernen Browsern blockiert. Weitere Informationen finden Sie in [diesem Blogbeitrag des Mozilla-Sicherheitsteams](https://blog.mozilla.org/security/2017/11/27/blocking-top-level-navigations-data-urls-firefox-59/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Glossary("Base64", "Base64")}}
- {{Glossary("Percent-encoding", "Prozentkodierung")}}
- [`atob()`](/de/docs/Web/API/WorkerGlobalScope/atob)
- [`btoa()`](/de/docs/Web/API/WorkerGlobalScope/btoa)
- CSS {{CSSXref("url_value", "&lt;url&gt;")}}
- {{Glossary("URI", "URI")}}
