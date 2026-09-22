---
title: Medientypen (MIME-Typen)
short-title: Media types
slug: Web/HTTP/Guides/MIME_types
l10n:
  sourceCommit: 1e333526315c95488d86013289a114f0f75f9f5f
---

Ein **Medientyp** (früher als **Multipurpose Internet Mail Extensions- oder MIME-Typ** bezeichnet) gibt die Art und das Format eines Dokuments, einer Datei oder einer Folge von Bytes an.
MIME-Typen sind in {{RFC(6838)}} der IETF definiert und standardisiert.

Die [Internet Assigned Numbers Authority (IANA)](https://www.iana.org/) ist für alle offiziellen MIME-Typen zuständig. Die aktuellste und vollständigste Liste finden Sie auf ihrer Seite [Media Types](https://www.iana.org/assignments/media-types).

> [!WARNING]
> Browser verwenden den MIME-Typ, _nicht die Dateiendung_, um zu bestimmen, wie eine URL verarbeitet wird.
> Deshalb müssen Webserver im {{HTTPHeader("Content-Type")}}-Header der Antwort den richtigen MIME-Typ senden.
> Ist dieser nicht korrekt konfiguriert, interpretieren Browser Dateiinhalte möglicherweise falsch, Websites funktionieren nicht richtig und heruntergeladene Dateien werden unter Umständen falsch behandelt.

## Aufbau eines MIME-Typs

Ein MIME-Typ besteht meist aus nur zwei Teilen: einem _Typ_ und einem _Untertyp_, die ohne Leerzeichen durch einen Schrägstrich (`/`) getrennt sind:

```plain
type/subtype
```

Der **_Typ_** bezeichnet die allgemeine Kategorie der Daten, beispielsweise `video` oder `text`.

Der **_Untertyp_** bezeichnet die genaue Art der Daten innerhalb des angegebenen Typs.
Beim Typ `text` kann der Untertyp beispielsweise `plain` (reiner Text), `html` ({{Glossary("HTML", "HTML")}}-Quellcode) oder `calendar` (für iCalendar-/`.ics`-Dateien) sein.

Jeder Typ hat eigene mögliche Untertypen. Ein MIME-Typ enthält immer sowohl einen Typ als auch einen Untertyp, niemals nur einen der beiden.

Ein optionaler **Parameter** kann zusätzliche Angaben liefern:

```plain
type/subtype;parameter=value
```

Bei jedem MIME-Typ mit dem Haupttyp `text` können Sie beispielsweise den optionalen Parameter `charset` hinzufügen, um den Zeichensatz der enthaltenen Zeichen anzugeben.
Wird kein `charset` angegeben, gilt standardmäßig {{Glossary("ASCII", "ASCII")}} (`US-ASCII`), sofern die Einstellungen des {{Glossary("user_agent", "User Agents")}} dies nicht überschreiben.
Für eine UTF-8-Textdatei wird der MIME-Typ `text/plain;charset=UTF-8` verwendet.

Bei MIME-Typen wird die Groß- und Kleinschreibung nicht unterschieden; üblicherweise werden sie jedoch kleingeschrieben. Bei Parameterwerten kann die Groß- und Kleinschreibung relevant sein.

### Typen

Es gibt zwei Klassen von Typen: **diskrete** und **Multipart-Typen**.
Diskrete Typen stehen für eine einzelne Datei oder ein einzelnes Medium, beispielsweise eine Text- oder Musikdatei oder ein Video.
Ein Multipart-Typ steht für ein Dokument aus mehreren Bestandteilen, von denen jeder einen eigenen MIME-Typ haben kann. Er kann auch mehrere Dateien umfassen, die gemeinsam in einer Transaktion gesendet werden.
Multipart-MIME-Typen werden beispielsweise verwendet, wenn mehrere Dateien an eine E-Mail angehängt werden.

#### Diskrete Typen

Derzeit sind bei der IANA folgende diskrete Typen registriert:

- `application`
  - : Binärdaten aller Art, die nicht ausdrücklich einem der anderen Typen zugeordnet sind;
    dazu gehören Daten, die auf irgendeine Weise ausgeführt oder interpretiert werden, sowie Binärdaten, für deren Verwendung eine bestimmte Anwendung oder Anwendungskategorie erforderlich ist.
    Allgemeine Binärdaten (oder Binärdaten, deren tatsächlicher Typ unbekannt ist) haben den Typ `application/octet-stream`.
    Weitere häufige Beispiele sind `application/pdf`, `application/pkcs8`, `application/wasm` und `application/zip`.
    [(Siehe das Verzeichnis der application-Typen bei der IANA)](https://www.iana.org/assignments/media-types#application)
- `audio`
  - : Audio- oder Musikdaten. Beispiele sind `audio/mpeg` und
    `audio/vorbis`.
    [(Siehe das Verzeichnis der audio-Typen bei der IANA)](https://www.iana.org/assignments/media-types#audio)
- `example`
  - : Reserviert als Platzhalter für Beispiele, die die Verwendung von MIME-Typen zeigen.
    Dieser Typ sollte niemals außerhalb von Codebeispielen und Dokumentation verwendet werden.
    `example` kann auch als Untertyp verwendet werden:
    In einem Beispiel zur Arbeit mit Audio im Web kann etwa der MIME-Typ `audio/example` anzeigen, dass der Typ ein Platzhalter ist und beim tatsächlichen Einsatz des Codes durch einen geeigneten Typ ersetzt werden muss.
- `font`
  - : Schriftartdaten. Häufige Beispiele sind `font/woff`, `font/ttf` und `font/otf`.
    [(Siehe das Verzeichnis der font-Typen bei der IANA)](https://www.iana.org/assignments/media-types#font)
- `image`
  - : Bild- oder Grafikdaten, darunter unbewegte Bitmap- und Vektorbilder sowie
    animierte Varianten von Bildformaten wie animierte {{Glossary("GIF", "GIFs")}} oder APNGs.
    Häufige Beispiele sind `image/jpeg`, `image/png` und `image/svg+xml`.
    [(Siehe das Verzeichnis der image-Typen bei der IANA)](https://www.iana.org/assignments/media-types#image)
- `model`
  - : Modelldaten für ein 3D-Objekt oder eine Szene. Beispiele sind `model/3mf` und `model/vrml`.
    [(Siehe das Verzeichnis der model-Typen bei der IANA)](https://www.iana.org/assignments/media-types#model)
- `text`
  - : Textdaten, darunter alle menschenlesbaren Inhalte, Quellcode und textbasierte Daten wie durch Kommas getrennte Werte (CSV).
    Beispiele sind `text/plain`, `text/csv` und `text/html`.
    [(Siehe das Verzeichnis der text-Typen bei der IANA)](https://www.iana.org/assignments/media-types#text)
- `video`
  - : Videodaten oder -dateien, beispielsweise MP4-Filme (`video/mp4`).
    [(Siehe das Verzeichnis der video-Typen bei der IANA)](https://www.iana.org/assignments/media-types#video)

Für Textdokumente ohne bestimmten Untertyp sollte `text/plain` verwendet werden.
Ebenso sollte für Binärdokumente ohne bestimmten oder bekannten Untertyp `application/octet-stream` verwendet werden.

#### Multipart-Typen

**Multipart-Typen** kennzeichnen eine Kategorie von Dokumenten, die in
Teile zerlegt sind, oft mit unterschiedlichen MIME-Typen. Sie können außerdem — insbesondere bei E-Mails —
mehrere separate Dateien darstellen, die alle zur selben
Transaktion gehören. Sie stehen für ein **zusammengesetztes Dokument**.

Abgesehen von `multipart/form-data`, das bei der {{HTTPMethod("POST")}}-Methode von [HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms) verwendet wird, und `multipart/byteranges`, das zusammen mit {{HTTPStatus("206")}} `Partial Content` zum Senden eines Dokumentteils dient, behandelt HTTP Multipart-Dokumente nicht auf besondere Weise: Die Nachricht wird an den Browser übertragen. Wenn dieser nicht weiß, wie er das Dokument anzeigen soll, zeigt er wahrscheinlich einen „Speichern unter“-Dialog an.

Es gibt zwei Multipart-Typen:

- `message`
  - : Eine Nachricht, die andere Nachrichten enthält. Damit lässt sich beispielsweise eine E-Mail darstellen, die eine weitergeleitete Nachricht enthält,
    oder eine sehr große Nachricht in Teilstücken senden, als wären es mehrere Nachrichten.
    Beispiele sind `message/rfc822` (für das Zitieren weitergeleiteter Nachrichten oder von Nachrichten, auf die geantwortet wird) und `message/partial`, womit eine große Nachricht automatisch in kleinere Nachrichten aufgeteilt werden kann, die der Empfänger wieder zusammensetzt.
    [(Siehe das Verzeichnis der message-Typen bei der IANA)](https://www.iana.org/assignments/media-types#message)
- `multipart`
  - : Daten aus mehreren Bestandteilen, die jeweils unterschiedliche MIME-Typen haben können.
    Beispiele sind `multipart/form-data` (für Daten, die mit der [`FormData`](/de/docs/Web/API/FormData)-API erzeugt werden) und `multipart/byteranges` (definiert in {{RFC(7233, "", "5.4.1")}} und verwendet mit der {{HTTPStatus(206)}}-Antwort „Partial Content“ von {{Glossary("HTTP", "HTTP")}}, wenn die abgerufenen Daten nur einen Teil des Inhalts umfassen, etwa bei einer Übertragung mit dem {{HTTPHeader("Range")}}-Header).
    [(Siehe das Verzeichnis der multipart-Typen bei der IANA)](https://www.iana.org/assignments/media-types#multipart)

## Wichtige MIME-Typen für Webentwickler

### application/octet-stream

Dies ist der Standardtyp für Binärdateien. Da er für eine _unbekannte Binärdatei_ steht, führen Browser sie normalerweise nicht aus und fragen meist auch nicht, ob sie ausgeführt werden soll. Sie behandeln die Datei so, als wäre der {{HTTPHeader("Content-Disposition")}}-Header auf `attachment` gesetzt, und bieten einen „Speichern unter“-Dialog an.

### text/plain

Dies ist der Standardtyp für Textdateien. Obwohl er eigentlich „unbekannte Textdatei“ bedeutet, gehen Browser davon aus, dass sie die Datei anzeigen können.

> [!NOTE]
> `text/plain` bedeutet nicht „jede Art von Textdaten“.
> Wenn Browser eine bestimmte Art von Textdaten erwarten, betrachten sie diesen Typ wahrscheinlich nicht als passend.
> Wenn sie beispielsweise über ein {{HTMLElement("link")}}-Element, das eine CSS-Datei angibt, eine Datei mit dem Typ `text/plain` herunterladen, erkennen sie diese nicht als gültige CSS-Datei.
> Es muss der CSS-MIME-Typ `text/css` verwendet werden.

### text/css

CSS-Dateien, mit denen eine Webseite gestaltet wird, **müssen** mit `text/css` gesendet werden.
Wenn ein Server die Endung `.css` nicht als Kennzeichen für CSS-Dateien erkennt, sendet er sie möglicherweise mit dem MIME-Typ `text/plain` oder `application/octet-stream`.
Dann erkennen die meisten Browser sie nicht als CSS und ignorieren sie.

### text/html

Alle HTML-Inhalte sollten mit diesem Typ bereitgestellt werden. Alternative MIME-Typen für XHTML (wie `application/xhtml+xml`) sind heutzutage meist nicht sinnvoll.

> [!NOTE]
> Verwenden Sie `application/xml` oder `application/xhtml+xml`, wenn Sie die strengen Parsing-Regeln von XML, [`<![CDATA[…]]>`](/de/docs/Web/API/CDATASection)-Abschnitte oder Elemente benötigen, die nicht zu den HTML-, SVG- oder MathML-Namensräumen gehören.

### text/javascript

JavaScript-Inhalte sollten immer mit dem MIME-Typ `text/javascript` bereitgestellt werden.
Aus historischen Gründen unterstützen Browser möglicherweise einige der unten aufgeführten [älteren JavaScript-Typen](#ältere_javascript-mime-typen). Sie sollten sich jedoch nicht darauf verlassen, dass Skripte mit einem anderen MIME-Typ als `text/javascript` immer geladen oder ausgeführt werden.

Beachten Sie, dass das Attribut [`type`](/de/docs/Web/HTML/Reference/Elements/script/type) von {{htmlelement("script")}}-Elementen in HTML nur den **wesentlichen Bestandteil des JavaScript-MIME-Typs** enthalten darf: `text/javascript` oder eines der Schlüsselwörter `module` (für ES-Module) oder `importmap`.
Wird im Attribut `type` ein Parameter wie `charset=utf-8` angegeben, entspricht dies dem Festlegen von `type` auf [einen nicht erkannten Wert](/de/docs/Web/HTML/Reference/Elements/script/type#any_other_value): Der Skriptinhalt wird als Datenblock behandelt und nicht als JavaScript ausgeführt.
Beachten Sie, dass `type="text/javascript"` nicht mehr angegeben werden muss. Dies ist der Standardwert für `<script>`-Elemente, sodass Sie das Attribut `type` in diesem Fall ganz weglassen können.
Beim HTTP-Header {{httpheader("Content-Type")}} hingegen können Sie den Parameter `charset` wie üblich optional angeben.

Weitere Informationen finden Sie im [IANA-Verzeichnis der Medientypen](https://www.iana.org/assignments/media-types#text), in [RFC 9239](https://www.rfc-editor.org/info/rfc9239/) und in der [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/scripting.html#scriptingLanguages:text/javascript).

#### Ältere JavaScript-MIME-Typen

Neben dem MIME-Typ `text/javascript` erlaubt der [MIME Sniffing Standard](https://mimesniff.spec.whatwg.org/) aus historischen Gründen, JavaScript auch mit einem der folgenden älteren JavaScript-MIME-Typen bereitzustellen. Dieser Standard legt fest, wie Browser MIME-Typen interpretieren und entscheiden sollen, wie sie mit Inhalten ohne gültigen MIME-Typ umgehen:

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
> Auch wenn ein bestimmter {{Glossary("user_agent", "User Agent")}} einige oder alle dieser Typen unterstützt, sollten Sie nur `text/javascript` verwenden.
> Dies ist der einzige MIME-Typ, dessen Funktionieren jetzt und in Zukunft gewährleistet ist.

### application/json

{{Glossary("JSON", "JavaScript Object Notation (JSON)")}} ist ein standardisiertes textbasiertes Format zur Darstellung strukturierter Daten, das auf der Syntax von JavaScript-Objekten beruht.
Es wird häufig zur Datenübertragung in Webanwendungen verwendet.

### Bildtypen

Dateien mit dem MIME-Haupttyp `image` enthalten Bilddaten.
Der Untertyp gibt an, welches Bilddateiformat die Daten haben.

Die folgenden Bildtypen werden häufig genug verwendet, um für den Einsatz auf Webseiten als _sicher_ zu gelten:

- [`image/apng`](/de/docs/Web/Media/Guides/Formats/Image_types#apng_animated_portable_network_graphics): Animated Portable Network Graphics (APNG)
- [`image/avif`](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image): AV1 Image File Format (AVIF)
- [`image/gif`](/de/docs/Web/Media/Guides/Formats/Image_types#gif_graphics_interchange_format): Graphics Interchange Format (GIF)
- [`image/jpeg`](/de/docs/Web/Media/Guides/Formats/Image_types#jpeg_joint_photographic_experts_group_image): Bildformat der Joint Photographic Experts Group (JPEG)
- [`image/png`](/de/docs/Web/Media/Guides/Formats/Image_types#png_portable_network_graphics): Portable Network Graphics (PNG)
- [`image/svg+xml`](/de/docs/Web/Media/Guides/Formats/Image_types#svg_scalable_vector_graphics): Scalable Vector Graphics (SVG)
- [`image/webp`](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image): Web Picture Format (WEBP)

Der [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types#common_image_file_types) enthält Informationen und Empfehlungen dazu, wann die verschiedenen Bildformate verwendet werden sollten.

### Audio- und Videotypen

Wie bei Bildern schreibt HTML nicht vor, dass Webbrowser bestimmte Datei- und Codec-Typen für die Elemente {{HTMLElement("audio")}} und {{HTMLElement("video")}} unterstützen müssen. Berücksichtigen Sie daher bei der Auswahl von Dateityp und Codecs für Medien Ihre Zielgruppe sowie die Browser und Browserversionen, die diese möglicherweise verwendet.

Unser [Leitfaden zu Mediencontainerformaten](/de/docs/Web/Media/Guides/Formats/Containers) enthält eine Liste der Dateitypen, die von Webbrowsern üblicherweise unterstützt werden. Dazu kommen Informationen über besondere Anwendungsfälle, mögliche Nachteile und die Kompatibilität sowie weitere Details.

Die Leitfäden zu [Audio-Codecs](/de/docs/Web/Media/Guides/Formats/Audio_codecs) und [Video-Codecs](/de/docs/Web/Media/Guides/Formats/Video_codecs) führen verschiedene Codecs auf, die Webbrowser häufig unterstützen. Neben Angaben zur Kompatibilität enthalten sie technische Informationen, etwa zur Anzahl unterstützter Audiokanäle, zur verwendeten Komprimierung und zu geeigneten Bitraten.
Der Leitfaden zu den [von WebRTC verwendeten Codecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) ergänzt dies um die Codecs, die von den wichtigsten Webbrowsern unterstützt werden. So können Sie die Codecs auswählen, die die gewünschten Browser bestmöglich abdecken.

MIME-Typen von Audio- oder Videodateien geben normalerweise das Containerformat (den Dateityp) an.
Der optionale [Parameter für Codecs](/de/docs/Web/Media/Guides/Formats/codecs_parameter) kann zum MIME-Typ hinzugefügt werden, um die verwendeten Codecs und die bei der Codierung der Medien verwendeten Optionen genauer anzugeben, etwa Codec-Profil, Level oder ähnliche Informationen.

Weitere Informationen zu verbreiteten Medientypen finden Sie auf der Seite [Häufige MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types/Common_types).

### multipart/form-data

Der Typ `multipart/form-data` kann verwendet werden, um die Werte eines ausgefüllten [HTML-Formulars](/de/docs/Learn_web_development/Extensions/Forms) vom Browser an den Server zu senden.

Als Multipart-Dokumentformat besteht er aus mehreren Teilen, die durch eine Begrenzungszeichenfolge getrennt sind (eine Zeichenfolge, die mit zwei Bindestrichen `--` beginnt).
Jeder Teil ist eine eigenständige Einheit mit eigenen HTTP-Headern, darunter {{HTTPHeader("Content-Disposition")}} und bei Datei-Upload-Feldern {{HTTPHeader("Content-Type")}}.

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

Wenn der Statuscode {{HTTPStatus("206", "206 Partial Content")}} gesendet wird, gibt dieser MIME-Typ an, dass das Dokument aus mehreren Teilen besteht – einem für jeden angeforderten Bereich. Wie bei anderen Multipart-Typen verwendet der {{HTTPHeader("Content-Type")}}-Header einen `boundary`-Parameter, um die Teile voneinander zu trennen.
Jeder Teil hat einen {{HTTPHeader("Content-Type")}}-Header mit seinem tatsächlichen Typ und einen {{HTTPHeader("Content-Range")}}-Header, der den dargestellten Bereich angibt.

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

Manche Serverkonfigurationen verwenden den zugeordneten MIME-Typ für Optimierungen wie das Zusammenfügen von Dateien, Komprimierung oder Caching. Ein Beispiel für eine Apache-Konfiguration, die Dateien bestimmter MIME-Typen komprimiert, finden Sie unter [h5bp/server-configs-apache](https://github.com/h5bp/server-configs-apache/blob/main/h5bp/web_performance/compression.conf).

Die meisten Webserver senden nicht erkannte Ressourcen mit dem MIME-Typ `application/octet-stream`.
Aus Sicherheitsgründen erlauben die meisten Browser für solche Ressourcen keine benutzerdefinierte Standardaktion wie „In Word öffnen“. Stattdessen müssen Benutzer die Datei erst auf einem Datenträger speichern, um sie zu verwenden.

Einige häufige Fehlkonfigurationen von Servern:

- RAR-komprimierte Dateien.
  Idealerweise würde hier der tatsächliche Typ der ursprünglichen Dateien angegeben. Das ist jedoch oft unmöglich, da .RAR-Dateien mehrere Ressourcen unterschiedlicher Typen enthalten können.
  Konfigurieren Sie den Server in diesem Fall so, dass er `application/x-rar-compressed` sendet.
- Audio und Video.
  Nur Ressourcen mit dem richtigen MIME-Typ werden in {{HTMLElement("video")}}- oder {{HTMLElement("audio")}}-Elementen wiedergegeben.
  Geben Sie unbedingt den richtigen [Medientyp für Audio und Video](/de/docs/Web/Media/Guides/Formats) an.
- Proprietäre Dateitypen.
  Ein spezifischer Typ wie `application/vnd.mspowerpoint` ermöglicht es Benutzern, solche Dateien automatisch in der Präsentationssoftware ihrer Wahl zu öffnen.

## MIME-Sniffing

Wenn ein MIME-Typ fehlt oder Browser ihn in bestimmten Fällen für falsch halten, können sie _MIME-Sniffing_ durchführen: Sie versuchen dann, den richtigen MIME-Typ anhand der Bytes der Ressource zu ermitteln.

Jeder Browser führt MIME-Sniffing anders und unter anderen Umständen durch.
(Safari berücksichtigt beispielsweise die Dateiendung in der URL, wenn der gesendete MIME-Typ ungeeignet ist.)
Das kann Sicherheitsrisiken bergen, da manche MIME-Typen ausführbare Inhalte bezeichnen.
Server können MIME-Sniffing verhindern, indem sie den {{HTTPHeader("X-Content-Type-Options")}}-Header senden.

## Andere Möglichkeiten zur Angabe des Dokumenttyps

MIME-Typen sind nicht die einzige Möglichkeit, Informationen über den Dokumenttyp zu übermitteln:

- Manchmal werden Dateiendungen verwendet, insbesondere unter Microsoft Windows.
  Nicht alle Betriebssysteme messen diesen Endungen Bedeutung bei (beispielsweise Linux und macOS), und es gibt keine Garantie, dass sie korrekt sind.
- Magische Zahlen. Aus der Syntax verschiedener Formate lässt sich anhand ihrer Bytestruktur auf den Dateityp schließen.
  GIF-Dateien beginnen beispielsweise mit dem Hexadezimalwert `47 49 46 38 39` (`GIF89`) und PNG-Dateien mit `89 50 4E 47` (`.PNG`).
  Nicht alle Dateitypen haben magische Zahlen; daher ist auch diese Methode nicht zu 100 % zuverlässig.

## Siehe auch

- [Web-Medientechnologien](/de/docs/Web/Media)
- [Leitfaden zu im Web verwendeten Medientypen](/de/docs/Web/Media/Guides/Formats)
- [Server-MIME-Typen richtig konfigurieren](/de/docs/Learn_web_development/Extensions/Server-side/Configuring_server_MIME_types)
