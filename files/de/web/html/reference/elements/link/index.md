---
title: "<link>: Das External Resource Link Element"
slug: Web/HTML/Reference/Elements/link
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`<link>`**-[HTML](/de/docs/Web/HTML)-Element spezifiziert Beziehungen zwischen dem aktuellen Dokument und einer externen Ressource. Dieses Element wird am häufigsten verwendet, um auf {{Glossary("CSS", "Stylesheets")}} zu verlinken. Es wird aber auch verwendet, um Seitenicons (sowohl "Favicon"-Style-Icons als auch Icons für den Startbildschirm und Apps auf mobilen Geräten) und andere Dinge zu etablieren.

{{InteractiveExample("HTML Demo: &lt;link&gt;", "tabbed-shorter")}}

```html interactive-example
<link href="/shared-assets/misc/link-element-example.css" rel="stylesheet" />

<p>This text will be red as defined in the external stylesheet.</p>
<p style="color: blue">
  The <code>style</code> attribute can override it, though.
</p>
```

Um ein externes Stylesheet zu verlinken, würden Sie ein `<link>`-Element innerhalb Ihres {{HTMLElement("head")}}-Elements wie folgt einfügen:

```html
<link href="main.css" rel="stylesheet" />
```

Dieses Beispiel gibt den Pfad zum Stylesheet in einem `href`-Attribut und einem [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)-Attribut mit einem Wert von `stylesheet` an. `rel` steht für "relationship" und ist eines der Schlüsselfunktionen des `<link>`-Elements – der Wert gibt an, wie das verlinkte Element mit dem enthaltenden Dokument in Beziehung steht.

Es gibt eine Reihe anderer gebräuchlicher Typen, auf die Sie stoßen werden. Zum Beispiel ein Link zum Favicon der Seite:

```html
<link rel="icon" href="favicon.ico" />
```

Es gibt eine Reihe anderer `rel`-Werte für Icons, die hauptsächlich verwendet werden, um spezielle Icонтypen für verschiedene mobile Plattformen anzugeben, z.B.:

```html
<link
  rel="apple-touch-icon"
  sizes="114x114"
  href="apple-icon-114.png"
  type="image/png" />
```

Das `sizes`-Attribut gibt die Icongröße an, während `type` den MIME-Typ der verlinkten Ressource enthält. Diese liefern nützliche Hinweise, um dem Browser die Auswahl des am besten geeigneten verfügbaren Icons zu ermöglichen.

Sie können auch einen Medientyp oder eine Abfrage innerhalb eines `media`-Attributs angeben; diese Ressource wird dann nur geladen, wenn die Medienbedingung wahr ist. Zum Beispiel:

```html
<link href="print.css" rel="stylesheet" media="print" />
<link href="mobile.css" rel="stylesheet" media="screen and (width <= 600px)" />
```

Einige interessante neue Leistungs- und Sicherheitsmerkmale wurden ebenfalls dem `<link>`-Element hinzugefügt. Nehmen Sie dieses Beispiel:

```html
<link
  rel="preload"
  href="myFont.woff2"
  as="font"
  type="font/woff2"
  crossorigin="anonymous" />
```

