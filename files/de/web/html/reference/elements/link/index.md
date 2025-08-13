---
title: "<link>: Das External Resource Link-Element"
slug: Web/HTML/Reference/Elements/link
l10n:
  sourceCommit: 0e2ec54f4eb55cccad11af843d83061857918bee
---

Das **`<link>`** [HTML](/de/docs/Web/HTML) Element spezifiziert Beziehungen zwischen dem aktuellen Dokument und einer externen Ressource. Dieses Element wird am häufigsten verwendet, um auf {{Glossary("CSS", "Stylesheets")}} zu verlinken, es wird aber auch verwendet, um Site-Icons festzulegen (sowohl "Favicon"-Stil-Icons als auch Icons für den Startbildschirm und Apps auf mobilen Geräten), unter anderem.

{{InteractiveExample("HTML Demo: &lt;link&gt;", "tabbed-shorter")}}

```html interactive-example
<link href="/shared-assets/misc/link-element-example.css" rel="stylesheet" />

<p>This text will be red as defined in the external stylesheet.</p>
<p style="color: blue">
  The <code>style</code> attribute can override it, though.
</p>
```

Um ein externes Stylesheet zu verlinken, fügen Sie ein `<link>`-Element in Ihrem {{HTMLElement("head")}} wie folgt ein:

```html
<link href="main.css" rel="stylesheet" />
```

Dieses Beispiel bietet den Pfad zum Stylesheet innerhalb eines `href`-Attributs und einem [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel) Attribut mit dem Wert `stylesheet`. Das `rel` steht für "relationship" (Beziehung) und ist eines der Schlüsselelemente des `<link>`-Elements — der Wert zeigt, wie das verlinkte Element zum umgebenden Dokument steht.

Es gibt eine Reihe weiterer gängiger Typen, denen Sie begegnen werden. Zum Beispiel ein Link zum Site-Favicon:

```html
<link rel="icon" href="favicon.ico" />
```

Es gibt eine Reihe weiterer Icon `rel` Werte, die hauptsächlich verwendet werden, um spezielle Icon-Typen für verschiedene mobile Plattformen anzuzeigen, z. B.:

```html
<link
  rel="apple-touch-icon"
  sizes="114x114"
  href="apple-icon-114.png"
  type="image/png" />
```

Das `sizes`-Attribut gibt die Größe des Icons an, während `type` den MIME-Typ der verlinkten Ressource enthält. Diese Attribute bieten nützliche Hinweise, damit der Browser das am besten geeignete Icon auswählen kann.

Sie können auch einen Medientyp oder eine Abfrage innerhalb eines `media`-Attributs angeben; diese Ressource wird dann nur geladen, wenn die Medienbedingung wahr ist. Zum Beispiel:

```html
<link href="print.css" rel="stylesheet" media="print" />
<link href="mobile.css" rel="stylesheet" media="screen and (width <= 600px)" />
```

Einige interessante neue Leistungs- und Sicherheitsfeatures wurden auch dem `<link>`-Element hinzugefügt. Betrachten Sie dieses Beispiel:

```html
<link
  rel="preload"
  href="myFont.woff2"
  as="font"
  type="font/woff2"
  crossorigin="anonymous" />
```

