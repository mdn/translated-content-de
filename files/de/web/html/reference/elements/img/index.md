---
title: "<img>: Das Bildeinbettungselement"
slug: Web/HTML/Reference/Elements/img
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

Das **`<img>`**-Element [HTML](/de/docs/Web/HTML) bettet ein Bild in das Dokument ein.

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

- Das `src`-Attribut enthält den Pfad zu dem Bild, das Sie einbetten möchten. Es ist nicht erforderlich, wenn das [srcset](/de/docs/Web/API/HTMLImageElement/srcset)-Attribut verfügbar ist. Allerdings muss mindestens eines der `src`- oder `srcset`-Attribute angegeben werden.
- Das `alt`-Attribut enthält einen textuellen Ersatz für das Bild, welches verpflichtend ist und für Barrierefreiheit **äußerst nützlich** ist — Bildschirmlesegeräte lesen den Attributwert vor, damit die Nutzer wissen, was das Bild bedeutet. Alternativtext wird auch auf der Seite angezeigt, wenn das Bild aus irgendeinem Grund nicht geladen werden kann: beispielsweise bei Netzwerkfehlern, Inhaltsblockierung oder nicht mehr vorhandenen Links.

Es gibt viele weitere Attribute, um verschiedene Zwecke zu erreichen:

