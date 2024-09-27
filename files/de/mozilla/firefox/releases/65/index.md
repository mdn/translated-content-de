---
title: Firefox 65 für Entwickler
slug: Mozilla/Firefox/Releases/65
l10n:
  sourceCommit: 2d337c37fb3ae7d7a32b5c372366bc7f97ff2602
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 65, die Entwickler betreffen werden. Firefox 65 wurde am 29. Januar 2019 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Der [Flexbox-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_flexbox_layouts/index.html) ist jetzt standardmäßig aktiviert.
- Unterstützung für XHR-Breakpoints wurde im [JavaScript-Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) hinzugefügt ([Firefox Fehler 821610](https://bugzil.la/821610)).
- Klicken Sie mit der rechten Maustaste auf ein Element im Zugänglichkeitsbaum im Accessibility-Viewer, um es [als JSON zu drucken](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#print-accessibility-tree-to-json) im JSON-Viewer.
- Die Anzeige des [Farbkontrasts](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#color-contrast) des Accessibility Pickers wurde aktualisiert, sodass bei komplexen Hintergründen einer Schrift (z.B. ein Verlauf oder komplexes Bild) eine Spanne von Farbkontrastwerten angezeigt wird.
- Im Header-Tab des [Network Monitors](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) wird nun die Referrer-Policy für die ausgewählte Anfrage angezeigt ([Firefox Fehler 1496742](https://bugzil.la/1496742)).
- Bei der Anzeige von Stapelspuren (z.B. in Konsolenlogs oder im JavaScript-Debugger) werden Aufrufe zu Framework-Methoden standardmäßig identifiziert und eingeklappt, was es einfacher macht, sich auf den eigenen Code zu konzentrieren.
- Wie bei nativen Terminals können Sie nun die Rückwärtssuche verwenden, um Einträge in Ihrer JavaScript-Konsole Historie zu finden (`F9` unter Windows/Linux oder `Strg` + `R` auf macOS, dann einen Suchbegriff eingeben, gefolgt von `Strg` + `R`/`Strg` + `S`, um durch die Ergebnisse zu blättern).
- Der `$0` Shortcut der JavaScript-Konsole (verweist auf das aktuell inspizierte Element auf der Seite) hat jetzt eine Autovervollständigung verfügbar, so dass Sie beispielsweise `$0.te` eingeben können, um Autovervollständigungsvorschläge für Eigenschaften wie `$0.textContent` zu erhalten.
- Die Bearbeitungen, die Sie im Regel-Ansicht des Inspektors vornehmen, werden nun im Änderungs-Panel aufgelistet ([Firefox Fehler 1503920](https://bugzil.la/1503920)).

### HTML

- Ereignisse werden jetzt auf deaktivierten HTML-Elementen ausgelöst, d.h. {{htmlelement("button")}}, {{htmlelement("fieldset")}}, {{htmlelement("input")}}, {{htmlelement("select")}}, und {{htmlelement("textarea")}} Elemente mit gesetztem `disabled`-Attribut ([Firefox Fehler 329509](https://bugzil.la/329509)).
- Das Entfernen des `src`-Attributs eines {{htmlelement("iframe")}}-Elements führt jetzt dazu, dass `about:blank` darin geladen wird, wodurch es Gleichheit mit Chrome und Safari erhält ([Firefox Fehler 1507842](https://bugzil.la/1507842)). Zuvor hatte das Entfernen von `src` keine Auswirkungen auf den `iframe`-Inhalt.
- Unterstützung für das [`referrerpolicy`](/de/docs/Web/HTML/Element/script#referrerpolicy)-Attribut auf {{htmlelement("script")}}-Elementen wurde hinzugefügt ([Firefox Fehler 1460920](https://bugzil.la/1460920)).

### CSS

- Der `crisp-edges`-Wert der {{cssxref("image-rendering")}}-Eigenschaft wurde jetzt nicht mehr als Präfix behandelt ([Firefox Fehler 1496617](https://bugzil.la/1496617)).
- Ein {{cssxref("scrollbar-color")}}-Wert von `auto` wird jetzt zu `auto` aufgelöst, anstatt zu zwei Farben ([Firefox Fehler 1501418](https://bugzil.la/1501418)).
- Die `break-*`-Eigenschaften wurden implementiert, und die veralteten `page-break-*`-Eigenschaften wurden ihnen zugeordnet ([Firefox Fehler 775618](https://bugzil.la/775618)):

  - {{cssxref("break-before")}} ist jetzt ein Alias für {{cssxref("page-break-before")}}.
  - {{cssxref("break-after")}} ist jetzt ein Alias für {{cssxref("page-break-after")}}.
  - {{cssxref("break-inside")}} ist jetzt ein Alias für {{cssxref("page-break-inside")}}.

- Der `anywhere`-Wert der {{cssxref("overflow-wrap")}}-Eigenschaft wurde implementiert ([Firefox Fehler 1505786](https://bugzil.la/1505786)).
- Die neuen Schrittpositionsschlüsselwörter `jump-start`, `jump-end`, `jump-none` und `jump-both` — nutzbar innerhalb der [`steps()`-Funktion](/de/docs/Web/CSS/easing-function#step_easing_function) — wurden implementiert ([Firefox Fehler 1496619](https://bugzil.la/1496619)). Dies geschieht gleichzeitig mit der Entfernung der `frames()`-Timing-Funktion, die die bisherige Möglichkeit war, solche Funktionalität zu implementieren, die nun veraltet ist.
- Einige neue Werte der {{cssxref("appearance", "-webkit-appearance")}} wurden hinzugefügt, um die Kompatibilität mit anderen Browsern sicherzustellen. Insbesondere:

  - `meter`, das jetzt als Standardwert für {{htmlelement("meter")}}-Elemente in UA-Stilvorlagen verwendet wird. Der bestehende Wert `meterbar` ist jetzt ein Alias für `meter` ([Firefox Fehler 1501483](https://bugzil.la/1501483)).
  - `progress-bar`, das jetzt als Standardwert für {{htmlelement("progress")}}-Elemente in UA-Stilvorlagen verwendet wird. Der bestehende Wert `progressbar` ist jetzt ein Alias für `progress-bar` ([Firefox Fehler 1501506](https://bugzil.la/1501506)).
  - `textarea`, das jetzt als Standardwert für {{htmlelement("textarea")}}-Elemente in UA-Stilvorlagen verwendet wird. Der bestehende Wert `textfield-multiline` ist jetzt ein Alias für `textarea` ([Firefox Fehler 1507905](https://bugzil.la/1507905)).

- Das Verhalten der {{cssxref("user-select")}}-Eigenschaft wurde geändert, um besser mit anderen Browsern übereinzustimmen ([Firefox Fehler 1506547](https://bugzil.la/1506547)). Im Speziellen:

  - `user-select: all`, das auf ein Element gesetzt ist, überschreibt nicht mehr andere Werte von `user-select`, die auf Kind-Elementen dieses Elements gesetzt sind. Zum Beispiel:

    ```html
    <div style="-webkit-user-select: all">
      All
      <div style="-webkit-user-select: none">None</div>
    </div>
    ```

    Das `<div>`, auf dem `none` gesetzt ist, ist jetzt nicht mehr auswählbar. Zuvor hätte dieser Wert durch den `all`-Wert, der auf dem Elternelement gesetzt ist, überschrieben werden können.

  - Nicht-`contenteditable`-Elemente, die in `contenteditable`-Elemente eingebettet sind, sind jetzt auswählbar.
  - `user-select` verhält sich jetzt konsistent innerhalb und außerhalb von Shadow DOM.
  - Der proprietäre `-moz-text`-Wert wurde entfernt.

- CSS-Umgebungsvariablen (die {{cssxref("env", "env()")}}-Funktion) wurden implementiert ([Firefox Fehler 1462233](https://bugzil.la/1462233)).

#### Entfernungen

- Die `layout.css.shape-outside.enabled`-Voreinstellung wurde entfernt; {{cssxref("shape-outside")}}, {{cssxref("shape-margin")}}, und {{cssxref("shape-image-threshold")}} können in `about:config` nicht mehr deaktiviert werden ([Firefox Fehler 1504387](https://bugzil.la/1504387)).
- Mehrere Firefox-spezifische Werte der {{cssxref("user-select")}}-Eigenschaft wurden entfernt — `-moz-all`, `-moz-text`, `tri-state`, `element`, `elements`, und `toggle`. Siehe [Firefox Fehler 1492958](https://bugzil.la/1492958) und [Firefox Fehler 1506547](https://bugzil.la/1506547).
- Wie oben erwähnt, wurde die `frames()`-Timing-Funktion entfernt ([Firefox Fehler 1496619](https://bugzil.la/1496619)).

### SVG

_Keine Änderungen._

### JavaScript

- {{jsxref("Intl/RelativeTimeFormat", "Intl.RelativeTimeFormat")}} wird jetzt unterstützt ([Firefox Fehler 1504334](https://bugzil.la/1504334)).
- Zeichenfolgen haben jetzt eine maximale {{jsxref("String/length","length","", 1)}} von `2**30 - 2` (\~1GB) anstelle von `2**28 - 1` (\~256MB) ([Firefox Fehler 1509542](https://bugzil.la/1509542)).
- Die {{jsxref("globalThis")}}-Eigenschaft, die immer auf das oberste globale Objekt verweist, wurde implementiert ([Firefox Fehler 1317422](https://bugzil.la/1317422)).

### APIs

#### Neue APIs

- [Lesbare Streams](/de/docs/Web/API/Streams_API/Using_readable_streams) wurden standardmäßig aktiviert ([Firefox Fehler 1505122](https://bugzil.la/1505122)).
- Die [Storage Access API](/de/docs/Web/API/Storage_Access_API) wurde standardmäßig aktiviert ([Firefox Fehler 1513021](https://bugzil.la/1513021)).

#### DOM

- [`Performance.toJSON()`](/de/docs/Web/API/Performance/toJSON) wurde für [Web Worker](/de/docs/Web/API/Web_Workers_API) verfügbar gemacht ([Firefox Fehler 1504958](https://bugzil.la/1504958)).
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Anfragen werfen jetzt einen `NetworkError`, wenn der angeforderte Inhaltstyp ein `Blob` ist und die Anfragemethode nicht `GET` ist ([Firefox Fehler 1502599](https://bugzil.la/1502599)).
- Die `-moz-`-präfixierten Versionen vieler Funktionen der [Fullscreen API](/de/docs/Web/API/Fullscreen_API) sind jetzt veraltet und zeigen nun Deprecation-Warnungen in der JavaScript-Konsole an, wenn sie auftreten ([Firefox Fehler 1504946](https://bugzil.la/1504946)).
- [`createImageBitmap()`](/de/docs/Web/API/CreateImageBitmap) unterstützt jetzt SVG-Bilder ([`SVGImageElement`](/de/docs/Web/API/SVGImageElement)) als Bildquelle ([Firefox Fehler 1500768](https://bugzil.la/1500768)).

#### DOM-Ereignisse

- In Zukunft ist nur ein [`Window.open()`](/de/docs/Web/API/Window/open)-Aufruf pro Ereignis zulässig ([Firefox Fehler 675574](https://bugzil.la/675574)).
- Die [`keyup`](/de/docs/Web/API/Element/keyup_event) und [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignisse werden jetzt während der IME-Eingabezusammensetzung ausgelöst, um die Kompatibilität zwischen Browsern für CJKT-Nutzer zu verbessern ([Firefox Fehler 354358](https://bugzil.la/354358)).

#### Web Worker

- [`SharedWorkerGlobalScope.connect`](/de/docs/Web/API/SharedWorkerGlobalScope/connect_event)'s Ereignisobjekt ist jetzt eine Instanz von [`MessageEvent`](/de/docs/Web/API/MessageEvent) — seine `data`-Eigenschaft ist jetzt ein leerer Zeichenfolgenwert anstelle von `null` ([Firefox Fehler 1508824](https://bugzil.la/1508824)).

#### Fetch und Service Worker

- Die Methode [`Response.redirect()`](/de/docs/Web/API/Response/redirect_static) wirft jetzt korrekt einen `TypeError`, wenn eine ungültige URL als erster Parameter angegeben wird ([Firefox Fehler 1503276](https://bugzil.la/1503276)).
- Die Methoden [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) und [`WorkerGlobalScope.importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts) (bei der Verwendung durch einen Service Worker) akzeptieren jetzt alle Dateien mit einem gültigen [JavaScript-MIME-Typ](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types#textjavascript) ([Firefox Fehler 1354577](https://bugzil.la/1354577)).
- Die Eigenschaften [`FetchEvent.replacesClientId`](/de/docs/Web/API/FetchEvent/replacesClientId) und [`FetchEvent.resultingClientId`](/de/docs/Web/API/FetchEvent/resultingClientId) werden jetzt unterstützt ([Firefox Fehler 1264177](https://bugzil.la/1264177)).
- Die Handler-Eigenschaften [`ServiceWorkerGlobalScope.onmessageerror`](/de/docs/Web/API/ServiceWorkerGlobalScope/messageerror_event) und [`ServiceWorkerContainer.onmessageerror`](/de/docs/Web/API/ServiceWorkerContainer/messageerror_event) wurden implementiert ([Firefox Fehler 1399446](https://bugzil.la/1399446)).
- Der {{httpheader("Origin")}}-Header wird bei Fetch-Anfragen mit der Methode {{HTTPMethod("HEAD")}} oder {{HTTPMethod("GET")}} nicht mehr gesetzt ([Firefox Fehler 1508661](https://bugzil.la/1508661)).

#### Medien, Web Audio, und WebRTC

- Das [WebRTC](/de/docs/Web/API/WebRTC_API)-Wörterbuch [`RTCIceCandidateStats`](/de/docs/Web/API/RTCIceCandidateStats) wurde gemäß den neuesten Spezifikationsänderungen aktualisiert ([Firefox Fehler 1324788](https://bugzil.la/1324788), [Firefox Fehler 1489040](https://bugzil.la/1489040); RTCIceCandidateStats wurde gemäß den neuesten Spezifikationen aktualisiert, um genauere Details zu erfahren, was sich geändert hat).
- Die `pause` und `resume` Ereignisse des [`MediaRecorder`](/de/docs/Web/API/MediaRecorder) (und ihre entsprechenden Event-Handler-Eigenschaften) wurden zuvor nicht implementiert, obwohl in den Kompatibilitätstabellen angegeben wurde, dass sie implementiert wurden. Sie wurden jetzt implementiert ([Firefox Fehler 1458538](https://bugzil.la/1458538), [Firefox Fehler 1514016](https://bugzil.la/1514016)).

#### Canvas und WebGL

- Die [WebGL](/de/docs/Web/API/WebGL_API) Erweiterungen [`EXT_texture_compression_bptc`](/de/docs/Web/API/EXT_texture_compression_bptc) und [`EXT_texture_compression_rgtc`](/de/docs/Web/API/EXT_texture_compression_rgtc) für die Texturkompression wurden für WebGL1- und WebGL2-Kontexte verfügbar gemacht ([Firefox Fehler 1507263](https://bugzil.la/1507263)).

#### Entfernungen

- [Mutation Events](/de/docs/Web/API/MutationEvent) wurden in Shadow Trees deaktiviert ([Firefox Fehler 1489858](https://bugzil.la/1489858)).
- Die nicht standardmäßige Eigenschaft `currentTime` des [`MediaStream`](/de/docs/Web/API/MediaStream) wurde entfernt ([Firefox Fehler 1502927](https://bugzil.la/1502927)).
- Die `dom.webcomponents.shadowdom.enabled` und `dom.webcomponents.customelements.enabled` Voreinstellungen wurden entfernt — Shadow DOM und Custom Elements können in `about:config` nicht mehr deaktiviert werden ([Firefox Fehler 1503019](https://bugzil.la/1503019)).
- Das nicht standardisierte DOM-Ereignis `text` — ausgelöst, um die Browser-Editor-Benutzeroberfläche über IME-Zusammensetzungszeichenfolgendaten und Auswahlbereiche zu informieren — wurde entfernt ([Firefox Fehler 1288640](https://bugzil.la/1288640)).
- Das [`keypress`](/de/docs/Web/API/Element/keypress_event)-Ereignis wird nicht mehr für [nicht druckbare Tasten](</de/docs/Web/API/KeyboardEvent/keyCode#non-printable_keys_(function_keys)>) ([Firefox Fehler 968056](https://bugzil.la/968056)) ausgelöst, außer für die `Enter`-Taste und die Tastenkombinationen `Shift` + `Enter` und `Ctrl` + `Enter` (diese wurden aus Kompatibilitätsgründen beibehalten).

### Sicherheit

- Zusätzliche CORS-Beschränkungen werden jetzt für zulässige Anfrage-Header durchgesetzt ([Firefox Fehler 1483815](https://bugzil.la/1483815), siehe auch [whatwg fetch issue 382: CORS-safelisted request headers should be restricted according to RFC 7231](https://github.com/whatwg/fetch/issues/382) für weitere Details).

### Netzwerke

_Keine Änderungen._

### Plugins

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

#### API-Änderungen

- `WebDriver:ElementSendKeys` behandelt `<input type=file>` jetzt entspannter bei Interaktivitätsprüfungen und erlaubt es diesen Elementen, versteckt zu sein, ohne einen `nicht interaktiv`-Fehler auszulösen. Wenn eine strenge Interaktivitätsprüfung gewünscht ist, kann die Fähigkeit `strictFileInteractability` verwendet werden ([Firefox Fehler 1502864](https://bugzil.la/1502864)).

#### Fehlerbehebungen

- Die Fenstermanipulationskommandos `WebDriver:FullscreenWindow`, `WebDriver:MinimizeWindow`, `WebDriver:MaximizeWindow`, und `WebDriver:SetWindowRect` wurden stabiler gemacht ([Firefox Fehler 1492499](https://bugzil.la/1492499)). Dies bedeutet, dass sie unter speziellen Bedingungen nicht mehr zu einer endlosen Hängung führen, sondern nach 5s Timeout, wenn der angeforderte Fensterzustand nicht erreicht werden kann ([Firefox Fehler 1521527](https://bugzil.la/1521527)).
- `WebDriver:ElementClick` berechnet jetzt korrekt den Mittelpunkt des Elements zum Klicken, was Interaktionen mit Dimensionen von 1x1 Pixeln ermöglicht ([Firefox Fehler 1499360](https://bugzil.la/1499360)).

#### Sonstiges

- Für `unerwartete Alarm-Fehler` werden informativere Nachrichten bereitgestellt ([Firefox Fehler 1502268](https://bugzil.la/1502268)).

### Sonstiges

- Unterstützung für [WebP](/de/docs/Glossary/WebP)-Bilder wurde hinzugefügt ([Firefox Fehler 1294490](https://bugzil.la/1294490)).

  - Zusätzlich wurde zur Erleichterung der Kompatibilität zwischen Browsern in bestimmten Situationen der WebP-MIME-Typ (`image/webp`) dem Standard-HTTP-Anfrage-{{httpheader("Accept")}}-Header für HTML-Dateien hinzugefügt ([Firefox Fehler 1507691](https://bugzil.la/1507691)).

- Der AV1-Codec wird jetzt standardmäßig unter Windows unterstützt ([Firefox Fehler 1452146](https://bugzil.la/1452146)).

## Änderungen für Add-On-Entwickler

### API-Änderungen

#### Tabs

- Die {{WebExtAPIRef("tabs", "tabs API", "", "1")}} wurde erweitert, um Tab-Nachfolger zu unterstützen — ein Tab kann einen Nachfolger zugewiesen bekommen, also die ID des Tabs, der aktiv wird, wenn er geschlossen wird ([Firefox Fehler 1500479](https://bugzil.la/1500479), siehe auch [diesen Blog-Beitrag](https://qiita.com/piroor/items/ea7e727735631c45a366) für weitere Informationen). Im Besonderen:

  - Der {{WebExtAPIRef("tabs.Tab")}}-Typ hat jetzt eine `successorId`-Eigenschaft, die verwendet werden kann, um die ID des Nachfolger-Tabs zu speichern/abzurufen.
  - Der Callback des {{WebExtAPIRef("tabs.onActivated")}}-Ereignislisteners hat einen neuen verfügbaren Parameter, `previousTabId`, der die ID des vorher aktivierten Tabs enthält, falls dieser noch geöffnet ist.
  - Das `updateProperties`-Objekt der {{WebExtAPIRef("tabs.update()")}}-Funktion hat eine neue optionale verfügbare Eigenschaft, `successorTabId`, um es zu aktualisieren.
  - `successorTabId` wird auch von Funktionen zurückgegeben wie {{WebExtAPIRef("tabs.get()")}} und {{WebExtAPIRef("tabs.query()")}}.
  - Die neue Funktion `tabs.moveInSuccession()` erlaubt die Massenmanipulation von Tab-Nachfolgern.

### Manifest-Änderungen

_Keine Änderungen._

### Sonstiges

- Die Eigenschaften `headerURL`/`theme_frame` für [WebExtension-Themen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) werden jetzt auf Firefox für Android unterstützt ([Firefox Fehler 1429488](https://bugzil.la/1429488)).

## Siehe auch

- Hacks-Release-Artikel: [Firefox 65: WebP-Unterstützung, Flexbox-Inspektor, neue Werkzeuge und Plattformaktualisierungen](https://hacks.mozilla.org/2019/01/firefox-65-webp-flexbox-inspector-new-tooling/)

## Ältere Versionen

{{Firefox_for_developers}}
