---
title: "<img>: Das Bild-Einbettungselement"
slug: Web/HTML/Element/img
l10n:
  sourceCommit: 75326725db2daa924618e58ae31a43345c7a16dc
---

{{HTMLSidebar}}

Das **`<img>`** [HTML](/de/docs/Web/HTML)-Element bettet ein Bild in das Dokument ein.

{{EmbedInteractiveExample("pages/tabbed/img.html", "tabbed-standard")}}

Das obige Beispiel zeigt die Verwendung des `<img>`-Elements:

- Das `src`-Attribut ist **erforderlich** und enthält den Pfad zu dem Bild, das Sie einbetten möchten.
- Das `alt`-Attribut hält einen textuellen Ersatz für das Bild, das obligatorisch und **sehr nützlich** für die Barrierefreiheit ist — Bildschirmlesegeräte lesen den Attributwert vor, sodass ihre Nutzer verstehen, was das Bild bedeutet. Der Alt-Text wird auch auf der Seite angezeigt, wenn das Bild aus irgendeinem Grund nicht geladen werden kann: zum Beispiel bei Netzwerkfehlern, Inhaltsblockierung oder Linkverfall.

Es gibt viele andere Attribute, um verschiedene Zwecke zu erreichen:

- Kontrolle über [Referrer](/de/docs/Web/HTTP/Headers/Referrer-Policy)/{{glossary("CORS")}} für Sicherheit und Datenschutz: siehe [`crossorigin`](#crossorigin) und [`referrerpolicy`](#referrerpolicy).
- Verwenden Sie sowohl [`width`](#width) als auch [`height`](#height), um die intrinsische Größe des Bildes festzulegen, damit es Platz einnimmt, bevor es geladen wird, um Verschiebungen im Inhaltslayout zu vermindern.
- Hinweise für responsive Bilder mit [`sizes`](#sizes) und [`srcset`](#srcset) (siehe auch das {{htmlelement("picture")}}-Element und unser [Responsive images](/de/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)-Tutorial).

## Unterstützte Bildformate

Der HTML-Standard listet nicht auf, welche Bildformate unterstützt werden sollen, daher können {{glossary("user agent","user agents")}} verschiedene Formate unterstützen.

> [!NOTE]
> Der [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Formats/Image_types) bietet umfassende Informationen über Bildformate und deren Unterstützung durch Webbrowser.
> Dieser Abschnitt ist nur eine Zusammenfassung!

Die Bilddateiformate, die am häufigsten im Web verwendet werden, sind:

- [APNG (Animated Portable Network Graphics)](/de/docs/Web/Media/Formats/Image_types#apng_animated_portable_network_graphics) — Gute Wahl für verlustfreie Animationssequenzen (GIF ist weniger leistungsfähig)
- [AVIF (AV1 Image File Format)](/de/docs/Web/Media/Formats/Image_types#avif_image) — Gute Wahl für sowohl Bilder als auch animierte Bilder aufgrund der hohen Leistungsfähigkeit.
- [GIF (Graphics Interchange Format)](/de/docs/Web/Media/Formats/Image_types#gif_graphics_interchange_format) — Gute Wahl für _einfache_ Bilder und Animationen.
- [JPEG (Joint Photographic Expert Group image)](/de/docs/Web/Media/Formats/Image_types#jpeg_joint_photographic_experts_group_image) — Gute Wahl für verlustbehaftete Komprimierung von Standbildern (derzeit am beliebtesten).
- [PNG (Portable Network Graphics)](/de/docs/Web/Media/Formats/Image_types#png_portable_network_graphics) — Gute Wahl für verlustfreie Komprimierung von Standbildern (leicht bessere Qualität als JPEG).
- [SVG (Scalable Vector Graphics)](/de/docs/Web/Media/Formats/Image_types#svg_scalable_vector_graphics) — Vektorbildformat. Verwenden Sie es für Bilder, die in verschiedenen Größen genau gezeichnet werden müssen.
- [WebP (Web Picture format)](/de/docs/Web/Media/Formats/Image_types#webp_image) — Hervorragende Wahl für sowohl Bilder als auch animierte Bilder

Formate wie [WebP](/de/docs/Web/Media/Formats/Image_types#webp_image) und [AVIF](/de/docs/Web/Media/Formats/Image_types#avif_image) werden empfohlen, da sie viel besser abschneiden als PNG, JPEG, GIF für sowohl Stand- als auch animierte Bilder.

SVG bleibt das empfohlene Format für Bilder, die in verschiedenen Größen genau dargestellt werden müssen.

## Bildladefehler

Wenn ein Fehler beim Laden oder Rendern eines Bildes auftritt und ein `onerror`-Ereignishandler für das {{domxref("HTMLElement/error_event", "error")}}-Ereignis gesetzt wurde, wird dieser Ereignishandler aufgerufen. Dies kann in mehreren Situationen passieren, unter anderem:

- Das `src`-Attribut ist leer (`""`) oder `null`.
- Die `src`-{{glossary("URL")}} ist dieselbe wie die URL der Seite, auf der der Benutzer gerade ist.
- Das Bild ist in irgendeiner Weise beschädigt, was verhindert, dass es geladen wird.
- Die Metadaten des Bildes sind so beschädigt, dass es unmöglich ist, seine Abmessungen abzurufen, und es wurden keine Abmessungen in den Attributen des `<img>`-Elements angegeben.
- Das Bild ist in einem Format, das vom {{Glossary("user agent")}} nicht unterstützt wird.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- [`alt`](/de/docs/Web/API/HTMLImageElement/alt#usage_notes)

  - : Definiert Text, der das Bild auf der Seite ersetzen kann.

    > [!NOTE]
    > Browser zeigen nicht immer Bilder an. Es gibt eine Reihe von Situationen, in denen ein Browser möglicherweise keine Bilder anzeigt, wie zum Beispiel:
    >
    > - Nicht-visuelle Browser (wie von Menschen mit Sehbehinderungen verwendet)
    > - Der Benutzer entscheidet sich dafür, Bilder nicht anzuzeigen (Bandbreite sparen, Datenschutzgründe)
    > - Das Bild ist ungültig oder ein [nicht unterstützter Typ](#unterstützte_bildformate)
    >
    > In diesen Fällen kann der Browser das Bild durch den Text im `alt`-Attribut des Elements ersetzen. Aus diesen und anderen Gründen sollten Sie immer, wenn möglich, einen nützlichen Wert für `alt` bereitstellen.

    Das Setzen dieses Attributs auf einen leeren String (`alt=""`) zeigt an, dass dieses Bild _kein_ wesentlicher Bestandteil des Inhalts ist (es ist Dekoration oder ein Tracking-Pixel) und dass nicht-visuelle Browser es aus der {{glossary("Engine/Rendering", "Darstellung")}} auslassen können. Visuelle Browser verbergen auch das kaputte Bildsymbol, wenn das `alt`-Attribut leer ist und das Bild nicht angezeigt wird.

    Dieses Attribut wird auch verwendet, wenn das Bild in Text kopiert und eingefügt oder ein verlinktes Bild als Lesezeichen gespeichert wird.

- `attributionsrc` {{experimental_inline}}

  - : Gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header zusammen mit der Bildanforderung sendet.

    Serverseitig wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Headers in der Antwort auszulösen, um eine bildbasierte [Zuweisungsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#html-based_event_sources) oder einen [Zuweisungsauslöser](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#html-based_attribution_triggers) zu registrieren. Welcher Antwort-Header zurückgesendet werden soll, hängt vom Wert des `Attribution-Reporting-Eligible`-Headers ab, der die Registrierung ausgelöst hat.

    Die entsprechende Quell- oder Auslösereignis wird ausgelöst, sobald der Browser die Antwort mit der Bilddatei erhält.

    > [!NOTE]
    > Weitere Details finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

    Es gibt zwei Versionen dieses Attributs, die Sie festlegen können:

    - Boolean, d.h. nur den `attributionsrc`-Namen. Dies gibt an, dass Sie den {{httpheader("Attribution-Reporting-Eligible")}}-Header an denselben Server senden möchten, auf den das `src`-Attribut verweist. Dies ist in Ordnung, wenn Sie die Registrierung der Zuweisungsquelle oder des Auslösers auf demselben Server behandeln. Bei der Registrierung eines Zuweisungsauslösers ist diese Eigenschaft optional, und ein boolescher Wert wird verwendet, wenn sie weggelassen wird.
    - Wert, der eine oder mehrere URLs enthält, zum Beispiel:

    ```html
    <img
      src="image-file.png"
      alt="My image file description"
      attributionsrc="https://a.example/register-source
                         https://b.example/register-source" />
    ```

    Dies ist nützlich in Fällen, in denen die angeforderte Ressource nicht auf einem von Ihnen kontrollierten Server ist oder Sie die Registrierung der Zuweisungsquelle auf einem anderen Server behandeln möchten. In diesem Fall können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcenanforderung erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header an die in `attributionSrc` angegebenen URL(s) zusätzlich zum Ressourcenursprung gesendet. Diese URLs können dann entsprechend mit einem {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header antworten, um die Registrierung abzuschließen.

    > [!NOTE]
    > Mehrere URLs zu spezifizieren bedeutet, dass mehrere Zuweisungsquellen für dieselbe Funktion registriert werden können. Sie könnten beispielsweise verschiedene Kampagnen haben, deren Erfolg Sie messen möchten, indem Sie verschiedene Berichte zu verschiedenen Daten generieren.

- [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)

  - : Gibt an, ob das Abrufen des Bildes unter Verwendung einer {{glossary("CORS")}}-Anfrage durchgeführt werden muss. Bilddaten von einem [CORS-fähigen Bild](/de/docs/Web/HTML/CORS_enabled_image), die aus einer CORS-Anfrage zurückgegeben werden, können im {{HTMLElement("canvas")}}-Element wiederverwendet werden, ohne als "[untypisch](/de/docs/Web/HTML/CORS_enabled_image#security_and_tainted_canvases)" markiert zu werden.

    Wenn das `crossorigin`-Attribut _nicht_ angegeben wird, wird eine nicht-CORS-Anfrage gesendet (ohne den {{httpheader("Origin")}}-Request-Header), und der Browser markiert das Bild als untypisch und beschränkt den Zugriff auf seine Bilddaten, wodurch seine Verwendung in {{HTMLElement("canvas")}}-Elementen verhindert wird.

    Wenn das `crossorigin`-Attribut _angegeben_ wird, wird eine CORS-Anfrage gesendet (mit dem {{httpheader("Origin")}}-Request-Header). Wenn der Server jedoch nicht in Bezug auf den Zugriff über die Namensgrenze auf die Bilddaten durch die Ursprungsseite zugelassen wird (durch das Fehlen eines {{httpheader("Access-Control-Allow-Origin")}}-Antwort-Headers oder das Fehlen der Ursprungsseite in einem {{httpheader("Access-Control-Allow-Origin")}}-Antwort-Header, den er sendet), blockiert der Browser das Laden des Bildes und protokolliert einen CORS-Fehler in der DevTools-Konsole.

    Erlaubte Werte:

    - `anonymous`
      - : Eine CORS-Anfrage wird gesendet, bei der Anmeldeinformationen weggelassen werden (d.h. keine {{glossary("cookie", "cookies")}}, [X.509-Zertifikate](https://datatracker.ietf.org/doc/html/rfc5280) oder {{httpheader("Authorization")}}-Request-Header).
    - `use-credentials`
      - : Die CORS-Anfrage wird unter Einschluss aller Anmeldeinformationen gesendet (d.h. Cookies, X.509-Zertifikate und der `Authorization`-Request-Header). Wenn der Server nicht einverstanden ist, Anmeldeinformationen mit der Ursprungsseite zu teilen (indem er den `Access-Control-Allow-Credentials: true`-Antwort-Header nicht zurücksendet), markiert der Browser das Bild als untypisch und beschränkt den Zugriff auf seine Bilddaten.

    Wenn das Attribut einen ungültigen Wert hat, behandeln Browser dies so, als ob der Wert `anonymous` verwendet wurde. Weitere Informationen finden Sie unter [CORS-Einstellungen Attribute](/de/docs/Web/HTML/Attributes/crossorigin).

- `decoding`

  - : Dieses Attribut kann dem Browser als Hinweis dienen, ob das Bilddekodieren zusammen mit dem Rendern der anderen DOM-Inhalte in einem einzigen Darstellungsschritt durchgeführt werden soll, der "korrekter" aussieht (`sync`), oder ob es die anderen DOM-Inhalte zuerst rendern und vorstellen soll und dann das Bild dekodieren und später vorstellen soll (`async`). In der Praxis bedeutet `async`, dass der nächste Malvorgang nicht auf das Bilddekodieren wartet.

    Es ist oft schwierig, einen merklichen Effekt bei der Verwendung von `decoding` auf statischen `<img>`-Elementen wahrzunehmen. Sie werden wahrscheinlich zunächst als leere Bilder gerendert, während die Bilddateien (entweder aus dem Netzwerk oder aus dem Cache) abgerufen und dann unabhängig behandelt werden, sodass die "Synchronisierung" von Inhaltsaktualisierungen weniger offensichtlich ist. Das Blockieren des Renderings bei gleichzeitigem Dekodieren, obwohl oft sehr klein, _kann_ jedoch gemessen werden – selbst wenn es schwierig zu beobachten ist. Weitere Details und Analysen finden Sie unter [Was macht das Bilddekodierungsattribut tatsächlich?](https://www.tunetheweb.com/blog/what-does-the-image-decoding-attribute-actually-do/) (tunetheweb.com, 2023).

    Die Verwendung verschiedener `decoding`-Typen kann spürbare Unterschiede bewirken, wenn `<img>`-Elemente dynamisch über JavaScript in den DOM eingefügt werden – sehen Sie dazu {{domxref("HTMLImageElement.decoding")}} für mehr Details.

    Erlaubte Werte:

    - `sync`
      - : Das Bild zusammen mit den anderen DOM-Inhalten synchron dekodieren und alles zusammen präsentieren.
    - `async`
      - : Das Bild asynchron dekodieren, nach dem Rendern und Präsentieren der anderen DOM-Inhalte.
    - `auto`
      - : Keine Präferenz für den Dekodiermodus; der Browser entscheidet, was am besten für den Benutzer ist. Dies ist der Standardwert.

- [`elementtiming`](/de/docs/Web/HTML/Attributes/elementtiming)

  - : Markiert das Bild zur Beobachtung durch die {{domxref("PerformanceElementTiming")}}-API. Der angegebene Wert wird zu einem Bezeichner für das beobachtete Bildelement. Siehe auch die Seite [`elementtiming`](/de/docs/Web/HTML/Attributes/elementtiming).

- `fetchpriority`

  - : Gibt einen Hinweis auf die relative Priorität beim Abrufen des Bildes. Erlaubte Werte:

    - `high`
      - : Signalisiert ein Abrufen mit hoher Priorität im Verhältnis zu anderen Bildern.
    - `low`
      - : Signalisiert ein Abrufen mit niedriger Priorität im Verhältnis zu anderen Bildern.
    - `auto`
      - : Standard: Signalisiert die automatische Bestimmung der Abrufpriorität im Verhältnis zu anderen Bildern.

- `height`

  - : Die intrinsische Höhe des Bildes in Pixeln. Muss eine ganze Zahl ohne Einheit sein.

    > [!NOTE]
    > Die Angabe von `height` und [`width`](#width) ermöglicht es dem Browser, das {{glossary("aspect ratio")}} des Bildes vor dem Laden zu berechnen. Dieses Seitenverhältnis wird verwendet, um den benötigten Platz für die Darstellung des Bildes zu reservieren und somit Layout-Verschiebungen zu reduzieren oder sogar zu verhindern, wenn das Bild heruntergeladen und auf den Bildschirm gemalt wird. Das Reduzieren von Layout-Verschiebungen ist ein wichtiger Bestandteil einer guten Benutzererfahrung und Web-Performance.

- `ismap`

  - : Dieses boolesche Attribut zeigt an, dass das Bild Teil einer [serverseitigen Karte](https://en.wikipedia.org/wiki/Image_map#Server-side) ist. In diesem Fall werden die Koordinaten, an denen der Benutzer auf das Bild geklickt hat, an den Server gesendet.

    > [!NOTE]
    > Dieses Attribut ist nur zulässig, wenn das `<img>`-Element ein Nachfahre eines {{htmlelement("a")}}-Elements mit einem gültigen [`href`](/de/docs/Web/HTML/Element/a#href)-Attribut ist. Dies gibt Nutzern ohne Mauszeiger eine Fallback-Zieladresse.

- `loading`

  - : Gibt an, wie der Browser das Bild laden soll:

    - `eager`
      - : Lädt das Bild sofort, unabhängig davon, ob das Bild aktuell innerhalb des sichtbaren Ansichtsbereichs ist oder nicht (dies ist der Standardwert).
    - `lazy`
      - : Verzögert das Laden des Bildes, bis es eine berechnete Entfernung vom Ansichtsfenster erreicht hat, wie vom Browser definiert. Die Absicht ist, das Netzwerk und die Speicherbandbreite zu vermeiden, die benötigt wird, um das Bild zu handhaben, bis es vernünftigerweise sicher ist, dass es benötigt wird. Dies verbessert in den meisten typischen Anwendungsfällen die Leistung der Inhalte.

    > [!NOTE]
    > Das Laden wird nur verzögert, wenn JavaScript aktiviert ist. Dies ist eine Anti-Tracking-Maßnahme, denn wenn ein Benutzeragent Lazy Loading unterstützt, wenn das Scripting deaktiviert ist, wäre es trotzdem möglich, die ungefähre Scroll-Position eines Benutzers während einer Sitzung zu verfolgen, indem Bilder strategisch in das Markup einer Seite eingelegt werden, sodass ein Server nachverfolgen kann, wie viele Bilder angefordert wurden und wann.

    > [!NOTE]
    > Bilder mit `loading` eingestellt auf `lazy` werden niemals geladen, wenn sie keinen sichtbaren Teil eines Elements schneiden, selbst wenn das Laden diese Änderung herbeiführen würde, da ungeladene Bilder eine `width` und `height` von `0` haben. Die Angabe von `width` und `height` bei Lazy Loading-Bildern behebt dieses Problem und wird als bewährte Praxis empfohlen, vom [empfohlenen Standard](https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element). Dies hilft auch, Layout-Verschiebungen zu verhindern.

- `referrerpolicy`

  - : Ein String, der angibt, welchen Referrer verwendet werden soll, um die Ressource abzurufen:

    - `no-referrer`: Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}}-Header wird nicht an {{Glossary("origin")}}s ohne {{Glossary("TLS")}} ({{Glossary("HTTPS")}}) gesendet.
    - `origin`: Der gesendete Referrer wird auf die Ursprungsseite der verweisenden Seite beschränkt: ihr [Schema](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL), {{Glossary("host")}} und {{Glossary("port")}}.
    - `origin-when-cross-origin`: Der an andere Ursprünge gesendete Referrer wird auf das Schema, den Host und den Port beschränkt. Navigationen im gleichen Ursprung enthalten weiterhin den Pfad.
    - `same-origin`: Ein Referrer wird für {{Glossary("Same-origin policy", "den gleichen Ursprung")}} gesendet, aber Anfragen über Ursprünge hinweg enthalten keine Referrer-Informationen.
    - `strict-origin`: Nur das Ursprungsdokument als Referrer senden, wenn das Protokollsicherheitslevel gleich bleibt (HTTPS→HTTPS), aber nicht an ein weniger sicheres Ziel senden (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard): Eine vollständige URL senden, wenn eine Anfrage im gleichen Ursprung durchgeführt wird, nur den Ursprung senden, wenn das Protokollsicherheitslevel gleich bleibt (HTTPS→HTTPS), und keinen Header an eine weniger sichere Zielseite senden (HTTPS→HTTP).
    - `unsafe-url`: Der Referrer wird den Ursprung _und_ den Pfad enthalten (jedoch nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder [Benutzername](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge weiterleitet.

- `sizes`

  - : Eine oder mehrere mit Kommas getrennte Zeichenfolgen, die einen Satz von Quellgrößen angeben. Jede Quellgröße besteht aus:

    1. Einer [Medienbedingung](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#syntax). Diese muss beim letzten Punkt in der Liste weggelassen werden.
    2. Einem Quellgrößenwert.

    Medienbedingungen beschreiben Eigenschaften des _Ansichtsfensters_, nicht des _Bildes_. Zum Beispiel schlägt `(max-height: 500px) 1000px` vor, eine Quelle von 1000px Breite zu verwenden, wenn das _Ansichtsfenster_ nicht höher als 500px ist.

    Quellgrößenwerte geben die beabsichtigte Anzeigengröße des Bildes an. {{glossary("User agent", "User agents")}} verwenden die aktuelle Quellgröße, um eine der Quellen auszuwählen, die durch das Attribut `srcset` angegeben sind, wenn diese Quellen unter Verwendung von Breiten-(`w`)-Deskriptoren beschrieben werden. Die ausgewählte Quellgröße beeinflusst die {{glossary("intrinsische Größe")}} des Bildes (die Anzeigengröße des Bildes, wenn keine {{glossary("CSS")}}-Stil angewendet wird). Wenn das `srcset`-Attribut fehlt oder keine Werte mit einem Breiten-Deskriptor enthält, hat das `sizes`-Attribut keine Auswirkungen.

- `src`
  - : Die Bild-{{glossary("URL")}}. Obligatorisch für das `<img>`-Element. In {{glossary("Browser", "Browsern")}}, die `srcset` unterstützen, wird `src` wie ein Kandidat mit einem Pixeldichte-Deskriptor `1x` behandelt, es sei denn, ein Bild mit diesem Pixeldichte-Deskriptor ist bereits in `srcset` definiert, oder `srcset` enthält `w`-Deskriptoren.
- `srcset`

  - : Eine oder mehrere mit Kommas getrennte Zeichenfolgen, die mögliche Bildquellen angeben, die der {{glossary("user agent")}} verwenden kann. Jede Zeichenfolge setzt sich zusammen aus:

    1. Einer {{glossary("URL")}} zu einem Bild
    2. Optional, einem Leerzeichen gefolgt von einem von:

       - Einem Breiten-Deskriptor (eine positive ganze Zahl direkt gefolgt von `w`). Der Breiten-Deskriptor wird durch die Quellgröße des `sizes`-Attributs geteilt, um die effektive Pixeldichte zu berechnen.
       - Einem Pixeldichte-Deskriptor (eine positive Gleitkommazahl direkt gefolgt von `x`).

    Wenn kein Deskriptor angegeben ist, wird der Quelle der Standard-Deskriptor von `1x` zugewiesen.

    Es ist unzulässig, Breiten-Deskriptoren und Pixeldichte-Deskriptoren im selben `srcset`-Attribut zu mischen. Doppelte Deskriptoren (z.B. zwei Quellen im selben `srcset`, die beide mit `2x` beschrieben werden) sind ebenfalls ungültig.

    Wenn das `srcset`-Attribut Breiten-Deskriptoren verwendet, muss auch das `sizes`-Attribut vorhanden sein, andernfalls wird das `srcset` selbst ignoriert.

    Der Benutzeragent wählt nach eigenem Ermessen eine der verfügbaren Quellen aus. Dies gibt ihnen erheblichen Spielraum, ihre Auswahl basierend auf Dingen wie Benutzerpräferenzen oder {{glossary("bandwidth")}}-Bedingungen zu anzupassen. Siehe unser [Responsive images](/de/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)-Tutorial für ein Beispiel.

- `width`
  - : Die intrinsische Breite des Bildes in Pixeln. Muss eine ganze Zahl ohne Einheit sein.
- `usemap`

  - : Der partielle {{glossary("URL")}} (beginnend mit `#`) einer [Bildkarte](/de/docs/Web/HTML/Element/map) im Zusammenhang mit dem Element.

    > [!NOTE]
    > Sie können dieses Attribut nicht verwenden, wenn das `<img>`-Element innerhalb eines {{htmlelement("a")}}- oder {{HTMLElement("button")}}-Elements ist.

### Veraltete Attribute

- `align` {{deprecated_inline}}

  - : Richtet das Bild mit seinem umgebenden Kontext aus. Verwenden Sie die {{cssxref('float')}}- und/oder {{cssxref('vertical-align')}}-{{glossary("CSS")}}-Eigenschaften anstelle dieses Attributs. Erlaubte Werte:

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
  - : Die Breite eines Rahmens um das Bild. Verwenden Sie dafür die {{cssxref('border')}}-{{glossary("CSS")}}-Eigenschaft.
- `hspace` {{deprecated_inline}}
  - : Die Anzahl der Pixel für den weißen Raum links und rechts vom Bild. Verwenden Sie dafür die {{cssxref('margin')}}-CSS-Eigenschaft.
- `longdesc` {{deprecated_inline}}

  - : Ein Link zu einer ausführlicheren Beschreibung des Bildes. Mögliche Werte sind eine {{glossary("URL")}} oder eine Elemente-[`id`](/de/docs/Web/HTML/Global_attributes#id).

    > [!NOTE]
    > Dieses Attribut wird in der neuesten {{glossary("W3C")}}-Version, [HTML 5.2](https://html.spec.whatwg.org/multipage/obsolete.html#element-attrdef-img-longdesc), erwähnt, ist aber aus dem {{glossary("WHATWG")}} [HTML Living Standard](https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element) entfernt worden. Seine Zukunft ist unsicher; Autoren sollten eine {{glossary("WAI")}}-{{glossary("ARIA")}}-Alternative wie [`aria-describedby`](https://www.w3.org/TR/wai-aria-1.1/#aria-describedby) oder [`aria-details`](https://www.w3.org/TR/wai-aria-1.1/#aria-details) verwenden.

- `name` {{deprecated_inline}}
  - : Ein Name für das Element. Verwenden Sie das Attribut [`id`](/de/docs/Web/HTML/Global_attributes#id) stattdessen.
- `vspace` {{deprecated_inline}}
  - : Die Anzahl der Pixel für den weißen Raum über und unter dem Bild. Verwenden Sie dafür die {{cssxref('margin')}}-CSS-Eigenschaft.

## Styling mit CSS

`<img>` ist ein [ersetztes Element](/de/docs/Web/CSS/Replaced_element); es hat einen {{cssxref("display")}}-Wert von `inline` standardmäßig, aber seine Standardabmessungen werden durch die eingebetteten intrinsischen Werte des Bildes definiert, als wäre es `inline-block`. Sie können Eigenschaften wie {{cssxref("border")}}/{{cssxref("border-radius")}}, {{cssxref("padding")}}/{{cssxref("margin")}}, {{cssxref("width")}}, {{cssxref("height")}} usw. auf einem Bild festlegen.

`<img>` hat keine Basislinie, daher wird bei der Verwendung von Bildern in einem Inline-Formatierungskontext mit {{cssxref("vertical-align", "vertical-align: baseline")}} der Boden des Bildes auf der Textbasislinie platziert.

Sie können die {{cssxref("object-position")}}-Eigenschaft verwenden, um das Bild innerhalb des Elements zu positionieren, und die {{cssxref("object-fit")}}-Eigenschaft, um die Größe des Bildes innerhalb des Elements anzupassen (zum Beispiel, ob das Bild das Kästchen ausfüllen soll oder es füllen soll, selbst wenn es abgeschnitten werden muss).

Je nach Typ kann ein Bild eine intrinsische Breite und Höhe haben. Für einige Bildtypen sind jedoch keine intrinsischen Abmessungen nötig. {{glossary("SVG")}}-Bilder haben beispielsweise keine intrinsischen Abmessungen, wenn ihr Wurzel-{{SVGElement("svg")}}-Element keine `width` oder `height` darauf gesetzt hat.

## Barrierefreiheit

### Aussagekräftige alternative Beschreibungen erstellen

Der Wert des `alt`-Attributs sollte einen klaren und prägnanten Ersatztext für den Inhalt des Bildes bereitstellen. Er sollte nicht das Vorhandensein des Bildes selbst oder den Dateinamen des Bildes beschreiben. Wenn das `alt`-Attribut absichtlich weggelassen wird, weil das Bild keinen textuellen Äquivalent hat, sollten Sie alternative Methoden in Betracht ziehen, um das, was das Bild zu kommunizieren versucht, darzustellen.

#### Nicht so

```html example-bad
<img alt="image" src="penguin.jpg" />
```

#### So machen Sie es besser

```html example-good
<img alt="Ein Felsenpinguin steht am Strand." src="penguin.jpg" />
```

Wenn ein `alt`-Attribut bei einem Bild fehlt, können einige Bildschirmlesegeräte stattdessen den Dateinamen des Bildes ankündigen. Dies kann eine verwirrende Erfahrung sein, wenn der Dateiname nicht repräsentativ für den Inhalt des Bildes ist.

- [Ein Alt-Entscheidungsbaum • Bilder • WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/images/decision-tree/)
- [Alt-texte: Der ultimative Leitfaden — Axess Lab](https://axesslab.com/alt-texts/)
- [Wie man großartige Alt-Texte gestaltet: Eine Einführung | Deque](https://www.deque.com/blog/great-alt-text-introduction/)
- [MDN Understanding WCAG, Guideline 1.1 explanations](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verstehen des Erfolgskriteriums 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

### SVG als Bild identifizieren

Aufgrund eines [VoiceOver-Bugs](https://webkit.org/b/216364) kündigt VoiceOver SVG-Bilder nicht korrekt als Bilder an. Fügen Sie allen `<img>`-Elementen mit SVG-Quelldateien [`role="img"`](/de/docs/Web/Accessibility/ARIA/Roles/img_role) hinzu, um sicherzustellen, dass unterstützende Technologien das SVG korrekt als Bildinhalt ankündigen.

```html
<img src="mdn.svg" alt="MDN" role="img" />
```

### Das title-Attribut

Das [`title`](/de/docs/Web/HTML/Global_attributes#title)-Attribut ist kein akzeptabler Ersatz für das `alt`-Attribut. Außerdem vermeiden Sie es, den Wert des `alt`-Attributs in einem `title`-Attribut auf dem gleichen Bild zu duplizieren. Auf diese Weise können einige Bildschirmlesegeräte den gleichen Text zweimal ankündigen, was eine verwirrende Erfahrung schafft.

Das `title`-Attribut sollte auch nicht als ergänzende Beschriftungsinformation zur Begleitung einer `alt`-Beschreibung des Bildes verwendet werden. Wenn ein Bild eine Beschriftung benötigt, verwenden Sie die Elemente [`figure`](/de/docs/Web/HTML/Element/figure) und [`figcaption`](/de/docs/Web/HTML/Element/figcaption).

Der Wert des `title`-Attributs wird in der Regel dem Benutzer als Tooltip präsentiert, der kurz nach dem Stoppen des Mauszeigers über dem Bild erscheint. Während dies _zusätzliche_ Informationen für den Benutzer bieten kann, sollten Sie nicht davon ausgehen, dass der Benutzer dies jemals sieht: Der Benutzer kann sich nur mit der Tastatur oder dem Touchscreen befinden. Wenn Sie Informationen haben, die besonders wichtig oder wertvoll für den Benutzer sind, präsentieren Sie sie inline mit einer der oben genannten Methoden anstelle von `title`.

- [Verwendung des HTML-title Attributs – aktualisiert | The Paciello Group](https://www.tpgi.com/using-the-html-title-attribute-updated/)

## Beispiele

### Alternativer Text

Das folgende Beispiel bettet ein Bild auf der Seite ein und enthält alternativen Text für die Barrierefreiheit.

```html
<img src="favicon144.png" alt="MDN" />
```

{{ EmbedLiveSample('Alternative_text', '100%', '160') }}

### Bildlink

Dieses Beispiel baut auf dem vorherigen auf und zeigt, wie das Bild in einen Link verwandelt werden kann. Dazu sollten Sie das `<img>`-Tag innerhalb des {{HTMLElement("a")}} einbetten. Sie sollten den alternativen Text so beschreiben lassen, dass es die Ressource beschreibt, auf die der Link verweist, als würden Sie stattdessen einen Textlink verwenden.

```html
<a href="https://developer.mozilla.org">
  <img src="favicon144.png" alt="Besuchen Sie die MDN-Seite" />
</a>
```

{{ EmbedLiveSample('Image_link', '100%', '160') }}

### Verwendung des srcset-Attributs

In diesem Beispiel schließen wir ein `srcset`-Attribut mit einem Verweis auf eine hochauflösende Version des Logos ein; diese wird anstelle des `src`-Bildes auf hochauflösenden Geräten geladen. Das in das `src`-Attribut verwiesene Bild wird als `1x`-Kandidat in {{glossary("User agent", "user agents")}} gezählt, die `srcset` unterstützen.

```html
<img src="favicon72.png" alt="MDN" srcset="favicon144.png 2x" />
```

{{EmbedLiveSample("Using_the_srcset_attribute", "100%", "160")}}

### Verwendung der Attribute srcset und sizes

Das `src`-Attribut wird in {{glossary("User agent", "user agents")}}, die `srcset` unterstützen, ignoriert, wenn `w`-Deskriptoren enthalten sind. Wenn die Medienbedingung `(max-width: 600px)` erfüllt ist, wird das 200 Pixel breite Bild geladen (es ist dasjenige, das `200px` am nächsten kommt), andernfalls wird das andere Bild geladen.

```html
<img
  src="clock-demo-200px.png"
  alt="Die Zeit ist 12:45 Uhr."
  srcset="clock-demo-200px.png 200w, clock-demo-400px.png 400w"
  sizes="(max-width: 600px) 200px, 50vw" />
```

{{EmbedLiveSample("Using_the_srcset_and_sizes_attributes", "100%", 350)}}

> [!NOTE]
> Um die Größenänderung in Aktion zu sehen, {{LiveSampleLink('Using_the_srcset_and_sizes_attributes', 'sehen Sie sich das Beispiel auf einer separaten Seite an')}}, damit Sie tatsächlich den Inhaltsbereich ändern können.

## Sicherheits- und Datenschutzbedenken

Obwohl `<img>`-Elemente unschuldige Verwendungen haben, können sie unerwünschte Konsequenzen für die Sicherheit und den Datenschutz der Benutzer haben. Für weitere Informationen und Abhilfemaßnahmen siehe [Referer-Header: Datenschutz- und Sicherheitsbedenken](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns).

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
          >Phraseninhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#embedded_content"
          >eingebetteter Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#palpable_content"
          >fühlbarer Inhalt</a
        >. Wenn das Element ein <code>usemap</code>-Attribut hat, ist es auch Teil der interaktiven Inhaltskategorie.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss ein Start-Tag haben und kein End-Tag haben.</td>
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
      <td>{{domxref("HTMLImageElement")}}</td>
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
- {{domxref("HTMLImageElement")}} Schnittstelle für dieses Element
- [Bilder in HTML](/de/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML)
- [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Formats/Image_types)
- [Responsive Bilder](/de/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
