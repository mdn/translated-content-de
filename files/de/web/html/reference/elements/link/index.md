---
title: "<link>: Das External Resource Link-Element"
slug: Web/HTML/Reference/Elements/link
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`<link>`** [HTML](/de/docs/Web/HTML) Element spezifiziert Beziehungen zwischen dem aktuellen Dokument und einer externen Ressource. Dieses Element wird am häufigsten verwendet, um auf {{Glossary("CSS", "Stylesheets")}} zu verlinken, aber es wird auch verwendet, um Site-Icons zu etablieren (sowohl "Favicon"-Stil-Icons als auch Icons für den Startbildschirm und Apps auf mobilen Geräten) unter anderem.

{{InteractiveExample("HTML Demo: &lt;link&gt;", "tabbed-shorter")}}

```html interactive-example
<link href="/shared-assets/misc/link-element-example.css" rel="stylesheet" />

<p>This text will be red as defined in the external stylesheet.</p>
<p style="color: blue">
  The <code>style</code> attribute can override it, though.
</p>
```

Um ein externes Stylesheet zu verlinken, würden Sie ein `<link>`-Element in Ihrem {{HTMLElement("head")}} wie folgt einfügen:

```html
<link href="main.css" rel="stylesheet" />
```

Dieses Beispiel gibt den Pfad zum Stylesheet in einem `href`-Attribut an und ein [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel) Attribut mit dem Wert `stylesheet`. Das `rel` steht für "relationship" (Beziehung) und ist eines der Schlüsselelemente des `<link>` Elements – der Wert zeigt an, wie das verlinkte Element mit dem enthaltenen Dokument in Beziehung steht.

Es gibt eine Reihe anderer gebräuchlicher Typen, die Sie antreffen werden. Zum Beispiel ein Link zum Favicon der Seite:

```html
<link rel="icon" href="favicon.ico" />
```

Es gibt eine Reihe anderer Icon-`rel`-Werte, die hauptsächlich verwendet werden, um spezielle Icon-Typen für den Einsatz auf verschiedenen mobilen Plattformen zu kennzeichnen, z.B.:

```html
<link
  rel="apple-touch-icon"
  sizes="114x114"
  href="apple-icon-114.png"
  type="image/png" />
```

Das `sizes`-Attribut gibt die Icon-Größe an, während das `type` den MIME-Typ der verlinkten Ressource enthält. Diese bieten nützliche Hinweise, um dem Browser die Wahl des am besten geeigneten verfügbaren Icons zu erleichtern.

Sie können auch einen Medientyp oder eine Abfrage in einem `media`-Attribut angeben; diese Ressource wird dann nur geladen, wenn die Medienbedingung zutrifft. Zum Beispiel:

```html
<link href="print.css" rel="stylesheet" media="print" />
<link
  href="mobile.css"
  rel="stylesheet"
  media="screen and (max-width: 600px)" />
```

Einige interessante neue Leistungs- und Sicherheitsfunktionen wurden dem `<link>`-Element ebenfalls hinzugefügt. Nehmen Sie dieses Beispiel:

```html
<link
  rel="preload"
  href="myFont.woff2"
  as="font"
  type="font/woff2"
  crossorigin="anonymous" />
```

