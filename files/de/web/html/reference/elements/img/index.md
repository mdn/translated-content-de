---
title: "<img>: Das Bild-Einbettungselement"
slug: Web/HTML/Reference/Elements/img
l10n:
  sourceCommit: bd6d5e560e6311b217a6c10416d47c4501bb09fe
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

- Das `src`-Attribut ist **erforderlich** und enthält den Pfad zu dem Bild, das Sie einbetten möchten.
- Das `alt`-Attribut enthält einen Textersatz für das Bild, der obligatorisch und **unglaublich nützlich** für die Barrierefreiheit ist — Bildschirmleser lesen den Attributwert ihren Nutzern vor, damit sie verstehen, was das Bild bedeutet. Alternativer Text wird auch auf der Seite angezeigt, wenn das Bild aus irgendeinem Grund nicht geladen werden kann, z. B. bei Netzwerkfehlern, Inhaltsblockierung oder dem Verfall von Links.

Es gibt viele andere Attribute für verschiedene Zwecke:

- Kontrolle von [Referrer](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy)/{{Glossary("CORS", "CORS")}} für Sicherheit und Datenschutz: siehe [`crossorigin`](#crossorigin) und [`referrerpolicy`](#referrerpolicy).
- Verwenden Sie sowohl [`width`](#width) als auch [`height`](#height), um die intrinsische Größe des Bildes festzulegen, damit es Platz einnimmt, bevor es geladen wird und so Layoutverschiebungen vermieden werden.
- Hinweise für responsive Bilder mit [`sizes`](#sizes) und [`srcset`](#srcset) (siehe auch das {{htmlelement("picture")}}-Element und unseren [Leitfaden zu responsiven Bildern](/de/docs/Web/HTML/Guides/Responsive_images)).

## Unterstützte Bildformate

Der HTML-Standard listet nicht auf, welche Bildformate unterstützt werden sollen, daher können {{Glossary("user_agent", "User-Agents")}} unterschiedliche Formate unterstützen.

> [!NOTE]
> Der [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types) bietet umfassende Informationen über Bildformate und deren Unterstützung durch Webbrowser.
> Dieser Abschnitt ist nur eine Zusammenfassung!

Die am häufigsten im Web verwendeten Bildformate sind:

- [APNG (Animated Portable Network Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#apng_animated_portable_network_graphics) — Gute Wahl für verlustfreie Animationssequenzen (GIF ist weniger leistungsfähig)
- [AVIF (AV1 Image File Format)](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) — Gute Wahl für Bilder und animierte Bilder aufgrund hoher Leistung.
- [GIF (Graphics Interchange Format)](/de/docs/Web/Media/Guides/Formats/Image_types#gif_graphics_interchange_format) — Gute Wahl für _einfache_ Bilder und Animationen.
- [JPEG (Joint Photographic Expert Group image)](/de/docs/Web/Media/Guides/Formats/Image_types#jpeg_joint_photographic_experts_group_image) — Gute Wahl für verlustbehaftete Komprimierung von Standbildern (derzeit am beliebtesten).
- [PNG (Portable Network Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#png_portable_network_graphics) — Gute Wahl für verlustfreie Komprimierung von Standbildern (leicht bessere Qualität als JPEG).
- [SVG (Scalable Vector Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#svg_scalable_vector_graphics) — Vektorbildformat. Verwenden Sie es für Bilder, die in verschiedenen Größen genau gezeichnet werden müssen.
- [WebP (Web Picture format)](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) — Hervorragende Wahl für Bilder und animierte Bilder

Formate wie [WebP](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) und [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) werden empfohlen, da sie sowohl für Standbilder als auch für animierte Bilder viel besser performen als PNG, JPEG und GIF.

SVG bleibt das empfohlene Format für Bilder, die in verschiedenen Größen genau gezeichnet werden müssen.

## Bildladefehler

Wenn beim Laden oder Rendern eines Bildes ein Fehler auftritt und ein `onerror`-Ereignishandler für das [`error`](/de/docs/Web/API/HTMLElement/error_event)-Ereignis festgelegt wurde, wird dieser Ereignishandler aufgerufen. Dies kann in mehreren Situationen passieren, einschließlich:

- Das `src`-Attribut ist leer (`""`) oder `null`.
- Die `src`-{{Glossary("URL", "URL")}} ist die gleiche wie die URL der Seite, die der Benutzer gerade aufgerufen hat.
- Das Bild ist in einer Weise beschädigt, die das Laden verhindert.
- Die Metadaten des Bildes sind so beschädigt, dass seine Abmessungen nicht abgerufen werden können und keine Abmessungen in den Attributen des `<img>`-Elements angegeben wurden.
- Das Bild ist in einem Format, das vom {{Glossary("user_agent", "User-Agent")}} nicht unterstützt wird.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- [`alt`](/de/docs/Web/API/HTMLImageElement/alt#usage_notes)

  - : Definiert Text, der das Bild auf der Seite ersetzen kann.

    > [!NOTE]
    > Browser zeigen nicht immer Bilder an. Es gibt eine Reihe von Situationen, in denen ein Browser eventuell keine Bilder anzeigt, wie zum Beispiel:
    >
    > - Nicht-visuelle Browser (wie sie von Menschen mit Sehbehinderungen verwendet werden)
    > - Der Benutzer entscheidet sich, keine Bilder anzuzeigen (Bandbreite sparen, Datenschutzgründe)
    > - Das Bild ist ungültig oder ein [nicht unterstütztes Format](#unterstützte_bildformate)
    >
    > In diesen Fällen kann der Browser das Bild durch den Text im `alt`-Attribut des Elements ersetzen. Aus diesen und anderen Gründen sollten Sie, wenn möglich, einen nützlichen Wert für `alt` angeben.

    Das Setzen dieses Attributs auf eine leere Zeichenfolge (`alt=""`) zeigt an, dass dieses Bild _nicht_ ein Schlüsselbestandteil des Inhalts ist (es ist Dekoration oder ein Tracking-Pixel) und dass nicht-visuelle Browser es beim {{Glossary("Engine/Rendering", "Rendern")}} auslassen können. Visuelle Browser werden auch das Symbol für ein kaputtes Bild verbergen, wenn das `alt`-Attribut leer ist und das Bild nicht angezeigt wurde.

    Dieses Attribut wird auch verwendet, wenn das Bild in Text kopiert oder als verlinktes Bild in einem Lesezeichen gespeichert wird.

- `attributionsrc` {{experimental_inline}}

  - : Gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header zusammen mit der Bildanfrage sendet.

    Auf der Serverseite wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Headers in der Antwort auszulösen, um eine bildbasierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#html-based_event_sources) oder [Attributionstrigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#html-based_attribution_triggers) zu registrieren. Welcher Antwort-Header zurückgesendet werden soll, hängt vom Wert des Headers `Attribution-Reporting-Eligible` ab, der die Registrierung ausgelöst hat.

    Das entsprechende Quell- oder Triggerevent wird ausgelöst, sobald der Browser die Antwort mit der Bilddatei erhält.

    > [!NOTE]
    > Siehe die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) für weitere Details.

    Es gibt zwei Versionen dieses Attributs, die Sie setzen können:

    - Boolean, d.h. nur der `attributionsrc`-Name. Dies spezifiziert, dass Sie möchten, dass der {{httpheader("Attribution-Reporting-Eligible")}}-Header an denselben Server gesendet wird, auf den das `src`-Attribut verweist. Dies ist in Ordnung, wenn Sie die Registrierung der Attributionsquelle oder des Triggers auf demselben Server durchführen. Beim Registrieren eines Attributionstriggers ist diese Eigenschaft optional und ein boolescher Wert wird verwendet, wenn sie weggelassen wird.
    - Wert, der eine oder mehrere URLs enthält, zum Beispiel:

    ```html
    <img
      src="image-file.png"
      alt="My image file description"
      attributionsrc="https://a.example/register-source
                         https://b.example/register-source" />
    ```

    Dies ist nützlich in Fällen, in denen die angeforderte Ressource nicht auf einem von Ihnen kontrollierten Server liegt, oder wenn Sie die Registrierung der Attributionsquelle auf einem anderen Server durchführen möchten. In diesem Fall können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcenanforderung erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header an die in `attributionsrc` angegebenen URL(s) zusätzlich zum Ursprung der Ressource gesendet. Diese URLs können dann mit einem {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header antworten, wie es zur Vervollständigung der Registrierung angemessen ist.

    > [!NOTE]
    > Das Spezifizieren mehrerer URLs bedeutet, dass mehrere Attributionsquellen für dieselbe Funktion registriert werden können. Sie könnten zum Beispiel verschiedene Kampagnen haben, deren Erfolg Sie messen möchten, was das Erstellen unterschiedlicher Berichte über verschiedene Daten beinhaltet.

- [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)

  - : Zeigt an, ob das Abrufen des Bildes unter Verwendung einer {{Glossary("CORS", "CORS")}}-Anfrage durchgeführt werden muss. Bilddaten eines von CORS aktivierten Bildes, das von einer CORS-Anfrage zurückgegeben wird, können im {{HTMLElement("canvas")}}-Element wiederverwendet werden, ohne als "[verfälscht](/de/docs/Web/HTML/How_to/CORS_enabled_image#security_and_tainted_canvases)" markiert zu werden.

    Wenn das `crossorigin`-Attribut _nicht_ angegeben ist, wird eine Nicht-CORS-Anfrage gesendet (ohne den {{httpheader("Origin")}}-Anforderungsheader), und der Browser markiert das Bild als verfälscht und schränkt den Zugriff auf seine Bilddaten ein, was die Verwendung im {{HTMLElement("canvas")}}-Element verhindert.

    Wenn das `crossorigin`-Attribut _angegeben_ ist, wird eine CORS-Anfrage gesendet (mit dem {{httpheader("Origin")}}-Anforderungsheader); wenn der Server jedoch nicht einwilligt, den Zugriff auf die Bilddaten durch die Ursprungsseite zu erlauben (indem er keinen {{httpheader("Access-Control-Allow-Origin")}}-Antwortheader sendet oder nicht den Ursprung der Seite in einem gesendeten {{httpheader("Access-Control-Allow-Origin")}}-Antwortheader enthält), blockiert der Browser das Laden des Bildes und protokolliert einen CORS-Fehler in der Entwicklerkonsole.

    Erlaubte Werte:

    - `anonymous`
      - : Eine CORS-Anfrage wird gesendet, wobei Anmeldeinformationen weggelassen werden (d.h. keine {{Glossary("cookie", "Cookies")}}, [X.509-Zertifikate](https://datatracker.ietf.org/doc/html/rfc5280) oder {{httpheader("Authorization")}}-Anforderungsheader).
    - `use-credentials`
      - : Die CORS-Anfrage wird mit allen enthaltenen Anmeldeinformationen gesendet (d.h. Cookies, X.509-Zertifikate und der `Authorization`-Anforderungsheader). Wenn der Server nicht einwilligt, die Anmeldeinformationen mit der Ursprungsseite zu teilen (durch das Senden des Antwortheaders `Access-Control-Allow-Credentials: true`), markiert der Browser das Bild als verfälscht und beschränkt den Zugriff auf seine Bilddaten.

    Wenn das Attribut einen ungültigen Wert hat, behandeln Browser es so, als wäre der Wert `anonymous` verwendet worden. Siehe [CORS-Einstellungen-Attribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin) für zusätzliche Informationen.

- `decoding`

  - : Dieses Attribut bietet dem Browser einen Hinweis darauf, ob er die Bilddecodierung zusammen mit dem Rendern des anderen DOM-Inhalts in einem einzigen Darstellungsschritt durchführen soll, der "korrekter" aussieht (`sync`), oder den anderen DOM-Inhalt zuerst rendern und darstellen und nachträglich das Bild decodieren und präsentieren soll (`async`). In der Praxis bedeutet `async`, dass der nächste Farbauftrag nicht darauf wartet, dass das Bild decodiert wird.

    Es ist oft schwierig, einen merklichen Effekt beim Verwenden von `decoding` auf statischen `<img>`-Elementen wahrzunehmen. Sie werden wahrscheinlich zunächst als leere Bilder gerendert, während die Bilddateien abgerufen werden (entweder aus dem Netzwerk oder aus dem Cache) und dann unabhängig gehandhabt, sodass das "Abgleichen" von Inhaltsaktualisierungen weniger offensichtlich ist. Das Blockieren des Renderns, während die Decodierung erfolgt, kann zwar oft sehr klein sein, _aber_ messbar sein — auch wenn es schwierig ist, es mit dem menschlichen Auge zu erkennen. Siehe [Was macht das Bilddecodierungsattribut eigentlich?](https://www.tunetheweb.com/blog/what-does-the-image-decoding-attribute-actually-do/) für eine detaillierte Analyse (tunetheweb.com, 2023).

    Unterschiedliche `decoding`-Typen können zu merklichen Unterschieden führen, wenn `<img>`-Elemente dynamisch über JavaScript in den DOM eingefügt werden — siehe [`HTMLImageElement.decoding`](/de/docs/Web/API/HTMLImageElement/decoding) für weitere Details.

    Erlaubte Werte:

    - `sync`
      - : Decodiere das Bild synchron mit dem Rendern des anderen DOM-Inhalts und präsentiere alles zusammen.
    - `async`
      - : Decodiere das Bild asynchron, nach dem Rendern und der Präsentation des anderen DOM-Inhalts.
    - `auto`
      - : Keine Präferenz für den Decodierungsmodus; der Browser entscheidet, was am besten für den Nutzer ist. Dies ist der Standardwert.

- [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming)

  - : Markiert das Bild zur Beobachtung durch die [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)-API. Der angegebene Wert wird zu einer Kennung für das beobachtete Bildelement. Siehe auch die Seite zum [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming)-Attribut.

- `fetchpriority`

  - : Bietet einen Hinweis auf die relative Priorität, die beim Abrufen des Bilds verwendet werden soll.
    Erlaubte Werte:

    - `high`
      - : Rufen Sie das Bild mit hoher Priorität im Vergleich zu anderen Bildern ab.
    - `low`
      - : Rufen Sie das Bild mit niedriger Priorität im Vergleich zu anderen Bildern ab.
    - `auto`
      - : Legen Sie keine Präferenz für die Abrufpriorität fest.
        Dies ist der Standard.
        Es wird verwendet, wenn kein Wert oder ein ungültiger Wert festgelegt ist.

    Siehe [`HTMLImageElement.fetchPriority`](/de/docs/Web/API/HTMLImageElement/fetchPriority) für weitere Informationen.

- `height`

  - : Die intrinsische Höhe des Bildes in Pixel. Muss eine ganze Zahl ohne Einheit sein.

    > [!NOTE]
    > Die Einbeziehung von `height` und [`width`](#width) ermöglicht es dem Browser, das {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Bildes zu berechnen, bevor das Bild geladen wird. Dieses Seitenverhältnis wird verwendet, um den Platz zu reservieren, der benötigt wird, um das Bild anzuzeigen, und so Layoutverschiebungen zu reduzieren oder sogar zu verhindern, wenn das Bild heruntergeladen und auf dem Bildschirm angezeigt wird. Die Reduzierung von Layoutverschiebungen ist ein wesentlicher Bestandteil eines guten Nutzererlebnisses und der Web-Performance.

- `ismap`

  - : Dieses Boolesche Attribut gibt an, dass das Bild Teil einer [server-seitigen Karte](https://en.wikipedia.org/wiki/Image_map#Server-side) ist. Wenn dies der Fall ist, werden die Koordinaten, wo der Benutzer auf das Bild geklickt hat, an den Server gesendet.

    > [!NOTE]
    > Dieses Attribut ist nur erlaubt, wenn das `<img>`-Element ein Nachkomme eines {{htmlelement("a")}}-Elements mit einem gültigen [`href`](/de/docs/Web/HTML/Reference/Elements/a#href)-Attribut ist. Dies gibt Nutzern ohne Zeigegeräte ein alternatives Ziel.

- `loading`

  - : Gibt an, wie der Browser das Bild laden soll:

    - `eager`
      - : Lädt das Bild sofort, unabhängig davon, ob sich das Bild aktuell im sichtbaren Anzeigebereich befindet oder nicht (dies ist der Standardwert).
    - `lazy`
      - : Verzögert das Laden des Bildes, bis es eine berechnete Entfernung vom Anzeigebereich erreicht hat, wie vom Browser definiert. Das Ziel ist es, das für die Verarbeitung des Bildes benötigte Netzwerk und den Speicheraufwand zu vermeiden, bis es mit Sicherheit benötigt wird. Dies verbessert in der Regel die Leistung der Inhalte in den meisten typischen Anwendungsfällen.

    > [!NOTE]
    > Das Laden wird nur verzögert, wenn JavaScript aktiviert ist. Dies ist eine Anti-Tracking-Maßnahme, da es immer noch möglich wäre, wenn ein User-Agent faule Ladezeiten unterstützt, wenn Skripting deaktiviert ist, die ungefähre Scroll-Position eines Nutzers während einer Sitzung zu verfolgen, indem strategisch Bilder im Markup einer Seite platziert werden, sodass ein Server verfolgen kann, wie viele Bilder wann angefordert werden.

    > [!NOTE]
    > Bilder mit `loading` auf `lazy` gesetzt werden niemals geladen, wenn sie keinen sichtbaren Teil eines Elements schneiden, selbst wenn das Laden sie ändern würde, da ungeladene Bilder eine `width` und `height` von `0` haben. Das Hinzufügen von `width` und `height` zu faul geladenen Bildern behebt dieses Problem und ist eine bewährte Praxis, [empfohlen von der Spezifikation](https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element). Dies hilft auch, Layoutverschiebungen zu verhindern.

- `referrerpolicy`

  - : Eine Zeichenfolge, die angibt, welchen Referrer beim Abrufen der Ressource verwendet werden soll:

    - `no-referrer`: Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}}-Header wird nicht an {{Glossary("origin", "Ursprünge")}} ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`: Der gesendete Referrer wird auf den Ursprung der verweisenden Seite beschränkt: sein [Schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`: Der Referrer, der an andere Ursprünge gesendet wird, wird auf das Schema, den Host und den Port beschränkt. Navigationen am gleichen Ursprung beinhalten weiterhin den Pfad.
    - `same-origin`: Ein Referrer wird für {{Glossary("Same-origin_policy", "gleichartige Ursprünge")}} gesendet, aber Cross-Origin-Anfragen enthalten keine Referrer-Informationen.
    - `strict-origin`: Sendet nur den Ursprung des Dokuments als Referrer, wenn das Sicherheitsprotokoll gleich bleibt (HTTPS→HTTPS), sendet ihn jedoch nicht an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (standardmäßig): Sendet eine vollständige URL bei der Durchführung einer gleichartigen Anfrage, sendet nur den Ursprung, wenn das Sicherheitsprotokoll gleich bleibt (HTTPS→HTTPS), und sendet keinen Header an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `unsafe-url`: Der Referrer enthält den Ursprung _und_ den Pfad (aber nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder [Benutzername](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge leakt.

- `sizes`

  - : Eine oder mehrere durch Kommas getrennte Zeichenfolgen, die eine Menge von Quellgrößen angeben. Jede Quellgröße besteht aus:

    1. Einer [Medienbedingung](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#syntax). Diese muss für den letzten Eintrag in der Liste weggelassen werden.
    2. Einem Quellgrößenwert.

    Medienbedingungen beschreiben Eigenschaften des _Anzeigebereichs_, nicht des _Bildes_. Zum Beispiel, `(max-height: 500px) 1000px` schlägt vor, eine Quelle von 1000px Breite zu verwenden, wenn der _Anzeigebereich_ nicht höher als 500px ist. Da ein Quellgrößenbeschreiber verwendet wird, um die Breite zu spezifizieren, die für das Bild während des Seitenlayouts verwendet werden soll, basiert die Medienbedingung typischerweise (aber nicht notwendigerweise) auf den [Breite](/de/docs/Web/CSS/@media/width)-Informationen.

    Quellgrößenwerte spezifizieren die beabsichtigte Anzeigebreite des Bildes. {{Glossary("User_agent", "User-Agents")}} verwenden die aktuelle Quellgröße, um eine der von dem `srcset`-Attribut bereitgestellten Quellen auszuwählen, wenn diese Quellen unter Verwendung von Breitenbeschreibern (`w`) beschrieben werden. Die ausgewählte Quellgröße beeinflusst die {{Glossary("intrinsic_size", "intrinsische Größe")}} des Bildes (die Anzeigengröße des Bildes, wenn kein {{Glossary("CSS", "CSS")}} Styling angewendet wird). Wenn das `srcset`-Attribut fehlt oder keine Werte mit einem Breitenbeschreiber enthält, hat das `sizes`-Attribut keine Auswirkung.

    Ein Quellgrößenwert kann eine beliebige nicht-negative [Länge](/de/docs/Web/CSS/length) sein. Es darf keine CSS-Funktionen außer den [Mathematischen Funktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#math_functions) verwenden. Die Einheiten werden auf dieselbe Weise wie [Medienanfragen](/de/docs/Web/CSS/CSS_media_queries) interpretiert, was bedeutet, dass alle relativen Längeneinheiten relativ zur Dokumentwurzel anstatt zum `<img>`-Element selbst sind, also bezieht sich ein `em`-Wert auf die Root-Schriftgröße und nicht auf die Schriftgröße des Bildes. [Prozentuale](/de/docs/Web/CSS/percentage) Werte sind nicht erlaubt.

    Das `sizes`-Attribut akzeptiert auch die folgenden Schlüsselwortwerte:

    - `auto`

      - : `auto` kann die gesamte Liste der Größen oder den ersten Eintrag in der Liste ersetzen. Es ist nur gültig, wenn es mit `loading="lazy"` kombiniert wird, und löst sich zur [konkreten Größe](/de/docs/Web/CSS/image) des Bildes. Da die intrinsische Größe des Bildes noch nicht bekannt ist, sollten `width` und `height` Attribute (oder entsprechende CSS-Eigenschaften) ebenfalls spezifiziert werden, um zu [verhindern, dass der Browser eine Standardbreite von 300px annimmt](https://html.spec.whatwg.org/multipage/images.html#sizes-attributes:attr-dim-width).

- `src`
  - : Die Bild-{{Glossary("URL", "URL")}}. Obligatorisch für das `<img>`-Element. Auf {{Glossary("Browser", "Browsern")}}, die `srcset` unterstützen, wird `src` wie ein Kandidat-Bild mit einem Pixeldichtebeschreiber `1x` behandelt, es sei denn, ein Bild mit diesem Pixeldichtewert ist bereits in `srcset` definiert, oder `srcset` enthält `w`-Beschreiber.
- `srcset`

  - : Eine oder mehrere durch Kommas getrennte Zeichenfolgen, die mögliche Bildquellen angeben, die der {{Glossary("user_agent", "User-Agent")}} verwenden kann. Jede Zeichenfolge setzt sich zusammen aus:

    1. Einer {{Glossary("URL", "URL")}} zu einem Bild
    2. Optional gefolgt von einem Leerzeichen und einem der beiden:

       - Einem Breitenbeschreiber (eine positive ganze Zahl direkt gefolgt von `w`). Der Breitenbeschreiber wird durch die im `sizes`-Attribut angegebene Quellgröße dividiert, um die effektive Pixeldichte zu berechnen.
       - Einem Pixeldichtebeschreiber (eine positive Gleitkommazahl direkt gefolgt von `x`).

    Wenn kein Beschreiber angegeben ist, wird die Quelle mit dem Standardbeschreiber von `1x` zugewiesen.

    Es ist inkorrekt, Breitenbeschreiber und Pixeldichtebeschreiber im selben `srcset`-Attribut zu mischen. Doppelte Beschreiber (z. B. zwei Quellen im selben `srcset`, die beide mit `2x` beschrieben sind) sind ebenfalls ungültig.

    Wenn das `srcset`-Attribut Breitenbeschreiber verwendet, muss das `sizes`-Attribut ebenfalls vorhanden sein, andernfalls wird das `srcset` selbst ignoriert.

    Der User-Agent wählt nach seinem Ermessen eine der verfügbaren Quellen aus. Dies gibt ihm bedeutende Freiheit, seine Auswahl basierend auf Dingen wie Benutzerpräferenzen oder {{Glossary("bandwidth", "Bandbreite")}}-Bedingungen anzupassen. Siehe unser [Leitfaden zu responsiven Bildern](/de/docs/Web/HTML/Guides/Responsive_images) für ein Beispiel.

- `width`
  - : Die intrinsische Breite des Bildes in Pixel. Muss eine ganze Zahl ohne Einheit sein.
- `usemap`

  - : Die partielle {{Glossary("URL", "URL")}} (beginnt mit `#`) einer [Bildkarte](/de/docs/Web/HTML/Reference/Elements/map), die mit dem Element verknüpft ist.

    > [!NOTE]
    > Sie können dieses Attribut nicht verwenden, wenn das `<img>`-Element innerhalb eines {{htmlelement("a")}}- oder {{htmlElement("button")}}-Elements ist.

### Veraltete Attribute

- `align` {{deprecated_inline}}

  - : Richtet das Bild in seinem umgebenden Kontext aus. Verwenden Sie statt dieses Attributs die {{cssxref('float')}}- und/oder {{cssxref('vertical-align')}}-Eigenschaften von {{Glossary("CSS", "CSS")}}. Erlaubte Werte:

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
  - : Die Breite eines Rahmens um das Bild. Verwenden Sie die Eigenschaft {{cssxref('border')}} von {{Glossary("CSS", "CSS")}} anstelle dieses Attributs.
- `hspace` {{deprecated_inline}}
  - : Die Anzahl der Pixel des weißen Raums links und rechts vom Bild. Verwenden Sie die CSS-Eigenschaft {{cssxref('margin')}} stattdessen.
- `longdesc` {{deprecated_inline}}

  - : Ein Link zu einer detaillierteren Beschreibung des Bildes. Mögliche Werte sind eine {{Glossary("URL", "URL")}} oder eine Element-[`id`](/de/docs/Web/HTML/Reference/Global_attributes/id).

    > [!NOTE]
    > Dieses Attribut wird in der neuesten {{Glossary("W3C", "W3C")}}-Version, [HTML 5.2](https://html.spec.whatwg.org/multipage/obsolete.html#element-attrdef-img-longdesc), erwähnt, wurde jedoch aus dem [HTML-Living-Standard](https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element) des {{Glossary("WHATWG", "WHATWG")}} entfernt. Es hat eine unsichere Zukunft; Autoren sollten eine {{Glossary("WAI", "WAI")}}-{{Glossary("ARIA", "ARIA")}}-Alternative wie [`aria-describedby`](https://www.w3.org/TR/wai-aria-1.1/#aria-describedby) oder [`aria-details`](https://www.w3.org/TR/wai-aria-1.1/#aria-details) verwenden.

- `name` {{deprecated_inline}}
  - : Ein Name für das Element. Verwenden Sie stattdessen das Attribut [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id).
- `vspace` {{deprecated_inline}}
  - : Die Anzahl der Pixel des weißen Raums ober- und unterhalb des Bildes. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref('margin')}}.

## Stil mit CSS

`<img>` ist ein {{Glossary("replaced_elements", "ersetztes Element")}}; es hat standardmäßig einen {{cssxref("display")}}-Wert von `inline`, aber seine Standardmaße werden durch die eingebetteten intrinsischen Werte des Bildes definiert, als wäre es `inline-block`. Sie können Eigenschaften wie {{cssxref("border")}}/{{cssxref("border-radius")}}, {{cssxref("padding")}}/{{cssxref("margin")}}, {{cssxref("width")}}, {{cssxref("height")}}, usw. auf ein Bild anwenden.

`<img>` hat keine Grundlinie, sodass Bilder, wenn sie in einem Inline-Formatierungs-Kontext mit {{cssxref("vertical-align", "vertical-align: baseline")}} verwendet werden, am Textgrundlinie ausgerichtet werden.

Sie können die Eigenschaft {{cssxref("object-position")}} verwenden, um das Bild innerhalb der Box des Elements zu positionieren, und die Eigenschaft {{cssxref("object-fit")}}, um die Größe des Bildes innerhalb der Box anzupassen (zum Beispiel, ob das Bild in die Box passen oder diese füllen soll, auch wenn dafür zugeschnitten werden muss).

Je nach Typ kann ein Bild eine intrinsische Breite und Höhe haben. Für einige Bildtypen jedoch sind diese intrinsischen Maße nicht erforderlich. {{Glossary("SVG", "SVG")}}-Bilder haben zum Beispiel keine intrinsischen Maße, wenn ihr Wurzel-{{SVGElement("svg")}}-Element keine `width` oder `height` darauf gesetzt hat.

## Barrierefreiheit

### Sinnvolle alternative Beschreibungen erstellen

Der Wert eines `alt`-Attributs sollte einen klaren und prägnanten Textersatz für den Inhalt des Bildes bereitstellen. Es sollte nicht die Anwesenheit des Bildes selbst oder den Dateinamen des Bildes beschreiben. Wenn das `alt`-Attribut absichtlich weggelassen wird, da das Bild kein Textäquivalent hat, sollten Sie alternative Methoden in Betracht ziehen, um das darzustellen, was das Bild mitteilen soll.

#### Nicht tun

```html example-bad
<img alt="image" src="penguin.jpg" />
```

#### Tun

```html example-good
<img alt="A Penguin on a beach." src="penguin.jpg" />
```

Ein wichtiger Barrierefreiheitstest besteht darin, den Inhalt des `alt`-Attributs zusammen mit dem vorherigen Textinhalt zu lesen, um zu sehen, ob er denselben Sinn wie das Bild vermittelt. Zum Beispiel, wenn dem Bild der Satz "Auf meinen Reisen sah ich ein süßes kleines Tier" vorausging, könnte das _Nicht tun_-Beispiel von einem Bildschirmleser als "Auf meinen Reisen sah ich ein süßes kleines Tier: Bild" gelesen werden, was keinen Sinn ergibt. Das _Tun_-Beispiel könnte von einem Bildschirmleser als "Auf meinen Reisen sah ich ein süßes kleines Tier: Ein Pinguin am Strand." gelesen werden, was Sinn ergibt.

Für Bilder, die verwendet werden, um eine Aktion auszulösen, z. B. Bilder, die in einem {{htmlelement("a")}} oder {{htmlelement("button")}}-Element verschachtelt sind, sollten Sie in Betracht ziehen, die ausgelöste Aktion im `alt`-Attributwert zu beschreiben. Zum Beispiel könnten Sie `alt="nächste Seite"` anstelle von `alt="Pfeil nach rechts"` schreiben. Sie könnten auch in Betracht ziehen, eine optionale, weitere Beschreibung in ein `title`-Attribut einzufügen; dies kann von Bildschirmlesern nach Benutzeranfrage gelesen werden.

Wenn ein `alt`-Attribut nicht auf einem Bild vorhanden ist, können einige Bildschirmleser stattdessen den Dateinamen des Bildes ankündigen. Dies kann eine verwirrende Erfahrung sein, wenn der Dateiname nicht repräsentativ für den Bildinhalt ist.

- [Ein Alt-Entscheidungsbaum • Bilder • WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/images/decision-tree/)
- [Alt-Texte: Der ultimative Leitfaden — Axess Lab](https://axesslab.com/alt-texts/)
- [Wie man großartige Alt-Texte gestaltet: Eine Einführung | Deque](https://www.deque.com/blog/great-alt-text-introduction/)
- [MDN: Verständnis von WCAG, Erklärung zu Richtlinie 1.1](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verständnis des Erfolgskriteriums 1.1.1 | W3C: Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

### Identifizieren von SVG als Bild

Aufgrund eines [VoiceOver-Bugs](https://webkit.org/b/216364) kündigt VoiceOver SVG-Bilder nicht korrekt als Bilder an. Fügen Sie [`role="img"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/img_role) zu allen `<img>`-Elementen mit SVG-Quelldateien hinzu, um sicherzustellen, dass unterstützende Technologien SVG korrekt als Bildinhalte ankündigen.

```html
<img src="mdn.svg" alt="MDN" role="img" />
```

### Das title-Attribut

Das [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)-Attribut ist kein akzeptabler Ersatz für das `alt`-Attribut. Vermeiden Sie außerdem die Duplizierung des `alt`-Attributwerts in einem `title`-Attribut, das auf demselben Bild deklariert wird. Dies könnte dazu führen, dass einige Bildschirmleser denselben Text zweimal ankündigen und eine verwirrende Erfahrung schaffen.

Das `title`-Attribut sollte auch nicht als ergänzende Beschriftungsinformation verwendet werden, um eine Beschreibung im `alt`-Attribut eines Bildes zu begleiten. Wenn ein Bild eine Beschriftung benötigt, verwenden Sie die [`figure`](/de/docs/Web/HTML/Reference/Elements/figure)- und [`figcaption`](/de/docs/Web/HTML/Reference/Elements/figcaption)-Elemente.

Der Wert des `title`-Attributs wird dem Nutzer in der Regel als Tooltip angezeigt, der kurz nach dem Stoppen der Bewegung des Mauszeigers über dem Bild auftaucht. Während dies dem Nutzer _zusätzliche_ Information bieten kann, sollten Sie nicht davon ausgehen, dass der Nutzer es jemals sehen wird: Der Nutzer hat möglicherweise nur eine Tastatur oder Touchscreen. Wenn Sie Informationen haben, die besonders wichtig oder wertvoll für den Nutzer sind, sollten Sie diese inline mit einer der oben genannten Methoden präsentieren, anstatt `title` zu verwenden.

- [Verwendung des HTML-title-Attributs – aktualisiert | Die Paciello-Gruppe](https://www.tpgi.com/using-the-html-title-attribute-updated/)

## Beispiele

### Alternativer Text

Das folgende Beispiel bettet ein Bild in die Seite ein und enthält alternativen Text für Barrierefreiheit.

```html
<img src="/shared-assets/images/examples/favicon144.png" alt="MDN" />
```

{{ EmbedLiveSample('Alternative_text', '100%', '160') }}

### Bilderlink

Dieses Beispiel baut auf dem vorherigen auf und zeigt, wie man das Bild in einen Link verwandelt. Dazu verschachteln Sie das `<img>`-Tag innerhalb von {{HTMLElement("a")}}. Sie sollten den Alternativtext so gestalten, dass er die Ressource beschreibt, auf die der Link verweist, als ob Sie einen Textlink verwenden würden.

```html
<a href="https://developer.mozilla.org">
  <img
    src="/shared-assets/images/examples/favicon144.png"
    alt="Visit the MDN site" />
</a>
```

{{ EmbedLiveSample('Image_link', '100%', '160') }}

### Verwendung des srcset-Attributs

In diesem Beispiel fügen wir ein `srcset`-Attribut mit einem Verweis auf eine hochauflösende Version des Logos hinzu; dieses wird anstelle des `src`-Bildes auf hochauflösenden Geräten geladen. Das Bild, auf das im `src`-Attribut verwiesen wird, wird als `1x`-Kandidat in {{Glossary("User_agent", "User Agents")}}, die `srcset` unterstützen, gezählt.

```html
<img
  src="/shared-assets/images/examples/favicon72.png"
  alt="MDN"
  srcset="/shared-assets/images/examples/favicon144.png 2x" />
```

{{EmbedLiveSample("Using_the_srcset_attribute", "100%", "160")}}

### Verwendung der srcset- und sizes-Attribute

Das `src`-Attribut wird in {{Glossary("User_agent", "User Agents")}}, die `srcset` unterstützen, ignoriert, wenn `w`-Beschreiber enthalten sind. Wenn die `(max-width: 600px)`-Medienbedingung zutrifft, wird das 200 Pixel breite Bild geladen (es ist dasjenige, das `200px` am besten entspricht), andernfalls wird das andere Bild geladen.

```html
<img
  src="clock-demo-200px.png"
  alt="The time is 12:45."
  srcset="clock-demo-200px.png 200w, clock-demo-400px.png 400w"
  sizes="(max-width: 600px) 200px, 50vw" />
```

{{EmbedLiveSample("Using_the_srcset_and_sizes_attributes", "100%", 350)}}

> [!NOTE]
> Um das Resizing in Aktion zu sehen, {{LiveSampleLink('Using_the_srcset_and_sizes_attributes', 'sehen Sie sich das Beispiel auf einer separaten Seite an')}}, damit Sie tatsächlich den Inhaltsbereich neu dimensionieren können.

## Sicherheits- und Datenschutzbedenken

Obwohl `<img>`-Elemente harmlose Verwendungszwecke haben, können sie unerwünschte Folgen für die Sicherheit und den Datenschutz der Nutzer haben. Siehe [Referer-Header: Datenschutz- und Sicherheitsbedenken](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns) für weitere Informationen und Abhilfen.

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
          >fühlbarer Inhalt</a
        >. Wenn das Element ein <code>usemap</code>-Attribut hat, gehört es auch zur Kategorie des interaktiven Inhalts.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "leeres Element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Es muss ein Start-Tag haben und darf kein End-Tag haben.</td>
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
            mit nicht leerem <code>alt</code>-Attribut oder ohne <code>alt</code>-Attribut:
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

- {{HTMLElement("picture")}}, {{HTMLElement("object")}}, und {{HTMLElement("embed")}} Elemente
- {{cssxref("object-fit")}}, {{cssxref("object-position")}}, {{cssxref("image-orientation")}}, {{cssxref("image-rendering")}}, und {{cssxref("image-resolution")}}: Bildbezogene CSS-Eigenschaften.
- [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Schnittstelle für dieses Element
- [HTML-Bilder](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images)
- [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types)
- [Responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images)
