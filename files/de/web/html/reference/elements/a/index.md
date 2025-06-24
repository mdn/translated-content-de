---
title: "<a>: Das Ankerelement"
slug: Web/HTML/Reference/Elements/a
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{HTMLSidebar}}

Das **`<a>`** [HTML](/de/docs/Web/HTML) Element (oder _Ankerelement_), mit [seinem `href` Attribut](#href), erstellt einen Hyperlink zu Webseiten, Dateien, E-Mail-Adressen, Positionen auf derselben Seite oder allem, auf das eine URL verweisen kann.

Der Inhalt innerhalb jedes `<a>` _sollte_ das Ziel des Links anzeigen. Wenn das `href`-Attribut vorhanden ist, wird es aktiviert, indem die Eingabetaste gedrückt wird, während das `<a>` Element fokussiert ist.

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

  - : Gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}} Header sendet. Serverseitig wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}} Headers in der Antwort zu triggern, um eine [navigationsbasierte Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#navigation-based_attribution_sources) zu registrieren.

    Der Browser speichert die Quelldaten, die mit der navigationsbasierten Attributionsquelle verknüpft sind (wie im {{httpheader("Attribution-Reporting-Register-Source")}} Antwortheader angegeben), wenn der Benutzer auf den Link klickt. Weitere Informationen finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

    Es gibt zwei Versionen dieses Attributs, die Sie einstellen können:

    - Boolesch, d.h. nur der Name `attributionsrc`. Dies gibt an, dass Sie den {{httpheader("Attribution-Reporting-Eligible")}} Header an denselben Server senden möchten, auf den das `href` Attribut zeigt. Dies ist in Ordnung, wenn Sie die Registrierung der Attributionsquelle auf demselben Server behandeln.
    - Wert, der eine oder mehrere URLs enthält, zum Beispiel:

      ```html
      attributionsrc="https://a.example/register-source
      https://b.example/register-source"
      ```

      Dies ist nützlich, wenn die angeforderte Ressource nicht auf einem von Ihnen kontrollierten Server liegt oder Sie die Registrierung der Attributionsquelle auf einem anderen Server veranlassen möchten. In diesem Fall können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcenanforderung erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}} Header zusätzlich zum Ursprungsserver an die in `attributionsrc` angegebenen URLs gesendet. Diese URLs können dann mit dem {{httpheader("Attribution-Reporting-Register-Source")}} antworten, um die Registrierung abzuschließen.

      > [!NOTE]
      > Das Angeben mehrerer URLs bedeutet, dass mehrere Attributionsquellen auf derselben Funktion registriert werden können. Sie könnten zum Beispiel verschiedene Kampagnen haben, deren Erfolg Sie messen möchten, was verschiedene Berichte auf unterschiedlichen Daten erfordert.

    `<a>` Elemente können nicht als Attributionstrigger verwendet werden, nur als Quellen.

