---
title: "<img>: Das Image Embed Element"
slug: Web/HTML/Reference/Elements/img
l10n:
  sourceCommit: 5e815d522e796fb2209fa8470616b37e31c572b4
---

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

- Das `src` Attribut enthält den Pfad zum Bild, das Sie einbetten möchten. Es ist nicht zwingend erforderlich, wenn das [srcset](/de/docs/Web/API/HTMLImageElement/srcset) Attribut verfügbar ist. Mindestens eines der `src` oder `srcset` Attribute muss jedoch angegeben werden.
- Das `alt` Attribut enthält einen textuellen Ersatz für das Bild, der obligatorisch und **ungemein nützlich** für die Barrierefreiheit ist – Screenreader lesen den Attributwert vor, damit die Nutzer wissen, was das Bild bedeutet. Der Alt-Text wird auch auf der Seite angezeigt, wenn das Bild aus irgendeinem Grund nicht geladen werden kann: zum Beispiel Netzwerkfehler, Inhaltsblockierung oder Linkverfall.

Es gibt viele andere Attribute, um verschiedene Zwecke zu erreichen:

- Kontrolle über [Referrer](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy)/{{Glossary("CORS", "CORS")}} für Sicherheit und Privatsphäre: siehe [`crossorigin`](#crossorigin) und [`referrerpolicy`](#referrerpolicy).
- Verwenden Sie sowohl [`width`](#width) als auch [`height`](#height), um die intrinsische Größe des Bildes festzulegen und Platz vor dem Laden zu reservieren, um Layoutverschiebungen zu mindern.
- Empfehlungen für responsive Bilder mit [`sizes`](#sizes) und [`srcset`](#srcset) (siehe auch das {{htmlelement("picture")}} Element und unser [Leitfaden für Responsive Images](/de/docs/Web/HTML/Guides/Responsive_images)).

## Unterstützte Bildformate

Der HTML-Standard gibt nicht vor, welche Bildformate unterstützt werden sollen, sodass {{Glossary("user_agent", "User Agents")}} unterschiedliche Formate unterstützen können.

> [!NOTE]
> Der [Guide zu Bilddateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types) bietet umfassende Informationen über Bildformate und deren Unterstützung durch Webbrowser.
> Dieser Abschnitt ist nur eine Zusammenfassung!

Die auf dem Web am häufigsten verwendeten Bilddateiformate sind:

- [APNG (Animated Portable Network Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#apng_animated_portable_network_graphics) — Gute Wahl für verlustfreie Animationssequenzen (GIF ist weniger leistungsfähig)
- [AVIF (AV1 Image File Format)](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) — Gute Wahl sowohl für Bilder als auch für animierte Bilder aufgrund der hohen Leistung.
- [GIF (Graphics Interchange Format)](/de/docs/Web/Media/Guides/Formats/Image_types#gif_graphics_interchange_format) — Gute Wahl für _einfache_ Bilder und Animationen.
- [JPEG (Joint Photographic Expert Group image)](/de/docs/Web/Media/Guides/Formats/Image_types#jpeg_joint_photographic_experts_group_image) — Gute Wahl für verlustbehaftete Komprimierung von Standbildern (derzeit am beliebtesten).
- [PNG (Portable Network Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#png_portable_network_graphics) — Gute Wahl für verlustfreie Komprimierung von Standbildern (etwas bessere Qualität als JPEG).
- [SVG (Scalable Vector Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#svg_scalable_vector_graphics) — Vektorbildformat. Verwenden Sie es für Bilder, die genau in verschiedenen Größen dargestellt werden müssen.
- [WebP (Web Picture format)](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) — Hervorragende Wahl sowohl für Bilder als auch für animierte Bilder

Formate wie [WebP](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) und [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) werden empfohlen, da sie viel besser abschneiden als PNG, JPEG, GIF für sowohl Stand- als auch animierte Bilder.

SVG bleibt das empfohlene Format für Bilder, die in verschiedenen Größen genau dargestellt werden müssen.

## Fehler beim Laden von Bildern

Wenn beim Laden oder Rendern eines Bildes ein Fehler auftritt und ein `onerror` Ereignishandler für das [`error`](/de/docs/Web/API/HTMLElement/error_event) Ereignis eingerichtet wurde, wird dieser Ereignishandler aufgerufen. Dies kann in mehreren Situationen passieren, darunter:

- Die `src` oder `srcset` Attribute sind leer (`""`) oder `null`.
- Die `src` {{Glossary("URL", "URL")}} ist die gleiche wie die URL der Seite, auf der sich der User gerade befindet.
- Das Bild ist in irgendeiner Weise beschädigt, sodass es nicht geladen werden kann.
- Die Metadaten des Bildes sind so beschädigt, dass die Dimensionen nicht abgerufen werden können und keine Dimensionen in den Attributen des `<img>` Elements angegeben wurden.
- Das Bild ist in einem Format, das vom {{Glossary("user_agent", "User Agent")}} nicht unterstützt wird.

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `alt`
  - : Definiert den Text, der das Bild auf der Seite ersetzen kann.

    > [!NOTE]
    > Browser zeigen nicht immer Bilder an. Es gibt einige Situationen, in denen ein Browser möglicherweise keine Bilder anzeigt, wie zum Beispiel:
    >
    > - Nicht-visuelle Browser (wie die von Menschen mit Sehbehinderungen verwendet)
    > - Der Nutzer entscheidet sich dafür, keine Bilder anzuzeigen (um Bandbreite zu sparen, aus Datenschutzgründen)
    > - Das Bild ist ungültig oder ein [nicht unterstützter Typ](#unterstützte_bildformate)
    >
    > In diesen Fällen kann der Browser das Bild durch den Text im `alt` Attribut des Elements ersetzen. Aus diesen und anderen Gründen sollten Sie wenn möglich einen sinnvollen Wert für `alt` angeben.

    Die Einstellung dieses Attributs auf einen leeren String (`alt=""`) zeigt an, dass dieses Bild _keinen_ wesentlichen Teil des Inhalts darstellt (es handelt sich um Dekoration oder ein Tracking Pixel) und dass nicht-visuelle Browser es bei der {{Glossary("Engine/Rendering", "Darstellung")}} weglassen können. Visuelle Browser werden auch das kaputte Bildsymbol ausblenden, wenn das `alt` Attribut leer ist und das Bild nicht angezeigt werden konnte.

    Dieses Attribut wird auch beim Kopieren und Einfügen des Bildes in Text oder beim Speichern eines verknüpften Bildes als Lesezeichen verwendet.

- `attributionsrc` {{deprecated_inline}}
  - : Gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}} Header zusammen mit der Bildanfrage sendet.

    Auf der Serverseite wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}} oder {{httpheader("Attribution-Reporting-Register-Trigger")}} Headers in der Antwort auszulösen, um eine bildbasierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#html-based_event_sources) oder einen [Attributionstrigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#html-based_attribution_triggers) zu registrieren. Welcher Antwortheader zurückgesendet werden soll, hängt vom Wert des `Attribution-Reporting-Eligible` Headers ab, der die Registrierung ausgelöst hat.

    Das entsprechende Quellen- oder Triggerevent wird gestartet, sobald der Browser die Antwort mit der Bilddatei erhält.

    > [!NOTE]
    > Siehe die [Attributionsbericht-API](/de/docs/Web/API/Attribution_Reporting_API) für weitere Details.

    Es gibt zwei Versionen dieses Attributs, die Sie festlegen können:
    - Boolesch, d.h. nur der `attributionsrc`-Name. Dies gibt an, dass Sie möchten, dass der Header {{httpheader("Attribution-Reporting-Eligible")}} an denselben Server gesendet wird, auf den das `src` Attribut verweist. Dies ist in Ordnung, wenn Sie die Registrierung von Quellen oder Triggern auf demselben Server handhaben. Bei der Registrierung eines Attributionstriggers ist diese Eigenschaft optional, und ein Boolescher Wert wird verwendet, wenn sie weggelassen wird.
    - Wert, der eine oder mehrere URLs enthält, zum Beispiel:

    ```html
    <img
      src="image-file.png"
      alt="My image file description"
      attributionsrc="https://a.example/register-source
                         https://b.example/register-source" />
    ```

    Dies ist nützlich in Fällen, in denen die angeforderte Ressource sich nicht auf einem Server befindet, den Sie kontrollieren, oder Sie die Attributionsquelle auf einem anderen Server registrieren möchten. In diesem Fall können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcenanforderung erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}} Header an die in `attributionSrc` angegebenen URL(s) zusätzlich zum Ursprung der Ressource gesendet. Diese URLs können dann mit einem {{httpheader("Attribution-Reporting-Register-Source")}} oder {{httpheader("Attribution-Reporting-Register-Trigger")}} Header antworten, um die Registrierung abzuschließen.

    > [!NOTE]
    > Die Angabe mehrerer URLs bedeutet, dass mehrere Attributionsquellen auf derselben Funktion registriert werden können. Sie könnten zum Beispiel verschiedene Kampagnen haben, deren Erfolg Sie zu messen versuchen, wofür unterschiedliche Berichte über unterschiedliche Daten erstellt werden.

- [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)
  - : Gibt an, ob das Abrufen des Bildes über eine {{Glossary("CORS", "CORS")}} Anfrage erfolgen muss. Bilddaten von einem [CORS-fähigen Bild](/de/docs/Web/HTML/How_to/CORS_enabled_image), das durch eine CORS-Anfrage zurückgegeben wird, können im {{HTMLElement("canvas")}} Element wiederverwendet werden, ohne als "[tainted](/de/docs/Web/HTML/How_to/CORS_enabled_image#security_and_tainted_canvases)" markiert zu werden.

    Wenn das `crossorigin` Attribut _nicht_ spezifiziert ist, wird eine Nicht-CORS-Anfrage gesendet (ohne den {{httpheader("Origin")}} Header) und der Browser markiert das Bild als tainted und schränkt den Zugriff auf dessen Bilddaten ein, wodurch dessen Verwendung in {{HTMLElement("canvas")}} Elementen verhindert wird.

    Wenn das `crossorigin` Attribut _spezifiziert_ ist, wird eine CORS-Anfrage gesendet (mit dem {{httpheader("Origin")}} Header); jedoch, wenn der Server nicht in den Zugriff über Ursprungsbeschränkungen auf die Bilddaten einwilligt (durch das Nicht-Senden irgendeines {{httpheader("Access-Control-Allow-Origin")}} Headers oder indem es den Ursprungsort der Seite im {{httpheader("Access-Control-Allow-Origin")}} Antwortheader, den es sendet, nicht einschließt), blockiert der Browser das Laden des Bildes und protokolliert einen CORS-Fehler in der Entwicklerkonsole.

    Erlaubte Werte:
    - `anonymous`
      - : Eine CORS-Anfrage wird gesendet, bei der Anmeldeinformationen ausgelassen werden (d.h. keine {{Glossary("cookie", "Cookies")}}, [X.509-Zertifikate](https://datatracker.ietf.org/doc/html/rfc5280) oder {{httpheader("Authorization")}} Header).
    - `use-credentials`
      - : Die CORS-Anfrage wird mit enthaltenen Anmeldeinformationen gesendet (d.h. Cookies, X.509-Zertifikate und der `Authorization` Header). Wenn der Server nicht zustimmt, Anmeldeinformationen mit der Ursprungsseite zu teilen (durch das Zurücksenden des Headers `Access-Control-Allow-Credentials: true`), markiert der Browser das Bild als tainted und schränkt den Zugriff auf dessen Bilddaten ein.

    Wenn das Attribut einen ungültigen Wert hat, behandeln Browser ihn so, als wäre der Wert `anonymous` verwendet worden. Siehe [CORS-Einstellungen Attribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin) für zusätzliche Informationen.

- `decoding`
  - : Dieses Attribut bietet dem Browser einen Hinweis darauf, ob das Bilddekodieren zusammen mit dem Rendern des anderen DOM-Inhalts in einem einzigen Präsentationsschritt erfolgen sollte, der „korrekter“ aussieht (`sync`), oder ob der andere DOM-Inhalt zuerst gerendert und präsentiert werden sollte und das Bild später dekodiert und präsentiert werden sollte (`async`). In der Praxis bedeutet `async`, dass der nächste Anstrich nicht darauf wartet, dass das Bild dekodiert wird.

    Es ist oft schwierig, einen merklichen Effekt beim Verwenden von `decoding` bei statischen `<img>` Elementen wahrzunehmen. Sie werden wahrscheinlich zunächst als leere Bilder gerendert, während die Bilddateien abgerufen werden (entweder aus dem Netzwerk oder aus dem Cache) und dann unabhängig behandelt werden, sodass das „Synchronisieren“ von Inhaltsupdates weniger offensichtlich ist. Allerdings kann das Blockieren des Renderns während der Dekodierung zwar oft recht klein sein, _gemessen_ werden – selbst wenn es mit bloßem Auge schwer zu beobachten ist. Siehe [Was macht das Bild-Dekodierungsattribut eigentlich?](https://www.tunetheweb.com/blog/what-does-the-image-decoding-attribute-actually-do/) für eine detailliertere Analyse (tunetheweb.com, 2023).

    Die Verwendung unterschiedlicher `decoding` Typen kann zu sichtbareren Unterschieden führen, wenn `<img>` Elemente dynamisch über JavaScript in das DOM eingefügt werden – siehe [`HTMLImageElement.decoding`](/de/docs/Web/API/HTMLImageElement/decoding) für weitere Details.

    Erlaubte Werte:
    - `sync`
      - : Dekodieren Sie das Bild synchron zusammen mit dem Rendern des anderen DOM-Inhalts und präsentieren Sie alles gemeinsam.
    - `async`
      - : Dekodieren Sie das Bild asynchron, nach dem Rendern und Präsentieren des anderen DOM-Inhalts.
    - `auto`
      - : Keine Präferenz für den Dekodierungsmodus; der Browser entscheidet, was für den Benutzer am besten ist. Dies ist der voreingestellte Wert.

- [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming)
  - : Kennzeichnet das Bild zur Beobachtung durch die [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming) API. Der angegebene Wert wird zu einem Identifikator für das beobachtete Bildelement. Siehe auch die Seite zum [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming) Attribut.

- [`fetchpriority`](/de/docs/Web/HTML/Reference/Attributes/fetchpriority)
  - : Gibt einen Hinweis auf die relative Priorität, die beim Abrufen des Bildes verwendet werden soll. Erlaubte Werte:
    - `high`
      - : Rufen Sie das Bild mit hoher Priorität relativ zu anderen Bildern ab.
    - `low`
      - : Rufen Sie das Bild mit niedriger Priorität relativ zu anderen Bildern ab.
    - `auto`
      - : Legen Sie keine Präferenz für die Abrufpriorität fest.
        Dies ist der Standardwert.
        Er wird verwendet, wenn kein Wert oder ein ungültiger Wert gesetzt ist.
- `height`
  - : Die intrinsische Höhe des Bildes in Pixel. Muss eine ganze Zahl ohne Einheit sein.

    > [!NOTE]
    > Die Einbeziehung von `height` und [`width`](#width) ermöglicht es, dass das {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Bildes vom Browser berechnet werden kann, bevor das Bild geladen wird. Dieses Seitenverhältnis wird verwendet, um den Platzbedarf für die Anzeige des Bildes zu reservieren, wodurch eine Layoutverschiebung reduziert oder sogar verhindert wird, wenn das Bild heruntergeladen und auf den Bildschirm gemalt wird. Das Reduzieren der Layoutverschiebung ist ein wesentlicher Bestandteil einer guten Benutzererfahrung und Web-Performance.

- `ismap`
  - : Dieses boolesche Attribut gibt an, dass das Bild Teil einer [serverseitigen Karte](https://en.wikipedia.org/wiki/Image_map#Server-side) ist. In diesem Fall werden die Koordinaten, an denen der Benutzer auf das Bild geklickt hat, an den Server gesendet.

    > [!NOTE]
    > Dieses Attribut ist nur zulässig, wenn das `<img>` Element ein Nachfahre eines {{htmlelement("a")}} Elements mit einem gültigen [`href`](/de/docs/Web/HTML/Reference/Elements/a#href) Attribut ist. Dies bietet Nutzern ohne Zeigegeräte ein alternatives Ziel.

- `loading`
  - : Gibt an, wie der Browser das Bild laden soll:
    - `eager`
      - : Lädt das Bild sofort, unabhängig davon, ob sich das Bild derzeit innerhalb des sichtbaren Ansichtsfensters befindet oder nicht (dies ist der Standardwert).
    - `lazy`
      - : Verzögert das Laden des Bildes, bis es eine berechnete Entfernung vom Ansichtsfenster erreicht, wie vom Browser definiert. Dies soll Netzwerke und Speicherbandbreite einsparen, die benötigt werden, um das Bild zu handhaben, bis relativ sicher ist, dass es benötigt wird. Dies verbessert in den meisten typischen Anwendungsfällen die Leistungsfähigkeit des Inhalts erheblich.

    Während explizite [`width`](#width) und [`height`](#height) Attribute für alle Bilder empfohlen werden, um Layoutverschiebungen zu vermeiden, sind sie besonders wichtig für lazy-geladene Bilder. Lazy-geladene Bilder werden nie geladen, wenn sie nicht einen sichtbaren Teil eines Elements überschneiden, selbst wenn das Laden sie ändern würde, da nicht geladene Bilder eine `width` und `height` von `0` haben. Es entsteht eine noch störendere Benutzererfahrung, wenn der im Ansichtsfenster sichtbare Inhalt mitten beim Lesen neu fließt.

    Das [`load`](/de/docs/Web/API/Window/load_event) Ereignis wird ausgelöst, nachdem eager-geladene Bilder abgerufen und verarbeitet wurden, jedoch bevor Lazy-geladene Bilder abgerufen und verarbeitet wurden, selbst wenn sich die Lazy-geladenen Bilder direkt beim initialen Seitenladen im visuellen Ansichtsfenster befinden. Diese Bilder werden dennoch geladen, sobald das Layout abgeschlossen ist; sie beeinflussen einfach nicht das Timing des `load` Ereignisses. Das bedeutet, dass bei Auslösung des `load` Ereignisses möglicherweise noch keine Lazy-geladenen Bilder im visuellen Ansichtsfenster sichtbar sind.

    Das Laden wird nur bei aktiviertem JavaScript verzögert. Dies ist eine Anti-Tracking-Maßnahme, denn wäre Lazy Loading auch bei deaktiviertem Scripting unterstützt, wäre es dennoch möglich, dass eine Seite die ungefähre Scrollposition eines Benutzers während einer Sitzung nachverfolgt, indem strategisch Bilder in das Markup der Seite platziert werden, sodass ein Server ermitteln kann, wie viele Bilder angefordert und wann angefordert werden.

- `referrerpolicy`
  - : Ein String, der anzeigt, welcher Referrer beim Abrufen der Ressource verwendet werden soll:
    - `no-referrer`: Der {{HTTPHeader("Referer")}} Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}} Header wird nicht an {{Glossary("origin", "Origin")}}s ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`: Der gesendete Referrer wird auf den Ursprung der verweisenden Seite beschränkt: sein [Schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`: Der an andere Origins gesendete Referrer wird auf das Schema, den Host und den Port beschränkt. Navigationen auf demselben Origin enthalten weiterhin den Pfad.
    - `same-origin`: Ein Referrer wird für {{Glossary("Same-origin_policy", "den gleichen Origin")}} gesendet, aber Anfragen über den Origin hinaus enthalten keine Referrer-Informationen.
    - `strict-origin`: Senden Sie den Ursprung des Dokuments nur als Referrer, wenn das Protokollsicherheitsniveau gleich bleibt (HTTPS→HTTPS), jedoch nicht an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard): Senden Sie eine vollständige URL beim Ausführen einer Anfrage zum gleichen Origin, senden Sie nur den Ursprung, wenn das Protokollsicherheitsniveau gleich bleibt (HTTPS→HTTPS), und senden Sie keinen Header an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `unsafe-url`: Der Referrer wird den Ursprung _und_ den Pfad enthalten (jedoch nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder [Benutzernamen](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge leckt.

- `sizes`
  - : Ein oder mehrere durch Kommas getrennte Werte, die Quellgrößen oder das Schlüsselwort `auto` sein können. Die Spezifikation erfordert, dass das `sizes` Attribut nur vorhanden ist, wenn `srcset` Breitenbeschreibungen verwendet.

    **Quellgröße** besteht aus:
    1. Einer [Media-Bedingung](/de/docs/Web/CSS/Guides/Media_queries/Using#syntax), die für den letzten Eintrag in der Liste weggelassen wird.
    2. Einem Quellgrößenwert.

    Medienbedingungen beschreiben Eigenschaften des _Ansichtsfensters_, nicht des _Bildes_. Beispielsweise, `(height <= 500px) 1000px` schlägt vor, eine Bildquelle von 1000px Breite zu verwenden, wenn die Höhe des _Ansichtsfensters_ 500px oder weniger beträgt. Da ein Quellgrößenbeschreiber die Breite angibt, die während des Layouts für das Bild verwendet werden soll, basiert die Medienbedingung typischerweise (aber nicht notwendigerweise) auf der {{cssxref("@media/width")}}.

    Quellgrößenwerte spezifizieren die beabsichtigte Anzeigengröße des Bildes. {{Glossary("User_agent", "User Agents")}} verwenden die aktuelle Quellgröße, um eine der vom `srcset` Attribut bereitgestellten Quellen auszuwählen, wenn diese Quellen mit Breiten (`w`) Beschreibern beschrieben werden. Die gewählte Quellgröße beeinflusst die {{Glossary("intrinsic_size", "intrinsische Größe")}} des Bildes (die Anzeigengröße des Bildes, wenn keine {{Glossary("CSS", "CSS")}} Gestaltung angewendet wird).

    Ein Quellgrößenwert kann jede nicht-negative [Länge](/de/docs/Web/CSS/Reference/Values/length) sein. Es dürfen keine CSS Funktionen verwendet werden, außer den [mathematischen Funktionen](/de/docs/Web/CSS/Reference/Values/Functions#math_functions). Einheiten werden auf die gleiche Weise wie [Media-Abfragen](/de/docs/Web/CSS/Guides/Media_queries) interpretiert, was bedeutet, dass alle relativen Längeneinheiten relativ zur Dokumentenwurzel und nicht zum `<img>` Element sind. Beispielsweise ist ein `em` Wert relativ zur Wurzel-Schriftgröße, nicht zur Schriftgröße des Bildes. [Prozentwerte](/de/docs/Web/CSS/Reference/Values/percentage) sind nicht erlaubt. Wenn das `sizes` Attribut nicht bereitgestellt wird, hat es einen Standardwert von `100vw` (die Breite des Ansichtsfensters).

    Das `auto` Schlüsselwort kann die gesamte Liste der Größen oder den ersten Eintrag in der Liste ersetzen. Es ist nur in Kombination mit `loading="lazy"` gültig und löst die [konkrete Größe](/de/docs/Web/CSS/Reference/Values/image) des Bildes auf. Da die intrinsische Größe des Bildes noch nicht bekannt ist, sollten `width` und `height` Attribute (oder CSS-Äquivalente) ebenfalls angegeben werden, um zu verhindern, dass der Browser die Standardbreite des Bildes von 300px annimmt.
    Für eine bessere Rückwärtskompatibilität mit Browsern, die `auto` nicht unterstützen, können Sie nach `auto` in das `sizes` Attribut Fallback-Größen aufnehmen:

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
  - : Die {{Glossary("URL", "URL")}} des Bildes. Mindestens eines der `src` und [`srcset`](#srcset) ist für ein `<img>` Element erforderlich. Wenn [`srcset`](#srcset) angegeben ist, wird `src` auf eine der beiden Arten verwendet:
    - als Fallback für Browser, die `srcset` nicht unterstützen.
    - wenn `srcset` den „x“-Deskriptor verwendet, dann ist `src` gleichbedeutend mit einer Quelle mit dem Dichtebeschreiber `1x`; das heißt, das durch `src` angegebene Bild wird auf Bildschirmen mit niedriger Dichte (wie typische 72 DPI oder 96 DPI Displays) verwendet.

- `srcset`
  - : Eine oder mehrere durch Kommas getrennte Zeichenfolgen, die mögliche Bildquellen für den {{Glossary("user_agent", "User Agent")}} angeben, die verwendet werden sollen.

    Jede Zeichenfolge besteht aus:
    1. Einer {{Glossary("URL", "URL")}} zu einem Bild
    2. Optional, Leerzeichen gefolgt von einem der:
       - Ein Breitenbeschreibung (eine positive ganze Zahl direkt gefolgt von `w`). Sie _muss_ mit der intrinsischen Breite des angegebenen Bildes übereinstimmen. Die Breitenbeschreibung wird durch die im `sizes` Attribut angegebene Quellgröße geteilt, um die effektive Pixeldichte zu berechnen. Um beispielsweise eine Bildressource bereitzustellen, die verwendet werden soll, wenn der Renderer ein 450 Pixel breites Bild benötigt, verwenden Sie den Breitenbeschreiber `450w`. Wenn ein `srcset` „w“-Deskriptoren enthält, verwendet der Browser diese Deskriptoren zusammen mit dem `sizes` Attribut, um eine Ressource auszuwählen.
       - Einen Pixeldichtebeschreiber (eine positive Fließkommazahl direkt gefolgt von `x`). Er gibt die Bedingung an, unter der die entsprechende Bildressource als Pixeldichte angezeigt werden soll. Um beispielsweise eine Bildressource bereitzustellen, die verwendet werden soll, wenn die Pixeldichte doppelt so hoch wie die Standarddichte ist, verwenden Sie den Pixeldichtebeschreibung `2x` oder `2.0x`.

    Wenn kein Deskriptor angegeben ist, wird die Quelle mit dem Standardwert `1x` zugewiesen. Es ist falsch, Breitenbeschreibung und Pixeldichtebeschreibungen im gleichen `srcset` Attribut zu mischen. Doppelte Deskriptoren (zum Beispiel zwei Quellen im gleichen `srcset`, die beide mit `2x` beschrieben werden) sind ebenfalls ungültig.

    Leerzeichen, außer des Leerzeichens, das die URL und die entsprechende Bedingungsbeschreibung trennt, werden ignoriert; dies schließt sowohl führende als auch abschließende Leerzeichen ein, sowie Leerzeichen vor oder nach jedem Komma. Wenn jedoch eine Bildkandidatzeichenfolge keine Beschreibungen und kein Leerzeichen nach der URL enthält, muss die folgende Bildkandidatzeichenfolge, falls vorhanden, mit einem oder mehreren Leerzeichen beginnen, andernfalls wird das Komma als Teil der URL betrachtet.

    Wenn das `srcset` des `<img>` Elements „x“-Deskriptoren verwendet, betrachten Browser auch die URL im `src` Attribut (falls vorhanden) als Kandidaten und weisen ihm den Standarddeskriptor `1x` zu. Wenn hingegen das `srcset` Attribut Breitenbeschreibungen verwendet, wird `src` nicht berücksichtigt, und das `sizes` Attribut wird anstelle davon verwendet.

    Der User Agent wählt nach eigenem Ermessen eine der verfügbaren Quellen aus. Dies bietet ihnen erheblichen Spielraum, ihre Auswahl basierend auf Dingen wie Nutzerpräferenzen oder {{Glossary("bandwidth", "Bandbreitenbedingungen")}} anzupassen. Siehe unser [Leitfaden für Responsive Images](/de/docs/Web/HTML/Guides/Responsive_images) für ein Beispiel.

- `width`
  - : Die intrinsische Breite des Bildes in Pixel. Muss eine ganze Zahl ohne Einheit sein.
- `usemap`
  - : Die partielle {{Glossary("URL", "URL")}} (beginnen mit `#`) einer mit dem Element assoziierten [Bildkarte](/de/docs/Web/HTML/Reference/Elements/map).

    > [!NOTE]
    > Sie können dieses Attribut nicht verwenden, wenn sich das `<img>` Element innerhalb eines {{htmlelement("a")}} oder {{HTMLElement("button")}} Elements befindet.

### Veraltete Attribute

- `align` {{deprecated_inline}}
  - : Richtet das Bild mit seinem umgebenden Kontext aus. Verwenden Sie die {{cssxref('float')}} und/oder {{cssxref('vertical-align')}} {{Glossary("CSS", "CSS")}} Eigenschaften anstelle dieses Attributs. Erlaubte Werte:
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
  - : Die Breite eines Rahmens um das Bild. Verwenden Sie die {{cssxref('border')}} {{Glossary("CSS", "CSS")}} Eigenschaft anstelle davon.
- `hspace` {{deprecated_inline}}
  - : Die Anzahl der Pixel Weißraum links und rechts des Bildes. Verwenden Sie die {{cssxref('margin')}} CSS Eigenschaft anstelle dessen.
- `longdesc` {{deprecated_inline}}
  - : Ein Link zu einer detaillierteren Beschreibung des Bildes. Mögliche Werte sind eine {{Glossary("URL", "URL")}} oder eine Element [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id).

    > [!NOTE]
    > Dieses Attribut wird in der [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/obsolete.html#element-attrdef-img-longdesc) als veraltet angesehen. Es hat eine ungewisse Zukunft; Autoren sollten eine {{Glossary("WAI", "WAI")}}-{{Glossary("ARIA", "ARIA")}} Alternative wie [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) oder [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) verwenden.

- `name` {{deprecated_inline}}
  - : Ein Name für das Element. Verwenden Sie stattdessen das [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) Attribut.
- `vspace` {{deprecated_inline}}
  - : Die Anzahl der Pixel Weißraum oberhalb und unterhalb des Bildes. Verwenden Sie stattdessen die {{cssxref('margin')}} CSS Eigenschaft.

## Styling mit CSS

`<img>` ist ein {{Glossary("replaced_elements", "ersetztes Element")}}; es hat einen {{cssxref("display")}} Wert von `inline` standardmäßig, aber seine Standarddimensionen werden durch die intrinsischen Werte des eingebetteten Bildes definiert, als wäre es `inline-block`. Sie können Eigenschaften wie {{cssxref("border")}}/{{cssxref("border-radius")}}, {{cssxref("padding")}}/{{cssxref("margin")}}, {{cssxref("width")}}, {{cssxref("height")}} usw. auf ein Bild setzen.

`<img>` hat keine Grundlinie, sodass wenn Bilder in einem Inline-Formatierungskontext mit {{cssxref("vertical-align", "vertical-align: baseline")}} verwendet werden, das Ende des Bildes auf der Textgrundlinie platziert wird.

Sie können die Eigenschaft {{cssxref("object-position")}} verwenden, um das Bild innerhalb der Box des Elements zu positionieren, und die Eigenschaft {{cssxref("object-fit")}}, um das Zuschneiden des Bildes innerhalb der Box anzupassen (zum Beispiel, ob das Bild die Box füllen oder anpassen soll, auch wenn dafür abgeschnitten werden muss).

Ein Bild kann je nach Typ eine intrinsische Breite und Höhe haben. Für einige Bildtypen sind intrinsische Dimensionen jedoch unnötig. {{Glossary("SVG", "SVG")}} Bilder zum Beispiel haben keine intrinsischen Dimensionen, wenn ihr Wurzel-{{SVGElement("svg")}} Element keine `width` oder `height` gesetzt hat.

## Barrierefreiheit

### Bedeutungsvoller alternativer Beschreibungen erstellen

Der Wert eines `alt` Attributs sollte einen klaren und knappen Text-Ersatz für den Inhalt des Bildes bieten. Es sollte nicht das Vorhandensein des Bildes selbst oder den Dateinamen des Bildes beschreiben. Wenn das `alt` Attribut absichtlich weggelassen wurde, weil das Bild kein textuelles Äquivalent hat, sollten Sie alternative Methoden in Betracht ziehen, um das, was das Bild zu kommunizieren versucht, darzustellen.

#### Nicht machen

```html example-bad
<img alt="image" src="penguin.jpg" />
```

#### So machen

```html example-good
<img alt="A Penguin on a beach." src="penguin.jpg" />
```

Ein wichtiges Barrierefreiheitstest ist, den Inhalt des `alt` Attributs zusammen mit vorhergehendem Textinhalt zu lesen, um zu sehen, ob es den gleichen Sinn wie das Bild vermittelt. Wenn das Bild zum Beispiel dem Satz "Auf meinen Reisen habe ich ein niedliches kleines Tier gesehen:" vorausging, könnte das _Nicht machen_ Beispiel von einem Screenreader als "Auf meinen Reisen habe ich ein niedliches kleines Tier gesehen: Bild" gelesen werden, was keinen Sinn ergibt. Das _So machen_ Beispiel hingegen könnte von einem Screenreader als "Auf meinen Reisen habe ich ein niedliches kleines Tier gesehen: Ein Pinguin am Strand." gelesen werden, was Sinn ergibt.

Für Bilder, die eine Aktion auslösen sollen, zum Beispiel Bilder, die in einem {{htmlelement("a")}} oder {{htmlelement("button")}} Element verschachtelt sind, sollten Sie die ausgelöste Aktion im Wert des `alt` Attributs beschreiben. Zum Beispiel könnten Sie `alt="nächste Seite"` statt `alt="Pfeil rechts"` verwenden. Sie könnten auch in Erwägung ziehen, eine optionale weiterführende Beschreibung in einem `title` Attribut hinzuzufügen; dies kann von Screenreadern gelesen werden, wenn es vom Benutzer angefordert wird.

Wenn auf einem Bild kein `alt` Attribut vorhanden ist, können einige Screenreader den Dateinamen des Bildes stattdessen ansagen. Dies kann eine verwirrende Erfahrung sein, wenn der Dateiname nicht repräsentativ für den Inhalt des Bildes ist.

- [Ein Alt-Entscheidungsbaum • Bilder • WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/images/decision-tree/)
- [Alt-Texte: Der ultimative Leitfaden — Axess Lab](https://axesslab.com/alt-texts/)
- [Wie man großartige Alt-Texte entwirft: Eine Einführung | Deque](https://www.deque.com/blog/great-alt-text-introduction/)
- [MDN Understanding WCAG, Guideline 1.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Erklärung von Erfüllungskriterium 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

### SVG als Bild identifizieren

Aufgrund eines [VoiceOver Bugs](https://webkit.org/b/216364) kündigt VoiceOver SVG Bilder nicht korrekt als Bilder an. Fügen Sie `role="img"` zu allen `<img>` Elementen mit SVG Quell dateien hinzu, um sicherzustellen, dass unterstützende Technologien das SVG korrekt als Bildinhalt ansprechen.

```html
<img src="mdn.svg" alt="MDN" role="img" />
```

### Das title-Attribut

Das [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title) Attribut ist kein akzeptabler Ersatz für das `alt` Attribut. Vermeiden Sie es außerdem, den Wert des `alt` Attributs in einem `title` Attribut zu duplizieren, das auf dasselbe Bild deklariert ist. Dies könnte dazu führen, dass einige Screenreader den gleichen Text zweimal ansagen, was eine verwirrende Erfahrung erzeugt.

Das `title` Attribut sollte auch nicht als zusätzliche Beschreibung verwendet werden, um die Beschreibung im `alt` Attribut eines Bildes zu ergänzen. Wenn ein Bild eine Beschriftung benötigt, verwenden Sie die [`figure`](/de/docs/Web/HTML/Reference/Elements/figure) und [`figcaption`](/de/docs/Web/HTML/Reference/Elements/figcaption) Elemente.

Der Wert des `title` Attributs wird dem Nutzer normalerweise als Tooltip präsentiert, der erscheint, nachdem der Cursor kurz nicht bewegt wurde, während er über dem Bild ist. Während dies dem Nutzer _zusätzliche_ Informationen bieten _kann_, sollten Sie nicht davon ausgehen, dass der Nutzer es jemals sehen wird: Der Nutzer könnte nur über Tastatur oder Touchscreen verfügen. Wenn Sie Informationen haben, die besonders wichtig oder wertvoll für den Nutzer sind, präsentieren Sie sie inline, indem Sie eine der oben genannten Methoden verwenden, anstatt `title` zu verwenden.

- [Verwendung des HTML title-Attributs – aktualisiert | Vispero](https://vispero.com/resources/using-the-html-title-attribute-updated/)

## Beispiele

### Alternativtext

Das folgende Beispiel bettet ein Bild in die Seite ein und enthält einen Alternativtext für die Barrierefreiheit.

```html
<img src="/shared-assets/images/examples/favicon144.png" alt="MDN" />
```

{{ EmbedLiveSample('Alternative_text', '100%', '160') }}

### Bildlink

Dieses Beispiel baut auf dem vorhergehenden auf und zeigt, wie das Bild in einen Link umgewandelt werden kann. Dazu müssen Sie das `<img>` Tag innerhalb des {{HTMLElement("a")}} verschachteln. Sie sollten den Alternativtext so gestalten, dass er die Ressource beschreibt, auf die der Link verweist, als ob Sie einen Textlink verwenden würden.

```html
<a href="https://developer.mozilla.org">
  <img
    src="/shared-assets/images/examples/favicon144.png"
    alt="Visit the MDN site" />
</a>
```

{{ EmbedLiveSample('Image_link', '100%', '160') }}

### Verwendung des srcset-Attributs

In diesem Beispiel fügen wir ein `srcset` Attribut mit einem Verweis auf eine hochauflösende Version des Logos hinzu; dies wird anstelle des `src` Bildes auf Geräten mit hoher Auflösung geladen. Das im `src` Attribut referenzierte Bild wird als `1x` Kandidat in {{Glossary("User_agent", "User Agents")}} gezählt, die `srcset` unterstützen.

```html
<img
  src="/shared-assets/images/examples/favicon72.png"
  alt="MDN"
  srcset="/shared-assets/images/examples/favicon144.png 2x" />
```

{{EmbedLiveSample("Using_the_srcset_attribute", "100%", "160")}}

### Verwendung der srcset- und sizes-Attribute

Das `src` Attribut wird in {{Glossary("User_agent", "User Agents")}}, die `srcset` unterstützen, ignoriert, wenn `w` Beschreiber enthalten sind. Wenn die Medienbedingung `(width <= 600px)` zutrifft, wird das 200 Pixel breite Bild geladen (es ist das, das `200px` am nächstgelegen passt), andernfalls wird das andere Bild geladen.

```html
<img
  src="clock-demo-200px.png"
  alt="The time is 12:45."
  srcset="clock-demo-200px.png 200w, clock-demo-400px.png 400w"
  sizes="(width <= 600px) 200px, 50vw" />
```

{{EmbedLiveSample("Using_the_srcset_and_sizes_attributes", "100%", 350)}}

> [!NOTE]
> Um das Neugrößen in Aktion zu sehen, {{LiveSampleLink('Using_the_srcset_and_sizes_attributes', 'sehen Sie sich das Beispiel auf einer separaten Seite an')}}, damit Sie tatsächlich den Inhaltsbereich neugrößen können.

## Sicherheits- und Datenschutzbedenken

Obwohl `<img>` Elemente harmlose Verwendungen haben, können sie unerwünschte Folgen für die Sicherheit und den Datenschutz der Nutzer haben. Siehe [Referer-Header: Datenschutz- und Sicherheitsbedenken](/de/docs/Web/Privacy/Guides/Referer_header:_privacy_and_security_concerns) für weitere Informationen und Abhilfemaßnahmen.

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
          >Flussinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phraseinhalte</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#embedded_content"
          >eingebetteter Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#palpable_content"
          >fühlbarer Inhalt</a
        >. Wenn das Element ein <code>usemap</code> Attribut hat, ist es auch ein Teil der Kategorie "interaktiver Inhalt".
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "leeres Element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss ein Anfangs-Tag haben und darf keinen End-Tag haben.</td>
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
            Mit nicht leerem <code>alt</code> Attribut oder ohne
            <code>alt</code> Attribut:
            <code
              ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/img_role"
                ><code>img</code></a
              ></code
            >
          </li>
          <li>
            Mit leerem <code>alt</code> Attribut:
            <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"
              ><code>presentation</code></a
            >
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
      <td>
        <ul>
          <li>
            Mit nicht leerem <code>alt</code> Attribut:
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
            Mit leerem <code>alt</code> Attribut, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/none_role"><code>none</code></a>
            oder <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a>
          </li>
          <li>
            Ohne <code>alt</code> Attribut, keine <code>role</code> erlaubt
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
- [HTML Bilder](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images)
- [Guide zu Bilddateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types)
- [Leitfaden für Responsive Images](/de/docs/Web/HTML/Guides/Responsive_images)