Ein `rel`-Wert von `preload` gibt an, dass der Browser diese Ressource vorladen soll (siehe [`rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload) für weitere Details), wobei das `as`-Attribut die spezifische Klasse des zu holenden Inhalts angibt. Das `crossorigin` Attribut gibt an, ob die Ressource mit einer {{Glossary("CORS", "CORS")}} Anfrage abgerufen werden soll.

Weitere Nutzungshinweise:

- Ein `<link>`-Element kann entweder im {{HTMLElement("head")}} oder {{HTMLElement("body")}} Element vorkommen, abhängig davon, ob es einen [Linktyp](https://html.spec.whatwg.org/multipage/links.html#body-ok) hat, der **body-ok** ist. Zum Beispiel ist der `stylesheet` Linktyp body-ok, und daher ist `<link rel="stylesheet">` im Body erlaubt. Es ist jedoch keine gute Praxis, dies zu befolgen; es ist sinnvoller, Ihre `<link>`-Elemente von Ihrem Body-Inhalt zu trennen und sie im `<head>` zu platzieren.
- Wenn Sie `<link>` verwenden, um ein Favicon für eine Website festzulegen, und Ihre Website eine Content Security Policy (CSP) verwendet, um ihre Sicherheit zu erhöhen, gilt die Richtlinie auch für das Favicon. Wenn es Probleme mit dem Laden des Favicon gibt, überprüfen Sie, ob der {{HTTPHeader("Content-Security-Policy")}} Header's [`img-src` Richtlinie](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/img-src) den Zugriff darauf nicht verhindert.
- Die HTML- und XHTML-Spezifikationen definieren Event-Handler für das `<link>`-Element, aber es ist unklar, wie sie verwendet würden.
- Zusätzlich zu XHTML 1.0 erfordern {{Glossary("void_element", "leere Elemente")}} wie `<link>` einen abschließenden Slash: `<link />`.
- WebTV unterstützt die Verwendung des Werts `next` für `rel`, um die nächste Seite in einer Dokumentenreihe vorzuladen.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `as`
  - : Dieses Attribut ist erforderlich, wenn [`rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload) auf dem `<link>`-Element gesetzt wurde, optional, wenn [`rel="modulepreload"`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload) gesetzt wurde, und sollte ansonsten nicht verwendet werden. Es gibt den Typ des Inhalts an, der vom `<link>` geladen wird, was für die Anforderungsvergleiche, die Anwendung der korrekten [Content-Security-Policy](/de/docs/Web/HTTP/Guides/CSP) und das Setzen des korrekten {{HTTPHeader("Accept")}} Anforderungs-Headers notwendig ist.

    Außerdem verwendet `rel="preload"` dies als Signal zur Priorisierung von Anfragen. Die nachfolgende Tabelle listet die gültigen Werte für dieses Attribut und die Elemente oder Ressourcen, auf die sie zutreffen.

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
                <code>&#x3C;link></code> das crossorigin-Attribut zu enthalten, siehe <a href="/de/docs/Web/HTML/Reference/Attributes/rel/preload#cors-enabled_fetches">CORS-aktivierte Abrufe</a>.
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
                <code>&#x3C;link></code> das crossorigin-Attribut zu enthalten, siehe <a href="/de/docs/Web/HTML/Reference/Attributes/rel/preload#cors-enabled_fetches">CORS-aktivierte Abrufe</a>.
              </p>
            </div>
          </td>
        </tr>
        <tr>
          <td>image</td>
          <td>
            <code>&#x3C;img></code> und <code>&#x3C;picture></code> Elemente mit
            srcset oder imageset Attributen, SVG <code>&#x3C;image></code> Elemente,
            CSS <code>*-image</code>-Regeln
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
  - : Dieses Attribut zeigt ausdrücklich an, dass bestimmte Operationen blockiert werden sollten, bis spezifische Bedingungen erfüllt sind. Es darf nur verwendet werden, wenn das `rel`-Attribut die Schlüsselwörter `expect` oder `stylesheet` enthält. Mit [`rel="expect"`](/de/docs/Web/HTML/Reference/Attributes/rel#expect) zeigt es an, dass Operationen blockiert werden sollen, bis ein bestimmter DOM-Knoten analysiert wurde. Mit [`rel="stylesheet"`](/de/docs/Web/HTML/Reference/Attributes/rel#stylesheet) gibt es an, dass Operationen blockiert werden sollen, bis ein externes Stylesheet und seine kritischen Subressourcen abgerufen und auf das Dokument angewendet wurden. Die zu blockierenden Operationen müssen eine durch Leerzeichen getrennte Liste von blockierenden Tokens sein, die unten aufgeführt sind. Derzeit gibt es nur ein Token:
    - `render`: Das Rendern von Inhalten auf dem Bildschirm wird blockiert.

    > [!NOTE]
    > Nur `link` Elemente im `<head>` des Dokuments können das Rendern blockieren. Standardmäßig blockiert ein `link` mit `rel="stylesheet"` im `<head>` das Rendern, wenn der Browser es beim Parsen entdeckt. Wenn ein solches `link`-Element dynamisch über Skripting hinzugefügt wird, müssen Sie außerdem `blocking = "render"` setzen, damit es das Rendern blockiert.

- [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)
  - : Dieses {{Glossary("Enumerated", "aufgezählte")}} Attribut gibt an, ob {{Glossary("CORS", "CORS")}} beim Abrufen der Ressource verwendet werden muss. [CORS-fähige Bilder](/de/docs/Web/HTML/How_to/CORS_enabled_image) können im {{HTMLElement("canvas")}} Element wiederverwendet werden, ohne _verunreinigt_ zu werden. Die erlaubten Werte sind:
    - `anonymous`
      - : Eine Cross-Origin-Anfrage (d.h. mit einem {{HTTPHeader("Origin")}} HTTP-Header) wird ausgeführt, aber es werden keine Anmeldedaten gesendet (d.h. kein Cookie, X.509-Zertifikat oder HTTP-Basisauthentifizierung). Wenn der Server keine Anmeldedaten an die Ursprungsseite übergibt (indem er den {{HTTPHeader("Access-Control-Allow-Origin")}} HTTP-Header nicht setzt), wird die Ressource verunreinigt und ihre Nutzung eingeschränkt.
    - `use-credentials`
      - : Eine Cross-Origin-Anfrage (d.h. mit einem `Origin` HTTP-Header) wird ausgeführt, zusammen mit Anmeldedaten (d.h. ein Cookie, Zertifikat und/oder HTTP-Basisauthentifizierung wird durchgeführt). Wenn der Server keine Anmeldedaten an die Ursprungsseite übergibt (durch {{HTTPHeader("Access-Control-Allow-Credentials")}} HTTP-Header), wird die Ressource _verunreinigt_ und ihre Nutzung eingeschränkt.

    Wenn das Attribut nicht vorhanden ist, wird die Ressource ohne eine {{Glossary("CORS", "CORS")}} Anfrage abgerufen (d.h. ohne den `Origin` HTTP-Header zu senden), was ihre unverunreinigte Nutzbarkeit verhindert. Wenn ungültig, wird dies so behandelt, als wäre das Schlüsselwort **anonymous** verwendet worden. Siehe [CORS-Einstellungseigenschaften](/de/docs/Web/HTML/Reference/Attributes/crossorigin) für zusätzliche Informationen.

- `disabled`
  - : Für `rel="stylesheet"`: das `disabled`-Boolesche Attribut gibt an, ob das beschriebene Stylesheet geladen und auf das Dokument angewendet werden soll. Wenn `disabled` im HTML beim Laden gesetzt ist, wird das Stylesheet während des Seitenaufbaus nicht geladen. Stattdessen wird das Stylesheet nach Bedarf geladen, wenn und falls das `disabled`-Attribut auf `false` geändert oder entfernt wird.

    Das Setzen der `disabled`-Eigenschaft im DOM bewirkt, dass das Stylesheet aus der [`Document.styleSheets`](/de/docs/Web/API/Document/styleSheets) Liste des Dokuments entfernt wird.

- `fetchpriority`
  - : Bietet einen Hinweis auf die relative Priorität, die beim Abrufen einer Ressource eines bestimmten Typs verwendet werden soll. Erlaubte Werte:
    - `high`
      - : Ruft die Ressource mit hoher Priorität im Vergleich zu anderen Ressourcen desselben Typs ab.
    - `low`
      - : Ruft die Ressource mit niedriger Priorität im Vergleich zu anderen Ressourcen desselben Typs ab.
    - `auto`
      - : Setzt keine Präferenz für die Abrufpriorität.
        Dies ist der Standard.
        Es wird verwendet, wenn kein Wert oder ein ungültiger Wert gesetzt ist.

    Siehe [`HTMLLinkElement.fetchPriority`](/de/docs/Web/API/HTMLLinkElement/fetchPriority) für weitere Informationen.

- `href`
  - : Dieses Attribut gibt die {{Glossary("URL", "URL")}} der verlinkten Ressource an. Eine URL kann absolut oder relativ sein.
- `hreflang`
  - : Dieses Attribut gibt die Sprache der verlinkten Ressource an. Es ist rein beratend. Erlaubte Werte werden durch {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}} festgelegt. Verwenden Sie dieses Attribut nur, wenn das [`href`](/de/docs/Web/HTML/Reference/Elements/a#href) Attribut vorhanden ist.
- `imagesizes`
  - : Nur für `rel="preload"` und `as="image"`, das `imagesizes`-Attribut hat eine ähnliche Syntax und Semantik wie das [`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes) Attribut, das angibt, die entsprechende Ressource vorzuladen, die von einem `img`-Element mit entsprechenden Werten für seine `srcset`- und `sizes`-Attribute verwendet wird.
- `imagesrcset`
  - : Nur für `rel="preload"` und `as="image"`, das `imagesrcset`-Attribut hat eine ähnliche Syntax und Semantik wie das [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset) Attribut, das angibt, die entsprechende Ressource vorzuhalten, die von einem `img`-Element mit entsprechenden Werten für seine `srcset`- und `sizes`-Attribute verwendet wird.
- `integrity`
  - : Enthält Inline-Metadaten — einen Base64-kodierten kryptographischen Hash der Ressource (Datei), die Sie den Browser abrufen lassen. Der Browser kann dies verwenden, um zu überprüfen, dass die abgerufene Ressource ohne unerwartete Manipulation geliefert wurde. Das Attribut darf nur angegeben werden, wenn das `rel`-Attribut auf `stylesheet`, `preload` oder `modulepreload` gesetzt ist. Siehe [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity).
- `media`
  - : Dieses Attribut spezifiziert das Medium, auf das die verlinkte Ressource angewendet wird. Sein Wert muss ein Medientyp / [Media Query](/de/docs/Web/CSS/CSS_media_queries) sein. Dieses Attribut ist hauptsächlich nützlich, wenn auf externe Stylesheets verlinkt wird — es ermöglicht dem Benutzeragenten, das am besten geeignete für das Gerät, auf dem es läuft, auszuwählen.

- `referrerpolicy`
  - : Ein String, der angibt, welchen Referrer man beim Abrufen der Ressource verwenden soll:
    - `no-referrer` bedeutet, dass der {{HTTPHeader("Referer")}}-Header nicht gesendet wird.
    - `no-referrer-when-downgrade` bedeutet, dass kein {{HTTPHeader("Referer")}}-Header gesendet wird, wenn zu einem Ursprung ohne TLS (HTTPS) navigiert wird. Dieses Verhalten ist das Standardverhalten eines Benutzeragenten, wenn keine andere Richtlinie angegeben ist.
    - `origin` bedeutet, dass der Referrer der Ursprung der Seite sein wird, der ungefähr das Schema, der Host und der Port ist.
    - `origin-when-cross-origin` bedeutet, dass bei der Navigation zu anderen Ursprüngen auf das Schema, den Host und den Port beschränkt wird, während beim Navigieren im selben Ursprung der Pfad des Referenzierers enthalten ist.
    - `unsafe-url` bedeutet, dass der Referrer den Ursprung und den Pfad (aber nicht das Fragment, Passwort oder Benutzername) enthält. Dieser Fall ist unsicher, da er Ursprünge und Pfade von TLS-gesicherten Ressourcen zu unsicheren Ursprüngen leaken kann.

- [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)
  - : Dieses Attribut benennt eine Beziehung des verlinkten Dokuments zum aktuellen Dokument. Das Attribut muss eine durch Leerzeichen getrennte Liste von [Linktypwerten](/de/docs/Web/HTML/Reference/Attributes/rel) sein.
- `sizes`
  - : Dieses Attribut definiert die Größen der Icons für visuelle Medien, die in der Ressource enthalten sind. Es muss nur vorhanden sein, wenn das [`rel`](#rel) einen Wert `icon` oder einen nicht-standardisierten Typ wie Apples `apple-touch-icon` enthält. Es kann die folgenden Werte haben:
    - `any`, was bedeutet, dass das Icon auf jede Größe skaliert werden kann, da es in einem Vektorformat wie `image/svg+xml` vorliegt.
    - eine durch Leerzeichen getrennte Liste von Größen, jeweils im Format `<Breite in Pixel>x<Höhe in Pixel>` oder `<Breite in Pixel>X<Höhe in Pixel>`. Jede dieser Größen muss in der Ressource enthalten sein.

    > [!NOTE]
    > Die meisten Icon-Formate können nur ein einzelnes Icon speichern; daher enthält das [`sizes`](#sizes)-Attribut meistens nur einen Eintrag.
    > Microsofts ICO-Format und Apples ICNS-Format können mehrere Icon-Größen in einer einzigen Datei speichern. ICO hat eine bessere Browser-Unterstützung, daher sollten Sie dieses Format verwenden, wenn eine browserübergreifende Kompatibilität wichtig ist.

- `title`
  - : Das `title` Attribut hat spezielle Semantik auf dem `<link>`-Element. Wenn es auf einem `<link rel="stylesheet">` verwendet wird, definiert es ein [Standard- oder alternatives Stylesheet](/de/docs/Web/HTML/Reference/Attributes/rel/alternate_stylesheet).
- `type`
  - : Dieses Attribut wird verwendet, um den Typ des verlinkten Inhalts zu definieren. Der Wert des Attributs sollte ein MIME-Typ sein, wie **text/html**, **text/css**, und so weiter. Der häufigste Gebrauch dieses Attributs ist, den Typ des referenzierten Stylesheets zu definieren (wie **text/css**), aber da CSS die einzige Stylesheetsprache ist, die im Web verwendet wird, ist es nicht nur möglich, das `type`-Attribut wegzulassen, sondern es ist tatsächlich jetzt empfohlene Praxis. Es wird auch bei `rel="preload"` Linktypen verwendet, um sicherzustellen, dass der Browser nur Dateitypen herunterlädt, die er unterstützt.

### Nicht-standardmäßige Attribute

- `target` {{Deprecated_Inline}}
  - : Definiert den Frame- oder Fensternamen, der die definierte Verknüpfungsbeziehung hat oder die Darstellung einer verlinkten Ressource anzeigen wird.

### Veraltete Attribute

- `charset` {{deprecated_inline}}
  - : Dieses Attribut definiert die Zeichencodierung der verlinkten Ressource. Der Wert ist eine durch Leerzeichen und/oder Kommas getrennte Liste von Zeichensätzen, wie sie in {{rfc(2045)}} definiert sind. Der Standardwert ist `iso-8859-1`.

    > [!NOTE]
    > Um denselben Effekt wie dieses veraltete Attribut zu erzielen, verwenden Sie den {{HTTPHeader("Content-Type")}} HTTP-Header auf der verlinkten Ressource.

- `rev` {{deprecated_inline}}
  - : Der Wert dieses Attributs zeigt die Beziehung des aktuellen Dokuments zur verlinkten Ressource an, wie durch das [`href`](#href) Attribut definiert. Das Attribut definiert somit die umgekehrte Beziehung im Vergleich zum Wert des `rel` Attributs. [Linktypwerte](/de/docs/Web/HTML/Reference/Attributes/rel) für das Attribut sind ähnlich zu den möglichen Werten für [`rel`](#rel).

    > [!NOTE]
    > Statt `rev` sollten Sie das [`rel`](#rel) Attribut mit dem entgegengesetzten [Linktypwert](/de/docs/Web/HTML/Reference/Attributes/rel) verwenden.
    > Zum Beispiel, um die umgekehrte Verbindung für `made` herzustellen, spezifizieren Sie `author`. Außerdem steht dieses Attribut nicht für "revision" und darf nicht mit einer Versionsnummer verwendet werden, obwohl viele Websites es missbräuchlich auf diese Weise verwenden.

## Beispiele

### Einfügen eines Stylesheets

Um ein Stylesheet in eine Seite einzufügen, verwenden Sie die folgende Syntax:

```html
<link href="style.css" rel="stylesheet" />
```

### Bereitstellung alternativer Stylesheets

Sie können auch [alternative Stylesheets](/de/docs/Web/HTML/Reference/Attributes/rel/alternate_stylesheet) angeben.

Der Benutzer kann wählen, welches Stylesheet verwendet werden soll, indem er es aus dem Menü **Ansicht > Seitenstil** auswählt. Dies bietet eine Möglichkeit für Benutzer, mehrere Versionen einer Seite zu sehen.

```html
<link href="default.css" rel="stylesheet" title="Default Style" />
<link href="fancy.css" rel="alternate stylesheet" title="Fancy" />
<link href="basic.css" rel="alternate stylesheet" title="Basic" />
```

### Bereitstellung von Icons für verschiedene Nutzungskontexte

Sie können Links zu mehreren Icons auf derselben Seite einfügen, und der Browser wählt aus, welches am besten für seinen jeweiligen Kontext geeignet ist, indem er die `rel`- und `sizes`-Werte als Hinweise verwendet.

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

Für Informationen darüber, welche `sizes` für Apple-Icons zu wählen sind, siehe [Apples Dokumentation zur Konfiguration von Webanwendungen](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW4) und die referenzierten [Apple human interface guidelines](https://developer.apple.com/design/human-interface-guidelines/app-icons#App-icon-sizes). Üblicherweise ist es ausreichend, ein großes Bild, wie 192x192, bereitzustellen und den Browser es nach Bedarf skalieren zu lassen, aber es kann sinnvoll sein, Bilder mit unterschiedlichen Detailebenen für verschiedene Größen bereitzustellen, wie es die Apple-Designrichtlinien empfehlen. Das Bereitstellen kleinerer Icons für geringere Auflösungen spart zudem Bandbreite.

Es kann nicht notwendig sein, `<link>`-Elemente überhaupt bereitzustellen. Zum Beispiel fordern Browser automatisch `/favicon.ico` vom Stamm einer Site an, und Apple fordert auch automatisch `/apple-touch-icon-[size].png`, `/apple-touch-icon.png` usw. an. Das explizite Bereitstellen von Links schützt Sie jedoch vor Änderungen an diesen Konventionen.

### Bedingtes Laden von Ressourcen mit Media Queries

Sie können einen Medientyp oder eine Abfrage innerhalb eines `media`-Attributs angeben; diese Ressource wird dann nur geladen, wenn die Medienbedingung wahr ist. Zum Beispiel:

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

Sie können feststellen, wann ein Stylesheet geladen wurde, indem Sie warten, bis ein `load`-Ereignis darauf ausgelöst wird; ähnlich können Sie feststellen, ob ein Fehler beim Verarbeiten eines Stylesheets aufgetreten ist, indem Sie auf ein `error`-Ereignis warten:

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
> Das `load`-Ereignis tritt auf, sobald das Stylesheet und all seine importierten Inhalte geladen und analysiert wurden, und unmittelbar bevor die Stile auf den Inhalt angewendet werden.

### Preload-Beispiele

Sie finden eine Reihe von `<link rel="preload">` Beispielen in [Preloading content with `rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload).

### Rendern blockieren, bis eine Ressource abgerufen ist

Sie können das Token `render` innerhalb eines `blocking`-Attributs einfügen; das Rendern der Seite wird blockiert, bis die Ressource und ihre kritischen Subressourcen abgerufen und auf das Dokument angewendet wurden. Zum Beispiel:

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Fließinhalt</a> und
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasinhalte</a>.
      </td>
    </tr>
    <tr>
      <th>Erlaubter Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "void element")}}.</td>
    </tr>
    <tr>
      <th>Tag Auslassung</th>
      <td>Muss ein Start-Tag haben und darf kein End-Tag haben.</td>
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
