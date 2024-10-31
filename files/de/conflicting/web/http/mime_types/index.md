---
title: MIME-Typen (IANA-Medientypen)
slug: conflicting/Web/HTTP/MIME_types
original_slug: Web/HTTP/Basics_of_HTTP/MIME_types
l10n:
  sourceCommit: ef46a4ac6bfec3e33c9209244e7cb1a9206165d6
---

{{HTTPSidebar}}

Ein **Medientyp** (auch bekannt als **Multipurpose Internet Mail Extensions oder MIME-Typ**) zeigt die Art und das Format eines Dokuments, einer Datei oder einer Anordnung von Bytes an. MIME-Typen sind in IETF's {{RFC(6838)}} definiert und standardisiert.

Die [Internet Assigned Numbers Authority (IANA)](https://www.iana.org/) ist für alle offiziellen MIME-Typen verantwortlich, und Sie finden die aktuellste und vollständige Liste auf ihrer [Medientypen-Seite](https://www.iana.org/assignments/media-types/media-types.xhtml).

> [!WARNING]
> Browser verwenden den MIME-Typ, _nicht die Dateierweiterung_, um zu bestimmen, wie eine URL verarbeitet wird,
> daher ist es wichtig, dass Webserver den korrekten MIME-Typ im {{HTTPHeader("Content-Type")}}-Header der Antwort senden.
> Wenn dies nicht korrekt konfiguriert ist, werden Browser die Inhalte von Dateien wahrscheinlich falsch interpretieren, Websites funktionieren nicht korrekt und heruntergeladene Dateien werden möglicherweise falsch behandelt.

## Struktur eines MIME-Typs

Ein MIME-Typ besteht meistens aus zwei Teilen: einem _Typ_ und einem _Subtyp_, getrennt durch einen Schrägstrich (`/`) — ohne Leerzeichen dazwischen:

```plain
type/subtype
```

Der **_type_** repräsentiert die allgemeine Kategorie, in die der Datentyp fällt, wie `video` oder `text`.

Der **_subtype_** identifiziert die genaue Art der Daten des angegebenen Typs, die der MIME-Typ repräsentiert. Zum Beispiel könnte für den MIME-Typ `text` der Subtyp `plain` (Klartext), `html` ({{Glossary("HTML", "HTML")}} Quellcode) oder `calendar` (für iCalendar/`.ics`) Dateien sein.

Jeder Typ hat seine eigene Reihe möglicher Subtypen. Ein MIME-Typ hat immer sowohl einen Typ als auch einen Subtyp, niemals nur einen von beiden.

Ein optionaler **Parameter** kann hinzugefügt werden, um zusätzliche Details bereitzustellen:

```plain
type/subtype;parameter=value
```

Zum Beispiel kann für jeden MIME-Typ, dessen Haupttyp `text` ist, der optionale `charset` Parameter hinzugefügt werden, um den Zeichensatz anzugeben, der für die Zeichen in den Daten verwendet wird. Wenn kein `charset` angegeben ist, ist der Standardwert {{Glossary("ASCII", "ASCII")}} (`US-ASCII`), es sei denn, er wird durch die Einstellungen des {{Glossary("user_agent", "User-Agents")}} überschrieben. Um eine UTF-8-Textdatei anzugeben, wird der MIME-Typ `text/plain;charset=UTF-8` verwendet.

MIME-Typen sind nicht case-sensitiv, werden aber traditionell in Kleinbuchstaben geschrieben. Die Parameterwerte können case-sensitiv sein.

### Typen

Es gibt zwei Klassen von Typ: **diskret** und **multipart**. Diskrete Typen sind Typen, die eine einzelne Datei oder ein Medium repräsentieren, wie z.B. eine einzelne Text- oder Musikdatei oder ein einzelnes Video. Ein Multipart-Typ repräsentiert ein Dokument, das aus mehreren Komponenten besteht, von denen jede ihren eigenen MIME-Typ haben kann; oder ein Multipart-Typ kann mehrere Dateien kapseln, die zusammen in einer Transaktion gesendet werden. Zum Beispiel werden Multipart-MIME-Typen verwendet, wenn mehrere Dateien an eine E-Mail angehängt werden.

#### Diskrete Typen

Die derzeit bei der IANA registrierten diskreten Typen sind:

- `application`
  - : Jede Art von Binärdaten, die nicht explizit in eine der anderen Arten fällt; entweder Daten, die in irgendeiner Weise ausgeführt oder interpretiert werden sollen, oder Binärdaten, für die eine spezielle Anwendung oder Kategorie von Anwendungen erforderlich ist. Generische Binärdaten (oder Binärdaten, deren wahrer Typ unbekannt ist) sind `application/octet-stream`. Weitere übliche Beispiele sind `application/pdf`, `application/pkcs8` und `application/zip`. [(Siehe Application-Typ-Registry bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#application)
- `audio`
  - : Audio- oder Musikdaten. Beispiele sind `audio/mpeg`, `audio/vorbis`. [(Siehe Audio-Typ-Registry bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#audio)
- `example`
  - : Reserviert für die Verwendung als Platzhalter in Beispielen, die zeigen, wie MIME-Typen verwendet werden. Diese sollten niemals außerhalb von Beispiel-Code-Listings und Dokumentationen verwendet werden. `example` kann auch als Subtyp verwendet werden; zum Beispiel kann in einem Beispiel, das sich mit der Arbeit mit Audio im Web befasst, der MIME-Typ `audio/example` verwendet werden, um anzuzeigen, dass der Typ ein Platzhalter ist und bei der Anwendung des Codes in der realen Welt durch einen geeigneten ersetzt werden sollte.
- `font`
  - : Font/Schriftartendaten. Häufige Beispiele sind `font/woff`, `font/ttf` und `font/otf`. [(Siehe Font-Typ-Registry bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#font)
- `image`
  - : Bild- oder Grafikdaten, einschließlich sowohl Bitmap- als auch Vektor-Standbilder sowie animierte Versionen von Standbildformaten wie animierte {{Glossary("GIF", "GIF")}} oder APNG. Häufige Beispiele sind `image/jpeg`, `image/png` und `image/svg+xml`. [(Siehe Image-Typ-Registry bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#image)
- `model`
  - : Modelldaten für ein 3D-Objekt oder eine Szene. Beispiele sind `model/3mf` und `model/vrml`. [(Siehe Model-Typ-Registry bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#model)
- `text`
  - : Nur-Text-Daten, einschließlich aller menschenlesbaren Inhalte, Quellcode oder textbasierter Daten wie durch Komma getrennte Wertekategorie (CSV) formatierter Daten. Beispiele sind: `text/plain`, `text/csv`, und `text/html`. [(Siehe Text-Typ-Registry bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#text)
- `video`
  - : Videodaten oder -dateien, wie z.B. MP4-Filme (`video/mp4`). [(Siehe Video-Typ-Registry bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#video)

Für Textdokumente ohne spezifischen Subtyp sollte `text/plain` verwendet werden. Ebenso sollte für Binärdokumente ohne spezifischen oder bekannten Subtyp `application/octet-stream` verwendet werden.

#### Multipart-Typen

**Multipart**-Typen kennzeichnen eine Kategorie von Dokumenten, die in Stücke zerlegt sind, oft mit unterschiedlichen MIME-Typen; sie können auch verwendet werden – insbesondere in E-Mail-Szenarien – um mehrere, separate Dateien zu repräsentieren, die alle Teil derselben Transaktion sind. Sie repräsentieren ein **zusammengesetztes Dokument**.

Mit Ausnahme von `multipart/form-data`, das in der {{HTTPMethod("POST")}}-Methode von [HTML-Formularen](/de/docs/Learn/Forms) und `multipart/byteranges`, das mit {{HTTPStatus("206")}} `Partial Content` verwendet wird, um einen Teil eines Dokuments zu senden, behandelt HTTP Multipart-Dokumente nicht auf eine spezielle Weise: Die Nachricht wird an den Browser übertragen (der wahrscheinlich ein "Speichern unter"-Fenster anzeigt, wenn er nicht weiß, wie das Dokument angezeigt werden soll).

Es gibt zwei Multipart-Typen:

- `message`
  - : Eine Nachricht, die andere Nachrichten kapselt. Dies kann z.B. verwendet werden, um eine E-Mail darzustellen, die eine weitergeleitete Nachricht als Teil ihrer Daten enthält, oder um das Senden sehr großer Nachrichten in Stücken zu ermöglichen, als wären es mehrere Nachrichten. Beispiele umfassen `message/rfc822` (für weitergeleitetes oder beantwortetes Nachrichtenquoting) und `message/partial`, um das automatische Aufteilen einer großen Nachricht in kleinere zur Wiederzusammenstellung durch den Empfänger zu ermöglichen. [(Siehe Message-Typ-Registry bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#message)
- `multipart`
  - : Daten, die aus mehreren Komponenten bestehen, die jeweils unterschiedliche MIME-Typen haben können. Beispiele umfassen `multipart/form-data` (für Daten, die mit der [`FormData`](/de/docs/Web/API/FormData) API erstellt wurden) und `multipart/byteranges` (definiert in {{RFC(7233, "", "5.4.1")}} und verwendet mit {{Glossary("HTTP", "HTTP")}}'s {{HTTPStatus(206)}} "Partial Content"-Antwort, die zurückgegeben wird, wenn die abgerufenen Daten nur ein Teil des Inhalts sind, wie ihn der {{HTTPHeader("Range")}}-Header liefert). [(Siehe Multipart-Typ-Registry bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#multipart)

## Wichtige MIME-Typen für Webentwickler

### application/octet-stream

Dies ist der Standard für Binärdateien. Da es _unbekannte Binärdatei_ bedeutet, führen Browser sie normalerweise nicht aus oder fragen sogar, ob sie ausgeführt werden sollten. Sie behandeln es so, als ob der {{HTTPHeader("Content-Disposition")}}-Header auf `attachment` gesetzt wäre und schlagen einen "Speichern unter"-Dialog vor.

### text/plain

Dies ist der Standard für Textdateien. Selbst wenn es wirklich "unbekannte Textdatei" bedeutet, gehen Browser davon aus, dass sie es anzeigen können.

> **Hinweis:** `text/plain` bedeutet nicht "jede Art von Textdaten."
> Wenn sie eine bestimmte Art von Textdaten erwarten, werden sie es wahrscheinlich nicht als Übereinstimmung betrachten.
> Insbesondere wenn sie eine `text/plain` Datei aus einem {{HTMLElement("link")}} Element herunterladen, das eine CSS-Datei deklariert, erkennen sie es nicht als gültige CSS-Datei, wenn es als `text/plain` präsentiert wird.
> Der CSS-MIME-Typ `text/css` muss verwendet werden.

### text/css

CSS-Dateien, die eine Webseite gestalten, **müssen** mit `text/css` gesendet werden. Wenn ein Server das `.css`-Suffix für CSS-Dateien nicht erkennt, kann er sie mit `text/plain` oder `application/octet-stream` MIME-Typen senden. Wenn dies der Fall ist, werden sie von den meisten Browsern nicht als CSS erkannt und ignoriert.

### text/html

Alle HTML-Inhalte sollten mit diesem Typ geliefert werden. Alternative MIME-Typen für XHTML (wie `application/xhtml+xml`) sind heutzutage größtenteils unnötig.

> [!NOTE]
> Verwenden Sie `application/xml` oder `application/xhtml+xml`, wenn Sie die strikten Parsing-Regeln von XML, [`<![CDATA[…]]>`](/de/docs/Web/API/CDATASection) Abschnitte oder Elemente, die nicht aus den HTML/SVG/MathML Namespace stammen, wünschen.

### text/javascript

Gemäß dem [IANA Media Types-Register](https://www.iana.org/assignments/media-types/media-types.xhtml#text), [RFC 9239](https://www.rfc-editor.org/rfc/rfc9239.html), und den [HTML-Spezifikationen](https://html.spec.whatwg.org/multipage/scripting.html#scriptingLanguages:text/javascript), sollte JavaScript-Inhalt immer mit dem MIME-Typ `text/javascript` serviert werden. Keine anderen MIME-Typen werden für JavaScript als gültig betrachtet, und die Verwendung eines anderen MIME-Typs als `text/javascript` kann dazu führen, dass Skripte nicht geladen oder ausgeführt werden.

Möglicherweise finden Sie einige JavaScript-Inhalte, die fälschlicherweise mit einem `charset`-Parameter als Teil des MIME-Typs geliefert werden – ein Versuch, den Zeichensatz für den Skriptinhalt anzugeben. Dieser `charset`-Parameter ist für JavaScript-Inhalte nicht gültig und führt in den meisten Fällen dazu, dass ein Skript nicht geladen wird.

#### Alte JavaScript-MIME-Typen

Zusätzlich zum `text/javascript`-MIME-Typ darf JavaScript, aus historischen Gründen, gemäß dem [MIME Sniffing-Standard](https://mimesniff.spec.whatwg.org/) (der definiert, wie Browser MIME-Typen interpretieren und herausfinden sollen, was mit Inhalten zu tun ist, die keinen gültigen haben), auch mit einem der folgenden alten JavaScript-MIME-Typen bereitgestellt werden:

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
> Obwohl jeder beliebige {{Glossary("user_agent", "User-Agent")}} einige oder alle diese unterstützen kann, sollten Sie nur `text/javascript` verwenden. Es ist der einzige MIME-Typ, der jetzt und in Zukunft garantiert funktioniert.

### Bildtypen

Dateien, deren MIME-Typ `image` ist, enthalten Bilddaten. Der Subtyp gibt an, welches spezielle Bilddateiformat die Daten darstellen.

Die folgenden Bildtypen werden häufig genug verwendet, um als _sicher_ für den Einsatz auf Webseiten zu gelten:

- [`image/apng`](/de/docs/Web/Media/Formats/Image_types#apng_animated_portable_network_graphics): Animated Portable Network Graphics (APNG)
- [`image/avif`](/de/docs/Web/Media/Formats/Image_types#avif_image): AV1 Image File Format (AVIF)
- [`image/gif`](/de/docs/Web/Media/Formats/Image_types#gif_graphics_interchange_format): Graphics Interchange Format (GIF)
- [`image/jpeg`](/de/docs/Web/Media/Formats/Image_types#jpeg_joint_photographic_experts_group_image): Joint Photographic Expert Group-Bild (JPEG)
- [`image/png`](/de/docs/Web/Media/Formats/Image_types#png_portable_network_graphics): Portable Network Graphics (PNG)
- [`image/svg+xml`](/de/docs/Web/Media/Formats/Image_types#svg_scalable_vector_graphics): Scalable Vector Graphics (SVG)
- [`image/webp`](/de/docs/Web/Media/Formats/Image_types#webp_image): Web Picture Format (WEBP)

Der [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Formats/Image_types#common_image_file_types) bietet Informationen und Empfehlungen dazu, wann die verschiedenen Bildformate verwendet werden sollten.

### Audio- und Videotypen

Wie bei Bildern verlangt HTML nicht, dass Webbrowser bestimmte Datei- und Codec-Typen für die {{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elemente unterstützen, daher ist es wichtig, Ihr Zielpublikum und die Bandbreite der Browser (und Versionen dieser Browser), die sie möglicherweise verwenden, zu berücksichtigen, wenn Sie den Dateityp und die Codecs für Medien auswählen.

Unser [Leitfaden zu Mediencontainerformaten](/de/docs/Web/Media/Formats/Containers) bietet eine Liste der Dateitypen, die häufig von Webbrowsern unterstützt werden, einschließlich Informationen darüber, welche speziellen Anwendungsfälle sie haben können, welche Nachteile sie haben und Kompatibilitätsinformationen sowie andere Details.

Die Leitfäden zu [Audiocodecs](/de/docs/Web/Media/Formats/Audio_codecs) und [Videocodecs](/de/docs/Web/Media/Formats/Video_codecs) listen die verschiedenen Codecs auf, die Webbrowser oft unterstützen, und bieten Kompatibilitätsinformationen zusammen mit technischen Informationen wie der Anzahl der unterstützten Audiokanäle, welche Art von Kompression verwendet wird und bei welchen Bitraten usw. sie nützlich sind. Der [Leitfaden zu Codecs, die von WebRTC verwendet werden](/de/docs/Web/Media/Formats/WebRTC_codecs) erweitert dies, indem er spezifisch die von den großen Webbrowsern unterstützten Codecs abdeckt, sodass Sie die Codecs auswählen können, die am besten die Bandbreite der von Ihnen unterstützen Browser abdecken.

Was die MIME-Typen von Audio- oder Videodateien betrifft, so geben diese typischerweise das Containerformat (Dateityp) an. Der optionale [codecs-Parameter](/de/docs/Web/Media/Formats/codecs_parameter) kann dem MIME-Typ hinzugefügt werden, um genauer anzugeben, welche Codecs zu verwenden sind und welche Optionen zum Kodieren der Medien verwendet wurden, wie Codec-Profil, Ebene oder ähnliche Informationen.

Für weitere Informationen zu gängigen Medientypen siehe die Seite [Gängige MIME-Typen](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types).

### multipart/form-data

Der `multipart/form-data` Typ kann verwendet werden, wenn die Werte eines abgeschlossenen [HTML-Formulars](/de/docs/Learn/Forms) vom Browser an den Server gesendet werden.

Als Multipart-Dokumentenformat besteht es aus verschiedenen Teilen, die durch eine Grenze (eine Zeichenfolge, die mit einem doppelten Bindestrich `--` beginnt) getrennt sind. Jeder Teil ist eine eigene Einheit mit eigenen HTTP-Headern, {{HTTPHeader("Content-Disposition")}} und {{HTTPHeader("Content-Type")}} für hochgeladene Dateien.

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

Der `multipart/byteranges` MIME-Typ wird verwendet, um Teilantworten an den Browser zu senden.

Wenn der {{HTTPStatus("206", "206 Partial Content")}} Statuscode gesendet wird, zeigt dieser MIME-Typ an, dass das Dokument aus mehreren Teilen besteht, eines für jeden der angeforderten Bereiche. Wie andere Multipart-Typen verwendet der {{HTTPHeader("Content-Type")}} einen `boundary`, um die Stücke zu trennen. Jedes Stück hat einen {{HTTPHeader("Content-Type")}}-Header mit seinem tatsächlichen Typ und einen {{HTTPHeader("Content-Range")}} für den Bereich, den es darstellt.

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

Einige Serverkonfigurationen können den zugehörigen MIME-Typ verwenden, um Optimierungen durchzuführen, wie z.B. Dateizusammenführung, Komprimierung oder Caching. Siehe [h5bp/server-configs-apache](https://github.com/h5bp/server-configs-apache/blob/main/h5bp/web_performance/compression.conf) für ein Beispiel einer Apache-Konfiguration, die Dateien bestimmter MIME-Typen komprimiert.

Die meisten Webserver senden nicht erkannte Ressourcen als den MIME-Typ `application/octet-stream`. Aus Sicherheitsgründen erlauben die meisten Browser es nicht, eine benutzerdefinierte Standardaktion (wie "In Word öffnen") für solche Ressourcen einzustellen, wodurch der Benutzer gezwungen wird, sie auf die Festplatte zu speichern, um sie zu verwenden.

Einige häufige fehlerhafte Serverkonfigurationen:

- RAR-komprimierte Dateien. In diesem Fall wäre das Ideal der echte Typ der ursprünglichen Dateien; dies ist oft unmöglich, da .RAR-Dateien mehrere Ressourcen unterschiedlicher Typen enthalten können. In diesem Fall konfigurieren Sie den Server, um `application/x-rar-compressed` zu senden.
- Audio und Video. Nur Ressourcen mit dem korrekten MIME-Typ werden in {{HTMLElement("video")}}- oder {{HTMLElement("audio")}}-Elementen abgespielt. Achten Sie darauf, den richtigen [Medientyp für Audio und Video](/de/docs/Web/Media/Formats) anzugeben.
- Proprietäre Dateitypen. Ein spezifischer Typ wie `application/vnd.mspowerpoint` ermöglicht es Benutzern, solche Dateien automatisch in der Präsentationssoftware ihrer Wahl zu öffnen.

## MIME-Sniffing

In Abwesenheit eines MIME-Typs oder in bestimmten Fällen, in denen Browser glauben, dass sie falsch sind, können Browser _MIME-Sniffing_ durchführen – den korrekten MIME-Typ erraten, indem sie die Bytes der Ressource betrachten.

Jeder Browser führt MIME-Sniffing anders und unter unterschiedlichen Umständen durch. (Zum Beispiel wird Safari die Dateierweiterung in der URL betrachten, wenn der gesendete MIME-Typ ungeeignet ist.) Es gibt Sicherheitsbedenken, da einige MIME-Typen ausführbare Inhalte darstellen. Server können MIME-Sniffing verhindern, indem sie den {{HTTPHeader("X-Content-Type-Options")}}-Header senden.

## Andere Methoden zur Übermittlung von Dokumenttypen

MIME-Typen sind nicht die einzige Möglichkeit, Informationen zum Dokumenttyp zu übermitteln:

- Dateinamensuffixe werden manchmal verwendet, insbesondere unter Microsoft Windows. Nicht alle Betriebssysteme betrachten diese Suffixe als bedeutungsvoll (wie Linux und macOS), und es gibt keine Garantie, dass sie korrekt sind.
- Magische Zahlen. Die Syntax verschiedener Formate ermöglicht die Ableitung des Dateityps, indem ihre Byte-Struktur betrachtet wird. Zum Beispiel beginnen GIF-Dateien mit dem hexadezimalen Wert `47 49 46 38 39` (`GIF89`), und PNG-Dateien mit `89 50 4E 47` (`.PNG`). Nicht alle Dateitypen haben magische Zahlen, so dass dies nicht zu 100% zuverlässig ist.

## Siehe auch

- [Webmedientechnologien](/de/docs/Web/Media)
- [Leitfaden zu Medientypen, die im Web verwendet werden](/de/docs/Web/Media/Formats)
- [Richtige Konfiguration der Server-MIME-Typen](/de/docs/Learn/Server-side/Configuring_server_MIME_types)
