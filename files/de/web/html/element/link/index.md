---
title: "<link>: Das External Resource Link-Element"
slug: Web/HTML/Element/link
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{HTMLSidebar}}

Das **`<link>`**-[HTML](/de/docs/Web/HTML)-Element spezifiziert Beziehungen zwischen dem aktuellen Dokument und einer externen Ressource. Dieses Element wird am häufigsten verwendet, um auf {{Glossary("CSS", "Stylesheets")}} zu verlinken, es wird jedoch auch verwendet, um Site-Icons (sowohl "Favicon"-artige Icons als auch Icons für den Startbildschirm und Apps auf mobilen Geräten) unter anderem festzulegen.

{{InteractiveExample("HTML Demo: &lt;link&gt;", "tabbed-shorter")}}

```html interactive-example
<link href="/shared-assets/misc/link-element-example.css" rel="stylesheet" />

<p>This text will be red as defined in the external stylesheet.</p>
<p style="color: blue">
  The <code>style</code> attribute can override it, though.
</p>
```

Um ein externes Stylesheet zu verlinken, sollten Sie ein `<link>`-Element innerhalb Ihres {{HTMLElement("head")}} wie folgt einfügen:

```html
<link href="main.css" rel="stylesheet" />
```

Dieses Beispiel bietet den Pfad zum Stylesheet innerhalb eines `href`-Attributs und ein [`rel`](/de/docs/Web/HTML/Attributes/rel)-Attribut mit dem Wert `stylesheet`. Das `rel` steht für "relationship" (Beziehung) und ist eines der Schlüsselelemente des `<link>`-Elements – der Wert gibt an, wie der verlinkte Gegenstand mit dem enthaltenen Dokument in Beziehung steht.

Es gibt eine Reihe anderer allgegenwärtiger Typen, denen Sie begegnen werden. Zum Beispiel ein Link zum Favicon der Seite:

```html
<link rel="icon" href="favicon.ico" />
```

Es gibt eine Reihe anderer Icon-`rel`-Werte, die hauptsächlich verwendet werden, um spezielle Icon-Typen für verschiedene mobile Plattformen anzugeben, z.B.:

```html
<link
  rel="apple-touch-icon"
  sizes="114x114"
  href="apple-icon-114.png"
  type="image/png" />
```

Das `sizes`-Attribut gibt die Icon-Größe an, während das `type` den MIME-Typ der verknüpften Ressource enthält. Diese bieten nützliche Hinweise, damit der Browser das am besten geeignete verfügbare Icon auswählen kann.

Sie können auch einen Medientyp oder eine Abfrage innerhalb eines `media`-Attributs angeben; diese Ressource wird dann nur geladen, wenn die Medienbedingung wahr ist. Zum Beispiel:

```html
<link href="print.css" rel="stylesheet" media="print" />
<link
  href="mobile.css"
  rel="stylesheet"
  media="screen and (max-width: 600px)" />
```

Einige interessante neue Leistungs- und Sicherheitsfunktionen wurden ebenfalls dem `<link>`-Element hinzugefügt. Nehmen Sie dieses Beispiel:

```html
<link
  rel="preload"
  href="myFont.woff2"
  as="font"
  type="font/woff2"
  crossorigin="anonymous" />
```

Ein `rel`-Wert von `preload` gibt an, dass der Browser diese Ressource vorladen sollte (siehe [`rel="preload"`](/de/docs/Web/HTML/Attributes/rel/preload) für weitere Details), wobei das `as`-Attribut die spezifische Klasse der abgerufenen Inhalte angibt. Das `crossorigin`-Attribut gibt an, ob die Ressource mit einer {{Glossary("CORS", "CORS")}}-Anfrage abgerufen werden soll.

Weitere Gebrauchshinweise:

