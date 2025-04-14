---
title: "data: URLs"
short-title: "data:"
slug: Web/URI/Reference/Schemes/data
l10n:
  sourceCommit: 874ad29df9150037acb8a4a3e7550a302c90a080
---

**Data-URLs**, URLs mit dem Präfix `data:`, ermöglichen es Inhaltserstellern, kleine Dateien direkt in Dokumente einzubetten. Sie waren früher als "Data-URIs" bekannt, bis dieser Name von der WHATWG obsolet wurde.

> [!NOTE]
> Daten-URLs werden von modernen Browsern als eindeutige undurchsichtige Ursprünge behandelt, anstatt den Ursprung des für die Navigation verantwortlichen Einstellungsobjekts zu erben.

## Syntax

Data-URLs bestehen aus vier Teilen: einem Präfix (`data:`), einem [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types), der den Datentyp angibt, einem optionalen `base64`-Token, wenn es sich um nicht-textuelle Daten handelt, und den Daten selbst:

```plain
data:[<media-type>][;base64],<data>
```

Der `media-type` ist ein [MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types), wie beispielsweise `'image/jpeg'` für eine JPEG-Bilddatei. Wird er weggelassen, ist der Standard `text/plain;charset=US-ASCII`.

Wenn die Daten [Zeichen enthalten, die in RFC 3986 als reservierte Zeichen definiert sind](https://datatracker.ietf.org/doc/html/rfc3986#section-2.2), oder Leerzeichen, Zeilenumbruchzeichen oder andere nicht druckbare Zeichen enthalten, müssen diese Zeichen {{Glossary("Percent-encoding", "prozentkodiert")}} werden.

Wenn die Daten textuell sind, können Sie den Text einbetten (unter Verwendung der entsprechenden Zeichen oder Escape-Sequenzen, basierend auf dem Typ des einbettenden Dokuments). Andernfalls können Sie `base64` angeben, um base64-kodierte Binärdaten einzubetten. Weitere Informationen zu MIME-Typen finden Sie [hier](/de/docs/Web/HTTP/Guides/MIME_types) und [hier](/de/docs/Web/HTTP/Guides/MIME_types/Common_types).

Einige Beispiele:

- `data:,Hello%2C%20World%21`
  - : Die Textdaten `Hello, World!`. Beachten Sie, wie das Komma als {{Glossary("Percent-encoding", "prozentkodiert")}} `%2C` und das Leerzeichen als `%20` kodiert wird.
- `data:text/plain;base64,SGVsbG8sIFdvcmxkIQ==`
  - : Base64-kodierte Version des oben genannten Textes.
- `data:text/html,%3Ch1%3EHello%2C%20World%21%3C%2Fh1%3E`
  - : Ein HTML-Dokument mit `<h1>Hello, World!</h1>`
- `data:text/html,%3Cscript%3Ealert%28%27hi%27%29%3B%3C%2Fscript%3E`
  - : Ein HTML-Dokument mit `<script>alert('hi');</script>`, das einen JavaScript-Alarm ausführt. Beachten Sie, dass das abschließende Script-Tag erforderlich ist.

## Kodierung von Daten im Base64-Format

Base64 ist eine Gruppe von Binär-zu-Text-Kodierungsschemata, die Binärdaten in ein {{Glossary("ASCII", "ASCII")}}-Stringformat durch Übersetzung in eine Radix-64-Darstellung umwandeln. Da es nur Zeichen enthält, die von der URL-Syntax ("URL-sicher") zugelassen werden, können wir Binärdaten sicher in Data-URLs kodieren. Base64 verwendet die Zeichen `+` und `/`, die möglicherweise spezielle Bedeutungen in URLs haben. Da Data-URLs keine URL-Pfadsegmente oder Abfrageparameter haben, ist diese Kodierung in diesem Kontext sicher.

### Kodierung in JavaScript

Die Web-APIs haben native Methoden zum Kodieren oder Dekodieren in base64: {{Glossary("Base64", "Base64")}}.

### Kodierung auf einem Unix-System

Die Base64-Kodierung einer Datei oder eines Strings auf Linux- und macOS-Systemen kann mit dem Kommandozeilenprogramm `base64` (oder alternativ mit dem Dienstprogramm `uuencode` mit dem Argument `-m`) erreicht werden.

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

Dieser Abschnitt beschreibt Probleme, die häufig bei der Erstellung und Verwendung von `data`-URLs auftreten.

```plain
data:text/html,lots of text…<p><a name%3D"bottom">bottom</a>?arg=val</p>
```

Dies stellt eine HTML-Ressource dar, deren Inhalt folgende ist:

```html
lots of text…
<p><a name="bottom">bottom</a>?arg=val</p>
```

- Syntax
  - : Das Format für `data`-URLs ist sehr einfach, aber es ist leicht, zu vergessen, vor dem "Daten"-Segment ein Komma zu setzen oder die Daten falsch im Base64-Format zu kodieren.
- Formatierung in HTML
  - : Eine `data`-URL bietet eine Datei innerhalb einer Datei, die im Verhältnis zur Breite des einbettenden Dokuments potenziell sehr breit sein kann. Als URL sollte der `data`-Inhalt mit Leerzeichen (Zeilenumbruch, Tabulator oder Leerzeichen) formatiert werden können, aber es gibt praktische Probleme, die [bei der Verwendung der Base64-Kodierung](https://bugzil.la/73026#c12) auftreten.
- Längenbeschränkungen
  - : Browser sind nicht verpflichtet, eine bestimmte maximale Datenlänge zu unterstützen.
    Chromium und Firefox begrenzen `data`-URLs auf 512 MB, und Safari (WebKit) beschränkt sie auf 2048 MB.
    Beachten Sie, dass Firefox 97 das Limit von 256 KB auf 32 MB erhöht hat und [Firefox 136 es auf 512 MB erhöht hat](/de/docs/Mozilla/Firefox/Releases/136).
- Fehlende Fehlerbehandlung
  - : Ungültige Parameter in Medientypen oder Tippfehler beim Angeben von `'base64'` werden ignoriert, aber es wird kein Fehler ausgegeben.
- Keine Unterstützung für Abfragezeichenfolgen usw.
  - : Der Datenbereich einer Data-URL ist undurchsichtig, sodass ein Versuch, eine Abfragezeichenfolge (seitenbezogene Parameter mit der Syntax `<url>?parameter-data`) mit einer Data-URL zu verwenden, die Abfragezeichenfolge einfach in die Daten einbindet, die die URL repräsentiert.
- Sicherheitsprobleme
  - : Eine Reihe von Sicherheitsproblemen (zum Beispiel Phishing) wurde mit Data-URLs in Verbindung gebracht, wenn sie im obersten Bereich des Browsers navigieren. Um solche Probleme zu mindern, ist die Navigation zu `data:`-URLs im obersten Bereich in allen modernen Browsern blockiert. Siehe [diesen Blog-Post vom Mozilla Security Team](https://blog.mozilla.org/security/2017/11/27/blocking-top-level-navigations-data-urls-firefox-59/) für weitere Details.

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
