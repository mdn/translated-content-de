---
title: "<a>: Das Anchor-Element"
slug: Web/HTML/Element/a
l10n:
  sourceCommit: 58f0feea3a1220e0835604639efe330ee0f93368
---

{{HTMLSidebar}}

Das **`<a>`**-[HTML](/de/docs/Web/HTML)-Element (oder _Anker_-Element) erstellt mit [seinem `href`-Attribut](#href) einen Hyperlink zu Webseiten, Dateien, E-Mail-Adressen, Orten auf derselben Seite oder jedem anderen Ziel, das mit einer URL adressiert werden kann.

Der Inhalt innerhalb eines `<a>` sollte das Ziel des Links angeben. Wenn das `href`-Attribut vorhanden ist, wird es beim Drücken der Eingabetaste, während das `<a>`-Element fokussiert ist, aktiviert.

{{EmbedInteractiveExample("pages/tabbed/a.html", "tabbed-shorter")}}

## Attribute

Die Attribute dieses Elements umfassen die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

- `attributionsrc` {{experimental_inline}}

  - : Gibt an, dass Sie möchten, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header sendet. Auf der Serverseite wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}}-Headers in der Antwort auszulösen, um eine [navigationsbasierte Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#navigation-based_attribution_sources) zu registrieren.

    Der Browser speichert die Quelldaten, die mit der navigationsbasierten Attributionsquelle verknüpft sind (wie im {{httpheader("Attribution-Reporting-Register-Source")}}-Antwortheader bereitgestellt), wenn der Benutzer auf den Link klickt. Weitere Details finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

    Es gibt zwei Versionen dieses Attributs, die Sie festlegen können:

    - Boolean, d.h. nur der Name `attributionsrc`. Dies gibt an, dass Sie möchten, dass der {{httpheader("Attribution-Reporting-Eligible")}}-Header an denselben Server gesendet wird, auf den das `href`-Attribut verweist. Dies ist in Ordnung, wenn Sie die Registrierung der Attributionsquelle auf demselben Server verwalten.
    - Wert, der eine oder mehrere URLs enthält, zum Beispiel:

      ```html
      attributionsrc="https://a.example/register-source
      https://b.example/register-source"
      ```

      Dies ist nützlich in Fällen, in denen die angeforderte Ressource nicht auf einem von Ihnen kontrollierten Server liegt, oder wenn Sie die Registrierung der Attributionsquelle auf einem anderen Server verwalten möchten. In diesem Fall können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcenanforderung ausgeführt wird, wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header an die in `attributionsrc` angegebenen URL(s) zusätzlich zum Ursprungsort der Ressource gesendet. Diese URLs können dann mit dem {{httpheader("Attribution-Reporting-Register-Source")}} antworten, um die Registrierung abzuschließen.

      > [!NOTE]
      > Das Angeben mehrerer URLs bedeutet, dass auf derselben Funktion mehrere Attributionsquellen registriert werden können. Sie könnten zum Beispiel verschiedene Kampagnen haben, deren Erfolg Sie messen möchten, indem Sie unterschiedliche Berichte über verschiedene Daten erstellen.

    `<a>`-Elemente können nicht als Attributionstrigger, sondern nur als Quellen verwendet werden.

- `download`

  - : Veranlasst den Browser, die verlinkte URL als Download zu behandeln. Kann mit oder ohne `filename`-Wert verwendet werden:

    - Ohne einen Wert schlägt der Browser einen Dateinamen/-erweiterung vor, der aus verschiedenen Quellen generiert wird:

      - Der {{HTTPHeader("Content-Disposition")}}-HTTP-Header
      - Das letzte Segment im URL-[Pfad](/de/docs/Web/API/URL/pathname)
      - Der {{Glossary("MIME_type", "Medientyp")}} (aus dem {{HTTPHeader("Content-Type")}}-Header, dem Anfang einer [`data:`-URL](/de/docs/Web/URI/Schemes/data) oder [`Blob.type`](/de/docs/Web/API/Blob/type) für eine [`blob:`-URL](/de/docs/Web/API/URL/createObjectURL_static))

    - `filename`: Wenn ein Wert definiert ist, wird dieser als Dateiname vorgeschlagen. Zeichen wie `/` und `\` werden in Unterstriche (`_`) umgewandelt. Dateisysteme können andere Zeichen in Dateinamen verbieten, daher passen Browser den vorgeschlagenen Namen gegebenenfalls an.

    > [!NOTE]
    >
    > - `download` funktioniert nur bei [gleich-origin URLs](/de/docs/Web/Security/Same-origin_policy), oder den `blob:`- und `data:`-Schemata.
    > - Die Behandlung von Downloads variiert je nach Browser, Benutzereinstellungen und anderen Faktoren. Der Benutzer kann vor Beginn eines Downloads aufgefordert werden, oder die Datei kann automatisch gespeichert oder automatisch geöffnet werden, entweder in einer externen Anwendung oder direkt im Browser.
    > - Wenn der `Content-Disposition`-Header unterschiedliche Informationen zum `download`-Attribut enthält, kann das resultierende Verhalten abweichen:
    >
    >   - Wenn der Header einen `filename` angibt, hat er Vorrang vor einem Dateinamen im `download`-Attribut.
    >   - Wenn der Header eine Disposition von `inline` angibt, priorisieren Chrome und Firefox das Attribut und behandeln es als Download. Ältere Firefox-Versionen (vor 82) priorisieren den Header und zeigen den Inhalt inline an.

- `href`

  - : Die URL, auf die der Hyperlink verweist. Links sind nicht auf HTTP-basierte URLs beschränkt — sie können jedes von Browsern unterstützte URL-Schema verwenden:

    - Telefonnummern mit `tel:`-URLs
    - E-Mail-Adressen mit `mailto:`-URLs
    - SMS-Nachrichten mit `sms:`-URLs
    - Ausführbarer Code mit [`javascript:`-URLs](/de/docs/Web/URI/Schemes/javascript)
    - Während Webbrowser möglicherweise andere URL-Schemata nicht unterstützen, können Websites dies mit [`registerProtocolHandler()`](/de/docs/Web/API/Navigator/registerProtocolHandler)

    Darüber hinaus können andere URL-Features bestimmte Teile der Ressource lokalisieren, einschließlich:

    - Abschnitte einer Seite mit Dokumentfragmenten
    - Bestimmte Textabschnitte mit [Textfragmenten](/de/docs/Web/URI/Fragment/Text_fragments)
    - Teile von Mediendateien mit Medienfragmenten

- `hreflang`
  - : Hinweis auf die menschliche Sprache der verlinkten URL. Keine eingebaute Funktionalität. Erlaubte Werte sind die gleichen wie [das globale `lang`-Attribut](/de/docs/Web/HTML/Global_attributes/lang).
- `ping`
  - : Eine Leerzeichen-getrennte Liste von URLs. Wenn der Link verfolgt wird, sendet der Browser {{HTTPMethod("POST")}}-Anfragen mit dem Körper `PING` an die URLs. Typischerweise zum Tracking.
- `referrerpolicy`

  - : Gibt an, wie viel von dem [Referrer](/de/docs/Web/HTTP/Headers/Referer) gesendet wird, wenn dem Link gefolgt wird.

    - `no-referrer`: Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}}-Header wird nicht an {{Glossary("origin", "Herkunft")}}en ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`: Der gesendete Referrer wird auf die Herkunft der verweisenden Seite beschränkt: ihr [Schema](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`: Der Referrer, der an andere Ursprünge gesendet wird, wird auf das Schema, den Host und den Port beschränkt. Navigationen am gleichen Ursprung enthalten weiterhin den Pfad.
    - `same-origin`: Ein Referrer wird für {{Glossary("Same-origin_policy", "gleich-origin")}} gesendet, aber Anfragen über verschiedene Ursprünge enthalten keine Referrer-Informationen.
    - `strict-origin`: Nur die Herkunft des Dokuments wird als Referrer gesendet, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), jedoch nicht an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard): Senden Sie eine vollständige URL bei einer gleich-origin Anfrage, senden Sie nur die Herkunft, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), und senden Sie keinen Header an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `unsafe-url`: Der Referrer enthält die Herkunft _und_ den Pfad (aber nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder [Username](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge leakt.

- [`rel`](/de/docs/Web/HTML/Attributes/rel)
  - : Die Beziehung der verlinkten URL als Raum-getrennte Link-Typen.
- `target`

  - : Wo die verlinkte URL angezeigt werden soll, als Name für einen _Browsing-Kontext_ (ein Tab, Fenster oder {{HTMLElement("iframe")}}). Die folgenden Schlüsselwörter haben spezielle Bedeutungen, wo die URL geladen werden soll:

    - `_self`: Der aktuelle Browsing-Kontext. (Standard)
    - `_blank`: Normalerweise ein neuer Tab, aber Benutzer können Browser so konfigurieren, dass ein neues Fenster geöffnet wird.
    - `_parent`: Der übergeordnete Browsing-Kontext des aktuellen. Wenn kein übergeordneter Kontext vorhanden ist, verhält sich wie `_self`.
    - `_top`: Der oberste Browsing-Kontext. Dies bedeutet den "höchsten" Kontext, der ein Vorfahre des aktuellen ist. Wenn keine Vorfahren vorhanden sind, verhält sich wie `_self`.
    - `_unfencedTop`: Ermöglicht eingebetteten [fenced frames](/de/docs/Web/API/Fenced_frame_API), das oberste Frame zu navigieren (d.h. über die Wurzel des fenced frame hinaus zu gehen, anders als bei anderen reservierten Zielen). Beachten Sie, dass die Navigation auch dann erfolgreich ist, wenn dies außerhalb eines fenced frame-Kontextes verwendet wird, aber es wird nicht als reserviertes Schlüsselwort handeln.

    > [!NOTE]
    > Das Festlegen von `target="_blank"` auf `<a>`-Elementen bietet indirekt dasselbe `rel`-Verhalten wie das Festlegen von [`rel="noopener"`](/de/docs/Web/HTML/Attributes/rel/noopener), welches `window.opener` nicht setzt.

- `type`
  - : Ein Hinweis auf das Format der verlinkten URL mit einem {{Glossary("MIME_type", "MIME-Typ")}}. Keine eingebaute Funktionalität.

### Veraltete Attribute

- `charset` {{Deprecated_Inline}}

  - : Hinweis auf die {{Glossary("character_encoding", "Zeichenkodierung")}} der verlinkten URL.

    > [!NOTE]
    > Dieses Attribut ist veraltet und **sollte von Autoren nicht verwendet werden**. Verwenden Sie den HTTP-{{HTTPHeader("Content-Type")}}-Header auf der verlinkten URL.

- `coords` {{Deprecated_Inline}}
  - : Wurde mit [dem `shape`-Attribut](#shape) verwendet. Eine kommagetrennte Liste von Koordinaten.
- `name` {{Deprecated_Inline}}

  - : Wurde benötigt, um einen möglichen Zielort auf einer Seite zu definieren. In HTML 4.01 konnten `id` und `name` beide auf `<a>` verwendet werden, solange sie identische Werte hatten.

    > [!NOTE]
    > Verwenden Sie stattdessen das globale Attribut [`id`](/de/docs/Web/HTML/Global_attributes/id).

- `rev` {{Deprecated_Inline}}
  - : Spezifizierte einen umgekehrten Link; das Gegenteil des [`rel`-Attributs](#rel). Veraltet, weil sehr verwirrend.
- `shape` {{Deprecated_Inline}}

  - : Die Form der Hyperlink-Region in einer Image-Map.

    > [!NOTE]
    > Verwenden Sie stattdessen das {{HTMLElement("area")}}-Element für Image-Maps.

## Barrierefreiheit

### Starker Link-Text

**Der Inhalt innerhalb eines Links sollte angeben, wohin der Link führt**, auch außerhalb des Kontexts.

#### Nicht zugänglicher, schwacher Link-Text

Ein leider häufiger Fehler ist es, nur die Wörter "hier klicken" oder "hier" zu verlinken:

```html example-bad
<p>Learn more about our products <a href="/products">here</a>.</p>
```

##### Ergebnis

{{EmbedLiveSample('Inaccessible, weak link text')}}

#### Starker Link-Text

Glücklicherweise ist dies leicht zu beheben, und es ist tatsächlich kürzer als die unzugängliche Version!

```html example-good
<p>Learn more <a href="/products">about our products</a>.</p>
```

##### Ergebnis

{{EmbedLiveSample('Strong link text')}}

Hilfssoftware hat Abkürzungen, um alle Links auf einer Seite aufzulisten. Ein starker Link-Text kommt jedoch allen Benutzern zugute — die Abkürzung "alle Links auflisten" emuliert, wie sehende Benutzer Seiten schnell scannen.

### onclick-Ereignisse

Anchor-Elemente werden häufig als falsche Schaltflächen missbraucht, indem ihr `href` auf `#` oder [`javascript:void(0)`](/de/docs/Web/URI/Schemes/javascript) gesetzt wird, um das Aktualisieren der Seite zu verhindern, und dann auf deren `click`-Ereignisse gehört wird.

Diese falschen `href`-Werte verursachen unerwartetes Verhalten beim Kopieren/Verschieben von Links, Öffnen von Links in einem neuen Tab/Fenster, Lesezeichen oder wenn JavaScript lädt, Fehler aufweist oder deaktiviert ist. Sie vermitteln auch unkorrekte Semantik an unterstützende Technologien, wie Bildschirmleseprogramme.

Verwenden Sie stattdessen ein {{HTMLElement("button")}}. Im Allgemeinen **sollten Sie nur einen Hyperlink für die Navigation zu einer echten URL verwenden**.

### Externe Links und Verlinkung zu Nicht-HTML-Ressourcen

Links, die in einem neuen Tab/Fenster über `target="_blank"` öffnen, oder Links, die auf eine herunterladbare Datei verweisen, sollten angeben, was passiert, wenn der Link verfolgt wird.

Personen mit Sehbehinderungen, die mithilfe von Bildschirmlesetechnologie navigieren, oder Menschen mit kognitiven Bedenken könnten verwirrt sein, wenn unerwartet ein neuer Tab, ein Fenster oder eine Anwendung geöffnet wird. Ältere Bildschirmlesesoftware gibt das Verhalten möglicherweise nicht einmal bekannt.

#### Link, der ein neues Tab/Fenster öffnet

```html
<a target="_blank" href="https://www.wikipedia.org">
  Wikipedia (opens in new tab)
</a>
```

##### Ergebnis

{{EmbedLiveSample('Link that opens a new tab/window')}}

#### Link zu einer Nicht-HTML-Ressource

Wenn ein Symbol zur Anzeige des Linkverhaltens verwendet wird, stellen Sie sicher, dass es ein [`alt`-Attribut](/de/docs/Web/HTML/Element/img#alt) hat, um seinen Zweck zu beschreiben. Für den Fall, dass das Symbol fehlt, vermittelt der Inhalt des `alt`-Attributs weiterhin das Verhalten des Links.

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
- [MDN / Verständnis von WCAG, Richtlinie 3.2](/de/docs/Web/Accessibility/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
- [G200: Öffnen neuer Fenster und Tabs aus einem Link nur wenn nötig](https://www.w3.org/TR/WCAG20-TECHS/G200.html)
- [G201: Den Benutzern im Voraus eine Warnung geben, wenn ein neues Fenster geöffnet wird](https://www.w3.org/TR/WCAG20-TECHS/G201.html)

### Skip Links

Ein **Skip-Link** ist ein Link, der so früh wie möglich im {{HTMLElement("body")}}-Inhalt platziert wird und auf den Anfang des Hauptinhalts der Seite verweist. Normalerweise blendet CSS einen Skip-Link vom Bildschirm aus, bis er fokussiert ist.

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

Skip-Links ermöglichen es Tastaturnutzern, Inhalte zu überspringen, die auf mehreren Seiten wiederholt werden, wie z.B. Header-Navigation.

Skip-Links sind besonders nützlich für Personen, die mit Unterstützungstechnologien wie Schaltsteuerung, Sprachbefehl oder Mundstöcken/Kopfstäben navigieren, bei denen das Navigieren durch sich wiederholende Links mühsam sein kann.

- [WebAIM: "Skip Navigation"-Links](https://webaim.org/techniques/skipnav/)
- [Anleitung: Verwenden von Skip-Navigation-Links](https://www.a11yproject.com/posts/skip-nav-links/)
- [MDN / Verständnis von WCAG, Erklärung zu Richtlinie 2.4](/de/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.4_%e2%80%94_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Erklärung des Erfolgskriteriums 2.4.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)

### Größe und Nähe

#### Größe

Interaktive Elemente, wie Links, sollten eine ausreichend große Fläche bieten, sodass es einfach ist, sie zu aktivieren. Dies hilft einer Vielzahl von Menschen, einschließlich solcher mit motorischen Kontrollproblemen und solcher, die ungenaue Eingaben wie einen Touchscreen verwenden. Eine Mindestgröße von 44×44 [CSS-Pixeln](https://www.w3.org/TR/WCAG21/#dfn-css-pixels) wird empfohlen.

Text-Links innerhalb von Proseinhalten sind von dieser Anforderung ausgenommen, aber es ist trotzdem eine gute Idee, sicherzustellen, dass genug Text verlinkt ist, um leicht aktiviert zu werden.

- [Erklärung des Erfolgskriteriums 2.5.5: Zielgröße](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Zielgröße und 2.5.5](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Schnelltest: Große Touch-Ziele](https://www.a11yproject.com/posts/large-touch-targets/)

#### Nähe

Interaktive Elemente, wie Links, die in unmittelbarer visueller Nähe platziert sind, sollten Abstand haben. Das Abstandhalten hilft Menschen mit motorischen Kontrollproblemen, die sonst aus Versehen das falsche interaktive Element aktivieren könnten.

Abstände können mit CSS-Eigenschaften wie {{CSSxRef("margin")}} erstellt werden.

- [Handzittern und das Riesen-Button-Problem](https://axesslab.com/hand-tremors/)

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

Um Links zu erstellen, die vom E-Mail-Programm des Benutzers geöffnet werden sollen, um eine neue Nachricht zu verfassen, verwenden Sie das `mailto:`-Schema:

```html
<a href="mailto:nowhere@mozilla.org">Send email to nowhere</a>
```

#### Ergebnis

{{EmbedLiveSample('Linking to an email address')}}

Für Details zu `mailto:`-URLs, wie das Einfügen eines Betreffs oder Textkörpers, siehe [E-Mail-Links](/de/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks#email_links) oder {{RFC(6068)}}.

### Verlinkung zu Telefonnummern

```html
<a href="tel:+49.157.0156">+49 157 0156</a>
<a href="tel:+1(800)555-0123">(800) 555-0123</a>
```

#### Ergebnis

{{EmbedLiveSample('Linking to telephone numbers')}}

Das Verhalten von `tel:`-Links variiert je nach Gerätefunktionen:

- Mobilgeräte wählen die Nummer automatisch.
- Die meisten Betriebssysteme verfügen über Programme, die Anrufe tätigen können, wie Skype oder FaceTime.
- Websites können Anrufe mit [`registerProtocolHandler`](/de/docs/Web/API/Navigator/registerProtocolHandler) tätigen, wie `web.skype.com`.
- Andere Verhaltensweisen umfassen das Speichern der Nummer in Kontakten oder das Senden der Nummer an ein anderes Gerät.

Siehe {{RFC(3966)}} für Syntax, zusätzliche Funktionen und andere Details zum `tel:`-URL-Schema.

### Verwendung des download-Attributs, um ein `<canvas>` als PNG zu speichern

Um den Inhalt eines {{HTMLElement("canvas")}}-Elements als Bild zu speichern, können Sie einen Link erstellen, bei dem das `href` die Canvas-Daten als `data:`-URL ist, die mit JavaScript erstellt wurde, und das `download`-Attribut den Dateinamen für die heruntergeladene PNG-Datei angibt:

#### Beispiel-Mal-App mit Download-Link

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

`<a>`-Elemente können Konsequenzen für die Sicherheit und den Datenschutz der Benutzer haben. Siehe [`Referer`-Header: Datenschutz- und Sicherheitsbedenken](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns) für Informationen.

Die Verwendung von `target="_blank"` ohne [`rel="noreferrer"`](/de/docs/Web/HTML/Attributes/rel/noreferrer) und [`rel="noopener"`](/de/docs/Web/HTML/Attributes/rel/noopener) macht die Website verwundbar für Angriffe über die [`window.opener`](/de/docs/Web/API/Window/opener)-API, obwohl neuere Browserversionen diese Schutzmaßnahme automatisch bieten, wenn `target="_blank"` gesetzt wird, ähnlich wie beim Setzen von `rel="noopener"`. Siehe [Browser-Kompatibilität](#browser-kompatibilität) für Details.

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
          >Fließender Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierung</a
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
        >, jedoch darf kein Nachkomme
        <a
          href="/de/docs/Web/HTML/Content_categories#interactive_content"
          >interaktiver Inhalt</a
        > oder ein
        <code>&lt;a&gt;</code>-Element sein, und kein Nachkomme darf ein
        angegebenes
        <a
          href="/de/docs/Web/HTML/Global_attributes/tabindex"
          >tabindex</a
        >-Attribut haben.
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
          >fließenden Inhalt</a
        > akzeptiert, jedoch keine anderen <code>&lt;a&gt;</code>-Elemente.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/link_role"><code>link</code></a> wenn das <code>href</code>-Attribut
        vorhanden ist, andernfalls
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

- {{HTMLElement("link")}} ist ähnlich wie `<a>`, jedoch für Metadaten-Hyperlinks, die für Benutzer unsichtbar sind.
- {{CSSxRef(":link")}} ist eine CSS-Pseudoklasse, die auf `<a>`-Elemente mit einer URL im `href`-Attribut, die vom Benutzer noch nicht besucht wurde, zutrifft.
- {{CSSxRef(":visited")}} ist eine CSS-Pseudoklasse, die auf `<a>`-Elemente mit einer URL im `href`-Attribut, die vom Benutzer in der Vergangenheit besucht wurde, zutrifft.
- {{CSSxRef(":any-link")}} ist eine CSS-Pseudoklasse, die auf `<a>`-Elemente mit `href`-Attribut zutrifft.
- [Textfragmente](/de/docs/Web/URI/Fragment/Text_fragments) sind Benutzeragenten-Instruktionen, die zu URLs hinzugefügt werden und es Inhaltsautoren ermöglichen, auf bestimmten Text auf einer Seite zu verlinken, ohne dass IDs erforderlich sind.
