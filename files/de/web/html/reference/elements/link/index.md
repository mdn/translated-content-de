---
title: "<link>: Das Link-Element für externe Ressourcen"
slug: Web/HTML/Reference/Elements/link
l10n:
  sourceCommit: bab2096ad7ce587aa6a32f6f962b78225ce318f8
---

Das **`<link>`** [HTML](/de/docs/Web/HTML) Element spezifiziert Beziehungen zwischen dem aktuellen Dokument und einer externen Ressource. Dieses Element wird am häufigsten verwendet, um auf {{Glossary("CSS", "Stylesheets")}} zu verlinken, es wird jedoch auch genutzt, um Website-Icons festzulegen (sowohl "Favicon"-Stil-Icons als auch Icons für den Startbildschirm und Apps auf mobilen Geräten), unter anderem.

{{InteractiveExample("HTML Demo: &lt;link&gt;", "tabbed-shorter")}}

```html interactive-example
<link href="/shared-assets/misc/link-element-example.css" rel="stylesheet" />

<p>This text will be red as defined in the external stylesheet.</p>
<p style="color: blue">
  The <code>style</code> attribute can override it, though.
</p>
```

Um ein externes Stylesheet zu verlinken, fügen Sie ein `<link>` Element innerhalb Ihres {{HTMLElement("head")}} wie folgt ein:

```html
<link href="main.css" rel="stylesheet" />
```

Dieses Beispiel bietet den Pfad zum Stylesheet in einem `href` Attribut und einem [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel) Attribut mit dem Wert `stylesheet`. Das `rel` steht für "relationship" (Beziehung) und ist eines der Schlüsselelemente des `<link>` Elements — der Wert gibt an, wie das verlinkte Element mit dem enthaltenen Dokument in Beziehung steht.

Es gibt eine Reihe anderer gängiger Typen, denen Sie begegnen werden. Zum Beispiel ein Link zum Favicon der Seite:

```html
<link rel="icon" href="favicon.ico" />
```

Es gibt eine Reihe weiterer `rel` Werte für Icons, die hauptsächlich zur Angabe spezieller Icon-Typen für die Nutzung auf verschiedenen mobilen Plattformen verwendet werden, z.B.:

```html
<link
  rel="apple-touch-icon"
  sizes="114x114"
  href="apple-icon-114.png"
  type="image/png" />
```

Das `sizes` Attribut gibt die Größe des Icons an, während `type` den MIME-Typ der verlinkten Ressource enthält. Diese bieten nützliche Hinweise, damit der Browser das am besten geeignete verfügbare Icon auswählen kann.

Sie können auch einen Medientyp oder eine Mediensuche in einem `media` Attribut angeben; diese Ressource wird dann nur geladen, wenn die Medienbedingung zutrifft. Zum Beispiel:

```html
<link href="print.css" rel="stylesheet" media="print" />
<link href="mobile.css" rel="stylesheet" media="screen and (width <= 600px)" />
```

Einige interessante neue Leistungs- und Sicherheitsfeatures wurden auch dem `<link>` Element hinzugefügt. Nehmen Sie dieses Beispiel:

```html
<link
  rel="preload"
  href="myFont.woff2"
  as="font"
  type="font/woff2"
  crossorigin="anonymous" />
```

