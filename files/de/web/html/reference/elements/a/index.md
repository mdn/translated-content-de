---
title: HTML-Ankerelement `<a>`
short-title: <a>
slug: Web/HTML/Reference/Elements/a
l10n:
  sourceCommit: 94172439968170ab04c730b4f93a699688f7f367
---

Das **`<a>`**-[HTML](/de/docs/Web/HTML)-Element (auch _Ankerelement_ genannt) erstellt mit [seinem `href`-Attribut](#href) einen Hyperlink zu Webseiten, Dateien, E-Mail-Adressen, Stellen auf derselben Seite oder anderen Zielen, die sich über eine URL adressieren lassen.

Der Inhalt jedes `<a>`-Elements _sollte_ das Ziel des Links erkennen lassen. Wenn das Attribut `href` vorhanden ist, wird der Link aktiviert, sobald das `<a>`-Element fokussiert ist und die Eingabetaste gedrückt wird.

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

- `attributionsrc` {{deprecated_inline}} {{non-standard_inline}}
  - : Gibt an, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header senden soll. Serverseitig wird damit ausgelöst, dass die Antwort einen {{httpheader("Attribution-Reporting-Register-Source")}}-Header enthält, um eine [navigationsbasierte Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#navigation-based_attribution_sources) zu registrieren.

    Der Browser speichert die mit der navigationsbasierten Attributionsquelle verknüpften Quelldaten (die im {{httpheader("Attribution-Reporting-Register-Source")}}-Antwortheader bereitgestellt werden), wenn der Benutzer auf den Link klickt. Weitere Informationen finden Sie unter [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

    Dieses Attribut kann auf zwei Arten gesetzt werden:
    - Als boolesches Attribut, also nur mit dem Namen `attributionsrc`. Damit geben Sie an, dass der {{httpheader("Attribution-Reporting-Eligible")}}-Header an denselben Server gesendet werden soll, auf den das Attribut `href` verweist. Das ist geeignet, wenn Sie die Registrierung der Attributionsquelle auf demselben Server verarbeiten.
    - Mit einem Wert, der eine oder mehrere URLs enthält, zum Beispiel:

      ```html
      attributionsrc="https://a.example/register-source
      https://b.example/register-source"
      ```

      Dies ist nützlich, wenn sich die angeforderte Ressource nicht auf einem Server befindet, den Sie kontrollieren, oder wenn Sie die Registrierung der Attributionsquelle auf einem anderen Server verarbeiten möchten. In diesem Fall können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Bei der Ressourcenanfrage wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header zusätzlich zum Ursprung der Ressource an die in `attributionsrc` angegebenen URLs gesendet. Diese URLs können dann mit dem {{httpheader("Attribution-Reporting-Register-Source")}}-Header antworten, um die Registrierung abzuschließen.

      > [!NOTE]
      > Wenn Sie mehrere URLs angeben, können für dieselbe Funktion mehrere Attributionsquellen registriert werden. Beispielsweise könnten Sie verschiedene Kampagnen haben, deren Erfolg Sie messen möchten und für die unterschiedliche Berichte auf Grundlage unterschiedlicher Daten erstellt werden.

    `<a>`-Elemente können nur als Attributionsquellen verwendet werden, nicht als Attributionsauslöser.

- `download`
  - : Veranlasst den Browser, die verlinkte URL als Download zu behandeln. Kann mit oder ohne `filename`-Wert verwendet werden:
    - Ohne Wert schlägt der Browser einen Dateinamen und eine Erweiterung vor, die aus verschiedenen Quellen abgeleitet werden:
      - Dem HTTP-Header {{HTTPHeader("Content-Disposition")}}
      - Dem letzten Segment des URL-[Pfads](/de/docs/Web/API/URL/pathname)
      - Dem {{Glossary("MIME_type", "Medientyp")}} (aus dem {{HTTPHeader("Content-Type")}}-Header, dem Anfang einer [`data:`-URL](/de/docs/Web/URI/Reference/Schemes/data) oder [`Blob.type`](/de/docs/Web/API/Blob/type) bei einer [`blob:`-URL](/de/docs/Web/URI/Reference/Schemes/blob))

    - `filename`: Ein angegebener Wert wird als Dateiname vorgeschlagen. Die Zeichen `/` und `\` werden durch Unterstriche (`_`) ersetzt. Dateisysteme können weitere Zeichen in Dateinamen verbieten; Browser passen den vorgeschlagenen Namen daher bei Bedarf an. Diese Anpassung erfolgt beim Auslösen des Downloads und ist über die Eigenschaft [`HTMLAnchorElement.download`](/de/docs/Web/API/HTMLAnchorElement/download) nicht sichtbar.

    > [!NOTE]
    >
    > - `download` funktioniert nur bei [URLs desselben Ursprungs](/de/docs/Web/Security/Defenses/Same-origin_policy) sowie bei [`blob:`](/de/docs/Web/URI/Reference/Schemes/blob)-URLs desselben Ursprungs und [`data:`](/de/docs/Web/URI/Reference/Schemes/data)-URLs. Bei anderen URLs wird das Attribut `download` ignoriert und eine normale Navigation durchgeführt. Die Zielseite kann jedoch weiterhin mit `Content-Disposition` einen Download veranlassen.
    > - Wie Browser Downloads behandeln, hängt vom Browser, den Benutzereinstellungen und weiteren Faktoren ab. Möglicherweise wird vor Beginn eines Downloads eine Bestätigung angefordert, die Datei automatisch gespeichert oder automatisch in einer externen Anwendung oder im Browser selbst geöffnet.
    > - Wenn das Attribut `download` berücksichtigt wird, hat es Vorrang vor dem Verhalten von `Content-Disposition: inline`. Der Parameter `filename` von `Content-Disposition` hat jedoch Vorrang vor dem Namen im Attribut `download`.

- `href`
  - : Die URL, auf die der Hyperlink verweist. Links sind nicht auf HTTP-basierte URLs beschränkt – sie können jedes von Browsern unterstützte URL-Schema verwenden:
    - Telefonnummern mit `tel:`-URLs
    - E-Mail-Adressen mit `mailto:`-URLs
    - SMS-Nachrichten mit `sms:`-URLs
    - Ausführbaren Code mit [`javascript:`-URLs](/de/docs/Web/URI/Reference/Schemes/javascript)
    - Auch wenn Webbrowser andere URL-Schemata möglicherweise nicht unterstützen, können Websites dies mithilfe von [`registerProtocolHandler()`](/de/docs/Web/API/Navigator/registerProtocolHandler) tun.

    Darüber hinaus lassen sich mit weiteren URL-Funktionen bestimmte Teile einer Ressource ansteuern, darunter:
    - Abschnitte einer Seite mit Dokumentfragmenten
    - Bestimmte Textstellen mit [Textfragmenten](/de/docs/Web/URI/Reference/Fragment/Text_fragments)
    - Ausschnitte aus Mediendateien mit Medienfragmenten

- `hreflang`
  - : Gibt einen Hinweis auf die natürliche Sprache des verlinkten Ziels. Hat keine integrierte Funktionalität. Zulässige Werte entsprechen denen des [globalen Attributs `lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang).
- `interestfor` {{experimental_inline}} {{non-standard_inline}}
  - : Definiert das `<a>`-Element als **Interest Invoker**. Sein Wert ist die `id` des Zielelements. Dieses wird auf bestimmte Weise beeinflusst (normalerweise ein- oder ausgeblendet), wenn Interesse am Invoker-Element entsteht oder endet, beispielsweise durch Bewegen des Mauszeigers darüber oder weg davon oder durch Fokussieren beziehungsweise Aufheben des Fokus. Weitere Informationen und Beispiele finden Sie unter [Interest Invoker verwenden](/de/docs/Web/API/Popover_API/Using_interest_invokers).
- `ping`
  - : Eine durch Leerzeichen getrennte Liste von URLs. Wenn dem Link gefolgt wird, sendet der Browser {{HTTPMethod("POST")}}-Anfragen mit dem Body `PING` an diese URLs. Dies wird üblicherweise für Tracking verwendet.
- `referrerpolicy`
  - : Legt fest, wie viele Informationen des [Referrers](/de/docs/Web/HTTP/Reference/Headers/Referer) beim Abrufen der verlinkten Ressource gesendet werden.
    - `no-referrer`: Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}}-Header wird nicht an {{Glossary("origin", "Ursprünge")}} ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`: Der gesendete Referrer wird auf den Ursprung der verweisenden Seite beschränkt: ihr [Schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), ihren {{Glossary("host", "Host")}} und ihren {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`: Bei Anfragen an andere Ursprünge wird der gesendete Referrer auf Schema, Host und Port beschränkt. Bei Navigationen innerhalb desselben Ursprungs wird weiterhin der Pfad übermittelt.
    - `same-origin`: Bei Anfragen {{Glossary("Same-origin_policy", "innerhalb desselben Ursprungs")}} wird ein Referrer gesendet; Anfragen an andere Ursprünge enthalten keine Referrer-Informationen.
    - `strict-origin`: Der Ursprung des Dokuments wird nur dann als Referrer gesendet, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), nicht jedoch bei einem weniger sicheren Ziel (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard): Bei einer Anfrage innerhalb desselben Ursprungs wird die vollständige URL gesendet. Bei Anfragen an andere Ursprünge wird nur dann der Ursprung gesendet, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS). An weniger sichere Ziele (HTTPS→HTTP) wird kein Header gesendet.
    - `unsafe-url`: Der Referrer enthält den Ursprung _und_ den Pfad (aber weder das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash) noch das [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder den [Benutzernamen](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Ursprünge und Pfade TLS-geschützter Ressourcen an unsichere Ursprünge weitergibt.

- [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)
  - : Die Beziehung der verlinkten URL, angegeben durch durch Leerzeichen getrennte Linktypen.
- `target`
  - : Gibt als Name eines _Browsing Context_ (eines Tabs, Fensters oder {{HTMLElement("iframe")}}-Elements) an, wo die verlinkte URL angezeigt werden soll. Die folgenden Schlüsselwörter haben eine besondere Bedeutung für das Laden der URL:
    - `_self`: Der aktuelle Browsing Context. (Standard)
    - `_blank`: Üblicherweise ein neuer Tab. Benutzer können Browser jedoch so konfigurieren, dass stattdessen ein neues Fenster geöffnet wird.
    - `_parent`: Der übergeordnete Browsing Context des aktuellen Kontexts. Ist keiner vorhanden, verhält sich der Wert wie `_self`.
    - `_top`: Der oberste Browsing Context. Genauer gesagt ist dies der „höchste“ Kontext, der ein Vorfahre des aktuellen Kontexts ist. Sind keine Vorfahren vorhanden, verhält sich der Wert wie `_self`.
    - `_unfencedTop`: Ermöglicht eingebetteten [Fenced Frames](/de/docs/Web/API/Fenced_frame_API), den obersten Frame zu navigieren (also anders als andere reservierte Ziele über die Wurzel des Fenced Frame hinaus). Beachten Sie, dass die Navigation auch außerhalb eines Fenced-Frame-Kontexts funktioniert, der Wert dort aber nicht als reserviertes Schlüsselwort behandelt wird.

    > [!NOTE]
    > Das Setzen von `target="_blank"` auf `<a>`-Elementen bewirkt implizit dasselbe `rel`-Verhalten wie das Setzen von [`rel="noopener"`](/de/docs/Web/HTML/Reference/Attributes/rel/noopener): `window.opener` wird nicht gesetzt.

- `type`
  - : Gibt mit einem {{Glossary("MIME_type", "MIME-Typ")}} einen Hinweis auf das Format der verlinkten URL. Hat keine integrierte Funktionalität.

### Veraltete Attribute

- `charset` {{Deprecated_Inline}}
  - : Gab einen Hinweis auf die {{Glossary("character_encoding", "Zeichenkodierung")}} der verlinkten URL.

    > [!NOTE]
    > Dieses Attribut ist veraltet und **sollte nicht mehr verwendet werden**. Verwenden Sie stattdessen den HTTP-Header {{HTTPHeader("Content-Type")}} für die verlinkte URL.

- `coords` {{Deprecated_Inline}}
  - : Wurde zusammen mit [dem Attribut `shape`](#shape) verwendet. Eine durch Kommas getrennte Liste von Koordinaten.
- `name` {{Deprecated_Inline}}
  - : War erforderlich, um eine mögliche Zielposition auf einer Seite festzulegen. In HTML 4.01 konnten sowohl `id` als auch `name` für `<a>` verwendet werden, sofern ihre Werte identisch waren.

    > [!NOTE]
    > Verwenden Sie stattdessen das globale Attribut [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id).

- `rev` {{Deprecated_Inline}}
  - : Legte eine umgekehrte Linkbeziehung fest, also das Gegenteil des [Attributs `rel`](#rel). Wurde als veraltet eingestuft, da es leicht zu Verwechslungen führt.
- `shape` {{Deprecated_Inline}}
  - : Die Form des Hyperlink-Bereichs in einer Image Map.

    > [!NOTE]
    > Verwenden Sie für Image Maps stattdessen das Element {{HTMLElement("area")}}.

## Barrierefreiheit

### Aussagekräftiger Linktext

**Der Inhalt eines Links sollte erkennen lassen, wohin der Link führt** – auch ohne Kontext.

#### Nicht barrierefreier, wenig aussagekräftiger Linktext

Ein leider häufiger Fehler besteht darin, nur die Wörter „hier klicken“ oder „hier“ zu verlinken:

```html example-bad
<p>Learn more about our products <a href="/products">here</a>.</p>
```

##### Ergebnis

{{EmbedLiveSample('Inaccessible, weak link text', '100%', '50')}}

#### Barrierefreier, aussagekräftiger Linktext

Glücklicherweise lässt sich dies leicht beheben, und die barrierefreie Fassung ist sogar kürzer!

```html example-good
<p>Learn more <a href="/products">about our products</a>.</p>
```

##### Ergebnis

{{EmbedLiveSample('Accessible, strong link text', '100%', '50')}}

Unterstützende Software bietet Kurzbefehle, um alle Links einer Seite aufzulisten. Aussagekräftige Linktexte helfen jedoch allen Benutzern: Der Kurzbefehl zum Auflisten aller Links entspricht der Art, wie sehende Benutzer Seiten schnell überfliegen.

### onclick-Ereignisse

Ankerelemente werden häufig als unechte Schaltflächen missbraucht: Ihr `href` wird auf `#` oder [`javascript:void(0)`](/de/docs/Web/URI/Reference/Schemes/javascript) gesetzt, um ein erneutes Laden der Seite zu verhindern, und anschließend wird auf ihre `click`-Ereignisse reagiert.

Diese ungültigen `href`-Werte führen zu unerwartetem Verhalten beim Kopieren oder Ziehen von Links, beim Öffnen in einem neuen Tab oder Fenster, beim Setzen von Lesezeichen sowie während JavaScript geladen wird, Fehler aufweist oder deaktiviert ist. Zudem vermitteln sie unterstützenden Technologien wie Screenreadern eine falsche Semantik.

Verwenden Sie stattdessen ein {{HTMLElement("button")}}-Element. Grundsätzlich gilt: **Verwenden Sie Hyperlinks nur für die Navigation zu einer echten URL**.

### Externe Links und Links zu Nicht-HTML-Ressourcen

Links, die mit `target="_blank"` in einem neuen Tab oder Fenster geöffnet werden, und Links zu herunterladbaren Dateien sollten erkennen lassen, was beim Aufrufen geschieht.

Menschen mit eingeschränktem Sehvermögen, Menschen, die Screenreader verwenden, oder Menschen mit kognitiven Einschränkungen können irritiert sein, wenn sich unerwartet ein neuer Tab, ein Fenster oder eine Anwendung öffnet. Ältere Screenreader kündigen dieses Verhalten möglicherweise nicht einmal an.

#### Link, der einen neuen Tab oder ein neues Fenster öffnet

```html
<a target="_blank" href="https://www.wikipedia.org">
  Wikipedia (opens in new tab)
</a>
```

##### Ergebnis

{{EmbedLiveSample('Link that opens a new tab/window')}}

#### Link zu einer Nicht-HTML-Ressource

Wenn ein Symbol das Verhalten eines Links kennzeichnet, stellen Sie sicher, dass es ein [`alt`-Attribut](/de/docs/Web/HTML/Reference/Elements/img#alt) hat, das seinen Zweck beschreibt. Falls das Symbol fehlt, vermittelt der Inhalt des Attributs `alt` weiterhin das Verhalten des Links.

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

- [WebAIM: Links und Hypertext – Hypertext-Links](https://webaim.org/techniques/hypertext/hypertext_links)
- [MDN / WCAG verstehen, Richtlinie 3.2](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
- [G200: Neue Fenster und Tabs über einen Link nur bei Bedarf öffnen](https://www.w3.org/TR/WCAG20-TECHS/G200.html)
- [G201: Benutzer vorab über das Öffnen eines neuen Fensters informieren](https://www.w3.org/TR/WCAG20-TECHS/G201.html)

### Sprunglinks

Ein **Sprunglink** ist ein Link, der möglichst früh im Inhalt von {{HTMLElement("body")}} platziert wird und zum Anfang des Hauptinhalts der Seite führt. Üblicherweise blendet CSS den Sprunglink außerhalb des sichtbaren Bereichs aus, bis er den Fokus erhält.

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

Sprunglinks ermöglichen es Benutzern, die mit der Tastatur navigieren, Inhalte zu überspringen, die auf mehreren Seiten wiederholt werden, etwa die Navigation im Seitenkopf.

Sprunglinks sind besonders hilfreich für Menschen, die mit unterstützenden Technologien wie Schaltern, Sprachsteuerung oder Mund- beziehungsweise Kopfstäben navigieren. Für sie kann es mühsam sein, sich durch wiederholt auftretende Links zu bewegen.

- [WebAIM: „Skip Navigation“-Links](https://webaim.org/techniques/skipnav/)
- [Anleitung: Sprunglinks für die Navigation verwenden](https://www.a11yproject.com/posts/skip-nav-links/)
- [MDN / WCAG verstehen, Erläuterungen zu Richtlinie 2.4](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.4_%e2%80%94_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Erfolgskriterium 2.4.1 verstehen](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)

### Größe und Abstand

#### Größe

Interaktive Elemente wie Links sollten eine ausreichend große Fläche bieten, damit sie sich leicht aktivieren lassen. Dies hilft unterschiedlichen Menschen, darunter Personen mit eingeschränkter motorischer Kontrolle und Personen, die unpräzise Eingabemethoden wie einen Touchscreen verwenden. Empfohlen wird eine Mindestgröße von 44 × 44 [CSS-Pixeln](https://w3c.github.io/wcag/guidelines/22/#dfn-css-pixels).

Reine Textlinks in Fließtext sind von dieser Anforderung ausgenommen. Dennoch ist es sinnvoll, genügend Text zu verlinken, damit der Link leicht aktiviert werden kann.

- [Erfolgskriterium 2.5.5 verstehen: Zielgröße](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Zielgröße und 2.5.5](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Schnelltest: Große Touch-Ziele](https://www.a11yproject.com/posts/large-touch-targets/)

#### Abstand

Interaktive Elemente wie Links, die optisch dicht beieinanderliegen, sollten durch Abstand voneinander getrennt sein. Das hilft Menschen mit eingeschränkter motorischer Kontrolle, die sonst versehentlich das falsche interaktive Element aktivieren könnten.

Abstände können mit CSS-Eigenschaften wie {{CSSxRef("margin")}} erzeugt werden.

- [Händezittern und das Problem riesiger Schaltflächen](https://axesslab.com/hand-tremors/)

## Beispiele

### Link zu einer absoluten URL

#### HTML

```html
<a href="https://www.mozilla.com">Mozilla</a>
```

#### Ergebnis

{{EmbedLiveSample('Linking_to_an_absolute_URL')}}

### Links zu relativen URLs

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

### Link zu einem Element auf derselben Seite

```html
<!-- <a> element links to the section below -->
<p><a href="#Section_further_down">Jump to the heading below</a></p>

<!-- Heading to link to -->
<h2 id="Section_further_down">Section further down</h2>
```

#### Ergebnis

{{EmbedLiveSample('Linking to an element on the same page')}}

> [!NOTE]
> Mit `href="#top"` oder einem leeren Fragment (`href="#"`) können Sie zum Anfang der aktuellen Seite verlinken, [wie in der HTML-Spezifikation definiert](https://html.spec.whatwg.org/multipage/browsing-the-web.html#scroll-to-the-fragment-identifier).

### Link zu einer E-Mail-Adresse

Um Links zu erstellen, die im E-Mail-Programm des Benutzers eine neue Nachricht öffnen, verwenden Sie das Schema `mailto:`:

```html
<a href="mailto:nowhere@mozilla.org">Send email to nowhere</a>
```

#### Ergebnis

{{EmbedLiveSample('Linking to an email address')}}

Einzelheiten zu `mailto:`-URLs, beispielsweise zum Einfügen eines Betreffs oder Nachrichtentexts, finden Sie unter [E-Mail-Links](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links#email_links) oder in {{RFC(6068)}}.

### Links zu Telefonnummern

```html
<a href="tel:+49.157.0156">+49 157 0156</a>
<a href="tel:+1(800)555-0123">(800) 555-0123</a>
```

#### Ergebnis

{{EmbedLiveSample('Linking to telephone numbers')}}

Das Verhalten von `tel:`-Links hängt von den Fähigkeiten des Geräts ab:

- Mobilgeräte wählen die Nummer automatisch.
- Die meisten Betriebssysteme verfügen über Programme, mit denen Anrufe möglich sind, etwa Skype oder FaceTime.
- Websites können mit [`registerProtocolHandler`](/de/docs/Web/API/Navigator/registerProtocolHandler) Anrufe ermöglichen, beispielsweise `web.skype.com`.
- Zu weiteren möglichen Verhaltensweisen gehören das Speichern der Nummer in Kontakten oder das Senden der Nummer an ein anderes Gerät.

Syntax, zusätzliche Funktionen und weitere Einzelheiten zum URL-Schema `tel:` finden Sie in {{RFC(3966)}}.

### Das Attribut `download` verwenden, um ein \<canvas> als PNG zu speichern

Um den Inhalt eines {{HTMLElement("canvas")}}-Elements als Bild zu speichern, können Sie einen Link erstellen, dessen `href` die mit JavaScript als `data:`-URL erzeugten Canvas-Daten enthält. Das Attribut `download` gibt dabei den Dateinamen für die heruntergeladene PNG-Datei an:

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

`<a>`-Elemente können Auswirkungen auf die Sicherheit und den Datenschutz von Benutzern haben. Weitere Informationen finden Sie unter [`Referer`-Header: Bedenken hinsichtlich Datenschutz und Sicherheit](/de/docs/Web/Privacy/Guides/Referer_header:_privacy_and_security_concerns).

Die Verwendung von `target="_blank"` ohne [`rel="noreferrer"`](/de/docs/Web/HTML/Reference/Attributes/rel/noreferrer) und [`rel="noopener"`](/de/docs/Web/HTML/Reference/Attributes/rel/noopener) macht eine Website anfällig für Angriffe, die die API [`window.opener`](/de/docs/Web/API/Window/opener) ausnutzen. Beachten Sie jedoch, dass `target="_blank"` in neueren Browserversionen implizit denselben Schutz bietet wie `rel="noopener"`. Einzelheiten finden Sie unter [Browser-Kompatibilität](#browser-kompatibilität).

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
          >formulierender Inhalt</a
        >,
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#interactive_content"
          >interaktiver Inhalt</a
        >, wahrnehmbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#transparent_content_model"
          >Transparent</a
        >, mit der Einschränkung, dass kein Nachfahre
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#interactive_content"
          >interaktiver Inhalt</a
        > oder ein
        <code>&lt;a&gt;</code>-Element sein darf und kein Nachfahre ein angegebenes
        <a
          href="/de/docs/Web/HTML/Reference/Global_attributes/tabindex"
          >tabindex</a
        >-Attribut haben darf.
      </td>
    </tr>
    <tr>
      <th scope="row">Weglassen von Tags</th>
      <td>Keines; sowohl das Start- als auch das End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Elternelemente</th>
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
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/link_role"><code>link</code></a>, wenn das Attribut <code>href</code>
        vorhanden ist, andernfalls
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role"><code>generic</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
      <td>
        <p>Wenn das Attribut <code>href</code> vorhanden ist:</p>
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
        <p>Wenn das Attribut <code>href</code> nicht vorhanden ist:</p>
        <ul>
          <li>beliebige</li>
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

- {{HTMLElement("link")}} ähnelt `<a>`, dient aber für Metadaten-Hyperlinks, die für Benutzer nicht sichtbar sind.
- {{CSSxRef(":link")}} ist eine CSS-Pseudoklasse, die auf `<a>`-Elemente mit einer URL im Attribut `href` zutrifft, die der Benutzer noch nicht besucht hat.
- {{CSSxRef(":visited")}} ist eine CSS-Pseudoklasse, die auf `<a>`-Elemente mit einer URL im Attribut `href` zutrifft, die der Benutzer bereits besucht hat.
- {{CSSxRef(":any-link")}} ist eine CSS-Pseudoklasse, die auf `<a>`-Elemente mit einem Attribut `href` zutrifft.
- [Textfragmente](/de/docs/Web/URI/Reference/Fragment/Text_fragments) sind Anweisungen an den User Agent, die URLs hinzugefügt werden und es ermöglichen, auf bestimmte Textstellen einer Seite zu verlinken, ohne dass IDs erforderlich sind.
