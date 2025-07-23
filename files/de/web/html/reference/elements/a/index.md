---
title: "<a>: Das Anker-Element"
slug: Web/HTML/Reference/Elements/a
l10n:
  sourceCommit: 44373c3805ba65db7542af75b664dc6fdce2aec0
---

Das **`<a>`**-[HTML](/de/docs/Web/HTML)-Element (oder _Anker_-Element) erstellt mit [seinem `href`-Attribut](#href) einen Hyperlink zu Webseiten, Dateien, E-Mail-Adressen, Positionen auf derselben Seite oder zu allem, was eine URL adressieren kann.

Der Inhalt innerhalb jedes `<a>`-Elements _sollte_ das Ziel des Links anzeigen. Wenn das `href`-Attribut vorhanden ist, aktiviert das Drücken der Eingabetaste, während das `<a>`-Element fokussiert ist, den Link.

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

    Der Browser speichert die mit der navigationsbasierten Attributionsquelle verbundenen Quelldaten (wie im {{httpheader("Attribution-Reporting-Register-Source")}}-Antwort-Header bereitgestellt), wenn der Benutzer auf den Link klickt. Siehe die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) für weitere Details.

    Es gibt zwei Versionen dieses Attributs, die Sie festlegen können:
    - Boolean, d.h. nur der `attributionsrc`-Name. Dies gibt an, dass Sie den {{httpheader("Attribution-Reporting-Eligible")}}-Header an denselben Server senden möchten, auf den das `href`-Attribut verweist. Dies ist in Ordnung, wenn Sie die Registrierung der Attributionsquelle auf demselben Server abwickeln.
    - Wert, der eine oder mehrere URLs enthält, zum Beispiel:

      ```html
      attributionsrc="https://a.example/register-source
      https://b.example/register-source"
      ```

      Dies ist nützlich in Fällen, in denen die angeforderte Ressource nicht auf einem Server liegt, den Sie kontrollieren, oder Sie einfach die Registrierung der Attributionsquelle auf einem anderen Server abwickeln möchten. In diesem Fall können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcenanforderung erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header zusätzlich zum Ursprungsserver der Ressource an die in `attributionsrc` angegebenen URL(s) gesendet. Diese URLs können dann mit dem {{httpheader("Attribution-Reporting-Register-Source")}} antworten, um die Registrierung abzuschließen.

      > [!NOTE]
      > Wenn mehrere URLs angegeben werden, können mehrere Attributionsquellen auf derselben Funktion registriert werden. Beispielsweise könnten Sie unterschiedliche Kampagnen haben, deren Erfolg Sie messen möchten, was das Erstellen unterschiedlicher Berichte zu verschiedenen Daten umfasst.

    `<a>`-Elemente können nicht als Attributionstrigger, sondern nur als Quellen verwendet werden.

