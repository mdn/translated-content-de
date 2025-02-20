---
title: "<img>: Das Bild-Einbettungselement"
slug: Web/HTML/Element/img
l10n:
  sourceCommit: a2aa6d7d9c0c0c6ca7a6be2d45a5c53eecd5ff91
---

{{HTMLSidebar}}

Das **`<img>`** [HTML](/de/docs/Web/HTML) Element bettet ein Bild in das Dokument ein.

{{EmbedInteractiveExample("pages/tabbed/img.html", "tabbed-standard")}}

Das obige Beispiel zeigt die Verwendung des `<img>` Elements:

- Das `src` Attribut ist **erforderlich** und enthält den Pfad zum Bild, das Sie einbetten möchten.
- Das `alt` Attribut enthält einen textuellen Ersatz für das Bild, der obligatorisch und **unglaublich nützlich** für die Barrierefreiheit ist — Screenreader lesen den Attributwert vor, damit ihre Benutzer wissen, was das Bild bedeutet. Alternativtext wird auch auf der Seite angezeigt, wenn das Bild aus irgendeinem Grund nicht geladen werden kann, zum Beispiel bei Netzwerkfehlern, Inhaltsblockierung oder Link-Verfall.

Es gibt viele andere Attribute, um verschiedene Zwecke zu erreichen:

