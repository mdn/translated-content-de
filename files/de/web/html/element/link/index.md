---
title: "<link>: Das External Resource Link-Element"
slug: Web/HTML/Element/link
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

Das **`<link>`** [HTML](/de/docs/Web/HTML)-Element spezifiziert die Beziehung zwischen dem aktuellen Dokument und einer externen Ressource.
Dieses Element wird am häufigsten verwendet, um auf {{Glossary("CSS", "Stylesheets")}} zu verweisen, es wird jedoch auch verwendet, um Website-Icons (sowohl "Favicon"-Icons als auch Icons für den Startbildschirm und Apps auf mobilen Geräten) festzulegen, unter anderem.

{{InteractiveExample("HTML Demo: &lt;link&gt;", "tabbed-shorter")}}

```html interactive-example
<link href="/shared-assets/misc/link-element-example.css" rel="stylesheet" />

<p>This text will be red as defined in the external stylesheet.</p>
<p style="color: blue">
  The <code>style</code> attribute can override it, though.
</p>
```

Um ein externes Stylesheet zu verlinken, würden Sie ein `<link>`-Element innerhalb Ihres {{HTMLElement("head")}} wie folgt einfügen:

```html
<link href="main.css" rel="stylesheet" />
```

Dieses Beispiel gibt den Pfad zum Stylesheet innerhalb eines `href`-Attributs und ein [`rel`](/de/docs/Web/HTML/Attributes/rel)-Attribut mit dem Wert `stylesheet` an. `rel` steht für "relationship" und ist eines der Hauptmerkmale des `<link>`-Elements — der Wert gibt an, wie das verlinkte Element mit dem enthaltenen Dokument zusammenhängt.

Es gibt eine Reihe anderer gängiger Typen, die Ihnen begegnen werden. Zum Beispiel ein Link zum Favicon der Site:

```html
<link rel="icon" href="favicon.ico" />
```

Es gibt eine Reihe weiterer Icon-`rel`-Werte, die hauptsächlich verwendet werden, um spezielle Icon-Typen für verschiedene mobile Plattformen zu kennzeichnen, z.B.:

```html
<link
  rel="apple-touch-icon"
  sizes="114x114"
  href="apple-icon-114.png"
  type="image/png" />
```

Das `sizes`-Attribut gibt die Icon-Größe an, während `type` den MIME-Typ der verlinkten Ressource enthält.
Diese bieten nützliche Hinweise, die es dem Browser ermöglichen, das passendste verfügbare Icon auszuwählen.

Sie können auch einen Medientyp oder eine Medienabfrage in einem `media`-Attribut angeben; diese Ressource wird dann nur geladen, wenn die Medienbedingung erfüllt ist. Zum Beispiel:

```html
<link href="print.css" rel="stylesheet" media="print" />
<link
  href="mobile.css"
  rel="stylesheet"
  media="screen and (max-width: 600px)" />
```

Einige interessante neue Leistungs- und Sicherheitsfunktionen wurden ebenfalls zum `<link>`-Element hinzugefügt. Sehen Sie sich dieses Beispiel an:

```html
<link
  rel="preload"
  href="myFont.woff2"
  as="font"
  type="font/woff2"
  crossorigin="anonymous" />
```

Ein `rel`-Wert von `preload` zeigt an, dass der Browser diese Ressource vorab laden soll (siehe [`rel="preload"`](/de/docs/Web/HTML/Attributes/rel/preload) für weitere Details), wobei das `as`-Attribut die spezifische Klasse des abzurufenden Inhalts angibt.
Das `crossorigin`-Attribut gibt an, ob die Ressource mit einer {{Glossary("CORS", "CORS")}}-Anfrage abgerufen werden soll.

Weitere Nutzungshinweise:

