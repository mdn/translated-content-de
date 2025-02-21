---
title: "<img>: Das Bild-Einbettungselement"
slug: Web/HTML/Element/img
l10n:
  sourceCommit: 891bc513a3349040a16c4896197d6a3a910ca42b
---

{{HTMLSidebar}}

Das **`<img>`**-Element des [HTML](/de/docs/Web/HTML) eingebettet ein Bild in das Dokument.

{{EmbedInteractiveExample("pages/tabbed/img.html", "tabbed-standard")}}

Das obige Beispiel zeigt die Verwendung des `<img>`-Elements:

- Das `src`-Attribut ist **erforderlich** und enthält den Pfad zum Bild, das Sie einbetten möchten.
- Das `alt`-Attribut hält einen textuellen Ersatz für das Bild, der obligatorisch und **ungemein nützlich** für die Barrierefreiheit ist — Bildschirmlesegeräte lesen den Attributwert ihren Benutzern vor, damit sie wissen, was das Bild bedeutet. Alternativtext wird auch auf der Seite angezeigt, wenn das Bild aus irgendeinem Grund nicht geladen werden kann: zum Beispiel bei Netzwerkfehlern, Inhaltsblockierung oder Link-Verlust.

Es gibt viele andere Attribute, um verschiedene Zwecke zu erzielen:

