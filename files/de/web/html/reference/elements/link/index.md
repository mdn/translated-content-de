---
title: "<link>: Das Element für externe Ressourcenverknüpfungen"
slug: Web/HTML/Reference/Elements/link
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

Das **`<link>`**-Element [HTML](/de/docs/Web/HTML) gibt Beziehungen zwischen dem aktuellen Dokument und einer externen Ressource an.
Dieses Element wird am häufigsten verwendet, um auf {{Glossary("CSS", "Stylesheets")}} zu verweisen, aber es wird auch verwendet, um Website-Symbole (sowohl "Favicons" als auch Symbole für den Startbildschirm und Apps auf mobilen Geräten) festzulegen und andere Dinge zu tun.

{{InteractiveExample("HTML Demo: &lt;link&gt;", "tabbed-shorter")}}

```html interactive-example
<link href="/shared-assets/misc/link-element-example.css" rel="stylesheet" />

<p>This text will be red as defined in the external stylesheet.</p>
<p style="color: blue">
  The <code>style</code> attribute can override it, though.
</p>
```

Um ein externes Stylesheet zu verlinken, fügen Sie ein `<link>`-Element in Ihr {{HTMLElement("head")}} ein, wie folgendes Beispiel zeigt:

```html
<link href="main.css" rel="stylesheet" />
```

Dieses Beispiel stellt den Pfad zum Stylesheet in einem `href`-Attribut bereit und verwendet ein [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)-Attribut mit dem Wert `stylesheet`. Das `rel` steht für "relationship" (Beziehung) und ist eine der zentralen Eigenschaften des `<link>`-Elements; der Wert gibt an, wie das verknüpfte Element im Verhältnis zum enthaltenden Dokument steht.

Es gibt eine Reihe weiterer gängiger Typen, die Ihnen begegnen werden. Beispielsweise ein Link zum Favicon der Website:

```html
<link rel="icon" href="favicon.ico" />
```

Es gibt eine Reihe weiterer `rel`-Werte für Icons, die hauptsächlich verwendet werden, um spezielle Icon-Typen für verschiedene mobile Plattformen anzugeben, z.B.:

```html
<link
  rel="apple-touch-icon"
  sizes="114x114"
  href="apple-icon-114.png"
  type="image/png" />
```

Das `sizes`-Attribut gibt die Größe des Icons an, während das `type` den MIME-Typ der verknüpften Ressource enthält.
Diese bieten nützliche Hinweise, damit der Browser das am besten geeignete verfügbare Icon auswählen kann.

Sie können auch einen Medientyp oder eine Abfrage in einem `media`-Attribut angeben; diese Ressource wird dann nur geladen, wenn die Medienbedingung wahr ist. Zum Beispiel:

```html
<link href="print.css" rel="stylesheet" media="print" />
<link href="mobile.css" rel="stylesheet" media="screen and (width <= 600px)" />
```

Interessante neue Leistungs- und Sicherheitsmerkmale wurden dem `<link>`-Element ebenfalls hinzugefügt. Nehmen Sie dieses Beispiel:

```html
<link
  rel="preload"
  href="myFont.woff2"
  as="font"
  type="font/woff2"
  crossorigin="anonymous" />
```

