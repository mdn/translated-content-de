---
title: "`<link>`: Das Externe Ressourcenverknüpfungselement"
slug: Web/HTML/Element/link
l10n:
  sourceCommit: 7cd4706990ab95794415aee05ba0a9662e742a17
---

{{HTMLSidebar}}

Das **`<link>`**-[HTML](/de/docs/Web/HTML)-Element spezifiziert Beziehungen zwischen dem aktuellen Dokument und einer externen Ressource. Dieses Element wird am häufigsten verwendet, um auf {{Glossary("CSS", "Stylesheets")}} zu verweisen, wird aber auch verwendet, um Website-Icons festzulegen (sowohl im Favicon-Stil als auch für den Home-Bildschirm und Apps auf mobilen Geräten) und andere Dinge.

{{EmbedInteractiveExample("pages/tabbed/link.html", "tabbed-shorter")}}

Um ein externes Stylesheet zu verknüpfen, würden Sie ein `<link>`-Element in Ihrem {{HTMLElement("head")}} wie folgt einfügen:

```html
<link href="main.css" rel="stylesheet" />
```

Dieses einfache Beispiel gibt den Pfad zum Stylesheet im `href`-Attribut an, und ein [`rel`](/de/docs/Web/HTML/Attributes/rel)-Attribut mit dem Wert `stylesheet`. Das `rel` steht für "relationship" (Beziehung) und ist eine der Schlüsselkomponenten des `<link>`-Elements — der Wert gibt an, wie das verknüpfte Element mit dem enthaltenen Dokument in Beziehung steht.

Es gibt eine Reihe anderer häufiger Typen, denen Sie begegnen können. Zum Beispiel ein Link zur Website-Favicon:

```html
<link rel="icon" href="favicon.ico" />
```

Es gibt eine Reihe weiterer Icon-`rel`-Werte, die hauptsächlich verwendet werden, um spezielle Icon-Typen für den Einsatz auf verschiedenen mobilen Plattformen anzugeben, z.B.:

```html
<link
  rel="apple-touch-icon"
  sizes="114x114"
  href="apple-icon-114.png"
  type="image/png" />
```

Das `sizes`-Attribut gibt die Icon-Größe an, während `type` den MIME-Typ der verknüpften Ressource enthält. Diese bieten nützliche Hinweise, damit der Browser das am besten geeignete verfügbare Icon auswählen kann.

Sie können auch einen Medientyp oder -abfrage in einem `media`-Attribut angeben; diese Ressource wird dann nur geladen, wenn die Medienbedingung wahr ist. Zum Beispiel:

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

Ein `rel`-Wert von `preload` gibt an, dass der Browser diese Ressource vorausladen soll (siehe [`rel="preload"`](/de/docs/Web/HTML/Attributes/rel/preload) für weitere Details), wobei das `as`-Attribut die spezifische Klasse des abzurufenden Inhalts angibt. Das `crossorigin`-Attribut gibt an, ob die Ressource mit einer {{Glossary("CORS", "CORS")}}-Anfrage abgerufen werden soll.

Weitere Nutzungshinweise:

