---
title: "<link>: Das External Resource Link-Element"
slug: Web/HTML/Element/link
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTMLSidebar}}

Das **`<link>`** [HTML](/de/docs/Web/HTML) Element spezifiziert Beziehungen zwischen dem aktuellen Dokument und einer externen Ressource.
Dieses Element wird am häufigsten verwendet, um auf {{Glossary("CSS", "Stylesheets")}} zu verlinken, es wird aber auch genutzt, um Site-Icons (sowohl "Favicon"-Icons als auch Icons für den Startbildschirm und Apps auf mobilen Geräten) und andere Dinge zu etablieren.

{{InteractiveExample("HTML Demo: &lt;link&gt;", "tabbed-shorter")}}

```html interactive-example
<link href="/shared-assets/misc/link-element-example.css" rel="stylesheet" />

<p>This text will be red as defined in the external stylesheet.</p>
<p style="color: blue">
  The <code>style</code> attribute can override it, though.
</p>
```

Um ein externes Stylesheet zu verknüpfen, fügen Sie ein `<link>` Element innerhalb Ihres {{HTMLElement("head")}} wie folgt ein:

```html
<link href="main.css" rel="stylesheet" />
```

Dieses Beispiel bietet den Pfad zum Stylesheet innerhalb eines `href` Attributs und ein [`rel`](/de/docs/Web/HTML/Attributes/rel) Attribut mit dem Wert `stylesheet`. Das `rel` steht für "relationship" (Beziehung) und ist eines der Schlüsselelemente des `<link>` Elements — der Wert gibt an, wie das verlinkte Objekt zum einbettenden Dokument in Beziehung steht.

Es gibt einige andere gängige Typen, auf die Sie stoßen werden. Zum Beispiel ein Link zum Favicon der Website:

```html
<link rel="icon" href="favicon.ico" />
```

Es gibt eine Reihe weiterer `rel` Werte für Icons, die vor allem verwendet werden, um spezielle Ikontypen für den Gebrauch auf verschiedenen mobilen Plattformen anzugeben, z.B.:

```html
<link
  rel="apple-touch-icon"
  sizes="114x114"
  href="apple-icon-114.png"
  type="image/png" />
```

Das `sizes` Attribut gibt die Icon-Größe an, während das `type` Attribut den MIME-Typ der verlinkten Ressource enthält. Diese Attribute bieten nützliche Hinweise, um dem Browser zu ermöglichen, das passendste verfügbare Icon auszuwählen.

Sie können auch einen Medientyp oder eine Abfrage innerhalb eines `media` Attributs angeben; diese Ressource wird dann nur geladen, wenn die Medienbedingung wahr ist. Zum Beispiel:

```html
<link href="print.css" rel="stylesheet" media="print" />
<link
  href="mobile.css"
  rel="stylesheet"
  media="screen and (max-width: 600px)" />
```

Einige interessante neue Leistungs- und Sicherheitsfunktionen wurden ebenfalls zum `<link>` Element hinzugefügt. Sehen Sie sich dieses Beispiel an:

```html
<link
  rel="preload"
  href="myFont.woff2"
  as="font"
  type="font/woff2"
  crossorigin="anonymous" />
```

Ein `rel` Wert von `preload` zeigt an, dass der Browser diese Ressource vorab laden soll (siehe [`rel="preload"`](/de/docs/Web/HTML/Attributes/rel/preload) für weitere Details), wobei das `as` Attribut die spezielle Klasse der abzurufenden Inhalte angibt. Das `crossorigin` Attribut gibt an, ob die Ressource mit einer {{Glossary("CORS", "CORS")}}-Anfrage abgerufen werden soll.

Weitere Nutzungshinweise:

