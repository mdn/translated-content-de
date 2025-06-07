---
title: Medientypen (MIME-Typen)
short-title: Media types
slug: Web/HTTP/Guides/MIME_types
l10n:
  sourceCommit: c65a961090cf305a88fd496d1383a6931280cb37
---

{{HTTPSidebar}}

Ein **Medientyp** (früher bekannt als **Multipurpose Internet Mail Extensions oder MIME-Typ**) gibt die Natur und das Format eines Dokuments, einer Datei oder einer Ansammlung von Bytes an. MIME-Typen werden durch die IETF in {{RFC(6838)}} definiert und standardisiert.

Die [Internet Assigned Numbers Authority (IANA)](https://www.iana.org/) ist für alle offiziellen MIME-Typen verantwortlich, und Sie können die aktuellste und vollständigste Liste auf ihrer [Medientypen](https://www.iana.org/assignments/media-types/media-types.xhtml) Seite finden.

> [!WARNING]
> Browser verwenden den MIME-Typ, _nicht die Dateierweiterung_, um zu bestimmen, wie eine URL verarbeitet werden soll.
> Es ist daher wichtig, dass Webserver den korrekten MIME-Typ im {{HTTPHeader("Content-Type")}}-Header der Antwort senden.
> Wenn dies nicht korrekt konfiguriert ist, werden Browser wahrscheinlich den Inhalt von Dateien falsch interpretieren, Websites funktionieren nicht richtig, und heruntergeladene Dateien können falsch behandelt werden.

## Struktur eines MIME-Typs

Ein MIME-Typ besteht am häufigsten aus zwei Teilen: einem _Typ_ und einem _Subtyp_, die durch einen Schrägstrich (`/`) getrennt sind — ohne Leerzeichen dazwischen:

```plain
type/subtype
```

Der **_Typ_** repräsentiert die allgemeine Kategorie, in die der Dateityp fällt, wie etwa `video` oder `text`.

Der **_Subtyp_** identifiziert die genaue Art der Daten des angegebenen Typs, die der MIME-Typ darstellt. Zum Beispiel könnte der Subtyp für den MIME-Typ `text` `plain` (unformatierter Text), `html` ({{Glossary("HTML", "HTML")}}-Quellcode) oder `calendar` (für iCalendar/`.ics` Dateien) sein.

Jeder Typ hat seinen eigenen Satz möglicher Subtypen. Ein MIME-Typ hat immer einen Typ und einen Subtyp, nie nur einen oder den anderen.

Ein optionaler **Parameter** kann hinzugefügt werden, um zusätzliche Details bereitzustellen:

```plain
type/subtype;parameter=value
```

Beispielsweise kann bei jedem MIME-Typ, dessen Haupttyp `text` ist, der optionale `charset`-Parameter hinzugefügt werden, um das verwendete Zeichensatz für die Zeichen in den Daten zu spezifizieren. Wenn kein `charset` angegeben wird, ist der Standard {{Glossary("ASCII", "ASCII")}} (`US-ASCII`), es sei denn, dies wird durch die Einstellungen des {{Glossary("user_agent", "Benutzeragenten")}} überschrieben. Um eine UTF-8-Textdatei anzugeben, wird der MIME-Typ `text/plain;charset=UTF-8` verwendet.

MIME-Typen sind nicht fallunterscheidend, werden jedoch traditionell in Kleinbuchstaben geschrieben. Die Parameterwerte können fallunterscheidend sein.

### Typen

Es gibt zwei Klassen von Typen: **diskrete** und **mehrteilige**. Diskrete Typen sind Typen, die eine einzelne Datei oder ein Medium repräsentieren, wie z.B. eine einzelne Text- oder Musikdatei oder ein einzelnes Video. Ein mehrteiliger Typ repräsentiert ein Dokument, das aus mehreren Komponenten besteht, von denen jede ihren eigenen individuellen MIME-Typ haben kann; oder ein mehrteiliger Typ kann mehrere Dateien einkapseln, die in einer Transaktion zusammen gesendet werden. Zum Beispiel werden mehrteilige MIME-Typen verwendet, wenn mehrere Dateien an eine E-Mail angehängt werden.

#### Diskrete Typen

Die derzeit bei der IANA registrierten diskreten Typen sind:

- `application`
  - : Jede Art von binären Daten, die nicht explizit in eine der anderen Typen fällt; entweder Daten, die auf irgendeine Weise ausgeführt oder interpretiert werden oder binäre Daten, die eine spezifische Anwendung oder Kategorie von Anwendungen zur Verwendung benötigen. Generische Binärdaten (oder Binärdaten, deren wahrer Typ unbekannt ist) sind `application/octet-stream`. Andere gängige Beispiele sind `application/pdf`, `application/pkcs8` und `application/zip`. [(Siehe Anwendungs-Typen-Registry bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#application)
- `audio`
  - : Audio- oder Musikdaten. Beispiele sind `audio/mpeg`, `audio/vorbis`. [(Siehe Audio-Typen-Registry bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#audio)
- `example`
  - : Reserviert zur Verwendung als Platzhalter in Beispielen, die zeigen, wie MIME-Typen verwendet werden. Diese sollten niemals außerhalb von Muster-Code-Listings und Dokumentationen verwendet werden. `example` kann auch als Subtyp verwendet werden; zum Beispiel kann in einem Beispiel, das sich auf die Arbeit mit Audio im Web bezieht, der MIME-Typ `audio/example` verwendet werden, um anzuzeigen, dass der Typ ein Platzhalter ist und durch einen passenden ersetzt werden sollte, wenn der Code in der realen Welt verwendet wird.
- `font`
  - : Schriftart-/Schriftzeichendaten. Gängige Beispiele sind `font/woff`, `font/ttf` und `font/otf`. [(Siehe Schriftarten-Typen-Registry bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#font)
- `image`
  - : Bild- oder grafische Daten, einschließlich Bitmap- und Vektor-Standbilder sowie animierte Versionen von Standbildformaten wie animierte {{Glossary("GIF", "GIF")}} oder APNG. Häufige Beispiele sind `image/jpeg`, `image/png` und `image/svg+xml`. [(Siehe Bildtypen-Registry bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#image)
- `model`
  - : Modelldaten für ein 3D-Objekt oder eine Szene. Beispiele sind `model/3mf` und `model/vrml`. [(Siehe Modelltypen-Registry bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#model)
- `text`
  - : Nur Textdaten, einschließlich beliebiger menschlich lesbarer Inhalte, Quellcodes oder Textdaten wie CSV-formatierte Daten. Beispiele sind: `text/plain`, `text/csv` und `text/html`. [(Siehe Texttypen-Registry bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#text)
- `video`
  - : Videodaten oder -dateien, wie MP4-Filme (`video/mp4`). [(Siehe Videotypen-Registry bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#video)

Für Textdokumente ohne einen spezifischen Subtyp sollte `text/plain` verwendet werden. Ebenso sollte für Binärdokumente ohne einen spezifischen oder bekannten Subtyp `application/octet-stream` verwendet werden.

#### Mehrteilige Typen

**Mehrteilige** Typen kennzeichnen eine Kategorie von Dokumenten, die in
Stücke zerlegt sind, oft mit verschiedenen MIME-Typen; sie können auch verwendet werden — insbesondere in E-Mail-
Szenarien — um mehrere, separate Dateien darzustellen, die alle Teil derselben
Transaktion sind. Sie repräsentieren ein **zusammengesetztes Dokument**.

Außer `multipart/form-data`, das in der {{HTTPMethod("POST")}}-Methode von [HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms) verwendet wird, und `multipart/byteranges`, das mit {{HTTPStatus("206")}} `Partial Content` verwendet wird, um Teil eines Dokuments zu senden, behandelt HTTP mehrteilige Dokumente nicht auf besondere Weise: Die Nachricht wird an den Browser übertragen (der wahrscheinlich ein "Speichern unter"-Fenster anzeigt, wenn er nicht weiß, wie das Dokument angezeigt werden soll).

Es gibt zwei mehrteilige Typen:

- `message`
  - : Eine Nachricht, die andere Nachrichten einkapselt. Dies kann verwendet werden, um z.B. eine E-Mail darzustellen, die eine weitergeleitete Nachricht als Teil ihrer Daten enthält,
    oder um das Senden sehr großer Nachrichten in Teilen wie mehrere Nachrichten zu erlauben.
    Beispiele sind `message/rfc822` (für weitergeleitete oder beantwortete Nachrichtenzitate) und `message/partial`, um ein großes Nachricht automatisch in kleinere zu unterteilen, damit der Empfänger sie wieder zusammensetzen kann.
    [(Siehe Nachrichtentypen-Registry bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#message)
- `multipart`
  - : Daten, die aus mehreren Komponenten bestehen, die jeweils möglicherweise unterschiedliche MIME-Typen haben.
    Beispiele sind `multipart/form-data` (für Daten, die mit der [`FormData`](/de/docs/Web/API/FormData) API erzeugt werden) und `multipart/byteranges` (definiert in {{RFC(7233, "", "5.4.1")}} und verwendet mit {{Glossary("HTTP", "HTTP")}}'s {{HTTPStatus(206)}}
    "Partieller Inhalt" Antwort, wenn die abgerufenen Daten nur ein Teil des Inhalts sind, wie es mit dem {{HTTPHeader("Range")}}-Header geliefert wird).
    [(Siehe mehrteilige Typen-Registry bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#multipart)

## Wichtige MIME-Typen für Webentwickler

### application/octet-stream

Dies ist der Standard für Binärdateien. Da es _unbekannte binäre_ Datei bedeutet, führen Browser es normalerweise nicht aus oder fragen sogar, ob es ausgeführt werden soll. Sie behandeln es so, als ob der {{HTTPHeader("Content-Disposition")}}-Header auf `attachment` gesetzt wäre, und schlagen einen "Speichern unter"-Dialog vor.

### text/plain

Dies ist der Standard für Textdateien. Auch wenn es wirklich "unbekannte Textdatei" bedeutet, gehen Browser davon aus, dass sie es anzeigen können.

> **Hinweis:** `text/plain` bedeutet nicht "jede Art von Textdaten".
> Wenn sie eine bestimmte Art von Textdaten erwarten, werden sie es wahrscheinlich nicht als Übereinstimmung ansehen.
> Insbesondere wenn sie eine `text/plain`-Datei aus einem {{HTMLElement("link")}}-Element herunterladen, das eine CSS-Datei deklariert, werden sie es nicht als gültige CSS-Datei erkennen, wenn sie mit `text/plain` präsentiert wird.
> Der CSS-Mime-Typ `text/css` muss verwendet werden.

### text/css

CSS-Dateien, die zur Gestaltung einer Webseite verwendet werden, **müssen** mit `text/css` gesendet werden.
Wenn ein Server das `.css`-Suffix für CSS-Dateien nicht erkennt, können sie mit den MIME-Typen `text/plain` oder `application/octet-stream` gesendet werden.
In diesem Fall werden sie von den meisten Browsern nicht als CSS erkannt und ignoriert.

### text/html

Alle HTML-Inhalte sollten mit diesem Typ bereitgestellt werden. Alternative MIME-Typen für XHTML (wie `application/xhtml+xml`) sind heutzutage weitestgehend nutzlos.

> [!NOTE]
> Verwenden Sie `application/xml` oder `application/xhtml+xml`, wenn Sie die strengen Parsingregeln von XML, [`<![CDATA[…]]>`](/de/docs/Web/API/CDATASection)-Abschnitte oder Elemente möchten, die nicht aus den HTML/SVG/MathML-Namensräumen stammen.

### text/javascript

Laut dem [IANA Media Types Registry](https://www.iana.org/assignments/media-types/media-types.xhtml#text), [RFC 9239](https://www.rfc-editor.org/rfc/rfc9239.html), und der [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/scripting.html#scriptingLanguages:text/javascript) sollte JavaScript-Inhalt immer mit dem MIME-Typ `text/javascript` bereitgestellt werden.
Keine anderen MIME-Typen werden für JavaScript als gültig angesehen, und die Verwendung eines anderen MIME-Typs als `text/javascript` kann dazu führen, dass Skripte nicht geladen oder ausgeführt werden.

Sie könnten einige JavaScript-Inhalte finden, die fälschlicherweise mit einem `charset`-Parameter als Teil des MIME-Typs bereitgestellt werden — als Versuch, den Zeichensatz für den Skriptinhalt anzugeben.
Dieser `charset`-Parameter ist für JavaScript-Inhalte nicht gültig und führt in den meisten Fällen dazu, dass ein Skript nicht geladen wird.

### application/json

{{Glossary("JSON", "JavaScript Object Notation (JSON)")}} ist ein standardisiertes textbasiertes Format zur Darstellung strukturierter Daten basierend auf der JavaScript-Objektsyntax. Es wird häufig zum Übertragen von Daten in Webanwendungen verwendet.

#### Veraltete JavaScript-MIME-Typen

Zusätzlich zu dem `text/javascript` MIME-Typ, erlaubt der [MIME Sniffing Standard](https://mimesniff.spec.whatwg.org/)
(die Definition, wie Browser MIME-Typen interpretieren und herausfinden sollen,
was mit Inhalten zu tun ist, die keinen gültigen haben) aus historischen Gründen auch, dass JavaScript mit einem der folgenden veralteten JavaScript-MIME-Typen bereitgestellt wird:

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
> Auch wenn ein bestimmter {{Glossary("user_agent", "Benutzeragent")}} möglicherweise alle oder einige davon unterstützt, sollten Sie nur `text/javascript` verwenden.
> Dies ist der einzige MIME-Typ, der jetzt und in Zukunft garantiert funktioniert.

### Bildtypen

Dateien, deren MIME-Typ `image` ist, enthalten Bilddaten.
Der Subtyp gibt an, welches spezifische Bilddateiformat die Daten darstellen.

Die folgenden Bildtypen werden häufig genug verwendet, um als _sicher_ für die Verwendung auf Webseiten angesehen zu werden:

- [`image/apng`](/de/docs/Web/Media/Guides/Formats/Image_types#apng_animated_portable_network_graphics): Animated Portable Network Graphics (APNG)
- [`image/avif`](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) : AV1 Image File Format (AVIF)
- [`image/gif`](/de/docs/Web/Media/Guides/Formats/Image_types#gif_graphics_interchange_format): Graphics Interchange Format (GIF)
- [`image/jpeg`](/de/docs/Web/Media/Guides/Formats/Image_types#jpeg_joint_photographic_experts_group_image): Joint Photographic Expert Group image (JPEG)
- [`image/png`](/de/docs/Web/Media/Guides/Formats/Image_types#png_portable_network_graphics): Portable Network Graphics (PNG)
- [`image/svg+xml`](/de/docs/Web/Media/Guides/Formats/Image_types#svg_scalable_vector_graphics): Scalable Vector Graphics (SVG)
- [`image/webp`](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image): Web Picture format (WEBP)

Der [Leitfaden für Bilddateitypen und -formate](/de/docs/Web/Media/Guides/Formats/Image_types#common_image_file_types) bietet Informationen und Empfehlungen, wann die verschiedenen Bildformate verwendet werden sollten.

### Audio- und Videotypen

Wie es bei Bildern der Fall ist, schreibt HTML nicht vor, dass Webbrowser bestimmte Datei- und Codec-Typen für die {{HTMLElement("audio")}} und {{HTMLElement("video")}}-Elemente unterstützen müssen. Es ist daher wichtig, Ihre Zielgruppe und die Palette der Browser (und Versionen dieser Browser), die sie möglicherweise verwenden, zu berücksichtigen, wenn Sie den Dateityp und die Codecs für Medien auswählen.

Unser [Leitfaden zu Mediendateiformaten](/de/docs/Web/Media/Guides/Formats/Containers) bietet eine Liste der Dateitypen, die von Webbrowsern häufig unterstützt werden, einschließlich Informationen über ihre speziellen Anwendungsfälle, mögliche Nachteile, Kompatibilitätsinformationen sowie weitere Details.

Die [Audio-Codec](/de/docs/Web/Media/Guides/Formats/Audio_codecs)- und [Video-Codec](/de/docs/Web/Media/Guides/Formats/Video_codecs)-Leitfäden listen die verschiedenen Codecs auf, die Webbrowser häufig unterstützen, und bieten Kompatibilitätsdetails sowie technische Informationen, wie viele Audiokanäle sie unterstützen, welche Art von Kompression verwendet wird und welche Bitraten sie nützlich sind.
Der [Leitfaden zu den Codecs, die von WebRTC verwendet werden](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) erweitert dies, indem er speziell die von den wichtigsten Webbrowsern unterstützten Codecs abdeckt, sodass Sie die Codecs auswählen können, die die Palette der zu unterstützenden Browser am besten abdecken.

Was die MIME-Typen von Audio- oder Videodateien betrifft, so spezifizieren sie typischerweise das Containerformat (Dateityp).
Der optionale [codecs-Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter) kann zum MIME-Typ hinzugefügt werden, um weiter zu spezifizieren, welche Codecs verwendet werden sollen und welche Optionen zur Kodierung der Medien verwendet wurden, wie z.B. Codec-Profil, Ebene oder andere derartige Informationen.

Weitere Informationen zu allgemeinen Medientypen finden Sie auf der Seite [Common MIME types](/de/docs/Web/HTTP/Guides/MIME_types/Common_types).

### multipart/form-data

Der Typ `multipart/form-data` kann verwendet werden, wenn die Werte eines ausgefüllten [HTML-Formulars](/de/docs/Learn_web_development/Extensions/Forms) vom Browser zum Server gesendet werden.

Als ein mehrteiliges Dokumentformat besteht es aus verschiedenen Teilen, die durch eine Begrenzung (eine Zeichenkette, die mit einem doppelten Bindestrich `--` beginnt) begrenzt sind.
Jeder Teil ist eine eigene Entität mit eigenen HTTP-Headern, {{HTTPHeader("Content-Disposition")}} und {{HTTPHeader("Content-Type")}} für Datei-Upload-Felder.

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

Wenn der {{HTTPStatus("206", "206 Partial Content")}}-Statuscode gesendet wird, zeigt dieser MIME-Typ an, dass das Dokument aus mehreren Teilen besteht, für jeden der angeforderten Bereiche einen. Wie bei anderen mehrteiligen Typen verwendet der {{HTTPHeader("Content-Type")}} einen `boundary`, um die Teile zu trennen. Jeder Teil hat einen {{HTTPHeader("Content-Type")}}-Header mit seinem eigentlichen Typ und einen {{HTTPHeader("Content-Range")}} des Bereichs, den er darstellt.

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

Einige Serverkonfigurationen können den zugeordneten MIME-Typ verwenden, um Optimierungen wie Dateikombination, Kompression oder Caching durchzuführen. Siehe [h5bp/server-configs-apache](https://github.com/h5bp/server-configs-apache/blob/main/h5bp/web_performance/compression.conf) für ein Beispiel einer Apache-Konfiguration, die Dateien mit bestimmten MIME-Typen komprimiert.

Die meisten Webserver senden nicht erkannte Ressourcen mit dem MIME-Typ `application/octet-stream`. Aus Sicherheitsgründen erlauben die meisten Browser nicht die Einstellung einer benutzerdefinierten Standardaktion (wie "Open in Word") für solche Ressourcen, wodurch der Benutzer gezwungen wird, es auf die Festplatte zu speichern, um es zu verwenden.

Einige häufige falsche Serverkonfigurationen:

- RAR-komprimierte Dateien. In diesem Fall wäre der ideale Fall der wahre Typ der Originaldateien; dies ist oft nicht möglich, da .RAR-Dateien mehrere Ressourcen unterschiedlicher Typen enthalten können. In diesem Fall sollten Sie den Server so konfigurieren, dass er `application/x-rar-compressed` sendet.
- Audio und Video. Nur Ressourcen mit dem korrekten MIME-Typ werden in {{HTMLElement("video")}} oder {{HTMLElement("audio")}}-Elementen abgespielt. Stellen Sie sicher, dass Sie den richtigen [Medientyp für Audio und Video](/de/docs/Web/Media/Guides/Formats) angeben.
- Proprietäre Dateitypen. Ein spezifischer Typ wie `application/vnd.mspowerpoint` ermöglicht es Benutzern, solche Dateien automatisch in der Präsentationssoftware ihrer Wahl zu öffnen.

## MIME-Sniffing

In Abwesenheit eines MIME-Typs oder in bestimmten Fällen, in denen Browser glauben, sie seien falsch, können Browser _MIME-Sniffing_ durchführen — das Raten des korrekten MIME-Typs durch Betrachten der Bytes der Ressource.

Jeder Browser führt MIME-Sniffing anders und unter verschiedenen Umständen durch. (Zum Beispiel schaut Safari auf die Dateiendung in der URL, wenn der gesendete MIME-Typ ungeeignet ist.) Es gibt Sicherheitsbedenken, da einige MIME-Typen ausführbare Inhalte repräsentieren. Server können MIME-Sniffing verhindern, indem sie den {{HTTPHeader("X-Content-Type-Options")}}-Header senden.

## Andere Methoden zur Übermittlung von Dokumenttypen

MIME-Typen sind nicht die einzige Möglichkeit, um Informationen über Dokumenttypen zu übermitteln:

- Dateinamen-Suffixe werden manchmal verwendet, insbesondere unter Microsoft Windows. Nicht alle Betriebssysteme betrachten diese Suffixe als bedeutungsvoll (wie Linux und macOS), und es gibt keine Garantie, dass sie korrekt sind.
- Magische Zahlen. Die Syntax verschiedener Formate ermöglicht die Dateitypinferenz durch Betrachtung ihrer Byte-Struktur. Zum Beispiel beginnen GIF-Dateien mit dem hexadezimalen Wert `47 49 46 38 39` (`GIF89`), und PNG-Dateien mit `89 50 4E 47` (`.PNG`). Nicht alle Dateitypen haben magische Zahlen, daher ist dies auch nicht zu 100 % zuverlässig.

## Siehe auch

- [Web-Medientechnologien](/de/docs/Web/Media)
- [Leitfaden zu Medientypen, die im Web verwendet werden](/de/docs/Web/Media/Guides/Formats)
- [Richtiges Konfigurieren von Server-MIME-Typen](/de/docs/Learn_web_development/Extensions/Server-side/Configuring_server_MIME_types)
