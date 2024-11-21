---
title: "<link>: Das External Resource Link-Element"
slug: Web/HTML/Element/link
l10n:
  sourceCommit: f10015d1752d5668d8fe0de29f9d9807de475d58
---

{{HTMLSidebar}}

Das **`<link>`** [HTML](/de/docs/Web/HTML) Element spezifiziert Beziehungen zwischen dem aktuellen Dokument und einer externen Ressource. Am häufigsten wird dieses Element verwendet, um auf {{Glossary("CSS", "Stylesheets")}} zu verweisen, doch es wird auch genutzt, um z. B. Seitenicons (sowohl "Favicon"-Stilicons als auch Icons für den Startbildschirm und Apps auf mobilen Geräten) festzulegen.

{{EmbedInteractiveExample("pages/tabbed/link.html", "tabbed-shorter")}}

Um ein externes Stylesheet zu verlinken, würden Sie ein `<link>` Element in Ihrem {{HTMLElement("head")}} einfügen, so:

```html
<link href="main.css" rel="stylesheet" />
```

Dieses Beispiel gibt den Pfad zum Stylesheet innerhalb eines `href` Attributs an und ein [`rel`](/de/docs/Web/HTML/Attributes/rel) Attribut mit dem Wert `stylesheet`. Das `rel` steht für "relationship" (Beziehung) und ist eine der Schlüsselfunktionen des `<link>` Elements — der Wert kennzeichnet, wie das verlinkte Element im Verhältnis zu dem enthaltenen Dokument steht.

Es gibt mehrere andere häufige `rel`-Typen. Zum Beispiel ein Link zum Favicon der Webseite:

```html
<link rel="icon" href="favicon.ico" />
```

Es gibt auch mehrere andere `rel`-Werte für Icons, hauptsächlich für spezielle Icon-Typen, die auf verschiedenen mobilen Plattformen verwendet werden, z. B.:

```html
<link
  rel="apple-touch-icon"
  sizes="114x114"
  href="apple-icon-114.png"
  type="image/png" />
```

Das `sizes` Attribut gibt die Icongröße an, während das `type` Attribut den MIME-Typ der verlinkten Ressource enthält. Diese Informationen liefern nützliche Hinweise, um dem Browser die Wahl des am besten geeigneten Icons zu ermöglichen.

Sie können auch einen Medientyp oder eine Abfrage innerhalb eines `media` Attributs angeben; diese Ressource wird dann nur geladen, wenn die Medienbedingung wahr ist. Zum Beispiel:

```html
<link href="print.css" rel="stylesheet" media="print" />
<link
  href="mobile.css"
  rel="stylesheet"
  media="screen and (max-width: 600px)" />
```

Einige interessante neue Leistungs- und Sicherheitsmerkmale wurden dem `<link>` Element ebenfalls hinzugefügt. Nehmen Sie zum Beispiel dieses:

```html
<link
  rel="preload"
  href="myFont.woff2"
  as="font"
  type="font/woff2"
  crossorigin="anonymous" />
```

Ein `rel` Wert von `preload` zeigt an, dass der Browser diese Ressource vorladen sollte (siehe [`rel="preload"`](/de/docs/Web/HTML/Attributes/rel/preload) für weitere Details), wobei das `as` Attribut die spezifische Klasse des geladenen Inhalts angibt. Das `crossorigin` Attribut zeigt an, ob die Ressource mit einer {{Glossary("CORS", "CORS")}} Anfrage abgerufen werden soll.

Weitere Nutzungshinweise:

