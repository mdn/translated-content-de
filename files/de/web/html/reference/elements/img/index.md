---
title: "<img>: Das Bild-Einbettungselement"
slug: Web/HTML/Reference/Elements/img
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
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

- Das `src` Attribut enthält den Pfad zu dem Bild, das Sie einbetten möchten. Es ist nicht zwingend erforderlich, wenn das [srcset](/de/docs/Web/API/HTMLImageElement/srcset) Attribut verfügbar ist. Es muss jedoch mindestens eines der Attribute `src` oder `srcset` angegeben werden.
- Das `alt` Attribut enthält eine textuelle Ersatzbeschreibung für das Bild, die obligatorisch und **äußerst nützlich** für die Barrierefreiheit ist — Bildschirmleser lesen den Attributwert vor, damit Nutzer wissen, was das Bild bedeutet. Alternativtext wird auch auf der Seite angezeigt, wenn das Bild aus irgendeinem Grund nicht geladen werden kann: zum Beispiel bei Netzwerkfehlern, Inhaltsblockierung oder Link-Verfall.

Es gibt viele andere Attribute, um verschiedene Zwecke zu erfüllen:

- [Referrer](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy)/{{Glossary("CORS", "CORS")}}-Kontrolle für Sicherheit und Datenschutz: siehe [`crossorigin`](#crossorigin) und [`referrerpolicy`](#referrerpolicy).
- Verwenden Sie sowohl [`width`](#width) als auch [`height`](#height), um die intrinsische Größe des Bildes festzulegen, sodass es vor dem Laden Platz beansprucht, um Layoutverschiebungen zu minimieren.
- Responsive Bildhinweise mit [`sizes`](#sizes) und [`srcset`](#srcset) (siehe auch das {{htmlelement("picture")}} Element und unser [Responsive Images](/de/docs/Web/HTML/Guides/Responsive_images) Tutorial).

## Unterstützte Bildformate

Der HTML-Standard gibt nicht an, welche Bildformate unterstützt werden sollen, sodass {{Glossary("user_agent", "User Agents")}} unterschiedliche Formate unterstützen können.

> [!NOTE]
> Der [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types) bietet umfassende Informationen über Bildformate und deren Unterstützung durch Webbrowser. Dieser Abschnitt ist nur eine Zusammenfassung!

Die Bilddateiformate, die am häufigsten im Web verwendet werden, sind:

- [APNG (Animated Portable Network Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#apng_animated_portable_network_graphics) — Gute Wahl für verlustfreie Animationssequenzen (GIF ist weniger performant)
- [AVIF (AV1 Image File Format)](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) — Gute Wahl für sowohl Bilder als auch animierte Bilder aufgrund der hohen Leistung.
- [GIF (Graphics Interchange Format)](/de/docs/Web/Media/Guides/Formats/Image_types#gif_graphics_interchange_format) — Gute Wahl für _einfache_ Bilder und Animationen.
- [JPEG (Joint Photographic Expert Group image)](/de/docs/Web/Media/Guides/Formats/Image_types#jpeg_joint_photographic_experts_group_image) — Gute Wahl für verlustbehaftete Kompression standbilder (derzeit das beliebteste Format).
- [PNG (Portable Network Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#png_portable_network_graphics) — Gute Wahl für verlustfreie Kompression von Standbildern (leicht bessere Qualität als JPEG).
- [SVG (Scalable Vector Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#svg_scalable_vector_graphics) — Vektorbildformat. Verwenden Sie es für Bilder, die in unterschiedlichen Größen genau gezeichnet werden müssen.
- [WebP (Web Picture format)](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) — Hervorragende Wahl für sowohl Bilder als auch animierte Bilder.

Formate wie [WebP](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) und [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) werden empfohlen, da sie bei Stand- und animierten Bildern viel besser abschneiden als PNG, JPEG, GIF.

SVG bleibt das empfohlene Format für Bilder, die in unterschiedlichen Größen genau gezeichnet werden müssen.

## Bild Ladefehler

Wenn ein Fehler beim Laden oder Rendern eines Bildes auftritt und ein `onerror`-Ereignishandler für das [`error`](/de/docs/Web/API/HTMLElement/error_event)-Ereignis festgelegt wurde, wird dieser Ereignishandler aufgerufen. Dies kann in mehreren Situationen passieren, einschließlich:

- Die `src` oder `srcset` Attribute sind leer (`""`) oder `null`.
- Die `src` {{Glossary("URL", "URL")}} ist die gleiche wie die URL der Seite, die der Benutzer momentan angezeigt bekommt.
- Das Bild ist in einer Weise beschädigt, die es unmöglich macht, es zu laden.
- Die Metadaten des Bildes sind so beschädigt, dass es unmöglich ist, seine Abmessungen zu erhalten, und es wurden in den Attributen des `<img>` Elements keine Dimensionen angegeben.
- Das Bild ist in einem vom {{Glossary("user_agent", "user agent")}} nicht unterstützten Format.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- [`alt`](/de/docs/Web/API/HTMLImageElement/alt#usage_notes)
  - : Definiert Text, der das Bild auf der Seite ersetzen kann.

    > [!NOTE]
    > Browser zeigen nicht immer Bilder an. Es gibt eine Anzahl von Situationen, in denen ein Browser Bilder möglicherweise nicht anzeigt, wie zum Beispiel:
    >
    > - Nicht-visuelle Browser (wie diejenigen, die von Personen mit Sehbehinderungen verwendet werden)
    > - Der Benutzer entscheidet sich, keine Bilder anzuzeigen (um Bandbreite zu sparen, aus Datenschutzgründen)
    > - Das Bild ist ungültig oder ein [nicht unterstützter Typ](#unterstützte_bildformate)
    >
    > In diesen Fällen kann der Browser das Bild durch den Text im `alt` Attribut des Elements ersetzen. Aus diesen und anderen Gründen sollten Sie wann immer möglich einen nützlichen Wert für `alt` angeben.

    Die Einstellung dieses Attributs auf einen leeren String (`alt=""`) zeigt an, dass dieses Bild _kein_ Schlüsselteil des Inhalts ist (es handelt sich um Dekoration oder ein Tracking-Pixel), und dass nicht-visuelle Browser es beim {{Glossary("Engine/Rendering", "Rendern")}} auslassen können. Visuelle Browser werden das kaputte Bilder-Symbol ebenfalls ausblenden, wenn das `alt` Attribut leer ist und das Bild nicht angezeigt werden konnte.

    Dieses Attribut wird auch verwendet, wenn das Bild in Text kopiert und eingefügt oder ein verlinktes Bild als Lesezeichen gespeichert wird.

- `attributionsrc` {{experimental_inline}}
  - : Gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}} Header zusammen mit der Bildanfrage sendet.

    Serverseitig wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}} oder {{httpheader("Attribution-Reporting-Register-Trigger")}} Headers in der Antwort auszulösen, um eine bildbasierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#html-based_event_sources) oder einen [Attribution Trigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#html-based_attribution_triggers) zu registrieren. Welcher Antwortheader zurückgesendet werden soll, hängt vom Wert des `Attribution-Reporting-Eligible` Headers ab, der die Registrierung ausgelöst hat.

    Das entsprechende Quellen- oder Triggerereignis wird ausgelöst, sobald der Browser die Antwort mit der Bilddatei erhält.

    > [!NOTE]
    > Siehe die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) für weitere Details.

    Es gibt zwei Versionen dieses Attributs, die Sie festlegen können:
    - Boolean, d.h. nur der Name `attributionsrc`. Dies gibt an, dass Sie möchten, dass der {{httpheader("Attribution-Reporting-Eligible")}} Header an denselben Server gesendet wird, zu dem das `src` Attribut zeigt. Dies ist in Ordnung, wenn Sie die Registrierung der Attributionsquelle oder des Triggers auf demselben Server verwalten. Beim Registrieren eines Attribution Triggers ist diese Eigenschaft optional, und wenn sie weggelassen wird, wird ein boolescher Wert verwendet.
    - Wert, der eine oder mehrere URLs enthält, zum Beispiel:

    ```html
    <img
      src="image-file.png"
      alt="My image file description"
      attributionsrc="https://a.example/register-source
                         https://b.example/register-source" />
    ```

    Dies ist nützlich in Fällen, in denen die angeforderte Ressource nicht auf einem von Ihnen kontrollierten Server vorliegt oder Sie die Registrierung der Attributionsquelle auf einem anderen Server verwalten möchten. In diesem Fall können Sie eine oder mehrere URLs als den Wert von `attributionsrc` angeben. Wenn die Ressourcenanforderung erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}} Header an die in `attributionSrc` angegebenen URL(s) zusätzlich zum Ursprung der Ressource gesendet. Diese URLs können dann mit einem {{httpheader("Attribution-Reporting-Register-Source")}} oder {{httpheader("Attribution-Reporting-Register-Trigger")}} Header wie gewünscht antworten, um die Registrierung abzuschließen.

    > [!NOTE]
    > Die Angabe mehrerer URLs bedeutet, dass mehrere Attributionsquellen für dasselbe Merkmal registriert werden können. Sie könnten zum Beispiel verschiedene Kampagnen haben, deren Erfolg Sie messen möchten, was die Erstellung unterschiedlicher Berichte über unterschiedliche Daten erfordert.

- [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)
  - : Gibt an, ob das Abrufen des Bildes unter Verwendung einer {{Glossary("CORS", "CORS")}}-Anfrage durchgeführt werden muss. Bilddaten aus einem [CORS-fähigen Bild](/de/docs/Web/HTML/How_to/CORS_enabled_image), das als Ergebnis einer CORS-Anfrage zurückgegeben wird, können im {{HTMLElement("canvas")}} Element wiederverwendet werden, ohne als "[verunreinigt](/de/docs/Web/HTML/How_to/CORS_enabled_image#security_and_tainted_canvases)" markiert zu werden.

    Wenn das `crossorigin` Attribut _nicht_ angegeben ist, dann wird eine Nicht-CORS-Anfrage gesendet (ohne den {{httpheader("Origin")}} Anforderungsheader), und der Browser markiert das Bild als verunreinigt und beschränkt den Zugriff auf seine Bilddaten, was seine Verwendung in {{HTMLElement("canvas")}} Elementen verhindert.

    Wenn das `crossorigin` Attribut angegeben ist, wird eine CORS-Anfrage gesendet (mit dem {{httpheader("Origin")}} Anforderungsheader); aber wenn der Server nicht der herkunftsübergreifenden Zugriff auf die Bilddaten durch die Ursprungsseite zustimmt (indem er keinen {{httpheader("Access-Control-Allow-Origin")}} Antwortheader sendet oder die Ursprungsseite nicht in einen gesendeten {{httpheader("Access-Control-Allow-Origin")}} Antwortheader einbezieht), blockiert der Browser das Bild daran, geladen zu werden, und protokolliert einen CORS-Fehler in der Entwicklerwerkzeug-Konsole.

    Zulässige Werte:
    - `anonymous`
      - : Eine CORS-Anfrage wird ohne Anmeldeinformationen gesendet (d.h. keine {{Glossary("cookie", "Cookies")}}, [X.509-Zertifikate](https://datatracker.ietf.org/doc/html/rfc5280) oder {{httpheader("Authorization")}} Anforderungsheader).
    - `use-credentials`
      - : Die CORS-Anfrage wird mit allen Anmeldeinformationen gesendet (d.h. Cookies, X.509-Zertifikate und der `Authorization` Anforderungsheader). Wenn der Server nicht der geteilten Verwendung von Anmeldeinformationen mit der Ursprungsseite zustimmt (durch das Senden des `Access-Control-Allow-Credentials: true` Antwortheaders), markiert der Browser das Bild als verunreinigt und schränkt den Zugriff auf seine Bilddaten ein.

    Wenn das Attribut einen ungültigen Wert hat, behandeln Browser es so, als ob der Wert `anonymous` verwendet wurde. Siehe [CORS-Einstellungsattribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin) für weitere Informationen.

- `decoding`
  - : Dieses Attribut gibt dem Browser einen Hinweis, ob es das Bilddekodieren zusammen mit dem Rendern der anderen DOM-Inhalte in einem einzigen Darstellungsprozess durchführen soll, der "korrekter" aussieht (`sync`), oder zuerst die anderen DOM-Inhalte rendern und darstellen soll und dann das Bild dekodieren und später darstellen soll (`async`). In der Praxis bedeutet `async`, dass der nächste Paint nicht auf die Bilddekodierung wartet.

    Es ist oft schwierig, einen merkbaren Effekt bei der Verwendung von `decoding` auf statischen `<img>` Elementen wahrzunehmen. Diese werden wahrscheinlich zunächst als leere Bilder gerendert, während die Bilddateien abgerufen (entweder aus dem Netzwerk oder aus dem Cache) und dann unabhängig verarbeitet werden, sodass das "Synchronisieren" von Inhaltsaktualisierungen weniger offensichtlich ist. Das Blockieren des Renderns während der Dekodierung, obwohl oft sehr klein, _kann_ gemessen werden — auch wenn es mit dem menschlichen Auge schwierig zu beobachten ist. Siehe [Was macht das Bilddekodierungsattribut eigentlich?](https://www.tunetheweb.com/blog/what-does-the-image-decoding-attribute-actually-do/) für eine detailliertere Analyse (tunetheweb.com, 2023).

    Die Verwendung unterschiedlicher `decoding`-Typen kann zu merkbareren Unterschieden führen, wenn `<img>`-Elemente dynamisch über JavaScript in den DOM eingefügt werden — siehe [`HTMLImageElement.decoding`](/de/docs/Web/API/HTMLImageElement/decoding) für weitere Informationen.

    Zulässige Werte:
    - `sync`
      - : Dekodiere das Bild synchron zusammen mit dem Rendern der anderen DOM-Inhalte und stelle alles zusammen dar.
    - `async`
      - : Dekodiere das Bild asynchron, nach dem Rendern und Präsentieren der anderen DOM-Inhalte.
    - `auto`
      - : Keine Präferenz für den Dekodierungsmodus; der Browser entscheidet, was für den Benutzer am besten ist. Dies ist der Standardwert.

- [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming)
  - : Markiert das Bild zur Beobachtung durch die [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming) API. Der angegebene Wert wird zu einem Bezeichner für das beobachtete Bild. Siehe auch die [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming) Attributseite.

- `fetchpriority`
  - : Gibt einen Hinweis auf die relative Priorität beim Abrufen des Bildes.
    Zulässige Werte:
    - `high`
      - : Rufen Sie das Bild mit einer hohen Priorität im Vergleich zu anderen Bildern ab.
    - `low`
      - : Rufen Sie das Bild mit einer niedrigen Priorität im Vergleich zu anderen Bildern ab.
    - `auto`
      - : Keine Präferenz für die Abrufpriorität angeben. Dies ist der Standard. Es wird verwendet, wenn kein Wert oder ein ungültiger Wert festgelegt ist.

    Siehe [`HTMLImageElement.fetchPriority`](/de/docs/Web/API/HTMLImageElement/fetchPriority) für weitere Informationen.

- `height`
  - : Die intrinsische Höhe des Bildes in Pixeln. Muss eine ganze Zahl ohne Einheit sein.

    > [!NOTE]
    > Die Angabe von `height` und [`width`](#width) ermöglicht es dem Browser, das {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Bildes zu berechnen, bevor das Bild geladen wird. Dieses Seitenverhältnis wird verwendet, um den benötigten Platz zur Anzeige des Bildes zu reservieren, wodurch eine Layoutverschiebung reduziert oder sogar verhindert wird, wenn das Bild heruntergeladen und auf dem Bildschirm angezeigt wird. Eine Verringerung der Layoutverschiebung ist ein wichtiger Bestandteil einer guten Benutzererfahrung und Web-Performance.

- `ismap`
  - : Dieses Boolesche Attribut zeigt an, dass das Bild Teil einer [serverseitigen Karte](https://en.wikipedia.org/wiki/Image_map#Server-side) ist. In diesem Fall werden die Koordinaten, auf die der Benutzer auf dem Bild geklickt hat, an den Server gesendet.

    > [!NOTE]
    > Dieses Attribut ist nur erlaubt, wenn das `<img>` Element ein Nachkomme eines {{htmlelement("a")}} Elements mit einem gültigen [`href`](/de/docs/Web/HTML/Reference/Elements/a#href) Attribut ist. Dies bietet Benutzern ohne Zeigergeräte eine alternative Möglichkeit.

- `loading`
  - : Gibt an, wie der Browser das Bild laden soll:
    - `eager`
      - : Lädt das Bild sofort, unabhängig davon, ob das Bild derzeit im sichtbaren Ansichtsfenster liegt oder nicht (dies ist der Standardwert).
    - `lazy`
      - : Verzögert das Laden des Bildes, bis es eine berechnete Entfernung vom Ansichtsfenster erreicht hat, wie vom Browser definiert. Ziel ist es, die benötigte Netzwerk- und Speicherbandbreite zu vermeiden, bis relativ sicher ist, dass das Bild benötigt wird. Dies verbessert in den meisten typischen Anwendungsfällen die Leistung des Inhalts.

    > [!NOTE]
    > Laden wird nur verzögert, wenn JavaScript aktiviert ist. Dies ist eine Anti-Tracking-Maßnahme, da wenn ein User Agent Lazy Loading unterstützt, wenn das Skripting deaktiviert ist, es immer noch möglich wäre, die ungefähre Scrollposition eines Benutzers während einer Sitzung zu verfolgen, indem Bilder strategisch im Markup einer Seite platziert werden, sodass ein Server verfolgen kann, wie viele Bilder angefordert werden und wann.

    > [!NOTE]
    > Bilder mit dem `loading` Attribut auf `lazy` werden niemals geladen, wenn sie keinen sichtbaren Teil eines Elements schneiden, selbst wenn das Laden dieser Teile das ändern würde, da nicht geladenen Bildern eine `width` und `height` von `0` zugewiesen werden. Die Angabe von `width` und `height` bei Lazy Loaded Images behebt dieses Problem und ist eine empfohlene Best Practice, [die von der Spezifikation empfohlen wird](https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element). Dies hilft auch, Layoutverschiebungen zu verhindern.

- `referrerpolicy`
  - : Eine Zeichenkette, die angibt, welchen Referrer beim Abrufen der Ressource verwendet werden soll:
    - `no-referrer`: Der {{HTTPHeader("Referer")}} Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}} Header wird nicht an {{Glossary("origin", "Origin")}}s ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`: Der gesendete Referrer wird auf die Herkunft der verweisenden Seite beschränkt: ihr [Schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`: Der an andere Origins gesendete Referrer wird auf das Schema, den Host und den Port beschränkt. Navigationen auf derselben Origin enthalten weiterhin den Pfad.
    - `same-origin`: Ein Referrer wird für {{Glossary("Same-origin_policy", "dieselbe Origin")}} gesendet, aber Cross-Origin-Anfragen enthalten keine Referrer-Informationen.
    - `strict-origin`: Sendet nur die Herkunft des Dokuments als Referrer, wenn sich das Sicherheitsniveau des Protokolls nicht ändert (HTTPS→HTTPS), wird jedoch nicht an einen weniger sicheren Ort gesendet (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard): Sendet die vollständige URL bei einer same-origin Anfrage, sendet nur die Herkunft, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), und sendet keinen Header an eine weniger sichere Ziel (HTTPS→HTTP).
    - `unsafe-url`: Der Referrer enthält die Herkunft _und_ den Pfad (aber nicht den [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder [Benutzername](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, weil er Ursprünge und Pfade von TLS-geschützten Ressourcen zu unsicheren Origins bringt.

- `sizes`
  - : Ein oder mehrere Werte, getrennt durch Kommata, die Quellengrößen oder das `auto` Schlüsselwort sein können.

    Eine **Quellengröße** besteht aus:
    1. Einer [Medienbedingung](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#syntax), die für den letzten Eintrag in der Liste weggelassen wird.
    2. Einem Quellengrößenwert.

    Medienbedingungen beschreiben Eigenschaften des _Ansichtsfensters_, nicht des _Bildes_. Zum Beispiel schlägt `(height <= 500px) 1000px` vor, eine Bildquelle mit 1000px Breite zu verwenden, wenn die _Ansichtshöhe_ 500px oder weniger beträgt. Da eine Quellgrößenbeschreibung die Breite angibt, die für das Bild während des Layouts verwendet werden soll, basiert die Medienbedingung typischerweise (aber nicht notwendigerweise) auf der [Breite](/de/docs/Web/CSS/@media/width).

    Quellengrößenwerte geben die beabsichtigte Darstellungsgröße des Bildes an. {{Glossary("User_agent", "User agents")}} verwenden die aktuelle Quellengröße, um eine der vom `srcset` Attribut bereitgestellten Quellen auszuwählen, wenn diese Quellen mit Breiten (`w`) Deskriptoren beschrieben sind. Die ausgewählte Quellgröße wirkt sich auf die {{Glossary("intrinsic_size", "intrinsische Größe")}} des Bildes aus (die Anzeigengröße des Bildes ohne {{Glossary("CSS", "CSS")}} Styling). Wenn das `srcset` Attribut fehlt oder keine Werte mit einem Breiten-Deskriptor enthält, hat das `sizes` Attribut keine Wirkung.

    Ein Quellgrößenwert kann jede nicht-negative [Länge](/de/docs/Web/CSS/length) sein. Er darf keine CSS-Funktionen außer den [Mathematik-Funktionen](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions#math_functions) verwenden. Einheiten werden auf die gleiche Weise wie [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries) interpretiert, was bedeutet, dass sich alle relativen Längeneinheiten auf den Dokumentstamm anstelle des `<img>` Elements beziehen. Zum Beispiel ist ein `em` Wert relativ zur Root-Schriftgröße, nicht zur Schriftgröße des Bildes. [Prozentwerte](/de/docs/Web/CSS/percentage) sind nicht erlaubt.

    Das `auto` Schlüsselwort kann die gesamte Liste der Größen oder den ersten Eintrag in der Liste ersetzen. Es ist nur gültig, wenn es mit `loading="lazy"` kombiniert wird und wird auf die [konkrete Größe](/de/docs/Web/CSS/image) des Bildes aufgelöst. Da die intrinsische Größe des Bildes noch nicht bekannt ist, sollten auch `width` und `height` Attribute (oder deren CSS-Äquivalente) spezifiziert werden, um zu verhindern, dass der Browser die Standardbildbreite von 300px annimmt.
    Für eine bessere Abwärtskompatibilität mit Browsern, die `auto` nicht unterstützen, können Sie fallback-Größen nach `auto` im `sizes` Attribut einschließen:

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
  - : Die Bild-{{Glossary("URL", "URL")}}. Erforderlich für das `<img>` Element. In {{Glossary("Browser", "Browsern")}}, die `srcset` unterstützen, wird `src` als Kandidatenbild mit einem Pixeldichte-Deskriptor `1x` behandelt, es sei denn, ein Bild mit diesem Pixeldichte-Deskriptor ist bereits in `srcset` definiert, oder es sei denn, `srcset` enthält `w` Deskriptoren.
- `srcset`
  - : Eine oder mehrere durch Kommas getrennte Zeichenfolgen, die mögliche Bildquellen für den {{Glossary("user_agent", "User agent")}} angeben, aus denen dieser auswählen kann. Jede Zeichenfolge besteht aus:
    1. Einer {{Glossary("URL", "URL")}} zu einem Bild
    2. Optionalen Leerzeichen gefolgt von einem der folgenden:
       - Einem Breiten-Deskriptor (eine positive Ganzzahl direkt gefolgt von `w`), der durch die Quellgröße, die im `sizes` Attribut angegeben ist, dividiert wird, um die effektive Pixeldichte zu berechnen.
       - Einem Pixeldichte-Deskriptor (eine positive Fließkommazahl direkt gefolgt von `x`).

    Wenn kein Deskriptor angegeben ist, wird die Quelle dem Standarddeskriptor `1x` zugewiesen.

    Es ist nicht korrekt, Breiten-Deskriptoren und Pixeldichte-Deskriptoren im selben `srcset` Attribut zu mischen. Doppelte Deskriptoren (zum Beispiel zwei Quellen im selben `srcset`, die beide mit `2x` beschrieben sind) sind ebenfalls ungültig.

    Wenn das `srcset` Attribut Breiten-Deskriptoren verwendet, muss das `sizes` Attribut ebenfalls vorhanden sein, sonst wird das `srcset` selbst ignoriert.

    Der User Agent kann nach eigenem Ermessen eine der verfügbaren Quellen auswählen. Dies gibt ihnen erheblichen Spielraum, ihre Auswahl basierend auf Dingen wie Benutzerpräferenzen oder {{Glossary("bandwidth", "Bandbreiten")}}bedingungen anzupassen. Siehe unser [Responsive Images](/de/docs/Web/HTML/Guides/Responsive_images) Tutorial für ein Beispiel.

- `width`
  - : Die intrinsische Breite des Bildes in Pixeln. Muss eine ganze Zahl ohne Einheit sein.
- `usemap`
  - : Die partielle {{Glossary("URL", "URL")}} (beginnend mit `#`) einer [Bildkarte](/de/docs/Web/HTML/Reference/Elements/map), die dem Element zugeordnet ist.

    > [!NOTE]
    > Sie können dieses Attribut nicht verwenden, wenn das `<img>` Element innerhalb eines {{htmlelement("a")}} oder {{HTMLElement("button")}} Elements ist.

### Veraltete Attribute

- `align` {{deprecated_inline}}
  - : Richten Sie das Bild mit seinem umliegenden Kontext aus. Verwenden Sie stattdessen die {{cssxref('float')}} und/oder {{cssxref('vertical-align')}} {{Glossary("CSS", "CSS")}} Eigenschaften anstelle dieses Attributs. Zulässige Werte:
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
  - : Die Dicke eines Rahmens um das Bild. Verwenden Sie die {{cssxref('border')}} {{Glossary("CSS", "CSS")}} Eigenschaft stattdessen.
- `hspace` {{deprecated_inline}}
  - : Die Anzahl der Pixel des weißen Raums links und rechts vom Bild. Verwenden Sie die {{cssxref('margin')}} CSS-Eigenschaft stattdessen.
- `longdesc` {{deprecated_inline}}
  - : Ein Link zu einer ausführlicheren Beschreibung des Bildes. Mögliche Werte sind eine {{Glossary("URL", "URL")}} oder eine Element-`id`(/de/docs/Web/HTML/Reference/Global_attributes/id).

    > [!NOTE]
    > Dieses Attribut wird im [HTML](/de/docs/Web/HTML) Standard als veraltet angesehen. Es hat eine unsichere Zukunft; Autoren sollten eine {{Glossary("WAI", "WAI")}}-{{Glossary("ARIA", "ARIA")}} Alternative wie [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) oder [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) verwenden.

- `name` {{deprecated_inline}}
  - : Ein Name für das Element. Verwenden Sie stattdessen das [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) Attribut.
- `vspace` {{deprecated_inline}}
  - : Die Anzahl der Pixel des weißen Raums oben und unten vom Bild. Verwenden Sie die {{cssxref('margin')}} CSS-Eigenschaft stattdessen.

## Styling mit CSS

`<img>` ist ein {{Glossary("replaced_elements", "ersetztes Element")}}; es hat standardmäßig einen {{cssxref("display")}} Wert von `inline`, aber seine Standarddimensionen werden durch die intrinsischen Werte des eingebetteten Bildes definiert, wie bei `inline-block`. Sie können Eigenschaften wie {{cssxref("border")}}/{{cssxref("border-radius")}}, {{cssxref("padding")}}/{{cssxref("margin")}}, {{cssxref("width")}}, {{cssxref("height")}} etc. bei einem Bild setzen.

`<img>` hat keine Baseline, sodass, wenn Bilder in einem Inline-Formatierungskontext mit {{cssxref("vertical-align", "vertical-align: baseline")}} verwendet werden, der Boden des Bildes auf der Textbasislinie platziert wird.

Sie können die {{cssxref("object-position")}} Eigenschaft verwenden, um das Bild innerhalb der Elementbox zu positionieren, und die {{cssxref("object-fit")}} Eigenschaft nutzen, um die Größe des Bildes innerhalb der Box anzupassen (zum Beispiel, ob das Bild die Box ausfüllen sollte oder gefüllt werden sollte, selbst wenn Clipping erforderlich ist).

Abhängig von ihrem Typ können Bilder eine intrinsische Breite und Höhe haben. Für einige Bildtypen sind jedoch intrinsische Dimensionen nicht notwendig. {{Glossary("SVG", "SVG")}} Bilder beispielsweise haben keine intrinsischen Dimensionen, wenn sich im {{SVGElement("svg")}}-Element kein `width` oder `height` befindet.

## Barrierefreiheit

### Aussagekräftige alternative Beschreibungen verfassen

Der Wert des `alt` Attributs sollte eine klare und prägnante Textersetzung für den Inhalt des Bildes bieten. Es sollte nicht die bloße Existenz des Bildes oder den Dateinamen des Bildes beschreiben. Wenn das `alt` Attribut bewusst weggelassen wird, weil das Bild kein textuelles Äquivalent hat, sollten Sie andere Methoden in Betracht ziehen, um das, was das Bild kommunizieren möchte, darzustellen.

#### Nicht tun

```html example-bad
<img alt="image" src="penguin.jpg" />
```

#### Tun

```html example-good
<img alt="A Penguin on a beach." src="penguin.jpg" />
```

Ein wichtiger Barrierefreiheitstest besteht darin, den Inhalt des `alt` Attributs zusammen mit vorhergehendem Text laut zu lesen, um zu prüfen, ob er dieselbe Bedeutung wie das Bild vermittelt. Zum Beispiel, wenn dem Bild der Satz "Auf meinen Reisen sah ich ein niedliches kleines Tier:" vorausging, könnte das _Nicht tun_-Beispiel von einem Bildschirmleser als "Auf meinen Reisen sah ich ein niedliches kleines Tier: Bild" vorgelesen werden, was keinen Sinn ergibt. Das _Tun_-Beispiel könnte von einem Bildschirmleser als "Auf meinen Reisen sah ich ein niedliches kleines Tier: Ein Pinguin am Strand." vorgelesen werden, was Sinn ergibt.

Für Bilder, die eine Aktion auslösen sollen, wie zum Beispiel Bilder, die in einem {{htmlelement("a")}} oder {{htmlelement("button")}} Element verschachtelt sind, sollten Sie in Betracht ziehen, die ausgelöste Aktion im Wert des `alt` Attributs zu beschreiben. Sie könnten zum Beispiel `alt="nächste Seite"` anstelle von `alt="Pfeil rechts"` schreiben. Sie könnten auch in Betracht ziehen, eine optionale weitere Beschreibung in einem `title` Attribut hinzuzufügen; dies kann von Bildschirmlesern auf Anfrage des Benutzers vorgelesen werden.

Wenn ein `alt` Attribut bei einem Bild nicht vorhanden ist, können einige Bildschirmleser stattdessen den Dateinamen des Bildes ankündigen. Dies kann eine verwirrende Erfahrung sein, wenn der Dateiname nicht repräsentativ für den Inhalt des Bildes ist.

- [Ein Alt Entscheidungsbaum • Bilder • WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/images/decision-tree/)
- [Alt-Texte: Der ultimative Leitfaden — Axess Lab](https://axesslab.com/alt-texts/)
- [Wie man großartige Alt-Texte gestaltet: Eine Einführung | Deque](https://www.deque.com/blog/great-alt-text-introduction/)
- [MDN Verständnis der WCAG, Richtlinie 1.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Das Verstehen des Erfolgskriteriums 1.1.1 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

### SVG als Bild identifizieren

Aufgrund eines [VoiceOver Bugs](https://webkit.org/b/216364) kündigt VoiceOver SVG-Bilder nicht korrekt als Bilder an. Fügen Sie [`role="img"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/img_role) zu allen `<img>` Elementen mit SVG-Quelldateien hinzu, um sicherzustellen, dass Hilfswerkzeuge das SVG als Bildinhalt korrekt ankündigen.

```html
<img src="mdn.svg" alt="MDN" role="img" />
```

### Das title Attribut

Das [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title) Attribut ist kein akzeptabler Ersatz für das `alt` Attribut. Vermeiden Sie außerdem, den Wert des `alt` Attributes in einem `title` Attribut auf demselben Bild zu duplizieren. Dies kann dazu führen, dass einige Bildschirmleser denselben Text zweimal ansagen, was zu einer verwirrenden Erfahrung führt.

Das `title` Attribut sollte auch nicht als ergänzende Beschriftungsinformation zur Begleitung der `alt` Beschreibung eines Bildes verwendet werden. Wenn ein Bild eine Bildunterschrift benötigt, verwenden Sie die [`figure`](/de/docs/Web/HTML/Reference/Elements/figure) und [`figcaption`](/de/docs/Web/HTML/Reference/Elements/figcaption) Elemente.

Der Wert des `title` Attributs wird Benutzern normalerweise als Tooltip präsentiert, der kurz nach Anhalten des Cursors über dem Bild erscheint. Während dies dem Benutzer eine zusätzliche Information geben _kann_, sollten Sie nicht davon ausgehen, dass der Benutzer es jemals sehen wird: Der Benutzer könnte nur über Tastatur oder Touchscreen verfügen. Wenn Sie Informationen haben, die besonders wichtig oder wertvoll für den Benutzer sind, präsentieren Sie diese inline mithilfe einer der oben genannten Methoden anstelle von `title`.

- [Das HTML title Attribut verwenden – aktualisiert | Die Paciello Group](https://www.tpgi.com/using-the-html-title-attribute-updated/)

## Beispiele

### Alternativtext

Das folgende Beispiel bettet ein Bild auf der Seite ein und beinhaltet alternativen Text zur Barrierefreiheit.

```html
<img src="/shared-assets/images/examples/favicon144.png" alt="MDN" />
```

{{ EmbedLiveSample('Alternative_text', '100%', '160') }}

### Bildlink

Dieses Beispiel baut auf dem vorherigen auf und zeigt, wie das Bild in einen Link umgewandelt wird. Dazu müssen Sie das `<img>` Tag innerhalb des {{HTMLElement("a")}} Tags verschachteln. Sie sollten den Alternativtext so beschreiben, dass er die Ressource beschreibt, auf die der Link zeigt, als ob Sie einen Textlink verwenden würden.

```html
<a href="https://developer.mozilla.org">
  <img
    src="/shared-assets/images/examples/favicon144.png"
    alt="Visit the MDN site" />
</a>
```

{{ EmbedLiveSample('Image_link', '100%', '160') }}

### Verwendung des srcset Attributes

In diesem Beispiel fügen wir ein `srcset` Attribut mit einem Verweis auf eine hochauflösende Version des Logos ein; diese wird statt des `src` Bildes auf hochauflösenden Geräten geladen. Das Bild, auf das im `src` Attribut verwiesen wird, wird in {{Glossary("User_agent", "User Agents")}}, die `srcset` unterstützen, als `1x` Kandidat gezählt.

```html
<img
  src="/shared-assets/images/examples/favicon72.png"
  alt="MDN"
  srcset="/shared-assets/images/examples/favicon144.png 2x" />
```

{{EmbedLiveSample("Using_the_srcset_attribute", "100%", "160")}}

### Verwendung der srcset und sizes Attribute

Das `src` Attribut wird in {{Glossary("User_agent", "User Agents")}}, die `srcset` unterstützen, ignoriert, wenn `w` Deskriptoren enthalten sind. Wenn die `(width <= 600px)` Medienbedingung erfüllt ist, wird das 200 Pixel breite Bild geladen (es ist das, welches `200px` am nächsten kommt), sonst wird das andere Bild geladen.

```html
<img
  src="clock-demo-200px.png"
  alt="The time is 12:45."
  srcset="clock-demo-200px.png 200w, clock-demo-400px.png 400w"
  sizes="(width <= 600px) 200px, 50vw" />
```

{{EmbedLiveSample("Using_the_srcset_and_sizes_attributes", "100%", 350)}}

> [!NOTE]
> Um die Größenänderung in Aktion zu sehen, {{LiveSampleLink('Using_the_srcset_and_sizes_attributes', 'view the example on a separate page')}}, sodass Sie den Inhaltsbereich tatsächlich ändern können.

## Sicherheits- und Datenschutzbedenken

Obwohl `<img>` Elemente harmlos wirken, können sie unerwünschte Folgen für die Sicherheit und Privatsphäre der Benutzer haben. Siehe [Referer Header: Sicherheits- und Datenschutzbedenken](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns) für weitere Informationen und Maßnahmen zur Minderung.

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
          >Phraseninhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#embedded_content"
          >eingebetteter Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#palpable_content"
          >wahrnehmbarer Inhalt</a
        >. Wenn das Element ein <code>usemap</code> Attribut hat, gehört es auch zur Kategorie des interaktiven Inhalts.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "void-element")}}.</td>
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
      <th scope="row">Implizierte ARIA-Rolle</th>
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
            mit leerem <code>alt</code> Attribut:
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
            mit leerem <code>alt</code> Attribut, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/none_role"><code>none</code></a>
            oder <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a>
          </li>
          <li>
            mit keinem <code>alt</code> Attribut, keine <code>role</code> erlaubt
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
- [HTML-Bilder](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images)
- [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types)
- [Responsive Images](/de/docs/Web/HTML/Guides/Responsive_images)