- [Referrer](/de/docs/Web/HTTP/Headers/Referrer-Policy)/{{Glossary("CORS", "CORS")}} Kontrolle für Sicherheit und Datenschutz: siehe [`crossorigin`](#crossorigin) und [`referrerpolicy`](#referrerpolicy).
- Verwenden Sie sowohl [`width`](#width) als auch [`height`](#height), um die intrinsische Größe des Bildes festzulegen, damit es Platz einnimmt, bevor es geladen wird, um Verschiebungen des Inhaltslayouts zu mildern.
- Hinweise für responsive Bilder mit [`sizes`](#sizes) und [`srcset`](#srcset) (siehe auch das {{htmlelement("picture")}} Element und unser [Leitfaden zu Responsiven Bildern](/de/docs/Web/HTML/Responsive_images)).

## Unterstützte Bildformate

Der HTML-Standard gibt nicht vor, welche Bildformate unterstützt werden müssen, daher können {{Glossary("user_agent", "Benutzeragenten")}} unterschiedliche Formate unterstützen.

> [!NOTE]
> Der [Leitfaden für Bilddateitypen und -formate](/de/docs/Web/Media/Guides/Formats/Image_types) bietet umfassende Informationen über Bildformate und deren Unterstützung in Webbrowsern.
> Dieser Abschnitt ist nur eine Zusammenfassung!

Die am häufigsten im Web verwendeten Bilddateiformate sind:

- [APNG (Animated Portable Network Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#apng_animated_portable_network_graphics) — Gute Wahl für verlustfreie Animationsabläufe (GIF ist weniger leistungsfähig)
- [AVIF (AV1 Image File Format)](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) — Gute Wahl für sowohl Bilder als auch animierte Bilder aufgrund hoher Leistung.
- [GIF (Graphics Interchange Format)](/de/docs/Web/Media/Guides/Formats/Image_types#gif_graphics_interchange_format) — Gute Wahl für _einfache_ Bilder und Animationen.
- [JPEG (Joint Photographic Expert Group image)](/de/docs/Web/Media/Guides/Formats/Image_types#jpeg_joint_photographic_experts_group_image) — Gute Wahl für verlustbehaftete Komprimierung von Standbildern (derzeit am beliebtesten).
- [PNG (Portable Network Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#png_portable_network_graphics) — Gute Wahl für verlustfreie Komprimierung von Standbildern (leicht bessere Qualität als JPEG).
- [SVG (Scalable Vector Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#svg_scalable_vector_graphics) — Vektorbildformat. Verwenden Sie es für Bilder, die in verschiedenen Größen genau gezeichnet werden müssen.
- [WebP (Web Picture Format)](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) — Hervorragende Wahl für sowohl Bilder als auch animierte Bilder.

Formate wie [WebP](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) und [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) werden empfohlen, da sie viel besser als PNG, JPEG, GIF für sowohl Stand- als auch animierte Bilder abschneiden.

SVG bleibt das empfohlene Format für Bilder, die in unterschiedlichen Größen genau gezeichnet werden müssen.

## Bildladefehler

Wenn beim Laden oder Rendern eines Bildes ein Fehler auftritt und ein `onerror` Ereignishandler für das [`error`](/de/docs/Web/API/HTMLElement/error_event) Ereignis festgelegt wurde, wird dieser Ereignishandler aufgerufen. Dies kann in mehreren Situationen passieren, darunter:

- Das `src` Attribut ist leer (`""`) oder `null`.
- Die `src` {{Glossary("URL", "URL")}} ist dieselbe wie die URL der Seite, die der Benutzer gerade aufgerufen hat.
- Das Bild ist in irgendeiner Weise beschädigt, sodass es nicht geladen werden kann.
- Die Metadaten des Bildes sind so beschädigt, dass es unmöglich ist, seine Abmessungen zu ermitteln, und es wurden keine Abmessungen in den Attributen des `<img>` Elements angegeben.
- Das Bild liegt in einem Format vor, das vom {{Glossary("user_agent", "Benutzeragenten")}} nicht unterstützt wird.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- [`alt`](/de/docs/Web/API/HTMLImageElement/alt#usage_notes)

  - : Definiert Text, der das Bild auf der Seite ersetzen kann.

    > [!NOTE]
    > Browser zeigen nicht immer Bilder an. Es gibt eine Reihe von Situationen, in denen ein Browser Bilder möglicherweise nicht anzeigt, wie zum Beispiel:
    >
    > - Nicht-visuelle Browser (wie die von Menschen mit Sehbehinderung verwendet werden)
    > - Der Benutzer entscheidet sich dafür, Bilder nicht anzuzeigen (um Bandbreite zu sparen, aus Datenschutzgründen)
    > - Das Bild ist ungültig oder ein [nicht unterstützter Typ](#unterstützte_bildformate)
    >
    > In diesen Fällen kann der Browser das Bild durch den Text im `alt` Attribut des Elements ersetzen. Aus diesen und anderen Gründen sollten Sie wann immer möglich einen nützlichen Wert für `alt` angeben.

    Wenn Sie dieses Attribut auf eine leere Zeichenfolge (`alt=""`) setzen, bedeutet dies, dass dieses Bild _kein_ wesentlicher Bestandteil des Inhalts ist (es ist Dekoration oder ein Tracking-Pixel) und nichtvisuelle Browser es möglicherweise vom {{Glossary("Engine/Rendering", "Rendering")}} auslassen. Visuelle Browser verbergen auch das defekte Bildsymbol, wenn das `alt` Attribut leer ist und das Bild nicht angezeigt werden konnte.

    Dieses Attribut wird auch verwendet, wenn das Bild zum Text kopiert und eingefügt oder ein verlinktes Bild zu einem Lesezeichen gespeichert wird.

- `attributionsrc` {{experimental_inline}}

  - : Gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}} Header zusammen mit der Bildanforderung sendet.

    Serverseitig wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}} oder {{httpheader("Attribution-Reporting-Register-Trigger")}} Headers in der Antwort auszulösen, um eine bildbasierte [Zuweisungsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#html-based_event_sources) oder einen [Zuweisungsauslöser](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#html-based_attribution_triggers) zu registrieren. Welcher Antwort-Header zurückgesendet werden soll, hängt vom Wert des `Attribution-Reporting-Eligible` Headers ab, der die Registration ausgelöst hat.

    Das entsprechende Quell- oder Auslöserereignis wird ausgelöst, sobald der Browser die Antwort mit der Bilddatei erhält.

    > [!NOTE]
    > Weitere Details finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

    Es gibt zwei Versionen dieses Attributs, die Sie festlegen können:

    - Boolean, also nur der `attributionsrc` Name. Dies gibt an, dass Sie den {{httpheader("Attribution-Reporting-Eligible")}} Header an denselben Server senden möchten, auf den das `src` Attribut verweist. Dies ist in Ordnung, wenn Sie die Registrierung der Zuweisungsquelle oder des Zuweisungsauslösers auf demselben Server bearbeiten. Bei der Registrierung eines Zuweisungsauslösers ist diese Eigenschaft optional, und ein Boolean-Wert wird verwendet, wenn sie weggelassen wird.
    - Wert, der eine oder mehrere URLs enthält, zum Beispiel:

    ```html
    <img
      src="image-file.png"
      alt="My image file description"
      attributionsrc="https://a.example/register-source
                         https://b.example/register-source" />
    ```

    Dies ist nützlich, wenn die angeforderte Ressource nicht auf einem Server liegt, den Sie kontrollieren, oder Sie die Registrierung der Zuweisungsquelle auf einem anderen Server verwalten möchten. In diesem Fall können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcenanforderung erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}} Header an die in `attributionSrc` angegebenen URLs zusätzlich zur Ressourcenherkunft gesendet. Diese URLs können dann mit einem {{httpheader("Attribution-Reporting-Register-Source")}} oder {{httpheader("Attribution-Reporting-Register-Trigger")}} Header antworten, um die Registrierung abzuschließen.

    > [!NOTE]
    > Die Spezifikation mehrerer URLs bedeutet, dass mehrere Zuweisungsquellen bei derselben Funktion registriert werden können. Sie könnten zum Beispiel verschiedene Kampagnen haben, deren Erfolg Sie messen möchten, indem Sie verschiedene Berichte über unterschiedliche Daten erstellen.

- [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)

  - : Gibt an, ob das Abrufen des Bildes über eine {{Glossary("CORS", "CORS")}} Anfrage erfolgen muss. Bilddaten von einem [CORS-fähigen Bild](/de/docs/Web/HTML/CORS_enabled_image), das von einer CORS-Anfrage zurückgegeben wird, können im {{HTMLElement("canvas")}} Element wiederverwendet werden, ohne als "[verfälscht](/de/docs/Web/HTML/CORS_enabled_image#security_and_tainted_canvases)" markiert zu werden.

    Wenn das `crossorigin` Attribut _nicht_ angegeben ist, wird eine Non-CORS Anfrage gesendet (ohne den {{httpheader("Origin")}} Request-Header) und der Browser markiert das Bild als verfälscht und beschränkt den Zugriff auf seine Bilddaten, was seine Nutzung in {{HTMLElement("canvas")}} Elementen verhindert.

    Wenn das `crossorigin` Attribut angegeben ist, wird eine CORS-Anfrage gesendet (mit dem {{httpheader("Origin")}} Request-Header); aber wenn der Server sich nicht dafür entscheidet, den Zugriff auf die Bilddaten durch die Ursprungssite zu ermöglichen (indem er keinen {{httpheader("Access-Control-Allow-Origin")}} Antwort-Header sendet, oder die Ursprungssite nicht in einem {{httpheader("Access-Control-Allow-Origin")}} Antwort-Header enthält, den er sendet), blockiert der Browser das Laden des Bildes und protokolliert einen CORS-Fehler in der Entwicklertools-Konsole.

    Zulässige Werte:

    - `anonymous`
      - : Eine CORS-Anfrage wird ohne Anmeldeinformationen gesendet (also keine {{Glossary("cookie", "Cookies")}}, [X.509 Zertifikate](https://datatracker.ietf.org/doc/html/rfc5280) oder {{httpheader("Authorization")}} Anfrage-Header).
    - `use-credentials`
      - : Die CORS-Anfrage wird mit allen Anmeldeinformationen gesendet (also Cookies, X.509-Zertifikate und der `Authorization` Anfrage-Header). Wenn der Server die Freigabe von Anmeldeinformationen mit der Ursprungssite nicht ermöglicht (indem er den Antwort-Header `Access-Control-Allow-Credentials: true` zurücksendet), markiert der Browser das Bild als verfälscht und beschränkt den Zugriff auf seine Bilddaten.

    Wenn das Attribut einen ungültigen Wert hat, behandeln Browser es so, als ob der Wert `anonymous` verwendet wurde. Siehe [CORS Einstellungen Attribut](/de/docs/Web/HTML/Attributes/crossorigin) für zusätzliche Informationen.

- `decoding`

  - : Dieses Attribut gibt dem Browser einen Hinweis darauf, ob er das Bild-Dekodieren gleichzeitig mit dem Rendern der anderen DOM-Inhalte in einem einzigen Präsentationsschritt, der "korrekter" aussieht (`sync`), oder ob er die anderen DOM-Inhalte rendern und präsentieren und anschließend das Bild dekodieren und es später präsentieren soll (`async`). In der Praxis bedeutet `async`, dass der nächste Paint nicht auf das Dekodieren des Bildes wartet.

    Es ist oft schwierig, einen merklichen Effekt bei der Verwendung von `decoding` auf statischen `<img>` Elementen zu erkennen. Sie werden wahrscheinlich zunächst als leere Bilder gerendert, während die Bilddateien abgerufen werden (entweder aus dem Netzwerk oder aus dem Cache) und anschließend unabhängig gehandhabt werden, sodass das "Synchronisieren" von Inhaltsaktualisierungen weniger offensichtlich ist. Die Blockierung des Renderings während des Dekodierens kann jedoch, auch wenn sie oft recht klein ist, _gemessen_ werden — selbst wenn es schwierig ist, sie mit dem menschlichen Auge zu beobachten. Siehe [Was macht das Bild-Dekodierungs-Attribut tatsächlich?](https://www.tunetheweb.com/blog/what-does-the-image-decoding-attribute-actually-do/) für eine detaillierte Analyse (tunetheweb.com, 2023).

    Die Verwendung verschiedener `decoding`-Typen kann zu merklichen Unterschieden führen, wenn `<img>` Elemente dynamisch über JavaScript in den DOM eingefügt werden — siehe [`HTMLImageElement.decoding`](/de/docs/Web/API/HTMLImageElement/decoding) für mehr Details.

    Zulässige Werte:

    - `sync`
      - : Dekodiert das Bild synchron zusammen mit dem Rendern der anderen DOM-Inhalte und präsentiert alles zusammen.
    - `async`
      - : Dekodiert das Bild asynchron, nach dem Rendern und Präsentieren der anderen DOM-Inhalte.
    - `auto`
      - : Keine Präferenz für den Dekodiermodus; der Browser entscheidet, was für den Benutzer am besten ist. Dies ist der Standardwert.

- [`elementtiming`](/de/docs/Web/HTML/Attributes/elementtiming)

  - : Markiert das Bild zur Beobachtung durch die [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming) API. Der angegebene Wert wird zu einer Kennung für das beobachtete Bild-Element. Siehe auch die Seite zum [`elementtiming`](/de/docs/Web/HTML/Attributes/elementtiming) Attribut.

- `fetchpriority`

  - : Gibt einen Hinweis auf die relative Priorität, die beim Abrufen des Bildes verwendet werden soll.
    Zulässige Werte:

    - `high`
      - : Lädt das Bild mit hoher Priorität im Vergleich zu anderen Bildern.
    - `low`
      - : Lädt das Bild mit niedriger Priorität im Vergleich zu anderen Bildern.
    - `auto`
      - : Gibt keine Präferenz für die Abrufpriorität an.
        Dies ist der Standard.
        Es wird verwendet, wenn kein Wert oder ein ungültiger Wert festgelegt ist.

    Weitere Informationen finden Sie unter [`HTMLImageElement.fetchPriority`](/de/docs/Web/API/HTMLImageElement/fetchPriority).

- `height`

  - : Die intrinsische Höhe des Bildes in Pixeln. Muss eine ganze Zahl ohne Einheit sein.

    > [!NOTE]
    > Durch das Einschließen von `height` und [`width`](#width) kann das {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Bildes vom Browser berechnet werden, bevor das Bild geladen wird. Dieses Seitenverhältnis wird verwendet, um den benötigten Platz zur Anzeige des Bildes zu reservieren, was eine Verschiebung des Layouts reduziert oder sogar verhindert, wenn das Bild heruntergeladen und auf den Bildschirm gezeichnet wird. Das Reduzieren der Layoutverschiebung ist ein wesentlicher Bestandteil einer guten Benutzererfahrung und Web-Performance.

- `ismap`

  - : Dieses Boolean-Attribut zeigt an, dass das Bild Teil einer [serverseitigen Karte](https://de.wikipedia.org/wiki/Image_map#Serverseitig) ist. Wenn dies der Fall ist, werden die Koordinaten, an denen der Benutzer auf das Bild geklickt hat, an den Server gesendet.

    > [!NOTE]
    > Dieses Attribut ist nur erlaubt, wenn das `<img>` Element ein Nachkomme von einem {{htmlelement("a")}} Element mit einem gültigen [`href`](/de/docs/Web/HTML/Element/a#href) Attribut ist. Dies bietet Benutzern ohne Zeigegeräte ein alternatives Ziel.

- `loading`

  - : Gibt an, wie der Browser das Bild laden soll:

    - `eager`
      - : Läd das Bild sofort, unabhängig davon, ob das Bild derzeit im sichtbaren Viewport ist (dies ist der Standardwert).
    - `lazy`
      - : Verzögert das Laden des Bildes, bis es eine berechnete Entfernung vom Viewport erreicht, wie vom Browser definiert. Die Absicht ist, das Netzwerk und den Speicherbedarf für das Bild zu vermeiden, bis es angemessen wahrscheinlich ist, dass es benötigt wird. Dies verbessert im Allgemeinen die Leistung der Inhalte in den meisten typischen Anwendungsfällen.

    > [!NOTE]
    > Das Laden wird nur verzögert, wenn JavaScript aktiviert ist. Dies ist eine Anti-Tracking-Maßnahme, denn wenn ein Benutzeragent das verzögerte Laden unterstützen würde, wenn das Skripten deaktiviert ist, wäre es dennoch möglich, die ungefähre Scrollposition eines Benutzers während einer Sitzung zu verfolgen, indem strategisch Bilder im Seitenmarkup platziert werden, sodass ein Server nachverfolgen kann, wie viele Bilder angefordert wurden und wann.

    > [!NOTE]
    > Bilder mit `loading` auf `lazy` werden niemals geladen, wenn sie keinen sichtbaren Teil eines Elements schneiden, selbst wenn das Laden sie ändern würde, da ungeladene Bilder eine `width` und `height` von `0` haben. Die Angabe von `width` und `height` auf lazy-geladenen Bildern behebt dieses Problem und ist eine bewährte Praxis, [empfohlen von der Spezifikation](https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element). Dies hilft auch, Layoutverschiebungen zu verhindern.

- `referrerpolicy`

  - : Eine Zeichenkette, die angibt, welchen Referrer beim Abrufen der Ressource verwendet werden soll:

    - `no-referrer`: Der {{HTTPHeader("Referer")}} Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}} Header wird nicht an {{Glossary("origin", "Ursprungs")}} ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`: Der gesendete Referrer wird auf den Ursprung der referenzierten Seite beschränkt: ihr [Schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`: Der Referrer, der an andere Ursprünge gesendet wird, wird auf das Schema, den Host und den Port beschränkt. Navigationen im gleichen Ursprung enthalten weiterhin den Pfad.
    - `same-origin`: Ein Referrer wird für {{Glossary("Same-origin_policy", "gleich Ursprung")}} gesendet, aber bei Anfragen an verschiedene Ursprünge werden keine Referrer-Informationen enthalten.
    - `strict-origin`: Sendet nur den Ursprung des Dokuments als Referrer, wenn das Protokoll-Sicherheitsniveau gleich bleibt (HTTPS→HTTPS), sendet ihn jedoch nicht an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard): Sende eine vollständige URL bei einer Anfrage im gleichen Ursprung, sende nur den Ursprung, wenn das Protokoll-Sicherheitsniveau gleich bleibt (HTTPS→HTTPS), und sende keinen Header an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `unsafe-url`: Der Referrer wird den Ursprung _und_ den Pfad enthalten (aber nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder [Benutzername](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge leckt.

- `sizes`

  - : Eine oder mehrere durch Kommas getrennte Zeichenfolgen, die eine Reihe von Quellenangaben angeben. Jede Quellenangabe besteht aus:

    1. Einer [Medienbedingung](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#syntax). Diese muss beim letzten Eintrag in der Liste weggelassen werden.
    2. Einer Quellenangabenwert.

    Medienbedingungen beschreiben Eigenschaften des _Viewports_, nicht des _Bildes_. Zum Beispiel schlägt `(max-height: 500px) 1000px` vor, eine Quelle von 1000px Breite zu verwenden, wenn der _Viewport_ nicht höher als 500px ist. Da ein Quellenangabespezifikator verwendet wird, um die Breite für das Bild während des Layouts der Seite anzugeben, basiert die Medienbedingung typischerweise (aber nicht notwendigerweise) auf den [Breiten](/de/docs/Web/CSS/@media/width) Informationen.

    Quellenwertgrößen geben die beabsichtigte Anzeigebreite des Bildes an. {{Glossary("User_agent", "Benutzeragenten")}} verwenden die aktuelle Quellenwertgröße, um eine der vom `srcset` Attribut bereitgestellten Quellen auszuwählen, wenn diese Quellen mit Breiten (`w`) Deskriptoren beschrieben werden. Die gewählte Quellenwertgröße wirkt sich auf die {{Glossary("intrinsic_size", "intrinsische Größe")}} des Bildes aus (die Anzeigebreite des Bildes, wenn keine {{Glossary("CSS", "CSS")}} Stilisierung angewendet wird). Wenn das `srcset` Attribut fehlt oder keine Werte mit einem Breitendeskriptor enthält, dann hat das `sizes` Attribut keine Wirkung.

    Ein Quellenwert kann jede nicht-negative [Länge](/de/docs/Web/CSS/length) sein. Es darf keine CSS-Funktionen außer die [Mathematikfunktionen](/de/docs/Web/CSS/CSS_Functions#math_functions) verwenden. Einheiten werden in der gleichen Weise wie [Media Queries](/de/docs/Web/CSS/CSS_media_queries) interpretiert, was bedeutet, dass alle relativen Längeneinheiten relativ zur Dokumentwurzel sind und nicht zum `<img>` Element, sodass ein `em` Wert relativ zur Wurzel-Schriftgröße ist und nicht zur Schriftgröße des Bildes. [Prozentwerte](/de/docs/Web/CSS/percentage) sind nicht erlaubt.

    Zusätzlich können Sie den Wert `auto` verwenden, um die gesamte Liste der Größen zu ersetzen oder den ersten Eintrag in der Liste. Dies ist nur gültig, wenn es mit `loading="lazy"` kombiniert wird und löst sich auf die [konkrete Größe](/de/docs/Web/CSS/image) des Bildes.

- `src`
  - : Die Bild {{Glossary("URL", "URL")}}. Erforderlich für das `<img>` Element. Bei {{Glossary("Browser", "Browsern")}}, die `srcset` unterstützen, wird `src` wie ein Kandidatenbild mit einem Pixel-Dichte-Deskriptor `1x` behandelt, es sei denn, ein Bild mit diesem Pixel-Dichte-Deskriptor ist bereits in `srcset` definiert, oder `srcset` enthält `w` Deskriptoren.
- `srcset`

  - : Eine oder mehrere durch Kommas getrennte Zeichenfolgen, die mögliche Bildquellen für den {{Glossary("user_agent", "Benutzeragenten")}} angeben. Jede Zeichenfolge besteht aus:

    1. Einer {{Glossary("URL", "URL")}} zu einem Bild
    2. Optional, durch Leerzeichen gefolgt von einem der folgenden:

       - Einem Weiten-Deskriptor (eine positive ganze Zahl, gefolgt von `w`). Der Weiten-Deskriptor wird durch die Quelldarstellung geteilt, die im `sizes` Attribut angegeben ist, um die effektive Pixeldichte zu berechnen.
       - Einem Pixeldichte-Deskriptor (eine positive Fließkommazahl, gefolgt von `x`).

    Wenn kein Deskriptor angegeben ist, wird der Quelle der Standarddeskriptor von `1x` zugewiesen.

    Es ist inkorrekt, Weiten-Deskriptoren und Pixeldichte-Deskriptoren im selben `srcset` Attribut zu mischen. Doppelte Deskriptoren (z.B. zwei Quellen im selben `srcset`, die beide mit `2x` beschrieben werden) sind ebenfalls ungültig.

    Wenn das `srcset` Attribut Weiten-Deskriptoren verwendet, muss auch das `sizes` Attribut vorhanden sein, oder das `srcset` wird ignoriert.

    Der Benutzeragent wählt nach eigenem Ermessen eine der verfügbaren Quellen. Dies bietet ihnen erheblichen Spielraum, um ihre Auswahl an Dingen wie Benutzerpräferenzen oder {{Glossary("bandwidth", "Bandbreitenbedingungen")}} anzupassen. Siehe unseren [Leitfaden zu Responsiven Bildern](/de/docs/Web/HTML/Responsive_images) für ein Beispiel.

- `width`
  - : Die intrinsische Breite des Bildes in Pixeln. Muss eine ganze Zahl ohne Einheit sein.
- `usemap`

  - : Die partielle {{Glossary("URL", "URL")}} (beginnend mit `#`) einer mit dem Element verknüpften [Bildkarte](/de/docs/Web/HTML/Element/map).

    > [!NOTE]
    > Sie können dieses Attribut nicht verwenden, wenn das `<img>` Element innerhalb eines {{htmlelement("a")}} oder {{HTMLElement("button")}} Elements ist.

### Veraltete Attribute

- `align` {{deprecated_inline}}

  - : Richtet das Bild im Kontext auf, der es umgibt. Verwenden Sie die {{cssxref('float')}} und/oder {{cssxref('vertical-align')}} {{Glossary("CSS", "CSS")}} Eigenschaften anstelle dieses Attributs. Erlaubte Werte:

    - `top`
      - : Entspricht `vertical-align: top` oder `vertical-align: text-top`
    - `middle`
      - : Entspricht `vertical-align: -moz-middle-with-baseline`
    - `bottom`
      - : Der Standardwert, entspricht `vertical-align: unset` oder `vertical-align: initial`
    - `left`
      - : Entspricht `float: left`
    - `right`
      - : Entspricht `float: right`

- `border` {{deprecated_inline}}
  - : Die Breite eines Randes um das Bild. Verwenden Sie die {{cssxref('border')}} {{Glossary("CSS", "CSS")}} Eigenschaft stattdessen.
- `hspace` {{deprecated_inline}}
  - : Die Anzahl der Pixel Leerraum auf der linken und rechten Seite des Bildes. Verwenden Sie stattdessen die {{cssxref('margin')}} CSS Eigenschaft.
- `longdesc` {{deprecated_inline}}

  - : Ein Link zu einer ausführlicheren Beschreibung des Bildes. Mögliche Werte sind eine {{Glossary("URL", "URL")}} oder eine Element [`id`](/de/docs/Web/HTML/Global_attributes/id).

    > [!NOTE]
    > Dieses Attribut wird in der neuesten {{Glossary("W3C", "W3C")}} Version, [HTML 5.2](https://html.spec.whatwg.org/multipage/obsolete.html#element-attrdef-img-longdesc), erwähnt, wurde jedoch aus dem {{Glossary("WHATWG", "WHATWG")}}'s [HTML Living Standard](https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element) entfernt. Es hat eine ungewisse Zukunft; Autoren sollten eine {{Glossary("WAI", "WAI")}}-{{Glossary("ARIA", "ARIA")}} Alternative wie [`aria-describedby`](https://www.w3.org/TR/wai-aria-1.1/#aria-describedby) oder [`aria-details`](https://www.w3.org/TR/wai-aria-1.1/#aria-details) verwenden.

- `name` {{deprecated_inline}}
  - : Ein Name für das Element. Verwenden Sie stattdessen das [`id`](/de/docs/Web/HTML/Global_attributes/id) Attribut.
- `vspace` {{deprecated_inline}}
  - : Die Anzahl der Pixel Leerraum oberhalb und unterhalb des Bildes. Verwenden Sie stattdessen die {{cssxref('margin')}} CSS Eigenschaft.

## Styling mit CSS

`<img>` ist ein [ersetztes Element](/de/docs/Web/CSS/Replaced_element); es hat standardmäßig einen {{cssxref("display")}} Wert von `inline`, aber seine Standardabmessungen werden durch die intrinsischen Werte des eingebetteten Bildes definiert, als wäre es `inline-block`. Sie können Eigenschaften wie {{cssxref("border")}}/{{cssxref("border-radius")}}, {{cssxref("padding")}}/{{cssxref("margin")}}, {{cssxref("width")}}, {{cssxref("height")}}, usw. auf einem Bild festlegen.

`<img>` hat keine Baseline, also wenn Bilder in einem Inline-Formatierungskontext mit {{cssxref("vertical-align", "vertical-align: baseline")}} verwendet werden, wird der untere Rand des Bildes auf der Textbase line platziert.

Sie können die {{cssxref("object-position")}} Eigenschaft verwenden, um das Bild innerhalb der Box des Elements zu positionieren, und die {{cssxref("object-fit")}} Eigenschaft, um die Größe des Bildes innerhalb der Box anzupassen (zum Beispiel, ob das Bild in die Box passen oder sie füllen soll, selbst wenn dabei ein Beschnitt erforderlich ist).

Je nach Typ kann ein Bild eine intrinsische Breite und Höhe haben. Für einige Bildtypen sind jedoch keine intrinsischen Abmessungen erforderlich. {{Glossary("SVG", "SVG")}} Bilder beispielsweise haben keine intrinsischen Abmessungen, wenn ihr Wurzel {{SVGElement("svg")}} Element keine `width` oder `height` darauf gesetzt hat.

## Barrierefreiheit

### Sinnvolle alternative Beschreibungen verfassen

Der Wert des `alt` Attributs sollte eine klare und prägnante Textersetzung für den Inhalt des Bildes bieten. Er sollte nicht das Vorhandensein des Bildes selbst oder den Dateinamen des Bildes beschreiben. Wenn das `alt` Attribut absichtlich weggelassen wird, weil das Bild keinen textuellen Gegenwert hat, sollten Sie alternative Methoden in Betracht ziehen, um darzustellen, was das Bild vermitteln soll.

#### Nicht tun

```html example-bad
<img alt="image" src="penguin.jpg" />
```

#### Tun

```html example-good
<img alt="A Penguin on a beach." src="penguin.jpg" />
```

Ein wichtiger Barrierefreiheitstest ist es, den Inhalt des `alt` Attributs zusammen mit dem vorhergehenden Textinhalt zu lesen, um zu sehen, ob er die gleiche Bedeutung wie das Bild vermittelt. Zum Beispiel, wenn das Bild durch den Satz "Auf meinen Reisen sah ich ein niedliches kleines Tier:" vorangestellt wird, könnte das _Nicht tun_ Beispiel von einem Screenreader als "Auf meinen Reisen sah ich ein niedliches kleines Tier: Bild" vorgelesen werden, was keinen Sinn ergibt. Das _Tun_ Beispiel könnte von einem Screenreader als "Auf meinen Reisen sah ich ein niedliches kleines Tier: Ein Pinguin am Strand." vorgelesen werden, was sinnvoll ist.

Für Bilder, die eine Aktion auslösen, zum Beispiel Bilder, die in einem {{htmlelement("a")}} oder {{htmlelement("button")}} Element verschachtelt sind, sollten Sie erwägen, die ausgelöste Aktion im `alt` Attributswert zu beschreiben. Zum Beispiel könnten Sie `alt="nächste Seite"` anstelle von `alt="Pfeil rechts"` schreiben. Sie könnten auch in Betracht ziehen, eine optionale, weitere Beschreibung in einem `title` Attribut hinzuzufügen; dies könnte von Screenreadern gelesen werden, wenn der Benutzer es anfordert.

Wenn ein `alt` Attribut bei einem Bild nicht vorhanden ist, können einige Screenreader stattdessen den Dateinamen des Bildes ankündigen. Dies kann eine verwirrende Erfahrung sein, wenn der Dateiname nicht repräsentativ für den Inhalt des Bildes ist.

- [Ein Entscheidungsbaum für Alt • Bilder • WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/images/decision-tree/)
- [Alt-texte: Der ultimative Leitfaden — Axess Lab](https://axesslab.com/alt-texts/)
- [Wie man großartige Alt-Texte entwirft: Eine Einführung | Deque](https://www.deque.com/blog/great-alt-text-introduction/)
- [MDN Verstehen von WCAG, Richtlinie 1.1 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verstehen des Erfolgskriteriums 1.1.1 | W3C Verstehen von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

### SVG als Bild identifizieren

Aufgrund eines [VoiceOver Bugs](https://webkit.org/b/216364) kündigt VoiceOver SVG Bilder nicht korrekt als Bilder an. Fügen Sie [`role="img"`](/de/docs/Web/Accessibility/ARIA/Roles/img_role) zu allen `<img>` Elementen mit SVG-Quelldateien hinzu, um sicherzustellen, dass unterstützende Technologien das SVG korrekt als Bildinhalt ankündigen.

```html
<img src="mdn.svg" alt="MDN" role="img" />
```

### Das title Attribut

Das [`title`](/de/docs/Web/HTML/Global_attributes/title) Attribut ist kein akzeptabler Ersatz für das `alt` Attribut. Zusätzlich sollten Sie es vermeiden, den Wert des `alt` Attributs in einem `title` Attribut, das auf demselben Bild deklariert ist, zu duplizieren. Andernfalls kann es vorkommen, dass einige Screenreader denselben Text zweimal ankündigen, was zu einer verwirrenden Erfahrung führt.

Das `title` Attribut sollte auch nicht als ergänzende Beschriftungsinformation verwendet werden, um die `alt` Beschreibung eines Bildes zu begleiten. Wenn ein Bild eine Beschriftung benötigt, verwenden Sie die [`figure`](/de/docs/Web/HTML/Element/figure) und [`figcaption`](/de/docs/Web/HTML/Element/figcaption) Elemente.

Der Wert des `title` Attributs wird dem Benutzer in der Regel als Tooltip präsentiert, der kurz nach dem Bewegen des Cursors über das Bild erscheint. Obwohl dies dem Benutzer zusätzliche Informationen bieten _kann_, sollten Sie nicht davon ausgehen, dass der Benutzer es sehen wird: der Benutzer verfügt möglicherweise nur über eine Tastatur oder Touchscreen. Wenn Sie Informationen haben, die besonders wichtig oder wertvoll für den Benutzer sind, präsentieren Sie sie inline mit einer der oben genannten Methoden, anstatt `title` zu verwenden.

- [Die Verwendung des HTML title Attributs – aktualisiert | The Paciello Group](https://www.tpgi.com/using-the-html-title-attribute-updated/)

## Beispiele

### Alternativtext

Das folgende Beispiel bettet ein Bild in die Seite ein und enthält alternativen Text für die Barrierefreiheit.

```html
<img src="favicon144.png" alt="MDN" />
```

{{ EmbedLiveSample('Alternative_text', '100%', '160') }}

### Bildlink

Dieses Beispiel baut auf dem vorherigen auf und zeigt, wie das Bild in einen Link umgewandelt wird. Dazu wird das `<img>` Tag in das {{HTMLElement("a")}} verschachtelt. Sie sollten den alternativen Text so gestalten, dass er die Ressource beschreibt, auf die der Link zeigt, als ob Sie stattdessen einen Textlink verwenden würden.

```html
<a href="https://developer.mozilla.org">
  <img src="favicon144.png" alt="Visit the MDN site" />
</a>
```

{{ EmbedLiveSample('Image_link', '100%', '160') }}

### Verwendung des srcset Attributs

In diesem Beispiel fügen wir ein `srcset` Attribut mit einem Verweis auf eine hochauflösende Version des Logos hinzu; dies wird anstelle des `src` Bildes auf hochauflösenden Geräten geladen. Das im `src` Attribut angegebene Bild wird als `1x` Kandidat in {{Glossary("User_agent", "Benutzeragenten")}} gezählt, die `srcset` unterstützen.

```html
<img src="favicon72.png" alt="MDN" srcset="favicon144.png 2x" />
```

{{EmbedLiveSample("Using_the_srcset_attribute", "100%", "160")}}

### Verwendung der srcset und sizes Attribute

Das `src` Attribut wird in {{Glossary("User_agent", "Benutzeragenten")}}, die `srcset` unterstützen, ignoriert, wenn `w` Deskriptoren enthalten sind. Wenn die `(max-width: 600px)` Medienbedingung erfüllt ist, wird das 200 Pixel breite Bild geladen (es ist dasjenige, das `200px` am nächsten kommt); andernfalls wird das andere Bild geladen.

```html
<img
  src="clock-demo-200px.png"
  alt="The time is 12:45."
  srcset="clock-demo-200px.png 200w, clock-demo-400px.png 400w"
  sizes="(max-width: 600px) 200px, 50vw" />
```

{{EmbedLiveSample("Using_the_srcset_and_sizes_attributes", "100%", 350)}}

> [!NOTE]
> Um die Anpassung der Größe in Aktion zu sehen, {{LiveSampleLink('Using_the_srcset_and_sizes_attributes', 'sehen Sie sich das Beispiel auf einer separaten Seite an')}}, sodass Sie den Inhaltsbereich tatsächlich vergrößern können.

## Sicherheits- und Datenschutzbedenken

Obwohl `<img>` Elemente unschuldige Verwendungen haben, können sie unerwünschte Folgen für die Sicherheit und den Datenschutz der Benutzer haben. Weitere Informationen und Gegenmaßnahmen finden Sie unter [Referer Header: Datenschutz und Sicherheitsbedenken](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns).

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flow-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasen-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#embedded_content"
          >Eingebetteter Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#palpable_content"
          >Spürbarer Inhalt</a
        >. Wenn das Element ein <code>usemap</code> Attribut hat, gehört es auch zur Kategorie der interaktiven Inhalte.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "void element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss ein Start-Tag haben und darf kein End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Jedes Element, das eingebetteten Inhalt akzeptiert.</td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA Rolle</th>
      <td>
        <ul>
          <li>
            mit nicht leerem <code>alt</code> Attribut oder keinem
            <code>alt</code> Attribut:
            <code
              ><a href="/de/docs/Web/Accessibility/ARIA/Roles/img_role"
                ><code>img</code></a
              ></code
            >
          </li>
          <li>
            mit leerem <code>alt</code> Attribut:
            <a href="/de/docs/Web/Accessibility/ARIA/Roles/presentation_role"
              ><code>presentation</code></a
            >
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA Rollen</th>
      <td>
        <ul>
          <li>
            mit nicht leerem <code>alt</code> Attribut:
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
            mit leerem <code>alt</code> Attribut, <a href="/de/docs/Web/Accessibility/ARIA/Roles/none_role"><code>none</code></a>
            oder <a href="/de/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a>
          </li>
          <li>
            ohne <code>alt</code> Attribut, keine <code>role</code> erlaubt
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM Schnittstelle</th>
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
- {{cssxref("object-fit")}}, {{cssxref("object-position")}}, {{cssxref("image-orientation")}}, {{cssxref("image-rendering")}}, und {{cssxref("image-resolution")}}: Bildbezogene CSS Eigenschaften.
- [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) Schnittstelle für dieses Element
- [HTML Bilder](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images)
- [Leitfaden für Bilddateitypen und -formate](/de/docs/Web/Media/Guides/Formats/Image_types)
- [Responsiven Bilder](/de/docs/Web/HTML/Responsive_images)
