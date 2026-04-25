---
title: "`<a>` HTML-Anker-Element"
short-title: <a>
slug: Web/HTML/Reference/Elements/a
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

Das **`<a>`** [HTML](/de/docs/Web/HTML) Element (oder _Anker_ Element) erstellt mit [seinem `href` Attribut](#href) einen Hyperlink zu Webseiten, Dateien, E-Mail-Adressen, Orten auf derselben Seite oder allem anderen, was eine URL adressieren kann.

Inhalt innerhalb jedes `<a>` sollte das Ziel des Links angeben. Wenn das `href` Attribut vorhanden ist, wird das Drücken der Eingabetaste, während das `<a>` Element fokussiert ist, dieses aktivieren.

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

Die Attribute dieses Elements enthalten die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `attributionsrc` {{deprecated_inline}}
  - : Gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}} Header sendet. Serverseitig wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}} Headers in der Antwort auszulösen, um eine [navigationsbasierte Attribution-Quelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#navigation-based_attribution_sources) zu registrieren.

    Der Browser speichert die Quelldaten, die mit der navigationsbasierten Attribution-Quelle verbunden sind (wie im {{httpheader("Attribution-Reporting-Register-Source")}} Antwort-Header bereitgestellt), wenn der Benutzer auf den Link klickt. Einzelheiten finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

    Es gibt zwei Versionen dieses Attributs, die Sie festlegen können:
    - Boolean, d.h. nur der Name `attributionsrc`. Dies gibt an, dass Sie möchten, dass der {{httpheader("Attribution-Reporting-Eligible")}} Header an denselben Server gesendet wird, zu dem das `href` Attribut zeigt. Dies ist in Ordnung, wenn Sie die Registrierung der Attributionsquelle auf demselben Server verarbeiten.
    - Wert mit einer oder mehreren URLs, zum Beispiel:

      ```html
      attributionsrc="https://a.example/register-source
      https://b.example/register-source"
      ```

      Dies ist nützlich in Fällen, in denen die angeforderte Ressource nicht auf einem Server ist, den Sie kontrollieren, oder Sie möchten die Registrierung der Attribution-Quelle einfach auf einem anderen Server behandeln. In diesem Fall können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcenanforderung erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}} Header an die in `attributionsrc` angegebenen URLs zusätzlich zum Ursprung der Ressource gesendet. Diese URLs können dann mit dem {{httpheader("Attribution-Reporting-Register-Source")}} antworten, um die Registrierung abzuschließen.

      > [!NOTE]
      > Das Spezifizieren mehrerer URLs bedeutet, dass mehrere Attributionsquellen auf derselben Funktion registriert werden können. Sie könnten zum Beispiel verschiedene Kampagnen haben, deren Erfolg Sie messen möchten, und die unterschiedliche Berichte über unterschiedliche Daten generieren.

    `<a>` Elemente können nicht als Attribution-Auslöser, sondern nur als Quellen verwendet werden.