- Ein `<link>` Element kann entweder im {{HTMLElement("head")}} oder im {{HTMLElement("body")}} Element vorkommen, abhängig davon, ob es einen [link type](https://html.spec.whatwg.org/multipage/links.html#body-ok) hat, der **body-ok** ist. Zum Beispiel ist der `stylesheet` Link-Typ body-ok, und daher ist `<link rel="stylesheet">` im Body erlaubt. Allerdings ist es keine gute Praxis, dies zu tun; es macht mehr Sinn, Ihre `<link>` Elemente von Ihrem Body-Inhalt zu trennen und sie im `<head>` zu platzieren.
- Wenn Sie `<link>` verwenden, um ein Favicon für eine Website festzulegen, und Ihre Website eine Content Security Policy (CSP) verwendet, um deren Sicherheit zu erhöhen, dann gilt diese Richtlinie auch für das Favicon. Wenn Sie Probleme mit dem Laden des Favicons haben, überprüfen Sie, ob die {{HTTPHeader("Content-Security-Policy")}} Header [`img-src` Direktive](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/img-src) den Zugriff nicht verhindert.
- Die HTML und XHTML Spezifikationen definieren Event-Handler für das `<link>` Element, jedoch ist unklar, wie sie verwendet werden würden.
- Unter XHTML 1.0 erfordern {{Glossary("void_element", "void elements")}} wie `<link>` einen abschließenden Schrägstrich: `<link />`.
- WebTV unterstützt die Verwendung des Wertes `next` für `rel`, um die nächste Seite in einer Dokumentenreihe vorab zu laden.

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `as`

  - : Dieses Attribut ist erforderlich, wenn [`rel="preload"`](/de/docs/Web/HTML/Attributes/rel/preload) für das `<link>` Element gesetzt wurde, optional, wenn [`rel="modulepreload"`](/de/docs/Web/HTML/Attributes/rel/modulepreload) gesetzt wurde, und sollte sonst nicht verwendet werden. Es gibt den Typ der vom `<link>` geladenen Inhalte an, was notwendig für die Übereinstimmung von Anfragen, die Anwendung der richtigen [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP), und das Setzen des korrekten {{HTTPHeader("Accept")}} Anfrage-Headers ist.

    Außerdem wird `rel="preload"` als Signal für die Priorisierung von Anfragen verwendet. Die folgende Tabelle listet die gültigen Werte für dieses Attribut und die Elemente oder Ressourcen auf, auf die sie angewendet werden.

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
                <strong>Beachten Sie:</strong> Dieser Wert erfordert auch
                <code>&#x3C;link></code> das crossorigin Attribut enthält, siehe <a href="/de/docs/Web/HTML/Attributes/rel/preload#cors-enabled_fetches">CORS-aktivierte Abfragen</a>.
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
                <strong>Beachten Sie:</strong> Dieser Wert erfordert auch
                <code>&#x3C;link></code> das crossorigin Attribut enthält, siehe <a href="/de/docs/Web/HTML/Attributes/rel/preload#cors-enabled_fetches">CORS-aktivierte Abfragen</a>.
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

  - : Dieses Attribut gibt explizit an, dass bestimmte Operationen durch das Abrufen einer externen Ressource blockiert werden sollen. Es darf nur verwendet werden, wenn das `rel` Attribut `expect` oder `stylesheet` Schlüsselwörter enthält. Die zu blockierenden Operationen müssen eine leerezeichengetrennte Liste der nachstehenden Blockierungs-Token enthalten.
    - `render`: Das Rendering des Inhalts auf dem Bildschirm wird blockiert.

- [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)

  - : Dieses {{Glossary("Enumerated", "enumerierte")}} Attribut gibt an, ob {{Glossary("CORS", "CORS")}} verwendet werden muss, um die Ressource abzurufen.
    [CORS-fähige Bilder](/de/docs/Web/HTML/CORS_enabled_image) können im {{HTMLElement("canvas")}} Element wiederverwendet werden, ohne "verunreinigt" zu sein.
    Die erlaubten Werte sind:

    - `anonymous`
      - : Eine Cross-Origin-Anfrage (d.h. mit einem {{HTTPHeader("Origin")}} HTTP-Header) wird ausgeführt, aber keine Berechtigungsnachweise gesendet (d.h. kein Cookie, X.509-Zertifikat oder HTTP-Basisautorisierung).
        Wenn der Server keine Berechtigungsnachweise an die Ursprungswebsite gibt (indem er den {{HTTPHeader("Access-Control-Allow-Origin")}} HTTP-Header nicht setzt), wird die Ressource verunreinigt und ihre Nutzung eingeschränkt.
    - `use-credentials`
      - : Eine Cross-Origin-Anfrage (d.h. mit einem `Origin` HTTP-Header) wird zusammen mit einem gesendeten Berechtigungsnachweis ausgeführt (d.h. ein Cookie, Zertifikat und/oder HTTP-Basisauthentifizierung wird durchgeführt).
        Wenn der Server keine Berechtigungsnachweise an die Ursprungswebsite gibt (durch den {{HTTPHeader("Access-Control-Allow-Credentials")}} HTTP-Header), wird die Ressource _verunreinigt_ und ihre Nutzung eingeschränkt.

    Wenn das Attribut nicht vorhanden ist, wird die Ressource ohne eine {{Glossary("CORS", "CORS")}} Anfrage abgerufen (d.h. ohne den `Origin` HTTP-Header zu senden), wodurch deren nicht-verunreinigte Nutzung verhindert wird. Bei ungültigen wird es behandelt, als ob das enumerierte Schlüsselwort **anonymous** verwendet wurde.
    Siehe [CORS Einstellungen Attribute](/de/docs/Web/HTML/Attributes/crossorigin) für weitere Informationen.

- `disabled`

  - : Nur für `rel="stylesheet"`, das `disabled` Boolean-Attribut gibt an, ob das beschriebene Stylesheet geladen und auf das Dokument angewendet werden soll.
    Wenn `disabled` im HTML beim Laden angegeben ist, wird das Stylesheet nicht während des Seitenladens geladen.
    Stattdessen wird das Stylesheet auf Anforderung geladen, wenn und wann das `disabled` Attribut auf `false` geändert oder entfernt wird.

    Das Setzen der `disabled` Eigenschaft im DOM führt dazu, dass das Stylesheet aus der Dokumentenliste von [`Document.styleSheets`](/de/docs/Web/API/Document/styleSheets) entfernt wird.

- `fetchpriority`

  - : Bietet einen Hinweis auf die relative Priorität, die beim Abrufen einer Ressource eines bestimmten Typs verwendet werden soll.
    Erlaubte Werte:

    - `high`
      - : Rufen Sie die Ressource mit einer hohen Priorität im Vergleich zu anderen Ressourcen desselben Typs ab.
    - `low`
      - : Rufen Sie die Ressource mit niedriger Priorität im Vergleich zu anderen Ressourcen desselben Typs ab.
    - `auto`
      - : Setzen Sie keine Präferenz für die Abrufpriorität.
        Dies ist der Standard.
        Es wird verwendet, wenn kein Wert oder ein ungültiger Wert gesetzt ist.

    Siehe [`HTMLLinkElement.fetchPriority`](/de/docs/Web/API/HTMLLinkElement/fetchPriority) für weitere Informationen.

- `href`
  - : Dieses Attribut spezifiziert die {{Glossary("URL", "URL")}} der verlinkten Ressource. Eine URL kann absolut oder relativ sein.
- `hreflang`
  - : Dieses Attribut legt die Sprache der verlinkten Ressource fest.
    Es ist rein beratend.
    Erlaubte Werte sind durch {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}} angegeben.
    Verwenden Sie dieses Attribut nur, wenn das [`href`](/de/docs/Web/HTML/Element/a#href) Attribut vorhanden ist.
- `imagesizes`
  - : Nur für `rel="preload"` und `as="image"`, das `imagesizes` Attribut hat eine ähnliche Syntax und Semantik wie das [`sizes`](/de/docs/Web/HTML/Element/img#sizes) Attribut, das angibt, die entsprechende Ressource vorab zu laden, die von einem `img` Element mit entsprechenden Werten für seine `srcset` und `sizes` Attribute verwendet wird.
- `imagesrcset`
  - : Nur für `rel="preload"` und `as="image"`, das `imagesrcset` Attribut hat eine ähnliche Syntax und Semantik wie das [`srcset`](/de/docs/Web/HTML/Element/img#srcset) Attribut, das angibt, die entsprechende Ressource vorab zu laden, die von einem `img` Element mit entsprechenden Werten für seine `srcset` und `sizes` Attribute verwendet wird.
- `integrity`
  - : Enthält Inline-Metadaten — einen Base64-kodierten kryptografischen Hash der Ressource (Datei), die Sie dem Browser zum Abrufen anweisen.
    Der Browser kann dies verwenden, um zu überprüfen, ob die abgerufene Ressource ohne unerwartete Manipulation geliefert wurde.
    Das Attribut muss nur angegeben werden, wenn das `rel` Attribut auf `stylesheet`, `preload` oder `modulepreload` gesetzt ist.
    Siehe [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity).
- `media`

  - : Dieses Attribut spezifiziert die Medien, auf die sich die verlinkte Ressource bezieht. Sein Wert muss ein Medientyp / [Media Query](/de/docs/Web/CSS/CSS_media_queries) sein.
    Dieses Attribut ist hauptsächlich nützlich beim Verknüpfen mit externen Stylesheets — es ermöglicht dem Benutzeragenten, das am besten angepasste für das Gerät auszuwählen, auf dem es läuft.

- `referrerpolicy`

  - : Ein String, der angibt, welchen Referrer beim Abrufen der Ressource verwendet werden soll:

    - `no-referrer` bedeutet, dass der {{HTTPHeader("Referer")}} Header nicht gesendet wird.
    - `no-referrer-when-downgrade` bedeutet, dass kein {{HTTPHeader("Referer")}} Header gesendet wird, wenn zu einem Ursprung ohne TLS (HTTPS) navigiert wird.
      Dies ist das Standardverhalten eines Benutzeragenten, wenn keine Richtlinie anders angegeben ist.
    - `origin` bedeutet, dass der Referrer der Ursprung der Seite sein wird, der im Wesentlichen das Schema, der Host und der Port ist.
    - `origin-when-cross-origin` bedeutet, dass das Navigieren zu anderen Ursprüngen auf das Schema, den Host und den Port beschränkt wird, während das Navigieren auf demselben Ursprung den Referrer-Pfad enthält.
    - `unsafe-url` bedeutet, dass der Referrer den Ursprung und den Pfad enthält (aber nicht das Fragment, Passwort oder Benutzername).
      Dieser Fall ist unsicher, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge leaken kann.

- [`rel`](/de/docs/Web/HTML/Attributes/rel)
  - : Dieses Attribut benennt eine Beziehung des verlinkten Dokuments zum aktuellen Dokument. Das Attribut muss eine leerzeichengetrennte Liste von [link type values](/de/docs/Web/HTML/Attributes/rel) sein.
- `sizes`

  - : Dieses Attribut definiert die Größen der Icons für visuelle Medien, die in der Ressource enthalten sind.
    Es muss nur vorhanden sein, wenn [`rel`](#rel) einen Wert von `icon` oder einen nicht-standardmäßigen Typ wie Apples `apple-touch-icon` enthält.
    Es kann die folgenden Werte haben:

    - `any`, was bedeutet, dass das Icon auf jede Größe skaliert werden kann, da es sich in einem Vektorformat wie `image/svg+xml` befindet.
    - eine durch Leerzeichen getrennte Liste von Größen, jede im Format `<width in pixels>x<height in pixels>` oder `<width in pixels>X<height in pixels>`. Jede dieser Größen muss in der Ressource enthalten sein.

    > [!NOTE]
    > Die meisten Icon-Formate können nur ein einzelnes Icon speichern, daher enthält das [`sizes`](#sizes) Attribut meistens nur einen Eintrag.
    > Microsofts ICO-Format und Apples ICNS-Format können mehrere Icon-Größen in einer einzelnen Datei speichern. ICO hat bessere Browser-Unterstützung, daher sollten Sie dieses Format verwenden, wenn Ihnen Cross-Browser-Unterstützung wichtig ist.

- `title`
  - : Das `title` Attribut hat spezielle Semantik auf dem `<link>` Element.
    Wenn es auf einem `<link rel="stylesheet">` verwendet wird, definiert es ein [default or an alternate stylesheet](/de/docs/Web/HTML/Attributes/rel/alternate_stylesheet).
- `type`
  - : Dieses Attribut wird verwendet, um den Typ der verlinkten Inhalte zu definieren.
    Der Wert des Attributs sollte ein MIME-Typ wie **text/html**, **text/css** usw. sein.
    Der Hauptzweck dieses Attributs ist es, den Typ des referenzierten Stylesheets zu definieren (wie z.B. **text/css**), aber da CSS die einzige auf dem Web verwendete Stylesheet-Sprache ist, ist es nicht nur möglich, das `type` Attribut wegzulassen, sondern es ist nun tatsächlich empfohlene Praxis.
    Es wird auch bei `rel="preload"` Link-Typen verwendet, um sicherzustellen, dass der Browser nur Dateitypen herunterlädt, die er unterstützt.

### Nicht-standardmäßige Attribute

- `target` {{Deprecated_Inline}}
  - : Definiert den Namen des Frames oder Fensters, das die definierte Verknüpfungsbeziehung hat oder das die Darstellung einer verlinkten Ressource anzeigt.

### Veraltete Attribute

- `charset` {{deprecated_inline}}

  - : Dieses Attribut definiert die Zeichencodierung der verlinkten Ressource.
    Der Wert ist eine durch Leerzeichen und/oder Kommas getrennte Liste von Zeichensätzen wie in {{rfc(2045)}} definiert.
    Der Standardwert ist `iso-8859-1`.

    > [!NOTE]
    > Um den gleichen Effekt wie dieses veraltete Attribut zu erzielen, verwenden Sie den {{HTTPHeader("Content-Type")}} HTTP-Header auf der verlinkten Ressource.

- `rev` {{deprecated_inline}}

  - : Der Wert dieses Attributs zeigt die Beziehung des aktuellen Dokuments zum verlinkten Dokument an, wie sie durch das [`href`](#href) Attribut definiert ist.
    Das Attribut definiert also die umgekehrte Beziehung im Vergleich zum Wert des `rel` Attributes.
    [Link type values](/de/docs/Web/HTML/Attributes/rel) für das Attribut sind ähnlich zu den möglichen Werten für [`rel`](#rel).

    > [!NOTE]
    > Anstelle von `rev` sollten Sie das [`rel`](#rel) Attribut mit dem entgegengesetzten [link type value](/de/docs/Web/HTML/Attributes/rel) verwenden.
    > Zum Beispiel, um den umgekehrten Link für `made` zu etablieren, geben Sie `author` an. Auch steht dieses Attribut nicht für "revision" und darf nicht mit einer Versionsnummer verwendet werden, auch wenn viele Websites es auf diese Weise missbrauchen.

## Beispiele

### Einbindung eines Stylesheets

Um ein Stylesheet in eine Seite einzubinden, verwenden Sie die folgende Syntax:

```html
<link href="style.css" rel="stylesheet" />
```

### Bereitstellung alternativer Stylesheets

Sie können auch [alternative Stylesheets](/de/docs/Web/HTML/Attributes/rel/alternate_stylesheet) angeben.

Der Benutzer kann wählen, welches Stylesheet er verwenden möchte, indem er es aus dem Menü **View > Page Style** auswählt. Dies bietet eine Möglichkeit, für Benutzer mehrere Versionen einer Seite anzuzeigen.

```html
<link href="default.css" rel="stylesheet" title="Default Style" />
<link href="fancy.css" rel="alternate stylesheet" title="Fancy" />
<link href="basic.css" rel="alternate stylesheet" title="Basic" />
```

### Bereitstellung von Icons für verschiedene Nutzungskontexte

Sie können Links zu mehreren Icons auf derselben Seite hinzufügen, und der Browser wählt aus, welches am besten für seinen bestimmten Kontext geeignet ist, indem er die `rel` und `sizes` Werte als Hinweise verwendet.

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

Für Informationen darüber, welche `sizes` Sie für Apple-Icons wählen sollten, siehe [Apples Dokumentation zur Konfiguration von Webanwendungen](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW4) und die referenzierten [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/app-icons#App-icon-sizes). Normalerweise reicht es aus, ein großes Bild, wie z.B. 192x192, bereitzustellen und dem Browser zu erlauben, es nach Bedarf herunterzuskalieren. Aber Sie möchten vielleicht Bilder mit verschiedenen Detailstufen für verschiedene Größen bereitstellen, wie es die Apple-Design-Richtlinie empfiehlt. Kleinere Icons für niedrigere Auflösungen bereitzustellen, spart auch Bandbreite.

Es kann nicht nötig sein, `<link>` Elemente überhaupt bereitzustellen. Zum Beispiel fordern Browser automatisch das `/favicon.ico` vom Root einer Seite an, und Apple fordert auch automatisch `/apple-touch-icon-[size].png`, `/apple-touch-icon.png` usw. an. Die Bereitstellung expliziter Links schützt Sie jedoch vor Änderungen dieser Konventionen.

### Bedingtes Laden von Ressourcen mit Media Queries

Sie können einen Medientyp oder eine Abfrage innerhalb eines `media` Attributs bereitstellen;
dieses Ressourcen wird dann nur geladen, wenn die Medienbedingung wahr ist. Zum Beispiel:

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

Sie können bestimmen, wann ein Stylesheet geladen wurde, indem Sie darauf achten, dass ein `load` Ereignis darauf ausgelöst wird; ähnlich können Sie erkennen, ob ein Fehler beim Verarbeiten eines Stylesheets aufgetreten ist, indem Sie auf ein `error` Ereignis achten:

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
> Das `load` Ereignis wird ausgelöst, sobald das Stylesheet und alle importierten Inhalte geladen und geparst wurden, und unmittelbar bevor die Styles auf den Inhalt angewendet werden.

### Preload-Beispiele

Eine Reihe von `<link rel="preload">` Beispielen finden Sie in [Vorladen von Inhalten mit `rel="preload"`](/de/docs/Web/HTML/Attributes/rel/preload).

### Rendering blockieren, bis eine Ressource abgerufen wird

Sie können den `render`-Token in einem `blocking` Attribut einfügen;
das Rendering der Seite wird gestoppt, bis die Ressource abgerufen ist. Zum Beispiel:

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
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Flow content</a> und
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">phrasing content</a>.
      </td>
    </tr>
    <tr>
      <th>Erlaubter Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "void element")}}.</td>
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
      <th scope="row">Implizite ARIA Rolle</th>
      <td><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/link_role"><code>link</code></a> mit <code>href</code> Attribut</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA Rollen</th>
      <td>Keine <code>role</code> erlaubt</td>
    </tr>
    <tr>
      <th>DOM Schnittstelle</th>
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
