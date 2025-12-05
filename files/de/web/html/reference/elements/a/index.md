---
title: "<a>: Das Anker-Element"
slug: Web/HTML/Reference/Elements/a
l10n:
  sourceCommit: e00212a2a707a57b49b58b37a6a6c978aaef2bbd
---

Das **`<a>`** [HTML](/de/docs/Web/HTML)-Element (oder _Anker_-Element) erzeugt mit [seinem `href`-Attribut](#href) einen Hyperlink zu Webseiten, Dateien, E-Mail-Adressen, Positionen auf derselben Seite oder irgendetwas anderem, das eine URL adressieren kann.

Der Inhalt innerhalb jedes `<a>`-Elements _sollte_ das Ziel des Links angeben. Wenn das `href`-Attribut vorhanden ist, wird das Element durch Drücken der Eingabetaste bei Fokus aktiviert.

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
  - : Gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header sendet. Auf der Serverseite wird dieser verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}}-Headers in der Antwort auszulösen, um eine [navigationsbasierte Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#navigation-based_attribution_sources) zu registrieren.

    Der Browser speichert die Quelldaten, die mit der navigationsbasierten Attributionsquelle verbunden sind (wie im {{httpheader("Attribution-Reporting-Register-Source")}}-Antwort-Header bereitgestellt), wenn der Benutzer auf den Link klickt. Einzelheiten finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

    Es gibt zwei Versionen dieses Attributs, die Sie einstellen können:
    - Boolean, also nur der Name des `attributionsrc`. Dies spezifiziert, dass der {{httpheader("Attribution-Reporting-Eligible")}}-Header an denselben Server gesendet werden soll, auf den das `href`-Attribut verweist. Dies ist in Ordnung, wenn Sie die Registrierung der Attributionsquelle auf demselben Server vornehmen.
    - Wert mit einer oder mehreren URLs, zum Beispiel:

      ```html
      attributionsrc="https://a.example/register-source
      https://b.example/register-source"
      ```

      Dies ist nützlich, wenn die angeforderte Ressource nicht auf einem Server ist, den Sie steuern, oder wenn Sie die Registrierung der Attributionsquelle auf einem anderen Server handhaben möchten. In diesem Fall können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcenanforderung erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header an die in `attributionsrc` angegebenen URL(s) gesendet, zusätzlich zum Ursprungsort der Ressource. Diese URLs können dann mit dem {{httpheader("Attribution-Reporting-Register-Source")}} antworten, um die Registrierung abzuschließen.

      > [!NOTE]
      > Die Angabe mehrerer URLs bedeutet, dass mehrere Attributionsquellen für dasselbe Feature registriert werden können. Sie könnten beispielsweise verschiedene Kampagnen haben, deren Erfolg Sie messen möchten, was das Erstellen verschiedener Berichte zu verschiedenen Daten beinhaltet.

    `<a>`-Elemente können nicht als Attribution-Triggers verwendet werden, nur als Quellen.

- `download`
  - : Veranlasst den Browser, die verlinkte URL als Download zu behandeln. Kann mit oder ohne einen `filename`-Wert verwendet werden:
    - Ohne einen Wert wird der Browser einen Dateinamen/Erweiterung vorschlagen, der aus verschiedenen Quellen generiert wird:
      - Der {{HTTPHeader("Content-Disposition")}}-HTTP-Header
      - Der letzte Abschnitt im URL-[Pfad](/de/docs/Web/API/URL/pathname)
      - Der {{Glossary("MIME_type", "Medientyp")}} (aus dem {{HTTPHeader("Content-Type")}}-Header, dem Beginn einer [`data:`-URL](/de/docs/Web/URI/Reference/Schemes/data) oder [`Blob.type`](/de/docs/Web/API/Blob/type) für eine [`blob:`-URL](/de/docs/Web/URI/Reference/Schemes/blob))

    - `filename`: Die Definition eines Wertes schlägt diesen als Dateinamen vor. `\` und `/`-Zeichen werden in Unterstriche (`_`) umgewandelt. Dateisysteme können andere Zeichen in Dateinamen verbieten, daher passen Browser den vorgeschlagenen Namen bei Bedarf an.

    > [!NOTE]
    >
    > - `download` funktioniert nur für [gleichherkunftsbasierte URLs](/de/docs/Web/Security/Defenses/Same-origin_policy), oder für die `blob:`- und `data:`-Schemata.
    > - Wie Browser Downloads behandeln, variiert je nach Browser, Benutzereinstellungen und anderen Faktoren. Dem Benutzer kann eine Aufforderung angezeigt werden, bevor das Herunterladen gestartet wird, oder die Datei wird automatisch gespeichert oder sie öffnet sich automatisch entweder in einer externen Anwendung oder im Browser selbst.
    > - Wenn der `Content-Disposition`-Header andere Informationen als das `download`-Attribut enthält, kann das resultierende Verhalten unterschiedlich sein:
    >   - Wenn der Header einen `filename` angibt, hat er Vorrang vor einem Dateinamen, der im `download`-Attribut angegeben ist.
    >   - Wenn der Header eine Anordnung von `inline` angibt, priorisieren Chrome und Firefox das Attribut und behandeln es als Download. Ältere Firefox-Versionen (vor Version 82) priorisieren den Header und zeigen den Inhalt inline an.

- `href`
  - : Die URL, auf die der Hyperlink verweist. Links sind nicht auf HTTP-basierte URLs beschränkt — sie können jedes URL-Schema verwenden, das von Browsern unterstützt wird:
    - Telefonnummern mit `tel:`-URLs
    - E-Mail-Adressen mit `mailto:`-URLs
    - SMS-Nachrichten mit `sms:`-URLs
    - Ausführbarer Code mit [`javascript:`-URLs](/de/docs/Web/URI/Reference/Schemes/javascript)
    - Während Webbrowser möglicherweise keine anderen URL-Schemata unterstützen, können Websites dies mit [`registerProtocolHandler()`](/de/docs/Web/API/Navigator/registerProtocolHandler).

    Außerdem können andere URL-Funktionen spezifische Teile der Ressource lokalisieren, einschließlich:
    - Abschnitten einer Seite mit Dokumentfragmenten
    - Bestimmten Textteilen mit [Textfragmenten](/de/docs/Web/URI/Reference/Fragment/Text_fragments)
    - Teilen von Mediendateien mit Medienfragmenten

- `hreflang`
  - : Gibt einen Hinweis auf die menschliche Sprache der verlinkten URL. Keine eingebaute Funktionalität. Erlaubte Werte sind die gleichen wie [das globale `lang`-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/lang).
- `interestfor` {{experimental_inline}}
  - : Definiert das `<a>`-Element als **Interest Invoker**. Sein Wert ist die `id` des Zielelements, das in irgendeiner Weise beeinflusst wird (normalerweise gezeigt oder verborgen), wenn Interesse am Invoker-Element gezeigt oder verloren wird (z. B. durch Überfahren/Entfernen des Zeigers oder Fokussieren/Entfokussieren). Weitere Details und Beispiele finden Sie unter [Using interest invokers](/de/docs/Web/API/Popover_API/Using_interest_invokers).
- `ping`
  - : Eine durch Leerzeichen getrennte Liste von URLs. Wenn der Link gefolgt wird, wird der Browser {{HTTPMethod("POST")}}-Anforderungen mit dem Body `PING` an die URLs senden. Typischerweise zum Verfolgen.
- `referrerpolicy`
  - : Wie viel des [Referrers](/de/docs/Web/HTTP/Reference/Headers/Referer) gesendet werden soll, wenn dem Link gefolgt wird.
    - `no-referrer`: Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{httpheader("Referer")}}-Header wird nicht an {{Glossary("origin", "Ursprünge")}} ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`: Der gesendete Referrer wird auf den Ursprung der verweisenden Seite beschränkt: sein [Schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`: Der Referrer, der an andere Ursprünge gesendet wird, wird auf das Schema, den Host und den Port beschränkt. Navigationen am selben Ursprung enthalten weiterhin den Pfad.
    - `same-origin`: Ein Referrer wird für {{Glossary("Same-origin_policy", "gleichherkunftsbasierte Anfragen")}} gesendet, aber Anfragen an andere Ursprünge enthalten keine Referrer-Informationen.
    - `strict-origin`: Sendet nur den Ursprung des Dokuments als Referrer, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), aber nicht an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard): Sendet eine vollständige URL bei einer gleichherkunftsbasierten Anfrage, sendet nur den Ursprung, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), und sendet keinen Header an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `unsafe-url`: Der Referrer enthält den Ursprung _und_ den Pfad (aber nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder [Benutzername](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge leakt.

- [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)
  - : Die Beziehung der verlinkten URL als durch Leerzeichen getrennte Link-Typen.
- `target`
  - : Gibt an, wo die verlinkte URL angezeigt werden soll, als Name für einen _Browsing-Kontext_ (einen Tab, ein Fenster oder ein {{HTMLElement("iframe")}}). Die folgenden Schlüsselwörter haben spezielle Bedeutungen dafür, wo die URL geladen werden soll:
    - `_self`: Der aktuelle Browsing-Kontext. (Standard)
    - `_blank`: Normalerweise ein neuer Tab, aber Benutzer können Browser so konfigurieren, dass ein neues Fenster geöffnet wird.
    - `_parent`: Der übergeordnete Browsing-Kontext des aktuellen. Wenn kein Elternteil vorhanden ist, verhält es sich wie `_self`.
    - `_top`: Der oberste Browsing-Kontext. Konkret bedeutet dies den "höchsten" Kontext, der ein Vorfahr des aktuellen ist. Wenn keine Vorfahren vorhanden sind, verhält es sich wie `_self`.
    - `_unfencedTop`: Ermöglicht es eingebetteten [fenced frames](/de/docs/Web/API/Fenced_frame_API), das oberste Frame zu navigieren (d.h. über das Wurzel-Frame des fenced frame hinauszugehen, im Gegensatz zu anderen reservierten Zielen). Beachten Sie, dass die Navigation dennoch erfolgreich sein wird, wenn dies außerhalb eines fenced frame-Kontexts verwendet wird, aber es wird nicht wie ein reserviertes Schlüsselwort fungieren.

    > [!NOTE]
    > Das Setzen von `target="_blank"` auf `<a>`-Elementen bietet implizit dasselbe `rel`-Verhalten wie das Setzen von [`rel="noopener"`](/de/docs/Web/HTML/Reference/Attributes/rel/noopener), was nicht `window.opener` setzt.

- `type`
  - : Gibt einen Hinweis auf das Format der verlinkten URL mit einem {{Glossary("MIME_type", "MIME-Typ")}}. Keine eingebaute Funktionalität.

### Veraltete Attribute

- `charset` {{Deprecated_Inline}}
  - : Gab einen Hinweis auf die {{Glossary("character_encoding", "Zeichenkodierung")}} der verlinkten URL.

    > [!NOTE]
    > Dieses Attribut ist veraltet und **sollte von Autoren nicht verwendet werden**. Verwenden Sie den HTTP {{HTTPHeader("Content-Type")}}-Header auf der verlinkten URL.

- `coords` {{Deprecated_Inline}}
  - : Wurde mit [dem `shape`-Attribut](#shape) verwendet. Eine durch Komma getrennte Liste von Koordinaten.
- `name` {{Deprecated_Inline}}
  - : War erforderlich, um einen möglichen Zielort auf einer Seite zu definieren. In HTML 4.01 könnten sowohl `id` als auch `name` auf `<a>` verwendet werden, solange sie identische Werte hatten.

    > [!NOTE]
    > Verwenden Sie stattdessen das globale Attribut [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id).

- `rev` {{Deprecated_Inline}}
  - : Spezifizierte einen reverse Link; das Gegenteil des [rel-Attributs](#rel). Veraltet, da es sehr verwirrend ist.
- `shape` {{Deprecated_Inline}}
  - : Die Form der Hyperlink-Region in einer Image-Map.

    > [!NOTE]
    > Verwenden Sie stattdessen das {{HTMLElement("area")}}-Element für Image-Maps.

## Barrierefreiheit

### Starker Link-Text

**Der Inhalt innerhalb eines Links sollte angeben, wohin der Link führt**, auch außerhalb des Kontexts.

#### Nicht zugänglicher, schwacher Link-Text

Ein leider häufiger Fehler ist es, nur die Wörter "klicken Sie hier" oder "hier" zu verlinken:

```html example-bad
<p>Learn more about our products <a href="/products">here</a>.</p>
```

##### Ergebnis

{{EmbedLiveSample('Nicht zugänglicher, schwacher Link-Text', '100%', '50')}}

#### Zugänglicher, starker Link-Text

Glücklicherweise ist dies ein einfacher Fix, und es ist tatsächlich kürzer als die nicht zugängliche Version!

```html example-good
<p>Learn more <a href="/products">about our products</a>.</p>
```

##### Ergebnis

{{EmbedLiveSample('Zugänglicher, starker Link-Text', '100%', '50')}}

Hilftechnologien haben Abkürzungen, um alle Links auf einer Seite aufzulisten. Starker Link-Text kommt jedoch allen Nutzern zugute — die Abkürzung "alle Links auflisten" emuliert, wie sehende Benutzer Seiten schnell scannen.

### onclick-Ereignisse

Anker-Elemente werden oft als falsche Schaltflächen missbraucht, indem ihr `href` auf `#` oder [`javascript:void(0)`](/de/docs/Web/URI/Reference/Schemes/javascript) gesetzt wird, um ein Aktualisieren der Seite zu verhindern, und dann auf ihre `click`-Ereignisse zu hören.

Diese falschen `href`-Werte führen zu unerwartetem Verhalten beim Kopieren/Draggen von Links, Öffnen von Links in einem neuen Tab/Fenster, Setzen von Lesezeichen oder wenn JavaScript lädt, Fehler verursacht oder deaktiviert ist. Sie vermitteln auch falsche Semantik an Hilfstechnologien wie Bildschirmleseprogrammen.

Verwenden Sie stattdessen ein {{HTMLElement("button")}}. Im Allgemeinen sollten **Sie einen Hyperlink nur für die Navigation zu einer echten URL verwenden**.

### Externe Links und Links zu Nicht-HTML-Ressourcen

Links, die in einem neuen Tab/Fenster öffnen über `target="_blank"`, oder Links, die auf eine Download-Datei verweisen, sollten angeben, was passiert, wenn dem Link gefolgt wird.

Personen, die unter Sehbehinderungen leiden, mit Bildschirmlesetechnologie navigieren oder kognitive Probleme haben, können verwirrt sein, wenn unerwartet ein neuer Tab, ein Fenster oder eine Anwendung geöffnet wird. Ältere Bildschirmleseprogramme geben das Verhalten möglicherweise nicht einmal bekannt.

#### Link, der einen neuen Tab/ein neues Fenster öffnet

```html
<a target="_blank" href="https://www.wikipedia.org">
  Wikipedia (opens in new tab)
</a>
```

##### Ergebnis

{{EmbedLiveSample('Link, der einen neuen Tab/ein neues Fenster öffnet')}}

#### Link zu einer Nicht-HTML-Ressource

Wenn ein Icon verwendet wird, um das Linkverhalten anzuzeigen, stellen Sie sicher, dass es ein [`alt`-Attribut](/de/docs/Web/HTML/Reference/Elements/img#alt) hat, das seinen Zweck beschreibt. Falls das Icon fehlt, wird der Inhalt des `alt`-Attributs dennoch das Verhalten des Links vermitteln.

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
- [MDN / WCAG verstehen, Richtlinie 3.2](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
- [G200: Neue Fenster und Tabs von einem Link öffnen, nur wenn nötig](https://www.w3.org/TR/WCAG20-TECHS/G200.html)
- [G201: Benutzer im Voraus warnen, wenn ein neues Fenster geöffnet wird](https://www.w3.org/TR/WCAG20-TECHS/G201.html)

### Skip-Links

Ein **Skip-Link** ist ein Link, der so früh wie möglich im {{HTMLElement("body")}}-Inhalt platziert wird und auf den Beginn des Hauptinhalts der Seite zeigt. In der Regel wird ein Skip-Link mit CSS aus dem Sichtfeld verborgen, bis er fokussiert wird.

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

Skip-Links ermöglichen es Tastaturbenutzern, Inhalte zu umgehen, die sich über mehrere Seiten wiederholen, wie z. B. Navigationsleisten im Header.

Skip-Links sind besonders nützlich für Personen, die mit der Hilfe von Hilfstechnologien wie Switch-Control, Sprachsteuerung oder Maussticks/Kopfstäben navigieren, bei denen das Bewegen durch wiederholte Links mühsam sein kann.

- [WebAIM: "Navigation überspringen"-Links](https://webaim.org/techniques/skipnav/)
- [Anleitung: Verwenden von Skip-Links](https://www.a11yproject.com/posts/skip-nav-links/)
- [MDN / WCAG verstehen, Richtlinie 2.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.4_%e2%80%94_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Erfolgskriterium 2.4.1 verstehen](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)

### Größe und Nähe

#### Größe

Interaktive Elemente wie Links sollten eine ausreichend große Fläche bieten, damit sie leicht aktiviert werden können. Dies hilft einer Vielzahl von Menschen, einschließlich derjenigen mit motorischen Kontrollproblemen und derjenigen, die ungenaue Eingaben wie Touchscreens verwenden. Eine Mindestgröße von 44×44 [CSS-Pixel](https://w3c.github.io/wcag/guidelines/22/#dfn-css-pixels) wird empfohlen.

Nur aus Text bestehende Links in fließendem Inhalt sind von dieser Anforderung ausgenommen, aber es ist dennoch eine gute Idee, sicherzustellen, dass genug Text verlinkt ist, um leicht aktiviert werden zu können.

- [Erfolgskriterium 2.5.5: Zielgröße verstehen](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Zielgröße und 2.5.5](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Schnelltest: Große Berührungsziele](https://www.a11yproject.com/posts/large-touch-targets/)

#### Nähe

Interaktive Elemente, wie z. B. Links, die in enger visueller Nähe platziert werden, sollten durch Abstände getrennt sein. Abstände helfen Personen mit motorischen Kontrollproblemen, die andernfalls möglicherweise versehentlich das falsche interaktive Element aktivieren.

Abstände können mit CSS-Eigenschaften wie {{CSSxRef("margin")}} erstellt werden.

- [Handtremor und das Riesenknopf-Problem](https://axesslab.com/hand-tremors/)

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

Um Links zu erstellen, die im E-Mail-Programm des Benutzers geöffnet werden, um eine neue Nachricht zu senden, verwenden Sie das `mailto:`-Schema:

```html
<a href="mailto:nowhere@mozilla.org">Send email to nowhere</a>
```

#### Ergebnis

{{EmbedLiveSample('Verlinkung zu einer E-Mail-Adresse')}}

Einzelheiten zu `mailto:`-URLs, wie z. B. das Hinzufügen eines Betreffs oder Inhalts, finden Sie unter [E-Mail-Links](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links#email_links) oder {{RFC(6068)}}.

### Verlinkung zu Telefonnummern

```html
<a href="tel:+49.157.0156">+49 157 0156</a>
<a href="tel:+1(800)555-0123">(800) 555-0123</a>
```

#### Ergebnis

{{EmbedLiveSample('Verlinkung zu Telefonnummern')}}

Das `tel:`-Link-Verhalten variiert je nach Geräteleistung:

- Mobilgeräte wählen die Nummer automatisch.
- Die meisten Betriebssysteme haben Programme, die Anrufe tätigen können, wie Skype oder FaceTime.
- Websites können Anrufe mit [`registerProtocolHandler`](/de/docs/Web/API/Navigator/registerProtocolHandler) tätigen, wie `web.skype.com`.
- Andere Verhaltensweisen umfassen das Speichern der Nummer in Kontakten oder das Senden der Nummer an ein anderes Gerät.

Siehe {{RFC(3966)}} für Syntax, zusätzliche Funktionen und weitere Details zum `tel:`-URL-Schema.

### Verwendung des Download-Attributs zum Speichern eines `<canvas>` als PNG

Um den Inhalt eines {{HTMLElement("canvas")}}-Elements als Bild zu speichern, können Sie einen Link erstellen, bei dem das `href` die Canvas-Daten als eine `data:`-URL ist, die mit JavaScript erstellt wurde, und das `download`-Attribut den Dateinamen für die heruntergeladene PNG-Datei angibt:

#### Beispiel einer Mal-App mit Speichern-Link

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

{{EmbedLiveSample('Beispiel einer Mal-App mit Speichern-Link', '100%', '400')}}

## Sicherheit und Datenschutz

`<a>`-Elemente können Konsequenzen für die Sicherheit und den Datenschutz der Benutzer haben. Informationen finden Sie in den [Datenschutz- und Sicherheitsbedenken des `Referer`-Headers](/de/docs/Web/Privacy/Guides/Referer_header:_privacy_and_security_concerns).

Die Verwendung von `target="_blank"` ohne [`rel="noreferrer"`](/de/docs/Web/HTML/Reference/Attributes/rel/noreferrer) und [`rel="noopener"`](/de/docs/Web/HTML/Reference/Attributes/rel/noopener) macht die Website anfällig für Exploit-Angriffe durch die [`window.opener`](/de/docs/Web/API/Window/opener) API, obwohl in neueren Browserversionen das Setzen von `target="_blank"` implizit denselben Schutz wie das Setzen von `rel="noopener"` bietet. Einzelheiten finden Sie unter [Browser-Kompatibilität](#browser-kompatibilität).

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
          >Interaktiver Inhalt</a
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
        <code>&lt;a&gt;</code>-Element sein darf, und kein Nachkomme ein angegebenes
        <a
          href="/de/docs/Web/HTML/Reference/Global_attributes/tabindex"
          >tabindex</a
        >-Attribut besitzen darf.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl Start- als auch End-Tag sind zwingend erforderlich.</td>
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
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/link_role"><code>link</code></a> wenn <code>href</code>-Attribut vorhanden ist, ansonsten
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
          <li>any</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM-Interface</th>
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
- {{CSSxRef(":link")}} ist ein CSS-Pseudoklasse, das <a>-Elemente mit URL im `href`-Attribut anspricht, die noch nicht vom Benutzer besucht wurden.
- {{CSSxRef(":visited")}} ist ein CSS-Pseudoklasse, das <a>-Elemente mit URL im `href`-Attribut anspricht, die vom Benutzer in der Vergangenheit besucht wurden.
- {{CSSxRef(":any-link")}} ist ein CSS-Pseudoklasse, das <a>-Elemente mit `href`-Attribut anspricht.
- [Textfragmente](/de/docs/Web/URI/Reference/Fragment/Text_fragments) sind Anweisungen des Benutzeragenten, die URLs hinzugefügt werden, um es den Inhaltsautoren zu ermöglichen, spezifische Texte auf einer Seite zu verlinken, ohne dass IDs erforderlich sind.
