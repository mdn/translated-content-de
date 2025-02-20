---
title: "data: URLs"
short-title: "data:"
slug: Web/URI/Reference/Schemes/data
l10n:
  sourceCommit: 4d9320f9857fb80fef5f3fe78e3d09b06eb0ebbd
---

**Data-URLs**, URLs mit dem Präfix `data:`, ermöglichen Inhaltserstellern, kleine Dateien direkt in Dokumente einzubetten. Sie wurden früher als "Data-URIs" bezeichnet, bis dieser Name von der WHATWG abgeschafft wurde.

> [!NOTE]
> Data-URLs werden von modernen Browsern als eindeutige und opake Ursprünge behandelt, anstatt den Ursprung des Konfigurationsobjekts zu erben, das für die Navigation verantwortlich ist.

## Syntax

Data-URLs bestehen aus vier Teilen: einem Präfix (`data:`), einem [MIME-Typ](/de/docs/Web/HTTP/MIME_types), der den Datentyp angibt, einem optionalen `base64`-Token für nicht-textuelle Daten und den Daten selbst:

```plain
data:[<media-type>][;base64],<data>
```

Der `media-type` ist eine [MIME-Typ](/de/docs/Web/HTTP/MIME_types)-Zeichenkette, beispielsweise `'image/jpeg'` für eine JPEG-Bilddatei. Wenn weggelassen, wird standardmäßig `text/plain;charset=US-ASCII` verwendet.

Falls die Daten [Zeichen enthalten, die in RFC 3986 als reserviert definiert sind](https://datatracker.ietf.org/doc/html/rfc3986#section-2.2), oder Leerzeichen, Zeilenumbrüche oder andere nicht druckbare Zeichen enthalten, müssen diese Zeichen {{Glossary("Percent-encoding", "prozentkodiert")}} werden.

Wenn die Daten textuell sind, können Sie den Text einbetten (unter Verwendung geeigneter Entitäten oder Escape-Sequenzen abhängig vom Typ des umschließenden Dokuments). Andernfalls können Sie `base64` angeben, um base64-kodierte Binärdaten einzubetten. Weitere Informationen zu MIME-Typen finden Sie [hier](/de/docs/Web/HTTP/MIME_types) und [hier](/de/docs/Web/HTTP/MIME_types/Common_types).

Einige Beispiele:

- `data:,Hello%2C%20World%21`
  - : Der Text „Hello, World!“ im Format `text/plain`. Beachten Sie, wie das Komma {{Glossary("Percent-encoding", "prozentkodiert")}} als `%2C` und das Leerzeichen als `%20` dargestellt wird.
- `data:text/plain;base64,SGVsbG8sIFdvcmxkIQ==`
  - : Die base64-kodierte Version des obigen Beispiels.
- `data:text/html,%3Ch1%3EHello%2C%20World%21%3C%2Fh1%3E`
  - : Ein HTML-Dokument mit `<h1>Hello, World!</h1>`.
- `data:text/html,%3Cscript%3Ealert%28%27hi%27%29%3B%3C%2Fscript%3E`
  - : Ein HTML-Dokument mit `<script>alert('hi');</script>`, das eine JavaScript-Alert-Box auslöst. Beachten Sie, dass das schließende `script`-Tag erforderlich ist.

## Daten im Base64-Format kodieren

Base64 ist eine Gruppe von Binär-zu-Text-Codierungsschemata, die Binärdaten im {{Glossary("ASCII", "ASCII")}}-Zeichenformat darstellen, indem sie diese in eine Radix-64-Repräsentation übersetzen. Da nur Zeichen verwendet werden, die durch die URL-Syntax erlaubt sind ("URL-sicher"), können Binärdaten sicher in Data-URLs kodiert werden. Base64 verwendet die Zeichen `+` und `/`, die möglicherweise in URLs spezielle Bedeutungen haben. Da Data-URLs keine URL-Pfadsegmente oder Abfrageparameter besitzen, ist diese Kodierung in diesem Kontext sicher.

### Kodierung in JavaScript

Die Web-APIs haben native Methoden, um Daten in Base64 zu kodieren oder zu dekodieren: {{Glossary("Base64", "Base64")}}.

### Kodierung auf einem Unix-System

Base64-Kodierung einer Datei oder Zeichenkette auf Linux- und macOS-Systemen kann mit dem Kommandozeilen-Tool `base64` (oder alternativ mit dem `uuencode`-Werkzeug mit dem Argument `-m`) erreicht werden.

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

Unter Windows kann [Convert.ToBase64String](https://learn.microsoft.com/en-us/dotnet/api/system.convert.tobase64string?view=net-5.0) in PowerShell verwendet werden, um eine Base64-Kodierung durchzuführen:

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

Diese HTML-Ressource hat folgenden Inhalt:

```html
lots of text…
<p><a name="bottom">bottom</a>?arg=val</p>
```

- Syntax
  - : Das Format von `data`-URLs ist sehr einfach, aber es ist leicht, das Komma vor dem "Daten"-Segment zu vergessen oder die Daten falsch im Base64-Format zu kodieren.
- Formatierung in HTML
  - : Eine `data`-URL bietet eine Datei innerhalb einer Datei, die potenziell breiter sein kann als das umschließende Dokument. Als URL sollte die `data`-URL mit Leerzeichen (Zeilenumbruch, Tabulator oder Leerzeichen) formatiert werden können, aber es gibt praktische Probleme [bei der Nutzung von Base64-Kodierungen](https://bugzil.la/73026#c12).
- Längenbeschränkungen
  - : Browser sind nicht verpflichtet, eine bestimmte maximale Länge von Daten zu unterstützen.
    Chromium und Firefox begrenzen `data`-URLs auf 512 MB, und Safari (WebKit) begrenzt sie auf 2048 MB.
    Beachten Sie, dass Firefox 97 das Limit von 256 KB auf 32 MB erhöht hat und [Firefox 136 es auf 512 MB erhöht hat](/de/docs/Mozilla/Firefox/Releases/136).
- Keine Fehlerbehandlung
  - : Ungültige Parameter in Medien oder Tippfehler bei der Angabe von `'base64'` werden ignoriert, aber es wird kein Fehler angezeigt.
- Keine Unterstützung für Abfragezeichenfolgen usw.
  - : Der Datenteil einer Data-URL ist opak, sodass der Versuch, eine Abfragezeichenfolge (seiten-spezifische Parameter mit der Syntax `<url>?parameter-data`) zu verwenden, nur dazu führt, dass die Abfragezeichenfolge in die Daten der URL aufgenommen wird.
- Sicherheitsprobleme
  - : Zahlreiche Sicherheitsprobleme (z. B. Phishing) sind mit Data-URLs verbunden, insbesondere bei der Navigation zu ihnen in der obersten Ebene des Browsers. Um solche Probleme zu minimieren, ist die oberste Navigation zu `data:`-URLs in allen modernen Browsern blockiert. Weitere Informationen finden Sie in [diesem Blogbeitrag vom Mozilla-Sicherheitsteam](https://blog.mozilla.org/security/2017/11/27/blocking-top-level-navigations-data-urls-firefox-59/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Glossary("Base64", "Base64")}}
- {{Glossary("Percent-encoding", "Percent-encoding")}}
- [`atob()`](/de/docs/Web/API/WorkerGlobalScope/atob)
- [`btoa()`](/de/docs/Web/API/WorkerGlobalScope/btoa)
- CSS {{CSSXref("url_value", "&lt;url&gt;")}}
- {{Glossary("URI", "URI")}}
