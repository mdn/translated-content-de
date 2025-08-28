---
title: "<img>: The Image Embed element"
slug: Web/HTML/Reference/Elements/img
l10n:
  sourceCommit: 493802c1d8ada608700ba664a45bbca5127b913c
---

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

Das obige Beispiel zeigt die Verwendung des `<img>`-Elements:

- Das `src`-Attribut enthält den Pfad zu dem Bild, das Sie einbetten möchten. Es ist nicht zwingend erforderlich, wenn das Attribut [srcset](/de/docs/Web/API/HTMLImageElement/srcset) verfügbar ist. Allerdings muss mindestens eines der Attribute `src` oder `srcset` bereitgestellt werden.
- Das `alt`-Attribut enthält einen Text, der das Bild ersetzt. Es ist zwingend erforderlich und **äußerst nützlich** für die Barrierefreiheit — Bildschirmlesegeräte lesen den Attributwert vor, damit Benutzer wissen, was das Bild bedeutet. Alternativer Text wird auch auf der Seite angezeigt, wenn das Bild aus irgendeinem Grund nicht geladen werden kann: zum Beispiel Netzwerkfehler, Inhaltsblockierung oder Link-Verfall.

Es gibt viele andere Attribute, um verschiedene Zwecke zu erreichen:

- Kontrolle über [Referrer](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy)/{{Glossary("CORS", "CORS")}} für Sicherheit und Privatsphäre: siehe [`crossorigin`](#crossorigin) und [`referrerpolicy`](#referrerpolicy).
- Verwenden Sie sowohl [`width`](#width) als auch [`height`](#height), um die intrinsische Größe des Bildes festzulegen, sodass es Platz einnimmt, bevor es geladen wird, um Layoutverschiebungen zu minimieren.
- Hinweise für responsive Bilder mit [`sizes`](#sizes) und [`srcset`](#srcset) (siehe auch das {{htmlelement("picture")}}-Element und unser [Responsive images](/de/docs/Web/HTML/Guides/Responsive_images) Tutorial).

## Unterstützte Bildformate

Der HTML-Standard listet nicht auf, welche Bildformate unterstützt werden sollen, sodass {{Glossary("user_agent", "User Agents")}} unterschiedliche Formate unterstützen können.

> [!NOTE]
> Der [Image file type and format guide](/de/docs/Web/Media/Guides/Formats/Image_types) liefert umfassende Informationen über Bildformate und deren Unterstützung durch Web-Browser.
> Dieser Abschnitt ist nur ein Überblick!

Die am häufigsten im Web verwendeten Bilddateiformate sind:

- [APNG (Animated Portable Network Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#apng_animated_portable_network_graphics) — Gute Wahl für verlustfreie Animationssequenzen (GIF ist weniger performant)
- [AVIF (AV1 Image File Format)](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) — Gute Wahl für sowohl Bilder als auch animierte Bilder aufgrund der hohen Leistung.
- [GIF (Graphics Interchange Format)](/de/docs/Web/Media/Guides/Formats/Image_types#gif_graphics_interchange_format) — Gute Wahl für _einfache_ Bilder und Animationen.
- [JPEG (Joint Photographic Expert Group image)](/de/docs/Web/Media/Guides/Formats/Image_types#jpeg_joint_photographic_experts_group_image) — Gute Wahl für verlustbehaftete Komprimierung von Standbildern (derzeit am beliebtesten).
- [PNG (Portable Network Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#png_portable_network_graphics) — Gute Wahl für verlustfreie Komprimierung von Standbildern (etwas bessere Qualität als JPEG).
- [SVG (Scalable Vector Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#svg_scalable_vector_graphics) — Vektor-Bildformat. Verwenden Sie es für Bilder, die in verschiedenen Größen genau gezeichnet werden müssen.
- [WebP (Web Picture format)](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) — Hervorragende Wahl für sowohl Bilder als auch animierte Bilder

Formate wie [WebP](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) und [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) werden empfohlen, da sie sowohl für Stand- als auch für animierte Bilder eine viel bessere Leistung erbringen als PNG, JPEG und GIF.

SVG bleibt das empfohlene Format für Bilder, die genauer in verschiedenen Größen gezeichnet werden müssen.

## Fehler beim Laden von Bildern

Wenn ein Fehler beim Laden oder Rendern eines Bildes auftritt und ein `onerror`-Ereignishandler für das [`error`](/de/docs/Web/API/HTMLElement/error_event)-Ereignis festgelegt wurde, wird dieser Ereignishandler aufgerufen. Dies kann in mehreren Situationen passieren, einschließlich:

- Die `src`- oder `srcset`-Attribute sind leer (`""`) oder `null`.
- Die `src`- {{Glossary("URL", "URL")}} ist dieselbe wie die URL der aktuellen Seite des Benutzers.
- Das Bild ist in irgendeiner Weise beschädigt, die es unbrauchbar macht.
- Die Metadaten des Bildes sind in einer Weise beschädigt, dass es unmöglich ist, seine Dimensionen abzurufen, und es wurden keine Dimensionen in den Attributen des `<img>`-Elements angegeben.
- Das Bild befindet sich in einem vom {{Glossary("user_agent", "User-Agent")}} nicht unterstützten Format.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- [`alt`](/de/docs/Web/API/HTMLImageElement/alt#usage_notes)
  - : Definiert Text, der das Bild auf der Seite ersetzen kann.

    > [!NOTE]
    > Browser zeigen nicht immer Bilder an. Es gibt eine Reihe von Situationen, in denen ein Browser möglicherweise keine Bilder anzeigt, wie:
    >
    > - Nicht-visuelle Browser (wie sie von Personen mit Sehbehinderungen verwendet werden)
    > - Der Benutzer entscheidet sich, keine Bilder anzuzeigen (um Bandbreite zu sparen, aus Datenschutzgründen)
    > - Das Bild ist ungültig oder ein [nicht unterstützter Typ](#unterstützte_bildformate)
    >
    > In diesen Fällen kann der Browser das Bild durch den Text im `alt`-Attribut des Elements ersetzen. Aus diesen und anderen Gründen sollten Sie immer nach Möglichkeit einen nützlichen Wert für `alt` bereitstellen.

    Die Einstellung dieses Attributs auf eine leere Zeichenfolge (`alt=""`) zeigt an, dass dieses Bild _kein_ wesentlicher Bestandteil des Inhalts ist (es ist Dekoration oder ein Tracking-Pixel) und dass nicht-visuelle Browser es möglicherweise aus dem {{Glossary("Engine/Rendering", "Rendering")}} weglassen. Visuelle Browser werden auch das defekte Bildsymbol ausblenden, wenn das `alt`-Attribut leer ist und das Bild nicht angezeigt wurde.

    Dieses Attribut wird auch verwendet, wenn das Bild in Text kopiert und eingefügt oder ein verlinktes Bild als Lesezeichen gespeichert wird.

- `attributionsrc` {{experimental_inline}}
  - : Gibt an, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header zusammen mit der Bildanfrage senden soll.

    Auf der Serverseite wird dieser verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Headers in der Antwort auszulösen, um eine bildbasierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#html-based_event_sources) oder einen [Attributionstrigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#html-based_attribution_triggers) zu registrieren. Welcher Antwortheader zurückgesendet werden soll, hängt vom Wert des `Attribution-Reporting-Eligible`-Headers ab, der die Registrierung ausgelöst hat.

    Das entsprechende Quell- oder Triggerereignis wird ausgelöst, sobald der Browser die Antwort mit der Bilddatei erhält.

    > [!NOTE]
    > Details finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

    Es gibt zwei Versionen dieses Attributs, die Sie festlegen können:
    - Boolean, das heißt nur der `attributionsrc`-Name. Dies gibt an, dass Sie möchten, dass der {{httpheader("Attribution-Reporting-Eligible")}}-Header an denselben Server gesendet wird, auf den auch das `src`-Attribut verweist. Das ist in Ordnung, wenn Sie die Registrierung der Attributionsquelle oder des Triggers auf demselben Server verarbeiten. Bei der Registrierung eines Attributionstriggers ist diese Eigenschaft optional, und es wird ein boolescher Wert verwendet, wenn sie weggelassen wird.
    - Ein Wert, der eine oder mehrere URLs enthält, zum Beispiel:

    ```html
    <img
      src="image-file.png"
      alt="My image file description"
      attributionsrc="https://a.example/register-source
                         https://b.example/register-source" />
    ```

    Dies ist nützlich in Fällen, in denen die angeforderte Ressource nicht auf einem Server liegt, den Sie kontrollieren, oder Sie die Registrierung der Attributionsquelle einfach auf einem anderen Server verwalten möchten. In diesem Fall können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcenanfrage erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header zusätzlich zum Ursprungs-URL an die in `attributionsrc` angegebene(n) URL(s) gesendet. Diese URLs können dann mit einem {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header antworten, um die Registrierung abzuschließen.

    > [!NOTE]
    > Das Angeben mehrerer URLs bedeutet, dass mehrere Attributionsquellen im selben Feature registriert werden können. Zum Beispiel können Sie verschiedene Kampagnen haben, deren Erfolg Sie messen möchten, was die Erstellung unterschiedlicher Berichte über unterschiedliche Daten umfasst.

- [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)
  - : Gibt an, ob das Abfragen des Bildes mit einer {{Glossary("CORS", "CORS")}}-Anfrage durchgeführt werden muss. Bilddaten aus einem von CORS-fähigen Bild zurückgegebenen CORS-Anfrage können in einem {{HTMLElement("canvas")}}-Element wiederverwendet werden, ohne als "[verunreinigt](/de/docs/Web/HTML/How_to/CORS_enabled_image#security_and_tainted_canvases)" markiert zu werden.

    Wenn das `crossorigin`-Attribut _nicht_ angegeben wird, wird eine Nicht-CORS-Anfrage gesendet (ohne den {{httpheader("Origin")}}-Header), und der Browser markiert das Bild als verunreinigt und schränkt den Zugriff auf seine Bilddaten ein, was seine Verwendung in {{HTMLElement("canvas")}}-Elementen verhindert.

    Wenn das `crossorigin`-Attribut _angegeben_ wird, dann wird eine CORS-Anfrage gesendet (mit dem {{httpheader("Origin")}}-Header); wenn der Server jedoch nicht zustimmt, den Zugriff auf die Bilddaten durch die Ursprungsseite zu erlauben (indem er keinen {{httpheader("Access-Control-Allow-Origin")}}-Header in der Antwort sendet oder die Ursprungsseite nicht in den Header aufnimmt, den er sendet), blockiert der Browser das Laden des Bildes und protokolliert einen CORS-Fehler in der Entwicklertools-Konsole.

    Zulässige Werte:
    - `anonymous`
      - : Eine CORS-Anfrage wird ohne Anmeldeinformationen (das heißt, keine {{Glossary("cookie", "Cookies")}}, [X.509-Zertifikate](https://datatracker.ietf.org/doc/html/rfc5280) oder {{httpheader("Authorization")}}-Header) gesendet.
    - `use-credentials`
      - : Die CORS-Anfrage wird mit allen Anmeldeinformationen gesendet (das heißt, Cookies, X.509-Zertifikate und dem `Authorization`-Header). Wenn der Server nicht zustimmt, Anmeldeinformationen mit der Ursprungsseite zu teilen (indem er den `Access-Control-Allow-Credentials: true`-Header in der Antwort sendet), markiert der Browser das Bild als verunreinigt und schränkt den Zugriff auf seine Bilddaten ein.

    Wenn das Attribut einen ungültigen Wert hat, behandeln Browser es, als wäre der Wert `anonymous` verwendet worden. Weitere Informationen finden Sie unter [CORS settings attributes](/de/docs/Web/HTML/Reference/Attributes/crossorigin).

- `decoding`
  - : Dieses Attribut gibt dem Browser einen Hinweis darauf, ob er das Decodieren des Bildes zusammen mit dem Rendern des anderen DOM-Inhalts in einem einzigen Darstellungsschritt, der "korrekter" aussieht (`sync`), durchführen oder zuerst den anderen DOM-Inhalt rendern und präsentieren und dann das Bild decodieren und später präsentieren soll (`async`). In der Praxis bedeutet `async`, dass der nächste Malvorgang nicht darauf wartet, dass das Bild decodiert wird.

    Es ist oft schwierig, merkliche Effekte bei der Verwendung von `decoding` auf statischen `<img>`-Elementen wahrzunehmen. Sie werden wahrscheinlich zunächst als leere Bilder gerendert, während die Bilddaten (entweder aus dem Netzwerk oder aus dem Cache) abgerufen und dann unabhängig behandelt werden, sodass das "Synchronisieren" von Inhaltsaktualisierungen weniger offensichtlich ist. Die Blockierung des Renderns während des Decodierens, obwohl oft ziemlich klein, _kann_ jedoch gemessen werden — auch wenn es schwierig ist, es mit dem menschlichen Auge zu beobachten. Siehe [What does the image decoding attribute actually do?](https://www.tunetheweb.com/blog/what-does-the-image-decoding-attribute-actually-do/) für eine detailliertere Analyse (tunetheweb.com, 2023).

    Die Verwendung verschiedener `decoding`-Typen kann zu spürbareren Unterschieden führen, wenn `<img>`-Elemente dynamisch über JavaScript in das DOM eingefügt werden — siehe [`HTMLImageElement.decoding`](/de/docs/Web/API/HTMLImageElement/decoding) für weitere Details.

    Zulässige Werte:
    - `sync`
      - : Decodieren Sie das Bild synchron zusammen mit dem Rendern des anderen DOM-Inhalts und präsentieren Sie alles zusammen.
    - `async`
      - : Decodieren Sie das Bild asynchron, nach dem Rendern und Präsentieren des anderen DOM-Inhalts.
    - `auto`
      - : Keine Präferenz für den Decodiermodus; der Browser entscheidet, was für den Benutzer am besten ist. Dies ist der Standardwert.

- [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming)
  - : Markiert das Bild zur Beobachtung durch die [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)-API. Der angegebene Wert wird zu einer Kennung für das beobachtete Bildelement. Weitere Informationen finden Sie auf der [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming)-Attributseite.

- `fetchpriority`
  - : Gibt einen Hinweis auf die zu verwendende relative Priorität beim Abrufen des Bildes.
    Zulässige Werte:
    - `high`
      - : Laden Sie das Bild mit einer hohen Priorität im Vergleich zu anderen Bildern.
    - `low`
      - : Laden Sie das Bild mit einer niedrigen Priorität im Vergleich zu anderen Bildern.
    - `auto`
      - : Legen Sie keine Präferenz für die Empfangspriorität fest.
        Dies ist der Standard.
        Wird verwendet, wenn kein oder ein ungültiger Wert festgelegt ist.

    Weitere Informationen finden Sie unter [`HTMLImageElement.fetchPriority`](/de/docs/Web/API/HTMLImageElement/fetchPriority).

- `height`
  - : Die inhärente Höhe des Bildes in Pixeln. Muss eine Ganzzahl ohne Einheit sein.

    > [!NOTE]
    > Die Einbindung von `height` und [`width`](#width) ermöglicht es dem Browser, das {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Bildes zu berechnen, bevor das Bild geladen wird. Dieses Seitenverhältnis wird verwendet, um den Platz für die Anzeige des Bildes zu reservieren und so Layoutverschiebungen beim Herunterladen und Malen des Bildes auf dem Bildschirm zu reduzieren oder sogar zu verhindern. Die Reduzierung von Layoutverschiebungen ist ein wesentlicher Bestandteil einer guten Benutzererfahrung und Webleistung.

- `ismap`
  - : Dieses Boolean-Attribut zeigt an, dass das Bild Teil einer [serverseitigen Karte](https://en.wikipedia.org/wiki/Image_map#Server-side) ist. Wenn ja, werden die Koordinaten, auf die der Benutzer im Bild geklickt hat, an den Server gesendet.

    > [!NOTE]
    > Dieses Attribut ist nur zulässig, wenn das `<img>`-Element ein Nachkomme eines {{htmlelement("a")}}-Elements mit einem gültigen [`href`](/de/docs/Web/HTML/Reference/Elements/a#href)-Attribut ist. Dies gibt Benutzern ohne Zeigegeräte ein alternatives Ziel.

- `loading`
  - : Gibt an, wie der Browser das Bild laden soll:
    - `eager`
      - : Lädt das Bild sofort, unabhängig davon, ob das Bild sich derzeit im sichtbaren Viewport befindet oder nicht (dies ist der Standardwert).
    - `lazy`
      - : Das Laden des Bildes wird verzögert, bis es eine berechnete Entfernung vom Viewport erreicht, wie vom Browser definiert. Ziel ist es, das Netzwerk und den Speicherbedarf für die Handhabe des Bildes zu vermeiden, bis es relativ sicher ist, dass es benötigt wird. Dies verbessert in den meisten typischen Anwendungsfällen die Leistung des Inhalts.

    > [!NOTE]
    > Das Laden wird nur verzögert, wenn JavaScript aktiviert ist. Dies ist eine Maßnahme gegen Tracking, da es mittels strategisch platzierter Bilder im Markup einer Seite immer noch möglich wäre, die ungefähre Scrollposition eines Benutzers während einer Sitzung zu erfassen, indem ein Server tracken kann, wie viele Bilder angefordert werden und wann.

    > [!NOTE]
    > Bilder mit `loading` auf `lazy` gesetzt, werden niemals geladen, wenn sie keinen sichtbaren Teil eines Elements schneiden, selbst wenn das Laden dazu führen würde, dass sich dies ändert, da nicht geladene Bilder eine Breite und Höhe von `0` haben. Die Angabe von `width` und `height` bei verzögert geladenen Bildern behebt dieses Problem und ist eine bewährte Praxis, [vom Standard empfohlen](https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element). Das trägt auch dazu bei, Layoutverschiebungen zu vermeiden.

- `referrerpolicy`
  - : Ein String, der angibt, welchen Referrer verwenden soll beim Abrufen der Ressource:
    - `no-referrer`: Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}}-Header wird nicht an {{Glossary("origin", "Ursprünge")}} ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`: Der gesendete Referrer wird auf den Ursprung der refererenden Seite begrenzt: sein [Schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`: Der an andere Ursprünge gesendete Referrer wird auf das Schema, den Host und den Port begrenzt sein. Navigationen im gleichen Ursprung werden weiterhin den Pfad einschließen.
    - `same-origin`: Ein Referrer wird für {{Glossary("Same-origin_policy", "gleichartige Ursprünge")}} gesendet, jedoch werden Anfragen über verschiedene Ursprünge keine Referrer-Informationen enthalten.
    - `strict-origin`: Nur den Ursprung des Dokuments als Referrer senden, wenn das Protokoll-Sicherheitsniveau gleich bleibt (HTTPS→HTTPS), jedoch nicht an ein weniger sicheres Ziel senden (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard): Senden Sie eine vollständige URL bei Anfragen mit gleichem Ursprung, senden Sie nur den Ursprung, wenn das Protokoll-Sicherheitsniveau gleich bleibt (HTTPS→HTTPS) und senden Sie keinen Header an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `unsafe-url`: Der Referrer wird den Ursprung _und_ den Pfad einschließen (aber nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder [Benutzername](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge preisgibt.

- `sizes`
  - : Ein oder mehrere durch Kommata getrennte Werte, die Quellgrößen oder das `auto`-Schlüsselwort sein können.

    Eine **Quellgröße** besteht aus:
    1. Einer [Medienbedingung](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#syntax), ausgelassen für das letzte Element in der Liste.
    2. Einem Quellgrößenwert.

    Medienbedingungen beschreiben Eigenschaften des _Viewports_, nicht des _Bildes_. Zum Beispiel schlägt `(height <= 500px) 1000px` vor, eine Bildquelle von 1000px Breite zu verwenden, wenn die _Viewport_-Höhe 500px oder weniger beträgt. Da ein Quellgrößen-Descriptor die Breite angibt, die während des Layouts für das Bild verwendet werden soll, basiert die Medienbedingung typischerweise (aber nicht zwingend) auf der [Breite](/de/docs/Web/CSS/@media/width).

    Quellgrößenwerte geben die beabsichtigte Anzeigengröße des Bildes an. {{Glossary("User_agent", "User-Agents")}} verwenden die aktuelle Quellgröße, um eine der Quellen auszuwählen, die durch das `srcset`-Attribut bereitgestellt werden, wenn diese Quellen mit Breitenbeschreibungen (`w`) beschrieben sind. Die ausgewählte Quellgröße beeinflusst die {{Glossary("intrinsic_size", "intrinsische Größe")}} des Bildes (die Anzeigengröße des Bildes, wenn keine {{Glossary("CSS", "CSS")}}-Stile angewendet werden). Wenn das `srcset`-Attribut fehlt oder keine Werte mit einer Breitenbeschreibung enthält, hat das `sizes`-Attribut keine Auswirkungen.

    Ein Quellgrößenwert kann jede nicht-negative [Länge](/de/docs/Web/CSS/length) sein. Es dürfen keine CSS-Funktionen außer den [Mathe-Funktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#math_functions) verwendet werden. Einheiten werden auf die gleiche Weise wie [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries) interpretiert, was bedeutet, dass alle relativen Längeneinheiten relativ zur Dokumentwurzel sind, nicht zum `<img>`-Element. Beispielsweise ist ein `em`-Wert relativ zur Schriftgröße der Wurzel, nicht zur Schriftgröße des Bildes. [Prozentwerte](/de/docs/Web/CSS/percentage) sind nicht erlaubt.

    Das `auto`-Schlüsselwort kann die gesamte Liste der Größen oder den ersten Eintrag in der Liste ersetzen. Es ist nur gültig, wenn es mit `loading="lazy"` kombiniert wird, und löst die [konkrete Größe](/de/docs/Web/CSS/image) des Bildes auf. Da die intrinsische Größe des Bildes noch nicht bekannt ist, sollten `width`- und `height`-Attribute (oder CSS-Äquivalente) ebenfalls angegeben werden, um zu verhindern, dass der Browser die Standard-Bildbreite von 300px annimmt.
    Für eine bessere Abwärtskompatibilität mit Browsern, die `auto` nicht unterstützen, können Sie nach `auto` in dem `sizes`-Attribut Fallback-Größen hinzufügen:

    ```html
    <img
      loading="lazy"
      width="200"
      height="200"
      sizes="auto, (max-width: 30em) 100vw, (max-width: 50em) 50vw, calc(33vw - 100px)"
      srcset="
        swing-200.jpg   200w,
        swing-400.jpg   400w,
        swing-800.jpg   800w,
        swing-1600.jpg 1600w
      "
      src="swing-400.jpg"
      alt="Kettlebell Swing" />
    ```

- `src`
  - : Die Bild- {{Glossary("URL", "URL")}}. Verbindlich für das `<img>`-Element. In {{Glossary("Browser", "Browsern")}}, die `srcset` unterstützen, wird `src` wie ein Kandidatenbild mit einem Pixeldichte-Descriptor `1x` behandelt, es sei denn, ein Bild mit diesem Pixeldichte-Descriptor ist bereits in `srcset` definiert oder `srcset` enthält `w`-Descriptoren.
- `srcset`
  - : Eine oder mehrere durch Kommas getrennte Zeichenfolgen, die mögliche Bildquellen für den {{Glossary("user_agent", "User-Agent")}} angeben. Jede Zeichenfolge besteht aus:
    1. Einer {{Glossary("URL", "URL")}} zu einem Bild
    2. Optional, gefolgt von einem Leerzeichen und einer der folgenden Möglichkeiten:
       - Einer Breitenbeschreibung (ein positiver Ganzzahlwert direkt gefolgt von `w`). Die Breitenbeschreibung wird durch die im `sizes`-Attribut angegebene Quellgröße geteilt, um die tatsächliche Pixeldichte zu berechnen.
       - Einer Pixeldichtebeschreibung (eine positive Gleitkommazahl direkt gefolgt von `x`).

    Wenn keine Beschreibung angegeben ist, wird der Quelle der Standard-Descriptor `1x` zugewiesen.

    Es ist nicht korrekt, Breitenbeschreibungen und Pixeldichtebeschreibungen in demselben `srcset`-Attribut zu mischen. Doppelte Beschreibungen (beispielsweise zwei Quellen im selben `srcset`, die beide mit `2x` beschrieben sind) sind ebenfalls ungültig.

    Wenn das `srcset`-Attribut Breitenbeschreibungen verwendet, muss auch das `sizes`-Attribut vorhanden sein, andernfalls wird das `srcset` ignoriert.

    Der User-Agent wählt nach eigenem Ermessen eine der verfügbaren Quellen aus. Dies bietet ihm erheblich Handlungsspielraum, ihre Auswahl basierend auf Benutzerpräferenzen oder {{Glossary("bandwidth", "Bandbreitenbedingungen")}} zuzuschneiden. Siehe unser [Responsive images](/de/docs/Web/HTML/Guides/Responsive_images)-Tutorial für ein Beispiel.

- `width`
  - : Die inhärente Breite des Bildes in Pixeln. Muss eine Ganzzahl ohne Einheit sein.
- `usemap`
  - : Die teilweise {{Glossary("URL", "URL")}} (beginnend mit `#`) einer [Bildkarte](/de/docs/Web/HTML/Reference/Elements/map), die mit dem Element verknüpft ist.

    > [!NOTE]
    > Sie können dieses Attribut nicht verwenden, wenn sich das `<img>`-Element innerhalb eines {{htmlelement("a")}}- oder {{HTMLElement("button")}}-Elements befindet.

### Veraltete Attribute

- `align` {{deprecated_inline}}
  - : Richten Sie das Bild mit seinem umgebenden Kontext aus. Verwenden Sie stattdessen die {{cssxref('float')}}- und/oder {{cssxref('vertical-align')}}- {{Glossary("CSS", "CSS")}}-Eigenschaften. Zulässige Werte:
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
  - : Die Breite eines Rands um das Bild. Verwenden Sie stattdessen die {{cssxref('border')}}- {{Glossary("CSS", "CSS")}}-Eigenschaft.
- `hspace` {{deprecated_inline}}
  - : Die Anzahl der Pixel Weißraum links und rechts vom Bild. Verwenden Sie stattdessen die {{cssxref('margin')}}-CSS-Eigenschaft.
- `longdesc` {{deprecated_inline}}
  - : Ein Link zu einer detaillierteren Beschreibung des Bildes. Mögliche Werte sind eine {{Glossary("URL", "URL")}} oder eine Element- [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id).

    > [!NOTE]
    > Dieses Attribut wird im [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/obsolete.html#element-attrdef-img-longdesc) als veraltet betrachtet. Es hat eine ungewisse Zukunft; Autoren sollten eine {{Glossary("WAI", "WAI")}}-{{Glossary("ARIA", "ARIA")}}-Alternative wie [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) oder [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) verwenden.

- `name` {{deprecated_inline}}
  - : Ein Name für das Element. Verwenden Sie stattdessen das [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut.
- `vspace` {{deprecated_inline}}
  - : Die Anzahl der Pixel Weißraum über und unter dem Bild. Verwenden Sie stattdessen die {{cssxref('margin')}}-CSS-Eigenschaft.

## Styling mit CSS

`<img>` ist ein {{Glossary("replaced_elements", "ersetztes Element")}}; es hat standardmäßig einen {{cssxref("display")}}-Wert von `inline`, aber seine Standardmaße sind durch die intrinsischen Werte des eingebetteten Bildes definiert, als wäre es `inline-block`. Sie können Eigenschaften wie {{cssxref("border")}}/{{cssxref("border-radius")}}, {{cssxref("padding")}}/{{cssxref("margin")}}, {{cssxref("width")}}, {{cssxref("height")}} usw. auf einem Bild setzen.

`<img>` hat keine Grundlinie, sodass, wenn Bilder in einem Inline-Formatierungskontext mit {{cssxref("vertical-align", "vertical-align: baseline")}} verwendet werden, der Boden des Bildes auf der Text-Basislinie platziert wird.

Sie können die {{cssxref("object-position")}}-Eigenschaft verwenden, um das Bild innerhalb der Box des Elements zu positionieren, und die {{cssxref("object-fit")}}-Eigenschaft, um die Größe des Bildes innerhalb der Box anzupassen (zum Beispiel, ob das Bild die Box füllen oder einpassen sollte, auch wenn Zuschneiden erforderlich ist).

Je nach Typ kann ein Bild eine inhärente Breite und Höhe haben. Für einige Bildtypen sind jedoch keine intrinsischen Dimensionen erforderlich. {{Glossary("SVG", "SVG")}}-Bilder beispielsweise haben keine intrinsischen Dimensionen, wenn ihr Root- {{SVGElement("svg")}}-Element keine `width`- oder `height`-Angaben aufweist.

## Barrierefreiheit

### Bedeutungsvolle alternative Beschreibungen erstellen

Der Wert eines `alt`-Attributs sollte einen klaren und prägnanten Textersatz für den Inhalt des Bildes bieten. Er sollte nicht das Vorhandensein des Bildes selbst oder den Dateinamen des Bildes beschreiben. Wenn das `alt`-Attribut bewusst weggelassen wird, weil das Bild kein Text-Äquivalent hat, überlegen Sie, alternative Methoden zu verwenden, um das zu präsentieren, was das Bild vermitteln soll.

#### Nicht tun

```html example-bad
<img alt="image" src="penguin.jpg" />
```

#### Tun

```html example-good
<img alt="A Penguin on a beach." src="penguin.jpg" />
```

Ein wichtiger Barrierefreiheits-Test besteht darin, den `alt`-Attributwert zusammen mit dem vorausgehenden Text zu lesen, um festzustellen, ob er dieselbe Bedeutung wie das Bild vermittelt. Zum Beispiel, wenn das Bild dem Satz "Auf meinen Reisen sah ich ein niedliches kleines Tierchen:" voranstand, könnte das _Nicht tun_-Beispiel von einem Bildschirmlesegerät als "Auf meinen Reisen sah ich ein niedliches kleines Tierchen: Bild" gelesen werden, was keinen Sinn ergibt. Das _Tun_-Beispiel könnte von einem Bildschirmlesegerät als "Auf meinen Reisen sah ich ein niedliches kleines Tierchen: Ein Pinguin am Strand." gelesen werden, was Sinn macht.

Bei Bildern, die eine Aktion auslösen, zum Beispiel Bildern, die in ein {{htmlelement("a")}}- oder {{htmlelement("button")}}-Element eingebettet sind, sollten Sie die ausgelöste Aktion im `alt`-Attributwert beschreiben. Zum Beispiel könnten Sie `alt="nächste Seite"` anstelle von `alt="Pfeil rechts"` schreiben. Sie könnten auch in Betracht ziehen, eine optionale weitere Beschreibung in ein `title`-Attribut einzufügen; dies kann bei Bedarf von Bildschirmlesegeräten gelesen werden.

Wenn auf einem Bild kein `alt`-Attribut vorhanden ist, können einige Bildschirmleser stattdessen den Dateinamen des Bildes ankündigen. Dies kann eine verwirrende Erfahrung sein, wenn der Dateiname nicht repräsentativ für den Inhalt des Bildes ist.

- [Ein alt Decision Tree • Bilder • WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/images/decision-tree/)
- [Alt-Texte: Der ultimative Leitfaden — Axess Lab](https://axesslab.com/alt-texts/)
- [Wie man großartige Alt-Texte gestaltet: Eine Einführung | Deque](https://www.deque.com/blog/great-alt-text-introduction/)
- [MDN Das Verständnis der WCAG, Richtlinie 1.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verständnis des Erfolgskriteriums 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

### Identifizieren von SVG als Bild

Aufgrund eines [VoiceOver-Bugs](https://webkit.org/b/216364) kündigt VoiceOver SVG-Bilder nicht korrekt als Bilder an. Fügen Sie [`role="img"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/img_role) zu allen `<img>`-Elementen mit SVG-Quelldateien hinzu, um sicherzustellen, dass assistive Technologien SVG korrekt als Bildinhalte ankündigen.

```html
<img src="mdn.svg" alt="MDN" role="img" />
```

### Das title-Attribut

Das [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)-Attribut ist kein akzeptabler Ersatz für das `alt`-Attribut. Vermeiden Sie außerdem, den Wert des `alt`-Attributs in einem `title`-Attribut auf demselben Bild zu duplizieren. Dies könnte dazu führen, dass einige Bildschirmleser denselben Text zweimal ankündigen, was verwirrend sein kann.

Das `title`-Attribut sollte auch nicht als ergänzende Beschriftungsinformationen verwendet werden, um die `alt`-Beschreibungen eines Bildes zu begleiten. Wenn ein Bild eine Beschriftung benötigt, verwenden Sie die [`figure`](/de/docs/Web/HTML/Reference/Elements/figure)- und [`figcaption`](/de/docs/Web/HTML/Reference/Elements/figcaption)-Elemente.

Der Wert des `title`-Attributs wird dem Benutzer normalerweise als Tooltip angezeigt, der kurz nach dem Bewegen des Cursors über das Bild erscheint. Während dies dem Benutzer zusätzliche Informationen bieten _kann_, sollten Sie nicht annehmen, dass der Benutzer es jemals sehen wird: Der Benutzer verfügt möglicherweise nur über eine Tastatur oder einen Touchscreen. Wenn Sie Informationen haben, die für den Benutzer besonders wichtig oder wertvoll sind, stellen Sie diesen stattdessen inline mit einer der oben genannten Methoden dar, anstatt `title` zu verwenden.

- [Verwendung des HTML-title-Attributs – aktualisiert | The Paciello Group](https://www.tpgi.com/using-the-html-title-attribute-updated/)

## Beispiele

### Alternativer Text

Das folgende Beispiel bettet ein Bild in die Seite ein und enthält einen alternativen Text für die Barrierefreiheit.

```html
<img src="/shared-assets/images/examples/favicon144.png" alt="MDN" />
```

{{ EmbedLiveSample('Alternative_text', '100%', '160') }}

### Bildlink

Dieses Beispiel baut auf dem vorherigen auf und zeigt, wie man das Bild zu einem Link macht. Um dies zu tun, betten Sie das `<img>`-Tag in das {{HTMLElement("a")}}-Element. Der alternative Text sollte die Ressource beschreiben, auf die der Link verweist, als würden Sie einen Textlink verwenden.

```html
<a href="https://developer.mozilla.org">
  <img
    src="/shared-assets/images/examples/favicon144.png"
    alt="Visit the MDN site" />
</a>
```

{{ EmbedLiveSample('Image_link', '100%', '160') }}

### Verwendung des srcset-Attributs

In diesem Beispiel fügen wir ein `srcset`-Attribut mit einem Verweis auf eine hochauflösende Version des Logos ein; dieses wird anstelle des `src`-Bildes auf hochauflösenden Geräten geladen. Das im `src`-Attribut referenzierte Bild wird in {{Glossary("User_agent", "User-Agents")}}, die `srcset` unterstützen, als `1x`-Kandidat gezählt.

```html
<img
  src="/shared-assets/images/examples/favicon72.png"
  alt="MDN"
  srcset="/shared-assets/images/examples/favicon144.png 2x" />
```

{{EmbedLiveSample("Using_the_srcset_attribute", "100%", "160")}}

### Verwendung der srcset- und sizes-Attribute

Das `src`-Attribut wird in {{Glossary("User_agent", "User-Agents")}}, die `srcset` unterstützen, ignoriert, wenn `w`-Beschreibungen enthalten sind. Wenn die Medienbedingung `(width <= 600px)` zutrifft, wird das 200 Pixel breite Bild geladen (es ist dasjenige, das `200px` am ehesten entspricht), andernfalls wird das andere Bild geladen.

```html
<img
  src="clock-demo-200px.png"
  alt="The time is 12:45."
  srcset="clock-demo-200px.png 200w, clock-demo-400px.png 400w"
  sizes="(width <= 600px) 200px, 50vw" />
```

{{EmbedLiveSample("Using_the_srcset_and_sizes_attributes", "100%", 350)}}

> [!NOTE]
> Um die Größenänderung in Aktion zu sehen, {{LiveSampleLink('Using_the_srcset_and_sizes_attributes', 'sehen Sie sich das Beispiel auf einer separaten Seite an')}}, sodass Sie den Inhaltsbereich tatsächlich anpassen können.

## Sicherheits- und Datenschutzbedenken

Obwohl `<img>`-Elemente harmlose Anwendungen haben, können sie unerwünschte Konsequenzen für die Sicherheit und den Datenschutz der Benutzer haben. Siehe [Referer-Header: Datenschutz- und Sicherheitsbedenken](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns) für weitere Informationen und Abhilfemaßnahmen.

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
          >Fließinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#embedded_content"
          >Eingebetteter Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#palpable_content"
          >greifbarer Inhalt</a
        >. Wenn das Element ein <code>usemap</code>-Attribut hat, ist es auch Teil der interaktiven Inhalt-Kategorie.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "Void-Element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Weglassung</th>
      <td>Muss ein Start-Tag haben und darf kein End-Tag haben.</td>
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
            mit nicht leerem <code>alt</code>-Attribut oder ohne
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

- {{HTMLElement("picture")}}, {{HTMLElement("object")}}, und {{HTMLElement("embed")}} Elemente
- {{cssxref("object-fit")}}, {{cssxref("object-position")}}, {{cssxref("image-orientation")}}, {{cssxref("image-rendering")}}, und {{cssxref("image-resolution")}}: Bildbezogene CSS-Eigenschaften.
- [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Schnittstelle für dieses Element
- [HTML-Bilder](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images)
- [Bilddateityp- und Format-Leitfaden](/de/docs/Web/Media/Guides/Formats/Image_types)
- [Responsive images](/de/docs/Web/HTML/Guides/Responsive_images)
