---
title: "<img>: Das Image Embed Element"
slug: Web/HTML/Element/img
l10n:
  sourceCommit: 75326725db2daa924618e58ae31a43345c7a16dc
---

{{HTMLSidebar}}

Das **`<img>`**-Element von [HTML](/de/docs/Web/HTML) bettet ein Bild in das Dokument ein.

{{EmbedInteractiveExample("pages/tabbed/img.html", "tabbed-standard")}}

Das obige Beispiel zeigt die Verwendung des `<img>`-Elements:

- Das `src`-Attribut ist **erforderlich** und enthält den Pfad zum Bild, das Sie einbetten möchten.
- Das `alt`-Attribut enthält einen textuellen Ersatz für das Bild, der obligatorisch und **ungemein nützlich** für die Barrierefreiheit ist — Screenreader lesen den Attributwert aus, damit die Nutzer wissen, was das Bild bedeutet. Alternativtext wird auch auf der Seite angezeigt, wenn das Bild aus irgendeinem Grund nicht geladen werden kann, beispielsweise bei Netzwerkfehlern, Inhaltsblockierung oder „Linkrot“.

Es gibt viele weitere Attribute, um verschiedene Zwecke zu erreichen:

- [Referrer](/de/docs/Web/HTTP/Headers/Referrer-Policy)/[CORS](/de/docs/Glossary/CORS)-Kontrolle für Sicherheit und Datenschutz: siehe [`crossorigin`](#crossorigin) und [`referrerpolicy`](#referrerpolicy).
- Verwenden Sie sowohl [`width`](#width) als auch [`height`](#height), um die intrinsische Größe des Bildes festzulegen und damit es Platz einnimmt, bevor es geladen wird, um Layoutverschiebungen zu mildern.
- Responsive Bildhinweise mit [`sizes`](#sizes) und [`srcset`](#srcset) (siehe auch das {{htmlelement("picture")}}-Element und unser [Leitfaden zu responsiven Bildern](/de/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)).

## Unterstützte Bildformate

Der HTML-Standard gibt nicht an, welche Bildformate unterstützt werden sollten, daher können [Benutzeragenten](/de/docs/Glossary/user_agent) unterschiedliche Formate unterstützen.

> [!NOTE]
> Der [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Formats/Image_types) bietet umfassende Informationen über Bildformate und deren Unterstützung durch Webbrowser.
> Dieser Abschnitt ist nur eine Zusammenfassung!

Die auf dem Web am häufigsten verwendeten Bilddateiformate sind:

- [APNG (Animated Portable Network Graphics)](/de/docs/Web/Media/Formats/Image_types#apng_animated_portable_network_graphics) — Gute Wahl für verlustfreie Animationssequenzen (GIF ist weniger leistungsfähig)
- [AVIF (AV1 Image File Format)](/de/docs/Web/Media/Formats/Image_types#avif_image) — Gute Wahl für sowohl Bilder als auch animierte Bilder aufgrund der hohen Leistung.
- [GIF (Graphics Interchange Format)](/de/docs/Web/Media/Formats/Image_types#gif_graphics_interchange_format) — Gute Wahl für _einfache_ Bilder und Animationen.
- [JPEG (Joint Photographic Expert Group image)](/de/docs/Web/Media/Formats/Image_types#jpeg_joint_photographic_experts_group_image) — Gute Wahl für verlustbehaftete Komprimierung von Standbildern (derzeit am beliebtesten).
- [PNG (Portable Network Graphics)](/de/docs/Web/Media/Formats/Image_types#png_portable_network_graphics) — Gute Wahl für verlustfreie Komprimierung von Standbildern (leicht bessere Qualität als JPEG).
- [SVG (Scalable Vector Graphics)](/de/docs/Web/Media/Formats/Image_types#svg_scalable_vector_graphics) — Vektorbild-Format. Verwenden Sie es für Bilder, die in unterschiedlichen Größen genau dargestellt werden müssen.
- [WebP (Web Picture format)](/de/docs/Web/Media/Formats/Image_types#webp_image) — Hervorragende Wahl für sowohl Bilder als auch animierte Bilder.

Formate wie [WebP](/de/docs/Web/Media/Formats/Image_types#webp_image) und [AVIF](/de/docs/Web/Media/Formats/Image_types#avif_image) werden empfohlen, da sie viel besser als PNG, JPEG, GIF sowohl für Standbilder als auch für animierte Bilder funktionieren.

SVG bleibt das empfohlene Format für Bilder, die in unterschiedlichen Größen genau dargestellt werden müssen.

## Bildladefehler

Wenn beim Laden oder Rendern eines Bildes ein Fehler auftritt und ein `onerror`-Ereignishandler für das [`error`](/de/docs/Web/API/HTMLElement/error_event)-Ereignis gesetzt wurde, wird dieser Ereignishandler aufgerufen. Dies kann in mehreren Situationen passieren, unter anderem:

- Das `src`-Attribut ist leer (`""`) oder `null`.
- Die `src`- [URL](/de/docs/Glossary/URL) ist identisch mit der URL der Seite, auf der sich der Benutzer gerade befindet.
- Das Bild ist in irgendeiner Weise beschädigt, was verhindert, dass es geladen wird.
- Die Metadaten des Bildes sind so beschädigt, dass es unmöglich ist, seine Abmessungen abzurufen, und keine Abmessungen im `<img>`-Element-Attribut angegeben wurden.
- Das Bild ist in einem Format, das von dem [Benutzeragenten](/de/docs/Glossary/user_agent) nicht unterstützt wird.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- [`alt`](/de/docs/Web/API/HTMLImageElement/alt#usage_notes)

  - : Definiert den Text, der das Bild auf der Seite ersetzen kann.

    > [!NOTE]
    > Browser zeigen nicht immer Bilder an. Es gibt eine Reihe von Situationen, in denen ein Browser keine Bilder anzeigt, wie z.B.:
    >
    > - Nicht-visuelle Browser (wie die von Personen mit Sehbehinderungen genutzt)
    > - Der Benutzer wählt, Bilder nicht anzuzeigen (um Bandbreite zu sparen, aus Datenschutzgründen)
    > - Das Bild ist ungültig oder ein [nicht unterstützter Typ](#unterstützte_bildformate)
    >
    > In diesen Fällen kann der Browser das Bild durch den Text im `alt`-Attribut des Elements ersetzen. Aus diesen und anderen Gründen sollten Sie immer, wenn möglich, einen nützlichen Wert für `alt` bereitstellen.

    Wenn dieses Attribut auf einen leeren String (`alt=""`) gesetzt wird, zeigt es an, dass dieses Bild _kein_ wesentlicher Teil des Inhalts ist (es ist Dekoration oder ein Tracking-Pixel) und dass nicht-visuelle Browser es von der [Darstellung](/de/docs/Glossary/Engine/Rendering) weglassen dürfen. Visuelle Browser werden auch das Symbol für ein defektes Bild ausblenden, wenn das `alt`-Attribut leer ist und das Bild nicht angezeigt werden konnte.

    Dieses Attribut wird auch verwendet, wenn das Bild in Text kopiert oder ein verlinktes Bild zu einem Lesezeichen hinzugefügt wird.

- `attributionsrc` {{experimental_inline}}

  - : Gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header mit der Bildanfrage sendet.

    Serverseitig wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Headers in der Antwort auszulösen, um eine bildbasierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#html-based_event_sources) oder einen [Attributionstrigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#html-based_attribution_triggers) zu registrieren. Welcher Antwortheader zurückgesendet werden sollte, hängt vom Wert des `Attribution-Reporting-Eligible`-Headers ab, der die Registrierung ausgelöst hat.

    Das entsprechende Quell- oder Triggerereignis wird ausgelöst, sobald der Browser die Antwort mit der Bilddatei erhält.

    > [!NOTE]
    > Weitere Informationen finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

    Es gibt zwei Versionen dieses Attributs, die Sie einstellen können:

    - Boolean, d.h. nur der Name `attributionsrc`. Dies gibt an, dass Sie den {{httpheader("Attribution-Reporting-Eligible")}}-Header an denselben Server senden möchten, auf den das `src`-Attribut verweist. Das ist in Ordnung, wenn Sie die Registrierung der Attributionsquelle oder des Triggers auf demselben Server vornehmen. Beim Registrieren eines Attributionstriggers ist diese Eigenschaft optional, und ein boolescher Wert wird verwendet, wenn sie weggelassen wird.
    - Wert, der eine oder mehrere URLs enthält, zum Beispiel:

    ```html
    <img
      src="image-file.png"
      alt="My image file description"
      attributionsrc="https://a.example/register-source
                         https://b.example/register-source" />
    ```

    Dies ist nützlich in Fällen, in denen die angeforderte Ressource nicht auf einem Server unter Ihrer Kontrolle liegt, oder wenn Sie die Registrierung der Attributionsquelle auf einem anderen Server durchführen möchten. In diesem Fall können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcenanforderung erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header zusätzlich zum Ursprung der Ressource an die in `attributionSrc` angegebenen URL(s) gesendet. Diese URLs können dann mit einem entsprechenden {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header antworten, um die Registrierung abzuschließen.

    > [!NOTE]
    > Die Angabe mehrerer URLs bedeutet, dass mehrere Attributionsquellen für dasselbe Merkmal registriert werden können. Sie könnten zum Beispiel verschiedene Kampagnen haben, deren Erfolg Sie messen möchten, was das Generieren verschiedener Berichte über unterschiedliche Daten beinhaltet.

- [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)

  - : Gibt an, ob das Abrufen des Bildes unter Verwendung einer [CORS](/de/docs/Glossary/CORS)-Anfrage erfolgen muss. Bilddaten aus einem [CORS-aktivierten Bild](/de/docs/Web/HTML/CORS_enabled_image), das aus einer CORS-Anfrage zurückgegeben wird, können im {{HTMLElement("canvas")}}-Element wiederverwendet werden, ohne als "[verunreinigt](/de/docs/Web/HTML/CORS_enabled_image#security_and_tainted_canvases)" markiert zu werden.

    Wenn das Attribut `crossorigin` _nicht_ angegeben ist, wird eine Nicht-CORS-Anfrage gesendet (ohne den {{httpheader("Origin")}}-Header), und der Browser markiert das Bild als verunreinigt und beschränkt den Zugriff auf seine Bilddaten, wodurch seine Verwendung in {{HTMLElement("canvas")}}-Elementen verhindert wird.

    Wenn das Attribut `crossorigin` _angegeben_ ist, wird eine CORS-Anfrage gesendet (mit dem {{httpheader("Origin")}}-Header); aber wenn der Server nicht vorgibt, den Zugriff auf die Bilddaten durch die Ursprungsseite zu erlauben (indem er keinen {{httpheader("Access-Control-Allow-Origin")}}-Antwortheader sendet oder die Ursprungsseite nicht in einen gesendeten {{httpheader("Access-Control-Allow-Origin")}}-Antwortheader einbezieht), blockiert der Browser das Laden des Bildes und protokolliert einen CORS-Fehler in der Entwicklertools-Konsole.

    Zulässige Werte:

    - `anonymous`
      - : Eine CORS-Anfrage wird gesendet, bei der Anmeldeinformationen ausgelassen werden (d.h. keine [Cookies](/de/docs/Glossary/cookie), [X.509-Zertifikate](https://datatracker.ietf.org/doc/html/rfc5280) oder {{httpheader("Authorization")}}-Header).
    - `use-credentials`
      - : Die CORS-Anfrage wird mit enthaltenen Anmeldeinformationen gesendet (d.h. Cookies, X.509-Zertifikate und der `Authorization`-Header). Wenn der Server nicht vorgibt, Anmeldeinformationen mit der Ursprungsseite zu teilen (indem er den `Access-Control-Allow-Credentials: true`-Header zurücksendet), markiert der Browser das Bild als verunreinigt und beschränkt den Zugriff auf seine Bilddaten.

    Wenn das Attribut einen ungültigen Wert hat, wird es von Browsern so behandelt, als ob der Wert `anonymous` verwendet wurde. Siehe [CORS-Einstellungsattribute](/de/docs/Web/HTML/Attributes/crossorigin) für zusätzliche Informationen.

- `decoding`

  - : Dieses Attribut bietet dem Browser einen Hinweis darauf, ob die Bild-Dekodierung zusammen mit dem Rendern des restlichen DOM-Inhalts in einem einzigen Präsentationsschritt erfolgen sollte, der „korrekter“ aussieht (`sync`), oder ob der restliche DOM-Inhalt zuerst gerendert und präsentiert werden soll und das Bild dann dekodiert und später präsentiert wird (`async`). In der Praxis bedeutet `async`, dass der nächste Paint nicht auf die Bild-Dekodierung wartet.

    Es ist oft schwierig, einen wahrnehmbaren Effekt bei der Verwendung von `decoding` auf statischen `<img>`-Elementen zu erkennen. Sie werden wahrscheinlich zunächst als leere Bilder gerendert, während die Bilddateien abgerufen (entweder aus dem Netzwerk oder aus dem Cache) und dann unabhängig verarbeitet werden. Daher wird die „Synchronisation“ von Inhaltsaktualisierungen weniger deutlich. Die Blockierung des Renderings während der Dekodierung, die oft sehr klein ist, _kann_ jedoch gemessen werden — selbst wenn es mit dem menschlichen Auge schwer zu beobachten ist. Siehe [Was macht das Image-Dekodierungs-Attribut eigentlich?](https://www.tunetheweb.com/blog/what-does-the-image-decoding-attribute-actually-do/) für eine detailliertere Analyse (tunetheweb.com, 2023).

    Die Verwendung unterschiedlicher `decoding`-Typen kann zu wahrnehmbaren Unterschieden führen, wenn `<img>`-Elemente dynamisch über JavaScript in das DOM eingefügt werden — siehe [`HTMLImageElement.decoding`](/de/docs/Web/API/HTMLImageElement/decoding) für weitere Details.

    Zulässige Werte:

    - `sync`
      - : Dekodiert das Bild synchron zusammen mit dem Rendern des restlichen DOM-Inhalts und präsentiert alles zusammen.
    - `async`
      - : Dekodiert das Bild asynchron, nach dem Rendern und Präsentieren des restlichen DOM-Inhalts.
    - `auto`
      - : Keine Präferenz für den Dekodierungsmodus; der Browser entscheidet, was für den Benutzer am besten ist. Dies ist der Standardwert.

- [`elementtiming`](/de/docs/Web/HTML/Attributes/elementtiming)

  - : Markiert das Bild zur Beobachtung durch die [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)-API. Der angegebene Wert wird zum Bezeichner für das beobachtete Bildelement. Siehe auch die Seite zum [`elementtiming`](/de/docs/Web/HTML/Attributes/elementtiming)-Attribut.

- `fetchpriority`

  - : Gibt einen Hinweis auf die relative Priorität, die beim Abrufen des Bildes zu verwenden ist. Zulässige Werte:

    - `high`
      - : Signalisiert einen Abruf mit hoher Priorität im Vergleich zu anderen Bildern.
    - `low`
      - : Signalisiert einen Abruf mit niedriger Priorität im Vergleich zu anderen Bildern.
    - `auto`
      - : Standard: Signalisiert die automatische Bestimmung der Abrufpriorität im Vergleich zu anderen Bildern.

- `height`

  - : Die intrinsische Höhe des Bildes in Pixel. Muss eine ganze Zahl ohne Einheit sein.

    > [!NOTE]
    > Das Hinzufügen von `height` und [`width`](#width) ermöglicht es dem Browser, das [Seitenverhältnis](/de/docs/Glossary/aspect_ratio) des Bildes vor dem Laden zu berechnen. Dieses Seitenverhältnis wird verwendet, um den Platz zu reservieren, der benötigt wird, um das Bild anzuzeigen, und reduziert oder verhindert eine Layoutverschiebung, wenn das Bild heruntergeladen und auf den Bildschirm gemalt wird. Die Reduzierung der Layoutverschiebung ist ein wichtiger Bestandteil einer guten Benutzererfahrung und Web-Performance.

- `ismap`

  - : Dieses boolesche Attribut gibt an, dass das Bild Teil einer [serverseitigen Karte](https://de.wikipedia.org/wiki/Image_map#Server-side) ist. In diesem Fall werden die Koordinaten, auf die der Benutzer auf das Bild geklickt hat, an den Server gesendet.

    > [!NOTE]
    > Dieses Attribut ist nur erlaubt, wenn das `<img>`-Element ein Nachkomme eines {{htmlelement("a")}}-Elements mit einem gültigen [`href`](/de/docs/Web/HTML/Element/a#href)-Attribut ist. Dies bietet Benutzern ohne Zeigegeräte ein alternatives Ziel.

- `loading`

  - : Gibt an, wie der Browser das Bild laden soll:

    - `eager`
      - : Lädt das Bild sofort, unabhängig davon, ob sich das Bild derzeit im sichtbaren Viewport befindet oder nicht (dies ist der Standardwert).
    - `lazy`
      - : Verzögert das Laden des Bildes, bis es eine berechnete Entfernung vom Viewport erreicht, wie vom Browser definiert. Das Ziel besteht darin, die Netz- und Speicherbandbreite zu vermeiden, die benötigt wird, um das Bild zu verarbeiten, bis es mit vernünftiger Wahrscheinlichkeit benötigt wird. Dies verbessert in den meisten typischen Anwendungsfällen die Leistung der Inhalte.

    > [!NOTE]
    > Das Laden wird nur verzögert, wenn JavaScript aktiviert ist. Dies ist eine Anti-Tracking-Maßnahme, da es möglich wäre, die ungefähre Scroll-Position eines Benutzers während einer Sitzung zu verfolgen, indem strategisch Bilder im Markup einer Seite platziert werden, um einem Server mitzuteilen, wie viele Bilder angefordert werden und wann.

    > [!NOTE]
    > Bilder mit `loading` auf `lazy` gesetzt, werden niemals geladen, wenn sie keinen sichtbaren Teil eines Elements schneiden, selbst wenn das Laden sie ändern würde, da nicht geladene Bilder eine `width` und `height` von `0` haben. Das Hinzufügen von `width` und `height` zu lazygeladenen Bildern behebt dieses Problem und ist eine bewährte Praxis, die von der Spezifikation [empfohlen](https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element) wird. Dies trägt auch dazu bei, Layoutverschiebungen zu vermeiden.

- `referrerpolicy`

  - : Ein string, der angibt, welcher Referrer beim Abrufen der Ressource verwendet werden soll:

    - `no-referrer`: Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}}-Header wird nicht an [Ursprünge](/de/docs/Glossary/origin) ohne [TLS](/de/docs/Glossary/TLS) ([HTTPS](/de/docs/Glossary/HTTPS)) gesendet.
    - `origin`: Der gesendete Referrer wird auf den Ursprung der verweisenden Seite beschränkt: sein [Schema](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL), [Host](/de/docs/Glossary/host) und [Port](/de/docs/Glossary/port).
    - `origin-when-cross-origin`: Der an andere Ursprünge gesendete Referrer wird auf das Schema, den Host und den Port beschränkt. Navigationsvorgänge im selben Ursprung enthalten weiterhin den Pfad.
    - `same-origin`: Ein Referrer wird für [gleichartiger Ursprung](/de/docs/Glossary/Same-origin_policy) gesendet, aber abweichende Ursprungsanfragen enthalten keine Referrer-Informationen.
    - `strict-origin`: Sendet den Ursprung des Dokuments nur als Referrer, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), sendet es jedoch nicht an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard): Sendet eine vollständige URL bei gleichartiger Ursprunganfrage, sendet nur den Ursprung, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), und sendet keinen Header an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `unsafe-url`: Der Referrer wird den Ursprung _und_ den Pfad (aber nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder [Benutzername](/de/docs/Web/API/HTMLAnchorElement/username)) enthalten. **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge weitergibt.

- `sizes`

  - : Ein oder mehrere durch Kommas getrennte Strings, die eine Reihe von Quellgrößen angeben. Jede Quellgröße besteht aus:

    1. Einer [Medienbedingung](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#syntax). Diese muss für das letzte Element in der Liste weggelassen werden.
    2. Einem Quellgrößenwert.

    Medienbedingungen beschreiben Eigenschaften des _Viewports_, nicht des _Bildes_. Zum Beispiel schlägt `(max-height: 500px) 1000px` vor, eine Quelle von 1000px Breite zu verwenden, falls der _Viewport_ nicht höher als 500px ist.

    Quellgrößenwerte geben die beabsichtigte Darstellungsgröße des Bildes an. [Benutzeragenten](/de/docs/Glossary/User_agent) verwenden die aktuelle Quellgröße, um eine der durch das `srcset`-Attribut bereitgestellten Quellen zu wählen, wenn diese Quellen mit Breiten-(`w`)-Beschreibungen beschrieben sind. Die ausgewählte Quellgröße beeinflusst die [intrinsische Größe](/de/docs/Glossary/intrinsic_size) des Bildes (die Anzeigengröße des Bildes, wenn keine [CSS](/de/docs/Glossary/CSS)-Stilregeln angewendet werden). Wenn das `srcset`-Attribut fehlt oder keine Werte mit einer Breitenbeschreibung enthält, hat das `sizes`-Attribut keine Wirkung.

- `src`
  - : Die Bild-[URL](/de/docs/Glossary/URL). Obligatorisch für das `<img>`-Element. In [Browsern](/de/docs/Glossary/Browser), die `srcset` unterstützen, wird `src` wie ein Kandidatenbild mit einem Pixeldichte-Beschreiber `1x` behandelt, es sei denn, ein Bild mit diesem Pixeldichte-Beschreiber ist bereits in `srcset` definiert, oder `srcset` enthält `w`-Beschreibungen.
- `srcset`

  - : Ein oder mehrere durch Kommas getrennte Strings, die mögliche Bildquellen für den [Benutzeragenten](/de/docs/Glossary/user_agent) angeben, die verwendet werden sollen. Jeder String besteht aus:

    1. Einer [URL](/de/docs/Glossary/URL) zu einem Bild
    2. Optional gefolgt von einem Leerzeichen und einer der folgenden Optionen:

       - Einem Breiten-Beschreiber (eine positive ganze Zahl direkt gefolgt von `w`). Der Breiten-Beschreiber wird durch die Quellgröße dividiert, die im `sizes`-Attribut angegeben ist, um die effektive Pixeldichte zu berechnen.
       - Einem Pixeldichte-Beschreiber (eine positive Gleitkommazahl direkt gefolgt von `x`).

    Wenn kein Beschreiber spezifiziert ist, wird der Quelle der Standardbeschreiber von `1x` zugewiesen.

    Es ist unzulässig, Breiten-Beschreibungen und Pixeldichte-Beschreibungen im selben `srcset`-Attribut zu mischen. Doppelte Beschreiber (z.B., wenn zwei Quellen im selben `srcset` vorhanden sind, die beide mit `2x` beschrieben sind) sind ebenfalls ungültig.

    Wenn das `srcset`-Attribut Breiten-Beschreibungen verwendet, muss auch das `sizes`-Attribut vorhanden sein, andernfalls wird das `srcset` selbst ignoriert.

    Der Benutzeragent wählt nach eigenem Ermessen eine der verfügbaren Quellen aus. Dies gibt ihnen erhebliche Freiheit, ihre Auswahl basierend auf Dingen wie Benutzervorlieben oder [Bandbreiten](/de/docs/Glossary/bandwidth)-Bedingungen anzupassen. Weitere Informationen finden Sie in unserem [Leitfaden zu responsiven Bildern](/de/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images).

- `width`
  - : Die intrinsische Breite des Bildes in Pixel. Muss eine ganze Zahl ohne Einheit sein.
- `usemap`

  - : Die partielle [URL](/de/docs/Glossary/URL) (beginnend mit `#`) einer [Bildkarte](/de/docs/Web/HTML/Element/map), die dem Element zugeordnet ist.

    > [!NOTE]
    > Sie dürfen dieses Attribut nicht verwenden, wenn das `<img>`-Element innerhalb eines {{htmlelement("a")}}- oder {{HTMLElement("button")}}-Elements ist.

### Veraltete Attribute

- `align` {{deprecated_inline}}

  - : Richten Sie das Bild mit seinem umgebenden Kontext aus. Verwenden Sie die {{cssxref('float')}}- und/oder {{cssxref('vertical-align')}}-[CSS](/de/docs/Glossary/CSS)-Eigenschaften statt dieses Attributs. Zulässige Werte:

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
  - : Die Breite eines Rahmens um das Bild. Verwenden Sie die {{cssxref('border')}}-[CSS](/de/docs/Glossary/CSS)-Eigenschaft stattdessen.
- `hspace` {{deprecated_inline}}
  - : Die Anzahl der Pixel an Leerraum links und rechts vom Bild. Verwenden Sie die {{cssxref('margin')}}-CSS-Eigenschaft stattdessen.
- `longdesc` {{deprecated_inline}}

  - : Ein Link zu einer detaillierteren Beschreibung des Bildes. Mögliche Werte sind eine [URL](/de/docs/Glossary/URL) oder eine Element-[`id`](/de/docs/Web/HTML/Global_attributes#id).

    > [!NOTE]
    > Dieses Attribut wird in der neuesten [W3C](/de/docs/Glossary/W3C)-Version, [HTML 5.2](https://html.spec.whatwg.org/multipage/obsolete.html#element-attrdef-img-longdesc), erwähnt, wurde jedoch aus dem [HTML Living Standard](https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element) der [WHATWG](/de/docs/Glossary/WHATWG) entfernt. Es hat eine ungewisse Zukunft; Autoren sollten eine [WAI](/de/docs/Glossary/WAI)-[ARIA](/de/docs/Glossary/ARIA)-Alternative wie [`aria-describedby`](https://www.w3.org/TR/wai-aria-1.1/#aria-describedby) oder [`aria-details`](https://www.w3.org/TR/wai-aria-1.1/#aria-details) verwenden.

- `name` {{deprecated_inline}}
  - : Ein Name für das Element. Verwenden Sie das [`id`](/de/docs/Web/HTML/Global_attributes#id)-Attribut stattdessen.
- `vspace` {{deprecated_inline}}
  - : Die Anzahl der Pixel an Leerraum oberhalb und unterhalb vom Bild. Verwenden Sie die {{cssxref('margin')}}-CSS-Eigenschaft stattdessen.

## Gestaltung mit CSS

`<img>` ist ein [ersetzenes Element](/de/docs/Web/CSS/Replaced_element); es hat standardmäßig einen {{cssxref("display")}}-Wert von `inline`, aber seine Standardmaße werden durch die intrinsischen Werte des eingebetteten Bildes definiert, als wäre es `inline-block`. Sie können Eigenschaften wie {{cssxref("border")}}/{{cssxref("border-radius")}}, {{cssxref("padding")}}/{{cssxref("margin")}}, {{cssxref("width")}}, {{cssxref("height")}} usw. auf ein Bild anwenden.

`<img>` hat keine Grundlinie, so dass, wenn Bilder in einem Inline-Formatting-Kontext mit {{cssxref("vertical-align", "vertical-align: baseline")}} verwendet werden, der untere Rand des Bildes auf der Textgrundlinie platziert wird.

Sie können die {{cssxref("object-position")}}-Eigenschaft verwenden, um das Bild innerhalb des Elemente-Box zu positionieren, und die {{cssxref("object-fit")}}-Eigenschaft, um die Größenanpassung des Bildes innerhalb der Box zu justieren (z.B., ob das Bild die Box ausfüllen oder anpassen soll, selbst wenn eine Ausschnitt erforderlich ist).

Abhängig von seinem Typ kann ein Bild eine intrinsische Breite und Höhe haben. Für einige Bildtypen sind jedoch intrinsische Abmessungen nicht erforderlich. [SVG](/de/docs/Glossary/SVG)-Bilder, zum Beispiel, haben keine intrinsischen Abmessungen, wenn ihr Stamm-{{SVGElement("svg")}}-Element keine `width` oder `height` eingestellt hat.

## Barrierefreiheit

### Sinnvolle Ersatzbeschreibungen verfassen

Der Wert des `alt`-Attributs sollte einen klaren und prägnanten textuellen Ersatz für den Inhalt des Bildes bieten. Es sollte nicht die Anwesenheit des Bildes selbst oder den Dateinamen des Bildes beschreiben. Wenn das `alt`-Attribut absichtlich weggelassen wird, weil das Bild kein textliches Äquivalent hat, sollten Sie alternative Methoden in Betracht ziehen, um das, was das Bild kommunizieren möchte, darzustellen.

#### Nicht so

```html example-bad
<img alt="image" src="penguin.jpg" />
```

#### So machen

```html example-good
<img alt="A Rockhopper Penguin is standing on a beach." src="penguin.jpg" />
```

Wenn ein `alt`-Attribut nicht auf einem Bild vorhanden ist, können einige Screenreader stattdessen den Dateinamen des Bildes ankündigen. Dies kann eine verwirrende Erfahrung sein, wenn der Dateinamen nicht repräsentativ für den Inhalt des Bildes ist.

- [Ein Alternativtext-Entscheidungsbaum • Bilder • WAI-Web-Accessibility-Tutorials](https://www.w3.org/WAI/tutorials/images/decision-tree/)
- [Alt-Texte: Der Ultimative Leitfaden — Axess Lab](https://axesslab.com/alt-texts/)
- [Wie man großartige Alt-Texte gestaltet: Eine Einführung | Deque](https://www.deque.com/blog/great-alt-text-introduction/)
- [MDN Verständnis von WCAG, Richtlinie 1.1 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Erfolgskriterium 1.1.1 verstehen | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

### SVG als Bild identifizieren

Aufgrund eines [VoiceOver-Bugs](https://webkit.org/b/216364) kündigt VoiceOver SVG-Bilder nicht korrekt als Bilder an. Fügen Sie [`role="img"`](/de/docs/Web/Accessibility/ARIA/Roles/img_role) zu allen `<img>`-Elementen mit SVG-Quelldateien hinzu, um sicherzustellen, dass unterstützende Technologien das SVG als Bildinhalt korrekt ankündigen.

```html
<img src="mdn.svg" alt="MDN" role="img" />
```

### Das title-Attribut

Das [`title`](/de/docs/Web/HTML/Global_attributes#title)-Attribut ist kein akzeptabler Ersatz für das `alt`-Attribut. Vermeiden Sie zudem, den Wert des `alt`-Attributs in einem `title`-Attribut zu duplizieren, das auf demselben Bild deklariert ist. Dies könnte dazu führen, dass einige Screenreader denselben Text zweimal ankündigen, was eine verwirrende Erfahrung erzeugt.

Das `title`-Attribut sollte auch nicht als ergänzende Beschriftungsinformation zur Begleitung der `alt`-Beschreibung eines Bildes verwendet werden. Wenn ein Bild eine Beschriftung benötigt, verwenden Sie die [`figure`](/de/docs/Web/HTML/Element/figure)- und [`figcaption`](/de/docs/Web/HTML/Element/figcaption)-Elemente.

Der Wert des `title`-Attributs wird dem Benutzer in der Regel als Tooltipp präsentiert, der kurz erscheint, nachdem sich der Cursor über dem Bild nicht mehr bewegt. Obwohl dies dem Benutzer zusätzliche Informationen bieten _kann_, sollten Sie nicht davon ausgehen, dass der Benutzer es jemals sehen wird: Der Benutzer könnte nur eine Tastatur oder einen Touchscreen haben. Wenn Sie Informationen haben, die besonders wichtig oder wertvoll für den Benutzer sind, präsentieren Sie sie inline, indem Sie eine der oben genannten Methoden verwenden, statt `title`.

- [Verwendung des HTML-title-Attributs – aktualisiert | The Paciello Group](https://www.tpgi.com/using-the-html-title-attribute-updated/)

## Beispiele

### Alternativtext

Das folgende Beispiel bettet ein Bild in die Seite ein und enthält alternativen Text zur Barrierefreiheit.

```html
<img src="favicon144.png" alt="MDN" />
```

{{ EmbedLiveSample('Alternative_text', '100%', '160') }}

### Bildlink

Dieses Beispiel baut auf dem vorherigen auf und zeigt, wie das Bild in einen Link verwandelt werden kann. Dazu verschachteln Sie das `<img>`-Tag innerhalb eines {{HTMLElement("a")}}-Tags. Der alternative Text sollte die Ressource beschreiben, auf die der Link verweist, als ob Sie stattdessen einen Textlink verwenden würden.

```html
<a href="https://developer.mozilla.org">
  <img src="favicon144.png" alt="Visit the MDN site" />
</a>
```

{{ EmbedLiveSample('Image_link', '100%', '160') }}

### Verwendung des srcset-Attributs

In diesem Beispiel fügen wir ein `srcset`-Attribut mit einem Verweis auf eine hochauflösende Version des Logos hinzu; Diese wird auf Geräten mit hoher Auflösung anstelle des `src`-Bildes geladen. Das im `src`-Attribut angegebene Bild wird als `1x`-Kandidat in [Benutzeragenten](/de/docs/Glossary/User_agent) gezählt, die `srcset` unterstützen.

```html
<img src="favicon72.png" alt="MDN" srcset="favicon144.png 2x" />
```

{{EmbedLiveSample("Using_the_srcset_attribute", "100%", "160")}}

### Verwendung der srcset- und sizes-Attribute

Das `src`-Attribut wird in [Benutzeragenten](/de/docs/Glossary/User_agent), die `srcset` unterstützen, ignoriert, wenn `w`-Beschreibungen enthalten sind. Wenn die Medienbedingung `(max-width: 600px)` zutrifft, wird das 200 Pixel breite Bild geladen (es ist das, das `200px` am nächsten kommt), andernfalls wird das andere Bild geladen.

```html
<img
  src="clock-demo-200px.png"
  alt="The time is 12:45."
  srcset="clock-demo-200px.png 200w, clock-demo-400px.png 400w"
  sizes="(max-width: 600px) 200px, 50vw" />
```

{{EmbedLiveSample("Using_the_srcset_and_sizes_attributes", "100%", 350)}}

> [!NOTE]
> Um die Größenänderung in Aktion zu sehen, {{LiveSampleLink('Using_the_srcset_and_sizes_attributes', 'sehen Sie sich das Beispiel auf einer separaten Seite an')}}, damit Sie tatsächlich den Inhaltsbereich ändern können.

## Sicherheits- und Datenschutzbedenken

Obwohl `<img>`-Elemente unschuldige Verwendungszwecke haben, können sie unerwünschte Folgen für die Sicherheit und den Datenschutz des Benutzers haben. Weitere Informationen und Maßnahmen finden Sie unter [Referer-Header: Datenschutz- und Sicherheitsbedenken](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns).

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flussinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#embedded_content"
          >eingebetteter Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#palpable_content"
          >fühlbarer Inhalt</a
        >. Wenn das Element ein <code>usemap</code>-Attribut hat, gehört es auch zur Kategorie der interaktiven Inhalte.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keiner; es ist ein [void element](/de/docs/Glossary/void_element).</td>
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
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <ul>
          <li>
            mit nicht leerem <code>alt</code>-Attribut oder keinem
            <code>alt</code>-Attribut:
            <code
              ><a href="/de/docs/Web/Accessibility/ARIA/Roles/img_role"
                ><code>img</code></a
              ></code
            >
          </li>
          <li>
            mit leerem <code>alt</code>-Attribut:
            <a href="/de/docs/Web/Accessibility/ARIA/Roles/presentation_role"
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
                    href="/de/docs/Web/Accessibility/ARIA/Roles/button_role"
                    >button</a
                  ></code
                >
              </li>
              <li>
                <code
                  ><a
                    href="/de/docs/Web/Accessibility/ARIA/Roles/checkbox_role"
                    >checkbox</a
                  ></code
                >
              </li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Roles/link_role"><code>link</code></a></li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Roles/menuitem_role"><code>menuitem</code></a></li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role"><code>menuitemcheckbox</code></a></li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role"><code>menuitemradio</code></a></li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Roles/option_role"><code>option</code></a></li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Roles/progressbar_role"><code>progressbar</code></a></li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Roles/scrollbar_role"><code>scrollbar</code></a></li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Roles/separator_role"><code>separator</code></a></li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Roles/slider_role"><code>slider</code></a></li>
              <li>
                <code
                  ><a
                    href="/de/docs/Web/Accessibility/ARIA/Roles/switch_role"
                    >switch</a
                  ></code
                >
              </li>
              <li>
                <code
                  ><a href="/de/docs/Web/Accessibility/ARIA/Roles/tab_role"
                    >tab</a
                  ></code
                >
              </li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Roles/treeitem_role"><code>treeitem</code></a></li>
            </ul>
          </li>
          <li>
            mit leerem <code>alt</code>-Attribut, <a href="/de/docs/Web/Accessibility/ARIA/Roles/none_role"><code>none</code></a>
            oder <a href="/de/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a>
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
- {{cssxref("object-fit")}}, {{cssxref("object-position")}}, {{cssxref("image-orientation")}}, {{cssxref("image-rendering")}}, und {{cssxref("image-resolution")}}: Bildbezogene CSS-Eigenschaften.
- [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) Schnittstelle für dieses Element
- [Bilder in HTML](/de/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML)
- [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Formats/Image_types)
- [Responsive Bilder](/de/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
