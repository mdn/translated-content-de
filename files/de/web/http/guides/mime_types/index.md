---
title: Medientypen (MIME-Typen)
short-title: Media types
slug: Web/HTTP/Guides/MIME_types
l10n:
  sourceCommit: 29ed753ae6cb88cf05a5f712605de06ec25c1f15
---

Ein **Medientyp** (früher bekannt als **Multipurpose Internet Mail Extensions oder MIME-Typ**) gibt die Art und das Format eines Dokuments, einer Datei oder einer Byte-Reihe an. MIME-Typen sind definiert und standardisiert in IETFs {{RFC(6838)}}.

Die [Internet Assigned Numbers Authority (IANA)](https://www.iana.org/) ist für alle offiziellen MIME-Typen verantwortlich, und Sie finden die aktuellste und vollständigste Liste auf deren Seite [Media Types](https://www.iana.org/assignments/media-types/media-types.xhtml).

> [!WARNING]
> Browser verwenden den MIME-Typ, _nicht die Dateierweiterung_, um zu bestimmen, wie eine URL verarbeitet wird.
> Daher ist es wichtig, dass Webserver den korrekten MIME-Typ im {{HTTPHeader("Content-Type")}}-Header der Antwort senden.
> Wenn dies nicht korrekt konfiguriert ist, werden Browser wahrscheinlich die Inhalte von Dateien falsch interpretieren, Websites funktionieren nicht ordnungsgemäß, und heruntergeladene Dateien können falsch behandelt werden.

## Struktur eines MIME-Typs

Ein MIME-Typ besteht meistens aus nur zwei Teilen: einem _Typ_ und einem _Subtyp_, getrennt durch einen Schrägstrich (`/`) — ohne Leerzeichen dazwischen:

```plain
type/subtype
```

Der **_Typ_** repräsentiert die allgemeine Kategorie, in die der Datentyp fällt, wie `video` oder `text`.

Der **_Subtyp_** identifiziert die genaue Art der Daten des angegebenen Typs, die der MIME-Typ darstellt. Zum Beispiel könnte bei dem MIME-Typ `text` der Subtyp `plain` (Klartext), `html` ({{Glossary("HTML", "HTML")}} Quellcode) oder `calendar` (für iCalendar/`.ics`-Dateien) sein.

Jeder Typ hat eine eigene Menge möglicher Subtypen. Ein MIME-Typ hat immer sowohl einen Typ als auch einen Subtyp, niemals nur einen oder den anderen.

Ein optionaler **Parameter** kann hinzugefügt werden, um zusätzliche Details bereitzustellen:

```plain
type/subtype;parameter=value
```

Zum Beispiel können Sie für jeden MIME-Typ, dessen Haupttyp `text` ist, den optionalen `charset`-Parameter hinzufügen, um den verwendeten Zeichensatz für die Zeichen in den Daten anzugeben. Wenn kein `charset` angegeben ist, ist der Standard {{Glossary("ASCII", "ASCII")}} (`US-ASCII`), es sei denn, er wird von den Einstellungen des {{Glossary("user_agent", "User-Agents")}} überschrieben. Um eine UTF-8-Textdatei anzugeben, wird der MIME-Typ `text/plain;charset=UTF-8` verwendet.

MIME-Typen sind nicht case-sensitive, werden jedoch traditionell in Kleinbuchstaben geschrieben. Die Parameterwerte können case-sensitive sein.

### Typen

Es gibt zwei Klassen von Typen: **diskret** und **multipart**. Diskrete Typen repräsentieren eine einzelne Datei oder ein Medium, wie eine einzelne Text- oder Musikdatei oder ein einzelnes Video. Ein Multipart-Typ repräsentiert ein Dokument, das aus mehreren Komponenten besteht, von denen jede ihren eigenen individuellen MIME-Typ haben kann, oder ein Multipart-Typ kann mehrere Dateien enthalten, die in einer einzigen Transaktion zusammen gesendet werden. Beispielsweise werden Multipart-MIME-Typen verwendet, wenn mehrere Dateien an eine E-Mail angehängt werden.

#### Diskrete Typen

Die bei der IANA aktuell registrierten diskreten Typen sind:

- `application`
  - : Jedes binäre Datenformat, das nicht explizit in einen der anderen Typen fällt; entweder Daten, die auf irgendeine Weise ausgeführt oder interpretiert werden sollen, oder binäre Daten, die eine spezifische Anwendung oder Anwendungsart für die Nutzung erfordern. Allgemeine Binärdaten (oder Binärdaten, deren wahrer Typ unbekannt ist) sind `application/octet-stream`. Weitere häufige Beispiele sind `application/pdf`, `application/pkcs8` und `application/zip`. [(Siehe Anwendungs-Typ-Registrierung bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#application)
- `audio`
  - : Audio- oder Musikdaten. Beispiele sind `audio/mpeg` und `audio/vorbis`. [(Siehe Audio-Typ-Registrierung bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#audio)
- `example`
  - : Reserviert für die Verwendung als Platzhalter in Beispielen, die zeigen, wie MIME-Typen verwendet werden. Diese sollten niemals außerhalb von Beispielcode-Auflistungen und Dokumentationen verwendet werden. `example` kann auch als Subtyp verwendet werden; zum Beispiel kann in einem Beispiel im Zusammenhang mit der Arbeit mit Audio im Web der MIME-Typ `audio/example` verwendet werden, um anzuzeigen, dass der Typ ein Platzhalter ist und durch einen geeigneten ersetzt werden sollte, wenn der Code in der realen Welt verwendet wird.
- `font`
  - : Daten zu Schriftarten/Typografien. Häufige Beispiele sind `font/woff`, `font/ttf` und `font/otf`. [(Siehe Schriftarten-Typ-Registrierung bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#font)
- `image`
  - : Bild- oder Grafikdaten einschließlich sowohl Bitmap- als auch Vektor-Stillbilder sowie animierte Versionen von Standbildformaten wie animierte {{Glossary("GIF", "GIF")}} oder APNG. Häufige Beispiele sind `image/jpeg`, `image/png` und `image/svg+xml`. [(Siehe Bild-Typ-Registrierung bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#image)
- `model`
  - : Modelldaten für ein 3D-Objekt oder eine Szene. Beispiele sind `model/3mf` und `model/vrml`. [(Siehe Modell-Typ-Registrierung bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#model)
- `text`
  - : Nur-Text-Daten einschließlich aller menschenlesbaren Inhalte, Quellcode oder textuelle Daten wie Komma-separierte Werte (CSV). Beispiele sind: `text/plain`, `text/csv` und `text/html`. [(Siehe Text-Typ-Registrierung bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#text)
- `video`
  - : Video-Daten oder -Dateien, wie MP4-Filme (`video/mp4`). [(Siehe Video-Typ-Registrierung bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#video)

Für Textdokumente ohne spezifischen Subtyp sollte `text/plain` verwendet werden. Ebenso sollte für Binärdokumente ohne spezifischen oder bekannten Subtyp `application/octet-stream` verwendet werden.

#### Multipart-Typen

**Multipart**-Typen kennzeichnen eine Kategorie von Dokumenten, die in Teile zerlegt sind, oft mit unterschiedlichen MIME-Typen; sie können auch verwendet werden — besonders in E-Mail-Szenarien —, um mehrere separate Dateien darzustellen, die alle Teil der gleichen Transaktion sind. Sie repräsentieren ein **zusammengesetztes Dokument**.

Mit Ausnahme von `multipart/form-data`, das in der {{HTTPMethod("POST")}}-Methode von [HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms) verwendet wird, und `multipart/byteranges`, das mit {{HTTPStatus("206")}} `Partial Content` verwendet wird, um Teile eines Dokuments zu senden, behandelt HTTP multipart-Dokumente nicht auf besondere Weise: Die Nachricht wird an den Browser übertragen (der wahrscheinlich ein "Speichern unter"-Fenster anzeigt, falls er nicht weiß, wie er das Dokument anzeigen soll).

Es gibt zwei Multipart-Typen:

- `message`
  - : Eine Nachricht, die andere Nachrichten kapselt. Dies kann beispielsweise verwendet werden, um eine E-Mail darzustellen, die eine weitergeleitete Nachricht als Teil ihrer Daten enthält oder um das Senden sehr großer Nachrichten in Teilen zu ermöglichen, als ob es sich um mehrere Nachrichten handelte. Beispiele sind `message/rfc822` (für weitergeleitete oder beantwortete Nachrichten) und `message/partial`, um eine große Nachricht automatisch in kleinere aufzubrechen, die vom Empfänger wieder zusammengefügt werden. [(Siehe Nachrichten-Typ-Registrierung bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#message)
- `multipart`
  - : Daten, die aus mehreren Komponenten bestehen, die jeweils unterschiedliche MIME-Typen haben können. Beispiele sind `multipart/form-data` (für Daten, die mit der [`FormData`](/de/docs/Web/API/FormData) API erstellt wurden) und `multipart/byteranges` (definiert in {{RFC(7233, "", "5.4.1")}} und verwendet mit {{Glossary("HTTP", "HTTP")}}'s {{HTTPStatus(206)}} "Partial Content"-Antwort, die zurückgegeben wird, wenn die abgerufenen Daten nur ein Teil des Inhalts sind, wie er mit dem {{HTTPHeader("Range")}}-Header geliefert wird). [(Siehe Multipart-Typ-Registrierung bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#multipart)

## Wichtige MIME-Typen für Webentwickler

### application/octet-stream

Dies ist der Standard für Binärdateien. Da es "unbekannte Binärdatei" bedeutet, führen Browser es normalerweise nicht aus oder fragen sogar, ob es ausgeführt werden soll. Sie behandeln es so, als ob der {{HTTPHeader("Content-Disposition")}}-Header auf `attachment` gesetzt wäre, und schlagen ein "Speichern unter"-Dialog vor.

### text/plain

Dies ist der Standard für Textdateien. Auch wenn es wirklich "unbekannte Textdatei" bedeutet, gehen Browser davon aus, dass sie es anzeigen können.

> [!NOTE]
> `text/plain` bedeutet nicht "jede Art von Textdaten."
> Wenn sie eine bestimmte Art von Textdaten erwarten, werden sie es wahrscheinlich nicht als Übereinstimmung betrachten.
> Insbesondere wenn sie eine `text/plain`-Datei von einem {{HTMLElement("link")}}-Element herunterladen, das eine CSS-Datei deklariert, werden sie es nicht als gültige CSS-Datei erkennen, wenn sie mit `text/plain` präsentiert wird.
> Der CSS-MIME-Typ `text/css` muss verwendet werden.

### text/css

CSS-Dateien, die genutzt werden, um eine Webseite zu stylen, **müssen** mit `text/css` gesendet werden. Wenn ein Server das `.css`-Suffix für CSS-Dateien nicht erkennt, kann er sie mit `text/plain` oder `application/octet-stream` MIME-Typen senden. In diesem Fall werden sie von den meisten Browsern nicht als CSS erkannt und ignoriert.

### text/html

Alle HTML-Inhalte sollten mit diesem Typ bereitgestellt werden. Alternative MIME-Typen für XHTML (wie `application/xhtml+xml`) sind heutzutage größtenteils nutzlos.

> [!NOTE]
> Verwenden Sie `application/xml` oder `application/xhtml+xml`, wenn Sie die strikten Parsing-Regeln von XML, [`<![CDATA[…]]>`](/de/docs/Web/API/CDATASection)-Sektionen oder Elemente verwenden möchten, die nicht aus den HTML/SVG/MathML-Namensräumen stammen.

### text/javascript

JavaScript-Inhalte sollten immer mit dem MIME-Typ `text/javascript` bereitgestellt werden. Aus historischen Gründen können Browser einige [veraltete JavaScript-Typen](#veraltete_javascript-mime-typen) unterstützen, die unten aufgeführt sind, aber Sie sollten nicht davon ausgehen, dass Skripte, die mit einem anderen MIME-Typ als `text/javascript` bereitgestellt werden, immer geladen oder ausgeführt werden.

Beachten Sie, dass im HTML-Element {{htmlelement("script")}} das [`type`](/de/docs/Web/HTML/Reference/Elements/script/type)-Attribut nur den **Essenz des JavaScript-MIME-Typs** enthalten darf: `text/javascript`. Die Einbindung eines beliebigen Parameters, wie beispielsweise `charset=utf-8`, entspricht der Festlegung des `type` auf einen beliebigen anderen MIME-Typ: Der Skriptinhalt wird als Datenblock behandelt und nicht als JavaScript ausgeführt. (Beachten Sie, dass das Festlegen des `type` auf einen JavaScript-MIME-Typ selbst ein veraltetes Feature ist: Sie sollten den `type` in diesem Fall weglassen.) Im Gegensatz dazu kann mit dem HTTP-{{httpheader("Content-Type")}}-Header der `charset`-Parameter wie gewohnt optional angegeben werden.

Weitere Informationen finden Sie in: [IANA Media Types Registry](https://www.iana.org/assignments/media-types/media-types.xhtml#text), [RFC 9239](https://www.rfc-editor.org/rfc/rfc9239.html) und der [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/scripting.html#scriptingLanguages:text/javascript).

#### Veraltete JavaScript-MIME-Typen

Zusätzlich zum MIME-Typ `text/javascript` erlaubt der [MIME Sniffing Standard](https://mimesniff.spec.whatwg.org/) (die Definition, wie Browser MIME-Typen interpretieren und herausfinden sollen, was mit Inhalten zu tun ist, die keinen gültigen Typ haben) aus historischen Gründen, dass JavaScript mit einem der folgenden veralteten JavaScript-MIME-Typen bereitgestellt wird:

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
> Auch wenn ein gegebener {{Glossary("user_agent", "User-Agent")}} einen oder alle diese unterstützen mag, sollten Sie nur `text/javascript` verwenden.
> Es ist der einzige MIME-Typ, der jetzt und in Zukunft garantiert funktioniert.

### application/json

{{Glossary("JSON", "JavaScript Object Notation (JSON)")}} ist ein standardisiertes textbasiertes Format zur Darstellung strukturierter Daten basierend auf der Object-Syntax von JavaScript.
Es wird häufig für die Übertragung von Daten in Webanwendungen verwendet.

### Bildtypen

Dateien, deren MIME-Typ `image` ist, enthalten Bilddaten. Der Subtyp gibt das spezifische Bilddateiformat an, das die Daten darstellen.

Die folgenden Bildtypen sind häufig genug verwendet, um als _sicher_ für die Verwendung auf Webseiten betrachtet zu werden:

- [`image/apng`](/de/docs/Web/Media/Guides/Formats/Image_types#apng_animated_portable_network_graphics): Animierte Portable Network Graphics (APNG)
- [`image/avif`](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) : AV1 Image File Format (AVIF)
- [`image/gif`](/de/docs/Web/Media/Guides/Formats/Image_types#gif_graphics_interchange_format): Graphics Interchange Format (GIF)
- [`image/jpeg`](/de/docs/Web/Media/Guides/Formats/Image_types#jpeg_joint_photographic_experts_group_image): Joint Photographic Expert Group Bild (JPEG)
- [`image/png`](/de/docs/Web/Media/Guides/Formats/Image_types#png_portable_network_graphics): Portable Network Graphics (PNG)
- [`image/svg+xml`](/de/docs/Web/Media/Guides/Formats/Image_types#svg_scalable_vector_graphics): Scalable Vector Graphics (SVG)
- [`image/webp`](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image): Web Picture Format (WEBP)

Der [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types#common_image_file_types) bietet Empfehlungen, wann die verschiedenen Bildformate verwendet werden sollten.

### Audio- und Videotypen

Wie bei Bildern erfordert HTML nicht, dass Webbrowser bestimmte Datei- und Codec-Typen für die {{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elemente unterstützen. Deshalb ist es wichtig, Ihr Zielpublikum und die Bandbreite der Browser (und Versionen dieser Browser), die sie möglicherweise verwenden, zu berücksichtigen, wenn Sie den Dateityp und die Codecs für Medien auswählen.

Unser [Leitfaden zu Mediencontainerformaten](/de/docs/Web/Media/Guides/Formats/Containers) bietet eine Liste der Dateitypen, die häufig von Webbrowsern unterstützt werden, einschließlich Informationen über ihre speziellen Anwendungsfälle, potenziellen Nachteile und Kompatibilitätsinformationen, zusammen mit weiteren Details.

Die [Audio-Codec-](/de/docs/Web/Media/Guides/Formats/Audio_codecs) und [Video-Codec-Leitfäden](/de/docs/Web/Media/Guides/Formats/Video_codecs) listen die verschiedenen Codecs auf, die Webbrowser häufig unterstützen, bieten Kompatibilitätsdetails zusammen mit technischen Informationen wie der Anzahl der unterstützten Audiokanäle, welche Art von Kompression verwendet wird, welche Bitraten sie unterstützen etc. Der [Leitfaden zu den von WebRTC verwendeten Codecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) erweitert dies, indem speziell auf die Codecs eingegangen wird, die von den wichtigsten Webbrowsern unterstützt werden, sodass Sie jene Codecs auswählen können, die die von Ihnen gewünschte Bandbreite an Browsern am besten abdecken.

Was die MIME-Typen von Audio- oder Videodateien betrifft, geben sie typischerweise das Containerformat (Dateityp) an. Der optionale [codecs-Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter) kann dem MIME-Typ hinzugefügt werden, um weiter zu spezifizieren, welche Codecs verwendet werden sollen und welche Optionen zur Kodierung der Medien verwendet wurden, wie Codec-Profil, Level oder andere Informationen.

Weitere Informationen zu gängigen Medientypen finden Sie auf der Seite [Häufige MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types/Common_types).

### multipart/form-data

Der `multipart/form-data`-Typ kann beim Senden von ausgefüllten [HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms) vom Browser zum Server verwendet werden.

Als multipart-Dokumentformat besteht es aus verschiedenen Teilen, die durch eine Grenze (eine Zeichenkette beginnend mit einem doppelten Bindestrich `--`) abgegrenzt sind. Jeder Teil ist eine eigene Entität mit ihren eigenen HTTP-Headern, {{HTTPHeader("Content-Disposition")}} und {{HTTPHeader("Content-Type")}} für Datei-Upload-Felder.

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

Der `multipart/byteranges` MIME-Typ wird verwendet, um teilweise Antworten an den Browser zu senden.

Wenn der {{HTTPStatus("206", "206 Partial Content")}}-Statuscode gesendet wird, zeigt dieser MIME-Typ an, dass das Dokument aus mehreren Teilen besteht, einem für jeden der angeforderten Bereiche. Wie andere multipart-Typen verwendet der {{HTTPHeader("Content-Type")}} eine `boundary`, um die Teile zu trennen. Jeder Teil hat einen {{HTTPHeader("Content-Type")}} mit seinem tatsächlichen Typ und einen {{HTTPHeader("Content-Range")}}, der den Bereich angibt, den er darstellt.

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

Einige Serverkonfigurationen können den zugehörigen MIME-Typ verwenden, um Optimierungen wie Dateizusammenführung, Komprimierung oder Caching durchzuführen. Ein Beispiel für eine Apache-Konfiguration, die Dateien bestimmter MIME-Typen komprimiert, finden Sie unter [h5bp/server-configs-apache](https://github.com/h5bp/server-configs-apache/blob/main/h5bp/web_performance/compression.conf).

Die meisten Webserver senden nicht erkannte Ressourcen als den MIME-Typ `application/octet-stream`.
Aus Sicherheitsgründen erlauben die meisten Browser es nicht, eine benutzerdefinierte Standardaktion (wie "In Word öffnen") für solche Ressourcen festzulegen und zwingen den Benutzer, sie auf die Festplatte zu speichern, um sie zu nutzen.

Einige häufige falsche Serverkonfigurationen:

- RAR-komprimierte Dateien. In diesem Fall wäre es ideal, den echten Typ der Originaldateien zu verwenden; dies ist oft nicht möglich, da .RAR-Dateien mehrere Ressourcen unterschiedlicher Typen halten können. In diesem Fall konfigurieren Sie den Server, um `application/x-rar-compressed` zu senden.
- Audio und Video. Nur Ressourcen mit dem korrekten MIME-Typ werden in {{HTMLElement("video")}} oder {{HTMLElement("audio")}}-Elementen abgespielt. Stellen Sie sicher, dass Sie den korrekten [Medientyp für Audio und Video](/de/docs/Web/Media/Guides/Formats) angeben.
- Proprietäre Dateitypen. Ein spezifischer Typ wie `application/vnd.mspowerpoint` ermöglicht es den Benutzern, solche Dateien automatisch in der Präsentationssoftware ihrer Wahl zu öffnen.

## MIME-Sniffing

In Abwesenheit eines MIME-Typs oder in bestimmten Fällen, in denen Browser glauben, dass diese falsch sind, können Browser ein _MIME-Sniffing_ durchführen — das Erraten des richtigen MIME-Typs, indem sie auf die Bytes der Ressource schauen.

Jeder Browser führt MIME-Sniffing anders durch und unter unterschiedlichen Umständen.
(Zum Beispiel wird Safari die Dateierweiterung in der URL betrachten, wenn der gesendete MIME-Typ ungeeignet ist.)
Es gibt Sicherheitsbedenken, da einige MIME-Typen ausführbare Inhalte darstellen.
Server können das MIME-Sniffing verhindern, indem sie den {{HTTPHeader("X-Content-Type-Options")}}-Header senden.

## Andere Methoden zur Übermittlung von Dokumenttypen

MIME-Typen sind nicht die einzige Möglichkeit, Informationen zum Dokumenttyp zu übermitteln:

- Dateinamensuffixe werden manchmal verwendet, insbesondere unter Microsoft Windows. Nicht alle Betriebssysteme betrachten diese Suffixe als sinnvoll (wie Linux und macOS), und es gibt keine Garantie dafür, dass sie korrekt sind.
- Magic Numbers. Die Syntax verschiedener Formate erlaubt es, den Dateityp zu erschließen, indem man ihre Byte-Struktur betrachtet. Zum Beispiel beginnen GIF-Dateien mit dem hexadezimalen Wert `47 49 46 38 39` (`GIF89`), und PNG-Dateien mit `89 50 4E 47` (`.PNG`). Nicht alle Dateitypen haben Magic Numbers, daher ist dies auch nicht zu 100 % zuverlässig.

## Siehe auch

- [Medientechnologien im Web](/de/docs/Web/Media)
- [Leitfaden zu Medientypen, die im Web verwendet werden](/de/docs/Web/Media/Guides/Formats)
- [Richtige Konfiguration von Server-MIME-Typen](/de/docs/Learn_web_development/Extensions/Server-side/Configuring_server_MIME_types)
