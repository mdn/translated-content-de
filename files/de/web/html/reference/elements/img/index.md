---
title: "<img>: Das Image Embed-Element"
slug: Web/HTML/Reference/Elements/img
l10n:
  sourceCommit: a06a27b6f8eea66b66d848517aab0815a170c7cc
---

{{HTMLSidebar}}

Das **`<img>`** [HTML](/de/docs/Web/HTML)-Element bettet ein Bild in das Dokument ein.

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

Das obige Beispiel zeigt die Verwendung des `<img>` Elements:

- Das `src`-Attribut hält den Pfad zum Bild, das Sie einbetten möchten. Es ist nicht zwingend erforderlich, wenn das [srcset](/de/docs/Web/API/HTMLImageElement/srcset)-Attribut verfügbar ist. Es muss jedoch mindestens eines der Attribute `src` oder `srcset` angegeben werden.
- Das `alt`-Attribut enthält einen textuellen Ersatz für das Bild, der obligatorisch ist und **äußerst nützlich** für die Barrierefreiheit ist. Screenreader lesen den Attributwert ihren Benutzern vor, damit sie wissen, was das Bild bedeutet. Alternativer Text wird auch auf der Seite angezeigt, wenn das Bild aus irgendeinem Grund nicht geladen werden kann, zum Beispiel bei Netzwerkfehlern, Inhaltsblockierung oder abgelaufenen Links.

Es gibt viele andere Attribute, um verschiedene Zwecke zu erreichen:

