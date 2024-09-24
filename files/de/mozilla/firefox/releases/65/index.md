---
title: Firefox 65 für Entwickler
slug: Mozilla/Firefox/Releases/65
l10n:
  sourceCommit: f75b2c86ae4168e59416aed4c7121f222afc201d
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 65, die Entwickler betreffen. Firefox 65 wurde am 29. Januar 2019 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Der [Flexbox-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_flexbox_layouts/index.html) ist jetzt standardmäßig aktiviert.
- Unterstützung wurde dem [JavaScript-Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) für XHR-Unterbrechungspunkte hinzugefügt ([Firefox Fehler 821610](https://bugzil.la/821610)).
- Klicken Sie mit der rechten Maustaste auf ein Element im Accessibility-Baum des Accessibility-Viewers, um es [als JSON auszugeben](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#print-accessibility-tree-to-json) zum JSON-Viewer.
- Die Anzeige des [Farbkontrasts](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#color-contrast) des Accessibility Pickers wurde aktualisiert, sodass, wenn der Hintergrund eines Textes komplex ist (z. B. ein Farbverlauf oder ein komplexes Bild), ein Bereich von Farbkontrastwerten angezeigt wird.
- Die Registerkarte "Headers" des [Netzwerkmonitors](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) zeigt nun die Referrer Policy für die ausgewählte Anfrage an ([Firefox Fehler 1496742](https://bugzil.la/1496742)).
- Bei der Anzeige von Stack-Traces (z. B. in Konsolen-Logs oder im JavaScript-Debugger) werden Aufrufe von Framework-Methoden standardmäßig identifiziert und eingeklappt, was es einfacher macht, sich auf den eigenen Code zu konzentrieren.
- In ähnlicher Weise wie native Terminals können Sie jetzt Rückwärtssuche verwenden, um Einträge in Ihrem JavaScript-Konsolenverlauf zu finden (`F9` auf Windows/Linux oder `Ctrl` + `R` auf macOS, dann geben Sie einen Suchbegriff ein, gefolgt von `Ctrl` + `R`/`Ctrl` + `S`, um durch die Ergebnisse zu schalten).
- Der `$0`-Shortcut der JavaScript-Konsole (bezieht sich auf das aktuell untersuchte Element auf der Seite) hat jetzt eine Autovervollständigung verfügbar. Zum Beispiel könnten Sie `$0.te` eingeben, um Autovervollständigungsvorschläge für Eigenschaften wie `$0.textContent` zu erhalten.
- Die Änderungen, die Sie im Regel-View des Inspectors vornehmen, werden jetzt im Änderungsprotokoll aufgelistet ([Firefox Fehler 1503920](https://bugzil.la/1503920)).

### HTML

- Events werden jetzt auf deaktivierten HTML-Elementen ausgelöst, d. h. {{htmlelement("button")}}, {{htmlelement("fieldset")}}, {{htmlelement("input")}}, {{htmlelement("select")}} und {{htmlelement("textarea")}}-Elemente mit gesetzten `disabled`-Attributen ([Firefox Fehler 329509](https://bugzil.la/329509)).
- Das Entfernen des `src`-Attributs eines {{htmlelement("iframe")}}-Elements führt nun dazu, dass `about:blank` darin geladen wird, wodurch es mit Chrome und Safari gleichzieht ([Firefox Fehler 1507842](https://bugzil.la/1507842)). Zuvor hatte das Entfernen von `src` keine Auswirkung auf den Inhalt des `iframe`.
- Unterstützung für das [`referrerpolicy`](/de/docs/Web/HTML/Element/script#referrerpolicy)-Attribut auf {{htmlelement("script")}}-Elementen wurde hinzugefügt ([Firefox Fehler 1460920](https://bugzil.la/1460920)).

### CSS

- Der `crisp-edges`-Wert der {{cssxref("image-rendering")}}-Eigenschaft wurde nun ungeprüft ([Firefox Fehler 1496617](https://bugzil.la/1496617)).
- Ein {{cssxref("scrollbar-color")}}-Wert von `auto` löst sich jetzt in `auto` auf, anstatt in zwei Farben ([Firefox Fehler 1501418](https://bugzil.la/1501418)).
- Die `break-*`-Eigenschaften sind implementiert, und die veralteten `page-break-*`-Eigenschaften sind jetzt Aliase von ihnen ([Firefox Fehler 775618](https://bugzil.la/775618)):

  - {{cssxref("break-before")}} ist jetzt ein Alias für {{cssxref("page-break-before")}}.
  - {{cssxref("break-after")}} ist jetzt ein Alias für {{cssxref("page-break-after")}}.
  - {{cssxref("break-inside")}} ist jetzt ein Alias für {{cssxref("page-break-inside")}}.

- Der `anywhere`-Wert der {{cssxref("overflow-wrap")}}-Eigenschaft wurde implementiert ([Firefox Fehler 1505786](https://bugzil.la/1505786)).
- Die neuen Schrittpositions-Keywords `jump-start`, `jump-end`, `jump-none` und `jump-both`, die innerhalb der [`steps()`-Timing-Funktion](/de/docs/Web/CSS/easing-function#step_easing_function) verwendet werden können, wurden implementiert ([Firefox Fehler 1496619](https://bugzil.la/1496619)). Dies fällt auch mit der Entfernung der `frames()`-Timing-Funktion zusammen, die bisher die vorherige Möglichkeit der Implementierung solcher Funktionalität darstellte und nun veraltet ist.
- Einige neue {{cssxref("appearance", "-webkit-appearance")}}-Werte wurden hinzugefügt, um die Kompatibilität mit anderen Browsern zu verbessern. Insbesondere:

  - `meter`, das jetzt als Standardwert für {{htmlelement("meter")}}-Elemente in UA-Stylesheets verwendet wird. Der bestehende Wert `meterbar` ist jetzt ein Alias für `meter` ([Firefox Fehler 1501483](https://bugzil.la/1501483)).
  - `progress-bar`, das jetzt als Standardwert für {{htmlelement("progress")}}-Elemente in UA-Stylesheets verwendet wird. Der bestehende Wert `progressbar` ist jetzt ein Alias für `progress-bar` ([Firefox Fehler 1501506](https://bugzil.la/1501506)).
  - `textarea`, das jetzt als Standardwert für {{htmlelement("textarea")}}-Elemente in UA-Stylesheets verwendet wird. Der bestehende Wert `textfield-multiline` ist jetzt ein Alias für `textarea` ([Firefox Fehler 1507905](https://bugzil.la/1507905)).

- Das Verhalten von {{cssxref("user-select")}} wurde geändert, um es besser mit anderen Browsern in Einklang zu bringen ([Firefox Fehler 1506547](https://bugzil.la/1506547)). Im Einzelnen:

  - `user-select: all`, das auf ein Element gesetzt ist, überschreibt keine anderen `user-select`-Werte mehr, die auf Kind-Elementen dieses Elements gesetzt sind. Zum Beispiel in dem folgenden Snippet:

    ```html
    <div style="-webkit-user-select: all">
      All
      <div style="-webkit-user-select: none">None</div>
    </div>
    ```

    Das `<div>` mit `none` darauf ist jetzt nicht mehr wählbar. Vorher wäre dieser Wert durch den auf dem Elternelement gesetzten `all`-Wert überschrieben worden.

  - Nicht-`contenteditable`-Elemente, die in `contenteditable`-Elementen verschachtelt sind, sind jetzt auswählbar.
  - `user-select` verhält sich jetzt konsistent innerhalb und außerhalb von Shadow DOM.
  - Der proprietäre `-moz-text`-Wert wurde entfernt.

- CSS-Umgebungsvariablen (die {{cssxref("env", "env()")}}-Funktion) wurden implementiert ([Firefox Fehler 1462233](https://bugzil.la/1462233)).

#### Entfernungen

- Die `layout.css.shape-outside.enabled`-Präferenz wurde entfernt; {{cssxref("shape-outside")}}, {{cssxref("shape-margin")}} und {{cssxref("shape-image-threshold")}} können nicht mehr in `about:config` deaktiviert werden ([Firefox Fehler 1504387](https://bugzil.la/1504387)).
- Mehrere Firefox-exklusive Werte der {{cssxref("user-select")}}-Eigenschaft wurden entfernt — `-moz-all`, `-moz-text`, `tri-state`, `element`, `elements` und `toggle`. Siehe [Firefox Fehler 1492958](https://bugzil.la/1492958) und [Firefox Fehler 1506547](https://bugzil.la/1506547).
- Wie oben erwähnt, wurde die `frames()`-Timing-Funktion entfernt ([Firefox Fehler 1496619](https://bugzil.la/1496619)).

### SVG

_Keine Änderungen._

### JavaScript

- {{jsxref("Intl/RelativeTimeFormat", "Intl.RelativeTimeFormat")}} wird jetzt unterstützt ([Firefox Fehler 1504334](https://bugzil.la/1504334)).
- Strings haben jetzt eine maximale {{jsxref("String/length", "Länge", "", 1)}} von `2**30 - 2` (\~1GB) anstelle von `2**28 - 1` (\~256MB) ([Firefox Fehler 1509542](https://bugzil.la/1509542)).
- Die {{jsxref("globalThis")}}-Eigenschaft, die sich immer auf das globale Top-Level-Objekt bezieht, wurde implementiert ([Firefox Fehler 1317422](https://bugzil.la/1317422)).

### APIs

#### Neue APIs

- [Readable Streams](/de/docs/Web/API/Streams_API/Using_readable_streams) wurden standardmäßig aktiviert ([Firefox Fehler 1505122](https://bugzil.la/1505122)).
- Die [Storage Access API](/de/docs/Web/API/Storage_Access_API) wurde standardmäßig aktiviert ([Firefox Fehler 1513021](https://bugzil.la/1513021)).

#### DOM

- [`Performance.toJSON()`](/de/docs/Web/API/Performance/toJSON) wurde für [Web Workers](/de/docs/Web/API/Web_Workers_API) zugänglich gemacht ([Firefox Fehler 1504958](https://bugzil.la/1504958)).
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) Anfragen werfen jetzt einen `NetworkError`, wenn der angeforderte Inhaltstyp ein `Blob` ist und die Anfragemethode nicht `GET` ist ([Firefox Fehler 1502599](https://bugzil.la/1502599)).
- Die `-moz-`-Präfix-Versionen vieler der [Fullscreen API](/de/docs/Web/API/Fullscreen_API)-Funktionen wurden abgewertet, und es werden jetzt Veralterungswarnungen in der JavaScript-Konsole angezeigt, wenn sie verwendet werden ([Firefox Fehler 1504946](https://bugzil.la/1504946)).
- [`Window.createImageBitmap()`](/de/docs/Web/API/Window/createImageBitmap) und [`WorkerGlobalScope.createImageBitmap()`](/de/docs/Web/API/WorkerGlobalScope/createImageBitmap) unterstützen nun SVG-Bilder ([`SVGImageElement`](/de/docs/Web/API/SVGImageElement)) als Bildquelle ([Firefox Fehler 1500768](https://bugzil.la/1500768)).

#### DOM-Ereignisse

- Zukünftig ist nur ein [`Window.open()`](/de/docs/Web/API/Window/open)-Aufruf pro Ereignis erlaubt ([Firefox Fehler 675574](https://bugzil.la/675574)).
- Die [`keyup`](/de/docs/Web/API/Element/keyup_event) und [`keydown`](/de/docs/Web/API/Element/keydown_event) Ereignisse werden jetzt während der IME-Komposition ausgelöst, um die plattformübergreifende Kompatibilität für CJKT-Benutzer zu verbessern ([Firefox Fehler 354358](https://bugzil.la/354358).

#### Web Workers

- Das Event-Objekt von [`SharedWorkerGlobalScope.connect`](/de/docs/Web/API/SharedWorkerGlobalScope/connect_event) ist eine Instanz von [`MessageEvent`](/de/docs/Web/API/MessageEvent) — seine `data`-Eigenschaft ist jetzt ein leerer String-Wert anstelle von `null` ([Firefox Fehler 1508824](https://bugzil.la/1508824)).

#### Fetch und Service Workers

- Die Methode [`Response.redirect()`](/de/docs/Web/API/Response/redirect_static) wirft nun korrekt einen `TypeError`, wenn eine ungültige URL als erster Parameter angegeben wird ([Firefox Fehler 1503276](https://bugzil.la/1503276)).
- Die Methoden [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) und [`WorkerGlobalScope.importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts) (wenn sie von einem Service Worker verwendet werden) akzeptieren jetzt jede Datei mit einem gültigen [JavaScript MIME-Typ](/de/docs/Web/HTTP/MIME_types#textjavascript) ([Firefox Fehler 1354577](https://bugzil.la/1354577)).
- Die Eigenschaften [`FetchEvent.replacesClientId`](/de/docs/Web/API/FetchEvent/replacesClientId) und [`FetchEvent.resultingClientId`](/de/docs/Web/API/FetchEvent/resultingClientId) werden jetzt unterstützt ([Firefox Fehler 1264177](https://bugzil.la/1264177)).
- Die Handler-Eigenschaften [`ServiceWorkerGlobalScope.onmessageerror`](/de/docs/Web/API/ServiceWorkerGlobalScope/messageerror_event) und [`ServiceWorkerContainer.onmessageerror`](/de/docs/Web/API/ServiceWorkerContainer/messageerror_event) wurden implementiert ([Firefox Fehler 1399446](https://bugzil.la/1399446)).
- Der {{httpheader("Origin")}}-Header wird nicht mehr bei Fetch-Anfragen mit einer Methode von {{HTTPMethod("HEAD")}} oder {{HTTPMethod("GET")}} gesetzt ([Firefox Fehler 1508661](https://bugzil.la/1508661)).

#### Medien, Web Audio und WebRTC

- Das [WebRTC](/de/docs/Web/API/WebRTC_API) [`RTCIceCandidateStats`](/de/docs/Web/API/RTCIceCandidateStats) Dictionary wurde gemäß den neuesten Spezifikationsänderungen aktualisiert ([Firefox Fehler 1324788](https://bugzil.la/1324788), [Firefox Fehler 1489040](https://bugzil.la/1489040); RTCIceCandidateStats wurde auf die neueste Spezifikation aktualisiert, um mehr Details dazu zu erhalten, was genau geändert wurde).
- Die `pause` und `resume` Ereignisse des [`MediaRecorder`](/de/docs/Web/API/MediaRecorder) (und ihre entsprechenden Event-Handler-Eigenschaften wurden zuvor nicht implementiert, obwohl Kompatibilitätstabellen behaupteten, sie seien es. Jetzt wurden sie implementiert ([Firefox Fehler 1458538](https://bugzil.la/1458538), [Firefox Fehler 1514016](https://bugzil.la/1514016)).

#### Canvas und WebGL

- Die [WebGL](/de/docs/Web/API/WebGL_API) [`EXT_texture_compression_bptc`](/de/docs/Web/API/EXT_texture_compression_bptc) und [`EXT_texture_compression_rgtc`](/de/docs/Web/API/EXT_texture_compression_rgtc) Texturkompressionserweiterungen wurden den WebGL1- und WebGL2-Kontexten zugänglich gemacht ([Firefox Fehler 1507263](https://bugzil.la/1507263)).

#### Entfernungen

- [Mutationsevents](/de/docs/Web/API/MutationEvent) wurden in Schattenbäumen deaktiviert ([Firefox Fehler 1489858](https://bugzil.la/1489858)).
- Die nicht standardisierte [`MediaStream`](/de/docs/Web/API/MediaStream)-Eigenschaft `currentTime` wurde entfernt ([Firefox Fehler 1502927](https://bugzil.la/1502927)).
- Die `dom.webcomponents.shadowdom.enabled` und `dom.webcomponents.customelements.enabled` Präferenzen wurden entfernt — Shadow DOM und Custom Elements können in `about:config` nicht mehr deaktiviert werden ([Firefox Fehler 1503019](https://bugzil.la/1503019)).
- Das nicht standardisierte DOM `text`-Ereignis — ausgelöst, um die Browser-Editor-UI über IME-Kompositionszeichenfolgendaten und Auswahlbereiche zu informieren — wurde entfernt ([Firefox Fehler 1288640](https://bugzil.la/1288640)).
- Das [`keypress`](/de/docs/Web/API/Element/keypress_event)-Ereignis wird nicht mehr für [nicht druckbare Tasten](</de/docs/Web/API/KeyboardEvent/keyCode#non-printable_keys_(function_keys)>) ausgelöst ([Firefox Fehler 968056](https://bugzil.la/968056)), außer für die `Enter`-Taste und die `Shift` + `Enter` und `Ctrl` + `Enter` Tastenkombinationen (diese wurden aus Gründen der plattformübergreifenden Kompatibilität beibehalten).

### Sicherheit

- Zusätzliche CORS-Einschränkungen werden jetzt auf zulässige Anfrage-Header durchgesetzt ([Firefox Fehler 1483815](https://bugzil.la/1483815), siehe auch [whatwg fetch issue 382: CORS-safelisted request headers should be restricted according to RFC 7231](https://github.com/whatwg/fetch/issues/382) für mehr Details).

### Netzwerk

_Keine Änderungen._

### Plugins

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

#### API-Änderungen

- `WebDriver:ElementSendKeys` handhabt `<input type=file>` jetzt entspannter in Bezug auf Interaktivitätsprüfungen und erlaubt diesen Elementen, ohne `not interactable` Fehler verborgen zu sein. Wenn eine strikte Interaktivitätsprüfung gewünscht ist, kann die Fähigkeit `strictFileInteractability` verwendet werden ([Firefox Fehler 1502864](https://bugzil.la/1502864)).

#### Fehlerkorrekturen

- Die Fenster-Manipulationsbefehle `WebDriver:FullscreenWindow`, `WebDriver:MinimizeWindow`, `WebDriver:MaximizeWindow` und `WebDriver:SetWindowRect` wurden stabiler gemacht ([Firefox Fehler 1492499](https://bugzil.la/1492499)). Dies bedeutet, dass sie unter besonderen Bedingungen nicht mehr zu einer endlosen Hängung führen, sondern nach 5s zeitüberschreiten, wenn der angeforderte Fensterzustand nicht erreicht werden kann ([Firefox Fehler 1521527](https://bugzil.la/1521527)).
- `WebDriver:ElementClick` berechnet jetzt korrekt den Mittelpunkt des Elements, auf das geklickt werden soll, was Interaktionen mit Dimensionen von 1x1 Pixeln ermöglicht ([Firefox Fehler 1499360](https://bugzil.la/1499360)).

#### Sonstiges

- Für `unexpected alert open` Fehler sind nun informativere Nachrichten verfügbar ([Firefox Fehler 1502268](https://bugzil.la/1502268)).

### Sonstige

- Unterstützung für {{Glossary("WebP", "WebP")}}-Bilder wurde hinzugefügt ([Firefox Fehler 1294490](https://bugzil.la/1294490)).

  - Zusätzlich wurde, um die plattformübergreifende Kompatibilität in bestimmten Situationen zu erleichtern, der WebP-MIME-Typ (`image/webp`) zum Standard-HTTP-Anfrage-{{httpheader("Accept")}}-Header für HTML-Dateien hinzugefügt ([Firefox Fehler 1507691](https://bugzil.la/1507691)).

- Der AV1-Codec wird jetzt standardmäßig unter Windows unterstützt ([Firefox Fehler 1452146](https://bugzil.la/1452146)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

#### Tabs

- Die {{WebExtAPIRef("tabs", "tabs API", "", "1")}} wurde erweitert, um Tab-Nachfolger zu unterstützen — ein Tab kann einen Nachfolger zugewiesen bekommen, der die ID des Tabs ist, der aktiv wird, sobald er geschlossen wird ([Firefox Fehler 1500479](https://bugzil.la/1500479), siehe auch [diesen Blogbeitrag](https://qiita.com/piroor/items/ea7e727735631c45a366) für weitere Informationen). Insbesondere:

  - Der {{WebExtAPIRef("tabs.Tab")}}-Typ hat jetzt eine `successorId`-Eigenschaft, die verwendet werden kann, um die ID des Tab-Nachfolgers zu speichern/abrufen.
  - Der Rückruf des {{WebExtAPIRef("tabs.onActivated")}}-Ereignislisteners hat einen neuen Parameter verfügbar, `previousTabId`, der die ID des zuvor aktivierten Tabs enthält, falls er noch geöffnet ist.
  - Das `updateProperties`-Objekt der {{WebExtAPIRef("tabs.update()")}}-Funktion hat eine neue optionale Eigenschaft verfügbar, `successorTabId`, die aktualisiert werden kann.
  - `successorTabId` wird auch von Funktionen wie {{WebExtAPIRef("tabs.get()")}} und {{WebExtAPIRef("tabs.query()")}} zurückgegeben.
  - Die neue Funktion `tabs.moveInSuccession()` ermöglicht die Massenbearbeitung von Tab-Nachfolgern.

### Manifest-Änderungen

_Keine Änderungen._

### Sonstige

- Die `headerURL`/`theme_frame` Eigenschaften für [WebExtension-Themen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) werden jetzt auf Firefox für Android unterstützt ([Firefox Fehler 1429488](https://bugzil.la/1429488)).

## Siehe auch

- Hacks Release Post: [Firefox 65: WebP-Unterstützung, Flexbox-Inspektor, neue Tools & Plattform-Updates](https://hacks.mozilla.org/2019/01/firefox-65-webp-flexbox-inspector-new-tooling/)

## Ältere Versionen

{{Firefox_for_developers}}
