---
title: "`<link>`: Das externe Ressourcen-Element "
slug: Web/HTML/Element/link
l10n:
  sourceCommit: ca8be373334524886ee437112d7eae180a59be48
---

{{HTMLSidebar}}

Das **`<link>`** [HTML](/de/docs/Web/HTML) Element spezifiziert Beziehungen zwischen dem aktuellen Dokument und einer externen Ressource. Dieses Element wird am häufigsten verwendet, um auf {{Glossary("CSS", "Stylesheets")}} zu verlinken, aber auch, um Site-Icons zu etablieren (sowohl "Favoriten"-Icons als auch Icons für den Startbildschirm und Apps auf mobilen Geräten) und anderes.

{{EmbedInteractiveExample("pages/tabbed/link.html", "tabbed-shorter")}}

Um ein externes Stylesheet zu verlinken, würden Sie ein `<link>` Element innerhalb Ihres {{HTMLElement("head")}} einfügen, wie folgt:

```html
<link href="main.css" rel="stylesheet" />
```

Dieses einfache Beispiel stellt den Pfad zum Stylesheet innerhalb eines `href`-Attributs bereit sowie ein [`rel`](/de/docs/Web/HTML/Attributes/rel)-Attribut mit dem Wert `stylesheet`. Das `rel` steht für "Beziehung" und ist eines der Schlüsselelemente des `<link>`-Elements — der Wert gibt an, wie das verlinkte Element mit dem enthaltenen Dokument verwandt ist.

Es gibt eine Reihe weiterer gängiger Typen, die Sie möglicherweise antreffen. Zum Beispiel einen Link zum Favicon der Seite:

```html
<link rel="icon" href="favicon.ico" />
```

Es gibt eine Reihe weiterer Icon-`rel`-Werte, die hauptsächlich verwendet werden, um spezielle Icon-Typen für verschiedene mobile Plattformen anzuzeigen, z. B.:

```html
<link
  rel="apple-touch-icon"
  sizes="114x114"
  href="apple-icon-114.png"
  type="image/png" />
```

Das `sizes`-Attribut gibt die Symbolgröße an, während `type` den MIME-Typ der verlinkten Ressource enthält. Diese bieten nützliche Hinweise, damit der Browser das am besten geeignete verfügbare Icon auswählen kann.

Sie können auch einen Medientyp oder eine Abfrage in einem `media`-Attribut angeben; diese Ressource wird dann nur geladen, wenn die Medienbedingung zutrifft. Zum Beispiel:

