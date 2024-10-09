---
title: "<link>: Das External Resource Link Element"
slug: Web/HTML/Element/link
l10n:
  sourceCommit: 783ffd9c1cf35421242e028a1b8743cf2b1918dd
---

{{HTMLSidebar}}

Das **`<link>`** [HTML](/de/docs/Web/HTML)-Element spezifiziert Beziehungen zwischen dem aktuellen Dokument und einer externen Ressource.
Dieses Element wird am häufigsten verwendet, um auf {{Glossary("CSS", "Stylesheets")}} zu verlinken, wird aber auch verwendet, um Site-Icons festzulegen (sowohl "Favicon"-Stil-Icons als auch Icons für den Startbildschirm und Apps auf Mobilgeräten), neben anderen Dingen.

{{EmbedInteractiveExample("pages/tabbed/link.html", "tabbed-shorter")}}

Um ein externes Stylesheet zu verlinken, fügen Sie ein `<link>`-Element in Ihrem {{HTMLElement("head")}} ein, wie folgt:

```html
<link href="main.css" rel="stylesheet" />
```

Dieses einfache Beispiel bietet den Pfad zum Stylesheet im `href`-Attribut und ein [`rel`](/de/docs/Web/HTML/Attributes/rel)-Attribut mit dem Wert `stylesheet`. Das `rel` steht für "relationship" (Beziehung) und ist eine der Schlüsselfunktionen des `<link>`-Elements — der Wert gibt an, wie das verlinkte Element zum aktuellen Dokument in Beziehung steht.

Es gibt eine Reihe anderer gängiger Typen, die Sie antreffen werden. Zum Beispiel einen Link zum Favicon der Seite:

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

Das `sizes`-Attribut gibt die Icon-Größe an, während das `type` den MIME-Typ der verlinkten Ressource enthält.
Diese bieten nützliche Hinweise, die es dem Browser ermöglichen, das am besten geeignete Icon auszuwählen.

Sie können auch einen Medientyp oder eine Abfrage innerhalb eines `media`-Attributs bereitstellen; diese Ressource wird dann nur geladen, wenn die Medienbedingung wahr ist. Zum Beispiel:

```html
<link href="print.css" rel="stylesheet" media="print" />
<link
  href="mobile.css"
  rel="stylesheet"
  media="screen and (max-width: 600px)" />
```

Einige interessante neue Leistungs- und Sicherheitsfunktionen wurden ebenfalls zum `<link>`-Element hinzugefügt. Nehmen Sie dieses Beispiel:

```html
<link
  rel="preload"
  href="myFont.woff2"
  as="font"
  type="font/woff2"
  crossorigin="anonymous" />
```

Ein `rel`-Wert von `preload` weist den Browser an, diese Ressource vorzuladen (siehe [`rel="preload"`](/de/docs/Web/HTML/Attributes/rel/preload) für weitere Details), wobei das `as`-Attribut die spezifische Klasse des zu ladenden Inhalts angibt.
Das `crossorigin`-Attribut gibt an, ob die Ressource mit einer {{Glossary("CORS", "CORS")}}-Anfrage abgerufen werden sollte.

Weitere Nutzungshinweise:

