---
title: Data-URLs
slug: Web/URI/Schemes/data
l10n:
  sourceCommit: 6b730e3cfdf0f51940b44efa71bd59c84ce76e71
---

{{QuickLinksWithSubpages("/de/docs/Web/URI")}}

**Data-URLs**, URLs, die mit dem `data:` Schema beginnen, ermöglichen es Inhaltsanbietern, kleine Dateien direkt in Dokumente einzubetten. Früher waren sie als "data URIs" bekannt, bis dieser Name von der WHATWG außer Dienst gestellt wurde.

> [!NOTE]
> Data-URLs werden von modernen Browsern als einzigartige, undurchsichtige Ursprünge behandelt, anstatt den Ursprung des Einstellungen-Objekts zu erben, das für die Navigation verantwortlich ist.

## Syntax

Data-URLs bestehen aus vier Teilen: einem Präfix (`data:`), einem [MIME-Typ](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types), der den Datentyp angibt, einem optionalen `base64` Token, wenn die Daten nicht textuell sind, und den Daten selbst:

```plain
data:[<mediatype>][;base64],<data>
```

Der `mediatype` ist ein [MIME-Typ](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types) String, wie z.B. `'image/jpeg'` für eine JPEG-Bilddatei. Wird er weggelassen, wird standardmäßig `text/plain;charset=US-ASCII` verwendet.

Wenn die Daten [Zeichen enthalten, die in RFC 3986 als reservierte Zeichen definiert sind](https://datatracker.ietf.org/doc/html/rfc3986#section-2.2) oder Leerzeichen, Zeilenumbrüche oder andere nicht druckbare Zeichen enthalten, müssen diese Zeichen [prozentkodiert](/de/docs/Glossary/Percent-encoding) werden.

Wenn die Daten textuell sind, können Sie den Text einbetten (unter Verwendung der entsprechenden Entitäten oder Escape-Sequenzen basierend auf dem Typ des umschließenden Dokuments). Andernfalls können Sie `base64` angeben, um base64-kodierte Binärdaten einzubetten. Weitere Informationen zu MIME-Typen finden Sie [hier](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types) und [hier](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types).

Einige Beispiele:

- `data:,Hello%2C%20World%21`
  - : Die text/plain Daten `Hello, World!`. Beachten Sie, wie das Komma [prozentkodiert](/de/docs/Glossary/Percent-encoding) als `%2C` und das Leerzeichen als `%20`.
- `data:text/plain;base64,SGVsbG8sIFdvcmxkIQ==`
  - : Base64-kodierte Version des obigen
- `data:text/html,%3Ch1%3EHello%2C%20World%21%3C%2Fh1%3E`
  - : Ein HTML-Dokument mit `<h1>Hello, World!</h1>`
- `data:text/html,%3Cscript%3Ealert%28%27hi%27%29%3B%3C%2Fscript%3E`
  - : Ein HTML-Dokument mit `<script>alert('hi');</script>`, das einen JavaScript-Alarm ausführt. Beachten Sie, dass das schließende Script-Tag erforderlich ist.

## Daten in Base64-Format kodieren

Base64 ist eine Gruppe von Binär-zu-Text-Kodierungsschemata, die Binärdaten in einem [ASCII](/de/docs/Glossary/ASCII) String-Format darstellen, indem sie in eine Radix-64-Darstellung übersetzt werden. Da sie nur Zeichen verwenden, die durch die URL-Syntax erlaubt sind ("URL-sicher"), können wir Binärdaten sicher in Data-URLs kodieren. Base64 verwendet die Zeichen `+` und `/`, die in URLs spezielle Bedeutungen haben können. Da Data-URLs keine URL-Pfadsegmente oder Abfrageparameter haben, ist diese Kodierung in diesem Kontext sicher.

### Kodierung in JavaScript

Die Web-APIs haben native Methoden, um in base64 zu kodieren oder zu dekodieren: [Base64](/de/docs/Glossary/Base64).

### Kodierung auf einem Unix-System

Base64-Kodierung einer Datei oder eines Strings auf Linux- und macOS-Systemen kann mittels des Kommandozeilenprogramms `base64` (oder alternativ des `uuencode` Dienstprogramms mit dem Argument `-m`) erreicht werden.

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

Dieser Abschnitt beschreibt Probleme, die häufig beim Erstellen und Verwenden von `data` URLs auftreten.

```html
data:text/html,lots of text…<p><a name%3D"bottom">bottom</a>?arg=val</p>
```

Dies stellt eine HTML-Ressource dar, deren Inhalt folgendermaßen aussieht:

```html
lots of text…
<p><a name="bottom">bottom</a>?arg=val</p>
```

- Syntax
  - : Das Format für `data` URLs ist sehr einfach, aber es ist leicht zu vergessen, ein Komma vor dem "Daten"-Segment zu setzen oder die Daten falsch in Base64-Format zu kodieren.
- Formatierung in HTML
  - : Eine `data` URL stellt eine Datei innerhalb einer Datei bereit, die potenziell relativ zur Breite des umgebenden Dokuments sehr breit sein kann. Als URL sollte die `data` mit Leerzeichen (Zeilenumbruch, Tab oder Leerzeichen) formatiert werden können, aber es gibt praktische Probleme, die auftreten [bei der Verwendung der Base64-Kodierung](https://bugzil.la/73026#c12).
- Längenbeschränkungen
  - : Browser sind nicht verpflichtet, eine bestimmte maximale Länge der Daten zu unterstützen. Zum Beispiel begrenzte der Opera 11-Browser URLs auf 65535 Zeichen Länge, was `data` URLs auf 65529 Zeichen begrenzt (65529 Zeichen ist die Länge der kodierten Daten, nicht der Quelle, wenn Sie das einfache `data:` verwenden, ohne einen MIME-Typ anzugeben). Firefox Version 97 und neuer unterstützt `data` URLs bis zu 32MB (vor 97 lag das Limit nahe bei 256MB). Chromium lehnt URLs über 512MB ab, und Webkit (Safari) URLs über 2048MB.
- Fehlende Fehlerbehandlung
  - : Ungültige Parameter in den Medien oder Tippfehler beim Angeben von `'base64'` werden ignoriert, es wird jedoch kein Fehler angezeigt.
- Keine Unterstützung für Abfragezeichenfolgen etc.
  - : Der Datenteil einer Data-URL ist undurchsichtig, daher wird ein Versuch, eine Abfragezeichenfolge (seitenbezogene Parameter, mit der Syntax `<url>?parameter-data`) mit einer Data-URL zu verwenden, die Abfragezeichenfolge einfach in den von der URL repräsentierten Daten einschließen.
- Sicherheitsprobleme
  - : Eine Reihe von Sicherheitsproblemen (zum Beispiel Phishing) wurde mit Data-URLs in Verbindung gebracht, insbesondere bei deren Navigation in der obersten Ebene des Browsers. Um solche Probleme abzumildern, wird die oberste Navigation zu `data:` URLs in allen modernen Browsern blockiert. Weitere Details finden Sie in [diesem Blogpost vom Mozilla-Sicherheitsteam](https://blog.mozilla.org/security/2017/11/27/blocking-top-level-navigations-data-urls-firefox-59/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{compat}}

## Siehe auch

- [Base64](/de/docs/Glossary/Base64)
- [Prozentkodierung](/de/docs/Glossary/Percent-encoding)
- [`atob()`](/de/docs/Web/API/WorkerGlobalScope/atob)
- [`btoa()`](/de/docs/Web/API/WorkerGlobalScope/btoa)
- CSS {{CSSXref("url", "url()")}}
- [URI](/de/docs/Glossary/URI)
