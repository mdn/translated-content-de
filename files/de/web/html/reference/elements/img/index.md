---
title: "`<img>` HTML-Bildeinbettungselement"
short-title: <img>
slug: Web/HTML/Reference/Elements/img
l10n:
  sourceCommit: 74a39db9d03ec63426b0740dc0bd3cb85e5461a4
---

Das [HTML](/de/docs/Web/HTML)-Element **`<img>`** bettet ein Bild in das Dokument ein.

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

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `alt`
  - : Definiert Text, der das Bild auf der Seite ersetzen kann.

    > [!NOTE]
    > Browser zeigen Bilder nicht immer an. Es gibt eine Reihe von Situationen, in denen ein Browser möglicherweise keine Bilder anzeigt, beispielsweise:
    >
    > - Nicht-visuelle Browser (wie sie etwa von Menschen mit Sehbeeinträchtigungen verwendet werden)
    > - Der Benutzer entscheidet sich, keine Bilder anzuzeigen (um Bandbreite zu sparen oder aus Datenschutzgründen)
    > - Das Bild ist ungültig oder ein [nicht unterstützter Typ](/de/docs/Web/Media/Guides/Formats/Image_types)
    >
    > In diesen Fällen kann der Browser das Bild durch den Text im `alt`-Attribut des Elements ersetzen. Geben Sie aus diesen und weiteren Gründen nach Möglichkeit einen hilfreichen Wert für `alt` an.

    Wenn Sie dieses Attribut auf eine leere Zeichenfolge setzen (`alt=""`), zeigt dies an, dass dieses Bild _kein_ wesentlicher Teil des Inhalts ist (es ist Dekoration oder ein Tracking-Pixel) und dass nicht-visuelle Browser es beim {{Glossary("Engine/Rendering", "Rendern")}} auslassen können. Visuelle Browser verbergen außerdem das Symbol für ein defektes Bild, wenn das `alt`-Attribut leer ist und das Bild nicht angezeigt werden konnte.

    Dieses Attribut wird außerdem verwendet, wenn das Bild in Text kopiert und eingefügt oder ein verlinktes Bild als Lesezeichen gespeichert wird.

