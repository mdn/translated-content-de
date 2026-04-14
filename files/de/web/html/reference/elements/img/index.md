---
title: "<img>: Das Bild-Einbettungselement"
slug: Web/HTML/Reference/Elements/img
l10n:
  sourceCommit: 3111c5a49047a966a63b66f8634a1713c2568011
---

Das **`<img>`**-Element in [HTML](/de/docs/Web/HTML) bettet ein Bild in das Dokument ein.

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

- Das `src`-Attribut enthält den Pfad zum einzubettenden Bild. Es ist nicht notwendig, wenn das [srcset](/de/docs/Web/API/HTMLImageElement/srcset)-Attribut verfügbar ist. Allerdings muss mindestens eines der Attribute `src` oder `srcset` angegeben werden.
- Das `alt`-Attribut enthält einen Textersatz für das Bild, der zwingend erforderlich und **extrem nützlich** für die Barrierefreiheit ist. Bildschirmlesegeräte lesen den Attributwert vor, damit Nutzer wissen, was das Bild bedeutet. Alt-Text wird auch angezeigt, falls das Bild aus irgendeinem Grund nicht geladen werden kann, zum Beispiel bei Netzwerkfehlern, Inhaltsblockierung oder Linkrot.

Es gibt viele weitere Attribute für unterschiedliche Zwecke:

