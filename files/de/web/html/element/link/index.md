---
title: "<link>: Das External Resource Link-Element"
slug: Web/HTML/Element/link
l10n:
  sourceCommit: 7ab2f95b22919d8b897754e8a66981d0b9a4e2c4
---

{{HTMLSidebar}}

Das **`<link>`** [HTML](/de/docs/Web/HTML) Element spezifiziert Beziehungen zwischen dem aktuellen Dokument und einer externen Ressource.
Dieses Element wird am häufigsten verwendet, um auf {{Glossary("CSS", "Stylesheets")}} zu verlinken, aber es wird auch verwendet, um Site-Icons (sowohl "Favicon"-Stil-Icons als auch Icons für den Startbildschirm und Apps auf mobilen Geräten) und andere Dinge zu etablieren.

{{EmbedInteractiveExample("pages/tabbed/link.html", "tabbed-shorter")}}

Um ein externes Stylesheet zu verlinken, fügen Sie ein `<link>` Element in Ihrem {{HTMLElement("head")}} wie folgt ein:

```html
<link href="main.css" rel="stylesheet" />
```

Dieses einfache Beispiel gibt den Pfad zum Stylesheet im `href` Attribut an und ein [`rel`](/de/docs/Web/HTML/Attributes/rel) Attribut mit dem Wert `stylesheet`. Das `rel` steht für "relationship" (Beziehung) und ist eines der Schlüsselmerkmale des `<link>` Elements – der Wert zeigt an, wie das verlinkte Element mit dem Dokument in Beziehung steht.

Es gibt eine Reihe anderer allgemeiner Typen, die Ihnen begegnen werden. Zum Beispiel ein Link zum Favicon der Seite:

```html
<link rel="icon" href="favicon.ico" />
```

Es gibt eine Reihe weiterer Icon `rel` Werte, die hauptsächlich verwendet werden, um spezielle Icon-Typen für verschiedene mobile Plattformen anzugeben, zum Beispiel:

```html
<link
  rel="apple-touch-icon"
  sizes="114x114"
  href="apple-icon-114.png"
  type="image/png" />
```

Das `sizes` Attribut gibt die Icon-Größe an, während das `type` den MIME-Typ der verlinkten Ressource enthält.
Diese liefern nützliche Hinweise, damit der Browser das am besten geeignete Icon auswählen kann.

Sie können auch einen Medientyp oder eine Abfrage innerhalb eines `media` Attributs bereitstellen; diese Ressource wird dann nur geladen, wenn die Medienbedingung wahr ist. Zum Beispiel:

```html
<link href="print.css" rel="stylesheet" media="print" />
<link
  href="mobile.css"
  rel="stylesheet"
  media="screen and (max-width: 600px)" />
```

Einige interessante neue Leistungs- und Sicherheitsfunktionen wurden ebenfalls dem `<link>` Element hinzugefügt. Sehen Sie sich dieses Beispiel an:

```html
<link
  rel="preload"
  href="myFont.woff2"
  as="font"
  type="font/woff2"
  crossorigin="anonymous" />
```

Ein `rel` Wert von `preload` zeigt an, dass der Browser diese Ressource vorab laden sollte (siehe [`rel="preload"`](/de/docs/Web/HTML/Attributes/rel/preload) für mehr Details), wobei das `as` Attribut die spezifische Klasse von Inhalten angibt, die abgerufen werden.
Das `crossorigin` Attribut gibt an, ob die Ressource mit einer {{Glossary("CORS", "CORS")}} Anfrage abgerufen werden soll.

Weitere Verwendungshinweise:

