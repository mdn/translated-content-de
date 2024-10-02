---
title: MIME-Typen (IANA media types)
slug: Web/HTTP/MIME_types
l10n:
  sourceCommit: f75b2c86ae4168e59416aed4c7121f222afc201d
---

{{HTTPSidebar}}

Ein **Medientyp** (auch bekannt als **Multipurpose Internet Mail Extensions oder MIME-Typ**) gibt die Art und das Format eines Dokuments, einer Datei oder einer Datenmenge an. MIME-Typen werden in IETFs {{RFC(6838)}} definiert und standardisiert.

Die [Internet Assigned Numbers Authority (IANA)](https://www.iana.org/) ist verantwortlich für alle offiziellen MIME-Typen, und Sie finden die aktuellste und vollständige Liste auf ihrer [Media Types](https://www.iana.org/assignments/media-types/media-types.xhtml) Seite.

> [!WARNING]
> Browser verwenden den MIME-Typ, _nicht die Dateiendung_, um zu bestimmen, wie eine URL verarbeitet wird. Daher ist es wichtig, dass Webserver den korrekten MIME-Typ im {{HTTPHeader("Content-Type")}} Header der Antwort senden. Wenn dies nicht korrekt konfiguriert ist, interpretieren Browser die Inhalte von Dateien möglicherweise falsch, Websites funktionieren nicht korrekt, und heruntergeladene Dateien werden möglicherweise falsch behandelt.

## Struktur eines MIME-Typs

Ein MIME-Typ besteht in der Regel aus zwei Teilen: einem _Typ_ und einem _Subtyp_, die durch einen Schrägstrich (`/`) getrennt sind — ohne Leerzeichen dazwischen:

```plain
type/subtype
```

Der **_Typ_** repräsentiert die allgemeine Kategorie, in die der Datentyp fällt, wie `video` oder `text`.

Der **_Subtyp_** identifiziert die genaue Art von Daten, die der angegebene Typ des MIME-Typs repräsentiert. Beispielsweise könnte der Subtyp für den MIME-Typ `text` `plain` (Klartext), `html` ({{Glossary("HTML", "HTML")}} Quellcode) oder `calendar` (für iCalendar/`.ics`) Dateien sein.

Jeder Typ hat eine eigene Reihe möglicher Subtypen. Ein MIME-Typ hat immer sowohl einen Typ als auch einen Subtyp, niemals nur das eine oder das andere.

Ein optionaler **Parameter** kann hinzugefügt werden, um zusätzliche Details bereitzustellen:

```plain
type/subtype;parameter=value
```

Zum Beispiel kann bei jedem MIME-Typ, dessen Haupttyp `text` ist, der optionale `charset` Parameter hinzugefügt werden, um den Zeichensatz anzugeben, der für die Zeichen in den Daten verwendet wird. Wenn kein `charset` angegeben ist, ist der Standard {{Glossary("ASCII", "ASCII")}} (`US-ASCII`), es sei denn, er wird durch die {{Glossary("user_agent", "Einstellungen des Benutzeragenten")}} überschrieben. Um eine UTF-8-Textdatei anzugeben, wird der MIME-Typ `text/plain;charset=UTF-8` verwendet.

MIME-Typen sind nicht case-sensitive, werden aber traditionell in Kleinbuchstaben geschrieben. Die Parameterwerte können case-sensitive sein.

### Typen

Es gibt zwei Klassen von Typen: **diskrete** und **mehrteilige**.
Diskrete Typen sind Typen, die eine einzelne Datei oder ein Medium repräsentieren, wie eine einzelne Text- oder Musikdatei oder ein einzelnes Video. Ein mehrteiliger Typ repräsentiert ein Dokument, das aus mehreren Komponenten besteht, von denen jede einen eigenen individuellen MIME-Typ haben kann; oder, ein mehrteiliger Typ kann mehrere Dateien zusammen in einer Transaktion kapseln. Beispielsweise werden mehrteilige MIME-Typen verwendet, wenn mehrere Dateien an eine E-Mail angehängt werden.

#### Diskrete Typen

Die derzeit bei der IANA registrierten diskreten Typen sind:

- `application`
  - : Jede Art von Binärdaten, die nicht explizit in eine der anderen Typen fällt; entweder Daten, die in irgendeiner Weise ausgeführt oder interpretiert werden oder Binärdaten, die eine spezifische Anwendung oder Kategorie von Anwendungen erfordern. Generische Binärdaten (oder Binärdaten, deren wahrer Typ unbekannt ist) sind `application/octet-stream`. Andere häufige Beispiele sind `application/pdf`, `application/pkcs8`, und `application/zip`. [(Siehe Anwendungs-Typ-Register bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#application)
- `audio`
  - : Audio- oder Musikdaten. Beispiele sind `audio/mpeg`, `audio/vorbis`. [(Siehe Audio-Typen-Register bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#audio)
- `example`
  - : Reserviert zur Verwendung als Platzhalter in Beispielen, die zeigen, wie MIME-Typen verwendet werden. Diese sollten niemals außerhalb von Muster-Programmierlistings und Dokumentationen verwendet werden. `example` kann auch als Subtyp verwendet werden; zum Beispiel, in einem Beispiel, das sich mit der Arbeit mit Audio im Web befasst, kann der MIME-Typ `audio/example` verwendet werden, um anzuzeigen, dass der Typ ein Platzhalter ist und ersetzt werden sollte, wenn der Code in der realen Welt verwendet wird.
- `font`
  - : Schriftart-/Schriftbilddaten. Häufige Beispiele sind `font/woff`, `font/ttf` und `font/otf`. [(Siehe Font-Typen-Register bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#font)
- `image`
  - : Bild- oder Grafikdaten, einschließlich beider Bitmap- und Vektor-Standbilder sowie animierten Versionen von Standbildformaten wie animierte {{Glossary("GIF", "GIF")}} oder APNG. Häufige Beispiele sind `image/jpeg`, `image/png` und `image/svg+xml`. [(Siehe Bild-Typen-Register bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#image)
- `model`
  - : Modelldaten für ein 3D-Objekt oder eine Szene. Beispiele sind `model/3mf` und `model/vrml`. [(Siehe Modell-Typen-Register bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#model)
- `text`
  - : Nur-Text-Daten, einschließlich aller lesbare Inhalte, Quellcode oder Textdaten wie durch Kommas getrennte Werte (CSV) formatierte Daten. Beispiele sind: `text/plain`, `text/csv` und `text/html`. [(Siehe Text-Typen-Register bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#text)
- `video`
  - : Video-Daten oder -Dateien, wie zum Beispiel MP4-Filme (`video/mp4`). [(Siehe Video-Typen-Register bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#video)

Für Textdokumente ohne spezifischen Subtyp sollte `text/plain` verwendet werden. Ebenso sollte für Binärdokumente ohne spezifischen oder bekannten Subtyp `application/octet-stream` verwendet werden.

#### Multipart-Typen

**Multipart**-Typen geben eine Kategorie eines in Stücken aufgeteilten Dokuments an, oft mit unterschiedlichen MIME-Typen; sie können auch verwendet werden — insbesondere in E-Mail-Szenarien — um mehrere, getrennte Dateien zu repräsentieren, die alle Teil derselben Transaktion sind. Sie repräsentieren ein **zusammengesetztes Dokument**.

Abgesehen von `multipart/form-data`, verwendet in der {{HTTPMethod("POST")}} Methode von [HTML-Formularen](/de/docs/Learn/Forms), und `multipart/byteranges`, verwendet mit {{HTTPStatus("206")}} `Partial Content`, um einen Teil eines Dokuments zu versenden, behandelt HTTP mehrteilige Dokumente nicht speziell: Die Nachricht wird an den Browser übertragen (der wahrscheinlich ein "Speichern unter"-Fenster anzeigen wird, wenn er nicht weiß, wie man das Dokument anzeigt).

Es gibt zwei Typen von Multipart-Typen:

- `message`
  - : Eine Nachricht, die andere Nachrichten kapselt. Dies kann verwendet werden, um beispielsweise eine E-Mail zu repräsentieren, die eine weitergeleitete Nachricht als Teil ihrer Daten enthält, oder um das Senden sehr großer Nachrichten in Teilen zu ermöglichen, als wären es mehrere Nachrichten. Beispiele sind `message/rfc822` (für weitergeleitete oder beantwortete Nachrichten-Zitate) und `message/partial`, um das automatische Aufteilen einer großen Nachricht in kleinere zu ermöglichen, die vom Empfänger wieder zusammengefügt werden können. [(Siehe Nachrichten-Typen-Register bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#message)
- `multipart`
  - : Daten, die aus mehreren Komponenten bestehen, die individuell unterschiedliche MIME-Typen haben können. Beispiele sind `multipart/form-data` (für Daten, die mit der [`FormData`](/de/docs/Web/API/FormData) API erzeugt wurden) und `multipart/byteranges` (definiert in {{RFC(7233, "", "5.4.1")}} und verwendet mit {{Glossary("HTTP", "HTTP")}}'s {{HTTPStatus(206)}} "Partial Content" Antwort, die zurückgesandt wird, wenn die abgerufenen Daten nur Teil des Inhalts sind, wie es mit dem {{HTTPHeader("Range")}} Header geliefert wird).
    [(Siehe Multipart-Typen-Register bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#multipart)

## Wichtige MIME-Typen für Webentwickler

### application/octet-stream

Dies ist der Standard für Binärdateien. Da es _unbekannte binäre_ Dateien bedeutet, führen Browser sie normalerweise nicht aus oder fragen sogar, ob sie ausgeführt werden sollten. Sie behandeln es, als ob der {{HTTPHeader("Content-Disposition")}} Header auf `attachment` gesetzt wäre und schlagen ein "Speichern unter" Dialog vor.

### text/plain

Dies ist der Standard für Textdateien. Auch wenn es wirklich "unbekannte Textdatei" bedeutet, gehen Browser davon aus, dass sie sie anzeigen können.

> **Hinweis:** `text/plain` bedeutet nicht "jede Art von Textdaten." Wenn sie eine spezifische Art von Textdaten erwarten, werden sie es wahrscheinlich nicht als passend betrachten. Insbesondere wenn sie eine `text/plain` Datei von einem {{HTMLElement("link")}} Element herunterladen, das eine CSS-Datei deklariert, werden sie es nicht als gültige CSS-Datei erkennen, wenn sie mit `text/plain` präsentiert wird. Der CSS-Mimetyp `text/css` muss verwendet werden.

### text/css

CSS-Dateien, die zum Stylen einer Webseite verwendet werden, **müssen** mit `text/css` gesendet werden. Wenn ein Server das `.css` Suffix für CSS-Dateien nicht erkennt, kann er sie mit den MIME-Typen `text/plain` oder `application/octet-stream` senden. In diesem Fall werden sie von den meisten Browsern nicht als CSS erkannt und ignoriert.

### text/html

Alle HTML-Inhalte sollten mit diesem Typ bereitgestellt werden. Alternative MIME-Typen für XHTML (wie `application/xhtml+xml`) sind heutzutage größtenteils nutzlos.

> [!NOTE]
> Verwenden Sie `application/xml` oder `application/xhtml+xml`, wenn Sie die strengen Parsing-Regeln von XML, [`<![CDATA[…]]>`](/de/docs/Web/API/CDATASection) Abschnitte oder Elemente, die nicht aus den HTML/SVG/MathML Namespaces stammen, wünschen.

### text/javascript

Laut dem [IANA Media Types Registry](https://www.iana.org/assignments/media-types/media-types.xhtml#text), [RFC 9239](https://www.rfc-editor.org/rfc/rfc9239.html), und der [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/scripting.html#scriptingLanguages:text/javascript) sollte JavaScript-Inhalt immer mit dem MIME-Typ `text/javascript` bereitgestellt werden. Keine anderen MIME-Typen werden als gültig für JavaScript angesehen, und die Verwendung eines anderen MIME-Typs als `text/javascript` kann zu Skripten führen, die nicht geladen oder ausgeführt werden.

Sie können einige JavaScript-Inhalte fälschlicherweise mit einem `charset` Parameter als Teil des MIME-Typs bereitgestellt finden — als Versuch, den Zeichensatz für den Skriptinhalt anzugeben. Dieser `charset` Parameter ist für JavaScript-Inhalt nicht gültig und wird in den meisten Fällen dazu führen, dass ein Skript nicht geladen wird.

#### Veraltete JavaScript MIME-Typen

Zusätzlich zum MIME-Typ `text/javascript` erlaubt der [MIME Sniffing Standard](https://mimesniff.spec.whatwg.org/) (die Definition, wie Browser MIME-Typen interpretieren und herausfinden sollten, was mit Inhalten ohne gültige zu tun ist) aus historischen Gründen auch, dass JavaScript mit einem der folgenden veralteten JavaScript MIME-Typen bereitgestellt wird:

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
> Auch wenn ein bestimmter {{Glossary("user_agent", "Benutzeragent")}} einen oder alle diese unterstützt, sollten Sie nur `text/javascript` verwenden. Es ist der einzige MIME-Typ, der jetzt und in Zukunft garantiert funktioniert.

### Bildtypen

Dateien, deren MIME-Typ `image` ist, enthalten Bilddaten. Der Subtyp gibt an, welches spezielle Bilddateiformat die Daten repräsentieren.

Die folgenden Bildtypen werden häufig genug verwendet, um als _sicher_ für die Verwendung auf Webseiten zu gelten:

- [`image/apng`](/de/docs/Web/Media/Formats/Image_types#apng_animated_portable_network_graphics): Animated Portable Network Graphics (APNG)
- [`image/avif`](/de/docs/Web/Media/Formats/Image_types#avif_image) : AV1 Image File Format (AVIF)
- [`image/gif`](/de/docs/Web/Media/Formats/Image_types#gif_graphics_interchange_format): Graphics Interchange Format (GIF)
- [`image/jpeg`](/de/docs/Web/Media/Formats/Image_types#jpeg_joint_photographic_experts_group_image): Joint Photographic Expert Group image (JPEG)
- [`image/png`](/de/docs/Web/Media/Formats/Image_types#png_portable_network_graphics): Portable Network Graphics (PNG)
- [`image/svg+xml`](/de/docs/Web/Media/Formats/Image_types#svg_scalable_vector_graphics): Scalable Vector Graphics (SVG)
- [`image/webp`](/de/docs/Web/Media/Formats/Image_types#webp_image): Web Picture format (WEBP)

Der [Leitfaden für Bilddateitypen und -formate](/de/docs/Web/Media/Formats/Image_types#common_image_file_types) bietet Informationen und Empfehlungen, wann die verschiedenen Bildformate verwendet werden sollten.

### Audio- und Videotypen

Wie bei Bildern schreibt HTML nicht vor, dass Webbrowser bestimmte Datei- und Codec-Typen für die {{HTMLElement("audio")}} und {{HTMLElement("video")}} Elemente unterstützen müssen. Daher ist es wichtig, Ihre Zielgruppe und die Bandbreite der Browser (und Versionen dieser Browser), die sie möglicherweise verwenden, zu berücksichtigen, wenn Sie den Dateityp und die Codecs für Medien auswählen.

Unser [Leitfaden zu Mediencontainerformaten](/de/docs/Web/Media/Formats/Containers) bietet eine Liste der Dateitypen, die häufig von Webbrowsern unterstützt werden, einschließlich Informationen zu ihren speziellen Anwendungsfällen, ihren eventuellen Nachteilen und Kompatibilitätsinformationen sowie anderen Details.

Die Anleitungen zu [Audiocodecs](/de/docs/Web/Media/Formats/Audio_codecs) und [Videocodecs](/de/docs/Web/Media/Formats/Video_codecs) listen die verschiedenen Codecs auf, die von Webbrowsern häufig unterstützt werden, und bieten Kompatibilitätsdetails zusammen mit technischen Informationen wie der Anzahl der unterstützten Audiokanäle, welche Art von Kompression verwendet wird und welche Bitraten und so weiter sie sinnvoll machen. Der [Leitfaden zu Codecs, die von WebRTC verwendet werden](/de/docs/Web/Media/Formats/WebRTC_codecs) erweitert dies, indem er speziell die von den wichtigsten Webbrowsern unterstützten Codecs abdeckt, sodass Sie die Codecs auswählen können, die das beste Spektrum an Browserunterstützung bieten.

Was die MIME-Typen von Audio- oder Videodateien betrifft, so geben sie typischerweise das Containerformat (Dateityp) an. Der optionale [codecs-Parameter](/de/docs/Web/Media/Formats/codecs_parameter) kann zum MIME-Typ hinzugefügt werden, um genauer anzugeben, welche Codecs verwendet werden sollen und welche Optionen verwendet wurden, um die Medien zu kodieren, wie Codec-Profil, Level oder andere solche Informationen.

Für weitere Informationen zu häufigen Medientypen siehe die Seite [Common MIME types](/de/docs/Web/HTTP/MIME_types/Common_types).

### multipart/form-data

Der Typ `multipart/form-data` kann verwendet werden, wenn die Werte eines ausgefüllten [HTML-Formulars](/de/docs/Learn/Forms) vom Browser zum Server gesendet werden.

Als mehrteiliges Dokumentenformat besteht es aus verschiedenen Teilen, die durch eine Grenze (ein String, der mit einem Doppelschrägstrich `--` beginnt) abgegrenzt werden. Jeder Teil ist seine eigene Entität mit eigenen HTTP-Headern, {{HTTPHeader("Content-Disposition")}} und {{HTTPHeader("Content-Type")}} für Datei-Upload-Felder.

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

wird diese Nachricht versenden:

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

Der MIME-Typ `multipart/byteranges` wird verwendet, um teilweise Antworten an den Browser zu senden.

Wenn der {{HTTPStatus("206", "206 Partial Content")}} Statuscode gesendet wird, zeigt dieser MIME-Typ an, dass das Dokument aus mehreren Teilen besteht, einem für jeden der angeforderten Bereiche. Wie bei anderen mehrteiligen Typen verwendet der {{HTTPHeader("Content-Type")}} einen `boundary`, um die Teile zu trennen. Jeder Teil hat einen {{HTTPHeader("Content-Type")}} Header mit seinem tatsächlichen Typ und einen {{HTTPHeader("Content-Range")}} des Bereichs, den es repräsentiert.

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

## Wichtigkeit der korrekten Einstellung des MIME-Typs

Einige Serverkonfigurationen können den zugehörigen MIME-Typ verwenden, um Optimierungen durchzuführen, wie Dateizusammenführung, Komprimierung oder Caching. Ein Beispiel für eine Apache-Konfiguration, die Dateien bestimmter MIME-Typen komprimiert, finden Sie bei [h5bp/server-configs-apache](https://github.com/h5bp/server-configs-apache/blob/main/h5bp/web_performance/compression.conf).

Die meisten Webserver senden nicht erkannte Ressourcen als MIME-Typ `application/octet-stream`. Aus Sicherheitsgründen erlauben die meisten Browser keine benutzerdefinierte Standardaktion (wie "In Word öffnen") für solche Ressourcen, wodurch der Benutzer gezwungen wird, sie auf die Festplatte zu speichern, um sie zu verwenden.

Einige häufig falsche Serverkonfigurationen:

- RAR-komprimierte Dateien. In diesem Fall wäre es ideal, den wahren Typ der Originaldateien zu kennen; dies ist oft unmöglich, da .RAR Dateien mehrere Ressourcen verschiedener Typen enthalten können. In diesem Fall den Server so konfigurieren, dass er `application/x-rar-compressed` sendet.
- Audio und Video. Nur Ressourcen mit dem korrekten MIME-Typ werden in {{HTMLElement("video")}} oder {{HTMLElement("audio")}} Elementen abgespielt. Achten Sie darauf, den richtigen [Medientyp für Audio und Video](/de/docs/Web/Media/Formats) anzugeben.
- Proprietäre Dateitypen. Ein spezifischer Typ wie `application/vnd.mspowerpoint` ermöglicht es Benutzern, solche Dateien automatisch in der Präsentationssoftware ihrer Wahl zu öffnen.

## MIME-Sniffing

In Abwesenheit eines MIME-Typs, oder in bestimmten Fällen, in denen Browser glauben, dass sie falsch sind, können Browser _MIME-Sniffing_ durchführen — den richtigen MIME-Typ erraten, indem sie die Bytes der Ressource betrachten.

Jeder Browser führt MIME-Sniffing unterschiedlich und unter verschiedenen Umständen durch. (Zum Beispiel wird Safari auf die Dateiendung in der URL schauen, wenn der gesendete MIME-Typ ungeeignet ist.) Es gibt Sicherheitsbedenken, da einige MIME-Typen ausführbare Inhalte repräsentieren. Server können MIME-Sniffing verhindern, indem sie den {{HTTPHeader("X-Content-Type-Options")}} Header senden.

## Andere Methoden zur Übermittlung von Dokumententypen

MIME-Typen sind nicht die einzige Möglichkeit, um Informationen zum Dokumententyp zu übermitteln:

- Dateisuffixe werden manchmal verwendet, insbesondere unter Microsoft Windows. Nicht alle Betriebssysteme betrachten diese Suffixe als bedeutungsvoll (wie Linux und macOS), und es gibt keine Garantie, dass sie korrekt sind.
- Magic numbers. Die Syntax verschiedener Formate ermöglicht die Ableitung des Dateityps durch Betrachtung ihrer Byte-Struktur. Zum Beispiel beginnen GIF-Dateien mit dem `47 49 46 38 39` hexadezimalen Wert (`GIF89`), und PNG-Dateien mit `89 50 4E 47` (`.PNG`). Nicht alle Dateitypen haben Magic numbers, daher ist dies auch nicht zu 100% zuverlässig.

## Siehe auch

- [Web-Medientechnologien](/de/docs/Web/Media)
- [Leitfaden zu Medientypen, die im Web verwendet werden](/de/docs/Web/Media/Formats)
- [Richtiges Konfigurieren von Server-MIME-Typen](/de/docs/Learn/Server-side/Configuring_server_MIME_types)
