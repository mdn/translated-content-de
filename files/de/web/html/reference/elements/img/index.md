---
title: "<img>: Das Bild-Einbettungselement"
slug: Web/HTML/Reference/Elements/img
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
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

- Das `src`-Attribut enthält den Pfad zum eingebetteten Bild. Es ist nicht erforderlich, wenn das [srcset](/de/docs/Web/API/HTMLImageElement/srcset)-Attribut verfügbar ist. Es muss jedoch mindestens eines der `src`- oder `srcset`-Attribute angegeben werden.
- Das `alt`-Attribut enthält einen Textersatz für das Bild, was obligatorisch ist und **unglaublich nützlich** für die Zugänglichkeit ist — Screenreader lesen den Attributwert für ihre Benutzer aus, damit sie wissen, was das Bild bedeutet. Alternativtext wird auch auf der Seite angezeigt, wenn das Bild aus irgendeinem Grund nicht geladen werden kann: zum Beispiel Netzwerkfehler, Inhaltsblockierung oder Link-Zerfall.

Es gibt viele andere Attribute für verschiedene Zwecke:

- [Referrer](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy)/{{Glossary("CORS", "CORS")}}-Kontrolle für Sicherheit und Datenschutz: siehe [`crossorigin`](#crossorigin) und [`referrerpolicy`](#referrerpolicy).
- Verwenden Sie sowohl [`width`](#width) als auch [`height`](#height), um die intrinsische Größe des Bildes festzulegen, damit es Platz einnehmen kann, bevor es geladen wird, um Verschiebungen im Inhaltslayout zu verringern.
- Hinweise für responsive Bilder mit [`sizes`](#sizes) und [`srcset`](#srcset) (siehe auch das {{htmlelement("picture")}}-Element und unser [Leitfaden für Responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images)).

## Unterstützte Bildformate

Der HTML-Standard legt nicht fest, welche Bildformate unterstützt werden sollen, daher können {{Glossary("user_agent", "User Agents")}} unterschiedliche Formate unterstützen.

> [!NOTE]
> Der [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types) bietet umfassende Informationen über Bildformate und deren Unterstützung in Webbrowsern. Dieser Abschnitt ist nur eine Zusammenfassung!

Die Bilddateiformate, die am häufigsten im Web verwendet werden, sind:

- [APNG (Animated Portable Network Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#apng_animated_portable_network_graphics) — Gute Wahl für verlustfreie Animationssequenzen (GIF ist weniger performant)
- [AVIF (AV1 Image File Format)](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) — Gute Wahl für Bilder und animierte Bilder aufgrund hoher Leistung.
- [GIF (Graphics Interchange Format)](/de/docs/Web/Media/Guides/Formats/Image_types#gif_graphics_interchange_format) — Gute Wahl für _einfache_ Bilder und Animationen.
- [JPEG (Joint Photographic Expert Group image)](/de/docs/Web/Media/Guides/Formats/Image_types#jpeg_joint_photographic_experts_group_image) — Gute Wahl für verlustbehaftete Komprimierung von Standbildern (derzeit am beliebtesten).
- [PNG (Portable Network Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#png_portable_network_graphics) — Gute Wahl für verlustfreie Komprimierung von Standbildern (etwas bessere Qualität als JPEG).
- [SVG (Scalable Vector Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#svg_scalable_vector_graphics) — Vektorbildformat. Verwenden Sie es für Bilder, die in verschiedenen Größen genau dargestellt werden müssen.
- [WebP (Web Picture format)](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) — Hervorragende Wahl für Bilder und animierte Bilder

Formate wie [WebP](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) und [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) werden empfohlen, da sie sowohl für Stand- als auch animierte Bilder viel leistungsfähiger sind als PNG, JPEG, GIF.

SVG bleibt das empfohlene Format für Bilder, die in verschiedenen Größen exakt dargestellt werden müssen.

## Fehler beim Laden von Bildern

Wenn beim Laden oder Rendern eines Bildes ein Fehler auftritt und ein `onerror`-Ereignishandler für das [`error`](/de/docs/Web/API/HTMLElement/error_event)-Ereignis festgelegt wurde, wird dieser Ereignishandler aufgerufen. Dies kann in verschiedenen Situationen passieren, einschließlich:

- Die `src`- oder `srcset`-Attribute sind leer (`""`) oder `null`.
- Die `src`- {{Glossary("URL", "URL")}} ist dieselbe wie die URL der Seite, die der Benutzer gerade aufruft.
- Das Bild ist in irgendeiner Weise beschädigt, die das Laden verhindert.
- Die Metadaten des Bildes sind so beschädigt, dass es unmöglich ist, seine Abmessungen abzurufen, und keine Abmessungen im `<img>`-Element-Attribut angegeben wurden.
- Das Bild ist in einem Format, das vom {{Glossary("user_agent", "User Agent")}} nicht unterstützt wird.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- [`alt`](/de/docs/Web/API/HTMLImageElement/alt#usage_notes)
  - : Definiert einen Text, der das Bild auf der Seite ersetzen kann.

    > [!NOTE]
    > Browser zeigen nicht immer Bilder an. Es gibt eine Reihe von Situationen, in denen ein Browser möglicherweise keine Bilder anzeigt, wie z.B.:
    >
    > - Nicht-visuelle Browser (wie die von Menschen mit Sehbehinderung verwendet werden)
    > - Der Benutzer entscheidet sich, keine Bilder anzuzeigen (um Bandbreite zu sparen, aus Datenschutzgründen)
    > - Das Bild ist ungültig oder ein [nicht unterstützter Typ](#unterstützte_bildformate)
    >
    > In diesen Fällen kann der Browser das Bild durch den Text im `alt`-Attribut des Elements ersetzen. Aus diesen und anderen Gründen geben Sie einen nützlichen Wert für `alt` wann immer möglich an.

    Das Festlegen dieses Attributs auf einen leeren String (`alt=""`) zeigt an, dass dieses Bild kein wesentlicher Teil des Inhalts ist (es ist eine Dekoration oder ein Tracking-Pixel) und dass nicht-visuelle Browser es vom {{Glossary("Engine/Rendering", "Rendern")}} auslassen können. Visuelle Browser werden das defekte Bildsymbol auch ausblenden, wenn das `alt`-Attribut leer ist und das Bild nicht angezeigt werden konnte.

    Dieses Attribut wird auch verwendet, wenn das Bild in Text kopiert oder ein verlinktes Bild in einem Lesezeichen gespeichert wird.

- `attributionsrc` {{experimental_inline}}
  - : Gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header zusammen mit der Bildanforderung sendet.

    Auf der Serverseite wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Headers in der Antwort auszulösen, um eine bildbasierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#html-based_event_sources) oder einen [Attributionstrigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#html-based_attribution_triggers) zu registrieren. Welcher Antwortheader zurückgesendet werden soll, hängt vom Wert des `Attribution-Reporting-Eligible`-Headers ab, der die Registrierung ausgelöst hat.

    Das entsprechende Ereignis der Quelle oder des Triggers wird ausgelöst, sobald der Browser die Antwort mit der Bilddatei erhält.

    > [!NOTIZ]
    > Weitere Informationen finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

    Es gibt zwei Versionen dieses Attributs, die Sie festlegen können:
    - Boolescher Wert, das heißt, nur der Name `attributionsrc`. Dies gibt an, dass Sie möchten, dass der {{httpheader("Attribution-Reporting-Eligible")}}-Header an denselben Server gesendet wird, auf den das `src`-Attribut verweist. Dies ist in Ordnung, wenn Sie die Attributionsquelle oder die Triggerregistrierung auf demselben Server handhaben. Bei der Registrierung eines Attributionstriggers ist diese Eigenschaft optional und ein boolescher Wert wird verwendet, wenn sie weggelassen wird.
    - Wert, der eine oder mehrere URLs enthält, zum Beispiel:

    ```html
    <img
      src="image-file.png"
      alt="My image file description"
      attributionsrc="https://a.example/register-source
                         https://b.example/register-source" />
    ```

    Dies ist nützlich in Fällen, in denen die angeforderte Ressource nicht auf einem von Ihnen kontrollierten Server liegt oder Sie die Registrierung der Attributionsquelle nur auf einem anderen Server verwalten möchten. In diesem Fall können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcenanforderung erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header an die in `attributionSrc` angegebene(n) URL(s) zusätzlich zum Ressourcenursprung gesendet. Diese URLs können dann mit einem {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header antworten, um die Registrierung abzuschließen.

    > [!NOTIZ]
    > Die Angabe mehrerer URLs bedeutet, dass mehrere Attributionsquellen an derselben Funktion registriert werden können. Beispielsweise könnten Sie verschiedene Kampagnen haben, deren Erfolg Sie messen möchten, was das Generieren verschiedener Berichte zu unterschiedlichen Daten involviert.

- [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)
  - : Gibt an, ob das Abrufen des Bildes mit einer {{Glossary("CORS", "CORS")}}-Anforderung erfolgen muss. Bilddaten aus einem [CORS-fähigen Bild](/de/docs/Web/HTML/How_to/CORS_enabled_image), das von einer CORS-Anforderung zurückgegeben wird, können im {{HTMLElement("canvas")}}-Element wiederverwendet werden, ohne als "[verfälscht](/de/docs/Web/HTML/How_to/CORS_enabled_image#security_and_tainted_canvases)" markiert zu sein.

    Wenn das `crossorigin`-Attribut _nicht_ angegeben ist, wird eine Nicht-CORS-Anforderung gesendet (ohne den {{httpheader("Origin")}}-Anforderungsheader), und der Browser markiert das Bild als verfälscht und beschränkt den Zugriff auf seine Bilddaten, wodurch seine Nutzung in {{HTMLElement("canvas")}}-Elementen verhindert wird.

    Wenn das `crossorigin`-Attribut _angegeben_ ist, wird eine CORS-Anforderung gesendet (mit dem {{httpheader("Origin")}}-Anforderungsheader); Wenn der Server jedoch nicht in die Bereitstellung von Cross-Origin-Zugriff auf die Bilddaten durch die Ursprungsseite einwilligt (indem er keinen {{httpheader("Access-Control-Allow-Origin")}}-Antwortheader sendet oder die Ursprungsseite nicht in einen {{httpheader("Access-Control-Allow-Origin")}}-Antwortheader aufnimmt, den er sendet), blockiert der Browser das Laden des Bildes und protokolliert einen CORS-Fehler in der Devtools-Konsole.

    Erlaubte Werte:
    - `anonymous`
      - : Eine CORS-Anforderung wird ohne Anmeldeinformationen gesendet (also ohne {{Glossary("cookie", "Cookies")}}, [X.509-Zertifikate](https://datatracker.ietf.org/doc/html/rfc5280) oder {{httpheader("Authorization")}}-Anforderungsheader).
    - `use-credentials`
      - : Die CORS-Anforderung wird mit vorhandenen Anmeldeinformationen gesendet (also Cookies, X.509-Zertifikate und den `Authorization`-Anforderungsheader). Wenn der Server nicht in die Freigabe von Anmeldeinformationen mit der Ursprungsseite einwilligt (durch das Senden des `Access-Control-Allow-Credentials: true`-Antwortheaders), markiert der Browser das Bild als verfälscht und beschränkt den Zugriff auf seine Bilddaten.

    Wenn das Attribut einen ungültigen Wert hat, behandeln Browser es so, als ob der Wert `anonymous` verwendet wurde. Siehe [CORS-Einstellungen Attribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin) für zusätzliche Informationen.

- `decoding`
  - : Dieses Attribut gibt einen Hinweis an den Browser, ob er die Bilddecodierung zusammen mit dem Rendern des anderen DOM-Inhalts in einem einzigen Darstellungsschritt durchführen soll, der "korrekter" aussieht (`sync`), oder den anderen DOM-Inhalt zuerst darstellen und dann das Bild decodieren und später präsentieren soll (`async`). In der Praxis bedeutet `async`, dass das nächste Paint nicht darauf wartet, dass das Bild decodiert wird.

    Es ist oft schwierig, einen merkbaren Effekt bei der Verwendung von `decoding` auf statischen `<img>`-Elementen zu erfassen. Sie werden wahrscheinlich zunächst als leere Bilder gerendert, während die Bilddateien abgerufen werden (entweder aus dem Netzwerk oder aus dem Cache) und dann unabhängig gehandhabt, sodass das "Synchronisieren" von Inhaltsupdates weniger offensichtlich ist. Das Blockieren des Renderings während der Decodierung kann zwar oft sehr kurz sein, _kann_ jedoch gemessen werden — selbst wenn es mit dem menschlichen Auge schwer zu beobachten ist. Siehe [Was macht das Bilddecodierungsattribut tatsächlich?](https://www.tunetheweb.com/blog/what-does-the-image-decoding-attribute-actually-do/) für eine detailliertere Analyse (tunetheweb.com, 2023).

    Unterschiedliche `decoding`-Typen zu verwenden, kann zu spürbareren Unterschieden führen, wenn `<img>`-Elemente dynamisch über JavaScript in das DOM eingefügt werden — siehe [`HTMLImageElement.decoding`](/de/docs/Web/API/HTMLImageElement/decoding) für weitere Details.

    Erlaubte Werte:
    - `sync`
      - : Decodiere das Bild synchron zusammen mit dem Rendern des anderen DOM-Inhalts und präsentiere alles zusammen.
    - `async`
      - : Decodiere das Bild asynchron, nach dem Rendern und der Präsentation des anderen DOM-Inhalts.
    - `auto`
      - : Keine Präferenz für den Decodierungsmodus; der Browser entscheidet, was am besten für den Benutzer ist. Dies ist der Standardwert.

- [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming)
  - : Markiert das Bild zur Beobachtung durch die [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)-API. Der angegebene Wert wird zu einem Bezeichner für das beobachtete Bildelement. Siehe auch die Seite zum [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming)-Attribut.

- `fetchpriority`
  - : Gibt einen Hinweis auf die relative Priorität an, die beim Abrufen des Bildes verwendet werden soll.
    Erlaubte Werte:
    - `high`
      - : Lade das Bild mit hoher Priorität im Vergleich zu anderen Bildern.
    - `low`
      - : Lade das Bild mit niedriger Priorität im Vergleich zu anderen Bildern.
    - `auto`
      - : Keine Präferenz für die Abrufpriorität festlegen.
        Dies ist der Standardwert.
        Er wird verwendet, wenn kein Wert oder ein ungültiger Wert festgelegt ist.

    Weitere Informationen finden Sie unter [`HTMLImageElement.fetchPriority`](/de/docs/Web/API/HTMLImageElement/fetchPriority).

- `height`
  - : Die intrinsische Höhe des Bildes in Pixeln. Muss eine ganze Zahl ohne Einheit sein.

    > [!NOTE]
    > Das Einbinden von `height` und [`width`](#width) ermöglicht es dem Browser, das {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Bildes zu berechnen, bevor es geladen wird. Dieses Seitenverhältnis wird verwendet, um den Platz zu reservieren, der benötigt wird, um das Bild anzuzeigen. Dies reduziert oder verhindert sogar eine Layoutverschiebung, wenn das Bild heruntergeladen und auf dem Bildschirm angezeigt wird. Das Reduzieren von Layoutverschiebungen ist ein wesentlicher Bestandteil einer guten Benutzererfahrung und Webleistung.

- `ismap`
  - : Dieses boolesche Attribut gibt an, dass das Bild Teil einer [serverseitigen Karte](https://en.wikipedia.org/wiki/Image_map#Server-side) ist. Wenn dies der Fall ist, werden die Koordinaten, an denen der Benutzer auf das Bild geklickt hat, an den Server gesendet.

    > [!NOTE]
    > Dieses Attribut ist nur erlaubt, wenn das `<img>`-Element ein Nachfahre eines {{htmlelement("a")}}-Elements mit einem gültigen [`href`](/de/docs/Web/HTML/Reference/Elements/a#href)-Attribut ist. Dies gibt Benutzern ohne Zeigergeräte ein alternatives Ziel.

- `loading`
  - : Gibt an, wie der Browser das Bild laden soll:
    - `eager`
      - : Lädt das Bild sofort, unabhängig davon, ob sich das Bild derzeit im sichtbaren Viewport befindet oder nicht (dies ist der Standardwert).
    - `lazy`
      - : Verzögert das Laden des Bildes, bis es eine berechnete Distanz vom Viewport erreicht, wie vom Browser definiert. Das Ziel ist es, die Netzwerk- und Speicherbandbreite zu vermeiden, die benötigt wird, um das Bild zu verarbeiten, bis es wahrscheinlich benötigt wird. Dies verbessert im Allgemeinen die Leistung des Inhalts in den meisten typischen Anwendungsfällen.

    > [!NOTE]
    > Das Laden wird nur verzögert, wenn JavaScript aktiviert ist. Dies ist eine Maßnahme gegen Tracking, denn wenn ein Benutzer-Agent das verzögerte Laden auch bei deaktiviertem Skripting unterstützen würde, wäre es dennoch möglich, die ungefähre Scrollposition eines Benutzers während einer Sitzung zu verfolgen, indem strategisch Bilder in einem Seiten-Markup platziert werden, sodass ein Server verfolgen kann, wie viele Bilder angefordert werden und wann.

    > [!NOTE]
    > Bilder mit `loading` auf `lazy` gesetzt, werden nie geladen, wenn sie keinen sichtbaren Teil eines Elements schneiden, selbst wenn das Laden sie ändern würde, da nicht geladene Bilder eine `width` und `height` von `0` haben. Durch das Setzen von `width` und `height` auf Bildern mit verzögertem Laden wird dieses Problem behoben und es ist eine bewährte Praxis, [die von der Spezifikation empfohlen wird](https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element:attr-dim-width). Dies hilft auch, Layoutverschiebungen zu verhindern.

- `referrerpolicy`
  - : Ein String, der angibt, welchen Referrer beim Abrufen der Ressource verwendet werden soll:
    - `no-referrer`: Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}}-Header wird nicht an {{Glossary("origin", "Ursprünge")}} ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`: Der gesendete Referrer ist auf den Ursprung der verweisenden Seite beschränkt: dessen [Schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`: Der Referrer, der an andere Ursprünge gesendet wird, ist auf das Schema, den Host und den Port beschränkt. Bei Navigationen im selben Ursprung wird der Pfad weiterhin eingeschlossen.
    - `same-origin`: Ein Referrer wird für {{Glossary("Same-origin_policy", "den selben Ursprung")}} gesendet, aber Anfragen über verschiedene Ursprünge enthalten keine Referrer-Informationen.
    - `strict-origin`: Nur den Ursprung des Dokuments als Referrer senden, wenn die Sicherheitsebene des Protokolls gleich bleibt (HTTPS→HTTPS), aber es nicht an ein weniger sicheres Ziel senden (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard): Eine vollständige URL senden, wenn eine Anfrage im selben Ursprung erfolgt, nur den Ursprung senden, wenn die Sicherheitsebene des Protokolls gleich bleibt (HTTPS→HTTPS), und keinen Header an ein weniger sicheres Ziel senden (HTTPS→HTTP).
    - `unsafe-url`: Der Referrer enthält den Ursprung _und_ den Pfad (aber nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), das [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder den [Benutzernamen](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge preisgibt.

- `sizes`
  - : Ein oder mehrere durch Kommas getrennte Strings, die eine Reihe von Quelldetails angeben. Jede Quellgröße besteht aus:
    1. Einer [Medienbedingung](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#syntax). Diese muss für das letzte Element in der Liste weggelassen werden.
    2. Einem Quellgrößenwert.

    Medienbedingungen beschreiben Eigenschaften des _Viewports_, nicht des _Bildes_. Zum Beispiel schlägt `(höhe <= 500px) 1000px` vor, eine Quelle von 1000px Breite zu verwenden, wenn der _Viewport_ nicht höher als 500px ist. Da ein Quellgrößenbeschreiber verwendet wird, um die Breite zu spezifizieren, die für das Bild während des Layouts der Seite verwendet werden soll, basiert die Medienbedingung typischerweise auf der [Breiten-](/de/docs/Web/CSS/@media/width)Information.

    Quellgrößenwerte spezifizieren die beabsichtigte Anzeigengröße des Bildes. {{Glossary("User_agent", "User Agents")}} verwenden die aktuelle Quellgröße, um eine der Quellen auszuwählen, die vom `srcset`-Attribut angegeben sind, wenn diese Quellen mit Breitenbeschreibungen (`w`) beschrieben werden. Die ausgewählte Quellgröße beeinflusst die {{Glossary("intrinsic_size", "intrinsische Größe")}} des Bildes (die Anzeigengröße des Bildes, wenn kein {{Glossary("CSS", "CSS")}}-Styling angewendet wird). Wenn das `srcset`-Attribut fehlt oder keine Werte mit einer Breitenbeschreibung enthält, hat das `sizes`-Attribut keine Wirkung.

    Ein Quellgrößenwert kann eine beliebige nicht-negative [Länge](/de/docs/Web/CSS/length) sein. Er darf keine CSS-Funktionen außer den [Mathematischen Funktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#math_functions) verwenden. Einheiten werden auf dieselbe Weise wie in [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries) interpretiert, was bedeutet, dass alle relativen Längeneinheiten relativ zur Dokumentwurzel und nicht zum `<img>`-Element sind, so dass ein `em`-Wert relativ zur Schriftgröße der Wurzel und nicht zur Schriftgröße des Bildes ist. [Prozentwerte](/de/docs/Web/CSS/percentage) sind nicht erlaubt.

    Das `sizes`-Attribut akzeptiert auch die folgenden Schlüsselwortwerte:
    - `auto`
      - : `auto` kann die gesamte Liste der Größen oder den ersten Eintrag in der Liste ersetzen. Es ist nur gültig in Kombination mit `loading="lazy"` und löst sich auf die [konkrete Größe](/de/docs/Web/CSS/image) des Bildes auf. Da die intrinsische Größe des Bildes noch nicht bekannt ist, sollten auch `width` und `height` Attribute (oder CSS-Äquivalente) angegeben werden, um [zu verhindern, dass der Browser eine Standardbreite von 300px annimmt](https://html.spec.whatwg.org/multipage/images.html#sizes-attributes:attr-dim-width).

- `src`
  - : Die Bild-{{Glossary("URL", "URL")}}. Erforderlich für das `<img>`-Element. In {{Glossary("Browser", "Browsern")}}, die `srcset` unterstützen, wird `src` wie ein Kandidatenbild mit einem Pixeldichtedeskriptor `1x` behandelt, es sei denn, ein Bild mit diesem Pixeldichtedeskriptor ist bereits in `srcset` definiert oder `srcset` enthält `w`-Deskriptoren.
- `srcset`
  - : Ein oder mehrere durch Kommas getrennte Strings, die mögliche Bildquellen für den {{Glossary("user_agent", "User Agent")}} zur Verwendung angeben. Jeder String besteht aus:
    1. Einer {{Glossary("URL", "URL")}} zu einem Bild
    2. Optional, Leerzeichen gefolgt von einem der:
       - Einem Breitenbeschreiber (eine positive Ganzzahl direkt gefolgt von `w`). Der Breitenbeschreiber wird durch die im `sizes`-Attribut angegebene Quellgröße geteilt, um die effektive Pixeldichte zu berechnen.
       - Einem Pixeldichtedeskriptor (eine positive Gleitkommazahl direkt gefolgt von `x`).

    Wenn kein Deskriptor angegeben ist, wird der Quelle der Standarddeskriptor `1x` zugewiesen.

    Es ist falsch, Breitenbeschreiber und Pixeldichtedeskriptoren im selben `srcset`-Attribut zu mischen. Doppelte Deskriptoren (z. B. zwei Quellen im gleichen `srcset`, die beide mit `2x` beschrieben werden) sind ebenfalls ungültig.

    Wenn das `srcset`-Attribut Breitenbeschreiber verwendet, muss auch das `sizes`-Attribut vorhanden sein, sonst wird das `srcset` selbst ignoriert.

    Der User Agent wählt nach eigenem Ermessen eine der verfügbaren Quellen aus. Dies gibt ihnen erheblichen Spielraum, um ihre Auswahl auf Grundlage von Benutzerpräferenzen oder {{Glossary("bandwidth", "Bandbreiten")}}bedingungen anzupassen. Siehe unser [Leitfaden für Responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images) für ein Beispiel.

- `width`
  - : Die intrinsische Breite des Bildes in Pixeln. Muss eine ganze Zahl ohne Einheit sein.
- `usemap`
  - : Die partielle {{Glossary("URL", "URL")}} (beginnend mit `#`) einer [Bildkarte](/de/docs/Web/HTML/Reference/Elements/map), die mit dem Element verbunden ist.

    > [!NOTE]
    > Sie können dieses Attribut nicht verwenden, wenn das `<img>`-Element innerhalb eines {{htmlelement("a")}}- oder {{HTMLElement("button")}}-Elements ist.

### Veraltete Attribute

- `align` {{deprecated_inline}}
  - : Richtet das Bild mit seinem umgebenden Kontext aus. Verwenden Sie die {{cssxref('float')}}- und/oder {{cssxref('vertical-align')}}- {{Glossary("CSS", "CSS")}}-Eigenschaften anstelle dieses Attributs. Zulässige Werte:
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
  - : Die Breite eines Rahmens um das Bild. Verwenden Sie die {{cssxref('border')}}- {{Glossary("CSS", "CSS")}}-Eigenschaft stattdessen.
- `hspace` {{deprecated_inline}}
  - : Die Anzahl der Pixel Weißraum links und rechts vom Bild. Verwenden Sie die {{cssxref('margin')}}-CSS-Eigenschaft stattdessen.
- `longdesc` {{deprecated_inline}}
  - : Ein Link zu einer detaillierteren Beschreibung des Bildes. Mögliche Werte sind eine {{Glossary("URL", "URL")}} oder eine Element- [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id).

    > [!NOTE]
    > Dieses Attribut wird in der [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/obsolete.html#element-attrdef-img-longdesc) als veraltet betrachtet. Es hat eine ungewisse Zukunft; Autoren sollten eine {{Glossary("WAI", "WAI")}}-{{Glossary("ARIA", "ARIA")}}-Alternative wie [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) oder [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) verwenden.

- `name` {{deprecated_inline}}
  - : Ein Name für das Element. Verwenden Sie das [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut stattdessen.
- `vspace` {{deprecated_inline}}
  - : Die Anzahl der Pixel Weißraum über und unter dem Bild. Verwenden Sie die {{cssxref('margin')}}-CSS-Eigenschaft stattdessen.

## Styling mit CSS

`<img>` ist ein {{Glossary("replaced_elements", "ersetztes Element")}}; es hat standardmäßig einen {{cssxref("display")}}-Wert von `inline`, aber seine Standardabmessungen sind durch die eingebetteten intrinsischen Werte des Bildes definiert, als wäre es `inline-block`. Sie können Eigenschaften wie {{cssxref("border")}}/{{cssxref("border-radius")}}, {{cssxref("padding")}}/{{cssxref("margin")}}, {{cssxref("width")}}, {{cssxref("height")}}, etc. auf einem Bild festlegen.

`<img>` hat keine Basislinie, sodass Bilder in einem inline-Formatierungskontext mit {{cssxref("vertical-align", "vertical-align: baseline")}} am unteren Ende des Bildes auf der Textbasislinie platziert werden.

Sie können die {{cssxref("object-position")}}-Eigenschaft verwenden, um das Bild innerhalb des Elementrahmens zu positionieren, und die {{cssxref("object-fit")}}-Eigenschaft, um die Größe des Bildes innerhalb des Rahmens anzupassen (zum Beispiel, ob das Bild in den Rahmen passen oder ihn ausfüllen sollte, auch wenn eine Kürzung erforderlich ist).

Je nach Typ kann ein Bild eine intrinsische Breite und Höhe haben. Für einige Bildtypen sind jedoch intrinsische Dimensionen unnötig. {{Glossary("SVG", "SVG")}}-Bilder haben zum Beispiel keine intrinsischen Dimensionen, wenn ihr Wurzel-{{SVGElement("svg")}}-Element keine `width`- oder `height`-Eigenschaft darauf hat.

## Zugänglichkeit

### Bedeutungsvolle alternative Beschreibungen erstellen

Der Wert des `alt`-Attributs sollte einen klaren und prägnanten Textersatz für den Bildinhalt bereitstellen. Es sollte nicht das Vorhandensein des Bildes selbst oder den Dateinamen des Bildes beschreiben. Wenn das `alt`-Attribut absichtlich weggelassen wurde, weil das Bild kein textliches Äquivalent hat, ziehen Sie alternative Methoden in Betracht, um zu zeigen, was das Bild zu kommunizieren versucht.

#### Nicht tun

```html example-bad
<img alt="image" src="penguin.jpg" />
```

#### Tun Sie es

```html example-good
<img alt="A Penguin on a beach." src="penguin.jpg" />
```

Ein wichtiger Barrierefreiheitstest besteht darin, den Inhalt des `alt`-Attributs zusammen mit dem vorhergehenden Textinhalt zu lesen, um festzustellen, ob er dieselbe Bedeutung wie das Bild vermittelt. Wenn das Bild zum Beispiel dem Satz "Auf meinen Reisen sah ich ein süßes kleines Tier:" vorausging, könnte das _Nicht tun_-Beispiel von einem Screenreader als "Auf meinen Reisen sah ich ein süßes kleines Tier: Bild" gelesen werden, was keinen Sinn ergibt. Das _Tun Sie es_-Beispiel könnte von einem Screenreader als "Auf meinen Reisen sah ich ein süßes kleines Tier: Ein Pinguin am Strand." gelesen werden, was Sinn ergibt.

Für Bilder, die eine Aktion auslösen sollen, zum Beispiel Bilder, die innerhalb eines {{htmlelement("a")}}- oder {{htmlelement("button")}}-Elements verschachtelt sind, ziehen Sie es in Erwägung, die ausgelöste Aktion innerhalb des `alt`-Attributwerts zu beschreiben. Beispielsweise könnten Sie `alt="nächste Seite"` anstelle von `alt="Pfeil rechts"` schreiben. Sie könnten auch in Erwägung ziehen, eine optionale weitere Beschreibung in einem `title`-Attribut hinzuzufügen; diese kann von Screenreadern angesagt werden, wenn vom Benutzer angefordert.

Wenn ein `alt`-Attribut auf einem Bild nicht vorhanden ist, können einige Screenreader den Dateinamen des Bildes stattdessen ankündigen. Dies kann eine verwirrende Erfahrung sein, wenn der Dateiname nicht repräsentativ für den Bildinhalt ist.

- [Ein alternativer Entscheidungstext • Bilder • WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/images/decision-tree/)
- [Alt-Texte: Der ultimative Leitfaden — Axess Lab](https://axesslab.com/alt-texts/)
- [How to Design Great Alt Text: An Introduction | Deque](https://www.deque.com/blog/great-alt-text-introduction/)
- [MDN Understanding WCAG, Leitlinie 1.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Understanding Success Criterion 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

### SVG als Bild identifizieren

Aufgrund eines [VoiceOver-Bugs](https://webkit.org/b/216364) kündigt VoiceOver SVG-Bilder nicht korrekt als Bilder an. Fügen Sie [`role="img"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/img_role) zu allen `<img>`-Elementen hinzu, die SVG-Quelldateien haben, um sicherzustellen, dass unterstützende Technologien das SVG als Bildinhalt korrekt ankündigen.

```html
<img src="mdn.svg" alt="MDN" role="img" />
```

### Das title-Attribut

Das [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)-Attribut ist kein akzeptabler Ersatz für das `alt`-Attribut. Vermeiden Sie es außerdem, den Wert des `alt`-Attributs in einem sich auf dasselbe Bild beziehenden `title`-Attribut zu duplizieren. Andernfalls können einige Screenreader denselben Text zweimal ankündigen, was eine verwirrende Erfahrung schafft.

Das `title`-Attribut sollte auch nicht als ergänzende Beschriftungsinformation verwendet werden, um die `alt`-Beschreibung eines Bildes zu begleiten. Wenn ein Bild eine Beschriftung benötigt, verwenden Sie die [`figure`](/de/docs/Web/HTML/Reference/Elements/figure)- und [`figcaption`](/de/docs/Web/HTML/Reference/Elements/figcaption)-Elemente.

Der Wert des `title`-Attributs wird dem Benutzer üblicherweise als Tooltip präsentiert, der kurz nach dem Stoppen des Cursors über dem Bild erscheint. Während dies dem Benutzer zusätzliche Informationen bieten _kann_, sollten Sie nicht davon ausgehen, dass der Benutzer sie überhaupt sieht: Der Benutzer könnte nur eine Tastatur oder einen Touchscreen haben. Wenn Sie Informationen haben, die für den Benutzer besonders wichtig oder wertvoll sind, sollten Sie sie inline mit einer der oben genannten Methoden präsentieren, anstatt `title` zu verwenden.

- [Die Verwendung des HTML-Title-Attributs – aktualisiert | Die Paciello-Gruppe](https://www.tpgi.com/using-the-html-title-attribute-updated/)

## Beispiele

### Alternativer Text

Das folgende Beispiel bettet ein Bild in die Seite ein und enthält alternativen Text für die Barrierefreiheit.

```html
<img src="/shared-assets/images/examples/favicon144.png" alt="MDN" />
```

{{ EmbedLiveSample('Alternative_text', '100%', '160') }}

### Bildlink

Dieses Beispiel baut auf dem vorherigen auf und zeigt, wie das Bild in einen Link umgewandelt werden kann. Dazu wird das `<img>`-Tag innerhalb des {{HTMLElement("a")}}-Elements verschachtelt. Sie sollten den alternativen Text so formulieren, dass er die Ressource beschreibt, auf die der Link zeigt, als würden Sie einen Text-Link verwenden.

```html
<a href="https://developer.mozilla.org">
  <img
    src="/shared-assets/images/examples/favicon144.png"
    alt="Visit the MDN site" />
</a>
```

{{ EmbedLiveSample('Image_link', '100%', '160') }}

### Verwendung des srcset-Attributs

In diesem Beispiel fügen wir ein `srcset`-Attribut mit einem Verweis auf eine hochauflösende Version des Logos ein; dieses wird anstelle des `src`-Bildes auf hochauflösenden Geräten geladen. Das im `src`-Attribut referenzierte Bild wird als `1x`-Kandidat in {{Glossary("User_agent", "User Agents")}}, die `srcset` unterstützen, gezählt.

```html
<img
  src="/shared-assets/images/examples/favicon72.png"
  alt="MDN"
  srcset="/shared-assets/images/examples/favicon144.png 2x" />
```

{{EmbedLiveSample("Using_the_srcset_attribute", "100%", "160")}}

### Verwendung der srcset- und sizes-Attribute

Das `src`-Attribut wird in {{Glossary("User_agent", "User Agents")}}, die `srcset` unterstützen, ignoriert, wenn `w`-Deskriptoren enthalten sind. Wenn die `(Breite <= 600px)`-Medienbedingung zutrifft, wird das 200 Pixel breite Bild geladen (dasjenige, das `200px` am nächsten kommt), andernfalls wird das andere Bild geladen.

```html
<img
  src="clock-demo-200px.png"
  alt="The time is 12:45."
  srcset="clock-demo-200px.png 200w, clock-demo-400px.png 400w"
  sizes="(width <= 600px) 200px, 50vw" />
```

{{EmbedLiveSample("Using_the_srcset_and_sizes_attributes", "100%", 350)}}

> [!NOTE]
> Um die Größenänderung in Aktion zu sehen, {{LiveSampleLink('Using_the_srcset_and_sizes_attributes', 'anzeigen Sie das Beispiel auf einer separaten Seite')}}, um den Inhaltsbereich tatsächlich zu vergrößern zu können.

## Sicherheits- und Datenschutzbedenken

Auch wenn `<img>`-Elemente unschuldige Anwendungen haben, können sie unerwünschte Folgen für die Benutzer-Sicherheit und den Datenschutz haben. Weitere Informationen und Abhilfen finden Sie unter [Referer-Header: Datenschutz- und Sicherheitsbedenken](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns).

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
          >Phrasierung Inhalten</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#embedded_content"
          >eingebetteter Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#palpable_content"
          >Sichtbarer Inhalt</a
        >. Wenn das Element ein <code>usemap</code>-Attribut hat, ist es auch Teil der interaktiven Inhaltskategorie.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Inhalte</th>
      <td>Keine; es ist ein {{Glossary("void_element", "leeres Element")}}.</td>
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
- {{cssxref("object-fit")}}, {{cssxref("object-position")}}, {{cssxref("image-orientation")}}, {{cssxref("image-rendering")}}, und {{cssxref("image-resolution")}}: Bildbezogene CSS-Eigenschaften.
- [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Schnittstelle für dieses Element
- [HTML-Bilder](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images)
- [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types)
- [Responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images)
