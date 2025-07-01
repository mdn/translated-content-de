---
title: "<link>: Das External Resource Link-Element"
slug: Web/HTML/Reference/Elements/link
l10n:
  sourceCommit: 63cbf204323f117a2a80c7aa6273e50253ab9d07
---

{{HTMLSidebar}}

Das **`<link>`** [HTML](/de/docs/Web/HTML)-Element spezifiziert Beziehungen zwischen dem aktuellen Dokument und einer externen Ressource.
Dieses Element wird am häufigsten verwendet, um auf {{Glossary("CSS", "Stylesheets")}} zu verlinken, es wird aber auch verwendet, um Site-Icons (sowohl "Favicon"-Stil-Icons als auch Icons für den Startbildschirm und Apps auf mobilen Geräten) sowie andere Dinge zu etablieren.

{{InteractiveExample("HTML Demo: &lt;link&gt;", "tabbed-shorter")}}

```html interactive-example
<link href="/shared-assets/misc/link-element-example.css" rel="stylesheet" />

<p>This text will be red as defined in the external stylesheet.</p>
<p style="color: blue">
  The <code>style</code> attribute can override it, though.
</p>
```

Um ein externes Stylesheet zu verlinken, fügen Sie ein `<link>`-Element in Ihren {{HTMLElement("head")}} ein, zum Beispiel so:

```html
<link href="main.css" rel="stylesheet" />
```

Dieses Beispiel gibt den Pfad zum Stylesheet im `href`-Attribut an und ein [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)-Attribut mit dem Wert `stylesheet`. Das `rel` steht für "relationship" (Beziehung) und ist eines der Schlüsselmerkmale des `<link>`-Elements – der Wert gibt an, wie der verlinkte Gegenstand mit dem Dokument in Verbindung steht.

Es gibt eine Anzahl weiterer weit verbreiteter Typen, auf die Sie stoßen werden. Zum Beispiel ein Link zum Favicon der Seite:

```html
<link rel="icon" href="favicon.ico" />
```

Es gibt mehrere weitere `rel`-Werte für Icons, die hauptsächlich verwendet werden, um spezielle Icon-Typen für den Einsatz auf verschiedenen mobilen Plattformen anzuzeigen, z. B.:

```html
<link
  rel="apple-touch-icon"
  sizes="114x114"
  href="apple-icon-114.png"
  type="image/png" />
```

Das `sizes`-Attribut gibt die Icon-Größe an, während das `type`-Attribut den MIME-Typ der verlinkten Ressource enthält.
Diese dienen als nützliche Hinweise, damit der Browser das am besten geeignete Icon auswählen kann.

Sie können auch einen Medientyp oder eine Abfrage in einem `media`-Attribut angeben; diese Ressource wird dann nur geladen, wenn die Medienbedingung gilt. Zum Beispiel:

```html
<link href="print.css" rel="stylesheet" media="print" />
<link href="mobile.css" rel="stylesheet" media="screen and (width <= 600px)" />
```

Einige interessante neue Leistungs- und Sicherheitsfunktionen wurden ebenfalls dem `<link>`-Element hinzugefügt. Zum Beispiel:

```html
<link
  rel="preload"
  href="myFont.woff2"
  as="font"
  type="font/woff2"
  crossorigin="anonymous" />
```

