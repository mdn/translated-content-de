---
title: "<img>: Das Bildeinbettungselement"
slug: Web/HTML/Reference/Elements/img
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
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

- Das `src` Attribut hält den Pfad zu dem Bild, das Sie einbetten möchten. Es ist nicht zwingend erforderlich, wenn das [srcset](/de/docs/Web/API/HTMLImageElement/srcset) Attribut verfügbar ist. Jedoch muss mindestens eines der Attribute `src` oder `srcset` angegeben werden.
- Das `alt` Attribut enthält einen Text, der das Bild ersetzt, was verpflichtend und **außerordentlich nützlich** für die Barrierefreiheit ist — Screenreader lesen den Wert des Attributs ihren Benutzern vor, damit diese wissen, was das Bild bedeutet. Alt-Text wird auch auf der Seite angezeigt, wenn das Bild aus irgendeinem Grund nicht geladen werden kann: Beispielsweise bei Netzwerkfehlern, Inhaltsblockierung oder Linkverfall.

Es gibt viele andere Attribute, um verschiedene Zwecke zu erfüllen:

- [Referrer](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy)/{{Glossary("CORS", "CORS")}} Kontrolle für Sicherheit und Privatsphäre: siehe [`crossorigin`](#crossorigin) und [`referrerpolicy`](#referrerpolicy).
- Verwenden Sie sowohl [`width`](#width) als auch [`height`](#height), um die intrinsische Größe des Bildes festzulegen, sodass es vor dem Laden Platz einnimmt, um Inhaltsschiebeeffekte zu mindern.
- Hinweise zu responsiven Bildern mit [`sizes`](#sizes) und [`srcset`](#srcset) (siehe auch das {{htmlelement("picture")}} Element und unser [Responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images) Tutorial).

## Unterstützte Bildformate

Der HTML-Standard listet nicht auf, welche Bildformate unterstützt werden sollen, daher können {{Glossary("user_agent", "User Agents")}} unterschiedliche Formate unterstützen.

> [!NOTE]
> Der [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types) bietet umfassende Informationen über Bildformate und deren Unterstützung durch Webbrowser.
> Dieser Abschnitt ist nur eine Zusammenfassung!

Die auf dem Web am häufigsten verwendeten Bilddateiformate sind:

- [APNG (Animated Portable Network Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#apng_animated_portable_network_graphics) — Gute Wahl für verlustfreie Animationssequenzen (GIF ist weniger performant)
- [AVIF (AV1 Image File Format)](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) — Gute Wahl für sowohl Bilder als auch animierte Bilder aufgrund hoher Leistung.
- [GIF (Graphics Interchange Format)](/de/docs/Web/Media/Guides/Formats/Image_types#gif_graphics_interchange_format) — Gute Wahl für _einfache_ Bilder und Animationen.
- [JPEG (Joint Photographic Expert Group image)](/de/docs/Web/Media/Guides/Formats/Image_types#jpeg_joint_photographic_experts_group_image) — Gute Wahl für verlustbehaftete Komprimierung von Standbildern (derzeit das beliebteste).
- [PNG (Portable Network Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#png_portable_network_graphics) — Gute Wahl für verlustfreie Komprimierung von Standbildern (etwas bessere Qualität als JPEG).
- [SVG (Scalable Vector Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#svg_scalable_vector_graphics) — Vektorbildformat. Verwenden Sie es für Bilder, die in verschiedenen Größen exakt gezeichnet werden müssen.
- [WebP (Web Picture format)](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) — Hervorragende Wahl für sowohl Bilder als auch animierte Bilder.

Formate wie [WebP](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) und [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) werden empfohlen, da sie sowohl bei Stand- als auch bei animierten Bildern viel besser abschneiden als PNG, JPEG und GIF.

SVG bleibt das empfohlene Format für Bilder, die in verschiedenen Größen exakt gezeichnet werden müssen.

## Fehler beim Laden von Bildern

Wenn beim Laden oder Rendern eines Bildes ein Fehler auftritt und ein `onerror` Ereignis-Handler für das [`error`](/de/docs/Web/API/HTMLElement/error_event) Ereignis festgelegt wurde, wird dieser Ereignis-Handler aufgerufen. Dies kann in verschiedenen Situationen passieren, einschließlich:

- Die `src` oder `srcset` Attribute sind leer (`""`) oder `null`.
- Die `src` {{Glossary("URL", "URL")}} ist identisch mit der URL der Seite, auf der sich der Benutzer derzeit befindet.
- Das Bild ist in einer Weise beschädigt, die es verhindert, dass es geladen wird.
- Die Metadaten des Bildes sind in einer Weise beschädigt, dass es unmöglich ist, seine Abmessungen zu ermitteln, und keine Abmessungen in den Attributen des `<img>` Elements angegeben wurden.
- Das Bild ist in einem von dem {{Glossary("user_agent", "User Agent")}} nicht unterstützten Format.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- [`alt`](/de/docs/Web/API/HTMLImageElement/alt#usage_notes)

  - : Definiert einen Text, der das Bild auf der Seite ersetzen kann.

    > [!NOTE]
    > Browser zeigen nicht immer Bilder an. Es gibt eine Reihe von Situationen, in denen ein Browser möglicherweise keine Bilder anzeigt, wie zum Beispiel:
    >
    > - Nicht-visuelle Browser (wie diejenigen, die von Menschen mit Sehbehinderungen verwendet werden)
    > - Der Benutzer entscheidet sich, Bilder nicht anzuzeigen (um Bandbreite zu sparen oder aus Datenschutzgründen)
    > - Das Bild ist ungültig oder ein [nicht unterstützter Typ](#unterstützte_bildformate)
    >
    > In diesen Fällen kann der Browser das Bild durch den Text im `alt` Attribut des Elements ersetzen. Aus diesen und anderen Gründen sollte, wann immer möglich, ein sinnvoller Wert für `alt` bereitgestellt werden.

    Das Festlegen dieses Attributs auf einen leeren String (`alt=""`) zeigt an, dass dieses Bild _nicht_ ein wesentlicher Bestandteil des Inhalts ist (es ist Dekoration oder ein Tracking-Pixel) und dass nicht-visuelle Browser es möglicherweise vom {{Glossary("Engine/Rendering", "Rendering")}} ausschließen. Visuelle Browser verbergen auch das gebrochene Bildsymbol, wenn das `alt` Attribut leer ist und das Bild nicht angezeigt werden konnte.

    Dieses Attribut wird auch verwendet, wenn das Bild in Text kopiert und eingefügt oder ein verlinktes Bild zu einem Lesezeichen hinzugefügt wird.

- `attributionsrc` {{experimental_inline}}

  - : Gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}} Header zusammen mit der Bildanfrage sendet.

    Serverseitig wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}} oder {{httpheader("Attribution-Reporting-Register-Trigger")}} Headers in der Antwort auszulösen, um eine bildbasierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#html-based_event_sources) oder einen [Attributionstrigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#html-based_attribution_triggers) zu registrieren. Welcher Antwortheader zurückgesendet werden soll, hängt von dem Wert des `Attribution-Reporting-Eligible` Headers ab, der die Registrierung ausgelöst hat.

    Das entsprechende Quell- oder Triggerereignis wird ausgelöst, sobald der Browser die Antwort erhält, die die Bilddatei enthält.

    > [!NOTE]
    > Weitere Details finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

    Es gibt zwei Versionen dieses Attributs, die Sie festlegen können:

    - Boolean, d.h. nur der `attributionsrc` Name. Dies gibt an, dass der {{httpheader("Attribution-Reporting-Eligible")}} Header an denselben Server wie das `src` Attribut gesendet werden soll. Dies ist in Ordnung, wenn Sie die Registrierung der Attributionsquelle oder des Triggers auf demselben Server verwalten. Bei der Registrierung eines Attributionstriggers ist diese Eigenschaft optional, und es wird ein Booleanwert verwendet, wenn sie weggelassen wird.
    - Wert, der eine oder mehrere URLs enthält, zum Beispiel:

    ```html
    <img
      src="image-file.png"
      alt="My image file description"
      attributionsrc="https://a.example/register-source
                         https://b.example/register-source" />
    ```

    Dies ist nützlich in Fällen, in denen die angeforderte Ressource nicht auf einem Server ist, den Sie kontrollieren, oder wenn Sie die Registrierung der Attributionsquelle auf einem anderen Server verwalten möchten. In diesem Fall können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcenanfrage erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}} Header zusätzlich zum Ursprungsort der Ressource an die in `attributionSrc` angegebenen URL(s) gesendet. Diese URLs können dann mit einem {{httpheader("Attribution-Reporting-Register-Source")}} oder {{httpheader("Attribution-Reporting-Register-Trigger")}} Header entsprechend reagieren, um die Registrierung zu vervollständigen.

    > [!NOTE]
    > Die Angabe mehrerer URLs bedeutet, dass mehrere Attributionsquellen auf derselben Funktion registriert werden können. Sie könnten beispielsweise unterschiedliche Kampagnen haben, deren Erfolg Sie messen möchten, was das Erstellen verschiedener Berichte zu unterschiedlichen Daten beinhaltet.

- [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)

  - : Gibt an, ob das Abrufen des Bildes unter Verwendung einer {{Glossary("CORS", "CORS")}}-Anfrage erfolgen muss. Bilddaten aus einem [CORS-aktivierten Bild](/de/docs/Web/HTML/How_to/CORS_enabled_image), das aus einer CORS-Anfrage zurückkehrt, können im {{HTMLElement("canvas")}} Element ohne Markierung als "[verunreinigt](/de/docs/Web/HTML/How_to/CORS_enabled_image#security_and_tainted_canvases)" wiederverwendet werden.

    Wenn das `crossorigin` Attribut _nicht_ angegeben ist, wird eine Nicht-CORS-Anfrage gesendet (ohne den {{httpheader("Origin")}} Anfrage-Header), und der Browser markiert das Bild als verunreinigt und schränkt den Zugriff auf seine Bilddaten ein, wodurch die Nutzung in {{HTMLElement("canvas")}} Elementen verhindert wird.

    Wenn das `crossorigin` Attribut _angegeben_ ist, dann wird eine CORS-Anfrage gesendet (mit dem {{httpheader("Origin")}} Anfrage-Header); aber wenn der Server nicht zustimmt, den Zugriff auf die Bilddaten durch die Ursprungsseite zuzulassen (indem er keinen {{httpheader("Access-Control-Allow-Origin")}} Antwortheader sendet oder indem er die Ursprungsseite nicht in einen {{httpheader("Access-Control-Allow-Origin")}} Antwortheader aufnimmt, den er sendet), blockiert der Browser das Laden des Bildes und protokolliert einen CORS-Fehler in der Entwicklerkonsole.

    Zulässige Werte:

    - `anonymous`
      - : Eine CORS-Anfrage wird ohne Anmeldeinformationen gesendet (d.h. ohne {{Glossary("cookie", "Cookies")}}, [X.509 Zertifikate](https://datatracker.ietf.org/doc/html/rfc5280) oder {{httpheader("Authorization")}} Anfrage-Header).
    - `use-credentials`
      - : Die CORS-Anfrage wird mit allen Anmeldeinformationen gesendet (d.h. Cookies, X.509-Zertifikate und der `Authorization` Anfrage-Header). Wenn der Server nicht zustimmt, Anmeldeinformationen mit der Ursprungsseite zu teilen (indem er den `Access-Control-Allow-Credentials: true` Antwortheader nicht zurücksendet), markiert der Browser das Bild als verunreinigt und schränkt den Zugriff auf seine Bilddaten ein.

    Wenn das Attribut einen ungültigen Wert hat, behandeln Browser es so, als wäre der `anonymous`-Wert verwendet worden. Weitere Informationen finden Sie unter [CORS-Einstellungen-Attribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin).

- `decoding`

  - : Dieses Attribut gibt dem Browser einen Hinweis darauf, ob das Bilddekodieren zusammen mit dem Rendern des anderen DOM-Inhalts in einem einzigen Präsentationsschritt, der "korrekter" aussieht (`sync`), oder das Rendern und Präsentieren des anderen DOM-Inhalts zuerst und dann das Bild zu dekodieren und später zu präsentieren (`async`) durchgeführt werden sollte. In der Praxis bedeutet `async`, dass das nächste Bild nicht auf die Dekodierung des Bildes wartet.

    Es ist oft schwer, einen spürbaren Effekt beim Verwenden von `decoding` bei statischen `<img>` Elementen wahrzunehmen. Sie werden wahrscheinlich zunächst als leere Bilder gerendert, während die Bilddateien (entweder aus dem Netzwerk oder aus dem Cache) geladen und dann unabhängig voneinander verarbeitet werden, sodass das "Synchronisieren" von Inhaltsaktualisierungen weniger offensichtlich ist. Das Blockieren des Renderns während des Dekodierens kann jedoch gemessen werden — auch wenn es mit bloßem Auge schwer zu beobachten ist. Weitere Details finden Sie unter [Was macht das Dekodierattribut für Bilder tatsächlich?](https://www.tunetheweb.com/blog/what-does-the-image-decoding-attribute-actually-do/) (tunetheweb.com, 2023).

    Die Verwendung verschiedener `decoding`-Typen kann zu deutlicheren Unterschieden führen, wenn `<img>` Elemente dynamisch über JavaScript in das DOM eingefügt werden — siehe [`HTMLImageElement.decoding`](/de/docs/Web/API/HTMLImageElement/decoding) für weitere Details.

    Zulässige Werte:

    - `sync`
      - : Dekodieren Sie das Bild synchron zusammen mit dem Rendern des anderen DOM-Inhalts und präsentieren Sie alles zusammen.
    - `async`
      - : Dekodieren Sie das Bild asynchron, nach dem Rendern und Präsentieren des anderen DOM-Inhalts.
    - `auto`
      - : Keine Präferenz für den Dekodierungsmodus; der Browser entscheidet, was am besten für den Benutzer ist. Dies ist der Standardwert.

- [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming)

  - : Markiert das Bild zur Beobachtung durch die [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming) API. Der angegebene Wert wird zu einem Bezeichner für das beobachtete Bildelement. Siehe auch die [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming) Attributseite.

- `fetchpriority`

  - : Bietet einen Hinweis auf die relative Priorität, die beim Abrufen des Bildes verwendet werden soll.
    Zulässige Werte:

    - `high`
      - : Abrufen des Bildes mit hoher Priorität im Verhältnis zu anderen Bildern.
    - `low`
      - : Abrufen des Bildes mit niedriger Priorität im Verhältnis zu anderen Bildern.
    - `auto`
      - : Keine Präferenz für die Abrufpriorität festlegen.
        Dies ist der Standard.
        Er wird verwendet, wenn kein Wert oder ein ungültiger Wert festgelegt wurde.

    Weitere Informationen finden Sie unter [`HTMLImageElement.fetchPriority`](/de/docs/Web/API/HTMLImageElement/fetchPriority).

- `height`

  - : Die intrinsische Höhe des Bildes in Pixeln. Muss eine ganze Zahl ohne Einheit sein.

    > [!NOTE]
    > Das Einbeziehen von `height` und [`width`](#width) ermöglicht es dem Browser, das {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Bildes vor dem Laden zu berechnen. Dieses Seitenverhältnis wird verwendet, um den Platz zu reservieren, der benötigt wird, um das Bild darzustellen und die Verschiebung des Inhalts zu reduzieren oder sogar zu verhindern, wenn das Bild heruntergeladen und auf dem Bildschirm angezeigt wird. Die Reduzierung von Verschiebeeffekten ist ein wesentlicher Bestandteil einer guten Benutzererfahrung und Webleistung.

- `ismap`

  - : Dieses Booleanattribut gibt an, dass das Bild Teil einer [serverseitigen Karten](https://en.wikipedia.org/wiki/Image_map#Server-side) ist. In diesem Fall werden die Koordinaten, an denen der Benutzer auf das Bild geklickt hat, an den Server gesendet.

    > [!NOTE]
    > Dieses Attribut ist nur zulässig, wenn das `<img>` Element ein Nachkomme eines {{htmlelement("a")}} Elements mit einem gültigen [`href`](/de/docs/Web/HTML/Reference/Elements/a#href) Attribut ist. Dies gibt Benutzern ohne Punktiergeräte ein Ausweichziel.

- `loading`

  - : Gibt an, wie der Browser das Bild laden soll:

    - `eager`
      - : Lädt das Bild sofort, unabhängig davon, ob sich das Bild derzeit im sichtbaren Sichtfenster befindet (dies ist der Standardwert).
    - `lazy`
      - : Verzögert das Laden des Bildes, bis es eine berechnete Entfernung zum Sichtfenster erreicht, wie vom Browser definiert. Die Absicht ist, den Netzwerknutzungs- und Speicherbedarf zu vermeiden, bis es vernünftigerweise sicher ist, dass es benötigt wird. Dies verbessert in der Regel die Leistung der Inhalte in den meisten typischen Anwendungsfällen.

    > [!NOTE]
    > Das Laden wird nur verzögert, wenn JavaScript aktiviert ist. Dies ist eine Tracking-Schutzmaßnahme, da, wenn ein Benutzagent das verzögerte Laden unterstützt, während das Script deaktiviert ist, es immer noch möglich wäre, dass eine Seite die ungefähre Scrollposition eines Benutzers während einer Sitzung durch strategisches Platzieren von Bildern in einem Seitenmarkup verfolgen kann, sodass ein Server verfolgen kann, wie viele Bilder angefordert werden und wann.

    > [!NOTE]
    > Bilder mit `loading` auf `lazy` gesetzt werden niemals geladen, wenn sie keinen sichtbaren Teil eines Elements schneiden, selbst wenn das Laden sie ändern würde, da nicht geladene Bilder eine `width` und `height` von `0` haben. Das Hinzufügen von `width` und `height` zu verzögert geladenen Bildern behebt dieses Problem und ist eine Best Practice, [vom Standard empfohlen](https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element). Dies hilft auch, Layoutverschiebungen zu verhindern.

- `referrerpolicy`

  - : Ein String, der angibt, welchen Referrer beim Abrufen der Ressource verwendet werden soll:

    - `no-referrer`: Der {{HTTPHeader("Referer")}} Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}} Header wird nicht an {{Glossary("origin", "Origin")}}s ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`: Der gesendete Referrer wird auf den Ursprung der referenzierenden Seite beschränkt: seine [Scheme](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`: Der zu anderen Ursprüngen gesendete Referrer wird auf das Schema, den Host und den Port beschränkt. Navigationen im gleichen Ursprung enthalten weiterhin den Pfad.
    - `same-origin`: Ein Referrer wird für {{Glossary("Same-origin_policy", "gleicher Ursprung")}} gesendet, aber bei Cross-Origin-Anfragen wird keine Referrer-Information enthalten sein.
    - `strict-origin`: Nur den Ursprung des Dokuments als Referrer senden, wenn die Protokollsicherheitsstufe gleich bleibt (HTTPS→HTTPS), aber nicht an ein weniger sicheres Ziel senden (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard): Eine vollständige URL bei einer gleichwertigen Ursprungsanfrage senden, nur den Ursprung senden, wenn die Protokollsicherheitsstufe gleich bleibt (HTTPS→HTTPS), und keinen Header an ein weniger sicheres Ziel senden (HTTPS→HTTP).
    - `unsafe-url`: Der Referrer enthält den Ursprung _und_ den Pfad (jedoch nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder [Benutzername](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützen Ressourcen an unsichere Ursprüngen leakt.

- `sizes`

  - : Einer oder mehrere Strings, getrennt durch Kommata, die eine Menge von Quellengrößen anzeigen. Jede Quellengröße besteht aus:

    1. Einer [Medienbedingung](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#syntax). Diese muss für den letzten Eintrag in der Liste weggelassen werden.
    2. Einem Quellengrößenwert.

    Medienbedingungen beschreiben Eigenschaften des _Viewports_, nicht des _Bildes_. Zum Beispiel, `(max-height: 500px) 1000px` schlägt vor, eine Quelle mit 1000px Breite zu verwenden, wenn der _Viewport_ nicht höher als 500px ist. Da ein Quellengrößen-Deskriptor verwendet wird, um die Breite während des Layouts der Seite anzugeben, basiert die Medienbedingung typischerweise (aber nicht notwendigerweise) auf der [Breiten-](/de/docs/Web/CSS/@media/width) Information.

    Quellengrößenwerte geben die beabsichtigte Anzeigengröße des Bildes an. {{Glossary("User_agent", "User Agents")}} verwenden die aktuelle Quellengröße, um eine der Quellen auszuwählen, die durch das `srcset` Attribut bereitgestellt werden, wenn diese Quellen mit Breiten- (`w`) Deskriptoren beschrieben werden. Die ausgewählte Quellengröße beeinflusst die {{Glossary("intrinsic_size", "intrinsische Größe")}} des Bildes (die Anzeigengröße des Bildes, wenn keine {{Glossary("CSS", "CSS")}} Stilierung angewendet wird). Wenn das `srcset` Attribut nicht vorhanden ist oder keine Werte mit einem Breiten-Deskriptor enthält, hat das `sizes` Attribut keine Wirkung.

    Ein Quellengrößenwert kann eine beliebige nicht-negative [Länge](/de/docs/Web/CSS/length) sein. Es dürfen keine CSS-Funktionen außer den [Mathe-Funktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#math_functions) verwendet werden. Einheiten werden in derselben Weise wie für [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries) interpretiert, was bedeutet, dass alle relativen Längeneinheiten relativ zur Dokumentwurzel und nicht zum `<img>` Element sind, sodass ein `em` Wert relativ zur Schriftgröße der Wurzel und nicht zur Schriftgröße des Bildes ist. [Prozentsatz](/de/docs/Web/CSS/percentage) Werte sind nicht erlaubt.

    Das `sizes` Attribut akzeptiert auch die folgenden Schlüsselwortwerte:

    - `auto`

      - : `auto` kann die gesamte Liste der Größen oder den ersten Eintrag in der Liste ersetzen. Es ist nur gültig in Kombination mit `loading="lazy"` und löst sich auf die [konkrete Größe](/de/docs/Web/CSS/image) des Bildes auf. Da die intrinsische Größe des Bildes noch nicht bekannt ist, sollten `width` und `height` Attribute (oder CSS-Äquivalente) ebenfalls angegeben werden, um [zu verhindern, dass der Browser eine Standardbreite von 300px annimmt](https://html.spec.whatwg.org/multipage/images.html#sizes-attributes:attr-dim-width).

- `src`
  - : Die Bild-{{Glossary("URL", "URL")}}. Pflichtangabe für das `<img>` Element. In {{Glossary("Browser", "Browsern")}}, die `srcset` unterstützen, wird `src` als ein Kandidatenbild mit einem Pixeldichtedeskriptor `1x` behandelt, es sei denn, ein Bild mit diesem Pixeldichtedeskriptor ist bereits in `srcset` definiert oder `srcset` enthält `w` Deskriptoren.
- `srcset`

  - : Einer oder mehrere Strings, getrennt durch Kommata, die mögliche Bildquellen für den {{Glossary("user_agent", "User Agent")}} angeben, die er verwenden soll. Jeder String besteht aus:

    1. Einer {{Glossary("URL", "URL")}} zu einem Bild
    2. Optional, Leerzeichen gefolgt von einem der folgenden:

       - Einem Breiten-Deskriptor (eine positive ganze Zahl direkt gefolgt von `w`). Der Breiten-Deskriptor wird durch die Quellengröße im `sizes` Attribut geteilt, um die effektive Pixeldichte zu berechnen.
       - Einem Pixeldichte-Deskriptor (eine positive Fließkommazahl direkt gefolgt von `x`).

    Wenn kein Deskriptor angegeben ist, wird der Quelle der Standarddeskriptor von `1x` zugewiesen.

    Es ist falsch, Breiten-Deskriptoren und Pixeldichte-Deskriptoren im gleichen `srcset` Attribut zu mischen. Doppelte Deskriptoren (zum Beispiel zwei Quellen im gleichen `srcset`, die beide mit `2x` beschrieben sind) sind ebenfalls ungültig.

    Wenn das `srcset` Attribut Breiten-Deskriptoren verwendet, muss das `sizes` Attribut ebenfalls vorhanden sein, andernfalls wird das `srcset` ignoriert.

    Der User Agent wählt eine der verfügbaren Quellen nach eigenem Ermessen aus. Dies gibt ihnen erheblichen Spielraum, ihre Auswahl basierend auf Dingen wie Benutzerpräferenzen oder {{Glossary("bandwidth", "Bandbreite")}} Bedingungen anzupassen. Siehe unser [Responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images) Tutorial für ein Beispiel.

- `width`
  - : Die intrinsische Breite des Bildes in Pixeln. Muss eine ganze Zahl ohne Einheit sein.
- `usemap`

  - : Die partielle {{Glossary("URL", "URL")}} (beginnend mit `#`) einer [Bildkarte](/de/docs/Web/HTML/Reference/Elements/map), die mit dem Element verbunden ist.

    > [!NOTE]
    > Sie können dieses Attribut nicht verwenden, wenn sich das `<img>` Element innerhalb eines {{htmlelement("a")}} oder {{HTMLElement("button")}} Elements befindet.

### Veraltete Attribute

- `align` {{deprecated_inline}}

  - : Richtet das Bild im Kontext aus. Verwenden Sie die {{cssxref('float')}} und/oder {{cssxref('vertical-align')}} {{Glossary("CSS", "CSS")}} Eigenschaften anstelle dieses Attributs. Zulässige Werte:

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
  - : Die Breite eines Rahmens um das Bild. Verwenden Sie die {{cssxref('border')}} {{Glossary("CSS", "CSS")}} Eigenschaft stattdessen.
- `hspace` {{deprecated_inline}}
  - : Die Anzahl der Pixel von weißem Raum links und rechts vom Bild. Verwenden Sie die {{cssxref('margin')}} CSS Eigenschaft stattdessen.
- `longdesc` {{deprecated_inline}}

  - : Ein Link zu einer detaillierteren Beschreibung des Bildes. Mögliche Werte sind eine {{Glossary("URL", "URL")}} oder ein Element [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id).

    > [!NOTE]
    > Dieses Attribut wird in der [HTML Spezifikation](https://html.spec.whatwg.org/multipage/obsolete.html#element-attrdef-img-longdesc) als veraltet angesehen. Es hat eine ungewisse Zukunft; Autoren sollten eine {{Glossary("WAI", "WAI")}}-{{Glossary("ARIA", "ARIA")}} Alternative verwenden, wie zum Beispiel [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) oder [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details).

- `name` {{deprecated_inline}}
  - : Ein Name für das Element. Verwenden Sie stattdessen das [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) Attribut.
- `vspace` {{deprecated_inline}}
  - : Die Anzahl der Pixel von weißem Raum über und unter dem Bild. Verwenden Sie die {{cssxref('margin')}} CSS Eigenschaft stattdessen.

## Styling mit CSS

`<img>` ist ein {{Glossary("replaced_elements", "ersetztes Element")}}; es hat einen {{cssxref("display")}} Wert von `inline` standardmäßig, aber seine Standardabmessungen sind durch die intrinsischen Werte des eingebetteten Bildes definiert, als wäre es `inline-block`. Sie können Eigenschaften wie {{cssxref("border")}}/{{cssxref("border-radius")}}, {{cssxref("padding")}}/{{cssxref("margin")}}, {{cssxref("width")}}, {{cssxref("height")}}, etc. auf einem Bild setzen.

`<img>` hat keine Baseline, daher werden Bilder beim Gebrauch in einem Inline-Layout-Kontext mit {{cssxref("vertical-align", "vertical-align: baseline")}} an der Unterseite auf die Text-Baseline gesetzt.

Sie können die {{cssxref("object-position")}} Eigenschaft verwenden, um das Bild innerhalb des Elementkastens zu positionieren, und die {{cssxref("object-fit")}} Eigenschaft, um die Größenanpassung des Bildes innerhalb des Kastens einzustellen (zum Beispiel, ob das Bild passen oder den Kasten füllen soll, selbst wenn ein Beschnitt erforderlich ist).

Abhängig von seinem Typ kann ein Bild eine intrinsische Breite und Höhe haben. Für einige Bildtypen sind jedoch keine intrinsischen Dimensionen erforderlich. {{Glossary("SVG", "SVG")}} Bilder haben zum Beispiel keine intrinsischen Dimensionen, wenn ihr Wurzel {{SVGElement("svg")}} Element keine `width` oder `height` darauf gesetzt hat.

## Barrierefreiheit

### Bedeutungsvolle alternative Beschreibungen erstellen

Der Wert eines `alt` Attributs sollte einen klaren und knappen Textersatz für den Inhalt des Bildes bereitstellen. Er sollte nicht das Vorhandensein des Bildes selbst oder den Dateinamen des Bildes beschreiben. Wenn das `alt` Attribut absichtlich weggelassen wird, weil das Bild kein textliches Äquivalent hat, sollten alternative Methoden in Betracht gezogen werden, um das darzustellen, was das Bild vermitteln soll.

#### Don't

```html example-bad
<img alt="image" src="penguin.jpg" />
```

#### Do

```html example-good
<img alt="A Penguin on a beach." src="penguin.jpg" />
```

Ein wichtiger Barrierefreiheitstest besteht darin, den Inhalt des `alt` Attributs zusammen mit vorangegangenem Textinhalt zu lesen, um zu sehen, ob es dieselbe Bedeutung wie das Bild vermittelt. Zum Beispiel, wenn das Bild durch die Aussage "Auf meinen Reisen sah ich ein niedliches kleines Tier:" vorausgegangen ist, könnte das _Don't_ Beispiel von einem Screenreader als "Auf meinen Reisen sah ich ein niedliches kleines Tier: Bild" gelesen werden, was keinen Sinn ergibt. Das _Do_ Beispiel könnte von einem Screenreader als "Auf meinen Reisen sah ich ein niedliches kleines Tier: Ein Pinguin am Strand." gelesen werden, was Sinn ergibt.

Für Bilder, die eine Aktion auslösen sollen, zum Beispiel Bilder, die in einem {{htmlelement("a")}} oder {{htmlelement("button")}} Element verschachtelt sind, sollte in Erwägung gezogen werden, die ausgelöste Aktion im Wert des `alt` Attributs zu beschreiben. Zum Beispiel könnte `alt="nächste Seite"` anstelle von `alt="Pfeil rechts"` geschrieben werden. Man könnte auch in Erwägung ziehen, eine zusätzliche Beschreibung in einem optionalen `title` Attribut hinzuzufügen; dies kann von Screenreadern auf Anfrage des Benutzers vorgelesen werden.

Wenn ein `alt` Attribut bei einem Bild fehlt, könnten einige Screenreader den Dateinamen des Bildes stattdessen ankündigen. Dies kann eine verwirrende Erfahrung sein, wenn der Dateiname nicht repräsentativ für den Inhalt des Bildes ist.

- [Ein alt Entscheidung-Baum • Bilder • WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/images/decision-tree/)
- [Alt-Texte: Der ultimative Leitfaden — Axess Lab](https://axesslab.com/alt-texts/)
- [Wie man großartigen Alt-Text gestaltet: Eine Einführung | Deque](https://www.deque.com/blog/great-alt-text-introduction/)
- [MDN Verständnis von WCAG, Richtlinien 1.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Erklärungen zum Erfolgsmaßstab 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

### SVG als Bild identifizieren

Aufgrund eines [VoiceOver Bugs](https://webkit.org/b/216364) kündigt VoiceOver SVG Bilder nicht korrekt als Bilder an. Schließen Sie [`role="img"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/img_role) in alle `<img>` Elemente mit SVG Quell-Dateien ein, um sicherzustellen, dass unterstützende Technologien das SVG korrekt als Bildinhalt ankündigen.

```html
<img src="mdn.svg" alt="MDN" role="img" />
```

### Das title Attribut

Das [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title) Attribut ist kein akzeptabler Ersatz für das `alt` Attribut. Zusätzlich sollte vermieden werden, den Wert des `alt` Attributs in einem `title` Attribut zu duplizieren, das auf dasselbe Bild deklariert wird. Dies könnte dazu führen, dass einige Screenreader den gleichen Text zweimal ankündigen, was eine verwirrende Erfahrung schafft.

Das `title` Attribut sollte auch nicht als ergänzende Beschriftungsinformation verwendet werden, um die `alt` Beschreibung eines Bildes zu begleiten. Wenn ein Bild eine Beschriftung benötigt, verwenden Sie die [`figure`](/de/docs/Web/HTML/Reference/Elements/figure) und [`figcaption`](/de/docs/Web/HTML/Reference/Elements/figcaption) Elemente.

Der Wert des `title` Attributs wird dem Benutzer normalerweise als Tooltip präsentiert, der erscheint, kurz nachdem der Cursor aufgehört hat, sich über das Bild zu bewegen. Während dies dem Benutzer zusätzliche Informationen bieten _kann_, sollten Sie nicht davon ausgehen, dass der Benutzer es jemals sieht: Der Benutzer könnte nur über Tastatur oder Touchscreen verfügen. Wenn Sie Informationen haben, die für den Benutzer besonders wichtig oder wertvoll sind, präsentieren Sie sie inline mit einer der oben genannten Methoden, anstatt `title` zu verwenden.

- [Die Verwendung des HTML title Attributs – aktualisiert | The Paciello Group](https://www.tpgi.com/using-the-html-title-attribute-updated/)

## Beispiele

### Alternativer Text

Das folgende Beispiel bettet ein Bild in die Seite ein und enthält alternativen Text für die Barrierefreiheit.

```html
<img src="/shared-assets/images/examples/favicon144.png" alt="MDN" />
```

{{ EmbedLiveSample('Alternative_text', '100%', '160') }}

### Bildlink

Dieses Beispiel baut auf dem vorherigen auf und zeigt, wie man das Bild in einen Link verwandelt. Um dies zu tun, verschachteln Sie das `<img>` Tag innerhalb von {{HTMLElement("a")}}. Sie sollten den alternativen Text so beschreiben, dass er die Ressource beschreibt, auf die der Link zeigt, als ob Sie stattdessen einen Textlink verwenden würden.

```html
<a href="https://developer.mozilla.org">
  <img
    src="/shared-assets/images/examples/favicon144.png"
    alt="Visit the MDN site" />
</a>
```

{{ EmbedLiveSample('Image_link', '100%', '160') }}

### Verwendung des srcset Attributs

In diesem Beispiel fügen wir ein `srcset` Attribut mit einem Verweis auf eine hochauflösende Version des Logos hinzu; diese wird anstelle des `src` Bildes auf hochauflösenden Geräten geladen. Das im `src` Attribut referenzierte Bild wird als `1x` Kandidat in {{Glossary("User_agent", "User Agents")}} berücksichtigt, die `srcset` unterstützen.

```html
<img
  src="/shared-assets/images/examples/favicon72.png"
  alt="MDN"
  srcset="/shared-assets/images/examples/favicon144.png 2x" />
```

{{EmbedLiveSample("Using_the_srcset_attribute", "100%", "160")}}

### Verwendung der srcset und sizes Attribute

Das `src` Attribut wird in {{Glossary("User_agent", "User Agents")}} ignoriert, die `srcset` unterstützen, wenn `w` Deskriptoren enthalten sind. Wenn die `(max-width: 600px)` Medienbedingung zutrifft, wird das 200 Pixel breite Bild geladen (es ist dasjenige, das `200px` am nächsten kommt), andernfalls wird das andere Bild geladen.

```html
<img
  src="clock-demo-200px.png"
  alt="The time is 12:45."
  srcset="clock-demo-200px.png 200w, clock-demo-400px.png 400w"
  sizes="(max-width: 600px) 200px, 50vw" />
```

{{EmbedLiveSample("Using_the_srcset_and_sizes_attributes", "100%", 350)}}

> [!NOTE]
> Um die Größenänderung in Aktion zu sehen, {{LiveSampleLink('Using_the_srcset_and_sizes_attributes', 'betrachten Sie das Beispiel auf einer separaten Seite')}}, damit Sie den Inhaltsbereich tatsächlich ändern können.

## Sicherheits- und Datenschutzbedenken

Obwohl `<img>` Elemente harmlose Verwendungen haben, können sie unerwünschte Folgen für die Sicherheit und den Datenschutz der Benutzer haben. Weitere Informationen und Maßnahmen zur Minderung finden Sie unter [Referer-Header: Datenschutz- und Sicherheitsbedenken](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns).

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
          >Schriftinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#embedded_content"
          >eingebetteter Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#palpable_content"
          >fühlbarer Inhalt</a
        >. Wenn das Element ein <code>usemap</code> Attribut hat, ist es ebenfalls Teil der interaktiven Inhalt-Kategorie.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "leeres Element")}}.</td>
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
      <th scope="row">Impliziertes ARIA-Rolle</th>
      <td>
        <ul>
          <li>
            mit nicht-leerem <code>alt</code> Attribut oder keinem
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
            mit nicht-leerem <code>alt</code> Attribut:
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
            ohne <code>alt</code> Attribut, keine <code>role</code> erlaubt
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
- {{cssxref("object-fit")}}, {{cssxref("object-position")}}, {{cssxref("image-orientation")}}, {{cssxref("image-rendering")}}, und {{cssxref("image-resolution")}}: Bildbezogene CSS Eigenschaften.
- [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) Schnittstelle für dieses Element
- [HTML-Bilder](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images)
- [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types)
- [Responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images)
