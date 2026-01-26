---
title: "<a>: Das Ankerelement"
slug: Web/HTML/Reference/Elements/a
l10n:
  sourceCommit: e936e7271df947f25184a5ba8a21445bbd4d056c
---

Das **`<a>`** [HTML](/de/docs/Web/HTML)-Element (oder _Ankerelement_), mit [seinem `href`-Attribut](#href), erstellt einen Hyperlink zu Webseiten, Dateien, E-Mail-Adressen, Standorten auf derselben Seite oder allem anderen, das eine URL adressieren kann.

Der Inhalt innerhalb jedes `<a>` _sollte_ auf das Ziel des Links hinweisen. Wenn das `href`-Attribut vorhanden ist, wird durch das Drücken der Eingabetaste, während das `<a>`-Element fokussiert ist, dieses aktiviert.

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

- `attributionsrc` {{deprecated_inline}}
  - : Gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header sendet. Auf der Serverseite wird dieser genutzt, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}}-Headers in der Antwort auszulösen, um eine [navigationsbasierte Attribution-Quelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#navigation-based_attribution_sources) zu registrieren.

    Der Browser speichert die Quelldaten, die mit der auf Navigation basierenden Attribution-Quelle verbunden sind (wie im {{httpheader("Attribution-Reporting-Register-Source")}}-Antwort-Header angegeben), wenn der Benutzer auf den Link klickt. Weitere Details finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

    Es gibt zwei Versionen dieses Attributs, die Sie festlegen können:
    - Boolean, d.h. nur der Name `attributionsrc`. Dies gibt an, dass Sie möchten, dass der {{httpheader("Attribution-Reporting-Eligible")}}-Header an denselben Server gesendet wird, auf den das `href`-Attribut verweist. Dies ist in Ordnung, wenn Sie die Quelldatensatzregistrierung auf demselben Server abwickeln.
    - Wert mit einer oder mehreren URLs, beispielsweise:

      ```html
      attributionsrc="https://a.example/register-source
      https://b.example/register-source"
      ```

      Dies ist in Fällen nützlich, in denen die angeforderte Ressource nicht auf einem Server liegt, den Sie kontrollieren, oder Sie die Registrierung der Attribution-Quelle auf einem anderen Server verwalten möchten. In diesem Fall können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcenanforderung erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header an die in `attributionsrc` angegebenen URLs zusätzlich zum Ressourcenursprung gesendet. Diese URLs können dann mit dem {{httpheader("Attribution-Reporting-Register-Source")}} antworten, um die Registrierung abzuschließen.

      > [!NOTE]
      > Die Angabe mehrerer URLs bedeutet, dass mehrere Attributionsquellen für das gleiche Feature registriert werden können. Beispielsweise könnten Sie verschiedene Kampagnen haben, deren Erfolg Sie messen möchten, wofür die Erzeugung unterschiedlicher Berichte auf unterschiedlichen Daten erforderlich ist.

    `<a>`-Elemente können nicht als Attributionsauslöser verwendet werden, sondern nur als Quellen.

- `download`
  - : Veranlasst den Browser, die verlinkte URL als Download zu behandeln. Kann mit oder ohne `filename`-Wert verwendet werden:
    - Ohne Wert schlägt der Browser einen Dateinamen/Erweiterung vor, der aus verschiedenen Quellen generiert wird:
      - Der {{HTTPHeader("Content-Disposition")}} HTTP-Header
      - Das endgültige Segment im URL-[Pfad](/de/docs/Web/API/URL/pathname)
      - Der {{Glossary("MIME_type", "Medientyp")}} (aus dem {{HTTPHeader("Content-Type")}}-Header, dem Anfang einer [`data:`-URL](/de/docs/Web/URI/Reference/Schemes/data) oder [`Blob.type`](/de/docs/Web/API/Blob/type) für eine [`blob:`-URL](/de/docs/Web/URI/Reference/Schemes/blob))

    - `filename`: Definiert ein Wert, der als Dateiname vorgeschlagen wird. `/` und `\`-Zeichen werden in Unterstriche (`_`) umgewandelt. Dateisysteme können andere Zeichen in Dateinamen verbieten, sodass Browser den vorgeschlagenen Namen gegebenenfalls anpassen.

    > [!NOTE]
    >
    > - `download` funktioniert nur für [gleiche-Origin-URLs](/de/docs/Web/Security/Defenses/Same-origin_policy) oder die `blob:`- und `data:`-Schemata.
    > - Wie Browser Downloads behandeln, variiert je nach Browser, Benutzereinstellungen und anderen Faktoren. Der Benutzer wird möglicherweise vor Beginn eines Downloads aufgefordert oder die Datei wird automatisch gespeichert oder sie kann automatisch geöffnet werden, entweder in einer externen Anwendung oder im Browser selbst.
    > - Wenn der `Content-Disposition`-Header andere Informationen als das `download`-Attribut hat, kann sich das resultierende Verhalten unterscheiden:
    >   - Wenn der Header einen `filename`-Wert angibt, hat dieser Vorrang vor einem im `download`-Attribut angegebenen Dateinamen.
    >   - Wenn der Header eine Disposition von `inline` angibt, priorisiert Chrome und Firefox das Attribut und behandelt es als Download. Ältere Firefox-Versionen (vor 82) priorisieren den Header und zeigen den Inhalt inline.

- `href`
  - : Die URL, auf die der Hyperlink verweist. Links sind nicht auf HTTP-basierte URLs beschränkt - sie können jedes URL-Schema verwenden, das von Browsern unterstützt wird:
    - Telefonnummern mit `tel:`-URLs
    - E-Mail-Adressen mit `mailto:`-URLs
    - SMS-Nachrichten mit `sms:`-URLs
    - Ausführbarer Code mit [`javascript:`-URLs](/de/docs/Web/URI/Reference/Schemes/javascript)
    - Während Webbrowser möglicherweise andere URL-Schemata nicht unterstützen, können Websites mit [`registerProtocolHandler()`](/de/docs/Web/API/Navigator/registerProtocolHandler) dies.

    Außerdem können andere URL-Funktionen spezifische Teile der Ressource lokalisieren, darunter:
    - Abschnitte einer Seite mit Dokumentfragmenten
    - Bestimmte Textabschnitte mit [Textfragmenten](/de/docs/Web/URI/Reference/Fragment/Text_fragments)
    - Abschnitte von Mediendateien mit Medienfragmenten

- `hreflang`
  - : Deutet auf die menschliche Sprache der verlinkten URL hin. Keine integrierte Funktionalität. Erlaubte Werte sind die gleichen wie das [globale `lang`-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/lang).
- `interestfor` {{experimental_inline}} {{non-standard_inline}}
  - : Definiert das `<a>`-Element als **Interessenaufrufer**. Sein Wert ist die `id` des Ziel-Elements, das in irgendeiner Weise beeinflusst wird (normalerweise angezeigt oder verborgen), wenn Interesse am Aufrufer-Element gezeigt oder verloren wird (zum Beispiel durch Schweben/Entfernen des Schwebens oder Fokussieren/Verlust des Fokus). Weitere Details und Beispiele finden Sie unter [Verwendung von Interessenaufrufern](/de/docs/Web/API/Popover_API/Using_interest_invokers).
- `ping`
  - : Eine durch Leerzeichen getrennte Liste von URLs. Wenn der Link gefolgt wird, sendet der Browser {{HTTPMethod("POST")}}-Anfragen mit dem Körper `PING` an die URLs. Typischerweise zum Tracking.
- `referrerpolicy`
  - : Wie viel vom [Referrer](/de/docs/Web/HTTP/Reference/Headers/Referer) gesendet werden soll, wenn der Link gefolgt wird.
    - `no-referrer`: Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}}-Header wird nicht an {{Glossary("origin", "Ursprung")}} ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`: Der versendete Referrer wird auf den Ursprung der verweisenden Seite beschränkt: sein [Schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`: Der an andere Ursprünge gesendete Referrer wird auf das Schema, den Host und den Port beschränkt. Navigationen auf demselben Ursprung enthalten weiterhin den Pfad.
    - `same-origin`: Ein Referrer wird für {{Glossary("Same-origin_policy", "gleichen Ursprung")}} gesendet, aber Cross-Origin-Anfragen enthalten keine Referrer-Informationen.
    - `strict-origin`: Nur den Ursprung des Dokuments als Referrer senden, wenn das Sicherheitsprotokollniveau gleich bleibt (HTTPS→HTTPS), aber nicht an ein weniger sicheres Ziel senden (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard): Eine vollständige URL senden, wenn eine gleiche-Ursprung-Anfrage durchgeführt wird, nur den Ursprung senden, wenn das Sicherheitsprotokollniveau gleich bleibt (HTTPS→HTTPS), und keinen Header an ein weniger sicheres Ziel senden (HTTPS→HTTP).
    - `unsafe-url`: Der Referrer wird den Ursprung _und_ den Pfad (aber nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), das [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder den [Benutzernamen](/de/docs/Web/API/HTMLAnchorElement/username)) enthalten. **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge weitergibt.

- [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)
  - : Die Beziehung der verlinkten URL als durch Leerzeichen getrennte Link-Typen.
- `target`
  - : Wo die verlinkte URL anzeigen, als der Name für einen _Browsing-Kontext_ (ein Tab, Fenster oder {{HTMLElement("iframe")}}). Die folgenden Schlüsselwörter haben spezielle Bedeutungen für den Ort, an dem die URL geladen werden soll:
    - `_self`: Der aktuelle Browsing-Kontext. (Standard)
    - `_blank`: Normalerweise ein neuer Tab, aber Benutzer können Browser so konfigurieren, dass ein neues Fenster geöffnet wird.
    - `_parent`: Der übergeordnete Browsing-Kontext des aktuellen. Wenn kein übergeordneter, verhält es sich wie `_self`.
    - `_top`: Der oberste Browsing-Kontext. Konkret bedeutet dies der "höchste" Kontext, der ein Vorfahr des aktuellen ist. Wenn keine Vorfahren vorhanden sind, verhält es sich wie `_self`.
    - `_unfencedTop`: Ermöglicht eingebetteten [fenced frames](/de/docs/Web/API/Fenced_frame_API) die Navigation im obersten Frame (d.h. das Überschreiten der Wurzel des fenced frame im Gegensatz zu anderen reservierten Zielen). Beachten Sie, dass die Navigation immer noch erfolgreich ist, wenn dies außerhalb eines fenced frame-Kontextes verwendet wird, aber es wird nicht wie ein reserviertes Schlüsselwort wirken.

    > [!NOTE]
    > Das Einstellen von `target="_blank"` auf `<a>`-Elementen bietet implizit das gleiche `rel`-Verhalten wie das Einstellen von [`rel="noopener"`](/de/docs/Web/HTML/Reference/Attributes/rel/noopener), was nicht `window.opener` setzt.

- `type`
  - : Gibt das Format der verlinkten URL mit einem {{Glossary("MIME_type", "MIME-Typ")}} an. Keine integrierte Funktionalität.

### Veraltete Attribute

- `charset` {{Deprecated_Inline}}
  - : Hinweis auf die {{Glossary("character_encoding", "Zeichenkodierung")}} der verlinkten URL.

    > [!NOTE]
    > Dieses Attribut ist veraltet und **sollte von Autoren nicht verwendet werden**. Verwenden Sie stattdessen den HTTP {{HTTPHeader("Content-Type")}}-Header auf der verlinkten URL.

- `coords` {{Deprecated_Inline}}
  - : Wird mit [dem `shape`-Attribut](#shape) verwendet. Eine durch Komma getrennte Liste von Koordinaten.
- `name` {{Deprecated_Inline}}
  - : War erforderlich, um einen möglichen Zielort auf einer Seite zu definieren. In HTML 4.01 konnten `id` und `name` beide auf `<a>` verwendet werden, solange sie identische Werte hatten.

    > [!NOTE]
    > Verwenden Sie stattdessen das globale Attribut [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id).

- `rev` {{Deprecated_Inline}}
  - : Gab einen umgekehrten Link an; das Gegenteil des [`rel` Attributs](#rel). Veraltet, weil es sehr verwirrend ist.
- `shape` {{Deprecated_Inline}}
  - : Die Form des Hyperlink-Bereichs in einer Bildkarte.

    > [!NOTE]
    > Verwenden Sie stattdessen das {{HTMLElement("area")}}-Element für Bildkarten.

## Barrierefreiheit

### Starker Linktext

**Der Inhalt innerhalb eines Links sollte angeben, wohin der Link führt**, selbst aus dem Kontext heraus.

#### Unzugänglicher, schwacher Linktext

Ein leider häufiger Fehler ist es, nur die Wörter "Klicken Sie hier" oder "hier" zu verlinken:

```html example-bad
<p>Learn more about our products <a href="/products">here</a>.</p>
```

##### Ergebnis

{{EmbedLiveSample('Inaccessible, weak link text', '100%', '50')}}

#### Zugänglicher, starker Linktext

Zum Glück ist dies leicht zu beheben, und es ist tatsächlich kürzer als die unzugängliche Version!

```html example-good
<p>Learn more <a href="/products">about our products</a>.</p>
```

##### Ergebnis

{{EmbedLiveSample('Accessible, strong link text', '100%', '50')}}

Hilfssoftware hat Abkürzungen, um alle Links auf einer Seite aufzulisten. Aber starker Linktext kommt allen Benutzern zugute — die Abkürzung "Alle Links auflisten" ahmt nach, wie sehende Benutzer schnell Seiten durchsuchen.

### onclick-Ereignisse

Ankerelemente werden oft als gefälschte Schaltflächen missbraucht, indem ihr `href` auf `#` oder [`javascript:void(0)`](/de/docs/Web/URI/Reference/Schemes/javascript) gesetzt wird, um zu verhindern, dass die Seite aktualisiert wird, und dann auf ihre `click`-Ereignisse geachtet wird.

Diese falschen `href`-Werte verursachen unerwartetes Verhalten beim Kopieren/Verschieben von Links, Öffnen von Links in einem neuen Tab/Fenster, beim Setzen von Lesezeichen oder wenn JavaScript geladen wird, Fehler auftreten oder deaktiviert ist. Sie vermitteln auch falsche Semantik an unterstützende Technologien wie Bildschirmleser.

Verwenden Sie stattdessen {{HTMLElement("button")}}. Im Allgemeinen **sollten Sie nur einen Hyperlink für die Navigation zu einer echten URL verwenden**.

### Externe Links und Verlinkung zu nicht-HTML-Ressourcen

Links, die in einem neuen Tab/Fenster über `target="_blank"` geöffnet werden, oder Links, die auf eine Downloaddatei verweisen, sollten angeben, was beim Folgen des Links passieren wird.

Personen mit Sehbehinderungen, die mit Hilfe von Bildschirmleser-Technologie navigieren, oder mit kognitiven Bedenken könnten verwirrt sein, wenn unerwartet ein neuer Tab, ein neues Fenster oder eine Anwendung geöffnet wird. Ältere Bildschirmleser-Software kündigt das Verhalten möglicherweise nicht einmal an.

#### Link, der einen neuen Tab/ein neues Fenster öffnet

```html
<a target="_blank" href="https://www.wikipedia.org">
  Wikipedia (opens in new tab)
</a>
```

##### Ergebnis

{{EmbedLiveSample('Link that opens a new tab/window')}}

#### Link zu einer nicht-HTML-Ressource

Wenn ein Symbol verwendet wird, um das Linkverhalten zu signalisieren, stellen Sie sicher, dass es ein [`alt`-Attribut](/de/docs/Web/HTML/Reference/Elements/img#alt) hat, um seinen Zweck zu beschreiben. Falls das Symbol fehlt, wird der Inhalt des `alt`-Attributs das Linkverhalten dennoch vermitteln.

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
- [MDN / Verständnis von WCAG, Richtlinie 3.2](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
- [G200: Öffnen neuer Fenster und Tabs von einem Link nur, wenn notwendig](https://www.w3.org/TR/WCAG20-TECHS/G200.html)
- [G201: Nutzern eine Warnung geben, wenn ein neues Fenster geöffnet wird](https://www.w3.org/TR/WCAG20-TECHS/G201.html)

### Sprung-Links

Ein **Sprung-Link** ist ein Link, der so früh wie möglich im {{HTMLElement("body")}}-Inhalt platziert ist und auf den Beginn des Hauptinhalts der Seite verweist. Normalerweise versteckt CSS einen Sprung-Link außerhalb des Bildschirms, bis er fokussiert wird.

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

{{EmbedLiveSample('Skip links')}}

Sprung-Links ermöglichen es Tastaturbenutzern, Inhalte zu überspringen, die auf mehreren Seiten wiederholt werden, wie z.B. die Kopfzeilen-Navigation.

Sprung-Links sind besonders nützlich für Personen, die mit Hilfe von unterstützender Technologie wie Schaltersteuerung, Sprachbefehl oder Mundstöcken/ Kopfstäben navigieren, bei denen das Bewegen durch repetitive Links mühsam sein kann.

- [WebAIM: "Navigation überspringen"-Links](https://webaim.org/techniques/skipnav/)
- [Anleitung: Verwenden von "Navigation überspringen"-Links](https://www.a11yproject.com/posts/skip-nav-links/)
- [MDN / Verständnis von WCAG, Richtlinie 2.4 Erläuterungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.4_%e2%80%94_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Verständnis des Erfolgskriteriums 2.4.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)

### Größe und Nähe

#### Größe

Interaktive Elemente, wie Links, sollten ein ausreichend großes Gebiet bieten, um sie einfach aktivieren zu können. Dies hilft einer Vielzahl von Menschen, einschließlich derjenigen mit motorischen Kontrollproblemen und derjenigen, die ungenaue Eingaben wie Touchscreens verwenden. Eine Mindestgröße von 44×44 [CSS-Pixel] (https://w3c.github.io/wcag/guidelines/22/#dfn-css-pixels) wird empfohlen.

Nur Text-Links in Prosa-Inhalten sind von dieser Anforderung ausgenommen, aber es ist trotzdem eine gute Idee, sicherzustellen, dass genug Text verknüpft ist, um leicht aktivierbar zu sein.

- [Verständnis des Erfolgskriteriums 2.5.5: Zielgröße](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Zielgröße und 2.5.5](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Schneller Test: Große Touch-Ziele](https://www.a11yproject.com/posts/large-touch-targets/)

#### Nähe

Interaktive Elemente, wie Links, die in visueller Nähe platziert sind, sollten Platz zur Trennung haben. Die Abstände helfen Personen mit motorischen Kontrollproblemen, die sonst möglicherweise das falsche interaktive Element aktivieren könnten.

Abstände können mit CSS-Eigenschaften wie {{CSSxRef("margin")}} erstellt werden.

- [Handzittern und das Problem mit großen Tasten](https://axesslab.com/hand-tremors/)

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

Für Details zu `mailto:`-URLs, wie das Einschließen eines Betreffs oder eines Textkörpers, siehe [E-Mail-Links](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links#email_links) oder {{RFC(6068)}}.

### Verlinkung zu Telefonnummern

```html
<a href="tel:+49.157.0156">+49 157 0156</a>
<a href="tel:+1(800)555-0123">(800) 555-0123</a>
```

#### Ergebnis

{{EmbedLiveSample('Linking to telephone numbers')}}

`tel:`-Linkverhalten variiert je nach Gerätefähigkeit:

- Mobiltelefone wählen die Nummer automatisch.
- Die meisten Betriebssysteme haben Programme, die Anrufe tätigen können, wie Skype oder FaceTime.
- Websites können mit [`registerProtocolHandler`](/de/docs/Web/API/Navigator/registerProtocolHandler) Anrufe tätigen, wie `web.skype.com`.
- Andere Verhaltensweisen umfassen das Speichern der Nummer in Kontakten oder das Senden der Nummer an ein anderes Gerät.

Sehen Sie sich {{RFC(3966)}} für Syntax, zusätzliche Funktionen und andere Details über das `tel:`-URL-Schema an.

### Verwendung des Download-Attributs, um ein `<canvas>` als PNG zu speichern

Um den Inhalt eines {{HTMLElement("canvas")}}-Elementes als Bild zu speichern, können Sie einen Link erstellen, bei dem das `href` die Canvas-Daten als `data:`-URL ist, die mit JavaScript erstellt wird, und das `download`-Attribut den Dateinamen für die heruntergeladene PNG-Datei angibt:

#### Beispiel-Malprogramm mit Speichern-Link

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

{{EmbedLiveSample('Example_painting_app_with_save_link', '100%', '400')}}

## Sicherheit und Datenschutz

`<a>`-Elemente können Konsequenzen für die Sicherheit und den Datenschutz der Benutzer haben. Siehe [`Referrer`-Header: Datenschutz- und Sicherheitsbedenken](/de/docs/Web/Privacy/Guides/Referer_header:_privacy_and_security_concerns) für Informationen.

Die Verwendung von `target="_blank"` ohne [`rel="noreferrer"`](/de/docs/Web/HTML/Reference/Attributes/rel/noreferrer) und [`rel="noopener"`](/de/docs/Web/HTML/Reference/Attributes/rel/noopener) macht die Website anfällig für Angriffe durch die [`window.opener`](/de/docs/Web/API/Window/opener)-API-Nutzung, obwohl zu beachten ist, dass in neueren Browserversionen die Einstellung von `target="_blank"` implizit den gleichen Schutz bietet wie die Einstellung von `rel="noopener"`. Sehen Sie [Browser-Kompatibilität](#browser-kompatibilität) für Details.

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
          >Phrasen-Inhalt</a
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
        >, außer dass kein Nachfahre
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#interactive_content"
          >interaktiver Inhalt</a
        > oder ein
        <code>&lt;a&gt;</code>-Element sein darf, und kein Nachfahre ein
        spezifiziertes
        <a
          href="/de/docs/Web/HTML/Reference/Global_attributes/tabindex"
          >tabindex</a
        >-Attribut haben darf.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl Start- als auch End-Tags sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Fluss-Inhalt</a
        > akzeptiert, jedoch keine anderen <code>&lt;a&gt;</code>-Elemente.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/link_role"><code>link</code></a>, wenn das <code>href</code>-Attribut
        vorhanden ist, ansonsten
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
- {{CSSxRef(":link")}} ist eine CSS-Pseudoklasse, die `<a>`-Elemente mit URL im `href`-Attribut matcht, die vom Benutzer noch nicht besucht wurde.
- {{CSSxRef(":visited")}} ist eine CSS-Pseudoklasse, die `<a>`-Elemente mit URL im `href`-Attribut matcht, die vom Benutzer in der Vergangenheit besucht wurde.
- {{CSSxRef(":any-link")}} ist eine CSS-Pseudoklasse, die `<a>`-Elemente mit `href`-Attribut matcht.
- [Textfragmente](/de/docs/Web/URI/Reference/Fragment/Text_fragments) sind Anweisungen des Benutzeragenten, die URLs hinzugefügt werden und es Inhaltsautoren ermöglichen, auf speziellen Text auf einer Seite zu verlinken, ohne dass IDs erforderlich sind.
