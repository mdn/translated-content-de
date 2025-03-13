---
title: "data: URLs"
short-title: "data:"
slug: Web/URI/Reference/Schemes/data
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

**Data-URLs**, URLs mit dem Präfix `data:`, ermöglichen es Inhaltserstellern, kleine Dateien direkt in Dokumente einzubetten. Früher wurden sie als "Data URIs" bezeichnet, bis dieser Name von der WHATWG zurückgezogen wurde.

> [!NOTE]
> Data-URLs werden von modernen Browsern als einzigartige, opake Ursprünge behandelt, anstatt die Herkunft des Einstellungsobjekts zu erben, das für die Navigation verantwortlich ist.

## Syntax

Data-URLs bestehen aus vier Teilen: einem Präfix (`data:`), einem [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types), der den Datentyp angibt, einem optionalen `base64`-Token, wenn es sich um nicht-textuelle Daten handelt, und den Daten selbst:

```plain
data:[<media-type>][;base64],<data>
```

Der `media-type` ist ein [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types)-String, wie zum Beispiel `'image/jpeg'` für eine JPEG-Bilddatei. Wird dieser weggelassen, ist die Standardeinstellung `text/plain;charset=US-ASCII`.

Wenn die Daten [Zeichen enthalten, die in RFC 3986 als reservierte Zeichen definiert sind](https://datatracker.ietf.org/doc/html/rfc3986#section-2.2), oder Leerzeichen, neue Zeilen oder andere nicht druckbare Zeichen enthalten, müssen diese Zeichen {{Glossary("Percent-encoding", "prozentkodiert")}} werden.

Wenn die Daten textuell sind, können Sie den Text einbetten (unter Verwendung der entsprechenden Entitäten oder Escapes basierend auf dem Typ des umgebenden Dokuments). Andernfalls können Sie `base64` angeben, um base64-kodierte Binärdaten einzubetten. Weitere Informationen zu MIME-Typen finden Sie [hier](/de/docs/Web/HTTP/Guides/MIME_types) und [hier](/de/docs/Web/HTTP/Guides/MIME_types/Common_types).

Einige Beispiele:

- `data:,Hello%2C%20World%21`
  - : Die text/plain Daten `Hello, World!`. Beachten Sie, wie das Komma als `%2C` und das Leerzeichen als `%20` {{Glossary("Percent-encoding", "prozentkodiert")}} sind.
- `data:text/plain;base64,SGVsbG8sIFdvcmxkIQ==`
  - : base64-kodierte Version des obigen Beispiels
- `data:text/html,%3Ch1%3EHello%2C%20World%21%3C%2Fh1%3E`
  - : Ein HTML-Dokument mit `<h1>Hello, World!</h1>`
- `data:text/html,%3Cscript%3Ealert%28%27hi%27%29%3B%3C%2Fscript%3E`
  - : Ein HTML-Dokument mit `<script>alert('hi');</script>`, das einen JavaScript-Alert ausführt. Beachten Sie, dass das schließende Skript-Tag erforderlich ist.

## Daten in Base64-Format kodieren

Base64 ist eine Gruppe von Binär-zu-Text-Kodierungsschemata, die Binärdaten im {{Glossary("ASCII", "ASCII")}}-String-Format darstellen, indem sie in eine Radix-64-Darstellung übersetzt werden. Da sie nur aus Zeichen bestehen, die von der URL-Syntax ("URL-sicher") erlaubt sind, können wir Binärdaten sicher in Data-URLs kodieren. Base64 verwendet die Zeichen `+` und `/`, die in URLs spezielle Bedeutungen haben können. Da Data-URLs keine URL-Pfadsegmente oder Abfrageparameter haben, ist diese Kodierung in diesem Kontext sicher.

### Kodierung in JavaScript

Die Web-APIs haben native Methoden zum Kodieren oder Dekodieren in Base64: {{Glossary("Base64", "Base64")}}.

### Kodierung auf einem Unix-System

Die Base64-Kodierung einer Datei oder eines Strings auf Linux- und macOS-Systemen kann mit dem Kommandozeilenbefehl `base64` (oder alternativ dem `uuencode`-Dienstprogramm mit dem `-m`-Argument) erreicht werden.

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

Auf Windows kann [Convert.ToBase64String](https://learn.microsoft.com/en-us/dotnet/api/system.convert.tobase64string?view=net-5.0) aus PowerShell verwendet werden, um die Base64-Kodierung durchzuführen:

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

Dieser Abschnitt beschreibt Probleme, die häufig beim Erstellen und Verwenden von `data` URLs auftreten.

```html
data:text/html,lots of text…<p><a name%3D"bottom">bottom</a>?arg=val</p>
```

Dies stellt eine HTML-Ressource dar, deren Inhalt ist:

```html
lots of text…
<p><a name="bottom">bottom</a>?arg=val</p>
```

- Syntax
  - : Das Format für `data` URLs ist sehr einfach, aber es ist leicht, das Komma vor dem "Data"-Segment zu vergessen oder die Daten falsch in Base64 zu kodieren.
- Formatierung in HTML
  - : Eine `data` URL stellt eine Datei innerhalb einer Datei bereit, die relativ zur Breite des umgebenden Dokuments potenziell sehr breit sein kann. Als URL sollte `data` mit Leerzeichen (Zeilenumbruch, Tabulator oder Leerzeichen) formatiert werden können, aber es gibt praktische Probleme, die auftreten [bei der Verwendung von Base64-Kodierung](https://bugzil.la/73026#c12).
- Längenbeschränkungen
  - : Browser sind nicht verpflichtet, eine bestimmte maximale Länge von Daten zu unterstützen. Chromium und Firefox begrenzen `data` URLs auf 512MB, und Safari (WebKit) begrenzt sie auf 2048MB. Beachten Sie, dass Firefox 97 das Limit von 256KB auf 32MB erhöht hat, und [Firefox 136 es auf 512MB erhöht hat](/de/docs/Mozilla/Firefox/Releases/136).
- Mangel an Fehlerbehandlung
  - : Ungültige Parameter in Medien oder Tippfehler bei der Angabe von `'base64'` werden ignoriert, aber es wird kein Fehler bereitgestellt.
- Keine Unterstützung für Abfragezeichenfolgen usw.
  - : Der Datenanteil einer Data-URL ist opak, sodass ein Versuch, eine Abfragezeichenfolge (seitenbezogene Parameter, mit der Syntax `<url>?parameter-data`) mit einer Data-URL zu verwenden, die Abfragezeichenfolge einfach in die Daten einfügt, die die URL darstellt.
- Sicherheitsprobleme
  - : Eine Reihe von Sicherheitsproblemen (zum Beispiel Phishing) wurden mit Data-URLs in Verbindung gebracht, insbesondere beim Navigieren zu ihnen auf der obersten Ebene des Browsers. Um solche Probleme zu mildern, wird die Navigation auf oberster Ebene zu `data:` URLs in allen modernen Browsern blockiert. Weitere Details finden Sie in [diesem Blogbeitrag des Mozilla Security Teams](https://blog.mozilla.org/security/2017/11/27/blocking-top-level-navigations-data-urls-firefox-59/).

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
