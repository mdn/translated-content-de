---
title: "`<img>`: HTML-Element zum Einbetten von Bildern"
short-title: <img>
slug: Web/HTML/Reference/Elements/img
l10n:
  sourceCommit: 3d24b91c76cb3bd1d7b5c0b06b86cae46002da72
---

Das **`<img>`**-Element von [HTML](/de/docs/Web/HTML) bettet ein Bild in das Dokument ein.

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

Dieses Element unterstützt die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `alt`
  - : Definiert Text, der das Bild auf der Seite ersetzen kann.

    > [!NOTE]
    > Browser zeigen Bilder nicht immer an. Ein Browser zeigt Bilder beispielsweise in folgenden Situationen möglicherweise nicht an:
    >
    > - Nicht visuelle Browser, etwa solche, die von Menschen mit Sehbehinderungen verwendet werden
    > - Die Person entscheidet sich dagegen, Bilder anzuzeigen, etwa um Bandbreite zu sparen oder aus Datenschutzgründen
    > - Das Bild ist ungültig oder hat einen [nicht unterstützten Dateityp](/de/docs/Web/Media/Guides/Formats/Image_types)
    >
    > In diesen Fällen kann der Browser das Bild durch den Text im `alt`-Attribut des Elements ersetzen. Geben Sie deshalb nach Möglichkeit immer einen aussagekräftigen Wert für `alt` an.

    Wenn Sie dieses Attribut auf eine leere Zeichenfolge setzen (`alt=""`), bedeutet dies, dass das Bild _kein_ wesentlicher Teil des Inhalts ist, sondern beispielsweise der Dekoration oder als Tracking-Pixel dient. Nicht visuelle Browser können es dann beim {{Glossary("Engine/Rendering", "Rendern")}} auslassen. Visuelle Browser blenden außerdem das Symbol für ein fehlerhaftes Bild aus, wenn das `alt`-Attribut leer ist und das Bild nicht angezeigt werden konnte.

    Dieses Attribut wird auch verwendet, wenn das Bild als Text kopiert und eingefügt oder ein verlinktes Bild als Lesezeichen gespeichert wird.

