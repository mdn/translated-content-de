---
title: "<link>: Das External Resource Link Element"
slug: Web/HTML/Element/link
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{HTMLSidebar}}

Das **`<link>`**-[HTML](/de/docs/Web/HTML)-Element spezifiziert die Beziehungen zwischen dem aktuellen Dokument und einer externen Ressource. Dieses Element wird am häufigsten zum Verlinken von {{Glossary("CSS", "Stylesheets")}} verwendet, aber es wird auch eingesetzt, um Site-Icons (sowohl "favicon"-Style-Icons als auch Icons für den Home-Bildschirm und Apps auf mobilen Geräten) zu etablieren, unter anderem.

{{InteractiveExample("HTML Demo: &lt;link&gt;", "tabbed-shorter")}}

```html interactive-example
<link href="/shared-assets/misc/link-element-example.css" rel="stylesheet" />

<p>This text will be red as defined in the external stylesheet.</p>
<p style="color: blue">
  The <code>style</code> attribute can override it, though.
</p>
```

Um ein externes Stylesheet zu verknüpfen, fügen Sie ein `<link>`-Element in Ihren {{HTMLElement("head")}} wie folgt ein:

```html
<link href="main.css" rel="stylesheet" />
```

Dieses Beispiel gibt den Pfad zum Stylesheet im `href`-Attribut und ein [`rel`](/de/docs/Web/HTML/Attributes/rel)-Attribut mit dem Wert `stylesheet` an. Das `rel` steht für "relationship" (Beziehung) und ist eine der zentralen Eigenschaften des `<link>`-Elements — der Wert zeigt an, wie das verlinkte Element mit dem enthaltenden Dokument in Beziehung steht.

Es gibt eine Reihe anderer gängiger Typen, die Sie antreffen werden. Zum Beispiel ein Link zum Favicon der Seite:

```html
<link rel="icon" href="favicon.ico" />
```

Es gibt eine Reihe weiterer `rel`-Werte für Icons, die hauptsächlich dazu genutzt werden, spezielle Icon-Typen für verschiedene mobile Plattformen anzugeben, z.B.:

```html
<link
  rel="apple-touch-icon"
  sizes="114x114"
  href="apple-icon-114.png"
  type="image/png" />
```

Das `sizes`-Attribut gibt die Icon-Größe an, während `type` den MIME-Typ der verlinkten Ressource enthält. Diese Attribute bieten nützliche Hinweise, damit der Browser das geeignetste verfügbare Icon auswählen kann.

Sie können auch einen Medientyp oder eine -abfrage innerhalb eines `media`-Attributs angeben; diese Ressource wird dann nur geladen, wenn die Medienbedingung erfüllt ist. Zum Beispiel:

```html
<link href="print.css" rel="stylesheet" media="print" />
<link
  href="mobile.css"
  rel="stylesheet"
  media="screen and (max-width: 600px)" />
```

Einige interessante neue Leistungs- und Sicherheitsmerkmale wurden ebenfalls zum `<link>`-Element hinzugefügt. Nehmen Sie dieses Beispiel:

```html
<link
  rel="preload"
  href="myFont.woff2"
  as="font"
  type="font/woff2"
  crossorigin="anonymous" />
```

Ein `rel`-Wert von `preload` gibt an, dass der Browser diese Ressource vorab laden soll (siehe [`rel="preload"`](/de/docs/Web/HTML/Attributes/rel/preload) für mehr Details), wobei das `as`-Attribut die spezifische Klasse des geladenen Inhalts angibt. Das `crossorigin`-Attribut zeigt an, ob die Ressource mit einer {{Glossary("CORS", "CORS")}}-Anfrage abgerufen werden soll.

Weitere Nutzungshinweise:

