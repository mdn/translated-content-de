---
title: MIME-Typen (IANA-Medientypen)
slug: Web/HTTP/MIME_types
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

{{HTTPSidebar}}

Ein **Medientyp** (auch bekannt als **Multipurpose Internet Mail Extensions oder MIME-Typ**) gibt die Natur und das Format eines Dokuments, einer Datei oder einer Byte-Sammlung an. MIME-Typen sind in der IETF's {{RFC(6838)}} definiert und standardisiert.

Die [Internet Assigned Numbers Authority (IANA)](https://www.iana.org/) ist verantwortlich für alle offiziellen MIME-Typen, und Sie können die aktuellste und vollständigste Liste auf ihrer [Media Types](https://www.iana.org/assignments/media-types/media-types.xhtml) Seite finden.

> [!WARNING]
> Browser verwenden den MIME-Typ, _nicht die Dateierweiterung_, um zu bestimmen, wie eine URL verarbeitet wird. Daher ist es wichtig, dass Webserver den korrekten MIME-Typ im {{HTTPHeader("Content-Type")}} Header der Antwort senden.
> Wenn dies nicht richtig konfiguriert ist, werden Browser wahrscheinlich den Inhalt von Dateien falsch interpretieren, Websites werden nicht richtig funktionieren und heruntergeladene Dateien möglicherweise falsch behandelt.

## Struktur eines MIME-Typs

Ein MIME-Typ besteht am häufigsten aus zwei Teilen: einem _Typ_ und einem _Subtyp_, getrennt durch einen Schrägstrich (`/`) – ohne Leerzeichen dazwischen:

```plain
type/subtype
```

Der **_Typ_** repräsentiert die allgemeine Kategorie, in die der Datentyp fällt, wie `video` oder `text`.

Der **_Subtyp_** identifiziert die genaue Art von Daten des spezifizierten Typs, die der MIME-Typ repräsentiert. Zum Beispiel könnte für den MIME-Typ `text` der Subtyp `plain` (einfacher Text), `html` ({{Glossary("HTML", "HTML")}} Quellcode) oder `calendar` (für iCalendar/`.ics`) Dateien sein.

Jeder Typ hat seine eigene Menge möglicher Subtypen. Ein MIME-Typ hat immer sowohl einen Typ als auch einen Subtyp, niemals nur einen von beiden.

Ein optionaler **Parameter** kann hinzugefügt werden, um zusätzliche Details anzugeben:

```plain
type/subtype;parameter=value
```

Zum Beispiel können Sie für jeden MIME-Typ, dessen Haupttyp `text` ist, den optionalen `charset` Parameter hinzufügen, um den verwendeten Zeichensatz für die
Zeichen in den Daten anzugeben.
Wenn kein `charset` angegeben ist, ist der Standard {{Glossary("ASCII", "ASCII")}} (`US-ASCII`), es sei denn, dies wird durch die Einstellungen des {{Glossary("user_agent", "User-Agents")}} überschrieben.
Um eine UTF-8 Textdatei anzugeben, wird der MIME-Typ `text/plain;charset=UTF-8` verwendet.

MIME-Typen sind nicht case-sensitive, werden aber traditionell in Kleinbuchstaben geschrieben. Die Parameterwerte können case-sensitive sein.

### Typen

Es gibt zwei Klassen von Typ: **diskret** und **multipart**. Diskrete Typen sind Typen, die eine einzelne Datei oder ein Medium repräsentieren, wie eine einzelne Text- oder Musikdatei oder ein einzelnes Video. Ein Multipart-Typ repräsentiert ein Dokument, das aus mehreren Komponenten besteht, von denen jede ihren eigenen individuellen MIME-Typ haben kann; oder ein Multipart-Typ kann mehrere Dateien kapseln, die in einer Transaktion zusammen gesendet werden. Zum Beispiel werden Multipart-MIME-Typen verwendet, wenn mehrere Dateien an eine E-Mail angehängt werden.

#### Diskrete Typen

Die derzeit bei der IANA registrierten diskreten Typen sind:

- `application`
  - : Jede Art von Binärdaten, die nicht explizit in eine der anderen Typen fällt; entweder Daten, die auf irgendeine Weise ausgeführt oder interpretiert werden, oder Binärdaten, die eine bestimmte Anwendung oder Kategorie von Anwendungen benötigen, um verwendet zu werden. Allgemeine Binärdaten (oder Binärdaten, deren wahrer Typ unbekannt ist) sind `application/octet-stream`. Andere häufige Beispiele sind `application/pdf`, `application/pkcs8` und `application/zip`.
    [(Siehe application Typ-Registrierung bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#application)
- `audio`
  - : Audio- oder Musikdaten. Beispiele sind `audio/mpeg`, `audio/vorbis`.
    [(Siehe audio Typ-Registrierung bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#audio)
- `example`
  - : Reserviert für die Verwendung als Platzhalter in Beispielen, die zeigen, wie man MIME-Typen verwendet. Diese sollten niemals außerhalb von Beispiel-Code-Auflistungen und Dokumentationen verwendet werden. `example` kann auch als Subtyp verwendet werden; zum Beispiel kann in einem Beispiel, das sich mit der Arbeit mit Audio im Web beschäftigt, der MIME-Typ `audio/example` verwendet werden, um anzugeben, dass der Typ ein Platzhalter ist und bei der Verwendung des Codes in der realen Welt durch einen geeigneten ersetzt werden sollte.
- `font`
  - : Schriftart/Schriftdaten. Häufige Beispiele sind `font/woff`, `font/ttf` und `font/otf`.
    [(Siehe Schriftart Typ-Registrierung bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#font)
- `image`
  - : Bild- oder grafische Daten, einschließlich sowohl Bitmap- als auch Vektor-Standbilder sowie animierte Versionen von Standbildformaten wie animierte {{Glossary("GIF", "GIF")}} oder APNG. Häufige Beispiele sind `image/jpeg`, `image/png` und `image/svg+xml`.
    [(Siehe Bild Typ-Registrierung bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#image)
- `model`
  - : Modelldaten für ein 3D-Objekt oder eine Szene. Beispiele sind `model/3mf` und `model/vrml`.
    [(Siehe Modell Typ-Registrierung bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#model)
- `text`
  - : Nur-Text-Daten, einschließlich aller lesbaren Inhalte, Quellcode oder textueller Daten wie durch Komma getrennte Werte (CSV) formatierte Daten. Beispiele sind: `text/plain`, `text/csv` und `text/html`.
    [(Siehe Text Typ-Registrierung bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#text)
- `video`
  - : Video-Daten oder -Dateien, wie MP4-Filme (`video/mp4`).
    [(Siehe Video Typ-Registrierung bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#video)

Für Textdokumente ohne spezifischen Subtyp sollte `text/plain` verwendet werden. Ebenso sollte für Binärdokumente ohne spezifischen oder bekannten Subtyp `application/octet-stream` verwendet werden.

#### Multipart-Typen

**Multipart**-Typen zeigen eine Kategorie von Dokumenten, die in Einzelteile aufgeteilt sind, häufig mit unterschiedlichen MIME-Typen; sie können auch – insbesondere in E-Mail-Szenarien – verwendet werden, um mehrere, separate Dateien darzustellen, die alle Teil derselben Transaktion sind. Sie repräsentieren ein **komposites Dokument**.

Mit Ausnahme von `multipart/form-data`, das in der {{HTTPMethod("POST")}} Methode von [HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms) und `multipart/byteranges`, das mit {{HTTPStatus("206")}} `Partial Content` verwendet wird, um einen Teil eines Dokuments zu senden, behandelt HTTP Multipart-Dokumente nicht auf besondere Weise: Die Nachricht wird an den Browser übertragen (der wahrscheinlich ein "Speichern unter"-Fenster anzeigen wird, wenn er nicht weiß, wie das Dokument angezeigt werden soll).

Es gibt zwei Multipart-Typen:

- `message`
  - : Eine Nachricht, die andere Nachrichten einkapselt. Dies kann verwendet werden, um eine E-Mail darzustellen, die eine weitergeleitete Nachricht als Teil ihrer Daten enthält oder um das Senden sehr großer Nachrichten in Teilen zu ermöglichen, als ob es mehrere Nachrichten wären.
    Beispiele sind `message/rfc822` (für weitergeleitete oder beantwortete Nachrichten) und `message/partial`, um das Teilen einer großen Nachricht in kleinere zu ermöglichen, die vom Empfänger wieder zusammengefügt werden.
    [(Siehe Nachrichten Typ-Registrierung bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#message)
- `multipart`
  - : Daten, die aus mehreren Komponenten bestehen, die jeweils unterschiedliche MIME-Typen haben können.
    Beispiele sind `multipart/form-data` (für Daten, die mit der [`FormData`](/de/docs/Web/API/FormData) API erzeugt wurden) und `multipart/byteranges` (definiert in {{RFC(7233, "", "5.4.1")}} und verwendet mit {{Glossary("HTTP", "HTTP")}} {{HTTPStatus(206)}} "Partial Content"-Antwort, die zurückgegeben wird, wenn die abgerufenen Daten nur ein Teil des Inhalts sind, wie sie mittels {{HTTPHeader("Range")}} Header übermittelt werden).
    [(Siehe Multipart Typ-Registrierung bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#multipart)

## Wichtige MIME-Typen für Webentwickler

### application/octet-stream

Dies ist der Standard für Binärdateien. Da es _unbekannte Binärdatei_ bedeutet, führen Browser sie in der Regel nicht aus und fragen nicht einmal, ob sie ausgeführt werden soll. Sie behandeln es so, als wäre der {{HTTPHeader("Content-Disposition")}} Header auf `attachment` gesetzt, und schlagen ein "Speichern unter"-Dialog vor.

### text/plain

Dies ist der Standard für Textdateien. Selbst wenn es wirklich "unbekannte Textdatei" bedeutet, gehen Browser davon aus, dass sie angezeigt werden kann.

> **Hinweis:** `text/plain` bedeutet nicht "jede Art von Textdaten."
> Wenn sie eine bestimmte Art von Textdaten erwarten, werden sie es wahrscheinlich nicht als Übereinstimmung ansehen.
> Insbesondere wenn sie eine `text/plain` Datei aus einem {{HTMLElement("link")}} Element herunterladen, das eine CSS-Datei deklariert, werden sie dies nicht als gültige CSS-Datei erkennen, wenn sie mit `text/plain` präsentiert wird.
> Der CSS MIME-Typ `text/css` muss verwendet werden.

### text/css

CSS-Dateien, die zum Stylen einer Webseite verwendet werden, **müssen** mit `text/css` gesendet werden. Wenn ein Server das `.css` Suffix für CSS-Dateien nicht erkennt, kann er sie mit den MIME-Typen `text/plain` oder `application/octet-stream` senden. Wenn dies der Fall ist, werden sie von den meisten Browsern nicht als CSS erkannt und ignoriert.

### text/html

Alle HTML-Inhalte sollten mit diesem Typ bereitgestellt werden. Alternative MIME-Typen für XHTML (wie `application/xhtml+xml`) sind heutzutage meist nutzlos.

> [!NOTE]
> Verwenden Sie `application/xml` oder `application/xhtml+xml`, wenn Sie die strikten XML-Parsing-Regeln wünschen, [`<![CDATA[…]]>`](/de/docs/Web/API/CDATASection) Abschnitte oder Elemente, die nicht aus den HTML/SVG/MathML Namensräumen stammen.

### text/javascript

Gemäß dem [IANA Media Types Registry](https://www.iana.org/assignments/media-types/media-types.xhtml#text), [RFC 9239](https://www.rfc-editor.org/rfc/rfc9239.html) und der [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/scripting.html#scriptingLanguages:text/javascript), soll JavaScript-Inhalt immer mit dem MIME-Typ `text/javascript` bereitgestellt werden. Keine anderen MIME-Typen werden für JavaScript als gültig angesehen, und die Verwendung eines anderen MIME-Typs als `text/javascript` kann dazu führen, dass Skripte nicht geladen oder ausgeführt werden.

Es kann vorkommen, dass einige JavaScript-Inhalte fälschlicherweise mit einem `charset` Parameter als Teil des MIME-Typs bereitgestellt werden – ein Versuch, den Zeichensatz für den Skriptinhalt anzugeben. Dieser `charset` Parameter ist für JavaScript-Inhalt nicht gültig und führt in den meisten Fällen dazu, dass ein Skript nicht geladen wird.

#### Veraltete JavaScript MIME-Typen

Zusätzlich zum `text/javascript` MIME-Typ erlaubt der [MIME Sniffing Standard](https://mimesniff.spec.whatwg.org/)
(aus historischen Gründen ist die Definition, wie Browser MIME-Typen interpretieren und herausfinden sollten, was mit Inhalten zu tun ist, die keinen gültigen haben) auch, dass JavaScript mit einem der folgenden veralteten JavaScript MIME-Typen bereitgestellt wird:

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
> Auch wenn jeder {{Glossary("user_agent", "User-Agent")}} diese unterstützen kann, sollten Sie nur `text/javascript` verwenden.
> Es ist der einzige MIME-Typ, der jetzt und in Zukunft garantiert funktioniert.

### Bildtypen

Dateien, deren MIME-Typ `image` ist, enthalten Bilddaten. Der Subtyp gibt an, welches spezifische Bilddateiformat die Daten darstellen.

Die folgenden Bildtypen werden häufig genug verwendet, um als _sicher_ für die Verwendung auf Webseiten angesehen zu werden:

- [`image/apng`](/de/docs/Web/Media/Guides/Formats/Image_types#apng_animated_portable_network_graphics): Animated Portable Network Graphics (APNG)
- [`image/avif`](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image): AV1 Image File Format (AVIF)
- [`image/gif`](/de/docs/Web/Media/Guides/Formats/Image_types#gif_graphics_interchange_format): Graphics Interchange Format (GIF)
- [`image/jpeg`](/de/docs/Web/Media/Guides/Formats/Image_types#jpeg_joint_photographic_experts_group_image): Joint Photographic Expert Group image (JPEG)
- [`image/png`](/de/docs/Web/Media/Guides/Formats/Image_types#png_portable_network_graphics): Portable Network Graphics (PNG)
- [`image/svg+xml`](/de/docs/Web/Media/Guides/Formats/Image_types#svg_scalable_vector_graphics): Scalable Vector Graphics (SVG)
- [`image/webp`](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image): Web Picture format (WEBP)

Der [Bilddateityp- und Format-Leitfaden](/de/docs/Web/Media/Guides/Formats/Image_types#common_image_file_types) enthält Informationen und Empfehlungen, wann die verschiedenen Bildformate verwendet werden sollten.

### Audio- und Videotypen

Wie bei Bildern zwingt HTML nicht dazu, dass Webbrowser spezifische Dateien und Codecs für die {{HTMLElement("audio")}} und {{HTMLElement("video")}} Elemente unterstützen. Daher ist es wichtig, Ihre Zielgruppe und die Bandbreite der von ihnen verwendeten Browser (und deren Versionen) zu berücksichtigen, wenn Sie den Dateityp und die Codecs für Medien auswählen.

Unser [Leitfaden zu Mediencontainerformaten](/de/docs/Web/Media/Guides/Formats/Containers) bietet eine Liste von Dateitypen, die häufig von Webbrowsern unterstützt werden, einschließlich Informationen über ihre speziellen Anwendungsfälle, möglichen Nachteile und Kompatibilitätsinformationen sowie andere Details.

Die [Audio-Codec](/de/docs/Web/Media/Guides/Formats/Audio_codecs) und [Video-Codec](/de/docs/Web/Media/Guides/Formats/Video_codecs) Leitfäden listen die verschiedenen Codecs auf, die Webbrowser häufig unterstützen, und bieten Kompatibilitätsdetails zusammen mit technischen Informationen wie der Anzahl der unterstützten Audiokanäle, der verwendeten Kompression und den Bitraten, bei denen sie nützlich sind, usw. Der [Leitfaden zu den von WebRTC verwendeten Codecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) baut darauf auf, indem er speziell die von den wichtigsten Webbrowsern unterstützten Codecs behandelt, damit Sie die Codecs auswählen können, die die Bandbreite der von Ihnen unterstützen Browser am besten abdecken.

Für MIME-Typen von Audio- oder Videodateien geben sie in der Regel das Containerformat (Dateityp) an. Der optionale [Codecs Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter) kann dem MIME-Typ hinzugefügt werden, um weiter anzugeben, welche Codecs verwendet werden und welche Optionen verwendet wurden, um die Medien zu kodieren, wie Codec-Profil, Level oder andere solche Informationen.

Weitere Informationen zu gängigen Medientypen finden Sie auf der Seite [Häufige MIME-Typen](/de/docs/Web/HTTP/MIME_types/Common_types).

### multipart/form-data

Der Typ `multipart/form-data` kann verwendet werden, wenn die Werte eines abgeschlossenen [HTML-Formulars](/de/docs/Learn_web_development/Extensions/Forms) vom Browser an den Server gesendet werden.

Da es sich um ein multipartiges Dokumentenformat handelt, besteht es aus unterschiedlichen Teilen, die durch eine Grenze (ein Zeichenfolgenelement, das mit einem Doppeldrehen `--` beginnt) abgegrenzt sind. Jeder Teil ist seine eigene Einheit mit eigenen HTTP-Headern, {{HTTPHeader("Content-Disposition")}} und {{HTTPHeader("Content-Type")}} für Felder zum Hochladen von Dateien.

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

Der MIME-Typ `multipart/byteranges` wird verwendet, um partielle Antworten an den Browser zu senden.

Wenn der {{HTTPStatus("206", "206 Partial Content")}} Statuscode gesendet wird, zeigt dieser MIME-Typ an, dass das Dokument aus mehreren Teilen besteht, einer für jeden der
angeforderten Bereiche. Wie andere Multipart-Typen verwendet der {{HTTPHeader("Content-Type")}} eine `boundary`, um die Teile zu trennen.
Jedes Stück hat einen {{HTTPHeader("Content-Type")}} Header mit seinem tatsächlichen Typ und eine {{HTTPHeader("Content-Range")}} des Bereichs, den es repräsentiert.

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

## Bedeutung des Setzens des korrekten MIME-Typs

Einige Serverkonfigurationen können den zugeordneten MIME-Typ verwenden, um Optimierungen wie Dateikonkatenation, Kompression oder Caching durchzuführen. Siehe [h5bp/server-configs-apache](https://github.com/h5bp/server-configs-apache/blob/main/h5bp/web_performance/compression.conf) für ein Beispiel einer Apache-Konfiguration, die Dateien bestimmter MIME-Typen komprimiert.

Die meisten Webserver senden nicht erkannte Ressourcen als den MIME-Typ `application/octet-stream`.
Aus Sicherheitsgründen erlauben die meisten Browser nicht, eine benutzerdefinierte Standardaktion (wie "In Word öffnen") für solche Ressourcen festzulegen, und zwingen den Benutzer, sie auf der Festplatte zu speichern, um sie zu verwenden.

Einige häufige falsche Serverkonfigurationen:

- RAR-komprimierte Dateien.
  Ideal wäre der wahre Typ der Originaldateien; dies ist oft unmöglich, da .RAR-Dateien mehrere Ressourcen unterschiedlicher Typen halten können.
  In diesem Fall konfigurieren Sie den Server, um `application/x-rar-compressed` zu senden.
- Audio und Video.
  Nur Ressourcen mit dem korrekten MIME-Typ werden in {{HTMLElement("video")}} oder {{HTMLElement("audio")}} Elementen abgespielt.
  Stellen Sie sicher, dass Sie den richtigen [Medientyp für Audio und Video](/de/docs/Web/Media/Guides/Formats) angeben.
- Proprietäre Dateitypen.
  Ein spezifischer Typ wie `application/vnd.mspowerpoint` ermöglicht es Benutzern, solche Dateien automatisch in der Präsentationssoftware ihrer Wahl zu öffnen.

## MIME-Sniffing

In Ermangelung eines MIME-Typs oder in bestimmten Fällen, in denen Browser glauben, sie seien falsch, können Browser _MIME-Sniffing_ durchführen – das Erraten des korrekten MIME-Typen durch das Betrachten der Bytes der Ressource.

Jeder Browser führt MIME-Sniffing anders und unter verschiedenen Umständen durch. (Zum Beispiel betrachtet Safari die Dateierweiterung in der URL, wenn der gesendete MIME-Typ ungeeignet ist.) Es gibt Sicherheitsbedenken, da einige MIME-Typen ausführbare Inhalte darstellen. Server können MIME-Sniffing verhindern, indem sie den {{HTTPHeader("X-Content-Type-Options")}} Header senden.

## Andere Methoden zum Übermitteln von Dokumenttyp-Informationen

MIME-Typen sind nicht der einzige Weg, um Dokumenttyp-Informationen zu übermitteln:

- Dateinamensuffixe werden manchmal verwendet, besonders unter Microsoft Windows. Nicht alle Betriebssysteme betrachten diese Suffixe als bedeutungsvoll (wie Linux und macOS), und es gibt keine Garantie, dass sie korrekt sind.
- Magic Numbers. Die Syntax verschiedener Formate ermöglicht die Ableitung des Dateityps durch Betrachtung ihrer Byte-Struktur. Zum Beispiel beginnen GIF-Dateien mit dem 47 49 46 38 39 Hexadezimalwert (`GIF89`), und PNG-Dateien mit `89 50 4E 47` (`.PNG`). Nicht alle Dateitypen haben Magic Numbers, sodass dies auch nicht zu 100% zuverlässig ist.

## Siehe auch

- [Web-Medientechnologien](/de/docs/Web/Media)
- [Leitfaden zu Medientypen, die im Web verwendet werden](/de/docs/Web/Media/Guides/Formats)
- [Richtige Konfiguration der Server-MIME-Typen](/de/docs/Learn_web_development/Extensions/Server-side/Configuring_server_MIME_types)
