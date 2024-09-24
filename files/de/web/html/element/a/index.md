---
title: "<a>: Das Ankerelement"
slug: Web/HTML/Element/a
l10n:
  sourceCommit: 1a48b6abdd27e168c78edcf04a7a9f6a8e0fdc15
---

{{HTMLSidebar}}

Das **`<a>`** [HTML](/de/docs/Web/HTML)-Element (oder Ankerelement) erstellt mit [seinem `href`-Attribut](#href) einen Hyperlink zu Webseiten, Dateien, E-Mail-Adressen, Positionen auf derselben Seite oder allem anderen, was eine URL adressieren kann.

Der Inhalt eines jeden `<a>` sollte das Ziel des Links anzeigen. Wenn das `href`-Attribut vorhanden ist, aktiviert das Drücken der Eingabetaste, während der Fokus auf dem `<a>`-Element liegt, dieses.

{{EmbedInteractiveExample("pages/tabbed/a.html", "tabbed-shorter")}}

## Attribute

Die Attribute dieses Elements schließen die [globalen Attribute](/de/docs/Web/HTML/Global_attributes) ein.

- `attributionsrc` {{experimental_inline}}

  - : Gibt an, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header senden soll. Auf der Serverseite wird dies verwendet, um das Senden eines {{httpheader("Attribution-Reporting-Register-Source")}}-Headers in der Antwort auszulösen, um eine [navigationsbasierte Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#navigation-based_attribution_sources) zu registrieren.

    Der Browser speichert die Quelldaten, die mit der navigationsbasierten Attributionsquelle verbunden sind (wie im {{httpheader("Attribution-Reporting-Register-Source")}}-Antwortheader angegeben), wenn der Benutzer auf den Link klickt. Weitere Einzelheiten finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

    Es gibt zwei Versionen dieses Attributs, die Sie festlegen können:

    - Boolean, d.h. nur der Name `attributionsrc`. Dies gibt an, dass Sie möchten, dass der {{httpheader("Attribution-Reporting-Eligible")}}-Header an denselben Server wie das `href`-Attribut gesendet wird. Dies ist in Ordnung, wenn Sie die Registrierung der Attributionsquelle auf demselben Server abwickeln.
    - Wert, der eine oder mehrere URLs enthält, zum Beispiel:

      ```html
      attributionsrc="https://a.example/register-source
      https://b.example/register-source"
      ```

      Dies ist nützlich in Fällen, in denen die angeforderte Ressource sich nicht auf einem Server befindet, den Sie steuern, oder Sie die Registrierung der Attributionsquelle einfach auf einem anderen Server abwickeln möchten. In diesem Fall können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcenanforderung erfolgt, wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header an die in `attributionsrc` angegebenen URL(s) zusätzlich zum Ursprungsort der Ressource gesendet. Diese URLs können dann mit dem {{httpheader("Attribution-Reporting-Register-Source")}} antworten, um die Registrierung abzuschließen.

      > [!NOTE]
      > Das Angeben mehrerer URLs bedeutet, dass mehrere Attributionsquellen auf derselben Funktion registriert werden können. Sie könnten beispielsweise verschiedene Kampagnen haben, deren Erfolg Sie messen möchten, was das Erstellen verschiedener Berichte auf unterschiedlichen Daten umfasst.

    `<a>`-Elemente können nicht als Attributionstrigger, sondern nur als Quellen verwendet werden.

- `download`

  - : Veranlasst den Browser, die verlinkte URL als Download zu behandeln. Kann mit oder ohne einem `filename`-Wert verwendet werden:

    - Ohne Wert schlägt der Browser einen Dateinamen/-erweiterung vor, der aus verschiedenen Quellen generiert wird:

      - Der {{HTTPHeader("Content-Disposition")}}-HTTP-Header
      - Der letzte Abschnitt im URL-[Pfad](/de/docs/Web/API/URL/pathname)
      - Der {{Glossary("MIME_type", "Medientyp")}} (vom {{HTTPHeader("Content-Type")}}-Header, dem Anfang einer [`data:`-URL](/de/docs/Web/URI/Schemes/data) oder {{domxref("Blob.type")}} für eine [`blob:`-URL](/de/docs/Web/API/URL/createObjectURL_static))

    - `filename`: Definiert ein Wert, der als Dateiname vorgeschlagen wird. `/`- und `\`-Zeichen werden in Unterstriche (`_`) umgewandelt. Dateisysteme können andere Zeichen in Dateinamen verbieten, also passen Browser den vorgeschlagenen Namen bei Bedarf an.

    > [!NOTE]
    >
    > - `download` funktioniert nur für [gleich-origin URL](/de/docs/Web/Security/Same-origin_policy) oder die `blob:`- und `data:`-Schemata.
    > - Wie Browser Downloads behandeln, variiert je nach Browser, Benutzereinstellungen und anderen Faktoren. Der Benutzer kann aufgefordert werden, bevor ein Download startet, oder die Datei kann automatisch gespeichert oder automatisch geöffnet werden, entweder in einer externen Anwendung oder im Browser selbst.
    > - Wenn der `Content-Disposition`-Header andere Informationen als das `download`-Attribut hat, kann das resultierende Verhalten unterschiedlich sein:
    >
    >   - Wenn der Header einen `filename` angibt, hat dieser Vorrang vor einem im `download`-Attribut angegebenen Dateinamen.
    >   - Wenn der Header eine Disposition von `inline` angibt, geben Chrome und Firefox dem Attribut den Vorrang und behandeln es als Download. Alte Firefox-Versionen (vor Version 82) priorisieren den Header und zeigen den Inhalt inline an.

- `href`

  - : Die URL, auf die der Hyperlink zeigt. Links sind nicht auf HTTP-basierte URLs beschränkt – sie können jedes von Browsern unterstützte URL-Schema verwenden:

    - Telefonnummern mit `tel:` URLs
    - E-Mail-Adressen mit `mailto:` URLs
    - SMS-Textnachrichten mit `sms:` URLs
    - Ausführbarer Code mit [`javascript:` URLs](/de/docs/Web/URI/Schemes/javascript)
    - Während Webbrowser möglicherweise andere URL-Schemata nicht unterstützen, können Websites mit [`registerProtocolHandler()`](/de/docs/Web/API/Navigator/registerProtocolHandler) dies tun.

    Außerdem können andere URL-Funktionen spezifische Teile der Ressource lokalisieren, einschließlich:

    - Abschnitte einer Seite mit Dokumentfragmenten
    - Spezifische Textabschnitte mit [Textfragmenten](/de/docs/Web/URI/Fragment/Text_fragments)
    - Teile von Mediendateien mit Medienfragmenten

- `hreflang`
  - : Weist auf die menschliche Sprache der verlinkten URL hin. Keine integrierte Funktionalität. Erlaubte Werte sind dieselben wie [das globale `lang`-Attribut](/de/docs/Web/HTML/Global_attributes/lang).
- `ping`
  - : Eine durch Leerzeichen getrennte Liste von URLs. Wenn der Link gefolgt wird, sendet der Browser {{HTTPMethod("POST")}}-Anfragen mit dem Body `PING` an die URLs. Typischerweise für das Tracking verwendet.
- `referrerpolicy`

  - : Bestimmt, wie viele der [Referrer](/de/docs/Web/HTTP/Headers/Referer) gesendet werden, wenn dem Link gefolgt wird.

    - `no-referrer`: Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}}-Header wird nicht an {{Glossary("origin")}}s ohne {{Glossary("TLS")}} ({{Glossary("HTTPS")}}) gesendet.
    - `origin`: Der gesendete Referrer wird auf den Ursprung der verweisenden Seite beschränkt: sein [Schema](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL), {{Glossary("host")}} und {{Glossary("port")}}.
    - `origin-when-cross-origin`: Der Referrer, der an andere Ursprünge gesendet wird, wird auf das Schema, den Host und den Port beschränkt. Navigieren auf demselben Ursprung enthält weiterhin den Pfad.
    - `same-origin`: Ein Referrer wird für {{Glossary("Same-origin policy", "denselben Ursprung")}} gesendet, aber Anfragen über Ursprünge hinweg enthalten keine Referrer-Informationen.
    - `strict-origin`: Sendet den Ursprung des Dokuments nur als Referrer, wenn das Protokollsicherheitslevel dasselbe bleibt (HTTPS→HTTPS), aber nicht an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard): Sendet eine vollständige URL, wenn eine Anfrage zum selben Ursprung gestellt wird, sendet nur den Ursprung, wenn das Protokollsicherheitslevel dasselbe bleibt (HTTPS→HTTPS), und sendet keinen Header an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `unsafe-url`: Der Referrer enthält sowohl den Ursprung als auch den Pfad (aber nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), das [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder den [Benutzernamen](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher,** weil er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge leakt.

- [`rel`](/de/docs/Web/HTML/Attributes/rel)
  - : Die Beziehung der verlinkten URL als durch Leerzeichen getrennte Linktypen.
- `target`

  - : Wo die verlinkte URL angezeigt werden soll, als Name für einen _Browsing-Kontext_ (einen Tab, ein Fenster oder {{HTMLElement("iframe")}}). Die folgenden Schlüsselwörter haben spezielle Bedeutungen, wo die URL geladen werden soll:

    - `_self`: Der aktuelle Browsing-Kontext. (Standard)
    - `_blank`: Normalerweise ein neuer Tab, aber die Benutzer können Browser so konfigurieren, dass stattdessen ein neues Fenster geöffnet wird.
    - `_parent`: Der Eltern-Browsing-Kontext des aktuellen. Wenn kein Eltern vorhanden ist, verhält es sich wie `_self`.
    - `_top`: Der oberste Browsing-Kontext. Konkret bedeutet dies den "höchsten" Kontext, der ein Vorfahre des aktuellen ist. Wenn keine Vorfahren vorhanden sind, verhält es sich wie `_self`.
    - `_unfencedTop`: Ermöglicht eingebetteten [eingezäunten Rahmen](/de/docs/Web/API/Fenced_frame_API), das oberste Frame zu navigieren (d.h., weiter als den Wurzelrahmen des eingezäunten Rahmens zu durchqueren, im Gegensatz zu anderen reservierten Zielen). Beachten Sie, dass die Navigation immer noch erfolgreich sein wird, wenn dies außerhalb eines eingezäunten Rahmenkontexts verwendet wird, aber es wird nicht wie ein reserviertes Schlüsselwort handeln.

    > [!NOTE]
    > Das Setzen von `target="_blank"` auf `<a>`-Elementen bietet implizit das gleiche `rel`-Verhalten wie das Setzen von [`rel="noopener"`](/de/docs/Web/HTML/Attributes/rel/noopener), welches `window.opener` nicht setzt.

- `type`
  - : Gibt das Format der verlinkten URL mit einem {{Glossary("MIME type")}} an. Keine integrierte Funktionalität.

### Veraltete Attribute

- `charset` {{Deprecated_Inline}}

  - : Wurde zur Angabe der {{Glossary("character encoding")}} der verlinkten URL verwendet.

    > [!NOTE]
    > Dieses Attribut ist veraltet und **sollte von Autoren nicht verwendet werden**. Verwenden Sie den HTTP {{HTTPHeader("Content-Type")}}-Header auf der verlinkten URL.

- `coords` {{Deprecated_Inline}}
  - : Wurde mit [dem `shape`-Attribut](#shape) verwendet. Eine durch Kommas getrennte Liste von Koordinaten.
- `name` {{Deprecated_Inline}}

  - : War erforderlich, um einen möglichen Zielort auf einer Seite zu definieren. In HTML 4.01 konnten `id` und `name` beide auf `<a>` verwendet werden, solange sie identische Werte hatten.

    > [!NOTE]
    > Verwenden Sie stattdessen das globale Attribut [`id`](/de/docs/Web/HTML/Global_attributes#id).

- `rev` {{Deprecated_Inline}}
  - : Spezifizierte einen Rücklink; das Gegenteil des [rel-Attributs](#rel). Veraltet, da es sehr verwirrend war.
- `shape` {{Deprecated_Inline}}

  - : Die Form der Hyperlink-Region in einer Bildkarte.

    > [!NOTE]
    > Verwenden Sie stattdessen das {{HTMLElement("area")}}-Element für Bildkarten.

## Barrierefreiheit

### Starker Linktext

**Der Inhalt innerhalb eines Links sollte angeben, wohin der Link führt**, sogar außerhalb des Kontexts.

#### Unzugänglicher, schwacher Linktext

Ein leider häufiger Fehler ist es, nur die Wörter "klicken Sie hier" oder "hier" zu verlinken:

```html example-bad
<p>Mehr über unsere Produkte erfahren Sie <a href="/products">hier</a>.</p>
```

##### Ergebnis

{{EmbedLiveSample('Inaccessible, weak link text')}}

#### Starker Linktext

Glücklicherweise ist dies leicht zu beheben und tatsächlich kürzer als die unzugängliche Version!

```html example-good
<p>Erfahren Sie mehr <a href="/products">über unsere Produkte</a>.</p>
```

##### Ergebnis

{{EmbedLiveSample('Strong link text')}}

Unterstützungssoftware hat Abkürzungen, um alle Links auf einer Seite aufzulisten. Starker Linktext kommt jedoch allen Benutzern zugute — die "alle Links auflisten"-Abkürzung emuliert, wie sehende Benutzer schnell Seiten durchblicken.

### onclick-Ereignisse

Ankerelemente werden oft missbräuchlich als gefälschte Schaltflächen verwendet, indem ihr `href` auf `#` oder [`javascript:void(0)`](/de/docs/Web/URI/Schemes/javascript) gesetzt wird, um das Neuladen der Seite zu verhindern, und dann auf ihre `click`-Ereignisse gehört.

Diese falschen `href`-Werte verursachen unerwartetes Verhalten beim Kopieren/Ziehen von Links, Öffnen von Links in einem neuen Tab/Fenster, Lesezeichnen, oder wenn JavaScript lädt, Fehler auftritt oder deaktiviert ist. Sie vermitteln auch eine falsche Semantik an unterstützende Technologien, wie Bildschirmleser.

Verwenden Sie stattdessen ein {{HTMLElement("button")}}. Im Allgemeinen **sollten Sie nur einen Hyperlink zur Navigation zu einer echten URL verwenden**.

### Externe Links und Verlinkung zu nicht-HTML-Ressourcen

Links, die in einem neuen Tab/Fenster über `target="_blank"` öffnen, oder Links, die auf eine Download-Datei verweisen, sollten anzeigen, was passiert, wenn dem Link gefolgt wird.

Personen mit Sehbehinderungen, die mit Hilfe von Bildschirmlesetechnologie navigieren, oder mit kognitiven Problemen könnten verwirrt sein, wenn ein neuer Tab, ein Fenster oder eine Anwendung unerwartet geöffnet wird. Ältere Bildschirmlesesoftware kündigt dieses Verhalten möglicherweise nicht einmal an.

#### Link, der in einem neuen Tab/Fenster öffnet

```html
<a target="_blank" href="https://www.wikipedia.org">
  Wikipedia (öffnet in neuem Tab)
</a>
```

##### Ergebnis

{{EmbedLiveSample('Link that opens a new tab/window')}}

#### Link zu einer nicht-HTML-Ressource

```html
<a href="2017-annual-report.ppt">2017 Jahresbericht (PowerPoint)</a>
```

Wenn ein Symbol verwendet wird, um das Linkverhalten anzuzeigen, stellen Sie sicher, dass es einen [_Alt-Text_](/de/docs/Web/HTML/Element/img#alt) hat:

```html
<a target="_blank" href="https://www.wikipedia.org">
  Wikipedia
  <img alt="(öffnet in neuem Tab)" src="newtab.svg" />
</a>

<a href="2017-annual-report.ppt">
  2017 Jahresbericht
  <img alt="(PowerPoint-Datei)" src="ppt-icon.svg" />
</a>
```

##### Ergebnis

{{EmbedLiveSample('Link to a non-HTML resource')}}

- [WebAIM: Links und Hypertext - Hypertext-Links](https://webaim.org/techniques/hypertext/hypertext_links)
- [MDN / Verständnis von WCAG, Leitlinie 3.2](/de/docs/Web/Accessibility/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
- [G200: Öffnen neuer Fenster und Tabs aus einem Link nur bei Bedarf](https://www.w3.org/TR/WCAG20-TECHS/G200.html)
- [G201: Benutzern Vorwarnung geben, wenn ein neues Fenster geöffnet wird](https://www.w3.org/TR/WCAG20-TECHS/G201.html)

### Skip-Links

Ein **Skip-Link** ist ein Link, der so früh wie möglich im {{HTMLElement("body")}}-Inhalt platziert wird und auf den Anfang des Hauptinhalts der Seite zeigt. Normalerweise verbirgt CSS einen Skip-Link außerhalb des Bildschirms, bis er fokussiert wird.

```html
<body>
  <a href="#content" class="skip-link">Zum Hauptinhalt springen</a>

  <header>…</header>

  <!-- Der Skip-Link springt hierher -->
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

Skip-Links ermöglichen es Tastaturbenutzern, Inhalte zu umgehen, die sich auf mehreren Seiten wiederholen, wie z.B. die Kopfzeilennavigation.

Skip-Links sind besonders nützlich für Personen, die mit Hilfe von unterstützender Technologie wie Schaltersteuerung, Sprachbefehlen oder Mundstäben/Kopfstöcken navigieren, wobei das Bewegen durch sich wiederholende Links mühsam sein kann.

- [WebAIM: "Skip Navigation"-Links](https://webaim.org/techniques/skipnav/)
- [Anleitung: Skip-Navigationslinks verwenden](https://www.a11yproject.com/posts/skip-nav-links/)
- [MDN / Verständnis von WCAG, Leitlinie 2.4 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.4_%e2%80%94_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Verständnis von Erfolgskriterium 2.4.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)

### Größe und Nähe

#### Größe

Interaktive Elemente, wie Links, sollten eine ausreichend große Fläche bereitstellen, um sie leicht aktivieren zu können. Dies hilft einer Vielzahl von Personen, einschließlich jener mit Motorsteuerungsproblemen und jener, die unpräzise Eingaben wie Touchscreens verwenden. Eine Mindestgröße von 44×44 [CSS-Pixeln](https://www.w3.org/TR/WCAG21/#dfn-css-pixels) wird empfohlen.

Nur-Text-Links im Fließtext sind von dieser Anforderung ausgenommen, aber es ist dennoch eine gute Idee, sicherzustellen, dass genug Text verlinkt ist, um leicht aktiviert zu werden.

- [Verständnis Erfolgskriterium 2.5.5: Zielgröße](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Zielgröße und 2.5.5](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Schnelltest: Große Touchziele](https://www.a11yproject.com/posts/large-touch-targets/)

#### Nähe

Interaktive Elemente, wie Links, die in enger visueller Nähe positioniert sind, sollten durch Raum getrennt werden. Das Spacing hilft Menschen mit Motorsteuerungsproblemen, die möglicherweise versehentlich das falsche interaktive Element aktivieren.

Das Spacing kann mit CSS-Eigenschaften wie {{CSSxRef("margin")}} erstellt werden.

- [Zittern der Hand und das Problem der riesigen Schaltfläche](https://axesslab.com/hand-tremors/)

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
<a href="//example.com">Schema-relative URL</a>
<a href="/de/docs/Web/HTML">Ursprungs-relative URL</a>
<a href="p">Verzeichnis-relative URL</a>
<a href="./p">Verzeichnis-relative URL</a>
<a href="../p">Elternverzeichnis-relative URL</a>
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
<!-- <a>-Element verweist auf den Abschnitt unten -->
<p><a href="#Section_further_down">Zum untenstehenden Abschnitt springen</a></p>

<!-- Überschrift, um darauf zu verlinken -->
<h2 id="Section_further_down">Abschnitt weiter unten</h2>
```

#### Ergebnis

{{EmbedLiveSample('Linking to an element on the same page')}}

> [!NOTE]
> Sie können `href="#top"` oder das leere Fragment (`href="#"`) verwenden, um an den Anfang der aktuellen Seite zu verlinken, [wie in der HTML-Spezifikation definiert](https://html.spec.whatwg.org/multipage/browsing-the-web.html#scroll-to-the-fragment-identifier).

### Verlinkung zu einer E-Mail-Adresse

Um Links zu erstellen, die im E-Mail-Programm des Benutzers geöffnet werden, um eine neue Nachricht zu senden, verwenden Sie das Schema `mailto:`:

```html
<a href="mailto:nowhere@mozilla.org">E-Mail an nowhere senden</a>
```

#### Ergebnis

{{EmbedLiveSample('Linking to an email address')}}

Für Details zu `mailto:` URLs, wie das Einfügen eines Betreffs oder des Inhalts, siehe [E-Mail-Links](/de/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks#email_links) oder {{RFC(6068)}}.

### Verlinkung zu Telefonnummern

```html
<a href="tel:+49.157.0156">+49 157 0156</a>
<a href="tel:+1(800)555-0123">(800) 555-0123</a>
```

#### Ergebnis

{{EmbedLiveSample('Linking to telephone numbers')}}

Das Verhalten von `tel:`-Links variiert je nach Gerätekapazität:

- Mobiltelefone wählen die Nummer automatisch.
- Die meisten Betriebssysteme haben Programme, die Anrufe tätigen können, wie Skype oder FaceTime.
- Websites können mit {{domxref("Navigator/registerProtocolHandler", "registerProtocolHandler")}} Anrufe tätigen, wie zum Beispiel `web.skype.com`.
- Andere Verhaltensweisen umfassen das Speichern der Nummer zu Kontakten oder das Senden der Nummer an ein anderes Gerät.

Weitere Informationen zur Syntax und zusätzlichen Features des `tel:`-Schemas finden Sie in {{RFC(3966)}}.

### Verwenden des download-Attributs zum Speichern eines \<canvas> als PNG

Um den Inhalt eines {{HTMLElement("canvas")}}-Elements als Bild zu speichern, können Sie einen Link erstellen, bei dem das `href` die Canvas-Daten als `data:`-URL ist, erstellt mit JavaScript, und das `download`-Attribut den Dateinamen für die heruntergeladene PNG-Datei bereitstellt:

#### Beispiel-Mal-App mit Download-Link

##### HTML

```html
<p>
  Malen Sie, indem Sie die Maustaste gedrückt halten und bewegen.
  <a href="" download="my_painting.png">Mein Gemälde herunterladen</a>
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

`<a>`-Elemente können Folgen für die Sicherheit und den Datenschutz der Benutzer haben. Siehe [`Referer`-Header: Datenschutz- und Sicherheitsbedenken](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns) für weitere Informationen.

Die Verwendung von `target="_blank"` ohne [`rel="noreferrer"`](/de/docs/Web/HTML/Attributes/rel/noreferrer) und [`rel="noopener"`](/de/docs/Web/HTML/Attributes/rel/noopener) macht die Website anfällig für Exploit-Angriffe mit der {{domxref("window.opener")}}-API. Beachten Sie jedoch, dass die Einstellung `target="_blank"` in neueren Browserversionen den gleichen Schutz wie die Einstellung `rel="noopener"` implizit bietet. Siehe [Browser-Kompatibilität](#browser-kompatibilität) für Details.

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
          >Formulierungsinhalt</a
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
        >, außer dass kein Nachfolger
        <a
          href="/de/docs/Web/HTML/Content_categories#interactive_content"
          >interaktiven Inhalt</a
        > oder ein
        <code>&lt;a&gt;</code>-Element enthalten darf, und kein Nachfolger darf ein angegebenes
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
          >Flussinhalt</a
        > akzeptiert, aber keine anderen <code>&lt;a&gt;</code>-Elemente.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/link_role"><code>link</code></a> wenn das <code>href</code>-Attribut vorhanden ist, andernfalls
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
          <li>beliebig</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>{{DOMxRef("HTMLAnchorElement")}}</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("link")}} ist ähnlich wie `<a>`, aber für Metadaten-Hyperlinks, die für Benutzer unsichtbar sind.
- {{CSSxRef(":link")}} ist eine CSS-Pseudoklasse, die `<a>`-Elemente mit URL im `href`-Attribut, das der Benutzer noch nicht besucht hat, abgleicht.
- {{CSSxRef(":visited")}} ist eine CSS-Pseudoklasse, die `<a>`-Elemente mit URL im `href`-Attribut, das der Benutzer in der Vergangenheit besucht hat, abgleicht.
- {{CSSxRef(":any-link")}} ist eine CSS-Pseudoklasse, die `<a>`-Elemente mit `href`-Attribut abgleicht.
- [Textfragmente](/de/docs/Web/URI/Fragment/Text_fragments) sind Benutzeranweisungen, die URLs hinzugefügt werden, um Inhaltsautoren zu ermöglichen, auf bestimmten Text auf einer Seite zu verlinken, ohne dass IDs erforderlich sind.
