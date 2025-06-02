---
title: "<link>: Das Verknüpfungselement für externe Ressourcen"
slug: Web/HTML/Reference/Elements/link
l10n:
  sourceCommit: fc52eb81b630ca02c16addc346924295bdb5aaa8
---

{{HTMLSidebar}}

Das **`<link>`** [HTML](/de/docs/Web/HTML) Element spezifiziert Beziehungen zwischen dem aktuellen Dokument und einer externen Ressource.
Dieses Element wird am häufigsten verwendet, um auf {{Glossary("CSS", "Stylesheets")}} zu verweisen, es wird jedoch auch verwendet, um Site-Icons (sowohl "Favicon"-Stil-Icons als auch Icons für den Home-Bildschirm und Apps auf mobilen Geräten) sowie andere Dinge zu definieren.

{{InteractiveExample("HTML Demo: &lt;link&gt;", "tabbed-shorter")}}

```html interactive-example
<link href="/shared-assets/misc/link-element-example.css" rel="stylesheet" />

<p>This text will be red as defined in the external stylesheet.</p>
<p style="color: blue">
  The <code>style</code> attribute can override it, though.
</p>
```

Um ein externes Stylesheet zu verknüpfen, sollten Sie ein `<link>` Element in Ihrem {{HTMLElement("head")}} wie folgt einfügen:

```html
<link href="main.css" rel="stylesheet" />
```

Dieses Beispiel liefert den Pfad zum Stylesheet innerhalb eines `href`-Attributs und einem [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)-Attribut mit dem Wert `stylesheet`. Das `rel` steht für "relationship" (Beziehung) und ist eines der Hauptmerkmale des `<link>` Elements — der Wert gibt an, wie das verknüpfte Element zum enthaltenen Dokument in Beziehung steht.

Es gibt einige andere häufige Typen, mit denen Sie möglicherweise konfrontiert werden. Zum Beispiel ein Link zum Favicon der Site:

```html
<link rel="icon" href="favicon.ico" />
```

Es gibt eine Reihe anderer Icon-`rel`-Werte, die hauptsächlich verwendet werden, um besondere Icon-Typen für verschiedene mobile Plattformen anzugeben, z.B.:

```html
<link
  rel="apple-touch-icon"
  sizes="114x114"
  href="apple-icon-114.png"
  type="image/png" />
```

Das `sizes`-Attribut gibt die Icon-Größe an, während `type` den MIME-Typ der verknüpften Ressource enthält.
Diese liefern nützliche Hinweise, um es dem Browser zu ermöglichen, das am besten geeignete verfügbare Icon auszuwählen.

Sie können auch einen Medientyp oder eine Abfrage innerhalb eines `media`-Attributs angeben; diese Ressource wird dann nur geladen, wenn die Medienbedingung wahr ist. Zum Beispiel:

```html
<link href="print.css" rel="stylesheet" media="print" />
<link
  href="mobile.css"
  rel="stylesheet"
  media="screen and (max-width: 600px)" />
```

Einige interessante neue Leistungs- und Sicherheitsfunktionen wurden ebenfalls zum `<link>`-Element hinzugefügt. Sehen Sie sich dieses Beispiel an:

```html
<link
  rel="preload"
  href="myFont.woff2"
  as="font"
  type="font/woff2"
  crossorigin="anonymous" />
```

