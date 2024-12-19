---
title: MIME-Typen (IANA Media-Typen)
slug: Web/HTTP/MIME_types
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{HTTPSidebar}}

Ein **Medientyp** (auch bekannt als **Multipurpose Internet Mail Extensions oder MIME-Typ**) gibt die Art und das Format eines Dokuments, einer Datei oder eine Sammlung von Bytes an. MIME-Typen sind definiert und standardisiert in der {{RFC(6838)}} der IETF.

Die [Internet Assigned Numbers Authority (IANA)](https://www.iana.org/) ist verantwortlich für alle offiziellen MIME-Typen, und Sie können die aktuellste und vollständige Liste auf ihrer Seite [Media Types](https://www.iana.org/assignments/media-types/media-types.xhtml) finden.

> [!WARNING]
> Browser verwenden den MIME-Typ, _nicht die Dateiendung_, um zu entscheiden, wie eine URL verarbeitet wird,
> daher ist es wichtig, dass Webserver den korrekten MIME-Typ im {{HTTPHeader("Content-Type")}}-Header der Antwort senden.
> Wenn dies nicht korrekt konfiguriert ist, interpretieren Browser wahrscheinlich den Inhalt von Dateien falsch, Websites funktionieren nicht korrekt, und heruntergeladene Dateien können falsch behandelt werden.

## Struktur eines MIME-Typs

Ein MIME-Typ besteht in der Regel aus zwei Teilen: einem _Typ_ und einem _Untertyp_, getrennt durch einen Schrägstrich (`/`) — ohne Leerzeichen dazwischen:

```plain
type/subtype
```

Der **_Typ_** repräsentiert die allgemeine Kategorie, in die der Datentyp fällt, wie `video` oder `text`.

Der **_Untertyp_** identifiziert die genaue Art der Daten des angegebenen Typs, die der MIME-Typ darstellt. Zum Beispiel könnte der Untertyp für den MIME-Typ `text` `plain` (normaler Text), `html` ({{Glossary("HTML", "HTML")}}-Quellcode) oder `calendar` (für iCalendar/`.ics`) Dateien sein.

Jeder Typ hat seine eigenen möglichen Untertypen. Ein MIME-Typ hat immer sowohl einen Typ als auch einen Untertyp, nie nur einen oder den anderen.

Ein optionaler **Parameter** kann hinzugefügt werden, um zusätzliche Details bereitzustellen:

```plain
type/subtype;parameter=value
```

Zum Beispiel kann bei jedem MIME-Typ, dessen Haupttyp `text` ist, der optionale `charset`-Parameter hinzugefügt werden, um die für die Zeichen im Datensatz verwendete Zeichencodierung anzugeben. Wenn kein `charset` angegeben ist, ist der Standardwert {{Glossary("ASCII", "ASCII")}} (`US-ASCII`), es sei denn, es wird durch die Einstellungen des {{Glossary("user_agent", "user agent")}} überschrieben. Um eine UTF-8-Textdatei anzugeben, wird der MIME-Typ `text/plain;charset=UTF-8` verwendet.

MIME-Typen sind nicht case-sensitiv, werden aber traditionell in Kleinbuchstaben geschrieben. Die Parameterwerte können case-sensitiv sein.

### Typen

Es gibt zwei Klassen von Typen: **diskret** und **mehrteilig**. Diskrete Typen sind Typen, die eine einzelne Datei oder ein Medium repräsentieren, wie eine einzelne Text- oder Musikdatei oder ein einzelnes Video. Ein mehrteiliger Typ repräsentiert ein Dokument, das aus mehreren Komponenten besteht, von denen jede ihren eigenen individuellen MIME-Typ haben kann; oder ein mehrteiliger Typ kann mehrere Dateien zusammen in einer Transaktion kapseln. Beispielsweise werden mehrteilige MIME-Typen verwendet, wenn mehrere Dateien an eine E-Mail angehängt werden.

#### Diskrete Typen

Die derzeit bei der IANA registrierten diskreten Typen sind:

- `application`
  - : Beliebige Art von Binärdaten, die nicht explizit in eine der anderen Typen fällt;
    entweder Daten, die ausgeführt oder in irgendeiner Weise interpretiert werden oder Binärdaten, die eine spezielle Anwendung oder Kategorie von Anwendungen zur Nutzung erfordern.
    Generische Binärdaten (oder Binärdaten deren wahrer Typ unbekannt ist) werden als `application/octet-stream` bezeichnet.
    Weitere gängige Beispiele sind `application/pdf`, `application/pkcs8`, und `application/zip`.
    [(Ansehen des Application-Typ-Registers bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#application)
- `audio`
  - : Audio- oder Musikdaten. Beispiele beinhalten `audio/mpeg`, 
    `audio/vorbis`.
    [(Ansehen des Audio-Typ-Registers bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#audio)
- `example`
  - : Reserviert zur Verwendung als Platzhalter in Beispielen, die zeigen, wie MIME-Typen verwendet werden sollen.
    Diese sollten niemals außerhalb von Beispielcodes und Dokumentationen verwendet werden. 
    `example` kann auch als Untertyp verwendet werden;
    beispielsweise kann in einem Beispiel, das sich mit der Arbeit mit Audio im Web befasst, der MIME-Typ `audio/example` verwendet werden, um anzuzeigen, dass der Typ ein Platzhalter ist und bei der Verwendung des Codes in der realen Welt durch einen geeigneten ersetzt werden muss.
- `font`
  - : Schriftart-/Schriftzeichensatzdaten. Häufige Beispiele sind `font/woff`, `font/ttf`, und `font/otf`.
    [(Ansehen des Font-Typ-Registers bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#font)
- `image`
  - : Bild- oder grafische Daten einschließlich sowohl Bitmap- als auch Vektorstandbilder sowie 
    animierte Versionen von Standbildformaten wie animierte {{Glossary("GIF", "GIF")}} oder APNG.
    Häufige Beispiele sind `image/jpeg`, `image/png`, und `image/svg+xml`.
    [(Ansehen des Image-Typ-Registers bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#image)
- `model`
  - : Modelldaten für ein 3D-Objekt oder eine Szene. Beispiele beinhalten `model/3mf` und `model/vrml`.
    [(Ansehen des Model-Typ-Registers bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#model)
- `text`
  - : Ausschließlich Textdaten, einschließlich jeglicher für Menschen lesbarer Inhalte, Quellcode oder Textdaten wie kommaseparierte Werte (CSV) formatierte Daten.
    Beispiele sind: `text/plain`, `text/csv`, und `text/html`.
    [(Ansehen des Text-Typ-Registers bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#text)
- `video`
  - : Videodaten oder -dateien, wie MP4-Filme (`video/mp4`).
    [(Ansehen des Video-Typ-Registers bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#video)

Für Textdokumente ohne einen spezifischen Untertyp sollte `text/plain` verwendet werden.
Ähnlich, für Binärdokumente ohne einen spezifischen oder bekannten Untertyp sollte `application/octet-stream` verwendet werden.

#### Mehrteilige Typen

**Mehrteilige** Typen geben eine Kategorie von Dokumenten an, die in Teile aufgeteilt sind, oft mit unterschiedlichen MIME-Typen; sie können auch verwendet werden — insbesondere in E-Mail-Szenarien — um mehrere, separate Dateien darzustellen, die alle Teil derselben Transaktion sind. Sie repräsentieren ein **zusammengesetztes Dokument**.

Mit Ausnahme von `multipart/form-data`, das in der {{HTTPMethod("POST")}}-Methode von [HTML Forms](/de/docs/Learn_web_development/Extensions/Forms) und `multipart/byteranges`, das mit {{HTTPStatus("206")}} `Partial Content` verwendet wird, um einen Teil eines Dokuments zu senden, behandelt HTTP mehrteilige Dokumente nicht auf besondere Weise: die Nachricht wird an den Browser übertragen (der wahrscheinlich ein "Speichern unter"-Fenster anzeigt, wenn es nicht weiß, wie das Dokument angezeigt werden soll).

Es gibt zwei mehrteilige Typen:

- `message`
  - : Eine Nachricht, die andere Nachrichten kapselt. Dies kann verwendet werden, um beispielsweise eine E-Mail darzustellen, die eine weitergeleitete Nachricht als Teil ihrer Daten beinhaltet,
    oder um das Senden sehr großer Nachrichten in Teilen zu ermöglichen, als wären es mehrere Nachrichten. 
    Beispiele beinhalten `message/rfc822` (für weitergeleitete oder zitierte Nachrichten) und `message/partial`, um das automatische Aufteilen einer großen Nachricht in kleinere Teile zum neuerlichen Zusammenfügen durch den Empfänger zu ermöglichen.
    [(Ansehen des Message-Typ-Registers bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#message)
- `multipart`
  - : Daten, die aus mehreren Komponenten bestehen, die jeweils eigene MIME-Typen haben können.
    Beispiele beinhalten `multipart/form-data` (für Daten, die mit der [`FormData`](/de/docs/Web/API/FormData)-API produziert wurden) und `multipart/byteranges` (definiert in {{RFC(7233, "", "5.4.1")}} und verwendet mit {{Glossary("HTTP", "HTTP")}}'s {{HTTPStatus(206)}} 
    "Partial Content"-Antwort, die zurückgegeben wird, wenn die abgerufenen Daten nur Teil des Inhalts sind, wie sie mit dem {{HTTPHeader("Range")}}-Header geliefert werden).
    [(Ansehen des Multipart-Typ-Registers bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#multipart)

## Wichtige MIME-Typen für Webentwickler

### application/octet-stream

Dies ist der Standard für Binärdateien. Da es _unbekannte Binärdatei_ bedeutet, führen Browser sie normalerweise nicht aus oder fragen sogar, ob sie ausgeführt werden soll. Sie behandeln es, als wäre der {{HTTPHeader("Content-Disposition")}}-Header auf `attachment` gesetzt und schlagen ein "Speichern unter"-Dialog vor.

### text/plain

Dies ist der Standard für Textdateien. Selbst wenn es wirklich "unbekannte Textdatei" bedeutet, gehen Browser davon aus, dass sie sie anzeigen können.

> **Hinweis:** `text/plain` bedeutet nicht "beliebige Art von Textdaten."
> Wenn sie eine bestimmte Art von Textdaten erwarten, werden sie es wahrscheinlich nicht als Übereinstimmung betrachten.
> Insbesondere wenn sie eine `text/plain`-Datei von einem {{HTMLElement("link")}}-Element herunterladen, das eine CSS-Datei deklariert, werden sie sie nicht als gültige CSS-Datei erkennen, wenn sie mit `text/plain` präsentiert wird.
> Der CSS-Mimetyp `text/css` muss verwendet werden.

### text/css

CSS-Dateien, die genutzt werden, um eine Webseite zu gestalten, **müssen** mit `text/css` gesendet werden. 
Wenn ein Server das `.css`-Suffix für CSS-Dateien nicht erkennt, kann es sie mit `text/plain`- oder `application/octet-stream`-MIME-Typen senden. 
Wenn dies der Fall ist, werden sie von den meisten Browsern nicht als CSS erkannt und ignoriert.

### text/html

Alle HTML-Inhalte sollten mit diesem Typ bereitgestellt werden. Alternative MIME-Typen für XHTML (wie `application/xhtml+xml`) sind heutzutage meist nutzlos.

> [!NOTE]
> Verwenden Sie `application/xml` oder `application/xhtml+xml`, wenn Sie die strikte XML-Parsing-Regeln, [`<![CDATA[…]]>`](/de/docs/Web/API/CDATASection)-Abschnitte oder Elemente außerhalb der HTML/SVG/MathML-Namensräume wünschen.

### text/javascript

Gemäß dem [IANA Media Types Registry](https://www.iana.org/assignments/media-types/media-types.xhtml#text), [RFC 9239](https://www.rfc-editor.org/rfc/rfc9239.html) und der [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/scripting.html#scriptingLanguages:text/javascript) sollte JavaScript-Inhalt immer mit dem MIME-Typ `text/javascript` bereitgestellt werden. 
Keine anderen MIME-Typen werden für JavaScript als gültig angesehen, und die Verwendung eines anderen MIME-Typs als `text/javascript` kann dazu führen, dass Skripte nicht laden oder ausgeführt werden.

Es kann vorkommen, dass einige JavaScript-Inhalte fälschlicherweise mit einem `charset`-Parameter als Teil des MIME-Typs bereitgestellt werden — als Versuch, die Zeichencodierung für den Skriptinhalt zu spezifizieren. 
Dieser `charset`-Parameter ist für JavaScript-Inhalt nicht gültig, und in den meisten Fällen führt dies dazu, dass ein Skript nicht geladen wird.

#### Veraltete JavaScript MIME-Typen

Neben dem `text/javascript`-MIME-Typ erlaubt der [MIME Sniffing Standard](https://mimesniff.spec.whatwg.org/) (die Definition, wie Browser MIME-Typen interpretieren und mit Inhalten umgehen sollten, die keinen gültigen haben) aus historischen Gründen auch, dass JavaScript mit einem der folgenden veralteten JavaScript-MIME-Typen ausgeliefert werden kann:

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
> Auch wenn ein beliebiger {{Glossary("user_agent", "user agent")}} möglicherweise einige oder alle dieser unterstützt, sollten Sie nur `text/javascript` verwenden.
> Es ist der einzige MIME-Typ, der garantiert jetzt und in Zukunft funktioniert.

### Bildtypen

Dateien, deren MIME-Typ `image` ist, enthalten Bilddaten. 
Der Untertyp gibt an, welches spezifische Bilddateiformat die Daten darstellen.

Die folgenden Bildtypen werden allgemein genug verwendet, um als _sicher_ für den Einsatz auf Webseiten betrachtet zu werden:

- [`image/apng`](/de/docs/Web/Media/Formats/Image_types#apng_animated_portable_network_graphics): Animated Portable Network Graphics (APNG)
- [`image/avif`](/de/docs/Web/Media/Formats/Image_types#avif_image) : AV1 Image File Format (AVIF)
- [`image/gif`](/de/docs/Web/Media/Formats/Image_types#gif_graphics_interchange_format): Graphics Interchange Format (GIF)
- [`image/jpeg`](/de/docs/Web/Media/Formats/Image_types#jpeg_joint_photographic_experts_group_image): Joint Photographic Expert Group image (JPEG)
- [`image/png`](/de/docs/Web/Media/Formats/Image_types#png_portable_network_graphics): Portable Network Graphics (PNG)
- [`image/svg+xml`](/de/docs/Web/Media/Formats/Image_types#svg_scalable_vector_graphics): Scalable Vector Graphics (SVG)
- [`image/webp`](/de/docs/Web/Media/Formats/Image_types#webp_image): Web Picture Format (WEBP)

Der [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Formats/Image_types#common_image_file_types) bietet Informationen und Empfehlungen darüber, wann die verschiedenen Bildformate verwendet werden sollten.

### Audio- und Videotypen

Wie bei Bildern schreibt HTML nicht vor, dass Webbrowser bestimmte Datei- und Codec-Typen für die {{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elemente unterstützen müssen, daher ist es wichtig, die Zielgruppe und die Bandbreite der Browser (und der Versionen dieser Browser), die sie möglicherweise verwenden, bei der Auswahl des Dateityps und der Codecs für Medien zu berücksichtigen.

Unser [Leitfaden zu Mediencontainerformaten](/de/docs/Web/Media/Formats/Containers) bietet eine Liste der Dateitypen, die üblicherweise von Webbrowsern unterstützt werden, sowie Informationen über ihre speziellen Anwendungsfälle, mögliche Nachteile und Kompatibilitätsinformationen zusammen mit anderen Details.

Die [Audio-Codec](/de/docs/Web/Media/Formats/Audio_codecs)- und [Video-Codec](/de/docs/Web/Media/Formats/Video_codecs)-Leitfäden listen die verschiedenen Codecs auf, die von Webbrowsern häufig unterstützt werden, und bieten Kompatibilitätsinformationen zusammen mit technischen Informationen wie der Anzahl der von ihnen unterstützten Audiokanäle, der Art der Kompression und der Bitraten, bei denen sie nützlich sind usw. Der [Leitfaden zu Codecs von WebRTC](/de/docs/Web/Media/Formats/WebRTC_codecs) erweitert dies, indem speziell die von den großen Webbrowsern unterstützten Codecs behandelt werden, damit Sie die Codecs auswählen können, die die Bandbreite der Browser, die Sie unterstützen möchten, am besten abdecken.

Was die MIME-Typen von Audio- oder Videodateien betrifft, geben sie typischerweise das Containerformat (Dateityp) an. 
Der optionale [codecs-Parameter](/de/docs/Web/Media/Formats/codecs_parameter) kann dem MIME-Typ hinzugefügt werden, um weiter anzugeben, welche Codecs verwendet werden sollen und welche Optionen zum Kodieren der Medien verwendet wurden, wie Codec-Profil, Level oder andere solche Informationen.

Weitere Informationen über gängige Medientypen finden Sie auf der Seite [Common MIME types](/de/docs/Web/HTTP/MIME_types/Common_types).

### multipart/form-data

Der Typ `multipart/form-data` kann verwendet werden, wenn die Werte eines ausgefüllten [HTML-Forms](/de/docs/Learn_web_development/Extensions/Forms) vom Browser zum Server gesendet werden.

Als mehrteilige Dokumentenformat besteht er aus verschiedenen Teilen, die durch eine Grenze (ein mit einem Doppelpunkten `--` beginnendes Zeichen) getrennt sind. Jeder Teil ist seine eigene Einheit mit eigenen HTTP-Headern, {{HTTPHeader("Content-Disposition")}}, und {{HTTPHeader("Content-Type")}} für Felder zum Hochladen von Dateien.

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

Der MIME-Typ `multipart/byteranges` wird verwendet, um Teilantworten an den Browser zu senden.

Wenn der {{HTTPStatus("206", "206 Partial Content")}}-Statuscode gesendet wird, zeigt dieser MIME-Typ an, dass das Dokument aus mehreren Teilen besteht, von denen jeder der 
angeforderten Bereiche repräsentiert. Wie andere mehrteilige Typen, nutzt der {{HTTPHeader("Content-Type")}} eine `boundary`, um die Teile zu trennen. 
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

## Wichtigkeit der korrekten Einstellung des MIME-Typs

Einige Serverkonfigurationen können den zugehörigen MIME-Typ verwenden, um Optimierungen wie Dateikonkatenierung, Kompression oder Caching durchzuführen. Sehen Sie sich [h5bp/server-configs-apache](https://github.com/h5bp/server-configs-apache/blob/main/h5bp/web_performance/compression.conf) für ein Beispiel einer Apache-Konfiguration an, die Dateien bestimmter MIME-Typen komprimiert.

Die meisten Webserver senden nicht erkannte Ressourcen als MIME-Typ `application/octet-stream`. 
Aus Sicherheitsgründen erlauben die meisten Browser nicht, eine benutzerdefinierte Standardaktion (wie "In Word öffnen") für solche Ressourcen festzulegen, wodurch der Benutzer gezwungen wird, sie zur Verwendung auf die Festplatte zu speichern.

Einige häufige falsche Serverkonfigurationen:

- RAR-komprimierte Dateien.
  In diesem Fall wäre das Ideal der wahre Typ der Originaldateien; dies ist oft unmöglich, da .RAR-Dateien mehrere Ressourcen verschiedener Typen enthalten können. 
  In diesem Fall konfigurieren Sie den Server, um `application/x-rar-compressed` zu senden.
- Audio und Video.
  Nur Ressourcen mit dem korrekten MIME-Typ werden in {{HTMLElement("video")}} oder {{HTMLElement("audio")}}-Elementen wiedergegeben. 
  Stellen Sie sicher, dass Sie den korrekten [Medientyp für Audio und Video](/de/docs/Web/Media/Formats) angeben.
- Proprietäre Dateitypen.
  Ein spezifischer Typ wie `application/vnd.mspowerpoint` ermöglicht es Benutzern, solche Dateien automatisch in der Office-Software ihrer Wahl zu öffnen.

## MIME-Sniffing

In Abwesenheit eines MIME-Typs oder in bestimmten Fällen, in denen Browser glauben, dass sie falsch sind, können Browser ein _MIME-Sniffing_ durchführen — das Erraten des korrekten MIME-Typs, indem sie die Bytes der Ressource betrachten.

Jeder Browser führt MIME-Sniffing unterschiedlich und unter verschiedenen Umständen durch. 
(Zum Beispiel schaut Safari auf die Dateiendung in der URL, wenn der gesendete MIME-Typ ungeeignet ist.)
Es gibt Sicherheitsbedenken, da einige MIME-Typen ausführbare Inhalte darstellen. 
Server können MIME-Sniffing verhindern, indem sie den {{HTTPHeader("X-Content-Type-Options")}}-Header senden.

## Andere Methoden zur Übermittlung von Dokumententypen

MIME-Typen sind nicht die einzige Möglichkeit, Informationen zum Dokumenttyp zu übermitteln:

- Dateinamen-Suffixe werden manchmal verwendet, insbesondere auf Microsoft Windows. 
  Nicht alle Betriebssysteme betrachten diese Suffixe als bedeutsam (wie Linux und macOS), und es gibt keine Garantie, dass sie korrekt sind.
- Magic Numbers. Die Syntax verschiedener Formate erlaubt die Dateityp-Inferenz durch Betrachtung ihrer Byte-Struktur. 
  Beispielsweise beginnen GIF-Dateien mit dem `47 49 46 38 39`-Hexadezimalwert (`GIF89`), und PNG-Dateien mit `89 50 4E 47` (`.PNG`).
  Nicht alle Dateitypen haben Magic Numbers, daher ist auch dies nicht zu 100 % zuverlässig.

## Siehe auch

- [Web-Medientechnologien](/de/docs/Web/Media)
- [Leitfaden zu Medientypen, die im Web verwendet werden](/de/docs/Web/Media/Formats)
- [Server-MIME-Typen richtig konfigurieren](/de/docs/Learn_web_development/Extensions/Server-side/Configuring_server_MIME_types)
