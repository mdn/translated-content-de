---
title: "`<link>` HTML externes Ressourcenschnittstellenelement"
short-title: <link>
slug: Web/HTML/Reference/Elements/link
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

Das **`<link>`** [HTML](/de/docs/Web/HTML)-Element spezifiziert Beziehungen zwischen dem aktuellen Dokument und einer externen Ressource. Dieses Element wird am häufigsten verwendet, um auf {{Glossary("CSS", "Stylesheets")}} zu verweisen, es wird aber auch verwendet, um Symbole der Website festzulegen (sowohl "Favicon"-Stil-Symbole als auch Symbole für Startbildschirme und Apps auf mobilen Geräten), unter anderem.

{{InteractiveExample("HTML Demo: &lt;link&gt;", "tabbed-shorter")}}

```html interactive-example
<link href="/shared-assets/misc/link-element-example.css" rel="stylesheet" />

<p>This text will be red as defined in the external stylesheet.</p>
<p style="color: blue">
  The <code>style</code> attribute can override it, though.
</p>
```

Um ein externes Stylesheet zu verlinken, fügen Sie ein `<link>`-Element innerhalb Ihres {{HTMLElement("head")}} so ein:

```html
<link href="main.css" rel="stylesheet" />
```

Dieses Beispiel gibt den Pfad zum Stylesheet innerhalb eines `href`-Attributs an und ein [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)-Attribut mit dem Wert `stylesheet`. Das `rel` steht für "Beziehung" und ist eines der Schlüsselelemente des `<link>`-Elements — der Wert gibt an, wie das verlinkte Element mit dem enthaltenen Dokument in Beziehung steht.

Es gibt eine Reihe weiterer gebräuchlicher Typen, auf die Sie stoßen werden. Zum Beispiel ein Link zum Favicon der Website:

```html
<link rel="icon" href="favicon.ico" />
```

Es gibt eine Reihe anderer Icon-`rel`-Werte, die hauptsächlich verwendet werden, um spezielle Icon-Typen für verschiedene mobile Plattformen anzugeben, z.B.:

```html
<link
  rel="apple-touch-icon"
  sizes="114x114"
  href="apple-icon-114.png"
  type="image/png" />
```

Das `sizes`-Attribut gibt die Größe des Symbols an, während `type` den MIME-Typ der verlinkten Ressource enthält. Diese Hinweise sollen helfen, damit der Browser das passendste verfügbare Symbol auswählen kann.

Sie können auch einen Medientyp oder eine Mediensuche in einem `media`-Attribut angeben; diese Ressource wird dann nur geladen, wenn die Medienbedingung zutrifft. Zum Beispiel:

```html
<link href="print.css" rel="stylesheet" media="print" />
<link href="mobile.css" rel="stylesheet" media="screen and (width <= 600px)" />
```

Einige interessante neue Leistungs- und Sicherheitsmerkmale wurden auch dem `<link>`-Element hinzugefügt. Nehmen Sie dieses Beispiel:

```html
<link
  rel="preload"
  href="myFont.woff2"
  as="font"
  type="font/woff2"
  crossorigin="anonymous" />
```

