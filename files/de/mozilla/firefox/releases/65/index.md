---
title: Firefox-65-Release-Notes für Entwickler
short-title: Firefox 65
slug: Mozilla/Firefox/Releases/65
l10n:
  sourceCommit: b19a19b1f3563c8f24fe7146c21cec2abdf68c9a
---

Dieser Artikel enthält Informationen über die Änderungen in Firefox 65, die Entwickler betreffen. Firefox 65 wurde am 29. Januar 2019 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Der [Flexbox-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_flexbox_layouts/index.html) ist jetzt standardmäßig aktiviert.
- Dem [JavaScript-Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) wurde Unterstützung für XHR-Breakpoints hinzugefügt ([Firefox-Bug 821610](https://bugzil.la/821610)).
- Klicken Sie im Barrierefreiheitsbaum der Barrierefreiheitsansicht mit der rechten Maustaste auf ein Element, um es als [JSON](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#print-accessibility-tree-to-json) im JSON-Viewer auszugeben.
- Die Anzeige des [Farbkontrasts](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#color-contrast) der Barrierefreiheitsauswahl wurde aktualisiert: Wenn der Hintergrund eines Textes komplex ist (z. B. ein Farbverlauf oder ein komplexes Bild), wird nun ein Bereich von Farbkontrastwerten angezeigt.
- Der Tab „Headers“ des [Netzwerkmonitors](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) zeigt jetzt die Referrer Policy für die ausgewählte Anfrage an ([Firefox-Bug 1496742](https://bugzil.la/1496742)).
- Bei der Anzeige von Stack-Traces (z. B. in Konsolenprotokollen oder im JavaScript-Debugger) werden Aufrufe von Framework-Methoden erkannt und standardmäßig eingeklappt, wodurch sich Ihr Code leichter finden lässt.
- Wie in nativen Terminals können Sie jetzt die umgekehrte Suche verwenden, um Einträge in Ihrem JavaScript-Konsolenverlauf zu finden (`F9` unter Windows/Linux oder `Ctrl` + `R` unter macOS, dann einen Suchbegriff eingeben, gefolgt von `Ctrl` + `R`/`Ctrl` + `S`, um zwischen Ergebnissen zu wechseln).
- Die `$0`-Verknüpfung der JavaScript-Konsole (verweist auf das aktuell auf der Seite untersuchte Element) verfügt jetzt über Autovervollständigung. Sie können beispielsweise `$0.te` eingeben, um Autovervollständigungsvorschläge für Eigenschaften wie `$0.textContent` zu erhalten.
- Die Änderungen, die Sie in der Rules-Ansicht des Inspektors vornehmen, werden jetzt im Changes-Panel aufgeführt ([Firefox-Bug 1503920](https://bugzil.la/1503920)).

### HTML

- Ereignisse werden jetzt auf deaktivierten HTML-Elementen ausgelöst, d.h. auf {{htmlelement("button")}}-, {{htmlelement("fieldset")}}-, {{htmlelement("input")}}-, {{htmlelement("select")}}- und {{htmlelement("textarea")}}-Elementen, bei denen das Attribut `disabled` gesetzt ist ([Firefox-Bug 329509](https://bugzil.la/329509)).
- Das Entfernen des Attributs `src` eines {{htmlelement("iframe")}}-Elements führt jetzt dazu, dass `about:blank` darin geladen wird, wodurch das Verhalten mit Chrome und Safari übereinstimmt ([Firefox-Bug 1507842](https://bugzil.la/1507842)). Zuvor hatte das Entfernen von `src` keine Auswirkung auf den Inhalt des `iframe`.
- Unterstützung für das Attribut [`referrerpolicy`](/de/docs/Web/HTML/Reference/Elements/script#referrerpolicy) auf {{htmlelement("script")}}-Elementen wurde hinzugefügt ([Firefox-Bug 1460920](https://bugzil.la/1460920)).

### CSS

- Der Wert `crisp-edges` der Eigenschaft {{cssxref("image-rendering")}} wurde nun von seinem Präfix befreit ([Firefox-Bug 1496617](https://bugzil.la/1496617)).
- Ein {{cssxref("scrollbar-color")}}-Wert von `auto` wird jetzt zu `auto` aufgelöst und nicht mehr zu zwei Farben ([Firefox-Bug 1501418](https://bugzil.la/1501418)).
- Die `break-*`-Eigenschaften wurden implementiert und die veralteten `page-break-*`-Eigenschaften als Aliase darauf gesetzt ([Firefox-Bug 775618](https://bugzil.la/775618)):
  - {{cssxref("break-before")}} ist jetzt ein Alias für {{cssxref("page-break-before")}}.
  - {{cssxref("break-after")}} ist jetzt ein Alias für {{cssxref("page-break-after")}}.
  - {{cssxref("break-inside")}} ist jetzt ein Alias für {{cssxref("page-break-inside")}}.

- Der Wert `anywhere` der Eigenschaft {{cssxref("overflow-wrap")}} wurde implementiert ([Firefox-Bug 1505786](https://bugzil.la/1505786)).
- Die neuen Schlüsselwörter für Schrittpositionen `jump-start`, `jump-end`, `jump-none` und `jump-both` — verwendbar innerhalb der [`steps()`-Timing-Funktion](/de/docs/Web/CSS/Reference/Values/easing-function/steps) — wurden implementiert ([Firefox-Bug 1496619](https://bugzil.la/1496619)). Dies geht auch mit der Entfernung der `frames()`-Timing-Funktion einher, die zuvor zur Implementierung solcher Funktionen verwendet wurde und nun veraltet ist.
- Einige neue Werte für {{cssxref("appearance", "-webkit-appearance")}} wurden zur Kompatibilität mit anderen Browsern hinzugefügt. Insbesondere:
  - `meter`, das jetzt als Standardwert für {{htmlelement("meter")}}-Elemente in UA-Stylesheets verwendet wird. Der vorhandene Wert `meterbar` ist jetzt ein Alias für `meter` ([Firefox-Bug 1501483](https://bugzil.la/1501483)).
  - `progress-bar`, das jetzt als Standardwert für {{htmlelement("progress")}}-Elemente in UA-Stylesheets verwendet wird. Der vorhandene Wert `progressbar` ist jetzt ein Alias für `progress-bar` ([Firefox-Bug 1501506](https://bugzil.la/1501506)).
  - `textarea`, das jetzt als Standardwert für {{htmlelement("textarea")}}-Elemente in UA-Stylesheets verwendet wird. Der vorhandene Wert `textfield-multiline` ist jetzt ein Alias für `textarea` ([Firefox-Bug 1507905](https://bugzil.la/1507905)).

- Das Verhalten von {{cssxref("user-select")}} wurde geändert, um es stärker an andere Browser anzugleichen ([Firefox-Bug 1506547](https://bugzil.la/1506547)). Im Einzelnen:
  - `user-select: all`, das auf einem Element gesetzt ist, überschreibt nicht länger andere Werte von `user-select`, die auf Kindelementen dieses Elements gesetzt sind. Beispielsweise im folgenden Ausschnitt:

    ```html
    <div style="-webkit-user-select: all">
      All
      <div style="-webkit-user-select: none">None</div>
    </div>
    ```

    Das `<div>` mit dem gesetzten Wert `none` ist jetzt nicht auswählbar. Zuvor wäre dieser Wert durch den auf dem übergeordneten Element gesetzten Wert `all` überschrieben worden.

  - Nicht-`contenteditable`-Elemente, die innerhalb von `contenteditable`-Elementen verschachtelt sind, sind jetzt auswählbar.
  - `user-select` verhält sich jetzt innerhalb und außerhalb von Shadow DOM konsistent.
  - Der proprietäre Wert `-moz-text` wurde entfernt.

- CSS-Umgebungsvariablen (die Funktion {{cssxref("env", "env()")}}) wurden implementiert ([Firefox-Bug 1462233](https://bugzil.la/1462233)).

#### Entfernungen

- Die Einstellung `layout.css.shape-outside.enabled` wurde entfernt; {{cssxref("shape-outside")}}, {{cssxref("shape-margin")}} und {{cssxref("shape-image-threshold")}} können nicht länger in `about:config` deaktiviert werden ([Firefox-Bug 1504387](https://bugzil.la/1504387)).
- Mehrere Firefox-exklusive Werte der Eigenschaft {{cssxref("user-select")}} wurden entfernt — `-moz-all`, `-moz-text`, `tri-state`, `element`, `elements` und `toggle`. Siehe [Firefox-Bug 1492958](https://bugzil.la/1492958) und [Firefox-Bug 1506547](https://bugzil.la/1506547).
- Wie oben erwähnt, wurde die `frames()`-Timing-Funktion entfernt ([Firefox-Bug 1496619](https://bugzil.la/1496619)).

### SVG

_Keine Änderungen._

### JavaScript

- {{jsxref("Intl/RelativeTimeFormat", "Intl.RelativeTimeFormat")}} wird jetzt unterstützt ([Firefox-Bug 1504334](https://bugzil.la/1504334)).
- Strings haben jetzt eine maximale {{jsxref("String/length","length","", 1)}} von `2**30 - 2` (\~1 GB) statt `2**28 - 1` (\~256 MB) ([Firefox-Bug 1509542](https://bugzil.la/1509542)).
- Die Eigenschaft {{jsxref("globalThis")}}, die immer auf das globale Objekt der obersten Ebene verweist, wurde implementiert ([Firefox-Bug 1317422](https://bugzil.la/1317422)).

### APIs

#### Neue APIs

- [Readable Streams](/de/docs/Web/API/Streams_API/Using_readable_streams) wurden standardmäßig aktiviert ([Firefox-Bug 1505122](https://bugzil.la/1505122)).
- Die [Storage Access API](/de/docs/Web/API/Storage_Access_API) wurde standardmäßig aktiviert ([Firefox-Bug 1513021](https://bugzil.la/1513021)).

#### DOM

- [`Performance.toJSON()`](/de/docs/Web/API/Performance/toJSON) wurde für [Web Workers](/de/docs/Web/API/Web_Workers_API) verfügbar gemacht ([Firefox-Bug 1504958](https://bugzil.la/1504958)).
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Anfragen lösen jetzt einen `NetworkError` aus, wenn der angeforderte Inhaltstyp ein `Blob` ist und die Anfragemethode nicht `GET` lautet ([Firefox-Bug 1502599](https://bugzil.la/1502599)).
- Die mit `-moz-` präfixierten Versionen vieler Funktionen der [Fullscreen API](/de/docs/Web/API/Fullscreen_API) wurden als veraltet markiert und zeigen jetzt bei ihrer Verwendung Warnungen über Veraltung in der JavaScript-Konsole an ([Firefox-Bug 1504946](https://bugzil.la/1504946)).
- [`Window.createImageBitmap()`](/de/docs/Web/API/Window/createImageBitmap) und [`WorkerGlobalScope.createImageBitmap()`](/de/docs/Web/API/WorkerGlobalScope/createImageBitmap) unterstützen jetzt SVG-Bilder ([`SVGImageElement`](/de/docs/Web/API/SVGImageElement)) als Bildquelle ([Firefox-Bug 1500768](https://bugzil.la/1500768)).

#### DOM-Ereignisse

- Künftig ist nur ein Aufruf von [`Window.open()`](/de/docs/Web/API/Window/open) pro Ereignis zulässig ([Firefox-Bug 675574](https://bugzil.la/675574)).
- Die Ereignisse [`keyup`](/de/docs/Web/API/Element/keyup_event) und [`keydown`](/de/docs/Web/API/Element/keydown_event) werden jetzt während der IME-Komposition ausgelöst, um die Browser-Kompatibilität für CJKT-Benutzer zu verbessern ([Firefox-Bug 354358](https://bugzil.la/354358).

#### Web Workers

- Das Ereignisobjekt von [`SharedWorkerGlobalScope.connect`](/de/docs/Web/API/SharedWorkerGlobalScope/connect_event) ist eine Instanz von [`MessageEvent`](/de/docs/Web/API/MessageEvent) — seine Eigenschaft `data` ist jetzt ein leerer String statt `null` ([Firefox-Bug 1508824](https://bugzil.la/1508824)).

#### Fetch und Service Workers

- Die Methode [`Response.redirect()`](/de/docs/Web/API/Response/redirect_static) löst jetzt korrekt einen `TypeError` aus, wenn als erster Parameter eine ungültige URL angegeben wird ([Firefox-Bug 1503276](https://bugzil.la/1503276)).
- Die Methoden [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) und [`WorkerGlobalScope.importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts) (bei Verwendung durch einen Service Worker) akzeptieren jetzt alle Dateien mit einem gültigen [JavaScript-MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types#textjavascript) ([Firefox-Bug 1354577](https://bugzil.la/1354577)).
- Die Eigenschaften `FetchEvent.replacesClientId` und [`FetchEvent.resultingClientId`](/de/docs/Web/API/FetchEvent/resultingClientId) werden jetzt unterstützt ([Firefox-Bug 1264177](https://bugzil.la/1264177)).
- Die Handler-Eigenschaften [`ServiceWorkerGlobalScope.onmessageerror`](/de/docs/Web/API/ServiceWorkerGlobalScope/messageerror_event) und [`ServiceWorkerContainer.onmessageerror`](/de/docs/Web/API/ServiceWorkerContainer/messageerror_event) wurden implementiert ([Firefox-Bug 1399446](https://bugzil.la/1399446)).
- Der Header {{httpheader("Origin")}} wird nicht länger bei Fetch-Anfragen mit der Methode {{HTTPMethod("HEAD")}} oder {{HTTPMethod("GET")}} gesetzt ([Firefox-Bug 1508661](https://bugzil.la/1508661)).

#### Medien, Web Audio und WebRTC

- Das Wörterbuch [`RTCIceCandidateStats`](/de/docs/Web/API/RTCIceCandidateStats) von [WebRTC](/de/docs/Web/API/WebRTC_API) wurde gemäß den neuesten Spezifikationsänderungen aktualisiert ([Firefox-Bug 1324788](https://bugzil.la/1324788), [Firefox-Bug 1489040](https://bugzil.la/1489040); weitere Details zu den genauen Änderungen finden Sie in der Aktualisierung von RTCIceCandidateStats auf die neueste Spezifikation).
- Die `pause`- und `resume`-Ereignisse von [`MediaRecorder`](/de/docs/Web/API/MediaRecorder) (sowie die entsprechenden Ereignishandler-Eigenschaften) waren zuvor nicht implementiert, obwohl die Kompatibilitätstabellen angaben, dass dies der Fall sei. Sie wurden nun implementiert ([Firefox-Bug 1458538](https://bugzil.la/1458538), [Firefox-Bug 1514016](https://bugzil.la/1514016)).

#### Canvas und WebGL

- Die Texturkomprimierungserweiterungen [`EXT_texture_compression_bptc`](/de/docs/Web/API/EXT_texture_compression_bptc) und [`EXT_texture_compression_rgtc`](/de/docs/Web/API/EXT_texture_compression_rgtc) von [WebGL](/de/docs/Web/API/WebGL_API) wurden für WebGL1- und WebGL2-Kontexte verfügbar gemacht ([Firefox-Bug 1507263](https://bugzil.la/1507263)).

#### Entfernungen

- [Mutation Events](/de/docs/Web/API/MutationEvent) wurden in Shadow Trees deaktiviert ([Firefox-Bug 1489858](https://bugzil.la/1489858)).
- Die nicht standardisierte Eigenschaft `currentTime` von [`MediaStream`](/de/docs/Web/API/MediaStream) wurde entfernt ([Firefox-Bug 1502927](https://bugzil.la/1502927)).
- Die Einstellungen `dom.webcomponents.shadowdom.enabled` und `dom.webcomponents.customelements.enabled` wurden entfernt — Shadow DOM und Custom Elements können nicht länger in `about:config` deaktiviert werden ([Firefox-Bug 1503019](https://bugzil.la/1503019)).
- Das nicht standardisierte DOM-Ereignis `text` — ausgelöst, um die Editor-Benutzeroberfläche des Browsers über IME-Kompositions-Stringdaten und den Auswahlbereich zu informieren — wurde entfernt ([Firefox-Bug 1288640](https://bugzil.la/1288640)).
- Das Ereignis [`keypress`](/de/docs/Web/API/Element/keypress_event) wird nicht länger für [nicht druckbare Tasten](/de/docs/Web/API/KeyboardEvent/keyCode#non-printable_keys_function_keys) ausgelöst ([Firefox-Bug 968056](https://bugzil.la/968056)), mit Ausnahme der Taste `Enter` sowie der Tastenkombinationen `Shift` + `Enter` und `Ctrl` + `Enter` (diese wurden aus Gründen der Browser-Kompatibilität beibehalten).

### Sicherheit

- Zusätzliche CORS-Beschränkungen für zulässige Anfrage-Header werden jetzt durchgesetzt ([Firefox-Bug 1483815](https://bugzil.la/1483815); weitere Details finden Sie auch unter [whatwg fetch issue 382: CORS-safelisted request headers should be restricted according to RFC 7231](https://github.com/whatwg/fetch/issues/382)).

### Netzwerk

_Keine Änderungen._

### Plugins

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

#### API-Änderungen

- `WebDriver:ElementSendKeys` behandelt `<input type=file>` bei Interaktionsprüfungen jetzt weniger restriktiv und erlaubt, dass diese Elemente ausgeblendet sind, ohne einen Fehler `not interactable` auszulösen. Wenn eine strikte Interaktionsprüfung erforderlich ist, kann die Capability `strictFileInteractability` verwendet werden ([Firefox-Bug 1502864](https://bugzil.la/1502864)).

#### Fehlerbehebungen

- Die Befehle zur Fenstermanipulation `WebDriver:FullscreenWindow`, `WebDriver:MinimizeWindow`, `WebDriver:MaximizeWindow` und `WebDriver:SetWindowRect` wurden stabiler gemacht ([Firefox-Bug 1492499](https://bugzil.la/1492499)). Das bedeutet, dass sie unter besonderen Bedingungen nicht mehr zu einem unendlichen Hängen führen, sondern nach 5 Sekunden ein Timeout auslösen, wenn der angeforderte Fensterstatus nicht erreicht werden kann ([Firefox-Bug 1521527](https://bugzil.la/1521527)).
- `WebDriver:ElementClick` berechnet jetzt korrekt den Mittelpunkt des anzuklickenden Elements, wodurch Interaktionen mit Abmessungen von 1x1 Pixel möglich sind ([Firefox-Bug 1499360](https://bugzil.la/1499360)).

#### Sonstiges

- Für Fehler `unexpected alert open` werden informativere Meldungen bereitgestellt ([Firefox-Bug 1502268](https://bugzil.la/1502268)).

### Sonstiges

- Unterstützung für {{Glossary("WebP", "WebP")}}-Bilder wurde hinzugefügt ([Firefox-Bug 1294490](https://bugzil.la/1294490)).
  - Zusätzlich wurde der WebP-MIME-Typ (`image/webp`) in bestimmten Situationen zur Erleichterung der Browser-Kompatibilität zum Standard-HTTP-Anfrage-Header {{httpheader("Accept")}} für HTML-Dateien hinzugefügt ([Firefox-Bug 1507691](https://bugzil.la/1507691)).

- Der AV1-Codec wird jetzt unter Windows standardmäßig unterstützt ([Firefox-Bug 1452146](https://bugzil.la/1452146)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

#### Tabs

- Die {{WebExtAPIRef("tabs", "tabs API", "", "1")}} wurde erweitert, um Tab-Nachfolger zu unterstützen — einem Tab kann ein Nachfolger zugewiesen werden, also die ID des Tabs, der aktiv sein wird, nachdem er geschlossen wurde ([Firefox-Bug 1500479](https://bugzil.la/1500479); weitere Informationen finden Sie auch in [diesem Blogbeitrag](https://qiita.com/piroor/items/ea7e727735631c45a366)). Insbesondere:
  - Der Typ {{WebExtAPIRef("tabs.Tab")}} verfügt jetzt über eine Eigenschaft `successorId`, mit der die ID des Tab-Nachfolgers gespeichert bzw. abgerufen werden kann.
  - Der Callback des Event-Listeners {{WebExtAPIRef("tabs.onActivated")}} verfügt über einen neuen Parameter, `previousTabId`, der die ID des zuvor aktivierten Tabs enthält, falls dieser noch geöffnet ist.
  - Das Objekt `updateProperties` der Funktion {{WebExtAPIRef("tabs.update()")}} verfügt jetzt über eine neue optionale Eigenschaft `successorTabId`, die zum Aktualisieren verwendet werden kann.
  - `successorTabId` wird auch von Funktionen wie {{WebExtAPIRef("tabs.get()")}} und {{WebExtAPIRef("tabs.query()")}} zurückgegeben.
  - Die neue Funktion `tabs.moveInSuccession()` ermöglicht die Massenbearbeitung von Tab-Nachfolgern.

### Manifest-Änderungen

_Keine Änderungen._

### Sonstiges

- Die Eigenschaften `headerURL`/`theme_frame` für [WebExtension-Themes](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) werden jetzt in Firefox für Android unterstützt ([Firefox-Bug 1429488](https://bugzil.la/1429488)).

## Siehe auch

- Hacks-Veröffentlichungsbeitrag: [Firefox 65: WebP support, Flexbox Inspector, new tooling & platform updates](https://hacks.mozilla.org/2019/01/firefox-65-webp-flexbox-inspector-new-tooling/)
