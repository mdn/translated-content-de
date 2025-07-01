---
title: "<img>: The Image Embed element"
slug: Web/HTML/Reference/Elements/img
l10n:
  sourceCommit: 63cbf204323f117a2a80c7aa6273e50253ab9d07
---

{{HTMLSidebar}}

Das **`<img>`** [HTML](/de/docs/Web/HTML)-Element bindet ein Bild in das Dokument ein.

{{InteractiveExample("HTML Demo: &lt;img&gt;", "tabbed-standard")}}

```html interactive-example
<img
  class="fit-picture"
  src="/shared-assets/images/examples/grapefruit-slice.jpg"
  alt="Grapefruit slice atop a pile of other slices" />
```

```css interactive-example
.fit-picture {
  width: 250px;
}
```

Das obige Beispiel zeigt die Verwendung des `<img>`-Elements:

- Das `src`-Attribut enthält den Pfad zum Bild, das Sie einbinden möchten. Es ist nicht zwingend erforderlich, wenn das [srcset](/de/docs/Web/API/HTMLImageElement/srcset)-Attribut verfügbar ist. Mindestens eines der Attribute `src` oder `srcset` muss jedoch angegeben werden.
- Das `alt`-Attribut enthält einen textuellen Ersatz für das Bild, der zwingend erforderlich und **ungemein nützlich** für die Barrierefreiheit ist – Bildschirmlesegeräte lesen den Attributwert vor, damit die Nutzer wissen, was das Bild bedeutet. Der Alt-Text wird auch auf der Seite angezeigt, wenn das Bild aus irgendeinem Grund nicht geladen werden kann, zum Beispiel aufgrund von Netzwerkfehlern, Inhaltsblockierung oder Link-Verfall.

Es gibt viele weitere Attribute für verschiedene Zwecke:

