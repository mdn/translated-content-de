---
title: "<a>: Das Ankerelement"
slug: Web/HTML/Reference/Elements/a
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

Das **`<a>`** [HTML](/de/docs/Web/HTML)-Element (oder _Anker_-Element), mit [seinem `href`-Attribut](#href), erstellt einen Hyperlink zu Webseiten, Dateien, E-Mail-Adressen, Orten auf derselben Seite oder allem anderen, was eine URL adressieren kann.

Der Inhalt innerhalb jedes `<a>` sollte das Ziel des Links angeben. Wenn das `href`-Attribut vorhanden ist, wird durch Drücken der Eingabetaste, während das `<a>`-Element fokussiert ist, dieses aktiviert.

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

    Der Browser speichert die Quellinformationen, die mit der navigationsbasierten Attributionsquelle verbunden sind (wie im {{httpheader("Attribution-Reporting-Register-Source")}}-Antwort-Header angegeben), wenn der Benutzer auf den Link klickt. Weitere Einzelheiten finden Sie in der [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

    Es gibt zwei Versionen dieses Attributs, die Sie festlegen können:
    - Boolean, d.h. nur der Name `attributionsrc`. Dies gibt an, dass Sie den {{httpheader("Attribution-Reporting-Eligible")}}-Header an denselben Server senden möchten, auf den das `href`-Attribut zeigt. Dies ist in Ordnung, wenn Sie die Registrierung der Attributionsquelle auf demselben Server handhaben.
    - Wert, der eine oder mehrere URLs enthält, zum Beispiel:

      ```html
      attributionsrc="https://a.example/register-source
      https://b.example/register-source"
      ```

      Dies ist nützlich in Fällen, in denen die angeforderte Ressource nicht auf einem von Ihnen kontrollierten Server vorhanden ist oder Sie nur die Registrierung der Attributionsquelle auf einem anderen Server handhaben möchten. In diesem Fall können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Wenn die Ressourcenanfrage ausgeführt wird, wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header an die in `attributionsrc` angegebenen URL(s) zusätzlich zum Ursprungsserver der Ressource gesendet. Diese URLs können dann mit dem {{httpheader("Attribution-Reporting-Register-Source")}} antworten, um die Registrierung abzuschließen.

      > [!NOTE]
      > Die Angabe mehrerer URLs bedeutet, dass mehrere Attributionsquellen für dasselbe Feature registriert werden können. Sie könnten zum Beispiel unterschiedliche Kampagnen haben, deren Erfolg Sie messen möchten, indem Sie unterschiedliche Berichte über verschiedene Daten erstellen.

    `<a>`-Elemente können nicht als Attributionstrigger verwendet werden, nur als Quellen.

- `download`
  - : Bewirkt, dass der Browser die verlinkte URL als Download behandelt. Kann mit oder ohne `filename`-Wert verwendet werden:
    - Ohne Wert schlägt der Browser einen Dateinamen/Erweiterung vor, die aus verschiedenen Quellen generiert werden:
      - Der {{HTTPHeader("Content-Disposition")}} HTTP-Header
      - Das letzte Segment im URL-[Pfad](/de/docs/Web/API/URL/pathname)
      - Der {{Glossary("MIME_type", "Medientyp")}} (aus dem {{HTTPHeader("Content-Type")}}-Header, dem Anfang einer [`data:` URL](/de/docs/Web/URI/Reference/Schemes/data) oder [`Blob.type`](/de/docs/Web/API/Blob/type) für eine [`blob:` URL](/de/docs/Web/URI/Reference/Schemes/blob))

    - `filename`: Bei der Angabe eines Wertes wird dieser als Dateiname vorgeschlagen. Zeichen `/` und `\` werden in Unterstriche (`_`) umgewandelt. Dateisysteme können andere Zeichen in Dateinamen verbieten, daher werden Browser den vorgeschlagenen Namen bei Bedarf anpassen.

    > [!NOTE]
    >
    > - `download` funktioniert nur für [Same-Origin-URLs](/de/docs/Web/Security/Defenses/Same-origin_policy) oder die Schemata `blob:` und `data:`.
    > - Wie Browser Downloads behandeln, variiert je nach Browser, Benutzereinstellungen und anderen Faktoren. Der Benutzer kann aufgefordert werden, bevor ein Download beginnt, oder die Datei kann automatisch gespeichert oder sie kann automatisch geöffnet werden, entweder in einer externen Anwendung oder im Browser selbst.
    > - Wenn der `Content-Disposition`-Header andere Informationen als das `download`-Attribut enthält, kann sich das Ergebnis unterscheiden:
    >   - Wenn der Header einen `filename` angibt, hat er Vorrang vor einem im `download`-Attribut angegebenen Dateinamen.
    >   - Wenn der Header eine Disposition von `inline` angibt, priorisieren Chrome und Firefox das Attribut und behandeln es als Download. Alte Firefox-Versionen (vor 82) priorisieren den Header und zeigen den Inhalt inline an.

- `href`
  - : Die URL, auf die der Hyperlink zeigt. Links sind nicht auf HTTP-basierte URLs beschränkt – sie können jedes URL-Schema verwenden, das von Browsern unterstützt wird:
    - Telefonnummern mit `tel:` URLs
    - E-Mail-Adressen mit `mailto:` URLs
    - SMS-Nachrichten mit `sms:` URLs
    - Ausführbarer Code mit [`javascript:` URLs](/de/docs/Web/URI/Reference/Schemes/javascript)
    - Während Webbrowser möglicherweise keine anderen URL-Schemata unterstützen, können Websites dies mit [`registerProtocolHandler()`](/de/docs/Web/API/Navigator/registerProtocolHandler)

    Darüber hinaus können andere URL-Funktionen bestimmte Teile der Ressource lokalisieren, einschließlich:
    - Abschnitte einer Seite mit Dokumentfragmenten
    - Spezifische Textteile mit [Textfragmenten](/de/docs/Web/URI/Reference/Fragment/Text_fragments)
    - Stücke von Mediendateien mit Medienfragmenten

- `hreflang`
  - : Gibt die menschliche Sprache der verlinkten URL an. Keine integrierte Funktionalität. Erlaubte Werte sind dieselben wie [das globale `lang`-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/lang).
- `interestfor` {{experimental_inline}} {{non-standard_inline}}
  - : Definiert das `<a>`-Element als **Interest-Invoker**. Sein Wert ist die `id` des Ziel-Elements, das in irgendeiner Weise beeinflusst wird (normalerweise angezeigt oder versteckt), wenn Interesse am Aufrufer-Element gezeigt oder verloren wird (zum Beispiel durch Hovern/Verlassen oder Fokussieren/Entfokussieren). Weitere Details und Beispiele finden Sie unter [Verwenden von Interest-Invokers](/de/docs/Web/API/Popover_API/Using_interest_invokers).
- `ping`
  - : Eine durch Leerzeichen getrennte Liste von URLs. Wenn der Link gefolgt wird, sendet der Browser {{HTTPMethod("POST")}}-Anfragen mit dem Body `PING` an die URLs. Typischerweise für Tracking.
- `referrerpolicy`
  - : Wie viel vom [Referrer](/de/docs/Web/HTTP/Reference/Headers/Referer) gesendet wird, wenn dem Link gefolgt wird.
    - `no-referrer`: Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}}-Header wird nicht an {{Glossary("origin", "Ursprünge")}} ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`: Der gesendete Referrer ist auf den Ursprung der referenzierenden Seite beschränkt: sein [Schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), {{Glossary("host", "Host")}} und {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`: Der Referrer, der an andere Ursprünge gesendet wird, ist auf das Schema, den Host und den Port beschränkt. Navigationen auf demselben Ursprung enthalten weiterhin den Pfad.
    - `same-origin`: Ein Referrer wird für {{Glossary("Same-origin_policy", "desselben Ursprung")}} gesendet, aber Cross-Origin-Anfragen enthalten keine Referrer-Informationen.
    - `strict-origin`: Senden Sie den Ursprung des Dokuments nur als Referrer, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), senden Sie es jedoch nicht an eine weniger sichere Destination (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (standardmäßig): Senden Sie eine vollständige URL, wenn eine Anfrage desselben Ursprungs durchgeführt wird, senden Sie nur den Ursprung, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), und senden Sie keinen Header zu einer weniger sicheren Destination (HTTPS→HTTP).
    - `unsafe-url`: Der Referrer enthält den Ursprung _und_ den Pfad (jedoch nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), das [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder den [Benutzernamen](/de/docs/Web/API/HTMLAnchorElement/username)). **Dieser Wert ist unsicher**, da er Ursprünge und Pfade von TLS-geschützten Ressourcen an unsichere Ursprünge weitergibt.

- [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)
  - : Die Beziehung der verlinkten URL als durch Leerzeichen getrennte Link-Typen.
- `target`
  - : Wo die verlinkte URL angezeigt werden soll, als Name für einen _Browsing-Kontext_ (einen Tab, ein Fenster oder {{HTMLElement("iframe")}}). Die folgenden Schlüsselwörter haben spezielle Bedeutungen dafür, wo die URL geladen wird:
    - `_self`: Der aktuelle Browsing-Kontext. (Standard)
    - `_blank`: Normalerweise ein neuer Tab, aber Benutzer können Browser so konfigurieren, dass stattdessen ein neues Fenster geöffnet wird.
    - `_parent`: Der übergeordnete Browsing-Kontext des aktuellen. Wenn kein Elternkontext vorhanden ist, verhält es sich wie `_self`.
    - `_top`: Der oberste Browsing-Kontext. Konkret bedeutet dies den "höchsten" Kontext, der ein Vorfahre des aktuellen ist. Wenn keine Vorfahren vorhanden sind, verhält es sich wie `_self`.
    - `_unfencedTop`: Ermöglicht eingebetteten [fenced frames](/de/docs/Web/API/Fenced_frame_API) die Navigation des Top-Level-Frames (d.h. über den Wurzelknoten des fenced frame hinaus, im Gegensatz zu anderen reservierten Zielen). Beachten Sie, dass die Navigation dennoch erfolgreich ist, wenn dies außerhalb eines fenced frame-Kontextes verwendet wird, jedoch nicht wie ein reserviertes Schlüsselwort wirkt.

    > [!NOTE]
    > Das Setzen von `target="_blank"` auf `<a>`-Elementen bietet implizit dasselbe `rel`-Verhalten wie das Setzen von [`rel="noopener"`](/de/docs/Web/HTML/Reference/Attributes/rel/noopener), das `window.opener` nicht setzt.

- `type`
  - : Gibt das Format der verlinkten URL mit einem {{Glossary("MIME_type", "MIME-Typ")}} an. Keine integrierte Funktionalität.

### Veraltete Attribute

- `charset` {{Deprecated_Inline}}
  - : Deutete auf die {{Glossary("character_encoding", "Zeichenkodierung")}} der verlinkten URL hin.

    > [!NOTE]
    > Dieses Attribut ist veraltet und **sollte von Autoren nicht verwendet werden**. Verwenden Sie stattdessen den HTTP-{{HTTPHeader("Content-Type")}}-Header auf der verlinkten URL.

- `coords` {{Deprecated_Inline}}
  - : Wurde mit [dem `shape`-Attribut](#shape) verwendet. Eine durch Kommas getrennte Liste von Koordinaten.
- `name` {{Deprecated_Inline}}
  - : War erforderlich, um einen möglichen Zielort auf einer Seite zu definieren. In HTML 4.01 konnten `id` und `name` beide auf `<a>` verwendet werden, solange sie identische Werte hatten.

    > [!NOTE]
    > Verwenden Sie stattdessen das globale Attribut [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id).

- `rev` {{Deprecated_Inline}}
  - : Spezifizierte einen umgekehrten Link; das Gegenteil des [`rel`-Attributs](#rel). Veraltet, da es sehr verwirrend war.
- `shape` {{Deprecated_Inline}}
  - : Die Form des Hyperlink-Bereichs in einer Image-Map.

    > [!NOTE]
    > Verwenden Sie stattdessen das {{HTMLElement("area")}}-Element für Image-Maps.

## Barrierefreiheit

### Starker Link-Text

**Der Inhalt innerhalb eines Links sollte darauf hinweisen, wohin der Link führt**, selbst außerhalb des Kontexts.

#### Unzugänglicher, schwacher Link-Text

Ein leider häufiger Fehler ist es, nur die Wörter "hier klicken" oder "hier" zu verlinken:

```html example-bad
<p>Learn more about our products <a href="/products">here</a>.</p>
```

##### Ergebnis

{{EmbedLiveSample('Unzugänglicher, schwacher Link-Text', '100%', '50')}}

#### Zugänglicher, starker Link-Text

Glücklicherweise ist dies eine einfache Korrektur, und sie ist tatsächlich kürzer als die unzugängliche Version!

```html example-good
<p>Learn more <a href="/products">about our products</a>.</p>
```

##### Ergebnis

{{EmbedLiveSample('Zugänglicher, starker Link-Text', '100%', '50')}}

Hilfssoftware hat Abkürzungen, um alle Links auf einer Seite aufzulisten. Starker Link-Text kommt jedoch allen Benutzern zugute – die Abkürzung "alle Links auflisten" emuliert, wie sehende Benutzer Seiten schnell überfliegen.

### onclick-Ereignisse

Ankerelemente werden oft als falsche Schaltflächen missbraucht, indem ihr `href` auf `#` oder [`javascript:void(0)`](/de/docs/Web/URI/Reference/Schemes/javascript) gesetzt wird, um zu verhindern, dass die Seite aktualisiert wird, und dann auf ihre `click`-Ereignisse gehört wird.

Diese falschen `href`-Werte verursachen unerwartetes Verhalten beim Kopieren/Verschieben von Links, Öffnen von Links in einem neuen Tab/Fenster, Bookmarken oder wenn JavaScript geladen ist, Fehler hat oder deaktiviert ist. Sie vermitteln auch falsche Semantik für assistive Technologien, wie z.B. Screenreader.

Verwenden Sie stattdessen ein {{HTMLElement("button")}}. Im Allgemeinen **sollten Sie nur ein Hyperlink für die Navigation zu einer echten URL verwenden**.

### Externe Links und Links zu Nicht-HTML-Ressourcen

Links, die in einem neuen Tab/Fenster über `target="_blank"` geöffnet werden, oder Links, die auf eine Download-Datei verweisen, sollten angeben, was passiert, wenn der Link gefolgt wird.

Menschen mit Sehbehinderungen, die mit Bildschirmlesetechnologie navigieren, oder mit kognitiven Beeinträchtigungen können verwirrt sein, wenn sich unerwartet ein neuer Tab, ein neues Fenster oder eine Anwendung öffnet. Ältere Bildschirmlesesoftware kündigt eventuell nicht einmal das Verhalten an.

#### Link, der einen neuen Tab/ein neues Fenster öffnet

```html
<a target="_blank" href="https://www.wikipedia.org">
  Wikipedia (opens in new tab)
</a>
```

##### Ergebnis

{{EmbedLiveSample('Link, der einen neuen Tab/ein neues Fenster öffnet')}}

#### Link zu einer Nicht-HTML-Ressource

Wenn ein Icon verwendet wird, um das Linkverhalten anzuzeigen, stellen Sie sicher, dass es ein [`alt`-Attribut](/de/docs/Web/HTML/Reference/Elements/img#alt) hat, um seinen Zweck zu beschreiben. Falls das Icon fehlt, wird der Inhalt des `alt`-Attributs dennoch das Verhalten des Links vermitteln.

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
- [MDN / Verstehen von WCAG, Leitfaden 3.2](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Understandable#guideline_3.2_—_predictable_make_web_pages_appear_and_operate_in_predictable_ways)
- [G200: Öffnen von neuen Fenstern und Tabs nur bei Bedarf](https://www.w3.org/TR/WCAG20-TECHS/G200.html)
- [G201: Benutzern im Voraus mitteilen, wenn ein neues Fenster geöffnet wird](https://www.w3.org/TR/WCAG20-TECHS/G201.html)

### Skip-Links

Ein **Skip-Link** ist ein Link, der so früh wie möglich im {{HTMLElement("body")}}-Inhalt platziert wird und auf den Beginn des Hauptinhalts der Seite verweist. In der Regel versteckt CSS einen Skip-Link vom Bildschirm, bis er fokussiert wird.

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

Skip-Links lassen Tastaturbenutzer Inhalte umgehen, die auf mehreren Seiten wiederholt werden, wie z.B. die Kopfzeilen-Navigation.

Skip-Links sind besonders nützlich für Menschen, die mit Hilfe von assistiver Technologie wie Schaltersteuerung, Sprachbefehl oder Mundstiften/Kopfwands aufhängig navigieren, bei denen das Navigieren durch sich wiederholende Links mühsam sein kann.

- [WebAIM: "Skip Navigation" Links](https://webaim.org/techniques/skipnav/)
- [Anleitung: Verwenden von Skip-Navigationslinks](https://www.a11yproject.com/posts/skip-nav-links/)
- [MDN / Verstehen von WCAG, Leitfaden 2.4 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.4_%e2%80%94_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Verstehen des Erfolgskriteriums 2.4.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)

### Größe und Nähe

#### Größe

Interaktive Elemente, wie Links, sollten einen Bereich bieten, der groß genug ist, damit er leicht aktiviert werden kann. Dies hilft einer Vielzahl von Menschen, einschließlich solchen mit motorischen Kontrollproblemen und denen, die ungenaue Eingaben wie Touchscreens verwenden. Eine Mindestgröße von 44×44 [CSS-Pixel](https://w3c.github.io/wcag/guidelines/22/#dfn-css-pixels) wird empfohlen.

Links nur mit Text in Prosa-Inhalten sind von dieser Anforderung ausgenommen, aber es ist dennoch eine gute Idee sicherzustellen, dass genug Text verlinkt ist, um leicht aktiviert zu werden.

- [Verstehen des Erfolgskriteriums 2.5.5: Zielgröße](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Zielgröße und 2.5.5](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Schnelltest: Große Touch-Ziele](https://www.a11yproject.com/posts/large-touch-targets/)

#### Nähe

Interaktive Elemente, wie Links, die in enger visueller Nähe platziert sind, sollten durch einen Abstand getrennt sein. Der Abstand hilft Menschen mit motorischen Kontrollproblemen, die sonst versehentlich das falsche interaktive Element aktivieren könnten.

Der Abstand kann mit CSS-Eigenschaften wie {{CSSxRef("margin")}} geschaffen werden.

- [Handtremor und das Riesenbutton-Problem](https://axesslab.com/hand-tremors/)

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

Um Links zu erstellen, die im E-Mail-Programm des Benutzers geöffnet werden und das Versenden einer neuen Nachricht ermöglichen, verwenden Sie das `mailto:`-Schema:

```html
<a href="mailto:nowhere@mozilla.org">Send email to nowhere</a>
```

#### Ergebnis

{{EmbedLiveSample('Verlinkung zu einer E-Mail-Adresse')}}

Für Details zu `mailto:`-URLs, wie z.B. das Einschließen eines Betreffs oder Textes, siehe [E-Mail-Links](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links#email_links) oder {{RFC(6068)}}.

### Verlinkung zu Telefonnummern

```html
<a href="tel:+49.157.0156">+49 157 0156</a>
<a href="tel:+1(800)555-0123">(800) 555-0123</a>
```

#### Ergebnis

{{EmbedLiveSample('Verlinkung zu Telefonnummern')}}

Das Verhalten von `tel:`-Links variiert je nach Gerätefähigkeit:

- Mobilgeräte wählen die Nummer automatisch.
- Die meisten Betriebssysteme haben Programme, die Anrufe tätigen können, wie Skype oder FaceTime.
- Websites können Anrufe über [`registerProtocolHandler`](/de/docs/Web/API/Navigator/registerProtocolHandler) tätigen, wie etwa `web.skype.com`.
- Andere Verhaltensweisen umfassen das Speichern der Nummer in Kontakten oder das Senden der Nummer an ein anderes Gerät.

Siehe {{RFC(3966)}} für Syntax, zusätzliche Funktionen und weitere Details zum `tel:`-URL-Schema.

### Verwendung des Download-Attributs, um ein `<canvas>` als PNG zu speichern

Um den Inhalt eines {{HTMLElement("canvas")}}-Elements als Bild zu speichern, können Sie einen Link erstellen, bei dem das `href` die Canvas-Daten als `data:`-URL ist, die mit JavaScript erstellt wurde, und das `download`-Attribut den Dateinamen für die heruntergeladene PNG-Datei angibt:

#### Beispiel-Painting-App mit Speicherlink

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

{{EmbedLiveSample('Beispiel-Painting-App mit Speicherlink', '100%', '400')}}

## Sicherheit und Datenschutz

`<a>`-Elemente können Auswirkungen auf die Sicherheit und den Datenschutz der Benutzer haben. Siehe [`Referer`-Header: Datenschutz- und Sicherheitsbedenken](/de/docs/Web/Privacy/Guides/Referer_header:_privacy_and_security_concerns) für Informationen.

Die Verwendung von `target="_blank"` ohne [`rel="noreferrer"`](/de/docs/Web/HTML/Reference/Attributes/rel/noreferrer) und [`rel="noopener"`](/de/docs/Web/HTML/Reference/Attributes/rel/noopener) macht die Website anfällig für Angriffe mit der [`window.opener`](/de/docs/Web/API/Window/opener)-API-Exploitation, obwohl in neueren Browserversionen das Setzen von `target="_blank"` denselben Schutz wie das Setzen von `rel="noopener"` bietet. Siehe [Browser-Kompatibilität](#browser-kompatibilität) für Details.

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
          >phrasierungsinhalt</a
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
        >, außer dass kein Nachkomme
        <a
          href="/de/docs/Web/HTML/Guides/Content_categories#interactive_content"
          >interaktiver Inhalt</a
        > oder ein
        <code>&lt;a&gt;</code>-Element sein darf, und kein Nachkomme darf ein festgelegtes
        <a
          href="/de/docs/Web/HTML/Reference/Global_attributes/tabindex"
          >tabindex</a
        >-Attribut haben.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Start- als auch der Endtag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flussinhalt</a
        > akzeptiert, aber keine weiteren <code>&lt;a&gt;</code>-Elemente.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/link_role"><code>link</code></a>, wenn das <code>href</code>-Attribut
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
          <li>jedes</li>
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
- {{CSSxRef(":link")}} ist eine CSS-Pseudoklasse, die `<a>`-Elemente mit URL im `href`-Attribut, die vom Benutzer noch nicht besucht wurden, abgleichen wird.
- {{CSSxRef(":visited")}} ist eine CSS-Pseudoklasse, die `<a>`-Elemente mit URL im `href`-Attribut, die vom Benutzer in der Vergangenheit besucht wurden, abgleichen wird.
- {{CSSxRef(":any-link")}} ist eine CSS-Pseudoklasse, die `<a>`-Elemente mit `href`-Attribut abgleichen wird.
- [Textfragmente](/de/docs/Web/URI/Reference/Fragment/Text_fragments) sind Benutzer-Agent-Anweisungen, die URLs hinzugefügt werden, um Inhaltsautoren das Verlinken auf spezifischen Text auf einer Seite zu ermöglichen, ohne dass IDs erforderlich sind.
