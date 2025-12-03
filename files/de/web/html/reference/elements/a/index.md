---
title: "<a>: Das Ankerelement"
slug: Web/HTML/Reference/Elements/a
l10n:
  sourceCommit: dd868507df863ab4f37d53c960c76e20e9ee365f
---

Das **`<a>`** [HTML](/de/docs/Web/HTML)-Element (oder _Anker_-Element), mit [seinem `href`-Attribut](#href), erstellt einen Hyperlink zu Webseiten, Dateien, E-Mail-Adressen, Positionen auf derselben Seite oder alles andere, was eine URL adressieren kann.

Der Inhalt innerhalb jedes `<a>`-Elements _sollte_ das Ziel des Links angeben. Wenn das `href`-Attribut vorhanden ist, wird beim Drücken der Eingabetaste, während das `<a>`-Element fokussiert ist, dieses aktiviert.

{{InteractiveExample("HTML Demo: &lt;a&gt;", "tabbed-shorter")}}

```html interactive-example
<p>You can reach Michael at:</p>

<ul>
  <li><a href="https://example.com">Website</a></li>
  <li><a href="mailto:m.bluth@example.com">Email</a></li>
  <li><a href="tel:+123456789">Phone</a></li>
</ul>
```

```css interactive-example
li {
  margin-bottom: 0.5rem;
}
```

## Attribute

Die Attribute dieses Elements umfassen die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `attributionsrc` {{experimental_inline}}
  - : Gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header sendet. Auf der Serverseite wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}}-Headers in der Antwort auszulösen, um eine [navigationsbasierte Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#navigation-based_attribution_sources) zu registrieren.

    Der Browser speichert die Quelldaten, die mit der navigationsbasierten Attributionsquelle verbunden sind (wie im {{httpheader("Attribution-Reporting-Register-Source")}}-Antwort-Header angegeben), wenn der Benutzer auf den Link klickt. Weitere Einzelheiten finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

    Es gibt zwei Versionen dieses Attributs, die Sie festlegen können:
    - Boolean, d.h. nur der Name `attributionsrc`. Dies gibt an, dass Sie möchten, dass der {{httpheader("Attribution-Reporting-Eligible")}}-Header an denselben Server gesendet wird, auf den das `href`-Attribut verweist. Dies ist in Ordnung, wenn Sie die Registrierung der Attributionsquelle auf demselben Server handhaben.
    - Wert der eine oder mehrere URLs enthält, zum Beispiel:

      ```html
      attributionsrc="https://a.example/register-source
      https://b.example/register-source"
      ```

      Dies ist nützlich in Fällen, in denen die angeforderte Ressource nicht auf einem von Ihnen kontrollierten Server vorhanden ist oder Sie die Registrierung der Attributionsquelle auf einem anderen Server durchführen möchten. In diesem Fall können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Beim Abruf der Ressource wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header an die in `attributionsrc` angegebenen URL(s) gesendet, zusätzlich zum Ursprung der Ressource. Diese URLs können dann mit dem {{httpheader("Attribution-Reporting-Register-Source")}}-Header antworten, um die Registrierung abzuschließen.

      > [!NOTE]
      > Die Angabe mehrerer URLs bedeutet, dass mehrere Attributionsquellen auf derselben Funktion registriert werden können. Sie könnten beispielsweise verschiedene Kampagnen haben, deren Erfolg Sie messen möchten, was die Erstellung verschiedener Berichte zu unterschiedlichen Daten erfordert.

    `<a>`-Elemente können nicht als Attributionstrigger, sondern nur als Quellen verwendet werden.

- `download`
  - : Veranlasst den Browser, die verlinkte URL als Download zu behandeln. Kann mit oder ohne einen `filename`-Wert verwendet werden:
    - Ohne Wert schlägt der Browser einen Dateinamen/Erweiterung aus verschiedenen Quellen vor:
      - Der {{HTTPHeader("Content-Disposition")}} HTTP-Header
      - Das letzte Segment im URL-[Pfad](/de/docs/Web/API/URL/pathname)
      - Der {{Glossary("MIME_type", "Medientyp")}} (aus dem {{HTTPHeader("Content-Type")}}-Header, dem Anfang eines [`data:`-URLs](/de/docs/Web/URI/Reference/Schemes/data) oder [`Blob.type`](/de/docs/Web/API/Blob/type) für eine [`blob:`-URL](/de/docs/Web/URI/Reference/Schemes/blob))

    - `filename`: Wenn ein Wert definiert ist, wird dieser als der Dateiname vorgeschlagen. `/`- und `\`-Zeichen werden in Unterstriche (`_`) umgewandelt. Dateisysteme können andere Zeichen in Dateinamen verbieten, sodass Browser den vorgeschlagenen Namen nach Bedarf anpassen.

    > [!NOTE]
    >
    > - `download` funktioniert nur für [gleichherkunft Herkunfts-URLs](/de/docs/Web/Security/Defenses/Same-origin_policy) oder die `blob:`- und `data:`-Schemen.
    > - Die Behandlung von Downloads variiert je nach Browser, Benutzereinstellungen und anderen Faktoren. Der Benutzer kann gefragt werden, bevor ein Download startet, oder die Datei kann automatisch gespeichert werden oder sich automatisch öffnen, entweder in einer externen Anwendung oder im Browser selbst.
    > - Wenn der `Content-Disposition`-Header andere Informationen enthält als das `download`-Attribut, kann das Ergebnis unterschiedlich sein:
    >   - Wenn der Header einen `filename` angibt, hat dieser Vorrang vor einem im `download`-Attribut angegebenen Dateinamen.
    >   - Wenn der Header eine Disposition von `inline` angibt, priorisieren Chrome und Firefox das Attribut und behandeln es als Download. Ältere Firefox-Versionen (vor 82) priorisieren den Header und zeigen den Inhalt inline an.

- `href`
  - : Die URL, auf die der Hyperlink verweist. Links sind nicht auf HTTP-basierte URLs beschränkt — sie können jedes URL-Schema verwenden, das von Browsern unterstützt wird:
    - Telefonnummern mit `tel:`-URLs
    - E-Mail-Adressen mit `mailto:`-URLs
    - SMS-Textnachrichten mit `sms:`-URLs
    - Ausführbarer Code mit [`javascript:`-URLs](/de/docs/Web/URI/Reference/Schemes/javascript)
    - Während Web-Browser möglicherweise keine anderen URL-Schemen unterstützen, können Websites dies mit [`registerProtocolHandler()`](/de/docs/Web/API/Navigator/registerProtocolHandler)

    Außerdem können andere URL-Features spezifische Teile der Ressource lokalisieren, einschließlich:
    - Sektionen einer Seite mit Dokumentfragmenten
    - Bestimmte Textabschnitte mit [Textfragmenten](/de/docs/Web/URI/Reference/Fragment/Text_fragments)
    - Teile von Mediendateien mit Medienfragmenten

- `hreflang`
  - : Deutet die menschliche Sprache der verlinkten URL an. Keine integrierte Funktionalität. Erlaubte Werte entsprechen denen des [globalen `lang`-Attributs](/de/docs/Web/HTML/Reference/Global_attributes/lang).
- `ping`
  - : Eine durch Leerzeichen getrennte Liste von URLs. Wenn der Link gefolgt wird, sendet der Browser {{HTTPMethod("POST")}}-Anfragen mit dem Körper `PING` an die URLs. Typischerweise zum Tracking.
- `referrerpolicy`
  - : Wie viel des [Referer](/de/docs/Web/HTTP/Reference/Headers/Referer) gesendet wird, wenn dem Link gefolgt wird.
    - `no-referrer`: Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}}-Header wird nicht an {{Glossary("origin", "Herkünfte")}} ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`: Der gesendete Referer wird auf die Herkunft der verweisenden Seite beschränkt: sein [Schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`: Der an andere Herkünfte gesendete Referer wird auf das Schema, den Host und den Port beschränkt. Navigationen in der gleichen Herkunft enthalten weiterhin den Pfad.
    - `same-origin`: Ein Referer wird für {{Glossary("Same-origin_policy", "gleichherkunft")}} gesendet, aber Cross-Origin-Anfragen enthalten keine Referer-Informationen.
    - `strict-origin`: Senden Sie nur die Herkunft des Dokuments als Referer, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), aber senden Sie sie nicht an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard): Senden Sie eine vollständige URL, wenn Sie eine gleichherkunft Anfrage durchführen, senden Sie nur die Herkunft, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), und senden Sie keinen Header an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `unsafe-url`: Der Referer wird die Herkunft _und_ den Pfad enthalten (aber nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder den [Benutzernamen](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Herkünfte und Pfade von TLS-geschützten Ressourcen zu unsicheren Herkünfte leakt.

- [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)
  - : Die Beziehung der verlinkten URL als durch Leerzeichen getrennte Linktypen.
- `target`
  - : Wo die verlinkte URL angezeigt werden soll, als Name für einen _Browsing-Kontext_ (ein Tab, ein Fenster oder {{HTMLElement("iframe")}}). Die folgenden Schlüsselwörter haben spezielle Bedeutungen dafür, wo die URL geladen wird:
    - `_self`: Der aktuelle Browsing-Kontext. (Standard)
    - `_blank`: Üblicherweise ein neuer Tab, aber Benutzer können Browser konfigurieren, um stattdessen ein neues Fenster zu öffnen.
    - `_parent`: Der übergeordnete Browsing-Kontext des aktuellen. Wenn kein übergeordneter vorhanden ist, verhält sich wie `_self`.
    - `_top`: Der oberste Browsing-Kontext. Das bedeutet der "höchste" Kontext, der ein Vorfahre des aktuellen ist. Wenn keine Vorfahren vorhanden sind, verhält sich wie `_self`.
    - `_unfencedTop`: Ermöglicht eingebetteten [eingezäunten Frames](/de/docs/Web/API/Fenced_frame_API) das Navigieren des obersten Frames (d.h. das Überqueren der Wurzel des eingezäunten Frames hinaus, im Gegensatz zu anderen reservierten Zielen). Beachten Sie, dass die Navigation trotzdem erfolgreich sein wird, wenn dies außerhalb eines eingezäunten Frame-Kontexts verwendet wird, aber es wird nicht wie ein reserviertes Schlüsselwort agieren.

    > [!NOTE]
    > Das Setzen von `target="_blank"` auf `<a>`-Elementen impliziert dasselbe `rel`-Verhalten wie das Setzen von [`rel="noopener"`](/de/docs/Web/HTML/Reference/Attributes/rel/noopener), das `window.opener` nicht setzt.

- `type`
  - : Gibt das Format der verlinkten URL mit einem {{Glossary("MIME_type", "MIME-Typ")}} an. Keine integrierte Funktionalität.

### Veraltete Attribute

- `charset` {{Deprecated_Inline}}
  - : Gab das {{Glossary("character_encoding", "Zeichenencoding")}} der verlinkten URL an.

    > [!NOTE]
    > Dieses Attribut ist veraltet und **sollte von Autoren nicht verwendet werden**. Verwenden Sie den HTTP-{{HTTPHeader("Content-Type")}}-Header auf der verlinkten URL.

- `coords` {{Deprecated_Inline}}
  - : Wurde mit [dem `shape`-Attribut](#shape) verwendet. Eine durch Kommas getrennte Liste von Koordinaten.
- `name` {{Deprecated_Inline}}
  - : War erforderlich, um einen möglichen Zielort auf einer Seite zu definieren. In HTML 4.01 konnten `id` und `name` beide auf `<a>` verwendet werden, solange sie identische Werte hatten.

    > [!NOTE]
    > Verwenden Sie stattdessen das globale Attribut [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id).

- `rev` {{Deprecated_Inline}}
  - : Gab einen umgekehrten Link an; das Gegenteil des [`rel`-Attributs](#rel). Veraltet, weil es sehr verwirrend war.
- `shape` {{Deprecated_Inline}}
  - : Die Form des Hyperlink-Bereichs in einer Imagemap.

    > [!NOTE]
    > Verwenden Sie stattdessen das {{HTMLElement("area")}}-Element für Imagemaps.

## Barrierefreiheit

### Starker Linktext

**Der Inhalt innerhalb eines Links sollte darauf hinweisen, wohin der Link führt**, auch aus dem Kontext heraus.

#### Nicht barrierefreier, schwacher Linktext

Ein leider häufiger Fehler ist es, nur die Wörter "hier klicken" oder "hier" zu verlinken:

```html example-bad
<p>Learn more about our products <a href="/products">here</a>.</p>
```

##### Ergebnis

{{EmbedLiveSample('Nicht barrierefreier, schwacher Linktext', '100%', '50')}}

#### Barrierefreier, starker Linktext

Glücklicherweise ist dies eine einfache Korrektur und tatsächlich kürzer als die nicht barrierefreie Version!

```html example-good
<p>Learn more <a href="/products">about our products</a>.</p>
```

##### Ergebnis

{{EmbedLiveSample('Barrierefreier, starker Linktext', '100%', '50')}}

Assistivsoftware bietet Abkürzungen, um alle Links auf einer Seite aufzulisten. Allerdings profitieren alle Benutzer von starkem Linktext — die Abkürzung "alle Links auflisten" ahmt nach, wie Sehende Seiten schnell scannen.

### onclick-Ereignisse

Ankerelemente werden oft missbraucht, indem sie als Scheintasten verwendet werden, indem ihr `href` auf `#` oder [`javascript:void(0)`](/de/docs/Web/URI/Reference/Schemes/javascript) gesetzt wird, um zu verhindern, dass die Seite aktualisiert wird, und dann auf ihre `click`-Ereignisse gehört wird.

Diese falschen `href`-Werte verursachen unerwartetes Verhalten beim Kopieren/Drag & Drop von Links, Öffnen von Links in einem neuen Tab/Fenster, beim Setzen von Lesezeichen oder wenn JavaScript geladen wird, Fehler hat oder deaktiviert ist. Sie vermitteln auch falsche Semantik an assistive Technologien wie Screenreader.

Verwenden Sie stattdessen ein {{HTMLElement("button")}}. Im Allgemeinen **sollten Sie nur einen Hyperlink für die Navigation zu einer echten URL verwenden**.

### Externe Links und Links zu Nicht-HTML-Ressourcen

Links, die über `target="_blank"` in einem neuen Tab/Fenster geöffnet werden, oder Links, die auf eine herunterzuladende Datei verweisen, sollten angeben, was passiert, wenn dem Link gefolgt wird.

Personen mit eingeschränktem Sehvermögen, die mit der Hilfe von Screenreader-Technologie navigieren, oder mit kognitiven Bedenken könnten verwirrt werden, wenn unerwartet ein neuer Tab, ein neues Fenster oder eine Anwendung geöffnet wird. Ältere Screenreader-Software kündigt das Verhalten möglicherweise nicht einmal an.

#### Link, der einen neuen Tab/ein neues Fenster öffnet

```html
<a target="_blank" href="https://www.wikipedia.org">
  Wikipedia (opens in new tab)
</a>
```

##### Ergebnis

{{EmbedLiveSample('Link, der einen neuen Tab/ein neues Fenster öffnet')}}

#### Link zu einer Nicht-HTML-Ressource

Wenn ein Symbol verwendet wird, um das Linkverhalten zu signalisieren, stellen Sie sicher, dass es ein [`alt`-Attribut](/de/docs/Web/HTML/Reference/Elements/img#alt) hat, um seinen Zweck zu beschreiben. Wenn das Symbol fehlt, wird der Inhalt des `alt`-Attributs trotzdem das Verhalten des Links vermitteln.

```html
<p>
  <a href="https://www.wikipedia.org/" target="_blank">
    Wikipedia
    <img src="new-tab.svg" width="14" alt="(Opens in new tab)" />
  </a>
  <br />
  <a href="2017-annual-report.ppt">
    2017 annual report
    <img src="powerpoint.svg" width="14" alt="(PowerPoint file)" />
  </a>
</p>
<p>
  <a href="https://www.wikipedia.org/" target="_blank">
    Wikipedia
    <img src="missing-icon.svg" width="14" alt="(Opens in new tab)" />
  </a>
  <br />
  <a href="2017-annual-report.ppt">
    2017 annual report
    <img src="missing-icon.svg" width="14" alt="(PowerPoint file)" />
  </a>
</p>
```

##### Ergebnis

{{EmbedLiveSample('Link zu einer Nicht-HTML-Ressource')}}

- [WebAIM: Links und Hypertext - Hypertext-Links](https://webaim.org/techniques/hypertext/hypertext_links)
- [MDN / Verstehen der WCAG, Leitfaden 3.2](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
- [G200: Öffnen neuer Fenster und Tabs von einem Link nur bei Notwendigkeit](https://www.w3.org/TR/WCAG20-TECHS/G200.html)
- [G201: Benutzern eine frühzeitige Warnung geben, wenn ein neues Fenster geöffnet wird](https://www.w3.org/TR/WCAG20-TECHS/G201.html)

### Skip Links

Ein **Skip Link** ist ein Link, der so früh wie möglich im {{HTMLElement("body")}}-Inhalt platziert wird und auf den Beginn des Hauptinhalts der Seite verweist. Normalerweise wird ein Skip Link per CSS außerhalb des Bildschirms versteckt, bis er fokussiert wird.

```html
<body>
  <a href="#content" class="skip-link">Skip to main content</a>

  <header>…</header>

  <!-- The skip link jumps to here -->
  <main id="content"></main>
</body>
```

```css
.skip-link {
  position: absolute;
  top: -3em;
  background: white;
}
.skip-link:focus {
  top: 0;
}
```

#### Ergebnis

{{EmbedLiveSample('Skip Links')}}

Skip Links ermöglichen es Tastaturbenutzern, Inhalte zu überspringen, die auf mehreren Seiten wiederholt werden, wie z. B. die Navigation im Header.

Skip Links sind besonders nützlich für Personen, die mit Hilfe von Assistenztechnologien wie Schaltersteuerung, Sprachbefehlen oder Mundstöcken/Kopfwanderungen navigieren, bei denen das Durchlaufen von sich wiederholenden Links mühsam sein kann.

- [WebAIM: "Skip Navigation" Links](https://webaim.org/techniques/skipnav/)
- [Anleitung: Verwenden von Skip Navigation Links](https://www.a11yproject.com/posts/skip-nav-links/)
- [MDN / Verstehen der WCAG, Leitfaden 2.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.4_%e2%80%94_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Verstehen des Erfolgskriteriums 2.4.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)

### Größe und Nähe

#### Größe

Interaktive Elemente wie Links sollten einen Bereich bereitstellen, der groß genug ist, dass sie leicht aktiviert werden können. Dies hilft einer Vielzahl von Menschen, einschließlich solcher mit motorischen Problemen und solcher, die ungenaue Eingaben wie ein Touchscreen verwenden. Eine Mindestgröße von 44×44 [CSS-Pixels](https://w3c.github.io/wcag/guidelines/22/#dfn-css-pixels) wird empfohlen.

Text-only-Links in Fließtext sind von dieser Anforderung ausgenommen, aber es ist dennoch ratsam, sicherzustellen, dass genug Text verlinkt ist, um leicht aktiviert zu werden.

- [Verständnis des Erfolgskriteriums 2.5.5: Zielgröße](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Zielgröße und 2.5.5](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Schnelltest: Große Touch-Ziele](https://www.a11yproject.com/posts/large-touch-targets/)

#### Nähe

Interaktive Elemente, wie Links, die in enger visueller Nähe zueinander platziert sind, sollten durch Leerraum getrennt werden. Abstände helfen Menschen mit motorischen Problemen, die andernfalls versehentlich das falsche interaktive Element aktivieren könnten.

Abstände können mit CSS-Eigenschaften wie {{CSSxRef("margin")}} erstellt werden.

- [Handzittern und das Riesenknopf-Problem](https://axesslab.com/hand-tremors/)

## Beispiele

### Verlinkung zu einer absoluten URL

#### HTML

```html
<a href="https://www.mozilla.com">Mozilla</a>
```

#### Ergebnis

{{EmbedLiveSample('Verlinkung zu einer absoluten URL')}}

### Verlinkung zu relativen URLs

#### HTML

```html
<a href="//example.com">Scheme-relative URL</a>
<a href="/en-US/docs/Web/HTML">Origin-relative URL</a>
<a href="p">Directory-relative URL</a>
<a href="./p">Directory-relative URL</a>
<a href="../p">Parent-directory-relative URL</a>
```

```css hidden
a {
  display: block;
  margin-bottom: 0.5em;
}
```

#### Ergebnis

{{EmbedLiveSample('Verlinkung zu relativen URLs')}}

### Verlinkung zu einem Element auf derselben Seite

```html
<!-- <a> element links to the section below -->
<p><a href="#Section_further_down">Jump to the heading below</a></p>

<!-- Heading to link to -->
<h2 id="Section_further_down">Section further down</h2>
```

#### Ergebnis

{{EmbedLiveSample('Verlinkung zu einem Element auf derselben Seite')}}

> [!NOTE]
> Sie können `href="#top"` oder das leere Fragment (`href="#"`) verwenden, um zum Anfang der aktuellen Seite zu linken, [wie in der HTML-Spezifikation definiert](https://html.spec.whatwg.org/multipage/browsing-the-web.html#scroll-to-the-fragment-identifier).

### Verlinkung zu einer E-Mail-Adresse

Um Links zu erstellen, die im E-Mail-Programm des Benutzers eine neue Nachricht öffnen, verwenden Sie das `mailto:`-Schema:

```html
<a href="mailto:nowhere@mozilla.org">Send email to nowhere</a>
```

#### Ergebnis

{{EmbedLiveSample('Verlinkung zu einer E-Mail-Adresse')}}

Für Details zu `mailto:`-URLs, wie das Einschließen eines Betreffs oder Textes, siehe [E-Mail-Links](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links#email_links) oder {{RFC(6068)}}.

### Verlinkung zu Telefonnummern

```html
<a href="tel:+49.157.0156">+49 157 0156</a>
<a href="tel:+1(800)555-0123">(800) 555-0123</a>
```

#### Ergebnis

{{EmbedLiveSample('Verlinkung zu Telefonnummern')}}

Das Verhalten von `tel:`-Links variiert mit den Fähigkeiten des Geräts:

- Mobilgeräte wählen die Nummer automatisch.
- Die meisten Betriebssysteme haben Programme, die Anrufe tätigen können, wie Skype oder FaceTime.
- Websites können Telefonanrufe mit [`registerProtocolHandler`](/de/docs/Web/API/Navigator/registerProtocolHandler) tätigen, z.B. `web.skype.com`.
- Andere Verhaltensweisen schließen das Speichern der Nummer in Kontakten ein oder das Senden der Nummer an ein anderes Gerät.

Siehe {{RFC(3966)}} für Syntax, zusätzliche Funktionen und andere Details zum `tel:`-URL-Schema.

### Verwendung des Download-Attributs, um ein `<canvas>` als PNG zu speichern

Um den Inhalt eines {{HTMLElement("canvas")}}-Elements als Bild zu speichern, können Sie einen Link erstellen, bei dem `href` die Canvas-Daten ist als `data:`-URL, die mit JavaScript erstellt wird, und das `download`-Attribut den Dateinamen für die heruntergeladene PNG-Datei bereitstellt:

#### Beispiel-Mal-App mit Speicher-Link

##### HTML

```html
<p>
  Paint by holding down the mouse button and moving it.
  <a href="" download="my_painting.png">Download my painting</a>
</p>

<canvas width="300" height="300"></canvas>
```

##### CSS

```css
html {
  font-family: sans-serif;
}
canvas {
  background: white;
  border: 1px dashed;
}
a {
  display: inline-block;
  background: #6699cc;
  color: white;
  padding: 5px 10px;
}
```

##### JavaScript

```js
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
c.fillStyle = "hotpink";
let isDrawing;

function draw(x, y) {
  if (isDrawing) {
    c.beginPath();
    c.arc(x, y, 10, 0, Math.PI * 2);
    c.closePath();
    c.fill();
  }
}

canvas.addEventListener("mousemove", (event) =>
  draw(event.offsetX, event.offsetY),
);
canvas.addEventListener("mousedown", () => (isDrawing = true));
canvas.addEventListener("mouseup", () => (isDrawing = false));

document
  .querySelector("a")
  .addEventListener(
    "click",
    (event) => (event.target.href = canvas.toDataURL()),
  );
```

##### Ergebnis

{{EmbedLiveSample('Beispiel-Mal-App mit Speicher-Link', '100%', '400')}}

## Sicherheit und Datenschutz

`<a>`-Elemente können Konsequenzen für die Sicherheit und den Datenschutz der Benutzer haben. Siehe [`Referer`-Header: Datenschutz- und Sicherheitsbedenken](/de/docs/Web/Privacy/Guides/Referer_header:_privacy_and_security_concerns) für Informationen.

Verwendung von `target="_blank"` ohne [`rel="noreferrer"`](/de/docs/Web/HTML/Reference/Attributes/rel/noreferrer) und [`rel="noopener"`](/de/docs/Web/HTML/Reference/Attributes/rel/noopener) macht die Website anfällig für Angriffe durch Ausnutzung der [`window.opener`](/de/docs/Web/API/Window/opener)-API, wobei zu beachten ist, dass in neueren Browserversionen das Setzen von `target="_blank"` implizit denselben Schutz bietet, wie das Setzen von `rel="noopener"`. Siehe [Browser-Kompatibilität](#browser-kompatibilität) für Details.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flussinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#interactive_content"
          >interaktiver Inhalt</a
        >, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#transparent_content_model"
          >Transparent</a
        >, außer dass kein Nachkomme
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#interactive_content"
          >interaktiver Inhalt</a
        > oder ein
        <code>&lt;a&gt;</code>-Element sein darf und kein Nachkomme ein festgelegtes
        <a
          href="/de/docs/Web/HTML/Reference/Global_attributes/tabindex"
          >Tabindex</a
        >-Attribut haben darf.
      </td>
    </tr>
    <tr>
      <th scope="row">Tagweglassen</th>
      <td>Keiner, sowohl der Start- als auch der End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flussinhalt</a
        > akzeptiert, jedoch keine anderen <code>&lt;a&gt;</code>-Elemente.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/link_role"><code>link</code></a> wenn <code>href</code>-Attribut vorhanden ist, sonst
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role"><code>generic</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>
        <p>Wenn <code>href</code>-Attribut vorhanden ist:</p>
        <ul>
          <li><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/button_role"><code>button</code></a></li>
          <li><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role"><code>checkbox</code></a></li>
          <li><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role"><code>menuitem</code></a></li>
          <li><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role"><code>menuitemcheckbox</code></a></li>
          <li><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role"><code>menuitemradio</code></a></li>
          <li><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/option_role"><code>option</code></a></li>
          <li><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role"><code>radio</code></a></li>
          <li><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role"><code>switch</code></a></li>
          <li><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role"><code>tab</code></a></li>
          <li><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/treeitem_role"><code>treeitem</code></a></li>
        </ul>
        <p>Wenn <code>href</code>-Attribut nicht vorhanden ist:</p>
        <ul>
          <li>beliebig</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("link")}} ist ähnlich wie `<a>`, jedoch für Metadaten-Hyperlinks, die für Benutzer unsichtbar sind.
- {{CSSxRef(":link")}} ist eine CSS-Pseudoklasse, die `<a>`-Elemente mit einer URL im `href`-Attribut, die vom Benutzer noch nicht besucht wurde, abgleichen wird.
- {{CSSxRef(":visited")}} ist eine CSS-Pseudoklasse, die `<a>`-Elemente mit einer URL im `href`-Attribut, die vom Benutzer in der Vergangenheit besucht wurde, abgleichen wird.
- {{CSSxRef(":any-link")}} ist eine CSS-Pseudoklasse, die `<a>`-Elemente mit einem `href`-Attribut abgleichen wird.
- [Textfragmente](/de/docs/Web/URI/Reference/Fragment/Text_fragments) sind Anweisungen für Benutzeragenten, die URLs hinzugefügt werden, sodass Inhaltsautoren auf spezifischen Text auf einer Seite verlinken können, ohne dass IDs erforderlich sind.
