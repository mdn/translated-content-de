---
title: "<img>: Das Bild-Einbettungselement"
slug: Web/HTML/Reference/Elements/img
l10n:
  sourceCommit: 743ba8b257cd06449b192818df120e609f6e16d2
---

Das **`<img>`**-[HTML](/de/docs/Web/HTML)-Element bettet ein Bild in das Dokument ein.

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

- Das `src`-Attribut enthält den Pfad zum Bild, das Sie einbetten möchten. Es ist nicht zwingend erforderlich, wenn das [srcset](/de/docs/Web/API/HTMLImageElement/srcset)-Attribut verfügbar ist. Es muss jedoch mindestens eines der `src`- oder `srcset`-Attribute angegeben werden.
- Das `alt`-Attribut enthält einen textuellen Ersatz für das Bild, der zwingend erforderlich und **äußerst nützlich** für die Barrierefreiheit ist — Bildschirmleser lesen den Attributwert ihren Nutzern vor, damit sie wissen, was das Bild bedeutet. Alternativtext wird auch auf der Seite angezeigt, wenn das Bild aus irgendeinem Grund nicht geladen werden kann: zum Beispiel Netzwerkausfälle, Inhaltsblockierung oder Link-Verfall.

Es gibt viele andere Attribute für verschiedene Zwecke:

