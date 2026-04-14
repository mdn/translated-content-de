---
title: "<link>: Das External Resource Link-Element"
slug: Web/HTML/Reference/Elements/link
l10n:
  sourceCommit: fef6630e9b90f9794d3194ea8389ff70599c6884
---

Das **`<link>`** [HTML](/de/docs/Web/HTML)-Element spezifiziert Beziehungen zwischen dem aktuellen Dokument und einer externen Ressource.
Dieses Element wird am häufigsten verwendet, um auf {{Glossary("CSS", "Stylesheets")}} zu verlinken, aber auch um Seitensymbole (sowohl "Favicon" als auch Symbole für den Startbildschirm und Apps auf mobilen Geräten) unter anderem festzulegen.

{{InteractiveExample("HTML Demo: &lt;link&gt;", "tabbed-shorter")}}

```html interactive-example
<link href="/shared-assets/misc/link-element-example.css" rel="stylesheet" />

<p>This text will be red as defined in the external stylesheet.</p>
<p style="color: blue">
  The <code>style</code> attribute can override it, though.
</p>
```

Um auf ein externes Stylesheet zu verlinken, würden Sie ein `<link>`-Element innerhalb Ihres {{HTMLElement("head")}} so einschließen:

```html
<link href="main.css" rel="stylesheet" />
```

Dieses Beispiel gibt den Pfad zum Stylesheet innerhalb eines `href`-Attributs an und ein [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)-Attribut mit dem Wert `stylesheet`. `rel` steht für "Beziehung" und ist eines der Schlüsselelemente des `<link>`-Elements – der Wert gibt an, wie der verlinkte Artikel mit dem beinhalteten Dokument in Beziehung steht.

Es gibt eine Reihe anderer üblicher Typen, denen Sie begegnen werden. Zum Beispiel ein Link zum Favicon der Seite:

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

Das `sizes`-Attribut gibt die Icon-Größe an, während `type` den MIME-Typ der verlinkten Ressource enthält.
Diese bieten nützliche Hinweise, die es dem Browser ermöglichen, das am besten geeignete Icon auszuwählen.

Sie können in einem `media`-Attribut auch einen Medientyp oder -abfrage bereitstellen; diese Ressource wird dann nur geladen, wenn die Medienbedingung zutrifft. Zum Beispiel:

```html
<link href="print.css" rel="stylesheet" media="print" />
<link href="mobile.css" rel="stylesheet" media="screen and (width <= 600px)" />
```

Einige interessante neue Leistungs- und Sicherheitsfunktionen wurden dem `<link>`-Element ebenfalls hinzugefügt. Schauen Sie sich dieses Beispiel an:

```html
<link
  rel="preload"
  href="myFont.woff2"
  as="font"
  type="font/woff2"
  crossorigin="anonymous" />
```