Ein `rel`-Wert von `preload` gibt an, dass der Browser diese Ressource vorladen soll (siehe [`rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload) für weitere Details), wobei das `as`-Attribut die spezifische Klasse des abzurufenden Inhalts angibt.
Das `crossorigin`-Attribut gibt an, ob die Ressource mit einer {{Glossary("CORS", "CORS")}}-Anfrage abgerufen werden soll.

Weitere Nutzungshinweise:

- Ein `<link>`-Element kann entweder im {{HTMLElement("head")}} oder im {{HTMLElement("body")}}-Element vorkommen, je nachdem, ob es einen [Linktyp](https://html.spec.whatwg.org/multipage/links.html#body-ok) hat, der **body-ok** ist.
  Zum Beispiel ist der `stylesheet`-Linktyp body-ok und daher ist `<link rel="stylesheet">` im Body erlaubt.
  Dies ist jedoch keine gute Praxis; es ergibt mehr Sinn, Ihre `<link>`-Elemente vom Body-Inhalt zu trennen und sie im `<head>` zu platzieren.
- Wenn Sie `<link>` verwenden, um ein Favicon für eine Website festzulegen, und Ihre Website eine Content-Security-Policy (CSP) verwendet, um die Sicherheit zu erhöhen, gilt die Richtlinie auch für das Favicon.
  Wenn Sie auf Probleme stoßen, dass das Favicon nicht geladen wird, überprüfen Sie, ob die {{HTTPHeader("Content-Security-Policy")}}-Header-Direktive [`img-src` directive](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/img-src) den Zugriff verhindert.
- Die HTML- und XHTML-Spezifikationen definieren Event-Handler für das `<link>`-Element, aber es ist unklar, wie sie verwendet werden würden.
- Unter XHTML 1.0 erfordern {{Glossary("void_element", "void elements")}} wie `<link>` einen Schrägstrich: `<link />`.
- WebTV unterstützt die Verwendung des Werts `next` für `rel`, um die nächste Seite einer Dokumentenreihe vorzuladen.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `as`
  - : Dieses Attribut ist erforderlich, wenn [`rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload) auf dem `<link>`-Element gesetzt wurde, optional, wenn [`rel="modulepreload"`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload) gesetzt wurde, und sollte andernfalls nicht verwendet werden.
    Es gibt den Typ der vom `<link>` geladenen Inhalte an, was für die Anforderungsanpassung, die Anwendung der korrekten [Content-Security-Policy](/de/docs/Web/HTTP/Guides/CSP) und das Setzen des korrekten {{HTTPHeader("Accept")}}-Request-Headers notwendig ist.

    Zudem verwendet `rel="preload"` dies als Signal für die Priorisierung von Anfragen.
    Die folgende Tabelle listet die gültigen Werte für dieses Attribut und die Elemente oder Ressourcen auf, auf die sie zutreffen.

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
  - : Dieses Attribut zeigt explizit an, dass bestimmte Operationen blockiert werden sollen, bis bestimmte Bedingungen erfüllt sind. Es darf nur verwendet werden, wenn das `rel`-Attribut die Schlüsselwörter `expect` oder `stylesheet` enthält. Mit [`rel="expect"`](/de/docs/Web/HTML/Reference/Attributes/rel#expect) wird angezeigt, dass Operationen blockiert werden sollen, bis ein bestimmter DOM-Knoten analysiert wurde. Mit [`rel="stylesheet"`](/de/docs/Web/HTML/Reference/Attributes/rel#stylesheet) wird angezeigt, dass Operationen blockiert werden sollen, bis ein externes Stylesheet und seine kritischen Subressourcen abgerufen und auf das Dokument angewendet wurden. Die zu blokierenden Operationen müssen eine durch Leerzeichen getrennte Liste von Blockierungstokens enthalten, die unten aufgelistet sind. Derzeit gibt es nur ein Token:
    - `render`: Das Rendern von Inhalten auf dem Bildschirm wird blockiert.

    > [!NOTE]
    > Nur `link`-Elemente im `<head>`-Element des Dokuments können möglicherweise das Rendering blockieren. Standardmäßig blockiert ein `link`-Element mit `rel="stylesheet"` im `<head>` das Rendering, wenn der Browser es während des Analysierens entdeckt. Wenn ein solches `link`-Element dynamisch über Skript hinzugefügt wird, müssen Sie zusätzlich `blocking = "render"` setzen, damit es das Rendering blockiert.

- [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)
  - : Dieses {{Glossary("Enumerated", "Aufgezählte")}} Attribut zeigt an, ob {{Glossary("CORS", "CORS")}} verwendet werden muss, wenn die Ressource abgerufen wird.
    [CORS-aktivierte Bilder](/de/docs/Web/HTML/How_to/CORS_enabled_image) können im {{HTMLElement("canvas")}}-Element wiederverwendet werden, ohne _verunreinigt_ zu werden.
    Die erlaubten Werte sind:
    - `anonymous`
      - : Eine Cross-Origin-Anfrage (d.h. mit einem {{HTTPHeader("Origin")}} HTTP-Header) wird durchgeführt, aber keine Anmeldeinformationen werden gesendet (d.h. kein Cookie, X.509-Zertifikat oder HTTP-Basic-Authentifizierung).
        Wenn der Server der Ursprungsseite keine Anmeldeinformationen gibt (indem er nicht den {{HTTPHeader("Access-Control-Allow-Origin")}} HTTP-Header setzt), wird die Ressource verunreinigt und ihre Nutzung eingeschränkt.
    - `use-credentials`
      - : Eine Cross-Origin-Anfrage (d.h. mit einem `Origin` HTTP-Header) wird durchgeführt, wobei ein Anmeldeinformationen gesendet werden (d.h. ein Cookie, ein Zertifikat und/oder HTTP-Basic-Authentifizierung).
        Wenn der Server der Ursprungsseite keine Anmeldeinformationen gibt (durch den {{HTTPHeader("Access-Control-Allow-Credentials")}} HTTP-Header), wird die Ressource _verunreinigt_ und ihre Nutzung eingeschränkt.

    Wenn das Attribut nicht vorhanden ist, wird die Ressource ohne eine {{Glossary("CORS", "CORS")}}-Anfrage abgerufen (d.h. ohne den `Origin` HTTP-Header zu senden), was ihre ungeteilte Nutzung verhindert. Wenn ungültig, wird es so behandelt, als ob das aufgezählte Schlüsselwort **anonymous** verwendet wurde.
    Weitere Informationen finden Sie unter [CORS-Einstellung-Attribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin).

- `disabled`
  - : Nur für `rel="stylesheet"` zeigt das `disabled`-Boolean-Attribut an, ob das beschriebene Stylesheet geladen und auf das Dokument angewendet werden soll.
    Wenn `disabled` im HTML beim Laden festgelegt ist, wird das Stylesheet nicht beim Laden der Seite geladen.
    Stattdessen wird das Stylesheet bei Bedarf geladen, wenn und falls das `disabled`-Attribut auf `false` geändert oder entfernt wird.

    Das Setzen der `disabled`-Eigenschaft im DOM führt dazu, dass das Stylesheet aus der Liste der [`Document.styleSheets`](/de/docs/Web/API/Document/styleSheets) des Dokuments entfernt wird.

- `fetchpriority`
  - : Gibt einen Hinweis auf die relative Priorität, die beim Abrufen einer Ressource eines bestimmten Typs verwendet werden soll.
    Erlaubte Werte:
    - `high`
      - : Rufen Sie die Ressource mit hoher Priorität im Verhältnis zu anderen Ressourcen desselben Typs ab.
    - `low`
      - : Rufen Sie die Ressource mit niedriger Priorität im Verhältnis zu anderen Ressourcen desselben Typs ab.
    - `auto`
      - : Legen Sie keine Präferenz für die Abrufpriorität fest.
        Dies ist die Standardeinstellung.
        Diese wird verwendet, wenn kein Wert oder ein ungültiger Wert gesetzt ist.

    Siehe [`HTMLLinkElement.fetchPriority`](/de/docs/Web/API/HTMLLinkElement/fetchPriority) für weitere Informationen.

- `href`
  - : Dieses Attribut gibt die {{Glossary("URL", "URL")}} der verknüpften Ressource an. Eine URL kann absolut oder relativ sein.
- `hreflang`
  - : Dieses Attribut gibt die Sprache der verknüpften Ressource an.
    Es ist rein beratend.
    Werte sollten gültige {{Glossary("BCP_47_language_tag", "BCP 47-Sprach-Tags")}} sein.
    Verwenden Sie dieses Attribut nur, wenn das [`href`](/de/docs/Web/HTML/Reference/Elements/a#href)-Attribut vorhanden ist.
- `imagesizes`
  - : Nur für `rel="preload"` und `as="image"` hat das `imagesizes`-Attribut eine ähnliche Syntax und Semantik wie das [`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes)-Attribut, das anzeigt, welche Ressource von einem `img`-Element mit entsprechenden Werten für seine `srcset`- und `sizes`-Attribute vorgeladen werden soll.
- `imagesrcset`
  - : Nur für `rel="preload"` und `as="image"` hat das `imagesrcset`-Attribut eine ähnliche Syntax und Semantik wie das [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset)-Attribut, das anzeigt, welche Ressource von einem `img`-Element mit entsprechenden Werten für seine `srcset`- und `sizes`-Attribute vorgeladen werden soll.
- `integrity`
  - : Enthält Inline-Metadaten – einen base64-kodierten kryptografischen Hash der Ressource (Datei), die Sie dem Browser zum Abrufen angeben.
    Der Browser kann dies verwenden, um zu überprüfen, ob die abgerufene Ressource ohne unerwartete Manipulation geliefert wurde.
    Das Attribut darf nur angegeben werden, wenn das `rel`-Attribut auf `stylesheet`, `preload` oder `modulepreload` gesetzt ist.
    Siehe [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity).
- `media`
  - : Dieses Attribut gibt das Medium an, auf das sich die verknüpfte Ressource bezieht. Sein Wert muss ein Medientyp / [Medienabfrage](/de/docs/Web/CSS/CSS_media_queries) sein.
    Dieses Attribut ist hauptsächlich nützlich, wenn auf externe Stylesheets verwiesen wird – es ermöglicht dem Benutzeragenten, das am besten angepasste für das Gerät auszuwählen, auf dem es ausgeführt wird.

- `referrerpolicy`
  - : Eine Zeichenfolge, die angibt, welcher Referrer beim Abrufen der Ressource verwendet werden soll:
    - `no-referrer` bedeutet, dass der {{HTTPHeader("Referer")}}-Header nicht gesendet wird.
    - `no-referrer-when-downgrade` bedeutet, dass beim Navigieren zu einem Ursprung ohne TLS (HTTPS) kein {{HTTPHeader("Referer")}}-Header gesendet wird.
      Dies ist das Standardverhalten eines Benutzeragenten, wenn sonst keine Richtlinie angegeben ist.
    - `origin` bedeutet, dass der Referrer der Ursprung der Seite ist, der grob gesagt das Schema, der Host und der Port ist.
    - `origin-when-cross-origin` bedeutet, dass das Navigieren zu anderen Ursprüngen auf das Schema, den Host und den Port beschränkt wird, während das Navigieren auf demselben Ursprung den Pfad des Referrers beinhaltet.
    - `unsafe-url` bedeutet, dass der Referrer den Ursprung und den Pfad (aber nicht das Fragment, Passwort oder den Benutzernamen) enthält.
      Diese Option ist unsicher, da dadurch Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge geleakt werden können.

- [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)
  - : Dieses Attribut benennt eine Beziehung des verknüpften Dokuments zum aktuellen Dokument. Das Attribut muss eine durch Leerzeichen getrennte Liste von [Linktyp-Werten](/de/docs/Web/HTML/Reference/Attributes/rel) sein.
- `sizes`
  - : Dieses Attribut definiert die Größen der Symbole für visuelle Medien, die in der Ressource enthalten sind.
    Es muss nur vorhanden sein, wenn das [`rel`](#rel) einen Wert von `icon` oder einen nicht standardmäßigen Typ wie Apples `apple-touch-icon` enthält.
    Es kann die folgenden Werte haben:
    - `any`, was bedeutet, dass das Icon auf jede Größe skaliert werden kann, da es in einem Vektorformat vorliegt, wie `image/svg+xml`.
    - eine durch Leerraum getrennte Liste von Größen, jeweils im Format `<Breite in Pixel>x<Höhe in Pixel>` oder `<Breite in Pixel>X<Höhe in Pixel>`. Jede dieser Größen muss in der Ressource enthalten sein.

    > [!NOTE]
    > Die meisten Icon-Formate können nur ein einziges Icon speichern; daher enthält das [`sizes`](#sizes)-Attribut meistens nur einen Eintrag.
    > Microsofts ICO-Format und Apples ICNS-Format können mehrere Icon-Größen in einer einzigen Datei speichern. ICO hat eine bessere Browserunterstützung, daher sollten Sie dieses Format verwenden, wenn Cross-Browser-Support eine Rolle spielt.

- `title`
  - : Das `title`-Attribut hat besondere Semantik auf dem `<link>`-Element.
    Wenn es auf einem `<link rel="stylesheet">` verwendet wird, definiert es ein [Standard- oder ein alternatives Stylesheet](/de/docs/Web/HTML/Reference/Attributes/rel/alternate_stylesheet).
- `type`
  - : Dieses Attribut wird verwendet, um den Typ der verknüpften Inhalte zu definieren.
    Der Wert des Attributs sollte ein MIME-Typ wie **text/html**, **text/css** usw. sein.
    Der häufigste Gebrauch dieses Attributs ist es, den Typ des referenzierten Stylesheets zu definieren (wie **text/css**), aber da CSS die einzige Stylesheet-Sprache ist, die im Web verwendet wird, ist es nicht nur möglich, das `type`-Attribut wegzulassen, sondern es wird tatsächlich jetzt empfohlen, dies zu tun.

### Nicht standardisierte Attribute

- `target` {{Deprecated_Inline}}
  - : Definiert den Namen des Rahmens oder Fensters, das die definierte Verknüpfungsbeziehung hat oder in dem die Darstellung von verknüpften Ressourcen gezeigt wird.

### Veraltete Attribute

- `charset` {{deprecated_inline}}
  - : Dieses Attribut definiert die Zeichencodierung der verknüpften Ressource.
    Der Wert ist eine Leerzeichen- und/oder Komma-getrennte Liste von Zeichensätzen, wie sie in {{rfc(2045)}} definiert sind.
    Der Standardwert ist `iso-8859-1`.

    > [!NOTE]
    > Um den gleichen Effekt wie dieses veraltete Attribut zu erzielen, verwenden Sie den {{HTTPHeader("Content-Type")}} HTTP-Header auf die verknüpfte Ressource.

- `rev` {{deprecated_inline}}
  - : Der Wert dieses Attributs zeigt die Beziehung des aktuellen Dokuments zur verknüpften Ressource an, wie im [`href`](#href)-Attribut definiert.
    Das Attribut definiert somit die umgekehrte Beziehung im Vergleich zum Wert des `rel`-Attributs.
    [Linktyp-Werte](/de/docs/Web/HTML/Reference/Attributes/rel) für das Attribut sind ähnlich wie die möglichen Werte für [`rel`](#rel).

    > [!NOTE]
    > Anstatt `rev` zu verwenden, sollten Sie das [`rel`](#rel) Attribut mit dem gegenteiligen [Linktyp-Wert](/de/docs/Web/HTML/Reference/Attributes/rel) verwenden.
    > Zum Beispiel, um den umgekehrten Link für `made` zu erstellen, geben Sie `author` an. Auch steht dieses Attribut nicht für "revision" und darf nicht mit einer Versionsnummer verwendet werden, obwohl viele Websites es auf diese Weise falsch verwenden.

## Beispiele

### Einbinden eines Stylesheets

Um ein Stylesheet in eine Seite einzubinden, verwenden Sie die folgende Syntax:

```html
<link href="style.css" rel="stylesheet" />
```

### Bereitstellen alternativer Stylesheets

Sie können auch [alternative Stylesheets](/de/docs/Web/HTML/Reference/Attributes/rel/alternate_stylesheet) angeben.

Der Benutzer kann auswählen, welches Stylesheet er verwenden möchte, indem er es im **View > Page Style**-Menü auswählt.
Dies bietet den Benutzern die Möglichkeit, mehrere Versionen einer Seite zu sehen.

```html
<link href="default.css" rel="stylesheet" title="Default Style" />
<link href="fancy.css" rel="alternate stylesheet" title="Fancy" />
<link href="basic.css" rel="alternate stylesheet" title="Basic" />
```

### Bereitstellen von Icons für verschiedene Verwendungskontexte

Sie können Links zu mehreren Icons auf derselben Seite einfügen, und der Browser wählt aus, welches am besten für seinen speziellen Kontext geeignet ist, indem `rel`- und `sizes`-Werte als Hinweise verwendet werden.

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

Weitere Informationen zu den `sizes`, die Sie für Apple-Icons wählen können, finden Sie in [Apples Dokumentation zur Konfiguration von Webanwendungen](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW4) und in den referenzierten [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/app-icons#App-icon-sizes). Normalerweise reicht es aus, ein großes Bild wie 192x192 bereitzustellen und dem Browser zu überlassen, es bei Bedarf zu skalieren, aber Sie möchten möglicherweise Bilder mit unterschiedlichen Detaillierungsgraden für verschiedene Größen bereitstellen, wie es die Apple Design-Richtlinien empfehlen. Das Bereitstellen kleinerer Icons für niedrigere Auflösungen spart auch Bandbreite.

Es kann nicht notwendig sein, `<link>`-Elemente überhaupt bereitzustellen. Zum Beispiel fordern Browser automatisch `/favicon.ico` aus dem Stammverzeichnis einer Seite an und Apple fordert auch automatisch `/apple-touch-icon-[size].png`, `/apple-touch-icon.png` usw. an. Das explizite Bereitstellen von Links schützt jedoch vor Änderungen dieser Konventionen.

### Bedingtes Laden von Ressourcen mit Media Queries

Sie können einen Medientyp oder eine Abfrage in einem `media`-Attribut angeben;
diese Ressource wird dann nur geladen, wenn die Medienbedingung wahr ist. Zum Beispiel:

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

Sie können feststellen, wann ein Stylesheet geladen wurde, indem Sie auf ein `load`-Ereignis achten; ähnlich können Sie feststellen, ob ein Fehler bei der Verarbeitung eines Stylesheets aufgetreten ist, indem Sie auf ein `error`-Ereignis achten:

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
> Das `load`-Ereignis wird ausgelöst, sobald das Stylesheet und alle seine importierten Inhalte geladen und analysiert wurden, und unmittelbar bevor die Stile auf die Inhalte angewendet werden.

### Preload-Beispiele

Sie können eine Reihe von `<link rel="preload">`-Beispielen in [Vorladen von Inhalten mit `rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload) finden.

### Rendering blockieren, bis eine Ressource abgerufen wird

Sie können das `render`-Token in einem `blocking`-Attribut einfügen;
das Rendering der Seite wird blockiert, bis die Ressource und ihre kritischen Subressourcen abgerufen und auf das Dokument angewendet werden. Zum Beispiel:

```html
<link blocking="render" rel="stylesheet" href="example.css" crossorigin />
```

## Technische Übersicht

<table class="properties">
  <tbody>
    <tr>
      <th>
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        Metadateninhalt.
        Wenn das Attribut <code><a href="/de/docs/Web/HTML/Reference/Global_attributes/itemprop">itemprop</a></code> vorhanden ist:
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Fließinhalt</a> und
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Textinhalt</a>.
      </td>
    </tr>
    <tr>
      <th>Erlaubter Inhalt</th>
      <td>Kein Inhalt; es ist ein {{Glossary("void_element", "void element")}}.</td>
    </tr>
    <tr>
      <th>Tag-Auslassung</th>
      <td>Es muss ein Anfangstag haben und darf kein Endtag haben.</td>
    </tr>
    <tr>
      <th>Erlaubte Eltern</th>
      <td>
        Jedes Element, das Metadaten-Elemente akzeptiert.
        Wenn <a href="/de/docs/Web/HTML/Reference/Global_attributes/itemprop">itemprop</a> vorhanden ist: jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Textinhalt</a> akzeptiert.
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
