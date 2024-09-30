---
title: "<a>: Das Anchor-Element"
slug: Web/HTML/Element/a
l10n:
  sourceCommit: 1a48b6abdd27e168c78edcf04a7a9f6a8e0fdc15
---

{{HTMLSidebar}}

Das **`<a>`** [HTML](/de/docs/Web/HTML) Element (oder _anchor_ Element), mit [seinem `href` Attribut](#href), erstellt einen Hyperlink zu Webseiten, Dateien, E-Mail-Adressen, Positionen auf derselben Seite oder alles andere, was eine URL ansprechen kann.

Der Inhalt innerhalb jedes `<a>` _sollte_ das Ziel des Links anzeigen. Wenn das `href` Attribut vorhanden ist, wird es beim Drücken der Eingabetaste, während das `<a>` Element fokussiert ist, aktiviert.

{{EmbedInteractiveExample("pages/tabbed/a.html", "tabbed-shorter")}}

## Attribute

Die Attribute dieses Elements beinhalten die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `attributionsrc` {{experimental_inline}}

  - : Gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}} Header sendet. Auf der Serverseite wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}} Headers in der Antwort auszulösen, um eine [navigationsbasierte Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#navigation-based_attribution_sources) zu registrieren.

    Der Browser speichert die Quelldaten, die mit der navigationsbasierten Attributionsquelle verbunden sind (wie im {{httpheader("Attribution-Reporting-Register-Source")}} Antwortheader bereitgestellt), wenn der Benutzer auf den Link klickt. Weitere Details finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

    Es gibt zwei Versionen dieses Attributs, die Sie setzen können:

    - Boolean, d.h. nur der Name `attributionsrc`. Dies gibt an, dass Sie möchten, dass der {{httpheader("Attribution-Reporting-Eligible")}} Header an denselben Server gesendet wird, auf den das `href` Attribut verweist. Dies ist akzeptabel, wenn Sie die Registrierung der Attributionsquelle auf demselben Server verwalten.
    - Wert, der eine oder mehrere URLs enthält, zum Beispiel:

      ```html
      attributionsrc="https://a.example/register-source
      https://b.example/register-source"
      ```

      Dies ist nützlich in Fällen, in denen die angeforderte Ressource nicht auf einem von Ihnen kontrollierten Server liegt oder Sie die Registrierung der Attributionsquelle auf einem anderen Server verwalten möchten. In diesem Fall können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcenanforderung erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}} Header an die im `attributionsrc` angegebenen URL(s) zusätzlich zum Ursprungsort der Ressource gesendet. Diese URLs können dann mit dem {{httpheader("Attribution-Reporting-Register-Source")}} antworten, um die Registrierung abzuschließen.

      > [!NOTE]
      > Das Angeben mehrerer URLs bedeutet, dass auf derselben Funktion mehrere Attributionsquellen registriert werden können. Sie können beispielsweise verschiedene Kampagnen haben, deren Erfolg Sie messen möchten, was die Erstellung unterschiedlicher Berichte über verschiedene Daten erfordert.

    `<a>` Elemente können nicht als Attributionstrigger, sondern nur als Quellen verwendet werden.

