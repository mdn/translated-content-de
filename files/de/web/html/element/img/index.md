---
title: "<img>: Das Image Embed Element"
slug: Web/HTML/Element/img
l10n:
  sourceCommit: e3977ac28442db55a4e9b74d025ed776fb7c73af
---

{{HTMLSidebar}}

Das **`<img>`** [HTML](/de/docs/Web/HTML) Element bettet ein Bild in das Dokument ein.

{{EmbedInteractiveExample("pages/tabbed/img.html", "tabbed-standard")}}

Das obige Beispiel zeigt die Verwendung des `<img>` Elements:

- Das `src` Attribut ist **erforderlich** und enthält den Pfad zu dem Bild, das Sie einbetten möchten.
- Das `alt` Attribut enthält einen textlichen Ersatz für das Bild, der obligatorisch und **ungemein nützlich** für die Barrierefreiheit ist — Bildschirmlesegeräte lesen den Attributwert ihren Benutzern vor, damit sie wissen, was das Bild bedeutet. Alternativtext wird auch auf der Seite angezeigt, wenn das Bild aus irgendeinem Grund nicht geladen werden kann: zum Beispiel Netzwerkfehler, Inhaltsblockierung oder Link-Verfall.

Es gibt viele weitere Attribute, um verschiedene Zwecke zu erfüllen:

