---
title: "<a>: Das Ankerelement"
slug: Web/HTML/Reference/Elements/a
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

{{HTMLSidebar}}

Das **`<a>`** [HTML](/de/docs/Web/HTML)-Element (oder _Anker_-Element) erstellt mit [seinem `href`-Attribut](#href) einen Hyperlink zu Webseiten, Dateien, E-Mail-Adressen, Orten auf derselben Seite oder allem anderen, was eine URL ansprechen kann.

Der Inhalt innerhalb jedes `<a>` _sollte_ das Ziel des Links angeben. Wenn das `href`-Attribut vorhanden ist, wird es bei Betätigung der Eingabetaste, während das `<a>`-Element fokussiert ist, aktiviert.

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

Die Attribute dieses Elements schließen die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes) ein.

- `attributionsrc` {{experimental_inline}}

  - : Gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header sendet. Serverseitig wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}}-Headers in der Antwort auszulösen, um eine [navigationsbasierte Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#navigation-based_attribution_sources) zu registrieren.

    Der Browser speichert die Quellendaten, die mit der navigationsbasierten Attributionsquelle verbunden sind (wie im {{httpheader("Attribution-Reporting-Register-Source")}}-Antwortheader angegeben), wenn der Nutzer auf den Link klickt. Siehe die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) für weitere Details.

    Es gibt zwei Versionen dieses Attributs, die Sie festlegen können:

    - Boolean, d.h. nur der Name `attributionsrc`. Das gibt an, dass Sie möchten, dass der {{httpheader("Attribution-Reporting-Eligible")}}-Header an denselben Server wie das `href`-Attribut gesendet wird. Dies ist in Ordnung, wenn Sie die Registrierung der Attributionsquelle auf demselben Server verarbeiten.
    - Wert mit einer oder mehreren URLs, zum Beispiel:

      ```html
      attributionsrc="https://a.example/register-source
      https://b.example/register-source"
      ```

      Dies ist nützlich, wenn die angeforderte Ressource nicht auf einem Server liegt, den Sie kontrollieren, oder wenn Sie die Registrierung der Attributionsquelle auf einem anderen Server verarbeiten möchten. In diesem Fall können Sie als Wert von `attributionsrc` eine oder mehrere URLs angeben. Wenn die Ressourcenanforderung auftritt, wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header an die in `attributionsrc` angegebenen URL(s) zusätzlich zu der Ursprungsressource gesendet. Diese URLs können dann mit dem {{httpheader("Attribution-Reporting-Register-Source")}} antworten, um die Registrierung abzuschließen.

      > [!NOTE]
      > Das Angeben mehrerer URLs bedeutet, dass mehrere Attributionsquellen auf demselben Merkmal registriert werden können. Sie könnten zum Beispiel verschiedene Kampagnen haben, deren Erfolg Sie messen möchten, was das Generieren verschiedener Berichte über verschiedene Daten erfordert.

    `<a>`-Elemente können nicht als Attributionsauslöser, sondern nur als Quellen verwendet werden.