- Ein `<link>` Element kann entweder im {{HTMLElement("head")}} oder {{HTMLElement("body")}} Element vorkommen, abhängig davon, ob es einen [link type](https://html.spec.whatwg.org/multipage/links.html#body-ok) hat, der **body-ok** ist. Zum Beispiel ist der `stylesheet` Link-Typ body-ok, und daher ist `<link rel="stylesheet">` im Body erlaubt. Dies ist jedoch keine gute Praxis; es ist sinnvoller, Ihre `<link>` Elemente von Ihrem Body-Inhalt zu trennen und sie in den `<head>` zu setzen.
- Wenn Sie `<link>` verwenden, um ein Favicon für eine Seite festzulegen, und Ihre Seite verwendet eine Content Security Policy (CSP) zur Erhöhung der Sicherheit, gilt die Richtlinie auch für das Favicon. Wenn Sie Probleme damit haben, dass das Favicon nicht geladen wird, stellen Sie sicher, dass die {{HTTPHeader("Content-Security-Policy")}} Kopfzeile's [`img-src` directive](/de/docs/Web/HTTP/Headers/Content-Security-Policy/img-src) den Zugriff darauf nicht verhindert.
- Die HTML- und XHTML-Spezifikationen definieren Event-Handler für das `<link>` Element, aber es ist unklar, wie sie verwendet werden würden.
- Unter XHTML 1.0 müssen {{Glossary("void_element", "void elements")}} wie `<link>` einen abschließenden Schrägstrich haben: `<link />`.
- WebTV unterstützt die Verwendung des Werts `next` für `rel`, um die nächste Seite in einer Dokumentenreihe vorzubereiten.

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `as`

  - : Dieses Attribut ist erforderlich, wenn [`rel="preload"`](/de/docs/Web/HTML/Attributes/rel/preload) im `<link>` Element gesetzt wurde, optional wenn [`rel="modulepreload"`](/de/docs/Web/HTML/Attributes/rel/modulepreload) gesetzt wurde, und sollte ansonsten nicht verwendet werden. Es spezifiziert den Typ des Inhalts, der durch das `<link>` geladen wird, was notwendig ist für das Anforderungs-Matching, Anwendung korrekter [Content-Security-Policy](/de/docs/Web/HTTP/CSP) und das Setzen des korrekten {{HTTPHeader("Accept")}} Anforderungs-Headers.

    Des Weiteren wird `rel="preload"` als Signal für die Anforderungspriorisierung verwendet. Die Tabelle unten listet die gültigen Werte für dieses Attribut und die Elemente oder Ressourcen, auf die sie angewendet werden, auf.

    <table class="standard-table">
      <thead>
        <tr>
          <th scope="col">Wert</th>
          <th scope="col">Bezieht sich auf</th>
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
                <strong>Hinweis:</strong> Dieser Wert erfordert ebenfalls, dass
                <code>&#x3C;link></code> das crossorigin-Attribut enthält, siehe <a href="/de/docs/Web/HTML/Attributes/rel/preload#cors-enabled_fetches">CORS-fähige Abrufe</a>.
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
                <strong>Hinweis:</strong> Dieser Wert erfordert ebenfalls, dass
                <code>&#x3C;link></code> das crossorigin-Attribut enthält, siehe <a href="/de/docs/Web/HTML/Attributes/rel/preload#cors-enabled_fetches">CORS-fähige Abrufe</a>.
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

  - : Dieses Attribut gibt explizit an, dass bestimmte Operationen beim Abruf einer externen Ressource blockiert werden sollen. Es muss nur verwendet werden, wenn das `rel` Attribut die Schlüsselwörter `expect` oder `stylesheet` enthält. Die Operationen, die blockiert werden sollen, müssen eine durch Leerzeichen getrennte Liste der unten aufgeführten Blockierungstokens sein.
    - `render`: Die Darstellung des Inhalts auf dem Bildschirm wird blockiert.

- [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)

  - : Dieses {{Glossary("Enumerated", "aufzählbare")}} Attribut gibt an, ob {{Glossary("CORS", "CORS")}} verwendet werden muss, wenn die Ressource abgerufen wird.
    [CORS-fähige Bilder](/de/docs/Web/HTML/CORS_enabled_image) können im {{HTMLElement("canvas")}} Element verwendet werden, ohne _verunreinigt_ zu werden.
    Die erlaubten Werte sind:

    - `anonymous`
      - : Eine Cross-Origin-Anfrage (d. h. mit einem {{HTTPHeader("Origin")}} HTTP-Header) wird durchgeführt, aber keine Berechtigung wird gesendet (d. h. kein Cookie, kein X.509-Zertifikat oder keine HTTP-Basis-Authentifizierung).
        Wenn der Server keine Berechtigungen an die Ursprungsseite gibt (indem er den {{HTTPHeader("Access-Control-Allow-Origin")}} HTTP-Header nicht setzt), wird die Ressource verunreinigt und ihre Verwendung eingeschränkt.
    - `use-credentials`
      - : Eine Cross-Origin-Anfrage (d. h. mit einem `Origin` HTTP-Header) wird zusammen mit einer gesendeten Berechtigung (d. h. ein Cookie, Zertifikat und/oder HTTP-Basis-Authentifizierung wird durchgeführt) gesendet.
        Wenn der Server keine Berechtigungen an die Ursprungsseite gibt (durch {{HTTPHeader("Access-Control-Allow-Credentials")}} HTTP-Header), wird die Ressource _verunreinigt_ und ihre Verwendung eingeschränkt.

    Ist das Attribut nicht vorhanden, wird die Ressource ohne eine {{Glossary("CORS", "CORS")}} Anfrage (d. h. ohne Senden des `Origin` HTTP-Headers) abgerufen, was ihre unverunreinigte Verwendung verhindert. Wenn es ungültig ist, wird es so behandelt, als ob das aufgezählte Schlüsselwort **anonymous** verwendet wurde.
    Siehe [CORS Einstellungen Attribute](/de/docs/Web/HTML/Attributes/crossorigin) für zusätzliche Informationen.

- `disabled`

  - : Nur für `rel="stylesheet"` gilt das `disabled` Boolean-Attribut an, ob das beschriebene Stylesheet geladen und auf das Dokument angewendet werden soll.
    Wenn `disabled` im HTML angegeben ist, wenn es geladen wird, wird das Stylesheet während des Seitenladens nicht geladen.
    Stattdessen wird das Stylesheet auf Abruf geladen, wenn und wenn das `disabled` Attribut auf `false` geändert oder entfernt wird.

    Das Setzen der `disabled` Eigenschaft im DOM verursacht, dass das Stylesheet von der [`Document.styleSheets`](/de/docs/Web/API/Document/styleSheets) Liste des Dokuments entfernt wird.

- `fetchpriority`

  - : Bietet einen Hinweis auf die relative Priorität, die beim Abrufen einer Ressource eines bestimmten Typs verwendet werden soll.
    Erlaubte Werte:

    - `high`
      - : Die Ressource mit hoher Priorität relativ zu anderen Ressourcen desselben Typs abrufen.
    - `low`
      - : Die Ressource mit niedriger Priorität relativ zu anderen Ressourcen desselben Typs abrufen.
    - `auto`
      - : Keine Präferenz für die Abrufpriorität festlegen.
        Dies ist der Standard.
        Es wird verwendet, wenn kein Wert oder ein ungültiger Wert gesetzt ist.

    Siehe [`HTMLLinkElement.fetchPriority`](/de/docs/Web/API/HTMLLinkElement/fetchPriority) für weitere Informationen.

- `href`
  - : Dieses Attribut gibt die {{Glossary("URL", "URL")}} der verlinkten Ressource an. Eine URL kann absolut oder relativ sein.
- `hreflang`
  - : Dieses Attribut gibt die Sprache der verlinkten Ressource an.
    Es ist rein beratend.
    Erlaubte Werte sind von {{RFC(5646, "Tags for Identifying Languages (also known as BCP 47)")}} spezifiziert.
    Verwenden Sie dieses Attribut nur, wenn das [`href`](/de/docs/Web/HTML/Element/a#href) Attribut vorhanden ist.
- `imagesizes`
  - : Nur für `rel="preload"` und `as="image"`, hat das `imagesizes` Attribut eine ähnliche Syntax und Semantik wie das [`sizes`](/de/docs/Web/HTML/Element/img#sizes) Attribut, das darauf hinweist, dass die entsprechende Ressource, die von einem `img` Element mit entsprechenden Werten für seine `srcset` und `sizes` Attribute verwendet wird, vorgeladen wird.
- `imagesrcset`
  - : Nur für `rel="preload"` und `as="image"`, hat das `imagesrcset` Attribut eine ähnliche Syntax und Semantik wie das [`srcset`](/de/docs/Web/HTML/Element/img#srcset) Attribut, das darauf hinweist, dass die entsprechende Ressource, die von einem `img` Element mit entsprechenden Werten für seine `srcset` und `sizes` Attribute verwendet wird, vorgeladen wird.
- `integrity`
  - : Enthält Inline-Metadaten — ein base64-kodierter kryptographischer Hash der Ressource (Datei), die Sie dem Browser zum Abrufen angeben.
    Der Browser kann dies verwenden, um zu überprüfen, ob die abgerufene Ressource ohne unerwartete Manipulation geliefert wurde.
    Das Attribut darf nur angegeben werden, wenn das `rel` Attribut auf `stylesheet`, `preload` oder `modulepreload` gesetzt ist.
    Siehe [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity).
- `media`

  - : Dieses Attribut spezifiziert die Medien, auf die die verlinkte Ressource angewendet wird. Sein Wert muss ein Medientyp / [media query](/de/docs/Web/CSS/CSS_media_queries) sein.
    Dieses Attribut ist hauptsächlich nützlich beim Verlinken zu externen Stylesheets — es erlaubt dem User-Agent, das am besten angepasste für das Gerät, auf dem es läuft, auszuwählen.

- `referrerpolicy`

  - : Ein String, der angibt, welcher Referrer verwendet werden soll, wenn die Ressource abgerufen wird:

    - `no-referrer` bedeutet, dass der {{HTTPHeader("Referer")}} Header nicht gesendet wird.
    - `no-referrer-when-downgrade` bedeutet, dass kein {{HTTPHeader("Referer")}} Header gesendet wird, wenn zu einem Ursprung ohne TLS (HTTPS) navigiert wird.
      Dies ist das Standardverhalten eines User-Agents, wenn keine andere Richtlinie angegeben wird.
    - `origin` bedeutet, dass der Referrer der Ursprung der Seite sein wird, was grob das Schema, der Host und der Port ist.
    - `origin-when-cross-origin` bedeutet, dass die Navigation zu anderen Ursprüngen auf das Schema, den Host und den Port beschränkt wird, während die Navigation auf demselben Ursprung den Pfad des Referrers beinhaltet.
    - `unsafe-url` bedeutet, dass der Referrer den Ursprung und den Pfad (aber nicht das Fragment, das Passwort oder den Benutzernamen) enthält.
      Dieser Fall ist unsicher, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge leaken kann.

- [`rel`](/de/docs/Web/HTML/Attributes/rel)
  - : Dieses Attribut benennt eine Beziehung des verlinkten Dokuments zum aktuellen Dokument. Das Attribut muss eine durch Leerzeichen getrennte Liste von [Link-Typ-Werten](/de/docs/Web/HTML/Attributes/rel) sein.
- `sizes`

  - : Dieses Attribut definiert die Größen der Icons für visuelle Medien, die in der Ressource enthalten sind.
    Es muss nur vorhanden sein, wenn das [`rel`](#rel) einen Wert von `icon` oder einen nicht-standardmäßigen Typ wie Apple's `apple-touch-icon` enthält.
    Es kann die folgenden Werte haben:

    - `any`, was bedeutet, dass das Icon auf jede Größe skaliert werden kann, da es in einem Vektorformat wie `image/svg+xml` vorliegt.
    - eine durch Leerzeichen getrennte Liste von Größen, jede im Format `<Breite in Pixel>x<Höhe in Pixel>` oder `<Breite in Pixel>X<Höhe in Pixel>`. Jede dieser Größen muss in der Ressource enthalten sein.

    > [!NOTE]
    > Die meisten Icon-Formate sind nur in der Lage, ein einzelnes Icon zu speichern; daher enthält das [`sizes`](#sizes) Attribut meistens nur einen Eintrag.
    > Microsoft's ICO-Format und Apple's ICNS-Format können mehrere Icon-Größen in einer einzigen Datei speichern. ICO hat eine bessere Browser-Unterstützung, daher sollten Sie dieses Format verwenden, wenn die plattformübergreifende Unterstützung ein Anliegen ist.

- `title`
  - : Das `title` Attribut hat spezielle Semantik auf dem `<link>` Element.
    Wenn es auf einem `<link rel="stylesheet">` verwendet wird, definiert es ein [Standard-oder alternatives Stylesheet](/de/docs/Web/CSS/Alternative_style_sheets).
- `type`
  - : Dieses Attribut wird verwendet, um den Typ des verlinkten Inhalts zu definieren.
    Der Wert des Attributs sollte ein MIME-Typ wie **text/html**, **text/css** usw. sein.
    Der gebräuchliche Gebrauch dieses Attributs ist um den Typ des referenzierten Stylesheets zu definieren (wie **text/css**), aber da CSS die einzige Stylesheetsprache ist, die im Web verwendet wird, ist es nicht nur möglich, das `type` Attribut wegzulassen, sondern es wird tatsächlich jetzt empfohlen, es nicht zu verwenden.
    Es wird auch auf `rel="preload"` Link-Typen verwendet, um sicherzustellen, dass der Browser nur Dateitypen herunterlädt, die er unterstützt.

### Nicht-standardmäßige Attribute

- `target` {{Deprecated_Inline}}
  - : Definiert den Frame- oder Fensternamen, der die definierte Verlinkungsbeziehung hat oder der die Darstellung einer verlinkten Ressource zeigt.

### Veraltete Attribute

- `charset` {{deprecated_inline}}

  - : Dieses Attribut definiert die Zeichenkodierung der verlinkten Ressource.
    Der Wert ist eine durch Leerzeichen und/oder Kommas getrennte Liste von Zeichensätzen, wie in {{rfc(2045)}} definiert.
    Der Standardwert ist `iso-8859-1`.

    > [!NOTE]
    > Um den gleichen Effekt wie dieses veraltete Attribut zu erzielen, verwenden Sie den {{HTTPHeader("Content-Type")}} HTTP-Header auf der verlinkten Ressource.

- `rev` {{deprecated_inline}}

  - : Der Wert dieses Attributs zeigt die Beziehung des aktuellen Dokuments zum verlinkten Dokument, wie durch das [`href`](#href) Attribut definiert, an.
    Das Attribut definiert somit die umgekehrte Beziehung im Vergleich zum Wert des `rel` Attributs.
    [Verlinkungstyp-Werte](/de/docs/Web/HTML/Attributes/rel) für das Attribut sind ähnlich den möglichen Werten für [`rel`](#rel).

    > [!NOTE]
    > Anstelle von `rev` sollten Sie das [`rel`](#rel) Attribut mit dem entgegengesetzten [Verlinkungstyp-Wert](/de/docs/Web/HTML/Attributes/rel) verwenden.
    > Zum Beispiel, um die umgekehrte Verbindung für `made` herzustellen, spezifizieren Sie `author`. Außerdem steht dieses Attribut nicht für "Revision" und darf nicht mit einer Versionsnummer verwendet werden, selbst wenn viele Seiten es auf diese Weise missbrauchen.

## Beispiele

### Einbinden eines Stylesheets

Um ein Stylesheet in eine Seite einzubinden, verwenden Sie folgende Syntax:

```html
<link href="style.css" rel="stylesheet" />
```

### Bereitstellung alternativer Stylesheets

Sie können auch [alternative Stylesheets](/de/docs/Web/CSS/Alternative_style_sheets) festlegen.

Der Benutzer kann auswählen, welches Stylesheet verwendet werden soll, indem er es im Menü **Ansicht > Seitenstil** auswählt. Dies bietet eine Möglichkeit, mehrere Versionen einer Seite anzuzeigen.

```html
<link href="default.css" rel="stylesheet" title="Default Style" />
<link href="fancy.css" rel="alternate stylesheet" title="Fancy" />
<link href="basic.css" rel="alternate stylesheet" title="Basic" />
```

### Bereitstellung von Icons für unterschiedliche Nutzungskontexte

Sie können Links zu mehreren Icons auf derselben Seite einfügen, und der Browser wählt aus, welches in seinem bestimmten Kontext am besten funktioniert, indem er `rel` und `sizes` Werte als Hinweise verwendet.

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

Für Informationen darüber, welche `sizes` für Apple-Icons gewählt werden sollten, siehe [Apples Dokumentation zur Konfiguration von Webanwendungen](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW4) und die referenzierten [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/app-icons#App-icon-sizes). In der Regel reicht es aus, ein großes Bild, wie 192x192, bereitzustellen und den Browser es nach Bedarf herunterskalieren zu lassen, aber Sie können auch Bilder mit unterschiedlichen Detailstufen für verschiedene Größen bereitstellen, wie in den Apple-Designrichtlinien empfohlen wird. Kleinere Icons für niedrigere Auflösungen bereitzustellen, spart auch Bandbreite.

Es kann nicht erforderlich sein, `<link>` Elemente bereitzustellen. Zum Beispiel fordern Browser automatisch `/favicon.ico` vom Stamm einer Seite an, und Apple fordert auch automatisch `/apple-touch-icon-[size].png`, `/apple-touch-icon.png` usw. an. Jedoch schützt ein explizites Einrichten von Links gegen Änderungen dieser Konventionen.

### Bedingtes Laden von Ressourcen mit Medienabfragen

Sie können einen Medientyp oder eine Abfrage innerhalb eines `media` Attributs angeben;
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

### Stylesheet Ladeereignisse

Sie können bestimmen, wann ein Stylesheet geladen wurde, indem Sie ein `load` Ereignis überwachen, das darauf ausgelöst wird; ähnlich können Sie feststellen, ob ein Fehler beim Verarbeiten eines Stylesheets aufgetreten ist, indem Sie ein `error` Ereignis überwachen:

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
> Das `load` Ereignis wird ausgelöst, sobald das Stylesheet und alle importierten Inhalte geladen und geparst sind, und unmittelbar bevor die Stile auf den Inhalt angewendet werden.

### Preload-Beispiele

Sie können eine Reihe von `<link rel="preload">` Beispielen in [Inhalte mit `rel="preload"` vorladen](/de/docs/Web/HTML/Attributes/rel/preload) finden.

### Rendern blockieren, bis eine Ressource abgerufen wird

Sie können das `render` Token innerhalb eines `blocking` Attributs einfügen;
das Rendern der Seite wird blockiert, bis die Ressource abgerufen wird. Zum Beispiel:

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
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Fließinhalt</a> und
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Satzinhalt</a>.
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
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Satzinhalt</a> akzeptiert.
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