- `download`
  - : Veranlasst den Browser, die verlinkte URL als Download zu behandeln. Kann mit oder ohne einen `filename`-Wert verwendet werden:
    - Ohne einen Wert schlägt der Browser einen Dateinamen/-erweiterung vor, der aus verschiedenen Quellen generiert wird:
      - Der {{HTTPHeader("Content-Disposition")}}-HTTP-Header
      - Das letzte Segment im URL-[Pfad](/de/docs/Web/API/URL/pathname)
      - Der {{Glossary("MIME_type", "Medientyp")}} (aus dem {{HTTPHeader("Content-Type")}}-Header, dem Anfang einer [`data:`-URL](/de/docs/Web/URI/Reference/Schemes/data) oder [`Blob.type`](/de/docs/Web/API/Blob/type) für eine [`blob:`-URL](/de/docs/Web/URI/Reference/Schemes/blob))

    - `filename`: Die Angabe eines Wertes schlägt diesen als Dateinamen vor. `/`- und `\`-Zeichen werden zu Unterstrichen (`_`) umgewandelt. Dateisysteme können andere Zeichen in Dateinamen verbieten, daher passen Browser den vorgeschlagenen Namen bei Bedarf an.

    > [!NOTE]
    >
    > - `download` funktioniert nur für [gleichherkunftsbasierte URLs](/de/docs/Web/Security/Same-origin_policy) oder die `blob:`- und `data:`-Schemas.
    > - Wie Browser Downloads behandeln, variiert je nach Browser, Benutzereinstellungen und anderen Faktoren. Der Benutzer wird möglicherweise aufgefordert, bevor ein Download gestartet wird, oder die Datei wird automatisch gespeichert oder sie wird möglicherweise automatisch geöffnet, entweder in einer externen Anwendung oder im Browser selbst.
    > - Wenn der `Content-Disposition`-Header andere Informationen als das `download`-Attribut enthält, kann sich das resultierende Verhalten unterscheiden:
    >   - Wenn der Header einen `filename` angibt, hat dieser Vorrang vor einem Dateinamen, der im `download`-Attribut festgelegt ist.
    >   - Wenn der Header eine Anordnung von `inline` angibt, priorisieren Chrome und Firefox das Attribut und behandeln es als Download. Alte Firefox-Versionen (vor Version 82) priorisieren den Header und zeigen den Inhalt inline an.

- `href`
  - : Die URL, auf die der Hyperlink verweist. Links sind nicht auf HTTP-basierte URLs beschränkt — sie können jedes von Browsern unterstützte URL-Schema verwenden:
    - Telefonnummern mit `tel:`-URLs
    - E-Mail-Adressen mit `mailto:`-URLs
    - SMS-Textnachrichten mit `sms:`-URLs
    - Ausführbarer Code mit [`javascript:`-URLs](/de/docs/Web/URI/Reference/Schemes/javascript)
    - Während Webbrowser andere URL-Schemata möglicherweise nicht unterstützen, können Websites dies mit [`registerProtocolHandler()`](/de/docs/Web/API/Navigator/registerProtocolHandler)

    Außerdem können andere URL-Funktionen bestimmte Teile der Ressource ansteuern, einschließlich:
    - Abschnitte einer Seite mit Dokumentfragmenten
    - Bestimmte Textteile mit [Textfragmenten](/de/docs/Web/URI/Reference/Fragment/Text_fragments)
    - Teile von Mediendateien mit Medienfragmenten

- `hreflang`
  - : Weist auf die menschliche Sprache der verlinkten URL hin. Keine eingebaute Funktionalität. Zulässige Werte sind die gleichen wie [das globale `lang`-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/lang).
- `ping`
  - : Eine durch Leerzeichen getrennte Liste von URLs. Wenn der Link gefolgt wird, sendet der Browser {{HTTPMethod("POST")}}-Anfragen mit dem Inhalt `PING` an die URLs. Typischerweise für Tracking.
- `referrerpolicy`
  - : Wie viel des [Referrers](/de/docs/Web/HTTP/Reference/Headers/Referer) beim Folgen des Links gesendet werden soll.
    - `no-referrer`: Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}}-Header wird nicht an {{Glossary("origin", "Origin")}}s ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`: Der gesendete Referrer wird auf den Origin der verweisenden Seite beschränkt: ihr [Schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`: Der an andere Origin gesendete Referrer wird auf das Schema, den Host und den Port beschränkt. Navigationen im selben Origin enthalten weiterhin den Pfad.
    - `same-origin`: Ein Referrer wird für {{Glossary("Same-origin_policy", "gleichherkunftsbasierte")}} Anfragen gesendet, aber beim Cross-Origin werden keine Referrer-Informationen gesendet.
    - `strict-origin`: Sendet nur den Origin des Dokuments als Referrer, wenn das Protokollsicherheitsniveau gleich bleibt (HTTPS→HTTPS), aber nicht an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard): Sendet eine vollständige URL bei einer gleichherkunftsbasierten Anfrage, sendet nur den Origin, wenn das Protokollsicherheitsniveau gleich bleibt (HTTPS→HTTPS), und sendet keinen Header an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `unsafe-url`: Der Referrer enthält den Origin _und_ den Pfad (aber nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), das [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder den [Benutzernamen](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Origins und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge preisgibt.

- [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)
  - : Die Beziehung zur verlinkten URL in Form von durch Leerzeichen getrennten Linktypen.
- `target`
  - : Wo die verlinkte URL angezeigt werden soll, als Name für einen _Browsing-Kontext_ (ein Tab, Fenster oder {{HTMLElement("iframe")}}). Die folgenden Schlüsselwörter haben spezielle Bedeutungen dafür, wo die URL geladen werden soll:
    - `_self`: Der aktuelle Browsing-Kontext. (Standard)
    - `_blank`: Normalerweise ein neuer Tab, aber Benutzer können Browser so konfigurieren, dass ein neues Fenster stattdessen geöffnet wird.
    - `_parent`: Der übergeordnete Browsing-Kontext des aktuellen. Wenn kein übergeordneter Kontext vorhanden ist, verhält es sich wie `_self`.
    - `_top`: Der oberste Browsing-Kontext. Konkret bedeutet das den "höchsten" Kontext, der ein Vorfahre des aktuellen ist. Wenn keine Vorfahren vorhanden sind, verhält es sich wie `_self`.
    - `_unfencedTop`: Ermöglicht eingebetteten [Fence-Frames](/de/docs/Web/API/Fenced_frame_API), den obersten Frame zu navigieren (d.h. über die Wurzel des Fence-Frames hinaus, im Gegensatz zu anderen reservierten Zielen). Beachten Sie, dass die Navigation weiterhin erfolgreich sein wird, wenn dies außerhalb eines Fence-Frame-Kontexts verwendet wird, jedoch nicht wie ein reserviertes Schlüsselwort handelt.

    > [!NOTE]
    > Das Setzen von `target="_blank"` auf `<a>`-Elementen impliziert das gleiche `rel`-Verhalten wie das Setzen von [`rel="noopener"`](/de/docs/Web/HTML/Reference/Attributes/rel/noopener), das nicht `window.opener` festlegt.

- `type`
  - : Hinweis auf das Format der verlinkten URL mit einem {{Glossary("MIME_type", "MIME-Typ")}}. Keine eingebaute Funktionalität.

### Veraltete Attribute

- `charset` {{Deprecated_Inline}}
  - : Hinweis auf die {{Glossary("character_encoding", "Zeichenkodierung")}} der verlinkten URL.

    > [!NOTE]
    > Dieses Attribut ist veraltet und **sollte von Autoren nicht verwendet werden**. Nutzen Sie den HTTP-{{HTTPHeader("Content-Type")}}-Header auf der verlinkten URL.

- `coords` {{Deprecated_Inline}}
  - : Verwendet mit [dem `shape`-Attribut](#shape). Eine kommagetrennte Liste von Koordinaten.
- `name` {{Deprecated_Inline}}
  - : War erforderlich, um einen möglichen Zielort auf einer Seite zu definieren. In HTML 4.01 konnten `id` und `name` beide auf `<a>` verwendet werden, solange sie identische Werte hatten.

    > [!NOTE]
    > Verwenden Sie stattdessen das globale Attribut [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id).

- `rev` {{Deprecated_Inline}}
  - : Gab einen Umkehrlink an; das Gegenteil des [Attributs `rel`](#rel). Veraltet, da es sehr verwirrend war.
- `shape` {{Deprecated_Inline}}
  - : Die Form des Hyperlinkbereichs in einer Bildkarte.

    > [!NOTE]
    > Verwenden Sie stattdessen das {{HTMLElement("area")}}-Element für Bildkarten.

## Barrierefreiheit

### Starker Linktext

**Der Inhalt innerhalb eines Links sollte anzeigen, wohin der Link führt**, auch aus dem Kontext heraus.

#### Nicht zugänglicher, schwacher Linktext

Ein leider häufiger Fehler ist, nur die Wörter "Hier klicken" oder "hier" zu verlinken:

```html example-bad
<p>Learn more about our products <a href="/products">here</a>.</p>
```

##### Ergebnis

{{EmbedLiveSample('Nicht zugänglicher, schwacher Linktext', '100%', '50')}}

#### Zugänglicher, starker Linktext

Glücklicherweise ist dies eine einfache Korrektur, und sie ist tatsächlich kürzer als die nicht zugängliche Version!

```html example-good
<p>Learn more <a href="/products">about our products</a>.</p>
```

##### Ergebnis

{{EmbedLiveSample('Zugänglicher, starker Linktext', '100%', '50')}}

Hilfssoftware bietet Abkürzungen, um alle Links auf einer Seite aufzulisten. Starker Linktext nützt jedoch allen Benutzern — die "Alle Links anzeigen"-Abkürzung emuliert, wie sehende Nutzer Seiten schnell überfliegen.

### onclick-Ereignisse

Anker-Elemente werden oft als gefälschte Schaltflächen missbraucht, indem ihr `href` auf `#` oder [`javascript:void(0)`](/de/docs/Web/URI/Reference/Schemes/javascript) gesetzt wird, um zu verhindern, dass die Seite aktualisiert wird, und dann deren `click`-Ereignisse überwacht werden.

Diese fehlerhaften `href`-Werte verursachen unerwartetes Verhalten beim Kopieren/Verschieben von Links, beim Öffnen von Links in einem neuen Tab/Fenster, beim Hinzufügen zu den Lesezeichen oder wenn JavaScript geladen wird, Fehler auftreten oder deaktiviert ist. Sie vermitteln auch falsche Semantik an unterstützende Technologien wie Bildschirmleseprogramme.

Verwenden Sie stattdessen ein {{HTMLElement("button")}}. Im Allgemeinen **sollten Sie nur einen Hyperlink für die Navigation zu einer echten URL verwenden**.

### Externe Links und Verlinkung zu nicht-HTML-Ressourcen

Links, die über `target="_blank"` in einem neuen Tab/Fenster öffnen, oder Links, die auf eine Download-Datei verweisen, sollten angeben, was passiert, wenn der Link gefolgt wird.

Menschen mit Sehbehinderungen, die Technologie zum Vorlesen von Bildschirmen verwenden oder kognitive Bedenken haben, könnten verwirrt sein, wenn ein neuer Tab, ein neues Fenster oder eine Anwendung unerwartet geöffnet wird. Ältere Bildschirmleseprogramme können dieses Verhalten möglicherweise nicht einmal ankündigen.

#### Link, der einen neuen Tab/ein neues Fenster öffnet

```html
<a target="_blank" href="https://www.wikipedia.org">
  Wikipedia (opens in new tab)
</a>
```

##### Ergebnis

{{EmbedLiveSample('Link, der einen neuen Tab/ein neues Fenster öffnet')}}

#### Link zu einer nicht-HTML-Ressource

Wenn ein Symbol verwendet wird, um das Linkverhalten anzuzeigen, stellen Sie sicher, dass es ein [`alt`-Attribut](/de/docs/Web/HTML/Reference/Elements/img#alt) hat, um seinen Zweck zu beschreiben. Falls das Symbol fehlt, wird der Inhalt des `alt`-Attributs das Verhalten des Links dennoch vermitteln.

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
- [MDN / Verständnis von WCAG, Richtlinie 3.2](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
- [G200: Öffnen neuer Fenster und Tabs aus einem Link nur bei Notwendigkeit](https://www.w3.org/TR/WCAG20-TECHS/G200.html)
- [G201: Nutzern eine frühzeitige Warnung geben, wenn ein neues Fenster geöffnet wird](https://www.w3.org/TR/WCAG20-TECHS/G201.html)

### Skip-Links

Ein **Skip-Link** ist ein Link, der so früh wie möglich im {{HTMLElement("body")}}-Inhalt platziert ist und auf den Beginn des Hauptinhalts der Seite verweist. Normalerweise verbirgt CSS einen Skip-Link vom Bildschirm, bis er fokussiert wird.

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

{{EmbedLiveSample('Skip-Links')}}

Skip-Links ermöglichen es Tastaturnutzern, Inhalte zu überspringen, die auf mehreren Seiten wiederholt werden, wie z. B. die Kopfzeilennavigation.

Skip-Links sind besonders nützlich für Menschen, die mit Hilfe von unterstützender Technologie wie Schaltflächensteuerung, Sprachbefehlen oder Mundstöcken/Kopfstäben navigieren, da das Durchlaufen sich wiederholender Links mühsam sein kann.

- [WebAIM: "Skip Navigation"-Links](https://webaim.org/techniques/skipnav/)
- [Anleitung: Verwendung von Skip Navigation-Links](https://www.a11yproject.com/posts/skip-nav-links/)
- [MDN / Verständnis von WCAG, Erklärungen zu Richtlinie 2.4](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.4_%e2%80%94_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Verständnis des Erfolgskriteriums 2.4.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)

### Größe und Nähe

#### Größe

Interaktive Elemente wie Links sollten eine ausreichend große Fläche bieten, damit sie leicht aktiviert werden können. Dies hilft verschiedenen Menschen, einschließlich derjenigen mit Bewegungssteuerungsproblemen und derjenigen, die ungenaue Eingaben wie Touchscreens verwenden. Eine Mindestgröße von 44×44 [CSS-Pixel](https://w3c.github.io/wcag/guidelines/22/#dfn-css-pixels) wird empfohlen.

Text-Links in Prosa-Inhalten sind von dieser Anforderung ausgenommen, aber es ist dennoch eine gute Idee sicherzustellen, dass genügend Text verlinkt wird, um ihn leicht aktivieren zu können.

- [Verständnis des Erfolgskriteriums 2.5.5: Zielgröße](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Zielgröße und 2.5.5](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Schnelltest: Große Touch-Ziele](https://www.a11yproject.com/posts/large-touch-targets/)

#### Nähe

Interaktive Elemente wie Links, die in enger visueller Nähe platziert sind, sollten durch Abstand voneinander getrennt werden. Abstand hilft Menschen mit Bewegungssteuerungsproblemen, die sonst möglicherweise versehentlich das falsche interaktive Element aktivieren könnten.

Abstände können mithilfe von CSS-Eigenschaften wie {{CSSxRef("margin")}} erstellt werden.

- [Handzittern und das Riesen-Button-Problem](https://axesslab.com/hand-tremors/)

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
> Sie können `href="#top"` oder das leere Fragment (`href="#"`) verwenden, um nach oben auf der aktuellen Seite zu verlinken, [wie in der HTML-Spezifikation definiert](https://html.spec.whatwg.org/multipage/browsing-the-web.html#scroll-to-the-fragment-identifier).

### Verlinkung zu einer E-Mail-Adresse

Um Links zu erstellen, die im E-Mail-Programm des Benutzers geöffnet werden, um eine neue Nachricht zu senden, verwenden Sie das `mailto:`-Schema:

```html
<a href="mailto:nowhere@mozilla.org">Send email to nowhere</a>
```

#### Ergebnis

{{EmbedLiveSample('Verlinkung zu einer E-Mail-Adresse')}}

Für Details zu `mailto:`-URLs, wie das Einfügen eines Betreffs oder Textes, siehe [E-Mail-Links](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links#email_links) oder {{RFC(6068)}}.

### Verlinkung zu Telefonnummern

```html
<a href="tel:+49.157.0156">+49 157 0156</a>
<a href="tel:+1(800)555-0123">(800) 555-0123</a>
```

#### Ergebnis

{{EmbedLiveSample('Verlinkung zu Telefonnummern')}}

Das Verhalten von `tel:`-Links variiert mit den Gerätemöglichkeiten:

- Mobilgeräte wählen automatisch die Nummer.
- Die meisten Betriebssysteme haben Programme, die Anrufe tätigen können, wie Skype oder FaceTime.
- Websites können Anrufe mit [`registerProtocolHandler`](/de/docs/Web/API/Navigator/registerProtocolHandler) tätigen, z. B. `web.skype.com`.
- Andere Verhaltensweisen umfassen das Speichern der Nummer in Kontakten oder das Senden der Nummer an ein anderes Gerät.

Siehe {{RFC(3966)}} für Syntax, zusätzliche Funktionen und andere Details zum `tel:`-URL-Schema.

### Verwendung des Download-Attributs zum Speichern eines `<canvas>` als PNG

Um den Inhalt eines {{HTMLElement("canvas")}}-Elements als Bild zu speichern, können Sie einen Link erstellen, bei dem `href` die Canvas-Daten als `data:`-URL enthält, die mit JavaScript erstellt wurde, und das `download`-Attribut den Dateinamen für die heruntergeladene PNG-Datei bereitstellt:

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

{{EmbedLiveSample('Beispiel-Mal-App mit Speicherlink', '100%', '400')}}

## Sicherheit und Datenschutz

`<a>`-Elemente können Folgen für die Sicherheit und den Datenschutz der Benutzer haben. Siehe [`Referer`-Header: Datenschutz- und Sicherheitsbedenken](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns) für Informationen.

Die Verwendung von `target="_blank"` ohne [`rel="noreferrer"`](/de/docs/Web/HTML/Reference/Attributes/rel/noreferrer) und [`rel="noopener"`](/de/docs/Web/HTML/Reference/Attributes/rel/noopener) macht die Website anfällig für Angriffe über die [`window.opener`](/de/docs/Web/API/Window/opener)-API, obwohl neuere Browserversionen beim Setzen von `target="_blank"` implizit denselben Schutz bieten wie das Setzen von `rel="noopener"`. Siehe [Browser-Kompatibilität](#browser-kompatibilität) für Details.

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
          >Phrasierungsinhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#interactive_content"
          >interaktiver Inhalt</a
        >, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#transparent_content_model"
          >Transparent</a
        >, außer dass kein Nachfahre
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#interactive_content"
          >Interaktiver Inhalt</a
        > oder ein
        <code>&lt;a&gt;</code>-Element sein darf, und kein Nachfahre ein angegebenes
        <a
          href="/de/docs/Web/HTML/Reference/Global_attributes/tabindex"
          >Tabindex</a
        >-Attribut haben darf.
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
        > akzeptiert, jedoch keine anderen <code>&lt;a&gt;</code>-Elemente.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/link_role"><code>link</code></a> wenn das <code>href</code>-Attribut
        vorhanden ist, sonst
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

- {{HTMLElement("link")}} ist ähnlich wie `<a>`, jedoch für Metadaten-Hyperlinks, die für Benutzer unsichtbar sind.
- {{CSSxRef(":link")}} ist eine CSS-Pseudo-Klasse, die `<a>`-Elemente mit URL im `href`-Attribut, die vom Benutzer noch nicht besucht wurden, abgleicht.
- {{CSSxRef(":visited")}} ist eine CSS-Pseudo-Klasse, die `<a>`-Elemente mit URL im `href`-Attribut, die vom Benutzer in der Vergangenheit besucht wurden, abgleicht.
- {{CSSxRef(":any-link")}} ist eine CSS-Pseudo-Klasse, die `<a>`-Elemente mit `href`-Attribut abgleicht.
- [Textfragmente](/de/docs/Web/URI/Reference/Fragment/Text_fragments) sind Nutzeranweisungen, die URLs hinzugefügt werden, um es Inhaltsautoren zu ermöglichen, auf spezifischen Text auf einer Seite zu verlinken, ohne dass IDs erforderlich sind.
