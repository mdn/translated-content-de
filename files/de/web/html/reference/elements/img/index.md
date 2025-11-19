---
title: "<img>: Das Image Embed-Element"
slug: Web/HTML/Reference/Elements/img
l10n:
  sourceCommit: 1f00512e3c9a20b5bb927db529bb5d639e346d96
---

Das **`<img>`** [HTML](/de/docs/Web/HTML) Element eingebettet ein Bild in das Dokument.

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

- Das `src`-Attribut enthält den Pfad zu dem Bild, das Sie einbetten möchten. Es ist nicht zwingend erforderlich, wenn das [srcset](/de/docs/Web/API/HTMLImageElement/srcset) Attribut verfügbar ist. Es muss jedoch mindestens eines der Attribute `src` oder `srcset` angegeben werden.
- Das `alt`-Attribut enthält einen textlichen Ersatz für das Bild, was obligatorisch und **äußerst nützlich** für die Barrierefreiheit ist — Screenreader lesen den Attributwert vor, damit ihre Benutzer wissen, was das Bild bedeutet. Alt-Text wird auch auf der Seite angezeigt, wenn das Bild aus irgendeinem Grund nicht geladen werden kann: zum Beispiel bei Netzwerkfehlern, Inhaltsblockierung oder Link-Verfall.

Es gibt viele andere Attribute, um verschiedene Zwecke zu erreichen:

