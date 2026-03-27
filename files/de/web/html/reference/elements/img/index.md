---
title: "<img>: Das Image Embed-Element"
slug: Web/HTML/Reference/Elements/img
l10n:
  sourceCommit: 8db892b3e7ca294621898441e7db2481e0e6d939
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

- Das `src`-Attribut enthält den Pfad zu dem Bild, das Sie einbetten möchten. Es ist nicht zwingend erforderlich, wenn das [srcset](/de/docs/Web/API/HTMLImageElement/srcset)-Attribut verfügbar ist. Es muss jedoch mindestens eines der `src`- oder `srcset`-Attribute angegeben werden.
- Das `alt`-Attribut enthält einen textuellen Ersatz für das Bild, was verpflichtend und **unglaublich nützlich** für die Barrierefreiheit ist — Bildschirmlesegeräte lesen den Attributwert laut vor, damit ihre Nutzer wissen, was das Bild bedeutet. Der Alt-Text wird auch auf der Seite angezeigt, wenn das Bild aus irgendeinem Grund nicht geladen werden kann: z. B. Netzwerkfehler, Inhaltsblockierung oder Link-Verfall.

Es gibt viele andere Attribute, um verschiedene Zwecke zu erreichen:

- [Referrer](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy)/{{Glossary("CORS", "CORS")}}-Kontrolle für Sicherheit und Privatsphäre: siehe [`crossorigin`](#crossorigin) und [`referrerpolicy`](#referrerpolicy).
- Verwenden Sie sowohl [`width`](#width) als auch [`height`](#height), um die intrinsische Größe des Bildes festzulegen, damit es Platz einnimmt, bevor es geladen wird, um Inhaltslayout-Verschiebungen zu mildern.
- Hinweise für responsive Bilder mit [`sizes`](#sizes) und [`srcset`](#srcset) (siehe auch das {{htmlelement("picture")}}-Element und unseren [Responsive Images](/de/docs/Web/HTML/Guides/Responsive_images)-Leitfaden).

## Unterstützte Bildformate

Der HTML-Standard listet nicht auf, welche Bildformate unterstützt werden sollen, daher können {{Glossary("user_agent", "User Agents")}} unterschiedliche Formate unterstützen.

> [!NOTE]
> Der [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types) bietet umfassende Informationen über Bildformate und ihre Unterstützung durch Webbrowser. Dieser Abschnitt ist nur eine Zusammenfassung!

Die am häufigsten im Web verwendeten Bilddateiformate sind:

- [APNG (Animated Portable Network Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#apng_animated_portable_network_graphics) — Gute Wahl für verlustfreie Animationssequenzen (GIF ist weniger leistungsfähig)
- [AVIF (AV1 Image File Format)](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) — Gute Wahl für sowohl Bilder als auch animierte Bilder aufgrund der hohen Leistung.
- [GIF (Graphics Interchange Format)](/de/docs/Web/Media/Guides/Formats/Image_types#gif_graphics_interchange_format) — Gute Wahl für _einfache_ Bilder und Animationen.
- [JPEG (Joint Photographic Expert Group image)](/de/docs/Web/Media/Guides/Formats/Image_types#jpeg_joint_photographic_experts_group_image) — Gute Wahl für verlustbehaftete Kompression von Standbildern (derzeit am beliebtesten).
- [PNG (Portable Network Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#png_portable_network_graphics) — Gute Wahl für verlustfreie Kompression von Standbildern (etwas bessere Qualität als JPEG).
- [SVG (Scalable Vector Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#svg_scalable_vector_graphics) — Vektorbildformat. Verwendung für Bilder, die genau in verschiedenen Größen gezeichnet werden müssen.
- [WebP (Web Picture format)](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) — Hervorragende Wahl für sowohl Bilder als auch animierte Bilder

Formate wie [WebP](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) und [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) werden empfohlen, da sie sowohl für Stand- als auch für animierte Bilder viel besser abschneiden als PNG, JPEG, GIF.

SVG bleibt das empfohlene Format für Bilder, die genau in verschiedenen Größen gezeichnet werden müssen.

## Bildladefehler

Wenn beim Laden oder Rendern eines Bildes ein Fehler auftritt und ein `onerror`-Ereignishandler für das [`error`](/de/docs/Web/API/HTMLElement/error_event)-Ereignis eingerichtet wurde, wird dieser Ereignishandler aufgerufen. Dies kann in mehreren Situationen passieren, einschließlich:

- Die `src`- oder `srcset`-Attribute sind leer (`""`) oder `null`.
- Die `src` {{Glossary("URL", "URL")}} ist mit der URL der Seite identisch, auf der sich der Benutzer derzeit befindet.
- Das Bild ist in irgendeiner Weise beschädigt, was das Laden verhindert.
- Die Metadaten des Bildes sind so beschädigt, dass seine Abmessungen nicht abgerufen werden können und keine Abmessungen in den Attributen des `<img>`-Elements angegeben wurden.
- Das Bild ist in einem von dem {{Glossary("user_agent", "User Agent")}} nicht unterstützten Format.

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `alt`
  - : Definiert Text, der das Bild auf der Seite ersetzen kann.

    > [!NOTE]
    > Browser zeigen nicht immer Bilder an. Es gibt eine Reihe von Situationen, in denen ein Browser möglicherweise keine Bilder anzeigt, wie z. B.:
    >
    > - Nicht-visuelle Browser (wie diejenigen, die von Menschen mit Sehbehinderungen verwendet werden)
    > - Der Benutzer entscheidet sich dafür, keine Bilder anzuzeigen (um Bandbreite zu sparen, aus Datenschutzgründen)
    > - Das Bild ist ungültig oder ein [nicht unterstützter Typ](#unterstützte_bildformate)
    >
    > In diesen Fällen kann der Browser das Bild durch den Text im `alt`-Attribut des Elements ersetzen. Aus diesen und anderen Gründen sollten Sie nach Möglichkeit einen nützlichen Wert für `alt` angeben.

    Das Setzen dieses Attributs auf eine leere Zeichenkette (`alt=""`) zeigt an, dass dieses Bild _kein_ wesentlicher Bestandteil des Inhalts ist (es ist Dekoration oder ein Tracking-Pixel) und dass nicht-visuelle Browser es vom {{Glossary("Engine/Rendering", "Rendering")}} ausschließen können. Visuelle Browser verstecken auch das Symbol für das kaputte Bild, wenn das `alt`-Attribut leer ist und das Bild nicht angezeigt werden konnte.

    Dieses Attribut wird auch verwendet, wenn das Bild kopiert und in Text eingefügt oder ein verlinktes Bild in einem Lesezeichen gespeichert wird.

- `attributionsrc` {{deprecated_inline}}
  - : Gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header zusammen mit der Bildanfrage sendet.

    Auf der Serverseite wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Headers in der Antwort auszulösen, um eine bildbasierte [Quellen-Zuordnung](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#html-based_event_sources) oder [Trigger-Zuordnung](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#html-based_attribution_triggers) zu registrieren. Welcher Antwortheader zurückgesendet werden soll, hängt vom Wert des `Attribution-Reporting-Eligible`-Headers ab, der die Registrierung ausgelöst hat.

    Die entsprechende Quell- oder Triggereignis wird ausgelöst, sobald der Browser die Antwort mit der Bilddatei erhält.

    > [!NOTE]
    > Weitere Einzelheiten finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

    Es gibt zwei Versionen dieses Attributs, die Sie festlegen können:
    - Boolescher Wert, d.h. nur der `attributionsrc`-Name. Dies gibt an, dass Sie möchten, dass der {{httpheader("Attribution-Reporting-Eligible")}}-Header an denselben Server gesendet wird, auf den das `src`-Attribut verweist. Dies ist in Ordnung, wenn Sie die Registrierung der Quellen- oder Trigger-Zuordnung auf demselben Server verwalten. Bei der Registrierung eines Trigger-Zuordnung ist diese Eigenschaft optional, und ein boolescher Wert wird verwendet, wenn er weggelassen wird.
    - Wert, der eine oder mehrere URLs enthält, zum Beispiel:

    ```html
    <img
      src="image-file.png"
      alt="My image file description"
      attributionsrc="https://a.example/register-source
                         https://b.example/register-source" />
    ```

    Dies ist in Fällen nützlich, in denen die angeforderte Ressource nicht auf einem von Ihnen kontrollierten Server liegt, oder Sie einfach die Registrierung der Quellen-Zuordnung auf einem anderen Server verwalten möchten. In diesem Fall können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcenanfrage erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header zusätzlich zum Origin der Ressource an die in `attributionsrc` angegebene(n) URL(s) gesendet. Diese URLs können dann als Reaktion mit einem {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header antworten, wie angemessen, um die Registrierung abzuschließen.

    > [!NOTE]
    > Das Angeben mehrerer URLs bedeutet, dass mehrere Attributionsquellen für dasselbe Merkmal registriert werden können. Sie könnten zum Beispiel verschiedene Kampagnen haben, deren Erfolg Sie messen möchten, was das Generieren unterschiedlicher Berichte über unterschiedliche Daten beinhaltet.

- [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)
  - : Gibt an, ob das Abrufen des Bildes mit einer {{Glossary("CORS", "CORS")}}-Anfrage erfolgen muss. Bilddaten aus einem [CORS-fähigen Bild](/de/docs/Web/HTML/How_to/CORS_enabled_image), das aus einer CORS-Anfrage zurückgegeben wird, können im {{HTMLElement("canvas")}}-Element wiederverwendet werden, ohne als "[verfälscht](/de/docs/Web/HTML/How_to/CORS_enabled_image#security_and_tainted_canvases)" markiert zu werden.

    Wenn das `crossorigin`-Attribut _nicht_ angegeben ist, wird eine nicht-CORS-Anfrage gesendet (ohne den {{httpheader("Origin")}}-Header der Anfrage), und der Browser markiert das Bild als verfälscht und beschränkt den Zugriff auf seine Bilddaten, wodurch seine Verwendung in {{HTMLElement("canvas")}}-Elementen verhindert wird.

    Wenn das `crossorigin`-Attribut angegeben ist, wird eine CORS-Anfrage gesendet (mit dem {{httpheader("Origin")}}-Header der Anfrage); wenn jedoch der Server nicht die Teilnahme am Cross-Origin-Zugriff auf die Bilddaten durch die Ursprungsseite erlaubt (indem er keinen {{httpheader("Access-Control-Allow-Origin")}}-Antwortheader sendet oder den Origin der Seite in keinem {{httpheader("Access-Control-Allow-Origin")}}-Antwortheader einfügt, den er sendet), blockiert der Browser das Laden des Bildes und protokolliert einen CORS-Fehler in der Devtools-Konsole.

    Erlaubte Werte:
    - `anonymous`
      - : Eine CORS-Anfrage wird gesendet, jedoch ohne Anmeldeinformationen (d.h. keine {{Glossary("cookie", "Cookies")}}, [X.509-Zertifikate](https://datatracker.ietf.org/doc/html/rfc5280) oder {{httpheader("Authorization")}}-Header der Anfrage).
    - `use-credentials`
      - : Die CORS-Anfrage wird mit allen Anmeldeinformationen gesendet (d.h. Cookies, X.509-Zertifikate und der `Authorization`-Header der Anfrage). Wenn der Server nicht der Freigabe von Anmeldeinformationen mit der Ursprungsseite zustimmt (indem er den Antwortheader `Access-Control-Allow-Credentials: true` zurücksendet), markiert der Browser das Bild als verfälscht und beschränkt den Zugriff auf seine Bilddaten.

    Wenn das Attribut einen ungültigen Wert hat, behandeln Browser es so, als ob der Wert `anonymous` verwendet worden wäre. Weitere Informationen finden Sie in den [CORS-Einstellung-Attributen](/de/docs/Web/HTML/Reference/Attributes/crossorigin).

- `decoding`
  - : Dieses Attribut gibt dem Browser einen Hinweis darauf, ob das Bilddekodieren zusammen mit dem Rendern der anderen DOM-Inhalte in einem einzigen Präsentationsschritt erfolgen sollte, der "korrekter" aussieht (`sync`), oder ob die anderen DOM-Inhalte zuerst gerendert und präsentiert werden sollen und das Bild dann später dekodiert und präsentiert wird (`async`). In der Praxis bedeutet `async`, dass das nächste Bild nicht darauf wartet, dass das Bild dekodiert wird.

    Es ist oft schwierig, einen bemerkbaren Effekt beim Gebrauch von `decoding` auf statische `<img>`-Elemente wahrzunehmen. Sie werden wahrscheinlich zunächst als leere Bilder gerendert, während die Bilddateien abgerufen werden (entweder aus dem Netzwerk oder aus dem Cache) und dann unabhängig verarbeitet werden, sodass das "Synchronisieren" von Inhaltsaktualisierungen weniger offensichtlich ist. Jedoch kann die Blockierung des Renderns während des Dekodierungsprozesses, obwohl oft sehr klein, _gemessen_ — selbst wenn es mit dem menschlichen Auge schwer zu beobachten ist. Siehe [Was macht das Image Decoding-Attribut tatsächlich?](https://www.tunetheweb.com/blog/what-does-the-image-decoding-attribute-actually-do/) für eine detaillierte Analyse (tunetheweb.com, 2023).

    Der Einsatz verschiedener `decoding`-Typen kann zu spürbareren Unterschieden führen, wenn `<img>`-Elemente dynamisch über JavaScript in den DOM eingefügt werden — siehe [`HTMLImageElement.decoding`](/de/docs/Web/API/HTMLImageElement/decoding) für weitere Details.

    Erlaubte Werte:
    - `sync`
      - : Dekodieren Sie das Bild synchron zusammen mit dem Rendern der anderen DOM-Inhalte und präsentieren Sie alles zusammen.
    - `async`
      - : Dekodieren Sie das Bild asynchron, nach dem Rendern und Präsentieren der anderen DOM-Inhalte.
    - `auto`
      - : Keine Präferenz für den Dekodierungsmodus; der Browser entscheidet, was am besten für den Benutzer ist. Dies ist der Standardwert.

- [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming)
  - : Markiert das Bild zur Beobachtung durch die [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)-API. Der angegebene Wert wird zu einem Identifikator für das beobachtete Bildelement. Siehe auch die [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming)-Attributseite.

- [`fetchpriority`](/de/docs/Web/HTML/Reference/Attributes/fetchpriority)
  - : Bietet einen Hinweis auf die relative Priorität, die beim Abrufen des Bildes verwendet werden soll. Erlaubte Werte:
    - `high`
      - : Laden Sie das Bild relativ zu anderen Bildern mit hoher Priorität.
    - `low`
      - : Laden Sie das Bild relativ zu anderen Bildern mit niedriger Priorität.
    - `auto`
      - : Keine Präferenz für die Abrufpriorität setzen.
        Dies ist der Standard.
        Er wird verwendet, wenn kein Wert oder ein ungültiger Wert festgelegt ist.
- `height`
  - : Die intrinsische Höhe des Bildes in Pixel. Muss eine ganze Zahl ohne Einheit sein.

    > [!NOTE]
    > Wenn Sie `height` und [`width`](#width) einschließen, kann das {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Bildes vom Browser vor dem Laden des Bildes berechnet werden. Dieses Seitenverhältnis wird verwendet, um den Platz zu reservieren, der für die Anzeige des Bildes benötigt wird, und so eine Layout-Verschiebung zu reduzieren oder sogar zu verhindern, wenn das Bild heruntergeladen und auf den Bildschirm gemalt wird. Das Reduzieren von Layout-Verschiebungen ist ein wesentlicher Bestandteil einer guten Benutzererfahrung und Web-Performance.

- `ismap`
  - : Dieses boolesche Attribut gibt an, dass das Bild Teil einer [serverseitigen Karte](https://en.wikipedia.org/wiki/Image_map#Server-side) ist. Wenn ja, werden die Koordinaten, an denen der Nutzer auf das Bild geklickt hat, an den Server gesendet.

    > [!NOTE]
    > Dieses Attribut ist nur zulässig, wenn das `<img>`-Element ein Nachfahre eines {{htmlelement("a")}}-Elements mit einem gültigen [`href`](/de/docs/Web/HTML/Reference/Elements/a#href)-Attribut ist. Dies bietet Benutzern ohne Zeigegeräte ein Ausweichziel.

- `loading`
  - : Gibt an, wie der Browser das Bild laden soll:
    - `eager`
      - : Lädt das Bild sofort, unabhängig davon, ob das Bild sich derzeit im sichtbaren Viewport befindet oder nicht (dies ist der Standardwert).
    - `lazy`
      - : Verzögert das Laden des Bildes, bis es eine berechnete Distanz zum Viewport erreicht, wie vom Browser definiert.

        Lazy-Loading vermeidet den Netzwerk- und Speicherbandbreitenbedarf zum Handling des Bildes, bis es vernünftigerweise als benötigt angesehen wird. Dies verbessert die Leistung in den meisten typischen Anwendungsfällen.

    Obwohl explizite [`width`](#width)- und [`height`](#height)-Attribute für alle Bilder empfohlen werden, um Layout-Verschiebungen zu vermeiden, sind sie besonders wichtig für lazy-geladene Bilder. Lazy-geladene Bilder werden niemals geladen, wenn sie keinen sichtbaren Teil eines Elements schneiden, sogar wenn das Laden sie ändern würde, weil ungeladene Bilder eine `width` und `height` von `0` haben. Dies führt zu einer noch störenderen Benutzererfahrung, wenn der im Viewport sichtbare Inhalt unterbrochen wird, während er gelesen wird.

    Lazy-geladene Bilder, die sich im visuellen Viewport befinden, sind möglicherweise noch nicht sichtbar, wenn das Window-Ereignis [`load`](/de/docs/Web/API/Window/load_event) ausgelöst wird. Dies liegt daran, dass das Ereignis basierend auf eager-geladenen Bildern ausgelöst wird — lazy-geladene Bilder werden nicht berücksichtigt, selbst wenn sie sich während des initialen Seitenladevorgangs im visuellen Viewport befinden.

    Das Laden wird nur verzögert, wenn JavaScript aktiviert ist. Dies ist eine Maßnahme gegen Tracking, da, wenn ein Benutzeragent Lazy-Loading unterstützte, wenn Scripting deaktiviert ist, es für eine Seite immer noch möglich wäre, die ungefähre Scroll-Position eines Benutzers während einer Sitzung zu verfolgen, indem strategisch Bilder im Markup der Seite platziert werden, sodass ein Server verfolgen kann, wie viele Bilder angefordert werden und wann.

- `referrerpolicy`
  - : Eine Zeichenkette, die angibt, welche Referrer beim Abrufen der Ressource verwendet werden sollen:
    - `no-referrer`: Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}}-Header wird nicht an {{Glossary("origin", "Origins")}} ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`: Der gesendete Referrer wird auf den Origin der verweisenden Seite beschränkt: sein [Schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`: Der Referrer, der an andere Origins gesendet wird, wird auf das Schema, den Host und den Port beschränkt. Navigationen im gleichen Origin beinhalten weiterhin den Pfad.
    - `same-origin`: Ein Referrer wird für {{Glossary("Same-origin_policy", "gleiche Origins")}} gesendet, aber Cross-Origin-Anfragen enthalten keine Referrer-Informationen.
    - `strict-origin`: Senden Sie nur den Origin des Dokuments als Referrer, wenn das Protokoll-Sicherheitsniveau gleich bleibt (HTTPS→HTTPS), aber senden Sie ihn nicht an eine weniger sichere Zieladresse (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard): Senden Sie eine vollständige URL, wenn Sie eine gleiche-Origins-Anfrage machen, senden Sie nur den Origin, wenn das Protokoll-Sicherheitsniveau gleich bleibt (HTTPS→HTTPS) und senden Sie keinen Header an eine weniger sichere Zieladresse (HTTPS→HTTP).
    - `unsafe-url`: Der Referrer enthält den Origin _und_ den Pfad (aber nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), das [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder den [Benutzernamen](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Origins und Pfade von TLS-geschützten Ressourcen an unsichere Origins leakt.

- `sizes`
  - : Ein oder mehrere durch Kommas getrennte Werte, die Quellengrößen oder das `auto`-Schlüsselwort sein können. Die Spezifikation erfordert, dass das `sizes`-Attribut nur vorhanden ist, wenn `srcset` Breitenbeschreiber verwendet.

    Eine **Quellengröße** besteht aus:
    1. Einer [Medienbedingung](/de/docs/Web/CSS/Guides/Media_queries/Using#syntax), ausgelassen für das letzte Element in der Liste.
    2. Einem Quellengrößenwert.

    Medienbedingungen beschreiben Eigenschaften des _Viewports_, nicht des _Bildes_. Zum Beispiel schlägt `(height <= 500px) 1000px` vor, eine Bildquelle von 1000px Breite zu verwenden, wenn die _Viewport_-Höhe 500px oder weniger beträgt. Da ein Quellengrößenbeschreiber die Breite angibt, die für das Bild während des Layouts verwendet werden soll, basiert die Medienbedingung typischerweise (aber nicht notwendigerweise) auf der {{cssxref("@media/width")}}.

    Quellengrößenwerte geben die beabsichtigte Displaygröße des Bildes an. {{Glossary("User_agent", "User Agents")}} verwenden die aktuelle Quellengröße, um eine der von dem `srcset`-Attribut bereitgestellten Quellen auszuwählen, wenn diese Quellen mit Breiten (`w`) Beschreibern beschrieben werden. Die ausgewählte Quellengröße beeinflusst die {{Glossary("intrinsic_size", "intrinsische Größe")}} des Bildes (die Maßgröße des Bildes, wenn keine {{Glossary("CSS", "CSS")}}-Stilisierung angewendet wird).

    Ein Quellengrößenwert kann jede nicht-negative [Länge](/de/docs/Web/CSS/Reference/Values/length) sein. Es darf keine CSS-Funktionen außer den [Mathematikfunktionen](/de/docs/Web/CSS/Reference/Values/Functions#math_functions) verwenden. Einheiten werden genauso interpretiert wie [Medien-Abfragen](/de/docs/Web/CSS/Guides/Media_queries), was bedeutet, dass alle relativen Längenmaße relativ zum Dokumentstamm statt dem `<img>`-Element sind. Zum Beispiel ist ein `em`-Wert relativ zur Schriftgröße des Stamms, nicht zur Schriftgröße des Bildes. [Prozentwerte](/de/docs/Web/CSS/Reference/Values/percentage) sind nicht erlaubt. Wenn das `sizes`-Attribut nicht bereitgestellt wird, hat es einen Standardwert von `100vw` (der Viewportbreite).

    Das `auto`-Schlüsselwort kann die ganze Liste der Größen oder den ersten Eintrag in der Liste ersetzen. Es ist nur gültig, wenn es mit `loading="lazy"` kombiniert wird, und wird zur [konkreten Größe](/de/docs/Web/CSS/Reference/Values/image) des Bildes aufgelöst. Da die intrinsische Größe des Bildes noch nicht bekannt ist, sollten auch `width` und `height`-Attribute (oder CSS-Äquivalente) angegeben werden, um zu verhindern, dass der Browser die Standardbildbreite von 300px annimmt.
    Für eine bessere Abwärtskompatibilität mit Browsern, die `auto` nicht unterstützen, können Sie Fallback-Größen nach `auto` im `sizes`-Attribut angeben:

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
  - : Die Bild-{{Glossary("URL", "URL")}}. Mindestens eines von `src` und [`srcset`](#srcset) ist für ein `<img>`-Element erforderlich. Wenn [`srcset`](#srcset) angegeben ist, wird `src` in einer von zwei Arten verwendet:
    - als Fallback für Browser, die `srcset` nicht unterstützen.
    - wenn `srcset` den "x"-Beschreiber verwendet, dann ist `src` äquivalent zu einer Quelle mit dem Dichtebeschreiber `1x`; das bedeutet, das durch `src` angegebene Bild wird auf Bildschirmen mit niedriger Dichte verwendet (wie typischen 72 DPI oder 96 DPI Displays).

- `srcset`
  - : Eine oder mehrere durch Kommas getrennte Zeichenfolgen, die mögliche Bildquellen für den {{Glossary("user_agent", "User Agent")}} anzeigen, die verwendet werden sollen.

    Jede Zeichenfolge besteht aus:
    1. Einer {{Glossary("URL", "URL")}} zu einem Bild
    2. Optional, Leerzeichen gefolgt von einem von:
       - Einem Breitenbeschreiber (eine positive ganze Zahl direkt gefolgt von `w`). Es _muss_ der intrinsischen Breite des referenzierten Bildes entsprechen. Der Breitenbeschreiber wird durch die Quellengröße, die im `sizes`-Attribut angegeben ist, geteilt, um die effektive Pixel-Dichte zu berechnen. Um beispielsweise eine Bildressource bereitzustellen, die verwendet werden soll, wenn der Renderer ein Bild mit einer Breite von 450 Pixeln benötigt, verwenden Sie den Breitenbeschreiber `450w`. Wenn ein `srcset` "w"-Beschreiber enthält, verwenden Browser diese Beschreiber zusammen mit dem `sizes`-Attribut, um eine Ressource auszuwählen.
       - Einem Pixel-Dichte-Beschreiber (eine positive Gleitkommazahl direkt gefolgt von `x`). Er gibt die Bedingung an, unter der die entsprechende Bildressource als Dichte des Displays verwendet werden soll. Um beispielsweise eine Bildressource bereitzustellen, die verwendet werden soll, wenn die Dichte des Displays doppelt so hoch wie die Standarddichte ist, verwenden Sie den Pixel-Dichte-Beschreiber `2x` oder `2.0x`.

    Wenn kein Beschreiber angegeben ist, wird die Quelle dem Standardbeschreiber `1x` zugewiesen. Es ist unkorrekt, Breitenbeschreiber und Pixel-Dichte-Beschreiber im gleichen `srcset`-Attribut zu mischen. Doppelte Beschreiber (beispielsweise zwei Quellen im selben `srcset`, die beide mit `2x` beschrieben werden) sind auch ungültig.

    Leerzeichen, außer die Leerzeichen, die die URL und den entsprechenden Bedingungsbeschreiber trennen, werden ignoriert; dies schließt sowohl führende als auch nachlaufende Leerzeichen ein, ebenso wie Leerzeichen vor oder nach jedem Komma. Wenn jedoch eine Bildkandidatenzeichenfolge keine Beschreiber und keine Leerzeichen nach der URL enthält, muss die folgende Bildkandidatenzeichenfolge, wenn es eine gibt, mit einem oder mehreren Leerzeichen beginnen, oder das Komma wird als Bestandteil der URL angesehen.

    Wenn das `srcset`-Attribut des `<img>`-Elements `x`-Beschreiber verwendet, betrachten Browser auch die URL im `src`-Attribut (wenn vorhanden) als Kandidat und ordnen ihm den Standardbeschreiber `1x` zu. Auf der anderen Seite, wenn das `srcset`-Attribut Breitenbeschreiber verwendet, wird `src` nicht berücksichtigt, und das `sizes`-Attribut wird stattdessen verwendet.

    Der Benutzeragent wählt nach eigenem Ermessen eine der verfügbaren Quellen aus. Dies gibt ihnen erheblichen Spielraum in der Auswahl basierend auf Dingen wie Benutzereinstellungen oder {{Glossary("bandwidth", "Bandbreiten")}}-Bedingungen. Siehe unser [Responsive Images](/de/docs/Web/HTML/Guides/Responsive_images)-Leitfaden für ein Beispiel.

- `width`
  - : Die intrinsische Breite des Bildes in Pixeln. Muss eine ganze Zahl ohne Einheit sein.
- `usemap`
  - : Die partielle {{Glossary("URL", "URL")}} (beginnend mit `#`) einer [Bildkarte](/de/docs/Web/HTML/Reference/Elements/map), die mit dem Element assoziiert ist.

    > [!NOTE]
    > Sie können dieses Attribut nicht verwenden, wenn das `<img>`-Element innerhalb eines {{htmlelement("a")}}- oder {{HTMLElement("button")}}-Elements enthalten ist.

### Veraltete Attribute

- `align` {{deprecated_inline}}
  - : Richtet das Bild im Kontext seiner Umgebung aus. Verwenden Sie die {{cssxref('float')}}- und/oder {{cssxref('vertical-align')}}-{{Glossary("CSS", "CSS")}}-Eigenschaften anstelle dieses Attributs. Erlaubte Werte:
    - `top`
      - : Gleichwertig mit `vertical-align: top` oder `vertical-align: text-top`
    - `middle`
      - : Gleichwertig mit `vertical-align: -moz-middle-with-baseline`
    - `bottom`
      - : Der Standard, gleichwertig mit `vertical-align: unset` oder `vertical-align: initial`
    - `left`
      - : Gleichwertig mit `float: left`
    - `right`
      - : Gleichwertig mit `float: right`

- `border` {{deprecated_inline}}
  - : Die Breite eines Rahmens um das Bild herum. Verwenden Sie die {{cssxref('border')}}-{{Glossary("CSS", "CSS")}}-Eigenschaft stattdessen.
- `hspace` {{deprecated_inline}}
  - : Die Anzahl der Pixel von weißem Raum links und rechts des Bildes. Verwenden Sie stattdessen die {{cssxref('margin')}}-CSS-Eigenschaft.
- `longdesc` {{deprecated_inline}}
  - : Ein Link zu einer detaillierteren Beschreibung des Bildes. Mögliche Werte sind eine {{Glossary("URL", "URL")}} oder eine Element-[`id`](/de/docs/Web/HTML/Reference/Global_attributes/id).

    > [!NOTE]
    > Dieses Attribut wird in der [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/obsolete.html#element-attrdef-img-longdesc) als veraltet angesehen. Es hat eine ungewisse Zukunft; Autoren sollten eine {{Glossary("WAI", "WAI")}}-{{Glossary("ARIA", "ARIA")}}-Alternative wie [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) oder [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) verwenden.

- `name` {{deprecated_inline}}
  - : Ein Name für das Element. Verwenden Sie das [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut stattdessen.
- `vspace` {{deprecated_inline}}
  - : Die Anzahl der Pixel von weißem Raum oberhalb und unterhalb des Bildes. Verwenden Sie stattdessen die {{cssxref('margin')}}-CSS-Eigenschaft.

## Styling mit CSS

`<img>` ist ein {{Glossary("replaced_elements", "ersetztes Element")}}; es hat standardmäßig einen {{cssxref("display")}}-Wert von `inline`, aber seine Standardabmessungen werden durch die intrinsischen Werte des eingebetteten Bildes definiert, als wäre es `inline-block`. Sie können Eigenschaften wie {{cssxref("border")}}/{{cssxref("border-radius")}}, {{cssxref("padding")}}/{{cssxref("margin")}}, {{cssxref("width")}}, {{cssxref("height")}} usw. auf ein Bild anwenden.

`<img>` hat keine Basislinie, daher platzieren bei der Verwendung von Bildern in einem Inline-Formatierungskontext mit {{cssxref("vertical-align", "vertical-align: baseline")}} Browser den unteren Rand des Bildes auf der Textbasislinie.

Sie können die Eigenschaft {{cssxref("object-position")}} verwenden, um das Bild innerhalb der Elementbox zu positionieren, und die Eigenschaft {{cssxref("object-fit")}}, um die Größe des Bildes innerhalb der Box anzupassen (zum Beispiel, ob das Bild die Box füllen soll, auch wenn Zuschneiden erforderlich ist).

Je nach Typ kann ein Bild eine intrinsische Breite und Höhe haben. Für einige Bildtypen sind jedoch intrinsische Abmessungen nicht erforderlich. {{Glossary("SVG", "SVG")}}-Bilder haben zum Beispiel keine intrinsischen Abmessungen, wenn ihr Root-{{SVGElement("svg")}}-Element keine `width` oder `height` auf sich gesetzt hat.

## Barrierefreiheit

### Bedeutungsvolle Alternativbeschreibungen verfassen

Der Wert eines `alt`-Attributs sollte eine klare und prägnante textuelle Ersatzbeschreibung für den Inhalt des Bildes liefern. Es sollte nicht das Vorhandensein des Bildes selbst oder den Dateinamen des Bildes beschreiben. Wenn das `alt`-Attribut absichtlich weggelassen wird, da das Bild keine textuelle Entsprechung hat, ziehen Sie alternative Methoden in Betracht, um zu präsentieren, was das Bild zu kommunizieren versucht.

#### Nicht machen

```html example-bad
<img alt="image" src="penguin.jpg" />
```

#### So machen

```html example-good
<img alt="A Penguin on a beach." src="penguin.jpg" />
```

Ein wichtiger Barrierefreiheitstest ist, den Inhalt des `alt`-Attributs zusammen mit dem vorhergehenden textuellen Inhalt zu lesen, um zu sehen, ob es den gleichen Sinn wie das Bild vermittelt. Zum Beispiel, wenn das Bild von dem Satz "Auf meinen Reisen habe ich ein süßes kleines Tier gesehen:" vorangestellt wurde, könnte das _Nicht machen_-Beispiel von einem Bildschirmlesegerät als "Auf meinen Reisen habe ich ein süßes kleines Tier gesehen: Bild" gelesen werden, was keinen Sinn ergibt. Das _So machen_-Beispiel könnte von einem Bildschirmlesegerät als "Auf meinen Reisen habe ich ein süßes kleines Tier gesehen: Ein Pinguin am Strand." gelesen werden, was Sinn ergibt.

Für Bilder, die verwendet werden, um eine Aktion auszulösen, beispielsweise Bilder, die in einem {{htmlelement("a")}}- oder {{htmlelement("button")}}-Element verschachtelt sind, ziehen Sie in Erwägung, die ausgelöste Aktion innerhalb des `alt`-Attributswerts zu beschreiben. Zum Beispiel könnten Sie `alt="nächste Seite"` anstelle von `alt="Pfeil rechts"` schreiben. Sie könnten auch in Erwägung ziehen, eine optionale zusätzliche Beschreibung innerhalb eines `title`-Attributs hinzuzufügen; dies kann von Bildschirmlesegeräten gelesen werden, wenn der Benutzer es anfordert.

Wenn ein `alt`-Attribut nicht auf ein Bild vorhanden ist, können einige Bildschirmlesegeräte stattdessen den Dateinamen des Bildes ankündigen. Dies kann eine verwirrende Erfahrung sein, wenn der Dateiname den Inhalt des Bildes nicht repräsentiert.

- [An alt Decision Tree • Images • WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/images/decision-tree/)
- [Alt-texts: The Ultimate Guide — Axess Lab](https://axesslab.com/alt-texts/)
- [How to Design Great Alt Text: An Introduction | Deque](https://www.deque.com/blog/great-alt-text-introduction/)
- [MDN Understanding WCAG, Leitfaden 1.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Understanding Success Criterion 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

### SVG als Bild identifizieren

Aufgrund eines [VoiceOver-Bugs](https://webkit.org/b/216364) kündigt VoiceOver SVG-Bilder nicht korrekt als Bilder an. Fügen Sie [`role="img"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/img_role) zu allen `<img>`-Elementen mit SVG-Quelldateien hinzu, um sicherzustellen, dass unterstützende Technologien SVGs korrekt als Bildinhalt ankündigen.

```html
<img src="mdn.svg" alt="MDN" role="img" />
```

### Das title-Attribut

Das [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)-Attribut ist kein akzeptabler Ersatz für das `alt`-Attribut. Zusätzlich sollten Sie vermeiden, den Wert des `alt`-Attributs in einem `title`-Attribut zu duplizieren, das auf dasselbe Bild deklariert wurde. Dies kann dazu führen, dass einige Bildschirmlesegeräte denselben Text zweimal ankündigen und eine verwirrende Erfahrung schaffen.

Das `title`-Attribut sollte auch nicht als ergänzende Bildunterschrifteninformation verwendet werden, um die `alt`-Beschreibung eines Bildes zu begleiten. Wenn ein Bild eine Bildunterschrift benötigt, verwenden Sie die [`figure`](/de/docs/Web/HTML/Reference/Elements/figure)- und [`figcaption`](/de/docs/Web/HTML/Reference/Elements/figcaption)-Elemente.

Der Wert des `title`-Attributs wird dem Benutzer üblicherweise als Tooltip präsentiert, der kurz nach dem Bewegen des Cursors über das Bild erscheint. Auch wenn dies zusätzliche Informationen für den Benutzer bereitstellen kann, sollten Sie nicht davon ausgehen, dass der Benutzer es jemals sehen wird: Der Benutzer könnte nur eine Tastatur oder einen Touchscreen haben. Wenn Sie besonders wichtige oder wertvolle Informationen für den Benutzer haben, präsentieren Sie diese inline unter Verwendung einer der oben genannten Methoden anstelle von `title`.

- [Using the HTML title attribute – updated | Vispero](https://vispero.com/resources/using-the-html-title-attribute-updated/)

## Beispiele

### Alternative Text

Das folgende Beispiel bettet ein Bild in die Seite ein und enthält alternativen Text für die Barrierefreiheit.

```html
<img src="/shared-assets/images/examples/favicon144.png" alt="MDN" />
```

{{ EmbedLiveSample('Alternative_text', '100%', '160') }}

### Bildlink

Dieses Beispiel baut auf dem vorherigen auf und zeigt, wie das Bild in einen Link verwandelt werden kann. Verschachteln Sie dazu das `<img>`-Tag innerhalb des {{HTMLElement("a")}}-Elements. Sie sollten den alternativen Text so gestalten, dass er die Ressource beschreibt, auf die der Link zeigt, als ob Sie stattdessen einen Textlink verwenden würden.

```html
<a href="https://developer.mozilla.org">
  <img
    src="/shared-assets/images/examples/favicon144.png"
    alt="Visit the MDN site" />
</a>
```

{{ EmbedLiveSample('Image_link', '100%', '160') }}

### Verwendung des srcset-Attributs

In diesem Beispiel fügen wir ein `srcset`-Attribut mit einem Verweis auf eine hochauflösende Version des Logos hinzu; diese wird auf hochauflösenden Geräten anstelle des `src`-Bildes geladen. Das im `src`-Attribut angegebene Bild wird als `1x`-Kandidat in den {{Glossary("User_agent", "User Agents")}} gezählt, die `srcset` unterstützen.

```html
<img
  src="/shared-assets/images/examples/favicon72.png"
  alt="MDN"
  srcset="/shared-assets/images/examples/favicon144.png 2x" />
```

{{EmbedLiveSample("Using_the_srcset_attribute", "100%", "160")}}

### Verwendung der srcset- und sizes-Attribute

Das `src`-Attribut wird in den {{Glossary("User_agent", "User Agents")}}, die `srcset` unterstützen, ignoriert, wenn `w`-Beschreiber enthalten sind. Wenn die Medienbedingung `(width <= 600px)` zutrifft, wird das 200 Pixel breite Bild geladen (es ist dasjenige, das am besten mit `200px` übereinstimmt), andernfalls wird das andere Bild geladen.

```html
<img
  src="clock-demo-200px.png"
  alt="The time is 12:45."
  srcset="clock-demo-200px.png 200w, clock-demo-400px.png 400w"
  sizes="(width <= 600px) 200px, 50vw" />
```

{{EmbedLiveSample("Using_the_srcset_and_sizes_attributes", "100%", 350)}}

> [!NOTE]
> Um die Größenänderung in Aktion zu sehen, {{LiveSampleLink('Using_the_srcset_and_sizes_attributes', 'sehen Sie das Beispiel auf einer separaten Seite')}}, damit Sie den Inhaltsbereich tatsächlich ändern können.

## Sicherheits- und Datenschutzbedenken

Obwohl `<img>`-Elemente unschuldige Verwendungszwecke haben, können sie unerwünschte Folgen für die Sicherheit und den Datenschutz der Benutzer haben. Siehe [Referer-Header: Datenschutz- und Sicherheitsbedenken](/de/docs/Web/Privacy/Guides/Referer_header:_privacy_and_security_concerns) für weitere Informationen und Maßnahmen.

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
          >Phrasierungsinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#embedded_content"
          >eingebetteter Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#palpable_content"
          >fühlbarer Inhalt</a
        >. Wenn das Element ein <code>usemap</code>-Attribut hat, ist es auch Teil der Kategorie des interaktiven Inhalts.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Inhalte</th>
      <td>Keine; es ist ein {{Glossary("void_element", "leeres Element")}}.</td>
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
            or <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a>
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

- Die Elemente {{HTMLElement("picture")}}, {{HTMLElement("object")}} und {{HTMLElement("embed")}}
- {{cssxref("object-fit")}}, {{cssxref("object-position")}}, {{cssxref("image-orientation")}}, {{cssxref("image-rendering")}} und {{cssxref("image-resolution")}}: Bildbezogene CSS-Eigenschaften.
- Die [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Schnittstelle für dieses Element
- [HTML-Bilder](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images)
- [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types)
- [Responsive Images](/de/docs/Web/HTML/Guides/Responsive_images)
