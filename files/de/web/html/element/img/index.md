---
title: "<img>: Das Bildeinbettungselement"
slug: Web/HTML/Element/img
l10n:
  sourceCommit: f10015d1752d5668d8fe0de29f9d9807de475d58
---

{{HTMLSidebar}}

Das **`<img>`** [HTML](/de/docs/Web/HTML) Element bettet ein Bild in das Dokument ein.

{{EmbedInteractiveExample("pages/tabbed/img.html", "tabbed-standard")}}

Das obige Beispiel zeigt die Verwendung des `<img>`-Elements:

- Das `src`-Attribut ist **erforderlich** und enthält den Pfad zum einzubettenden Bild.
- Das `alt`-Attribut enthält einen textlichen Ersatz für das Bild. Es ist obligatorisch und **extrem nützlich** für die Barrierefreiheit — Bildschirmleser lesen den Attributwert vor, damit Nutzer wissen, was das Bild bedeutet. Alternativtext wird auch auf der Seite angezeigt, wenn das Bild aus irgendeinem Grund nicht geladen werden kann: beispielsweise Netzwerkfehler, Inhaltsblockierung oder verfallene Links.

Es gibt viele weitere Attribute für verschiedene Zwecke:

- Kontrolle von [Referrer](/de/docs/Web/HTTP/Headers/Referrer-Policy)/{{Glossary("CORS", "CORS")}} für Sicherheit und Privatsphäre: siehe [`crossorigin`](#crossorigin) und [`referrerpolicy`](#referrerpolicy).
- Verwenden Sie sowohl [`width`](#width) als auch [`height`](#height), um die intrinsische Größe des Bildes festzulegen. Dies ermöglicht, Platz vor dem Laden des Bildes zu reservieren, um das Verschieben des Inhaltslayouts zu minimieren.
- Responsive Bildhinweise mit [`sizes`](#sizes) und [`srcset`](#srcset) (siehe auch das {{htmlelement("picture")}} Element und unseren [Leitfaden für responsive Bilder](/de/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)).

## Unterstützte Bildformate

Der HTML-Standard listet nicht auf, welche Bildformate unterstützt werden sollen, sodass {{Glossary("user_agent", "User Agents")}} unterschiedliche Formate unterstützen können.

> [!NOTE]
> Der [Leitfaden für Bilddateitypen und -formate](/de/docs/Web/Media/Formats/Image_types) bietet umfassende Informationen über Bildformate und ihre Unterstützung durch Webbrowser.
> Dieser Abschnitt ist nur eine Zusammenfassung!

Die am häufigsten im Web verwendeten Bilddateiformate sind:

- [APNG (Animated Portable Network Graphics)](/de/docs/Web/Media/Formats/Image_types#apng_animated_portable_network_graphics) – Gute Wahl für verlustfreie Animationssequenzen (GIF ist weniger performant)
- [AVIF (AV1 Image File Format)](/de/docs/Web/Media/Formats/Image_types#avif_image) – Gute Wahl sowohl für Bilder als auch für animierte Bilder aufgrund der hohen Leistung.
- [GIF (Graphics Interchange Format)](/de/docs/Web/Media/Formats/Image_types#gif_graphics_interchange_format) – Gute Wahl für _einfache_ Bilder und Animationen.
- [JPEG (Joint Photographic Expert Group image)](/de/docs/Web/Media/Formats/Image_types#jpeg_joint_photographic_experts_group_image) – Gute Wahl für verlustbehaftete Komprimierung von Standbildern (derzeit am beliebtesten).
- [PNG (Portable Network Graphics)](/de/docs/Web/Media/Formats/Image_types#png_portable_network_graphics) – Gute Wahl für verlustfreie Komprimierung von Standbildern (leicht bessere Qualität als JPEG).
- [SVG (Scalable Vector Graphics)](/de/docs/Web/Media/Formats/Image_types#svg_scalable_vector_graphics) – Vektorbildformat. Verwenden Sie es für Bilder, die in unterschiedlichen Größen genau dargestellt werden müssen.
- [WebP (Web Picture format)](/de/docs/Web/Media/Formats/Image_types#webp_image) – Hervorragende Wahl sowohl für Bilder als auch für animierte Bilder.

Formate wie [WebP](/de/docs/Web/Media/Formats/Image_types#webp_image) und [AVIF](/de/docs/Web/Media/Formats/Image_types#avif_image) werden empfohlen, da sie deutlich besser als PNG, JPEG, GIF sowohl für Standbilder als auch für animierte Bilder abschneiden.

SVG bleibt das empfohlene Format für Bilder, die in unterschiedlichen Größen genau dargestellt werden müssen.

## Bildladefehler

Wenn ein Fehler beim Laden oder Rendern eines Bildes auftritt und ein `onerror`-Ereignishandler für das [`error`](/de/docs/Web/API/HTMLElement/error_event)-Ereignis gesetzt wurde, wird dieser Ereignishandler aufgerufen. Dies kann in mehreren Situationen passieren, einschließlich:

- Das `src`-Attribut ist leer (`""`) oder `null`.
- Die `src`-{{Glossary("URL", "URL")}} ist dieselbe wie die URL der Seite, die der Benutzer derzeit aufgerufen hat.
- Das Bild ist auf irgendeine Weise beschädigt, die verhindert, dass es geladen wird.
- Die Metadaten des Bildes sind so beschädigt, dass es unmöglich ist, seine Dimensionen abzurufen, und es wurden keine Dimensionen in den Attributen des `<img>`-Elements angegeben.
- Das Bild ist in einem von der {{Glossary("user_agent", "Benutzer-Agent")}} nicht unterstützten Format.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- [`alt`](/de/docs/Web/API/HTMLImageElement/alt#usage_notes)

  - : Definiert Text, der das Bild auf der Seite ersetzen kann.

    > [!NOTE]
    > Browser zeigen nicht immer Bilder an. Es gibt eine Reihe von Situationen, in denen ein Browser möglicherweise keine Bilder anzeigt, wie zum Beispiel:
    >
    > - Nicht-visuelle Browser (wie die, die von Menschen mit Sehbehinderungen verwendet werden)
    > - Der Benutzer entscheidet sich, keine Bilder anzuzeigen (um Bandbreite zu sparen, aus Datenschutzgründen)
    > - Das Bild ist ungültig oder ein [nicht unterstützter Typ](#unterstützte_bildformate)
    >
    > In diesen Fällen kann der Browser das Bild durch den Text im `alt`-Attribut des Elements ersetzen. Aus diesen und anderen Gründen sollten Sie, wann immer möglich, einen nützlichen Wert für `alt` angeben.

    Wenn Sie dieses Attribut auf eine leere Zeichenfolge (`alt=""`) setzen, zeigt dies an, dass dieses Bild _kein_ Schlüsselteil des Inhalts ist (es ist Dekoration oder ein Tracking-Pixel) und dass nicht-visuelle Browser es möglicherweise aus dem {{Glossary("Engine/Rendering", "Rendern")}} weglassen. Visuelle Browser verbergen das kaputte Bildsymbol ebenfalls, wenn das `alt`-Attribut leer ist und das Bild nicht angezeigt werden konnte.

    Dieses Attribut wird auch verwendet, wenn Sie das Bild in Text kopieren und einfügen oder ein verlinktes Bild in einem Lesezeichen speichern.

- `attributionsrc` {{experimental_inline}}

  - : Gibt an, dass Sie möchten, dass der Browser ein {{httpheader("Attribution-Reporting-Eligible")}} Header zusammen mit der Bildanfrage sendet.

    Auf der Serverseite wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}} oder {{httpheader("Attribution-Reporting-Register-Trigger")}} Headers in der Antwort auszulösen, um eine bildbasierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#html-based_event_sources) oder einen [Attributionstrigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#html-based_attribution_triggers) zu registrieren. Welcher Antwortheader zurückgesendet werden soll, hängt vom Wert des `Attribution-Reporting-Eligible` Headers ab, der die Registrierung ausgelöst hat.

    Das entsprechende Quell- oder Triggerereignis wird ausgelöst, sobald der Browser die Antwort mit der Bilddatei erhält.

    > [!NOTE]
    > Siehe die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) für weitere Details.

    Es gibt zwei Versionen dieses Attributs, die Sie festlegen können:

    - Boolean, d.h. nur der `attributionsrc` Name. Dies gibt an, dass Sie möchten, dass der {{httpheader("Attribution-Reporting-Eligible")}} Header zum selben Server gesendet wird, auf den das `src`-Attribut verweist. Dies ist in Ordnung, wenn Sie die Registrierung der Attributionsquelle oder des Triggers auf demselben Server verwalten. Beim Registrieren eines Attributionstriggers ist diese Eigenschaft optional, und ein Boolean-Wert wird verwendet, wenn sie weggelassen wird.
    - Wert, der eine oder mehrere URLs enthält, zum Beispiel:

    ```html
    <img
      src="image-file.png"
      alt="My image file description"
      attributionsrc="https://a.example/register-source
                         https://b.example/register-source" />
    ```

    Dies ist nützlich in Fällen, in denen die angeforderte Ressource nicht auf einem Server ist, den Sie kontrollieren, oder Sie die Registrierung der Attributionsquelle auf einem anderen Server verwalten möchten. In diesem Fall können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcenanfrage erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}} Header zu den in `attributionsrc` angegebenen URL(s) zusätzlich zum Ressourcen-Ursprung gesendet. Diese URLs können dann mit einem {{httpheader("Attribution-Reporting-Register-Source")}} oder {{httpheader("Attribution-Reporting-Register-Trigger")}} Header antworten, um die Registrierung abzuschließen.

    > [!NOTE]
    > Durch die Angabe mehrerer URLs können mehrere Attributionsquellen auf derselben Funktion registriert werden. Sie könnten zum Beispiel verschiedene Kampagnen haben, deren Erfolg Sie messen möchten, indem Sie unterschiedliche Berichte über verschiedene Daten erstellen.

- [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)

  - : Gibt an, ob die Abrufung des Bildes mit einer {{Glossary("CORS", "CORS")}}-Anfrage durchgeführt werden muss. Bilddaten aus einem [CORS-fähigen Bild](/de/docs/Web/HTML/CORS_enabled_image), das aus einer CORS-Anfrage zurückgegeben wird, können im {{HTMLElement("canvas")}} Element ohne Markierung als "[verfälscht](/de/docs/Web/HTML/CORS_enabled_image#security_and_tainted_canvases)" wiederverwendet werden.

    Ist das `crossorigin`-Attribut _nicht_ angegeben, wird eine Nicht-CORS-Anfrage gesendet (ohne den {{httpheader("Origin")}} Anfrageheader) und der Browser markiert das Bild als verfälscht und beschränkt den Zugriff auf seine Bilddaten, wodurch die Verwendung im {{HTMLElement("canvas")}}-Element verhindert wird.

    Ist das `crossorigin`-Attribut angegeben, wird eine CORS-Anfrage gesendet (mit dem {{httpheader("Origin")}} Anfrageheader); wenn der Server jedoch nicht zustimmt, den grenzüberschreitenden Zugriff auf die Bilddaten durch die Ursprungsseite zuzulassen (indem er keinen {{httpheader("Access-Control-Allow-Origin")}} Antwortheader sendet oder die Ursprungsseite nicht in einen gesendeten {{httpheader("Access-Control-Allow-Origin")}} Antwortheader einschließt), blockiert der Browser das Laden des Bildes und protokolliert einen CORS-Fehler in der Entwicklerconsole.

    Erlaubte Werte:

    - `anonymous`
      - : Eine CORS-Anfrage wird ohne Anmeldedaten gesendet (d.h. keine {{Glossary("cookie", "Cookies")}}, [X.509-Zertifikate](https://datatracker.ietf.org/doc/html/rfc5280), oder {{httpheader("Authorization")}} Anfrageheader).
    - `use-credentials`
      - : Die CORS-Anfrage wird mit allen Anmeldedaten gesendet (d.h. Cookies, X.509-Zertifikate und der `Authorization` Anfrageheader). Wenn der Server nicht zustimmt, Anmeldedaten mit der Ursprungsseite zu teilen (indem er den `Access-Control-Allow-Credentials: true` Antwortheader zurücksendet), markiert der Browser das Bild als verfälscht und beschränkt den Zugriff auf seine Bilddaten.

    Wenn das Attribut einen ungültigen Wert hat, behandeln Browser es, als ob der Wert `anonymous` verwendet würde. Siehe [CORS-Einstellungsattribute](/de/docs/Web/HTML/Attributes/crossorigin) für zusätzliche Informationen.

- `decoding`

  - : Dieses Attribut gibt dem Browser einen Hinweis, ob das Bild zusammen mit dem Rendern des anderen DOM-Inhalts in einem einzigen Präsentationsschritt dekodiert werden soll, der "korrekter" aussieht (`sync`), oder ob zuerst der andere DOM-Inhalt gerendert und präsentiert und dann das Bild dekodiert und später präsentiert werden soll (`async`). In der Praxis bedeutet `async`, dass das nächste Paint nicht auf die Dekodierung des Bildes wartet.

    Oft ist es schwierig, einen merklichen Effekt beim Verwenden von `decoding` auf statischen `<img>`-Elementen wahrzunehmen. Sie werden wahrscheinlich zunächst als leere Bilder gerendert, während die Bilddateien abgerufen werden (entweder aus dem Netzwerk oder aus dem Cache) und dann unabhängig verarbeitet werden, sodass das "Synchronisieren" der Inhaltsupdates weniger sichtbar ist. Das Blockieren des Renderns während der Dekodierzeit kann jedoch, auch wenn es oft sehr gering ist, _gemessen_ werden — auch wenn es mit dem menschlichen Auge schwer zu beobachten ist. Siehe [Was macht das Bild-Dekodierungsattribut eigentlich?](https://www.tunetheweb.com/blog/what-does-the-image-decoding-attribute-actually-do/) für eine detaillierte Analyse (tunetheweb.com, 2023).

    Die Verwendung unterschiedlicher `decoding`-Typen kann zu merklicheren Unterschieden führen, wenn `<img>`-Elemente dynamisch über JavaScript in das DOM eingefügt werden — siehe [`HTMLImageElement.decoding`](/de/docs/Web/API/HTMLImageElement/decoding) für mehr Details.

    Erlaubte Werte:

    - `sync`
      - : Dekodiert das Bild synchron zusammen mit dem Rendern des anderen DOM-Inhalts und präsentiert alles zusammen.
    - `async`
      - : Dekodiert das Bild asynchron, nach dem Rendern und der Präsentation des anderen DOM-Inhalts.
    - `auto`
      - : Keine Präferenz für den Dekodierungsmodus; der Browser entscheidet, was am besten für den Benutzer ist. Dies ist der Standardwert.

- [`elementtiming`](/de/docs/Web/HTML/Attributes/elementtiming)

  - : Markiert das Bild zur Beobachtung durch die [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming) API. Der angegebene Wert wird zu einem Bezeichner für das beobachtete Bildelement. Siehe auch die Attributseite [`elementtiming`](/de/docs/Web/HTML/Attributes/elementtiming).

- `fetchpriority`

  - : Gibt einen Hinweis auf die relative Priorität an, die beim Abrufen des Bildes verwendet werden soll.
    Erlaubte Werte:

    - `high`
      - : Holen Sie das Bild mit hoher Priorität im Vergleich zu anderen Bilder ab.
    - `low`
      - : Holen Sie das Bild mit niedriger Priorität im Vergleich zu anderen Bilder ab.
    - `auto`
      - : Setzen Sie keine Präferenz für die Abrufpriorität.
        Dies ist der Standardwert.
        Er wird verwendet, wenn kein Wert oder ein ungültiger Wert festgelegt ist.

    Weitere Informationen finden Sie in der [`HTMLImageElement.fetchPriority`](/de/docs/Web/API/HTMLImageElement/fetchPriority).

- `height`

  - : Die intrinsische Höhe des Bildes in Pixel. Muss eine ganze Zahl ohne Einheit sein.

    > [!NOTE]
    > Das Einbeziehen von `height` und [`width`](#width) ermöglicht es dem Browser, das {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Bildes zu berechnen, bevor das Bild geladen wird. Dieses Seitenverhältnis wird verwendet, um den benötigten Platz zu reservieren, um das Bild anzuzeigen, was das Layout-Verschieben beim Herunterladen und Darstellen des Bildes reduziert oder sogar verhindert. Die Verringerung des Layout-Verschiebens ist ein wesentlicher Bestandteil einer guten Benutzererfahrung und Webleistung.

- `ismap`

  - : Dieses Boolean-Attribut zeigt an, dass das Bild Teil einer [serverseitigen Karte](https://en.wikipedia.org/wiki/Image_map#Server-side) ist. In diesem Fall werden die Koordinaten, auf die der Benutzer im Bild geklickt hat, an den Server gesendet.

    > [!NOTE]
    > Dieses Attribut ist nur zulässig, wenn das `<img>`-Element ein Nachfahre eines {{htmlelement("a")}}-Elements mit einem gültigen [`href`](/de/docs/Web/HTML/Element/a#href)-Attribut ist. Dies gibt Benutzern ohne Zeigegeräte ein alternatives Ziel.

- `loading`

  - : Gibt an, wie der Browser das Bild laden soll:

    - `eager`
      - : Lädt das Bild sofort, unabhängig davon, ob das Bild derzeit innerhalb des sichtbaren Viewports ist oder nicht (dies ist der Standardwert).
    - `lazy`
      - : Verzögert das Laden des Bildes, bis es eine berechnete Entfernung vom Viewport erreicht, wie vom Browser definiert. Ziel ist es, den Netzwerk- und Speicheraufwand zu vermeiden, der für die Verarbeitung des Bildes erforderlich ist, bis vernünftigerweise sicher ist, dass es benötigt wird. Dies verbessert im Allgemeinen die Leistung der Inhalte in den meisten typischen Anwendungsfällen.

    > [!NOTE]
    > Das Laden wird nur verzögert, wenn JavaScript aktiviert ist. Dies ist eine Anti-Tracking-Maßnahme, da, wenn ein Benutzer-Agent Lazy Loading bei deaktivierter Skripterstellung unterstützen würde, es immer noch möglich wäre, die ungefähre Scroll-Position eines Benutzers während einer Sitzung nachzuverfolgen, indem Bilder strategisch in das Markup der Seite eingefügt werden, sodass ein Server verfolgen kann, wie viele Bilder angefordert werden und wann.

    > [!NOTE]
    > Bilder mit `loading` auf `lazy` gesetzt, werden nie geladen, wenn sie keinen sichtbaren Teil eines Elements durchschneiden, selbst wenn das Laden sie ändern würde, da nicht geladene Bilder eine `width` und `height` von `0` haben. Das Setzen von `width` und `height` auf Lazy-Loaded-Bilder behebt dieses Problem und ist eine bewährte Praxis, die von der Spezifikation [empfohlen wird](https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element). Dies hilft auch, Layout-Verschiebungen zu verhindern.

- `referrerpolicy`

  - : Ein String, der angibt, welchen Referrer beim Abrufen der Ressource verwendet werden soll:

    - `no-referrer`: Der {{HTTPHeader("Referer")}} Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}} Header wird nicht an {{Glossary("origin", "Ursprünge")}} ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`: Der gesendete Referrer wird auf den Ursprung der verweisenden Seite beschränkt: sein [Schema](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`: Der Referrer, der an andere Ursprünge gesendet wird, wird auf das Schema, den Host und den Port beschränkt. Navigationen im selben Ursprung enthalten weiterhin den Pfad.
    - `same-origin`: Ein Referrer wird für {{Glossary("Same-origin_policy", "gleichartige Ursprünge")}} gesendet, aber Anfragen an andere Ursprünge enthalten keine Referrer-Informationen.
    - `strict-origin`: Nur den Ursprung des Dokuments als Referrer senden, wenn das Protokollsicherheitsniveau gleich bleibt (HTTPS→HTTPS), aber nicht an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standardeinstellung): Eine vollständige URL senden, wenn eine Anfrage im selben Ursprung durchgeführt wird, nur den Ursprung senden, wenn das Protokollsicherheitsniveau gleich bleibt (HTTPS→HTTPS), und keinen Header an ein weniger sicheres Ziel senden (HTTPS→HTTP).
    - `unsafe-url`: Der Referrer enthält den Ursprung _und_ den Pfad (aber nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), das [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder den [Benutzernamen](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge preisgibt.

- `sizes`

  - : Eine oder mehrere durch Kommas getrennte Zeichenfolgen, die eine Reihe von Quellgrößen angeben. Jede Quellgröße besteht aus:

    1. Einer [Medienbedingung](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#syntax). Diese muss für das letzte Element in der Liste ausgelassen werden.
    2. Einem Quellgrößenwert.

    Medienbedingungen beschreiben Eigenschaften des _Viewports_, nicht des _Bildes_. Zum Beispiel, `(max-height: 500px) 1000px` schlägt vor, eine Quelle von 1000px Breite zu verwenden, wenn der _Viewport_ nicht höher als 500px ist.

    Quellgrößenwerte geben die beabsichtigte Anzeigegröße des Bildes an. {{Glossary("User_agent", "User Agents")}} verwenden die aktuelle Quellgröße, um eine der durch das `srcset`-Attribut angegebenen Quellen auszuwählen, wenn diese Quellen mithilfe von Breiten (`w`) Deskriptoren beschrieben werden. Die ausgewählte Quellgröße beeinflusst die {{Glossary("intrinsic_size", "intrinsische Größe")}} des Bildes (die Anzeigegröße des Bildes, wenn kein {{Glossary("CSS", "CSS")}}-Styling angewendet wird). Wenn das `srcset`-Attribut fehlt oder keine Werte mit einem Breitendeskriptor enthält, hat das `sizes`-Attribut keine Auswirkungen.

- `src`
  - : Die Bild-{{Glossary("URL", "URL")}}. Verpflichtend für das `<img>`-Element. In {{Glossary("Browser", "Browser")}}n, die `srcset` unterstützen, wird `src` wie ein Kandidatenbild mit einem Pixel-Dichte-Deskriptor `1x` behandelt, es sei denn, ein Bild mit diesem Pixel-Dichte-Deskriptor ist bereits in `srcset` definiert, oder `srcset` enthält `w` Deskriptoren.
- `srcset`

  - : Eine oder mehrere durch Kommas getrennte Zeichenfolgen, die mögliche Bildquellen für den {{Glossary("user_agent", "User Agent")}} angeben. Jede Zeichenfolge besteht aus:

    1. Einer {{Glossary("URL", "URL")}} zu einem Bild
    2. Optional, Leerzeichen gefolgt von einem der folgenden:

       - Einem Breitendeskriptor (eine positive ganze Zahl, die direkt von `w` gefolgt wird). Der Breitendeskriptor wird durch die im `sizes`-Attribut angegebene Quellgröße geteilt, um die effektive Pixeldichte zu berechnen.
       - Einem Pixel-Dichte-Deskriptor (eine positive Gleitkommazahl, die direkt von `x` gefolgt wird).

    Wird kein Deskriptor angegeben, wird der Quelle der Standarddeskriptor `1x` zugewiesen.

    Es ist falsch, Breitendeskriptoren und Pixel-Dichte-Deskriptoren im selben `srcset`-Attribut zu mischen. Doppelte Deskriptoren (zum Beispiel zwei Quellen im selben `srcset`, die beide mit `2x` beschrieben werden) sind ebenfalls ungültig.

    Wenn das `srcset`-Attribut Breitendeskriptoren verwendet, muss auch das `sizes`-Attribut vorhanden sein, ansonsten wird das `srcset` selbst ignoriert.

    Der User Agent wählt nach eigenem Ermessen eine der verfügbaren Quellen. Dies gibt ihm bedeutenden Spielraum, seine Auswahl basierend auf Dingen wie Benutzerpräferenzen oder {{Glossary("bandwidth", "Bandbreite")}} Bedingungen anzupassen. Sehen Sie sich unser [Leitfaden für responsive Bilder](/de/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images) für ein Beispiel an.

- `width`
  - : Die intrinsische Breite des Bildes in Pixel. Muss eine ganze Zahl ohne Einheit sein.
- `usemap`

  - : Die partielle {{Glossary("URL", "URL")}} (beginnend mit `#`) einer [Bildkarte](/de/docs/Web/HTML/Element/map), die mit dem Element assoziiert ist.

    > [!NOTE]
    > Sie können dieses Attribut nicht verwenden, wenn das `<img>`-Element innerhalb eines {{htmlelement("a")}} oder {{HTMLElement("button")}} Elements ist.

### Veraltete Attribute

- `align` {{deprecated_inline}}

  - : Richtet das Bild mit seinem umliegenden Kontext aus. Verwenden Sie stattdessen die {{cssxref('float')}} und/oder {{cssxref('vertical-align')}} {{Glossary("CSS", "CSS")}} Eigenschaften. Erlaubte Werte:

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
  - : Die Breite eines Rahmens um das Bild. Verwenden Sie stattdessen die {{cssxref('border')}} {{Glossary("CSS", "CSS")}} Eigenschaft.
- `hspace` {{deprecated_inline}}
  - : Die Anzahl der Pixel des Leerraums links und rechts des Bildes. Verwenden Sie stattdessen die {{cssxref('margin')}} CSS-Eigenschaft.
- `longdesc` {{deprecated_inline}}

  - : Ein Link zu einer detaillierteren Beschreibung des Bildes. Mögliche Werte sind eine {{Glossary("URL", "URL")}} oder eine Element-`id`(/de/docs/Web/HTML/Global_attributes/id).

    > [!NOTE]
    > Dieses Attribut wird in der neuesten {{Glossary("W3C", "W3C")}} Version erwähnt, [HTML 5.2](https://html.spec.whatwg.org/multipage/obsolete.html#element-attrdef-img-longdesc), wurde jedoch aus dem {{Glossary("WHATWG", "WHATWG")}}'s [HTML Living Standard](https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element) entfernt. Es hat eine ungewisse Zukunft; Autoren sollten eine {{Glossary("WAI", "WAI")}}-{{Glossary("ARIA", "ARIA")}} Alternative wie [`aria-describedby`](https://www.w3.org/TR/wai-aria-1.1/#aria-describedby) oder [`aria-details`](https://www.w3.org/TR/wai-aria-1.1/#aria-details) verwenden.

- `name` {{deprecated_inline}}
  - : Ein Name für das Element. Verwenden Sie stattdessen das [`id`](/de/docs/Web/HTML/Global_attributes/id)-Attribut.
- `vspace` {{deprecated_inline}}
  - : Die Anzahl der Pixel des Leerraums oberhalb und unterhalb des Bildes. Verwenden Sie stattdessen die {{cssxref('margin')}} CSS-Eigenschaft.

## Styling mit CSS

`<img>` ist ein [ersetztes Element](/de/docs/Web/CSS/Replaced_element); es hat standardmäßig einen {{cssxref("display")}} Wert von `inline`, aber seine Standardabmessungen werden durch die intrinsischen Werte des eingebetteten Bildes definiert, wie wenn es `inline-block` wäre. Sie können Eigenschaften wie {{cssxref("border")}}/{{cssxref("border-radius")}}, {{cssxref("padding")}}/{{cssxref("margin")}}, {{cssxref("width")}}, {{cssxref("height")}}, usw. auf ein Bild setzen.

`<img>` hat keine Grundlinie, sodass, wenn Bilder in einem Inline-Formatierungskontext mit {{cssxref("vertical-align", "vertical-align: baseline")}} verwendet werden, der untere Rand des Bildes auf der Textgrundlinie platziert wird.

Sie können die {{cssxref("object-position")}} Eigenschaft verwenden, um das Bild innerhalb des Rahmens des Elements zu positionieren, und die {{cssxref("object-fit")}} Eigenschaft, um die Größe des Bildes innerhalb des Rahmens anzupassen (zum Beispiel, ob das Bild in den Rahmen passen oder ihn füllen soll, auch wenn beschneiden erforderlich ist).

Abhängig von seinem Typ kann ein Bild eine intrinsische Breite und Höhe haben. Für einige Bildtypen sind jedoch intrinsische Dimensionen unnötig. {{Glossary("SVG", "SVG")}}-Bilder beispielsweise haben keine intrinsischen Dimensionen, wenn ihr Wurzel-{{SVGElement("svg")}}-Element keine `width` oder `height`-Angabe hat.

## Barrierefreiheit

### Bedeutungsvolle alternative Beschreibungen verfassen

Der Wert des `alt`-Attributs sollte eine klare und prägnante textliche Ersatzbeschreibung für den Inhalt des Bildes bieten. Es sollte nicht das Vorhandensein des Bildes selbst oder den Dateinamen des Bildes beschreiben. Wenn das `alt`-Attribut absichtlich weggelassen wird, weil das Bild kein textuelles Äquivalent hat, sollten Sie alternative Methoden erwägen, um das zu präsentieren, was das Bild zu kommunizieren versucht.

#### Nicht

```html example-bad
<img alt="image" src="penguin.jpg" />
```

#### Stattdessen

```html example-good
<img alt="A Penguin on a beach." src="penguin.jpg" />
```

Ein wichtiger Test der Barrierefreiheit besteht darin, den Inhalt des `alt`-Attributs zusammen mit dem vorausgehenden Text zu lesen, um zu sehen, ob es dieselbe Bedeutung wie das Bild vermittelt. Wenn das Bild beispielsweise von dem Satz "Auf meinen Reisen sah ich ein süßes kleines Tier:" vorangegangen war, könnte das _Nicht_-Beispiel von einem Bildschirmleser als "Auf meinen Reisen sah ich ein süßes kleines Tier: Bild" gelesen werden, was keinen Sinn ergibt. Das _Stattdessen_-Beispiel könnte von einem Bildschirmleser als "Auf meinen Reisen sah ich ein süßes kleines Tier: Ein Pinguin am Strand." gelesen werden, was Sinn ergibt.

Für Bilder, die eine Aktion auslösen sollen, z.B. Bilder innerhalb eines {{htmlelement("a")}}- oder {{htmlelement("button")}}-Elements, sollten Sie erwägen, die ausgelöste Aktion im `alt`-Attributwert zu beschreiben. Sie könnten beispielsweise `alt="nächste Seite"` statt `alt="Pfeil rechts"` schreiben. Sie könnten auch erwägen, eine optionale weitere Beschreibung in einem `title`-Attribut hinzuzufügen; dies kann von Bildschirmlesern gelesen werden, wenn der Benutzer dies anfordert.

Wenn ein `alt`-Attribut bei einem Bild nicht vorhanden ist, können einige Bildschirmleser stattdessen den Dateinamen des Bildes ankündigen. Dies kann eine verwirrende Erfahrung sein, wenn der Dateiname nicht repräsentativ für den Inhalt des Bildes ist.

- [Ein Alt-Entscheidungsbaum • Bilder • WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/images/decision-tree/)
- [Alt-Texte: Der ultimative Leitfaden — Axess Lab](https://axesslab.com/alt-texts/)
- [Wie man großartige Alt-Texte entwirft: Eine Einführung | Deque](https://www.deque.com/blog/great-alt-text-introduction/)
- [MDN Erklärt WCAG, Richtlinie 1.1 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verstehen von Erfolgskriterium 1.1.1 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

### SVG als Bild identifizieren

Aufgrund eines [VoiceOver-Bugs](https://webkit.org/b/216364) kündigt VoiceOver SVG-Bilder nicht korrekt als Bilder an. Fügen Sie [`role="img"`](/de/docs/Web/Accessibility/ARIA/Roles/img_role) zu allen `<img>`-Elementen mit SVG-Quelldateien hinzu, um sicherzustellen, dass unterstützende Technologien das SVG korrekt als Bildinhalt ankündigen.

```html
<img src="mdn.svg" alt="MDN" role="img" />
```

### Das title-Attribut

Das [`title`](/de/docs/Web/HTML/Global_attributes/title)-Attribut ist kein akzeptabler Ersatz für das `alt`-Attribut. Zusätzlich sollten Sie vermeiden, den `alt`-Attributwert in ein auf demselben Bild erklärtes `title`-Attribut zu duplizieren. Dies kann dazu führen, dass einige Bildschirmleser denselben Text doppelt ankündigen, was eine verwirrende Erfahrung schafft.

Das `title`-Attribut sollte auch nicht als ergänzende Bildunterschrifteninformation verwendet werden, um eine `alt`-Beschreibung des Bildes zu begleiten. Wenn ein Bild eine Bildunterschrift benötigt, verwenden Sie die [`figure`](/de/docs/Web/HTML/Element/figure) und [`figcaption`](/de/docs/Web/HTML/Element/figcaption)-Elemente.

Der Wert des `title`-Attributs wird dem Benutzer in der Regel als Tooltip präsentiert, der kurz erscheint, nachdem der Cursor über dem Bild anhält. Obwohl dies dem Benutzer zusätzliche Informationen geben _kann_, sollten Sie nicht davon ausgehen, dass der Benutzer es jemals sehen wird: Der Benutzer könnte nur eine Tastatur oder einen Touchscreen haben. Wenn Sie Informationen haben, die für den Benutzer besonders wichtig oder wertvoll sind, präsentieren Sie diese inline mit einer der oben genannten Methoden anstelle der Verwendung von `title`.

- [Die Verwendung des HTML-Title-Attributs – aktualisiert | Die Paciello-Gruppe](https://www.tpgi.com/using-the-html-title-attribute-updated/)

## Beispiele

### Alternativtext

Das folgende Beispiel bettet ein Bild in die Seite ein und enthält Alternativtext zur Barrierefreiheit.

```html
<img src="favicon144.png" alt="MDN" />
```

{{ EmbedLiveSample('Alternative_text', '100%', '160') }}

### Bildlink

Dieses Beispiel baut auf dem vorherigen auf und zeigt, wie man das Bild in einen Link verwandelt. Dazu muss der `<img>`-Tag innerhalb der {{HTMLElement("a")}}-Elemente verschachtelt werden. Sie sollten den Alternativtext so beschreiben, dass er die Ressource, auf die der Link verweist, beschreibt, so als würden Sie stattdessen einen Textlink verwenden.

```html
<a href="https://developer.mozilla.org">
  <img src="favicon144.png" alt="Visit the MDN site" />
</a>
```

{{ EmbedLiveSample('Image_link', '100%', '160') }}

### Verwendung des srcset-Attributs

In diesem Beispiel fügen wir ein `srcset`-Attribut mit einem Verweis auf eine hochauflösende Version des Logos hinzu; dies wird anstelle des `src`-Bildes auf hochauflösenden Geräten geladen. Das im `src`-Attribut referenzierte Bild wird als `1x`-Kandidat in {{Glossary("User_agent", "User Agents")}} gezählt, die `srcset` unterstützen.

```html
<img src="favicon72.png" alt="MDN" srcset="favicon144.png 2x" />
```

{{EmbedLiveSample("Using_the_srcset_attribute", "100%", "160")}}

### Verwendung der srcset- und sizes-Attribute

Das `src`-Attribut wird in {{Glossary("User_agent", "User Agents")}}, die `srcset` unterstützen, ignoriert, wenn `w`-Deskriptoren enthalten sind. Wenn die Medienbedingung `(max-width: 600px)` zutrifft, wird das 200 Pixel breite Bild geladen (es ist dasjenige, das `200px` am nächsten kommt), andernfalls wird das andere Bild geladen.

```html
<img
  src="clock-demo-200px.png"
  alt="The time is 12:45."
  srcset="clock-demo-200px.png 200w, clock-demo-400px.png 400w"
  sizes="(max-width: 600px) 200px, 50vw" />
```

{{EmbedLiveSample("Using_the_srcset_and_sizes_attributes", "100%", 350)}}

> [!NOTE]
> Um die Größenänderung in Aktion zu sehen, {{LiveSampleLink('Using_the_srcset_and_sizes_attributes', 'sehen Sie das Beispiel auf einer separaten Seite')}}, damit Sie den Inhaltsbereich tatsächlich in der Größe ändern können.

## Sicherheits- und Datenschutzbedenken

Obwohl `<img>`-Elemente harmlose Verwendungen haben, können sie unerwünschte Konsequenzen für die Sicherheit und Privatsphäre des Benutzers haben. Siehe [Referer-Header: Datenschutz- und Sicherheitsbedenken](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns) für weitere Informationen und Milderungen.

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
          >Strukturierter Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#embedded_content"
          >eingebetteter Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#palpable_content"
          >greifbarer Inhalt</a
        >. Wenn das Element ein <code>usemap</code>-Attribut hat, gehört es auch zur Kategorie der interaktiven Inhalte.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Inhalte</th>
      <td>Keine; es ist ein {{Glossary("void_element", "leeres Element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Wechsel</th>
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
            mit nicht leerem <code>alt</code>-Attribut oder ohne
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
              ><code>präsentation</code></a
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
                    href="/de/docs/Web/Accessibility/ARIA/Roles/button_role"
                    >Taste</a
                  ></code
                >
              </li>
              <li>
                <code
                  ><a
                    href="/de/docs/Web/Accessibility/ARIA/Roles/checkbox_role"
                    >Kontrollkästchen</a
                  ></code
                >
              </li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Roles/link_role"><code>link</code></a></li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Roles/menuitem_role"><code>Menüelement</code></a></li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role"><code>Menüelementkontrollkästchen</code></a></li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role"><code>Menüelementradio</code></a></li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Roles/option_role"><code>option</code></a></li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Roles/progressbar_role"><code>Fortschrittsanzeige</code></a></li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Roles/scrollbar_role"><code>Bildlaufleiste</code></a></li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Roles/separator_role"><code>Separator</code></a></li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Roles/slider_role"><code>Schieberegler</code></a></li>
              <li>
                <code
                  ><a
                    href="/de/docs/Web/Accessibility/ARIA/Roles/switch_role"
                    >Schalter</a
                  ></code
                >
              </li>
              <li>
                <code
                  ><a href="/de/docs/Web/Accessibility/ARIA/Roles/tab_role"
                    >Tab</a
                  ></code
                >
              </li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Roles/treeitem_role"><code>Baumelement</code></a></li>
            </ul>
          </li>
          <li>
            mit leerem <code>alt</code>-Attribut, <a href="/de/docs/Web/Accessibility/ARIA/Roles/none_role"><code>keine</code></a>
            oder <a href="/de/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>präsentation</code></a>
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
- [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Schnittstelle für dieses Element
- [Bilder in HTML](/de/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML)
- [Leitfaden für Bilddateitypen und -formate](/de/docs/Web/Media/Formats/Image_types)
- [Responsive Bilder](/de/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
