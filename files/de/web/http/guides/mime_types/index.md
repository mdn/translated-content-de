---
title: MIME-Typen (IANA-Mediendateitypen)
slug: Web/HTTP/Guides/MIME_types
l10n:
  sourceCommit: 353ba3df9324ee1377d7e0aecb7e8ba0e8112861
---

{{HTTPSidebar}}

Ein **Medientyp** (auch bekannt als **Multipurpose Internet Mail Extensions oder MIME-Typ**) gibt die Art und das Format eines Dokuments, einer Datei oder einer Bytesammlung an. MIME-Typen sind definiert und standardisiert im IETF's {{RFC(6838)}}.

Die [Internet Assigned Numbers Authority (IANA)](https://www.iana.org/) ist verantwortlich für alle offiziellen MIME-Typen und Sie finden die aktuellste und vollständigste Liste auf ihrer [Medientypen](https://www.iana.org/assignments/media-types/media-types.xhtml) Seite.

> [!WARNING]
> Browser verwenden den MIME-Typ und _nicht die Dateierweiterung_, um zu bestimmen, wie eine URL verarbeitet wird.
> Daher ist es wichtig, dass Webserver den korrekten MIME-Typ im {{HTTPHeader("Content-Type")}}-Header der Antwort senden.
> Wenn dies nicht korrekt konfiguriert ist, werden Browser wahrscheinlich die Inhalte von Dateien falsch interpretieren, Websites funktionieren möglicherweise nicht korrekt und heruntergeladene Dateien könnten falsch behandelt werden.

## Struktur eines MIME-Typs

Ein MIME-Typ besteht in der Regel aus zwei Teilen: einem _Typ_ und einem _Subtyp_, getrennt durch einen Schrägstrich (`/`) — ohne Leerzeichen dazwischen:

```plain
type/subtype
```

Der **_Typ_** repräsentiert die allgemeine Kategorie, in die der Datentyp fällt, wie zum Beispiel `video` oder `text`.

Der **_Subtyp_** identifiziert die genaue Art von Daten des angegebenen Typs, die der MIME-Typ darstellt.
Zum Beispiel kann für den MIME-Typ `text` der Subtyp `plain` (Klartext), `html` ({{Glossary("HTML", "HTML")}}-Quelltext) oder `calendar` (für iCalendar/`.ics`) Dateien sein.

Jeder Typ hat seine eigene Menge möglicher Subtypen. Ein MIME-Typ hat immer sowohl einen Typ als auch einen Subtyp, nie nur eines von beiden.

Ein optionaler **Parameter** kann hinzugefügt werden, um zusätzliche Details bereitzustellen:

```plain
type/subtype;parameter=value
```

Zum Beispiel kann für jeden MIME-Typ, dessen Haupttyp `text` ist, der optionale `charset`-Parameter hinzugefügt werden, um den Zeichensatz anzugeben, der für die Zeichen in den Daten verwendet wird.
Wenn kein `charset` angegeben ist, ist der Standard {{Glossary("ASCII", "ASCII")}} (`US-ASCII`), es sei denn, es wird von den Einstellungen des {{Glossary("user_agent", "User-Agents")}} überschrieben.
Um eine UTF-8-Textdatei zu spezifizieren, wird der MIME-Typ `text/plain;charset=UTF-8` verwendet.

MIME-Typen sind nicht case-sensitive, werden aber traditionell in Kleinbuchstaben geschrieben. Die Parameterwerte können case-sensitive sein.

### Typen

Es gibt zwei Klassen von Typen: **diskret** und **multipart**.
Diskrete Typen sind Typen, die eine einzelne Datei oder ein Medium repräsentieren, wie eine einzige Text- oder Musikdatei oder ein einzelnes Video.
Ein Multipart-Typ repräsentiert ein Dokument, das aus mehreren Komponenten besteht, von denen jede ihren eigenen individuellen MIME-Typ haben kann; oder ein Multipart-Typ kann mehrere Dateien zusammenfassen, die in einer Transaktion gesendet werden.
Zum Beispiel werden Multipart-MIME-Typen verwendet, wenn mehrere Dateien an eine E-Mail angehängt werden.

#### Diskrete Typen

Die derzeit bei der IANA registrierten diskreten Typen sind:

- `application`
  - : Jede Art von Binärdaten, die nicht explizit in eine der anderen Typen fällt;
    entweder Daten, die in irgendeiner Weise ausgeführt oder interpretiert werden oder Binärdaten, die eine spezifische Anwendung oder Kategorie von Anwendungen benötigen, um sie zu verwenden.
    Generische Binärdaten (oder Binärdaten, deren wahrer Typ unbekannt ist) sind `application/octet-stream`.
    Weitere häufige Beispiele sind `application/pdf`, `application/pkcs8` und `application/zip`.
    [(Siehe Anwendungs-Typ-Registry bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#application)
- `audio`
  - : Audio- oder Musikdaten. Beispiele sind `audio/mpeg`, `audio/vorbis`.
    [(Siehe Audio-Typ-Registry bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#audio)
- `example`
  - : Reserviert für die Verwendung als Platzhalter in Beispielen, die zeigen, wie man MIME-Typen verwendet.
    Diese sollten niemals außerhalb von Beispielcode-Auflistungen und Dokumentationen verwendet werden.
    `example` kann auch als Subtyp verwendet werden;
    zum Beispiel in einem Beispiel zum Arbeiten mit Audio im Web kann der MIME-Typ `audio/example` verwendet werden, um anzuzeigen, dass der Typ ein Platzhalter ist und durch einen geeigneten Typ ersetzt werden sollte, wenn der Code in der realen Welt verwendet wird.
- `font`
  - : Schriftarten-/Schriftartendaten. Häufige Beispiele sind `font/woff`, `font/ttf` und `font/otf`.
    [(Siehe Font-Typ-Registry bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#font)
- `image`
  - : Bild- oder Grafikdaten einschließlich sowohl Bitmap- als auch Vektorgrafiken sowie
    animierte Versionen von Standbildformaten, wie animierte {{Glossary("GIF", "GIF")}}- oder APNG.
    Gängige Beispiele sind `image/jpeg`, `image/png` und `image/svg+xml`.
    [(Siehe Bild-Typ-Registry bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#image)
- `model`
  - : Modelldaten für ein 3D-Objekt oder eine Szene. Beispiele sind `model/3mf` und `model/vrml`.
    [(Siehe Model-Typ-Registry bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#model)
- `text`
  - : Nur-Text-Daten, einschließlich aller menschenlesbaren Inhalte, Quellcodes oder Textdaten wie mit Kommas getrennte Wertedaten (CSV).
    Beispiele sind: `text/plain`, `text/csv` und `text/html`.
    [(Siehe Text-Typ-Registry bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#text)
- `video`
  - : Videodaten oder Dateien, wie MP4-Filme (`video/mp4`).
    [(Siehe Video-Typ-Registry bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#video)

Für Textdokumente ohne spezifischen Subtyp sollte `text/plain` verwendet werden.
Ähnlich gilt für Binärdokumente ohne spezifischen oder bekannten Subtyp, dass `application/octet-stream` verwendet werden sollte.

#### Multipart-Typen

**Multipart**-Typen bezeichnen eine Kategorie von Dokumenten, die in Teile zerlegt sind,
oft mit unterschiedlichen MIME-Typen; sie können auch verwendet werden — besonders in E-Mail-
Szenarien — um mehrere, separate Dateien darzustellen, die alle Teil derselben
Transaktion sind. Sie stellen ein **komplexes Dokument** dar.

Außer `multipart/form-data`, das in der {{HTTPMethod("POST")}}-Methode von [HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms) verwendet wird, und `multipart/byteranges`, das mit {{HTTPStatus("206")}} `Partial Content` verwendet wird, um einen Teil eines Dokuments zu senden, behandelt HTTP Multipart-Dokumente nicht auf besondere Weise: Die Nachricht wird an den Browser übermittelt (der wahrscheinlich ein "Speichern unter"-Fenster anzeigt, wenn er nicht weiß, wie er das Dokument anzeigen soll).

Es gibt zwei Multipart-Typen:

- `message`
  - : Eine Nachricht, die andere Nachrichten kapselt. Dies kann verwendet werden, um beispielsweise eine E-Mail zu repräsentieren, die eine weitergeleitete Nachricht als Teil ihrer Daten enthält,
    oder um es zu ermöglichen, sehr große Nachrichten in Teilen zu senden, als ob es mehrere Nachrichten wären.
    Beispiele sind `message/rfc822` (für weitergeleitete oder beantwortete Nachrichten-Zitate) und `message/partial`, um es zu ermöglichen, eine große Nachricht automatisch in kleinere zu unterteilen, die vom Empfänger wieder zusammengesetzt werden.
    [(Siehe Nachrichten-Typ-Registry bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#message)
- `multipart`
  - : Daten, die aus mehreren Komponenten bestehen, die einzeln unterschiedliche MIME-Typen haben können.
    Beispiele sind `multipart/form-data` (für Daten, die mit der [`FormData`](/de/docs/Web/API/FormData)-API erzeugt wurden) und `multipart/byteranges` (definiert in {{RFC(7233, "", "5.4.1")}} und verwendet mit {{Glossary("HTTP", "HTTP")}}'s {{HTTPStatus(206)}}
    "Partial Content"-Antwort, die zurückgegeben wird, wenn die abgerufenen Daten nur ein Teil des Inhalts sind, wie er mit dem {{HTTPHeader("Range")}}-Header geliefert wird).
    [(Siehe Multipart-Typ-Registry bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#multipart)

## Wichtige MIME-Typen für Webentwickler

### application/octet-stream

Dies ist der Standard für Binärdateien. Da es _unbekannte Binärdatei_ bedeutet, führen Browser sie normalerweise nicht aus oder fragen sogar, ob sie ausgeführt werden soll. Sie behandeln es so, als ob der {{HTTPHeader("Content-Disposition")}}-Header auf `attachment` gesetzt wäre, und schlagen einen "Speichern unter"-Dialog vor.

### text/plain

Dies ist der Standard für Textdateien. Selbst wenn es wirklich "unbekannte Textdatei" bedeutet, gehen Browser davon aus, dass sie diese anzeigen können.

> **Hinweis:** `text/plain` bedeutet nicht "jede Art von Textdaten."
> Wenn sie eine bestimmte Art von Textdaten erwarten, werden sie es wahrscheinlich nicht als passend betrachten.
> Insbesondere wenn sie eine `text/plain`-Datei von einem {{HTMLElement("link")}}-Element herunterladen, das eine CSS-Datei deklariert, werden sie sie nicht als gültige CSS-Datei erkennen, wenn sie mit `text/plain` präsentiert wird.
> Der CSS-MIME-Typ `text/css` muss verwendet werden.

### text/css

CSS-Dateien, die verwendet werden, um eine Webseite zu gestalten, **müssen** mit `text/css` gesendet werden.
Wenn ein Server das `.css`-Suffix für CSS-Dateien nicht erkennt, könnte er sie mit den MIME-Typen `text/plain` oder `application/octet-stream` senden.
Wenn dies der Fall ist, werden sie von den meisten Browsern nicht als CSS erkannt und ignoriert.

### text/html

Alle HTML-Inhalte sollten mit diesem Typ bereitgestellt werden. Alternative MIME-Typen für XHTML (wie `application/xhtml+xml`) sind heutzutage größtenteils nutzlos.

> [!NOTE]
> Verwenden Sie `application/xml` oder `application/xhtml+xml`, wenn Sie die strengen XML-Parsing-Regeln, [`<![CDATA[…]]>`](/de/docs/Web/API/CDATASection)-Abschnitte oder Elemente, die nicht aus den HTML/SVG/MathML-Namensräumen stammen, wünschen.

### text/javascript

Laut dem [IANA Media Types Registry](https://www.iana.org/assignments/media-types/media-types.xhtml#text), [RFC 9239](https://www.rfc-editor.org/rfc/rfc9239.html), und der [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/scripting.html#scriptingLanguages:text/javascript) sollte JavaScript-Inhalt immer mit dem MIME-Typ `text/javascript` bereitgestellt werden.
Keine anderen MIME-Typen werden für JavaScript als gültig betrachtet und die Verwendung eines anderen MIME-Typs außer `text/javascript` kann dazu führen, dass Skripte nicht geladen oder ausgeführt werden.

Manchmal wird JavaScript-Inhalt fälschlicherweise mit einem `charset`-Parameter als Teil des MIME-Typs bereitgestellt — als Versuch, den Zeichensatz für den Skriptinhalt anzugeben.
Dieser `charset`-Parameter ist für JavaScript-Inhalt nicht gültig und führt in den meisten Fällen dazu, dass ein Skript nicht geladen wird.

### application/json

{{Glossary("JSON", "JavaScript Object Notation (JSON)")}} ist ein standardisiertes textbasiertes Format zur Darstellung strukturierter Daten, das auf der Syntax von JavaScript-Objekten basiert.
Es wird häufig für die Übertragung von Daten in Webanwendungen verwendet.

#### Veraltete JavaScript-MIME-Typen

Zusätzlich zum `text/javascript`-MIME-Typ erlaubt der [MIME Sniffing Standard](https://mimesniff.spec.whatwg.org/)
(aus dem hervorgeht, wie Browser MIME-Typen interpretieren und herausfinden, was mit Inhalten zu tun ist, die keinen gültigen haben)
JavaScript aus historischen Gründen auch mit jedem der folgenden veralteten JavaScript-MIME-Typen zu bedienen:

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
> Auch wenn ein {{Glossary("user_agent", "User-Agent")}} möglicherweise einen oder alle diese unterstützt, sollten Sie nur `text/javascript` verwenden.
> Es ist der einzige MIME-Typ, der garantiert jetzt und in Zukunft funktioniert.

### Bildtypen

Dateien, deren MIME-Typ `image` ist, enthalten Bilddaten.
Der Subtyp gibt an, welches spezifische Bildformat die Daten repräsentieren.

Die folgenden Bildtypen werden häufig genug verwendet, um als _sicher_ für die Verwendung auf Webseiten angesehen zu werden:

- [`image/apng`](/de/docs/Web/Media/Guides/Formats/Image_types#apng_animated_portable_network_graphics): Animierte Portable Network Graphics (APNG)
- [`image/avif`](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) : AV1-Bilddateiformat (AVIF)
- [`image/gif`](/de/docs/Web/Media/Guides/Formats/Image_types#gif_graphics_interchange_format): Graphics Interchange Format (GIF)
- [`image/jpeg`](/de/docs/Web/Media/Guides/Formats/Image_types#jpeg_joint_photographic_experts_group_image): Joint Photographic Expert Group-Bild (JPEG)
- [`image/png`](/de/docs/Web/Media/Guides/Formats/Image_types#png_portable_network_graphics): Portable Network Graphics (PNG)
- [`image/svg+xml`](/de/docs/Web/Media/Guides/Formats/Image_types#svg_scalable_vector_graphics): Scalable Vector Graphics (SVG)
- [`image/webp`](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image): Web Picture-Format (WEBP)

Der [Leitfaden für Bilddateitypen und -formate](/de/docs/Web/Media/Guides/Formats/Image_types#common_image_file_types) bietet Informationen und Empfehlungen, wann welche Bildformate verwendet werden sollten.

### Audio- und Videotypen

Wie bei Bildern schreibt HTML nicht vor, dass Webbrowser bestimmte Datei- und Codecs-Typen für die {{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elemente unterstützen müssen, daher ist es wichtig, Ihre Zielgruppe und die Bandbreite der Browser (und deren Versionen), die sie möglicherweise verwenden, zu berücksichtigen, wenn Sie den Dateityp und die Codecs für Medien auswählen.

Unser [Leitfaden für Mediencontainerformate](/de/docs/Web/Media/Guides/Formats/Containers) bietet eine Liste der Dateitypen, die von Webbrowsern häufig unterstützt werden, einschließlich Informationen über deren spezielle Anwendungsfälle, eventuelle Nachteile und Kompatibilitätsinformationen sowie andere Details.

Die Leitfäden zu [Audiocodecs](/de/docs/Web/Media/Guides/Formats/Audio_codecs) und [Videocodecs](/de/docs/Web/Media/Guides/Formats/Video_codecs) listen die verschiedenen Codecs auf, die Webbrowser häufig unterstützen, und bieten Kompatibilitätsdetails sowie technische Informationen wie die Anzahl der unterstützten Audiokanäle, die Art der verwendeten Kompression und welche Bitraten sie unterstützen können.
Der Leitfaden zu [Codecs, die von WebRTC verwendet werden](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs), erweitert dies, indem er speziell die von den wichtigsten Webbrowsern unterstützten Codecs behandelt, sodass Sie die Codecs auswählen können, die den Bereich der von Ihnen unterstützten Browser am besten abdecken.

Was die MIME-Typen von Audio- oder Videodateien betrifft, spezifizieren sie typischerweise das Containerformat (Dateityp).
Der optionale [Codecs-Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter) kann dem MIME-Typ hinzugefügt werden, um weiter anzugeben, welche Codecs verwendet werden und welche Optionen verwendet wurden, um die Medien zu kodieren, wie zum Beispiel Codec-Profil, Level oder andere Informationen.

Weitere Informationen zu gängigen Medientypen finden Sie auf der Seite [Gängige MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types/Common_types).

### multipart/form-data

Der Typ `multipart/form-data` kann verwendet werden, wenn die Werte eines ausgefüllten [HTML-Formulars](/de/docs/Learn_web_development/Extensions/Forms) vom Browser an den Server gesendet werden.

Als Multipart-Dokumentformat besteht er aus verschiedenen Teilen, die durch eine Abgrenzung (eine Zeichenfolge, die mit einem Doppelstrich `--` beginnt) getrennt sind.
Jeder Teil ist sein eigenes Entity mit seinen eigenen HTTP-Headern, {{HTTPHeader("Content-Disposition")}} und {{HTTPHeader("Content-Type")}} für Dateiuploadfelder.

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

Der MIME-Typ `multipart/byteranges` wird verwendet, um teilweise Antworten an den Browser zu senden.

Wenn der {{HTTPStatus("206", "206 Partial Content")}}-Statuscode gesendet wird, zeigt dieser MIME-Typ an, dass das Dokument aus mehreren Teilen besteht, einer für jeden der angeforderten Bereiche. Wie andere Multipart-Typen verwendet der {{HTTPHeader("Content-Type")}} eine `boundary`, um die Teile zu trennen.
Jedes Teil hat einen {{HTTPHeader("Content-Type")}}-Header mit seinem tatsächlichen Typ und einen {{HTTPHeader("Content-Range")}} des Bereichs, den es darstellt.

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

## Bedeutung der korrekten Einstellung des MIME-Typs

Einige Serverkonfigurationen können den zugehörigen MIME-Typ verwenden, um Optimierungen durchzuführen, wie Dateizusammenführung, Komprimierung oder Caching. Siehe [h5bp/server-configs-apache](https://github.com/h5bp/server-configs-apache/blob/main/h5bp/web_performance/compression.conf) für ein Beispiel einer Apache-Konfiguration, die Dateien bestimmter MIME-Typen komprimiert.

Die meisten Webserver senden nicht erkannte Ressourcen als den MIME-Typ `application/octet-stream`.
Aus Sicherheitsgründen erlauben die meisten Browser nicht, eine benutzerdefinierte Standardaktion (wie "Öffnen in Word") für solche Ressourcen festzulegen, was den Benutzer zwingt, die Datei auf die Festplatte zu speichern, um sie zu verwenden.

Einige häufige fehlerhafte Serverkonfigurationen:

- RAR-komprimierte Dateien.
  In diesem Fall wäre der ideale Typ der wahre Typ der Originaldateien; dies ist oft unmöglich, da .RAR-Dateien mehrere Ressourcen unterschiedlicher Typen enthalten können.
  In diesem Fall konfigurieren Sie den Server, um `application/x-rar-compressed` zu senden.
- Audio und Video.
  Nur Ressourcen mit dem richtigen MIME-Typ werden in {{HTMLElement("video")}}- oder {{HTMLElement("audio")}}-Elementen abgespielt.
  Stellen Sie sicher, dass Sie die richtige [Medientyp für Audio und Video](/de/docs/Web/Media/Guides/Formats) angeben.
- Proprietäre Dateitypen.
  Ein spezifischer Typ wie `application/vnd.mspowerpoint` ermöglicht es Benutzern, solche Dateien automatisch in der Präsentationssoftware ihrer Wahl zu öffnen.

## MIME-Sniffing

In Abwesenheit eines MIME-Typs oder in bestimmten Fällen, in denen Browser glauben, dass sie falsch sind, können Browser _MIME-Sniffing_ durchführen — das Erraten des korrekten MIME-Typs, indem sie die Bytes der Ressource betrachten.

Jeder Browser führt MIME-Sniffing anders und unter unterschiedlichen Umständen durch.
(Zum Beispiel überprüft Safari die Dateierweiterung in der URL, wenn der gesendete MIME-Typ unpassend ist.)
Es gibt Sicherheitsbedenken, da einige MIME-Typen ausführbare Inhalte darstellen.
Server können MIME-Sniffing verhindern, indem sie den {{HTTPHeader("X-Content-Type-Options")}}-Header senden.

## Andere Methoden zur Übermittlung von Dokumenttypen

MIME-Typen sind nicht der einzige Weg, um Dokumenttypinformationen zu übermitteln:

- Dateinamen-Suffixe werden manchmal verwendet, insbesondere auf Microsoft Windows.
  Nicht alle Betriebssysteme betrachten diese Suffixe als bedeutungsvoll (wie Linux und macOS) und es gibt keine Garantie, dass sie korrekt sind.
- Magic Numbers. Die Syntax unterschiedlicher Formate ermöglicht es, die Dateiart durch Betrachtung ihrer Byte-Struktur zu ermitteln.
  Zum Beispiel beginnen GIF-Dateien mit dem hexadezimalen Wert `47 49 46 38 39` (`GIF89`), und PNG-Dateien mit `89 50 4E 47` (`.PNG`).
  Nicht alle Dateitypen haben Magic Numbers, sodass dies auch nicht 100% zuverlässig ist.

## Siehe auch

- [Web-Medientechnologien](/de/docs/Web/Media)
- [Leitfaden zu Medientypen im Web](/de/docs/Web/Media/Guides/Formats)
- [Richtige Konfiguration von Server-MIME-Typen](/de/docs/Learn_web_development/Extensions/Server-side/Configuring_server_MIME_types)
