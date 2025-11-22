---
title: "<img>: Das Bild Einbettungselement"
slug: Web/HTML/Reference/Elements/img
l10n:
  sourceCommit: 52f704904f9c583a5591c08936a04da89f4b2301
---

Das **`<img>`** [HTML](/de/docs/Web/HTML) Element bettet ein Bild in das Dokument ein.

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

- Das `src`-Attribut enthält den Pfad zu dem Bild, das Sie einbetten möchten. Es ist nicht erforderlich, wenn das [srcset](/de/docs/Web/API/HTMLImageElement/srcset) Attribut verfügbar ist. Allerdings muss mindestens eines der `src`- oder `srcset`-Attribute angegeben werden.
- Das `alt`-Attribut enthält einen textuellen Ersatz für das Bild, der obligatorisch und **außerordentlich nützlich** für die Barrierefreiheit ist — Bildschirmleseprogramme lesen den Attributwert ihren Nutzern vor, damit diese wissen, was das Bild bedeutet. Alternativer Text wird auch auf der Seite angezeigt, wenn das Bild aus irgendeinem Grund nicht geladen werden kann: Zum Beispiel bei Netzwerkfehlern, Inhaltsblockaden oder veralteten Links.

Es gibt viele andere Attribute, die verschiedene Zwecke erfüllen:

