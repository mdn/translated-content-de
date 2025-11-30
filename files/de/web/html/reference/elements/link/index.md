---
title: "<link>: Das External Resource Link Element"
slug: Web/HTML/Reference/Elements/link
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

Das **`<link>`** [HTML](/de/docs/Web/HTML) Element spezifiziert Beziehungen zwischen dem aktuellen Dokument und einer externen Ressource.
Dieses Element wird am häufigsten verwendet, um auf {{Glossary("CSS", "Stylesheets")}} zu verlinken, wird aber auch zur Einrichtung von Webseite-Icons (sowohl "favicon"-ähnlichen Icons als auch Icons für den Startbildschirm und Apps auf mobilen Geräten) verwendet, unter anderem.

{{InteractiveExample("HTML Demo: &lt;link&gt;", "tabbed-shorter")}}

```html interactive-example
<link href="/shared-assets/misc/link-element-example.css" rel="stylesheet" />

<p>This text will be red as defined in the external stylesheet.</p>
<p style="color: blue">
  The <code>style</code> attribute can override it, though.
</p>
```

Um ein externes Stylesheet zu verlinken, fügen Sie ein `<link>` Element in Ihr {{HTMLElement("head")}} ein, wie folgt:

```html
<link href="main.css" rel="stylesheet" />
```

Dieses Beispiel weist den Pfad zum Stylesheet im `href` Attribut und einem [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel) Attribut mit dem Wert `stylesheet` zu. `rel` steht für "relationship" (Beziehung) und ist eines der Kernelemente des `<link>` Elements — der Wert gibt an, wie das verlinkte Element zum enthaltenen Dokument in Beziehung steht.

Es gibt eine Vielzahl anderer üblicher Typen, denen Sie begegnen werden. Beispielsweise ein Link zum Favicon der Website:

```html
<link rel="icon" href="favicon.ico" />
```

Es gibt eine Reihe anderer Icon-`rel`-Werte, die hauptsächlich verwendet werden, um spezielle Icon-Typen für verschiedene mobile Plattformen zu kennzeichnen, z.B.:

```html
<link
  rel="apple-touch-icon"
  sizes="114x114"
  href="apple-icon-114.png"
  type="image/png" />
```

Das `sizes` Attribut gibt die Icon-Größe an, während `type` den MIME-Typ der verlinkten Ressource enthält.
Diese bieten nützliche Hinweise, um dem Browser die Auswahl des am besten geeigneten Icons zu erleichtern.

Sie können auch einen Medientyp oder eine Abfrage innerhalb eines `media` Attributs bereitstellen; diese Ressource wird dann nur geladen, wenn die Medienbedingung zutrifft. Zum Beispiel:

```html
<link href="print.css" rel="stylesheet" media="print" />
<link href="mobile.css" rel="stylesheet" media="screen and (width <= 600px)" />
```

Einige interessante neue Leistungs- und Sicherheitsfunktionen wurden ebenfalls zum `<link>` Element hinzugefügt. Nehmen Sie dieses Beispiel:

```html
<link
  rel="preload"
  href="myFont.woff2"
  as="font"
  type="font/woff2"
  crossorigin="anonymous" />
```