- [Referrer](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy)/{{Glossary("CORS", "CORS")}}-Kontrolle für Sicherheit und Datenschutz: siehe [`crossorigin`](#crossorigin) und [`referrerpolicy`](#referrerpolicy).
- Verwenden Sie sowohl [`width`](#width) als auch [`height`](#height), um die intrinsische Größe des Bildes festzulegen, damit es vor dem Laden den Platz einnimmt und Layoutverschiebungen vermindert werden.
- Hinweise für Responsive Bilder mit [`sizes`](#sizes) und [`srcset`](#srcset) (siehe auch das {{htmlelement("picture")}}-Element und unser [Leitfaden zu Responsive Bildern](/de/docs/Web/HTML/Guides/Responsive_images)).

## Unterstützte Bildformate

Der HTML-Standard listet nicht auf, welche Bildformate unterstützt werden sollen, sodass {{Glossary("user_agent", "User Agents")}} möglicherweise unterschiedliche Formate unterstützen.

> [!NOTE]
> Der [Leitfaden zu Bild-Dateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types) bietet umfassende Informationen über Bildformate und deren Unterstützung durch Webbrowser.
> Dieser Abschnitt ist nur eine Zusammenfassung!

Die am häufigsten im Web verwendeten Bilddateiformate sind:

- [APNG (Animated Portable Network Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#apng_animated_portable_network_graphics) — Eine gute Wahl für verlustfreie Animationssequenzen (GIF ist weniger leistungsfähig)
- [AVIF (AV1 Image File Format)](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) — Eine gute Wahl für sowohl Bilder als auch animierte Bilder aufgrund der hohen Leistung.
- [GIF (Graphics Interchange Format)](/de/docs/Web/Media/Guides/Formats/Image_types#gif_graphics_interchange_format) — Eine gute Wahl für _einfache_ Bilder und Animationen.
- [JPEG (Joint Photographic Expert Group image)](/de/docs/Web/Media/Guides/Formats/Image_types#jpeg_joint_photographic_experts_group_image) — Eine gute Wahl für verlustbehaftete Kompression von Standbildern (derzeit das beliebteste Format).
- [PNG (Portable Network Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#png_portable_network_graphics) — Eine gute Wahl für verlustfreie Kompression von Standbildern (etwas bessere Qualität als JPEG).
- [SVG (Scalable Vector Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#svg_scalable_vector_graphics) — Ein Vektorbildformat. Verwenden Sie es für Bilder, die in verschiedenen Größen genau wiedergegeben werden müssen.
- [WebP (Web Picture format)](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) — Hervorragend geeignet für sowohl Bilder als auch animierte Bilder.

Formate wie [WebP](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) und [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) werden empfohlen, da sie viel besser als PNG, JPEG und GIF für sowohl Stand- als auch animierte Bilder performen.

SVG bleibt das empfohlene Format für Bilder, die in verschiedenen Größen genau dargestellt werden müssen.

## Fehler beim Laden von Bildern

Wenn ein Fehler beim Laden oder Rendern eines Bildes auftritt und ein `onerror`-Ereignishandler für das [`error`](/de/docs/Web/API/HTMLElement/error_event)-Ereignis festgelegt wurde, wird dieser Ereignishandler aufgerufen. Dies kann in verschiedenen Situationen geschehen, unter anderem:

- Die `src`- oder `srcset`-Attribute sind leer (`""`) oder `null`.
- Die `src` {{Glossary("URL", "URL")}} ist dieselbe wie die URL der Seite, auf der der Benutzer sich aktuell befindet.
- Das Bild ist in irgendeiner Weise beschädigt, die das Laden verhindert.
- Die Bild-Metadaten sind so beschädigt, dass es unmöglich ist, seine Abmessungen zu erfassen und keine Abmessungen im `<img>`-Element-Attribute angegeben wurden.
- Das Bild ist in einem Format, das nicht vom {{Glossary("user_agent", "User Agent")}} unterstützt wird.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- [`alt`](/de/docs/Web/API/HTMLImageElement/alt#usage_notes)
  - : Definiert einen Text, der das Bild auf der Seite ersetzen kann.

    > [!NOTE]
    > Browser zeigen nicht immer Bilder an. Es gibt eine Anzahl von Situationen, in denen ein Browser möglicherweise keine Bilder anzeigt, z. B.:
    >
    > - Nicht-visuelle Browser (wie sie von Menschen mit Sehbehinderungen verwendet werden)
    > - Der Benutzer entscheidet sich, Bilder nicht anzuzeigen (um Bandbreite zu sparen, aus Datenschutzgründen)
    > - Das Bild ist ungültig oder ein [nicht unterstützter Typ](#unterstützte_bildformate)
    >
    > In diesen Fällen kann der Browser das Bild durch den Text im `alt`-Attribut des Elements ersetzen. Aus diesen und anderen Gründen sollten Sie wann immer möglich einen nützlichen Wert für `alt` bereitstellen.

    Wenn Sie dieses Attribut auf einen leeren String (`alt=""`) setzen, zeigt dies an, dass dieses Bild _kein_ wichtiger Bestandteil des Inhalts ist (es handelt sich um Dekoration oder ein Tracking-Pixel) und dass nicht-visuelle Browser es möglicherweise bei der {{Glossary("Engine/Rendering", "Darstellung")}} weglassen. Visuelle Browser verbergen auch das kaputte Bildsymbol, wenn das `alt`-Attribut leer ist und das Bild nicht angezeigt werden konnte.

    Dieses Attribut wird auch verwendet, wenn das Bild in Text kopiert und eingefügt oder ein verknüpftes Bild als Lesezeichen gespeichert wird.

- `attributionsrc` {{experimental_inline}}
  - : Gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header zusammen mit der Bildanforderung sendet.

    Auf der Serverseite wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Headers in der Antwort auszulösen, um eine auf Bildern basierende [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#html-based_event_sources) oder einen [Attributionstrigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#html-based_attribution_triggers) entsprechend zu registrieren. Welcher Antwortheader zurückgesendet werden sollte, hängt vom Wert des `Attribution-Reporting-Eligible`-Headers ab, der die Registrierung ausgelöst hat.

    Das entsprechende Quellen- oder Trigger-Ereignis wird ausgelöst, sobald der Browser die Antwort mit der Bilddatei erhält.

    > [!NOTE]
    > Siehe die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) für weitere Details.

    Es gibt zwei Versionen dieses Attributs, die Sie festlegen können:
    - Boolean, d.h. nur der Name `attributionsrc`. Dies gibt an, dass Sie den {{httpheader("Attribution-Reporting-Eligible")}}-Header an denselben Server gesendet haben möchten, auf den das `src`-Attribut zeigt. Dies ist in Ordnung, wenn Sie die Registrierung der Attributionsquelle oder des Triggers auf demselben Server bearbeiten. Bei der Registrierung eines Attributionstriggers ist diese Eigenschaft optional, und ein boolescher Wert wird verwendet, wenn sie weggelassen wird.
    - Wert, der eine oder mehrere URLs enthält, zum Beispiel:

    ```html
    <img
      src="image-file.png"
      alt="My image file description"
      attributionsrc="https://a.example/register-source
                         https://b.example/register-source" />
    ```

    Dies ist nützlich in Fällen, in denen die angeforderte Ressource nicht auf einem Server unter Ihrer Kontrolle liegt oder wenn Sie die Registrierung der Attributionsquelle auf einem anderen Server abwickeln möchten. In diesem Fall können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcenanforderung erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header an die in `attributionSrc` angegebenen URL(s) gesendet sowie an den Ursprung der Ressource. Diese URLs können dann mit einem entsprechenden {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header antworten, um die Registrierung abzuschließen.

    > [!NOTE]
    > Die Angabe mehrerer URLs bedeutet, dass mehrere Attributionsquellen auf derselben Funktion registriert werden können. Sie könnten zum Beispiel verschiedene Kampagnen haben, deren Erfolg Sie messen möchten, was die Generierung verschiedener Berichte auf verschiedenen Daten umfasst.

- [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)
  - : Gibt an, ob das Abrufen des Bildes als {{Glossary("CORS", "CORS")}}-Anfrage durchgeführt werden muss. Bilddaten von einem [CORS-fähigen Bild](/de/docs/Web/HTML/How_to/CORS_enabled_image), das aus einer CORS-Anfrage zurückgegeben wurde, können im {{HTMLElement("canvas")}}-Element wiederverwendet werden, ohne dass es als "[kontaminiert](/de/docs/Web/HTML/How_to/CORS_enabled_image#security_and_tainted_canvases)" markiert wird.

    Wenn das `crossorigin`-Attribut _nicht_ angegeben ist, wird eine Non-CORS-Anfrage gesendet (ohne den {{httpheader("Origin")}}-Anforderungsheader), und der Browser markiert das Bild als kontaminiert und schränkt den Zugriff auf seine Bilddaten ein, um deren Verwendung in {{HTMLElement("canvas")}}-Elementen zu verhindern.

    Wenn das `crossorigin`-Attribut _angegeben_ ist, wird eine CORS-Anfrage gesendet (mit dem {{httpheader("Origin")}}-Anforderungsheader); aber wenn der Server nicht ausdrücklich die Erlaubnis gibt, auf die Bilddaten von der Ursprungssite zuzugreifen (indem er keinen {{httpheader("Access-Control-Allow-Origin")}}-Antwortheader sendet oder indem er den Ursprung der Site in keinem {{httpheader("Access-Control-Allow-Origin")}}-Antwortheader, den er sendet, einschließt), blockiert der Browser das Laden des Bildes und protokolliert einen CORS-Fehler in der Entwicklertools-Konsole.

    Erlaubte Werte:
    - `anonymous`
      - : Eine CORS-Anfrage wird gesendet, wobei Anmeldeinformationen weggelassen werden (das heißt, keine {{Glossary("cookie", "Cookies")}}, [X.509-Zertifikate](https://datatracker.ietf.org/doc/html/rfc5280) oder {{httpheader("Authorization")}}-Anforderungsheader).
    - `use-credentials`
      - : Die CORS-Anfrage wird mit allen Anmeldeinformationen gesendet (das heißt, Cookies, X.509-Zertifikate und der `Authorization`-Anforderungsheader). Wenn der Server nicht explizit die Freigabe von Anmeldeinformationen mit der Ursprungssite erlaubt (indem er den `Access-Control-Allow-Credentials: true`-Antwortheader sendet), markiert der Browser das Bild als kontaminiert und schränkt den Zugriff auf seine Bilddaten ein.

    Wenn das Attribut einen ungültigen Wert hat, behandeln Browser es so, als ob der Wert `anonymous` verwendet worden wäre. Siehe [CORS Einstellungen Attribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin) für zusätzliche Informationen.

- `decoding`
  - : Dieses Attribut gibt dem Browser einen Hinweis darauf, ob er die Bilddecodierung zusammen mit der Darstellung der anderen DOM-Inhalte in einem einzigen Präsentationsschritt durchführen soll, der "korrekter" aussieht (`sync`), oder ob er die anderen DOM-Inhalte zuerst rendern und darstellen und das Bild später decodieren und darstellen soll (`async`). In der Praxis bedeutet `async`, dass das nächste Rendern nicht darauf wartet, dass das Bild decodiert wird.

    Es ist oft schwer, eine spürbare Wirkung bei der Verwendung von `decoding` auf statischen `<img>`-Elementen wahrzunehmen. Sie werden wahrscheinlich zunächst als leere Bilder gerendert, während die Bilddateien abgerufen werden (entweder aus dem Netzwerk oder aus dem Cache) und dann unabhängig behandelt werden, sodass die "Synchronisierung" von Inhaltsaktualisierungen weniger offensichtlich ist. Das Blockieren des Renderns, während die Decodierung erfolgt, kann jedoch messbar sein, auch wenn es schwer mit dem menschlichen Auge zu beobachten ist. Siehe [What does the image decoding attribute actually do?](https://www.tunetheweb.com/blog/what-does-the-image-decoding-attribute-actually-do/) für eine ausführliche Analyse (tunetheweb.com, 2023).

    Unterschiedliche `decoding`-Typen zu verwenden, kann zu deutlicheren Unterschieden führen, wenn `<img>`-Elemente dynamisch über JavaScript in das DOM eingefügt werden – siehe [`HTMLImageElement.decoding`](/de/docs/Web/API/HTMLImageElement/decoding) für weitere Einzelheiten.

    Erlaubte Werte:
    - `sync`
      - : Decodiere das Bild synchron zusammen mit dem Rendern der anderen DOM-Inhalte und stelle alles zusammen dar.
    - `async`
      - : Decodiere das Bild asynchron, nach dem Rendern und der Darstellung der anderen DOM-Inhalte.
    - `auto`
      - : Keine Präferenz für den Decodierungsmodus; der Browser entscheidet, was für den Benutzer am besten ist. Dies ist der Standardwert.

- [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming)
  - : Markiert das Bild zur Beobachtung durch die [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming) API. Der angegebene Wert wird zu einem Bezeichner für das beobachtete Bildelement. Siehe auch die Attributseite [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming).

- `fetchpriority`
  - : Gibt einen Hinweis auf die relative Priorität, die beim Abrufen des Bildes verwendet werden soll.
    Erlaubte Werte:
    - `high`
      - : Holen Sie sich das Bild mit hoher Priorität im Vergleich zu anderen Bildern.
    - `low`
      - : Holen Sie sich das Bild mit niedriger Priorität im Vergleich zu anderen Bildern.
    - `auto`
      - : Keine Präferenz für die Abrufpriorität festlegen.
        Dies ist der Standard.
        Es wird verwendet, wenn kein Wert oder ein ungültiger Wert gesetzt ist.

    Siehe [`HTMLImageElement.fetchPriority`](/de/docs/Web/API/HTMLImageElement/fetchPriority) für weitere Informationen.

- `height`
  - : Die intrinsische Höhe des Bildes in Pixeln. Muss eine ganze Zahl ohne Einheit sein.

    > [!NOTE]
    > Das Einfügen von `height` und [`width`](#width) ermöglicht es dem Browser, das {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Bildes zu berechnen, bevor das Bild geladen wird. Dieses Seitenverhältnis wird verwendet, um den Platz zu reservieren, der zur Anzeige des Bildes benötigt wird, wodurch eine Layoutverschiebung verringert oder sogar verhindert wird, wenn das Bild heruntergeladen und auf dem Bildschirm gerendert wird. Die Reduzierung der Layoutverschiebung ist ein wichtiger Bestandteil einer guten Benutzererfahrung und Web-Performance.

- `ismap`
  - : Dieses boolesche Attribut gibt an, dass das Bild Teil einer [serverseitigen Map](https://en.wikipedia.org/wiki/Image_map#Server-side) ist. In diesem Fall werden die Koordinaten, an denen der Benutzer auf das Bild geklickt hat, an den Server gesendet.

    > [!NOTE]
    > Dieses Attribut ist nur erlaubt, wenn das `<img>`-Element ein Nachkomme eines {{htmlelement("a")}}-Elements mit einem gültigen [`href`](/de/docs/Web/HTML/Reference/Elements/a#href)-Attribut ist. Dies gibt Benutzern ohne Zeigegeräte ein alternatives Ziel.

- `loading`
  - : Gibt an, wie der Browser das Bild laden soll:
    - `eager`
      - : Lädt das Bild sofort, unabhängig davon, ob es sich derzeit im sichtbaren Viewport befindet oder nicht (Dies ist der Standardwert).
    - `lazy`
      - : Verzögert das Laden des Bildes, bis es eine berechnete Entfernung zum Viewport erreicht hat, wie es der Browser definiert. Das Ziel ist es, das Netzwerk- und Speicherbandbreite, die zum Verarbeiten des Bildes erforderlich sind, zu sparen, bis es relativ sicher ist, dass es gebraucht wird. Dies verbessert in den meisten typischen Anwendungsfällen die Leistung des Inhalts.

    > [!NOTE]
    > Das Laden wird nur verzögert, wenn JavaScript aktiviert ist. Dies ist eine Maßnahme gegen Tracking, denn wenn ein User Agent Lazy-Loading unterstützen würde, wenn das Skripting deaktiviert ist, wäre es immer noch möglich, die ungefähre Scroll-Position eines Benutzers während einer Sitzung zu verfolgen, indem strategisch Bilder im Markup einer Seite platziert werden, sodass ein Server verfolgen kann, wie viele Bilder angefordert werden und wann.

    > [!NOTE]
    > Bilder, bei denen `loading` auf `lazy` gesetzt ist, werden niemals geladen, wenn sie keinen sichtbaren Teil eines Elements schneiden, selbst wenn das Laden diese Änderung hervorrufen würde, da nicht geladene Bilder eine `width` und `height` von `0` haben. Das Setzen von `width` und `height` bei faul geladenen Bildern behebt dieses Problem und ist eine bewährte Praxis, [empfohlen durch die Spezifikation](https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element). Dies hilft auch, Layoutverschiebungen zu vermeiden.

- `referrerpolicy`
  - : Ein String, der angibt, welchen Referrer beim Abrufen der Ressource verwendet werden soll:
    - `no-referrer`: Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}}-Header wird nicht zu {{Glossary("origin", "Ursprung")}}en ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`: Der gesendete Referrer wird auf den Ursprung der verweisenden Seite beschränkt sein: ihr [Schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`: Der Referrer, der an andere Ursprünge gesendet wird, wird auf das Schema, den Host und den Port beschränkt sein. Navigationen am selben Ursprung enthalten dennoch den Pfad.
    - `same-origin`: Ein Referrer wird für {{Glossary("Same-origin_policy", "gleicher Ursprung")}} gesendet, aber Cross-Origin-Anfragen enthalten keine Referrer-Informationen.
    - `strict-origin`: Sendet nur den Ursprung des Dokuments als Referrer, wenn das Protokollsicherheitsniveau gleich bleibt (HTTPS→HTTPS), sendet ihn aber nicht an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard): Sendet eine volle URL, wenn eine Anfrage gleicher Herkunft ausgeführt wird, sendet nur den Ursprung, wenn das Protokollsicherheitsniveau gleich bleibt (HTTPS→HTTPS), und sendet kein Header an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `unsafe-url`: Der Referrer wird den Ursprung _und_ den Pfad enthalten (aber nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder [Benutzername](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge leakt.

- `sizes`
  - : Eine oder mehrere durch Kommas getrennte Strings, die eine Reihe von Quellen-Größen angeben. Jede Quellen-Größe besteht aus:
    1. Einer [Medienbedingung](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#syntax). Diese muss für das letzte Element in der Liste weggelassen werden.
    2. Einem Quellen-Größenwert.

    Medienbedingungen beschreiben Eigenschaften des _Viewports_, nicht des _Bildes_. Zum Beispiel schlägt `(height <= 500px) 1000px` vor, eine Quelle von 1000px Breite zu verwenden, wenn der _Viewport_ nicht höher als 500px ist. Da ein Quellengrößenbeschreiber verwendet wird, um die während des Seitenlayouts zu verwendende Breite für das Bild zu bestimmen, basiert die Medienbedingung typischerweise (aber nicht notwendigerweise) auf der [Breiten-](/de/docs/Web/CSS/@media/width)-Information.

    Quellen-Größenwerte geben die beabsichtigte Anzeigegröße des Bildes an. {{Glossary("User_agent", "User Agents")}} verwenden die aktuelle Quellengröße, um eine der vom `srcset`-Attribut bereitgestellten Quellen auszuwählen, wenn diese Quellen mit Breiten- (`w`) Beschreibungen angegeben sind. Die ausgewählte Quellengröße beeinflusst die {{Glossary("intrinsic_size", "intrinsische Größe")}} des Bildes (die Anzeigegröße des Bildes, wenn keine {{Glossary("CSS", "CSS")}}-Stilierung angewendet wird). Wenn das `srcset`-Attribut fehlt oder keine Werte mit Breiten-Beschreibungen enthält, hat das `sizes`-Attribut keine Auswirkung.

    Ein Quellengrößenwert kann jede nicht-negative [Länge](/de/docs/Web/CSS/length) sein. Es dürfen keine CSS-Funktionen außer den [mathematischen Funktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#math_functions) verwendet werden. Einheiten werden auf die gleiche Weise wie [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries) interpretiert, was bedeutet, dass alle relativen Längeneinheiten relativ zur Dokumentwurzel und nicht zum `<img>`-Element sind, sodass ein `em`-Wert relativ zur Grundschriftgröße und nicht zur Schriftgröße des Bildes ist. [Prozentwerte](/de/docs/Web/CSS/percentage) sind nicht erlaubt.

    Das `sizes`-Attribut akzeptiert auch die folgenden Schlüsselwortwerte:
    - `auto`
      - : `auto` kann die gesamte Liste der Größen oder das erste Element in der Liste ersetzen. Es ist nur gültig, wenn es mit `loading="lazy"` kombiniert wird und wird auf die [konkrete Größe](/de/docs/Web/CSS/image) des Bildes aufgelöst. Da die intrinsische Größe des Bildes noch nicht bekannt ist, sollten `width`- und `height`-Attribute (oder CSS-Äquivalente) ebenfalls angegeben werden, um zu [verhindern, dass der Browser eine Standardbreite von 300px annimmt](https://html.spec.whatwg.org/multipage/images.html#sizes-attributes:attr-dim-width).

- `src`
  - : Die Bild-{{Glossary("URL", "URL")}}. Pflichtfeld für das `<img>`-Element. In {{Glossary("Browser", "Browsern")}}, die `srcset` unterstützen, wird `src` wie ein Kandidatenbild mit einem Pixeldichte-Beschreiber von `1x` behandelt, es sei denn, ein Bild mit diesem Pixeldichte-Beschreiber ist bereits in `srcset` definiert oder `srcset` enthält `w`-Beschreiber.
- `srcset`
  - : Eine oder mehrere durch Kommas getrennte Strings, die mögliche Bildquellen für den {{Glossary("user_agent", "User Agent")}} angeben. Jeder String besteht aus:
    1. Einer {{Glossary("URL", "URL")}} zu einem Bild
    2. Optional, Leerraum gefolgt von einem der folgenden Elemente:
       - Einem Breiten-Beschreiber (eine positive ganze Zahl, direkt gefolgt von `w`). Der Breitenbeschreiber wird durch die im `sizes`-Attribut angegebene Quellengröße geteilt, um die effektive Pixeldichte zu berechnen.
       - Einem Pixeldichte-Beschreiber (eine positive Fließkommazahl, direkt gefolgt von `x`).

    Wenn kein Beschreiber angegeben ist, wird der Quelle der Standardbeschreiber `1x` zugewiesen.

    Es ist falsch, Breitenbeschreiber und Pixeldichte-Beschreiber im selben `srcset`-Attribut zu mischen. Doppelte Beschreiber (zum Beispiel, zwei Quellen im selben `srcset`, die beide mit `2x` beschrieben wurden) sind ebenfalls ungültig.

    Wenn das `srcset`-Attribut Breitenbeschreiber verwendet, muss auch das `sizes`-Attribut vorhanden sein, andernfalls wird das `srcset` selbst ignoriert.

    Der User Agent wählt nach eigenem Ermessen eine der verfügbaren Quellen aus. Dies bietet ihnen großen Spielraum, ihre Auswahl basierend auf Dingen wie Benutzervorlieben oder {{Glossary("bandwidth", "Bandbreite")}}-Bedingungen anzupassen. Siehe unser [Leitfaden zu Responsive Bildern](/de/docs/Web/HTML/Guides/Responsive_images) für ein Beispiel.

- `width`
  - : Die intrinsische Breite des Bildes in Pixeln. Muss eine ganze Zahl ohne Einheit sein.
- `usemap`
  - : Die teilweise {{Glossary("URL", "URL")}} (beginnend mit `#`) einer [Bildkarte](/de/docs/Web/HTML/Reference/Elements/map), die dem Element zugeordnet ist.

    > [!NOTE]
    > Sie können dieses Attribut nicht verwenden, wenn das `<img>`-Element sich innerhalb eines {{htmlelement("a")}}- oder {{HTMLElement("button")}}-Elements befindet.

### Veraltete Attribute

- `align` {{deprecated_inline}}
  - : Richtet das Bild im Zusammenhang mit dem umgebenden Kontext aus. Verwenden Sie stattdessen die {{cssxref('float')}}- und/oder {{cssxref('vertical-align')}}-Eigenschaften von {{Glossary("CSS", "CSS")}}. Erlaubte Werte:
    - `top`
      - : Entspricht `vertical-align: top` oder `vertical-align: text-top`
    - `middle`
      - : Entspricht `vertical-align: -moz-middle-with-baseline`
    - `bottom`
      - : Der Standard, entspricht `vertical-align: unset` oder `vertical-align: initial`
    - `left`
      - : Entspricht `float: left`
    - `right`
      - : Entspricht `float: right`

- `border` {{deprecated_inline}}
  - : Die Breite eines Rahmens um das Bild. Verwenden Sie stattdessen die {{cssxref('border')}}-Eigenschaft von {{Glossary("CSS", "CSS")}}.
- `hspace` {{deprecated_inline}}
  - : Die Anzahl der Pixel des weißen Raums links und rechts vom Bild. Verwenden Sie stattdessen die {{cssxref('margin')}}-Eigenschaft von CSS.
- `longdesc` {{deprecated_inline}}
  - : Ein Link zu einer detaillierteren Beschreibung des Bildes. Mögliche Werte sind eine {{Glossary("URL", "URL")}} oder die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) eines Elements.

    > [!NOTE]
    > Dieses Attribut wird in der [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/obsolete.html#element-attrdef-img-longdesc) als veraltet angesehen. Es hat eine unklare Zukunft; Autoren sollten eine {{Glossary("WAI", "WAI")}}-{{Glossary("ARIA", "ARIA")}}-Alternative wie [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) oder [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) verwenden.

- `name` {{deprecated_inline}}
  - : Ein Name für das Element. Verwenden Sie stattdessen das [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut.
- `vspace` {{deprecated_inline}}
  - : Die Anzahl der Pixel des weißen Raums oberhalb und unterhalb des Bildes. Verwenden Sie stattdessen die {{cssxref('margin')}}-Eigenschaft von CSS.

## Styling mit CSS

`<img>` ist ein {{Glossary("replaced_elements", "ersetztes Element")}}; es hat standardmäßig einen {{cssxref("display")}}-Wert von `inline`, aber seine Standardabmessungen werden durch die eingebetteten intrinsischen Werte des Bildes definiert, als wäre es `inline-block`. Sie können Eigenschaften wie {{cssxref("border")}}/{{cssxref("border-radius")}}, {{cssxref("padding")}}/{{cssxref("margin")}}, {{cssxref("width")}}, {{cssxref("height")}}, etc. auf einem Bild festlegen.

`<img>` hat keine Basislinie, sodass, wenn Bilder in einem Inline-Formatierungskontext mit {{cssxref("vertical-align", "vertical-align: baseline")}} verwendet werden, der Boden des Bildes auf der Textbasislinie platziert wird.

Sie können die {{cssxref("object-position")}}-Eigenschaft verwenden, um das Bild innerhalb der Elementbox zu positionieren, und die {{cssxref("object-fit")}}-Eigenschaft, um die Größe des Bildes innerhalb der Box anzupassen (zum Beispiel, ob das Bild die Box ausfüllen oder anpassen soll, selbst wenn ein Ausschnitt erforderlich ist).

Abhängig von seiner Art kann ein Bild eine intrinsische Breite und Höhe haben. Für einige Bildtypen sind jedoch intrinsische Dimensionen unnötig. {{Glossary("SVG", "SVG")}}-Bilder haben zum Beispiel keine intrinsischen Dimensionen, wenn das Stamm-{{SVGElement("svg")}}-Element keine festgelegte `width`- oder `height`-Eigenschaft hat.

## Barrierefreiheit

### Aussagekräftige alternative Beschreibungen verfassen

Der Wert eines `alt`-Attributs sollte einen klaren und prägnanten Textersatz für den Inhalt des Bildes bereitstellen. Es sollte nicht das Vorhandensein des Bildes selbst oder den Dateinamen des Bildes beschreiben. Wenn das `alt`-Attribut absichtlich weggelassen wird, weil das Bild keine textuelle Entsprechung hat, erwägen Sie alternative Methoden, um darzustellen, was das Bild zu vermitteln versucht.

#### Nicht

```html example-bad
<img alt="image" src="penguin.jpg" />
```

#### So machen Sie es richtig

```html example-good
<img alt="A Penguin on a beach." src="penguin.jpg" />
```

Ein wichtiger Barrierefreiheitstest besteht darin, den Inhalt des `alt`-Attributs zusammen mit vorangehendem Textinhalt zu lesen, um zu sehen, ob es die gleiche Bedeutung wie das Bild vermittelt. Zum Beispiel, wenn das Bild mit dem Satz "Auf meinen Reisen sah ich ein niedliches kleines Tier:" eingeleitet wurde, könnte das _Don't_-Beispiel von einem Bildschirmlesegerät als "Auf meinen Reisen sah ich ein niedliches kleines Tier: Bild" vorgelesen werden, was keinen Sinn ergibt. Das _Do_-Beispiel könnte von einem Bildschirmlesegerät als "Auf meinen Reisen sah ich ein niedliches kleines Tier: Ein Pinguin am Strand." vorgelesen werden, was Sinn ergibt.

Für Bilder, die eine Aktion auslösen, z. B. Bilder, die in einem {{htmlelement("a")}}- oder {{htmlelement("button")}}-Element verschachtelt sind, erwägen Sie, die ausgelöste Aktion im `alt`-Attributwert zu beschreiben. Zum Beispiel könnten Sie `alt="nächste Seite"` anstelle von `alt="Pfeil nach rechts"` schreiben. Sie könnten auch in Betracht ziehen, eine optionale weitere Beschreibung in einem `title`-Attribut hinzuzufügen, die von Bildschirmlesegeräten auf Wunsch des Benutzers vorgelesen werden kann.

Wenn ein `alt`-Attribut bei einem Bild nicht vorhanden ist, geben einige Bildschirmlesegeräte möglicherweise den Dateinamen des Bildes an. Dies kann eine verwirrende Erfahrung sein, wenn der Dateiname nicht repräsentativ für den Inhalt des Bildes ist.

- [An alt Decision Tree • Images • WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/images/decision-tree/)
- [Alt-texts: The Ultimate Guide — Axess Lab](https://axesslab.com/alt-texts/)
- [How to Design Great Alt Text: An Introduction | Deque](https://www.deque.com/blog/great-alt-text-introduction/)
- [MDN Understanding WCAG, Guideline 1.1 explanations](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Understanding Success Criterion 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

### SVG als Bild identifizieren

Aufgrund eines [VoiceOver-Bugs](https://webkit.org/b/216364) kündigt VoiceOver SVG-Bilder nicht korrekt als Bilder an. Fügen Sie [`role="img"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/img_role) zu allen `<img>`-Elementen mit SVG-Quelldateien hinzu, um sicherzustellen, dass Hilfstechnologien das SVG korrekt als Bildinhalt ankündigen.

```html
<img src="mdn.svg" alt="MDN" role="img" />
```

### Das title-Attribut

Das [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)-Attribut ist kein akzeptabler Ersatz für das `alt`-Attribut. Vermeiden Sie zudem, den Wert des `alt`-Attributs im selben Bild in einem `title`-Attribut zu duplizieren. Dies könnte dazu führen, dass einige Bildschirmlesegeräte denselben Text zweimal ankündigen, was eine verwirrende Erfahrung schafft.

Das `title`-Attribut sollte auch nicht als ergänzende Beschriftungsinformation verwendet werden, um die `alt`-Beschreibung eines Bildes zu begleiten. Wenn ein Bild eine Beschriftung benötigt, verwenden Sie die [`figure`](/de/docs/Web/HTML/Reference/Elements/figure)- und [`figcaption`](/de/docs/Web/HTML/Reference/Elements/figcaption)-Elemente.

Der Wert des `title`-Attributs wird dem Benutzer in der Regel als Tooltip präsentiert, der erscheint, kurz nachdem der Cursor aufhört, sich über dem Bild zu bewegen. Während dies dem Benutzer _zusätzliche_ Informationen geben _kann_, sollten Sie nicht davon ausgehen, dass der Benutzer ihn jemals sieht: der Benutzer könnte nur über eine Tastatur oder einen Touchscreen verfügen. Wenn Sie Informationen haben, die besonders wichtig oder wertvoll für den Benutzer sind, präsentieren Sie sie inline mit Hilfe einer der oben genannten Methoden anstelle der Verwendung von `title`.

- [Using the HTML title attribute – updated | The Paciello Group](https://www.tpgi.com/using-the-html-title-attribute-updated/)

## Beispiele

### Alternativer Text

Das folgende Beispiel bettet ein Bild in die Seite ein und enthält alternativen Text zur Barrierefreiheit.

```html
<img src="/shared-assets/images/examples/favicon144.png" alt="MDN" />
```

{{ EmbedLiveSample('Alternative_text', '100%', '160') }}

### Bildlink

Dieses Beispiel baut auf dem vorherigen auf und zeigt, wie man das Bild in einen Link umwandelt. Dazu muss das `<img>`-Tag innerhalb des {{HTMLElement("a")}}-Tags verschachtelt werden. Sie sollten den alternativen Text so gestalten, dass er die Ressource beschreibt, auf die der Link verweist, als ob Sie einen Textlink verwenden würden.

```html
<a href="https://developer.mozilla.org">
  <img
    src="/shared-assets/images/examples/favicon144.png"
    alt="Visit the MDN site" />
</a>
```

{{ EmbedLiveSample('Image_link', '100%', '160') }}

### Verwendung des srcset-Attributs

In diesem Beispiel fügen wir ein `srcset`-Attribut mit einem Verweis auf eine hochauflösende Version des Logos hinzu; dieses wird anstelle des im `src`-Attributs angegebenen Bildes auf hochauflösenden Geräten geladen. Das im `src`-Attribut angegebene Bild wird als `1x`-Kandidat in {{Glossary("User_agent", "User Agents")}} gezählt, die `srcset` unterstützen.

```html
<img
  src="/shared-assets/images/examples/favicon72.png"
  alt="MDN"
  srcset="/shared-assets/images/examples/favicon144.png 2x" />
```

{{EmbedLiveSample("Using_the_srcset_attribute", "100%", "160")}}

### Verwendung der srcset- und sizes-Attribute

Das `src`-Attribut wird in {{Glossary("User_agent", "User Agents")}}, die `srcset` unterstützen, ignoriert, wenn `w`-Beschreiber enthalten sind. Wenn die Medienbedingung `(width <= 600px)` zutrifft, wird das 200 Pixel breite Bild geladen (es ist dasjenige, das `200px` am nächsten kommt), ansonsten wird das andere Bild geladen.

```html
<img
  src="clock-demo-200px.png"
  alt="The time is 12:45."
  srcset="clock-demo-200px.png 200w, clock-demo-400px.png 400w"
  sizes="(width <= 600px) 200px, 50vw" />
```

{{EmbedLiveSample("Using_the_srcset_and_sizes_attributes", "100%", 350)}}

> [!NOTE]
> Um die Größenänderung in Aktion zu sehen, {{LiveSampleLink('Using_the_srcset_and_sizes_attributes', 'view the example on a separate page')}}, um tatsächlich den Inhaltsbereich zu ändern.

## Sicherheits- und Datenschutzbedenken

Obwohl `<img>`-Elemente harmlose Verwendungen haben, können sie unerwünschte Konsequenzen für die Sicherheit und den Datenschutz der Benutzer mit sich bringen. Weitere Informationen und Abhilfemaßnahmen finden Sie unter [Referer-Header: Bedenken zu Sicherheit und Datenschutz](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns).

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Fließender Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#embedded_content"
          >eingebetteter Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#palpable_content"
          >fühlbarer Inhalt</a
        >. Wenn das Element ein <code>usemap</code>-Attribut hat, ist es ferner Bestandteil der interaktiven Inhaltskategorie.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Kein; es ist ein {{Glossary("void_element", "leeres Element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss ein Start-Tag haben und darf keinen End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Jedes Element, das eingebetteten Inhalt akzeptiert.</td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <ul>
          <li>
            mit nicht leerem <code>alt</code>-Attribut oder keinem
            <code>alt</code>-Attribut:
            <code
              ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/img_role"
                ><code>img</code></a
              ></code
            >
          </li>
          <li>
            mit leerem <code>alt</code>-Attribut:
            <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"
              ><code>presentation</code></a
            >
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>
        <ul>
          <li>
            mit nicht leerem <code>alt</code>-Attribut:
            <ul>
              <li>
                <code
                  ><a
                    href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role"
                    >button</a
                  ></code
                >
              </li>
              <li>
                <code
                  ><a
                    href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role"
                    >checkbox</a
                  ></code
                >
              </li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/link_role"><code>link</code></a></li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role"><code>menuitem</code></a></li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role"><code>menuitemcheckbox</code></a></li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role"><code>menuitemradio</code></a></li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role"><code>option</code></a></li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role"><code>progressbar</code></a></li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role"><code>scrollbar</code></a></li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role"><code>separator</code></a></li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role"><code>slider</code></a></li>
              <li>
                <code
                  ><a
                    href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role"
                    >switch</a
                  ></code
                >
              </li>
              <li>
                <code
                  ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role"
                    >tab</a
                  ></code
                >
              </li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/treeitem_role"><code>treeitem</code></a></li>
            </ul>
          </li>
          <li>
            mit leerem <code>alt</code>-Attribut, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/none_role"><code>none</code></a>
            oder <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a>
          </li>
          <li>
            ohne <code>alt</code>-Attribut, keine <code>role</code> erlaubt
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("picture")}}, {{HTMLElement("object")}} und {{HTMLElement("embed")}}-Elemente
- {{cssxref("object-fit")}}, {{cssxref("object-position")}}, {{cssxref("image-orientation")}}, {{cssxref("image-rendering")}}, und {{cssxref("image-resolution")}}: Bildbezogene CSS-Eigenschaften.
- [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Schnittstelle für dieses Element
- [HTML-Bilder](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images)
- [Leitfaden zu Bild-Dateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types)
- [Responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images)
