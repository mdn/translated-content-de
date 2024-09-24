---
title: Data URLs
slug: Web/URI/Schemes/data
l10n:
  sourceCommit: f75b2c86ae4168e59416aed4c7121f222afc201d
---

{{QuickLinksWithSubpages("/de/docs/Web/URI")}}

**Data URLs**, URLs, die mit dem `data:`-Schema beginnen, ermöglichen es Inhaltsautoren, kleine Dateien direkt in Dokumente einzubetten. Früher waren sie als "Data URIs" bekannt, bis dieser Name von der WHATWG zurückgezogen wurde.

> [!NOTE]
> Data URLs werden von modernen Browsern als eindeutige opake Ursprünge behandelt, anstatt den Ursprung des für die Navigation verantwortlichen Einstellungsobjekts zu übernehmen.

## Syntax

Data URLs bestehen aus vier Teilen: einem Präfix (`data:`), einem [MIME-Typ](/de/docs/Web/HTTP/MIME_types), der den Datentyp angibt, einem optionalen `base64`-Token für nicht-textuelle Daten und den Daten selbst:

```plain
data:[<mediatype>][;base64],<data>
```

Der `mediatype` ist eine [MIME-Typ](/de/docs/Web/HTTP/MIME_types) Zeichenfolge, wie `'image/jpeg'` für eine JPEG-Datei. Wenn weggelassen, wird `text/plain;charset=US-ASCII` als Standard verwendet.

Enthalten die Daten [Zeichen, die in RFC 3986 als reservierte Zeichen definiert sind](https://datatracker.ietf.org/doc/html/rfc3986#section-2.2), oder enthalten sie Leerzeichen, Zeilenumbrüche oder andere nicht druckbare Zeichen, müssen diese {{Glossary("Percent-encoding", "prozentschutzkodiert")}} werden.

Wenn die Daten textuell sind, können Sie den Text einbetten (unter Verwendung der entsprechenden Entitäten oder Escape-Sequenzen, abhängig vom Typ des umgebenden Dokuments). Andernfalls können Sie `base64` angeben, um base64-kodierte Binärdaten einzubetten. Weitere Informationen zu MIME-Typen finden Sie [hier](/de/docs/Web/HTTP/MIME_types) und [hier](/de/docs/Web/HTTP/MIME_types/Common_types).

Einige Beispiele:

- `data:,Hello%2C%20World%21`
  - : Die text/plain Daten `Hello, World!`. Beachten Sie, wie das Komma als `%2C` und das Leerzeichen als `%20` {{Glossary("Percent-encoding", "prozentschutzkodiert")}} wird.
- `data:text/plain;base64,SGVsbG8sIFdvcmxkIQ==`
  - : Base64-kodierte Version des obigen.
- `data:text/html,%3Ch1%3EHello%2C%20World%21%3C%2Fh1%3E`
  - : Ein HTML-Dokument mit `<h1>Hello, World!</h1>`
- `data:text/html,%3Cscript%3Ealert%28%27hi%27%29%3B%3C%2Fscript%3E`
  - : Ein HTML-Dokument mit `<script>alert('hi');</script>`, das einen JavaScript-Alarm ausführt. Beachten Sie, dass der schließende Skript-Tag erforderlich ist.

## Daten in Base64-Format kodieren

Base64 ist eine Gruppe von Binär-zu-Text-Kodierungsschemata, die Binärdaten in ein {{Glossary("ASCII", "ASCII")}}-Zeichenfolgenformat umwandeln, indem sie in eine Radix-64-Darstellung übersetzt werden. Durch die Verwendung nur von Zeichen, die durch die URL-Syntax erlaubt sind ("URL-sicher"), können wir Binärdaten sicher in Data URLs kodieren. Base64 verwendet die Zeichen `+` und `/`, die in URLs spezielle Bedeutungen haben können. Da Data URLs keine URL-Pfadsegmente oder Abfrageparameter haben, ist diese Kodierung in diesem Kontext sicher.

### Kodierung in JavaScript

Die Web APIs haben native Methoden zum Kodieren oder Dekodieren in Base64: {{Glossary("Base64", "Base64")}}.

### Kodierung auf einem Unix-System

Die Base64-Kodierung einer Datei oder Zeichenfolge auf Linux- und macOS-Systemen kann über die Befehlszeilenoption `base64` (oder alternativ das `uuencode`-Dienstprogramm mit dem Argument `-m`) erreicht werden.

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
  - : Das Format für `data` URLs ist sehr einfach, aber es ist leicht zu vergessen, vor dem „Data“-Segment ein Komma zu setzen oder die Daten falsch ins Base64-Format zu kodieren.
- Formatierung in HTML
  - : Eine `data` URL stellt eine Datei innerhalb einer Datei bereit, die im Vergleich zur Breite des umgebenden Dokuments sehr breit sein kann. Als URL sollten die `data` mit Leerraum (Zeilenumbruch, Tabulator oder Leerzeichen) formatiert werden können, aber es gibt praktische Probleme, die auftreten [bei Verwendung der Base64-Kodierung](https://bugzil.la/73026#c12).
- Längenbegrenzungen
  - : Von Browsern wird nicht verlangt, eine bestimmte maximale Länge von Daten zu unterstützen. Zum Beispiel beschränkte der Opera 11-Browser URLs auf 65.535 Zeichen Länge, was `data` URLs auf 65.529 Zeichen begrenzt (65.529 Zeichen als Länge der kodierten Daten, nicht der Quelle, wenn Sie das einfache `data:` verwenden, ohne einen MIME-Typ anzugeben). Firefox in Version 97 und neuer unterstützt `data` URLs mit bis zu 32MB (vor Version 97 lag das Limit bei knapp 256MB). Chromium erlaubt keine URLs über 512MB und Webkit (Safari) keine URLs über 2048MB.
- Fehlende Fehlerbehandlung
  - : Ungültige Parameter in Medien oder Tippfehler beim Angeben von `'base64'` werden ignoriert, aber es wird kein Fehler angegeben.
- Keine Unterstützung für Abfragezeichenfolgen usw.
  - : Der Datenanteil einer Data URL ist opak, daher wird bei dem Versuch, eine Abfragezeichenfolge (seitenbezogene Parameter, mit der Syntax `<url>?parameter-data`) mit einer Data URL zu verwenden, die Abfragezeichenfolge einfach in die Daten aufgenommen, die die URL darstellt.
- Sicherheitsfragen
  - : Eine Reihe von Sicherheitsproblemen (zum Beispiel Phishing) wurden mit Data URLs in Verbindung gebracht, und das Navigieren zu ihnen auf der obersten Ebene des Browsers. Um solche Probleme zu mildern, wird die Top-Level-Navigation zu `data:` URLs in allen modernen Browsern blockiert. Weitere Details finden Sie in [diesem Blogbeitrag vom Mozilla Security Team](https://blog.mozilla.org/security/2017/11/27/blocking-top-level-navigations-data-urls-firefox-59/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{compat}}

## Siehe auch

- {{Glossary("Base64", "Base64")}}
- {{Glossary("Percent-encoding", "Prozentschutzkodierung")}}
- [`atob()`](/de/docs/Web/API/WorkerGlobalScope/atob)
- [`btoa()`](/de/docs/Web/API/WorkerGlobalScope/btoa)
- CSS {{CSSXref("url", "url()")}}
- {{Glossary("URI", "URI")}}
