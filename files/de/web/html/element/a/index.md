---
title: "<a>: Das Anchor-Element"
slug: Web/HTML/Element/a
l10n:
  sourceCommit: 1a48b6abdd27e168c78edcf04a7a9f6a8e0fdc15
---

{{HTMLSidebar}}

Das **`<a>`** [HTML](/de/docs/Web/HTML) Element (oder _Anchor_-Element) erzeugt mit [seinem `href` Attribut](#href) einen Hyperlink zu Webseiten, Dateien, E-Mail-Adressen, Positionen auf derselben Seite oder allem, was eine URL adressieren kann.

Der Inhalt innerhalb eines `<a>` sollte das Ziel des Links angeben. Wenn das `href` Attribut vorhanden ist, wird es durch Drücken der Eingabetaste bei Fokus auf das `<a>` Element aktiviert.

{{EmbedInteractiveExample("pages/tabbed/a.html", "tabbed-shorter")}}

## Attribute

Die Attribute dieses Elements umfassen die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `attributionsrc` {{experimental_inline}}

  - : Gibt an, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}} Header senden soll. Auf der Serverseite wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}} Headers in der Antwort auszulösen, um eine [navigationsbasierte Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#navigation-based_attribution_sources) zu registrieren.

    Der Browser speichert die Quelldaten, die mit der navigationsbasierten Attributionsquelle verknüpft sind (wie im {{httpheader("Attribution-Reporting-Register-Source")}} Antwortheader bereitgestellt), wenn der Benutzer auf den Link klickt. Siehe die [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API) für weitere Details.

    Es gibt zwei Versionen dieses Attributs, die Sie festlegen können:

    - Boolean, d.h. nur der `attributionsrc` Name. Dies gibt an, dass der {{httpheader("Attribution-Reporting-Eligible")}} Header an denselben Server gesendet wird, auf den das `href` Attribut verweist. Dies ist in Ordnung, wenn Sie die Registrierung der Attributionsquelle auf demselben Server verwalten.
    - Wert, der eine oder mehrere URLs enthält, zum Beispiel:

      ```html
      attributionsrc="https://a.example/register-source
      https://b.example/register-source"
      ```

      Dies ist nützlich in Fällen, in denen die angeforderte Ressource nicht auf einem Server ist, den Sie kontrollieren, oder Sie einfach die Registrierung der Attributionsquelle auf einem anderen Server verwalten möchten. In diesem Fall können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcenanfrage erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}} Header an die in `attributionsrc` angegebenen URL(s) gesendet, zusätzlich zum Ursprungsort der Ressource. Diese URLs können dann mit dem {{httpheader("Attribution-Reporting-Register-Source")}} antworten, um die Registrierung abzuschließen.

      > [!NOTE]
      > Die Angabe mehrerer URLs bedeutet, dass mehrere Attributionsquellen für dasselbe Feature registriert werden können. Möglicherweise führen Sie zum Beispiel verschiedene Kampagnen durch, deren Erfolg Sie messen möchten, was das Generieren von unterschiedlichen Berichten über verschiedene Daten beinhaltet.

    `<a>` Elemente können nicht als Attributionstrigger, sondern nur als Quellen verwendet werden.

