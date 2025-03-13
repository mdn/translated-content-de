---
title: "<a>: Das Ankerelement"
slug: Web/HTML/Element/a
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTMLSidebar}}

Das **`<a>`** [HTML](/de/docs/Web/HTML) Element (oder _Anker_-Element) erstellt mit [seinem `href` Attribut](#href) einen Hyperlink zu Webseiten, Dateien, E-Mail-Adressen, Orten auf derselben Seite oder allem anderen, auf das eine URL verweisen kann.

Der Inhalt innerhalb jedes `<a>` sollte das Ziel des Links angeben. Wenn das `href` Attribut vorhanden ist, wird es aktiviert, wenn die Eingabetaste gedrückt wird, während das `<a>` Element im Fokus steht.

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

Die Attribute dieses Elements beinhalten die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `attributionsrc` {{experimental_inline}}

  - : Gibt an, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}} Header senden soll. Auf der Serverseite wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}} Headers in der Antwort auszulösen, um eine [navigationsbasierte Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#navigation-based_attribution_sources) zu registrieren.

    Der Browser speichert die Quelldaten, die mit der navigationsbasierten Attributionsquelle verknüpft sind (wie im {{httpheader("Attribution-Reporting-Register-Source")}} Antwortheader angegeben), wenn der Benutzer auf den Link klickt. Weitere Details finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

    Es gibt zwei Versionen dieses Attributs, die Sie festlegen können:

    - Boolean, d.h. nur der `attributionsrc` Name. Dies gibt an, dass der {{httpheader("Attribution-Reporting-Eligible")}} Header an denselben Server gesendet werden soll, auf den das `href` Attribut zeigt. Dies ist geeignet, wenn Sie die Registrierung der Attributionsquelle auf demselben Server durchführen.
    - Wert, der eine oder mehrere URLs enthält, zum Beispiel:

      ```html
      attributionsrc="https://a.example/register-source
      https://b.example/register-source"
      ```

      Dies ist nützlich, wenn die angeforderte Ressource nicht auf einem Server befindet, den Sie kontrollieren, oder Sie die Registrierung der Attributionsquelle auf einem anderen Server vornehmen möchten. In diesem Fall können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcenanforderung erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}} Header an die in `attributionsrc` angegebenen URL(s) zusätzlich zum Ressourcenursprung gesendet. Diese URLs können dann mit den {{httpheader("Attribution-Reporting-Register-Source")}} antworten, um die Registrierung abzuschließen.

      > [!NOTE]
      > Mehrere URLs anzugeben bedeutet, dass mehrere Attributionsquellen auf demselben Merkmal registriert werden können. Zum Beispiel könnten Sie verschiedene Kampagnen messen wollen, deren Erfolg die Erstellung unterschiedlicher Berichte über unterschiedliche Daten umfasst.

    `<a>` Elemente können nicht als Attributionstrigger, sondern nur als Quellen verwendet werden.