- Steuerung von [Referrer](/de/docs/Web/HTTP/Headers/Referrer-Policy)/[CORS](/de/docs/Glossar/CORS) für Sicherheit und Datenschutz: siehe [`crossorigin`](#crossorigin) und [`referrerpolicy`](#referrerpolicy).
- Sowohl [`width`](#width) als auch [`height`](#height) verwenden, um die intrinsische Größe des Bildes festzulegen, wodurch es Platz einnimmt, bevor es geladen wird, um Inhalts-Layout-Verschiebungen zu mindern.
- Reaktionsfähige Bildhinweise mit [`sizes`](#sizes) und [`srcset`](#srcset) (siehe auch das {{htmlelement("picture")}}-Element und unser [Reaktionsfähige Bilder](/de/docs/Web/HTML/Responsive_images)-Tutorial).

## Unterstützte Bildformate

Der HTML-Standard gibt nicht an, welche Bildformate unterstützt werden sollen, sodass [User Agents](/de/docs/Glossar/user_agent) möglicherweise unterschiedliche Formate unterstützen.

> [!NOTE]
> Der [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types) bietet umfassende Informationen über Bildformate und deren Unterstützung durch Webbrowser.
> Dieser Abschnitt ist lediglich eine Zusammenfassung!

Die Bilddateiformate, die am häufigsten im Web verwendet werden, sind:

- [APNG (Animated Portable Network Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#apng_animated_portable_network_graphics) — Gute Wahl für verlustfreie Animationssequenzen (GIF ist weniger performant)
- [AVIF (AV1 Image File Format)](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) — Gute Wahl sowohl für Bilder als auch für animierte Bilder aufgrund der hohen Leistung.
- [GIF (Graphics Interchange Format)](/de/docs/Web/Media/Guides/Formats/Image_types#gif_graphics_interchange_format) — Gute Wahl für _einfache_ Bilder und Animationen.
- [JPEG (Joint Photographic Expert Group image)](/de/docs/Web/Media/Guides/Formats/Image_types#jpeg_joint_photographic_experts_group_image) — Gute Wahl für verlustbehaftete Kompression von Standbildern (derzeit das beliebteste).
- [PNG (Portable Network Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#png_portable_network_graphics) — Gute Wahl für verlustfreie Kompression von Standbildern (leicht bessere Qualität als JPEG).
- [SVG (Scalable Vector Graphics)](/de/docs/Web/Media/Guides/Formats/Image_types#svg_scalable_vector_graphics) — Vektorbildformat. Verwenden Sie es für Bilder, die in verschiedenen Größen genau gezeichnet werden müssen.
- [WebP (Web Picture format)](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) — Hervorragende Wahl für sowohl Bilder als auch animierte Bilder

Formate wie [WebP](/de/docs/Web/Media/Guides/Formats/Image_types#webp_image) und [AVIF](/de/docs/Web/Media/Guides/Formats/Image_types#avif_image) werden empfohlen, da sie viel besser abschneiden als PNG, JPEG, GIF für sowohl statische als auch animierte Bilder.

SVG bleibt das empfohlene Format für Bilder, die in verschiedenen Größen genau dargestellt werden müssen.

## Bildladefehler

Wenn ein Fehler beim Laden oder Rendern eines Bildes auftritt und ein `onerror`-Ereignishandler für das [`error`](/de/docs/Web/API/HTMLElement/error_event)-Ereignis gesetzt wurde, wird dieser Ereignishandler aufgerufen. Dies kann in mehreren Situationen passieren, unter anderem:

- Das `src`-Attribut ist leer (`""`) oder `null`.
- Die `src`-[URL](/de/docs/Glossar/URL) ist dieselbe wie die URL der Seite, die der Benutzer gerade betrachtet.
- Das Bild ist in irgendeiner Weise beschädigt, sodass es nicht geladen werden kann.
- Die Metadaten des Bildes sind auf eine solche Weise beschädigt, dass es unmöglich ist, seine Dimensionen abzurufen, und es wurden keine Dimensionen in den Attributen des `<img>`-Elements spezifiziert.
- Das Bild ist in einem Format, das von dem [User Agent](/de/docs/Glossar/user_agent) nicht unterstützt wird.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- [`alt`](/de/docs/Web/API/HTMLImageElement/alt#usage_notes)

  - : Definiert Text, der das Bild auf der Seite ersetzen kann.

    > [!NOTE]
    > Browser zeigen nicht immer Bilder an. Es gibt eine Reihe von Situationen, in denen ein Browser Bilder nicht anzeigt, wie zum Beispiel:
    >
    > - Nicht-visuelle Browser (wie diejenigen, die von Menschen mit Sehbehinderungen verwendet werden)
    > - Der Benutzer entscheidet sich dafür, keine Bilder anzuzeigen (um Bandbreite zu sparen, aus Datenschutzgründen)
    > - Das Bild ist ungültig oder ein [nicht unterstützter Typ](#unterstützte_bildformate).
    >
    > In diesen Fällen kann der Browser das Bild durch den Text im `alt`-Attribut des Elements ersetzen. Aus diesen und anderen Gründen sollten Sie, wann immer möglich, einen nützlichen Wert für `alt` angeben.

    Wenn Sie dieses Attribut auf eine leere Zeichenfolge (`alt=""`) setzen, bedeutet das, dass dieses Bild _kein_ wesentlicher Bestandteil des Inhalts ist (es ist Dekoration oder ein Tracking-Pixel) und dass nicht-visuelle Browser es vom [Rendering](/de/docs/Glossar/Engine/Rendering) ausschließen können. Visuelle Browser werden auch das gebrochene Bildsymbol ausblenden, wenn das `alt`-Attribut leer ist und das Bild nicht angezeigt werden konnte.

    Dieses Attribut wird auch verwendet, wenn das Bild in Text kopiert und eingefügt oder ein verlinktes Bild als Lesezeichen gespeichert wird.

- `attributionsrc` {{experimental_inline}}

  - : Gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}} Header zusammen mit der Bildanfrage sendet.

    Auf der Serverseite wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}} oder {{httpheader("Attribution-Reporting-Register-Trigger")}} Headers in der Antwort auszulösen, um eine bildbasierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#html-based_event_sources) oder einen [Attributionstrigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#html-based_attribution_triggers) zu registrieren. Welcher Antwortheader zurückgesandt werden sollte, hängt von dem Wert des `Attribution-Reporting-Eligible` Headers ab, der die Registrierung ausgelöst hat.

    Das entsprechende Quell- oder Triggerevent wird ausgelöst, sobald der Browser die Antwort einschließlich der Bilddatei erhält.

    > [!NOTE]
    > Siehe die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) für weitere Details.

    Es gibt zwei Varianten dieses Attributs, die Sie festlegen können:

    - Boolesch, d.h. nur der `attributionsrc` Name. Dies spezifiziert, dass Sie möchten, dass der {{httpheader("Attribution-Reporting-Eligible")}} Header zu demselben Server gesendet wird, auf den das `src`-Attribut verweist. Dies ist in Ordnung, wenn Sie die Attributionsquelle oder -triggeregistrierung auf demselben Server handhaben. Wenn ein Attributionstrigger registriert wird, ist diese Eigenschaft optional, und ein boolescher Wert wird verwendet, wenn er weggelassen wird.
    - Wert, der eine oder mehrere URLs enthält, zum Beispiel:

    ```html
    <img
      src="image-file.png"
      alt="My image file description"
      attributionsrc="https://a.example/register-source
                         https://b.example/register-source" />
    ```

    Dies ist nützlich in Fällen, wenn die angeforderte Ressource nicht auf einem Server liegt, den Sie kontrollieren, oder Sie möchten die Registrierung der Attributionsquelle auf einem anderen Server handhaben. In diesem Fall können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcenanfrage erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}} Header zusätzlich zum Ursprungsserver an die im `attributionSrc` angegebenen URL(s) gesendet. Diese URLs können dann mit einem {{httpheader("Attribution-Reporting-Register-Source")}} oder {{httpheader("Attribution-Reporting-Register-Trigger")}} Header angemessen reagieren, um die Registrierung abzuschließen.

    > [!NOTE]
    > Das Angeben mehrerer URLs bedeutet, dass mehrere Attributionsquellen auf demselben Merkmal registriert werden können. Sie könnten beispielsweise verschiedene Kampagnen haben, deren Erfolg Sie messen möchten, indem Sie unterschiedliche Berichte über unterschiedliche Daten generieren.

- [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)

  - : Gibt an, ob das Abrufen des Bildes mithilfe einer [CORS](/de/docs/Glossar/CORS)-Anfrage erfolgen muss. Bilddaten aus einem [CORS-aktivierten Bild](/de/docs/Web/HTML/CORS_enabled_image), das aus einer CORS-Anfrage zurückgegeben wird, können im {{HTMLElement("canvas")}}-Element ohne die Markierung "[tainted](/de/docs/Web/HTML/CORS_enabled_image#security_and_tainted_canvases)" wiederverwendet werden.

    Wenn das `crossorigin`-Attribut _nicht_ angegeben wird, wird eine Nicht-CORS-Anfrage gesendet (ohne den {{httpheader("Origin")}} Anfrageheader), und der Browser markiert das Bild als tainted und schränkt den Zugriff auf seine Bilddaten ein, was seine Verwendung in {{HTMLElement("canvas")}}-Elementen verhindert.

    Wenn das `crossorigin`-Attribut _angegeben_ wird, wird eine CORS-Anfrage gesendet (mit dem {{httpheader("Origin")}} Anfrageheader); wenn der Server jedoch nicht optiert, den plattformübergreifenden Zugriff auf die Bilddaten durch die Ursprungsseite zuzulassen (indem er keinen {{httpheader("Access-Control-Allow-Origin")}} Antwortheader sendet oder die Ursprungsseite nicht in einen Antwortheader einbezieht, den er sendet), blockiert der Browser das Laden des Bildes und protokolliert einen CORS-Fehler in der Entwicklertools-Konsole.

    Zulässige Werte:

    - `anonymous`
      - : Eine CORS-Anfrage wird gesendet, bei der Anmeldeinformationen weggelassen werden (d.h. keine [Cookies](/de/docs/Glossar/cookie), [X.509 Zertifikate](https://datatracker.ietf.org/doc/html/rfc5280) oder {{httpheader("Authorization")}} Anfrageheader).
    - `use-credentials`
      - : Die CORS-Anfrage wird mit allen enthaltenen Anmeldeinformationen gesendet (d.h. Cookies, X.509 Zertifikate und der `Authorization` Anfrageheader). Wenn der Server nicht optiert, Anmeldeinformationen mit der Ursprungsseite zu teilen (durch Senden des `Access-Control-Allow-Credentials: true` Antwortheaders), markiert der Browser das Bild als tainted und schränkt den Zugriff auf seine Bilddaten ein.

    Wenn das Attribut einen ungültigen Wert hat, behandeln es Browser so, als ob der Wert `anonymous` verwendet wurde. Weitere Informationen finden Sie unter [CORS Einstellungen Attribute](/de/docs/Web/HTML/Attributes/crossorigin).

- `decoding`

  - : Dieses Attribut gibt dem Browser einen Hinweis darauf, ob er die Bilddekodierung zusammen mit dem Rendern anderer DOM-Inhalte in einem einzigen Präsentationsschritt durchführen sollte, der "korrekter" aussieht (`sync`), oder zuerst die anderen DOM-Inhalte rendern und dann das Bild dekodieren und später präsentieren sollte (`async`). In der Praxis bedeutet `async`, dass der nächste Anstrich nicht wartet, bis das Bild dekodiert wird.

    Es ist oft schwierig, irgendeinen merklichen Effekt beim Verwenden von `decoding` auf statischen `<img>`-Elementen zu erkennen. Sie werden wahrscheinlich zunächst als leere Bilder gerendert, während die Bilddateien (entweder aus dem Netz oder aus dem Cache) abgerufen und dann unabhängig gehandhabt werden, sodass die "Synchronisation" von Inhaltsaktualisierungen weniger sichtbar ist. Allerdings kann das Blockieren des Renderns während der Dekodierung, auch wenn es oft recht klein ist, _gemessen_ werden — selbst wenn es mit dem menschlichen Auge schwer zu beobachten ist. Siehe [Was macht das Bilddekodierungsattribut tatsächlich?](https://www.tunetheweb.com/blog/what-does-the-image-decoding-attribute-actually-do/) für eine detailliertere Analyse (tunetheweb.com, 2023).

    Verwenden von unterschiedlichen `decoding`-Typen kann zu spürbareren Unterschieden führen, wenn `<img>`-Elemente dynamisch über JavaScript in das DOM eingefügt werden — siehe [`HTMLImageElement.decoding`](/de/docs/Web/API/HTMLImageElement/decoding) für weitere Details.

    Zulässige Werte:

    - `sync`
      - : Das Bild synchron zusammen mit dem Rendern anderer DOM-Inhalte dekodieren und alles zusammen präsentieren.
    - `async`
      - : Das Bild asynchron dekodieren, nach dem Rendern und der Präsentation der anderen DOM-Inhalte.
    - `auto`
      - : Keine Präferenz für den Dekodiermodus; der Browser entscheidet, was für den Benutzer am besten ist. Dies ist der Standardwert.

- [`elementtiming`](/de/docs/Web/HTML/Attributes/elementtiming)

  - : Markiert das Bild zur Beobachtung durch die [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)-API. Der angegebene Wert wird zu einem Bezeichner für das beobachtete Bildelement. Siehe auch die Attributseite [`elementtiming`](/de/docs/Web/HTML/Attributes/elementtiming).

- `fetchpriority`

  - : Bietet einen Hinweis auf die relative Priorität, die beim Abrufen des Bildes verwendet werden soll.

    Zulässige Werte:

    - `high`
      - : Das Bild mit hoher Priorität im Vergleich zu anderen Bildern abrufen.
    - `low`
      - : Das Bild mit niedriger Priorität im Vergleich zu anderen Bildern abrufen.
    - `auto`
      - : Keine Präferenz für die Abrufpriorität setzen.
        Dies ist der Standardwert.
        Er wird verwendet, wenn kein Wert oder ein ungültiger Wert festgelegt ist.

    Weitere Informationen finden Sie unter [`HTMLImageElement.fetchPriority`](/de/docs/Web/API/HTMLImageElement/fetchPriority).

- `height`

  - : Die intrinsische Höhe des Bildes in Pixel. Muss eine ganze Zahl ohne Einheit sein.

    > [!NOTE]
    > Die Angabe von `height` und [`width`](#width) ermöglicht es dem Browser, das [Seitenverhältnis](/de/docs/Glossar/aspect_ratio) des Bildes vor dem Laden zu berechnen. Dieses Seitenverhältnis wird verwendet, um den zum Anzeigen des Bildes benötigten Platz zu reservieren, wodurch oder sogar ein Layout-Versatz vermieden wird, wenn das Bild heruntergeladen und auf den Bildschirm gemalt wird. Das Reduzieren von Layout-Versatz ist ein wichtiger Bestandteil einer guten Benutzererfahrung und Webleistung.

- `ismap`

  - : Dieses boolesche Attribut gibt an, dass das Bild Teil einer [serverseitigen Karte](https://de.wikipedia.org/wiki/Image_map#Server-side) ist. Wenn dies der Fall ist, werden die Koordinaten, an denen der Benutzer auf das Bild geklickt hat, an den Server gesendet.

    > [!NOTE]
    > Dieses Attribut ist nur erlaubt, wenn das `<img>`-Element ein Nachkomme eines {{htmlelement("a")}}-Elements mit einem gültigen [`href`](/de/docs/Web/HTML/Element/a#href)-Attribut ist. Dies gibt Benutzern ohne Zeigegeräte ein alternatives Ziel.

- `loading`

  - : Gibt an, wie der Browser das Bild laden soll:

    - `eager`
      - : Lädt das Bild sofort, unabhängig davon, ob sich das Bild derzeit im sichtbaren Anzeigebereich befindet (dies ist der Standardwert).
    - `lazy`
      - : Verweigert das Laden des Bildes, bis es eine berechnete Entfernung vom Anzeigebereich erreicht hat, wie sie vom Browser definiert wird. Die Absicht besteht darin, das Netz und den Speicherbandbreitenbedarf für die Handhabung des Bildes zu vermeiden, bis es relativ sicher ist, dass es benötigt wird. Dies verbessert in den meisten typischen Anwendungsfällen im Allgemeinen die Leistung des Inhalts.

    > [!NOTE]
    > Das Laden wird nur verzögert, wenn JavaScript aktiviert ist. Dies ist eine Anti-Tracking-Maßnahme, da, wenn ein User-Agent das Lazy Loading unterstützt, wenn Skripting deaktiviert ist, es immer noch möglich wäre, die ungefähre Scroll-Position eines Benutzers während einer Sitzung zu verfolgen, indem man strategisch Bilder im Markup einer Seite platziert, damit ein Server verfolgen kann, wie viele Bilder angefordert werden und wann.

    > [!NOTE]
    > Bilder mit `loading`, das auf `lazy` gesetzt ist, werden niemals geladen, wenn sie nicht mit einem sichtbaren Teil eines Elements überschnitten sind, selbst wenn das Laden sie ändern würde, da nicht geladene Bilder eine `width` und `height` von `0` haben. Die Angabe von `width` und `height` auf Lazy-Loading-Bildern behebt dieses Problem und ist eine bewährte Methode, [die von der Spezifikation empfohlen wird](https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element). Dies hilft auch, Layout-Verschiebungen zu verhindern.

- `referrerpolicy`

  - : Ein String, der angibt, welche Referrer verwendet werden sollen, wenn die Ressource abgerufen wird:

    - `no-referrer`: Der {{HTTPHeader("Referer")}} Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}} Header wird nicht an [Ursprung](/de/docs/Glossar/origin)s ohne [TLS](/de/docs/Glossar/TLS) ([HTTPS](/de/docs/Glossar/HTTPS)) gesendet.
    - `origin`: Der gesendete Referrer wird auf den Ursprung der verweisenden Seite beschränkt: ihr [Schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), [Host](/de/docs/Glossar/host) und [Port](/de/docs/Glossar/port).
    - `origin-when-cross-origin`: Der Referrer, der an andere Ursprünge gesendet wird, wird auf das Schema, den Host und den Port beschränkt. Bei Navigationen auf demselben Ursprung wird weiterhin der Pfad enthalten sein.
    - `same-origin`: Ein Referrer wird für die [gleiche Origin](/de/docs/Glossar/Same-origin_policy) gesendet, aber plattformübergreifende Anfragen enthalten keine Referrer-Informationen.
    - `strict-origin`: Sendet nur den Ursprung des Dokuments als Referrer, wenn das Protokollsicherheitsniveau gleich bleibt (HTTPS→HTTPS), sendet ihn jedoch nicht an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard): Senden Sie eine vollständige URL, wenn Sie eine Anfrage zum selben Ursprung durchführen, senden Sie nur den Ursprung, wenn das Protokollsicherheitsniveau gleich bleibt (HTTPS→HTTPS), und senden Sie keinen Header an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `unsafe-url`: Der Referrer wird den Ursprung _und_ den Pfad (aber nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), das [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder den [Benutzernamen](/de/docs/Web/API/HTMLAnchorElement/username)) enthalten. **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge leakt.

- `sizes`

  - : Eine oder mehrere durch Kommas getrennte Strings, die einen Satz von Quellen-Größen angeben. Jede Quellen-Größe besteht aus:

    1. Eine [Media-Bedingung](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#syntax). Dies muss für den letzten Eintrag in der Liste ausgelassen werden.
    2. Ein Quellen-Größenwert.

    Media-Bedingungen beschreiben Eigenschaften des _Ansichtsfensters_, nicht des _Bildes_. Beispielsweise würde `(max-height: 500px) 1000px` vorschlagen, eine Quelle mit 1000px Breite zu verwenden, wenn das _Anzeigefenster_ nicht höher als 500px ist. Da ein Quellen-Größen-Deskriptor verwendet wird, um die Breite festzulegen, die für das Bild während des Layouts der Seite verwendet werden soll, basiert die Media-Bedingung typischerweise (aber nicht unbedingt) auf den [width](/de/docs/Web/CSS/@media/width) Informationen.

    Quellen-Größenwerte geben die beabsichtigte Darstellungsgröße des Bildes an. [User Agents](/de/docs/Glossar/User_agent) verwenden die aktuelle Quellen-Größe, um eine der von dem `srcset`-Attribut bereitgestellten Quellen auszuwählen, wenn diese Quellen mit Breitenbeschreibungen (`w`) beschrieben werden. Die ausgewählte Quellen-Größe beeinflusst die [intrinsische Größe](/de/docs/Glossar/intrinsic_size) des Bildes (die Anzeigengröße des Bildes, wenn keine [CSS](/de/docs/Glossar/CSS) Formatierung angewendet wird). Wenn das `srcset`-Attribut nicht vorhanden ist oder keine Werte mit einer Breitenbeschreibung enthält, hat das `sizes`-Attribut keine Auswirkungen.

    Ein Quellen-Größenwert kann jede nicht negative [Länge](/de/docs/Web/CSS/length) sein. Es dürfen keine CSS-Funktionen verwendet werden, außer den [Mathematikfunktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions#math_functions). Einheiten werden in derselben Weise interpretiert wie [Media-Abfragen](/de/docs/Web/CSS/CSS_media_queries), wobei alle relativen Längeneinheiten sich relativ zur Dokumentwurzel statt zum `<img>`-Element beziehen, sodass ein `em`-Wert sich relativ zur Stammfontgröße bezieht, anstatt zur Schriftgröße des Bildes. [Prozentwerte](/de/docs/Web/CSS/percentage) sind nicht erlaubt.

    Zusätzlich können Sie den Wert `auto` verwenden, um die gesamte Liste von Größen oder den ersten Eintrag in der Liste zu ersetzen. Es ist nur gültig, wenn es mit `loading="lazy"` kombiniert wird, und löst sich in die [konkrete Größe](/de/docs/Web/CSS/image) des Bildes auf.

- `src`
  - : Die Bild-[URL](/de/docs/Glossar/URL). Pflichtfeld für das `<img>`-Element. In [Browsern](/de/docs/Glossar/Browser), die `srcset` unterstützen, wird `src` wie ein Kandidatenbild mit einem Pixeldichtedeskriptor `1x` behandelt, es sei denn, ein Bild mit diesem Pixeldichtedeskriptor ist bereits in `srcset` definiert, oder `srcset` enthält `w` Deskriptoren.
- `srcset`

  - : Eine oder mehrere durch Kommas getrennte Strings, die mögliche Bildquellen für den [User Agent](/de/docs/Glossar/user_agent) angeben. Jede Zeichenfolge besteht aus:

    1. Einer [URL](/de/docs/Glossar/URL) zu einem Bild
    2. Optionalerweise gefolgt von einem Leerzeichen und einem der folgenden:

       - Einer Breitenbeschreibungen (ein positiver Integer, direkt gefolgt von `w`). Der Breitenbeschreibungen wird durch die Quellen-Größe geteilt, die im `sizes`-Attribut angegeben ist, um die effektive Pixeldichte zu berechnen.
       - Einem Pixeldichtedeskriptor (eine positive Gleitkommazahl, direkt gefolgt von `x`).

    Wenn kein Deskriptor angegeben ist, wird der Quelle der Standarddeskriptor von `1x` zugewiesen.

    Es ist falsch, Breitenbeschreibungen und Pixeldichtedeskriptoren im selben `srcset`-Attribut zu mischen. Doppelte Deskriptoren (zum Beispiel zwei Quellen im selben `srcset`, die beide mit `2x` beschrieben sind) sind ebenfalls ungültig.

    Wenn das `srcset`-Attribut Breitenbeschreibungen verwendet, muss auch das `sizes`-Attribut vorhanden sein, ansonsten wird das `srcset` selbst ignoriert.

    Der User Agent wählt nach eigenem Ermessen eine der verfügbaren Quellen aus. Dies bietet ihnen erheblichen Spielraum, um ihre Auswahl basierend auf Dingen wie Benutzerpräferenzen oder [Bandbreiten](/de/docs/Glossar/bandwidth)-Bedingungen anzupassen. Siehe unser [Reaktionsfähige Bilder](/de/docs/Web/HTML/Responsive_images)-Tutorial für ein Beispiel.

- `width`
  - : Die intrinsische Breite des Bildes in Pixel. Muss eine ganze Zahl ohne Einheit sein.
- `usemap`

  - : Die partielle [URL](/de/docs/Glossar/URL) (beginnend mit `#`) einer [Bildkarte](/de/docs/Web/HTML/Element/map), die mit dem Element verbunden ist.

    > [!NOTE]
    > Sie können dieses Attribut nicht verwenden, wenn das `<img>`-Element in einem {{htmlelement("a")}} oder {{HTMLElement("button")}}-Element enthalten ist.

### Veraltete Attribute

- `align` {{deprecated_inline}}

  - : Richtet das Bild am umgebenden Kontext aus. Verwenden Sie stattdessen die {{cssxref('float')}} und/oder {{cssxref('vertical-align')}} [CSS](/de/docs/Glossar/CSS)-Eigenschaften anstelle dieses Attributs. Zulässige Werte:

    - `top`
      - : Entspricht `vertical-align: top` oder `vertical-align: text-top`
    - `middle`
      - : Entspricht `vertical-align: -moz-middle-with-baseline`
    - `bottom`
      - : Der Standard, entspricht `vertical-align: unset` oder `vertical-align: initial`
    - `left`
      - : Entspricht `float: left`
    - `right`
      - : Entspricht `float: right`

- `border` {{deprecated_inline}}
  - : Die Breite eines Rahmens um das Bild. Verwenden Sie stattdessen die {{cssxref('border')}} [CSS](/de/docs/Glossar/CSS)-Eigenschaft.
- `hspace` {{deprecated_inline}}
  - : Die Anzahl von Pixeln des Weißraums links und rechts vom Bild. Verwenden Sie stattdessen die {{cssxref('margin')}} CSS-Eigenschaft.
- `longdesc` {{deprecated_inline}}

  - : Ein Link zu einer detaillierteren Beschreibung des Bildes. Mögliche Werte sind eine [URL](/de/docs/Glossar/URL) oder eine Element-`id`[](/de/docs/Web/HTML/Global_attributes/id).

    > [!NOTE]
    > Dieses Attribut wird in der neuesten [W3C](/de/docs/Glossar/W3C) Version, [HTML 5.2](https://html.spec.whatwg.org/multipage/obsolete.html#element-attrdef-img-longdesc), erwähnt, wurde jedoch aus dem [WHATWG](/de/docs/Glossar/WHATWG)'s [HTML-Living-Standard](https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element) entfernt. Es hat eine ungewisse Zukunft; Autoren sollten eine [WAI](/de/docs/Glossar/WAI)-[ARIA](/de/docs/Glossar/ARIA) Alternative verwenden, wie [`aria-describedby`](https://www.w3.org/TR/wai-aria-1.1/#aria-describedby) oder [`aria-details`](https://www.w3.org/TR/wai-aria-1.1/#aria-details).

- `name` {{deprecated_inline}}
  - : Ein Name für das Element. Verwenden Sie stattdessen das `id`[](/de/docs/Web/HTML/Global_attributes/id)-Attribut.
- `vspace` {{deprecated_inline}}
  - : Die Anzahl von Pixeln des Weißraums oberhalb und unterhalb des Bildes. Verwenden Sie stattdessen die {{cssxref('margin')}} CSS-Eigenschaft.

## Styling mit CSS

`<img>` ist ein [ersetztes Element](/de/docs/Web/CSS/Replaced_element); es hat standardmäßig einen {{cssxref("display")}}-Wert von `inline`, aber seine Standarddimensionen werden durch die intrinsischen Werte des eingebetteten Bildes definiert, als wäre es `inline-block`. Sie können Eigenschaften wie {{cssxref("border")}}/{{cssxref("border-radius")}}, {{cssxref("padding")}}/{{cssxref("margin")}}, {{cssxref("width")}}, {{cssxref("height")}} usw. auf ein Bild anwenden.

`<img>` hat keine Grundlinie, sodass, wenn Bilder in einem Inline-Formatierungskontext mit {{cssxref("vertical-align", "vertical-align: baseline")}} verwendet werden, der Boden des Bildes auf der Textgrundlinie platziert wird.

Sie können die Eigenschaft {{cssxref("object-position")}} verwenden, um das Bild innerhalb des Box des Elements zu positionieren und die Eigenschaft {{cssxref("object-fit")}}, um die Größe des Bildes innerhalb der Box anzupassen (zum Beispiel, ob das Bild in die Box passen oder diese füllen sollte, auch wenn dafür ein Zuschnitt erforderlich ist).

Abhängig von seinem Typ kann ein Bild eine intrinsische Breite und Höhe haben. Für einige Bildtypen sind jedoch intrinsische Dimensionen nicht notwendig. [SVG](/de/docs/Glossar/SVG)-Bilder zum Beispiel haben keine intrinsischen Dimensionen, wenn ihr Stamm-{{SVGElement("svg")}}-Element keine `width` oder `height` hat, die darauf gesetzt sind.

## Barrierefreiheit

### Bedeutungsvolle alternative Beschreibungen schreiben

Der Wert des `alt`-Attributs sollte eine klare und prägnante Textalternative für den Inhalt des Bildes bieten. Er sollte nicht das Vorhandensein des Bildes selbst oder den Dateinamen des Bildes beschreiben. Wenn das `alt`-Attribut absichtlich weggelassen wurde, weil das Bild keine textuelle Entsprechung hat, ziehen Sie alternative Methoden in Betracht, das zu präsentieren, was das Bild zu kommunizieren versucht.

#### Nicht tun

```html example-bad
<img alt="image" src="penguin.jpg" />
```

#### Tun

```html example-good
<img alt="A Penguin on a beach." src="penguin.jpg" />
```

Ein wichtiger Barrierefreiheitstest besteht darin, den Inhalt des `alt`-Attributs zusammen mit vorangehendem Textinhalt zu lesen, um zu sehen, ob er dieselbe Bedeutung wie das Bild vermittelt. Wenn das Bild zum Beispiel durch den Satz "Auf meinen Reisen habe ich ein süßes kleines Tier gesehen:" vorangegangen wäre, könnte das _Nicht tun_-Beispiel von einem Bildschirmlesegerät als "Auf meinen Reisen habe ich ein süßes kleines Tier gesehen: Bild" gelesen werden, was keinen Sinn ergibt. Das _Tun_-Beispiel könnte als "Auf meinen Reisen habe ich ein süßes kleines Tier gesehen: Ein Pinguin am Strand." gelesen werden, was sinnvoll ist.

Für Bilder, die eine Aktion auslösen sollen, z.B. Bilder, die innerhalb eines {{htmlelement("a")}}- oder {{htmlelement("button")}}-Elements verschachtelt sind, sollten Sie in Erwägung ziehen, die ausgelöste Aktion im `alt`-Attributwert zu beschreiben. Zum Beispiel könnten Sie `alt="nächste Seite"` anstelle von `alt="Pfeil rechts"` schreiben. Sie könnten auch eine optionale zusätzliche Beschreibung innerhalb eines `title`-Attributs hinzufügen; diese kann von Bildschirmlesegeräten vorgelesen werden, wenn der Benutzer es anfordert.

Wenn ein `alt`-Attribut bei einem Bild nicht vorhanden ist, können einige Bildschirmlesegeräte stattdessen den Dateinamen des Bildes anzeigen. Dies kann eine verwirrende Erfahrung sein, wenn der Dateiname nicht repräsentativ für den Inhalt des Bildes ist.

- [Ein Alt-Entscheidungsbaum • Bilder • WAI-Web-Accessibility-Tutorials](https://www.w3.org/WAI/tutorials/images/decision-tree/)
- [Alt-Texte: Der Ultimative Leitfaden — Axess Lab](https://axesslab.com/alt-texts/)
- [Wie man großartige Alt-Texte gestaltet: Eine Einführung | Deque](https://www.deque.com/blog/great-alt-text-introduction/)
- [MDN Verständnis WCAG, Leitlinie 1.1 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Erfolgskriterium 1.1.1 Verstehen | W3C Verstehen WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

### Identifizieren von SVG als Bild

Aufgrund eines [VoiceOver-Bugs](https://webkit.org/b/216364) kündigt VoiceOver SVG-Bilder nicht korrekt als Bilder an. Fügen Sie [`role="img"`](/de/docs/Web/Accessibility/ARIA/Roles/img_role) zu allen `<img>`-Elementen mit SVG-Quelldateien hinzu, um sicherzustellen, dass unterstützende Technologien das SVG korrekt als Bildinhalt ankündigen.

```html
<img src="mdn.svg" alt="MDN" role="img" />
```

### Das title-Attribut

Das [`title`](/de/docs/Web/HTML/Global_attributes/title)-Attribut ist kein akzeptabler Ersatz für das `alt`-Attribut. Vermeiden Sie es zudem, den Wert des `alt`-Attributs in einem `title`-Attribut zu duplizieren, das auf demselben Bild angegeben ist. Dies kann dazu führen, dass einige Bildschirmlesegeräte denselben Text zweimal vorlesen, was eine verwirrende Erfahrung schafft.

Das `title`-Attribut sollte auch nicht als zusätzliche Beschriftungsinformation verwendet werden, um die `alt`-Beschreibung eines Bildes zu begleiten. Wenn ein Bild eine Beschriftung benötigt, verwenden Sie die [`figure`](/de/docs/Web/HTML/Element/figure) und [`figcaption`](/de/docs/Web/HTML/Element/figcaption)-Elemente.

Der Wert des `title`-Attributs wird dem Benutzer normalerweise als Tooltip angezeigt, der kurz nach dem Anhalten des Cursors über dem Bild erscheint. Während dies dem Benutzer zusätzliche Informationen bieten _kann_, sollten Sie nicht davon ausgehen, dass der Benutzer sie jemals sehen wird: der Benutzer könnte nur eine Tastatur oder einen Touchscreen haben. Wenn Sie Informationen haben, die für den Benutzer besonders wichtig oder wertvoll sind, präsentieren Sie sie inline mit einer der oben genannten Methoden anstelle der Verwendung von `title`.

- [Verwendung des HTML-title-Attributs – aktualisiert | The Paciello Group](https://www.tpgi.com/using-the-html-title-attribute-updated/)

## Beispiele

### Alternativer Text

Das folgende Beispiel bettet ein Bild in die Seite ein und enthält alternativen Text für Barrierefreiheit.

```html
<img src="favicon144.png" alt="MDN" />
```

{{ EmbedLiveSample('Alternative_text', '100%', '160') }}

### Bildlink

Dieses Beispiel baut auf dem vorherigen auf und zeigt, wie das Bild in einen Link umgewandelt werden kann. Um dies zu tun, verschachteln Sie das `<img>`-Tag innerhalb des {{HTMLElement("a")}}. Sie sollten den Alternativtext so gestalten, dass er die Ressource beschreibt, auf die der Link verweist, als ob Sie stattdessen einen Textlink verwenden würden.

```html
<a href="https://developer.mozilla.org">
  <img src="favicon144.png" alt="Visit the MDN site" />
</a>
```

{{ EmbedLiveSample('Image_link', '100%', '160') }}

### Verwendung des srcset-Attributs

In diesem Beispiel fügen wir ein `srcset`-Attribut mit einem Verweis auf eine hochauflösende Version des Logos ein; diese wird anstelle des `src`-Bilds auf hochauflösenden Geräten geladen. Das im `src`-Attribut angegebene Bild wird als `1x`-Kandidat in [User Agents](/de/docs/Glossar/User_agent), die `srcset` unterstützen, gezählt.

```html
<img src="favicon72.png" alt="MDN" srcset="favicon144.png 2x" />
```

{{EmbedLiveSample("Using_the_srcset_attribute", "100%", "160")}}

### Verwendung der srcset- und sizes-Attribute

Das `src`-Attribut wird in [User Agents](/de/docs/Glossar/User_agent), die `srcset` unterstützen, ignoriert, wenn `w`-Deskriptoren enthalten sind. Wenn die `(max-width: 600px)` Media-Bedingung zutrifft, wird das 200 Pixel breite Bild geladen (es ist dasjenige, das am nächsten zu `200px` passt), andernfalls wird das andere Bild geladen.

```html
<img
  src="clock-demo-200px.png"
  alt="The time is 12:45."
  srcset="clock-demo-200px.png 200w, clock-demo-400px.png 400w"
  sizes="(max-width: 600px) 200px, 50vw" />
```

{{EmbedLiveSample("Using_the_srcset_and_sizes_attributes", "100%", 350)}}

> [!NOTE]
> Um das Resizing in Aktion zu sehen, {{LiveSampleLink('Using_the_srcset_and_sizes_attributes', 'view the example on a separate page')}}, damit Sie tatsächlich den Inhaltsbereich ändern können.

## Sicherheits- und Datenschutzbedenken

Obwohl `<img>`-Elemente harmlose Verwendungen haben, können sie unerwünschte Folgen für die Sicherheit und den Datenschutz des Benutzers haben. Siehe [Referer-Header: Datenschutz- und Sicherheitsbedenken](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns) für weitere Informationen und Maßnahmen zur Minderung.

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
        >. Wenn das Element ein <code>usemap</code>-Attribut hat, ist es auch Teil der Kategorie interaktiver Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keiner; es ist ein [leeres Element](/de/docs/Glossar/void_element).</td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Muss ein Starttag haben und darf keinen Endtag haben.</td>
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
            mit nicht leerem <code>alt</code>-Attribut oder ohne
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
                    href="/de/docs/Web/Accessibility/ARIA/Roles/button_role"
                    >Button</a
                  ></code
                >
              </li>
              <li>
                <code
                  ><a
                    href="/de/docs/Web/Accessibility/ARIA/Roles/checkbox_role"
                    >Checkbox</a
                  ></code
                >
              </li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Roles/link_role"><code>Link</code></a></li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Roles/menuitem_role"><code>menuitem</code></a></li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role"><code>menuitemcheckbox</code></a></li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role"><code>menuitemradio</code></a></li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Roles/option_role"><code>Option</code></a></li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Roles/progressbar_role"><code>Progressbar</code></a></li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Roles/scrollbar_role"><code>Scrollbar</code></a></li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Roles/separator_role"><code>Separator</code></a></li>
              <li><a href="/de/docs/Web/Accessibility/ARIA/Roles/slider_role"><code>Slider</code></a></li>
              <li>
                <code
                  ><a
                    href="/de/docs/Web/Accessibility/ARIA/Roles/switch_role"
                    >Switch</a
                  ></code
                >
              </li>
              <li>
                <code
                  ><a href="/de/docs/Web/Accessibility/ARIA/Roles/tab_role"
                    >Tab</a
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
            ohne <code>alt</code>-Attribut, ist keine <code>role</code> erlaubt
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
- [Reaktionsfähige Bilder](/de/docs/Web/HTML/Responsive_images)
