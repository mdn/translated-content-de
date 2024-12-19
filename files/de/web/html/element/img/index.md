---
title: "<img>: Das Image Embed-Element"
slug: Web/HTML/Element/img
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{HTMLSidebar}}

Das **`<img>`** [HTML](/de/docs/Web/HTML) Element bettet ein Bild in das Dokument ein.

{{EmbedInteractiveExample("pages/tabbed/img.html", "tabbed-standard")}}

Das obige Beispiel zeigt die Verwendung des `<img>`-Elements:

- Das `src`-Attribut ist **erforderlich** und enthält den Pfad zum Bild, das Sie einbetten möchten.
- Das `alt`-Attribut enthält einen Textersatz für das Bild, der verpflichtend und **äußerst nützlich** für die Barrierefreiheit ist – Bildschirmleser lesen den Attributwert ihren Nutzern vor, damit sie wissen, was das Bild bedeutet. Alternativer Text wird auch angezeigt, wenn das Bild aus irgendeinem Grund nicht geladen werden kann: zum Beispiel bei Netzwerkfehlern, Inhaltsblockierung oder Linkverfall.

Es gibt viele andere Attribute, um verschiedene Zwecke zu erreichen:

- Kontrolle von [Referrer](/de/docs/Web/HTTP/Headers/Referrer-Policy)/{{Glossary("CORS", "CORS")}} für Sicherheit und Datenschutz: siehe [`crossorigin`](#crossorigin) und [`referrerpolicy`](#referrerpolicy).
- Verwenden Sie sowohl [`width`](#width) als auch [`height`](#height), um die intrinsische Größe des Bildes festzulegen, damit es Platz einnimmt, bevor es geladen wird, um Verschiebungen des Inhaltslayouts zu minimieren.
- Hinweise zu responsiven Bildern mit [`sizes`](#sizes) und [`srcset`](#srcset) (siehe auch das {{htmlelement("picture")}} Element und unser [Responsive images](/de/docs/Web/HTML/Responsive_images) Tutorial).

## Unterstützte Bildformate

Der HTML-Standard listet nicht auf, welche Bildformate unterstützt werden sollen, daher können {{Glossary("user_agent", "user agents")}} unterschiedliche Formate unterstützen.

> [!NOTE]
> Der [Image file type and format guide](/de/docs/Web/Media/Formats/Image_types) bietet umfassende Informationen über Bildformate und ihre Unterstützung in Webbrowsern.
> Dieser Abschnitt ist nur eine Zusammenfassung!

Die am häufigsten im Web verwendeten Bilddateiformate sind:

- [APNG (Animated Portable Network Graphics)](/de/docs/Web/Media/Formats/Image_types#apng_animated_portable_network_graphics) — Gute Wahl für verlustfreie Animationssequenzen (GIF ist weniger performant)
- [AVIF (AV1 Image File Format)](/de/docs/Web/Media/Formats/Image_types#avif_image) — Gute Wahl für Bilder und animierte Bilder aufgrund hoher Leistung.
- [GIF (Graphics Interchange Format)](/de/docs/Web/Media/Formats/Image_types#gif_graphics_interchange_format) — Gute Wahl für _einfache_ Bilder und Animationen.
- [JPEG (Joint Photographic Expert Group image)](/de/docs/Web/Media/Formats/Image_types#jpeg_joint_photographic_experts_group_image) — Gute Wahl für verlustbehaftete Komprimierung von Standbildern (derzeit am beliebtesten).
- [PNG (Portable Network Graphics)](/de/docs/Web/Media/Formats/Image_types#png_portable_network_graphics) — Gute Wahl für verlustfreie Komprimierung von Standbildern (etwas bessere Qualität als JPEG).
- [SVG (Scalable Vector Graphics)](/de/docs/Web/Media/Formats/Image_types#svg_scalable_vector_graphics) — Vektorbildformat. Verwenden Sie es für Bilder, die in unterschiedlichen Größen exakt gezeichnet werden müssen.
- [WebP (Web Picture format)](/de/docs/Web/Media/Formats/Image_types#webp_image) — Hervorragende Wahl für Bilder und animierte Bilder

Formate wie [WebP](/de/docs/Web/Media/Formats/Image_types#webp_image) und [AVIF](/de/docs/Web/Media/Formats/Image_types#avif_image) werden empfohlen, da sie viel besser als PNG, JPEG, GIF für Stand- und animierte Bilder performen.

SVG bleibt das empfohlene Format für Bilder, die in verschiedenen Größen exakt gezeichnet werden müssen.

## Bildladefehler

Wenn ein Fehler beim Laden oder Rendern eines Bildes auftritt und ein `onerror` Ereignishandler für das [`error`](/de/docs/Web/API/HTMLElement/error_event) Ereignis gesetzt wurde, wird dieser Ereignishandler aufgerufen. Dies kann in mehreren Situationen passieren, einschließlich:

- Das `src`-Attribut ist leer (`""`) oder `null`.
- Die `src` {{Glossary("URL", "URL")}} ist dieselbe wie die URL der Seite, auf der sich der Benutzer momentan befindet.
- Das Bild ist in irgendeiner Weise beschädigt, die verhindert, dass es geladen wird.
- Die Metadaten des Bildes sind so beschädigt, dass es unmöglich ist, seine Dimensionen abzurufen, und es wurden keine Dimensionen in den Attributen des `<img>` Elements angegeben.
- Das Bild ist in einem vom {{Glossary("user_agent", "user agent")}} nicht unterstützten Format.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- [`alt`](/de/docs/Web/API/HTMLImageElement/alt#usage_notes)

  - : Definiert Text, der das Bild auf der Seite ersetzen kann.

    > [!NOTE]
    > Browser zeigen nicht immer Bilder an. Es gibt eine Reihe von Situationen, in denen ein Browser möglicherweise keine Bilder anzeigt, wie:
    >
    > - Nicht-visuelle Browser (wie die, die von Menschen mit Sehbehinderungen verwendet werden)
    > - Der Benutzer entscheidet sich gegen das Anzeigen von Bildern (Bandbreite sparen, Datenschutzgründe)
    > - Das Bild ist ungültig oder ein [nicht unterstützter Typ](#unterstützte_bildformate)
    >
    > In diesen Fällen kann der Browser das Bild durch den Text im `alt` Attribut des Elements ersetzen. Aus diesen und anderen Gründen sollten Sie nach Möglichkeit einen nützlichen Wert für `alt` angeben.

    Dieses Attribut auf einen leeren String (`alt=""`) zu setzen, zeigt an, dass dieses Bild _kein_ wesentlicher Bestandteil des Inhalts ist (es ist Dekoration oder ein Tracking-Pixel) und dass nicht-visuelle Browser es beim {{Glossary("Engine/Rendering", "Rendering")}} auslassen können. Visuelle Browser werden auch das defekte Bildsymbol ausblenden, wenn das `alt` Attribut leer ist und das Bild nicht angezeigt werden konnte.

    Dieses Attribut wird auch verwendet, wenn das Bild in Text kopiert und eingefügt oder ein verknüpftes Bild in einem Lesezeichen gespeichert wird.

- `attributionsrc` {{experimental_inline}}

  - : gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}} Header zusammen mit der Bildanfrage sendet.

    Auf der Serverseite wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}} oder {{httpheader("Attribution-Reporting-Register-Trigger")}} Headers in der Antwort auszulösen, um eine bildbasierte [Zuweisungsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#html-based_event_sources) oder [Zuweisungsauslöser](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#html-based_attribution_triggers) entsprechend zu registrieren. Welcher Antwortheader zurückgesendet werden soll, hängt vom Wert des `Attribution-Reporting-Eligible` Headers ab, der die Registrierung ausgelöst hat.

    Das entsprechende Quell- oder Auslöserereignis wird ausgelöst, sobald der Browser die Antwort mit der Bilddatei erhält.

    > [!NOTE]
    > Siehe die [Attribut-Reporting-API](/de/docs/Web/API/Attribution_Reporting_API) für weitere Details.

    Es gibt zwei Versionen dieses Attributs, die Sie festlegen können:

    - Boolean, d.h. nur der `attributionsrc` Name. Dies gibt an, dass Sie möchten, dass der {{httpheader("Attribution-Reporting-Eligible")}} Header an denselben Server gesendet wird, auf den das `src` Attribut verweist. Dies ist in Ordnung, wenn Sie die Registrierung der Zuweisungsquelle oder des Auslösers auf demselben Server verarbeiten. Beim Registrieren eines Zuweisungsauslösers ist diese Eigenschaft optional und es wird ein boolean Wert verwendet, wenn sie weggelassen wird.
    - Wert, der eine oder mehrere URLs enthält, zum Beispiel:

    ```html
    <img
      src="image-file.png"
      alt="My image file description"
      attributionsrc="https://a.example/register-source
                         https://b.example/register-source" />
    ```

    Dies ist nützlich in Fällen, in denen die angeforderte Ressource nicht auf einem Server liegt, den Sie kontrollieren, oder Sie die Registrierung der Zuweisungsquelle auf einem anderen Server verarbeiten möchten. In diesem Fall können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcenanforderung erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}} Header an die in `attributionSrc` angegebene(n) URL(s) zusätzlich zum Ursprungsserver gesendet. Diese URLs können dann mit einem {{httpheader("Attribution-Reporting-Register-Source")}} oder {{httpheader("Attribution-Reporting-Register-Trigger")}} Header entsprechend antworten, um die Registrierung abzuschließen.

    > [!NOTE]
    > Das Angeben mehrerer URLs bedeutet, dass mehrere Zuweisungsquellen für dasselbe Feature registriert werden können. Sie könnten zum Beispiel verschiedene Kampagnen haben, deren Erfolg Sie messen möchten, indem Sie verschiedene Berichte über verschiedene Daten generieren.

- [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)

  - : Gibt an, ob das Abrufen des Bildes mit einer {{Glossary("CORS", "CORS")}} Anfrage durchgeführt werden muss. Bilddaten von einem [CORS-aktivierten Bild](/de/docs/Web/HTML/CORS_enabled_image), das von einer CORS-Anfrage zurückgegeben wird, können im {{HTMLElement("canvas")}} Element ohne Markierung als "[tainted](/de/docs/Web/HTML/CORS_enabled_image#security_and_tainted_canvases)" wiederverwendet werden.

    Wenn das `crossorigin` Attribut _nicht_ angegeben ist, wird eine Nicht-CORS-Anfrage gesendet (ohne den {{httpheader("Origin")}} Anfrage-Header), und der Browser markiert das Bild als "tainted" und beschränkt den Zugriff auf seine Bilddaten, um seine Verwendung in {{HTMLElement("canvas")}} Elementen zu verhindern.

    Wenn das `crossorigin` Attribut _angegeben_ wird, wird eine CORS-Anfrage gesendet (mit dem {{httpheader("Origin")}} Anfrage-Header); aber wenn der Server nicht zugesteht, den Quellseiten die Nutzung der Bilddaten über das Quellstandort-übergreifende Nutzen zu erlauben (durch keine {{httpheader("Access-Control-Allow-Origin")}} Antwort-Header zu senden oder den Ursprung der Seite nicht in einem {{httpheader("Access-Control-Allow-Origin")}} Antwort-Header anzugeben), blockiert der Browser das Laden des Bildes und protokolliert einen CORS-Fehler in der Entwicklerkonsole.

    Erlaubte Werte:

    - `anonymous`
      - : Eine CORS-Anfrage wird ohne Anmeldedaten gesendet (das heißt, keine {{Glossary("cookie", "Cookies")}}, [X.509-Zertifikate](https://datatracker.ietf.org/doc/html/rfc5280) oder {{httpheader("Authorization")}} Anfrage-Header).
    - `use-credentials`
      - : Die CORS-Anfrage wird mit allen Anmeldedaten gesendet (das heißt, Cookies, X.509-Zertifikate und der `Authorization` Anfrage-Header). Wenn der Server nicht zustimmt, Anmeldedaten mit der Quellseite zu teilen (indem er den `Access-Control-Allow-Credentials: true` Antwort-Header zurücksendet), markiert der Browser das Bild als "tainted" und beschränkt den Zugriff auf seine Bilddaten.

    Wenn das Attribut einen ungültigen Wert hat, behandeln Browser es, als ob der Wert `anonymous` verwendet wurde. Weitere Informationen finden Sie in den [CORS-Einstellungen der Attribute](/de/docs/Web/HTML/Attributes/crossorigin).

- `decoding`

  - : Dieses Attribut bietet einen Hinweis an den Browser, ob er die Bilddekodierung zusammen mit dem Rendern des anderen DOM-Inhalts in einem einzigen Präsentationsschritt, der "korrekter" aussieht (`sync`), oder zuerst den anderen DOM-Inhalt rendern und präsentieren und dann das Bild dekodieren und später präsentieren soll (`async`). In der Praxis bedeutet `async`, dass das nächste Darstellungsbild nicht darauf wartet, dass das Bild dekodiert wird.

    Es ist oft schwierig, einen merklichen Effekt bei der Verwendung von `decoding` auf statischen `<img>`-Elementen wahrzunehmen. Sie werden wahrscheinlich zunächst als leere Bilder gerendert, während die Bilddateien abgerufen werden (entweder aus dem Netzwerk oder aus dem Cache) und dann unabhängig verarbeitet, sodass das "Synchronisieren" der Inhaltsänderungen weniger offensichtlich ist. Das Blockieren des Renderns, während die Kodierung stattfindet, kann jedoch, während es oft sehr gering ist, _gemessen_ werden – auch wenn es mit dem menschlichen Auge schwer zu beobachten ist. Siehe [Was macht das Bilddecodierungs-Attribut tatsächlich?](https://www.tunetheweb.com/blog/what-does-the-image-decoding-attribute-actually-do/) für eine detaillierte Analyse (tunetheweb.com, 2023).

    Die Verwendung unterschiedlicher `decoding`-Typen kann zu deutlicheren Unterschieden führen, wenn `<img>`-Elemente dynamisch per JavaScript in den DOM eingefügt werden – siehe [`HTMLImageElement.decoding`](/de/docs/Web/API/HTMLImageElement/decoding) für weitere Informationen.

    Erlaubte Werte:

    - `sync`
      - : Dekodieren Sie das Bild synchron zusammen mit dem Rendern des anderen DOM-Inhalts und präsentieren Sie alles zusammen.
    - `async`
      - : Dekodieren Sie das Bild asynchron, nachdem das andere DOM-Inhalt gerendert und präsentiert wurde.
    - `auto`
      - : Keine Präferenz für den Dekodierungsmodus; der Browser entscheidet, was für den Benutzer am besten ist. Dies ist der Standardwert.

- [`elementtiming`](/de/docs/Web/HTML/Attributes/elementtiming)

  - : Markiert das Bild für die Beobachtung durch die [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming) API. Der angegebene Wert wird zu einem Bezeichner für das beobachtete Bild-Element. Siehe auch die [`elementtiming`](/de/docs/Web/HTML/Attributes/elementtiming) Attributseite.

- `fetchpriority`

  - : Gibt einen Hinweis auf die relative Priorität an, die beim Abrufen des Bildes verwendet werden soll.
    Erlaubte Werte:

    - `high`
      - : Rufen Sie das Bild mit hoher Priorität im Verhältnis zu anderen Bildern ab.
    - `low`
      - : Rufen Sie das Bild mit niedriger Priorität im Verhältnis zu anderen Bildern ab.
    - `auto`
      - : Keine Präferenz für die Abrufpriorität.
        Dies ist der Standardwert.
        Er wird verwendet, wenn kein Wert oder ein ungültiger Wert festgelegt ist.

    Weitere Informationen finden Sie unter [`HTMLImageElement.fetchPriority`](/de/docs/Web/API/HTMLImageElement/fetchPriority).

- `height`

  - : Die intrinsische Höhe des Bildes in Pixeln. Muss eine ganze Zahl ohne Einheit sein.

    > [!NOTE]
    > Die Einschließung von `height` und [`width`](#width) ermöglicht es dem Browser, das {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Bildes zu berechnen, bevor das Bild geladen wird. Dieses Seitenverhältnis wird verwendet, um den für die Darstellung des Bildes benötigten Platz zu reservieren, wodurch eine Layoutverschiebung reduziert oder sogar verhindert wird, wenn das Bild heruntergeladen und auf den Bildschirm gemalt wird. Die Reduzierung der Layoutverschiebung ist eine wichtige Komponente für eine gute Benutzererfahrung und Web-Performance.

- `ismap`

  - : Dieses Boolean-Attribut gibt an, dass das Bild Teil einer [Server-seitigen Karte](https://en.wikipedia.org/wiki/Image_map#Server-side) ist. Wenn ja, werden die Koordinaten, an denen der Benutzer auf das Bild geklickt hat, an den Server gesendet.

    > [!NOTE]
    > Dieses Attribut ist nur erlaubt, wenn das `<img>` Element ein Nachkomme eines {{htmlelement("a")}} Elements mit einem gültigen [`href`](/de/docs/Web/HTML/Element/a#href) Attribut ist. Dies gibt Benutzern ohne Eingabegeräte ein alternatives Ziel.

- `loading`

  - : Gibt an, wie der Browser das Bild laden soll:

    - `eager`
      - : Lädt das Bild sofort, unabhängig davon, ob sich das Bild momentan im sichtbaren Bereich befindet oder nicht (das ist der Standardwert).
    - `lazy`
      - : Verzichtet auf das Laden des Bildes, bis es einen berechneten Abstand zum Blickfeld erreicht, wie er vom Browser definiert ist. Der Zweck besteht darin, das Netzwerk- und Speicherbandbreite zu sparen, bis es wahrscheinlich ist, dass es benötigt wird. Dies verbessert allgemein die Leistung des Inhalts in den meisten typischen Anwendungsfällen.

    > [!NOTE]
    > Das Laden wird nur verzögert, wenn JavaScript aktiviert ist. Dies ist eine Anti-Tracking-Maßnahme, da es immer noch möglich wäre, die ungefähre Scrollposition eines Benutzers während einer Sitzung zu verfolgen, indem strategisch Bilder im Markup einer Seite platziert werden, sodass ein Server verfolgen kann, wie viele Bilder angefordert werden und wann.

    > [!NOTE]
    > Bilder mit `loading` auf `lazy` gesetztem Wert werden niemals geladen, wenn sie keinen sichtbaren Teil eines Elements schneiden, selbst wenn das Laden diese Bedingung ändern würde, da nicht geladene Bilder eine `width` und `height` von `0` haben. `width` und `height` auf verzögert geladenen Bildern zu setzen, behebt dieses Problem und wird als bewährte Praxis, [von der Spezifikation empfohlen](https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element). So wird auch geholfen, Layoutverschiebungen zu vermeiden.

- `referrerpolicy`

  - : Ein String, der angibt, welche Referrer beim Abrufen der Ressource verwendet werden sollen:

    - `no-referrer`: Der {{HTTPHeader("Referer")}} Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}} Header wird nicht an {{Glossary("origin", "Origin")}}s ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`: Der gesendete Referrer wird auf den Ursprung der verweisenden Seite begrenzt: sein [Schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`: Der gesendete Referrer an andere Ursprünge wird auf das Schema, den Host und den Port begrenzt sein. Navigationen im gleichen Ursprung enthalten weiterhin den Pfad.
    - `same-origin`: Ein Referrer wird für {{Glossary("Same-origin_policy", "gleiches Ursprung")}} gesendet, aber ursprungsübergreifende Anfragen enthalten keine Referrer-Informationen.
    - `strict-origin`: Sendet nur den Ursprung des Dokuments als Referrer, wenn das Protokollsicherheitsniveau gleich bleibt (HTTPS→HTTPS), aber nicht an eine weniger sichere Zieladresse (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard): Sendet eine vollständige URL, wenn eine gleiche Ursprungsanfrage durchgeführt wird, sendet nur den Ursprung, wenn das Protokollsicherheitsniveau gleich bleibt (HTTPS→HTTPS) und sendet keinen Header an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `unsafe-url`: Der Referrer beinhaltet den Ursprung _und_ den Pfad (aber nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder den [Benutzernamen](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, weil er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge offenlegt.

- `sizes`

  - : Einen oder mehrere Strings, getrennt durch Kommata, die eine Reihe von Quellgrößen angeben. Jede Quellgröße besteht aus:

    1. Einer [Medienbedingung](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#syntax). Diese muss für das letzte Element in der Liste weggelassen werden.
    2. Einem Quellgrößenwert.

    Medienbedingungen beschreiben Eigenschaften des _Ansichtsbereichs_, nicht des _Bildes_. Zum Beispiel schlägt `(max-height: 500px) 1000px` vor, eine Quelle von 1000px Breite zu verwenden, wenn der _Ansichtsbereich_ nicht höher als 500px ist.

    Quellgrößenwerte geben die beabsichtigte Darstellungsgröße des Bildes an. {{Glossary("User_agent", "User Agents")}} verwenden die aktuelle Quellgröße, um eine der durch das `srcset`-Attribut bereitgestellten Quellen auszuwählen, wenn diese Quellen mit Breiten (`w`)-Deskriptoren beschrieben werden. Die ausgewählte Quellgröße beeinflusst die {{Glossary("intrinsic_size", "intrinsische Größe")}} des Bildes (die Darstellungsgröße des Bildes, wenn keine {{Glossary("CSS", "CSS")}}-Stile angewendet werden). Wenn das `srcset`-Attribut fehlt oder keine Werte mit einem Breiten-Deskriptor enthält, hat das `sizes`-Attribut keine Wirkung.

- `src`
  - : Die Bild-{{Glossary("URL", "URL")}}. Pflichtfeld für das `<img>`-Element. In {{Glossary("Browser", "Browsern")}}, die `srcset` unterstützen, wird `src` wie ein Kandidatenbild mit einem Pixeldichte-Deskriptor `1x` behandelt, es sei denn, ein Bild mit diesem Pixeldichte-Deskriptor ist bereits in `srcset` definiert, oder `srcset` enthält `w`-Deskriptoren.
- `srcset`

  - : Einen oder mehrere Strings, getrennt durch Kommata, die mögliche Bildquellen angeben, die der {{Glossary("user_agent", "User-Agent")}} verwenden kann. Jeder String besteht aus:

    1. Einer {{Glossary("URL", "URL")}} zu einem Bild
    2. Optional gefolgt von einem:

       - Einem Breiten-Deskriptor (eine positive Ganzzahl, gefolgt von `w`). Der Breiten-Deskriptor wird durch die in der `sizes`-Attribute angegebene Quellgröße geteilt, um die effektive Pixeldichte zu berechnen.
       - Einem Pixeldichte-Deskriptor (eine positive Gleitkommazahl, gefolgt von `x`).

    Wenn kein Deskriptor angegeben ist, wird der Quelle der Standard-Deskriptor von `1x` zugewiesen.

    Es ist falsch, Breiten-Deskriptoren und Pixeldichte-Deskriptoren im gleichen `srcset`-Attribut zu mischen. Doppelte Deskriptoren (zum Beispiel zwei Quellen im gleichen `srcset`, die beide mit `2x` beschrieben sind) sind ebenfalls ungültig.

    Wenn das `srcset`-Attribut Breiten-Deskriptoren verwendet, muss das `sizes`-Attribut ebenfalls vorhanden sein, oder das `srcset`-Attribut wird ignoriert.

    Der User-Agent wählt nach eigenem Ermessen eine der verfügbaren Quellen aus. Dies bietet ihnen erhebliche Freiheit, ihre Auswahl basierend auf Dingen wie Benutzereinstellungen oder {{Glossary("bandwidth", "Bandbreiten")}}-Bedingungen anzupassen. Sehen Sie unser [Responsive images](/de/docs/Web/HTML/Responsive_images) Tutorial für ein Beispiel.

- `width`
  - : Die intrinsische Breite des Bildes in Pixeln. Muss eine ganze Zahl ohne Einheit sein.
- `usemap`

  - : Der teilweise {{Glossary("URL", "URL")}} (beginnend mit `#`) einer mit dem Element verbundenen [Bildkarte](/de/docs/Web/HTML/Element/map).

    > [!NOTE]
    > Sie können dieses Attribut nicht verwenden, wenn das `<img>`-Element sich in einem {{htmlelement("a")}} oder {{HTMLElement("button")}} Element befindet.

### Veraltete Attribute

- `align` {{deprecated_inline}}

  - : Richtet das Bild mit seinem umgebenden Kontext aus. Verwenden Sie die {{cssxref('float')}} und/oder {{cssxref('vertical-align')}} {{Glossary("CSS", "CSS")}}-Eigenschaften anstelle dieses Attributs. Erlaubte Werte:

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
  - : Die Breite einer Umrandung um das Bild. Verwenden Sie die {{cssxref('border')}} {{Glossary("CSS", "CSS")}}-Eigenschaft stattdessen.
- `hspace` {{deprecated_inline}}
  - : Die Anzahl der Pixel des Leerraums links und rechts des Bildes. Verwenden Sie die {{cssxref('margin')}} CSS-Eigenschaft stattdessen.
- `longdesc` {{deprecated_inline}}

  - : Ein Link zu einer detaillierteren Beschreibung des Bildes. Mögliche Werte sind eine {{Glossary("URL", "URL")}} oder eine Element [`id`](/de/docs/Web/HTML/Global_attributes/id).

    > [!NOTE]
    > Dieses Attribut wird in der neuesten {{Glossary("W3C", "W3C")}}-Version, [HTML 5.2](https://html.spec.whatwg.org/multipage/obsolete.html#element-attrdef-img-longdesc), erwähnt, wurde jedoch aus dem {{Glossary("WHATWG", "WHATWG")}}'s [HTML Living Standard](https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element) entfernt. Es hat eine ungewisse Zukunft; Autoren sollten eine {{Glossary("WAI", "WAI")}}-{{Glossary("ARIA", "ARIA")}} Alternative wie [`aria-describedby`](https://www.w3.org/TR/wai-aria-1.1/#aria-describedby) oder [`aria-details`](https://www.w3.org/TR/wai-aria-1.1/#aria-details) verwenden.

- `name` {{deprecated_inline}}
  - : Ein Name für das Element. Verwenden Sie das [`id`](/de/docs/Web/HTML/Global_attributes/id) Attribut stattdessen.
- `vspace` {{deprecated_inline}}
  - : Die Anzahl der Pixel des Leerraums über und unter dem Bild. Verwenden Sie die {{cssxref('margin')}} CSS-Eigenschaft stattdessen.

## Styling mit CSS

`<img>` ist ein [ersetztes Element](/de/docs/Web/CSS/Replaced_element); es hat einen {{cssxref("display")}} Wert von `inline` standardmäßig, aber seine Standardabmessungen werden durch die intrinsischen Werte des eingebetteten Bildes definiert, als wäre es `inline-block`. Sie können Eigenschaften wie {{cssxref("border")}}/{{cssxref("border-radius")}}, {{cssxref("padding")}}/{{cssxref("margin")}}, {{cssxref("width")}}, {{cssxref("height")}}, usw. auf ein Bild setzen.

`<img>` hat keine Basislinie, daher wird beim Verwenden von Bildern in einem Inline-Formatierungskontext mit {{cssxref("vertical-align", "vertical-align: baseline")}}, der Unterseite des Bildes auf der Textbasisstelle platziert.

Sie können die {{cssxref("object-position")}}-Eigenschaft verwenden, um das Bild innerhalb des Feldes des Elements zu positionieren, und die {{cssxref("object-fit")}}-Eigenschaft, um die Größe des Bildes innerhalb des Feldes anzupassen (zum Beispiel, ob das Bild in das Feld passen oder es füllen soll, auch wenn ein Clipping erforderlich ist).

Abhängig von seinem Typ kann ein Bild eine intrinsische Breite und Höhe haben. Für einige Bildtypen sind intrinsische Dimensionen jedoch nicht erforderlich. {{Glossary("SVG", "SVG")}} Bilder haben zum Beispiel keine intrinsischen Dimensionen, wenn ihr Wurzel {{SVGElement("svg")}} Element keine `width` oder `height` darauf eingestellt hat.

## Barrierefreiheit

### Bedeutungsvolle alternative Beschreibungen verfassen

Der Wert eines `alt`-Attributs sollte einen klaren und prägnanten Textersatz für den Inhalt des Bildes bereitstellen. Er sollte nicht das Vorhandensein des Bildes selbst oder den Dateinamen des Bildes beschreiben. Wenn das `alt`-Attribut absichtlich weggelassen wird, weil das Bild keine textuelle Entsprechung hat, sollten Sie alternative Methoden in Betracht ziehen, um das zu präsentieren, was das Bild vermitteln soll.

#### Nicht

```html example-bad
<img alt="image" src="penguin.jpg" />
```

#### Richtig

```html example-good
<img alt="A Penguin on a beach." src="penguin.jpg" />
```

Ein wichtiger Barrierefreiheitstest besteht darin, den Inhalt des `alt`-Attributs zusammen mit dem vorausgehenden Textinhalt zu lesen, um zu sehen, ob er dieselbe Bedeutung wie das Bild vermittelt. Zum Beispiel, wenn das Bild dem Satz "Auf meinen Reisen sah ich ein niedliches kleines Tier:" vorangeht, könnte das _Nicht_-Beispiel von einem Bildschirmlesegerät als "Auf meinen Reisen sah ich ein niedliches kleines Tier: Bild" gelesen werden, was keinen Sinn ergibt. Das _Richtig_-Beispiel könnte von einem Bildschirmlesegerät als "Auf meinen Reisen sah ich ein niedliches kleines Tier: Ein Pinguin am Strand." gelesen werden, was Sinn ergibt.

Für Bilder, die eine Aktion auslösen, zum Beispiel Bilder, die in einem {{htmlelement("a")}} oder {{htmlelement("button")}} Element verschachtelt sind, sollten Sie in Betracht ziehen, die ausgelöste Aktion im `alt`-Attributwert zu beschreiben. Zum Beispiel könnten Sie `alt="nächste Seite"` anstelle von `alt="Pfeil rechts"` schreiben. Sie könnten auch in Betracht ziehen, eine optionale weitere Beschreibung in einem `title`-Attribut hinzuzufügen; dies kann von Bildschirmlesegeräten auf Anfrage des Benutzers gelesen werden.

Wenn ein `alt`-Attribut in einem Bild nicht vorhanden ist, können einige Bildschirmlesegeräte den Dateinamen anstelle dessen ankündigen. Dies kann eine verwirrende Erfahrung sein, wenn der Dateiname den Inhalt des Bildes nicht repräsentiert.

- [Ein alt Entscheidungsbaum • Bilder • WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/images/decision-tree/)
- [Alt-Texte: Der ultimative Leitfaden — Axess Lab](https://axesslab.com/alt-texts/)
- [So gestalten Sie großartige Alt-Texte: Eine Einführung | Deque](https://www.deque.com/blog/great-alt-text-introduction/)
- [MDN Understanding WCAG, Leitlinie 1.1 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verständnis von Erfolgskriterium 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

### SVG als Bild identifizieren

Aufgrund eines [VoiceOver-Bugs](https://webkit.org/b/216364) gibt VoiceOver SVG-Bilder nicht korrekt als Bilder aus. Schließen Sie [`role="img"`](/de/docs/Web/Accessibility/ARIA/Roles/img_role) in allen `<img>`-Elementen mit SVG-Quelldateien ein, um sicherzustellen, dass Hilfstechnologien SVG korrekt als Bildinhalt anzeigen.

```html
<img src="mdn.svg" alt="MDN" role="img" />
```

### Das title-Attribut

Das [`title`](/de/docs/Web/HTML/Global_attributes/title) Attribut ist kein akzeptabler Ersatz für das `alt`-Attribut. Vermeiden Sie es auch, den `alt`-Attributwert in einem auf dem gleichen Bild deklarierten `title` Attribut zu duplizieren. Ein solches Vorgehen kann dazu führen, dass einige Bildschirmlesegeräte denselben Text zweimal ansagen, was eine verwirrende Erfahrung darstellen kann.

Das `title`-Attribut sollte auch nicht als ergänzende Beschreibung verwendet werden, um eine Bildbeschreibung im `alt` zu begleiten. Wenn ein Bild eine Beschriftung benötigt, verwenden Sie die [`figure`](/de/docs/Web/HTML/Element/figure) und [`figcaption`](/de/docs/Web/HTML/Element/figcaption) Elemente.

Der Wert des `title`-Attributs wird normalerweise dem Benutzer als Tooltip präsentiert, der kurz erscheint, nachdem der Cursor sich über dem Bild nicht mehr bewegt. Obwohl dies _zusätzliche_ Informationen für den Benutzer bereitstellen kann, sollten Sie nicht davon ausgehen, dass der Benutzer es jemals sehen wird: Der Benutzer hat möglicherweise nur eine Tastatur oder einen Touchscreen. Wenn Sie Informationen zur Verfügung stellen, die besonders wichtig oder wertvoll für den Benutzer sind, präsentieren Sie sie inline mit einer der oben genannten Methoden, anstatt `title` zu verwenden.

- [Die Verwendung des HTML title Attributs – aktualisiert | The Paciello Group](https://www.tpgi.com/using-the-html-title-attribute-updated/)

## Beispiele

### Alternativtext

Das folgende Beispiel bettet ein Bild in die Seite ein und enthält einen Alternativtext für die Barrierefreiheit.

```html
<img src="favicon144.png" alt="MDN" />
```

{{ EmbedLiveSample('Alternative_text', '100%', '160') }}

### Bildlink

Dieses Beispiel baut auf dem vorherigen auf und zeigt, wie das Bild in einen Link umgewandelt werden kann. Um dies zu tun, verschachteln Sie das `<img>`-Tag innerhalb des {{HTMLElement("a")}}. Sie sollten den Alternativtext so gestalten, dass er die Ressource beschreibt, auf die der Link verweist, als ob Sie stattdessen einen Textlink verwenden würden.

```html
<a href="https://developer.mozilla.org">
  <img src="favicon144.png" alt="Visit the MDN site" />
</a>
```

{{ EmbedLiveSample('Image_link', '100%', '160') }}

### Verwendung des srcset Attributs

In diesem Beispiel fügen wir ein `srcset`-Attribut mit einem Verweis auf eine hochauflösende Version des Logos ein; dieses wird anstelle des `src`-Bildes auf hochauflösenden Geräten geladen. Das im `src`-Attribut angegebene Bild wird als `1x`-Kandidat in {{Glossary("User_agent", "User-Agents")}} gewertet, die `srcset` unterstützen.

```html
<img src="favicon72.png" alt="MDN" srcset="favicon144.png 2x" />
```

{{EmbedLiveSample("Using_the_srcset_attribute", "100%", "160")}}

### Verwendung von srcset und sizes Attributen

Das `src` Attribut wird in {{Glossary("User_agent", "User-Agents")}} ignoriert, die `srcset` unterstützen, wenn `w` Deskriptoren enthalten sind. Wenn die `(max-width: 600px)` Medienbedingung zutrifft, lädt das 200 Pixel breite Bild (das ist das, welches `200px` am nächsten kommt), andernfalls wird das andere Bild geladen.

```html
<img
  src="clock-demo-200px.png"
  alt="The time is 12:45."
  srcset="clock-demo-200px.png 200w, clock-demo-400px.png 400w"
  sizes="(max-width: 600px) 200px, 50vw" />
```

{{EmbedLiveSample("Using_the_srcset_and_sizes_attributes", "100%", 350)}}

> [!NOTE]
> Um die Größenanpassung in Aktion zu sehen, {{LiveSampleLink('Using_the_srcset_and_sizes_attributes', 'sehen Sie das Beispiel auf einer separaten Seite')}}, damit Sie den Inhaltsbereich tatsächlich anpassen können.

## Sicherheits- und Datenschutzbedenken

Obwohl `<img>`-Elemente unschuldig erscheinen, können sie unerwünschte Folgen für die Sicherheit und Privatsphäre der Benutzer haben. Weitere Informationen und Maßnahmen finden Sie unter [Referer-Header: Datenschutz- und Sicherheitsbedenken](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns).

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
          >Flussinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Wortlautinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#embedded_content"
          >Eingebetteter Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#palpable_content"
          >Fühlbarer Inhalt</a
        >. Wenn das Element ein <code>usemap</code> Attribut hat, ist es auch ein Teil der interaktiven Inhaltkategorie.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "leeres Element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Auslassung des Tags</th>
      <td>Muss ein Starttag haben und darf keinen Endtag haben.</td>
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
            mit nicht-leerem <code>alt</code> Attribut oder keinem
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
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>
        <ul>
          <li>
            mit nicht-leerem <code>alt</code> Attribut:
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
- {{cssxref("object-fit")}}, {{cssxref("object-position")}}, {{cssxref("image-orientation")}}, {{cssxref("image-rendering")}}, und {{cssxref("image-resolution")}}: Bildbezogene CSS-Eigenschaften.
- [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) Schnittstelle für dieses Element
- [HTML Bilder](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images)
- [Image file type and format guide](/de/docs/Web/Media/Formats/Image_types)
- [Responsive images](/de/docs/Web/HTML/Responsive_images)