Ein `rel`-Wert von `preload` gibt an, dass der Browser diese Ressource vorladen soll (siehe [`rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload) für weitere Details), wobei das `as`-Attribut die spezifische Klasse des abgerufenen Inhalts angibt.
Das `crossorigin`-Attribut gibt an, ob die Ressource mit einer {{Glossary("CORS", "CORS")}}-Anfrage abgerufen werden soll.

Weitere Anwendungshinweise:

- Ein `<link>`-Element kann entweder im {{HTMLElement("head")}}- oder im {{HTMLElement("body")}}-Element vorkommen, abhängig davon, ob es einen [link type](https://html.spec.whatwg.org/multipage/links.html#body-ok) hat, der **body-ok** ist.
  Zum Beispiel ist der `stylesheet`-Linktyp body-ok, und daher ist `<link rel="stylesheet">` im Body erlaubt.
  Es ist jedoch keine gute Praxis, dies zu befolgen; es ist sinnvoller, Ihre `<link>`-Elemente von Ihrem Body-Inhalt zu trennen, indem Sie sie im `<head>` ablegen.
- Bei der Verwendung von `<link>`, um ein Favicon für eine Website zu erstellen, und wenn Ihre Site eine Content Security Policy (CSP) verwendet, um deren Sicherheit zu erhöhen, gilt die Richtlinie für das Favicon.
  Wenn Sie Probleme haben, dass das Favicon nicht geladen wird, überprüfen Sie, ob das {{HTTPHeader("Content-Security-Policy")}}-Header's [`img-src` directive](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/img-src) nicht den Zugriff darauf verhindert.
- Die HTML- und XHTML-Spezifikationen definieren Ereignishandler für das `<link>`-Element, jedoch ist unklar, wie sie verwendet werden würden.
- Unter XHTML 1.0 erfordern {{Glossary("void_element", "void elements")}} wie `<link>` einen Schrägstrich am Ende: `<link />`.
- WebTV unterstützt die Verwendung des Wertes `next` für `rel`, um die nächste Seite in einer Dokumentenreihe vorzuladen.

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `as`
  - : Dieses Attribut ist erforderlich, wenn [`rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload) auf dem `<link>`-Element gesetzt ist, optional, wenn [`rel="modulepreload"`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload) gesetzt ist, und sollte ansonsten nicht verwendet werden.
    Es spezifiziert die Art des Inhalts, der durch `<link>` geladen wird, was für die Anforderungserfassung, die Anwendung der korrekten [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) und das Setzen des korrekten {{HTTPHeader("Accept")}}-Request-Headers notwendig ist.

    Weiterhin verwendet `rel="preload"` dies als Signal für die Anforderungspriorisierung.
    Die Tabelle unten listet die gültigen Werte für dieses Attribut und die Elemente oder Ressourcen auf, auf die sie angewendet werden.

    <table class="standard-table">
      <thead>
        <tr>
          <th scope="col">Wert</th>
          <th scope="col">Anwendung auf</th>
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
            <code>&#x3C;img></code>-, <code>&#x3C;picture></code>-Elemente mit
            srcset- oder imageset-Attributen, SVG <code>&#x3C;image></code>-Elemente,
            CSS <code>*-image</code>-Regeln
          </td>
        </tr>
        <tr>
          <td>json</td>
          <td>
            <code>modulepreload</code>-Ziele.
          </td>
        </tr>
        <tr>
          <td>object</td>
          <td><code>&#x3C;object></code>-Elemente</td>
        </tr>
        <tr>
          <td>script</td>
          <td>
            <code>&#x3C;script></code>-Elemente, Worker <code>importScripts</code> und <code>modulepreload</code>-Ziele.
          </td>
        </tr>
        <tr>
          <td>style</td>
          <td>
            <code>&#x3C;link rel=stylesheet></code>-Elemente, CSS
            <code>@import</code> und <code>modulepreload</code>-Ziele.
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
  - : Dieses Attribut zeigt explizit an, dass bestimmte Operationen blockiert werden sollten, bis bestimmte Bedingungen erfüllt sind. Es darf nur verwendet werden, wenn das `rel`-Attribut die Schlüsselwörter `expect` oder `stylesheet` enthält. Mit [`rel="expect"`](/de/docs/Web/HTML/Reference/Attributes/rel#expect) zeigt es an, dass Operationen blockiert werden sollten, bis ein spezifisches DOM-Element geparst wurde. Mit [`rel="stylesheet"`](/de/docs/Web/HTML/Reference/Attributes/rel#stylesheet) zeigt es an, dass Operationen blockiert werden sollten, bis ein externes Stylesheet und seine kritischen Subressourcen abgerufen und auf das Dokument angewendet wurden. Die zu blockierenden Operationen müssen eine durch Leerzeichen getrennte Liste von Blockierungstoken sein, die unten aufgeführt sind. Derzeit gibt es nur ein Token:
    - `render`: Das Rendern von Inhalten auf dem Bildschirm wird blockiert.

    > [!NOTE]
    > Nur `link`-Elemente im `<head>` des Dokuments können das Rendern möglicherweise blockieren. Standardmäßig blockiert ein `link`-Element mit `rel="stylesheet"` im `<head>` das Rendern, wenn der Browser es während des Parsens entdeckt. Wenn ein solches `link`-Element dynamisch über ein Skript hinzugefügt wird, müssen Sie zusätzlich `blocking = "render"` setzen, damit es das Rendern blockiert.

- [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)
  - : Dieses {{Glossary("Enumerated", "enumerierte")}} Attribut gibt an, ob {{Glossary("CORS", "CORS")}} verwendet werden muss, wenn die Ressource abgerufen wird.
    [CORS-fähige Bilder](/de/docs/Web/HTML/How_to/CORS_enabled_image) können im {{HTMLElement("canvas")}}-Element wiederverwendet werden, ohne _verunreinigt_ zu werden.
    Die erlaubten Werte sind:
    - `anonymous`
      - : Eine Cross-Origin-Anfrage (d.h. mit einem {{HTTPHeader("Origin")}}-HTTP-Header) wird durchgeführt, aber keine Anmeldeinformationen werden gesendet (d.h. kein Cookie, X.509-Zertifikat oder HTTP-Basis-Authentifizierung).
        Wenn der Server keine Anmeldedaten für die Ursprungsseite bereitstellt (indem er den HTTP-Header {{HTTPHeader("Access-Control-Allow-Origin")}} nicht setzt), wird die Ressource verunreinigt und ihre Nutzung eingeschränkt.
    - `use-credentials`
      - : Eine Cross-Origin-Anfrage (d.h. mit einem `Origin`-HTTP-Header) wird zusammen mit einer Anmeldeinformation gesendet (d.h. es wird ein Cookie, Zertifikat und/oder HTTP-Basis-Authentifizierung durchgeführt).
        Wenn der Server keine Anmeldedaten für die Ursprungsseite bereitstellt (durch den HTTP-Header {{HTTPHeader("Access-Control-Allow-Credentials")}}), wird die Ressource _verunreinigt_ und ihre Nutzung eingeschränkt.

    Wenn das Attribut nicht vorhanden ist, wird die Ressource ohne eine {{Glossary("CORS", "CORS")}}-Anfrage abgerufen (d.h. ohne den `Origin`-HTTP-Header zu senden), was ihre unverunreinigte Nutzung verhindert. Wenn ungültig, wird es behandelt, als ob das enumerierte Schlüsselwort **anonymous** verwendet wurde.
    Siehe [CORS-Einstellungen-Attribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin) für zusätzliche Informationen.

- `disabled`
  - : Nur für `rel="stylesheet"` zeigt das `disabled`-Boolean-Attribut an, ob das beschriebene Stylesheet geladen und auf das Dokument angewendet werden soll.
    Wenn `disabled` im HTML angegeben ist, wenn es geladen wird, wird das Stylesheet während des Seitenladens nicht geladen.
    Stattdessen wird das Stylesheet bei Bedarf geladen, wenn das `disabled`-Attribut auf `false` gesetzt oder entfernt wird.

    Das Setzen der `disabled`-Eigenschaft im DOM führt dazu, dass das Stylesheet aus der [`Document.styleSheets`](/de/docs/Web/API/Document/styleSheets)-Liste des Dokuments entfernt wird.

- [`fetchpriority`](/de/docs/Web/HTML/Reference/Attributes/fetchpriority)
  - : Gibt einen Hinweis auf die relative Priorität, die beim Abrufen einer Ressource eines bestimmten Typs verwendet werden soll. Erlaubte Werte:
    - `high`
      - : Die Ressource mit hoher Priorität im Vergleich zu anderen Ressourcen desselben Typs abrufen.
    - `low`
      - : Die Ressource mit niedriger Priorität im Vergleich zu anderen Ressourcen desselben Typs abrufen.
    - `auto`
      - : Bevorzugung für die Abrufpriorität nicht festlegen.
        Dies ist der Standardwert.
        Er wird verwendet, wenn kein Wert oder ein ungültiger Wert festgelegt ist.
- `href`
  - : Dieses Attribut gibt die {{Glossary("URL", "URL")}} der verknüpften Ressource an. Eine URL kann absolut oder relativ sein.
- `hreflang`
  - : Dieses Attribut gibt die Sprache der verknüpften Ressource an.
    Es ist rein beratend.
    Die Werte sollten gültige {{Glossary("BCP_47_language_tag", "BCP 47-Sprachmarkierungen")}} sein.
    Verwenden Sie dieses Attribut nur, wenn das [`href`](/de/docs/Web/HTML/Reference/Elements/a#href)-Attribut vorhanden ist.
- `imagesizes`
  - : Nur für `rel="preload"` und `as="image"` hat das Attribute `imagesizes` eine ähnliche Syntax und Semantik wie das [`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes)-Attribut, das anzeigt, dass die entsprechende Ressource vorgeladen werden soll, die von einem `img`-Element mit entsprechenden Werten für seine `srcset`- und `sizes`-Attribute verwendet wird.
- `imagesrcset`
  - : Nur für `rel="preload"` und `as="image"` hat das Attribute `imagesrcset` eine ähnliche Syntax und Semantik wie das [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset)-Attribut, das anzeigt, dass die entsprechende Ressource vorgeladen werden soll, die von einem `img`-Element mit entsprechenden Werten für seine `srcset`- und `sizes`-Attribute verwendet wird.
- [`integrity`](/de/docs/Web/HTML/Reference/Attributes/integrity)
  - : Dieses Attribut enthält einen oder mehrere {{Glossary("hash_function", "Hashes")}} der Ressource. Es wird verwendet, um sicherzustellen, dass der Inhalt der Ressource dem entspricht, was der Entwickler erwartet, und nicht durch eine bösartige Kopie bei einem [Supply-Chain-Angriff](/de/docs/Web/Security/Attacks/Supply_chain_attacks) ersetzt wurde. Das Attribut darf nur angegeben werden, wenn das `rel`-Attribut auf `stylesheet`, `preload` oder `modulepreload` gesetzt ist.
    Siehe [Subresource Integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity).
- `media`
  - : Dieses Attribut spezifiziert die Medien, für die die verknüpfte Ressource gilt. Sein Wert muss ein Medientyp oder [Media Query](/de/docs/Web/CSS/Guides/Media_queries) sein.
    Dieses Attribut ist hauptsächlich nützlich, wenn Sie auf externe Stylesheets verlinken - es ermöglicht dem Benutzeragenten, das am besten angepasste für das Gerät auszuwählen, auf dem es läuft.

- `referrerpolicy`
  - : Ein String, der angibt, welchen Referrer beim Abrufen der Ressource verwendet werden soll. Für detaillierte Erklärungen und Beispiele der einzelnen Richtlinien lesen Sie die {{HTTPHeader("Referrer-Policy")}}-Header-Dokumentation.
    - `no-referrer` bedeutet, dass der {{HTTPHeader("Referer")}}-Header nicht gesendet wird.
    - `no-referrer-when-downgrade` bedeutet, dass kein {{HTTPHeader("Referer")}}-Header gesendet wird, wenn zu einer Ursprungsseite ohne TLS (HTTPS) navigiert wird.
      Dies ist das Standardverhalten eines Benutzeragenten, sofern keine Richtlinie anderweitig angegeben ist.
    - `origin` bedeutet, dass der Referrer die Ursprungsseite der Seite wird, was grob gesagt das Schema, der Host und der Port ist.
    - `origin-when-cross-origin` bedeutet, dass das Navigieren zu anderen Ursprüngen auf das Schema, den Host und den Port beschränkt wird, während das Navigieren im selben Ursprung den Referrer-Pfad enthält.
    - `same-origin` bedeutet, dass der Referrer (Ursprung, Pfad und Abfragezeichenfolge) für gleichwertige Anfragen gesendet wird, jedoch kein Referrer für fremde Anfragen gesendet wird.
    - `strict-origin` bedeutet, dass nur die Ursprungsseite gesendet wird, wenn das Protokollsicherheitsniveau gleich bleibt (HTTPS→HTTPS). Kein Referrer wird an weniger sichere Ziele gesendet (HTTPS→HTTP). Dies ist wichtig für HTTPS-Seiten, da es verhindert, dass Referrer-Informationen an unsichere Ursprünge geleakt werden.
    - `strict-origin-when-cross-origin` bedeutet, dass der vollständige Referrer für gleichwertige Anfragen gesendet wird. Für fremde Anfragen wird nur die Ursprungsseite gesendet, wenn das Protokoll gleich bleibt (HTTPS→HTTPS), und kein Referrer gesendet, wenn auf HTTP heruntergestuft wird. Dies ist der Standardwert, der Funktionalität mit Privatsphäre und Sicherheit für HTTPS-Sites ausbalanciert.
    - `unsafe-url` bedeutet, dass der Referrer die Ursprungsseite und den Pfad enthält (aber nicht das Fragment, das Passwort oder den Benutzernamen).
      Dieser Fall ist unsicher, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge leaken kann.

- [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)
  - : Dieses Attribut benennt eine Beziehung des verlinkten Dokuments zum aktuellen Dokument. Das Attribut muss eine durch Leerzeichen getrennte Liste von [Link-Typ-Werten](/de/docs/Web/HTML/Reference/Attributes/rel) sein.
- `sizes`
  - : Dieses Attribut definiert die Größen der Icons für visuelle Medien, die in der Ressource enthalten sind.
    Es darf nur vorhanden sein, wenn [`rel`](#rel) einen Wert von `icon` oder einen nicht-standardmäßigen Typ wie Apples `apple-touch-icon` enthält.
    Es kann die folgenden Werte haben:
    - `any`, was bedeutet, dass das Icon auf jede Größe skaliert werden kann, da es im Vektorformat wie `image/svg+xml` vorliegt.
    - Eine mit Leerzeichen getrennte Liste von Größen, jede im Format `<Breite in Pixel>x<Höhe in Pixel>` oder `<Breite in Pixel>X<Höhe in Pixel>`. Jede dieser Größen muss in der Ressource enthalten sein.

    > [!NOTE]
    > Die meisten Icon-Formate können nur ein einziges Icon speichern; daher enthält das [`sizes`](#sizes)-Attribut die meiste Zeit nur einen Eintrag.
    > Das Microsoft ICO-Format und das Apple ICNS-Format können mehrere Icon-Größen in einer einzigen Datei speichern. ICO hat bessere Browser-Unterstützung, daher sollten Sie dieses Format verwenden, wenn plattformübergreifende Unterstützung eine Rolle spielt.

- `title`
  - : Das `title`-Attribut hat auf dem `<link>`-Element besondere Semantik.
    Wenn es auf ein `<link rel="stylesheet">` verwendet wird, definiert es ein [Standard- oder alternatives Stylesheet](/de/docs/Web/HTML/Reference/Attributes/rel/alternate_stylesheet).

- `type`
  - : Dieses Attribut wird verwendet, um den Typ des verknüpften Inhalts zu definieren.
    Der Wert des Attributs sollte ein MIME-Typ wie **text/html**, **text/css** usw. sein.
    Der übliche Gebrauch dieses Attributs ist, den Typ des referenzierten Stylesheets zu definieren (wie **text/css**), aber da CSS die einzige auf dem Web verwendete Stylesheet-Sprache ist, ist es nicht nur möglich, das `type`-Attribut wegzulassen, sondern es ist tatsächlich jetzt empfohlene Praxis.
    Es wird auch bei `rel="preload"`-Linktypen verwendet, um sicherzustellen, dass der Browser nur Dateitypen herunterlädt, die er unterstützt.

### Nicht-standardmäßige Attribute

- `target` {{Deprecated_Inline}}
  - : Definiert den Rahmen oder Fensternamen, der die definierte Verknüpfungsbeziehung hat oder dass die Wiedergabe von jeder verknüpften Ressource anzeigen wird.

### Veraltete Attribute

- `charset` {{deprecated_inline}}
  - : Dieses Attribut definiert die Zeichencodierung der verknüpften Ressource.
    Der Wert ist eine durch Leerzeichen und/oder Kommas getrennte Liste von Zeichensätzen, wie in {{rfc(2045)}} definiert.
    Der Standardwert ist `iso-8859-1`.

    > [!NOTE]
    > Um die gleiche Wirkung wie dieses veraltete Attribut zu erzielen, verwenden Sie den {{HTTPHeader("Content-Type")}}-HTTP-Header bei der verknüpften Ressource.

- `rev` {{deprecated_inline}}
  - : Der Wert dieses Attributs zeigt die Beziehung des aktuellen Dokuments zur verknüpften Ressource an, wie durch das [`href`](#href)-Attribut definiert.
    Das Attribut definiert somit die umgekehrte Beziehung im Vergleich zum Wert des `rel`-Attributs.
    [Link-Typ-Werte](/de/docs/Web/HTML/Reference/Attributes/rel) für das Attribut sind ähnlich den möglichen Werten für [`rel`](#rel).

    > [!NOTE]
    > Statt `rev` sollten Sie das [`rel`](#rel)-Attribut mit dem entgegengesetzten [Link-Typ-Wert](/de/docs/Web/HTML/Reference/Attributes/rel) verwenden.
    > Um beispielsweise den umgekehrten Link für `made` herzustellen, geben Sie `author` an. Außerdem steht dieses Attribut nicht für "revision" und darf nicht mit einer Versionsnummer verwendet werden, obwohl viele Websites es in dieser Weise missbrauchen.

## Beispiele

### Einbinden eines Stylesheets

Um ein Stylesheet in eine Seite einzubinden, verwenden Sie folgende Syntax:

```html
<link href="style.css" rel="stylesheet" />
```

### Bereitstellung alternativer Stylesheets

Sie können auch [Alternative Stylesheets](/de/docs/Web/HTML/Reference/Attributes/rel/alternate_stylesheet) spezifizieren.

Der Benutzer kann auswählen, welches Stylesheet er verwenden möchte, indem er es im Menü **Ansicht > Seitenstil** auswählt.
Dies bietet eine Möglichkeit für Benutzer, mehrere Versionen einer Seite zu sehen.

```html
<link href="default.css" rel="stylesheet" title="Default Style" />
<link href="fancy.css" rel="alternate stylesheet" title="Fancy" />
<link href="basic.css" rel="alternate stylesheet" title="Basic" />
```

### Bereitstellen von Icons für verschiedene Nutzungskontexte

Sie können auf derselben Seite Links zu mehreren Icons einfügen, und der Browser wählt anhand der `rel`- und `sizes`-Werte als Hinweise aus, welches am besten zu seinem speziellen Kontext passt.

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

Informationen darüber, welche `sizes` für Apple-Icons zu wählen sind, finden Sie in [Apples Dokumentation zur Konfiguration von Webanwendungen](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW4) und den referenzierten [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/app-icons#App-icon-sizes). In der Regel reicht es aus, ein großes Bild bereitzustellen, wie beispielsweise 192x192, und den Browser es je nach Bedarf verkleinern zu lassen. Sie möchten allerdings möglicherweise Bilder mit unterschiedlichen Detailstufen für verschiedene Größen bereitstellen, wie es die Apple-Designrichtlinie empfiehlt. Kleinere Icons für niedrigere Auflösungen bereitzustellen spart auch Bandbreite.

Es kann nicht notwendig sein, überhaupt `<link>`-Elemente bereitzustellen. Zum Beispiel fordern Browser automatisch `/favicon.ico` vom Stamm einer Webseite an, und Apple fordert auch automatisch `/apple-touch-icon-[size].png`, `/apple-touch-icon.png` usw. an. Allerdings schützt das Bereitstellen expliziter Links Sie vor Änderungen an diesen Konventionen.

### Bedingtes Laden von Ressourcen mit Media Queries

Sie können einen Medientyp oder eine Abfrage innerhalb eines `media`-Attributs angeben;
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

Sie können feststellen, wann ein Stylesheet geladen wurde, indem Sie darauf achten, dass ein `load`-Ereignis darauf ausgelöst wird; ebenso können Sie erkennen, ob ein Fehler beim Verarbeiten eines Stylesheets aufgetreten ist, indem Sie auf ein `error`-Ereignis achten:

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
> Das `load`-Ereignis wird ausgelöst, sobald das Stylesheet und alle importierten Inhalte geladen und geparst wurden, und unmittelbar bevor die Styles auf den Inhalt angewendet werden.

### Preload-Beispiele

Sie finden eine Reihe von `<link rel="preload">`-Beispielen in [Inhalte mit `rel="preload"` vorladen](/de/docs/Web/HTML/Reference/Attributes/rel/preload).

### Das Rendern blockieren, bis eine Ressource abgerufen wurde

Sie können ein `render`-Token innerhalb eines `blocking`-Attributs einfügen;
Das Rendern der Seite wird blockiert, bis die Ressource und ihre kritischen Subressourcen abgerufen und auf das Dokument angewendet sind. Zum Beispiel:

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
        Metadateninhalte.
        Wenn <code><a href="/de/docs/Web/HTML/Reference/Global_attributes/itemprop">itemprop</a></code> vorhanden ist:
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flow-Inhalte</a> und
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasing-Inhalte</a>.
      </td>
    </tr>
    <tr>
      <th>Erlaubte Inhalte</th>
      <td>Keine; es ist ein {{Glossary("void_element", "void element")}}.</td>
    </tr>
    <tr>
      <th>Tag-Auslassung</th>
      <td>Muss ein Start-Tag haben und darf keinen End-Tag haben.</td>
    </tr>
    <tr>
      <th>Erlaubte Eltern</th>
      <td>
        Jedes Element, das Metadateninhalte akzeptiert.
        Wenn <a href="/de/docs/Web/HTML/Reference/Global_attributes/itemprop">itemprop</a> vorhanden ist: jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasing-Inhalte</a> akzeptiert.
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
- {{HTTPHeader("Referrer-Policy")}} HTTP-Header
