---
title: "<link>: Das External Resource Link Element"
slug: Web/HTML/Element/link
l10n:
  sourceCommit: 7ab2f95b22919d8b897754e8a66981d0b9a4e2c4
---

{{HTMLSidebar}}

Das **`<link>`** [HTML](/de/docs/Web/HTML) Element spezifiziert Beziehungen zwischen dem aktuellen Dokument und einer externen Ressource. Dieses Element wird am häufigsten verwendet, um auf {{Glossary("CSS", "Stylesheets")}} zu verlinken, wird aber auch zur Einrichtung von Website-Icons (sowohl „Favicon“-Icons als auch Icons für den Startbildschirm und Apps auf mobilen Geräten) und für andere Dinge verwendet.

{{EmbedInteractiveExample("pages/tabbed/link.html", "tabbed-shorter")}}

Um ein externes Stylesheet zu verlinken, sollten Sie ein `<link>` Element innerhalb Ihres {{HTMLElement("head")}} folgendermaßen einfügen:

```html
<link href="main.css" rel="stylesheet" />
```

Dieses einfache Beispiel liefert den Pfad zum Stylesheet innerhalb eines `href` Attributs und ein [`rel`](/de/docs/Web/HTML/Attributes/rel) Attribut mit dem Wert `stylesheet`. Das `rel` steht für "relationship" und ist eines der Schlüsselelemente des `<link>` Elements — der Wert gibt an, wie das verlinkte Element mit dem enthaltenen Dokument in Beziehung steht.

Es gibt eine Reihe weiterer häufig vorkommender Typen, die Sie finden werden. Zum Beispiel, ein Link zum Favicon der Seite:

```html
<link rel="icon" href="favicon.ico" />
```

Es gibt eine Reihe weiterer Icon `rel` Werte, die hauptsächlich verwendet werden, um spezielle Icon-Typen für verschiedene mobile Plattformen anzuzeigen, z.B.:

```html
<link
  rel="apple-touch-icon"
  sizes="114x114"
  href="apple-icon-114.png"
  type="image/png" />
```

Das `sizes` Attribut gibt die Größe des Icons an, während `type` den MIME-Typ der verlinkten Ressource enthält. Diese bieten nützliche Hinweise, um dem Browser die Wahl des am besten geeigneten Icons zu ermöglichen.

Sie können auch einen Medientyp oder eine Abfrage innerhalb eines `media` Attributs bereitstellen; diese Ressource wird dann nur geladen, wenn die Medienbedingung wahr ist. Zum Beispiel:

```html
<link href="print.css" rel="stylesheet" media="print" />
<link
  href="mobile.css"
  rel="stylesheet"
  media="screen and (max-width: 600px)" />
```

Einige interessante neue Leistungs- und Sicherheitsmerkmale wurden ebenfalls zum `<link>` Element hinzugefügt. Nehmen Sie dieses Beispiel:

```html
<link
  rel="preload"
  href="myFont.woff2"
  as="font"
  type="font/woff2"
  crossorigin="anonymous" />
```

Ein `rel` Wert von `preload` zeigt an, dass der Browser diese Ressource vorladen soll (siehe [`rel="preload"`](/de/docs/Web/HTML/Attributes/rel/preload) für weitere Details), wobei das `as` Attribut die spezifische Klasse des zu fetchenden Inhalts angibt. Das `crossorigin` Attribut zeigt an, ob die Ressource mit einer {{Glossary("CORS")}} Anfrage fetchen werden soll.

Weitere Nutzungshinweise:

