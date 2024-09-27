---
title: "<link>: Das External Resource Link Element"
slug: Web/HTML/Element/link
l10n:
  sourceCommit: 7ab2f95b22919d8b897754e8a66981d0b9a4e2c4
---

{{HTMLSidebar}}

Das **`<link>`**-Element [HTML](/de/docs/Web/HTML) gibt Beziehungen zwischen dem aktuellen Dokument und einer externen Ressource an. Dieses Element wird am häufigsten verwendet, um auf [Stylesheets](/de/docs/Glossary/CSS) zu verweisen, aber es wird auch verwendet, um Website-Icons (sowohl "Favicon"-Style-Icons als auch Icons für den Startbildschirm und Apps auf mobilen Geräten) zu erstellen.

{{EmbedInteractiveExample("pages/tabbed/link.html", "tabbed-shorter")}}

Um ein externes Stylesheet zu verlinken, würde man ein `<link>`-Element innerhalb Ihres {{HTMLElement("head")}} einfügen, zum Beispiel so:

```html
<link href="main.css" rel="stylesheet" />
```

Dieses einfache Beispiel gibt den Pfad zum Stylesheet in einem `href`-Attribut an und ein [`rel`](/de/docs/Web/HTML/Attributes/rel)-Attribut mit dem Wert `stylesheet`. `rel` steht für "relationship" und ist eines der Schlüsselfunktionen des `<link>`-Elements — der Wert gibt an, wie der verknüpfte Artikel mit dem enthaltenen Dokument in Beziehung steht.

Es gibt eine Reihe anderer gebräuchlicher Typen, denen Sie begegnen werden. Zum Beispiel ein Link zum Favicon der Seite:

```html
<link rel="icon" href="favicon.ico" />
```

Es gibt eine Reihe von anderen `rel`-Werten für Icons, hauptsächlich um spezielle Icon-Typen für den Einsatz auf verschiedenen mobilen Plattformen anzugeben, z. B.:

```html
<link
  rel="apple-touch-icon"
  sizes="114x114"
  href="apple-icon-114.png"
  type="image/png" />
```

Das `sizes`-Attribut gibt die Icon-Größe an, während der `type` den MIME-Typ der verknüpften Ressource enthält. Diese bieten nützliche Hinweise, damit der Browser das am besten geeignete Icon auswählen kann.

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

Ein `rel`-Wert von `preload` gibt an, dass der Browser diese Ressource vorab laden soll (siehe [`rel="preload"`](/de/docs/Web/HTML/Attributes/rel/preload) für weitere Details), mit dem `as`-Attribut zur Angabe der spezifischen Klasse des angeforderten Inhalts. Das `crossorigin`-Attribut gibt an, ob die Ressource mit einer [CORS](/de/docs/Glossary/CORS)-Anforderung angefordert werden soll.

Weitere Verwendungshinweise:

