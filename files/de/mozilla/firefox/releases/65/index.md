---
title: Firefox 65 Veröffentlichungshinweise für Entwickler
short-title: Firefox 65
slug: Mozilla/Firefox/Releases/65
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Dieser Artikel liefert Informationen über die Änderungen in Firefox 65, die Entwickler betreffen werden. Firefox 65 wurde am 29. Januar 2019 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklertools

- Der [Flexbox-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_flexbox_layouts/index.html) ist jetzt standardmäßig aktiviert.
- Unterstützung wurde im [JavaScript-Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) für XHR-Breakpoints hinzugefügt ([Firefox-Bug 821610](https://bugzil.la/821610)).
- Klicken Sie mit der rechten Maustaste auf ein Element im Zugänglichkeitsbaum des Accessibility-Viewers, um es [als JSON zu drucken](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#print-accessibility-tree-to-json) und im JSON-Viewer anzuzeigen.
- Die Anzeige des [Farbkontrasts](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#color-contrast) des Accessibility-Pickers wurde aktualisiert: Wenn der Hintergrund eines Textes komplex ist (z.B. ein Farbverlauf oder ein komplexes Bild), wird eine Spanne von Farbkontrastwerten angezeigt.
- Der Headers-Tab des [Netzwerkmonitors](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) zeigt jetzt die Referrer-Policy für die ausgewählte Anfrage an ([Firefox-Bug 1496742](https://bugzil.la/1496742)).
- Beim Anzeigen von Stack-Traces (z.B. in Konsolenprotokollen oder dem JavaScript-Debugger) werden Aufrufe von Framework-Methoden standardmäßig identifiziert und zusammengeklappt, was das Auffinden Ihres Codes erleichtert.
- Ähnlich wie in nativen Terminals können Sie nun die Rückwärtssuche verwenden, um Einträge in Ihrem JavaScript-Konsolenverlauf zu finden (`F9` unter Windows/Linux oder `Ctrl` + `R` auf macOS, dann ein Suchbegriff eingeben, gefolgt von `Ctrl` + `R`/`Ctrl` + `S`, um zwischen den Ergebnissen zu wechseln).
- Die `$0`-Verknüpfung der JavaScript-Konsole (referenziert das aktuell untersuchte Element auf der Seite) bietet jetzt Autovervollständigung an, so dass Sie zum Beispiel `$0.te` eingeben können, um Autovervollständigungsvorschläge für Eigenschaften wie `$0.textContent` zu erhalten.
- Die Änderungen, die Sie in der Regelansicht des Inspektors vornehmen, werden nun im Änderungsfenster aufgelistet ([Firefox-Bug 1503920](https://bugzil.la/1503920)).

### HTML

- Ereignisse werden nun auf deaktivierten HTML-Elementen ausgelöst, d.h. {{htmlelement("button")}}, {{htmlelement("fieldset")}}, {{htmlelement("input")}}, {{htmlelement("select")}} und {{htmlelement("textarea")}}-Elementen, die das Attribut `disabled` gesetzt haben ([Firefox-Bug 329509](https://bugzil.la/329509)).
- Das Entfernen des `src`-Attributs eines {{htmlelement("iframe")}}-Elements führt jetzt dazu, dass `about:blank` in das `<iframe>` geladen wird, was nun mit Chrome und Safari übereinstimmt ([Firefox-Bug 1507842](https://bugzil.la/1507842)). Zuvor hatte das Entfernen von `src` keinen Effekt auf den `<iframe>`-Inhalt.
- Wir haben Unterstützung für das [`referrerpolicy`](/de/docs/Web/HTML/Reference/Elements/script#referrerpolicy)-Attribut auf {{htmlelement("script")}}-Elementen hinzugefügt ([Firefox-Bug 1460920](https://bugzil.la/1460920)).

### CSS

- Der Wert `crisp-edges` der {{cssxref("image-rendering")}}-Eigenschaft ist nun unverändert ([Firefox-Bug 1496617](https://bugzil.la/1496617)).
- Ein {{cssxref("scrollbar-color")}}-Wert von `auto` wird jetzt zu `auto` statt zu zwei Farben aufgelöst ([Firefox-Bug 1501418](https://bugzil.la/1501418)).
- Die `break-*`-Eigenschaften wurden implementiert, und die veralteten `page-break-*`-Eigenschaften wurden auf sie umgelegt ([Firefox-Bug 775618](https://bugzil.la/775618)):
  - {{cssxref("break-before")}} ist jetzt ein Alias für {{cssxref("page-break-before")}}.
  - {{cssxref("break-after")}} ist jetzt ein Alias für {{cssxref("page-break-after")}}.
  - {{cssxref("break-inside")}} ist jetzt ein Alias für {{cssxref("page-break-inside")}}.

- Der `anywhere`-Wert der {{cssxref("overflow-wrap")}}-Eigenschaft wurde implementiert ([Firefox-Bug 1505786](https://bugzil.la/1505786)).
- Die neuen Stufenpositions-Schlüsselwörter `jump-start`, `jump-end`, `jump-none` und `jump-both` — die innerhalb der [`steps()`-Timing-Funktion](/de/docs/Web/CSS/easing-function/steps) verwendbar sind — wurden implementiert ([Firefox-Bug 1496619](https://bugzil.la/1496619)). Das fällt auch mit der Entfernung der `frames()`-Timing-Funktion zusammen, die zuvor die Art der Implementierung solcher Funktionalitäten darstellte und nun veraltet ist.
- Einige neue {{cssxref("appearance", "-webkit-appearance")}}-Werte wurden hinzugefügt, für die Kompatibilität mit anderen Browsern. Insbesondere:
  - `meter`, welches jetzt als Standardwert für {{htmlelement("meter")}}-Elemente in UA-Stylesheets verwendet wird. Der vorhandene Wert `meterbar` ist jetzt ein Alias für `meter` ([Firefox-Bug 1501483](https://bugzil.la/1501483)).
  - `progress-bar`, welches jetzt als Standardwert für {{htmlelement("progress")}}-Elemente in UA-Stylesheets verwendet wird. Der vorhandene Wert `progressbar` ist jetzt ein Alias für `progress-bar` ([Firefox-Bug 1501506](https://bugzil.la/1501506)).
  - `textarea`, welches jetzt als Standardwert für {{htmlelement("textarea")}}-Elemente in UA-Stylesheets verwendet wird. Der vorhandene Wert `textfield-multiline` ist jetzt ein Alias für `textarea` ([Firefox-Bug 1507905](https://bugzil.la/1507905)).

- Das Verhalten von {{cssxref("user-select")}} wurde geändert, um besser mit anderen Browsern übereinzustimmen ([Firefox-Bug 1506547](https://bugzil.la/1506547)). Genauer:
  - `user-select: all`, das auf ein Element gesetzt wird, überschreibt nicht mehr andere `user-select`-Werte, die auf untergeordnete Elemente dieses Elements gesetzt sind. Beispielweise im folgenden Snippet:

    ```html
    <div style="-webkit-user-select: all">
      All
      <div style="-webkit-user-select: none">None</div>
    </div>
    ```

    Der `<div>` mit `none` gesetzt auf diesen ist jetzt nicht wählbar. Zuvor wäre dieser Wert von dem `all`-Wert überschrieben worden, der auf das übergeordnete Element gesetzt ist.

  - Nicht-`contenteditable`-Elemente, die in `contenteditable`-Elemente eingebettet sind, sind jetzt auswählbar.
  - `user-select` verhält sich jetzt konsistent innerhalb und außerhalb des Shadow DOM.
  - Der proprietäre `-moz-text`-Wert wurde entfernt.

- CSS-Umgebungsvariablen (die {{cssxref("env", "env()")}}-Funktion) wurden implementiert ([Firefox-Bug 1462233](https://bugzil.la/1462233)).

#### Entfernungen

- Die `layout.css.shape-outside.enabled`-Voreinstellung wurde entfernt; {{cssxref("shape-outside")}}, {{cssxref("shape-margin")}}, und {{cssxref("shape-image-threshold")}} können nicht mehr in `about:config` deaktiviert werden ([Firefox-Bug 1504387](https://bugzil.la/1504387)).
- Mehrere Firefox-exklusive Werte der {{cssxref("user-select")}}-Eigenschaft wurden entfernt — `-moz-all`, `-moz-text`, `tri-state`, `element`, `elements`, und `toggle`. Siehe [Firefox-Bug 1492958](https://bugzil.la/1492958) und [Firefox-Bug 1506547](https://bugzil.la/1506547).
- Wie bereits erwähnt, wurde die `frames()`-Timing-Funktion entfernt ([Firefox-Bug 1496619](https://bugzil.la/1496619)).

### SVG

_Keine Änderungen._

### JavaScript

- {{jsxref("Intl/RelativeTimeFormat", "Intl.RelativeTimeFormat")}} wird jetzt unterstützt ([Firefox-Bug 1504334](https://bugzil.la/1504334)).
- Zeichenfolgen haben jetzt eine maximale {{jsxref("String/length","length","", 1)}} von `2**30 - 2` (~1GB) anstelle von `2**28 - 1` (~256MB) ([Firefox-Bug 1509542](https://bugzil.la/1509542)).
- Die {{jsxref("globalThis")}}-Eigenschaft, die immer auf das oberste globale Objekt verweist, wurde implementiert ([Firefox-Bug 1317422](https://bugzil.la/1317422)).

### APIs

#### Neue APIs

- [Readable Streams](/de/docs/Web/API/Streams_API/Using_readable_streams) sind jetzt standardmäßig aktiviert ([Firefox-Bug 1505122](https://bugzil.la/1505122)).
- Die [Storage Access API](/de/docs/Web/API/Storage_Access_API) ist jetzt standardmäßig aktiviert ([Firefox-Bug 1513021](https://bugzil.la/1513021)).

#### DOM

- [`Performance.toJSON()`](/de/docs/Web/API/Performance/toJSON) wurde für [Web Workers](/de/docs/Web/API/Web_Workers_API) freigegeben ([Firefox-Bug 1504958](https://bugzil.la/1504958)).
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) Anfragen werfen jetzt einen `NetworkError`, wenn der angeforderte Inhalts-Typ ein `Blob` ist und die Anfragemethode nicht `GET` ist ([Firefox-Bug 1502599](https://bugzil.la/1502599)).
- Die `-moz-`-präfixierten Versionen vieler der [Fullscreen API](/de/docs/Web/API/Fullscreen_API)-Funktionen wurden veraltet und es werden nun Deprecation-Warnungen in der JavaScript-Konsole angezeigt, wenn sie auftreten ([Firefox-Bug 1504946](https://bugzil.la/1504946)).
- [`Window.createImageBitmap()`](/de/docs/Web/API/Window/createImageBitmap) und [`WorkerGlobalScope.createImageBitmap()`](/de/docs/Web/API/WorkerGlobalScope/createImageBitmap) unterstützen jetzt SVG-Bilder ([`SVGImageElement`](/de/docs/Web/API/SVGImageElement)) als Bildquelle ([Firefox-Bug 1500768](https://bugzil.la/1500768)).

#### DOM-Ereignisse

- Künftig ist nur noch ein einziger Aufruf von [`Window.open()`](/de/docs/Web/API/Window/open) pro Ereignis erlaubt ([Firefox-Bug 675574](https://bugzil.la/675574)).
- Die [`keyup`](/de/docs/Web/API/Element/keyup_event) und [`keydown`](/de/docs/Web/API/Element/keydown_event) Ereignisse werden jetzt während der IME-Zusammensetzung ausgelöst, um die plattformübergreifende Kompatibilität für CJKT-Benutzer zu verbessern ([Firefox-Bug 354358](https://bugzil.la/354358)).

#### Web-Worker

- Das Ereignisobjekt von [`SharedWorkerGlobalScope.connect`](/de/docs/Web/API/SharedWorkerGlobalScope/connect_event) ist eine Instanz von [`MessageEvent`](/de/docs/Web/API/MessageEvent) — seine `data` Eigenschaft hat jetzt einen leeren Zeichenfolgenwert anstelle von `null` ([Firefox-Bug 1508824](https://bugzil.la/1508824)).

#### Fetch und Service-Worker

- Die Methode [`Response.redirect()`](/de/docs/Web/API/Response/redirect_static) wirft jetzt korrekt einen `TypeError`, wenn eine ungültige URL als erster Parameter angegeben wird ([Firefox-Bug 1503276](https://bugzil.la/1503276)).
- Die Methoden [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) und [`WorkerGlobalScope.importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts) (wenn sie von einem Service-Worker verwendet werden) akzeptieren jetzt alle Dateien mit einem gültigen [JavaScript-MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types#textjavascript) ([Firefox-Bug 1354577](https://bugzil.la/1354577)).
- Die Eigenschaften [`FetchEvent.replacesClientId`](/de/docs/Web/API/FetchEvent/replacesClientId) und [`FetchEvent.resultingClientId`](/de/docs/Web/API/FetchEvent/resultingClientId) werden jetzt unterstützt ([Firefox-Bug 1264177](https://bugzil.la/1264177)).
- Die Eigenschaften [`ServiceWorkerGlobalScope.onmessageerror`](/de/docs/Web/API/ServiceWorkerGlobalScope/messageerror_event) und [`ServiceWorkerContainer.onmessageerror`](/de/docs/Web/API/ServiceWorkerContainer/messageerror_event) wurden implementiert ([Firefox-Bug 1399446](https://bugzil.la/1399446)).
- Der {{httpheader("Origin")}}-Header wird nicht mehr bei Fetch-Anfragen mit einer Methode von {{HTTPMethod("HEAD")}} oder {{HTTPMethod("GET")}} gesetzt ([Firefox-Bug 1508661](https://bugzil.la/1508661)).

#### Medien, Web Audio und WebRTC

- Das [WebRTC](/de/docs/Web/API/WebRTC_API) [`RTCIceCandidateStats`](/de/docs/Web/API/RTCIceCandidateStats) Wörterbuch wurde gemäß den neuesten Spezifikationsänderungen aktualisiert ([Firefox-Bug 1324788](https://bugzil.la/1324788), [Firefox-Bug 1489040](https://bugzil.la/1489040); RTCIceCandidateStats wurde auf die neueste Spezifikation aktualisiert, um genau darzustellen, was geändert wurde).
- Die `pause`- und `resume`-Ereignisse (und ihre entsprechenden Ereignishandlereigenschaften) des [`MediaRecorder`](/de/docs/Web/API/MediaRecorder) wurden zuvor nicht implementiert, obwohl die Kompatibilitätstabellen behaupteten, dass sie implementiert seien. Sie wurden nun implementiert ([Firefox-Bug 1458538](https://bugzil.la/1458538), [Firefox-Bug 1514016](https://bugzil.la/1514016)).

#### Canvas und WebGL

- Die [WebGL](/de/docs/Web/API/WebGL_API) [`EXT_texture_compression_bptc`](/de/docs/Web/API/EXT_texture_compression_bptc) und [`EXT_texture_compression_rgtc`](/de/docs/Web/API/EXT_texture_compression_rgtc) Texturkompressions-Erweiterungen wurden WebGL1- und WebGL2-Kontexten freigegeben ([Firefox-Bug 1507263](https://bugzil.la/1507263)).

#### Entfernungen

- [Mutationsereignisse](/de/docs/Web/API/MutationEvent) wurden in Shadow Trees deaktiviert ([Firefox-Bug 1489858](https://bugzil.la/1489858)).
- Die nicht standardmäßige [`MediaStream`](/de/docs/Web/API/MediaStream) Eigenschaft `currentTime` wurde entfernt ([Firefox-Bug 1502927](https://bugzil.la/1502927)).
- Die Voreinstellungen `dom.webcomponents.shadowdom.enabled` und `dom.webcomponents.customelements.enabled` wurden entfernt — Shadow DOM und Custom Elements können nicht mehr in `about:config` deaktiviert werden ([Firefox-Bug 1503019](https://bugzil.la/1503019)).
- Das nicht standardmäßige DOM `text`-Ereignis — welches ausgelöst wurde, um die Browser-Editor-Benutzeroberfläche über IME-Zusammenstellungszeichendaten und Auswahlbereich zu informieren — wurde entfernt ([Firefox-Bug 1288640](https://bugzil.la/1288640)).
- Das [`keypress`](/de/docs/Web/API/Element/keypress_event)-Ereignis wird nicht mehr für [non-printable keys](/de/docs/Web/API/KeyboardEvent/keyCode#non-printable_keys_function_keys) ausgelöst ([Firefox-Bug 968056](https://bugzil.la/968056)), mit Ausnahme der `Enter`-Taste und der Tasten-Kombinationen `Shift` + `Enter` und `Ctrl` + `Enter` (diese wurden für plattformübergreifende Kompatibilität beibehalten).

### Sicherheit

- Zusätzliche CORS-Einschränkungen werden jetzt auf zulässige Anfrage-Header durchgesetzt ([Firefox-Bug 1483815](https://bugzil.la/1483815), siehe auch [whatwg fetch issue 382: CORS-safelisted request headers should be restricted according to RFC 7231](https://github.com/whatwg/fetch/issues/382) für weitere Details).

### Netzwerk

_Keine Änderungen._

### Plugins

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

#### API-Änderungen

- `WebDriver:ElementSendKeys` geht jetzt bei `<input type=file>` entspannter mit der Umgangbarkeit der Elemente um und erlaubt, dass diese Elemente verborgen sind, ohne dass ein `not interactable`-Fehler mehr ausgelöst wird. Wenn eine strenge Prüfungszielinteraktion gewünscht ist, kann die Fähigkeit `strictFileInteractability` verwendet werden ([Firefox-Bug 1502864](https://bugzil.la/1502864)).

#### Fehlerbehebungen

- Die Fensterbearbeitungsbefehle `WebDriver:FullscreenWindow`, `WebDriver:MinimizeWindow`, `WebDriver:MaximizeWindow`, und `WebDriver:SetWindowRect` wurden stabiler gemacht ([Firefox-Bug 1492499](https://bugzil.la/1492499)). Das bedeutet, dass sie unter besonderen Bedingungen nicht mehr zu einem unendlichen Hängen führen, sondern nach 5 Sekunden auslaufen, wenn der angeforderte Fensterstatus nicht erreicht werden kann ([Firefox-Bug 1521527](https://bugzil.la/1521527)).
- `WebDriver:ElementClick` berechnet jetzt korrekt den Mittelpunkt des zu klickenden Elements, was Interaktionen mit Dimensionen von 1x1 Pixeln ermöglicht ([Firefox-Bug 1499360](https://bugzil.la/1499360)).

#### Sonstiges

- Für `unexpected alert open`-Fehler werden informativere Nachrichten bereitgestellt ([Firefox-Bug 1502268](https://bugzil.la/1502268)).

### Sonstiges

- Unterstützung für {{Glossary("WebP", "WebP")}} Bilder wurde hinzugefügt ([Firefox-Bug 1294490](https://bugzil.la/1294490)).
  - Zusätzlich wurde der WebP MIMEType (`image/webp`) in den Standard-HTTP-Request {{httpheader("Accept")}}-Header für HTML-Dateien aufgenommen, um die plattformübergreifende Kompatibilität in bestimmten Situationen zu erleichtern ([Firefox-Bug 1507691](https://bugzil.la/1507691)).

- Der AV1-Codec wird jetzt standardmäßig unter Windows unterstützt ([Firefox-Bug 1452146](https://bugzil.la/1452146)).

## Änderungen für Add-On-Entwickler

### API-Änderungen

#### Tabs

- Die {{WebExtAPIRef("tabs", "tabs API", "", "1")}} wurde erweitert, um Tab-Nachfolger zu unterstützen — ein Tab kann einen Nachfolger zugewiesen bekommen, was die ID des Tabs ist, der aktiv wird, sobald er geschlossen wird ([Firefox-Bug 1500479](https://bugzil.la/1500479), siehe auch [diesen Blogbeitrag](https://qiita.com/piroor/items/ea7e727735631c45a366) für weitere Informationen). Insbesondere:
  - Der {{WebExtAPIRef("tabs.Tab")}} Typ hat nun eine `successorId`-Eigenschaft, die verwendet werden kann, um die ID des Nachfolgers des Tabs zu speichern/abzurufen.
  - Der Rückruf des Ereignislisteners {{WebExtAPIRef("tabs.onActivated")}} hat einen neuen verfügbaren Parameter, `previousTabId`, der die ID des zuvor aktivierten Tabs enthält, falls dieser noch offen ist.
  - Das `updateProperties`-Objekt der Funktion {{WebExtAPIRef("tabs.update()")}} hat eine neue, optionale Eigenschaft, `successorTabId`, die zum Aktualisieren verwendet werden kann.
  - `successorTabId` wird auch durch Funktionen wie {{WebExtAPIRef("tabs.get()")}} und {{WebExtAPIRef("tabs.query()")}} zurückgegeben.
  - Die neue Funktion `tabs.moveInSuccession()` ermöglicht das Bearbeiten von Tab-Nachfolgern im Bulk.

### Manifest-Änderungen

_Keine Änderungen._

### Sonstiges

- Die `headerURL`/`theme_frame`-Eigenschaften für [WebExtension-Themen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) werden jetzt auf Firefox für Android unterstützt ([Firefox-Bug 1429488](https://bugzil.la/1429488)).

## Siehe auch

- Hacks Veröffentlichtungspost: [Firefox 65: WebP-Support, Flexbox-Inspektor, neue Tools & Plattform-Updates](https://hacks.mozilla.org/2019/01/firefox-65-webp-flexbox-inspector-new-tooling/)