- Ein `<link>` Element kann entweder im {{HTMLElement("head")}} oder im {{HTMLElement("body")}} Element vorkommen, abhängig davon, ob es einen [Link-Typ](https://html.spec.whatwg.org/multipage/links.html#body-ok) hat, der **body-ok** ist.
  Zum Beispiel ist der `stylesheet` Link-Typ body-ok, und daher ist `<link rel="stylesheet">` im Body erlaubt.
  Allerdings ist dies keine gute Praxis; es macht mehr Sinn, Ihre `<link>` Elemente von Ihrem Body-Inhalt zu trennen, indem Sie sie in den `<head>` setzen.
- Wenn Sie `<link>` verwenden, um ein Favicon für eine Website zu etablieren, und Ihre Website eine Content Security Policy (CSP) zur Verbesserung ihrer Sicherheit nutzt, gilt die Richtlinie auch für das Favicon.
  Wenn Sie Probleme haben, dass das Favicon nicht geladen wird, überprüfen Sie, dass die {{HTTPHeader("Content-Security-Policy")}} Header-Direktive [`img-src` directive](/de/docs/Web/HTTP/Headers/Content-Security-Policy/img-src) den Zugriff nicht verhindert.
- Die HTML- und XHTML-Spezifikationen definieren Ereignishandler für das `<link>` Element, aber es ist unklar, wie sie verwendet werden würden.
- Unter XHTML 1.0 erfordern {{Glossary("void_element", "void elements")}} wie `<link>` einen abschließenden Schrägstrich: `<link />`.
- WebTV unterstützt die Verwendung des Wertes `next` für `rel`, um die nächste Seite in einer Dokumentenserie vorab zu laden.

## Attribute

Dieses Element umfasst die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `as`

  - : Dieses Attribut ist erforderlich, wenn [`rel="preload"`](/de/docs/Web/HTML/Attributes/rel/preload) auf dem `<link>` Element gesetzt wurde, optional, wenn [`rel="modulepreload"`](/de/docs/Web/HTML/Attributes/rel/modulepreload) gesetzt wurde, und sollte ansonsten nicht verwendet werden.
    Es spezifiziert den Typ des Inhalts, der vom `<link>` geladen wird, was für die Anforderungserkennung, Anwendung der korrekten [Content Security Policy](/de/docs/Web/HTTP/CSP) und Einstellung des richtigen {{HTTPHeader("Accept")}} Anforderungs-Headers notwendig ist.

    Darüber hinaus verwendet `rel="preload"` dies als Signal für die Priorisierung von Anfragen.
    Die Tabelle unten listet die gültigen Werte für dieses Attribut und die Elemente oder Ressourcen auf, auf die sie angewendet werden.

    <table class="standard-table">
      <thead>
        <tr>
          <th scope="col">Wert</th>
          <th scope="col">Wendet sich an</th>
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
                <code>&#x3C;link></code>, um das crossorigin Attribut zu enthalten. Siehe <a href="/de/docs/Web/HTML/Attributes/rel/preload#cors-enabled_fetches">CORS-fähige Abrufen</a>.
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
                <code>&#x3C;link></code>, um das crossorigin Attribut zu enthalten. Siehe <a href="/de/docs/Web/HTML/Attributes/rel/preload#cors-enabled_fetches">CORS-fähige Abrufen</a>.
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

- `blocking` {{Experimental_Inline}}

  - : Dieses Attribut gibt explizit an, dass bestimmte Operationen beim Abrufen einer externen Ressource blockiert werden sollen. Es darf nur verwendet werden, wenn das `rel` Attribut die Schlüsselwörter `expect` oder `stylesheet` enthält. Die zu blockierenden Operationen müssen eine durch Leerzeichen getrennte Liste der unten aufgeführten Blockiertokens sein.
    - `render`: Das Rendering von Inhalten auf dem Bildschirm wird blockiert.

- [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)

  - : Dieses {{Glossary("Enumerated", "enumerierte")}} Attribut gibt an, ob {{Glossary("CORS", "CORS")}} beim Abrufen der Ressource verwendet werden muss.
    [CORS-fähige Bilder](/de/docs/Web/HTML/CORS_enabled_image) können im {{HTMLElement("canvas")}} Element ohne Verfälschung wiederverwendet werden.
    Die erlaubten Werte sind:

    - `anonymous`
      - : Eine Cross-Origin-Anfrage (d.h. mit einem {{HTTPHeader("Origin")}} HTTP-Header) wird durchgeführt, aber kein Anmeldedaten wird gesendet (d.h. kein Cookie, X.509-Zertifikat oder HTTP-Basic-Authentifizierung).
        Wenn der Server keine Anmeldedaten an die Ursprungsseite gibt (indem er den {{HTTPHeader("Access-Control-Allow-Origin")}} HTTP-Header nicht setzt), wird die Ressource verfälscht und ihre Nutzung eingeschränkt.
    - `use-credentials`
      - : Eine Cross-Origin-Anfrage (d.h. mit einem `Origin` HTTP-Header) wird zusammen mit einer Anmeldedatenanforderung gesendet (d.h. ein Cookie, Zertifikat und/oder HTTP Basic-Authentifizierung wird durchgeführt).
        Wenn der Server keine Anmeldedaten an die Ursprungsseite gibt (durch {{HTTPHeader("Access-Control-Allow-Credentials")}} HTTP Header), wird die Ressource _verfälscht_ und ihre Nutzung eingeschränkt.

    Wenn das Attribut nicht vorhanden ist, wird die Ressource ohne Anfrage über {{Glossary("CORS", "CORS")}} abgerufen (d.h. ohne den `Origin` HTTP-Header zu senden), was ihre unverfälschte Verwendung verhindert. Wenn ungültig, wird es behandelt, als wäre das enumerierte Schlüsselwort **anonymous** verwendet worden.
    Siehe [CORS Einstellungen Attribute](/de/docs/Web/HTML/Attributes/crossorigin) für weitere Informationen.

- `disabled`

  - : Nur für `rel="stylesheet"`, das `disabled` Boolean Attribut gibt an, ob das beschriebene Stylesheet geladen und auf das Dokument angewendet werden soll.
    Wenn `disabled` im HTML angegeben ist, wenn es geladen wird, wird das Stylesheet nicht während des Seitenladevorgangs geladen.
    Stattdessen wird das Stylesheet bei Bedarf geladen, wenn das `disabled` Attribut auf `false` geändert oder entfernt wird.

    Das Einstellen der `disabled` Eigenschaft im DOM führt dazu, dass das Stylesheet aus der Liste der [`Document.styleSheets`](/de/docs/Web/API/Document/styleSheets) des Dokuments entfernt wird.

- `fetchpriority`

  - : Gibt einen Hinweis auf die relative Priorität, die beim Abrufen einer vorab geladenen Ressource verwendet werden soll. Erlaubte Werte:

    - `high`
      - : Signalisiert ein Abrufen mit hoher Priorität im Verhältnis zu anderen Ressourcen desselben Typs.
    - `low`
      - : Signalisiert ein Abrufen mit niedriger Priorität im Verhältnis zu anderen Ressourcen desselben Typs.
    - `auto`
      - : Standard: Signalisiert die automatische Bestimmung der Abrufpriorität im Verhältnis zu anderen Ressourcen desselben Typs.

- `href`
  - : Dieses Attribut spezifiziert die {{Glossary("URL", "URL")}} der verlinkten Ressource. Eine URL kann absolut oder relativ sein.
- `hreflang`
  - : Dieses Attribut gibt die Sprache der verlinkten Ressource an.
    Es ist rein beratend.
    Erlaubte Werte werden durch {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}} spezifiziert.
    Verwenden Sie das Attribut nur, wenn das [`href`](/de/docs/Web/HTML/Element/a#href) Attribut vorhanden ist.
- `imagesizes`
  - : Nur für `rel="preload"` und `as="image"`, das `imagesizes` Attribut ist [ein Größenattribut](https://html.spec.whatwg.org/multipage/images.html#sizes-attribute), das angibt, dass die entsprechende Ressource, die von einem `img` Element mit entsprechenden Werten für `srcset` und `sizes` Attribute verwendet wird, vorab geladen werden soll.
- `imagesrcset`
  - : Nur für `rel="preload"` und `as="image"`, das `imagesrcset` Attribut ist [ein Quellenattribut](https://html.spec.whatwg.org/multipage/images.html#srcset-attribute), das angibt, dass die entsprechende Ressource, die von einem `img` Element mit entsprechenden Werten für `srcset` und `sizes` Attribute verwendet wird, vorab geladen werden soll.
- `integrity`
  - : Enthält Inline-Metadaten — einen Base64-codierten kryptographischen Hash der Ressource (Datei), die Sie dem Browser zum Abrufen angeben.
    Der Browser kann dies verwenden, um zu überprüfen, dass die abgerufene Ressource ohne unerwartete Manipulation bereitgestellt wurde.
    Das Attribut darf nur angegeben werden, wenn das `rel` Attribut auf `stylesheet`, `preload` oder `modulepreload` gesetzt ist.
    Siehe [Subresource Integrity](/de/docs/Web/Security/Subresource_Integrity).
- `media`

  - : Dieses Attribut spezifiziert die Medien, auf die die verlinkte Ressource angewendet wird. Sein Wert muss ein Medientyp / [Medienabfrage](/de/docs/Web/CSS/CSS_media_queries) sein.
    Dieses Attribut ist hauptsächlich nützlich, wenn auf externe Stylesheets verlinkt wird — es ermöglicht dem Benutzeragenten, das am besten angepasste auszuwählen, das auf dem Gerät läuft.

- `referrerpolicy`

  - : Ein String, der angibt, welcher Referrer beim Abrufen der Ressource verwendet werden soll:

    - `no-referrer` bedeutet, dass der {{HTTPHeader("Referer")}} Header nicht gesendet wird.
    - `no-referrer-when-downgrade` bedeutet, dass kein {{HTTPHeader("Referer")}} Header gesendet wird, wenn zu einem Ursprung ohne TLS (HTTPS) gewechselt wird.
      Dies ist das Standardverhalten eines Benutzeragenten, wenn keine Richtlinie anders spezifiziert ist.
    - `origin` bedeutet, dass der Referrer der Ursprung der Seite sein wird, was ungefähr das Schema, den Host und den Port umfasst.
    - `origin-when-cross-origin` bedeutet, dass beim Navigieren zu anderen Ursprüngen auf das Schema, den Host und den Port begrenzt wird, während beim Navigieren auf demselben Ursprung der Referrer-Pfad einbezogen wird.
    - `unsafe-url` bedeutet, dass der Referrer den Ursprung und den Pfad (aber nicht das Fragment, das Passwort oder den Benutzernamen) enthält.
      Dieser Fall ist unsicher, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge leaken kann.

- [`rel`](/de/docs/Web/HTML/Attributes/rel)
  - : Dieses Attribut benennt eine Beziehung des verlinkten Dokuments zum aktuellen Dokument. Das Attribut muss eine durch Leerzeichen getrennte Liste von [Link-Typ-Werten](/de/docs/Web/HTML/Attributes/rel) sein.
- `sizes`

  - : Dieses Attribut definiert die Größen der Icons für visuelle Medien, die in der Ressource enthalten sind.
    Es muss nur vorhanden sein, wenn das [`rel`](#rel) einen Wert von `icon` oder einen nicht standardmäßigen Typ wie Apples `apple-touch-icon` enthält.
    Es kann folgende Werte haben:

    - `any`, was bedeutet, dass das Icon auf jede Größe skaliert werden kann, da es im Vektorformat wie `image/svg+xml` vorliegt.
    - eine durch Leerzeichen getrennte Liste von Größen, jede im Format `<Breite in Pixel>x<Höhe in Pixel>` oder `<Breite in Pixel>X<Höhe in Pixel>`. Jede dieser Größen muss in der Ressource enthalten sein.

    > [!NOTE]
    > Die meisten Icon-Formate können nur ein einzelnes Icon speichern; daher enthält das [`sizes`](#sizes) Attribut meistens nur einen Eintrag.
    > Microsofts ICO-Format und Apples ICNS-Format können mehrere Icon-Größen in einer einzigen Datei speichern. ICO hat eine bessere Browserunterstützung, daher sollten Sie dieses Format verwenden, wenn Browser-übergreifende Unterstützung ein Anliegen ist.

- `title`
  - : Das `title` Attribut hat spezielle Semantik auf dem `<link>` Element.
    Wenn es auf einem `<link rel="stylesheet">` verwendet wird, definiert es ein [Standard- oder alternativ Stylesheet](/de/docs/Web/CSS/Alternative_style_sheets).
- `type`
  - : Dieses Attribut wird verwendet, um den Typ des verlinkten Inhalts zu definieren.
    Der Wert des Attributs sollte ein MIME-Typ wie **text/html**, **text/css** und so weiter sein.
    Die häufige Verwendung dieses Attributs ist die Definition des Typs des referenzierten Stylesheets (wie **text/css**), aber da CSS die einzige Stylesheet-Sprache im Web ist, ist es mittlerweile nicht nur möglich, das `type` Attribut wegzulassen, es wird auch empfohlen.

### Nicht-standardmäßige Attribute

- `target` {{Deprecated_Inline}}
  - : Definiert den Frame- oder Fensternamen, der die definierte Verknüpfungsbeziehung hat oder der die Darstellung der verlinkten Ressource zeigt.

### Veraltete Attribute

- `charset` {{deprecated_inline}}

  - : Dieses Attribut definiert die Zeichenkodierung der verlinkten Ressource.
    Der Wert ist eine durch Leer- und/oder Kommata getrennte Liste von Zeichensätzen, wie in {{rfc(2045)}} definiert.
    Der Standardwert ist `iso-8859-1`.

    > [!NOTE]
    > Um den gleichen Effekt wie dieses veraltete Attribut zu erzeugen, verwenden Sie den {{HTTPHeader("Content-Type")}} HTTP-Header auf der verlinkten Ressource.

- `rev` {{deprecated_inline}}

  - : Der Wert dieses Attributs zeigt die Beziehung des aktuellen Dokuments zum verlinkten Dokument an, wie durch das [`href`](#href) Attribut definiert.
    Das Attribut definiert somit die umgekehrte Beziehung im Vergleich zum Wert des `rel` Attributs.
    [Link-Typ-Werte](/de/docs/Web/HTML/Attributes/rel) für das Attribut sind ähnlich den möglichen Werten für [`rel`](#rel).

    > [!NOTE]
    > Anstelle von `rev` sollten Sie das [`rel`](#rel) Attribut mit dem gegensätzlichen [Link-Typ-Wert](/de/docs/Web/HTML/Attributes/rel) verwenden.
    > Beispiel: Um den umgekehrten Link für `made` festzulegen, geben Sie `author` an. Dieses Attribut steht auch nicht für "Revision" und darf nicht mit einer Versionsnummer verwendet werden, obwohl viele Websites es auf diese Weise missbrauchen.

## Beispiele

### Einbinden eines Stylesheets

Um ein Stylesheet in eine Seite einzubinden, verwenden Sie folgende Syntax:

```html
<link href="style.css" rel="stylesheet" />
```

### Bereitstellen alternativer Stylesheets

Sie können auch [alternative Stylesheets](/de/docs/Web/CSS/Alternative_style_sheets) angeben.

Der Benutzer kann auswählen, welches Stylesheet er verwenden möchte, indem er es aus dem Menü **Ansicht > Seitenstil** auswählt.
Dies bietet eine Möglichkeit, mehreren Versionen einer Seite anzuzeigen.

```html
<link href="default.css" rel="stylesheet" title="Default Style" />
<link href="fancy.css" rel="alternate stylesheet" title="Fancy" />
<link href="basic.css" rel="alternate stylesheet" title="Basic" />
```

### Bereitstellen von Icons für verschiedene Nutzungskontexte

Sie können Links zu mehreren Icons auf derselben Seite hinzufügen, und der Browser wählt anhand der `rel` und `sizes` Werte als Hinweise das am besten passende für seinen speziellen Kontext aus.

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

Für Informationen darüber, welche `sizes` für Apple-Icons auszuwählen sind, siehe [Apples Dokumentation zur Konfiguration von Webanwendungen](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW4) und die referenzierten [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/app-icons#App-icon-sizes). In der Regel reicht es aus, ein großes Bild, wie 192x192, bereitzustellen und den Browser es bei Bedarf herunter skalieren zu lassen, aber Sie möchten möglicherweise Bilder mit unterschiedlichen Detailstufen für verschiedene Größen bereitstellen, wie es die Apple-Design-Richtlinie empfiehlt. Kleinere Icons für niedrigere Auflösungen bereitzustellen spart auch Bandbreite.

Es kann nicht notwendig sein, überhaupt `<link>` Elemente bereitzustellen. Zum Beispiel verlangen Browser automatisch `/favicon.ico` vom Stamm einer Website, und Apple verlangt automatisch `/apple-touch-icon-[size].png`, `/apple-touch-icon.png` usw. Bereitstellung expliziter Links schützt Sie jedoch vor Änderungen dieser Konventionen.

### Bedingtes Laden von Ressourcen mit Medienabfragen

Sie können einen Medientyp oder eine Abfrage innerhalb eines `media` Attributs angeben;
diese Ressource wird nur geladen werden, wenn die Medienbedingung wahr ist. Zum Beispiel:

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

Sie können feststellen, wann ein Stylesheet geladen wurde, indem Sie auf ein `load` Ereignis achten, das darauf ausgelöst wird; ähnlich können Sie feststellen, ob ein Fehler beim Verarbeiten eines Stylesheets aufgetreten ist, indem Sie auf ein `error` Ereignis achten:

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
> Das `load` Ereignis wird ausgelöst, sobald das Stylesheet und alle seine importierten Inhalte geladen und geparst wurden, und unmittelbar bevor die Stile auf den Inhalt angewendet werden.

### Preload Beispiele

Sie finden eine Reihe von `<link rel="preload">` Beispielen in [Inhalt mit `rel="preload"` vorab laden](/de/docs/Web/HTML/Attributes/rel/preload).

### Rendering blockieren, bis eine Ressource abgerufen wurde

Sie können das `render` Token innerhalb eines `blocking` Attributes einschließen;
das Rendern der Seite wird blockiert, bis die Ressource abgerufen worden ist. Zum Beispiel:

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
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Flussinhalt</a> und
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Formulierungsinhalt</a>.
      </td>
    </tr>
    <tr>
      <th>Erlaubter Inhalt</th>
      <td>Keiner; es ist ein {{Glossary("void_element", "void element")}}.</td>
    </tr>
    <tr>
      <th>Tag-Auslassung</th>
      <td>Muss ein Start-Tag haben und darf keinen End-Tag haben.</td>
    </tr>
    <tr>
      <th>Erlaubte Eltern</th>
      <td>
        Jedes Element, das Metadaten akzeptiert.
        Wenn <a href="/de/docs/Web/HTML/Global_attributes/itemprop">itemprop</a> vorhanden ist: jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Formulierungsinhalt</a> akzeptiert.
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
