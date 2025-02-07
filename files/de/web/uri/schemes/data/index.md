---
title: Daten-URLs
slug: Web/URI/Schemes/data
l10n:
  sourceCommit: 48fc59029d83dbc53748561d30be41f6a0ae62c1
---

{{QuickLinksWithSubpages("/de/docs/Web/URI")}}

**Daten-URLs**, URLs mit dem Präfix `data:`-Schema, ermöglichen es Inhaltsautoren, kleine Dateien direkt in Dokumente einzubetten. Sie wurden früher als "Daten-URIs" bekannt, bis dieser Name von der WHATWG verworfen wurde.

> [!NOTE]
> Daten-URLs werden von modernen Browsern als eindeutige, undurchsichtige Ursprünge behandelt, anstatt den Ursprung des für die Navigation verantwortlichen Einstellungsobjekts zu übernehmen.

## Syntax

Daten-URLs bestehen aus vier Teilen: einem Präfix (`data:`), einem [MIME-Typ](/de/docs/Web/HTTP/MIME_types), der den Datentyp angibt, einem optionalen `base64`-Token, falls die Daten nicht textuell sind, und den eigentlichen Daten:

```plain
data:[<media-type>][;base64],<data>
```

Der `media-type` ist eine [MIME-Typ](/de/docs/Web/HTTP/MIME_types)-Zeichenkette, wie z. B. `'image/jpeg'` für eine JPEG-Bilddatei. Wenn er weggelassen wird, ist `text/plain;charset=US-ASCII` der Standardwert.

Wenn die Daten [Zeichen enthalten, die in RFC 3986 als reservierte Zeichen definiert sind](https://datatracker.ietf.org/doc/html/rfc3986#section-2.2), oder Leerzeichen, Zeilenumbrüche oder andere nicht druckbare Zeichen enthalten, müssen diese Zeichen {{Glossary("Percent-encoding", "prozentkodiert")}} werden.

Wenn die Daten textuell sind, können Sie den Text einbetten (mit den entsprechenden Entity-Referenzen oder Escapes basierend auf dem Typ des umschließenden Dokuments). Andernfalls können Sie `base64` angeben, um Base64-kodierte Binärdaten einzubetten. Weitere Informationen zu MIME-Typen finden Sie [hier](/de/docs/Web/HTTP/MIME_types) und [hier](/de/docs/Web/HTTP/MIME_types/Common_types).

Einige Beispiele:

- `data:,Hello%2C%20World%21`
  - : Die text/plain-Daten `Hello, World!`. Beachten Sie, wie das Komma als `%2C` {{Glossary("Percent-encoding", "prozentkodiert")}} ist und das Leerzeichen als `%20`.
- `data:text/plain;base64,SGVsbG8sIFdvcmxkIQ==`
  - : Base64-kodierte Version des obigen Beispiels.
- `data:text/html,%3Ch1%3EHello%2C%20World%21%3C%2Fh1%3E`
  - : Ein HTML-Dokument mit `<h1>Hello, World!</h1>`.
- `data:text/html,%3Cscript%3Ealert%28%27hi%27%29%3B%3C%2Fscript%3E`
  - : Ein HTML-Dokument mit `<script>alert('hi');</script>`, das eine JavaScript-Benachrichtigung ausführt. Beachten Sie, dass das schließende Skripttag erforderlich ist.

## Daten in Base64-Format kodieren

Base64 ist eine Gruppe von Binär-zu-Text-Kodierungsschemata, die Binärdaten in einem {{Glossary("ASCII", "ASCII")}}-Zeichenformat darstellen, indem sie in eine Radix-64-Darstellung übersetzt werden. Da nur Zeichen verwendet werden, die von der URL-Syntax erlaubt sind ("URL-sicher"), können wir Binärdaten sicher in Daten-URLs kodieren. Base64 nutzt die Zeichen `+` und `/`, die in URLs spezielle Bedeutungen haben können. Da Daten-URLs jedoch keine URL-Pfadsegmente oder Abfrageparameter haben, ist diese Kodierung in diesem Kontext sicher.

### Kodierung in JavaScript

Die Web-APIs haben native Methoden, um nach Base64 zu kodieren oder davon zu dekodieren: {{Glossary("Base64", "Base64")}}.

### Kodierung auf einem Unix-System

Die Base64-Kodierung einer Datei oder eines Strings auf Linux- und macOS-Systemen kann mit dem Kommandozeilenprogramm `base64` (oder alternativ mit dem `uuencode` Dienstprogramm mit dem Argument `-m`) erreicht werden.

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

Unter Windows kann [Convert.ToBase64String](https://learn.microsoft.com/en-us/dotnet/api/system.convert.tobase64string?view=net-5.0) in PowerShell verwendet werden, um die Base64-Kodierung durchzuführen:

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
  - : Das Format für `data` URLs ist sehr einfach, aber es ist leicht, zu vergessen, ein Komma vor dem "data"-Segment zu setzen oder die Daten falsch in das Base64-Format zu kodieren.
- Formatierung in HTML
  - : Eine `data` URL liefert eine Datei innerhalb einer Datei, die potenziell sehr breit im Verhältnis zur Breite des umgebenden Dokuments sein kann. Als URL sollte die `data` mit Leerzeichen (Zeilenumbruch, Tabulator oder Leerzeichen) formatiert werden können, aber es gibt praktische Probleme, die [bei der Verwendung der Base64-Kodierung](https://bugzil.la/73026#c12) auftreten.
- Längenbeschränkungen
  - : Browser sind nicht verpflichtet, eine maximale Länge von Daten zu unterstützen. Chromium und Firefox begrenzen `data` URLs auf 512 MB, und Safari (WebKit) begrenzt sie auf 2048 MB. Beachten Sie, dass Firefox 97 die Grenze von 256 KB auf 32 MB erhöht hat und [Firefox 136 sie auf 512 MB erhöht hat](/de/docs/Mozilla/Firefox/Releases/136).
- Fehlende Fehlerbehandlung
  - : Ungültige Parameter im `media` oder Tippfehler bei der Spezifizierung von `'base64'` werden ignoriert, ohne dass ein Fehler angezeigt wird.
- Keine Unterstützung für Abfragezeichenketten usw.
  - : Der Datenabschnitt einer Daten-URL ist undurchsichtig, sodass ein Versuch, eine Abfragezeichenkette (seitenspezifische Parameter mit der Syntax `<url>?parameter-data`) mit einer Daten-URL zu verwenden, die Abfragezeichenkette nur in die Daten einbindet, die die URL repräsentiert.
- Sicherheitsprobleme
  - : Eine Reihe von Sicherheitsproblemen (z. B. Phishing) wurde mit Daten-URLs und ihrer Navigation auf oberster Ebene im Browser in Verbindung gebracht. Um solche Probleme zu minimieren, ist die Navigation auf oberster Ebene zu `data:` URLs in allen modernen Browsern blockiert. Weitere Details finden Sie in [diesem Blogbeitrag des Mozilla Security Teams](https://blog.mozilla.org/security/2017/11/27/blocking-top-level-navigations-data-urls-firefox-59/).

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
