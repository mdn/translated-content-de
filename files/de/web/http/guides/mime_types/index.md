---
title: Medientypen (MIME-Typen)
short-title: Media types
slug: Web/HTTP/Guides/MIME_types
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

Ein **Medientyp** (früher bekannt als **Multipurpose Internet Mail Extensions oder MIME-Typ**) gibt die Art und das Format eines Dokuments, einer Datei oder eines Byte-Satzes an.
MIME-Typen werden in IETFs {{RFC(6838)}} definiert und standardisiert.

Die [Internet Assigned Numbers Authority (IANA)](https://www.iana.org/) ist verantwortlich für alle offiziellen MIME-Typen, und Sie finden die aktuellste und vollständige Liste auf deren Seite [Media Types](https://www.iana.org/assignments/media-types/media-types.xhtml).

> [!WARNING]
> Browser verwenden den MIME-Typ, _nicht die Dateierweiterung_, um zu bestimmen, wie eine URL verarbeitet werden soll,
> daher ist es wichtig, dass Webserver den korrekten MIME-Typ im {{HTTPHeader("Content-Type")}}-Header der Antwort senden.
> Wenn dies nicht korrekt konfiguriert ist, werden Browser wahrscheinlich den Inhalt von Dateien falsch interpretieren, Websites funktionieren nicht korrekt und heruntergeladene Dateien können fehlbehandelt werden.

## Struktur eines MIME-Typs

Ein MIME-Typ besteht in der Regel aus nur zwei Teilen: einem _Typ_ und einem _Subtyp_, getrennt durch einen Schrägstrich (`/`) — ohne Leerzeichen dazwischen:

```plain
type/subtype
```

Der **_Typ_** stellt die allgemeine Kategorie dar, in die der Datentyp fällt, wie `video` oder `text`.

Der **_Subtyp_** identifiziert die genaue Art der Daten des angegebenen Typs, die der MIME-Typ repräsentiert.
Beispielsweise könnte beim MIME-Typ `text` der Subtyp `plain` (Klartext), `html` ({{Glossary("HTML", "HTML")}}-Quelldaten) oder `calendar` (für iCalendar/`.ics`)-Dateien sein.

Jeder Typ hat seine eigene Reihe möglicher Subtypen. Ein MIME-Typ hat immer sowohl einen Typ als auch einen Subtyp, niemals nur einen oder den anderen.

Ein optionaler **Parameter** kann hinzugefügt werden, um zusätzliche Details bereitzustellen:

```plain
type/subtype;parameter=value
```

Zum Beispiel kann für jeden MIME-Typ, dessen Haupttyp `text` ist, der optionale Parameter `charset` hinzugefügt werden, um den verwendeten Zeichensatz für die
Zeichen in den Daten anzugeben.
Wenn kein `charset` angegeben ist, ist der Standardzeichensatz {{Glossary("ASCII", "ASCII")}} (`US-ASCII`), es sei denn, dies wird durch die Einstellungen des {{Glossary("user_agent", "user agent")}} überschrieben.
Um eine UTF-8-Textdatei anzugeben, wird der MIME-Typ `text/plain;charset=UTF-8` verwendet.

MIME-Typen sind nicht groß- und kleinschreibungssensitiv, werden aber traditionell in Kleinbuchstaben geschrieben. Die Parameterwerte können jedoch groß- und kleinschreibungssensitiv sein.

### Typen

Es gibt zwei Klassen von Typen: **diskrete** und **mehrteilige**.
Diskrete Typen sind Typen, die eine einzelne Datei oder ein Medium darstellen, wie eine einzelne Text- oder Musikdatei oder ein einzelnes Video.
Ein mehrteiliger Typ repräsentiert ein Dokument, das aus mehreren Komponenten besteht, von denen jede ihren eigenen MIME-Typ haben kann, oder ein mehrteiliger Typ kann mehrere Dateien umfassen, die zusammen in einer Transaktion gesendet werden.
Beispielsweise werden mehrteilige MIME-Typen verwendet, wenn mehrere Dateien an eine E-Mail angehängt werden.

#### Diskrete Typen

Die derzeit bei der IANA registrierten diskreten Typen sind:

- `application`
  - : Jede Art von Binärdaten, die nicht explizit in eine der anderen Typen fällt; entweder Daten, die auf irgendeine Weise ausgeführt oder interpretiert werden müssen, oder Binärdaten, die eine spezielle Anwendung oder Kategorie von Anwendungen erfordern.
    Generische Binärdaten (oder Binärdaten, deren wahrer Typ unbekannt ist) sind `application/octet-stream`.
    Andere gängige Beispiele sind `application/pdf`, `application/pkcs8` und `application/zip`.
    [(Siehe Application-Typ-Registry bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#application)
- `audio`
  - : Audio- oder Musikdaten. Beispiele sind `audio/mpeg`,
    `audio/vorbis`.
    [(Siehe Audio-Typ-Registry bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#audio)
- `example`
  - : Reserviert für die Verwendung als Platzhalter in Beispielen, die zeigen, wie MIME-Typen verwendet werden.
    Diese sollten niemals außerhalb von Beispiel-Codelistings und Dokumentationen verwendet werden.
    `example` kann auch als Subtyp verwendet werden;
    zum Beispiel kann in einem Beispiel zum Arbeiten mit Audio im Web der MIME-Typ `audio/example` verwendet werden, um anzugeben, dass der Typ ein Platzhalter ist und beim Verwenden des Codes in der realen Welt durch einen geeigneten ersetzt werden muss.
- `font`
  - : Schrift-/Schriftdaten. Gängige Beispiele sind `font/woff`, `font/ttf` und `font/otf`.
    [(Siehe Font-Typ-Registry bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#font)
- `image`
  - : Bild- oder Grafikdaten, einschließlich sowohl Bitmap- als auch Vektorstandbilder sowie
    animierte Versionen von Standbildformaten wie animierte {{Glossary("GIF", "GIF")}} oder APNG.
    Gängige Beispiele sind `image/jpeg`, `image/png` und `image/svg+xml`.
    [(Siehe Image-Typ-Registry bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#image)
- `model`
  - : Modelldaten für ein 3D-Objekt oder eine Szene. Beispiele sind `model/3mf` und `model/vrml`.
    [(Siehe Model-Typ-Registry bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#model)
- `text`
  - : Nur-Text-Daten, einschließlich aller lesbaren Inhalte, Quellcode oder Textdaten wie durch Komma getrennte Werte (CSV)-formatierte Daten.
    Beispiele sind: `text/plain`, `text/csv` und `text/html`.
    [(Siehe Text-Typ-Registry bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#text)
- `video`
  - : Videodaten oder -dateien, wie z. B. MP4-Filme (`video/mp4`).
    [(Siehe Video-Typ-Registry bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#video)

Für Textdokumente ohne einen bestimmten Subtyp sollte `text/plain` verwendet werden.
Ebenso sollte für Binärdokumente ohne einen bestimmten oder bekannten Subtyp `application/octet-stream` verwendet werden.

#### Mehrteilige Typen

**Mehrteilige** Typen weisen auf eine Kategorie von Dokumenten hin, die in Stücke unterteilt ist, oft mit unterschiedlichen MIME-Typen; sie können auch verwendet werden – insbesondere in E-Mail-Szenarien –, um mehrere, separate Dateien zu repräsentieren, die alle Teil derselben Transaktion sind. Sie repräsentieren ein **zusammengesetztes Dokument**.

Mit Ausnahme von `multipart/form-data`, das in der {{HTTPMethod("POST")}}-Methode von [HTML Forms](/de/docs/Learn_web_development/Extensions/Forms) verwendet wird, und `multipart/byteranges`, das mit {{HTTPStatus("206")}} `Partial Content` verwendet wird, um einen Teil eines Dokuments zu senden, behandelt HTTP mehrteilige Dokumente nicht auf besondere Weise: Die Nachricht wird an den Browser übertragen (der wahrscheinlich ein "Speichern unter"-Fenster anzeigen wird, wenn er nicht weiß, wie das Dokument angezeigt werden soll).

Es gibt zwei mehrteilige Typen:

- `message`
  - : Eine Nachricht, die andere Nachrichten kapselt. Dies kann z.B. verwendet werden, um eine E-Mail darzustellen, die eine weitergeleitete Nachricht als Teil ihrer Daten enthält,
    oder um den Versand sehr großer Nachrichten in Teilen zu ermöglichen, als ob es sich um mehrere Nachrichten handelt.
    Beispiele sind `message/rfc822` (für weitergeleitete oder als Zitat beantwortete Nachrichten) und `message/partial`, um zu ermöglichen, dass eine große Nachricht automatisch in kleinere zerlegt wird, um sie vom Empfänger wieder zusammenzubauen.
    [(Siehe Nachrichten-Typ-Registry bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#message)
- `multipart`
  - : Daten, die aus mehreren Komponenten bestehen, die jeweils unterschiedliche MIME-Typen haben können.
    Beispiele sind `multipart/form-data` (für Daten, die mit der [`FormData`](/de/docs/Web/API/FormData)-API erzeugt wurden) und `multipart/byteranges` (definiert in {{RFC(7233, "", "5.4.1")}} und verwendet mit {{Glossary("HTTP", "HTTP")}}'s {{HTTPStatus(206)}}
    "Partial Content"-Antwort, die zurückgegeben wird, wenn die abgerufenen Daten nur ein Teil des Inhalts sind, z.B. wie sie mit dem {{HTTPHeader("Range")}}-Header bereitgestellt werden).
    [(Siehe Multipart-Typ-Registry bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#multipart)

## Wichtige MIME-Typen für Webentwickler

### application/octet-stream

Dies ist der Standard für Binärdateien. Da es _unbekannte binäre_ Datei bedeutet, führen Browser sie normalerweise nicht aus oder fragen sogar, ob sie ausgeführt werden soll. Sie behandeln es, als wäre der {{HTTPHeader("Content-Disposition")}}-Header auf `attachment` gesetzt, und schlagen einen "Speichern unter"-Dialog vor.

### text/plain

Dies ist der Standard für Textdateien. Auch wenn es wirklich "unbekannte Textdatei" bedeutet, gehen Browser davon aus, dass sie sie anzeigen können.

> [!NOTE]
> `text/plain` bedeutet nicht "jede Art von Textdaten."
> Wenn sie eine bestimmte Art von Textdaten erwarten, werden sie es wahrscheinlich nicht als Übereinstimmung betrachten.
> Insbesondere wenn sie eine `text/plain`-Datei von einem {{HTMLElement("link")}}-Element herunterladen, das eine CSS-Datei deklariert, werden sie sie nicht als eine gültige CSS-Datei erkennen, wenn sie mit `text/plain` bereitgestellt wird.
> Der CSS-MIME-Typ `text/css` muss verwendet werden.

### text/css

CSS-Dateien, die eine Webseite gestalten sollen, **müssen** mit `text/css` gesendet werden.
Wenn ein Server das `.css`-Suffix für CSS-Dateien nicht erkennt, kann er sie mit `text/plain` oder `application/octet-stream` MIME-Typen senden.
Wenn ja, werden sie von den meisten Browsern nicht als CSS erkannt und ignoriert.

### text/html

Alle HTML-Inhalte sollten mit diesem Typ bereitgestellt werden. Alternative MIME-Typen für XHTML (wie `application/xhtml+xml`) sind heutzutage größtenteils unnütz.

> [!NOTE]
> Verwenden Sie `application/xml` oder `application/xhtml+xml`, wenn Sie die strengen XML-Parsing-Regeln, [`<![CDATA[…]]>`](/de/docs/Web/API/CDATASection) Abschnitte oder Elemente verwenden möchten, die nicht aus den HTML/SVG/MathML-Namensräumen stammen.

### text/javascript

JavaScript-Inhalte sollten immer mit dem MIME-Typ `text/javascript` bereitgestellt werden.
Aus historischen Gründen können Browser einige unten gelistete [veraltete JavaScript-Typen](#veraltete_javascript-mime-typen) unterstützen, aber Sie sollten nicht davon ausgehen, dass Scripts, die mit einem anderen MIME-Typ als `text/javascript` bereitgestellt werden, immer geladen oder ausgeführt werden.

Beachten Sie, dass im HTML das [`type`](/de/docs/Web/HTML/Reference/Elements/script/type)-Attribut für {{htmlelement("script")}}-Elemente nur die **JavaScript MIME-Typ Essenz** enthalten darf: `text/javascript` oder eines der Schlüsselwörter `module` (für ES-Module) oder `importmap`.
Das Einfügen eines beliebigen Parameters im `type`-Attribut, wie `charset=utf-8`, entspricht der Einstellung des `type` auf [einen nicht erkannten Wert](/de/docs/Web/HTML/Reference/Elements/script/type#any_other_value): Der Script-Inhalt wird als Datenblock behandelt und nicht als JavaScript ausgeführt.
Beachten Sie, dass das Setzen von `type="text/javascript"` nicht mehr notwendig ist; dies ist der Standard für `<script>`-Elemente, daher können Sie das `type`-Attribut in diesem Fall vollständig weglassen.
Im Gegensatz dazu können Sie bei Verwendung des HTTP {{httpheader("Content-Type")}}-Headers den `charset`-Parameter wie gewohnt optional spezifizieren.

Weitere Informationen finden Sie unter: [IANA Media Types registry](https://www.iana.org/assignments/media-types/media-types.xhtml#text), [RFC 9239](https://www.rfc-editor.org/info/rfc9239/), und der [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/scripting.html#scriptingLanguages:text/javascript).

#### Veraltete JavaScript-MIME-Typen

Zusätzlich zum MIME-Typ `text/javascript` ermöglicht die [MIME Sniffing Standard](https://mimesniff.spec.whatwg.org/)
(die Definition, wie Browser MIME-Typen interpretieren und herausfinden sollten, was sie mit Inhalten machen sollen, die keinen gültigen haben) aus historischen Gründen auch, dass JavaScript mit einem der folgenden veralteten JavaScript-MIME-Typen bereitgestellt wird:

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
> Auch wenn ein gegebener {{Glossary("user_agent", "user agent")}} einige oder alle dieser Typen unterstützen könnte, sollten Sie nur `text/javascript` verwenden.
> Es ist der einzige MIME-Typ, der jetzt und in Zukunft garantiert funktioniert.

### application/json

{{Glossary("JSON", "JavaScript Object Notation (JSON)")}} ist ein standardisiertes textbasiertes Format zur Darstellung strukturierter Daten basierend auf JavaScript-Objektsyntax.
Es wird häufig zum Übertragen von Daten in Webanwendungen verwendet.

### Bildtypen

Dateien, deren MIME-Typ `image` ist, enthalten Bilddaten.
Der Subtyp gibt das spezifische Bilddateiformat an, das die Daten darstellen.

Die folgenden Bildtypen werden häufig genug verwendet, um als _sicher_ für den Einsatz auf Webseiten zu gelten:

- [`image/apng`](/de/docs/Web/Media/Guides/Formats/Image_types#apng_animated_portable_network_graphics): Animated Portable Network Graphics (APNG)
- [`image/avif`](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) : AV1 Image File Format (AVIF)
- [`image/gif`](/de/docs/Web/Media/Guides/Formats/Image_types#gif_graphics_interchange_format): Graphics Interchange Format (GIF)
- [`image/jpeg`](/de/docs/Web/Media/Guides/Formats/Image_types#jpeg_joint_photographic_experts_group_image): Joint Photographic Expert Group image (JPEG)
- [`image/png`](/de/docs/Web/Media/Guides/Formats/Image_types#png_portable_network_graphics): Portable Network Graphics (PNG)
- [`image/svg+xml`](/de/docs/Web/Media/Guides/Formats/Image_types#svg_scalable_vector_graphics): Scalable Vector Graphics (SVG)
- [`image/webp`](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image): Web Picture format (WEBP)

Der [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types#common_image_file_types) bietet Informationen und Empfehlungen, wann die verschiedenen Bildformate verwendet werden sollten.

### Audio- und Videotypen

Ähnlich wie bei Bildern verlangt HTML nicht, dass Webbrowser bestimmte Datei- und Codec-Typen für die {{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elemente unterstützen, daher ist es wichtig, Ihr Zielpublikum und die Bandbreite der Browser (und deren Versionen), die sie möglicherweise verwenden, zu berücksichtigen, wenn Sie den Dateityp und die Codecs für Medien auswählen.

Unser [Leitfaden zu Mediencontainerformaten](/de/docs/Web/Media/Guides/Formats/Containers) bietet eine Liste der Dateitypen, die von Webbrowsern häufig unterstützt werden, einschließlich Informationen über deren spezielle Anwendungsfälle, etwaige Nachteile und Kompatibilitätsinformationen sowie andere Details.

Die [Audiocodec](/de/docs/Web/Media/Guides/Formats/Audio_codecs)- und [Videocodec](/de/docs/Web/Media/Guides/Formats/Video_codecs)-Leitfäden listen die verschiedenen Codecs auf, die Webbrowser häufig unterstützen. Sie bieten Kompatibilitätsdetails sowie technische Informationen wie die Anzahl der unterstützten Audiokanäle, die Art der Kompression, die verwendet wird, und welche Bitraten und dergleichen bei ihnen nützlich sind.
Der [Leitfaden zu Codecs, die von WebRTC verwendet werden](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs), erweitert dies, indem er speziell die von den wichtigsten Webbrowsern unterstützen Codecs behandelt, sodass Sie die Codecs auswählen können, die am besten die Bandbreite der von Ihnen unterstützten Browser abdecken.

Wie bei MIME-Typen von Audio- oder Videodateien geben diese typischerweise das Containerformat (Dateityp) an.
Das optionale [Codecs-Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter) kann dem MIME-Typ hinzugefügt werden, um weiter anzugeben, welche Codecs verwendet wurden und welche Optionen verwendet wurden, um die Medien zu kodieren, wie Codec-Profil, Level oder andere solche Informationen.

Weitere Informationen zu gängigen Medientypen finden Sie auf der Seite [Gängige MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types/Common_types).

### multipart/form-data

Der Typ `multipart/form-data` kann verwendet werden, wenn die Werte eines ausgefüllten [HTML-Formulars](/de/docs/Learn_web_development/Extensions/Forms) vom Browser an den Server gesendet werden.

Als mehrteiliges Dokumentformat besteht es aus verschiedenen Teilen, die durch eine Grenze (ein String, der mit einem doppelten Bindestrich `--` beginnt) getrennt sind.
Jeder Teil ist eine eigene Einheit mit eigenen HTTP-Headern, {{HTTPHeader("Content-Disposition")}}, und {{HTTPHeader("Content-Type")}} für Dateihochladungsfelder.

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

Der MIME-Typ `multipart/byteranges` wird verwendet, um partielle Antworten an den Browser zu senden.

Wenn der {{HTTPStatus("206", "206 Partial Content")}}-Statuscode gesendet wird, zeigt dieser MIME-Typ an, dass das Dokument aus mehreren Teilen besteht, einer für jeden der
angeforderten Bereiche. Wie andere multipart-Typen verwendet der {{HTTPHeader("Content-Type")}} eine `boundary`, um die Stücke zu trennen.
Jedes Stück hat einen {{HTTPHeader("Content-Type")}}-Header mit seinem tatsächlichen Typ und einen {{HTTPHeader("Content-Range")}} des Bereichs, den es darstellt.

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

Einige Serverkonfigurationen können den zugehörigen MIME-Typ verwenden, um Optimierungen vorzunehmen, wie z.B. Datei-Konkatenation, Komprimierung oder Caching. Siehe [h5bp/server-configs-apache](https://github.com/h5bp/server-configs-apache/blob/main/h5bp/web_performance/compression.conf) für ein Beispiel einer Apache-Konfiguration, die bestimmte MIME-Typen komprimiert.

Die meisten Webserver senden nicht erkannte Ressourcen als den MIME-Typ `application/octet-stream`.
Aus Sicherheitsgründen erlauben die meisten Browser nicht, eine benutzerdefinierte Standardaktion (wie "In Word öffnen") für solche Ressourcen festzulegen, und zwingen den Benutzer, sie auf die Festplatte zu speichern, um sie zu verwenden.

Einige häufige falsche Serverkonfigurationen:

- RAR-komprimierte Dateien.
  In diesem Fall wäre der Idealfall der wahre Typ der Originaldateien; dies ist oft unmöglich, da .RAR-Dateien mehrere Ressourcen unterschiedlichen Typs enthalten können.
  In diesem Fall konfigurieren Sie den Server, um `application/x-rar-compressed` zu senden.
- Audio und Video.
  Nur Ressourcen mit dem korrekten MIME-Typ werden in {{HTMLElement("video")}}- oder {{HTMLElement("audio")}}-Elementen abgespielt.
  Stellen Sie sicher, dass Sie den richtigen [Medientyp für Audio und Video](/de/docs/Web/Media/Guides/Formats) angeben.
- Proprietäre Dateitypen.
  Ein spezifischer Typ wie `application/vnd.mspowerpoint` ermöglicht es Benutzern, solche Dateien automatisch in der von ihnen gewählten Präsentationssoftware zu öffnen.

## MIME-Sniffing

In Abwesenheit eines MIME-Typs oder in bestimmten Fällen, in denen Browser glauben, dass sie falsch sind, können Browser _MIME-Sniffing_ durchführen — den korrekten MIME-Typ erraten, indem sie sich die Bytes der Ressource ansehen.

Jeder Browser führt MIME-Sniffing unterschiedlich und unter unterschiedlichen Umständen durch.
(Beispielsweise wird Safari auf die Dateierweiterung in der URL schauen, wenn der gesandte MIME-Typ nicht geeignet ist.)
Es gibt Sicherheitsbedenken, da einige MIME-Typen ausführbare Inhalte darstellen.
Server können MIME-Sniffing verhindern, indem sie den {{HTTPHeader("X-Content-Type-Options")}}-Header senden.

## Andere Methoden zur Angabe des Dokumententyps

MIME-Typen sind nicht der einzige Weg, um Informationen zum Dokumententyp zu vermitteln:

- Dateinamenerweiterungen werden manchmal verwendet, insbesondere auf Microsoft Windows.
  Nicht alle Betriebssysteme betrachten diese Erweiterungen als bedeutend (wie Linux und macOS), und es gibt keine Garantie, dass sie korrekt sind.
- Magische Zahlen. Die Syntax verschiedener Formate ermöglicht eine Rückschlüsse auf den Dateityp, indem man sich ihre Byte-Struktur ansieht.
  Zum Beispiel beginnen GIF-Dateien mit dem hexadezimalen Wert `47 49 46 38 39` (`GIF89`), und PNG-Dateien mit `89 50 4E 47` (`.PNG`).
  Nicht alle Dateitypen haben magische Zahlen, sodass dies ebenfalls nicht 100% zuverlässig ist.

## Siehe auch

- [Web-Medientechnologien](/de/docs/Web/Media)
- [Leitfaden zu Medientypen, die im Web verwendet werden](/de/docs/Web/Media/Guides/Formats)
- [Ordnungsgemäße Konfiguration von Server-MIME-Typen](/de/docs/Learn_web_development/Extensions/Server-side/Configuring_server_MIME_types)