- `attributionsrc` {{deprecated_inline}} {{non-standard_inline}}
  - : Gibt an, dass der Browser zusammen mit der Bildanfrage einen {{httpheader("Attribution-Reporting-Eligible")}}-Header senden soll.

    Serverseitig wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Headers in der Antwort auszulösen, um jeweils eine bildbasierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#html-based_event_sources) oder einen [Attributionstrigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#html-based_attribution_triggers) zu registrieren. Welcher Antwort-Header zurückgesendet werden soll, hängt vom Wert des `Attribution-Reporting-Eligible`-Headers ab, der die Registrierung ausgelöst hat.

    Das zugehörige Quell- oder Triggerereignis wird ausgelöst, sobald der Browser die Antwort mit der Bilddatei empfängt.

    > [!NOTE]
    > Weitere Details finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

    Es gibt zwei Versionen dieses Attributs, die Sie setzen können:
    - Boolean, d.h. nur der Name `attributionsrc`. Dies gibt an, dass der {{httpheader("Attribution-Reporting-Eligible")}}-Header an denselben Server gesendet werden soll, auf den das `src`-Attribut verweist. Dies ist geeignet, wenn Sie die Registrierung der Attributionsquelle oder des Triggers auf demselben Server handhaben. Bei der Registrierung eines Attributionstriggers ist diese Eigenschaft optional; wenn sie ausgelassen wird, wird ein boolescher Wert verwendet.
    - Ein Wert, der eine oder mehrere URLs enthält, zum Beispiel:

    ```html
    <img
      src="image-file.png"
      alt="My image file description"
      attributionsrc="https://a.example/register-source
                         https://b.example/register-source" />
    ```

    Dies ist in Fällen nützlich, in denen sich die angeforderte Ressource nicht auf einem Server befindet, den Sie kontrollieren, oder wenn Sie die Registrierung der Attributionsquelle lediglich auf einem anderen Server handhaben möchten. In diesem Fall können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcenanfrage erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header zusätzlich zum Ressourcenursprung an die in `attributionSrc` angegebenen URL(s) gesendet. Diese URLs können dann je nach Bedarf mit einem {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header antworten, um die Registrierung abzuschließen.

    > [!NOTE]
    > Durch das Angeben mehrerer URLs können mehrere Attributionsquellen für dasselbe Feature registriert werden. Sie könnten beispielsweise verschiedene Kampagnen haben, deren Erfolg Sie messen möchten und die verschiedene Berichte zu unterschiedlichen Daten erzeugen.

- [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)
  - : Gibt an, ob das Abrufen des Bildes mittels einer {{Glossary("CORS", "CORS")}}-Anfrage erfolgen muss. Bilddaten aus einem durch CORS aktivierten Bild, das von einer CORS-Anfrage zurückgegeben wird, können im {{HTMLElement("canvas")}}-Element wiederverwendet werden, ohne als „[tainted](/de/docs/Web/HTML/How_to/CORS_enabled_image#security_and_tainted_canvases)“ markiert zu werden.

    Wenn das `crossorigin`-Attribut _nicht_ angegeben ist, wird eine Nicht-CORS-Anfrage gesendet (ohne den {{httpheader("Origin")}}-Anfrage-Header), und der Browser markiert das Bild als tainted und beschränkt den Zugriff auf dessen Bilddaten. Dadurch wird seine Verwendung in {{HTMLElement("canvas")}}-Elementen verhindert.

    Wenn das `crossorigin`-Attribut angegeben _ist_, wird eine CORS-Anfrage gesendet (mit dem {{httpheader("Origin")}}-Anfrage-Header). Wenn der Server jedoch keinen ursprungsübergreifenden Zugriff auf die Bilddaten durch die Ursprungswebsite zulässt (indem er keinen {{httpheader("Access-Control-Allow-Origin")}}-Antwort-Header sendet oder den Ursprung der Website nicht in einem von ihm gesendeten {{httpheader("Access-Control-Allow-Origin")}}-Antwort-Header einschließt), blockiert der Browser das Laden des Bildes und protokolliert einen CORS-Fehler in der DevTools-Konsole.

    Zulässige Werte:
    - `anonymous`
      - : Eine CORS-Anfrage wird ohne Anmeldedaten gesendet (also ohne {{Glossary("cookie", "Cookies")}}, [X.509-Zertifikate](https://datatracker.ietf.org/doc/html/rfc5280) oder den {{httpheader("Authorization")}}-Anfrage-Header).
    - `use-credentials`
      - : Die CORS-Anfrage wird mit allen Anmeldedaten gesendet (also Cookies, X.509-Zertifikaten und dem `Authorization`-Anfrage-Header). Wenn der Server nicht der Weitergabe von Anmeldedaten an die Ursprungswebsite zustimmt (indem er den Antwort-Header `Access-Control-Allow-Credentials: true` zurücksendet), markiert der Browser das Bild als tainted und beschränkt den Zugriff auf dessen Bilddaten.

    Wenn das Attribut einen ungültigen Wert hat, behandeln Browser es so, als wäre der Wert `anonymous` verwendet worden. Weitere Informationen finden Sie unter [CORS-Einstellungsattribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin).

- `decoding`
  - : Dieses Attribut gibt dem Browser einen Hinweis darauf, ob er die Bilddekodierung zusammen mit dem Rendern der übrigen DOM-Inhalte in einem einzigen Darstellungsschritt durchführen soll, der „korrekter“ aussieht (`sync`), oder ob er zunächst die übrigen DOM-Inhalte rendern und darstellen und danach das Bild dekodieren und später darstellen soll (`async`). In der Praxis bedeutet `async`, dass der nächste Paint nicht auf die Dekodierung des Bildes wartet.

    Bei der Verwendung von `decoding` für statische `<img>`-Elemente ist es oft schwierig, einen auffälligen Effekt wahrzunehmen. Sie werden wahrscheinlich zunächst als leere Bilder gerendert, während die Bilddateien abgerufen werden (entweder aus dem Netzwerk oder aus dem Cache), und dann ohnehin unabhängig verarbeitet, sodass die „Synchronisierung“ von Inhaltsaktualisierungen weniger deutlich ist. Die Blockierung des Renderns während der Dekodierung kann jedoch, obwohl sie oft sehr gering ist, gemessen werden — auch wenn sie mit dem menschlichen Auge schwer zu beobachten ist. Eine ausführlichere Analyse finden Sie unter [What does the image decoding attribute actually do?](https://www.tunetheweb.com/blog/what-does-the-image-decoding-attribute-actually-do/) (tunetheweb.com, 2023).

    Die Verwendung verschiedener `decoding`-Typen kann auffälligere Unterschiede ergeben, wenn `<img>`-Elemente dynamisch per JavaScript in das DOM eingefügt werden — weitere Details finden Sie unter [`HTMLImageElement.decoding`](/de/docs/Web/API/HTMLImageElement/decoding).

    Zulässige Werte:
    - `sync`
      - : Dekodiert das Bild synchron zusammen mit dem Rendern der übrigen DOM-Inhalte und stellt alles gemeinsam dar.
    - `async`
      - : Dekodiert das Bild asynchron, nachdem die übrigen DOM-Inhalte gerendert und dargestellt wurden.
    - `auto`
      - : Keine Präferenz für den Dekodierungsmodus; der Browser entscheidet, was für den Benutzer am besten ist. Dies ist der Standardwert.

- [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming)
  - : Markiert das Bild zur Beobachtung durch die [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)-API. Der angegebene Wert wird zu einem Bezeichner für das beobachtete Bildelement. Siehe auch die Attributseite [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming).

- [`fetchpriority`](/de/docs/Web/HTML/Reference/Attributes/fetchpriority)
  - : Gibt einen Hinweis auf die relative Priorität beim Abrufen des Bildes. Zulässige Werte:
    - `high`
      - : Ruft das Bild mit hoher Priorität gegenüber anderen Bildern ab.
    - `low`
      - : Ruft das Bild mit niedriger Priorität gegenüber anderen Bildern ab.
    - `auto`
      - : Legt keine Präferenz für die Abrufpriorität fest.
        Dies ist der Standardwert.
        Er wird verwendet, wenn kein oder ein ungültiger Wert gesetzt ist.
- `height`
  - : Die intrinsische Höhe des Bildes in Pixeln. Muss eine Ganzzahl ohne Einheit sein.

    > [!NOTE]
    > Durch das Einschließen von `height` und [`width`](#width) kann der Browser das {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Bildes berechnen, bevor das Bild geladen wird. Dieses Seitenverhältnis wird verwendet, um den für die Anzeige des Bildes benötigten Platz zu reservieren und dadurch eine Layoutverschiebung beim Herunterladen und Darstellen des Bildes auf dem Bildschirm zu verringern oder sogar zu verhindern. Das Verringern von Layoutverschiebungen ist ein wesentlicher Bestandteil einer guten Benutzererfahrung und der Web-Performance.

- `ismap`
  - : Dieses boolesche Attribut gibt an, dass das Bild Teil einer [serverseitigen Map](https://en.wikipedia.org/wiki/Image_map#Server-side) ist. Falls dies der Fall ist, werden die Koordinaten, auf die der Benutzer im Bild geklickt hat, an den Server gesendet.

    > [!NOTE]
    > Dieses Attribut ist nur zulässig, wenn das `<img>`-Element ein Nachkomme eines {{htmlelement("a")}}-Elements mit einem gültigen [`href`](/de/docs/Web/HTML/Reference/Elements/a#href)-Attribut ist. Dadurch erhalten Benutzer ohne Zeigegeräte ein Ausweichziel.

- `loading`
  - : Gibt an, wie der Browser das Bild laden soll:
    - `eager`
      - : Lädt das Bild sofort, unabhängig davon, ob sich das Bild aktuell im {{Glossary("visual_viewport", "visuellen Viewport")}} befindet oder nicht (dies ist der Standardwert).
    - `lazy`
      - : Verzögert das Laden des Bildes, bis es eine vom Browser definierte berechnete Entfernung vom Viewport erreicht.

        Lazy Loading vermeidet die Netzwerk- und Speicherbandbreite, die für die Verarbeitung des Bildes erforderlich ist, bis hinreichend sicher ist, dass es benötigt wird. Dies verbessert die Performance in den meisten typischen Anwendungsfällen.

        Während explizite [`width`](#width)- und [`height`](#height)-Attribute für alle Bilder empfohlen werden, um Layoutverschiebungen zu vermeiden, sind sie besonders wichtig für lazy geladene Bilder. Lazy geladene Bilder werden nie geladen, wenn sie keinen sichtbaren Teil eines Elements schneiden, selbst wenn ihr Laden dies ändern würde, da nicht geladene Bilder eine `width` und `height` von `0` haben. Es führt zu einer noch störenderen Benutzererfahrung, wenn der im Viewport sichtbare Inhalt während des Lesens neu angeordnet wird.

        Lazy geladene Bilder im visuellen Viewport sind möglicherweise noch nicht sichtbar, wenn das [`load`](/de/docs/Web/API/Window/load_event)-Ereignis von Window ausgelöst wird. Dies liegt daran, dass das Ereignis auf eager geladenen Bildern basiert — lazy geladene Bilder werden nicht berücksichtigt, auch wenn sie sich beim anfänglichen Laden der Seite innerhalb des visuellen Viewports befinden.

        Das Laden wird nur verzögert, wenn JavaScript aktiviert ist. Dies ist eine Anti-Tracking-Maßnahme, da eine Website andernfalls bei deaktiviertem Scripting weiterhin die ungefähre Scrollposition eines Benutzers während einer Sitzung verfolgen könnte, indem Bilder strategisch im Markup einer Seite platziert werden, sodass ein Server nachverfolgen kann, wie viele Bilder wann angefordert werden.

- `referrerpolicy`
  - : Eine Zeichenfolge, die angibt, welcher Referrer beim Abrufen der Ressource verwendet werden soll:
    - `no-referrer`: Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}}-Header wird nicht an {{Glossary("origin", "Ursprünge")}} ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`: Der gesendete Referrer wird auf den Ursprung der verweisenden Seite beschränkt: ihr [Schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`: Der an andere Ursprünge gesendete Referrer wird auf Schema, Host und Port beschränkt. Navigationen innerhalb desselben Ursprungs enthalten weiterhin den Pfad.
    - `same-origin`: Für {{Glossary("Same-origin_policy", "denselben Ursprung")}} wird ein Referrer gesendet, ursprungsübergreifende Anfragen enthalten jedoch keine Referrer-Informationen.
    - `strict-origin`: Sendet den Ursprung des Dokuments nur dann als Referrer, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), sendet ihn aber nicht an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard): Sendet bei einer Anfrage mit demselben Ursprung eine vollständige URL, nur den Ursprung, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), und keinen Header an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `unsafe-url`: Der Referrer enthält den Ursprung _und_ den Pfad (aber nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder den [Benutzernamen](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge preisgibt.

- `sizes`
  - : Ein oder mehrere durch Kommas getrennte Werte, die Quellgrößen oder das Schlüsselwort `auto` sein können.
    Die Spezifikation verlangt, dass das `sizes`-Attribut nur vorhanden ist, wenn `srcset` Breiten-Deskriptoren verwendet.
    - **Quellgröße**
      - : Eine **Quellgröße** besteht aus:
        1. Einer [Media Condition](/de/docs/Web/CSS/Guides/Media_queries/Using#syntax), die beim letzten Listenelement ausgelassen wird.
        2. Einem Quellgrößenwert.

        Beispielsweise schlägt die folgende Quellgröße vor, eine `1000px` breite Bildquelle zu verwenden, wenn die Breite des _Viewports_ maximal 500px beträgt.

        ```css
        (width <= 500px) 1000px
        ```

        Media Conditions beschreiben Eigenschaften des _{{Glossary("viewport", "Viewports")}}_, nicht des _Bildes_.
        Da ein Quellgrößen-Deskriptor die für das Bild während des Layouts zu verwendende Breite festlegt, basiert die Media Condition typischerweise (aber nicht notwendigerweise) auf {{cssxref("@media/width")}}.

        Quellgrößenwerte geben die beabsichtigte Anzeigegröße des Bildes an.
        {{Glossary("User_agent", "User Agents")}} verwenden die aktuelle Quellgröße, um eine der durch das `srcset`-Attribut bereitgestellten Quellen auszuwählen, wenn diese Quellen durch Breiten-Deskriptoren (`w`) beschrieben werden.
        Der in `sizes` definierte Wert `w` bestimmt die Standard-Layoutbreite des Bildes.
        Ohne {{Glossary("CSS", "CSS")}} rendert der Browser das Bild in dieser Größe, unabhängig von den physischen Pixeldimensionen der heruntergeladenen Datei.

        Ein Quellgrößenwert kann jede nicht negative [Länge](/de/docs/Web/CSS/Reference/Values/length) sein.
        Er darf keine anderen CSS-Funktionen als die [mathematischen Funktionen](/de/docs/Web/CSS/Reference/Values/Functions#math_functions) verwenden.
        Einheiten werden auf dieselbe Weise wie bei [Media Queries](/de/docs/Web/CSS/Guides/Media_queries) interpretiert; das bedeutet, dass sich alle relativen Längeneinheiten auf das Dokument-Stammelement und nicht auf das `<img>`-Element beziehen. Beispielsweise bezieht sich ein `em`-Wert auf die Schriftgröße des Stammelements, nicht auf die Schriftgröße des Bildes. [Prozentwerte](/de/docs/Web/CSS/Reference/Values/percentage) sind nicht zulässig. Wenn das `sizes`-Attribut nicht angegeben wird, hat es den Standardwert `100vw` (die Viewport-Breite).

    - `auto`
      - : Das Schlüsselwort `auto` gibt an, dass der Browser die erwartete Layoutbreite des Elements verwenden soll, um das anzuzeigende Bild auszuwählen.
        Das heißt, er sollte die [konkrete Größe](/de/docs/Web/CSS/Reference/Values/image#concrete_size) des Bildes verwenden, die nach dem Layout berechnet wird, nachdem HTML und CSS angewendet wurden.
        Dies ist nur in Verbindung mit `loading="lazy"` gültig, da erwartet wird, dass die Seite bis zum Laden des Bildes bereits CSS- und andere Layoutinformationen hat.

        Die Verwendung von `auto` erspart Ihnen, Ihre Layout-Media-Conditions zweimal angeben zu müssen: einmal für das Layout und einmal für die Auswahl eines geeigneten abzurufenden und anzuzeigenden Bildes.

        Wenn `auto` nicht aufgelöst werden kann — entweder weil der Browser es nicht unterstützt oder weil das Bild noch keine Layoutgröße hat — greift der Browser auf die _Quellgrößen_ in der Liste zurück, um die Breite zu bestimmen, dann auf die für das Element definierten `width`/`height`-Attribute und schließlich auf die standardmäßige intrinsische Größe für `<img>`-Elemente, die im User-Agent-Stylesheet definiert ist (300px mal 150px).

        Für eine bessere Abwärtskompatibilität mit Browsern, die `auto` nicht unterstützen, können Sie nach `auto` im `sizes`-Attribut Fallback-Größen einschließen.
        Sie sollten außerdem die `width`- und `height`-Attribute des Elements auf die intrinsischen Dimensionen des größten Bildes in Ihrem `srcset` setzen, damit der Browser mithilfe des korrekten Seitenverhältnisses Platz reservieren kann:

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
  - : Die Bild-{{Glossary("URL", "URL")}}. Für ein `<img>`-Element ist mindestens eines von `src` und [`srcset`](#srcset) erforderlich. Wenn [`srcset`](#srcset) angegeben ist, wird `src` auf eine von zwei Arten verwendet:
    - als Fallback für Browser, die `srcset` nicht unterstützen.
    - Wenn `srcset` den „x“-Deskriptor verwendet, entspricht `src` einer Quelle mit dem Dichte-Deskriptor `1x`; das heißt, das durch `src` angegebene Bild wird auf Bildschirmen mit geringer Pixeldichte verwendet (etwa auf typischen 72-DPI- oder 96-DPI-Displays).

- `srcset`
  - : Eine oder mehrere durch Kommas getrennte Zeichenfolgen, die mögliche Bildquellen für den zu verwendenden {{Glossary("user_agent", "User Agent")}} angeben.

    Jede Zeichenfolge besteht aus:
    1. Einer {{Glossary("URL", "URL")}} zu einem Bild
    2. Optional aus Whitespace, gefolgt von einem der folgenden Elemente:
       - Einem Breiten-Deskriptor (einer positiven Ganzzahl, direkt gefolgt von `w`). Er _muss_ mit der intrinsischen Breite des referenzierten Bildes übereinstimmen. Der Breiten-Deskriptor wird durch die im `sizes`-Attribut angegebene Quellgröße geteilt, um die effektive Pixeldichte zu berechnen. Um beispielsweise eine Bildressource bereitzustellen, die verwendet werden soll, wenn der Renderer ein 450 Pixel breites Bild benötigt, verwenden Sie den Breiten-Deskriptor `450w`. Wenn ein `srcset` „w“-Deskriptoren enthält, verwendet der Browser diese Deskriptoren zusammen mit dem `sizes`-Attribut, um eine Ressource auszuwählen.
       - Einem Pixeldichte-Deskriptor (einer positiven Gleitkommazahl, direkt gefolgt von `x`). Er gibt die Bedingung an, unter der die entsprechende Bildressource entsprechend der Pixeldichte des Displays verwendet werden soll. Um beispielsweise eine Bildressource bereitzustellen, die verwendet werden soll, wenn die Pixeldichte doppelt so hoch wie die Standarddichte ist, verwenden Sie den Pixeldichte-Deskriptor `2x` oder `2.0x`.

    Wenn kein Deskriptor angegeben ist, erhält die Quelle den Standard-Deskriptor `1x`. Es ist ungültig, Breiten-Deskriptoren und Pixeldichte-Deskriptoren im selben `srcset`-Attribut zu mischen. Doppelte Deskriptoren (beispielsweise zwei Quellen im selben `srcset`, die beide mit `2x` beschrieben sind) sind ebenfalls ungültig.

    Leerzeichen, außer dem Whitespace zwischen der URL und dem zugehörigen Bedingungs-Deskriptor, werden ignoriert; dies umfasst führende und nachfolgende Leerzeichen sowie Leerzeichen vor oder nach jedem Komma. Wenn eine Bildkandidatenzeichenfolge jedoch keine Deskriptoren und keinen Whitespace nach der URL enthält, muss die folgende Bildkandidatenzeichenfolge, sofern vorhanden, mit einem oder mehreren Leerzeichen beginnen, andernfalls wird das Komma als Teil der URL betrachtet.

    Wenn das `srcset` eines `<img>`-Elements `x`-Deskriptoren verwendet, berücksichtigen Browser auch die URL im `src`-Attribut (falls vorhanden) als Kandidaten und weisen ihr den Standard-Deskriptor `1x` zu. Wenn das `srcset`-Attribut dagegen Breiten-Deskriptoren verwendet, wird `src` nicht berücksichtigt und stattdessen das `sizes`-Attribut verwendet.

    Der User Agent wählt nach eigenem Ermessen eine der verfügbaren Quellen aus. Dadurch hat er erheblichen Spielraum, seine Auswahl anhand von Faktoren wie Benutzereinstellungen oder {{Glossary("bandwidth", "Bandbreiten")}}-Bedingungen anzupassen. Ein Beispiel finden Sie in unserem Tutorial [Responsive images](/de/docs/Web/HTML/Guides/Responsive_images).

- `width`
  - : Die intrinsische Breite des Bildes in Pixeln. Muss eine Ganzzahl ohne Einheit sein.
- `usemap`
  - : Die partielle {{Glossary("URL", "URL")}} (beginnend mit `#`) einer dem Element zugeordneten [Image Map](/de/docs/Web/HTML/Reference/Elements/map).

    > [!NOTE]
    > Sie können dieses Attribut nicht verwenden, wenn sich das `<img>`-Element innerhalb eines {{htmlelement("a")}}- oder {{HTMLElement("button")}}-Elements befindet.

### Veraltete Attribute

- `align` {{deprecated_inline}}
  - : Richtet das Bild an seinem umgebenden Kontext aus. Verwenden Sie anstelle dieses Attributs die {{Glossary("CSS", "CSS")}}-Eigenschaften {{cssxref('float')}} und/oder {{cssxref('vertical-align')}}. Zulässige Werte:
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
  - : Die Breite eines Rahmens um das Bild. Verwenden Sie stattdessen die {{Glossary("CSS", "CSS")}}-Eigenschaft {{cssxref('border')}}.
- `hspace` {{deprecated_inline}}
  - : Die Anzahl von Pixeln Leerraum links und rechts vom Bild. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref('margin')}}.
- `longdesc` {{deprecated_inline}}
  - : Ein Link zu einer ausführlicheren Beschreibung des Bildes. Mögliche Werte sind eine {{Glossary("URL", "URL")}} oder eine Element-`id` [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id).

    > [!NOTE]
    > Dieses Attribut gilt in der [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/obsolete.html#element-attrdef-img-longdesc) als obsolet. Seine Zukunft ist ungewiss; Autoren sollten eine {{Glossary("WAI", "WAI")}}-{{Glossary("ARIA", "ARIA")}}-Alternative wie [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) oder [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) verwenden.

- `name` {{deprecated_inline}}
  - : Ein Name für das Element. Verwenden Sie stattdessen das Attribut [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id).
- `vspace` {{deprecated_inline}}
  - : Die Anzahl von Pixeln Leerraum oberhalb und unterhalb des Bildes. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref('margin')}}.

## Nutzungshinweise

Sie benötigen für jedes `<img>`-Element mindestens zwei Attribute. Meistens sind dies `src` und `alt`.

- Das `src`-Attribut enthält den Pfad zu dem Bild, das Sie einbetten möchten. Es ist nicht zwingend erforderlich, wenn das Attribut [srcset](/de/docs/Web/API/HTMLImageElement/srcset) verfügbar ist. Es muss jedoch mindestens eines der Attribute `src` oder `srcset` angegeben werden.
- Das `alt`-Attribut enthält einen textuellen Ersatz für das Bild, der zwingend erforderlich und für die Barrierefreiheit **außerordentlich nützlich** ist — Screenreader lesen ihren Benutzern den Attributwert vor, damit sie wissen, was das Bild bedeutet. Alternativtext wird auch auf der Seite angezeigt, wenn das Bild aus irgendeinem Grund nicht geladen werden kann, beispielsweise aufgrund von Netzwerkfehlern, Inhaltsblockierung oder Linkverfall.

Es gibt viele weitere Attribute für verschiedene Zwecke:

- [Referrer](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy)-/{{Glossary("CORS", "CORS")}}-Steuerung für Sicherheit und Datenschutz: Siehe [`crossorigin`](#crossorigin) und [`referrerpolicy`](#referrerpolicy).
- Verwenden Sie sowohl [`width`](#width) als auch [`height`](#height), um die intrinsische Größe des Bildes festzulegen. Dadurch kann es Platz einnehmen, bevor es geladen wird, um Verschiebungen im Inhaltslayout abzumildern.
- Hinweise für responsive Bilder mit [`sizes`](#sizes) und [`srcset`](#srcset) (siehe auch das {{htmlelement("picture")}}-Element und unser Tutorial [Responsive images](/de/docs/Web/HTML/Guides/Responsive_images)).

Der [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types) enthält Informationen über die unterstützten Bildformate und allgemeine Empfehlungen dazu, wo sie verwendet werden sollten.

### Fehler beim Laden von Bildern

Wenn beim Laden oder Rendern eines Bildes ein Fehler auftritt und ein `onerror`-Event-Handler für das [`error`](/de/docs/Web/API/HTMLElement/error_event)-Ereignis gesetzt wurde, wird dieser Event-Handler aufgerufen. Dies kann in mehreren Situationen passieren, unter anderem:

- Die Attribute `src` oder `srcset` sind leer (`""`) oder `null`.
- Die `src`-{{Glossary("URL", "URL")}} entspricht der URL der Seite, auf der sich der Benutzer gerade befindet.
- Das Bild ist in irgendeiner Weise beschädigt, sodass es nicht geladen werden kann.
- Die Metadaten des Bildes sind so beschädigt, dass seine Dimensionen nicht abgerufen werden können, und in den Attributen des `<img>`-Elements wurden keine Dimensionen angegeben.
- Das Bild hat ein Format, das vom {{Glossary("user_agent", "User Agent")}} nicht unterstützt wird.

### Styling mit CSS

`<img>` ist ein {{Glossary("replaced_elements", "replaced element")}}; standardmäßig hat es einen {{cssxref("display")}}-Wert von `inline`, seine Standarddimensionen werden jedoch durch die intrinsischen Werte des eingebetteten Bildes definiert, als wäre es `inline-block`. Sie können Eigenschaften wie {{cssxref("border")}}/{{cssxref("border-radius")}}, {{cssxref("padding")}}/{{cssxref("margin")}}, {{cssxref("width")}}, {{cssxref("height")}} usw. für ein Bild festlegen.

`<img>` hat keine Baseline. Wenn Bilder also in einem Inline-Formatierungskontext mit {{cssxref("vertical-align", "vertical-align: baseline")}} verwendet werden, wird die Unterkante des Bildes auf der Text-Baseline platziert.

Sie können die Eigenschaft {{cssxref("object-position")}} verwenden, um das Bild innerhalb der Box des Elements zu positionieren, und die Eigenschaft {{cssxref("object-fit")}}, um die Größe des Bildes innerhalb der Box anzupassen (beispielsweise ob das Bild in die Box passen oder sie ausfüllen soll, auch wenn dafür ein Beschneiden erforderlich ist).

Abhängig von seinem Typ kann ein Bild eine intrinsische Breite und Höhe haben. Für einige Bildtypen sind intrinsische Dimensionen jedoch nicht erforderlich. {{Glossary("SVG", "SVG")}}-Bilder haben beispielsweise keine intrinsischen Dimensionen, wenn ihr Stammelement {{SVGElement("svg")}} kein gesetztes `width` oder `height` aufweist.

## Barrierefreiheit

### Aussagekräftige Alternativbeschreibungen erstellen

Der Wert eines `alt`-Attributs sollte einen klaren und prägnanten Textersatz für den Inhalt des Bildes bereitstellen. Er sollte weder das Vorhandensein des Bildes selbst noch den Dateinamen des Bildes beschreiben. Wenn das `alt`-Attribut absichtlich weggelassen wird, weil das Bild kein textuelles Äquivalent hat, ziehen Sie alternative Methoden in Betracht, um zu vermitteln, was das Bild ausdrücken soll.

#### Nicht

```html example-bad
<img alt="image" src="penguin.jpg" />
```

#### Richtig

```html example-good
<img alt="A Penguin on a beach." src="penguin.jpg" />
```

Ein wichtiger Barrierefreiheitstest besteht darin, den Inhalt des `alt`-Attributs zusammen mit dem vorhergehenden Textinhalt zu lesen, um zu prüfen, ob er dieselbe Bedeutung wie das Bild vermittelt. Wenn dem Bild beispielsweise der Satz „Auf meinen Reisen sah ich ein niedliches kleines Tier:“ vorangeht, könnte das _Nicht_-Beispiel von einem Screenreader als „Auf meinen Reisen sah ich ein niedliches kleines Tier: Bild“ gelesen werden, was keinen Sinn ergibt. Das _Richtig_-Beispiel könnte von einem Screenreader als „Auf meinen Reisen sah ich ein niedliches kleines Tier: Ein Pinguin an einem Strand.“ gelesen werden, was Sinn ergibt.

Bei Bildern, die verwendet werden, um eine Aktion auszulösen, beispielsweise Bilder, die in einem {{htmlelement("a")}}- oder {{htmlelement("button")}}-Element verschachtelt sind, sollten Sie die ausgelöste Aktion im Wert des `alt`-Attributs beschreiben. Beispielsweise könnten Sie `alt="nächste Seite"` statt `alt="Pfeil nach rechts"` schreiben. Sie können auch erwägen, eine optionale weiterführende Beschreibung in einem `title`-Attribut hinzuzufügen; diese kann auf Wunsch des Benutzers von Screenreadern vorgelesen werden.

Wenn ein `alt`-Attribut bei einem Bild nicht vorhanden ist, geben einige Screenreader möglicherweise stattdessen den Dateinamen des Bildes aus. Dies kann verwirrend sein, wenn der Dateiname nicht repräsentativ für den Inhalt des Bildes ist.

- [An alt Decision Tree • Images • WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/images/decision-tree/)
- [Alt-texts: The Ultimate Guide — Axess Lab](https://axesslab.com/alt-texts/)
- [How to Design Great Alt Text: An Introduction | Deque](https://www.deque.com/blog/great-alt-text-introduction/)
- [MDN-Erklärungen zu WCAG, Richtlinie 1.1](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Understanding Success Criterion 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

### SVG als Bild identifizieren

Aufgrund eines [VoiceOver-Fehlers](https://webkit.org/b/216364) gibt VoiceOver SVG-Bilder nicht korrekt als Bilder aus. Fügen Sie allen `<img>`-Elementen mit SVG-Quelldateien [`role="img"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/img_role) hinzu, um sicherzustellen, dass assistive Technologien das SVG korrekt als Bildinhalt ausgeben.

```html
<img src="mdn.svg" alt="MDN" role="img" />
```

### Das title-Attribut

Das Attribut [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title) ist kein akzeptabler Ersatz für das `alt`-Attribut. Vermeiden Sie außerdem, den Wert des `alt`-Attributs in einem für dasselbe Bild deklarierten `title`-Attribut zu duplizieren. Dies kann dazu führen, dass einige Screenreader denselben Text zweimal ausgeben, was eine verwirrende Erfahrung schafft.

Das `title`-Attribut sollte auch nicht als ergänzende Beschriftungsinformation für die `alt`-Beschreibung eines Bildes verwendet werden. Wenn ein Bild eine Beschriftung benötigt, verwenden Sie die Elemente [`figure`](/de/docs/Web/HTML/Reference/Elements/figure) und [`figcaption`](/de/docs/Web/HTML/Reference/Elements/figcaption).

Der Wert des `title`-Attributs wird dem Benutzer in der Regel als Tooltip angezeigt, der kurz erscheint, nachdem sich der Cursor nicht mehr über dem Bild bewegt. Dies _kann_ dem Benutzer zwar zusätzliche Informationen liefern, Sie sollten jedoch nicht davon ausgehen, dass der Benutzer ihn jemals sieht: Der Benutzer verfügt möglicherweise nur über eine Tastatur oder einen Touchscreen. Wenn Sie Informationen haben, die für den Benutzer besonders wichtig oder wertvoll sind, präsentieren Sie sie inline mithilfe einer der oben genannten Methoden, statt `title` zu verwenden.

- [Using the HTML title attribute – updated | Vispero](https://vispero.com/resources/using-the-html-title-attribute-updated/)

## Beispiele

### Alternativtext

Das folgende Beispiel bettet ein Bild in die Seite ein und enthält Alternativtext für die Barrierefreiheit.

```html
<img src="/shared-assets/images/examples/favicon144.png" alt="MDN" />
```

{{ EmbedLiveSample('Alternative_text', '100%', '160') }}

### Bildlink

Dieses Beispiel baut auf dem vorherigen auf und zeigt, wie das Bild in einen Link umgewandelt wird. Verschachteln Sie dazu das `<img>`-Tag innerhalb des {{HTMLElement("a")}}. Der Alternativtext sollte die Ressource beschreiben, auf die der Link verweist, als würden Sie stattdessen einen Textlink verwenden.

```html
<a href="https://developer.mozilla.org">
  <img
    src="/shared-assets/images/examples/favicon144.png"
    alt="Visit the MDN site" />
</a>
```

{{ EmbedLiveSample('Image_link', '100%', '160') }}

### Das srcset-Attribut verwenden

In diesem Beispiel fügen wir ein `srcset`-Attribut mit einem Verweis auf eine hochauflösende Version des Logos ein; diese wird auf hochauflösenden Geräten anstelle des `src`-Bildes geladen. Das im `src`-Attribut referenzierte Bild wird in {{Glossary("User_agent", "User Agents")}}, die `srcset` unterstützen, als `1x`-Kandidat gezählt.

```html
<img
  src="/shared-assets/images/examples/favicon72.png"
  alt="MDN"
  srcset="/shared-assets/images/examples/favicon144.png 2x" />
```

{{EmbedLiveSample("Using_the_srcset_attribute", "100%", "160")}}

### Die Attribute srcset und sizes verwenden

Das `src`-Attribut wird in {{Glossary("User_agent", "User Agents")}}, die `srcset` unterstützen, ignoriert, wenn `w`-Deskriptoren enthalten sind. Wenn die Media Condition `(width <= 600px)` zutrifft, wird das 200 Pixel breite Bild geladen (es entspricht `200px` am ehesten); andernfalls wird das andere Bild geladen.

```html
<img
  src="clock-demo-200px.png"
  alt="The time is 12:45."
  srcset="clock-demo-200px.png 200w, clock-demo-400px.png 400w"
  sizes="(width <= 600px) 200px, 50vw" />
```

{{EmbedLiveSample("Using_the_srcset_and_sizes_attributes", "100%", 350)}}

> [!NOTE]
> Um die Größenanpassung in Aktion zu sehen, {{LiveSampleLink('Using_the_srcset_and_sizes_attributes', 'sehen Sie sich das Beispiel auf einer separaten Seite an')}}, damit Sie den Inhaltsbereich tatsächlich in der Größe ändern können.

## Sicherheits- und Datenschutzbedenken

Obwohl `<img>`-Elemente harmlose Verwendungsmöglichkeiten haben, können sie unerwünschte Folgen für die Sicherheit und Privatsphäre von Benutzern haben. Weitere Informationen und Gegenmaßnahmen finden Sie unter [Referer-Header: Datenschutz- und Sicherheitsbedenken](/de/docs/Web/Privacy/Guides/Referer_header:_privacy_and_security_concerns).

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
          >Phrasing-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#embedded_content"
          >eingebetteter Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#palpable_content"
          >wahrnehmbarer Inhalt</a
        >. Wenn das Element ein <code>usemap</code>-Attribut hat, gehört es auch zur Kategorie der interaktiven Inhalte.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "void element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Auslassung von Tags</th>
      <td>Muss ein Start-Tag haben und darf kein End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Elternelemente</th>
      <td>Jedes Element, das eingebettete Inhalte akzeptiert.</td>
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
            mit leerem <code>alt</code>-Attribut: <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/none_role"><code>none</code></a>
            oder <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a>
          </li>
          <li>
            ohne <code>alt</code>-Attribut ist keine <code>role</code> zulässig
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

- Elemente {{HTMLElement("picture")}}, {{HTMLElement("object")}} und {{HTMLElement("embed")}}
- {{cssxref("object-fit")}}, {{cssxref("object-position")}}, {{cssxref("image-orientation")}}, {{cssxref("image-rendering")}} und {{cssxref("image-resolution")}}: bildbezogene CSS-Eigenschaften.
- Schnittstelle [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) für dieses Element
- [HTML-Bilder](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images)
- [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types)
- [Responsive images](/de/docs/Web/HTML/Guides/Responsive_images)
