---
title: MIME types (IANA Medientypen)
slug: Web/HTTP/Basics_of_HTTP/MIME_types
l10n:
  sourceCommit: ef46a4ac6bfec3e33c9209244e7cb1a9206165d6
---

{{HTTPSidebar}}

Ein **Medientyp** (auch bekannt als **Multipurpose Internet Mail Extensions oder MIME-Typ**) gibt die Art und das Format eines Dokuments, einer Datei oder einer Sammlung von Bytes an. MIME-Typen sind im IETF {{RFC(6838)}} definiert und standardisiert.

Die [Internet Assigned Numbers Authority (IANA)](https://www.iana.org/) ist für alle offiziellen MIME-Typen verantwortlich, und Sie können die aktuellste und vollständigste Liste auf deren [Medientypen](https://www.iana.org/assignments/media-types/media-types.xhtml) Seite finden.

> [!WARNING]
> Browser verwenden den MIME-Typ, _nicht die Dateierweiterung_, um zu bestimmen, wie eine URL verarbeitet werden soll, daher ist es wichtig, dass Webserver den korrekten MIME-Typ im {{HTTPHeader("Content-Type")}}-Header der Antwort senden. Wenn dies nicht korrekt konfiguriert ist, werden Browser wahrscheinlich die Inhalte von Dateien falsch interpretieren, Websites funktionieren nicht richtig, und heruntergeladene Dateien können falsch behandelt werden.

## Struktur eines MIME-Typs

Ein MIME-Typ besteht normalerweise aus zwei Teilen: einem _Typ_ und einem _Subtyp_, getrennt durch einen Schrägstrich (`/`) — ohne Leerzeichen dazwischen:

```plain
type/subtype
```

Der **_Typ_** repräsentiert die allgemeine Kategorie, in die der Datentyp fällt, etwa `video` oder `text`.

Der **_Subtyp_** identifiziert die genaue Art der Daten des angegebenen Typs, die der MIME-Typ darstellt. Zum Beispiel könnte für den MIME-Typ `text` der Subtyp `plain` (reintext), `html` ([HTML](/de/docs/Glossary/HTML)-Quellcode) oder `calendar` (für iCalendar/`.ics`-Dateien) sein.

Jeder Typ hat seine eigene Reihe möglicher Subtypen. Ein MIME-Typ hat immer sowohl einen Typ als auch einen Subtyp, niemals nur einen von beiden.

Ein optionaler **Parameter** kann hinzugefügt werden, um weitere Details bereitzustellen:

```plain
type/subtype;parameter=value
```

Zum Beispiel kann für einen MIME-Typ, dessen Haupttyp `text` ist, der optionale Parameter `charset` hinzugefügt werden, um den Zeichensatz anzugeben, der für die Zeichen in den Daten verwendet wird. Wenn kein `charset` angegeben ist, wird standardmäßig [ASCII](/de/docs/Glossary/ASCII) (`US-ASCII`) verwendet, sofern dies nicht von den Einstellungen des [User-Agents](/de/docs/Glossary/user_agent) überschrieben wird. Um eine UTF-8-Textdatei zu spezifizieren, wird der MIME-Typ `text/plain;charset=UTF-8` verwendet.

MIME-Typen sind nicht zwischen Groß- und Kleinschreibung empfindlich, werden aber traditionell in Kleinbuchstaben geschrieben. Die Parameterwerte können zwischen Groß- und Kleinschreibung empfindlich sein.

### Typen

Es gibt zwei Klassen von Typen: **diskrete** und **multiparte**. Diskrete Typen sind Typen, die eine einzelne Datei oder ein einzelnes Medium repräsentieren, wie eine einzelne Text- oder Musikdatei oder ein einzelnes Video. Ein multipart-Typ repräsentiert ein Dokument, das aus mehreren Komponenten besteht, von denen jede ihren eigenen individuellen MIME-Typ haben kann; oder ein multipart-Typ kann mehrere Dateien kapseln, die in einer Transaktion zusammen gesendet werden. Zum Beispiel werden multipart-MIME-Typen verwendet, wenn mehrere Dateien an eine E-Mail angehängt werden.

#### Diskrete Typen

Die derzeit bei der IANA registrierten diskreten Typen sind:

- `application`
  - : Jede Art von Binärdaten, die nicht explizit in einen der anderen Typen fallen; entweder Daten, die ausgeführt oder interpretiert werden, oder Binärdaten, die eine bestimmte Anwendung oder Kategorie von Anwendung erfordern, um verwendet zu werden. Allgemeine Binärdaten (oder Binärdaten, deren wahrer Typ unbekannt ist) sind `application/octet-stream`. Andere häufige Beispiele sind `application/pdf`, `application/pkcs8` und `application/zip`. [(siehe Anwendungs-Typ-Registrierung bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#application)
- `audio`
  - : Audio- oder Musikdaten. Beispiele sind `audio/mpeg`, `audio/vorbis`. [(siehe Audio-Typ-Registrierung bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#audio)
- `example`
  - : Reserviert für die Verwendung als Platzhalter in Beispielen, die zeigen, wie MIME-Typen verwendet werden. Diese sollten nie außerhalb von Beispiel-Code-Listings und Dokumentationen verwendet werden. `example` kann auch als Subtyp verwendet werden; zum Beispiel kann in einem Beispiel, das sich mit Audio im Web beschäftigt, der MIME-Typ `audio/example` verwendet werden, um anzuzeigen, dass der Typ ein Platzhalter ist und beim tatsächlichen Einsatz durch einen geeigneten ersetzt werden sollte.
- `font`
  - : Schrift-/Schriftdaten. Häufige Beispiele sind `font/woff`, `font/ttf` und `font/otf`. [(siehe Schrift-Typ-Registrierung bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#font)
- `image`
  - : Bild- oder Grafikdaten, einschließlich sowohl Bitmap- als auch Vektorstandbilder als auch animierte Versionen von Standbildformaten wie animierte [GIF](/de/docs/Glossary/GIF) oder APNG. Gängige Beispiele sind `image/jpeg`, `image/png` und `image/svg+xml`. [(siehe Bild-Typ-Registrierung bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#image)
- `model`
  - : Modelldaten für ein 3D-Objekt oder eine Szene. Beispiele sind `model/3mf` und `model/vrml`. [(siehe Modell-Typ-Registrierung bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#model)
- `text`
  - : Nur-Text-Daten einschließlich aller menschenlesbaren Inhalte, Quellcode oder Textdaten wie Daten im kommaseparierten Wert-Format (CSV). Beispiele sind: `text/plain`, `text/csv` und `text/html`. [(siehe Text-Typ-Registrierung bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#text)
- `video`
  - : Videodaten oder -dateien, wie MP4-Filme (`video/mp4`). [(siehe Video-Typ-Registrierung bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#video)

Für Textdokumente ohne spezifischen Subtyp sollte `text/plain` verwendet werden. Ebenso sollte für Binärdokumente ohne spezifischen oder bekannten Subtyp `application/octet-stream` verwendet werden.

#### Multipart-Typen

**Multipart**-Typen zeigen eine Kategorie von Dokumenten an, die in Teile gebrochen sind, oft mit unterschiedlichen MIME-Typen; sie können auch verwendet werden – insbesondere in E-Mail-Szenarien – um mehrere, separate Dateien darzustellen, die alle Teil derselben Transaktion sind. Sie repräsentieren ein **zusammengesetztes Dokument**.

Mit Ausnahme von `multipart/form-data`, das in der {{HTTPMethod("POST")}}-Methode von [HTML-Formularen](/de/docs/Learn/Forms) verwendet wird, und `multipart/byteranges`, das mit {{HTTPStatus("206")}} `Partial Content` verwendet wird, um einen Teil eines Dokuments zu senden, behandelt HTTP Multipart-Dokumente nicht auf besondere Weise: Die Nachricht wird an den Browser übermittelt (der wahrscheinlich ein "Speichern unter"-Fenster anzeigt, wenn er nicht weiß, wie das Dokument angezeigt werden soll).

Es gibt zwei Multipart-Typen:

- `message`
  - : Eine Nachricht, die andere Nachrichten kapselt. Dies kann zum Beispiel verwendet werden, um eine E-Mail darzustellen, die eine weitergeleitete Nachricht als Teil ihrer Daten enthält, oder um es zu ermöglichen, sehr große Nachrichten in Chunks zu senden, als ob es mehrere Nachrichten wären. Beispiele sind `message/rfc822` (für weitergeleitete oder zitierte Nachrichten) und `message/partial`, um eine große Nachricht in kleinere zu unterteilen, die automatisch vom Empfänger wieder zusammengeführt werden. [(siehe Nachrichten-Typ-Registrierung bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#message)
- `multipart`
  - : Daten, die aus mehreren Komponenten bestehen, die jeweils unterschiedliche MIME-Typen haben können. Beispiele sind `multipart/form-data` (für Daten, die mit der [`FormData`](/de/docs/Web/API/FormData)-API erzeugt wurden) und `multipart/byteranges` (definiert in {{RFC(7233, "", "5.4.1")}} und verwendet mit [HTTP](/de/docs/Glossary/HTTP)'s {{HTTPStatus(206)}} "Partial Content"-Antwort, wenn die abgerufenen Daten nur ein Teil des Inhalts sind, wie es beim {{HTTPHeader("Range")}}-Header geliefert wird). [(siehe Multipart-Typ-Registrierung bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#multipart)

## Wichtige MIME-Typen für Webentwickler

### application/octet-stream

Dies ist der Standard für Binärdateien. Da es bedeutet _unbekannte Binärdatei_, führen Browser sie normalerweise nicht aus oder fragen nicht einmal, ob sie ausgeführt werden soll. Sie behandeln es, als ob der {{HTTPHeader("Content-Disposition")}}-Header auf `attachment` gesetzt wäre und schlagen einen "Speichern unter"-Dialog vor.

### text/plain

Dies ist der Standard für Textdateien. Auch wenn es wirklich bedeutet "unbekannte Textdatei", gehen Browser davon aus, dass sie es anzeigen können.

> **Hinweis:** `text/plain` bedeutet nicht "jede Art von Textdaten."
> Wenn sie eine spezifische Art von Textdaten erwarten, werden sie es wahrscheinlich nicht als Übereinstimmung betrachten. Speziell, wenn sie eine `text/plain`-Datei von einem {{HTMLElement("link")}}-Element herunterladen, das eine CSS-Datei deklariert, werden sie es nicht als gültige CSS-Datei erkennen, wenn es mit `text/plain` präsentiert wird. Der CSS-Mime-Typ `text/css` muss verwendet werden.

### text/css

CSS-Dateien, die zum Stil einer Webseite verwendet werden, **müssen** mit `text/css` gesendet werden. Wenn ein Server das `.css`-Suffix für CSS-Dateien nicht erkennt, kann er sie mit `text/plain` oder `application/octet-stream` MIME-Typen senden. Wenn dies der Fall ist, werden sie von den meisten Browsern nicht als CSS erkannt und ignoriert.

### text/html

Alle HTML-Inhalte sollten mit diesem Typ bedient werden. Alternative MIME-Typen für XHTML (wie `application/xhtml+xml`) sind heute größtenteils nutzlos.

> [!NOTE]
> Verwenden Sie `application/xml` oder `application/xhtml+xml`, wenn Sie die strengen Parsing-Regeln von XML, [`<![CDATA[…]]>`](/de/docs/Web/API/CDATASection)-Abschnitte oder Elemente, die nicht aus den HTML/SVG/MathML-Namensräumen stammen, benötigen.

### text/javascript

Gemäß dem [IANA Media Types Registry](https://www.iana.org/assignments/media-types/media-types.xhtml#text), [RFC 9239](https://www.rfc-editor.org/rfc/rfc9239.html) und der [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/scripting.html#scriptingLanguages:text/javascript) sollte JavaScript-Inhalt immer unter Verwendung des MIME-Typs `text/javascript` bereitgestellt werden. Keine anderen MIME-Typen gelten als gültig für JavaScript, und die Verwendung eines anderen MIME-Typs als `text/javascript` kann dazu führen, dass Skripte nicht geladen oder ausgeführt werden.

Sie können feststellen, dass einige JavaScript-Inhalte fälschlicherweise mit einem `charset`-Parameter als Teil des MIME-Typs bereitgestellt werden – als Versuch, den Zeichensatz für den Skriptinhalt anzugeben. Dieser `charset`-Parameter ist für JavaScript-Inhalte nicht gültig und führt in den meisten Fällen dazu, dass ein Skript nicht geladen wird.

#### Veraltete JavaScript-MIME-Typen

Zusätzlich zum MIME-Typ `text/javascript` erlaubt der [MIME Sniffing Standard](https://mimesniff.spec.whatwg.org/)
(die Definition, wie Browser MIME-Typen interpretieren und feststellen sollen, was mit Inhalten zu tun ist, die keinen gültigen haben) auch, dass JavaScript mit einem der folgenden veralteten JavaScript-MIME-Typen bereitgestellt wird:

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
> Obwohl jeder [User Agent](/de/docs/Glossary/user_agent) möglicherweise einen oder alle diese unterstützt, sollten Sie nur `text/javascript` verwenden. Es ist der einzige MIME-Typ, der jetzt und in Zukunft garantiert funktioniert.

### Bildtypen

Dateien, deren MIME-Typ `image` ist, enthalten Bilddaten. Der Subtyp gibt an, welches spezifische Bilddateiformat die Daten darstellen.

Die folgenden Bildtypen werden oft genug verwendet, um als _sicher_ für die Verwendung auf Webseiten angesehen zu werden:

- [`image/apng`](/de/docs/Web/Media/Formats/Image_types#apng_animated_portable_network_graphics): Animierte Portable Network Graphics (APNG)
- [`image/avif`](/de/docs/Web/Media/Formats/Image_types#avif_image): AV1 Image File Format (AVIF)
- [`image/gif`](/de/docs/Web/Media/Formats/Image_types#gif_graphics_interchange_format): Graphics Interchange Format (GIF)
- [`image/jpeg`](/de/docs/Web/Media/Formats/Image_types#jpeg_joint_photographic_experts_group_image): Joint Photographic Expert Group image (JPEG)
- [`image/png`](/de/docs/Web/Media/Formats/Image_types#png_portable_network_graphics): Portable Network Graphics (PNG)
- [`image/svg+xml`](/de/docs/Web/Media/Formats/Image_types#svg_scalable_vector_graphics): Scalable Vector Graphics (SVG)
- [`image/webp`](/de/docs/Web/Media/Formats/Image_types#webp_image): Web Picture format (WEBP)

Der [Leitfaden für Bilddateitypen und -formate](/de/docs/Web/Media/Formats/Image_types#common_image_file_types) bietet Informationen und Empfehlungen darüber, wann die verschiedenen Bildformate verwendet werden sollten.

### Audio- und Videotypen

Wie bei Bildern schreibt HTML nicht vor, dass Webbrowser bestimmte Datei- und Codec-Typen für die {{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elemente unterstützen müssen, daher ist es wichtig, Ihre Zielgruppe und die Bandbreite der Browser (und Versionen dieser Browser), die sie verwenden könnten, zu berücksichtigen, wenn Sie den Dateityp und die Codecs für Medien wählen.

Unser [Leitfaden für Mediencontainerformate](/de/docs/Web/Media/Formats/Containers) bietet eine Liste der Dateitypen, die häufig von Webbrowsern unterstützt werden, einschließlich Informationen über ihre besonderen Anwendungsfälle, eventuelle Nachteile und Kompatibilitätsinformationen sowie weitere Details.

Die [Audio-Codec](/de/docs/Web/Media/Formats/Audio_codecs)- und [Video-Codec](/de/docs/Web/Media/Formats/Video_codecs)-Leitfäden listen die verschiedenen Codecs auf, die Webbrowser oft unterstützen, und bieten Kompatibilitätsdetails sowie technische Informationen wie die Anzahl der unterstützten Audiokanäle, die Art der Kompression und welche Bitraten etc. sie unterstützen. Der [Leitfaden zu den von WebRTC verwendeten Codecs](/de/docs/Web/Media/Formats/WebRTC_codecs) erweitert dies, indem er speziell die von den wichtigsten Webbrowsern unterstützten Codecs behandelt, damit Sie die Codecs auswählen können, die am besten die Bandbreite der Browser abdecken, die Sie unterstützen möchten.

Was die MIME-Typen von Audio- oder Videodateien betrifft, spezifizieren sie typischerweise das Containerformat (Dateityp). Der optionale [Codecs-Parameter](/de/docs/Web/Media/Formats/codecs_parameter) kann dem MIME-Typ hinzugefügt werden, um weiter anzugeben, welche Codecs verwendet werden sollen und welche Optionen verwendet wurden, um die Medien zu kodieren, wie zum Beispiel das Codec-Profil, die Stufe oder andere solche Informationen.

Für weitere Informationen über gängige Medientypen siehe die Seite [Common MIME types](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types).

### multipart/form-data

Der Typ `multipart/form-data` kann verwendet werden, wenn die Werte eines fertiggestellten [HTML-Formulars](/de/docs/Learn/Forms) vom Browser an den Server gesendet werden.

Als multipart-Dokumentformat besteht es aus verschiedenen Teilen, die durch eine Grenze (eine Zeichenfolge, die mit einem Doppeldash `--` beginnt) abgegrenzt sind. Jeder Teil ist eine eigene Entität mit eigenen HTTP-Headern, {{HTTPHeader("Content-Disposition")}} und {{HTTPHeader("Content-Type")}} für Datei-Upload-Felder.

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

Der MIME-Typ `multipart/byteranges` wird verwendet, um dem Browser Teilantworten zu senden.

Wenn der {{HTTPStatus("206", "206 Partial Content")}}-Statuscode gesendet wird, zeigt dieser MIME-Typ an, dass das Dokument aus mehreren Teilen besteht, je einem für die angeforderten Bereiche. Wie bei anderen Multipart-Typen verwendet der {{HTTPHeader("Content-Type")}} eine `Grenze`, um die Teile zu trennen. Jeder Teil hat einen {{HTTPHeader("Content-Type")}}-Header mit seinem tatsächlichen Typ und einen {{HTTPHeader("Content-Range")}}, der den Bereich angibt, den er repräsentiert.

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

Einige Serverkonfigurationen können den zugehörigen MIME-Typ verwenden, um Optimierungen wie Dateikonkatenation, Komprimierung oder Caching vorzunehmen. Siehe [h5bp/server-configs-apache](https://github.com/h5bp/server-configs-apache/blob/main/h5bp/web_performance/compression.conf) für ein Beispiel einer Apache-Konfiguration, die Dateien bestimmter MIME-Typen komprimiert.

Die meisten Webserver senden nicht erkannte Ressourcen als den `application/octet-stream` MIME-Typ. Aus Sicherheitsgründen erlauben die meisten Browser das Setzen einer benutzerdefinierten Standardaktion (wie "Öffnen in Word") für solche Ressourcen nicht, was den Benutzer zwingt, sie auf die Festplatte zu speichern, um sie zu nutzen.

Einige häufige fehlerhafte Serverkonfigurationen:

- RAR-komprimierte Dateien. In diesem Fall wäre der Idealzustand der wahre Typ der ursprünglichen Dateien; dies ist oft unmöglich, da .RAR-Dateien mehrere Ressourcen unterschiedlicher Typen enthalten können. In diesem Fall konfigurieren Sie den Server, um `application/x-rar-compressed` zu senden.
- Audio und Video. Nur Ressourcen mit dem korrekten MIME-Typ werden in {{HTMLElement("video")}} oder {{HTMLElement("audio")}}-Elementen abgespielt. Stellen Sie sicher, den korrekten [Medientyp für Audio und Video](/de/docs/Web/Media/Formats) anzugeben.
- Proprietäre Dateitypen. Ein spezifischer Typ wie `application/vnd.mspowerpoint` ermöglicht es Nutzern, solche Dateien automatisch in der Präsentationssoftware ihrer Wahl zu öffnen.

## MIME Sniffing

In Abwesenheit eines MIME-Typs oder in bestimmten Fällen, in denen Browser glauben, dass sie falsch sind, können Browser _MIME Sniffing_ durchführen – den korrekten MIME-Typ erraten, indem sie die Bytes der Ressource betrachten.

Jeder Browser führt MIME Sniffing unterschiedlich und unter unterschiedlichen Umständen durch. (Zum Beispiel schaut Safari auf die Dateierweiterung in der URL, wenn der gesendete MIME-Typ ungeeignet ist.) Es gibt Sicherheitsbedenken, da einige MIME-Typen ausführbare Inhalte darstellen. Server können MIME Sniffing verhindern, indem sie den {{HTTPHeader("X-Content-Type-Options")}}-Header senden.

## Andere Methoden zur Übermittlung des Dokumenttyps

MIME-Typen sind nicht der einzige Weg, um Dokumenttypinformationen zu übermitteln:

- Dateinamen-Suffixe werden manchmal verwendet, insbesondere unter Microsoft Windows. Nicht alle Betriebssysteme betrachten diese Suffixe als bedeutungsvoll (wie Linux und macOS), und es gibt keine Garantie, dass sie korrekt sind.
- Magic Numbers. Die Syntax unterschiedlicher Formate erlaubt die Ableitung des Dateityps durch Betrachtung ihrer Byte-Struktur. Zum Beispiel beginnen GIF-Dateien mit dem Hexadezimalwert `47 49 46 38 39` (`GIF89`), und PNG-Dateien mit `89 50 4E 47` (`.PNG`). Nicht alle Dateitypen haben Magic Numbers, daher ist auch dies nicht 100% zuverlässig.

## Siehe auch

- [Webtechnologien für Medien](/de/docs/Web/Media)
- [Leitfaden zu Medientypen, die im Web verwendet werden](/de/docs/Web/Media/Formats)
- [Serverkonfiguration von MIME-Typen richtig durchführen](/de/docs/Learn/Server-side/Configuring_server_MIME_types)