- `download`

  - : Veranlasst den Browser, die verknüpfte URL als Download zu behandeln. Kann mit oder ohne `filename`-Wert verwendet werden:

    - Ohne Wert schlägt der Browser einen Dateinamen/Extension vor, der aus verschiedenen Quellen generiert wird:

      - Der {{HTTPHeader("Content-Disposition")}} HTTP-Header
      - Das letzte Segment im URL-[Pfad](/de/docs/Web/API/URL/pathname)
      - Der {{Glossary("MIME_type", "Medientyp")}} (vom {{HTTPHeader("Content-Type")}}-Header, vom Anfang einer [`data:`-URL](/de/docs/Web/URI/Reference/Schemes/data) oder [`Blob.type`](/de/docs/Web/API/Blob/type) für eine [`blob:`-URL](/de/docs/Web/API/URL/createObjectURL_static))

    - `filename`: das Definieren eines Wertes schlägt diesen als Dateinamen vor. `/` und `\` Zeichen werden in Unterstriche (`_`) umgewandelt. Dateisysteme können andere Zeichen in Dateinamen verbieten, sodass Browser den vorgeschlagenen Namen bei Bedarf anpassen.

    > [!NOTE]
    >
    > - `download` funktioniert nur für [gleiche-Ursprungs-URLs](/de/docs/Web/Security/Same-origin_policy) oder die `blob:`- und `data:`-Schemas.
    > - Wie Browser Downloads behandeln, variiert je nach Browser, Benutzereinstellungen und anderen Faktoren. Der Nutzer kann vor dem Start eines Downloads aufgefordert werden, oder die Datei kann automatisch gespeichert oder geöffnet werden, entweder in einer externen Anwendung oder im Browser selbst.
    > - Wenn der `Content-Disposition`-Header andere Informationen als das `download`-Attribut enthält, kann sich das Verhalten unterscheiden:
    >
    >   - Wenn der Header einen `filename` spezifiziert, hat er Vorrang gegenüber einem im `download`-Attribut angegebenen Dateinamen.
    >   - Wenn der Header eine Disposition von `inline` angibt, priorisieren Chrome und Firefox das Attribut und behandeln es als Download. Alte Firefox-Versionen (vor Version 82) priorisieren den Header und zeigen den Inhalt inline an.

- `href`

  - : Die URL, auf die der Hyperlink zeigt. Links sind nicht auf HTTP-basierte URLs beschränkt — sie können jedes URL-Schema verwenden, das von Browsern unterstützt wird:

    - Telefonnummern mit `tel:` URLs
    - E-Mail-Adressen mit `mailto:` URLs
    - SMS-Nachrichten mit `sms:` URLs
    - Ausführbarer Code mit [`javascript:` URLs](/de/docs/Web/URI/Reference/Schemes/javascript)
    - Während Webbrowser andere URL-Schemata möglicherweise nicht unterstützen, können Websites dies mit [`registerProtocolHandler()`](/de/docs/Web/API/Navigator/registerProtocolHandler)

    Weitere URL-Funktionen können spezifische Teile der Ressource lokalisieren, einschließlich:

    - Abschnitte einer Seite mit Dokumentfragmenten
    - Bestimmte Textpassagen mit [Textfragmenten](/de/docs/Web/URI/Reference/Fragment/Text_fragments)
    - Teile von Mediendateien mit Medienfragmenten

- `hreflang`
  - : Gibt die menschliche Sprache der verlinkten URL an. Keine eingebaute Funktionalität. Erlaubte Werte sind dieselben wie für das [globale `lang`-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/lang).
- `ping`
  - : Eine durch Leerzeichen getrennte Liste von URLs. Wenn der Link gefolgt wird, sendet der Browser {{HTTPMethod("POST")}}-Anfragen mit dem Text `PING` an die URLs. Typischerweise für Tracking.
- `referrerpolicy`

  - : Wie viel des [Referrers](/de/docs/Web/HTTP/Reference/Headers/Referer) beim Folgen des Links gesendet werden soll.

    - `no-referrer`: Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}}-Header wird nicht an {{Glossary("origin", "Ursprünge")}} ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`: Der gesendete Referrer wird auf den Ursprung der verweisenden Seite beschränkt: sein [Schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`: Der an andere Ursprünge gesendete Referrer wird auf das Schema, den Host und den Port beschränkt. Navigationen auf demselben Ursprung enthalten weiterhin den Pfad.
    - `same-origin`: Ein Referrer wird für {{Glossary("Same-origin_policy", "gleichständigen Ursprung")}} gesendet, aber bei Cross-Origin-Anfragen wird keine Referrer-Information gesendet.
    - `strict-origin`: Nur der Ursprung des Dokuments wird als Referrer gesendet, wenn das Sicherheitsniveau des Protokolls dasselbe bleibt (HTTPS→HTTPS), aber nicht an eine weniger sichere Ziel (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard): Eine vollständige URL wird bei einer Navigation auf demselben Ursprung gesendet, nur der Ursprung wird gesendet, wenn das Sicherheitsniveau des Protokolls dasselbe bleibt (HTTPS→HTTPS), und kein Header wird an eine weniger sichere Ziel (HTTPS→HTTP) gesendet.
    - `unsafe-url`: Der Referrer wird den Ursprung _und_ den Pfad enthalten (aber nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder [Benutzernamen](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge leakt.

- [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)
  - : Die Beziehung der verlinkten URL als durch Leerzeichen getrennte Linktypen.
- `target`

  - : Wo die verlinkte URL angezeigt werden soll, als Name für einen _Browsing-Kontext_ (ein Tab, Fenster oder {{HTMLElement("iframe")}}). Die folgenden Schlüsselwörter haben spezielle Bedeutungen dafür, wo die URL geladen wird:

    - `_self`: Der aktuelle Browsing-Kontext. (Standard)
    - `_blank`: In der Regel ein neuer Tab, aber Nutzer können Browser so konfigurieren, dass ein neues Fenster geöffnet wird.
    - `_parent`: Der übergeordnete Browsing-Kontext des aktuellen. Wenn kein übergeordneter Kontext vorhanden ist, verhält es sich wie `_self`.
    - `_top`: Der oberste Browsing-Kontext. Dies bedeutet spezifisch den "höchsten" Kontext, der ein Vorfahre des aktuellen ist. Wenn keine Vorfahren vorhanden sind, verhält es sich wie `_self`.
    - `_unfencedTop`: Ermöglicht eingebetteten [fenced frames](/de/docs/Web/API/Fenced_frame_API), das oberste Frame zu navigieren (d.h. über die Wurzel des fenced frames hinauszugehen, im Gegensatz zu anderen reservierten Zielen). Beachten Sie, dass die Navigation immer noch erfolgreich sein wird, wenn dies außerhalb eines fenced frame Kontexts verwendet wird, aber es wird nicht wie ein reserviertes Schlüsselwort wirken.

    > [!NOTE]
    > Das Setzen von `target="_blank"` auf `<a>`-Elementen liefert implizit dasselbe `rel`-Verhalten wie das Setzen von [`rel="noopener"`](/de/docs/Web/HTML/Reference/Attributes/rel/noopener), welches `window.opener` nicht setzt.

- `type`
  - : Gibt den Format des verlinkten URL mit einem {{Glossary("MIME_type", "MIME-Typ")}} an. Keine eingebaute Funktionalität.

### Veraltete Attribute

- `charset` {{Deprecated_Inline}}

  - : Hat auf die {{Glossary("character_encoding", "Zeichenkodierung")}} der verlinkten URL hingewiesen.

    > [!NOTE]
    > Dieses Attribut ist veraltet und **sollte von Autoren nicht verwendet werden**. Verwenden Sie stattdessen den HTTP-{{HTTPHeader("Content-Type")}}-Header auf der verlinkten URL.

- `coords` {{Deprecated_Inline}}
  - : Wurde mit [dem `shape`-Attribut](#shape) verwendet. Eine kommagetrennte Liste von Koordinaten.
- `name` {{Deprecated_Inline}}

  - : War erforderlich, um einen möglichen Zielort auf einer Seite zu definieren. In HTML 4.01 konnten sowohl `id` als auch `name` auf `<a>` verwendet werden, solange sie identische Werte hatten.

    > [!NOTE]
    > Verwenden Sie stattdessen das globale Attribut [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id).

- `rev` {{Deprecated_Inline}}
  - : Spezifizierte einen umgekehrten Link; das Gegenteil des [rel-Attributs](#rel). Wegen Verwirrung veraltet.
- `shape` {{Deprecated_Inline}}

  - : Die Form der Hyperlink-Region in einer Imagemap.

    > [!NOTE]
    > Verwenden Sie stattdessen das {{HTMLElement("area")}}-Element für Imagemaps.

## Barrierefreiheit

### Starker Linktext

**Der Inhalt innerhalb eines Links sollte angeben, wohin der Link führt**, auch außerhalb des Kontexts.

#### Nicht barrierefreier, schwacher Linktext

Ein leider häufiger Fehler besteht darin, nur die Wörter "click here" oder "here" zu verlinken:

```html example-bad
<p>Learn more about our products <a href="/products">here</a>.</p>
```

##### Ergebnis

{{EmbedLiveSample('Inaccessible, weak link text')}}

#### Starker Linktext

Glücklicherweise lässt sich dies leicht beheben, und es ist tatsächlich kürzer als die nicht zugängliche Version!

```html example-good
<p>Learn more <a href="/products">about our products</a>.</p>
```

##### Ergebnis

{{EmbedLiveSample('Strong link text')}}

Hilfssoftware bietet Abkürzungen, um alle Links einer Seite aufzulisten. Starker Linktext kommt jedoch allen Nutzern zugute — die "alle Links auflisten"-Abkürzung emuliert, wie sehende Benutzer schnell Seiten scannen.

### onclick-Ereignisse

Ankerelemente werden oft als falsche Schaltflächen missbraucht, indem ihr `href` auf `#` oder [`javascript:void(0)`](/de/docs/Web/URI/Reference/Schemes/javascript) gesetzt wird, um zu verhindern, dass die Seite aktualisiert wird, und dann auf ihre `click`-Ereignisse hören.

Diese falschen `href`-Werte verursachen unerwartetes Verhalten beim Kopieren/ziehen von Links, beim Öffnen von Links in einem neuen Tab/Fenster, beim Lesezeichen setzen oder wenn JavaScript geladen wird, Fehler auftreten oder deaktiviert ist. Sie vermitteln auch falsche Semantik an assistive Technologien, wie Bildschirmleser.

Verwenden Sie stattdessen eine {{HTMLElement("button")}}. Im Allgemeinen **sollten Sie einen Hyperlink nur für die Navigation zu einer realen URL verwenden**.

### Externe Links und Verlinkung zu nicht-HTML-Ressourcen

Links, die in einem neuen Tab/Fenster geöffnet werden über `target="_blank"`, oder Links, die auf eine herunterzuladende Datei zeigen, sollten angeben, was passieren wird, wenn dem Link gefolgt wird.

Menschen mit Sehschwächen, die mit Unterstützung von Bildschirmlesetechnologie navigieren, oder mit kognitiven Einschränkungen könnten verwirrt werden, wenn ein neuer Tab, ein neues Fenster oder eine Anwendung unerwartet geöffnet wird. Ältere Screenreader-Software kündigt das Verhalten möglicherweise nicht einmal an.

#### Link, der ein neues Tab/Fenster öffnet

```html
<a target="_blank" href="https://www.wikipedia.org">
  Wikipedia (opens in new tab)
</a>
```

##### Ergebnis

{{EmbedLiveSample('Link that opens a new tab/window')}}

#### Link zu einer nicht-HTML-Ressource

Wird ein Symbol verwendet, um das Linkverhalten zu signalisieren, stellen Sie sicher, dass es ein [`alt`-Attribut](/de/docs/Web/HTML/Reference/Elements/img#alt) hat, um seinen Zweck zu beschreiben. Falls das Symbol fehlt, wird der Inhalt des `alt`-Attributes trotzdem das Verhalten des Links vermitteln.

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
- [MDN / Verständnis von WCAG, Richtlinie 3.2](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
- [G200: Öffnen neuer Fenster und Tabs von einem Link nur bei Bedarf](https://www.w3.org/TR/WCAG20-TECHS/G200.html)
- [G201: Benutzerwarnung vor dem Öffnen eines neuen Fensters](https://www.w3.org/TR/WCAG20-TECHS/G201.html)

### Überspringen von Links

Ein **Überspringen-Link** ist ein Link, der so früh wie möglich in {{HTMLElement("body")}}-Inhalt platziert wird und auf den Beginn des Hauptinhalts der Seite zeigt. Üblicherweise versteckt CSS einen Überspringen-Link außerhalb des Bildschirms, bis er fokussiert wird.

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

Überspringen-Links ermöglichen es Tastaturnutzern, Inhalte, die auf mehreren Seiten wiederholt werden, wie zum Beispiel Header-Navigation, zu überspringen.

Überspringen-Links sind besonders hilfreich für Menschen, die mit der Unterstützung von assistiver Technologie wie Schaltersteuerung, Sprachsteuerung oder Mundstäben/Kopfstäben navigieren, wo das Durchgehen von wiederholenden Links mühsam sein kann.

- [WebAIM: "Skip Navigation" Links](https://webaim.org/techniques/skipnav/)
- [Anleitung: Verwendung von Skip Navigation Links](https://www.a11yproject.com/posts/skip-nav-links/)
- [MDN / Verständnis von WCAG, Richtlinie 2.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.4_%e2%80%94_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Verständnis der Erfolgskriterien 2.4.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)

### Größe und Nähe

#### Größe

Interaktive Elemente, wie Links, sollten eine ausreichend große Fläche bieten, damit sie leicht aktiviert werden können. Dies hilft verschiedenen Menschen, einschließlich denen mit motorischen Problemen und denen, die ungenaue Eingaben wie ein Touchscreen verwenden. Eine Mindestgröße von 44×44 [CSS-Pixeln](https://w3c.github.io/wcag/guidelines/22/#dfn-css-pixels) wird empfohlen.

Nur-Text-Links im Fließtext sind von dieser Anforderung ausgenommen, aber es ist dennoch eine gute Idee, sicherzustellen, dass genügend Text verlinkt ist, um leicht aktiviert zu werden.

- [Verständnis der Erfolgskriterien 2.5.5: Zielgröße](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Zielgröße und 2.5.5](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Schnelltest: Große Touch-Ziele](https://www.a11yproject.com/posts/large-touch-targets/)

#### Nähe

Interaktive Elemente, wie Links, die in enger visueller Nähe platziert sind, sollten durch Raum voneinander getrennt sein. Abstand hilft Menschen mit motorischen Problemen, die andernfalls versehentlich den falschen interaktiven Inhalt aktivieren könnten.

Abstand kann durch CSS-Eigenschaften wie {{CSSxRef("margin")}} erstellt werden.

- [Handzittern und das Riesenknopf-Problem](https://axesslab.com/hand-tremors/)

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

Um Links zu erstellen, die im E-Mail-Programm des Benutzers öffnen, um eine neue Nachricht zu senden, verwenden Sie das `mailto:`-Schema:

```html
<a href="mailto:nowhere@mozilla.org">Send email to nowhere</a>
```

#### Ergebnis

{{EmbedLiveSample('Linking to an email address')}}

Für Details zu `mailto:`-URLs, wie das Einschließen eines Betreffs oder Textes, siehe [E-Mail-Links](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links#email_links) oder {{RFC(6068)}}.

### Verlinkung zu Telefonnummern

```html
<a href="tel:+49.157.0156">+49 157 0156</a>
<a href="tel:+1(800)555-0123">(800) 555-0123</a>
```

#### Ergebnis

{{EmbedLiveSample('Linking to telephone numbers')}}

Das Verhalten von `tel:`-Links variiert je nach Gerätefunktionen:

- Mobilgeräte wählen die Nummer automatisch.
- Die meisten Betriebssysteme haben Programme, die Anrufe tätigen können, wie Skype oder FaceTime.
- Websites können mit [`registerProtocolHandler`](/de/docs/Web/API/Navigator/registerProtocolHandler) Anrufe tätigen, wie `web.skype.com`.
- Andere Verhaltensweisen umfassen das Speichern der Nummer in Kontakten oder das Senden der Nummer zu einem anderen Gerät.

Siehe {{RFC(3966)}} für Syntax, zusätzliche Merkmale und andere Details über das `tel:`-URL-Schema.

### Verwendung des Download-Attributs, um ein `<canvas>` als PNG zu speichern

Um den Inhalt eines {{HTMLElement("canvas")}}-Elements als Bild zu speichern, können Sie einen Link erstellen, bei dem das `href` die Canvas-Daten als `data:`-URL ist, die mit JavaScript erstellt wurde, und das `download`-Attribut den Dateinamen für die heruntergeladene PNG-Datei bereitstellt:

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

`<a>`-Elemente können Konsequenzen für die Sicherheit und den Datenschutz der Nutzer haben. Siehe [`Referer`-Header: Datenschutz- und Sicherheitsbedenken](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns) für Informationen.

Die Verwendung von `target="_blank"` ohne [`rel="noreferrer"`](/de/docs/Web/HTML/Reference/Attributes/rel/noreferrer) und [`rel="noopener"`](/de/docs/Web/HTML/Reference/Attributes/rel/noopener) macht die Website anfällig für Angriffe durch Ausnutzung der [`window.opener`](/de/docs/Web/API/Window/opener)-API, obwohl zu beachten ist, dass neuere Browserversionen bei der Einstellung von `target="_blank"` automatisch denselben Schutz bieten wie bei der Einstellung von `rel="noopener"`. Siehe [Browser-Kompatibilität](#browser-kompatibilität) für Details.

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
          >phrasierender Inhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#interactive_content"
          >interaktiver Inhalt</a
        >, palpabler Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#transparent_content_model"
          >Transparent</a
        >, außer dass kein Nachfolger
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#interactive_content"
          >interaktiver Inhalt</a
        > oder ein
        <code>&lt;a&gt;</code>-Element sein darf, und kein Nachfolger darf ein spezifiziertes
        <a
          href="/de/docs/Web/HTML/Reference/Global_attributes/tabindex"
          >tabindex</a
        >-Attribut haben.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flussinhalt</a
        > akzeptiert, aber keine anderen <code>&lt;a&gt;</code>-Elemente.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/link_role"><code>link</code></a> wenn das <code>href</code>-Attribut
        vorhanden ist, andernfalls
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role"><code>generic</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>
        <p>Wenn das <code>href</code>-Attribut vorhanden ist:</p>
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
        <p>Wenn das <code>href</code>-Attribut nicht vorhanden ist:</p>
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

- {{HTMLElement("link")}} ist dem `<a>` ähnlich, aber für Metadaten-Hyperlinks, die für Benutzer unsichtbar sind.
- {{CSSxRef(":link")}} ist eine CSS-Pseudoklasse, die `<a>`-Elemente mit einer URL im `href`-Attribut, die noch nicht vom Benutzer besucht wurde, übereinstimmen lässt.
- {{CSSxRef(":visited")}} ist eine CSS-Pseudoklasse, die `<a>`-Elemente mit einer URL im `href`-Attribut, die vom Benutzer in der Vergangenheit besucht wurde, übereinstimmen lässt.
- {{CSSxRef(":any-link")}} ist eine CSS-Pseudoklasse, die `<a>`-Elemente mit `href`-Attribut übereinstimmen lässt.
- [Textfragmente](/de/docs/Web/URI/Reference/Fragment/Text_fragments) sind benutzeragenten-Guidelines, die zu URLs hinzugefügt wurden und es Inhaltsautoren ermöglichen, zu spezifischem Text auf einer Seite zu verlinken, ohne dass IDs erforderlich sind.
