---
title: "<img>: Das Bild-Embed-Element"
slug: Web/HTML/Element/img
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

Das **`<img>`**-Element von [HTML](/de/docs/Web/HTML) bettet ein Bild in das Dokument ein.

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
- Das `alt`-Attribut enthält einen Text als Ersatz für das Bild, was verpflichtend und **äußerst nützlich** für die Barrierefreiheit ist — Screenreader lesen den Attributwert für ihre Benutzer vor, damit diese verstehen, was das Bild bedeutet. Alt-Text wird auch auf der Seite angezeigt, wenn das Bild aus irgendeinem Grund nicht geladen werden kann: zum Beispiel bei Netzwerkfehlern, Inhaltsblockierungen oder Link-Verfall.

Es gibt viele weitere Attribute, um verschiedene Zwecke zu erreichen:

- [Referrer](/de/docs/Web/HTTP/Headers/Referrer-Policy)/{{Glossary("CORS", "CORS")}}-Steuerung für Sicherheit und Datenschutz: Siehe [`crossorigin`](#crossorigin) und [`referrerpolicy`](#referrerpolicy).
- Verwenden Sie sowohl [`width`](#width) als auch [`height`](#height), um die intrinsische Größe des Bildes festzulegen, damit es Platz einnimmt, bevor es geladen wird, um Layoutverschiebungen zu minimieren.
- Hinweise für responsive Bilder mit [`sizes`](#sizes) und [`srcset`](#srcset) (siehe auch das {{htmlelement("picture")}}-Element und unser [Leitfaden zu responsiven Bildern](/de/docs/Web/HTML/Responsive_images)).

## Unterstützte Bildformate

Der HTML-Standard listet nicht auf, welche Bildformate unterstützt werden, sodass {{Glossary("user_agent", "User Agents")}} unterschiedliche Formate unterstützen können.

> [!NOTE]
> Der [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types) bietet umfassende Informationen zu Bildformaten und deren Unterstützung in Webbrowsern.
> Dieser Abschnitt ist nur eine Zusammenfassung!

Die Bilddateiformate, die am häufigsten im Web verwendet werden, sind:

- [APNG (Animated Portable Network Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#apng_animated_portable_network_graphics) — Gute Wahl für verlustfreie Animationssequenzen (GIF ist weniger performant)
- [AVIF (AV1 Image File Format)](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) — Gute Wahl für sowohl Bilder als auch animierte Bilder aufgrund hoher Performance.
- [GIF (Graphics Interchange Format)](/de/docs/Web/Media/Guides/Formats/Image_types#gif_graphics_interchange_format) — Gute Wahl für _einfache_ Bilder und Animationen.
- [JPEG (Joint Photographic Expert Group image)](/de/docs/Web/Media/Guides/Formats/Image_types#jpeg_joint_photographic_experts_group_image) — Gute Wahl für verlustbehaftete Komprimierung von Standbildern (derzeit am beliebtesten).
- [PNG (Portable Network Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#png_portable_network_graphics) — Gute Wahl für verlustfreie Komprimierung von Standbildern (leicht bessere Qualität als JPEG).
- [SVG (Scalable Vector Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#svg_scalable_vector_graphics) — Vektorbildformat. Verwenden Sie es für Bilder, die präzise in unterschiedlichen Größen gezeichnet werden müssen.
- [WebP (Web Picture format)](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) — Hervorragende Wahl für sowohl Bilder als auch animierte Bilder.

Formate wie [WebP](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) und [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) werden empfohlen, da sie viel besser als PNG, JPEG und GIF für sowohl Stand- als auch animierte Bilder performen.

SVG bleibt das empfohlene Format für Bilder, die präzise in verschiedenen Größen dargestellt werden müssen.

## Bildladefehler

Wenn ein Fehler beim Laden oder Rendern eines Bildes auftritt und ein `onerror`-Ereignishandler für das [`error`](/de/docs/Web/API/HTMLElement/error_event)-Ereignis gesetzt wurde, wird dieser Ereignishandler aufgerufen. Dies kann in mehreren Situationen passieren, wie zum Beispiel:

- Das `src`-Attribut ist leer (`""`) oder `null`.
- Die `src`-{{Glossary("URL", "URL")}} ist dieselbe wie die URL der Seite, die der Benutzer gerade besucht.
- Das Bild ist in irgendeiner Weise beschädigt, die das Laden verhindert.
- Die Metadaten des Bildes sind so beschädigt, dass die Abmessungen nicht abgerufen werden können und keine Abmessungen in den Attributen des `<img>`-Elements angegeben wurden.
- Das Bild befindet sich in einem Format, das vom {{Glossary("user_agent", "User Agent")}} nicht unterstützt wird.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- [`alt`](/de/docs/Web/API/HTMLImageElement/alt#usage_notes)

  - : Definiert Text, der das Bild ersetzen kann.

    > [!NOTE]
    > Browser zeigen nicht immer Bilder an. Es gibt eine Reihe von Situationen, in denen ein Browser möglicherweise keine Bilder anzeigt, wie zum Beispiel:
    >
    > - Nicht-visuelle Browser (beispielsweise die, die von Menschen mit Sehbehinderungen verwendet werden)
    > - Der Benutzer entscheidet sich, keine Bilder anzuzeigen (um Bandbreite zu sparen, aus Datenschutzgründen)
    > - Das Bild ist ungültig oder ein [nicht unterstützter Typ](#unterstützte_bildformate)
    >
    > In diesen Fällen kann der Browser das Bild durch den Text im `alt`-Attribut des Elements ersetzen. Aus diesen Gründen und anderen sollten Sie, wann immer möglich, einen nützlichen Wert für `alt` bereitstellen.

    Das Setzen dieses Attributs auf einen leeren String (`alt=""`) zeigt an, dass dieses Bild _nicht_ ein wesentlicher Bestandteil des Inhalts ist (es ist Dekoration oder ein Tracking-Pixel), und dass nicht-visuelle Browser es vom {{Glossary("Engine/Rendering", "Rendering")}} ausschließen können. Visuelle Browser werden auch das kaputte Bildsymbol ausblenden, wenn das `alt`-Attribut leer ist und das Bild nicht angezeigt werden konnte.

    Dieses Attribut wird auch verwendet, wenn das Bild in Text kopiert und eingefügt oder ein verlinktes Bild als Lesezeichen gespeichert wird.

- `attributionsrc` {{experimental_inline}}

  - : Gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header zusammen mit der Bildanforderung sendet.

    Auf der Serverseite wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Headers in der Antwort auszulösen, um eine bildbasierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#html-based_event_sources) oder einen [Attributionstrigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#html-based_attribution_triggers) zu registrieren. Welcher Antwortheader zurückgesendet werden sollte, hängt vom Wert des `Attribution-Reporting-Eligible`-Headers ab, der die Registrierung ausgelöst hat.

    Das entsprechende Ereignis der Quelle oder des Triggers wird ausgelöst, sobald der Browser die Antwort mit der Bilddatei erhält.

    > [!NOTE]
    > Weitere Details finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

    Es gibt zwei Versionen dieses Attributs, die Sie festlegen können:

    - Boolean, also nur der `attributionsrc`-Name. Dies gibt an, dass Sie möchten, dass der {{httpheader("Attribution-Reporting-Eligible")}}-Header an denselben Server gesendet wird, auf den das `src`-Attribut verweist. Dies ist in Ordnung, wenn Sie die Registrierung der Attributionsquelle oder des Triggers auf demselben Server behandeln. Bei der Registrierung eines Attributionstriggers ist diese Eigenschaft optional und ein Boolean-Wert wird verwendet, wenn sie ausgelassen wird.
    - Wert, der eine oder mehrere URLs enthält, zum Beispiel:

    ```html
    <img
      src="image-file.png"
      alt="My image file description"
      attributionsrc="https://a.example/register-source
                         https://b.example/register-source" />
    ```

    Dies ist nützlich in Fällen, in denen die angeforderte Ressource nicht auf einem von Ihnen kontrollierten Server ist oder Sie einfach die Registrierung der Attributionsquelle auf einem anderen Server behandeln möchten. In diesem Fall können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcenanforderung erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header an die in `attributionSrc` angegebenen URL(s) zusätzlich zum Ursprungsserver gesendet. Diese URLs können dann mit einem {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header als angemessen antworten, um die Registrierung abzuschließen.

    > [!NOTE]
    > Das Angeben mehrerer URLs bedeutet, dass mehrere Attributionsquellen auf derselben Funktion registriert werden können. Sie könnten beispielsweise verschiedene Kampagnen haben, für die Sie den Erfolg messen möchten, was das Erstellen verschiedener Berichte über verschiedene Daten erfordert.

- [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)

  - : Gibt an, ob das Abrufen des Bildes unter Verwendung einer {{Glossary("CORS", "CORS")}}-Anforderung erfolgen muss. Bilddaten aus einem [CORS-fähigen Bild](/de/docs/Web/HTML/CORS_enabled_image), das von einer CORS-Anforderung zurückgegeben wird, können im {{HTMLElement("canvas")}}-Element wiederverwendet werden, ohne als "[tainted](/de/docs/Web/HTML/CORS_enabled_image#security_and_tainted_canvases)" markiert zu werden.

    Wenn das `crossorigin`-Attribut _nicht_ angegeben ist, wird eine nicht-CORS-Anforderung gesendet (ohne den {{httpheader("Origin")}}-Header der Anfrage), und der Browser markiert das Bild als tainted und schränkt den Zugriff auf seine Bilddaten ein, was seine Verwendung in {{HTMLElement("canvas")}}-Elementen verhindert.

    Wenn das `crossorigin`-Attribut _angegeben_ ist, wird eine CORS-Anforderung gesendet (mit dem {{httpheader("Origin")}}-Header der Anfrage); Wenn der Server jedoch nicht in die Erlaubnis des Zugriffs über Ursprungsgrenzen auf die Bilddaten durch die Ursprungssite zugestimmt hat (indem er keinen {{httpheader("Access-Control-Allow-Origin")}}-Header in der Antwort sendet oder indem er den Ursprung der Site nicht in einen {{httpheader("Access-Control-Allow-Origin")}}-Header aufnimmt, den er dennoch sendet), blockiert der Browser das Laden des Bildes und protokolliert einen CORS-Fehler in der Entwicklerkonsole.

    Erlaubte Werte:

    - `anonymous`
      - : Eine CORS-Anforderung wird ohne Anmeldeinformationen gesendet (d. h. keine {{Glossary("cookie", "Cookies")}}, [X.509-Zertifikate](https://datatracker.ietf.org/doc/html/rfc5280) oder {{httpheader("Authorization")}}-Headers der Anforderung).
    - `use-credentials`
      - : Die CORS-Anforderung wird mit allen enthaltenen Anmeldeinformationen gesendet (d. h. Cookies, X.509-Zertifikate und der `Authorization`-Header der Anforderung). Wenn der Server nicht dafür optiert, Anmeldeinformationen mit der Ursprungssite zu teilen (indem er den `Access-Control-Allow-Credentials: true`-Header der Antwort zurücksendet), markiert der Browser das Bild als tainted und schränkt den Zugriff auf seine Bilddaten ein.

    Wenn das Attribut einen ungültigen Wert hat, behandeln Browser es so, als ob der Wert `anonymous` verwendet würde. Weitere Informationen finden Sie unter [CORS-Einstellungen-Attributen](/de/docs/Web/HTML/Attributes/crossorigin).

- `decoding`

  - : Dieses Attribut gibt dem Browser einen Hinweis darauf, ob das Bilddecoding zusammen mit dem Rendering der anderen DOM-Inhalte in einem einzigen Präsentationsschritt, der "korrekter" aussieht (`sync`), durchgeführt oder die anderen DOM-Inhalte zuerst gerendert und präsentiert und dann das Bild decoding und später präsentiert werden sollte (`async`). In der Praxis bedeutet `async`, dass das nächste Zeichnen nicht auf das Decoding des Bildes wartet.

    Es ist oft schwierig, einen spürbaren Effekt bei der Verwendung von `decoding` auf statische `<img>`-Elemente wahrzunehmen. Sie werden wahrscheinlich anfänglich als leere Bilder gerendert, während die Bilddateien abgerufen werden (entweder aus dem Netzwerk oder aus dem Cache) und dann unabhängig gehandhabt werden, sodass das "Synchronisieren" von Inhaltsaktualisierungen weniger auffällig ist. Das Blockieren des Renderings während des Decodings kann jedoch — selbst wenn es schwer mit dem menschlichen Auge beobachtet werden kann — gemessen werden. Weitere Analysen finden Sie in [Was macht das Bild-Decoding-Attribut tatsächlich?](https://www.tunetheweb.com/blog/what-does-the-image-decoding-attribute-actually-do/) (tunetheweb.com, 2023).

    Die Verwendung verschiedener `decoding`-Typen kann zu deutlicheren Unterschieden führen, wenn `<img>`-Elemente dynamisch über JavaScript in das DOM eingefügt werden — weitere Informationen siehe [`HTMLImageElement.decoding`](/de/docs/Web/API/HTMLImageElement/decoding).

    Erlaubte Werte:

    - `sync`
      - : Decodieren Sie das Bild synchron zusammen mit dem Rendern der anderen DOM-Inhalte und präsentieren Sie alles zusammen.
    - `async`
      - : Decodieren Sie das Bild asynchron, nach dem Rendern und Präsentieren der anderen DOM-Inhalte.
    - `auto`
      - : Keine Präferenz für den Decoding-Modus; der Browser entscheidet, was für den Benutzer am besten ist. Dies ist der Standardwert.

- [`elementtiming`](/de/docs/Web/HTML/Attributes/elementtiming)

  - : Markiert das Bild zur Beobachtung durch die [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)-API. Der angegebene Wert wird zu einem Identifikator für das beobachtete Bild-Element. Weitere Informationen finden Sie auf der Seite des [`elementtiming`](/de/docs/Web/HTML/Attributes/elementtiming)-Attributs.

- `fetchpriority`

  - : Gibt einen Hinweis auf die relative Priorität, die beim Abrufen des Bildes verwendet werden soll.
    Erlaubte Werte:

    - `high`
      - : Laden Sie das Bild mit hoher Priorität im Vergleich zu anderen Bildern.
    - `low`
      - : Laden Sie das Bild mit niedriger Priorität im Vergleich zu anderen Bildern.
    - `auto`
      - : Keine Präferenz für die Abrufpriorität festlegen.
        Dies ist der Standard.
        Es wird verwendet, wenn kein Wert oder ein ungültiger Wert gesetzt ist.

    Weitere Informationen finden Sie unter [`HTMLImageElement.fetchPriority`](/de/docs/Web/API/HTMLImageElement/fetchPriority).

- `height`

  - : Die intrinsische Höhe des Bildes in Pixeln. Muss eine ganze Zahl ohne Einheit sein.

    > [!NOTE]
    > Durch Einschließen von `height` und [`width`](#width) kann das {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Bildes vom Browser berechnet werden, bevor das Bild geladen wird. Dieses Seitenverhältnis wird verwendet, um den Platz zu reservieren, der zum Anzeigen des Bildes benötigt wird, wobei Layoutverschiebungen reduziert oder sogar verhindert werden, wenn das Bild heruntergeladen und auf dem Bildschirm dargestellt wird. Die Reduzierung von Layoutverschiebungen ist ein wesentlicher Bestandteil einer guten Benutzererfahrung und Web-Performance.

- `ismap`

  - : Dieses Boolean-Attribut zeigt an, dass das Bild Teil einer [serverseitigen Karte](https://en.wikipedia.org/wiki/Image_map#Server-side) ist. Wenn dem so ist, werden die Koordinaten, wo der Benutzer auf das Bild geklickt hat, an den Server gesendet.

    > [!NOTE]
    > Dieses Attribut ist nur zulässig, wenn das `<img>`-Element ein Nachkomme eines {{htmlelement("a")}}-Elements mit einem gültigen [`href`](/de/docs/Web/HTML/Element/a#href)-Attribut ist. Dies bietet Benutzern ohne Zeigergeräte eine alternative Zieladresse.

- `loading`

  - : Gibt an, wie der Browser das Bild laden soll:

    - `eager`
      - : Lädt das Bild sofort, unabhängig davon, ob das Bild derzeit im sichtbaren Ansichtsfenster ist (dies ist der Standardwert).
    - `lazy`
      - : Verschiebt das Laden des Bildes, bis es eine berechnete Entfernung vom Ansichtsfenster erreicht, wie vom Browser definiert. Die Absicht ist es, das Netzwerk und die Speicherkapazität zu schonen, die benötigt wird, um das Bild zu handhaben, bis es vernünftigerweise sicher ist, dass es benötigt wird. Dies verbessert in den meisten typischen Anwendungsfällen die Leistung des Inhalts.

    > [!NOTE]
    > Das Laden wird nur dann verzögert, wenn JavaScript aktiviert ist. Dies ist eine Maßnahme gegen Tracking, da, wenn ein Benutzeragent das Lazy-Loading unterstützte, wenn das Scripting deaktiviert ist, es dennoch möglich wäre, die ungefähre Bildlaufposition eines Benutzers während einer Sitzung zu verfolgen, indem strategisch Bilder im Markup einer Seite platziert werden, sodass ein Server verfolgen kann, wie viele Bilder angefordert werden und wann.

    > [!NOTE]
    > Bilder mit `loading`, das auf `lazy` gesetzt ist, werden niemals geladen, wenn sie keinen sichtbaren Teil eines Elements schneiden, selbst wenn das Laden sie ändern würde, da ungeladene Bilder eine `width` und `height` von `0` haben. Die Angabe von `width` und `height` bei Lazy-Loading-Bildern behebt dieses Problem und wird als bewährte Methode angesehen, [die von der Spezifikation empfohlen wird](https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element). So zu tun hilft auch, Layoutverschiebungen zu vermeiden.

- `referrerpolicy`

  - : Ein String, der angibt, welcher Referrer beim Abrufen der Ressource verwendet werden soll:

    - `no-referrer`: Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}}-Header wird nicht an {{Glossary("origin", "Origin")}}s ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`: Der gesendete Referrer wird auf den Ursprung der verweisenden Seite beschränkt: ihr [Scheme](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`: Der Referrer an andere Origins wird auf das Scheme, den Host und den Port beschränkt. Navigationen am selben Origin enthalten weiterhin den Pfad.
    - `same-origin`: Ein Referrer wird für {{Glossary("Same-origin_policy", "same origin")}} gesendet, aber bei Cross-Origin-Anfragen wird kein Referrer-Information enthalten.
    - `strict-origin`: Sendet nur den Ursprung des Dokuments als Referrer, wenn die Sicherheitsebene des Protokolls gleich bleibt (HTTPS→HTTPS), sendet ihn jedoch nicht an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard): Sendet eine vollständige URL, wenn eine Same-Origin-Anfrage durchgeführt wird, sendet nur den Ursprung, wenn die Sicherheitsebene des Protokolls gleich bleibt (HTTPS→HTTPS) und sendet keinen Header an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `unsafe-url`: Der Referrer wird den Ursprung _und_ den Pfad beinhalten (aber nicht den [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), das [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder den [Benutzernamen](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge weitergibt.

- `sizes`

  - : Eine oder mehrere durch Kommas getrennte Zeichenfolgen, die eine Menge von Quellenmaßen angeben. Jedes Quellenmaß besteht aus:

    1. Einer [Medienbedingung](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#syntax). Diese muss bei dem letzten Eintrag in der Liste weggelassen werden.
    2. Einem Quellenmaßwert.

    Medienbedingungen beschreiben Eigenschaften des _Ansichtsfensters_, nicht des _Bildes_. Beispielsweise schlägt `(max-height: 500px) 1000px` vor, eine Quelle von 1000px Breite zu verwenden, wenn das _Ansichtsfenster_ nicht höher als 500px ist. Da ein Quellenmaßbeschreiber verwendet wird, um die Breite anzugeben, die für das Bild während des Layoutprozesses der Seite verwendet werden soll, ist die Medienbedingung typischerweise (aber nicht notwendigerweise) auf die [Breiten-](/de/docs/Web/CSS/@media/width)-Informationen basierend.

    Quellenmaßwerte geben die beabsichtigte Anzeigegröße des Bildes an. {{Glossary("User_agent", "User Agents")}} verwenden das aktuelle Quellenmaß zur Auswahl einer der von dem `srcset`-Attribut bereitgestellten Quellen, wobei diese Quellen mit Breitenbeschreibern (`w`) beschrieben werden. Die ausgewählte Quellenmaß beeinflusst die {{Glossary("intrinsic_size", "intrinsische Größe")}} des Bildes (die Anzeigengröße des Bildes, wenn keine {{Glossary("CSS", "CSS")}}-Stile angewendet werden). Wenn das `srcset`-Attribut fehlt oder keine Werte mit einem Breitenbeschreiber enthält, hat das `sizes`-Attribut keine Wirkung.

    Ein Quellenmaßwert kann jede nicht-negative [Länge](/de/docs/Web/CSS/length) sein. Es darf keine CSS-Funktionen außer den [Mathe-Funktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#math_functions) verwenden. Einheiten werden auf die gleiche Weise wie [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries) interpretiert, was bedeutet, dass alle relativen Längeneinheiten relativ zur Dokumentwurzel und nicht zum `<img>`-Element sind, sodass ein `em`-Wert relativ zur Schriftgröße der Wurzel ist, und nicht zur Schriftgröße des Bildes. [Prozent-](/de/docs/Web/CSS/percentage)Werte sind nicht erlaubt.

    Zusätzlich können Sie den Wert `auto` verwenden, um die gesamte Liste der Größen oder den ersten Eintrag in der Liste zu ersetzen. Er ist nur in Kombination mit `loading="lazy"` gültig und löst die [konkrete Größe](/de/docs/Web/CSS/image) des Bildes aus.

- `src`
  - : Die Bild-{{Glossary("URL", "URL")}}. Obligatorisch für das `<img>`-Element. In {{Glossary("Browser", "Browsern")}}, die `srcset` unterstützen, wird `src` wie ein Kandidatbild mit einem Pixeldichtebeschreiber `1x` behandelt, es sei denn, ein Bild mit diesem Pixeldichtebeschreiber ist bereits in `srcset` definiert oder es sei denn, `srcset` enthält `w`-Beschreiber.
- `srcset`

  - : Mehrere durch Kommas getrennte Zeichenfolgen, die mögliche Bildquellen für den {{Glossary("user_agent", "User Agent")}} zur Verwendung angeben. Jede Zeichenfolge besteht aus:

    1. Einer {{Glossary("URL", "URL")}} zu einem Bild
    2. Optional: Leerzeichen gefolgt von einem der folgenden:

       - Ein Breitenbeschreiber (eine positive ganze Zahl, gefolgt von `w`). Der Breitenbeschreiber wird durch die in dem `sizes`-Attribut angegebene Quellenmaß dividiert, um die effektive Pixeldichte zu berechnen.
       - Ein Pixeldichtebeschreiber (eine positive, unmittelbar gefolgte Gleitkommazahl von `x`).

    Wenn kein Beschreiber angegeben ist, wird der Quelle der Standardbeschreiber von `1x` zugewiesen.

    Es ist falsch, Breitenbeschreiber und Pixeldichtebeschreiber im gleichen `srcset`-Attribut zu mischen. Doppelte Beschreiber (zum Beispiel zwei Quellen im gleichen `srcset`, die beide mit `2x` beschrieben sind) sind ebenfalls ungültig.

    Wenn das `srcset`-Attribut Breitenbeschreiber verwendet, muss das `sizes`-Attribut ebenfalls vorhanden sein, da sonst das `srcset` selbst ignoriert wird.

    Der Benutzeragent wählt nach eigenem Ermessen eine der verfügbaren Quellen. Dies bietet ihnen erheblichen Spielraum, um ihre Auswahl basierend auf Benutzerpräferenzen oder {{Glossary("bandwidth", "Bandbreiten")}}konditionen anzupassen. Siehe unseren [Leitfaden zu responsiven Bildern](/de/docs/Web/HTML/Responsive_images) für ein Beispiel.

- `width`
  - : Die intrinsische Breite des Bildes in Pixeln. Muss eine ganze Zahl ohne Einheit sein.
- `usemap`

  - : Die partielle {{Glossary("URL", "URL")}} (beginnend mit `#`) einer [Bildkarte](/de/docs/Web/HTML/Element/map), die mit dem Element verbunden ist.

    > [!NOTE]
    > Dieses Attribut darf nicht verwendet werden, wenn das `<img>`-Element innerhalb eines {{htmlelement("a")}}- oder {{HTMLElement("button")}}-Elements ist.

### Veraltete Attribute

- `align` {{deprecated_inline}}

  - : Richtet das Bild mit seinem umgebenden Kontext aus. Verwenden Sie die {{cssxref('float')}}- und/oder {{cssxref('vertical-align')}}-{{Glossary("CSS", "CSS")}}-Eigenschaften anstelle dieses Attributs. Erlaubte Werte:

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
  - : Die Breite eines Rahmens um das Bild. Verwenden Sie die {{cssxref('border')}}-{{Glossary("CSS", "CSS")}}-Eigenschaft stattdessen.
- `hspace` {{deprecated_inline}}
  - : Die Anzahl der Pixel Weißraum links und rechts des Bildes. Verwenden Sie die {{cssxref('margin')}}-CSS-Eigenschaft stattdessen.
- `longdesc` {{deprecated_inline}}

  - : Ein Link zu einer ausführlicheren Beschreibung des Bildes. Mögliche Werte sind eine {{Glossary("URL", "URL")}} oder eine Element-[`id`](/de/docs/Web/HTML/Global_attributes/id).

    > [!NOTE]
    > Dieses Attribut wird in der neuesten {{Glossary("W3C", "W3C")}}-Version, [HTML 5.2](https://html.spec.whatwg.org/multipage/obsolete.html#element-attrdef-img-longdesc), erwähnt, wurde jedoch aus dem {{Glossary("WHATWG", "HTML-Living-Standard von WHATWG")}} entfernt. Es hat eine ungewisse Zukunft; Autoren sollten eine {{Glossary("WAI", "WAI")}}-{{Glossary("ARIA", "ARIA")}}-Alternative wie [`aria-describedby`](https://www.w3.org/TR/wai-aria-1.1/#aria-describedby) oder [`aria-details`](https://www.w3.org/TR/wai-aria-1.1/#aria-details) verwenden.

- `name` {{deprecated_inline}}
  - : Ein Name für das Element. Verwenden Sie das [`id`](/de/docs/Web/HTML/Global_attributes/id)-Attribut stattdessen.
- `vspace` {{deprecated_inline}}
  - : Die Anzahl der Pixel Weißraum über und unter dem Bild. Verwenden Sie die {{cssxref('margin')}}-CSS-Eigenschaft stattdessen.

## Styling mit CSS

`<img>` ist ein [ersetztes Element](/de/docs/Web/CSS/Replaced_element); es hat einen {{cssxref("display")}}-Wert von `inline` standardmäßig, aber seine Standarddimensionen werden durch die eingebetteten intrinsischen Werte des Bildes definiert, als wäre es `inline-block`. Sie können Eigenschaften wie {{cssxref("border")}}/{{cssxref("border-radius")}}, {{cssxref("padding")}}/{{cssxref("margin")}}, {{cssxref("width")}}, {{cssxref("height")}} usw. auf einem Bild einstellen.

`<img>` hat keine Basislinie, daher wird das Bild beim Verwenden in einem inline-formatierenden Kontext mit {{cssxref("vertical-align", "vertical-align: baseline")}} auf der Textbasislinie platziert.

Sie können die {{cssxref("object-position")}}-Eigenschaft verwenden, um das Bild innerhalb der Box des Elements zu positionieren, und die {{cssxref("object-fit")}}-Eigenschaft, um die Größe des Bildes innerhalb der Box anzupassen (zum Beispiel, ob das Bild in die Box passen oder sie füllen soll, selbst wenn Clipping erforderlich ist).

Je nach Typ kann ein Bild eine intrinsische Breite und Höhe haben. Für einige Bildtypen sind jedoch intrinsische Dimensionen nicht notwendig. {{Glossary("SVG", "SVG")}}-Bilder, zum Beispiel, haben keine intrinsischen Dimensionen, wenn ihr Wurzel-{{SVGElement("svg")}}-Element weder `width` noch `height` darauf eingestellt hat.

## Barrierefreiheit

### Bedeutungsvolle alternative Beschreibungen verfassen

Der Wert eines `alt`-Attributs sollte eine klare und prägnante textliche Wiedergabe des Bildinhalts bieten. Es sollte nicht die Anwesenheit des Bildes selbst oder den Dateinamen des Bildes beschreiben. Wenn das `alt`-Attribut absichtlich weggelassen wird, weil das Bild keine textuelle Entsprechung hat, sollten Sie alternative Methoden in Betracht ziehen, um zu präsentieren, was das Bild zu kommunizieren versucht.

#### Nicht

```html example-bad
<img alt="image" src="penguin.jpg" />
```

#### Do

```html example-good
<img alt="A Penguin on a beach." src="penguin.jpg" />
```

Ein wichtiger Barrierefreiheitstest besteht darin, den Inhalt des `alt`-Attributs zusammen mit dem vorausgehenden Textinhalt zu lesen, um zu sehen, ob er die gleiche Bedeutung wie das Bild vermittelt. Zum Beispiel, wenn dem Bild der Satz "Auf meinen Reisen sah ich ein niedliches kleines Tier:" vorausginge, könnte das _Nicht_-Beispiel von einem Screenreader als "Auf meinen Reisen sah ich ein niedliches kleines Tier: Bild" gelesen werden, was keinen Sinn ergibt. Das _Do_-Beispiel könnte von einem Screenreader als "Auf meinen Reisen sah ich ein niedliches kleines Tier: Ein Pinguin am Strand." gelesen werden, was Sinn ergibt.

Für Bilder, die verwendet werden, um eine Aktion auszulösen, zum Beispiel Bilder, die in ein {{htmlelement("a")}}- oder {{htmlelement("button")}}-Element eingebettet sind, sollten Sie erwägen, die ausgelöste Aktion im `alt`-Attributwert zu beschreiben. Zum Beispiel könnten Sie `alt="nächste Seite"` statt `alt="Pfeil rechts"` schreiben. Sie könnten auch in Erwägung ziehen, eine optionale weitere Beschreibung in einem `title`-Attribut hinzuzufügen; dies kann von Screenreadern gelesen werden, wenn der Benutzer dies verlangt.

Wenn ein `alt`-Attribut auf einem Bild nicht vorhanden ist, können einige Screenreader den Dateinamen des Bildes stattdessen ankündigen. Dies kann eine verwirrende Erfahrung sein, wenn der Dateiname nicht repräsentativ für den Bildinhalt ist.

- [Ein Alt-Entscheidungsbaum • Bilder • WAI-Web-Barrrierefreiheit Tutorials](https://www.w3.org/WAI/tutorials/images/decision-tree/)
- [Alt-Texte: Der ultimative Leitfaden — Axess Lab](https://axesslab.com/alt-texts/)
- [Wie man großartige Alt-Texte gestaltet: Eine Einführung | Deque](https://www.deque.com/blog/great-alt-text-introduction/)
- [MDN Verständnis für WCAG, Guideline 1.1 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verstehen von Erfolgskriterium 1.1.1 | W3C Verständnis für WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

### SVG als Bild identifizieren

Aufgrund eines [VoiceOver-Bugs](https://webkit.org/b/216364) kündigt VoiceOver SVG-Bilder nicht korrekt als Bilder an. Fügen Sie [`role="img"`](/de/docs/Web/Accessibility/ARIA/Roles/img_role) zu allen `<img>`-Elementen mit SVG-Quelldateien hinzu, um sicherzustellen, dass unterstützende Technologien das SVG als Bildinhalt korrekt ankündigen.

```html
<img src="mdn.svg" alt="MDN" role="img" />
```

### Das title-Attribut

Das [`title`](/de/docs/Web/HTML/Global_attributes/title)-Attribut ist kein akzeptabler Ersatz für das `alt`-Attribut. Vermeiden Sie es auch, den Wert des `alt`-Attributs in einem `title`-Attribut, das auf dem gleichen Bild deklariert ist, zu duplizieren. Dies kann dazu führen, dass einige Screenreader den gleichen Text zweimal ankündigen, was zu einer verwirrenden Erfahrung führt.

Das `title`-Attribut sollte auch nicht als ergänzende Bildunterschrift verwendet werden, um eine Bildalternative `alt` Beschreibung zu begleiten. Wenn ein Bild eine Bildunterschrift benötigt, verwenden Sie die [`figure`](/de/docs/Web/HTML/Element/figure)- und [`figcaption`](/de/docs/Web/HTML/Element/figcaption)-Elemente.

Der Wert des `title`-Attributs wird dem Benutzer üblicherweise als Tooltip präsentiert, der erscheint, nachdem der Cursor für kurze Zeit über das Bild gestoppt hat. Obwohl dies dem Benutzer zusätzliche Informationen bieten kann, sollten Sie nicht davon ausgehen, dass der Benutzer es je sehen wird: der Benutzer könnte nur über Tastatur oder Touchscreen zugreifen. Wenn Sie Informationen haben, die besonders wichtig oder wertvoll für den Benutzer sind, präsentieren Sie sie inline mit einer der oben genannten Methoden anstatt mit `title`.

- [Verwendung des HTML title-Attributs – aktualisiert | The Paciello Group](https://www.tpgi.com/using-the-html-title-attribute-updated/)

## Beispiele

### Alternativer Text

Das folgende Beispiel bettet ein Bild in die Seite ein und enthält einen alternativen Text zur Barrierefreiheit.

```html
<img src="favicon144.png" alt="MDN" />
```

{{EmbedLiveSample('Alternative_text', '100%', '160')}}

### Bildlink

Dieses Beispiel baut auf dem vorherigen auf und zeigt, wie man das Bild zu einem Link macht. Dazu wird der `<img>`-Tag innerhalb eines {{HTMLElement("a")}} verschachtelt. Sie sollten den alternativen Text so gestalten, dass er die Ressource beschreibt, auf die der Link zeigt, als ob Sie einen Textlink verwenden würden.

```html
<a href="https://developer.mozilla.org">
  <img src="favicon144.png" alt="Visit the MDN site" />
</a>
```

{{EmbedLiveSample('Image_link', '100%', '160')}}

### Verwendung des srcset-Attributs

In diesem Beispiel fügen wir ein `srcset`-Attribut mit einem Verweis auf eine hochauflösende Version des Logos hinzu; dieses wird anstelle des `src`-Bildes auf hochauflösenden Geräten geladen. Das im `src`-Attribut referenzierte Bild wird als `1x`-Kandidat in {{Glossary("User_agent", "User Agents")}} gezählt, die `srcset` unterstützen.

```html
<img src="favicon72.png" alt="MDN" srcset="favicon144.png 2x" />
```

{{EmbedLiveSample("Using_the_srcset_attribute", "100%", "160")}}

### Verwendung der srcset- und sizes-Attribute

Das `src`-Attribut wird in {{Glossary("User_agent", "User Agents")}}, die `srcset` unterstützen, ignoriert, wenn `w`-Beschreiber enthalten sind. Wenn die `(max-width: 600px)`-Medienbedingung zutrifft, wird das 200 Pixel breite Bild geladen (es ist dasjenige, das `200px` am nächsten kommt), andernfalls wird das andere Bild geladen.

```html
<img
  src="clock-demo-200px.png"
  alt="The time is 12:45."
  srcset="clock-demo-200px.png 200w, clock-demo-400px.png 400w"
  sizes="(max-width: 600px) 200px, 50vw" />
```

{{EmbedLiveSample("Using_the_srcset_and_sizes_attributes", "100%", 350)}}

> [!NOTE]
> Um die Größenänderung in Aktion zu sehen, {{LiveSampleLink('Using_the_srcset_and_sizes_attributes', 'sehen Sie sich das Beispiel auf einer separaten Seite an')}}, damit Sie den Inhaltsbereich tatsächlich in der Größe ändern können.

## Sicherheits- und Datenschutzbedenken

Obwohl `<img>`-Elemente unschuldige Verwendungszwecke haben, können sie unerwünschte Folgen für die Sicherheit und den Datenschutz der Benutzer haben. Weitere Informationen und Gegenmaßnahmen finden Sie unter [Referer-Header: Datenschutz- und Sicherheitsbedenken](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns).

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
          >Fließend Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >phrasierter Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#embedded_content"
          >eingebetteter Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#palpable_content"
          >fühlbarer Inhalt</a
        >. Wenn das Element ein <code>usemap</code>-Attribut hat, ist es auch ein Teil
        der interaktiven Inhaltskategorie.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keine; es ist ein {{Glossary("void_element", "Leerelement")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss einen Start-Tag haben und darf keinen End-Tag haben.</td>
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
            mit nicht leerem <code>alt</code>-Attribut oder keinem
            <code>alt</code>-Attribut:
            <code
              ><a href="/de/docs/Web/Accessibility/ARIA/Roles/img_role"
                ><code>img</code></a
              ></code
            >
          </li>
          <li>
            mit leerem <code>alt</code>-Attribut:
            <a href="/de/docs/Web/Accessibility/ARIA/Roles/presentation_role"
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
            mit leerem <code>alt</code>-Attribut, <a href="/de/docs/Web/Accessibility/ARIA/Roles/none_role"><code>none</code></a>
            oder <a href="/de/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a>
          </li>
          <li>
            ohne <code>alt</code>-Attribut keine <code>role</code> erlaubt
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
- [Responsive Bilder](/de/docs/Web/HTML/Responsive_images)
