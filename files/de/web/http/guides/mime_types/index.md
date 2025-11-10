---
title: Medientypen (MIME-Typen)
short-title: Media types
slug: Web/HTTP/Guides/MIME_types
l10n:
  sourceCommit: 79fdc26fea835d65c9361541bb8ab1896f307475
---

Ein **Medientyp** (früher bekannt als **Multipurpose Internet Mail Extensions oder MIME-Typ**) gibt die Art und das Format eines Dokuments, einer Datei oder einer Sammlung von Bytes an. MIME-Typen sind im RFC der IETF definiert und standardisiert {{RFC(6838)}}.

Die [Internet Assigned Numbers Authority (IANA)](https://www.iana.org/) ist für alle offiziellen MIME-Typen verantwortlich, und Sie finden die aktuellste und vollständigste Liste auf ihrer [Media Types](https://www.iana.org/assignments/media-types/media-types.xhtml) Seite.

> [!WARNING]
> Browser verwenden den MIME-Typ, _nicht die Dateiendung_, um zu bestimmen, wie eine URL verarbeitet werden soll. Daher ist es wichtig, dass Webserver den korrekten MIME-Typ im {{HTTPHeader("Content-Type")}}-Header der Antwort senden. Wenn dies nicht korrekt konfiguriert ist, werden Browser wahrscheinlich die Inhalte von Dateien falsch interpretieren, Websites funktionieren nicht richtig, und heruntergeladene Dateien könnten falsch behandelt werden.

## Struktur eines MIME-Typs

Ein MIME-Typ besteht am häufigsten aus nur zwei Teilen: einem _Typ_ und einem _Subtyp_, getrennt durch einen Schrägstrich (`/`) — ohne Leerzeichen dazwischen:

```plain
type/subtype
```

Der **_Typ_** repräsentiert die allgemeine Kategorie, in die der Datentyp fällt, wie `video` oder `text`.

Der **_Subtyp_** identifiziert die genaue Art der Daten des angegebenen Typs, die der MIME-Typ repräsentiert. Beispielsweise könnte der Subtyp für den MIME-Typ `text` `plain` (reiner Text), `html` ({{Glossary("HTML", "HTML")}} Quellcode) oder `calendar` (für iCalendar/`.ics`) Dateien sein.

Jeder Typ hat seine eigenen möglichen Subtypen. Ein MIME-Typ hat immer sowohl einen Typ als auch einen Subtyp, niemals nur einen oder den anderen.

Ein optionaler **Parameter** kann hinzugefügt werden, um zusätzliche Details bereitzustellen:

```plain
type/subtype;parameter=value
```

Zum Beispiel kann für jeden MIME-Typ, dessen Haupttyp `text` ist, der optionale `charset`-Parameter hinzugefügt werden, um den Zeichensatz anzugeben, der für die Zeichen in den Daten verwendet wird. Wenn kein `charset` angegeben ist, ist standardmäßig {{Glossary("ASCII", "ASCII")}} (`US-ASCII`) vorgesehen, sofern nicht von den Einstellungen des {{Glossary("user_agent", "Benutzeragenten")}} überschrieben. Um eine UTF-8-Textdatei anzugeben, wird der MIME-Typ `text/plain;charset=UTF-8` verwendet.

MIME-Typen sind nicht case-sensitive, werden jedoch traditionell in Kleinbuchstaben geschrieben. Die Parameterwerte können case-sensitive sein.

### Typen

Es gibt zwei Typenklassen: **diskret** und **multipart**. Diskrete Typen sind Typen, die eine einzelne Datei oder ein einzelnes Medium repräsentieren, wie eine einzelne Text- oder Musikdatei oder ein einzelnes Video. Ein Multipart-Typ repräsentiert ein Dokument, das aus mehreren Komponenten besteht, von denen jede ihren eigenen individuellen MIME-Typ haben kann; oder, ein Multipart-Typ kann mehrere Dateien kapseln, die in einer Transaktion zusammen gesendet werden. Multipart-MIME-Typen werden beispielsweise beim Anhängen mehrerer Dateien an eine E-Mail verwendet.

#### Diskrete Typen

Die derzeit bei der IANA registrierten diskreten Typen sind:

- `application`
  - : Jede Art von Binärdaten, die nicht ausdrücklich in einen der anderen Typen fällt; entweder Daten, die auf irgendeine Weise ausgeführt oder interpretiert werden, oder Binärdaten, die eine spezifische Anwendung oder Kategorie einer Anwendung zur Verwendung benötigen. Generische Binärdaten (oder Binärdaten, deren wahrer Typ unbekannt ist) sind `application/octet-stream`. Weitere häufige Beispiele sind `application/pdf`, `application/pkcs8` und `application/zip`. [(Siehe Applikationstyp-Register bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#application)
- `audio`
  - : Audio- oder Musikdaten. Beispiele umfassen `audio/mpeg`, `audio/vorbis`. [(Siehe Audio-Typ-Register bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#audio)
- `example`
  - : Reserviert für die Verwendung als Platzhalter in Beispielen, die zeigen, wie MIME-Typen verwendet werden. Diese sollten niemals außerhalb von Beispielcode-Auflistungen und Dokumentationen verwendet werden. `example` kann auch als Subtyp verwendet werden; beispielsweise kann in einem Beispiel, das sich mit Audio im Web befasst, der MIME-Typ `audio/example` verwendet werden, um anzuzeigen, dass der Typ ein Platzhalter ist und durch einen geeigneten ersetzt werden sollte, wenn der Code in der realen Welt verwendet wird.
- `font`
  - : Schrift-/Schriftartendaten. Häufige Beispiele sind `font/woff`, `font/ttf` und `font/otf`. [(Siehe Schriftarttyp-Register bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#font)
- `image`
  - : Bild- oder grafische Daten, einschließlich sowohl Bitmap- als auch Vektor-Standbilder sowie animierte Versionen von Standbildformaten wie animierte {{Glossary("GIF", "GIF")}} oder APNG. Häufige Beispiele sind `image/jpeg`, `image/png` und `image/svg+xml`. [(Siehe Bildtyp-Register bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#image)
- `model`
  - : Modelldaten für ein 3D-Objekt oder eine Szene. Beispiele beinhalten `model/3mf` und `model/vrml`. [(Siehe Modelltyp-Register bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#model)
- `text`
  - : Nur-Text-Daten, einschließlich aller menschenlesbaren Inhalte, Quellcodes oder Textdaten wie durch Komma getrennte Werte (CSV) formatierte Daten. Beispiele umfassen: `text/plain`, `text/csv` und `text/html`. [(Siehe Texttyp-Register bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#text)
- `video`
  - : Video-Daten oder -Dateien, wie MP4-Filme (`video/mp4`). [(Siehe Videotyp-Register bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#video)

Für Textdokumente ohne spezifischen Subtyp sollte `text/plain` verwendet werden. Ebenso sollte für Binärdokumente ohne spezifischen oder bekannten Subtyp `application/octet-stream` verwendet werden.

#### Multipart-Typen

**Multipart**-Typen kennzeichnen eine Kategorie von Dokumenten, die in Stücke unterteilt sind, oft mit unterschiedlichen MIME-Typen; sie können auch — insbesondere in E-Mail-Szenarien — verwendet werden, um mehrere, separate Dateien darzustellen, die alle Teil derselben Transaktion sind. Sie repräsentieren ein **zusammengesetztes Dokument**.

Mit Ausnahme von `multipart/form-data`, das in der {{HTTPMethod("POST")}} Methode von [HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms) verwendet wird, und `multipart/byteranges`, das mit {{HTTPStatus("206")}} `Partial Content` verwendet wird, um einen Teil eines Dokuments zu senden, behandelt HTTP Multipart-Dokumente nicht auf besondere Weise: die Nachricht wird an den Browser übertragen (der wahrscheinlich ein "Speichern unter"-Fenster anzeigen wird, wenn er nicht weiß, wie er das Dokument anzeigen soll).

Es gibt zwei Multipart-Typen:

- `message`
  - : Eine Nachricht, die andere Nachrichten kapselt. Dies kann beispielsweise verwendet werden, um eine E-Mail darzustellen, die eine weitergeleitete Nachricht als Teil ihrer Daten enthält, oder um das Senden sehr großer Nachrichten in Teilen zu ermöglichen, als ob es sich um mehrere Nachrichten handelt. Beispiele beinhalten `message/rfc822` (für weitergeleitete oder zitierte Nachrichten) und `message/partial`, um automatisch eine große Nachricht in kleinere zu zerlegen, die vom Empfänger wieder zusammengesetzt werden. [(Siehe Nachrichtentyp-Register bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#message)
- `multipart`
  - : Daten, die aus mehreren Komponenten bestehen, die jeweils unterschiedliche MIME-Typen haben können. Beispiele beinhalten `multipart/form-data` (für Daten, die mit der [`FormData`](/de/docs/Web/API/FormData) API erzeugt wurden) und `multipart/byteranges` (definiert in {{RFC(7233, "", "5.4.1")}} und verwendet mit {{Glossary("HTTP", "HTTP")}}'s {{HTTPStatus(206)}} "Partial Content"-Antwort, wenn die abgerufenen Daten nur ein Teil des Inhalts sind, wie er unter Verwendung des {{HTTPHeader("Range")}}-Headers geliefert wird). [(Siehe Multipart-Typ-Register bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#multipart)

## Wichtige MIME-Typen für Webentwickler

### application/octet-stream

Dies ist der Standard für Binärdateien. Da es _unbekannte Binär_-Datei bedeutet, führen Browser es normalerweise nicht aus oder fragen sogar, ob es ausgeführt werden soll. Sie behandeln es so, als ob der {{HTTPHeader("Content-Disposition")}}-Header auf `attachment` gesetzt wäre, und schlagen einen "Speichern unter"-Dialog vor.

### text/plain

Dies ist der Standard für Textdateien. Auch wenn es wirklich "unbekannte Textdatei" bedeutet, gehen Browser davon aus, dass sie diese anzeigen können.

> [!NOTE]
> `text/plain` bedeutet nicht "jede Art von Textdaten". Wenn sie eine bestimmte Art von Textdaten erwarten, betrachten sie es wahrscheinlich nicht als Übereinstimmung. Insbesondere wenn sie eine `text/plain` Datei von einem {{HTMLElement("link")}} Element herunterladen, das eine CSS-Datei deklariert, erkennen sie sie nicht als gültige CSS-Datei, wenn sie mit `text/plain` präsentiert wird. Der CSS-MIME-Typ `text/css` muss verwendet werden.

### text/css

CSS-Dateien, die zur Gestaltung einer Webseite verwendet werden, **müssen** mit `text/css` gesendet werden. Wenn ein Server das `.css`-Suffix für CSS-Dateien nicht erkennt, kann er sie mit den MIME-Typen `text/plain` oder `application/octet-stream` senden. In diesem Fall werden sie von den meisten Browsern nicht als CSS erkannt und ignoriert.

### text/html

Alle HTML-Inhalte sollten mit diesem Typ bereitgestellt werden. Alternative MIME-Typen für XHTML (wie `application/xhtml+xml`) sind heutzutage größtenteils nutzlos.

> [!NOTE]
> Verwenden Sie `application/xml` oder `application/xhtml+xml`, wenn Sie die strikten Parsing-Regeln von XML, [`<![CDATA[…]]>`](/de/docs/Web/API/CDATASection)-Abschnitte oder Elemente verwenden möchten, die nicht aus den HTML/SVG/MathML-Namensräumen stammen.

### text/javascript

JavaScript-Inhalt sollte immer mit dem MIME-Typ `text/javascript` bereitgestellt werden. Aus historischen Gründen unterstützen Browser möglicherweise einige [veraltete JavaScript-Typen](#legacy_javascript_mime-typen), die unten aufgeführt sind, aber Sie sollten nicht davon ausgehen, dass Skripte, die mit einem anderen MIME-Typ als `text/javascript` bereitgestellt werden, immer geladen oder ausgeführt werden.

Beachten Sie, dass das [`type`](/de/docs/Web/HTML/Reference/Elements/script/type)-Attribut für {{htmlelement("script")}}-Elemente nur den **JavaScript-MIME-Typ-Essenz** enthalten darf: `text/javascript`. Das Einbeziehen eines Parameters wie `charset=utf-8` ist dasselbe wie das Setzen des `type` auf einen anderen MIME-Typ: Der Skriptinhalt wird als Datenblock behandelt und nicht als JavaScript ausgeführt. (Beachten Sie, dass das Setzen des `type` auf einen JavaScript-MIME-Typ selbst eine veraltete Funktion ist: Sie sollten den `type` in diesem Fall weglassen.) Im Gegensatz dazu können Sie bei Verwendung des HTTP {{httpheader("Content-Type")}} Headers optional wie gewohnt den `charset`-Parameter angeben.

Weitere Informationen finden Sie unter: [IANA Media Types registry](https://www.iana.org/assignments/media-types/media-types.xhtml#text), [RFC 9239](https://www.rfc-editor.org/rfc/rfc9239.html) und die [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/scripting.html#scriptingLanguages:text/javascript).

#### Legacy JavaScript MIME-Typen

Zusätzlich zum MIME-Typ `text/javascript` erlaubt der [MIME Sniffing Standard](https://mimesniff.spec.whatwg.org/) (die Definition, wie Browser MIME-Typen interpretieren und herausfinden sollen, was mit Inhalt zu tun ist, der keinen gültigen hat), dass JavaScript aus historischen Gründen mit einem der folgenden veralteten JavaScript-MIME-Typen bereitgestellt wird:

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
> Obwohl ein beliebiger {{Glossary("user_agent", "Benutzeragent")}} möglicherweise alle oder einige dieser unterstützen kann, sollten Sie nur `text/javascript` verwenden. Dies ist der einzige MIME-Typ, der jetzt und in Zukunft garantiert funktioniert.

### application/json

{{Glossary("JSON", "JavaScript Object Notation (JSON)")}} ist ein standardisiertes textbasiertes Format zur Darstellung strukturierter Daten basierend auf der JavaScript-Objektsyntax. Es wird häufig für die Übertragung von Daten in Webanwendungen verwendet.

### Bildtypen

Dateien, deren MIME-Typ `image` ist, enthalten Bilddaten. Der Subtyp gibt an, welches spezifische Bilddateiformat die Daten darstellen.

Die folgenden Bildtypen sind häufig genug, um als _sicher_ für den Einsatz auf Webseiten angesehen zu werden:

- [`image/apng`](/de/docs/Web/Media/Guides/Formats/Image_types#apng_animated_portable_network_graphics): Animated Portable Network Graphics (APNG)
- [`image/avif`](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image): AV1 Image File Format (AVIF)
- [`image/gif`](/de/docs/Web/Media/Guides/Formats/Image_types#gif_graphics_interchange_format): Graphics Interchange Format (GIF)
- [`image/jpeg`](/de/docs/Web/Media/Guides/Formats/Image_types#jpeg_joint_photographic_experts_group_image): Joint Photographic Expert Group image (JPEG)
- [`image/png`](/de/docs/Web/Media/Guides/Formats/Image_types#png_portable_network_graphics): Portable Network Graphics (PNG)
- [`image/svg+xml`](/de/docs/Web/Media/Guides/Formats/Image_types#svg_scalable_vector_graphics): Scalable Vector Graphics (SVG)
- [`image/webp`](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image): Web Picture format (WEBP)

Der [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types#common_image_file_types) bietet Informationen und Empfehlungen, wann die verschiedenen Bildformate verwendet werden sollen.

### Audio- und Videotypen

Wie bei Bildern verlangt HTML nicht, dass Webbrowser bestimmte Datei- und Codec-Typen für die {{HTMLElement("audio")}} und {{HTMLElement("video")}} Elemente unterstützen. Daher ist es wichtig, Ihre Zielgruppe und den Bereich der Browser (und Versionen dieser Browser), die sie möglicherweise verwenden, zu berücksichtigen, wenn Sie den Dateityp und die Codecs für Medien auswählen.

Unser [Leitfaden zu Mediencontainerformaten](/de/docs/Web/Media/Guides/Formats/Containers) bietet eine Liste der Dateitypen, die häufig von Webbrowsern unterstützt werden, einschließlich Informationen über ihre speziellen Anwendungsfälle, Nachteile und Kompatibilitätsinformationen sowie andere Details.

Der [Leitfaden zu Audiocodecs](/de/docs/Web/Media/Guides/Formats/Audio_codecs) und der [Leitfaden zu Videocodecs](/de/docs/Web/Media/Guides/Formats/Video_codecs) listen die verschiedenen Codecs auf, die Webbrowser häufig unterstützen, und bieten Kompatibilitätsdetails sowie technische Informationen wie die Anzahl der unterstützten Audiokanäle, die Art der Kompression und die nützlichen Bitraten. Der [Leitfaden zu Codecs, die von WebRTC verwendet werden](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) erweitert dies, indem er speziell die von den wichtigsten Webbrowsern unterstützten Codecs behandelt, sodass Sie die Codecs auswählen können, die am besten den Bereich der Browser abdecken, die Sie unterstützen möchten.

Was die MIME-Typen von Audio- oder Videodateien angeht, spezifizieren sie in der Regel das Container-Format (Dateityp). Der optionale [Codecs-Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter) kann dem MIME-Typ hinzugefügt werden, um weiter zu spezifizieren, welche Codecs verwendet werden sollen und welche Optionen zum Kodieren der Medien verwendet wurden, wie Codec-Profil, Level oder andere solche Informationen.

Weitere Informationen zu üblichen Medientypen finden Sie auf der [Seite zu gängigen MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types/Common_types).

### multipart/form-data

Der `multipart/form-data` Typ kann beim Senden der Werte eines ausgefüllten [HTML-Formulars](/de/docs/Learn_web_development/Extensions/Forms) vom Browser zum Server verwendet werden.

Als Multipart-Dokumentformat besteht es aus verschiedenen Teilen, die durch eine Grenze (eine mit einem Doppelstrich `--` beginnende Zeichenfolge) getrennt sind. Jeder Teil ist seine eigene Entität mit eigenen HTTP-Headern, {{HTTPHeader("Content-Disposition")}}, und {{HTTPHeader("Content-Type")}} für Dateiupload-Felder.

```http
Content-Type: multipart/form-data; boundary=boundaryString
(other headers associated with the multipart document as a whole)

--boundaryString
Content-Disposition: form-data; name="myFile"; filename="img.jpg"
Content-Type: image/jpeg

(data)
--boundaryString
Content-Disposition: form-data; name="myField"

(data)
--boundaryString
(more subparts)
--boundaryString--
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

Wenn der {{HTTPStatus("206", "206 Partial Content")}} Statuscode gesendet wird, gibt dieser MIME-Typ an, dass das Dokument aus mehreren Teilen besteht, einem für jeden der angeforderten Bereiche. Wie andere Multipart-Typen verwendet der {{HTTPHeader("Content-Type")}} eine `boundary`, um die Teile zu trennen. Jeder Teil hat einen {{HTTPHeader("Content-Type")}} Header mit seinem tatsächlichen Typ und einen {{HTTPHeader("Content-Range")}} des Bereichs, den er darstellt.

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

## Wichtigkeit der richtigen Einstellung des MIME-Typs

Einige Serverkonfigurationen könnten den zugehörigen MIME-Typ verwenden, um Optimierungen wie Datei-Kombination, Kompression oder Caching durchzuführen. Siehe [h5bp/server-configs-apache](https://github.com/h5bp/server-configs-apache/blob/main/h5bp/web_performance/compression.conf) für ein Beispiel einer Apache-Konfiguration, die Dateien bestimmter MIME-Typen komprimiert.

Die meisten Webserver senden nicht erkannte Ressourcen als `application/octet-stream` MIME-Typ. Aus Sicherheitsgründen erlauben die meisten Browser nicht, eine benutzerdefinierte Standardaktion (wie "In Word öffnen") für solche Ressourcen festzulegen, wodurch der Benutzer gezwungen wird, sie zum Verwenden auf die Festplatte zu speichern.

Einige häufige falsche Serverkonfigurationen:

- RAR-komprimierte Dateien. Ideal wäre hier der wahre Typ der Originaldateien; oft ist dies unmöglich, da .RAR Dateien mehrere Ressourcen unterschiedlicher Typen enthalten können. In diesem Fall sollte der Server so konfiguriert werden, dass er `application/x-rar-compressed` sendet.
- Audio und Video. Nur Ressourcen mit dem korrekten MIME-Typ werden in {{HTMLElement("video")}} oder {{HTMLElement("audio")}} Elementen wiedergegeben. Stellen Sie sicher, dass Sie den korrekten [Medientyp für Audio und Video](/de/docs/Web/Media/Guides/Formats) angeben.
- Proprietäre Dateitypen. Ein spezifischer Typ wie `application/vnd.mspowerpoint` ermöglicht es Benutzern, solche Dateien automatisch in der Präsentationssoftware ihrer Wahl zu öffnen.

## MIME-Sniffing

In der Abwesenheit eines MIME-Typs oder in bestimmten Fällen, in denen Browser glauben, dass sie falsch sind, können Browser _MIME-Sniffing_ durchführen — den richtigen MIME-Typ erraten, indem sie die Bytes der Ressource untersuchen.

Jeder Browser führt MIME-Sniffing unterschiedlich und unter unterschiedlichen Umständen durch. (Zum Beispiel wird Safari auf die Dateiendung in der URL schauen, wenn der gesendete MIME-Typ unpassend ist.) Es gibt Sicherheitsbedenken, da einige MIME-Typen ausführbare Inhalte darstellen. Server können MIME-Sniffing verhindern, indem sie den {{HTTPHeader("X-Content-Type-Options")}} Header senden.

## Andere Methoden zur Übermittlung von Dokumenttypinformationen

MIME-Typen sind nicht die einzige Möglichkeit, Dokumenttypinformationen zu übermitteln:

- Dateinamen-Suffixe werden manchmal verwendet, insbesondere unter Microsoft Windows. Nicht alle Betriebssysteme betrachten diese Suffixe als bedeutungsvoll (wie Linux und macOS), und es gibt keine Garantie, dass sie korrekt sind.
- Magische Zahlen. Die Syntax verschiedener Formate ermöglicht die Ableitung des Dateityps, indem man ihre Byte-Struktur betrachtet. Zum Beispiel beginnen GIF-Dateien mit dem Hexadezimalwert `47 49 46 38 39` (`GIF89`), und PNG-Dateien mit `89 50 4E 47` (`.PNG`). Nicht alle Dateitypen haben magische Zahlen, daher ist dies auch nicht zu 100% verlässlich.

## Siehe auch

- [Web-Medientechnologien](/de/docs/Web/Media)
- [Leitfaden zu Medientypen im Web](/de/docs/Web/Media/Guides/Formats)
- [Richtige Konfiguration von Server-MIME-Typen](/de/docs/Learn_web_development/Extensions/Server-side/Configuring_server_MIME_types)
