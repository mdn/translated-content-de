---
title: "<img>: Das Image-Embed-Element"
slug: Web/HTML/Reference/Elements/img
l10n:
  sourceCommit: dd868507df863ab4f37d53c960c76e20e9ee365f
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

- Das `src`-Attribut enthält den Pfad zu dem Bild, das Sie einbetten möchten. Es ist nicht zwingend erforderlich, wenn das [srcset](/de/docs/Web/API/HTMLImageElement/srcset)-Attribut verfügbar ist. Mindestens eines der Attribute `src` oder `srcset` muss jedoch angegeben werden.
- Das `alt`-Attribut enthält einen textuellen Ersatz für das Bild, das obligatorisch ist und für die Barrierefreiheit **unglaublich nützlich** ist — Bildschirmlesegeräte lesen den Attributwert ihren Benutzern vor, damit diese wissen, was das Bild bedeutet. Der Alternativtext wird auch auf der Seite angezeigt, wenn das Bild aus irgendeinem Grund nicht geladen werden kann: zum Beispiel Netzfehler, Inhaltsblockierung oder kaputte Links.

Es gibt viele andere Attribute, um verschiedene Zwecke zu erreichen:

- [Referrer](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy)/{{Glossary("CORS", "CORS")}}-Kontrolle für Sicherheit und Datenschutz: siehe [`crossorigin`](#crossorigin) und [`referrerpolicy`](#referrerpolicy).
- Verwenden Sie sowohl [`width`](#width) als auch [`height`](#height), um die intrinsische Größe des Bildes festzulegen, sodass es Platz einnehmen kann, bevor es geladen wird, um Layoutverschiebungen zu mildern.
- Hinweise zu responsiven Bildern mit [`sizes`](#sizes) und [`srcset`](#srcset) (siehe auch das {{htmlelement("picture")}}-Element und unser [Leitfaden zu responsiven Bildern](/de/docs/Web/HTML/Guides/Responsive_images)).

## Unterstützte Bildformate

Der HTML-Standard listet nicht auf, welche Bildformate unterstützt werden sollen, sodass {{Glossary("user_agent", "User Agents")}} unterschiedliche Formate unterstützen können.

> [!NOTE]
> Der [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types) bietet umfassende Informationen über Bildformate und deren Unterstützung durch Webbrowser.
> Dieser Abschnitt ist nur eine Zusammenfassung!

Die Bilddateiformate, die im Web am häufigsten verwendet werden, sind:

- [APNG (Animated Portable Network Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#apng_animated_portable_network_graphics) — Gute Wahl für verlustfreie Animationssequenzen (GIF ist weniger performant)
- [AVIF (AV1 Image File Format)](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) — Gute Wahl für Bilder und animierte Bilder aufgrund hoher Leistung.
- [GIF (Graphics Interchange Format)](/de/docs/Web/Media/Guides/Formats/Image_types#gif_graphics_interchange_format) — Gute Wahl für _einfache_ Bilder und Animationen.
- [JPEG (Joint Photographic Expert Group image)](/de/docs/Web/Media/Guides/Formats/Image_types#jpeg_joint_photographic_experts_group_image) — Gute Wahl für verlustbehaftete Kompression von Standbildern (derzeit am beliebtesten).
- [PNG (Portable Network Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#png_portable_network_graphics) — Gute Wahl für verlustfreie Kompression von Standbildern (etwas bessere Qualität als JPEG).
- [SVG (Scalable Vector Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#svg_scalable_vector_graphics) — Vektorbildformat. Verwenden Sie es für Bilder, die genau in verschiedenen Größen gezeichnet werden müssen.
- [WebP (Web Picture format)](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) — Hervorragende Wahl für Bilder und animierte Bilder

Formate wie [WebP](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) und [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) werden empfohlen, da sie für Standbilder und animierte Bilder viel besser abschneiden als PNG, JPEG und GIF.

SVG bleibt das empfohlene Format für Bilder, die in verschiedenen Größen genau gezeichnet werden müssen.

## Ladefehler bei Bildern

Wenn beim Laden oder Rendern eines Bildes ein Fehler auftritt und ein `onerror`-Ereignishandler für das [`error`](/de/docs/Web/API/HTMLElement/error_event)-Ereignis festgelegt wurde, wird dieser Ereignishandler aufgerufen. Dies kann in mehreren Situationen passieren, einschließlich:

- Die `src`- oder die `srcset`-Attribute sind leer (`""`) oder `null`.
- Die `src`-URL](/de/docs/Glossary/URL) ist dieselbe wie die der Seite, auf der sich der Benutzer derzeit befindet.
- Das Bild ist in irgendeiner Weise beschädigt, was es daran hindert, geladen zu werden.
- Die Metadaten des Bildes sind so beschädigt, dass es unmöglich ist, seine Dimensionen abzurufen, und keine Dimensionen wurden in den Attributen des `<img>`-Elements angegeben.
- Das Bild ist in einem Format, das nicht von dem {{Glossary("user_agent", "User Agent")}} unterstützt wird.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `alt`
  - : Definiert Text, der das Bild auf der Seite ersetzen kann.

    > [!NOTE]
    > Browser zeigen nicht immer Bilder an. Es gibt einige Situationen, in denen ein Browser möglicherweise keine Bilder anzeigt, wie zum Beispiel:
    >
    > - Nicht-visuelle Browser (wie diejenigen, die von Menschen mit Sehbehinderungen verwendet werden)
    > - Der Benutzer entscheidet sich, keine Bilder anzuzeigen (zum Einsparen von Bandbreite, aus Datenschutzgründen)
    > - Das Bild ist ungültig oder ein [nicht unterstützter Typ](#unterstützte_bildformate)
    >
    > In diesen Fällen kann der Browser das Bild durch den Text im `alt`-Attribut des Elements ersetzen. Aus diesen und anderen Gründen sollten Sie nach Möglichkeit einen nützlichen Wert für `alt` angeben.

    Wenn Sie dieses Attribut auf einen leeren String (`alt=""`) setzen, wird angezeigt, dass dieses Bild _kein_ wesentlicher Bestandteil des Inhalts ist (es ist Dekoration oder ein Tracking-Pixel) und dass nicht-visuelle Browser es beim {{Glossary("Engine/Rendering", "Rendern")}} weglassen können. Visuelle Browser verbergen auch das Symbol für das kaputte Bild, wenn das `alt`-Attribut leer ist und das Bild nicht angezeigt werden konnte.

    Dieses Attribut wird auch verwendet, wenn das Bild in Text kopiert und eingefügt oder ein verlinktes Bild als Lesezeichen gespeichert wird.

- `attributionsrc` {{experimental_inline}}
  - : Gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header zusammen mit der Bildanforderung sendet.

    Dies wird auf Serverseite verwendet, um den Versand eines {{httpheader("Attribution-Reporting-Register-Source")}} oder {{httpheader("Attribution-Reporting-Register-Trigger")}} Headers in der Antwort auszulösen, um eine auf dem Bild basierende [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#html-based_event_sources) oder einen [Attributionstrigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#html-based_attribution_triggers) zu registrieren. Welcher Antwort-Header zurückgesendet werden sollte, hängt vom Wert des `Attribution-Reporting-Eligible`-Headers ab, der die Registrierung ausgelöst hat.

    Das entsprechende Quell- oder Triggerereignis wird ausgelöst, sobald der Browser die Antwort mit der Bilddatei erhält.

    > [!NOTE]
    > Einzelheiten finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

    Es gibt zwei Versionen dieses Attributs, die Sie festlegen können:
    - Boolesch, d.h. nur der `attributionsrc` Name. Dies gibt an, dass Sie möchten, dass der {{httpheader("Attribution-Reporting-Eligible")}}-Header an denselben Server gesendet wird, auf den auch das `src`-Attribut verweist. Dies ist in Ordnung, wenn Sie die Attributionsquelle oder die Triggerregistrierung auf demselben Server bearbeiten. Beim Registrieren eines Attributionstriggers ist diese Eigenschaft optional, und es wird ein boolescher Wert verwendet, wenn sie ausgelassen wird.
    - Wert, der eine oder mehrere URLs enthält, zum Beispiel:

    ```html
    <img
      src="image-file.png"
      alt="My image file description"
      attributionsrc="https://a.example/register-source
                         https://b.example/register-source" />
    ```

    Dies ist in Fällen nützlich, in denen die angeforderte Ressource nicht auf einem Server liegt, den Sie kontrollieren, oder wenn Sie die Registrierung der Attributionsquelle auf einem anderen Server verwalten möchten. In diesem Fall können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcenanforderung erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header an die in `attributionSrc` angegebenen URL(s) zusätzlich zum Ursprungsort der Ressource gesendet. Diese URLs können dann mit einem entsprechenden {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Antwortheader antworten, um die Registrierung abzuschließen.

    > [!NOTE]
    > Durch Angabe mehrerer URLs können mehrere Attributionsquellen für dasselbe Feature registriert werden. Sie könnten beispielsweise verschiedene Kampagnen haben, deren Erfolg Sie messen möchten, wodurch unterschiedliche Berichte über unterschiedliche Daten generiert werden.

- [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)
  - : Gibt an, ob das Abrufen des Bildes mithilfe einer {{Glossary("CORS", "CORS")}}-Anforderung erfolgen muss. Bilddaten von einem [CORS-aktivierten Bild](/de/docs/Web/HTML/How_to/CORS_enabled_image) zurückgegeben von einer CORS-Anforderung können im {{HTMLElement("canvas")}}-Element wiederverwendet werden, ohne als "[tainted](/de/docs/Web/HTML/How_to/CORS_enabled_image#security_and_tainted_canvases)" markiert zu werden.

    Wenn das `crossorigin`-Attribut _nicht_ angegeben ist, wird eine nicht-CORS-Anforderung gesendet (ohne den {{httpheader("Origin")}}-Anforderungsheader), und der Browser markiert das Bild als verschmutzt und schränkt den Zugriff auf seine Bilddaten ein, wodurch seine Verwendung in {{HTMLElement("canvas")}}-Elementen verhindert wird.

    Wenn das `crossorigin`-Attribut _angegeben_ ist, wird eine CORS-Anforderung gesendet (mit dem {{httpheader("Origin")}}-Anforderungsheader); wenn der Server jedoch nicht die Erlaubnis gibt, auf die Bilddaten von der Ursprungsseite zuzugreifen (indem er keinen {{httpheader("Access-Control-Allow-Origin")}}-Antwortheader sendet oder die Ursprungsseite nicht in einem gesendeten {{httpheader("Access-Control-Allow-Origin")}}-Antwortheader einschließt), blockiert der Browser das Laden des Bildes und protokolliert einen CORS-Fehler in der Entwicklertools-Konsole.

    Zulässige Werte:
    - `anonymous`
      - : Eine CORS-Anforderung wird gesendet, bei der die Anmeldeinformationen ausgelassen werden (d.h. keine {{Glossary("cookie", "Cookies")}}, [X.509-Zertifikate](https://datatracker.ietf.org/doc/html/rfc5280) oder {{httpheader("Authorization")}}-Anforderungsheader).
    - `use-credentials`
      - : Die CORS-Anforderung wird mit allen Anmeldeinformationen gesendet (d.h. Cookies, X.509-Zertifikate und der `Authorization`-Anforderungsheader). Wenn der Server nicht zustimmt, die Anmeldeinformation mit der Ursprungsseite zu teilen (indem er den `Access-Control-Allow-Credentials: true`-Antwortheader sendet), markiert der Browser das Bild als verschmutzt und schränkt den Zugriff auf seine Bilddaten ein.

    Wenn das Attribut einen ungültigen Wert hat, behandeln Browser es so, als ob der Wert `anonymous` verwendet worden wäre. Weitere Informationen finden Sie unter [CORS-Einstellungen Attribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin).

- `decoding`
  - : Dieses Attribut bietet dem Browser einen Hinweis darauf, ob er die Bilddecodierung zusammen mit dem Rendern des anderen DOM-Inhalts in einem einzigen Präsentationsschritt durchführen soll, der "korrekter" aussieht (`sync`), oder den anderen DOM-Inhalt zuerst rendern und präsentieren soll und das Bild später dekodieren und präsentieren soll (`async`). In der Praxis bedeutet `async`, dass die nächste Darstellung nicht auf die Dekodierung des Bildes wartet.

    Es ist oft schwierig, einen merklichen Effekt beim Verwenden von `decoding` auf statischen `<img>`-Elementen wahrzunehmen. Sie werden wahrscheinlich zunächst als leere Bilder gerendert, während die Bilddateien abgerufen (entweder aus dem Netzwerk oder aus dem Cache) und dann unabhängig behandelt werden, sodass die "Synchronisierung" von Inhaltsaktualisierungen weniger offensichtlich ist. Das Blockieren des Renderings während der Dekodierung kann zwar oft gering sein, _kann_ jedoch gemessen werden — selbst wenn es mit bloßem Auge schwer zu beobachten ist. Siehe [What does the image decoding attribute actually do?](https://www.tunetheweb.com/blog/what-does-the-image-decoding-attribute-actually-do/) für eine detailliertere Analyse (tunetheweb.com, 2023).

    Die Verwendung unterschiedlicher `decoding`-Typen kann zu merklicheren Unterschieden führen, wenn `<img>`-Elemente dynamisch über JavaScript in das DOM eingefügt werden — siehe [`HTMLImageElement.decoding`](/de/docs/Web/API/HTMLImageElement/decoding) für weitere Details.

    Zulässige Werte:
    - `sync`
      - : Dekodiert das Bild synchron zusammen mit dem Rendern der anderen DOM-Inhalte und präsentiert alles zusammen.
    - `async`
      - : Dekodiert das Bild asynchron, nachdem das Rendern und Präsentieren der anderen DOM-Inhalte erfolgt ist.
    - `auto`
      - : Keine Präferenz für die Dekodiermethode; der Browser entscheidet, was am besten für den Benutzer ist. Dies ist der Standardwert.

- [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming)
  - : Markiert das Bild zur Beobachtung durch die [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)-API. Der angegebene Wert wird zu einem Identifikator für das beobachtete Bild-Element. Siehe auch die [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming)-Attributseite.

- [`fetchpriority`](/de/docs/Web/HTML/Reference/Attributes/fetchpriority)
  - : Liefert einen Hinweis auf die relative Priorität, die beim Abrufen des Bildes zu verwenden ist. Zulässige Werte:
    - `high`
      - : Ruft das Bild mit hoher Priorität im Vergleich zu anderen Bildern ab.
    - `low`
      - : Ruft das Bild mit niedriger Priorität im Vergleich zu anderen Bildern ab.
    - `auto`
      - : Keine Präferenz für die Abfragepriorität festlegen.
        Dies ist der Standard.
        Es wird verwendet, wenn kein Wert oder ein ungültiger Wert festgelegt ist.
- `height`
  - : Die intrinsische Höhe des Bildes in Pixeln. Muss eine ganze Zahl ohne Einheit sein.

    > [!NOTE]
    > Die Aufnahme von `height` und [`width`](#width) ermöglicht es dem Browser, das {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Bildes zu berechnen, bevor das Bild geladen wird. Dieses Seitenverhältnis wird verwendet, um den Platzbedarf für die Anzeige des Bildes zu reservieren, wodurch Layoutverschiebungen beim Herunterladen und Anzeigen des Bildes auf dem Bildschirm reduziert oder sogar verhindert werden. Die Reduzierung von Layoutverschiebungen ist ein wesentlicher Bestandteil einer guten Benutzererfahrung und Web-Performance.

- `ismap`
  - : Dieses boolesche Attribut zeigt an, dass das Bild Teil einer [serverseitigen Map](https://en.wikipedia.org/wiki/Image_map#Server-side) ist. Wenn dies der Fall ist, werden die Koordinaten, auf die der Benutzer auf das Bild geklickt hat, an den Server gesendet.

    > [!NOTE]
    > Dieses Attribut ist nur zulässig, wenn das `<img>`-Element ein Nachkomme eines {{htmlelement("a")}}-Elements mit einem gültigen [`href`](/de/docs/Web/HTML/Reference/Elements/a#href)-Attribut ist. Dies gibt Benutzern ohne Zeigegeräte ein Ausweichziel.

- `loading`
  - : Gibt an, wie der Browser das Bild laden soll:
    - `eager`
      - : Lädt das Bild sofort, unabhängig davon, ob sich das Bild derzeit im sichtbaren Ansichtsfenster befindet oder nicht (dies ist der Standardwert).
    - `lazy`
      - : Verzögert das Laden des Bildes, bis es eine berechnete Entfernung vom Ansichtsfenster erreicht, wie es vom Browser definiert wird. Die Absicht ist, das Netzwerk und den Speicherbandbreitenbedarf zu vermeiden, der erforderlich ist, um das Bild zu verarbeiten, bis es mit angemessener Sicherheit wahrscheinlich ist, dass es benötigt wird. Dies verbessert die Leistung des Inhalts in den meisten typischen Anwendungsfällen.

    Während explizite [`width`](#width)- und [`height`](#height)-Attribute für alle Bilder empfohlen werden, um Layoutverschiebungen zu vermeiden, sind sie besonders wichtig für lazy-geladene Bilder. Lazy-geladene Bilder werden nie geladen, wenn sie keinen sichtbaren Teil eines Elements schneiden, auch wenn das Laden sie ändern würde, da nicht geladene Bilder eine Breite und Höhe von `0` haben. Es schafft ein noch störenderes Benutzererlebnis, wenn der im Ansichtsfenster sichtbare Inhalt in der Mitte des Lesens neu formatiert wird.

    Das [`load`](/de/docs/Web/API/Window/load_event)-Ereignis wird ausgelöst, nachdem eager-geladene Bilder abgerufen und verarbeitet wurden, jedoch bevor lazy-geladene Bilder es sind, selbst wenn die lazy-geladenen Bilder bei initialem Seitenladen sofort im sichtbaren Ansichtsfenster sichtbar sind. Diese Bilder werden weiterhin geladen, sobald das Layout abgeschlossen ist; sie beeinflussen nur nicht das Timing des `load`-Ereignisses. Das bedeutet, dass, wenn `load` ausgelöst wird, es möglich ist, dass einige lazy-geladene Bilder im sichtbaren Ansichtsfenster noch nicht sichtbar sind.

    Das Laden wird nur verzögert, wenn JavaScript aktiviert ist. Dies ist eine Anti-Tracking-Maßnahme, da, wenn ein User Agent das Lazy Loading bei deaktiviertem Skripting unterstützen würde, es trotzdem möglich wäre, die ungefähre Scrollposition eines Benutzers während einer Sitzung zu verfolgen, indem strategisch Bilder im Markup einer Seite platziert werden, sodass ein Server verfolgen kann, wie viele Bilder angefordert werden und wann.

- `referrerpolicy`
  - : Ein String, der angibt, welchen Referrer beim Abrufen der Ressource verwendet werden soll:
    - `no-referrer`: Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}}-Header wird nicht an {{Glossary("origin", "Origin")}}s ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`: Der gesendete Referrer wird auf den Origin der verweisenden Seite beschränkt: sein [Scheme](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`: Der Referrer, der an andere Origins gesendet wird, wird auf das Scheme, den Host und den Port beschränkt. Navigationen im selben Origin enthalten weiterhin den Pfad.
    - `same-origin`: Ein Referrer wird für {{Glossary("Same-origin_policy", "Same Origin")}} gesendet, aber bei Cross-Origin-Anforderungen wird keine Referrer-Information enthalten sein.
    - `strict-origin`: Nur den Origin des Dokuments als Referrer senden, wenn die Sicherheitsstufe des Protokolls gleich bleibt (HTTPS→HTTPS), aber nicht an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard): Eine vollständige URL bei einer Same-Origin-Anforderung senden, nur den Origin senden, wenn die Sicherheitsstufe des Protokolls gleich bleibt (HTTPS→HTTPS) und keinen Header an ein weniger sicheres Ziel (HTTPS→HTTP) senden.
    - `unsafe-url`: Der Referrer enthält den Origin _und_ den Pfad (aber nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder [Benutzername](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge weitergibt.

- `sizes`
  - : Eines oder mehrere Werte, getrennt durch Kommata, die Quellengrößen oder das Stichwort `auto` sein können. Die Spezifikation erfordert, dass das `sizes`-Attribut nur vorhanden ist, wenn `srcset` Breitenbeschreibungen verwendet.

    Eine **Quellengröße** besteht aus:
    1. Einer [Medienbedingung](/de/docs/Web/CSS/Guides/Media_queries/Using#syntax), die für das letzte Element in der Liste weggelassen wird.
    2. Einem Quellgrößenwert.

    Medienbedingungen beschreiben Eigenschaften des _Ansichtsfensters_, nicht des _Bildes_. Beispielsweise schlägt `(height <= 500px) 1000px` die Verwendung einer Bildquelle von 1000px Breite vor, wenn die _Ansichtshöhe_ 500px oder weniger beträgt. Da ein Quellgrößenbeschreibung die Breite angibt, die für das Bild während des Layouts verwendet wird, wird die Medienbedingung typischerweise (aber nicht unbedingt) auf der [Breite](/de/docs/Web/CSS/Reference/At-rules/@media/width) basieren.

    Quellgrößenwerte geben die beabsichtigte Anzeigegröße des Bildes an. {{Glossary("User_agent", "User Agents")}} verwenden die aktuelle Quellgröße, um eine der durch das `srcset`-Attribut bereitgestellten Quellen auszuwählen, wenn diese Quellen mit Breitenbezeichnungen (`w`) beschrieben werden. Die ausgewählte Quellgröße beeinflusst die {{Glossary("intrinsic_size", "intrinsische Größe")}} des Bildes (die Anzeigegröße des Bildes, wenn keine {{Glossary("CSS", "CSS")}}-Stilierung angewendet wird).

    Ein Quellgrößenwert kann jede nicht-negative [Länge](/de/docs/Web/CSS/Reference/Values/length) sein. Er darf keine CSS-Funktionen außer den [Mathe-Funktionen](/de/docs/Web/CSS/Reference/Values/Functions#math_functions) verwenden. Einheiten werden in derselben Weise interpretiert wie [Medienabfragen](/de/docs/Web/CSS/Guides/Media_queries), was bedeutet, dass alle relativen Längeneinheiten relativ zur Dokumentwurzel und nicht zum `<img>`-Element sind. Beispielsweise ist ein `em`-Wert relativ zur Schriftgröße der Wurzel, nicht zur Schriftgröße des Bildes. [Prozentualwerte](/de/docs/Web/CSS/Reference/Values/percentage) sind nicht erlaubt. Wenn das `sizes`-Attribut nicht bereitgestellt wird, hat es einen Standardwert von `100vw` (der Ansichtsfensterbreite).

    Das `auto`-Stichwort kann die gesamte Liste der Größen oder den ersten Eintrag der Liste ersetzen. Es ist nur gültig, wenn es mit `loading="lazy"` kombiniert ist und löst sich zur [konkreten Größe](/de/docs/Web/CSS/Reference/Values/image) des Bildes auf. Da die intrinsische Größe des Bildes noch nicht bekannt ist, sollten `width`- und `height`-Attribute (oder CSS-Äquivalente) ebenfalls angegeben werden, um zu verhindern, dass der Browser die Standardbildbreite von 300px annimmt.
    Für bessere Rückwärtskompatibilität mit Browsern, die `auto` nicht unterstützen, können Sie nach `auto` in dem `sizes`-Attribut Fallback-Größen einschließen:

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
  - : Die {{Glossary("URL", "URL")}} des Bildes. Mindestens eines der Attribute `src` und [`srcset`](#srcset) ist für ein `<img>`-Element erforderlich. Wenn [`srcset`](#srcset) angegeben ist, wird `src` auf zwei Weisen verwendet:
    - als Fallback für Browser, die `srcset` nicht unterstützen.
    - wenn `srcset` den "x"-Deskriptor verwendet, dann ist `src` gleichwertig mit einer Quelle mit dem Dichte-Deskriptor `1x`; das heißt, das in `src` angegebene Bild wird auf Bildschirmen mit niedriger Dichte (wie typischen 72 DPI oder 96 DPI-Displays) verwendet.

- `srcset`
  - : Eine oder mehrere durch Kommata getrennte Zeichenfolgen, die mögliche Bildquellen für den {{Glossary("user_agent", "User Agent")}} angeben.

    Jede Zeichenfolge besteht aus:
    1. Einer {{Glossary("URL", "URL")}} zu einem Bild
    2. Optional, Leerraum gefolgt von einem der folgenden:
       - Einem Breiten-Deskriptor (eine positive Ganzzahl, gefolgt von `w`). Er _muss_ mit der intrinsischen Breite des referenzierten Bildes übereinstimmen. Der Breiten-Deskriptor wird durch die Quellgröße im `sizes`-Attribut geteilt, um die effektive Pixeldichte zu berechnen. Beispielsweise, um eine Bildressource bereitzustellen, wenn der Renderer ein 450 Pixel breites Bild benötigt, verwenden Sie den Breiten-Deskriptor `450w`. Wenn ein `srcset` "w"-Deskriptoren enthält, verwendet der Browser diese Deskriptoren zusammen mit dem `sizes`-Attribut, um eine Ressource auszuwählen.
       - Einem Pixeldichte-Deskriptor (eine positive Gleitkommazahl, gefolgt von `x`). Er gibt die Bedingung an, unter der die entsprechende Bildressource als Pixeldichte verwendet werden soll. Beispielsweise, um eine Bildressource bereitzustellen, wenn die Pixeldichte doppelt so hoch wie die Standarddichte ist, verwenden Sie den Pixeldichte-Deskriptor `2x` oder `2.0x`.

    Wenn kein Deskriptor angegeben ist, wird die Quelle dem Standarddeskriptor `1x` zugewiesen. Es ist falsch, Breiten- und Pixeldichte-Deskriptoren in demselben `srcset`-Attribut zu mischen. Duplikate von Deskriptoren (zum Beispiel zwei Quellen im selben `srcset`, die beide mit `2x` beschrieben werden) sind ebenfalls ungültig.

    Leerzeichen, außer dem Leerraum, der die URL und den entsprechenden Bedingungsdeskriptor trennt, werden ignoriert; dies umfasst sowohl anfangs als auch endos stehende Leerzeichen sowie Leerzeichen vor oder nach jedem Komma. Wenn jedoch eine Bildkandidaten-Zeichenfolge keine Deskriptoren enthält und der URL keine Leerzeichen folgen, muss die folgende Bildkandidaten-Zeichenfolge, sofern vorhanden, mit einem oder mehreren Leerzeichen beginnen, oder das Komma wird als Teil der URL angesehen.

    Wenn das `srcset`-Attribut des `<img>`-Elements `x`-Deskriptoren verwendet, betrachten Browser auch die URL im `src`-Attribut (falls vorhanden) als Kandidaten und weisen ihm den Standarddeskriptor `1x` zu. Auf der anderen Seite wird, wenn das `srcset`-Attribut Breitenbeschreibungen verwendet, `src` nicht in Betracht gezogen, und das `sizes`-Attribut wird stattdessen verwendet.

    Der User Agent wählt aus den verfügbaren Quellen nach eigenem Ermessen. Dies bietet ihnen erheblichen Spielraum, ihre Auswahl basierend auf Benutzerpräferenzen oder {{Glossary("bandwidth", "Bandbreiten")}}-Bedingungen anzupassen. Siehe unser [Leitfaden zu responsiven Bildern](/de/docs/Web/HTML/Guides/Responsive_images) für ein Beispiel.

- `width`
  - : Die intrinsische Breite des Bildes in Pixeln. Muss eine ganze Zahl ohne Einheit sein.
- `usemap`
  - : Die partielle {{Glossary("URL", "URL")}} (beginnend mit `#`) einer [Bild-Map](/de/docs/Web/HTML/Reference/Elements/map), die mit dem Element verbunden ist.

    > [!NOTE]
    > Sie können dieses Attribut nicht verwenden, wenn sich das `<img>`-Element innerhalb eines {{htmlelement("a")}}- oder {{HTMLElement("button")}}-Elements befindet.

### Veraltete Attribute

- `align` {{deprecated_inline}}
  - : Richtet das Bild an seinem umgebenden Kontext aus. Verwenden Sie die {{cssxref('float')}}- und/oder {{cssxref('vertical-align')}}-{{Glossary("CSS", "CSS")}}-Eigenschaften statt dieses Attributs. Zulässige Werte:
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
  - : Die Breite eines Rahmens um das Bild herum. Verwenden Sie die {{cssxref('border')}}-{{Glossary("CSS", "CSS")}}-Eigenschaft statt.
- `hspace` {{deprecated_inline}}
  - : Die Anzahl der Pixel Weißraum links und rechts vom Bild. Verwenden Sie die {{cssxref('margin')}}-CSS-Eigenschaft statt.
- `longdesc` {{deprecated_inline}}
  - : Ein Link zu einer detaillierteren Beschreibung des Bildes. Mögliche Werte sind eine {{Glossary("URL", "URL")}} oder ein Element-[`id`](/de/docs/Web/HTML/Reference/Global_attributes/id).

    > [!NOTE]
    > Dieses Attribut wird als veraltet im [HTML-Standard](https://html.spec.whatwg.org/multipage/obsolete.html#element-attrdef-img-longdesc) betrachtet. Es hat eine ungewisse Zukunft; Autoren sollten eine {{Glossary("WAI", "WAI")}}-{{Glossary("ARIA", "ARIA")}}-Alternative wie [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) oder [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) verwenden.

- `name` {{deprecated_inline}}
  - : Ein Name für das Element. Verwenden Sie das [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut statt.
- `vspace` {{deprecated_inline}}
  - : Die Anzahl der Pixel Weißraum oberhalb und unterhalb des Bildes. Verwenden Sie die {{cssxref('margin')}}-CSS-Eigenschaft statt.

## Styling mit CSS

`<img>` ist ein {{Glossary("replaced_elements", "ersetztes Element")}}; es hat einen {{cssxref("display")}}-Wert von `inline` standardmäßig, aber seine Standarddimensionen werden von den intrinsischen Werten des eingebetteten Bildes definiert, als wäre es `inline-block`. Sie können Eigenschaften wie {{cssxref("border")}}/{{cssxref("border-radius")}}, {{cssxref("padding")}}/{{cssxref("margin")}}, {{cssxref("width")}}, {{cssxref("height")}}, etc. auf ein Bild setzen.

`<img>` hat keine Grundlinie, sodass bei Verwendung in einem Inline-Formatierungskontext mit {{cssxref("vertical-align", "vertical-align: baseline")}} der Boden des Bildes auf die Textbasislinie gelegt wird.

Sie können die {{cssxref("object-position")}}-Eigenschaft verwenden, um das Bild innerhalb des Box des Elements zu positionieren, und die {{cssxref("object-fit")}}-Eigenschaft, um die Größenanpassung des Bildes innerhalb der Box anzupassen (zum Beispiel, ob das Bild in die Box passen oder sie ausfüllen soll, selbst wenn Clippen erforderlich ist).

Je nach Typ kann ein Bild eine intrinsische Breite und Höhe haben. Für einige Bildtypen sind jedoch keine intrinsischen Dimensionen erforderlich. {{Glossary("SVG", "SVG")}}-Bilder haben beispielsweise keine intrinsischen Maße, wenn ihr Wurzel-{{SVGElement("svg")}}-Element keine `width`- oder `height`-Eigenschaft gesetzt hat.

## Zugänglichkeit

### Bedeutungsvollere alternative Beschreibungen schreiben

Der Wert eines `alt`-Attributs sollte einen klaren und präzisen Textersatz für den Inhalt des Bildes bieten. Er sollte nicht das Vorhandensein des Bildes oder den Dateinamen des Bildes beschreiben. Wenn das `alt`-Attribut absichtlich weggelassen wird, weil das Bild kein textliches Äquivalent hat, sollten Sie alternative Methoden in Betracht ziehen, um darzustellen, was das Bild vermitteln soll.

#### Don't

```html example-bad
<img alt="image" src="penguin.jpg" />
```

#### Do

```html example-good
<img alt="A Penguin on a beach." src="penguin.jpg" />
```

Ein wichtiger Zugänglichkeitstest besteht darin, den Inhalt des `alt`-Attributs zusammen mit dem vorhergehenden Textinhalt zu lesen, um zu sehen, ob er dieselbe Bedeutung wie das Bild vermittelt. Wenn das Bild beispielsweise durch den Satz "Auf meinen Reisen sah ich ein süßes kleines Tier:" vorangestellt wurde, könnte das _Don't_-Beispiel von einem Bildschirmleser als "Auf meinen Reisen sah ich ein süßes kleines Tier: Bild" gelesen werden, was keinen Sinn ergibt. Das _Do_-Beispiel könnte von einem Bildschirmleser als "Auf meinen Reisen sah ich ein süßes kleines Tier: Ein Pinguin am Strand." gelesen werden, was Sinn ergibt.

Für Bilder, die eine Aktion auslösen sollen, zum Beispiel Bilder, die in einem {{htmlelement("a")}}- oder {{htmlelement("button")}}-Element verschachtelt sind, sollten Sie in Betracht ziehen, die ausgelöste Aktion im Wert des `alt`-Attributs zu beschreiben. Sie könnten beispielsweise `alt="next page"` statt `alt="arrow right"` schreiben. Sie könnten auch erwägen, eine optionale weitere Beschreibung in einem `title`-Attribut hinzuzufügen; diese kann von Bildschirmlesern gelesen werden, wenn der Benutzer dies wünscht.

Wenn ein `alt`-Attribut bei einem Bild fehlt, können einige Bildschirmleser den Dateinamen des Bildes stattdessen ausgeben. Dies kann verwirrend sein, wenn der Dateiname nicht repräsentativ für den Bildinhalt ist.

- [An alt Decision Tree • Images • WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/images/decision-tree/)
- [Alt-texts: The Ultimate Guide — Axess Lab](https://axesslab.com/alt-texts/)
- [How to Design Great Alt Text: An Introduction | Deque](https://www.deque.com/blog/great-alt-text-introduction/)
- [MDN Understanding WCAG, Guideline 1.1 explanations](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Understanding Success Criterion 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

### Identifizierung von SVGs als Bild

Aufgrund eines [VoiceOver-Bugs](https://webkit.org/b/216364) gibt VoiceOver SVG-Bilder nicht korrekt als Bilder aus. Fügen Sie [`role="img"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/img_role) zu allen `<img>`-Elementen mit SVG-Quellen-Dateien hinzu, damit unterstützende Technologien das SVG als Bildinhalt korrekt ansagen.

```html
<img src="mdn.svg" alt="MDN" role="img" />
```

### Das title-Attribut

Das [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)-Attribut ist kein akzeptabler Ersatz für das `alt`-Attribut. Vermeiden Sie außerdem, den Wert des `alt`-Attributs im `title`-Attribut auf demselben Bild zu duplizieren. Dies könnte dazu führen, dass einige Bildschirmleser denselben Text zweimal ankündigen, was eine verwirrende Erfahrung schafft.

Das `title`-Attribut sollte auch nicht als ergänzende Beschriftungsinformation zur Begleitung einer `alt`-Beschreibung eines Bildes verwendet werden. Wenn ein Bild eine Beschriftung benötigt, verwenden Sie die [`figure`](/de/docs/Web/HTML/Reference/Elements/figure)- und [`figcaption`](/de/docs/Web/HTML/Reference/Elements/figcaption)-Elemente.

Der Wert des `title`-Attributs wird dem Benutzer normalerweise als Tooltip präsentiert, der kurz nach dem Anhalten des Cursors über dem Bild angezeigt wird. Während dies dem Benutzer _zusätzliche Informationen_ geben kann, sollten Sie nicht davon ausgehen, dass der Benutzer es jemals sehen wird: der Benutzer könnte nur über Tastatur oder Touchscreen verfügen. Wenn Sie Informationen haben, die besonders wichtig oder wertvoll für den Benutzer sind, präsentieren Sie sie inline mit einer der oben genannten Methoden statt unter Verwendung von `title`.

- [Using the HTML title attribute – updated | The Paciello Group](https://www.tpgi.com/using-the-html-title-attribute-updated/)

## Beispiele

### Alternativer Text

Das folgende Beispiel bettet ein Bild in die Seite ein und enthält alternativen Text für Barrierefreiheit.

```html
<img src="/shared-assets/images/examples/favicon144.png" alt="MDN" />
```

{{ EmbedLiveSample('Alternative_text', '100%', '160') }}

### Bildlink

Dieses Beispiel baut auf dem vorherigen auf und zeigt, wie Sie das Bild in einen Link verwandeln können. Dazu verschachteln Sie das `<img>`-Tag in das {{HTMLElement("a")}}. Sie sollten den alternativen Text so gestalten, dass er die Ressource beschreibt, auf die der Link verweist, als ob Sie stattdessen einen Textlink verwenden würden.

```html
<a href="https://developer.mozilla.org">
  <img
    src="/shared-assets/images/examples/favicon144.png"
    alt="Visit the MDN site" />
</a>
```

{{ EmbedLiveSample('Image_link', '100%', '160') }}

### Verwendung des srcset-Attributs

In diesem Beispiel fügen wir ein `srcset`-Attribut mit einem Verweis auf eine hochauflösende Version des Logos ein; dieses wird anstelle des `src`-Bildes auf hochauflösenden Geräten geladen. Das im `src`-Attribut angegebene Bild wird als `1x`-Kandidat in {{Glossary("User_agent", "User Agents")}} gezählt, die `srcset` unterstützen.

```html
<img
  src="/shared-assets/images/examples/favicon72.png"
  alt="MDN"
  srcset="/shared-assets/images/examples/favicon144.png 2x" />
```

{{EmbedLiveSample("Using_the_srcset_attribute", "100%", "160")}}

### Verwendung der srcset- und sizes-Attribute

Das `src`-Attribut wird in {{Glossary("User_agent", "User Agents")}}, die `srcset`-Unterstützung haben, ignoriert, wenn `w`-Deskriptoren enthalten sind. Wenn die `(width <= 600px)`-Medienbedingung zutrifft, wird das 200 Pixel breite Bild geladen (es ist dasjenige, das `200px` am nächsten kommt), andernfalls wird das andere Bild geladen.

```html
<img
  src="clock-demo-200px.png"
  alt="The time is 12:45."
  srcset="clock-demo-200px.png 200w, clock-demo-400px.png 400w"
  sizes="(width <= 600px) 200px, 50vw" />
```

{{EmbedLiveSample("Using_the_srcset_and_sizes_attributes", "100%", 350)}}

> [!NOTE]
> Um die Größenänderung in Aktion zu sehen, {{LiveSampleLink('Using_the_srcset_and_sizes_attributes', 'beobachten Sie das Beispiel auf einer separaten Seite')}}, damit Sie den Inhaltsbereich tatsächlich ändern können.

## Sicherheits- und Datenschutzbedenken

Obwohl `<img>`-Elemente unschuldige Verwendungen haben, können sie unerwünschte Konsequenzen für die Sicherheit und den Datenschutz des Benutzers haben. Siehe [Referer header: Datenschutz- und Sicherheitsbedenken](/de/docs/Web/Privacy/Guides/Referer_header:_privacy_and_security_concerns) für weitere Informationen und Gegenmaßnahmen.

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
          >Flow-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#embedded_content"
          >Eingebetteter Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#palpable_content"
          >Fühlbarer Inhalt</a
        >. Wenn das Element ein <code>usemap</code>-Attribut hat, gehört es auch zur Kategorie der interaktiven Inhalte.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "leeres Element")}}.</td>
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

- {{HTMLElement("picture")}}, {{HTMLElement("object")}}, und {{HTMLElement("embed")}}-Elemente
- {{cssxref("object-fit")}}, {{cssxref("object-position")}}, {{cssxref("image-orientation")}}, {{cssxref("image-rendering")}}, und {{cssxref("image-resolution")}}: Bildbezogene CSS-Eigenschaften.
- [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Schnittstelle für dieses Element
- [HTML-Bilder](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images)
- [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types)
- [Responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images)