Ein `rel`-Wert von `preload` gibt an, dass der Browser diese Ressource vorladen sollte (siehe [`rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload) für mehr Details), mit dem `as`-Attribut, das die spezifische Klasse des abgerufenen Inhalts angibt. Das `crossorigin`-Attribut gibt an, ob die Ressource mit einer {{Glossary("CORS", "CORS")}}-Anfrage abgerufen werden soll.

Weitere Nutzungshinweise:

- Ein `<link>`-Element kann entweder im {{HTMLElement("head")}} oder im {{HTMLElement("body")}}-Element vorkommen, abhängig davon, ob es einen [Link-Typ](https://html.spec.whatwg.org/multipage/links.html#body-ok) hat, der **body-ok** ist. Zum Beispiel ist der `stylesheet`-Link-Typ body-ok, und daher ist `<link rel="stylesheet">` im Body erlaubt. Dies ist jedoch keine gute Praxis; es macht mehr Sinn, Ihre `<link>`-Elemente von Ihrem Body-Inhalt zu trennen und sie in den `<head>` zu setzen.
- Wenn Sie `<link>` verwenden, um ein Favicon für eine Seite zu etablieren, und Ihre Seite eine Content Security Policy (CSP) verwendet, um ihre Sicherheit zu erhöhen, gilt die Richtlinie auch für das Favicon. Wenn Sie Probleme haben, dass das Favicon nicht geladen wird, überprüfen Sie, ob der {{HTTPHeader("Content-Security-Policy")}}-Header's [`img-src` Directive](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/img-src) den Zugriff darauf nicht verhindert.
- Die HTML- und XHTML-Spezifikationen definieren Ereignishandler für das `<link>`-Element, aber es ist unklar, wie sie verwendet werden würden.
- Unter XHTML 1.0 erfordern {{Glossary("void_element", "leere Elemente")}} wie `<link>` einen Schrägstrich am Ende: `<link />`.
- WebTV unterstützt die Nutzung des Werts `next` für `rel`, um die nächste Seite in einer Dokumentenserie vorzuladen.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `as`

  - : Dieses Attribut ist erforderlich, wenn [`rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload) am `<link>`-Element gesetzt ist, optional, wenn [`rel="modulepreload"`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload) gesetzt ist, und sollte andernfalls nicht verwendet werden. Es spezifiziert den Typ des vom `<link>` geladenen Inhalts, was für das Anfragematching, Anwendung einer korrekten [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) und Setzen der korrekten {{HTTPHeader("Accept")}}-Anforderungsheader notwendig ist.

    Darüber hinaus verwendet `rel="preload"` dies als Signal zur Anforderungspriorisierung. Die untenstehende Tabelle listet die gültigen Werte für dieses Attribut und die Elemente oder Ressourcen auf, für die sie gelten.

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
          <td><code>&#x3C;audio></code> Elemente</td>
        </tr>
        <tr>
          <td>document</td>
          <td><code>&#x3C;iframe></code> und <code>&#x3C;frame></code> Elemente</td>
        </tr>
        <tr>
          <td>embed</td>
          <td><code>&#x3C;embed></code> Elemente</td>
        </tr>
        <tr>
          <td>fetch</td>
          <td>
            <p>fetch, XHR</p>
            <div class="notecard note">
              <p>
                <strong>Hinweis:</strong> Dieser Wert erfordert auch, dass
                <code>&#x3C;link></code> das crossorigin-Attribut enthält, siehe <a href="/de/docs/Web/HTML/Reference/Attributes/rel/preload#cors-enabled_fetches">CORS-fähige Fetches</a>.
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
                <code>&#x3C;link></code> das crossorigin-Attribut enthält, siehe <a href="/de/docs/Web/HTML/Reference/Attributes/rel/preload#cors-enabled_fetches">CORS-fähige Fetches</a>.
              </p>
            </div>
          </td>
        </tr>
        <tr>
          <td>image</td>
          <td>
            <code>&#x3C;img></code> und <code>&#x3C;picture></code> Elemente mit
            srcset oder imageset Attributen, SVG <code>&#x3C;image></code> Elemente,
            CSS <code>*-image</code> Regeln
          </td>
        </tr>
        <tr>
          <td>object</td>
          <td><code>&#x3C;object></code> Elemente</td>
        </tr>
        <tr>
          <td>script</td>
          <td>
            <code>&#x3C;script></code> Elemente, Worker <code>importScripts</code>
          </td>
        </tr>
        <tr>
          <td>style</td>
          <td>
            <code>&#x3C;link rel=stylesheet></code> Elemente, CSS
            <code>@import</code>
          </td>
        </tr>
        <tr>
          <td>track</td>
          <td><code>&#x3C;track></code> Elemente</td>
        </tr>
        <tr>
          <td>video</td>
          <td><code>&#x3C;video></code> Elemente</td>
        </tr>
        <tr>
          <td>worker</td>
          <td>Worker, SharedWorker</td>
        </tr>
      </tbody>
    </table>

- `blocking`

  - : Dieses Attribut gibt ausdrücklich an, dass bestimmte Operationen beim Abrufen einer externen Ressource blockiert werden sollen. Es darf nur verwendet werden, wenn das `rel`-Attribut die Schlüsselwörter `expect` oder `stylesheet` enthält. Die zu blockierenden Operationen müssen eine durch Leerzeichen getrennte Liste von unten aufgeführten Blockierungstoken sein.
    - `render`: Das Rendering von Inhalten auf dem Bildschirm wird blockiert.

- [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)

  - : Dieses {{Glossary("Enumerated", "enumerierte")}} Attribut gibt an, ob {{Glossary("CORS", "CORS")}} beim Abrufen der Ressource verwendet werden muss. [CORS-enabled images](/de/docs/Web/HTML/How_to/CORS_enabled_image) können im {{HTMLElement("canvas")}}-Element ohne Verunreinigung wiederverwendet werden. Die zulässigen Werte sind:

    - `anonymous`
      - : Eine Cross-Origin-Anfrage (d.h. mit einem {{HTTPHeader("Origin")}} HTTP-Header) wird ausgeführt, jedoch wird kein Anmeldeinformation gesendet (d.h. kein Cookie, X.509-Zertifikat oder HTTP-Basisauthentifizierung). Wenn der Server Anmeldeinformationen nicht an die Ursprungsseite gibt (indem er den {{HTTPHeader("Access-Control-Allow-Origin")}} HTTP-Header nicht setzt), wird die Ressource verunreinigt und ihre Nutzung eingeschränkt.
    - `use-credentials`
      - : Eine Cross-Origin-Anfrage (d.h. mit einem `Origin` HTTP-Header) wird ausgeführt, zusammen mit einer gesendeten Anmeldeinformation (d.h. ein Cookie, Zertifikat und/oder HTTP-Basisauthentifizierung wird durchgeführt). Wenn der Server Anmeldeinformationen nicht an die Ursprungsseite gibt (über das {{HTTPHeader("Access-Control-Allow-Credentials")}} HTTP-Header), wird die Ressource verunreinigt und ihre Nutzung eingeschränkt.

    Wenn das Attribut nicht vorhanden ist, wird die Ressource ohne eine {{Glossary("CORS", "CORS")}}-Anfrage abgerufen (d.h. ohne Senden des `Origin` HTTP-Headers), was ihre ungetrübte Nutzung verhindert. Wenn ungültig, wird es behandelt, als ob das enumerierte Schlüsselwort **anonymous** verwendet wurde. Siehe [CORS settings attributes](/de/docs/Web/HTML/Reference/Attributes/crossorigin) für zusätzliche Informationen.

- `disabled`

  - : Für `rel="stylesheet"` nur, das `disabled`-Boolean-Attribut gibt an, ob das beschriebene Stylesheet geladen und auf das Dokument angewendet werden soll. Wenn `disabled` beim Laden in HTML angegeben ist, wird das Stylesheet nicht während des Seitenladens geladen. Stattdessen wird das Stylesheet bei Bedarf geladen, wenn und wann das `disabled`-Attribut auf `false` geändert oder entfernt wird.

    Das Setzen der `disabled`-Eigenschaft im DOM bewirkt, dass das Stylesheet aus der Liste der [`Document.styleSheets`](/de/docs/Web/API/Document/styleSheets) des Dokuments entfernt wird.

- `fetchpriority`

  - : Stellt einen Hinweis auf die relative Priorität bereit, die beim Abrufen einer Ressource eines bestimmten Typs verwendet werden soll. Zugelassene Werte:

    - `high`
      - : Rufen Sie die Ressource mit hoher Priorität im Vergleich zu anderen Ressourcen desselben Typs ab.
    - `low`
      - : Rufen Sie die Ressource mit niedriger Priorität im Vergleich zu anderen Ressourcen desselben Typs ab.
    - `auto`
      - : Keine Präferenz für die Abrufpriorität festlegen. Dies ist der Standard. Es wird verwendet, wenn kein Wert oder ein ungültiger Wert festgelegt ist.

    Siehe [`HTMLLinkElement.fetchPriority`](/de/docs/Web/API/HTMLLinkElement/fetchPriority) für weitere Informationen.

- `href`
  - : Dieses Attribut spezifiziert die {{Glossary("URL", "URL")}} der verlinkten Ressource. Eine URL kann absolut oder relativ sein.
- `hreflang`
  - : Dieses Attribut gibt die Sprache der verlinkten Ressource an. Es ist rein beratend. Zugelassene Werte werden durch {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}} festgelegt. Verwenden Sie dieses Attribut nur, wenn das [`href`](/de/docs/Web/HTML/Reference/Elements/a#href) Attribut vorhanden ist.
- `imagesizes`
  - : Für `rel="preload"` und `as="image"` nur, das `imagesizes`-Attribut hat eine ähnliche Syntax und Semantik wie das [`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes) Attribut, das angibt, die geeignete Ressource vorzuladen, die von einem `img`-Element mit entsprechenden Werten für seine `srcset`- und `sizes`-Attribute verwendet wird.
- `imagesrcset`
  - : Für `rel="preload"` und `as="image"` nur, das `imagesrcset`-Attribut hat eine ähnliche Syntax und Semantik wie das [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset) Attribut, das angibt, die geeignete Ressource vorzuladen, die von einem `img`-Element mit entsprechenden Werten für seine `srcset`- und `sizes`-Attribute verwendet wird.
- `integrity`
  - : Enthält Metadaten inline – ein base64-kodierter kryptographischer Hash der Ressource (Datei), die Sie den Browser abrufen lassen. Der Browser kann dies verwenden, um zu überprüfen, ob die abgerufene Ressource ohne unerwartete Manipulation geliefert wurde. Das Attribut darf nur angegeben werden, wenn das `rel` Attribut auf `stylesheet`, `preload` oder `modulepreload` gesetzt ist. Siehe [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity).
- `media`

  - : Dieses Attribut spezifiziert die Medien, auf die sich die verlinkte Ressource bezieht. Sein Wert muss ein Medientyp / [Medienabfrage](/de/docs/Web/CSS/CSS_media_queries) sein. Dieses Attribut ist hauptsächlich nützlich, wenn auf externe Stylesheets verlinkt wird – es erlaubt dem User-Agent, das am besten angepasste für das Gerät, auf dem er läuft, auszuwählen.

- `referrerpolicy`

  - : Ein String, der angibt, welchen Referrer beim Abrufen der Ressource zu verwenden ist:

    - `no-referrer` bedeutet, dass der {{HTTPHeader("Referer")}}-Header nicht gesendet wird.
    - `no-referrer-when-downgrade` bedeutet, dass kein {{HTTPHeader("Referer")}}-Header gesendet wird, wenn zu einem Ursprung ohne TLS (HTTPS) navigiert wird. Dies ist das Standardverhalten des User-Agents, wenn keine andere Richtlinie angegeben ist.
    - `origin` bedeutet, dass der Referrer der Ursprung der Seite sein wird, was grob dem Schema, dem Host und dem Port entspricht.
    - `origin-when-cross-origin` bedeutet, dass das Navigieren zu anderen Ursprüngen auf das Schema, den Host und den Port beschränkt wird, während das Navigieren auf dem gleichen Ursprung den Pfad des Referrer einschließt.
    - `unsafe-url` bedeutet, dass der Referrer den Ursprung und den Pfad (aber nicht das Fragment, das Passwort oder den Benutzernamen) einschließt. Dieser Fall ist unsicher, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge weitergeben kann.

- [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)
  - : Dieses Attribut benennt eine Beziehung des verlinkten Dokuments zum aktuellen Dokument. Das Attribut muss eine durch Leerzeichen getrennte Liste von [Link-Typ-Werten](/de/docs/Web/HTML/Reference/Attributes/rel) sein.
- `sizes`

  - : Dieses Attribut definiert die Größen der Icons für visuelle Medien, die in der Ressource enthalten sind. Es muss nur vorhanden sein, wenn das [`rel`](#rel) einen Wert von `icon` oder einem nicht standardmäßigen Typ wie Apples `apple-touch-icon` enthält. Es kann die folgenden Werte haben:

    - `any`, was bedeutet, dass das Icon auf jede Größe skaliert werden kann, da es in einem Vektorformat wie `image/svg+xml` vorliegt.
    - eine durch Leerzeichen getrennte Liste von Größen, jeweils im Format `<Breite in Pixel>x<Höhe in Pixel>` oder `<Breite in Pixel>X<Höhe in Pixel>`. Jede dieser Größen muss in der Ressource enthalten sein.

    > [!NOTE]
    > Die meisten Icon-Formate können nur ein einziges Icon speichern; daher enthält das [`sizes`](#sizes)-Attribut meistens nur einen Eintrag.
    > Microsofts ICO-Format und Apples ICNS-Format können mehrere Icon-Größen in einer einzigen Datei speichern. ICO hat eine bessere Browser-Unterstützung, daher sollten Sie dieses Format verwenden, wenn Browser-übergreifende Unterstützung ein Anliegen ist.

- `title`
  - : Das `title`-Attribut hat spezielle Semantik auf dem `<link>`-Element. Wenn es auf einem `<link rel="stylesheet">` verwendet wird, definiert es ein [Standard- oder ein alternatives Stylesheet](/de/docs/Web/HTML/Reference/Attributes/rel/alternate_stylesheet).
- `type`
  - : Dieses Attribut wird verwendet, um den Typ des verlinkten Inhalts zu definieren. Der Wert des Attributs sollte ein MIME-Typ wie **text/html**, **text/css** usw. sein. Der allgemeine Gebrauch dieses Attributs besteht darin, den Typ des referenzierten Stylesheets zu definieren (wie **text/css**), aber da CSS die einzige Stylesheet-Sprache im Web ist, kann das `type`-Attribut nicht nur weggelassen werden, sondern es wird tatsächlich jetzt als bewährte Praxis empfohlen. Es wird auch bei `rel="preload"` Link-Typen verwendet, um sicherzustellen, dass der Browser nur Dateitypen herunterlädt, die er unterstützt.

### Nicht-standardmäßige Attribute

- `target` {{Deprecated_Inline}}
  - : Definiert den Namen des Rahmens oder Fensters, das die definierte Verknüpfungsbeziehung hat oder das die Darstellung einer verlinkten Ressource zeigen wird.

### Veraltete Attribute

- `charset` {{deprecated_inline}}

  - : Dieses Attribut definiert die Zeichencodierung der verlinkten Ressource. Der Wert ist eine durch Leerzeichen und/oder Kommas getrennte Liste von Zeichensätzen, wie in {{rfc(2045)}} definiert. Der Standardwert ist `iso-8859-1`.

    > [!NOTE]
    > Um den gleichen Effekt wie dieses veraltete Attribut zu erzielen, verwenden Sie den {{HTTPHeader("Content-Type")}} HTTP-Header auf der verlinkten Ressource.

- `rev` {{deprecated_inline}}

  - : Der Wert dieses Attributs zeigt die Beziehung des aktuellen Dokuments zum verlinkten Dokument an, wie es durch das [`href`](#href) Attribut definiert ist. Das Attribut definiert somit die umgekehrte Beziehung im Vergleich zum Wert des `rel`-Attributs. [Link-Typ-Werte](/de/docs/Web/HTML/Reference/Attributes/rel) für das Attribut sind ähnlich den möglichen Werten für [`rel`](#rel).

    > [!NOTE]
    > Statt `rev` sollten Sie das [`rel`](#rel) Attribut mit dem entgegengesetzten [Link-Typ-Wert](/de/docs/Web/HTML/Reference/Attributes/rel) verwenden.
    > Verwenden Sie zum Beispiel `author`, um den umgekehrten Link für `made` festzulegen. Dieses Attribut steht nicht für "revision" und darf nicht mit einer Versionsnummer verwendet werden, auch wenn viele Seiten es auf diese Weise missbrauchen.

## Beispiele

### Einbinden eines Stylesheets

Um ein Stylesheet in eine Seite einzubinden, verwenden Sie die folgende Syntax:

```html
<link href="style.css" rel="stylesheet" />
```

### Bereitstellung alternativer Stylesheets

Sie können auch [alternative Stylesheets](/de/docs/Web/HTML/Reference/Attributes/rel/alternate_stylesheet) angeben.

Der Benutzer kann wählen, welches Stylesheet er verwenden möchte, indem er es aus dem Menü **Ansicht > Seitenstil** auswählt. Dies bietet eine Möglichkeit für Benutzer, mehrere Versionen einer Seite zu sehen.

```html
<link href="default.css" rel="stylesheet" title="Default Style" />
<link href="fancy.css" rel="alternate stylesheet" title="Fancy" />
<link href="basic.css" rel="alternate stylesheet" title="Basic" />
```

### Bereitstellung von Icons für verschiedene Nutzungskontexte

Sie können Links zu mehreren Icons auf derselben Seite einfügen, und der Browser wählt dasjenige aus, das für seinen speziellen Kontext am besten geeignet ist, indem er die `rel`- und `sizes`-Werte als Hinweise verwendet.

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

Für Informationen darüber, welche `sizes` Sie für Apple-Icons wählen sollten, siehe [Apples Dokumentation zur Konfiguration von Webanwendungen](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW4) und die referenzierten [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/app-icons#App-icon-sizes). In der Regel reicht es aus, ein großes Bild, wie 192x192 bereitzustellen, und der Browser skaliert es bei Bedarf herunter, aber Sie möchten möglicherweise Bilder mit unterschiedlichen Detailniveaus für unterschiedliche Größen bereitstellen, wie es die Apple-Designrichtlinie empfiehlt. Kleinere Icons für niedrigere Auflösungen bereitzustellen, spart auch Bandbreite.

Es kann nicht notwendig sein, `<link>`-Elemente bereitzustellen. Zum Beispiel fordern Browser `/favicon.ico` vom Stamm einer Seite automatisch an, und Apple fordert auch automatisch `/apple-touch-icon-[size].png`, `/apple-touch-icon.png`, usw. an. Das Bereitstellen expliziter Links schützt jedoch vor Änderungen dieser Konventionen.

### Bedingtes Laden von Ressourcen mit Medienabfragen

Sie können einen Medientyp oder eine Abfrage innerhalb eines `media`-Attributs bereitstellen; diese Ressource wird dann nur geladen, wenn die Medienbedingung zutrifft. Zum Beispiel:

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

### Stylesheet Ladeereignisse

Sie können feststellen, wann ein Stylesheet geladen wurde, indem Sie auf ein `load`-Ereignis warten; ebenso können Sie feststellen, ob beim Verarbeiten eines Stylesheets ein Fehler aufgetreten ist, indem Sie auf ein `error`-Ereignis achten:

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
> Das `load`-Ereignis wird ausgelöst, sobald das Stylesheet und aller importierter Inhalt geladen und analysiert wurden, und unmittelbar bevor die Stile auf den Inhalt angewendet werden.

### Preload-Beispiele

Sie finden eine Anzahl von `<link rel="preload">` Beispielen in [Vorladen von Inhalten mit `rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload).

### Blockieren des Renderings bis eine Ressource abgerufen wurde

Sie können ein `render`-Token innerhalb eines `blocking`-Attributs einfügen; das Rendering der Seite wird blockiert, bis die Ressource abgerufen wurde. Zum Beispiel:

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
        Metadateninhalt.
        Wenn <code><a href="/de/docs/Web/HTML/Reference/Global_attributes/itemprop">itemprop</a></code> vorhanden ist:
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flussinhalt</a> und
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasierung</a>.
      </td>
    </tr>
    <tr>
      <th>Erlaubter Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "leeres Element")}}.</td>
    </tr>
    <tr>
      <th>Tag-Auslassung</th>
      <td>Muss ein Start-Tag haben und darf keinen End-Tag haben.</td>
    </tr>
    <tr>
      <th>Erlaubte Eltern</th>
      <td>
        Jedes Element, das Metadatenelemente akzeptiert. Wenn <a href="/de/docs/Web/HTML/Reference/Global_attributes/itemprop">itemprop</a> vorhanden ist: jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasierung</a> akzeptiert.
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