- `download`

  - : Veranlasst den Browser, die verlinkte URL als Download zu behandeln. Kann mit oder ohne `filename` Wert verwendet werden:

    - Ohne einen Wert schlägt der Browser einen Dateinamen/Erweiterung vor, der aus verschiedenen Quellen generiert wird:

      - Der {{HTTPHeader("Content-Disposition")}} HTTP Header
      - Das endgültige Segment im URL [Pfad](/de/docs/Web/API/URL/pathname)
      - Der [Medientyp](/de/docs/Glossary/MIME_type) (aus dem {{HTTPHeader("Content-Type")}} Header, dem Anfang einer [`data:` URL](/de/docs/Web/URI/Schemes/data) oder [`Blob.type`](/de/docs/Web/API/Blob/type) für eine [`blob:` URL](/de/docs/Web/API/URL/createObjectURL_static))

    - `filename`: Das Definieren eines Wertes schlägt diesen als Dateinamen vor. Zeichen wie `/` und `\` werden in Unterstriche (`_`) umgewandelt. Dateisysteme können andere Zeichen in Dateinamen verbieten, sodass Browser den vorgeschlagenen Namen bei Bedarf anpassen.

    > [!NOTE]
    >
    > - `download` funktioniert nur für [gleichartige URLs](/de/docs/Web/Security/Same-origin_policy) oder die `blob:` und `data:` Schemata.
    > - Wie Browser Downloads behandeln, variiert je nach Browser, Benutzereinstellungen und anderen Faktoren. Der Benutzer kann aufgefordert werden, bevor ein Download startet, oder die Datei kann automatisch gespeichert oder automatisch geöffnet werden, entweder in einer externen Anwendung oder direkt im Browser.
    > - Wenn der `Content-Disposition` Header andere Informationen als das `download` Attribut enthält, kann das resultierende Verhalten unterschiedlich sein:
    >
    >   - Wenn der Header einen `filename` angibt, hat dieser Vorrang vor einem Dateinamen, der im `download` Attribut angegeben ist.
    >   - Wenn der Header eine Disposition von `inline` angibt, geben Chrome und Firefox dem Attribut den Vorrang und behandeln es als Download. Ältere Versionen von Firefox (vor 82) priorisieren den Header und zeigen den Inhalt inline an.

- `href`

  - : Die URL, auf die der Hyperlink verweist. Links sind nicht auf HTTP-basierte URLs beschränkt — sie können jedes URL-Schema verwenden, das von Browsern unterstützt wird:

    - Telefonnummern mit `tel:` URLs
    - E-Mail-Adressen mit `mailto:` URLs
    - SMS-Nachrichten mit `sms:` URLs
    - Ausführbarer Code mit [`javascript:` URLs](/de/docs/Web/URI/Schemes/javascript)
    - Während Webbrowser andere URL-Schemata möglicherweise nicht unterstützen, können Websites dies mit [`registerProtocolHandler()`](/de/docs/Web/API/Navigator/registerProtocolHandler) tun.

    Darüber hinaus können andere URL-Funktionen bestimmte Teile der Ressource lokalisieren, einschließlich:

    - Abschnitte einer Seite mit Dokumentfragmenten
    - Bestimmte Textstellen mit [Textfragmenten](/de/docs/Web/URI/Fragment/Text_fragments)
    - Teile von Mediendateien mit Medienfragmenten

- `hreflang`
  - : Gibt einen Hinweis auf die menschliche Sprache der verlinkten URL. Keine integrierte Funktionalität. Erlaubte Werte sind dieselben wie [das globale `lang` Attribut](/de/docs/Web/HTML/Global_attributes/lang).
- `ping`
  - : Eine durch Leerzeichen getrennte Liste von URLs. Wenn der Link gefolgt wird, sendet der Browser {{HTTPMethod("POST")}} Anfragen mit dem Body `PING` an die URLs. Typischerweise für Tracking.
- `referrerpolicy`

  - : Wie viel des [Referrers](/de/docs/Web/HTTP/Headers/Referer) gesendet werden soll, wenn dem Link gefolgt wird.

    - `no-referrer`: Der {{HTTPHeader("Referer")}} Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}} Header wird nicht an [Ursprünge](/de/docs/Glossary/origin) ohne [TLS](/de/docs/Glossary/TLS) ([HTTPS](/de/docs/Glossary/HTTPS)) gesendet.
    - `origin`: Der gesendete Referrer wird auf den Ursprung der verweisenden Seite beschränkt: sein [Schema](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL), [Host](/de/docs/Glossary/host) und [Port](/de/docs/Glossary/port).
    - `origin-when-cross-origin`: Der an andere Ursprünge gesendete Referrer wird auf das Schema, den Host und den Port beschränkt. Navigationen im gleichen Ursprung enthalten weiterhin den Pfad.
    - `same-origin`: Ein Referrer wird für [den gleichen Ursprung](/de/docs/Glossary/Same-origin_policy) gesendet, aber Anfragen über Ursprünge hinweg enthalten keine Referrer-Informationen.
    - `strict-origin`: Senden Sie nur den Ursprung des Dokuments als Referrer, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), senden Sie ihn jedoch nicht an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard): Senden Sie eine vollständige URL, wenn eine Anfrage im gleichen Ursprung erfolgt, senden Sie nur den Ursprung, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS) und senden Sie keinen Header an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `unsafe-url`: Der Referrer enthält den Ursprung _und_ den Pfad (aber nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder [Benutzername](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge leakt.

- [`rel`](/de/docs/Web/HTML/Attributes/rel)
  - : Die Beziehung der verlinkten URL als leerzeichengetrennte Link-Typen.
- `target`

  - : Wo die verlinkte URL angezeigt werden soll, als der Name für einen _Browsing-Kontext_ (ein Tab, Fenster oder {{HTMLElement("iframe")}}). Die folgenden Schlüsselwörter haben besondere Bedeutungen für den Ort, an dem die URL geladen werden soll:

    - `_self`: Der aktuelle Browsing-Kontext. (Standard)
    - `_blank`: Üblicherweise ein neuer Tab, aber Benutzer können Browser konfigurieren, um stattdessen ein neues Fenster zu öffnen.
    - `_parent`: Der übergeordnete Browsing-Kontext des aktuellen. Wenn kein übergeordnetes Element existiert, verhält sich wie `_self`.
    - `_top`: Der oberste Browsing-Kontext. Genauer gesagt, bedeutet dies den "höchsten" Kontext, der ein Vorfahre des aktuellen ist. Wenn keine Vorfahren existieren, verhält es sich wie `_self`.
    - `_unfencedTop`: Ermöglicht eingebetteten [fenced frames](/de/docs/Web/API/Fenced_frame_API), den Top-Level-Frame zu navigieren (d.h. über die Wurzel des gefenceten Frames hinaus zu wandern, im Gegensatz zu anderen reservierten Zielen). Beachten Sie, dass die Navigation weiterhin erfolgreich sein wird, wenn dies außerhalb eines fenced frame Kontexts verwendet wird, aber es wird nicht wie ein reserviertes Schlüsselwort agieren.

    > [!NOTE]
    > Das Setzen von `target="_blank"` auf `<a>` Elementen bietet implizit dasselbe `rel` Verhalten wie das Setzen von [`rel="noopener"`](/de/docs/Web/HTML/Attributes/rel/noopener), das `window.opener` nicht setzt.

- `type`
  - : Gibt einen Hinweis auf das Format der verlinkten URL mit einem [MIME-Typ](/de/docs/Glossary/MIME_type). Keine eingebaute Funktionalität.

### Veraltete Attribute

- `charset` {{Deprecated_Inline}}

  - : Hieß auf die [Zeichenkodierung](/de/docs/Glossary/character_encoding) der verlinkten URL hin.

    > [!NOTE]
    > Dieses Attribut ist veraltet und **sollte von Autoren nicht verwendet werden**. Verwenden Sie den HTTP {{HTTPHeader("Content-Type")}} Header für die verlinkte URL.

- `coords` {{Deprecated_Inline}}
  - : Wurde mit [dem `shape` Attribut](#shape) verwendet. Eine durch Kommas getrennte Liste von Koordinaten.
- `name` {{Deprecated_Inline}}

  - : War erforderlich, um einen möglichen Zielort auf einer Seite zu definieren. In HTML 4.01 konnten `id` und `name` beide auf `<a>` verwendet werden, solange sie identische Werte hatten.

    > [!NOTE]
    > Verwenden Sie stattdessen das globale Attribut [`id`](/de/docs/Web/HTML/Global_attributes#id).

- `rev` {{Deprecated_Inline}}
  - : Bestimmte einen umgekehrten Link; das Gegenteil des [`rel` Attributs](#rel). Veraltet, da es sehr verwirrend ist.
- `shape` {{Deprecated_Inline}}

  - : Die Form der Hyperlink-Region in einer imagemap.

    > [!NOTE]
    > Verwenden Sie stattdessen das {{HTMLElement("area")}} Element für imagemaps.

## Barrierefreiheit

### Starker Linktext

**Der Inhalt innerhalb eines Links sollte anzeigen, wohin der Link führt**, selbst aus dem Kontext heraus.

#### Unzugänglicher, schwacher Linktext

Ein leider häufiger Fehler ist, nur die Worte "hier klicken" oder "hier" zu verlinken:

```html example-bad
<p>Learn more about our products <a href="/products">here</a>.</p>
```

##### Ergebnis

{{EmbedLiveSample('Inaccessible, weak link text')}}

#### Starker Linktext

Glücklicherweise ist dies leicht zu beheben, und es ist tatsächlich kürzer als die unzugängliche Version!

```html example-good
<p>Learn more <a href="/products">about our products</a>.</p>
```

##### Ergebnis

{{EmbedLiveSample('Strong link text')}}

Assistenzsoftware verfügt über Abkürzungen, um alle Links auf einer Seite aufzulisten. Starker Linktext kommt jedoch allen Benutzern zugute — die Abkürzung "alle Links auflisten" emuliert, wie sehende Benutzer schnell Seiten durchsehen.

### onclick Ereignisse

Ankerelemente werden oft als falsche Tasten missbraucht, indem ihr `href` auf `#` oder [`javascript:void(0)`](/de/docs/Web/URI/Schemes/javascript) gesetzt wird, um zu verhindern, dass die Seite aktualisiert wird, und dann auf ihre `click` Ereignisse achten.

