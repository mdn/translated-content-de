---
title: "`<img>` HTML-Element zum Einbetten von Bildern"
short-title: <img>
slug: Web/HTML/Reference/Elements/img
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

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

- Das `src`-Attribut enthält den Pfad zu dem Bild, das Sie einbetten möchten. Es ist nicht zwingend erforderlich, wenn das [srcset](/de/docs/Web/API/HTMLImageElement/srcset)-Attribut verfügbar ist. Mindestens eines der Attribute `src` oder `srcset` muss jedoch angegeben werden.
- Das `alt`-Attribut enthält einen textuellen Ersatz für das Bild, der verpflichtend ist und **unglaublich nützlich** für die Barrierefreiheit ist – Screenreader lesen den Attributwert ihren Nutzern vor, damit sie wissen, was das Bild bedeutet. Alt-Text wird auch auf der Seite angezeigt, wenn das Bild aus irgendeinem Grund nicht geladen werden kann: zum Beispiel Netzwerkfehler, Inhaltsblockierung oder Linkverfall.

Es gibt viele andere Attribute, um verschiedene Zwecke zu erreichen:

- [Referrer](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy)/{{Glossary("CORS", "CORS")}}-Kontrolle für Sicherheit und Datenschutz: siehe [`crossorigin`](#crossorigin) und [`referrerpolicy`](#referrerpolicy).
- Verwenden Sie sowohl [`width`](#width) als auch [`height`](#height), um die intrinsische Größe des Bildes festzulegen, sodass es Platz einnimmt, bevor es geladen wird, um Layoutverschiebungen zu verhindern.
- Hinweise für responsive Bilder mit [`sizes`](#sizes) und [`srcset`](#srcset) (siehe auch das {{htmlelement("picture")}}-Element und unseren [Leitfaden zu Responsiven Bildern](/de/docs/Web/HTML/Guides/Responsive_images)).

## Unterstützte Bildformate

Der HTML-Standard listet nicht auf, welche Bildformate unterstützt werden sollen, daher können {{Glossary("user_agent", "User Agents")}} verschiedene Formate unterstützen.

> [!NOTE]
> Der [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types) bietet umfassende Informationen über Bildformate und ihre Unterstützung durch Webbrowser.
> Dieser Abschnitt ist nur eine Zusammenfassung!

Die am häufigsten im Web verwendeten Bilddateiformate sind:

- [APNG (Animated Portable Network Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#apng_animated_portable_network_graphics) — Gute Wahl für verlustfreie Animationssequenzen (GIF ist weniger leistungsfähig).
- [AVIF (AV1 Image File Format)](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) — Gute Wahl sowohl für Bilder als auch für animierte Bilder aufgrund hoher Leistung.
- [GIF (Graphics Interchange Format)](/de/docs/Web/Media/Guides/Formats/Image_types#gif_graphics_interchange_format) — Gute Wahl für _einfache_ Bilder und Animationen.
- [JPEG (Joint Photographic Expert Group image)](/de/docs/Web/Media/Guides/Formats/Image_types#jpeg_joint_photographic_experts_group_image) — Gute Wahl für verlustbehaftete Kompression von Standbildern (derzeit am beliebtesten).
- [PNG (Portable Network Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#png_portable_network_graphics) — Gute Wahl für verlustfreie Kompression von Standbildern (leicht bessere Qualität als JPEG).
- [SVG (Scalable Vector Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#svg_scalable_vector_graphics) — Vektorbildformat. Verwenden Sie es für Bilder, die in verschiedenen Größen genau gezeichnet werden müssen.
- [WebP (Web Picture format)](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) — Hervorragende Wahl sowohl für Bilder als auch für animierte Bilder.

Formate wie [WebP](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) und [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) werden empfohlen, da sie sowohl für Standbilder als auch für animierte Bilder viel besser abschneiden als PNG, JPEG, GIF.

SVG bleibt das empfohlene Format für Bilder, die in verschiedenen Größen genau wiedergegeben werden müssen.

## Bildladefehler

Wenn ein Fehler beim Laden oder Rendern eines Bildes auftritt und ein `onerror`-Ereignishandler für das [`error`](/de/docs/Web/API/HTMLElement/error_event)-Ereignis festgelegt wurde, wird dieser Ereignishandler aufgerufen. Dies kann in verschiedenen Situationen passieren, einschließlich:

- Die `src`- oder `srcset`-Attribute sind leer (`""`) oder `null`.
- Die `src`-{{Glossary("URL", "URL")}} ist dieselbe wie die URL der Seite, die der Benutzer gerade besucht.
- Das Bild ist auf eine Weise beschädigt, die es unmöglich macht, es zu laden.
- Die Metadaten des Bildes sind so beschädigt, dass es unmöglich ist, seine Abmessungen zu ermitteln, und keine Abmessungen im `<img>`-Element-Attribut angegeben wurden.
- Das Bild ist in einem Format, das vom {{Glossary("user_agent", "User Agent")}} nicht unterstützt wird.

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `alt`
  - : Definiert Text, der das Bild auf der Seite ersetzen kann.

    > [!NOTE]
    > Browser zeigen nicht immer Bilder an. Es gibt mehrere Situationen, in denen ein Browser möglicherweise keine Bilder anzeigt, wie zum Beispiel:
    >
    > - Nicht-visuelle Browser (wie diejenigen, die von Menschen mit Sehbehinderungen verwendet werden)
    > - Der Benutzer entscheidet sich gegen die Anzeige von Bildern (um Bandbreite zu sparen, aus Datenschutzgründen)
    > - Das Bild ist ungültig oder ein [nicht unterstützter Typ](#unterstützte_bildformate)
    >
    > In diesen Fällen kann der Browser das Bild durch den Text im `alt`-Attribut des Elements ersetzen. Aus diesen und anderen Gründen geben Sie wann immer möglich einen nützlichen Wert für `alt` an.

    Der Wert dieses Attributs auf einen leeren String (`alt=""`) festzulegen, bedeutet, dass dieses Bild _kein_ wesentlicher Teil des Inhalts ist (es ist Dekoration oder ein Tracking-Pixel), und dass nicht-visuelle Browser es beim {{Glossary("Engine/Rendering", "Rendern")}} weglassen können. Visuelle Browser verstecken auch das Symbol für kaputte Bilder, wenn das `alt`-Attribut leer ist und das Bild nicht angezeigt werden konnte.

    Dieses Attribut wird auch verwendet, wenn das Bild in Text kopiert wird oder ein verlinktes Bild zu einem Lesezeichen gespeichert wird.

- `attributionsrc` {{deprecated_inline}}
  - : Gibt an, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header zusammen mit dem Bildantrag senden soll.

    Auf der Serverseite wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Headers in der Antwort auszulösen, um eine auf Bildern basierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#html-based_event_sources) oder einen [Attributionstrigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#html-based_attribution_triggers) bzw. zu registrieren. Welcher Antwortheader zurückgesendet werden soll, hängt vom Wert des Headers `Attribution-Reporting-Eligible` ab, der die Registrierung ausgelöst hat.

    Das entsprechende Quell- oder Triggerevent wird ausgelöst, sobald der Browser die Antwort mit der Bilddatei erhält.

    > [!NOTE]
    > Weitere Einzelheiten finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

    Es gibt zwei Versionen dieses Attributs, die Sie festlegen können:
    - Boolean, d.h. nur der Name `attributionsrc`. Dies gibt an, dass Sie möchten, dass der {{httpheader("Attribution-Reporting-Eligible")}}-Header an denselben Server wie das `src`-Attribut gesendet wird. Dies ist in Ordnung, wenn Sie die Registrierung der Attributionsquelle oder des Triggers auf demselben Server behandeln. Beim Registrieren eines Attributionstriggers ist diese Eigenschaft optional, und ein boolescher Wert wird verwendet, wenn sie weggelassen wird.
    - Wert, der eine oder mehrere URLs enthält, beispielsweise:

    ```html
    <img
      src="image-file.png"
      alt="My image file description"
      attributionsrc="https://a.example/register-source
                         https://b.example/register-source" />
    ```

    Dies ist nützlich in Fällen, in denen die angeforderte Ressource nicht auf einem von Ihnen kontrollierten Server liegt oder Sie die Registrierung der Attributionsquelle einfach auf einem anderen Server handhaben möchten. In diesem Fall können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcenanforderung stattfindet, wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header an die(s) in `attributionSrc` angegebenen URL(s) zusätzlich zum Ursprungsort der Ressource gesendet. Diese URLs können dann mit einem entsprechenden {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header antworten, um die Registrierung abzuschließen.

    > [!NOTE]
    > Die Angabe mehrerer URLs bedeutet, dass mehrere Attributionsquellen für das gleiche Feature registriert werden können. Sie könnten beispielsweise verschiedene Kampagnen haben, deren Erfolg Sie messen möchten, die das Generieren verschiedener Berichte auf verschiedenen Daten umfassen.

- [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)
  - : Gibt an, ob das Abrufen des Bildes mithilfe einer {{Glossary("CORS", "CORS")}}-Anforderung durchgeführt werden muss. Bilddaten eines [CORS-aktivierten Bildes](/de/docs/Web/HTML/How_to/CORS_enabled_image), das aus einer CORS-Anforderung zurückgesendet wurde, können im {{HTMLElement("canvas")}}-Element wiederverwendet werden, ohne als "[verändert](/de/docs/Web/HTML/How_to/CORS_enabled_image#security_and_tainted_canvases)" markiert zu werden.

    Wenn das `crossorigin`-Attribut _nicht_ angegeben ist, wird eine nicht-CORS-Anforderung gesendet (ohne den {{httpheader("Origin")}}-Anforderungsheader) und der Browser markiert das Bild als verändert und beschränkt den Zugriff auf seine Bilddaten, wodurch seine Verwendung in {{HTMLElement("canvas")}}-Elementen verhindert wird.

    Wenn das `crossorigin`-Attribut angegeben ist, wird eine CORS-Anforderung gesendet (mit dem {{httpheader("Origin")}}-Anforderungsheader); wenn der Server sich jedoch nicht dazu entscheidet, den Ursprung des Bildes dem Ursprungsort zugänglich zu machen (indem er keinen {{httpheader("Access-Control-Allow-Origin")}}-Antwortheader sendet oder nicht den Ursprung der Site in einem solchen {{httpheader("Access-Control-Allow-Origin")}}-Antwortheader einschließt, den er sendet), verhindert der Browser das Laden des Bildes und protokolliert einen CORS-Fehler in der Entwicklerkonsole.

    Zulässige Werte:
    - `anonymous`
      - : Eine CORS-Anfrage wird gesendet, wobei Anmeldedaten weggelassen werden (d.h. keine {{Glossary("cookie", "Cookies")}}, [X.509-Zertifikate](https://datatracker.ietf.org/doc/html/rfc5280) oder {{httpheader("Authorization")}}-Anforderungsheader).
    - `use-credentials`
      - : Die CORS-Anforderung wird mit enthaltenen Anmeldeinformationen gesendet (d.h. Cookies, X.509-Zertifikate und der `Authorization`-Anforderungsheader). Wenn der Server sich nicht dazu entscheidet, Anmeldeinformationen mit dem Ursprung der Site zu teilen (indem er den `Access-Control-Allow-Credentials: true`-Antwortheader zurücksendet), markiert der Browser das Bild als verändert und beschränkt den Zugriff auf dessen Bilddaten.

    Wenn das Attribut einen ungültigen Wert hat, behandeln Browser es, als ob der `anonymous`-Wert verwendet wurde. Weitere Informationen finden Sie in den [CORS-Einstellungseigenschaften](/de/docs/Web/HTML/Reference/Attributes/crossorigin).

- `decoding`
  - : Dieses Attribut gibt dem Browser einen Hinweis darauf, ob er die Bilddecodierung zusammen mit der Darstellung der anderen DOM-Inhalte in einem einzigen Präsentationsschritt durchführen soll, der "korrekter" aussieht (`sync`), oder zuerst die anderen DOM-Inhalte darstellen und präsentieren und dann das Bild decodieren und später präsentieren soll (`async`). Tatsächlich bedeutet `async`, dass die nächste Bildwiederholung nicht auf die Bilddecodierung wartet.

    Es ist oft schwierig, einen wahrnehmbaren Effekt bei der Verwendung von `decoding` auf statischen `<img>`-Elementen zu erkennen. Sie werden wahrscheinlich zunächst als leere Bilder dargestellt, während die Bilddateien abgerufen werden (entweder aus dem Netzwerk oder aus dem Cache) und dann unabhängig behandelt werden, sodass die "Synchronisation" von Inhaltsaktualisierungen weniger offensichtlich ist. Allerdings kann die Blockierung der Darstellung während der Decodierung, obwohl oft sehr klein, _gemessen_ werden — auch wenn es schwierig ist, dies mit dem menschlichen Auge zu beobachten. Siehe [Was macht das Attribute für die Bilddecodierung tatsächlich?](https://www.tunetheweb.com/blog/what-does-the-image-decoding-attribute-actually-do/) für eine detailliertere Analyse (tunetheweb.com, 2023).

    Die Verwendung unterschiedlicher `decoding`-Typen kann zu bemerkenswerteren Unterschieden führen, wenn `<img>`-Elemente dynamisch über JavaScript in das DOM eingefügt werden — siehe [`HTMLImageElement.decoding`](/de/docs/Web/API/HTMLImageElement/decoding) für weitere Details.

    Zulässige Werte:
    - `sync`
      - : Decodiert das Bild synchron mit der Darstellung der anderen DOM-Inhalte und präsentiert alles zusammen.
    - `async`
      - : Decodiert das Bild asynchron, nach der Darstellung und Präsentation der anderen DOM-Inhalte.
    - `auto`
      - : Keine Präferenz für den Decodierungsmodus; der Browser entscheidet, was am besten für den Benutzer ist. Dies ist der Standardwert.

- [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming)
  - : Markiert das Bild zur Beobachtung durch die [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)-API. Der angegebene Wert wird zu einem Bezeichner für das beobachtete Bildelement. Siehe auch die [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming)-Attributseite.

- [`fetchpriority`](/de/docs/Web/HTML/Reference/Attributes/fetchpriority)
  - : Gibt einen Hinweis auf die relative Priorität beim Abrufen des Bildes an. Zulässige Werte:
    - `high`
      - : Ruft das Bild mit hoher Priorität im Verhältnis zu anderen Bildern ab.
    - `low`
      - : Ruft das Bild mit niedriger Priorität im Verhältnis zu anderen Bildern ab.
    - `auto`
      - : Keine Präferenz für die Abrufpriorität festlegen.
        Dies ist der Standardwert.
        Er wird verwendet, wenn kein Wert oder ein ungültiger Wert festgelegt ist.
- `height`
  - : Die intrinsische Höhe des Bildes in Pixeln. Muss eine ganze Zahl ohne Einheit sein.

    > [!NOTE]
    > Die Angabe von `height` und [`width`](#width) ermöglicht es dem Browser, das {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Bildes zu berechnen, bevor das Bild geladen wird. Dieses Seitenverhältnis wird verwendet, um den Platz zu reservieren, der zur Anzeige des Bildes benötigt wird, wodurch eine Layoutverschiebung reduziert oder sogar vermieden wird, wenn das Bild heruntergeladen und auf dem Bildschirm angezeigt wird. Das Reduzieren von Layoutverschiebungen ist ein wesentlicher Bestandteil guter Benutzererfahrung und Webperformance.

- `ismap`
  - : Dieses boolesche Attribut gibt an, dass das Bild Teil einer [serverseitigen Karte](https://en.wikipedia.org/wiki/Image_map#Server-side) ist. In diesem Fall werden die Koordinaten, an denen der Benutzer auf das Bild geklickt hat, an den Server gesendet.

    > [!NOTE]
    > Dieses Attribut ist nur zulässig, wenn das `<img>`-Element ein Nachfolger eines {{htmlelement("a")}}-Elements mit einem gültigen [`href`](/de/docs/Web/HTML/Reference/Elements/a#href)-Attribut ist. Dies bietet Benutzern ohne Zeigegeräte eine alternative Zielseite.

- `loading`
  - : Gibt an, wie der Browser das Bild laden soll:
    - `eager`
      - : Lädt das Bild sofort, unabhängig davon, ob das Bild sich derzeit im {{Glossary("visual_viewport", "sichtbaren Ansichtsfenster")}} befindet (dies ist der Standardwert).
    - `lazy`
      - : Verzögert das Laden des Bildes, bis es eine berechnete Entfernung vom Ansichtsfenster erreicht, wie vom Browser definiert.

        Lazy Loading vermieden den Netzwerk- und Speicherbandbreitenbedarf, um das Bild zu laden, bis es hinreichend sicher ist, dass es benötigt wird. Dies verbessert die Leistung in den meisten typischen Anwendungsfällen.

        Während explizite [`width`](#width)- und [`height`](#height)-Attribute für alle Bilder empfohlen werden, um Layoutverschiebungen zu verhindern, sind sie besonders wichtig für Lazy Loaded-Bilder. Lazy Loaded-Bilder werden nie geladen, wenn sie keinen sichtbaren Teil eines Elements schneiden, selbst wenn das Laden sie ändern würde, da ungeladene Bilder eine `width` und `height` von `0` haben. Dies führt zu einer noch störenderen Benutzererfahrung, wenn der Inhalt, der im Ansichtsfenster sichtbar ist, beim Lesen neu formatiert wird.

        Lazy Loaded-Bilder, die sich im sichtbaren Ansichtsfenster befinden, sind möglicherweise nicht sichtbar, wenn das [load](/de/docs/Web/API/Window/load_event)-Ereignis des Windows ausgelöst wird. Dies liegt daran, dass das Ereignis auf Basis von sofort geladenen Bildern ausgelöst wird — Lazy Loaded-Bilder werden nicht berücksichtigt, selbst wenn sie beim initialen Laden der Seite innerhalb des sichtbaren Ansichtsfensters liegen.

        Das Laden wird nur verschoben, wenn JavaScript aktiviert ist. Dies ist eine Maßnahme gegen Tracking, da eine Site, wenn ein User Agent Lazy Loading unterstützt, wenn Scripting deaktiviert ist, immer noch möglich wäre, die ungefähre Scrollposition eines Benutzers während einer Sitzung zu verfolgen, indem strategisch Bilder im Markup einer Seite platziert werden, sodass ein Server verfolgen kann, wie viele Bilder angefordert werden und wann.

- `referrerpolicy`
  - : Eine Zeichenfolge, die angibt, welchen Referrer beim Abrufen der Ressource verwendet werden soll:
    - `no-referrer`: Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}}-Header wird nicht an {{Glossary("origin", "Ursprünge")}} ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`: Der gesendete Referrer wird auf den Ursprung der verweisenden Seite beschränkt: ihr [Schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), ihr {{Glossary("host", "Host")}} und ihr {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`: Der an andere Ursprünge gesendete Referrer wird auf das Schema, den Host und den Port beschränkt. Navigationen im selben Ursprung enthalten weiterhin den Pfad.
    - `same-origin`: Ein Referrer wird für {{Glossary("Same-origin_policy", "den selben Ursprung")}} gesendet, aber Cross-Origin-Anforderungen enthalten keine Referrer-Informationen.
    - `strict-origin`: Sendet den Ursprung des Dokuments nur als Referrer, wenn das Protokollsicherheitsniveau gleich bleibt (HTTPS→HTTPS), sendet ihn jedoch nicht an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard): Sendet eine vollständige URL bei der Durchführung einer Anfrage gleichen Ursprungs, sendet nur den Ursprung, wenn das Protokollsicherheitsniveau gleich bleibt (HTTPS→HTTPS), und sendet keinen Header an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `unsafe-url`: Der Referrer enthält den Ursprung _und_ den Pfad (aber nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder [Benutzername](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge weitergibt.

- `sizes`
  - : Ein oder mehrere durch Kommas getrennte Werte, die Quellgrößen oder das `auto`-Schlüsselwort sein können.
    Die Spezifikation erfordert, dass das `sizes`-Attribut nur vorhanden ist, wenn `srcset` Breitenbeschreibungen verwendet.
    - **source size**
      - : Eine **Quellgröße** besteht aus:
        1. Einer [Medienbedingung](/de/docs/Web/CSS/Guides/Media_queries/Using#syntax), weggelassen für das letzte Element in der Liste.
        2. Einem Quellgrößenwert.

        Zum Beispiel schlägt die folgende Quellgröße vor, eine `1000px` breite Bildquelle zu verwenden, falls die _Ansichtsfenster_-Breite 500px oder weniger beträgt.

        ```css
        (width <= 500px) 1000px
        ```

        Medienbedingungen beschreiben Eigenschaften des _{{Glossary("viewport", "Ansichtsfensters")}}_, nicht des _Bildes_.
        Da ein Quellgrößenbeschreiber die Breite angibt, die für das Bild während des Layouts verwendet werden soll, basiert die Medienbedingung typischerweise (aber nicht unbedingt) auf der {{cssxref("@media/width")}}.

        Quellgrößenwerte geben die beabsichtigte Darstellungsgröße des Bildes an.
        {{Glossary("User_agent", "User Agents")}} verwenden die aktuelle Quellgröße, um eine der durch das `srcset`-Attribut bereitgestellten Quellen auszuwählen, wenn diese Quellen mit Breitenbeschreibern (`w`) beschrieben werden.
        Der `w`-Wert, der in `sizes` definiert ist, bestimmt die Standardlayoutbreite des Bildes.
        In der Abwesenheit von {{Glossary("CSS", "CSS")}} wird der Browser das Bild in dieser Größe rendern, unabhängig von den physischen Pixeldimensionen der heruntergeladenen Datei.

        Ein Quellgrößenwert kann jede nicht-negative [Länge](/de/docs/Web/CSS/Reference/Values/length) sein.
        Es darf keine CSS-Funktionen außer den [Mathe-Funktionen](/de/docs/Web/CSS/Reference/Values/Functions#math_functions) verwenden.
        Einheiten werden auf dieselbe Weise interpretiert wie [Media-Queries](/de/docs/Web/CSS/Guides/Media_queries), was bedeutet, dass alle relativen Längeneinheiten relativ zur Dokumentwurzel und nicht zum `<img>`-Element sind. Zum Beispiel ist ein `em`-Wert relativ zur Schriftgröße der Wurzel und nicht zur Schriftgröße des Bildes. [Prozent]-Werte(/de/docs/Web/CSS/Reference/Values/percentage) sind nicht erlaubt. Wenn das `sizes`-Attribut nicht bereitgestellt wird, hat es einen Standardwert von `100vw` (die Ansichtsfensterbreite).

    - `auto`
      - : Das `auto`-Schlüsselwort zeigt an, dass der Browser die erwartete Layoutbreite des Elements verwenden soll, um das anzuzeigende Bild auszuwählen.
        Das heißt, es sollte die [konkrete Größe](/de/docs/Web/CSS/Reference/Values/image#concrete_size) des Bildes verwenden, die berechnet wird, nachdem HTML und CSS auf das Layout angewendet wurden.
        Dies gilt nur in Kombination mit `loading="lazy"`, da die Seite erwartet, dass zum Zeitpunkt des Ladens des Bildes bereits CSS und andere Layoutinformationen vorhanden sind.

        Die Verwendung von `auto` erspart es Ihnen, Ihre Layoutmedienbedingungen zweimal anzugeben: einmal für das Layout und einmal für die Auswahl eines geeigneten Bildes zum Abrufen und Anzeigen.

        Wenn `auto` nicht aufgelöst werden kann — entweder weil der Browser es nicht unterstützt oder das Bild noch keine Layoutgröße hat — fällt der Browser auf die _Quellgrößen_ in der Liste zurück, um die Breite zu bestimmen, dann zu `width`/`height`-Attributen, die auf dem Element definiert sind, und schließlich auf die Standardgröße für `<img>`-Elemente, die im User Agent Stylesheet definiert ist (300px mal 150px).

        Zur besseren Abwärtskompatibilität mit Browsern, die `auto` nicht unterstützen, können Sie nach `auto` Fallback-Gößen im `sizes`-Attribut einschließen. Sie sollten auch die `width`- und `height`-Attribute des Elements auf die intrinsischen Dimensionen des größten Bildes in Ihrem `srcset` festlegen, damit der Browser Platz mit dem korrekten Seitenverhältnis reservieren kann:

        ```html
        <img
          loading="lazy"
          width="200"
          height="200"
          sizes="auto, (max-width: 30em) 100vw, (max-width: 50em) 50vw, calc(33vw - 100px)"
          srcset="
            swing-200.jpg   200w,
            swing-400.jpg   400w,
            swing-800.jpg   800w,
            swing-1600.jpg 1600w
          "
          src="swing-400.jpg"
          alt="Kettlebell Swing" />
        ```

- `src`
  - : Die Bild-{{Glossary("URL", "URL")}}. Mindestens eines von `src` und [`srcset`](#srcset) ist für ein `<img>`-Element erforderlich. Falls [`srcset`](#srcset) angegeben ist, wird `src` auf eine von zwei Arten verwendet:
    - als Fallback für Browser, die `srcset` nicht unterstützen.
    - wenn `srcset` den "x"-Beschreiber verwendet, ist `src` äquivalent zu einer Quelle mit dem Dichtebeschreiber `1x`; das heißt, das im `src` angegebene Bild wird auf Bildschirmen mit niedriger Dichte verwendet (z.B. typische 72 DPI oder 96 DPI Displays).

- `srcset`
  - : Eine oder mehr durch Kommas getrennte Zeichenfolgen, die mögliche Bildquellen für den {{Glossary("user_agent", "User Agent")}} angeben, die verwendet werden sollen.

    Jede Zeichenkette besteht aus:
    1. Einer {{Glossary("URL", "URL")}} zu einem Bild
    2. Optional, Leerzeichen gefolgt von einem der folgenden:
       - Einem Breitenbeschreiber (eine positive ganze Zahl direkt gefolgt von `w`). Es _muss_ der intrinsischen Breite des referenzierten Bildes entsprechen. Der Breitenbeschreiber wird durch die in `sizes` angegebene Quellgröße geteilt, um die effektive Pixeldichte zu berechnen. Zum Beispiel, um eine Bildressource bereitzustellen, die verwendet werden soll, wenn der Renderer ein 450 Pixel breites Bild benötigt, verwenden Sie den Breitenbeschreiber `450w`. Wenn ein `srcset` "w"-Beschreiber enthält, verwendet der Browser diese Beschreiber zusammen mit dem `sizes`-Attribut, um eine Ressource auszuwählen.
       - Einem Pixeldichtebeschreiber (eine positive Fließkommazahl direkt gefolgt von `x`). Er gibt die Bedingung an, unter der die entsprechende Bildressource als Pixeldichte des Displays verwendet werden soll. Zum Beispiel, um eine Bildressource bereitzustellen, die verwendet werden soll, wenn die Pixeldichte das Doppelte der Standarddichte beträgt, verwenden Sie den Pixeldichtebeschreiber `2x` oder `2.0x`.

    Wenn kein Beschreiber angegeben ist, wird der Quelle der Standardbeschreiber `1x` zugewiesen. Es ist falsch, Breitenbeschreiber und Pixeldichtebeschreiber im selben `srcset`-Attribut zu mischen. Doppelte Beschreiber (z.B. zwei Quellen im selben `srcset`, die beide mit `2x` beschrieben sind) sind ebenfalls ungültig.

    Leerzeichen, abgesehen von dem Leerzeichen, das die URL von ihrem entsprechenden Bedingungsbeschreiber trennt, werden ignoriert; dies schließt sowohl führende und nachgestellte Leerzeichen ein, als auch Leerzeichen vor oder nach jedem Komma. Wenn jedoch ein Bildkandidatstring keine Beschreiber und kein nach der URL stehendes Leerzeichen enthält, muss der folgende Bildkandidatstring, falls vorhanden, mit einem oder mehreren Leerzeichen beginnen, oder das Komma wird als Teil der URL betrachtet.

    Wenn das `srcset`-Element des `<img>`-Elements `x`-Beschreiber verwendet, berücksichtigen Browser auch die URL im `src`-Attribut (falls vorhanden) als Kandidaten und weisen ihm einen Standardbeschreiber von `1x` zu. Andererseits, wenn das `srcset`-Attribut Breitenbeschreiber verwendet, wird `src` nicht berücksichtigt, und das `sizes`-Attribut wird stattdessen verwendet.

    Der User Agent wählt nach eigenem Ermessen eine der verfügbaren Quellen aus. Dies gibt ihnen erheblichen Spielraum, ihre Auswahl basierend auf Dingen wie Benutzerpräferenzen oder {{Glossary("bandwidth", "Bandbreiten")}}-Bedingungen anzupassen. Siehe unser [Leitfaden zu Responsiven Bildern](/de/docs/Web/HTML/Guides/Responsive_images) für ein Beispiel.

- `width`
  - : Die intrinsische Breite des Bildes in Pixeln. Muss eine ganze Zahl ohne Einheit sein.
- `usemap`
  - : Die partielle {{Glossary("URL", "URL")}} (beginnend mit `#`) einer [Bildkarte](/de/docs/Web/HTML/Reference/Elements/map), die mit dem Element verbunden ist.

    > [!NOTE]
    > Sie können dieses Attribut nicht verwenden, wenn sich das `<img>`-Element in einem {{htmlelement("a")}}- oder {{HTMLElement("button")}}-Element befindet.

### Veraltete Attribute

- `align` {{deprecated_inline}}
  - : Richtet das Bild mit seinem umgebenden Kontext aus. Verwenden Sie stattdessen die {{cssxref('float')}}- und/oder {{cssxref('vertical-align')}}-{{Glossary("CSS", "CSS")}} Eigenschaften. Zulässige Werte:
    - `top`
      - : Äquivalent zu `vertical-align: top` oder `vertical-align: text-top`
    - `middle`
      - : Äquivalent zu `vertical-align: -moz-middle-with-baseline`
    - `bottom`
      - : Der Standard, äquivalent zu `vertical-align: unset` oder `vertical-align: initial`
    - `left`
      - : Äquivalent zu `float: left`
    - `right`
      - : Äquivalent zu `float: right`

- `border` {{deprecated_inline}}
  - : Die Breite eines Randes um das Bild. Verwenden Sie stattdessen die {{cssxref('border')}}-{{Glossary("CSS", "CSS")}} Eigenschaft.
- `hspace` {{deprecated_inline}}
  - : Die Anzahl der Pixel Leerraum links und rechts des Bildes. Verwenden Sie stattdessen die {{cssxref('margin')}}-CSS-Eigenschaft.
- `longdesc` {{deprecated_inline}}
  - : Ein Link zu einer detaillierteren Beschreibung des Bildes. Mögliche Werte sind eine {{Glossary("URL", "URL")}} oder eine Element-`id`(/de/docs/Web/HTML/Reference/Global_attributes/id).

    > [!NOTE]
    > Dieses Attribut gilt in der [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/obsolete.html#element-attrdef-img-longdesc) als obsolet. Es hat eine ungewisse Zukunft; Autoren sollten eine {{Glossary("WAI", "WAI")}}-{{Glossary("ARIA", "ARIA")}} Alternative wie [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) oder [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) verwenden.

- `name` {{deprecated_inline}}
  - : Ein Name für das Element. Verwenden Sie stattdessen das [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut.
- `vspace` {{deprecated_inline}}
  - : Die Anzahl der Pixel Leerraum über und unter dem Bild. Verwenden Sie stattdessen die {{cssxref('margin')}}-CSS-Eigenschaft.

## Styling mit CSS

`<img>` ist ein {{Glossary("replaced_elements", "ersetztes Element")}}; es hat standardmäßig einen {{cssxref("display")}}-Wert von `inline`, aber seine Standardabmessungen werden durch die eingebetteten intrinsischen Werte des Bildes definiert, als wäre es `inline-block`. Sie können Eigenschaften wie {{cssxref("border")}}/{{cssxref("border-radius")}}, {{cssxref("padding")}}/{{cssxref("margin")}}, {{cssxref("width")}}, {{cssxref("height")}} usw. auf ein Bild anwenden.

`<img>` hat keine Grundlinie, daher wird es, wenn Bilder in einem Inline-Formatierungskontext mit {{cssxref("vertical-align", "vertical-align: baseline")}} verwendet werden, am unteren Rand des Bildes auf der Textgrundlinie platziert.

Sie können die Eigenschaft {{cssxref("object-position")}} verwenden, um das Bild im Element zu positionieren, und die Eigenschaft {{cssxref("object-fit")}}, um die Größenanpassung des Bildes im Element zu justieren (zum Beispiel, ob das Bild das Element anpassen oder füllen soll, selbst wenn Zuschneiden erforderlich ist).

Je nach Typ kann ein Bild eine intrinsische Breite und Höhe haben. Für einige Bildtypen sind jedoch intrinsische Dimensionen nicht erforderlich. {{Glossary("SVG", "SVG")}}-Bilder beispielsweise haben keine intrinsischen Dimensionen, wenn ihr Wurzel-{{SVGElement("svg")}}-Element keine `width`- oder `height`-Angaben hat.

## Barrierefreiheit

### Bedeutungsvolle alternative Beschreibungen verfassen

Der Wert eines `alt`-Attributs sollte einen klaren und kurzen Textersatz für den Inhalt des Bildes bieten. Es sollte nicht die Existenz des Bildes selbst oder den Dateinamen des Bildes beschreiben. Wenn das `alt`-Attribut absichtlich weggelassen wird, weil das Bild kein textuelles Äquivalent hat, ziehen Sie alternative Methoden in Betracht, um das zu präsentieren, was das Bild zu kommunizieren versucht.

#### Nicht tun

```html example-bad
<img alt="image" src="penguin.jpg" />
```

#### Tun

```html example-good
<img alt="A Penguin on a beach." src="penguin.jpg" />
```

Ein wichtiger Barrierefreiheitstest besteht darin, den `alt`-Attributinhalt zusammen mit dem vorangehenden Textinhalt zu lesen, um zu sehen, ob er dieselbe Bedeutung wie das Bild vermittelt. Zum Beispiel, wenn das Bild dem Satz "Auf meinen Reisen habe ich ein niedliches kleines Tier gesehen:" vorangegangen wäre, könnte das _Nicht tun_-Beispiel von einem Screenreader als "Auf meinen Reisen habe ich ein niedliches kleines Tier gesehen: Bild" gelesen werden, was keinen Sinn ergibt. Das _Tun_-Beispiel könnte von einem Screenreader als "Auf meinen Reisen habe ich ein niedliches kleines Tier gesehen: Ein Pinguin am Strand." gelesen werden, was Sinn ergibt.

Für Bilder, die eine Aktion auslösen sollen, z.B. Bilder, die innerhalb eines {{htmlelement("a")}}- oder {{htmlelement("button")}}-Elements verschachtelt sind, ziehen Sie in Betracht, die ausgelöste Aktion im Wert des `alt`-Attributs zu beschreiben. Zum Beispiel könnten Sie `alt="nächste Seite"` anstelle von `alt="Pfeil rechts"` schreiben. Sie könnten auch erwägen, im `title`-Attribut eine optionale weitere Beschreibung hinzuzufügen; dies könnte von Screenreadern gelesen werden, falls vom Benutzer angefordert.

Wenn ein `alt`-Attribut bei einem Bild nicht vorhanden ist, können einige Screenreader den Dateinamen des Bildes stattdessen ankündigen. Dies kann eine verwirrende Erfahrung sein, wenn der Dateiname den Bildinhalt nicht repräsentiert.

- [Eine Entscheidungshilfe für alt-Attribute • Bilder • WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/images/decision-tree/)
- [Alt-Text: Der ultimative Leitfaden — Axess Lab](https://axesslab.com/alt-texts/)
- [Wie man großartige Alt-Text-Designs erstellt: Eine Einführung | Deque](https://www.deque.com/blog/great-alt-text-introduction/)
- [MDN Verstehen von WCAG, Richtlinie 1.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verstehen des Erfolgskriteriums 1.1.1 | W3C Verstehen von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

### SVG als Bild identifizieren

Aufgrund eines [VoiceOver-Bugs](https://webkit.org/b/216364) kündigt VoiceOver SVG-Bilder nicht korrekt als Bilder an. Fügen Sie [`role="img"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/img_role) zu allen `<img>`-Elementen mit SVG-Quelldateien hinzu, um sicherzustellen, dass unterstützende Technologien das SVG korrekt als Bildinhalt ankündigen.

```html
<img src="mdn.svg" alt="MDN" role="img" />
```

### Das title-Attribut

Das [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)-Attribut ist kein akzeptabler Ersatz für das `alt`-Attribut. Vermeiden Sie außerdem, den Wert des `alt`-Attributs im selben Bild im `title`-Attribut zu duplizieren. Dadurch könnten einige Screenreader dasselbe zweimal ankündigen, was eine verwirrende Erfahrung schafft.

Das `title`-Attribut sollte auch nicht als ergänzende Bildunterschrift verwendet werden, um die `alt`-Beschreibung eines Bildes zu begleiten. Wenn ein Bild eine Bildunterschrift benötigt, verwenden Sie die [`figure`](/de/docs/Web/HTML/Reference/Elements/figure)- und [`figcaption`](/de/docs/Web/HTML/Reference/Elements/figcaption)-Elemente.

Der Wert des `title`-Attributs wird dem Benutzer normalerweise als Tooltip präsentiert, der kurz nach dem Anhalten des Cursors über dem Bild angezeigt wird. Während dies _zusätzliche_ Informationen für den Benutzer bereitstellen kann, sollten Sie nicht davon ausgehen, dass der Benutzer es jemals sehen wird: Der Benutzer hat möglicherweise nur eine Tastatur oder einen Touchscreen. Wenn Sie Informationen haben, die besonders wichtig oder wertvoll für den Benutzer sind, präsentieren Sie diese inline mit einer der oben erwähnten Methoden, anstatt `title` zu verwenden.

- [Die Verwendung des HTML-title-Attributs – aktualisiert | Vispero](https://vispero.com/resources/using-the-html-title-attribute-updated/)

## Beispiele

### Alternativer Text

Das folgende Beispiel bettet ein Bild in die Seite ein und enthält einen alternativen Text für die Barrierefreiheit.

```html
<img src="/shared-assets/images/examples/favicon144.png" alt="MDN" />
```

{{ EmbedLiveSample('Alternative_text', '100%', '160') }}

### Bildlink

Dieses Beispiel baut auf dem vorherigen auf und zeigt, wie man das Bild in einen Link verwandelt. Dazu müssen Sie das `<img>`-Tag im {{HTMLElement("a")}} verschachteln. Der alternative Text sollte die Ressource beschreiben, auf die der Link zeigt, als ob Sie einen Textlink benutzen würden.

```html
<a href="https://developer.mozilla.org">
  <img
    src="/shared-assets/images/examples/favicon144.png"
    alt="Visit the MDN site" />
</a>
```

{{ EmbedLiveSample('Image_link', '100%', '160') }}

### Nutzung des srcset-Attributs

In diesem Beispiel fügen wir ein `srcset`-Attribut mit einem Verweis auf eine hochauflösende Version des Logos hinzu; dieses wird anstelle des `src`-Bildes auf hochauflösenden Geräten geladen. Das im `src`-Attribut referenzierte Bild wird in {{Glossary("User_agent", "User Agents")}}, die `srcset` unterstützen, als `1x`-Kandidat gezählt.

```html
<img
  src="/shared-assets/images/examples/favicon72.png"
  alt="MDN"
  srcset="/shared-assets/images/examples/favicon144.png 2x" />
```

{{EmbedLiveSample("Using_the_srcset_attribute", "100%", "160")}}

### Nutzung der Attribute srcset und sizes

Das `src`-Attribut wird in {{Glossary("User_agent", "User Agents")}}, die `srcset` unterstützen, ignoriert, wenn `w`-Beschreiber enthalten sind. Wenn die `(width <= 600px)`-Medienbedingung übereinstimmt, wird das 200 Pixel breite Bild geladen (es ist dasjenige, das `200px` am nächsten kommt), andernfalls wird das andere Bild geladen.

```html
<img
  src="clock-demo-200px.png"
  alt="The time is 12:45."
  srcset="clock-demo-200px.png 200w, clock-demo-400px.png 400w"
  sizes="(width <= 600px) 200px, 50vw" />
```

{{EmbedLiveSample("Using_the_srcset_and_sizes_attributes", "100%", 350)}}

> [!NOTE]
> Um das Größenanpassen in Aktion zu sehen, {{LiveSampleLink('Using_the_srcset_and_sizes_attributes', 'sehen Sie sich das Beispiel auf einer separaten Seite an')}}, damit Sie den Inhaltsbereich tatsächlich vergrößern können.

## Sicherheits- und Datenschutzbedenken

Obwohl `<img>`-Elemente unschuldige Verwendungszwecke haben, können sie unerwünschte Konsequenzen für die Sicherheit und den Datenschutz der Benutzer haben. Weitere Informationen und Gegenmaßnahmen finden Sie unter [Referer-Header: Datenschutz- und Sicherheitsbedenken](/de/docs/Web/Privacy/Guides/Referer_header:_privacy_and_security_concerns).

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
          >Fließendes Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Schriftsatzinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#embedded_content"
          >eingebetteter Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#palpable_content"
          >fühlbarer Inhalt</a
        >. Wenn das Element ein <code>usemap</code>-Attribut hat, ist es auch Teil
        der interaktiven Inhaltskategorie.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "void-Element")}}.</td>
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
- [Leitfaden zu Responsiven Bildern](/de/docs/Web/HTML/Guides/Responsive_images)