- `download`

  - : Veranlasst den Browser, die verlinkte URL als Download zu behandeln. Kann mit oder ohne einen `filename` Wert verwendet werden:

    - Ohne einen Wert wird der Browser einen Dateinamen/Erweiterung vorschlagen, der aus verschiedenen Quellen generiert wird:

      - Der {{HTTPHeader("Content-Disposition")}} HTTP Header
      - Das letzte Segment im URL [Pfad](/de/docs/Web/API/URL/pathname)
      - Der [Medientyp](/de/docs/Glossary/MIME_type) (aus dem {{HTTPHeader("Content-Type")}} Header, dem Anfang einer [`data:` URL](/de/docs/Web/URI/Schemes/data) oder [`Blob.type`](/de/docs/Web/API/Blob/type) für eine [`blob:` URL](/de/docs/Web/API/URL/createObjectURL_static))

    - `filename`: Das Definieren eines Werts schlägt diesen als Dateinamen vor. `/` und `\` Zeichen werden in Unterstriche (`_`) umgewandelt. Dateisysteme können andere Zeichen in Dateinamen verbieten, daher passen Browser den vorgeschlagenen Namen gegebenenfalls an.

    > [!NOTE]
    >
    > - `download` funktioniert nur für [same-origin URLs](/de/docs/Web/Security/Same-origin_policy) oder die Schemata `blob:` und `data:`.
    > - Wie Browser Downloads behandeln, variiert je nach Browser, Benutzereinstellungen und anderen Faktoren. Der Benutzer kann aufgefordert werden, bevor ein Download startet, oder die Datei kann automatisch gespeichert werden, oder sie kann automatisch geöffnet werden, entweder in einer externen Anwendung oder direkt im Browser.
    > - Wenn der `Content-Disposition` Header andere Informationen enthält als das `download` Attribut, kann das resultierende Verhalten abweichen:
    >
    >   - Wenn der Header einen `filename` angibt, hat dieser Vorrang gegenüber einem im `download` Attribut angegebenen Dateinamen.
    >   - Wenn der Header eine Disposition von `inline` angibt, geben Chrome und Firefox dem Attribut Vorrang und behandeln es als Download. Alte Firefox-Versionen (vor 82) geben dem Header Vorrang und zeigen den Inhalt inline an.

- `href`

  - : Die URL, auf die der Hyperlink verweist. Links sind nicht auf HTTP-basierte URLs beschränkt — sie können jedes von Browsern unterstützte URL-Schema verwenden:

    - Telefonnummern mit `tel:` URLs
    - E-Mail-Adressen mit `mailto:` URLs
    - SMS-Nachrichten mit `sms:` URLs
    - Ausführbarer Code mit [`javascript:` URLs](/de/docs/Web/URI/Schemes/javascript)
    - Während Webbrowser andere URL-Schemata möglicherweise nicht unterstützen, können Websites dies mit [`registerProtocolHandler()`](/de/docs/Web/API/Navigator/registerProtocolHandler) tun.

    Außerdem können andere URL-Funktionen spezifische Teile der Ressource lokalisieren, einschließlich:

    - Abschnitte einer Seite mit Dokumentfragmenten
    - Spezifische Textabschnitte mit [Textfragmenten](/de/docs/Web/URI/Fragment/Text_fragments)
    - Teile von Mediendateien mit Medienfragmenten

- `hreflang`
  - : Gibt einen Hinweis auf die menschliche Sprache der verlinkten URL. Keine integrierte Funktionalität. Erlaubte Werte sind die gleichen wie [das globale `lang` Attribut](/de/docs/Web/HTML/Global_attributes/lang).
- `ping`
  - : Eine durch Leerzeichen getrennte Liste von URLs. Wenn der Link gefolgt wird, sendet der Browser {{HTTPMethod("POST")}} Anfragen mit dem `PING`-Body an die URLs. Typischerweise zum Tracking.
- `referrerpolicy`

  - : Wie viel des [Referrer](/de/docs/Web/HTTP/Headers/Referer) beim Folgen des Links gesendet werden soll.

    - `no-referrer`: Der {{HTTPHeader("Referer")}} Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}} Header wird nicht an [origin](/de/docs/Glossary/origin)s ohne [TLS](/de/docs/Glossary/TLS) ([HTTPS](/de/docs/Glossary/HTTPS)) gesendet.
    - `origin`: Der gesendete Referrer wird auf den Ursprungsort der verweisenden Seite beschränkt: ihr [Scheme](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL), [Host](/de/docs/Glossary/host) und [Port](/de/docs/Glossary/port).
    - `origin-when-cross-origin`: Der an andere Ursprünge gesendete Referrer wird auf das Scheme, den Host und den Port beschränkt. Navigationen auf demselben Ursprung enthalten immer noch den Pfad.
    - `same-origin`: Ein Referrer wird für [same origin](/de/docs/Glossary/Same-origin_policy) gesendet, aber cross-origin Anfragen enthalten keine Referrer-Informationen.
    - `strict-origin`: Sendet nur den Ursprungsort des Dokuments als Referrer, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), sendet es jedoch nicht an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard): Sendet eine vollständige URL bei einer same-origin Anforderung, sendet nur den Ursprungsort, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), und sendet keinen Header an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `unsafe-url`: Der Referrer wird den Ursprungsort _und_ den Pfad (aber nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder [Benutzername](/de/docs/Web/API/HTMLAnchorElement/username)) beinhalten. **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge leakt.

- [`rel`](/de/docs/Web/HTML/Attributes/rel)
  - : Die Beziehung der verlinkten URL als durch Leerzeichen getrennte Linktypen.
- `target`

  - : Wo die verlinkte URL angezeigt werden soll, als Name für einen _Browsing-Kontext_ (ein Tab, ein Fenster oder {{HTMLElement("iframe")}}). Die folgenden Schlüsselwörter haben spezielle Bedeutungen dafür, wo die URL geladen werden soll:

    - `_self`: Der aktuelle Browsing-Kontext. (Standard)
    - `_blank`: In der Regel ein neuer Tab, aber Benutzer können Browser konfigurieren, um stattdessen ein neues Fenster zu öffnen.
    - `_parent`: Der übergeordnete Browsing-Kontext des aktuellen. Wenn kein übergeordneter vorhanden ist, verhält es sich wie `_self`.
    - `_top`: Der oberste Browsing-Kontext. Um spezifisch zu sein, bedeutet dies den "höchsten" Kontext, der ein Vorfahr des aktuellen ist. Wenn keine Vorfahren vorhanden sind, verhält es sich wie `_self`.
    - `_unfencedTop`: Ermöglicht eingebetteten [fenced frames](/de/docs/Web/API/Fenced_frame_API) die Navigation im obersten Fenster (d.h. das Überwinden der Wurzel des fenced frames, im Gegensatz zu anderen reservierten Zielen). Beachten Sie, dass die Navigation immer noch Erfolg hat, wenn dies außerhalb eines fenced frame Kontexts verwendet wird, aber es wird nicht wie ein reserviertes Schlüsselwort handeln.

    > [!NOTE]
    > Das Setzen von `target="_blank"` bei `<a>` Elementen sorgt implizit für dasselbe `rel` Verhalten wie das Setzen von [`rel="noopener"`](/de/docs/Web/HTML/Attributes/rel/noopener), was `window.opener` nicht setzt.

- `type`
  - : Gibt einen Hinweis auf das Format der verlinkten URL mit einem [MIME-Typ](/de/docs/Glossary/MIME_type). Keine eingebaute Funktionalität.

### Veraltete Attribute

- `charset` {{Deprecated_Inline}}

  - : Hinweis auf die [Zeichenkodierung](/de/docs/Glossary/character_encoding) der verlinkten URL.

    > [!NOTE]
    > Dieses Attribut ist veraltet und **sollte von Autoren nicht verwendet werden**. Verwenden Sie den HTTP {{HTTPHeader("Content-Type")}} Header für die verlinkte URL.

- `coords` {{Deprecated_Inline}}
  - : Wurde mit [dem `shape` Attribut](#shape) verwendet. Eine durch Kommas getrennte Liste von Koordinaten.
- `name` {{Deprecated_Inline}}

  - : War erforderlich, um einen möglichen Zielort auf einer Seite zu definieren. In HTML 4.01 konnten sowohl `id` als auch `name` auf `<a>` verwendet werden, solange sie identische Werte hatten.

    > [!NOTE]
    > Verwenden Sie stattdessen das globale Attribut [`id`](/de/docs/Web/HTML/Global_attributes#id).

- `rev` {{Deprecated_Inline}}
  - : Spezifizierte einen umgekehrten Link; das Gegenteil vom [dem `rel` Attribut](#rel). Veraltet wegen der großen Verwirrung, die es stiftete.
- `shape` {{Deprecated_Inline}}

  - : Die Form des Hyperlink-Bereichs in einer Image-Map.

    > [!NOTE]
    > Verwenden Sie stattdessen das {{HTMLElement("area")}} Element für Image-Maps.

## Barrierefreiheit

### Starker Linktext

**Der Inhalt innerhalb eines Links sollte angeben, wohin der Link führt**, auch aus dem Kontext heraus.

#### Unzugänglicher, schwacher Linktext

Ein leider häufiger Fehler ist es nur die Worte "hier klicken" oder "hier" zu verlinken:

```html example-bad
<p>Learn more about our products <a href="/products">here</a>.</p>
```

##### Ergebnis

{{EmbedLiveSample('Inaccessible, weak link text')}}

#### Starker Linktext

Glücklicherweise ist dies eine einfache Korrektur, und es ist tatsächlich kürzer als die unzugängliche Version!

```html example-good
<p>Learn more <a href="/products">about our products</a>.</p>
```

##### Ergebnis

{{EmbedLiveSample('Strong link text')}}

Unterstützende Software hat Kurzbefehle, um alle Links auf einer Seite aufzulisten. Dennoch profitieren alle Benutzer von starkem Linktext — der "alle Links auflisten" Shortcut emuliert, wie sehende Benutzer Seiten schnell scannen.

### onclick Ereignisse

Anchor-Elemente werden oft als falsche Schaltflächen missbraucht, indem ihr `href` auf `#` oder [`javascript:void(0)`](/de/docs/Web/URI/Schemes/javascript) gesetzt wird, um zu verhindern, dass die Seite neu lädt, dann auf ihre `click` Ereignisse zu hören.