- [Referrer](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy)/{{Glossary("CORS", "CORS")}} Kontrolle für Sicherheit und Datenschutz: siehe [`crossorigin`](#crossorigin) und [`referrerpolicy`](#referrerpolicy).
- Verwenden Sie sowohl [`width`](#width) als auch [`height`](#height), um die intrinsische Größe des Bildes festzulegen und es zu ermöglichen, Platz einzunehmen, bevor es geladen wird, um Layoutverschiebungen von Inhalten zu mildern.
- Hinweise für responsive Bilder mit [`sizes`](#sizes) und [`srcset`](#srcset) (siehe auch das {{htmlelement("picture")}}-Element und unser [Leitfaden für responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images)).

## Unterstützte Bildformate

Der HTML-Standard listet nicht auf, welche Bildformate unterstützt werden sollen, daher können {{Glossary("user_agent", "User-Agenten")}} verschiedene Formate unterstützen.

> [!NOTE]
> Der [Leitfaden für Bilddateitypen und -formate](/de/docs/Web/Media/Guides/Formats/Image_types) bietet umfassende Informationen über Bildformate und deren Unterstützung in Webbrowsern.
> Dieser Abschnitt ist nur eine Zusammenfassung!

Die Bilddateiformate, die im Web am häufigsten verwendet werden, sind:

- [APNG (Animated Portable Network Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#apng_animated_portable_network_graphics) — Gute Wahl für verlustfreie Animationssequenzen (GIF ist weniger performant)
- [AVIF (AV1 Image File Format)](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) — Gute Wahl sowohl für Bilder als auch für animierte Bilder aufgrund der hohen Leistung.
- [GIF (Graphics Interchange Format)](/de/docs/Web/Media/Guides/Formats/Image_types#gif_graphics_interchange_format) — Gute Wahl für _einfache_ Bilder und Animationen.
- [JPEG (Joint Photographic Expert Group image)](/de/docs/Web/Media/Guides/Formats/Image_types#jpeg_joint_photographic_experts_group_image) — Gute Wahl für verlustbehaftete Kompression von Standbildern (derzeit das beliebteste Format).
- [PNG (Portable Network Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#png_portable_network_graphics) — Gute Wahl für verlustfreie Kompression von Standbildern (leicht bessere Qualität als JPEG).
- [SVG (Scalable Vector Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#svg_scalable_vector_graphics) — Vektorbildformat. Nutzen Sie es für Bilder, die in unterschiedlichen Größen präzise gezeichnet werden müssen.
- [WebP (Web Picture Format)](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) — Ausgezeichnete Wahl sowohl für Bilder als auch für animierte Bilder

Formate wie [WebP](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) und [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) werden empfohlen, da sie für sowohl Stand- als auch animierte Bilder viel besser performen als PNG, JPEG, GIF.

SVG bleibt das empfohlene Format für Bilder, die in unterschiedlichen Größen präzise gezeichnet werden müssen.

## Bildladefehler

Wenn beim Laden oder Rendern eines Bildes ein Fehler auftritt und ein `onerror`-Ereignishandler für das [`error`](/de/docs/Web/API/HTMLElement/error_event)-Ereignis festgelegt wurde, wird dieser Ereignishandler aufgerufen. Dies kann in mehreren Situationen geschehen, einschließlich:

- Die `src`- oder `srcset`-Attribute sind leer (`""`) oder `null`.
- Die `src` {{Glossary("URL", "URL")}} ist dieselbe wie die URL der Seite, auf der der Benutzer gerade ist.
- Das Bild ist auf eine Weise beschädigt, dass es nicht geladen werden kann.
- Die Metadaten des Bildes sind so beschädigt, dass es unmöglich ist, seine Abmessungen abzurufen, und es wurden keine Abmessungen in den Attributen des `<img>`-Elements angegeben.
- Das Bild ist in einem Format, das vom {{Glossary("user_agent", "User-Agenten")}} nicht unterstützt wird.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `alt`
  - : Definiert Text, der das Bild auf der Seite ersetzen kann.

    > [!NOTE]
    > Browser zeigen nicht immer Bilder an. Es gibt eine Reihe von Situationen, in denen ein Browser keine Bilder anzeigt, wie zum Beispiel:
    >
    > - Nichtvisuelle Browser (wie solche, die von Menschen mit Sehbehinderungen verwendet werden)
    > - Der Benutzer entscheidet sich dafür, keine Bilder anzuzeigen (um Bandbreite zu sparen, aus Datenschutzgründen)
    > - Das Bild ist ungültig oder ein [nicht unterstützter Typ](#unterstützte_bildformate)
    >
    > In diesen Fällen kann der Browser das Bild durch den Text im `alt`-Attribut des Elements ersetzen. Aus diesen und anderen Gründen sollten Sie wann immer möglich einen nützlichen Wert für `alt` angeben.

    Das Setzen dieses Attributs auf einen leeren String (`alt=""`) zeigt an, dass dieses Bild _kein_ wesentlicher Bestandteil des Inhalts ist (es ist Dekoration oder ein Tracking-Pixel) und dass nichtvisuelle Browser es bei der {{Glossary("Engine/Rendering", "Darstellung")}} weglassen dürfen. Visuelle Browser werden auch das defekte Bildsymbol ausblenden, wenn das `alt`-Attribut leer ist und das Bild nicht angezeigt werden konnte.

    Dieses Attribut wird auch verwendet, wenn das Bild in Text kopiert und eingefügt oder ein verlinktes Bild in einem Lesezeichen gespeichert wird.

- `attributionsrc` {{experimental_inline}}
  - : Gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header zusammen mit der Bildanfrage sendet.

    Serverseitig wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Headers in der Antwort auszulösen, um eine bildbasierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#html-based_event_sources) oder einen [Attributionstrigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#html-based_attribution_triggers) zu registrieren. Welcher Header in der Antwort zurückgesendet werden soll, hängt vom Wert des `Attribution-Reporting-Eligible`-Headers ab, der die Registrierung ausgelöst hat.

    Das entsprechende Quell- oder Trigger-Ereignis wird ausgelöst, nachdem der Browser die Antwort mit der Bilddatei erhalten hat.

    > [!NOTE]
    > Weitere Details finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

    Sie können zwei Versionen dieses Attributs festlegen:
    - Boolean, d.h. nur der `attributionsrc`-Name. Dies gibt an, dass Sie den {{httpheader("Attribution-Reporting-Eligible")}}-Header an denselben Server senden möchten, auf den das `src`-Attribut verweist. Dies ist in Ordnung, wenn Sie die Registrierung der Attributionsquelle oder des Triggers auf demselben Server vornehmen. Bei der Registrierung eines Attributionstriggers ist diese Eigenschaft optional und ein boolescher Wert wird verwendet, wenn er weggelassen wird.
    - Wert mit einer oder mehreren URLs, zum Beispiel:

    ```html
    <img
      src="image-file.png"
      alt="My image file description"
      attributionsrc="https://a.example/register-source
                         https://b.example/register-source" />
    ```

    Dies ist nützlich in Fällen, in denen die angeforderte Ressource nicht auf einem von Ihnen kontrollierten Server liegt, oder wenn Sie die Registrierung der Attributionsquelle auf einem anderen Server vornehmen möchten. In diesem Fall können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcenanforderung erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header an die in `attributionSrc` angegebenen URL(s) zusätzlich zum Ursprungsserver der Ressource gesendet. Diese URLs können dann mit einem passenden {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header antworten, um die Registrierung abzuschließen.

    > [!NOTE]
    > Die Angabe mehrerer URLs bedeutet, dass mehrere Attributionsquellen auf derselben Funktion registriert werden können. Sie könnten beispielsweise verschiedene Kampagnen haben, deren Erfolg Sie messen möchten, was die Erstellung unterschiedlicher Berichte über unterschiedliche Daten erfordert.

- [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)
  - : Gibt an, ob das Bild unter Verwendung einer {{Glossary("CORS", "CORS")}}-Anfrage abgerufen werden muss. Bilddaten von einem [CORS-fähigen Bild](/de/docs/Web/HTML/How_to/CORS_enabled_image), das von einer CORS-Anfrage zurückgegeben wird, können im {{HTMLElement("canvas")}}-Element wiederverwendet werden, ohne als "[verfälscht](/de/docs/Web/HTML/How_to/CORS_enabled_image#security_and_tainted_canvases)" markiert zu werden.

    Wenn das `crossorigin`-Attribut _nicht_ angegeben ist, wird eine nicht-CORS-Anfrage gesendet (ohne den {{httpheader("Origin")}}-Anfragetext), und der Browser markiert das Bild als verfälscht und beschränkt den Zugriff auf seinen Bilddaten, was seine Nutzung in {{HTMLElement("canvas")}}-Elementen verhindert.

    Wenn das `crossorigin`-Attribut _angegeben_ ist, wird eine CORS-Anfrage gesendet (mit dem {{httpheader("Origin")}}-Anfragetext); wenn der Server jedoch nicht den Zugriff auf die Bilddaten durch die Ursprungsseite durch das Senden eines {{httpheader("Access-Control-Allow-Origin")}}-Antwortheaders erlaubt, oder die Ursprungsseite nicht in einen solchen einbezieht, blockiert der Browser das Laden des Bildes und protokolliert einen CORS-Fehler in der Entwicklerkonsole.

    Zulässige Werte:
    - `anonymous`
      - : Eine CORS-Anfrage wird gesendet, wobei Anmeldeinformationen weggelassen werden (d.h. keine {{Glossary("cookie", "Cookies")}}, [X.509-Zertifikate](https://datatracker.ietf.org/doc/html/rfc5280) oder {{httpheader("Authorization")}}-Anfragetext).
    - `use-credentials`
      - : Die CORS-Anfrage wird mit allen Anmeldeinformationen gesendet (d.h. Cookies, X.509-Zertifikate und dem `Authorization`-Anfragetext). Wenn der Server nicht in das Teilen der Anmeldeinformationen mit der Ursprungsseite einwilligt (durch das Zurücksenden des `Access-Control-Allow-Credentials: true`-Antwortheaders), markiert der Browser das Bild als verfälscht und beschränkt den Zugriff auf seine Bilddaten.

    Wenn das Attribut einen ungültigen Wert hat, behandeln Browser es, als ob der Wert `anonymous` verwendet wurde. Weitere Informationen finden Sie unter [CORS-Einstellungen von Attributen](/de/docs/Web/HTML/Reference/Attributes/crossorigin).

- `decoding`
  - : Dieses Attribut gibt dem Browser einen Hinweis darauf, ob die Bilddekodierung zusammen mit dem Rendern der anderen DOM-Inhalte in einem einzelnen Präsentationsschritt erfolgen soll, der "korrekter" aussieht (`sync`), oder ob die anderen DOM-Inhalte zuerst gerendert und präsentiert werden sollen und dann das Bild dekodiert und später präsentiert wird (`async`). In der Praxis bedeutet `async`, dass der nächste Anzeigeschritt nicht darauf wartet, dass das Bild dekodiert wird.

    Es ist oft schwierig, einen deutlichen Effekt bei der Verwendung von `decoding` auf statische `<img>`-Elemente wahrzunehmen. Sie werden wahrscheinlich zunächst als leere Bilder gerendert, während die Bilddateien abgerufen werden (entweder aus dem Netzwerk oder dem Cache) und unabhängig bearbeitet werden, sodass die "Synchronisierung" von Inhaltsaktualisierungen weniger offensichtlich ist. Das Blockieren des Renderings während der Dekodierung kann zwar oft ziemlich klein sein, _kann_ jedoch gemessen werden — selbst wenn es mit bloßem Auge schwierig zu beobachten ist. Siehe [Was macht das Bilddekodierungsattribut tatsächlich?](https://www.tunetheweb.com/blog/what-does-the-image-decoding-attribute-actually-do/) für eine umfassendere Analyse (tunetheweb.com, 2023).

    Die Verwendung unterschiedlicher `decoding`-Typen kann zu deutlicheren Unterschieden führen, wenn `<img>`-Elemente dynamisch via JavaScript in das DOM eingefügt werden — siehe [`HTMLImageElement.decoding`](/de/docs/Web/API/HTMLImageElement/decoding) für weitere Details.

    Zulässige Werte:
    - `sync`
      - : Dekodieren Sie das Bild synchron zusammen mit dem Rendern der anderen DOM-Inhalte und präsentieren Sie alles zusammen.
    - `async`
      - : Dekodieren Sie das Bild asynchron, nachdem die anderen DOM-Inhalte gerendert und präsentiert wurden.
    - `auto`
      - : Keine Präferenz für den Dekodierungsmodus; der Browser entscheidet, was für den Benutzer am besten ist. Dies ist der Standardwert.

- [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming)
  - : Markiert das Bild zur Beobachtung durch die [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming) API. Der angegebene Wert wird zu einer Kennung für das beobachtete Bild-Element. Siehe auch die Seite zum [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming)-Attribut.

- [`fetchpriority`](/de/docs/Web/HTML/Reference/Attributes/fetchpriority)
  - : Gibt einen Hinweis auf die relative Priorität beim Abrufen des Bildes. Zulässige Werte:
    - `high`
      - : Rufen Sie das Bild mit hoher Priorität im Vergleich zu anderen Bildern ab.
    - `low`
      - : Rufen Sie das Bild mit niedriger Priorität im Vergleich zu anderen Bildern ab.
    - `auto`
      - : Legen Sie keine Präferenz für die Abrufpriorität fest.
        Dies ist der Standardwert.
        Er wird verwendet, wenn kein Wert oder ein ungültiger Wert gesetzt ist.
- `height`
  - : Die intrinsische Höhe des Bildes in Pixeln. Muss eine ganze Zahl ohne Einheit sein.

    > [!NOTE]
    > Das Einschließen von `height` und [`width`](#width) ermöglicht es dem Browser, das {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Bildes zu berechnen, bevor das Bild geladen wird. Dieses Seitenverhältnis wird verwendet, um den zum Anzeigen des Bildes erforderlichen Platz zu reservieren und so Layoutverschiebungen zu reduzieren oder sogar zu verhindern, wenn das Bild heruntergeladen und auf den Bildschirm gemalt wird. Die Reduzierung von Layoutverschiebungen ist ein wesentlicher Bestandteil einer guten Benutzererfahrung und Webperformance.

- `ismap`
  - : Dieses Booleanattribut gibt an, dass das Bild Teil einer [serverseitigen Karte](https://de.wikipedia.org/wiki/Image_map#Server-seitige) ist. Wenn ja, werden die Koordinaten, auf die der Benutzer im Bild geklickt hat, an den Server gesendet.

    > [!NOTE]
    > Dieses Attribut ist nur erlaubt, wenn das `<img>`-Element ein Nachfahre eines {{htmlelement("a")}}-Elements mit einem gültigen [`href`](/de/docs/Web/HTML/Reference/Elements/a#href) Attribut ist. Dies bietet Benutzern ohne Zeigegeräte ein alternatives Ziel.

- `loading`
  - : Gibt an, wie der Browser das Bild laden soll:
    - `eager`
      - : Lädt das Bild sofort, unabhängig davon, ob das Bild derzeit im sichtbaren Ansichtsfenster ist oder nicht (dies ist der Standardwert).
    - `lazy`
      - : Verzögert das Laden des Bildes, bis es eine berechnete Entfernung vom Ansichtsfenster erreicht, wie vom Browser definiert. Ziel ist es, die Netzwerk- und Speicherkapazität zu sparen, die zum Verarbeiten des Bildes erforderlich ist, bis es mit einiger Wahrscheinlichkeit benötigt wird. Dies verbessert allgemein die Leistung der Inhalte in den meisten typischen Anwendungsfällen.

    Obwohl explizite [`width`](#width)- und [`height`](#height)-Attribute für alle Bilder empfohlen werden, um Layoutverschiebungen zu vermeiden, sind sie besonders bei verzögert geladenen Bildern wichtig. Verzögert geladene Bilder werden nie geladen, wenn sie keinen sichtbaren Teil eines Elements schneiden, auch wenn deren Laden dies ändern würde, da nicht geladene Bilder eine `width` und `height` von `0` haben. Es schafft eine noch störendere Benutzererfahrung, wenn sich die Inhalte im Ansichtsfenster während des Lesens verschieben.

    Das [`load`](/de/docs/Web/API/Window/load_event)-Ereignis wird ausgelöst, nachdem eilig geladene Bilder abgerufen und verarbeitet wurden, jedoch vor den verzögert geladenen, selbst wenn die verzögert geladenen Bilder sofort bei der ersten Seitenladung innerhalb des visuellen Ansichtsfensters angezeigt werden. Diese Bilder werden immer noch geladen, sobald das Layout abgeschlossen ist; sie beeinflussen jedoch nicht das Timing des `load`-Ereignisses. Das bedeutet, dass es möglich ist, dass wenn `load` ausgelöst wird, sich einige verzögert geladene Bilder im visuellen Ansichtsfenster noch nicht sichtbar sein könnten.

    Das Laden wird nur verzögert, wenn JavaScript aktiviert ist. Dies ist eine Anti-Tracking-Maßnahme, da es möglich wäre, die ungefähre Scrollposition eines Benutzers während einer Sitzung zu verfolgen, indem Bilder strategisch im Markup platziert werden, sodass ein Server verfolgen kann, wie viele Bilder angefordert werden und wann.

- `referrerpolicy`
  - : Ein String, der angibt, welchen Referrer beim Abrufen der Ressource verwendet werden soll:
    - `no-referrer`: Der {{HTTPHeader("Referer")}} Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}} Header wird nicht an {{Glossary("origin", "Ursprünge")}} ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`: Der gesendete Referrer wird auf den Ursprung der verweisenden Seite beschränkt: das [Schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), den {{Glossary("host", "Host")}} und den {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`: Der Referrer, der an andere Ursprünge gesendet wird, wird auf das Schema, den Host und den Port beschränkt. Navigationen im selben Ursprung enthalten weiterhin den Pfad.
    - `same-origin`: Ein Referrer wird für {{Glossary("Same-origin_policy", "gleicher Ursprung")}} gesendet, aber Anfragen zwischen Ursprüngen enthalten keine Referrer-Informationen.
    - `strict-origin`: Nur der Ursprung des Dokuments als Referrer wird gesendet, wenn das Sicherheitsprotokollniveau gleich bleibt (HTTPS→HTTPS), jedoch nicht an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard): Senden Sie eine vollständige URL bei einer Anfrage vom gleichen Ursprung, senden Sie nur den Ursprung, wenn das Protokollsicherheitsniveau gleich bleibt (HTTPS→HTTPS), und senden Sie keinen Header an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `unsafe-url`: Der Referrer enthält den Ursprung _und_ den Pfad (aber nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), das [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder den [Benutzernamen](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge leakt.

- `sizes`
  - : Ein oder mehrere Werte, die durch Kommas getrennt sind, die Quellgrößen oder das Schlüsselwort `auto` sein können. Die Spezifikation erfordert, dass das `sizes`-Attribut nur vorhanden ist, wenn `srcset` Breitenbeschreibungen verwendet.

  Eine **Quellgröße** besteht aus:
  1. Einer [Medienbedingung](/de/docs/Web/CSS/Guides/Media_queries/Using#syntax), die für den letzten Eintrag in der Liste weggelassen wird.
  2. Einem Quellgrößenwert.

  Medienbedingungen beschreiben Eigenschaften des _Ansichtsfensters_, nicht des _Bildes_. Zum Beispiel: `(height <= 500px) 1000px` schlägt die Verwendung einer Bildquelle von 1000px Breite vor, wenn die \_Ansichtsfenster_höhe 500px oder weniger ist. Da ein Quellgrößenbeschreiber die Breite des Bildes während des Layouts spezifiziert, basiert die Medienbedingung typischerweise (aber nicht notwendigerweise) auf der [Breite](/de/docs/Web/CSS/Reference/At-rules/@media/width).

  Quellgrößenwerte geben die beabsichtigte Größe des Bildes während der Anzeige an. {{Glossary("User_agent", "Benutzeragenten")}} verwenden die aktuelle Quellgröße, um eine der von `srcset` angebotenen Quellen auszuwählen, wenn diese Quellen mit Breiten- (`w`) Beschreibungen angegeben sind. Die gewählte Quellgröße beeinflusst die {{Glossary("intrinsic_size", "intrinsische Größe")}} des Bildes (die Anzeigengröße des Bildes, wenn keine {{Glossary("CSS", "CSS")}}-Stilgebung angewendet wird).

  Ein Quellgrößenwert kann jede nicht negative [Länge](/de/docs/Web/CSS/Reference/Values/length) sein. Er darf keine anderen CSS-Funktionen als die [Mathefunktionen](/de/docs/Web/CSS/Reference/Values/Functions#math_functions) verwenden. Einheiten werden auf die gleiche Weise interpretiert wie [Medienabfragen](/de/docs/Web/CSS/Guides/Media_queries), was bedeutet, dass alle relativen Maßeinheiten relativ zur Dokumentwurzel und nicht zum `<img>`-Element sind. Beispielsweise ist ein `em`-Wert relativ zur Schriftgröße der Wurzel und nicht zur Schriftgröße des Bildes. [Prozentsätze](/de/docs/Web/CSS/Reference/Values/percentage) sind nicht erlaubt. Wenn das `sizes`-Attribut nicht angegeben ist, hat es einen Standardwert von `100vw` (die Breite des Ansichtsfensters).

  Das Schlüsselwort `auto` kann die gesamte Liste der Größen oder den ersten Eintrag in der Liste ersetzen. Es ist nur gültig, wenn es mit `loading="lazy"` kombiniert ist, und löst sich auf die [konkrete Größe](/de/docs/Web/CSS/Reference/Values/image) des Bildes auf. Da die intrinsische Größe des Bildes noch nicht bekannt ist, sollten `width`- und `height`-Attribute (oder CSS-Äquivalente) auch angegeben werden, um zu verhindern, dass der Browser die Standardbildbreite von 300px annimmt. Um die Rückwärtskompatibilität mit Browsern zu verbessern, die `auto` nicht unterstützen, können Sie fallback-Größen nach `auto` im `sizes`-Attribut einschließen:

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
  - : Die Bild-{{Glossary("URL", "URL")}}. Mindestens eines der `src`- und [`srcset`](#srcset) Attribute ist für ein `<img>`-Element erforderlich. Wenn [`srcset`](#srcset) angegeben ist, wird `src` in einer von zwei Weisen verwendet:
    - als Fallback für Browser, die `srcset` nicht unterstützen.
    - Wenn `srcset` den "x"-Beschreiber verwendet, dann ist `src` äquivalent zu einer Quelle mit dem Dichtebeschreiber `1x`; das heißt, das durch `src` spezifizierte Bild wird auf Bildschirmen mit niedriger Dichte verwendet (wie typische 72 DPI oder 96 DPI Displays).

- `srcset`
  - : Ein oder mehrere durch Kommas getrennte Strings, die mögliche Bildquellen für den Gebrauch durch den {{Glossary("user_agent", "User Agent")}} angeben.

    Jeder String besteht aus:
    1. Einer {{Glossary("URL", "URL")}} zu einem Bild
    2. Optional, Leerzeichen gefolgt von einer der folgenden Angaben:
       - Einem Breitenbeschreiber (eine positive ganze Zahl, direkt gefolgt von `w`). Er _muss_ mit der intrinsischen Breite des referenzierten Bildes übereinstimmen. Der Breitenbeschreiber wird durch die in dem `sizes`-Attribut angegebene Quellgröße geteilt, um die effektive Pixeldichte zu berechnen. Zum Beispiel, um eine Bildquelle bereitzustellen, die verwendet wird, wenn der Renderer ein 450 Pixel breites Bild benötigt, verwenden Sie den Breitenbeschreiber `450w`. Wenn ein `srcset` "w"-Beschreiber enthält, verwenden Browser diese Beschreiber zusammen mit dem `sizes`-Attribut zur Auswahl einer Ressource.
       - Einem Pixeldichte-Beschreiber (eine positive Gleitkommazahl, direkt gefolgt von `x`). Er gibt die Bedingung an, unter der die entsprechende Bildressource als Pixeldichte des Anzeigegeräts verwendet werden soll. Zum Beispiel, um eine Bildressource bereitzustellen, die verwendet wird, wenn die Pixeldichte doppelt so hoch ist wie die Standarddichte, verwenden Sie den Pixeldichte-Beschreiber `2x` oder `2.0x`.

    Wenn kein Beschreiber angegeben ist, wird der Quelle der Standardbeschreiber `1x` zugewiesen. Es ist nicht korrekt, Breiten- und Pixeldichte-Beschreiber im selben `srcset`-Attribut zu mischen. Doppelte Beschreiber (zum Beispiel zwei Quellen im selben `srcset`, die beide mit `2x` beschrieben sind) sind ebenfalls ungültig.

    Leerzeichen, außer dem Weißraum, der die URL und den entsprechenden Bedingungsbeschreiber trennt, werden ignoriert; dies beinhaltet sowohl führende als auch nachfolgende Leerzeichen sowie Leerzeichen vor oder nach jedem Komma. Wenn jedoch ein Bildkandidatenstring keine Beschreiber und keinen Leerraum nach der URL enthält, muss der folgende Bildkandidatenstring, falls vorhanden, mit einem oder mehreren Leerzeichen beginnen, ansonsten wird das Komma als Teil der URL angesehen.

    Wenn das `srcset`-Attribut des `<img>`-Elements `x`-Beschreiber verwendet, berücksichtigen Browser auch die URL im `src`-Attribut (falls vorhanden) als Kandidat und weisen ihr einen Standardbeschreiber von `1x` zu. Wenn das `srcset`-Attribut jedoch Breitenbeschreiber verwendet, wird `src` nicht berücksichtigt, und das `sizes`-Attribut wird stattdessen verwendet.

    Der User Agent wählt nach eigenem Ermessen eine der verfügbaren Quellen aus. Dies gibt ihm großen Handlungsspielraum, um seine Auswahl anhand von Dingen wie Benutzereinstellungen oder {{Glossary("bandwidth", "Bandbreiten")}}-Bedingungen anzupassen. Sehen Sie sich unser [Leitfaden für responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images) an, um ein Beispiel zu erhalten.

- `width`
  - : Die intrinsische Breite des Bildes in Pixeln. Muss eine ganze Zahl ohne Einheit sein.
- `usemap`
  - : Die partielle {{Glossary("URL", "URL")}} (beginnend mit `#`) einer [Bildkarte](/de/docs/Web/HTML/Reference/Elements/map), die dem Element zugeordnet ist.

    > [!NOTE]
    > Sie können dieses Attribut nicht verwenden, wenn sich das `<img>`-Element innerhalb eines {{htmlelement("a")}}- oder {{HTMLElement("button")}}-Elements befindet.

### Veraltete Attribute

- `align` {{deprecated_inline}}
  - : Richtet das Bild an seinem umgebenden Kontext aus. Verwenden Sie die {{cssxref('float')}}- und/oder {{cssxref('vertical-align')}}- {{Glossary("CSS", "CSS")}}-Eigenschaften anstelle dieses Attributs. Zulässige Werte:
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
  - : Die Breite eines Rahmens um das Bild. Verwenden Sie stattdessen die {{cssxref('border')}} {{Glossary("CSS", "CSS")}}-Eigenschaft.
- `hspace` {{deprecated_inline}}
  - : Die Anzahl der Pixel des Leerraums links und rechts des Bildes. Verwenden Sie stattdessen die {{cssxref('margin')}}-CSS-Eigenschaft.
- `longdesc` {{deprecated_inline}}
  - : Ein Link zu einer ausführlicheren Beschreibung des Bildes. Mögliche Werte sind eine {{Glossary("URL", "URL")}} oder eine Element- [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id).

    > [!NOTE]
    > Dieses Attribut wird im [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/obsolete.html#element-attrdef-img-longdesc) als veraltet betrachtet. Es hat eine ungewisse Zukunft; Autoren sollten eine {{Glossary("WAI", "WAI")}}-{{Glossary("ARIA", "ARIA")}}-Alternative wie [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) oder [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) verwenden.

- `name` {{deprecated_inline}}
  - : Ein Name für das Element. Verwenden Sie stattdessen das [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut.
- `vspace` {{deprecated_inline}}
  - : Die Anzahl der Pixel Leerraum über und unter dem Bild. Verwenden Sie stattdessen die {{cssxref('margin')}}-CSS-Eigenschaft.

## Styling mit CSS

`<img>` ist ein {{Glossary("replaced_elements", "ersetztes Element")}}; es hat einen {{cssxref("display")}}-Wert von `inline` standardmäßig, aber seine Standardmaße werden durch die eingebetteten intrinsischen Werte des Bildes definiert, als ob es `inline-block` wäre. Sie können Eigenschaften wie {{cssxref("border")}}/{{cssxref("border-radius")}}, {{cssxref("padding")}}/{{cssxref("margin")}}, {{cssxref("width")}}, {{cssxref("height")}}, etc. auf ein Bild setzen.

`<img>` hat keine Grundlinie, daher wird, wenn Bilder in einem Inline-Formatierungskontext mit {{cssxref("vertical-align", "vertical-align: baseline")}} verwendet werden, der Boden des Bildes auf die Texthöhe gesetzt.

Sie können die {{cssxref("object-position")}} Eigenschaft verwenden, um das Bild innerhalb des Elementrahmens zu positionieren, und die {{cssxref("object-fit")}} Eigenschaft, um die Bildgröße innerhalb des Rahmens anzupassen (zum Beispiel, ob das Bild in den Rahmen passen oder ihn füllen sollte, auch wenn das Abschneiden erforderlich ist).

Je nach Art kann ein Bild eine intrinsische Breite und Höhe haben. Für einige Bildtypen, wie {{Glossary("SVG", "SVG")}}, sind intrinsische Maße jedoch nicht erforderlich, wenn ihr Wurzelelement {{SVGElement("svg")}} kein `width` oder `height` gesetzt hat.

## Barrierefreiheit

### Bedeutungsvolle alternative Beschreibungen erstellen

Der Wert eines `alt`-Attributs sollte einen klaren und prägnanten Textersatz für den Inhalt des Bildes liefern. Es sollte nicht die bloße Anwesenheit des Bildes selbst beschreiben oder den Dateinamen des Bildes angeben. Wenn das `alt`-Attribut absichtlich weggelassen wird, da das Bild kein textuelles Äquivalent hat, ziehen Sie alternative Methoden in Betracht, um darzustellen, was das Bild vermitteln soll.

#### Nicht

```html example-bad
<img alt="image" src="penguin.jpg" />
```

#### Tun Sie es

```html example-good
<img alt="A Penguin on a beach." src="penguin.jpg" />
```

Ein wichtiger Barrierefreiheitstest besteht darin, den Inhalt des `alt`-Attributs zusammen mit dem vorhergehenden Textinhalt zu lesen, um zu sehen, ob es die gleiche Bedeutung wie das Bild übermittelt. Zum Beispiel könnte, wenn das Bild von dem Satz "Auf meinen Reisen habe ich ein süßes kleines Tier gesehen:" vorausgegangen wird, das Beispiel für Nicht-"Nicht verwenden" von einem Bildschirmlesegerät als "Auf meinen Reisen habe ich ein süßes kleines Tier gesehen: Bild" gelesen werden, was keinen Sinn ergibt. Das Beispiel für "Tun Sie es" könnte hingegen von einem Bildschirmlesegerät als "Auf meinen Reisen habe ich ein süßes kleines Tier gesehen: Ein Pinguin am Strand." gelesen werden, was Sinn ergibt.

Für Bilder, die eine Aktion auslösen sollen, zum Beispiel Bilder, die in einem {{htmlelement("a")}}- oder {{htmlelement("button")}}-Element verschachtelt sind, sollten Sie das Auslösen der Aktion im `alt`-Attribut-Wert beschreiben. Zum Beispiel könnten Sie `alt="nächste Seite"` anstelle von `alt="Pfeil rechts"` schreiben. Sie könnten auch in Betracht ziehen, eine optionale weitergehende Beschreibung in einem `title`-Attribut hinzuzufügen; dies kann von Bildschirmlesegeräten gelesen werden, wenn der Benutzer es anfordert.

Wenn ein `alt`-Attribut bei einem Bild fehlt, können einige Bildschirmlesegeräte stattdessen den Dateinamen des Bildes ankündigen. Dies kann eine verwirrende Erfahrung sein, wenn der Dateiname nicht repräsentativ für den Inhalt des Bildes ist.

- [Ein Alt-Entscheidungsbaum • Bilder • WAI-Web-Zugänglichkeitstutorials](https://www.w3.org/WAI/tutorials/images/decision-tree/)
- [Alt-Texts: Der ultimative Leitfaden — Axess Lab](https://axesslab.com/alt-texts/)
- [Wie man großartige Alt-Texte gestaltet: Eine Einführung | Deque](https://www.deque.com/blog/great-alt-text-introduction/)
- [MDN Verstehen von WCAG, Erläuterungen zur Richtlinie 1.1](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verständnis des Erfolgs-Kriteriums 1.1.1 | W3C Verstehen von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

### Identifizierung von SVG als Bild

Aufgrund eines [VoiceOver-Bugs](https://webkit.org/b/216364) kündigt VoiceOver SVG-Bilder nicht korrekt als Bilder an. Fügen Sie das [`role="img"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/img_role) zu allen `<img>`-Elementen mit SVG-Quellen-Dateien hinzu, um sicherzustellen, dass unterstützende Technologien SVG korrekt als Bildinhalt ankündigen.

```html
<img src="mdn.svg" alt="MDN" role="img" />
```

### Das title-Attribut

Das [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)-Attribut ist kein geeigneter Ersatz für das `alt`-Attribut. Vermeiden Sie außerdem, den Wert des `alt`-Attributs in einem `title`-Attribut auf demselben Bild zu duplizieren. Dies könnte dazu führen, dass einige Bildschirmlesegeräte denselben Text zweimal ansagen, was verwirrend sein kann.

Das `title`-Attribut sollte auch nicht als ergänzende Beschriftungsinformation zur Begleitung einer `alt`-Beschreibung eines Bildes verwendet werden. Wenn ein Bild eine Bildunterschrift benötigt, verwenden Sie die [`figure`](/de/docs/Web/HTML/Reference/Elements/figure)- und [`figcaption`](/de/docs/Web/HTML/Reference/Elements/figcaption)-Elemente.

Der Wert des `title`-Attributs wird dem Nutzer normalerweise als Tooltip angezeigt, der kurz erscheint, nachdem der Cursor über das Bild bewegt wurde. Dies _kann_ zusätzliche Informationen für den Nutzer bereitstellen, Sie sollten jedoch nicht davon ausgehen, dass der Nutzer ihn jemals sehen wird: der Nutzer könnte nur eine Tastatur oder einen Touch-Bildschirm haben. Falls Sie Informationen haben, die besonders wichtig oder wertvoll für den Nutzer sind, bieten Sie sie inline mit einer der oben genannten Methoden an, anstatt `title` zu verwenden.

- [Verwendung des HTML-title-Attributs – aktualisiert | Die Paciello-Gruppe](https://www.tpgi.com/using-the-html-title-attribute-updated/)

## Beispiele

### Alternativer Text

Das folgende Beispiel bettet ein Bild in die Seite ein und fügt für die Barrierefreiheit einen alternativen Text hinzu.

```html
<img src="/shared-assets/images/examples/favicon144.png" alt="MDN" />
```

{{ EmbedLiveSample('Alternative_text', '100%', '160') }}

### Bild-Link

Dieses Beispiel baut auf dem vorherigen auf und zeigt, wie das Bild in einen Link umgewandelt wird. Um dies zu tun, verschachteln Sie das `<img>`-Tag innerhalb des {{HTMLElement("a")}}-Tags. Der alternative Text sollte die Ressource beschreiben, auf die der Link zeigt, als ob Sie stattdessen einen Textlink verwenden würden.

```html
<a href="https://developer.mozilla.org">
  <img
    src="/shared-assets/images/examples/favicon144.png"
    alt="Visit the MDN site" />
</a>
```

{{ EmbedLiveSample('Image_link', '100%', '160') }}

### Verwendung des srcset-Attributes

In diesem Beispiel fügen wir ein `srcset`-Attribut mit einem Verweis auf eine hochauflösende Version des Logos ein; dieses wird auf hochauflösenden Geräten anstelle des `src`-Bildes geladen. Das im `src`-Attribut referenzierte Bild wird in User-Agents, die `srcset` unterstützen, als `1x`-Kandidat gezählt.

```html
<img
  src="/shared-assets/images/examples/favicon72.png"
  alt="MDN"
  srcset="/shared-assets/images/examples/favicon144.png 2x" />
```

{{EmbedLiveSample("Using_the_srcset_attribute", "100%", "160")}}

### Verwendung der srcset- und sizes-Attribute

Das `src`-Attribut wird in User-Agents, die `srcset` unterstützen, ignoriert, wenn `w`-Beschreiber enthalten sind. Wenn die Medienbedingung `(width <= 600px)` zutrifft, lädt das 200 Pixel breite Bild (dies ist das, das am "besten" zu `200px` passt), andernfalls wird das andere Bild geladen.

```html
<img
  src="clock-demo-200px.png"
  alt="The time is 12:45."
  srcset="clock-demo-200px.png 200w, clock-demo-400px.png 400w"
  sizes="(width <= 600px) 200px, 50vw" />
```

{{EmbedLiveSample("Using_the_srcset_and_sizes_attributes", "100%", 350)}}

> [!NOTE]
> Um die Größenänderung in Aktion zu sehen, {{LiveSampleLink('Using_the_srcset_and_sizes_attributes', 'ansicht das Beispiel auf einer separaten Seite')}}, damit Sie den Inhaltsbereich tatsächlich anpassen können.

## Sicherheits- und Datenschutzbedenken

Obwohl `<img>`-Elemente unschuldige Anwendungen haben, können sie unerwünschte Konsequenzen für die Sicherheit und Privatsphäre der Nutzer haben. Siehe [Referer-Header: Datenschutz- und Sicherheitsbedenken](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns) für weitere Informationen und Gegenmaßnahmen.

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
          >Phrasing-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#embedded_content"
          >eingebetteter Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#palpable_content"
          >fühlbarer Inhalt</a
        >. Wenn das Element ein <code>usemap</code>-Attribut hat, gehört es auch zur Kategorie der interaktiven Inhalte.
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
      <th scope="row">Implizierte ARIA Rolle</th>
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
      <th scope="row">Erlaubte ARIA Rollen</th>
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
            or <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a>
          </li>
          <li>
            mit keinem <code>alt</code>-Attribut, keine <code>role</code> erlaubt
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
- {{cssxref("object-fit")}}, {{cssxref("object-position")}}, {{cssxref("image-orientation")}}, {{cssxref("image-rendering")}}, und {{cssxref("image-resolution")}}: Bildbezogene CSS Eigenschaften.
- [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) Schnittstelle für dieses Element
- [HTML Bilder](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images)
- [Leitfaden für Bilddateitypen und -formate](/de/docs/Web/Media/Guides/Formats/Image_types)
- [Leitfaden für responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images)