Ein `rel`-Wert von `preload` zeigt an, dass der Browser diese Ressource vorab laden soll (siehe [`rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload) für mehr Details), wobei das `as` Attribut die spezifische Klasse der geladenen Inhalte angibt.
Das `crossorigin` Attribut zeigt an, ob die Ressource mit einer {{Glossary("CORS", "CORS")}}-Anfrage abgerufen werden soll.

Weitere Nutzungshinweise:

- Ein `<link>` Element kann entweder im {{HTMLElement("head")}} oder {{HTMLElement("body")}} Element vorkommen, abhängig davon, ob es einen [Link-Typ](https://html.spec.whatwg.org/multipage/links.html#body-ok) hat, der **body-ok** ist.
  Zum Beispiel ist der `stylesheet` Link-Typ body-ok, und daher ist `<link rel="stylesheet">` im Body erlaubt.
  Es ist jedoch keine gute Praxis, dem zu folgen; es macht mehr Sinn, Ihre `<link>` Elemente von Ihrem Body-Inhalt zu trennen, indem Sie sie in den `<head>` stellen.
- Wenn Sie `<link>` verwenden, um ein Favicon für eine Website einzurichten, und Ihre Website eine Content Security Policy (CSP) verwendet, um die Sicherheit zu erhöhen, gilt die Richtlinie für das Favicon.
  Wenn es Probleme gibt, dass das Favicon nicht lädt, überprüfen Sie, dass die {{HTTPHeader("Content-Security-Policy")}} Überschrift's [`img-src` Anweisung](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/img-src) den Zugriff nicht verhindert.
- Die HTML und XHTML Spezifikationen definieren Event-Handler für das `<link>` Element, aber es ist unklar, wie sie verwendet werden würden.
- Unter XHTML 1.0 erfordern {{Glossary("void_element", "void elements")}} wie `<link>` einen Schrägstrich am Ende: `<link />`.
- WebTV unterstützt die Verwendung des Wertes `next` für `rel`, um die nächste Seite in einer Dokumentenreihe vorab zu laden.

## Attribute

Dieses Element schließt die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes) ein.

- `as`
  - : Dieses Attribut ist erforderlich, wenn [`rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload) auf dem `<link>` Element gesetzt wurde, optional wenn [`rel="modulepreload"`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload) gesetzt ist, und sonst sollte es nicht verwendet werden.
    Es spezifiziert den Typ der von `<link>` geladenen Inhalte, was notwendig ist für Abgleich der Anforderung, Anwendung der richtigen [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) und Festlegung des korrekten {{HTTPHeader("Accept")}} Anfrage-Headers.

    Darüber hinaus verwendet `rel="preload"` dies als Signal zur Priorisierung der Anfrage.
    Die folgende Tabelle listet die gültigen Werte für dieses Attribut und die Elemente oder Ressourcen, auf die sie angewendet werden können.

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
                <strong>Hinweis:</strong> Dieser Wert erfordert auch, dass <code>&#x3C;link></code> das `crossorigin` Attribut enthält, siehe <a href="/de/docs/Web/HTML/Reference/Attributes/rel/preload#cors-enabled_fetches">CORS-activierte Abrufe</a>.
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
                <strong>Hinweis:</strong> Dieser Wert erfordert auch, dass <code>&#x3C;link></code> das `crossorigin` Attribut enthält, siehe <a href="/de/docs/Web/HTML/Reference/Attributes/rel/preload#cors-enabled_fetches">CORS-activierte Abrufe</a>.
              </p>
            </div>
          </td>
        </tr>
        <tr>
          <td>image</td>
          <td>
            <code>&#x3C;img></code> und <code>&#x3C;picture></code> Elemente mit
            `srcset` oder `imageset` Attributen, SVG <code>&#x3C;image></code> Elemente,
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
            <code>&#x3C;link rel=stylesheet></code> Element, CSS <code>@import</code>
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
  - : Dieses Attribut gibt explizit an, dass bestimmte Operationen blockiert werden sollen, bis spezifische Bedingungen erfüllt sind. Es darf nur verwendet werden, wenn das `rel` Attribut die Schlüsselwörter `expect` oder `stylesheet` enthält. Bei [`rel="expect"`](/de/docs/Web/HTML/Reference/Attributes/rel#expect) zeigt es an, dass Operationen blockiert werden sollen, bis ein bestimmter DOM-Knoten geparst wurde. Bei [`rel="stylesheet"`](/de/docs/Web/HTML/Reference/Attributes/rel#stylesheet) zeigt es an, dass Operationen blockiert werden sollen, bis ein externes Stylesheet und seine kritischen Subressourcen abgerufen und auf das Dokument angewendet wurden. Die Operationen, die blockiert werden sollen, müssen eine durch Leerzeichen getrennte Liste von Blockierungs-Tokens aus der unten angegebenen Liste sein. Derzeit gibt es nur ein Token:
    - `render`: Die Darstellung des Inhalts auf dem Bildschirm wird blockiert.

    > [!NOTE]
    > Nur `link` Elemente im `<head>` des Dokuments können möglicherweise die Darstellung blockieren. Standardmäßig blockiert ein `link` Element mit `rel="stylesheet"` im `<head>` die Darstellung, wenn der Browser es beim Parsen entdeckt. Wenn ein solches `link` Element dynamisch über ein Skript hinzugefügt wird, müssen Sie zusätzlich `blocking = "render"` setzen, damit es die Darstellung blockiert.

- [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)
  - : Dieses {{Glossary("Enumerated", "Aufzählungs-")}} Attribut gibt an, ob {{Glossary("CORS", "CORS")}} beim Abrufen der Ressource verwendet werden muss.
    [CORS-aktivierte Bilder](/de/docs/Web/HTML/How_to/CORS_enabled_image) können im {{HTMLElement("canvas")}} Element wiederverwendet werden, ohne dass sie _verunreinigt_ werden.
    Die erlaubten Werte sind:
    - `anonymous`
      - : Eine Cross-Origin-Anfrage (d.h. mit einem {{HTTPHeader("Origin")}} HTTP-Header) wird durchgeführt, aber keine Anmeldeinformationen werden gesendet (d.h. kein Cookie, kein X.509-Zertifikat und keine HTTP-Basisauthentifizierung).
        Wenn der Server keine Anmeldeinformationen zur Ursprungsseite gewährt (indem er den {{HTTPHeader("Access-Control-Allow-Origin")}} HTTP-Header nicht setzt), wird die Ressource verunreinigt und ihre Nutzung eingeschränkt sein.
    - `use-credentials`
      - : Eine Cross-Origin-Anfrage (d.h. mit einem `Origin` HTTP-Header) wird zusammen mit einer Anmeldeinformation (d.h. ein Cookie, Zertifikat und/oder HTTP-Basisauthentifizierung wird durchgeführt) durchgeführt.
        Wenn der Server keine Anmeldeinformationen zur Ursprungsseite übermittelt (durch den {{HTTPHeader("Access-Control-Allow-Credentials")}} HTTP-Header), wird die Ressource _verunreinigt_ und ihre Nutzung eingeschränkt.

    Wenn das Attribut nicht vorhanden ist, wird die Ressource ohne eine {{Glossary("CORS", "CORS")}} Anfrage abgerufen (d.h. ohne den `Origin` HTTP-Header zu senden), wodurch ihre nicht-verunreinigte Nutzung verhindert wird. Falls ungültig, wird es behandelt, als ob das aufgelistete Schlüsselwort **anonymous** verwendet wurde.
    Sehen Sie sich [CORS-Einstellungsattribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin) für zusätzliche Informationen an.

- `disabled`
  - : Nur für `rel="stylesheet"` gibt das `disabled` Boolean-Attribut an, ob das beschriebene Stylesheet geladen und auf das Dokument angewendet werden soll.
    Wenn `disabled` in dem HTML zur Ladezeit angegeben ist, wird das Stylesheet während des Seitenladens nicht geladen.
    Stattdessen wird das Stylesheet bei Bedarf geladen, wenn und wann das `disabled` Attribut auf `false` geändert oder entfernt wird.

    Das Setzen der `disabled` Eigenschaft im DOM bewirkt, dass das Stylesheet aus der [`Document.styleSheets`](/de/docs/Web/API/Document/styleSheets) Liste des Dokuments entfernt wird.

- [`fetchpriority`](/de/docs/Web/HTML/Reference/Attributes/fetchpriority)
  - : Stellt einen Hinweis auf die relative Priorität zur Verfügung, die beim Abrufen einer Ressource eines bestimmten Typs verwendet werden soll. Erlaubte Werte:
    - `high`
      - : Holen Sie die Ressource mit hoher Priorität im Verhältnis zu anderen Ressourcen desselben Typs ein.
    - `low`
      - : Holen Sie die Ressource mit niedriger Priorität im Verhältnis zu anderen Ressourcen desselben Typs ein.
    - `auto`
      - : Es wird keine Präferenz für die Abrufpriorität festgelegt.
        Dies ist der Standard.
        Es wird verwendet, wenn kein Wert oder ein ungültiger Wert gesetzt ist.
- `href`
  - : Dieses Attribut spezifiziert die {{Glossary("URL", "URL")}} der verlinkten Ressource. Eine URL kann absolut oder relativ sein.
- `hreflang`
  - : Dieses Attribut gibt die Sprache der verlinkten Ressource an.
    Es ist rein beratend.
    Werte sollten gültige {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tags")}} sein.
    Verwenden Sie dieses Attribut nur, wenn das [`href`](/de/docs/Web/HTML/Reference/Elements/a#href) Attribut vorhanden ist.
- `imagesizes`
  - : Nur für `rel="preload"` und `as="image"` hat das `imagesizes` Attribut eine ähnliche Syntax und Semantik wie das [`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes) Attribut, das das vorzuladende geeignete Ressourcen festlegt, das von einem `img` Element mit entsprechenden Werten für seine `srcset` und `sizes` Attribute verwendet wird.
- `imagesrcset`
  - : Nur für `rel="preload"` und `as="image"` hat das `imagesrcset` Attribut eine ähnliche Syntax und Semantik wie das [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset) Attribut, das das vorzuladende geeignete Ressourcen festlegt, das von einem `img` Element mit entsprechenden Werten für seine `srcset` und `sizes` Attribute verwendet wird.
- `integrity`
  - : Beinhaltet Inline-Metadaten — eine base64-kodierte kryptografische Prüfsumme der Ressource, die der Browser abrufen soll.
    Der Browser kann dies verwenden, um zu überprüfen, dass die abgerufene Ressource ohne unerwartete Manipulationen geliefert wurde.
    Das Attribut muss nur dann angegeben werden, wenn das `rel` Attribut auf `stylesheet`, `preload`, oder `modulepreload` festgelegt ist.
    Siehe [Subresource Integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity).
- `media`
  - : Dieses Attribut gibt die Medien an, auf die die verlinkte Ressource angewendet wird. Sein Wert muss ein Medientyp / [media query](/de/docs/Web/CSS/Guides/Media_queries) sein.
    Dieses Attribut ist hauptsächlich nützlich, wenn auf externe Stylesheets verlinkt wird — es ermöglicht es dem Benutzeragenten, das am besten angepasste für das Gerät auszuwählen, auf dem es ausgeführt wird.

- `referrerpolicy`
  - : Ein String, der angibt, welchen Referrer beim Abrufen der Ressource verwendet werden soll:
    - `no-referrer` bedeutet, dass der {{HTTPHeader("Referer")}} Header nicht gesendet wird.
    - `no-referrer-when-downgrade` bedeutet, dass kein {{HTTPHeader("Referer")}} Header gesendet wird, wenn zu einem Ursprung ohne TLS (HTTPS) navigiert wird.
      Dies ist das Standardverhalten eines Benutzeragenten, wenn keine andere Richtlinie angegeben ist.
    - `origin` bedeutet, dass der Referrer der Ursprung der Seite sein wird, was ungefähr das Schema, den Host und den Port betrifft.
    - `origin-when-cross-origin` bedeutet, dass das Navigieren zu anderen Ursprüngen auf das Schema, den Host und den Port beschränkt wird, während beim Navigieren am selben Ursprung der Pfad des Referrers enthalten ist.
    - `unsafe-url` bedeutet, dass der Referrer den Ursprung und den Pfad (aber nicht das Fragment, Passwort oder den Benutzernamen) umfassen wird.
      Dieser Fall ist unsicher, da er Ursprünge und Pfade von TLS-geschützten Ressourcen zu unsicheren Ursprüngen leaken kann.

- [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)
  - : Dieses Attribut benennt eine Beziehung des verlinkten Dokuments zum aktuellen Dokument. Das Attribut muss eine durch Leerzeichen getrennte Liste von [link type values](/de/docs/Web/HTML/Reference/Attributes/rel) sein.
- `sizes`
  - : Dieses Attribut definiert die Größen der Icons für visuelle Medien, die in der Ressource enthalten sind.
    Es muss nur dann vorhanden sein, wenn das [`rel`](#rel) Attribut einen Wert von `icon` oder einen nicht standardmäßigen Typ wie Apples `apple-touch-icon` enthält.
    Es kann die folgenden Werte haben:
    - `any`, bedeutet, dass das Icon auf jede Größe skaliert werden kann, da es sich im Vektorformat befindet, wie `image/svg+xml`.
    - Eine durch Leerzeichen getrennte Liste von Größen, jede im Format `<Breite in Pixel>x<Höhe in Pixel>` oder `<Breite in Pixel>X<Höhe in Pixel>`. Jede dieser Größen muss in der Ressource enthalten sein.

    > [!NOTE]
    > Die meisten Icon-Formate können nur ein einzelnes Icon speichern; daher enthält das [`sizes`](#sizes) Attribut die meiste Zeit nur einen Eintrag.
    > Microsofts ICO Format und Apples ICNS Format können mehrere Icon-Größen in einer einzigen Datei speichern. ICO hat bessere Browser-Unterstützung, daher sollten Sie dieses Format verwenden, wenn plattformübergreifende Unterstützung wichtig ist.

- `title`
  - : Das `title` Attribut hat spezielle Semantik auf dem `<link>` Element.
    Wenn es auf einem `<link rel="stylesheet">` verwendet wird, definiert es ein [Standard- oder alternatives Stylesheet](/de/docs/Web/HTML/Reference/Attributes/rel/alternate_stylesheet).
- `type`
  - : Dieses Attribut wird verwendet, um den Typ des verlinkten Inhalts zu definieren.
    Der Wert des Attributs sollte ein MIME-Typ wie **text/html**, **text/css** usw. sein.
    Der übliche Gebrauch dieses Attributes ist es, den Typ des referenzierten Stylesheets zu definieren (zum Beispiel **text/css**), aber da CSS die einzige Stylesheet-Sprache im Web ist, ist es nicht nur möglich, das `type` Attribut wegzulassen, es wird sogar empfohlen.
    Es wird auch bei `rel="preload"` Link-Typen verwendet, um sicherzustellen, dass der Browser nur Dateitypen herunterlädt, die er unterstützt.

### Nicht-standardisierte Attribute

- `target` {{Deprecated_Inline}}
  - : Definiert den Name des Fensters oder Frames, das die definierte Verknüpfungsbeziehung hat oder das die Darstellung jeder verknüpften Ressource zeigen wird.

### Veraltete Attribute

- `charset` {{deprecated_inline}}
  - : Dieses Attribut definiert die Zeichencodierung der verknüpften Ressource.
    Der Wert ist eine durch Leerzeichen und / oder Kommas getrennte Liste von Zeichensätzen, wie in {{rfc(2045)}} definiert.
    Der Standardwert ist `iso-8859-1`.

    > [!NOTE]
    > Um denselben Effekt wie dieses veraltete Attribut zu erzielen, verwenden Sie den {{HTTPHeader("Content-Type")}} HTTP-Header auf der verknüpften Ressource.

- `rev` {{deprecated_inline}}
  - : Der Wert dieses Attributs zeigt die Beziehung des aktuellen Dokuments zum verlinkten Dokument, wie durch das [`href`](#href) Attribut definiert, an.
    Das Attribut definiert somit die umgekehrte Beziehung im Vergleich zum Wert des `rel` Attributs.
    [Linktyp-Werte](/de/docs/Web/HTML/Reference/Attributes/rel) für das Attribut sind ähnlich wie die möglichen Werte für [`rel`](#rel).

    > [!NOTE]
    > Statt `rev` sollten Sie das [`rel`](#rel) Attribut mit dem umgekehrten [linktyp-Wert](/de/docs/Web/HTML/Reference/Attributes/rel) verwenden.
    > Zum Beispiel, um den umgekehrten Link für `made` festzustellen, geben Sie `author` an. Dieses Attribut steht nicht für "revision" (Version) und darf nicht mit einer Versionsnummer verwendet werden, auch wenn viele Seiten es auf diese Weise missbrauchen.

## Beispiele

### Einbinden eines Stylesheets

Um ein Stylesheet in einer Seite einzubinden, verwenden Sie die folgende Syntax:

```html
<link href="style.css" rel="stylesheet" />
```

### Bereitstellung alternativer Stylesheets

Sie können auch [alternative Stylesheets](/de/docs/Web/HTML/Reference/Attributes/rel/alternate_stylesheet) angeben.

Der Benutzer kann auswählen, welches Stylesheet verwendet werden soll, indem er es aus dem **Ansicht > Seitendesign** Menü auswählt.
Dies bietet eine Möglichkeit, mehrere Versionen einer Seite für Benutzer zugänglich zu machen.

```html
<link href="default.css" rel="stylesheet" title="Default Style" />
<link href="fancy.css" rel="alternate stylesheet" title="Fancy" />
<link href="basic.css" rel="alternate stylesheet" title="Basic" />
```

### Bereitstellung von Icons für unterschiedliche Nutzungskontexte

Sie können Verknüpfungen zu mehreren Icons auf derselben Seite einfügen, und der Browser wird basierend auf dem Kontext auswählen, welches am besten funktioniert, indem er die `rel` und `sizes` Werte als Hinweis verwendet.

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

Für Informationen, welche `sizes` für Apple-Icons zu wählen sind, siehe [Apples Dokumentation zur Konfiguration von Webanwendungen](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW4) und den verlinkten [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/app-icons#App-icon-sizes). Normalerweise genügt es, ein großes Bild wie 192x192 bereitzustellen und den Browser es nach Bedarf verkleinern zu lassen, aber möglicherweise möchten Sie Bilder mit unterschiedlichen Detailstufen für verschiedene Größen bereitstellen, wie die Apple-Designrichtlinie empfiehlt. Kleinere Icons für niedrigere Auflösungen zu bereitzustellen, spart auch Bandbreite.

Es kann nicht notwendig sein, `<link>` Elemente überhaupt bereitzustellen. Zum Beispiel fordern Browser automatisch `/favicon.ico` vom Hauptverzeichnis einer Seite an, und Apple fordert auch automatisch `/apple-touch-icon-[size].png`, `/apple-touch-icon.png` usw. an. Durch explizite Links schützen Sie sich jedoch vor Änderungen dieser Konventionen.

### Bedingtes Laden von Ressourcen mit Medienabfragen

Sie können eine Medientyp- oder Abfrage innerhalb eines `media` Attributs bereitstellen;
diese Ressource wird dann nur geladen, wenn die Medienbedingung wahr ist. Beispielsweise:

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

Sie können ermitteln, wann ein Stylesheet geladen wurde, indem Sie auf ein `load` Ereignis warten, das darauf ausgelöst wird; ähnlich können Sie erkennen, ob ein Fehler bei der Verarbeitung eines Stylesheets aufgetreten ist, indem Sie auf ein `error` Ereignis warten:

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
> Das `load` Ereignis wird ausgelöst, sobald das Stylesheet und alle importierten Inhalte geladen und geparst wurden und direkt bevor die Stile auf den Inhalt angewendet werden.

### Preload-Beispiele

Sie finden eine Reihe von `<link rel="preload">` Beispielen in [Inhalte vorladen mit `rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload).

### Blockieren der Darstellung bis eine Ressource abgerufen ist

Sie können ein `render` Token innerhalb eines `blocking` Attributs aufnehmen;
die Darstellung der Seite wird blockiert, bis die Ressource und ihre kritischen Subressourcen abgerufen und auf das Dokument angewendet wurden. Zum Beispiel:

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
        Metadateneinhalte.
        Wenn <code><a href="/de/docs/Web/HTML/Reference/Global_attributes/itemprop">itemprop</a></code> vorhanden ist:
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flussinhalte</a> und
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasinhalte</a>.
      </td>
    </tr>
    <tr>
      <th>Erlaubter Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "void element")}}.</td>
    </tr>
    <tr>
      <th>Tag-Auslassung</th>
      <td>Er muss einen Start-Tag haben und darf keinen End-Tag haben.</td>
    </tr>
    <tr>
      <th>Erlaubte Eltern</th>
      <td>
        Jedes Element, das Metadaten-Elemente akzeptiert.
        Wenn <a href="/de/docs/Web/HTML/Reference/Global_attributes/itemprop">itemprop</a> vorhanden ist: jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasinhalte</a> akzeptiert.
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

- {{HTTPHeader("Link")}} HTTP Header