- `download`
  - : Veranlasst den Browser, die verlinkte URL als Download zu behandeln. Kann mit oder ohne `filename` Wert verwendet werden:
    - Ohne einen Wert wird der Browser einen Dateinamen/Erweiterung vorschlagen, die aus verschiedenen Quellen generiert werden:
      - Der {{HTTPHeader("Content-Disposition")}} HTTP Header
      - Das letzte Segment im URL [Pfad](/de/docs/Web/API/URL/pathname)
      - Der {{Glossary("MIME_type", "Medientyp")}} (aus dem {{HTTPHeader("Content-Type")}} Header, dem Anfang einer [`data:` URL](/de/docs/Web/URI/Reference/Schemes/data), oder [`Blob.type`](/de/docs/Web/API/Blob/type) für eine [`blob:` URL](/de/docs/Web/URI/Reference/Schemes/blob))

    - `filename`: Die Angabe eines Werts schlägt diesen als Dateinamen vor. `/` und `\` Zeichen werden in Unterstriche (`_`) konvertiert. Dateisysteme können andere Zeichen in Dateinamen verbieten, sodass Browser den vorgeschlagenen Namen bei Bedarf anpassen.

    > [!NOTE]
    >
    > - `download` funktioniert nur für [same-origin URLs](/de/docs/Web/Security/Defenses/Same-origin_policy), oder die `blob:` und `data:` Schemata.
    > - Wie Browser Downloads behandeln, variiert je nach Browser, Benutzereinstellungen und anderen Faktoren. Der Benutzer kann aufgefordert werden, bevor ein Download startet, oder die Datei kann automatisch gespeichert werden, oder sie kann automatisch geöffnet werden, entweder in einer externen Anwendung oder im Browser selbst.
    > - Wenn der `Content-Disposition` Header andere Informationen als das `download` Attribut hat, kann das Ergebnisverhalten unterschiedlich sein:
    >   - Wenn der Header einen `filename` angibt, hat er Vorrang vor einem im `download` Attribut angegebenen Dateinamen.
    >   - Wenn der Header eine Disposition von `inline` angibt, priorisieren Chrome und Firefox das Attribut und behandeln es als Download. Ältere Firefox-Versionen (vor 82) priorisieren den Header und zeigen den Inhalt inline an.

- `href`
  - : Die URL, auf die der Hyperlink zeigt. Links sind nicht auf HTTP-basierte URLs beschränkt — sie können jedes URL-Schema verwenden, das von Browsern unterstützt wird:
    - Telefonnummern mit `tel:` URLs
    - E-Mail-Adressen mit `mailto:` URLs
    - SMS-Textnachrichten mit `sms:` URLs
    - Ausführbarer Code mit [`javascript:` URLs](/de/docs/Web/URI/Reference/Schemes/javascript)
    - Während Webbrowser möglicherweise andere URL-Schemata nicht unterstützen, können Websites dies mit [`registerProtocolHandler()`](/de/docs/Web/API/Navigator/registerProtocolHandler) tun

    Darüber hinaus können andere URL-Funktionen spezifische Teile der Ressource lokalisieren, einschließlich:
    - Abschnitte einer Seite mit Dokumentfragmenten
    - Bestimmte Textteile mit [Textfragmenten](/de/docs/Web/URI/Reference/Fragment/Text_fragments)
    - Teile von Mediendateien mit Medienfragmenten

- `hreflang`
  - : Gibt einen Hinweis auf die menschliche Sprache der verlinkten URL. Keine integrierte Funktionalität. Erlaubte Werte sind dieselben wie [das globale `lang` Attribut](/de/docs/Web/HTML/Reference/Global_attributes/lang).
- `interestfor` {{experimental_inline}} {{non-standard_inline}}
  - : Definiert das `<a>` Element als einen **Interesse-Auslöser**. Sein Wert ist die `id` des Zielelements, das in irgendeiner Weise beeinflusst wird (normalerweise angezeigt oder ausgeblendet), wenn Interesse am Auslöser-Element gezeigt oder verloren wird (zum Beispiel durch Hovern/Unhovern oder Fokussieren/Entfokussieren). Siehe [Verwendung von Interesse-Auslösern](/de/docs/Web/API/Popover_API/Using_interest_invokers) für weitere Details und Beispiele.
- `ping`
  - : Eine durch Leerzeichen getrennte Liste von URLs. Wenn der Link verfolgt wird, sendet der Browser {{HTTPMethod("POST")}} Anfragen mit dem Body `PING` an die URLs. Typischerweise für das Tracking verwendet.
- `referrerpolicy`
  - : Wie viel vom [Referrer](/de/docs/Web/HTTP/Reference/Headers/Referer) beim Folgen des Links gesendet werden soll.
    - `no-referrer`: Der {{HTTPHeader("Referer")}} Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}} Header wird nicht an {{Glossary("origin", "Origin")}}s ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`: Der gesendete Referrer ist auf den Origin der verweisenden Seite beschränkt: sein [Schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`: Der an andere Origins gesendete Referrer ist auf das Schema, den Host und den Port beschränkt. Navigationen im selben Origin enthalten weiterhin den Pfad.
    - `same-origin`: Ein Referrer wird für {{Glossary("Same-origin_policy", "denselben Origin")}} gesendet, aber Anfragen zu unterschiedlichen Origins enthalten keine Referrer-Informationen.
    - `strict-origin`: Nur den Origin des Dokuments als Referrer senden, wenn das Sicherheitsprotokoll gleich bleibt (HTTPS→HTTPS), aber nicht zu einem weniger sicheren Ziel (HTTPS→HTTP) senden.
    - `strict-origin-when-cross-origin` (Standardeinstellung): Senden Sie eine vollständige URL bei der Durchführung einer same-origin-Anfrage, senden Sie nur den Origin, wenn das Sicherheitsprotokoll gleich bleibt (HTTPS→HTTPS), und senden Sie keinen Header zu einem weniger sicheren Ziel (HTTPS→HTTP).
    - `unsafe-url`: Der Referrer wird den Origin _und_ den Pfad enthalten (aber nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), das [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder den [Benutzernamen](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Origins und Pfade von TLS-geschützten Ressourcen zu unsicheren Origins leakt.

- [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)
  - : Die Beziehung der verlinkten URL als durch Leerzeichen getrennte Linktypen.
- `target`
  - : Wo die verlinkte URL angezeigt werden soll, als Name für einen _Browsing-Kontext_ (ein Tab, ein Fenster oder ein {{HTMLElement("iframe")}}). Die folgenden Schlüsselwörter haben spezielle Bedeutungen dafür, wo die URL geladen werden soll:
    - `_self`: Der aktuelle Browsing-Kontext. (Standard)
    - `_blank`: Normalerweise ein neuer Tab, Benutzer können jedoch Browser so konfigurieren, dass stattdessen ein neues Fenster geöffnet wird.
    - `_parent`: Der übergeordnete Browsing-Kontext des aktuellen. Wenn kein übergeordnetes Element vorhanden ist, verhält es sich wie `_self`.
    - `_top`: Der oberste Browsing-Kontext. Konkret bedeutet dies den "höchsten" Kontext, der ein Vorfahre des aktuellen ist. Wenn kein Vorfahre vorhanden ist, verhält es sich wie `_self`.
    - `_unfencedTop`: Ermöglicht eingebetteten [umzäunten Rahmen](/de/docs/Web/API/Fenced_frame_API), das oberste Frame zu navigieren (d.h. über die Wurzel des umzäunten Rahmens hinaus, im Gegensatz zu anderen reservierten Zielen). Beachten Sie, dass die Navigation auch dann erfolgreich sein wird, wenn dies außerhalb eines umzäunten Rahmens verwendet wird, aber es wird nicht wie ein reserviertes Schlüsselwort agieren.

    > [!NOTE]
    > Das Festlegen von `target="_blank"` auf `<a>` Elementen impliziert dasselbe `rel` Verhalten wie das Festlegen von [`rel="noopener"`](/de/docs/Web/HTML/Reference/Attributes/rel/noopener), was `window.opener` nicht setzt.

- `type`
  - : Gibt einen Hinweis auf das Format der verlinkten URL mit einem {{Glossary("MIME_type", "MIME-Typ")}}. Keine integrierte Funktionalität.

### Veraltete Attribute

- `charset` {{Deprecated_Inline}}
  - : Gab einen Hinweis auf die {{Glossary("character_encoding", "Zeichenkodierung")}} der verlinkten URL.

    > [!NOTE]
    > Dieses Attribut ist veraltet und **sollte nicht von Autoren verwendet werden**. Verwenden Sie stattdessen den HTTP {{HTTPHeader("Content-Type")}} Header auf der verlinkten URL.

- `coords` {{Deprecated_Inline}}
  - : Verwendet mit [dem `shape` Attribut](#shape). Eine durch Kommas getrennte Liste von Koordinaten.
- `name` {{Deprecated_Inline}}
  - : War erforderlich, um einen möglichen Zielort auf einer Seite zu definieren. In HTML 4.01 konnten `id` und `name` beide auf `<a>` verwendet werden, solange sie identische Werte hatten.

    > [!NOTE]
    > Verwenden Sie stattdessen das globale Attribut [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id).

- `rev` {{Deprecated_Inline}}
  - : Spezifizierte einen umgekehrten Link; das Gegenteil vom [dem `rel` Attribut](#rel). Veraltet, weil es sehr verwirrend ist.
- `shape` {{Deprecated_Inline}}
  - : Der Form des Hyperlinkbereichs in einer Imagemap.

    > [!NOTE]
    > Verwenden Sie stattdessen das {{HTMLElement("area")}} Element für Imagemaps.

## Barrierefreiheit

### Starker Linktext

**Der Inhalt innerhalb eines Links sollte angeben, wohin der Link führt**, selbst aus dem Kontext heraus.

#### Nicht zugänglicher, schwacher Linktext

Ein leider häufiger Fehler ist es, nur die Wörter "hier klicken" oder "hier" zu verlinken:

```html example-bad
<p>Learn more about our products <a href="/products">here</a>.</p>
```

##### Ergebnis

{{EmbedLiveSample('Nicht zugänglicher, schwacher Linktext', '100%', '50')}}

#### Zugänglicher, starker Linktext

Glücklicherweise ist dies eine einfache Lösung, und es ist tatsächlich kürzer als die nicht zugängliche Version!

```html example-good
<p>Learn more <a href="/products">about our products</a>.</p>
```

##### Ergebnis

{{EmbedLiveSample('Zugänglicher, starker Linktext', '100%', '50')}}

Assistierende Software bietet Verknüpfungen, um alle Links auf einer Seite aufzulisten. Starker Linktext kommt jedoch allen Benutzern zugute — die Verknüpfung "alle Links auflisten" emuliert, wie sehende Benutzer schnell Seiten überfliegen.

### onclick Ereignisse

Ankerelemente werden oft als falsche Schaltflächen missbraucht, indem ihr `href` auf `#` oder [`javascript:void(0)`](/de/docs/Web/URI/Reference/Schemes/javascript) gesetzt wird, um zu verhindern, dass die Seite aktualisiert wird, und dann auf ihre `click` Ereignisse zu hören.

Diese gefälschten `href` Werte führen zu unerwartetem Verhalten beim Kopieren/Ziehen von Links, Öffnen von Links in einem neuen Tab/Fenster, Bookmarken oder bei der Ladefehler oder Deaktivierung von JavaScript. Sie vermitteln auch den assistiven Technologien, wie Bildschirmlesegeräten, falsche Semantik.

Verwenden Sie stattdessen einen {{HTMLElement("button")}}. Generell sollte **ein Hyperlink nur zur Navigation zu einer echten URL verwendet werden**.

### Externe Links und Verlinkung zu nicht-HTML-Ressourcen

Links, die in einem neuen Tab/Fenster via `target="_blank"` geöffnet werden oder Links, die auf eine Download-Datei verweisen, sollten angeben, was passiert, wenn der Link gefolgt wird.

Personen, die unter Sehbehinderungen leiden, mit Hilfe von Bildschirmlese-Technologie navigieren oder kognitive Bedenken haben, können verwirrt sein, wenn ein neuer Tab, ein neues Fenster oder eine neue Anwendung unerwartet geöffnet wird. Ältere Bildschirmlesesoftware kündigt das Verhalten möglicherweise nicht einmal an.

#### Link, der einen neuen Tab/ein neues Fenster öffnet

```html
<a target="_blank" href="https://www.wikipedia.org">
  Wikipedia (opens in new tab)
</a>
```

##### Ergebnis

{{EmbedLiveSample('Link, der einen neuen Tab/ein neues Fenster öffnet')}}

#### Link zu einer nicht-HTML-Ressource

Wenn ein Icon verwendet wird, um das Linkverhalten anzuzeigen, stellen Sie sicher, dass es ein [`alt` Attribut](/de/docs/Web/HTML/Reference/Elements/img#alt) hat, um seinen Zweck zu beschreiben. Falls das Icon fehlt, wird der Inhalt des `alt` Attributs trotzdem das Verhalten des Links vermitteln.

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

{{EmbedLiveSample('Link zu einer nicht-HTML-Ressource')}}

- [WebAIM: Links und Hypertext - Hypertext-Links](https://webaim.org/techniques/hypertext/hypertext_links)
- [MDN / Understanding WCAG, Richtlinie 3.2](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
- [G200: Öffnen neuer Fenster und Tabs aus einem Link nur bei Bedarf](https://www.w3.org/TR/WCAG20-TECHS/G200.html)
- [G201: Den Benutzern eine vorherige Warnung geben, wenn ein neues Fenster geöffnet wird](https://www.w3.org/TR/WCAG20-TECHS/G201.html)

### Skip-Links

Ein **Skip-Link** ist ein Link, der so früh wie möglich im {{HTMLElement("body")}} Inhalt platziert wird und auf den Beginn des Hauptinhalts der Seite verweist. Normalerweise wird ein Skip-Link per CSS ausgeblendet, bis er fokussiert ist.

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

{{EmbedLiveSample('Skip-Links')}}

Skip-Links ermöglichen es Tastaturnutzern, Inhalte zu umgehen, die sich über mehrere Seiten hinweg wiederholen, wie z.B. die Navigation in der Kopfzeile.

Skip-Links sind besonders nützlich für Menschen, die mit Hilfe von assistiven Technologien wie Schaltersteuerung, Sprachbefehl oder Mundsticks/Kopfstäben navigieren, wo das Durchlaufen von sich wiederholenden Links mühsam sein kann.

- [WebAIM: "Skip-Navigation" Links](https://webaim.org/techniques/skipnav/)
- [Anleitung: Verwenden von Skip-Navigation-Links](https://www.a11yproject.com/posts/skip-nav-links/)
- [MDN / Understanding WCAG, Richtlinie 2.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.4_%e2%80%94_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Understanding Success Criterion 2.4.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)

### Größe und Nähe

#### Größe

Interaktive Elemente, wie Links, sollten eine ausreichend große Fläche bereitstellen, damit es einfach ist, sie zu aktivieren. Dies hilft einer Vielzahl von Menschen, einschließlich solcher mit motorischen Steuerungsproblemen und solchen, die ungenaue Eingaben wie Touchscreens verwenden. Eine Mindestgröße von 44×44 [CSS-Pixeln](https://w3c.github.io/wcag/guidelines/22/#dfn-css-pixels) wird empfohlen.

Nur Textlinks im Fließtext sind von dieser Anforderung ausgenommen, aber es ist dennoch ratsam zu gewährleisten, dass genug Text verlinkt ist, um leicht aktiviert zu werden.

- [Understanding Success Criterion 2.5.5: Zielgröße](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Zielgröße und 2.5.5](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Schnelltest: Große Touch-Ziele](https://www.a11yproject.com/posts/large-touch-targets/)

#### Nähe

Interaktive Elemente, wie Links, die in naher visueller Nähe platziert sind, sollten durch einen Raum getrennt sein. Abstand hilft Menschen mit motorischen Steuerungsproblemen, die sonst möglicherweise versehentlich das falsche interaktive Element aktivieren.

Der Abstand kann mittels CSS-Eigenschaften wie {{CSSxRef("margin")}} geschaffen werden.

- [Handtremor und das Problem der Riesenknöpfe](https://axesslab.com/hand-tremors/)

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
> Sie können `href="#top"` oder das leere Fragment (`href="#"`) verwenden, um zum Anfang der aktuellen Seite zu verlinken, [wie in der HTML-Spezifikation definiert](https://html.spec.whatwg.org/multipage/browsing-the-web.html#scroll-to-the-fragment-identifier).

### Verlinkung zu einer E-Mail-Adresse

Um Links zu erstellen, die im E-Mail-Programm des Benutzers geöffnet werden sollen, damit er eine neue Nachricht senden kann, verwenden Sie das `mailto:` Schema:

```html
<a href="mailto:nowhere@mozilla.org">Send email to nowhere</a>
```

#### Ergebnis

{{EmbedLiveSample('Verlinkung zu einer E-Mail-Adresse')}}

Einzelheiten zu `mailto:` URLs, wie das Einfügen eines Betreffs oder Inhalts, finden Sie unter [E-Mail-Links](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links#email_links) oder {{RFC(6068)}}.

### Verlinkung zu Telefonnummern

```html
<a href="tel:+49.157.0156">+49 157 0156</a>
<a href="tel:+1(800)555-0123">(800) 555-0123</a>
```

#### Ergebnis

{{EmbedLiveSample('Verlinkung zu Telefonnummern')}}

Das Verhalten von `tel:` Links variiert je nach Gerätefähigkeiten:

- Mobilgeräte wählen die Nummer automatisch.
- Die meisten Betriebssysteme haben Programme, die Anrufe tätigen können, wie Skype oder FaceTime.
- Websites können Anrufe tätigen mit [`registerProtocolHandler`](/de/docs/Web/API/Navigator/registerProtocolHandler), wie `web.skype.com`.
- Andere Verhaltensweisen umfassen das Speichern der Nummer in Kontakten oder das Senden der Nummer an ein anderes Gerät.

Siehe {{RFC(3966)}} für die Syntax, zusätzliche Funktionen und weitere Details zum `tel:` URL-Schema.

### Verwendung des Download-Attributs zum Speichern eines \<canvas> als PNG

Um die Inhalte eines {{HTMLElement("canvas")}} Elements als Bild zu speichern, können Sie einen Link erstellen, bei dem das `href` die Canvas-Daten als eine `data:` URL ist, die mit JavaScript erstellt wurde, und das `download` Attribut den Dateinamen für die heruntergeladene PNG-Datei bereitstellt:

#### Beispiel-Mal-App mit Speicherlink

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

{{EmbedLiveSample('Beispiel-Mal-App mit Speicherlink', '100%', '400')}}

## Sicherheit und Datenschutz

`<a>` Elemente können Konsequenzen für die Sicherheit und Privatsphäre der Benutzer haben. Siehe [`Referer` Header: Sicherheits- und Datenschutzbedenken](/de/docs/Web/Privacy/Guides/Referer_header:_privacy_and_security_concerns) für Informationen.

Die Verwendung von `target="_blank"` ohne [`rel="noreferrer"`](/de/docs/Web/HTML/Reference/Attributes/rel/noreferrer) und [`rel="noopener"`](/de/docs/Web/HTML/Reference/Attributes/rel/noopener) macht die Website anfällig für [`window.opener`](/de/docs/Web/API/Window/opener) API-Ausnutzungsangriffe, obwohl neuere Browserversionen beim Festlegen von `target="_blank"` implizit denselben Schutz wie das Festlegen von `rel="noopener"` bieten. Siehe [Browser-Kompatibilität](#browser-kompatibilität) für Details.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories">
          Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flow Content</a>,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasing Content</a>,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#interactive_content">Interaktiver Content</a>, greifbarer Content.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#transparent_content_model">
          Transparent</a>, außer dass kein Nachkomme
        interaktiver Content oder ein
        <code>&lt;a&gt;</code> Element sein darf, und kein Nachkomme darf ein
        <a href="/de/docs/Web/HTML/Reference/Global_attributes/tabindex">tabindex Attribut</a> haben.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag weglassen</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flow Content</a> akzeptiert, aber keine anderen <code>&lt;a&gt;</code> Elemente.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/link_role"><code>link</code></a> wenn das
        <code>href</code> Attribut vorhanden ist, ansonsten
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role"><code>generic</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>
        <p>Wenn das <code>href</code> Attribut vorhanden ist:</p>
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
        <p>Wenn das <code>href</code> Attribut nicht vorhanden ist:</p>
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
- {{CSSxRef(":link")}} ist eine CSS-Pseudoklasse, die `<a>` Elemente mit URL im `href` Attribut, die vom Benutzer noch nicht besucht wurden, abgleichen wird.
- {{CSSxRef(":visited")}} ist eine CSS-Pseudoklasse, die `<a>` Elemente mit URL im `href` Attribut, die vom Benutzer in der Vergangenheit besucht wurden, abgleichen wird.
- {{CSSxRef(":any-link")}} ist eine CSS-Pseudoklasse, die `<a>` Elemente mit `href` Attribut abgleichen wird.
- [Textfragmente](/de/docs/Web/URI/Reference/Fragment/Text_fragments) sind nutzeragentenbasierte Anweisungen, die URLs hinzugefügt werden, sodass Inhaltsautoren ohne erforderliche IDs auf spezifischen Text auf einer Seite verlinken können.