- Ein `<link>`-Element kann entweder im {{HTMLElement("head")}}- oder {{HTMLElement("body")}}-Element vorkommen, abhängig davon, ob es einen [Link-Typ](https://html.spec.whatwg.org/multipage/links.html#body-ok) hat, der **body-ok** ist. Beispielsweise ist der `stylesheet`-Link-Typ body-ok, und daher ist `<link rel="stylesheet">` im Body erlaubt. Dies ist jedoch keine gute Praxis; es ist sinnvoller, Ihre `<link>`-Elemente von Ihrem Body-Inhalt zu trennen, indem Sie sie in den `<head>` setzen.
- Wenn ein `<link>` verwendet wird, um ein Favicon für eine Website festzulegen, und Ihre Website eine Content Security Policy (CSP) verwendet, um ihre Sicherheit zu verbessern, gilt die Richtlinie auch für das Favicon. Wenn Sie Probleme haben, dass das Favicon nicht geladen wird, vergewissern Sie sich, dass die [`img-src`-Direktive](/de/docs/Web/HTTP/Headers/Content-Security-Policy/img-src) des {{HTTPHeader("Content-Security-Policy")}}-Headers den Zugriff darauf nicht verhindert.
- Die HTML- und XHTML-Spezifikationen definieren Ereignisbehandler für das `<link>`-Element, aber es bleibt unklar, wie sie verwendet würden.
- Unter XHTML 1.0 erfordern {{Glossary("void_element", "void elements")}} wie `<link>` einen nachgestellten Schrägstrich: `<link />`.
- WebTV unterstützt die Verwendung des Werts `next` für `rel`, um die nächste Seite in einer Dokumentenserie vorziladen.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `as`

  - : Dieses Attribut ist erforderlich, wenn [`rel="preload"`](/de/docs/Web/HTML/Attributes/rel/preload) auf dem `<link>`-Element gesetzt wurde, optional, wenn [`rel="modulepreload"`](/de/docs/Web/HTML/Attributes/rel/modulepreload) gesetzt wurde, und sollte ansonsten nicht verwendet werden. Es spezifiziert den Typ des Inhalts, der vom `<link>` geladen wird, was notwendig ist für das Anforderungsabgleich, die Anwendung der korrekten [Content Security Policy](/de/docs/Web/HTTP/CSP) und das Setzen des richtigen {{HTTPHeader("Accept")}}-Request-Headers.

    Des Weiteren nutzt `rel="preload"` dies als Signal für die Priorisierung von Anfragen. Die unten stehende Tabelle listet die gültigen Werte für dieses Attribut und die Elemente oder Ressourcen, auf die sie angewendet werden, auf.

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
          <td><code>&#x3C;iframe></code>- und <code>&#x3C;frame></code>-Elemente</td>
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
                <code>&#x3C;link></code> das crossorigin-Attribut enthält, siehe <a href="/de/docs/Web/HTML/Attributes/rel/preload#cors-enabled_fetches">CORS-fähige Abfragen</a>.
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
                <code>&#x3C;link></code> das crossorigin-Attribut enthält, siehe <a href="/de/docs/Web/HTML/Attributes/rel/preload#cors-enabled_fetches">CORS-fähige Abfragen</a>.
              </p>
            </div>
          </td>
        </tr>
        <tr>
          <td>image</td>
          <td>
            <code>&#x3C;img></code>- und <code>&#x3C;picture></code>-Elemente mit
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

  - : Dieses Attribut zeigt explizit an, dass bestimmte Operationen beim Abrufen einer externen Ressource blockiert werden sollten. Es darf nur verwendet werden, wenn das `rel`-Attribut `expect`- oder `stylesheet`-Schlüsselwörter enthält. Die Operationen, die blockiert werden sollen, müssen eine durch Leerzeichen getrennte Liste von Blockierungstoken sein, die unten aufgeführt sind.
    - `render`: Die Darstellung des Inhalts auf dem Bildschirm wird blockiert.

- [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)

  - : Dieses {{Glossary("Enumerated", "numerierte")}}-Attribut zeigt an, ob {{Glossary("CORS", "CORS")}} beim Abrufen der Ressource verwendet werden muss. [CORS-fähige Bilder](/de/docs/Web/HTML/CORS_enabled_image) können im {{HTMLElement("canvas")}}-Element ohne Verfälschung wiederverwendet werden. Die erlaubten Werte sind:

    - `anonymous`
      - : Eine Cross-Origin-Abfrage (d.h. mit einem {{HTTPHeader("Origin")}}-HTTP-Header) wird durchgeführt, jedoch werden keine Anmeldeinformationen gesendet (d.h. keine Cookies, X.509-Zertifikate oder HTTP-Basic-Authentifizierung). Wenn der Server der Ursprungsseite keine Anmeldeinformationen übermittelt (indem er nicht den {{HTTPHeader("Access-Control-Allow-Origin")}}-HTTP-Header setzt), wird die Ressource verfälscht und ihre Nutzung eingeschränkt.
    - `use-credentials`
      - : Eine Cross-Origin-Abfrage (d.h. mit einem `Origin`-HTTP-Header) wird durchgeführt, sowie eine Anmeldeinformation gesendet (z.B. ein Cookie, ein Zertifikat und/oder eine HTTP-Basic-Authentifizierung durchgeführt). Wenn der Server der Ursprungsseite keine Anmeldeinformationen übergibt (über den {{HTTPHeader("Access-Control-Allow-Credentials")}}-HTTP-Header), wird die Ressource verfälscht und ihre Nutzung eingeschränkt.

    Wenn das Attribut nicht vorhanden ist, wird die Ressource ohne eine {{Glossary("CORS", "CORS")}}-Abfrage abgerufen (d.h. ohne den `Origin`-HTTP-Header zu senden), was ihre ungetrübte Nutzung verhindert. Ist es ungültig, wird es behandelt, als ob das nummerierte Schlüsselwort **anonymous** verwendet worden wäre. Siehe [CORS-Einstellungen-Attribute](/de/docs/Web/HTML/Attributes/crossorigin) für zusätzliche Informationen.

- `disabled`

  - : Nur für `rel="stylesheet"`, zeigt das Boolean-Attribut `disabled` an, ob das beschriebene Stylesheet geladen und auf das Dokument angewendet werden soll. Wenn `disabled` im HTML beim Laden der Seite angegeben ist, wird das Stylesheet beim Seitenladen nicht geladen. Stattdessen wird das Stylesheet bei Bedarf geladen, wenn und wenn das `disabled`-Attribut auf `false` geändert oder entfernt wird.

    Das Setzen des `disabled`-Property im DOM führt dazu, dass das Stylesheet aus der [`Document.styleSheets`](/de/docs/Web/API/Document/styleSheets)-Liste des Dokuments entfernt wird.

- `fetchpriority`

  - : Bietet einen Hinweis auf die relative Priorität, die beim Abrufen einer Ressource eines bestimmten Typs verwendet werden soll. Erlaubte Werte:

    - `high`
      - : Ruft die Ressource mit hoher Priorität im Vergleich zu anderen Ressourcen desselben Typs ab.
    - `low`
      - : Ruft die Ressource mit niedriger Priorität im Vergleich zu anderen Ressourcen desselben Typs ab.
    - `auto`
      - : Legt keine Präferenz für die Abrufpriorität fest. Dies ist der Standardwert. Er wird verwendet, wenn kein Wert oder ein ungültiger Wert gesetzt ist.

    Siehe [`HTMLLinkElement.fetchPriority`](/de/docs/Web/API/HTMLLinkElement/fetchPriority) für weitere Informationen.

- `href`
  - : Dieses Attribut gibt die {{Glossary("URL", "URL")}} der verknüpften Ressource an. Eine URL kann absolut oder relativ sein.
- `hreflang`
  - : Dieses Attribut gibt die Sprache der verknüpften Ressource an. Es ist rein informativer Natur. Erlaubte Werte werden durch {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}} angegeben. Verwenden Sie dieses Attribut nur, wenn das [`href`](/de/docs/Web/HTML/Element/a#href)-Attribut vorhanden ist.
- `imagesizes`
  - : Nur für `rel="preload"` und `as="image"`, das `imagesizes`-Attribut hat eine ähnliche Syntax und Semantik wie das [`sizes`](/de/docs/Web/HTML/Element/img#sizes)-Attribut, das angibt, dass die entsprechende Ressource, die von einem `img`-Element mit entsprechenden Werten für seine `srcset`- und `sizes`-Attribute verwendet wird, vorgeladen wird.
- `imagesrcset`
  - : Nur für `rel="preload"` und `as="image"`, das `imagesrcset`-Attribut hat eine ähnliche Syntax und Semantik wie das [`srcset`](/de/docs/Web/HTML/Element/img#srcset)-Attribut, das angibt, dass die entsprechende Ressource, die von einem `img`-Element mit entsprechenden Werten für seine `srcset`- und `sizes`-Attribute verwendet wird, vorgeladen wird.
- `integrity`
  - : Enthält Inline-Metadaten — einen base64-kodierten kryptografischen Hash der Ressource (Datei), die Sie den Browser abrufen lassen. Der Browser kann dies verwenden, um zu überprüfen, ob die abgerufene Ressource ohne unerwartete Manipulation bereitgestellt wurde. Das Attribut darf nur angegeben werden, wenn das `rel`-Attribut auf `stylesheet`, `preload` oder `modulepreload` gesetzt ist. Siehe [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity).
- `media`

  - : Dieses Attribut spezifiziert die Medien, auf die die verknüpfte Ressource angewendet wird. Sein Wert muss ein Medientyp / [Medienabfrage](/de/docs/Web/CSS/CSS_media_queries) sein. Dieses Attribut ist hauptsächlich nützlich beim Verlinken auf externe Stylesheets — es ermöglicht es dem Nutzeragenten, das am besten angepasste für das Gerät auszuwählen, auf dem es läuft.

- `referrerpolicy`

  - : Ein String, der angibt, welchen Referrer Sie beim Abrufen der Ressource verwenden möchten:

    - `no-referrer` bedeutet, dass der {{HTTPHeader("Referer")}}-Header nicht gesendet wird.
    - `no-referrer-when-downgrade` bedeutet, dass kein {{HTTPHeader("Referer")}}-Header gesendet wird, wenn zu einem Ursprung ohne TLS (HTTPS) navigiert wird. Dies ist das standardmäßige Verhalten des Benutzeragenten, wenn keine andere Richtlinie angegeben ist.
    - `origin` bedeutet, dass der Referrer der Ursprung der Seite sein wird, was ungefähr das Schema, den Host und den Port beinhaltet.
    - `origin-when-cross-origin` bedeutet, dass die Navigation zu anderen Ursprüngen auf das Schema, den Host und den Port beschränkt wird, während die Navigation auf demselben Ursprung den Pfad des Referrers einschließen wird.
    - `unsafe-url` bedeutet, dass der Referrer den Ursprung und den Pfad einschließt (jedoch nicht das Fragment, Passwort oder Benutzername). Dieser Fall ist unsicher, da er Ursprünge und Pfade von TLS-geschützten Ressourcen zu unsicheren Ursprüngen leaken kann.

- [`rel`](/de/docs/Web/HTML/Attributes/rel)
  - : Dieses Attribut benennt die Beziehung des verlinkten Dokuments zum aktuellen Dokument. Das Attribut muss eine durch Leerzeichen getrennte Liste von [Link-Typ-Werten](/de/docs/Web/HTML/Attributes/rel) sein.
- `sizes`

  - : Dieses Attribut definiert die Größen der Icons für visuelle Medien, die in der Ressource enthalten sind. Es muss nur vorhanden sein, wenn das [`rel`](#rel) einen Wert von `icon` oder einen nicht standardmäßigen Typ wie Apples `apple-touch-icon` enthält. Es kann die folgenden Werte haben:

    - `any`, was bedeutet, dass das Icon in jede Größe skaliert werden kann, da es in einem Vektorformat wie `image/svg+xml` vorliegt.
    - eine durch Leerzeichen getrennte Liste von Größen, jede im Format `<Breite in Pixel>x<Höhe in Pixel>` oder `<Breite in Pixel>X<Höhe in Pixel>`. Jede dieser Größen muss in der Ressource enthalten sein.

    > [!NOTE]
    > Die meisten Icon-Formate sind nur in der Lage, ein einziges Icon zu speichern; daher enthält das [`sizes`](#sizes)-Attribut meistens nur einen Eintrag. Microsofts ICO-Format und Apples ICNS-Format können jedoch mehrere Icon-Größen in einer Datei speichern. ICO hat eine bessere Browserunterstützung, daher sollten Sie dieses Format verwenden, wenn plattformübergreifende Unterstützung eine Rolle spielt.

- `title`
  - : Das `title`-Attribut hat spezielle Semantik auf dem `<link>`-Element. Wenn es auf einem `<link rel="stylesheet">` verwendet wird, definiert es ein [Standard- oder alternatives Stylesheet](/de/docs/Web/CSS/Alternative_style_sheets).
- `type`
  - : Dieses Attribut wird verwendet, um den Typ des verlinkten Inhalts zu definieren. Der Wert des Attributs sollte ein MIME-Typ sein, wie **text/html**, **text/css** und so weiter. Der häufige Gebrauch dieses Attributs ist, den Typ des referenzierten Stylesheets zu definieren (wie **text/css**), aber da CSS die einzige Stylesheet-Sprache im Web ist, ist es nicht nur möglich, das `type`-Attribut wegzulassen, sondern es ist tatsächlich die empfohlene Praxis. Es wird auch bei `rel="preload"`-Link-Typen verwendet, um sicherzustellen, dass der Browser nur Dateitypen herunterlädt, die er unterstützt.

### Nicht-standardisierte Attribute

- `target` {{Deprecated_Inline}}
  - : Definiert den Frame oder Fensternamen, das die definierte Verknüpfungsbeziehung hat oder das Rendering einer verlinkten Ressource anzeigen wird.

### Veraltete Attribute

- `charset` {{deprecated_inline}}

  - : Dieses Attribut definiert die Zeichencodierung der verlinkten Ressource. Der Wert ist eine durch Leerzeichen und/oder Kommata getrennte Liste von Zeichensätzen, wie in {{rfc(2045)}} definiert. Der Standardwert ist `iso-8859-1`.

    > [!NOTE]
    > Um denselben Effekt wie dieses veraltete Attribut zu erzielen, verwenden Sie den {{HTTPHeader("Content-Type")}}-HTTP-Header auf der verlinkten Ressource.

- `rev` {{deprecated_inline}}

  - : Der Wert dieses Attributs zeigt die Beziehung des aktuellen Dokuments zum verlinkten Dokument, wie durch das [`href`](#href)-Attribut definiert. Das Attribut definiert somit die umgekehrte Beziehung im Vergleich zum Wert des `rel`-Attributs. [Link-Typ-Werte](/de/docs/Web/HTML/Attributes/rel) für das Attribut sind ähnlich den möglichen Werten für [`rel`](#rel).

    > [!NOTE]
    > Anstelle von `rev` sollten Sie das [`rel`](#rel)-Attribut mit dem gegenteiligen [Link-Typ-Wert](/de/docs/Web/HTML/Attributes/rel) verwenden. Beispielsweise, um den umgekehrten Link für `made` zu erstellen, geben Sie `author` an. Außerdem steht dieses Attribut nicht für "Revision" und darf nicht mit einer Versionsnummer verwendet werden, obwohl es viele Seiten in dieser Weise missbrauchen.

## Beispiele

### Einbinden eines Stylesheets

Um ein Stylesheet in eine Seite einzubinden, verwenden Sie die folgende Syntax:

```html
<link href="style.css" rel="stylesheet" />
```

### Bereitstellung alternativer Stylesheets

Sie können auch [alternative Stylesheets](/de/docs/Web/CSS/Alternative_style_sheets) angeben.

Der Benutzer kann auswählen, welches Stylesheet verwendet werden soll, indem er es aus dem **Ansicht > Seitenstil**-Menü auswählt. Dies bietet eine Möglichkeit für Benutzer, mehrere Versionen einer Seite zu sehen.

```html
<link href="default.css" rel="stylesheet" title="Default Style" />
<link href="fancy.css" rel="alternate stylesheet" title="Fancy" />
<link href="basic.css" rel="alternate stylesheet" title="Basic" />
```

### Bereitstellung von Icons für unterschiedliche Nutzungskontexte

Sie können Links zu mehreren Icons auf derselben Seite einfügen, und der Browser wählt dasjenige aus, das am besten für seinen bestimmten Kontext geeignet ist, indem er die `rel`- und `sizes`-Werte als Hinweise verwendet.

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

Informationen darüber, welche `sizes` Sie für Apple Icons wählen sollten, finden Sie in [Apples Dokumentation zur Konfiguration von Webanwendungen](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW4) und den referenzierten [Apple human interface guidelines](https://developer.apple.com/design/human-interface-guidelines/app-icons#App-icon-sizes). Meistens ist es ausreichend, ein großes Bild, wie 192x192, bereitzustellen und den Browser es nach Bedarf zu skalieren zu lassen, aber Sie möchten möglicherweise Bilder mit unterschiedlichen Detailstufen für verschiedene Größen bereitstellen, wie es die Apple Designrichtlinie empfiehlt. Das Bereitstellen kleinerer Icons für niedrigere Auflösungen spart auch Bandbreite.

Es kann nicht notwendig sein, überhaupt `<link>`-Elemente bereitzustellen. Beispielsweise fordern Browser automatisch `/favicon.ico` vom Stamm einer Site an, und Apple fordert auch automatisch `/apple-touch-icon-[size].png`, `/apple-touch-icon.png`, etc. an. Das explizite Bereitstellen von Links schützt Sie jedoch vor Änderungen dieser Konventionen.

### Bedingtes Laden von Ressourcen mit Medienabfragen

Sie können einen Medientyp oder eine Abfrage innerhalb eines `media`-Attributs angeben;
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

### Ladeereignisse für Stylesheets

Sie können feststellen, wann ein Stylesheet geladen wurde, indem Sie auf ein `load`-Ereignis warten; ähnlich können Sie feststellen, ob ein Fehler beim Verarbeiten eines Stylesheets aufgetreten ist, indem Sie auf ein `error`-Ereignis warten:

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
> Das `load`-Ereignis wird ausgelöst, sobald das Stylesheet und all seine importierten Inhalte geladen und geparst wurden, und unmittelbar bevor die Stile auf den Inhalt angewendet werden.

### Preload-Beispiele

Sie finden eine Reihe von `<link rel="preload">`-Beispielen in [Preloading content with `rel="preload"`](/de/docs/Web/HTML/Attributes/rel/preload).

### Blockieren des Renderings bis eine Ressource abgerufen ist

Sie können das `render`-Token in einem `blocking`-Attribut enthalten; das Rendering der Seite wird blockiert, bis die Ressource abgerufen ist. Zum Beispiel:

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
        Wenn <a href="/de/docs/Web/HTML/Global_attributes/itemprop">itemprop</a> vorhanden ist: jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Phraseninhalt</a> akzeptiert.
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
