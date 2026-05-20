---
title: "`<link>` HTML-Element für externe Ressourcen"
short-title: <link>
slug: Web/HTML/Reference/Elements/link
l10n:
  sourceCommit: fc7c0c6df803d5ce26e7b2a72725a7d021ed0694
---

Das **`<link>`** [HTML](/de/docs/Web/HTML)-Element spezifiziert Beziehungen zwischen dem aktuellen Dokument und einer externen Ressource.
Dieses Element wird am häufigsten verwendet, um auf {{Glossary("CSS", "Stylesheets")}} zu verlinken, wird aber auch verwendet, um Website-Icons zu etablieren (sowohl "Favicon"-Stil-Icons als auch Icons für den Home-Bildschirm und Apps auf mobilen Geräten) und vieles mehr.

{{InteractiveExample("HTML Demo: &lt;link&gt;", "tabbed-shorter")}}

```html interactive-example
<link href="/shared-assets/misc/link-element-example.css" rel="stylesheet" />

<p>This text will be red as defined in the external stylesheet.</p>
<p style="color: blue">
  The <code>style</code> attribute can override it, though.
</p>
```

Um ein externes Stylesheet zu verlinken, sollten Sie ein `<link>`-Element innerhalb Ihres {{HTMLElement("head")}} so einfügen:

```html
<link href="main.css" rel="stylesheet" />
```

Dieses Beispiel enthält den Pfad zum Stylesheet innerhalb eines `href`-Attributs und ein [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)-Attribut mit einem Wert von `stylesheet`. Das `rel` steht für "Beziehung" und ist eines der Schlüsselelemente des `<link>`-Elements — der Wert gibt an, wie das verlinkte Element mit dem enthaltenen Dokument in Beziehung steht.

Es gibt eine Reihe weiterer gemeinsamer Typen, die Ihnen begegnen können. Ein Beispiel ist ein Link zum Favicon der Webseite:

```html
<link rel="icon" href="favicon.ico" />
```

Es gibt eine Reihe weiterer `rel`-Werte für Icons, die hauptsächlich dazu verwendet werden, spezielle Icon-Typen für verschiedene mobile Plattformen zu kennzeichnen, z. B.:

```html
<link
  rel="apple-touch-icon"
  sizes="114x114"
  href="apple-icon-114.png"
  type="image/png" />
```

Das `sizes`-Attribut gibt die Icon-Größe an, während `type` den MIME-Typ der verlinkten Ressource enthält.
Diese bieten nützliche Hinweise, die es dem Browser ermöglichen, das am besten geeignete verfügbare Icon auszuwählen.

Sie können auch einen Medientyp oder eine Medienabfrage in einem `media`-Attribut angeben; diese Ressource wird dann nur geladen, wenn die Medienbedingung wahr ist. Zum Beispiel:

```html
<link href="print.css" rel="stylesheet" media="print" />
<link href="mobile.css" rel="stylesheet" media="screen and (width <= 600px)" />
```

Einige interessante neue Leistungs- und Sicherheitsfunktionen wurden ebenfalls zum `<link>`-Element hinzugefügt. Betrachten Sie dieses Beispiel:

```html
<link
  rel="preload"
  href="myFont.woff2"
  as="font"
  type="font/woff2"
  crossorigin="anonymous" />
```

