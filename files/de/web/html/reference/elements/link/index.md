---
title: "<link>: Das External Resource Link-Element"
slug: Web/HTML/Reference/Elements/link
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{HTMLSidebar}}

Das **`<link>`** [HTML](/de/docs/Web/HTML)-Element spezifiziert Beziehungen zwischen dem aktuellen Dokument und einer externen Ressource.
Dieses Element wird am häufigsten verwendet, um auf {{Glossary("CSS", "Stylesheets")}} zu verlinken, es wird aber auch genutzt, um Symbole der Website zu definieren (sowohl "Favicon"-Stil-Symbole als auch Symbole für den Startbildschirm und Apps auf mobilen Geräten) unter anderem.

{{InteractiveExample("HTML Demo: &lt;link&gt;", "tabbed-shorter")}}

```html interactive-example
<link href="/shared-assets/misc/link-element-example.css" rel="stylesheet" />

<p>This text will be red as defined in the external stylesheet.</p>
<p style="color: blue">
  The <code>style</code> attribute can override it, though.
</p>
```

Um ein externes Stylesheet zu verlinken, würden Sie ein `<link>`-Element innerhalb Ihres {{HTMLElement("head")}} einfügen, wie hier:

```html
<link href="main.css" rel="stylesheet" />
```

Dieses Beispiel liefert den Pfad zum Stylesheet innerhalb eines `href`-Attributs und ein [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)-Attribut mit dem Wert `stylesheet`. Das `rel` steht für "relationship" (Beziehung) und ist eines der Schlüsseleigenschaften des `<link>`-Elements — der Wert gibt an, wie das verlinkte Element mit dem einbettenden Dokument in Beziehung steht.

Es gibt eine Reihe anderer gängiger Typen, auf die Sie stoßen werden. Zum Beispiel ein Link zum Favicon der Website:

```html
<link rel="icon" href="favicon.ico" />
```

Es gibt eine Anzahl weiterer Icon-`rel`-Werte, die hauptsächlich dafür verwendet werden, spezielle Icon-Typen für verschiedene mobile Plattformen anzugeben, z.B.:

```html
<link
  rel="apple-touch-icon"
  sizes="114x114"
  href="apple-icon-114.png"
  type="image/png" />
```

Das `sizes`-Attribut gibt die Icon-Größe an, während das `type` den MIME-Typ der verlinkten Ressource enthält.
Diese liefern nützliche Hinweise, um es dem Browser zu ermöglichen, das am besten geeignete Icon auszuwählen.

Sie können auch einen Mediatyp oder Medientyp-Abfrage in einem `media`-Attribut angeben; diese Ressource wird dann nur geladen, wenn die Medienstelle als wahr bewertet wird. Zum Beispiel:

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