Diese fiktiven `href` Werte verursachen unerwartetes Verhalten beim Kopieren/Draggen von Links, Öffnen von Links in einem neuen Tab/Fenster, bei der Lesezeichenfunktion oder wenn JavaScript lädt, Fehler aufweist oder deaktiviert ist. Sie übermitteln auch falsche Semantik an unterstützende Technologien, wie Screenreader.

Verwenden Sie stattdessen ein {{HTMLElement("button")}}. Generell gilt, **Sie sollten nur einen Hyperlink für die Navigation zu einer realen URL verwenden**.

### Externe Links und Links zu nicht-HTML Ressourcen

Links, die in einem neuen Tab/Fenster über `target="_blank"` geöffnet werden, oder Links, die auf eine Download-Datei verweisen, sollten angeben, was passiert, wenn der Link geklickt wird.

Personen mit Sehschwächen, die mit Hilfe von Screenreader-Technologie navigieren, oder mit kognitiven Beeinträchtigungen können verwirrt sein, wenn ein neuer Tab, ein neues Fenster oder eine Anwendung unerwartet geöffnet wird. Ältere Screenreader-Software kündigt dieses Verhalten möglicherweise nicht einmal an.

#### Link, der in einem neuen Tab/Fenster geöffnet wird

```html
<a target="_blank" href="https://www.wikipedia.org">
  Wikipedia (opens in new tab)
</a>
```

