---
title: "`<img>` HTML-Bildeinbettungselement"
short-title: <img>
slug: Web/HTML/Reference/Elements/img
l10n:
  sourceCommit: 44a5fa2aace490e0114349d9d683675b2f5cacce
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

- Das `src`-Attribut enthält den Pfad zu dem Bild, das Sie einbetten möchten. Es ist nicht zwingend erforderlich, wenn das [srcset](/de/docs/Web/API/HTMLImageElement/srcset)-Attribut verfügbar ist. Es muss jedoch mindestens eines der `src`- oder `srcset`-Attribute angegeben werden.
- Das `alt`-Attribut enthält einen textuellen Ersatz für das Bild, der verpflichtend ist und **unglaublich nützlich** für die Barrierefreiheit ist — Bildschirmleser lesen den Wert des Attributs ihren Benutzern vor, damit sie wissen, was das Bild bedeutet. Der Alternativtext wird auch auf der Seite angezeigt, wenn das Bild aus irgendeinem Grund nicht geladen werden kann: zum Beispiel bei Netzwerkfehlern, Inhaltsblockierung oder Linkverfall.

Es gibt viele weitere Attribute, um verschiedene Zwecke zu erfüllen:

- [Referrer](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy)/{{Glossary("CORS", "CORS")}}-Steuerung für Sicherheit und Privatsphäre: siehe [`crossorigin`](#crossorigin) und [`referrerpolicy`](#referrerpolicy).
- Verwenden Sie sowohl [`width`](#width) als auch [`height`](#height), um die intrinsische Größe des Bildes festzulegen, sodass es vor dem Laden Platz einnimmt, um Layoutverschiebungen zu verringern.
- Hinweise für responsive Bilder mit [`sizes`](#sizes) und [`srcset`](#srcset) (siehe auch das {{htmlelement("picture")}}-Element und unser [Responsive Images](/de/docs/Web/HTML/Guides/Responsive_images)-Tutorial).

## Unterstützte Bildformate

Der HTML-Standard listet nicht auf, welche Bildformate unterstützt werden sollen, sodass {{Glossary("user_agent", "User Agents")}} unterschiedliche Formate unterstützen können.

> [!NOTE]
> Der [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types) bietet umfassende Informationen zu Bildformaten und deren Unterstützung in Webbrowsern. Dieser Abschnitt ist nur eine Zusammenfassung!

Die am häufigsten im Web verwendeten Bilddateiformate sind:

- [APNG (Animated Portable Network Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#apng_animated_portable_network_graphics) — Eine gute Wahl für verlustfreie Animationssequenzen (GIF ist weniger performant).
- [AVIF (AV1 Image File Format)](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) — Eine gute Wahl für sowohl Bilder als auch animierte Bilder aufgrund der hohen Leistung.
- [GIF (Graphics Interchange Format)](/de/docs/Web/Media/Guides/Formats/Image_types#gif_graphics_interchange_format) — Eine gute Wahl für _einfache_ Bilder und Animationen.
- [JPEG (Joint Photographic Expert Group image)](/de/docs/Web/Media/Guides/Formats/Image_types#jpeg_joint_photographic_experts_group_image) — Eine gute Wahl für verlustbehaftete Kompression von Standbildern (derzeit am beliebtesten).
- [PNG (Portable Network Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#png_portable_network_graphics) — Eine gute Wahl für verlustfreie Kompression von Standbildern (etwas bessere Qualität als JPEG).
- [SVG (Scalable Vector Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#svg_scalable_vector_graphics) — Vektor-Bildformat. Verwenden Sie es für Bilder, die bei unterschiedlicher Größe genau gezeichnet werden müssen.
- [WebP (Web Picture format)](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) — Hervorragende Wahl für sowohl Bilder als auch animierte Bilder.

Formate wie [WebP](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) und [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) werden empfohlen, da sie für sowohl Stand- als auch animierte Bilder viel besser als PNG, JPEG, GIF sind.

SVG bleibt das empfohlene Format für Bilder, die bei unterschiedlichen Größen genau gezeichnet werden müssen.

## Ladefehler bei Bildern

Wenn ein Fehler beim Laden oder Rendern eines Bildes auftritt und ein `onerror`-Ereignishandler für das [`error`](/de/docs/Web/API/HTMLElement/error_event)-Ereignis gesetzt wurde, wird dieser Ereignishandler aufgerufen. Dies kann in verschiedenen Situationen geschehen, einschließlich:

- Die `src`- oder `srcset`-Attribute sind leer (`""`) oder `null`.
- Die `src` {{Glossary("URL", "URL")}} ist dieselbe wie die URL der Seite, auf der der Nutzer sich gerade befindet.
- Das Bild ist auf eine Weise beschädigt, die das Laden verhindert.
- Die Metadaten des Bildes sind so beschädigt, dass es unmöglich ist, seine Dimensionen zu ermitteln, und es wurden keine Dimensionen in den Attributen des `<img>`-Elements angegeben.
- Das Bild ist in einem Format, das vom {{Glossary("user_agent", "User Agent")}} nicht unterstützt wird.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `alt`
  - : Definiert Text, der das Bild auf der Seite ersetzen kann.

    > [!NOTE]
    > Browser zeigen nicht immer Bilder an. Es gibt eine Reihe von Situationen, in denen ein Browser möglicherweise keine Bilder anzeigt, wie zum Beispiel:
    >
    > - Nicht-visuelle Browser (wie diejenigen, die von Personen mit Sehbehinderungen verwendet werden)
    > - Der Nutzer entscheidet sich, keine Bilder anzuzeigen (zum Bandbreitensparen, aus Datenschutzgründen)
    > - Das Bild ist ungültig oder ein [nicht unterstützter Typ](#unterstützte_bildformate)
    >
    > In diesen Fällen kann der Browser das Bild durch den Text im `alt`-Attribut des Elements ersetzen. Aus diesen und anderen Gründen sollten Sie einen nützlichen Wert für `alt` immer dann angeben, wenn möglich.

    Wenn dieses Attribut auf einen leeren String (`alt=""`) gesetzt ist, bedeutet das, dass dieses Bild _kein_ wesentlicher Teil des Inhalts ist (es ist Dekoration oder ein Zählpixel), und dass nicht-visuelle Browser es möglicherweise vom {{Glossary("Engine/Rendering", "Rendern")}} ausschließen dürfen. Visuelle Browser werden auch das kaputte Bildsymbol ausblenden, wenn das `alt`-Attribut leer ist und das Bild nicht angezeigt werden konnte.

    Dieses Attribut wird auch verwendet, wenn das Bild in Text kopiert und eingefügt oder ein verknüpftes Bild als Lesezeichen gespeichert wird.

- `attributionsrc` {{deprecated_inline}} {{non-standard_inline}}
  - : Gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header zusammen mit der Bildanfrage sendet.

    Auf der Serverseite wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Headers in der Antwort auszulösen, um eine bildbasierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#html-based_event_sources) oder einen Attribution-Trigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#html-based_attribution_triggers) zu registrieren, jeweils. Welcher Antwortheader zurückgesendet werden sollte, hängt vom Wert des `Attribution-Reporting-Eligible`-Headers ab, der die Registrierung ausgelöst hat.

    Das entsprechende Quell- oder Ereignis für den Trigger wird ausgelöst, sobald der Browser die Antwort mit der Bilddatei erhält.

    > [!NOTE]
    > Weitere Informationen finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

    Es gibt zwei Versionen dieses Attributs, die Sie einstellen können:
    - Boolean, d.h. nur der `attributionsrc`-Name. Dies gibt an, dass Sie möchten, dass der {{httpheader("Attribution-Reporting-Eligible")}}-Header an denselben Server gesendet wird, zu dem das `src`-Attribut zeigt. Dies ist in Ordnung, wenn Sie die Registrierung der Quelle oder des Triggers auf demselben Server abwickeln. Wenn ein Attribution-Trigger registriert wird, ist diese Eigenschaft optional und ein Boolean-Wert wird verwendet, wenn sie weggelassen wird.
    - Wert, der eine oder mehrere URLs enthält, zum Beispiel:

    ```html
    <img
      src="image-file.png"
      alt="My image file description"
      attributionsrc="https://a.example/register-source
                         https://b.example/register-source" />
    ```

    Dies ist nützlich in Fällen, in denen die angeforderte Ressource nicht auf einem von Ihnen kontrollierten Server liegt oder Sie die Registrierung der Attributionsquelle auf einem anderen Server abwickeln möchten. In diesem Fall können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcenanfrage erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header an die in `attributionSrc` angegebenen URL(s) zusätzlich zum Ressourcenursprung gesendet. Diese URLs können dann mit einem entsprechenden {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header antworten, um die Registrierung abzuschließen.

    > [!NOTE]
    > Durch Angabe mehrerer URLs können mehrere Attributionsquellen auf derselben Funktion registriert werden. Sie könnten beispielsweise verschiedene Kampagnen haben, deren Erfolg Sie messen möchten, und die das Generieren verschiedener Berichte zu unterschiedlichen Daten involvieren.

- [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)
  - : Gibt an, ob das Abrufen des Bildes unter Verwendung einer {{Glossary("CORS", "CORS")}}-Anfrage erfolgen muss. Bilddaten, die von einem [CORS-aktivierten Bild](/de/docs/Web/HTML/How_to/CORS_enabled_image) aus einer CORS-Anfrage zurückgegeben werden, können im {{HTMLElement("canvas")}}-Element wiederverwendet werden, ohne als "[verunreinigt](/de/docs/Web/HTML/How_to/CORS_enabled_image#security_and_tainted_canvases)" markiert zu sein.

    Wenn das `crossorigin`-Attribut _nicht_ angegeben ist, wird eine Nicht-CORS-Anfrage gesendet (ohne den {{httpheader("Origin")}}-Request-Header), und der Browser markiert das Bild als verunreinigt und schränkt den Zugriff auf dessen Bilddaten ein, wodurch deren Verwendung in {{HTMLElement("canvas")}}-Elementen verhindert wird.

    Wenn das `crossorigin`-Attribut _angegeben_ ist, wird eine CORS-Anfrage gesendet (mit dem {{httpheader("Origin")}}-Request-Header); aber wenn der Server nicht die Erlaubnis gibt, durch die Ursprungsseite auf die Bilddaten mit CORS zuzugreifen (indem er keine {{httpheader("Access-Control-Allow-Origin")}}-Response-Header sendet, oder indem er die Ursprungsseite nicht in einem solchen Header aufnimmt, den er sendet), blockiert der Browser das Laden des Bildes und protokolliert einen CORS-Fehler in der Entwicklertools-Konsole.

    Zulässige Werte:
    - `anonymous`
      - : Eine CORS-Anfrage wird gesendet, ohne Berechtigungsnachweise (d.h. keine {{Glossary("cookie", "Cookies")}}, keine [X.509-Zertifikate](https://datatracker.ietf.org/doc/html/rfc5280) oder kein {{httpheader("Authorization")}}-Request-Header).
    - `use-credentials`
      - : Die CORS-Anfrage wird mit eingeschlossenen Berechtigungsnachweisen gesendet (d.h. Cookies, X.509-Zertifikaten und dem `Authorization`-Anfrageheader). Wenn der Server nicht explizit angibt, dass Berechtigungsnachweise mit der Ursprungsseite geteilt werden sollen (indem er den `Access-Control-Allow-Credentials: true`-Antwortheader sendet), markiert der Browser das Bild als verunreinigt und schränkt den Zugriff auf dessen Bilddaten ein.

    Wenn das Attribut einen ungültigen Wert hat, behandeln Browser es so, als ob der Wert `anonymous` verwendet wird. Siehe [CORS-Einstellungen-Attribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin) für zusätzliche Informationen.

- `decoding`
  - : Dieses Attribut bietet einen Hinweis für den Browser, ob er die Bild-Dekodierung zusammen mit dem Rendern des anderen DOM-Inhalts in einem einzigen Präsentationsschritt, der "korrekter" aussieht (`sync`), oder zuerst den anderen DOM-Inhalt rendern und präsentieren und dann das Bild dekodieren und später präsentieren soll (`async`). In der Praxis bedeutet `async`, dass das nächste Paint nicht darauf wartet, dass das Bild dekodiert wird.

    Es ist oft schwierig, spürbare Effekte beim Verwenden der `decoding`-Eigenschaft auf statischen `<img>`-Elementen zu erkennen. Sie werden wahrscheinlich zunächst als leere Bilder gerendert, während die Bilddateien (entweder aus dem Netzwerk oder aus dem Cache) abgerufen und dann ohnehin unabhängig behandelt werden, sodass das "Syncen" von Inhaltsaktualisierungen weniger auffällt. Das Blockieren des Renderns, während die Dekodierung stattfindet, kann jedoch gemessen werden - sogar wenn es schwierig ist, es mit dem menschlichen Auge zu beobachten. Siehe [What does the image decoding attribute actually do?](https://www.tunetheweb.com/blog/what-does-the-image-decoding-attribute-actually-do/) für eine detailliertere Analyse (tunetheweb.com, 2023).

    Die Verwendung unterschiedlicher `decoding`-Typen kann zu spürbareren Unterschieden führen, wenn `<img>`-Elemente über JavaScript dynamisch in das DOM eingefügt werden – siehe [`HTMLImageElement.decoding`](/de/docs/Web/API/HTMLImageElement/decoding) für weitere Details.

    Zulässige Werte:
    - `sync`
      - : Das Bild synchron dekodieren zusammen mit dem Rendern des anderen DOM-Inhalts und alles zusammen präsentieren.
    - `async`
      - : Das Bild asynchron dekodieren, nach dem Rendern und Präsentieren des anderen DOM-Inhalts.
    - `auto`
      - : Keine Präferenz für den Dekodierungsmodus; der Browser entscheidet, was für den Benutzer am besten ist. Dies ist der Standardwert.

- [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming)
  - : Markiert das Bild für die Beobachtung durch die [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)-API. Der angegebene Wert wird zu einem Bezeichner für das beobachtete Bild-Element. Siehe auch die Seite zum [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming)-Attribut.

- [`fetchpriority`](/de/docs/Web/HTML/Reference/Attributes/fetchpriority)
  - : Gibt einen Hinweis auf die relative Priorität beim Abrufen des Bildes. Zulässige Werte:
    - `high`
      - : Das Bild mit hoher Priorität relativ zu anderen Bildern abrufen.
    - `low`
      - : Das Bild mit niedriger Priorität relativ zu anderen Bildern abrufen.
    - `auto`
      - : Keine Präferenz für die Abrufpriorität setzen.
        Dies ist der Standardwert.
        Er wird verwendet, wenn kein Wert oder ein ungültiger Wert gesetzt wird.
- `height`
  - : Die intrinsische Höhe des Bildes, in Pixeln. Muss eine Ganzzahl ohne Einheit sein.

    > [!NOTE]
    > Durch das Einschließen von `height` und [`width`](#width) kann das {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Bildes vom Browser vor dem Laden des Bildes berechnet werden. Dieses Seitenverhältnis wird verwendet, um den Platz zu reservieren, der zum Anzeigen des Bildes benötigt wird, um eine Layoutverschiebung zu reduzieren oder sogar zu verhindern, wenn das Bild heruntergeladen und auf den Bildschirm gezeichnet wird. Eine Verringerung der Layoutverschiebung ist ein wesentlicher Bestandteil einer guten Benutzererfahrung und der Web-Performance.

- `ismap`
  - : Dieses Boolean-Attribut gibt an, dass das Bild Teil einer [serverseitigen Map](https://en.wikipedia.org/wiki/Image_map#Server-side) ist. In diesem Fall werden die Koordinaten, an denen der Benutzer auf das Bild geklickt hat, an den Server gesendet.

    > [!NOTE]
    > Dieses Attribut ist nur zulässig, wenn das `<img>`-Element ein Nachfahre eines {{htmlelement("a")}}-Elements mit einem gültigen [`href`](/de/docs/Web/HTML/Reference/Elements/a#href)-Attribut ist. Dies gibt Benutzern ohne Zeigegeräte eine alternative Zieldestination.

- `loading`
  - : Gibt an, wie der Browser das Bild laden soll:
    - `eager`
      - : Lädt das Bild sofort, unabhängig davon, ob das Bild derzeit im {{Glossary("visual_viewport", "visuellen Ansichtsfenster")}} ist (dies ist der Standardwert).
    - `lazy`
      - : Verzichtet darauf, das Bild zu laden, bis es eine berechnete Entfernung vom Ansichtsfenster erreicht, wie vom Browser definiert.

        Lazy Loading vermeidet das Netzwerk- und Speicherbandbreite, die erforderlich ist, um das Bild zu verarbeiten, bis es mit ziemlicher Sicherheit benötigt wird. Dies verbessert in den meisten typischen Anwendungsfällen die Leistung.

        Während explizite [`width`](#width) und [`height`](#height)-Attribute für alle Bilder empfohlen werden, um Layoutverschiebungen zu vermeiden, sind sie besonders wichtig für lazy-geladene Bilder. Lazy-geladene Bilder werden niemals geladen, wenn sie keinen sichtbaren Teil eines Elements überschneiden, selbst wenn dies das ändern würde, da nicht geladene Bilder eine `width` und `height` von `0` haben. Es schafft eine noch störendere Benutzererfahrung, wenn der im Ansichtsfenster sichtbare Inhalt beim Lesen mittendrin verschoben wird.

        Lazy-geladene Bilder, die sich im visuellem Ansichtsfenster befinden, sind möglicherweise noch nicht sichtbar, wenn das [`load`](/de/docs/Web/API/Window/load_event)-Ereignis des Fensters ausgelöst wird. Dies liegt daran, dass das Ereignis basierend auf eager-geladenen Bildern ausgelöst wird – lazy-geladene Bilder werden nicht berücksichtigt, auch wenn sie sich bei der initialen Seitenlade im visuellem Ansichtsfenster befinden.

        Das Laden wird nur verzögert, wenn JavaScript aktiviert ist. Dies ist eine Maßnahme zum Schutz vor Nachverfolgung, da es, wenn ein Benutzeragent Lazy-Loading unterstütze, wenn Scripting deaktiviert ist, dennoch möglich wäre, die ungefähre Scrollposition eines Benutzers während einer Sitzung zu verfolgen, indem Bilder strategisch in das Markup einer Seite platziert werden, sodass ein Server verfolgen kann, wie viele Bilder angefordert werden und wann.

- `referrerpolicy`
  - : Ein String, der angibt, welcher Referrer beim Abrufen der Ressource verwendet werden soll:
    - `no-referrer`: Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}}-Header wird nicht an {{Glossary("origin", "Origin")}}s ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`: Der gesendete Referrer wird auf den Origin der verweisenden Seite beschränkt: sein [Schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`: Der an andere Origins gesendete Referrer wird auf das Schema, den Host und den Port beschränkt. Navigationen im gleichen Origin enthalten weiterhin den Pfad.
    - `same-origin`: Ein Referrer wird für {{Glossary("Same-origin_policy", "gleiche Origin")}} gesendet, aber Cross-Origin-Anfragen enthalten keine Referrer-Informationen.
    - `strict-origin`: Der Origin des Dokuments wird nur als Referrer gesendet, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), jedoch nicht an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard): Eine vollständige URL wird bei der Durchführung einer gleichen Origin-Anfrage gesendet, nur der Origin wird gesendet, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), und kein Header wird an ein weniger sicheres Ziel (HTTPS→HTTP) gesendet.
    - `unsafe-url`: Der Referrer enthält den Origin _und_ den Pfad (aber nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder [Benutzername](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Origin und Pfade von TLS-geschützten Ressourcen an unsichere Origins weitergibt.

- `sizes`
  - : Ein oder mehrere durch Kommas getrennte Werte, die Quellgrößen oder das `auto`-Schlüsselwort sein können.
    Die Spezifikation erfordert, dass das `sizes`-Attribut nur vorhanden ist, wenn `srcset` Breitenbeschreibungen verwendet.
    - **Quellgröße**
      - : Eine **Quellgröße** besteht aus:
        1. Einer [Medienbedingung](/de/docs/Web/CSS/Guides/Media_queries/Using#syntax), die für das letzte Element in der Liste weggelassen wird.
        2. Einem Quellgrößenwert.

        Zum Beispiel schlägt die folgende Quellgröße die Verwendung einer `1000px`-breiten Bildquelle vor, wenn die _Ansichtsfenster_-Breite 500px oder weniger beträgt.

        ```css
        (width <= 500px) 1000px
        ```

        Medienbedingungen beschreiben Eigenschaften des _{{Glossary("viewport", "Ansichtsfensters")}}_, nicht des _Bilds_.
        Da ein Quellgrößen-Beschreiber die Breite spezifiziert, die für das Bild während des Layouts verwendet werden soll, basiert die Medienbedingung typischerweise (aber nicht zwingend) auf dem {{cssxref("@media/width")}}.

        Quellgrößenwerte spezifizieren die beabsichtigte Anzeigebreite des Bildes.
        {{Glossary("User_agent", "User Agents")}} verwenden die aktuelle Quellgröße, um eine der vom `srcset`-Attribut bereitgestellten Quellen auszuwählen, wenn diese Quellen mit Breiten (`w`)-Beschreibern beschrieben werden.
        Der im sizes definierte `w`-Wert bestimmt die Standardlayoutbreite des Bildes.
        In Abwesenheit von {{Glossary("CSS", "CSS")}} rendert der Browser das Bild in dieser Größe, unabhängig von den physischen Pixeldimensionen der heruntergeladenen Datei.

        Ein Quellgrößenwert kann jede nicht-negative [Länge](/de/docs/Web/CSS/Reference/Values/length) sein.
        Er darf keine CSS-Funktionen verwenden, außer den [Mathe-Funktionen](/de/docs/Web/CSS/Reference/Values/Functions#math_functions).
        Einheiten werden auf dieselbe Weise wie [Medienabfragen](/de/docs/Web/CSS/Guides/Media_queries) interpretiert, was bedeutet, dass alle relativen Längeneinheiten relativ zur Dokumentenwurzel und nicht zum `<img>`-Element sind. Zum Beispiel ist ein `em`-Wert relativ zur Schriftgröße der Wurzel und nicht zur Schriftgröße des Bildes. [Prozentwerte](/de/docs/Web/CSS/Reference/Values/percentage) sind nicht zulässig. Wenn das `sizes`-Attribut nicht vorhanden ist, hat es einen Standardwert von `100vw` (die Ansichtsfensterbreite).

    - `auto`
      - : Das `auto`-Schlüsselwort besagt, dass der Browser die erwartete Layoutbreite des Elements zur Auswahl des anzuzeigenden Bildes verwenden soll.
        Das heißt, er sollten die [konkrete Größe](/de/docs/Web/CSS/Reference/Values/image#concrete_size) des Bildes verwenden, die nach dem Layout aus HTML und CSS berechnet wurde.
        Dies ist nur gültig, wenn es mit `loading="lazy"` kombiniert wird, da die Seite voraussichtlich bereits CSS und andere Layoutinformationen haben sollte, bis das Bild geladen wird.

        Durch die Verwendung von `auto` ersparen Sie sich die Angabe Ihrer Layout-Medienbedingungen zweimal: einmal für das Layout und einmal für die Auswahl eines geeigneten Bildes zum Abrufen und Anzeigen.

        Wenn `auto` nicht aufgelöst werden kann — sei es, weil der Browser es nicht unterstützt oder weil das Bild noch keine Layoutgröße hat —, fällt der Browser auf die _Quellgrößen_ in der Liste zurück, um die Breite zu bestimmen, dann auf `width`/`height`-Attribute, die am Element definiert sind, und schließlich auf die Standard-Intrinsische Größe für `<img>`-Elemente, die im User Agent Stylesheet definiert ist (300px mal 150px).

        Für eine bessere Abwärtskompatibilität mit Browsern, die `auto` nicht unterstützen, können Sie fallbacks Größen nach `auto` im `sizes`-Attribut einschließen.
        Sie sollten auch die `width` und `height`-Attribute des Elements auf die intrinsischen Dimensionen des größten Bildes in Ihrem `srcset` setzen, damit der Browser den Platz unter Verwendung des richtigen Seitenverhältnisses reservieren kann:

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
  - : Die Bild- {{Glossary("URL", "URL")}}. Mindestens eines von `src` und [`srcset`](#srcset) ist für ein `<img>`-Element erforderlich. Wenn [`srcset`](#srcset) angegeben ist, wird `src` auf zwei Weisen verwendet:
    - als Fallback für Browser, die `srcset` nicht unterstützen.
    - wenn `srcset` den "x"-Beschreiber verwendet, dann ist `src` gleichbedeutend mit einer Quelle mit dem Dichtebeschreiber `1x`; das heißt, das durch `src` angegebene Bild wird auf Bildschirmen mit niedriger Dichte verwendet (wie typischen 72-DPI- oder 96-DPI-Displays).

- `srcset`
  - : Ein oder mehrere durch Kommata getrennte Zeichenfolgen, die mögliche Bildquellen für den {{Glossary("user_agent", "User Agent")}} angeben, die verwendet werden sollen.

    Jede Zeichenfolge besteht aus:
    1. Einer {{Glossary("URL", "URL")}} zu einem Bild
    2. Wahlweise gefolgt von Leerzeichen und einer der folgenden:
       - Einem Breitenbeschreiber (eine positive ganze Zahl direkt gefolgt von `w`). Er _muss_ die intrinsische Breite des referenzierten Bildes entsprechen. Der Breitenbeschreiber wird durch die im `sizes`-Attribut angegebene Quellgröße geteilt, um die effektive Pixeldichte zu berechnen. Zum Beispiel, um eine Bildressource zur Verfügung zu stellen, die verwendet werden soll, wenn der Renderer ein 450 Pixel breites Bild benötigt, verwenden Sie den Breitenbeschreiber `450w`. Wenn ein `srcset` "w"-Beschreiber enthält, verwenden die Browser diese Beschreiber zusammen mit dem `sizes`-Attribut, um eine Ressource auszuwählen.
       - Einem Pixeldichtebeschreiber (eine positive Fließkommazahl direkt gefolgt von `x`). Er gibt die Bedingung an, unter der die entsprechende Bildressource als Pixeldichte des Displays verwendet werden soll. Zum Beispiel, um eine Bildressource zur Verfügung zu stellen, die verwendet werden soll, wenn die Pixeldichte doppelt so hoch wie die Standarddichte ist, verwenden Sie den Pixeldichtebeschreiber `2x` oder `2.0x`.

    Wenn kein Beschreiber angegeben ist, wird der Quelle der Standardbeschreiber `1x` zugewiesen. Es ist falsch, Breitenbeschreiber und Pixeldichtebeschreiber im selben `srcset`-Attribut zu mischen. Doppelte Beschreiber (z.B. zwei Quellen im gleichen `srcset`, die beide mit `2x` beschrieben werden) sind ebenfalls ungültig.

    Leerzeichen, außer den Leerzeichen, die die URL und den entsprechenden Bedingungsbeschreiber trennen, werden ignoriert; dies umfasst sowohl führende als auch nachgestellte Leerzeichen sowie Leerzeichen vor oder nach jedem Komma. Wenn jedoch ein Bildkandidat-Zeichenfolgen keine Beschreiber und keine Leerzeichen nach der URL enthält, muss die folgende Bildkandidat-Zeichenfolge, falls vorhanden, mit einem oder mehreren Leerzeichen beginnen, andernfalls wird das Komma als Teil der URL angesehen.

    Wenn das `srcset` des `<img>`-Elements `x`-Beschreiber verwendet, betrachten Browser auch die URL im `src`-Attribut (wenn vorhanden) als Kandidaten und weisen dieser einen Standardbeschreiber von `1x` zu. Andererseits, wenn das `srcset`-Attribut Breitenbeschreiber verwendet, wird `src` nicht berücksichtigt, und das `sizes`-Attribut wird stattdessen verwendet.

    Der User Agent wählt eine der verfügbaren Quellen nach eigenem Ermessen. Dies ermöglicht ihnen erhebliche Freiheiten, um ihre Auswahl auf Grundlage von Dingen wie Nutzervorlieben oder {{Glossary("bandwidth", "Bandbreiten")}}bedingungen abzustimmen. Siehe unser [Responsive Images](/de/docs/Web/HTML/Guides/Responsive_images)-Tutorial für ein Beispiel.

- `width`
  - : Die intrinsische Breite des Bildes in Pixeln. Muss eine Ganzzahl ohne Einheit sein.
- `usemap`
  - : Die teilweise {{Glossary("URL", "URL")}} (beginnend mit `#`) einer [Bildkarte](/de/docs/Web/HTML/Reference/Elements/map), die mit dem Element verknüpft ist.

    > [!NOTE]
    > Sie können dieses Attribut nicht verwenden, wenn sich das `<img>`-Element innerhalb eines {{htmlelement("a")}}- oder {{HTMLElement("button")}}-Elements befindet.

### Veraltete Attribute

- `align` {{deprecated_inline}}
  - : Richtet das Bild mit seinem umgebenden Kontext aus. Verwenden Sie stattdessen die {{cssxref('float')}} und/oder {{cssxref('vertical-align')}}- {{Glossary("CSS", "CSS")}}-Eigenschaften anstelle dieses Attributs. Zulässige Werte:
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
  - : Die Breite eines Rahmens um das Bild. Verwenden Sie stattdessen die {{cssxref('border')}}- {{Glossary("CSS", "CSS")}}-Eigenschaft.
- `hspace` {{deprecated_inline}}
  - : Die Anzahl der Pixel von Leerraum links und rechts des Bildes. Verwenden Sie stattdessen die {{cssxref('margin')}}-CSS-Eigenschaft.
- `longdesc` {{deprecated_inline}}
  - : Ein Link zu einer detaillierteren Beschreibung des Bildes. Mögliche Werte sind eine {{Glossary("URL", "URL")}} oder eine Element- [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id).

    > [!NOTE]
    > Dieses Attribut wird in der [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/obsolete.html#element-attrdef-img-longdesc) als veraltet betrachtet. Es hat eine ungewisse Zukunft; Autoren sollten eine {{Glossary("WAI", "WAI")}}-{{Glossary("ARIA", "ARIA")}}-Alternative wie [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) oder [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) verwenden.

- `name` {{deprecated_inline}}
  - : Ein Name für das Element. Verwenden Sie stattdessen das [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut.
- `vspace` {{deprecated_inline}}
  - : Die Anzahl der Pixel von Leerraum über und unter dem Bild. Verwenden Sie stattdessen die {{cssxref('margin')}}-CSS-Eigenschaft.

## Gestaltung mit CSS

`<img>` ist ein {{Glossary("replaced_elements", "ersetztes Element")}}; es hat standardmäßig einen {{cssxref("display")}}-Wert von `inline`, aber seine Standardabmessungen werden durch die intrinsischen Werte des eingebetteten Bildes definiert, als wäre es `inline-block`. Sie können Eigenschaften wie {{cssxref("border")}}/{{cssxref("border-radius")}}, {{cssxref("padding")}}/{{cssxref("margin")}}, {{cssxref("width")}}, {{cssxref("height")}}, etc. auf ein Bild setzen.

`<img>` hat keine Grundlinie, sodass, wenn Bilder in einem Inline-Formatierungskontext mit {{cssxref("vertical-align", "vertical-align: baseline")}} verwendet werden, der untere Rand des Bildes auf der Textgrundlinie platziert wird.

Sie können die {{cssxref("object-position")}}-Eigenschaft verwenden, um das Bild innerhalb des Elementrahmens zu positionieren, und die {{cssxref("object-fit")}}-Eigenschaft, um die Größenanpassung des Bildes innerhalb des Rahmens anzupassen (zum Beispiel, ob das Bild den Rahmen ausfüllen oder anpassen soll, auch wenn Abschneiden erforderlich ist).

Abhängig von seinem Typ kann ein Bild über eine intrinsische Breite und Höhe verfügen. Für einige Bildtypen sind jedoch keine intrinsischen Abmessungen erforderlich. {{Glossary("SVG", "SVG")}}-Bilder haben beispielsweise keine intrinsischen Abmessungen, wenn ihr Wurzel- {{SVGElement("svg")}}-Element keine `width` oder `height` darauf gesetzt hat.

## Barrierefreiheit

### Bedeutungsvolle alternative Beschreibungen verfassen

Der Wert eines `alt`-Attributs sollte einen klaren und prägnanten Textersatz für den Inhalt des Bildes liefern. Es sollte nicht das Vorhandensein des Bildes selbst oder den Dateinamen des Bildes beschreiben. Wenn das `alt`-Attribut absichtlich weggelassen wurde, weil das Bild kein textuelles Äquivalent hat, ziehen Sie alternative Methoden in Betracht, um das zu präsentieren, was das Bild zu vermitteln versucht.

#### Nicht tun

```html example-bad
<img alt="image" src="penguin.jpg" />
```

#### Tun

```html example-good
<img alt="A Penguin on a beach." src="penguin.jpg" />
```

Ein wichtiger Barrierefreiheitstest besteht darin, den Inhalt des `alt`-Attributs zusammen mit dem vorhergehenden Textinhalt zu lesen, um zu sehen, ob es dieselbe Bedeutung wie das Bild vermittelt. Zum Beispiel, wenn das Bild dem Satz "Auf meinen Reisen habe ich ein niedliches kleines Tier gesehen:" vorausging, könnte das _Nicht tun_-Beispiel von einem Bildschirmleser vorgelesen werden als "Auf meinen Reisen, ich habe ein kleines süßes Tier gesehen: Bild", was keinen Sinn ergibt. Das _Tun_-Beispiel könnte von einem Bildschirmleser vorgelesen werden als "Auf meinen Reisen, ich habe ein niedliches kleines Tier gesehen: Ein Pinguin am Strand.", was Sinn ergibt.

Für Bilder, die eine Aktion auslösen, z.B. Bilder, die in ein {{htmlelement("a")}}- oder {{htmlelement("button")}}-Element eingebettet sind, sollten Sie erwägen, die ausgelöste Aktion im Wert des `alt`-Attributs zu beschreiben. Zum Beispiel könnten Sie `alt="nächste Seite"` anstelle von `alt="Pfeil rechts"` schreiben. Sie könnten auch in Betracht ziehen, eine optionale weitere Beschreibung in ein `title`-Attribut hinzuzufügen; dies kann von Bildschirmlesern auf Anfrage des Benutzers vorgelesen werden.

Wenn ein `alt`-Attribut bei einem Bild nicht vorhanden ist, können einige Bildschirmleser stattdessen den Dateinamen des Bildes ankündigen. Dies kann zu einer verwirrenden Erfahrung führen, wenn der Dateiname nicht repräsentativ für den Inhalt des Bildes ist.

- [Ein Alt-Entscheidungsbaum • Bilder • WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/images/decision-tree/)
- [Alt-Texte: Der Ultimative Leitfaden — Axess Lab](https://axesslab.com/alt-texts/)
- [Wie man Großartige Alt-Texte Gestaltet: Eine Einführung | Deque](https://www.deque.com/blog/great-alt-text-introduction/)
- [MDN Verständnis für WCAG, Richtlinie 1.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verstehen des Erfolgskriteriums 1.1.1 | W3C Verständnis für WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

### SVG als Bild identifizieren

Aufgrund eines [VoiceOver-Bugs](https://webkit.org/b/216364) kündigt VoiceOver SVG-Bilder nicht korrekt als Bilder an. Fügen Sie [`role="img"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/img_role) zu allen `<img>`-Elementen mit SVG-Quelldateien hinzu, um sicherzustellen, dass unterstützende Technologien SVG korrekt als Bildinhalt ankündigen.

```html
<img src="mdn.svg" alt="MDN" role="img" />
```

### Das title-Attribut

Das [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)-Attribut ist kein akzeptabler Ersatz für das `alt`-Attribut. Außerdem vermeiden Sie es, den Wert des `alt`-Attributs in einem `title`-Attribut zu duplizieren, das auf dem gleichen Bild deklariert ist. Dies könnte dazu führen, dass einige Bildschirmleser denselben Text zweimal ankündigen, was eine verwirrende Erfahrung schafft.

Das `title`-Attribut sollte auch nicht als ergänzende Bildunterschriften-Information verwendet werden, um die `alt`-Beschreibung eines Bildes zu begleiten. Wenn ein Bild eine Bildunterschrift benötigt, verwenden Sie die [`figure`](/de/docs/Web/HTML/Reference/Elements/figure)- und [`figcaption`](/de/docs/Web/HTML/Reference/Elements/figcaption)-Elemente.

Der Wert des `title`-Attributs wird dem Benutzer normalerweise als Tooltip angezeigt, der kurz nach dem Stoppen des Cursors über das Bild erscheint. Obwohl dies _zusätzliche Informationen_ für den Benutzer bereitstellen kann, sollten Sie nicht davon ausgehen, dass der Benutzer es jemals sehen wird: Der Benutzer hat möglicherweise nur Zugriff auf Tastatur oder Touchscreen. Wenn Sie Informationen haben, die besonders wichtig oder wertvoll für den Benutzer sind, präsentieren Sie diese inline unter Verwendung einer der oben genannten Methoden anstelle der Verwendung von `title`.

- [Verwendung des HTML-title-Attributs – aktualisiert | Vispero](https://vispero.com/resources/using-the-html-title-attribute-updated/)

## Beispiele

### Alternativtext

Das folgende Beispiel bettet ein Bild auf der Seite ein und enthält alternativ Text für Barrierefreiheit.

```html
<img src="/shared-assets/images/examples/favicon144.png" alt="MDN" />
```

{{ EmbedLiveSample('Alternative_text', '100%', '160') }}

### Bildlink

Dieses Beispiel baut auf dem vorherigen auf und zeigt, wie man das Bild in einen Link verwandelt. Dazu verschachteln Sie das `<img>`-Tag innerhalb des {{HTMLElement("a")}}. Sie sollten den Alternativtext so gestalten, dass er die Ressource beschreibt, auf die der Link verweist, als ob Sie stattdessen einen Textlink verwenden würden.

```html
<a href="https://developer.mozilla.org">
  <img
    src="/shared-assets/images/examples/favicon144.png"
    alt="Visit the MDN site" />
</a>
```

{{ EmbedLiveSample('Image_link', '100%', '160') }}

### Verwendung des srcset-Attributs

In diesem Beispiel fügen wir ein `srcset`-Attribut mit einem Verweis auf eine hochauflösende Version des Logos ein; diese wird anstelle des `src`-Bildes auf hochauflösenden Geräten geladen. Das Bild, auf das im `src`-Attribut verwiesen wird, wird als ein `1x`-Kandidat in {{Glossary("User_agent", "User Agents")}} betrachtet, die `srcset` unterstützen.

```html
<img
  src="/shared-assets/images/examples/favicon72.png"
  alt="MDN"
  srcset="/shared-assets/images/examples/favicon144.png 2x" />
```

{{EmbedLiveSample("Using_the_srcset_attribute", "100%", "160")}}

### Verwendung der srcset- und sizes-Attribute

Das `src`-Attribut wird in {{Glossary("User_agent", "User Agents")}}, die `srcset` unterstützen, ignoriert, wenn `w`-Beschreiber enthalten sind. Wenn die Medienbedingung `(width <= 600px)` übereinstimmt, wird das 200 Pixel breite Bild geladen (es ist dasjenige, das am besten mit `200px` übereinstimmt), andernfalls wird das andere Bild geladen.

```html
<img
  src="clock-demo-200px.png"
  alt="The time is 12:45."
  srcset="clock-demo-200px.png 200w, clock-demo-400px.png 400w"
  sizes="(width <= 600px) 200px, 50vw" />
```

{{EmbedLiveSample("Using_the_srcset_and_sizes_attributes", "100%", 350)}}

> [!NOTE]
> Um das Größenanpassungsverhalten in Aktion zu sehen, {{LiveSampleLink('Using_the_srcset_and_sizes_attributes', 'das Beispiel auf einer separaten Seite ansehen')}}, damit Sie den Inhaltsbereich tatsächlich in der Größe anpassen können.

## Sicherheits- und Datenschutzbedenken

Obwohl `<img>`-Elemente harmlose Verwendungen haben, können sie unerwünschte Konsequenzen für die Sicherheit und Privatsphäre des Benutzers haben. Weitere Informationen und Abhilfen finden Sie unter [Referer-Header: Sicherheits- und Datenschutzbedenken](/de/docs/Web/Privacy/Guides/Referer_header:_privacy_and_security_concerns).

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
          >Fließender Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#embedded_content"
          >Eingebetteter Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#palpable_content"
          >Greifbarer Inhalt</a
        >. Wenn das Element ein <code>usemap</code>-Attribut hat, ist es auch Teil
        der interaktiven Inhaltskategorie.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "leeres Element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss ein Start-Tag haben und darf keinen End-Tag haben.</td>
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
      <th scope="row">Zulässige ARIA-Rollen</th>
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

- {{HTMLElement("picture")}}, {{HTMLElement("object")}} und {{HTMLElement("embed")}} Elemente
- {{cssxref("object-fit")}}, {{cssxref("object-position")}}, {{cssxref("image-orientation")}}, {{cssxref("image-rendering")}} und {{cssxref("image-resolution")}}: Bildbezogene CSS-Eigenschaften.
- [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Schnittstelle für dieses Element
- [HTML-Bilder](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images)
- [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types)
- [Responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images)