- `download`

  - : Führt dazu, dass der Browser die verknüpfte URL als Download behandelt. Kann mit oder ohne `filename` Wert verwendet werden:

    - Ohne Wert wird der Browser einen Dateinamen/Extension vorschlagen, basierend auf verschiedenen Quellen:

      - Der {{HTTPHeader("Content-Disposition")}} HTTP-Header
      - Das letzte Segment im URL-[Pfad](/de/docs/Web/API/URL/pathname)
      - Der {{Glossary("MIME_type", "Medientyp")}} (vom {{HTTPHeader("Content-Type")}} Header, dem Anfang einer [`data:` URL](/de/docs/Web/URI/Reference/Schemes/data) oder [`Blob.type`](/de/docs/Web/API/Blob/type) für eine [`blob:` URL](/de/docs/Web/API/URL/createObjectURL_static))

    - `filename`: Das Definieren eines Wertes schlägt diesen als Dateinamen vor. `/` und `\` Zeichen werden in Unterstriche (`_`) umgewandelt. Dateisysteme können andere Zeichen in Dateinamen verbieten, so dass Browser den vorgeschlagenen Namen bei Bedarf anpassen werden.

    > [!NOTE]
    >
    > - `download` funktioniert nur für [gleich-herkunft URLs](/de/docs/Web/Security/Same-origin_policy) oder die `blob:` und `data:` Schemen.
    > - Wie Browser Downloads behandeln, variiert je nach Browser, Benutzereinstellungen und anderen Faktoren. Der Benutzer kann vor Beginn eines Downloads aufgefordert werden, die Datei könnte automatisch gespeichert oder geöffnet werden, entweder in einem externen Programm oder im Browser selbst.
    > - Wenn der `Content-Disposition` Header andere Informationen enthält als das `download` Attribut, kann das resultierende Verhalten unterschiedlich sein:
    >   - Wenn der Header einen `filename` spezifiziert, hat dieser Vorrang über einen im `download` Attribut angegebenen Dateinamen.
    >   - Wenn der Header eine Disposition von `inline` spezifiziert, geben Chrome und Firefox dem Attribut Vorrang und behandeln es als Download. Ältere Firefox-Versionen (vor 82) geben dem Header Vorrang und zeigen den Inhalt inline an.

- `href`

  - : Die URL, auf die der Hyperlink zeigt. Links sind nicht auf HTTP-basierte URLs beschränkt — sie können jedes URL-Schema verwenden, das von Browsern unterstützt wird:

    - Telefonnummern mit `tel:` URLs
    - E-Mail-Adressen mit `mailto:` URLs
    - SMS-Textnachrichten mit `sms:` URLs
    - Ausführbarer Code mit [`javascript:` URLs](/de/docs/Web/URI/Reference/Schemes/javascript)
    - Während Webbrowser möglicherweise andere URL-Schemata nicht unterstützen, können Websites dies mit [`registerProtocolHandler()`](/de/docs/Web/API/Navigator/registerProtocolHandler).

    Darüber hinaus können andere URL-Funktionen bestimmte Teile der Ressource lokalisieren, einschließlich:

    - Abschnitte einer Seite mit Dokumentfragmenten
    - Spezifische Textabschnitte mit [Textfragmenten](/de/docs/Web/URI/Reference/Fragment/Text_fragments)
    - Teile von Mediendateien mit Medienfragmenten

- `hreflang`
  - : Gibt die menschliche Sprache der verlinkten URL an. Keine eingebaute Funktionalität. Zulässige Werte sind dieselben wie beim [globalen `lang` Attribut](/de/docs/Web/HTML/Reference/Global_attributes/lang).
- `ping`
  - : Eine durch Leerzeichen getrennte Liste von URLs. Wenn der Link aufgerufen wird, sendet der Browser {{HTTPMethod("POST")}} Anfragen mit dem Körper `PING` an die URLs. Typischerweise für Tracking.
- `referrerpolicy`

  - : Wie viel vom [Referrer](/de/docs/Web/HTTP/Reference/Headers/Referer) beim Aufruf des Links gesendet wird.
    - `no-referrer`: Der {{HTTPHeader("Referer")}} Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}} Header wird nicht an {{Glossary("origin", "Ursprünge")}} ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`: Der gesendete Referrer wird auf den Ursprung der verweisenden Seite beschränkt: Schema, {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`: Der an andere Ursprünge gesendete Referrer wird auf Schema, Host und Port beschränkt. Navigationen im gleichen Ursprung enthalten weiterhin den Pfad.
    - `same-origin`: Ein Referrer wird für {{Glossary("Same-origin_policy", "gleiche Ursprünge")}} gesendet, aber Anfragen zu anderen Ursprüngen enthalten keine Referrerinformationen.
    - `strict-origin`: Nur den Ursprung des Dokuments als Referrer versenden, wenn die Sicherheitsstufe des Protokolls gleich bleibt (HTTPS→HTTPS), aber nicht an ein weniger sicheres Ziel senden (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard): Eine vollständige URL senden, wenn eine Anfrage im gleichen Ursprung ausgeführt wird, nur den Ursprung senden, wenn die Sicherheitsstufe des Protokolls gleich bleibt (HTTPS→HTTPS), und keinen Header an ein weniger sicheres Ziel senden (HTTPS→HTTP).
    - `unsafe-url`: Der Referrer enthält den Ursprung _und_ den Pfad (aber nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), das [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder den [Benutzernamen](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge weitergibt.

- [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)
  - : Die Beziehung der verlinkten URL als durch Leerzeichen getrennte Linktypen.
- `target`

  - : Wo die verlinkte URL angezeigt wird, als Name für einen _Browsing-Kontext_ (ein Tab, Fenster oder {{HTMLElement("iframe")}}). Die folgenden Schlüsselwörter haben spezielle Bedeutungen, wo die URL geladen werden soll:

    - `_self`: Der aktuelle Browsing-Kontext. (Standard)
    - `_blank`: Normalerweise ein neuer Tab, aber Benutzer können Browser so einstellen, dass stattdessen ein neues Fenster geöffnet wird.
    - `_parent`: Der übergeordnete Browsing-Kontext des aktuellen. Wenn kein übergeordneter vorhanden ist, verhält es sich wie `_self`.
    - `_top`: Der oberste Browsing-Kontext. Genauer gesagt der "höchste" Kontext, der ein Vorfahre des aktuellen ist. Wenn keine Vorfahren vorhanden sind, verhält es sich wie `_self`.
    - `_unfencedTop`: Erlaubt eingebetteten [eingefriedeten Frames](/de/docs/Web/API/Fenced_frame_API), den obersten Frame (d.h. das Überschreiten der Wurzel des eingefriedeten Frames, im Gegensatz zu anderen reservierten Zielen) zu navigieren. Beachten Sie, dass die Navigation immer noch erfolgreich ist, wenn dies außerhalb eines eingefriedeten Frame-Kontextes verwendet wird, aber nicht wie ein reserviertes Schlüsselwort behandelt wird.

    > [!NOTE]
    > Das Setzen von `target="_blank"` auf `<a>` Elementen impliziert dasselbe `rel` Verhalten wie das Setzen von [`rel="noopener"`](/de/docs/Web/HTML/Reference/Attributes/rel/noopener), was `window.opener` nicht setzt.

- `type`
  - : Gibt das Format der verlinkten URL mit einem {{Glossary("MIME_type", "MIME-Typ")}} an. Keine eingebaute Funktionalität.

### Veraltete Attribute

- `charset` {{Deprecated_Inline}}

  - : Deutete auf die {{Glossary("character_encoding", "Zeichenkodierung")}} der verlinkten URL hin.

    > [!NOTE]
    > Dieses Attribut ist veraltet und **sollte von Autoren nicht verwendet werden**. Verwenden Sie den HTTP {{HTTPHeader("Content-Type")}} Header auf der verlinkten URL.

- `coords` {{Deprecated_Inline}}
  - : Verwendet mit [dem `shape` Attribut](#shape). Eine durch Kommas getrennte Liste von Koordinaten.
- `name` {{Deprecated_Inline}}

  - : War erforderlich, um einen möglichen Zielort auf einer Seite zu definieren. In HTML 4.01 konnten `id` und `name` beide auf `<a>` verwendet werden, solange sie identische Werte hatten.

    > [!NOTE]
    > Verwenden Sie stattdessen das globale Attribut [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id).

- `rev` {{Deprecated_Inline}}
  - : Spezifizierte einen reversen Link; das Gegenteil von [dem `rel` Attribut](#rel). Veraltet, weil es sehr verwirrend ist.
- `shape` {{Deprecated_Inline}}

  - : Die Form der Hyperlink-Region in einer Image-Map.

    > [!NOTE]
    > Verwenden Sie das {{HTMLElement("area")}} Element für Image-Maps stattdessen.

## Barrierefreiheit

### Starker Linktext

**Der Inhalt innerhalb eines Links sollte anzeigen, wohin der Link führt**, auch aus dem Kontext heraus.

#### Unzugänglicher, schwacher Linktext

Ein leider häufiger Fehler ist, nur die Wörter "klicken Sie hier" oder "hier" zu verlinken:

```html example-bad
<p>Learn more about our products <a href="/products">here</a>.</p>
```

##### Ergebnis

{{EmbedLiveSample('Unzugänglicher, schwacher Linktext')}}

#### Starker Linktext

Glücklicherweise ist dies eine einfache Lösung und tatsächlich kürzer als die unzugängliche Version!

```html example-good
<p>Learn more <a href="/products">about our products</a>.</p>
```

##### Ergebnis

{{EmbedLiveSample('Starker Linktext')}}

Hilfssoftware hat Abkürzungen, um alle Links auf einer Seite aufzulisten. Aber starker Linktext nützt allen Benutzern – die "alle Links auflisten" Abkürzung emuliert, wie sehende Benutzer schnell Seiten scannen.

### onclick-Ereignisse

Ankerelemente werden oft als gefälschte Schaltflächen missbraucht, indem ihr `href` auf `#` oder [`javascript:void(0)`](/de/docs/Web/URI/Reference/Schemes/javascript) gesetzt wird, um zu verhindern, dass die Seite aktualisiert wird, und dann auf ihre `click` Ereignisse zu hören.

Diese falschen `href` Werte verursachen unerwartetes Verhalten beim Kopieren/Ziehen von Links, Öffnen von Links in einem neuen Tab/Fenster, Lesezeichen setzen oder wenn JavaScript lädt, Fehler aufweist oder deaktiviert ist. Sie vermitteln auch falsche Semantik an unterstützende Technologien, wie Bildschirmlesegeräte.

Verwenden Sie stattdessen ein {{HTMLElement("button")}}. Allgemein gilt, **verwenden Sie nur einen Hyperlink für die Navigation zu einer echten URL**.

### Externe Links und Verlinken zu nicht-HTML-Ressourcen

Links, die in einem neuen Tab/Fenster über `target="_blank"` geöffnet werden, oder Links, die auf eine Download-Datei verweisen, sollten angeben, was passiert, wenn der Link aufgerufen wird.

Menschen mit Einschränkungen des Sehvermögens, die mit Hilfe von Bildschirmlesetechnologie oder kognitiven Bedenken navigieren, können verwirrt werden, wenn unerwartet ein neuer Tab, ein Fenster oder eine Anwendung geöffnet wird. Ältere Bildschirmlesesoftware kündigt das Verhalten möglicherweise nicht einmal an.

#### Link, der einen neuen Tab/ein neues Fenster öffnet

```html
<a target="_blank" href="https://www.wikipedia.org">
  Wikipedia (opens in new tab)
</a>
```

##### Ergebnis

{{EmbedLiveSample('Link, der einen neuen Tab/ein neues Fenster öffnet')}}

#### Link zu einer nicht-HTML-Ressource

Wenn ein Icon zur Anzeige des Link-Verhaltens verwendet wird, stellen Sie sicher, dass es ein [`alt` Attribut](/de/docs/Web/HTML/Reference/Elements/img#alt) hat, um seinen Zweck zu beschreiben. Für den Fall, dass das Icon fehlt, wird der Inhalt des `alt` Attributs immer noch das Verhalten des Links vermitteln.

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
- [G200: Öffnen neuer Fenster und Tabs von einem Link nur, wenn nötig](https://www.w3.org/TR/WCAG20-TECHS/G200.html)
- [G201: Nutzern eine frühzeitige Warnung geben, wenn ein neues Fenster geöffnet wird](https://www.w3.org/TR/WCAG20-TECHS/G201.html)

### Skip-Links

Ein **Skip-Link** ist ein Link, der so früh wie möglich im Inhalt des {{HTMLElement("body")}} platziert wird und auf den Anfang des Hauptinhalts der Seite verweist. Normalerweise wird ein Skip-Link durch CSS vom Bildschirm verborgen, bis er fokussiert wird.

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

Skip-Links ermöglichen es Tastaturbenutzern, Inhalte zu überspringen, die sich auf mehreren Seiten wiederholen, wie z. B. Kopfzeilennavigation.

Skip-Links sind besonders nützlich für Menschen, die mit Hilfe von unterstützender Technologie wie Schaltersteuerung, Sprachsteuerung oder Mundstöcken/Kopfstöcken navigieren, da das Durchlaufen von sich wiederholenden Links mühsam sein kann.

- [WebAIM: "Navigation überspringen" Links](https://webaim.org/techniques/skipnav/)
- [Anleitung: Verwenden von Skip-Navigation Links](https://www.a11yproject.com/posts/skip-nav-links/)
- [MDN / Verständnis von WCAG, Richtlinie 2.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.4_%e2%80%94_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Verständnis Erfolgskriterium 2.4.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)

### Größe und Nähe

#### Größe

Interaktive Elemente, wie Links, sollten eine Fläche bereitstellen, die groß genug ist, um sie leicht zu aktivieren. Das hilft verschiedenen Menschen, einschließlich solcher mit motorischen Problemen und solchen, die ungenaue Eingaben verwenden, wie ein Touchscreen. Eine Mindestgröße von 44×44 [CSS-Pixeln](https://w3c.github.io/wcag/guidelines/22/#dfn-css-pixels) wird empfohlen.

Nur-Text-Links in Prosa-Inhalten sind von dieser Anforderung ausgenommen, aber es ist trotzdem eine gute Idee, sicherzustellen, dass genug Text verlinkt ist, um leicht aktiviert zu werden.

- [Verständnis Erfolgskriterium 2.5.5: Zielgröße](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Zielgröße und 2.5.5](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Schnelltest: Große Touch-Ziele](https://www.a11yproject.com/posts/large-touch-targets/)

#### Nähe

Interaktive Elemente, wie Links, die sich in enger visueller Nähe befinden, sollten durch Abstand getrennt sein. Der Abstand hilft Menschen mit motorischen Problemen, die sonst versehentlich den falschen interaktiven Inhalt aktivieren könnten.

Abstand kann mit CSS-Eigenschaften wie {{CSSxRef("margin")}} erstellt werden.

- [Handzittern und das riesige-Schaltflächen-Problem](https://axesslab.com/hand-tremors/)

## Beispiele

### Verlinken zu einer absoluten URL

#### HTML

```html
<a href="https://www.mozilla.com">Mozilla</a>
```

#### Ergebnis

{{EmbedLiveSample('Verlinken zu einer absoluten URL')}}

### Verlinken zu relativen URLs

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

{{EmbedLiveSample('Verlinken zu relativen URLs')}}

### Verlinken zu einem Element auf derselben Seite

```html
<!-- <a> element links to the section below -->
<p><a href="#Section_further_down">Jump to the heading below</a></p>

<!-- Heading to link to -->
<h2 id="Section_further_down">Section further down</h2>
```

#### Ergebnis

{{EmbedLiveSample('Verlinken zu einem Element auf der selben Seite')}}

> [!NOTE]
> Sie können `href="#top"` oder das leere Fragment (`href="#"`) verwenden, um zum Anfang der aktuellen Seite zu verlinken, [wie in der HTML-Spezifikation definiert](https://html.spec.whatwg.org/multipage/browsing-the-web.html#scroll-to-the-fragment-identifier).

### Verlinken zu einer E-Mail-Adresse

Um Links zu erstellen, die sich im E-Mail-Programm des Benutzers öffnen, um eine neue Nachricht zu senden, verwenden Sie das `mailto:` Schema:

```html
<a href="mailto:nowhere@mozilla.org">Send email to nowhere</a>
```

#### Ergebnis

{{EmbedLiveSample('Verlinken zu einer E-Mail-Adresse')}}

Für Details zu `mailto:` URLs, wie das Einfügen eines Betreffs oder eines Textes, siehe [E-Mail-Links](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links#email_links) oder {{RFC(6068)}}.

### Verlinken zu Telefonnummern

```html
<a href="tel:+49.157.0156">+49 157 0156</a>
<a href="tel:+1(800)555-0123">(800) 555-0123</a>
```

#### Ergebnis

{{EmbedLiveSample('Verlinken zu Telefonnummern')}}

Das Verhalten von `tel:` Links variiert je nach Gerätekapazität:

- Mobilgeräte wählen die Nummer automatisch.
- Die meisten Betriebssysteme haben Programme, die Anrufe durchführen können, wie Skype oder FaceTime.
- Websites können Anrufe mit [`registerProtocolHandler`](/de/docs/Web/API/Navigator/registerProtocolHandler) durchführen, wie `web.skype.com`.
- Andere Verhaltensweisen umfassen das Speichern der Nummer zu Kontakten oder das Senden der Nummer an ein anderes Gerät.

Siehe {{RFC(3966)}} für die Syntax, zusätzliche Funktionen und andere Details zum `tel:` URL-Schema.

### Verwendung des download Attributs, um einen `<canvas>` als PNG zu speichern

Um den Inhalt eines {{HTMLElement("canvas")}} Elements als Bild zu speichern, können Sie einen Link erstellen, bei dem das `href` die Canvas-Daten als `data:` URL ist, die mit JavaScript erstellt wurde, und das `download` Attribut den Dateinamen für die heruntergeladene PNG-Datei bereitstellt:

#### Beispiel Mal-App mit Speichern-Link

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

{{EmbedLiveSample('Beispiel Mal-App mit Speichern-Link', '100%', '400')}}

## Sicherheit und Datenschutz

`<a>` Elemente können Konsequenzen für die Sicherheit und den Datenschutz der Benutzer haben. Siehe [`Referer` Header: Datenschutz und Sicherheitsbedenken](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns) für Informationen.

Die Verwendung von `target="_blank"` ohne [`rel="noreferrer"`](/de/docs/Web/HTML/Reference/Attributes/rel/noreferrer) und [`rel="noopener"`](/de/docs/Web/HTML/Reference/Attributes/rel/noopener) macht die Website anfällig für Angriffe durch Ausnutzung der [`window.opener`](/de/docs/Web/API/Window/opener) API, obwohl in neueren Browserversionen das Setzen von `target="_blank"` implizit denselben Schutz bietet wie das Setzen von `rel="noopener"`. Siehe [Browser-Kompatibilität](#browser-kompatibilität) für Details.

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
          >ausdrucksstarker Inhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#interactive_content"
          >interaktiver Inhalt</a
        >, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Inhalte</th>
      <td>
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#transparent_content_model"
          >Transparent</a
        >, außer dass kein Nachkomme
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#interactive_content"
          >interaktiver Inhalt</a
        > oder ein
        <code>&lt;a&gt;</code> Element sein darf und kein Nachkomme ein explizites
        <a
          href="/de/docs/Web/HTML/Reference/Global_attributes/tabindex"
          >tabindex</a
        > Attribut haben darf.
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
          >fließenden Inhalt</a
        > akzeptiert, jedoch keine anderen <code>&lt;a&gt;</code> Elemente.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/link_role"><code>link</code></a>, wenn das <code>href</code> Attribut vorhanden ist, andernfalls
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
- {{CSSxRef(":link")}} ist eine CSS-Pseudoklasse, die `<a>` Elemente mit einer URL im `href` Attribut, die vom Benutzer noch nicht besucht wurde, abgleicht.
- {{CSSxRef(":visited")}} ist eine CSS-Pseudoklasse, die `<a>` Elemente mit einer URL im `href` Attribut, die der Benutzer in der Vergangenheit besucht hat, abgleicht.
- {{CSSxRef(":any-link")}} ist eine CSS-Pseudoklasse, die `<a>` Elemente mit dem `href` Attribut abgleicht.
- [Textfragmente](/de/docs/Web/URI/Reference/Fragment/Text_fragments) sind Anweisungen des Benutzeragenten, die URLs hinzugefügt werden, um Inhaltsautoren die Möglichkeit zu geben, auf spezifischen Text auf einer Seite zu verlinken, ohne dass IDs erforderlich sind.
