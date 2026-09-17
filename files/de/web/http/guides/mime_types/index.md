---
title: Medientypen (MIME-Typen)
short-title: Media types
slug: Web/HTTP/Guides/MIME_types
l10n:
  sourceCommit: a4c63d2855b2f557e7d1ee821dee65011d569a41
---

Ein **Medientyp** (früher bekannt als **Multipurpose Internet Mail Extensions oder MIME-Typ**) gibt die Art und das Format eines Dokuments, einer Datei oder einer Sammlung von Bytes an.
MIME-Typen werden in {{RFC(6838)}} der IETF definiert und standardisiert.

Die [Internet Assigned Numbers Authority (IANA)](https://www.iana.org/) ist für alle offiziellen MIME-Typen verantwortlich. Die aktuellste und vollständigste Liste finden Sie auf ihrer Seite [Media Types](https://www.iana.org/assignments/media-types).

> [!WARNING]
> Browser verwenden den MIME-Typ, _nicht die Dateierweiterung_, um zu bestimmen, wie eine URL verarbeitet werden soll.
> Daher ist es wichtig, dass Webserver im {{HTTPHeader("Content-Type")}}-Header der Antwort den korrekten MIME-Typ senden.
> Ist dies nicht korrekt konfiguriert, interpretieren Browser den Inhalt von Dateien wahrscheinlich falsch, Websites funktionieren nicht korrekt, und heruntergeladene Dateien werden möglicherweise fehlerhaft behandelt.

## Aufbau eines MIME-Typs

Ein MIME-Typ besteht meist aus nur zwei Teilen: einem _Typ_ und einem _Subtyp_, die durch einen Schrägstrich (`/`) getrennt sind — ohne Leerzeichen dazwischen:

```plain
type/subtype
```

Der **_Typ_** stellt die allgemeine Kategorie dar, in die der Datentyp fällt, etwa `video` oder `text`.

Der **_Subtyp_** identifiziert die genaue Art von Daten des angegebenen Typs, die der MIME-Typ darstellt.
Beim MIME-Typ `text` könnte der Subtyp beispielsweise `plain` (Klartext), `html` (HTML-Quellcode) oder `calendar` (für iCalendar- bzw. `.ics`-Dateien) sein.

Jeder Typ hat seine eigene Menge möglicher Subtypen. Ein MIME-Typ hat immer sowohl einen Typ als auch einen Subtyp, niemals nur einen von beiden.

Ein optionaler **Parameter** kann hinzugefügt werden, um zusätzliche Details bereitzustellen:

```plain
type/subtype;parameter=value
```

Bei jedem MIME-Typ mit dem Haupttyp `text` können Sie beispielsweise den optionalen Parameter `charset` hinzufügen, um den für die Zeichen in den Daten verwendeten Zeichensatz anzugeben.
Wenn kein `charset` angegeben ist, lautet der Standardwert {{Glossary("ASCII", "ASCII")}} (`US-ASCII`), sofern er nicht durch die Einstellungen des {{Glossary("user_agent", "User Agents")}} überschrieben wird.
Um eine UTF-8-Textdatei anzugeben, wird der MIME-Typ `text/plain;charset=UTF-8` verwendet.

Bei MIME-Typen wird Groß- und Kleinschreibung nicht unterschieden, traditionell werden sie jedoch kleingeschrieben. Bei Parameterwerten kann die Groß- und Kleinschreibung relevant sein.

### Typen

Es gibt zwei Klassen von Typen: **diskrete** und **multipart**.
Diskrete Typen stellen eine einzelne Datei oder ein einzelnes Medium dar, etwa eine einzelne Text- oder Musikdatei oder ein einzelnes Video.
Ein Multipart-Typ stellt ein Dokument dar, das aus mehreren Bestandteilen besteht, von denen jeder seinen eigenen MIME-Typ haben kann; alternativ kann ein Multipart-Typ mehrere Dateien kapseln, die gemeinsam in einer Transaktion gesendet werden.
Multipart-MIME-Typen werden beispielsweise verwendet, wenn mehrere Dateien an eine E-Mail angehängt werden.

#### Diskrete Typen

Die derzeit bei der IANA registrierten diskreten Typen sind:

- `application`
  - : Jede Art binärer Daten, die nicht ausdrücklich in einen der anderen Typen fällt; entweder Daten, die auf irgendeine Weise ausgeführt oder interpretiert werden, oder binäre Daten, deren Verwendung eine bestimmte Anwendung oder Anwendungskategorie erfordert.
    Allgemeine binäre Daten (oder binäre Daten, deren tatsächlicher Typ unbekannt ist) sind `application/octet-stream`.
    Weitere häufige Beispiele sind `application/pdf`, `application/pkcs8` und `application/zip`.
    [(Siehe Typ-Registry für application bei IANA)](https://www.iana.org/assignments/media-types#application)
- `audio`
  - : Audio- oder Musikdaten. Beispiele sind `audio/mpeg` und `audio/vorbis`.
    [(Siehe Typ-Registry für audio bei IANA)](https://www.iana.org/assignments/media-types#audio)
- `example`
  - : Für die Verwendung als Platzhalter in Beispielen zur Nutzung von MIME-Typen reserviert.
    Diese sollten niemals außerhalb von Beispiel-Codeauflistungen und Dokumentationen verwendet werden.
    `example` kann auch als Subtyp verwendet werden;
    beispielsweise kann in einem Beispiel zur Arbeit mit Audio im Web der MIME-Typ `audio/example` verwendet werden, um anzuzeigen, dass der Typ ein Platzhalter ist und bei der Verwendung des Codes in der Praxis durch einen passenden Typ ersetzt werden sollte.
- `font`
  - : Daten zu Schriftarten bzw. Schrifttypen. Häufige Beispiele sind `font/woff`, `font/ttf` und `font/otf`.
    [(Siehe Typ-Registry für font bei IANA)](https://www.iana.org/assignments/media-types#font)
- `image`
  - : Bild- oder Grafikdaten, einschließlich sowohl statischer Bitmap- und Vektorbilder als auch animierter Versionen statischer Bildformate wie animiertes {{Glossary("GIF", "GIF")}} oder APNG.
    Häufige Beispiele sind `image/jpeg`, `image/png` und `image/svg+xml`.
    [(Siehe Typ-Registry für image bei IANA)](https://www.iana.org/assignments/media-types#image)
- `model`
  - : Modelldaten für ein 3D-Objekt oder eine Szene. Beispiele sind `model/3mf` und `model/vrml`.
    [(Siehe Typ-Registry für model bei IANA)](https://www.iana.org/assignments/media-types#model)
- `text`
  - : Reine Textdaten, einschließlich aller für Menschen lesbaren Inhalte, Quellcode oder Textdaten wie Daten im comma-separated value (CSV)-Format.
    Beispiele sind `text/plain`, `text/csv` und `text/html`.
    [(Siehe Typ-Registry für text bei IANA)](https://www.iana.org/assignments/media-types#text)
- `video`
  - : Videodaten oder -dateien, etwa MP4-Filme (`video/mp4`).
    [(Siehe Typ-Registry für video bei IANA)](https://www.iana.org/assignments/media-types#video)

Für Textdokumente ohne spezifischen Subtyp sollte `text/plain` verwendet werden.
Ebenso sollte für binäre Dokumente ohne spezifischen oder bekannten Subtyp `application/octet-stream` verwendet werden.

#### Multipart-Typen

**Multipart**-Typen bezeichnen eine Kategorie von Dokumenten, die in Teile aufgeteilt sind, oft mit unterschiedlichen MIME-Typen; sie können auch — insbesondere in E-Mail-Szenarien — mehrere getrennte Dateien darstellen, die alle Teil derselben Transaktion sind. Sie stellen ein **zusammengesetztes Dokument** dar.

Mit Ausnahme von `multipart/form-data`, das in der {{HTTPMethod("POST")}}-Methode von [HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms) verwendet wird, und `multipart/byteranges`, das mit {{HTTPStatus("206")}} `Partial Content` zum Senden eines Teils eines Dokuments verwendet wird, behandelt HTTP Multipart-Dokumente nicht auf besondere Weise: Die Nachricht wird an den Browser übertragen, der wahrscheinlich ein Fenster „Speichern unter“ anzeigt, wenn er nicht weiß, wie das Dokument dargestellt werden soll.

Es gibt zwei Multipart-Typen:

- `message`
  - : Eine Nachricht, die andere Nachrichten kapselt. Dies kann beispielsweise verwendet werden, um eine E-Mail darzustellen, die eine weitergeleitete Nachricht als Teil ihrer Daten enthält, oder um das Senden sehr großer Nachrichten in Blöcken zu ermöglichen, als handele es sich um mehrere Nachrichten.
    Beispiele sind `message/rfc822` (für zitierte weitergeleitete oder beantwortete Nachrichten) und `message/partial`, um das automatische Aufteilen einer großen Nachricht in kleinere Nachrichten zu ermöglichen, die vom Empfänger wieder zusammengesetzt werden.
    [(Siehe Typ-Registry für message bei IANA)](https://www.iana.org/assignments/media-types#message)
- `multipart`
  - : Daten, die aus mehreren Komponenten bestehen, welche jeweils unterschiedliche MIME-Typen haben können.
    Beispiele sind `multipart/form-data` (für Daten, die mithilfe der [`FormData`](/de/docs/Web/API/FormData)-API erzeugt werden) und `multipart/byteranges` (definiert in {{RFC(7233, "", "5.4.1")}} und verwendet mit der {{Glossary("HTTP", "HTTP")}}-Antwort {{HTTPStatus(206)}} „Partial Content“, die zurückgegeben wird, wenn die abgerufenen Daten nur einen Teil des Inhalts darstellen, etwa bei der Bereitstellung mithilfe des {{HTTPHeader("Range")}}-Headers).
    [(Siehe Typ-Registry für multipart bei IANA)](https://www.iana.org/assignments/media-types#multipart)

## Wichtige MIME-Typen für Webentwickler

### application/octet-stream

Dies ist der Standardwert für binäre Dateien. Da er eine _unbekannte binäre_ Datei bedeutet, führen Browser sie normalerweise nicht aus und fragen nicht einmal, ob sie ausgeführt werden soll. Sie behandeln sie, als wäre der {{HTTPHeader("Content-Disposition")}}-Header auf `attachment` gesetzt, und schlagen einen Dialog „Speichern unter“ vor.

### text/plain

Dies ist der Standardwert für Textdateien. Obwohl er eigentlich „unbekannte Textdatei“ bedeutet, gehen Browser davon aus, dass sie sie darstellen können.

> [!NOTE]
> `text/plain` bedeutet nicht „jede Art von Textdaten“.
> Wenn Browser eine bestimmte Art von Textdaten erwarten, betrachten sie dies wahrscheinlich nicht als Übereinstimmung.
> Insbesondere wenn sie eine `text/plain`-Datei von einem {{HTMLElement("link")}}-Element herunterladen, das eine CSS-Datei deklariert, erkennen sie diese bei `text/plain` nicht als gültige CSS-Datei.
> Es muss der CSS-MIME-Typ `text/css` verwendet werden.

### text/css

CSS-Dateien, die zum Gestalten einer Webseite verwendet werden, **müssen** mit `text/css` gesendet werden.
Wenn ein Server die Endung `.css` für CSS-Dateien nicht erkennt, kann er sie mit den MIME-Typen `text/plain` oder `application/octet-stream` senden.
In diesem Fall werden sie von den meisten Browsern nicht als CSS erkannt und ignoriert.

### text/html

Alle HTML-Inhalte sollten mit diesem Typ bereitgestellt werden. Alternative MIME-Typen für XHTML (wie `application/xhtml+xml`) sind heutzutage größtenteils nutzlos.

> [!NOTE]
> Verwenden Sie `application/xml` oder `application/xhtml+xml`, wenn Sie die strikten Parsing-Regeln von XML, [`<![CDATA[…]]>`](/de/docs/Web/API/CDATASection)-Abschnitte oder Elemente verwenden möchten, die nicht aus HTML-/SVG-/MathML-Namensräumen stammen.

### text/javascript

JavaScript-Inhalte sollten immer mit dem MIME-Typ `text/javascript` bereitgestellt werden.
Aus historischen Gründen unterstützen Browser möglicherweise einige der unten aufgeführten [veralteten JavaScript-Typen](#veraltete_javascript-mime-typen), Sie sollten jedoch nicht davon ausgehen, dass Skripte, die mit einem anderen MIME-Typ als `text/javascript` bereitgestellt werden, immer geladen oder ausgeführt werden.

Beachten Sie, dass das Attribut [`type`](/de/docs/Web/HTML/Reference/Elements/script/type) für {{htmlelement("script")}}-Elemente in HTML nur die **JavaScript-MIME-Typ-Essenz** enthalten darf: `text/javascript` oder eines der Schlüsselwörter `module` (für ES-Module) oder `importmap`.
Das Einschließen eines Parameters im `type`-Attribut, beispielsweise `charset=utf-8`, entspricht dem Setzen von `type` auf [einen nicht erkannten Wert](/de/docs/Web/HTML/Reference/Elements/script/type#any_other_value): Der Skriptinhalt wird als Datenblock behandelt und nicht als JavaScript ausgeführt.
Beachten Sie, dass das Setzen von `type="text/javascript"` nicht mehr erforderlich ist; dies ist der Standard für `<script>`-Elemente, sodass Sie das `type`-Attribut in diesem Fall vollständig weglassen können.
Im Gegensatz dazu können Sie bei Verwendung des HTTP-Headers {{httpheader("Content-Type")}} wie gewohnt optional den Parameter `charset` angeben.

Weitere Informationen finden Sie in der [IANA-Media-Types-Registry](https://www.iana.org/assignments/media-types#text), in [RFC 9239](https://www.rfc-editor.org/info/rfc9239/) und in der [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/scripting.html#scriptingLanguages:text/javascript).

#### Veraltete JavaScript-MIME-Typen

Zusätzlich zum MIME-Typ `text/javascript` erlaubt der [MIME Sniffing Standard](https://mimesniff.spec.whatwg.org/) aus historischen Gründen ebenfalls, JavaScript mit einem der folgenden veralteten JavaScript-MIME-Typen bereitzustellen:
(die Definition dafür, wie Browser MIME-Typen interpretieren und herausfinden sollen, was mit Inhalten ohne gültigen MIME-Typ zu tun ist)

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
> Es ist der einzige MIME-Typ, dessen Funktionieren jetzt und in Zukunft garantiert ist.

### application/json

{{Glossary("JSON", "JavaScript Object Notation (JSON)")}} ist ein standardisiertes textbasiertes Format zur Darstellung strukturierter Daten, das auf der JavaScript-Objektsyntax basiert.
Es wird häufig zur Übertragung von Daten in Webanwendungen verwendet.

### Bildtypen

Dateien mit dem MIME-Typ `image` enthalten Bilddaten.
Der Subtyp gibt an, welches konkrete Bilddateiformat die Daten darstellen.

Die folgenden Bildtypen werden häufig genug verwendet, um als _sicher_ für den Einsatz auf Webseiten zu gelten:

- [`image/apng`](/de/docs/Web/Media/Guides/Formats/Image_types#apng_animated_portable_network_graphics): Animated Portable Network Graphics (APNG)
- [`image/avif`](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image): AV1 Image File Format (AVIF)
- [`image/gif`](/de/docs/Web/Media/Guides/Formats/Image_types#gif_graphics_interchange_format): Graphics Interchange Format (GIF)
- [`image/jpeg`](/de/docs/Web/Media/Guides/Formats/Image_types#jpeg_joint_photographic_experts_group_image): Bild der Joint Photographic Experts Group (JPEG)
- [`image/png`](/de/docs/Web/Media/Guides/Formats/Image_types#png_portable_network_graphics): Portable Network Graphics (PNG)
- [`image/svg+xml`](/de/docs/Web/Media/Guides/Formats/Image_types#svg_scalable_vector_graphics): Scalable Vector Graphics (SVG)
- [`image/webp`](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image): Web Picture Format (WEBP)

Der [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types#common_image_file_types) enthält Informationen und Empfehlungen dazu, wann die verschiedenen Bildformate verwendet werden sollten.

### Audio- und Videotypen

Wie bei Bildern schreibt HTML nicht vor, dass Webbrowser bestimmte Datei- und Codec-Typen für die Elemente {{HTMLElement("audio")}} und {{HTMLElement("video")}} unterstützen müssen. Daher ist es bei der Auswahl des Dateityps und der Codecs für Medien wichtig, Ihre Zielgruppe sowie das Spektrum der Browser und Browserversionen zu berücksichtigen, die sie möglicherweise verwenden.

Unser [Leitfaden zu Mediencontainerformaten](/de/docs/Web/Media/Guides/Formats/Containers) enthält eine Liste der von Webbrowsern üblicherweise unterstützten Dateitypen, einschließlich Informationen über mögliche spezielle Anwendungsfälle, Nachteile und Kompatibilitätsinformationen sowie weiterer Details.

Die Leitfäden zu [Audio-Codecs](/de/docs/Web/Media/Guides/Formats/Audio_codecs) und [Video-Codecs](/de/docs/Web/Media/Guides/Formats/Video_codecs) führen die verschiedenen Codecs auf, die Webbrowser häufig unterstützen. Sie bieten Kompatibilitätsdetails sowie technische Informationen, etwa wie viele Audiokanäle sie unterstützen, welche Art von Komprimierung verwendet wird und bei welchen Bitraten sie geeignet sind.
Der Leitfaden zu den [von WebRTC verwendeten Codecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) erweitert dies, indem er speziell die von den wichtigsten Webbrowsern unterstützten Codecs behandelt, sodass Sie die Codecs auswählen können, die das von Ihnen unterstützte Browserspektrum am besten abdecken.

Bei den MIME-Typen von Audio- oder Videodateien geben diese üblicherweise das Containerformat (den Dateityp) an.
Der optionale [Parameter `codecs`](/de/docs/Web/Media/Guides/Formats/codecs_parameter) kann zum MIME-Typ hinzugefügt werden, um genauer anzugeben, welche Codecs verwendet werden und welche Optionen zur Kodierung der Medien verwendet wurden, etwa Codec-Profil, Level oder ähnliche Informationen.

Weitere Informationen zu gängigen Medientypen finden Sie auf der Seite [Häufige MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types/Common_types).

### multipart/form-data

Der Typ `multipart/form-data` kann verwendet werden, wenn die Werte eines ausgefüllten [HTML-Formulars](/de/docs/Learn_web_development/Extensions/Forms) vom Browser an den Server gesendet werden.

Als Multipart-Dokumentformat besteht er aus verschiedenen Teilen, die durch eine Boundary getrennt sind (eine Zeichenkette, die mit einem doppelten Bindestrich `--` beginnt).
Jeder Teil ist eine eigene Entität mit eigenen HTTP-Headern, {{HTTPHeader("Content-Disposition")}} und {{HTTPHeader("Content-Type")}} für Datei-Upload-Felder.

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

Wenn der Statuscode {{HTTPStatus("206", "206 Partial Content")}} gesendet wird, zeigt dieser MIME-Typ an, dass das Dokument aus mehreren Teilen besteht, einem für jeden der angeforderten Bereiche. Wie bei anderen Multipart-Typen verwendet der {{HTTPHeader("Content-Type")}} eine `boundary`, um die Teile zu trennen.
Jeder Teil hat einen {{HTTPHeader("Content-Type")}}-Header mit seinem tatsächlichen Typ und einen {{HTTPHeader("Content-Range")}}-Header für den dargestellten Bereich.

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

## Bedeutung des Festlegens des korrekten MIME-Typs

Einige Serverkonfigurationen verwenden möglicherweise den zugehörigen MIME-Typ, um Optimierungen wie Dateiverkettung, Komprimierung oder Caching durchzuführen. Ein Beispiel für eine Apache-Konfiguration, die Dateien bestimmter MIME-Typen komprimiert, finden Sie unter [h5bp/server-configs-apache](https://github.com/h5bp/server-configs-apache/blob/main/h5bp/web_performance/compression.conf).

Die meisten Webserver senden nicht erkannte Ressourcen mit dem MIME-Typ `application/octet-stream`.
Aus Sicherheitsgründen erlauben die meisten Browser nicht, für solche Ressourcen eine benutzerdefinierte Standardaktion festzulegen (etwa „In Word öffnen“), und zwingen den Benutzer dazu, sie zur Verwendung auf dem Datenträger zu speichern.

Einige häufige fehlerhafte Serverkonfigurationen:

- RAR-komprimierte Dateien.
  In diesem Fall wäre der tatsächliche Typ der Originaldateien ideal; dies ist oft unmöglich, da .RAR-Dateien mehrere Ressourcen unterschiedlicher Typen enthalten können.
  Konfigurieren Sie den Server in diesem Fall so, dass er `application/x-rar-compressed` sendet.
- Audio und Video.
  Nur Ressourcen mit dem korrekten MIME-Typ werden in {{HTMLElement("video")}}- oder {{HTMLElement("audio")}}-Elementen wiedergegeben.
  Stellen Sie sicher, dass Sie den korrekten [Medientyp für Audio und Video](/de/docs/Web/Media/Guides/Formats) angeben.
- Proprietäre Dateitypen.
  Ein spezifischer Typ wie `application/vnd.mspowerpoint` ermöglicht Benutzern, solche Dateien automatisch in der Präsentationssoftware ihrer Wahl zu öffnen.

## MIME-Sniffing

Wenn ein MIME-Typ fehlt oder Browser in bestimmten Fällen davon ausgehen, dass er falsch ist, können sie _MIME-Sniffing_ durchführen — also durch Betrachten der Bytes der Ressource den korrekten MIME-Typ erraten.

Jeder Browser führt MIME-Sniffing unterschiedlich und unter unterschiedlichen Umständen durch.
Safari betrachtet beispielsweise die Dateierweiterung in der URL, wenn der gesendete MIME-Typ ungeeignet ist.
Es gibt Sicherheitsbedenken, da einige MIME-Typen ausführbare Inhalte darstellen.
Server können MIME-Sniffing verhindern, indem sie den Header {{HTTPHeader("X-Content-Type-Options")}} senden.

## Andere Methoden zur Übermittlung des Dokumenttyps

MIME-Typen sind nicht die einzige Möglichkeit, Informationen über den Dokumenttyp zu übermitteln:

- Dateinamenssuffixe werden manchmal verwendet, insbesondere unter Microsoft Windows.
  Nicht alle Betriebssysteme betrachten diese Suffixe als aussagekräftig, etwa Linux und macOS, und es gibt keine Garantie dafür, dass sie korrekt sind.
- Magic Numbers. Die Syntax verschiedener Formate ermöglicht die Ableitung des Dateityps durch Betrachtung ihrer Bytestruktur.
  Beispielsweise beginnen GIF-Dateien mit dem hexadezimalen Wert `47 49 46 38 39` (`GIF89`) und PNG-Dateien mit `89 50 4E 47` (`.PNG`).
  Nicht alle Dateitypen haben Magic Numbers, daher ist auch dies nicht zu 100 % zuverlässig.

## Siehe auch

- [Webmedientechnologien](/de/docs/Web/Media)
- [Leitfaden zu im Web verwendeten Medientypen](/de/docs/Web/Media/Guides/Formats)
- [Korrekte Konfiguration von Server-MIME-Typen](/de/docs/Learn_web_development/Extensions/Server-side/Configuring_server_MIME_types)