- Ein `<link>`-Element kann sowohl im {{HTMLElement("head")}} als auch im {{HTMLElement("body")}}-Element vorkommen, abhängig davon, ob es einen [Link-Typ](https://html.spec.whatwg.org/multipage/links.html#body-ok) hat, der **body-ok** ist. Zum Beispiel ist der `stylesheet` Link-Typ body-ok, und daher ist `<link rel="stylesheet">` im Body erlaubt. Dies ist jedoch keine gute Praxis; es macht mehr Sinn, Ihre `<link>`-Elemente vom Body-Inhalt zu trennen und in den `<head>` zu setzen.
- Wenn Sie `<link>` verwenden, um ein Favicon für eine Site festzulegen, und Ihre Site eine Content Security Policy (CSP) zur Verbesserung der Sicherheit verwendet, gilt die Richtlinie für das Favicon. Sollten Probleme bei der Ladefähigkeit des Favicon auftreten, überprüfen Sie, ob die {{HTTPHeader("Content-Security-Policy")}}-Header-Definition [`img-src` directive](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/img-src) den Zugriff darauf nicht verhindert.
- Die HTML- und XHTML-Spezifikationen definieren Event-Handler für das `<link>`-Element, aber es ist unklar, wie sie verwendet werden sollten.
- In XHTML 1.0 erfordern {{Glossary("void_element", "void elements")}} wie `<link>` einen abschließenden Slash: `<link />`.
- WebTV unterstützt die Nutzung des Wertes `next` für `rel`, um die nächste Seite in einer Dokumentsammlung vorab zu laden.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `as`

  - : Dieses Attribut ist erforderlich, wenn [`rel="preload"`](/de/docs/Web/HTML/Attributes/rel/preload) auf dem `<link>`-Element gesetzt wurde, optional, wenn [`rel="modulepreload"`](/de/docs/Web/HTML/Attributes/rel/modulepreload) gesetzt wurde, und ansonsten sollte es nicht verwendet werden. Es spezifiziert den Typ des vom `<link>`-Element geladenen Inhalts, was für das Anfordern von Übereinstimmungen, die Anwendung der korrekten [Content-Security-Policy](/de/docs/Web/HTTP/Guides/CSP) und die Einstellung des korrekten {{HTTPHeader("Accept")}}-Request-Headers notwendig ist.

    Darüber hinaus verwendet `rel="preload"` dies als Signal für die Priorisierung von Anfragen. Die Tabelle unten listet die gültigen Werte für dieses Attribut und die Elemente oder Ressourcen, auf die sie zutreffen.

    <table class="standard-table">
      <thead>
        <tr>
          <th scope="col">Wert</th>
          <th scope="col">Anwendbar auf</th>
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
                <code>&#x3C;link></code> das crossorigin-Attribut enthält, siehe <a href="/de/docs/Web/HTML/Attributes/rel/preload#cors-enabled_fetches">CORS-fähige Abrufe</a>.
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
                <code>&#x3C;link></code> das crossorigin-Attribut enthält, siehe <a href="/de/docs/Web/HTML/Attributes/rel/preload#cors-enabled_fetches">CORS-fähige Abrufe</a>.
              </p>
            </div>
          </td>
        </tr>
        <tr>
          <td>image</td>
          <td>
            <code>&#x3C;img></code> und <code>&#x3C;picture></code>-Elemente mit
            srcset- oder imageset-Attributen, SVG <code>&#x3C;image></code>-Elemente,
            CSS <code>*-image</code> Regeln
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

  - : Dieses Attribut gibt explizit an, dass bestimmte Operationen beim Abrufen einer externen Ressource blockiert werden sollen. Es darf nur verwendet werden, wenn das `rel`-Attribut `expect` oder `stylesheet`-Schlüsselwörter enthält. Die zu blockierenden Operationen müssen eine durch Leerzeichen getrennte Liste der unten aufgeführten Blockierungstoken sein.
    - `render`: Das Rendern von Inhalten auf dem Bildschirm wird blockiert.

- [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)

  - : Dieses {{Glossary("Enumerated", "enumerierte")}} Attribut gibt an, ob {{Glossary("CORS", "CORS")}} beim Abrufen der Ressource verwendet werden muss. [CORS-fähige Bilder](/de/docs/Web/HTML/CORS_enabled_image) können im {{HTMLElement("canvas")}}-Element wiederverwendet werden, ohne _verfälscht_ zu werden. Die erlaubten Werte sind:

    - `anonymous`
      - : Eine Cross-Origin-Anfrage (d.h. mit einem {{HTTPHeader("Origin")}}-HTTP-Header) wird durchgeführt, aber es werden keine Anmeldeinformationen gesendet (d.h. kein Cookie, X.509-Zertifikat oder HTTP-Basisauthentifizierung).
        Wenn der Server keine Anmeldeinformationen an die Ursprungsseite gibt (indem er den {{HTTPHeader("Access-Control-Allow-Origin")}}-HTTP-Header nicht setzt), wird die Ressource verfälscht und ihre Nutzung eingeschränkt.
    - `use-credentials`
      - : Es wird eine Cross-Origin-Anfrage (d.h. mit einem `Origin`-HTTP-Header) zusammen mit den Anmeldeinformationen gesendet (d.h. es wird ein Cookie, Zertifikat und/oder HTTP-Basisauthentifizierung durchgeführt).
        Wenn der Server keine Anmeldeinformationen an die Ursprungsseite gibt (durch {{HTTPHeader("Access-Control-Allow-Credentials")}}-HTTP-Header), wird die Ressource _verfälscht_ und ihre Nutzung eingeschränkt.

    Wenn das Attribut nicht vorhanden ist, wird die Ressource ohne eine {{Glossary("CORS", "CORS")}}-Anfrage abgerufen (d.h. ohne den `Origin`-HTTP-Header zu senden), was ihre unverfälschte Nutzung verhindert. Wenn es ungültig ist, wird es so behandelt, als ob das enumerierte Schlüsselwort **anonymous** verwendet wurde. Siehe [CORS-Einstellung-Attribute](/de/docs/Web/HTML/Attributes/crossorigin) für zusätzliche Informationen.

- `disabled`

  - : Nur bei `rel="stylesheet"`, das `disabled`-Boolean-Attribut gibt an, ob das beschriebene Stylesheet geladen und auf das Dokument angewendet werden soll. Wenn `disabled` im HTML angegeben ist, wenn es geladen wird, wird das Stylesheet nicht während der Seitenladezeit geladen. Stattdessen wird das Stylesheet bei Bedarf geladen, wenn und wann das `disabled`-Attribut auf `false` geändert oder entfernt wird.

    Das Setzen der `disabled`-Eigenschaft im DOM bewirkt, dass das Stylesheet aus der Liste der [`Document.styleSheets`](/de/docs/Web/API/Document/styleSheets) des Dokuments entfernt wird.

- `fetchpriority`

  - : Gibt einen Hinweis auf die relative Priorität, die verwendet werden soll, wenn eine Ressource eines bestimmten Typs abgerufen wird.
    Erlaubte Werte:

    - `high`
      - : Ruft die Ressource mit hoher Priorität im Vergleich zu anderen Ressourcen desselben Typs ab.
    - `low`
      - : Ruft die Ressource mit niedriger Priorität im Vergleich zu anderen Ressourcen desselben Typs ab.
    - `auto`
      - : Setzt keine Präferenz für die Abrufpriorität fest. Dies ist die Standardeinstellung. Sie wird verwendet, wenn kein Wert oder ein ungültiger Wert gesetzt ist.

    Weitere Informationen finden Sie unter [`HTMLLinkElement.fetchPriority`](/de/docs/Web/API/HTMLLinkElement/fetchPriority).

- `href`
  - : Dieses Attribut gibt die {{Glossary("URL", "URL")}} der verlinkten Ressource an. Eine URL kann absolut oder relativ sein.
- `hreflang`
  - : Dieses Attribut gibt die Sprache der verlinkten Ressource an. Es ist rein informativ. Erlaubte Werte sind in {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}} festgelegt. Verwenden Sie dieses Attribut nur, wenn das [`href`](/de/docs/Web/HTML/Element/a#href)-Attribut vorhanden ist.
- `imagesizes`
  - : Nur für `rel="preload"` und `as="image"`, das `imagesizes`-Attribut hat eine ähnliche Syntax und Semantik wie das [`sizes`](/de/docs/Web/HTML/Element/img#sizes)-Attribut, das angibt, die geeignete Ressource vorzuladen, die von einem `img`-Element mit entsprechenden Werten für seine `srcset`- und `sizes`-Attribute verwendet wird.
- `imagesrcset`
  - : Nur für `rel="preload"` und `as="image"`, das `imagesrcset`-Attribut hat eine ähnliche Syntax und Semantik wie das [`srcset`](/de/docs/Web/HTML/Element/img#srcset)-Attribut, das angibt, die geeignete Ressource vorzuladen, die von einem `img`-Element mit entsprechenden Werten für seine `srcset`- und `sizes`-Attribute verwendet wird.
- `integrity`
  - : Enthält Inline-Metadaten — einen Base64-kodierten kryptografischen Hash der Ressource (Datei), die Sie dem Browser zum Abrufen mitteilen. Der Browser kann dies verwenden, um zu überprüfen, ob die abgerufene Ressource ohne unerwartete Manipulationen geliefert wurde. Das Attribut darf nur angegeben werden, wenn das `rel`-Attribut auf `stylesheet`, `preload` oder `modulepreload` gesetzt ist. Siehe [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity).
- `media`

  - : Dieses Attribut spezifiziert die Medien, auf die die verlinkte Ressource zutrifft. Sein Wert muss ein Medientyp / [Media Query](/de/docs/Web/CSS/CSS_media_queries) sein. Dieses Attribut ist hauptsächlich nützlich beim Verlinken zu externen Stylesheets — es ermöglicht dem Nutzeragenten, das am besten angepasste herauszusuchen, für das Gerät, auf dem es läuft.

- `referrerpolicy`

  - : Ein String, der angibt, welchen Referrer beim Abrufen der Ressource verwendet werden soll:

    - `no-referrer` bedeutet, dass der {{HTTPHeader("Referer")}}-Header nicht gesendet wird.
    - `no-referrer-when-downgrade` bedeutet, dass kein {{HTTPHeader("Referer")}}-Header gesendet wird, wenn auf eine Ursprungsseite ohne TLS (HTTPS) navigiert wird. Dies ist das Standardverhalten eines Nutzeragenten, wenn keine Richtlinie anderweitig angegeben ist.
    - `origin` bedeutet, dass der Referrer der Ursprungsseite entspricht, was ungefähr dem Schema, dem Host und dem Port entspricht.
    - `origin-when-cross-origin` bedeutet, dass bei der Navigation zu anderen Ursprüngen auf das Schema, den Host und den Port beschränkt wird, während bei der Navigation auf demselben Ursprung der Pfad des Referrers enthalten ist.
    - `unsafe-url` bedeutet, dass der Referrer das Ursprungs- und den Pfad (aber nicht das Fragment, Passwort oder den Benutzernamen) enthält. Dieser Fall ist unsicher, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge lecken kann.

- [`rel`](/de/docs/Web/HTML/Attributes/rel)
  - : Dieses Attribut bezeichnet eine Beziehung des verlinkten Dokuments zum aktuellen Dokument. Das Attribut muss eine durch Leerzeichen getrennte Liste von [Link-Typ-Werten](/de/docs/Web/HTML/Attributes/rel) sein.
- `sizes`

  - : Dieses Attribut definiert die Größen der Icons für visuelle Medien, die in der Ressource enthalten sind. Es muss nur vorhanden sein, wenn das [`rel`](#rel) einen Wert von `icon` oder einen nicht standardmäßigen Typ wie Apples `apple-touch-icon` enthält. Es kann die folgenden Werte haben:

    - `any`, was bedeutet, dass das Icon auf jede Größe skaliert werden kann, da es im Vektorformat vorliegt, wie `image/svg+xml`.
    - Eine durch Leerzeichen getrennte Liste von Größen, jede im Format `<Breite in Pixel>x<Höhe in Pixel>` oder `<Breite in Pixel>X<Höhe in Pixel>`. Jede dieser Größen muss in der Ressource enthalten sein.

    > [!NOTE]
    > Die meisten Icon-Formate sind nur in der Lage, ein einzelnes Icon zu speichern; daher enthält das [`sizes`](#sizes)-Attribut meist nur einen Eintrag.
    > Microsofts ICO-Format und Apples ICNS-Format können mehrfach ausgeführte Icon-Größen in einer einzigen Datei speichern. ICO hat eine bessere Browser-Unterstützung, daher sollten Sie dieses Format verwenden, wenn plattformübergreifende Unterstützung eine Rolle spielt.

- `title`
  - : Das `title`-Attribut hat besondere Semantik auf dem `<link>`-Element. Wenn es auf einem `<link rel="stylesheet">` verwendet wird, definiert es ein [Standard- oder ein alternatives Stylesheet](/de/docs/Web/HTML/Attributes/rel/alternate_stylesheet).
- `type`
  - : Dieses Attribut wird verwendet, um den Typ des verlinkten Inhalts zu definieren. Der Wert des Attributs sollte ein MIME-Typ sein, wie **text/html**, **text/css**, usw. Die häufigste Verwendung dieses Attributs ist die Definition des Typs des referenzierten Stylesheets (wie **text/css**), aber da CSS die einzige Stylesheet-Sprache ist, die im Web verwendet wird, ist es nicht nur möglich, das `type`-Attribut wegzulassen, sondern es ist tatsächlich empfehlenswerte Praxis. Es wird auch bei `rel="preload"` Link-Typen verwendet, um sicherzustellen, dass der Browser nur Dateitypen herunterlädt, die er unterstützt.

### Nicht-standardisierte Attribute

- `target` {{Deprecated_Inline}}
  - : Definiert den Namen des Rahmens oder Fensters, das die definierte Verlinkungsbeziehung hat oder die Darstellung einer verlinkten Ressource zeigen wird.

### Veraltete Attribute

- `charset` {{deprecated_inline}}

  - : Dieses Attribut definiert die Zeichenkodierung der verlinkten Ressource. Der Wert ist eine durch Leerzeichen und/oder Kommata getrennte Liste von Zeichensätzen, wie in {{rfc(2045)}} definiert. Der Standardwert ist `iso-8859-1`.

    > [!NOTE]
    > Um den gleichen Effekt wie dieses veraltete Attribut zu erzielen, verwenden Sie den {{HTTPHeader("Content-Type")}}-HTTP-Header auf der verlinkten Ressource.

- `rev` {{deprecated_inline}}

  - : Der Wert dieses Attributs zeigt die Beziehung des aktuellen Dokuments zum verlinkten Dokument, wie durch das [`href`](#href)-Attribut definiert. Das Attribut definiert so die umgekehrte Beziehung im Vergleich zum Wert des `rel`-Attributs. [Link-Typ-Werte](/de/docs/Web/HTML/Attributes/rel) für das Attribut sind ähnlich zu den möglichen Werten für [`rel`](#rel).

    > [!NOTE]
    > Anstatt `rev` zu verwenden, sollten Sie das [`rel`](#rel)-Attribut mit dem entgegengesetzten [Link-Typ-Wert](/de/docs/Web/HTML/Attributes/rel) verwenden.
    > Zum Beispiel, um den umgekehrten Link für `made` herzustellen, spezifizieren Sie `author`. Auch steht dieses Attribut nicht für "Revision" und darf nicht mit einer Versionsnummer verwendet werden, obwohl viele Websites es auf diese Weise missbrauchen.

## Beispiele

### Einbinden eines Stylesheets

Um ein Stylesheet in eine Seite einzubinden, verwenden Sie die folgende Syntax:

```html
<link href="style.css" rel="stylesheet" />
```

### Bereitstellung alternativer Stylesheets

Sie können auch [alternative Stylesheets](/de/docs/Web/HTML/Attributes/rel/alternate_stylesheet) angeben.

Der Benutzer kann auswählen, welches Stylesheet er verwenden möchte, indem er es aus dem Menü **Ansicht > Seitendesign** wählt. Dies bietet eine Möglichkeit für Benutzer, mehrere Versionen einer Seite anzuzeigen.

```html
<link href="default.css" rel="stylesheet" title="Default Style" />
<link href="fancy.css" rel="alternate stylesheet" title="Fancy" />
<link href="basic.css" rel="alternate stylesheet" title="Basic" />
```

### Bereitstellung von Icons für verschiedene Nutzungskontexte

Sie können Links zu verschiedenen Icons auf derselben Seite einfügen, und der Browser wird auswählen, welches am besten für seinen bestimmten Kontext funktioniert, indem er `rel`- und `sizes`-Werte als Hinweise verwendet.

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

Weitere Informationen zu den `sizes`, die Sie für Apple-Icons auswählen sollten, finden Sie in [Apples Dokumentation zur Konfiguration von Webanwendungen](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW4) und den referenzierten [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/app-icons#App-icon-sizes). Normalerweise ist es ausreichend, ein großes Bild bereitzustellen, wie z.B. 192x192, und den Browser es bei Bedarf verkleinern zu lassen. Aber Sie möchten möglicherweise Bilder mit verschiedenen Detailstufen für verschiedene Größen bereitstellen, wie es die Apple Design-Richtlinien empfehlen. Kleinere Icons für niedrigere Auflösungen bereitzustellen, spart auch Bandbreite.

Es kann nicht notwendig sein, überhaupt `<link>`-Elemente bereitzustellen. Zum Beispiel fordern Browser automatisch `/favicon.ico` aus dem Stamm einer Site an, und Apple fordert auch automatisch `/apple-touch-icon-[size].png`, `/apple-touch-icon.png`, etc. an. Das explizite Bereitstellen von Links schützt jedoch vor Änderungen dieser Konventionen.

### Bedingtes Laden von Ressourcen mit Media Queries

Sie können einen Medientyp oder eine -abfrage innerhalb eines `media`-Attributs angeben; diese Ressource wird dann nur geladen, wenn die Medienbedingung erfüllt ist. Zum Beispiel:

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

### Stylesheet-Load-Events

Sie können ermitteln, wann ein Stylesheet geladen wurde, indem Sie beobachten, wann ein `load`-Event darauf ausgelöst wird; in ähnlicher Weise können Sie feststellen, ob ein Fehler beim Verarbeiten eines Stylesheets aufgetreten ist, indem Sie auf ein `error`-Event achten:

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
> Das `load`-Event wird ausgelöst, sobald das Stylesheet und all seine importierten Inhalte geladen und geparst wurden, und unmittelbar bevor die Styles auf den Inhalt angewendet werden.

### Preload-Beispiele

Sie können eine Reihe von `<link rel="preload">`-Beispielen in [Content vorladen mit `rel="preload"`](/de/docs/Web/HTML/Attributes/rel/preload) finden.

### Blockieren des Renderings, bis eine Ressource abgerufen ist

Sie können das `render`-Token innerhalb eines `blocking`-Attributs einfügen; das Rendering der Seite wird blockiert, bis die Ressource abgerufen ist. Zum Beispiel:

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
        Metadateninhalt.
        Wenn <code><a href="/de/docs/Web/HTML/Global_attributes/itemprop">itemprop</a></code> vorhanden ist:
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Fließinhalt</a> und
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Satzzeicheninhalt</a>.
      </td>
    </tr>
    <tr>
      <th>Erlaubter Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "void element")}}.</td>
    </tr>
    <tr>
      <th>Auslassung des Tags</th>
      <td>Muss einen Start-Tag haben und darf keinen End-Tag haben.</td>
    </tr>
    <tr>
      <th>Erlaubte Eltern</th>
      <td>
        Jedes Element, das Metadatenelemente akzeptiert.
        Wenn <a href="/de/docs/Web/HTML/Global_attributes/itemprop">itemprop</a> vorhanden ist: jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Satzzeicheninhalt</a> akzeptiert.
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