- `download`

  - : Verursacht, dass der Browser die verlinkte URL als Download behandelt. Kann mit oder ohne `filename` Wert verwendet werden:

    - Ohne Wert wird der Browser einen Dateinamen/Erweiterung vorschlagen, generiert aus verschiedenen Quellen:

      - Der {{HTTPHeader("Content-Disposition")}} HTTP Header
      - Das finale Segment im URL [Pfad](/de/docs/Web/API/URL/pathname)
      - Der {{Glossary("MIME_type", "Medientyp")}} (aus dem {{HTTPHeader("Content-Type")}} Header, dem Anfang einer [`data:` URL](/de/docs/Web/URI/Reference/Schemes/data) oder [`Blob.type`](/de/docs/Web/API/Blob/type) für eine [`blob:` URL](/de/docs/Web/API/URL/createObjectURL_static))

    - `filename`: Wenn ein Wert definiert wird, wird dieser als Dateiname vorgeschlagen. `/` und `\` Zeichen werden in Unterstriche (`_`) umgewandelt. Dateisysteme können andere Zeichen in Dateinamen verbieten, daher werden Browser den vorgeschlagenen Namen bei Bedarf anpassen.

    > [!NOTE]
    >
    > - `download` funktioniert nur für [Same-Origin-URLs](/de/docs/Web/Security/Same-origin_policy) oder die `blob:` und `data:` Schemata.
    > - Wie Browser Downloads behandeln, variiert je nach Browser, Benutzereinstellungen und anderen Faktoren. Der Benutzer könnte vor Beginn eines Downloads aufgefordert werden, oder die Datei wird automatisch gespeichert, oder es öffnet sich automatisch in einer externen Anwendung oder im Browser selbst.
    > - Wenn der `Content-Disposition` Header unterschiedliche Informationen zum `download` Attribut enthält, können die Ergebnisse abweichen:
    >
    >   - Wenn der Header einen `filename` angibt, hat dieser Vorrang vor einem im `download` Attribut angegebenen Dateinamen.
    >   - Wenn der Header eine Disposition von `inline` spezifiziert, priorisieren Chrome und Firefox das Attribut und behandeln es als Download. Alte Firefox-Versionen (vor 82) priorisierten den Header und zeigten die Inhalte inline an.

- `href`

  - : Die URL, auf die der Hyperlink verweist. Links sind nicht auf HTTP-basierte URLs beschränkt — sie können jedes von Browsern unterstützte URL-Schema verwenden:

    - Telefonnummern mit `tel:` URLs
    - E-Mail-Adressen mit `mailto:` URLs
    - SMS-Textnachrichten mit `sms:` URLs
    - Ausführbarer Code mit [`javascript:` URLs](/de/docs/Web/URI/Reference/Schemes/javascript)
    - Während Webbrowser andere URL-Schemata möglicherweise nicht unterstützen, können Websites dies mit [`registerProtocolHandler()`](/de/docs/Web/API/Navigator/registerProtocolHandler)

    Darüber hinaus können andere URL-Funktionen bestimmte Teile der Ressource verorten, einschließlich:

    - Bereichen einer Seite mit Dokumentfragmenten
    - Bestimmten Textabschnitten mit [Textfragmenten](/de/docs/Web/URI/Reference/Fragment/Text_fragments)
    - Teilen von Mediendateien mit Medienfragmenten

- `hreflang`
  - : Hinweis auf die menschliche Sprache der verlinkten URL. Keine eingebaute Funktionalität. Erlaubte Werte sind dieselben wie [das globale `lang` Attribut](/de/docs/Web/HTML/Global_attributes/lang).
- `ping`
  - : Eine durch Leerzeichen getrennte Liste von URLs. Wenn der Link gefolgt wird, sendet der Browser mit {{HTTPMethod("POST")}} Anfragen mit dem Körper `PING` an die URLs. Typischerweise zum Tracking.
- `referrerpolicy`

  - : Wie viel des [Referrer](/de/docs/Web/HTTP/Reference/Headers/Referer) gesendet wird, wenn dem Link gefolgt wird.

    - `no-referrer`: Der {{HTTPHeader("Referer")}} Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}} Header wird nicht an {{Glossary("origin", "Ursprung")}}s ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`: Der gesendete Referrer wird auf den Ursprung der verweisenden Seite beschränkt: sein [Schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`: Der an andere Ursprünge gesendete Referrer wird auf das Schema, den Host und den Port beschränkt. Navigationen im selben Ursprung enthalten weiterhin den Pfad.
    - `same-origin`: Ein Referrer wird für {{Glossary("Same-origin_policy", "denselben Ursprung")}} gesendet, aber Anfragen an Cross-Origin werden keine Referrer-Informationen enthalten.
    - `strict-origin`: Sendet den Ursprung des Dokuments als Referrer nur, wenn die Protokollsicherheitsstufe gleich bleibt (HTTPS→HTTPS), aber nicht an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard): Sendet eine vollständige URL bei einer Anfrage im selben Ursprung, sendet nur den Ursprung, wenn die Protokollsicherheitsstufe gleich bleibt (HTTPS→HTTPS), und sendet keinen Header an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `unsafe-url`: Der Referrer enthält den Ursprung _und_ den Pfad (aber nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder [Benutzername](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge leakt.

- [`rel`](/de/docs/Web/HTML/Attributes/rel)
  - : Die Beziehung der verlinkten URL als durch Leerzeichen getrennte Linktypen.
- `target`

  - : Wo die verlinkte URL angezeigt werden soll, als der Name für einen _Browsing-Kontext_ (ein Tab, Fenster oder {{HTMLElement("iframe")}}). Die folgenden Schlüsselwörter haben spezielle Bedeutungen dafür, wo die URL geladen wird:

    - `_self`: Der aktuelle Browsing-Kontext. (Standard)
    - `_blank`: Üblicherweise ein neuer Tab, aber Benutzer können ihre Browser so konfigurieren, dass sie stattdessen ein neues Fenster öffnen.
    - `_parent`: Der übergeordnete Browsing-Kontext des aktuellen. Wenn kein übergeordneter Kontext vorhanden ist, verhält er sich wie `_self`.
    - `_top`: Der oberste Browsing-Kontext. Konkret bedeutet dies den "höchsten" Kontext, der ein Vorfahre des aktuellen ist. Wenn keine Vorfahren vorhanden sind, verhält er sich wie `_self`.
    - `_unfencedTop`: Ermöglicht eingebetteten [fenced frames](/de/docs/Web/API/Fenced_frame_API), den obersten Frame zu navigieren (d.h. über die Wurzel des fenced frame hinauszugehen, im Gegensatz zu anderen reservierten Zielen). Beachten Sie, dass die Navigation auch außerhalb eines fenced frame Kontextes erfolgreich sein wird, jedoch nicht wie ein reserviertes Schlüsselwort wirkt.

    > [!NOTE]
    > Wenn `target="_blank"` auf `<a>` Elementen gesetzt ist, stellt es implizit dasselbe `rel` Verhalten bereit wie das Setzen von [`rel="noopener"`](/de/docs/Web/HTML/Attributes/rel/noopener), was `window.opener` nicht setzt.

- `type`
  - : Hinweis auf das Format der verlinkten URL mit einem {{Glossary("MIME_type", "MIME-Typ")}}. Keine eingebaute Funktionalität.

### Veraltete Attribute

- `charset` {{Deprecated_Inline}}

  - : Ein Hinweis auf die {{Glossary("character_encoding", "Zeichenkodierung")}} der verlinkten URL.

    > [!NOTE]
    > Dieses Attribut ist veraltet und **sollte von Autoren nicht verwendet werden**. Verwenden Sie den HTTP {{HTTPHeader("Content-Type")}} Header für die verlinkte URL.

- `coords` {{Deprecated_Inline}}
  - : Wurde mit [dem `shape` Attribut](#shape) verwendet. Eine durch Kommas getrennte Liste von Koordinaten.
- `name` {{Deprecated_Inline}}

  - : War erforderlich, um einen möglichen Zielort auf einer Seite zu definieren. In HTML 4.01 konnten `id` und `name` beide auf `<a>` verwendet werden, solange sie identische Werte hatten.

    > [!NOTE]
    > Verwenden Sie stattdessen das globale Attribut [`id`](/de/docs/Web/HTML/Global_attributes/id).

- `rev` {{Deprecated_Inline}}
  - : Spezifizierte einen umgekehrten Link; das Gegenteil des [`rel` Attributs](#rel). Veraltet wegen sehr verwirrender Implementierung.
- `shape` {{Deprecated_Inline}}

  - : Die Form der Hyperlink-Region in einer Image-Map.

    > [!NOTE]
    > Verwenden Sie stattdessen das {{HTMLElement("area")}} Element für Image-Maps.

## Barrierefreiheit

### Starker Linktext

**Der Inhalt innerhalb eines Links sollte anzeigen, wohin der Link führt**, auch aus dem Kontext heraus.

#### Nicht zugänglicher, schwacher Linktext

Ein leider häufiger Fehler ist es, nur die Wörter "hier klicken" oder "hier" zu verlinken:

```html example-bad
<p>Learn more about our products <a href="/products">here</a>.</p>
```

##### Ergebnis

{{EmbedLiveSample('Inaccessible, weak link text')}}

#### Starker Linktext

Glücklicherweise ist dies eine einfache Korrektur, und sie ist tatsächlich kürzer als die nicht zugängliche Version!

```html example-good
<p>Learn more <a href="/products">about our products</a>.</p>
```

##### Ergebnis

{{EmbedLiveSample('Strong link text')}}

Assistive Software hat Kurzbefehle, um alle Links auf einer Seite aufzulisten. Starker Linktext kommt jedoch allen Benutzern zugute — der "Alle Links auflisten" Kurzbefehl emuliert, wie sehende Benutzer Seiten schnell scannen.

### onclick Ereignisse

Ankerelemente werden oft als gefälschte Buttons missbraucht, indem ihr `href` auf `#` oder [`javascript:void(0)`](/de/docs/Web/URI/Reference/Schemes/javascript) gesetzt wird, um zu verhindern, dass die Seite aktualisiert wird, und dann auf ihre `click` Ereignisse gehört wird.

Diese gefälschten `href` Werte verursachen unerwartetes Verhalten beim Kopieren/Ziehen von Links, Öffnen von Links in einem neuen Tab/Fenster, Bookmarking oder wenn JavaScript geladen, fehlerhaft oder deaktiviert ist. Sie vermitteln auch falsche Semantik an unterstützende Technologien, wie Bildschirmleser.

Verwenden Sie stattdessen ein {{HTMLElement("button")}}. Generell **sollten Sie einen Hyperlink nur zur Navigation zu einer realen URL verwenden**.

### Externe Links und Verlinkung zu nicht-HTML-Ressourcen

Links, die in einem neuen Tab/Fenster öffnen via `target="_blank"`, oder Links, die auf eine Download-Datei verweisen, sollten angeben, was passiert, wenn der Link verfolgt wird.

Menschen mit Sehbehinderungen, die mit Hilfe von Bildschirmlesetechnologien navigieren, oder mit kognitiven Problemen, könnten verwirrt sein, wenn sich ein neuer Tab, ein Fenster oder eine Anwendung unerwartet öffnet. Ältere Bildschirmlesesoftware kündigt dieses Verhalten möglicherweise nicht einmal an.

#### Link, der einen neuen Tab/ein neues Fenster öffnet

```html
<a target="_blank" href="https://www.wikipedia.org">
  Wikipedia (opens in new tab)
</a>
```

##### Ergebnis

{{EmbedLiveSample('Link that opens a new tab/window')}}

#### Link zu einer nicht-HTML-Ressource

Wenn ein Symbol verwendet wird, um das Linkverhalten zu signalisieren, stellen Sie sicher, dass es ein [`alt` Attribut](/de/docs/Web/HTML/Element/img#alt) hat, um seinen Zweck zu beschreiben. Falls das Symbol fehlt, wird der Inhalt des `alt` Attributs immer noch das Linkverhalten vermitteln.

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

{{EmbedLiveSample('Link to a non-HTML resource')}}

- [WebAIM: Links und Hypertext - Hypertext Links](https://webaim.org/techniques/hypertext/hypertext_links)
- [MDN / Verständnis der WCAG, Leitlinie 3.2](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
- [G200: Neue Fenster und Tabs von einem Link nur öffnen, wenn notwendig](https://www.w3.org/TR/WCAG20-TECHS/G200.html)
- [G201: Den Benutzern eine Vorwarnung geben, wenn ein neues Fenster geöffnet wird](https://www.w3.org/TR/WCAG20-TECHS/G201.html)

### Skip-Links

Ein **Skip-Link** ist ein Link, der so früh wie möglich im {{HTMLElement("body")}} Inhalt platziert wird, der zum Anfang des Hauptinhalts der Seite führt. Normalerweise wird ein Skip-Link durch CSS vom Bildschirm verborgen, bis er im Fokus steht.

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
  background: #fff;
}
.skip-link:focus {
  top: 0;
}
```

#### Ergebnis

{{EmbedLiveSample('Skip links')}}

Skip-Links ermöglichen es Tastaturnutzern, Inhalte zu überspringen, die auf mehreren Seiten wiederholt werden, wie beispielsweise die header-Navigation.

Skip-Links sind besonders nützlich für Menschen, die mit Hilfe assistiver Technologien wie Schaltersteuerung, Sprachbefehlen oder Saugrohr/Kopfstäben navigieren, wo das Durchlaufen sich wiederholender Links mühsam sein kann.

- [WebAIM: "Skip Navigation" Links](https://webaim.org/techniques/skipnav/)
- [Anleitung: Skip Navigation Links verwenden](https://www.a11yproject.com/posts/skip-nav-links/)
- [MDN / Verständnis der WCAG, Leitlinie 2.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.4_%e2%80%94_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Verständnis des Erfolgskriteriums 2.4.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)

### Größe und Nähe

#### Größe

Interaktive Elemente, wie Links, sollten eine ausreichend große Fläche bieten, dass es einfach ist, sie zu aktivieren. Dies hilft einer Vielzahl von Personen, einschließlich Personen mit motorischen Steuerungsproblemen und solchen, die ungenaue Eingaben wie einen Touchscreen verwenden. Eine Mindestgröße von 44×44 [CSS-Pixeln](https://www.w3.org/TR/WCAG21/#dfn-css-pixels) wird empfohlen.

Reine Textlinks in Proseinhalten sind von dieser Anforderung freigestellt, aber es ist dennoch eine gute Idee, sicherzustellen, dass genügend Text hyperlinked ist, um leicht aktiviert werden zu können.

- [Verständnis des Erfolgskriteriums 2.5.5: Zielgröße](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Zielgröße und 2.5.5](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Schnelltest: Große Touch-Ziele](https://www.a11yproject.com/posts/large-touch-targets/)

#### Nähe

Interaktive Elemente, wie Links, die in enger visueller Nähe platziert sind, sollten durch einen Raum getrennt sein. Das Einfügen von Abständen hilft Personen mit motorischen Steuerungsproblemen, die sonst möglicherweise versehentlich das falsche interaktive Element aktivieren.

Abstände können mittels CSS-Eigenschaften wie {{CSSxRef("margin")}} geschaffen werden.

- [Handzittern und das Problem mit großen Buttons](https://axesslab.com/hand-tremors/)

## Beispiele

### Verlinkung zu einer absoluten URL

#### HTML

```html
<a href="https://www.mozilla.com">Mozilla</a>
```

#### Ergebnis

{{EmbedLiveSample('Linking_to_an_absolute_URL')}}

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

{{EmbedLiveSample('Linking_to_relative_URLs')}}

### Verlinkung zu einem Element auf derselben Seite

```html
<!-- <a> element links to the section below -->
<p><a href="#Section_further_down">Jump to the heading below</a></p>

<!-- Heading to link to -->
<h2 id="Section_further_down">Section further down</h2>
```

#### Ergebnis

{{EmbedLiveSample('Linking to an element on the same page')}}

> [!NOTE]
> Sie können `href="#top"` oder das leere Fragment (`href="#"`) verwenden, um zum Anfang der aktuellen Seite zu verlinken, [wie in der HTML-Spezifikation definiert](https://html.spec.whatwg.org/multipage/browsing-the-web.html#scroll-to-the-fragment-identifier).

### Verlinkung zu einer E-Mail-Adresse

Um Links zu erstellen, die im E-Mail-Programm des Benutzers geöffnet werden, um eine neue Nachricht zu senden, verwenden Sie das `mailto:` Schema:

```html
<a href="mailto:nowhere@mozilla.org">Send email to nowhere</a>
```

#### Ergebnis

{{EmbedLiveSample('Linking to an email address')}}

Für Details zu `mailto:` URLs, wie das Einfügen eines Betreffs oder Textes, siehe [E-Mail-Links](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links#email_links) oder {{RFC(6068)}}.

### Verlinkung zu Telefonnummern

```html
<a href="tel:+49.157.0156">+49 157 0156</a>
<a href="tel:+1(800)555-0123">(800) 555-0123</a>
```

#### Ergebnis

{{EmbedLiveSample('Linking to telephone numbers')}}

Das Verhalten von `tel:` Links variiert je nach Gerätefähigkeit:

- Mobilgeräte wählen die Nummer automatisch.
- Die meisten Betriebssysteme haben Programme, die Anrufe tätigen können, wie Skype oder FaceTime.
- Websites können Telefonate mit [`registerProtocolHandler`](/de/docs/Web/API/Navigator/registerProtocolHandler) durchführen, wie `web.skype.com`.
- Andere Verhaltensweisen umfassen das Speichern der Nummer in Kontakten oder das Senden der Nummer an ein anderes Gerät.

Siehe {{RFC(3966)}} für Syntax, zusätzliche Funktionen und andere Details zum `tel:` URL-Schema.

### Verwendung des `download` Attributs, um ein `<canvas>` als PNG zu speichern

Um den Inhalt eines {{HTMLElement("canvas")}} Elements als Bild zu speichern, können Sie einen Link erstellen, bei dem `href` die Canvas-Daten als eine vom JavaScript erstellte `data:` URL ist und das `download` Attribut den Dateinamen für die heruntergeladene PNG-Datei bereitstellt:

#### Beispiel einer Malanwendung mit Speicherlink

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
  background: #fff;
  border: 1px dashed;
}
a {
  display: inline-block;
  background: #69c;
  color: #fff;
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

{{EmbedLiveSample('Example_painting_app_with_save_link', '100%', '400')}}

## Sicherheit und Datenschutz

`<a>` Elemente können Konsequenzen für die Benutzer-Sicherheit und den Datenschutz haben. Siehe [`Referer` Header: Datenschutz- und Sicherheitsbedenken](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns) für Informationen.

Die Verwendung von `target="_blank"` ohne [`rel="noreferrer"`](/de/docs/Web/HTML/Attributes/rel/noreferrer) und [`rel="noopener"`](/de/docs/Web/HTML/Attributes/rel/noopener) macht die Website anfällig für Ausbeutungsangriffe der [`window.opener`](/de/docs/Web/API/Window/opener) API, obwohl in neueren Browserversionen das Setzen von `target="_blank"` implizit denselben Schutz wie das Setzen von `rel="noopener"` bietet. Sehen Sie die [Browser-Kompatibilität](#browser-kompatibilität) für Details.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flussinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Textinhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Content_categories#interactive_content"
          >interaktiver Inhalt</a
        >, tastbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a
          href="/de/docs/Web/HTML/Content_categories#transparent_content_model"
          >Transparent</a
        >, mit der Ausnahme, dass kein Nachfahre
        <a
          href="/de/docs/Web/HTML/Content_categories#interactive_content"
          >interaktiver Inhalt</a
        > oder ein
        <code>&lt;a&gt;</code> Element sein darf und kein Nachfahre ein
        <a
          href="/de/docs/Web/HTML/Global_attributes/tabindex"
          >tabindex</a
        > Attribut haben darf.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das Endtag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flussinhalt</a
        > akzeptiert, aber keine anderen <code>&lt;a&gt;</code> Elemente.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/link_role"><code>link</code></a> wenn das <code>href</code> Attribut
        vorhanden ist, ansonsten
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

- {{HTMLElement("link")}} ist ähnlich wie `<a>`, aber für Metadaten-Hyperlinks, die für Benutzer unsichtbar sind.
- {{CSSxRef(":link")}} ist eine CSS-Pseudoklasse, die auf `<a>` Elemente mit URL im `href` Attribut zutrifft, die vom Benutzer noch nicht besucht wurden.
- {{CSSxRef(":visited")}} ist eine CSS-Pseudoklasse, die auf `<a>` Elemente mit URL im `href` Attribut zutrifft, die in der Vergangenheit vom Benutzer besucht wurden.
- {{CSSxRef(":any-link")}} ist eine CSS-Pseudoklasse, die auf `<a>` Elemente mit `href` Attribut zutrifft.
- [Textfragmente](/de/docs/Web/URI/Reference/Fragment/Text_fragments) sind Anweisungen des User-Agents, die URLs hinzugefügt werden und es Inhaltsautoren erlauben, zu spezifischem Text auf einer Seite zu verlinken, ohne dass IDs erforderlich sind.