- [Referrer](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy)/{{Glossary("CORS", "CORS")}}-Kontrolle für Sicherheit und Datenschutz: siehe [`crossorigin`](#crossorigin) und [`referrerpolicy`](#referrerpolicy).
- Verwenden Sie sowohl [`width`](#width) als auch [`height`](#height), um die intrinsische Größe des Bildes festzulegen und es so ermöglichen, Platz einzunehmen, bevor es geladen wird, um Layoutverschiebungen zu mindern.
- Hinweise für responsives Bild mit [`sizes`](#sizes) und [`srcset`](#srcset) (siehe auch das {{htmlelement("picture")}}-Element und unser [Leitfaden zu responsiven Bildern](/de/docs/Web/HTML/Guides/Responsive_images)).

## Unterstützte Bildformate

Der HTML-Standard legt nicht fest, welche Bildformate unterstützt werden sollen, sodass {{Glossary("user_agent", "User-Agents")}} unterschiedliche Formate unterstützen können.

> [!NOTE]
> Der [Leitfaden für Bilddateitypen und -formate](/de/docs/Web/Media/Guides/Formats/Image_types) bietet umfassende Informationen über Bildformate und deren Unterstützung durch Web-Browser. Dieser Abschnitt ist nur eine Zusammenfassung!

Die am häufigsten im Web verwendeten Bilddateiformate sind:

- [APNG (Animated Portable Network Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#apng_animated_portable_network_graphics) — Gute Wahl für verlustfreie Animationssequenzen (GIF ist weniger performant)
- [AVIF (AV1 Image File Format)](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) — Gute Wahl für sowohl Bilder als auch animierte Bilder aufgrund hoher Performance.
- [GIF (Graphics Interchange Format)](/de/docs/Web/Media/Guides/Formats/Image_types#gif_graphics_interchange_format) — Gute Wahl für _einfache_ Bilder und Animationen.
- [JPEG (Joint Photographic Expert Group image)](/de/docs/Web/Media/Guides/Formats/Image_types#jpeg_joint_photographic_experts_group_image) — Gute Wahl für verlustbehaftete Komprimierung von Standbildern (derzeit das beliebteste Format).
- [PNG (Portable Network Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#png_portable_network_graphics) — Gute Wahl für verlustfreie Komprimierung von Standbildern (leicht bessere Qualität als JPEG).
- [SVG (Scalable Vector Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#svg_scalable_vector_graphics) — Vektorbildformat. Verwenden Sie es für Bilder, die bei verschiedenen Größen exakt gezeichnet werden müssen.
- [WebP (Web Picture format)](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) — Hervorragende Wahl sowohl für Bilder als auch animierte Bilder.

Formate wie [WebP](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) und [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) werden empfohlen, da sie viel besser performen als PNG, JPEG, GIF für sowohl Stand- als auch animierte Bilder.

SVG bleibt das empfohlene Format für Bilder, die bei verschiedenen Größen exakt gezeichnet werden müssen.

## Fehler beim Laden von Bildern

Wenn ein Fehler beim Laden oder Rendern eines Bildes auftritt und ein `onerror`-Ereignishandler für das [`error`](/de/docs/Web/API/HTMLElement/error_event)-Ereignis gesetzt wurde, wird dieser aufgerufen. Dies kann in verschiedenen Situationen passieren, einschließlich:

- Die `src`- oder `srcset`-Attribute sind leer (`""`) oder `null`.
- Die `src`- {{Glossary("URL", "URL")}} ist dieselbe wie die URL der Seite, die der Benutzer gerade besucht.
- Das Bild ist in irgendeiner Weise beschädigt, die das Laden verhindert.
- Die Metadaten des Bildes sind so beschädigt, dass es unmöglich ist, seine Dimensionen abzurufen, und keine Dimensionen im `<img>`-Element-Attribut spezifiziert wurden.
- Das Bild ist in einem Format, das vom {{Glossary("user_agent", "User-Agent")}} nicht unterstützt wird.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `alt`
  - : Definiert Text, der das Bild auf der Seite ersetzen kann.

    > [!NOTE]
    > Browser zeigen nicht immer Bilder an. Es gibt eine Reihe von Situationen, in denen ein Browser möglicherweise keine Bilder anzeigt, wie z.B.:
    >
    > - Nicht-visuelle Browser (wie diejenigen, die von Menschen mit Seheinschränkungen verwendet werden)
    > - Der Benutzer entscheidet sich, Bilder nicht anzuzeigen (zum Speichern von Bandbreite, aus Datenschutzgründen)
    > - Das Bild ist ungültig oder ein [nicht unterstützter Typ](#unterstützte_bildformate)
    >
    > In diesen Fällen kann der Browser das Bild durch den Text im `alt`-Attribut des Elements ersetzen. Aus diesen und anderen Gründen geben Sie wann immer möglich einen nützlichen Wert für `alt` an.

    Das Setzen dieses Attributs auf eine leere Zeichenfolge (`alt=""`) deutet darauf hin, dass dieses Bild _nicht_ ein wichtiger Bestandteil des Inhalts ist (es ist Dekoration oder ein Tracking-Pixel), und dass nicht-visuelle Browser es vom {{Glossary("Engine/Rendering", "Rendering")}} auslassen können. Visuelle Browser werden auch das kaputte Bildersymbol verbergen, wenn das `alt`-Attribut leer ist und das Bild nicht angezeigt werden konnte.

    Dieses Attribut wird auch beim Kopieren und Einfügen des Bildes in Text verwendet oder beim Speichern eines verlinkten Bildes in ein Lesezeichen.

- `attributionsrc` {{deprecated_inline}}
  - : Gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header zusammen mit der Bildanfrage sendet.

    Auf der Serverseite wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Headers in der Antwort auszulösen, um eine bildbasierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#html-based_event_sources) oder einen [Attributionstrigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#html-based_attribution_triggers) zu registrieren. Welcher Antwort-Header zurückgesendet werden soll, hängt vom Wert des Headers `Attribution-Reporting-Eligible` ab, der die Registrierung ausgelöst hat.

    Das entsprechende Quellen- oder Triggerereignis wird ausgelöst, sobald der Browser die Antwort mit der Bilddatei empfängt.

    > [!NOTE]
    > Weitere Details finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

    Es gibt zwei Versionen dieses Attributs, die Sie setzen können:
    - Boolean, d.h. nur der Name `attributionsrc`. Dies gibt an, dass Sie möchten, dass der {{httpheader("Attribution-Reporting-Eligible")}}-Header an denselben Server gesendet wird, auf den das `src`-Attribut zeigt. Dies ist in Ordnung, wenn Sie die Attributionsquelle oder die Triggerregistrierung auf demselben Server abwickeln. Wenn man einen Attributionstrigger registriert, ist diese Eigenschaft optional, und ein boolescher Wert wird verwendet, wenn sie weggelassen wird.
    - Ein Wert, der eine oder mehrere URLs enthält, zum Beispiel:

    ```html
    <img
      src="image-file.png"
      alt="My image file description"
      attributionsrc="https://a.example/register-source
                         https://b.example/register-source" />
    ```

    Dies ist nützlich in Fällen, in denen die angeforderte Ressource nicht auf einem von Ihnen kontrollierten Server ist, oder Sie einfach die Registrierung der Attributionsquelle auf einem anderen Server bearbeiten möchten. In diesem Fall können Sie eine oder mehrere URLs als den Wert von `attributionsrc` angeben. Wenn die Ressourcenanforderung ausgeführt wird, wird der Header {{httpheader("Attribution-Reporting-Eligible")}} an die im `attributionSrc` angegebenen URL(s) zusätzlich zur Ursprungsressource gesendet. Diese URLs können dann mit einem {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header als nötig antworten, um die Registrierung abzuschließen.

    > [!NOTE]
    > Die Angabe mehrerer URLs bedeutet, dass mehrere Attributionsquellen für dieselbe Funktion registriert werden können. Sie könnten beispielsweise verschiedene Kampagnen haben, deren Erfolg Sie messen möchten, was das Generieren unterschiedlicher Berichte über unterschiedliche Daten beinhaltet.

- [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)
  - : Gibt an, ob das Abrufen des Bildes mit einer {{Glossary("CORS", "CORS")}}-Anfrage erfolgen muss. Bilddaten von einem [CORS-fähigen Bild](/de/docs/Web/HTML/How_to/CORS_enabled_image), das von einer CORS-Anfrage zurückgegeben wird, können im {{HTMLElement("canvas")}}-Element wiederverwendet werden, ohne dass es als "[verunreinigt](/de/docs/Web/HTML/How_to/CORS_enabled_image#security_and_tainted_canvases)" markiert wird.

    Wenn das `crossorigin`-Attribut _nicht_ angegeben ist, wird eine Nicht-CORS-Anfrage gesendet (ohne den {{httpheader("Origin")}}-Anfrage-Header), und der Browser markiert das Bild als verunreinigt und schränkt den Zugriff auf seine Bilddaten ein, was seine Verwendung in {{HTMLElement("canvas")}}-Elementen verhindert.

    Wenn das `crossorigin`-Attribut _angegeben_ ist, wird eine CORS-Anfrage gesendet (mit dem {{httpheader("Origin")}}-Anfrage-Header); wenn der Server jedoch nicht in die Bereitstellung eines plattformübergreifenden Zugriffs auf die Bilddaten für die Ursprungsseite einwilligt (durch die Nicht-Sendung eines {{httpheader("Access-Control-Allow-Origin")}}-Antwort-Headers oder durch die Nicht-Aufnahme der Ursprungsseite in einen gesendeten {{httpheader("Access-Control-Allow-Origin")}}-Antwort-Header), blockiert der Browser das Laden des Bildes und protokolliert einen CORS-Fehler in der Entwicklertools-Konsole.

    Zulässige Werte:
    - `anonymous`
      - : Eine CORS-Anfrage wird ohne Berechtigungsnachweise gesendet (d.h. keine {{Glossary("cookie", "Cookies")}}, [X.509-Zertifikate](https://datatracker.ietf.org/doc/html/rfc5280) oder {{httpheader("Authorization")}}-Anfrage-Header).
    - `use-credentials`
      - : Die CORS-Anfrage wird mit allen eingeschlossenen Berechtigungsnachweisen gesendet (d.h. Cookies, X.509-Zertifikate und der `Authorization`-Anfrage-Header). Wenn der Server nicht zustimmt, Berechtigungsnachweise mit der Ursprungsseite zu teilen (durch das Zurücksenden des `Access-Control-Allow-Credentials: true`-Antwort-Headers), markiert der Browser das Bild als verunreinigt und schränkt den Zugriff auf seine Bilddaten ein.

    Wenn das Attribut einen ungültigen Wert hat, behandeln die Browser es, als ob der Wert `anonymous` verwendet würde. Weitere Informationen finden Sie unter [CORS-Settings-Attribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin).

- `decoding`
  - : Dieses Attribut gibt einen Hinweis an den Browser, ob er die Bilddecodierung zusammen mit der Darstellung des anderen DOM-Inhalts in einem einzigen Präsentationsschritt durchführen sollte, das mehr "korrekt" aussieht (`sync`), oder den anderen DOM-Inhalt zuerst rendern und präsentieren sollte und dann das Bild decodieren und später präsentieren sollte (`async`). In der Praxis bedeutet `async`, dass das nächste Bild nicht darauf wartet, dass das Bild decodiert wird.

    Es ist oft schwierig, irgendwelche wahrnehmbaren Effekte beim Verwenden von `decoding` auf statischen `<img>`-Elementen zu erkennen. Sie werden wahrscheinlich zunächst als leere Bilder dargestellt, während die Bilddateien (entweder aus dem Netzwerk oder aus dem Cache) abgerufen werden und dann unabhängig verarbeitet werden, sodass das "Synchronisieren" der Inhaltsupdates weniger offensichtlich ist. Allerdings kann das Blockieren der Darstellung während der Decodierung, obwohl oft recht klein, _gemessen_ werden — selbst wenn es schwierig ist, es mit dem menschlichen Auge zu beobachten. Siehe [Was macht das Bilddecodierungsattribut tatsächlich?](https://www.tunetheweb.com/blog/what-does-the-image-decoding-attribute-actually-do/) für eine detailliertere Analyse (tunetheweb.com, 2023).

    Die Verwendung unterschiedlicher `decoding`-Typen kann zu merkbaren Unterschieden führen, wenn `<img>`-Elemente dynamisch über JavaScript in den DOM eingefügt werden — siehe [`HTMLImageElement.decoding`](/de/docs/Web/API/HTMLImageElement/decoding) für weitere Details.

    Zulässige Werte:
    - `sync`
      - : Decodiere das Bild synchron zusammen mit der Darstellung des anderen DOM-Inhalts und präsentiere alles zusammen.
    - `async`
      - : Decodiere das Bild asynchron, nach der Darstellung und Präsentation des anderen DOM-Inhalts.
    - `auto`
      - : Keine Präferenz für den Decodierungsmodus; der Browser entscheidet, was am besten für den Benutzer ist. Dies ist der Standardwert.

- [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming)
  - : Markiert das Bild zur Beobachtung durch die [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming) API. Der angegebene Wert wird zu einem Identifikator für das beobachtete Bild-Element. Siehe auch die [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming)-Attributseite.

- [`fetchpriority`](/de/docs/Web/HTML/Reference/Attributes/fetchpriority)
  - : Gibt einen Hinweis auf die relative Priorität, die beim Abrufen des Bildes verwendet werden soll. Zulässige Werte:
    - `high`
      - : Rufe das Bild mit hoher Priorität im Vergleich zu anderen Bildern ab.
    - `low`
      - : Rufe das Bild mit niedriger Priorität im Vergleich zu anderen Bildern ab.
    - `auto`
      - : Keine Präferenz für die Abrufpriorität.
        Dies ist der Standard-Wert.
        Er wird verwendet, wenn kein Wert oder ein ungültiger Wert gesetzt ist.
- `height`
  - : Die intrinsische Höhe des Bildes in Pixeln. Muss eine ganze Zahl ohne Einheit sein.

    > [!NOTE]
    > Das Einschließen von `height` und [`width`](#width) ermöglicht, dass das {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Bildes vom Browser berechnet wird, bevor das Bild geladen wird. Dieses Seitenverhältnis wird verwendet, um den Platz zu reservieren, der nötig ist, um das Bild anzuzeigen, wodurch ein Layout-Verschiebung beim Herunterladen und Anmalen des Bildes auf dem Bildschirm reduziert oder sogar verhindert wird. Die Reduzierung der Layoutverschiebung ist ein wesentlicher Bestandteil von guter Benutzererfahrung und Web-Performance.

- `ismap`
  - : Dieses boolesche Attribut zeigt an, dass das Bild Teil einer [serverseitigen Karte](https://en.wikipedia.org/wiki/Image_map#Server-side) ist. Wenn dies der Fall ist, werden die Koordinaten, wo der Benutzer auf das Bild geklickt hat, an den Server gesendet.

    > [!NOTE]
    > Dieses Attribut ist nur erlaubt, wenn das `<img>`-Element ein Nachkomme eines {{htmlelement("a")}}-Elements mit einem gültigen [`href`](/de/docs/Web/HTML/Reference/Elements/a#href) Attribut ist. Dies gibt Benutzern ohne Zeigegeräte ein alternatives Ziel.

- `loading`
  - : Gibt an, wie der Browser das Bild laden soll:
    - `eager`
      - : Lädt das Bild sofort, unabhängig davon, ob das Bild sich derzeit innerhalb des {{Glossary("visual_viewport", "visuellen Viewports")}} befindet oder nicht (Dies ist der Standardwert).
    - `lazy`
      - : Verschiebt das Laden des Bildes, bis es eine berechnete Distanz vom Viewport erreicht, wie vom Browser definiert.

        Das Lazy-Loading vermeidet die Netzbandbreite und den Speicherbedarf, die notwendig sind, um das Bild zu verarbeiten, bis es mit angemessener Sicherheit benötigt wird. Dies verbessert die Performance in den meisten typischen Anwendungsfällen.

        Während explizite [`width`](#width)- und [`height`](#height)-Attribute für alle Bilder empfohlen werden, um die Layoutverschiebung zu verhindern, sind sie für Lazy-loaded-Bilder besonders wichtig. Lazy-loaded-Bilder werden nie geladen, wenn sie keinen sichtbaren Teil eines Elements kreuzen, auch wenn das Laden sie verändern würde, da ungezeigte Bilder eine Breite und Höhe von `0` haben. Es führt zu einer noch störenderen Benutzererfahrung, wenn die Inhalte im Viewport plötzlich beim Lesen neu geordnet werden.

        Lazy-loaded-Bilder, die sich im visuellen Viewport befinden, sind möglicherweise noch nicht sichtbar, wenn das Fenster mit dem [`load`](/de/docs/Web/API/Window/load_event)-Ereignis geladen wird. Dies liegt daran, dass das Ereignis basierend auf Lazy-loaded-Bildern ausgelöst wird — Lazy-loaded-Bilder werden nicht berücksichtigt, selbst wenn sie sich im visuellen Viewport beim initialen Laden der Seite befinden.

        Das Laden wird nur zurückgestellt, wenn JavaScript aktiviert ist. Dies ist eine Maßnahme gegen das Nachverfolgen, weil wenn ein Benutzeragent Lazy Loading unterstützte, selbst wenn Skripting deaktiviert ist, es dennoch möglich wäre, die ungefähre Scrollposition eines Benutzers während einer Sitzung zu verfolgen, indem strategisch Bilder im Markup einer Seite platziert werden, sodass ein Server nachvollziehen kann, wie viele Bilder angefordert werden und wann.

- `referrerpolicy`
  - : Ein String, der angibt, welchen Referrer Sie verwenden möchten, wenn Sie die Ressource abrufen:
    - `no-referrer`: Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}}-Header wird nicht an {{Glossary("origin", "Ursprünge")}} ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`: Der gesendete Referrer wird auf den Ursprung der referierenden Seite beschränkt: sein [Schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`: Der Referrer wird für andere Ursprünge auf das Schema, den Host und den Port beschränkt. Navigationen im selben Ursprung beinhalten weiterhin den Pfad.
    - `same-origin`: Ein Referrer wird für {{Glossary("Same-origin_policy", "denselben Ursprung")}} gesendet, aber plattformübergreifende Anfragen enthalten keine Referrer-Informationen.
    - `strict-origin`: Nur den Ursprung des Dokuments als Referrer senden, wenn das Sicherheitsprotokoll gleich bleibt (HTTPS→HTTPS), aber nicht an eine weniger sichere Destination senden (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard): Eine vollständige URL senden, wenn eine Anfrage im selben Ursprung ausgeführt wird, nur den Ursprung senden, wenn das Sicherheitsprotokoll gleich bleibt (HTTPS→HTTPS), und keinen Header an eine weniger sichere Destination senden (HTTPS→HTTP).
    - `unsafe-url`: Der Referrer wird den Ursprung _und_ den Pfad beinhalten (aber nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), das [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder den [Benutzernamen](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge weitergibt.

- `sizes`
  - : Ein oder mehr Werte, getrennt durch Kommas, die Quellgrößen oder das Schlüsselwort `auto` sein können. Die Spezifikation erfordert, dass das `sizes`-Attribut nur vorhanden sein darf, wenn `srcset` Breitenbeschreibungen verwendet.
    - **Quellgröße**
      - : Eine **Quellgröße** besteht aus:
        1. Einer [Medienbedingung](/de/docs/Web/CSS/Guides/Media_queries/Using#syntax), weggelassen für den letzten Eintrag in der Liste.
        2. Einem Quellgrößenwert.

        Zum Beispiel schlägt die folgende Quellgröße vor, eine `1000px`-breite Bildquelle zu verwenden, wenn die _Viewport_-Breite 500px oder weniger beträgt.

        ```css
        (width <= 500px) 1000px
        ```

        Medienbedingungen beschreiben Eigenschaften des _{{Glossary("viewport", "Viewports")}}_, nicht des _Bildes_.
        Da ein Quellgrößenbeschreiber die Breite angibt, die für das Bild während der Layout-Verteilung verwendet werden soll, wird die Medienbedingung typischerweise (aber nicht unbedingt) auf die {{cssxref("@media/width")}} bezogen.

        Quellgrößenwerte geben die beabsichtigte Darstellungsgröße des Bildes an.
        {{Glossary("User_agent", "User-Agents")}} verwenden die aktuelle Quellgröße, um eine der in der `srcset` genannten Quellen auszuwählen, wenn diese Quellen mit Breitenbeschreibern (`w`) beschrieben werden.
        Der in sizes definierte `w`-Wert bestimmt die Standard-Layout-Breite des Bildes.
        In Abwesenheit von {{Glossary("CSS", "CSS")}} wird der Browser das Bild in dieser Größe rendern, ungeachtet der physischen Pixelmaße der heruntergeladenen Datei.

        Ein Quellgrößenwert kann eine beliebige nicht-negative [Länge](/de/docs/Web/CSS/Reference/Values/length) sein. Es darf keine CSS-Funktionen außer den [Mathematikfunktionen](/de/docs/Web/CSS/Reference/Values/Functions#math_functions) verwenden. Einheiten werden auf die gleiche Weise wie in [Medienabfrage](/de/docs/Web/CSS/Guides/Media_queries) interpretiert, was bedeutet, dass alle relativen Längenmaßeinheiten relativ zur Document Root sind und nicht zum `<img>`-Element. Zum Beispiel ist ein `em`-Wert relativ zur Root-Schriftgröße und nicht zur Schriftgröße des Bildes. [Prozentwerte](/de/docs/Web/CSS/Reference/Values/percentage) sind nicht erlaubt. Wenn das `sizes`-Attribut nicht angegeben ist, hat es einen Standardwert von `100vw` (die Viewport-Breite).

    - `auto`
      - : Das `auto`-Schlüsselwort gibt an, dass der Browser die erwartete Layoutbreite des Elements verwenden soll, um das anzuzeigende Bild auszuwählen. Das heißt, es sollte die [konkrete Größe](/de/docs/Web/CSS/Reference/Values/image#concrete_size) des Bildes, berechnet nach dem Layout aus HTML und CSS, verwenden.
        Dies ist nur gültig, wenn es mit `loading="lazy"` kombiniert wird, da die Seite bereits CSS und andere Layoutinformationen haben sollte, wenn das Bild geladen wird.

        Die Verwendung von `auto` spart Ihnen, Ihre Layoutmedienbedingungen zweimal angeben zu müssen: einmal für das Layout und einmal für die Auswahl eines geeigneten Bildes zum Abrufen und Anzeigen.

        Wenn `auto` nicht aufgelöst werden kann — sei es, weil der Browser es nicht unterstützt oder weil das Bild noch keine Layoutgröße hat — verwendet der Browser die _Quellgrößen_ in der Liste, um die Breite zu bestimmen, dann die `width`/`height`-Attribute, die auf dem Element definiert sind, und schließlich die Standard-intrinsische Größe für `<img>`-Elemente, die im Benutzeragenten-Stylesheet definiert ist (300px bei 150px).

        Für bessere Rückwärtskompatibilität mit Browsern, die `auto` nicht unterstützen, können Sie Fallback-Größen nach `auto` in das `sizes`-Attribut aufnehmen. Stellen Sie auch sicher, dass die `width`- und `height`-Attribute des Elements auf die intrinsischen Dimensionen des größten Bildes in Ihrem `srcset` gesetzt sind, damit der Browser Platz mit dem richtigen Seitenverhältnis reservieren kann:

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
  - : Die Bild-{{Glossary("URL", "URL")}}. Mindestens eines der Attribute `src` und [`srcset`](#srcset) ist für ein `<img>`-Element erforderlich. Wenn [`srcset`](#srcset) angegeben ist, wird `src` auf eine von zwei Arten verwendet:
    - als Fallback für Browser, die `srcset` nicht unterstützen.
    - wenn `srcset` den "x"-Beschreiber verwendet, dann ist `src` äquivalent zu einer Quelle mit dem Dichtebeschreiber `1x`; das heißt, das im `src` angegebene Bild wird auf Bildschirmen mit niedriger Dichte verwendet (wie typische 72 DPI oder 96 DPI Displays).

- `srcset`
  - : Eine oder mehrere durch Kommata getrennte Zeichenfolgen, die mögliche Bildquellen für den {{Glossary("user_agent", "User-Agent")}} angeben, die verwendet werden sollen.

    Jede Zeichenfolge besteht aus:
    1. Einer {{Glossary("URL", "URL")}} zu einem Bild
    2. Optional, gefolgt von einem Leerzeichen gefolgt von einem von:
       - Einem Breitenbeschreiber (eine positive ganze Zahl, gefolgt von `w`). Er _muss_ der gegebenen intrinsischen Breite des referenzierten Bildes entsprechen. Der Breitenbeschreiber wird durch die im `sizes`-Attribut angegebene Quellgröße geteilt, um die effektive Pixeldichte zu berechnen. Zum Beispiel, um eine Bildressource zu liefern, wenn der Renderer ein 450 Pixel breites Bild benötigt, verwenden Sie den Breitenbeschreiber `450w`. Wenn ein `srcset` "w"-Beschreiber enthält, verwenden die Browser diese Beschreiber zusammen mit dem `sizes`-Attribut, um eine Ressource auszuwählen.
       - Einem Pixeldichtebeschreiber (eine positive Gleitkommazahl, gefolgt von `x`). Er gibt die Bedingung an, unter der die entsprechende Bildressource als Pixeldichte des Displays verwendet werden soll. Zum Beispiel, um eine Bildressource zu liefern, wenn die Pixeldichte doppelt so hoch ist wie die Standarddichte, verwenden Sie den Pixeldichtebeschreiber `2x` oder `2.0x`.

    Wenn kein Beschreiber angegeben ist, wird die Quelle dem Standardbeschreiber `1x` zugewiesen. Es ist falsch, in einem `srcset`-Attribut Breitenbeschreiber und Pixeldichtebeschreiber zu mischen. Doppelte Beschreiber (zum Beispiel zwei Quellen im selben `srcset`, die beide mit `2x` beschrieben werden) sind ebenfalls ungültig.

    Leerzeichen, außer dem Leerzeichen zwischen der URL und dem entsprechenden Bedingungsbeschreiber, werden ignoriert; dies schließt sowohl führende als auch nachfolgende Leerzeichen mit ein, sowie Leerraum vor oder nach jedem Komma. Wenn jedoch ein Bildkandidatenstring keine Beschreiber enthält und kein Leerzeichen nach der URL, muss der folgende Bildkandidatenstring, wenn es einen gibt, mit einem oder mehreren Leerzeichen beginnen, oder das Komma wird als Teil der URL angesehen.

    Wenn das `srcset` des `<img>`-Elements `x`-Beschreiber verwendet, betrachten Browser auch die URL im `src`-Attribut (falls vorhanden) als Kandidaten und weisen einen Standardbeschreiber von `1x` zu. Andererseits, wenn das `srcset`-Attribut Breitenbeschreiber verwendet, wird `src` nicht berücksichtigt und das `sizes`-Attribut wird stattdessen verwendet.

    Der User-Agent kann jede der verfügbaren Quellen nach eigenem Ermessen auswählen. Dies bietet ihnen erheblichen Spielraum, ihre Auswahl basierend auf Dingen wie Benutzerpräferenzen oder {{Glossary("bandwidth", "Bandbreite")}}

zu gestalten zu können. Siehe unser [Leitfaden zu responsiven Bildern](/de/docs/Web/HTML/Guides/Responsive_images) für ein Beispiel.

- `width`
  - : Die intrinsische Breite des Bildes in Pixeln. Muss eine ganze Zahl ohne Einheit sein.
- `usemap`
  - : Der partielle {{Glossary("URL", "URL")}} (beginnend mit `#`) einer [Imagemap](/de/docs/Web/HTML/Reference/Elements/map), die mit dem Element verbunden ist.

    > [!NOTE]
    > Sie können dieses Attribut nicht verwenden, wenn das `<img>`-Element innerhalb eines {{htmlelement("a")}}- oder {{HTMLElement("button")}}-Elements ist.

### Veraltete Attribute

- `align` {{deprecated_inline}}
  - : Richtet das Bild zusammen mit seinem umgebenden Kontext aus. Verwenden Sie die {{cssxref('float')}} und/oder {{cssxref('vertical-align')}} {{Glossary("CSS", "CSS")}}-Eigenschaften anstelle dieses Attributs. Zulässige Werte:
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
  - : Die Breite eines Rahmens um das Bild. Verwenden Sie die {{cssxref('border')}} {{Glossary("CSS", "CSS")}}-Eigenschaft stattdessen.
- `hspace` {{deprecated_inline}}
  - : Die Anzahl der Pixel Leeraum links und rechts des Bildes. Verwenden Sie die {{cssxref('margin')}}-CSS-Eigenschaft stattdessen.
- `longdesc` {{deprecated_inline}}
  - : Ein Link zu einer detaillierteren Beschreibung des Bildes. Mögliche Werte sind eine {{Glossary("URL", "URL")}} oder eine Element-`id`(/de/docs/Web/HTML/Reference/Global_attributes/id).

    > [!NOTE]
    > Dieses Attribut wird in der [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/obsolete.html#element-attrdef-img-longdesc) als veraltet angesehen. Es hat eine unsichere Zukunft; Autoren sollten eine {{Glossary("WAI", "WAI")}}-{{Glossary("ARIA", "ARIA")}}-Alternative wie [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) oder [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) verwenden.

- `name` {{deprecated_inline}}
  - : Ein Name für das Element. Verwenden Sie das [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut stattdessen.
- `vspace` {{deprecated_inline}}
  - : Die Anzahl der Pixel Leeraum oberhalb und unterhalb des Bildes. Verwenden Sie die {{cssxref('margin')}}-CSS-Eigenschaft stattdessen.

## Styling mit CSS

`<img>` ist ein {{Glossary("replaced_elements", "ersetztes Element")}}; es hat einen {{cssxref("display")}}-Wert von `inline` standardmäßig, aber seine Standarddimensionen werden durch die eingebetteten intrinsischen Werte des Bildes definiert, als ob es `inline-block` wäre. Sie können Eigenschaften wie {{cssxref("border")}}/{{cssxref("border-radius")}}, {{cssxref("padding")}}/{{cssxref("margin")}}, {{cssxref("width")}}, {{cssxref("height")}} usw. auf einem Bild festlegen.

`<img>` hat keine Baseline, daher wird bei der Verwendung von Bildern in einem Inline-Format-Kontext mit {{cssxref("vertical-align", "vertical-align: baseline")}} der Boden des Bildes auf die Textbaseline gesetzt.

Sie können die {{cssxref("object-position")}}-Eigenschaft verwenden, um das Bild innerhalb des Elementrahmens zu positionieren und die {{cssxref("object-fit")}}-Eigenschaft, um die Größe des Bildes innerhalb des Rahmens anzupassen (z.B. ob das Bild den Rahmen ausfüllen oder zuschneiden soll, wenn es erforderlich ist).

Je nach Typ kann ein Bild eine intrinsische Breite und Höhe haben. Für einige Bildtypen sind jedoch keine intrinsischen Dimensionen notwendig. {{Glossary("SVG", "SVG")}}-Bilder haben zum Beispiel keine intrinsischen Dimensionen, wenn das Wurzel-{{SVGElement("svg")}}-Element keine `width`- oder `height`-Einstellungen aufweist.

## Barrierefreiheit

### Bedeutungsvolle alternative Beschreibungen erstellen

Ein `alt`-Attributwert sollte eine klare und prägnante Textersatzbeschreibung für den Inhalt des Bildes bieten. Es sollte nicht das Vorhandensein des Bildes selbst oder den Dateinamen des Bildes beschreiben. Wenn das `alt`-Attribut absichtlich ausgelassen wird, weil das Bild kein Textäquivalent hat, sollten Sie alternative Methoden in Betracht ziehen, um das zu präsentieren, was das Bild kommunizieren möchte.

#### Vermeiden Sie

```html example-bad
<img alt="image" src="penguin.jpg" />
```

#### Verwenden Sie

```html example-good
<img alt="A Penguin on a beach." src="penguin.jpg" />
```

Ein wichtiger Barrierefreiheitstest ist, den Inhalt des `alt`-Attributs zusammen mit dem vorhergehenden Textinhalt zu lesen, um zu sehen, ob er dieselbe Bedeutung wie das Bild vermittelt. Zum Beispiel könnte ein Bildschirmleser im Fall des Beispiels _Vermeiden Sie_ lesen: "Auf meinen Reisen sah ich ein niedliches kleines Tier: Bild", was keinen Sinn ergibt. Das Beispiel _Verwenden Sie_ könnte von einem Bildschirmleser als "Auf meinen Reisen sah ich ein niedliches kleines Tier: Ein Pinguin am Strand." gelesen werden, was sinnvoll ist.

Für Bilder, die eine Aktion auslösen, z. B. Bilder, die in einem {{htmlelement("a")}}- oder {{htmlelement("button")}}-Element geschachtelt sind, erwägen Sie, die ausgelöste Aktion im Wert des `alt`-Attributs zu beschreiben. Sie könnten zum Beispiel `alt="nächste Seite"` schreiben, anstatt `alt="Pfeil rechts"`. Sie können auch in Erwägung ziehen, eine optionale weitere Beschreibung in einem `title`-Attribut hinzuzufügen; dies kann bei Bedarf von Bildschirmlesegeräten vorgelesen werden.

Wenn ein `alt`-Attribut bei einem Bild fehlt, können einige Bildschirmlesegeräte stattdessen den Dateinamen des Bildes ankündigen. Dies kann eine verwirrende Erfahrung sein, wenn der Dateiname den Inhalt des Bildes nicht repräsentiert.

- [Ein Alt-Entscheidungsbaum • Bilder • WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/images/decision-tree/)
- [Alt-Texte: Das Ultimative Handbuch — Axess Lab](https://axesslab.com/alt-texts/)
- [Wie man großartige Alt-Texte schreibt: Eine Einführung | Deque](https://www.deque.com/blog/great-alt-text-introduction/)
- [MDN Verstehen von WCAG, Richtlinie 1.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Erfolgskriterium 1.1.1 verstehen | W3C WCAG 2.0 verstehen](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

### SVG als Bild identifizieren

Aufgrund eines [VoiceOver-Fehlers](https://webkit.org/b/216364) kündigt VoiceOver SVG-Bilder nicht korrekt als Bilder an. Schließen Sie [`role="img"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/img_role) in alle `<img>`-Elemente mit SVG-Quelldateien ein, um sicherzustellen, dass unterstützende Technologien SVG korrekt als Bildinhalt ankündigen.

```html
<img src="mdn.svg" alt="MDN" role="img" />
```

### Das Titelattribut

Das [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)-Attribut ist kein akzeptabler Ersatz für das `alt`-Attribut. Zusätzlich vermeiden Sie es, den Wert des `alt`-Attributs in einem `title`-Attribut zu duplizieren, das auf dasselbe Bild gesetzt ist. Dies könnte dazu führen, dass einige Bildschirmlesegeräte denselben Text zweimal ankündigen, was eine verwirrende Erfahrung schaffen könnte.

Das `title`-Attribut sollte auch nicht als ergänzende Beschriftungsinformationen verwendet werden, die die `alt`-Beschreibung eines Bildes begleiten. Wenn ein Bild eine Beschriftung benötigt, verwenden Sie die [`figure`](/de/docs/Web/HTML/Reference/Elements/figure)- und [`figcaption`](/de/docs/Web/HTML/Reference/Elements/figcaption)-Elemente.

Der Wert des `title`-Attributs wird dem Benutzer normalerweise als Tooltip präsentiert, der kurz nach der Mausbewegung über das Bild erscheint. Während dies dem Benutzer _zusätzliche_ Informationen bieten kann, sollten Sie nicht davon ausgehen, dass der dieser sie jemals sieht: der Benutzer könnte nur über eine Tastatur oder einen Touchscreen verfügen. Wenn Sie Informationen haben, die besonders wichtig oder wertvoll für den Benutzer sind, präsentieren Sie diese inline mit einer der oben genannten Methoden, anstatt `title` zu verwenden.

- [Verwendung des HTML-Title-Attributs – aktualisiert | Vispero](https://vispero.com/resources/using-the-html-title-attribute-updated/)

## Beispiele

### Alternativer Text

Das folgende Beispiel bettet ein Bild in die Seite ein und enthält alternativen Text für Barrierefreiheit.

```html
<img src="/shared-assets/images/examples/favicon144.png" alt="MDN" />
```

{{ EmbedLiveSample('Alternative_text', '100%', '160') }}

### Bildlink

Dieses Beispiel baut auf dem vorherigen auf und zeigt, wie man das Bild in einen Link verwandelt. Um dies zu tun, schachteln Sie das `<img>`-Tag innerhalb des {{HTMLElement("a")}}. Sie sollten den alternativen Text so gestalten, dass er die Ressource beschreibt, auf die der Link zeigt, als ob Sie einen Textlink benutzen würden.

```html
<a href="https://developer.mozilla.org">
  <img
    src="/shared-assets/images/examples/favicon144.png"
    alt="Visit the MDN site" />
</a>
```

{{ EmbedLiveSample('Image_link', '100%', '160') }}

### Verwendung des srcset-Attributs

In diesem Beispiel fügen wir ein `srcset`-Attribut mit einem Verweis auf eine hochauflösende Version des Logos ein; dieses wird anstelle des `src`-Bildes auf hochauflösenden Geräten geladen. Das im `src`-Attribut referenzierte Bild wird in {{Glossary("User_agent", "User-Agents")}}, die `srcset` unterstützen, als `1x`-Kandidat gewertet.

```html
<img
  src="/shared-assets/images/examples/favicon72.png"
  alt="MDN"
  srcset="/shared-assets/images/examples/favicon144.png 2x" />
```

{{EmbedLiveSample("Using_the_srcset_attribute", "100%", "160")}}

### Verwendung des srcset- und sizes-Attributs

Das `src`-Attribut wird in {{Glossary("User_agent", "User-Agents")}}, die `srcset` unterstützen, ignoriert, wenn `w`-Beschreiber enthalten sind. Wenn die `(width <= 600px)`-Medienbedingung zutrifft, wird das 200 Pixel breite Bild geladen (es ist das, das am ehesten zu `200px` passt), sonst wird das andere Bild geladen.

```html
<img
  src="clock-demo-200px.png"
  alt="The time is 12:45."
  srcset="clock-demo-200px.png 200w, clock-demo-400px.png 400w"
  sizes="(width <= 600px) 200px, 50vw" />
```

{{EmbedLiveSample("Using_the_srcset_and_sizes_attributes", "100%", 350)}}

> [!NOTE]
> Um die Größenänderung in Aktion zu sehen, {{LiveSampleLink('Using_the_srcset_and_sizes_attributes', 'sehen Sie sich das Beispiel auf einer separaten Seite an')}}, sodass Sie den Inhaltsbereich tatsächlich ändern können.

## Sicherheits- und Datenschutzbedenken

Obwohl `<img>`-Elemente unschuldige Verwendungen haben, können sie unerwünschte Konsequenzen für die Benutzer-Sicherheit und -Privatsphäre haben. Lesen Sie [Referer-Header: Datenschutz- und Sicherheitsbedenken](/de/docs/Web/Privacy/Guides/Referer_header:_privacy_and_security_concerns) für weitere Informationen und Abhilfemaßnahmen.

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
          >Flussinhalte</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungsinhalte</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#embedded_content"
          >eingebettete Inhalte</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#palpable_content"
          >fühlbare Inhalte</a
        >. Wenn das Element ein <code>usemap</code>-Attribut hat, gehört es auch zur interaktiven Inhaltskategorie.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Inhalte</th>
      <td>Keine; es ist ein {{Glossary("void_element", "leeres Element")}}.</td>
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
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <ul>
          <li>
            mit nicht-leerem <code>alt</code>-Attribut oder ohne
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
              ><code>Präsentation</code></a
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
                    >Schaltfläche</a
                  ></code
                >
              </li>
              <li>
                <code
                  ><a
                    href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role"
                    >Kontrollkästchen</a
                  ></code
                >
              </li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/link_role"><code>Link</code></a></li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role"><code>Menüeintrag</code></a></li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role"><code>Menüeintragsfeld</code></a></li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role"><code>Menüeintragsradio</code></a></li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role"><code>Option</code></a></li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role"><code>Fortschrittsbalken</code></a></li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role"><code>Bildlaufleiste</code></a></li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role"><code>Trennzeichen</code></a></li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role"><code>Schieberegler</code></a></li>
              <li>
                <code
                  ><a
                    href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role"
                    >Schalter</a
                  ></code
                >
              </li>
              <li>
                <code
                  ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role"
                    >Registerkarte</a
                  ></code
                >
              </li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/treeitem_role"><code>Baumeintrag</code></a></li>
            </ul>
          </li>
          <li>
            mit leerem <code>alt</code>-Attribut, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/none_role"><code>keine</code></a>
            oder <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>Präsentation</code></a>
          </li>
          <li>
            mit keinem <code>alt</code>-Attribut, keine <code>Rolle</code> erlaubt
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
- [Leitfaden für Bilddateitypen und -formate](/de/docs/Web/Media/Guides/Formats/Image_types)
- [Responsives Bilder](/de/docs/Web/HTML/Guides/Responsive_images)
