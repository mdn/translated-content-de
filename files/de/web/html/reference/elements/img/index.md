---
title: "<img>: Das Bild-Einbettungselement"
slug: Web/HTML/Reference/Elements/img
l10n:
  sourceCommit: f2e5d4f480b21ea85c6e9fa104f959ba9909c333
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

- Das `src`-Attribut enthält den Pfad zu dem Bild, das Sie einbetten möchten. Es ist nicht obligatorisch, wenn das [srcset](/de/docs/Web/API/HTMLImageElement/srcset)-Attribut verfügbar ist. Mindestens eines der Attribute `src` oder `srcset` muss jedoch angegeben werden.
- Das `alt`-Attribut enthält einen textuellen Ersatz für das Bild, was obligatorisch und **unglaublich nützlich** für die Barrierefreiheit ist - Bildschirmleser lesen den Attributwert ihren Nutzern vor, damit sie wissen, was das Bild bedeutet. Alternativtext wird auch auf der Seite angezeigt, wenn das Bild aus irgendeinem Grund nicht geladen werden kann: zum Beispiel bei Netzwerkfehlern, Inhaltsblockierung oder Link-Verrottung.

Es gibt viele andere Attribute, um verschiedene Zwecke zu erreichen:

- [Referrer](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy)/{{Glossary("CORS", "CORS")}}-Kontrolle für Sicherheit und Datenschutz: siehe [`crossorigin`](#crossorigin) und [`referrerpolicy`](#referrerpolicy).
- Verwenden Sie sowohl [`width`](#width) als auch [`height`](#height), um die intrinsische Größe des Bildes festzulegen, damit es bereits vor dem Laden Platz einnimmt und Inhaltsverschiebungen verhindert.
- Hinweise zu responsiven Bildern mit [`sizes`](#sizes) und [`srcset`](#srcset) (siehe auch das {{htmlelement("picture")}}-Element und unser [Leitfaden zu responsiven Bildern](/de/docs/Web/HTML/Guides/Responsive_images)).

## Unterstützte Bildformate

Der HTML-Standard listet nicht auf, welche Bildformate unterstützt werden müssen, sodass {{Glossary("user_agent", "Nutzeragenten")}} unterschiedliche Formate unterstützen können.

> [!NOTE]
> Der [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types) bietet umfassende Informationen zu Bildformaten und deren Unterstützung in Webbrowsern.
> Dieser Abschnitt ist nur eine Zusammenfassung!

Die am häufigsten im Web verwendeten Bilddateiformate sind:

- [APNG (Animated Portable Network Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#apng_animated_portable_network_graphics) — Gute Wahl für verlustfreie Animationssequenzen (GIF ist weniger performant)
- [AVIF (AV1 Image File Format)](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) — Gute Wahl für sowohl Bilder als auch animierte Bilder aufgrund der hohen Leistung.
- [GIF (Graphics Interchange Format)](/de/docs/Web/Media/Guides/Formats/Image_types#gif_graphics_interchange_format) — Gute Wahl für _einfache_ Bilder und Animationen.
- [JPEG (Joint Photographic Expert Group image)](/de/docs/Web/Media/Guides/Formats/Image_types#jpeg_joint_photographic_experts_group_image) — Gute Wahl für verlustbehaftete Komprimierung von Standbildern (derzeit das beliebteste).
- [PNG (Portable Network Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#png_portable_network_graphics) — Gute Wahl für verlustfreie Komprimierung von Standbildern (leicht bessere Qualität als JPEG).
- [SVG (Scalable Vector Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#svg_scalable_vector_graphics) — Vektorbildformat. Verwenden Sie es für Bilder, die in unterschiedlichen Größen exakt gezeichnet werden müssen.
- [WebP (Web Picture format)](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) — Hervorragende Wahl für sowohl Bilder als auch animierte Bilder

Formate wie [WebP](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) und [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) werden empfohlen, da sie viel besser als PNG, JPEG, GIF sowohl für Standbilder als auch animierte Bilder funktionieren.

SVG bleibt das empfohlene Format für Bilder, die in unterschiedlichen Größen exakt gezeichnet werden müssen.

## Bildladefehler

Wenn beim Laden oder Rendern eines Bildes ein Fehler auftritt und ein `onerror`-Ereignis-Handler für das [`error`](/de/docs/Web/API/HTMLElement/error_event)-Ereignis festgelegt wurde, wird dieser Ereignis-Handler aufgerufen. Dies kann in mehreren Situationen passieren, einschließlich:

- Die `src`- oder `srcset`-Attribute sind leer (`""`) oder `null`.
- Die `src`-{{Glossary("URL", "URL")}} ist dieselbe wie die URL der Seite, auf der sich der Benutzer gerade befindet.
- Das Bild ist auf eine Weise beschädigt, die es verhindert, dass es geladen wird.
- Die Metadaten des Bildes sind so beschädigt, dass es unmöglich ist, seine Dimensionen abzurufen, und es wurden keine Dimensionen in den Attributen des `<img>`-Elements angegeben.
- Das Bild befindet sich in einem vom {{Glossary("user_agent", "Nutzeragenten")}} nicht unterstützten Format.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- [`alt`](/de/docs/Web/API/HTMLImageElement/alt#usage_notes)

  - : Definiert Text, der das Bild auf der Seite ersetzen kann.

    > [!NOTE]
    > Browser zeigen nicht immer Bilder an. Es gibt eine Reihe von Situationen, in denen ein Browser Bilder möglicherweise nicht anzeigt, beispielsweise:
    >
    > - Nicht-visuelle Browser (wie die von Menschen mit Sehbehinderungen verwendet werden)
    > - Der Benutzer entscheidet sich dafür, Bilder nicht anzuzeigen (um Bandbreite zu sparen, aus Datenschutzgründen)
    > - Das Bild ist ungültig oder ein [nicht unterstützter Typ](#unterstützte_bildformate)
    >
    > In diesen Fällen kann der Browser das Bild durch den Text im `alt`-Attribut des Elements ersetzen. Aus diesen und anderen Gründen geben Sie wann immer möglich einen nützlichen Wert für `alt` an.

    Wenn Sie dieses Attribut auf einen leeren String (`alt=""`) setzen, bedeutet dies, dass dieses Bild _kein_ wesentlicher Bestandteil des Inhalts ist (es handelt sich um Dekoration oder ein Tracking-Pixel) und dass nicht-visuelle Browser es beim {{Glossary("Engine/Rendering", "Rendern")}} möglicherweise weglassen. Visuelle Browser verbergen auch das kaputte Bildsymbol, wenn das `alt`-Attribut leer ist und das Bild nicht angezeigt werden konnte.

    Dieses Attribut wird auch beim Kopieren und Einfügen des Bildes in Text oder beim Speichern eines verknüpften Bildes in einem Lesezeichen verwendet.

- `attributionsrc` {{experimental_inline}}

  - : Gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header zusammen mit der Bildanforderung sendet.

    Serverseitig wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Headers in der Antwort auszulösen, um eine bildbasierte [Attribution-Quelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#html-based_event_sources) oder einen [Attribution-Trigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#html-based_attribution_triggers) zu registrieren. Welcher Antwort-Header zurückgesendet werden soll, hängt vom Wert des `Attribution-Reporting-Eligible`-Headers ab, der die Registrierung ausgelöst hat.

    Das entsprechende Quell- oder Trigger-Ereignis wird ausgelöst, sobald der Browser die Antwort mit der Bilddatei erhält.

    > [!NOTE]
    > Siehe die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) für weitere Details.

    Es gibt zwei Versionen dieses Attributs, die Sie festlegen können:

    - Boolean, d.h. nur der `attributionsrc`-Name. Dies gibt an, dass Sie möchten, dass der {{httpheader("Attribution-Reporting-Eligible")}}-Header an denselben Server gesendet wird, auf den das `src`-Attribut verweist. Dies ist in Ordnung, wenn Sie die Registrierung der Attribution-Quelle oder des Triggers auf demselben Server bearbeiten. Bei der Registrierung eines Attribution-Triggers ist diese Eigenschaft optional, und ein Boolean-Wert wird verwendet, wenn sie weggelassen wird.
    - Wert, der eine oder mehrere URLs enthält, zum Beispiel:

    ```html
    <img
      src="image-file.png"
      alt="My image file description"
      attributionsrc="https://a.example/register-source
                         https://b.example/register-source" />
    ```

    Dies ist nützlich in Fällen, in denen die angeforderte Ressource nicht auf einem Server liegt, den Sie kontrollieren, oder Sie einfach die Registrierung der Attribution-Quelle auf einem anderen Server bearbeiten möchten. In diesem Fall können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcenanforderung erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header an die im `attributionsrc` angegebenen URL(s) zusätzlich zum Ursprungsserver gesendet. Diese URLs können dann mit einem {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header antworten, um die Registrierung abzuschließen.

    > [!NOTE]
    > Die Angabe mehrerer URLs bedeutet, dass auf derselben Funktion mehrere Attributionsquellen registriert werden können. Sie könnten zum Beispiel verschiedene Kampagnen haben, deren Erfolg Sie messen möchten und die das Generieren verschiedener Berichte zu unterschiedlichen Daten beinhalten.

- [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)

  - : Gibt an, ob das Abrufen des Bildes mithilfe einer {{Glossary("CORS", "CORS")}}-Anfrage durchgeführt werden muss. Bilddaten von einem [CORS-fähigen Bild](/de/docs/Web/HTML/How_to/CORS_enabled_image), das von einer CORS-Anforderung zurückgegeben wird, können im {{HTMLElement("canvas")}}-Element wiederverwendet werden, ohne als "[verunreinigt](/de/docs/Web/HTML/How_to/CORS_enabled_image#security_and_tainted_canvases)" markiert zu werden.

    Wenn das `crossorigin`-Attribut _nicht_ angegeben ist, wird eine Nicht-CORS-Anfrage gesendet (ohne den {{httpheader("Origin")}}-Anforderungsheader), und der Browser markiert das Bild als verunreinigt und schränkt den Zugriff auf seine Bilddaten ein, was seine Verwendung in {{HTMLElement("canvas")}}-Elementen verhindert.

    Wenn das `crossorigin`-Attribut _angegeben_ ist, wird eine CORS-Anfrage gesendet (mit dem {{httpheader("Origin")}}-Anforderungsheader); aber wenn der Server nicht die Option zur Bereitstellung von Cross-Origin-Zugriff auf die Bilddaten für die Ursprungsseite gewählt hat (indem er keinen {{httpheader("Access-Control-Allow-Origin")}}-Antwortheader sendet oder die Ursprungsseite nicht in irgendeinem {{httpheader("Access-Control-Allow-Origin")}}-Antwortheader, den er sendet, eingeschlossen hat), blockiert der Browser das Laden des Bildes und protokolliert einen CORS-Fehler in die Entwicklertools-Konsole.

    Erlaubte Werte:

    - `anonymous`
      - : Eine CORS-Anfrage wird ohne Anmeldeinformationen gesendet (d.h. keine {{Glossary("cookie", "Cookies")}}, [X.509-Zertifikate](https://datatracker.ietf.org/doc/html/rfc5280) oder {{httpheader("Authorization")}}-Anforderungsheader).
    - `use-credentials`
      - : Die CORS-Anfrage wird mit allen enthaltenen Anmeldeinformationen gesendet (d.h. Cookies, X.509-Zertifikate und der `Authorization`-Anforderungsheader). Wenn der Server sich nicht dafür entscheidet, die Anmeldeinformationen mit der Ursprungsseite zu teilen (indem er den `Access-Control-Allow-Credentials: true`-Antwortheader zurücksendet), markiert der Browser das Bild als verunreinigt und schränkt den Zugriff auf seine Bilddaten ein.

    Wenn das Attribut einen ungültigen Wert hat, behandeln Browser es so, als ob der `anonymous`-Wert verwendet wurde. Siehe [CORS-Einstellungen-Attribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin) für weitere Informationen.

- `decoding`

  - : Dieses Attribut gibt dem Browser einen Hinweis darauf, ob er die Dekodierung des Bildes zusammen mit dem Rendern des anderen DOM-Inhalts in einem einzigen Präsentationsschritt durchführen sollte, der "korrekter" aussieht (`sync`), oder den anderen DOM-Inhalt zuerst rendern und präsentieren sollte und dann das Bild dekodiert und später präsentiert (`async`). In der Praxis bedeutet `async`, dass das nächste Rendering nicht darauf wartet, dass das Bild dekodiert wird.

    Es ist oft schwierig, einen merklichen Effekt beim Verwenden von `decoding` bei statischen `<img>`-Elementen wahrzunehmen. Sie werden wahrscheinlich zunächst als leere Bilder gerendert, während die Bilddateien (entweder über das Netzwerk oder aus dem Cache) abgerufen und dann unabhängig bearbeitet werden, sodass die "Synchronisierung" von Inhaltsaktualisierungen weniger augenfällig ist. Dennoch kann das Blockieren des Renderns, während die Dekodierung erfolgt, obwohl oft sehr gering, _nachgewiesen_ werden, selbst wenn es mit dem menschlichen Auge schwer zu erkennen ist. Siehe [Was macht das Image Decoding Attribut wirklich?](https://www.tunetheweb.com/blog/what-does-the-image-decoding-attribute-actually-do/) für eine detailliertere Analyse (tunetheweb.com, 2023).

    Die Verwendung unterschiedlicher `decoding`-Typen kann zu spürbareren Unterschieden führen, wenn `<img>`-Elemente dynamisch über JavaScript in das DOM eingefügt werden — siehe [`HTMLImageElement.decoding`](/de/docs/Web/API/HTMLImageElement/decoding) für mehr Details.

    Erlaubte Werte:

    - `sync`
      - : Dekodieren Sie das Bild synchron zusammen mit dem Rendern des anderen DOM-Inhalts und präsentieren Sie alles zusammen.
    - `async`
      - : Dekodieren Sie das Bild asynchron, nachdem der andere DOM-Inhalt gerendert und präsentiert wurde.
    - `auto`
      - : Keine Präferenz für den Dekodierungsmodus; der Browser entscheidet, was für den Benutzer am besten ist. Dies ist der Standardwert.

- [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming)

  - : Markiert das Bild zur Beobachtung durch die [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)-API. Der angegebene Wert wird zu einem Bezeichner für das beobachtete Bild-Element. Siehe auch die [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming)-Attributseite.

- `fetchpriority`

  - : Gibt einen Hinweis auf die relative Priorität, die beim Abrufen des Bildes verwendet werden soll.
    Erlaubte Werte:

    - `high`
      - : Abrufen des Bildes mit hoher Priorität im Vergleich zu anderen Bildern.
    - `low`
      - : Abrufen des Bildes mit niedriger Priorität im Vergleich zu anderen Bildern.
    - `auto`
      - : Keine Präferenz für die Abrufpriorität einstellen.
        Dies ist der Standard.
        Es wird verwendet, wenn kein Wert oder ein ungültiger Wert festgelegt ist.

    Siehe [`HTMLImageElement.fetchPriority`](/de/docs/Web/API/HTMLImageElement/fetchPriority) für mehr Informationen.

- `height`

  - : Die intrinsische Höhe des Bildes in Pixel. Muss eine Ganzzahl ohne Einheit sein.

    > [!NOTE]
    > Die Angabe von `height` und [`width`](#width) ermöglicht es dem Browser, das {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Bildes zu berechnen, bevor das Bild geladen wird. Dieses Seitenverhältnis wird verwendet, um den Platz zu reservieren, der zum Anzeigen des Bildes benötigt wird, wodurch eine Layout-Verschiebung beim Herunterladen und Anzeigen des Bildes auf dem Bildschirm reduziert oder sogar verhindert wird. Das Reduzieren von Layout-Verschiebungen ist ein wesentlicher Bestandteil einer guten Benutzererfahrung und Web-Performance.

- `ismap`

  - : Dieses Boolean-Attribut zeigt an, dass das Bild Teil einer [serverseitigen Karte](https://en.wikipedia.org/wiki/Image_map#Server-side) ist. In diesem Fall werden die Koordinaten, auf die der Benutzer auf dem Bild geklickt hat, an den Server gesendet.

    > [!NOTE]
    > Dieses Attribut ist nur erlaubt, wenn das `<img>`-Element ein Nachkomme eines {{htmlelement("a")}}-Elements mit einem gültigen [`href`](/de/docs/Web/HTML/Reference/Elements/a#href)-Attribut ist. Dies bietet Benutzern ohne Zeigegeräte einen Fallback-Ziel.

- `loading`

  - : Gibt an, wie der Browser das Bild laden soll:

    - `eager`
      - : Lädt das Bild sofort, unabhängig davon, ob sich das Bild derzeit im sichtbaren Sichtfenster befindet oder nicht (dies ist der Standardwert).
    - `lazy`
      - : Verzögert das Laden des Bildes, bis es eine berechnete Entfernung vom Sichtfenster erreicht, wie es der Browser definiert. Die Absicht ist, die Netz- und Speicherbandbreite zu vermeiden, die erforderlich ist, um das Bild zu handhaben, bis es mit angemessener Sicherheit benötigt wird. Dies verbessert in den meisten typischen Anwendungsfällen die Leistung des Inhalts.

    > [!NOTE]
    > Das Laden wird nur verzögert, wenn JavaScript aktiviert ist. Dies ist eine Anti-Tracking-Maßnahme, denn wenn ein Benutzeragent Lazy-Loading unterstützt, wenn Scripting deaktiviert ist, wäre es immer noch möglich, die ungefähre Scroll-Position eines Benutzers während einer Sitzung zu verfolgen, indem strategisch Bilder im Markup einer Seite platziert werden, sodass ein Server verfolgen kann, wie viele Bilder angefordert werden und wann.

    > [!NOTE]
    > Bilder mit `loading`-Einstellung auf `lazy` werden niemals geladen, wenn sie keinen sichtbaren Teil eines Elements schneiden, auch wenn das Laden sie ändern würde, da nicht geladene Bilder eine `width` und `height` von `0` haben. Die Angabe von `width` und `height` bei Lazy-Loaded Bildern behebt dieses Problem und ist eine bewährte Methode, [die von der Spezifikation empfohlen wird](https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element). Dies trägt auch dazu bei, Layout-Verschiebungen zu verhindern.

- `referrerpolicy`

  - : Eine Zeichenkette, die angibt, welchen Referrer beim Abrufen der Ressource verwendet werden soll:

    - `no-referrer`: Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}}-Header wird nicht an {{Glossary("origin", "Ursprünge")}} ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`: Der gesendete Referrer wird auf den Ursprung der verweisenden Seite beschränkt: ihr [Schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`: Der an andere Ursprünge gesendete Referrer wird auf das Schema, den Host und den Port beschränkt. Navigationsvorgänge im gleichen Ursprung beinhalten weiterhin den Pfad.
    - `same-origin`: Ein Referrer wird für den {{Glossary("Same-origin_policy", "same origin")}} gesendet, jedoch enthalten Cross-Origin-Anfragen keine Referrer-Informationen.
    - `strict-origin`: Senden Sie den Ursprung des Dokuments als Referrer nur dann, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), aber nicht an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard): Senden Sie eine vollständige URL bei einer Same-Origin-Anforderung, senden Sie nur den Ursprung, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), und senden Sie keinen Header an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `unsafe-url`: Der Referrer wird den Ursprung _und_ den Pfad enthalten (aber nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder [Benutzername](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge leakt.

- `sizes`

  - : Eine oder mehrere durch Kommas getrennte Zeichenfolgen, die eine Reihe von Quellgrößen angeben. Jede Quellgröße besteht aus:

    1. Einer [Medienbedingung](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#syntax). Diese muss für den letzten Eintrag in der Liste ausgelassen werden.
    2. Einem Quellgrößenwert.

    Medienbedingungen beschreiben Eigenschaften des _Viewports_, nicht des _Bildes_. Zum Beispiel schlägt `(max-height: 500px) 1000px` vor, eine Quelle von 1000px Breite zu verwenden, wenn der _Viewport_ nicht höher als 500px ist. Da ein Quellgrößen-Deskriptor verwendet wird, um die Breite anzugeben, die für das Bild während des Layouts der Seite verwendet werden soll, basiert die Medienbedingung typischerweise (aber nicht notwendigerweise) auf den [Width](/de/docs/Web/CSS/@media/width)-Informationen.

    Quellgrößenwerte geben die beabsichtigte Anzeigengröße des Bildes an. {{Glossary("User_agent", "Nutzeragenten")}} verwenden die aktuelle Quellgröße, um eine der Quellen auszuwählen, die durch das `srcset`-Attribut bereitgestellt werden, wenn diese Quellen mit Width-Deskriptoren (`w`) beschrieben werden. Die ausgewählte Quellgröße beeinflusst die {{Glossary("intrinsic_size", "intrinsische Größe")}} des Bildes (die Anzeigengröße des Bildes, wenn kein {{Glossary("CSS", "CSS")}}-Stil angewendet wird). Wenn das `srcset`-Attribut fehlt oder keine Werte mit einem Width-Deskriptor enthält, hat das `sizes`-Attribut keine Wirkung.

    Ein Quellgrößenwert kann jede nicht negative [Länge](/de/docs/Web/CSS/length) sein. Es darf keine CSS-Funktionen außer den [Mathefunktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#math_functions) verwenden. Einheiten werden in gleicher Weise wie [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries) interpretiert, was bedeutet, dass alle relativen Längeneinheiten relativ zur Dokumentwurzel und nicht zum `<img>`-Element sind, sodass ein `em`-Wert auf die Schriftgröße der Wurzel und nicht auf die Schriftgröße des Bildes bezogen ist. [Prozentwerte](/de/docs/Web/CSS/percentage) sind nicht erlaubt.

    Das `sizes`-Attribut akzeptiert auch folgende Schlüsselwortwerte:

    - `auto`

      - : `auto` kann die gesamte Liste der Größen oder den ersten Eintrag in der Liste ersetzen. Es ist nur gültig in Kombination mit `loading="lazy"` und lässt sich auf die [konkrete Größe](/de/docs/Web/CSS/image) des Bildes auflösen. Da die intrinsische Größe des Bildes noch nicht bekannt ist, sollten `width`- und `height`-Attribute (oder CSS-Äquivalente) ebenfalls angegeben werden, um [zu verhindern, dass der Browser eine Standardbreite von 300px annimmt](https://html.spec.whatwg.org/multipage/images.html#sizes-attributes:attr-dim-width).

- `src`
  - : Die Bild-{{Glossary("URL", "URL")}}. Pflichtangabe für das `<img>`-Element. In {{Glossary("Browser", "Browsern")}}, die `srcset` unterstützen, wird `src` wie ein Bildkandidat mit einem Pixeldichte-Deskriptor von `1x` behandelt, es sei denn, ein Bild mit diesem Pixeldichte-Deskriptor ist bereits in `srcset` definiert, oder `srcset` enthält `w`-Deskriptoren.
- `srcset`

  - : Eine oder mehrere durch Kommas getrennte Zeichenfolgen, die mögliche Bildquellen für den {{Glossary("user_agent", "Nutzeragenten")}} angeben. Jede Zeichenfolge besteht aus:

    1. Einer {{Glossary("URL", "URL")}} zu einem Bild
    2. Optional gefolgt von einem der folgenden:

       - Einem Width-Deskriptor (eine positive Ganzzahl gefolgt von `w`). Der Width-Deskriptor wird durch die in `sizes` gewählte Quellgröße geteilt, um die effektive Pixeldichte zu berechnen.
       - Einem Pixeldichte-Deskriptor (eine positive Gleitkommazahl gefolgt von `x`).

    Wenn kein Deskriptor angegeben ist, wird der Quelle der Standarddeskriptor `1x` zugewiesen.

    Es ist falsch, Width-Deskriptoren und Pixeldichte-Deskriptoren im selben `srcset`-Attribut zu mischen. Doppelte Deskriptoren (zum Beispiel zwei Quellen im selben `srcset`, die beide mit `2x` beschrieben sind) sind ebenfalls ungültig.

    Wenn das `srcset`-Attribut Width-Deskriptoren verwendet, muss auch das `sizes`-Attribut vorhanden sein, andernfalls wird `srcset` selbst ignoriert.

    Der Nutzeragent wählt nach eigenem Ermessen eine der verfügbaren Quellen aus. Dies gibt ihnen einen erheblichen Spielraum, ihre Auswahl basierend auf Faktoren wie Benutzerpräferenzen oder {{Glossary("bandwidth", "Bandbreiten")}}-Bedingungen anzupassen. Siehe unser [Leitfaden zu responsiven Bildern](/de/docs/Web/HTML/Guides/Responsive_images) für ein Beispiel.

- `width`
  - : Die intrinsische Breite des Bildes in Pixel. Muss eine Ganzzahl ohne Einheit sein.
- `usemap`

  - : Die teilweise {{Glossary("URL", "URL")}} (beginnend mit `#`) einer [Bildkarte](/de/docs/Web/HTML/Reference/Elements/map), die mit dem Element verknüpft ist.

    > [!NOTE]
    > Sie können dieses Attribut nicht verwenden, wenn das `<img>`-Element innerhalb eines {{htmlelement("a")}} oder {{HTMLElement("button")}}-Elements befindet.

### Veraltete Attribute

- `align` {{deprecated_inline}}

  - : Richtet das Bild im Verhältnis zu seinem umliegenden Kontext aus. Verwenden Sie die {{cssxref('float')}} und/oder {{cssxref('vertical-align')}} {{Glossary("CSS", "CSS")}}-Eigenschaften anstelle dieses Attributs. Erlaubte Werte:

    - `top`
      - : Entspricht `vertical-align: top` oder `vertical-align: text-top`
    - `middle`
      - : Entspricht `vertical-align: -moz-middle-with-baseline`
    - `bottom`
      - : Standardwert, entspricht `vertical-align: unset` oder `vertical-align: initial`
    - `left`
      - : Entspricht `float: left`
    - `right`
      - : Entspricht `float: right`

- `border` {{deprecated_inline}}
  - : Die Breite eines Rahmens um das Bild. Verwenden Sie die {{cssxref('border')}} {{Glossary("CSS", "CSS")}}-Eigenschaft stattdessen.
- `hspace` {{deprecated_inline}}
  - : Die Anzahl der Pixel des weißen Raums links und rechts vom Bild. Verwenden Sie die {{cssxref('margin')}}-CSS-Eigenschaft stattdessen.
- `longdesc` {{deprecated_inline}}

  - : Ein Link zu einer detaillierteren Beschreibung des Bildes. Mögliche Werte sind eine {{Glossary("URL", "URL")}} oder eine Element-`id`](/de/docs/Web/HTML/Reference/Global_attributes/id).

    > [!NOTE]
    > Dieses Attribut wird in der neuesten {{Glossary("W3C", "W3C")}}-Version, [HTML 5.2](https://html.spec.whatwg.org/multipage/obsolete.html#element-attrdef-img-longdesc) erwähnt, wurde jedoch aus dem {{Glossary("WHATWG", "WHATWG")}}'s [HTML Living Standard](https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element) entfernt. Es hat eine ungewisse Zukunft; Autoren sollten eine {{Glossary("WAI", "WAI")}}-{{Glossary("ARIA", "ARIA")}}-Alternative wie [`aria-describedby`](https://www.w3.org/TR/wai-aria-1.1/#aria-describedby) oder [`aria-details`](https://www.w3.org/TR/wai-aria-1.1/#aria-details) verwenden.

- `name` {{deprecated_inline}}
  - : Ein Name für das Element. Verwenden Sie das [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut stattdessen.
- `vspace` {{deprecated_inline}}
  - : Die Anzahl der Pixel des weißen Raums oberhalb und unterhalb des Bildes. Verwenden Sie die {{cssxref('margin')}}-CSS-Eigenschaft stattdessen.

## Styling mit CSS

`<img>` ist ein {{Glossary("replaced_elements", "ersetztes Element")}}; es hat standardmäßig einen {{cssxref("display")}}-Wert von `inline`, aber seine Standardabmessungen sind durch die eingebetteten intrinsischen Werte des Bildes definiert, als wäre es `inline-block`. Sie können Eigenschaften wie {{cssxref("border")}}/{{cssxref("border-radius")}}, {{cssxref("padding")}}/{{cssxref("margin")}}, {{cssxref("width")}}, {{cssxref("height")}}, usw. auf ein Bild anwenden.

`<img>` hat keine Basislinie, daher wird bei Verwendung in einem Inline-Formatierungskontext mit {{cssxref("vertical-align", "vertical-align: baseline")}} das untere Ende des Bildes auf der Textbasislinie platziert.

Sie können die {{cssxref("object-position")}}-Eigenschaft verwenden, um das Bild innerhalb des Box-Elements zu positionieren, und die {{cssxref("object-fit")}}-Eigenschaft verwenden, um die Größe des Bildes innerhalb der Box anzupassen (zum Beispiel, ob das Bild in die Box passen oder sie ausfüllen sollte, selbst wenn ein Zuschneiden erforderlich ist).

Je nach Typ kann ein Bild eine intrinsische Breite und Höhe haben. Bei einigen Bildtypen sind jedoch keine intrinsischen Dimensionen erforderlich. {{Glossary("SVG", "SVG")}}-Bilder beispielsweise haben keine intrinsischen Dimensionen, wenn ihr Wurzel-{{SVGElement("svg")}}-Element keine `width`- oder `height`-Einstellung hat.

## Barrierefreiheit

### Erstellung bedeutungsvoller alternativer Beschreibungen

Der Wert eines `alt`-Attributs sollte einen klaren und prägnanten Textersatz für den Inhalt des Bildes bieten. Es sollte weder die Anwesenheit des Bildes selbst noch den Dateinamen des Bildes beschreiben. Wenn das `alt`-Attribut absichtlich weggelassen wird, weil das Bild kein textliches Äquivalent hat, sollten Sie alternative Methoden in Betracht ziehen, um zu präsentieren, was das Bild zu kommunizieren versucht.

#### Don't

```html example-bad
<img alt="image" src="penguin.jpg" />
```

#### Do

```html example-good
<img alt="A Penguin on a beach." src="penguin.jpg" />
```

Ein wichtiger Test für die Barrierefreiheit ist das Lesen des `alt`-Attributinhalts zusammen mit dem vorhergehenden Textinhalt, um zu prüfen, ob es die gleiche Bedeutung wie das Bild vermittelt. Zum Beispiel, wenn das Bild von dem Satz "Auf meinen Reisen sah ich ein niedliches kleines Tier:" vorangegangen wäre, könnte die _Don't_-Beispiel von einem Bildschirmleser als "Auf meinen Reisen sah ich ein niedliches kleines Tier: Bild" gelesen werden, was keinen Sinn ergibt. Die _Do_-Beispiel könnte von einem Bildschirmleser als "Auf meinen Reisen sah ich ein niedliches kleines Tier: Ein Pinguin am Strand." gelesen werden, was Sinn ergibt.

Für Bilder, die eine Handlung auslösen, zum Beispiel Bilder, die in einem {{htmlelement("a")}}- oder {{htmlelement("button")}}-Element verschachtelt sind, sollten Sie in Erwägung ziehen, die ausgelöste Aktion im `alt`-Attributwert zu beschreiben. Zum Beispiel könnten Sie `alt="nächste Seite"` anstelle von `alt="Pfeil rechts"` schreiben. Sie könnten auch in Erwägung ziehen, eine optionale weitere Beschreibung in einem `title`-Attribut hinzuzufügen; dies kann von Bildschirmlesegeräten auf Anfrage des Benutzers gelesen werden.

Wenn ein `alt`-Attribut auf einem Bild nicht vorhanden ist, können einige Bildschirmlesegeräte stattdessen den Dateinamen des Bildes ankündigen. Dies kann eine verwirrende Erfahrung sein, wenn der Dateiname nicht repräsentativ für den Inhalt des Bildes ist.

- [Ein Alt-Entscheidungsbaum • Bilder • WAI-Web-Barrierefreiheit-Tutorials](https://www.w3.org/WAI/tutorials/images/decision-tree/)
- [Alt-Texte: Der ultimative Leitfaden — Axess Lab](https://axesslab.com/alt-texts/)
- [Wie man großartige Alt-Texte entwirft: Eine Einführung | Deque](https://www.deque.com/blog/great-alt-text-introduction/)
- [MDN Verständnis der WCAG, Leitfaden 1.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_erstellung_von_textalternativen_für_nicht-texInhalte)
- [Verständnis des Erfolgskriteriums 1.1.1 | W3C Verständnis der WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

### SVG als Bild identifizieren

Aufgrund eines [VoiceOver-Bugs](https://webkit.org/b/216364) kündigt VoiceOver SVG-Bilder nicht korrekt als Bilder an. Fügen Sie [`role="img"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/img_role) zu allen `<img>`-Elementen mit SVG-Quelldateien hinzu, um sicherzustellen, dass unterstützende Technologien das SVG als Bildinhalt korrekt ankündigen.

```html
<img src="mdn.svg" alt="MDN" role="img" />
```

### Das title-Attribut

Das [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)-Attribut ist kein akzeptabler Ersatz für das `alt`-Attribut. Ferner vermeiden Sie, den Wert des `alt`-Attributs in einem `title`-Attribut, das auf demselben Bild deklariert ist, zu duplizieren. Andernfalls könnten einige Bildschirmlesegeräte den gleichen Text zweimal ankündigen, was zu einer verwirrenden Erfahrung führen kann.

Das `title`-Attribut sollte auch nicht als ergänzende Beschriftungsinformation verwendet werden, um die `alt`-Beschreibung eines Bildes zu begleiten. Wenn ein Bild eine Beschriftung benötigt, verwenden Sie die [`figure`](/de/docs/Web/HTML/Reference/Elements/figure)- und [`figcaption`](/de/docs/Web/HTML/Reference/Elements/figcaption)-Elemente.

Der Wert des `title`-Attributs wird dem Benutzer normalerweise als Tooltip präsentiert, der kurz nach dem Aufhören der Mausbewegung über dem Bild angezeigt wird. Obwohl dies dem Benutzer zusätzliche Informationen bieten _kann_, sollten Sie nicht davon ausgehen, dass der Benutzer ihn jemals sieht: Der Benutzer hat möglicherweise nur Tastatur oder Touchscreen. Wenn Sie Informationen haben, die besonders wichtig oder wertvoll für den Benutzer sind, präsentieren Sie sie inline mit einer der oben genannten Methoden anstatt mit `title`.

- [Verwendung des HTML-Titelattributs – aktualisiert | The Paciello Group](https://www.tpgi.com/using-the-html-title-attribute-updated/)

## Beispiele

### Alternativer Text

Das folgende Beispiel bettet ein Bild in die Seite ein und enthält Alternativtext für die Barrierefreiheit.

```html
<img src="/shared-assets/images/examples/favicon144.png" alt="MDN" />
```

{{ EmbedLiveSample('Alternative_text', '100%', '160') }}

### Bildlink

Dieses Beispiel baut auf dem vorherigen auf und zeigt, wie man das Bild in einen Link verwandelt. Dazu nisten Sie das `<img>`-Tag innerhalb des {{HTMLElement("a")}}. Sie sollten den Alternativtext so beschreiben lassen, dass die Ressource, auf die der Link verweist, beschrieben wird, als würden Sie stattdessen einen Textlink verwenden.

```html
<a href="https://developer.mozilla.org">
  <img
    src="/shared-assets/images/examples/favicon144.png"
    alt="Visit the MDN site" />
</a>
```

{{ EmbedLiveSample('Image_link', '100%', '160') }}

### Verwendung des srcset-Attributs

In diesem Beispiel fügen wir ein `srcset`-Attribut mit einem Verweis auf eine hochauflösende Version des Logos ein; diese wird statt des `src`-Bildes auf Geräten mit hoher Auflösung geladen. Das im `src`-Attribut angegebene Bild wird in {{Glossary("User_agent", "Nutzeragenten")}}, die `srcset` unterstützen, als `1x`-Kandidat gezählt.

```html
<img
  src="/shared-assets/images/examples/favicon72.png"
  alt="MDN"
  srcset="/shared-assets/images/examples/favicon144.png 2x" />
```

{{EmbedLiveSample("Using_the_srcset_attribute", "100%", "160")}}

### Verwendung der srcset- und sizes-Attribute

Das `src`-Attribut wird in {{Glossary("User_agent", "Nutzeragenten")}}, die `srcset` unterstützen, ignoriert, wenn `w`-Deskriptoren enthalten sind. Wenn die `(max-width: 600px)`-Medienbedingung übereinstimmt, wird das 200 Pixel breite Bild geladen (es ist das, das `200px` am ähnlichsten entspricht), andernfalls wird das andere Bild geladen.

```html
<img
  src="clock-demo-200px.png"
  alt="The time is 12:45."
  srcset="clock-demo-200px.png 200w, clock-demo-400px.png 400w"
  sizes="(max-width: 600px) 200px, 50vw" />
```

{{EmbedLiveSample("Using_the_srcset_and_sizes_attributes", "100%", 350)}}

> [!NOTE]
> Um das Größenänderungsverhalten in Aktion zu sehen, {{LiveSampleLink('Using_the_srcset_and_sizes_attributes', 'zeigen Sie das Beispiel auf einer separaten Seite an')}}, damit Sie tatsächlich den Inhaltsbereich ändern können.

## Sicherheits- und Datenschutzbedenken

Obwohl `<img>`-Elemente harmlose Verwendungen haben, können sie unerwünschte Konsequenzen für die Sicherheit und den Datenschutz des Benutzers haben. Siehe [Referer-Header: Datenschutz- und Sicherheitsbedenken](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns) für weitere Informationen und Maßnahmen.

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
          >Phrasierungsinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#embedded_content"
          >eingebetteter Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#palpable_content"
          >spürbarer Inhalt</a
        >. Wenn das Element ein <code>usemap</code>-Attribut hat, ist es auch Teil der Kategorie interaktiver Inhalte.
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
      <th scope="row">Zulässige Eltern</th>
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
              ><code>Präsentation</code></a
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
                    >Schaltfläche</a
                  ></code
                >
              </li>
              <li>
                <code
                  ><a
                    href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role"
                    >Kontrollkästchen</a
                  ></code
                >
              </li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/link_role"><code>Link</code></a></li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role"><code>Menüelement</code></a></li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role"><code>menüelementkontrollkästchen</code></a></li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role"><code>menüelementradio</code></a></li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role"><code>Option</code></a></li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role"><code>Fortschrittsbalken</code></a></li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role"><code>scrollleiste</code></a></li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role"><code>Trennzeichen</code></a></li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role"><code>Schieberegler</code></a></li>
              <li>
                <code
                  ><a
                    href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role"
                    >Schalter</a
                  ></code
                >
              </li>
              <li>
                <code
                  ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role"
                    >Reiter</a
                  ></code
                >
              </li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/treeitem_role"><code>Baumelement</code></a></li>
            </ul>
          </li>
          <li>
            mit leerem <code>alt</code>-Attribut, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/none_role"><code>keine</code></a>
            oder <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>Präsentation</code></a>
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
- [Responsives Bilder](/de/docs/Web/HTML/Guides/Responsive_images)
