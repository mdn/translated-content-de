---
title: "<link>: Das External Resource Link-Element"
slug: Web/HTML/Element/link
l10n:
  sourceCommit: 176953b8260e0dd4328a7e788e8179accbafb8e1
---

{{HTMLSidebar}}

Das **`<link>`** [HTML](/de/docs/Web/HTML)-Element spezifiziert Beziehungen zwischen dem aktuellen Dokument und einer externen Ressource. Dieses Element wird am häufigsten verwendet, um auf {{Glossary("CSS", "Stylesheets")}} zu verweisen, aber es wird auch verwendet, um Site-Icons zu etablieren (sowohl „Favicon“-Style-Icons als auch Icons für den Startbildschirm und Apps auf mobilen Geräten) und andere Dinge.

{{EmbedInteractiveExample("pages/tabbed/link.html", "tabbed-shorter")}}

Um ein externes Stylesheet zu verlinken, würden Sie ein `<link>`-Element in Ihrem {{HTMLElement("head")}} wie folgt einfügen:

```html
<link href="main.css" rel="stylesheet" />
```

Dieses Beispiel gibt den Pfad zum Stylesheet innerhalb eines `href`-Attributs und ein [`rel`](/de/docs/Web/HTML/Attributes/rel)-Attribut mit dem Wert `stylesheet` an. Das `rel` steht für "relationship" (Beziehung) und ist eine der Hauptmerkmale des `<link>`-Elements — der Wert gibt an, wie das Element, auf das verwiesen wird, mit dem enthaltenen Dokument in Beziehung steht.

Es gibt eine Reihe anderer gängiger Typen, auf die Sie stoßen werden. Zum Beispiel ein Link zum Favicon der Seite:

```html
<link rel="icon" href="favicon.ico" />
```

Es gibt eine Reihe weiterer Icon-`rel`-Werte, die hauptsächlich verwendet werden, um spezielle Icon-Typen für die Nutzung auf verschiedenen mobilen Plattformen anzugeben, z. B.:

```html
<link
  rel="apple-touch-icon"
  sizes="114x114"
  href="apple-icon-114.png"
  type="image/png" />
```

Das `sizes`-Attribut gibt die Icon-Größe an, während `type` den MIME-Typ der Ressource enthält, auf die verwiesen wird. Diese geben nützliche Hinweise, um dem Browser zu ermöglichen, das am besten geeignete verfügbare Icon auszuwählen.

Sie können auch einen Medientyp oder eine Abfrage innerhalb eines `media`-Attributs angeben; diese Ressource wird dann nur geladen, wenn die Medienbedingung zutrifft. Zum Beispiel:

```html
<link href="print.css" rel="stylesheet" media="print" />
<link
  href="mobile.css"
  rel="stylesheet"
  media="screen and (max-width: 600px)" />
```

Einige interessante neue Leistungs- und Sicherheitsfunktionen wurden auch dem `<link>`-Element hinzugefügt. Nehmen Sie dieses Beispiel:

```html
<link
  rel="preload"
  href="myFont.woff2"
  as="font"
  type="font/woff2"
  crossorigin="anonymous" />
```

Ein `rel`-Wert von `preload` zeigt an, dass der Browser diese Ressource vorladen sollte (siehe [`rel="preload"`](/de/docs/Web/HTML/Attributes/rel/preload) für weitere Details), wobei das `as`-Attribut die spezifische Klasse des abzurufenden Inhalts angibt. Das `crossorigin`-Attribut gibt an, ob die Ressource mit einer {{Glossary("CORS", "CORS")}}-Anfrage abgerufen werden soll.

Weitere Nutzungshinweise:

