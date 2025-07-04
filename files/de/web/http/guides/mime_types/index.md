---
title: Medientypen (MIME-Typen)
short-title: Media types
slug: Web/HTTP/Guides/MIME_types
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Ein **Medientyp** (früher bekannt als **Multipurpose Internet Mail Extensions oder MIME-Typ**) gibt die Art und das Format eines Dokuments, einer Datei oder einer Anordnung von Bytes an. MIME-Typen werden im IETF's {{RFC(6838)}} definiert und standardisiert.

Die [Internet Assigned Numbers Authority (IANA)](https://www.iana.org/) ist für alle offiziellen MIME-Typen verantwortlich. Die aktuellste und vollständigste Liste finden Sie auf ihrer [Media Types](https://www.iana.org/assignments/media-types/media-types.xhtml) Seite.

> [!WARNING]
> Browser verwenden den MIME-Typ, _nicht die Dateierweiterung_, um zu bestimmen, wie eine URL verarbeitet werden soll.
> Daher ist es wichtig, dass Webserver den korrekten MIME-Typ im {{HTTPHeader("Content-Type")}}-Header der Antwort senden.
> Wenn dies nicht korrekt konfiguriert ist, besteht die Gefahr, dass Browser den Inhalt von Dateien falsch interpretieren, Sites nicht korrekt funktionieren und heruntergeladene Dateien möglicherweise falsch behandelt werden.

## Struktur eines MIME-Typs

Ein MIME-Typ besteht in der Regel aus zwei Teilen: einem _Typ_ und einem _Subtyp_, getrennt durch einen Schrägstrich (`/`) — ohne Leerzeichen dazwischen:

```plain
type/subtype
```

Der **_Typ_** repräsentiert die allgemeine Kategorie, in die der Datentyp fällt, wie `video` oder `text`.

Der **_Subtyp_** identifiziert die genaue Art der Daten des angegebenen Typs, die der MIME-Typ repräsentiert.
Zum Beispiel kann der Subtyp für den MIME-Typ `text` `plain` (Klartext), `html` ({{Glossary("HTML", "HTML")}} Quellcode) oder `calendar` (für iCalendar/`.ics`) Dateien sein.

Jeder Typ hat seine eigene Reihe möglicher Subtypen. Ein MIME-Typ hat immer sowohl einen Typ als auch einen Subtyp, niemals nur einen von beiden.

Ein optionaler **Parameter** kann hinzugefügt werden, um zusätzliche Details bereitzustellen:

```plain
type/subtype;parameter=value
```

Zum Beispiel kann für jeden MIME-Typ mit dem Haupttyp `text` der optionale `charset`-Parameter hinzugefügt werden, um den Zeichensatz der im Datensatz verwendeten Zeichen zu spezifizieren.
Wenn kein `charset` festgelegt ist, wird standardmäßig {{Glossary("ASCII", "ASCII")}} (`US-ASCII`) verwendet, es sei denn, dies wird durch die Einstellungen des {{Glossary("user_agent", "user agent")}} überschrieben.
Um eine UTF-8-Textdatei zu spezifizieren, wird der MIME-Typ `text/plain;charset=UTF-8` verwendet.

MIME-Typen sind nicht zwischen Groß- und Kleinschreibung empfindlich, werden jedoch traditionell in Kleinbuchstaben geschrieben. Die Parameterwerte können jedoch zwischen Groß- und Kleinschreibung unterscheiden.

### Typen

Es gibt zwei Klassen von Typen: **diskret** und **multipart**.
Diskrete Typen sind Typen, die eine einzige Datei oder ein Medium darstellen, wie z.B. eine einzelne Text- oder Musikdatei oder ein einzelnes Video.
Ein Multipart-Typ repräsentiert ein Dokument, das aus mehreren Komponenten besteht, von denen jede ihren eigenen individuellen MIME-Typ haben kann; oder ein Multipart-Typ kann mehrere Dateien umfassen, die in einer Transaktion zusammen gesendet werden.
Zum Beispiel werden multipart-MIME-Typen verwendet, wenn mehrere Dateien an eine E-Mail angehängt werden.

#### Diskrete Typen

Die derzeit bei der IANA registrierten diskreten Typen sind:

- `application`
  - : Irgendeine Art von Binärdaten, die nicht ausdrücklich in eine der anderen Kategorien fallen;
    entweder Daten, die in irgendeiner Weise ausgeführt oder interpretiert werden oder Binärdaten, die ein spezielles Programm oder eine Kategorie von Programmen benötigen.
    Generische Binärdaten (oder Binärdaten unbekannten Typs) werden als `application/octet-stream` bezeichnet.
    Andere häufige Beispiele sind `application/pdf`, `application/pkcs8` und `application/zip`.
    [(Siehe application type registry bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#application)
- `audio`
  - : Audio- oder Musikdaten. Beispiele sind `audio/mpeg`,
    `audio/vorbis`.
    [(Siehe audio type registry bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#audio)
- `example`
  - : Reserviert für die Verwendung als Platzhalter in Beispielen, die zeigen, wie MIME-Typen verwendet werden.
    Diese sollten niemals außerhalb von Beispielcodes und Dokumentationen verwendet werden.
    `example` kann auch als Subtyp verwendet werden;
    zum Beispiel kann in einem Beispiel, das sich mit Audio im Web befasst, der MIME-Typ `audio/example` verwendet werden, um anzuzeigen, dass der Typ ein Platzhalter ist und bei der tatsächlichen Verwendung des Codes durch einen geeigneten ersetzt werden sollte.
- `font`
  - : Schriftarten-/Typeface-Daten. Häufige Beispiele sind `font/woff`, `font/ttf` und `font/otf`.
    [(Siehe font type registry bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#font)
- `image`
  - : Bild- oder Grafikdaten, einschließlich sowohl Bitmap- als auch Vektor-Stillbildern sowie
    animierten Versionen von Stillbildformaten wie animierten {{Glossary("GIF", "GIFs")}} oder APNG.
    Häufige Beispiele sind `image/jpeg`, `image/png` und `image/svg+xml`.
    [(Siehe image type registry bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#image)
- `model`
  - : Modelldaten für ein 3D-Objekt oder eine Szene. Beispiele sind `model/3mf` und `model/vrml`.
    [(Siehe model type registry bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#model)
- `text`
  - : Nur-Text-Daten, einschließlich jeglichen lesbaren Inhalts, Quellcodes oder Textdaten wie commaseparierten Datensätzen (CSV).
    Beispiele sind: `text/plain`, `text/csv` und `text/html`.
    [(Siehe text type registry bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#text)
- `video`
  - : Video-Daten oder -Dateien, wie MP4-Filme (`video/mp4`).
    [(Siehe video type registry bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#video)

Für Textdokumente ohne bestimmten Subtyp sollte `text/plain` verwendet werden.
Ebenso sollte für Binärdokumente ohne spezifischen oder bekannten Subtyp `application/octet-stream` verwendet werden.

#### Multipart-Typen

**Multipart** Typen zeigen eine Kategorie von Dokumenten an, die in
Teile unterteilt sind, oft mit unterschiedlichen MIME-Typen; sie können auch verwendet werden — insbesondere in E-Mail
Szenarien — um mehrere, separate Dateien darzustellen, die alle Teil derselben
Transaktion sind. Sie repräsentieren ein **zusammengesetztes Dokument**.

Mit Ausnahme von `multipart/form-data`, das in der {{HTTPMethod("POST")}} Methode von [HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms) verwendet wird, und `multipart/byteranges`, das mit {{HTTPStatus("206")}} `Partial Content` verwendet wird, um Teil eines Dokuments zu senden, behandelt HTTP multipart-Dokumente nicht auf besondere Weise: Die Nachricht wird an den Browser übermittelt (der wahrscheinlich ein "Speichern unter"-Fenster anzeigt, wenn er nicht weiß, wie er das Dokument anzeigen soll).

Es gibt zwei multipart-Typen:

- `message`
  - : Eine Nachricht, die andere Nachrichten kapselt. Dies kann verwendet werden, um beispielsweise eine E-Mail darzustellen, die eine weitergeleitete Nachricht als Teil ihrer Daten enthält,
    oder um das Senden sehr großer Nachrichten in Abschnitten als ob es sich um mehrere Nachrichten handelte.
    Beispiele sind `message/rfc822` (für weitergeleitetes oder beantwortetes Nachrichten-Zitieren) und `message/partial`, um das automatische Zerlegen einer großen Nachricht in kleinere zu ermöglichen, die vom Empfänger wieder zusammengesetzt werden.
    [(Siehe message type registry bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#message)
- `multipart`
  - : Daten, die aus mehreren Komponenten bestehen, die individuell unterschiedliche MIME-Typen haben können.
    Beispiele sind `multipart/form-data` (für Daten, die mit der [`FormData`](/de/docs/Web/API/FormData) API erzeugt werden) und `multipart/byteranges` (definiert in {{RFC(7233, "", "5.4.1")}} und verwendet mit {{Glossary("HTTP", "HTTP")}}'s {{HTTPStatus(206)}}
    "Teilweiser Inhalt"-Antwort, die zurückgegeben wird, wenn die abgerufenen Daten nur Teil des Inhalts sind, wie es mit dem {{HTTPHeader("Range")}} Header geliefert wird).
    [(Siehe multipart type registry bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#multipart)

## Wichtige MIME-Typen für Webentwickler

### application/octet-stream

Dies ist der Standard für Binärdateien. Da es _unbekannte Binärdatei_ bedeutet, führen Browser sie normalerweise nicht aus oder fragen sogar, ob sie ausgeführt werden soll. Sie behandeln es, als wäre der {{HTTPHeader("Content-Disposition")}} Header auf `attachment` gesetzt und schlagen ein "Speichern unter"-Dialogfeld vor.

### text/plain

Dies ist der Standard für Textdateien. Auch wenn es wirklich "unbekannte Textdatei" bedeutet, gehen Browser davon aus, dass sie es anzeigen können.

> [!NOTE]
> `text/plain` bedeutet nicht "jede Art von Textdaten."
> Wenn sie eine bestimmte Art von Textdaten erwarten, werden sie es wahrscheinlich nicht als Übereinstimmung betrachten.
> Insbesondere wenn sie eine `text/plain` Datei von einem {{HTMLElement("link")}} Element, das eine CSS-Datei deklariert, herunterladen, werden sie es nicht als gültige CSS-Datei erkennen, wenn sie mit `text/plain` präsentiert wird.
> Der CSS-MIME-Typ `text/css` muss verwendet werden.

### text/css

CSS-Dateien, die zur Gestaltung einer Webseite verwendet werden, **müssen** mit `text/css` gesendet werden.
Wenn ein Server das `.css` Suffix für CSS-Dateien nicht erkennt, kann er sie mit den MIME-Typen `text/plain` oder `application/octet-stream` senden.
Wenn dies der Fall ist, werden sie von den meisten Browsern nicht als CSS erkannt und ignoriert.

### text/html

Alle HTML-Inhalte sollten mit diesem Typ bedient werden. Alternative MIME-Typen für XHTML (wie `application/xhtml+xml`) sind heutzutage größtenteils nutzlos.

> [!NOTE]
> Verwenden Sie `application/xml` oder `application/xhtml+xml`, wenn Sie die strikten XML-Parsing-Regeln wünschen, [`<![CDATA[…]]>`](/de/docs/Web/API/CDATASection) Abschnitte oder Elemente, die nicht aus den HTML/SVG/MathML-Namensräumen stammen.

### text/javascript

Laut dem [IANA Media Types Register](https://www.iana.org/assignments/media-types/media-types.xhtml#text), [RFC 9239](https://www.rfc-editor.org/rfc/rfc9239.html) und der [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/scripting.html#scriptingLanguages:text/javascript) sollte JavaScript-Inhalt immer mit dem MIME-Typ `text/javascript` gesendet werden.
Keine anderen MIME-Typen gelten als gültig für JavaScript, und die Verwendung eines anderen MIME-Typs als `text/javascript` kann dazu führen, dass Skripte nicht geladen oder ausgeführt werden.

Sie können feststellen, dass einige JavaScript-Inhalte fälschlicherweise mit einem `charset` Parameter als Teil des MIME-Typs gesendet werden — als Versuch, den Zeichensatz für den Skriptinhalt anzugeben.
Dieser `charset` Parameter ist für JavaScript-Inhalte nicht gültig und führt in den meisten Fällen dazu, dass ein Skript nicht geladen wird.

### application/json

{{Glossary("JSON", "JavaScript Object Notation (JSON)")}} ist ein standardisiertes textbasiertes Format zur Darstellung strukturierter Daten basierend auf der JavaScript-Objektsyntax.
Es wird häufig zum Übertragen von Daten in Webanwendungen verwendet.

#### Veraltete JavaScript-MIME-Typen

Zusätzlich zum `text/javascript` MIME-Typ erlaubt die [MIME Sniffing Standard](https://mimesniff.spec.whatwg.org/)
(die Definition, wie Browser MIME-Typen interpretieren und herausfinden
was mit Inhalten zu tun ist, die keinen gültigen Typ haben), aus historischen Gründen auch, dass JavaScript unter Verwendung eines der folgenden veralteten JavaScript-MIME-Typen serviert wird:

- `application/javascript` {{deprecated_inline}}
- `application/ecmascript` {{deprecated_inline}}
- `application/x-ecmascript` {{Non-standard_Inline}}
- `application/x-javascript` {{Non-standard_Inline}}
- `text/ecmascript` {{deprecated_inline}}
- `text/javascript1.0` {{Non-standard_Inline}}
- `text/javascript1.1` {{Non-standard_Inline}}
- `text/javascript1.2` {{Non-standard_Inline}}
- `text/javascript1.3` {{Non-standard_Inline}}
- `text/javascript1.4` {{Non-standard_Inline}}
- `text/javascript1.5` {{Non-standard_Inline}}
- `text/jscript` {{Non-standard_Inline}}
- `text/livescript` {{Non-standard_Inline}}
- `text/x-ecmascript` {{Non-standard_Inline}}
- `text/x-javascript` {{Non-standard_Inline}}

> [!NOTE]
> Auch wenn ein bestimmter {{Glossary("user_agent", "user agent")}} einen oder alle dieser Typen unterstützen mag, sollten Sie nur `text/javascript` verwenden.
> Es ist der einzige MIME-Typ, der jetzt und in Zukunft garantiert funktioniert.

### Bildtypen

Dateien, deren MIME-Typ `image` ist, enthalten Bilddaten.
Der Subtyp gibt an, welches spezifische Bilddateiformat die Daten darstellen.

Die folgenden Bildtypen werden häufig genug verwendet, um als _sicher_ für die Verwendung auf Webseiten zu gelten:

- [`image/apng`](/de/docs/Web/Media/Guides/Formats/Image_types#apng_animated_portable_network_graphics): Animated Portable Network Graphics (APNG)
- [`image/avif`](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) : AV1 Image File Format (AVIF)
- [`image/gif`](/de/docs/Web/Media/Guides/Formats/Image_types#gif_graphics_interchange_format): Graphics Interchange Format (GIF)
- [`image/jpeg`](/de/docs/Web/Media/Guides/Formats/Image_types#jpeg_joint_photographic_experts_group_image): Joint Photographic Expert Group image (JPEG)
- [`image/png`](/de/docs/Web/Media/Guides/Formats/Image_types#png_portable_network_graphics): Portable Network Graphics (PNG)
- [`image/svg+xml`](/de/docs/Web/Media/Guides/Formats/Image_types#svg_scalable_vector_graphics): Scalable Vector Graphics (SVG)
- [`image/webp`](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image): Web Picture format (WEBP)

Der [Leitfaden für Bilddateitypen und -formate](/de/docs/Web/Media/Guides/Formats/Image_types#common_image_file_types) stellt Informationen und Empfehlungen bereit, wann die verschiedenen Bildformate verwendet werden sollen.

### Audio- und Videotypen

Wie auch bei Bildern schreibt HTML nicht vor, dass Webbrowser bestimmte Datei- und Codectypen für die {{HTMLElement("audio")}} und {{HTMLElement("video")}} Elemente unterstützen müssen. Daher ist es wichtig, Ihre Zielgruppe und die von ihnen genutzte Bandbreite an Browsern und deren Versionen zu berücksichtigen, wenn Sie den Dateityp und die Codecs für Medien auswählen.

Unser [Leitfaden für Mediencontainerformate](/de/docs/Web/Media/Guides/Formats/Containers) bietet eine Liste der Dateitypen, die von Webbrowsern häufig unterstützt werden,
einschließlich Informationen über ihre speziellen Anwendungsfälle, eventuelle Nachteile, Kompatibilitätsinformationen und weitere Details.

Die [Leitfäden für Audiocodecs](/de/docs/Web/Media/Guides/Formats/Audio_codecs) und [Videocodecs](/de/docs/Web/Media/Guides/Formats/Video_codecs) listen die verschiedenen Codecs auf, die Webbrowser häufig unterstützen, und bieten Kompatibilitätsinformationen sowie technische Informationen, wie viele Audiokanäle sie unterstützen, welche Art von Kompression verwendet wird und bei welchen Bitraten usw. sie nützlich sind.
Der [Leitfaden über die von WebRTC verwendeten Codecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) geht darauf ein, indem er speziell die von den wichtigsten Webbrowsern unterstützten Codecs abdeckt, damit Sie die Codecs auswählen können, die am besten die Bandbreite der von Ihnen unterstützten Browser abdecken.

Wie bei den MIME-Typen von Audio- oder Videodateien spezifizieren sie in der Regel das Containerformat (Dateityp).
Der optionale [codecs-Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter) kann dem MIME-Typ hinzugefügt werden, um weiter zu spezifizieren, welche Codecs verwendet werden sollen und welche Optionen zur Kodierung der Medien verwendet wurden, wie beispielsweise Codecprofil, Level oder andere Informationen.

Für weitere Informationen zu häufig verwendeten Medientypen siehe die [Common MIME types](/de/docs/Web/HTTP/Guides/MIME_types/Common_types) Seite.

### multipart/form-data

Der `multipart/form-data` Typ kann verwendet werden, wenn die Werte aus einem abgeschlossenen [HTML-Formular](/de/docs/Learn_web_development/Extensions/Forms) vom Browser zum Server gesendet werden.

Als ein Multipart-Dokumentenformat besteht es aus verschiedenen Teilen, die durch eine Grenze (ein String, der mit zwei Bindestrichen (`--`) beginnt) getrennt sind.
Jeder Teil ist seine eigene Entität mit ihren eigenen HTTP-Headern, {{HTTPHeader("Content-Disposition")}} und {{HTTPHeader("Content-Type")}} für Dateiupload-Felder.

```http
Content-Type: multipart/form-data; boundary=aBoundaryString
(other headers associated with the multipart document as a whole)

--aBoundaryString
Content-Disposition: form-data; name="myFile"; filename="img.jpg"
Content-Type: image/jpeg

(data)
--aBoundaryString
Content-Disposition: form-data; name="myField"

(data)
--aBoundaryString
(more subparts)
--aBoundaryString--
```

Das folgende `<form>`:

```html
<form
  action="http://localhost:8000/"
  method="post"
  enctype="multipart/form-data">
  <label>Name: <input name="myTextField" value="Test" /></label>
  <label><input type="checkbox" name="myCheckBox" /> Check</label>
  <label>
    Upload file: <input type="file" name="myFile" value="test.txt" />
  </label>
  <button>Send the file</button>
</form>
```

wird diese Nachricht senden:

```http
POST / HTTP/1.1
Host: localhost:8000
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate
Connection: keep-alive
Upgrade-Insecure-Requests: 1
Content-Type: multipart/form-data; boundary=---------------------------8721656041911415653955004498
Content-Length: 465

-----------------------------8721656041911415653955004498
Content-Disposition: form-data; name="myTextField"

Test
-----------------------------8721656041911415653955004498
Content-Disposition: form-data; name="myCheckBox"

on
-----------------------------8721656041911415653955004498
Content-Disposition: form-data; name="myFile"; filename="test.txt"
Content-Type: text/plain

Simple file.
-----------------------------8721656041911415653955004498--
```

### multipart/byteranges

Der `multipart/byteranges` MIME-Typ wird verwendet, um Teilantworten an den Browser zu senden.

Wenn der {{HTTPStatus("206", "206 Partial Content")}} Statuscode gesendet wird, zeigt dieser MIME-Typ an, dass das Dokument aus mehreren Teilen besteht, von denen jeder
die angeforderten Bereiche darstellt. Wie andere multipart-Typen verwendet der {{HTTPHeader("Content-Type")}} ein `boundary`, um die Teile zu trennen.
Jedes Stück hat einen {{HTTPHeader("Content-Type")}} Header mit seinem tatsächlichen Typ und einen {{HTTPHeader("Content-Range")}} der den Bereich darstellt, den es darstellt.

```http
HTTP/1.1 206 Partial Content
Accept-Ranges: bytes
Content-Type: multipart/byteranges; boundary=3d6b6a416f9b5
Content-Length: 385

--3d6b6a416f9b5
Content-Type: text/html
Content-Range: bytes 100-200/1270

eta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <meta name="viewport" content
--3d6b6a416f9b5
Content-Type: text/html
Content-Range: bytes 300-400/1270

-color: #f0f0f2;
        margin: 0;
        padding: 0;
        font-family: "Open Sans", "Helvetica
--3d6b6a416f9b5--
```

## Bedeutung der Einstellung des richtigen MIME-Typs

Einige Serverkonfigurationen können den zugehörigen MIME-Typ verwenden, um Optimierungen durchzuführen, wie z.B. Datei-Konzatination, Kompression oder Caching. Siehe [h5bp/server-configs-apache](https://github.com/h5bp/server-configs-apache/blob/main/h5bp/web_performance/compression.conf) für ein Beispiel für eine Apache-Konfiguration, die Dateien bestimmter MIME-Typen komprimiert.

Die meisten Webserver senden nicht erkannte Ressourcen als den `application/octet-stream` MIME-Typ.
Aus Sicherheitsgründen erlauben die meisten Browser nicht, eine benutzerdefinierte Standardaktion (wie "In Word öffnen") für solche Ressourcen festzulegen, wodurch der Benutzer gezwungen wird, sie auf die Festplatte zu speichern, um sie zu verwenden.

Einige häufige fehlerhafte Serverkonfigurationen:

- RAR-komprimierte Dateien.
  In diesem Fall wäre der ideale Typ der echte Typ der Originaldateien; dies ist oft unmöglich, da .RAR-Dateien mehrere Ressourcen unterschiedlicher Typen enthalten können.
  Stellen Sie in diesem Fall den Server auf `application/x-rar-compressed` ein.
- Audio und Video.
  Nur Ressourcen mit dem richtigen MIME-Typ werden in {{HTMLElement("video")}} oder {{HTMLElement("audio")}} Elementen abgespielt.
  Stellen Sie sicher, dass Sie den richtigen [Medientyp für Audio und Video](/de/docs/Web/Media/Guides/Formats) angeben.
- Proprietäre Dateitypen.
  Ein spezifischer Typ wie `application/vnd.mspowerpoint` ermöglicht es Benutzern, solche Dateien automatisch in der Präsentationssoftware ihrer Wahl zu öffnen.

## MIME-Sniffing

In Abwesenheit eines MIME-Typs oder in bestimmten Fällen, in denen Browser glauben, dass sie falsch sind, können Browser ein _MIME-Sniffing_ durchführen — den richtigen MIME-Typ erraten, indem sie die Bytes der Ressource überprüfen.

Jeder Browser führt MIME-Sniffing unterschiedlich und unter verschiedenen Umständen durch.
(Beispielsweise betrachtet Safari die Dateierweiterung in der URL, wenn der gesendete MIME-Typ ungeeignet ist.)
Es gibt Sicherheitsbedenken, da einige MIME-Typen ausführbare Inhalte darstellen.
Server können MIME-Sniffing verhindern, indem sie den {{HTTPHeader("X-Content-Type-Options")}} Header senden.

## Andere Methoden zur Übermittlung von Dokumententypen

MIME-Typen sind nicht die einzige Möglichkeit, um Dokumententyp-Informationen zu übermitteln:

- Dateinamensuffixe werden manchmal verwendet, insbesondere unter Microsoft Windows.
  Nicht alle Betriebssysteme betrachten diese Suffixe als bedeutsam (wie Linux und macOS), und es gibt keine Garantie dafür, dass sie korrekt sind.
- Magische Zahlen. Die Syntax verschiedener Formate ermöglicht das Ableiten des Dateityps durch Betrachten ihrer Byte-Struktur.
  Zum Beispiel beginnen GIF-Dateien mit dem `47 49 46 38 39` Hexadezimalwert (`GIF89`), und PNG-Dateien mit `89 50 4E 47` (`.PNG`).
  Nicht alle Dateitypen haben magische Zahlen, daher ist dies auch nicht 100% zuverlässig.

## Siehe auch

- [Web-Medientechnologien](/de/docs/Web/Media)
- [Leitfaden zu Medientypen im Web](/de/docs/Web/Media/Guides/Formats)
- [Ordnungsgemäßes Konfigurieren der Server-MIME-Typen](/de/docs/Learn_web_development/Extensions/Server-side/Configuring_server_MIME_types)