- [Referrer](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy)/{{Glossary("CORS", "CORS")}}-Kontrolle für Sicherheit und Datenschutz: siehe [`crossorigin`](#crossorigin) und [`referrerpolicy`](#referrerpolicy).
- Verwenden Sie sowohl [`width`](#width) als auch [`height`](#height), um die intrinsische Größe des Bildes festzulegen, sodass es Platz einnimmt, bevor es geladen wird, um Layoutverschiebungen zu minimieren.
- Hinweistexte für responsive Bilder mit [`sizes`](#sizes) und [`srcset`](#srcset) (siehe auch das {{htmlelement("picture")}}-Element und unseren [Leitfaden zu responsiven Bildern](/de/docs/Web/HTML/Guides/Responsive_images)).

## Unterstützte Bildformate

Der HTML-Standard legt nicht fest, welche Bildformate unterstützt werden sollen, daher können {{Glossary("user_agent", "User Agents")}} unterschiedliche Formate unterstützen.

> [!NOTE]
> Der [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types) bietet umfassende Informationen über Bildformate und deren Unterstützung durch Webbrowser. Dieser Abschnitt ist nur eine Zusammenfassung!

Die am häufigsten verwendeten Bilddateiformate im Web sind:

- [APNG (Animated Portable Network Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#apng_animated_portable_network_graphics) — Gute Wahl für verlustfreie Animationssequenzen (GIF ist weniger leistungsfähig)
- [AVIF (AV1 Image File Format)](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) — Gute Wahl für sowohl Bilder als auch animierte Bilder dank hoher Leistung.
- [GIF (Graphics Interchange Format)](/de/docs/Web/Media/Guides/Formats/Image_types#gif_graphics_interchange_format) — Gute Wahl für _einfache_ Bilder und Animationen.
- [JPEG (Joint Photographic Expert Group image)](/de/docs/Web/Media/Guides/Formats/Image_types#jpeg_joint_photographic_experts_group_image) — Gute Wahl für verlustbehaftete Komprimierung von Standbildern (derzeit das beliebteste).
- [PNG (Portable Network Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#png_portable_network_graphics) — Gute Wahl für verlustfreie Komprimierung von Standbildern (etwas bessere Qualität als JPEG).
- [SVG (Scalable Vector Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#svg_scalable_vector_graphics) — Vektorbildformat. Zu verwenden für Bilder, die in unterschiedlichen Größen genau dargestellt werden müssen.
- [WebP (Web Picture format)](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) — Hervorragende Wahl für sowohl Bilder als auch animierte Bilder

Formate wie [WebP](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) und [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) sind zu empfehlen, da sie viel besser als PNG, JPEG, GIF für sowohl Stand- als auch animierte Bilder performen.

SVG bleibt das empfohlene Format für Bilder, die in unterschiedlichen Größen genau dargestellt werden müssen.

## Ladefehler von Bildern

Wenn ein Fehler beim Laden oder Rendern eines Bildes auftritt und ein `onerror`-Ereignishandler für das [`error`](/de/docs/Web/API/HTMLElement/error_event)-Ereignis festgelegt wurde, wird dieser Ereignishandler aufgerufen. Dies kann in mehreren Situationen auftreten, unter anderem:

- Die `src`- oder `srcset`-Attribute sind leer (`""`) oder `null`.
- Die `src`-{{Glossary("URL", "URL")}} ist die gleiche wie die URL der Seite, auf der sich der Benutzer gerade befindet.
- Das Bild ist in irgendeiner Weise beschädigt, das verhindert, dass es geladen wird.
- Die Metadaten des Bildes sind so beschädigt, dass es unmöglich ist, seine Abmessungen zu ermitteln, und keine Abmessungen wurden in den Attributen des `<img>`-Elements angegeben.
- Das Bild ist in einem Format, das nicht durch den {{Glossary("user_agent", "User Agent")}} unterstützt wird.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `alt`
  - : Definiert Text, der das Bild auf der Seite ersetzen kann.

    > [!NOTE]
    > Browser zeigen nicht immer Bilder an. Es gibt eine Reihe von Situationen, in denen ein Browser möglicherweise keine Bilder anzeigt, beispielsweise:
    >
    > - Nicht-visuelle Browser (wie solche, die von Menschen mit Sehbehinderungen verwendet werden)
    > - Der Benutzer entscheidet sich, keine Bilder anzuzeigen (Bandbreite sparen, Datenschutzgründe)
    > - Das Bild ist ungültig oder ein [nicht unterstützter Typ](#unterstützte_bildformate)
    >
    > In diesen Fällen kann der Browser das Bild durch den Text im `alt`-Attribut des Elements ersetzen. Aus diesen und anderen Gründen sollten Sie, wann immer möglich, einen nützlichen Wert für `alt` bereitstellen.

    Wenn dieses Attribut auf einen leeren String gesetzt wird (`alt=""`), zeigt dies an, dass dieses Bild _nicht_ ein wesentlicher Bestandteil des Inhalts ist (es handelt sich um eine Dekoration oder ein Tracking-Pixel) und dass nicht-visuelle Browser es möglicherweise von der {{Glossary("Engine/Rendering", "Darstellung")}} ausschließen. Visuelle Browser verbergen auch das Symbol für das fehlerhafte Bild, wenn das `alt`-Attribut leer ist und das Bild nicht angezeigt werden konnte.

    Dieses Attribut wird auch beim Kopieren und Einfügen des Bildes in Text oder beim Speichern eines verlinkten Bildes als Lesezeichen verwendet.

- `attributionsrc` {{deprecated_inline}}
  - : Gibt an, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header zusammen mit der Bildanforderung senden soll.

    Auf Serverseite wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Headers in der Antwort auszulösen, um eine bildbasierte [Quellattribution](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#html-based_event_sources) oder einen [Attribution-Trigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#html-based_attribution_triggers) zu registrieren. Welcher Antwort-Header zurückgesendet werden soll, hängt vom Wert des `Attribution-Reporting-Eligible`-Headers ab, der die Registrierung ausgelöst hat.

    Das entsprechende Quell- oder Triggerereignis wird ausgelöst, sobald der Browser die Antwort mit der Bilddatei erhält.

    > [!NOTE]
    > Siehe die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) für weitere Details.

    Es gibt zwei Versionen dieses Attributs, die Sie festlegen können:
    - Boolean, d.h. nur der `attributionsrc`-Name. Dies gibt an, dass der {{httpheader("Attribution-Reporting-Eligible")}}-Header an denselben Server gesendet werden soll, auf den das `src`-Attribut verweist. Dies ist in Ordnung, wenn Sie die Quellen- oder Triggerregistrierung auf demselben Server handhaben. Beim Registrieren eines Attribution-Triggers ist diese Eigenschaft optional, und ein Boolean-Wert wird verwendet, wenn es weggelassen wird.
    - Wert, der eine oder mehrere URLs enthält, zum Beispiel:

    ```html
    <img
      src="image-file.png"
      alt="My image file description"
      attributionsrc="https://a.example/register-source
                         https://b.example/register-source" />
    ```

    Dies ist nützlich in Fällen, in denen sich die angeforderte Ressource nicht auf einem von Ihnen kontrollierten Server befindet oder Sie die Quellenregistrierung auf einem anderen Server handhaben möchten. In diesem Fall können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcenanforderung erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header an die im `attributionSrc` angegebenen URL(s) zusätzlich zum Ursprung der Ressource gesendet. Diese URLs können dann mit einem entsprechenden {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header antworten, um die Registrierung abzuschließen.

    > [!NOTE]
    > Das Angeben mehrerer URLs bedeutet, dass mehrere Quellattributionen für dieselbe Funktion registriert werden können. Sie könnten zum Beispiel verschiedene Kampagnen haben, deren Erfolg Sie messen möchten, welche das Generieren verschiedener Berichte über unterschiedliche Daten umfassen.

- [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)
  - : Gibt an, ob das Abrufen des Bildes mit einer {{Glossary("CORS", "CORS")}}-Anforderung erfolgen muss. Bilddaten aus einem [CORS-fähigen Bild](/de/docs/Web/HTML/How_to/CORS_enabled_image), das von einer CORS-Anforderung zurückgegeben wird, können im {{HTMLElement("canvas")}}-Element wiederverwendet werden, ohne dass es als "[verfälscht](/de/docs/Web/HTML/How_to/CORS_enabled_image#security_and_tainted_canvases)" markiert wird.

    Wenn das `crossorigin`-Attribut _nicht_ angegeben ist, wird eine nicht-CORS-Anfrage gesendet (ohne den {{httpheader("Origin")}}-Anforderungsheader), und der Browser markiert das Bild als verfälscht und beschränkt den Zugriff auf dessen Bilddaten, wodurch dessen Verwendung in {{HTMLElement("canvas")}}-Elementen verhindert wird.

    Wenn das `crossorigin`-Attribut angegeben ist, wird eine CORS-Anforderung gesendet (mit dem {{httpheader("Origin")}}-Anforderungsheader); jedoch wenn der Server nicht auf den Zugriff auf die Bilddaten des Ursprungsstandorts optiert (indem er keinen {{httpheader("Access-Control-Allow-Origin")}}-Antwortheader sendet oder den Ursprung der Website nicht in einem {{httpheader("Access-Control-Allow-Origin")}}-Antwortheader, den er sendet, angibt), blockiert der Browser das Bild vom Laden und protokolliert einen CORS-Fehler in der Entwicklertools-Konsole.

    Zulässige Werte:
    - `anonymous`
      - : Eine CORS-Anforderung wird ohne Anmeldeinformationen gesendet (das heißt, keine {{Glossary("cookie", "Cookies")}}, [X.509-Zertifikate](https://datatracker.ietf.org/doc/html/rfc5280) oder {{httpheader("Authorization")}}-Anforderungsheader).
    - `use-credentials`
      - : Die CORS-Anforderung wird mit allen Anmeldeinformationen gesendet (das heißt, Cookies, X.509-Zertifikate und der `Authorization`-Anforderungsheader). Wenn der Server nicht darauf optiert, Anmeldeinformationen mit dem Ursprung der Website zu teilen (durch Senden des `Access-Control-Allow-Credentials: true`-Antwortheaders), markiert der Browser das Bild als verfälscht und beschränkt den Zugriff auf dessen Bilddaten.

    Wenn das Attribut einen ungültigen Wert hat, behandeln Browser es, als ob der Wert `anonymous` verwendet wurde. Siehe [CORS-Attribut Einstellungen](/de/docs/Web/HTML/Reference/Attributes/crossorigin) für zusätzliche Informationen.

- `decoding`
  - : Dieses Attribut gibt dem Browser einen Hinweis darauf, ob die Bild-Dekodierung zusammen mit der Darstellung des anderen DOM-Inhalts in einem einzigen Präsentationsschritt, der "korrekter" aussieht (`sync`), erfolgen soll oder zuerst der andere DOM-Inhalt dargestellt und präsentiert werden soll und anschließend das Bild dekodiert und präsentiert wird (`async`). In der Praxis bedeutet `async`, dass das nächste Rendering nicht auf die Dekodierung des Bildes wartet.

    Es ist oft schwierig, eine wahrnehmbare Wirkung durch die Verwendung von `decoding` bei statischen `<img>`-Elementen festzustellen. Sie werden wahrscheinlich zunächst als leere Bilder gerendert, während die Bilddateien (entweder aus dem Netzwerk oder aus dem Cache) abgerufen und dann unabhängig verarbeitet werden, sodass das "Synchronisieren" von Inhaltsaktualisierungen weniger offensichtlich ist. Das Blockieren der Darstellung während der Dekodierung kann zwar oft gering sein, _aber_ es kann gemessen werden — auch wenn es mit dem menschlichen Auge schwer zu beobachten ist. Siehe [Was tut das Bilddekodierungs-Attribut tatsächlich?](https://www.tunetheweb.com/blog/what-does-the-image-decoding-attribute-actually-do/) für eine detaillierte Analyse (tunetheweb.com, 2023).

    Die Verwendung unterschiedlicher `decoding`-Typen kann merklichere Unterschiede bei der dynamischen Einfügung von `<img>`-Elementen in das DOM über JavaScript bewirken — siehe [`HTMLImageElement.decoding`](/de/docs/Web/API/HTMLImageElement/decoding) für weitere Details.

    Zulässige Werte:
    - `sync`
      - : Dekodieren Sie das Bild synchron zusammen mit der Darstellung des anderen DOM-Inhalts und präsentieren Sie alles zusammen.
    - `async`
      - : Dekodieren Sie das Bild asynchron nach der Darstellung und Präsentation des anderen DOM-Inhalts.
    - `auto`
      - : Keine Präferenz für den Dekodierungsmodus; der Browser entscheidet, was für den Benutzer am besten ist. Dies ist der Standardwert.

- [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming)
  - : Markiert das Bild zur Beobachtung durch die [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming) API. Der angegebene Wert wird zu einem Identifikator für das beobachtete Bild-Element. Siehe auch die Seite zum [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming) Attribut.

- [`fetchpriority`](/de/docs/Web/HTML/Reference/Attributes/fetchpriority)
  - : Gibt einen Hinweis auf die relative Priorität an, die beim Abruf des Bildes verwendet werden soll. Zulässige Werte:
    - `high`
      - : Das Bild wird mit hoher Priorität im Vergleich zu anderen Bildern abgerufen.
    - `low`
      - : Das Bild wird mit niedriger Priorität im Vergleich zu anderen Bildern abgerufen.
    - `auto`
      - : Keine Präferenz für die Abrufpriorität festlegen.
        Dies ist der Standardwert.
        Er wird verwendet, wenn kein Wert oder ein ungültiger Wert gesetzt wird.

- `height`
  - : Die intrinsische Höhe des Bildes in Pixel. Muss eine ganze Zahl ohne Einheit sein.

    > [!NOTE]
    > Das Hinzufügen von `height` und [`width`](#width) ermöglicht es dem Browser, das {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Bildes zu berechnen, bevor es geladen wird. Dieses Seitenverhältnis wird verwendet, um den benötigten Platz zur Anzeige des Bildes zu reservieren und die Layoutverschiebung zu reduzieren oder sogar zu verhindern, wenn das Bild heruntergeladen und auf den Bildschirm gemalt wird. Die Reduzierung der Layoutverschiebung ist ein wesentlicher Bestandteil einer guten Benutzererfahrung und Web-Performance.

- `ismap`
  - : Dieses Boolean-Attribut gibt an, dass das Bild Teil einer [Server-seitigen Karte](https://de.wikipedia.org/wiki/Imagemap#Server-seitige_Bildkarten) ist. In diesem Fall werden die Koordinaten, an denen der Benutzer auf das Bild geklickt hat, an den Server gesendet.

    > [!NOTE]
    > Dieses Attribut ist nur zulässig, wenn das `<img>`-Element ein Nachfahre eines {{htmlelement("a")}}-Elements mit einem gültigen [`href`](/de/docs/Web/HTML/Reference/Elements/a#href)-Attribut ist. Dies gibt Benutzern ohne Zeigegeräte ein alternativen Zielpunkt.

- `loading`
  - : Gibt an, wie der Browser das Bild laden soll:
    - `eager`
      - : Lädt das Bild sofort, unabhängig davon, ob das Bild derzeit im sichtbaren Viewport ist oder nicht (dies ist der Standardwert).
    - `lazy`
      - : Verzögert das Laden des Bildes, bis es eine berechnete Entfernung vom Viewport erreicht, wie vom Browser definiert.

        Lazy Loading vermeidet das Netzwerk- und Speicherbandbreite, die erforderlich ist, um das Bild zu bearbeiten, bis es hinreichend sicher ist, dass es benötigt wird. Dies verbessert die Leistung in den meisten typischen Anwendungsfällen.

        Während explizite [`width`](#width)- und [`height`](#height)-Attribute für alle Bilder empfohlen werden, um Layoutverschiebungen zu vermeiden, sind sie für Lazy-Loaded-Bilder besonders wichtig. Lazy-Loaded-Bilder werden niemals geladen, wenn sie keinen sichtbaren Teil eines Elements durchschneiden, selbst wenn das Laden diese ändern würde, da nicht geladene Bilder eine `width` und `height` von `0` haben. Das schafft eine noch störendere Benutzererfahrung, wenn die im Viewport sichtbaren Inhalte während des Lesens reflowen.

        Lazy-Loaded-Bilder, die sich im visuellen Viewport befinden, sind möglicherweise nicht sichtbar, wenn das Window-[`load`](/de/docs/Web/API/Window/load_event)-Ereignis ausgelöst wird. Dies liegt daran, dass das Ereignis basierend auf Eager-Loaded-Bildern ausgelöst wird — Lazy-Loaded-Bilder werden nicht berücksichtigt, selbst wenn sie sich am Anfang des Seitenladevorgangs im visuellen Viewport befinden.

        Das Laden wird nur verzögert, wenn JavaScript aktiviert ist. Dies ist eine Anti-Tracking-Maßnahme, da, wenn ein User Agent Lazy Loading unterstützt, selbst wenn das Skripting deaktiviert ist, es für eine Website immer noch möglich wäre, die ungefähre Scrollposition eines Benutzers während einer Sitzung zu verfolgen, indem strategisch Bilder in einem Seiten-Markup platziert werden, sodass der Server verfolgen kann, wie viele Bilder und wann angefordert werden.

- `referrerpolicy`
  - : Ein String, der angibt, welchen Referrer Sie beim Abrufen der Ressource verwenden möchten:
    - `no-referrer`: Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}}-Header wird nicht an {{Glossary("origin", "Ursprünge")}} ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`: Der gesendete Referrer wird auf den Ursprung der verweisenden Seite beschränkt: dessen [Schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`: Der an andere Ursprünge gesendete Referrer wird auf das Schema, den Host und den Port beschränkt. Navigationen am selben Ursprung enthalten weiterhin den Pfad.
    - `same-origin`: Ein Referrer wird für {{Glossary("Same-origin_policy", "gleiches Ursprung")}} gesendet, aber Cross-Origin-Anfragen enthalten keine Referrer-Informationen.
    - `strict-origin`: Senden Sie nur den Ursprung des Dokuments als Referrer, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), aber senden Sie es nicht an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard): Senden Sie eine vollständige URL bei einer gleichartigen Anfrage, senden Sie nur den Ursprung, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), und senden Sie keinen Header an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `unsafe-url`: Der Referrer wird den Ursprung _und_ den Pfad enthalten (jedoch nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder [Benutzername](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen zu unsicheren Ursprungen leakt.

- `sizes`
  - : Ein oder mehrere Werte, getrennt durch Kommata, die Quellgrößen oder das Schlüsselwort `auto` sein können. Die Spezifikation erfordert, dass das `sizes`-Attribut nur vorhanden ist, wenn `srcset` Breitenbeschreibungen verwendet.

    Eine **Quellgröße** besteht aus:
    1. Einer [Medienbedingung](/de/docs/Web/CSS/Guides/Media_queries/Using#syntax), die für das letzte Element in der Liste weggelassen wird.
    2. Einem Quellgrößenwert.

    Medienbedingungen beschreiben Eigenschaft\en des _Viewports_, nicht des _Bildes_. Zum Beispiel würde `(height <= 500px) 1000px` vorschlagen, eine Bildquelle von 1000px Breite zu verwenden, wenn die _Viewport_-Höhe 500px oder weniger beträgt. Da ein Quellgrößenbeschreiber die Breite angibt, die während des Layouts für das Bild verwendet werden soll, basiert die Medienbedingung typischerweise (aber nicht notwendigerweise) auf der {{cssxref("@media/width")}}.

    Quellgrößenwerte geben die intendierte Anzeigegröße des Bildes an. {{Glossary("User_agent", "User Agents")}} verwenden die aktuelle Quellgröße, um eine der durch das `srcset`-Attribut bereitgestellten Quellen auszuwählen, wenn diese Quellen mit Breiten- (`w`) Beschreibern beschrieben sind. Die ausgewählte Quellgröße beeinflusst die {{Glossary("intrinsic_size", "intrinsische Größe")}} des Bildes (die Anzeigengröße des Bildes, wenn keine {{Glossary("CSS", "CSS")}}-Stilierung angewendet wird).

    Ein Quellgrößenwert kann jede nicht-negative [Länge](/de/docs/Web/CSS/Reference/Values/length) sein. Es darf keine CSS-Funktionen außer den [Mathematik-Funktionen](/de/docs/Web/CSS/Reference/Values/Functions#math_functions) verwenden. Einheiten werden in derselben Weise wie [Medienabfragen](/de/docs/Web/CSS/Guides/Media_queries) interpretiert, was bedeutet, dass alle relativen Längeneinheiten relativ zu der Dokumentenwurzel und nicht dem `<img>`-Element sind. Zum Beispiel ist ein `em`-Wert relativ zur Root-Schriftgröße, nicht zur Schriftgröße des Bildes. [Prozentwerte](/de/docs/Web/CSS/Reference/Values/percentage) sind nicht erlaubt. Wenn das `sizes`-Attribut nicht bereitgestellt wird, hat es einen Standardwert von `100vw` (Viewport-Breite).

    Das `auto`-Schlüsselwort kann die gesamte Liste der Größen oder den ersten Eintrag in der Liste ersetzen. Es ist nur gültig, wenn es mit `loading="lazy"` kombiniert wird und auf die [konkrete Größe](/de/docs/Web/CSS/Reference/Values/image) des Bildes auflöst. Da die intrinsische Größe des Bildes noch nicht bekannt ist, sollten auch `width`- und `height`-Attribute (oder deren CSS-Äquivalente) angegeben werden, um zu verhindern, dass der Browser die Standardbildbreite von 300px annimmt.
    Für eine bessere Abwärtskompatibilität mit Browsern, die `auto` nicht unterstützen, können Sie nach `auto` in der `sizes`-Attribut eine Fallback-Größe einschließen:

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
  - : Die Bild-{{Glossary("URL", "URL")}}. Mindestens eines von `src` und [`srcset`](#srcset) ist für ein `<img>`-Element erforderlich. Wenn [`srcset`](#srcset) angegeben ist, wird `src` auf eine von zwei Arten verwendet:
    - als Fallback für Browser, die `srcset` nicht unterstützen.
    - Wenn `srcset` den "x"-Beschreiber verwendet, dann ist `src` äquivalent zu einer Quelle mit dem Dichtebeschreiber `1x`; das heißt, das durch `src` angegebene Bild wird auf Displays mit niedriger Dichte verwendet (wie z.B. typische 72 DPI oder 96 DPI Displays).

- `srcset`
  - : Ein oder mehrere durch Kommata getrennte Strings, die mögliche Bildquellen für den {{Glossary("user_agent", "User Agent")}} angeben, die verwendet werden sollen.

    Jeder String setzt sich zusammen aus:
    1. Einer {{Glossary("URL", "URL")}} zu einem Bild
    2. Optional, Leerzeichen gefolgt von einem der folgenden:
       - Einem Breitenbeschreiber (eine positive Ganzzahl, direkt gefolgt von `w`). Er _muss_ die intrinsische Breite des referenzierten Bildes entsprechen. Der Breitenbeschreiber wird durch die Quellgröße im `sizes`-Attribut geteilt, um die effektive Pixeldichte zu berechnen. Zum Beispiel, um eine Bildressource bereitzustellen, die verwendet werden soll, wenn der Renderer ein 450 Pixel breites Bild benötigt, verwenden Sie den Breitenbeschreiber `450w`. Wenn ein `srcset`-Attribut "w"-Beschreiber enthält, verwendet der Browser diese Beschreiber zusammen mit dem `sizes`-Attribut, um eine Ressource auszuwählen.
       - Einem Pixeldichtebeschreiber (eine positive Gleitkommazahl, direkt gefolgt von `x`). Er gibt die Bedingung an, unter der die zugehörige Bildressource als die Pixeldichte des Displays verwendet werden soll. Zum Beispiel, um eine Bildressource bereitzustellen, die verwendet werden soll, wenn die Pixeldichte das Doppelte der Standarddichte ist, verwenden Sie den Pixeldichtebeschreiber `2x` oder `2.0x`.

    Wenn kein Beschreiber angegeben ist, wird der Quelle der Standardbeschreiber `1x` zugewiesen. Es ist nicht korrekt, Breitenbeschreiber und Pixeldichtebeschreiber im gleichen `srcset`-Attribut zu mischen. Doppelte Beschreiber (zum Beispiel zwei Quellen im gleichen `srcset`, die beide mit `2x` beschrieben sind) sind ebenfalls ungültig.

    Leerzeichen, außer dem Leerzeichen, das die URL und den entsprechenden Bedingungsbeschreiber trennt, werden ignoriert; dies umfasst sowohl führende und nachfolgende Leerzeichen als auch Leerzeichen vor oder nach jedem Komma. Wenn jedoch ein Bildkandidaten-String keine Beschreiber und keine Leerzeichen nach der URL enthält, muss der folgende Bildkandidaten-String, falls vorhanden, mit einem oder mehreren Leerzeichen beginnen, andernfalls wird das Komma als Teil der URL betrachtet.

    Wenn das `srcset`-Attribut des `<img>`-Elements `x`-Beschreiber verwendet, berücksichtigen Browser auch die URL im `src`-Attribut (falls vorhanden) als Kandidaten und weisen ihm den Standardbeschreiber `1x` zu. Andererseits, wenn das `srcset`-Attribut Breitenbeschreiber verwendet, wird `src` nicht berücksichtigt und stattdessen das `sizes`-Attribut verwendet.

    Der User Agent wählt eine der verfügbaren Quellen nach eigenem Ermessen aus. Dies bietet ihnen erheblichen Spielraum, um ihre Auswahl basierend auf Präferenzen des Benutzers oder {{Glossary("bandwidth", "Bandbreiten")}}-Bedingungen anzupassen. Siehe unser [Leitfaden zu responsiven Bildern](/de/docs/Web/HTML/Guides/Responsive_images) für ein Beispiel.

- `width`
  - : Die intrinsische Breite des Bildes in Pixel. Muss eine ganze Zahl ohne Einheit sein.
- `usemap`
  - : Die partielle {{Glossary("URL", "URL")}} (beginnend mit `#`) einer [Bildkarte](/de/docs/Web/HTML/Reference/Elements/map), die mit dem Element verbunden ist.

    > [!NOTE]
    > Sie können dieses Attribut nicht verwenden, wenn das `<img>`-Element innerhalb eines {{htmlelement("a")}}- oder {{HTMLElement("button")}}-Elements ist.

### Veraltete Attribute

- `align` {{deprecated_inline}}
  - : Richtet das Bild im umliegenden Kontext aus. Verwenden Sie die {{cssxref('float')}}- und/oder {{cssxref('vertical-align')}}-{{Glossary("CSS", "CSS")}}-Eigenschaften anstelle dieses Attributs. Zulässige Werte:
    - `top`
      - : Entspricht `vertical-align: top` oder `vertical-align: text-top`
    - `middle`
      - : Entspricht `vertical-align: -moz-middle-with-baseline`
    - `bottom`
      - : Die Standardeinstellung, entspricht `vertical-align: unset` oder `vertical-align: initial`
    - `left`
      - : Entspricht `float: left`
    - `right`
      - : Entspricht `float: right`

- `border` {{deprecated_inline}}
  - : Die Breite eines Rahmens um das Bild. Verwenden Sie die {{cssxref('border')}}-{{Glossary("CSS", "CSS")}}-Eigenschaft anstelle dieses Attributs.
- `hspace` {{deprecated_inline}}
  - : Die Anzahl der Pixel Weißraum links und rechts vom Bild. Verwenden Sie die {{cssxref('margin')}}-CSS-Eigenschaft stattdessen.
- `longdesc` {{deprecated_inline}}
  - : Ein Link zu einer detaillierteren Beschreibung des Bildes. Mögliche Werte sind eine {{Glossary("URL", "URL")}} oder eine [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) eines Elements.

    > [!NOTE]
    > Dieses Attribut wurde in der [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/obsolete.html#element-attrdef-img-longdesc) als veraltet angesehen. Es hat eine ungewisse Zukunft; Autoren sollten eine {{Glossary("WAI", "WAI")}}-{{Glossary("ARIA", "ARIA")}}-Alternative wie [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) oder [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) verwenden.

- `name` {{deprecated_inline}}
  - : Ein Name für das Element. Verwenden Sie das [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut stattdessen.
- `vspace` {{deprecated_inline}}
  - : Die Anzahl der Pixel Weißraum über und unter dem Bild. Verwenden Sie die {{cssxref('margin')}}-CSS-Eigenschaft stattdessen.

## Styling mit CSS

`<img>` ist ein {{Glossary("replaced_elements", "ersetztes Element")}}; es hat standardmäßig einen {{cssxref("display")}}-Wert von `inline`, aber seine Standarddimensionen werden durch die intrinsischen Werte des eingebetteten Bildes definiert, als wäre es `inline-block`. Sie können Eigenschaften wie {{cssxref("border")}}/{{cssxref("border-radius")}}, {{cssxref("padding")}}/{{cssxref("margin")}}, {{cssxref("width")}}, {{cssxref("height")}} usw. auf ein Bild anwenden.

`<img>` hat keine Basislinie, daher wird bei der Verwendung von Bildern im Inline-Formatierungskontext mit {{cssxref("vertical-align", "vertical-align: baseline")}} das Ende des Bildes auf der Textbasislinie platziert.

Sie können die {{cssxref("object-position")}}-Eigenschaft verwenden, um das Bild innerhalb der Box des Elements zu positionieren, und die {{cssxref("object-fit")}}-Eigenschaft verwenden, um die Größe des Bildes innerhalb der Box anzupassen (zum Beispiel, ob das Bild in die Box passen sollte oder sie ausfüllen sollte, selbst wenn Zuschneiden erforderlich ist).

Abhängig von seinem Typ kann ein Bild eine intrinsische Breite und Höhe haben. Für einige Bildtypen sind jedoch keine intrinsischen Dimensionen erforderlich. {{Glossary("SVG", "SVG")}}-Bilder haben beispielsweise keine intrinsischen Dimensionen, wenn ihr Stamm-{{SVGElement("svg")}}-Element keine `width` oder `height` gesetzt hat.

## Barrierefreiheit

### Bedeutungsvolle Alternativbeschreibungen erstellen

Ein `alt`-Attributwert sollte einen klaren und prägnanten textuellen Ersatz für den Inhalt des Bildes bieten. Es sollte nicht die Anwesenheit des Bildes selbst oder den Dateinamen des Bildes beschreiben. Wenn das `alt`-Attribut absichtlich weggelassen wird, weil das Bild kein textuelles Äquivalent hat, ziehen Sie alternative Methoden in Betracht, um das zu präsentieren, was das Bild zu kommunizieren versucht.

#### Don't

```html example-bad
<img alt="image" src="penguin.jpg" />
```

#### Do

```html example-good
<img alt="A Penguin on a beach." src="penguin.jpg" />
```

Ein wichtiger Barrierefreiheitstest besteht darin, den Inhalt des `alt`-Attributs zusammen mit vorangehendem Textinhalt zu lesen, um zu sehen, ob es dieselbe Bedeutung wie das Bild vermittelt. Zum Beispiel, wenn dem Bild der Satz "Auf meinen Reisen sah ich ein niedliches kleines Tier:" vorangestellt wäre, könnte das _nicht_ empfohlene Beispiel von einem Bildschirmleser als "Auf meinen Reisen sah ich ein niedliches kleines Tier: Bild" gelesen werden, was keinen Sinn ergibt. Das _empfohlene_ Beispiel könnte von einem Bildschirmleser als "Auf meinen Reisen sah ich ein niedliches kleines Tier: Ein Pinguin am Strand." gelesen werden, was Sinn ergibt.

Für Bilder, die eine Aktion auslösen sollen, zum Beispiel, Bilder, die in einem {{htmlelement("a")}} oder {{htmlelement("button")}}-Element eingebettet sind, überlegen Sie, die ausgelöste Aktion im `alt`-Attributwert zu beschreiben. Zum Beispiel könnten Sie `alt="nächste Seite"` anstelle von `alt="Pfeil nach rechts"` schreiben. Sie könnten auch darüber nachdenken, eine optionale weitere Beschreibung in einem `title`-Attribut hinzuzufügen; dies kann von Bildschirmlesern gelesen werden, wenn es vom Benutzer angefordert wird.

Wenn ein `alt`-Attribut auf einem Bild nicht vorhanden ist, können einige Bildschirmleser stattdessen den Dateinamen des Bildes ankündigen. Dies kann eine verwirrende Erfahrung sein, wenn der Dateiname nicht repräsentativ für den Inhalt des Bildes ist.

- [Ein Entscheidungsbaum für Alt-Texte • Bilder • WAI-Web-Accessibility-Tutorials](https://www.w3.org/WAI/tutorials/images/decision-tree/)
- [Alt-Texte: Der ultimative Leitfaden — Axess Lab](https://axesslab.com/alt-texts/)
- [Wie man großartige Alt-Texte gestaltet: Eine Einführung | Deque](https://www.deque.com/blog/great-alt-text-introduction/)
- [MDN Verständnis WCAG, Richtlinien 1.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verständnis des Erfolgskriteriums 1.1.1 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

### SVG als Bild identifizieren

Aufgrund eines [VoiceOver-Bugs](https://webkit.org/b/216364) kündigt VoiceOver SVG-Bilder nicht korrekt als Bilder an. Inkludieren Sie [`role="img"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/img_role) bei allen `<img>`-Elementen mit SVG-Quelldateien, um sicherzustellen, dass assistierende Technologien das SVG korrekt als Bildinhalt ankündigen.

```html
<img src="mdn.svg" alt="MDN" role="img" />
```

### Das title-Attribut

Das [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)-Attribut ist kein akzeptabler Ersatz für das `alt`-Attribut. Darüber hinaus sollten Sie vermeiden, den Wert des `alt`-Attributs in einem `title`-Attribut zu duplizieren, das auf dasselbe Bild angewendet wird. Dies kann dazu führen, dass einige Bildschirmleser denselben Text zweimal ankündigen, was eine verwirrende Erfahrung schafft.

Das `title`-Attribut sollte auch nicht als ergänzende Bildunterschriftsinformation zur Begleitung einer `alt`-Beschreibung eines Bildes verwendet werden. Wenn ein Bild eine Bildunterschrift benötigt, verwenden Sie die [`figure`](/de/docs/Web/HTML/Reference/Elements/figure)- und [`figcaption`](/de/docs/Web/HTML/Reference/Elements/figcaption)-Elemente.

Der Wert des `title`-Attributs wird dem Benutzer normalerweise als Tooltip präsentiert, der kurz nachdem der Cursor nicht mehr über dem Bild bewegt wird, erscheint. Obwohl dies _zusätzliche_ Informationen für den Benutzer bereitstellen kann, sollten Sie nicht davon ausgehen, dass der Benutzer es jemals sehen wird: der Benutzer kann möglicherweise nur eine Tastatur oder einen Touchscreen haben. Wenn Sie Informationen haben, die besonders wichtig oder wertvoll für den Benutzer sind, präsentieren Sie sie inline unter Verwendung einer der oben genannten Methoden anstelle von `title`.

- [Die Verwendung des HTML title-Attributs – aktualisiert | Vispero](https://vispero.com/resources/using-the-html-title-attribute-updated/)

## Beispiele

### Alternativtext

Das folgende Beispiel bettet ein Bild in die Seite ein und enthält alternativen Text für die Barrierefreiheit.

```html
<img src="/shared-assets/images/examples/favicon144.png" alt="MDN" />
```

{{ EmbedLiveSample('Alternative_text', '100%', '160') }}

### Bildlink

Dieses Beispiel baut auf dem vorherigen auf und zeigt, wie man das Bild in einen Link verwandelt. Dazu verschachteln Sie das `<img>`-Tag innerhalb des {{HTMLElement("a")}}. Sie sollten den Alternativtext so gestalten, dass er die Ressource beschreibt, auf die der Link verweist, als ob Sie einen Textlink verwenden würden.

```html
<a href="https://developer.mozilla.org">
  <img
    src="/shared-assets/images/examples/favicon144.png"
    alt="Visit the MDN site" />
</a>
```

{{ EmbedLiveSample('Image_link', '100%', '160') }}

### Verwendung des srcset-Attributs

In diesem Beispiel fügen wir ein `srcset`-Attribut mit einem Verweis auf eine hochauflösende Version des Logos ein; dieses wird anstelle des `src`-Bildes auf hochauflösenden Geräten geladen. Das im `src`-Attribut angegebene Bild wird als `1x`-Kandidat in {{Glossary("User_agent", "User Agents")}} gezählt, die `srcset` unterstützen.

```html
<img
  src="/shared-assets/images/examples/favicon72.png"
  alt="MDN"
  srcset="/shared-assets/images/examples/favicon144.png 2x" />
```

{{EmbedLiveSample("Using_the_srcset_attribute", "100%", "160")}}

### Verwendung der srcset- und sizes-Attribute

Das `src`-Attribut wird in {{Glossary("User_agent", "User Agents")}}, die `srcset` unterstützen, ignoriert, wenn `w`-Beschreiber enthalten sind. Wenn die `(width <= 600px)`-Medienbedingung erfüllt ist, wird das 200 Pixel breite Bild geladen (es ist das, das `200px` am nächsten kommt), andernfalls wird das andere Bild geladen.

```html
<img
  src="clock-demo-200px.png"
  alt="The time is 12:45."
  srcset="clock-demo-200px.png 200w, clock-demo-400px.png 400w"
  sizes="(width <= 600px) 200px, 50vw" />
```

{{EmbedLiveSample("Using_the_srcset_and_sizes_attributes", "100%", 350)}}

> [!NOTE]
> Um die Größenanpassung in Aktion zu sehen, {{LiveSampleLink('Using_the_srcset_and_sizes_attributes', 'sehen Sie sich das Beispiel auf einer separaten Seite an')}}, damit Sie tatsächlich den Inhaltsbereich anpassen können.

## Sicherheits- und Datenschutzbedenken

Obwohl `<img>`-Elemente unschuldige Verwendungen haben, können sie unerwünschte Konsequenzen für die Sicherheit und den Datenschutz der Benutzer haben. Siehe [Referer-Header: Datenschutz- und Sicherheitsbedenken](/de/docs/Web/Privacy/Guides/Referer_header:_privacy_and_security_concerns) für weitere Informationen und Maßnahmen.

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
          >Flow Content</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasing Content</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#embedded_content"
          >Embedded Content</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#palpable_content"
          >Palpable Content</a
        >. Wenn das Element ein <code>usemap</code>-Attribut hat, gehört es auch zur Kategorie Interaktiver Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "void element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss ein Starttag haben und darf keinen Endtag haben.</td>
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
            mit nicht-leerem <code>alt</code>-Attribut oder kein
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
            mit keinem <code>alt</code>-Attribut, keine <code>role</code> erlaubt
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

- {{HTMLElement("picture")}}, {{HTMLElement("object")}}, und {{HTMLElement("embed")}}-Elemente
- {{cssxref("object-fit")}}, {{cssxref("object-position")}}, {{cssxref("image-orientation")}}, {{cssxref("image-rendering")}}, und {{cssxref("image-resolution")}}: Bildbezogene CSS-Eigenschaften.
- [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Schnittstelle für dieses Element
- [HTML-Bilder](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images)
- [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types)
- [Responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images)