- [Referrer](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy)/{{Glossary("CORS", "CORS")}}-Steuerung für Sicherheit und Privatsphäre: siehe [`crossorigin`](#crossorigin) und [`referrerpolicy`](#referrerpolicy).
- Verwenden Sie sowohl [`width`](#width) als auch [`height`](#height), um die intrinsische Größe des Bildes festzulegen, damit es schon vor dem Laden Platz einnimmt und so Layout-Verschiebungen im Inhalt minimiert werden.
- Responsive Image-Hinweise mit [`sizes`](#sizes) und [`srcset`](#srcset) (siehe auch das {{htmlelement("picture")}}-Element und unseren [Leitfaden für Responsive Images](/de/docs/Web/HTML/Guides/Responsive_images)).

## Unterstützte Bildformate

Der HTML-Standard listet nicht auf, welche Bildformate unterstützt werden sollten, sodass {{Glossary("user_agent", "User Agents")}} unterschiedliche Formate unterstützen könnten.

> [!NOTE]
> Der [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types) bietet umfassende Informationen über Bildformate und deren Unterstützung in Webbrowsern.
> Dieser Abschnitt ist nur eine Zusammenfassung!

Die Bilddateiformate, die am häufigsten im Web verwendet werden, sind:

- [APNG (Animated Portable Network Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#apng_animated_portable_network_graphics) — Gute Wahl für verlustfreie Animationssequenzen (GIF ist weniger performant)
- [AVIF (AV1 Image File Format)](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) — Gute Wahl für Bilder und animierte Bilder aufgrund der hohen Leistung.
- [GIF (Graphics Interchange Format)](/de/docs/Web/Media/Guides/Formats/Image_types#gif_graphics_interchange_format) — Gute Wahl für _einfache_ Bilder und Animationen.
- [JPEG (Joint Photographic Expert Group Image)](/de/docs/Web/Media/Guides/Formats/Image_types#jpeg_joint_photographic_experts_group_image) — Gute Wahl für verlustbehaftete Komprimierung von Standbildern (derzeit am beliebtesten).
- [PNG (Portable Network Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#png_portable_network_graphics) — Gute Wahl für verlustfreie Komprimierung von Standbildern (etwas bessere Qualität als JPEG).
- [SVG (Scalable Vector Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#svg_scalable_vector_graphics) — Vektorbildformat. Wird für Bilder verwendet, die in verschiedenen Größen exakt gezeichnet werden müssen.
- [WebP (Web Picture Format)](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) — Hervorragende Wahl für Bilder und animierte Bilder.

Formate wie [WebP](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) und [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) werden empfohlen, da sie viel besser performen als PNG, JPEG, GIF für sowohl Stand- als auch animierte Bilder.

SVG bleibt das empfohlene Format für Bilder, die in verschiedenen Größen exakt gezeichnet werden müssen.

## Bildladefehler

Wenn beim Laden oder Rendern eines Bildes ein Fehler auftritt und ein `onerror` Event-Handler für das [`error`](/de/docs/Web/API/HTMLElement/error_event) Ereignis eingerichtet wurde, wird dieser Event-Handler aufgerufen. Dies kann in mehreren Situationen passieren, darunter:

- Die `src` oder `srcset` Attribute sind leer (`""`) oder `null`.
- Die `src` {{Glossary("URL", "URL")}} ist die gleiche wie die URL der Seite, die der Benutzer gerade ansieht.
- Das Bild ist in irgendeiner Weise beschädigt, was es verhindert, dass es geladen wird.
- Die Metadaten des Bildes sind so beschädigt, dass es unmöglich ist, seine Abmessungen zu ermitteln, und es wurden keine Abmessungen in den Attributen des `<img>` Elements angegeben.
- Das Bild ist in einem Format, das von den {{Glossary("user_agent", "User Agents")}} nicht unterstützt wird.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- [`alt`](/de/docs/Web/API/HTMLImageElement/alt#usage_notes)

  - : Definiert Text, der das Bild auf der Seite ersetzen kann.

    > [!NOTE]
    > Browser zeigen nicht immer Bilder an. Es gibt einige Situationen, in denen ein Browser möglicherweise keine Bilder anzeigt, wie zum Beispiel:
    >
    > - Nicht visuelle Browser (wie die, die von Menschen mit Sehbehinderungen verwendet werden)
    > - Der Benutzer entscheidet sich, Bilder nicht anzuzeigen (Bandbreitensparen, Datenschutzgründe)
    > - Das Bild ist ungültig oder ein [nicht unterstützter Typ](#unterstützte_bildformate)
    >
    > In diesen Fällen kann der Browser das Bild durch den Text im `alt`-Attribut des Elements ersetzen. Aus diesen und anderen Gründen sollte nach Möglichkeit für `alt` ein nützlicher Wert angegeben werden.

    Das Setzen dieses Attributs auf eine leere Zeichenkette (`alt=""`) zeigt an, dass dieses Bild _nicht_ ein wesentlicher Bestandteil des Inhalts ist (es ist Dekoration oder ein Tracking-Pixel) und dass nicht-visuelle Browser es beim {{Glossary("Engine/Rendering", "Rendering")}} weglassen können. Visuelle Browser verbergen auch das defekte Bildsymbol, wenn das `alt`-Attribut leer ist und das Bild nicht angezeigt werden konnte.

    Dieses Attribut wird auch verwendet, wenn das Bild in Text kopiert und eingefügt oder ein verknüpftes Bild in ein Lesezeichen gespeichert wird.

- `attributionsrc` {{experimental_inline}}

  - : Gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header zusammen mit der Bildanfrage sendet.

    Auf der Serverseite wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}} oder {{httpheader("Attribution-Reporting-Register-Trigger")}} Headers in der Antwort auszulösen, um eine bildbasierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#html-based_event_sources) oder einen Attribution-Trigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#html-based_attribution_triggers) entsprechend zu registrieren. Welcher Antwortheader zurückgesendet werden sollte, hängt vom Wert des `Attribution-Reporting-Eligible` Headers ab, der die Registrierung ausgelöst hat.

    Das entsprechende Quell- oder Triggerevent wird ausgelöst, sobald der Browser die Antwort mit der Bilddatei erhält.

    > [!NOTE]
    > Weitere Informationen finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

    Es gibt zwei Versionen dieses Attributs, die Sie festlegen können:

    - Boolean, also nur den Namen `attributionsrc`. Dies gibt an, dass Sie möchten, dass der {{httpheader("Attribution-Reporting-Eligible")}}-Header an denselben Server gesendet wird, auf den das `src`-Attribut verweist. Dies ist in Ordnung, wenn Sie die Registrierung der Attributionsquelle oder des Triggers auf demselben Server behandeln. Beim Registrieren eines Attributionstriggers ist diese Eigenschaft optional, und es wird ein boolescher Wert verwendet, wenn sie weggelassen wird.
    - Wert, der eine oder mehrere URLs enthält, zum Beispiel:

    ```html
    <img
      src="image-file.png"
      alt="My image file description"
      attributionsrc="https://a.example/register-source
                         https://b.example/register-source" />
    ```

    Dies ist nützlich in Fällen, in denen die angeforderte Ressource nicht auf einem Server liegt, den Sie kontrollieren, oder Sie einfach die Attributionsquellenregistrierung auf einem anderen Server durchführen möchten. In diesem Fall können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcenanforderung erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header zusätzlich zur Ursprungsquelle an die in `attributionSrc` angegebenen URL(s) gesendet. Diese URLs können dann mit einem entsprechenden {{httpheader("Attribution-Reporting-Register-Source")}} oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header antworten, um die Registrierung abzuschließen.

    > [!NOTE]
    > Durch die Angabe mehrerer URLs können mehrere Attributionsquellen an derselben Funktion registriert werden. Sie könnten zum Beispiel verschiedene Kampagnen haben, deren Erfolg Sie messen möchten, was die Erstellung unterschiedlicher Berichte zu unterschiedlichen Daten beinhaltet.

- [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)

  - : Gibt an, ob das Abrufen des Bildes unter Verwendung einer {{Glossary("CORS", "CORS")}} Anfrage durchgeführt werden muss. Bilddaten von einem [CORS-aktivierten Bild](/de/docs/Web/HTML/How_to/CORS_enabled_image) zurückgegeben aus einem CORS-Request können im {{HTMLElement("canvas")}}-Element wiederverwendet werden, ohne als "[verunreinigt](/de/docs/Web/HTML/How_to/CORS_enabled_image#security_and_tainted_canvases)" markiert zu sein.

    Wenn das `crossorigin`-Attribut _nicht_ angegeben ist, wird eine Nicht-CORS-Anfrage gesendet (ohne den {{httpheader("Origin")}}-Anforderungsheader), und der Browser markiert das Bild als verunreinigt und beschränkt den Zugriff auf seine Bilddaten, was dessen Nutzung in {{HTMLElement("canvas")}}-Elementen verhindert.

    Wenn das `crossorigin`-Attribut _angegeben_ ist, wird eine CORS-Anfrage gesendet (mit dem {{httpheader("Origin")}}-Anforderungsheader), aber wenn der Server sich nicht dafür entscheidet, den plattformübergreifenden Zugriff auf die Bilddaten durch die Ursprungswebsite zuzulassen (durch das Nichtversenden eines {{httpheader("Access-Control-Allow-Origin")}}-Antwortheaders oder durch den Ausschluss der Ursprungswebsite in einem {{httpheader("Access-Control-Allow-Origin")}}-Antwortheader, den er sendet), dann blockiert der Browser das Bildladen und protokolliert einen CORS-Fehler in der Entwicklerkonsole.

    Erlaubte Werte:

    - `anonymous`
      - : Eine CORS-Anfrage wird ohne Anmeldedaten gesendet (d.h. keine {{Glossary("cookie", "Cookies")}}, [X.509-Zertifikate](https://datatracker.ietf.org/doc/html/rfc5280) oder {{httpheader("Authorization")}}-Anforderungsheader).
    - `use-credentials`
      - : Die CORS-Anfrage wird mit eingeschlossenen Anmeldedaten gesendet (d.h. Cookies, X.509-Zertifikate und der `Authorization` Anforderungsheader). Wenn der Server sich nicht dafür entscheidet, Anmeldedaten mit der Ursprungswebsite zu teilen (indem er den `Access-Control-Allow-Credentials: true`-Antwortheader zurücksendet), markiert der Browser das Bild als verunreinigt und beschränkt den Zugriff auf seine Bilddaten.

    Wenn das Attribut einen ungültigen Wert hat, behandeln Browser es so, als wäre der Wert `anonymous` verwendet worden. Für zusätzliche Informationen siehe [CORS-Einstellungen für Attribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin).

- `decoding`

  - : Dieses Attribut gibt dem Browser einen Hinweis darauf, ob er die Bilddecodierung zusammen mit dem Rendern des anderen DOM-Inhalts in einem einzigen Darstellungsschritt durchführen soll, der "korrekter" aussieht (`sync`), oder ob er den anderen DOM-Inhalt zuerst rendern und präsentieren soll und dann das Bild decodieren und später präsentieren soll (`async`). In der Praxis bedeutet `async`, dass der nächste Paint nicht auf die Bilddecodierung wartet.

    Es ist oft schwierig, bei der Verwendung von `decoding` auf statischen `<img>`-Elementen einen spürbaren Effekt zu erkennen. Sie werden wahrscheinlich zunächst als leere Bilder gerendert, während die Bilddateien geladen (entweder aus dem Netzwerk oder aus dem Cache) und dann unabhängig behandelt werden, sodass das "Synchronisieren" von Inhaltsaktualisierungen weniger offensichtlich ist. Das Blockieren der Darstellung während der Decodierung passiert kann jedoch auch gemessen werden — selbst wenn es mit dem menschlichen Auge schwierig zu beobachten ist. Weitere Analysen finden Sie unter [Was macht das Bilddecodierungsattribut eigentlich?](https://www.tunetheweb.com/blog/what-does-the-image-decoding-attribute-actually-do/) (tunetheweb.com, 2023).

    Die Verwendung unterschiedlicher `decoding`-Typen kann zu spürbareren Unterschieden führen, wenn `<img>`-Elemente dynamisch per JavaScript in das DOM eingefügt werden — siehe [`HTMLImageElement.decoding`](/de/docs/Web/API/HTMLImageElement/decoding) für weitere Details.

    Erlaubte Werte:

    - `sync`
      - : Decodieren Sie das Bild synchron zusammen mit dem Rendern des anderen DOM-Inhalts und präsentieren Sie alles zusammen.
    - `async`
      - : Decodieren Sie das Bild asynchron nach dem Rendern und Präsentieren des anderen DOM-Inhalts.
    - `auto`
      - : Keine Präferenz für den Decodierungsmodus; der Browser entscheidet, was am besten für den Benutzer ist. Dies ist der Standardwert.

- [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming)

  - : Markiert das Bild zur Beobachtung durch die [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)-API. Der angegebene Wert wird zu einem Identifikator für das beobachtete Bildelement. Siehe auch die Seite des [`elementtiming`-Attributs](/de/docs/Web/HTML/Reference/Attributes/elementtiming).

- `fetchpriority`

  - : Gibt einen Hinweis auf die relative Priorität für das Abrufen des Bildes.
    Erlaubte Werte:

    - `high`
      - : Abrufen des Bildes mit hoher Priorität im Vergleich zu anderen Bildern.
    - `low`
      - : Abrufen des Bildes mit niedriger Priorität im Vergleich zu anderen Bildern.
    - `auto`
      - : Keine Präferenz für die Abrufpriorität festlegen.
        Dies ist der Standardwert.
        Wird angewendet, wenn kein Wert oder ein ungültiger Wert gesetzt ist.

    Weitere Informationen finden Sie unter [`HTMLImageElement.fetchPriority`](/de/docs/Web/API/HTMLImageElement/fetchPriority).

- `height`

  - : Die intrinsische Höhe des Bildes in Pixel. Muss eine Ganzzahl ohne Einheit sein.

    > [!NOTE]
    > Das Hinzufügen von `height` und [`width`](#width) ermöglicht es dem Browser, das {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Bildes zu berechnen, bevor das Bild geladen wird. Dieses Seitenverhältnis wird verwendet, um den benötigten Platz zur Anzeige des Bildes zu reservieren, was eine Layoutverschiebung beim Herunterladen und Anzeigen des Bildes auf dem Bildschirm reduziert oder sogar verhindert. Die Reduzierung der Layoutverschiebung ist ein wesentlicher Bestandteil einer guten Benutzererfahrung und Webleistung.

- `ismap`

  - : Dieses boolesche Attribut zeigt an, dass das Bild Teil einer [serverseitigen Karte](https://en.wikipedia.org/wiki/Image_map#Server-side) ist. In diesem Fall werden die Koordinaten, an denen der Benutzer auf das Bild geklickt hat, an den Server gesendet.

    > [!NOTE]
    > Dieses Attribut ist nur zulässig, wenn das `<img>`-Element ein Nachfolger eines {{htmlelement("a")}}-Elements mit gültigem [`href`](/de/docs/Web/HTML/Reference/Elements/a#href)-Attribut ist. Dies bietet Benutzern ohne Zeigegeräte ein Fallback-Ziel.

- `loading`

  - : Gibt an, wie der Browser das Bild laden soll:

    - `eager`
      - : Lädt das Bild sofort, unabhängig davon, ob sich das Bild derzeit innerhalb des sichtbaren Viewports befindet oder nicht (dies ist der Standardwert).
    - `lazy`
      - : Verzögert das Laden des Bildes, bis es eine berechnete Entfernung zum Viewport erreicht, die vom Browser definiert wird. Ziel ist es, den Netzwerk- und Speicherbedarf zu vermeiden, der erforderlich ist, um das Bild zu verarbeiten, bis es mit hoher Wahrscheinlichkeit benötigt wird. Dies verbessert im Allgemeinen die Leistung der Inhalte in den meisten typischen Anwendungsfällen.

    > [!NOTE]
    > Das Laden wird nur verzögert, wenn JavaScript aktiviert ist. Dies ist eine Gegenmaßnahme gegen Tracking, denn wenn ein Benutzeragent Lazy Loading unterstützt, während Scripting deaktiviert ist, wäre es einer Website immer noch möglich, die ungefähre Scrollposition eines Benutzers während einer Sitzung zu verfolgen, indem strategisch Bilder im Markup einer Seite platziert werden, sodass ein Server verfolgen kann, wie viele Bilder angefordert werden und wann.

    > [!NOTE]
    > Bilder mit `loading`, eingestellt auf `lazy`, werden niemals geladen, wenn sie keinen sichtbaren Teil eines Elements überlappen, selbst wenn das Laden dieser Bilder dies ändern würde, da nicht geladene Bilder eine `width` und `height` von `0` haben. Das Hinzufügen von `width` und `height` zu faul geladenen Bildern behebt dieses Problem und ist eine bewährte Praxis, die [von der Spezifikation empfohlen wird](https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element). Dadurch werden auch Layoutverschiebungen verhindert.

- `referrerpolicy`

  - : Eine Zeichenkette, die angibt, welchen Referrer beim Abrufen der Ressource verwendet werden soll:

    - `no-referrer`: Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}}-Header wird nicht an {{Glossary("origin", "Ursprünge")}} ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`: Der gesendete Referrer wird auf den Ursprung der referenzierenden Seite beschränkt sein: sein [Schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`: Der an andere Ursprünge gesendete Referrer wird auf das Schema, den Host und den Port beschränkt. Navigationen im selben Ursprung enthalten dennoch den Pfad.
    - `same-origin`: Ein Referrer wird für {{Glossary("Same-origin_policy", "den selben Ursprung")}} gesendet, aber plattformübergreifende Anfragen enthalten keine Referrer-Informationen.
    - `strict-origin`: Senden Sie nur den Ursprung des Dokuments als Referrer, wenn das Protokollsicherheitsniveau gleich bleibt (HTTPS→HTTPS), aber senden Sie es nicht an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard): Senden Sie eine vollständige URL bei einer Same-Origin-Anforderung, senden Sie nur den Ursprung, wenn das Protokollsicherheitsniveau gleich bleibt (HTTPS→HTTPS), und senden Sie keinen Header an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `unsafe-url`: Der Referrer wird den Ursprung _und_ den Pfad enthalten (aber nicht den [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), das [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder den [Benutzernamen](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge weiterleitet.

- `sizes`

  - : Eine oder mehrere durch Komma getrennte Zeichenfolgen, die eine Reihe von Quellgrößen angeben. Jede Quellgröße besteht aus:

    1. Einer [Medienbedingung](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#syntax). Diese muss für den letzten Eintrag in der Liste weggelassen werden.
    2. Einem Quellgrößenwert.

    Medienbedingungen beschreiben Eigenschaften des _Viewports_ und nicht des _Bildes_. Zum Beispiel `(max-height: 500px) 1000px` schlägt die Verwendung einer Quelle mit einer Breite von 1000px vor, wenn der _Viewport_ nicht höher als 500px ist. Da ein Quellgrößenbeschreiber dazu verwendet wird, die Breite des Bildes während des Layouts der Seite zu spezifizieren, basiert die Medienbedingung typischerweise (aber nicht unbedingt) auf den [Breiteninformationen](/de/docs/Web/CSS/@media/width).

    Quellgrößenwerte spezifizieren die angedachte Anzeigebreite des Bildes. {{Glossary("User_agent", "User Agents")}} verwenden die aktuelle Quellgröße, um eine der von dem `srcset`-Attribut gelieferten Quellen auszuwählen, wenn diese Quellen mit Breitenbeschreibern (`w`) beschrieben werden. Die gewählte Quellgröße beeinflusst die {{Glossary("intrinsic_size", "intrinsische Größe")}} des Bildes (die Anzeigengröße des Bildes, falls kein {{Glossary("CSS", "CSS")}}-Stil angewendet wird). Wenn das `srcset`-Attribut fehlt oder keine Werte mit einem Breitenbeschreiber enthält, hat das `sizes`-Attribut keine Wirkung.

    Ein Quellgrößenwert kann jede nicht-negative [Länge](/de/docs/Web/CSS/length) sein. Es dürfen keine CSS-Funktionen außer den [Mathematischen Funktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#math_functions) verwendet werden. Einheiten werden in derselben Weise wie bei [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries) interpretiert, was bedeutet, dass alle Relativlängeneinheiten relativ zur Wurzel des Dokuments und nicht zum `<img>`-Element sind, sodass ein `em`-Wert relativ zur Schriftgröße der Wurzel und nicht zur Schriftgröße des Bildes ist. [Prozentsätze](/de/docs/Web/CSS/percentage) sind nicht erlaubt.

    Das `sizes`-Attribut akzeptiert auch die folgenden Schlüsselwortwerte:

    - `auto`

      - : `auto` kann die gesamte Liste der Größen oder den ersten Eintrag in der Liste ersetzen. Es ist nur gültig in Kombination mit `loading="lazy"`, und es wird auf die [konkrete Größe](/de/docs/Web/CSS/image) des Bildes aufgelöst. Da die intrinsische Größe des Bildes noch nicht bekannt ist, sollten `width` und `height` Attribute (oder CSS-Äquivalente) ebenfalls spezifiziert werden, um [zu verhindern, dass der Browser eine Standardbreite von 300px annimmt](https://html.spec.whatwg.org/multipage/images.html#sizes-attributes:attr-dim-width).

- `src`
  - : Die Bild {{Glossary("URL", "URL")}}. Pflicht für das `<img>`-Element. Auf {{Glossary("Browsern", "Browsern")}}, die `srcset` unterstützen, wird `src` wie ein Kandidatenbild mit einem Pixeldichtenbeschreiber `1x` behandelt, es sei denn, ein Bild mit diesem Pixeldichtenbeschreiber ist bereits in `srcset` definiert oder `srcset` enthält `w`-Beschreiber.
- `srcset`

  - : Eine oder mehrere durch Komma getrennte Zeichenfolgen, die mögliche Bildquellen für den {{Glossary("user_agent", "User Agent")}} angeben, die verwendet werden können. Jede Zeichenfolge besteht aus:

    1. Einer {{Glossary("URL", "URL")}} zu einem Bild
    2. Optional: Leerzeichen gefolgt von einem der folgenden:

       - Einem Breitenbeschreiber (eine positive Ganzzahl direkt gefolgt von `w`). Der Breitenbeschreiber wird durch die im `sizes`-Attribut angegebene Quellgröße geteilt, um die effektive Pixeldichte zu berechnen.
       - Einem Pixeldichtenbeschreiber (eine positive Fließkommazahl direkt gefolgt von `x`).

    Wenn kein Beschreiber angegeben ist, erhält die Quelle einen Standardbeschreiber von `1x`.

    Es ist nicht korrekt, Breitenbeschreiber und Pixeldichtenbeschreiber im selben `srcset`-Attribut zu mischen. Doppelte Beschreiber (beispielsweise zwei Quellen im selben `srcset`, die beide mit `2x` beschrieben sind) sind ebenfalls ungültig.

    Wenn das `srcset`-Attribut Breitenbeschreiber verwendet, muss auch das `sizes`-Attribut vorhanden sein, andernfalls wird das `srcset` ignoriert.

    Der User Agent wählt nach eigenem Ermessen aus den verfügbaren Quellen aus. Dies gibt ihnen erheblichen Spielraum, ihre Auswahl basierend auf Benutzerpräferenzen oder {{Glossary("bandwidth", "Bandbreiten")}}-Bedingungen zu treffen. Sehen Sie sich unseren [Leitfaden für Responsive Images](/de/docs/Web/HTML/Guides/Responsive_images) für ein Beispiel an.

- `width`
  - : Die intrinsische Breite des Bildes in Pixel. Muss eine Ganzzahl ohne Einheit sein.
- `usemap`

  - : Die Teil-{{Glossary("URL", "URL")}} (beginnend mit `#`) einer mit dem Element verbundenen [Bildkarte](/de/docs/Web/HTML/Reference/Elements/map).

    > [!NOTE]
    > Sie können dieses Attribut nicht verwenden, wenn das `<img>`-Element sich innerhalb eines {{htmlelement("a")}} oder {{HTMLElement("button")}}-Elements befindet.

### Veraltete Attribute

- `align` {{deprecated_inline}}

  - : Richtet das Bild mit seinem umgebenden Kontext aus. Verwenden Sie die {{cssxref('float')}}- und/oder {{cssxref('vertical-align')}}-{{Glossary("CSS", "CSS")}}-Eigenschaften anstelle dieses Attributs. Erlaubte Werte:

    - `top`
      - : Entspricht `vertical-align: top` oder `vertical-align: text-top`
    - `middle`
      - : Entspricht `vertical-align: -moz-middle-with-baseline`
    - `bottom`
      - : Standard, entspricht `vertical-align: unset` oder `vertical-align: initial`
    - `left`
      - : Entspricht `float: left`
    - `right`
      - : Entspricht `float: right`

- `border` {{deprecated_inline}}
  - : Die Breite eines Rahmens um das Bild. Verwenden Sie die {{cssxref('border')}}-{{Glossary("CSS", "CSS")}}-Eigenschaft anstelle dieses Attributs.
- `hspace` {{deprecated_inline}}
  - : Die Anzahl der Pixel Weißraum links und rechts vom Bild. Verwenden Sie die {{cssxref('margin')}}-CSS-Eigenschaft anstelle dieses Attributs.
- `longdesc` {{deprecated_inline}}

  - : Ein Link zu einer detaillierteren Beschreibung des Bildes. Mögliche Werte sind eine {{Glossary("URL", "URL")}} oder eine Element-[`id`](/de/docs/Web/HTML/Reference/Global_attributes/id).

    > [!NOTE]
    > Dieses Attribut wird in der [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/obsolete.html#element-attrdef-img-longdesc) als veraltet betrachtet. Es hat eine ungewisse Zukunft; Autoren sollten eine {{Glossary("WAI", "WAI")}}-{{Glossary("ARIA", "ARIA")}}-Alternative wie [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) oder [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) verwenden.

- `name` {{deprecated_inline}}
  - : Ein Name für das Element. Verwenden Sie anstelle dieses Attributs das [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut.
- `vspace` {{deprecated_inline}}
  - : Die Anzahl der Pixel Weißraum über und unter dem Bild. Verwenden Sie die {{cssxref('margin')}}-CSS-Eigenschaft anstelle dieses Attributs.

## Styling mit CSS

`<img>` ist ein {{Glossary("replaced_elements", "ersetztes Element")}}; es hat standardmäßig einen {{cssxref("display")}}-Wert von `inline`, aber seine Standardabmessungen werden durch die intrinsischen Werte des eingebetteten Bildes definiert, so als wäre es `inline-block`. Sie können Eigenschaften wie {{cssxref("border")}}/{{cssxref("border-radius")}}, {{cssxref("padding")}}/{{cssxref("margin")}}, {{cssxref("width")}}, {{cssxref("height")}} usw. auf ein Bild anwenden.

`<img>` hat keine Grundlinie, sodass, wenn Bilder in einem Inline-Formatierungskontext mit {{cssxref("vertical-align", "vertical-align: baseline")}} verwendet werden, das Ende des Bildes auf die Textgrundlinie gesetzt wird.

Sie können die {{cssxref("object-position")}}-Eigenschaft verwenden, um das Bild innerhalb des Box-Elements zu positionieren, und die {{cssxref("object-fit")}}-Eigenschaft, um die Größenanpassung des Bildes innerhalb der Box anzupassen (z. B. ob das Bild in die Box passen soll oder ob es erforderlich sein könnte, Ausschnitte vorzunehmen).

Je nach Typ kann ein Bild eine intrinsische Breite und Höhe haben. Für einige Bildtypen sind jedoch keine intrinsischen Abmessungen erforderlich. {{Glossary("SVG", "SVG")}}-Bilder beispielsweise haben keine intrinsischen Abmessungen, wenn das Wurzelelement {{SVGElement("svg")}} keine `width`- oder `height`-Einstellungen hat.

## Barrierefreiheit

### Sinnvolle alternative Beschreibungen verfassen

Der Wert eines `alt`-Attributs sollte einen klaren und prägnanten Textersatz für den Bildinhalt liefern. Er sollte nicht das Vorhandensein des Bildes selbst oder den Dateinamen des Bildes beschreiben. Wenn das `alt`-Attribut absichtlich weggelassen wird, weil das Bild kein textequivalentes Pendant hat, sollten Sie alternative Methoden in Betracht ziehen, um das zu präsentieren, was das Bild zu vermitteln versucht.

#### No-Gos

```html example-bad
<img alt="image" src="penguin.jpg" />
```

#### Empfohlene Praxis

```html example-good
<img alt="A Penguin on a beach." src="penguin.jpg" />
```

Ein wichtiger Barrierefreiheitstest besteht darin, den Inhalt des `alt`-Attributs gemeinsam mit dem vorhergehenden Textinhalt zu lesen, um festzustellen, ob er dieselbe Bedeutung wie das Bild übermittelt. Wenn das Bild beispielsweise von dem Satz "Auf meinen Reisen sah ich ein süßes kleines Tier:" gefolgt wäre, könnte das _No-Go_-Beispiel von einem Screenreader als "Auf meinen Reisen sah ich ein süßes kleines Tier: Bild" vorgelesen werden, was keinen Sinn ergibt. Das _Empfohlene Praxis_-Beispiel könnte von einem Screenreader als "Auf meinen Reisen sah ich ein süßes kleines Tier: Ein Pinguin am Strand." vorgelesen werden, was Sinn ergibt.

Für Bilder, die eine Aktion auslösen sollen, z. B. Bilder, die innerhalb eines {{htmlelement("a")}}- oder {{htmlelement("button")}}-Elements verschachtelt sind, sollten Sie erwägen, die ausgelöste Aktion im Wert des `alt`-Attributs zu beschreiben. Sie könnten beispielsweise `alt="nächste Seite"` anstelle von `alt="Pfeil nach rechts"` schreiben. Sie könnten auch überlegen, eine optionale weitere Beschreibung in einem `title`-Attribut hinzuzufügen; dies kann von Screenreadern vorgelesen werden, wenn es der Benutzer wünscht.

Wenn ein `alt`-Attribut auf einem Bild nicht vorhanden ist, können einige Screenreader den Dateinamen des Bildes stattdessen ankündigen. Dies kann eine verwirrende Erfahrung sein, wenn der Dateiname nicht repräsentativ für den Bildinhalt ist.

- [Eine Alt-Entscheidungsbaum • Bilder • WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/images/decision-tree/)
- [Alt-Texte: Der ultimative Leitfaden — Axess Lab](https://axesslab.com/alt-texts/)
- [Wie man großartige Alt-Texte gestaltet: Eine Einführung | Deque](https://www.deque.com/blog/great-alt-text-introduction/)
- [MDN Verständnis von WCAG, Richtlinie 1.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Erklären des Erfolgskriteriums 1.1.1 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

### Identifizieren von SVG als Bild

Aufgrund eines [VoiceOver-Fehlers](https://webkit.org/b/216364) kündigt VoiceOver SVG-Bilder nicht korrekt als Bilder an. Fügen Sie [`role="img"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/img_role) zu allen `<img>`-Elementen mit SVG-Quelldateien hinzu, um sicherzustellen, dass unterstützende Technologien das SVG korrekt als Bildinhalt ankündigen.

```html
<img src="mdn.svg" alt="MDN" role="img" />
```

### Das title-Attribut

Das [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)-Attribut ist kein akzeptabler Ersatz für das `alt`-Attribut. Zusätzlich sollten Sie vermeiden, den Wert des `alt`-Attributs in einem `title`-Attribut desselben Bildes zu duplizieren. Dies könnte dazu führen, dass einige Screenreader denselben Text zweimal ankündigen, was eine verwirrende Erfahrung schafft.

Das `title`-Attribut sollte auch nicht als ergänzende Beschriftungsinformation verwendet werden, um die `alt`-Beschreibung eines Bildes zu begleiten. Wenn ein Bild eine Beschriftung benötigt, verwenden Sie die [`figure`](/de/docs/Web/HTML/Reference/Elements/figure) und [`figcaption`](/de/docs/Web/HTML/Reference/Elements/figcaption)-Elemente.

Der Wert des `title`-Attributs wird dem Benutzer normalerweise als Tooltip präsentiert, der kurz nach dem Anhalten des Cursors über dem Bild erscheint. Auch wenn dies dem Benutzer zusätzliche Informationen bieten kann, sollten Sie nicht davon ausgehen, dass der Benutzer dies jemals sehen wird: Der Benutzer hat möglicherweise nur eine Tastatur oder einen Touchscreen. Wenn Sie Informationen haben, die besonders wichtig oder wertvoll für den Benutzer sind, präsentieren Sie sie inline unter Verwendung einer der oben genannten Methoden anstelle der Verwendung von `title`.

- [Verwendung des HTML title-Attributs – aktualisiert | The Paciello Group](https://www.tpgi.com/using-the-html-title-attribute-updated/)

## Beispiele

### Alternativer Text

Das folgende Beispiel bettet ein Bild in die Seite ein und fügt alternativen Text zur Barrierefreiheit hinzu.

```html
<img src="/shared-assets/images/examples/favicon144.png" alt="MDN" />
```

{{ EmbedLiveSample('Alternative_text', '100%', '160') }}

### Bildlink

Dieses Beispiel baut auf dem vorhergehenden auf und zeigt, wie Sie das Bild in einen Link verwandeln können. Dazu müssen Sie die `<img>`-Tag innerhalb des {{HTMLElement("a")}}-Elements einbetten. Sie sollten den alternativen Text so gestalten, dass er die Ressource beschreibt, auf die der Link zeigt, als ob Sie einen Textlink verwenden würden.

```html
<a href="https://developer.mozilla.org">
  <img
    src="/shared-assets/images/examples/favicon144.png"
    alt="Visit the MDN site" />
</a>
```

{{ EmbedLiveSample('Image_link', '100%', '160') }}

### Verwenden des srcset-Attributs

In diesem Beispiel fügen wir ein `srcset`-Attribut mit einem Verweis auf eine hochauflösende Version des Logos hinzu; auf hochauflösenden Geräten wird dieses anstelle des `src`-Bildes geladen. Das im `src`-Attribut referenzierte Bild wird in {{Glossary("User_agent", "User Agents")}}, die `srcset` unterstützen, als `1x`-Kandidat angesehen.

```html
<img
  src="/shared-assets/images/examples/favicon72.png"
  alt="MDN"
  srcset="/shared-assets/images/examples/favicon144.png 2x" />
```

{{EmbedLiveSample("Using_the_srcset_attribute", "100%", "160")}}

### Verwenden der srcset- und sizes-Attribute

Das `src`-Attribut wird in {{Glossary("User_agent", "User Agents")}}, die `srcset` unterstützen, ignoriert, wenn `w`-Beschreiber enthalten sind. Wenn die Medienbedingung `(max-width: 600px)` erfüllt ist, wird das 200 Pixel breite Bild geladen (es ist das, welches `200px` am nächsten kommt), andernfalls wird das andere Bild geladen.

```html
<img
  src="clock-demo-200px.png"
  alt="The time is 12:45."
  srcset="clock-demo-200px.png 200w, clock-demo-400px.png 400w"
  sizes="(max-width: 600px) 200px, 50vw" />
```

{{EmbedLiveSample("Using_the_srcset_and_sizes_attributes", "100%", 350)}}

> [!NOTE]
> Um das Größenanpassen in Aktion zu sehen, {{LiveSampleLink('Using_the_srcset_and_sizes_attributes', 'sehen Sie sich das Beispiel auf einer separaten Seite an')}}, so dass Sie den Inhaltsbereich tatsächlich anpassen können.

## Sicherheits- und Datenschutzbedenken

Obwohl `<img>`-Elemente unschuldige Zwecke haben, können sie unerwünschte Konsequenzen für die Sicherheit und den Datenschutz der Benutzer haben. Weitere Informationen und Gegenmaßnahmen finden Sie unter [Referer-Header: Sicherheits- und Datenschutzbedenken](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns).

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
          >Satzinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#embedded_content"
          >eingebetteter Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#palpable_content"
          >spürbarer Inhalt</a
        >. Wenn das Element ein <code>usemap</code>-Attribut hat, gehört es auch zur Kategorie der interaktiven Inhalte.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "Leerelement")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss ein Start-Tag haben und darf kein End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Jedes Element, das eingebettete Inhalte akzeptiert.</td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <ul>
          <li>
            mit nicht-leerem <code>alt</code>-Attribut oder keinem
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
            mit nicht-leerem <code>alt</code>-Attribut:
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
            ohne <code>alt</code>-Attribut, kein <code>rolle</code> erlaubt
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
- [HTML-Bilder](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images)
- [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types)
- [Leitfaden für Responsive Images](/de/docs/Web/HTML/Guides/Responsive_images)