```html
<link href="print.css" rel="stylesheet" media="print" />
<link
  href="mobile.css"
  rel="stylesheet"
  media="screen and (max-width: 600px)" />
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

Ein `rel`-Wert von `preload` gibt an, dass der Browser diese Ressource vorladen soll (siehe [`rel="preload"`](/de/docs/Web/HTML/Attributes/rel/preload) für weitere Details), wobei das `as`-Attribut die spezifische Klasse des Inhalts angibt, der abgerufen wird. Das `crossorigin`-Attribut gibt an, ob die Ressource mit einer {{Glossary("CORS", "CORS")}}-Anfrage abgerufen werden soll.

Weitere Anmerkungen zur Verwendung:

- Ein `<link>`-Element kann entweder im {{HTMLElement("head")}}-Element oder im {{HTMLElement("body")}}-Element auftreten, abhängig davon, ob es einen [Link-Typ](https://html.spec.whatwg.org/multipage/links.html#body-ok) hat, der **body-ok** ist. Beispielsweise ist der `stylesheet`-Linktyp body-ok, und daher ist `<link rel="stylesheet">` im Body erlaubt. Dennoch ist es keine gute Praxis, dies zu befolgen; es ist sinnvoller, Ihre `<link>`-Elemente von Ihrem Body-Inhalt zu trennen und sie in den `<head>` zu setzen.
- Beim Verwenden von `<link>`, um für eine Seite ein Favicon zu etablieren, und Ihre Seite verwendet eine Content Security Policy (CSP), um deren Sicherheit zu erhöhen, gilt die Richtlinie für das Favicon. Wenn Sie Probleme feststellen, dass das Favicon nicht geladen wird, überprüfen Sie, ob die {{HTTPHeader("Content-Security-Policy")}}-Kopfzeilen-Direktive [`img-src`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/img-src) den Zugriff blockiert.
- Die HTML- und XHTML-Spezifikationen definieren Ereignishandler für das `<link>`-Element, aber es ist unklar, wie diese verwendet würden.
- Unter XHTML 1.0 erfordern {{Glossary("void_element", "leere Elemente")}} wie `<link>` einen nachfolgenden Schrägstrich: `<link />`.
- WebTV unterstützt die Verwendung des Werts `next` für `rel`, um die nächste Seite in einer Dokumentenserie vorzuladen.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `as`

  - : Dieses Attribut ist erforderlich, wenn [`rel="preload"`](/de/docs/Web/HTML/Attributes/rel/preload) auf dem `<link>`-Element gesetzt ist, optional, wenn [`rel="modulepreload"`](/de/docs/Web/HTML/Attributes/rel/modulepreload) gesetzt ist, und sollte ansonsten nicht verwendet werden. Es gibt den Typ des Inhalts an, der durch das `<link>` geladen wird, was notwendig ist für die Abgleichung der Anfragen, die Anwendung der korrekten [Content Security Policy](/de/docs/Web/HTTP/CSP), und das Setzen des korrekten {{HTTPHeader("Accept")}} Anforderungs-Headers.

    Darüber hinaus verwendet `rel="preload"` dies als Signal für die Priorisierung von Anfragen. Die untenstehende Tabelle listet die gültigen Werte für dieses Attribut und die Elemente oder Ressourcen auf, auf die sie sich beziehen.

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
                <code>&#x3C;link></code> das crossorigin Attribut enthält, siehe <a href="/de/docs/Web/HTML/Attributes/rel/preload#cors-enabled_fetches">CORS-fähige Fetches</a>.
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
                <code>&#x3C;link></code> das crossorigin Attribut enthält, siehe <a href="/de/docs/Web/HTML/Attributes/rel/preload#cors-enabled_fetches">CORS-fähige Fetches</a>.
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

- `blocking` {{Experimental_Inline}}

  - : Dieses Attribut zeigt explizit an, dass bestimmte Operationen beim Abrufen einer externen Ressource blockiert werden sollen. Es darf nur verwendet werden, wenn das `rel`-Attribut die Schlüsselwörter `expect` oder `stylesheet` enthält. Die zu blockierenden Operationen müssen eine durch Leerzeichen getrennte Liste der folgenden Blockierungs-Token sein.
    - `render`: Das Rendern des Inhalts auf dem Bildschirm wird blockiert.

- [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)

  - : Dieses {{Glossary("Enumerated", "enumerierte")}} Attribut gibt an, ob {{Glossary("CORS", "CORS")}} beim Abrufen der Ressource verwendet werden muss. [CORS-fähige Bilder](/de/docs/Web/HTML/CORS_enabled_image) können im {{HTMLElement("canvas")}} Element wiederverwendet werden, ohne "verunreinigt" zu werden. Die erlaubten Werte sind:

    - `anonymous`
      - : Eine Cross-Origin-Anfrage (d.h. mit einem {{HTTPHeader("Origin")}} HTTP-Header) wird durchgeführt, es wird jedoch kein Berechtigungsnachweis gesendet (d.h. kein Cookie, X.509-Zertifikat oder HTTP-Basisauthentifizierung). Wenn der Server keine Berechtigungsnachweise an die Ursprungswebsite übermittelt (indem er den {{HTTPHeader("Access-Control-Allow-Origin")}} HTTP-Header nicht setzt), wird die Ressource verunreinigt und ihre Verwendung eingeschränkt.
    - `use-credentials`
      - : Eine Cross-Origin-Anfrage (d.h. mit einem `Origin` HTTP-Header) wird zusammen mit einem Berechtigungsnachweis gesendet (d.h. ein Cookie, Zertifikat und/oder HTTP-Basisauthentifizierung wird durchgeführt). Wenn der Server keine Berechtigungsnachweise an die Ursprungswebsite übermittelt (durch den {{HTTPHeader("Access-Control-Allow-Credentials")}} HTTP-Header), wird die Ressource "verunreinigt" und ihre Verwendung eingeschränkt.

    Ist das Attribut nicht vorhanden, wird die Ressource ohne eine {{Glossary("CORS", "CORS")}} Anfrage (d.h. ohne den `Origin` HTTP-Header zu senden) abgerufen, was ihre nicht-verunreinigte Nutzung verhindert. Wenn ungültig, wird sie behandelt, als ob das enumerierte Schlüsselwort **anonymous** verwendet worden wäre. Siehe [CORS-Einstellungsattribute](/de/docs/Web/HTML/Attributes/crossorigin) für zusätzliche Informationen.

- `disabled`

  - : Ausschließlich für `rel="stylesheet"`, das `disabled` boolesche Attribut zeigt an, ob das beschriebene Stylesheet geladen und auf das Dokument angewendet werden soll. Wenn `disabled` im HTML beim Laden angegeben wird, wird das Stylesheet nicht während des Seitenladevorgangs geladen. Stattdessen wird das Stylesheet bei Bedarf geladen, wenn und falls das `disabled` Attribut auf `false` geändert oder entfernt wird.

    Das Setzen der `disabled` Eigenschaft im DOM führt dazu, dass das Stylesheet aus der [`Document.styleSheets`](/de/docs/Web/API/Document/styleSheets) Liste des Dokuments entfernt wird.

- `fetchpriority`

  - : Bietet einen Hinweis auf die relative Priorität, die beim Abrufen einer Ressource eines bestimmten Typs verwendet werden soll. Erlaubte Werte:

    - `high`
      - : Die Ressource mit hoher Priorität relativ zu anderen Ressourcen des gleichen Typs abrufen.
    - `low`
      - : Die Ressource mit niedriger Priorität relativ zu anderen Ressourcen des gleichen Typs abrufen.
    - `auto`
      - : Keine Präferenz für die Abrufpriorität setzen. Dies ist der Standard. Es wird verwendet, wenn kein Wert oder ein ungültiger Wert gesetzt ist.

    Siehe [`HTMLLinkElement.fetchPriority`](/de/docs/Web/API/HTMLLinkElement/fetchPriority) für weitere Informationen.

- `href`
  - : Dieses Attribut spezifiziert die {{Glossary("URL", "URL")}} der verlinkten Ressource. Eine URL kann absolut oder relativ sein.
- `hreflang`
  - : Dieses Attribut gibt die Sprache der verlinkten Ressource an. Es ist rein beratend. Die erlaubten Werte werden durch {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}} spezifiziert. Verwenden Sie dieses Attribut nur, wenn das [`href`](/de/docs/Web/HTML/Element/a#href) Attribut vorhanden ist.
- `imagesizes`
  - : Ausschließlich für `rel="preload"` und `as="image"`, das Attribut `imagesizes` hat eine ähnliche Syntax und Semantik wie das [`sizes`](/de/docs/Web/HTML/Element/img#sizes) Attribut, das angibt, das entsprechende Ressource vorzuladen, die von einem `img` Element mit entsprechenden Werten für seine `srcset` und `sizes` Attribute verwendet wird.
- `imagesrcset`
  - : Ausschließlich für `rel="preload"` und `as="image"`, das Attribut `imagesrcset` hat eine ähnliche Syntax und Semantik wie das [`srcset`](/de/docs/Web/HTML/Element/img#srcset) Attribut, das angibt, die entsprechende Ressource vorzuladen, die von einem `img` Element mit entsprechenden Werten für seine `srcset` und `sizes` Attribute verwendet wird.
- `integrity`
  - : Enthält Inline-Metadaten — ein Base64-kodierter kryptografischer Hash der Ressource (Datei), die Sie dem Browser mitteilen, zu laden. Der Browser kann dies verwenden, um zu überprüfen, dass die abgerufene Ressource ohne unerwartete Manipulationen geliefert wurde. Das Attribut darf nur angegeben werden, wenn das `rel` Attribut auf `stylesheet`, `preload` oder `modulepreload` gesetzt ist. Siehe [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity).
- `media`

  - : Dieses Attribut gibt die Medien an, auf die sich die verlinkte Ressource bezieht. Sein Wert muss ein Medientyp / [Medienabfrage](/de/docs/Web/CSS/CSS_media_queries) sein. Dieses Attribut ist hauptsächlich nützlich, um zu externen Stylesheets zu verlinken — es erlaubt dem Benutzeragenten, das am besten angepasste für das Gerät auszuwählen, auf dem es ausgeführt wird.

- `referrerpolicy`

  - : Ein String, der angibt, welcher Referrer verwendet werden soll, wenn die Ressource abgerufen wird:

    - `no-referrer` bedeutet, dass der {{HTTPHeader("Referer")}} Header nicht gesendet wird.
    - `no-referrer-when-downgrade` bedeutet, dass kein {{HTTPHeader("Referer")}} Header gesendet wird, wenn zu einem Ursprung ohne TLS (HTTPS) navigiert wird. Dies ist das Standardverhalten eines Benutzeragenten, wenn keine anderweitig spezifizierte Richtlinie besteht.
    - `origin` bedeutet, dass der Referrer der Ursprung der Seite sein wird, was ungefähr das Schema, der Host und der Port ist.
    - `origin-when-cross-origin` bedeutet, dass die Navigation zu anderen Ursprüngen auf das Schema, den Host und den Port beschränkt ist, während die Navigation auf demselben Ursprung den Pfad des Referrers einschließt.
    - `unsafe-url` bedeutet, dass der Referrer den Ursprung und den Pfad (jedoch nicht das Fragment, das Passwort oder den Benutzernamen) enthält. Dieser Fall ist unsicher, da er Ursprünge und Pfade von TLS-geschützten Ressourcen zu unsicheren Ursprüngen leaken kann.

- [`rel`](/de/docs/Web/HTML/Attributes/rel)
  - : Dieses Attribut benennt eine Beziehung des verlinkten Dokuments zum aktuellen Dokument. Das Attribut muss eine durch Leerzeichen getrennte Liste von [Linktyp-Werten](/de/docs/Web/HTML/Attributes/rel) sein.
- `sizes`

  - : Dieses Attribut definiert die Größen der Icons für visuelle Medien, die in der Ressource enthalten sind. Es darf nur vorhanden sein, wenn [`rel`](#rel) einen Wert von `icon` oder einen nicht-standardisierten Typ wie Apples `apple-touch-icon` enthält. Es kann die folgenden Werte haben:

    - `any`, was bedeutet, dass das Icon auf jede Größe skaliert werden kann, da es in einem Vektorformat wie `image/svg+xml` vorliegt.
    - Eine durch Leerzeichen getrennte Liste von Größen, jede im Format `<Breite in Pixel>x<Höhe in Pixel>` oder `<Breite in Pixel>X<Höhe in Pixel>`. Jede dieser Größen muss in der Ressource enthalten sein.

    > [!NOTE]
    > Die meisten Icon-Formate können nur ein einzelnes Icon speichern; daher enthält das [`sizes`](#sizes) Attribut meistens nur einen Eintrag. Microsofts ICO-Format und Apples ICNS-Format können mehrere Icon-Größen in einer einzigen Datei speichern. ICO hat eine bessere Unterstützung durch Browser, daher sollten Sie dieses Format verwenden, wenn eine plattformübergreifende Unterstützung ein Anliegen ist.

- `title`
  - : Das `title` Attribut hat beim `<link>` Element eine spezielle Semantik. Wenn es auf einem `<link rel="stylesheet">` verwendet wird, definiert es ein [Standard- oder ein alternatives Stylesheet](/de/docs/Web/CSS/Alternative_style_sheets).
- `type`
  - : Dieses Attribut wird verwendet, um den Typ des verlinkten Inhalts zu definieren. Der Wert des Attributs sollte ein MIME-Typ wie **text/html**, **text/css** usw. sein. Der übliche Gebrauch dieses Attributs ist es, den Typ des referenzierten Stylesheets zu definieren (wie **text/css**), aber da CSS die einzige Stylesheetsprache ist, die im Web verwendet wird, kann nicht nur das `type` Attribut weggelassen werden, sondern wird es tatsächlich jetzt als empfohlene Praxis betrachtet, es wegzulassen. Es wird auch auf `rel="preload"` Linktypen verwendet, um sicherzustellen, dass der Browser nur Dateitypen herunterlädt, die er unterstützt.

### Nicht-standardisierte Attribute

- `target` {{Deprecated_Inline}}
  - : Definiert den Namen des Rahmens oder Fensters, das mit der definierten Verknüpfungsbeziehung verknüpft ist oder die Darstellung einer verlinkten Ressource anzeigen wird.

### Obsolete Attribute

- `charset` {{deprecated_inline}}

  - : Dieses Attribut definiert die Zeichencodierung der verlinkten Ressource. Der Wert ist eine durch Leerzeichen und/oder Kommata getrennte Liste von Zeichensätzen, wie sie in {{rfc(2045)}} definiert sind. Der Standardwert ist `iso-8859-1`.

    > [!NOTE]
    > Um den gleichen Effekt wie dieses obsolete Attribut zu erzielen, verwenden Sie den {{HTTPHeader("Content-Type")}} HTTP-Header auf der verlinkten Ressource.

- `rev` {{deprecated_inline}}

  - : Der Wert dieses Attributs zeigt die Beziehung des aktuellen Dokuments zur verlinkten Ressource, wie durch das [`href`](#href) Attribut definiert. Das Attribut definiert somit die umgekehrte Beziehung im Vergleich zum Wert des `rel`-Attributs. Die [Linktyp-Werte](/de/docs/Web/HTML/Attributes/rel) für das Attribut sind ähnlich wie die möglichen Werte für [`rel`](#rel).

    > [!NOTE]
    > Statt `rev` sollten Sie das [`rel`](#rel) Attribut mit dem entgegengesetzten [Linktyp-Wert](/de/docs/Web/HTML/Attributes/rel) verwenden. Zum Beispiel, um den umgekehrten Link für `made` zu etablieren, geben Sie `author` an. Auch steht dieses Attribut nicht für "Revision" und darf nicht mit einer Versionsnummer verwendet werden, obwohl viele Seiten dies fälschlicherweise so nutzen.

## Beispiele

### Stylesheet einbinden

Um ein Stylesheet in eine Seite einzubinden, verwenden Sie folgende Syntax:

```html
<link href="style.css" rel="stylesheet" />
```

### Alternative Stylesheets bereitstellen

Sie können auch [alternative Stylesheets](/de/docs/Web/CSS/Alternative_style_sheets) spezifizieren.

Der Benutzer kann das zu verwendende Stylesheet durch die Auswahl im Menü **Ansicht > Seitenstil** wählen. Dies bietet eine Möglichkeit, Nutzern mehrere Versionen einer Seite anzeigen zu lassen.

```html
<link href="default.css" rel="stylesheet" title="Default Style" />
<link href="fancy.css" rel="alternate stylesheet" title="Fancy" />
<link href="basic.css" rel="alternate stylesheet" title="Basic" />
```

### Icons für verschiedene Nutzungskontexte bereitstellen

Sie können Links zu mehreren Icons auf derselben Seite einfügen, und der Browser wird basierend auf `rel`- und `sizes`-Werten als Hinweise das am besten geeignete für seinen spezifischen Kontext auswählen.

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

Für Informationen darüber, welche `sizes` für Apple-Icons gewählt werden sollen, siehe [Apples Dokumentation zur Konfiguration von Webanwendungen](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW4) und den referenzierten [Apple-Human-Interface-Richtlinien](https://developer.apple.com/design/human-interface-guidelines/app-icons#App-icon-sizes). Normalerweise reicht es, ein großes Bild, wie 192x192, bereitzustellen und den Browser es nach Bedarf verkleinern zu lassen, aber Sie möchten möglicherweise Bilder mit unterschiedlichen Detailstufen für unterschiedliche Größen bereitstellen, wie es die Apple-Design-Richtlinie empfiehlt. Kleinere Icons für niedrigere Auflösungen bereitstellen spart auch Bandbreite.

Es kann nicht nötig sein, `<link>`-Elemente überhaupt bereitzustellen. Zum Beispiel fordern Browser automatisch `/favicon.ico` vom Stamm einer Seite an, und Apple fordert auch automatisch `/apple-touch-icon-[size].png`, `/apple-touch-icon.png` usw. an. Das Bereitstellen expliziter Links schützt jedoch vor Änderungen dieser Konventionen.

### Bedingtes Laden von Ressourcen mit Medienabfragen

Sie können einen Medientyp oder eine Abfrage innerhalb eines `media`-Attributs angeben; diese Ressource wird dann nur geladen, wenn die Medienbedingung wahr ist. Zum Beispiel:

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

Sie können feststellen, wann ein Stylesheet geladen wurde, indem Sie auf ein `load` Ereignis warten, das darauf ausgelöst wird; ebenso können Sie feststellen, ob ein Fehler beim Verarbeiten eines Stylesheets aufgetreten ist, indem Sie auf ein `error` Ereignis warten:

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
> Das `load` Ereignis wird ausgelöst, sobald das Stylesheet und all seine importierten Inhalte geladen und analysiert wurden, und unmittelbar bevor die Stile auf den Inhalt angewendet werden.

### Preload-Beispiele

Sie können eine Reihe von `<link rel="preload">` Beispielen in [Inhalte mit `rel="preload"` vorladen](/de/docs/Web/HTML/Attributes/rel/preload) finden.

### Blockieren des Renderings bis eine Ressource abgerufen wird

Sie können das Token `render` innerhalb eines `blocking`-Attributs enthalten; das Rendering der Seite wird blockiert, bis die Ressource abgerufen wird. Zum Beispiel:

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
        Metadateninhalt. Wenn <code><a href="/de/docs/Web/HTML/Global_attributes/itemprop">itemprop</a></code> vorhanden ist:
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Flussinhalt</a> und
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Phraseninhalt</a>.
      </td>
    </tr>
    <tr>
      <th>Erlaubter Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "void element")}}.</td>
    </tr>
    <tr>
      <th>Tag-Auslassung</th>
      <td>Muss einen Start-Tag haben und darf keinen End-Tag haben.</td>
    </tr>
    <tr>
      <th>Erlaubte Eltern</th>
      <td>
        Jedes Element, das Metadatenelemente akzeptiert. Wenn <a href="/de/docs/Web/HTML/Global_attributes/itemprop">itemprop</a> vorhanden ist: jedes Element, das <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Phraseninhalt</a> akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td><a href="/de/docs/Web/Accessibility/ARIA/Roles/link_role"><code>link</code></a> mit <code>href</code> Attribut</td>
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