- Ein `<link>`-Element kann entweder im {{HTMLElement("head")}} oder {{HTMLElement("body")}}-Element vorkommen, abhängig davon, ob es einen [Link-Typ](https://html.spec.whatwg.org/multipage/links.html#body-ok) hat, der **body-ok** ist.
  Zum Beispiel ist der `stylesheet`-Link-Typ body-ok, daher ist `<link rel="stylesheet">` im Body erlaubt.
  Es ist jedoch keine gute Praxis, diesem Weg zu folgen; es ist sinnvoller, Ihre `<link>`-Elemente von Ihrem Body-Inhalt zu trennen, indem Sie sie in den `<head>` einfügen.
- Wenn Sie `<link>` verwenden, um ein Favicon für eine Website einzurichten und Ihre Website eine Content Security Policy (CSP) verwendet, um deren Sicherheit zu erhöhen, gilt die Richtlinie für das Favicon.
  Wenn Sie auf Probleme stoßen, dass das Favicon nicht geladen wird, überprüfen Sie, dass das {{HTTPHeader("Content-Security-Policy")}}-Header's [`img-src`-Richtlinie](/de/docs/Web/HTTP/Headers/Content-Security-Policy/img-src) den Zugriff darauf nicht verhindert.
- Die HTML- und XHTML-Spezifikationen definieren Ereignishandlungen für das `<link>`-Element, es ist jedoch unklar, wie sie verwendet würden.
- Unter XHTML 1.0 erfordern {{Glossary("void_element", "leere Elemente")}} wie `<link>` einen abschließenden Schrägstrich: `<link />`.
- WebTV unterstützt die Verwendung des Wertes `next` für `rel`, um die nächste Seite in einer Dokumentreihe vorzuladen.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `as`

  - : Dieses Attribut ist erforderlich, wenn [`rel="preload"`](/de/docs/Web/HTML/Attributes/rel/preload) auf dem `<link>`-Element gesetzt ist, optional wenn [`rel="modulepreload"`](/de/docs/Web/HTML/Attributes/rel/modulepreload) gesetzt ist, und sollte sonst nicht verwendet werden.
    Es spezifiziert den Typ des Inhalts, der durch das `<link>` geladen wird, was für die Anforderungszuordnung, Anwendung der korrekten [Content Security Policy](/de/docs/Web/HTTP/CSP) und die korrekte Einstellung des {{HTTPHeader("Accept")}}-Anforderungsheaders notwendig ist.

    Außerdem verwendet `rel="preload"` dies als Signal für die Priorisierung der Anforderungen.
    Die folgende Tabelle listet die gültigen Werte für dieses Attribut und die Elemente oder Ressourcen, auf die sie angewendet werden.

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
                <code>&#x3C;link></code> das crossorigin-Attribut enthält, siehe <a href="/de/docs/Web/HTML/Attributes/rel/preload#cors-enabled_fetches">CORS-fähige Anforderungen</a>.
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
                <code>&#x3C;link></code> das crossorigin-Attribut enthält, siehe <a href="/de/docs/Web/HTML/Attributes/rel/preload#cors-enabled_fetches">CORS-fähige Anforderungen</a>.
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

- `blocking` {{Experimental_Inline}}

  - : Dieses Attribut gibt explizit an, dass bestimmte Operationen beim Abrufen einer externen Ressource blockiert werden sollten. Es darf nur verwendet werden, wenn das `rel`-Attribut die Schlüsselwörter `expect` oder `stylesheet` enthält. Die zu blockierenden Operationen müssen eine durch Leerzeichen getrennte Liste der unten aufgeführten Blockierungs-Token sein.
    - `render`: Das Rendern des Inhalts auf dem Bildschirm wird blockiert.

- [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)

  - : Dieses {{Glossary("Enumerated", "augezählte")}} Attribut gibt an, ob {{Glossary("CORS", "CORS")}} verwendet werden muss, um die Ressource abzurufen.
    [CORS-fähige Bilder](/de/docs/Web/HTML/CORS_enabled_image) können im {{HTMLElement("canvas")}}-Element ohne "verunreinigt" zu werden, wiederverwendet werden.
    Die erlaubten Werte sind:

    - `anonymous`
      - : Eine Cross-Origin-Anfrage (d. h. mit einem {{HTTPHeader("Origin")}} HTTP-Header) wird ausgeführt, aber keine Anmeldedaten werden gesendet (d. h. kein Cookie, kein X.509-Zertifikat oder keine HTTP-Basis-Authentifizierung).
        Wenn der Server keine Anmeldedaten an die Ursprungsseite gibt (indem er den {{HTTPHeader("Access-Control-Allow-Origin")}} HTTP-Header nicht setzt), wird die Ressource verunreinigt und ihre Nutzung eingeschränkt.
    - `use-credentials`
      - : Eine Cross-Origin-Anfrage (d. h. mit einem `Origin`-HTTP-Header) wird zusammen mit einer gesendeten Anmeldeinformation durchgeführt (d. h. ein Cookie, Zertifikat und/oder HTTP-Basis-Authentifizierung wird durchgeführt).
        Wenn der Server keine Anmeldedaten an die Ursprungsseite liefert (durch den {{HTTPHeader("Access-Control-Allow-Credentials")}} HTTP-Header), wird die Ressource "verunreinigt" und ihre Nutzung eingeschränkt.

    Wenn das Attribut nicht vorhanden ist, wird die Ressource ohne eine {{Glossary("CORS", "CORS")}}-Anfrage abgerufen (d. h. ohne das `Origin`-HTTP-Header zu senden), was ihre nicht verunreinigte Verwendung verhindert. Ist es ungültig, wird es so behandelt, als ob das aufzählbare Schlüsselwort **anonymous** verwendet wurde.
    Siehe [CORS-Einstellungsattribute](/de/docs/Web/HTML/Attributes/crossorigin) für weitere Informationen.

- `disabled`

  - : Nur für `rel="stylesheet"`, das `disabled`-Boolean-Attribut gibt an, ob das beschriebene Stylesheet geladen und auf das Dokument angewendet werden soll.
    Wenn `disabled` im HTML angegeben ist, wenn es geladen wird, wird das Stylesheet während des Seitenladevorgangs nicht geladen.
    Stattdessen wird das Stylesheet bei Bedarf geladen, wenn und sobald das `disabled`-Attribut auf `false` geändert oder entfernt wird.

    Das Setzen der `disabled`-Eigenschaft im DOM führt dazu, dass das Stylesheet aus der [`Document.styleSheets`](/de/docs/Web/API/Document/styleSheets)-Liste des Dokuments entfernt wird.

- `fetchpriority`

  - : Bietet einen Hinweis auf die relative Priorität, die beim Abrufen einer vorab geladenen Ressource verwendet werden soll. Erlaubte Werte:

    - `high`
      - : Signalisiert einen Fetch mit hoher Priorität im Verhältnis zu anderen Ressourcen desselben Typs.
    - `low`
      - : Signalisiert einen Fetch mit niedriger Priorität im Verhältnis zu anderen Ressourcen desselben Typs.
    - `auto`
      - : Standard: Signalisiert die automatische Bestimmung der Fetch-Priorität im Verhältnis zu anderen Ressourcen desselben Typs.

- `href`
  - : Dieses Attribut spezifiziert die {{Glossary("URL", "URL")}} der verlinkten Ressource. Eine URL kann absolut oder relativ sein.
- `hreflang`
  - : Dieses Attribut gibt die Sprache der verlinkten Ressource an.
    Es ist rein beratend.
    Erlaubte Werte sind festgelegt durch {{RFC(5646, "Tags für die Identifizierung von Sprachen (auch bekannt als BCP 47)")}}.
    Verwenden Sie dieses Attribut nur, wenn das [`href`](/de/docs/Web/HTML/Element/a#href)-Attribut vorhanden ist.
- `imagesizes`
  - : Nur für `rel="preload"` und `as="image"`, das `imagesizes`-Attribut hat eine ähnliche Syntax und Semantik wie das [`sizes`](/de/docs/Web/HTML/Element/img#sizes)-Attribut, das angibt, das die entsprechende Ressource vorzuladen ist, die durch ein `img`-Element mit entsprechenden Werten für seine `srcset`- und `sizes`-Attribute verwendet wird.
- `imagesrcset`
  - : Nur für `rel="preload"` und `as="image"`, das `imagesrcset`-Attribut hat eine ähnliche Syntax und Semantik wie das [`srcset`](/de/docs/Web/HTML/Element/img#srcset)-Attribut, das angibt, das die entsprechende Ressource vorzuladen ist, die durch ein `img`-Element mit entsprechenden Werten für seine `srcset`- und `sizes`-Attribute verwendet wird.
- `integrity`
  - : Enthält Inline-Metadaten — einen base64-kodierten kryptografischen Hash der Ressource (Datei), die Sie den Browser anweisen möchten, abzurufen.
    Der Browser kann dies verwenden, um zu verifizieren, dass die abgerufene Ressource ohne unerwartete Manipulation geliefert wurde.
    Das Attribut darf nur angegeben werden, wenn das `rel`-Attribut auf `stylesheet`, `preload` oder `modulepreload` gesetzt ist.
    Siehe [Subressource-Integrität](/de/docs/Web/Security/Subresource_Integrity).
- `media`

  - : Dieses Attribut spezifiziert die Medien, auf die die verlinkte Ressource angewendet wird. Sein Wert muss ein Medientyp / [Medienabfrage](/de/docs/Web/CSS/CSS_media_queries) sein.
    Dieses Attribut ist hauptsächlich sinnvoll beim Verlinken zu externen Stylesheets — es ermöglicht dem Benutzeragenten, das am besten angepasste für das Gerät auszuwählen, auf dem es läuft.

- `referrerpolicy`

  - : Ein String, der angibt, welcher Referrer beim Abrufen der Ressource verwendet werden soll:

    - `no-referrer` bedeutet, dass der {{HTTPHeader("Referer")}}-Header nicht gesendet wird.
    - `no-referrer-when-downgrade` bedeutet, dass kein {{HTTPHeader("Referer")}}-Header gesendet wird, wenn zu einem Ursprungsort ohne TLS (HTTPS) navigiert wird.
      Dies ist das Standardverhalten des Benutzeragents, wenn keine andere Richtlinie angegeben ist.
    - `origin` bedeutet, dass der Referrer der Ursprung der Seite sein wird, was ungefähr dem Schema, dem Host und dem Port entspricht.
    - `origin-when-cross-origin` bedeutet, dass das Navigieren zu anderen Ursprüngen auf das Schema, den Host und den Port beschränkt wird, während das Navigieren im gleichen Ursprung den Pfad des Referrers enthält.
    - `unsafe-url` bedeutet, dass der Referrer den Ursprung und den Pfad einschließen wird (aber nicht das Fragment, das Passwort oder den Benutzernamen).
      Dieser Fall ist unsicher, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge leaken kann.

- [`rel`](/de/docs/Web/HTML/Attributes/rel)
  - : Dieses Attribut benennt eine Beziehung des verlinkten Dokuments zum aktuellen Dokument. Das Attribut muss eine durch Leerzeichen getrennte Liste von [Linktypwerten](/de/docs/Web/HTML/Attributes/rel) sein.
- `sizes`

  - : Dieses Attribut definiert die Größen der Icons für visuelle Medien, die in der Ressource enthalten sind.
    Es muss nur vorhanden sein, wenn [`rel`](#rel) einen Wert von `icon` oder einen nicht standardmäßigen Typ wie Apples `apple-touch-icon` enthält.
    Es kann die folgenden Werte haben:

    - `any`, was bedeutet, dass das Icon auf jede Größe skaliert werden kann, da es sich um ein Vektorformat wie `image/svg+xml` handelt.
    - eine durch Leerzeichen getrennte Liste von Größen, jede im Format `<Breite in Pixeln>x<Height in Pixeln>` oder `<Breite in Pixeln>X<Height in Pixeln>`. Jede dieser Größen muss in der Ressource enthalten sein.

    > [!NOTE]
    > Die meisten Icon-Formate können nur ein einziges Icon speichern; daher enthält das [`sizes`](#sizes) Attribut meistens nur einen Eintrag.
    > Das Microsoft's ICO-Format und Apple's ICNS-Format können mehrere Icon-Größen in einer einzigen Datei speichern. ICO hat eine bessere Browserunterstützung, daher sollten Sie dieses Format verwenden, wenn die Unterstützung über mehrere Browser hinweg von Bedeutung ist.

- `title`
  - : Das `title`-Attribut hat spezielle Semantik auf dem `<link>`-Element.
    Wenn es auf einem `<link rel="stylesheet">` verwendet wird, definiert es ein [standardmäßiges oder alternatives Stylesheet](/de/docs/Web/CSS/Alternative_style_sheets).
- `type`
  - : Dieses Attribut wird verwendet, um den Typ des verlinkten Inhalts zu definieren.
    Der Wert des Attributs sollte ein MIME-Typ wie **text/html**, **text/css** usw. sein.
    Der häufigste Verwendungszweck dieses Attributs ist die Definition des Typs des referenzierten Stylesheets (wie **text/css**), aber da CSS die einzige Stylesheet-Sprache im Web ist, ist es nicht nur möglich, das `type`-Attribut wegzulassen, sondern das ist jetzt sogar empfohlene Praxis.
    Es wird auch für `rel="preload"`-Link-Typen verwendet, um sicherzustellen, dass der Browser nur Dateitypen herunterlädt, die er unterstützt.

### Nicht standardisierte Attribute

- `target` {{Deprecated_Inline}}
  - : Definiert den Frame- oder Fensternamen, der die definierte Linkbeziehung hat oder das Rendering der verlinkten Ressource zeigt.

### Veraltete Attribute

- `charset` {{deprecated_inline}}

  - : Dieses Attribut definiert die Zeichencodierung der verlinkten Ressource.
    Der Wert ist eine durch Leerzeichen und/oder Kommas getrennte Liste von Zeichensätzen, wie in {{rfc(2045)}} definiert.
    Der Standardwert ist `iso-8859-1`.

    > [!NOTE]
    > Um denselben Effekt wie dieses veraltete Attribut zu erzielen, verwenden Sie den {{HTTPHeader("Content-Type")}} HTTP-Header für die verlinkte Ressource.

- `rev` {{deprecated_inline}}

  - : Der Wert dieses Attributs zeigt die Beziehung des aktuellen Dokuments zur verlinkten Ressource, wie durch das [`href`](#href)-Attribut definiert.
    Das Attribut definiert somit die umgekehrte Beziehung im Vergleich zu dem Wert des `rel`-Attributs.
    [Linktyp-Werte](/de/docs/Web/HTML/Attributes/rel) für das Attribut sind ähnlich wie die möglichen Werte für [`rel`](#rel).

    > [!NOTE]
    > Statt `rev` sollten Sie das [`rel`](#rel)-Attribut mit dem entgegengesetzten [Linktyp-Wert](/de/docs/Web/HTML/Attributes/rel) verwenden.
    > Zum Beispiel, um den umgekehrten Link für `made` herzustellen, geben Sie `author` an. Außerdem steht dieses Attribut nicht für "Revision" und darf nicht mit einer Versionsnummer verwendet werden, obwohl viele Websites es auf diese Weise missbrauchen.

## Beispiele

### Einbinden eines Stylesheets

Um ein Stylesheet in eine Seite einzubinden, verwenden Sie die folgende Syntax:

```html
<link href="style.css" rel="stylesheet" />
```

### Bereitstellung alternativer Stylesheets

Sie können auch [alternative Stylesheets](/de/docs/Web/CSS/Alternative_style_sheets) angeben.

Der Benutzer kann wählen, welches Stylesheet verwendet werden soll, indem er es im Menü **Ansicht > Seitenstil** auswählt.
Dies bietet eine Möglichkeit für Benutzer, mehrere Versionen einer Seite zu sehen.

```html
<link href="default.css" rel="stylesheet" title="Default Style" />
<link href="fancy.css" rel="alternate stylesheet" title="Fancy" />
<link href="basic.css" rel="alternate stylesheet" title="Basic" />
```

### Bereitstellung von Icons für verschiedene Nutzungskontexte

Sie können auf derselben Seite Links zu mehreren Icons einfügen, und der Browser wird dasjenige auswählen, das für seinen jeweiligen Kontext am besten geeignet ist, indem er die `rel`- und `sizes`-Werte als Hinweise verwendet.

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

Für Informationen zu den `sizes`, die Sie für Apple-Icons wählen sollen, sehen Sie sich [Apples Dokumentation zur Konfiguration von Webanwendungen](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW4) und die referenzierten [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/app-icons#App-icon-sizes) an. In der Regel ist es ausreichend, ein großes Bild wie 192x192 bereitzustellen, und lassen Sie den Browser es nach Bedarf verkleinern, aber Sie möchten möglicherweise Bilder mit verschiedenen Detailebenen für verschiedene Größen bereitstellen, wie es die Apple-Design-Richtlinien empfehlen. Kleinere Icons für niedrigere Auflösungen bereitzustellen spart auch Bandbreite.

Es ist möglicherweise nicht notwendig, überhaupt `<link>`-Elemente bereitzustellen. Zum Beispiel fordern Browser automatisch `/favicon.ico` vom Stamm einer Site an, und Apple fordert auch automatisch `/apple-touch-icon-[size].png`, `/apple-touch-icon.png` usw. an. Explizite Links bereitzustellen schützt jedoch gegen Änderungen an diesen Konventionen.

### Bedingtes Laden von Ressourcen mit Medienabfragen

Sie können einen Medientyp oder eine Abfrage innerhalb eines `media`-Attributs bereitstellen;
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

Sie können feststellen, wann ein Stylesheet geladen wurde, indem Sie auf ein `load`-Ereignis warten, das darauf ausgelöst wird; ähnlich können Sie feststellen, ob ein Fehler beim Verarbeiten eines Stylesheets aufgetreten ist, indem Sie auf ein `error`-Ereignis warten:

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
> Das `load`-Ereignis wird ausgelöst, sobald das Stylesheet und sein gesamter importierter Inhalt geladen und geparst wurden, und unmittelbar bevor die Stile auf den Inhalt angewendet werden.

### Preload-Beispiele

Sie finden eine Reihe von `<link rel="preload">`-Beispielen in [Preloading content with `rel="preload"`](/de/docs/Web/HTML/Attributes/rel/preload).

### Blockieren des Renderings, bis eine Ressource abgerufen wird

Sie können ein `render`-Token innerhalb eines `blocking`-Attributs einfügen;
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
        Metadata content.
        Wenn <code><a href="/de/docs/Web/HTML/Global_attributes/itemprop">itemprop</a></code> vorhanden ist:
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Flow content</a> und
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">phrasing content</a>.
      </td>
    </tr>
    <tr>
      <th>Erlaubter Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "leeres Element")}}.</td>
    </tr>
    <tr>
      <th>Tag-Auslassung</th>
      <td>Muss ein Start-Tag haben und darf kein End-Tag haben.</td>
    </tr>
    <tr>
      <th>Erlaubte Eltern</th>
      <td>
        Jedes Element, das Metadaten-Elemente akzeptiert.
        Wenn <a href="/de/docs/Web/HTML/Global_attributes/itemprop">itemprop</a> vorhanden ist: jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">phrasing content</a> akzeptiert.
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
