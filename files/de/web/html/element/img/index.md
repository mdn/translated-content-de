---
title: "<img>: Das Bild-Einbettungselement"
slug: Web/HTML/Element/img
l10n:
  sourceCommit: 75326725db2daa924618e58ae31a43345c7a16dc
---

{{HTMLSidebar}}

Das **`<img>`** [HTML](/de/docs/Web/HTML) Element bettet ein Bild in das Dokument ein.

{{EmbedInteractiveExample("pages/tabbed/img.html", "tabbed-standard")}}

Das obige Beispiel zeigt die Verwendung des `<img>` Elements:

- Das `src`-Attribut ist **erforderlich** und enthält den Pfad zu dem Bild, das Sie einbetten möchten.
- Das `alt`-Attribut enthält einen textuellen Ersatz für das Bild, der verpflichtend ist und **äußerst nützlich** für die Barrierefreiheit — Bildschirmlesegeräte lesen den Attributwert vor, damit Anwender verstehen, was das Bild bedeutet. Alternativtext wird auch angezeigt, wenn das Bild aus irgendeinem Grund nicht geladen werden kann: zum Beispiel Netzwerkfehler, Inhaltsblockierung oder Link-Zerfall.

Es gibt viele andere Attribute für verschiedene Zwecke:

- [Referrer](/de/docs/Web/HTTP/Headers/Referrer-Policy)/[CORS](/de/docs/Glossary/CORS) Kontrolle für Sicherheit und Datenschutz: siehe [`crossorigin`](#crossorigin) und [`referrerpolicy`](#referrerpolicy).
- Verwenden Sie sowohl [`width`](#width) als auch [`height`](#height), um die intrinsische Größe des Bildes festzulegen und so Platz zu reservieren, bevor es geladen wird, um Layout-Verschiebungen zu verringern.
- Responsivitäts-Hinweise mit [`sizes`](#sizes) und [`srcset`](#srcset) (siehe auch das {{htmlelement("picture")}} Element und unser [Leitfaden für responsive Bilder](/de/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)).

## Unterstützte Bildformate

Der HTML-Standard listet nicht auf, welche Bildformate unterstützt werden sollen, sodass [Benutzeragenten](/de/docs/Glossary/user_agent) unterschiedliche Formate unterstützen können.

> [!NOTE]
> Der [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Formats/Image_types) bietet umfassende Informationen über Bildformate und deren Unterstützung in Webbrowsern.
> Dieser Abschnitt ist nur eine Zusammenfassung!

Die Bilddateiformate, die am häufigsten im Web verwendet werden, sind:

- [APNG (Animated Portable Network Graphics)](/de/docs/Web/Media/Formats/Image_types#apng_animated_portable_network_graphics) — Gute Wahl für verlustfreie Animationssequenzen (GIF ist weniger leistungsfähig)
- [AVIF (AV1 Image File Format)](/de/docs/Web/Media/Formats/Image_types#avif_image) — Gute Wahl sowohl für Bilder als auch animierte Bilder aufgrund hoher Leistung.
- [GIF (Graphics Interchange Format)](/de/docs/Web/Media/Formats/Image_types#gif_graphics_interchange_format) — Gute Wahl für _einfache_ Bilder und Animationen.
- [JPEG (Joint Photographic Expert Group image)](/de/docs/Web/Media/Formats/Image_types#jpeg_joint_photographic_experts_group_image) — Gute Wahl für verlustbehaftete Komprimierung von Standbildern (derzeit am beliebtesten).
- [PNG (Portable Network Graphics)](/de/docs/Web/Media/Formats/Image_types#png_portable_network_graphics) — Gute Wahl für verlustfreie Komprimierung von Standbildern (etwas bessere Qualität als JPEG).
- [SVG (Scalable Vector Graphics)](/de/docs/Web/Media/Formats/Image_types#svg_scalable_vector_graphics) — Vektorbildformat. Verwenden Sie für Bilder, die genau in verschiedenen Größen gezeichnet werden müssen.
- [WebP (Web Picture format)](/de/docs/Web/Media/Formats/Image_types#webp_image) — Ausgezeichnete Wahl sowohl für Bilder als auch animierte Bilder

Formate wie [WebP](/de/docs/Web/Media/Formats/Image_types#webp_image) und [AVIF](/de/docs/Web/Media/Formats/Image_types#avif_image) werden empfohlen, da sie viel besser als PNG, JPEG, GIF für sowohl Standbilder als auch animierte Bilder abschneiden.

SVG bleibt das empfohlene Format für Bilder, die genau in verschiedenen Größen gezeichnet werden müssen.

## Bildladefehler

Wenn beim Laden oder Rendern eines Bildes ein Fehler auftritt und ein `onerror` Ereignis-Handler für das [`error`](/de/docs/Web/API/HTMLElement/error_event) Ereignis eingerichtet wurde, wird dieser aufgerufen. Dies kann in mehreren Situationen geschehen, einschließlich:

- Das `src`-Attribut ist leer (`""`) oder `null`.
- Die `src` [URL](/de/docs/Glossary/URL) ist die gleiche wie die URL der Seite, die der Benutzer derzeit besucht.
- Das Bild ist so beschädigt, dass es nicht geladen werden kann.
- Die Metadaten des Bildes sind so beschädigt, dass es unmöglich ist, seine Abmessungen zu ermitteln, und keine Abmessungen in den Attributen des `<img>` Elements angegeben wurden.
- Das Bild ist in einem Format, das vom [Benutzeragenten](/de/docs/Glossary/user_agent) nicht unterstützt wird.

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- [`alt`](/de/docs/Web/API/HTMLImageElement/alt#usage_notes)

  - : Definiert den Text, der das Bild auf der Seite ersetzen kann.

    > [!NOTE]
    > Browser zeigen nicht immer Bilder an. Es gibt eine Reihe von Situationen, in denen ein Browser Bilder möglicherweise nicht anzeigt, beispielsweise:
    >
    > - Nicht-visuelle Browser (wie diejenigen, die von Menschen mit Sehbehinderungen verwendet werden)
    > - Der Benutzer entscheidet sich, keine Bilder anzuzeigen (um Bandbreite zu sparen, aus Datenschutzgründen)
    > - Das Bild ist ungültig oder ein [nicht unterstützter Typ](#unterstützte_bildformate)
    >
    > In diesen Fällen kann der Browser das Bild durch den Text im `alt`-Attribut des Elements ersetzen. Aus diesen und anderen Gründen sollten Sie wann immer möglich einen sinnvollen Wert für `alt` bereitstellen.

    Wenn dieses Attribut auf einen leeren String (`alt=""`) gesetzt wird, bedeutet dies, dass dieses Bild _nicht_ ein wesentlicher Bestandteil des Inhalts ist (es ist Dekoration oder ein Tracking-Pixel) und nicht-visuelle Browser es möglicherweise vom [Rendering](/de/docs/Glossary/Engine/Rendering) auslassen können. Visuelle Browser werden auch das kaputte Bildsymbol ausblenden, wenn das `alt`-Attribut leer ist und das Bild nicht angezeigt werden konnte.

    Dieses Attribut wird auch verwendet, wenn das Bild in Text kopiert und eingefügt oder ein verlinktes Bild in einem Lesezeichen gespeichert wird.

- `attributionsrc` {{experimental_inline}}

  - : gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}} Header zusammen mit der Bildanfrage sendet.

    Auf der Serverseite wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}} oder {{httpheader("Attribution-Reporting-Register-Trigger")}} Headers in der Antwort auszulösen, um eine bildbasierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#html-based_event_sources) oder einen [Attributionstrigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#html-based_attribution_triggers) zu registrieren. Welcher Antwortheader zurückgesendet werden sollte, hängt vom Wert des `Attribution-Reporting-Eligible` Headers ab, der die Registrierung ausgelöst hat.

    Das entsprechende Quellen- oder Trigger-Ereignis wird ausgelöst, sobald der Browser die Antwort mit der Bilddatei erhält.

    > [!NOTE]
    > Weitere Informationen finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

    Es gibt zwei Versionen dieses Attributs, die Sie einstellen können:

    - Boolean, d.h. nur der `attributionsrc` Name. Dies gibt an, dass Sie den {{httpheader("Attribution-Reporting-Eligible")}} Header an denselben Server senden möchten, auf den das `src`-Attribut zeigt. Dies ist in Ordnung, wenn Sie die Registrierung der Attributionsquelle oder des Triggers auf demselben Server handhaben. Bei der Registrierung eines Attributionstriggers ist diese Eigenschaft optional und ein Boolean-Wert wird verwendet, wenn sie weggelassen wird.
    - Wert, der eine oder mehrere URLs enthält, zum Beispiel:

    ```html
    <img
      src="image-file.png"
      alt="My image file description"
      attributionsrc="https://a.example/register-source
                         https://b.example/register-source" />
    ```

    Dies ist nützlich in Fällen, in denen die angeforderte Ressource nicht auf einem Server liegt, den Sie kontrollieren, oder wenn Sie die Registrierung der Attributionsquelle auf einem anderen Server handhaben möchten. In diesem Fall können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcenanforderung erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}} Header an die in `attributionSrc` angegebenen URL(s) gesendet, zusätzlich zum Ursprungsstandort der Ressource. Diese URLs können dann mit einem angemessenen {{httpheader("Attribution-Reporting-Register-Source")}} oder {{httpheader("Attribution-Reporting-Register-Trigger")}} Header antworten, um die Registrierung abzuschließen.

    > [!NOTE]
    > Die Angabe mehrerer URLs bedeutet, dass mehrere Attributionsquellen an derselben Funktion registriert werden können. Sie könnten zum Beispiel verschiedene Kampagnen haben, deren Erfolg Sie messen möchten, und unterschiedliche Berichte zu unterschiedlichen Daten generieren.

- [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)

  - : Gibt an, ob das Abrufen des Bildes mithilfe einer [CORS](/de/docs/Glossary/CORS) Anfrage durchgeführt werden muss. Bilddaten aus einem [CORS-fähigen Bild](/de/docs/Web/HTML/CORS_enabled_image), das aus einer CORS-Anfrage stammt, können im {{HTMLElement("canvas")}} Element wiederverwendet werden, ohne als "[verfälscht](/de/docs/Web/HTML/CORS_enabled_image#security_and_tainted_canvases)" markiert zu sein.

    Wenn das `crossorigin` Attribut _nicht_ angegeben ist, wird eine nicht-CORS-Anfrage gesendet (ohne den {{httpheader("Origin")}} Anfrageheader), und der Browser markiert das Bild als verfälscht und schränkt den Zugriff auf seine Bilddaten ein, was die Verwendung in {{HTMLElement("canvas")}}-Elementen verhindert.

    Wenn das `crossorigin` Attribut _angegeben_ ist, wird eine CORS-Anfrage gesendet (mit dem {{httpheader("Origin")}} Anfrageheader); wenn der Server jedoch nicht die Zustimmung erteilt, den Zugriff auf Bilddaten über Ursprungsseiten hinweg zuzulassen (indem er keinen {{httpheader("Access-Control-Allow-Origin")}} Antwortheader sendet oder die Ursprungsseite nicht in einem gesendeten {{httpheader("Access-Control-Allow-Origin")}} Antwortheader einbezieht), blockiert der Browser das Laden des Bildes und protokolliert einen CORS-Fehler in der Developer-Tools-Konsole.

    Erlaubte Werte:

    - `anonymous`
      - : Eine CORS-Anfrage wird ohne Anmeldeinformationen gesendet (d. h. ohne [Cookies](/de/docs/Glossary/cookie), [X.509-Zertifikate](https://datatracker.ietf.org/doc/html/rfc5280) oder {{httpheader("Authorization")}} Anfrageheader).
    - `use-credentials`
      - : Die CORS-Anfrage wird mit Anmeldeinformationen gesendet (d. h. Cookies, X.509-Zertifikate und der `Authorization` Anfrageheader). Wenn die Ursprungsseite sich nicht dafür entscheidet, Anmeldeinformationen mit der Ursprungsseite zu teilen (indem sie den `Access-Control-Allow-Credentials: true` Antwortheader zurücksendet), markiert der Browser das Bild als verfälscht und schränkt den Zugriff auf seine Bilddaten ein.

    Wenn das Attribut einen ungültigen Wert hat, behandeln Browser es so, als ob der Wert `anonymous` verwendet wurde. Weitere Informationen finden Sie in den [CORS-Einstellungen für Attribute](/de/docs/Web/HTML/Attributes/crossorigin).

- `decoding`

  - : Dieses Attribut gibt dem Browser einen Hinweis darauf, ob er die Bilddecodierung zusammen mit dem Rendern des anderen DOM-Inhalts in einem einzigen Darstellungsschritt durchführen soll, der "korrekter" aussieht (`sync`), oder ob er den anderen DOM-Inhalt zuerst rendern und darstellen und dann das Bild decodieren und es später darstellen soll (`async`). In der Praxis bedeutet `async`, dass der nächste Zwischenschritt nicht auf die Bilddecodierung wartet.

    Es ist oft schwierig, einen merklichen Effekt zu erkennen, wenn `decoding` bei statischen `<img>`-Elementen verwendet wird. Sie werden wahrscheinlich zunächst als leere Bilder gerendert, während die Bilddateien abgerufen werden (entweder aus dem Netzwerk oder aus dem Cache) und dann unabhängig behandelt, sodass die "Synchronisierung" der Inhaltupdates weniger offensichtlich ist. Das Blockieren des Renderns, während die Decodierung durchgeführt wird, kann jedoch messbar sein — selbst wenn es mit dem menschlichen Auge schwer wahrnehmbar ist. Siehe [What does the image decoding attribute actually do?](https://www.tunetheweb.com/blog/what-does-the-image-decoding-attribute-actually-do/) für eine detailliertere Analyse (tunetheweb.com, 2023).

    Wenn Sie unterschiedliche `decoding` Typen verwenden, können Unterschiede deutlicher sichtbar werden, wenn `<img>`-Elemente dynamisch über JavaScript in das DOM eingefügt werden — siehe [`HTMLImageElement.decoding`](/de/docs/Web/API/HTMLImageElement/decoding) für mehr Details.

    Erlaubte Werte:

    - `sync`
      - : Decodiert das Bild synchron zusammen mit dem Rendern des anderen DOM-Inhalts und stellt alles zusammen dar.
    - `async`
      - : Decodiert das Bild asynchron, nach dem Rendern und Darstellen des anderen DOM-Inhalts.
    - `auto`
      - : Keine Präferenz für den Decodierungsmodus; der Browser entscheidet, was für den Benutzer am besten ist. Dies ist der Standardwert.

- [`elementtiming`](/de/docs/Web/HTML/Attributes/elementtiming)

  - : Markiert das Bild zur Beobachtung durch die [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming) API. Der angegebene Wert wird zu einem Bezeichner für das beobachtete Bildelement. Siehe auch die [`elementtiming`](/de/docs/Web/HTML/Attributes/elementtiming) Attributseite.

- `fetchpriority`

  - : Gibt einen Hinweis auf die relative Priorität beim Abrufen des Bildes. Erlaubte Werte:

    - `high`
      - : Signalisiert einen Abruf mit hoher Priorität im Vergleich zu anderen Bildern.
    - `low`
      - : Signalisiert einen Abruf mit niedriger Priorität im Vergleich zu anderen Bildern.
    - `auto`
      - : Standard: Signalisiert automatische Bestimmung der Abrufpriorität im Vergleich zu anderen Bildern.

- `height`

  - : Die intrinsische Höhe des Bildes in Pixeln. Muss eine Ganzzahl ohne Einheit sein.

    > [!NOTE]
    > Die Angabe von `height` und [`width`](#width) ermöglicht es, das [Seitenverhältnis](/de/docs/Glossary/aspect_ratio) des Bildes vom Browser vor dem Laden des Bildes berechnen zu lassen. Dieses Seitenverhältnis wird verwendet, um den benötigten Platz für die Darstellung des Bildes zu reservieren, was Layoutverschiebungen verringert oder sogar verhindert, wenn das Bild heruntergeladen und auf dem Bildschirm angezeigt wird. Die Reduzierung von Layoutverschiebungen ist ein wesentlicher Bestandteil einer guten Benutzererfahrung und Web-Performance.

- `ismap`

  - : Dieses boolesche Attribut gibt an, dass das Bild Teil einer [serverseitigen Karte](https://en.wikipedia.org/wiki/Image_map#Server-side) ist. Wenn ja, werden die Koordinaten, auf die der Benutzer auf das Bild geklickt hat, an den Server gesendet.

    > [!NOTE]
    > Dieses Attribut ist nur zulässig, wenn das `<img>` Element ein Nachkomme eines {{htmlelement("a")}} Elements mit einem gültigen [`href`](/de/docs/Web/HTML/Element/a#href) Attribut ist. Dies gibt Benutzern ohne Zeigevorrichtungen ein alternatives Ziel.

- `loading`

  - : Gibt an, wie der Browser das Bild laden soll:

    - `eager`
      - : Lädt das Bild sofort, unabhängig davon, ob das Bild derzeit im sichtbaren Ansichtsfenster ist oder nicht (dies ist der Standardwert).
    - `lazy`
      - : Verzögert das Laden des Bildes, bis es eine berechnete Entfernung vom Ansichtsfenster erreicht, wie vom Browser definiert. Die Absicht besteht darin, das Netzwerk- und Speicherbandbreite zu vermeiden, die erforderlich ist, um das Bild zu verarbeiten, bis relativ sicher ist, dass es benötigt wird. Dies verbessert im Allgemeinen die Leistung des Inhalts in den meisten typischen Anwendungsfällen.

    > [!NOTE]
    > Das Laden wird nur verzögert, wenn JavaScript aktiviert ist. Dies ist eine Anti-Tracking-Maßnahme, da, wenn ein Benutzeragent Lazy Loading unterstützt, wenn Skripting deaktiviert ist, es immer noch möglich wäre, die ungefähre Scrollposition eines Benutzers während einer Sitzung zu verfolgen, indem strategisch Bilder im Markup einer Seite platziert werden, sodass ein Server verfolgen kann, wie viele Bilder angefordert und wann angefordert werden.

    > [!NOTE]
    > Bilder mit `loading` auf `lazy` werden niemals geladen, wenn sie keinen sichtbaren Teil eines Elements schneiden, selbst wenn das Laden von ihnen dies ändern würde, da nicht geladene Bilder eine `width` und `height` von `0` haben. Das Setzen von `width` und `height` auf Lazy Loaded Bildern behebt dieses Problem und ist eine bewährte Praxis, [empfohlen von der Spezifikation](https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element). Dies hilft auch, Layoutverschiebungen zu vermeiden.

- `referrerpolicy`

  - : Ein String, der angibt, welchen Referrer zu verwenden ist, wenn die Ressource abgerufen wird:

    - `no-referrer`: Der {{HTTPHeader("Referer")}} Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}} Header wird nicht an [Ursprünge](/de/docs/Glossary/origin) ohne [TLS](/de/docs/Glossary/TLS) ([HTTPS](/de/docs/Glossary/HTTPS)) gesendet.
    - `origin`: Der gesendete Referrer wird auf den Ursprung der verweisenden Seite beschränkt: sein [Schema](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL), [Host](/de/docs/Glossary/host) und [Port](/de/docs/Glossary/port).
    - `origin-when-cross-origin`: Der an andere Ursprünge gesendete Referrer wird auf das Schema, den Host und den Port beschränkt. Navigationen auf demselben Ursprung enthalten immer noch den Pfad.
    - `same-origin`: Ein Referrer wird für [gleiches Ursprungsprinzip](/de/docs/Glossary/Same-origin_policy) gesendet, aber Anfragen über Ursprünge hinweg enthalten keine Referrer-Informationen.
    - `strict-origin`: Sendet nur den Ursprung des Dokuments als Referrer, wenn die Sicherheitsebene des Protokolls gleich bleibt (HTTPS→HTTPS), sendet jedoch nichts zu einem weniger sicheren Ziel (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard): Senden Sie eine vollständige URL, wenn Sie eine Anfrage zum gleichen Ursprung durchführen, senden Sie nur den Ursprung, wenn die Sicherheitsebene des Protokolls gleich bleibt (HTTPS→HTTPS), und senden Sie keinen Header zu einem weniger sicheren Ziel (HTTPS→HTTP).
    - `unsafe-url`: Der Referrer enthält den Ursprung _und_ den Pfad (jedoch nicht den [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder den [Benutzernamen](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen zu unsicheren Ursprüngen leckt.

- `sizes`

  - : Eine oder mehrere, durch Kommata getrennte Strings, die eine Menge von Quellgrößen angeben. Jede Quellgröße besteht aus:

    1. Einer [Medienbedingung](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#syntax). Diese muss für das letzte Element in der Liste weggelassen werden.
    2. Einem Quellgrößenwert.

    Medienbedingungen beschreiben Eigenschaften des _Ansichtsfensters_, nicht des _Bildes_. Zum Beispiel schlägt `(max-height: 500px) 1000px` vor, eine Quelle von 1000px Breite zu verwenden, wenn das _Ansichtsfenster_ nicht höher als 500px ist.

    Quellgrößenwerte geben die beabsichtigte Anzeigengröße des Bildes an. [Benutzeragenten](/de/docs/Glossary/User_agent) verwenden die aktuelle Quellgröße, um eine der Quellen auszuwählen, die durch das `srcset` Attribut bereitgestellt werden, wenn diese Quellen mit Breitenbeschreibungen (`w`) beschrieben werden. Die ausgewählte Quellgröße beeinflusst die [intrinsische Größe](/de/docs/Glossary/intrinsic_size) des Bildes (die Anzeigegröße des Bildes, wenn kein [CSS](/de/docs/Glossary/CSS) Styling angewendet wird). Wenn das `srcset` Attribut nicht vorhanden ist oder keine Werte mit einem Breitenbeschreibung enthält, hat das `sizes` Attribut keine Wirkung.

- `src`
  - : Die Bild [URL](/de/docs/Glossary/URL). Pflicht für das `<img>` Element. In [Browsern](/de/docs/Glossary/Browser), die `srcset` unterstützen, wird `src` wie ein Kandidatenbild mit einem Pixeldichtemerkmal `1x` behandelt, es sei denn, ein Bild mit diesem Pixeldichtemerkmal ist bereits in `srcset` definiert oder `srcset` enthält `w` Beschreibungen.
- `srcset`

  - : Eine oder mehrere, durch Kommata getrennte Strings, die mögliche Bildquellen für den [Benutzeragenten](/de/docs/Glossary/user_agent) zur Nutzung angeben. Jeder String besteht aus:

    1. Einer [URL](/de/docs/Glossary/URL) zu einem Bild
    2. Optional, Leerzeichen gefolgt von einem der folgenden:

       - Einem Breitenbeschreiber (eine positive ganze Zahl direkt gefolgt von `w`). Der Breitenbeschreiber wird durch die Quellgröße geteilt, die im Attribut `sizes` angegeben ist, um die effektive Pixeldichte zu berechnen.
       - Einem Pixeldichtebeschreiber (eine positive Gleitkommazahl direkt gefolgt von `x`).

    Wenn kein Beschreiber angegeben ist, wird der Quelle der Standardbeschreiber `1x` zugewiesen.

    Es ist nicht korrekt, Breitenbeschreiber und Pixeldichtebeschreiber im selben `srcset` Attribut zu mischen. Doppelte Beschreiber (zum Beispiel zwei Quellen im selben `srcset`, die beide mit `2x` beschrieben sind) sind ebenfalls ungültig.

    Wenn das `srcset` Attribut Breitenbeschreiber verwendet, muss auch das `sizes` Attribut vorhanden sein, sonst wird das `srcset` ignoriert.

    Der Benutzeragent wählt nach eigenem Ermessen eine der verfügbaren Quellen aus. Dies gibt ihm erheblichen Spielraum, seine Auswahl basierend auf Benutzerpräferenzen oder [Bandbreiten](/de/docs/Glossary/bandwidth) Bedingungen anzupassen. Weitere Informationen finden Sie in unserem [Leitfaden für responsive Bilder](/de/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images).

- `width`
  - : Die intrinsische Breite des Bildes in Pixeln. Muss eine Ganzzahl ohne Einheit sein.
- `usemap`

  - : Die partielle [URL](/de/docs/Glossary/URL) (beginnend mit `#`) einer [Bildkarte](/de/docs/Web/HTML/Element/map), die mit dem Element verbunden ist.

    > [!NOTE]
    > Sie können dieses Attribut nicht verwenden, wenn das `<img>` Element in einem {{htmlelement("a")}} oder {{HTMLElement("button")}} Element ist.

### Veraltete Attribute

- `align` {{deprecated_inline}}

  - : Richtig das Bild mit seinem umgebenden Kontext aus. Verwenden Sie die {{cssxref('float')}} und/oder {{cssxref('vertical-align')}} [CSS](/de/docs/Glossary/CSS) Eigenschaften anstelle dieses Attributs. Erlaubte Werte:

    - `top`
      - : Äquivalent zu `vertical-align: top` oder `vertical-align: text-top`
    - `middle`
      - : Äquivalent zu `vertical-align: -moz-middle-with-baseline`
    - `bottom`
      - : Der Standardwert, äquivalent zu `vertical-align: unset` oder `vertical-align: initial`
    - `left`
      - : Äquivalent zu `float: left`
    - `right`
      - : Äquivalent zu `float: right`

- `border` {{deprecated_inline}}
  - : Die Breite eines Rahmens um das Bild. Verwenden Sie die {{cssxref('border')}} [CSS](/de/docs/Glossary/CSS) Eigenschaft stattdessen.
- `hspace` {{deprecated_inline}}
  - : Die Anzahl der Pixel des weißen Raums links und rechts vom Bild. Verwenden Sie die {{cssxref('margin')}} CSS Eigenschaft stattdessen.
- `longdesc` {{deprecated_inline}}

  - : Ein Link zu einer ausführlicheren Beschreibung des Bildes. Mögliche Werte sind eine [URL](/de/docs/Glossary/URL) oder eine Element-[`id`](/de/docs/Web/HTML/Global_attributes#id).

    > [!NOTE]
    > Dieses Attribut wird in der neuesten [W3C](/de/docs/Glossary/W3C) Version, [HTML 5.2](https://html.spec.whatwg.org/multipage/obsolete.html#element-attrdef-img-longdesc), erwähnt, wurde jedoch aus dem [WHATWG](/de/docs/Glossary/WHATWG) [HTML Living Standard](https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element) entfernt. Es hat eine ungewisse Zukunft; Autoren sollten eine [WAI](/de/docs/Glossary/WAI)-[ARIA](/de/docs/Glossary/ARIA) Alternative wie [`aria-describedby`](https://www.w3.org/TR/wai-aria-1.1/#aria-describedby) oder [`aria-details`](https://www.w3.org/TR/wai-aria-1.1/#aria-details) verwenden.

- `name` {{deprecated_inline}}
  - : Ein Name für das Element. Verwenden Sie das [`id`](/de/docs/Web/HTML/Global_attributes#id) Attribut stattdessen.
- `vspace` {{deprecated_inline}}
  - : Die Anzahl der Pixel des weißen Raums über und unter dem Bild. Verwenden Sie die {{cssxref('margin')}} CSS Eigenschaft stattdessen.

## Styling mit CSS

`<img>` ist ein [ersetztes Element](/de/docs/Web/CSS/Replaced_element); es hat einen {{cssxref("display")}} Wert von `inline` standardmäßig, aber seine Standardabmessungen werden durch die eingebetteten inhärenten Werte des Bildes definiert, als wäre es `inline-block`. Sie können Eigenschaften wie {{cssxref("border")}}/{{cssxref("border-radius")}}, {{cssxref("padding")}}/{{cssxref("margin")}}, {{cssxref("width")}}, {{cssxref("height")}}, etc. auf einem Bild setzen.

`<img>` hat keine Grundlinie, daher werden Bilder in einem Inline-Formatierungskontext mit {{cssxref("vertical-align", "vertical-align: baseline")}} am unteren Ende des Bildes auf der Textbasislinie platziert.

Sie können die {{cssxref("object-position")}} Eigenschaft verwenden, um das Bild innerhalb des Elements zu positionieren, und die {{cssxref("object-fit")}} Eigenschaft, um die Größe des Bildes innerhalb des Rahmens zu ändern (zum Beispiel, ob das Bild sich an den Rahmen anpassen oder ihn füllen soll, selbst wenn Klippen erforderlich ist).

Je nach Typ kann ein Bild eine intrinsische Breite und Höhe haben. Für einige Bildtypen sind jedoch keine intrinsischen Dimensionen erforderlich. [SVG](/de/docs/Glossary/SVG)-Bilder haben zum Beispiel keine intrinsischen Dimensionen, wenn ihr Wurzel-{{SVGElement("svg")}} Element keine `width` oder `height` hat.

## Barrierefreiheit

### Bedeutungsvollere alternative Beschreibungen verfassen

Der Wert eines `alt` Attributs sollte einen klaren und prägnanten Textersatz für den Inhalt des Bildes liefern. Es sollte nicht die bloße Anwesenheit des Bildes selbst oder den Dateinamen des Bildes beschreiben. Wenn das `alt` Attribut absichtlich weggelassen wird, weil das Bild keinen textlichen Äquivalent hat, sollten Sie alternative Methoden verwenden, um das, was das Bild zu vermitteln versucht, darzustellen.

#### Don't

```html example-bad
<img alt="image" src="penguin.jpg" />
```

#### Do

```html example-good
<img alt="A Rockhopper Penguin is standing on a beach." src="penguin.jpg" />
```

Wenn kein `alt` Attribut bei einem Bild vorhanden ist, können einige Bildschirmlesegeräte den Dateinamen des Bildes ansagen. Dies kann eine verwirrende Erfahrung sein, wenn der Dateiname den Inhalt des Bildes nicht repräsentiert.

- [Ein Alt-Entscheidungsbaum • Bilder • WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/images/decision-tree/)
- [Alt-texte: Der ultimative Leitfaden — Axess Lab](https://axesslab.com/alt-texts/)
- [Anleitung: Großartige Alt-Texte erstellen | Deque](https://www.deque.com/blog/great-alt-text-introduction/)
- [MDN Understanding WCAG, Leitlinie 1.1 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verständnis des Erfolgskriterium 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

### SVG als Bild identifizieren

Aufgrund eines [VoiceOver Fehlers](https://webkit.org/b/216364) kündigt VoiceOver SVG-Bilder nicht korrekt als Bilder an. Fügen Sie [`role="img"`](/de/docs/Web/Accessibility/ARIA/Roles/img_role) zu allen `<img>` Elementen mit SVG-Quelldateien hinzu, um sicherzustellen, dass assistive Technologien das SVG korrekt als Bildinhalt ankündigen.

```html
<img src="mdn.svg" alt="MDN" role="img" />
```

### Das title Attribut

Das [`title`](/de/docs/Web/HTML/Global_attributes#title) Attribut ist kein akzeptabler Ersatz für das `alt` Attribut. Vermeiden Sie außerdem, den Wert des `alt` Attributs in einem `title` Attribut auf demselben Bild zu duplizieren. Dies könnte dazu führen, dass einige Bildschirmlesegeräte denselben Text zweimal ansagen, was zu Verwirrung führen kann.

Das `title` Attribut sollte auch nicht als ergänzende Beschriftungsinformation verwendet werden, um die `alt` Beschreibung eines Bildes zu begleiten. Wenn ein Bild eine Beschriftung benötigt, verwenden Sie die [`figure`](/de/docs/Web/HTML/Element/figure) und [`figcaption`](/de/docs/Web/HTML/Element/figcaption) Elemente.

Der Wert des `title` Attributs wird dem Benutzer normalerweise als Tooltip präsentiert, der kurz nach dem Bewegen des Cursors über das Bild erscheint. Obwohl dies dem Benutzer zusätzliche Informationen bieten kann, sollten Sie nicht davon ausgehen, dass der Benutzer es jemals sehen wird: Der Benutzer hat möglicherweise nur Tastatur oder Touchscreen. Wenn Sie Informationen haben, die besonders wichtig oder wertvoll für den Benutzer sind, sollten Sie diese inline präsentieren, indem Sie eine der oben genannten Methoden anstelle von `title` verwenden.

- [Verwendung des HTML title Attributs – aktualisiert | The Paciello Group](https://www.tpgi.com/using-the-html-title-attribute-updated/)

## Beispiele

### Alternativer Text

Das folgende Beispiel bettet ein Bild in die Seite ein und enthält alternativen Text zur Barrierefreiheit.

```html
<img src="favicon144.png" alt="MDN" />
```

{{ EmbedLiveSample('Alternative_text', '100%', '160') }}

### Bildlink

Dieses Beispiel erweitert das vorherige, indem es zeigt, wie man das Bild in einen Link verwandelt. Dazu schachteln Sie den `<img>` Tag innerhalb des {{HTMLElement("a")}}. Sie sollten den Alternativtext so beschreiben, als ob der Link auf eine Ressource zeigt, als ob Sie einen Textlink verwenden würden.

```html
<a href="https://developer.mozilla.org">
  <img src="favicon144.png" alt="Visit the MDN site" />
</a>
```

{{ EmbedLiveSample('Image_link', '100%', '160') }}

### Verwendung des srcset Attributs

In diesem Beispiel fügen wir ein `srcset` Attribut mit einem Verweis auf eine hochauflösende Version des Logos hinzu; diese wird anstelle des `src` Bildes auf hochauflösenden Geräten geladen. Das im `src` Attribut referenzierte Bild wird in [Benutzeragenten](/de/docs/Glossary/User_agent), die `srcset` unterstützen, als `1x` Kandidat gezählt.

```html
<img src="favicon72.png" alt="MDN" srcset="favicon144.png 2x" />
```

{{EmbedLiveSample("Using_the_srcset_attribute", "100%", "160")}}

### Verwendung der srcset und sizes Attribute

Das Attribut `src` wird in [Benutzeragenten](/de/docs/Glossary/User_agent), die `srcset` unterstützen, ignoriert, wenn `w` Beschreibungen enthalten sind. Wenn die Medienbedingung `(max-width: 600px)` zutrifft, wird das 200 Pixel breite Bild geladen (es ist das, das `200px` am nächsten kommt), andernfalls wird das andere Bild geladen.

```html
<img
  src="clock-demo-200px.png"
  alt="The time is 12:45."
  srcset="clock-demo-200px.png 200w, clock-demo-400px.png 400w"
  sizes="(max-width: 600px) 200px, 50vw" />
```

{{EmbedLiveSample("Using_the_srcset_and_sizes_attributes", "100%", 350)}}

> [!NOTE]
> Um die Größenänderung in Aktion zu sehen, {{LiveSampleLink('Using_the_srcset_and_sizes_attributes', 'sehen Sie das Beispiel auf einer separaten Seite')}, damit Sie tatsächlich den Inhaltsbereich ändern können.

## Sicherheits- und Datenschutzbedenken

Obwohl `<img>` Elemente harmlose Verwendungen haben, können sie unerwünschte Konsequenzen für die Sicherheit und den Datenschutz der Benutzer haben. Weitere Informationen und Minderung finden Sie unter [Referer Header: Datenschutz- und Sicherheitsbedenken](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns).

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
          >Fließender Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierung Inhalts</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#embedded_content"
          >Eingebetteter Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#palpable_content"
          >spürbarer Inhalt</a
        >. Wenn das Element ein <code>usemap</code> Attribut hat, ist es auch Teil
        der interaktiven Inhaltskategorie.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keiner; es ist ein [leeres Element](/de/docs/Glossary/void_element).</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss ein Starttag haben und darf keinen Endtag haben.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>Jedes Element, das eingebettete Inhalte akzeptiert.</td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA Rolle</th>
      <td>
        <ul>
          <li>
            mit nicht leerem <code>alt</code> Attribut oder ohne
            <code>alt</code> Attribut:
            <code
              ><a href="/de/docs/Web/Accessibility/ARIA/Roles/img_role"
                ><code>img</code></a
              ></code
            >
          </li>
          <li>
            mit leerem <code>alt</code> Attribut:
            <a href="/de/docs/Web/Accessibility/ARIA/Roles/presentation_role"
              ><code>präsentation</code></a
            >
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA Rollen</th>
      <td>
        <ul>
          <li>
            mit nicht leerem <code>alt</code> Attribut:
            <ul>
              <li>
                <code
                  ><a
                    href="/de/docs/Web/Accessibility/ARIA/Roles/button_role"
                    >knopf</a
                  ></code
                >
              </li>
              <li>
                <code
                  ><a
                    href="/de/docs/Web/Accessibility/ARIA/Roles/checkbox_role"
                    >kontrollkästchen</a
                  ></code
                >
              </li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Roles/link_role"><code>link</code></a></li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Roles/menuitem_role"><code>menüelement</code></a></li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role"><code>menüelementcheckbox</code></a></li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role"><code>menüelementradio</code></a></li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Roles/option_role"><code>option</code></a></li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Roles/progressbar_role"><code>fortschrittsbalken</code></a></li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Roles/scrollbar_role"><code>scrollleiste</code></a></li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Roles/separator_role"><code>separator</code></a></li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Roles/slider_role"><code>schieberegler</code></a></li>
              <li>
                <code
                  ><a
                    href="/de/docs/Web/Accessibility/ARIA/Roles/switch_role"
                    >schalter</a
                  ></code
                >
              </li>
              <li>
                <code
                  ><a href="/de/docs/Web/Accessibility/ARIA/Roles/tab_role"
                    >registerkarte</a
                  ></code
                >
              </li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Roles/treeitem_role"><code>baumitem</code></a></li>
            </ul>
          </li>
          <li>
            mit leerem <code>alt</code> Attribut, <a href="/de/docs/Web/Accessibility/ARIA/Roles/none_role"><code>keine</code></a>
            oder <a href="/de/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>präsentation</code></a>
          </li>
          <li>
            ohne <code>alt</code> Attribut, keine <code>rolle</code> erlaubt
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
- [Bilder in HTML](/de/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML)
- [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Formats/Image_types)
- [Responsive Bilder](/de/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