Ein `rel`-Wert von `preload` zeigt an, dass der Browser diese Ressource vorladen soll (siehe [`rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload) für weitere Details), wobei das `as`-Attribut den spezifischen Inhaltstyp angibt, der abgerufen wird.
Das `crossorigin`-Attribut gibt an, ob die Ressource mit einer {{Glossary("CORS", "CORS")}}-Anforderung abgerufen werden soll.

Weitere Nutzungshinweise:

- Ein `<link>`-Element kann entweder im {{HTMLElement("head")}} oder im {{HTMLElement("body")}}-Element vorkommen, abhängig davon, ob es einen [link type](https://html.spec.whatwg.org/multipage/links.html#body-ok) hat, das **body-ok** ist.
  Zum Beispiel ist der `stylesheet`-Linktyp body-ok, und daher ist `<link rel="stylesheet">` im Body erlaubt.
  Dies ist jedoch keine gute Praxis; es ist sinnvoller, Ihre `<link>`-Elemente von Ihrem Body-Inhalt zu trennen und sie im `<head>` zu platzieren.
- Wenn Sie `<link>` verwenden, um ein Favicon für eine Website zu etablieren, und Ihre Website eine Content Security Policy (CSP) verwendet, um die Sicherheit zu verbessern, gilt die Richtlinie für das Favicon.
  Wenn Sie auf Probleme stoßen, bei denen das Favicon nicht geladen wird, überprüfen Sie, ob das {{HTTPHeader("Content-Security-Policy")}}-Header [`img-src` directive](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/img-src) den Zugriff darauf nicht verhindert.
- Die HTML- und XHTML-Spezifikationen definieren Ereignishandler für das `<link>`-Element, aber es ist unklar, wie sie verwendet werden würden.
- Unter XHTML 1.0 erfordern {{Glossary("void_element", "void elements")}} wie `<link>` einen abschließenden Schrägstrich: `<link />`.
- WebTV unterstützt die Verwendung des Werts `next` für `rel`, um die nächste Seite in einer Dokumentenreihe vorzuladen.

## Attribute

Dieses Element beinhaltet die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `as`
  - : Dieses Attribut ist erforderlich, wenn [`rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload) auf das `<link>`-Element gesetzt wurde, optional, wenn [`rel="modulepreload"`](/de/docs/Web/HTML/Reference/Attributes/rel/modulepreload) gesetzt wurde, und ansonsten sollte es nicht verwendet werden.
    Es spezifiziert die Art des Inhalts, der durch das `<link>` geladen wird, was notwendig ist für die Anforderungsanpassung, die Anwendung der korrekten [Content-Security-Policy](/de/docs/Web/HTTP/Guides/CSP) und das Setzen des korrekten {{HTTPHeader("Accept")}}-Anforderungsheaders.

    Zudem nutzt `rel="preload"` dies als Signal für die Anforderung Priorisierung.
    Die folgende Tabelle listet die gültigen Werte für dieses Attribut und die Elemente oder Ressourcen auf, auf die sie zutreffen.

    <table class="standard-table">
      <thead>
        <tr>
          <th scope="col"><code>As</code> value</th>
          <th scope="col"><code>Rel</code> value</th>
          <th scope="col">Gilt für</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>audioworklet</td>
          <td>modulepreload</td>
          <td><a href="/de/docs/Web/API/AudioWorklet">AudioWorklet</a>-Module</td>
        </tr>
        <tr>
          <td>fetch</td>
          <td>preload</td>
          <td>
            <p>fetch, XHR</p>
            <div class="notecard note">
              <p>
                <strong>Hinweis:</strong> Dieser Wert erfordert ebenfalls,
                dass <code>&#x3C;link></code> das crossorigin-Attribut enthält, siehe <a href="/de/docs/Web/HTML/Reference/Attributes/rel/preload#cors-enabled_fetches">CORS-aktivierte Abrufe</a>.
              </p>
            </div>
          </td>
        </tr>
        <tr>
          <td>font</td>
          <td>preload</td>
          <td>
            <p>CSS @font-face</p>
            <div class="notecard note">
              <p>
                <strong>Hinweis:</strong> Dieser Wert erfordert ebenfalls,
                dass <code>&#x3C;link></code> das crossorigin-Attribut enthält, siehe <a href="/de/docs/Web/HTML/Reference/Attributes/rel/preload#cors-enabled_fetches">CORS-aktivierte Abrufe</a>.
              </p>
            </div>
          </td>
        </tr>
        <tr>
          <td>image</td>
          <td>preload</td>
          <td>
            <code>&#x3C;img></code> und <code>&#x3C;picture></code>-Elemente mit
            srcset oder imageset-Attributen, SVG <code>&#x3C;image></code>-Elemente,
            CSS <code>*-image</code>-Regeln
          </td>
        </tr>
        <tr>
          <td>json</td>
          <td>modulepreload</td>
          <td>
            Ergänzende JSON-Datei
          </td>
        </tr>
        <tr>
          <td>paintworklet</td>
          <td>modulepreload</td>
          <td><a href="/de/docs/Web/API/PaintWorkletGlobalScope">PaintWorklet</a>-Module</td>
        </tr>
        <tr>
          <td>script</td>
          <td>preload oder modulepreload</td>
          <td>
            <code>&#x3C;script></code>-Elemente, Worker <code>importScripts</code> und <code>modulepreload</code>-Ziele.
          </td>
        </tr>
        <tr>
          <td>serviceworker</td>
          <td>modulepreload</td>
          <td><a href="/de/docs/Web/API/ServiceWorker">ServiceWorker</a>-Module</td>
        </tr>
        <tr>
          <td>sharedworker</td>
          <td>modulepreload</td>
          <td><a href="/de/docs/Web/API/SharedWorker">SharedWorker</a></td>
        </tr>
        <tr>
          <td>style</td>
          <td>preload oder modulepreload</td>
          <td>
            <code>&#x3C;link rel=stylesheet></code>-Elemente, CSS
            <code>@import</code> und <code>modulepreload</code>-Ziele.
          </td>
        </tr>
        <tr>
          <td>text</td>
          <td>modulepreload</td>
          <td>Ergänzende reine Textdatei</td>
        </tr>
        <tr>
          <td>track</td>
          <td>preload</td>
          <td><code>&#x3C;track></code>-Elemente (<a href="/de/docs/Web/API/WebVTT_API/Web_Video_Text_Tracks_Format">WebVTT</a>, MIME-Typ <code>text/vtt</code>)</td>
        </tr>
        <tr>
          <td>worker</td>
          <td>modulepreload</td>
          <td><a href="/de/docs/Web/API/Worker">Worker</a>-Module</td>
        </tr>
      </tbody>
    </table>

- `blocking`
  - : Dieses Attribut gibt explizit an, dass bestimmte Operationen blockiert werden sollen, bis spezifische Bedingungen erfüllt sind. Es darf nur verwendet werden, wenn das `rel`-Attribut die Schlüsselwörter `expect` oder `stylesheet` enthält. Mit [`rel="expect"`](/de/docs/Web/HTML/Reference/Attributes/rel#expect) gibt es an, dass Operationen blockiert werden sollen, bis ein spezifischer DOM-Knoten analysiert wurde. Mit [`rel="stylesheet"`](/de/docs/Web/HTML/Reference/Attributes/rel#stylesheet) gibt es an, dass Operationen blockiert werden sollen, bis ein externes Stylesheet und seine kritischen Teilressourcen abgerufen und auf das Dokument angewendet wurden. Die zu blockierenden Operationen müssen eine durch Leerzeichen getrennte Liste von Blockierungstoken sein, die unten aufgeführt sind. Derzeit gibt es nur einen Token:
    - `render`: Das Rendering von Inhalten auf dem Bildschirm wird blockiert.

    > [!NOTE]
    > Nur `link`-Elemente im `<head>` des Dokuments können möglicherweise das Rendering blockieren. Standardmäßig blockiert ein `link`-Element mit `rel="stylesheet"` im `<head>` das Rendering, wenn der Browser es während der Analyse entdeckt. Wenn ein solches `link`-Element dynamisch über ein Skript hinzugefügt wird, müssen Sie zusätzlich `blocking="render"` setzen, damit es das Rendering blockiert.

- [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)
  - : Dieses {{Glossary("Enumerated", "enumerierte")}} Attribut gibt an, ob {{Glossary("CORS", "CORS")}} beim Abrufen der Ressource verwendet werden muss.
    [CORS-aktivierte Bilder](/de/docs/Web/HTML/How_to/CORS_enabled_image) können in dem {{HTMLElement("canvas")}}-Element ohne _Verunreinigung_ wiederverwendet werden.
    Die erlaubten Werte sind:
    - `anonymous`
      - : Eine Cross-Origin-Anfrage (d.h. mit einem {{HTTPHeader("Origin")}} HTTP-Header) wird durchgeführt, aber keine Anmeldedaten werden gesendet (d.h. kein Cookie, kein X.509-Zertifikat oder keine HTTP-Basisauthentifizierung).
        Wenn der Server keine Anmeldedaten für die Ursprungsseite bereitstellt (indem er den {{HTTPHeader("Access-Control-Allow-Origin")}} HTTP-Header nicht setzt), wird die Ressource verunreinigt und ihre Nutzung eingeschränkt.
    - `use-credentials`
      - : Eine Cross-Origin-Anfrage (d.h. mit einem `Origin`-HTTP-Header) wird durchgeführt und eine Anmeldedaten werden gesendet (d.h. ein Cookie, Zertifikat und/oder eine HTTP-Basisauthentifizierung wird durchgeführt).
        Wenn der Server keine Anmeldedaten für die Ursprungsseite bereitstellt (durch den {{HTTPHeader("Access-Control-Allow-Credentials")}} HTTP-Header), wird die Ressource _verunreinigt_ und ihre Nutzung eingeschränkt.

    Wenn das Attribut nicht vorhanden ist, wird die Ressource ohne eine {{Glossary("CORS", "CORS")}}-Anfrage abgerufen (d.h. ohne Senden des `Origin`-HTTP-Headers), wodurch ihre nicht-verunreinigte Nutzung verhindert wird. Wenn ungültig, wird es behandelt, als ob das enumerierte Schlüsselwort **anonymous** verwendet wurde.
    Siehe [CORS-Einstellungsattribute](/de/docs/Web/HTML/Reference/Attributes/crossorigin) für weitere Informationen.

- `disabled`
  - : Nur für `rel="stylesheet"` gibt das `disabled`-Boolean-Attribut an, ob das beschriebene Stylesheet geladen und auf das Dokument angewendet werden soll.
    Wenn `disabled` im HTML angegeben ist, wenn es geladen wird, wird das Stylesheet nicht während des Seitenladens geladen.
    Stattdessen wird das Stylesheet bei Bedarf geladen, wenn und wann das `disabled`-Attribut auf `false` geändert oder entfernt wird.

    Das Setzen der `disabled`-Eigenschaft im DOM führt dazu, dass das Stylesheet aus der [`Document.styleSheets`](/de/docs/Web/API/Document/styleSheets)-Liste des Dokuments entfernt wird.

- [`fetchpriority`](/de/docs/Web/HTML/Reference/Attributes/fetchpriority)
  - : Stellt einen Hinweis auf die relative Priorität bereit, die beim Abrufen einer Ressource eines bestimmten Typs verwendet werden soll. Erlaubte Werte:
    - `high`
      - : Hole die Ressource mit hoher Priorität im Vergleich zu anderen Ressourcen desselben Typs.
    - `low`
      - : Hole die Ressource mit niedriger Priorität im Vergleich zu anderen Ressourcen desselben Typs.
    - `auto`
      - : Setze keine Präferenz für die Abrufpriorität.
        Dies ist der Standard.
        Es wird verwendet, wenn kein Wert oder ein ungültiger Wert festgelegt ist.
- `href`
  - : Dieses Attribut spezifiziert die {{Glossary("URL", "URL")}} der verlinkten Ressource. Eine URL kann absolut oder relativ sein.
- `hreflang`
  - : Dieses Attribut gibt die Sprache der verlinkten Ressource an.
    Es ist rein beratend.
    Werte sollten gültige {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tags")}} sein.
    Verwenden Sie dieses Attribut nur, wenn das [`href`](/de/docs/Web/HTML/Reference/Elements/a#href)-Attribut vorhanden ist.
- `imagesizes`
  - : Nur für `rel="preload"` und `as="image"` hat das `imagesizes`-Attribut eine ähnliche Syntax und Semantik wie das [`sizes`](/de/docs/Web/HTML/Reference/Elements/img#sizes)-Attribut, das darauf hinweist, die entsprechende Ressource vorzuladen, die von einem `img`-Element mit den entsprechenden Werten für seine `srcset`- und `sizes`-Attribute verwendet wird.
- `imagesrcset`
  - : Nur für `rel="preload"` und `as="image"` hat das `imagesrcset`-Attribut eine ähnliche Syntax und Semantik wie das [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset)-Attribut, das darauf hinweist, die entsprechende Ressource vorzuladen, die von einem `img`-Element mit den entsprechenden Werten für seine `srcset`- und `sizes`-Attribute verwendet wird.
- [`integrity`](/de/docs/Web/HTML/Reference/Attributes/integrity)
  - : Dieses Attribut enthält eines oder mehrere {{Glossary("hash_function", "Hashes")}} der Ressource. Es wird verwendet, um sicherzustellen, dass der Inhalt der Ressource das ist, was der Entwickler erwartet, und nicht durch eine bösartige Kopie in einem [Angriff auf die Lieferkette](/de/docs/Web/Security/Attacks/Supply_chain_attacks) ersetzt wurde. Das Attribut muss nur angegeben werden, wenn das `rel`-Attribut auf `stylesheet`, `preload` oder `modulepreload` gesetzt ist.
    Siehe [Unterressourcenintegrität](/de/docs/Web/Security/Defenses/Subresource_Integrity).
- `media`
  - : Dieses Attribut gibt die Medien an, auf die sich die verlinkte Ressource bezieht. Sein Wert muss ein Medientyp / [Medienabfrage](/de/docs/Web/CSS/Guides/Media_queries) sein.
    Dieses Attribut ist hauptsächlich nützlich, wenn auf externe Stylesheets verlinkt wird — es ermöglicht dem Benutzeragenten, das am besten angepasste für das Gerät, auf dem es läuft, auszuwählen.

- `referrerpolicy`
  - : Ein String, der angibt, welchen Referrer beim Abrufen der Ressource verwendet werden soll. Für detaillierte Erklärungen und Beispiele jeder Richtlinie, siehe die Dokumentation des {{HTTPHeader("Referrer-Policy")}}-Headers.
    - `no-referrer` bedeutet, dass der {{HTTPHeader("Referer")}}-Header nicht gesendet wird.
    - `no-referrer-when-downgrade` bedeutet, dass kein {{HTTPHeader("Referer")}}-Header gesendet wird, wenn zu einem Ursprungsstandort ohne TLS (HTTPS) navigiert wird.
      Dies ist das Standardverhalten eines Benutzeragenten, wenn keine andere Richtlinie festgelegt ist.
    - `origin` bedeutet, dass der Referrer der Ursprung der Seite ist, was ungefähr das Schema, den Host und den Port umfasst.
    - `origin-when-cross-origin` bedeutet, dass beim Navigieren zu anderen Ursprüngen auf das Schema, den Host und den Port beschränkt wird, während beim Navigieren auf dem gleichen Ursprung der Pfad des Referrers enthalten wird.
    - `same-origin` bedeutet, dass der Referrer (Ursprung, Pfad und Abfragezeichenfolge) für gleiche Ursprungsanfragen gesendet wird, aber kein Referrer für Cross-Origin-Anfragen gesendet wird.
    - `strict-origin` bedeutet, dass nur der Ursprung gesendet wird, wenn das Protokoll-Sicherheitslevel gleich bleibt (HTTPS→HTTPS). Kein Referrer wird an weniger sichere Ziele gesendet (HTTPS→HTTP). Dies ist wichtig für HTTPS-Seiten, da es verhindert, dass Referrer-Informationen an unsichere Ursprünge geleakt werden.
    - `strict-origin-when-cross-origin` bedeutet, dass der volle Referrer für gleiche Ursprungsanfragen gesendet wird. Für Cross-Origin-Anfragen wird nur der Ursprung gesendet, wenn das Protokoll gleich bleibt (HTTPS→HTTPS), und kein Referrer wird gesendet, wenn auf HTTP heruntergestuft wird. Dies ist der Standardwert, der Funktionalität mit Datenschutz und Sicherheit für HTTPS-Seiten ausbalanciert.
    - `unsafe-url` bedeutet, dass der Referrer den Ursprung und den Pfad enthält (aber nicht das Fragment, das Passwort oder den Benutzernamen).
      Dieser Fall ist unsicher, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge durchsickern lassen kann.

- [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)
  - : Dieses Attribut benennt eine Beziehung des verlinkten Dokuments zu dem aktuellen Dokument. Das Attribut muss eine durch Leerzeichen getrennte Liste von [Linktyp-Werten](/de/docs/Web/HTML/Reference/Attributes/rel) sein.
- `sizes`
  - : Dieses Attribut definiert die Größen der Icons für visuelle Medien, die in der Ressource enthalten sind.
    Es muss nur vorhanden sein, wenn das [`rel`](#rel) einen Wert von `icon` oder einen nicht standardmäßigen Typ wie Apples `apple-touch-icon` enthält.
    Es kann die folgenden Werte haben:
    - `any`, was bedeutet, dass das Icon auf jede Größe skaliert werden kann, da es in einem Vektorformat vorliegt, wie `image/svg+xml`.
    - Eine durch Leerzeichen getrennte Liste von Größen, jede im Format `<width in pixels>x<height in pixels>` oder `<width in pixels>X<height in pixels>`. Jede dieser Größen muss in der Ressource enthalten sein.

    > [!NOTE]
    > Die meisten Icon-Formate können nur ein einzelnes Icon speichern; daher enthält das [`sizes`](#sizes)-Attribut meistens nur einen Eintrag.
    > Das ICO-Format von Microsoft und das ICNS-Format von Apple können mehrere Icon-Größen in einer einzigen Datei speichern. ICO hat eine bessere Browser-Unterstützung, daher sollten Sie dieses Format verwenden, wenn plattformübergreifende Unterstützung ein Anliegen ist.

- `title`
  - : Das `title`-Attribut hat spezielle Semantik für das `<link>`-Element.
    Wenn es auf ein `<link rel="stylesheet">` verwendet wird, definiert es ein [Standard- oder alternatives Stylesheet](/de/docs/Web/HTML/Reference/Attributes/rel/alternate_stylesheet).
- `type`
  - : Dieses Attribut wird verwendet, um den Typ des verlinkten Inhalts zu definieren.
    Der Wert des Attributs sollte ein MIME-Typ sein wie **text/html**, **text/css** usw.
    Der übliche Gebrauch dieses Attributs besteht darin, den Typ des referenzierten Stylesheets zu definieren (wie **text/css**), aber da CSS die einzige Stylesheet-Sprache im Web ist, ist es nicht nur möglich, das `type`-Attribut zu weglassen, sondern es ist tatsächlich jetzt empfohlene Praxis.
    Es wird auch auf `rel="preload"` Linktypen verwendet, um sicherzustellen, dass der Browser nur Dateitypen herunterlädt, die er unterstützt.

### Nicht-Standard-Attribute

- `target` {{Deprecated_Inline}}
  - : Definiert den Frame- oder Fensternamen, der die definierte Verknüpfungsbeziehung hat oder der das Rendern einer verlinkten Ressource zeigen wird.

### Veraltete Attribute

- `charset` {{deprecated_inline}}
  - : Dieses Attribut definiert die Zeichenkodierung der verlinkten Ressource.
    Der Wert ist eine durch Leerzeichen und/oder Kommas getrennte Liste von Zeichensätzen wie in {{rfc(2045)}} definiert.
    Der Standardwert ist `iso-8859-1`.

    > [!NOTE]
    > Um den gleichen Effekt wie dieses veraltete Attribut zu erzielen, verwenden Sie den {{HTTPHeader("Content-Type")}}-HTTP-Header für die verlinkte Ressource.

- `rev` {{deprecated_inline}}
  - : Der Wert dieses Attributs zeigt die Beziehung des aktuellen Dokuments zum verlinkten Dokument, wie durch das [`href`](#href)-Attribut definiert.
    Das Attribut definiert so die umgekehrte Beziehung im Vergleich zum Wert des `rel`-Attributs.
    [Linktypen-Werte](/de/docs/Web/HTML/Reference/Attributes/rel) für das Attribut ähneln den möglichen Werten für [`rel`](#rel).

    > [!NOTE]
    > Statt `rev` sollten Sie das [`rel`](#rel)-Attribut mit dem entgegengesetzten [Linktypen-Wert](/de/docs/Web/HTML/Reference/Attributes/rel) verwenden.
    > Beispielsweise, um den umgekehrten Link für `made` zu etablieren, geben Sie `author` an. Außerdem steht dieses Attribut nicht für "Revision" und darf nicht mit einer Versionsnummer verwendet werden, auch wenn es von vielen Websites in dieser Weise missbraucht wird.

## Beispiele

### Ein Stylesheet einbinden

Um ein Stylesheet in eine Seite einzubinden, verwenden Sie die folgende Syntax:

```html
<link href="style.css" rel="stylesheet" />
```

### Alternative Stylesheets bereitstellen

Sie können auch [alternative Stylesheets](/de/docs/Web/HTML/Reference/Attributes/rel/alternate_stylesheet) angeben.

Der Benutzer kann auswählen, welches Stylesheet verwendet werden soll, indem er es aus dem Menü **View > Page Style** auswählt.
Dies bietet den Benutzern eine Möglichkeit, mehrere Versionen einer Seite zu sehen.

```html
<link href="default.css" rel="stylesheet" title="Default Style" />
<link href="fancy.css" rel="alternate stylesheet" title="Fancy" />
<link href="basic.css" rel="alternate stylesheet" title="Basic" />
```

### Icons für verschiedene Nutzungskontexte bereitstellen

Sie können Links zu mehreren Icons auf derselben Seite einfügen, und der Browser wird wählen, welches am besten für seinen speziellen Kontext geeignet ist, indem er die `rel`- und `sizes`-Werte als Hinweise verwendet.

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

Für Informationen darüber, welche `sizes` für Apple-Icons ausgewählt werden sollen, siehe [Apples Dokumentation zur Konfiguration von Webanwendungen](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW4) und die referenzierten [Apple-Humanschnittstellenrichtlinien](https://developer.apple.com/design/human-interface-guidelines/app-icons#App-icon-sizes). In der Regel ist es ausreichend, ein großes Bild bereitzustellen, wie z. B. 192x192, und den Browser es nach Bedarf verkleinern zu lassen, aber Sie möchten möglicherweise Bilder mit unterschiedlichen Detailebenen für verschiedene Größen bereitstellen, wie es die Apple-Design-Richtlinie empfiehlt. Kleinere Icons für geringere Auflösungen bereitzustellen, spart auch Bandbreite.

Es kann nicht notwendig sein, überhaupt `<link>`-Elemente bereitzustellen. Beispielsweise fordern Browser automatisch `/favicon.ico` vom Stamm einer Seite an, und Apple fordert auch automatisch `/apple-touch-icon-[size].png`, `/apple-touch-icon.png` usw. an. Das Bereitstellen expliziter Links schützt jedoch vor Änderungen dieser Konventionen.

### Bedingtes Laden von Ressourcen mit Medienabfragen

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

Sie können bestimmen, wann ein Stylesheet geladen wurde, indem Sie ein `load`-Ereignis darauf überwachen; ähnlich können Sie feststellen, ob ein Fehler beim Verarbeiten eines Stylesheets aufgetreten ist, indem Sie ein `error`-Ereignis überwachen:

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
> Das `load`-Ereignis wird ausgelöst, sobald das Stylesheet und all seine importierten Inhalte geladen und analysiert wurden und unmittelbar bevor die Stile auf den Inhalt angewendet werden.

### Preload-Beispiele

Sie finden eine Reihe von `<link rel="preload">`-Beispielen in [Inhalt vorladen mit `rel="preload"`](/de/docs/Web/HTML/Reference/Attributes/rel/preload).

### Rendern blockieren, bis eine Ressource abgerufen wird

Sie können das `render`-Token innerhalb eines `blocking`-Attributs verwenden;
das Rendern der Seite wird blockiert, bis die Ressource und ihre kritischen Teilressourcen abgerufen und auf das Dokument angewendet wurden. Zum Beispiel:

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phraseninhalt</a>.
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
        Jedes Element, das Metadatenelemente akzeptiert.
        Wenn <a href="/de/docs/Web/HTML/Reference/Global_attributes/itemprop">itemprop</a> vorhanden ist: jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phraseninhalt</a> akzeptiert.
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
- {{HTTPHeader("Referrer-Policy")}} HTTP-Header