- Ein `<link>`-Element kann entweder im {{HTMLElement("head")}} oder im {{HTMLElement("body")}} Element vorkommen, abhängig davon, ob es einen [Link-Typ](https://html.spec.whatwg.org/multipage/links.html#body-ok) hat, der **body-ok** ist. Zum Beispiel ist der `stylesheet`-Link-Typ body-ok, und daher ist `<link rel="stylesheet">` im Body zugelassen. Allerdings ist dies keine gute Praxis, es macht mehr Sinn, Ihre `<link>`-Elemente von Ihrem Body-Inhalt zu trennen und sie in den `<head>` zu setzen.
- Wenn Sie `<link>` verwenden, um ein Favicon für eine Seite zu erstellen, und Ihre Seite verwendet eine Content Security Policy (CSP), um deren Sicherheit zu erhöhen, gilt diese Richtlinie auf das Favicon. Wenn Sie Probleme haben und das Favicon nicht geladen wird, überprüfen Sie, dass das {{HTTPHeader("Content-Security-Policy")}} Header's [`img-src` Direktive](/de/docs/Web/HTTP/Headers/Content-Security-Policy/img-src) den Zugriff darauf nicht verhindert.
- Die HTML- und XHTML-Spezifikationen definieren Event-Handler für das `<link>`-Element, es ist jedoch unklar, wie diese verwendet werden würden.
- Unter XHTML 1.0 erfordern [void elements](/de/docs/Glossary/void_element) wie `<link>` einen abschließenden Schrägstrich: `<link />`.
- WebTV unterstützt die Verwendung des Werts `next` für `rel`, um die nächste Seite in einer Dokumentenreihe vorzuladen.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `as`

  - : Dieses Attribut ist erforderlich, wenn [`rel="preload"`](/de/docs/Web/HTML/Attributes/rel/preload) für das `<link>`-Element gesetzt wurde, optional, wenn [`rel="modulepreload"`](/de/docs/Web/HTML/Attributes/rel/modulepreload) gesetzt wurde, und sollte ansonsten nicht verwendet werden. Es gibt den Typ des Inhalts an, der vom `<link>` geladen wird, was notwendig für die Übereinstimmung von Anfragen, die Anwendung der richtigen [Content Security Policy](/de/docs/Web/HTTP/CSP) und das Setzen des korrekten {{HTTPHeader("Accept")}}-Anforderungsheaders ist.

    Darüber hinaus verwendet `rel="preload"` dies als Signal für die Priorisierung von Anfragen. Die folgende Tabelle listet die gültigen Werte für dieses Attribut sowie die Elemente oder Ressourcen, auf die sie angewendet werden, auf.

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
                <strong>Hinweis:</strong> Dieser Wert erfordert auch, dass
                <code>&#x3C;link></code> das crossorigin Attribut enthält, siehe <a href="/de/docs/Web/HTML/Attributes/rel/preload#cors-enabled_fetches">CORS-aktivierte Abfragen</a>.
              </p>
            </div>
          </td>
        </tr>
        <tr>
          <td>image</td>
          <td>
            <code>&#x3C;img></code> und <code>&#x3C;picture></code>-Elemente mit
            srcset oder imageset Attributen, SVG <code>&#x3C;image></code>-Elemente,
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

  - : Dieses Attribut gibt explizit an, dass bestimmte Operationen beim Abrufen einer externen Ressource blockiert werden sollten. Es darf nur verwendet werden, wenn das `rel`-Attribut die Schlüsselwörter `expect` oder `stylesheet` enthält. Die blockierten Operationen müssen eine durch Leerzeichen getrennte Liste der unten aufgelisteten blockierenden Tokens sein.
    - `render`: Das Rendern der Inhalte auf dem Bildschirm wird blockiert.

- [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)

  - : Dieses [enumerierte](/de/docs/Glossary/Enumerated) Attribut gibt an, ob beim Abrufen der Ressource [CORS](/de/docs/Glossary/CORS) verwendet werden muss.
    [CORS-fähige Bilder](/de/docs/Web/HTML/CORS_enabled_image) können im {{HTMLElement("canvas")}}-Element wiederverwendet werden, ohne _verunreinigt_ zu werden.
    Die zulässigen Werte sind:

    - `anonymous`
      - : Eine Cross-Origin-Anfrage (d. h. mit einem {{HTTPHeader("Origin")}} HTTP-Header) wird durchgeführt, aber es werden keine Anmeldeinformationen gesendet (d. h. kein Cookie, X.509-Zertifikat oder HTTP-Authentifizierung).
        Wenn der Server der Ursprungsseite keine Anmeldeinformationen gibt (indem er nicht den {{HTTPHeader("Access-Control-Allow-Origin")}} HTTP-Header setzt), wird die Ressource verunreinigt und ihre Nutzung eingeschränkt.
    - `use-credentials`
      - : Eine Cross-Origin-Anfrage (d. h. mit einem `Origin` HTTP-Header) wird durchgeführt, zusammen mit einer gesendeten Anmeldeinformation (d. h. ein Cookie, Zertifikat und/oder HTTP-Authentifizierung wird durchgeführt).
        Wenn der Server die Anmeldeinformationen der Ursprungsseite nicht bereitstellt (durch {{HTTPHeader("Access-Control-Allow-Credentials")}} HTTP-Header), wird die Ressource verunreinigt und ihre Nutzung eingeschränkt.

    Wenn das Attribut nicht vorhanden ist, wird die Ressource ohne eine [CORS](/de/docs/Glossary/CORS)-Anfrage abgerufen (d. h. ohne den `Origin` HTTP-Header zu senden), was die nicht verunreinigte Nutzung verhindert. Bei Ungültigkeit wird es so behandelt, als ob das enumerierte Schlüsselwort **anonymous** verwendet wurde.
    Siehe [CORS-Einstellung-Attribute](/de/docs/Web/HTML/Attributes/crossorigin) für weitere Informationen.

- `disabled`

  - : Nur für `rel="stylesheet"`, gibt das `disabled`-Boolean-Attribut an, ob das beschriebene Stylesheet geladen und auf das Dokument angewendet werden soll.
    Wenn `disabled` im HTML angegeben wird, wenn es geladen wird, wird das Stylesheet nicht während des Seitenladens geladen.
    Stattdessen wird das Stylesheet nach Bedarf geladen, wenn und wann das `disabled`-Attribut zu `false` geändert oder entfernt wird.

    Das Setzen der `disabled`-Eigenschaft im DOM führt dazu, dass das Stylesheet aus der Liste der [`Document.styleSheets`](/de/docs/Web/API/Document/styleSheets) des Dokuments entfernt wird.

- `fetchpriority`

  - : Bietet einen Hinweis auf die relative Priorität, die beim Abrufen einer vorab geladenen Ressource verwendet werden soll. Erlaubte Werte:

    - `high`
      - : Signalisiert einen Vorrang bei der Anforderung im Vergleich zu anderen Ressourcen desselben Typs.
    - `low`
      - : Signalisiert eine niedrigere Anforderungspriorität im Vergleich zu anderen Ressourcen desselben Typs.
    - `auto`
      - : Standard: Signalisiert die automatische Bestimmung der Anforderungspriorität im Vergleich zu anderen Ressourcen desselben Typs.

- `href`
  - : Dieses Attribut gibt die [URL](/de/docs/Glossary/URL) der verlinkten Ressource an. Eine URL kann absolut oder relativ sein.
- `hreflang`
  - : Dieses Attribut gibt die Sprache der verlinkten Ressource an.
    Es ist rein beratend.
    Zulässige Werte sind spezifiziert durch {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}}.
    Verwenden Sie dieses Attribut nur, wenn das [`href`](/de/docs/Web/HTML/Element/a#href) Attribut vorhanden ist.
- `imagesizes`
  - : Nur für `rel="preload"` und `as="image"`, ist das `imagesizes` Attribut [ein sizes Attribut](https://html.spec.whatwg.org/multipage/images.html#sizes-attribute), das angibt, die passende Ressource vorab zu laden, die von einem `img`-Element mit entsprechend passenden Werten für seine `srcset` und `sizes` Attribute verwendet wird.
- `imagesrcset`
  - : Nur für `rel="preload"` und `as="image"`, ist das `imagesrcset` Attribut [ein sourceset Attribut](https://html.spec.whatwg.org/multipage/images.html#srcset-attribute), das angibt, die passende Ressource vorab zu laden, die von einem `img`-Element mit entsprechend passenden Werten für seine `srcset` und `sizes` Attribute verwendet wird.
- `integrity`
  - : Enthält Inline-Metadaten — ein Base64-kodierter kryptografischer Hash der Ressource (Datei), die Sie dem Browser sagen, abzurufen.
    Der Browser kann dies verwenden, um zu überprüfen, dass die abgerufene Ressource ohne unerwartete Manipulation geliefert wurde.
    Das Attribut darf nur angegeben werden, wenn das `rel` Attribut auf `stylesheet`, `preload` oder `modulepreload` gesetzt ist.
    Siehe [Integrität von Subressourcen](/de/docs/Web/Security/Subresource_Integrity).
- `media`

  - : Dieses Attribut gibt die Medien an, auf die sich die verknüpfte Ressource bezieht. Sein Wert muss ein Medientyp / [media query](/de/docs/Web/CSS/CSS_media_queries) sein.
    Dieses Attribut ist hauptsächlich nützlich, wenn Sie auf externe Stylesheets verlinken — es ermöglicht dem Benutzeragenten, das am besten angepasste für das Gerät auszuwählen, auf dem es läuft.

- `referrerpolicy`

  - : Ein String, der angibt, welcher Referrer beim Abrufen der Ressource verwendet werden soll:

    - `no-referrer` bedeutet, dass der {{HTTPHeader("Referer")}} Header nicht gesendet wird.
    - `no-referrer-when-downgrade` bedeutet, dass kein {{HTTPHeader("Referer")}}-Header gesendet wird, wenn zu einem Ursprung ohne TLS (HTTPS) navigiert wird.
      Dies ist das Standardverhalten des Benutzeragenten, wenn keine andere Richtlinie angegeben ist.
    - `origin` bedeutet, dass der Referrer der Ursprung der Seite sein wird, was ungefähr dem Schema, dem Host und dem Port entspricht.
    - `origin-when-cross-origin` bedeutet, dass das Navigieren zu anderen Ursprüngen auf das Schema, den Host und den Port beschränkt wird, während das Navigieren im gleichen Ursprung den Pfad des Referrers einschließt.
    - `unsafe-url` bedeutet, dass der Referrer den Ursprung und den Pfad einschließlich (jedoch ohne Fragment, Passwort oder Benutzernamen) einschließt.
      Dieser Fall ist unsicher, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge lecken kann.

- [`rel`](/de/docs/Web/HTML/Attributes/rel)
  - : Dieses Attribut benennt eine Beziehung des verlinkten Dokuments zum aktuellen Dokument. Das Attribut muss eine durch Leerzeichen getrennte Liste von [Linktypen](/de/docs/Web/HTML/Attributes/rel) sein.
- `sizes`

  - : Dieses Attribut definiert die Größen der Icons für visuelle Medien, die in der Ressource enthalten sind.
    Es muss nur dann vorhanden sein, wenn das [`rel`](#rel) einen Wert von `icon` oder einen nicht standardmäßigen Typ wie Apples `apple-touch-icon` enthält.
    Es darf die folgenden Werte haben:

    - `any`, was bedeutet, dass das Icon auf jede Größe skaliert werden kann, da es ein Vektorformat ist wie `image/svg+xml`.
    - eine durch Leerzeichen getrennte Liste von Größen, jede im Format `<Breite in Pixel>x<Höhe in Pixel>` oder `<Breite in Pixel>X<Höhe in Pixel>`. Jede dieser Größen muss in der Ressource enthalten sein.

    > [!NOTE]
    > Die meisten Icon-Formate können nur ein einziges Icon speichern; daher enthält das [`sizes`](#sizes)-Attribut meist nur einen Eintrag.
    > Microsofts ICO-Format und Apples ICNS-Format können mehrere Icon-Größen in einer einzigen Datei speichern. ICO hat eine bessere Browser-Unterstützung, daher sollten Sie dieses Format verwenden, wenn die plattformübergreifende Unterstützung ein Anliegen ist.

- `title`
  - : Das `title`-Attribut hat besondere Semantik auf dem `<link>`-Element.
    Wenn es bei einem `<link rel="stylesheet">` verwendet wird, definiert es ein [Standard- oder ein alternatives Stylesheet](/de/docs/Web/CSS/Alternative_style_sheets).
- `type`
  - : Dieses Attribut wird verwendet, um den Typ des verlinkten Inhalts zu definieren.
    Der Wert des Attributs sollte ein MIME-Typ wie **text/html**, **text/css** usw. sein.
    Der allgemeine Gebrauch dieses Attributs besteht darin, den Typ des Referenz-Stylesheets zu definieren (wie **text/css**), aber da CSS die einzige Stylesheet-Sprache ist, die im Web verwendet wird, ist es nicht nur möglich, das `type`-Attribut zu weglassen, sondern es wird tatsächlich empfohlen, dies zu tun.
    Es wird auch bei `rel="preload"` Linktypen verwendet, um sicherzustellen, dass der Browser nur Dateitypen herunterlädt, die er unterstützt.

### Nicht-standardmäßige Attribute

- `target` {{Deprecated_Inline}}
  - : Definiert den Rahmen oder Fensternamen, der die definierte Linkbeziehung hat oder die Wiedergabe einer verknüpften Ressource anzeigen wird.

### Veraltete Attribute

- `charset` {{deprecated_inline}}

  - : Dieses Attribut definiert die Zeichenkodierung der verlinkten Ressource.
    Der Wert ist eine durch Leerzeichen und/oder Kommas getrennte Liste von Zeichensätzen wie in {{rfc(2045)}} definiert.
    Der Standardwert ist `iso-8859-1`.

    > [!NOTE]
    > Um denselben Effekt wie dieses veraltete Attribut zu erzielen, verwenden Sie den {{HTTPHeader("Content-Type")}} HTTP-Header auf der verknüpften Ressource.

- `rev` {{deprecated_inline}}

  - : Der Wert dieses Attributs zeigt die Beziehung des aktuellen Dokuments zum verlinkten Dokument an, wie durch das [`href`](#href) Attribut definiert.
    Das Attribut definiert somit die umgekehrte Beziehung im Vergleich zum Wert des `rel`-Attributs.
    [Linktypen](/de/docs/Web/HTML/Attributes/rel) für das Attribut sind ähnlich zu den möglichen Werten für [`rel`](#rel).

    > [!NOTE]
    > Anstelle von `rev` sollten Sie das [`rel`](#rel)-Attribut mit dem entgegengesetzten [Linktypen](/de/docs/Web/HTML/Attributes/rel) verwenden.
    > Zum Beispiel, um die umgekehrte Verknüpfung für `made` herzustellen, geben Sie `author` an. Außerdem steht dieses Attribut nicht für "Revision" und darf nicht mit einer Versionsnummer verwendet werden, auch wenn viele Webseiten dies in dieser Weise missbrauchen.

## Beispiele

### Einbinden eines Stylesheets

Um ein Stylesheet in eine Seite einzubinden, verwenden Sie folgende Syntax:

```html
<link href="style.css" rel="stylesheet" />
```

### Bereitstellung alternativer Stylesheets

Sie können auch [alternative Stylesheets](/de/docs/Web/CSS/Alternative_style_sheets) angeben.

Der Benutzer kann wählen, welches Stylesheet verwendet werden soll, indem er es aus dem Menü **Ansicht > Seitenstil** auswählt. Dies bietet eine Möglichkeit für Benutzer, mehrere Versionen einer Seite zu betrachten.

```html
<link href="default.css" rel="stylesheet" title="Default Style" />
<link href="fancy.css" rel="alternate stylesheet" title="Fancy" />
<link href="basic.css" rel="alternate stylesheet" title="Basic" />
```

### Bereitstellung von Icons für verschiedene Nutzungskontexte

Sie können Links zu mehreren Icons auf derselben Seite einfügen, und der Browser wählt aus, welches am besten für den jeweiligen Kontext geeignet ist, indem `rel`- und `sizes`-Werte als Hinweise verwendet werden.

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

Für Informationen darüber, welche `sizes` Sie für Apple-Icons wählen sollten, siehe [Apples Dokumentation zur Konfiguration von Webanwendungen](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW4) und die referenzierten [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/app-icons#App-icon-sizes). In der Regel reicht es aus, ein großes Bild, wie 192x192, bereitzustellen und den Browser es bei Bedarf herunterzuskalieren zu lassen, aber Sie möchten möglicherweise Bilder mit unterschiedlichen Detailstufen für verschiedene Größen bereitstellen, wie es die Apple Designrichtlinie empfiehlt. Das Bereitstellen von kleineren Icons für niedrigere Auflösungen spart auch Bandbreite.

Es kann nicht notwendig sein, `<link>`-Elemente überhaupt bereitzustellen. Zum Beispiel fordern Browser automatisch `/favicon.ico` vom Root einer Seite an, und Apple fordert ebenfalls automatisch `/apple-touch-icon-[size].png`, `/apple-touch-icon.png` usw. an. Das Bereitstellen expliziter Links schützt jedoch gegen Änderungen dieser Konventionen.

### Bedingtes Laden von Ressourcen mit Medienqueries

Sie können einen Medientyp oder eine Abfrage innerhalb eines `media`-Attributs angeben; diese Ressource wird dann nur geladen, wenn die Medienbedingung zutrifft. Zum Beispiel:

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

Sie können feststellen, wann ein Stylesheet geladen wurde, indem Sie warten, dass ein `load`-Ereignis darauf ausgelöst wird; ähnlich können Sie feststellen, ob ein Fehler beim Verarbeiten eines Stylesheets aufgetreten ist, indem Sie auf ein `error`-Ereignis achten:

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
> Das `load`-Ereignis wird ausgelöst, sobald das Stylesheet und alle seine importierten Inhalte geladen und analysiert wurden, und unmittelbar bevor die Styles auf den Inhalt angewendet werden.

### Preload-Beispiele

Sie finden eine Reihe von `<link rel="preload">` Beispielen in [Inhalt vorladen mit `rel="preload"`](/de/docs/Web/HTML/Attributes/rel/preload).

### Blockieren des Renderings, bis eine Ressource abgerufen wurde

Sie können einen `render`-Token innerhalb eines `blocking`-Attributs einschließen; das Rendering der Seite wird blockiert, bis die Ressource abgerufen wird. Zum Beispiel:

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
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">fließender Inhalt</a> und
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Teilinhalte</a>.
      </td>
    </tr>
    <tr>
      <th>Erlaubter Inhalt</th>
      <td>Keiner; es ist ein [void-Element](/de/docs/Glossary/void_element).</td>
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
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Teilinhalten</a> akzeptiert.
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