##### Ergebnis

{{EmbedLiveSample('Link that opens a new tab/window')}}

#### Link zu einer nicht-HTML Ressource

```html
<a href="2017-annual-report.ppt">2017 Annual Report (PowerPoint)</a>
```

Wenn ein Icon verwendet wird, um das Linkverhalten zu signalisieren, stellen Sie sicher, dass es einen [_Alt-Text_](/de/docs/Web/HTML/Element/img#alt) hat:

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

- [WebAIM: Links und Hypertext - Hypertext-Links](https://webaim.org/techniques/hypertext/hypertext_links)
- [MDN / Verstehen von WCAG, Leitlinie 3.2](/de/docs/Web/Accessibility/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
- [G200: Öffnen von neuen Fenstern und Tabs aus einem Link nur bei Bedarf notwendig](https://www.w3.org/TR/WCAG20-TECHS/G200.html)
- [G201: Benutzern geben Sie vorab eine Warnung, wenn Sie ein neues Fenster öffnen](https://www.w3.org/TR/WCAG20-TECHS/G201.html)

### Skip-Links

Ein **Skip-Link** ist ein Link, der so früh wie möglich im {{HTMLElement("body")}}-Inhalt platziert wird und auf den Anfang des Hauptinhalts der Seite verweist. In der Regel verbirgt CSS einen Skip-Link außerhalb des Sichtfelds, bis er fokussiert wird.

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

Skip-Links lassen Benutzer, die die Tastatur verwenden, Inhalte übergehen, die auf mehreren Seiten wiederholt werden, wie z.B. die Kopfzeilennavigation.

Skip-Links sind besonders nützlich für Personen, die mit Hilfe von unterstützender Technologie wie Schaltersteuerung, Sprachbefehl oder Mundstöcke/Kopfstäbe navigieren, wo die Handlung des Durchlaufens von wiederholten Links mühsam sein kann.

- [WebAIM: "Skip Navigation" Links](https://webaim.org/techniques/skipnav/)
- [Anleitung: Verwenden von Skip-Links](https://www.a11yproject.com/posts/skip-nav-links/)
- [MDN / Verstehen von WCAG, Leitlinie 2.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.4_%e2%80%94_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Verständnis des Erfolgs-Kriteriums 2.4.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)

### Größe und Nähe

#### Größe

Interaktive Elemente, wie Links, sollten einen Bereich bereitstellen, der groß genug ist, um einfach aktiviert zu werden. Dies hilft verschiedenen Personen, einschließlich denen mit motorischen Kontrollproblemen und solchen, die ungenaue Eingaben wie einen Touchscreen verwenden. Eine Mindestgröße von 44×44 [CSS-Pixeln](https://www.w3.org/TR/WCAG21/#dfn-css-pixels) wird empfohlen.

Nur Text-Links in Fließtext sind von dieser Anforderung ausgenommen, aber es ist dennoch eine gute Idee sicherzustellen, dass genügend Text verlinkt ist, um leicht aktiviert zu werden.

- [Verständnis des Erfolgs-Kriteriums 2.5.5: Zielgröße](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Zielgröße und 2.5.5](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Schnelltest: Große Berührungsziele](https://www.a11yproject.com/posts/large-touch-targets/)

#### Nähe

Interaktive Elemente, wie Links, die in visuell naher Nähe zueinander liegen, sollten Durchtrennung haben. Abstand hilft Personen mit motorischen Kontrollproblemen, die ansonsten versehentlich das falsche interaktive Element aktivieren könnten.

Der Abstand kann durch CSS-Eigenschaften wie {{CSSxRef("margin")}} erzeugt werden.

- [Handzittern und das "Großtasten-Problem"](https://axesslab.com/hand-tremors/)

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
> Sie können `href="#top"` oder das leere Fragment (`href="#"`) verwenden, um sich an den oberen Rand der aktuellen Seite zu verlinken, [wie in der HTML-Spezifikation definiert](https://html.spec.whatwg.org/multipage/browsing-the-web.html#scroll-to-the-fragment-identifier).

### Verlinken zu einer E-Mail-Adresse

Um Links zu erstellen, die im E-Mail-Programm des Benutzers geöffnet werden, um eine neue Nachricht zu senden, verwenden Sie das `mailto:`-Schema:

```html
<a href="mailto:nowhere@mozilla.org">Send email to nowhere</a>
```

#### Ergebnis

{{EmbedLiveSample('Linking to an email address')}}

Für Details über `mailto:` URLs, wie zum Beispiel das Einfügen eines Betreffs oder Textes, siehe [E-Mail-Links](/de/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks#email_links) oder {{RFC(6068)}}.

### Verlinken zu Telefonnummern

```html
<a href="tel:+49.157.0156">+49 157 0156</a>
<a href="tel:+1(800)555-0123">(800) 555-0123</a>
```

#### Ergebnis

{{EmbedLiveSample('Linking to telephone numbers')}}

`tel:` Link-Verhalten variiert je nach Gerätefähigkeiten:

- Mobiltelefone wählen die Nummer automatisch.
- Die meisten Betriebssysteme haben Programme, die Anrufe tätigen können, wie Skype oder FaceTime.
- Websites können mit [`registerProtocolHandler`](/de/docs/Web/API/Navigator/registerProtocolHandler) Telefonanrufe tätigen, wie z.B. `web.skype.com`.
- Andere Verhaltensweisen beinhalten das Speichern der Nummer in Kontakten oder das Senden der Nummer an ein anderes Gerät.

Siehe {{RFC(3966)}} für Syntax, zusätzliche Funktionen und andere Details über das `tel:` URL-Schema.

### Verwenden des Download-Attributs zum Speichern eines \<canvas> als PNG

Um den Inhalt eines {{HTMLElement("canvas")}} Elements als Bild zu speichern, können Sie einen Link erstellen, bei dem das `href` die Canvas-Daten als `data:` URL ist, die mit JavaScript erstellt wurde, und das `download` Attribut den Dateinamen für die heruntergeladene PNG-Datei bereitstellt:

#### Beispiel einer Zeichenanwendung mit Speicherlink

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

Die Verwendung von `target="_blank"` ohne [`rel="noreferrer"`](/de/docs/Web/HTML/Attributes/rel/noreferrer) und [`rel="noopener"`](/de/docs/Web/HTML/Attributes/rel/noopener) macht die Website anfällig für Angriffe über die [`window.opener`](/de/docs/Web/API/Window/opener) API, obwohl zu beachten ist, dass in neueren Browserversionen das Setzen von `target="_blank"` implizit denselben Schutz bietet wie das Setzen von `rel="noopener"`. Siehe [Browser-Kompatibilität](#browser-kompatibilität) für Details.

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
          >formulierter Inhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Content_categories#interactive_content"
          >interaktiver Inhalt</a
        >, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a
          href="/de/docs/Web/HTML/Content_categories#transparent_content_model"
          >Transparent</a
        >, es sei denn, dass kein Nachfahre
        <a
          href="/de/docs/Web/HTML/Content_categories#interactive_content"
          >interaktiver Inhalt</a
        > oder ein
        <code>&lt;a&gt;</code> Element sein darf, und kein Nachfahre darf ein spezifiziertes
        <a
          href="/de/docs/Web/HTML/Global_attributes/tabindex"
          >tabindex</a
        > Attribut haben.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das startende als auch das endende Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flussinhalt</a
        > akzeptiert, aber keine anderen <code>&lt;a&gt;</code> Elemente.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/link_role"><code>link</code></a> wenn das <code>href</code> Attribut vorhanden ist, ansonsten
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
- {{CSSxRef(":link")}} ist eine CSS-Pseudoklasse, die `<a>` Elemente mit URL im `href` Attribut übereinstimmt, die noch nicht vom Benutzer besucht wurden.
- {{CSSxRef(":visited")}} ist eine CSS-Pseudoklasse, die `<a>` Elemente mit URL im `href` Attribut übereinstimmt, die der Benutzer in der Vergangenheit besucht hat.
- {{CSSxRef(":any-link")}} ist eine CSS-Pseudoklasse, die `<a>` Elemente mit `href` Attribut übereinstimmt.
- [Textfragmente](/de/docs/Web/URI/Fragment/Text_fragments) sind Benutzerausweisungen, die zu URLs hinzugefügt werden, die es den Inhaltsautoren ermöglichen, auf spezifischen Text auf einer Seite zu verlinken, ohne dass IDs erforderlich sind.