Ein `rel`-Wert von `preload` gibt an, dass der Browser diese Ressource vorgeladen soll (siehe [`rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload) für mehr Details), wobei das `as`-Attribut die spezielle Klasse der erfassten Inhalte anzeigt.
Das `crossorigin`-Attribut gibt an, ob die Ressource mit einer {{Glossary("CORS", "CORS")}}-Anfrage abgerufen werden soll.

Weitere Nutzungshinweise:

- Ein `<link>`-Element kann entweder im {{HTMLElement("head")}} oder im {{HTMLElement("body")}}-Element vorkommen, je nachdem, ob es einen [Link-Typ](https://html.spec.whatwg.org/multipage/links.html#body-ok) enthält, der **body-ok** ist.
  Zum Beispiel ist der `stylesheet`-Link-Typ body-ok, und deshalb ist `<link rel="stylesheet">` im Body erlaubt.
  Dies ist jedoch keine gute Praxis; es ist sinnvoller, Ihre `<link>`-Elemente von Ihrem Body-Inhalt zu trennen und sie in den `<head>` zu setzen.
- Wenn Sie `<link>` verwenden, um ein Favicon für eine Seite zu erstellen, und Ihre Seite eine Content Security Policy (CSP) zur Verbesserung ihrer Sicherheit verwendet, gilt die Richtlinie auch für das Favicon.
  Wenn Sie Probleme beim Laden des Favicons haben, überprüfen Sie, ob die {{HTTPHeader("Content-Security-Policy")}}-Header- [`img-src` directive](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/img-src) den Zugriff nicht verhindert.
- Die HTML- und XHTML-Spezifikationen definieren Ereignishandler für das `<link>`-Element, aber es ist unklar, wie sie verwendet werden würden.
- Unter XHTML 1.0 benötigen {{Glossary("void_element", "void elements")}} wie `<link>` einen abschließenden Schrägstrich: `<link />`.
- WebTV unterstützt die Verwendung des Werts `next` für `rel`, um die nächste Seite in einer Dokumentserie vorzuladen.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `as`
  - : Dieses Attribut ist erforderlich, wenn [`rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload) am `<link>`-Element gesetzt wurde, optional, wenn [`rel="modulepreload"`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload) gesetzt wurde, und sollte ansonsten nicht verwendet werden.
    Es spezifiziert den Typ des Inhalts, der durch `<link>` geladen wird, was für die Anforderungszuordnung, die Anwendung der richtigen [Content-Security-Policy](/de/docs/Web/HTTP/Guides/CSP) und das Setzen des richtigen {{HTTPHeader("Accept")}}-Request-Headers notwendig ist.

    Darüber hinaus verwendet `rel="preload"` dies als Signal für die Priorisierung von Anfragen.
    In der folgenden Tabelle sind die gültigen Werte für dieses Attribut und die Elemente oder Ressourcen, auf die sie zutreffen, aufgelistet.

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
                <code>&#x3C;link></code> das crossorigin-Attribut enthält, siehe <a href="/de/docs/Web/HTML/Reference/Attributes/rel/preload#cors-enabled_fetches">CORS-aktivierte Abrufe</a>.
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
                <code>&#x3C;link></code> das crossorigin-Attribut enthält, siehe <a href="/de/docs/Web/HTML/Reference/Attributes/rel/preload#cors-enabled_fetches">CORS-aktivierte Abrufe</a>.
              </p>
            </div>
          </td>
        </tr>
        <tr>
          <td>image</td>
          <td>
            <code>&#x3C;img></code>- und <code>&#x3C;picture></code>-Elemente mit
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
  - : Dieses Attribut zeigt ausdrücklich an, dass bestimmte Operationen auf das Abrufen einer externen Ressource blockiert werden sollen. Es darf nur verwendet werden, wenn das `rel`-Attribut `expect` oder `stylesheet`-Schlüsselwörter enthält. Die zu blockierenden Operationen müssen eine durch Leerzeichen getrennte Liste von unten aufgeführten Blockiertokens sein.
    - `render`: Die Wiedergabe des Inhalts auf dem Bildschirm wird blockiert.

- [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)
  - : Dieses {{Glossary("Enumerated", "enumerierte")}} Attribut zeigt an, ob {{Glossary("CORS", "CORS")}} bei der Anforderung der Ressource verwendet werden muss.
    [CORS-fähige Bilder](/de/docs/Web/HTML/How_to/CORS_enabled_image) können im {{HTMLElement("canvas")}}-Element wiederverwendet werden, ohne dass es _berührt_ wird.
    Die erlaubten Werte sind:
    - `anonymous`
      - : Eine Cross-Origin-Anfrage (d.h. mit einem {{HTTPHeader("Origin")}} HTTP-Header) wird ausgeführt, aber keine Anmeldeinformation wird gesendet (d.h. kein Cookie, X.509-Zertifikat oder HTTP-Basic-Authentifizierung).
        Wenn der Server dem Ursprungsort keine Anmeldeinformationen gibt (indem er den {{HTTPHeader("Access-Control-Allow-Origin")}} HTTP-Header nicht setzt), wird die Ressource manipuliert und ihre Nutzung eingeschränkt.
    - `use-credentials`
      - : Eine Cross-Origin-Anfrage (d.h. mit einem `Origin` HTTP-Header) wird zusammen mit einer gesendeten Anmeldeinformation ausgeführt (d.h. ein Cookie, Zertifikat und/oder HTTP-Basic-Authentifizierung wird durchgeführt).
        Wenn der Server dem Ursprungsort keine Anmeldeinformationen gibt (durch den {{HTTPHeader("Access-Control-Allow-Credentials")}} HTTP-Header), wird die Ressource _manipuliert_ und ihre Nutzung eingeschränkt.

    Wenn das Attribut nicht vorhanden ist, wird die Ressource ohne eine {{Glossary("CORS", "CORS")}}-Anfrage abgerufen (d.h. ohne Senden des `Origin` HTTP-Headers), wodurch ihre unberührte Nutzung verhindert wird. Wenn ungültig, wird es so behandelt, als ob das enumerierte Schlüsselwort **anonymous** verwendet wurde.
    Weitere Informationen finden Sie unter [CORS settings attributes](/de/docs/Web/HTML/Reference/Attributes/crossorigin).

- `disabled`
  - : Nur für `rel="stylesheet"`, das `disabled` Boolean-Attribut zeigt an, ob das beschriebene Stylesheet geladen und auf das Dokument angewendet werden soll.
    Wenn `disabled` im HTML spezifiziert ist, wenn es geladen wird, wird das Stylesheet nicht während des Seitenladens geladen.
    Stattdessen wird das Stylesheet nur auf Abruf geladen, wenn und wann das `disabled`-Attribut auf `false` geändert oder entfernt wird.

    Das Setzen der `disabled` Eigenschaft im DOM verursacht, dass das Stylesheet aus der [`Document.styleSheets`](/de/docs/Web/API/Document/styleSheets) Liste des Dokuments entfernt wird.

- `fetchpriority`
  - : Gibt einen Hinweis auf die relative Priorität an, die beim Abrufen einer Ressource eines bestimmten Typs verwendet werden soll.
    Erlaubte Werte:
    - `high`
      - : Die Ressource mit hoher Priorität relativ zu anderen Ressourcen des gleichen Typs abrufen.
    - `low`
      - : Die Ressource mit niedriger Priorität relativ zu anderen Ressourcen des gleichen Typs abrufen.
    - `auto`
      - : Keine Präferenz für die Abrufpriorität festlegen.
        Dies ist der Standard.
        Es wird verwendet, wenn kein Wert oder ein ungültiger Wert festgelegt ist.

    Siehe [`HTMLLinkElement.fetchPriority`](/de/docs/Web/API/HTMLLinkElement/fetchPriority) für weitere Informationen.

- `href`
  - : Dieses Attribut spezifiziert die {{Glossary("URL", "URL")}} der verlinkten Ressource. Eine URL kann absolut oder relativ sein.
- `hreflang`
  - : Dieses Attribut gibt die Sprache der verlinkten Ressource an.
    Es ist rein beratend.
    Erlaubte Werte werden von {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}} spezifiziert.
    Verwenden Sie dieses Attribut nur, wenn das [`href`](/de/docs/Web/HTML/Reference/Elements/a#href)-Attribut vorhanden ist.
- `imagesizes`
  - : Nur für `rel="preload"` und `as="image"`, das `imagesizes`-Attribut hat eine ähnliche Syntax und Semantik wie das [`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes)-Attribut, das anzeigt, dass die entsprechende Ressource vorab geladen werden soll, die von einem `img`-Element mit entsprechenden Werten für seine `srcset`- und `sizes`-Attribute verwendet wird.
- `imagesrcset`
  - : Nur für `rel="preload"` und `as="image"`, das `imagesrcset`-Attribut hat eine ähnliche Syntax und Semantik wie das [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset)-Attribut, das anzeigt, dass die entsprechende Ressource vorab geladen werden soll, die von einem `img`-Element mit entsprechenden Werten für seine `srcset`- und `sizes`-Attribute verwendet wird.
- `integrity`
  - : Enthält Inline-Metadaten – ein Base64-kodierter kryptographischer Hash der Ressource (Datei), die Sie den Browser holen lassen.
    Der Browser kann dies verwenden, um zu überprüfen, dass die abgerufene Ressource ohne unerwartete Manipulation geliefert wurde.
    Das Attribut darf nur spezifiziert werden, wenn das `rel`-Attribut auf `stylesheet`, `preload` oder `modulepreload` festgelegt ist.
    Siehe [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity).
- `media`
  - : Dieses Attribut spezifiziert die Medien, auf die die verlinkte Ressource angewendet wird. Der Wert muss ein Medientyp / [Media Query](/de/docs/Web/CSS/CSS_media_queries) sein.
    Dieses Attribut ist hauptsächlich nützlich, wenn externe Stylesheets verlinkt werden – es erlaubt dem User Agent das am besten geeignete für das Gerät, auf dem es läuft, auszuwählen.

- `referrerpolicy`
  - : Ein String, der angibt, welchen Referrer zum Abrufen der Ressource verwendet werden soll:
    - `no-referrer` bedeutet, dass der {{HTTPHeader("Referer")}}-Header nicht gesendet wird.
    - `no-referrer-when-downgrade` bedeutet, dass kein {{HTTPHeader("Referer")}}-Header gesendet wird, wenn zu einem Ursprung ohne TLS (HTTPS) navigiert wird.
      Dies ist das Standardverhalten des Benutzeragenten, wenn keine andere Richtlinie spezifiziert ist.
    - `origin` bedeutet, dass der Referrer der Ursprung der Seite sein wird, was grob das Schema, der Host und der Port ist.
    - `origin-when-cross-origin` bedeutet, dass beim Navigieren zu anderen Ursprüngen auf das Schema, den Host und den Port beschränkt wird, während beim Navigieren im gleichen Ursprung der Pfad des Referrers enthalten ist.
    - `unsafe-url` bedeutet, dass der Referrer den Ursprung und den Pfad enthalten wird (aber nicht das Fragment, Passwort oder den Benutzernamen).
      Dieser Fall ist unsicher, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge leaken kann.

- [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)
  - : Dieses Attribut benennt eine Beziehung des verlinkten Dokuments zum aktuellen Dokument. Das Attribut muss eine durch Leerzeichen getrennte Liste von [Link-Typ-Werten](/de/docs/Web/HTML/Reference/Attributes/rel) sein.
- `sizes`
  - : Dieses Attribut definiert die Größen der Icons für visuelle Medien, die in der Ressource enthalten sind.
    Es muss nur vorhanden sein, wenn das [`rel`](#rel) einen Wert von `icon` oder einen nicht standardmäßigen Typ wie Apples `apple-touch-icon` enthält.
    Es kann die folgenden Werte haben:
    - `any`, was bedeutet, dass das Icon auf jede Größe skaliert werden kann, da es in einem Vektorformat wie `image/svg+xml` vorliegt.
    - eine durch Leerzeichen getrennte Liste von Größen, jeweils im Format `<width in pixels>x<height in pixels>` oder `<width in pixels>X<height in pixels>`. Jede dieser Größen muss in der Ressource enthalten sein.

    > [!NOTE]
    > Die meisten Icon-Formate können nur ein einzelnes Icon speichern; daher enthält das [`sizes`](#sizes)-Attribut meistens nur einen Eintrag.
    > Microsofts ICO-Format und Apples ICNS-Format können mehrere Icon-Größen in einer einzigen Datei speichern. ICO hat eine bessere Browser-Unterstützung, daher sollten Sie dieses Format verwenden, wenn plattformübergreifende Unterstützung ein Anliegen ist.

- `title`
  - : Das `title`-Attribut hat spezielle Semantik im `<link>`-Element.
    Wenn es auf einem `<link rel="stylesheet">` verwendet wird, definiert es ein [Standard- oder ein alternatives Stylesheet](/de/docs/Web/HTML/Reference/Attributes/rel/alternate_stylesheet).
- `type`
  - : Dieses Attribut wird verwendet, um den Typ des verlinkten Inhalts zu definieren.
    Der Wert des Attributs sollte ein MIME-Typ wie **text/html**, **text/css** usw. sein.
    Die häufige Verwendung dieses Attributs ist, den Typ des referenzierten Stylesheets zu definieren (wie **text/css**), aber da CSS das einzige Stylesheet-Format ist, das im Web verwendet wird, ist es nicht nur möglich, das `type`-Attribut wegzulassen, sondern tatsächlich wird dies nun empfohlen.
    Es wird auch bei `rel="preload"`-Link-Typen verwendet, um sicherzustellen, dass der Browser nur die Dateitypen herunterlädt, die er unterstützt.

### Nicht-standardmäßige Attribute

- `target` {{Deprecated_Inline}}
  - : Definiert den Frame oder Fensternamen, der die definierte Verknüpfungsbeziehung hat oder die Darstellung der verlinkten Ressource anzeigt.

### Veraltete Attribute

- `charset` {{deprecated_inline}}
  - : Dieses Attribut definiert die Zeichencodierung der verlinkten Ressource.
    Der Wert ist eine durch Leerzeichen und/oder Kommas begrenzte Liste von Zeichensätzen, wie sie in {{rfc(2045)}} definiert sind.
    Der Standardwert ist `iso-8859-1`.

    > [!NOTE]
    > Um den gleichen Effekt wie dieses veraltete Attribut zu erzielen, verwenden Sie den {{HTTPHeader("Content-Type")}} HTTP-Header auf der verlinkten Ressource.

- `rev` {{deprecated_inline}}
  - : Der Wert dieses Attributs zeigt die Beziehung des aktuellen Dokuments zum verlinkten Dokument, wenn dies durch das [`href`](#href)-Attribut definiert ist.
    Das Attribut definiert somit die umgekehrte Beziehung im Vergleich zum Wert des `rel`-Attributs.
    [Link-Typ-Werte](/de/docs/Web/HTML/Reference/Attributes/rel) für das Attribut sind ähnlich zu den möglichen Werten für [`rel`](#rel).

    > [!NOTE]
    > Anstatt `rev` zu verwenden, sollten Sie das [`rel`](#rel)-Attribut mit dem entgegengesetzten [Link-Typ-Wert](/de/docs/Web/HTML/Reference/Attributes/rel) nutzen.
    > Beispielsweise um den umgekehrten Link für `made` zu etablieren, geben Sie `author` an. Außerdem steht dieses Attribut nicht für "Revision" und darf nicht mit einer Versionsnummer verwendet werden, auch wenn viele Websites es auf diese Weise falsch verwenden.

## Beispiele

### Ein Stylesheet einbinden

Um ein Stylesheet in eine Seite einzubinden, verwenden Sie die folgende Syntax:

```html
<link href="style.css" rel="stylesheet" />
```

### Alternative Stylesheets bereitstellen

Sie können auch [alternative Stylesheets](/de/docs/Web/HTML/Reference/Attributes/rel/alternate_stylesheet) angeben.

Der Benutzer kann wählen, welches Stylesheet er verwenden möchte, indem er es aus dem **Ansicht > Seitenstil**-Menü auswählt.
Dies bietet eine Methode für Benutzer, mehrere Versionen einer Seite anzuzeigen.

```html
<link href="default.css" rel="stylesheet" title="Default Style" />
<link href="fancy.css" rel="alternate stylesheet" title="Fancy" />
<link href="basic.css" rel="alternate stylesheet" title="Basic" />
```

### Icons für verschiedene Nutzungskontexte bereitstellen

Sie können Links zu mehreren Icons auf derselben Seite einfügen, und der Browser wird anhand der `rel` und `sizes` Werte als Hinweise entscheiden, welches am besten für seinen speziellen Kontext geeignet ist.

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

Informationen dazu, welche `sizes` Sie für Apple-Icons wählen sollten, finden Sie in [Apple's Dokumentation zur Konfiguration von Webanwendungen](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW4) und den referenzierten [Apple-Anwendungsrichtlinien für Menschliche Schnittstellen](https://developer.apple.com/design/human-interface-guidelines/app-icons#App-icon-sizes). In der Regel reicht es aus, ein großes Bild, wie zum Beispiel 192x192, bereitzustellen und den Browser es nach Bedarf verkleinern zu lassen, aber Sie sollten eventuell Bilder mit unterschiedlichen Detailniveaus für verschiedene Größen bereitstellen, wie es die Apple-Designrichtlinie empfiehlt. Kleinere Icons für niedrigere Auflösungen bereitzustellen spart außerdem Bandbreite.

Es ist möglicherweise nicht notwendig, überhaupt `<link>`-Elemente bereitzustellen. Beispielsweise fordern Browser automatisch `/favicon.ico` vom Wurzelverzeichnis einer Website an, und Apple fordert ebenfalls automatisch `/apple-touch-icon-[size].png`, `/apple-touch-icon.png` etc. an. Das explizite Bereitstellen von Links schützt jedoch vor Änderungen dieser Konventionen.

### Ressourcen bedingt mit Media Queries laden

Sie können einen Medientyp oder eine Abfrage innerhalb eines `media`-Attributs angeben;
diese Ressource wird dann nur geladen, wenn die Medienbedingung erfüllt ist. Beispielsweise:

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

Sie können erkennen, wann ein Stylesheet geladen wurde, indem Sie auf ein `load`-Ereignis warten; ähnlich können Sie erkennen, ob ein Fehler beim Verarbeiten eines Stylesheets aufgetreten ist, indem Sie auf ein `error`-Ereignis achten:

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
> Das `load`-Ereignis wird ausgelöst, sobald das Stylesheet und sein gesamter importierter Inhalt geladen und geparst wurde, und unmittelbar bevor die Styles auf den Inhalt angewendet werden.

### Preload-Beispiele

Sie finden eine Reihe von `<link rel="preload">`-Beispielen in [Inhalte mit `rel="preload"` vorladen](/de/docs/Web/HTML/Reference/Attributes/rel/preload).

### Rendering blockieren, bis eine Ressource abgerufen ist

Sie können das `render`-Token innerhalb eines `blocking`-Attributs einfügen;
das Rendern der Seite wird blockiert, bis die Ressource abgerufen ist. Zum Beispiel:

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">formulierender Inhalt</a>.
      </td>
    </tr>
    <tr>
      <th>Erlaubter Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "void element")}}.</td>
    </tr>
    <tr>
      <th>Tag-Auslassung</th>
      <td>Muss ein Starttag haben und darf keinen End-Tag haben.</td>
    </tr>
    <tr>
      <th>Erlaubte Eltern</th>
      <td>
        Jedes Element, das Metadatenelemente akzeptiert.
        Wenn <a href="/de/docs/Web/HTML/Reference/Global_attributes/itemprop">itemprop</a> vorhanden ist: jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">formulierender Inhalt</a> akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/link_role"><code>link</code></a> mit <code>href</code>-Attribut</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Kein <code>role</code> erlaubt</td>
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
