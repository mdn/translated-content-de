---
title: "<img>: Das Bild-Embed-Element"
slug: Web/HTML/Reference/Elements/img
l10n:
  sourceCommit: a5d7017286206c644dda06d859c471fa1065b2dc
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

Das obige Beispiel zeigt die Nutzung des `<img>`-Elements:

- Das `src`-Attribut enthält den Pfad zum Bild, das eingebettet werden soll. Es ist nicht zwingend erforderlich, wenn das [srcset](/de/docs/Web/API/HTMLImageElement/srcset)-Attribut verfügbar ist. Allerdings muss mindestens eines der Attribute `src` oder `srcset` angegeben werden.
- Das `alt`-Attribut enthält einen textuellen Ersatz für das Bild, der zwingend erforderlich und **ungemein nützlich** für die Barrierefreiheit ist — Bildschirmleser lesen den Wert des Attributs vor, damit die Benutzer verstehen, was das Bild bedeutet. Der Alt-Text wird auch auf der Seite angezeigt, wenn das Bild aus irgendeinem Grund nicht geladen werden kann: zum Beispiel bei Netzwerkfehlern, Inhaltsblockierung oder Link-Verfall.

Es gibt viele andere Attribute, um verschiedene Zwecke zu erfüllen:

- [Referrer](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy)-/{{Glossary("CORS", "CORS")}}-Kontrolle für Sicherheit und Datenschutz: siehe [`crossorigin`](#crossorigin) und [`referrerpolicy`](#referrerpolicy).
- Verwenden Sie sowohl [`width`](#width) als auch [`height`](#height), um die intrinsische Größe des Bildes festzulegen, wodurch es Platz einnehmen kann, bevor es geladen wird, um Layout-Verschiebungen zu mindern.
- Hinweise für responsive Bilder mit [`sizes`](#sizes) und [`srcset`](#srcset) (siehe auch das {{htmlelement("picture")}}-Element und unser [Leitfaden zu responsiven Bildern](/de/docs/Web/HTML/Guides/Responsive_images)).

## Unterstützte Bildformate

Der HTML-Standard gibt nicht an, welche Bildformate unterstützt werden sollen, daher können {{Glossary("user_agent", "User Agents")}} unterschiedliche Formate unterstützen.

> [!NOTE]
> Der [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types) bietet umfassende Informationen zu Bildformaten und deren Unterstützung durch Webbrowser.
> Dieser Abschnitt ist nur eine Zusammenfassung!

Die Bilddateiformate, die am häufigsten im Web verwendet werden, sind:

- [APNG (Animated Portable Network Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#apng_animated_portable_network_graphics) — Gute Wahl für verlustfreie Animationssequenzen (GIF ist weniger leistungsfähig)
- [AVIF (AV1 Image File Format)](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) — Gute Wahl sowohl für Bilder als auch für animierte Bilder aufgrund der hohen Leistung.
- [GIF (Graphics Interchange Format)](/de/docs/Web/Media/Guides/Formats/Image_types#gif_graphics_interchange_format) — Gute Wahl für _einfache_ Bilder und Animationen.
- [JPEG (Joint Photographic Expert Group image)](/de/docs/Web/Media/Guides/Formats/Image_types#jpeg_joint_photographic_experts_group_image) — Gute Wahl für verlustbehaftete Kompression von Standbildern (derzeit am beliebtesten).
- [PNG (Portable Network Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#png_portable_network_graphics) — Gute Wahl für verlustfreie Kompression von Standbildern (etwas bessere Qualität als JPEG).
- [SVG (Scalable Vector Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#svg_scalable_vector_graphics) — Vektorbildformat. Verwenden Sie es für Bilder, die in verschiedenen Größen genau gezeichnet werden müssen.
- [WebP (Web Picture format)](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) — Hervorragende Wahl sowohl für Bilder als auch für animierte Bilder.

Formate wie [WebP](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) und [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) werden empfohlen, da sie sowohl bei statischen als auch bei animierten Bildern wesentlich besser performen als PNG, JPEG, GIF.

SVG bleibt das empfohlene Format für Bilder, die in verschiedenen Größen genau gezeichnet werden müssen.

## Fehler beim Laden von Bildern

Tritt ein Fehler beim Laden oder Rendern eines Bildes auf und es wurde ein `onerror`-Ereignishandler für das [`error`](/de/docs/Web/API/HTMLElement/error_event)-Ereignis festgelegt, wird dieser Ereignishandler aufgerufen. Dies kann in mehreren Situationen passieren, einschließlich:

- Die `src`- oder `srcset`-Attribute sind leer (`""`) oder `null`.
- Die `src`-{{Glossary("URL", "URL")}} ist dieselbe wie die URL der Seite, auf der sich der Benutzer gerade befindet.
- Das Bild ist in irgendeiner Weise beschädigt, die verhindert, dass es geladen wird.
- Die Metadaten des Bildes sind in einer solchen Weise beschädigt, dass es unmöglich ist, seine Abmessungen abzurufen, und es wurden keine Abmessungen in den Attributen des `<img>`-Elements angegeben.
- Das Bild ist in einem Format, das vom {{Glossary("user_agent", "User Agent")}} nicht unterstützt wird.

## Attribute

Dieses Element schließt die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes) ein.

- [`alt`](/de/docs/Web/API/HTMLImageElement/alt#usage_notes)

  - : Definiert Text, der das Bild auf der Seite ersetzen kann.

    > [!NOTE]
    > Browser zeigen nicht immer Bilder an. Es gibt eine Reihe von Situationen, in denen ein Browser möglicherweise keine Bilder anzeigt, wie zum Beispiel:
    >
    > - Nicht visuelle Browser (wie diejenigen, die von Menschen mit Sehbehinderungen verwendet werden)
    > - Der Benutzer entscheidet sich, keine Bilder anzuzeigen (Bandsparung, Datenschutzgründe)
    > - Das Bild ist ungültig oder ein [nicht unterstützter Typ](#unterstützte_bildformate)
    >
    > In diesen Fällen kann der Browser das Bild durch den Text im `alt`-Attribut des Elements ersetzen. Aus diesen und anderen Gründen geben Sie wann immer möglich einen nützlichen Wert für `alt` an.

    Wenn dieses Attribut auf einen leeren String gesetzt wird (`alt=""`), zeigt dies an, dass dieses Bild _kein_ wesentlicher Bestandteil des Inhalts ist (es ist Dekoration oder ein Tracking-Pixel) und dass nicht-visuelle Browser es aus dem {{Glossary("Engine/Rendering", "Rendering")}} weglassen dürfen. Visuelle Browser werden auch das Symbol für ein defektes Bild ausblenden, wenn das `alt`-Attribut leer ist und das Bild nicht angezeigt werden konnte.

    Dieses Attribut wird auch verwendet, wenn das Bild kopiert und eingefügt oder ein verlinktes Bild in einem Lesezeichen gespeichert wird.

- `attributionsrc` {{experimental_inline}}

  - : gibt an, dass Sie möchten, dass der Browser ein {{httpheader("Attribution-Reporting-Eligible")}}-Header zusammen mit der Bildanforderung sendet.

    Auf der Serverseite wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Headers in der Antwort auszulösen, um eine bildbasierte [Zuweisungsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#html-based_event_sources) oder [Zuweisungsauslöser](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#html-based_attribution_triggers) zu registrieren. Welcher Antwortheader zurückgesendet werden soll, hängt vom Wert des `Attribution-Reporting-Eligible`-Headers ab, der die Registrierung ausgelöst hat.

    Das entsprechende Quelle- oder Auslöserereignis wird ausgelöst, sobald der Browser die Antwort mit der Bilddatei erhält.

    > [!NOTE]
    > Siehe die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) für weitere Details.

    Es gibt zwei Versionen dieses Attributs, die Sie festlegen können:

    - Boolean, d.h. nur der Name `attributionsrc`. Dies gibt an, dass Sie möchten, dass der {{httpheader("Attribution-Reporting-Eligible")}}-Header an denselben Server gesendet wird, auf den das `src`-Attribut verweist. Dies ist in Ordnung, wenn Sie die Registrierung der Zuweisungsquelle oder des Zuweisungsauslösers auf demselben Server handhaben. Bei der Registrierung eines Zuweisungsauslösers ist diese Eigenschaft optional und ein boolescher Wert wird verwendet, wenn sie weggelassen wird.
    - Wert, der eine oder mehrere URLs enthält, z.B.:

    ```html
    <img
      src="image-file.png"
      alt="My image file description"
      attributionsrc="https://a.example/register-source
                         https://b.example/register-source" />
    ```

    Dies ist nützlich in Fällen, in denen die angeforderte Ressource nicht auf einem Server liegt, den Sie kontrollieren, oder wenn Sie einfach die Registrierung der Zuweisungsquelle auf einem anderen Server handhaben möchten. In diesem Fall können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcenanforderung erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header an die(s) in `attributionSrc` angegebenen URL(s) zusätzlich zum Ressourcen-Ursprung gesendet. Diese URLs können dann mit einem {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header antworten, wie es zur Vervollständigung der Registrierung erforderlich ist.

    > [!NOTE]
    > Das Angeben mehrerer URLs bedeutet, dass mehrere Zuweisungsquellen für dasselbe Feature registriert werden können. Sie könnten zum Beispiel verschiedene Kampagnen haben, deren Erfolg Sie messen möchten, was das Generieren verschiedener Berichte über verschiedene Daten erfordert.

- [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)

  - : Gibt an, ob das Abrufen des Bildes mit einer {{Glossary("CORS", "CORS")}}-Anfrage erfolgen muss. Bilddaten eines von CORS-aktivierten Bildes, das von einer CORS-Anforderung zurückgegeben wird, können im {{HTMLElement("canvas")}}-Element wiederverwendet werden, ohne als "[beschädigt](/de/docs/Web/HTML/How_to/CORS_enabled_image#security_and_tainted_canvases)" markiert zu werden.

    Wenn das `crossorigin`-Attribut _nicht_ angegeben ist, wird eine nicht-CORS-Anfrage gesendet (ohne den {{httpheader("Origin")}}-Request-Header), und der Browser markiert das Bild als beschädigt und schränkt den Zugriff auf seine Bilddaten ein, was seine Verwendung in {{HTMLElement("canvas")}}-Elementen verhindert.

    Wenn das `crossorigin`-Attribut _angegeben_ ist, wird eine CORS-Anfrage gesendet (mit dem {{httpheader("Origin")}}-Request-Header); aber wenn der Server nicht in den Cross-Origin-Zugriff auf die Bilddaten durch die Ursprungsseite einwilligt (indem er keinen {{httpheader("Access-Control-Allow-Origin")}}-Antwort-Header sendet oder die Ursprungsseite nicht in einen gesendeten {{httpheader("Access-Control-Allow-Origin")}}-Antwort-Header einschließt), blockiert der Browser das Laden des Bildes und meldet einen CORS-Fehler in der Entwicklerkonsole.

    Zulässige Werte:

    - `anonymous`
      - : Eine CORS-Anfrage wird gesendet, bei der Anmeldeinformationen weggelassen werden (d.h. keine {{Glossary("cookie", "Cookies")}}, [X.509-Zertifikate](https://datatracker.ietf.org/doc/html/rfc5280) oder {{httpheader("Authorization")}}-Request-Header).
    - `use-credentials`
      - : Die CORS-Anfrage wird mit Anmeldeinformationen gesendet (d.h. Cookies, X.509-Zertifikate und der `Authorization`-Request-Header). Wenn der Server nicht zustimmt, Anmeldeinformationen mit der Ursprungsseite zu teilen (indem er nicht den `Access-Control-Allow-Credentials: true`-Antwort-Header sendet), markiert der Browser das Bild als beschädigt und beschränkt den Zugriff auf seine Bilddaten.

    Wenn das Attribut einen ungültigen Wert hat, behandeln die Browser es so, als ob der Wert `anonymous` verwendet wurde. Siehe [CORS-Einstellungsattribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin) für zusätzliche Informationen.

- `decoding`

  - : Dieses Attribut liefert einen Hinweis an den Browser, ob er die Bilddekodierung zusammen mit dem Rendern des anderen DOM-Inhalts in einem einzigen Darstellungsschritt durchführen soll, der "korrekter" aussieht (`sync`), oder den anderen DOM-Inhalt zuerst rendern und darstellen und dann das Bild dekodieren und später darstellen soll (`async`). In der Praxis bedeutet `async`, dass das nächste Paint nicht darauf wartet, dass das Bild dekodiert wird.

    Es ist oft schwierig, einen spürbaren Effekt bei der Verwendung von `decoding` auf statischen `<img>`-Elementen wahrzunehmen. Sie werden wahrscheinlich anfänglich als leere Bilder gerendert, während die Bilddateien (entweder aus dem Netzwerk oder aus dem Cache) abgerufen und dann unabhängig verarbeitet werden, sodass das "Synchronisieren" von Inhaltsaktualisierungen weniger offensichtlich ist. Das Blockieren des Renderns während die Dekodierung erfolgt, kann jedoch - selbst wenn es schwierig ist, es mit dem menschlichen Auge zu beobachten - gemessen werden. Siehe [Was macht das Bilddekodierungsattribut tatsächlich?](https://www.tunetheweb.com/blog/what-does-the-image-decoding-attribute-actually-do/) für eine detaillierte Analyse (tunetheweb.com, 2023).

    Die Verwendung verschiedener `decoding`-Typen kann zu spürbareren Unterschieden führen, wenn `<img>`-Elemente dynamisch über JavaScript in das DOM eingefügt werden — siehe [`HTMLImageElement.decoding`](/de/docs/Web/API/HTMLImageElement/decoding) für weitere Details.

    Zulässige Werte:

    - `sync`
      - : Dekodiert das Bild synchron mit dem Rendern des anderen DOM-Inhalts und stellt alles zusammen dar.
    - `async`
      - : Dekodiert das Bild asynchron nach dem Rendern und Darstellen des anderen DOM-Inhalts.
    - `auto`
      - : Keine Präferenz für den Dekodierungsmodus; der Browser entscheidet, was für den Benutzer am besten ist. Dies ist der Standardwert.

- [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming)

  - : Markiert das Bild zur Beobachtung durch die [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)-API. Der angegebene Wert wird zu einem Bezeichner für das beobachtete Bildelement. Siehe auch die [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming)-Attributseite.

- `fetchpriority`

  - : Liefert einen Hinweis auf die relative Priorität, die beim Abrufen des Bildes verwendet werden soll.
    Zulässige Werte:

    - `high`
      - : Holen Sie das Bild mit hoher Priorität im Vergleich zu anderen Bildern.
    - `low`
      - : Holen Sie das Bild mit niedriger Priorität im Vergleich zu anderen Bildern.
    - `auto`
      - : Legen Sie keine Präferenz für die Abrufpriorität fest.
        Dies ist der Standard.
        Er wird verwendet, wenn kein Wert oder ein ungültiger Wert festgelegt ist.

    Siehe [`HTMLImageElement.fetchPriority`](/de/docs/Web/API/HTMLImageElement/fetchPriority) für weitere Informationen.

- `height`

  - : Die intrinsische Höhe des Bildes in Pixeln. Muss eine Ganzzahl ohne Einheit sein.

    > [!NOTE]
    > Das Einschließen von `height` und [`width`](#width) ermöglicht es dem Browser, das {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Bildes zu berechnen, noch bevor es geladen wird. Dieses Seitenverhältnis wird verwendet, um den benötigten Platz zur Anzeige des Bildes zu reservieren, was eine Layout-Verschiebung beim Herunterladen und Malen des Bildes auf den Bildschirm verringert oder sogar verhindert. Die Reduzierung von Layout-Verschiebungen ist ein wesentlicher Bestandteil einer guten Benutzererfahrung und Web-Performance.

- `ismap`

  - : Dieses boolesche Attribut zeigt an, dass das Bild Teil einer [serverseitigen Karte](https://de.wikipedia.org/wiki/Image_map#Server-side ist). In diesem Fall werden die Koordinaten, an denen der Benutzer auf das Bild geklickt hat, an den Server gesendet.

    > [!NOTE]
    > Dieses Attribut ist nur zulässig, wenn das `<img>`-Element ein Nachkomme eines {{htmlelement("a")}}-Elements mit einem gültigen [`href`](/de/docs/Web/HTML/Reference/Elements/a#href)-Attribut ist. Dies bietet Benutzern ohne Zeigegeräte ein alternatives Ziel.

- `loading`

  - : Gibt an, wie der Browser das Bild laden soll:

    - `eager`
      - : Lädt das Bild sofort, unabhängig davon, ob es sich derzeit im sichtbaren Viewport befindet oder nicht (dies ist der Standardwert).
    - `lazy`
      - : Verzögert das Laden des Bildes, bis es eine berechnete Distanz vom Viewport erreicht, wie vom Browser definiert. Die Absicht ist, das Netzwerk- und Speicherbandbreite, die für den Umgang mit dem Bild benötigt wird, zu vermeiden, bis es mit hinreichender Sicherheit benötigt wird. Dies verbessert in den meisten typischen Anwendungsfällen die Leistung des Inhalts.

    > [!NOTE]
    > Das Laden wird nur verzögert, wenn JavaScript aktiviert ist. Dies ist eine Anti-Tracking-Maßnahme, da, wenn ein Benutzeragent das Lazy-Loading unterstützt, wenn das Skripting deaktiviert ist, es immer noch möglich wäre, die ungefähre Scrollposition eines Benutzers während einer Sitzung zu verfolgen, indem strategisch Bilder im Markup einer Seite platziert werden, sodass ein Server verfolgen kann, wie viele Bilder angefordert werden und wann.

    > [!NOTE]
    > Bilder mit `loading` auf `lazy` gesetzt werden niemals geladen, wenn sie keinen sichtbaren Teil eines Elements schneiden, selbst wenn das Laden sie ändern würde, da nicht geladene Bilder eine `width` und `height` von `0` haben. Das Setzen von `width` und `height` auf Lazy-Loaded-Bilder behebt dieses Problem und ist eine bewährte Praxis, [die von der Spezifikation empfohlen wird](https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element). Dies hilft auch, Layout-Verschiebungen zu verhindern.

- `referrerpolicy`

  - : Ein String, der angibt, welchen Referrer beim Abrufen der Ressource verwendet werden soll:

    - `no-referrer`: Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}}-Header wird nicht an {{Glossary("origin", "Origin")}}s ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`: Der gesendete Referrer wird auf den Ursprung der verweisenden Seite beschränkt: deren [Schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`: Der an andere Ursprungsschnittstellen gesandte Referrer wird auf das Schema, den Host und den Port beschränkt. Navigationen im gleichen Ursprung werden weiterhin den Pfad enthalten.
    - `same-origin`: Ein Referrer wird für {{Glossary("Same-origin_policy", "denselben Ursprung")}} gesendet, aber Cross-Origin-Anfragen enthalten keine Referrerinformationen.
    - `strict-origin`: Sendet nur den Ursprung des Dokuments als Referrer, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), sendet ihn jedoch nicht an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard): Sendet eine vollständige URL für eine Anfrage desselben Ursprungs, sendet nur den Ursprung, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), und sendet keinen Header an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `unsafe-url`: Der Referrer wird den Ursprung _und_ den Pfad enthalten (jedoch nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), das [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder den [Benutzernamen](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen zu unsicheren Ursprüngen preisgibt.

- `sizes`

  - : Eine oder mehrere Zeichenfolgen, getrennt durch Kommas, die eine Reihe von Quellgrößen anzeigen. Jede Quellgröße besteht aus:

    1. Einer [Medienbedingung](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#syntax). Diese muss beim letzten Element der Liste weggelassen werden.
    2. Einem Wert für die Quellgröße.

    Medienbedingungen beschreiben Eigenschaften des _Viewports_ und nicht des _Bildes_. Zum Beispiel empfiehlt `(max-height: 500px) 1000px`, eine Quelle von 1000px Breite zu verwenden, wenn der _Viewport_ nicht höher als 500px ist. Da ein Quellgrößen-Deskriptor verwendet wird, um die Breite anzugeben, die für das Bild während des Layouts der Seite verwendet wird, basiert die Medienbedingung normalerweise (aber nicht unbedingt) auf den [Breiten](/de/docs/Web/CSS/@media/width)-Informationen.

    Quellgrößenwerte geben die beabsichtigte Anzeigengröße des Bildes an. {{Glossary("User_agent", "User Agents")}} verwenden die aktuelle Quellgröße, um eine der vom `srcset`-Attribut bereitgestellten Quellen auszuwählen, wenn diese Quellen mit Breiten-Deskriptoren (`w`) beschrieben sind. Die ausgewählte Quellgröße beeinflusst die {{Glossary("intrinsic_size", "intrinsische Größe")}} des Bildes (die Anzeigengröße des Bildes, wenn kein {{Glossary("CSS", "CSS")}}-Stil angewendet wird). Wenn das `srcset`-Attribut fehlt oder keine Werte mit einem Breiten-Deskriptor enthält, hat das `sizes`-Attribut keine Auswirkung.

    Ein Quellgrößenwert kann jede nicht-negative [Längenangabe](/de/docs/Web/CSS/length) sein. Es darf keine CSS-Funktionen außer den [Mathe-Funktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#math_functions) verwenden. Einheiten werden auf die gleiche Weise wie [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries) interpretiert, was bedeutet, dass alle relativen Längeneinheiten relativ zur Dokumentwurzel und nicht zum `<img>`-Element sind, sodass ein `em`-Wert relativ zur Schriftgröße der Wurzel ist und nicht zur Schriftgröße des Bildes. [Prozent](/de/docs/Web/CSS/percentage)-Werte sind nicht erlaubt.

    Das `sizes`-Attribut akzeptiert auch die folgenden Schlüsselwortwerte:

    - `auto`

      - : `auto` kann die gesamte Liste der Größen oder den ersten Eintrag in der Liste ersetzen. Es ist nur gültig, wenn es mit `loading="lazy"` kombiniert wird, und wird auf die [konkrete Größe](/de/docs/Web/CSS/image) des Bildes aufgelöst. Da die intrinsische Größe des Bildes noch nicht bekannt ist, sollten `width`- und `height`-Attribute (oder CSS-Äquivalente) ebenfalls angegeben werden, um [zu verhindern, dass der Browser eine Standardbreite von 300px annimmt](https://html.spec.whatwg.org/multipage/images.html#sizes-attributes:attr-dim-width).

- `src`
  - : Die Bild-{{Glossary("URL", "URL")}}. Pflichtfeld für das `<img>`-Element. In {{Glossary("Browser", "Browsern")}}, die `srcset` unterstützen, wird `src` wie ein Kandidatenbild mit einem Pixeldichte-Deskriptor von `1x` behandelt, es sei denn, ein Bild mit diesem Pixeldichte-Deskriptor ist bereits in `srcset` definiert oder `srcset` enthält `w`-Beschreibungen.
- `srcset`

  - : Eine oder mehrere Zeichenfolgen, getrennt durch Kommas, die mögliche Bildquellen für den {{Glossary("user_agent", "User Agent")}} zur Verwendung angeben. Jede Zeichenfolge besteht aus:

    1. Einer {{Glossary("URL", "URL")}} zu einem Bild
    2. Optional gefolgt von Leerzeichen und einem der folgenden:

       - Einem Breiten-Beschreiber (eine positive Ganzzahl, direkt gefolgt von `w`). Der Breiten-Beschreiber wird durch die in `sizes` angegebene Quellgröße geteilt, um die effektive Pixeldichte zu berechnen.
       - Einem Pixeldichte-Beschreiber (eine positive Gleitkommazahl, direkt gefolgt von `x`).

    Wenn kein Deskriptor angegeben ist, wird die Quelle dem Standard-Deskriptor von `1x` zugewiesen.

    Es ist inkorrekt, Breiten-Beschreiber und Pixeldichte-Beschreiber im selben `srcset`-Attribut zu mischen. Doppelte Beschreiber (z.B. zwei Quellen im selben `srcset`, die beide mit `2x` beschrieben sind) sind ebenfalls ungültig.

    Wenn das `srcset`-Attribut Breiten-Beschreiber verwendet, muss auch das `sizes`-Attribut vorhanden sein, andernfalls wird `srcset` ignoriert.

    Der User Agent wählt nach eigenem Ermessen jede der verfügbaren Quellen aus. Dies bietet ihnen erheblichen Spielraum, ihre Auswahl an Faktoren wie Benutzerpräferenzen oder {{Glossary("bandwidth", "Bandbreiten")}}-Bedingungen anzupassen. Siehe unseren [Leitfaden zu responsiven Bildern](/de/docs/Web/HTML/Guides/Responsive_images) für ein Beispiel.

- `width`
  - : Die intrinsische Breite des Bildes in Pixeln. Muss eine Ganzzahl ohne Einheit sein.
- `usemap`

  - : Der partielle {{Glossary("URL", "URL")}} (beginnend mit `#`) einer mit dem Element verknüpften [Bildkarte](/de/docs/Web/HTML/Reference/Elements/map).

    > [!NOTE]
    > Sie können dieses Attribut nicht verwenden, wenn das `<img>`-Element innerhalb eines {{htmlelement("a")}}- oder {{HTMLElement("button")}}-Elements ist.

### Veraltete Attribute

- `align` {{deprecated_inline}}

  - : Richtig das Bild mit seinem umgebenden Kontext aus. Verwenden Sie die {{cssxref('float')}} und/oder {{cssxref('vertical-align')}}-Eigenschaften {{Glossary("CSS", "CSS")}} anstelle dieses Attributs. Zulässige Werte:

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
  - : Die Breite eines Rahmens um das Bild. Verwenden Sie die CSS-Eigenschaft {{cssxref('border')}} anstelle dieses Attributs.
- `hspace` {{deprecated_inline}}
  - : Die Anzahl der Pixel von Leerraum links und rechts vom Bild. Verwenden Sie die CSS-Eigenschaft {{cssxref('margin')}} stattdessen.
- `longdesc` {{deprecated_inline}}

  - : Ein Link zu einer detaillierteren Beschreibung des Bildes. Mögliche Werte sind eine {{Glossary("URL", "URL")}} oder eine Element-[`id`](/de/docs/Web/HTML/Reference/Global_attributes/id).

    > [!NOTE]
    > Dieses Attribut wird in der neuesten {{Glossary("W3C", "W3C")}}-Version, [HTML 5.2](https://html.spec.whatwg.org/multipage/obsolete.html#element-attrdef-img-longdesc), erwähnt, wurde jedoch aus dem [HTML Living Standard](https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element) der {{Glossary("WHATWG", "WHATWG")}} entfernt. Es hat eine ungewisse Zukunft; Autoren sollten eine {{Glossary("WAI", "WAI")}}-{{Glossary("ARIA", "ARIA")}}-Alternative wie [`aria-describedby`](https://www.w3.org/TR/wai-aria-1.1/#aria-describedby) oder [`aria-details`](https://www.w3.org/TR/wai-aria-1.1/#aria-details) verwenden.

- `name` {{deprecated_inline}}
  - : Ein Name für das Element. Verwenden Sie stattdessen das [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut.
- `vspace` {{deprecated_inline}}
  - : Die Anzahl der Pixel von Leerraum oberhalb und unterhalb des Bildes. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref('margin')}}.

## Styling mit CSS

`<img>` ist ein {{Glossary("replaced_elements", "ersetzenes Element")}}; es hat standardmäßig einen {{cssxref("display")}}-Wert von `inline`, aber seine Standardabmessungen werden durch die eingebetteten intrinsischen Werte des Bildes definiert, als ob es `inline-block` wäre. Sie können Eigenschaften wie {{cssxref("border")}}/{{cssxref("border-radius")}}, {{cssxref("padding")}}/{{cssxref("margin")}}, {{cssxref("width")}}, {{cssxref("height")}} usw. auf ein Bild anwenden.

`<img>` hat keine Grundlinie, sodass, wenn Bilder in einem Inline-Formatierungskontext mit {{cssxref("vertical-align", "vertical-align: baseline")}} verwendet werden, die Unterseite des Bildes auf die Textgrundlinie gesetzt wird.

Sie können die Eigenschaft {{cssxref("object-position")}} verwenden, um das Bild innerhalb der Box des Elements zu positionieren, und die Eigenschaft {{cssxref("object-fit")}}, um die Größenanpassung des Bildes innerhalb der Box anzupassen (zum Beispiel, ob das Bild in die Box passen oder sie füllen soll, auch wenn ein Zuschneiden erforderlich ist).

Je nach Typ kann ein Bild eine intrinsische Breite und Höhe haben. Für einige Bildtypen sind jedoch intrinsische Abmessungen nicht notwendig. {{Glossary("SVG", "SVG")}}-Bilder haben beispielsweise keine intrinsischen Abmessungen, wenn ihr Wurzel-{{SVGElement("svg")}}-Element keine `width`- oder `height`-Angaben hat.

## Barrierefreiheit

### Sinnvolle alternative Beschreibungen verfassen

Der Wert eines `alt`-Attributs sollte einen klaren und prägnanten Textersatz für den Inhalt des Bildes liefern. Er sollte nicht das Vorhandensein des Bildes selbst oder den Dateinamen des Bildes beschreiben. Wenn das `alt`-Attribut absichtlich weggelassen wird, weil das Bild kein Textäquivalent hat, ziehen Sie alternative Methoden in Betracht, um das zu präsentieren, was das Bild zu kommunizieren versucht.

#### Nicht

```html example-bad
<img alt="image" src="penguin.jpg" />
```

#### Tun

```html example-good
<img alt="A Penguin on a beach." src="penguin.jpg" />
```

Ein wichtiger Barrierefreiheitstest besteht darin, den Inhalt des `alt`-Attributs zusammen mit dem vorhergehenden Textinhalt zu lesen, um zu sehen, ob er die gleiche Bedeutung wie das Bild vermittelt. Zum Beispiel könnte das Bild in der _Nicht_-Beispiel von einem Bildschirmleser als "Auf meinen Reisen sah ich ein niedliches kleines Tier: Bild" vorgelesen werden, was keinen Sinn ergibt. Das _Tun_-Beispiel könnte von einem Bildschirmleser als "Auf meinen Reisen sah ich ein niedliches kleines Tier: Ein Pinguin am Strand." vorgelesen werden, was sinnvoll ist.

Für Bilder, die eine Aktion auslösen, zum Beispiel, Bilder, die in einem {{htmlelement("a")}}- oder {{htmlelement("button")}}-Element geschachtelt sind, erwägen Sie, die ausgelöste Aktion im `alt`-Attributwert zu beschreiben. Zum Beispiel könnten Sie `alt="nächste Seite"` anstelle von `alt="Pfeil rechts"` schreiben. Sie könnten auch erwägen, eine optionale weitere Beschreibung in einem `title`-Attribut hinzuzufügen; dies kann von Bildschirmlesern gelesen werden, wenn der Benutzer es anfordert.

Wenn ein `alt`-Attribut bei einem Bild nicht vorhanden ist, können einige Bildschirmleser den Dateinamen des Bildes ankündigen. Dies kann eine verwirrende Erfahrung sein, wenn der Dateiname den Inhalt des Bildes nicht repräsentiert.

- [Ein Alt Decision Tree • Bilder • WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/images/decision-tree/)
- [Alt-Texte: Der ultimative Leitfaden — Axess Lab](https://axesslab.com/alt-texts/)
- [Wie man großartige Alt-Texte gestaltet: Eine Einführung | Deque](https://www.deque.com/blog/great-alt-text-introduction/)
- [MDN Verständnis des WCAG, Richtlinie 1.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Erklärung des Erfolgskriteriums 1.1.1 | W3C Verständnis der WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

### SVG als Bild identifizieren

Aufgrund eines [VoiceOver-Bugs](https://webkit.org/b/216364) kündigt VoiceOver SVG-Bilder nicht korrekt als Bilder an. Fügen Sie [`role="img"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/img_role) zu allen `<img>`-Elementen mit SVG-Quelldateien hinzu, um sicherzustellen, dass unterstützende Technologien das SVG korrekt als Bildinhalt ankündigen.

```html
<img src="mdn.svg" alt="MDN" role="img" />
```

### Das title-Attribut

Das [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)-Attribut ist kein akzeptabler Ersatz für das `alt`-Attribut. Vermeiden Sie außerdem, den Wert des `alt`-Attributs in einem `title`-Attribut des gleichen Bildes zu duplizieren. Dies kann dazu führen, dass einige Bildschirmleser denselben Text zweimal ankündigen, was eine verwirrende Erfahrung schafft.

Das `title`-Attribut sollte auch nicht als ergänzende Beschriftungsinformation verwendet werden, um eine `alt`-Beschreibung des Bildes zu begleiten. Wenn ein Bild eine Beschriftung benötigt, verwenden Sie die [`figure`](/de/docs/Web/HTML/Reference/Elements/figure) und [`figcaption`](/de/docs/Web/HTML/Reference/Elements/figcaption)-Elemente.

Der Wert des `title`-Attributs wird dem Benutzer normalerweise als Tooltip präsentiert, der kurz nachdem der Cursor auf dem Bild zum Stillstand kommt, erscheint. Während dies _zusätzliche_ Informationen für den Benutzer bereitstellen kann, sollten Sie nicht davon ausgehen, dass der Benutzer sie jemals sehen wird: Der Benutzer könnte nur eine Tastatur oder Touchscreen haben. Wenn Sie Informationen haben, die besonders wichtig oder wertvoll für den Benutzer sind, präsentieren Sie sie inline mit einer der oben genannten Methoden anstelle von `title`.

- [Verwendung des HTML-title-Attributs – aktualisiert | The Paciello Group](https://www.tpgi.com/using-the-html-title-attribute-updated/)

## Beispiele

### Alternativer Text

Das folgende Beispiel bettet ein Bild in die Seite ein und enthält einen alternativen Text zur Barrierefreiheit.

```html
<img src="/shared-assets/images/examples/favicon144.png" alt="MDN" />
```

{{EmbedLiveSample('Alternative_text', '100%', '160')}}

### Bild-Link

Dieses Beispiel baut auf dem vorherigen auf und zeigt, wie man das Bild in einen Link verwandelt. Dazu schachteln Sie das `<img>`-Tag innerhalb des {{HTMLElement("a")}}. Der alternative Text sollte die Ressource beschreiben, auf die der Link zeigt, als ob Sie stattdessen einen Textlink verwenden würden.

```html
<a href="https://developer.mozilla.org">
  <img
    src="/shared-assets/images/examples/favicon144.png"
    alt="Visit the MDN site" />
</a>
```

{{EmbedLiveSample('Image_link', '100%', '160')}}

### Verwendung des srcset-Attributs

In diesem Beispiel fügen wir ein `srcset`-Attribut mit einem Verweis auf eine hochauflösende Version des Logos ein; diese wird anstelle des `src`-Bildes auf hochauflösenden Geräten geladen. Das im `src`-Attribut referenzierte Bild wird in {{Glossary("User_agent", "User Agents")}}, die `srcset` unterstützen, als `1x`-Kandidat betrachtet.

```html
<img
  src="/shared-assets/images/examples/favicon72.png"
  alt="MDN"
  srcset="/shared-assets/images/examples/favicon144.png 2x" />
```

{{EmbedLiveSample("Using_the_srcset_attribute", "100%", "160")}}

### Verwendung der Attribute srcset und sizes

Das `src`-Attribut wird in {{Glossary("User_agent", "User Agents")}}, die `srcset` unterstützen, ignoriert, wenn `w`-Beschreiber enthalten sind. Wenn die Medienbedingung `(max-width: 600px)` übereinstimmt, wird das 200 Pixel breite Bild geladen (es ist das, das `200px` am nächsten kommt), andernfalls wird das andere Bild geladen.

```html
<img
  src="clock-demo-200px.png"
  alt="The time is 12:45."
  srcset="clock-demo-200px.png 200w, clock-demo-400px.png 400w"
  sizes="(max-width: 600px) 200px, 50vw" />
```

{{EmbedLiveSample("Using_the_srcset_and_sizes_attributes", "100%", 350)}}

> [!NOTE]
> Um die Größenanpassung in Aktion zu sehen, {{LiveSampleLink('Using_the_srcset_and_sizes_attributes', 'sehen Sie das Beispiel auf einer separaten Seite')}}, so dass Sie den Inhaltsbereich tatsächlich ändern können.

## Sicherheits- und Datenschutzzusammenhänge

Obwohl `<img>`-Elemente harmlos aussehen, können sie unerwünschte Konsequenzen für die Sicherheit und Privatsphäre der Benutzer haben. Siehe [Referer-Header: Sicherheits- und Datenschutzbedenken](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns) für weitere Informationen und Abhilfemaßnahmen.

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
          >Fließinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Textinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#embedded_content"
          >Eingebetteter Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#palpable_content"
          >wahrnehmbarer Inhalt</a
        >. Wenn das Element ein <code>usemap</code>-Attribut hat, gehört es auch zur interaktiven Inhaltskategorie.
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
- {{cssxref("object-fit")}}, {{cssxref("object-position")}}, {{cssxref("image-orientation")}}, {{cssxref("image-rendering")}}, und {{cssxref("image-resolution")}}: Auf Bild bezogene CSS-Eigenschaften.
- [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Schnittstelle für dieses Element
- [HTML-Bilder](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images)
- [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types)
- [Responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images)