Ein `rel`-Wert von `preload` gibt an, dass der Browser diese Ressource vorladen soll (siehe [`rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload) für weitere Details), wobei das `as`-Attribut die spezifische Klasse des abgerufenen Inhalts angibt.
Das Attribut `crossorigin` gibt an, ob die Ressource mit einer {{Glossary("CORS", "CORS")}}-Anfrage abgerufen werden sollte.

Weitere Nutzungshinweise:

- Ein `<link>`-Element kann entweder im {{HTMLElement("head")}} oder im {{HTMLElement("body")}}-Element auftreten, abhängig davon, ob es einen [link type](https://html.spec.whatwg.org/multipage/links.html#body-ok) besitzt, der **body-ok** ist.
  Zum Beispiel ist der `stylesheet`-Linktyp body-ok, und daher ist `<link rel="stylesheet">` im Body erlaubt.
  Dies ist jedoch keine gute Praxis; es macht mehr Sinn, Ihre `<link>`-Elemente von Ihrem Body-Inhalt zu trennen und sie in den `<head>` zu setzen.
- Wenn `<link>` verwendet wird, um ein Favicon für eine Website zu definieren und Ihre Seite eine Content Security Policy (CSP) nutzt, um deren Sicherheit zu erhöhen, gilt die Richtlinie für das Favicon.
  Wenn Probleme auftreten, bei denen das Favicon nicht geladen wird, überprüfen Sie, dass der {{HTTPHeader("Content-Security-Policy")}}-Header mit der [`img-src`-Direktive](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/img-src) den Zugriff nicht verhindert.
- Die HTML- und XHTML-Spezifikationen definieren Ereignishandler für das `<link>`-Element, aber es ist unklar, wie sie verwendet würden.
- Unter XHTML 1.0 erfordern {{Glossary("void_element", "void-Elemente")}} wie `<link>` einen abschließenden Schrägstrich: `<link />`.
- WebTV unterstützt die Verwendung des Werts `next` für `rel`, um die nächste Seite in einer Dokumentreihe vorzuladen.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `as`

  - : Dieses Attribut ist erforderlich, wenn [`rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload) auf dem `<link>`-Element gesetzt wurde, optional, wenn [`rel="modulepreload"`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload) gesetzt wurde, und sollte andernfalls nicht verwendet werden.
    Es spezifiziert den Typ des Inhalts, der durch das `<link>` geladen wird, was für die Anforderungsübereinstimmung, die Anwendung der korrekten [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) und das Setzen des korrekten {{HTTPHeader("Accept")}}-Anforderungs-Headers notwendig ist.

    Darüber hinaus verwendet `rel="preload"` dies als Signal für die Anforderungspriorisierung.
    Die folgende Tabelle listet die gültigen Werte für dieses Attribut und die Elemente oder Ressourcen auf, auf die sie angewendet werden:

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
                <code>&#x3C;link></code> das crossorigin-Attribut enthält, siehe <a href="/de/docs/Web/HTML/Reference/Attributes/rel/preload#cors-enabled_fetches">CORS-fähige Abrufe</a>.
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
                <code>&#x3C;link></code> das crossorigin-Attribut enthält, siehe <a href="/de/docs/Web/HTML/Reference/Attributes/rel/preload#cors-enabled_fetches">CORS-fähige Abrufe</a>.
              </p>
            </div>
          </td>
        </tr>
        <tr>
          <td>image</td>
          <td>
            <code>&#x3C;img></code> und <code>&#x3C;picture></code>-Elemente mit
            srcset oder imageset Attributen, SVG <code>&#x3C;image></code>-Elemente,
            CSS <code>*-image</code> Regeln
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

  - : Dieses Attribut gibt explizit an, dass bestimmte Operationen beim Abrufen einer externen Ressource blockiert werden sollten. Es darf nur verwendet werden, wenn das `rel`-Attribut die Schlüsselwörter `expect` oder `stylesheet` enthält. Die zu blockierenden Operationen müssen eine durch Leerzeichen getrennte Liste von unten aufgeführten Blockierungs-Token sein.
    - `render`: Das Rendern des Inhalts auf dem Bildschirm wird blockiert.

- [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)

  - : Dieses {{Glossary("Enumerated", "aufgezählte")}} Attribut gibt an, ob {{Glossary("CORS", "CORS")}} verwendet werden muss, wenn die Ressource abgerufen wird.
    [CORS-fähige Bilder](/de/docs/Web/HTML/How_to/CORS_enabled_image) können im {{HTMLElement("canvas")}}-Element wiederverwendet werden, ohne _verunreinigt_ zu werden.
    Die zulässigen Werte sind:

    - `anonymous`
      - : Eine cross-origin Anfrage (d.h. mit einem {{HTTPHeader("Origin")}} HTTP-Header) wird durchgeführt, aber es werden keine Anmeldedaten gesendet (d.h. kein Cookie, X.509-Zertifikat oder HTTP-Basic-Authentifizierung).
        Wenn der Server dem originierenden Standort keine Anmeldedaten gibt (indem er den {{HTTPHeader("Access-Control-Allow-Origin")}}-HTTP-Header nicht setzt), wird die Ressource verunreinigt und die Nutzung eingeschränkt.
    - `use-credentials`
      - : Eine cross-origin Anfrage (d.h. mit einem `Origin`-HTTP-Header) wird durchgeführt sowie eine Anmeldeinformation gesendet (d.h. ein Cookie, Zertifikat und/oder HTTP-Basic-Authentifizierung wird durchgeführt).
        Wenn der Server die Anmeldedaten nicht an den originären Standort liefert (durch den {{HTTPHeader("Access-Control-Allow-Credentials")}}-HTTP-Header), wird die Ressource _verunreinigt_ und die Nutzung eingeschränkt.

    Wenn das Attribut nicht vorhanden ist, wird die Ressource ohne eine {{Glossary("CORS", "CORS")}}-Anfrage abgerufen (d.h. ohne den `Origin`-HTTP-Header zu senden), was ihre untainted Nutzung verhindert. Wenn ungültig, wird es so behandelt, als ob das aufgezählte Schlüsselwort **anonymous** verwendet wurde.
    Siehe [CORS-Einstellungen Attribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin) für zusätzliche Informationen.

- `disabled`

  - : Für `rel="stylesheet"` nur zeigt das `disabled`-Boolean-Attribut an, ob das beschriebene Stylesheet geladen und auf das Dokument angewendet werden soll.
    Wenn `disabled` im HTML angegeben wird, wenn es geladen wird, wird das Stylesheet nicht während des Seitenladens geladen.
    Stattdessen wird das Stylesheet auf Abruf geladen, wenn und wenn das `disabled`-Attribut auf `false` geändert oder entfernt wird.

    Das Setzen der `disabled`-Eigenschaft im DOM entfernt das Stylesheet aus der [`Document.styleSheets`](/de/docs/Web/API/Document/styleSheets) Liste des Dokuments.

- `fetchpriority`

  - : Bietet einen Hinweis auf die relative Priorität, die verwendet werden soll, wenn eine Ressource eines bestimmten Typs abgerufen wird.
    Zulässige Werte:

    - `high`
      - : Rufen Sie die Ressource mit hoher Priorität im Verhältnis zu anderen Ressourcen des gleichen Typs ab.
    - `low`
      - : Rufen Sie die Ressource mit niedriger Priorität im Verhältnis zu anderen Ressourcen des gleichen Typs ab.
    - `auto`
      - : Setzen Sie keine Präferenz für die Abrufpriorität.
        Dies ist der Standard.
        Es wird verwendet, wenn kein Wert oder ein ungültiger Wert gesetzt ist.

    Siehe [`HTMLLinkElement.fetchPriority`](/de/docs/Web/API/HTMLLinkElement/fetchPriority) für weitere Informationen.

- `href`
  - : Dieses Attribut gibt die {{Glossary("URL", "URL")}} der verlinkten Ressource an. Eine URL kann absolut oder relativ sein.
- `hreflang`
  - : Dieses Attribut gibt die Sprache der verlinkten Ressource an.
    Es ist rein beratend.
    Erlaubte Werte sind spezifiziert durch {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}}.
    Verwenden Sie dieses Attribut nur, wenn das [`href`](/de/docs/Web/HTML/Reference/Elements/a#href)-Attribut vorhanden ist.
- `imagesizes`
  - : Für `rel="preload"` und `as="image"` nur hat das `imagesizes`-Attribut eine ähnliche Syntax und Semantik wie das [`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes)-Attribut, das angibt, die entsprechende Ressource vorzuhalten, die von einem `img`-Element mit entsprechenden Werten für seine `srcset`- und `sizes`-Attribute verwendet wird.
- `imagesrcset`
  - : Für `rel="preload"` und `as="image"` nur hat das `imagesrcset`-Attribut eine ähnliche Syntax und Semantik wie das [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset)-Attribut, das angibt, die entsprechende Ressource vorzuhalten, die von einem `img`-Element mit entsprechenden Werten für seine `srcset`- und `sizes`-Attribute verwendet wird.
- `integrity`
  - : Enthält Inline-Metadaten — einen base64-codierten kryptografischen Hash der Ressource (Datei), die Sie dem Browser zum Abrufen angeben.
    Der Browser kann dies verwenden, um zu überprüfen, dass die abgerufene Ressource ohne unerwartete Manipulationen zugestellt wurde.
    Das Attribut darf nur angegeben werden, wenn das `rel`-Attribut auf `stylesheet`, `preload` oder `modulepreload` gesetzt ist.
    Siehe [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity).
- `media`

  - : Dieses Attribut spezifiziert die Medien, auf die sich die verlinkte Ressource bezieht. Der Wert muss ein Medientyp / [Medienabfrage](/de/docs/Web/CSS/CSS_media_queries) sein.
    Dieses Attribut ist hauptsächlich nützlich, wenn auf externe Stylesheets verwiesen wird — es ermöglicht dem Benutzeragenten, das am besten angepasste für das Gerät, auf dem es läuft, auszuwählen.

- `referrerpolicy`

  - : Ein Zeichenfolgenwert, der angibt, welcher Referrer beim Abrufen der Ressource verwendet werden soll:

    - `no-referrer` bedeutet, dass der {{HTTPHeader("Referer")}}-Header nicht gesendet wird.
    - `no-referrer-when-downgrade` bedeutet, dass kein {{HTTPHeader("Referer")}}-Header gesendet wird, wenn zu einem Ursprung ohne TLS (HTTPS) navigiert wird.
      Dies ist das Standardverhalten eines Benutzeragenten, wenn keine andere Richtlinie angegeben ist.
    - `origin` bedeutet, dass der Referrer der Ursprung der Seite ist, was ungefähr dem Schema, dem Host und dem Port entspricht.
    - `origin-when-cross-origin` bedeutet, dass das Navigieren zu anderen Ursprüngen auf Schema, Host und Port beschränkt ist, während das Navigieren auf demselben Ursprung den Pfad des Referrers einschließt.
    - `unsafe-url` bedeutet, dass der Referrer den Ursprung und den Pfad einschließt (aber nicht das Fragment, das Passwort oder den Benutzernamen).
      Dieser Fall ist unsicher, da er Ursprünge und Pfade von TLS-geschützten Ressourcen zu unsicheren Ursprüngen weiterleiten kann.

- [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)
  - : Dieses Attribut benennt eine Beziehung des verlinkten Dokuments zum aktuellen Dokument. Das Attribut muss eine durch Leerzeichen getrennte Liste von [Linktyp-Werten](/de/docs/Web/HTML/Reference/Attributes/rel) sein.
- `sizes`

  - : Dieses Attribut definiert die Größen der Icons für visuelle Medien, die in der Ressource enthalten sind.
    Es darf nur vorhanden sein, wenn das [`rel`](#rel) einen Wert von `icon` oder einen nicht standardisierten Typ wie Apples `apple-touch-icon` enthält.
    Es kann folgende Werte haben:

    - `any`, was bedeutet, dass das Icon auf jede Größe skaliert werden kann, da es sich im Vektorformat befindet, wie z.B. `image/svg+xml`.
    - eine durch Leerzeichen getrennte Liste von Größen, jeweils im Format `<Breite in Pixel>x<Höhe in Pixel>` oder `<Breite in Pixel>X<Höhe in Pixel>`. Jede dieser Größen muss in der Ressource enthalten sein.

    > [!NOTE]
    > Die meisten Icon-Formate sind nur in der Lage, ein einzelnes Icon zu speichern; daher enthält das [`sizes`](#sizes)-Attribut meistens nur einen Eintrag.
    > Microsofts ICO-Format und Apples ICNS-Format können mehrere Icon-Größen in einer einzigen Datei speichern. ICO hat bessere Browser-Unterstützung, daher sollten Sie dieses Format verwenden, wenn plattformübergreifende Unterstützung von Bedeutung ist.

- `title`
  - : Das `title`-Attribut hat besondere Semantik auf dem `<link>`-Element.
    Wenn es auf einem `<link rel="stylesheet">` verwendet wird, definiert es ein [standardmäßiges oder alternatives Stylesheet](/de/docs/Web/HTML/Reference/Attributes/rel/alternate_stylesheet).
- `type`
  - : Dieses Attribut wird verwendet, um den Typ des verlinkten Inhalts zu definieren.
    Der Wert des Attributs sollte ein MIME-Typ wie **text/html**, **text/css** usw. sein.
    Der häufigste Gebrauch dieses Attributs ist die Definition des Typs des referenzierten Stylesheets (wie **text/css**), aber da CSS die einzige Stylesheet-Sprache ist, die im Web verwendet wird, ist es nicht nur möglich, das `type`-Attribut wegzulassen, sondern es wird nun tatsächlich als empfohlene Praxis angesehen.
    Es wird auch bei `rel="preload"` Linktypen verwendet, um sicherzustellen, dass der Browser nur Dateitypen herunterlädt, die er unterstützt.

### Nicht standardisierte Attribute

- `target` {{Deprecated_Inline}}
  - : Definiert den Frame oder das Fenster, das die definierte Verknüpfungsbeziehung hat oder das die Darstellung einer verknüpften Ressource anzeigen wird.

### Veraltete Attribute

- `charset` {{deprecated_inline}}

  - : Dieses Attribut definiert die Zeichenkodierung der verlinkten Ressource.
    Der Wert ist eine durch Leerzeichen und/oder Kommas getrennte Liste von Zeichensätzen wie in {{rfc(2045)}} definiert.
    Der Standardwert ist `iso-8859-1`.

    > [!NOTE]
    > Um denselben Effekt wie dieses veraltete Attribut zu erzielen, verwenden Sie den {{HTTPHeader("Content-Type")}} HTTP-Header auf der verlinkten Ressource.

- `rev` {{deprecated_inline}}

  - : Der Wert dieses Attributs zeigt die Beziehung des aktuellen Dokuments zum verlinkten Dokument, wie durch das [`href`](#href)-Attribut definiert.
    Das Attribut definiert also die umgekehrte Beziehung im Vergleich zum Wert des `rel`-Attributes.
    [Linktyp-Werte](/de/docs/Web/HTML/Reference/Attributes/rel) für das Attribut sind ähnlich wie die möglichen Werte für [`rel`](#rel).

    > [!NOTE]
    > Statt `rev` sollten Sie das [`rel`](#rel)-Attribut mit dem entgegengesetzten [Linktyp-Wert](/de/docs/Web/HTML/Reference/Attributes/rel) verwenden.
    > Um beispielsweise die Reverse-Verknüpfung für `made` zu erstellen, geben Sie `author` an. Außerdem steht dieses Attribut nicht für "Revision" und darf nicht mit einer Versionsnummer verwendet werden, obwohl viele Seiten es fälschlicherweise auf diese Weise verwenden.

## Beispiele

### Einbinden eines Stylesheets

Um ein Stylesheet in eine Seite einzubinden, verwenden Sie folgende Syntax:

```html
<link href="style.css" rel="stylesheet" />
```

### Bereitstellen alternativer Stylesheets

Sie können auch [alternative Stylesheets](/de/docs/Web/HTML/Reference/Attributes/rel/alternate_stylesheet) angeben.

Der Benutzer kann wählen, welches Stylesheet er verwenden möchte, indem er es aus dem Menü **Ansicht > Seitenstil** auswählt.
Dies bietet eine Möglichkeit, mehrere Versionen einer Seite für den Benutzer sichtbar zu machen.

```html
<link href="default.css" rel="stylesheet" title="Default Style" />
<link href="fancy.css" rel="alternate stylesheet" title="Fancy" />
<link href="basic.css" rel="alternate stylesheet" title="Basic" />
```

### Bereitstellen von Icons für unterschiedliche Nutzungskontexte

Sie können Links zu mehreren Icons auf derselben Seite einfügen, und der Browser wählt aus, welches Icon am besten für seinen bestimmten Kontext funktioniert, indem er die `rel` und `sizes`-Werte als Hinweise verwendet.

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

Für Informationen darüber, welche `sizes` Sie für Apple-Icons wählen sollten, siehe [Apples Dokumentation zur Konfiguration von Webanwendungen](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW4) und die verlinkten [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/app-icons#App-icon-sizes). Normalerweise reicht es, ein großes Bild, wie 192x192, bereitzustellen und den Browser es nach Bedarf herunterzuskalieren zu lassen. Sie können jedoch Bilder mit unterschiedlichem Detailgrad für unterschiedliche Größen bereitstellen, wie im Apple Design-Leitfaden empfohlen. Das Bereitstellen kleinerer Icons für niedrigere Auflösungen spart auch Bandbreite.

Es kann nicht notwendig sein, überhaupt `<link>`-Elemente bereitzustellen. Beispielsweise rufen Browser automatisch `/favicon.ico` aus dem Stammverzeichnis einer Website an, und Apple fordert auch automatisch `/apple-touch-icon-[Größe].png`, `/apple-touch-icon.png` usw. an. Das Bereitstellen von expliziten Links schützt Sie jedoch vor Änderungen dieser Konventionen.

### Bedingtes Laden von Ressourcen mit Medienabfragen

Sie können einen Medientyp oder eine Abfrage innerhalb eines `media`-Attributs angeben;
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

Sie können bestimmen, wann ein Stylesheet geladen wurde, indem Sie auf das `load`-Ereignis warten, das darauf ausgeführt wird; ähnlich können Sie feststellen, ob ein Fehler beim Verarbeiten eines Stylesheets aufgetreten ist, indem Sie auf ein `error`-Ereignis achten:

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
> Das `load`-Ereignis tritt auf, nachdem das Stylesheet und alle importierten Inhalte geladen und geparst wurden, und unmittelbar bevor die Stile auf den Inhalt angewendet werden.

### Preload-Beispiele

Sie finden eine Reihe von `<link rel="preload">` Beispielen in [Preload von Inhalten mit `rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload).

### Rendern blockieren, bis eine Ressource abgerufen wird

Sie können das `render`-Token innerhalb eines `blocking`-Attributs einfügen;
das Rendern der Seite wird blockiert, bis die Ressource abgerufen wird. Zum Beispiel:

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasierungsinhalt</a>.
      </td>
    </tr>
    <tr>
      <th>Erlaubter Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "void-Element")}}.</td>
    </tr>
    <tr>
      <th>Tag-Auslassung</th>
      <td>Muss einen Start-Tag haben und darf keinen End-Tag haben.</td>
    </tr>
    <tr>
      <th>Erlaubte Eltern</th>
      <td>
        Jedes Element, das Metadatenelemente akzeptiert.
        Wenn <a href="/de/docs/Web/HTML/Reference/Global_attributes/itemprop">itemprop</a> vorhanden ist: jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasierungsinhalt</a> akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/link_role"><code>link</code></a> mit <code>href</code> Attribut</td>
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
