---
title: HTML-Ankerelement `<a>`
short-title: <a>
slug: Web/HTML/Reference/Elements/a
l10n:
  sourceCommit: d8a98813a991199d24cf40bc74298850d8b41e37
---

Das **`<a>`**-[HTML](/de/docs/Web/HTML)-Element (auch _Ankerelement_ genannt) erstellt mit [seinem `href`-Attribut](#href) einen Hyperlink zu Webseiten, Dateien, E-Mail-Adressen, Stellen auf derselben Seite oder anderen Zielen, die sich über eine URL adressieren lassen.

Der Inhalt eines `<a>`-Elements _sollte_ das Ziel des Links erkennen lassen. Wenn das `href`-Attribut vorhanden ist, wird der Link aktiviert, wenn Sie die Eingabetaste drücken, während das `<a>`-Element fokussiert ist.

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
  - : Gibt an, dass der Browser einen {{httpheader("Attribution-Reporting-Eligible")}}-Header senden soll. Serverseitig wird damit ausgelöst, dass in der Antwort ein {{httpheader("Attribution-Reporting-Register-Source")}}-Header gesendet wird, um eine [navigationsbasierte Attributionsquelle](/de/docs/Web/API/Attribution_Reporting_API/Registering_sources#navigation-based_attribution_sources) zu registrieren.

    Wenn ein Benutzer auf den Link klickt, speichert der Browser die Quelldaten der navigationsbasierten Attributionsquelle, die im {{httpheader("Attribution-Reporting-Register-Source")}}-Antwortheader bereitgestellt werden. Weitere Einzelheiten finden Sie unter [Attribution Reporting API](/de/docs/Web/API/Attribution_Reporting_API).

    Dieses Attribut kann auf zwei Arten gesetzt werden:
    - Als boolesches Attribut, also nur mit dem Namen `attributionsrc`. Dadurch wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header an denselben Server gesendet, auf den das `href`-Attribut verweist. Das eignet sich, wenn Sie die Registrierung der Attributionsquelle auf demselben Server abwickeln.
    - Mit einem Wert, der eine oder mehrere URLs enthält, zum Beispiel:

      ```html
      attributionsrc="https://a.example/register-source
      https://b.example/register-source"
      ```

      Dies ist nützlich, wenn sich die angeforderte Ressource nicht auf einem von Ihnen kontrollierten Server befindet oder Sie die Attributionsquelle auf einem anderen Server registrieren möchten. In diesem Fall können Sie eine oder mehrere URLs als Wert von `attributionsrc` angeben. Beim Anfordern der Ressource wird der {{httpheader("Attribution-Reporting-Eligible")}}-Header zusätzlich zum Ursprungsserver der Ressource an die in `attributionsrc` angegebenen URLs gesendet. Diese URLs können mit dem {{httpheader("Attribution-Reporting-Register-Source")}}-Header antworten, um die Registrierung abzuschließen.

      > [!NOTE]
      > Wenn Sie mehrere URLs angeben, können für dieselbe Funktion mehrere Attributionsquellen registriert werden. So könnten Sie beispielsweise den Erfolg verschiedener Kampagnen messen und dafür unterschiedliche Berichte auf Grundlage unterschiedlicher Daten erstellen.

    `<a>`-Elemente können nur als Attributionsquellen verwendet werden, nicht als Attributionsauslöser.

- `download`
  - : Veranlasst den Browser, die verlinkte URL als Download zu behandeln. Das Attribut kann mit oder ohne `filename`-Wert verwendet werden:
    - Ohne Wert schlägt der Browser einen Dateinamen und eine Dateiendung vor, die er aus verschiedenen Quellen ableitet:
      - Dem HTTP-Header {{HTTPHeader("Content-Disposition")}}
      - Dem letzten Abschnitt des URL-[Pfads](/de/docs/Web/API/URL/pathname)
      - Dem {{Glossary("MIME_type", "Medientyp")}} (aus dem {{HTTPHeader("Content-Type")}}-Header, dem Anfang einer [`data:`-URL](/de/docs/Web/URI/Reference/Schemes/data) oder [`Blob.type`](/de/docs/Web/API/Blob/type) bei einer [`blob:`-URL](/de/docs/Web/URI/Reference/Schemes/blob))

    - `filename`: Ein angegebener Wert wird als Dateiname vorgeschlagen. Die Zeichen `/` und `\` werden in Unterstriche (`_`) umgewandelt. Da Dateisysteme weitere Zeichen in Dateinamen verbieten können, passen Browser den vorgeschlagenen Namen bei Bedarf an. Diese Anpassung erfolgt beim Auslösen des Downloads und ist über die Eigenschaft [`HTMLAnchorElement.download`](/de/docs/Web/API/HTMLAnchorElement/download) nicht erkennbar.

    > [!NOTE]
    >
    > - `download` funktioniert nur für [URLs desselben Ursprungs](/de/docs/Web/Security/Defenses/Same-origin_policy), [`blob:`-URLs](/de/docs/Web/URI/Reference/Schemes/blob) desselben Ursprungs und das [`data:`-Schema](/de/docs/Web/URI/Reference/Schemes/data). Bei anderen URLs wird das `download`-Attribut ignoriert und eine normale Navigation durchgeführt. Die Zielseite kann allerdings weiterhin mit `Content-Disposition` einen Download veranlassen.
    > - Wie Browser Downloads behandeln, hängt vom Browser, den Benutzereinstellungen und weiteren Faktoren ab. Vor Beginn eines Downloads kann eine Bestätigung erforderlich sein; die Datei kann aber auch automatisch gespeichert oder in einer externen Anwendung beziehungsweise im Browser selbst geöffnet werden.
    > - Wenn das `download`-Attribut berücksichtigt wird, hat es Vorrang vor dem Verhalten von `Content-Disposition: inline`. Der `filename`-Parameter von `Content-Disposition` hat jedoch Vorrang vor dem Namen im `download`-Attribut.

- `href`
  - : Die URL, auf die der Hyperlink verweist. Links sind nicht auf HTTP-basierte URLs beschränkt – sie können jedes von Browsern unterstützte URL-Schema verwenden:
    - Telefonnummern mit `tel:`-URLs
    - E-Mail-Adressen mit `mailto:`-URLs
    - SMS-Nachrichten mit `sms:`-URLs
    - Ausführbarer Code mit [`javascript:`-URLs](/de/docs/Web/URI/Reference/Schemes/javascript)
    - Auch wenn Webbrowser andere URL-Schemata möglicherweise nicht unterstützen, können Websites dies mithilfe von [`registerProtocolHandler()`](/de/docs/Web/API/Navigator/registerProtocolHandler) tun.

    Darüber hinaus lassen sich mit weiteren URL-Funktionen bestimmte Teile einer Ressource adressieren, darunter:
    - Abschnitte einer Seite mit Dokumentfragmenten
    - Bestimmte Textstellen mit [Textfragmenten](/de/docs/Web/URI/Reference/Fragment/Text_fragments)
    - Ausschnitte von Mediendateien mit Medienfragmenten

- `hreflang`
  - : Gibt einen Hinweis auf die natürliche Sprache der verlinkten URL. Hat keine integrierte Funktion. Zulässige Werte entsprechen denen des [globalen `lang`-Attributs](/de/docs/Web/HTML/Reference/Global_attributes/lang).
- `interestfor` {{experimental_inline}} {{non-standard_inline}}
  - : Definiert das `<a>`-Element als **Interest Invoker**. Sein Wert ist die `id` des Zielelements. Dieses wird auf bestimmte Weise beeinflusst (normalerweise angezeigt oder ausgeblendet), wenn am auslösenden Element Interesse entsteht oder verloren geht, etwa durch Bewegen des Mauszeigers darüber beziehungsweise weg davon oder durch Fokussieren beziehungsweise Aufheben des Fokus. Weitere Einzelheiten und Beispiele finden Sie unter [Interest Invoker verwenden](/de/docs/Web/API/Popover_API/Using_interest_invokers).
- `ping`
  - : Eine durch Leerzeichen getrennte Liste von URLs. Wenn dem Link gefolgt wird, sendet der Browser {{HTTPMethod("POST")}}-Anfragen mit dem Body `PING` an diese URLs. Dies wird üblicherweise für Tracking verwendet.
- `referrerpolicy`
  - : Legt fest, wie viele [Referrer-Informationen](/de/docs/Web/HTTP/Reference/Headers/Referer) beim Folgen des Links gesendet werden.
    - `no-referrer`: Der {{HTTPHeader("Referer")}}-Header wird nicht gesendet.
    - `no-referrer-when-downgrade`: Der {{HTTPHeader("Referer")}}-Header wird nicht an {{Glossary("origin", "Ursprünge")}} ohne {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) gesendet.
    - `origin`: Der gesendete Referrer wird auf den Ursprung der verweisenden Seite beschränkt: ihr [Schema](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL), ihren {{Glossary("host", "Host")}} und ihren {{Glossary("port", "Port")}}.
    - `origin-when-cross-origin`: Bei anderen Ursprüngen wird der gesendete Referrer auf Schema, Host und Port beschränkt. Bei Navigationen innerhalb desselben Ursprungs ist weiterhin der Pfad enthalten.
    - `same-origin`: Bei Anfragen innerhalb {{Glossary("Same-origin_policy", "desselben Ursprungs")}} wird ein Referrer gesendet; bei ursprungsübergreifenden Anfragen werden keine Referrer-Informationen gesendet.
    - `strict-origin`: Der Ursprung des Dokuments wird nur dann als Referrer gesendet, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS), nicht aber an ein weniger sicheres Ziel (HTTPS→HTTP).
    - `strict-origin-when-cross-origin` (Standard): Bei Anfragen innerhalb desselben Ursprungs wird die vollständige URL gesendet. Bleibt das Sicherheitsniveau des Protokolls gleich (HTTPS→HTTPS), wird nur der Ursprung gesendet. An ein weniger sicheres Ziel (HTTPS→HTTP) wird kein Header gesendet.
    - `unsafe-url`: Der Referrer enthält den Ursprung _und_ den Pfad, jedoch nicht das [Fragment](/de/docs/Web/API/HTMLAnchorElement/hash), das [Passwort](/de/docs/Web/API/HTMLAnchorElement/password) oder den [Benutzernamen](/de/docs/Web/API/HTMLAnchorElement/username). **Dieser Wert ist unsicher**, da er Ursprünge und Pfade TLS-geschützter Ressourcen an unsichere Ursprünge weitergibt.

- [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)
  - : Beschreibt die Beziehung zur verlinkten URL durch eine durch Leerzeichen getrennte Liste von Linktypen.
- `target`
  - : Legt fest, wo die verlinkte URL angezeigt wird, indem ein _Browsing Context_ (ein Tab, ein Fenster oder ein {{HTMLElement("iframe")}}) benannt wird. Die folgenden Schlüsselwörter legen fest, wo die URL geladen wird:
    - `_self`: Der aktuelle Browsing Context. (Standard)
    - `_blank`: Üblicherweise ein neuer Tab; Benutzer können Browser jedoch so konfigurieren, dass stattdessen ein neues Fenster geöffnet wird.
    - `_parent`: Der übergeordnete Browsing Context des aktuellen Kontexts. Ist keiner vorhanden, verhält sich der Wert wie `_self`.
    - `_top`: Der oberste Browsing Context, genauer gesagt der „höchste“ übergeordnete Kontext des aktuellen Kontexts. Ist keiner vorhanden, verhält sich der Wert wie `_self`.
    - `_unfencedTop`: Ermöglicht eingebetteten [Fenced Frames](/de/docs/Web/API/Fenced_frame_API), den Frame auf oberster Ebene zu navigieren, also über die Wurzel des Fenced Frames hinaus – anders als bei den anderen reservierten Zielangaben. Eine Navigation ist auch dann möglich, wenn dieser Wert außerhalb eines Fenced Frames verwendet wird; dort wirkt er jedoch nicht als reserviertes Schlüsselwort.

    > [!NOTE]
    > Wenn Sie `target="_blank"` für `<a>`-Elemente setzen, ergibt sich implizit dasselbe `rel`-Verhalten wie bei [`rel="noopener"`](/de/docs/Web/HTML/Reference/Attributes/rel/noopener): `window.opener` wird nicht gesetzt.

- `type`
  - : Gibt mit einem {{Glossary("MIME_type", "MIME-Typ")}} einen Hinweis auf das Format der verlinkten URL. Hat keine integrierte Funktion.

### Veraltete Attribute

- `charset` {{Deprecated_Inline}}
  - : Gab einen Hinweis auf die {{Glossary("character_encoding", "Zeichenkodierung")}} der verlinkten URL.

    > [!NOTE]
    > Dieses Attribut ist veraltet und **sollte nicht mehr verwendet werden**. Verwenden Sie stattdessen den HTTP-Header {{HTTPHeader("Content-Type")}} für die verlinkte URL.

- `coords` {{Deprecated_Inline}}
  - : Wurde zusammen mit [dem `shape`-Attribut](#shape) verwendet. Eine durch Kommas getrennte Liste von Koordinaten.
- `name` {{Deprecated_Inline}}
  - : War erforderlich, um eine mögliche Zielposition innerhalb einer Seite zu definieren. In HTML 4.01 konnten sowohl `id` als auch `name` auf `<a>` verwendet werden, sofern ihre Werte identisch waren.

    > [!NOTE]
    > Verwenden Sie stattdessen das globale Attribut [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id).

- `rev` {{Deprecated_Inline}}
  - : Gab eine umgekehrte Linkbeziehung an, also das Gegenteil des [`rel`-Attributs](#rel). Das Attribut ist veraltet, weil es leicht missverstanden werden kann.
- `shape` {{Deprecated_Inline}}
  - : Die Form des Hyperlink-Bereichs in einer Imagemap.

    > [!NOTE]
    > Verwenden Sie für Imagemaps stattdessen das {{HTMLElement("area")}}-Element.

## Barrierefreiheit

### Aussagekräftiger Linktext

**Der Inhalt eines Links sollte sein Ziel erkennen lassen**, auch wenn er ohne Kontext betrachtet wird.

#### Nicht barrierefreier, wenig aussagekräftiger Linktext

Ein leider häufiger Fehler besteht darin, nur die Wörter „hier klicken“ oder „hier“ zu verlinken:

```html example-bad
<p>Learn more about our products <a href="/products">here</a>.</p>
```

##### Ergebnis

{{EmbedLiveSample('Inaccessible, weak link text', '100%', '50')}}

#### Barrierefreier, aussagekräftiger Linktext

Glücklicherweise lässt sich das leicht beheben – und die barrierefreie Version ist sogar kürzer!

```html example-good
<p>Learn more <a href="/products">about our products</a>.</p>
```

##### Ergebnis

{{EmbedLiveSample('Accessible, strong link text', '100%', '50')}}

Unterstützende Software bietet Funktionen, mit denen sich alle Links einer Seite auflisten lassen. Aussagekräftige Linktexte helfen jedoch allen Benutzern: Eine solche Linkliste entspricht ungefähr der Art, wie sehende Benutzer eine Seite rasch überfliegen.

### onclick-Ereignisse

Ankerelemente werden häufig als vorgetäuschte Buttons missbraucht: Ihr `href` wird auf `#` oder [`javascript:void(0)`](/de/docs/Web/URI/Reference/Schemes/javascript) gesetzt, um ein erneutes Laden der Seite zu verhindern, und anschließend werden ihre `click`-Ereignisse verarbeitet.

Solche unechten `href`-Werte führen zu unerwartetem Verhalten, wenn Links kopiert oder gezogen, in einem neuen Tab oder Fenster geöffnet oder als Lesezeichen gespeichert werden. Probleme entstehen auch, während JavaScript lädt, wenn Fehler auftreten oder wenn JavaScript deaktiviert ist. Außerdem vermitteln diese Werte unterstützenden Technologien wie Screenreadern eine falsche Semantik.

Verwenden Sie stattdessen ein {{HTMLElement("button")}}. Grundsätzlich **sollten Sie Hyperlinks nur für die Navigation zu einer tatsächlichen URL verwenden**.

### Externe Links und Links zu Nicht-HTML-Ressourcen

Links, die über `target="_blank"` in einem neuen Tab oder Fenster geöffnet werden, sowie Links zu herunterladbaren Dateien sollten erkennen lassen, was beim Folgen des Links geschieht.

Menschen mit eingeschränktem Sehvermögen, Benutzer von Screenreadern und Menschen mit kognitiven Einschränkungen können irritiert sein, wenn sich unerwartet ein neuer Tab, ein neues Fenster oder eine Anwendung öffnet. Ältere Screenreader kündigen dieses Verhalten möglicherweise nicht einmal an.

#### Link, der einen neuen Tab oder ein neues Fenster öffnet

```html
<a target="_blank" href="https://www.wikipedia.org">
  Wikipedia (opens in new tab)
</a>
```

##### Ergebnis

{{EmbedLiveSample('Link that opens a new tab/window')}}

#### Link zu einer Nicht-HTML-Ressource

Wenn ein Symbol das Verhalten eines Links kennzeichnet, stellen Sie sicher, dass es ein [`alt`-Attribut](/de/docs/Web/HTML/Reference/Elements/img#alt) besitzt, das seinen Zweck beschreibt. Falls das Symbol nicht angezeigt wird, vermittelt der Inhalt des `alt`-Attributs weiterhin das Verhalten des Links.

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
- [G201: Benutzer vorab warnen, wenn ein neues Fenster geöffnet wird](https://www.w3.org/TR/WCAG20-TECHS/G201.html)

### Sprunglinks

Ein **Sprunglink** ist ein Link, der möglichst früh im Inhalt von {{HTMLElement("body")}} platziert wird und zum Anfang des Hauptinhalts der Seite führt. Üblicherweise blendet CSS den Sprunglink außerhalb des sichtbaren Bereichs aus, bis er fokussiert wird.

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

Mit Sprunglinks können Benutzer, die per Tastatur navigieren, Inhalte überspringen, die auf mehreren Seiten wiederholt werden, etwa die Navigation im Seitenkopf.

Sprunglinks sind besonders hilfreich für Menschen, die mithilfe unterstützender Technologien wie Schaltern oder Sprachsteuerung oder mit einem Mundstab beziehungsweise Kopfstab navigieren. Für sie kann das Durchlaufen wiederholter Links mühsam sein.

- [WebAIM: „Skip Navigation“-Links](https://webaim.org/techniques/skipnav/)
- [Anleitung: Links zum Überspringen der Navigation verwenden](https://www.a11yproject.com/posts/skip-nav-links/)
- [MDN / WCAG verstehen, Erläuterungen zu Richtlinie 2.4](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.4_%e2%80%94_navigable_provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Erfolgskriterium 2.4.1 verstehen](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)

### Größe und Abstand

#### Größe

Interaktive Elemente wie Links sollten eine ausreichend große Fläche bieten, damit sie sich leicht aktivieren lassen. Das hilft unter anderem Menschen mit Einschränkungen der motorischen Kontrolle und Benutzern unpräziser Eingabemethoden wie Touchscreens. Empfohlen wird eine Mindestgröße von 44 × 44 [CSS-Pixeln](https://w3c.github.io/wcag/guidelines/22/#dfn-css-pixels).

Reine Textlinks im Fließtext sind von dieser Anforderung ausgenommen. Dennoch ist es sinnvoll, genügend Text zu verlinken, damit der Link leicht aktiviert werden kann.

- [Erfolgskriterium 2.5.5 verstehen: Größe des Ziels](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Zielgröße und 2.5.5](https://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Schnelltest: Große Touch-Ziele](https://www.a11yproject.com/posts/large-touch-targets/)

#### Abstand

Interaktive Elemente wie Links, die optisch nah beieinanderliegen, sollten durch einen Abstand voneinander getrennt sein. Das hilft Menschen mit Einschränkungen der motorischen Kontrolle, die sonst versehentlich den falschen interaktiven Inhalt aktivieren könnten.

Abstände können mit CSS-Eigenschaften wie {{CSSxRef("margin")}} erzeugt werden.

- [Handzittern und das Problem riesiger Buttons](https://axesslab.com/hand-tremors/)

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
> Mit `href="#top"` oder einem leeren Fragment (`href="#"`) können Sie zum Anfang der aktuellen Seite verlinken, [wie in der HTML-Spezifikation festgelegt](https://html.spec.whatwg.org/multipage/browsing-the-web.html#scroll-to-the-fragment-identifier).

### Link zu einer E-Mail-Adresse

Um Links zu erstellen, die das E-Mail-Programm des Benutzers zum Verfassen einer neuen Nachricht öffnen, verwenden Sie das `mailto:`-Schema:

```html
<a href="mailto:nowhere@mozilla.org">Send email to nowhere</a>
```

#### Ergebnis

{{EmbedLiveSample('Linking to an email address')}}

Weitere Einzelheiten zu `mailto:`-URLs, etwa zum Einfügen eines Betreffs oder Nachrichtentexts, finden Sie unter [E-Mail-Links](/de/docs/Learn_web_development/Core/Structuring_content/Creating_links#email_links) oder in {{RFC(6068)}}.

### Link zu Telefonnummern

```html
<a href="tel:+49.157.0156">+49 157 0156</a>
<a href="tel:+1(800)555-0123">(800) 555-0123</a>
```

#### Ergebnis

{{EmbedLiveSample('Linking to telephone numbers')}}

Wie sich `tel:`-Links verhalten, hängt von den Fähigkeiten des Geräts ab:

- Mobilgeräte wählen die Nummer automatisch.
- Für die meisten Betriebssysteme gibt es Programme, mit denen sich Anrufe tätigen lassen, etwa Skype oder FaceTime.
- Websites können mit [`registerProtocolHandler`](/de/docs/Web/API/Navigator/registerProtocolHandler) Telefonanrufe ermöglichen, beispielsweise `web.skype.com`.
- Zu den weiteren möglichen Verhaltensweisen gehören das Speichern der Nummer in den Kontakten und das Senden der Nummer an ein anderes Gerät.

Syntax, zusätzliche Funktionen und weitere Einzelheiten zum URL-Schema `tel:` finden Sie in {{RFC(3966)}}.

### Das download-Attribut verwenden, um ein \<canvas> als PNG zu speichern

Um den Inhalt eines {{HTMLElement("canvas")}}-Elements als Bild zu speichern, können Sie einen Link erstellen, dessen `href` die mit JavaScript als `data:`-URL erzeugten Canvas-Daten enthält. Das `download`-Attribut gibt dabei den Dateinamen der heruntergeladenen PNG-Datei an:

#### Beispiel einer Malanwendung mit Speicherlink

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

`<a>`-Elemente können Auswirkungen auf die Sicherheit und den Datenschutz von Benutzern haben. Weitere Informationen finden Sie unter [`Referer`-Header: Datenschutz- und Sicherheitsbedenken](/de/docs/Web/Privacy/Guides/Referer_header:_privacy_and_security_concerns).

Wenn `target="_blank"` ohne [`rel="noreferrer"`](/de/docs/Web/HTML/Reference/Attributes/rel/noreferrer) und [`rel="noopener"`](/de/docs/Web/HTML/Reference/Attributes/rel/noopener) verwendet wird, kann die Website für Angriffe anfällig sein, die die [`window.opener`](/de/docs/Web/API/Window/opener)-API ausnutzen. Beachten Sie jedoch, dass `target="_blank"` in neueren Browserversionen implizit denselben Schutz wie `rel="noopener"` bietet. Einzelheiten finden Sie unter [Browser-Kompatibilität](#browser-kompatibilität).

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
          >Flow Content</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasing Content</a
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
          >Flow Content</a
        > zulässt, jedoch keine anderen <code>&lt;a&gt;</code>-Elemente.
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
      <th scope="row">Zulässige ARIA-Rollen</th>
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
          <li>jede</li>
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

- {{HTMLElement("link")}} ähnelt `<a>`, wird aber für Metadaten-Hyperlinks verwendet, die für Benutzer nicht sichtbar sind.
- {{CSSxRef(":link")}} ist eine CSS-Pseudoklasse, die auf `<a>`-Elemente mit einer URL im `href`-Attribut zutrifft, die der Benutzer noch nicht besucht hat.
- {{CSSxRef(":visited")}} ist eine CSS-Pseudoklasse, die auf `<a>`-Elemente mit einer URL im `href`-Attribut zutrifft, die der Benutzer bereits besucht hat.
- {{CSSxRef(":any-link")}} ist eine CSS-Pseudoklasse, die auf `<a>`-Elemente mit einem `href`-Attribut zutrifft.
- [Textfragmente](/de/docs/Web/URI/Reference/Fragment/Text_fragments) sind Anweisungen an den User Agent, die URLs hinzugefügt werden. Sie ermöglichen es Autoren, auf bestimmte Textstellen einer Seite zu verlinken, ohne dass dafür IDs erforderlich sind.
