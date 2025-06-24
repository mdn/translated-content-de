---
title: "<img>: Das Image-Embed-Element"
slug: Web/HTML/Reference/Elements/img
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{HTMLSidebar}}

Das **`<img>`** [HTML](/de/docs/Web/HTML) Element bettet ein Bild in das Dokument ein.

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

- Das `src` Attribut enthält den Pfad zu dem Bild, das Sie einbetten möchten. Es ist nicht obligatorisch, falls das [srcset](/de/docs/Web/API/HTMLImageElement/srcset) Attribut verfügbar ist. Mindestens eines der `src` oder `srcset` Attribute muss jedoch angegeben werden.
- Das `alt` Attribut enthält einen Textersatz für das Bild, der obligatorisch und **unglaublich nützlich** für die Barrierefreiheit ist — Screenreader lesen den Attributwert ihren Nutzern vor, damit sie wissen, was das Bild bedeutet. Alt-Text wird auch auf der Seite angezeigt, wenn das Bild aus irgendeinem Grund nicht geladen werden kann: zum Beispiel Netzwerkfehler, Inhaltsblockierung oder Linkverfall.

Es gibt viele andere Attribute, um verschiedene Zwecke zu erfüllen:

- [Referrer](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy)/{{Glossary("CORS", "CORS")}} Steuerung für Sicherheit und Datenschutz: siehe [`crossorigin`](#crossorigin) und [`referrerpolicy`](#referrerpolicy).
- Verwenden Sie sowohl [`width`](#width) als auch [`height`](#height), um die intrinsische Größe des Bildes festzulegen, damit es vor dem Laden Platz einnimmt und so Inhaltslayoutverschiebungen zu minimieren.
- Reaktionsfähige Bildhinweise mit [`sizes`](#sizes) und [`srcset`](#srcset) (siehe auch das {{htmlelement("picture")}} Element und unser [Responsive Images](/de/docs/Web/HTML/Guides/Responsive_images) Tutorial).

## Unterstützte Bildformate

Der HTML-Standard listet nicht auf, welche Bildformate unterstützt werden sollen, daher können {{Glossary("user_agent", "User Agents")}} unterschiedliche Formate unterstützen.

> [!NOTE]
> Der [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types) bietet umfassende Informationen über Bildformate und deren Unterstützung durch Webbrowser.
> Dieser Abschnitt ist nur eine Zusammenfassung!

Die am häufigsten im Web verwendeten Bilddateiformate sind:

- [APNG (Animated Portable Network Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#apng_animated_portable_network_graphics) — Gute Wahl für verlustfreie Animationssequenzen (GIF ist weniger performant)
- [AVIF (AV1 Image File Format)](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) — Gute Wahl für Bilder und animierte Bilder aufgrund hoher Leistung.
- [GIF (Graphics Interchange Format)](/de/docs/Web/Media/Guides/Formats/Image_types#gif_graphics_interchange_format) — Gute Wahl für _einfache_ Bilder und Animationen.
- [JPEG (Joint Photographic Expert Group image)](/de/docs/Web/Media/Guides/Formats/Image_types#jpeg_joint_photographic_experts_group_image) — Gute Wahl für verlustbehaftete Komprimierung von Standbildern (derzeit am beliebtesten).
- [PNG (Portable Network Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#png_portable_network_graphics) — Gute Wahl für verlustfreie Komprimierung von Standbildern (leicht bessere Qualität als JPEG).
- [SVG (Scalable Vector Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#svg_scalable_vector_graphics) — Vektorbildformat. Verwendung bei Bildern, die in verschiedenen Größen genau gezeichnet werden müssen.
- [WebP (Web Picture format)](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) — Hervorragende Wahl für Bilder und animierte Bilder

Formate wie [WebP](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) und [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) werden empfohlen, da sie viel besser abschneiden als PNG, JPEG, GIF für Stand- und animierte Bilder.

SVG bleibt das empfohlene Format für Bilder, die in verschiedenen Größen genau gezeichnet werden müssen.

## Bildladefehler

Wenn beim Laden oder Rendern eines Bildes ein Fehler auftritt, und ein `onerror`-Ereignishandler für das [`error`](/de/docs/Web/API/HTMLElement/error_event) Ereignis festgelegt wurde, wird dieser Ereignishandler aufgerufen. Dies kann in mehreren Situationen passieren, einschließlich:

- Die `src` oder `srcset` Attribute sind leer (`""`) oder `null`.
- Die `src` {{Glossary("URL", "URL")}} ist dieselbe wie die URL der Seite, die der Benutzer derzeit besucht.
- Das Bild ist in irgendeiner Weise beschädigt, die verhindert, dass es geladen wird.
- Die Metadaten des Bildes sind so beschädigt, dass es unmöglich ist, die Dimensionen seines Dimensions herauszufinden, und es wurden im `<img>`-Element keine Dimensionen angegeben.
- Das Bild befindet sich in einem Format, das vom {{Glossary("user_agent", "User-Agent")}} nicht unterstützt wird.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- [`alt`](/de/docs/Web/API/HTMLImageElement/alt#usage_notes)

  - : Definiert Text, der das Bild auf der Seite ersetzen kann.

    > [!NOTE]
    > Browser zeigen nicht immer Bilder an. Es gibt eine Reihe von Situationen, in denen ein Browser möglicherweise Bilder nicht anzeigt, wie:
    >
    > - Nicht-visuelle Browser (wie die von Menschen mit Sehbehinderungen genutzt werden)
    > - Der Nutzer entscheidet, Bilder nicht anzuzeigen (zur Bandbreiteneinsparung, aus Datenschutzgründen)
    > - Das Bild ist ungültig oder ein [nicht unterstützter Typ](#unterstützte_bildformate)
    >
    > In diesen Fällen kann der Browser das Bild durch den Text im `alt`-Attribut des Elements ersetzen. Aus diesen und anderen Gründen sollte, wann immer möglich, ein nützlicher Wert für `alt` angegeben werden.

    Wenn Sie dieses Attribut auf einen leeren String setzen (`alt=""`), bedeutet dies, dass dieses Bild _kein_ wesentlicher Bestandteil des Inhalts ist (es ist eine Dekoration oder ein Tracking-Pixel), und dass nicht-visuelle Browser es beim {{Glossary("Engine/Rendering", "Rendering")}} weglassen können. Visuelle Browser werden auch das kaputte Bildsymbol ausblenden, wenn das `alt`-Attribut leer ist und das Bild nicht angezeigt werden konnte.

    Dieses Attribut wird auch beim Kopieren und Einfügen des Bildes in Text oder beim Speichern eines verlinkten Bildes als Lesezeichen verwendet.

- `attributionsrc` {{experimental_inline}}

  - : Gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}} Header zusammen mit der Bildanforderung sendet.

    Auf der Serverseite wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}} oder {{httpheader("Attribution-Reporting-Register-Trigger")}} Headers in der Antwort auszulösen, um eine bildbasierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#html-based_event_sources) oder einen [Attributionstrigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#html-based_attribution_triggers) entsprechend zu registrieren. Welcher Antwort-Header zurückgesendet werden soll, hängt vom Wert des `Attribution-Reporting-Eligible` Headers ab, der die Registrierung ausgelöst hat.

    Das entsprechende Quell- oder Triggerevent wird ausgelöst, sobald der Browser die Antwort mit der Bilddatei erhält.

    > [!NOTE]
    > Weitere Einzelheiten finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

    Es gibt zwei Versionen dieses Attributs, die Sie festlegen können:

    - Boolean, d.h. nur der `attributionsrc` Name. Dies gibt an, dass Sie den {{httpheader("Attribution-Reporting-Eligible")}} Header an denselben Server senden möchten, auf den das `src` Attribut verweist. Dies ist in Ordnung, wenn Sie die Registrierung der Attributionsquelle oder des Triggers auf demselben Server durchführen. Beim Registrieren eines Attributionstriggers ist diese Eigenschaft optional, und es wird ein Boolean-Wert verwendet, wenn sie weggelassen wird.
    - Wert, der eine oder mehrere URLs enthält, zum Beispiel:

    ```html
    <img
      src="image-file.png"
      alt="My image file description"
      attributionsrc="https://a.example/register-source
                         https://b.example/register-source" />
    ```

    Dies ist in Fällen nützlich, in denen die angeforderte Ressource nicht auf einem von Ihnen kontrollierten Server liegt, oder wenn Sie die Registrierung der Attributionsquelle auf einem anderen Server durchführen möchten. In diesem Fall können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcenanforderung erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}} Header an die in `attributionsrc` angegebenen URL(s) gesendet, zusätzlich zum Ursprung der Ressource. Diese URLs können dann mit einem {{httpheader("Attribution-Reporting-Register-Source")}} oder {{httpheader("Attribution-Reporting-Register-Trigger")}} Header antworten, wie es zur Vervollständigung der Registrierung erforderlich ist.

    > [!NOTE]
    > Die Angabe mehrerer URLs bedeutet, dass mehrere Attributionsquellen auf derselben Funktion registriert werden können. Sie könnten zum Beispiel unterschiedliche Kampagnen haben, deren Erfolg Sie messen möchten, was die Erstellung verschiedener Berichte über verschiedene Daten umfasst.

- [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)

  - : Gibt an, ob das Abrufen des Bildes mit einer {{Glossary("CORS", "CORS")}} Anfrage erfolgen muss. Bilddaten von einem [CORS-aktivierten Bild](/de/docs/Web/HTML/How_to/CORS_enabled_image), die aus einer CORS-Anfrage zurückerlaufen, können im {{HTMLElement("canvas")}} Element ohne Markierung als "[tainted](/de/docs/Web/HTML/How_to/CORS_enabled_image#security_and_tainted_canvases)" wiederverwendet werden.

    Wenn das `crossorigin` Attribut _nicht_ angegeben ist, wird eine nicht-CORS-Anfrage gesendet (ohne den {{httpheader("Origin")}} Anfrage-Header), und der Browser markiert das Bild als unbrauchbar und schränkt den Zugriff auf seine Bilddaten ein, wodurch seine Verwendung in {{HTMLElement("canvas")}} Elementen verhindert wird.

    Wenn das `crossorigin` Attribut _angegeben_ ist, wird eine CORS-Anfrage gesendet (mit dem {{httpheader("Origin")}} Anfrage-Header); wenn der Server jedoch nicht in die Erlaubnis des Zugriffs auf die Bilddaten durch den Ursprungsseite möchte (indem er keine {{httpheader("Access-Control-Allow-Origin")}} Antwort-Header sendet oder indem er den Ursprung der Seite in keinem {{httpheader("Access-Control-Allow-Origin")}} Antwort-Header, den er sendet, aufnimmt), dann blockiert der Browser das Laden des Bildes und protokolliert einen CORS-Fehler in die Devtools-Konsole.

    Erlaubte Werte:

    - `anonymous`
      - : Eine CORS-Anfrage wird ohne Anmeldeinformationen gesendet (das heißt, keine {{Glossary("cookie", "Cookies")}}, [X.509 Zertifikate](https://datatracker.ietf.org/doc/html/rfc5280), oder {{httpheader("Authorization")}} Anfrage-Header).
    - `use-credentials`
      - : Die CORS-Anfrage wird mit eingeschlossenen Anmeldeinformationen gesendet (das heißt, Cookies, X.509 Zertifikate und der `Authorization` Anfrage-Header). Wenn der Server nicht darauf eingeht, Anmeldeinformationen mit der Ursprungsseite zu teilen (indem er den `Access-Control-Allow-Credentials: true` Antwort-Header zurücksendet), dann markiert der Browser das Bild als unbrauchbar und schränkt den Zugriff auf seine Bilddaten ein.

    Wenn das Attribut einen ungültigen Wert hat, behandeln es Browser, als ob der `anonymous` Wert verwendet wurde. Weitere Informationen finden Sie in [CORS-Einstellungen-Attribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin).

- `decoding`

  - : Dieses Attribut gibt dem Browser einen Hinweis, ob er die Bilddekodierung zusammen mit dem Rendering der übrigen DOM-Inhalte in einem einzigen Präsentationsschritt durchführen soll, der "korrekter" aussieht (`sync`), oder die anderen DOM-Inhalte zuerst rendern und präsentieren und dann das Bild dekodieren und später präsentieren soll (`async`). In der Praxis bedeutet `async`, dass das nächste Paint nicht auf die Bilddekodierung wartet.

    Es ist oft schwer, einen spürbaren Effekt bei der Verwendung von `decoding` auf statischen `<img>` Elementen wahrzunehmen. Sie werden wahrscheinlich zunächst als leere Bilder angezeigt, während die Bilddateien (entweder aus dem Netzwerk oder aus dem Cache) abgerufen werden und dann unabhängig verarbeitet werden, sodass die "Synchronisierung" von Inhaltsaktualisierungen weniger offensichtlich ist. Das Blockieren des Renderings während das Dekodieren stattfindet, wenn auch oft sehr klein, _kann_ gemessen werden — selbst wenn es mit dem menschlichen Auge schwer zu beobachten ist. Siehe [What does the image decoding attribute actually do?](https://www.tunetheweb.com/blog/what-does-the-image-decoding-attribute-actually-do/) für eine detailliertere Analyse (tunetheweb.com, 2023).

    Die Verwendung verschiedener `decoding` Typen kann zu auffälligeren Unterschieden führen, wenn `<img>` Elemente dynamisch über JavaScript in den DOM eingefügt werden — siehe [`HTMLImageElement.decoding`](/de/docs/Web/API/HTMLImageElement/decoding) für weitere Details.

    Erlaubte Werte:

    - `sync`
      - : Dekodiere das Bild synchron zusammen mit dem Rendering der anderen DOM-Inhalte und präsentiere alles zusammen.
    - `async`
      - : Dekodiere das Bild asynchron, nach dem Rendern und Präsentieren der anderen DOM-Inhalte.
    - `auto`
      - : Keine Präferenz für den Dekodierungsmodus; der Browser entscheidet, was am besten für den Benutzer ist. Dies ist der Standardwert.

- [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming)

  - : Markiert das Bild zur Beobachtung durch die [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming) API. Der angegebene Wert wird zur Kennung für das beobachtete Bildelement. Siehe auch die [Attributelement-Zeitplanung](/de/docs/Web/HTML/Reference/Attributes/elementtiming) Seite.

- `fetchpriority`

  - : Gibt einen Hinweis auf die relative Priorität, die beim Abrufen des Bildes verwendet werden soll.
    Erlaubte Werte:

    - `high`
      - : Das Bild mit hoher Priorität im Vergleich zu anderen Bildern laden.
    - `low`
      - : Das Bild mit niedriger Priorität im Vergleich zu anderen Bildern laden.
    - `auto`
      - : Keine Präferenz für die Abrufpriorität. Dies ist der Standardwert. Es wird verwendet, wenn kein Wert oder ein ungültiger Wert gesetzt ist.

    Weitere Informationen finden Sie unter [`HTMLImageElement.fetchPriority`](/de/docs/Web/API/HTMLImageElement/fetchPriority).

- `height`

  - : Die intrinsische Höhe des Bildes in Pixeln. Muss eine Ganzzahl ohne Einheit sein.

    > [!NOTE]
    > Das Einbinden von `height` und [`width`](#width) ermöglicht es dem Browser, das {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Bildes zu berechnen, bevor es geladen wird. Dieses Seitenverhältnis wird verwendet, um den Platz zu reservieren, der benötigt wird, um das Bild anzuzeigen, was eine Layoutverschiebung bei der Bild heruntergeladen und auf den Bildschirm gezeichnet und teilweise sogar vermeidet. Die Reduzierung der Layoutverschiebung ist ein wesentlicher Bestandteil einer guten Benutzererfahrung und Webleistung.

- `ismap`

  - : Dieses Boolean-Attribut zeigt an, dass das Bild Teil einer [Server-seitigen Karte](https://en.wikipedia.org/wiki/Image_map#Server-side) ist. Dabei werden die Koordinaten, an denen der Benutzer auf das Bild geklickt hat, an den Server gesendet.

    > [!NOTE]
    > Dieses Attribut ist nur zulässig, wenn das `<img>` Element ein Nachkomme eines {{htmlelement("a")}} Elements mit einem gültigen [`href`](/de/docs/Web/HTML/Reference/Elements/a#href) Attribut ist. Dies bietet Benutzern ohne Zeigegeräte ein Fallback-Ziel.

- `loading`

  - : Gibt an, wie der Browser das Bild laden soll:

    - `eager`
      - : Lädt das Bild sofort, unabhängig davon, ob sich das Bild derzeit im sichtbaren Bereich befindet oder nicht (dies ist der Standardwert).
    - `lazy`
      - : Zögert das Laden des Bildes hinaus, bis es sich in einer berechneten Entfernung vom sichtbaren Bereich befindet, wie vom Browser definiert. Ziel ist es, das Netzwerk- und Speicherbandbreite zu sparen, das benötigt wird, um das Bild zu verarbeiten, bis relativ sicher ist, dass es gebraucht wird. Dies verbessert in den meisten typischen Anwendungsfällen die Leistung des Inhalts.

    > [!NOTE]
    > Das Laden wird nur dann verschoben, wenn JavaScript aktiviert ist. Dies ist eine Anti-Tracking-Maßnahme, da wenn ein Benutzeragent das verzögerte Laden unterstützt, wenn das Skripting deaktiviert ist, es immer noch möglich wäre, die ungefähre Scrollposition des Benutzers während einer Sitzung zu verfolgen, indem strategisch Bilder im Markup der Seite platziert werden, sodass ein Server die Anzahl der angeforderten Bilder und die Zeitpunkte, zu denen sie angefordert wurden, verfolgen kann.

    > [!NOTE]
    > Bilder mit `loading` auf `lazy` gesetzt werden nie geladen, wenn sie keinen sichtbaren Teil eines Elements schneiden, auch wenn das Laden dieser Bilder das ändern würde, da ungeladene Bilder eine `width` und `height` von `0` haben. Es ist eine bewährte Praxis und wird von der [Spezifikation empfohlen](https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element). Auf diese Weise wird auch geholfen, Layoutverschiebungen zu vermeiden.

- `referrerpolicy`

  - : Ein String, der angibt, welcher Referrer verwendet werden soll, wenn die Ressource abgerufen wird:
    - `no-referrer`: Der {{HTTPHeader("Referer")}} Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}} Header wird nicht an {{Glossary("origin", "Origin")}}s ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`: Der gesendete Referrer wird auf den Origin der referenzierenden Seite beschränkt: auf ihr [Schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`: Der an andere Origins gesendete Referrer wird auf das Schema, den Host und den Port beschränkt. Navigationen auf dem selben Origin enthalten weiterhin den Pfad.
    - `same-origin`: Ein Referrer wird für die {{Glossary("Same-origin_policy", "gleiche Quelle")}} gesendet, aber bei bereichsübergreifenden Anfragen werden keine Referrerinformationen enthalten.
    - `strict-origin`: Nur das Schema der ursprünglichen Dokumentation wird als Referrer gesendet, wenn die Protokollsicherheitsebene gleich bleibt (HTTPS→HTTPS), aber nicht an ein weniger sicheres Ziel (HTTPS→HTTP) gesendet wird.
    - `strict-origin-when-cross-origin` (Standard): Senden Sie eine vollständige URL, wenn Sie eine Anfrage über denselben Ursprung durchführen, nur den Ursprung versenden, wenn die Protokollsicherheitsebene gleich bleibt (HTTPS→HTTPS), und senden Sie keinen Header an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `unsafe-url`: Der Referrer beinhaltet den Ursprung _und_ den Pfad (jedoch nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder [Benutzername](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge durchsickern lässt.

- `sizes`

  - : Ein oder mehr durch Kommas getrennte Strings, die eine Menge von Quelldateigrößen angeben. Jede Quellenbeschreibung besteht aus:

    1. Einer [Medienbedingung](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#syntax). Dies muss für das letzte Element in der Liste weggelassen werden.
    2. Einem Quellengrößenwert.

    Medienbedingungen beschreiben Eigenschaften des _Ansichtsfensters_ und nicht des _Bildes_. Zum Beispiel schlägt `(max-height: 500px) 1000px` vor, eine Quelle von 1000px Breite zu verwenden, wenn das _Ansichtsfenster_ nicht höher als 500px ist. Da ein Quellenbeschreibung dazu verwendet wird, die Breite zur Verwendung für das Bild während des Layouts der Seite anzugeben, wird die Medienbedingung typischerweise (aber nicht notwendigerweise) basierend auf der [Breiten](/de/docs/Web/CSS/@media/width)information formuliert.

    Quellenwertgrößen geben die geplante Anzeigegröße des Bildes an. {{Glossary("User_agent", "User Agents")}} verwenden die aktuelle Quellenbeschreibung, um eine der Quellen auszuwählen, die durch das `srcset` Attribut bereitgestellt werden, wenn diese Quellen mit Breitenbeschreibungen (`w`) beschrieben werden. Die ausgewählte Quellenbeschreibung beeinflusst die {{Glossary("intrinsic_size", "intrinsische Größe")}} des Bildes (die Anzeigengröße des Bildes, wenn kein {{Glossary("CSS", "CSS")}}-Stil angewendet wird). Wenn das `srcset` Attribut fehlt oder keine Werte mit einer Breitenbeschreibung enthält, hat das `sizes` Attribut keine Auswirkung.

    Ein Quellenwert kann jede nicht-negative [\<length>](/de/docs/Web/CSS/length) sein. Es darf keine CSS-Funktionen außer den [mathematischen Funktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#math_functions) verwenden. Einheiten werden auf die gleiche Weise wie [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries) interpretiert, was bedeutet, dass alle relativen Längeneinheiten relativ zur Dokumentwurzel und nicht zum `<img>` Element sind, sodass ein `em`-Wert relativ zur Schriftgröße der Wurzel anstelle der Schriftgröße des Bildes ist. [Prozentuale](/de/docs/Web/CSS/percentage) Werte sind nicht erlaubt.

    Das `sizes` Attribut akzeptiert auch die folgenden Schlüsselwortwerte:

    - `auto`
      - : `auto` kann die gesamte Liste der Größen oder den ersten Eintrag in der Liste ersetzen. Es ist nur in Kombination mit `loading="lazy"` gültig und löst sich in die [konkrete Größe](/de/docs/Web/CSS/image) des Bildes auf. Da die intrinsische Größe des Bildes noch nicht bekannt ist, sollten `width` und `height` Attribute (oder CSS-Äquivalente) ebenfalls angegeben werden, um [zu verhindern, dass der Browser eine Standardbreite von 300px] zuweist(https://html.spec.whatwg.org/multipage/images.html#sizes-attributes:attr-dim-width).

- `src`
  - : Die Bild-{{Glossary("URL", "URL")}}. Für das `<img>` Element obligatorisch. Auf {{Glossary("Browser", "Browsern")}}, die `srcset` unterstützen, wird `src` wie ein Kandidatenbild mit einem Pixeldichte-Descriptor von `1x` behandelt, es sei denn, ein Bild mit diesem Pixeldichte-Descriptor ist bereits in `srcset` definiert, oder es sei denn `srcset` enthält `w` Deskriptoren.
- `srcset`

  - : Ein oder mehrere durch Kommas getrennte Strings, die mögliche Bildquellen für den {{Glossary("user_agent", "User-Agent")}} angeben, der sie verwenden soll. Jeder String besteht aus:

    1. Einer {{Glossary("URL", "URL")}} zu einem Bild
    2. Optional, Leerraum gefolgt von einem von:
       - Einer Breitenbeschreibung (eine positive ganze Zahl direkt gefolgt von `w`). Die Breitenbeschreibung wird durch die in `sizes` angegebene Quellenbeschreibung geteilt, um die effektive Pixeldichte zu berechnen.
       - Einer Pixeldichtenbeschreibung (eine positive Gleitkommazahl direkt gefolgt von `x`).

    Wenn keine Beschreibung angegeben ist, wird der Quelle der Standardbeschreiber `1x` zugewiesen.

    Es ist inkorrekt, Breiten- und Pixeldichtenbeschreibungen im selben `srcset` Attribut zu mischen. Doppelte Beschreibungen (zum Beispiel zwei Quellen im selben `srcset`, die beide mit `2x` beschrieben sind) sind ebenfalls ungültig.

    Wenn das `srcset` Attribut Breitenbeschreibungen verwendet, muss das `sizes` Attribut ebenfalls vorhanden sein, oder das `srcset` wird ignoriert.

    Der Benutzeragent wählt nach eigenem Ermessen eine der verfügbaren Quellen aus. Dies bietet ihnen beträchtlichen Spielraum, ihre Auswahl basierend auf Dingen wie Benutzerpräferenzen oder {{Glossary("bandwidth", "Bandbreiten")}} Bedingungen anzupassen. Siehe unser [Responsive Images](/de/docs/Web/HTML/Guides/Responsive_images) Tutorial für ein Beispiel.

- `width`
  - : Die intrinsische Breite des Bildes in Pixeln. Muss eine Ganzzahl ohne Einheit sein.
- `usemap`

  - : Die partielle {{Glossary("URL", "URL")}} (beginnend mit `#`) einer [Bildkarte](/de/docs/Web/HTML/Reference/Elements/map), die mit dem Element verknüpft ist.

    > [!NOTE]
    > Sie können dieses Attribut nicht verwenden, wenn das `<img>` Element innerhalb eines {{htmlelement("a")}} oder {{HTMLElement("button")}} Elements enthalten ist.

### Veraltete Attribute

- `align` {{deprecated_inline}}

  - : Richtet das Bild mit seinem umgebenden Kontext aus. Verwenden Sie stattdessen die {{cssxref('float')}} und/oder {{cssxref('vertical-align')}} {{Glossary("CSS", "CSS")}} Eigenschaften. Erlaubte Werte:
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
  - : Die Breite eines Randes um das Bild herum. Verwenden Sie stattdessen die {{cssxref('border')}} {{Glossary("CSS", "CSS")}} Eigenschaft.
- `hspace` {{deprecated_inline}}
  - : Die Anzahl der Pixel von weißem Raum links und rechts des Bildes. Verwenden Sie stattdessen die {{cssxref('margin')}} CSS Eigenschaft.
- `longdesc` {{deprecated_inline}}

  - : Ein Link zu einer detaillierteren Beschreibung des Bildes. Mögliche Werte sind eine {{Glossary("URL", "URL")}} oder ein Element-`id`(/de/docs/Web/HTML/Reference/Global_attributes/id).

    > [!NOTE]
    > Dieses Attribut gilt im [HTML Spec](https://html.spec.whatwg.org/multipage/obsolete.html#element-attrdef-img-longdesc) als überholt angesehen. Es hat eine ungewisse Zukunft; Autoren sollten eine {{Glossary("WAI", "WAI")}}-{{Glossary("ARIA", "ARIA")}} Alternative wie [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) oder [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) verwenden.

- `name` {{deprecated_inline}}
  - : Ein Name für das Element. Verwenden Sie stattdessen das [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) Attribut.
- `vspace` {{deprecated_inline}}
  - : Die Anzahl der Pixel von weißem Raum über und unter dem Bild. Verwenden Sie stattdessen die {{cssxref('margin')}} CSS Eigenschaft.

## Styling mit CSS

`<img>` ist ein {{Glossary("replaced_elements", "ersetztes Element")}}; es hat eine {{cssxref("display")}}-Wert von `inline` standardmäßig, aber seine Standardmaße werden durch die intrinsischen Werte des eingebetteten Bildes definiert, als wäre es `inline-block`. Sie können Eigenschaften wie {{cssxref("border")}}/{{cssxref("border-radius")}}, {{cssxref("padding")}}/{{cssxref("margin")}}, {{cssxref("width")}}, {{cssxref("height")}}, usw. auf einem Bild festlegen.

`<img>` hat keine Basislinie, daher wird, wenn Bilder in einem Inline-Formatierungskontext mit {{cssxref("vertical-align", "vertical-align: baseline")}} verwendet werden, der Boden des Bildes auf der Textbasislinie platziert.

Sie können die {{cssxref("object-position")}} Eigenschaft verwenden, um das Bild innerhalb der Box des Elements zu positionieren, und die {{cssxref("object-fit")}} Eigenschaft, um die Größe des Bildes innerhalb der Box anzupassen (zum Beispiel, ob das Bild die Box passen oder füllen soll, selbst wenn Zuschnitt erforderlich ist).

Abhängig von seinem Typ kann ein Bild eine intrinsische Breite und Höhe haben. Bei einigen Bildtypen sind jedoch keine intrinsischen Abmessungen erforderlich. {{Glossary("SVG", "SVG")}} Bilder beispielsweise haben keine intrinsischen Abmessungen, wenn ihr Wurzel-{{SVGElement("svg")}}-Element keine `width` oder `height` aufweist.

## Barrierefreiheit

### Bedeutungsvolle alternative Beschreibungen erstellen

Der `alt`-Wert eines Attributs sollte einen klaren und prägnanten Textersatz für den Inhalt des Bildes bieten. Er sollte nicht das Vorhandensein des Bildes selbst oder den Dateinamen des Bildes beschreiben. Wenn das `alt`-Attribut bewusst weggelassen wurde, weil das Bild kein Textäquivalent hat, sollten alternative Methoden in Betracht gezogen werden, um darzustellen, was das Bild zu kommunizieren versucht.

#### Nicht

```html example-bad
<img alt="image" src="penguin.jpg" />
```

#### Tun

```html example-good
<img alt="A Penguin on a beach." src="penguin.jpg" />
```

Ein wichtiger Barrierefreiheitstest besteht darin, den Inhalt des `alt`-Attributs zusammen mit dem vorhergehenden Textinhalt zu lesen, um festzustellen, ob er dieselbe Bedeutung wie das Bild vermittelt. Beispiel: Wenn dem Bild der Satz "Auf meinen Reisen sah ich ein niedliches kleines Tier:" vorangestellt wurde, könnte das _Don't_ Beispiel von einem Bildschirmlesegerät als "Auf meinen Reisen sah ich ein niedliches kleines Tier: bilde", was keinen Sinn ergibt. Das _Do_ Beispiel könnte von einem Bildschirmlesegerät als "Auf meinen Reisen sah ich ein niedliches kleines Tier: Ein Pinguin am Strand." vorgelesen werden, was Sinn ergibt.

Für Bilder, die eine Aktion auslösen, zum Beispiel Bilder, die in einem {{htmlelement("a")}} oder {{htmlelement("button")}} Element verschachtelt sind, sollte das Auslösen der Aktion im `alt`-Attributwert beschrieben werden. Man könnte z. B. `alt="nächste Seite"` statt `alt="Pfeil nach rechts"` schreiben. Man könnte auch eine optionale weitere Beschreibung in einem `title`-Attribut hinzufügen; dies könnte auf Anfrage des Benutzers von Bildschirmlesegeräten vorgelesen werden.

Wenn ein `alt`-Attribut auf einem Bild fehlt, geben einige Bildschirmlesegeräte möglicherweise den Dateinamen des Bildes statt. Dies könnte ein verwirrendes Erlebnis sein, wenn der Dateiname keinen Bezug zum Inhalt des Bildes hat.

- [An Alt Decision Tree • Images • WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/images/decision-tree/)
- [Alt-texts: The Ultimate Guide — Axess Lab](https://axesslab.com/alt-texts/)
- [Wie man großartige Alt-Texte entwirft: Eine Einführung | Deque](https://www.deque.com/blog/great-alt-text-introduction/)
- [MDN Verständnis der WCAG-Richtlinie 1.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verständnis der Erfolgskriterium 1.1.1 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

### Identifizieren von SVG als Bild

Aufgrund eines [VoiceOver-Bugs](https://webkit.org/b/216364) kündigt VoiceOver SVG-Bilder nicht korrekt als Bilder an. Fügen Sie [`role="img"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/img_role) zu allen `<img>` Elementen mit SVG-Quelldateien hinzu, um sicherzustellen, dass unterstützende Technologien das SVG korrekt als Bildinhalt ankündigen.

```html
<img src="mdn.svg" alt="MDN" role="img" />
```

### Das title-Attribut

Das [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title) Attribut ist kein akzeptabler Ersatz für das `alt` Attribut. Außerdem sollte man vermeiden, den Wert des `alt` Attributs im gleichen Bild doppelt in einem `title`-Attribut zu verwenden. Dies kann dazu führen, dass einige Bildschirmlesegeräte denselben Text zweimal ankündigen, was eine verwirrende Erfahrung schafft.

Das `title`-Attribut sollte auch nicht als ergänzende Beschriftungsinformation verwendet werden, um die Bild-`alt` Beschreibung zu begleiten. Wenn ein Bild eine Bildunterschrift benötigt, verwenden Sie die [`figure`](/de/docs/Web/HTML/Reference/Elements/figure) und [`figcaption`](/de/docs/Web/HTML/Reference/Elements/figcaption) Elemente.

Der Wert des `title`-Attributs wird dem Benutzer in der Regel als Tooltip präsentiert, der kurz angezeigt wird, nachdem der Cursor das Bild still gehalten hat. Während dies dem Benutzer zusätzliche Informationen bieten _kann_, sollte man nicht davon ausgehen, dass der Benutzer ihn jemals sehen wird: Der Benutzer könnte lediglich eine Tastatur oder ein Touchscreen haben. Wenn Sie Informationen haben, die sehr wichtig oder wertvoll für den Benutzer sind, sollten Sie diese inline mit einer der oben genannten Methoden präsentieren, anstatt `title` zu verwenden.

- [Verwendung des HTML-title-Attributes – aktualisiert | Die Paciello-Gruppe](https://www.tpgi.com/using-the-html-title-attribute-updated/)

## Beispiele

### Alternativer Text

Das folgende Beispiel bettet ein Bild in die Seite ein und enthält alternativen Text für die Barrierefreiheit.

```html
<img src="/shared-assets/images/examples/favicon144.png" alt="MDN" />
```

{{ EmbedLiveSample('Alternative_text', '100%', '160') }}

### Bildverlinkung

Dieses Beispiel baut auf dem vorherigen auf, indem es zeigt, wie man das Bild in einen Link umwandelt. Dazu verschachteln Sie das `<img>` Tag innerhalb der {{HTMLElement("a")}}. Sie sollten den alternativen Text so gestalten, dass er die Ressource beschreibt, auf die der Link verweist, als ob Sie stattdessen einen Textlink verwenden würden.

```html
<a href="https://developer.mozilla.org">
  <img
    src="/shared-assets/images/examples/favicon144.png"
    alt="Visit the MDN site" />
</a>
```

{{ EmbedLiveSample('Image_link', '100%', '160') }}

### Verwendung des srcset Attributs

In diesem Beispiel fügen wir ein `srcset` Attribut mit einem Verweis auf eine hochauflösende Version des Logos ein; dies wird anstelle des `src` Bildes auf hochauflösenden Geräten geladen. Das im `src` Attribut referenzierte Bild wird in den {{Glossary("User_agent", "User Agents")}}, die `srcset` unterstützen, als `1x` Kandidat betrachtet.

```html
<img
  src="/shared-assets/images/examples/favicon72.png"
  alt="MDN"
  srcset="/shared-assets/images/examples/favicon144.png 2x" />
```

{{EmbedLiveSample("Using_the_srcset_attribute", "100%", "160")}}

### Verwenden der srcset und sizes Attribute

Das `src` Attribut wird in {{Glossary("User_agent", "User Agents")}}, die `srcset` unterstützen, ignoriert, wenn `w` Beschreibungen enthalten sind. Wenn die `(max-width: 600px)` Medienbedingung zutrifft, wird das 200 Pixel breite Bild geladen (es ist dasjenige, das `200px` am nächsten kommt), andernfalls wird das andere Bild geladen.

```html
<img
  src="clock-demo-200px.png"
  alt="The time is 12:45."
  srcset="clock-demo-200px.png 200w, clock-demo-400px.png 400w"
  sizes="(max-width: 600px) 200px, 50vw" />
```

{{EmbedLiveSample("Using_the_srcset_and_sizes_attributes", "100%", 350)}}

> [!NOTE]
> Um die Größenanpassung in Aktion zu sehen, {{LiveSampleLink('Using_the_srcset_and_sizes_attributes', 'sehen Sie sich das Beispiel auf einer separaten Seite an')}}, damit Sie den Inhaltsbereich tatsächlich vergrößern können.

## Sicherheits- und Datenschutzbedenken

Obwohl `<img>` Elemente unschuldige Zwecke haben, können sie unerwünschte Folgen für die Sicherheit und den Datenschutz des Benutzers haben. Weitere Informationen und Schutzmaßnahmen finden Sie unter [Referer Header: Datenschutz und Sicherheitsbedenken](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns).

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Content-Kategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Fließender Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Packetteninhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#embedded_content"
          >Eingebetteter Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#palpable_content"
          >Fühlbarer Inhalt</a
        >. Wenn das Element ein <code>usemap</code> Attribut hat, gehört es auch zur interaktiven Inhalt Kategorie.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "leeres Element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss einen Start-Tag haben und darf keinen End-Tag haben.</td>
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
            mit nicht leerem <code>alt</code> Attribut oder keinem
            <code>alt</code> Attribut:
            <code
              ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/img_role"
                ><code>img</code></a
              ></code
            >
          </li>
          <li>
            mit leeren <code>alt</code> Attribut:
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
            mit nicht leerem <code>alt</code> Attribut:
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
            mit leeren <code>alt</code> Attribut, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/none_role"><code>none</code></a>
            oder <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a>
          </li>
          <li>
            ohne <code>alt</code> Attribut, keine <code>role</code> zugelassen
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM-Interface</th>
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
- [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types)
- [Responsive Images](/de/docs/Web/HTML/Guides/Responsive_images)
