---
title: "<img>: Das Bild-Embed-Element"
slug: Web/HTML/Reference/Elements/img
l10n:
  sourceCommit: 7c28cd21b705e7b7664d53b4d7822469ea8e6e15
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

- Das `src`-Attribut enthält den Pfad zu dem Bild, das eingebettet werden soll. Es ist nicht obligatorisch, wenn das Attribut [srcset](/de/docs/Web/API/HTMLImageElement/srcset) verfügbar ist. Es muss jedoch mindestens eines der Attribute `src` oder `srcset` angegeben werden.
- Das `alt`-Attribut enthält einen textuellen Ersatz für das Bild, welches obligatorisch und **unglaublich nützlich** für die Barrierefreiheit ist — Screenreader lesen den Attributwert vor, damit die Benutzer verstehen, was das Bild bedeutet. Der Alt-Text wird auch auf der Seite angezeigt, wenn das Bild aus irgendeinem Grund nicht geladen werden kann: zum Beispiel bei Netzwerkfehlern, Inhaltsblockierung oder Linkverfall.

Es gibt viele weitere Attribute für verschiedene Zwecke:

- [Referrer](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy)/{{Glossary("CORS", "CORS")}} Kontrolle für Sicherheit und Datenschutz: siehe [`crossorigin`](#crossorigin) und [`referrerpolicy`](#referrerpolicy).
- Verwenden Sie sowohl [`width`](#width) als auch [`height`](#height), um die intrinsische Größe des Bildes festzulegen und Platz zu reservieren, bevor es geladen wird, um Inhaltslayout-Verschiebungen zu verringern.
- Responsive Bildhinweise mit [`sizes`](#sizes) und [`srcset`](#srcset) (siehe auch das {{htmlelement("picture")}}-Element und unser [Leitfaden für responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images)).

## Unterstützte Bildformate

Der HTML-Standard listet nicht auf, welche Bildformate unterstützt werden sollen, daher können {{Glossary("user_agent", "User Agents")}} verschiedene Formate unterstützen.

> [!NOTE]
> Der [Leitfaden für Bilddateitypen und -formate](/de/docs/Web/Media/Guides/Formats/Image_types) bietet umfassende Informationen über Bildformate und deren Unterstützung durch Webbrowser.
> Dieser Abschnitt ist nur eine Zusammenfassung!

Die Bilddateiformate, die im Web am häufigsten verwendet werden, sind:

- [APNG (Animated Portable Network Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#apng_animated_portable_network_graphics) — Gute Wahl für verlustfreie Animationssequenzen (GIF ist weniger performant)
- [AVIF (AV1 Image File Format)](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) — Gute Wahl für sowohl Bilder als auch animierte Bilder dank hoher Leistung.
- [GIF (Graphics Interchange Format)](/de/docs/Web/Media/Guides/Formats/Image_types#gif_graphics_interchange_format) — Gute Wahl für _einfache_ Bilder und Animationen.
- [JPEG (Joint Photographic Expert Group image)](/de/docs/Web/Media/Guides/Formats/Image_types#jpeg_joint_photographic_experts_group_image) — Gute Wahl für verlustbehaftete Komprimierung von Standbildern (derzeit am beliebtesten).
- [PNG (Portable Network Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#png_portable_network_graphics) — Gute Wahl für verlustfreie Komprimierung von Standbildern (leicht bessere Qualität als JPEG).
- [SVG (Scalable Vector Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#svg_scalable_vector_graphics) — Vektorbilderformat. Verwenden Sie es für Bilder, die bei verschiedenen Größen genau gezeichnet werden müssen.
- [WebP (Web Picture format)](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) — Ausgezeichnete Wahl für sowohl Bilder als auch animierte Bilder

Formate wie [WebP](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) und [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) werden empfohlen, da sie viel besser als PNG, JPEG, GIF für sowohl Standbilder als auch animierte Bilder sind.

SVG bleibt das empfohlene Format für Bilder, die bei verschiedenen Größen genau gezeichnet werden müssen.

## Bildladefehler

Wenn während des Ladens oder Renderns eines Bildes ein Fehler auftritt und ein `onerror`-Ereignishandler für das [`error`](#error_event)-Ereignis eingerichtet wurde, wird dieser Ereignishandler aufgerufen. Dies kann in mehreren Situationen passieren, einschließlich:

- Die `src`- oder `srcset`-Attribute sind leer (`""`) oder `null`.
- Die `src` {{Glossary("URL", "URL")}} ist dieselbe wie die URL der Seite, auf der sich der Benutzer gerade befindet.
- Das Bild ist in irgendeiner Weise beschädigt, die es verhindert, dass es geladen wird.
- Die Metadaten des Bildes sind so beschädigt, dass es unmöglich ist, dessen Abmessungen abzurufen, und es wurden keine Abmessungen in den Attributen des `<img>`-Elements festgelegt.
- Das Bild ist in einem Format, das nicht vom {{Glossary("user_agent", "User Agent")}} unterstützt wird.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `alt`
  - : Definiert Text, der das Bild auf der Seite ersetzen kann.

    > [!NOTE]
    > Browser zeigen nicht immer Bilder an. Es gibt eine Reihe von Situationen, in denen ein Browser möglicherweise keine Bilder anzeigt, wie zum Beispiel:
    >
    > - Nicht-visuelle Browser (wie sie von Personen mit Sehbehinderungen verwendet werden)
    > - Der Benutzer entscheidet sich, keine Bilder anzuzeigen (um Bandbreite zu sparen, aus Datenschutzgründen)
    > - Das Bild ist ungültig oder ein [nicht unterstützter Typ](#unterstützte_bildformate)
    >
    > In diesen Fällen kann der Browser das Bild durch den Text im `alt`-Attribut des Elements ersetzen. Aus diesen und anderen Gründen ist es wichtig, wann immer möglich einen nützlichen Wert für `alt` bereitzustellen.

    Das Setzen dieses Attributs auf einen leeren String (`alt=""`) zeigt an, dass dieses Bild _kein_ wesentlicher Bestandteil des Inhalts ist (es ist Dekoration oder ein Zählpixel) und dass nicht-visuelle Browser es von der {{Glossary("Engine/Rendering", "Darstellung")}} weglassen können. Visuelle Browser verbergen auch das kaputte Bild-Symbol, wenn das `alt`-Attribut leer ist und das Bild nicht angezeigt wird.

    Dieses Attribut wird auch verwendet, wenn das Bild in Text kopiert und eingefügt oder ein verlinktes Bild mit einem Lesezeichen versehen wird.

- `attributionsrc` {{deprecated_inline}}
  - : Gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header zusammen mit der Bildanfrage sendet.

    Auf der Serverseite wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}} oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Headers in der Antwort auszulösen, um eine bildbasierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#html-based_event_sources) oder einen [Attribution-Trigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#html-based_attribution_triggers) zu registrieren. Welcher Antwort-Header zurückgesendet werden soll, hängt vom Wert des `Attribution-Reporting-Eligible`-Headers ab, der die Registrierung ausgelöst hat.

    Das entsprechende Quellen- oder Trigger-Ereignis wird ausgelöst, sobald der Browser die Antwort mit der Bilddatei erhält.

    > [!NOTE]
    > Weitere Informationen finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

    Es gibt zwei Versionen dieses Attributs, die Sie festlegen können:
    - Boolean, d.h. nur der Name `attributionsrc`. Dies gibt an, dass Sie möchten, dass der {{httpheader("Attribution-Reporting-Eligible")}}-Header an denselben Server gesendet wird, auf den das `src`-Attribut zeigt. Das ist in Ordnung, wenn Sie die Registrierung der Attributionsquelle oder des Triggers auf demselben Server abwickeln. Bei der Registrierung eines Attribution-Triggers ist diese Eigenschaft optional und ein Boolean-Wert wird verwendet, wenn sie weggelassen wird.
    - Wert, der eine oder mehrere URLs enthält, zum Beispiel:

    ```html
    <img
      src="image-file.png"
      alt="My image file description"
      attributionsrc="https://a.example/register-source
                         https://b.example/register-source" />
    ```

    Dies ist nützlich in Fällen, in denen die angeforderte Ressource nicht auf einem Server ist, den Sie kontrollieren, oder Sie möchten die Registrierung der Attributionsquelle auf einem anderen Server abwickeln. In diesem Fall können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcenanfrage erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header an die in `attributionSrc` angegebenen URLs zusätzlich zum Ursprungsserver gesendet. Diese URLs können dann mit einem entsprechenden {{httpheader("Attribution-Reporting-Register-Source")}} oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header antworten, um die Registrierung abzuschließen.

    > [!NOTE]
    > Durch die Angabe mehrerer URLs können mehrere Attributionsquellen auf derselben Funktion registriert werden. Sie könnten zum Beispiel verschiedene Kampagnen haben, deren Erfolg Sie messen wollen, wobei es darum geht, unterschiedliche Berichte über unterschiedliche Daten zu generieren.

- [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)
  - : Gibt an, ob das Abrufen des Bildes über eine {{Glossary("CORS", "CORS")}}-Anfrage erfolgen muss. Bilddaten von einem [CORS-aktivierten Bild](/de/docs/Web/HTML/How_to/CORS_enabled_image), das von einer CORS-Anfrage zurückgegeben wird, können im {{HTMLElement("canvas")}}-Element wiederverwendet werden, ohne dass es als "[tainted](/de/docs/Web/HTML/How_to/CORS_enabled_image#security_and_tainted_canvases)" markiert wird.

    Wenn das `crossorigin`-Attribut _nicht_ angegeben ist, wird eine Nicht-CORS-Anfrage gesendet (ohne den {{httpheader("Origin")}}-Anforderungsheader), und der Browser markiert das Bild als tainted und schränkt den Zugriff auf seine Bilddaten ein, was die Verwendung in {{HTMLElement("canvas")}}-Elementen verhindert.

    Wenn das `crossorigin`-Attribut _angegeben_ ist, wird eine CORS-Anfrage gesendet (mit dem {{httpheader("Origin")}}-Anforderungsheader); jedoch, wenn der Server nicht zustimmt, den Bilddaten-Zugriff standortübergreifend zuzulassen (indem er keinen {{httpheader("Access-Control-Allow-Origin")}}-Antwortheader sendet oder den Standortursprung nicht in einen gesendeten {{httpheader("Access-Control-Allow-Origin")}}-Antwortheader aufnimmt), blockiert der Browser das Laden des Bildes und protokolliert einen CORS-Fehler in der Entwicklerkonsole.

    Zugelassene Werte:
    - `anonymous`
      - : Eine CORS-Anfrage wird ohne Anmeldeinformationen gesendet (d.h. keine {{Glossary("cookie", "Cookies")}}, [X.509-Zertifikate](https://datatracker.ietf.org/doc/html/rfc5280) oder {{httpheader("Authorization")}}-Anforderungsheader).
    - `use-credentials`
      - : Die CORS-Anfrage wird mit allen Anmeldeinformationen gesendet (d.h. Cookies, X.509-Zertifikate und der `Authorization`-Anforderungsheader). Wenn der Server nicht zustimmt, Anmeldeinformationen mit der Ursprung-Website zu teilen (indem er den Antwort-Header `Access-Control-Allow-Credentials: true` zurücksendet), markiert der Browser das Bild als tainted und schränkt den Zugriff auf seine Bilddaten ein.

    Wenn das Attribut einen ungültigen Wert hat, behandeln Browser es so, als ob der `anonymous`-Wert verwendet wurde. Weitere Informationen finden Sie unter [CORS-Einstellungen Attribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin).

- `decoding`
  - : Dieses Attribut gibt dem Browser einen Hinweis darauf, ob er das Bild-Dekodieren zusammen mit dem Rendern des anderen DOM-Inhalts in einem einzigen Präsentationsschritt durchführen soll, der korrekter aussieht (`sync`), oder den anderen DOM-Inhalt zuerst rendern und präsentieren und dann das Bild dekodieren und später präsentieren soll (`async`). In der Praxis bedeutet `async`, dass das nächste Paint nicht darauf wartet, dass das Bild dekodiert wird.

    Es ist oft schwierig, einen merklichen Effekt beim Verwenden von `decoding` auf statische `<img>`-Elemente wahrzunehmen. Sie werden wahrscheinlich anfänglich als leere Bilder gerendert, während die Bilddateien abgerufen werden (entweder aus dem Netzwerk oder aus dem Cache) und dann unabhängig gehandhabt werden, so dass die "Synchronisation" von Inhaltsaktualisierungen weniger offensichtlich ist. Jedoch das Blockieren des Renderns während des Dekodierens, während oft ziemlich klein, _kann_ gemessen werden — auch wenn es schwierig zu beobachten ist mit dem menschlichen Auge. Siehe [What does the image decoding attribute actually do?](https://www.tunetheweb.com/blog/what-does-the-image-decoding-attribute-actually-do/) für eine genauere Analyse (tunetheweb.com, 2023).

    Die Verwendung unterschiedlicher `decoding`-Typen kann zu spürbareren Unterschieden führen, wenn `<img>`-Elemente dynamisch via JavaScript in das DOM eingefügt werden — siehe [`HTMLImageElement.decoding`](/de/docs/Web/API/HTMLImageElement/decoding) für weitere Details.

    Zugelassene Werte:
    - `sync`
      - : Dekodiere das Bild synchron zusammen mit dem Rendern des anderen DOM-Inhalts, und präsentiere alles zusammen.
    - `async`
      - : Dekodiere das Bild asynchron, nach dem Rendern und Präsentieren des anderen DOM-Inhalts.
    - `auto`
      - : Keine Präferenz für den Dekodiermodus; der Browser entscheidet, was das Beste für den Benutzer ist. Dies ist der Standardwert.

- [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming)
  - : Markiert das Bild zur Beobachtung durch die [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)-API. Der angegebene Wert wird zu einem Bezeichner für das beobachtete Bildelement. Siehe auch die [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming) Attributseite.

- [`fetchpriority`](/de/docs/Web/HTML/Reference/Attributes/fetchpriority)
  - : Gibt einen Hinweis auf die relative Priorität an, die beim Abrufen des Bildes verwendet werden soll. Zugelassene Werte:
    - `high`
      - : Abrufen des Bildes mit hoher Priorität im Vergleich zu anderen Bildern.
    - `low`
      - : Abrufen des Bildes mit niedriger Priorität im Vergleich zu anderen Bildern.
    - `auto`
      - : Keine Präferenz für die Abfragepriorität festlegen.
        Dies ist der Standardwert.
        Er wird verwendet, wenn kein Wert oder ein ungültiger Wert gesetzt ist.
- `height`
  - : Die intrinsische Höhe des Bildes, in Pixel. Muss ein Ganzzahlwert ohne Einheit sein.

    > [!NOTE]
    > Die Angabe von `height` und [`width`](#width) ermöglicht es dem Browser, das {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Bildes zu berechnen, bevor das Bild geladen wird. Dieses Seitenverhältnis wird verwendet, um den Platz zu reservieren, der benötigt wird, um das Bild anzuzeigen, und reduziert oder verhindert sogar eine Layout-Verschiebung, wenn das Bild heruntergeladen und auf den Bildschirm gerendert wird. Die Reduzierung von Layout-Verschiebungen ist ein wichtiger Bestandteil einer guten Benutzererfahrung und Web-Performance.

- `ismap`
  - : Dieses Boolean-Attribut zeigt an, dass das Bild Teil einer [serverseitigen Karte](https://en.wikipedia.org/wiki/Image_map#Server-side) ist. Wenn ja, werden die Koordinaten, an denen der Benutzer auf das Bild geklickt hat, an den Server gesendet.

    > [!NOTE]
    > Dieses Attribut ist nur erlaubt, wenn das `<img>`-Element ein Nachkomme eines {{htmlelement("a")}}-Elements mit einem gültigen [`href`](/de/docs/Web/HTML/Reference/Elements/a#href)-Attribut ist. Dies gibt Benutzern ohne Zeigegeräte ein Fallback-Ziel.

- `loading`
  - : Gibt an, wie der Browser das Bild laden soll:
    - `eager`
      - : Lädt das Bild sofort, unabhängig davon, ob das Bild momentan innerhalb des sichtbaren Viewports liegt (dies ist der Standardwert).
    - `lazy`
      - : Verzögert das Laden des Bildes bis zu einer berechneten Entfernung vom Viewport, wie durch den Browser definiert. Die Absicht ist, die Netzwerk- und Speicherkapazität zu schonen, die benötigt wird, um das Bild zu verarbeiten, bis es vernünftigerweise sicher ist, dass es benötigt wird. Dies verbessert in den meisten typischen Anwendungsfällen die Leistung der Inhalte.

    Während explizite [`width`](#width) und [`height`](#height)-Attribute für alle Bilder zur Vermeidung von Layout-Verschiebungen empfohlen werden, sind sie besonders wichtig für verzögert geladenen Bilder. Verzögert geladene Bilder werden niemals geladen, wenn sie keinen sichtbaren Teil eines Elements schneiden, selbst wenn das Laden ihnen dies ändern würde, da ungeladene Bilder eine `width` und `height` von `0` haben. Dies führt zu einer noch störenderen Benutzererfahrung, wenn der im Viewport sichtbare Inhalt während des Lesens neu fließt.

    Das [`load`](/de/docs/Web/API/Window/load_event)-Ereignis wird ausgelöst, nachdem eagerly geladene Bilder abgerufen und verarbeitet wurden, aber bevor lazily geladene dies tun, selbst wenn die lazily geladenen Bilder sofort beim ersten Seitenaufruf im visuellen Viewport liegen. Diese Bilder werden immer noch geladen, sobald das Layout abgeschlossen ist; sie beeinflussen einfach das Timing des `load`-Ereignisses nicht. Das bedeutet, dass, wenn `load` ausgelöst wird, es möglich ist, dass sich im visuellen Viewport befindende, lazily geladene Bilder noch nicht sichtbar sind.

    Das Laden wird nur verzögert, wenn JavaScript aktiviert ist. Dies ist eine Anti-Tracking-Maßnahme, weil wenn ein User Agent verzögertes Laden unterstützen würde, wenn Scripting deaktiviert ist, es für eine Website dennoch möglich wäre, die ungefähre Scroll-Position eines Benutzers während einer Sitzung zu verfolgen, indem strategisch Bilder im Markup einer Seite platziert werden, sodass ein Server verfolgen kann, wie viele Bilder angefordert werden und wann.

- `referrerpolicy`
  - : Ein String, der angibt, welchen Referrer beim Abrufen der Ressource verwendet werden soll:
    - `no-referrer`: Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}}-Header wird nicht an {{Glossary("origin", "Ursprünge")}} ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`: Der gesendete Referrer ist auf den Ursprung der verweisenden Seite beschränkt: ihr [Schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`: Der an andere Ursprünge gesendete Referrer ist auf das Schema, den Host und den Port beschränkt. Navigationen auf demselben Ursprung enthalten weiterhin den Pfad.
    - `same-origin`: Ein Referrer wird für {{Glossary("Same-origin_policy", "gleiche Ursprünge")}} gesendet, aber bei plattformübergreifenden Anfragen wird keine Referrer-Information enthalten sein.
    - `strict-origin`: Nur den Ursprung des Dokuments als Referrer senden, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), ihn jedoch nicht an einen weniger sicheren Zielort senden (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard): Eine vollständige URL senden bei einer gleichartigen Anfrage, nur den Ursprung senden, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), und keinen Header an einen weniger sicheren Zielort senden (HTTPS→HTTP).
    - `unsafe-url`: Der Referrer enthält den Ursprung _und_ den Pfad (jedoch nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder [Benutzername](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, weil er Ursprünge und Wege von TLS-geschützten Ressourcen an unsichere Ursprünge preisgibt.

- `sizes`
  - : Ein oder mehrere durch Kommas getrennte Werte, die Quellengrößen oder das Schlüsselwort `auto` sein können. Die Spezifikation verlangt, dass das `sizes`-Attribut nur dann vorhanden ist, wenn `srcset` Breitenbeschreibungen verwendet.

    Eine **Quellengröße** besteht aus:
    1. Einer [Medienbedingung](/de/docs/Web/CSS/Guides/Media_queries/Using#syntax), die für das letzte Element in der Liste ausgelassen wird.
    2. Einem Quellengrößenwert.

    Medienbedingungen beschreiben Eigenschaften des _Viewports_, nicht des _Bildes_. Zum Beispiel: `(height <= 500px) 1000px` schlägt vor, eine Bildquelle von 1000px Breite zu verwenden, wenn die _Viewport_-Höhe 500px oder weniger beträgt. Da ein Quellengrößen-Deskriptor die Breite angibt, die für das Bild während des Layouts verwendet werden soll, basiert die Medienbedingung typischerweise (aber nicht notwendigerweise) auf dem {{cssxref("@media/width")}}.

    Quellengrößenwerte geben die beabsichtigte Anzeigengröße des Bildes an. {{Glossary("User_agent", "User Agents")}} verwenden die aktuelle Quellengröße, um eine der Quellen auszuwählen, die durch das `srcset`-Attribut bereitgestellt wurden, wenn diese Quellen durch Breiten (`w`)-Deskriptoren beschrieben werden. Die gewählte Quellengröße beeinflusst die {{Glossary("intrinsic_size", "intrinsische Größe")}} des Bildes (die Anzeigengröße des Bildes, wenn kein {{Glossary("CSS", "CSS")}}-Styling angewendet wird).

    Ein Quellengrößenwert kann jede nicht-negative [Länge](/de/docs/Web/CSS/Reference/Values/length) sein. Er darf keine CSS-Funktionen außer den [Mathefunktionen](/de/docs/Web/CSS/Reference/Values/Functions#math_functions) verwenden. Einheiten werden auf die gleiche Weise interpretiert wie [Medienabfragen](/de/docs/Web/CSS/Guides/Media_queries), was bedeutet, dass alle relativen Längeneinheiten relativ zur Dokumentwurzel und nicht zum `<img>`-Element sind. Ein `em`-Wert ist zum Beispiel relativ zur Wurzel-Schriftgröße, nicht zur Schriftgröße des Bildes. [Prozent](/de/docs/Web/CSS/Reference/Values/percentage)-Werte sind nicht erlaubt. Wenn das `sizes`-Attribut nicht bereitgestellt wird, hat es einen Standardwert von `100vw` (die Breite des Viewports).

    Das Schlüsselwort `auto` kann die gesamte Liste der Größen oder den ersten Eintrag in der Liste ersetzen. Es ist nur gültig, wenn es mit `loading="lazy"` kombiniert wird, und wird auf die [konkrete Größe](/de/docs/Web/CSS/Reference/Values/image) des Bildes aufgelöst. Da die intrinsische Größe des Bildes noch nicht bekannt ist, sollten auch `width`- und `height`-Attribute (oder CSS-Äquivalente) angegeben werden, um zu verhindern, dass der Browser die Standardbildbreite von 300px annimmt.
    Für eine bessere Abwärtskompatibilität mit Browsern, die `auto` nicht unterstützen, können Sie nach `auto` Fallback-Größen im `sizes`-Attribut einschließen:

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
  - : Die Bild-{{Glossary("URL", "URL")}}. Mindestens eines der Attribute `src` und [`srcset`](#srcset) ist für ein `<img>`-Element erforderlich. Wenn [`srcset`](#srcset) angegeben ist, wird `src` auf zwei Arten verwendet:
    - als Fallback für Browser, die `srcset` nicht unterstützen.
    - wenn `srcset` den "x"-Deskriptor verwendet, ist `src` gleichwertig mit einer Quelle mit dem Dichte-Deskriptor `1x`; das heißt, das durch `src` angegebene Bild wird auf Bildschirmen mit niedriger Dichte verwendet (wie typische 72 DPI oder 96 DPI Displays).

- `srcset`
  - : Einer oder mehrere durch Kommata getrennte Strings, die mögliche Bildquellen für den {{Glossary("user_agent", "User Agent")}} angeben.

    Jeder String besteht aus:
    1. Einer {{Glossary("URL", "URL")}} zu einem Bild
    2. Optional, einem Leerzeichen gefolgt von einem der folgenden:
       - Ein Breiten-Deskriptor (eine positive Ganzzahl direkt gefolgt von `w`). Er _muss_ mit der intrinsischen Breite des referenzierten Bildes übereinstimmen. Der Breiten-Deskriptor wird durch die Quellengröße im `sizes`-Attribut geteilt, um die effektive Pixeldichte zu berechnen. Zum Beispiel, um eine Bildressource bereitzustellen, die verwendet werden soll, wenn der Renderer ein 450 Pixel breites Bild benötigt, verwenden Sie den Breiten-Deskriptor `450w`. Wenn ein `srcset` "w"-Deskriptoren enthält, verwendet der Browser diese Deskriptoren zusammen mit dem `sizes`-Attribut, um eine Ressource auszuwählen.
       - Ein Pixeldichte-Deskriptor (eine positive Gleitkommazahl direkt gefolgt von `x`). Er gibt die Bedingung an, in der die entsprechende Bildressource als Pixeldichte des Displays verwendet werden soll. Zum Beispiel, um eine Bildressource bereitzustellen, die verwendet werden soll, wenn die Pixeldichte doppelt so hoch ist wie die Standarddichte, verwenden Sie den Pixeldichte-Deskriptor `2x` oder `2.0x`.

    Wenn kein Deskriptor angegeben ist, wird der Quelle der Standarddeskriptor `1x` zugewiesen. Es ist nicht korrekt, Breiten-Deskriptoren und Pixeldichte-Deskriptoren im selben `srcset`-Attribut zu mischen. Doppelte Deskriptoren (zum Beispiel zwei Quellen im selben `srcset`, die beide mit `2x` beschrieben werden) sind ebenfalls ungültig.

    Leerzeichen, außer den Leerzeichen, die die URL und den entsprechenden Bedingungsdeskriptor trennen, werden ignoriert; dazu zählen sowohl führende als auch nachfolgende Leerzeichen sowie Leerzeichen vor oder nach jedem Komma. Wenn jedoch ein Bildkandidat-String keine Deskriptoren und keine Leerzeichen nach der URL enthält, muss der folgende Bildkandidat-String, falls vorhanden, mit einem oder mehreren Leerzeichen beginnen, da das Komma andernfalls als Teil der URL angesehen wird.

    Wenn die `srcset`-Attribute des `<img>`-Elements `x`-Deskriptoren verwenden, betrachten Browser auch die URL im `src`-Attribut (falls vorhanden) als Kandidaten und weisen ihr einen Standarddeskriptor von `1x` zu. Wenn andererseits das `srcset`-Attribut Breiten-Deskriptoren verwendet, wird `src` nicht berücksichtigt und das `sizes`-Attribut stattdessen verwendet.

    Der User Agent wählt nach eigenem Ermessen eine der verfügbaren Quellen aus. Dies gibt ihm erheblichen Spielraum, um seine Auswahl anhand von Benutzerpräferenzen oder {{Glossary("bandwidth", "Bandbreite")}}-Bedingungen zu gestalten. Siehe unser [Leitfaden für responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images) für ein Beispiel.

- `width`
  - : Die intrinsische Breite des Bildes in Pixel. Muss ein Ganzzahlwert ohne Einheit sein.
- `usemap`
  - : Die partielle {{Glossary("URL", "URL")}} (beginnend mit `#`) einer mit dem Element verbundenen [Imagemap](/de/docs/Web/HTML/Reference/Elements/map).

    > [!NOTE]
    > Sie können dieses Attribut nicht verwenden, wenn das `<img>`-Element innerhalb eines {{htmlelement("a")}}- oder {{HTMLElement("button")}}-Elements ist.

### Veraltete Attribute

- `align` {{deprecated_inline}}
  - : Richtet das Bild an seinem umgebenden Kontext aus. Verwenden Sie die {{cssxref('float')}}-und/oder {{cssxref('vertical-align')}}- {{Glossary("CSS", "CSS")}}-Eigenschaften anstelle dieses Attributs. Erlaubte Werte:
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
  - : Die Breite eines Rahmens um das Bild. Verwenden Sie die {{cssxref('border')}} {{Glossary("CSS", "CSS")}}-Eigenschaft stattdessen.
- `hspace` {{deprecated_inline}}
  - : Die Anzahl der Pixel von Leerraum links und rechts des Bildes. Verwenden Sie die {{cssxref('margin')}}-CSS-Eigenschaft stattdessen.
- `longdesc` {{deprecated_inline}}
  - : Ein Link zu einer detaillierteren Beschreibung des Bildes. Mögliche Werte sind eine {{Glossary("URL", "URL")}} oder eine Element-[`id`](/de/docs/Web/HTML/Reference/Global_attributes/id).

    > [!NOTE]
    > Dieses Attribut wird im [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/obsolete.html#element-attrdef-img-longdesc) als veraltet betrachtet. Es hat eine ungewisse Zukunft; Autoren sollten eine {{Glossary("WAI", "WAI")}}-{{Glossary("ARIA", "ARIA")}}-Alternative wie [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) oder [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) verwenden.

- `name` {{deprecated_inline}}
  - : Ein Name für das Element. Verwenden Sie das [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut statt.
- `vspace` {{deprecated_inline}}
  - : Die Anzahl von Pixeln von Leerraum oberhalb und unterhalb des Bildes. Verwenden Sie die {{cssxref('margin')}}-CSS-Eigenschaft stattdessen.

## Styling mit CSS

`<img>` ist ein {{Glossary("replaced_elements", "ersetztes Element")}}; es hat einen {{cssxref("display")}}-Wert von `inline` standardmäßig, aber seine Standardabmessungen werden durch die eingebaute intrinsic-Werte des eingebetteten Bildes definiert, als wäre es `inline-block`. Sie können Eigenschaften wie {{cssxref("border")}}/{{cssxref("border-radius")}}, {{cssxref("padding")}}/{{cssxref("margin")}}, {{cssxref("width")}}, {{cssxref("height")}} usw. auf ein Bild setzen.

`<img>` hat keine Grundlinie, sodass es, wenn Bilder in einem Inline-Formatierungskontext mit {{cssxref("vertical-align", "vertical-align: baseline")}} verwendet werden, am Textgrundlinie platziert wird.

Sie können die {{cssxref("object-position")}}-Eigenschaft verwenden, um das Bild innerhalb des Elementkastens zu positionieren, und die {{cssxref("object-fit")}}-Eigenschaft, um die Größe des Bildes innerhalb des Kastens anzupassen (zum Beispiel, ob das Bild in den Kasten passen sollte oder ob es ihn füllen sollte, selbst wenn ein Clip erforderlich ist).

Abhängig von seinem Typ kann ein Bild eine intrinsische Breite und Höhe haben. Für einige Bildtypen sind jedoch intrinsische Abmessungen unnötig. {{Glossary("SVG", "SVG")}}-Bilder, etwa, haben keine intrinsischen Abmessungen, wenn ihr Root-{{SVGElement("svg")}}-Element keine `width`- oder `height`-Eigenschaft darauf gesetzt hat.

## Barrierefreiheit

### Aussagekräftige alternative Beschreibungen erstellen

Der Wert eines `alt`-Attributs sollte eine klare und prägnante textuelle Ersetzung für den Bildinhalt bieten. Er sollte nicht das Vorhandensein des Bildes selbst oder den Dateinamen des Bildes beschreiben. Wenn das `alt`-Attribut absichtlich weggelassen wird, weil das Bild kein textuäquivalentes Pendant hat, prüfen Sie alternative Methoden, um zu präsentieren, was das Bild zu vermitteln versucht.

#### Nicht tun

```html example-bad
<img alt="image" src="penguin.jpg" />
```

#### Richtig machen

```html example-good
<img alt="A Penguin on a beach." src="penguin.jpg" />
```

Ein wichtiger Barrierefreiheitstest ist es, den `alt`-Attributinhalt zusammen mit den vorangehenden Textinhalten zu lesen, um zu sehen, ob er dieselbe Bedeutung wie das Bild vermittelt. Beispielsweise, wenn das Bild durch den Satz "Auf meinen Reisen sah ich ein niedliches kleines Tier:" eingeführt wurde, könnte das _Nicht tun_-Beispiel von einem Screenreader als "Auf meinen Reisen sah ich ein niedliches kleines Tier: Bild" gelesen werden, was keinen Sinn ergibt. Das _Richtig machen_-Beispiel könnte von einem Screenreader als "Auf meinen Reisen sah ich ein niedliches kleines Tier: Ein Pinguin am Strand." gelesen werden, was Sinn ergibt.

Für Bilder, die eine Aktion auslösen sollen, wie zum Beispiel Bilder, die in ein {{htmlelement("a")}}- oder {{htmlelement("button")}}-Element eingebettet sind, überlegen Sie die ausgelöste Aktion im `alt`-Attributswert zu beschreiben. Zum Beispiel könnten Sie `alt="nächste Seite"` anstelle von `alt="Pfeil nach rechts"` schreiben. Sie könnten auch in Betracht ziehen, eine optionale weitere Beschreibung innerhalb eines `title`-Attributs hinzuzufügen; dies kann von Screenreadern gelesen werden, wenn der Benutzer es anfordert.

Wenn ein `alt`-Attribut nicht auf einem Bild vorhanden ist, können einige Screenreader stattdessen den Dateinamen des Bildes ansagen. Dies kann eine verwirrende Erfahrung sein, wenn der Dateiname den Bildinhalt nicht repräsentiert.

- [Ein alt-Entscheidungsbaum • Bilder • WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/images/decision-tree/)
- [Alt-Texte: Der ultimativer Leitfaden — Axess Lab](https://axesslab.com/alt-texts/)
- [Wie man großartige Alt-Texte gestaltet: Eine Einführung | Deque](https://www.deque.com/blog/great-alt-text-introduction/)
- [MDN Verständnis WCAG, Leitlinie 1.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verständigungen zum Erfolgskriterium 1.1.1 | W3C Verstehen WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

### SVG als Bild identifizieren

Aufgrund eines [VoiceOver-Bugs](https://webkit.org/b/216364) kündigt VoiceOver SVG-Bilder nicht korrekt als Bilder an. Fügen Sie [`role="img"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/img_role) zu allen `<img>`-Elementen mit SVG-Quelldateien hinzu, um sicherzustellen, dass unterstützende Technologien das SVG korrekt als Bildinhalt ankündigen.

```html
<img src="mdn.svg" alt="MDN" role="img" />
```

### Das title-Attribut

Das [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)-Attribut ist kein akzeptabler Ersatz für das `alt`-Attribut. Zusätzlich vermeiden Sie, den Wert des `alt`-Attributs in einem `title`-Attribut zu duplizieren, der auf demselben Bild deklariert wird. Dies könnte dazu führen, dass einige Screenreader denselben Text zweimal ankündigen und so eine verwirrende Erfahrung schaffen.

Das `title`-Attribut sollte auch nicht als ergänzende Beschriftungsinformation verwendet werden, um eine Bild-`alt`-Beschreibung zu begleiten. Wenn ein Bild eine Beschriftung benötigt, verwenden Sie die [`figure`](/de/docs/Web/HTML/Reference/Elements/figure)- und [`figcaption`](/de/docs/Web/HTML/Reference/Elements/figcaption)-Elemente.

Der Wert des `title`-Attributs wird dem Benutzer normalerweise als Tooltip präsentiert, der kurz nach dem Stoppen der Bewegung über dem Bild erscheint. Während dies _zusätzliche_ Informationen für den Benutzer bereitstellen kann, sollten Sie nicht davon ausgehen, dass der Benutzer sie jemals sehen wird: der Benutzer könnte nur eine Tastatur oder einen Touchscreen haben. Wenn Sie Informationen haben, die besonders wichtig oder wertvoll für den Benutzer sind, präsentieren Sie sie inline mit einer der oben erwähnten Methoden anstelle der Verwendung von `title`.

- [Die Verwendung des HTML-title-Attributs – aktualisiert | Die Paciello-Gruppe](https://www.tpgi.com/using-the-html-title-attribute-updated/)

## Beispiele

### Alternativer Text

Das folgende Beispiel bettet ein Bild in die Seite ein und enthält einen alternativen Text für Barrierefreiheit.

```html
<img src="/shared-assets/images/examples/favicon144.png" alt="MDN" />
```

{{ EmbedLiveSample('Alternative_text', '100%', '160') }}

### Bildlink

Dieses Beispiel baut auf dem vorherigen auf und zeigt, wie das Bild in einen Link umgewandelt wird. Um dies zu tun, verschachteln Sie das `<img>`-Tag innerhalb des {{HTMLElement("a")}}. Sie sollten den alternativen Text so beschreiben lassen, auf welche Ressource der Link zeigt, als ob Sie einen Textlink verwenden würden.

```html
<a href="https://developer.mozilla.org">
  <img
    src="/shared-assets/images/examples/favicon144.png"
    alt="Visit the MDN site" />
</a>
```

{{ EmbedLiveSample('Image_link', '100%', '160') }}

### Verwendung des srcset-Attributs

In diesem Beispiel fügen wir ein `srcset`-Attribut mit einer Referenz zu einer hochauflösenden Version des Logos hinzu; diese wird anstelle des `src`-Bildes auf hochauflösenden Geräten geladen. Das im `src`-Attribut angegebene Bild wird als `1x`-Kandidat in {{Glossary("User_agent", "User Agents")}} gezählt, die `srcset` unterstützen.

```html
<img
  src="/shared-assets/images/examples/favicon72.png"
  alt="MDN"
  srcset="/shared-assets/images/examples/favicon144.png 2x" />
```

{{EmbedLiveSample("Using_the_srcset_attribute", "100%", "160")}}

### Verwendung der srcset- und sizes-Attribute

Das `src`-Attribut wird in {{Glossary("User_agent", "User Agents")}}, die `srcset` unterstützen, ignoriert, wenn `w`-Deskriptoren enthalten sind. Wenn die `(width <= 600px)`-Medienbedingung zutrifft, wird das 200 Pixel breite Bild geladen (es ist dasjenige, das `200px` am nächsten kommt), andernfalls wird das andere Bild geladen.

```html
<img
  src="clock-demo-200px.png"
  alt="The time is 12:45."
  srcset="clock-demo-200px.png 200w, clock-demo-400px.png 400w"
  sizes="(width <= 600px) 200px, 50vw" />
```

{{EmbedLiveSample("Using_the_srcset_and_sizes_attributes", "100%", 350)}}

> [!NOTE]
> Um die Größenänderung in Aktion zu sehen, {{LiveSampleLink('Using_the_srcset_and_sizes_attributes', 'schauen Sie sich das Beispiel auf einer separaten Seite an')}}, damit Sie den Inhaltsbereich tatsächlich in der Größe ändern können.

## Sicherheits- und Datenschutzbedenken

Obwohl `<img>`-Elemente unschuldige Anwendungen haben, können sie unerwünschte Folgen für die Sicherheit und Privatsphäre der Benutzer haben. Siehe [Referer-Header: Datenschutz- und Sicherheitsbedenken](/de/docs/Web/Privacy/Guides/Referer_header:_privacy_and_security_concerns) für weitere Informationen und Gegenmaßnahmen.

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
          >Fließ-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasing-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#embedded_content"
          >eingebetteter Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#palpable_content"
          >fühlbarer Inhalt</a
        >. Wenn das Element ein <code>usemap</code>-Attribut hat, gehört es auch zu der interaktiven Inhalte-Kategorie.
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
      <th scope="row">Zulässige Eltern</th>
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
              ><code>präsentation</code></a
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
            ohne <code>alt</code>-Attribut, keine <code>rolle</code> erlaubt
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
- [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) Schnittstelle für dieses Element
- [HTML-Bilder](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images)
- [Leitfaden für Bilddateitypen und -formate](/de/docs/Web/Media/Guides/Formats/Image_types)
- [Responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images)
