---
title: "<img>: Das Bildelement zum Einbetten"
slug: Web/HTML/Reference/Elements/img
l10n:
  sourceCommit: cac79d099b0a4e48456cb53eb2435f6acf03e188
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

- Das `src`-Attribut enthält den Pfad zum Bild, das Sie einbetten möchten. Es ist nicht zwingend erforderlich, wenn das [srcset](/de/docs/Web/API/HTMLImageElement/srcset)-Attribut verfügbar ist. Allerdings muss mindestens eines der Attribute `src` oder `srcset` angegeben werden.
- Das `alt`-Attribut enthält einen textuellen Ersatz für das Bild, der zwingend erforderlich und **unglaublich nützlich** für die Barrierefreiheit ist – Screenreader lesen den Attributwert ihren Benutzern vor, damit sie wissen, was das Bild bedeutet. Alternativtext wird auch auf der Seite angezeigt, wenn das Bild aus irgendeinem Grund nicht geladen werden kann: zum Beispiel bei Netzwerkfehlern, Inhaltsblockierungen oder abgelaufenen Links.

Es gibt viele andere Attribute, um verschiedene Zwecke zu erreichen:

- [Referrer](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy)/{{Glossary("CORS", "CORS")}}-Steuerung für Sicherheit und Datenschutz: siehe [`crossorigin`](#crossorigin) und [`referrerpolicy`](#referrerpolicy).
- Verwenden Sie sowohl [`width`](#width) als auch [`height`](#height) um die intrinsische Größe des Bildes festzulegen, damit es Platz einnimmt, bevor es geladen wird, um Layoutverschiebungen zu mindern.
- Responsive Bildhinweise mit [`sizes`](#sizes) und [`srcset`](#srcset) (siehe auch das {{htmlelement("picture")}}-Element und unseren [Responsive Images](/de/docs/Web/HTML/Guides/Responsive_images) Leitfaden).

## Unterstützte Bildformate

Der HTML-Standard spezifiziert nicht, welche Bildformate unterstützt werden sollen, sodass {{Glossary("user_agent", "User Agents")}} unterschiedliche Formate unterstützen können.

> [!NOTE]
> Der [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types) bietet umfassende Informationen über Bildformate und deren Unterstützung durch Webbrowser.
> Dieser Abschnitt ist nur eine Zusammenfassung!

Die Bilddateiformate, die am häufigsten im Web verwendet werden, sind:

- [APNG (Animated Portable Network Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#apng_animated_portable_network_graphics) — Gute Wahl für verlustfreie Animationssequenzen (GIF ist weniger performant)
- [AVIF (AV1 Image File Format)](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) — Gute Wahl für sowohl Bilder als auch animierte Bilder aufgrund der hohen Leistung.
- [GIF (Graphics Interchange Format)](/de/docs/Web/Media/Guides/Formats/Image_types#gif_graphics_interchange_format) — Gute Wahl für _einfache_ Bilder und Animationen.
- [JPEG (Joint Photographic Expert Group image)](/de/docs/Web/Media/Guides/Formats/Image_types#jpeg_joint_photographic_experts_group_image) — Gute Wahl für verlustbehaftete Kompression von Standbildern (derzeit das beliebteste).
- [PNG (Portable Network Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#png_portable_network_graphics) — Gute Wahl für verlustfreie Kompression von Standbildern (leicht bessere Qualität als JPEG).
- [SVG (Scalable Vector Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#svg_scalable_vector_graphics) — Vektorbildformat. Verwenden Sie es für Bilder, die in verschiedenen Größen genau gezeichnet werden müssen.
- [WebP (Web Picture format)](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) — Hervorragende Wahl für sowohl Bilder als auch animierte Bilder.

Formate wie [WebP](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) und [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) werden empfohlen, da sie sowohl für Standbilder als auch für animierte Bilder viel besser abschneiden als PNG, JPEG, GIF.

SVG bleibt das empfohlene Format für Bilder, die in verschiedenen Größen genau gezeichnet werden müssen.

## Bildladefehler

Wenn beim Laden oder Rendern eines Bildes ein Fehler auftritt und ein `onerror`-Event-Handler für das [`error`](/de/docs/Web/API/HTMLElement/error_event)-Event gesetzt wurde, wird dieser Event-Handler aufgerufen. Dies kann in verschiedenen Situationen passieren, einschließlich:

- Die `src` oder `srcset`-Attribute sind leer (`""`) oder `null`.
- Die `src`-URL](/de/docs/Glossary/URL) ist dieselbe wie die URL der Seite, auf der sich der Benutzer aktuell befindet.
- Das Bild ist in irgendeiner Weise beschädigt, was verhindert, dass es geladen wird.
- Die Metadaten des Bildes sind so beschädigt, dass es unmöglich ist, seine Abmessungen abzurufen, und es wurden keine Abmessungen in den `<img>`-Elementattributen angegeben.
- Das Bild ist in einem vom {{Glossary("user_agent", "User Agent")}} nicht unterstützten Format.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- [`alt`](/de/docs/Web/API/HTMLImageElement/alt#usage_notes)

  - : Definiert Text, der das Bild auf der Seite ersetzen kann.

    > [!NOTE]
    > Browser zeigen nicht immer Bilder an. Es gibt eine Reihe von Situationen, in denen ein Browser Bilder möglicherweise nicht anzeigt, wie etwa:
    >
    > - Nicht-visuelle Browser (zum Beispiel für Menschen mit Sehbehinderungen)
    > - Der Benutzer entscheidet sich dagegen, Bilder anzuzeigen (um Bandbreite zu sparen, aus Datenschutzgründen)
    > - Das Bild ist ungültig oder ein [nicht unterstützter Typ](#unterstützte_bildformate)
    >
    > In diesen Fällen kann der Browser das Bild durch den Text im `alt`-Attribut des Elements ersetzen. Aus diesen und anderen Gründen sollten Sie, wann immer möglich, einen nützlichen Wert für `alt` bereitstellen.

    Wenn Sie dieses Attribut auf einen leeren String (`alt=""`) setzen, zeigt dies an, dass dieses Bild _kein_ wichtiger Teil des Inhalts ist (es handelt sich um eine Dekoration oder ein Tracking-Pixel), und nicht-visuelle Browser es aus dem {{Glossary("Engine/Rendering", "Rendering")}} weglassen können. Visuelle Browser verbergen auch das gebrochene Bildsymbol, wenn das `alt`-Attribut leer ist und das Bild nicht angezeigt werden konnte.

    Dieses Attribut wird auch verwendet, wenn Sie das Bild kopieren und einfügen oder ein verknüpftes Bild in einem Lesezeichen speichern.

- `attributionsrc` {{experimental_inline}}

  - : Gibt an, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header zusammen mit der Bildanfrage senden soll.

    Auf der Serverseite wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}} oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Headers auszulösen, um eine bildbasierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#html-based_event_sources) oder einen [Attributionstrigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#html-based_attribution_triggers) zu registrieren. Welcher Antwortheader zurückgesendet werden soll, hängt vom Wert des `Attribution-Reporting-Eligible`-Headers ab, der die Registrierung ausgelöst hat.

    Das entsprechende Quellen- oder Triggerevent wird ausgelöst, sobald der Browser die Antwort mit der Bilddatei empfängt.

    > [!NOTE]
    > Siehe die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) für weitere Details.

    Es gibt zwei Versionen dieses Attributs, die Sie festlegen können:

    - Boolean, d.h. nur der `attributionsrc`-Name. Dies gibt an, dass Sie den {{httpheader("Attribution-Reporting-Eligible")}}-Header an denselben Server senden möchten, auf den auch das `src`-Attribut verweist. Dies ist in Ordnung, wenn Sie die Registrierung der Attributionsquelle oder des Triggers auf demselben Server handhaben. Bei der Registration eines Attributionstriggers ist diese Eigenschaft optional, und ein boolean-Wert wird verwendet, wenn sie weggelassen wird.
    - Wert, der eine oder mehrere URLs enthält, zum Beispiel:

    ```html
    <img
      src="image-file.png"
      alt="My image file description"
      attributionsrc="https://a.example/register-source
                         https://b.example/register-source" />
    ```

    Dies ist nützlich in Fällen, in denen die angeforderte Ressource nicht auf einem von Ihnen kontrollierten Server liegt oder Sie einfach die Registrierung der Attributionsquelle auf einem anderen Server handhaben möchten. In diesem Fall können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Beim Ressourcenanforderungsprozess wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header an die in `attributionSrc` angegebenen URLs zusätzlich zu der Ursprungs-URL gesendet. Diese URLs können dann mit einem entsprechenden {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header antworten, um die Registrierung abzuschließen.

    > [!NOTE]
    > Bei Angabe mehrerer URLs können mehrere Attributionsquellen für dieselbe Funktion registriert werden. Beispielweise könnten Sie verschiedene Kampagnen haben, deren Erfolg Sie messen möchten, die das Erstellen unterschiedlicher Berichte zu unterschiedlichen Daten erfordern.

- [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)

  - : Gibt an, ob das Bildanfordern mit einer {{Glossary("CORS", "CORS")}}-Anfrage erfolgen muss. Bilddaten von einem [CORS-fähigen Bild](/de/docs/Web/HTML/How_to/CORS_enabled_image), die von einer CORS-Anfrage zurückgegeben werden, können im {{HTMLElement("canvas")}}-Element verwendet werden, ohne als "[tainted](/de/docs/Web/HTML/How_to/CORS_enabled_image#security_and_tainted_canvases)" markiert zu werden.

    Wenn das `crossorigin`-Attribut _nicht_ angegeben ist, wird eine Nicht-CORS-Anfrage gesendet (ohne den {{httpheader("Origin")}}-Anforderungsheader), und der Browser markiert das Bild als tainted und beschränkt den Zugriff auf seine Bilddaten, was seine Verwendung in {{HTMLElement("canvas")}}-Elementen verhindert.

    Wenn das `crossorigin`-Attribut _angegeben_ ist, wird eine CORS-Anfrage gesendet (mit dem {{httpheader("Origin")}}-Anforderungsheader); aber wenn der Server nicht optiert, den plattformübergreifenden Zugriff auf die Bilddaten durch die Ursprungsseite zu erlauben (indem er keinen {{httpheader("Access-Control-Allow-Origin")}}-Antwortheader sendet oder die Ursprungsseite nicht in einen {{httpheader("Access-Control-Allow-Origin")}}-Antwortheader einbindet, den er sendet), blockiert der Browser das Bild vom Laden und protokolliert einen CORS-Fehler in der Entwicklerkonsole.

    Erlaubte Werte:

    - `anonymous`
      - : Eine CORS-Anfrage wird mit weggelassenen Anmeldeinformationen gesendet (d.h. ohne {{Glossary("cookie", "Cookies")}}, [X.509-Zertifikate](https://datatracker.ietf.org/doc/html/rfc5280) oder {{httpheader("Authorization")}}-Anforderungsheader).
    - `use-credentials`
      - : Die CORS-Anfrage wird mit allen beinhalteten Anmeldeinformationen gesendet (d.h. Cookies, X.509-Zertifikate und der `Authorization`-Anforderungsheader). Wenn der Server nicht optiert, Anmeldeinformationen mit der Ursprungsseite zu teilen (indem er den `Access-Control-Allow-Credentials: true`-Antwortheader zurücksendet), markiert der Browser das Bild als tainted und beschränkt den Zugriff auf seine Bilddaten.

    Wenn das Attribut einen ungültigen Wert hat, behandeln Browser es, als ob der Wert `anonymous` verwendet wurde. Weitere Informationen finden Sie unter [CORS-Einstellungsattribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin).

- `decoding`

  - : Dieses Attribut bietet einen Hinweis an den Browser, ob er die Bilddekodierung zusammen mit anderen DOM-Inhalten in einem einzigen Darstellungsschritt durchführen soll, der "korrekter" aussieht (`sync`), oder die anderen DOM-Inhalte zuerst rendern und präsentieren soll und anschließend das Bild dekodiert und präsentiert (`async`). In der Praxis bedeutet `async`, dass der nächste Malvorgang nicht darauf wartet, dass das Bild dekodiert wird.

    Es ist oft schwierig, irgendeine wahrnehmbare Wirkung beim Verwenden von `decoding` auf statischen `<img>`-Elementen zu erkennen. Sie werden wahrscheinlich anfänglich als leere Bilder gerendert, während die Bilddateien (entweder aus dem Netzwerk oder aus dem Cache) abgerufen und dann unabhängig behandelt werden. Daher ist die "Synchronisation" von Inhaltsaktualisierungen weniger offensichtlich. Das Blockieren des Renderings während der Dekodierung, auch wenn es oft recht klein ist, _kann_ jedoch gemessen werden - selbst wenn es schwierig ist, es mit dem menschlichen Auge zu beobachten. Siehe [Was bewirkt das Image Decoding Attribut tatsächlich?](https://www.tunetheweb.com/blog/what-does-the-image-decoding-attribute-actually-do/) für eine ausführlichere Analyse (tunetheweb.com, 2023).

    Die Verwendung verschiedener `decoding`-Typen kann zu merklicheren Unterschieden führen, wenn `<img>`-Elemente dynamisch über JavaScript in den DOM eingefügt werden - siehe [`HTMLImageElement.decoding`](/de/docs/Web/API/HTMLImageElement/decoding) für weitere Details.

    Erlaubte Werte:

    - `sync`
      - : Dekodieren Sie das Bild synchron zusammen mit dem Rendern der anderen DOM-Inhalte und präsentieren Sie alles zusammen.
    - `async`
      - : Dekodieren Sie das Bild asynchron, nach dem Rendern und Präsentieren der anderen DOM-Inhalte.
    - `auto`
      - : Keine Präferenz für den Dekodierungsmodus; der Browser entscheidet, was am besten für den Benutzer ist. Dies ist der Standardwert.

- [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming)

  - : Markiert das Bild zur Beobachtung durch die API [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming). Der angegebene Wert wird zu einem Bezeichner für das beobachtete Bildelement. Siehe auch die Seite zum [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming)-Attribut.

- `fetchpriority`

  - : Bietet einen Hinweis auf die relative Priorität, die beim Abrufen des Bildes verwendet werden soll.
    Erlaubte Werte:

    - `high`
      - : Abrufen des Bildes mit hoher Priorität im Verhältnis zu anderen Bildern.
    - `low`
      - : Abrufen des Bildes mit niedriger Priorität im Verhältnis zu anderen Bildern.
    - `auto`
      - : Keine Präferenz für die Abrufpriorität festlegen.
        Dies ist der Standardwert.
        Er wird verwendet, wenn kein Wert oder ein ungültiger Wert festgelegt ist.

    Siehe [`HTMLImageElement.fetchPriority`](/de/docs/Web/API/HTMLImageElement/fetchPriority) für weitere Informationen.

- `height`

  - : Die intrinsische Höhe des Bildes in Pixeln. Muss eine ganze Zahl ohne Einheit sein.

    > [!NOTE]
    > Die Angabe von `height` und [`width`](#width) ermöglicht es dem Browser, das {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Bildes zu berechnen, bevor das Bild geladen wird. Dieses Seitenverhältnis wird verwendet, um den erforderlichen Platz für die Anzeige des Bildes zu reservieren, wodurch eine Layoutverschiebung beim Herunterladen und Anzeigen des Bildes auf dem Bildschirm reduziert oder sogar verhindert wird. Die Reduzierung von Layoutverschiebungen ist ein wesentlicher Bestandteil einer guten Benutzererfahrung und Web-Performance.

- `ismap`

  - : Dieses Boolean-Attribut zeigt an, dass das Bild Teil einer [serverseitigen Karte](https://en.wikipedia.org/wiki/Image_map#Server-side) ist. In diesem Fall werden die Koordinaten, auf die der Benutzer auf das Bild geklickt hat, an den Server gesendet.

    > [!NOTE]
    > Dieses Attribut ist nur zulässig, wenn das `<img>`-Element ein Nachkomme eines {{htmlelement("a")}}-Elements mit einem gültigen [`href`](/de/docs/Web/HTML/Reference/Elements/a#href)-Attribut ist. Dies gibt Benutzern ohne Zeigegeräte ein alternatives Ziel.

- `loading`

  - : Gibt an, wie der Browser das Bild laden soll:

    - `eager`
      - : Lädt das Bild sofort, unabhängig davon, ob das Bild derzeit im sichtbaren Viewport ist (dies ist der Standardwert).
    - `lazy`
      - : Verzögert das Laden des Bildes, bis es eine berechnete Entfernung vom Viewport erreicht, wie vom Browser definiert. Die Absicht ist, die Netz- und Speicherbandbreite zu vermeiden, die benötigt wird, um das Bild zu verarbeiten, bis es vernünftigerweise sicher ist, dass es benötigt wird. Dies verbessert in den meisten typischen Anwendungsfällen die Leistung des Inhalts.

    > [!NOTE]
    > Das Laden wird nur verzögert, wenn JavaScript aktiviert ist. Dies ist eine Anti-Tracking-Maßnahme, da ein Benutzer-Agent Lazy Loading beim Deaktivieren des Skripts unterstützen würde, es wäre immer noch möglich, die ungefähre Scrollposition eines Benutzers während einer Sitzung zu verfolgen, indem strategisch Bilder in das Markup einer Seite platziert werden, sodass ein Server verfolgen kann, wie viele Bilder angefordert werden und wann.

    > [!NOTE]
    > Bilder mit `loading` auf `lazy` gesetzt werden niemals geladen, wenn sie keinen sichtbaren Teil eines Elements schneiden, selbst wenn das Laden sie ändern würde, da nicht geladene Bilder eine `width` und `height` von `0` haben. Setzen der `width` und `height` auf Lazy-Loaded-Bilder behebt dieses Problem und ist bewährte Praxis, [empfohlen von der Spezifikation](https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element). Dies trägt auch dazu bei, Layoutverschiebungen zu verhindern.

- `referrerpolicy`

  - : Eine Zeichenkette, die angibt, welcher Referrer beim Abrufen der Ressource verwendet werden soll:

    - `no-referrer`: Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}}-Header wird nicht an {{Glossary("origin", "Ursprung")}}e ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`: Der gesendete Referrer wird auf den Ursprung der verweisenden Seite beschränkt: seine [Schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`: Der an andere Ursprünge gesendete Referrer wird auf das Schema, den Host und den Port beschränkt. Navigationen am selben Ursprung enthalten weiterhin den Pfad.
    - `same-origin`: Ein Referrer wird für {{Glossary("Same-origin_policy", "gleichen Ursprung")}} gesendet, aber plattformübergreifende Anforderungen enthalten keine Referrer-Informationen.
    - `strict-origin`: Der Ursprung des Dokuments wird nur dann als Referrer gesendet, wenn das Protokollsicherheitsniveau gleich bleibt (HTTPS→HTTPS), aber nicht an einen weniger sicheren Zielort gesendet (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard): Senden einer vollständigen URL bei einer gleichnamigen Anfrage, nur den Ursprung bei gleichbleibendem Protokollsicherheitsniveau (HTTPS→HTTPS) senden, und keinen Header an einen weniger sicheren Zielort senden (HTTPS→HTTP).
    - `unsafe-url`: Der Referrer enthält den Ursprung _und_ den Pfad (aber nicht den [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder [Benutzername](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge weitergibt.

- `sizes`

  - : Eine oder mehrere durch Kommas getrennte Zeichenfolgen, die eine Reihe von Quellgrößen angeben. Jede Quellgröße besteht aus:

    1. Einer [Medienbedingung](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#syntax). Diese muss für das letzte Element in der Liste weggelassen werden.
    2. Einem Quellgrößenwert.

    Medienbedingungen beschreiben Eigenschaften des _Viewports_, nicht des _Bildes_. Zum Beispiel schlägt `(max-height: 500px) 1000px` vor, eine Quelle von 1000px Breite zu verwenden, wenn der _Viewport_ nicht höher als 500px ist. Da ein Quellgrößen-Deskriptor verwendet wird, um die Breite anzugeben, die während des Layouts der Seite für das Bild verwendet werden soll, basiert die Medienbedingung typischerweise (aber nicht notwendigerweise) auf den [Breiten](/de/docs/Web/CSS/@media/width) Informationen.

    Quellgrößenwerte spezifizieren die beabsichtigte Darstellungsgröße des Bildes. {{Glossary("User_agent", "User Agents")}} verwenden die aktuelle Quellgröße zur Auswahl einer der durch das `srcset`-Attribut bereitgestellten Quellen, wenn diese Quellen mit Breite (`w`) Deskriptoren beschrieben werden. Die gewählte Quellgröße beeinflusst die {{Glossary("intrinsic_size", "intrinsische Größe")}} des Bildes (die Anzeigengröße des Bildes, wenn kein {{Glossary("CSS", "CSS")}} Styling angewendet wird). Wenn das `srcset`-Attribut fehlt oder keine Werte mit einem Breitenbeschreiber enthält, hat das `sizes`-Attribut keine Wirkung.

    Ein Quellgrößenwert kann jede nicht-negative [Länge](/de/docs/Web/CSS/length) sein. Es darf keine CSS-Funktionen außer den [mathematischen Funktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#math_functions) verwenden. Einheiten werden auf die gleiche Weise wie bei [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries) interpretiert, was bedeutet, dass alle relativen Längeneinheiten relativ zur Dokumentwurzel und nicht zum `<img>`-Element sind, sodass ein `em`-Wert relativ zur Schriftgröße der Wurzel ist und nicht zur Schriftgröße des Bildes. [Prozentwerte](/de/docs/Web/CSS/percentage) sind nicht erlaubt.

    Das `sizes`-Attribut akzeptiert auch die folgenden Schlüsselwortwerte:

    - `auto`

      - : `auto` kann die gesamte Liste der Größen oder den ersten Eintrag in der Liste ersetzen. Es ist nur in Kombination mit `loading="lazy"` gültig und löst sich auf die [konkrete Größe](/de/docs/Web/CSS/image) des Bildes. Da die intrinsische Größe des Bildes noch nicht bekannt ist, sollten `width` und `height` Attribute (oder CSS-Äquivalente) ebenfalls angegeben werden, um [das Standardbreiteverhalten des Browsers von 300px zu verhindern](https://html.spec.whatwg.org/multipage/images.html#sizes-attributes:attr-dim-width).

- `src`
  - : Die Bild-{{Glossary("URL", "URL")}}. Zwingend erforderlich für das `<img>`-Element. In {{Glossary("Browser", "Browsern")}}, die `srcset` unterstützen, wird `src` als ein Kandidatenbild mit einem Pixeldichte-Deskriptor `1x` behandelt, es sei denn, ein Bild mit diesem Pixeldichte-Deskriptor ist bereits in `srcset` definiert oder `srcset` enthält `w` Deskriptoren.
- `srcset`

  - : Eine oder mehrere durch Kommas getrennte Zeichenfolgen, die mögliche Bildquellen für den {{Glossary("user_agent", "User Agent")}} zur Verwendung angeben. Jede Zeichenfolge besteht aus:

    1. Einer {{Glossary("URL", "URL")}} zu einem Bild
    2. Optional, Leerzeichen gefolgt von einem der folgenden:

       - Einem Breitenbeschreiber (eine positive ganze Zahl, gefolgt von `w`). Der Breitenbeschreiber wird durch die Quellgröße im `sizes`-Attribut geteilt, um die effektive Pixeldichte zu berechnen.
       - Einem Pixeldichte-Deskriptor (eine positive Fließkommazahl, gefolgt von `x`).

    Wenn kein Deskriptor angegeben ist, wird die Quelle mit dem Standarddeskriptor `1x` versehen.

    Es ist falsch, Breitenbeschreiber und Pixeldichte-Deskriptoren im gleichen `srcset`-Attribut zu mischen. Doppelte Deskriptoren (zum Beispiel zwei Quellen im gleichen `srcset`, die beide mit `2x` beschrieben sind) sind ebenfalls ungültig.

    Wenn das `srcset`-Attribut Breitenbeschreiber verwendet, muss auch das `sizes`-Attribut vorhanden sein, ansonsten wird das `srcset` selbst ignoriert.

    Der User Agent wählt nach eigenem Ermessen eine der verfügbaren Quellen aus. Dies gibt ihnen erheblichen Spielraum, ihre Auswahl auf Grundlage von Benutzerpräferenzen oder {{Glossary("bandwidth", "Bandbreite")}}-Bedingungen zu gestalten. Siehe unsere [Responsive Images](/de/docs/Web/HTML/Guides/Responsive_images) Anleitung für ein Beispiel.

- `width`
  - : Die intrinsische Breite des Bildes in Pixeln. Muss eine ganze Zahl ohne Einheit sein.
- `usemap`

  - : Die partielle {{Glossary("URL", "URL")}} (beginnend mit `#`) einer [Bildkarte](/de/docs/Web/HTML/Reference/Elements/map), die mit dem Element verbunden ist.

    > [!NOTE]
    > Sie können dieses Attribut nicht verwenden, wenn sich das `<img>`-Element in einem {{htmlelement("a")}} oder {{HTMLElement("button")}} Element befindet.

### Veraltete Attribute

- `align` {{deprecated_inline}}

  - : Richtet das Bild mit seinem umgebenden Kontext aus. Verwenden Sie stattdessen die Eigenschaften {{cssxref('float')}} und/oder {{cssxref('vertical-align')}} in {{Glossary("CSS", "CSS")}}. Erlaubte Werte:

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
  - : Die Anzahl der Pixel weißer Raum links und rechts vom Bild. Verwenden Sie die {{cssxref('margin')}} CSS-Eigenschaft stattdessen.
- `longdesc` {{deprecated_inline}}

  - : Ein Link zu einer detaillierteren Beschreibung des Bildes. Mögliche Werte sind eine {{Glossary("URL", "URL")}} oder eine Element-ID [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id).

    > [!NOTE]
    > Dieses Attribut gilt als obsolet in der [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/obsolete.html#element-attrdef-img-longdesc). Es hat eine ungewisse Zukunft; Autoren sollten eine {{Glossary("WAI", "WAI")}}-{{Glossary("ARIA", "ARIA")}} Alternative wie [`aria-describedby`](https://www.w3.org/TR/wai-aria-1.1/#aria-describedby) oder [`aria-details`](https://www.w3.org/TR/wai-aria-1.1/#aria-details) verwenden.

- `name` {{deprecated_inline}}
  - : Ein Name für das Element. Verwenden Sie das [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut stattdessen.
- `vspace` {{deprecated_inline}}
  - : Die Anzahl der Pixel weißer Raum oberhalb und unterhalb des Bildes. Verwenden Sie die {{cssxref('margin')}} CSS-Eigenschaft stattdessen.

## Gestaltung mit CSS

`<img>` ist ein {{Glossary("replaced_elements", "ersetztes Element")}}; es hat standardmäßig einen {{cssxref("display")}}-Wert von `inline`, aber seine Standardabmessungen werden durch die intrinsischen Werte des eingebetteten Bildes festgelegt, als wären sie `inline-block`. Sie können Eigenschaften wie {{cssxref("border")}}/{{cssxref("border-radius")}}, {{cssxref("padding")}}/{{cssxref("margin")}}, {{cssxref("width")}}, {{cssxref("height")}} usw. auf ein Bild anwenden.

`<img>` hat keine Baseline, sodass, wenn Bilder in einem Inline-Formatierungskontext mit {{cssxref("vertical-align", "vertical-align: baseline")}} verwendet werden, das untere Ende des Bildes auf die Textbaseline gelegt wird.

Sie können die {{cssxref("object-position")}}-Eigenschaft verwenden, um das Bild innerhalb des Elementkastens zu positionieren, und die {{cssxref("object-fit")}}-Eigenschaft, um die Größe des Bildes innerhalb des Kastens anzupassen (zum Beispiel, ob das Bild in den Kasten passen oder ihn ausfüllen soll, auch wenn dabei eine Abschneidung erforderlich ist).

Abhängig von seinem Typ kann ein Bild eine intrinsische Breite und Höhe haben. Für einige Bildtypen sind jedoch intrinsische Dimensionen nicht notwendig. {{Glossary("SVG", "SVG")}}-Bilder haben zum Beispiel keine intrinsischen Dimensionen, wenn ihr Wurzel-{{SVGElement("svg")}}-Element keine `width` oder `height` darauf gesetzt hat.

## Barrierefreiheit

### Bedeutungsvolle alternative Beschreibungen erstellen

Der Wert eines `alt`-Attributs sollte einen klaren und prägnanten Textersatz für den Inhalt des Bildes bieten. Es sollte nicht das Vorhandensein des Bildes selbst oder den Dateinamen des Bildes beschreiben. Wenn das `alt`-Attribut absichtlich weggelassen wird, weil das Bild kein textliches Äquivalent hat, sollten Sie alternative Methoden in Betracht ziehen, um das, was das Bild zu kommunizieren versucht, darzustellen.

#### Nicht

```html example-bad
<img alt="image" src="penguin.jpg" />
```

#### Tun

```html example-good
<img alt="A Penguin on a beach." src="penguin.jpg" />
```

Ein wichtiger Barrierefreiheitstest ist, den Inhalt des `alt`-Attributs zusammen mit dem vorhergehenden Textinhalt zu lesen, um zu sehen, ob er die gleiche Bedeutung wie das Bild vermittelt. Wenn das Bild beispielsweise vor dem Satz "Auf meinen Reisen sah ich ein niedliches kleines Tier:" dargestellt wurde, könnte das _Nicht_-Beispiel von einem Screenreader gelesen werden als "Auf meinen Reisen sah ich ein niedliches kleines Tier: Bild", was keinen Sinn ergibt. Das _Tun_-Beispiel könnte von einem Screenreader gelesen werden als "Auf meinen Reisen sah ich ein niedliches kleines Tier: Ein Pinguin am Strand.", was Sinn ergibt.

Für Bilder, die eine Aktion auslösen sollen, zum Beispiel Bilder, die in einem {{htmlelement("a")}} oder {{htmlelement("button")}}-Element verschachtelt sind, sollten Sie in Betracht ziehen, die ausgelöste Aktion im Wert des `alt`-Attributs zu beschreiben. Beispielweise könnten Sie `alt="nächste Seite"` anstelle von `alt="Pfeil rechts"` schreiben. Sie könnten auch in Erwägung ziehen, eine optionale weitere Beschreibung im `title`-Attribut hinzuzufügen; dies kann von Screenreadern vorgelesen werden, wenn es vom Benutzer angefordert wird.

Wenn auf einem Bild kein `alt`-Attribut vorhanden ist, können einige Screenreader den Dateinamen des Bildes stattdessen ankündigen. Dies kann eine verwirrende Erfahrung sein, wenn der Dateiname den Bildinhalt nicht repräsentiert.

- [Ein Alt-Entscheidungsbaum • Bilder • WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/images/decision-tree/)
- [Alt-Texte: Der ultimative Leitfaden — Axess Lab](https://axesslab.com/alt-texts/)
- [Wie man großartige Alt-Texte entwirft: Eine Einführung | Deque](https://www.deque.com/blog/great-alt-text-introduction/)
- [MDN Verständnis von WCAG, Leitfaden 1.1 Erläuterungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verständnis Erfolgskriterium 1.1.1 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

### SVG als Bild identifizieren

Aufgrund eines [VoiceOver-Bugs](https://webkit.org/b/216364) gibt VoiceOver SVG-Bilder nicht korrekt als Bilder an. Fügen Sie das [`role="img"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/img_role) zu allen `<img>`-Elementen mit SVG-Quelldateien hinzu, um sicherzustellen, dass unterstützende Technologien das SVG korrekt als Bildinhalt ankündigen.

```html
<img src="mdn.svg" alt="MDN" role="img" />
```

### Das title-Attribut

Das [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)-Attribut ist kein akzeptabler Ersatz für das `alt`-Attribut. Vermeiden Sie zudem die Duplizierung des Wertes des `alt`-Attributs in einem `title`-Attribut, das auf dasselbe Bild deklariert wird. Dies könnte dazu führen, dass einige Screenreader denselben Text zweimal ankündigen, was eine verwirrende Erfahrung erzeugt.

Das `title`-Attribut sollte auch nicht als ergänzende Beschriftungsinformation verwendet werden, um die `alt`-Beschreibung eines Bildes zu begleiten. Wenn ein Bild eine Beschriftung benötigt, verwenden Sie die [`figure`](/de/docs/Web/HTML/Reference/Elements/figure)- und [`figcaption`](/de/docs/Web/HTML/Reference/Elements/figcaption)-Elemente.

Der Wert des `title`-Attributs wird dem Benutzer in der Regel als Tooltip präsentiert, der kurz nach dem Stoppen des Cursors über dem Bild erscheint. Während dies dem Benutzer zusätzliche Informationen bieten _kann_, sollten Sie nicht davon ausgehen, dass der Benutzer es jemals sehen wird: der Benutzer könnte nur eine Tastatur oder einen Touchscreen haben. Wenn Sie Informationen haben, die besonders wichtig oder wertvoll für den Benutzer sind, präsentieren Sie sie inline mit einer der oben genannten Methoden statt `title` zu verwenden.

- [Verwendung des HTML-Titelattributs – aktualisiert | The Paciello Group](https://www.tpgi.com/using-the-html-title-attribute-updated/)

## Beispiele

### Alternativer Text

Das folgende Beispiel bettet ein Bild in die Seite ein und enthält Alternativtext zur Barrierefreiheit.

```html
<img src="/shared-assets/images/examples/favicon144.png" alt="MDN" />
```

{{ EmbedLiveSample('Alternative_text', '100%', '160') }}

### Bildlink

Dieses Beispiel basiert auf dem vorherigen und zeigt, wie man das Bild in einen Link verwandelt. Dazu nisten Sie den `<img>`-Tag innerhalb des {{HTMLElement("a")}}-Elements. Sie sollten den Alternativtext so beschreiben, dass er die Ressource beschreibt, auf die der Link verweist, als ob Sie einen Textlink verwenden würden.

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

Das `src`-Attribut wird in {{Glossary("User_agent", "User Agents")}}, die `srcset` unterstützen, ignoriert, wenn `w`-Deskriptoren enthalten sind. Wenn die `(max-width: 600px)` Medienbedingung zutrifft, wird das 200 Pixel breite Bild geladen (es ist dasjenige, das `200px` am nächsten kommt), andernfalls wird das andere Bild geladen.

```html
<img
  src="clock-demo-200px.png"
  alt="The time is 12:45."
  srcset="clock-demo-200px.png 200w, clock-demo-400px.png 400w"
  sizes="(max-width: 600px) 200px, 50vw" />
```

{{EmbedLiveSample("Using_the_srcset_and_sizes_attributes", "100%", 350)}}

> [!NOTE]
> Um das Vergrößern in Aktion zu sehen, {{LiveSampleLink('Using_the_srcset_and_sizes_attributes', 'sehen Sie sich das Beispiel auf einer separaten Seite an')}}, so dass Sie den Inhaltsbereich tatsächlich vergrößern können.

## Sicherheits- und Datenschutzbedenken

Obwohl `<img>`-Elemente unschuldige Verwendungszwecke haben, können sie unerwünschte Folgen für die Sicherheit und den Datenschutz der Benutzer haben. Siehe [Referer-Header: Datenschutz- und Sicherheitsbedenken](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns) für mehr Informationen und Milderungsmaßnahmen.

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
          >Phrasierungselement</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#embedded_content"
          >Eingebetteter Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#palpable_content"
          >tastbarer Inhalt</a
        >. Wenn das Element ein <code>usemap</code>-Attribut hat, ist es auch Teil
        der interaktiven Inhaltskategorie.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "Leer-Element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss einen Starttag haben und darf keinen Endtag haben.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>Jedes Element, das eingebetteten Inhalt akzeptiert.</td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <ul>
          <li>
            mit nicht-leerem <code>alt</code>-Attribut oder ohne
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
      <th scope="row">Zulässige ARIA-Rollen</th>
      <td>
        <ul>
          <li>
            mit nicht-leerem <code>alt</code>-Attribut:
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
            ohne <code>alt</code>-Attribut, keine <code>role</code> zulässig
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM-Interface</th>
      <td>[`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("picture")}}, {{HTMLElement("object")}} und {{HTMLElement("embed")}} Elemente
- {{cssxref("object-fit")}}, {{cssxref("object-position")}}, {{cssxref("image-orientation")}}, {{cssxref("image-rendering")}} und {{cssxref("image-resolution")}}: bildbezogene CSS-Eigenschaften.
- [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) Schnittstelle für dieses Element
- [HTML-Bilder](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images)
- [Leitfaden für Bilddateitypen und -formate](/de/docs/Web/Media/Guides/Formats/Image_types)
- [Responsive images](/de/docs/Web/HTML/Guides/Responsive_images)
