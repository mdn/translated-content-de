---
title: "<a>: Das Anker-Element"
slug: Web/HTML/Reference/Elements/a
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`<a>`**-Element ([HTML](/de/docs/Web/HTML)) (oder _Anker_-Element) erstellt mit [seinem `href`-Attribut](#href) einen Hyperlink zu Webseiten, Dateien, E-Mail-Adressen, Orten auf derselben Seite oder allem anderen, was eine URL ansprechen kann.

Der Inhalt innerhalb jedes `<a>`-Tags _sollte_ das Ziel des Links anzeigen. Wenn das `href`-Attribut vorhanden ist, wird durch Drücken der Eingabetaste, während das `<a>`-Element fokussiert ist, der Link aktiviert.

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

Die Attribute dieses Elements beinhalten die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `attributionsrc` {{experimental_inline}}

  - : Gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header sendet. Auf der Serverseite wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}}-Headers in der Antwort auszulösen, um eine [navigationsbasierte Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#navigation-based_attribution_sources) zu registrieren.

    Der Browser speichert die Quelldaten, die mit der navigationsbasierten Attributionsquelle (wie im {{httpheader("Attribution-Reporting-Register-Source")}}-Antwortheader bereitgestellt) verknüpft sind, wenn der Benutzer auf den Link klickt. Weitere Details finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

    Es gibt zwei Versionen dieses Attributs, die Sie festlegen können:

    - Boolean, d.h. nur der `attributionsrc`-Name. Dies gibt an, dass Sie möchten, dass der {{httpheader("Attribution-Reporting-Eligible")}}-Header an denselben Server gesendet wird, auf den das `href`-Attribut verweist. Das ist in Ordnung, wenn Sie die Registrierung der Attributionsquelle auf demselben Server handhaben.
    - Wert, der eine oder mehrere URLs enthält, z.B.:

      ```html
      attributionsrc="https://a.example/register-source
      https://b.example/register-source"
      ```

      Dies ist nützlich in Fällen, in denen die angeforderte Ressource sich nicht auf einem Server befindet, den Sie kontrollieren, oder wenn Sie die Registrierung der Attributionsquelle auf einem anderen Server handhaben möchten. In diesem Fall können Sie eine oder mehrere URLs als Wert für `attributionsrc` angeben. Wenn die Ressource angefordert wird, wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header zusätzlich zur Ursprungsressource an die in `attributionsrc` angegebenen URL(s) gesendet. Diese URLs können dann mit dem {{httpheader("Attribution-Reporting-Register-Source")}} antworten, um die Registrierung abzuschließen.

      > [!NOTE]
      > Wenn mehrere URLs angegeben werden, können mehrere Attributionsquellen für dasselbe Feature registriert werden. Möglicherweise haben Sie beispielsweise verschiedene Kampagnen, deren Erfolg Sie messen möchten, was das Generieren verschiedener Berichte zu unterschiedlichen Daten umfasst.

    `<a>`-Elemente können nicht als Attributionstrigger, sondern nur als Quellen verwendet werden.

- `download`

  - : Veranlasst den Browser, die verlinkte URL als Download zu behandeln. Kann mit oder ohne `filename`-Wert verwendet werden:

    - Ohne Wert schlägt der Browser einen Dateinamen/erweiterung vor, der aus verschiedenen Quellen generiert wird:

      - Der {{HTTPHeader("Content-Disposition")}} HTTP-Header
      - Das letzte Segment im URL-[Pfad](/de/docs/Web/API/URL/pathname)
      - Der {{Glossary("MIME_type", "Medientyp")}} (aus dem {{HTTPHeader("Content-Type")}}-Header, dem Anfang einer [`data:`-URL](/de/docs/Web/URI/Reference/Schemes/data), oder [`Blob.type`](/de/docs/Web/API/Blob/type) für eine [`blob:`-URL](/de/docs/Web/API/URL/createObjectURL_static))

    - `filename`: Wenn ein Wert definiert wird, wird er als Dateiname vorgeschlagen. `/`- und `\`-Zeichen werden in Unterstriche (`_`) umgewandelt. Dateisysteme können andere Zeichen in Dateinamen verbieten, sodass Browser den vorgeschlagenen Namen bei Bedarf anpassen.

    > [!NOTE]
    >
    > - `download` funktioniert nur für [same-origin URLs](/de/docs/Web/Security/Same-origin_policy) oder die `blob:`- und `data:`-Schemata.
    > - Wie Browser Downloads behandeln, variiert je nach Browser, Benutzereinstellungen und anderen Faktoren. Der Benutzer kann vor dem Start eines Downloads aufgefordert werden, oder die Datei kann automatisch gespeichert oder direkt geöffnet werden, entweder in einer externen Anwendung oder im Browser selbst.
    > - Wenn der `Content-Disposition`-Header andere Informationen als das `download`-Attribut enthält, kann das resultierende Verhalten abweichen:
    >
    >   - Wenn der Header einen `filename` spezifiziert, hat er Vorrang gegenüber einem im `download`-Attribut angegebenen Dateinamen.
    >   - Wenn der Header eine Disposition von `inline` spezifiziert, priorisieren Chrome und Firefox das Attribut und behandeln es als Download. Ältere Firefox-Versionen (vor Version 82) priorisieren den Header und zeigen den Inhalt inline an.

- `href`

  - : Die URL, auf die der Hyperlink verweist. Links sind nicht auf HTTP-basierte URLs beschränkt – sie können jedes von Browsern unterstützte URL-Schema verwenden:

    - Telefonnummern mit `tel:`-URLs
    - E-Mail-Adressen mit `mailto:`-URLs
    - SMS-Textnachrichten mit `sms:`-URLs
    - Ausführbarer Code mit [`javascript:`-URLs](/de/docs/Web/URI/Reference/Schemes/javascript)
    - Während Webbrowser möglicherweise andere URL-Schemata nicht unterstützen, können Websites dies mit [`registerProtocolHandler()`](/de/docs/Web/API/Navigator/registerProtocolHandler).

    Darüber hinaus können andere URL-Funktionen spezifische Teile der Ressource lokalisieren, einschließlich:

    - Abschnitte einer Seite mit Dokumentfragmenten
    - Spezifische Textabschnitte mit [Textfragmenten](/de/docs/Web/URI/Reference/Fragment/Text_fragments)
    - Teile von Mediendateien mit Medienfragmenten

- `hreflang`
  - : Hinweis auf die menschliche Sprache der verlinkten URL. Keine integrierte Funktionalität. Erlaubte Werte sind dieselben wie beim [globalen `lang`-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/lang).
- `ping`
  - : Eine durch Leerzeichen getrennte Liste von URLs. Wenn der Link gefolgt wird, sendet der Browser {{HTTPMethod("POST")}}-Anfragen mit dem Körper `PING` an die URLs. Typischerweise für das Tracking.
- `referrerpolicy`

  - : Wie viel des [Referrers](/de/docs/Web/HTTP/Reference/Headers/Referer) gesendet werden soll, wenn dem Link gefolgt wird.

    - `no-referrer`: Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}}-Header wird nicht an {{Glossary("origin", "Origin")}} ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`: Der gesendete Referrer ist auf den Origin der verweisenden Seite beschränkt: sein [Scheme](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`: Der gesendete Referrer an andere Origins ist auf das Scheme, den Host und den Port beschränkt. Navigationen auf demselben Origin enthalten weiterhin den Pfad.
    - `same-origin`: Ein Referrer wird für {{Glossary("Same-origin_policy", "same origin")}} gesendet, aber Cross-Origin-Anfragen enthalten keine Referrer-Informationen.
    - `strict-origin`: Sendet nur den Origin des Dokuments als Referrer, wenn das Protokollsicherheitsniveau gleich bleibt (HTTPS→HTTPS), aber nicht, wenn es zu einem weniger sicheren Ziel (HTTPS→HTTP) geht.
    - `strict-origin-when-cross-origin` (Standard): Sendet eine vollständige URL, wenn eine Same-Origin-Anfrage durchgeführt wird, sendet nur den Origin, wenn das Protokollsicherheitsniveau gleich bleibt (HTTPS→HTTPS), und sendet keinen Header zu einem weniger sicheren Ziel (HTTPS→HTTP).
    - `unsafe-url`: Der Referrer enthält den Origin _und_ den Pfad (aber nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder [Benutzername](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Origins und Pfade von TLS-geschützten Ressourcen an unsichere Origins weitergibt.

- [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)
  - : Die Beziehung der verlinkten URL als durch Leerzeichen getrennte Linktypen.
- `target`

  - : Wo die verlinkte URL angezeigt werden soll, als Name für einen _Browsingkontext_ (ein Tab, Fenster oder {{HTMLElement("iframe")}}). Die folgenden Schlüsselwörter haben spezielle Bedeutungen, wo die URL geladen werden soll:

    - `_self`: Der aktuelle Browsingkontext. (Standard)
    - `_blank`: Normalerweise ein neuer Tab, aber Benutzer können Browser so konfigurieren, dass stattdessen ein neues Fenster geöffnet wird.
    - `_parent`: Der übergeordnete Browsingkontext des aktuellen. Wenn kein übergeordneter, verhält sich wie `_self`.
    - `_top`: Der oberste Browsingkontext. Das bedeutet der "höchste" Kontext, der ein Vorfahre des aktuellen ist. Wenn keine Vorfahren, verhält sich wie `_self`.
    - `_unfencedTop`: Ermöglicht eingebetteten [Fenced Frames](/de/docs/Web/API/Fenced_frame_API), den Top-Level-Frame zu navigieren (d.h. über die Wurzel des Fenced Frames hinaus, im Gegensatz zu anderen reservierten Zielen). Beachten Sie, dass die Navigation auch dann erfolgreich ist, wenn dies außerhalb eines Fenced Frame-Kontexts verwendet wird, es jedoch nicht als reserviertes Schlüsselwort fungiert.

    > [!NOTE]
    > Das Einstellen von `target="_blank"` auf `<a>`-Elementen bietet implizit dasselbe `rel`-Verhalten wie das Setzen von [`rel="noopener"`](/de/docs/Web/HTML/Reference/Attributes/rel/noopener), was `window.opener` nicht setzt.

- `type`
  - : Hinweis auf das Format der verlinkten URL mit einem {{Glossary("MIME_type", "MIME-Typ")}}. Keine integrierte Funktionalität.

### Veraltete Attribute

- `charset` {{Deprecated_Inline}}

  - : Hinweis auf die {{Glossary("character_encoding", "Zeichenkodierung")}} der verlinkten URL.

    > [!NOTE]
    > Dieses Attribut ist veraltet und **sollte nicht von Autoren verwendet werden**. Verwenden Sie stattdessen den HTTP {{HTTPHeader("Content-Type")}}-Header auf der verlinkten URL.

- `coords` {{Deprecated_Inline}}
  - : Verwendet mit [dem `shape`-Attribut](#shape). Eine durch Kommas getrennte Liste von Koordinaten.
- `name` {{Deprecated_Inline}}

  - : Wurde benötigt, um einen möglichen Zielbereich auf einer Seite zu definieren. In HTML 4.01 konnten `id` und `name` beide auf `<a>` verwendet werden, solange sie identische Werte hatten.

    > [!NOTE]
    > Verwenden Sie stattdessen das globale Attribut [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id).

- `rev` {{Deprecated_Inline}}
  - : Spezifizierte einen Rücklink; das Gegenteil vom [dem `rel`-Attribut](#rel). Veraltet, da sehr verwirrend.
- `shape` {{Deprecated_Inline}}

  - : Die Form des Linkbereichs in einer Bildkarte.

    > [!NOTE]
    > Verwenden Sie stattdessen das {{HTMLElement("area")}}-Element für Bildkarten.

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

Zum Glück ist dies einfach zu beheben und tatsächlich kürzer als die nicht zugängliche Version!

```html example-good
<p>Learn more <a href="/products">about our products</a>.</p>
```

##### Ergebnis

{{EmbedLiveSample('Strong link text')}}

Assistierende Software verfügt über Verknüpfungen, um alle Links auf einer Seite aufzulisten. Dennoch profitieren alle Benutzer von starkem Linktext – die Verknüpfung "alle Links auflisten" emuliert, wie sehende Benutzer schnell Seiten scannen.

### onclick-Ereignisse

Ankerelemente werden oft als gefälschte Schaltflächen missbraucht, indem ihr `href` auf `#` oder [`javascript:void(0)`](/de/docs/Web/URI/Reference/Schemes/javascript) gesetzt wird, um zu verhindern, dass die Seite aktualisiert wird, und dann auf ihre `click`-Ereignisse gehört wird.

Diese falschen `href`-Werte führen zu unerwartetem Verhalten beim Kopieren/Ziehen von Links, Öffnen von Links in einem neuen Tab/Fenster, Lesezeichen setzen oder wenn JavaScript geladen wird, Fehler auftritt oder deaktiviert ist. Sie übermitteln auch falsche Semantik an unterstützende Technologien, wie Screenreader.

Verwenden Sie stattdessen ein {{HTMLElement("button")}}. Im Allgemeinen **sollten Sie nur einen Hyperlink für die Navigation zu einer echten URL verwenden**.

### Externe Links und Links zu nicht-HTML-Ressourcen

Links, die in einem neuen Tab/Fenster über `target="_blank"` geöffnet werden, oder Links, die auf eine Download-Datei verweisen, sollten anzeigen, was passiert, wenn dem Link gefolgt wird.

Personen mit Sehbehinderungen, die mit Hilfe von Screenreader-Technologie navigieren, oder mit kognitiven Beeinträchtigungen können verwirrt sein, wenn ein neuer Tab, ein Fenster oder eine Anwendung unerwartet geöffnet wird. Ältere Screenreader-Software könnte das Verhalten nicht einmal ankündigen.

#### Link, der einen neuen Tab/ein neues Fenster öffnet

```html
<a target="_blank" href="https://www.wikipedia.org">
  Wikipedia (opens in new tab)
</a>
```

##### Ergebnis

{{EmbedLiveSample('Link that opens a new tab/window')}}

#### Link zu einer nicht-HTML-Ressource

Wenn ein Symbol verwendet wird, um das Linkverhalten anzuzeigen, stellen Sie sicher, dass es ein [`alt`-Attribut](/de/docs/Web/HTML/Reference/Elements/img#alt) hat, um seinen Zweck zu beschreiben. Falls das Symbol fehlt, wird der Inhalt des `alt`-Attributs weiterhin das Linkverhalten übermitteln.

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

- [WebAIM: Links und Hypertext - Hypertext-Links](https://webaim.org/techniques/hypertext/hypertext_links)
- [MDN / Verständnis von WCAG, Leitlinie 3.2](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
- [G200: Öffnen neuer Fenster und Tabs aus einem Link nur bei Bedarf](https://www.w3.org/TR/WCAG20-TECHS/G200.html)
- [G201: Den Nutzern eine Vorwarnung geben, wenn ein neues Fenster geöffnet wird](https://www.w3.org/TR/WCAG20-TECHS/G201.html)

### Skip-Links

Ein **Skip-Link** ist ein Link, der so früh wie möglich im {{HTMLElement("body")}}-Inhalt platziert wird und auf den Anfang des Hauptinhalts der Seite verweist. Normalerweise wird ein Skip-Link durch CSS versteckt, bis er fokussiert wird.

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

Skip-Links ermöglichen es Tastaturnutzern, Inhalte zu überspringen, die auf mehreren Seiten wiederholt werden, wie beispielsweise die Header-Navigation.

Skip-Links sind besonders nützlich für Personen, die mit Hilfe unterstützender Technologie wie Schaltersteuerung, Sprachbefehl oder Mundsticks/Kopfstäben navigieren, da das Bewegen durch sich wiederholende Links mühsam sein kann.

- [WebAIM: "Skip Navigation"-Links](https://webaim.org/techniques/skipnav/)
- [Anleitung: Verwenden von Skip-Navigationslinks](https://www.a11yproject.com/posts/skip-nav-links/)
- [MDN / Verständnis von WCAG, Leitlinie 2.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.4_%e2%80%94_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Verständnis des Erfolgskriteriums 2.4.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)

### Größe und Nähe

#### Größe

Interaktive Elemente, wie Links, sollten einen ausreichend großen Bereich bereitstellen, damit sie leicht aktiviert werden können. Dies hilft einer Vielzahl von Menschen, einschließlich derjenigen mit motorischen Steuerungsproblemen und derjenigen, die ungenaue Eingaben wie einen Touchscreen verwenden. Eine Mindestgröße von 44×44 [CSS-Pixel] (https://www.w3.org/TR/WCAG21/#dfn-css-pixels) wird empfohlen.

Texteingabe-Links in Prosa sind von dieser Anforderung ausgenommen, aber es ist trotzdem eine gute Idee sicherzustellen, dass genug Text verlinkt ist, um leicht aktiviert zu werden.

- [Verständnis des Erfolgskriteriums 2.5.5: Zielgröße](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Zielgröße und 2.5.5](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Schnelltest: Große Berührungsziele](https://www.a11yproject.com/posts/large-touch-targets/)

#### Nähe

Interaktive Elemente, wie Links, die in enger visueller Nähe platziert sind, sollten Platz dazwischen haben. Abstände helfen Menschen mit motorischen Steuerproblemen, die sonst möglicherweise versehentlich das falsche interaktive Element aktivieren.

Abstände können mit CSS-Eigenschaften wie {{CSSxRef("margin")}} erstellt werden.

- [Handzittern und das große-Schaltfläche-Problem](https://axesslab.com/hand-tremors/)

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

Um Links zu erstellen, die im E-Mail-Programm des Benutzers geöffnet werden, um eine neue Nachricht zu senden, verwenden Sie das `mailto:`-Schema:

```html
<a href="mailto:nowhere@mozilla.org">Send email to nowhere</a>
```

#### Ergebnis

{{EmbedLiveSample('Linking to an email address')}}

Für Details zu `mailto:`-URLs, wie das Hinzufügen eines Betreffs oder einer Nachricht, siehe [E-Mail-Links](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links#email_links) oder {{RFC(6068)}}.

### Verlinkung zu Telefonnummern

```html
<a href="tel:+49.157.0156">+49 157 0156</a>
<a href="tel:+1(800)555-0123">(800) 555-0123</a>
```

#### Ergebnis

{{EmbedLiveSample('Linking to telephone numbers')}}

Das Verhalten von `tel:`-Links variiert je nach Gerätefähigkeiten:

- Mobiltelefone wählen automatisch die Nummer.
- Die meisten Betriebssysteme verfügen über Programme, die Anrufe tätigen können, wie Skype oder FaceTime.
- Websites können Anrufe mit [`registerProtocolHandler`](/de/docs/Web/API/Navigator/registerProtocolHandler) tätigen, wie `web.skype.com`.
- Andere Verhaltensweisen umfassen das Speichern der Nummer in Kontakten oder das Senden der Nummer an ein anderes Gerät.

Siehe {{RFC(3966)}} für Syntax, zusätzliche Funktionen und weitere Details zum `tel:`-URL-Schema.

### Verwendung des Download-Attributs zur Speicherung eines `<canvas>` als PNG

Um die Inhalte eines {{HTMLElement("canvas")}}-Elements als Bild zu speichern, können Sie einen Link erstellen, bei dem das `href` die Canvas-Daten als `data:`-URL ist, die mit JavaScript erstellt wurde, und das `download`-Attribut den Dateinamen für die heruntergeladene PNG-Datei bereitstellt:

#### Beispiel für eine Mal-App mit Speicherlink

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

## Sicherheit und Privatsphäre

`<a>`-Elemente können Konsequenzen für die Sicherheit und Privatsphäre der Benutzer haben. Siehe [`Referer`-Header: Datenschutz- und Sicherheitsbedenken](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns) für Informationen.

Die Verwendung von `target="_blank"` ohne [`rel="noreferrer"`](/de/docs/Web/HTML/Reference/Attributes/rel/noreferrer) und [`rel="noopener"`](/de/docs/Web/HTML/Reference/Attributes/rel/noopener) macht die Website anfällig für Ausbeutungsangriffe der [`window.opener`](/de/docs/Web/API/Window/opener)-API, obwohl in neueren Browserversionen das Einstellen von `target="_blank"` implizit denselben Schutz bietet wie das Einstellen von `rel="noopener"`. Siehe [Browser-Kompatibilität](#browser-kompatibilität) für Details.

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
          >Fließender Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
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
        >, außer dass kein Nachkomme
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#interactive_content"
          >interaktiver Inhalt</a
        > oder ein
        <code>&lt;a&gt;</code>-Element sein darf und kein Nachkomme ein
        <a
          href="/de/docs/Web/HTML/Reference/Global_attributes/tabindex"
          >tabindex</a
        >-Attribut haben darf.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Start- als auch der Endtag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >fließenden Inhalt</a
        > akzeptiert, aber keine anderen <code>&lt;a&gt;</code>-Elemente.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/link_role"><code>link</code></a> wenn ein <code>href</code>-Attribut vorhanden ist, andernfalls
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role"><code>generic</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>
        <p>Wenn ein <code>href</code>-Attribut vorhanden ist:</p>
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
          <li>any</li>
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
- {{CSSxRef(":link")}} ist eine CSS-Pseudoklasse, die `<a>`-Elemente mit URL im `href`-Attribut angibt, die vom Benutzer noch nicht besucht wurden.
- {{CSSxRef(":visited")}} ist eine CSS-Pseudoklasse, die `<a>`-Elemente mit URL im `href`-Attribut angibt, die der Benutzer in der Vergangenheit besucht hat.
- {{CSSxRef(":any-link")}} ist eine CSS-Pseudoklasse, die `<a>`-Elemente mit `href`-Attribut angibt.
- [Textfragmente](/de/docs/Web/URI/Reference/Fragment/Text_fragments) sind Benutzersoftware-Anweisungen, die URLs hinzugefügt werden, und es Inhaltsautoren ermöglichen, auf bestimmte Texte auf einer Seite zu verlinken, ohne dass IDs erforderlich sind.
