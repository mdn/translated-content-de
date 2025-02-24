---
title: "<a>: Das Anker-Element"
slug: Web/HTML/Element/a
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

Das **`<a>`** [HTML](/de/docs/Web/HTML)-Element (oder _Anker_-Element) erstellt mit [seinem `href`-Attribut](#href) einen Hyperlink zu Webseiten, Dateien, E-Mail-Adressen, Positionen auf derselben Seite oder allem anderen, was eine URL adressieren kann.

Der Inhalt innerhalb jedes `<a>` sollte das Ziel des Links anzeigen. Wenn das `href`-Attribut vorhanden ist, wird durch Drücken der Eingabetaste, während das `<a>`-Element fokussiert ist, dieses aktiviert.

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

Zu den Attributen dieses Elements gehören die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `attributionsrc` {{experimental_inline}}

  - : Gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header sendet. Serverseitig wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}}-Headers in der Antwort auszulösen, um eine [navigationsbasierte Zuordnungsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#navigation-based_attribution_sources) zu registrieren.

    Der Browser speichert die Quelldaten, die mit der navigationsbasierten Attributionsquelle verbunden sind (wie im {{httpheader("Attribution-Reporting-Register-Source")}}-Header der Antwort angegeben), wenn der Benutzer auf den Link klickt. Weitere Einzelheiten finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

    Es gibt zwei Versionen dieses Attributs, die Sie festlegen können:

    - Boolean, d.h. nur der `attributionsrc`-Name. Dies gibt an, dass Sie möchten, dass der {{httpheader("Attribution-Reporting-Eligible")}}-Header an denselben Server gesendet wird, auf den das `href`-Attribut verweist. Dies ist in Ordnung, wenn Sie die Registrierung der Attributionsquelle auf demselben Server durchführen.
    - Wert, der eine oder mehrere URLs enthält, zum Beispiel:

      ```html
      attributionsrc="https://a.example/register-source
      https://b.example/register-source"
      ```

      Dies ist nützlich in Fällen, in denen die angeforderte Ressource nicht auf einem von Ihnen kontrollierten Server liegt oder Sie einfach die Registrierung der Attributionsquelle auf einem anderen Server verwalten möchten. In diesem Fall können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcenanforderung erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header zusätzlich zum Ursprungsort der Ressource an die im `attributionsrc` angegebenen URL(s) gesendet. Diese URLs können dann mit dem {{httpheader("Attribution-Reporting-Register-Source")}} antworten, um die Registrierung abzuschließen.

      > [!NOTE]
      > Die Angabe mehrerer URLs bedeutet, dass mehrere Attributionsquellen bei derselben Funktion registriert werden können. Sie könnten zum Beispiel unterschiedliche Kampagnen haben, deren Erfolg Sie messen möchten, was das Generieren verschiedener Berichte über unterschiedliche Daten erfordert.

    `<a>`-Elemente können nicht als Attributionstrigger verwendet werden, nur als Quellen.

- `download`

  - : Veranlasst den Browser, die verlinkte URL als Download zu behandeln. Kann mit oder ohne einen `filename`-Wert verwendet werden:

    - Ohne einen Wert wird der Browser einen Dateinamen/Erweiterung vorschlagen, die aus verschiedenen Quellen generiert werden:

      - Der {{HTTPHeader("Content-Disposition")}} HTTP-Header
      - Der letzte Segment im URL-[Pfad](/de/docs/Web/API/URL/pathname)
      - Der {{Glossary("MIME_type", "Medientyp")}} (aus dem {{HTTPHeader("Content-Type")}}-Header, dem Anfang einer [`data:` URL](/de/docs/Web/URI/Reference/Schemes/data) oder [`Blob.type`](/de/docs/Web/API/Blob/type) für eine [`blob:` URL](/de/docs/Web/API/URL/createObjectURL_static))

    - `filename`: Definieren eines Werts schlägt ihn als Dateinamen vor. `/` und `\`-Zeichen werden in Unterstriche (`_`) umgewandelt. Dateisysteme können andere Zeichen in Dateinamen verbieten, daher werden Browser den vorgeschlagenen Namen bei Bedarf anpassen.

    > [!NOTE]
    >
    > - `download` funktioniert nur für [gleichartige Herkunfts-URLs](/de/docs/Web/Security/Same-origin_policy) oder die `blob:`- und `data:`-Schemata.
    > - Wie Browser Downloads behandeln, variiert je nach Browser, Benutzereinstellungen und anderen Faktoren. Der Benutzer kann aufgefordert werden, bevor ein Download beginnt, oder die Datei wird möglicherweise automatisch gespeichert oder automatisch geöffnet, entweder in einer externen Anwendung oder im Browser selbst.
    > - Wenn der `Content-Disposition`-Header andere Informationen enthält als das `download`-Attribut, kann sich das resultierende Verhalten unterscheiden:
    >
    >   - Wenn der Header einen `filename` angibt, hat dieser Vorrang vor einem Dateinamen, der im `download`-Attribut angegeben ist.
    >   - Wenn der Header eine Disposition von `inline` angibt, priorisieren Chrome und Firefox das Attribut und behandeln es als Download. Alte Firefox-Versionen (vor 82) priorisieren den Header und zeigen den Inhalt inline an.

- `href`

  - : Die URL, auf die der Hyperlink zeigt. Links sind nicht auf HTTP-basierte URLs beschränkt — sie können jedes von Browsern unterstützte URL-Schema verwenden:

    - Telefonnummern mit `tel:` URLs
    - E-Mail-Adressen mit `mailto:` URLs
    - SMS-Nachrichten mit `sms:` URLs
    - Ausführbarer Code mit [`javascript:` URLs](/de/docs/Web/URI/Reference/Schemes/javascript)
    - Während Webbrowser möglicherweise andere URL-Schemata nicht unterstützen, können Websites dies mit [`registerProtocolHandler()`](/de/docs/Web/API/Navigator/registerProtocolHandler)

    Darüber hinaus können andere URL-Features spezielle Teile der Ressource lokalisieren, einschließlich:

    - Abschnitte einer Seite mit Dokumentfragmenten
    - Bestimmte Textabschnitte mit [Textfragmenten](/de/docs/Web/URI/Reference/Fragment/Text_fragments)
    - Teile von Mediendateien mit Medienfragmenten

- `hreflang`
  - : Gibt einen Hinweis auf die menschliche Sprache der verlinkten URL. Keine eingebaute Funktionalität. Erlaubte Werte sind die gleichen wie [das globale `lang`-Attribut](/de/docs/Web/HTML/Global_attributes/lang).
- `ping`
  - : Eine durch Leerzeichen getrennte Liste von URLs. Wenn der Link verfolgt wird, sendet der Browser {{HTTPMethod("POST")}}-Anfragen mit dem Körper `PING` an die URLs. Typischerweise zum Tracking.
- `referrerpolicy`

  - : Wie viel des [Referrers](/de/docs/Web/HTTP/Headers/Referer) beim Folgen des Links gesendet werden soll.

    - `no-referrer`: Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}}-Header wird nicht an {{Glossary("origin", "Ursprünge")}} ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`: Der gesendete Referrer wird auf den Ursprung der verweisenden Seite beschränkt: sein [Schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`: Der Referrer, der an andere Ursprünge gesendet wird, wird auf das Schema, den Host und den Port beschränkt. Navigationen im selben Ursprung enthalten weiterhin den Pfad.
    - `same-origin`: Ein Referrer wird für {{Glossary("Same-origin_policy", "gleichen Ursprung")}} gesendet, aber Cross-Origin-Anfragen enthalten keine Referrer-Informationen.
    - `strict-origin`: Sendet den Ursprung des Dokuments nur als Referrer, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), aber nicht zu einem weniger sicheren Ziel (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard): Sendet eine vollständige URL, wenn eine gleichartige Anforderung durchgeführt wird, sendet nur den Ursprung, wenn das Protokollsicherheitsniveau gleich bleibt (HTTPS→HTTPS), und sendet keinen Header zu einem weniger sicheren Ziel (HTTPS→HTTP).
    - `unsafe-url`: Der Referrer enthält den Ursprung _und_ den Pfad (aber nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder [Benutzername](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge weitergibt.

- [`rel`](/de/docs/Web/HTML/Attributes/rel)
  - : Die Beziehung der verlinkten URL als durch Leerzeichen getrennte Link-Typen.
- `target`

  - : Wo die verlinkte URL angezeigt werden soll, als Name für einen _Browsingskontext_ (ein Tab, ein Fenster oder ein {{HTMLElement("iframe")}}). Die folgenden Schlüsselwörter haben besondere Bedeutungen, wo die URL geladen werden soll:

    - `_self`: Der aktuelle Browsingskontext. (Standard)
    - `_blank`: Üblicherweise ein neuer Tab, aber Benutzer können Browser so konfigurieren, dass ein neues Fenster geöffnet wird.
    - `_parent`: Der übergeordnete Browsingskontext des aktuellen. Wenn kein übergeordneter vorhanden ist, verhält sich wie `_self`.
    - `_top`: Der oberste Browsingskontext. Genauer gesagt, bedeutet dies den "höchsten" Kontext, der ein Vorfahr des aktuellen ist. Wenn keine Vorfahren vorhanden sind, verhält es sich wie `_self`.
    - `_unfencedTop`: Ermöglicht eingebetteten [begrenzten Frames](/de/docs/Web/API/Fenced_frame_API) das Navigieren im Frame auf oberster Ebene (d.h. über das Wurzelverzeichnis des begrenzten Frames hinaus, im Gegensatz zu anderen reservierten Zielen). Beachten Sie, dass die Navigation weiterhin erfolgreich ist, wenn dies außerhalb eines begrenzten Frame-Kontexts verwendet wird, aber es wird nicht wie ein reserviertes Schlüsselwort agieren.

    > [!NOTE]
    > Das Setzen von `target="_blank"` auf `<a>`-Elementen bietet implizit dasselbe `rel`-Verhalten wie das Setzen von [`rel="noopener"`](/de/docs/Web/HTML/Attributes/rel/noopener), das `window.opener` nicht setzt.

- `type`
  - : Gibt einen Hinweis auf das Format der verlinkten URL mit einem {{Glossary("MIME_type", "MIME-Typ")}}. Keine eingebaute Funktionalität.

### Veraltete Attribute

- `charset` {{Deprecated_Inline}}

  - : Gab einen Hinweis auf die {{Glossary("character_encoding", "Zeichenkodierung")}} der verlinkten URL.

    > [!NOTE]
    > Dieses Attribut ist veraltet und **sollte von Autoren nicht verwendet werden**. Verwenden Sie den HTTP {{HTTPHeader("Content-Type")}}-Header auf der verlinkten URL.

- `coords` {{Deprecated_Inline}}
  - : Wurde mit [dem `shape`-Attribut](#shape) verwendet. Eine durch Kommas getrennte Liste von Koordinaten.
- `name` {{Deprecated_Inline}}

  - : War erforderlich, um einen möglichen Zielort auf einer Seite zu definieren. In HTML 4.01 konnten `id` und `name` beide auf `<a>` verwendet werden, solange sie identische Werte hatten.

    > [!NOTE]
    > Verwenden Sie stattdessen das globale Attribut [`id`](/de/docs/Web/HTML/Global_attributes/id).

- `rev` {{Deprecated_Inline}}
  - : Spezifierte einen Rücklink; das Gegenteil von [dem `rel`-Attribut](#rel). Aus Gründen der Verwirrung veraltet.
- `shape` {{Deprecated_Inline}}

  - : Die Form der Region des Hyperlinks in einer Image Map.

    > [!NOTE]
    > Verwenden Sie stattdessen das {{HTMLElement("area")}}-Element für Image Maps.

## Barrierefreiheit

### Starker Linktext

**Der Inhalt innerhalb eines Links sollte anzeigen, wohin der Link führt**, sogar aus dem Kontext heraus.

#### Unzugänglicher, schwacher Linktext

Ein bedauerlich häufiger Fehler ist, nur die Wörter "hier klicken" oder "hier" zu verlinken:

```html example-bad
<p>Learn more about our products <a href="/products">here</a>.</p>
```

##### Ergebnis

{{EmbedLiveSample('Inaccessible, weak link text')}}

#### Starker Linktext

Glücklicherweise ist dies einfach zu beheben und es ist tatsächlich kürzer als die unzugängliche Version!

```html example-good
<p>Learn more <a href="/products">about our products</a>.</p>
```

##### Ergebnis

{{EmbedLiveSample('Strong link text')}}

Assistenzsoftware hat Abkürzungen, um alle Links auf einer Seite aufzulisten. Starker Linktext kommt jedoch allen Benutzern zugute — die Abkürzung "alle Links auflisten" emuliert, wie sehende Benutzer schnell Seiten durchsuchen.

### onclick-Ereignisse

Ankerelemente werden häufig als gefälschte Schaltflächen missbraucht, indem ihr `href` auf `#` oder [`javascript:void(0)`](/de/docs/Web/URI/Reference/Schemes/javascript) gesetzt wird, um zu verhindern, dass die Seite aktualisiert wird, und dann auf ihre `click`-Ereignisse hören.

Diese falschen `href`-Werte verursachen unerwartetes Verhalten beim Kopieren/Draggen von Links, Öffnen von Links in einem neuen Tab/Fenster, Lesezeichen setzen oder wenn JavaScript geladen wird, Fehler oder deaktiviert ist. Sie vermitteln auch falsche Semantik an unterstützende Technologien, wie Screenreader.

Verwenden Sie stattdessen ein {{HTMLElement("button")}}. Im Allgemeinen **sollten Sie nur einen Hyperlink zur Navigation zu einer echten URL verwenden**.

### Externe Links und Links zu nicht-HTML-Ressourcen

Links, die in einem neuen Tab/Fenster über `target="_blank"` geöffnet werden, oder Links, die auf eine herunterzuladende Datei verweisen, sollten angeben, was passiert, wenn der Link gefolgt wird.

Menschen mit Sehbehinderungen, die mit Hilfe von Screenreading-Technologie navigieren, oder mit kognitiven Einschränkungen könnten verwirrt sein, wenn unerwartet ein neuer Tab, ein Fenster oder eine Anwendung geöffnet wird. Ältere Screenreader-Software gibt möglicherweise nicht einmal das Verhalten bekannt.

#### Link, der ein neues Tab/Fenster öffnet

```html
<a target="_blank" href="https://www.wikipedia.org">
  Wikipedia (opens in new tab)
</a>
```

##### Ergebnis

{{EmbedLiveSample('Link that opens a new tab/window')}}

#### Link zu einer nicht-HTML-Ressource

Wenn ein Symbol verwendet wird, um das Linkverhalten anzuzeigen, stellen Sie sicher, dass es ein [`alt`-Attribut](/de/docs/Web/HTML/Element/img#alt) hat, um seinen Zweck zu beschreiben. Falls das Symbol fehlt, wird der Inhalt des `alt`-Attributs das Verhalten des Links dennoch vermitteln.

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
- [MDN / WCAG verstehen, Leitfaden 3.2](/de/docs/Web/Accessibility/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
- [G200: Öffnen von neuen Fenstern und Tabs aus einem Link nur wenn nötig](https://www.w3.org/TR/WCAG20-TECHS/G200.html)
- [G201: Den Benutzern eine Vorwarnung geben, wenn ein neues Fenster geöffnet wird](https://www.w3.org/TR/WCAG20-TECHS/G201.html)

### Navigationslinks überspringen

Ein **Navigationslink überspringen** ist ein so früh wie möglich im {{HTMLElement("body")}} platzierter Link, der auf den Beginn des Hauptinhalts der Seite zeigt. In der Regel versteckt CSS einen Navigationslink bis zu seiner Fokussierung außerhalb des Bildschirms.

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

Navigationslinks lassen Tastaturbenutzer wiederholte Inhalte auf mehreren Seiten, wie Header-Navigation, überspringen.

Navigationslinks sind besonders nützlich für Menschen, die mit der Unterstützung von Assistenztechnologien wie Schaltersteuerung, Sprachbefehlen oder Mundstücken/Kopfstäben navigieren, bei denen das Durchgehen von wiederholten Links mühsam sein kann.

- [WebAIM: "Skip Navigation"-Links](https://webaim.org/techniques/skipnav/)
- [Anleitung: Verwendung von Skip-Navigation-Links](https://www.a11yproject.com/posts/skip-nav-links/)
- [MDN / WCAG verstehen, Leitfaden 2.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.4_%e2%80%94_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Verständnis des Erfolgskriteriums 2.4.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)

### Größe und Nähe

#### Größe

Interaktive Elemente, wie Links, sollten eine ausreichend große Fläche bieten, damit es einfach ist, sie zu aktivieren. Dies hilft einer Vielzahl von Menschen, einschließlich solcher mit motorischen Problemen und solchen, die ungenaue Eingaben wie einen Touchscreen verwenden. Eine Mindestgröße von 44×44 [CSS-Pixel] (https://www.w3.org/TR/WCAG21/#dfn-css-pixels) wird empfohlen.

Nur-Text-Links in Prosa-Inhalten sind von dieser Anforderung ausgenommen, aber es ist dennoch ratsam, sicherzustellen, dass genügend Text verlinkt ist, um ihn leicht aktivieren zu können.

- [Verständnis des Erfolgskriteriums 2.5.5: Zielgröße](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Zielgröße und 2.5.5](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Schnelltest: Große Berührungsziele](https://www.a11yproject.com/posts/large-touch-targets/)

#### Nähe

Interaktive Elemente, wie Links, die in enger visueller Nähe platziert sind, sollten einen Abstand dazwischen haben. Der Abstand hilft Menschen mit motorischen Problemen, die ansonsten versehentlich das falsche interaktive Element aktivieren könnten.

Abstände können mittels CSS-Eigenschaften wie {{CSSxRef("margin")}} erstellt werden.

- [Zittern der Hände und das Riesen-Button-Problem](https://axesslab.com/hand-tremors/)

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

Um Links zu erstellen, die sich im E-Mail-Programm des Benutzers öffnen, um eine neue Nachricht zu schreiben, verwenden Sie das `mailto:`-Schema:

```html
<a href="mailto:nowhere@mozilla.org">Send email to nowhere</a>
```

#### Ergebnis

{{EmbedLiveSample('Linking to an email address')}}

Für Details zu `mailto:`-URLs, wie etwa das Einschließen eines Betreffs oder Körpers, siehe [E-Mail-Links](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links#email_links) oder {{RFC(6068)}}.

### Verlinkung zu Telefonnummern

```html
<a href="tel:+49.157.0156">+49 157 0156</a>
<a href="tel:+1(800)555-0123">(800) 555-0123</a>
```

#### Ergebnis

{{EmbedLiveSample('Linking to telephone numbers')}}

`tel:` Linkverhalten variiert mit den Fähigkeiten des Geräts:

- Handgeräte rufen die Nummer automatisch an.
- Die meisten Betriebssysteme haben Programme, die Anrufe tätigen können, wie Skype oder FaceTime.
- Websites können Telefonanrufe mit [`registerProtocolHandler`](/de/docs/Web/API/Navigator/registerProtocolHandler), wie `web.skype.com` machen.
- Andere Verhaltensweisen umfassen das Speichern der Nummer in Kontakte oder das Senden der Nummer an ein anderes Gerät.

Siehe {{RFC(3966)}} für Syntax, zusätzliche Funktionen und andere Details über das `tel:`-URL-Schema.

### Verwenden des Download-Attributs, um ein `<canvas>` als PNG zu speichern

Um den Inhalt eines {{HTMLElement("canvas")}}-Elements als Bild zu speichern, können Sie einen Link erstellen, bei dem das `href` die Canvas-Daten als `data:`-URL ist, die mit JavaScript erstellt wird, und das `download`-Attribut den Dateinamen für die heruntergeladene PNG-Datei liefert:

#### Beispiel-Malprogramm mit Speicherlink

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

`<a>`-Elemente können Konsequenzen für die Sicherheit und Privatsphäre der Benutzer haben. Siehe [`Referer`-Header: Privatsphäre- und Sicherheitsbedenken](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns) für Informationen.

Das Verwenden von `target="_blank"` ohne [`rel="noreferrer"`](/de/docs/Web/HTML/Attributes/rel/noreferrer) und [`rel="noopener"`](/de/docs/Web/HTML/Attributes/rel/noopener) macht die Website anfällig für Angriffe auf die [`window.opener`](/de/docs/Web/API/Window/opener) API, obwohl in neueren Browserversionen das Setzen von `target="_blank"` implizit denselben Schutz bietet wie das Setzen von `rel="noopener"`. Siehe [Browser-Kompatibilität](#browser-kompatibilität) für Details.

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
          >Formulierung</a
        >,
        <a
          href="/de/docs/Web/HTML/Content_categories#interactive_content"
          >interaktiver Inhalt</a
        >, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a
          href="/de/docs/Web/HTML/Content_categories#transparent_content_model"
          >Transparent</a
        >, außer dass kein Nachfolgendes
        <a
          href="/de/docs/Web/HTML/Content_categories#interactive_content"
          >interaktiver Inhalt</a
        > oder ein
        <code>&lt;a&gt;</code>-Element sein darf, und kein Nachfolgendes darf ein festgelegtes
        <a
          href="/de/docs/Web/HTML/Global_attributes/tabindex"
          >tabindex</a
        >-Attribut haben.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Weglassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flussinhalt</a
        > akzeptiert, aber keine anderen <code>&lt;a&gt;</code>-Elemente.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/link_role"><code>link</code></a> wenn das <code>href</code>-Attribut vorhanden ist, ansonsten
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/generic_role"><code>generic</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>
        <p>Wenn das <code>href</code>-Attribut vorhanden ist:</p>
        <ul>
          <li><a href="/de/docs/Web/Accessibility/ARIA/Roles/button_role"><code>button</code></a></li>
          <li><a href="/de/docs/Web/Accessibility/ARIA/Roles/checkbox_role"><code>checkbox</code></a></li>
          <li><a href="/de/docs/Web/Accessibility/ARIA/Roles/menuitem_role"><code>menuitem</code></a></li>
          <li><a href="/de/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role"><code>menuitemcheckbox</code></a></li>
          <li><a href="/de/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role"><code>menuitemradio</code></a></li>
          <li><a href="/de/docs/Web/Accessibility/ARIA/Roles/option_role"><code>option</code></a></li>
          <li><a href="/de/docs/Web/Accessibility/ARIA/Roles/radio_role"><code>radio</code></a></li>
          <li><a href="/de/docs/Web/Accessibility/ARIA/Roles/switch_role"><code>switch</code></a></li>
          <li><a href="/de/docs/Web/Accessibility/ARIA/Roles/tab_role"><code>tab</code></a></li>
          <li><a href="/de/docs/Web/Accessibility/ARIA/Roles/treeitem_role"><code>treeitem</code></a></li>
        </ul>
        <p>Wenn das <code>href</code>-Attribut nicht vorhanden ist:</p>
        <ul>
          <li>jedes</li>
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
- {{CSSxRef(":link")}} ist eine CSS-Pseudoklasse, die `<a>`-Elemente mit einer URL im `href`-Attribut, die vom Benutzer noch nicht besucht wurde, übereinstimmt.
- {{CSSxRef(":visited")}} ist eine CSS-Pseudoklasse, die `<a>`-Elemente mit einer URL im `href`-Attribut, die in der Vergangenheit vom Benutzer besucht wurde, übereinstimmt.
- {{CSSxRef(":any-link")}} ist eine CSS-Pseudoklasse, die `<a>`-Elemente mit einem `href`-Attribut übereinstimmt.
- [Textfragmente](/de/docs/Web/URI/Reference/Fragment/Text_fragments) sind Browseranweisungen, die URLs hinzugefügt werden, um Inhaltsautoren zu ermöglichen, auf spezifischen Text auf einer Seite zu verlinken, ohne dass IDs erforderlich sind.
