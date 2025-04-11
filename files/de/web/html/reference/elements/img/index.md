---
title: "<img>: Das Bildeinbettungselement"
slug: Web/HTML/Reference/Elements/img
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
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
- Das `alt`-Attribut enthält einen textlichen Ersatz für das Bild, der obligatorisch und **ungemein nützlich** für die Barrierefreiheit ist — Bildschirmlesegeräte lesen den Attributwert vor, damit ihre Benutzer verstehen, was das Bild bedeutet. Alternativer Text wird auch angezeigt, wenn das Bild aus irgendeinem Grund nicht geladen werden kann: zum Beispiel bei Netzwerkfehlern, Inhaltsblockierung oder Verlinkungsfehlern.

Es gibt viele andere Attribute, um verschiedene Zwecke zu erreichen:

- [Referrer](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy)/{{Glossary("CORS", "CORS")}}-Kontrolle für Sicherheit und Datenschutz: siehe [`crossorigin`](#crossorigin) und [`referrerpolicy`](#referrerpolicy).
- Verwenden Sie sowohl [`width`](#width) als auch [`height`](#height), um die intrinsische Größe des Bildes festzulegen, damit es Platz einnimmt, bevor es lädt, um Layoutverschiebungen zu mindern.
- Hinweise auf responsive Bilder mit [`sizes`](#sizes) und [`srcset`](#srcset) (siehe auch das {{htmlelement("picture")}}-Element und unser [Leitfaden zu responsiven Bildern](/de/docs/Web/HTML/Guides/Responsive_images)).

## Unterstützte Bildformate

Der HTML-Standard gibt nicht an, welche Bildformate unterstützt werden, sodass {{Glossary("user_agent", "User Agents")}} unterschiedliche Formate unterstützen können.

> [!NOTE]
> Der [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types) bietet umfassende Informationen zu Bildformaten und deren Unterstützung in Webbrowsern. Dieser Abschnitt ist nur eine Zusammenfassung!

Die Bilddateiformate, die am häufigsten im Web verwendet werden, sind:

- [APNG (Animated Portable Network Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#apng_animated_portable_network_graphics) — Gute Wahl für verlustfreie Animationssequenzen (GIF ist weniger leistungsfähig)
- [AVIF (AV1 Image File Format)](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) — Gute Wahl sowohl für Bilder als auch für animierte Bilder aufgrund der hohen Leistung.
- [GIF (Graphics Interchange Format)](/de/docs/Web/Media/Guides/Formats/Image_types#gif_graphics_interchange_format) — Gute Wahl für _einfache_ Bilder und Animationen.
- [JPEG (Joint Photographic Expert Group image)](/de/docs/Web/Media/Guides/Formats/Image_types#jpeg_joint_photographic_experts_group_image) — Gute Wahl für verlustbehaftete Kompression von Standbildern (derzeit am beliebtesten).
- [PNG (Portable Network Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#png_portable_network_graphics) — Gute Wahl für verlustfreie Kompression von Standbildern (etwas bessere Qualität als JPEG).
- [SVG (Scalable Vector Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#svg_scalable_vector_graphics) — Vektorbildformat. Verwenden Sie es für Bilder, die in verschiedenen Größen genau gezeichnet werden müssen.
- [WebP (Web Picture format)](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) — Hervorragende Wahl sowohl für Bilder als auch für animierte Bilder

Formate wie [WebP](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) und [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) werden empfohlen, da sie sowohl für Standbilder als auch für animierte Bilder viel besser abschneiden als PNG, JPEG, GIF.

SVG bleibt das empfohlene Format für Bilder, die in verschiedenen Größen genau gezeichnet werden müssen.

## Bildladefehler

Wenn beim Laden oder Rendern eines Bildes ein Fehler auftritt und ein `onerror`-Ereignishandler für das [`error`](/de/docs/Web/API/HTMLElement/error_event)-Ereignis gesetzt wurde, wird dieser Ereignishandler aufgerufen. Dies kann in mehreren Situationen passieren, einschließlich:

- Das `src`-Attribut ist leer (`""`) oder `null`.
- Die `src`- {{Glossary("URL", "URL")}} ist dieselbe wie die URL der Seite, auf der sich der Benutzer derzeit befindet.
- Das Bild ist in irgendeiner Weise beschädigt, was verhindert, dass es geladen wird.
- Die Metadaten des Bildes sind so beschädigt, dass es nicht möglich ist, seine Abmessungen abzurufen, und keine Abmessungen wurden in den Attributen des `<img>`-Elements angegeben.
- Das Bild ist in einem Format, das nicht von dem {{Glossary("user_agent", "User Agent")}} unterstützt wird.

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- [`alt`](/de/docs/Web/API/HTMLImageElement/alt#usage_notes)

  - : Definiert Text, der das Bild auf der Seite ersetzen kann.

    > [!NOTE]
    > Browser zeigen Bilder nicht immer an. Es gibt eine Reihe von Situationen, in denen ein Browser möglicherweise keine Bilder anzeigt, wie zum Beispiel:
    >
    > - Nicht-visuelle Browser (wie die von Menschen mit Sehbehinderungen)
    > - Der Benutzer wählt, Bilder nicht anzuzeigen (um Bandbreite zu sparen, aus Datenschutzgründen)
    > - Das Bild ist ungültig oder ein [nicht unterstützter Typ](#unterstützte_bildformate)
    >
    > In diesen Fällen kann der Browser das Bild durch den Text im `alt`-Attribut des Elements ersetzen. Aus diesen und anderen Gründen sollten Sie wenn möglich einen nützlichen Wert für `alt` angeben.

    Setzen Sie dieses Attribut auf einen leeren String (`alt=""`), um anzugeben, dass dieses Bild _kein_ wesentlicher Teil des Inhalts ist (es ist Dekoration oder ein Tracking-Pixel), und nicht-visuelle Browser es aus dem {{Glossary("Engine/Rendering", "Rendern")}} auslassen können. Visuelle Browser werden auch das kaputte Bildsymbol ausblenden, wenn das `alt`-Attribut leer ist und das Bild nicht angezeigt werden konnte.

    Dieses Attribut wird auch beim Kopieren und Einfügen des Bildes in Text oder beim Speichern eines verlinkten Bildes als Lesezeichen verwendet.

- `attributionsrc` {{experimental_inline}}

  - : Gibt an, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header mit der Bildanforderung senden soll.

    Auf der Serverseite wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Headers in der Antwort auszulösen, um eine bildbasierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#html-based_event_sources) oder einen [Attribution-Auslöser](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#html-based_attribution_triggers) zu registrieren. Welcher Antwortheader zurückgesendet werden soll, hängt vom Wert des `Attribution-Reporting-Eligible`-Headers ab, der die Registrierung ausgelöst hat.

    Das entsprechende Quellen- oder Auslöserereignis wird ausgelöst, sobald der Browser die Antwort mit der Bilddatei erhält.

    > [!NOTE]
    > Weitere Informationen finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

    Es gibt zwei Versionen dieses Attributs, die Sie einstellen können:

    - Boolean, d.h. nur der Name `attributionsrc`. Dies gibt an, dass Sie möchten, dass der {{httpheader("Attribution-Reporting-Eligible")}}-Header an denselben Server gesendet wird, auf den das `src`-Attribut zeigt. Dies ist in Ordnung, wenn Sie die Registrierung der Attributionsquelle oder des Auslösers auf demselben Server handhaben. Bei der Registrierung eines Attribution-Auslösers ist diese Eigenschaft optional, und es wird ein boolescher Wert verwendet, wenn sie weggelassen wird.
    - Wert, der eine oder mehrere URLs enthält, zum Beispiel:

    ```html
    <img
      src="image-file.png"
      alt="My image file description"
      attributionsrc="https://a.example/register-source
                         https://b.example/register-source" />
    ```

    Dies ist nützlich in Fällen, in denen die angeforderte Ressource nicht auf einem Server liegt, den Sie steuern, oder wenn Sie die Registrierung der Attributionsquelle auf einem anderen Server handhaben möchten. In diesem Fall können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressource angefordert wird, wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header zusätzlich zum Ursprungsserver an die in `attributionSrc` angegebenen URL(s) gesendet. Diese URLs können dann mit einem {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header antworten, um die Registrierung abzuschließen.

    > [!NOTE]
    > Das Angeben mehrerer URLs bedeutet, dass mehrere Attributionsquellen auf derselben Funktion registriert werden können. Sie könnten zum Beispiel unterschiedliche Kampagnen haben, deren Erfolg Sie messen möchten, was das Generieren unterschiedlicher Berichte über verschiedene Daten beinhaltet.

- [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)

  - : Gibt an, ob das Abrufen des Bildes mit einer {{Glossary("CORS", "CORS")}}-Anfrage durchgeführt werden muss. Bilddaten von einem [CORS-fähigen Bild](/de/docs/Web/HTML/How_to/CORS_enabled_image), das von einer CORS-Anfrage zurückkommt, können im {{HTMLElement("canvas")}}-Element ohne Markierung als "[kontaminiert](/de/docs/Web/HTML/How_to/CORS_enabled_image#security_and_tainted_canvases)" wiederverwendet werden.

    Wenn das `crossorigin`-Attribut _nicht_ angegeben ist, wird eine Nicht-CORS-Anfrage gesendet (ohne den {{httpheader("Origin")}}-Anforderungsheader), und der Browser markiert das Bild als kontaminiert und beschränkt den Zugriff auf seine Bilddaten, sodass seine Verwendung in {{HTMLElement("canvas")}}-Elementen verhindert wird.

    Wenn das `crossorigin`-Attribut _ist_ angegeben, wird eine CORS-Anfrage gesendet (mit dem {{httpheader("Origin")}}-Anforderungsheader); wenn jedoch der Server nicht optiert, der Ursprungsseite den quellübergreifenden Zugriff auf die Bilddaten zu erlauben (indem er keinen {{httpheader("Access-Control-Allow-Origin")}}-Antwortheader sendet oder die Ursprungsseite nicht in einem gesendeten {{httpheader("Access-Control-Allow-Origin")}}-Antwortheader einbezieht), dann blockiert der Browser das Laden des Bildes und protokolliert einen CORS-Fehler in der Entwicklertools-Konsole.

    Zulässige Werte:

    - `anonymous`
      - : Eine CORS-Anfrage wird ohne Anmeldedaten gesendet (d.h. keine {{Glossary("cookie", "Cookies")}}, [X.509-Zertifikate](https://datatracker.ietf.org/doc/html/rfc5280) oder {{httpheader("Authorization")}}-Anforderungsheader).
    - `use-credentials`
      - : Die CORS-Anfrage wird mit allen Anmeldedaten gesendet (d.h. Cookies, X.509-Zertifikaten und dem `Authorization`-Anforderungsheader). Wenn der Server nicht optiert, Anmeldedaten mit der Ursprungsseite zu teilen (indem er den `Access-Control-Allow-Credentials: true`-Antwortheader sendet), dann markiert der Browser das Bild als kontaminiert und beschränkt den Zugriff auf seine Bilddaten.

    Wenn das Attribut einen ungültigen Wert hat, behandeln Browser es so, als wäre der Wert `anonymous` verwendet worden. Weitere Informationen finden Sie unter [CORS-Einstellung-Attribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin).

- `decoding`

  - : Dieses Attribut gibt dem Browser einen Hinweis darauf, ob die Bilddecodierung zusammen mit dem Rendern der anderen DOM-Inhalte in einem einzigen Darstellungsschritt erfolgen soll, der korrekter aussieht (`sync`), oder ob zuerst die anderen DOM-Inhalte gerendert und präsentiert werden sollen, und dann das Bild dekodiert und später präsentiert wird (`async`). In der Praxis bedeutet `async`, dass das nächste Repaint nicht darauf wartet, dass das Bild dekodiert wird.

    Es ist oft schwierig, einen spürbaren Effekt beim Einsatz von `decoding` auf statischen `<img>`-Elementen zu erkennen. Sie werden wahrscheinlich zunächst als leere Bilder gerendert, während die Bilddateien abgerufen werden (entweder aus dem Netzwerk oder aus dem Cache) und dann unabhängig verarbeitet werden, sodass die "Synchronisation" von Inhaltsaktualisierungen weniger offensichtlich ist. Dennoch kann die Blockierung des Renderns, während die Decodierung erfolgt, zwar oft sehr klein, _doch_ messbar sein — auch wenn es schwierig ist, es mit dem menschlichen Auge zu beobachten. Siehe [Was macht das Bilddecodierungs-Attribut tatsächlich?](https://www.tunetheweb.com/blog/what-does-the-image-decoding-attribute-actually-do/) für eine detaillierte Analyse (tunetheweb.com, 2023).

    Die Verwendung verschiedener `decoding`-Typen kann zu deutlicheren Unterschieden führen, wenn `<img>`-Elemente dynamisch über JavaScript in das DOM eingefügt werden — siehe [`HTMLImageElement.decoding`](/de/docs/Web/API/HTMLImageElement/decoding) für weitere Details.

    Zulässige Werte:

    - `sync`
      - : Dekodieren Sie das Bild synchron zusammen mit dem Rendern der anderen DOM-Inhalte und präsentieren Sie alles zusammen.
    - `async`
      - : Dekodieren Sie das Bild asynchron, nach dem Rendern und Darstellen der anderen DOM-Inhalte.
    - `auto`
      - : Keine Präferenz für den Decodierungsmodus; der Browser entscheidet, was am besten für den Benutzer ist. Dies ist der Standardwert.

- [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming)

  - : Markiert das Bild zur Beobachtung durch die [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)-API. Der angegebene Wert wird zum Bezeichner für das beobachtete Bildelement. Siehe auch die Seite zum [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming)-Attribut.

- `fetchpriority`

  - : Gibt einen Hinweis auf die relative Priorität des Laden des Bildes.
    Zulässige Werte:

    - `high`
      - : Laden des Bildes mit hoher Priorität im Vergleich zu anderen Bildern.
    - `low`
      - : Laden des Bildes mit niedriger Priorität im Vergleich zu anderen Bildern.
    - `auto`
      - : Keine Präferenz für die Lade-Priorität setzen.
        Dies ist der Standard.
        Es wird verwendet, wenn kein Wert oder ein ungültiger Wert gesetzt ist.

    Siehe [`HTMLImageElement.fetchPriority`](/de/docs/Web/API/HTMLImageElement/fetchPriority) für weitere Informationen.

- `height`

  - : Die intrinsische Höhe des Bildes, in Pixel. Muss eine ganze Zahl ohne Einheit sein.

    > [!NOTE]
    > Die Angabe von `height` und [`width`](#width) ermöglicht es dem Browser, das {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Bildes zu berechnen, bevor das Bild geladen wird. Dieses Seitenverhältnis wird verwendet, um den Platz zu reservieren, der benötigt wird, um das Bild anzuzeigen, wodurch eine Layoutverschiebung, wenn das Bild heruntergeladen und auf den Bildschirm gemalt wird, verringert oder sogar verhindert wird. Die Verringerung der Layoutverschiebung ist ein wesentlicher Bestandteil einer guten Benutzererfahrung und Web-Performance.

- `ismap`

  - : Dieses Boolean-Attribut zeigt an, dass das Bild Teil einer [serverseitigen Karte](https://en.wikipedia.org/wiki/Image_map#Server-side) ist. Wenn ja, werden die Koordinaten, an denen der Benutzer auf das Bild geklickt hat, an den Server gesendet.

    > [!NOTE]
    > Dieses Attribut ist nur zulässig, wenn das `<img>`-Element ein Nachkomme eines {{htmlelement("a")}}-Elements mit einem gültigen [`href`](/de/docs/Web/HTML/Reference/Elements/a#href)-Attribut ist. Dies gibt Benutzern ohne Zeigegeräte ein Rückfallziel.

- `loading`

  - : Gibt an, wie der Browser das Bild laden soll:

    - `eager`
      - : Lädt das Bild sofort, unabhängig davon, ob es sich derzeit im sichtbaren Bereich befindet (dies ist der Standardwert).
    - `lazy`
      - : Das Laden des Bildes wird aufgeschoben, bis es eine berechnete Entfernung vom Sichtbereich erreicht, wie vom Browser definiert. Die Absicht ist, die Netzwerk- und Speicherbandbreite zu vermeiden, die benötigt wird, um das Bild zu handhaben, bis es mit ziemlicher Sicherheit benötigt wird. Dies verbessert im Allgemeinen die Leistung der Inhalte in den meisten typischen Anwendungsfällen.

    > [!NOTE]
    > Das Laden wird nur dann aufgeschoben, wenn JavaScript aktiviert ist. Dies dient dem Anti-Tracking, weil, wenn ein Benutzeragent Lazy Loading unterstützen würde, wenn Skripte deaktiviert sind, es immer noch möglich wäre, die ungefähre Scrollposition eines Benutzers während einer Sitzung zu verfolgen, indem strategisch Bilder im Markup einer Seite platziert werden, sodass ein Server nachverfolgen kann, wie viele Bilder angefordert werden und wann.

    > [!NOTE]
    > Bilder mit `loading` auf `lazy` gesetzt werden niemals geladen, wenn sie keinen sichtbaren Teil eines Elements schneiden, selbst wenn sie laden, würde dies ändern, da ungeladene Bilder eine `width` und `height` von `0` haben. Die Angabe von `width` und `height` auf Lazy-Loaded-Bildern behebt dieses Problem und ist eine bewährte Methode, [die von der Spezifikation empfohlen wird](https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element). Dies hilft auch, Layoutverschiebungen zu verhindern.

- `referrerpolicy`

  - : Ein String, der angibt, welchen Referrer beim Abrufen der Ressource verwendet werden soll:

    - `no-referrer`: Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}}-Header wird nicht an {{Glossary("origin", "Origin")}}s ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`: Der gesendete Referrer ist auf den Ursprung der verweisenden Seite beschränkt: deren [Schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`: Der an andere Ursprünge gesendete Referrer ist auf das Schema, den Host und den Port beschränkt. Navigationen im gleichen Ursprung enthalten weiterhin den Pfad.
    - `same-origin`: Ein Referrer wird für {{Glossary("Same-origin_policy", "gleicher Ursprung")}} gesendet, aber cross-origin Anfragen enthalten keine Referrer-Informationen.
    - `strict-origin`: Nur der Ursprung des Dokuments wird als Referrer gesendet, wenn das Sicherheitslevel des Protokolls gleich bleibt (HTTPS→HTTPS), jedoch nicht an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard): Sende eine vollständige URL bei der Durchführung einer gleich-origin Anfrage, sende nur den Ursprung, wenn das Sicherheitslevel des Protokolls gleich bleibt (HTTPS→HTTPS), und sende keinen Header an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `unsafe-url`: Der Referrer umfasst den Ursprung _und_ den Pfad (jedoch nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder [Benutzername](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge durchsickern lässt.

- `sizes`

  - : Ein oder mehrere durch Kommas getrennte Strings, die eine Menge von Quelldimensionen angeben. Jede Quelldimension besteht aus:

    1. Einer [Medienbedingung](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#syntax). Diese muss für das letzte Element in der Liste weggelassen werden.
    2. Einem Quelldimension-Wert.

    Medienbedingungen beschreiben Eigenschaften des _Viewports_, nicht des _Bildes_. Zum Beispiel schlägt `(max-height: 500px) 1000px` vor, eine Quelle von 1000px Breite zu verwenden, wenn der _Viewport_ nicht höher als 500px ist. Da ein Quelldimension-Deskriptor verwendet wird, um die Breite anzugeben, die für das Bild während des Layouts der Seite verwendet werden soll, basiert die Medienbedingung typischerweise (aber nicht unbedingt) auf den [Breiteninformationen](/de/docs/Web/CSS/@media/width).

    Quelldimension-Werte spezifizieren die beabsichtigte Anzeigegröße des Bildes. {{Glossary("User_agent", "Benutzeragenten")}} verwenden die aktuelle Quelldimension, um eine der durch das `srcset`-Attribut bereitgestellten Quellen auszuwählen, wenn diese Quellen mit Breiten- (`w`) Deskriptoren beschrieben werden. Die ausgewählte Quelldimension beeinflusst die {{Glossary("intrinsic_size", "intrinsische Dimension")}} des Bildes (die Anzeigengröße des Bildes, wenn keine {{Glossary("CSS", "CSS")}}-Stilierung angewendet wird). Wenn das `srcset`-Attribut fehlt oder keine Werte mit einem Breiten-Deskriptor enthält, hat das `sizes`-Attribut keine Wirkung.

    Ein Quelldimension-Wert kann jede nicht-negative [Länge](/de/docs/Web/CSS/length) sein. Es darf keine CSS-Funktionen außer den [Mathe-Funktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#math_functions) verwenden. Einheiten werden in derselben Weise interpretiert wie [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries), was bedeutet, dass alle relativen Längeneinheiten relativ zur Dokumentwurzel statt zum `<img>`-Element sind, sodass ein `em`-Wert relativ zur Schriftgröße der Wurzel ist, statt zur Schriftgröße des Bildes. [Prozentwerte](/de/docs/Web/CSS/percentage) sind nicht erlaubt.

    Zusätzlich können Sie den Wert `auto` verwenden, um die gesamte Liste der Größen oder den ersten Eintrag in der Liste zu ersetzen. Es ist nur gültig, wenn es in Kombination mit `loading="lazy"` verwendet wird, und löst sich in die [konkrete Größe](/de/docs/Web/CSS/image) des Bildes auf.

- `src`
  - : Die Bild-{{Glossary("URL", "URL")}}. Obligatorisch für das `<img>`-Element. Auf {{Glossary("Browser", "Browsern")}}, die `srcset` unterstützen, wird `src` wie ein Kandidatenbild mit einem Pixeldichte-Deskriptor `1x` behandelt, es sei denn, ein Bild mit diesem Pixeldichte-Deskriptor ist bereits in `srcset` definiert, oder `srcset` enthält `w`-Deskriptoren.
- `srcset`

  - : Ein oder mehrere durch Kommas getrennte Strings, die mögliche Bildquellen für den {{Glossary("user_agent", "Benutzeragenten")}} zur Verwendung angeben. Jeder String besteht aus:

    1. Einer {{Glossary("URL", "URL")}} zu einem Bild
    2. Optional, Leerraum gefolgt von einem der folgenden:

       - Einem Breitendeskriptor (eine positive ganze Zahl direkt gefolgt von `w`). Der Breitendeskriptor wird durch die in `sizes` angegebene Quelldimension dividiert, um die effektive Pixeldichte zu berechnen.
       - Einem Pixeldichtedeskriptor (eine positive Gleitkommazahl direkt gefolgt von `x`).

    Wenn kein Deskriptor angegeben ist, wird der Quelle der Standarddeskriptor von `1x` zugewiesen.

    Es ist nicht korrekt, Breitendeskriptoren und Pixeldichtedeskriptoren im gleichen `srcset`-Attribut zu mischen. Doppelte Deskriptoren (zum Beispiel, zwei Quellen im gleichen `srcset`, die beide mit `2x` beschrieben sind) sind ebenfalls ungültig.

    Wenn das `srcset`-Attribut Breitendeskriptoren verwendet, muss auch das `sizes`-Attribut vorhanden sein, oder das `srcset` selbst wird ignoriert.

    Der Benutzeragent wählt nach eigenem Ermessen eine der verfügbaren Quellen aus. Dies gibt ihnen erheblichen Spielraum, ihre Auswahl basierend auf Dingen wie Benutzerpräferenzen oder {{Glossary("bandwidth", "Bandbreiten")}}-Bedingungen zu bearbeiten. Siehe unser [Leitfaden zu responsiven Bildern](/de/docs/Web/HTML/Guides/Responsive_images) für ein Beispiel.

- `width`
  - : Die intrinsische Breite des Bildes in Pixel. Muss eine ganze Zahl ohne Einheit sein.
- `usemap`

  - : Die partielle {{Glossary("URL", "URL")}} (beginnend mit `#`) einer mit dem Element verbundenen [Bildkarte](/de/docs/Web/HTML/Reference/Elements/map).

    > [!NOTE]
    > Sie können dieses Attribut nicht verwenden, wenn das `<img>`-Element innerhalb eines {{htmlelement("a")}}- oder {{HTMLElement("button")}}-Elements ist.

### Veraltete Attribute

- `align` {{deprecated_inline}}

  - : Richtet das Bild mit seinem umgebenden Kontext aus. Verwenden Sie stattdessen die CSS-Eigenschaften {{cssxref('float')}} und/oder {{cssxref('vertical-align')}}. Zulässige Werte:

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
  - : Die Breite eines Rahmens um das Bild. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref('border')}}.
- `hspace` {{deprecated_inline}}
  - : Die Anzahl der Pixel des Weißraums links und rechts vom Bild. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref('margin')}}.
- `longdesc` {{deprecated_inline}}

  - : Ein Link zu einer detaillierteren Beschreibung des Bildes. Mögliche Werte sind eine {{Glossary("URL", "URL")}} oder eine [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) eines Elements.

    > [!NOTE]
    > Dieses Attribut wird in der neuesten {{Glossary("W3C", "W3C")}}-Version, [HTML 5.2](https://html.spec.whatwg.org/multipage/obsolete.html#element-attrdef-img-longdesc), erwähnt, wurde jedoch aus dem [HTML Living Standard](https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element) des {{Glossary("WHATWG", "WHATWG")}} entfernt. Es hat eine ungewisse Zukunft; Autoren sollten eine {{Glossary("WAI", "WAI")}}-{{Glossary("ARIA", "ARIA")}}-Alternative wie [`aria-describedby`](https://www.w3.org/TR/wai-aria-1.1/#aria-describedby) oder [`aria-details`](https://www.w3.org/TR/wai-aria-1.1/#aria-details) verwenden.

- `name` {{deprecated_inline}}
  - : Ein Name für das Element. Verwenden Sie stattdessen das [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut.
- `vspace` {{deprecated_inline}}
  - : Die Anzahl der Pixel des Weißraums über und unter dem Bild. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref('margin')}}.

## Styling mit CSS

`<img>` ist ein {{Glossary("replaced_elements", "ersetztes Element")}}; es hat von Haus aus einen {{cssxref("display")}}-Wert von `inline`, aber seine Standardabmessungen sind durch die eingebetteten intrinsischen Werte des Bildes definiert, als wäre es `inline-block`. Sie können Eigenschaften wie {{cssxref("border")}}/{{cssxref("border-radius")}}, {{cssxref("padding")}}/{{cssxref("margin")}}, {{cssxref("width")}}, {{cssxref("height")}}, etc. auf einem Bild einstellen.

`<img>` hat keine Baseline, daher wird der untere Rand des Bildes auf der Textbasislinie platziert, wenn Bilder in einem Inline-Formatierungskontext mit {{cssxref("vertical-align", "vertical-align: baseline")}} verwendet werden.

Sie können die Eigenschaft {{cssxref("object-position")}} verwenden, um das Bild innerhalb des Elementkästchens zu positionieren, und die Eigenschaft {{cssxref("object-fit")}}, um die Größenanpassung des Bildes innerhalb des Kastens anzupassen (zum Beispiel, ob das Bild den Kasten ausfüllen soll oder ob eine Einpassung erforderlich ist, auch wenn ein Zuschneiden erforderlich ist).

Abhängig von seinem Typ kann ein Bild eine intrinsische Breite und Höhe haben. Bei einigen Bildtypen sind jedoch intrinsische Abmessungen unnötig. {{Glossary("SVG", "SVG")}}-Bilder haben zum Beispiel keine intrinsischen Dimensionen, wenn ihr Wurzel-{{SVGElement("svg")}}-Element keine `width`- oder `height`-Angabe hat.

## Barrierefreiheit

### Sinnvolle Alternativbeschreibungen verfassen

Der Wert des `alt`-Attributs sollte einen klaren und prägnanten Textersatz für den Bildinhalt liefern. Er sollte weder das Vorhandensein des Bildes selbst noch den Dateinamen des Bildes beschreiben. Wenn das `alt`-Attribut absichtlich weggelassen wird, weil das Bild kein textliches Äquivalent hat, sollten Sie andere Methoden in Betracht ziehen, um das darzustellen, was das Bild kommunizieren möchte.

#### Nicht tun

```html example-bad
<img alt="image" src="penguin.jpg" />
```

#### Tun

```html example-good
<img alt="A Penguin on a beach." src="penguin.jpg" />
```

Ein wichtiger Barrierefreiheitstest besteht darin, den Inhalt des `alt`-Attributs zusammen mit dem vorausgegangenen textlichen Inhalt zu lesen, um festzustellen, ob er denselben Sinn wie das Bild vermittelt. Wenn zum Beispiel das Bild dem Satz "Auf meinen Reisen sah ich ein niedliches kleines Tierchen:" vorausging, könnte das _Nicht tun_-Beispiel von einem Bildschirmlesegerät vorgelesen werden als "Auf meinen Reisen sah ich ein niedliches kleines Tierchen: Bild", was keinen Sinn ergibt. Das _Tun_-Beispiel könnte von einem Bildschirmlesegerät vorgelesen werden als "Auf meinen Reisen sah ich ein niedliches kleines Tierchen: Ein Pinguin am Strand.", was Sinn ergibt.

Für Bilder, die eine Aktion auslösen, zum Beispiel Bilder, die innerhalb eines {{htmlelement("a")}}- oder {{htmlelement("button")}}-Elements verschachtelt sind, sollten Sie erwägen, die ausgelöste Aktion im Wert des `alt`-Attributs zu beschreiben. Zum Beispiel könnten Sie `alt="nächste Seite"` anstelle von `alt="Pfeil rechts"` schreiben. Sie könnten auch eine optional weitere Beschreibung in einem `title`-Attribut in Betracht ziehen; dies kann von Bildschirmlesegeräten auf Wunsch des Benutzers vorgelesen werden.

Wenn ein `alt`-Attribut nicht bei einem Bild vorhanden ist, können einige Bildschirmlesegeräte stattdessen den Dateinamen des Bildes ankündigen. Dies kann eine verwirrende Erfahrung sein, wenn der Dateiname nicht repräsentativ für den Bildinhalt ist.

- [Ein Entscheidungsbaum für Alttexte • Bilder • WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/images/decision-tree/)
- [Alt-Texte: Der ultimative Leitfaden — Axess Lab](https://axesslab.com/alt-texts/)
- [Wie man großartige Alttexte entwirft: Eine Einführung | Deque](https://www.deque.com/blog/great-alt-text-introduction/)
- [MDN Verständnis der WCAG, Richtlinien 1.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verständnis des Erfolgskriteriums 1.1.1 | W3C Verständnis der WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

### Identifizierung von SVG als Bild

Aufgrund eines [VoiceOver-Bugs](https://webkit.org/b/216364) kündigt VoiceOver SVG-Bilder nicht korrekt als Bilder an. Fügen Sie allen `<img>`-Elementen mit SVG-Quelldateien [`role="img"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/img_role) hinzu, um sicherzustellen, dass Hilfstechnologien SVG korrekt als Bildinhalt ankündigen.

```html
<img src="mdn.svg" alt="MDN" role="img" />
```

### Das title-Attribut

Das [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)-Attribut ist kein akzeptabler Ersatz für das `alt`-Attribut. Vermeiden Sie es außerdem, den Wert des `alt`-Attributs in einem `title`-Attribut, das am selben Bild erklärt wird, zu duplizieren. Dies kann dazu führen, dass einige Bildschirmlesegeräte den gleichen Text zweimal ankündigen, was zu einer verwirrenden Erfahrung führt.

Das `title`-Attribut sollte auch nicht als zusätzliche Beschriftungsinformation verwendet werden, um eine Bildbeschreibung zu ergänzen. Wenn ein Bild eine Beschriftung benötigt, verwenden Sie die Elemente [`figure`](/de/docs/Web/HTML/Reference/Elements/figure) und [`figcaption`](/de/docs/Web/HTML/Reference/Elements/figcaption).

Der Wert des `title`-Attributs wird dem Benutzer normalerweise als Tooltip präsentiert, der kurz nach dem Aufhören der Mausbewegung über dem Bild erscheint. Auch wenn es _kann_ dem Benutzer zusätzliche Informationen bieten, sollten Sie nicht davon ausgehen, dass der Benutzer sie jemals sehen wird: Der Benutzer hat möglicherweise nur eine Tastatur oder einen Touchscreen. Wenn Sie Informationen haben, die für den Benutzer besonders wichtig oder wertvoll sind, präsentieren Sie sie inline mithilfe einer der oben genannten Methoden, anstatt `title` zu verwenden.

- [Verwendung des HTML title-Attributs – aktualisiert | Die Paciello-Gruppe](https://www.tpgi.com/using-the-html-title-attribute-updated/)

## Beispiele

### Alternativtext

Das folgende Beispiel bettet ein Bild in die Seite ein und enthält einen Alternativtext für die Barrierefreiheit.

```html
<img src="favicon144.png" alt="MDN" />
```

{{EmbedLiveSample('Alternative_text', '100%', '160') }}

### Bildlink

Dieses Beispiel baut auf dem vorherigen auf und zeigt, wie man das Bild in einen Link verwandelt. Um dies zu tun, nisten Sie das `<img>`-Tag innerhalb des {{HTMLElement("a")}}-Elements ein. Sie sollten den Alternativtext so gestalten, dass er die Ressource beschreibt, auf die der Link zeigt, als würden Sie stattdessen einen Textlink verwenden.

```html
<a href="https://developer.mozilla.org">
  <img src="favicon144.png" alt="Visit the MDN site" />
</a>
```

{{EmbedLiveSample('Image_link', '100%', '160') }}

### Verwendung des srcset-Attributs

In diesem Beispiel fügen wir ein `srcset`-Attribut mit einem Verweis auf eine hochauflösende Version des Logos hinzu; diese wird statt des im `src`-Attribut angegebenen Bildes auf hochauflösenden Geräten geladen. Das im `src`-Attribut referenzierte Bild wird in {{Glossary("User_agent", "Benutzeragenten")}}, die `srcset` unterstützen, als `1x`-Kandidat gezählt.

```html
<img src="favicon72.png" alt="MDN" srcset="favicon144.png 2x" />
```

{{EmbedLiveSample("Using_the_srcset_attribute", "100%", "160")}}

### Verwendung der srcset- und sizes-Attribute

Das `src`-Attribut wird in {{Glossary("User_agent", "Benutzeragenten")}}, die `srcset` unterstützen, wenn `w`-Deskriptoren enthalten sind, ignoriert. Wenn die Medienbedingung `(max-width: 600px)` übereinstimmt, wird das 200 Pixel breite Bild geladen (es ist das Bild, das `200px` am nächsten kommt), ansonsten wird das andere Bild geladen.

```html
<img
  src="clock-demo-200px.png"
  alt="The time is 12:45."
  srcset="clock-demo-200px.png 200w, clock-demo-400px.png 400w"
  sizes="(max-width: 600px) 200px, 50vw" />
```

{{EmbedLiveSample("Using_the_srcset_and_sizes_attributes", "100%", 350)}}

> [!NOTE]
> Um das Resizing in Aktion zu sehen, {{LiveSampleLink('Using_the_srcset_and_sizes_attributes', 'sehen Sie sich das Beispiel auf einer separaten Seite an') }}, sodass Sie tatsächlich den Inhaltsbereich ändern können.

## Sicherheits- und Datenschutzbedenken

Obwohl `<img>`-Elemente unverdächtige Zwecke haben, können sie ungewollte Konsequenzen für die Sicherheit und Privatsphäre der Benutzer haben. Siehe [Referer-Header: Datenschutz- und Sicherheitsbedenken](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns) für mehr Informationen und Abhilfen.

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
        >. Wenn das Element ein <code>usemap</code>-Attribut hat, gehört es auch zur interaktiven Inhaltskategorie.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "leeres Element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss ein Start-Tag haben und darf kein End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>Jedes Element, das eingebetteten Inhalt annimmt.</td>
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
            oder <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>präsentation</code></a>
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
- {{cssxref("object-fit")}}, {{cssxref("object-position")}}, {{cssxref("image-orientation")}}, {{cssxref("image-rendering")}}, und {{cssxref("image-resolution")}}: bildbezogene CSS-Eigenschaften.
- [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) Schnittstelle für dieses Element
- [HTML-Bilder](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images)
- [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types)
- [Responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images)