Ein `rel` Wert von `preload` zeigt an, dass der Browser diese Ressource vorladen soll (siehe [`rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload) für weitere Informationen), mit dem `as` Attribut, das die spezifische Klasse des abgerufenen Inhalts angibt. Das `crossorigin` Attribut gibt an, ob die Ressource mit einer {{Glossary("CORS", "CORS")}} Anfrage abgerufen werden soll.

Weitere Hinweise zur Verwendung:

- Ein `<link>` Element kann entweder im {{HTMLElement("head")}} oder im {{HTMLElement("body")}} Element vorkommen, abhängig davon, ob es einen [Link-Typ](https://html.spec.whatwg.org/multipage/links.html#body-ok) hat, der **body-ok** ist. Zum Beispiel ist der `stylesheet` Link-Typ body-ok, und daher ist `<link rel="stylesheet">` im Body erlaubt. Dies ist jedoch keine gute Praxis; es ist sinnvoller, Ihre `<link>` Elemente von Ihrem Body-Inhalt zu trennen und sie in den `<head>` zu setzen.
- Beim Einsatz von `<link>`, um ein Favicon für eine Seite zu etablieren, und Ihre Seite verwendet eine Content Security Policy (CSP), um ihre Sicherheit zu erhöhen, gilt die Richtlinie für das Favicon. Wenn Sie Probleme damit haben, dass das Favicon nicht geladen wird, überprüfen Sie, ob die {{HTTPHeader("Content-Security-Policy")}} Header [`img-src` Richtlinie](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/img-src) den Zugriff darauf nicht verhindert.
- Die HTML und XHTML Spezifikationen definieren Ereignishandler für das `<link>` Element, aber es ist unklar, wie sie verwendet werden würden.
- Unter XHTML 1.0 erfordern {{Glossary("void_element", "leere Elemente")}} wie `<link>` einen abschließenden Schrägstrich: `<link />`.
- WebTV unterstützt die Nutzung des Werts `next` für `rel`, um die nächste Seite in einer Dokumentreihe vorzuladen.

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `as`
  - : Dieses Attribut ist erforderlich, wenn [`rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload) auf dem `<link>` Element gesetzt wurde, optional, wenn [`rel="modulepreload"`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload) gesetzt wurde, und sollte ansonsten nicht verwendet werden. Es spezifiziert den Typ des Inhalts, der durch das `<link>` geladen wird, was notwendig ist für Request-Abgleich, Anwendung der korrekten [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) und Einstellen des korrekten {{HTTPHeader("Accept")}} Anfrage-Headers.

    Des Weiteren nutzt `rel="preload"` dieses als Signal zur Priorisierung der Anfrage. Die folgende Tabelle listet die gültigen Werte für dieses Attribut und die Elemente oder Ressourcen, auf die sie angewendet werden, auf.

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
                <strong>Hinweis:</strong> Dieser Wert erfordert ebenfalls,
                dass <code>&#x3C;link></code> das crossorigin Attribut enthält, siehe <a href="/de/docs/Web/HTML/Reference/Attributes/rel/preload#cors-enabled_fetches">CORS-fähige Abrufe</a>.
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
                <strong>Hinweis:</strong> Dieser Wert erfordert ebenfalls,
                dass <code>&#x3C;link></code> das crossorigin Attribut enthält, siehe <a href="/de/docs/Web/HTML/Reference/Attributes/rel/preload#cors-enabled_fetches">CORS-fähige Abrufe</a>.
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
  - : Dieses Attribut zeigt explizit an, dass bestimmte Operationen blockiert werden sollten, bis spezifische Bedingungen erfüllt sind. Es darf nur verwendet werden, wenn das `rel` Attribut die Schlüsselwörter `expect` oder `stylesheet` enthält. Mit [`rel="expect"`](/de/docs/Web/HTML/Reference/Attributes/rel#expect) zeigt es an, dass Operationen blockiert werden sollten, bis ein bestimmter DOM-Knoten geparst wurde. Mit [`rel="stylesheet"`](/de/docs/Web/HTML/Reference/Attributes/rel#stylesheet) zeigt es an, dass Operationen blockiert werden sollten, bis ein externes Stylesheet und seine kritischen Teilressourcen abgerufen und auf das Dokument angewendet wurden. Die Operationen, die blockiert werden sollen, müssen eine durch Leerzeichen getrennte Liste von Blockierungs-Tokens aus der folgenden Liste enthalten. Derzeit gibt es nur ein Token:
    - `render`: Das Rendering des Inhalts auf dem Bildschirm wird blockiert.

    > [!NOTE]
    > Nur `link` Elemente im `<head>` des Dokuments können möglicherweise das Rendering blockieren. Standardmäßig blockiert ein `link` Element mit `rel="stylesheet"` im `<head>` das Rendering, wenn der Browser es während des Parsens entdeckt. Wenn ein solches `link` Element dynamisch über ein Skript hinzugefügt wird, müssen Sie zusätzlich `blocking = "render"` setzen, damit es das Rendering blockiert.

- [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)
  - : Dieses {{Glossary("Enumerated", "enumerierte")}} Attribut gibt an, ob {{Glossary("CORS", "CORS")}} für das Abrufen der Ressource verwendet werden muss.
    [CORS-fähige Bilder](/de/docs/Web/HTML/How_to/CORS_enabled_image) können im {{HTMLElement("canvas")}} Element ohne _Verfälschung_ wiederverwendet werden.
    Die erlaubten Werte sind:
    - `anonymous`
      - : Eine Cross-Origin-Anfrage (d.h. mit einem {{HTTPHeader("Origin")}} HTTP-Header) wird durchgeführt, aber es werden keine Anmeldedaten gesendet (d.h. kein Cookie, X.509-Zertifikat oder HTTP-Authentifizierung).
        Wenn der Server keine Anmeldedaten an die Ursprungsseite übermittelt (indem er den {{HTTPHeader("Access-Control-Allow-Origin")}} HTTP-Header nicht setzt), wird die Ressource verfälscht und ihre Nutzung eingeschränkt.
    - `use-credentials`
      - : Eine Cross-Origin-Anfrage (d.h. mit einem `Origin` HTTP-Header) wird zusammen mit einer Anmeldedatenübermittlung durchgeführt (d.h. ein Cookie, ein Zertifikat und/oder eine HTTP-Authentifizierung wird durchgeführt).
        Wenn der Server keine Anmeldedaten an die Ursprungsseite übermittelt (durch den {{HTTPHeader("Access-Control-Allow-Credentials")}} HTTP-Header), wird die Ressource _verfälscht_ und ihre Nutzung eingeschränkt.

    Ist das Attribut nicht vorhanden, wird die Ressource ohne eine {{Glossary("CORS", "CORS")}} Anfrage abgerufen (d.h. ohne den `Origin` HTTP-Header zu senden), wodurch deren nicht-verfälschte Nutzung verhindert wird. Gilt es als ungültig, wird es behandelt, als wäre das enumerierte Schlüsselwort **anonymous** verwendet worden.
    Weitere Informationen finden Sie unter [CORS-Einstellungen Attribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin).

- `disabled`
  - : Nur für `rel="stylesheet"` gilt: Das `disabled` Boolesche Attribut gibt an, ob das beschriebene Stylesheet geladen und auf das Dokument angewendet werden soll. Wenn `disabled` im HTML angegeben ist, während es geladen wird, wird das Stylesheet nicht während des Seitenladevorgangs geladen. Stattdessen wird das Stylesheet bei Bedarf geladen, wenn das `disabled` Attribut auf `false` geändert wird oder entfernt wird.

    Das Setzen der `disabled` Eigenschaft im DOM führt dazu, dass das Stylesheet aus der [`Document.styleSheets`](/de/docs/Web/API/Document/styleSheets) Liste des Dokuments entfernt wird.

- [`fetchpriority`](/de/docs/Web/HTML/Reference/Attributes/fetchpriority)
  - : Bietet einen Hinweis auf die relative Priorität, die beim Abrufen einer Ressource eines bestimmten Typs verwendet werden soll. Erlaubte Werte:
    - `high`
      - : Ruft die Ressource mit einer hohen Priorität im Vergleich zu anderen Ressourcen desselben Typs ab.
    - `low`
      - : Ruft die Ressource mit einer niedrigen Priorität im Vergleich zu anderen Ressourcen desselben Typs ab.
    - `auto`
      - : Es wird keine Präferenz für die Abrufpriorität festgelegt.
        Dies ist der Standard.
        Es wird verwendet, wenn kein Wert oder ein ungültiger Wert festgelegt ist.
- `href`
  - : Dieses Attribut gibt die {{Glossary("URL", "URL")}} der verlinkten Ressource an. Eine URL kann absolut oder relativ sein.
- `hreflang`
  - : Dieses Attribut gibt die Sprache der verlinkten Ressource an.
    Es ist rein beratend.
    Die Werte sollten gültige {{Glossary("BCP_47_language_tag", "BCP 47 Sprachkennzeichnungen")}} sein.
    Verwenden Sie dieses Attribut nur, wenn das [`href`](/de/docs/Web/HTML/Reference/Elements/a#href) Attribut vorhanden ist.
- `imagesizes`
  - : Nur für `rel="preload"` und `as="image"` gilt: Das `imagesizes` Attribut hat eine ähnliche Syntax und Semantik wie das [`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes) Attribut, das die entsprechende Ressource anzeigt, die von einem `img` Element mit entsprechenden Werten für seine `srcset` und `sizes` Attribute vorab geladen werden soll.
- `imagesrcset`
  - : Nur für `rel="preload"` und `as="image"` gilt: Das `imagesrcset` Attribut hat eine ähnliche Syntax und Semantik wie das [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset) Attribut, das angibt, die entsprechende Ressource anzuzeigen, die von einem `img` Element mit entsprechenden Werten für seine `srcset` und `sizes` Attribute vorab geladen werden soll.
- `integrity`
  - : Enthält Inline-Metadaten — einen base64-codierten kryptografischen Hash der Ressource (Datei), die Sie dem Browser zum Abrufen angeben.
    Der Browser kann dies verwenden, um sicherzustellen, dass die abgerufene Ressource ohne unerwartete Manipulation geliefert wurde.
    Das Attribut darf nur angegeben werden, wenn das `rel` Attribut auf `stylesheet`, `preload` oder `modulepreload` gesetzt ist.
    Siehe [Subressource-Integrität](/de/docs/Web/Security/Defenses/Subresource_Integrity).
- `media`
  - : Dieses Attribut gibt die Medien an, auf die die verlinkte Ressource angewendet wird. Sein Wert muss ein Medientyp / [Medienanfrage](/de/docs/Web/CSS/Guides/Media_queries) sein.
    Dieses Attribut ist hauptsächlich nützlich, wenn Sie auf externe Stylesheets verlinken — es ermöglicht dem Benutzeragenten, das am besten geeignete für das Gerät auszuwählen, auf dem es läuft.

- `referrerpolicy`
  - : Ein String, der angibt, welchen Referrer beim Abrufen der Ressource verwendet werden soll. Für detaillierte Erklärungen und Beispiele jeder Richtlinie siehe die {{HTTPHeader("Referrer-Policy")}} Header Dokumentation.
    - `no-referrer` bedeutet, dass der {{HTTPHeader("Referer")}} Header nicht gesendet wird.
    - `no-referrer-when-downgrade` bedeutet, dass kein {{HTTPHeader("Referer")}} Header gesendet wird, wenn zu einem Ursprung ohne TLS (HTTPS) navigiert wird.
      Dies ist das Standardverhalten eines Benutzeragenten, wenn keine andere Richtlinie angegeben ist.
    - `origin` bedeutet, dass der Referrer der Ursprung der Seite sein wird, der ungefähr dem Schema, dem Host und dem Port entspricht.
    - `origin-when-cross-origin` bedeutet, dass das Navigieren zu anderen Ursprüngen auf das Schema, den Host und den Port beschränkt wird, während das Navigieren im gleichen Ursprung den Pfad des Referrers beinhaltet.
    - `same-origin` bedeutet, dass der Referrer (Ursprung, Pfad und Abfragezeichenfolge) für gleicharyige Anfragen gesendet wird, aber kein Referrer für andere Ursprünge gesendet wird.
    - `strict-origin` bedeutet, dass nur der Ursprung gesendet wird, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS). Kein Referrer wird an weniger sichere Ziele gesendet (HTTPS→HTTP). Dies ist wichtig für HTTPS Seiten, da es verhindert, dass Referer-Informationen an unsichere Ursprünge gelangen.
    - `strict-origin-when-cross-origin` bedeutet, dass der vollständige Referrer für gleiche Ursprungsanfragen gesendet wird. Für andere Ursprungsanfragen wird nur der Ursprung gesendet, wenn das Protokoll gleich bleibt (HTTPS→HTTPS), und kein Referrer wird gesendet, wenn auf HTTP herabgestuft wird. Dies ist der Standardwert, der Funktionalität mit Privatsphäre und Sicherheit für HTTPS-Seiten ausbalanciert.
    - `unsafe-url` bedeutet, dass der Referrer den Ursprung und den Pfad enthält (jedoch nicht das Fragment, das Passwort oder den Benutzernamen).
      Diese Option ist unsicher, da sie Ursprünge und Pfade von TLS-geschützten Ressourcen zu unsicheren Ursprüngen durchsickern lassen kann.

- [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)
  - : Dieses Attribut benennt eine Beziehung des verlinkten Dokuments zum aktuellen Dokument. Das Attribut muss eine durch Leerzeichen getrennte Liste von [Link-Typ-Werten](/de/docs/Web/HTML/Reference/Attributes/rel) sein.
- `sizes`
  - : Dieses Attribut definiert die Größen der Icons für visuelle Medien, die in der Ressource enthalten sind.
    Es muss nur vorhanden sein, wenn das [`rel`](#rel) einen Wert von `icon` oder einen nicht standardmäßigen Typ wie Apples `apple-touch-icon` enthält.
    Es kann die folgenden Werte haben:
    - `any`, was bedeutet, dass das Icon auf jede Größe skaliert werden kann, da es in einem Vektorformat ist, wie `image/svg+xml`.
    - eine durch Leerzeichen getrennte Liste von Größen, jede im Format `<Breite in Pixeln>x<Höhe in Pixeln>` oder `<Breite in Pixeln>X<Höhe in Pixeln>`. Jede dieser Größen muss in der Ressource enthalten sein.

    > [!NOTE]
    > Die meisten Icon-Formate können nur ein einzelnes Icon speichern; daher enthält das [`sizes`](#sizes) Attribut meistens nur einen Eintrag.
    > Microsofts ICO Format und Apples ICNS Format können mehrere Icon-Größen in einer einzigen Datei speichern. ICO hat eine bessere Browserunterstützung, daher sollten Sie dieses Format verwenden, wenn eine browserübergreifende Unterstützung ein Anliegen ist.

- `title`
  - : Das `title` Attribut hat spezielle Bedeutungen auf dem `<link>` Element.
    Wenn es auf einem `<link rel="stylesheet">` verwendet wird, definiert es ein [Standard- oder ein alternatives Stylesheet](/de/docs/Web/HTML/Reference/Attributes/rel/alternate_stylesheet).
- `type`
  - : Dieses Attribut wird verwendet, um den Typ des verlinkten Inhalts zu definieren.
    Der Wert des Attributs sollte ein MIME-Typ wie **text/html**, **text/css** usw. sein.
    Die übliche Verwendung dieses Attributs besteht darin, den Typ des referenzierten Stylesheets zu definieren (wie **text/css**), aber da CSS die einzige Stylesheet-Sprache ist, die im Web verwendet wird, ist es nicht nur möglich, das `type` Attribut wegzulassen, es wird tatsächlich jetzt empfohlen, dies zu tun.
    Es wird auch bei `rel="preload"` Link-Typen verwendet, um sicherzustellen, dass der Browser nur Dateitypen herunterlädt, die er unterstützt.

### Nicht standardmäßige Attribute

- `target` {{Deprecated_Inline}}
  - : Definiert den Namen des Frames oder Fensters, der die definierte Verknüpfungsbeziehung hat oder das die Darstellung einer beliebigen verlinkten Ressource anzeigt.

### Obsolete Attribute

- `charset` {{deprecated_inline}}
  - : Dieses Attribut definiert die Zeichenkodierung der verlinkten Ressource.
    Der Wert ist eine durch Leerzeichen und/oder Kommas getrennte Liste von Zeichensätzen, wie in {{rfc(2045)}} definiert.
    Der Standardwert ist `iso-8859-1`.

    > [!NOTE]
    > Um denselben Effekt wie mit diesem veralteten Attribut zu erzielen, verwenden Sie den {{HTTPHeader("Content-Type")}} HTTP-Header auf der verlinkten Ressource.

- `rev` {{deprecated_inline}}
  - : Der Wert dieses Attributs zeigt die Beziehung des aktuellen Dokuments zum verlinkten Dokument an, wie durch das [`href`](#href) Attribut definiert.
    Das Attribut definiert somit die umgekehrte Beziehung im Vergleich zu dem Wert des `rel` Attributs.
    [Link-Typ-Werte](/de/docs/Web/HTML/Reference/Attributes/rel) für das Attribut sind ähnlich den möglichen Werten für [`rel`](#rel).

    > [!NOTE]
    > Anstelle von `rev` sollten Sie das [`rel`](#rel) Attribut mit dem gegenteiligen [Link-Typ-Wert](/de/docs/Web/HTML/Reference/Attributes/rel) verwenden.
    > Zum Beispiel, um den umgekehrten Link für `made` zu etablieren, spezifiziere `author`. Außerdem steht dieses Attribut nicht für "Revision" und darf nicht mit einer Versionsnummer verwendet werden, obwohl viele Websites es in dieser Weise missbrauchen.

## Beispiele

### Ein Stylesheet einschließen

Um ein Stylesheet in eine Seite einzuschließen, verwenden Sie die folgende Syntax:

```html
<link href="style.css" rel="stylesheet" />
```

### Alternative Stylesheets bereitstellen

Sie können auch [alternative Stylesheets](/de/docs/Web/HTML/Reference/Attributes/rel/alternate_stylesheet) angeben.

Der Benutzer kann auswählen, welches Stylesheet verwendet werden soll, indem er es aus dem Menü **Ansicht > Seitenstil** auswählt. Dies bietet dem Benutzer die Möglichkeit, mehrere Versionen einer Seite zu sehen.

```html
<link href="default.css" rel="stylesheet" title="Default Style" />
<link href="fancy.css" rel="alternate stylesheet" title="Fancy" />
<link href="basic.css" rel="alternate stylesheet" title="Basic" />
```

### Icons für verschiedene Nutzungskontexte bereitstellen

Sie können Links zu mehreren Icons auf derselben Seite inkludieren und der Browser wird auswählen, welches am besten für seinen speziellen Kontext geeignet ist, indem die `rel` und `sizes` Werte als Hinweise genutzt werden.

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

Für Informationen darüber, welche `sizes` für Apple-Icons zu wählen sind, siehe [Apples Dokumentation zur Konfiguration von Webanwendungen](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW4) und die referenzierten [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/app-icons#App-icon-sizes). Gewöhnlich reicht es aus, ein großes Bild bereitzustellen, wie 192x192, und den Browser es bei Bedarf skaliere, jedoch möchten Sie vielleicht Bilder mit unterschiedlichen Detailstufen für verschiedene Größen bereitstellen, wie die Apple Designrichtlinien empfehlen. Kleinere Icons für niedrigere Auflösungen bereitzustellen spart ebenfalls Bandbreite.

Es kann nicht nötig sein, `<link>` Elemente überhaupt bereitzustellen. Zum Beispiel fordern Browser automatisch `/favicon.ico` vom Wurzelverzeichnis einer Site an und Apple fordert ebenfalls automatisch `/apple-touch-icon-[size].png`, `/apple-touch-icon.png` usw. an. Jedoch schützt das explizite Bereitstellen von Links Sie vor Änderungen dieser Konventionen.

### Bedingt Ressourcen mit Medienabfragen laden

Sie können einen Medientyp oder eine Mediensuche in einem `media` Attribut bereitstellen; diese Ressource wird dann nur geladen, wenn die Medienbedingung zutrifft. Zum Beispiel:

```html
<link href="print.css" rel="stylesheet" media="print" />
<link href="mobile.css" rel="stylesheet" media="all" />
<link href="desktop.css" rel="stylesheet" media="screen and (width >= 600px)" />
<link
  href="highres.css"
  rel="stylesheet"
  media="screen and (resolution >= 300dpi)" />
```

### Stylesheet Ladeereignisse

Sie können bestimmen, wann ein Stylesheet geladen wurde, indem Sie auf ein `load` Ereignis warten; ähnlich können Sie erkennen, ob ein Fehler beim Verarbeiten eines Stylesheets aufgetreten ist, indem Sie auf ein `error` Ereignis achten:

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
> Das `load` Ereignis tritt auf, sobald das Stylesheet und der gesamte importierte Inhalt geladen und geparst wurden und unmittelbar bevor die Stile auf den Inhalt angewendet werden.

### Preload-Beispiele

Eine Anzahl von `<link rel="preload">` Beispielen finden Sie in [Inhalte mit `rel="preload"` vorladen](/de/docs/Web/HTML/Reference/Attributes/rel/preload).

### Rendering blockieren, bis eine Ressource abgerufen wurde

Sie können das `render` Token innerhalb eines `blocking` Attributs einfügen; das Rendern der Seite wird blockiert, bis die Ressource und ihre kritischen Teilressourcen abgerufen und auf das Dokument angewendet werden. Zum Beispiel:

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Formulierungskontent</a>.
      </td>
    </tr>
    <tr>
      <th>Zulässiger Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "leeres Element")}}.</td>
    </tr>
    <tr>
      <th>Tag Auslassung</th>
      <td>Muss einen Starttag haben und darf keinen Endtag haben.</td>
    </tr>
    <tr>
      <th>Zulässige Eltern</th>
      <td>
        Jedes Element, das Metadaten-Elemente akzeptiert.
        Wenn <a href="/de/docs/Web/HTML/Reference/Global_attributes/itemprop">itemprop</a> vorhanden ist: jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Formulierungskontent</a> akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA Rolle</th>
      <td><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/link_role"><code>link</code></a> mit <code>href</code> Attribut</td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA Rollen</th>
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
- {{HTTPHeader("Referrer-Policy")}} HTTP-Header
