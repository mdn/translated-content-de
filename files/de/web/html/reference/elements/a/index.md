---
title: "<a>: Das Ankerelement"
slug: Web/HTML/Reference/Elements/a
l10n:
  sourceCommit: 3f82816393e85b89cd8afd089dd5cbd691cf7924
---

{{HTMLSidebar}}

Das **`<a>`** [HTML](/de/docs/Web/HTML)-Element (oder _Anker_-Element), mit [seinem `href`-Attribut](#href), erstellt einen Hyperlink zu Webseiten, Dateien, E-Mail-Adressen, Bereichen auf derselben Seite oder allem anderen, was eine URL adressieren kann.

Der Inhalt innerhalb jedes `<a>` sollte das Ziel des Links anzeigen. Wenn das `href`-Attribut vorhanden ist, wird durch Drücken der Eingabetaste, während das `<a>`-Element fokussiert ist, der Link aktiviert.

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

Zu den Attributen dieses Elements gehören die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `attributionsrc` {{experimental_inline}}

  - : Gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header sendet. Serverseitig wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}}-Headers in der Antwort auszulösen, um eine [navigationsbasierte Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#navigation-based_attribution_sources) zu registrieren.

    Der Browser speichert die Quelldaten, die mit der navigationsbasierten Attributionsquelle verbunden sind (wie im {{httpheader("Attribution-Reporting-Register-Source")}}-Antwortheader bereitgestellt), wenn der Benutzer auf den Link klickt. Weitere Details finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

    Es gibt zwei Versionen dieses Attributs, die Sie festlegen können:

    - Boolean, d.h. nur der Name `attributionsrc`. Dies gibt an, dass Sie möchten, dass der {{httpheader("Attribution-Reporting-Eligible")}}-Header an denselben Server gesendet wird, auf den das `href`-Attribut verweist. Dies ist in Ordnung, wenn Sie die Registrierung der Attributionsquelle auf demselben Server abwickeln.
    - Wert, der eine oder mehrere URLs enthält, zum Beispiel:

      ```html
      attributionsrc="https://a.example/register-source
      https://b.example/register-source"
      ```

      Dies ist nützlich in Fällen, in denen die angeforderte Ressource nicht auf einem von Ihnen kontrollierten Server liegt oder Sie die Registrierung der Attributionsquelle auf einem anderen Server abwickeln möchten. In diesem Fall können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcenanfrage erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header an die(s) in `attributionsrc` angegebene(n) URL(s) zusätzlich zum Ursprung der Ressource gesendet. Diese URLs können dann mit dem {{httpheader("Attribution-Reporting-Register-Source")}} antworten, um die Registrierung abzuschließen.

      > [!NOTE]
      > Wenn Sie mehrere URLs angeben, können mehrere Attributionsquellen für dieselbe Funktion registriert werden. Möglicherweise versuchen Sie beispielsweise, den Erfolg verschiedener Kampagnen zu messen, was die Erstellung verschiedener Berichte auf unterschiedlichen Daten erfordert.

    `<a>`-Elemente können nicht als Attributionstrigger verwendet werden, nur als Quellen.

- `download`

  - : Veranlasst den Browser, die verknüpfte URL als Download zu behandeln. Kann mit oder ohne `filename`-Wert verwendet werden:

    - Ohne einen Wert schlägt der Browser einen Dateinamen/Erweiterung vor, erstellt aus verschiedenen Quellen:

      - Der {{HTTPHeader("Content-Disposition")}}-HTTP-Header
      - Das letzte Segment im URL-[Pfad](/de/docs/Web/API/URL/pathname)
      - Der {{Glossary("MIME_type", "Medientyp")}} (aus dem {{HTTPHeader("Content-Type")}}-Header, dem Anfang einer [`data:`-URL](/de/docs/Web/URI/Reference/Schemes/data) oder [`Blob.type`](/de/docs/Web/API/Blob/type) für eine [`blob:`-URL](/de/docs/Web/API/URL/createObjectURL_static))

    - `filename`: Das Definieren eines Wertes schlägt diesen als Dateinamen vor. `/`- und `\`-Zeichen werden in Unterstriche (`_`) umgewandelt. Dateisysteme können andere Zeichen in Dateinamen verbieten, daher passen Browser den vorgeschlagenen Namen bei Bedarf an.

    > [!NOTE]
    >
    > - `download` funktioniert nur für [same-origin URLs](/de/docs/Web/Security/Same-origin_policy) oder die `blob:`- und `data:`-Schemata.
    > - Wie Browser Downloads behandeln, variiert je nach Browser, Benutzereinstellungen und anderen Faktoren. Der Benutzer kann aufgefordert werden, bevor ein Download startet, oder die Datei wird automatisch gespeichert, oder sie öffnet sich automatisch, entweder in einer externen Anwendung oder im Browser selbst.
    > - Wenn der `Content-Disposition`-Header andere Informationen als das `download`-Attribut enthält, kann sich das Verhalten unterscheiden:
    >   - Wenn der Header einen `filename` angibt, hat er Vorrang vor einem im `download`-Attribut angegebenen Dateinamen.
    >   - Wenn der Header eine Disposition von `inline` angibt, priorisieren Chrome und Firefox das Attribut und behandeln es als Download. Ältere Firefox-Versionen (vor 82) priorisieren den Header und zeigen den Inhalt inline an.

- `href`

  - : Die URL, auf die der Hyperlink verweist. Links sind nicht auf HTTP-basierte URLs beschränkt — sie können jedes von Browsern unterstützte URL-Schema verwenden:

    - Telefonnummern mit `tel:`-URLs
    - E-Mail-Adressen mit `mailto:`-URLs
    - SMS-Nachrichten mit `sms:`-URLs
    - Ausführbarer Code mit [`javascript:`-URLs](/de/docs/Web/URI/Reference/Schemes/javascript)
    - Während Webbrowser andere URL-Schemata möglicherweise nicht unterstützen, können Websites dies mit [`registerProtocolHandler()`](/de/docs/Web/API/Navigator/registerProtocolHandler)

    Darüber hinaus können andere URL-Features spezifische Teile der Ressource lokalisieren, einschließlich:

    - Abschnitte einer Seite mit Dokumentfragmenten
    - Spezifische Textabschnitte mit [Textfragmenten](/de/docs/Web/URI/Reference/Fragment/Text_fragments)
    - Teile von Mediendateien mit Medienfragmenten

- `hreflang`
  - : Weist auf die menschliche Sprache der verlinkten URL hin. Keine integrierte Funktionalität. Erlaubte Werte sind die gleichen wie [das globale `lang`-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/lang).
- `ping`
  - : Eine durch Leerzeichen getrennte Liste von URLs. Wenn der Link gefolgt wird, sendet der Browser {{HTTPMethod("POST")}}-Anfragen mit dem Body `PING` an die URLs. Typischerweise zum Tracking.
- `referrerpolicy`

  - : Wie viel [Referrer](/de/docs/Web/HTTP/Reference/Headers/Referer) beim Folgen des Links gesendet wird.
    - `no-referrer`: Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}}-Header wird nicht an {{Glossary("origin", "Ursprünge")}} ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`: Der gesendete Referrer wird auf den Ursprung der referenzierenden Seite beschränkt: sein [Schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`: Der an andere Ursprünge gesendete Referrer wird auf das Schema, den Host und den Port beschränkt. Navigationen im selben Ursprung enthalten weiterhin den Pfad.
    - `same-origin`: Ein Referrer wird für {{Glossary("Same-origin_policy", "den gleichen Ursprung")}} gesendet, aber Anfragen über den Ursprung hinaus enthalten keine Referenzinformationen.
    - `strict-origin`: Senden Sie den Ursprung des Dokuments nur als Referrer, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), senden Sie ihn jedoch nicht an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard): Senden Sie eine vollständige URL bei einer gleichursprünglichen Anfrage, senden Sie nur den Ursprung, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), und senden Sie keinen Header an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `unsafe-url`: Der Referrer enthält den Ursprung _und_ den Pfad (aber nicht den [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder [Benutzername](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge weitergibt.

- [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)
  - : Die Beziehung der verlinkten URL als durch Leerzeichen getrennte Linktypen.
- `target`

  - : Wo die verlinkte URL angezeigt wird, als Name für einen _Browsing-Kontext_ (ein Tab, Fenster oder {{HTMLElement("iframe")}}). Die folgenden Schlüsselwörter haben spezielle Bedeutungen dafür, wo die URL geladen werden soll:

    - `_self`: Der aktuelle Browsing-Kontext. (Standard)
    - `_blank`: Üblicherweise ein neuer Tab, Benutzer können Browser jedoch so konfigurieren, dass sie stattdessen ein neues Fenster öffnen.
    - `_parent`: Der übergeordnete Browsing-Kontext des aktuellen. Wenn kein übergeordneter Kontext vorhanden ist, verhält es sich wie `_self`.
    - `_top`: Der oberste Browsing-Kontext. Genauer gesagt bedeutet dies der "höchste" Kontext, der ein Vorfahre des aktuellen ist. Wenn keine Vorfahren vorhanden sind, verhält es sich wie `_self`.
    - `_unfencedTop`: Erlaubt eingebetteten [eingezäunten Frames](/de/docs/Web/API/Fenced_frame_API), das oberste Frame zu navigieren (d.h. weiter als die Wurzel des eingezäunten Frames zu traversieren, im Gegensatz zu anderen reservierten Zielen). Beachten Sie, dass die Navigation dennoch erfolgreich ist, wenn sie außerhalb eines eingezäunten Frame-Kontexts verwendet wird, aber nicht wie ein reserviertes Schlüsselwort wirkt.

    > [!NOTE]
    > Durch das Festlegen von `target="_blank"` auf `<a>`-Elementen wird implizit dasselbe `rel`-Verhalten bereitgestellt wie beim Festlegen von [`rel="noopener"`](/de/docs/Web/HTML/Reference/Attributes/rel/noopener), wodurch `window.opener` nicht gesetzt wird.

- `type`
  - : Weist auf das Format der verlinkten URL mit einem {{Glossary("MIME_type", "MIME-Typ")}} hin. Keine integrierte Funktionalität.

### Veraltete Attribute

- `charset` {{Deprecated_Inline}}

  - : Wies auf die {{Glossary("character_encoding", "Zeichenkodierung")}} der verlinkten URL hin.

    > [!NOTE]
    > Dieses Attribut ist veraltet und **sollte von Autoren nicht verwendet werden**. Verwenden Sie stattdessen den HTTP-{{HTTPHeader("Content-Type")}}-Header der verlinkten URL.

- `coords` {{Deprecated_Inline}}
  - : Wurde mit [dem `shape`-Attribut](#shape) verwendet. Eine kommaseparierte Liste von Koordinaten.
- `name` {{Deprecated_Inline}}

  - : War erforderlich, um einen möglichen Zielort auf einer Seite zu definieren. In HTML 4.01 konnten `id` und `name` beide auf `<a>` verwendet werden, solange sie identische Werte hatten.

    > [!NOTE]
    > Verwenden Sie stattdessen das globale Attribut [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id).

- `rev` {{Deprecated_Inline}}
  - : Spezifizierte einen umgekehrten Link; das Gegenteil von [dem `rel`-Attribut](#rel). Veraltet, da es sehr verwirrend ist.
- `shape` {{Deprecated_Inline}}

  - : Die Form des hyperverlinkten Bereichs in einer Bildkarte.

    > [!NOTE]
    > Verwenden Sie stattdessen das {{HTMLElement("area")}}-Element für Bildkarten.

## Barrierefreiheit

### Starker Linktext

**Der Inhalt in einem Link sollte anzeigen, wohin der Link führt**, auch außerhalb des Kontexts.

#### Unzugänglicher, schwacher Linktext

Ein leider häufiger Fehler ist, nur die Wörter "klicken Sie hier" oder "hier" zu verlinken:

```html example-bad
<p>Learn more about our products <a href="/products">here</a>.</p>
```

##### Ergebnis

{{EmbedLiveSample('Inaccessible, weak link text', '100%', '50')}}

#### Zugänglicher, starker Linktext

Glücklicherweise ist dies eine einfache Lösung und tatsächlich kürzer als die unzugängliche Version!

```html example-good
<p>Learn more <a href="/products">about our products</a>.</p>
```

##### Ergebnis

{{EmbedLiveSample('Accessible, strong link text', '100%', '50')}}

Assistenzsoftware hat Abkürzungen, um alle Links auf einer Seite aufzulisten. Starker Linktext nützt jedoch allen Benutzern — die "alle Links auflisten"-Abkürzung emuliert, wie sehende Benutzer schnell Seiten scannen.

### onclick-Ereignisse

Ankerelemente werden oft als Fake-Buttons missbraucht, indem ihr `href` auf `#` oder [`javascript:void(0)`](/de/docs/Web/URI/Reference/Schemes/javascript) gesetzt wird, um das Neuladen der Seite zu verhindern, und dann auf ihre `click`-Ereignisse hören.

Diese betrügerischen `href`-Werte verursachen unerwartetes Verhalten beim Kopieren/Ziehen von Links, Öffnen von Links in neuen Tabs/Fenstern, Lesezeichen oder wenn JavaScript geladen wird, fehlerhaft ist oder deaktiviert ist. Sie vermitteln auch falsche Semantik an Hilfstechnologien wie Screenreader.

Verwenden Sie stattdessen ein {{HTMLElement("button")}}. Im Allgemeinen **sollten Sie nur einen Hyperlink zur Navigation zu einer echten URL verwenden**.

### Externe Links und das Verlinken zu nicht-HTML-Ressourcen

Links, die über `target="_blank"` in einem neuen Tab/Fenster geöffnet werden, oder Links, die auf eine Download-Datei verweisen, sollten angeben, was passiert, wenn der Link gefolgt wird.

Personen mit Sehbehinderungen, die sich mit Hilfe von Screenreading-Technologie, oder mit kognitiven Bedenken navigieren, können verwirrt sein, wenn sich plötzlich ein neuer Tab, ein neues Fenster oder eine neue Anwendung öffnet. Ältere Screenreader-Software gibt das Verhalten möglicherweise nicht einmal wieder.

#### Link, der ein neues Tab/Fenster öffnet

```html
<a target="_blank" href="https://www.wikipedia.org">
  Wikipedia (opens in new tab)
</a>
```

##### Ergebnis

{{EmbedLiveSample('Link that opens a new tab/window')}}

#### Link zu einer nicht-HTML-Ressource

Wenn ein Symbol verwendet wird, um das Linkverhalten anzuzeigen, stellen Sie sicher, dass es ein [`alt`-Attribut](/de/docs/Web/HTML/Reference/Elements/img#alt) hat, um seinen Zweck zu beschreiben. Falls das Symbol fehlt, wird der Inhalt des `alt`-Attributs weiterhin das Linkverhalten vermitteln.

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
- [MDN / Verständnis WCAG, Leitfaden 3.2](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
- [G200: Öffnen neuer Fenster und Tabs von einem Link aus nur wenn nötig](https://www.w3.org/TR/WCAG20-TECHS/G200.html)
- [G201: Benutzern vorab warnen, wenn ein neues Fenster geöffnet wird](https://www.w3.org/TR/WCAG20-TECHS/G201.html)

### Skip Links

Ein **Skip Link** ist ein Link, der so früh wie möglich im {{HTMLElement("body")}}-Inhalt platziert wird und auf den Anfang des Hauptinhalts der Seite verweist. Normalerweise verbirgt CSS einen Skip Link außerhalb des Bildschirms, bis er fokussiert wird.

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

Skip Links ermöglichen es Tastaturnutzern, Inhalte zu überspringen, die auf mehreren Seiten wiederholt werden, wie z. B. die Kopfzeilennavigation.

Skip Links sind besonders nützlich für Menschen, die mit Hilfe von Hilfstechnologien wie Schaltersteuerung, Sprachsteuerung oder Mundstöcke/Kopfstäbe navigieren, da das Durchlaufen sich wiederholender Links sehr mühsam sein kann.

- [WebAIM: "Skip Navigation"-Links](https://webaim.org/techniques/skipnav/)
- [Anleitung: Verwenden der Skip Navigation Links](https://www.a11yproject.com/posts/skip-nav-links/)
- [MDN / Verständnis WCAG, Leitfaden 2.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.4_%e2%80%94_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Verständnis des Erfolgskriteriums 2.4.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)

### Größe und Nähe

#### Größe

Interaktive Elemente, wie Links, sollten einen ausreichend großen Bereich bieten, um diese leicht zu aktivieren. Dies hilft einer Vielzahl von Menschen, einschließlich solcher mit motorischen Kontrollproblemen und solchen, die ungenaue Eingabemethoden wie Touchscreens verwenden. Eine Mindestgröße von 44×44 [CSS-Pixeln](https://w3c.github.io/wcag/guidelines/22/#dfn-css-pixels) wird empfohlen.

Text-only-Links in Fließtext sind von dieser Anforderung ausgenommen, aber es ist dennoch eine gute Idee, sicherzustellen, dass genug Text verlinkt ist, um leicht aktiviert werden zu können.

- [Verständnis des Erfolgskriteriums 2.5.5: Zielgröße](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Zielgröße und 2.5.5](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Schnelltest: Große Berührungsziele](https://www.a11yproject.com/posts/large-touch-targets/)

#### Nähe

Interaktive Elemente, wie Links, die in enger visueller Nähe platziert sind, sollten durch Abstände getrennt werden. Abstände helfen Menschen mit motorischen Kontrollproblemen, die andernfalls versehentlich das falsche interaktive Element aktivieren könnten.

Abstände können mit CSS-Eigenschaften wie {{CSSxRef("margin")}} erstellt werden.

- [Handzittern und das Problem der riesigen Schaltflächen](https://axesslab.com/hand-tremors/)

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

Zum Erstellen von Links, die im E-Mail-Programm des Benutzers geöffnet werden, um eine neue Nachricht zu senden, verwenden Sie das `mailto:`-Schema:

```html
<a href="mailto:nowhere@mozilla.org">Send email to nowhere</a>
```

#### Ergebnis

{{EmbedLiveSample('Linking to an email address')}}

Für Details zu `mailto:`-URLs, wie z.B. das Hinzufügen eines Betreffs oder Inhalts, siehe [E-Mail-Links](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links#email_links) oder {{RFC(6068)}}.

### Verlinkung zu Telefonnummern

```html
<a href="tel:+49.157.0156">+49 157 0156</a>
<a href="tel:+1(800)555-0123">(800) 555-0123</a>
```

#### Ergebnis

{{EmbedLiveSample('Linking to telephone numbers')}}

Das Verhalten von `tel:`-Links variiert mit den Gerätefähigkeiten:

- Mobiltelefone wählen die Nummer automatisch.
- Die meisten Betriebssysteme haben Programme, die Anrufe tätigen können, wie Skype oder FaceTime.
- Websites können Anrufe mit [`registerProtocolHandler`](/de/docs/Web/API/Navigator/registerProtocolHandler), wie `web.skype.com`, durchführen.
- Andere Verhaltensweisen umfassen das Speichern der Nummer in Kontakten oder das Senden der Nummer an ein anderes Gerät.

Siehe {{RFC(3966)}}, um Syntax, zusätzliche Funktionen und Details zum `tel:`-URL-Schema zu erfahren.

### Verwenden des Download-Attributs, um eine `<canvas>` als PNG zu speichern

Um den Inhalt eines {{HTMLElement("canvas")}}-Elements als Bild zu speichern, können Sie einen Link erstellen, bei dem das `href` die Canvas-Daten als `data:`-URL ist, die mit JavaScript erstellt wurde und das `download`-Attribut den Dateinamen für die heruntergeladene PNG-Datei bereitstellt:

#### Beispiel-Mal-App mit Speichern-Link

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

Die Verwendung von `target="_blank"` ohne [`rel="noreferrer"`](/de/docs/Web/HTML/Reference/Attributes/rel/noreferrer) und [`rel="noopener"`](/de/docs/Web/HTML/Reference/Attributes/rel/noopener) macht die Website anfällig für Angriffe durch Ausnutzung der [`window.opener`](/de/docs/Web/API/Window/opener)-API, obwohl in neueren Browserversionen das Festlegen von `target="_blank"` implizit denselben Schutz wie das Festlegen von `rel="noopener"` bietet. Siehe [Browser-Kompatibilität](#browser-kompatibilität) für Details.

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
          >Fluss-Inhalt</a
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
      <td>Keine, sowohl das öffnende als auch schließende Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Fluss-Inhalt</a
        > akzeptiert, aber keine anderen <code>&lt;a&gt;</code>-Elemente.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/link_role"><code>link</code></a>, wenn das <code>href</code>-Attribut
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
          <li>keine Einschränkungen</li>
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
- {{CSSxRef(":link")}} ist eine CSS-Pseudoklasse, die zu `<a>`-Elementen mit einer im `href`-Attribut angegebenen URL passt, die vom Benutzer noch nicht besucht wurde.
- {{CSSxRef(":visited")}} ist eine CSS-Pseudoklasse, die zu `<a>`-Elementen mit einer im `href`-Attribut angegebenen URL passt, die der Benutzer in der Vergangenheit besucht hat.
- {{CSSxRef(":any-link")}} ist eine CSS-Pseudoklasse, die zu `<a>`-Elementen mit `href`-Attribut passt.
- [Textfragmente](/de/docs/Web/URI/Reference/Fragment/Text_fragments) sind benutzeragentenbasierte Anweisungen, die URLs hinzugefügt werden, die es Inhaltsautoren ermöglichen, auf spezifischen Text auf einer Seite zu verlinken, ohne dass IDs erforderlich sind.
