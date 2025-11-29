---
title: "<a>: Das Ankerelement"
slug: Web/HTML/Reference/Elements/a
l10n:
  sourceCommit: a1765c2cad20118be0dad322d3548908787b5791
---

Das **`<a>`**-[HTML](/de/docs/Web/HTML)-Element (oder Anker-Element) erstellt mit [seinem `href`-Attribut](#href) einen Hyperlink zu Webseiten, Dateien, E-Mail-Adressen, Positionen auf derselben Seite oder zu allem, was eine URL adressieren kann.

Der Inhalt innerhalb jedes `<a>` sollte das Ziel des Links anzeigen. Wenn das `href`-Attribut vorhanden ist, wird das Drücken der Eingabetaste, während das `<a>`-Element fokussiert ist, dieses aktivieren.

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

    Der Browser speichert die Quelldaten, die mit der navigationsbasierten Attributionsquelle verbunden sind (wie im Header der {{httpheader("Attribution-Reporting-Register-Source")}}-Antwort angegeben), wenn der Benutzer auf den Link klickt. Weitere Details finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

    Es gibt zwei Versionen dieses Attributs, die Sie einstellen können:
    - Boolean, d.h. nur der Name `attributionsrc`. Dies gibt an, dass Sie möchten, dass der {{httpheader("Attribution-Reporting-Eligible")}}-Header an denselben Server gesendet wird, auf den das `href`-Attribut verweist. Dies ist in Ordnung, wenn Sie die Registrierung der Attributionsquelle auf demselben Server behandeln.
    - Wert, der eine oder mehrere URLs enthält, zum Beispiel:

      ```html
      attributionsrc="https://a.example/register-source
      https://b.example/register-source"
      ```

      Dies ist nützlich in Fällen, in denen die angeforderte Ressource nicht auf einem Server liegt, den Sie kontrollieren, oder wenn Sie die Registrierung der Attributionsquelle auf einem anderen Server behandeln möchten. In diesem Fall können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcenanforderung erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header zusätzlich zum Ursprungsort der Ressource an die in `attributionsrc` angegebenen URLs gesendet. Diese URLs können dann mit dem {{httpheader("Attribution-Reporting-Register-Source")}}-Header antworten, um die Registrierung abzuschließen.

      > [!NOTE]
      > Das Angeben mehrerer URLs bedeutet, dass mehrere Attributionsquellen auf derselben Funktion registriert werden können. Sie könnten beispielsweise verschiedene Kampagnen haben, deren Erfolg Sie messen möchten und die das Generieren verschiedener Berichte zu unterschiedlichen Daten beinhalten.

    `<a>`-Elemente können nicht als Attributionsauslöser, sondern nur als Quellen verwendet werden.

- `download`
  - : Veranlasst den Browser, die verlinkte URL als Download zu behandeln. Kann mit oder ohne einen `filename`-Wert verwendet werden:
    - Ohne Wert schlägt der Browser einen Dateinamen/Erweiterung vor, der aus verschiedenen Quellen generiert wird:
      - Der {{HTTPHeader("Content-Disposition")}}-HTTP-Header
      - Das letzte Segment im URL-[Pfad](/de/docs/Web/API/URL/pathname)
      - Der {{Glossary("MIME_type", "Medientyp")}} (aus dem {{HTTPHeader("Content-Type")}}-Header, dem Anfang einer [`data:`-URL](/de/docs/Web/URI/Reference/Schemes/data) oder [`Blob.type`](/de/docs/Web/API/Blob/type) für eine [`blob:`-URL](/de/docs/Web/URI/Reference/Schemes/blob))

    - `filename`: Wenn ein Wert definiert ist, wird dieser als Dateiname vorgeschlagen. `/` und `\` Zeichen werden in Unterstriche (`_`) umgewandelt. Dateisysteme können andere Zeichen in Dateinamen verbieten, daher passen Browser den vorgeschlagenen Namen gegebenenfalls an.

    > [!NOTE]
    >
    > - `download` funktioniert nur für [same-origin-URLs](/de/docs/Web/Security/Defenses/Same-origin_policy) oder die `blob:` und `data:` Schemes.
    > - Wie Browser Downloads behandeln, hängt vom Browser, den Benutzereinstellungen und anderen Faktoren ab. Der Benutzer könnte aufgefordert werden, bevor ein Download beginnt, oder die Datei könnte automatisch gespeichert oder automatisch geöffnet werden, entweder in einer externen Anwendung oder im Browser selbst.
    > - Wenn der `Content-Disposition`-Header unterschiedliche Informationen vom `download`-Attribut enthält, können die resultierenden Verhaltensweisen variieren:
    >   - Wenn der Header einen `filename` angibt, hat er Vorrang vor einem im `download`-Attribut angegebenen Dateinamen.
    >   - Wenn der Header eine Disposition von `inline` angibt, priorisieren Chrome und Firefox das Attribut und behandeln es als Download. Alte Firefox-Versionen (vor Version 82) priorisieren den Header und zeigen den Inhalt inline an.

- `href`
  - : Die URL, auf die der Hyperlink verweist. Links sind nicht nur auf HTTP-basierte URLs beschränkt — sie können jedes von Browsern unterstützte URL-Schema verwenden:
    - Telefonnummern mit `tel:` URLs
    - E-Mail-Adressen mit `mailto:` URLs
    - SMS-Nachrichten mit `sms:` URLs
    - Ausführbarer Code mit [`javascript:` URLs](/de/docs/Web/URI/Reference/Schemes/javascript)
    - Während Webbrowser möglicherweise keine anderen URL-Schemata unterstützen, können Websites dies mit [`registerProtocolHandler()`](/de/docs/Web/API/Navigator/registerProtocolHandler)

    Zudem können andere URL-Funktionen bestimmte Teile der Ressource lokalisieren, einschließlich:
    - Abschnitte einer Seite mit Dokumentfragmenten
    - Bestimmte Textabschnitte mit [Textfragmenten](/de/docs/Web/URI/Reference/Fragment/Text_fragments)
    - Stücke von Mediendateien mit Medienfragmenten

- `hreflang`
  - : Gibt einen Hinweis auf die menschliche Sprache der verlinkten URL. Keine eingebaute Funktionalität. Erlaubte Werte sind die gleichen wie [das globale `lang`-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/lang).
- `ping`
  - : Eine durch Leerzeichen getrennte Liste von URLs. Wenn der Link verfolgt wird, sendet der Browser {{HTTPMethod("POST")}}-Anfragen mit dem Körper `PING` an die URLs. Typischerweise für das Tracking.
- `referrerpolicy`
  - : Wie viel von der [Referrer](/de/docs/Web/HTTP/Reference/Headers/Referer) zu senden ist, wenn dem Link gefolgt wird.
    - `no-referrer`: Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}}-Header wird nicht an {{Glossary("origin", "Ursprünge")}} ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`: Der gesendete Referrer wird auf den Ursprung der verweisenden Seite beschränkt: ihr [Schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`: Der Referrer, der an andere Ursprünge gesendet wird, ist auf das Schema, den Host und den Port beschränkt. Navigationen im selben Ursprung enthalten weiterhin den Pfad.
    - `same-origin`: Ein Referrer wird für {{Glossary("Same-origin_policy", "gleichartigen Ursprung")}} gesendet, aber bereichsübergreifende Anfragen enthalten keine Referrer-Informationen.
    - `strict-origin`: Nur den Ursprung des Dokuments als Referrer senden, wenn die Sicherheit des Protokolls gleich bleibt (HTTPS→HTTPS), aber nicht an ein weniger sicheres Ziel senden (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (standardmäßig): Senden einer vollständigen URL, wenn eine Anfrage innerhalb des gleichen Ursprungs durchgeführt wird, nur den Ursprung senden, wenn die Sicherheit des Protokolls gleich bleibt (HTTPS→HTTPS), und keinen Header an ein weniger sicheres Ziel senden (HTTPS→HTTP).
    - `unsafe-url`: Der Referrer enthält den Ursprung _und_ den Pfad (aber nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), das [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder den [Benutzernamen](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge weiterleitet.

- [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)
  - : Die Beziehung der verlinkten URL als durch Leerzeichen getrennte Linktypen.
- `target`
  - : Wo die verlinkte URL angezeigt werden soll, als der Name eines _Surfkontextes_ (ein Tab, Fenster oder {{HTMLElement("iframe")}}). Die folgenden Schlüsselwörter haben spezielle Bedeutungen, wo die URL geladen werden soll:
    - `_self`: Der aktuelle Surfkontext. (Standard)
    - `_blank`: Normalerweise ein neuer Tab, aber Benutzer können Browser so konfigurieren, dass stattdessen ein neues Fenster geöffnet wird.
    - `_parent`: Der übergeordnete Surfkontext des aktuellen. Wenn kein Elternteil vorhanden ist, verhält sich wie `_self`.
    - `_top`: Der oberste Surfkontext. Genauer gesagt, dies bedeutet der "höchste" Kontext, der ein Vorfahr des aktuellen ist. Wenn keine Vorfahren vorhanden sind, verhält sich wie `_self`.
    - `_unfencedTop`: Ermöglicht eingebetteten [eingezäunten Frames](/de/docs/Web/API/Fenced_frame_API), das Top-Level-Frame zu navigieren (d.h. über die Wurzel des eingezäunten Rahmens hinaus zu traversieren, im Gegensatz zu anderen reservierten Zielen). Beachten Sie, dass die Navigation immer noch erfolgreich sein wird, wenn dies außerhalb eines eingezäunten Frame-Kontexts verwendet wird, aber es wird nicht wie ein reserviertes Schlüsselwort handeln.

    > [!NOTE]
    > Das Setzen von `target="_blank"` auf `<a>`-Elementen bietet implizit dasselbe `rel`-Verhalten wie das Setzen von [`rel="noopener"`](/de/docs/Web/HTML/Reference/Attributes/rel/noopener), das `window.opener` nicht setzt.

- `type`
  - : Gibt einen Hinweis auf das Format der verlinkten URL mit einem {{Glossary("MIME_type", "MIME-Typ")}}. Keine eingebaute Funktionalität.

### Veraltete Attribute

- `charset` {{Deprecated_Inline}}
  - : Gab einen Hinweis auf die {{Glossary("character_encoding", "Zeichenkodierung")}} der verlinkten URL.

    > [!NOTE]
    > Dieses Attribut ist veraltet und **sollte von Autoren nicht verwendet werden**. Verwenden Sie stattdessen den HTTP-{{HTTPHeader("Content-Type")}}-Header auf der verlinkten URL.

- `coords` {{Deprecated_Inline}}
  - : Wurde mit [dem `shape`-Attribut](#shape) verwendet. Eine kommagetrennte Liste von Koordinaten.
- `name` {{Deprecated_Inline}}
  - : War erforderlich, um einen möglichen Zielort auf einer Seite zu definieren. In HTML 4.01 konnten `id` und `name` beide auf `<a>` verwendet werden, solange sie identische Werte hatten.

    > [!NOTE]
    > Verwenden Sie stattdessen das globale Attribut [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id).

- `rev` {{Deprecated_Inline}}
  - : Spezifizierte einen umgekehrten Link; das Gegenteil von [dem `rel`-Attribut](#rel). Veraltet, da sehr verwirrend.
- `shape` {{Deprecated_Inline}}
  - : Die Form des Hyperlink-Bereichs in einer Bildkarte.

    > [!NOTE]
    > Verwenden Sie stattdessen das {{HTMLElement("area")}}-Element für Bildkarten.

## Barrierefreiheit

### Starker Link-Text

**Der Inhalt innerhalb eines Links sollte anzeigen, wohin der Link führt**, auch außerhalb seines Kontexts.

#### Nicht zugänglicher, schwacher Link-Text

Ein leider häufiger Fehler ist, nur die Wörter "klicken Sie hier" oder "hier" zu verlinken:

```html example-bad
<p>Learn more about our products <a href="/products">here</a>.</p>
```

##### Ergebnis

{{EmbedLiveSample('Nicht zugänglicher, schwacher Link-Text', '100%', '50')}}

#### Zugänglicher, starker Link-Text

Glücklicherweise ist dies einfach zu beheben, und es ist tatsächlich kürzer als die nicht zugängliche Version!

```html example-good
<p>Learn more <a href="/products">about our products</a>.</p>
```

##### Ergebnis

{{EmbedLiveSample('Zugänglicher, starker Link-Text', '100%', '50')}}

Assistierende Software bietet Abkürzungen, um alle Links auf einer Seite aufzulisten. Dennoch profitieren alle Nutzer von starkem Link-Text — die "Liste aller Links"-Abkürzung emuliert, wie sehende Nutzer Seiten schnell scannen.

### onclick-Ereignisse

Ankerelemente werden oft als gefälschte Schaltflächen missbraucht, indem ihr `href` auf `#` oder [`javascript:void(0)`](/de/docs/Web/URI/Reference/Schemes/javascript) gesetzt wird, um zu verhindern, dass die Seite aktualisiert wird, und dann auf ihre `click`-Ereignisse zu hören.

Diese gefälschten `href`-Werte verursachen unerwartetes Verhalten beim Kopieren/Verschieben von Links, beim Öffnen von Links in einem neuen Tab/Fenster, beim Lesezeichen setzen oder wenn JavaScript geladen wird, Fehler auftreten oder deaktiviert ist. Sie vermitteln auch falsche Semantik an assistive Technologien, wie Screenreader.

Verwenden Sie stattdessen ein {{HTMLElement("button")}}. Im Allgemeinen **sollten Sie nur einen Hyperlink zur Navigation zu einer echten URL verwenden**.

### Externe Links und Links zu Nicht-HTML-Ressourcen

Links, die in einem neuen Tab/Fenster über `target="_blank"` geöffnet werden, oder Links, die auf eine Download-Datei verweisen, sollten anzeigen, was passieren wird, wenn dem Link gefolgt wird.

Personen mit Sehbehinderungen, die mit Hilfe von Vorlesetechnologien navigieren, oder mit kognitiven Herausforderungen können verwirrt sein, wenn sich unerwartet ein neuer Tab, ein Fenster oder eine Anwendung öffnet. Ältere Screenreader-Software kündigt das Verhalten möglicherweise nicht einmal an.

#### Link, der einen neuen Tab/ein neues Fenster öffnet

```html
<a target="_blank" href="https://www.wikipedia.org">
  Wikipedia (opens in new tab)
</a>
```

##### Ergebnis

{{EmbedLiveSample('Link, der einen neuen Tab/ein neues Fenster öffnet')}}

#### Link zu einer Nicht-HTML-Ressource

Wenn ein Symbol verwendet wird, um das Linkverhalten zu signalisieren, stellen Sie sicher, dass es ein [`alt`-Attribut](/de/docs/Web/HTML/Reference/Elements/img#alt) besitzt, um seinen Zweck zu beschreiben. Sollte das Symbol fehlen, wird der Inhalt des `alt`-Attributs dennoch das Verhalten des Links vermitteln.

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
- [MDN / Das Verstehen von WCAG, Leitlinie 3.2](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
- [G200: Öffnen neuer Fenster und Tabs von einem Link nur dann, wenn es notwendig ist](https://www.w3.org/TR/WCAG20-TECHS/G200.html)
- [G201: Einem Nutzer eine Vorwarnung geben, wenn ein neues Fenster geöffnet wird](https://www.w3.org/TR/WCAG20-TECHS/G201.html)

### Sprunglinks

Ein **Sprunglink** ist ein Link, der so früh wie möglich im Inhalt des {{HTMLElement("body")}} platziert wird und auf den Beginn des Hauptinhalts der Seite zeigt. Normalerweise wird ein Sprunglink mit CSS ausgeblendet, bis er fokussiert ist.

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

{{EmbedLiveSample('Sprunglinks')}}

Sprunglinks ermöglichen Tastaturbenutzern das Überspringen von Inhalten, die auf mehreren Seiten wiederholt werden, wie z. B. die Kopfzeilennavigation.

Sprunglinks sind besonders nützlich für Menschen, die mit Hilfe von unterstützenden Technologien wie Schaltsteuerungen, Sprachbefehlen oder Mundstöcken/Kopfstiften navigieren, bei denen das Durchlaufen von sich wiederholenden Links mühsam sein kann.

- [WebAIM: "Skip Navigation"-Links](https://webaim.org/techniques/skipnav/)
- [Anleitung: Verwenden von Sprunglinks](https://www.a11yproject.com/posts/skip-nav-links/)
- [MDN / Das Verstehen von WCAG, Leitlinie 2.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.4_%e2%80%94_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Erklärung des Erfolgskriteriums 2.4.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)

### Größe und Nähe

#### Größe

Interaktive Elemente, wie Links, sollten eine ausreichend große Fläche bieten, damit sie leicht aktiviert werden können. Dies hilft einer Vielzahl von Personen, einschließlich derer mit motorischen Problemen und derer, die ungenaue Eingaben wie Touchscreens verwenden. Eine Mindestgröße von 44×44 [CSS-Pixeln](https://w3c.github.io/wcag/guidelines/22/#dfn-css-pixels) wird empfohlen.

Text-only-Links in Prosa-Inhalten sind von dieser Anforderung ausgenommen, aber es ist dennoch eine gute Idee, sicherzustellen, dass genügend Text hyperverlinkt ist, um leicht aktiviert werden zu können.

- [Erklärung des Erfolgskriteriums 2.5.5: Zielgröße](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Zielgröße und 2.5.5](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Schnelltest: Große Touch-Ziele](https://www.a11yproject.com/posts/large-touch-targets/)

#### Nähe

Interaktive Elemente, wie Links, die in enger visueller Nähe platziert sind, sollten Abstand zueinander haben. Der Abstand hilft Menschen mit motorischen Problemen, die andernfalls versehentlich das falsche interaktive Element aktivieren könnten.

Abstand kann mit CSS-Eigenschaften wie {{CSSxRef("margin")}} erstellt werden.

- [Handzittern und das Problem großer Schaltflächen](https://axesslab.com/hand-tremors/)

## Beispiele

### Verlinken einer absoluten URL

#### HTML

```html
<a href="https://www.mozilla.com">Mozilla</a>
```

#### Ergebnis

{{EmbedLiveSample('Verlinken einer absoluten URL')}}

### Verlinken relativer URLs

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

{{EmbedLiveSample('Verlinken relativer URLs')}}

### Verlinken zu einem Element auf derselben Seite

```html
<!-- <a> element links to the section below -->
<p><a href="#Section_further_down">Jump to the heading below</a></p>

<!-- Heading to link to -->
<h2 id="Section_further_down">Section further down</h2>
```

#### Ergebnis

{{EmbedLiveSample('Verlinken zu einem Element auf derselben Seite')}}

> [!NOTE]
> Sie können `href="#top"` oder das leere Fragment (`href="#"`) verwenden, um zum Anfang der aktuellen Seite zu verlinken, [wie in der HTML-Spezifikation definiert](https://html.spec.whatwg.org/multipage/browsing-the-web.html#scroll-to-the-fragment-identifier).

### Verlinken zu einer E-Mail-Adresse

Um Links zu erstellen, die im E-Mail-Programm des Benutzers geöffnet werden, damit sie eine neue Nachricht senden können, verwenden Sie das `mailto:`-Schema:

```html
<a href="mailto:nowhere@mozilla.org">Send email to nowhere</a>
```

#### Ergebnis

{{EmbedLiveSample('Verlinken zu einer E-Mail-Adresse')}}

Weitere Details zu `mailto:`-URLs, z.B. das Einschließen eines Betreffs oder eines Textkörpers, finden Sie in [E-Mail-Links](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links#email_links) oder {{RFC(6068)}}.

### Verlinken zu Telefonnummern

```html
<a href="tel:+49.157.0156">+49 157 0156</a>
<a href="tel:+1(800)555-0123">(800) 555-0123</a>
```

#### Ergebnis

{{EmbedLiveSample('Verlinken zu Telefonnummern')}}

Das Verhalten von `tel:`-Links variiert je nach Gerätekapazitäten:

- Mobilfunkgeräte wählen die Nummer automatisch.
- Die meisten Betriebssysteme haben Programme, die Anrufe tätigen können, wie Skype oder FaceTime.
- Websites können mit [`registerProtocolHandler`](/de/docs/Web/API/Navigator/registerProtocolHandler) Anrufe tätigen, wie `web.skype.com`.
- Andere Verhaltensweisen umfassen das Speichern der Nummer in Kontakten oder das Senden der Nummer an ein anderes Gerät.

Siehe {{RFC(3966)}} für Syntax, zusätzliche Merkmale und andere Details zum `tel:`-URL-Schema.

### Verwendung des download-Attributs, um ein `<canvas>` als PNG zu speichern

Um den Inhalt eines {{HTMLElement("canvas")}}-Elements als Bild zu speichern, können Sie einen Link erstellen, bei dem das `href` die Canvas-Daten als `data:`-URL ist, die mit JavaScript erstellt wurde, und das `download`-Attribut den Dateinamen für die heruntergeladene PNG-Datei angibt:

#### Beispiel-Applikation zum Malen mit Speichern-Link

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

## Sicherheit und Privatsphäre

`<a>`-Elemente können Konsequenzen für die Sicherheit und Privatsphäre der Benutzer haben. Siehe [`Referer` Header: Datenschutz- und Sicherheitsbedenken](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns) für Informationen.

Die Verwendung von `target="_blank"` ohne [`rel="noreferrer"`](/de/docs/Web/HTML/Reference/Attributes/rel/noreferrer) und [`rel="noopener"`](/de/docs/Web/HTML/Reference/Attributes/rel/noopener) macht die Website anfällig für Angriffe durch Ausnutzung der [`window.opener`](/de/docs/Web/API/Window/opener) API, obwohl neuere Browserversionen durch Setzen von `target="_blank"` implizit denselben Schutz wie das Setzen von `rel="noopener"` bieten. Weitere Details finden Sie in der [Browser-Kompatibilität](#browser-kompatibilität).

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
        <code>&lt;a&gt;</code>-Element sein darf, und kein Nachkomme ein spezifiziertes
        <a
          href="/de/docs/Web/HTML/Reference/Global_attributes/tabindex"
          >tabindex</a
        >-Attribut haben darf.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Start- als auch der End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flussinhalt</a
        > akzeptiert, jedoch nicht andere <code>&lt;a&gt;</code>-Elemente.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/link_role"><code>link</code></a> wenn ein <code>href</code>-Attribut
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

- {{HTMLElement("link")}} ist ähnlich zu `<a>`, aber für Metadaten-Hyperlinks, die für Benutzer unsichtbar sind.
- {{CSSxRef(":link")}} ist eine CSS-Pseudoklasse, die `<a>`-Elemente mit URL im `href`-Attribut matcht, das vom Benutzer noch nicht besucht wurde.
- {{CSSxRef(":visited")}} ist eine CSS-Pseudoklasse, die `<a>`-Elemente mit URL im `href`-Attribut matcht, die der Benutzer in der Vergangenheit besucht hat.
- {{CSSxRef(":any-link")}} ist eine CSS-Pseudoklasse, die `<a>`-Elemente mit `href`-Attribut matcht.
- [Textfragmente](/de/docs/Web/URI/Reference/Fragment/Text_fragments) sind Benutzeranweisungen, die URLs hinzugefügt werden, um Inhaltsautoren zu ermöglichen, auf spezifischen Text auf einer Seite zu verlinken, ohne dass IDs erforderlich sind.