- Ein `<link>`-Element kann entweder im {{HTMLElement("head")}} oder {{HTMLElement("body")}}-Element vorkommen, abhängig davon, ob es einen [link type](https://html.spec.whatwg.org/multipage/links.html#body-ok) hat, der **body-ok** ist. Zum Beispiel ist der `stylesheet` Link-Typ body-ok und daher ist `<link rel="stylesheet">` im Body erlaubt. Dies ist jedoch keine gute Praxis; es macht mehr Sinn, Ihre `<link>`-Elemente von Ihrem Body-Inhalt zu trennen, indem Sie sie im `<head>` platzieren.
- Wenn Sie `<link>` verwenden, um ein Favicon für eine Site zu etablieren, und Ihre Site eine Content Security Policy (CSP) verwendet, um deren Sicherheit zu verbessern, gilt die Richtlinie für das Favicon. Wenn Sie Probleme mit dem Laden des Favicons haben, überprüfen Sie, dass der {{HTTPHeader("Content-Security-Policy")}}-Header's [`img-src` directive](/de/docs/Web/HTTP/Headers/Content-Security-Policy/img-src) den Zugriff nicht verhindert.
- Die HTML- und XHTML-Spezifikationen definieren Ereignis-Handler für das `<link>`-Element, aber es ist unklar, wie sie verwendet würden.
- Unter XHTML 1.0 erfordern {{Glossary("void_element", "void elements")}} wie `<link>` einen abschließenden Schrägstrich: `<link />`.
- WebTV unterstützt die Verwendung des Wertes `next` für `rel`, um die nächste Seite in einer Dokumentserie vorzuschalten.

## Attribute

Dieses Element enthält die [global attributes](/de/docs/Web/HTML/Global_attributes).

- `as`

  - : Dieses Attribut ist erforderlich, wenn [`rel="preload"`](/de/docs/Web/HTML/Attributes/rel/preload) auf dem `<link>`-Element gesetzt wurde, optional, wenn [`rel="modulepreload"`](/de/docs/Web/HTML/Attributes/rel/modulepreload) gesetzt wurde, und sollte sonst nicht verwendet werden. Es spezifiziert den Typ von Inhalt, der durch das `<link>` geladen wird, welcher für die Anforderung von Übereinstimmungen, Anwendung der korrekten [Inhalts-Sicherheitsrichtlinie](/de/docs/Web/HTTP/CSP) und das Setzen der korrekten {{HTTPHeader("Accept")}}-Request-Header notwendig ist.

    Außerdem nutzt `rel="preload"` dies als Signal für die Priorisierung von Anfragen. Die folgende Tabelle listet die gültigen Werte für dieses Attribut und die Elemente oder Ressourcen auf, auf die sie zutreffen.

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

  - : Dieses Attribut zeigt explizit an, dass bestimmte Operationen auf das Abrufen einer externen Ressource blockiert werden sollten. Es darf nur verwendet werden, wenn das `rel`-Attribut die Schlüsselwörter `expect` oder `stylesheet` enthält. Die zu blockierenden Operationen müssen eine durch Leerzeichen getrennte Liste von unten aufgelisteten Blockierungstoken sein.
    - `render`: Das Rendern von Inhalten auf dem Bildschirm wird blockiert.

- [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)

  - : Dieses {{Glossary("Enumerated", "enumerierte")}} Attribut gibt an, ob {{Glossary("CORS", "CORS")}} verwendet werden muss, um die Ressource zu laden. [CORS-fähige Bilder](/de/docs/Web/HTML/CORS_enabled_image) können im {{HTMLElement("canvas")}}-Element wiederverwendet werden, ohne _verfälscht_ zu werden. Die zulässigen Werte sind:

    - `anonymous`
      - : Ein Cross-Origin-Anfrage (d. h. mit einem {{HTTPHeader("Origin")}}-HTTP-Header) wird durchgeführt, aber kein Berechtigungsnachweis gesendet (d. h. kein Cookie, X.509-Zertifikat oder HTTP Basic-Authentifizierung). Wenn der Server keine Berechtigungen an die Ursprungsseite gibt (durch nicht Setzen des {{HTTPHeader("Access-Control-Allow-Origin")}}-HTTP-Headers), wird die Ressource verfälscht und ihre Nutzung eingeschränkt.
    - `use-credentials`
      - : Ein Cross-Origin-Anfrage (d. h. mit einem `Origin`-HTTP-Header) wird zusammen mit einem gesendeten Berechtigungsnachweis durchgeführt (d. h. ein Cookie, Zertifikat und/oder HTTP Basic-Authentifizierung wird durchgeführt). Wenn der Server keine Berechtigungen an die Ursprungsseite gibt (durch den {{HTTPHeader("Access-Control-Allow-Credentials")}}-HTTP-Header), wird die Ressource _verfälscht_ und ihre Nutzung eingeschränkt.

    Wenn das Attribut nicht vorhanden ist, wird die Ressource ohne eine {{Glossary("CORS", "CORS")}}-Anfrage abgerufen (d. h. ohne Senden des `Origin`-HTTP-Headers), was ihre unverfälschte Nutzung verhindert. Wenn ungültig, wird es behandelt, als ob das enumerierte Schlüsselwort **anonymous** verwendet wurde. Siehe [CORS-Einstellungen Attribute](/de/docs/Web/HTML/Attributes/crossorigin) für weitere Informationen.

- `disabled`

  - : Nur für `rel="stylesheet"`: Das `disabled`-Boolean-Attribut gibt an, ob das beschriebene Stylesheet geladen und auf das Dokument angewendet werden soll. Wenn `disabled` im HTML beim Laden festgelegt ist, wird das Stylesheet nicht während des Ladens der Seite geladen. Stattdessen wird das Stylesheet auf Anfrage geladen, falls und wenn das `disabled`-Attribut auf `false` geändert oder entfernt wird.

    Das Setzen der `disabled`-Eigenschaft im DOM bewirkt, dass das Stylesheet aus der [`Document.styleSheets`](/de/docs/Web/API/Document/styleSheets)-Liste des Dokuments entfernt wird.

- `fetchpriority`

  - : Bietet einen Hinweis auf die relative Priorität, die beim Abrufen einer Ressource eines bestimmten Typs verwendet werden soll. Erlaubte Werte:

    - `high`
      - : Rufe die Ressource mit hoher Priorität relativ zu anderen Ressourcen gleichen Typs ab.
    - `low`
      - : Rufe die Ressource mit niedriger Priorität relativ zu anderen Ressourcen gleichen Typs ab.
    - `auto`
      - : Setze keine Präferenz für die Abrufpriorität.
        Dies ist die Standardeinstellung.
        Es wird verwendet, wenn kein Wert oder ein ungültiger Wert gesetzt ist.

    Siehe [`HTMLLinkElement.fetchPriority`](/de/docs/Web/API/HTMLLinkElement/fetchPriority) für weitere Informationen.

- `href`
  - : Dieses Attribut spezifiziert die {{Glossary("URL", "URL")}} der verknüpften Ressource. Eine URL kann absolut oder relativ sein.
- `hreflang`
  - : Dieses Attribut gibt die Sprache der verknüpften Ressource an.
    Es ist rein beratend.
    Erlaubte Werte werden von {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}} spezifiziert.
    Verwenden Sie dieses Attribut nur, wenn das [`href`](/de/docs/Web/HTML/Element/a#href) Attribut vorhanden ist.
- `imagesizes`
  - : Nur für `rel="preload"` und `as="image"`: Das Attribut `imagesizes` hat eine ähnliche Syntax und Semantik wie das [`sizes`](/de/docs/Web/HTML/Element/img#sizes)-Attribut, das angibt, das entsprechende Element zu laden, das von einem `img`-Element mit entsprechenden Werten für seine `srcset`- und `sizes`-Attribute verwendet wird.
- `imagesrcset`
  - : Nur für `rel="preload"` und `as="image"`: Das Attribut `imagesrcset` hat eine ähnliche Syntax und Semantik wie das [`srcset`](/de/docs/Web/HTML/Element/img#srcset)-Attribut, das angibt, das entsprechende Element vorzula
- `integrity`
  - : Enthält Inline-Metadaten — einen base64-kodierten kryptografischen Hash der Ressource (Datei), die Sie dem Browser mitteilen, abzurufen.
    Der Browser kann dies verwenden, um zu überprüfen, dass die abgerufene Ressource ohne unerwartete Manipulation geliefert wurde.
    Das Attribut darf nur angegeben werden, wenn das `rel`-Attribut auf `stylesheet`, `preload` oder `modulepreload` gesetzt ist.
    Siehe [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity).
- `media`

  - : Dieses Attribut gibt das Medium an, auf das die verknüpfte Ressource angewendet wird. Sein Wert muss ein Medientyp / [Medienabfrage](/de/docs/Web/CSS/CSS_media_queries) sein.
    Dieses Attribut ist hauptsächlich nützlich, wenn auf externe Stylesheets verwiesen wird — es erlaubt dem Benutzeragenten, das am besten angepasste für das Gerät auszuwählen, auf dem es ausgeführt wird.

- `referrerpolicy`

  - : Ein Zeichenfolgenwert, der angibt, welcher Referrer beim Abrufen der Ressource verwendet werden soll:

    - `no-referrer` bedeutet, dass der {{HTTPHeader("Referer")}}-Header nicht gesendet wird.
    - `no-referrer-when-downgrade` bedeutet, dass beim Navigieren zu einem Ursprung ohne TLS (HTTPS) kein {{HTTPHeader("Referer")}}-Header gesendet wird.
      Dies ist das Standardverhalten eines Benutzeragenten, wenn keine andere Richtlinie angegeben ist.
    - `origin` bedeutet, dass der Referrer der Ursprung der Seite sein wird, was in etwa dem Schema, dem Host und dem Port entspricht.
    - `origin-when-cross-origin` bedeutet, dass beim Navigieren zu anderen Ursprüngen auf Schema, Host und Port beschränkt wird, während beim Navigieren im selben Ursprung der Pfad des Referrers umfasst wird.
    - `unsafe-url` bedeutet, dass der Referrer den Ursprung und den Pfad umfasst (nicht aber das Fragment, Passwort oder den Benutzernamen).
      Dieser Fall ist unsicher, weil er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge leaken kann.

- [`rel`](/de/docs/Web/HTML/Attributes/rel)
  - : Dieses Attribut benennt eine Beziehung des verknüpften Dokuments zum aktuellen Dokument. Das Attribut muss eine durch Leerzeichen getrennte Liste von [link type values](/de/docs/Web/HTML/Attributes/rel) sein.
- `sizes`

  - : Dieses Attribut definiert die Größen der Icons für visuelle Medien, die in der Ressource enthalten sind.
    Es darf nur vorhanden sein, wenn die [`rel`](#rel) einen Wert von `icon` oder einen nicht standardmäßigen Typ wie Apples `apple-touch-icon` enthält.
    Es kann folgende Werte haben:

    - `any`, was bedeutet, dass das Icon auf jede Größe skaliert werden kann, da es ein Vektorformat wie `image/svg+xml` ist.
    - eine durch Leerraum getrennte Liste von Größen, jeweils im Format `<Breite in Pixeln>x<Höhe in Pixeln>` oder `<Breite in Pixeln>X<Höhe in Pixeln>`. Jede dieser Größen muss in der Ressource enthalten sein.

    > [!NOTE]
    > Die meisten Icon-Formate sind nur in der Lage, ein einzelnes Icon zu speichern; daher enthält das [`sizes`](#sizes)-Attribut meistens nur einen Eintrag.
    > Microsofts ICO-Format und Apples ICNS-Format können mehrere Icon-Größen in einer einzigen Datei speichern. ICO hat bessere Browser-Unterstützung, daher sollten Sie dieses Format verwenden, wenn die Unterstützung in verschiedenen Browsern ein Anliegen ist.

- `title`
  - : Das `title`-Attribut hat spezielle Semantiken auf dem `<link>`-Element.
    Wenn auf ein `<link rel="stylesheet">` verwendet, definiert es ein [Standard- oder ein alternatives Stylesheet](/de/docs/Web/HTML/Attributes/rel/alternate_stylesheet).
- `type`
  - : Dieses Attribut wird verwendet, um den Typ des verlinkten Inhalts zu definieren.
    Der Wert des Attributs sollte ein MIME-Typ wie **text/html**, **text/css** usw. sein.
    Der häufigste Gebrauch dieses Attributs ist, den Typ des referenzierten Stylesheets zu definieren (wie **text/css**), aber da CSS das einzige verwendete Stylesheet auf dem Web ist, ist es nicht nur möglich, das `type`-Attribut zu weglassen, sondern es wird tatsächlich jetzt als empfohlene Praxis angesehen.
    Es wird auch auf `rel="preload"` Linktypen verwendet, um sicherzustellen, dass der Browser nur Dateitypen herunterlädt, die er unterstützt.

### Nicht-standardmäßige Attribute

- `target` {{Deprecated_Inline}}
  - : Definiert den Frame oder Fenstername, der die definierte Verknüpfungsbeziehung hat oder der die Wiedergabe der verknüpften Ressource zeigen wird.

### Veraltete Attribute

- `charset` {{deprecated_inline}}

  - : Dieses Attribut definiert die Zeichenkodierung der verlinkten Ressource.
    Der Wert ist eine durch Leerzeichen und/oder Kommata getrennte Liste von Zeichensätzen, wie sie in {{rfc(2045)}} definiert sind.
    Der Standardwert ist `iso-8859-1`.

    > [!NOTE]
    > Um den gleichen Effekt wie dieses veraltete Attribut zu erzielen, verwenden Sie den {{HTTPHeader("Content-Type")}}-HTTP-Header bei der verlinkten Ressource.

- `rev` {{deprecated_inline}}

  - : Der Wert dieses Attributs zeigt die Beziehung des aktuellen Dokuments zum verknüpften Dokument an, wie es durch das [`href`](#href)-Attribut definiert ist.
    Das Attribut definiert somit die umgekehrte Beziehung im Vergleich zu dem Wert des `rel`-Attributs.
    [Link type values](/de/docs/Web/HTML/Attributes/rel) für das Attribut sind ähnlich den möglichen Werten für [`rel`](#rel).

    > [!NOTE]
    > Statt `rev` sollten Sie das [`rel`](#rel)-Attribut mit dem entgegengesetzten [link type value](/de/docs/Web/HTML/Attributes/rel) verwenden.
    > Zum Beispiel, um die umgekehrte Verknüpfung für `made` herzustellen, geben Sie `author` an. Dieses Attribut steht auch nicht für „Revision“ und darf nicht mit einer Versionsnummer verwendet werden, obwohl viele Websites es in dieser Weise missbrauchen.

## Beispiele

### Einschließen eines Stylesheets

Um ein Stylesheet in eine Seite einzuschließen, verwenden Sie die folgende Syntax:

```html
<link href="style.css" rel="stylesheet" />
```

### Bereitstellung alternativer Stylesheets

Sie können auch [alternative Stylesheets](/de/docs/Web/HTML/Attributes/rel/alternate_stylesheet) angeben.

Der Benutzer kann das zu verwendende Stylesheet auswählen, indem er es aus dem **Ansicht > Seitenstil**-Menü auswählt.
Dies bietet eine Möglichkeit für Benutzer, mehrere Versionen einer Seite zu sehen.

```html
<link href="default.css" rel="stylesheet" title="Default Style" />
<link href="fancy.css" rel="alternate stylesheet" title="Fancy" />
<link href="basic.css" rel="alternate stylesheet" title="Basic" />
```

### Bereitstellung von Icons für verschiedene Nutzungskontexte

Sie können Links zu mehreren Icons auf derselben Seite einfügen, und der Browser wählt anhand der `rel`- und `sizes`-Angaben das aus, das für seinen speziellen Kontext am besten geeignet ist.

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

Für Informationen dazu, welche `sizes` Sie für Apple-Icons wählen sollten, siehe [Apples Dokumentation zur Konfiguration von Webanwendungen](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW4) und die referenzierten [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/app-icons#App-icon-sizes). Es ist normalerweise ausreichend, ein großes Bild, wie 192x192, bereitzustellen und den Browser die Skalierung nach Bedarf vornehmen zu lassen. Aber Sie könnten Bilder mit unterschiedlichen Detailstufen für unterschiedliche Größen bereitstellen, wie es die Apple-Design-Richtlinien empfehlen. Das Bereitstellen kleinerer Icons für niedrigere Auflösungen spart auch Bandbreite.

Es ist möglicherweise nicht notwendig, `<link>`-Elemente überhaupt bereitzustellen. Zum Beispiel fordern Browser automatisch `/favicon.ico` aus dem Root einer Seite an, und Apple fordert auch automatisch `/apple-touch-icon-[größe].png`, `/apple-touch-icon.png` usw. an. Das Bereitstellen expliziter Links kann jedoch gegen Änderungen dieser Konventionen schützen.

### Bedingtes Laden von Ressourcen mit Medienabfragen

Sie können einen Medientyp oder eine Abfrage innerhalb eines `media`-Attributs angeben;
diese Ressource wird dann nur geladen, wenn die Medienbedingung zutrifft. Zum Beispiel:

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

Sie können bestimmen, wann ein Stylesheet geladen wurde, indem Sie auf ein `load`-Ereignis lauschen; ähnlich können Sie feststellen, ob ein Fehler beim Verarbeiten eines Stylesheets aufgetreten ist, indem Sie auf ein `error`-Ereignis achten:

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
> Das `load`-Ereignis wird ausgelöst, sobald das Stylesheet und all seinen importierten Inhalte geladen und analysiert wurden, und unmittelbar bevor die Styles auf den Inhalt angewendet werden.

### Preload-Beispiele

Sie finden eine Reihe von `<link rel="preload">`-Beispielen in [Vorladen von Inhalten mit `rel="preload"`](/de/docs/Web/HTML/Attributes/rel/preload).

### Blockierung des Renderings, bis eine Ressource abgerufen ist

Sie können das `render`-Token innerhalb eines `blocking`-Attributs einschließen;
das Rendering der Seite wird blockiert, bis die Ressource abgerufen ist. Zum Beispiel:

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
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Fließender Inhalt</a> und
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Phraseninhalt</a>.
      </td>
    </tr>
    <tr>
      <th>Zulässiger Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "void element")}}.</td>
    </tr>
    <tr>
      <th>Tag-Auslassung</th>
      <td>Muss ein Start-Tag haben und darf kein End-Tag haben.</td>
    </tr>
    <tr>
      <th>Zulässige Eltern</th>
      <td>
        Jedes Element, das Metadatenelemente akzeptiert.
        Wenn <a href="/de/docs/Web/HTML/Global_attributes/itemprop">itemprop</a> vorhanden ist: jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Phraseninhalt</a> akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td><a href="/de/docs/Web/Accessibility/ARIA/Roles/link_role"><code>link</code></a> mit <code>href</code> Attribut</td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
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
