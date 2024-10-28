---
title: Data-URLs
slug: Web/URI/Schemes/data
l10n:
  sourceCommit: bea339d321513fc6d66d95c8f0305b9387fa57bb
---

{{QuickLinksWithSubpages("/de/docs/Web/URI")}}

**Data-URLs**, URLs mit dem Präfix `data:`, ermöglichen es Inhaltsautoren, kleine Dateien direkt in Dokumente einzubetten. Sie wurden früher als "Data URIs" bezeichnet, bis dieser Name von der WHATWG zurückgezogen wurde.

> [!NOTE]
> In modernen Browsern werden Data-URLs als einzigartige, undurchsichtige Ursprünge behandelt, anstatt den Ursprung des für die Navigation verantwortlichen Einstellungsobjekts zu erben.

## Syntax

Data-URLs bestehen aus vier Teilen: einem Präfix (`data:`), einem [MIME-Typ](/de/docs/Web/HTTP/MIME_types), der den Datentyp angibt, einem optionalen `base64`-Token, wenn die Daten nicht textuell sind, und den Daten selbst:

```plain
data:[<media-type>][;base64],<data>
```

Der `media-type` ist ein [MIME-Typ](/de/docs/Web/HTTP/MIME_types)-String, wie `'image/jpeg'` für eine JPEG-Bilddatei. Bei Weglassen wird `text/plain;charset=US-ASCII` als Standard verwendet.

Wenn die Daten [Zeichen enthalten, die in RFC 3986 als reservierte Zeichen definiert sind](https://datatracker.ietf.org/doc/html/rfc3986#section-2.2), oder Leerzeichen, Zeilenumbrüche oder andere nicht druckbare Zeichen enthalten, müssen diese Zeichen {{Glossary("Percent-encoding", "prozentcodiert")}} werden.

Wenn die Daten textuell sind, können Sie den Text einbetten (unter Verwendung der entsprechenden Entitäten oder Escape-Sequenzen basierend auf dem Typ des umschließenden Dokuments). Andernfalls können Sie `base64` angeben, um base64-codierte Binärdaten einzubetten. Sie finden weitere Informationen zu MIME-Typen [hier](/de/docs/Web/HTTP/MIME_types) und [hier](/de/docs/Web/HTTP/MIME_types/Common_types).

Einige Beispiele:

- `data:,Hello%2C%20World%21`
  - : Die text/plain-Daten `Hello, World!`. Beachten Sie, wie das Komma als `%2C` und das Leerzeichen als `%20` {{Glossary("Percent-encoding", "prozentcodiert")}} sind.
- `data:text/plain;base64,SGVsbG8sIFdvcmxkIQ==`
  - : Base64-codierte Version des obigen
- `data:text/html,%3Ch1%3EHello%2C%20World%21%3C%2Fh1%3E`
  - : Ein HTML-Dokument mit `<h1>Hello, World!</h1>`
- `data:text/html,%3Cscript%3Ealert%28%27hi%27%29%3B%3C%2Fscript%3E`
  - : Ein HTML-Dokument mit `<script>alert('hi');</script>`, das einen JavaScript-Alert ausführt. Beachten Sie, dass der schließende Script-Tag erforderlich ist.

## Kodierung von Daten im Base64-Format

Base64 ist eine Gruppe von Binär-zu-Text-Kodierungsschemata, die Binärdaten in einem {{Glossary("ASCII", "ASCII")}}-String-Format darstellen, indem sie in eine Radix-64-Darstellung übersetzt werden. Da nur Zeichen verwendet werden, die durch die URL-Syntax erlaubt sind ("URL-sicher"), können wir Binärdaten sicher in Data-URLs kodieren. Base64 verwendet die Zeichen `+` und `/`, die in URLs spezielle Bedeutungen haben können. Da Data-URLs keine URL-Pfadsegmente oder Abfrageparameter haben, ist diese Kodierung in diesem Kontext sicher.

### Kodierung in JavaScript

Die Web-APIs verfügen über native Methoden zum Kodieren oder Dekodieren in base64: {{Glossary("Base64", "Base64")}}.

### Kodierung auf einem Unix-System

Die Base64-Kodierung einer Datei oder eines Strings auf Linux- und macOS-Systemen kann mit dem Kommandozeilenbefehl `base64` (oder alternativ dem `uuencode`-Utility mit dem Argument `-m`) erreicht werden.

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

Alternativ bietet eine GNU/Linux-Shell (wie [WSL](https://en.wikipedia.org/wiki/Windows_Subsystem_for_Linux)) das Utility `base64`:

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
  - : Das Format für `data`-URLs ist sehr einfach, aber es ist leicht, das Komma vor dem "data"-Segment zu vergessen oder die Daten falsch in base64-Format zu kodieren.
- Formatierung in HTML
  - : Eine `data`-URL liefert eine Datei in einer Datei, die potenziell sehr breit im Verhältnis zur Breite des umschließenden Dokuments sein kann. Als URL sollte der `data`-Teil mit Leerzeichen (Zeilenumbruch, Tab oder Leerzeichen) formatiert werden können, aber es gibt praktische Probleme, die [bei der Verwendung der base64-Kodierung](https://bugzil.la/73026#c12) auftreten können.
- Längenbeschränkungen
  - : Browser sind nicht verpflichtet, eine bestimmte maximale Länge von Daten zu unterstützen. Zum Beispiel beschränkte der Opera 11-Browser URLs auf maximal 65535 Zeichen, was `data`-URLs auf 65529 Zeichen (65529 Zeichen als Länge der kodierten Daten, nicht der Quelle, wenn Sie das einfache `data:` verwenden, ohne einen MIME-Typ anzugeben) beschränkt. Firefox Version 97 und neuer unterstützt `data`-URLs von bis zu 32MB (vor 97 war das Limit nahe 256MB). Chromium beschränkt URLs auf über 512MB, und Webkit (Safari) auf URLs über 2048MB.
- Fehlende Fehlerbehandlung
  - : Ungültige Parameter in Medien oder Tippfehler beim Angeben von `'base64'` werden ignoriert, aber es wird kein Fehler bereitgestellt.
- Keine Unterstützung für Abfragezeichenfolgen, etc.
  - : Der Datenbereich einer Data-URL ist undurchsichtig, daher wird der Versuch, eine Abfragezeichenfolge (seitenbezogene Parameter mit der Syntax `<url>?parameter-data`) mit einer Data-URL zu verwenden, die Abfragezeichenfolge einfach in die Daten, die die URL darstellt, aufnehmen.
- Sicherheitsprobleme
  - : Eine Reihe von Sicherheitsproblemen (z. B. Phishing) sind mit Data-URLs und der Navigation zu ihnen im oberen Level des Browsers verbunden. Um solche Probleme zu mindern, wird die Top-Level-Navigation zu `data:`-URLs in allen modernen Browsern blockiert. Weitere Details finden Sie in [diesem Blogbeitrag des Mozilla-Sicherheitsteams](https://blog.mozilla.org/security/2017/11/27/blocking-top-level-navigations-data-urls-firefox-59/).

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
