---
title: MIME-Typen (IANA-Medientypen)
slug: Web/HTTP/Guides/MIME_types
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Ein **Medientyp** (auch bekannt als **Multipurpose Internet Mail Extensions oder MIME-Typ**) gibt die Art und das Format eines Dokuments, einer Datei oder einer Anordnung von Bytes an. MIME-Typen sind definiert und standardisiert in IETFs {{RFC(6838)}}.

Die [Internet Assigned Numbers Authority (IANA)](https://www.iana.org/) ist verantwortlich für alle offiziellen MIME-Typen, und Sie können die aktuellste und vollständige Liste auf ihrer [Media Types](https://www.iana.org/assignments/media-types/media-types.xhtml) Seite finden.

> [!WARNING]
> Browser verwenden den MIME-Typ, _nicht die Dateierweiterung_, um zu bestimmen, wie eine URL verarbeitet werden soll. Daher ist es wichtig, dass Webserver den korrekten MIME-Typ im {{HTTPHeader("Content-Type")}}-Header der Antwort senden. Wenn dies nicht korrekt konfiguriert ist, können Browser die Inhalte von Dateien wahrscheinlich falsch interpretieren, Websites funktionieren nicht korrekt, und heruntergeladene Dateien könnten nicht richtig behandelt werden.

## Struktur eines MIME-Typs

Ein MIME-Typ besteht meistens nur aus zwei Teilen: einem _Typ_ und einem _Subtyp_, getrennt durch einen Schrägstrich (`/`) — ohne Leerzeichen dazwischen:

```plain
type/subtype
```

Der **_Typ_** repräsentiert die allgemeine Kategorie, in die der Datentyp fällt, wie `video` oder `text`.

Der **_Subtyp_** identifiziert die genaue Art der Daten des angegebenen Typs, die der MIME-Typ repräsentiert. Zum Beispiel könnte für den MIME-Typ `text` der Subtyp `plain` (Klartext), `html` ({{Glossary("HTML", "HTML")}}-Quellcode) oder `calendar` (für iCalendar/`.ics`-Dateien) sein.

Jeder Typ hat seine eigene Menge möglicher Subtypen. Ein MIME-Typ hat immer sowohl einen Typ als auch einen Subtyp, nie nur einen oder den anderen.

Ein optionaler **Parameter** kann hinzugefügt werden, um zusätzliche Details bereitzustellen:

```plain
type/subtype;parameter=value
```

Zum Beispiel kann für einen MIME-Typ, dessen Haupttyp `text` ist, der optionale `charset`-Parameter hinzugefügt werden, um den Zeichensatz anzugeben, der für die Zeichen in den Daten verwendet wird. Wenn kein `charset` angegeben ist, ist der Standard {{Glossary("ASCII", "ASCII")}} (`US-ASCII`), es sei denn, dies wird durch die Einstellungen des {{Glossary("user_agent", "Benutzeragenten")}} überschrieben. Um eine UTF-8-Textdatei anzugeben, wird der MIME-Typ `text/plain;charset=UTF-8` verwendet.

MIME-Typen sind nicht case-sensitive, werden aber traditionell in Kleinbuchstaben geschrieben. Die Parameterwerte können case-sensitive sein.

### Typen

Es gibt zwei Klassen von Typen: **diskret** und **multipart**. Diskrete Typen repräsentieren eine einzelne Datei oder ein Medium, wie eine einzelne Text- oder Musikdatei oder ein einzelnes Video. Ein Multipart-Typ repräsentiert ein Dokument, das aus mehreren Komponenten besteht, von denen jede ihren eigenen MIME-Typ haben kann; oder, ein Multipart-Typ kann mehrere Dateien kapseln, die in einer Transaktion zusammen gesendet werden. Zum Beispiel werden multipart MIME-Typen verwendet, wenn mehrere Dateien an eine E-Mail angehängt werden.

#### Diskrete Typen

Die derzeit bei der IANA registrierten diskreten Typen sind:

- `application`
  - : Jede Art von Binärdaten, die nicht explizit in eine der anderen Kategorien fällt; entweder Daten, die in irgendeiner Weise ausgeführt oder interpretiert werden, oder Binärdaten, die eine spezifische Anwendung oder eine Kategorie von Anwendungen benötigen, um verwendet zu werden. Allgemeine Binärdaten (oder Binärdaten, deren wahrer Typ unbekannt ist) werden als `application/octet-stream` bezeichnet. Andere häufige Beispiele sind `application/pdf`, `application/pkcs8` und `application/zip`.
    [(Siehe Anwendungstyp-Register bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#application)
- `audio`
  - : Audio- oder Musikdaten. Beispiele umfassen `audio/mpeg`, `audio/vorbis`.
    [(Siehe Audiotyp-Register bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#audio)
- `example`
  - : Reserviert zur Nutzung als Platzhalter in Beispielen zur Veranschaulichung der Verwendung von MIME-Typen. Diese sollten niemals außerhalb von Beispielcode-Listings und Dokumentationen verwendet werden. `example` kann auch als Subtyp verwendet werden; zum Beispiel kann in einem Beispiel im Zusammenhang mit der Arbeit mit Audio im Web der MIME-Typ `audio/example` verwendet werden, um anzuzeigen, dass der Typ ein Platzhalter ist und beim Einsatz des Codes in der realen Welt durch einen geeigneten ersetzt werden sollte.
- `font`
  - : Schrift-/Schriftartdaten. Häufige Beispiele sind `font/woff`, `font/ttf` und `font/otf`.
    [(Siehe Schriftarttyp-Register bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#font)
- `image`
  - : Bild- oder grafikdaten einschließlich sowohl Raster- als auch Vektorgrafik-Standbilder sowie animierte Versionen von Standbildformaten wie animierte {{Glossary("GIF", "GIF")}} oder APNG. Häufige Beispiele sind `image/jpeg`, `image/png` und `image/svg+xml`.
    [(Siehe Bildtyp-Register bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#image)
- `model`
  - : Modelldaten für ein 3D-Objekt oder eine Szene. Beispiele umfassen `model/3mf` und `model/vrml`.
    [(Siehe Modelltyp-Register bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#model)
- `text`
  - : Reintextdaten einschließlich aller menschenlesbaren Inhalte, Quellcode oder Textdaten wie kommagetrennte Werte (CSV) formatierte Daten. Beispiele umfassen: `text/plain`, `text/csv` und `text/html`.
    [(Siehe Texttyp-Register bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#text)
- `video`
  - : Videodaten oder -dateien, wie MP4-Filme (`video/mp4`).
    [(Siehe Videotyp-Register bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#video)

Für Textdokumente ohne spezifischen Subtyp sollte `text/plain` verwendet werden. Ebenso sollte für Binärdokumente ohne einen bestimmten oder unbekannten Subtyp `application/octet-stream` verwendet werden.

#### Multipart-Typen

**Multipart**-Typen geben eine Kategorie von Dokumenten an, die in Teile unterteilt sind, oft mit unterschiedlichen MIME-Typen; sie können auch verwendet werden – besonders in E-Mail-Szenarien – um mehrere, separate Dateien darzustellen, die alle Teil derselben Transaktion sind. Sie repräsentieren ein **zusammengesetztes Dokument**.

Außer für `multipart/form-data`, das in der {{HTTPMethod("POST")}} Methode von [HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms) verwendet wird, und `multipart/byteranges`, das mit {{HTTPStatus("206")}} `Partial Content` verwendet wird, um einen Teil eines Dokuments zu senden, behandelt HTTP multipart-Dokumente nicht auf besondere Weise: Die Nachricht wird an den Browser übertragen (der wahrscheinlich ein "Speichern unter"-Fenster zeigt, wenn er nicht weiß, wie das Dokument angezeigt werden soll).

Es gibt zwei Multipart-Typen:

- `message`
  - : Eine Nachricht, die andere Nachrichten einkapselt. Dies kann zum Beispiel verwendet werden, um eine E-Mail darzustellen, die eine weitergeleitete Nachricht als Teil ihrer Daten enthält, oder um das Senden sehr großer Nachrichten in Teilen zu ermöglichen, als wären es mehrere Nachrichten. Beispiele umfassen `message/rfc822` (für weitergeleitete oder zitierte Nachrichten) und `message/partial`, um zu ermöglichen, eine große Nachricht automatisch in kleinere aufzuteilen, die vom Empfänger wieder zusammengesetzt werden können.
    [(Siehe Nachrichtentyp-Register bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#message)
- `multipart`
  - : Daten, die aus mehreren Komponenten bestehen, von denen jede einen anderen MIME-Typ haben kann. Beispiele umfassen `multipart/form-data` (für Daten, die mit der [`FormData`](/de/docs/Web/API/FormData) API erzeugt wurden) und `multipart/byteranges` (definiert in {{RFC(7233, "", "5.4.1")}} und wird mit {{Glossary("HTTP", "HTTP")}}s {{HTTPStatus(206)}} "Partial Content" Antwort verwendet, die zurückgegeben wird, wenn die abgerufenen Daten nur ein Teil des Inhalts sind, wie sie unter Verwendung des {{HTTPHeader("Range")}} Headers übermittelt werden).
    [(Siehe Multipart-Typ-Register bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#multipart)

## Wichtige MIME-Typen für Webentwickler

### application/octet-stream

Dies ist der Standard für Binärdateien. Da es _unbekannte Binärdatei_ bedeutet, führen Browser es normalerweise nicht aus oder fragen sogar, ob es ausgeführt werden soll. Sie behandeln es, als ob der {{HTTPHeader("Content-Disposition")}} Header auf `attachment` gesetzt wurde, und schlagen einen "Speichern unter"-Dialog vor.

### text/plain

Dies ist der Standard für Textdateien. Auch wenn es wirklich "unbekannte Textdatei" bedeutet, gehen Browser davon aus, dass sie sie anzeigen können.

> **Hinweis:** `text/plain` bedeutet nicht "jede Art von Textdaten."
> Wenn sie eine bestimmte Art von Textdaten erwarten, werden sie es wahrscheinlich nicht als passende Darstellung ansehen.
> Insbesondere wenn sie eine `text/plain` Datei von einem {{HTMLElement("link")}} Element herunterladen, das eine CSS-Datei deklariert, werden sie diese nicht als gültige CSS-Datei erkennen, wenn sie mit `text/plain` präsentiert wird. Es muss der CSS-Mime-Typ `text/css` verwendet werden.

### text/css

CSS-Dateien, die zum Stylen einer Webseite verwendet werden, **müssen** mit `text/css` gesendet werden. Wenn ein Server das `.css`-Suffix für CSS-Dateien nicht erkennt, kann es sein, dass er sie mit den MIME-Typen `text/plain` oder `application/octet-stream` sendet. In diesem Fall werden sie von den meisten Browsern nicht als CSS erkannt und ignoriert.

### text/html

Alle HTML-Inhalte sollten mit diesem Typ bereitgestellt werden. Alternative MIME-Typen für XHTML (wie `application/xhtml+xml`) sind heutzutage weitgehend nutzlos.

> [!NOTE]
> Verwenden Sie `application/xml` oder `application/xhtml+xml`, wenn Sie die strikten XML-Analyse-Regeln, [`<![CDATA[…]]>`](/de/docs/Web/API/CDATASection) Abschnitte oder Elemente, die nicht aus den HTML-/SVG-/MathML-Namensräumen stammen, wünschen.

### text/javascript

Laut dem [IANA Media Types registry](https://www.iana.org/assignments/media-types/media-types.xhtml#text), [RFC 9239](https://www.rfc-editor.org/rfc/rfc9239.html), und der [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/scripting.html#scriptingLanguages:text/javascript) sollte JavaScript-Inhalt immer mit dem MIME-Typ `text/javascript` bereitgestellt werden. Keine anderen MIME-Typen werden als gültig für JavaScript betrachtet, und die Verwendung eines MIME-Typs außer `text/javascript` kann dazu führen, dass Skripte nicht geladen oder ausgeführt werden.

Man kann JavaScript-Inhalte finden, die fälschlicherweise mit einem `charset`-Parameter als Teil des MIME-Typs bereitgestellt werden — als Versuch, den Zeichensatz für den Skriptinhalt anzugeben. Dieser `charset`-Parameter ist für JavaScript-Inhalte nicht gültig und führt in den meisten Fällen dazu, dass ein Skript nicht geladen wird.

#### Veraltete JavaScript MIME-Typen

Neben dem `text/javascript` MIME-Typ erlaubt der [MIME Sniffing Standard](https://mimesniff.spec.whatwg.org/) (die Definition, wie Browser MIME-Typen interpretieren und mit Inhalten umgehen sollten, die keinen gültigen haben), aus historischen Gründen auch, dass JavaScript mit einem der folgenden veralteten JavaScript MIME-Typen bereitgestellt wird:

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
> Auch wenn ein bestimmter {{Glossary("user_agent", "Benutzeragent")}} einige oder alle davon unterstützen mag, sollten Sie nur `text/javascript` verwenden. Es ist der einzige MIME-Typ, der jetzt und in Zukunft garantiert funktioniert.

### Bildtypen

Dateien, deren MIME-Typ `image` ist, enthalten Bilddaten. Der Subtyp gibt an, welches spezifische Bilddateiformat die Daten repräsentieren.

Die folgenden Bildtypen sind so häufig in Gebrauch, dass sie als _sicher_ für die Verwendung auf Webseiten angesehen werden:

- [`image/apng`](/de/docs/Web/Media/Guides/Formats/Image_types#apng_animated_portable_network_graphics): Animierte Portable Network Graphics (APNG)
- [`image/avif`](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image): AV1 Bilddateiformat (AVIF)
- [`image/gif`](/de/docs/Web/Media/Guides/Formats/Image_types#gif_graphics_interchange_format): Graphics Interchange Format (GIF)
- [`image/jpeg`](/de/docs/Web/Media/Guides/Formats/Image_types#jpeg_joint_photographic_experts_group_image): Joint Photographic Expert Group Image (JPEG)
- [`image/png`](/de/docs/Web/Media/Guides/Formats/Image_types#png_portable_network_graphics): Portable Network Graphics (PNG)
- [`image/svg+xml`](/de/docs/Web/Media/Guides/Formats/Image_types#svg_scalable_vector_graphics): Scalable Vector Graphics (SVG)
- [`image/webp`](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image): Web Picture Format (WEBP)

Der [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types#common_image_file_types) bietet Informationen und Empfehlungen darüber, wann die verschiedenen Bildformate verwendet werden sollen.

### Audio- und Videotypen

Wie bei Bildern schreibt HTML nicht vor, dass Webbrowser bestimmte Datei- und Codec-Typen für die {{HTMLElement("audio")}} und {{HTMLElement("video")}} Elemente unterstützen müssen. Daher ist es wichtig, Ihre Zielgruppe und die Bandbreite der Browser (und Versionen dieser Browser), die sie möglicherweise verwenden, zu berücksichtigen, wenn Sie den Dateityp und die Codecs für Medien auswählen.

Unser [media container formats guide](/de/docs/Web/Media/Guides/Formats/Containers) enthält eine Liste der Dateitypen, die von Webbrowsern üblicherweise unterstützt werden, einschließlich Informationen über deren spezielle Anwendungsfälle, eventuelle Nachteile und Kompatibilitätsinformationen sowie andere Details.

Die [audio codec](/de/docs/Web/Media/Guides/Formats/Audio_codecs) und [video codec](/de/docs/Web/Media/Guides/Formats/Video_codecs) Leitfäden listen die verschiedenen Codecs auf, die Webbrowser häufig unterstützen, und bieten Kompatibilitätsdetails zusammen mit technischen Informationen wie der Anzahl der unterstützten Audiokanäle, welche Art von Kompression verwendet wird und welche Bitraten usw., für die sie nützlich sind. Der [Leitfaden zu Codecs, die von WebRTC verwendet werden](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) erweitert dies, indem er speziell die von den großen Webbrowsern unterstützten Codecs behandelt, sodass Sie die Codecs wählen können, die am besten die Bandbreite der Browser abdecken, die Sie unterstützen möchten.

Was die MIME-Typen von Audio- oder Videodateien betrifft, geben diese typischerweise das Containerformat (Dateityp) an. Der optionale [codecs-Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter) kann dem MIME-Typ hinzugefügt werden, um weiter anzugeben, welche Codecs verwendet werden sollen und welche Optionen zur Kodierung der Medien verwendet wurden, wie Codec-Profil, -Level oder andere Informationen.

Weitere Informationen zu gängigen Medientypen finden Sie auf der Seite [Common MIME types](/de/docs/Web/HTTP/Guides/MIME_types/Common_types).

### multipart/form-data

Der `multipart/form-data` Typ kann verwendet werden, wenn die Werte eines ausgefüllten [HTML-Formulars](/de/docs/Learn_web_development/Extensions/Forms) vom Browser zum Server gesendet werden.

Als ein multipart Dokumentenformat besteht es aus verschiedenen Teilen, die durch eine Grenze abgegrenzt sind (ein mit einem doppelten Bindestrich `--` beginnender String). Jeder Teil ist eine eigene Entität mit eigenen HTTP-Headern, {{HTTPHeader("Content-Disposition")}} und {{HTTPHeader("Content-Type")}} für Dateihochladefelder.

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

Der `multipart/byteranges` MIME-Typ wird verwendet, um teilweise Antworten an den Browser zu senden.

Wenn der {{HTTPStatus("206", "206 Partial Content")}} Statuscode gesendet wird, zeigt dieser MIME-Typ an, dass das Dokument aus mehreren Teilen besteht, einen für jeden der angeforderten Bereiche. Wie andere multipart-Typen verwendet der {{HTTPHeader("Content-Type")}} einen `boundary`, um die Teile zu trennen. Jeder Teil hat einen {{HTTPHeader("Content-Type")}} Header mit seinem tatsächlichen Typ und einen {{HTTPHeader("Content-Range")}} des Bereichs, den er repräsentiert.

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

## Bedeutung der Einstellung des korrekten MIME-Typs

Einige Serverkonfigurationen können den zugeordneten MIME-Typ verwenden, um Optimierungen durchzuführen, wie Datei-Konkatenation, Kompression oder Caching. Siehe [h5bp/server-configs-apache](https://github.com/h5bp/server-configs-apache/blob/main/h5bp/web_performance/compression.conf) für ein Beispiel einer Apache-Konfiguration, die Dateien bestimmter MIME-Typen komprimiert.

Die meisten Webserver senden nicht erkannte Ressourcen als MIME-Typ `application/octet-stream`. Aus Sicherheitsgründen erlauben die meisten Browser nicht, eine benutzerdefinierte Standardaktion (wie "Open in Word") für solche Ressourcen festzulegen und zwingen den Benutzer, es auf der Festplatte zu speichern, um es zu verwenden.

Einige häufige falsche Serverkonfigurationen:

- RAR-komprimierte Dateien. In diesem Fall wäre der Idealfall der wahre Typ der Originaldateien; dies ist oft unmöglich, da .RAR-Dateien mehrere Ressourcen unterschiedlicher Typen enthalten können. In diesem Fall konfigurieren Sie den Server so, dass er `application/x-rar-compressed` sendet.
- Audio und Video. Nur Ressourcen mit dem richtigen MIME-Typ werden in {{HTMLElement("video")}} oder {{HTMLElement("audio")}} Elementen abgespielt. Stellen Sie sicher, dass Sie den richtigen [Medientyp für Audio und Video](/de/docs/Web/Media/Guides/Formats) angeben.
- Proprietäre Dateitypen. Ein spezifischer Typ wie `application/vnd.mspowerpoint` ermöglicht Benutzern, solche Dateien automatisch in der Präsentationssoftware ihrer Wahl zu öffnen.

## MIME sniffing

In der Abwesenheit eines MIME-Typs oder in bestimmten Fällen, in denen Browser glauben, dass sie inkorrekt sind, kann es sein, dass Browser _MIME sniffing_ durchführen — und den richtigen MIME-Typ durch Betrachten der Bytes der Ressource erraten.

Jeder Browser führt MIME sniffing unterschiedlich und unter verschiedenen Umständen durch. (Zum Beispiel wird Safari in der Datei-Erweiterung in der URL nachschauen, wenn der gesendete MIME-Typ ungeeignet ist.) Es gibt Sicherheitsbedenken, da einige MIME-Typen ausführbare Inhalte darstellen. Server können MIME sniffing verhindern, indem sie den {{HTTPHeader("X-Content-Type-Options")}} Header senden.

## Andere Methoden zur Übermittlung von Dokumenttyp-Informationen

MIME-Typen sind nicht die einzige Methode zur Übermittlung von Dokumenttyp-Informationen:

- Dateinamen-Suffixe werden manchmal verwendet, insbesondere auf Microsoft Windows. Nicht alle Betriebssysteme betrachten diese Suffixe als bedeutungsvoll (wie Linux und macOS), und es gibt keine Garantie, dass sie korrekt sind.
- Magic Numbers. Die Syntax verschiedener Formate erlaubt die Dateityp-Inferenz, indem ihre Byte-Struktur betrachtet wird. Zum Beispiel beginnen GIF-Dateien mit dem hexadezimalen Wert `47 49 46 38 39` (`GIF89`), und PNG-Dateien mit `89 50 4E 47` (`.PNG`). Nicht alle Dateitypen haben Magic Numbers, so dass dies auch nicht zu 100% zuverlässig ist.

## Siehe auch

- [Web-Medientechnologien](/de/docs/Web/Media)
- [Leitfaden zu Medientypen, die im Web verwendet werden](/de/docs/Web/Media/Guides/Formats)
- [Richtiges Konfigurieren von Server-MIME-Typen](/de/docs/Learn_web_development/Extensions/Server-side/Configuring_server_MIME_types)