- Ein `<link>`-Element kann entweder im {{HTMLElement("head")}} oder im {{HTMLElement("body")}}-Element vorkommen, abhängig davon, ob es einen [Linktyp](https://html.spec.whatwg.org/multipage/links.html#body-ok) hat, der **body-ok** ist. Zum Beispiel ist der `stylesheet`-Linktyp body-ok und daher ist `<link rel="stylesheet">` im Body erlaubt. Dies ist jedoch keine gute Praxis; es ist sinnvoller, Ihre `<link>`-Elemente von Ihrem Body-Inhalt zu trennen und sie im `<head>` zu platzieren.
- Wenn `<link>` verwendet wird, um ein Favicon für eine Website festzulegen, und Ihre Website eine Content Security Policy (CSP) verwendet, um die Sicherheit zu erhöhen, gilt die Richtlinie auch für das Favicon. Wenn Sie Probleme haben, dass das Favicon nicht geladen wird, überprüfen Sie, dass die {{HTTPHeader("Content-Security-Policy")}}-Kopfzeilenrichtlinie [`img-src` directive](/de/docs/Web/HTTP/Headers/Content-Security-Policy/img-src) den Zugriff nicht verhindert.
- Die HTML- und XHTML-Spezifikationen definieren Ereignishandler für das `<link>`-Element, jedoch ist unklar, wie diese verwendet werden würden.
- Unter XHTML 1.0 erfordern {{Glossary("void_element", "Void-Elemente")}} wie `<link>` einen abschließenden Schrägstrich: `<link />`.
- WebTV unterstützt die Verwendung des Wertes `next` für `rel`, um die nächste Seite in einer Dokumentenreihe vorzupuffern.

## Attribute

Dieses Element enthält die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `as`

  - : Dieses Attribut ist erforderlich, wenn [`rel="preload"`](/de/docs/Web/HTML/Attributes/rel/preload) für das `<link>`-Element festgelegt wurde, optional, wenn [`rel="modulepreload"`](/de/docs/Web/HTML/Attributes/rel/modulepreload) gesetzt ist, und sollte ansonsten nicht verwendet werden. Es spezifiziert die Art der Inhalte, die durch das `<link>` geladen werden, was notwendig ist für die Abstimmung der Anfragen, die Anwendung der korrekten [Content Security Policy](/de/docs/Web/HTTP/CSP) und die Einstellung des richtigen {{HTTPHeader("Accept")}}-Request-Headers.

    Darüber hinaus verwendet `rel="preload"` dies als Signal für die Priorisierung von Anfragen. Die folgende Tabelle listet die gültigen Werte für dieses Attribut auf und die Elemente oder Ressourcen, auf die sie angewendet werden.

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
                <strong>Hinweis:</strong> Dieser Wert erfordert auch, dass das
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
                <strong>Hinweis:</strong> Dieser Wert erfordert auch, dass das
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
            CSS-<code>*-image</code>-Regeln
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

  - : Dieses Attribut gibt explizit an, dass bestimmte Operationen beim Abruf einer externen Ressource blockiert werden sollen. Es darf nur verwendet werden, wenn das `rel`-Attribut die Schlüsselwörter `expect` oder `stylesheet` enthält. Die zu blockierenden Operationen müssen eine durch Leerzeichen getrennte Liste von Blockierungs-Token enthalten, die unten aufgeführt sind.
    - `render`: Das Rendern von Inhalten auf dem Bildschirm wird blockiert.

- [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)

  - : Dieses {{Glossary("Enumerated", "enumarierte Attribut")}} gibt an, ob {{Glossary("CORS", "CORS")}} verwendet werden muss, wenn die Ressource abgerufen wird. [CORS-fähige Bilder](/de/docs/Web/HTML/CORS_enabled_image) können im {{HTMLElement("canvas")}}-Element wiederverwendet werden, ohne dass sie _verfälscht_ werden.
    Die erlaubten Werte sind:

    - `anonymous`
      - : Eine Cross-Origin-Anfrage (d.h. mit einem {{HTTPHeader("Origin")}} -Header) wird durchgeführt, jedoch wird kein Anmeldedatenset (d.h. kein Cookie, X.509-Zertifikat oder HTTP Basic-Authentifizierung) gesendet. Wenn der Server der Ursprungsseite keine Anmeldedaten bereitstellt (durch nicht Setzen des {{HTTPHeader("Access-Control-Allow-Origin")}}-Headers), wird die Ressource verfälscht und ihre Nutzung eingeschränkt.
    - `use-credentials`
      - : Eine Cross-Origin-Anfrage (d.h. mit einem `Origin`-Header) wird zusammen mit einem gesendeten Anmeldedatenset durchgeführt (d.h. ein Cookie, ein Zertifikat und/oder eine HTTP-Basic-Authentifizierung werden durchgeführt). Wenn der Server der Ursprungsseite Anmeldedaten nicht bereitstellt (durch den {{HTTPHeader("Access-Control-Allow-Credentials")}}-Header), wird die Ressource _verfälscht_ und ihre Nutzung eingeschränkt.

    Wenn das Attribut nicht vorhanden ist, wird die Ressource ohne {{Glossary("CORS", "CORS")}}-Anfrage abgerufen (d.h. ohne den `Origin`-Header zu senden), was ihre nicht-verfälschte Nutzung verhindert. Wenn es ungültig ist, wird es so behandelt, als ob das enumarierte Schlüsselwort **anonymous** verwendet wurde.
    Siehe [CORS-Einstellungseigenschaften](/de/docs/Web/HTML/Attributes/crossorigin) für weitere Informationen.

- `disabled`

  - : Nur für `rel="stylesheet"` zeigt das `disabled`-Boolean-Attribut an, ob das beschriebene Stylesheet geladen und auf das Dokument angewendet werden soll. Wenn 'disabled' bei der Anmeldung im HTML angegeben ist, wird der Stylesheet beim Seitenladen nicht geladen. Stattdessen wird der Stylesheet bei Bedarf geladen, wenn und wann das `disabled`-Attribut auf `false` geändert oder entfernt wird.

    Das Setzen der `disabled`-Eigenschaft im DOM bewirkt, dass das Stylesheet aus der [`Document.styleSheets`](/de/docs/Web/API/Document/styleSheets)-Liste des Dokuments entfernt wird.

- `fetchpriority`

  - : Gibt einen Hinweis auf die relative Priorität an, die beim Abrufen einer Ressource eines bestimmten Typs verwendet werden soll. Erlaubte Werte:

    - `high`
      - : Ressourcen mit hoher Priorität im Vergleich zu anderen Ressourcen desselben Typs abrufen.
    - `low`
      - : Ressourcen mit niedriger Priorität im Vergleich zu anderen Ressourcen desselben Typs abrufen.
    - `auto`
      - : Keine Präferenz für die Abrufpriorität setzen. Dies ist die Standardeinstellung. Sie wird verwendet, wenn kein Wert oder ein ungültiger Wert festgelegt ist.

    Weitere Informationen finden Sie unter [`HTMLLinkElement.fetchPriority`](/de/docs/Web/API/HTMLLinkElement/fetchPriority).

- `href`
  - : Dieses Attribut spezifiziert die {{Glossary("URL", "URL")}} der verknüpften Ressource. Eine URL kann absolut oder relativ sein.
- `hreflang`
  - : Dieses Attribut gibt die Sprache der verknüpften Ressource an. Es ist rein beratend. Erlaubte Werte sind durch {{RFC(5646, "Tags for Identifying Languages (also known as BCP 47)")}} spezifiziert. Verwenden Sie dieses Attribut nur, wenn das [`href`](/de/docs/Web/HTML/Element/a#href)-Attribut vorhanden ist.
- `imagesizes`
  - : Nur für `rel="preload"` und `as="image"`, das `imagesizes`-Attribut hat eine ähnliche Syntax und Semantik wie das [`sizes`](/de/docs/Web/HTML/Element/img#sizes)-Attribut, das darauf hinweist, die entsprechende Ressource, die von einem `img`-Element mit entsprechenden Werten für seine `srcset`- und `sizes`-Attribute verwendet wird, vorab zu laden.
- `imagesrcset`
  - : Nur für `rel="preload"` und `as="image"`, das `imagesrcset`-Attribut hat eine ähnliche Syntax und Semantik wie das [`srcset`](/de/docs/Web/HTML/Element/img#srcset)-Attribut, das darauf hinweist, die entsprechende Ressource, die von einem `img`-Element mit entsprechenden Werten für seine `srcset`- und `sizes`-Attribute verwendet wird, vorab zu laden.
- `integrity`
  - : Enthält Inline-Metadaten — einen base64-kodierten kryptographischen Hash der Ressource (Datei), deren Abruf durch den Browser angewiesen wird. Der Browser kann dies verwenden, um zu überprüfen, ob die abgerufene Ressource ohne unerwartete Manipulation geliefert wurde. Das Attribut muss nur angegeben werden, wenn das `rel`-Attribut auf `stylesheet`, `preload` oder `modulepreload` festgelegt ist. Siehe [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity).
- `media`

  - : Dieses Attribut gibt das Medium an, auf das sich die verknüpfte Ressource bezieht. Sein Wert muss ein Medientyp / [media query](/de/docs/Web/CSS/CSS_media_queries) sein. Dieses Attribut ist hauptsächlich nützlich, wenn auf externe Stylesheets verwiesen wird – es ermöglicht dem Nutzeragenten, das am besten geeignete für das ausgeführte Gerät auszuwählen.

- `referrerpolicy`

  - : Ein String, der angibt, welcher Referrer beim Abruf der Ressource verwendet werden soll:

    - `no-referrer` bedeutet, dass der {{HTTPHeader("Referer")}}-Header nicht gesendet wird.
    - `no-referrer-when-downgrade` bedeutet, dass kein {{HTTPHeader("Referer")}}-Header gesendet wird, wenn zu einem Ursprung ohne TLS (https) navigiert wird. Dies ist das Standardverhalten eines Benutzeragenten, wenn keine andere Richtlinie angegeben ist.
    - `origin` bedeutet, dass der Referrer der Ursprung der Seite sein wird, was grob das Schema, den Host und den Port umfasst.
    - `origin-when-cross-origin` bedeutet, dass beim Navigieren zu anderen Ursprüngen nur das Schema, der Host und der Port eingeschränkt werden, während beim Navigieren im selben Ursprung der Pfad des Referrers enthalten ist.
    - `unsafe-url` bedeutet, dass der Referrer den Ursprung und den Pfad (aber nicht das Fragment, das Passwort oder den Benutzernamen) enthält. Dieser Fall ist unsicher, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge leaken kann.

- [`rel`](/de/docs/Web/HTML/Attributes/rel)
  - : Dieses Attribut benennt eine Beziehung des verlinkten Dokuments zum aktuellen Dokument. Das Attribut muss eine durch Leerzeichen getrennte Liste von [Linktypwerten](/de/docs/Web/HTML/Attributes/rel) sein.
- `sizes`

  - : Dieses Attribut definiert die Größen der Icons für visuelle Medien, die in der Ressource enthalten sind. Es darf nur vorhanden sein, wenn das [`rel`](#rel) einen Wert von `icon` oder einen nicht standardmäßigen Typ wie Apples `apple-touch-icon` enthält. Es kann die folgenden Werte haben:

    - `any`, was bedeutet, dass das Icon in jede Größe skaliert werden kann, da es sich im Vektorformat befindet, wie `image/svg+xml`.
    - eine durch Leerzeichen getrennte Liste von Größen, jede im Format `<Breite in Pixel>x<Höhe in Pixel>` oder `<Breite in Pixel>X<Höhe in Pixel>`. Jede dieser Größen muss in der Ressource enthalten sein.

    > [!NOTE]
    > Die meisten Icon-Formate sind nur in der Lage, ein einzelnes Icon zu speichern; daher enthält das [`sizes`](#sizes)-Attribut in den meisten Fällen nur einen Eintrag. Microsofts ICO-Format und Apples ICNS-Format können mehrere Icons in verschiedenen Größen in einer einzigen Datei speichern. ICO bietet bessere Browser-Unterstützung, daher sollten Sie dieses Format verwenden, wenn Cross-Browser-Unterstützung eine Rolle spielt.

- `title`
  - : Das `title`-Attribut hat spezielle Semantiken für das `<link>`-Element. Wenn es auf ein `<link rel="stylesheet">` angewendet wird, definiert es ein [Standard- oder ein alternatives Stylesheet](/de/docs/Web/HTML/Attributes/rel/alternate_stylesheet).
- `type`
  - : Dieses Attribut wird verwendet, um den Typ des verlinkten Inhalts zu definieren. Der Wert des Attributs sollte ein MIME-Typ wie **text/html**, **text/css** usw. sein. Die häufige Verwendung dieses Attributs ist die Definition des verlinkten Stylesheets (wie **text/css**). Da CSS die einzige auf dem Web verwendete Stylesheetsprache ist, kann das `type`-Attribut nicht nur weggelassen werden, sondern seine Auslassung wird mittlerweile sogar empfohlen. Es wird auch auf `rel="preload"`-Linktypen verwendet, um sicherzustellen, dass der Browser nur Dateitypen herunterlädt, die er unterstützt.

### Nicht-standardisierte Attribute

- `target` {{Deprecated_Inline}}
  - : Definiert den Frame oder Fensternamen, der die definierte Verknüpfungsbeziehung hat oder die Wiedergabe einer verlinkten Ressource anzeigt.

### Veraltete Attribute

- `charset` {{deprecated_inline}}

  - : Dieses Attribut definiert die Zeichencodierung der verknüpften Ressource. Der Wert ist eine durch Leerzeichen und/oder Kommata getrennte Liste von Zeichensätzen, wie in {{rfc(2045)}} definiert. Der Standardwert ist `iso-8859-1`.

    > [!NOTE]
    > Um denselben Effekt wie dieses veraltete Attribut zu erzielen, verwenden Sie den {{HTTPHeader("Content-Type")}}-HTTP-Header auf der verlinkten Ressource.

- `rev` {{deprecated_inline}}

  - : Der Wert dieses Attributs zeigt die Beziehung des aktuellen Dokuments zum verlinkten Dokument an, wie es durch das [`href`](#href)-Attribut definiert ist. Das Attribut definiert damit die umgekehrte Beziehung im Vergleich zum Wert des `rel`-Attributs. [Linktyp-Werte](/de/docs/Web/HTML/Attributes/rel) für das Attribut sind ähnlich den möglichen Werten für [`rel`](#rel).

    > [!NOTE]
    > Anstelle von `rev` sollten Sie das [`rel`](#rel)-Attribut mit dem entgegengesetzten [link type value](/de/docs/Web/HTML/Attributes/rel) verwenden. Zum Beispiel, um die umgekehrte Verknüpfung für `made` zu etablieren, spezifizieren Sie `author`. Außerdem steht dieses Attribut nicht für "Revision" und darf nicht mit einer Versionsnummer verwendet werden, obwohl viele Websites dies missbräuchlich verwenden.

## Beispiele

### Ein Stylesheet einbinden

Um ein Stylesheet in eine Seite einzubinden, verwenden Sie die folgende Syntax:

```html
<link href="style.css" rel="stylesheet" />
```

### Alternative Stylesheets bereitstellen

Sie können auch [alternative Stylesheets](/de/docs/Web/HTML/Attributes/rel/alternate_stylesheet) angeben.

Der Benutzer kann wählen, welches Stylesheet er verwenden möchte, indem er es aus dem Menü **Ansicht > Seitenstil** auswählt. Dies bietet eine Möglichkeit für Benutzer, mehrere Versionen einer Seite zu sehen.

```html
<link href="default.css" rel="stylesheet" title="Default Style" />
<link href="fancy.css" rel="alternate stylesheet" title="Fancy" />
<link href="basic.css" rel="alternate stylesheet" title="Basic" />
```

### Icons für verschiedene Nutzungskontexte bereitstellen

Sie können Links zu mehreren Icons auf derselben Seite einfügen und der Browser wählt dasjenige aus, das in seinem jeweiligen Kontext am besten funktioniert, indem er die `rel`- und `sizes`-Werte als Hinweise verwendet.

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

Für Informationen darüber, welche `sizes` für Apple-Icons zu wählen sind, siehe [Apples Dokumentation zur Konfiguration von Webanwendungen](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW4) und die verlinkten [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/app-icons#App-icon-sizes). In der Regel reicht es aus, ein größeres Bild, wie 192x192, bereitzustellen und es dem Browser zu überlassen, es bei Bedarf zu skaliert, aber Sie können Bilder mit verschiedenen Detailstufen für verschiedene Größen bereitstellen, wie es die Apple Design-Richtlinien empfehlen. Das Bereitstellen kleinerer Icons für niedrigere Auflösungen spart auch Bandbreite.

Es kann unter Umständen nicht erforderlich sein, `<link>`-Elemente bereitzustellen. Zum Beispiel fordern Browser automatisch `/favicon.ico` vom Stammverzeichnis einer Seite an und Apple fordert ebenfalls automatisch `/apple-touch-icon-[size].png`, `/apple-touch-icon.png` usw. an. Wenn Sie jedoch explizite Links bereitstellen, sind Sie vor Änderungen dieser Konventionen geschützt.

### Bedingtes Laden von Ressourcen mit Media Queries

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

### Ereignisse beim Laden des Stylesheets

Sie können ermitteln, wann ein Stylesheet geladen wurde, indem Sie auf ein `load`-Ereignis achten, das darauf ausgelöst wird; ebenso können Sie feststellen, ob ein Fehler beim Verarbeiten eines Stylesheets aufgetreten ist, indem Sie auf ein `error`-Ereignis achten:

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
> Das `load`-Ereignis wird ausgelöst, nachdem das Stylesheet und alle darin importierten Inhalte geladen und analysiert wurden und unmittelbar bevor die Stile auf den Inhalt angewendet werden.

### Preload-Beispiele

Sie finden eine Reihe von `<link rel="preload">`-Beispielen im [Vorladen von Inhalten mit `rel="preload"`](/de/docs/Web/HTML/Attributes/rel/preload).

### Rendering blockieren, bis eine Ressource abgerufen wird

Sie können ein `render`-Token innerhalb eines `blocking`-Attributs einschließen; das Rendering der Seite wird blockiert, bis die Ressource abgerufen wird. Zum Beispiel:

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
        Metadaten-Inhalt. Wenn <code><a href="/de/docs/Web/HTML/Global_attributes/itemprop">itemprop</a></code> vorhanden ist:
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Fließender Inhalt</a> und
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">phrasierter Inhalt</a>.
      </td>
    </tr>
    <tr>
      <th>Erlaubter Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "Void-Element")}}.</td>
    </tr>
    <tr>
      <th>Tag-Auslassung</th>
      <td>Muss ein Starttag haben und darf keinen Endtag haben.</td>
    </tr>
    <tr>
      <th>Erlaubte Eltern</th>
      <td>
        Jedes Element, das Metadaten-Elemente akzeptiert. Wenn <a href="/de/docs/Web/HTML/Global_attributes/itemprop">itemprop</a> vorhanden ist: jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">phrasierter Inhalt</a> akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/link_role"><code>link</code></a> mit <code>href</code>-Attribut</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA Rollen</th>
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