- Steuerung der [Referrer](/de/docs/Web/HTTP/Headers/Referrer-Policy)/{{Glossary("CORS", "CORS")}} für Sicherheit und Datenschutz: siehe [`crossorigin`](#crossorigin) und [`referrerpolicy`](#referrerpolicy).
- Verwenden Sie sowohl [`width`](#width) als auch [`height`](#height), um die intrinsische Größe des Bildes festzulegen und so Content-Layout-Verschiebungen zu mindern, während das Bild geladen wird.
- Hinweise zu responsiven Bildern mit [`sizes`](#sizes) und [`srcset`](#srcset) (siehe auch das {{htmlelement("picture")}} Element und unser [Responsive images](/de/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images) Tutorial).

## Unterstützte Bildformate

Der HTML-Standard gibt nicht an, welche Bildformate unterstützt werden sollten, sodass {{Glossary("user_agent", "User Agents")}} unterschiedliche Formate unterstützen können.

> [!NOTE]
> Der [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Formats/Image_types) bietet umfassende Informationen über Bildformate und deren Unterstützung durch Webbrowser.
> Dieser Abschnitt ist nur eine Zusammenfassung!

Die Bilddateiformate, die am häufigsten im Web verwendet werden, sind:

- [APNG (Animated Portable Network Graphics)](/de/docs/Web/Media/Formats/Image_types#apng_animated_portable_network_graphics) — Gute Wahl für verlustfreie Animationssequenzen (GIF ist weniger performant).
- [AVIF (AV1 Image File Format)](/de/docs/Web/Media/Formats/Image_types#avif_image) — Gute Wahl für sowohl Bilder als auch animierte Bilder aufgrund der hohen Leistung.
- [GIF (Graphics Interchange Format)](/de/docs/Web/Media/Formats/Image_types#gif_graphics_interchange_format) — Gute Wahl für _einfache_ Bilder und Animationen.
- [JPEG (Joint Photographic Expert Group image)](/de/docs/Web/Media/Formats/Image_types#jpeg_joint_photographic_experts_group_image) — Gute Wahl zur verlustbehafteten Kompression von Standbildern (derzeit das beliebteste).
- [PNG (Portable Network Graphics)](/de/docs/Web/Media/Formats/Image_types#png_portable_network_graphics) — Gute Wahl für verlustfreie Kompression von Standbildern (etwas bessere Qualität als JPEG).
- [SVG (Scalable Vector Graphics)](/de/docs/Web/Media/Formats/Image_types#svg_scalable_vector_graphics) — Vektorbildformat. Verwendung für Bilder, die in verschiedenen Größen präzise gezeichnet werden müssen.
- [WebP (Web Picture format)](/de/docs/Web/Media/Formats/Image_types#webp_image) — Hervorragende Wahl für sowohl Bilder als auch animierte Bilder.

Formate wie [WebP](/de/docs/Web/Media/Formats/Image_types#webp_image) und [AVIF](/de/docs/Web/Media/Formats/Image_types#avif_image) werden empfohlen, da sie viel besser als PNG, JPEG, GIF sowohl für Standbilder als auch für animierte Bilder abschneiden.

SVG bleibt das empfohlene Format für Bilder, die in verschiedenen Größen präzise gezeichnet werden müssen.

## Fehler beim Laden von Bildern

Wenn beim Laden oder Rendern eines Bildes ein Fehler auftritt und ein `onerror` Ereignishandler für das [`error`](/de/docs/Web/API/HTMLElement/error_event) Ereignis gesetzt wurde, wird dieser Ereignishandler aufgerufen. Dies kann in mehreren Situationen passieren, einschließlich:

- Das `src` Attribut ist leer (`""`) oder `null`.
- Die `src` {{Glossary("URL", "URL")}} ist dieselbe wie die URL der Seite, die der Benutzer derzeit aufgerufen hat.
- Das Bild ist in irgendeiner Weise beschädigt, sodass es nicht geladen werden kann.
- Die Metadaten des Bildes sind so beschädigt, dass es unmöglich ist, seine Abmessungen abzurufen, und keine Abmessungen wurden in den Attributen des `<img>` Elements angegeben.
- Das Bild ist in einem Format, das vom {{Glossary("user_agent", "User Agent")}} nicht unterstützt wird.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- [`alt`](/de/docs/Web/API/HTMLImageElement/alt#usage_notes)

  - : Definiert Text, der das Bild auf der Seite ersetzen kann.

    > [!NOTE]
    > Browser zeigen nicht immer Bilder an. Es gibt eine Reihe von Situationen, in denen ein Browser möglicherweise keine Bilder anzeigt, wie zum Beispiel:
    >
    > - Nicht-visuelle Browser (wie die, die von Menschen mit Sehbehinderungen verwendet werden)
    > - Der Benutzer entscheidet sich, keine Bilder anzuzeigen (um Bandbreite zu sparen, aus Datenschutzgründen)
    > - Das Bild ist ungültig oder ein [nicht unterstützter Typ](#unterstützte_bildformate)
    >
    > In diesen Fällen kann der Browser das Bild durch den Text im `alt` Attribut des Elements ersetzen. Aus diesen und anderen Gründen sollten Sie nach Möglichkeit einen nützlichen Wert für `alt` angeben.

    Wenn dieses Attribut auf einen leeren String (`alt=""`) gesetzt wird, zeigt dies an, dass dieses Bild _nicht_ ein Schlüsselteil des Inhalts ist (es ist Dekoration oder ein Tracking-Pixel), und dass nicht-visuelle Browser es möglicherweise vom {{Glossary("Engine/Rendering", "Rendering")}} ausschließen. Visuelle Browser werden auch das zerbrochene Bildsymbol ausblenden, wenn das `alt` Attribut leer ist und das Bild nicht angezeigt werden kann.

    Dieses Attribut wird auch verwendet, wenn das Bild in Text kopiert und eingefügt oder ein verlinktes Bild zu einem Lesezeichen gespeichert wird.

- `attributionsrc` {{experimental_inline}}

  - : Gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}} Header zusammen mit der Bildanforderung sendet.

    Auf der Serverseite wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}} oder {{httpheader("Attribution-Reporting-Register-Trigger")}} Headers in der Antwort auszulösen, um eine Bild-basierte [Attribution-Quelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#html-based_event_sources) oder einen [Attribution-Trigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#html-based_attribution_triggers) zu registrieren. Welcher Antwortheader zurückgesendet werden sollte, hängt vom Wert des `Attribution-Reporting-Eligible` Headers ab, der die Registrierung ausgelöst hat.

    Das entsprechende Quellen- oder Trigger-Ereignis wird ausgelöst, sobald der Browser die Antwort mit der Bilddatei erhält.

    > [!NOTE]
    > Siehe die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) für weitere Details.

    Es gibt zwei Versionen dieses Attributs, die Sie festlegen können:

    - Boolean, also nur der `attributionsrc` Name. Dies gibt an, dass Sie möchten, dass der {{httpheader("Attribution-Reporting-Eligible")}} Header an denselben Server gesendet wird, auf den das `src` Attribut verweist. Dies ist in Ordnung, wenn Sie die Registrierung der Quellen- oder Trigger-Attribution auf demselben Server verwalten. Bei der Registrierung eines Attributionstriggers ist diese Eigenschaft optional, und ein Boolean-Wert wird verwendet, wenn sie weggelassen wird.
    - Wert, der eine oder mehrere URLs enthält, zum Beispiel:

    ```html
    <img
      src="image-file.png"
      alt="My image file description"
      attributionsrc="https://a.example/register-source
                         https://b.example/register-source" />
    ```

    Dies ist nützlich in Fällen, in denen die angeforderte Ressource nicht auf einem Server liegt, den Sie kontrollieren, oder wenn Sie die Registrierung der Quellenattribution auf einem anderen Server abwickeln möchten. In diesem Fall können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressource angefordert wird, wird der {{httpheader("Attribution-Reporting-Eligible")}} Header an die in `attributionsrc` angegebenen URL(s) zusätzlich zum Ursprungsort der Ressource gesendet. Diese URLs können dann mit einem {{httpheader("Attribution-Reporting-Register-Source")}} oder {{httpheader("Attribution-Reporting-Register-Trigger")}} Header antworten, wie es zur Vervollständigung der Registrierung angebracht ist.

    > [!NOTE]
    > Wenn Sie mehrere URLs angeben, bedeutet dies, dass mehrere Attribution-Quellen für dasselbe Feature registriert werden können. Sie könnten zum Beispiel verschiedene Kampagnen haben, deren Erfolg Sie messen wollen, was das Generieren unterschiedlicher Berichte auf unterschiedlichen Daten beinhaltet.

- [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)

  - : Gibt an, ob das Abrufen des Bildes mit einer {{Glossary("CORS", "CORS")}} Anfrage durchgeführt werden muss. Bilddaten von einem [CORS-fähigen Bild](/de/docs/Web/HTML/CORS_enabled_image), das von einer CORS-Anfrage zurückgegeben wird, können im {{HTMLElement("canvas")}} Element ohne Markierung als "[verunreinigt](/de/docs/Web/HTML/CORS_enabled_image#security_and_tainted_canvases)" wiederverwendet werden.

    Wenn das `crossorigin` Attribut _nicht_ angegeben ist, wird eine Nicht-CORS-Anfrage gesendet (ohne den {{httpheader("Origin")}} Request-Header), und der Browser markiert das Bild als verunreinigt und beschränkt den Zugriff auf seine Bilddaten, um dessen Verwendung in {{HTMLElement("canvas")}} Elementen zu verhindern.

    Wenn das `crossorigin` Attribut _angegeben_ ist, wird eine CORS-Anfrage gesendet (mit dem {{httpheader("Origin")}} Anforderungsheader); aber wenn der Server nicht das Opt-In für das Zulassen des Zugriffs auf Bilddaten von Fremdquellen durch die Ursprungsseite gestattet (indem er keinen {{httpheader("Access-Control-Allow-Origin")}} Antwortheader sendet, oder die Ursprungsseite nicht in einem {{httpheader("Access-Control-Allow-Origin")}} Antwortheader eingeschlossen ist, den er sendet), blockiert der Browser das Bild vom Laden und protokolliert einen CORS-Fehler in die Entwicklertools-Konsole.

    Erlaubte Werte:

    - `anonymous`
      - : Eine CORS-Anfrage wird ohne Anmeldeinformationen gesendet (das heißt, keine {{Glossary("cookie", "Cookies")}}, [X.509 Zertifikate](https://datatracker.ietf.org/doc/html/rfc5280), oder {{httpheader("Authorization")}} Anforderungsheader).
    - `use-credentials`
      - : Die CORS-Anfrage wird mit allen Anmeldeinformationen gesendet (das heißt, Cookies, X.509 Zertifikate und der `Authorization` Anforderungsheader). Wenn der Server nicht in das Teilen von Anmeldeinformationen mit der Ursprungsseite einwilligt (indem er den `Access-Control-Allow-Credentials: true` Antwortheader zurücksendet), markiert der Browser das Bild als verunreinigt und beschränkt den Zugang zu seinen Bilddaten.

    Wenn das Attribut einen ungültigen Wert hat, behandeln Browser es so, als ob der Wert `anonymous` verwendet wurde. Siehe [CORS-Einstellungseigenschaften](/de/docs/Web/HTML/Attributes/crossorigin) für zusätzliche Informationen.

- `decoding`

  - : Dieses Attribut gibt dem Browser einen Hinweis darauf, ob es die Bilddekodierung zusammen mit dem Rendern des anderen DOM-Inhalts in einem einzigen Präsentationsschritt, der "korrekter" aussieht (`sync`), durchführen oder zuerst den anderen DOM-Inhalt rendern und präsentieren und das Bild dann später dekodieren und präsentieren soll (`async`). In der Praxis bedeutet `async`, dass der nächste Paint nicht wartet, bis das Bild dekodiert ist.

    Es ist oft schwierig, einen merkbaren Effekt zu erkennen, wenn `decoding` bei statischen `<img>` Elementen verwendet wird. Sie werden wahrscheinlich zunächst als leere Bilder gerendert, während die Bilddateien abgerufen werden (entweder aus dem Netzwerk oder aus dem Cache) und dann unabhängig verarbeitet, sodass das "Syncing" der Inhaltsaktualisierungen weniger offensichtlich ist. Das Blockieren des Renderings während die Dekodierung stattfindet, kann jedoch _gemessen_ werden — auch wenn es mit dem menschlichen Auge schwer zu beobachten ist. Siehe [Was bewirkt das Bilddekodierungsattribut eigentlich?](https://www.tunetheweb.com/blog/what-does-the-image-decoding-attribute-actually-do/) für eine detailliertere Analyse (tunetheweb.com, 2023).

    Die Verwendung unterschiedlicher `decoding` Typen kann zu deutlicheren Unterschieden führen, wenn `<img>` Elemente dynamisch über JavaScript in das DOM eingefügt werden — siehe [`HTMLImageElement.decoding`](/de/docs/Web/API/HTMLImageElement/decoding) für weitere Details.

    Erlaubte Werte:

    - `sync`
      - : Dekodiere das Bild synchron zusammen mit dem Rendern des anderen DOM-Inhalts und präsentiere alles zusammen.
    - `async`
      - : Dekodierung des Bildes asynchron, nach dem Rendern und Präsentieren des anderen DOM-Inhalts.
    - `auto`
      - : Keine Präferenz für den Dekodierungsmodus; der Browser entscheidet, was am besten für den Benutzer ist. Dies ist der Standardwert.

- [`elementtiming`](/de/docs/Web/HTML/Attributes/elementtiming)

  - : Markiert das Bild zur Beobachtung durch die [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming) API. Der angegebene Wert wird zu einem Bezeichner für das beobachtete Bildelement. Siehe auch die Seite zum [`elementtiming`](/de/docs/Web/HTML/Attributes/elementtiming) Attribut.

- `fetchpriority`

  - : Gibt einen Hinweis auf die relative Priorität, die beim Abrufen des Bildes verwendet wird.
    Erlaubte Werte:

    - `high`
      - : Ruft das Bild mit hoher Priorität im Vergleich zu anderen Bildern ab.
    - `low`
      - : Ruft das Bild mit niedriger Priorität im Vergleich zu anderen Bildern ab.
    - `auto`
      - : Keine Präferenz für die Abrufpriorität.
        Dies ist der Standardwert.
        Er wird verwendet, wenn kein Wert oder ein ungültiger Wert festgelegt wird.

    Weitere Informationen finden Sie unter [`HTMLImageElement.fetchPriority`](/de/docs/Web/API/HTMLImageElement/fetchPriority).

- `height`

  - : Die intrinsische Höhe des Bildes, in Pixeln. Muss eine ganze Zahl ohne Einheit sein.

    > [!NOTE]
    > Die Einbeziehung von `height` und [`width`](#width) ermöglicht es dem Browser, das {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Bildes zu berechnen, bevor das Bild geladen wird. Dieses Seitenverhältnis wird verwendet, um den Platz zu reservieren, der zum Anzeigen des Bildes erforderlich ist, wodurch eine Layout-Verschiebung reduziert oder sogar verhindert wird, wenn das Bild heruntergeladen und auf den Bildschirm gemalt wird. Die Reduzierung von Layout-Verschiebungen ist ein wesentlicher Bestandteil einer guten Benutzererfahrung und Web-Performance.

- `ismap`

  - : Dieses Boolean-Attribut gibt an, dass das Bild Teil einer [serverseitigen Karte](https://en.wikipedia.org/wiki/Image_map#Server-side) ist. Wenn dies der Fall ist, werden die Koordinaten, an denen der Benutzer auf das Bild geklickt hat, an den Server gesendet.

    > [!NOTE]
    > Dieses Attribut ist nur zulässig, wenn das `<img>` Element ein Nachfahre eines {{htmlelement("a")}} Elements mit einem gültigen [`href`](/de/docs/Web/HTML/Element/a#href) Attribut ist. Das bietet Benutzern ohne Zeigegeräte ein alternatives Ziel.

- `loading`

  - : Gibt an, wie der Browser das Bild laden soll:

    - `eager`
      - : Lädt das Bild sofort, unabhängig davon, ob das Bild derzeit im sichtbaren Viewport ist oder nicht (dies ist der Standardwert).
    - `lazy`
      - : Verzögert das Laden des Bildes, bis es eine berechnete Entfernung vom Viewport erreicht, wie vom Browser definiert. Die Absicht ist, das Netzwerk und die Speicherbandbreite zu vermeiden, die zum Behandeln des Bildes erforderlich sind, bis es mit ziemlicher Sicherheit benötigt wird. Dies verbessert im Allgemeinen die Leistung des Inhalts in den meisten typischen Anwendungsfällen.

    > [!NOTE]
    > Das Laden wird nur verzögert, wenn JavaScript aktiviert ist. Dies ist eine Anti-Tracking-Maßnahme, da es einer Website trotzdem möglich wäre, die ungefähre Scrollposition eines Benutzers während einer Sitzung zu verfolgen, indem strategisch Bilder im Markup einer Seite platziert werden, sodass ein Server verfolgen kann, wie viele Bilder angefordert und wann angefordert werden.

    > [!NOTE]
    > Bilder mit `loading` auf `lazy` gesetzt werden niemals geladen, wenn sie keinen sichtbaren Teil eines Elements überschneiden, auch wenn das Laden dieser Bilder diese Änderung hervorrufen würde, da nicht geladene Bilder eine `width` und `height` von `0` haben. Das Hinzufügen von `width` und `height` zu verzögert geladenen Bildern behebt dieses Problem und ist eine bewährte Praxis, [die von der Spezifikation empfohlen wird](https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element). Dies hilft auch, Layout-Verschiebungen zu verhindern.

- `referrerpolicy`

  - : Ein String, der angibt, welchen Referrer beim Abrufen der Ressource verwendet werden soll:

    - `no-referrer`: Der {{HTTPHeader("Referer")}} Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}} Header wird nicht an {{Glossary("origin", "Origin")}}s ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`: Der gesendete Referrer wird auf das Origin der verweisenden Seite beschränkt sein: deren [Scheme](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`: Der Referrer, der an andere Origins gesendet wird, ist auf das Scheme, den Host und den Port beschränkt. Navigierungen im gleichen Origin enthalten weiterhin den Pfad.
    - `same-origin`: Ein Referrer wird für {{Glossary("Same-origin_policy", "gleiche Origin")}} gesendet, aber Anfragen an andere Origins enthalten keine Referrerinformationen.
    - `strict-origin`: Senden Sie nur das Origin des Dokuments als Referrer, wenn das Sicherheitsprotokoll gleich bleibt (HTTPS→HTTPS), senden Sie es jedoch nicht an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard): Senden Sie eine vollständige URL bei einer Anfrage zum gleichen Origin, senden Sie nur das Origin, wenn das Sicherheitsprotokoll gleich bleibt (HTTPS→HTTPS), und senden Sie keinen Header an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `unsafe-url`: Der Referrer beinhaltet das Origin _und_ den Pfad (jedoch nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder [Benutzername](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Origin und Pfade von TLS-geschützten Ressourcen an unsichere Origin weitergibt.

- `sizes`

  - : Eine oder mehrere durch Kommata getrennte Strings, die ein Set von Quellgrößen angeben. Jede Quellgröße besteht aus:

    1. Einer [Medienbedingung](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#syntax). Diese muss für das letzte Element in der Liste weggelassen werden.
    2. Einem Quellgrößenwert.

    Medienbedingungen beschreiben Eigenschaften des _Viewports_, nicht des _Bildes_. Zum Beispiel, `(max-height: 500px) 1000px` fordert die Verwendung einer Quelle von 1000px Breite, wenn der _Viewport_ nicht höher als 500px ist.

    Quellgrößenwerte geben die beabsichtigte Anzeigengröße des Bildes an. {{Glossary("User_agent", "User Agents")}} verwenden die aktuelle Quellgröße, um eine der Quellen auszuwählen, die durch das `srcset` Attribut bereitgestellt werden, wenn diese Quellen mit Breitenbeschreibungen (`w`) beschrieben werden. Die gewählte Quellgröße beeinflusst die {{Glossary("intrinsic_size", "intrinsische Größe")}} des Bildes (die Anzeigegröße des Bildes, wenn keine {{Glossary("CSS", "CSS")}} Styles angewendet werden). Wenn das `srcset` Attribut fehlt oder keine Werte mit einer Breitenbeschreibung enthält, hat das `sizes` Attribut keinen Effekt.

- `src`
  - : Die Bild {{Glossary("URL", "URL")}}. Obligatorisch für das `<img>` Element. In {{Glossary("Browser", "Browsern")}}, die `srcset` unterstützen, wird `src` wie ein Kandidat-Bild mit einem Pixeldichte-Deskriptor `1x` behandelt, es sei denn, ein Bild mit diesem Pixeldichte-Deskriptor ist bereits in `srcset` definiert oder `srcset` enthält `w` Deskriptoren.
- `srcset`

  - : Eine oder mehrere durch Kommata getrennte Strings, die mögliche Bildquellen für den {{Glossary("user_agent", "User Agent")}} angeben, die verwendet werden können. Jeder String besteht aus:

    1. Einem {{Glossary("URL", "URL")}} zu einem Bild
    2. Optional, Leerzeichen gefolgt von einem der folgenden:

       - Einem Breitendeskriptor (eine positive ganze Zahl direkt gefolgt von `w`). Der Breitendeskriptor wird durch die Quellgröße dividiert, die im `sizes` Attribut angegeben ist, um die effektive Pixeldichte zu berechnen.
       - Einem Pixeldichte-Deskriptor (eine positive Gleitkommazahl direkt gefolgt von `x`).

    Wenn kein Deskriptor angegeben ist, wird die Quelle mit dem Standarddeskriptor von `1x` zugewiesen.

    Es ist falsch, Breitendeskriptoren und Pixeldichte-Deskriptoren im selben `srcset` Attribut zu mischen. Doppelte Deskriptoren (zum Beispiel zwei Quellen im selben `srcset`, die beide mit `2x` beschrieben werden) sind ebenfalls ungültig.

    Wenn das `srcset` Attribut Breitendeskriptoren verwendet, muss das `sizes` Attribut ebenfalls vorhanden sein, oder das `srcset` selbst wird ignoriert.

    Der User Agent wählt nach eigenem Ermessen eine der verfügbaren Quellen aus. Dies bietet ihnen einen erheblichen Spielraum, ihre Auswahl basierend auf Dingen wie Benutzerpräferenzen oder {{Glossary("bandwidth", "Bandbreiten")}} zu treffen. Siehe unser [Responsive images](/de/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images) Tutorial für ein Beispiel.

- `width`
  - : Die intrinsische Breite des Bildes in Pixeln. Muss eine ganze Zahl ohne Einheit sein.
- `usemap`

  - : Der partielle {{Glossary("URL", "URL")}} (beginnend mit `#`) einer [Bildkarte](/de/docs/Web/HTML/Element/map), die mit dem Element verbunden ist.

    > [!NOTE]
    > Sie können dieses Attribut nicht verwenden, wenn das `<img>` Element innerhalb eines {{htmlelement("a")}} oder {{HTMLElement("button")}} Elements ist.

### Veraltete Attribute

- `align` {{deprecated_inline}}

  - : Richten Sie das Bild mit seinem umgebenden Kontext aus. Verwenden Sie stattdessen die {{cssxref('float')}} und/oder {{cssxref('vertical-align')}} {{Glossary("CSS", "CSS")}} Eigenschaften anstelle dieses Attributs. Erlaubte Werte:

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
  - : Die Breite eines Rahmens um das Bild. Verwenden Sie stattdessen die {{cssxref('border')}} {{Glossary("CSS", "CSS")}} Eigenschaft.
- `hspace` {{deprecated_inline}}
  - : Die Anzahl der Pixel von Leerraum links und rechts des Bildes. Verwenden Sie stattdessen die {{cssxref('margin')}} CSS Eigenschaft.
- `longdesc` {{deprecated_inline}}

  - : Ein Link zu einer detaillierteren Beschreibung des Bildes. Mögliche Werte sind eine {{Glossary("URL", "URL")}} oder ein Element [`id`](/de/docs/Web/HTML/Global_attributes/id).

    > [!NOTE]
    > Dieses Attribut wird in der neuesten {{Glossary("W3C", "W3C")}} Version, [HTML 5.2](https://html.spec.whatwg.org/multipage/obsolete.html#element-attrdef-img-longdesc), erwähnt, wurde jedoch aus dem {{Glossary("WHATWG", "WHATWG")}}'s [HTML Living Standard](https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element) entfernt. Es hat eine ungewisse Zukunft; Autoren sollten eine {{Glossary("WAI", "WAI")}}-{{Glossary("ARIA", "ARIA")}} Alternative wie [`aria-describedby`](https://www.w3.org/TR/wai-aria-1.1/#aria-describedby) oder [`aria-details`](https://www.w3.org/TR/wai-aria-1.1/#aria-details) verwenden.

- `name` {{deprecated_inline}}
  - : Ein Name für das Element. Verwenden Sie stattdessen das [`id`](/de/docs/Web/HTML/Global_attributes/id) Attribut.
- `vspace` {{deprecated_inline}}
  - : Die Anzahl der Pixel von Leerraum über und unter dem Bild. Verwenden Sie stattdessen die {{cssxref('margin')}} CSS Eigenschaft.

## Styling mit CSS

`<img>` ist ein [ersetztes Element](/de/docs/Web/CSS/Replaced_element); es hat einen {{cssxref("display")}} Wert von `inline` standardmäßig, aber seine Standard-Abmessungen sind durch die eingebetteten intrinsischen Werte des Bildes definiert, als wäre es `inline-block`. Sie können Eigenschaften wie {{cssxref("border")}}/{{cssxref("border-radius")}}, {{cssxref("padding")}}/{{cssxref("margin")}}, {{cssxref("width")}}, {{cssxref("height")}}, etc. auf ein Bild anwenden.

`<img>` hat keine Grundlinie, sodass, wenn Bilder in einem Inline-Formatierungskontext mit {{cssxref("vertical-align", "vertical-align: baseline")}} verwendet werden, der untere Teil des Bildes auf die Text-Grundlinie gelegt wird.

Sie können die {{cssxref("object-position")}} Eigenschaft verwenden, um das Bild innerhalb des Box-Elements zu positionieren, und die {{cssxref("object-fit")}} Eigenschaft, um die Größe des Bildes innerhalb der Box anzupassen (zum Beispiel, ob das Bild die Box füllen oder nur passen soll, selbst wenn Abschneiden erforderlich ist).

Abhängig von ihrem Typ kann ein Bild eine intrinsische Breite und Höhe besitzen. Bei einigen Bildtypen sind jedoch keine intrinsischen Dimensionen erforderlich. {{Glossary("SVG", "SVG")}} Bilder haben zum Beispiel keine intrinsischen Dimensionen, wenn deren Root {{SVGElement("svg")}} Elemente keine `width` oder `height` darauf gesetzt haben.

## Barrierefreiheit

### Sinnvolle alternative Beschreibungen verfassen

Der Wert eines `alt` Attributs sollte einen klaren und prägnanten Textersatz für den Inhalt des Bildes bieten. Es sollte nicht das Vorhandensein des Bildes selbst oder den Dateinamen des Bildes beschreiben. Wenn das `alt` Attribut bewusst weggelassen wurde, weil das Bild kein textuelles Äquivalent hat, ziehen Sie alternative Methoden in Erwägung, um das darzustellen, was das Bild zu kommunizieren versucht.

#### Nicht

```html example-bad
<img alt="image" src="penguin.jpg" />
```

#### Tun Sie

```html example-good
<img alt="A Penguin on a beach." src="penguin.jpg" />
```

Ein einfacher Barrierefreiheitstest besteht darin, den Inhalt des `alt` Attributs zusammen mit dem vorhergehenden Textinhalt zu lesen, um zu sehen, ob er die gleiche Bedeutung wie das Bild vermittelt. Wenn das Bild zum Beispiel von dem Satz "Auf meinen Reisen sah ich ein niedliches kleines Tier:" begleitet wurde, könnte das _Nicht_ Beispiel von einem Bildschirmleser als "Auf meinen Reisen sah ich ein niedliches kleines Tier: Bild" vorgelesen werden, was keinen Sinn ergibt. Das _Tun Sie_ Beispiel könnte von einem Bildschirmleser als "Auf meinen Reisen sah ich ein niedliches kleines Tier: Ein Pinguin am Strand." vorgelesen werden, was Sinn ergibt.

Für Bilder, die eine Aktion auslösen sollen, beispielsweise Bilder, die im Inneren eines {{htmlelement("a")}} oder {{htmlelement("button")}} Elements eingebettet sind, ziehen Sie in Betracht, die ausgelöste Aktion im Wert des `alt` Attributs zu beschreiben. Zum Beispiel könnten Sie `alt="nächste Seite"` statt `alt="Pfeil rechts"` schreiben. Sie könnten auch in Erwägung ziehen, eine optionale weitere Beschreibung in einem `title` Attribut hinzuzufügen; dies könnte von Bildschirmlesern auf Wunsch des Benutzers vorgelesen werden.

Wenn ein `alt` Attribut auf einem Bild nicht vorhanden ist, verkünden einige Bildschirmleser möglicherweise den Dateinamen des Bildes stattdessen. Dies kann eine verwirrende Erfahrung sein, wenn der Dateiname nicht repräsentativ für den Inhalt des Bildes ist.

- [Ein Alt Entscheidungsbaum • Bilder • WAI Webzugänglichkeitstutorials](https://www.w3.org/WAI/tutorials/images/decision-tree/)
- [Alt-texte: Der Ultimative Leitfaden — Axess Lab](https://axesslab.com/alt-texts/)
- [Wie man großartige Alt-Texte entwirft: Ein Einführung | Deque](https://www.deque.com/blog/great-alt-text-introduction/)
- [MDN Verständnis von WCAG, Richtlinie 1.1 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verständnis des Erfolgskriterium 1.1.1 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

### SVG als Bild identifizieren

Aufgrund eines [VoiceOver Bugs](https://webkit.org/b/216364) verkündet VoiceOver SVG Bilder nicht korrekt als Bilder. Fügen Sie [`role="img"`](/de/docs/Web/Accessibility/ARIA/Roles/img_role) zu allen `<img>` Elementen mit SVG-Quelldateien hinzu, um sicherzustellen, dass unterstützende Technologien SVG korrekt als Bildinhalte verkünden.

```html
<img src="mdn.svg" alt="MDN" role="img" />
```

### Das Title Attribut

Das [`title`](/de/docs/Web/HTML/Global_attributes/title) Attribut ist kein akzeptabler Ersatz für das `alt` Attribut. Vermeiden Sie außerdem, den Wert des `alt` Attributs in einem `title` Attribut auf demselben Bild zu duplizieren. Dies könnte dazu führen, dass einige Bildschirmleser denselben Text zweimal ankündigen, was eine verwirrende Erfahrung darstellt.

Das `title` Attribut sollte auch nicht als ergänzende Bildunterschrifteninformationen verwendet werden, um eine Bildbeschreibung zu begleiten. Wenn ein Bild eine Bildunterschrift benötigt, verwenden Sie die [`figure`](/de/docs/Web/HTML/Element/figure) und [`figcaption`](/de/docs/Web/HTML/Element/figcaption) Elemente.

Der Wert des `title` Attributs wird normalerweise dem Benutzer als Tooltip präsentiert, der kurz darauf erscheint, nachdem der Cursor über dem Bild anhält. Während dies dem Benutzer _zusätzliche_ Informationen bereitstellen kann, sollten Sie nicht davon ausgehen, dass der Benutzer diese stets sehen wird: der Benutzer könnte nur eine Tastatur oder Touchscreen haben. Wenn Sie Informationen haben, die besonders wichtig oder wertvoll für den Benutzer sind, präsentieren Sie sie inline mit einer der oben erwähnten Methoden, anstatt `title` zu verwenden.

- [Das HTML title Attribut verwenden – aktualisiert | The Paciello Group](https://www.tpgi.com/using-the-html-title-attribute-updated/)

## Beispiele

### Alternative Texte

Das folgende Beispiel bettet ein Bild in die Seite ein und enthält alternativ Texte für die Barrierefreiheit.

```html
<img src="favicon144.png" alt="MDN" />
```

{{EmbedLiveSample('Alternative_text', '100%', '160') }}

### Bildlink

Dieses Beispiel baut auf dem vorherigen auf und zeigt, wie das Bild in einen Link verwandelt wird. Um dies zu tun, verschachteln Sie das `<img>` Tag im Inneren des {{HTMLElement("a")}}. Sie sollten den Alternativtext so formulieren, dass er die Ressource beschreibt, auf die der Link zeigt, als wenn Sie einen Textlink verwenden würden.

```html
<a href="https://developer.mozilla.org">
  <img src="favicon144.png" alt="Visit the MDN site" />
</a>
```

{{ EmbedLiveSample('Image_link', '100%', '160') }}

### Verwendung des srcset Attributs

In diesem Beispiel fügen wir ein `srcset` Attribut mit einem Verweis auf eine hochauflösende Version des Logos ein; Dies wird anstelle des `src` Bildes auf hochauflösenden Geräten geladen. Das Bild, auf das im `src` Attribut verwiesen wird, wird als `1x` Kandidat in {{Glossary("User_agent", "User Agents")}} gezählt, die `srcset` unterstützen.

```html
<img src="favicon72.png" alt="MDN" srcset="favicon144.png 2x" />
```

{{EmbedLiveSample("Using_the_srcset_attribute", "100%", "160")}}

### Verwendung der srcset und sizes Attribute

Das `src` Attribut wird in {{Glossary("User_agent", "User Agents")}}, die `srcset` unterstützen, ignoriert, wenn `w` Deskriptoren enthalten sind. Wenn die `(max-width: 600px)` Medienbedingung zutrifft, wird das 200 Pixel breite Bild geladen (es ist das, das `200px` am genauesten entspricht), sonst wird das andere Bild geladen.

```html
<img
  src="clock-demo-200px.png"
  alt="The time is 12:45."
  srcset="clock-demo-200px.png 200w, clock-demo-400px.png 400w"
  sizes="(max-width: 600px) 200px, 50vw" />
```

{{EmbedLiveSample("Using_the_srcset_and_sizes_attributes", "100%", 350)}}

> [!NOTE]
> Um das Größenänderungsverhalten zu sehen, {{LiveSampleLink('Using_the_srcset_and_sizes_attributes', 'sehen Sie sich das Beispiel auf einer separaten Seite an')}}, damit Sie den Inhaltsbereich tatsächlich anpassen können.

## Sicherheits- und Datenschutzbedenken

Obwohl `<img>` Elemente harmlose Verwendungen haben, können sie unerwünschte Folgen für die Sicherheit und Privatsphäre des Benutzers haben. Siehe [Referer Header: Datenschutz- und Sicherheitsbedenken](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns) für weitere Informationen und Maßnahmen zur Minderung.

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
          >Phrasierungselement</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#embedded_content"
          >Eingebetteter Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#palpable_content"
          >Greifbarer Inhalt</a
        >. Wenn das Element ein <code>usemap</code> Attribut hat, gehört es auch zur interaktiven Inhalt Kategorie.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "void Element")}}.</td>
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
              ><code>presentation</code></a
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
                    >button</a
                  ></code
                >
              </li>
              <li>
                <code
                  ><a
                    href="/de/docs/Web/Accessibility/ARIA/Roles/checkbox_role"
                    >checkbox</a
                  ></code
                >
              </li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Roles/link_role"><code>link</code></a></li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Roles/menuitem_role"><code>menuitem</code></a></li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role"><code>menuitemcheckbox</code></a></li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role"><code>menuitemradio</code></a></li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Roles/option_role"><code>option</code></a></li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Roles/progressbar_role"><code>progressbar</code></a></li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Roles/scrollbar_role"><code>scrollbar</code></a></li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Roles/separator_role"><code>separator</code></a></li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Roles/slider_role"><code>slider</code></a></li>
              <li>
                <code
                  ><a
                    href="/de/docs/Web/Accessibility/ARIA/Roles/switch_role"
                    >switch</a
                  ></code
                >
              </li>
              <li>
                <code
                  ><a href="/de/docs/Web/Accessibility/ARIA/Roles/tab_role"
                    >tab</a
                  ></code
                >
              </li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Roles/treeitem_role"><code>treeitem</code></a></li>
            </ul>
          </li>
          <li>
            mit leerem <code>alt</code> Attribut, <a href="/de/docs/Web/Accessibility/ARIA/Roles/none_role"><code>none</code></a>
            oder <a href="/de/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a>
          </li>
          <li>
            ohne <code>alt</code> Attribut, keine <code>role</code> erlaubt
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM Interface</th>
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
- [Bilder in HTML](/de/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML)
- [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Formats/Image_types)
- [Responsive images](/de/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