Ein `rel`-Wert von `preload` gibt an, dass der Browser diese Ressource vorab laden sollte (siehe [`rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload) für weitere Details), wobei das `as`-Attribut die spezifische Klasse des abzurufenden Inhalts angibt.
Das `crossorigin`-Attribut gibt an, ob die Ressource mit einer {{Glossary("CORS", "CORS")}}-Anfrage abgerufen werden soll.

Weitere Nutzungshinweise:

- Ein `<link>`-Element kann entweder im {{HTMLElement("head")}} oder {{HTMLElement("body")}}-Element vorkommen, abhängig davon, ob es einen [Link-Typ](https://html.spec.whatwg.org/multipage/links.html#body-ok) besitzt, der **body-ok** ist.
  Zum Beispiel ist der `stylesheet`-Linktyp body-ok, und daher ist `<link rel="stylesheet">` im body erlaubt.
  Dies ist jedoch keine gute Praxis; es macht mehr Sinn, Ihre `<link>`-Elemente von Ihrem body-Inhalt zu trennen, indem Sie sie in den `<head>` platzieren.
- Wenn Sie `<link>` verwenden, um ein Favicon für eine Seite zu erstellen, und Ihre Seite nutzt eine Content Security Policy (CSP), um ihre Sicherheit zu erhöhen, dann gilt die Richtlinie auch für das Favicon.
  Wenn Sie Probleme haben, dass das Favicon nicht geladen wird, prüfen Sie, ob der {{HTTPHeader("Content-Security-Policy")}}-Header mit der [`img-src`-Direktive](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/img-src) nicht den Zugriff darauf verhindert.
- Die HTML- und XHTML-Spezifikationen definieren Ereignishandler für das `<link>`-Element, jedoch ist unklar, wie sie genutzt werden würden.
- Unter XHTML 1.0 erfordern {{Glossary("void_element", "Void-Elemente")}} wie `<link>` einen abschließenden Schrägstrich: `<link />`.
- WebTV unterstützt die Verwendung des Wertes `next` für `rel`, um die nächste Seite in einer Dokumentreihe vorab zu laden.

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `as`

  - : Dieses Attribut ist erforderlich, wenn [`rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload) am `<link>`-Element gesetzt wurde, optional, wenn [`rel="modulepreload"`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload) gesetzt wurde, und sollte ansonsten nicht verwendet werden.
    Es spezifiziert den Typ des Inhalts, der vom `<link>` geladen wird, was notwendig ist für die Anforderungsübereinstimmung, die Anwendung der richtigen [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) und das Setzen des richtigen {{HTTPHeader("Accept")}}-Anforderungsheaders.

    Außerdem nutzt `rel="preload"` dies als Signal für die Priorisierung von Anfragen.
    Die folgende Tabelle listet die gültigen Werte für dieses Attribut und die Elemente oder Ressourcen, auf die sie angewendet werden.

    <table class="standard-table">
      <thead>
        <tr>
          <th scope="col">Wert</th>
          <th scope="col">Anwendbar auf</th>
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
                <strong>Note:</strong> Dieser Wert erfordert auch, dass
                <code>&#x3C;link></code> das `crossorigin`-Attribut enthält, siehe <a href="/de/docs/Web/HTML/Reference/Attributes/rel/preload#cors-enabled_fetches">CORS-aktivierte Fetches</a>.
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
                <strong>Note:</strong> Dieser Wert erfordert auch, dass
                <code>&#x3C;link></code> das `crossorigin`-Attribut enthält, siehe <a href="/de/docs/Web/HTML/Reference/Attributes/rel/preload#cors-enabled_fetches">CORS-aktivierte Fetches</a>.
              </p>
            </div>
          </td>
        </tr>
        <tr>
          <td>image</td>
          <td>
            <code>&#x3C;img></code> und <code>&#x3C;picture></code>-Elemente mit
            `srcset`- oder `imageset`-Attributen, SVG-<code>&#x3C;image></code>-Elemente,
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

  - : Dieses Attribut gibt explizit an, dass bestimmte Operationen beim Abrufen einer externen Ressource blockiert werden sollen. Es darf nur verwendet werden, wenn das `rel`-Attribut `expect` oder `stylesheet`-Keywords enthält. Die zu blockierenden Operationen müssen eine durch Leerzeichen getrennte Liste von Blockierungstoken sein, die unten aufgeführt sind.
    - `render`: Das Rendern von Inhalten auf dem Bildschirm wird blockiert.

- [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)

  - : Dieses {{Glossary("Enumerated", "aufgezählte")}} Attribut gibt an, ob {{Glossary("CORS", "CORS")}} beim Abrufen der Ressource verwendet werden muss.
    [CORS-aktivierte Bilder](/de/docs/Web/HTML/How_to/CORS_enabled_image) können im {{HTMLElement("canvas")}}-Element ohne Verunreinigung wiederverwendet werden.
    Die erlaubten Werte sind:

    - `anonymous`
      - : Eine Cross-Origin-Anfrage (d.h. mit einem {{HTTPHeader("Origin")}} HTTP-Header) wird durchgeführt, aber es wird keine Berechtigung gesendet (d.h. kein Cookie, X.509-Zertifikat oder HTTP-Basic-Authentifizierung).
        Wenn der Server keine Berechtigungen an die Ursprungsseite gibt (indem der {{HTTPHeader("Access-Control-Allow-Origin")}} HTTP-Header nicht gesetzt wird), wird die Ressource verunreinigt und ihre Nutzung eingeschränkt.
    - `use-credentials`
      - : Eine Cross-Origin-Anfrage (d.h. mit einem `Origin` HTTP-Header) wird zusammen mit einer Berechtigung gesendet (d.h. ein Cookie, Zertifikat und/oder HTTP-Basic-Authentifizierung wird durchgeführt).
        Wenn der Server keine Berechtigungen an die Ursprungsseite gibt (durch den {{HTTPHeader("Access-Control-Allow-Credentials")}} HTTP-Header), wird die Ressource _verunreinigt_ und ihre Nutzung eingeschränkt.

    Wenn das Attribut nicht vorhanden ist, wird die Ressource ohne eine {{Glossary("CORS", "CORS")}}-Anfrage abgerufen (d.h. ohne den `Origin` HTTP-Header zu senden), was ihre unverunreinigte Nutzung verhindert. Wenn es ungültig ist, wird es so behandelt, als ob das aufgelistete Keyword **anonymous** verwendet wurde.
    Siehe [CORS-Einstellungsattribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin) für zusätzliche Informationen.

- `disabled`

  - : Nur für `rel="stylesheet"`, das `disabled`-Boolean-Attribut gibt an, ob das beschriebene Stylesheet geladen und auf das Dokument angewendet werden soll.
    Wenn `disabled` im HTML angegeben ist, wenn es geladen wird, wird das Stylesheet nicht während des Seitenladens geladen.
    Stattdessen wird das Stylesheet bei Bedarf geladen, wenn und wenn das `disabled`-Attribut auf `false` geändert oder entfernt wird.

    Das Setzen der `disabled`-Eigenschaft im DOM bewirkt, dass das Stylesheet aus der [`Document.styleSheets`](/de/docs/Web/API/Document/styleSheets)-Liste des Dokuments entfernt wird.

- `fetchpriority`

  - : Gibt einen Hinweis auf die relative Priorität, die beim Abrufen einer Ressource eines bestimmten Typs verwendet werden soll.
    Erlaubte Werte:

    - `high`
      - : Die Ressource mit hoher Priorität im Verhältnis zu anderen Ressourcen desselben Typs abrufen.
    - `low`
      - : Die Ressource mit niedriger Priorität im Verhältnis zu anderen Ressourcen desselben Typs abrufen.
    - `auto`
      - : Keine Präferenz für die Abrufpriorität festlegen.
        Dies ist der Standardwert.
        Er wird verwendet, wenn kein Wert oder ein ungültiger Wert festgelegt ist.

    Siehe [`HTMLLinkElement.fetchPriority`](/de/docs/Web/API/HTMLLinkElement/fetchPriority) für weitere Informationen.

- `href`
  - : Dieses Attribut spezifiziert die {{Glossary("URL", "URL")}} der verlinkten Ressource. Eine URL kann absolut oder relativ sein.
- `hreflang`
  - : Dieses Attribut gibt die Sprache der verlinkten Ressource an.
    Es ist rein beratend.
    Erlaubte Werte sind durch {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}} spezifiziert.
    Verwenden Sie dieses Attribut nur, wenn das [`href`](/de/docs/Web/HTML/Reference/Elements/a#href)-Attribut vorhanden ist.
- `imagesizes`
  - : Nur für `rel="preload"` und `as="image"` hat das `imagesizes`-Attribut eine ähnliche Syntax und Semantik wie das [`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes)-Attribut, das angibt, die entsprechende Ressource vorzuhalten, die von einem `img`-Element mit entsprechenden Werten für seine `srcset`- und `sizes`-Attribute verwendet wird.
- `imagesrcset`
  - : Nur für `rel="preload"` und `as="image"` hat das `imagesrcset`-Attribut eine ähnliche Syntax und Semantik wie das [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset)-Attribut, das angibt, die entsprechende Ressource vorzuhalten, die von einem `img`-Element mit entsprechenden Werten für seine `srcset`- und `sizes`-Attribute verwendet wird.
- `integrity`
  - : Enthält Inline-Metadaten — einen base64-codierten kryptografischen Hash der Ressource (Datei), die Sie dem Browser abrufen lassen.
    Der Browser kann dies verwenden, um zu überprüfen, ob die abgerufene Ressource ohne unerwartete Manipulation geliefert wurde.
    Das Attribut darf nur angegeben werden, wenn das `rel`-Attribut auf `stylesheet`, `preload` oder `modulepreload` gesetzt ist.
    Siehe [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity).
- `media`

  - : Dieses Attribut gibt an, auf welches Medium sich die verlinkte Ressource bezieht. Sein Wert muss ein Medientyp / [Medienabfrage](/de/docs/Web/CSS/CSS_media_queries) sein.
    Dieses Attribut ist hauptsächlich nützlich, wenn auf externe Stylesheets verlinkt wird — es ermöglicht dem User Agent, das am besten angepasste für das Gerät auszuwählen, auf dem es läuft.

- `referrerpolicy`

  - : Ein String, der angibt, welcher Referrer beim Abrufen der Ressource verwendet werden soll:
    - `no-referrer` bedeutet, dass der {{HTTPHeader("Referer")}}-Header nicht gesendet wird.
    - `no-referrer-when-downgrade` bedeutet, dass kein {{HTTPHeader("Referer")}}-Header gesendet wird, wenn zu einem Ursprung ohne TLS (HTTPS) navigiert wird.
      Dies ist das Standardverhalten eines User Agents, wenn keine andere Richtlinie vorgegeben ist.
    - `origin` bedeutet, dass der Referrer der Ursprung der Seite sein wird, was in etwa das Schema, den Host und den Port umfasst.
    - `origin-when-cross-origin` bedeutet, dass bei Navigation zu anderen Ursprüngen auf das Schema, den Host und den Port beschränkt wird, während bei Navigation innerhalb desselben Ursprungs der Referrer-Pfad eingeschlossen wird.
    - `unsafe-url` bedeutet, dass der Referrer den Ursprung und den Pfad enthalten wird (jedoch nicht das Fragment, das Passwort oder den Benutzernamen).
      Dieser Fall ist unsicher, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge leaken kann.

- [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)
  - : Dieses Attribut benennt eine Beziehung des verlinkten Dokuments zum aktuellen Dokument. Das Attribut muss eine durch Leerzeichen getrennte Liste von [Link-Typ-Werten](/de/docs/Web/HTML/Reference/Attributes/rel) sein.
- `sizes`

  - : Dieses Attribut definiert die Größen der Icons für visuelle Medien, die in der Ressource enthalten sind.
    Es muss nur vorhanden sein, wenn das [`rel`](#rel) einen Wert von `icon` oder einen Nicht-Standard-Typ wie Apples `apple-touch-icon` enthält.
    Es kann folgende Werte haben:

    - `any`, was bedeutet, dass das Icon auf jede Größe skaliert werden kann, da es in einem Vektorformat wie `image/svg+xml` vorliegt.
    - eine durch Leerzeichen getrennte Liste von Größen, jeweils im Format `<Breite in Pixel>x<Höhe in Pixel>` oder `<Breite in Pixel>X<Höhe in Pixel>`. Jede dieser Größen muss in der Ressource enthalten sein.

    > [!NOTE]
    > Die meisten Icon-Formate sind nur in der Lage, ein einziges Icon zu speichern; daher enthält das [`sizes`](#sizes)-Attribut meistens nur einen Eintrag.
    > Microsofts ICO-Format und Apples ICNS-Format können mehrere Icon-Größen in einer einzigen Datei speichern. ICO hat eine bessere Browser-Unterstützung, daher sollten Sie dieses Format verwenden, wenn plattformübergreifende Unterstützung eine Rolle spielt.

- `title`
  - : Das `title`-Attribut hat spezielle Semantik im `<link>`-Element.
    Wenn es in einem `<link rel="stylesheet">` verwendet wird, definiert es ein [Standard- oder ein alternatives Stylesheet](/de/docs/Web/HTML/Reference/Attributes/rel/alternate_stylesheet).
- `type`
  - : Dieses Attribut wird verwendet, um den Typ des verlinkten Inhalts zu definieren.
    Der Wert des Attributs sollte ein MIME-Typ sein, wie **text/html**, **text/css**, und so weiter.
    Die übliche Verwendung dieses Attributs ist es, den Typ des referenzierten Stylesheets zu definieren (wie **text/css**), jedoch ist es durch den ausschließlichen Gebrauch von CSS als Stylesheet-Sprache im Web, nicht nur möglich, das `type`-Attribut auszulassen, sondern es ist tatsächlich jetzt empfohlene Praxis.
    Es wird auch bei `rel="preload"` Linktypen verwendet, um sicherzustellen, dass der Browser nur Dateitypen herunterlädt, die er unterstützt.

### Nicht-standardmäßige Attribute

- `target` {{Deprecated_Inline}}
  - : Definiert den Frame- oder Fensternamen, der die definierte Link-Beziehung hat oder das die Darstellung einer beliebigen verlinkten Ressource zeigt.

### Veraltete Attribute

- `charset` {{deprecated_inline}}

  - : Dieses Attribut definiert die Zeichencodierung der verlinkten Ressource.
    Der Wert ist eine durch Leerzeichen und/oder Komma getrennte Liste von Zeichensätzen, wie definiert in {{rfc(2045)}}.
    Der Standardwert ist `iso-8859-1`.

    > [!NOTE]
    > Um den gleichen Effekt wie dieses veraltete Attribut zu erzielen, verwenden Sie den {{HTTPHeader("Content-Type")}} HTTP-Header auf der verlinkten Ressource.

- `rev` {{deprecated_inline}}

  - : Der Wert dieses Attributs zeigt die Beziehung des aktuellen Dokuments zum verlinkten Dokument, wie definiert durch das [`href`](#href)-Attribut.
    Das Attribut definiert somit die umgekehrte Beziehung verglichen mit dem Wert des `rel`-Attributs.
    [Link-Typ-Werte](/de/docs/Web/HTML/Reference/Attributes/rel) für das Attribut sind ähnlich den möglichen Werten für [`rel`](#rel).

    > [!NOTE]
    > Statt `rev` sollten Sie das [`rel`](#rel)-Attribut mit dem entgegengesetzten [Link-Typ-Wert](/de/docs/Web/HTML/Reference/Attributes/rel) verwenden.
    > Zum Beispiel, um den umgekehrten Link für `made` zu erstellen, geben Sie `author` an. Außerdem steht dieses Attribut nicht für "Revision" und darf nicht mit einer Versionsnummer verwendet werden, obwohl viele Seiten es fälschlicherweise so verwenden.

## Beispiele

### Einbinden eines Stylesheets

Um ein Stylesheet in eine Seite einzubinden, verwenden Sie die folgende Syntax:

```html
<link href="style.css" rel="stylesheet" />
```

### Bereitstellen alternativer Stylesheets

Sie können auch [alternative Stylesheets](/de/docs/Web/HTML/Reference/Attributes/rel/alternate_stylesheet) angeben.

Der Benutzer kann wählen, welches Stylesheet er verwenden möchte, indem er es aus dem Menü **Ansicht > Seitenstil** auswählt.
Dies bietet eine Möglichkeit für Benutzer, mehrere Versionen einer Seite zu sehen.

```html
<link href="default.css" rel="stylesheet" title="Default Style" />
<link href="fancy.css" rel="alternate stylesheet" title="Fancy" />
<link href="basic.css" rel="alternate stylesheet" title="Basic" />
```

### Bereitstellen von Icons für verschiedene Nutzungskontexte

Sie können auf derselben Seite Links zu mehreren Icons einfügen, und der Browser wählt dasjenige aus, das am besten zu seinem speziellen Kontext passt, indem er die `rel`- und `sizes`-Werte als Hinweise verwendet.

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

Für Informationen darüber, welche `Größen` Sie für Apple-Icons wählen sollten, siehe [Apples Dokumentation zur Konfiguration von Webanwendungen](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW4) und die referenzierten [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/app-icons#App-icon-sizes). In der Regel reicht es aus, ein großes Bild bereitzustellen, wie 192x192, und den Browser es herunterzuskalieren lassen, wie benötigt, aber Sie möchten möglicherweise Bilder mit unterschiedlichen Detailstufen für verschiedene Größen bereitstellen, wie es die Apple-Designrichtlinie empfiehlt. Das Bereitstellen kleinerer Icons für niedrigere Auflösungen spart auch Bandbreite.

Es könnte nicht notwendig sein, überhaupt `<link>`-Elemente bereitzustellen. Zum Beispiel fordern Browser automatisch `/favicon.ico` vom Stamm einer Website an und Apple fordert auch automatisch `/apple-touch-icon-[size].png`, `/apple-touch-icon.png`, etc. an. Allerdings schützt das Bereitstellen expliziter Links Sie vor Änderungen an diesen Konventionen.

### Bedingtes Laden von Ressourcen mit Medienabfragen

Sie können einen Medientyp oder eine Medienabfrage innerhalb eines `media`-Attributs angeben;
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

Sie können bestimmen, wann ein Stylesheet geladen wurde, indem Sie auf ein `load`-Ereignis achten, das darauf ausgelöst wird; ähnlich können Sie erkennen, wenn ein Fehler beim Verarbeiten eines Stylesheets aufgetreten ist, indem Sie auf ein `error`-Ereignis achten:

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
> Das `load`-Ereignis wird ausgelöst, sobald das Stylesheet und all seine importierten Inhalte geladen und geparst wurden, und unmittelbar bevor die Stile auf den Inhalt angewendet werden.

### Preload-Beispiele

Sie finden eine Anzahl von `<link rel="preload">`-Beispielen in [Inhalte mit `rel="preload"` vorab laden](/de/docs/Web/HTML/Reference/Attributes/rel/preload).

### Blockieren des Renderns, bis eine Ressource geladen ist

Sie können das `render`-Token innerhalb eines `blocking`-Attributs einschließen;
das Rendern der Seite wird blockiert, bis die Ressource geladen ist. Zum Beispiel:

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
      <td>Keiner; es ist ein {{Glossary("void_element", "Void-Element")}}.</td>
    </tr>
    <tr>
      <th>Tag-Auslassung</th>
      <td>Muss einen Anfangstag haben und darf keinen Endtag haben.</td>
    </tr>
    <tr>
      <th>Erlaubte Eltern</th>
      <td>
        Jedes Element, das Metadaten-Elemente akzeptiert.
        Wenn <a href="/de/docs/Web/HTML/Reference/Global_attributes/itemprop">itemprop</a> vorhanden ist: jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasierungsinhalt</a> akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
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
