---
title: "<img>: Das Image Embed Element"
slug: Web/HTML/Element/img
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
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

- Das `src`-Attribut ist **erforderlich** und enthält den Pfad zum Bild, das Sie einbetten möchten.
- Das `alt`-Attribut enthält einen textlichen Ersatz für das Bild, was obligatorisch und **ungemein nützlich** für Barrierefreiheit ist — Bildschirmleser geben den Attributwert an ihre Benutzer aus, damit sie verstehen, was das Bild bedeutet. Alt-Text wird auch auf der Seite angezeigt, wenn das Bild aus irgendeinem Grund nicht geladen werden kann: zum Beispiel Netzwerkfehler, Inhaltsblockierung oder Linkverfall.

Es gibt viele andere Attribute, um verschiedene Zwecke zu erreichen:

- [Referrer](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy)/{{Glossary("CORS", "CORS")}} Kontrolle für Sicherheit und Datenschutz: siehe [`crossorigin`](#crossorigin) und [`referrerpolicy`](#referrerpolicy).
- Verwenden Sie sowohl [`width`](#width) als auch [`height`](#height), um die intrinsische Größe des Bildes festzulegen, damit es vor dem Laden Platz einnehmen kann und Layout-Verschiebungen verringert werden.
- Responsive Bildhinweise mit [`sizes`](#sizes) und [`srcset`](#srcset) (siehe auch das {{htmlelement("picture")}} Element und unser [Responsive images](/de/docs/Web/HTML/Responsive_images) Tutorial).

## Unterstützte Bildformate

Der HTML-Standard listet nicht auf, welche Bildformate unterstützt werden sollen, sodass {{Glossary("user_agent", "User Agents")}} verschiedene Formate unterstützen können.

> [!NOTE]
> Der [Image file type and format guide](/de/docs/Web/Media/Guides/Formats/Image_types) bietet umfassende Informationen über Bildformate und deren Unterstützung durch Web-Browser.
> Dieser Abschnitt ist nur eine Zusammenfassung!

Die Bilddateiformate, die am häufigsten im Web verwendet werden, sind:

- [APNG (Animated Portable Network Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#apng_animated_portable_network_graphics) — Gute Wahl für verlustfreie Animationssequenzen (GIF ist weniger performant)
- [AVIF (AV1 Image File Format)](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) — Gute Wahl für sowohl Bilder als auch animierte Bilder aufgrund hoher Leistung.
- [GIF (Graphics Interchange Format)](/de/docs/Web/Media/Guides/Formats/Image_types#gif_graphics_interchange_format) — Gute Wahl für _einfache_ Bilder und Animationen.
- [JPEG (Joint Photographic Expert Group image)](/de/docs/Web/Media/Guides/Formats/Image_types#jpeg_joint_photographic_experts_group_image) — Gute Wahl für verlustbehaftete Komprimierung von Standbildern (derzeit das beliebteste).
- [PNG (Portable Network Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#png_portable_network_graphics) — Gute Wahl für verlustfreie Komprimierung von Standbildern (leicht bessere Qualität als JPEG).
- [SVG (Scalable Vector Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#svg_scalable_vector_graphics) — Vektorbildformat. Verwenden Sie es für Bilder, die bei verschiedenen Größen genau gezeichnet werden müssen.
- [WebP (Web Picture format)](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) — Ausgezeichnete Wahl für sowohl Bilder als auch animierte Bilder

Formate wie [WebP](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) und [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) werden empfohlen, da sie viel besser performen als PNG, JPEG, GIF sowohl für Stand- als auch animierte Bilder.

SVG bleibt das empfohlene Format für Bilder, die bei verschiedenen Größen genau gezeichnet werden müssen.

## Bildladefehler

Wenn ein Fehler beim Laden oder Rendern eines Bildes auftritt und ein `onerror` Ereignis-Handler für das [`error`](/de/docs/Web/API/HTMLElement/error_event) Ereignis gesetzt wurde, wird dieser Ereignis-Handler aufgerufen. Dies kann in mehreren Situationen passieren, unter anderem:

- Das `src` Attribut ist leer (`""`) oder `null`.
- Die `src` {{Glossary("URL", "URL")}} ist dieselbe wie die URL der Seite, auf der sich der Benutzer gerade befindet.
- Das Bild ist in irgendeiner Weise beschädigt, die verhindert, dass es geladen wird.
- Die Metadaten des Bildes sind so beschädigt, dass es unmöglich ist, seine Abmessungen abzurufen, und es wurden keine Abmessungen in den Attributen des `<img>` Elements angegeben.
- Das Bild ist in einem Format, das vom {{Glossary("user_agent", "User Agent")}} nicht unterstützt wird.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- [`alt`](/de/docs/Web/API/HTMLImageElement/alt#usage_notes)

  - : Definiert Text, der das Bild auf der Seite ersetzen kann.

    > [!NOTE]
    > Browser zeigen nicht immer Bilder an. Es gibt eine Reihe von Situationen, in denen ein Browser möglicherweise keine Bilder anzeigt, wie zum Beispiel:
    >
    > - Nicht-visuelle Browser (wie die, die von Menschen mit Sehbehinderungen verwendet werden)
    > - Der Benutzer entscheidet sich dafür, keine Bilder anzuzeigen (um Bandbreite zu sparen, aus Datenschutzgründen)
    > - Das Bild ist ungültig oder ein [nicht unterstützter Typ](#unterstützte_bildformate)
    >
    > In diesen Fällen kann der Browser das Bild durch den Text im `alt` Attribut des Elements ersetzen. Aus diesen und anderen Gründen sollten Sie wann immer möglich einen nützlichen Wert für `alt` angeben.

    Das Setzen dieses Attributs auf einen leeren String (`alt=""`) zeigt an, dass dieses Bild _kein_ wesentlicher Bestandteil des Inhalts ist (es ist Dekoration oder ein Tracking-Pixel), und dass nicht-visuelle Browser es möglicherweise vom {{Glossary("Engine/Rendering", "Rendering")}} auslassen. Visuelle Browser verbergen auch das Bildsymbol des kaputten Bildes, wenn das `alt` Attribut leer ist und das Bild nicht angezeigt werden konnte.

    Dieses Attribut wird auch verwendet, wenn ein Bild in Text kopiert und eingefügt oder ein verlinktes Bild in einem Lesezeichen gespeichert wird.

- `attributionsrc` {{experimental_inline}}

  - : Gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}} Header zusammen mit der Bildanfrage sendet.

    Auf der Serverseite wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}} oder {{httpheader("Attribution-Reporting-Register-Trigger")}} Headers in der Antwort auszulösen, um eine bildbasierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#html-based_event_sources) oder einen [Attributionstrigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#html-based_attribution_triggers) zu registrieren. Welcher Antwortheader zurückgeschickt werden soll, hängt vom Wert des `Attribution-Reporting-Eligible` Headers ab, der die Registrierung ausgelöst hat.

    Das entsprechende Quell- oder Triggerevent wird ausgelöst, sobald der Browser die Antwort mit der Bilddatei erhält.

    > [!NOTE]
    > Siehe die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) für weitere Details.

    Es gibt zwei Versionen dieses Attributs, die Sie festlegen können:

    - Boolean, d. h. nur der `attributionsrc` Name. Dies gibt an, dass Sie den {{httpheader("Attribution-Reporting-Eligible")}} Header an denselben Server senden möchten, auf den das `src` Attribut verweist. Dies ist in Ordnung, wenn Sie die Attributionsquelle oder Triggerregistrierung auf demselben Server handhaben. Bei der Registrierung eines Attributionstriggers ist diese Eigenschaft optional, und ein Boolean-Wert wird verwendet, wenn es weggelassen wird.
    - Wert, der eine oder mehrere URLs enthält, zum Beispiel:

    ```html
    <img
      src="image-file.png"
      alt="My image file description"
      attributionsrc="https://a.example/register-source
                         https://b.example/register-source" />
    ```

    Dies ist nützlich in Fällen, in denen die angeforderte Ressource sich nicht auf einem Server befindet, den Sie kontrollieren, oder Sie möchten die Registrierung der Attributionsquelle auf einem anderen Server handhaben. In diesem Fall können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcenanfrage erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}} Header an die in `attributionSrc` angegebenen URL(s) zusammen mit dem Ursprungsort der Ressource gesendet. Diese URLs können dann mit einem {{httpheader("Attribution-Reporting-Register-Source")}} oder {{httpheader("Attribution-Reporting-Register-Trigger")}} Header antworten, wie erforderlich, um die Registrierung abzuschließen.

    > [!NOTE]
    > Wenn Sie mehrere URLs angeben, bedeutet dies, dass mehrere Attributionsquellen auf demselben Feature registriert werden können. Sie könnten zum Beispiel verschiedene Kampagnen haben, deren Erfolg Sie messen möchten, und die das Generieren verschiedener Berichte über unterschiedliche Daten erfordern.

- [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)

  - : Gibt an, ob das Abrufen des Bildes über eine {{Glossary("CORS", "CORS")}} Anfrage erfolgen muss. Bilddaten von einem [CORS-fähigen Bild](/de/docs/Web/HTML/CORS_enabled_image), das aus einer CORS-Anfrage zurückgegeben wird, können im {{HTMLElement("canvas")}} Element wiederverwendet werden, ohne als "[verunreinigt](/de/docs/Web/HTML/CORS_enabled_image#security_and_tainted_canvases)" markiert zu werden.

    Wenn das `crossorigin` Attribut _nicht_ angegeben ist, wird eine Non-CORS Anfrage gesendet (ohne den {{httpheader("Origin")}} Request-Header), und der Browser markiert das Bild als verunreinigt und beschränkt den Zugriff auf seine Bilddaten, was seine Nutzung in {{HTMLElement("canvas")}} Elementen verhindert.

    Wenn das `crossorigin` Attribut _angegeben_ ist, wird eine CORS Anfrage gesendet (mit dem {{httpheader("Origin")}} Request-Header); aber wenn der Server nicht wählt, den Cross-Origin-Zugriff auf die Bilddaten durch die Ursprungsseite zuzulassen (indem er keinen {{httpheader("Access-Control-Allow-Origin")}} Antwort-Header sendet oder die Origin-Ressource in keinem gesendeten {{httpheader("Access-Control-Allow-Origin")}} Antwort-Header einschließt), blockiert der Browser das Laden des Bildes und protokolliert einen CORS-Fehler in der Entwicklertools-Konsole.

    Zulässige Werte:

    - `anonymous`
      - : Eine CORS Anfrage wird ohne Anmeldeinformationen gesendet (d. h. keine {{Glossary("cookie", "Cookies")}}, [X.509-Zertifikate](https://datatracker.ietf.org/doc/html/rfc5280) oder {{httpheader("Authorization")}} Request-Header).
    - `use-credentials`
      - : Die CORS Anfrage wird mit allen enthaltenen Anmeldedaten gesendet (d. h. Cookies, X.509-Zertifikate und der `Authorization` Request-Header). Wenn der Server sich nicht für die Freigabe von Anmeldeinformationen mit der Ursprungsseite entscheidet (indem er den `Access-Control-Allow-Credentials: true` Antwort-Header sendet), markiert der Browser das Bild als verunreinigt und beschränkt den Zugriff auf die Bilddaten.

    Wenn das Attribut einen ungültigen Wert hat, behandeln Browser es, als ob der `anonymous` Wert verwendet wurde. Siehe [CORS-Einstellungen Attribute](/de/docs/Web/HTML/Attributes/crossorigin) für zusätzliche Informationen.

- `decoding`

  - : Dieses Attribut gibt dem Browser einen Hinweis darauf, ob er die Bilddecodierung zusammen mit dem Rendern der anderen DOM-Inhalte in einem einzigen Präsentationsschritt, der "korrekter" aussieht (`sync`), oder erst rendern und die anderen DOM-Inhalte präsentieren und dann das Bild dekodieren und danach präsentieren soll (`async`). In der Praxis bedeutet `async`, dass das nächste Rendering nicht darauf wartet, dass das Bild dekodiert wird.

    Es ist oft schwierig, einen spürbaren Effekt bei der Verwendung von `decoding` auf statischen `<img>` Elementen wahrzunehmen. Sie werden wahrscheinlich anfänglich als leere Bilder gerendert, während die Bilddateien abgerufen werden (entweder aus dem Netzwerk oder aus dem Cache) und dann sowieso unabhängig behandelt, sodass das "Synchronisieren" von Inhaltsupdates weniger offensichtlich ist. Das Blockieren des Renderings während die Dekodierung erfolgt, kann jedoch wie immer klein sein _aber_ gemessen werden — selbst wenn es mit dem menschlichen Auge schwer zu beobachten ist. Siehe [What does the image decoding attribute actually do?](https://www.tunetheweb.com/blog/what-does-the-image-decoding-attribute-actually-do/) für eine detailliertere Analyse (tunetheweb.com, 2023).

    Die Verwendung unterschiedlicher `decoding` Typen kann zu merklicheren Unterschieden führen, wenn `<img>` Elemente dynamisch über JavaScript in den DOM eingefügt werden — siehe [`HTMLImageElement.decoding`](/de/docs/Web/API/HTMLImageElement/decoding) für weitere Details.

    Zulässige Werte:

    - `sync`
      - : Dekodiere das Bild synchron zusammen mit dem Rendering der anderen DOM-Inhalte und präsentiere alles zusammen.
    - `async`
      - : Dekodiere das Bild asynchron, nach dem Rendering und der Präsentation der anderen DOM-Inhalte.
    - `auto`
      - : Keine Präferenz für den Dekodiermodus; der Browser entscheidet, was am besten für den Benutzer ist. Dies ist der Standardwert.

- [`elementtiming`](/de/docs/Web/HTML/Attributes/elementtiming)

  - : Markiert das Bild zur Beobachtung durch die [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming) API. Der angegebene Wert wird zu einem Identifier für das beobachtete Bild Element. Siehe auch die [`elementtiming`](/de/docs/Web/HTML/Attributes/elementtiming) Attribut-Seite.

- `fetchpriority`

  - : Gibt einen Hinweis auf die relative Priorität an, die beim Abrufen des Bildes verwendet werden soll.
    Zulässige Werte:

    - `high`
      - : Das Bild mit hoher Priorität im Verhältnis zu anderen Bildern abrufen.
    - `low`
      - : Das Bild mit niedriger Priorität im Verhältnis zu anderen Bildern abrufen.
    - `auto`
      - : Keine Präferenz für die Abrufpriorität festlegen.
        Dies ist der Standard.
        Es wird verwendet, wenn kein Wert oder ein ungültiger Wert festgelegt ist.

    Siehe [`HTMLImageElement.fetchPriority`](/de/docs/Web/API/HTMLImageElement/fetchPriority) für weitere Informationen.

- `height`

  - : Die intrinsische Höhe des Bildes, in Pixeln. Muss eine Ganzzahl ohne Einheit sein.

    > [!NOTE]
    > Das Einfügen von `height` und [`width`](#width) ermöglicht es dem Browser, das {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Bildes zu berechnen, bevor das Bild geladen wird. Dieses Seitenverhältnis wird verwendet, um den benötigten Platz zur Anzeige des Bildes zu reservieren, um eine Layout-Verschiebung zu verringern oder sogar zu verhindern, wenn das Bild heruntergeladen und auf den Bildschirm gezeichnet wird. Die Reduzierung der Layout-Verschiebung ist eine wesentliche Komponente für eine gute Benutzererfahrung und Web-Performance.

- `ismap`

  - : Dieses Boolean Attribut gibt an, dass das Bild Teil einer [serverseitigen Map](https://de.wikipedia.org/wiki/Image_Map#Serverside) ist. Wenn dem so ist, werden die Koordinaten, an denen der Benutzer auf das Bild geklickt hat, an den Server gesendet.

    > [!NOTE]
    > Dieses Attribut ist nur erlaubt, wenn das `<img>` Element ein Nachfahre eines {{htmlelement("a")}} Elements mit einem gültigen [`href`](/de/docs/Web/HTML/Element/a#href) Attribut ist. Dies bietet Benutzern ohne Zeigegeräte eine Ausweichmöglichkeit.

- `loading`

  - : Gibt an, wie der Browser das Bild laden soll:

    - `eager`
      - : Lädt das Bild sofort, unabhängig davon, ob das Bild derzeit innerhalb des sichtbaren Viewports liegt (dies ist der Standardwert).
    - `lazy`
      - : Verzögert das Laden des Bildes, bis es eine berechnete Entfernung vom Viewport erreicht, wie vom Browser definiert. Die Absicht ist, das Netzwerk und den Speicherdatenbandbedarf zur Handhabung des Bildes zu vermeiden, bis es ziemlich sicher benötigt wird. Dies verbessert im Allgemeinen die Leistung der Inhalte in den meisten typischen Anwendungsfällen.

    > [!NOTE]
    > Das Laden wird nur verzögert, wenn JavaScript aktiviert ist. Dies ist eine Anti-Tracking-Maßnahme, da es bei einem User Agent möglich ist, das Ladeverhalten zu überwachen, indem man strategische Markierungen in das Markup einer Seite platziert und so verfolgen kann, wie viele Bilder angefragt werden und wann.

    > [!NOTE]
    > Bilder mit `loading` auf `lazy` gesetzt, werden nie geladen, wenn sie keinen sichtbaren Teil eines Elements überlappen, selbst wenn das Laden sie ändern würde, da ungeladene Bilder eine `width` und `height` von `0` haben. Das Setzen von `width` und `height` auf lazy-geladene Bilder behebt dieses Problem und ist eine bewährte Praxis, [empfohlen durch die Spezifikation](https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element). Dies hilft auch, Layout-Verschiebungen zu verhindern.

- `referrerpolicy`

  - : Ein String, der angibt, welchen Referrer beim Abrufen der Ressource verwendet werden soll:

    - `no-referrer`: Der {{HTTPHeader("Referer")}} Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}} Header wird nicht an {{Glossary("origin", "Origin")}}s ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`: Der gesendete Referrer ist auf das Origin der verweisenden Seite beschränkt: seinen [Scheme](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}}, und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`: Der an andere Origins gesendete Referrer wird auf das Scheme, den Host und den Port beschränkt. Navigationen im selben Origin enthalten weiterhin den Pfad.
    - `same-origin`: Ein Referrer wird für {{Glossary("Same-origin_policy", "same origin")}} gesendet, aber Cross-Origin-Anfragen enthalten keine Referrer-Informationen.
    - `strict-origin`: Nur das Origin des Dokuments wird als Referrer gesendet, wenn die Protokollsicherheitsstufe gleich bleibt (HTTPS→HTTPS), aber nicht an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard): Die vollständige URL wird beim Ausführen einer same-origin-Anfrage gesendet, nur das Origin wird gesendet, wenn die Protokollsicherheitsstufe gleich bleibt (HTTPS→HTTPS), und kein Header wird an ein weniger sicheres Ziel gesendet (HTTPS→HTTP).
    - `unsafe-url`: Der Referrer enthält das Origin _und_ den Pfad (aber nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder [Benutzername](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge weitergibt.

- `sizes`

  - : Eine oder mehrere durch Kommas getrennte Strings, die eine Menge von Quellgrößen anzeigen. Jede Quellgröße besteht aus:

    1. Einer [Media-Bedingung](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#syntax). Diese muss für den letzten Punkt in der Liste weggelassen werden.
    2. Einem Quellgrößenwert.

    Media-Bedingungen beschreiben Eigenschaften des _Viewports_, nicht des _Bildes_. Zum Beispiel schlägt `(max-height: 500px) 1000px` vor, eine Quelle von 1000px Breite zu verwenden, wenn der _Viewport_ nicht höher als 500px ist. Da ein Quellgrößen-Deskriptor verwendet wird, um die Breite zu spezifizieren, die während der Seitengestaltung für das Bild verwendet werden soll, basiert die Mediensituationsbeschreibung in der Regel (aber nicht notwendigerweise) auf den [Breiten](/de/docs/Web/CSS/@media/width) Informationen.

    Quellgrößenwerte spezifizieren die beabsichtigte Anzeigegröße des Bildes. {{Glossary("User_agent", "User Agents")}} verwenden die aktuelle Quellgröße, um eine der Quellen auszuwählen, die durch das `srcset` Attribut geliefert werden, wenn diese Quellen unter Verwendung von Breiten (`w`) Deskriptoren beschrieben werden. Die ausgewählte Quellgröße beeinflusst die {{Glossary("intrinsic_size", "intrinsische Größe")}} des Bildes (die Anzeigengröße des Bildes, wenn keine {{Glossary("CSS", "CSS")}} Gestaltung angewendet wird). Wenn das `srcset` Attribut fehlt oder keine Werte mit einem Breiten-Deskriptor enthält, hat das `sizes` Attribut keine Wirkung.

    Ein Quellgrößenwert kann jede nicht-negative [Länge](/de/docs/Web/CSS/length) sein. Es dürfen keine CSS-Funktionen außer den [Mathematischen Funktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#math_functions) verwendet werden. Einheiten werden in derselben Weise wie [media queries](/de/docs/Web/CSS/CSS_media_queries) interpretiert, was bedeutet, dass alle relativen Längeneinheiten relativ zur Dokumentwurzel statt zum `<img>` Element sind, also ist ein `em` Wert relativ zur Stammenschriftgröße, und nicht zur Schriftgröße des Bildes. [Prozent](/de/docs/Web/CSS/percentage) Werte sind nicht erlaubt.

    Zusätzlich können Sie den Wert `auto` verwenden, um die gesamte Liste der Größen oder den ersten Eintrag in der Liste zu ersetzen. Dieser ist nur in Verbindung mit `loading="lazy"` gültig und löst die [konkrete Größe](/de/docs/Web/CSS/image) des Bildes auf.

- `src`
  - : Die Bild-{{Glossary("URL", "URL")}}. Zwingend für das `<img>` Element. Bei {{Glossary("Browser", "Browsern")}}, die `srcset` unterstützen, wird `src` wie ein Kandidat für ein Bild mit einem Pixeldichte-Deskriptor `1x` behandelt, es sei denn, ein Bild mit diesem Pixeldichte-Deskriptor ist bereits in `srcset` definiert oder `srcset` enthält `w` Deskriptoren.
- `srcset`

  - : Eine oder mehrere durch Kommas getrennte Strings, die mögliche Bildquellen angeben, die der {{Glossary("user_agent", "User Agent")}} verwenden kann. Jeder String besteht aus:

    1. Einer {{Glossary("URL", "URL")}} zu einem Bild
    2. Optional, Leerzeichen gefolgt von einem der folgenden:

       - Einem Breiten-Deskriptor (eine positive ganze Zahl unmittelbar gefolgt von `w`). Der Breiten-Deskriptor wird durch die im `sizes` Attribut angegebene Quellgröße geteilt, um die effektive Pixeldichte zu berechnen.
       - Einem Pixeldichte-Deskriptor (eine positive gleitkommazahl, der unmittelbar von `x` gefolgt wird).

    Wenn kein Deskriptor angegeben ist, wird die Quelle standardmäßig mit `1x` zugewiesen.

    Es ist nicht korrekt, Breiten-Deskriptoren und Pixeldichte-Deskriptoren im selben `srcset` Attribut zu mischen. Doppelte Deskriptoren (z. B. zwei Quellen im selben `srcset`, die beide mit `2x` beschrieben werden) sind ebenfalls ungültig.

    Wenn das `srcset` Attribut Breiten-Deskriptoren verwendet, muss das `sizes` Attribut ebenfalls vorhanden sein, oder das `srcset` selbst wird ignoriert.

    Der User Agent wählt eine der verfügbaren Quellen nach eigenem Ermessen aus. Dies gibt ihnen beträchtlichen Spielraum, ihre Auswahl basierend auf Benutzerpräferenzen oder {{Glossary("bandwidth", "Bandbreite")}}-Bedingungen zu gestalten. Siehe unser [Responsive images](/de/docs/Web/HTML/Responsive_images) Tutorial für ein Beispiel.

- `width`
  - : Die intrinsische Breite des Bildes in Pixeln. Muss eine Ganzzahl ohne Einheit sein.
- `usemap`

  - : Die partielle {{Glossary("URL", "URL")}} (beginnend mit `#`) einer [Bildkarte](/de/docs/Web/HTML/Element/map), die dem Element zugeordnet ist.

    > [!NOTE]
    > Sie können dieses Attribut nicht verwenden, wenn das `<img>` Element innerhalb eines {{htmlelement("a")}} oder {{HTMLElement("button")}} Elements ist.

### Veraltete Attribute

- `align` {{deprecated_inline}}

  - : Richtet das Bild im Kontext seiner Umgebung aus. Verwenden Sie die {{cssxref('float')}} und/oder {{cssxref('vertical-align')}} {{Glossary("CSS", "CSS")}} Eigenschaften anstelle dieses Attributs. Zulässige Werte:

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
  - : Die Breite eines Rahmens um das Bild. Verwenden Sie die {{cssxref('border')}} {{Glossary("CSS", "CSS")}} Eigenschaft stattdessen.
- `hspace` {{deprecated_inline}}
  - : Die Anzahl von Pixeln Leerraum links und rechts des Bildes. Verwenden Sie die {{cssxref('margin')}} CSS Eigenschaft stattdessen.
- `longdesc` {{deprecated_inline}}

  - : Ein Link zu einer detaillierteren Beschreibung des Bildes. Mögliche Werte sind eine {{Glossary("URL", "URL")}} oder eine Element-[`id`](/de/docs/Web/HTML/Global_attributes/id).

    > [!NOTE]
    > Dieses Attribut wird in der neuesten {{Glossary("W3C", "W3C")}} Version, [HTML 5.2](https://html.spec.whatwg.org/multipage/obsolete.html#element-attrdef-img-longdesc), erwähnt, wurde jedoch aus dem {{Glossary("WHATWG", "WHATWG")}}'s [HTML Living Standard](https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element) entfernt. Es hat eine unsichere Zukunft; Autoren sollten eine {{Glossary("WAI", "WAI")}}-{{Glossary("ARIA", "ARIA")}} Alternative wie [`aria-describedby`](https://www.w3.org/TR/wai-aria-1.1/#aria-describedby) oder [`aria-details`](https://www.w3.org/TR/wai-aria-1.1/#aria-details) verwenden.

- `name` {{deprecated_inline}}
  - : Ein Name für das Element. Verwenden Sie das [`id`](/de/docs/Web/HTML/Global_attributes/id) Attribut stattdessen.
- `vspace` {{deprecated_inline}}
  - : Die Anzahl von Pixeln Leerraum über und unter dem Bild. Verwenden Sie die {{cssxref('margin')}} CSS Eigenschaft stattdessen.

## Styling mit CSS

`<img>` ist ein [ersetztes Element](/de/docs/Web/CSS/Replaced_element); es hat standardmäßig einen {{cssxref("display")}} Wert von `inline`, aber seine Standardabmessungen werden durch die intrinsischen Werte des eingebetteten Bildes definiert, als wäre es `inline-block`. Sie können Eigenschaften wie {{cssxref("border")}}/{{cssxref("border-radius")}}, {{cssxref("padding")}}/{{cssxref("margin")}}, {{cssxref("width")}}, {{cssxref("height")}} usw. auf ein Bild anwenden.

`<img>` hat keine Basislinie, daher wird, wenn Bilder in einem Inline-Formatierungskontext mit {{cssxref("vertical-align", "vertical-align: baseline")}} verwendet werden, die Unterseite des Bildes auf der Textbasislinie platziert.

Sie können die {{cssxref("object-position")}} Eigenschaft verwenden, um das Bild innerhalb des Elements zu positionieren, und die {{cssxref("object-fit")}} Eigenschaft, um die Größe des Bildes innerhalb des Elements anzupassen (zum Beispiel, ob das Bild das Element füllen oder es ausfüllen soll, auch wenn dafür Zuschneiden erforderlich ist).

Je nach Typ kann ein Bild eine intrinsische Breite und Höhe haben. Für einige Bildtypen sind jedoch intrinsische Abmessungen unnötig. {{Glossary("SVG", "SVG")}} Bilder haben beispielsweise keine intrinsische Dimension, wenn ihr Wurzel-{{SVGElement("svg")}} Element keine `width` oder `height` gesetzt hat.

## Barrierefreiheit

### Sinnvolle alternative Beschreibungen verfassen

Der Wert des `alt` Attributs sollte einen klaren und prägnanten Textersatz für den Inhalt des Bildes bieten. Er sollte nicht das Vorhandensein des Bildes selbst oder den Dateinamen des Bildes beschreiben. Wenn das `alt` Attribut absichtlich weggelassen wurde, weil das Bild kein textuelles Äquivalent hat, sollten Sie alternative Methoden in Betracht ziehen, um darzustellen, was das Bild zu kommunizieren versucht.

#### Don't

```html example-bad
<img alt="image" src="penguin.jpg" />
```

#### Do

```html example-good
<img alt="A Penguin on a beach." src="penguin.jpg" />
```

Ein wichtiger Barrierefreiheitstest besteht darin, den Inhalt des `alt` Attributs zusammen mit dem vorausgehenden Textinhalt zu lesen, um zu sehen, ob er denselben Sinn wie das Bild vermittelt. Zum Beispiel, wenn das Bild dem Satz "Auf meinen Reisen sah ich ein niedliches kleines Tier:" vorausging, könnte das _Don't_ Beispiel von einem Bildschirmleser als "Auf meinen Reisen sah ich ein niedliches kleines Tier: Bild" gelesen werden, was keinen Sinn ergibt. Das _Do_ Beispiel könnte von einem Bildschirmleser als "Auf meinen Reisen sah ich ein niedliches kleines Tier: Ein Pinguin am Strand." gelesen werden, was Sinn ergibt.

Für Bilder, die verwendet werden, um eine Aktion auszulösen, beispielsweise Bilder, die innerhalb eines {{htmlelement("a")}} oder {{htmlelement("button")}} Elements verschachtelt sind, sollten Sie in Betracht ziehen, die ausgelöste Aktion im Wert des `alt` Attributs zu beschreiben. Zum Beispiel könnten Sie `alt="nächste Seite"` anstelle von `alt="Pfeil rechts"` schreiben. Sie könnten auch in Betracht ziehen, eine optionale weitere Beschreibung in einem `title` Attribut hinzuzufügen; dies kann von Bildschirmlesern auf Anfrage des Benutzers gelesen werden.

Wenn ein `alt` Attribut bei einem Bild nicht vorhanden ist, können einige Bildschirmleser stattdessen den Dateinamen des Bildes ansagen. Dies kann eine verwirrende Erfahrung sein, wenn der Dateiname nicht repräsentativ für den Inhalt des Bildes ist.

- [Ein alt Entscheidungsbaum • Bilder • WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/images/decision-tree/)
- [Alt-Texte: Der Ultimative Leitfaden — Axess Lab](https://axesslab.com/alt-texts/)
- [Wie man großartige Alt-Texte entwirft: Eine Einführung | Deque](https://www.deque.com/blog/great-alt-text-introduction/)
- [MDN Verständnis der WCAG, Leitfaden 1.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verständnis Erfolgskriterium 1.1.1 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

### SVG als Bild identifizieren

Aufgrund eines [VoiceOver-Bugs](https://webkit.org/b/216364) gibt VoiceOver SVG-Bilder nicht korrekt als Bilder aus. Fügen Sie [`role="img"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/img_role) zu allen `<img>` Elementen mit SVG Quelldateien hinzu, um sicherzustellen, dass unterstützende Technologien SVG als Bildinhalte korrekt ausgeben.

```html
<img src="mdn.svg" alt="MDN" role="img" />
```

### Das title Attribut

Das [`title`](/de/docs/Web/HTML/Global_attributes/title) Attribut ist kein akzeptabler Ersatz für das `alt` Attribut. Vermeiden Sie auch, den Wert des `alt` Attributs im `title` Attribut desselben Bildes zu duplizieren. Dies kann dazu führen, dass einige Bildschirmleser denselben Text zweimal ansagen, was eine verwirrende Erfahrung schafft.

Das `title` Attribut sollte auch nicht als ergänzende Bildunterschriftinformation verwendet werden, um eine `alt` Beschreibung eines Bildes zu begleiten. Wenn ein Bild eine Bildunterschrift benötigt, verwenden Sie die [`figure`](/de/docs/Web/HTML/Element/figure) und [`figcaption`](/de/docs/Web/HTML/Element/figcaption) Elemente.

Der Wert des `title` Attributs wird dem Benutzer normalerweise als Tooltip dargestellt, der kurz erscheint, nachdem der Mauszeiger auf dem Bild zum Stehen kommt. Während dies dem Benutzer _zusätzliche Informationen_ bieten kann, sollten Sie nicht davon ausgehen, dass der Benutzer es jemals sieht: Der Benutzer könnte nur über Tastatur oder Touchscreen verfügen. Wenn Sie Informationen haben, die besonders wichtig oder wertvoll für den Benutzer sind, präsentieren Sie diese inline unter Verwendung einer der oben genannten Methoden anstelle von `title`.

- [Verwendung des HTML title Attributs – aktualisiert | The Paciello Group](https://www.tpgi.com/using-the-html-title-attribute-updated/)

## Beispiele

### Alternativer Text

Das folgende Beispiel bettet ein Bild in die Seite ein und enthält einen alternativen Text für Barrierefreiheit.

```html
<img src="favicon144.png" alt="MDN" />
```

{{ EmbedLiveSample('Alternative_text', '100%', '160') }}

### Bildlink

Dieses Beispiel baut auf dem vorherigen auf und zeigt, wie das Bild in einen Link verwandelt werden kann. Um dies zu tun, verschachteln Sie das `<img>` Tag innerhalb des {{HTMLElement("a")}}. Sie sollten den alternativen Text so beschreiben, dass er die Ressource ausdrückt, auf die der Link zeigt, als ob Sie stattdessen einen Textlink verwenden würden.

```html
<a href="https://developer.mozilla.org">
  <img src="favicon144.png" alt="Visit the MDN site" />
</a>
```

{{ EmbedLiveSample('Image_link', '100%', '160') }}

### Nutzung des srcset Attributs

In diesem Beispiel fügen wir ein `srcset` Attribut mit einem Verweis auf eine hochauflösende Version des Logos ein; dies wird anstelle des `src` Bildes auf hochauflösenden Geräten geladen. Das Bild, das im `src` Attribut angegeben ist, wird als ein `1x` Kandidat in {{Glossary("User_agent", "User Agents")}} gezählt, die `srcset` unterstützen.

```html
<img src="favicon72.png" alt="MDN" srcset="favicon144.png 2x" />
```

{{EmbedLiveSample("Using_the_srcset_attribute", "100%", "160")}}

### Nutzung der srcset und sizes Attribute

Das `src` Attribut wird in {{Glossary("User_agent", "User Agents")}}, die `srcset` unterstützen, ignoriert, wenn `w` Deskriptoren enthalten sind. Wenn die `(max-width: 600px)` Mediensituation zutrifft, wird das 200 Pixel breite Bild geladen (es ist dasjenige, das `200px` am nächsten kommt), andernfalls wird das andere Bild geladen.

```html
<img
  src="clock-demo-200px.png"
  alt="The time is 12:45."
  srcset="clock-demo-200px.png 200w, clock-demo-400px.png 400w"
  sizes="(max-width: 600px) 200px, 50vw" />
```

{{EmbedLiveSample("Using_the_srcset_and_sizes_attributes", "100%", 350)}}

> [!NOTE]
> Um die Größenänderung in Aktion zu sehen, {{LiveSampleLink('Using_the_srcset_and_sizes_attributes', 'sehen Sie sich das Beispiel auf einer separaten Seite an')}}, damit Sie den Inhaltsbereich tatsächlich anpassen können.

## Sicherheits- und Datenschutzbedenken

Obwohl `<img>` Elemente unschuldige Verwendungen haben, können sie unerwünschte Folgen für Sicherheit und Datenschutz des Nutzers haben. Siehe [Referer Header: Privacy and Security Concerns](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns) für weitere Informationen und Abhilfemaßnahmen.

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
          >Fließinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#embedded_content"
          >eingebetteter Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#palpable_content"
          >fühlbarer Inhalt</a
        >. Wenn das Element ein <code>usemap</code> Attribut hat, ist es auch Teil der interaktiven Inhaltskategorie.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "Void-Element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Es muss ein Start-Tag haben und darf keinen End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Jedes Element, das eingebettete Inhalte akzeptiert.</td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
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
      <th scope="row">Zugelassene ARIA-Rollen</th>
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
            or <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a>
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
- [HTML Bilder](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images)
- [Image file type and format guide](/de/docs/Web/Media/Guides/Formats/Image_types)
- [Responsive images](/de/docs/Web/HTML/Responsive_images)
