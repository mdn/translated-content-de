---
title: "<img>: Das Bildelement für Einbettungen"
slug: Web/HTML/Element/img
l10n:
  sourceCommit: 783ffd9c1cf35421242e028a1b8743cf2b1918dd
---

{{HTMLSidebar}}

Das **`<img>`**-Element [HTML](/de/docs/Web/HTML) bettet ein Bild in das Dokument ein.

{{EmbedInteractiveExample("pages/tabbed/img.html", "tabbed-standard")}}

Das obige Beispiel zeigt die Verwendung des `<img>`-Elements:

- Das `src`-Attribut ist **erforderlich** und enthält den Pfad zum Bild, das eingebettet werden soll.
- Das `alt`-Attribut enthält einen textuellen Ersatz für das Bild, der obligatorisch und **unglaublich nützlich** für die Barrierefreiheit ist – Bildschirmlesegeräte lesen den Attributwert vor, damit Benutzer wissen, was das Bild bedeutet. Alt-Text wird auch auf der Seite angezeigt, wenn das Bild aus irgendeinem Grund nicht geladen werden kann: zum Beispiel bei Netzwerkfehlern, Inhaltsblockierung oder Link-Decay.

Es gibt viele andere Attribute für verschiedene Zwecke:

- Kontrolle von [Referrer](/de/docs/Web/HTTP/Headers/Referrer-Policy)/{{Glossary("CORS", "CORS")}} für Sicherheit und Datenschutz: siehe [`crossorigin`](#crossorigin) und [`referrerpolicy`](#referrerpolicy).
- Verwenden Sie sowohl [`width`](#width) als auch [`height`](#height), um die intrinsische Größe des Bildes festzulegen, damit es Platz einnimmt, bevor es geladen wird, um Layout-Verschiebungen zu verringern.
- Responsive Bildhinweise mit [`sizes`](#sizes) und [`srcset`](#srcset) (siehe auch das {{htmlelement("picture")}}-Element und unser [Responsive Images](/de/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images) Tutorial).

## Unterstützte Bildformate

Der HTML-Standard legt nicht fest, welche Bildformate unterstützt werden sollen, sodass {{Glossary("user_agent", "User Agents")}} möglicherweise unterschiedliche Formate unterstützen.

> [!NOTE]
> Der [Leitfaden für Bilddateitypen und -formate](/de/docs/Web/Media/Formats/Image_types) bietet umfassende Informationen über Bildformate und deren Unterstützung durch Webbrowser.
> Dieser Abschnitt ist nur eine Zusammenfassung!

Die am häufigsten im Web verwendeten Bilddateiformate sind:

- [APNG (Animated Portable Network Graphics)](/de/docs/Web/Media/Formats/Image_types#apng_animated_portable_network_graphics) – Eine gute Wahl für verlustfreie Animationssequenzen (GIF ist weniger leistungsfähig).
- [AVIF (AV1 Image File Format)](/de/docs/Web/Media/Formats/Image_types#avif_image) – Eine gute Wahl für Bilder und animierte Bilder aufgrund der hohen Leistung.
- [GIF (Graphics Interchange Format)](/de/docs/Web/Media/Formats/Image_types#gif_graphics_interchange_format) – Eine gute Wahl für _einfache_ Bilder und Animationen.
- [JPEG (Joint Photographic Expert Group image)](/de/docs/Web/Media/Formats/Image_types#jpeg_joint_photographic_experts_group_image) – Eine gute Wahl für verlustbehaftete Komprimierung von Standbildern (derzeit am häufigsten).
- [PNG (Portable Network Graphics)](/de/docs/Web/Media/Formats/Image_types#png_portable_network_graphics) – Eine gute Wahl für verlustfreie Komprimierung von Standbildern (etwas bessere Qualität als JPEG).
- [SVG (Scalable Vector Graphics)](/de/docs/Web/Media/Formats/Image_types#svg_scalable_vector_graphics) – Vektorbildformat. Verwenden Sie es für Bilder, die in verschiedenen Größen genau gezeichnet werden müssen.
- [WebP (Web Picture format)](/de/docs/Web/Media/Formats/Image_types#webp_image) – Eine ausgezeichnete Wahl für Bilder und animierte Bilder.

Formate wie [WebP](/de/docs/Web/Media/Formats/Image_types#webp_image) und [AVIF](/de/docs/Web/Media/Formats/Image_types#avif_image) werden empfohlen, da sie sowohl für Stand- als auch animierte Bilder viel besser abschneiden als PNG, JPEG, GIF.

SVG bleibt das empfohlene Format für Bilder, die in verschiedenen Größen genau gezeichnet werden müssen.

## Bildladefehler

Wenn ein Fehler beim Laden oder Rendern eines Bildes auftritt und ein `onerror`-Ereignishandler für das [`error`](/de/docs/Web/API/HTMLElement/error_event)-Ereignis festgelegt wurde, wird dieser Ereignishandler aufgerufen. Dies kann in mehreren Situationen passieren, unter anderem:

- Das `src`-Attribut ist leer (`""`) oder `null`.
- Die `src`-{{Glossary("URL", "URL")}} ist dieselbe wie die URL der Seite, auf der sich der Benutzer derzeit befindet.
- Das Bild ist in irgendeiner Weise beschädigt, die verhindert, dass es geladen wird.
- Die Metadaten des Bildes sind so beschädigt, dass es unmöglich ist, seine Abmessungen zu ermitteln, und es wurden keine Dimensionen in den Attributen des `<img>`-Elements angegeben.
- Das Bild ist in einem Format, das vom {{Glossary("user_agent", "User Agent")}} nicht unterstützt wird.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- [`alt`](/de/docs/Web/API/HTMLImageElement/alt#usage_notes)

  - : Definiert Text, der das Bild auf der Seite ersetzen kann.

    > [!NOTE]
    > Browser zeigen nicht immer Bilder an. Es gibt einige Situationen, in denen ein Browser möglicherweise keine Bilder anzeigt, z.B.:
    >
    > - Nicht-Visuelle Browser (wie solche, die von Menschen mit Sehbehinderungen verwendet werden)
    > - Der Benutzer entscheidet sich, keine Bilder anzuzeigen (um Bandbreite zu sparen, aus Datenschutzgründen)
    > - Das Bild ist ungültig oder ein [nicht unterstützter Typ](#unterstützte_bildformate)
    >
    > In diesen Fällen kann der Browser das Bild durch den Text im `alt`-Attribut des Elements ersetzen. Aus diesen und anderen Gründen sollten Sie wann immer möglich einen nützlichen Wert für `alt` bereitstellen.

    Wenn dieses Attribut auf einen leeren String gesetzt wird (`alt=""`), zeigt dies an, dass dieses Bild _nicht_ ein wesentlicher Bestandteil des Inhalts ist (es ist eine Dekoration oder ein Tracking-Pixel), und dass nicht-visuelle Browser es aus dem {{Glossary("Engine/Rendering", "Rendering")}} auslassen dürfen. Visuelle Browser verbergen auch das kaputte Bildsymbol, wenn das `alt`-Attribut leer ist und das Bild nicht angezeigt werden konnte.

    Dieses Attribut wird auch verwendet beim Kopieren und Einfügen des Bildes in Text oder beim Speichern eines verknüpften Bildes zu einem Lesezeichen.

- `attributionsrc` {{experimental_inline}}

  - : Gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header zusammen mit der Bildanforderung sendet.

    Serverseitig wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Headers in der Antwort auszulösen, um eine auf Bildern basierende [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#html-based_event_sources) oder [Attributionstrigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#html-based_attribution_triggers) zu registrieren. Welcher Antwortheader zurückgesendet werden sollte, hängt vom Wert des `Attribution-Reporting-Eligible`-Headers ab, der die Registrierung ausgelöst hat.

    Das entsprechende Quell- oder Triggervent wird ausgelöst, sobald der Browser die Antwort mit der Bilddatei erhält.

    > [!NOTE]
    > Weitere Einzelheiten finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

    Es gibt zwei Versionen dieses Attributs, die Sie einstellen können:

    - Boolean-Wert, d.h. nur den Namen `attributionsrc`. Dies gibt an, dass Sie möchten, dass der {{httpheader("Attribution-Reporting-Eligible")}}-Header an denselben Server gesendet wird, auf den das `src`-Attribut verweist. Dies ist in Ordnung, wenn Sie die Registrierung der Attributionsquelle oder des Triggers auf demselben Server durchführen. Bei der Registrierung eines Attributionstriggers ist diese Eigenschaft optional und ein Boolean-Wert wird verwendet, wenn sie weggelassen wird.
    - Wert, der eine oder mehrere URLs enthält, zum Beispiel:

    ```html
    <img
      src="image-file.png"
      alt="My image file description"
      attributionsrc="https://a.example/register-source
                         https://b.example/register-source" />
    ```

    Dies ist nützlich in Fällen, in denen die angeforderte Ressource nicht auf einem von Ihnen kontrollierten Server ist oder Sie einfach die Registrierung der Attributionsquelle auf einem anderen Server verwalten möchten. In diesem Fall können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcenanforderung erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header an die im `attributionSrc` angegebenen URLs zusätzlich zum Ursprungsort der Ressource gesendet. Diese URLs können dann mit einem {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header antworten, um die Registrierung abzuschließen.

    > [!NOTE]
    > Das Spezifizieren mehrerer URLs bedeutet, dass mehrere Attributionsquellen für dasselbe Feature registriert werden können. Möglicherweise haben Sie zum Beispiel unterschiedliche Kampagnen, deren Erfolg Sie messen möchten, was die Erstellung unterschiedlicher Berichte über unterschiedliche Daten beinhaltet.

- [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)

  - : Gibt an, ob das Abrufen des Bildes unter Verwendung einer {{Glossary("CORS", "CORS")}}-Anfrage erfolgen muss. Bilddaten aus einem [CORS-fähigen Bild](/de/docs/Web/HTML/CORS_enabled_image), das aus einer CORS-Anfrage zurückgegeben wurde, können im {{HTMLElement("canvas")}}-Element ohne Markierung als "[verunreinigt](/de/docs/Web/HTML/CORS_enabled_image#security_and_tainted_canvases)" wiederverwendet werden.

    Wenn das `crossorigin`-Attribut _nicht_ angegeben ist, wird eine Nicht-CORS-Anfrage gesendet (ohne den {{httpheader("Origin")}}-Request-Header), und der Browser markiert das Bild als verunreinigt und beschränkt den Zugriff auf dessen Bilddaten, um dessen Verwendung in {{HTMLElement("canvas")}}-Elementen zu verhindern.

    Wenn das `crossorigin`-Attribut _angegeben_ ist, wird eine CORS-Anfrage gesendet (mit dem {{httpheader("Origin")}}-Request-Header); wenn der Server jedoch nicht in den Cross-Origin-Zugriff auf die Bilddaten durch den Ursprungsort einwilligt (indem er keinen {{httpheader("Access-Control-Allow-Origin")}}-Antwort-Header sendet oder die Origin-Site nicht in einen {{httpheader("Access-Control-Allow-Origin")}}-Antwort-Header aufnimmt, den er sendet), blockiert der Browser das Laden des Bildes und protokolliert einen CORS-Fehler in der Entwicklertools-Konsole.

    Erlaubte Werte:

    - `anonymous`
      - : Eine CORS-Anfrage wird ohne Anmeldeinformationen (d.h. keine {{Glossary("cookie", "Cookies")}}, [X.509-Zertifikate](https://datatracker.ietf.org/doc/html/rfc5280) oder {{httpheader("Authorization")}}-Request-Header) gesendet.
    - `use-credentials`
      - : Die CORS-Anfrage wird mit allen enthaltenen Anmeldeinformationen gesendet (d.h. Cookies, X.509-Zertifikate und der `Authorization`-Request-Header). Wenn der Server nicht zustimmt, Anmeldeinformationen mit der Origin-Site zu teilen (indem er den `Access-Control-Allow-Credentials: true`-Antwort-Header zurücksendet), markiert der Browser das Bild als verunreinigt und beschränkt den Zugriff auf dessen Bilddaten.

    Wenn das Attribut einen ungültigen Wert hat, behandeln es Browser, als ob der `anonymous`-Wert verwendet wurde. Weitere Informationen finden Sie unter [CORS-Einstellungsattribute](/de/docs/Web/HTML/Attributes/crossorigin).

- `decoding`

  - : Dieses Attribut gibt dem Browser einen Hinweis darauf, ob er die Bilddecodierung zusammen mit dem Rendern anderer DOM-Inhalte in einem einzigen Präsentationsschritt durchführen soll, der "korrekter" aussieht (`sync`), oder zuerst die anderen DOM-Inhalte rendern und präsentieren und dann das Bild decodieren und später präsentieren soll (`async`). In der Praxis bedeutet `async`, dass das nächste Rendering nicht darauf wartet, dass das Bild decodiert wird.

    Es ist oft schwer, einen wahrnehmbaren Effekt beim Verwenden von `decoding` auf statische `<img>`-Elemente zu bemerken. Sie werden wahrscheinlich zunächst als leere Bilder gerendert, während die Bilddateien abgerufen werden (entweder aus dem Netzwerk oder aus dem Cache) und dann sowieso unabhängig davon verarbeitet, sodass das "Synchronisieren" von Inhaltsupdates weniger offensichtlich ist. Das Blockieren des Renderings während der Decodierung kann jedoch, auch wenn es oft sehr gering ist, _gemessen_ werden – selbst wenn es mit dem bloßen Auge schwer zu beobachten ist. Siehe [Was macht das Bilddecodierungs-Attribut eigentlich?](https://www.tunetheweb.com/blog/what-does-the-image-decoding-attribute-actually-do/) für eine detailliertere Analyse (tunetheweb.com, 2023).

    Die Verwendung verschiedener `decoding`-Typen kann zu deutlich wahrnehmbaren Unterschieden führen, wenn dynamisch `<img>`-Elemente über JavaScript in das DOM eingefügt werden – siehe [`HTMLImageElement.decoding`](/de/docs/Web/API/HTMLImageElement/decoding) für weitere Details.

    Erlaubte Werte:

    - `sync`
      - : Decodiere das Bild synchron zusammen mit dem Rendern der anderen DOM-Inhalte und präsentiere alles zusammen.
    - `async`
      - : Decodiere das Bild asynchron, nach dem Rendern und Präsentieren der anderen DOM-Inhalte.
    - `auto`
      - : Keine Präferenz für den Decodierungsmodus; der Browser entscheidet, was für den Benutzer am besten ist. Dies ist der Standardwert.

- [`elementtiming`](/de/docs/Web/HTML/Attributes/elementtiming)

  - : Markiert das Bild zur Beobachtung durch die [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming) API. Der gegebene Wert wird zu einem Bezeichner für das beobachtete Bildelement. Siehe auch die Seite [`elementtiming`](/de/docs/Web/HTML/Attributes/elementtiming).

- `fetchpriority`

  - : Gibt einen Hinweis auf die relative Priorität, die beim Abrufen des Bildes verwendet werden soll. Erlaubte Werte:

    - `high`
      - : Signalisiert ein Abrufen mit hoher Priorität im Vergleich zu anderen Bildern.
    - `low`
      - : Signalisiert ein Abrufen mit niedriger Priorität im Vergleich zu anderen Bildern.
    - `auto`
      - : Standard: Signalisiert die automatische Bestimmung der Abrufpriorität im Vergleich zu anderen Bildern.

- `height`

  - : Die intrinsische Höhe des Bildes in Pixeln. Muss eine Ganzzahl ohne Einheit sein.

    > [!NOTE]
    > Das Einbeziehen von `height` und [`width`](#width) ermöglicht es dem Browser, das {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Bildes zu berechnen, bevor das Bild geladen wird. Dieses Seitenverhältnis wird verwendet, um den zum Anzeigen des Bildes benötigten Platz zu reservieren, wodurch Layout-Verschiebungen reduziert oder sogar verhindert werden, wenn das Bild heruntergeladen und auf den Bildschirm gemalt wird. Die Verringerung von Layout-Verschiebungen ist ein wesentlicher Bestandteil einer guten Benutzererfahrung und Web-Performance.

- `ismap`

  - : Dieses Boolean-Attribut gibt an, dass das Bild Teil einer [Server-seitigen Karte](https://en.wikipedia.org/wiki/Image_map#Server-side) ist. In diesem Fall werden die Koordinaten, auf die der Benutzer im Bild geklickt hat, an den Server gesendet.

    > [!NOTE]
    > Dieses Attribut ist nur zulässig, wenn das `<img>`-Element ein Nachfahre eines {{htmlelement("a")}}-Elements mit einem gültigen [`href`](/de/docs/Web/HTML/Element/a#href) Attribut ist. Dies gibt Benutzern ohne Zeigegeräte ein Fallback-Ziel.

- `loading`

  - : Gibt an, wie der Browser das Bild laden soll:

    - `eager`
      - : Lädt das Bild sofort, unabhängig davon, ob das Bild derzeit im sichtbaren Ansichtsfenster ist (dies ist der Standardwert).
    - `lazy`
      - : Verzögert das Laden des Bildes, bis es eine berechnete Entfernung vom Ansichtsfenster erreicht hat, wie es vom Browser definiert ist. Die Absicht ist, das Netzwerk und die Speicherbandbreite zu vermeiden, die erforderlich ist, das Bild zu verarbeiten, bis es mit hinreichender Sicherheit benötigt wird. Dies verbessert im Allgemeinen die Leistung der Inhalte in den meisten typischen Anwendungsfällen.

    > [!NOTE]
    > Das Laden wird nur verzögert, wenn JavaScript aktiviert ist. Dies ist ein Anti-Tracking-Maßnahme, da es, wenn ein User-Agent das verzögerte Laden unterstützte, wenn Scripting deaktiviert ist, immer noch möglich wäre, die ungefähre Scrollposition eines Benutzers während einer Sitzung zu verfolgen, indem strategisch Bilder in das Markup einer Seite so eingefügt werden, dass ein Server verfolgen kann, wie viele Bilder angefordert werden und wann.

    > [!NOTE]
    > Bilder mit `loading` auf `lazy` werden niemals geladen, wenn sie nicht mit einem sichtbaren Teil eines Elements einschneiden, selbst wenn das Laden diese Änderung bewirken würde, da nicht geladene Bilder eine `width` und `height` von `0` haben. Das Setzen von `width` und `height` für lazy-geladene Bilder behebt dieses Problem und wird als Best Practice angesehen, [empfohlen von der Spezifikation](https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element). Dies hilft auch, Layout-Verschiebungen zu vermeiden.

- `referrerpolicy`

  - : Ein String, der angibt, welchen Referrer beim Abrufen der Ressource zu verwenden ist:

    - `no-referrer`: Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}}-Header wird nicht an {{Glossary("origin", "Ursprünge")}} ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`: Der gesendete Referrer wird auf den Ursprung der verweisenden Seite beschränkt: dessen [Schema](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`: Der an andere Ursprünge gesendete Referrer wird auf Schema, Host und Port beschränkt. Navigationen im selben Ursprung enthalten weiterhin den Pfad.
    - `same-origin`: Ein Referrer wird für {{Glossary("Same-origin_policy", "dasselbe Ursprungs")}} gesendet, aber Cross-Origin-Anfragen enthalten keine Referrer-Informationen.
    - `strict-origin`: Senden Sie den Ursprung des Dokuments nur als Referrer, wenn das Protokollsicherheitsniveau gleichbleibt (HTTPS→HTTPS), senden ihn jedoch nicht an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard): Senden Sie eine vollständige URL bei einer Navigation im gleichen Ursprungs, nur den Ursprung, wenn das Protokollsicherheitsniveau gleich bleibt (HTTPS→HTTPS), und senden Sie keinen Header an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `unsafe-url`: Der Referrer enthält den Ursprung _und_ den Pfad (aber nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder [Benutzername](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge weitergibt.

- `sizes`

  - : Eine oder mehrere durch Komma getrennte Zeichenfolgen, die einen Satz von Quellgrößen angeben. Jede Quellgröße besteht aus:

    1. Einer [Medienbedingung](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#syntax). Diese muss für das letzte Element in der Liste weggelassen werden.
    2. Einem Quellgrößenwert.

    Medienbedingungen beschreiben Eigenschaften des _Ansichtsfensters_, nicht des _Bildes_. Beispielsweise schlägt `(max-height: 500px) 1000px` vor, eine Quelle mit 1000px Breite zu verwenden, wenn das _Ansichtsfenster_ nicht höher als 500px ist.

    Quellgrößenwerte geben die beabsichtigte Anzeigengröße des Bildes an. {{Glossary("User_agent", "Benutzeragenten")}} verwenden die aktuelle Quellgröße, um eine der vom `srcset`-Attribut bereitgestellten Quellen auszuwählen, wenn diese Quellen mit Breitenbeschreibern (`w`) beschrieben werden. Die ausgewählte Quellgröße beeinflusst die {{Glossary("intrinsic_size", "intrinsische Größe")}} des Bildes (die Anzeigengröße des Bildes, wenn kein {{Glossary("CSS", "CSS")}}-Styling angewendet wird). Wenn das `srcset`-Attribut fehlt oder keine Werte mit einem Breitenbeschreiber enthält, hat das `sizes`-Attribut keine Auswirkungen.

- `src`
  - : Die {{Glossary("URL", "URL")}} des Bildes. Obligatorisch für das `<img>`-Element. In {{Glossary("Browser", "Browsern")}}, die `srcset` unterstützen, wird `src` wie ein Bildkandidat mit einem Pixeldichtewert `1x` behandelt, es sei denn, ein Bild mit diesem Pixeldichtewert ist bereits in `srcset` definiert, oder `srcset` enthält `w` Beschreiber.
- `srcset`

  - : Eine oder mehrere durch Komma getrennte Zeichenfolgen, die mögliche Bildquellen für den {{Glossary("user_agent", "User Agent")}} darstellen. Jede Zeichenfolge besteht aus:

    1. Einer {{Glossary("URL", "URL")}} zu einem Bild
    2. Optional, Leerraum gefolgt von einem der folgenden:

       - Einem Breitenbeschreiber (eine positive Ganzzahl, direkt gefolgt von `w`). Der Breitenbeschreiber wird durch die in der `sizes`-Attribut angegebene Quellgröße geteilt, um die effektive Pixeldichte zu berechnen.
       - Einem Pixeldichtebeschreiber (eine positive Fließkommazahl, direkt gefolgt von `x`).

    Wenn kein Beschreiber angegeben ist, wird der Quelle der Standardbeschreiber von `1x` zugewiesen.

    Es ist falsch, Breitenbeschreiber und Pixeldichtebeschreiber im selben `srcset`-Attribut zu mischen. Doppelte Beschreiber (z. B. zwei Quellen im selben `srcset`, die beide mit `2x` beschrieben werden) sind ebenfalls ungültig.

    Wenn das `srcset`-Attribut Breitenbeschreiber verwendet, muss auch das `sizes`-Attribut vorhanden sein, sonst wird das `srcset` selbst ignoriert.

    Der User-Agent wählt nach eigenem Ermessen aus den verfügbaren Quellen aus. Dies bietet ihnen erheblichen Spielraum, ihre Auswahl basierend auf Dingen wie Benutzerpräferenzen oder {{Glossary("bandwidth", "Bandbreiten")}}-Bedingungen anzupassen. Siehe unser [Responsive Images](/de/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images) Tutorial für ein Beispiel.

- `width`
  - : Die intrinsische Breite des Bildes in Pixeln. Muss eine Ganzzahl ohne Einheit sein.
- `usemap`

  - : Die partielle {{Glossary("URL", "URL")}} (beginnend mit `#`) einer mit dem Element verknüpften [Bildkarte](/de/docs/Web/HTML/Element/map).

    > [!NOTE]
    > Sie können dieses Attribut nicht verwenden, wenn das `<img>`-Element sich innerhalb eines {{htmlelement("a")}}- oder {{HTMLElement("button")}}-Elements befindet.

### Veraltete Attribute

- `align` {{deprecated_inline}}

  - : Richtet das Bild mit seinem umgebenden Kontext aus. Verwenden Sie die {{cssxref('float')}}- und/oder {{cssxref('vertical-align')}}-{{Glossary("CSS", "CSS")}}-Eigenschaften anstelle dieses Attributs. Erlaubte Werte:

    - `top`
      - : Entspricht `vertical-align: top` oder `vertical-align: text-top`.
    - `middle`
      - : Entspricht `vertical-align: -moz-middle-with-baseline`.
    - `bottom`
      - : Der Standard, entspricht `vertical-align: unset` oder `vertical-align: initial`.
    - `left`
      - : Entspricht `float: left`.
    - `right`
      - : Entspricht `float: right`.

- `border` {{deprecated_inline}}
  - : Die Breite eines Rahmens um das Bild. Verwenden Sie die {{cssxref('border')}}-{{Glossary("CSS", "CSS")}}-Eigenschaft stattdessen.
- `hspace` {{deprecated_inline}}
  - : Die Anzahl der Pixel weißen Raums auf der linken und rechten Seite des Bildes. Verwenden Sie die {{cssxref('margin')}}-CSS-Eigenschaft stattdessen.
- `longdesc` {{deprecated_inline}}

  - : Ein Link zu einer detaillierteren Beschreibung des Bildes. Mögliche Werte sind eine {{Glossary("URL", "URL")}} oder eine [`id`](/de/docs/Web/HTML/Global_attributes/id) eines Elements.

    > [!NOTE]
    > Dieses Attribut wird in der neuesten {{Glossary("W3C", "W3C")}}-Version, [HTML 5.2](https://html.spec.whatwg.org/multipage/obsolete.html#element-attrdef-img-longdesc), erwähnt, wurde jedoch aus dem {{Glossary("WHATWG", "WHATWG")}}'s [HTML Living Standard](https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element) entfernt. Es hat eine ungewisse Zukunft; Autoren sollten eine {{Glossary("WAI", "WAI")}}-{{Glossary("ARIA", "ARIA")}}-Alternative verwenden, wie [`aria-describedby`](https://www.w3.org/TR/wai-aria-1.1/#aria-describedby) oder [`aria-details`](https://www.w3.org/TR/wai-aria-1.1/#aria-details).

- `name` {{deprecated_inline}}
  - : Ein Name für das Element. Verwenden Sie das [`id`](/de/docs/Web/HTML/Global_attributes/id)-Attribut stattdessen.
- `vspace` {{deprecated_inline}}
  - : Die Anzahl der Pixel weißen Raum oberhalb und unterhalb des Bildes. Verwenden Sie die {{cssxref('margin')}}-CSS-Eigenschaft stattdessen.

## Styling mit CSS

`<img>` ist ein [Ersetztes Element](/de/docs/Web/CSS/Replaced_element); es hat standardmäßig einen {{cssxref("display")}}-Wert von `inline`, aber seine Standarddimensionen werden durch die intrinsischen Werte des eingebetteten Bildes definiert, als wäre es `inline-block`. Sie können Eigenschaften wie {{cssxref("border")}}/{{cssxref("border-radius")}}, {{cssxref("padding")}}/{{cssxref("margin")}}, {{cssxref("width")}}, {{cssxref("height")}}, usw. auf ein Bild anwenden.

`<img>` hat keine Basislinie, also wenn Bilder in einem Inline-Formatierungskontext mit {{cssxref("vertical-align", "vertical-align: baseline")}} verwendet werden, wird das untere Ende des Bildes auf der Textbasislinie platziert.

Sie können die {{cssxref("object-position")}}-Eigenschaft verwenden, um das Bild innerhalb des Elemente-Rahmens zu positionieren, und die {{cssxref("object-fit")}}-Eigenschaft, um die Größe des Bildes innerhalb des Rahmens anzupassen (zum Beispiel, ob das Bild den Rahmen ausfüllen soll, auch wenn Zuschnitt erforderlich ist).

Abhängig von seinem Typ kann ein Bild eine intrinsische Breite und Höhe haben. Bei einigen Bildtypen sind jedoch intrinsische Dimensionen nicht notwendig. {{Glossary("SVG", "SVG")}}-Bilder haben zum Beispiel keine intrinsischen Dimensionen, wenn ihr Wurzelelement {{SVGElement("svg")}} kein `width`- oder `height`-Attribut gesetzt hat.

## Barrierefreiheit

### Bedeutungsvolle alternative Beschreibungen verfassen

Der Wert des `alt`-Attributs sollte einen klaren und prägnanten Textersatz für den Bildinhalt bieten. Es sollte nicht das Vorhandensein des Bildes selbst oder den Dateinamen des Bildes beschreiben. Wenn das `alt`-Attribut absichtlich weggelassen wird, weil das Bild kein textuelles Äquivalent hat, ziehen Sie alternative Methoden in Betracht, um das darzustellen, was das Bild zu vermitteln versucht.

#### Nicht tun

```html example-bad
<img alt="image" src="penguin.jpg" />
```

#### Tun

```html example-good
<img alt="A Rockhopper Penguin is standing on a beach." src="penguin.jpg" />
```

Wenn ein `alt`-Attribut bei einem Bild nicht vorhanden ist, können einige Bildschirmlesegeräte den Dateinamen des Bildes stattdessen ankündigen. Dies kann verwirrend sein, wenn der Dateiname nicht repräsentativ für den Inhalt des Bildes ist.

- [Ein Entscheidungsbaum für Alt-Texte • Bilder • WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/images/decision-tree/)
- [Alt-Texte: Der ultimative Leitfaden — Axess Lab](https://axesslab.com/alt-texts/)
- [Anleitung zur Erstellung von guten Alt-Texten: Ein Einführung | Deque](https://www.deque.com/blog/great-alt-text-introduction/)
- [MDN Verständnis von WCAG, Erklärungen zur Richtlinie 1.1](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verständnis des Erfolgskriteriums 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

### SVG als Bild identifizieren

Aufgrund eines [VoiceOver-Bugs](https://webkit.org/b/216364) kündigt VoiceOver SVG-Bilder nicht korrekt als Bilder an. Fügen Sie [`role="img"`](/de/docs/Web/Accessibility/ARIA/Roles/img_role) zu allen `<img>`-Elementen mit SVG-Quelldateien hinzu, um sicherzustellen, dass unterstützende Technologien das SVG korrekt als Bildinhalt ankündigen.

```html
<img src="mdn.svg" alt="MDN" role="img" />
```

### Das title-Attribut

Das [`title`](/de/docs/Web/HTML/Global_attributes/title)-Attribut ist kein akzeptabler Ersatz für das `alt`-Attribut. Vermeiden Sie außerdem, den Wert des `alt`-Attributs in einem `title`-Attribut zu duplizieren, das auf demselben Bild deklariert ist. Dadurch könnten einige Bildschirmlesegeräte denselben Text zweimal ankündigen, was zu einer verwirrenden Erfahrung führt.

Das `title`-Attribut sollte auch nicht als ergänzende Beschriftung verwendet werden, um die `alt`-Beschreibung eines Bildes zu begleiten. Wenn ein Bild eine Beschriftung benötigt, verwenden Sie die [`figure`](/de/docs/Web/HTML/Element/figure)- und [`figcaption`](/de/docs/Web/HTML/Element/figcaption)-Elemente.

Der Wert des `title`-Attributs wird dem Benutzer normalerweise als Tooltip präsentiert, der kurz nachdem der Cursor über dem Bild anhält erscheint. Während dies _zusätzliche_ Informationen für den Benutzer bieten kann, sollten Sie nicht davon ausgehen, dass der Benutzer es jemals sehen wird: Der Benutzer könnte nur eine Tastatur oder einen Touchscreen haben. Wenn Sie Informationen haben, die besonders wichtig oder wertvoll für den Benutzer sind, präsentieren Sie sie inline mit einer der oben genannten Methoden anstelle des `title`-Attributs.

- [Using the HTML title attribute – updated | The Paciello Group](https://www.tpgi.com/using-the-html-title-attribute-updated/)

## Beispiele

### Alternativer Text

Das folgende Beispiel bettet ein Bild in die Seite ein und enthält alternativen Text für Barrierefreiheit.

```html
<img src="favicon144.png" alt="MDN" />
```

{{ EmbedLiveSample('Alternative_text', '100%', '160') }}

### Bild-Link

Dieses Beispiel baut auf dem vorherigen auf und zeigt, wie das Bild in einen Link verwandelt werden kann. Dazu nisten Sie das `<img>`-Tag innerhalb des {{HTMLElement("a")}}. Sie sollten den alternativen Text so gestalten, dass er die Ressource beschreibt, auf die der Link verweist, als ob Sie einen Textlink verwenden würden.

```html
<a href="https://developer.mozilla.org">
  <img src="favicon144.png" alt="Visit the MDN site" />
</a>
```

{{ EmbedLiveSample('Image_link', '100%', '160') }}

### Nutzung des srcset-Attributs

In diesem Beispiel fügen wir ein `srcset`-Attribut mit einem Verweis auf eine hochauflösende Version des Logos hinzu; dies wird anstelle des `src`-Bildes auf hochauflösenden Geräten geladen. Das im `src`-Attribut referenzierte Bild wird als `1x`-Kandidat in {{Glossary("User_agent", "User Agents")}} gezählt, die `srcset` unterstützen.

```html
<img src="favicon72.png" alt="MDN" srcset="favicon144.png 2x" />
```

{{EmbedLiveSample("Using_the_srcset_attribute", "100%", "160")}}

### Nutzung der srcset und sizes Attribute

Das `src`-Attribut wird in {{Glossary("User_agent", "User Agents")}} ignoriert, die `srcset` unterstützen, wenn `w`-Beschreiber eingeschlossen sind. Wenn die `(max-width: 600px)`-Medienbedingung zutrifft, wird das 200 Pixel breite Bild geladen (es ist das, das `200px` am Nähesten kommt), andernfalls wird das andere Bild geladen.

```html
<img
  src="clock-demo-200px.png"
  alt="The time is 12:45."
  srcset="clock-demo-200px.png 200w, clock-demo-400px.png 400w"
  sizes="(max-width: 600px) 200px, 50vw" />
```

{{EmbedLiveSample("Using_the_srcset_and_sizes_attributes", "100%", 350)}}

> [!NOTE]
> Um die Größenänderung in Aktion zu sehen, {{LiveSampleLink('Using_the_srcset_and_sizes_attributes', 'sehen Sie sich das Beispiel auf einer separaten Seite an')}}, damit Sie den Inhaltsbereich tatsächlich anpassen können.

## Sicherheits- und Datenschutzbedenken

Obwohl `<img>`-Elemente harmlose Verwendungszwecke haben, können sie unerwünschte Folgen für die Sicherheit und Privatsphäre des Benutzers haben. Siehe [Referer-Header: Datenschutz- und Sicherheitsbedenken](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns) für weitere Informationen und Gegenmaßnahmen.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories"
          >Content-Kategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Fließender Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierter Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#embedded_content"
          >Eingebetteter Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#palpable_content"
          >Anfassbarer Inhalt</a
        >. Wenn das Element ein <code>usemap</code>-Attribut hat, gehört es auch zur Kategorie der interaktiven Inhalte.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "Void-Element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Auslassung des Tags</th>
      <td>Muss einen Starttag haben und darf keinen Endtag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Jedes Element, das eingebetteten Inhalt akzeptiert.</td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <ul>
          <li>
            mit nicht-leerem <code>alt</code>-Attribut oder ohne
            <code>alt</code>-Attribut:
            <code
              ><a href="/de/docs/Web/Accessibility/ARIA/Roles/img_role"
                ><code>img</code></a
              ></code
            >
          </li>
          <li>
            mit leerem <code>alt</code>-Attribut:
            <a href="/de/docs/Web/Accessibility/ARIA/Roles/presentation_role"
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
            mit nicht-leerem <code>alt</code>-Attribut:
            <ul>
              <li>
                <code
                  ><a
                    href="/de/docs/Web/Accessibility/ARIA/Roles/button_role"
                    >button</a
                  ></code
                >
              </li>
              <li>
                <code
                  ><a
                    href="/de/docs/Web/Accessibility/ARIA/Roles/checkbox_role"
                    >checkbox</a
                  ></code
                >
              </li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Roles/link_role"><code>link</code></a></li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Roles/menuitem_role"><code>menuitem</code></a></li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role"><code>menuitemcheckbox</code></a></li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role"><code>menuitemradio</code></a></li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Roles/option_role"><code>option</code></a></li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Roles/progressbar_role"><code>progressbar</code></a></li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Roles/scrollbar_role"><code>scrollbar</code></a></li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Roles/separator_role"><code>separator</code></a></li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Roles/slider_role"><code>slider</code></a></li>
              <li>
                <code
                  ><a
                    href="/de/docs/Web/Accessibility/ARIA/Roles/switch_role"
                    >switch</a
                  ></code
                >
              </li>
              <li>
                <code
                  ><a href="/de/docs/Web/Accessibility/ARIA/Roles/tab_role"
                    >tab</a
                  ></code
                >
              </li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Roles/treeitem_role"><code>treeitem</code></a></li>
            </ul>
          </li>
          <li>
            mit leerem <code>alt</code>-Attribut, <a href="/de/docs/Web/Accessibility/ARIA/Roles/none_role"><code>none</code></a>
            oder <a href="/de/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a>
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

- {{HTMLElement("picture")}}, {{HTMLElement("object")}}, und {{HTMLElement("embed")}} Elemente
- {{cssxref("object-fit")}}, {{cssxref("object-position")}}, {{cssxref("image-orientation")}}, {{cssxref("image-rendering")}}, und {{cssxref("image-resolution")}}: Bildbezogene CSS-Eigenschaften.
- [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) Schnittstelle für dieses Element
- [Bilder in HTML](/de/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML)
- [Leitfaden für Bilddateitypen und -formate](/de/docs/Web/Media/Formats/Image_types)
- [Responsive Images](/de/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