- Ein `<link>`-Element kann entweder im {{HTMLElement("head")}} oder im {{HTMLElement("body")}}-Element vorkommen, abhängig davon, ob es einen [link type](https://html.spec.whatwg.org/multipage/links.html#body-ok) hat, der als **body-ok** gilt.
  Zum Beispiel ist der `stylesheet`-Linktyp body-ok, und daher ist `<link rel="stylesheet">` im Body erlaubt.
  Dies ist jedoch keine gute Praxis; es macht mehr Sinn, Ihre `<link>`-Elemente von Ihrem Body-Inhalt zu trennen und sie in den `<head>` zu setzen.
- Wenn Sie `<link>` verwenden, um ein Favicon für eine Site festzulegen, und Ihre Site eine Content Security Policy (CSP) zur Verbesserung ihrer Sicherheit verwendet, gilt die Richtlinie für das Favicon.
  Wenn Sie Probleme mit dem Laden des Favicons haben, überprüfen Sie, dass die {{HTTPHeader("Content-Security-Policy")}}-Richtlinie nicht durch eine [`img-src` Direktive](/de/docs/Web/HTTP/Headers/Content-Security-Policy/img-src) den Zugriff verhindert.
- Die HTML- und XHTML-Spezifikationen definieren Ereignishandler für das `<link>`-Element, es ist jedoch unklar, wie sie verwendet werden würden.
- Unter XHTML 1.0 erfordern {{Glossary("void_element", "void elements")}} wie `<link>` einen abschließenden Schrägstrich: `<link />`.
- WebTV unterstützt die Verwendung des Wertes `next` für `rel`, um die nächste Seite in einer Dokumentserie vorab zu laden.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `as`

  - : Dieses Attribut ist erforderlich, wenn [`rel="preload"`](/de/docs/Web/HTML/Attributes/rel/preload) auf dem `<link>`-Element festgelegt wurde, optional, wenn [`rel="modulepreload"`](/de/docs/Web/HTML/Attributes/rel/modulepreload) festgelegt wurde, und sollte ansonsten nicht verwendet werden.
    Es gibt den Typ des Inhalts an, der vom `<link>` geladen wird, was für die Anforderungsabstimmung, die Anwendung der korrekten [Content Security Policy](/de/docs/Web/HTTP/CSP) und das Setzen des korrekten {{HTTPHeader("Accept")}}-Anforderungsheaders erforderlich ist.

    Darüber hinaus verwendet `rel="preload"` dieses als Signal zur Anforderungspriorisierung.
    Die folgende Tabelle listet die gültigen Werte für dieses Attribut und die Elemente oder Ressourcen auf, auf die sie angewendet werden.

    <table class="standard-table">
      <thead>
        <tr>
          <th scope="col">Wert</th>
          <th scope="col">Gilt für</th>
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
                <strong>Note:</strong> Dieser Wert erfordert, dass
                <code>&#x3C;link></code> das crossorigin-Attribut enthält, siehe <a href="/de/docs/Web/HTML/Attributes/rel/preload#cors-enabled_fetches">CORS-aktivierte Abrufe</a>.
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
                <strong>Note:</strong> Dieser Wert erfordert, dass
                <code>&#x3C;link></code> das crossorigin-Attribut enthält, siehe <a href="/de/docs/Web/HTML/Attributes/rel/preload#cors-enabled_fetches">CORS-aktivierte Abrufe</a>.
              </p>
            </div>
          </td>
        </tr>
        <tr>
          <td>image</td>
          <td>
            <code>&#x3C;img></code> und <code>&#x3C;picture></code>-Elemente mit
            srcset- oder imageset-Attributen, SVG <code>&#x3C;image></code>-Elemente,
            CSS <code>*-image</code>-Regeln
          </td>
        </tr>
        <tr>
          <td>object</td>
          <td><code>&#x3C;object></code>-Elemente</td>
        </tr>
        <tr>
          <td>script</td>
          <td>
            <code>&#x3C;script></code>-Elemente, Worker <code>importScripts</code>
          </td>
        </tr>
        <tr>
          <td>style</td>
          <td>
            <code>&#x3C;link rel=stylesheet></code>-Elemente, CSS
            <code>@import</code>
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

  - : Dieses Attribut gibt explizit an, dass bestimmte Operationen beim Abrufen einer externen Ressource blockiert werden sollen. Es darf nur verwendet werden, wenn das `rel`-Attribut die Schlüsselwörter `expect` oder `stylesheet` enthält. Die zu blockierenden Operationen müssen eine durch Leerzeichen getrennte Liste der unten aufgeführten Blocking-Tokens sein.
    - `render`: Das Rendering von Inhalten auf dem Bildschirm wird blockiert.

- [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)

  - : Dieses {{Glossary("Enumerated", "enumerated")}} Attribut zeigt an, ob {{Glossary("CORS", "CORS")}} beim Abrufen der Ressource verwendet werden muss.
    [CORS-aktivierte Bilder](/de/docs/Web/HTML/CORS_enabled_image) können im {{HTMLElement("canvas")}}-Element ohne "Verunreinigung" wiederverwendet werden.
    Die zulässigen Werte sind:

    - `anonymous`
      - : Eine Cross-Origin-Anfrage (d.h. mit einem {{HTTPHeader("Origin")}} HTTP-Header) wird durchgeführt, aber es werden keine Anmeldedaten gesendet (d.h. kein Cookie, X.509-Zertifikat oder HTTP-Basisauthentifizierung).
        Wenn der Server keine Anmeldedaten an die Origin-Site gibt (indem er den {{HTTPHeader("Access-Control-Allow-Origin")}} HTTP-Header nicht setzt), wird die Ressource verunreinigt und ihre Nutzung eingeschränkt.
    - `use-credentials`
      - : Eine Cross-Origin-Anfrage (d.h. mit einem `Origin` HTTP-Header) wird zusammen mit einer Anmeldedatenübermittlung durchgeführt (d.h. ein Cookie, Zertifikat und/oder HTTP-Basisauthentifizierung wird durchgeführt).
        Wenn der Server keine Anmeldedaten an die Origin-Site gibt (durch den {{HTTPHeader("Access-Control-Allow-Credentials")}} HTTP-Header), wird die Ressource "verunreinigt" und ihre Nutzung eingeschränkt.

    Wenn das Attribut nicht vorhanden ist, wird die Ressource ohne eine {{Glossary("CORS", "CORS")}}-Anfrage abgerufen (d.h. ohne den `Origin` HTTP-Header zu senden), was ihre unverunreinigte Nutzung verhindert. Wenn ungültig, wird es behandelt, als ob das aufgelistete Schlüsselwort **anonymous** verwendet wurde.
    Siehe [CORS-Einstellungen Attribute](/de/docs/Web/HTML/Attributes/crossorigin) für zusätzliche Informationen.

- `disabled`

  - : Nur für `rel="stylesheet"`, das `disabled`-Boolean-Attribut gibt an, ob das beschriebene Stylesheet geladen und auf das Dokument angewendet werden soll.
    Wenn `disabled` im HTML angegeben ist, wenn es geladen wird, wird das Stylesheet während des Seitenladens nicht geladen.
    Stattdessen wird das Stylesheet bei Bedarf geladen, wenn und wenn das `disabled`-Attribut auf `false` geändert oder entfernt wird.

    Das Setzen der `disabled`-Eigenschaft im DOM führt dazu, dass das Stylesheet aus der [`Document.styleSheets`](/de/docs/Web/API/Document/styleSheets)-Liste des Dokuments entfernt wird.

- `fetchpriority`

  - : Bietet einen Hinweis auf die relative Priorität, die beim Abrufen einer Ressource eines bestimmten Typs verwendet werden soll.
    Zulässige Werte:

    - `high`
      - : Rufen Sie die Ressource mit hoher Priorität im Verhältnis zu anderen Ressourcen desselben Typs ab.
    - `low`
      - : Rufen Sie die Ressource mit niedriger Priorität im Verhältnis zu anderen Ressourcen desselben Typs ab.
    - `auto`
      - : Geben Sie keine Präferenz für die Abrufpriorität an.
        Dies ist der Standard.
        Es wird verwendet, wenn kein Wert oder ein ungültiger Wert festgelegt ist.

    Siehe [`HTMLLinkElement.fetchPriority`](/de/docs/Web/API/HTMLLinkElement/fetchPriority) für weitere Informationen.

- `href`
  - : Dieses Attribut gibt die {{Glossary("URL", "URL")}} der verlinkten Ressource an. Eine URL kann absolut oder relativ sein.
- `hreflang`
  - : Dieses Attribut gibt die Sprache der verlinkten Ressource an.
    Es ist rein beratend.
    Zulässige Werte sind durch {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}} angegeben.
    Verwenden Sie dieses Attribut nur, wenn das [`href`](/de/docs/Web/HTML/Element/a#href)-Attribut vorhanden ist.
- `imagesizes`
  - : Nur für `rel="preload"` und `as="image"`, das `imagesizes`-Attribut hat eine ähnliche Syntax und Semantik wie das [`sizes`](/de/docs/Web/HTML/Element/img#sizes)-Attribut, das anzeigt, dass die entsprechende Ressource vorab geladen werden soll, die von einem `img`-Element mit entsprechenden Werten für seine `srcset`- und `sizes`-Attribute verwendet wird.
- `imagesrcset`
  - : Nur für `rel="preload"` und `as="image"`, das `imagesrcset`-Attribut hat eine ähnliche Syntax und Semantik wie das [`srcset`](/de/docs/Web/HTML/Element/img#srcset)-Attribut, das anzeigt, dass die entsprechende Ressource vorab geladen werden soll, die von einem `img`-Element mit entsprechenden Werten für seine `srcset`- und `sizes`-Attribute verwendet wird.
- `integrity`
  - : Enthält Inline-Metadaten — einen base64-codierten kryptografischen Hash der Ressource (Datei), die Sie dem Browser zum Abrufen angeben.
    Der Browser kann dies verwenden, um zu überprüfen, dass die abgerufene Ressource ohne unerwartete Manipulationen geliefert wurde.
    Das Attribut muss nur angegeben werden, wenn das `rel`-Attribut auf `stylesheet`, `preload` oder `modulepreload` gesetzt ist.
    Siehe [Subressourcen-Integrität](/de/docs/Web/Security/Subresource_Integrity).
- `media`

  - : Dieses Attribut gibt die Medien an, auf die die verlinkte Ressource angewendet wird. Sein Wert muss ein Medientyp oder [Medienabfrage](/de/docs/Web/CSS/CSS_media_queries) sein.
    Dieses Attribut ist hauptsächlich nützlich, wenn auf externe Stylesheets verwiesen wird — es ermöglicht dem Benutzeragenten, das am besten angepasste für das Gerät auszuwählen, auf dem es läuft.

- `referrerpolicy`

  - : Ein String, der angibt, welchen Referrer beim Abrufen der Ressource verwendet werden soll:

    - `no-referrer` bedeutet, dass der {{HTTPHeader("Referer")}}-Header nicht gesendet wird.
    - `no-referrer-when-downgrade` bedeutet, dass kein {{HTTPHeader("Referer")}}-Header gesendet wird, wenn auf einen Ursprung ohne TLS (HTTPS) navigiert wird.
      Dies ist das Standardverhalten eines Benutzeragenten, wenn keine Richtlinie anderweitig angegeben ist.
    - `origin` bedeutet, dass der Referrer der Ursprung der Seite sein wird, was ungefähr dem Schema, dem Host und dem Port entspricht.
    - `origin-when-cross-origin` bedeutet, dass bei der Navigation zu anderen Ursprüngen auf das Schema, den Host und den Port beschränkt wird, während die Navigation im selben Ursprung den Pfad des Referrers enthält.
    - `unsafe-url` bedeutet, dass der Referrer den Ursprung und den Pfad (aber nicht das Fragment, das Passwort oder den Benutzernamen) umfassen wird.
      Dieser Fall ist unsicher, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge leaken kann.

- [`rel`](/de/docs/Web/HTML/Attributes/rel)
  - : Dieses Attribut benennt eine Beziehung des verlinkten Dokuments zum aktuellen Dokument. Das Attribut muss eine durch Leerzeichen getrennte Liste von [Link-Typ-Werten](/de/docs/Web/HTML/Attributes/rel) sein.
- `sizes`

  - : Dieses Attribut definiert die Größen der Icons für visuelle Medien, die in der Ressource enthalten sind.
    Es muss nur vorhanden sein, wenn das [`rel`](#rel) einen Wert von `icon` oder einen nicht standardmäßigen Typ wie Apples `apple-touch-icon` enthält.
    Es kann die folgenden Werte haben:

    - `any`, was bedeutet, dass das Icon auf jede Größe skaliert werden kann, da es in einem Vektorformat wie `image/svg+xml` vorliegt.
    - eine durch Leerzeichen getrennte Liste von Größen, jede im Format `<Breite in Pixel>x<Höhe in Pixel>` oder `<Breite in Pixel>X<Höhe in Pixel>`. Jede dieser Größen muss in der Ressource enthalten sein.

    > [!NOTE]
    > Die meisten Icon-Formate können nur ein einzelnes Icon speichern; daher enthält das [`sizes`](#sizes)-Attribut meist nur einen Eintrag.
    > Microsofts ICO-Format und Apples ICNS-Format können mehrere Icon-Größen in einer einzigen Datei speichern. ICO hat eine bessere Browser-Unterstützung, daher sollten Sie dieses Format verwenden, wenn eine plattformübergreifende Unterstützung wichtig ist.

- `title`
  - : Das `title`-Attribut hat besondere Semantik auf dem `<link>`-Element.
    Wenn es auf einem `<link rel="stylesheet">` verwendet wird, definiert es ein [Standard- oder ein alternatives Stylesheet](/de/docs/Web/HTML/Attributes/rel/alternate_stylesheet).
- `type`
  - : Dieses Attribut wird verwendet, um den Typ der verlinkten Inhalte zu definieren.
    Der Wert des Attributs sollte ein MIME-Type sein, wie **text/html**, **text/css** und so weiter.
    Der übliche Gebrauch dieses Attributs ist es, den Typ des referenzierten Stylesheets zu definieren (wie **text/css**), aber da CSS die einzige Stylesheetsprache ist, die im Web verwendet wird, ist es nicht nur möglich, das `type`-Attribut wegzulassen, sondern es ist tatsächlich jetzt empfohlene Praxis.
    Es wird auch bei `rel="preload"`-Linktypen verwendet, um sicherzustellen, dass der Browser nur Dateitypen herunterlädt, die er unterstützt.

### Nicht-standard Attribute

- `target` {{deprecated_inline}}
  - : Definiert den Frame- oder Fensternamen, der die definierte Verlinkungsbeziehung hat oder der das Rendering der verlinkten Ressource anzeigen wird.

### Veraltete Attribute

- `charset` {{deprecated_inline}}

  - : Dieses Attribut definiert die Zeichencodierung der verlinkten Ressource.
    Der Wert ist eine durch Leerzeichen und/oder Kommas getrennte Liste von Zeichensätzen, wie in {{rfc(2045)}} definiert.
    Der Standardwert ist `iso-8859-1`.

    > [!NOTE]
    > Um denselben Effekt wie bei diesem veralteten Attribut zu erzielen, verwenden Sie den {{HTTPHeader("Content-Type")}} HTTP-Header auf der verlinkten Ressource.

- `rev` {{deprecated_inline}}

  - : Der Wert dieses Attributs zeigt die Beziehung des aktuellen Dokuments zum verlinkten Dokument, wie durch das [`href`](#href)-Attribut definiert.
    Das Attribut definiert somit die umgekehrte Beziehung im Vergleich zum Wert des `rel`-Attributs.
    [Linktypen-Werte](/de/docs/Web/HTML/Attributes/rel) für das Attribut sind ähnlich den möglichen Werten für [`rel`](#rel).

    > [!NOTE]
    > Anstelle von `rev` sollten Sie das [`rel`](#rel)-Attribut mit dem gegenteiligen [Linktypen-Wert](/de/docs/Web/HTML/Attributes/rel) verwenden.
    > Zum Beispiel, um den Rücklink für `made` zu etablieren, geben Sie `author` an. Außerdem steht dieses Attribut nicht für "Revision" und darf nicht mit einer Versionsnummer verwendet werden, obwohl viele Sites es auf diese Weise missbrauchen.

## Beispiele

### Einbinden eines Stylesheets

Um ein Stylesheet in eine Seite einzubinden, verwenden Sie die folgende Syntax:

```html
<link href="style.css" rel="stylesheet" />
```

### Bereitstellung alternativer Stylesheets

Sie können auch [alternative Stylesheets](/de/docs/Web/HTML/Attributes/rel/alternate_stylesheet) angeben.

Der Benutzer kann auswählen, welches Stylesheet verwendet werden soll, indem er es aus dem Menü **Ansicht > Seitenstil** auswählt.
Dies bietet eine Möglichkeit, für Benutzer mehrere Versionen einer Seite anzuzeigen.

```html
<link href="default.css" rel="stylesheet" title="Default Style" />
<link href="fancy.css" rel="alternate stylesheet" title="Fancy" />
<link href="basic.css" rel="alternate stylesheet" title="Basic" />
```

### Bereitstellung von Icons für verschiedene Nutzungskontexte

Sie können Links zu mehreren Icons auf derselben Seite einfügen, und der Browser wählt je nach Kontext, welches am besten geeignet ist, basierend auf den `rel`- und `sizes`-Werten als Hinweise.

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

Für Informationen darüber, welche `sizes` für Apple-Icons ausgewählt werden sollen, sehen Sie [Apples Dokumentation zur Konfiguration von Webanwendungen](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW4) und die referenzierten [Apple human interface guidelines](https://developer.apple.com/design/human-interface-guidelines/app-icons#App-icon-sizes). In der Regel reicht es aus, ein großes Bild wie 192x192 bereitzustellen und den Browser es bei Bedarf herunterskalieren zu lassen, aber Sie möchten möglicherweise Bilder mit unterschiedlichen Detailstufen für verschiedene Größen bereitstellen, wie es die Apple-Design-Richtliniegängig empfiehlt. Kleinere Icons für niedrigere Auflösungen bereitzustellen spart auch Bandbreite.

Es kann nicht notwendig sein, `<link>`-Elemente überhaupt bereitzustellen. Zum Beispiel fordern Browser automatisch `/favicon.ico` vom Stamm einer Site an, und Apple fordert auch automatisch `/apple-touch-icon-[size].png`, `/apple-touch-icon.png` usw. an. Das Bereitstellen von expliziten Links schützt jedoch vor Änderungen dieser Konventionen.

### Bedingtes Laden von Ressourcen mit Media Queries

Sie können einen Medientyp oder eine Abfrage in einem `media`-Attribut angeben;
diese Ressource wird dann nur geladen, wenn die Medienbedingung wahr ist. Zum Beispiel:

```html
<link href="print.css" rel="stylesheet" media="print" />
<link href="mobile.css" rel="stylesheet" media="all" />
<link
  href="desktop.css"
  rel="stylesheet"
  media="screen and (min-width: 600px)" />
<link
  href="highres.css"
  rel="stylesheet"
  media="screen and (min-resolution: 300dpi)" />
```

### Stylesheet-Ladeereignisse

Sie können feststellen, wann ein Stylesheet geladen wurde, indem Sie ein `load`-Ereignis darauf beobachten; ähnlich können Sie feststellen, ob ein Fehler beim Verarbeiten eines Stylesheets aufgetreten ist, indem Sie ein `error`-Ereignis beobachten:

```html
<link rel="stylesheet" href="mystylesheet.css" id="my-stylesheet" />

<script>
  const stylesheet = document.getElementById("my-stylesheet");

  stylesheet.onload = () => {
    // Do something interesting; the sheet has been loaded
  };

  stylesheet.onerror = () => {
    console.log("An error occurred loading the stylesheet!");
  };
</script>
```

> [!NOTE]
> Das `load`-Ereignis wird ausgelöst, sobald das Stylesheet und alle importierten Inhalte geladen und analysiert wurden, und direkt bevor die Stile auf den Inhalt angewendet werden.

### Beispiele zum Vorabladen

Sie finden eine Reihe von `<link rel="preload">`-Beispielen in [Inhalte mit `rel="preload"` vorladen](/de/docs/Web/HTML/Attributes/rel/preload).

### Rendering blockieren, bis eine Ressource abgerufen wird

Sie können das Token `render` in einem `blocking`-Attribut einschließen;
das Rendering der Seite wird blockiert, bis die Ressource abgerufen wird. Zum Beispiel:

```html
<link blocking="render" rel="stylesheet" href="example.css" crossorigin />
```

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th>
        <a href="/de/docs/Web/HTML/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        Metadateninhalte.
        Wenn <code><a href="/de/docs/Web/HTML/Global_attributes/itemprop">itemprop</a></code> vorhanden ist:
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Fließinhalte</a> und
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Phraseninhalte</a>.
      </td>
    </tr>
    <tr>
      <th>Erlaubte Inhalte</th>
      <td>Keine; es ist ein {{Glossary("void_element", "void element")}}.</td>
    </tr>
    <tr>
      <th>Tag-Auslassung</th>
      <td>Muss einen Start-Tag haben und darf keinen End-Tag haben.</td>
    </tr>
    <tr>
      <th>Erlaubte Eltern</th>
      <td>
        Jedes Element, das Metadaten-Elemente akzeptiert.
        Wenn <a href="/de/docs/Web/HTML/Global_attributes/itemprop">itemprop</a> vorhanden ist: jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Phraseninhalte</a> akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td><a href="/de/docs/Web/Accessibility/ARIA/Roles/link_role"><code>link</code></a> mit <code>href</code>-Attribut</td>
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