Ein `rel`-Wert von `preload` zeigt an, dass der Browser diese Ressource vorladen sollte (siehe [`rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload) für weitere Details), wobei das `as`-Attribut die spezifische Klasse des abgerufenen Inhalts angibt. Das `crossorigin`-Attribut gibt an, ob die Ressource mit einer {{Glossary("CORS", "CORS")}}-Anfrage abgerufen werden soll.

Andere Verwendungshinweise:

- Ein `<link>`-Element kann entweder im {{HTMLElement("head")}}- oder im {{HTMLElement("body")}}-Element vorkommen, abhängig davon, ob es einen [Linktyp](https://html.spec.whatwg.org/multipage/links.html#body-ok) hat, der **body-ok** ist. Beispielsweise ist der `stylesheet`-Linktyp body-ok und daher ist `<link rel="stylesheet">` im Body erlaubt. Dies ist jedoch keine gute Praxis; es ist sinnvoller, Ihre `<link>`-Elemente von Ihrem Body-Content zu trennen und sie im `<head>` zu platzieren.
- Wenn Sie `<link>` verwenden, um ein Favicon für eine Site festzulegen, und Ihre Site eine Content Security Policy (CSP) zur Verbesserung der Sicherheit verwendet, gilt die Richtlinie auch für das Favicon. Falls Sie Probleme beim Laden des Favicon haben, überprüfen Sie, ob die {{HTTPHeader("Content-Security-Policy")}}-Header-[`img-src`-Direktive](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/img-src) den Zugriff darauf nicht verhindert.
- Die HTML- und XHTML-Spezifikationen definieren Ereignishandler für das `<link>`-Element, es ist jedoch unklar, wie sie verwendet werden würden.
- Nach XHTML 1.0 erfordern {{Glossary("void_element", "void elements")}} wie `<link>` einen abschließenden Schrägstrich: `<link />`.
- WebTV unterstützt die Verwendung des Werts `next` für `rel`, um die nächste Seite in einer Dokumentserie vorzuladen.

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `as`
  - : Dieses Attribut ist erforderlich, wenn [`rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload) auf dem `<link>`-Element gesetzt wurde, optional, wenn [`rel="modulepreload"`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload) gesetzt wurde, und sollte andernfalls nicht verwendet werden. Es spezifiziert die Art des Inhalts, der vom `<link>` geladen wird, was notwendig ist für das Anforderung-Matching, Anwendung der korrekten [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) und das Setzen des korrekten {{HTTPHeader("Accept")}}-Anforderungs-Headers.

    Darüber hinaus wird `rel="preload"` als Signal für die Anforderungspriorisierung verwendet. Die untenstehende Tabelle listet die gültigen Werte für dieses Attribut und die Elemente oder Ressourcen, auf die sie angewendet werden, auf.

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
                <strong>Hinweis:</strong> Dieser Wert erfordert ebenfalls, dass
                <code>&#x3C;link></code> das crossorigin-Attribut enthält, siehe <a href="/de/docs/Web/HTML/Reference/Attributes/rel/preload#cors-enabled_fetches">CORS-enabled fetches</a>.
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
                <strong>Hinweis:</strong> Dieser Wert erfordert ebenfalls, dass
                <code>&#x3C;link></code> das crossorigin-Attribut enthält, siehe <a href="/de/docs/Web/HTML/Reference/Attributes/rel/preload#cors-enabled_fetches">CORS-enabled fetches</a>.
              </p>
            </div>
          </td>
        </tr>
        <tr>
          <td>image</td>
          <td>
            <code>&#x3C;img></code> und <code>&#x3C;picture></code>-Elemente mit
            srcset oder imageset-Attributen, SVG <code>&#x3C;image></code>-Elemente,
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
  - : Dieses Attribut gibt ausdrücklich an, dass bestimmte Operationen beim Abrufen einer externen Ressource blockiert werden sollen. Es darf nur verwendet werden, wenn das `rel`-Attribut die Schlüsselwörter `expect` oder `stylesheet` enthält. Die zu blockierenden Operationen müssen eine durch Leerzeichen getrennte Liste der unten genannten Blockierungs-Token sein.
    - `render`: Das Rendern von Inhalten auf dem Bildschirm wird blockiert.

- [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)
  - : Dieses {{Glossary("Enumerated", "aufszählbare")}} Attribut gibt an, ob {{Glossary("CORS", "CORS")}} beim Abrufen der Ressource verwendet werden muss. [CORS-fähige Bilder](/de/docs/Web/HTML/How_to/CORS_enabled_image) können im {{HTMLElement("canvas")}}-Element wiederverwendet werden, ohne _verfälscht_ zu werden. Die zulässigen Werte sind:
    - `anonymous`
      - : Eine Anforderung über eine andere Herkunft (d.h. mit einem {{HTTPHeader("Origin")}} HTTP-Header) wird durchgeführt, aber kein Anmeldeinformation wird gesendet (d.h. kein Cookie, X.509-Zertifikat oder HTTP-Basic-Authentifizierung).
        Wenn der Server der Ursprungsseite keine Anmeldeinformation gibt (durch nicht Setzen des {{HTTPHeader("Access-Control-Allow-Origin")}} HTTP-Headers), wird die Ressource verfälscht und ihre Nutzung eingeschränkt.
    - `use-credentials`
      - : Eine Anforderung über eine andere Herkunft (d.h. mit einem `Origin` HTTP-Header) wird zusammen mit gesendeten Anmeldeinformationen durchgeführt (d.h. ein Cookie, Zertifikat und/oder eine HTTP-Basic-Authentifizierung wird durchgeführt).
        Wenn der Server der Ursprungsseite keine Anmeldeinformation gibt (durch den {{HTTPHeader("Access-Control-Allow-Credentials")}} HTTP-Header), wird die Ressource _verfälscht_ und ihre Nutzung eingeschränkt.

    Wenn das Attribut nicht vorhanden ist, wird die Ressource ohne eine {{Glossary("CORS", "CORS")}}-Anfrage abgerufen (d.h. ohne den `Origin` HTTP-Header zu senden), wodurch ihre unverfälschte Nutzung verhindert wird. Wenn ungültig, wird es behandelt, als ob das aufgezählte Schlüsselwort **anonymous** verwendet wurde. Weitere Informationen finden Sie unter [CORS-Einstellungen Attribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin).

- `disabled`
  - : Nur für `rel="stylesheet"`, das `disabled`-Boolean-Attribut gibt an, ob das beschriebene Stylesheet geladen und auf das Dokument angewendet werden soll. Wenn `disabled` im HTML angegeben ist, während es geladen wird, wird das Stylesheet nicht während des Seitenladens geladen. Stattdessen wird das Stylesheet bei Bedarf geladen, wenn und wann das `disabled`-Attribut auf `false` geändert oder entfernt wird.

    Das Setzen der `disabled`-Eigenschaft im DOM führt dazu, dass das Stylesheet aus der [`Document.styleSheets`](/de/docs/Web/API/Document/styleSheets)-Liste des Dokuments entfernt wird.

- `fetchpriority`
  - : Gibt einen Hinweis auf die relative Priorität an, die beim Abrufen einer Ressource eines bestimmten Typs verwendet werden soll. Zulässige Werte:
    - `high`
      - : Rufen Sie die Ressource mit hoher Priorität im Vergleich zu anderen Ressourcen desselben Typs ab.
    - `low`
      - : Rufen Sie die Ressource mit niedriger Priorität im Vergleich zu anderen Ressourcen desselben Typs ab.
    - `auto`
      - : Legen Sie keine Präferenz für die Abrufpriorität fest.
        Dies ist der Standardwert.
        Wird verwendet, wenn kein Wert oder ein ungültiger Wert festgelegt ist.

    Weitere Informationen finden Sie unter [`HTMLLinkElement.fetchPriority`](/de/docs/Web/API/HTMLLinkElement/fetchPriority).

- `href`
  - : Dieses Attribut gibt die {{Glossary("URL", "URL")}} der verlinkten Ressource an. Eine URL kann absolut oder relativ sein.
- `hreflang`
  - : Dieses Attribut gibt die Sprache der verlinkten Ressource an.
    Es ist rein beratend.
    Zulässige Werte sind durch {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}} spezifiziert.
    Verwenden Sie dieses Attribut nur, wenn das [`href`](/de/docs/Web/HTML/Reference/Elements/a#href)-Attribut vorhanden ist.
- `imagesizes`
  - : Für `rel="preload"` und `as="image"`-Elemente nur: der `imagesizes`-Attribut hat ähnliche Syntax und Semantik wie das [`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes)-Attribut, das die Vorladung der entsprechenden Ressource angibt, die von einem `img`-Element verwendet wird, mit entsprechenden Werten für seine `srcset`- und `sizes`-Attribute.
- `imagesrcset`
  - : Für `rel="preload"` und `as="image"`-Elemente nur: das `imagesrcset`-Attribut hat ähnliche Syntax und Semantik wie das [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset)-Attribut, das die Vorladung der entsprechenden Ressource angibt, die von einem `img`-Element verwendet wird, mit entsprechenden Werten für seine `srcset`- und `sizes`-Attribute.
- `integrity`
  - : Enthält Inline-Metadaten — einen base64-kodierten kryptografischen Hash der Ressource (Datei), die Sie dem Browser zum Abrufen mitteilen. Der Browser kann dies verwenden, um zu überprüfen, ob die abgerufene Ressource ohne unerwartete Manipulation geliefert wurde. Das Attribut darf nur angegeben werden, wenn das `rel`-Attribut auf `stylesheet`, `preload` oder `modulepreload` festgelegt ist. Siehe [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity).
- `media`
  - : Dieses Attribut gibt die Medien an, auf die sich die verlinkte Ressource bezieht. Sein Wert muss ein Medientyp / [Media Query](/de/docs/Web/CSS/CSS_media_queries) sein. Dieses Attribut ist hauptsächlich nützlich beim Verlinken auf externe Stylesheets – es ermöglicht dem Benutzeragenten, das am besten angepasste für das Gerät auszuwählen, auf dem es ausgeführt wird.

- `referrerpolicy`
  - : Ein String, der angibt, welcher Referrer beim Abrufen der Ressource verwendet werden soll:
    - `no-referrer` bedeutet, dass der {{HTTPHeader("Referer")}}-Header nicht gesendet wird.
    - `no-referrer-when-downgrade` bedeutet, dass bei der Navigation zu einer Herkunft ohne TLS (HTTPS) kein {{HTTPHeader("Referer")}}-Header gesendet wird. Dies ist das Standardverhalten des Benutzeragenten, wenn keine andere Richtlinie angegeben ist.
    - `origin` bedeutet, dass der Referrer die Herkunft der Seite ist, was ungefähr dem Schema, dem Host und dem Port entspricht.
    - `origin-when-cross-origin` bedeutet, dass bei der Navigation zu anderen Ursprüngen auf das Schema, den Host und den Port beschränkt wird, während bei der Navigation auf demselben Ursprung der Pfad des Referrers enthalten ist.
    - `unsafe-url` bedeutet, dass der Referrer die Herkunft und den Pfad (aber nicht das Fragment, das Passwort oder den Benutzernamen) enthalten wird. Dieser Fall ist unsicher, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge leaken kann.

- [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)
  - : Dieses Attribut benennt eine Beziehung des verlinkten Dokuments zum aktuellen Dokument. Das Attribut muss eine durch Leerzeichen getrennte Liste von [Linktyp-Werten](/de/docs/Web/HTML/Reference/Attributes/rel) sein.
- `sizes`
  - : Dieses Attribut definiert die Größen der Icons für visuelle Medien, die in der Ressource enthalten sind. Es muss nur vorhanden sein, wenn das [`rel`](#rel) einen Wert von `icon` oder einen nicht standardisierten Typ wie Apples `apple-touch-icon` enthält. Es kann die folgenden Werte haben:
    - `any`, was bedeutet, dass das Icon auf jede Größe skaliert werden kann, da es sich im Vektorformat befindet, wie `image/svg+xml`.
    - Eine durch Leerzeichen getrennte Liste von Größen, jeweils im Format `<Breite in Pixel>x<Höhe in Pixel>` oder `<Breite in Pixel>X<Höhe in Pixel>`. Jede dieser Größen muss in der Ressource enthalten sein.

    > [!NOTE]
    > Die meisten Icon-Formate können nur ein einzelnes Icon speichern; daher enthält das [`sizes`](#sizes)-Attribut meistens nur einen Eintrag. Microsofts ICO-Format und Apples ICNS-Format können mehrere Icon-Größen in einer einzigen Datei speichern. ICO hat eine bessere Browserunterstützung, daher sollten Sie dieses Format verwenden, wenn Ihnen die plattformübergreifende Unterstützung wichtig ist.

- `title`
  - : Das `title`-Attribut hat spezielle Semantiken auf dem `<link>`-Element. Wenn es auf einem `<link rel="stylesheet">` verwendet wird, definiert es ein [Standard- oder alternatives Stylesheet](/de/docs/Web/HTML/Reference/Attributes/rel/alternate_stylesheet).
- `type`
  - : Dieses Attribut wird verwendet, um den Typ des verlinkten Inhalts zu definieren. Der Wert des Attributs sollte ein MIME-Typ wie **text/html**, **text/css** usw. sein. Der allgemeine Gebrauch dieses Attributs ist es, den Typ des referenzierten Stylesheets zu definieren (wie **text/css**), aber da CSS die einzige Stylesheet-Sprache ist, die im Web verwendet wird, kann dieses Attribut nicht nur weggelassen werden, sondern es wird sogar empfohlen, dies zu tun. Es wird auch auf `rel="preload"`-Linktypen verwendet, um sicherzustellen, dass der Browser nur Dateitypen herunterlädt, die er unterstützt.

### Nicht standardisierte Attribute

- `target` {{Deprecated_Inline}}
  - : Definiert den Frame- oder Fensternamen, der die definierte Verknüpfungsbeziehung hat oder der die Darstellung einer verknüpften Ressource zeigt.

### Veraltete Attribute

- `charset` {{deprecated_inline}}
  - : Dieses Attribut definiert die Zeichenkodierung der verlinkten Ressource. Der Wert ist eine durch Leerzeichen- und/oder Komma getrennte Liste von Zeichensätzen, wie in {{rfc(2045)}} definiert. Der Standardwert ist `iso-8859-1`.

    > [!NOTE]
    > Um denselben Effekt wie dieses veraltete Attribut zu erzielen, verwenden Sie den {{HTTPHeader("Content-Type")}}-HTTP-Header auf der verlinkten Ressource.

- `rev` {{deprecated_inline}}
  - : Der Wert dieses Attributs zeigt die Beziehung des aktuellen Dokuments zum verlinkten Dokument, wie durch das [`href`](#href)-Attribut definiert. Das Attribut definiert somit die umgekehrte Beziehung im Vergleich zu dem Wert des `rel`-Attributs. [Linktyp-Werte](/de/docs/Web/HTML/Reference/Attributes/rel) für das Attribut sind ähnlich den möglichen Werten für [`rel`](#rel).

    > [!NOTE]
    > Anstelle von `rev` sollten Sie das [`rel`](#rel)-Attribut mit dem gegenläufigen [Linktyp-Wert](/de/docs/Web/HTML/Reference/Attributes/rel) verwenden. Zum Beispiel, um den Reverse-Link für `made` zu etablieren, verwenden Sie `author`. Außerdem steht dieses Attribut nicht für "Revision" und darf nicht mit einer Versionsnummer verwendet werden, obwohl viele Seiten es in dieser Weise missbrauchen.

## Beispiele

### Einbinden eines Stylesheets

Ein Stylesheet in eine Seite einzubinden, erfolgt mit folgendem Syntax:

```html
<link href="style.css" rel="stylesheet" />
```

### Bereitstellen alternativer Stylesheets

Sie können auch [alternative Stylesheets](/de/docs/Web/HTML/Reference/Attributes/rel/alternate_stylesheet) angeben.

Der Benutzer kann auswählen, welches Stylesheet benutzt werden soll, indem er es im Menü **Darstellung > Seitenstil** auswählt. Dies bietet eine Möglichkeit, mehreren Versionen einer Seite anzuzeigen.

```html
<link href="default.css" rel="stylesheet" title="Default Style" />
<link href="fancy.css" rel="alternate stylesheet" title="Fancy" />
<link href="basic.css" rel="alternate stylesheet" title="Basic" />
```

### Bereitstellen von Icons für verschiedene Nutzungskontexte

Sie können Links zu mehreren Icons auf derselben Seite einschließen und der Browser wählt anhand der `rel`- und `sizes`-Werte aus, welches am besten für seinen bestimmten Kontext geeignet ist.

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

Für Informationen darüber, welche `sizes` Sie für Apple-Icons wählen sollten, siehe [Apples Dokumentation zum Konfigurieren von Webanwendungen](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW4) und die referenzierten [Apple-Human-Interface-Guidelines](https://developer.apple.com/design/human-interface-guidelines/app-icons#App-icon-sizes). Normalerweise reicht es aus, ein großes Bild bereitzustellen, z. B. 192x192, und den Browser es bei Bedarf herunterzuskalieren zu lassen, aber Sie sollten möglicherweise Bilder mit verschiedenen Detaillierungsgraden für verschiedene Größen bereitstellen, wie die Apple-Designrichtlinien empfehlen. Das Bereitstellen kleinerer Icons für niedrigere Auflösungen spart auch Bandbreite.

Es ist möglicherweise nicht nötig, überhaupt `<link>`-Elemente bereitzustellen. Zum Beispiel fordern Browser automatisch `/favicon.ico` aus dem Root einer Site an und Apple fordert auch automatisch `/apple-touch-icon-[size].png`, `/apple-touch-icon.png` usw. an. Das Bereitstellen expliziter Links schützt jedoch gegen Änderungen an diesen Konventionen.

### Bedingtes Laden von Ressourcen mit Medienqueries

Sie können einen Medientyp oder eine Abfrage innerhalb eines `media`-Attributs bereitstellen; diese Ressource wird dann nur geladen, wenn die Medienbedingung wahr ist. Zum Beispiel:

```html
<link href="print.css" rel="stylesheet" media="print" />
<link href="mobile.css" rel="stylesheet" media="all" />
<link href="desktop.css" rel="stylesheet" media="screen and (width >= 600px)" />
<link
  href="highres.css"
  rel="stylesheet"
  media="screen and (resolution >= 300dpi)" />
```

### Stylesheet-Ladeereignisse

Sie können bestimmen, wann ein Stylesheet geladen wurde, indem Sie auf ein `load`-Ereignis achten, das darauf geschossen wird; ähnlich können Sie feststellen, ob ein Fehler beim Verarbeiten eines Stylesheets aufgetreten ist, indem Sie auf ein `error`-Ereignis achten:

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
> Das `load`-Ereignis wird ausgelöst, sobald das Stylesheet und all seine importierten Inhalte geladen und analysiert wurden und unmittelbar bevor die Styles auf den Inhalt angewendet werden.

### Preload-Beispiele

Sie können eine Reihe von `<link rel="preload">`-Beispielen in [Preloading content with `rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload) finden.

### Renderblockierung bis eine Ressource geholt ist

Sie können ein `render`-Token innerhalb eines `blocking`-Attributs einbinden; das Rendern der Seite wird blockiert, bis die Ressource geholt ist. Zum Beispiel:

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Strömungsinhalt</a> und
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Formulierungsinhalt</a>.
      </td>
    </tr>
    <tr>
      <th>Erlaubter Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "void element")}}.</td>
    </tr>
    <tr>
      <th>Tag-Auslassung</th>
      <td>Muss ein Start-Tag haben und darf keinen End-Tag haben.</td>
    </tr>
    <tr>
      <th>Erlaubte Eltern</th>
      <td>
        Jedes Element, das Metadaten-Elemente akzeptiert.
        Wenn <a href="/de/docs/Web/HTML/Reference/Global_attributes/itemprop">itemprop</a> vorhanden ist: jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Formulierungsinhalt</a> akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
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