- `attributionsrc` {{deprecated_inline}} {{non-standard_inline}}
  - : Gibt an, dass der Browser zusammen mit der Bildanfrage einen {{httpheader("Attribution-Reporting-Eligible")}}-Header senden soll.

    Serverseitig wird dadurch ausgelöst, dass in der Antwort ein {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header gesendet wird, um eine bildbasierte [Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#html-based_event_sources) beziehungsweise einen [Attributionstrigger](/de/docs/Web/API/Attribution_Reporting_API/Registering_triggers#html-based_attribution_triggers) zu registrieren. Welcher Antwort-Header gesendet werden soll, hängt vom Wert des `Attribution-Reporting-Eligible`-Headers ab, der die Registrierung ausgelöst hat.

    Das entsprechende Quellen- oder Triggerereignis wird ausgelöst, sobald der Browser die Antwort mit der Bilddatei erhält.

    > [!NOTE]
    > Weitere Informationen finden Sie unter [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

    Sie können dieses Attribut auf zwei Arten angeben:
    - Als boolesches Attribut, also nur mit dem Namen `attributionsrc`. Damit legen Sie fest, dass der {{httpheader("Attribution-Reporting-Eligible")}}-Header an denselben Server gesendet wird, auf den das `src`-Attribut verweist. Dies eignet sich, wenn Sie die Registrierung der Attributionsquelle oder des Triggers auf demselben Server verarbeiten. Bei der Registrierung eines Attributionstriggers ist diese Eigenschaft optional; wird sie weggelassen, wird ein boolescher Wert verwendet.
    - Mit einem Wert, der eine oder mehrere URLs enthält, zum Beispiel:

    ```html
    <img
      src="image-file.png"
      alt="My image file description"
      attributionsrc="https://a.example/register-source
                         https://b.example/register-source" />
    ```

    Dies ist nützlich, wenn die angeforderte Ressource nicht auf einem von Ihnen kontrollierten Server liegt oder Sie die Registrierung der Attributionsquelle auf einem anderen Server verarbeiten möchten. In diesem Fall können Sie als Wert von `attributionsrc` eine oder mehrere URLs angeben. Bei der Ressourcenanfrage wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header zusätzlich zum Ursprungsserver der Ressource an die in `attributionSrc` angegebenen URLs gesendet. Diese URLs können mit einem {{httpheader("Attribution-Reporting-Register-Source")}}- oder {{httpheader("Attribution-Reporting-Register-Trigger")}}-Header antworten und so die Registrierung abschließen.

    > [!NOTE]
    > Wenn Sie mehrere URLs angeben, können für dieselbe Funktion mehrere Attributionsquellen registriert werden. Beispielsweise könnten Sie den Erfolg verschiedener Kampagnen messen, für die unterschiedliche Berichte über unterschiedliche Daten erstellt werden.

- `controls`
  - : Ein boolesches Attribut, das vom User-Agent definierte Bedienelemente für das Bild aktiviert, beispielsweise eine Schaltfläche zur Vollbildansicht. Ereignisse aus Benutzerinteraktionen mit diesen Bedienelementen werden unterdrückt. Welche Bedienelemente bereitgestellt werden, hängt von der Implementierung ab. Unterstützende User-Agents können beispielsweise integrierte Benutzeroberflächen zur Interaktion mit räumlichen Bildern und Panoramabildern bereitstellen.

- [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)
  - : Gibt an, ob das Bild mit einer {{Glossary("CORS", "CORS")}}-Anfrage abgerufen werden muss. Bilddaten eines [CORS-fähigen Bildes](/de/docs/Web/HTML/How_to/CORS_enabled_image), das über eine CORS-Anfrage zurückgegeben wurde, können im {{HTMLElement("canvas")}}-Element wiederverwendet werden, ohne als „[tainted](/de/docs/Web/HTML/How_to/CORS_enabled_image#security_and_tainted_canvases)“ markiert zu werden.

    Ist das `crossorigin`-Attribut _nicht_ angegeben, wird eine Anfrage ohne CORS gesendet, also ohne den Anfrage-Header {{httpheader("Origin")}}. Der Browser markiert das Bild als „tainted“ und schränkt den Zugriff auf seine Bilddaten ein, sodass es nicht in {{HTMLElement("canvas")}}-Elementen verwendet werden kann.

    Ist das `crossorigin`-Attribut angegeben, wird eine CORS-Anfrage mit dem Anfrage-Header {{httpheader("Origin")}} gesendet. Erlaubt der Server der Ursprungsseite jedoch keinen ursprungsübergreifenden Zugriff auf die Bilddaten – weil er keinen {{httpheader("Access-Control-Allow-Origin")}}-Antwort-Header sendet oder den Ursprung der Seite in einem solchen Header nicht aufführt –, blockiert der Browser das Laden des Bildes und protokolliert einen CORS-Fehler in der Entwicklerkonsole.

    Zulässige Werte:
    - `anonymous`
      - : Eine CORS-Anfrage wird ohne Anmeldedaten gesendet, also ohne {{Glossary("cookie", "Cookies")}}, [X.509-Zertifikate](https://datatracker.ietf.org/doc/html/rfc5280) oder den Anfrage-Header {{httpheader("Authorization")}}.
    - `use-credentials`
      - : Die CORS-Anfrage wird mit allen vorhandenen Anmeldedaten gesendet, also mit Cookies, X.509-Zertifikaten und dem Anfrage-Header `Authorization`. Erlaubt der Server die Weitergabe von Anmeldedaten an die Ursprungsseite nicht durch den Antwort-Header `Access-Control-Allow-Credentials: true`, markiert der Browser das Bild als „tainted“ und schränkt den Zugriff auf seine Bilddaten ein.

    Hat das Attribut einen ungültigen Wert, behandeln Browser es so, als wäre `anonymous` angegeben. Weitere Informationen finden Sie unter [CORS-Einstellungsattribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin).

- `decoding`
  - : Dieses Attribut gibt dem Browser einen Hinweis, ob er das Bild zusammen mit dem Rendern der übrigen DOM-Inhalte in einem einzigen Darstellungsschritt dekodieren soll, sodass die Darstellung „korrekter“ wirkt (`sync`), oder ob er zunächst die übrigen DOM-Inhalte rendern und anzeigen und das Bild erst anschließend dekodieren und anzeigen soll (`async`). In der Praxis bedeutet `async`, dass der nächste Darstellungsschritt nicht auf die Dekodierung des Bildes wartet.

    Bei statischen `<img>`-Elementen ist ein wahrnehmbarer Effekt von `decoding` oft schwer festzustellen. Während die Bilddateien aus dem Netzwerk oder Cache abgerufen werden, erscheinen sie zunächst wahrscheinlich als leere Bilder und werden anschließend ohnehin unabhängig verarbeitet. Dadurch fällt die „Synchronisierung“ der Inhaltsaktualisierungen weniger auf. Die Blockierung des Renderns während der Dekodierung lässt sich jedoch messen, auch wenn sie oft sehr kurz und mit bloßem Auge schwer zu erkennen ist. Eine ausführlichere Analyse finden Sie unter [What does the image decoding attribute actually do?](https://www.tunetheweb.com/blog/what-does-the-image-decoding-attribute-actually-do/) (tunetheweb.com, 2023).

    Unterschiede zwischen den `decoding`-Werten können deutlicher werden, wenn `<img>`-Elemente mit JavaScript dynamisch in das DOM eingefügt werden. Weitere Informationen finden Sie unter [`HTMLImageElement.decoding`](/de/docs/Web/API/HTMLImageElement/decoding).

    Zulässige Werte:
    - `sync`
      - : Das Bild synchron mit dem Rendern der übrigen DOM-Inhalte dekodieren und alles gemeinsam anzeigen.
    - `async`
      - : Das Bild asynchron dekodieren, nachdem die übrigen DOM-Inhalte gerendert und angezeigt wurden.
    - `auto`
      - : Keine bevorzugte Dekodierungsart; der Browser entscheidet, was für die Person am besten ist. Dies ist der Standardwert.

- [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming)
  - : Markiert das Bild zur Beobachtung durch die [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)-API. Der angegebene Wert wird zum Bezeichner des beobachteten Bildelements. Weitere Informationen finden Sie auf der Seite zum Attribut [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming).

- [`fetchpriority`](/de/docs/Web/HTML/Reference/Attributes/fetchpriority)
  - : Gibt einen Hinweis auf die relative Priorität beim Abrufen des Bildes. Zulässige Werte:
    - `high`
      - : Das Bild im Vergleich zu anderen Bildern mit hoher Priorität abrufen.
    - `low`
      - : Das Bild im Vergleich zu anderen Bildern mit niedriger Priorität abrufen.
    - `auto`
      - : Keine bevorzugte Abrufpriorität festlegen.
        Dies ist der Standardwert.
        Er wird verwendet, wenn kein oder ein ungültiger Wert angegeben ist.
- `height`
  - : Die intrinsische Höhe des Bildes in Pixeln. Der Wert muss eine ganze Zahl ohne Einheit sein.

    > [!NOTE]
    > Wenn Sie `height` und [`width`](#width) angeben, kann der Browser das {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Bildes berechnen, bevor es geladen wird. Anhand dieses Seitenverhältnisses reserviert er den Platz, der für die Anzeige des Bildes benötigt wird. Dadurch wird eine Layoutverschiebung beim Herunterladen und Anzeigen des Bildes verringert oder sogar verhindert. Weniger Layoutverschiebungen sind ein wichtiger Bestandteil einer guten Benutzererfahrung und Web-Performance.

- `ismap`
  - : Dieses boolesche Attribut gibt an, dass das Bild Teil einer [serverseitigen Image-Map](https://en.wikipedia.org/wiki/Image_map#Server-side) ist. In diesem Fall werden die Koordinaten, auf die die Person im Bild geklickt hat, an den Server gesendet.

    > [!NOTE]
    > Dieses Attribut ist nur zulässig, wenn das `<img>`-Element ein untergeordnetes Element eines {{htmlelement("a")}}-Elements mit einem gültigen [`href`](/de/docs/Web/HTML/Reference/Elements/a#href)-Attribut ist. Dadurch erhalten Personen ohne Zeigegerät ein alternatives Linkziel.

- `loading`
  - : Gibt an, wie der Browser das Bild laden soll:
    - `eager`
      - : Lädt das Bild sofort, unabhängig davon, ob es sich gerade im {{Glossary("visual_viewport", "visuellen Viewport")}} befindet. Dies ist der Standardwert.
    - `lazy`
      - : Verschiebt das Laden des Bildes, bis es einen vom Browser berechneten Abstand zum Viewport erreicht.

        Lazy Loading spart bis zu dem Zeitpunkt, an dem das Bild wahrscheinlich benötigt wird, die für seine Verarbeitung erforderliche Netzwerk- und Speicherbandbreite. Dies verbessert in den meisten typischen Anwendungsfällen die Performance.

        Explizite Attribute für [`width`](#width) und [`height`](#height) werden für alle Bilder empfohlen, um Layoutverschiebungen zu vermeiden. Für Bilder mit Lazy Loading sind sie besonders wichtig. Solche Bilder werden nie geladen, wenn sie keinen sichtbaren Teil eines Elements schneiden – selbst wenn das Laden dies ändern würde –, da nicht geladene Bilder eine `width` und `height` von `0` haben. Wenn der im Viewport sichtbare Inhalt mitten beim Lesen neu angeordnet wird, beeinträchtigt das die Benutzererfahrung noch stärker.

        Bilder mit Lazy Loading, die sich im visuellen Viewport befinden, sind möglicherweise noch nicht sichtbar, wenn das [`load`](/de/docs/Web/API/Window/load_event)-Ereignis von Window ausgelöst wird. Das liegt daran, dass für dieses Ereignis nur Bilder berücksichtigt werden, die sofort geladen werden. Bilder mit Lazy Loading werden selbst dann nicht berücksichtigt, wenn sie sich beim ersten Laden der Seite im visuellen Viewport befinden.

        Das Laden wird nur verschoben, wenn JavaScript aktiviert ist. Dies dient dem Schutz vor Tracking: Würde ein User-Agent Lazy Loading auch bei deaktiviertem Scripting unterstützen, könnte eine Website die ungefähre Scrollposition einer Person während einer Sitzung verfolgen. Dazu müsste sie Bilder strategisch im Markup der Seite platzieren, sodass ein Server erfassen kann, wie viele Bilder wann angefordert werden.

- `referrerpolicy`
  - : Eine Zeichenfolge, die angibt, welcher Referrer beim Abrufen der Ressource verwendet werden soll:
    - `no-referrer`: Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}}-Header wird nicht an {{Glossary("origin", "Ursprünge")}} ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`: Der gesendete Referrer ist auf den Ursprung der verweisenden Seite beschränkt: ihr [Schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), ihren {{Glossary("host", "Host")}} und ihren {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`: Der an andere Ursprünge gesendete Referrer ist auf Schema, Host und Port beschränkt. Bei Navigationen innerhalb desselben Ursprungs wird weiterhin der Pfad übermittelt.
    - `same-origin`: Bei Anfragen an {{Glossary("Same-origin_policy", "denselben Ursprung")}} wird ein Referrer gesendet; ursprungsübergreifende Anfragen enthalten dagegen keine Referrer-Informationen.
    - `strict-origin`: Der Ursprung des Dokuments wird nur dann als Referrer gesendet, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), nicht aber an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standardwert): Bei einer Anfrage an denselben Ursprung wird die vollständige URL gesendet. Bleibt das Sicherheitsniveau des Protokolls gleich (HTTPS→HTTPS), wird bei ursprungsübergreifenden Anfragen nur der Ursprung gesendet. An ein weniger sicheres Ziel (HTTPS→HTTP) wird kein Header gesendet.
    - `unsafe-url`: Der Referrer enthält den Ursprung _und_ den Pfad, aber nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), das [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder den [Benutzernamen](/de/docs/Web/API/HTMLAnchorElement/username). **Dieser Wert ist unsicher**, da er Ursprünge und Pfade TLS-geschützter Ressourcen an unsichere Ursprünge weitergibt.

- `sizes`
  - : Ein oder mehrere durch Kommas getrennte Werte, bei denen es sich um Quellgrößen oder das Schlüsselwort `auto` handeln kann.
    Laut Spezifikation darf das `sizes`-Attribut nur vorhanden sein, wenn `srcset` Breiten-Deskriptoren verwendet.
    - **Quellgröße**
      - : Eine **Quellgröße** besteht aus:
        1. Einer [Medienbedingung](/de/docs/Web/CSS/Guides/Media_queries/Using#syntax), die beim letzten Eintrag der Liste weggelassen wird.
        2. Einem Quellgrößenwert.

        Die folgende Quellgröße schlägt beispielsweise vor, eine `1000px` breite Bildquelle zu verwenden, wenn der _Viewport_ höchstens 500px breit ist.

        ```css
        (width <= 500px) 1000px
        ```

        Medienbedingungen beschreiben Eigenschaften des _{{Glossary("viewport", "Viewports")}}_, nicht des _Bildes_.
        Da ein Quellgrößen-Deskriptor angibt, welche Breite für das Bild beim Layout verwendet werden soll, basiert die Medienbedingung üblicherweise – aber nicht zwingend – auf {{cssxref("@media/width")}}.

        Quellgrößenwerte geben die beabsichtigte Anzeigegröße des Bildes an.
        {{Glossary("User_agent", "User-Agents")}} verwenden die aktuelle Quellgröße, um eine der im `srcset`-Attribut angegebenen Quellen auszuwählen, wenn diese mit Breiten-Deskriptoren (`w`) beschrieben sind.
        Der in `sizes` definierte `w`-Wert bestimmt die Standardbreite des Bildes im Layout.
        Ohne {{Glossary("CSS", "CSS")}} rendert der Browser das Bild in dieser Größe, unabhängig von den tatsächlichen Pixelabmessungen der heruntergeladenen Datei.

        Ein Quellgrößenwert kann eine beliebige nicht negative [Länge](/de/docs/Web/CSS/Reference/Values/length) sein.
        Er darf außer [mathematischen Funktionen](/de/docs/Web/CSS/Reference/Values/Functions#math_functions) keine CSS-Funktionen verwenden.
        Einheiten werden wie bei [Media Queries](/de/docs/Web/CSS/Guides/Media_queries) interpretiert: Alle relativen Längeneinheiten beziehen sich auf das Wurzelelement des Dokuments und nicht auf das `<img>`-Element. Ein `em`-Wert bezieht sich beispielsweise auf die Schriftgröße des Wurzelelements, nicht auf die Schriftgröße des Bildes. [Prozentwerte](/de/docs/Web/CSS/Reference/Values/percentage) sind nicht zulässig. Fehlt das `sizes`-Attribut, gilt der Standardwert `100vw` (die Breite des Viewports).

    - `auto`
      - : Das Schlüsselwort `auto` gibt an, dass der Browser die erwartete Layoutbreite des Elements zur Auswahl des anzuzeigenden Bildes verwenden soll.
        Er verwendet dafür die [konkrete Größe](/de/docs/Web/CSS/Reference/Values/image#concrete_size) des Bildes, die nach Anwendung des HTML- und CSS-Layouts berechnet wird.
        Dies ist nur in Kombination mit `loading="lazy"` gültig, da CSS und andere Layoutinformationen beim Laden des Bildes voraussichtlich bereits vorliegen.

        Mit `auto` müssen Sie Ihre Medienbedingungen für das Layout nicht zweimal angeben: einmal für das Layout und ein weiteres Mal für die Auswahl eines geeigneten Bildes zum Abrufen und Anzeigen.

        Kann `auto` nicht aufgelöst werden – weil der Browser es nicht unterstützt oder weil das Bild noch keine Layoutgröße hat –, greift der Browser zunächst auf die _Quellgrößen_ in der Liste zurück, um die Breite zu bestimmen. Danach verwendet er die am Element definierten Attribute `width` und `height` und schließlich die im User-Agent-Stylesheet festgelegte intrinsische Standardgröße für `<img>`-Elemente (300px × 150px).

        Für eine bessere Abwärtskompatibilität mit Browsern, die `auto` nicht unterstützen, können Sie im `sizes`-Attribut nach `auto` Ersatzgrößen angeben.
        Setzen Sie außerdem die Attribute `width` und `height` des Elements auf die intrinsischen Abmessungen des größten Bildes in Ihrem `srcset`, damit der Browser Platz mit dem richtigen Seitenverhältnis reservieren kann:

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
  - : Die {{Glossary("URL", "URL")}} des Bildes. Für ein `<img>`-Element muss mindestens eines der Attribute `src` und [`srcset`](#srcset) angegeben werden. Wenn [`srcset`](#srcset) angegeben ist, wird `src` auf eine von zwei Arten verwendet:
    - Als Ersatz für Browser, die `srcset` nicht unterstützen.
    - Wenn `srcset` den „x“-Deskriptor verwendet, entspricht `src` einer Quelle mit dem Pixeldichte-Deskriptor `1x`. Das durch `src` angegebene Bild wird dann auf Bildschirmen mit geringer Pixeldichte verwendet, beispielsweise auf typischen Anzeigen mit 72 DPI oder 96 DPI.

- `srcset`
  - : Eine oder mehrere durch Kommas getrennte Zeichenfolgen, die mögliche Bildquellen für den {{Glossary("user_agent", "User-Agent")}} angeben.

    Jede Zeichenfolge besteht aus:
    1. Einer {{Glossary("URL", "URL")}} zu einem Bild
    2. Optional einem Leerraumzeichen, gefolgt von einem der folgenden Deskriptoren:
       - Einem Breiten-Deskriptor (einer positiven ganzen Zahl, auf die unmittelbar `w` folgt). Er _muss_ mit der intrinsischen Breite des referenzierten Bildes übereinstimmen. Der Breiten-Deskriptor wird durch die im `sizes`-Attribut angegebene Quellgröße geteilt, um die effektive Pixeldichte zu berechnen. Wenn Sie beispielsweise eine Bildressource für eine benötigte Bildbreite von 450 Pixeln bereitstellen möchten, verwenden Sie den Breiten-Deskriptor `450w`. Enthält `srcset` „w“-Deskriptoren, verwendet der Browser diese zusammen mit dem `sizes`-Attribut zur Auswahl einer Ressource.
       - Einem Pixeldichte-Deskriptor (einer positiven Gleitkommazahl, auf die unmittelbar `x` folgt). Er gibt an, bei welcher Pixeldichte des Bildschirms die entsprechende Bildressource verwendet werden soll. Wenn Sie beispielsweise eine Bildressource für die doppelte Standardpixeldichte bereitstellen möchten, verwenden Sie den Pixeldichte-Deskriptor `2x` oder `2.0x`.

    Ist kein Deskriptor angegeben, erhält die Quelle den Standard-Deskriptor `1x`. Breiten- und Pixeldichte-Deskriptoren dürfen nicht im selben `srcset`-Attribut gemischt werden. Doppelte Deskriptoren sind ebenfalls ungültig, beispielsweise zwei Quellen im selben `srcset`, die beide mit `2x` beschrieben sind.

    Leerraumzeichen werden ignoriert, außer wenn sie die URL vom zugehörigen Deskriptor trennen. Das gilt auch für Leerraum am Anfang und Ende sowie vor oder nach jedem Komma. Enthält eine Zeichenfolge für einen Bildkandidaten jedoch weder einen Deskriptor noch Leerraum nach der URL, muss die nächste Zeichenfolge für einen Bildkandidaten, sofern vorhanden, mit mindestens einem Leerraumzeichen beginnen. Andernfalls wird das Komma als Teil der URL betrachtet.

    Wenn `srcset` beim `<img>`-Element `x`-Deskriptoren verwendet, berücksichtigen Browser auch die URL im `src`-Attribut, sofern vorhanden, als Kandidaten und weisen ihr den Standard-Deskriptor `1x` zu. Verwendet das `srcset`-Attribut dagegen Breiten-Deskriptoren, wird `src` nicht berücksichtigt; stattdessen wird das `sizes`-Attribut verwendet.

    Der User-Agent wählt nach eigenem Ermessen eine der verfügbaren Quellen aus. Dadurch hat er erheblichen Spielraum, um die Auswahl beispielsweise an Benutzereinstellungen oder die verfügbare {{Glossary("bandwidth", "Bandbreite")}} anzupassen. Ein Beispiel finden Sie in unserem Tutorial zu [responsiven Bildern](/de/docs/Web/HTML/Guides/Responsive_images).

- `width`
  - : Die intrinsische Breite des Bildes in Pixeln. Der Wert muss eine ganze Zahl ohne Einheit sein.
- `usemap`
  - : Die Teil-{{Glossary("URL", "URL")}}, die mit `#` beginnt, einer dem Element zugeordneten [Image-Map](/de/docs/Web/HTML/Reference/Elements/map).

    > [!NOTE]
    > Sie können dieses Attribut nicht verwenden, wenn sich das `<img>`-Element innerhalb eines {{htmlelement("a")}}- oder {{HTMLElement("button")}}-Elements befindet.

### Veraltete Attribute

- `align` {{deprecated_inline}}
  - : Richtet das Bild an seinem umgebenden Kontext aus. Verwenden Sie statt dieses Attributs die {{Glossary("CSS", "CSS")}}-Eigenschaften {{cssxref('float')}} und/oder {{cssxref('vertical-align')}}. Zulässige Werte:
    - `top`
      - : Entspricht `vertical-align: top` oder `vertical-align: text-top`
    - `middle`
      - : Entspricht `vertical-align: -moz-middle-with-baseline`
    - `bottom`
      - : Der Standardwert; entspricht `vertical-align: unset` oder `vertical-align: initial`
    - `left`
      - : Entspricht `float: left`
    - `right`
      - : Entspricht `float: right`

- `border` {{deprecated_inline}}
  - : Die Breite eines Rahmens um das Bild. Verwenden Sie stattdessen die {{Glossary("CSS", "CSS")}}-Eigenschaft {{cssxref('border')}}.
- `hspace` {{deprecated_inline}}
  - : Die Anzahl der Pixel Leerraum links und rechts vom Bild. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref('margin')}}.
- `longdesc` {{deprecated_inline}}
  - : Ein Link zu einer ausführlicheren Beschreibung des Bildes. Mögliche Werte sind eine {{Glossary("URL", "URL")}} oder die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) eines Elements.

    > [!NOTE]
    > Dieses Attribut gilt laut [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/obsolete.html#element-attrdef-img-longdesc) als überholt. Seine Zukunft ist ungewiss; verwenden Sie stattdessen eine {{Glossary("WAI", "WAI")}}-{{Glossary("ARIA", "ARIA")}}-Alternative wie [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) oder [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details).

- `name` {{deprecated_inline}}
  - : Ein Name für das Element. Verwenden Sie stattdessen das Attribut [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id).
- `vspace` {{deprecated_inline}}
  - : Die Anzahl der Pixel Leerraum oberhalb und unterhalb des Bildes. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref('margin')}}.

## Verwendungshinweise

Jedes `<img>`-Element benötigt mindestens zwei Attribute. Meist sind dies `src` und `alt`.

- Das `src`-Attribut enthält den Pfad zum Bild, das Sie einbetten möchten. Es ist nicht erforderlich, wenn das Attribut [srcset](/de/docs/Web/API/HTMLImageElement/srcset) vorhanden ist. Mindestens eines der Attribute `src` oder `srcset` muss jedoch angegeben werden.
- Das `alt`-Attribut enthält einen Textersatz für das Bild. Es ist erforderlich und für die Barrierefreiheit **außerordentlich wichtig**: Screenreader lesen den Attributwert vor, damit ihre Nutzer verstehen, was das Bild bedeutet. Alternativtext wird auch auf der Seite angezeigt, wenn das Bild aus irgendeinem Grund nicht geladen werden kann, beispielsweise wegen Netzwerkfehlern, Inhaltssperren oder eines nicht mehr funktionierenden Links.

Für unterschiedliche Zwecke stehen viele weitere Attribute zur Verfügung:

- Steuerung von [Referrer](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy) und {{Glossary("CORS", "CORS")}} für Sicherheit und Datenschutz: siehe [`crossorigin`](#crossorigin) und [`referrerpolicy`](#referrerpolicy).
- Verwenden Sie sowohl [`width`](#width) als auch [`height`](#height), um die intrinsische Größe des Bildes festzulegen. So kann es bereits vor dem Laden Platz einnehmen, was Layoutverschiebungen verringert.
- Hinweise für responsive Bilder mit [`sizes`](#sizes) und [`srcset`](#srcset) (siehe auch das {{htmlelement("picture")}}-Element und unser Tutorial zu [responsiven Bildern](/de/docs/Web/HTML/Guides/Responsive_images)).

Der [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types) enthält Informationen über unterstützte Bildformate und allgemeine Empfehlungen zu ihrer Verwendung.

### Fehler beim Laden von Bildern

Tritt beim Laden oder Rendern eines Bildes ein Fehler auf und wurde für das [`error`](/de/docs/Web/API/HTMLElement/error_event)-Ereignis ein `onerror`-Event-Handler festgelegt, wird dieser aufgerufen. Das kann unter anderem in folgenden Situationen passieren:

- Die Attribute `src` oder `srcset` sind leer (`""`) oder `null`.
- Die `src`-{{Glossary("URL", "URL")}} stimmt mit der URL der Seite überein, auf der sich die Person gerade befindet.
- Das Bild ist so beschädigt, dass es nicht geladen werden kann.
- Die Metadaten des Bildes sind so beschädigt, dass seine Abmessungen nicht ermittelt werden können, und in den Attributen des `<img>`-Elements wurden keine Abmessungen angegeben.
- Das Bild liegt in einem Format vor, das der {{Glossary("user_agent", "User-Agent")}} nicht unterstützt.

### Gestaltung mit CSS

`<img>` ist ein {{Glossary("replaced_elements", "ersetztes Element")}}. Sein {{cssxref("display")}}-Wert ist standardmäßig `inline`, seine Standardabmessungen werden jedoch durch die intrinsischen Werte des eingebetteten Bildes bestimmt, ähnlich wie bei `inline-block`. Sie können für ein Bild Eigenschaften wie {{cssxref("border")}}/{{cssxref("border-radius")}}, {{cssxref("padding")}}/{{cssxref("margin")}}, {{cssxref("width")}} und {{cssxref("height")}} festlegen.

`<img>` hat keine Grundlinie. Werden Bilder in einem Inline-Formatierungskontext mit {{cssxref("vertical-align", "vertical-align: baseline")}} verwendet, wird daher die Unterkante des Bildes auf der Textgrundlinie platziert.

Mit der Eigenschaft {{cssxref("object-position")}} können Sie das Bild innerhalb der Box des Elements positionieren. Mit {{cssxref("object-fit")}} können Sie seine Größe innerhalb der Box anpassen, beispielsweise festlegen, ob es in die Box passen oder sie auch dann ausfüllen soll, wenn es dafür beschnitten werden muss.

Abhängig vom Bildtyp kann ein Bild eine intrinsische Breite und Höhe haben. Bei manchen Bildtypen sind intrinsische Abmessungen jedoch nicht erforderlich. {{Glossary("SVG", "SVG")}}-Bilder haben beispielsweise keine intrinsischen Abmessungen, wenn für ihr {{SVGElement("svg")}}-Wurzelelement weder `width` noch `height` festgelegt ist.

## Barrierefreiheit

### Aussagekräftige Alternativbeschreibungen verfassen

Der Wert eines `alt`-Attributs sollte den Bildinhalt klar und knapp als Text wiedergeben. Er sollte weder beschreiben, dass ein Bild vorhanden ist, noch den Dateinamen des Bildes nennen. Wenn Sie das `alt`-Attribut bewusst weglassen, weil das Bild keine textliche Entsprechung hat, sollten Sie andere Möglichkeiten in Betracht ziehen, seine Aussage zu vermitteln.

#### Nicht so

```html example-bad
<img alt="image" src="penguin.jpg" />
```

#### So

```html example-good
<img alt="A Penguin on a beach." src="penguin.jpg" />
```

Ein wichtiger Test für die Barrierefreiheit besteht darin, den Inhalt des `alt`-Attributs zusammen mit dem vorangehenden Text zu lesen und zu prüfen, ob er dieselbe Bedeutung wie das Bild vermittelt. Wenn vor dem Bild beispielsweise der Satz „Auf meinen Reisen sah ich ein niedliches kleines Tier:“ steht, könnte ein Screenreader das Beispiel unter _Nicht so_ als „Auf meinen Reisen sah ich ein niedliches kleines Tier: Bild“ vorlesen. Das ist nicht aussagekräftig. Das Beispiel unter _So_ könnte er als „Auf meinen Reisen sah ich ein niedliches kleines Tier: Ein Pinguin am Strand.“ vorlesen. Das ist verständlich.

Bei Bildern, die eine Aktion auslösen, beispielsweise innerhalb eines {{htmlelement("a")}}- oder {{htmlelement("button")}}-Elements, sollte der Wert des `alt`-Attributs die ausgelöste Aktion beschreiben. So könnten Sie `alt="next page"` statt `alt="arrow right"` schreiben. Sie können auch eine zusätzliche, optionale Beschreibung im `title`-Attribut angeben. Screenreader lesen diese gegebenenfalls auf Wunsch der Person vor.

Wenn ein Bild kein `alt`-Attribut hat, geben manche Screenreader stattdessen möglicherweise den Dateinamen des Bildes aus. Ist der Dateiname nicht aussagekräftig für den Bildinhalt, kann das verwirrend sein.

- [Entscheidungsbaum für Alternativtexte • Bilder • WAI-Tutorials zur Barrierefreiheit im Web](https://www.w3.org/WAI/tutorials/images/decision-tree/)
- [Alternativtexte: Der ultimative Leitfaden — Axess Lab](https://axesslab.com/alt-texts/)
- [Gute Alternativtexte gestalten: Eine Einführung | Deque](https://www.deque.com/blog/great-alt-text-introduction/)
- [MDN: WCAG verstehen, Erläuterungen zu Richtlinie 1.1](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Erfolgskriterium 1.1.1 verstehen | W3C: WCAG 2.0 verstehen](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

### SVG als Bild kennzeichnen

Aufgrund eines [VoiceOver-Fehlers](https://webkit.org/b/216364) kündigt VoiceOver SVG-Bilder nicht korrekt als Bilder an. Fügen Sie bei allen `<img>`-Elementen mit SVG-Quelldateien [`role="img"`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/img_role) hinzu, damit assistive Technologien den SVG-Inhalt korrekt als Bild ankündigen.

```html
<img src="mdn.svg" alt="MDN" role="img" />
```

### Das title-Attribut

Das Attribut [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title) ist kein geeigneter Ersatz für das `alt`-Attribut. Vermeiden Sie außerdem, den Wert des `alt`-Attributs in einem `title`-Attribut desselben Bildes zu wiederholen. Andernfalls lesen manche Screenreader denselben Text möglicherweise zweimal vor, was verwirrend sein kann.

Das `title`-Attribut sollte auch nicht verwendet werden, um die `alt`-Beschreibung eines Bildes um Informationen einer Bildunterschrift zu ergänzen. Wenn ein Bild eine Bildunterschrift benötigt, verwenden Sie die Elemente [`figure`](/de/docs/Web/HTML/Reference/Elements/figure) und [`figcaption`](/de/docs/Web/HTML/Reference/Elements/figcaption).

Der Wert des `title`-Attributs wird üblicherweise als Tooltip angezeigt, kurz nachdem der Mauszeiger auf dem Bild stehen geblieben ist. Das _kann_ zusätzliche Informationen liefern. Gehen Sie jedoch nicht davon aus, dass alle Personen den Tooltip sehen: Manche verwenden ausschließlich eine Tastatur oder einen Touchscreen. Besonders wichtige oder nützliche Informationen sollten Sie daher mit einer der oben genannten Methoden direkt im Inhalt bereitstellen, statt `title` zu verwenden.

- [Das HTML-title-Attribut verwenden – aktualisiert | Vispero](https://vispero.com/resources/using-the-html-title-attribute-updated/)

## Beispiele

### Alternativtext

Das folgende Beispiel bettet ein Bild in die Seite ein und enthält Alternativtext für die Barrierefreiheit.

```html
<img src="/shared-assets/images/examples/favicon144.png" alt="MDN" />
```

{{ EmbedLiveSample('Alternative_text', '100%', '160') }}

### Bild als Link

Dieses Beispiel baut auf dem vorherigen auf und zeigt, wie Sie aus dem Bild einen Link machen. Dazu verschachteln Sie das `<img>`-Tag im {{HTMLElement("a")}}-Element. Der Alternativtext sollte die Ressource beschreiben, auf die der Link verweist – so, als würden Sie stattdessen einen Textlink verwenden.

```html
<a href="https://developer.mozilla.org">
  <img
    src="/shared-assets/images/examples/favicon144.png"
    alt="Visit the MDN site" />
</a>
```

{{ EmbedLiveSample('Image_link', '100%', '160') }}

### Das srcset-Attribut verwenden

In diesem Beispiel verwenden wir ein `srcset`-Attribut mit einem Verweis auf eine hochauflösende Version des Logos. Auf hochauflösenden Geräten wird diese anstelle des über `src` angegebenen Bildes geladen. Das im `src`-Attribut referenzierte Bild gilt bei {{Glossary("User_agent", "User-Agents")}}, die `srcset` unterstützen, als `1x`-Kandidat.

```html
<img
  src="/shared-assets/images/examples/favicon72.png"
  alt="MDN"
  srcset="/shared-assets/images/examples/favicon144.png 2x" />
```

{{EmbedLiveSample("Using_the_srcset_attribute", "100%", "160")}}

### Die Attribute srcset und sizes verwenden

Das `src`-Attribut wird von {{Glossary("User_agent", "User-Agents")}}, die `srcset` unterstützen, ignoriert, wenn `w`-Deskriptoren angegeben sind. Wenn die Medienbedingung `(width <= 600px)` zutrifft, wird das 200 Pixel breite Bild geladen, da es `200px` am nächsten kommt. Andernfalls wird das andere Bild geladen.

```html
<img
  src="clock-demo-200px.png"
  alt="The time is 12:45."
  srcset="clock-demo-200px.png 200w, clock-demo-400px.png 400w"
  sizes="(width <= 600px) 200px, 50vw" />
```

{{EmbedLiveSample("Using_the_srcset_and_sizes_attributes", "100%", 350)}}

> [!NOTE]
> Um zu sehen, wie sich die Größenänderung auswirkt, {{LiveSampleLink('Using_the_srcset_and_sizes_attributes', 'öffnen Sie das Beispiel auf einer separaten Seite')}}. Dort können Sie die Größe des Inhaltsbereichs tatsächlich ändern.

## Sicherheits- und Datenschutzaspekte

Obwohl `<img>`-Elemente für unbedenkliche Zwecke eingesetzt werden, können sie unerwünschte Folgen für die Sicherheit und Privatsphäre der Nutzer haben. Weitere Informationen und Gegenmaßnahmen finden Sie unter [Referer-Header: Datenschutz- und Sicherheitsaspekte](/de/docs/Web/Privacy/Guides/Referer_header:_privacy_and_security_concerns).

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
          >formulierender Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#embedded_content"
          >eingebetteter Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#palpable_content"
          >wahrnehmbarer Inhalt</a
        >. Hat das Element ein <code>usemap</code>-Attribut, gehört es auch
        zur Kategorie der interaktiven Inhalte.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "leeres Element")}}.</td>
    </tr>
    <tr>
      <th scope="row">Auslassen von Tags</th>
      <td>Muss ein Start-Tag haben und darf kein End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Elternelemente</th>
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
            mit leerem <code>alt</code>-Attribut: <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/none_role"><code>none</code></a>
            oder <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a>
          </li>
          <li>
            ohne <code>alt</code>-Attribut: keine <code>role</code> erlaubt
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

- Die Elemente {{HTMLElement("picture")}}, {{HTMLElement("object")}} und {{HTMLElement("embed")}}
- {{cssxref("object-fit")}}, {{cssxref("object-position")}}, {{cssxref("image-orientation")}}, {{cssxref("image-rendering")}} und {{cssxref("image-resolution")}}: CSS-Eigenschaften für Bilder
- Die Schnittstelle [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) für dieses Element
- [HTML-Bilder](/de/docs/Learn_web_development/Core/Structuring_content/HTML_images)
- [Leitfaden zu Bilddateitypen und -formaten](/de/docs/Web/Media/Guides/Formats/Image_types)
- [Responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images)
