---
title: "data: URLs"
short-title: "data:"
slug: Web/URI/Reference/Schemes/data
l10n:
  sourceCommit: e488eba036b2fee56444fd579c3759ef45ff2ca8
---

**Data-URLs**, URLs mit dem Präfix `data:`, ermöglichen es Inhaltserstellern, kleine Dateien direkt in Dokumente einzubetten. Sie waren früher als "data URIs" bekannt, bis dieser Name von der WHATWG zurückgezogen wurde.

> [!NOTE]
> Data-URLs werden von modernen Browsern als einzigartige undurchsichtige Ursprünge behandelt, anstatt den Ursprung des für die Navigation verantwortlichen Einstellungsobjekts zu erben.

## Syntax

Data-URLs bestehen aus vier Teilen: einem Präfix (`data:`), einem [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types), der den Datentyp angibt, einem optionalen `base64` Token, falls nicht textuell, und den Daten selbst:

```plain
data:[<media-type>][;base64],<data>
```

Der `media-type` ist ein [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types) String, wie zum Beispiel `'image/jpeg'` für eine JPEG-Bilddatei. Wenn er weggelassen wird, ist die Standardeinstellung `text/plain;charset=US-ASCII`.

Falls die Daten [Zeichen enthalten, die in RFC 3986 als reservierte Zeichen definiert sind](https://datatracker.ietf.org/doc/html/rfc3986#section-2.2) oder Leerzeichen, Zeilenumbrüche oder andere nicht druckbare Zeichen enthalten, müssen diese Zeichen {{Glossary("Percent-encoding", "prozent-codiert")}} werden.

Wenn die Daten textuell sind, können Sie den Text einbetten (unter Verwendung der geeigneten Entitäten oder Escape-Sequenzen je nach Dokumententyp). Andernfalls können Sie `base64` angeben, um base64-codierte Binärdaten einzubetten. Eine vollständige Aufschlüsselung der MIME-Typ-Struktur und eine Tabelle mit gängigen MIME-Typen im Web finden Sie [hier](/de/docs/Web/HTTP/Guides/MIME_types).

Einige Beispiele:

- `data:,Hello%2C%20World%21`
  - : Die text/plain Daten `Hello, World!`. Beachten Sie, wie das Komma {{Glossary("Percent-encoding", "prozent-codiert")}} als `%2C` und das Leerzeichen als `%20` dargestellt wird.
- `data:text/plain;base64,SGVsbG8sIFdvcmxkIQ==`
  - : Base64-codierte Version des oben genannten
- `data:text/html,%3Ch1%3EHello%2C%20World%21%3C%2Fh1%3E`
  - : Ein HTML-Dokument mit `<h1>Hello, World!</h1>`
- `data:text/html,%3Cscript%3Ealert%28%27hi%27%29%3B%3C%2Fscript%3E`
  - : Ein HTML-Dokument mit `<script>alert('hi');</script>`, das einen JavaScript-Alert ausführt. Beachten Sie, dass das schließende Skript-Tag erforderlich ist.

## Kodierung von Daten in Base64-Format

Base64 ist eine Gruppe von Binär-zu-Text-Kodierungsschemata, die Binärdaten in einem {{Glossary("ASCII", "ASCII")}}-String-Format darstellen, indem sie in eine Radix-64-Repräsentation übersetzt werden. Da sie nur aus Zeichen besteht, die von der URL-Syntax zugelassen sind ("URL-sicher"), können wir Binärdaten sicher in Data-URLs kodieren. Base64 verwendet die Zeichen `+` und `/`, die in URLs spezielle Bedeutungen haben können. Da Data-URLs keine URL-Pfadsegmente oder Abfrageparameter haben, ist diese Kodierung in diesem Kontext sicher.

### Kodierung in JavaScript

Die Web-APIs haben native Methoden zum Kodieren oder Dekodieren in Base64: {{Glossary("Base64", "Base64")}}.

### Kodierung auf einem Unix-System

Base64-Kodierung einer Datei oder eines Strings auf Linux- und macOS-Systemen kann mit dem Kommandozeilen-Tool `base64` (oder alternativ mit dem `uuencode` Dienstprogramm mit dem `-m` Argument) erreicht werden.

```bash
echo -n hello|base64
# outputs to console: aGVsbG8=

echo -n hello>a.txt
base64 a.txt
# outputs to console: aGVsbG8=

base64 a.txt>b.txt
# outputs to file b.txt: aGVsbG8=
```

### Kodierung unter Microsoft Windows

Unter Windows kann [Convert.ToBase64String](https://learn.microsoft.com/en-us/dotnet/api/system.convert.tobase64string?view=net-5.0) von PowerShell verwendet werden, um die Base64-Kodierung durchzuführen:

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
  - : Das Format für `data` URLs ist sehr einfach, aber es ist leicht, das Komma vor dem "data"-Segment zu vergessen oder die Daten falsch im Base64-Format zu kodieren.
- Formatierung in HTML
  - : Eine `data` URL bietet eine Datei innerhalb einer Datei, die potenziell sehr breit im Verhältnis zur Breite des umgebenden Dokuments sein kann. Als URL sollte die `data` mit Leerzeichen (Zeilenumbruch, Tabulator oder Leerzeichen) formatierbar sein, es gibt jedoch praktische Probleme, [wenn man Base64-Kodierung verwendet](https://bugzil.la/73026#c12).
- Längenbeschränkungen
  - : Browser sind nicht verpflichtet, eine bestimmte maximale Länge von Daten zu unterstützen.
    Chromium und Firefox beschränken `data` URLs auf 512MB, und Safari (WebKit) beschränkt sie auf 2048MB.
    Beachten Sie, dass Firefox 97 das Limit von 256KB auf 32MB erhöht hat und [Firefox 136 es auf 512MB erhöht hat](/de/docs/Mozilla/Firefox/Releases/136).
- Fehlende Fehlerbehandlung
  - : Ungültige Parameter in den Medien oder Tippfehler bei der Angabe von `'base64'` werden ignoriert, aber es wird kein Fehler angezeigt.
- Keine Unterstützung für Abfragezeichenfolgen usw.
  - : Der Datenanteil einer Data-URL ist undurchsichtig, sodass ein Versuch, eine Abfragezeichenfolge (seitenbezogene Parameter, mit der Syntax `<url>?parameter-data`) mit einer Data-URL zu verwenden, die Abfragezeichenfolge lediglich in die Daten einfügt, die die URL darstellt.
- Sicherheitsprobleme
  - : Eine Reihe von Sicherheitsproblemen (zum Beispiel Phishing) sind mit Data-URLs verbunden, und der Navigation zu ihnen auf oberster Ebene im Browser. Um solche Probleme zu mindern, wird die Navigation auf oberster Ebene zu `data:` URLs in allen modernen Browsern blockiert. Details dazu finden Sie in [diesem Blog-Beitrag des Mozilla Security Teams](https://blog.mozilla.org/security/2017/11/27/blocking-top-level-navigations-data-urls-firefox-59/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Weitere Informationen

- {{Glossary("Base64", "Base64")}}
- {{Glossary("Percent-encoding", "Percent-encoding")}}
- [`atob()`](/de/docs/Web/API/WorkerGlobalScope/atob)
- [`btoa()`](/de/docs/Web/API/WorkerGlobalScope/btoa)
- CSS {{CSSXref("url_value", "&lt;url&gt;")}}
- {{Glossary("URI", "URI")}}