- Ein `<link>` Element kann entweder im {{HTMLElement("head")}} oder {{HTMLElement("body")}} Element vorkommen, je nachdem, ob es einen [Link-Typ](https://html.spec.whatwg.org/multipage/links.html#body-ok) hat, der **body-ok** ist. Zum Beispiel ist der `stylesheet` Link-Typ body-ok, und daher ist `<link rel="stylesheet">` im Body erlaubt. Allerdings ist es keine gute Praxis, dies zu befolgen; es ist sinnvoller, Ihre `<link>` Elemente vom Body-Inhalt zu trennen und in den `<head>` zu setzen.
- Wenn Sie `<link>` verwenden, um ein Favicon für eine Website einzurichten, und Ihre Website eine Content Security Policy (CSP) zur Verbesserung der Sicherheit verwendet, gilt diese Richtlinie auch für das Favicon. Wenn Probleme beim Laden des Favicons auftreten, prüfen Sie, ob die {{HTTPHeader("Content-Security-Policy")}} Header-Richtlinie [`img-src` directive](/de/docs/Web/HTTP/Headers/Content-Security-Policy/img-src) den Zugriff darauf nicht verhindert.
- Die HTML- und XHTML-Spezifikationen definieren Ereignishandler für das `<link>` Element, aber es ist unklar, wie sie verwendet werden würden.
- Unter XHTML 1.0 benötigen {{glossary("void element", "void elements")}} wie `<link>` einen abschließenden Schrägstrich: `<link />`.
- WebTV unterstützt die Verwendung des Wertes `next` für `rel`, um die nächste Seite in einer Dokumentenserie vorzuladen.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `as`

  - : Dieses Attribut ist erforderlich, wenn [`rel="preload"`](/de/docs/Web/HTML/Attributes/rel/preload) auf dem `<link>` Element gesetzt ist, optional wenn [`rel="modulepreload"`](/de/docs/Web/HTML/Attributes/rel/modulepreload) gesetzt ist, und sollte ansonsten nicht verwendet werden. Es legt den Typ des Inhalts fest, der durch `<link>` geladen wird, was für das Anforderungs-Matching, die Anwendung der richtigen [Content-Security-Policy](/de/docs/Web/HTTP/CSP) und das Setzen des korrekten {{HTTPHeader("Accept")}} Anforderungs-Headers notwendig ist.

    Darüber hinaus verwendet `rel="preload"` dies als Signal für die Priorisierung von Anfragen. Die folgende Tabelle listet die zulässigen Werte für dieses Attribut auf und die Elemente oder Ressourcen, auf die sie sich beziehen.

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
                <strong>Hinweis:</strong> Dieser Wert erfordert auch
                <code>&#x3C;link></code>, um das crossorigin Attribut zu enthalten, siehe <a href="/de/docs/Web/HTML/Attributes/rel/preload#cors-enabled_fetches">CORS-aktiviertes Fetching</a>.
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
                <strong>Hinweis:</strong> Dieser Wert erfordert auch
                <code>&#x3C;link></code>, um das crossorigin Attribut zu enthalten, siehe <a href="/de/docs/Web/HTML/Attributes/rel/preload#cors-enabled_fetches">CORS-aktiviertes Fetching</a>.
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

  - : Dieses Attribut gibt explizit an, dass bestimmte Operationen beim Laden einer externen Ressource blockiert werden sollen. Es darf nur verwendet werden, wenn das `rel` Attribut die Schlüsselwörter `expect` oder `stylesheet` enthält. Die zu blockierenden Operationen müssen eine durch Leerzeichen getrennte Liste von Blockierungs-Token sein, die unten aufgeführt sind.
    - `render`: Das Rendern von Inhalten auf dem Bildschirm wird blockiert.

- [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)

  - : Dieses [enumerierte](/de/docs/Glossary/Enumerated) Attribut gibt an, ob {{Glossary("CORS")}} beim Fetchen der Ressource verwendet werden muss. [CORS-aktivierte Bilder](/de/docs/Web/HTML/CORS_enabled_image) können im {{HTMLElement("canvas")}} Element wiederverwendet werden, ohne verunreinigt zu werden. Die erlaubten Werte sind:

    - `anonymous`
      - : Eine Cross-Origin-Anfrage (d.h. mit einem {{HTTPHeader("Origin")}} HTTP-Header) wird ausgeführt, aber keine Anmeldeinformationen werden gesendet (d.h. kein Cookie, kein X.509-Zertifikat oder keine HTTP-Basisauthentifizierung). Wenn der Server keine Anmeldeinformationen an die Ursprungsseite freigibt (indem er den {{HTTPHeader("Access-Control-Allow-Origin")}} HTTP-Header nicht setzt), wird die Ressource verunreinigt und ihre Nutzung eingeschränkt.
    - `use-credentials`
      - : Eine Cross-Origin-Anfrage (d.h. mit einem `Origin` HTTP-Header) wird zusammen mit Anmeldeinformationen gesendet (d.h. es wird ein Cookie, ein Zertifikat und/oder eine HTTP-Basisauthentifizierung durchgeführt). Wenn der Server keine Anmeldeinformationen an die Ursprungsseite freigibt (durch den {{HTTPHeader("Access-Control-Allow-Credentials")}} HTTP-Header), wird die Ressource verunreinigt und ihre Nutzung eingeschränkt.

    Wenn das Attribut nicht vorhanden ist, wird die Ressource ohne eine {{Glossary("CORS")}} Anfrage abgefragt (d.h. ohne den `Origin` HTTP-Header zu senden), wodurch ihre unverfälschte Nutzung verhindert wird. Wenn es ungültig ist, wird es so behandelt, als ob das enumerierte Schlüsselwort **anonymous** verwendet wurde. Siehe [CORS Einstellungsattribute](/de/docs/Web/HTML/Attributes/crossorigin) für weitere Informationen.

- `disabled`

  - : Nur für `rel="stylesheet"`, das `disabled` Boolean-Attribut gibt an, ob das beschriebene Stylesheet geladen und auf das Dokument angewendet werden soll. Wenn `disabled` im HTML angegeben ist, wird das Stylesheet nicht während des Seitenladevorgangs geladen. Stattdessen wird das Stylesheet bei Bedarf geladen, wenn das `disabled` Attribut auf `false` gesetzt oder entfernt wird.

    Das Setzen der `disabled` Eigenschaft im DOM führt dazu, dass das Stylesheet aus der Liste des Dokuments {{domxref("Document.styleSheets")}} entfernt wird.

- `fetchpriority`

  - : Gibt einen Hinweis auf die relative Priorität beim Laden einer vorab geladenen Ressource. Erlaubte Werte:

    - `high`
      - : Signalisiert ein hohes Prioritätsfetch im Vergleich zu anderen Ressourcen desselben Typs.
    - `low`
      - : Signalisiert ein niedriges Prioritätsfetch im Vergleich zu anderen Ressourcen desselben Typs.
    - `auto`
      - : Standard: Signalisiert die automatische Bestimmung der Fetch-Priorität im Vergleich zu anderen Ressourcen desselben Typs.

- `href`
  - : Dieses Attribut gibt die {{glossary("URL")}} der verlinkten Ressource an. Eine URL kann absolut oder relativ sein.
- `hreflang`
  - : Dieses Attribut gibt die Sprache der verlinkten Ressource an. Es ist rein beratend. Erlaubte Werte sind in {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}} angegeben. Verwenden Sie dieses Attribut nur, wenn das [`href`](/de/docs/Web/HTML/Element/a#href) Attribut vorhanden ist.
- `imagesizes`
  - : Nur für `rel="preload"` und `as="image"`, das `imagesizes` Attribut ist [ein Größenattribut](https://html.spec.whatwg.org/multipage/images.html#sizes-attribute), das darauf hinweist, die entsprechende Ressource für ein `img` Element mit entsprechenden Werten für seine `srcset` und `sizes` Attribute vorzuladen.
- `imagesrcset`
  - : Nur für `rel="preload"` und `as="image"`, das `imagesrcset` Attribut ist [ein Quellenattribut](https://html.spec.whatwg.org/multipage/images.html#srcset-attribute), das darauf hinweist, die entsprechende Ressource für ein `img` Element mit entsprechenden Werten für seine `srcset` und `sizes` Attribute vorzuladen.
- `integrity`
  - : Enthält Inline-Metadaten – einen base64-codierten kryptografischen Hash der Ressource (Datei), die Sie dem Browser zum Fetching vorschlagen. Der Browser kann dies verwenden, um zu überprüfen, ob die abgerufene Ressource ohne unerwartete Manipulation bereitgestellt wurde. Das Attribut darf nur angegeben werden, wenn das `rel` Attribut auf `stylesheet`, `preload` oder `modulepreload` gesetzt ist. Siehe [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity).
- `media`

  - : Dieses Attribut gibt die Medien an, auf die die verlinkte Ressource zutrifft. Sein Wert muss ein Medientyp / [Media Query](/de/docs/Web/CSS/CSS_media_queries) sein. Dieses Attribut ist hauptsächlich nützlich beim Verlinken auf externe Stylesheets — es ermöglicht dem User-Agent, das am besten angepasste für das Gerät auszuwählen, auf dem es läuft.

- `referrerpolicy`

  - : Ein String, der angibt, welchen Referrer beim Abrufen der Ressource verwendet werden soll:

    - `no-referrer` bedeutet, dass der {{HTTPHeader("Referer")}} Header nicht gesendet wird.
    - `no-referrer-when-downgrade` bedeutet, dass kein {{HTTPHeader("Referer")}} Header gesendet wird, wenn zu einem Ursprung ohne TLS (HTTPS) gewechselt wird. Dies ist das Standardverhalten eines User-Agents, wenn keine andere Richtlinie angegeben ist.
    - `origin` bedeutet, dass der Referrer der Ursprung der Seite sein wird, was ungefähr das Schema, den Host und den Port umfasst.
    - `origin-when-cross-origin` bedeutet, dass sich die Navigation zu anderen Ursprüngen auf das Schema, den Host und den Port beschränkt, während bei der Navigation im selben Ursprung auch der Pfad des Referrers einbezogen wird.
    - `unsafe-url` bedeutet, dass der Referrer den Ursprung und den Pfad umfasst (jedoch nicht das Fragment, Passwort oder den Benutzernamen). Dieser Fall ist unsicher, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge leaken kann.

- [`rel`](/de/docs/Web/HTML/Attributes/rel)
  - : Dieses Attribut benennt eine Beziehung des verlinkten Dokuments zum aktuellen Dokument. Das Attribut muss eine durch Leerzeichen getrennte Liste von [Link-Typ-Werten](/de/docs/Web/HTML/Attributes/rel) sein.
- `sizes`

  - : Dieses Attribut definiert die Größen der Icons für visuelle Medien, die in der Ressource enthalten sind. Es muss nur vorhanden sein, wenn das [`rel`](#rel) einen Wert von `icon` oder einen nicht standardmäßigen Typ wie Apples `apple-touch-icon` enthält. Es kann die folgenden Werte haben:

    - `any`, was bedeutet, dass das Icon auf jede Größe skaliert werden kann, da es im Vektorformat wie `image/svg+xml` vorliegt.
    - Eine durch Leerzeichen getrennte Liste von Größen, jede im Format `<Breite in Pixel>x<Höhe in Pixel>` oder `<Breite in Pixel>X<Höhe in Pixel>`. Jede dieser Größen muss in der Ressource enthalten sein.

    > [!NOTE]
    > Die meisten Icon-Formate sind nur in der Lage, ein einzelnes Icon zu speichern; daher enthält das [`sizes`](#sizes) Attribut meistens nur einen Eintrag. Microsofts ICO-Format und Apples ICNS-Format können mehrere Icon-Größen in einer einzelnen Datei speichern. ICO hat eine bessere Browserunterstützung, daher sollten Sie dieses Format verwenden, wenn Cross-Browser-Unterstützung ein Anliegen ist.

- `title`
  - : Das `title` Attribut hat spezielle Semantik auf dem `<link>` Element. Wenn es auf einem `<link rel="stylesheet">` verwendet wird, definiert es ein [Standard- oder ein alternatives Stylesheet](/de/docs/Web/CSS/Alternative_style_sheets).
- `type`
  - : Dieses Attribut wird verwendet, um den Typ des verlinkten Inhalts zu definieren. Der Wert des Attributs sollte ein MIME-Typ wie **text/html**, **text/css**, etc. sein. Die häufigste Verwendung dieses Attributs ist es, den Typ des referenzierten Stylesheets zu definieren (z.B. **text/css**), aber da CSS die einzige Stilsprache ist, die im Web verwendet wird, ist es nicht nur möglich, das `type` Attribut wegzulassen, sondern es wird jetzt tatsächlich empfohlen, dies zu tun. Es wird auch für `rel="preload"` Link-Typen verwendet, um sicherzustellen, dass der Browser nur Dateitypen herunterlädt, die er unterstützt.

### Nicht-standardmäßige Attribute

- `target` {{Deprecated_Inline}}
  - : Definiert den Frame oder das Fenster, das die definierte Linkbeziehung hat oder das die Darstellung einer verlinkten Ressource zeigt.

### Veraltete Attribute

- `charset` {{deprecated_inline}}

  - : Dieses Attribut definiert die Zeichencodierung der verlinkten Ressource. Der Wert ist eine durch Leerzeichen und/oder Kommas getrennte Liste von Zeichensätzen, wie in {{rfc(2045)}} definiert. Der Standardwert ist `iso-8859-1`.

    > [!NOTE]
    > Um den gleichen Effekt wie dieses veraltete Attribut zu erzielen, verwenden Sie den {{HTTPHeader("Content-Type")}} HTTP-Header auf der verlinkten Ressource.

- `rev` {{deprecated_inline}}

  - : Der Wert dieses Attributs zeigt die Beziehung des aktuellen Dokuments zum verlinkten Dokument an, wie durch das [`href`](#href) Attribut definiert. Das Attribut definiert somit die umgekehrte Beziehung im Vergleich zum Wert des `rel` Attributs. [Link-Typ-Werte](/de/docs/Web/HTML/Attributes/rel) für das Attribut sind ähnlich den möglichen Werten für [`rel`](#rel).

    > [!NOTE]
    > Anstelle von `rev` sollten Sie das [`rel`](#rel) Attribut mit dem entgegengesetzten [Link-Typ-Wert](/de/docs/Web/HTML/Attributes/rel) verwenden. Beispielsweise, um den umgekehrten Link für `made` festzulegen, geben Sie `author` an. Außerdem steht dieses Attribut nicht für "revision" und darf nicht mit einer Versionsnummer verwendet werden, auch wenn viele Websites es auf diese Weise falsch verwenden.

## Beispiele

### Einbindung eines Stylesheets

Um ein Stylesheet in einer Seite einzubinden, verwenden Sie die folgende Syntax:

```html
<link href="style.css" rel="stylesheet" />
```

### Bereitstellung alternativer Stylesheets

Sie können auch [alternative Stylesheets](/de/docs/Web/CSS/Alternative_style_sheets) angeben.

Der Benutzer kann auswählen, welches Stylesheet er verwenden möchte, indem er es aus dem Menü **Ansicht > Seitenstil** auswählt. Dies bietet eine Möglichkeit für Benutzer, mehrere Versionen einer Seite zu sehen.

```html
<link href="default.css" rel="stylesheet" title="Default Style" />
<link href="fancy.css" rel="alternate stylesheet" title="Fancy" />
<link href="basic.css" rel="alternate stylesheet" title="Basic" />
```

### Bereitstellung von Icons für unterschiedliche Nutzungskontexte

Sie können Links zu mehreren Icons auf derselben Seite einfügen, und der Browser wählt aus, welches für seinen speziellen Kontext am besten geeignet ist, indem er die `rel` und `sizes` Werte als Hinweise verwendet.

```html
<!-- iPad Pro mit hochauflösendem Retina-Display: -->
<link
  rel="apple-touch-icon"
  sizes="167x167"
  href="/apple-touch-icon-167x167.png" />
<!-- 3x Auflösung iPhone: -->
<link
  rel="apple-touch-icon"
  sizes="180x180"
  href="/apple-touch-icon-180x180.png" />
<!-- Nicht-Retina iPad, iPad mini usw.: -->
<link
  rel="apple-touch-icon"
  sizes="152x152"
  href="/apple-touch-icon-152x152.png" />
<!-- 2x Auflösung iPhone und andere Geräte: -->
<link rel="apple-touch-icon" href="/apple-touch-icon-120x120.png" />
<!-- Basis-Favicon -->
<link rel="icon" href="/favicon.ico" />
```

Für Informationen darüber, welche `sizes` für Apple-Icons gewählt werden sollen, siehe [Apples Dokumentation zur Konfiguration von Webanwendungen](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW4) und die eingeführten [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/app-icons#App-icon-sizes). In der Regel reicht es aus, ein großes Bild bereitzustellen, z.B. 192x192, und den Browser es nach Bedarf herunterzuskalieren zu lassen, aber möglicherweise möchten Sie Bilder mit unterschiedlichen Detaillierungsgraden für verschiedene Größen bereitstellen, wie es die Apple Designrichtlinien empfehlen. Das Bereitstellen kleinerer Icons für niedrigere Auflösungen spart auch Bandbreite.

Es kann nicht notwendig sein, überhaupt `<link>` Elemente bereitzustellen. Beispielsweise fordern Browser automatisch `/favicon.ico` aus dem Root einer Seite an, und Apple fordert auch automatisch `/apple-touch-icon-[size].png`, `/apple-touch-icon.png`, etc. an. Die Bereitstellung expliziter Links schützt Sie jedoch vor Änderungen dieser Konventionen.

### Ressourcen bedingt mit Media Queries laden

Sie können einen Medientyp oder eine Abfrage innerhalb eines `media` Attributs angeben; diese Ressource wird dann nur geladen, wenn die Medienbedingung zutrifft. Zum Beispiel:

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

Sie können bestimmen, wann ein Stylesheet geladen wurde, indem Sie ein `load` Ereignis darauf überwachen; ähnlich können Sie erkennen, ob ein Fehler beim Verarbeiten eines Stylesheets aufgetreten ist, indem Sie ein `error` Ereignis überwachen:

```html
<link rel="stylesheet" href="mystylesheet.css" id="my-stylesheet" />

<script>
  const stylesheet = document.getElementById("my-stylesheet");

  stylesheet.onload = () => {
    // Tun Sie etwas Interessantes; das Stylesheet wurde geladen
  };

  stylesheet.onerror = () => {
    console.log("Ein Fehler ist beim Laden des Stylesheets aufgetreten!");
  };
</script>
```

> [!NOTE]
> Das `load` Ereignis wird ausgelöst, sobald das Stylesheet und all seine importierten Inhalte geladen und geparst wurden, und unmittelbar bevor die Styles auf den Inhalt angewendet werden.

### Preload-Beispiele

Sie können eine Reihe von `<link rel="preload">` Beispielen in [Inhalte mit `rel="preload"` vorladen](/de/docs/Web/HTML/Attributes/rel/preload) finden.

### Blockieren des Renderings bis eine Ressource abgefragt wird

Sie können `render` Token innerhalb eines `blocking` Attributs einfügen; das Rendering der Seite wird blockiert, bis die Ressource geladen ist. Zum Beispiel:

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
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Flussinhalt</a> und
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Textinhalt</a>.
      </td>
    </tr>
    <tr>
      <th>Erlaubter Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void element")}}.</td>
    </tr>
    <tr>
      <th>Tag-Auslassung</th>
      <td>Muss ein Start-Tag haben und darf kein End-Tag haben.</td>
    </tr>
    <tr>
      <th>Erlaubte Eltern</th>
      <td>
        Jedes Element, das Metadaten akzeptiert.
        Wenn <a href="/de/docs/Web/HTML/Global_attributes/itemprop">itemprop</a> vorhanden ist: jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Textinhalt</a> akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA Rolle</th>
      <td><a href="/de/docs/Web/Accessibility/ARIA/Roles/link_role"><code>link</code></a> mit <code>href</code> Attribut</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA Rollen</th>
      <td>Keine <code>role</code> erlaubt</td>
    </tr>
    <tr>
      <th>DOM-Schnittstelle</th>
      <td>{{DOMxRef("HTMLLinkElement")}}</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Link")}} HTTP Header
