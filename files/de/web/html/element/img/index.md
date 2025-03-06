---
title: "<img>: Das Bildeinbettungselement"
slug: Web/HTML/Element/img
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{HTMLSidebar}}

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

- Das `src`-Attribut ist **erforderlich** und enthält den Pfad zum Bild, das Sie einbetten möchten.
- Das `alt`-Attribut enthält einen textuellen Ersatz für das Bild, was obligatorisch und **äußerst nützlich** für die Barrierefreiheit ist – Bildschirmlesegeräte lesen den Attributwert ihren Benutzern vor, damit sie wissen, was das Bild bedeutet. Alternativtext wird auch angezeigt, wenn das Bild aus irgendeinem Grund nicht geladen werden kann: zum Beispiel bei Netzwerkfehlern, Inhaltsblockierung oder Link-Verlust.

Es gibt viele andere Attribute, um verschiedene Zwecke zu erreichen:

- [Referrer](/de/docs/Web/HTTP/Headers/Referrer-Policy)/{{Glossary("CORS", "CORS")}}-Kontrolle für Sicherheit und Datenschutz: siehe [`crossorigin`](#crossorigin) und [`referrerpolicy`](#referrerpolicy).
- Verwenden Sie sowohl [`width`](#width) als auch [`height`](#height), um die intrinsische Größe des Bildes festzulegen, damit es Platz einnimmt, bevor es geladen wird, um Layoutverschiebungen zu verringern.
- Hinweise zu responsiven Bildern mit [`sizes`](#sizes) und [`srcset`](#srcset) (siehe auch das {{htmlelement("picture")}}-Element und unser [Leitfaden zu responsiven Bildern](/de/docs/Web/HTML/Responsive_images)).

## Unterstützte Bildformate

Der HTML-Standard listet nicht auf, welche Bildformate unterstützt werden sollen, daher können {{Glossary("user_agent", "User Agents")}} unterschiedliche Formate unterstützen.

> [!NOTE]
> Der [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types) bietet umfassende Informationen über Bildformate und deren Unterstützung in Webbrowsern.
> Dieser Abschnitt ist nur eine Zusammenfassung!

Die Bilddateiformate, die am häufigsten im Web verwendet werden, sind:

- [APNG (Animated Portable Network Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#apng_animated_portable_network_graphics) — Gute Wahl für verlustfreie Animationssequenzen (GIF ist weniger performant).
- [AVIF (AV1 Image File Format)](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) — Gute Wahl für Bilder und animierte Bilder aufgrund hoher Leistung.
- [GIF (Graphics Interchange Format)](/de/docs/Web/Media/Guides/Formats/Image_types#gif_graphics_interchange_format) — Gute Wahl für _einfache_ Bilder und Animationen.
- [JPEG (Joint Photographic Expert Group image)](/de/docs/Web/Media/Guides/Formats/Image_types#jpeg_joint_photographic_experts_group_image) — Gute Wahl für verlustbehaftete Komprimierung von Standbildern (derzeit am beliebtesten).
- [PNG (Portable Network Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#png_portable_network_graphics) — Gute Wahl für verlustfreie Komprimierung von Standbildern (leicht bessere Qualität als JPEG).
- [SVG (Scalable Vector Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#svg_scalable_vector_graphics) — Vektorbildformat. Verwenden Sie es für Bilder, die in unterschiedlichen Größen genau gezeichnet werden müssen.
- [WebP (Web Picture format)](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) — Ausgezeichnete Wahl für Bilder und animierte Bilder.

Formate wie [WebP](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) und [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) werden empfohlen, da sie sowohl bei Stand- als auch animierten Bildern viel besser als PNG, JPEG, GIF abschneiden.

SVG bleibt das empfohlene Format für Bilder, die in unterschiedlichen Größen genau gezeichnet werden müssen.

## Bildladefehler

Wenn ein Fehler beim Laden oder Rendern eines Bildes auftritt und ein `onerror`-Ereignishandler für das [`error`](/de/docs/Web/API/HTMLElement/error_event)-Ereignis gesetzt wurde, wird dieser Ereignishandler aufgerufen. Dies kann in mehreren Situationen geschehen, unter anderem:

- Das `src`-Attribut ist leer (`""`) oder `null`.
- Die `src`-URL ist dieselbe wie die URL der Seite, auf der sich der Benutzer gerade befindet.
- Das Bild ist auf eine Weise beschädigt, die verhindert, dass es geladen wird.
- Metadaten des Bildes sind so beschädigt, dass es unmöglich ist, seine Abmessungen abzurufen, und keine Dimensionen wurden in den Attributen des `<img>`-Elements festgelegt.
- Das Bild ist in einem von der {{Glossary("user_agent", "User Agent")}} nicht unterstützten Format.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- [`alt`](/de/docs/Web/API/HTMLImageElement/alt#usage_notes)

  - : Definiert Text, der das Bild auf der Seite ersetzen kann.

    > [!NOTE]
    > Browser zeigen Bilder nicht immer an. Es gibt eine Reihe von Situationen, in denen ein Browser Bilder möglicherweise nicht anzeigt, wie:
    >
    > - Nicht-visuelle Browser (wie sie von Menschen mit Sehbehinderungen verwendet werden)
    > - Der Benutzer entscheidet sich, Bilder nicht anzuzeigen (Speicherung von Bandbreite, Datenschutzgründe)
    > - Das Bild ist ungültig oder ein [nicht unterstützter Typ](#unterstützte_bildformate)
    >
    > In diesen Fällen kann der Browser das Bild durch den Text im `alt`-Attribut des Elements ersetzen. Aus diesen und anderen Gründen sollten Sie wann immer möglich einen nützlichen Wert für `alt` bereitstellen.

    Setzen Sie dieses Attribut auf eine leere Zeichenfolge (`alt=""`), zeigt dies an, dass dieses Bild _kein_ wesentlicher Teil des Inhalts ist (es handelt sich um Dekoration oder ein Analysetransparent) und dass nicht-visuelle Browser es möglicherweise von der {{Glossary("Engine/Rendering", "Darstellung")}} ausschließen. Visuelle Browser werden auch das kaputte Bildsymbol ausblenden, wenn das `alt`-Attribut leer ist und das Bild nicht angezeigt werden konnte.

    Dieses Attribut wird auch verwendet, wenn das Bild in Text kopiert und eingefügt oder ein verknüpftes Bild in einem Lesezeichen gespeichert wird.

- `attributionsrc` {{experimental_inline}}

  - : gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header mit der Bildanfrage sendet.

    Serverseitig wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Headers in der Antwort auszulösen, um eine bildbasierte [Zuweisungsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#html-based_event_sources) oder einen [Zuordnungsauslöser](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#html-based_attribution_triggers) zu registrieren. Welcher Antwortheader zurückgesendet werden sollte, hängt vom Wert des `Attribution-Reporting-Eligible`-Headers ab, der die Registrierung ausgelöst hat.

    Das entsprechende Quell- oder Auslöserereignis wird ausgelöst, sobald der Browser die Antwort mit der Bilddatei erhält.

    > [!NOTE]
    > Weitere Details finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

    Es gibt zwei Versionen dieses Attributs, die Sie festlegen können:

    - Boolean, d.h. nur der Name `attributionsrc`. Dies gibt an, dass Sie möchten, dass der {{httpheader("Attribution-Reporting-Eligible")}}-Header an denselben Server gesendet wird, auf den das `src`-Attribut verweist. Dies ist in Ordnung, wenn Sie die Registrierung der Zuweisungsquelle oder des Auslösers auf demselben Server durchführen. Bei der Registrierung eines Zuweisungsauslösers ist diese Eigenschaft optional, und ein Boolescher Wert wird verwendet, wenn er weggelassen wird.
    - Wert, der eine oder mehrere URLs enthält, zum Beispiel:

    ```html
    <img
      src="image-file.png"
      alt="My image file description"
      attributionsrc="https://a.example/register-source
                         https://b.example/register-source" />
    ```

    Dies ist nützlich, wenn die angeforderte Ressource nicht auf einem Server ist, den Sie steuern, oder Sie die Registrierung der Zuweisungsquelle auf einem anderen Server durchführen möchten. In diesem Fall können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcenanforderung auftritt, wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header an die in `attributionSrc` angegebenen URL(s) zusätzlich zum Ressourcenursprung gesendet. Diese URLs können dann mit einem geeigneten {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header antworten, um die Registrierung abzuschließen.

    > [!NOTE]
    > Die Angabe mehrerer URLs bedeutet, dass auf der gleichen Funktion mehrere Zuweisungsquellen registriert werden können. Sie könnten z.B. verschiedene Kampagnen haben, deren Erfolg Sie messen möchten, wobei dabei Berichte über verschiedene Daten erstellt werden.

- [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)

  - : Gibt an, ob das Abrufen des Bildes unter Verwendung einer {{Glossary("CORS", "CORS")}}-Anfrage erfolgen muss. Bilddaten von einem [CORS-fähigen Bild](/de/docs/Web/HTML/CORS_enabled_image), das aus einer CORS-Anfrage zurückgegeben wird, können im {{HTMLElement("canvas")}}-Element ohne die Markierung "[tainted](/de/docs/Web/HTML/CORS_enabled_image#security_and_tainted_canvases)" wiederverwendet werden.

    Wenn das `crossorigin`-Attribut _nicht_ angegeben ist, wird eine Nicht-CORS-Anfrage gesendet (ohne den {{httpheader("Origin")}}-Anforderungsheader), und der Browser markiert das Bild als beschädigt und beschränkt den Zugriff auf seine Bilddaten, was die Verwendung in {{HTMLElement("canvas")}}-Elementen verhindert.

    Wenn das `crossorigin`-Attribut _angegeben_ ist, wird eine CORS-Anfrage gesendet (mit dem {{httpheader("Origin")}}-Anforderungsheader); wenn der Server jedoch nicht bereit ist, Zugriff auf die Bilddaten über Ursprungsgrezen hinweg zuzulassen (indem kein {{httpheader("Access-Control-Allow-Origin")}}-Antwortheader gesendet wird oder das Origin-Site nicht in einem gesendeten {{httpheader("Access-Control-Allow-Origin")}}-Antwortheader enthalten ist), blockiert der Browser das Bild beim Laden und protokolliert einen CORS-Fehler in der Entwicklertools-Konsole.

    Erlaubte Werte:

    - `anonymous`
      - : Eine CORS-Anfrage wird ohne Anmeldeinformationen gesendet (d.h. keine {{Glossary("cookie", "Cookies")}}, [X.509-Zertifikate](https://datatracker.ietf.org/doc/html/rfc5280) oder {{httpheader("Authorization")}}-Anforderungsheader).
    - `use-credentials`
      - : Die CORS-Anfrage wird mit allen enthaltenen Anmeldeinformationen gesendet (d.h. Cookies, X.509-Zertifikate und der `Authorization`-Anforderungsheader). Wenn der Server keine Anmeldeinformationen mit der Origin-Site teilt (indem er den Antwortheader `Access-Control-Allow-Credentials: true` zurücksendet), markiert der Browser das Bild als beschädigt und beschränkt den Zugriff auf seine Bilddaten.

    Wenn das Attribut einen ungültigen Wert hat, behandeln Browser es so, als ob der Wert `anonymous` verwendet wurde. Weitere Informationen finden Sie in [CORS-Einstellungsattributen](/de/docs/Web/HTML/Attributes/crossorigin).

- `decoding`

  - : Dieses Attribut gibt einen Hinweis darauf, ob der Browser die Bilddecodierung zusammen mit dem Rendern der anderen DOM-Inhalte in einem einzigen Präsentationsschritt, der "korrekter" aussieht (`sync`), oder zuerst die anderen DOM-Inhalte zu rendern und zu präsentieren und dann das Bild zu decodieren und später zu präsentieren (`async`) durchführen soll. In der Praxis bedeutet `async`, dass die nächste Darstellung nicht auf die Bilddecodierung wartet.

    Es ist oft schwierig, einen merklichen Effekt bei statischen `<img>`-Elementen wahrzunehmen, wenn `decoding` verwendet wird. Sie werden wahrscheinlich zunächst als leere Bilder gerendert, während die Bilddateien abgerufen (entweder aus dem Netzwerk oder aus dem Cache) und dann unabhängig verarbeitet werden, sodass die "Synchronisation" der Inhaltsaktualisierungen weniger offensichtlich ist. Das Blockieren des Renderns, während die Decodierung erfolgt, kann messbar sein, selbst wenn es für das menschliche Auge schwer zu beobachten ist. Siehe [Was macht das Bilddecodierungsattribut wirklich?](https://www.tunetheweb.com/blog/what-does-the-image-decoding-attribute-actually-do/) für eine detailliertere Analyse (tunetheweb.com, 2023).

    Unterschiedliche `decoding`-Typen können zu deutlicheren Unterschieden führen, wenn `<img>`-Elemente dynamisch über JavaScript in den DOM eingefügt werden — siehe [`HTMLImageElement.decoding`](/de/docs/Web/API/HTMLImageElement/decoding) für weitere Details.

    Erlaubte Werte:

    - `sync`
      - : Dekodiert das Bild synchron mit dem Rendern der anderen DOM-Inhalte und präsentiert alles zusammen.
    - `async`
      - : Dekodiert das Bild asynchron nach dem Rendern und Präsentieren der anderen DOM-Inhalte.
    - `auto`
      - : Keine Präferenz für den Decodierungsmodus; der Browser entscheidet, was für den Benutzer am besten ist. Dies ist der Standardwert.

- [`elementtiming`](/de/docs/Web/HTML/Attributes/elementtiming)

  - : Markiert das Bild zur Beobachtung durch die [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)-API. Der angegebene Wert wird zur Kennzeichnung des beobachteten Bildelements verwendet. Siehe auch die Seite zum [`elementtiming`](/de/docs/Web/HTML/Attributes/elementtiming)-Attribut.

- `fetchpriority`

  - : Liefert einen Hinweis auf die relative Priorität, wenn das Bild abgerufen wird.
    Erlaubte Werte:

    - `high`
      - : Holt das Bild mit hoher Priorität im Vergleich zu anderen Bildern ab.
    - `low`
      - : Holt das Bild mit niedriger Priorität im Vergleich zu anderen Bildern ab.
    - `auto`
      - : Setze keine Präferenz für die Abrufpriorität.
        Dies ist der Standard.
        Er wird verwendet, wenn kein Wert oder ein ungültiger Wert festgelegt ist.

    Weitere Informationen finden Sie unter [`HTMLImageElement.fetchPriority`](/de/docs/Web/API/HTMLImageElement/fetchPriority).

- `height`

  - : Die intrinsische Höhe des Bildes in Pixeln. Muss eine Ganzzahl ohne Einheit sein.

    > [!NOTE]
    > Die Angabe von `height` und [`width`](#width) ermöglicht es dem Browser, das {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Bildes vor dessen Laden zu berechnen. Dieses Seitenverhältnis wird verwendet, um den Platz zu reservieren, der für die Anzeige des Bildes benötigt wird, wodurch eine Layoutverschiebung reduziert oder sogar verhindert wird, wenn das Bild heruntergeladen und auf dem Bildschirm angezeigt wird. Die Reduzierung der Layoutverschiebung ist ein wesentlicher Bestandteil einer guten Benutzererfahrung und Web-Performance.

- `ismap`

  - : Dieses Boolean-Attribut zeigt an, dass das Bild Teil einer [Server-seitigen Karte](https://en.wikipedia.org/wiki/Image_map#Server-side) ist. Wenn dies der Fall ist, werden die Koordinaten, an denen der Benutzer auf das Bild geklickt hat, an den Server gesendet.

    > [!NOTE]
    > Dieses Attribut ist nur erlaubt, wenn das `<img>`-Element ein Nachkomme eines {{htmlelement("a")}}-Elements mit einem gültigen [`href`](/de/docs/Web/HTML/Element/a#href)-Attribut ist. Dies bietet Benutzern ohne Zeigegeräte ein alternatives Ziel.

- `loading`

  - : Gibt an, wie der Browser das Bild laden soll:

    - `eager`
      - : Lädt das Bild sofort, unabhängig davon, ob sich das Bild derzeit innerhalb des sichtbaren Viewports befindet oder nicht (dies ist der Standardwert).
    - `lazy`
      - : Verschiebt das Laden des Bildes, bis es eine berechnete Entfernung vom Viewport erreicht hat, wie vom Browser definiert. Das Ziel besteht darin, das Netzwerk und den Speicherbedarf so weit wie möglich zu reduzieren, bis sichergestellt ist, dass das Bild benötigt wird. Dies verbessert normalerweise die Leistung des Inhalts in den meisten typischen Anwendungsfällen.

    > [!NOTE]
    > Das Laden wird nur verschoben, wenn JavaScript aktiviert ist. Dies ist eine Anti-Tracking-Maßnahme, da, wenn ein Benutzeragent das verzögerte Laden unterstützt, wenn Skripten deaktiviert sind, es immer noch möglich wäre, die ungefähre Scroll-Position des Benutzers während einer Sitzung zu verfolgen, indem strategisch Bilder im Markup einer Seite platziert werden, sodass ein Server verfolgen kann, wie viele Bilder angefordert werden und wann.

    > [!NOTE]
    > Bilder mit dem auf `lazy` gesetzten `loading`-Attribut werden niemals geladen, wenn sie keine sichtbaren Teile eines Elements schneiden, selbst wenn das Laden dieser dazu führen würde, dass nicht geladene Bilder eine Breite und Höhe von 0 aufweisen. Die Angabe von `width` und `height` für verzögert geladene Bilder behebt dieses Problem und ist eine bewährte Praxis, [wie in der Spezifikation empfohlen](https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element). Dies trägt auch dazu bei, Layoutverschiebungen zu verhindern.

- `referrerpolicy`

  - : Eine Zeichenfolge, die angibt, welchen Referrer beim Abrufen der Ressource zu verwenden ist:

    - `no-referrer`: Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}}-Header wird nicht an {{Glossary("origin", "Ursprünge")}} ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`: Der gesendete Referrer beschränkt sich auf den Ursprung der referenzierenden Seite: ihr [Schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`: Der an andere Ursprünge gesendete Referrer wird auf das Schema, den Host und den Port beschränkt. Bei Navigationen im gleichen Ursprung wird der Pfad weiterhin gesendet.
    - `same-origin`: Ein Referrer wird für {{Glossary("Same-origin_policy", "gleichen Ursprung")}} gesendet, aber bei Anforderungen über Ursprungsgrenzen hinweg werden keine Referrer-Informationen enthalten sein.
    - `strict-origin`: Senden Sie den Ursprung des Dokuments als Referrer, wenn das Protokoll-Sicherheitslevel gleich bleibt (HTTPS→HTTPS), senden Sie es aber nicht an weniger sichere Ziele (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard): Senden Sie bei einer Anforderung im gleichen Ursprung eine vollständige URL, bei der das Protokoll-Sicherheitslevel gleich bleibt (HTTPS→HTTPS), und senden Sie keinen Header an weniger sichere Ziele (HTTPS→HTTP).
    - `unsafe-url`: Der Referrer enthält den Ursprung _und_ den Pfad (aber nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), das [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder den [Benutzernamen](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge weitergibt.

- `sizes`

  - : Eine oder mehrere durch Kommas getrennte Zeichenfolgen, die eine Reihe von Quellgrößen angeben. Jede Quellgröße besteht aus:

    1. Einer [Medienbedingung](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#syntax), die für den letzten Eintrag in der Liste weggelassen werden muss.
    2. Einem Quellgrößenwert.

    Medienbedingungen beschreiben Eigenschaften des _Viewports_ und nicht des _Bildes_. Zum Beispiel besagt `(max-height: 500px) 1000px`, dass eine Quelle mit einer Breite von 1000px verwendet werden soll, wenn der _Viewport_ nicht höher als 500px ist. Da eine Quellgrößenbeschreibung verwendet wird, um die Breite für das Bild während des Seitenlayouts anzugeben, basiert die Medienbedingung typischerweise (aber nicht notwendigerweise) auf der [Breiten-](/de/docs/Web/CSS/@media/width)Information.

    Quellgrößenwerte geben die beabsichtigte Anzeigengröße des Bildes an. {{Glossary("User_agent", "User Agents")}} verwenden die aktuelle Quellgröße, um eine der Quellen auszuwählen, die durch das `srcset`-Attribut bereitgestellt werden, wenn diese Quellen mit Breitenbeschreibungen (`w`) beschrieben werden. Die ausgewählte Quellgröße beeinflusst die {{Glossary("intrinsic_size", "intrinsische Größe")}} des Bildes (die Anzeigengröße des Bildes, wenn keine {{Glossary("CSS", "CSS")}}-Stilgebung angewendet wird). Wenn das `srcset`-Attribut fehlt oder keine Werte mit einer Breitenbeschreibung enthält, hat das `sizes`-Attribut keine Auswirkungen.

    Ein Quellgrößenwert kann eine beliebige nicht-negative [Länge](/de/docs/Web/CSS/length) sein. Es darf keine CSS-Funktionen außer den [mathematischen Funktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#math_functions) verwenden. Einheiten werden auf die gleiche Weise interpretiert wie [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries), also sind alle relativen Längeneinheiten relativ zur Dokumentwurzel und nicht zum `<img>`-Element, d.h. ein `em`-Wert ist relativ zur Schriftgröße der Wurzel und nicht zur Schriftgröße des Bildes. [Prozentwerte](/de/docs/Web/CSS/percentage) sind nicht erlaubt.

    Außerdem können Sie den Wert `auto` verwenden, um die gesamte Liste von Größen oder den ersten Eintrag in der Liste zu ersetzen. Er ist nur gültig, wenn er mit `loading="lazy"` kombiniert wird und zur [konkreten Größe](/de/docs/Web/CSS/image) des Bildes aufgelöst wird.

- `src`
  - : Die Bild-URL. Verpflichtend für das `<img>`-Element. In {{Glossary("Browser", "Browsern")}}, die `srcset` unterstützen, wird `src` wie ein Kandidatenbild mit dem Pixeldichtewert `1x` behandelt, es sei denn, ein Bild mit diesem Pixeldichtewert ist bereits in `srcset` definiert, oder es sei denn, `srcset` enthält `w`-Beschreibungen.
- `srcset`

  - : Eine oder mehrere durch Kommas getrennte Zeichenfolgen, die mögliche Bildquellen für den {{Glossary("user_agent", "User Agent")}} angeben, die er verwenden soll. Jede Zeichenfolge besteht aus:

    1. Einer {{Glossary("URL", "URL")}} zu einem Bild
    2. Optional, Leerzeichen gefolgt von einem der folgenden:

       - Einer Breitenbeschreibung (ein positiver ganzzahliger Wert, direkt gefolgt von `w`). Die Breitenbeschreibung wird durch die im `sizes`-Attribut angegebene Quellgröße geteilt, um die effektive Pixeldichte zu berechnen.
       - Einer Pixeldichtebeschreibung (ein positiver, gleitender Punktwert, direkt gefolgt von `x`).

    Wenn keine Beschreibung angegeben ist, wird die Quelle mit dem Standardwert von `1x` zugewiesen.

    Es ist falsch, Breiten- und Pixeldichtebeschreibungen im selben `srcset`-Attribut zu mischen. Doppelte Beschreibungen (z.B. zwei Quellen im selben `srcset`, die beide mit `2x` beschrieben werden) sind ebenfalls ungültig.

    Wenn das `srcset`-Attribut Breitenbeschreibungen verwendet, muss auch das `sizes`-Attribut vorhanden sein, ansonsten wird das `srcset` selbst ignoriert.

    Der User Agent wählt nach eigenem Ermessen eine der verfügbaren Quellen aus. Dies gibt ihm erheblichen Spielraum, seine Auswahl auf Benutzerpräferenzen oder {{Glossary("bandwidth", "Bandbreitenbedingungen")}} zu stützen. Siehe unser [Leitfaden zu responsiven Bildern](/de/docs/Web/HTML/Responsive_images) für ein Beispiel.

- `width`
  - : Die intrinsische Breite des Bildes in Pixeln. Muss eine Ganzzahl ohne Einheit sein.
- `usemap`

  - : Die partielle URL (beginnend mit `#`) einer [Bildkarte](/de/docs/Web/HTML/Element/map), die mit dem Element verknüpft ist.

    > [!NOTE]
    > Dieses Attribut können Sie nicht verwenden, wenn das `<img>`-Element sich innerhalb eines {{htmlelement("a")}} oder {{HTMLElement("button")}}-Elements befindet.

### Veraltete Attribute

- `align` {{deprecated_inline}}

  - : Justiert das Bild mit seinem umgebenden Kontext. Verwenden Sie stattdessen die {{cssxref('float')}}- und/oder {{cssxref('vertical-align')}}-{{Glossary("CSS", "CSS")}}-Eigenschaften. Erlaubte Werte:

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
  - : Die Breite einer Umrandung um das Bild. Verwenden Sie stattdessen die {{cssxref('border')}}-{{Glossary("CSS", "CSS")}}-Eigenschaft.
- `hspace` {{deprecated_inline}}
  - : Die Anzahl der Pixel Leerraum links und rechts vom Bild. Verwenden Sie stattdessen die {{cssxref('margin')}}-CSS-Eigenschaft.
- `longdesc` {{deprecated_inline}}

  - : Ein Link zu einer detaillierteren Beschreibung des Bildes. Mögliche Werte sind eine {{Glossary("URL", "URL")}} oder eine Element-[`id`](/de/docs/Web/HTML/Global_attributes/id).

    > [!NOTE]
    > Dieses Attribut wird in der neuesten {{Glossary("W3C", "W3C")}}-Version, [HTML 5.2](https://html.spec.whatwg.org/multipage/obsolete.html#element-attrdef-img-longdesc), erwähnt, wurde jedoch aus dem {{Glossary("WHATWG", "Living Standard")}} der {{Glossary("WHATWG", "WHATWG")}} entfernt. Es hat eine unsichere Zukunft; Autoren sollten eine {{Glossary("WAI", "WAI")}}-{{Glossary("ARIA", "ARIA")}}-Alternative wie [`aria-describedby`](https://www.w3.org/TR/wai-aria-1.1/#aria-describedby) oder [`aria-details`](https://www.w3.org/TR/wai-aria-1.1/#aria-details) verwenden.

- `name` {{deprecated_inline}}
  - : Ein Name für das Element. Verwenden Sie stattdessen das [`id`](/de/docs/Web/HTML/Global_attributes/id)-Attribut.
- `vspace` {{deprecated_inline}}
  - : Die Anzahl der Pixel Leerraum oben und unten vom Bild. Verwenden Sie stattdessen die {{cssxref('margin')}}-CSS-Eigenschaft.

## Gestaltung mit CSS

`<img>` ist ein [ersetztes Element](/de/docs/Web/CSS/Replaced_element); Es hat einen {{cssxref("display")}}-Wert von `inline` standardmäßig, aber seine Standardabmessungen werden durch die eingebetteten Eigenschaften des Bildes definiert, als ob es `inline-block` wäre. Sie können Eigenschaften wie {{cssxref("border")}}/{{cssxref("border-radius")}}, {{cssxref("padding")}}/{{cssxref("margin")}}, {{cssxref("width")}}, {{cssxref("height")}}, etc. auf ein Bild anwenden.

`<img>` hat keine Grundlinie, deshalb wird das Bild, wenn es in einem Inline-Formatierungskontext mit {{cssxref("vertical-align", "vertical-align: baseline")}} verwendet wird, auf der Textgrundlinie platziert.

Sie können die Eigenschaft {{cssxref("object-position")}} verwenden, um das Bild innerhalb des Elementkastens zu positionieren, und die Eigenschaft {{cssxref("object-fit")}}, um die Größe des Bildes innerhalb des Kastens zu justieren (zum Beispiel, ob das Bild in den Kasten passen soll oder ihn füllen soll, auch wenn dafür Zuschneiden erforderlich ist).

Abhängig von seinem Typ kann ein Bild eine intrinsische Breite und Höhe haben. Für einige Bildtypen sind jedoch intrinsische Abmessungen nicht erforderlich. {{Glossary("SVG", "SVG")}}-Bilder haben zum Beispiel keine intrinsischen Abmessungen, wenn ihr Wurzel-{{SVGElement("svg")}}-Element keine `width`- oder `height`-Angabe hat.

## Barrierefreiheit

### Sinnvolle alternative Beschreibungen erstellen

Der Wert eines `alt`-Attributs sollte einen klaren und prägnanten textersatz für den Inhalt des Bildes bieten. Es sollte nicht das Vorhandensein des Bildes selbst oder den Dateinamen des Bildes beschreiben. Wenn das `alt`-Attribut absichtlich weggelassen wird, weil das Bild kein Textäquivalent hat, sollten Sie alternative Methoden in Betracht ziehen, um darzustellen, was das Bild vermitteln möchte.

#### Vermeiden Sie

```html example-bad
<img alt="image" src="penguin.jpg" />
```

#### Machen Sie es so

```html example-good
<img alt="A Penguin on a beach." src="penguin.jpg" />
```

Ein wichtiger Barrierefreiheitstest ist es, den Inhalt des `alt`-Attributs zusammen mit dem vorhergehenden Textinhalt zu lesen, um festzustellen, ob es dasselbe Bedeutung wie das Bild vermittelt. Zum Beispiel, wenn das Bild dem Satz "Auf meinen Reisen habe ich ein niedliches kleines Tier gesehen:" vorangestellt war, könnte das _Vermeiden Sie_-Beispiel von einem Bildschirmlesegerät als "Auf meinen Reisen habe ich ein niedliches kleines Tier gesehen: Bild" vorgelesen werden, was keinen Sinn ergibt. Das _Machen Sie es so_-Beispiel könnte von einem Bildschirmlesegerät als "Auf meinen Reisen habe ich ein niedliches kleines Tier gesehen: Ein Pinguin am Strand." vorgelesen werden, was sinnvoll ist.

Für Bilder, die eine Aktion auslösen sollen, zum Beispiel Bilder, die in einem {{htmlelement("a")}}- oder {{htmlelement("button")}}-Element eingebettet sind, sollten Sie die ausgelöste Aktion im `alt`-Attributswert beschreiben. Zum Beispiel könnten Sie `alt="nächste Seite"` statt `alt="Pfeil rechts"` schreiben. Sie könnten auch in Betracht ziehen, eine optionale weitere Beschreibung in einem `title`-Attribut hinzuzufügen; dies kann von Bildschirmlesegeräten gelesen werden, falls vom Benutzer gewünscht wird.

Wenn das `alt`-Attribut bei einem Bild nicht vorhanden ist, können einige Bildschirmlesegeräte möglicherweise stattdessen den Dateinamen des Bildes ankündigen. Dies kann eine verwirrende Erfahrung sein, wenn der Dateiname nicht repräsentativ für den Bildinhalt ist.

- [Ein alt-Entscheidungsbaum • Bilder • WAI-Web-Accessibility-Tutorials](https://www.w3.org/WAI/tutorials/images/decision-tree/)
- [Alt-Texte: Der ultimative Leitfaden — Axess Lab](https://axesslab.com/alt-texts/)
- [Wie man großartige Alt-Texte erstellt: Eine Einführung | Deque](https://www.deque.com/blog/great-alt-text-introduction/)
- [MDN Verständnis von WCAG, Richtlinie 1.1: Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verständnis des Erfolgs-Kriteriums 1.1.1 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

### SVG als Bild identifizieren

Aufgrund eines [VoiceOver-Fehlers](https://webkit.org/b/216364) kündigt VoiceOver SVG-Bilder nicht korrekt als Bilder an. Fügen Sie [`role="img"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/img_role) zu allen `<img>`-Elementen mit SVG-Quelldateien hinzu, um sicherzustellen, dass unterstützende Technologien das SVG korrekt als Bildinhalt ankündigen.

```html
<img src="mdn.svg" alt="MDN" role="img" />
```

### Das title-Attribut

Das [`title`](/de/docs/Web/HTML/Global_attributes/title)-Attribut ist kein akzeptabler Ersatz für das `alt`-Attribut. Vermeiden Sie zudem, den `alt`-Attributswert in einem auf demselben Bild deklarierten `title`-Attribut zu duplizieren. Andernfalls könnten einige Bildschirmlesegeräte denselben Text zweimal ansagen, was eine verwirrende Erfahrung schafft.

Das `title`-Attribut sollte auch nicht als zusätzliche Untertitel-Information verwendet werden, um die `alt`-Beschreibung eines Bildes zu ergänzen. Wenn ein Bild eine Bildunterschrift benötigt, verwenden Sie die [`figure`](/de/docs/Web/HTML/Element/figure)- und [`figcaption`](/de/docs/Web/HTML/Element/figcaption)-Elemente.

Der Wert des `title`-Attributs wird dem Benutzer üblicherweise als Tooltip präsentiert, der kurze Zeit nach der Bewegung des Cursors über dem Bild erscheint. Auch wenn dies dem Benutzer zusätzliche Informationen liefern _kann_, sollten Sie nicht davon ausgehen, dass der Benutzer sie jemals sieht: Der Benutzer hat möglicherweise nur Tastatur oder Touchscreen. Wenn Sie Informationen haben, die für den Benutzer besonders wichtig oder wertvoll sind, präsentieren Sie diese inline unter Verwendung einer der oben genannten Methoden, anstatt `title` zu verwenden.

- [Das HTML-title-Attribut verwenden – aktualisiert | Die Paciello Group](https://www.tpgi.com/using-the-html-title-attribute-updated/)

## Beispiele

### Alternativer Text

Das folgende Beispiel bettet ein Bild auf der Seite ein und enthält alternativen Text für die Barrierefreiheit.

```html
<img src="favicon144.png" alt="MDN" />
```

{{ EmbedLiveSample('Alternative_text', '100%', '160') }}

### Bildlink

Dieses Beispiel baut auf dem vorhergehenden auf und zeigt, wie man das Bild in einen Link verwandelt. Dazu verschachteln Sie das `<img>`-Tag innerhalb des {{HTMLElement("a")}}. Sie sollten den Alternativtext so gestalten, dass er die Ressource beschreibt, auf die der Link verweist, als ob Sie stattdessen einen Textlink verwenden würden.

```html
<a href="https://developer.mozilla.org">
  <img src="favicon144.png" alt="Visit the MDN site" />
</a>
```

{{ EmbedLiveSample('Image_link', '100%', '160') }}

### Verwendung des srcset-Attributs

In diesem Beispiel fügen wir ein `srcset`-Attribut mit einem Verweis auf eine hochauflösende Version des Logos ein; dieses wird anstelle des `src`-Bildes auf hochauflösenden Geräten geladen. Das im `src`-Attribut referenzierte Bild wird in {{Glossary("User_agent", "User Agents")}}, die `srcset` unterstützen, als `1x`-Kandidat gezählt.

```html
<img src="favicon72.png" alt="MDN" srcset="favicon144.png 2x" />
```

{{EmbedLiveSample("Using_the_srcset_attribute", "100%", "160")}}

### Verwendung der srcset- und sizes-Attribute

Das `src`-Attribut wird in {{Glossary("User_agent", "User Agents")}}, die `srcset` unterstützen, ignoriert, wenn `w`-Beschreibungen enthalten sind. Wenn die `(max-width: 600px)`-Medienbedingung zutrifft, wird das 200 Pixel breite Bild geladen (es ist dasjenige, das `200px` am nächsten kommt), sonst wird das andere Bild geladen.

```html
<img
  src="clock-demo-200px.png"
  alt="The time is 12:45."
  srcset="clock-demo-200px.png 200w, clock-demo-400px.png 400w"
  sizes="(max-width: 600px) 200px, 50vw" />
```

{{EmbedLiveSample("Using_the_srcset_and_sizes_attributes", "100%", 350)}}

> [!NOTE]
> Um die Größenänderung in Aktion zu sehen, {{LiveSampleLink('Using_the_srcset_and_sizes_attributes', 'sehen Sie sich das Beispiel auf einer separaten Seite an')}}, damit Sie den Inhaltsbereich tatsächlich ändern können.

## Sicherheits- und Datenschutzbedenken

Obwohl `<img>`-Elemente unschuldige Verwendungen haben, können sie unerwünschte Konsequenzen für die Sicherheit und den Datenschutz der Benutzer haben. Weitere Informationen und Gegenmaßnahmen finden Sie unter [Referer-Header: Datenschutz- und Sicherheitsbedenken](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns).

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories"
          >Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Fließinhalt</a>
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasekartentext</a>
        >,
        <a href="/de/docs/Web/HTML/Content_categories#embedded_content"
          >eingebetteter Inhalt</a>
        >,
        <a href="/de/docs/Web/HTML/Content_categories#palpable_content"
          >fühlbarer Inhalt</a
        >. Wenn das Element ein <code>usemap</code>-Attribut hat, ist es auch
        Teil der interaktiven Inhaltskategorie.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>Kein; es ist ein {{Glossary("void_element", "leeres Element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss ein Eröffnungstag haben und darf kein Schlusstag haben.</td>
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
            mit einem nicht leeren <code>alt</code>-Attribut oder keinem
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

- {{HTMLElement("picture")}}, {{HTMLElement("object")}} und {{HTMLElement("embed")}}-Elemente
- {{cssxref("object-fit")}}, {{cssxref("object-position")}}, {{cssxref("image-orientation")}}, {{cssxref("image-rendering")}} und {{cssxref("image-resolution")}}: Bildbezogene CSS-Eigenschaften.
- [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Schnittstelle für dieses Element
- [HTML-Bilder](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images)
- [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types)
- [Leitfaden zu responsiven Bildern](/de/docs/Web/HTML/Responsive_images)