- [Referrer](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy)/{{Glossary("CORS", "CORS")}} Steuerung für Sicherheit und Datenschutz: siehe [`crossorigin`](#crossorigin) und [`referrerpolicy`](#referrerpolicy).
- Verwenden Sie sowohl [`width`](#width) als auch [`height`](#height), um die intrinsische Größe des Bildes festzulegen, damit es Platz einnimmt, bevor es geladen wird, um Verschiebungen im Inhaltslayout zu vermeiden.
- Hinweise zu responsiven Bildern mit [`sizes`](#sizes) und [`srcset`](#srcset) (siehe auch das {{htmlelement("picture")}} Element und unser [Leitfaden zu responsiven Bildern](/de/docs/Web/HTML/Guides/Responsive_images)).

## Unterstützte Bildformate

Der HTML-Standard listet nicht auf, welche Bildformate unterstützt werden sollen, daher können {{Glossary("user_agent", "Benutzeragenten")}} unterschiedliche Formate unterstützen.

> [!NOTE]
> Der [Leitfaden zu Bild-Dateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types) bietet umfassende Informationen über Bildformate und deren Unterstützung durch Webbrowser.
> Dieser Abschnitt ist nur eine Zusammenfassung!

Die am häufigsten im Web verwendeten Bilddateiformate sind:

- [APNG (Animated Portable Network Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#apng_animated_portable_network_graphics) — Gute Wahl für verlustfreie Animationssequenzen (GIF ist weniger leistungsfähig)
- [AVIF (AV1 Image File Format)](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) — Gute Wahl sowohl für Bilder als auch für animierte Bilder aufgrund der hohen Leistung.
- [GIF (Graphics Interchange Format)](/de/docs/Web/Media/Guides/Formats/Image_types#gif_graphics_interchange_format) — Gute Wahl für _einfache_ Bilder und Animationen.
- [JPEG (Joint Photographic Expert Group image)](/de/docs/Web/Media/Guides/Formats/Image_types#jpeg_joint_photographic_experts_group_image) — Gute Wahl für verlustbehaftete Komprimierung von Standbildern (derzeit am beliebtesten).
- [PNG (Portable Network Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#png_portable_network_graphics) — Gute Wahl für verlustfreie Komprimierung von Standbildern (etwas bessere Qualität als JPEG).
- [SVG (Scalable Vector Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#svg_scalable_vector_graphics) — Vektorbildformat. Verwenden Sie es für Bilder, die in verschiedenen Größen genau gezeichnet werden müssen.
- [WebP (Web Picture format)](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) — Hervorragende Wahl sowohl für Bilder als auch für animierte Bilder.

Formate wie [WebP](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) und [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) werden empfohlen, da sie wesentlich besser abschneiden als PNG, JPEG, GIF für sowohl Stand- als auch animierte Bilder.

SVG bleibt das empfohlene Format für Bilder, die in verschiedenen Größen genau gezeichnet werden müssen.

## Fehler beim Laden von Bildern

Tritt ein Fehler beim Laden oder Rendern eines Bildes auf und wurde ein `onerror`-Ereignishandler für das [`error`](/de/docs/Web/API/HTMLElement/error_event) Ereignis festgelegt, wird dieser Ereignishandler aufgerufen. Dies kann in mehreren Situationen passieren, einschließlich:

- Die `src` oder `srcset` Attribute sind leer (`""`) oder `null`.
- Die `src` {{Glossary("URL", "URL")}} ist dieselbe wie die URL der Seite, die der Benutzer gerade besucht.
- Das Bild ist auf eine Weise beschädigt, die sein Laden verhindert.
- Die Metadaten des Bildes sind in einer Weise beschädigt, dass es unmöglich ist, seine Abmessungen abzurufen, und keine Abmessungen wurden in den Attributen des `<img>`-Elements angegeben.
- Das Bild ist in einem vom {{Glossary("user_agent", "Benutzeragenten")}} nicht unterstützten Format.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `alt`
  - : Definiert Text, der das Bild auf der Seite ersetzen kann.

    > [!NOTE]
    > Browser zeigen nicht immer Bilder an. Es gibt eine Reihe von Situationen, in denen ein Browser möglicherweise keine Bilder anzeigt, wie zum Beispiel:
    >
    > - Nicht-visuelle Browser (wie die von Menschen mit Sehbehinderungen verwendeten)
    > - Der Benutzer entscheidet sich, keine Bilder anzuzeigen (um Bandbreite zu sparen, aus Datenschutzgründen)
    > - Das Bild ist ungültig oder ein [nicht unterstützter Typ](#unterstützte_bildformate)
    >
    > In diesen Fällen kann der Browser das Bild durch den Text im `alt`-Attribut des Elements ersetzen. Aus diesen und anderen Gründen geben Sie nach Möglichkeit einen nützlichen Wert für `alt` an.

    Das Setzen dieses Attributs auf einen leeren String (`alt=""`) zeigt an, dass dieses Bild _kein_ wesentlicher Bestandteil des Inhalts ist (es handelt sich um eine Dekoration oder ein Tracking-Pixel) und nicht-visuelle Browser es beim {{Glossary("Engine/Rendering", "Rendering")}} weglassen können. Visuelle Browser werden auch das Symbol für ein kaputtes Bild ausblenden, wenn das `alt`-Attribut leer ist und das Bild nicht angezeigt werden konnte.

    Dieses Attribut wird auch verwendet, wenn das Bild in Text kopiert oder ein verlinktes Bild zu einem Lesezeichen gespeichert wird.

- `attributionsrc` {{experimental_inline}}
  - : Gibt an, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}} Header zusammen mit der Bildanforderung senden soll.

    Serverseitig wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}} oder {{httpheader("Attribution-Reporting-Register-Trigger")}} Headers in der Antwort auszulösen, um eine Bildquelle oder einen Bild-Trigger für die Attribution zu registrieren. Welcher Antwort-Header gesendet werden soll, hängt vom Wert des `Attribution-Reporting-Eligible` Headers ab, der die Registrierung ausgelöst hat.

    Das entsprechende Quell- oder Trigger-Ereignis wird ausgelöst, sobald der Browser die Antwort mit der Bilddatei empfängt.

    > [!NOTE]
    > Weitere Einzelheiten finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

    Es gibt zwei Versionen dieses Attributs, die Sie festlegen können:
    - Boolean, d.h. nur der Name `attributionsrc`. Dies gibt an, dass Sie möchten, dass der {{httpheader("Attribution-Reporting-Eligible")}} Header an denselben Server gesendet wird, auf den das `src`-Attribut zeigt. Dies ist in Ordnung, wenn Sie die Registrierung der Attributionsquelle oder des Triggers auf demselben Server verarbeiten. Bei der Registrierung eines Attribution-Triggers ist diese Eigenschaft optional und ein Boolean-Wert wird verwendet, wenn er weggelassen wird.
    - Wert, der eine oder mehrere URLs enthält, zum Beispiel:

    ```html
    <img
      src="image-file.png"
      alt="My image file description"
      attributionsrc="https://a.example/register-source
                         https://b.example/register-source" />
    ```

    Dies ist nützlich in Fällen, in denen die angeforderte Ressource sich nicht auf einem Server befindet, den Sie kontrollieren, oder wenn Sie einfach die Registrierung der Attribution-Quelle auf einem anderen Server bearbeiten möchten. In diesem Fall können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcenanforderung erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}} Header an die in `attributionSrc` angegebenen URL(s) zusätzlich zum Ursprungsort der Ressource gesendet. Diese URLs können dann mit einem {{httpheader("Attribution-Reporting-Register-Source")}} oder {{httpheader("Attribution-Reporting-Register-Trigger")}} Header entsprechend antworten, um die Registrierung abzuschließen.

    > [!NOTE]
    > Durch das Angeben mehrerer URLs können mehrere Attributionsquellen auf derselben Funktion registriert werden. Sie könnten zum Beispiel verschiedene Kampagnen haben, deren Erfolg Sie messen möchten, was die Erstellung unterschiedlicher Berichte zu unterschiedlichen Daten erfordert.

- [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)
  - : Gibt an, ob das Abrufen des Bildes mit einer {{Glossary("CORS", "CORS")}} Anfrage erfolgen muss. Bilddaten von einem [CORS-aktivierten Bild](/de/docs/Web/HTML/How_to/CORS_enabled_image), das von einer CORS-Anfrage zurückgegeben wird, können im {{HTMLElement("canvas")}}-Element wiederverwendet werden, ohne als "[verfälscht](/de/docs/Web/HTML/How_to/CORS_enabled_image#security_and_tainted_canvases)" markiert zu werden.

    Wenn das `crossorigin`-Attribut _nicht_ angegeben ist, wird eine Nicht-CORS-Anfrage gesendet (ohne den {{httpheader("Origin")}} Request-Header), und der Browser markiert das Bild als verfälscht und schränkt den Zugriff auf seine Bilddaten ein und verhindert seine Nutzung in {{HTMLElement("canvas")}}-Elementen.

    Wenn das `crossorigin`-Attribut _angegeben_ ist, wird eine CORS-Anfrage gesendet (mit dem {{httpheader("Origin")}} Request-Header); wenn der Server jedoch nicht wählt, den Cross-Origin-Zugriff auf die Bilddaten durch die Ursprungsseite zu erlauben (indem er keinen {{httpheader("Access-Control-Allow-Origin")}} Response-Header sendet, oder indem er die Ursprungsseite nicht in irgendeinem {{httpheader("Access-Control-Allow-Origin")}} Response-Header einschließt, den er sendet), blockiert der Browser das Laden des Bildes und protokolliert einen CORS-Fehler in die Entwicklerkonsole.

    Erlaubte Werte:
    - `anonymous`
      - : Eine CORS-Anfrage wird mit weggelassenen Anmeldeinformationen gesendet (das heißt, keine {{Glossary("cookie", "Cookies")}}, [X.509 Zertifikate](https://datatracker.ietf.org/doc/html/rfc5280) oder {{httpheader("Authorization")}} Request-Header).
    - `use-credentials`
      - : Die CORS-Anfrage wird mit enthaltenen Anmeldeinformationen gesendet (das heißt, Cookies, X.509 Zertifikate und der `Authorization` Request-Header). Wenn der Server nicht entscheidet, Anmeldeinformationen mit der Ursprungsseite zu teilen (indem er den `Access-Control-Allow-Credentials: true` Response-Header zurücksendet), markiert der Browser das Bild als verfälscht und schränkt den Zugriff auf seine Bilddaten ein.

    Wenn das Attribut einen ungültigen Wert hat, behandeln Browser es so, als ob der Wert `anonymous` verwendet wurde. Siehe [CORS-Einstellungen für Attribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin) für zusätzliche Informationen.

- `decoding`
  - : Dieses Attribut gibt einen Hinweis an den Browser, ob die Bilddekodierung zusammen mit dem Rendern der anderen DOM-Inhalte in einem einzigen Präsentationsschritt durchgeführt werden soll, der "korrekter" aussieht (`sync`), oder ob zuerst die anderen DOM-Inhalte gerendert und präsentiert werden sollen und das Bild später dekodiert und präsentiert wird (`async`). In der Praxis bedeutet `async`, dass das nächste Rendern nicht darauf wartet, dass das Bild dekodiert wird.

    Es ist oft schwierig, einen merklichen Effekt bei der Verwendung von `decoding` auf statischen `<img>`-Elementen wahrzunehmen. Sie werden wahrscheinlich zunächst als leere Bilder dargestellt, während die Bilddateien (entweder aus dem Netzwerk oder aus dem Cache) abgerufen und dann unabhängig verarbeitet werden, sodass die "Synchronisierung" von Inhaltsaktualisierungen weniger offensichtlich ist. Das Blockieren des Renderings während des Durchführens der Dekodierung kann, obwohl oft sehr klein, _gemessen_ werden — auch wenn es schwierig ist, dies mit dem menschlichen Auge zu beobachten. Siehe [Was macht das Image-Decoding-Attribut eigentlich?](https://www.tunetheweb.com/blog/what-does-the-image-decoding-attribute-actually-do/) für eine detailliertere Analyse (tunetheweb.com, 2023).

    Die Verwendung unterschiedlicher `decoding`-Typen kann zu auffälligeren Unterschieden führen, wenn `<img>`-Elemente dynamisch über JavaScript in das DOM eingefügt werden — siehe [`HTMLImageElement.decoding`](/de/docs/Web/API/HTMLImageElement/decoding) für weitere Details.

    Erlaubte Werte:
    - `sync`
      - : Dekodiere das Bild synchron zusammen mit dem Rendern der anderen DOM-Inhalte und präsentiere alles gemeinsam.
    - `async`
      - : Dekodiere das Bild asynchron, nach dem Rendern und Präsentieren der anderen DOM-Inhalte.
    - `auto`
      - : Keine Präferenz für den Dekodiermodus; der Browser entscheidet, was das Beste für den Benutzer ist. Dies ist der Standardwert.

- [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming)
  - : Markiert das Bild zum Beobachten durch die [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming) API. Der angegebene Wert wird zu einem Bezeichner für das beobachtete Bildelement. Siehe auch die Seite über das [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming) Attribut.

- [`fetchpriority`](/de/docs/Web/HTML/Reference/Attributes/fetchpriority)
  - : Gibt einen Hinweis auf die relative Priorität, die beim Abrufen des Bildes verwendet werden soll. Erlaubte Werte:
    - `high`
      - : Abrufen des Bildes mit hoher Priorität im Vergleich zu anderen Bildern.
    - `low`
      - : Abrufen des Bildes mit niedriger Priorität im Vergleich zu anderen Bildern.
    - `auto`
      - : Keine Präferenz für die Abrufpriorität festlegen.
        Dies ist der Standard.
        Es wird verwendet, wenn kein oder ein ungültiger Wert festgelegt ist.
- `height`
  - : Die intrinsische Höhe des Bildes in Pixeln. Muss eine ganze Zahl ohne Einheit sein.

    > [!NOTE]
    > Das Einfügen von `height` und [`width`](#width) ermöglicht es dem Browser, das {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Bildes vor dem Laden zu berechnen. Dieses Seitenverhältnis wird verwendet, um den benötigten Platz für die Anzeige des Bildes zu reservieren, wodurch Layoutverschiebungen bei tDas Herunterladen und Anzeigen des Bildes reduziert oder sogar verhindert werden. Das Reduzieren von Layoutverschiebungen ist ein wesentlicher Bestandteil einer guten Benutzererfahrung und Web-Performance.

- `ismap`
  - : Dieses Boolean-Attribut gibt an, dass das Bild Teil einer [serverseitigen Karte](https://en.wikipedia.org/wiki/Image_map#Server-side) ist. Wenn ja, werden die Koordinaten, an denen der Benutzer auf das Bild geklickt hat, an den Server gesendet.

    > [!NOTE]
    > Dieses Attribut ist nur zulässig, wenn das `<img>`-Element ein Nachkomme eines {{htmlelement("a")}}-Elements mit einem gültigen [`href`](/de/docs/Web/HTML/Reference/Elements/a#href) Attribut ist. Dies bietet Benutzern ohne Zeigegeräte ein alternatives Ziel.

- `loading`
  - : Gibt an, wie der Browser das Bild laden soll:
    - `eager`
      - : Lädt das Bild sofort, unabhängig davon, ob das Bild derzeit im sichtbaren Viewport ist (dies ist der Standardwert).
    - `lazy`
      - : Verzögert das Laden des Bildes, bis es einen berechneten Abstand vom Viewport erreicht, wie vom Browser definiert. Der Zweck besteht darin, das Netzwerk und den Speicherbedarf für die Handhabung des Bildes zu vermeiden, bis es relativ sicher ist, dass es benötigt wird. Dies verbessert im Allgemeinen die Leistung des Inhalts in den meisten typischen Anwendungsfällen.

    Während explizite [`width`](#width) und [`height`](#height) Attribute für alle Bilder zur Vermeidung von Layoutverschiebungen empfohlen werden, sind sie besonders wichtig für verzögert geladene Bilder. Verzögert geladene Bilder werden nie geladen, wenn sie keinen sichtbaren Teil eines Elements schneiden, selbst wenn das Laden sie ändern würde, da nicht geladene Bilder eine `width` und `height` von `0` haben. Es ist auch eine störendere Benutzererfahrung, wenn die Seite in der Mitte des Lesens umbricht.

    Das [`load`](/de/docs/Web/API/Window/load_event) Ereignis wird ausgelöst, nachdem frühzeitig geladene Bilder abgerufen und verarbeitet wurden, aber bevor verzögert geladene Bilder es sind, selbst wenn die verzögert geladenen Bilder sich innerhalb des visuellen Viewports direkt bei der anfänglichen Seitenerstellung befinden. Diese Bilder werden trotzdem sofort nach dem Abschluss des Layouts geladen; sie beeinflussen nur nicht das Timing des `load`-Ereignisses. Das bedeutet, dass beim Auslösen von `load` möglicherweise noch nicht alle verzögert geladenen Bilder im visuellen Viewport sichtbar sind.

    Das Laden wird nur verzögert, wenn JavaScript aktiviert ist. Dies ist eine Anti-Tracking-Maßnahme, denn wenn ein Benutzeragent Lazy Loading unterstützt, wenn das Skripting deaktiviert ist, wäre es dennoch möglich, die ungefähre Scroll-Position eines Benutzers während einer Sitzung zu verfolgen, indem strategisch Bilder im Markup einer Seite platziert werden, sodass ein Server verfolgen kann, wie viele Bilder angefordert werden und wann.

- `referrerpolicy`
  - : Ein String, der angibt, welchen Referrer beim Abrufen der Ressource verwendet werden soll:
    - `no-referrer`: Der {{HTTPHeader("Referer")}} Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}} Header wird nicht an {{Glossary("origin", "Origin")}} gesendet, die kein {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) verwenden.
    - `origin`: Der gesendete Referrer wird auf den Ursprung der referenzierenden Seite beschränkt: ihren [Schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`: Der an andere Ursprünge gesendete Referrer wird auf das Schema, den Host und den Port beschränkt. Navigationen auf demselben Ursprung enthalten weiterhin den Pfad.
    - `same-origin`: Ein Referrer wird für {{Glossary("Same-origin_policy", "gleichartiger Ursprung")}} gesendet, aber Anfragen über verschiedene Ursprünge enthalten keine Referrer-Informationen.
    - `strict-origin`: Senden Sie nur den Ursprung des Dokuments als Referrer, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), senden Sie es jedoch nicht an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard): Senden Sie eine vollständige URL beim Ausführen eines gleichartigen Ursprungsaufrufs, senden Sie nur den Ursprung, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), und senden Sie keinen Header zu einem weniger sicheren Ziel (HTTPS→HTTP).
    - `unsafe-url`: Der Referrer wird den Ursprung _und_ den Pfad einschließen (aber nicht den [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder [Benutzername](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten zu unsicheren Ursprüngen leakt.

- `sizes`
  - : Ein oder mehrere durch Kommas getrennte Werte, die Quellengrößen oder das `auto` Schlüsselwort sein können. Die Spezifikation erfordert, dass das `sizes`-Attribut nur vorhanden ist, wenn `srcset` Breitenbeschreibungen verwendet.

    Eine **Quellengröße** besteht aus:
    1. Einer [Medienbedingung](/de/docs/Web/CSS/Guides/Media_queries/Using#syntax), weggelassen für das letzte Element in der Liste.
    2. Einem Quellengrößenwert.

    Medienbedingungen beschreiben Eigenschaften des _Viewports_, nicht des _Bildes_. Zum Beispiel schlägt `(height <= 500px) 1000px` vor, eine Bildquelle von 1000px Breite zu verwenden, wenn die _Viewport_-Höhe 500px oder weniger beträgt. Da ein Quellengrößenbeschreibter die Breite des Bildes während des Layouts angibt, basiert die Medienbedingung in der Regel (aber nicht notwendigerweise) auf der [Breite](/de/docs/Web/CSS/Reference/At-rules/@media/width).

    Quellgrößenwerte geben die beabsichtigte Displaygröße des Bildes an. {{Glossary("User_agent", "Benutzeragenten")}} verwenden die aktuelle Quellengröße, um eine der Quellen auszuwählen, die durch das `srcset`-Attribut bereitgestellt werden, wenn diese Quellen mit Breitenbeschreibungen (`w`) beschrieben werden. Die ausgewählte Quellengröße beeinflusst die {{Glossary("intrinsic_size", "inherente Größe")}} des Bildes (die Anzeigengröße des Bildes, wenn keine {{Glossary("CSS", "CSS")}} Darstellung angewendet wird).

    Ein Quellgrößenwert kann jede nicht-negative [Länge](/de/docs/Web/CSS/Reference/Values/length) sein. Es dürfen keine CSS-Funktionen außer den [mathematischen Funktionen](/de/docs/Web/CSS/Reference/Values/Functions#math_functions) verwendet werden. Einheiten werden in der gleichen Weise interpretiert wie [Medienabfragen](/de/docs/Web/CSS/Guides/Media_queries), was bedeutet, dass alle relativen Längeneinheiten sich auf die Dokumentwurzel und nicht auf das `<img>`-Element beziehen. Zum Beispiel bezieht sich ein `em`-Wert auf die Schriftgröße der Wurzel, nicht auf die Schriftgröße des Bildes. [Prozentwerte](/de/docs/Web/CSS/Reference/Values/percentage) sind nicht erlaubt. Wenn das `sizes`-Attribut nicht angegeben ist, hat es einen Standardwert von `100vw` (der Viewport-Breite).

    Das `auto`-Schlüsselwort kann die gesamte Liste von Größen oder den ersten Eintrag in der Liste ersetzen. Es ist nur gültig, wenn es mit `loading="lazy"` kombiniert wird und entspricht der [konkreten Größe](/de/docs/Web/CSS/Reference/Values/image) des Bildes. Da die inhärente Größe des Bildes noch nicht bekannt ist, sollten `width`- und `height`-Attribute (oder deren CSS-Äquivalente) ebenfalls angegeben werden, um zu verhindern, dass der Browser die Standardbildbreite von 300px annimmt.
    Für eine bessere Abwärtskompatibilität mit Browsern, die `auto` nicht unterstützen, können Sie nach `auto` im `sizes`-Attribut Fallback-Größen einfügen:

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
  - : Die Bild- {{Glossary("URL", "URL")}}. Mindestens eines der Attribute `src` und [`srcset`](#srcset) ist für ein `<img>`-Element erforderlich. Wenn [`srcset`](#srcset) angegeben ist, wird `src` in einer von zwei Weisen verwendet:
    - als Fallback für Browser, die `srcset` nicht unterstützen.
    - wenn `srcset` den "x"-Beschreiber verwendet, dann ist `src` äquivalent zu einer Quelle mit dem Dichtebeschreiber `1x`; das heißt, das in `src` angegebene Bild wird auf Bildschirmen mit geringer Dichte verwendet (wie typische 72 DPI- oder 96 DPI-Displays).

- `srcset`
  - : Eine oder mehrere durch Kommas getrennte Zeichenfolgen, die mögliche Bildquellen für den {{Glossary("user_agent", "Benutzeragenten")}} zur Verwendung angeben.

    Jede Zeichenfolge ist zusammengesetzt aus:
    1. Einer {{Glossary("URL", "URL")}} zu einem Bild.
    2. Optional, Leerzeichen gefolgt von einem der folgenden:
       - Einem Breitenbeschreiber (eine positive ganze Zahl unmittelbar gefolgt von `w`). Es _muss_ mit der inhärenten Breite des referenzierten Bildes übereinstimmen. Der Breitenbeschreiber wird durch die in dem `sizes`-Attribut angegebene Quellengröße geteilt, um die effektive Pixeldichte zu berechnen. Zum Beispiel, um eine Bildressource bereitzustellen, die verwendet wird, wenn der Renderer ein 450 Pixel breites Bild benötigt, verwenden Sie den Breitenbeschreiber `450w`. Wenn ein `srcset` "w"-Beschreiber enthält, verwendet der Browser diese Beschreiber zusammen mit dem `sizes`-Attribut, um eine Ressource auszuwählen.
       - Einem Pixeldichtebeschreiber (eine positive Gleitkommazahl unmittelbar gefolgt von `x`). Er gibt die Bedingung an, unter der die entsprechende Bildressource als Pixeldichte des Displays verwendet werden soll. Zum Beispiel, um eine Bildressource bereitzustellen, die verwendet wird, wenn die Pixeldichte doppelt so hoch ist wie die Standarddichte, verwenden Sie den Pixeldichtebetrachter `2x` oder `2.0x`.

    Wenn kein Beschreiber angegeben ist, wird der Quelle der Standardbeschreiber `1x` zugewiesen. Es ist falsch, Breitenbeschreiber und Pixeldichtebeschreiber im gleichen `srcset` Attribut zu mischen. Doppelte Beschreiber (zum Beispiel zwei Quellen im gleichen `srcset`, die beide mit `2x` beschrieben sind) sind ebenfalls ungültig.

    Leerzeichen, außer dem Leerzeichen, das die URL und den entsprechenden Bedingungsbeschreiber trennt, werden ignoriert; dies schließt sowohl führende als auch nachgestellte Leerzeichen ein, sowie Leerzeichen vor oder nach jedem Komma. Wenn jedoch eine Bildkandidatenzeichenkette keine Beschreiber und kein Leerzeichen nach der URL enthält, muss die folgende Bildkandidatenzeichenkette, falls vorhanden, mit einem oder mehreren Leerzeichen beginnen, oder das Komma wird als Teil der URL angesehen.

    Wenn das `srcset` des `<img>`-Elements `x` Beschreiber verwendet, betrachten Browser auch die URL im `src`-Attribut (falls vorhanden) als Kandidaten und weisen ihm einen Standardbeschreiber von `1x` zu. Andererseits, wenn das `srcset` Attribut Breitenbeschreiber verwendet, wird `src` nicht berücksichtigt, und das `sizes` Attribut wird stattdessen verwendet.

    Der Benutzeragent wählt nach eigenem Ermessen eine der verfügbaren Quellen aus. Dies bietet ihm erhebliche Freiheit, seine Auswahl basierend auf Dingen wie Benutzerpräferenzen oder {{Glossary("bandwidth", "Bandbreiten")}} Bedingungen zu gestalten. Siehe unseren [Leitfaden zu responsiven Bildern](/de/docs/Web/HTML/Guides/Responsive_images) für ein Beispiel.

- `width`
  - : Die intrinsische Breite des Bildes in Pixeln. Muss eine Ganzzahl ohne Einheit sein.
- `usemap`
  - : Der partielle {{Glossary("URL", "URL")}} (beginnend mit `#`) einer [Bildkarte](/de/docs/Web/HTML/Reference/Elements/map), die mit dem Element verknüpft ist.

    > [!NOTE]
    > Sie können dieses Attribut nicht verwenden, wenn das `<img>`-Element sich innerhalb eines {{htmlelement("a")}} oder {{HTMLElement("button")}} Elements befindet.

### Veraltete Attribute

- `align` {{deprecated_inline}}
  - : Richtet das Bild mit seinem umgebenden Kontext aus. Verwenden Sie die {{cssxref('float')}} und/oder {{cssxref('vertical-align')}} {{Glossary("CSS", "CSS")}} Eigenschaften anstelle dieses Attributs. Erlaubte Werte:
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
  - : Die Anzahl der Pixel des Leerraums auf der linken und rechten Seite des Bildes. Verwenden Sie die {{cssxref('margin')}} CSS-Eigenschaft stattdessen.
- `longdesc` {{deprecated_inline}}
  - : Ein Link zu einer detaillierteren Beschreibung des Bildes. Mögliche Werte sind eine {{Glossary("URL", "URL")}} oder ein Element- [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id).

    > [!NOTE]
    > Dieses Attribut wird im [HTML-Standard](https://html.spec.whatwg.org/multipage/obsolete.html#element-attrdef-img-longdesc) als obsolet betrachtet. Es hat eine ungewisse Zukunft; Autoren sollten eine {{Glossary("WAI", "WAI")}}-{{Glossary("ARIA", "ARIA")}} Alternative wie [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) oder [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) verwenden.

- `name` {{deprecated_inline}}
  - : Ein Name für das Element. Verwenden Sie stattdessen das [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) Attribut.
- `vspace` {{deprecated_inline}}
  - : Die Anzahl der Pixel des Leerraums über und unter dem Bild. Verwenden Sie die {{cssxref('margin')}} CSS-Eigenschaft stattdessen.

## Styling mit CSS

`<img>` ist ein {{Glossary("replaced_elements", "ersetztes Element")}}; es hat standardmäßig einen {{cssxref("display")}} Wert von `inline`, aber seine Standardabmessungen werden durch die intrinsischen Werte des eingebetteten Bildes definiert, als wäre es `inline-block`. Sie können Eigenschaften wie {{cssxref("border")}}/{{cssxref("border-radius")}}, {{cssxref("padding")}}/{{cssxref("margin")}}, {{cssxref("width")}}, {{cssxref("height")}} usw. auf ein Bild anwenden.

`<img>` hat keine Grundlinie, daher wird das Bild, wenn es im Rahmen eines Inline-Formatierungskontexts mit {{cssxref("vertical-align", "vertical-align: baseline")}} verwendet wird, auf der Textgrundlinie platziert.

Sie können die {{cssxref("object-position")}} Eigenschaft verwenden, um das Bild innerhalb des Rahmens zu positionieren, und die {{cssxref("object-fit")}} Eigenschaft, um die Größe des Bildes innerhalb des Rahmens anzupassen (zum Beispiel, ob das Bild den Rahmen ausfüllen soll, auch wenn Beschnitt erforderlich ist).

Je nach Typ kann ein Bild eine intrinsische Breite und Höhe haben. Für einige Bildtypen sind jedoch intrinsische Abmessungen nicht erforderlich. {{Glossary("SVG", "SVG")}} Bilder haben zum Beispiel keine intrinsischen Abmessungen, wenn ihr Wurzel-{{SVGElement("svg")}}-Element keine `width` oder `height` darauf hat.

## Barrierefreiheit

### Bedeutungsvolle alternative Beschreibungen verfassen

Der Wert eines `alt`-Attributs sollte einen klaren und präzisen textuellen Ersatz für den Inhalt des Bildes liefern. Er sollte nicht das Vorhandensein des Bildes selbst oder den Dateinamen des Bildes beschreiben. Wenn das `alt`-Attribut absichtlich weggelassen wird, weil das Bild kein Textäquivalent hat, sollten Sie alternative Methoden in Betracht ziehen, um das zu präsentieren, was das Bild zu kommunizieren versucht.

#### Nicht tun

```html example-bad
<img alt="image" src="penguin.jpg" />
```

#### Tun

```html example-good
<img alt="A Penguin on a beach." src="penguin.jpg" />
```

Ein wichtiger Barrierefreiheitstest besteht darin, den Inhalt des `alt`-Attributs zusammen mit dem vorhergehenden Textinhalt zu lesen, um zu sehen, ob er denselben Sinn wie das Bild vermittelt. Zum Beispiel könnte ein Screenreader das _Nicht tun_ Beispiel als "Auf meinen Reisen sah ich ein niedliches kleines Tier: Bild" lesen, was keinen Sinn ergibt. Das _Tun_ Beispiel könnte von einem Screenreader als "Auf meinen Reisen sah ich ein niedliches kleines Tier: Ein Pinguin am Strand." gelesen werden, was Sinn ergibt.

Für Bilder, die eine Aktion auslösen sollen, zum Beispiel Bilder, die in einem {{htmlelement("a")}} oder {{htmlelement("button")}}-Element verschachtelt sind, sollten Sie in Betracht ziehen, die ausgelöste Aktion im `alt`-Attributwert zu beschreiben. Zum Beispiel könnten Sie `alt="nächste Seite"` anstelle von `alt="Pfeil rechts"` schreiben. Sie könnten auch in Erwägung ziehen, eine optionale zusätzliche Beschreibung in einem `title`-Attribut hinzuzufügen; dies kann von Screenreadern auf Anfrage des Benutzers vorgelesen werden.

Wenn ein `alt`-Attribut an einem Bild nicht vorhanden ist, können einige Screenreader stattdessen den Dateinamen des Bildes ansagen. Dies kann eine verwirrende Erfahrung sein, wenn der Dateiname den Bildinhalt nicht repräsentiert.

- [Ein Alt-Entscheidungsbaum • Bilder • WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/images/decision-tree/)
- [Alt-Texte: Der Ultimative Leitfaden — Axess Lab](https://axesslab.com/alt-texts/)
- [Wie man großartige Alt-Texte entwirft: Eine Einführung | Deque](https://www.deque.com/blog/great-alt-text-introduction/)
- [MDN Verstehen von WCAG, Richtlinie 1.1-Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verständnis des Erfolgskriteriums 1.1.1 | W3C Verständnis der WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

### SVG als Bild identifizieren

Aufgrund eines [VoiceOver-Bugs](https://webkit.org/b/216364) kündigt VoiceOver SVG-Bilder nicht korrekt als Bilder an. Fügen Sie allen `<img>` Elementen mit SVG-Quelldateien [`role="img"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/img_role) hinzu, um sicherzustellen, dass unterstützende Technologien das SVG als Bildinhalt korrekt ankündigen.

```html
<img src="mdn.svg" alt="MDN" role="img" />
```

### Das title-Attribut

Das [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title) Attribut ist kein akzeptabler Ersatz für das `alt`-Attribut. Vermeiden Sie es zudem, den Wert des `alt`-Attributs in einem `title`-Attribut zu duplizieren, das auf demselben Bild deklariert ist. Dies kann dazu führen, dass einige Screenreader denselben Text zweimal ansagen, was zu einer verwirrenden Erfahrung führt.

Das `title`-Attribut sollte auch nicht als ergänzende Beschriftungsinformation verwendet werden, um die `alt`-Beschreibung eines Bildes zu begleiten. Wenn ein Bild eine Bildunterschrift benötigt, verwenden Sie die [`figure`](/de/docs/Web/HTML/Reference/Elements/figure) und [`figcaption`](/de/docs/Web/HTML/Reference/Elements/figcaption) Elemente.

Der Wert des `title`-Attributs wird dem Benutzer normalerweise als Tooltip präsentiert, der kurz nach dem Anhalten des Cursors über dem Bild erscheint. Während dies _kann_ zusätzliche Informationen für den Benutzer bereitstellen, sollten Sie nicht davon ausgehen, dass der Benutzer ihn jemals sehen wird: Der Benutzer hat möglicherweise nur eine Tastatur oder einen Touchscreen. Wenn Sie Informationen haben, die für den Benutzer besonders wichtig oder wertvoll sind, präsentieren Sie sie inline mit einer der oben genannten Methoden, anstatt `title` zu verwenden.

- [Verwendung des HTML title-Attributs – aktualisiert | Die Paciello Group](https://www.tpgi.com/using-the-html-title-attribute-updated/)

## Beispiele

### Alternative Texte

Das folgende Beispiel bettet ein Bild in die Seite ein und enthält alternativen Text für die Zugänglichkeit.

```html
<img src="/shared-assets/images/examples/favicon144.png" alt="MDN" />
```

{{ EmbedLiveSample('Alternative_text', '100%', '160') }}

### Bildlink

Dieses Beispiel baut auf dem vorherigen auf und zeigt, wie man das Bild in einen Link verwandelt. Um dies zu tun, verschachteln Sie das `<img>` Tag innerhalb des {{HTMLElement("a")}}. Sie sollten den alternativen Text so gestalten, dass er die Ressource beschreibt, auf die der Link zeigt, als ob Sie stattdessen einen Textlink verwenden würden.

```html
<a href="https://developer.mozilla.org">
  <img
    src="/shared-assets/images/examples/favicon144.png"
    alt="Visit the MDN site" />
</a>
```

{{ EmbedLiveSample('Image_link', '100%', '160') }}

### Verwendung des srcset-Attributs

In diesem Beispiel fügen wir ein `srcset` Attribut mit einem Verweis auf eine hochauflösende Version des Logos hinzu; dieses wird anstelle des `src`-Bildes auf hochauflösenden Geräten geladen. Das Bild, auf das im `src`-Attribut verwiesen wird, wird als `1x`-Kandidat in {{Glossary("User_agent", "Benutzeragenten")}} gezählt, die `srcset` unterstützen.

```html
<img
  src="/shared-assets/images/examples/favicon72.png"
  alt="MDN"
  srcset="/shared-assets/images/examples/favicon144.png 2x" />
```

{{EmbedLiveSample("Using_the_srcset_attribute", "100%", "160")}}

### Verwendung der srcset- und sizes-Attribute

Das `src`-Attribut wird in {{Glossary("User_agent", "Benutzeragenten")}}, die `srcset` unterstützen, ignoriert, wenn `w`-Beschreiber enthalten sind. Wenn die `(width <= 600px)` Medienbedingung zutrifft, wird das 200 Pixel breite Bild geladen (es ist dasjenige, das `200px` am nächsten kommt), andernfalls wird das andere Bild geladen.

```html
<img
  src="clock-demo-200px.png"
  alt="The time is 12:45."
  srcset="clock-demo-200px.png 200w, clock-demo-400px.png 400w"
  sizes="(width <= 600px) 200px, 50vw" />
```

{{EmbedLiveSample("Using_the_srcset_and_sizes_attributes", "100%", 350)}}

> [!NOTE]
> Um die Größenänderung in Aktion zu sehen, {{LiveSampleLink('Using_the_srcset_and_sizes_attributes', 'view the example on a separate page')}}, damit Sie tatsächlich den Inhaltsbereich ändern können.

## Sicherheits- und Datenschutzbedenken

Obwohl `<img>`-Elemente harmlose Verwendungen haben, können sie unerwünschte Folgen für die Sicherheit und den Datenschutz der Benutzer haben. Weitere Informationen und Abhilfemaßnahmen finden Sie unter [Referer-Header: Datenschutz- und Sicherheitsbedenken](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns).

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
          >Flow-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >phrasender Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#embedded_content"
          >eingebetteter Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#palpable_content"
          >spürbarer Inhalt</a
        >. Wenn das Element ein <code>usemap</code>-Attribut hat, gehört es auch zur Kategorie des interaktiven Inhalts.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "leeres Element")}}.</td>
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
      <th scope="row">Implizierte ARIA-Rolle</th>
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
            ohne <code>alt</code>-Attribut, keine <code>role</code> zugelassen
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

- Die Elemente {{HTMLElement("picture")}}, {{HTMLElement("object")}}, und {{HTMLElement("embed")}}
- {{cssxref("object-fit")}}, {{cssxref("object-position")}}, {{cssxref("image-orientation")}}, {{cssxref("image-rendering")}}, und {{cssxref("image-resolution")}}: Bildbezogene CSS-Eigenschaften.
- [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) Schnittstelle für dieses Element
- [HTML-Bilder](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images)
- [Leitfaden zu Bild-Dateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types)
- [Leitfaden zu responsiven Bildern](/de/docs/Web/HTML/Guides/Responsive_images)
