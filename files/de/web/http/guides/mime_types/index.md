---
title: Medientypen (MIME-Typen)
short-title: Media types
slug: Web/HTTP/Guides/MIME_types
l10n:
  sourceCommit: 1a2a5b56a689b441ebf3be91b90f15746c5a5a01
---

Ein **Medientyp** (früher als **Multipurpose Internet Mail Extensions- oder MIME-Typ** bezeichnet) gibt die Art und das Format eines Dokuments, einer Datei oder einer Folge von Bytes an.
MIME-Typen werden in {{RFC(6838)}} der IETF definiert und standardisiert.

Die [Internet Assigned Numbers Authority (IANA)](https://www.iana.org/) ist für alle offiziellen MIME-Typen zuständig. Die aktuellste und vollständigste Liste finden Sie auf ihrer Seite [Media Types](https://www.iana.org/assignments/media-types).

> [!WARNING]
> Browser verwenden den MIME-Typ, _nicht die Dateiendung_, um zu bestimmen, wie sie eine URL verarbeiten.
> Deshalb müssen Webserver im {{HTTPHeader("Content-Type")}}-Header der Antwort den richtigen MIME-Typ senden.
> Ist dies nicht richtig konfiguriert, interpretieren Browser Dateiinhalte möglicherweise falsch, Websites funktionieren nicht ordnungsgemäß und heruntergeladene Dateien werden unter Umständen falsch behandelt.

## Aufbau eines MIME-Typs

Ein MIME-Typ besteht meist aus nur zwei Teilen: einem _Typ_ und einem _Untertyp_, die durch einen Schrägstrich (`/`) ohne Leerzeichen getrennt sind:

```plain
type/subtype
```

Der **_Typ_** bezeichnet die allgemeine Kategorie der Daten, beispielsweise `video` oder `text`.

Der **_Untertyp_** bezeichnet die genaue Art der Daten innerhalb des angegebenen Typs.
Beim Typ `text` kann der Untertyp beispielsweise `plain` (reiner Text), `html` ({{Glossary("HTML", "HTML")}}-Quellcode) oder `calendar` (für iCalendar-/`.ics`-Dateien) sein.

Jeder Typ hat eigene mögliche Untertypen. Ein MIME-Typ enthält immer sowohl einen Typ als auch einen Untertyp, niemals nur einen der beiden.

Optional kann ein **Parameter** hinzugefügt werden, um weitere Einzelheiten anzugeben:

```plain
type/subtype;parameter=value
```

Bei jedem MIME-Typ mit dem Haupttyp `text` können Sie beispielsweise mit dem optionalen Parameter `charset` den für die Zeichen in den Daten verwendeten Zeichensatz angeben.
Wenn kein `charset` angegeben ist, gilt standardmäßig {{Glossary("ASCII", "ASCII")}} (`US-ASCII`), sofern die Einstellungen des {{Glossary("user_agent", "User Agents")}} nichts anderes festlegen.
Für eine UTF-8-Textdatei wird der MIME-Typ `text/plain;charset=UTF-8` verwendet.

Bei MIME-Typen wird nicht zwischen Groß- und Kleinschreibung unterschieden; üblicherweise werden sie jedoch kleingeschrieben. Bei Parameterwerten kann die Groß- und Kleinschreibung relevant sein.

### Typen

Es gibt zwei Klassen von Typen: **diskrete** und **mehrteilige**.
Diskrete Typen stehen für eine einzelne Datei oder ein einzelnes Medium, etwa eine Text-, Musik- oder Videodatei.
Ein mehrteiliger Typ steht für ein Dokument aus mehreren Bestandteilen, die jeweils einen eigenen MIME-Typ haben können. Er kann auch mehrere Dateien umfassen, die gemeinsam in einer Transaktion gesendet werden.
Mehrteilige MIME-Typen werden beispielsweise verwendet, wenn mehrere Dateien an eine E-Mail angehängt werden.

#### Diskrete Typen

Derzeit sind bei der IANA folgende diskrete Typen registriert:

- `application`
  - : Binärdaten, die nicht ausdrücklich unter einen der anderen Typen fallen: Daten, die auf irgendeine Weise ausgeführt oder interpretiert werden, oder Binärdaten, für deren Verwendung eine bestimmte Anwendung oder Anwendungskategorie erforderlich ist.
    Allgemeine Binärdaten (oder Binärdaten, deren tatsächlicher Typ unbekannt ist) erhalten den Typ `application/octet-stream`.
    Weitere häufige Beispiele sind `application/pdf`, `application/pkcs8`, `application/wasm` und `application/zip`.
    [(Siehe IANA-Register für den Typ „application“)](https://www.iana.org/assignments/media-types#application)
- `audio`
  - : Audio- oder Musikdaten. Beispiele sind `audio/mpeg` und `audio/vorbis`.
    [(Siehe IANA-Register für den Typ „audio“)](https://www.iana.org/assignments/media-types#audio)
- `example`
  - : Für die Verwendung als Platzhalter in Beispielen reserviert, die den Umgang mit MIME-Typen zeigen.
    Außerhalb von Beispielcode und Dokumentation sollte dieser Typ niemals verwendet werden.
    `example` kann auch als Untertyp verwendet werden. In einem Beispiel zum Umgang mit Audio im Web kann etwa der MIME-Typ `audio/example` verdeutlichen, dass es sich um einen Platzhalter handelt, der beim tatsächlichen Einsatz des Codes durch einen passenden Typ ersetzt werden muss.
- `font`
  - : Schriftartdaten. Häufige Beispiele sind `font/woff`, `font/ttf` und `font/otf`.
    [(Siehe IANA-Register für den Typ „font“)](https://www.iana.org/assignments/media-types#font)
- `image`
  - : Bild- oder Grafikdaten, darunter unbewegte Raster- und Vektorbilder sowie animierte Varianten unbewegter Bildformate wie animierte {{Glossary("GIF", "GIF")}}-Dateien oder APNG.
    Häufige Beispiele sind `image/jpeg`, `image/png` und `image/svg+xml`.
    [(Siehe IANA-Register für den Typ „image“)](https://www.iana.org/assignments/media-types#image)
- `model`
  - : Modelldaten für ein 3D-Objekt oder eine Szene. Beispiele sind `model/3mf` und `model/vrml`.
    [(Siehe IANA-Register für den Typ „model“)](https://www.iana.org/assignments/media-types#model)
- `text`
  - : Reine Textdaten, darunter alle für Menschen lesbaren Inhalte, Quellcode und textbasierte Daten wie Daten im CSV-Format (kommagetrennte Werte).
    Beispiele sind `text/plain`, `text/csv` und `text/html`.
    [(Siehe IANA-Register für den Typ „text“)](https://www.iana.org/assignments/media-types#text)
- `video`
  - : Videodaten oder -dateien, beispielsweise MP4-Filme (`video/mp4`).
    [(Siehe IANA-Register für den Typ „video“)](https://www.iana.org/assignments/media-types#video)

Für Textdokumente ohne spezifischen Untertyp sollte `text/plain` verwendet werden.
Ebenso sollte für Binärdokumente ohne spezifischen oder bekannten Untertyp `application/octet-stream` verwendet werden.

#### Mehrteilige Typen

**Mehrteilige** Typen bezeichnen eine Kategorie von Dokumenten, die in Bestandteile unterteilt sind, häufig mit unterschiedlichen MIME-Typen. Insbesondere bei E-Mails können sie auch mehrere getrennte Dateien darstellen, die alle zu derselben Transaktion gehören. Sie stehen für ein **zusammengesetztes Dokument**.

Mit Ausnahme von `multipart/form-data`, das bei der Methode {{HTTPMethod("POST")}} für [HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms) verwendet wird, und `multipart/byteranges`, das zusammen mit {{HTTPStatus("206")}} `Partial Content` einen Teil eines Dokuments sendet, behandelt HTTP mehrteilige Dokumente nicht auf besondere Weise: Die Nachricht wird an den Browser übertragen. Wenn dieser nicht weiß, wie er das Dokument anzeigen soll, öffnet er wahrscheinlich ein „Speichern unter“-Fenster.

Es gibt zwei mehrteilige Typen:

- `message`
  - : Eine Nachricht, die weitere Nachrichten enthält. Damit lässt sich beispielsweise eine E-Mail darstellen, die eine weitergeleitete Nachricht enthält, oder eine sehr große Nachricht in Teilen senden, als wären es mehrere Nachrichten.
    Beispiele sind `message/rfc822` (für zitierte weitergeleitete oder beantwortete Nachrichten) und `message/partial`, mit dem eine große Nachricht automatisch in kleinere Nachrichten aufgeteilt und beim Empfänger wieder zusammengesetzt werden kann.
    [(Siehe IANA-Register für den Typ „message“)](https://www.iana.org/assignments/media-types#message)
- `multipart`
  - : Daten aus mehreren Bestandteilen, die jeweils unterschiedliche MIME-Typen haben können.
    Beispiele sind `multipart/form-data` (für Daten, die mit der [`FormData`](/de/docs/Web/API/FormData)-API erzeugt wurden) und `multipart/byteranges` (definiert in {{RFC(7233, "", "5.4.1")}} und verwendet bei {{Glossary("HTTP", "HTTP")}}-Antworten mit {{HTTPStatus(206)}} „Partial Content“, wenn die abgerufenen Daten nur einen Teil des Inhalts umfassen, wie er beispielsweise mithilfe des {{HTTPHeader("Range")}}-Headers angefordert wird).
    [(Siehe IANA-Register für den Typ „multipart“)](https://www.iana.org/assignments/media-types#multipart)

## Wichtige MIME-Typen für Webentwickler

### application/octet-stream

Dies ist der Standardtyp für Binärdateien. Da er für eine _unbekannte Binärdatei_ steht, führen Browser sie in der Regel nicht aus und fragen meist auch nicht, ob sie ausgeführt werden soll. Sie behandeln sie so, als wäre der {{HTTPHeader("Content-Disposition")}}-Header auf `attachment` gesetzt, und bieten einen „Speichern unter“-Dialog an.

### text/plain

Dies ist der Standardtyp für Textdateien. Obwohl er genau genommen „unbekannte Textdatei“ bedeutet, gehen Browser davon aus, dass sie die Datei anzeigen können.

> [!NOTE]
> `text/plain` bedeutet nicht „beliebige Art von Textdaten“.
> Wenn Browser eine bestimmte Art von Textdaten erwarten, betrachten sie `text/plain` wahrscheinlich nicht als passend.
> Laden sie beispielsweise über ein {{HTMLElement("link")}}-Element, das eine CSS-Datei deklariert, eine Datei mit dem Typ `text/plain`, erkennen sie diese nicht als gültige CSS-Datei.
> Es muss der CSS-MIME-Typ `text/css` verwendet werden.

### text/css

CSS-Dateien, mit denen eine Webseite gestaltet wird, **müssen** mit `text/css` gesendet werden.
Wenn ein Server die Endung `.css` nicht als Kennzeichen für CSS-Dateien erkennt, sendet er sie möglicherweise mit dem MIME-Typ `text/plain` oder `application/octet-stream`.
In diesem Fall erkennen die meisten Browser sie nicht als CSS und ignorieren sie.

### text/html

Alle HTML-Inhalte sollten mit diesem Typ bereitgestellt werden. Alternative MIME-Typen für XHTML (wie `application/xhtml+xml`) sind heutzutage meist nicht sinnvoll.

> [!NOTE]
> Verwenden Sie `application/xml` oder `application/xhtml+xml`, wenn Sie die strengen XML-Parsing-Regeln, [`<![CDATA[…]]>`](/de/docs/Web/API/CDATASection)-Abschnitte oder Elemente außerhalb der HTML-, SVG- und MathML-Namespaces benötigen.

### text/javascript

JavaScript-Inhalte sollten immer mit dem MIME-Typ `text/javascript` bereitgestellt werden.
Aus historischen Gründen unterstützen Browser möglicherweise einige der unten aufgeführten [älteren JavaScript-Typen](#ältere_javascript-mime-typen). Sie sollten jedoch nicht davon ausgehen, dass Skripte mit einem anderen MIME-Typ als `text/javascript` immer geladen oder ausgeführt werden.

Beachten Sie, dass das [`type`](/de/docs/Web/HTML/Reference/Elements/script/type)-Attribut von {{htmlelement("script")}}-Elementen in HTML nur die **Essenz des JavaScript-MIME-Typs** `text/javascript` oder eines der Schlüsselwörter `module` (für ES-Module) beziehungsweise `importmap` enthalten darf.
Wird im `type`-Attribut ein Parameter wie `charset=utf-8` angegeben, entspricht dies einem [nicht erkannten Wert](/de/docs/Web/HTML/Reference/Elements/script/type#any_other_value): Der Skriptinhalt wird als Datenblock behandelt und nicht als JavaScript ausgeführt.
`type="text/javascript"` muss nicht mehr gesetzt werden. Dies ist der Standardwert für `<script>`-Elemente; Sie können das `type`-Attribut in diesem Fall also ganz weglassen.
Bei Verwendung des HTTP-Headers {{httpheader("Content-Type")}} können Sie den Parameter `charset` dagegen wie üblich optional angeben.

Weitere Informationen finden Sie im [IANA-Register für Medientypen](https://www.iana.org/assignments/media-types#text), in [RFC 9239](https://www.rfc-editor.org/info/rfc9239/) und in der [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/scripting.html#scriptingLanguages:text/javascript).

#### Ältere JavaScript-MIME-Typen

Neben dem MIME-Typ `text/javascript` erlaubt der [MIME Sniffing Standard](https://mimesniff.spec.whatwg.org/) aus historischen Gründen auch die Bereitstellung von JavaScript mit einem der folgenden älteren JavaScript-MIME-Typen. Dieser Standard legt fest, wie Browser MIME-Typen interpretieren und mit Inhalten ohne gültigen MIME-Typ umgehen sollen:

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
> Auch wenn ein bestimmter {{Glossary("user_agent", "User Agent")}} einige oder alle dieser Typen unterstützen kann, sollten Sie nur `text/javascript` verwenden.
> Nur bei diesem MIME-Typ ist gewährleistet, dass er jetzt und in Zukunft funktioniert.

### application/json

{{Glossary("JSON", "JavaScript Object Notation (JSON)")}} ist ein standardisiertes textbasiertes Format zur Darstellung strukturierter Daten, das auf der Syntax von JavaScript-Objekten beruht.
Es wird häufig zur Datenübertragung in Webanwendungen verwendet.

### Bildtypen

Dateien mit einem MIME-Typ der Kategorie `image` enthalten Bilddaten.
Der Untertyp gibt an, welches Bilddateiformat die Daten haben.

Die folgenden Bildtypen sind so weit verbreitet, dass sie für die Verwendung auf Webseiten als _sicher_ gelten:

- [`image/apng`](/de/docs/Web/Media/Guides/Formats/Image_types#apng_animated_portable_network_graphics): Animated Portable Network Graphics (APNG)
- [`image/avif`](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image): AV1 Image File Format (AVIF)
- [`image/gif`](/de/docs/Web/Media/Guides/Formats/Image_types#gif_graphics_interchange_format): Graphics Interchange Format (GIF)
- [`image/jpeg`](/de/docs/Web/Media/Guides/Formats/Image_types#jpeg_joint_photographic_experts_group_image): Joint Photographic Expert Group image (JPEG)
- [`image/png`](/de/docs/Web/Media/Guides/Formats/Image_types#png_portable_network_graphics): Portable Network Graphics (PNG)
- [`image/svg+xml`](/de/docs/Web/Media/Guides/Formats/Image_types#svg_scalable_vector_graphics): Scalable Vector Graphics (SVG)
- [`image/webp`](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image): Web Picture format (WEBP)

Der [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types#common_image_file_types) enthält Informationen und Empfehlungen dazu, wann die verschiedenen Bildformate verwendet werden sollten.

### Audio- und Videotypen

Wie bei Bildern schreibt HTML auch für die Elemente {{HTMLElement("audio")}} und {{HTMLElement("video")}} nicht vor, welche Datei- und Codec-Typen Webbrowser unterstützen müssen. Berücksichtigen Sie deshalb bei der Auswahl der Dateien und Codecs für Ihre Medien Ihre Zielgruppe sowie die Browser und Browserversionen, die diese möglicherweise verwendet.

Unser [Leitfaden zu Mediencontainerformaten](/de/docs/Web/Media/Guides/Formats/Containers) enthält eine Liste der Dateitypen, die Webbrowser häufig unterstützen. Neben weiteren Einzelheiten finden Sie dort Informationen zu besonderen Anwendungsfällen, möglichen Nachteilen und zur Kompatibilität.

Die Leitfäden zu [Audio-Codecs](/de/docs/Web/Media/Guides/Formats/Audio_codecs) und [Video-Codecs](/de/docs/Web/Media/Guides/Formats/Video_codecs) führen verschiedene Codecs auf, die von Webbrowsern häufig unterstützt werden. Sie enthalten Angaben zur Kompatibilität sowie technische Informationen, etwa zur Anzahl unterstützter Audiokanäle, zur verwendeten Komprimierung und zu geeigneten Bitraten.
Der Leitfaden zu den [von WebRTC verwendeten Codecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) ergänzt diese Informationen um die Codecs, die von den wichtigsten Webbrowsern unterstützt werden. So können Sie die Codecs auswählen, mit denen Sie möglichst viele der gewünschten Browser erreichen.

MIME-Typen von Audio- und Videodateien geben üblicherweise das Containerformat (den Dateityp) an.
Mit dem optionalen [Parameter `codecs`](/de/docs/Web/Media/Guides/Formats/codecs_parameter) können Sie genauer angeben, welche Codecs und welche Optionen zur Codierung des Mediums verwendet wurden, beispielsweise ein Codec-Profil oder -Level.

Weitere Informationen zu häufigen Medientypen finden Sie auf der Seite [Häufige MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types/Common_types).

### multipart/form-data

Der Typ `multipart/form-data` kann verwendet werden, um die Werte eines ausgefüllten [HTML-Formulars](/de/docs/Learn_web_development/Extensions/Forms) vom Browser an den Server zu senden.

Als mehrteiliges Dokumentformat besteht er aus verschiedenen Teilen, die durch eine Trennzeichenfolge (einen String, der mit einem doppelten Bindestrich `--` beginnt) voneinander abgegrenzt sind.
Jeder Teil ist eine eigenständige Einheit mit eigenen HTTP-Headern, darunter {{HTTPHeader("Content-Disposition")}} und bei Feldern zum Hochladen von Dateien {{HTTPHeader("Content-Type")}}.

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
  <label> Upload file: <input type="file" name="myFile" /> </label>
  <button>Send the file</button>
</form>
```

sendet diese Nachricht:

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

Der MIME-Typ `multipart/byteranges` wird verwendet, um Teilantworten an den Browser zu senden.

Wenn der Statuscode {{HTTPStatus("206", "206 Partial Content")}} gesendet wird, gibt dieser MIME-Typ an, dass das Dokument aus mehreren Teilen besteht – einem für jeden angeforderten Bereich. Wie bei anderen mehrteiligen Typen verwendet der {{HTTPHeader("Content-Type")}}-Header einen `boundary`-Parameter, um die Teile voneinander zu trennen.
Jeder Teil enthält einen {{HTTPHeader("Content-Type")}}-Header mit seinem tatsächlichen Typ und einen {{HTTPHeader("Content-Range")}}-Header mit dem Bereich, den er darstellt.

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

## Warum der richtige MIME-Typ wichtig ist

Manche Serverkonfigurationen verwenden den zugeordneten MIME-Typ für Optimierungen wie das Zusammenfügen, Komprimieren oder Cachen von Dateien. Ein Beispiel für eine Apache-Konfiguration, die Dateien bestimmter MIME-Typen komprimiert, finden Sie unter [h5bp/server-configs-apache](https://github.com/h5bp/server-configs-apache/blob/main/h5bp/web_performance/compression.conf).

Die meisten Webserver senden nicht erkannte Ressourcen mit dem MIME-Typ `application/octet-stream`.
Aus Sicherheitsgründen erlauben die meisten Browser nicht, für solche Ressourcen eine eigene Standardaktion festzulegen (etwa „In Word öffnen“). Stattdessen müssen Benutzer die Ressource zur Verwendung auf dem Datenträger speichern.

Einige häufige fehlerhafte Serverkonfigurationen betreffen:

- RAR-komprimierte Dateien.
  Idealerweise würde hier der tatsächliche Typ der ursprünglichen Dateien verwendet. Das ist oft unmöglich, da .RAR-Dateien mehrere Ressourcen unterschiedlichen Typs enthalten können.
  Konfigurieren Sie den Server in diesem Fall so, dass er `application/x-rar-compressed` sendet.
- Audio und Video.
  In {{HTMLElement("video")}}- oder {{HTMLElement("audio")}}-Elementen werden nur Ressourcen mit dem richtigen MIME-Typ abgespielt.
  Geben Sie unbedingt den richtigen [Medientyp für Audio und Video](/de/docs/Web/Media/Guides/Formats) an.
- Proprietäre Dateitypen.
  Ein spezifischer Typ wie `application/vnd.mspowerpoint` ermöglicht es Benutzern, solche Dateien automatisch in der Präsentationssoftware ihrer Wahl zu öffnen.

## MIME-Sniffing

Wenn ein MIME-Typ fehlt oder Browser ihn in bestimmten Fällen für falsch halten, können sie _MIME-Sniffing_ durchführen: Sie versuchen, den richtigen MIME-Typ anhand der Bytes der Ressource zu erraten.

Jeder Browser führt MIME-Sniffing anders und unter anderen Umständen durch.
(Safari prüft beispielsweise die Dateiendung in der URL, wenn der gesendete MIME-Typ ungeeignet ist.)
Dies kann Sicherheitsrisiken mit sich bringen, da manche MIME-Typen ausführbare Inhalte bezeichnen.
Server können MIME-Sniffing verhindern, indem sie den {{HTTPHeader("X-Content-Type-Options")}}-Header senden.

## Weitere Methoden zur Angabe des Dokumenttyps

MIME-Typen sind nicht die einzige Möglichkeit, Informationen über den Dokumenttyp zu übermitteln:

- Dateiendungen werden mitunter verwendet, insbesondere unter Microsoft Windows.
  Nicht alle Betriebssysteme (etwa Linux und macOS) messen diesen Endungen Bedeutung bei, und es gibt keine Garantie, dass sie richtig sind.
- Magic Numbers. Aus der Syntax verschiedener Formate lässt sich anhand ihrer Bytestruktur auf den Dateityp schließen.
  GIF-Dateien beginnen beispielsweise mit dem Hexadezimalwert `47 49 46 38 39` (`GIF89`), PNG-Dateien mit `89 50 4E 47` (`.PNG`).
  Nicht alle Dateitypen haben Magic Numbers; daher ist auch diese Methode nicht zu 100 % zuverlässig.

## Siehe auch

- [Web-Medientechnologien](/de/docs/Web/Media)
- [Leitfaden zu den im Web verwendeten Medientypen](/de/docs/Web/Media/Guides/Formats)
- [Server-MIME-Typen richtig konfigurieren](/de/docs/Learn_web_development/Extensions/Server-side/Configuring_server_MIME_types)
