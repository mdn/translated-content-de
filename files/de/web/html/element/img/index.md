---
title: "<img>: Das Bildeinbettungs-Element"
slug: Web/HTML/Element/img
l10n:
  sourceCommit: c8ff2398fa61950fe46f2d9155a105c125bfea83
---

{{HTMLSidebar}}

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

- Das `src`-Attribut ist **erforderlich** und enthält den Pfad zu dem Bild, das Sie einbetten möchten.
- Das `alt`-Attribut beinhaltet einen Text, der als Ersatz für das Bild dient. Dies ist obligatorisch und für die Barrierefreiheit **sehr nützlich** — Bildschirmleser lesen den Attributwert vor, damit die Benutzer wissen, was das Bild bedeutet. Alternativtext wird auch auf der Seite angezeigt, wenn das Bild aus irgendeinem Grund nicht geladen werden kann, beispielsweise bei Netzwerkfehlern, Inhaltsblockierung oder Link-Verfall.

Es gibt viele andere Attribute, um verschiedene Zwecke zu erreichen:

- [Referrer](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy)/{{Glossary("CORS", "CORS")}}-Steuerung für Sicherheit und Privatsphäre: siehe [`crossorigin`](#crossorigin) und [`referrerpolicy`](#referrerpolicy).
- Verwenden Sie sowohl [`width`](#width) als auch [`height`](#height), um die intrinsische Größe des Bildes festzulegen, damit es vor dem Laden Platz einnimmt und Layoutverschiebungen reduziert.
- Hinweise für responsive Bilder mit [`sizes`](#sizes) und [`srcset`](#srcset) (siehe auch das {{htmlelement("picture")}}-Element und unser [Leitfaden zu responsiven Bildern](/de/docs/Web/HTML/Responsive_images)).

## Unterstützte Bildformate

Der HTML-Standard gibt nicht an, welche Bildformate unterstützt werden sollen, daher können {{Glossary("user_agent", "User Agents")}} unterschiedliche Formate unterstützen.

> [!NOTE]
> Der [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types) bietet umfassende Informationen über Bildformate und deren Unterstützung durch Webbrowser.
> Dieser Abschnitt ist nur eine Zusammenfassung!

Die am häufigsten im Web verwendeten Bilddateiformate sind:

- [APNG (Animated Portable Network Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#apng_animated_portable_network_graphics) — Gute Wahl für verlustfreie Animationssequenzen (GIF ist weniger performant)
- [AVIF (AV1 Image File Format)](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) — Gute Wahl für sowohl Stand- als auch animierte Bilder aufgrund hoher Leistung.
- [GIF (Graphics Interchange Format)](/de/docs/Web/Media/Guides/Formats/Image_types#gif_graphics_interchange_format) — Gute Wahl für _einfache_ Bilder und Animationen.
- [JPEG (Joint Photographic Expert Group image)](/de/docs/Web/Media/Guides/Formats/Image_types#jpeg_joint_photographic_experts_group_image) — Gute Wahl für verlustbehaftete Komprimierung von Standbildern (derzeit am beliebtesten).
- [PNG (Portable Network Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#png_portable_network_graphics) — Gute Wahl für verlustfreie Komprimierung von Standbildern (etwas bessere Qualität als JPEG).
- [SVG (Scalable Vector Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#svg_scalable_vector_graphics) — Vektorbilderformat. Verwenden Sie es für Bilder, die in verschiedenen Größen genau gezeichnet werden müssen.
- [WebP (Web Picture format)](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) — Hervorragende Wahl für sowohl Stand- als auch animierte Bilder.

Formate wie [WebP](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) und [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) werden empfohlen, da sie viel besser als PNG, JPEG, GIF für sowohl Stand- als auch animierte Bilder funktionieren.

SVG bleibt das empfohlene Format für Bilder, die in unterschiedlichen Größen genau gezeichnet werden müssen.

## Bildladefehler

Wenn ein Fehler beim Laden oder Rendern eines Bildes auftritt und ein `onerror`-Ereignishandler für das [`error`](/de/docs/Web/API/HTMLElement/error_event)-Ereignis festgelegt wurde, wird dieser Ereignishandler aufgerufen. Dies kann in mehreren Situationen passieren, einschließlich:

- Das `src`-Attribut ist leer (`""`) oder `null`.
- Die `src`-{{Glossary("URL", "URL")}} ist die gleiche wie die URL der Seite, auf der sich der Benutzer gerade befindet.
- Das Bild ist in irgendeiner Weise beschädigt, die das Laden verhindert.
- Die Metadaten des Bildes sind so beschädigt, dass das Abrufen der Abmessungen unmöglich ist, und es wurden keine Abmessungen in den Attributen des `<img>`-Elements angegeben.
- Das Bild ist in einem Format, das vom {{Glossary("user_agent", "User Agent")}} nicht unterstützt wird.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- [`alt`](/de/docs/Web/API/HTMLImageElement/alt#usage_notes)

  - : Definiert Text, der das Bild auf der Seite ersetzen kann.

    > [!NOTE]
    > Browser zeigen nicht immer Bilder an. Es gibt eine Reihe von Situationen, in denen ein Browser möglicherweise keine Bilder anzeigt, wie zum Beispiel:
    >
    > - Nicht-visuelle Browser (wie sie von Menschen mit Sehbehinderungen verwendet werden)
    > - Der Benutzer entscheidet sich dafür, keine Bilder anzuzeigen (um Bandbreite zu sparen, aus Datenschutzgründen)
    > - Das Bild ist ungültig oder ein [nicht unterstützter Typ](#unterstützte_bildformate)
    >
    > In diesen Fällen kann der Browser das Bild durch den Text im `alt`-Attribut des Elements ersetzen. Aus diesen und anderen Gründen geben Sie immer, wann möglich, einen nützlichen Wert für `alt` an.

    Das Einstellen dieses Attributes auf einen leeren String (`alt=""`) zeigt an, dass dieses Bild _nicht_ ein wichtiger Teil des Inhalts ist (es ist Dekoration oder ein Tracking-Pixel) und dass nicht-visuelle Browser es vom {{Glossary("Engine/Rendering", "Rendering")}} weglassen können. Visuelle Browser werden das kaputte Bildsymbol auch ausblenden, wenn das `alt`-Attribut leer ist und das Bild nicht angezeigt werden konnte.

    Dieses Attribut wird auch verwendet, wenn das Bild in Text kopiert und eingefügt oder ein verlinktes Bild zu einem Lesezeichen gespeichert wird.

- `attributionsrc` {{experimental_inline}}

  - : Gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header zusammen mit der Bildanfrage sendet.

    Auf der Serverseite wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Headers in der Antwort auszulösen, um eine bildbasierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#html-based_event_sources) oder einen [Attributionstrigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#html-based_attribution_triggers) zu registrieren. Welcher Antwortheader zurückgeschickt werden soll, hängt vom Wert des `Attribution-Reporting-Eligible`-Headers ab, der die Registrierung ausgelöst hat.

    Das entsprechende Quell- oder Triggerevent wird ausgelöst, sobald der Browser die Antwort mit der Bilddatei erhält.

    > [!NOTE]
    > Weitere Informationen finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

    Es gibt zwei Versionen dieses Attributs, die Sie festlegen können:

    - Boolean, also nur der Name `attributionsrc`. Dies gibt an, dass der {{httpheader("Attribution-Reporting-Eligible")}}-Header an denselben Server gesendet werden soll, auf den das `src`-Attribut zeigt. Dies ist in Ordnung, wenn Sie die Registrierung der Attributionsquelle oder des Triggers auf demselben Server behandeln. Bei der Registrierung eines Attributionstriggers ist diese Eigenschaft optional, und es wird ein boolescher Wert verwendet, wenn sie weggelassen wird.
    - Wert mit einer oder mehreren URLs, zum Beispiel:

    ```html
    <img
      src="image-file.png"
      alt="My image file description"
      attributionsrc="https://a.example/register-source
                         https://b.example/register-source" />
    ```

    Dies ist nützlich in Fällen, in denen die angeforderte Ressource nicht auf einem Server liegt, den Sie kontrollieren, oder wenn Sie die Registrierung der Attributionsquelle auf einem anderen Server durchführen möchten. In diesem Fall können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcenanfrage erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header an die in `attributionSrc` angegebenen URL(s) gesendet, zusätzlich zum Ursprung der Ressource. Diese URLs können dann auf geeignete Weise einen {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header zurückgeben, um die Registrierung abzuschließen.

    > [!NOTE]
    > Das Angeben mehrerer URLs bedeutet, dass mehrere Attributionsquellen für dasselbe Feature registriert werden können. Sie könnten zum Beispiel verschiedene Kampagnen haben, deren Erfolg Sie messen möchten, was das Erzeugen verschiedener Berichte auf unterschiedlichen Daten umfasst.

- [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)

  - : Gibt an, ob das Abrufen des Bildes mit einer {{Glossary("CORS", "CORS")}}-Anfrage erfolgen muss. Bilddaten von einem [CORS-aktivierten Bild](/de/docs/Web/HTML/CORS_enabled_image), das von einer CORS-Anfrage zurückgegeben wird, können im {{HTMLElement("canvas")}}-Element verwendet werden, ohne als "[verschmutzt](/de/docs/Web/HTML/CORS_enabled_image#security_and_tainted_canvases)" markiert zu werden.

    Wenn das `crossorigin`-Attribut _nicht_ angegeben ist, wird eine nicht-CORS-Anfrage gesendet (ohne den {{httpheader("Origin")}}-Request-Header), und der Browser markiert das Bild als verschmutzt und beschränkt den Zugriff auf seine Bilddaten, wodurch seine Verwendung in {{HTMLElement("canvas")}}-Elementen verhindert wird.

    Wenn das `crossorigin`-Attribut _angegeben_ ist, wird eine CORS-Anfrage gesendet (mit dem {{httpheader("Origin")}}-Request-Header); wenn der Server jedoch nicht optiert, den cross-origin Zugriff auf die Bilddaten durch die Ursprungsseite zu erlauben (indem er keinen {{httpheader("Access-Control-Allow-Origin")}}-Response-Header sendet oder den Ursprungsort der Seite nicht in einen gesendeten {{httpheader("Access-Control-Allow-Origin")}}-Response-Header aufnimmt), blockiert der Browser das Bildladen und protokolliert einen CORS-Fehler in der Entwicklerkonsole.

    Erlaubte Werte:

    - `anonymous`
      - : Eine CORS-Anfrage wird ohne Anmeldedaten gesendet (das bedeutet, keine {{Glossary("cookie", "Cookies")}}, [X.509-Zertifikate](https://datatracker.ietf.org/doc/html/rfc5280) oder {{httpheader("Authorization")}}-Request-Header).
    - `use-credentials`
      - : Die CORS-Anfrage wird mit enthaltenen Anmeldedaten gesendet (das bedeutet, Cookies, X.509-Zertifikate und der `Authorization`-Request-Header). Wenn der Server nicht an die Freigabe von Anmeldedaten an die Ursprungsseite optiert (durch Senden des `Access-Control-Allow-Credentials: true`-Response-Headers), markiert der Browser das Bild als verschmutzt und schränkt den Zugriff auf seine Bilddaten ein.

    Wenn das Attribut einen ungültigen Wert hat, behandeln Browser es so, als wäre der Wert `anonymous` verwendet worden. Weitere Informationen finden Sie in den [CORS-Einstellungen von Attributen](/de/docs/Web/HTML/Attributes/crossorigin).

- `decoding`

  - : Dieses Attribut gibt einen Hinweis an den Browser, ob er die Bilddecodierung zusammen mit dem Rendering des anderen DOM-Inhalts in einem einzigen Präsentationsschritt durchführen soll, der "korrekter" aussieht (`sync`), oder den anderen DOM-Inhalt zuerst rendern und präsentieren soll, dann das Bild decodieren und es später präsentieren (`async`). In der Praxis bedeutet `async`, dass das nächste Bild nicht auf die Bilddecodierung wartet.

    Es ist oft schwierig, einen spürbaren Effekt bei der Verwendung von `decoding` auf statische `<img>`-Elemente wahrzunehmen. Sie werden wahrscheinlich zunächst als leere Bilder gerendert, während die Bilddateien entweder aus dem Netzwerk oder aus dem Cache geladen und dann unabhängig verarbeitet werden, sodass die "Synchronisierung" der Inhaltsaktualisierungen weniger offensichtlich ist. Das Blockieren des Renderings, während die Decodierung stattfindet, kann jedoch, wenn auch oft gering, gemessen werden - selbst wenn es schwierig ist, es mit dem bloßen Auge zu beobachten. Weitere Details finden Sie unter [What does the image decoding attribute actually do?](https://www.tunetheweb.com/blog/what-does-the-image-decoding-attribute-actually-do/) (tunetheweb.com, 2023).

    Die Verwendung unterschiedlicher `decoding`-Typen kann zu deutlicher sichtbaren Unterschieden führen, wenn `<img>`-Elemente dynamisch über JavaScript in das DOM eingefügt werden — siehe [`HTMLImageElement.decoding`](/de/docs/Web/API/HTMLImageElement/decoding) für weitere Details.

    Erlaubte Werte:

    - `sync`
      - : Decodieren Sie das Bild synchron zusammen mit dem Rendering des anderen DOM-Inhalts und präsentieren Sie alles zusammen.
    - `async`
      - : Decodieren Sie das Bild asynchron, nach dem Rendern und Präsentieren des anderen DOM-Inhalts.
    - `auto`
      - : Keine Präferenz für den Decodierungsmodus; der Browser entscheidet, was für den Benutzer am besten ist. Dies ist der Standardwert.

- [`elementtiming`](/de/docs/Web/HTML/Attributes/elementtiming)

  - : Markiert das Bild zur Beobachtung durch die [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)-API. Der angegebene Wert wird zu einem Bezeichner für das beobachtete Bildelement. Siehe auch die Attributseite [`elementtiming`](/de/docs/Web/HTML/Attributes/elementtiming).

- `fetchpriority`

  - : Gibt einen Hinweis auf die relative Priorität beim Abrufen des Bildes an. Erlaubte Werte:

    - `high`
      - : Laden Sie das Bild mit hoher Priorität im Vergleich zu anderen Bildern.
    - `low`
      - : Laden Sie das Bild mit niedriger Priorität im Vergleich zu anderen Bildern.
    - `auto`
      - : Keine Präferenz für die Ladepriorität festlegen.
        Dies ist der Standard.
        Es wird verwendet, wenn kein Wert oder ein ungültiger Wert angegeben ist.

    Weitere Informationen finden Sie unter [`HTMLImageElement.fetchPriority`](/de/docs/Web/API/HTMLImageElement/fetchPriority).

- `height`

  - : Die intrinsische Höhe des Bildes in Pixeln. Muss eine ganze Zahl ohne Einheit sein.

    > [!NOTE]
    > Die Aufnahme von `height` und [`width`](#width) ermöglicht es dem Browser, das {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Bildes zu berechnen, bevor das Bild geladen wird. Dieses Seitenverhältnis wird verwendet, um den Platz zu reservieren, der zum Anzeigen des Bildes benötigt wird, wodurch eine Layoutverschiebung beim Herunterladen und Anzeigen des Bildes auf dem Bildschirm verringert oder sogar verhindert wird. Die Reduzierung von Layoutverschiebungen ist ein wesentlicher Bestandteil einer guten Benutzererfahrung und Webperformance.

- `ismap`

  - : Dieses boolesche Attribut zeigt an, dass das Bild Teil einer [serverseitigen Karte](https://en.wikipedia.org/wiki/Image_map#Server-side) ist. Wenn ja, werden die Koordinaten gesendet, an denen der Benutzer auf das Bild geklickt hat.

    > [!NOTE]
    > Dieses Attribut ist nur zulässig, wenn das `<img>`-Element ein Nachfahre eines {{htmlelement("a")}}-Elements mit einem gültigen [`href`](/de/docs/Web/HTML/Element/a#href)-Attribut ist. Dies gibt Benutzern ohne Zeigegeräte ein alternatives Ziel.

- `loading`

  - : Gibt an, wie der Browser das Bild laden soll:

    - `eager`
      - : Lädt das Bild unverzüglich, unabhängig davon, ob sich das Bild derzeit im sichtbaren Ansichtsfenster befindet oder nicht (dies ist der Standardwert).
    - `lazy`
      - : Die Bildladung wird solange verzögert, bis es eine berechnete Entfernung vom Ansichtsfenster erreicht, definiert durch den Browser. Die Absicht ist, das Netz und den Speicherbedarf zu vermeiden, um das Bild zu handhaben, bis es vernünftigerweise sicher ist, dass es benötigt wird. Dies verbessert in den meisten typischen Anwendungsfällen in der Regel die Leistung der Inhalte.

    > [!NOTE]
    > Das Laden wird nur verzögert, wenn JavaScript aktiviert ist. Dies ist eine Maßnahme gegen das Tracking, da selbst wenn ein User Agent Lazy Loading unterstützt, wenn das Scripting deaktiviert ist, es für die Website immer noch möglich wäre, die ungefähre Scrollposition eines Benutzers während einer Sitzung zu verfolgen, indem strategisch Bilder im Markup einer Seite so platziert werden, dass ein Server verfolgen kann, wie viele Bilder angefordert werden und wann.

    > [!NOTE]
    > Bilder mit `loading` auf `lazy` gesetzt werden niemals geladen, wenn sie keinen sichtbaren Teil eines Elements schneiden, selbst wenn das Laden sie ändern würde, da nicht geladene Bilder eine `width` und `height` von `0` haben. Das Setzen von `width` und `height` auf lazy-geladene Bilder behebt dieses Problem und ist eine empfohlene Best Practice, [durch die Spezifikation empfohlen](https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element). Dies hilft auch, Layoutverschiebungen zu vermeiden.

- `referrerpolicy`

  - : Ein String, der angibt, welchen Referrer beim Abrufen der Resource zu verwenden ist:

    - `no-referrer`: Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}}-Header wird nicht an {{Glossary("origin", "Orte")}} ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`: Der gesendete Referrer wird auf den Ursprung der verweisenden Seite beschränkt: sein [Schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`: Der an andere Ursprünge gesendete Referrer wird auf das Schema, den Host und den Port beschränkt. Navigationen im selben Ursprung enthalten weiterhin den Pfad.
    - `same-origin`: Ein Referrer wird für {{Glossary("Same-origin_policy", "gleichbleibenden Ursprung")}} gesendet, aber bei Cross-Origin-Anfragen wird keine Referrer-Informationen enthalten sein.
    - `strict-origin`: Der Ursprung des Dokuments wird nur als Referrer gesendet, wenn das Protokollsicherheitsniveau gleich bleibt (HTTPS→HTTPS), aber nicht zu einem weniger sicheren Ziel gesendet wird (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard): Sendet eine vollständige URL bei einer Anforderung im gleichen Ursprung, sendet nur den Ursprung, wenn das Protokollsicherheitsniveau gleich bleibt (HTTPS→HTTPS), und sendet keinen Header an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `unsafe-url`: Der Referrer wird den Ursprung _und_ den Pfad enthalten (aber nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), das [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder den [Benutzernamen](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge weitergibt.

- `sizes`

  - : Eine oder mehrere durch Kommas getrennte Strings, die eine Menge von Quellgrößen angeben. Jede Quellgröße besteht aus:

    1. Einer [Medienbedingung](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#syntax). Diese muss für den letzten Eintrag in der Liste weggelassen werden.
    2. Einem Quellgrößenwert.

    Medienbedingungen beschreiben Eigenschaften des _Ansichtsfensters_, nicht des _Bildes_. Zum Beispiel schlägt `(max-height: 500px) 1000px` vor, eine Quelle von 1000px Breite zu verwenden, wenn das _Ansichtsfenster_ nicht höher als 500px ist. Da ein Quellgrößen-Descriptor verwendet wird, um die Breite anzugeben, die während des Layouts der Seite für das Bild verwendet werden soll, basiert die Medienbedingung typischerweise (aber nicht unbedingt) auf den [Breiten-](/de/docs/Web/CSS/@media/width) Informationen.

    Quellgrößenwerte geben die beabsichtigte Anzeigengröße des Bildes an. {{Glossary("User_agent", "User Agents")}} verwenden die aktuelle Quellgröße, um eine der vom `srcset`-Attribut angegebenen Quellen auszuwählen, wenn diese Quellen mithilfe von Breiten-`w`-Deskriptoren beschrieben werden. Die ausgewählte Quellgröße beeinflusst die {{Glossary("intrinsic_size", "intrinsische Größe")}} des Bildes (die Anzeigengröße des Bildes, wenn keine {{Glossary("CSS", "CSS")}}-Stilvorlagen angewendet werden). Wenn das `srcset`-Attribut fehlt oder keine Werte mit einem Breiten-Descriptor enthält, hat das `sizes`-Attribut keine Wirkung.

    Ein Quellgrößenwert kann jede nicht-negative [Länge](/de/docs/Web/CSS/length) sein. Er darf keine anderen CSS-Funktionen als die [Mathefunktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#math_functions) verwenden. Einheiten werden auf die gleiche Weise interpretiert wie [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries), was bedeutet, dass alle relativen Längeneinheiten sich relativ zur Dokumentwurzel und nicht zum `<img>`-Element verhalten. Ein `em`-Wert ist daher relativ zur Schriftgröße der Wurzel, nicht zur Schriftgröße des Bildes. [Prozentwerte](/de/docs/Web/CSS/percentage) sind nicht erlaubt.

    Zusätzlich können Sie den Wert `auto` verwenden, um die gesamte Liste der Größen oder den ersten Eintrag in der Liste zu ersetzen. Er ist nur gültig, wenn er mit `loading="lazy"` kombiniert wird und löst sich in die [konkrete Größe](/de/docs/Web/CSS/image) des Bildes auf.

- `src`
  - : Die Bild-{{Glossary("URL", "URL")}}. Pflicht für das `<img>`-Element. Bei {{Glossary("Browser", "Browsern")}}, die `srcset` unterstützen, wird `src` wie ein Kandidatenbild mit der Pixel-Dichte-Descriptor `1x` behandelt, es sei denn, ein Bild mit diesem Pixel-Dichte-Descriptor ist bereits in `srcset` definiert oder `srcset` enthält `w`-Deskriptoren.
- `srcset`

  - : Eine oder mehrere durch Kommas getrennte Strings, die mögliche Bildquellen für den {{Glossary("user_agent", "User Agent")}} zur Verfügung stellen. Jeder String besteht aus:

    1. Einer {{Glossary("URL", "URL")}} zu einem Bild
    2. Optional, Leerzeichen gefolgt von einem der folgenden:

       - Einem Breiten-`w`-Deskriptor (ein positive Ganzzahl direkt gefolgt von `w`). Der Breiten-Deskriptor wird durch die im `sizes`-Attribut angegebene Quellgröße geteilt, um die effektive Pixeldichte zu berechnen.
       - Einem Pixeldichte-Deskriptor (ein positiver Gleitkommanummer direkt gefolgt von `x`).

    Wenn kein Deskriptor angegeben ist, wird die Quelle dem Standard-Deskriptor von `1x` zugewiesen.

    Es ist falsch, Breiten-Deskriptoren und Pixeldichte-Deskriptoren im selben `srcset`-Attribut zu mischen. Doppelte Deskriptoren (zum Beispiel zwei Quellen im selben `srcset`, die beide mit `2x` beschrieben werden) sind ebenfalls ungültig.

    Wenn das srcset-Attribut Breiten-Deskriptoren verwendet, muss das `sizes`-Attribut ebenfalls vorhanden sein, andernfalls wird das `srcset` selbst ignoriert.

    Der Nutzeragent kann nach eigenem Ermessen jede der verfügbaren Quellen auswählen. Dies gibt ihm erhebliche Flexibilität, seine Auswahl auf Benutzervorlieben oder {{Glossary("bandwidth", "Bandbreiten")}}-Bedingungen zuzuschneiden. Siehe unser [Leitfaden zu responsiven Bildern](/de/docs/Web/HTML/Responsive_images) für ein Beispiel.

- `width`
  - : Die intrinsische Breite des Bildes in Pixeln. Muss eine ganze Zahl ohne Einheit sein.
- `usemap`

  - : Die partielle {{Glossary("URL", "URL")}} (beginnend mit `#`) einer [Bildkarte](/de/docs/Web/HTML/Element/map), die mit dem Element verbunden ist.

    > [!NOTE]
    > Sie können dieses Attribut nicht verwenden, wenn sich das `<img>`-Element innerhalb eines {{htmlelement("a")}}- oder {{HTMLElement("button")}}-Elements befindet.

### Veraltete Attribute

- `align` {{deprecated_inline}}

  - : Richtet das Bild im Kontext aus. Verwenden Sie die {{cssxref('float')}} und/oder {{cssxref('vertical-align')}} {{Glossary("CSS", "CSS")}}-Eigenschaften anstelle dieses Attributs. Erlaubte Werte:

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
  - : Die Breite eines Rahmens um das Bild. Verwenden Sie die {{cssxref('border')}}{{Glossary("CSS", "CSS")}}-Eigenschaft stattdessen.
- `hspace` {{deprecated_inline}}
  - : Die Anzahl der Pixel des Leerraums links und rechts des Bildes. Verwenden Sie die {{cssxref('margin')}}-CSS-Eigenschaft stattdessen.
- `longdesc` {{deprecated_inline}}

  - : Ein Link zu einer ausführlicheren Beschreibung des Bildes. Mögliche Werte sind eine {{Glossary("URL", "URL")}} oder eine Element-[`id`](/de/docs/Web/HTML/Global_attributes/id).

    > [!NOTE]
    > Dieses Attribut wird in der neuesten {{Glossary("W3C", "W3C")}}-Version [HTML 5.2](https://html.spec.whatwg.org/multipage/obsolete.html#element-attrdef-img-longdesc) erwähnt, wurde jedoch aus dem {{Glossary("WHATWG", "WHATWG")}}-[HTML Living Standard](https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element) entfernt. Es hat eine unsichere Zukunft; Autoren sollten eine {{Glossary("WAI", "WAI")}}-{{Glossary("ARIA", "ARIA")}}-Alternative wie [`aria-describedby`](https://www.w3.org/TR/wai-aria-1.1/#aria-describedby) oder [`aria-details`](https://www.w3.org/TR/wai-aria-1.1/#aria-details) verwenden.

- `name` {{deprecated_inline}}
  - : Ein Name für das Element. Verwenden Sie das [`id`](/de/docs/Web/HTML/Global_attributes/id)-Attribut stattdessen.
- `vspace` {{deprecated_inline}}
  - : Die Anzahl der Pixel des Leerraums ober- und unterhalb des Bildes. Verwenden Sie die {{cssxref('margin')}}-CSS-Eigenschaft stattdessen.

## Stil-Anpassung mit CSS

`<img>` ist ein {{Glossary("replaced_elements", "ersetztes Element")}}; es hat standardmäßig einen {{cssxref("display")}}-Wert von `inline`, aber seine Standardabmessungen werden durch die intrinsischen Werte des eingebetteten Bildes definiert, als wäre es `inline-block`. Sie können Eigenschaften wie {{cssxref("border")}}/{{cssxref("border-radius")}}, {{cssxref("padding")}}/{{cssxref("margin")}}, {{cssxref("width")}}, {{cssxref("height")}}, etc. auf ein Bild anwenden.

`<img>` besitzt keine Baseline, daher wird, wenn Bilder in einem Inline-Formatting-Kontext mit {{cssxref("vertical-align", "vertical-align: baseline")}} verwendet werden, der untere Rand des Bildes auf der Textbasislinie platziert.

Sie können die Eigenschaft {{cssxref("object-position")}} verwenden, um das Bild innerhalb des Elemente-Rahmens zu positionieren, und die Eigenschaft {{cssxref("object-fit")}} verwenden, um die Größe des Bildes innerhalb des Rahmens anzupassen (zum Beispiel, ob das Bild in den Rahmen passen oder ihn füllen soll, selbst wenn dafür ein Abriss erforderlich ist).

Abhängig von seinem Typ kann ein Bild eine intrinsische Breite und Höhe haben. Für einige Bildtypen sind jedoch intrinsische Dimensionen unnötig. Beispielsweise haben {{Glossary("SVG", "SVG")}}-Bilder keine intrinsischen Dimensionen, wenn ihr Wurzelelement {{SVGElement("svg")}} keine `width` oder `height` auf sich hat.

## Barrierefreiheit

### Bedeutungsvolle alternative Beschreibungen erstellen

Der Wert des `alt`-Attributs sollte einen klaren und präzisen Textersatz für den Inhalt des Bildes bieten. Er sollte nicht das Vorhandensein des Bildes selbst oder den Dateinamen des Bildes beschreiben. Wenn das `alt`-Attribut absichtlich ausgelassen wird, weil das Bild kein textuelles Äquivalent hat, ziehen Sie alternative Methoden in Betracht, um das zu präsentieren, was das Bild vermitteln möchte.

#### Nicht

```html example-bad
<img alt="image" src="penguin.jpg" />
```

#### Tun

```html example-good
<img alt="A Penguin on a beach." src="penguin.jpg" />
```

Ein wichtiger Barrierefreiheitstest besteht darin, den Inhalt des `alt`-Attributs zusammen mit dem vorhergehenden Textinhalt zu lesen, um zu sehen, ob er denselben Sinn wie das Bild vermittelt. Zum Beispiel könnte ein Bildschirmleser das _Nicht_-Beispiel wie "Auf meinen Reisen habe ich ein niedliches kleines Tier gesehen: Bild" lesen, was keinen Sinn ergibt. Ein Bildschirmleser könnte das _Tun_-Beispiel dagegen als "Auf meinen Reisen habe ich ein niedliches kleines Tier gesehen: Ein Pinguin am Strand." lesen, was sinnvoll ist.

Für Bilder, die eine Aktion auslösen sollen, beispielsweise Bilder, die in einem {{htmlelement("a")}}- oder {{htmlelement("button")}}-Element verschachtelt sind, ziehen Sie in Erwägung, die ausgelöste Aktion im `alt`-Attributswert zu beschreiben. Zum Beispiel könnten Sie `alt="nächste Seite"` anstelle von `alt="Pfeil rechts"` schreiben. Sie könnten auch erwägen, eine optionale detailliertere Beschreibung in einem `title`-Attribut hinzuzufügen; dies kann von Bildschirmlesern gelesen werden, wenn es vom Benutzer angefordert wird.

Wenn bei einem Bild kein `alt`-Attribut vorhanden ist, könnten einige Bildschirmleser stattdessen den Dateinamen des Bildes ankündigen. Dies kann eine verwirrende Erfahrung sein, wenn der Dateiname nicht repräsentativ für den Bildinhalt ist.

- [Ein Alt-Entscheidungsbaum • Bilder • WAI-Web-Zugänglichkeits-Tutorials](https://www.w3.org/WAI/tutorials/images/decision-tree/)
- [Alt-Texte: Der ultimative Leitfaden — Axess Lab](https://axesslab.com/alt-texts/)
- [Wie man großartige Alt-Texte gestaltet: Eine Einführung | Deque](https://www.deque.com/blog/great-alt-text-introduction/)
- [MDN Verständnis der WCAG, Richtlinien 1.1-Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verständnis von Erfolgskriterium 1.1.1 | W3C Verständnis der WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

### SVG als Bild identifizieren

Aufgrund eines [VoiceOver-Bugs](https://webkit.org/b/216364) gibt VoiceOver SVG-Bilder nicht korrekt als Bilder aus. Fügen Sie allen `<img>`-Elementen mit SVG-Quelldateien [`role="img"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/img_role) hinzu, um sicherzustellen, dass unterstützende Technologien das SVG als Bildinhalt korrekt ankündigen.

```html
<img src="mdn.svg" alt="MDN" role="img" />
```

### Das title-Attribut

Das [`title`](/de/docs/Web/HTML/Global_attributes/title)-Attribut ist kein akzeptabler Ersatz für das `alt`-Attribut. Vermeiden Sie außerdem, den Wert des `alt`-Attributs in einem `title`-Attribut auf demselben Bild zu duplizieren. Dadurch könnten einige Bildschirmleser den gleichen Text zweimal ankündigen, was eine verwirrende Erfahrung schaffen könnte.

Das `title`-Attribut sollte auch nicht als zusätzliche Untertitelung verwendet werden, um die Beschreibung des `alt`-Attributs eines Bildes zu begleiten. Wenn ein Bild eine Beschriftung benötigt, verwenden Sie die Elemente [`figure`](/de/docs/Web/HTML/Element/figure) und [`figcaption`](/de/docs/Web/HTML/Element/figcaption).

Der Wert des `title`-Attributs wird dem Benutzer normalerweise als Tooltip präsentiert, der kurz nach dem Anhalten des Cursors über das Bild angezeigt wird. Dies _kann_ dem Benutzer zusätzliche Informationen bieten, Sie sollten jedoch nicht davon ausgehen, dass der Nutzer dies jemals sehen wird: der Nutzer könnte nur eine Tastatur oder einen Touchscreen haben. Wenn Sie Informationen haben, die besonders wichtig oder wertvoll für den Nutzer sind, sollten Sie sie stattdessen inline mit einer der oben genannten Methoden präsentieren, anstatt `title` zu verwenden.

- [Den HTML-Titel-Attribut verwenden – aktualisiert | Die Paciello Gruppe](https://www.tpgi.com/using-the-html-title-attribute-updated/)

## Beispiele

### Alternativtext

Das folgende Beispiel bettet ein Bild in die Seite ein und enthält Alternativtext für die Barrierefreiheit.

```html
<img src="favicon144.png" alt="MDN" />
```

{{ EmbedLiveSample('Alternative_text', '100%', '160') }}

### Bildlink

Dieses Beispiel baut auf dem vorherigen auf und zeigt, wie das Bild in einen Link verwandelt werden kann. Um dies zu tun, verschachteln Sie das `<img>`-Tag innerhalb des {{HTMLElement("a")}}-Elements. Sie sollten den Alternativtext so beschreiben lassen, wie wenn Sie einen Textlink verwenden.

```html
<a href="https://developer.mozilla.org">
  <img src="favicon144.png" alt="Visit the MDN site" />
</a>
```

{{ EmbedLiveSample('Image_link', '100%', '160') }}

### Verwendung des srcset-Attributs

In diesem Beispiel fügen wir ein `srcset`-Attribut mit einem Verweis auf eine hochauflösende Version des Logos hinzu; dies wird anstelle des `src`-Bildes auf hochauflösenden Geräten geladen. Das im `src`-Attribut referenzierte Bild wird als `1x`-Kandidat in {{Glossary("User_agent", "User Agents")}} gezählt, die `srcset` unterstützen.

```html
<img src="favicon72.png" alt="MDN" srcset="favicon144.png 2x" />
```

{{EmbedLiveSample("Using_the_srcset_attribute", "100%", "160")}}

### Verwendung der srcset- und sizes-Attribute

Das `src`-Attribut wird in {{Glossary("User_agent", "User Agents")}}, die `srcset` unterstützen, ignoriert, wenn `w`-Deskriptoren enthalten sind. Wenn die `(max-width: 600px)` Medienbedingung zutrifft, wird das 200 Pixel breite Bild geladen (es ist das, das `200px` am nächsten kommt), andernfalls wird das andere Bild geladen.

```html
<img
  src="clock-demo-200px.png"
  alt="The time is 12:45."
  srcset="clock-demo-200px.png 200w, clock-demo-400px.png 400w"
  sizes="(max-width: 600px) 200px, 50vw" />
```

{{EmbedLiveSample("Using_the_srcset_and_sizes_attributes", "100%", 350)}}

> [!NOTE]
> Um die Größenänderung in Aktion zu sehen, {{LiveSampleLink('Using_the_srcset_and_sizes_attributes', 'sehen Sie sich das Beispiel auf einer separaten Seite an')}}, sodass Sie den Inhaltsbereich tatsächlich ändern können.

## Sicherheits- und Datenschutzbedenken

Obwohl `<img>`-Elemente unschuldige Verwendungen haben, können sie unerwünschte Folgen für die Sicherheit und Privatsphäre der Benutzer haben. Siehe [Referer-Header: Datenschutz- und Sicherheitsbedenken](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns) für weitere Informationen und Gegenmaßnahmen.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flow-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasing-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#embedded_content"
          >Eingebetteter Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#palpable_content"
          >Wahrnehmbarer Inhalt</a
        >. Wenn das Element ein <code>usemap</code>-Attribut hat, ist es auch Teil der interaktiven Inhaltskategorie.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "void element")}}.</td>
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
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <ul>
          <li>
            mit nicht leerem <code>alt</code>-Attribut oder keinem
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
            mit keinem <code>alt</code>-Attribut, keine <code>role</code> erlaubt
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
- [Anleitung zu Bilddateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types)
- [Responsive Bilder](/de/docs/Web/HTML/Responsive_images)