Diese gefälschten `href` Werte verursachen unerwartetes Verhalten beim Kopieren/Ziehen von Links, Öffnen von Links in einem neuen Tab/Fenster, Bookmarken oder wenn JavaScript geladen wird, Fehler auftreten oder deaktiviert ist. Sie vermitteln auch falsche Semantik an Assistenztechnologie, wie Bildschirmleser.

Verwenden Sie stattdessen ein {{HTMLElement("button")}}. Im Allgemeinen **sollten Sie nur einen Hyperlink für die Navigation zu einer echten URL verwenden**.

### Externe Links und Verlinkung zu nicht-HTML-Ressourcen

Links, die in einem neuen Tab/Fenster geöffnet werden via `target="_blank"`, oder Links, die auf eine Download-Datei verweisen, sollten anzeigen, was passiert, wenn der Link gefolgt wird.

Menschen mit Sehbehinderungen, die mit Hilfe von Bildschirmlesertechnologie navigieren, oder mit kognitiven Bedenken, könnten verwirrt sein, wenn sich ein neuer Tab, ein neues Fenster oder eine Anwendung unerwartet öffnet. Ältere Bildschirmlesersoftware kündigt das Verhalten möglicherweise nicht einmal an.

#### Link, der ein neues Tab/Fenster öffnet