Ein `rel`-Wert von `preload` weist darauf hin, dass der Browser diese Ressource vorladen sollte (siehe [`rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload) für weitere Details), mit dem `as`-Attribut, das auf die spezifische Art von Inhalten hinweist, die abgerufen werden. Das `crossorigin`-Attribut gibt an, ob die Ressource mit einer {{Glossary("CORS", "CORS")}}-Anfrage abgerufen werden sollte.

Weitere Verwendungshinweise:

- Ein `<link>`-Element kann entweder im {{HTMLElement("head")}}- oder {{HTMLElement("body")}}-Element auftreten, je nachdem, ob es sich um einen [Verknüpfungstyp](https://html.spec.whatwg.org/multipage/links.html#body-ok) handelt, der **body-ok** ist. Zum Beispiel ist der `stylesheet`-Linktyp body-ok, und daher ist `<link rel="stylesheet">` im Body erlaubt. Es ist jedoch keine gute Praxis, dies zu tun; es ergibt mehr Sinn, Ihre `<link>`-Elemente von Ihrem Body-Inhalt zu trennen und in den `<head>` zu setzen.
- Wenn Sie `<link>` verwenden, um ein Favicon für eine Website zu erstellen und Ihre Website eine Content-Security-Policy (CSP) verwendet, um ihre Sicherheit zu erhöhen, gilt die Richtlinie auch für das Favicon. Wenn Sie Probleme mit dem Laden des Favicons haben, überprüfen Sie, dass die {{HTTPHeader("Content-Security-Policy")}}-Kopfzeile die [`img-src`-Richtlinie](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/img-src) nicht daran hindert, darauf zuzugreifen.
- Die HTML- und XHTML-Spezifikationen definieren Ereignishandler für das `<link>`-Element, aber es ist unklar, wie sie verwendet werden würden.
- Bei XHTML 1.0 erfordern {{Glossary("void_element", "void-Elemente")}} wie `<link>` einen abschließenden Schrägstrich: `<link />`.
- WebTV unterstützt die Verwendung des Wertes `next` für `rel`, um die nächste Seite in einer Dokumentenreihe vorzupuffern.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `as`
  - : Dieses Attribut ist erforderlich, wenn [`rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload) auf dem `<link>`-Element gesetzt wurde, optional, wenn [`rel="modulepreload"`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload) gesetzt wurde, und sollte sonst nicht verwendet werden. Es spezifiziert den Typ der geladenen Inhalte durch das `<link>`, was notwendig ist für das Matching von Anfragen, die Anwendung der korrekten [Content-Security-Policy](/de/docs/Web/HTTP/Guides/CSP) und das Setzen der korrekten {{HTTPHeader("Accept")}}-Header in der Anfrage.

    Darüber hinaus verwendet `rel="preload"` dieses als Signal zur Priorisierung von Anfragen. Die folgende Tabelle listet die gültigen Werte für dieses Attribut und die Elemente oder Ressourcen auf, auf die sie angewendet werden.

    <table class="standard-table">
      <thead>
        <tr>
          <th scope="col">Wert</th>
          <th scope="col">Anwendung auf</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>audio</td>
          <td><code>&#x3C;audio></code>-Elemente</td>
        </tr>
        <tr>
          <td>document</td>
          <td><code>&#x3C;iframe></code> und <code>&#x3C;frame></code>-Elemente</td>
        </tr>
        <tr>
          <td>embed</td>
          <td><code>&#x3C;embed></code>-Elemente</td>
        </tr>
        <tr>
          <td>fetch</td>
          <td>
            <p>fetch, XHR</p>
            <div class="notecard note">
              <p>
                <strong>Hinweis:</strong> Dieser Wert erfordert auch, dass
                <code>&#x3C;link></code> das crossorigin-Attribut enthält, siehe <a href="/de/docs/Web/HTML/Reference/Attributes/rel/preload#cors-enabled_fetches">CORS-fähige Abrufe</a>.
              </p>
            </div>
          </td>
        </tr>
        <tr>
          <td>font</td>
          <td>
            <p>CSS @font-face</p>
            <div class="notecard note">
              <p>
                <strong>Hinweis:</strong> Dieser Wert erfordert auch, dass
                <code>&#x3C;link></code> das crossorigin-Attribut enthält, siehe <a href="/de/docs/Web/HTML/Reference/Attributes/rel/preload#cors-enabled_fetches">CORS-fähige Abrufe</a>.
              </p>
            </div>
          </td>
        </tr>
        <tr>
          <td>image</td>
          <td>
            <code>&#x3C;img></code> und <code>&#x3C;picture></code>-Elemente mit
            srcset oder imageset Attributen, SVG <code>&#x3C;image></code>-Elemente,
            CSS <code>*-image</code> Regeln
          </td>
        </tr>
        <tr>
          <td>json</td>
          <td>
            <code>modulepreload</code>-Zielorte.
          </td>
        </tr>
        <tr>
          <td>object</td>
          <td><code>&#x3C;object></code>-Elemente</td>
        </tr>
        <tr>
          <td>script</td>
          <td>
            <code>&#x3C;script></code>-Elemente, Worker <code>importScripts</code> und <code>modulepreload</code>-Zielorte.
          </td>
        </tr>
        <tr>
          <td>style</td>
          <td>
            <code>&#x3C;link rel=stylesheet></code>-Elemente, CSS
            <code>@import</code> und <code>modulepreload</code>-Zielorte.
          </td>
        </tr>
        <tr>
          <td>track</td>
          <td><code>&#x3C;track></code>-Elemente</td>
        </tr>
        <tr>
          <td>video</td>
          <td><code>&#x3C;video></code>-Elemente</td>
        </tr>
        <tr>
          <td>worker</td>
          <td>Worker, SharedWorker</td>
        </tr>
      </tbody>
    </table>

- `blocking`
  - : Dieses Attribut zeigt explizit an, dass bestimmte Operationen blockiert werden sollen, bis spezifische Bedingungen erfüllt sind. Es darf nur verwendet werden, wenn das `rel`-Attribut die Schlüsselwörter `expect` oder `stylesheet` enthält. Mit [`rel="expect"`](/de/docs/Web/HTML/Reference/Attributes/rel#expect) bedeutet es, dass Operationen blockiert werden sollten, bis ein bestimmter DOM-Knoten analysiert wurde. Mit [`rel="stylesheet"`](/de/docs/Web/HTML/Reference/Attributes/rel#stylesheet) bedeutet es, dass Operationen blockiert werden sollten, bis ein externes Stylesheet und seine kritischen Subressourcen abgerufen und auf das Dokument angewendet wurden. Die Operationen, die blockiert werden sollen, müssen eine durch Leerzeichen getrennte Liste von unten aufgeführten Blockiertokens sein. Derzeit gibt es nur ein Token:
    - `render`: Die Darstellung von Inhalten auf dem Bildschirm wird blockiert.

    > [!NOTE]
    > Nur `link`-Elemente im `<head>` des Dokuments können möglicherweise das Rendern blockieren. Standardmäßig blockiert ein `link`-Element mit `rel="stylesheet"` im `<head>` das Rendern, wenn der Browser es während des Parsens entdeckt. Wenn ein solches `link`-Element dynamisch über Skript hinzugefügt wird, müssen Sie zusätzlich `blocking = "render"` setzen, damit es das Rendern blockiert.

- [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)
  - : Dieses {{Glossary("Enumerated", "enumerierte")}} Attribut gibt an, ob {{Glossary("CORS", "CORS")}} verwendet werden muss, wenn die Ressource abgerufen wird. [CORS-fähige Bilder](/de/docs/Web/HTML/How_to/CORS_enabled_image) können im {{HTMLElement("canvas")}}-Element wiederverwendet werden, ohne _verunreinigt_ zu werden. Erlaubte Werte sind:
    - `anonymous`
      - : Eine Cross-Origin-Anfrage (d.h. mit einem {{HTTPHeader("Origin")}} HTTP-Header) wird ausgeführt, aber keine Anmeldeinformationen gesendet (d.h. kein Cookie, X.509-Zertifikat oder HTTP-Basic-Authentifizierung).
        Wenn der Server keine Anmeldeinformationen an die Ursprungsseite gibt (indem er nicht den {{HTTPHeader("Access-Control-Allow-Origin")}} HTTP-Header setzt), wird die Ressource verunreinigt und ihre Nutzung eingeschränkt.
    - `use-credentials`
      - : Eine Cross-Origin-Anfrage (d.h. mit einem `Origin` HTTP-Header) wird zusammen mit einem Anmeldedaten-Satz ausgeführt (d.h. ein Cookie, Zertifikat und/oder HTTP-Basic-Authentifizierung werden ausgeführt).
        Wenn der Server keine Anmeldeinformationen an die Ursprungsseite gibt (durch den {{HTTPHeader("Access-Control-Allow-Credentials")}} HTTP-Header), wird die Ressource _verunreinigt_ und ihre Nutzung eingeschränkt.

    Ist das Attribut nicht vorhanden, wird die Ressource ohne eine {{Glossary("CORS", "CORS")}}-Anfrage abgerufen (d.h. ohne den `Origin` HTTP-Header zu senden), und ihre unverunreinigte Nutzung wird verhindert. Bei ungültigen Eingaben wird es behandelt, als wäre das enumerierte Schlüsselwort **anonymous** verwendet worden. Siehe [CORS-Einstellungen Attribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin) für zusätzliche Informationen.

- `disabled`
  - : Nur für `rel="stylesheet"` zeigt das `disabled`-Boolean-Attribut an, ob das beschriebene Stylesheet geladen und auf das Dokument angewendet werden soll. Wenn `disabled` im HTML angegeben ist, wird das Stylesheet beim Laden der Seite nicht geladen. Stattdessen wird das Stylesheet bei Bedarf geladen, wenn das `disabled`-Attribut auf `false` geändert oder entfernt wird.

    Das Setzen der `disabled`-Eigenschaft im DOM führt dazu, dass das Stylesheet aus der [`Document.styleSheets`](/de/docs/Web/API/Document/styleSheets)-Liste des Dokuments entfernt wird.

- [`fetchpriority`](/de/docs/Web/HTML/Reference/Attributes/fetchpriority)
  - : Gibt einen Hinweis auf die relative Priorität an, die beim Abrufen einer Ressource eines bestimmten Typs verwendet werden soll. Zulässige Werte:
    - `high`
      - : Rufen Sie die Ressource mit hoher Priorität im Verhältnis zu anderen Ressourcen desselben Typs ab.
    - `low`
      - : Rufen Sie die Ressource mit niedriger Priorität im Verhältnis zu anderen Ressourcen desselben Typs ab.
    - `auto`
      - : Legen Sie keine Präferenz für die Abrufpriorität fest. Dies ist der Standardwert. Er wird verwendet, wenn kein Wert oder ein ungültiger Wert festgelegt ist.
- `href`
  - : Dieses Attribut gibt die {{Glossary("URL", "URL")}} der verlinkten Ressource an. Eine URL kann absolut oder relativ sein.
- `hreflang`
  - : Dieses Attribut gibt die Sprache der verlinkten Ressource an. Es ist rein beratend. Die Werte sollten gültige {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tags")}} sein. Verwenden Sie dieses Attribut nur, wenn das [`href`](/de/docs/Web/HTML/Reference/Elements/a#href) Attribut vorhanden ist.
- `imagesizes`
  - : Nur für `rel="preload"` und `as="image"` hat das `imagesizes`-Attribut eine ähnliche Syntax und Semantik wie das [`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes)-Attribut, das darauf hinweist, die geeignete Ressource vorzupuffern, die von einem `img`-Element mit entsprechenden Werten für seine `srcset`- und `sizes`-Attribute verwendet wird.
- `imagesrcset`
  - : Nur für `rel="preload"` und `as="image"` hat das `imagesrcset`-Attribut eine ähnliche Syntax und Semantik wie das [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset)-Attribut, das darauf hinweist, die geeignete Ressource vorzupuffern, die von einem `img`-Element mit entsprechenden Werten für seine `srcset`- und `sizes`-Attribute verwendet wird.
- [`integrity`](/de/docs/Web/HTML/Reference/Attributes/integrity)
  - : Dieses Attribut enthält einen oder mehrere {{Glossary("hash_function", "Hashes")}} der Ressource. Es wird verwendet, um sicherzustellen, dass der Inhalt der Ressource dem entspricht, was der Entwickler erwartet, und nicht mit einer bösartigen Kopie in einem [Supply-Chain-Angriff](/de/docs/Web/Security/Attacks/Supply_chain_attacks) ersetzt wurde. Das Attribut darf nur angegeben werden, wenn das `rel`-Attribut auf `stylesheet`, `preload` oder `modulepreload` gesetzt ist. Siehe [Subresource Integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity).
- `media`
  - : Dieses Attribut gibt die Medien an, auf die die verlinkte Ressource angewendet wird. Sein Wert muss ein Medientyp / [Medienabfrage](/de/docs/Web/CSS/Guides/Media_queries) sein. Dieses Attribut ist hauptsächlich nützlich, wenn man auf externe Stylesheets verweist — es ermöglicht dem User Agent, das am besten angepasste für das Gerät auszuwählen, auf dem es läuft.

- `referrerpolicy`
  - : Ein String, der angibt, welchen Referrer beim Abrufen der Ressource verwendet werden soll. Für detaillierte Erklärungen und Beispiele zu jeder Richtlinie, siehe die {{HTTPHeader("Referrer-Policy")}}-Header-Dokumentation.
    - `no-referrer` bedeutet, dass der {{HTTPHeader("Referer")}}-Header nicht gesendet wird.
    - `no-referrer-when-downgrade` bedeutet, dass kein {{HTTPHeader("Referer")}}-Header gesendet wird, wenn zu einem Ursprung ohne TLS (HTTPS) navigiert wird. Dies ist das Standardverhalten eines User Agents, wenn keine andere Richtlinie angegeben ist.
    - `origin` bedeutet, dass der Referrer der Ursprung der Seite sein wird, der etwa das Schema, der Host und der Port ist.
    - `origin-when-cross-origin` bedeutet, dass bei der Navigation zu anderen Ursprüngen nur das Schema, der Host und der Port angegeben werden, während bei der Navigation auf dem gleichen Ursprung der Pfad des Referrers enthalten ist.
    - `same-origin` bedeutet, dass der Referrer (Ursprung, Pfad und Abfragezeichenfolge) für Anfragen desselben Ursprungs gesendet wird, aber kein Referrer für Anfragen eines anderen Ursprungs gesendet wird.
    - `strict-origin` bedeutet, dass nur der Ursprung gesendet wird, wenn das Sicherheitsprotokoll gleich bleibt (HTTPS→HTTPS). Kein Referrer wird zu weniger sicheren Zielen (HTTPS→HTTP) gesendet. Dies ist wichtig für HTTPS-Seiten, da es verhindert, dass Referrer-Informationen an unsichere Ursprünge gelangen.
    - `strict-origin-when-cross-origin` bedeutet, dass der vollständige Referrer für Anfragen desselben Ursprungs gesendet wird. Bei Anfragen eines anderen Ursprungs wird nur der Ursprung gesendet, wenn das Protokoll gleich bleibt (HTTPS→HTTPS), und kein Referrer gesendet wird, wenn auf HTTP heruntergestuft wird. Dies ist der Standardwert, der Funktionalität mit Privatsphäre und Sicherheit für HTTPS-Seiten ausbalanciert.
    - `unsafe-url` bedeutet, dass der Referrer den Ursprung und den Pfad enthalten wird (aber nicht das Fragment, Passwort oder Benutzername). Dieser Fall ist unsicher, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge lecken kann.

- [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)
  - : Dieses Attribut benennt eine Beziehung des verlinkten Dokuments zum aktuellen Dokument. Das Attribut muss eine durch Leerzeichen getrennte Liste von [Verknüpfungstypwerten](/de/docs/Web/HTML/Reference/Attributes/rel) sein.
- `sizes`
  - : Dieses Attribut definiert die Größen der Symbole für visuelle Medien, die in der Ressource enthalten sind. Es muss nur vorhanden sein, wenn das [`rel`](#rel) einen Wert von `icon` oder einem nicht-standardmäßigen Typ wie Apples `apple-touch-icon` enthält. Es kann folgende Werte haben:
    - `any`, was bedeutet, dass das Symbol auf jede Größe skaliert werden kann, da es in einem Vektorformat wie `image/svg+xml` vorliegt.
    - eine durch Leerzeichen getrennte Liste von Größen, jede im Format `<Breite in Pixel>x<Höhe in Pixel>` oder `<Breite in Pixel>X<Höhe in Pixel>`. Jede dieser Größen muss in der Ressource enthalten sein.

    > [!NOTE]
    > Die meisten Symbolformate sind nur in der Lage, ein einzelnes Symbol zu speichern; daher enthält das [`sizes`](#sizes)-Attribut meist nur einen Eintrag. Das ICO-Format von Microsoft und das ICNS-Format von Apple können mehrere Symbolgrößen in einer einzigen Datei speichern. ICO hat eine bessere Browser-Unterstützung, daher sollten Sie dieses Format verwenden, wenn Cross-Browser-Unterstützung ein Anliegen ist.

- `title`
  - : Das `title`-Attribut hat besondere Semantik auf dem `<link>`-Element. Wenn es auf einem `<link rel="stylesheet">` verwendet wird, definiert es ein [Standard- oder alternatives Stylesheet](/de/docs/Web/HTML/Reference/Attributes/rel/alternate_stylesheet).
- `type`
  - : Dieses Attribut wird verwendet, um den Typ des verlinkten Inhalts zu definieren. Der Wert des Attributs sollte ein MIME-Typ wie **text/html**, **text/css** usw. sein. Der häufigste Gebrauch dieses Attributs ist, den Typ des referenzierten Stylesheets zu definieren (wie **text/css**), aber da CSS die einzige Stylesheet-Sprache ist, die im Web verwendet wird, ist es nicht nur möglich, das `type`-Attribut wegzulassen, sondern es wird jetzt auch empfohlen, es nicht zu verwenden. Es wird auch auf `rel="preload"`-Linktypen verwendet, um sicherzustellen, dass der Browser nur Dateitypen herunterlädt, die er unterstützt.

### Nicht-standardmäßige Attribute

- `target` {{Deprecated_Inline}}
  - : Definiert den Frame- oder Fensternamen, der die definierte Verknüpfungsbeziehung hat oder der die Darstellung einer beliebigen verlinkten Ressource zeigen wird.

### Veraltete Attribute

- `charset` {{deprecated_inline}}
  - : Dieses Attribut definiert die Zeichenkodierung der verlinkten Ressource. Der Wert ist eine durch Leerzeichen und/oder Kommas getrennte Liste von Zeichenkodierungen, wie in {{rfc(2045)}} definiert. Der Standardwert ist `iso-8859-1`.

    > [!NOTE]
    > Um denselben Effekt wie dieses veraltete Attribut zu erzielen, verwenden Sie den {{HTTPHeader("Content-Type")}} HTTP-Header auf der verlinkten Ressource.

- `rev` {{deprecated_inline}}
  - : Der Wert dieses Attributs zeigt die Beziehung des aktuellen Dokuments zum verlinkten Dokument an, wie durch das [`href`](#href)-Attribut definiert. Das Attribut definiert somit die umgekehrte Beziehung im Vergleich zu dem Wert des `rel`-Attributs. [Verknüpfungstypwerte](/de/docs/Web/HTML/Reference/Attributes/rel) für das Attribut sind ähnlich den möglichen Werten für [`rel`](#rel).

    > [!NOTE]
    > Anstelle von `rev` sollten Sie das [`rel`](#rel)-Attribut mit dem entgegengesetzten [Verknüpfungstypwert](/de/docs/Web/HTML/Reference/Attributes/rel) verwenden. Zum Beispiel, um den umgekehrten Link für `made` festzulegen, geben Sie `author` an. Außerdem steht dieses Attribut nicht für "Revision" und darf nicht mit einer Versionsnummer verwendet werden, auch wenn es von vielen Websites in dieser Weise missbraucht wird.

## Beispiele

### Einbindung eines Stylesheets

Um ein Stylesheet in einer Seite einzubinden, verwenden Sie die folgende Syntax:

```html
<link href="style.css" rel="stylesheet" />
```

### Bereitstellung alternativer Stylesheets

Sie können auch [alternative Stylesheets](/de/docs/Web/HTML/Reference/Attributes/rel/alternate_stylesheet) angeben.

Der Benutzer kann wählen, welches Stylesheet er verwenden möchte, indem er es im Menü **Ansicht > Seitenstil** auswählt. Dies bietet eine Möglichkeit für Benutzer, mehrere Versionen einer Seite zu sehen.

```html
<link href="default.css" rel="stylesheet" title="Default Style" />
<link href="fancy.css" rel="alternate stylesheet" title="Fancy" />
<link href="basic.css" rel="alternate stylesheet" title="Basic" />
```

### Bereitstellung von Symbolen für verschiedene Nutzungskontexte

Sie können Links zu mehreren Symbolen auf derselben Seite einfügen, und der Browser wählt das aus, das am besten zu seinem speziellen Kontext passt, indem er die `rel`- und `sizes`-Werte als Hinweise verwendet.

```html
<!-- iPad Pro with high-resolution Retina display: -->
<link
  rel="apple-touch-icon"
  sizes="167x167"
  href="/apple-touch-icon-167x167.png" />
<!-- 3x resolution iPhone: -->
<link
  rel="apple-touch-icon"
  sizes="180x180"
  href="/apple-touch-icon-180x180.png" />
<!-- non-Retina iPad, iPad mini, etc.: -->
<link
  rel="apple-touch-icon"
  sizes="152x152"
  href="/apple-touch-icon-152x152.png" />
<!-- 2x resolution iPhone and other devices: -->
<link rel="apple-touch-icon" href="/apple-touch-icon-120x120.png" />
<!-- basic favicon -->
<link rel="icon" href="/favicon.ico" />
```

Weitere Informationen darüber, welche `sizes` Sie für Apple-Symbole wählen sollten, finden Sie in [Apples Dokumentation zur Konfiguration von Web-Anwendungen](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW4) und den referenzierten [Apple human interface guidelines](https://developer.apple.com/design/human-interface-guidelines/app-icons#App-icon-sizes). In der Regel ist es ausreichend, ein großes Bild, wie 192x192, bereitzustellen und den Browser es bei Bedarf herunterzuskalieren zu lassen. Aber möglicherweise möchten Sie für verschiedene Größen Bilder mit unterschiedlichen Detailstufen gemäß der Apple-Design-Richtlinie bereitstellen. Bereitstellung von kleineren Icons für niedrigere Auflösungen spart auch Bandbreite.

Es kann nicht notwendig sein, überhaupt `<link>`-Elemente bereitzustellen. Zum Beispiel fordern Browser automatisch `/favicon.ico` aus dem Stammverzeichnis einer Seite an und Apple fordert auch automatisch `/apple-touch-icon-[size].png`, `/apple-touch-icon.png` usw. an. Jedoch schützt Sie die Bereitstellung expliziter Links vor Änderungen dieser Konventionen.

### Bedingtes Laden von Ressourcen mit Media Queries

Sie können einen Medientyp oder eine Mediensuche in einem `media`-Attribut angeben; diese Ressource wird dann nur geladen, wenn die Medienbedingung zutrifft. Zum Beispiel:

```html
<link href="print.css" rel="stylesheet" media="print" />
<link href="mobile.css" rel="stylesheet" media="all" />
<link href="desktop.css" rel="stylesheet" media="screen and (width >= 600px)" />
<link
  href="highres.css"
  rel="stylesheet"
  media="screen and (resolution >= 300dpi)" />
```

### Stylesheet-Lade-Ereignisse

Sie können feststellen, wann ein Stylesheet geladen wurde, indem Sie darauf warten, dass ein `load`-Ereignis darauf ausgelöst wird; in ähnlicher Weise können Sie feststellen, ob ein Fehler beim Verarbeiten eines Stylesheets aufgetreten ist, indem Sie auf ein `error`-Ereignis achten:

```html
<link rel="stylesheet" href="mystylesheet.css" id="my-stylesheet" />
```

```js
const stylesheet = document.getElementById("my-stylesheet");

stylesheet.onload = () => {
  // Do something interesting; the sheet has been loaded
};

stylesheet.onerror = () => {
  console.log("An error occurred loading the stylesheet!");
};
```

> [!NOTE]
> Das `load`-Ereignis wird ausgelöst, sobald das Stylesheet und sein gesamter importierter Inhalt geladen und geparst wurden, und unmittelbar bevor die Stile auf den Inhalt angewendet werden.

### Preload-Beispiele

Sie können eine Reihe von `<link rel="preload">`-Beispielen in [Inhalte mit `rel="preload"` voreladen](/de/docs/Web/HTML/Reference/Attributes/rel/preload) finden.

### Renderblockierung bis eine Ressource abgerufen wird

Sie können den `render`-Token in ein `blocking`-Attribut einfügen; der Renderprozess der Seite wird so lange blockiert, bis die Ressource und ihre kritischen Unterressourcen abgerufen und auf das Dokument angewendet wurden. Zum Beispiel:

```html
<link blocking="render" rel="stylesheet" href="example.css" crossorigin />
```

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th>
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        Metadateninhalt. Wenn <code><a href="/de/docs/Web/HTML/Reference/Global_attributes/itemprop">itemprop</a></code> vorhanden ist:
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">flussorientierter Inhalt</a> und
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">phrasierter Inhalt</a>.
      </td>
    </tr>
    <tr>
      <th>Erlaubter Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "void-Element")}}.</td>
    </tr>
    <tr>
      <th>Tag-Auslassung</th>
      <td>Muss ein Start-Tag haben und darf kein End-Tag haben.</td>
    </tr>
    <tr>
      <th>Erlaubte Eltern-Elemente</th>
      <td>
        Jedes Element, das Metadatenelemente akzeptiert. Wenn <a href="/de/docs/Web/HTML/Reference/Global_attributes/itemprop">itemprop</a> vorhanden ist: jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">phrasierenden Inhalt</a> akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/link_role"><code>link</code></a> mit <code>href</code>-Attribut</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Keine <code>role</code> erlaubt</td>
    </tr>
    <tr>
      <th>DOM-Schnittstelle</th>
      <td>[`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Link")}} HTTP-Header
- {{HTTPHeader("Referrer-Policy")}} HTTP-Header