- [Referrer](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy)/{{Glossary("CORS", "CORS")}}-Kontrolle für Sicherheit und Privatsphäre: siehe [`crossorigin`](#crossorigin) und [`referrerpolicy`](#referrerpolicy).
- Verwenden Sie sowohl [`width`](#width) als auch [`height`](#height), um die intrinsische Größe des Bildes festzulegen, damit es Platz einnehmen kann, bevor es geladen wird, um Layout-Verschiebungen des Inhalts zu reduzieren.
- Responsive Bildhinweise mit [`sizes`](#sizes) und [`srcset`](#srcset) (siehe auch das {{htmlelement("picture")}}-Element und unser [Leitfaden für responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images)).

## Unterstützte Bildformate

Der HTML-Standard gibt nicht an, welche Bildformate unterstützt werden sollen, sodass {{Glossary("user_agent", "Benutzeragenten")}} unterschiedliche Formate unterstützen können.

> [!NOTE]
> Der [Leitfaden für Bilddateitypen und -formate](/de/docs/Web/Media/Guides/Formats/Image_types) bietet umfassende Informationen über Bildformate und deren Unterstützung in Webbrowsern. Dieser Abschnitt ist nur eine Zusammenfassung!

Die Bilddateiformate, die im Internet am häufigsten verwendet werden, sind:

- [APNG (Animated Portable Network Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#apng_animated_portable_network_graphics) — Gute Wahl für verlustfreie Animationssequenzen (GIF ist weniger performant)
- [AVIF (AV1 Image File Format)](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) — Gute Wahl für Bilder und animierte Bilder aufgrund der hohen Leistung.
- [GIF (Graphics Interchange Format)](/de/docs/Web/Media/Guides/Formats/Image_types#gif_graphics_interchange_format) — Gute Wahl für _einfache_ Bilder und Animationen.
- [JPEG (Joint Photographic Expert Group image)](/de/docs/Web/Media/Guides/Formats/Image_types#jpeg_joint_photographic_experts_group_image) — Gute Wahl für verlustbehaftete Komprimierung von Standbildern (derzeit am beliebtesten).
- [PNG (Portable Network Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#png_portable_network_graphics) — Gute Wahl für verlustfreie Komprimierung von Standbildern (leicht bessere Qualität als JPEG).
- [SVG (Scalable Vector Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#svg_scalable_vector_graphics) — Vektorbildformat. Verwenden Sie es für Bilder, die in verschiedenen Größen genau gezeichnet werden müssen.
- [WebP (Web Picture format)](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) — Hervorragende Wahl für Bilder und animierte Bilder.

Formate wie [WebP](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) und [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) werden empfohlen, da sie für Stand- und animierte Bilder viel besser performen als PNG, JPEG, GIF.

SVG bleibt das empfohlene Format für Bilder, die in verschiedenen Größen exakt gezeichnet werden müssen.

## Fehler beim Laden von Bildern

Wenn beim Laden oder Rendern eines Bildes ein Fehler auftritt und ein `onerror`-Ereignishandler für das [`error`](/de/docs/Web/API/HTMLElement/error_event)-Ereignis gesetzt wurde, wird dieser Ereignishandler aufgerufen. Dies kann in mehreren Situationen passieren, darunter:

- Die `src`- oder `srcset`-Attribute sind leer (`""`) oder `null`.
- Die `src`-URL ist dieselbe wie die URL der Seite, die der Nutzer gerade besucht.
- Das Bild ist in einer Weise beschädigt, die das Laden verhindert.
- Die Metadaten des Bildes sind so beschädigt, dass es unmöglich ist, seine Abmessungen zu ermitteln, und keine Abmessungen im `<img>`-Element-Attribut angegeben wurden.
- Das Bild ist in einem Format, das vom {{Glossary("user_agent", "Benutzeragenten")}} nicht unterstützt wird.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- [`alt`](/de/docs/Web/API/HTMLImageElement/alt#usage_notes)
  - : Definiert Text, der das Bild auf der Seite ersetzen kann.

    > [!NOTE]
    > Browser zeigen nicht immer Bilder an. Es gibt eine Reihe von Situationen, in denen ein Browser möglicherweise keine Bilder anzeigt, wie zum Beispiel:
    >
    > - Nicht-visuelle Browser (wie diejenigen, die von Menschen mit Sehbehinderungen verwendet werden)
    > - Der Benutzer entscheidet sich dafür, keine Bilder anzuzeigen (um Bandbreite zu sparen, aus Datenschutzgründen)
    > - Das Bild ist ungültig oder ein [nicht unterstützter Typ](#unterstützte_bildformate)
    >
    > In diesen Fällen kann der Browser das Bild durch den Text im `alt`-Attribut des Elements ersetzen. Aus diesen und anderen Gründen sollten Sie, wann immer möglich, einen nützlichen Wert für `alt` bereitstellen.

    Die Festlegung dieses Attributs auf einen leeren String (`alt=""`) bedeutet, dass dieses Bild _nicht_ ein wesentlicher Bestandteil des Inhalts ist (es ist Dekoration oder ein Tracking-Pixel) und dass nicht-visuelle Browser es möglicherweise von der {{Glossary("Engine/Rendering", "Darstellung")}} auslassen. Visuelle Browser verbergen auch das gebrochene Bildsymbol, wenn das `alt`-Attribut leer ist und das Bild nicht angezeigt werden konnte.

    Dieses Attribut wird auch verwendet, wenn man das Bild in Text kopiert und einfügt oder ein verlinktes Bild zu einem Lesezeichen speichert.

- `attributionsrc` {{experimental_inline}}
  - : Gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header zusammen mit der Bildanfrage sendet.

    Auf der Serverseite wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header in der Antwort auszulösen, um eine bildbasierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#html-based_event_sources) oder einen [Attributionstrigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#html-based_attribution_triggers) zu registrieren, je nachdem. Welcher Antwortheader zurückgesendet werden soll, hängt vom Wert des `Attribution-Reporting-Eligible`-Headers ab, der die Registrierung ausgelöst hat.

    Das entsprechende Quellen- oder Triggerereignis wird ausgelöst, sobald der Browser die Antwort mit der Bilddatei erhält.

    > [!NOTE]
    > Siehe die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) für weitere Details.

    Es gibt zwei Versionen dieses Attributs, die Sie festlegen können:
    - Boolean, d.h. nur der `attributionsrc`-Name. Dies gibt an, dass Sie möchten, dass der {{httpheader("Attribution-Reporting-Eligible")}}-Header an denselben Server gesendet wird, auf den das `src`-Attribut verweist. Dies ist in Ordnung, wenn Sie die Registrierung der Attributionsquelle oder -auslösung auf demselben Server durchführen. Bei der Registrierung eines Attributionstriggers ist diese Eigenschaft optional und ein Boolean-Wert wird verwendet, wenn sie weggelassen wird.
    - Wert mit einer oder mehreren URLs, zum Beispiel:

    ```html
    <img
      src="image-file.png"
      alt="My image file description"
      attributionsrc="https://a.example/register-source
                         https://b.example/register-source" />
    ```

    Dies ist nützlich in Fällen, in denen die angeforderte Ressource nicht auf einem Server liegt, den Sie kontrollieren, oder Sie möchten die Registrierung der Attributionsquelle nur auf einem anderen Server durchführen. In diesem Fall können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcenanforderung erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header an die(s) angegebene(n) URL(s) in `attributionSrc` zusätzlich zum Ursprungsserver gesendet. Diese URLs können dann mit einem {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header wie erforderlich antworten, um die Registrierung abzuschließen.

    > [!NOTE]
    > Die Angabe mehrerer URLs bedeutet, dass mehrere Attributionsquellen auf derselben Funktion registriert werden können. Sie könnten zum Beispiel verschiedene Kampagnen haben, deren Erfolg Sie messen möchten, was das Erstellen unterschiedlicher Berichte über unterschiedliche Daten beinhaltet.

- [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)
  - : Gibt an, ob das Abrufen des Bildes mit einer {{Glossary("CORS", "CORS")}}-Anfrage durchgeführt werden muss. Bilddaten von einem [CORS-fähigen Bild](/de/docs/Web/HTML/How_to/CORS_enabled_image), das von einer CORS-Anfrage zurückgegeben wird, können im {{HTMLElement("canvas")}}-Element wiederverwendet werden, ohne dass es als "[verunreinigt](/de/docs/Web/HTML/How_to/CORS_enabled_image#security_and_tainted_canvases)" markiert wird.

    Wenn das `crossorigin`-Attribut _nicht_ angegeben ist, wird eine nicht-CORS-Anfrage gesendet (ohne {{httpheader("Origin")}}-Anforderungs-Header), und der Browser markiert das Bild als verunreinigt und schränkt den Zugriff auf dessen Bilddaten ein, was seine Verwendung in {{HTMLElement("canvas")}}-Elementen verhindert.

    Wenn das `crossorigin`-Attribut _angegeben_ ist, wird eine CORS-Anfrage gesendet (mit dem {{httpheader("Origin")}}-Anforderungs-Header); aber wenn der Server nicht darauf eingeht, den Zugriff auf die Bilddaten durch die Ursprungsseite zuzulassen (indem er keinen {{httpheader("Access-Control-Allow-Origin")}}-Antwortheader sendet oder indem er die Ursprungsseite nicht in den {{httpheader("Access-Control-Allow-Origin")}}-Antwortheader aufnimmt, den er sendet), blockiert der Browser das Laden des Bildes und protokolliert einen CORS-Fehler in der Entwicklerkonsole.

    Zulässige Werte:
    - `anonymous`
      - : Eine CORS-Anfrage wird ohne Anmeldeinformationen gesendet (das heißt, keine {{Glossary("cookie", "Cookies")}}, [X.509-Zertifikate](https://datatracker.ietf.org/doc/html/rfc5280) oder {{httpheader("Authorization")}}-Anforderungs-Header).
    - `use-credentials`
      - : Die CORS-Anfrage wird mit allen Anmeldeinformationen gesendet (das heißt, Cookies, X.509-Zertifikate und der `Authorization`-Anforderungs-Header). Wenn der Server sich nicht dafür entscheidet, Anmeldeinformationen mit der Ursprungsseite zu teilen (indem er den `Access-Control-Allow-Credentials: true`-Antwortheader sendet), markiert der Browser das Bild als verunreinigt und schränkt den Zugriff auf dessen Bilddaten ein.

    Wenn das Attribut einen ungültigen Wert hat, behandeln Browser es so, als ob der Wert `anonymous` verwendet wurde. Weitere Informationen finden Sie unter [CORS-Einstellungen für Attribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin).

- `decoding`
  - : Dieses Attribut gibt dem Browser einen Hinweis, ob er die Bilddecodierung zusammen mit dem Rendern anderer DOM-Inhalte in einem einzigen Anzeigezyklus, der "korrekter" aussieht (`sync`), durchführen soll oder ob er andere DOM-Inhalte zuerst rendern und anzeigen soll, bevor er das Bild decodiert und es später anzeigt (`async`). In der Praxis bedeutet `async`, dass der nächste Zeichenprozess nicht darauf wartet, dass das Bild decodiert wird.

    Es ist oft schwierig, einen merklichen Effekt bei der Verwendung von `decoding` auf statische `<img>`-Elemente wahrzunehmen. Sie werden wahrscheinlich zunächst als leere Bilder gerendert, während die Bilddateien abgerufen werden (entweder aus dem Netzwerk oder aus dem Cache) und dann unabhängig behandelt werden, sodass die Synchronisation der Inhaltaktualisierungen weniger sichtbar ist. Das Blockieren der Darstellung während die Dekodierung erfolgt, kann jedoch messbar sein, auch wenn es für das menschliche Auge schwer zu erkennen ist. Siehe [Was macht das Image-Decoding-Attribut eigentlich?](https://www.tunetheweb.com/blog/what-does-the-image-decoding-attribute-actually-do/) für eine detaillierte Analyse (tunetheweb.com, 2023).

    Die Verwendung unterschiedlicher `decoding`-Typen kann zu deutlicheren Unterschieden führen, wenn `<img>`-Elemente über JavaScript dynamisch in das DOM eingefügt werden — siehe [`HTMLImageElement.decoding`](/de/docs/Web/API/HTMLImageElement/decoding) für weitere Details.

    Zulässige Werte:
    - `sync`
      - : Decodiert das Bild synchron zusammen mit dem Rendern der anderen DOM-Inhalte und zeigt alles zusammen an.
    - `async`
      - : Decodiert das Bild asynchron, nach dem Rendern und Darstellen der anderen DOM-Inhalte.
    - `auto`
      - : Keine Präferenz für den Dekodierungsmodus; der Browser entscheidet, was für den Benutzer am besten ist. Dies ist der Standardwert.

- [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming)
  - : Markiert das Bild zur Beobachtung durch die [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)-API. Der angegebene Wert wird zu einem Identifikator für das beobachtete Bild-Element. Siehe auch die Seite zum [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming)-Attribut.

- `fetchpriority`
  - : Gibt einen Hinweis auf die relative Priorität beim Abrufen des Bildes.
    Zulässige Werte:
    - `high`
      - : Ruft das Bild mit hoher Priorität im Vergleich zu anderen Bildern ab.
    - `low`
      - : Ruft das Bild mit niedriger Priorität im Vergleich zu anderen Bildern ab.
    - `auto`
      - : Legt keine Präferenz für die Abrufpriorität fest.
        Dies ist der Standardwert.
        Er wird verwendet, wenn kein Wert oder ein ungültiger Wert festgelegt ist.

    Weitere Informationen finden Sie unter [`HTMLImageElement.fetchPriority`](/de/docs/Web/API/HTMLImageElement/fetchPriority).

- `height`
  - : Die intrinsische Höhe des Bildes in Pixel. Muss eine Ganzzahl ohne Einheit sein.

    > [!NOTE]
    > Die Aufnahme von `height` und [`width`](#width) ermöglicht es dem Browser, das {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Bildes zu berechnen, bevor es geladen wird. Dieses Seitenverhältnis wird verwendet, um den Platz zu reservieren, der benötigt wird, um das Bild anzuzeigen, wodurch Layout-Verschiebungen beim Herunterladen und Zeichnen des Bildes auf dem Bildschirm reduziert oder sogar verhindert werden können. Die Reduzierung von Layout-Verschiebungen ist ein wesentlicher Bestandteil für eine gute Benutzererfahrung und Web-Performance.

- `ismap`
  - : Dieses Boolean-Attribut gibt an, dass das Bild Teil einer [serverseitigen Karte](https://en.wikipedia.org/wiki/Image_map#Server-side) ist. In diesem Fall werden die Koordinaten, an denen der Benutzer auf das Bild geklickt hat, an den Server gesendet.

    > [!NOTE]
    > Dieses Attribut ist nur zulässig, wenn das `<img>`-Element ein Nachkomme eines {{htmlelement("a")}}-Elements mit einem gültigen [`href`](/de/docs/Web/HTML/Reference/Elements/a#href)-Attribut ist. Dies bietet Benutzern ohne Zeigevorrichtungen ein Fallback-Ziel.

- `loading`
  - : Gibt an, wie der Browser das Bild laden soll:
    - `eager`
      - : Lädt das Bild sofort, unabhängig davon, ob das Bild derzeit innerhalb des sichtbaren Ansichtsfensters liegt (dies ist der Standardwert).
    - `lazy`
      - : Verzögert das Laden des Bildes, bis es eine berechnete Entfernung vom Ansichtsfenster erreicht, wie vom Browser definiert. Die Absicht ist es, das Netzwerk und den Speicherbedarf zu vermeiden, um das Bild zu handhaben, bis es wahrscheinlich gebraucht wird. Dies verbessert im Allgemeinen die Leistung der Inhalte in den meisten typischen Anwendungsfällen.

    > [!NOTE]
    > Das Laden wird nur verzögert, wenn JavaScript aktiviert ist. Dies ist eine Anti-Tracking-Maßnahme, da, wenn ein Benutzeragent das verzögerte Laden unterstützen würde, wenn Scripting deaktiviert ist, es immer noch möglich wäre, die ungefähre Bildlaufposition eines Benutzers während einer Sitzung zu verfolgen, indem strategisch Bilder im Markup platziert werden, sodass ein Server nachverfolgen kann, wie viele Bilder angefordert werden und wann.

    > [!NOTE]
    > Bilder mit `loading` auf `lazy` werden nie geladen, wenn sie keinen sichtbaren Teil eines Elements schneiden, auch wenn das Laden dieser Bilder das ändern würde, da nicht geladene Bilder eine `width` und `height` von `0` haben. Die Angabe von `width` und `height` bei Lazy-Loading-Bildern behebt dieses Problem und ist eine bewährte Praxis, [empfohlen von der Spezifikation](https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element). Dies hilft auch, Layout-Verschiebungen zu vermeiden.

- `referrerpolicy`
  - : Ein String, der angibt, welchen Referrer bei der Anforderung der Ressource verwendet werden soll:
    - `no-referrer`: Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}}-Header wird nicht an {{Glossary("origin", "Ursprünge")}} ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`: Der gesendete Referrer wird auf den Ursprung der verweisenden Seite begrenzt: sein [Schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "Hostname")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`: Der an andere Ursprünge gesendete Referrer wird auf das Schema, den Host und den Port begrenzt. Navigationen auf demselben Ursprung enthalten weiterhin den Pfad.
    - `same-origin`: Ein Referrer wird für {{Glossary("Same-origin_policy", "same origin")}} gesendet, aber bei Cross-Origin-Anfragen wird keine Referenzinformation enthalten.
    - `strict-origin`: Der Ursprung des Dokuments wird nur dann als Referrer gesendet, wenn das Sicherheitsprotokoll auf demselben Niveau bleibt (HTTPS→HTTPS), jedoch nicht an ein weniger sicheres Ziel (HTTPS→HTTP) gesandt.
    - `strict-origin-when-cross-origin` (Standard): Eine vollständige URL wird gesendet, wenn eine Same-Origin-Anfrage durchgeführt wird, nur der Ursprung wird gesendet, wenn das Protokollsicherheitsniveau gleich bleibt (HTTPS→HTTPS), und es wird kein Header an ein weniger sicheres Ziel gesendet (HTTPS→HTTP).
    - `unsafe-url`: Der Referrer enthält den Ursprung _und_ den Pfad (aber nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), das [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder den [Benutzernamen](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge leakt.

- `sizes`
  - : Ein oder mehrere durch Kommas getrennte Werte, die Quellgrößen oder das `auto` Schlüsselwort sein können.

    Eine **Quellgröße** besteht aus:
    1. Einer [Medienbedingung](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#syntax), die bei dem letzten Eintrag in der Liste weggelassen werden kann.
    2. Einem Quellgrößenwert.

    Medienbedingungen beschreiben Eigenschaften des _Ansichtsfensters_, nicht des _Bildes_. Beispielsweise schlägt `(height <= 500px) 1000px` die Verwendung einer Bildquelle von 1000px Breite vor, wenn die _Ansichtshöhe_ 500px oder kleiner ist. Da ein Quellgrößen-Beschreiber die Breite spezifiziert, die beim Layout für das Bild verwendet werden soll, basiert die Medienbedingung typischerweise (aber nicht notwendigerweise) auf der [Breite](/de/docs/Web/CSS/@media/width).

    Quellgrößenwerte geben die vorgesehene Anzeigengröße des Bildes an. {{Glossary("User_agent", "Benutzeragenten")}} verwenden die aktuelle Quellgröße, um eine der Quellen auszuwählen, die im `srcset`-Attribut bereitgestellt werden, wenn diese Quellen mit Breiten (`w`) Beschreibern beschrieben sind. Die ausgewählte Quellgröße beeinflusst die {{Glossary("intrinsic_size", "intrinsische Größe")}} des Bildes (die Anzeigengröße des Bildes, wenn keine {{Glossary("CSS", "CSS")}}-Stilierung angewendet ist). Wenn das `srcset`-Attribut nicht vorhanden ist oder keine Werte mit einem Breitenbeschreiber enthält, hat das `sizes`-Attribut keine Wirkung.

    Ein Quellgrößenwert kann jede nicht-negative [Länge](/de/docs/Web/CSS/length) sein. Es darf keine CSS-Funktionen außer den [Mathe-Funktionen](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions#math_functions) verwenden. Einheiten werden auf die gleiche Weise interpretiert wie bei [Media Queries](/de/docs/Web/CSS/CSS_media_queries), was bedeutet, dass alle relativen Längeneinheiten relativ zur Dokumentwurzel und nicht zum `<img>`-Element sind. Beispielsweise ist ein `em`-Wert relativ zur Schriftgröße der Wurzel und nicht zur Schriftgröße des Bildes. [Prozentwerte](/de/docs/Web/CSS/percentage) sind nicht erlaubt.

    Das `auto`-Schlüsselwort kann die gesamte Liste der Größen oder den ersten Eintrag in der Liste ersetzen. Es ist nur in Kombination mit `loading="lazy"` gültig und wird auf die [konkrete Größe](/de/docs/Web/CSS/image) des Bildes aufgelöst. Da die intrinsische Größe des Bildes noch nicht bekannt ist, sollten `width` und `height`-Attribute (oder CSS-Äquivalente) ebenfalls angegeben werden, um zu verhindern, dass der Browser die Standardbildbreite von 300px annimmt.
    Für eine bessere Rückwärtskompatibilität mit Browsern, die `auto` nicht unterstützen, können Sie Fallbackgrößen nach dem `auto` im `sizes`-Attribut einfügen:

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
  - : Die Bild-{{Glossary("URL", "URL")}}. Obligatorisch für das `<img>`-Element. In {{Glossary("Browser", "Browsern")}}, die `srcset` unterstützen, wird `src` wie ein Kandidatenbild mit einem Pixeldichte-Beschreiber von `1x` behandelt, es sei denn, ein Bild mit diesem Pixeldichte-Beschreiber ist bereits in `srcset` definiert oder `srcset` enthält `w`-Beschreiber.
- `srcset`
  - : Eine oder mehrere durch Kommata getrennte Zeichenfolgen, die mögliche Bildquellen für den {{Glossary("user_agent", "Benutzeragenten")}} angeben. Jede Zeichenfolge besteht aus:
    1. Einer {{Glossary("URL", "URL")}} zu einem Bild
    2. Optional, einem Leerzeichengefolgt von einem der folgenden:
       - Einem Breitenbeschreiber (eine positive Ganzzahl, gefolgt von `w`). Der Breitenbeschreiber wird durch die in den `sizes`-Attribut angegebene Quelgröße geteilt, um die effektive Pixeldichte zu berechnen.
       - Einem Pixeldichte-Beschreiber (eine positive Gleitkommazahl, gefolgt von `x`).

    Wenn kein Beschreiber angegeben ist, wird die Quelle dem Standardbeschreiber von `1x` zugeordnet.

    Es ist falsch, Breitenbeschreiber und Pixeldichte-Beschreiber im selben `srcset`-Attribut zu mischen. Doppelte Beschreiber (zum Beispiel zwei Quellen im selben `srcset`, die beide mit `2x` beschrieben sind) sind ebenfalls ungültig.

    Wenn das `srcset`-Attribut Breitenbeschreiber verwendet, muss das `sizes`-Attribut ebenfalls vorhanden sein, oder das `srcset` selbst wird ignoriert.

    Der Benutzeragent wählt nach eigenem Ermessen eine der verfügbaren Quellen aus. Dies gibt ihm erhebliche Freiheit, seine Auswahl basierend auf Dingen wie Benutzerpräferenzen oder {{Glossary("bandwidth", "Bandbreitenbedingungen")}} anzupassen. Siehe unser [Leitfaden für responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images) für ein Beispiel.

- `width`
  - : Die intrinsische Breite des Bildes in Pixel. Muss eine Ganzzahl ohne Einheit sein.
- `usemap`
  - : Die partielle {{Glossary("URL", "URL")}} (beginnend mit `#`) einer [Bildkarte](/de/docs/Web/HTML/Reference/Elements/map), die dem Element zugeordnet ist.

    > [!NOTE]
    > Sie können dieses Attribut nicht verwenden, wenn das `<img>`-Element in einem {{htmlelement("a")}}- oder {{HTMLElement("button")}}-Element enthalten ist.

### Veraltete Attribute

- `align` {{deprecated_inline}}
  - : Richtet das Bild mit seinem umgebenden Kontext aus. Verwenden Sie die {{cssxref('float')}}- und/oder {{cssxref('vertical-align')}}-Eigenschaften {{Glossary("CSS", "CSS")}} anstelle dieses Attributs. Zulässige Werte:
    - `top`
      - : Entsprechend `vertical-align: top` oder `vertical-align: text-top`
    - `middle`
      - : Entsprechend `vertical-align: -moz-middle-with-baseline`
    - `bottom`
      - : Der Standardwert, entsprechend `vertical-align: unset` oder `vertical-align: initial`
    - `left`
      - : Entsprechend `float: left`
    - `right`
      - : Entsprechend `float: right`

- `border` {{deprecated_inline}}
  - : Die Breite eines Rahmens um das Bild. Verwenden Sie die {{cssxref('border')}}-Eigenschaft {{Glossary("CSS", "CSS")}} stattdessen.
- `hspace` {{deprecated_inline}}
  - : Die Anzahl der Pixel weißen Raums links und rechts vom Bild. Verwenden Sie die {{cssxref('margin')}}-Eigenschaft CSS stattdessen.
- `longdesc` {{deprecated_inline}}
  - : Ein Link zu einer detaillierteren Beschreibung des Bildes. Mögliche Werte sind eine {{Glossary("URL", "URL")}} oder ein Element mit [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id).

    > [!NOTE]
    > Dieses Attribut wird in der [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/obsolete.html#element-attrdef-img-longdesc) als veraltet angesehen. Es hat eine unsichere Zukunft; Autoren sollten eine {{Glossary("WAI", "WAI")}}-{{Glossary("ARIA", "ARIA")}}-Alternative wie [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) oder [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) verwenden.

- `name` {{deprecated_inline}}
  - : Ein Name für das Element. Verwenden Sie das [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut stattdessen.
- `vspace` {{deprecated_inline}}
  - : Die Anzahl der Pixel weißen Raums oberhalb und unterhalb des Bildes. Verwenden Sie die {{cssxref('margin')}}-Eigenschaft CSS stattdessen.

## Styling mit CSS

`<img>` ist ein {{Glossary("replaced_elements", "ersetztes Element")}}; es hat standardmäßig einen {{cssxref("display")}}-Wert von `inline`, aber seine Standardabmessungen werden durch die intrinsischen Werte des eingebetteten Bildes definiert, als wäre es `inline-block`. Sie können Eigenschaften wie {{cssxref("border")}}/{{cssxref("border-radius")}}, {{cssxref("padding")}}/{{cssxref("margin")}}, {{cssxref("width")}}, {{cssxref("height")}}, etc. auf ein Bild anwenden.

`<img>` hat keine Grundlinie, daher wird beim Verwenden von Bildern in einem Inline-Formatierungskontext mit {{cssxref("vertical-align", "vertical-align: baseline")}} das untere Ende des Bildes auf die Textgrundlinie gesetzt.

Sie können die {{cssxref("object-position")}}-Eigenschaft verwenden, um das Bild innerhalb des Elementrahmens zu positionieren, und die {{cssxref("object-fit")}}-Eigenschaft, um die Größenanpassung des Bildes innerhalb des Rahmens einzustellen (z.B. ob das Bild in den Rahmen passen oder es füllen soll, auch wenn Clipping erforderlich ist).

Je nach Typ kann ein Bild eine intrinsische Breite und Höhe haben. Für einige Bildtypen sind jedoch intrinsische Abmessungen nicht erforderlich. {{Glossary("SVG", "SVG")}}-Bilder haben beispielsweise keine intrinsischen Abmessungen, wenn das root {{SVGElement("svg")}}-Element keine `width` oder `height` hat.

## Barrierefreiheit

### Sinnvolle alternative Beschreibungen verfassen

Der Wert eines `alt`-Attributs sollte einen klaren und prägnanten Textersatz für den Bildinhalt bereitstellen. Er sollte weder das Vorhandensein des Bildes selbst noch den Dateinamen des Bildes beschreiben. Wenn das `alt`-Attribut bewusst weggelassen wurde, weil das Bild kein textuelles Äquivalent hat, sollten alternative Methoden in Betracht gezogen werden, um das darzustellen, was das Bild vermitteln soll.

#### Nicht

```html example-bad
<img alt="image" src="penguin.jpg" />
```

#### Machen Sie es so

```html example-good
<img alt="A Penguin on a beach." src="penguin.jpg" />
```

Ein wichtiger Barrierefreiheitstest besteht darin, den Inhalt des `alt`-Attributs zusammen mit dem vorhergehenden Textinhalt zu lesen, um zu sehen, ob er dieselbe Bedeutung wie das Bild vermittelt. Zum Beispiel, wenn dem Bild der Satz "Auf meinen Reisen sah ich ein niedliches kleines Tier:" vorangestellt wäre, könnte das _Nicht_-Beispiel von einem Bildschirmlesegerät als "Auf meinen Reisen sah ich ein niedliches kleines Tier: Bild" gelesen werden, was keinen Sinn macht. Das _Machen Sie es so_-Beispiel könnte von einem Bildschirmlesegerät als "Auf meinen Reisen sah ich ein niedliches kleines Tier: Ein Pinguin am Strand." gelesen werden, was Sinn macht.

Für Bilder, die eine Aktion auslösen, zum Beispiel Bilder, die in einem {{htmlelement("a")}} oder {{htmlelement("button")}} Element verschachtelt sind, sollten Sie in Betracht ziehen, die ausgelöste Aktion im Wert des `alt`-Attributs zu beschreiben. Zum Beispiel könnten Sie `alt="nächste Seite"` anstelle von `alt="Pfeil nach rechts"` schreiben. Sie könnten auch in Betracht ziehen, eine optionale weitere Beschreibung in einem `title`-Attribut hinzuzufügen; dies kann von Bildschirmlesegeräten gelesen werden, wenn der Benutzer es anfordert.

Wenn ein `alt`-Attribut in einem Bild fehlt, geben einige Bildschirmlesegeräte möglicherweise den Dateinamen des Bildes wieder. Dies kann eine verwirrende Erfahrung sein, wenn der Dateiname nicht repräsentativ für den Inhalt des Bildes ist.

- [Ein alt Decision Tree • Bilder • WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/images/decision-tree/)
- [Alt-texts: The Ultimate Guide — Axess Lab](https://axesslab.com/alt-texts/)
- [Wie man tolle Alt-Texte gestaltet: Ein Einleitungsartikel | Deque](https://www.deque.com/blog/great-alt-text-introduction/)
- [MDN Understanding WCAG, Guideline 1.1 explanations](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verständnis des Erfolgskriteriums 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

### Identifizierung von SVGs als Bild

Aufgrund eines [VoiceOver-Bugs](https://webkit.org/b/216364) gibt VoiceOver SVG-Bilder nicht korrekt als Bilder aus. Fügen Sie [`role="img"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/img_role) bei allen `<img>`-Elementen mit SVG-Quelldateien hinzu, um sicherzustellen, dass unterstützende Technologien SVGs korrekt als Bildinhalte ankündigen.

```html
<img src="mdn.svg" alt="MDN" role="img" />
```

### Das title-Attribut

Das [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)-Attribut ist kein akzeptabler Ersatz für das `alt`-Attribut. Zusätzlich sollte vermieden werden, den Wert des `alt`-Attributs in einem `title`-Attribut zu duplizieren, das auf dem gleichen Bild deklariert wurde. Dadurch könnte es passieren, dass einige Bildschirmlesegeräte denselben Text zweimal ankündigen, was eine verwirrende Erfahrung schaffen kann.

Das `title`-Attribut sollte auch nicht als ergänzende Beschriftungsinformation verwendet werden, um eine `alt`-Beschreibung zu begleiten. Wenn ein Bild eine Beschriftung benötigt, verwenden Sie die [`figure`](/de/docs/Web/HTML/Reference/Elements/figure)- und [`figcaption`](/de/docs/Web/HTML/Reference/Elements/figcaption)-Elemente.

Der Wert des `title`-Attributs wird dem Benutzer normalerweise als Tooltip präsentiert, der kurzzeitig erscheint, nachdem der Cursor aufgehört hat, sich über das Bild zu bewegen. Während dies dem Benutzer zusätzliche Informationen liefern _kann_, sollten Sie nicht davon ausgehen, dass der Benutzer es jemals sehen wird: der Benutzer hat möglicherweise nur eine Tastatur oder einen Touchscreen. Wenn Sie Informationen haben, die besonders wichtig oder wertvoll für den Benutzer sind, präsentieren Sie sie inline mit einer der oben erwähnten Methoden anstelle der Verwendung von `title`.

- [Verwendung des HTML title-Attributs – aktualisiert | The Paciello Group](https://www.tpgi.com/using-the-html-title-attribute-updated/)

## Beispiele

### Alternativer Text

Das folgende Beispiel bettet ein Bild in die Seite ein und enthält alternativen Text für Barrierefreiheit.

```html
<img src="/shared-assets/images/examples/favicon144.png" alt="MDN" />
```

{{ EmbedLiveSample('Alternative_text', '100%', '160') }}

### Bild-Link

Dieses Beispiel baut auf dem vorherigen auf und zeigt, wie man das Bild in einen Link verwandelt. Dazu wird das `<img>`-Tag innerhalb des {{HTMLElement("a")}}-Elements verschachtelt. Sie sollten den alternativen Text so gestalten, dass er die Ressource beschreibt, auf die der Link zeigt, als ob Sie einen Textlink verwenden würden.

```html
<a href="https://developer.mozilla.org">
  <img
    src="/shared-assets/images/examples/favicon144.png"
    alt="Visit the MDN site" />
</a>
```

{{ EmbedLiveSample('Image_link', '100%', '160') }}

### Verwendung des srcset-Attributs

In diesem Beispiel fügen wir ein `srcset`-Attribut mit einem Verweis auf eine hochauflösende Version des Logos ein; dies wird anstelle des `src`-Bildes auf hochauflösenden Geräten geladen. Das im `src`-Attribut referenzierte Bild wird als `1x`-Kandidat in {{Glossary("User_agent", "Benutzeragenten")}} gezählt, die `srcset` unterstützen.

```html
<img
  src="/shared-assets/images/examples/favicon72.png"
  alt="MDN"
  srcset="/shared-assets/images/examples/favicon144.png 2x" />
```

{{EmbedLiveSample("Using_the_srcset_attribute", "100%", "160")}}

### Verwendung der srcset- und sizes-Attribute

Das `src`-Attribut wird in {{Glossary("User_agent", "Benutzeragenten")}} ignoriert, die `srcset` unterstützen, wenn `w`-Beschreiber enthalten sind. Wenn die `(width <= 600px)`-Medienbedingung übereinstimmt, wird das 200 Pixel breite Bild geladen (es ist dasjenige, das `200px` am besten entspricht), andernfalls wird das andere Bild geladen.

```html
<img
  src="clock-demo-200px.png"
  alt="The time is 12:45."
  srcset="clock-demo-200px.png 200w, clock-demo-400px.png 400w"
  sizes="(width <= 600px) 200px, 50vw" />
```

{{EmbedLiveSample("Using_the_srcset_and_sizes_attributes", "100%", 350)}}

> [!NOTE]
> Um die Größenänderung in Aktion zu sehen, {{LiveSampleLink('Using_the_srcset_and_sizes_attributes', 'sehen Sie sich das Beispiel auf einer separaten Seite an')}}, damit Sie den Inhaltsbereich tatsächlich ändern können.

## Sicherheits- und Datenschutzbedenken

Obwohl `<img>`-Elemente unschuldige Verwendungen haben, können sie unerwünschte Folgen für die Sicherheit und Privatsphäre von Benutzern haben. Weitere Informationen und Gegenmaßnahmen finden Sie unter [Referer-Header: Datenschutz- und Sicherheitsbedenken](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns).

## Technische Übersicht

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
          >Phrasierungsinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#embedded_content"
          >eingebetteter Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#palpable_content"
          >bekannter Inhalt</a
        >. Wenn das Element ein `usemap`-Attribut hat, gehört es auch zur interaktiven Inhaltskategorie.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "leeres Element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
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
            mit nicht leerem `alt`-Attribut oder keinem
            `alt`-Attribut:
            <code
              ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/img_role"
                ><code>img</code></a
              ></code
            >
          </li>
          <li>
            mit leerem `alt`-Attribut:
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
            mit nicht leerem `alt`-Attribut:
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
            mit leerem `alt`-Attribut, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/none_role"><code>none</code></a>
            oder <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a>
          </li>
          <li>
            wenn kein `alt`-Attribut vorhanden ist, ist keine `role` zulässig
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
- [Responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images)