```html
<a target="_blank" href="https://www.wikipedia.org">
  Wikipedia (opens in new tab)
</a>
```

##### Ergebnis

{{EmbedLiveSample('Link that opens a new tab/window')}}

#### Link zu einer nicht-HTML-Ressource

```html
<a href="2017-annual-report.ppt">2017 Annual Report (PowerPoint)</a>
```

Wenn ein Symbol verwendet wird, um das Linkverhalten anzuzeigen, stellen Sie sicher, dass es einen [_alt-Text_](/de/docs/Web/HTML/Element/img#alt) hat:

```html
<a target="_blank" href="https://www.wikipedia.org">
  Wikipedia
  <img alt="(opens in new tab)" src="newtab.svg" />
</a>

<a href="2017-annual-report.ppt">
  2017 Annual Report
  <img alt="(PowerPoint file)" src="ppt-icon.svg" />
</a>
```

##### Ergebnis

{{EmbedLiveSample('Link to a non-HTML resource')}}

- [WebAIM: Links und Hypertext - Hypertext Links](https://webaim.org/techniques/hypertext/hypertext_links)
- [MDN / Verständnis WCAG, Leitlinie 3.2](/de/docs/Web/Accessibility/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
- [G200: Öffnen neuer Fenster und Tabs aus einem Link nur, wenn nötig](https://www.w3.org/TR/WCAG20-TECHS/G200.html)
- [G201: Nutzern eine Vorwarnung geben, wenn ein neues Fenster geöffnet wird](https://www.w3.org/TR/WCAG20-TECHS/G201.html)

### Skip-Links

Ein **Skip-Link** ist ein so früh wie möglich im {{HTMLElement("body")}} Inhalt platzierter Link, der auf den Anfang des Hauptinhalts der Seite verweist. Normalerweise versteckt CSS einen Skip-Link außerhalb des Bildschirms, bis er fokussiert wird.

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

Skip-Links ermöglichen Tastaturbenutzern das Überspringen von Inhalten, die sich über mehrere Seiten wiederholen, wie z.B. Header-Navigation.

Skip-Links sind besonders nützlich für Menschen, die mit Hilfe von Assistenztechnologie wie Schaltersteuerung, Sprachbefehl oder Mundstöcken/Kopfstöcken navigieren, wobei das Durchgehen von sich wiederholenden Links mühsam sein kann.

- [WebAIM: "Skip Navigation" Links](https://webaim.org/techniques/skipnav/)
- [Anleitung: Verwenden von Skip-Navigation-Links](https://www.a11yproject.com/posts/skip-nav-links/)
- [MDN / Verständnis WCAG, Leitlinie 2.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.4_%e2%80%94_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Verständnis des Erfolgskriteriums 2.4.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)

### Größe und Nähe

#### Größe

Interaktive Elemente wie Links sollten eine ausreichend große Fläche bieten, damit sie leicht aktiviert werden können. Dies hilft einer Vielzahl von Personen, einschließlich Personen mit motorischen Problemen und solchen, die ungenaue Eingaben wie ein Touchscreen verwenden. Eine Mindestgröße von 44×44 [CSS-Pixeln](https://www.w3.org/TR/WCAG21/#dfn-css-pixels) wird empfohlen.

Text-only Links in Prosa-Inhalten sind von dieser Anforderung ausgenommen, aber es ist dennoch eine gute Idee, sicherzustellen, dass genug Text verlinkt ist, um leicht aktiviert werden zu können.

- [Verständnis des Erfolgskriteriums 2.5.5: Target Size](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Target Size und 2.5.5](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Schnelltest: Große Touch-Ziele](https://www.a11yproject.com/posts/large-touch-targets/)

#### Nähe

Interaktive Elemente wie Links, die in naher visueller Nähe platziert sind, sollten durch Leerzeichen getrennt sein. Der Abstand hilft Menschen mit motorischen Problemen, die sonst möglicherweise versehentlich den falschen interaktiven Inhalt aktivieren.

Abstände können mit CSS-Eigenschaften wie {{CSSxRef("margin")}} erstellt werden.

- [Handzittern und das große-Taste-Problem](https://axesslab.com/hand-tremors/)

## Beispiele

### Verlinken zu einer absoluten URL

#### HTML

```html
<a href="https://www.mozilla.com">Mozilla</a>
```

#### Ergebnis

{{EmbedLiveSample('Linking_to_an_absolute_URL')}}

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

{{EmbedLiveSample('Linking_to_relative_URLs')}}

### Verlinken zu einem Element auf derselben Seite

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

### Verlinken zu einer E-Mail-Adresse

Um Links zu erstellen, die sich im E-Mail-Programm des Benutzers öffnen, um eine neue Nachricht zu senden, verwenden Sie das `mailto:` Schema:

```html
<a href="mailto:nowhere@mozilla.org">Send email to nowhere</a>
```

#### Ergebnis

{{EmbedLiveSample('Linking to an email address')}}

Für Details zu `mailto:` URLs, wie das Einfügen eines Betreffs oder Textkörpers, siehe [E-Mail-Links](/de/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks#email_links) oder {{RFC(6068)}}.

### Verlinken zu Telefonnummern

```html
<a href="tel:+49.157.0156">+49 157 0156</a>
<a href="tel:+1(800)555-0123">(800) 555-0123</a>
```

#### Ergebnis

{{EmbedLiveSample('Linking to telephone numbers')}}

Das Verhalten von `tel:` Links variiert je nach Gerätemöglichkeiten:

- Mobilgeräte wählen automatisch die Nummer.
- Die meisten Betriebssysteme haben Programme, die Anrufe tätigen können, wie Skype oder FaceTime.
- Websites können Anrufe tätigen mit [`registerProtocolHandler`](/de/docs/Web/API/Navigator/registerProtocolHandler), wie `web.skype.com`.
- Andere Verhaltensweisen schließen das Speichern der Nummer in Kontakte ein oder das Senden der Nummer an ein anderes Gerät.

Siehe {{RFC(3966)}} für Syntax, zusätzliche Funktionen und weitere Details zum `tel:` URL-Schema.

### Verwenden des `download` Attributs, um ein \<canvas> als PNG zu speichern

Um den Inhalt eines {{HTMLElement("canvas")}} Elements als Bild zu speichern, können Sie einen Link erstellen, bei dem das `href` die Canvas-Daten als `data:` URL ist, erstellt mit JavaScript, und das `download` Attribut den Dateinamen für die heruntergeladene PNG-Datei bereitstellt:

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

`<a>` Elemente können Konsequenzen für die Sicherheit und den Datenschutz der Benutzer haben. Siehe [`Referer` Header: Datenschutz- und Sicherheitsbedenken](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns) für Informationen.

Die Verwendung von `target="_blank"` ohne [`rel="noreferrer"`](/de/docs/Web/HTML/Attributes/rel/noreferrer) und [`rel="noopener"`](/de/docs/Web/HTML/Attributes/rel/noopener) macht die Website anfällig für Angriffsmethoden der [`window.opener`](/de/docs/Web/API/Window/opener) API, obwohl es wichtig zu beachten ist, dass neuere Browserversionen mit `target="_blank"` implizit denselben Schutz bieten wie das Setzen von `rel="noopener"`. Siehe [Browser-Kompatibilität](#browser-kompatibilität) für Details.

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
          >Flow-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasen-Inhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Content_categories#interactive_content"
          >interaktiver Inhalt</a
        >, palpabler Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a
          href="/de/docs/Web/HTML/Content_categories#transparent_content_model"
          >Transparent</a
        >, außer dass kein Nachkomme
        <a
          href="/de/docs/Web/HTML/Content_categories#interactive_content"
          >interaktiven Inhalt</a
        > oder ein
        <code>&lt;a&gt;</code> Element haben darf, und kein Nachkomme darf ein spezifiziertes
        <a
          href="/de/docs/Web/HTML/Global_attributes/tabindex"
          >tabindex</a
        > Attribut besitzen.
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
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flow-Inhalt</a
        > akzeptiert, aber keine anderen <code>&lt;a&gt;</code> Elemente.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/link_role"><code>link</code></a> wenn das <code>href</code> Attribut vorhanden ist, andernfalls
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/generic_role"><code>generic</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>
        <p>Wenn das <code>href</code> Attribut vorhanden ist:</p>
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
- {{CSSxRef(":link")}} ist eine CSS-Pseudoklasse, die `<a>` Elemente mit URL im `href` Attribut matcht, die vom Benutzer noch nicht besucht wurden.
- {{CSSxRef(":visited")}} ist eine CSS-Pseudoklasse, die `<a>` Elemente mit URL im `href` Attribut matcht, die in der Vergangenheit vom Benutzer besucht wurden.
- {{CSSxRef(":any-link")}} ist eine CSS-Pseudoklasse, die `<a>` Elemente mit `href` Attribut matcht.
- [Textfragmente](/de/docs/Web/URI/Fragment/Text_fragments) sind Anweisungen des Benutzeragenten, die URLs hinzugefügt werden und es Inhaltsautoren ermöglichen, auf bestimmten Text auf einer Seite zu verlinken, ohne dass IDs erforderlich sind.
