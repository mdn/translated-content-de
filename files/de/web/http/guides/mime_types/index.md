---
title: Medientypen (MIME-Typen)
short-title: Media types
slug: Web/HTTP/Guides/MIME_types
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{HTTPSidebar}}

Ein **Medientyp** (früher bekannt als **Multipurpose Internet Mail Extensions oder MIME-Typ**) gibt die Art und das Format eines Dokuments, einer Datei oder einer Sammlung von Bytes an. MIME-Typen sind definiert und standardisiert in der IETF's {{RFC(6838)}}.

Die [Internet Assigned Numbers Authority (IANA)](https://www.iana.org/) ist für alle offiziellen MIME-Typen verantwortlich, und Sie können die aktuellste und vollständigste Liste auf deren [Medientypen](https://www.iana.org/assignments/media-types/media-types.xhtml)-Seite finden.

> [!WARNING]
> Browser verwenden den MIME-Typ, _nicht die Dateierweiterung_, um zu bestimmen, wie eine URL verarbeitet wird.
> Daher ist es wichtig, dass Webserver den korrekten MIME-Typ im {{HTTPHeader("Content-Type")}} Header der Antwort senden.
> Wenn dies nicht korrekt konfiguriert ist, werden Browser wahrscheinlich die Inhalte von Dateien falsch interpretieren, Seiten funktionieren nicht korrekt und heruntergeladene Dateien können falsch gehandhabt werden.

## Struktur eines MIME-Typs

Ein MIME-Typ besteht meist aus zwei Teilen: einem _Typ_ und einem _Subtyp_, getrennt durch einen Schrägstrich (`/`) — ohne Leerraum dazwischen:

```plain
type/subtype
```

Der **_Typ_** repräsentiert die allgemeine Kategorie, in die der Datentyp fällt, wie `video` oder `text`.

Der **_Subtyp_** identifiziert die genaue Art von Daten des angegebenen Typs, den der MIME-Typ repräsentiert. Beispielsweise könnte für den MIME-Typ `text` der Subtyp `plain` (Klartext), `html` ({{Glossary("HTML", "HTML")}}-Quellcode) oder `calendar` (für iCalendar/`.ics`) Dateien sein.

Jeder Typ hat seine eigenen möglichen Subtypen. Ein MIME-Typ hat immer sowohl einen Typ als auch einen Subtyp, niemals nur den einen oder anderen.

Ein optionaler **Parameter** kann hinzugefügt werden, um zusätzliche Details bereitzustellen:

```plain
type/subtype;parameter=value
```

Zum Beispiel können Sie für jeden MIME-Typ, dessen Haupttyp `text` ist, den optionalen `charset`-Parameter hinzufügen, um den Zeichensatz anzugeben, der für die Zeichen in den Daten verwendet wird. Wenn kein `charset` angegeben wird, ist der Standard {{Glossary("ASCII", "ASCII")}} (`US-ASCII`), es sei denn, dies wird durch die Einstellungen des {{Glossary("user_agent", "User-Agents")}} überschrieben. Um eine UTF-8-Textdatei anzugeben, wird der MIME-Typ `text/plain;charset=UTF-8` verwendet.

MIME-Typen sind nicht case-sensitiv, werden jedoch traditionell in Kleinbuchstaben geschrieben. Die Parameterwerte können case-sensitiv sein.

### Typen

Es gibt zwei Klassen von Typen: **diskret** und **multipart**. Diskrete Typen sind Typen, die eine einzelne Datei oder ein Medium repräsentieren, wie z.B. eine einzelne Text- oder Musikdatei oder ein einzelnes Video. Ein Multipart-Typ repräsentiert ein Dokument, das aus mehreren Komponenten besteht, von denen jede ihren eigenen individuellen MIME-Typ haben kann; oder ein Multipart-Typ kann mehrere zusammen gesendete Dateien in einer Transaktion kapseln. Zum Beispiel werden Multipart-MIME-Typen verwendet, wenn mehrere Dateien an eine E-Mail angehängt werden.

#### Diskrete Typen

Die bei der IANA derzeit registrierten diskreten Typen sind:

- `application`
  - : Jede Art von binären Daten, die sich nicht ausdrücklich in eine der anderen Typen einordnen lassen; entweder Daten, die in irgendeiner Weise ausgeführt oder interpretiert werden oder binäre Daten, die eine spezifische Anwendung oder Kategorie von Anwendungen zur Nutzung erfordern. Generische binäre Daten (oder binäre Daten, deren wahrer Typ unbekannt ist) sind `application/octet-stream`. Weitere gängige Beispiele sind `application/pdf`, `application/pkcs8` und `application/zip`.
    [(Siehe Anwendungstyp-Registrierung bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#application)
- `audio`
  - : Audio- oder Musikdaten. Beispiele sind `audio/mpeg`, `audio/vorbis`.
    [(Siehe Audio-Typ-Registrierung bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#audio)
- `example`
  - : Reserviert für die Verwendung als Platzhalter in Beispielen, die zeigen, wie man MIME-Typen verwendet. Diese sollten niemals außerhalb von Codebeispielauflistungen und Dokumentationen verwendet werden. `example` kann auch als Subtyp verwendet werden; in einem Beispiel, das sich mit dem Web-Audio-Handling befasst, kann der MIME-Typ `audio/example` verwendet werden, um anzugeben, dass der Typ ein Platzhalter ist und durch einen angemessenen Typ ersetzt werden sollte, wenn der Code in der realen Welt verwendet wird.
- `font`
  - : Schrift-/Schriftartendaten. Gängige Beispiele sind `font/woff`, `font/ttf` und `font/otf`.
    [(Siehe Schrift-Art-Registrierung bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#font)
- `image`
  - : Bild- oder grafische Daten, einschließlich sowohl Bitmap- als auch Vektor-Standbilder sowie
    animierte Versionen von Standbildformaten wie animierte {{Glossary("GIF", "GIF")}} oder APNG. Gängige Beispiele sind `image/jpeg`, `image/png` und `image/svg+xml`.
    [(Siehe Bildtyp-Registrierung bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#image)
- `model`
  - : Modelldaten für ein 3D-Objekt oder eine Szene. Beispiele sind `model/3mf` und `model/vrml`.
    [(Siehe Modell-Typ-Registrierung bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#model)
- `text`
  - : Nur-Text-Daten, einschließlich aller menschenlesbaren Inhalte, Quellcodes oder textbasierte Daten wie durch Kommas getrennte (CSV) formatierte Daten. Beispiele umfassen: `text/plain`, `text/csv` und `text/html`.
    [(Siehe Texttyp-Registrierung bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#text)
- `video`
  - : Videodaten oder -dateien, wie MP4-Filme (`video/mp4`).
    [(Siehe Videotyp-Registrierung bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#video)

Für Textdokumente ohne speziellen Subtyp sollte `text/plain` verwendet werden. Ebenso sollte für Binärdokumente ohne spezifizierten oder bekannten Subtyp `application/octet-stream` verwendet werden.

#### Multipart-Typen

**Multipart** Typen zeigen eine Kategorie von Dokumenten an, die in
Teile unterteilt sind, oft mit verschiedenen MIME-Typen; sie können auch verwendet werden — insbesondere in E-Mail-Szenarien — um mehrere, separate Dateien darzustellen, die alle Teil derselben
Transaktion sind. Sie repräsentieren ein **Verbunddokument**.

Mit Ausnahme von `multipart/form-data`, das in der {{HTTPMethod("POST")}} Methode von [HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms) verwendet wird, und `multipart/byteranges`, das mit {{HTTPStatus("206")}} `Partial Content` verwendet wird, um Teile eines Dokuments zu senden, behandelt HTTP Multipart-Dokumente nicht auf besondere Weise: Die Nachricht wird an den Browser übertragen (der wahrscheinlich ein "Speichern unter"-Fenster anzeigt, wenn er nicht weiß, wie er das Dokument anzeigen soll).

Es gibt zwei Multipart-Typen:

- `message`
  - : Eine Nachricht, die andere Nachrichten kapselt. Kann verwendet werden, um beispielsweise eine E-Mail darzustellen, die eine weitergeleitete Nachricht als Teil ihrer Daten enthält, oder um das Versenden sehr großer Nachrichten in Teilen zu ermöglichen, als ob es mehrere Nachrichten wären. Beispiele umfassen `message/rfc822` (für weitergeleitete oder beantwortete Nachrichten) und `message/partial`, um das automatische Aufteilen einer großen Nachricht in kleinere Teile zur Wiederzusammenstellung durch den Empfänger zu ermöglichen.
    [(Siehe Nachrichtstyp-Registrierung bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#message)
- `multipart`
  - : Daten, die aus mehreren Komponenten bestehen, die individuell unterschiedliche MIME-Typen haben können. Beispiele umfassen `multipart/form-data` (für Daten, die mit der [`FormData`](/de/docs/Web/API/FormData) API erzeugt wurden) und `multipart/byteranges` (definiert in {{RFC(7233, "", "5.4.1")}} und verwendet mit {{Glossary("HTTP", "HTTP")}}'s {{HTTPStatus(206)}}
    "Partial Content" Antwort, die zurückgegeben wird, wenn die abgerufenen Daten nur ein Teil des Inhalts sind, wie sie mit dem {{HTTPHeader("Range")}} Header übermittelt werden).
    [(Siehe multipart-Typ-Registrierung bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#multipart)

## Wichtige MIME-Typen für Webentwickler

### application/octet-stream

Dies ist der Standard für Binärdateien. Da es _unbekannte binäre_ Datei bedeutet, führen Browser es normalerweise nicht aus und fragen nicht einmal, ob es ausgeführt werden soll. Sie behandeln es, als ob der {{HTTPHeader("Content-Disposition")}} Header auf `attachment` gesetzt wäre und schlagen einen "Speichern unter"-Dialog vor.

### text/plain

Dies ist der Standard für Textdateien. Auch wenn es wirklich "unbekannte Textdatei" bedeutet, gehen Browser davon aus, dass sie es anzeigen können.

> [!NOTE] > `text/plain` bedeutet nicht "jede Art von Textdaten."
> Wenn erwartet wird, dass eine bestimmte Art von Textdaten vorhanden ist, wird dies wahrscheinlich nicht als Übereinstimmung angesehen.
> Insbesondere wenn sie eine `text/plain` Datei von einem {{HTMLElement("link")}} Element herunterladen, das eine CSS-Datei deklariert, wird sie nicht als gültige CSS-Datei erkannt, wenn sie mit `text/plain` präsentiert wird.
> Der CSS-Mime-Typ `text/css` muss verwendet werden.

### text/css

CSS-Dateien, die zum Stylen einer Webseite verwendet werden, **müssen** mit `text/css` gesendet werden. Wenn ein Server das `.css`-Suffix für CSS-Dateien nicht erkennt, kann er sie mit den MIME-Typen `text/plain` oder `application/octet-stream` senden. In einem solchen Fall werden sie von den meisten Browsern nicht als CSS erkannt und ignoriert.

### text/html

Alle HTML-Inhalte sollten mit diesem Typ bereitgestellt werden. Alternative MIME-Typen für XHTML (wie `application/xhtml+xml`) sind heutzutage weitgehend nutzlos.

> [!NOTE]
> Verwenden Sie `application/xml` oder `application/xhtml+xml`, wenn Sie die strengen Parsing-Regeln von XML, [`<![CDATA[…]]>`](/de/docs/Web/API/CDATASection) Abschnitte oder Elemente, die nicht aus den HTML/SVG/MathML-Namensräumen stammen, wünschen.

### text/javascript

Gemäß dem [IANA-Medientypen-Register](https://www.iana.org/assignments/media-types/media-types.xhtml#text), [RFC 9239](https://www.rfc-editor.org/rfc/rfc9239.html) und der [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/scripting.html#scriptingLanguages:text/javascript) sollte JavaScript-Inhalt immer mit dem MIME-Typ `text/javascript` geliefert werden. Keine anderen MIME-Typen werden als gültig für JavaScript angesehen, und die Verwendung eines anderen MIME-Typs als `text/javascript` kann dazu führen, dass Skripte nicht geladen oder ausgeführt werden.

Manchmal wird JavaScript-Inhalt fälschlicherweise mit einem `charset`-Parameter als Teil des MIME-Typs geliefert – als Versuch, den Zeichensatz für den Skriptinhalt anzugeben. Dieser `charset`-Parameter ist für JavaScript-Inhalte nicht gültig und führt in den meisten Fällen dazu, dass ein Skript nicht geladen wird.

### application/json

{{Glossary("JSON", "JavaScript Object Notation (JSON)")}} ist ein standardisiertes textbasiertes Format zur Darstellung strukturierter Daten basierend auf der JavaScript-Objektsyntax. Es wird häufig zum Übertragen von Daten in Webanwendungen verwendet.

#### Veraltete JavaScript-MIME-Typen

Zusätzlich zu dem `text/javascript` MIME-Typ erlaubt der [MIME-Sniffing-Standard](https://mimesniff.spec.whatwg.org/) aus historischen Gründen (die Definition davon, wie Browser MIME-Typen interpretieren und herausfinden, was mit Inhalt, der keinen gültigen hat, zu tun ist) auch, JavaScript mit einem der folgenden veralteten JavaScript-MIME-Typen zu liefern:

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
> Auch wenn ein bestimmter {{Glossary("user_agent", "User-Agent")}} einen oder alle dieser unterstützten MIME-Typen unterstützen mag, sollten Sie nur `text/javascript` verwenden.
> Es ist der einzige MIME-Typ, dessen Funktionstüchtigkeit jetzt und in Zukunft garantiert ist.

### Bildtypen

Dateien, deren MIME-Typ `image` ist, enthalten Bilddaten. Der Subtyp spezifiziert das spezifische Bilddateiformat, das die Daten repräsentieren.

Die folgenden Bildtypen werden häufig genug verwendet, um als _sicher_ für die Verwendung auf Webseiten betrachtet zu werden:

- [`image/apng`](/de/docs/Web/Media/Guides/Formats/Image_types#apng_animated_portable_network_graphics): Animated Portable Network Graphics (APNG)
- [`image/avif`](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image): AV1 Image File Format (AVIF)
- [`image/gif`](/de/docs/Web/Media/Guides/Formats/Image_types#gif_graphics_interchange_format): Graphics Interchange Format (GIF)
- [`image/jpeg`](/de/docs/Web/Media/Guides/Formats/Image_types#jpeg_joint_photographic_experts_group_image): Joint Photographic Expert Group Image (JPEG)
- [`image/png`](/de/docs/Web/Media/Guides/Formats/Image_types#png_portable_network_graphics): Portable Network Graphics (PNG)
- [`image/svg+xml`](/de/docs/Web/Media/Guides/Formats/Image_types#svg_scalable_vector_graphics): Scalable Vector Graphics (SVG)
- [`image/webp`](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image): Web Picture Format (WEBP)

Der [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types#common_image_file_types) bietet Informationen und Empfehlungen darüber, wann die verschiedenen Bildformate verwendet werden sollten.

### Audio- und Videotypen

Wie es für Bilder der Fall ist, schreibt HTML nicht vor, dass Webbrowser bestimmte Dateitypen und Codecs für die {{HTMLElement("audio")}} und {{HTMLElement("video")}} Elemente unterstützen müssen. Es ist daher wichtig, Ihre Zielgruppe und die Bandbreite der von ihnen verwendeten Browser (und Versionen dieser Browser) zu berücksichtigen, wenn Sie den Dateityp und die Codecs auswählen, die Sie für Medien verwenden möchten.

Unser [Leitfaden zu Mediencontainerformaten](/de/docs/Web/Media/Guides/Formats/Containers) bietet eine Liste der Dateitypen, die von Webbrowsern häufig unterstützt werden, einschließlich Informationen darüber, welche speziellen Anwendungsfälle sie haben können, welche Nachteile sie haben und Informationen zur Kompatibilität sowie anderen Details.

Die [Audio-](/de/docs/Web/Media/Guides/Formats/Audio_codecs) und [Video-Codec](/de/docs/Web/Media/Guides/Formats/Video_codecs) Leitfäden listen die verschiedenen Codecs auf, die Webbrowser oft unterstützen, und bieten Kompatibilitätsdetails sowie technische Informationen darüber, wie viele Audiokanäle sie unterstützen, welche Art von Kompression verwendet wird und bei welchen Bitraten sie nützlich sind. Der [Leitfaden zu Codecs, die von WebRTC verwendet werden](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) erweitert dies, indem er speziell die von den großen Webbrowsern unterstützten Codecs abdeckt, so dass Sie die Codecs auswählen können, die am besten die Bandbreite an Browsern abdecken, die Sie unterstützen möchten.

Was die MIME-Typen von Audio- oder Videodateien betrifft, spezifizieren sie typischerweise das Containerformat (Dateityp). Der optionale [Codecs-Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter) kann dem MIME-Typ hinzugefügt werden, um weiter anzugeben, welche Codecs zu verwenden sind und welche Optionen zur Kodierung der Medien verwendet wurden, wie Codec-Profil, Level oder andere solche Informationen.

Weitere Informationen zu gängigen Medientypen finden Sie auf der Seite [Gängige MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types/Common_types).

### multipart/form-data

Der `multipart/form-data` Typ kann verwendet werden, wenn die Werte eines abgeschlossenen [HTML-Formulars](/de/docs/Learn_web_development/Extensions/Forms) vom Browser an den Server gesendet werden.

Als Multipart-Dokumentenformat besteht es aus verschiedenen Teilen, die durch eine Begrenzung (einen String, der mit einem doppelten Minuszeichen `--` beginnt) getrennt sind. Jeder Teil ist ein eigenes Entität mit eigenen HTTP-Headern, {{HTTPHeader("Content-Disposition")}}, und {{HTTPHeader("Content-Type")}} für das Hochladen von Dateien.

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

Der `multipart/byteranges` MIME-Typ wird verwendet, um partielle Antworten an den Browser zu senden.

Wenn der {{HTTPStatus("206", "206 Partial Content")}} Statuscode gesendet wird, zeigt dieser MIME-Typ an, dass das Dokument aus mehreren Teilen besteht, einer für jeden der angeforderten Bereiche. Wie andere Multipart-Typen verwendet der {{HTTPHeader("Content-Type")}} eine `boundary`, um die Teile zu trennen. Jedes Stück hat einen {{HTTPHeader("Content-Type")}} Header mit seinem tatsächlichen Typ und einen {{HTTPHeader("Content-Range")}} des Bereichs, den es darstellt.

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

## Wichtigkeit der Einstellung des korrekten MIME-Typs

Einige Serverkonfigurationen können den assoziierten MIME-Typ verwenden, um Optimierungen durchzuführen, wie Dateikonzatenation, Kompression oder Caching. Siehe [h5bp/server-configs-apache](https://github.com/h5bp/server-configs-apache/blob/main/h5bp/web_performance/compression.conf) für ein Beispiel einer Apache-Konfiguration, die Dateien bestimmter MIME-Typen komprimiert.

Die meisten Webserver senden nicht erkannte Ressourcen als den `application/octet-stream` MIME-Typ. Aus Sicherheitsgründen erlauben die meisten Browser nicht, eine benutzerdefinierte Standardaktion (wie "In Word öffnen") für solche Ressourcen festzulegen, und zwingen den Benutzer, es auf die Festplatte zu speichern, um es zu verwenden.

Einige häufige fehlerhafte Serverkonfigurationen:

- Mit RAR komprimierte Dateien. In diesem Fall wäre es ideal, den wahren Typ der Originaldateien zu kennen; dies ist oft unmöglich, da .RAR-Dateien mehrere Ressourcen unterschiedlicher Typen enthalten können. In diesem Fall konfigurieren Sie den Server so, dass er `application/x-rar-compressed` sendet.
- Audio und Video. Nur Ressourcen mit dem korrekten MIME-Typ werden in {{HTMLElement("video")}} oder {{HTMLElement("audio")}} Elementen abgespielt. Stellen Sie sicher, dass Sie den korrekten [Medientyp für Audio und Video](/de/docs/Web/Media/Guides/Formats) angeben.
- Proprietäre Dateitypen. Ein spezifischer Typ wie `application/vnd.mspowerpoint` ermöglicht es Nutzern, solche Dateien automatisch in der Präsentationssoftware ihrer Wahl zu öffnen.

## MIME Sniffing

In der Abwesenheit eines MIME-Typs oder in bestimmten Fällen, in denen Browser glauben, sie seien falsch, können Browser ein _MIME Sniffing_ durchführen — den korrekten MIME-Typ erraten, indem sie sich die Bytes der Ressource ansehen.

Jeder Browser führt MIME Sniffing unterschiedlich und unter verschiedenen Umständen durch.
(Zum Beispiel schaut Safari auf die Dateierweiterung in der URL, wenn der gesendete MIME-Typ ungeeignet ist.)
Es gibt Sicherheitsbedenken, da einige MIME-Typen ausführbare Inhalte darstellen.
Server können MIME Sniffing verhindern, indem sie den {{HTTPHeader("X-Content-Type-Options")}} Header senden.

## Andere Methoden zur Übermittlung von Dokumententypen

MIME-Typen sind nicht die einzige Möglichkeit, Dokumententypinformationen zu übermitteln:

- Dateinamensuffixe werden manchmal benutzt, besonders unter Microsoft Windows. Nicht alle Betriebssysteme betrachten diese Suffixe als bedeutsam (wie Linux und macOS), und es gibt keine Garantie, dass sie korrekt sind.
- Magic Numbers. Die Syntax verschiedener Formate erlaubt die Inferenz des Dateityps, indem man sich ihre Byte-Struktur ansieht. Zum Beispiel beginnen GIF-Dateien mit dem `47 49 46 38 39` hexadezimalen Wert (`GIF89`), und PNG-Dateien mit `89 50 4E 47` (`.PNG`). Nicht alle Dateitypen haben Magic Numbers, daher ist auch dies nicht zu 100% zuverlässig.

## Siehe auch

- [Web-Medientechnologien](/de/docs/Web/Media)
- [Leitfaden zu auf dem Web genutzten Medientypen](/de/docs/Web/Media/Guides/Formats)
- [Richtige Konfiguration von Server-MIME-Typen](/de/docs/Learn_web_development/Extensions/Server-side/Configuring_server_MIME_types)
