---
title: Medientypen (MIME-Typen)
short-title: Media types
slug: Web/HTTP/Guides/MIME_types
l10n:
  sourceCommit: 055bf71b1941f23bfcef39ab5b3393f9601b82b6
---

Ein **Medientyp** (früher bekannt als **Multipurpose Internet Mail Extensions oder MIME-Typ**) gibt die Art und das Format eines Dokuments, einer Datei oder einer Ansammlung von Bytes an. MIME-Typen sind in IETFs {{RFC(6838)}} definiert und standardisiert.

Die [Internet Assigned Numbers Authority (IANA)](https://www.iana.org/) ist für alle offiziellen MIME-Typen verantwortlich, und Sie können die aktuellste und vollständigste Liste auf deren Seite [Medientypen](https://www.iana.org/assignments/media-types/media-types.xhtml) finden.

> [!WARNING]
> Browser verwenden den MIME-Typ, _nicht die Dateierweiterung_, um zu bestimmen, wie eine URL verarbeitet werden soll.
> Daher ist es wichtig, dass Webserver den richtigen MIME-Typ im {{HTTPHeader("Content-Type")}} Header der Antwort senden.
> Wenn dies nicht korrekt konfiguriert ist, werden Browser wahrscheinlich den Inhalt von Dateien falsch interpretieren, Websites funktionieren nicht korrekt und heruntergeladene Dateien werden möglicherweise falsch behandelt.

## Struktur eines MIME-Typs

Ein MIME-Typ besteht meist aus nur zwei Teilen: einem _Typ_ und einem _Subtyp_, getrennt durch einen Schrägstrich (`/`) — ohne Leerzeichen dazwischen:

```plain
type/subtype
```

Der **_Typ_** repräsentiert die allgemeine Kategorie, in die der Datentyp fällt, wie `video` oder `text`.

Der **_Subtyp_** identifiziert die genaue Art von Daten des angegebenen Typs, die der MIME-Typ darstellt.
Zum Beispiel könnte für den MIME-Typ `text` der Subtyp `plain` (einfacher Text), `html` ({{Glossary("HTML", "HTML")}}-Quellcode) oder `calendar` (für iCalendar/`.ics`-Dateien) sein.

Jeder Typ hat seine eigene Menge möglicher Subtypen. Ein MIME-Typ hat immer sowohl einen Typ als auch einen Subtyp, nie nur das eine oder das andere.

Ein optionaler **Parameter** kann hinzugefügt werden, um zusätzliche Details bereitzustellen:

```plain
type/subtype;parameter=value
```

Zum Beispiel können Sie für jeden MIME-Typ, dessen Haupttyp `text` ist, den optionalen `charset`-Parameter hinzufügen, um den Zeichensatz anzugeben, der für die Zeichen in den Daten verwendet wird.
Wird kein `charset` angegeben, ist der Standard {{Glossary("ASCII", "ASCII")}} (`US-ASCII`), sofern dies nicht durch die Einstellungen des {{Glossary("user_agent", "Benutzeragenten")}} überschrieben wird.
Um eine UTF-8-Textdatei anzugeben, wird der MIME-Typ `text/plain;charset=UTF-8` verwendet.

MIME-Typen sind nicht groß-/kleinschreibungsempfindlich, werden jedoch traditionell in Kleinbuchstaben geschrieben. Die Parameterwerte können groß-/kleinschreibungsempfindlich sein.

### Typen

Es gibt zwei Typklassen: **diskret** und **mehrteilig**.
Diskrete Typen repräsentieren eine einzelne Datei oder ein Medium, wie zum Beispiel eine einzelne Text- oder Musikdatei oder ein einzelnes Video.
Ein mehrteiliger Typ repräsentiert ein Dokument, das aus mehreren Komponenten besteht, von denen jede ihren eigenen individuellen MIME-Typ haben kann; oder ein mehrteiliger Typ kann mehrere Dateien kapseln, die zusammen in einer Transaktion gesendet werden.
Zum Beispiel werden mehrteilige MIME-Typen verwendet, wenn mehrere Dateien an eine E-Mail angehängt werden.

#### Diskrete Typen

Die derzeit bei IANA registrierten diskreten Typen sind:

- `application`
  - : Jede Art von Binärdaten, die nicht explizit in einen der anderen Typen fällt;
    entweder Daten, die irgendwie ausgeführt oder interpretiert werden oder Binärdaten, die eine spezifische Anwendung oder Kategorie von Anwendung zur Nutzung erfordern.
    Generische Binärdaten (oder Binärdaten, deren wahrer Typ unbekannt ist) sind `application/octet-stream`.
    Weitere häufige Beispiele sind `application/pdf`, `application/pkcs8` und `application/zip`.
    [(Siehe Anwendungs-Typ-Registrierung bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#application)
- `audio`
  - : Audio- oder Musikdaten. Beispiele sind `audio/mpeg`,
    `audio/vorbis`.
    [(Siehe Audio-Typ-Registrierung bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#audio)
- `example`
  - : Reserviert zur Verwendung als Platzhalter in Beispielen, die zeigen, wie MIME-Typen verwendet werden.
    Diese sollten niemals außerhalb von Beispiel-Code-Auflistungen und Dokumentationen verwendet werden.
    `example` kann auch als Subtyp verwendet werden;
    zum Beispiel kann in einem Beispiel, das sich mit der Arbeit mit Audio im Web befasst, der MIME-Typ `audio/example` verwendet werden, um anzuzeigen, dass der Typ ein Platzhalter ist und bei Verwendung des Codes in der realen Welt durch einen geeigneten ersetzt werden sollte.
- `font`
  - : Schriftart/Schriftbild-Daten. Häufige Beispiele sind `font/woff`, `font/ttf` und `font/otf`.
    [(Siehe Schriftart-Typ-Registrierung bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#font)
- `image`
  - : Bild- oder grafische Daten, einschließlich sowohl Raster- als auch Vektor-Standbilder sowie animierter Versionen von Standbildformaten wie animiertem {{Glossary("GIF", "GIF")}} oder APNG.
    Häufige Beispiele sind `image/jpeg`, `image/png` und `image/svg+xml`.
    [(Siehe Bild-Typ-Registrierung bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#image)
- `model`
  - : Modelldaten für ein 3D-Objekt oder eine Szene. Beispiele sind `model/3mf` und `model/vrml`.
    [(Siehe Modell-Typ-Registrierung bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#model)
- `text`
  - : Nur Text-Daten, einschließlich jeglichen für Menschen lesbaren Inhalts, Quellcode oder textueller Daten wie im CSV-Format (kommagetrennte Werte).
    Beispiele sind: `text/plain`, `text/csv` und `text/html`.
    [(Siehe Text-Typ-Registrierung bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#text)
- `video`
  - : Videodaten oder -dateien, wie MP4-Filme (`video/mp4`).
    [(Siehe Video-Typ-Registrierung bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#video)

Für Textdokumente ohne spezifischen Subtyp sollte `text/plain` verwendet werden. Ebenso sollte für Binärdokumente ohne spezifischen oder bekannten Subtyp `application/octet-stream` verwendet werden.

#### Mehrteilige Typen

**Mehrteilige** Typen zeigen eine Kategorie eines aus mehreren Teilen zusammengesetzten Dokuments an, oft mit unterschiedlichen MIME-Typen; sie können auch verwendet werden – besonders in E-Mail-Szenarien – um mehrere, separate Dateien zu repräsentieren, die alle Teil derselben Transaktion sind. Sie repräsentieren ein **zusammengesetztes Dokument**.

Außer `multipart/form-data`, das in der {{HTTPMethod("POST")}}-Methode von [HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms) verwendet wird, und `multipart/byteranges`, das mit {{HTTPStatus("206")}} `Partial Content` verwendet wird, um Teile eines Dokuments zu senden, behandelt HTTP mehrteilige Dokumente nicht auf besondere Weise: die Nachricht wird an den Browser übermittelt (der wahrscheinlich ein "Speichern Unter"-Fenster zeigt, wenn er nicht weiß, wie das Dokument angezeigt werden soll).

Es gibt zwei mehrteilige Typen:

- `message`
  - : Eine Nachricht, die andere Nachrichten kapselt. Dies kann beispielsweise verwendet werden, um eine E-Mail darzustellen, die eine weitergeleitete Nachricht als Teil ihrer Daten enthält, oder um sehr große Nachrichten in Bereichen so zu senden, als wären es mehrere Nachrichten.
    Beispiele sind `message/rfc822` (für weitergeleitete oder beantwortete Nachrichtenangebote) und `message/partial`, um das automatisierte Aufteilen einer großen Nachricht in kleinere zu ermöglichen, die vom Empfänger wieder zusammengesetzt werden sollen.
    [(Siehe Nachrichten-Typ-Registrierung bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#message)
- `multipart`
  - : Daten, die aus mehreren Komponenten bestehen, die jeweils unterschiedliche MIME-Typen haben können. Beispiele sind `multipart/form-data` (für Daten, die mit der [`FormData`](/de/docs/Web/API/FormData) API produziert werden) und `multipart/byteranges` (definiert in {{RFC(7233, "", "5.4.1")}} und verwendet mit {{Glossary("HTTP", "HTTP")}}'s {{HTTPStatus(206)}} "Partial Content"-Antwort, die zurückgegeben wird,
    wenn die abgerufenen Daten nur ein Teil des Inhalts sind, wie er mit dem {{HTTPHeader("Range")}}-Header geliefert wird).
    [(Siehe mehrteilige Typ-Registrierung bei IANA)](https://www.iana.org/assignments/media-types/media-types.xhtml#multipart)

## Wichtige MIME-Typen für Webentwickler

### application/octet-stream

Dies ist der Standard für Binärdateien. Da es \_unbekannte Binär-\_Dateien bedeutet, führen Browser sie normalerweise nicht aus oder fragen sogar, ob sie ausgeführt werden sollen. Sie behandeln es, als ob der {{HTTPHeader("Content-Disposition")}}-Header auf `attachment` gesetzt wäre, und schlagen einen "Speichern Unter"-Dialog vor.

### text/plain

Dies ist der Standard für Textdateien. Selbst wenn es wirklich "unbekannte Textdatei" bedeutet, gehen Browser davon aus, dass sie sie anzeigen können.

> [!NOTE]
> `text/plain` bedeutet nicht "jede Art von Textdaten".
> Wenn sie eine bestimmte Art von Textdaten erwarten, werden sie dies wahrscheinlich nicht als Übereinstimmung betrachten.
> Insbesondere wenn sie eine `text/plain`-Datei von einem {{HTMLElement("link")}}-Element herunterladen, das eine CSS-Datei deklariert, wird sie nicht als gültige CSS-Datei erkannt, wenn sie mit `text/plain` präsentiert wird.
> Der CSS-Mime-Typ `text/css` muss verwendet werden.

### text/css

CSS-Dateien, die verwendet werden, um eine Webseite zu gestalten, **müssen** mit `text/css` gesendet werden.
Wenn ein Server das Suffix `.css` für CSS-Dateien nicht erkennt, kann er sie mit `text/plain` oder `application/octet-stream` MIME-Typen senden.
Wenn dies der Fall ist, werden sie von den meisten Browsern nicht als CSS erkannt und ignoriert.

### text/html

Alle HTML-Inhalte sollten mit diesem Typ bereitgestellt werden. Alternative MIME-Typen für XHTML (wie `application/xhtml+xml`) sind heutzutage meist nutzlos.

> [!NOTE]
> Verwenden Sie `application/xml` oder `application/xhtml+xml`, wenn Sie die strikten XML-Parsing-Regeln, [`<![CDATA[…]]>`](/de/docs/Web/API/CDATASection)-Abschnitte oder Elemente, die nicht aus den HTML/SVG/MathML-Namensräumen stammen, verwenden möchten.

### text/javascript

JavaScript-Inhalte sollten immer mit dem MIME-Typ `text/javascript` bereitgestellt werden.
Aus historischen Gründen unterstützen Browser einige unten aufgeführte [alte JavaScript-Typen](#alte_javascript-mime-typen), aber Sie sollten nicht davon ausgehen, dass Skripte, die mit einem anderen MIME-Typ als `text/javascript` bereitgestellt werden, immer geladen oder ausgeführt werden.

Beachten Sie, dass im HTML-Attribut [`type`](/de/docs/Web/HTML/Reference/Elements/script/type) für {{htmlelement("script")}}-Elemente nur die **essenzielle JavaScript-MIME-Typ** enthalten sein darf: `text/javascript` oder eines der Schlüsselwörter `module` (für ES-Module) oder `importmap`.
Das Einschließen eines Parameters im `type`-Attribut, wie `charset=utf-8`, entspricht dem Setzen des `type` auf [einen unerkannter Wert](/de/docs/Web/HTML/Reference/Elements/script/type#any_other_value): Der Skriptinhalt wird als Datenblock behandelt und nicht als JavaScript ausgeführt.
Beachten Sie, dass das Setzen von `type="text/javascript"` nicht mehr notwendig ist; dies ist der Standard für `<script>`-Elemente, sodass Sie das `type`-Attribut in diesem Fall vollständig weglassen können.
Hingegen können Sie bei der Verwendung des HTTP-{{httpheader("Content-Type")}}-Headers optional den `charset`-Parameter wie üblich angeben.

Für weitere Informationen siehe: [IANA Medientypen-Registrierung](https://www.iana.org/assignments/media-types/media-types.xhtml#text), [RFC 9239](https://www.rfc-editor.org/rfc/rfc9239.html) und die [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/scripting.html#scriptingLanguages:text/javascript).

#### Alte JavaScript-MIME-Typen

Zusätzlich zum `text/javascript`-MIME-Typ, erlaubt der [MIME-Sniffing-Standard](https://mimesniff.spec.whatwg.org/)
(die Definition, wie Browser MIME-Typen interpretieren und entscheiden sollen, was mit Inhalten geschehen soll, die keinen gültigen haben)
aus historischen Gründen, dass JavaScript mit einem der folgenden alten JavaScript-MIME-Typen bereitgestellt wird:

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
> Obwohl jeder gegebene {{Glossary("user_agent", "Benutzeragent")}} einige oder alle davon unterstützen kann, sollten Sie nur `text/javascript` verwenden.
> Es ist der einzige MIME-Typ, der jetzt und in Zukunft garantiert funktioniert.

### application/json

{{Glossary("JSON", "JavaScript Object Notation (JSON)")}} ist ein standardisiertes, textbasiertes Format zur Darstellung strukturierter Daten basierend auf der JavaScript-Objektsyntax.
Es wird häufig zum Übermitteln von Daten in Webanwendungen verwendet.

### Bild-Typen

Dateien, deren MIME-Typ `image` ist, enthalten Bilddaten.
Der Subtyp gibt an, welches spezifische Bilddateiformat die Daten darstellen.

Die folgenden Bildtypen werden häufig genug verwendet, um als _sicher_ für den Einsatz auf Webseiten zu gelten:

- [`image/apng`](/de/docs/Web/Media/Guides/Formats/Image_types#apng_animated_portable_network_graphics): Animierte Portable Network Graphics (APNG)
- [`image/avif`](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image): AV1 Image File Format (AVIF)
- [`image/gif`](/de/docs/Web/Media/Guides/Formats/Image_types#gif_graphics_interchange_format): Graphics Interchange Format (GIF)
- [`image/jpeg`](/de/docs/Web/Media/Guides/Formats/Image_types#jpeg_joint_photographic_experts_group_image): Joint Photographic Expert Group Image (JPEG)
- [`image/png`](/de/docs/Web/Media/Guides/Formats/Image_types#png_portable_network_graphics): Portable Network Graphics (PNG)
- [`image/svg+xml`](/de/docs/Web/Media/Guides/Formats/Image_types#svg_scalable_vector_graphics): Scalable Vector Graphics (SVG)
- [`image/webp`](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image): Web Picture Format (WEBP)

Die [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types#common_image_file_types) bietet Informationen und Empfehlungen, wann die verschiedenen Bildformate verwendet werden sollten.

### Audio- und Videotypen

Wie auch bei Bildern schreibt HTML nicht vor, dass Webbrowser bestimmte Datei- und Codec-Typen für die {{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elemente unterstützen müssen, daher ist es wichtig, Ihre Zielgruppe und die Palette der Browser (und Versionen dieser Browser), die sie möglicherweise verwenden, zu berücksichtigen, wenn Sie den Dateityp und die Codecs für Medien wählen.

Unser [Leitfaden zu Mediencontainerformaten](/de/docs/Web/Media/Guides/Formats/Containers) bietet eine Liste der Dateitypen, die häufig von Webbrowsern unterstützt werden, einschließlich Informationen zu ihren speziellen Anwendungsfällen, möglichen Nachteilen und Kompatibilitätsinformationen sowie weiteren Details.

Die [Audio-Codec](/de/docs/Web/Media/Guides/Formats/Audio_codecs) und [Video-Codec](/de/docs/Web/Media/Guides/Formats/Video_codecs) Leitfäden listen die verschiedenen Codecs auf, die Webbrowser häufig unterstützen, und stellen Kompatibilitätsdetails sowie technische Informationen bereit, wie zum Beispiel, wie viele Audiokanäle sie unterstützen, welche Art von Kompression verwendet wird und bei welchen Bitraten usw. sie nützlich sind.
Der [Codecs, die von WebRTC verwendet werden](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) Leitfaden ergänzt dies, indem er speziell die von den Haupt-Webbrowsern unterstützten Codecs behandelt, sodass Sie die Codecs auswählen können, die am besten die Bandbreite der Browser abdecken, die Sie unterstützen möchten.

Was die MIME-Typen von Audio- oder Videodateien betrifft, geben sie normalerweise das Containerformat (Dateityp) an.
Der optionale [Codecsparameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter) kann dem MIME-Typ hinzugefügt werden, um weiter anzugeben, welche Codecs verwendet werden sollen und welche Optionen zur Kodierung des Mediums verwendet wurden, wie z. B. Codec-Profil, Level oder andere derartige Informationen.

Für weitere Informationen zu gebräuchlichen Medientypen siehe die Seite [Häufige MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types/Common_types).

### multipart/form-data

Der Typ `multipart/form-data` kann beim Senden der ausgefüllten Werte eines [HTML-Formulars](/de/docs/Learn_web_development/Extensions/Forms) vom Browser zum Server verwendet werden.

Als Mehrteil-Dokumentenformat besteht es aus verschiedenen Teilen, die durch eine Grenze (eine Zeichenkette, die mit einem doppelten Strich `--` beginnt) abgegrenzt sind. Jeder Teil ist eine eigene Einheit mit eigenen HTTP-Headern, {{HTTPHeader("Content-Disposition")}}, und {{HTTPHeader("Content-Type")}} für Datei-Upload-Felder.

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

Der MIME-Typ `multipart/byteranges` wird verwendet, um teilweise Antworten an den Browser zu senden.

Wenn der {{HTTPStatus("206", "206 Partial Content")}}-Statuscode gesendet wird, zeigt dieser MIME-Typ an, dass das Dokument aus mehreren Teilen besteht, einem für jedes der angeforderten Bereiche. Wie andere mehrteilige Typen verwendet der {{HTTPHeader("Content-Type")}} einen `boundary`, um die Stücke zu trennen.
Jedes Stück hat einen {{HTTPHeader("Content-Type")}}-Header mit seinem tatsächlichen Typ und einem {{HTTPHeader("Content-Range")}} des Bereichs, den es darstellt.

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

Einige Serverkonfigurationen können den zugeordneten MIME-Typ verwenden, um Optimierungen wie Dateikonkatenation, Kompression oder Caching durchzuführen. Siehe [h5bp/server-configs-apache](https://github.com/h5bp/server-configs-apache/blob/main/h5bp/web_performance/compression.conf) für ein Beispiel einer Apache-Konfiguration, die Dateien bestimmter MIME-Typen komprimiert.

Die meisten Webserver senden nicht erkannte Ressourcen als den MIME-Typ `application/octet-stream`.
Aus Sicherheitsgründen erlauben die meisten Browser nicht das Einstellen einer benutzerdefinierten Standardaktion (wie "In Word öffnen") für solche Ressourcen, sodass der Benutzer gezwungen wird, sie auf die Festplatte zu speichern, um sie verwenden zu können.

Einige häufige fehlerhafte Serverkonfigurationen:

- Mit RAR komprimierte Dateien.
  In diesem Fall wäre der ideale Typ der wahre Typ der Originaldateien; dies ist oft unmöglich, da .RAR-Dateien mehrere Ressourcen unterschiedlichen Typs enthalten können.
  In diesem Fall konfigurieren Sie den Server so, dass er `application/x-rar-compressed` sendet.
- Audio und Video.
  Nur Ressourcen mit dem richtigen MIME-Typ werden in {{HTMLElement("video")}}- oder {{HTMLElement("audio")}}-Elementen abgespielt.
  Stellen Sie sicher, dass Sie den richtigen [Medientyp für Audio und Video](/de/docs/Web/Media/Guides/Formats) angeben.
- Proprietäre Dateitypen.
  Ein spezifischer Typ wie `application/vnd.mspowerpoint` ermöglicht Benutzern das automatische Öffnen solcher Dateien in der Präsentationssoftware ihrer Wahl.

## MIME-Sniffing

In Abwesenheit eines MIME-Typs oder in bestimmten Fällen, in denen Browser glauben, dass sie falsch sind, können Browser _MIME-Sniffing_ durchführen — das Erraten des richtigen MIME-Typs, indem sie sich die Bytes der Ressource ansehen.

Jeder Browser führt MIME-Sniffing anders und unter unterschiedlichen Umständen durch.
(Zum Beispiel schaut Safari auf die Dateierweiterung in der URL, wenn der gesendete MIME-Typ ungeeignet ist.)
Es gibt Sicherheitsbedenken, da einige MIME-Typen ausführbare Inhalte darstellen.
Server können MIME-Sniffing verhindern, indem sie den {{HTTPHeader("X-Content-Type-Options")}}-Header senden.

## Andere Methoden zur Übermittlung des Dokumententyps

MIME-Typen sind nicht der einzige Weg, um Dokumententypinformationen zu übermitteln:

- Dateinamensuffixe werden manchmal verwendet, insbesondere unter Microsoft Windows.
  Nicht alle Betriebssysteme betrachten diese Suffixe als bedeutsam (wie Linux und macOS), und es gibt keine Garantie, dass sie korrekt sind.
- Magische Zahlen. Die Syntax verschiedener Formate ermöglicht die Ermittlung des Dateityps durch Betrachtung ihrer Byte-Struktur.
  Beispielsweise beginnen GIF-Dateien mit dem hexadezimalen Wert `47 49 46 38 39` (`GIF89`), und PNG-Dateien mit `89 50 4E 47` (`.PNG`).
  Nicht alle Dateitypen haben magische Zahlen, daher ist auch dies nicht zu 100% zuverlässig.

## Siehe auch

- [Web-Medientechnologien](/de/docs/Web/Media)
- [Leitfaden zu Medientypen, die im Web verwendet werden](/de/docs/Web/Media/Guides/Formats)
- [Richtige Konfiguration von Server-MIME-Typen](/de/docs/Learn_web_development/Extensions/Server-side/Configuring_server_MIME_types)
