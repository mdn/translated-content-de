---
title: MIME-Typen (IANA-Medientypen)
slug: Web/HTTP/Basics_of_HTTP/MIME_types
l10n:
  sourceCommit: ef46a4ac6bfec3e33c9209244e7cb1a9206165d6
---

{{HTTPSidebar}}

Ein **Medientyp** (auch bekannt als **Multipurpose Internet Mail Extensions oder MIME-Typ**) zeigt die Art und das Format eines Dokuments, einer Datei oder einer Ansammlung von Bytes an.
MIME-Typen werden durch die IETF im {{RFC(6838)}} definiert und standardisiert.

Die [Internet Assigned Numbers Authority (IANA)](https://www.iana.org/) ist verantwortlich für alle offiziellen MIME-Typen, und Sie finden die aktuellste und vollständige Liste auf ihrer Seite [Media Types](https://www.iana.org/assignments/media-types/media-types.xhtml).

> [!WARNING]
> Browser verwenden den MIME-Typ, _nicht die Dateierweiterung_, um zu bestimmen, wie eine URL verarbeitet werden soll.
> Daher ist es wichtig, dass Webserver den korrekten MIME-Typ im {{HTTPHeader("Content-Type")}}-Header der Antwort senden.
> Wenn dies nicht richtig konfiguriert ist, werden Browser wahrscheinlich den Inhalt von Dateien falsch interpretieren, Seiten funktionieren nicht richtig, und heruntergeladene Dateien können falsch behandelt werden.

## Struktur eines MIME-Typs

Ein MIME-Typ besteht in der Regel aus nur zwei Teilen: einem _Typ_ und einem _Subtyp_, die durch einen Schrägstrich (`/`) getrennt sind — ohne Leerzeichen dazwischen:

```plain
type/subtype
```

Der **_Typ_** repräsentiert die allgemeine Kategorie, in die der Datentyp fällt, wie `video` oder `text`.

Der **_Subtyp_** identifiziert die genaue Art der Daten des angegebenen Typs, die der MIME-Typ darstellt.
Zum Beispiel könnte für den MIME-Typ `text` der Subtyp `plain` (unformatierter Text), `html` ({{Glossary("HTML")}}-Quellcode) oder `calendar` (für iCalendar/`.ics`-Dateien) sein.

Jeder Typ hat seine eigene Menge möglicher Subtypen. Ein MIME-Typ hat immer sowohl einen Typ als auch einen Subtyp, niemals nur einen davon.

Ein optionaler **Parameter** kann hinzugefügt werden, um weitere Details anzugeben:

```plain
type/subtype;parameter=value
```

Zum Beispiel kann für jeden MIME-Typ, dessen Haupttyp `text` ist, der optionale `charset`-Parameter hinzugefügt werden, um den verwendeten Zeichensatz für die Zeichen in den Daten zu spezifizieren.
Wenn kein `charset` angegeben ist, ist der Standardzeichensatz {{Glossary("ASCII")}} (`US-ASCII`), es sei denn, er wird durch die Einstellungen des {{Glossary("user agent", "Benutzeragenten")}} überschrieben.
Um eine UTF-8-Textdatei anzugeben, wird der MIME-Typ `text/plain;charset=UTF-8` verwendet.

MIME-Typen sind nicht case-sensitive, werden aber traditionell in Kleinbuchstaben geschrieben. Die Parameterwerte können case-sensitive sein.

### Typen

Es gibt zwei Klassen von Typen: **diskrete** und **mehrteilige**.
Diskrete Typen sind Typen, die eine einzelne Datei oder ein einzelnes Medium repräsentieren, wie eine einzelne Text- oder Musikdatei oder ein einzelnes Video.
Ein mehrteiliger Typ repräsentiert ein Dokument, das aus mehreren Komponenten besteht, die jeweils ihren eigenen MIME-Typ haben können; oder ein mehrteiliger Typ kann mehrere Dateien umfassen, die in einer Transaktion zusammen gesendet werden.
Zum Beispiel werden mehrteilige MIME-Typen verwendet, wenn mehrere Dateien an eine E-Mail angehängt werden.

#### Diskrete Typen

Die aktuell bei der IANA registrierten diskreten Typen sind:

- `application`
  - : Jede Art von Binärdaten, die nicht explizit in einen der anderen Typen fällt;
    entweder Daten, die irgendwie ausgeführt oder interpretiert werden, oder Binärdaten, die eine spezifische Anwendung oder Kategorie von Anwendungen benötigen.
    Generische Binärdaten (oder Binärdaten unbekannten Typs) sind `application/octet-stream`.
    Weitere häufige Beispiele sind `application/pdf`, `application/pkcs8` und `application/zip`.
    [(Siehe Anwendungsregistrierungstyp bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#application)
- `audio`
  - : Audio- oder Musikdaten. Beispiele sind `audio/mpeg` und `audio/vorbis`.
    [(Siehe Audioregistrierungstyp bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#audio)
- `example`
  - : Reserviert zur Verwendung als Platzhalter in Beispielen zur Darstellung der Verwendung von MIME-Typen.
    Diese sollten niemals außerhalb von Beispielcodeauflistungen und Dokumentationen verwendet werden.
    `example` kann auch als Subtyp verwendet werden;
    zum Beispiel in einem Beispiel, das die Arbeit mit Audio im Web beschreibt, kann der MIME-Typ `audio/example` verwendet werden, um anzuzeigen, dass der Typ ein Platzhalter ist und durch einen geeigneten Typ ersetzt werden sollte, wenn der Code in der realen Welt verwendet wird.
- `font`
  - : Schriftarten-/Schriftschnittdaten. Häufige Beispiele sind `font/woff`, `font/ttf` und `font/otf`.
    [(Siehe Schriftarttypregistrierung bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#font)
- `image`
  - : Bild- oder Grafikdaten, einschließlich sowohl Bitmap- als auch Vektor-Standbildern sowie animierten Versionen von Standbildformaten wie animierten {{Glossary("GIF")}} oder APNG.
    Häufige Beispiele sind `image/jpeg`, `image/png` und `image/svg+xml`.
    [(Siehe Bildregistrierungstyp bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#image)
- `model`
  - : Modelldaten für ein 3D-Objekt oder eine Szene. Beispiele sind `model/3mf` und `model/vrml`.
    [(Siehe Modellregistrierungstyp bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#model)
- `text`
  - : Nur-Text-Daten einschließlich jeglicher menschenlesbarer Inhalte, Quellcode oder Textdaten wie durch Kommas getrennte Werte (CSV) formatierte Daten.
    Beispiele sind: `text/plain`, `text/csv` und `text/html`.
    [(Siehe Textregistrierungstyp bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#text)
- `video`
  - : Videodaten oder Dateien, wie MP4-Filme (`video/mp4`).
    [(Siehe Videoregistrierungstyp bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#video)

Für Textdokumente ohne spezifischen Subtyp sollte `text/plain` verwendet werden.
Ähnlich sollte für Binärdokumente ohne spezifischen oder bekannten Subtyp `application/octet-stream` verwendet werden.

#### Mehrteilige Typen

**Mehrteilige** Typen zeigen eine Kategorie von Dokumenten an, die in Stücke zerlegt ist, oft mit unterschiedlichen MIME-Typen; sie können auch — besonders in E-Mail-Szenarien — verwendet werden, um mehrere, separate Dateien darzustellen, die alle Teil der gleichen Transaktion sind. Sie repräsentieren ein **komplexes Dokument**.

Mit Ausnahme von `multipart/form-data`, das in der {{HTTPMethod("POST")}}-Methode von [HTML Formularen](/de/docs/Learn/Forms) und `multipart/byteranges` verwendet wird, das mit {{HTTPStatus("206")}} `Partial Content` verwendet wird, um Teile eines Dokuments zu senden, behandelt HTTP mehrteilige Dokumente nicht auf besondere Weise: die Nachricht wird an den Browser übermittelt (der wahrscheinlich
ein "Speichern unter"-Fenster anzeigt, wenn er nicht weiß, wie das Dokument angezeigt werden soll).

Es gibt zwei mehrteilige Typen:

- `message`
  - : Eine Nachricht, die andere Nachrichten kapselt. Dies kann beispielsweise verwendet werden, um eine E-Mail darzustellen, die eine weitergeleitete Nachricht als Teil ihrer Daten enthält, oder um zu ermöglichen, dass sehr große Nachrichten in Abschnitten gesendet werden, als ob sie mehrere Nachrichten wären.
    Beispiele sind `message/rfc822` (für weitergeleitete oder zitierte Nachrichten) und `message/partial`, um eine große Nachricht automatisch in kleinere zu unterteilen, die vom Empfänger wieder zusammengesetzt werden.
    [(Siehe Nachrichtenregistrierungstyp bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#message)
- `multipart`
  - : Daten, die aus mehreren Komponenten bestehen, die jeweils unterschiedliche MIME-Typen haben können.
    Beispiele sind `multipart/form-data` (für Daten, die mit der {{domxref("FormData")}}-API erzeugt wurden) und `multipart/byteranges` (definiert in {{RFC(7233, "", "5.4.1")}} und verwendet mit {{Glossary("HTTP")}}s {{HTTPStatus(206)}}
    "Partial Content" Antwort, wenn die abgerufenen Daten nur Teil des Inhalts sind, wie es mit dem {{HTTPHeader("Range")}}-Header geliefert wird).
    [(Siehe Mehrteilregistrierungstyp bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#multipart)

## Wichtige MIME-Typen für Webentwickler

### application/octet-stream

Dies ist der Standard für Binärdateien. Da dies _unbekannte Binärdatei_ bedeutet, führen Browser sie normalerweise nicht aus und fragen auch nicht, ob sie ausgeführt werden soll. Sie behandeln sie so, als wäre der {{HTTPHeader("Content-Disposition")}}-Header auf `attachment` gesetzt und schlagen ein "Speichern unter"-Dialog vor.

### text/plain

Dies ist der Standard für Textdateien. Selbst wenn es wirklich "unbekannte Textdatei" bedeutet, gehen Browser davon aus, dass sie angezeigt werden kann.

> **Hinweis:** `text/plain` bedeutet nicht "jede Art von Textdaten".
> Wenn sie eine bestimmte Art von Textdaten erwarten, werden sie es wahrscheinlich nicht als Übereinstimmung betrachten.
> Insbesondere, wenn sie eine `text/plain`-Datei von einem {{HTMLElement("link")}}-Element herunterladen, das eine CSS-Datei deklariert, werden sie es nicht als gültige CSS-Datei erkennen, wenn sie mit `text/plain` präsentiert wird.
> Der CSS-Mime-Typ `text/css` muss verwendet werden.

### text/css

CSS-Dateien, die zur Gestaltung einer Webseite verwendet werden, **müssen** mit `text/css` gesendet werden.
Wenn ein Server die `.css`-Endung für CSS-Dateien nicht erkennt, kann er sie mit `text/plain` oder `application/octet-stream`-MIME-Typen senden.
Wenn dies der Fall ist, werden sie von den meisten Browsern nicht als CSS erkannt und ignoriert.

### text/html

Alle HTML-Inhalte sollten mit diesem Typ bereitgestellt werden. Alternative MIME-Typen für XHTML (wie `application/xhtml+xml`) sind heutzutage größtenteils unnötig.

> [!NOTE]
> Verwenden Sie `application/xml` oder `application/xhtml+xml`, wenn Sie die strikten XML-Parsing-Regeln, [`<![CDATA[…]]>`](/de/docs/Web/API/CDATASection)-Sektionen oder Elemente benötigen, die nicht aus den HTML/SVG/MathML-Namensräumen stammen.

### text/javascript

Laut [IANA Media Types registry](https://www.iana.org/assignments/media-types/media-types.xhtml#text), [RFC 9239](https://www.rfc-editor.org/rfc/rfc9239.html) und der [HTML specification](https://html.spec.whatwg.org/multipage/scripting.html#scriptingLanguages:text/javascript) sollte JavaScript-Inhalt immer mit dem MIME-Typ `text/javascript` bereitgestellt werden.
Keine anderen MIME-Typen werden für JavaScript als gültig betrachtet, und die Verwendung von einem anderen MIME-Typ als `text/javascript` kann dazu führen, dass Skripte nicht geladen oder ausgeführt werden.

Sie können feststellen, dass einige JavaScript-Inhalte fälschlicherweise mit einem `charset`-Parameter als Teil des MIME-Typs bereitgestellt werden — ein Versuch, den Zeichensatz für den Skriptinhalt zu spezifizieren.
Dieser `charset`-Parameter ist für JavaScript-Inhalte nicht gültig und führt in den meisten Fällen dazu, dass ein Skript nicht geladen wird.

#### Alte JavaScript-MIME-Typen

Zusätzlich zum MIME-Typ `text/javascript` erlaubt der [MIME Sniffing Standard](https://mimesniff.spec.whatwg.org/)
(die Definition, wie Browser MIME-Typen interpretieren und herausfinden sollten, was mit Inhalten zu tun ist, die keinen gültigen haben) aus historischen Gründen auch, dass JavaScript mit einem der folgenden alten JavaScript-MIME-Typen bereitgestellt wird:

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
> Auch wenn ein bestimmter {{Glossary("user agent")}} einige oder alle dieser Typen unterstützen kann, sollten Sie nur `text/javascript` verwenden.
> Es ist der einzige MIME-Typ, der jetzt und in Zukunft garantiert funktioniert.

### Bildtypen

Dateien, deren MIME-Typ `image` ist, enthalten Bilddaten.
Der Subtyp gibt an, welches spezifische Bilddateiformat die Daten darstellen.

Die folgenden Bildtypen werden so häufig verwendet, dass sie als _sicher_ für die Verwendung auf Webseiten gelten:

- [`image/apng`](/de/docs/Web/Media/Formats/Image_types#apng_animated_portable_network_graphics): Animated Portable Network Graphics (APNG)
- [`image/avif`](/de/docs/Web/Media/Formats/Image_types#avif_image) : AV1 Image File Format (AVIF)
- [`image/gif`](/de/docs/Web/Media/Formats/Image_types#gif_graphics_interchange_format): Graphics Interchange Format (GIF)
- [`image/jpeg`](/de/docs/Web/Media/Formats/Image_types#jpeg_joint_photographic_experts_group_image): Joint Photographic Expert Group image (JPEG)
- [`image/png`](/de/docs/Web/Media/Formats/Image_types#png_portable_network_graphics): Portable Network Graphics (PNG)
- [`image/svg+xml`](/de/docs/Web/Media/Formats/Image_types#svg_scalable_vector_graphics): Scalable Vector Graphics (SVG)
- [`image/webp`](/de/docs/Web/Media/Formats/Image_types#webp_image): Web Picture format (WEBP)

Der [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Formats/Image_types#common_image_file_types) bietet Informationen und Empfehlungen zur Verwendung der verschiedenen Bildformate.

### Audio- und Videotypen

Wie bei Bildern schreibt HTML nicht vor, dass Webbrowser bestimmte Datei- und Codec-Typen für die {{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elemente unterstützen müssen. Daher ist es wichtig, Ihre Zielgruppe und die Bandbreite der Browser (und Versionen dieser Browser) zu berücksichtigen, die sie möglicherweise verwenden, wenn Sie den Datei- und Codec-Typ für Medien auswählen.

Unser [Leitfaden zu Mediencontainerformaten](/de/docs/Web/Media/Formats/Containers) bietet eine Liste der Dateitypen, die von Webbrowsern häufig unterstützt werden, einschließlich Informationen darüber, welche speziellen Anwendungsfälle sie haben, welche Nachteile sie haben und über Kompatibilitätsinformationen sowie weitere Details.

Die [Audio-Codec](/de/docs/Web/Media/Formats/Audio_codecs) und [Video-Codec](/de/docs/Web/Media/Formats/Video_codecs) Leitfäden listen die verschiedenen Codecs auf, die Webbrowser oft unterstützen, und bieten Kompatibilitätsdetails sowie technische Informationen, wie viele Audiokanäle sie unterstützen, welche Art von Kompression verwendet wird und welche Bitraten und so weiter nützlich sind.
Der Leitfaden zu [Codecs, die von WebRTC verwendet werden](/de/docs/Web/Media/Formats/WebRTC_codecs) erweitert dies, indem er speziell die von den großen Webbrowsern unterstützten Codecs behandelt, sodass Sie die Codecs auswählen können, die am besten die Bandbreite der Browser abdecken, die Sie unterstützen möchten.

Was die MIME-Typen von Audio- oder Videodateien betrifft, so geben sie typischerweise das Containerformat (Dateityp) an.
Der optionale [Codecs-Parameter](/de/docs/Web/Media/Formats/codecs_parameter) kann dem MIME-Typ hinzugefügt werden, um weiter anzugeben, welche Codecs verwendet werden sollen und welche Optionen zum Kodieren der Medien verwendet wurden, wie Codec-Profil, Level oder andere solche Informationen.

Weitere Informationen zu gängigen Medientypen finden Sie auf der Seite [Gängige MIME-Typen](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types).

### multipart/form-data

Der Typ `multipart/form-data` kann verwendet werden, wenn die Werte eines ausgefüllten [HTML-Formulars](/de/docs/Learn/Forms) vom Browser an den Server gesendet werden.

Als Dokumentenformat in mehreren Teilen besteht es aus verschiedenen Teilen, die durch eine Grenze (eine Zeichenfolge, die mit einem doppelten Bindestrich `--` beginnt) begrenzt sind.
Jeder Teil ist eine eigene Einheit mit ihren eigenen HTTP-Headern, {{HTTPHeader("Content-Disposition")}} und {{HTTPHeader("Content-Type")}} für Datei-Upload-Felder.

```http
Content-Type: multipart/form-data; boundary=aBoundaryString
(weitere mit dem mehrteiligen Dokument als Ganzes verbundene Header)

--aBoundaryString
Content-Disposition: form-data; name="myFile"; filename="img.jpg"
Content-Type: image/jpeg

(daten)
--aBoundaryString
Content-Disposition: form-data; name="myField"

(daten)
--aBoundaryString
(weitere Unterteile)
--aBoundaryString--
```

Das folgende `<form>`:

```html
<form
  action="http://localhost:8000/"
  method="post"
  enctype="multipart/form-data">
  <label>Name: <input name="myTextField" value="Test" /></label>
  <label><input type="checkbox" name="myCheckBox" /> Markieren</label>
  <label>
    Datei hochladen: <input type="file" name="myFile" value="test.txt" />
  </label>
  <button>Datei senden</button>
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

Einfache Datei.
-----------------------------8721656041911415653955004498--
```

### multipart/byteranges

Der MIME-Typ `multipart/byteranges` wird verwendet, um teilweise Antworten an den Browser zu senden.

Wenn der {{HTTPStatus("206", "206 Partial Content")}} Statuscode gesendet wird, gibt dieser MIME-Typ an, dass das Dokument aus mehreren Teilen besteht, einer für jeden der angeforderten Bereiche. Wie bei anderen mehrteiligen Typen verwendet der {{HTTPHeader("Content-Type")}} einen `boundary`, um die Teile zu trennen.
Jedes Stück hat einen {{HTTPHeader("Content-Type")}}-Header mit seinem tatsächlichen Typ und einen {{HTTPHeader("Content-Range")}} des Bereichs, den es repräsentiert.

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

## Bedeutung der richtigen Einstellung des MIME-Typs

Einige Serverkonfigurationen verwenden den zugeordneten MIME-Typ, um Optimierungen durchzuführen, wie Dateikombination, Komprimierung oder Caching. Siehe [h5bp/server-configs-apache](https://github.com/h5bp/server-configs-apache/blob/main/h5bp/web_performance/compression.conf) für ein Beispiel einer Apache-Konfiguration, die Dateien bestimmter MIME-Typen komprimiert.

Die meisten Webserver senden nicht erkannte Ressourcen als den MIME-Typ `application/octet-stream`.
Aus Sicherheitsgründen erlauben die meisten Browser nicht, eine benutzerdefinierte Standardaktion (wie "Öffnen in Word") für solche Ressourcen festzulegen, was den Benutzer zwingt, sie auf die Festplatte zu speichern, um sie zu verwenden.

Einige häufige falsche Serverkonfigurationen:

- RAR-komprimierte Dateien.
  In diesem Fall wäre der ideale Typ der wahre Typ der ursprünglichen Dateien; dies ist jedoch oft unmöglich, da .RAR-Dateien mehrere Ressourcen unterschiedlicher Typen enthalten können.
  In diesem Fall konfigurieren Sie den Server so, dass er `application/x-rar-compressed` sendet.
- Audio und Video.
  Nur Ressourcen mit dem richtigen MIME-Typ werden in {{HTMLElement("video")}}- oder {{HTMLElement("audio")}}-Elementen abgespielt.
  Stellen Sie sicher, dass Sie den korrekten [Medientyp für Audio und Video](/de/docs/Web/Media/Formats) angeben.
- Proprietäre Dateitypen.
  Ein spezifischer Typ wie `application/vnd.mspowerpoint` ermöglicht es Benutzern, solche Dateien automatisch in der Präsentationssoftware ihrer Wahl zu öffnen.

## MIME-Sniffing

In Abwesenheit eines MIME-Typs oder in bestimmten Fällen, in denen Browser glauben, dass sie falsch sind, können Browser _MIME-Sniffing_ durchführen — das Erraten des korrekten MIME-Typs durch Betrachten der Bytes der Ressource.

Jeder Browser führt MIME-Sniffing anders und unter unterschiedlichen Umständen aus.
(Zum Beispiel schaut Safari auf die Dateierweiterung in der URL, wenn der gesendete MIME-Typ ungeeignet ist.)
Es gibt Sicherheitsbedenken, da einige MIME-Typen ausführbare Inhalte darstellen.
Server können MIME-Sniffing verhindern, indem sie den {{HTTPHeader("X-Content-Type-Options")}}-Header senden.

## Andere Methoden zur Übermittlung von Dokumenttypen

MIME-Typen sind nicht die einzigen Möglichkeiten, um Informationen zum Dokumenttyp zu übermitteln:

- Dateiendungen werden manchmal verwendet, insbesondere unter Microsoft Windows.
  Nicht alle Betriebssysteme betrachten diese Endungen als bedeutungsvoll (wie Linux und macOS), und es gibt keine Garantie, dass sie korrekt sind.
- Magic Numbers. Die Syntax verschiedener Formate ermöglicht die Zuordnung von Dateitypen, indem ihre Byte-Struktur betrachtet wird.
  Zum Beispiel beginnen GIF-Dateien mit dem Hexadezimalwert `47 49 46 38 39` (`GIF89`), und PNG-Dateien mit `89 50 4E 47` (`.PNG`).
  Nicht alle Dateitypen haben Magic Numbers, daher ist dies auch nicht 100% zuverlässig.

## Siehe auch

- [Web-Medientechnologien](/de/docs/Web/Media)
- [Leitfaden zu im Web verwendeten Medientypen](/de/docs/Web/Media/Formats)
- [Korrekten Server-MIME-Typen konfigurieren](/de/docs/Learn/Server-side/Configuring_server_MIME_types)
