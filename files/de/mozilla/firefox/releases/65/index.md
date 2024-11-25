---
title: Firefox 65 für Entwickler
slug: Mozilla/Firefox/Releases/65
l10n:
  sourceCommit: 4f470ce128d50dc3568ddf03b313f420055d9799
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 65, die Entwickler betreffen werden. Firefox 65 wurde am 29. Januar 2019 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklertools

- Der [Flexbox-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_flexbox_layouts/index.html) ist jetzt standardmäßig aktiviert.
- Unterstützung wurde zum [JavaScript Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) für XHR Breakpoints hinzugefügt ([Firefox Bug 821610](https://bugzil.la/821610)).
- Mit einem Rechtsklick auf ein Element im Barrierefreiheitsbaum des Accessibility Viewers können Sie es als [JSON ausdrucken](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#print-accessibility-tree-to-json) und im JSON-Anzeigeprogramm anzeigen.
- Die Anzeige des [Farbkontrasts](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#color-contrast) des Accessibility Pickers wurde aktualisiert, sodass bei komplexen Hintergründen (z.B. ein Verlauf oder ein komplexes Bild) ein Bereich von Farbkontrastwerten angezeigt wird.
- Der Header-Tab des [Netzwerkmonitors](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) zeigt jetzt die Referrer-Policy für die ausgewählte Anfrage an ([Firefox Bug 1496742](https://bugzil.la/1496742)).
- Bei der Anzeige von Stack-Traces (z.B. in Konsolenlogs oder dem JavaScript-Debugger) werden Framework-Aufrufe identifiziert und standardmäßig reduziert, was es einfacher macht, sich auf Ihren eigenen Code zu konzentrieren.
- In ähnlicher Weise wie native Terminals können Sie jetzt die umgekehrte Suche verwenden, um Einträge in Ihrer JavaScript-Konsolen-Historie zu finden (`F9` unter Windows/Linux oder `Ctrl` + `R` auf macOS, dann einen Suchbegriff eingeben, gefolgt von `Ctrl` + `R`/`Ctrl` + `S`, um durch die Ergebnisse zu navigieren).
- Der `$0`-Shortcut der JavaScript-Konsole (verweist auf das derzeit untersuchte Element auf der Seite) bietet jetzt eine Autovervollständigung an, sodass Sie zum Beispiel `$0.te` eingeben können, um Vorschläge für Eigenschaften wie `$0.textContent` zu erhalten.
- Die Bearbeitungen, die Sie in der Regeln-Ansicht des Inspektors vornehmen, sind jetzt im Änderungen-Panel aufgelistet ([Firefox Bug 1503920](https://bugzil.la/1503920)).

### HTML

- Ereignisse werden jetzt auf deaktivierten HTML-Elementen ausgelöst, d.h. {{htmlelement("button")}}, {{htmlelement("fieldset")}}, {{htmlelement("input")}}, {{htmlelement("select")}} und {{htmlelement("textarea")}} Elementen mit gesetzten `disabled`-Attributen ([Firefox Bug 329509](https://bugzil.la/329509)).
- Das Entfernen des `src`-Attributs eines {{htmlelement("iframe")}}-Elements führt jetzt dazu, dass `about:blank` darin geladen wird, um mit Chrome und Safari gleichzuziehen ([Firefox Bug 1507842](https://bugzil.la/1507842)). Zuvor hatte das Entfernen von `src` keine Auswirkung auf den Inhalt des `iframe`.
- Unterstützung für das [`referrerpolicy`](/de/docs/Web/HTML/Element/script#referrerpolicy)-Attribut auf {{htmlelement("script")}}-Elementen wurde hinzugefügt ([Firefox Bug 1460920](https://bugzil.la/1460920)).

### CSS

- Der `crisp-edges`-Wert der {{cssxref("image-rendering")}}-Eigenschaft wurde jetzt unpräfixiert ([Firefox Bug 1496617](https://bugzil.la/1496617)).
- Ein {{cssxref("scrollbar-color")}}-Wert von `auto` wird jetzt als `auto` aufgelöst, anstatt in zwei Farben ([Firefox Bug 1501418](https://bugzil.la/1501418)).
- Die `break-*`-Eigenschaften wurden implementiert und die veralteten `page-break-*`-Eigenschaften wurden auf sie umgeleitet ([Firefox Bug 775618](https://bugzil.la/775618)):

  - {{cssxref("break-before")}} ist jetzt ein Alias für {{cssxref("page-break-before")}}.
  - {{cssxref("break-after")}} ist jetzt ein Alias für {{cssxref("page-break-after")}}.
  - {{cssxref("break-inside")}} ist jetzt ein Alias für {{cssxref("page-break-inside")}}.

- Der `anywhere`-Wert der {{cssxref("overflow-wrap")}}-Eigenschaft wurde implementiert ([Firefox Bug 1505786](https://bugzil.la/1505786)).
- Die neuen Schrittopositions-Schlüsselwörter `jump-start`, `jump-end`, `jump-none` und `jump-both` — innerhalb der [`steps()`-Timing-Funktion]() verwendbar — wurden implementiert ([Firefox Bug 1496619](https://bugzil.la/1496619)). Dies fällt auch mit der Entfernung der `frames()`-Timing-Funktion zusammen, die die frühere Methode zur Implementierung solcher Funktionalitäten war und nun veraltet ist.
- Einige neue {{cssxref("appearance", "-webkit-appearance")}}-Werte wurden hinzugefügt, um die Kompatibilität mit anderen Browsern zu erhöhen. Insbesondere:

  - `meter`, das jetzt als Standardwert für {{htmlelement("meter")}}-Elemente in UA-Stylesheets verwendet wird. Der vorhandene Wert `meterbar` ist jetzt ein Alias für `meter` ([Firefox Bug 1501483](https://bugzil.la/1501483)).
  - `progress-bar`, das jetzt als Standardwert für {{htmlelement("progress")}}-Elemente in UA-Stylesheets verwendet wird. Der vorhandene Wert `progressbar` ist jetzt ein Alias für `progress-bar` ([Firefox Bug 1501506](https://bugzil.la/1501506)).
  - `textarea`, das jetzt als Standardwert für {{htmlelement("textarea")}}-Elemente in UA-Stylesheets verwendet wird. Der vorhandene Wert `textfield-multiline` ist jetzt ein Alias für `textarea` ([Firefox Bug 1507905](https://bugzil.la/1507905)).

- Das Verhalten von {{cssxref("user-select")}} wurde geändert, um es besser mit anderen Browsern in Einklang zu bringen ([Firefox Bug 1506547](https://bugzil.la/1506547)). Insbesondere:

  - `user-select: all` gesetzt auf einem Element überschreibt nicht mehr andere Werte von `user-select`, die auf Kind-Elementen gesetzt sind. Zum Beispiel im folgenden Snippet:

    ```html
    <div style="-webkit-user-select: all">
      All
      <div style="-webkit-user-select: none">None</div>
    </div>
    ```

    Das `<div>` mit `none` darauf ist jetzt nicht auswählbar. Zuvor hätte dieser Wert von dem `all`-Wert auf dem Elternelement überschrieben worden.

  - nicht-`contenteditable`-Elemente, die innerhalb von `contenteditable`-Elementen verschachtelt sind, sind jetzt auswählbar.
  - `user-select` verhält sich jetzt innerhalb und außerhalb des Shadow DOMs konsistent.
  - Der proprietäre `-moz-text` Wert wurde entfernt.

- CSS-Umgebungsvariablen (die {{cssxref("env", "env()")}}-Funktion) wurden implementiert ([Firefox Bug 1462233](https://bugzil.la/1462233)).

#### Entfernungen

- Die `layout.css.shape-outside.enabled`-Voreinstellung wurde entfernt; {{cssxref("shape-outside")}}, {{cssxref("shape-margin")}} und {{cssxref("shape-image-threshold")}} können in `about:config` nicht mehr deaktiviert werden ([Firefox Bug 1504387](https://bugzil.la/1504387)).
- Mehrere nur in Firefox verfügbare Werte der {{cssxref("user-select")}}-Eigenschaft wurden entfernt — `-moz-all`, `-moz-text`, `tri-state`, `element`, `elements` und `toggle`. Siehe [Firefox Bug 1492958](https://bugzil.la/1492958) und [Firefox Bug 1506547](https://bugzil.la/1506547).
- Wie oben erwähnt wurde die `frames()`-Timing-Funktion entfernt ([Firefox Bug 1496619](https://bugzil.la/1496619)).

### SVG

_Keine Änderungen._

### JavaScript

- {{jsxref("Intl/RelativeTimeFormat", "Intl.RelativeTimeFormat")}} wird jetzt unterstützt ([Firefox Bug 1504334](https://bugzil.la/1504334)).
- Strings haben jetzt eine maximale {{jsxref("String/length","length","", 1)}} von `2**30 - 2` (\~1GB) anstelle von `2**28 - 1` (\~256MB) ([Firefox Bug 1509542](https://bugzil.la/1509542)).
- Die {{jsxref("globalThis")}}-Eigenschaft, die immer auf das oberste globale Objekt verweist, wurde implementiert ([Firefox Bug 1317422](https://bugzil.la/1317422)).

### APIs

#### Neue APIs

- [Lesbare Streams](/de/docs/Web/API/Streams_API/Using_readable_streams) wurden standardmäßig aktiviert ([Firefox Bug 1505122](https://bugzil.la/1505122)).
- Das [Storage Access API](/de/docs/Web/API/Storage_Access_API) wurde standardmäßig aktiviert ([Firefox Bug 1513021](https://bugzil.la/1513021)).

#### DOM

- [`Performance.toJSON()`](/de/docs/Web/API/Performance/toJSON) wurde für [Web Workers](/de/docs/Web/API/Web_Workers_API) zugänglich gemacht ([Firefox Bug 1504958](https://bugzil.la/1504958)).
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Anfragen werfen nun einen `NetworkError`, wenn der angeforderte Inhaltstyp ein `Blob` ist und die Anfragemethode nicht `GET` ist ([Firefox Bug 1502599](https://bugzil.la/1502599)).
- Die `-moz-`-Präfix-Versionen vieler der [Fullscreen API](/de/docs/Web/API/Fullscreen_API) Funktionen wurden veraltet, und bei deren Aufruf werden nun Verfallwarnungen in der JavaScript-Konsole angezeigt ([Firefox Bug 1504946](https://bugzil.la/1504946)).
- [`Window.createImageBitmap()`](/de/docs/Web/API/Window/createImageBitmap) und [`WorkerGlobalScope.createImageBitmap()`](/de/docs/Web/API/WorkerGlobalScope/createImageBitmap) unterstützen jetzt SVG-Bilder ([`SVGImageElement`](/de/docs/Web/API/SVGImageElement)) als Bildquelle ([Firefox Bug 1500768](https://bugzil.la/1500768)).

#### DOM-Ereignisse

- Zukünftig ist nur ein [`Window.open()`](/de/docs/Web/API/Window/open)-Aufruf pro Ereignis erlaubt ([Firefox Bug 675574](https://bugzil.la/675574)).
- Die [`keyup`](/de/docs/Web/API/Element/keyup_event) und [`keydown`](/de/docs/Web/API/Element/keydown_event) Ereignisse werden jetzt während der IME-Komposition ausgelöst, um die Browser-Kompatibilität für CJKT-Nutzer zu verbessern ([Firefox Bug 354358](https://bugzil.la/354358)).

#### Web Worker

- Das Event-Objekt von [`SharedWorkerGlobalScope.connect`](/de/docs/Web/API/SharedWorkerGlobalScope/connect_event) ist eine Instanz von [`MessageEvent`](/de/docs/Web/API/MessageEvent) — ihre `data`-Eigenschaft ist jetzt ein leerer String anstatt `null` ([Firefox Bug 1508824](https://bugzil.la/1508824)).

#### Fetch und Service-Worker

- Die Methode [`Response.redirect()`](/de/docs/Web/API/Response/redirect_static) wirft jetzt korrekt einen `TypeError`, wenn eine ungültige URL als erster Parameter angegeben wird ([Firefox Bug 1503276](https://bugzil.la/1503276)).
- Die Methoden [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) und [`WorkerGlobalScope.importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts) (wenn von einem Service-Worker verwendet) akzeptieren nun alle Dateien mit einem gültigen [JavaScript-MIME-Typ](/de/docs/Web/HTTP/MIME_types#textjavascript) ([Firefox Bug 1354577](https://bugzil.la/1354577)).
- Die Eigenschaften [`FetchEvent.replacesClientId`](/de/docs/Web/API/FetchEvent/replacesClientId) und [`FetchEvent.resultingClientId`](/de/docs/Web/API/FetchEvent/resultingClientId) werden jetzt unterstützt ([Firefox Bug 1264177](https://bugzil.la/1264177)).
- Die Event-Handler-Eigenschaften [`ServiceWorkerGlobalScope.onmessageerror`](/de/docs/Web/API/ServiceWorkerGlobalScope/messageerror_event) und [`ServiceWorkerContainer.onmessageerror`](/de/docs/Web/API/ServiceWorkerContainer/messageerror_event) wurden implementiert ([Firefox Bug 1399446](https://bugzil.la/1399446)).
- Der {{httpheader("Origin")}} Header wird bei Fetch-Anfragen mit der Methode {{HTTPMethod("HEAD")}} oder {{HTTPMethod("GET")}} nicht mehr gesetzt ([Firefox Bug 1508661](https://bugzil.la/1508661)).

#### Medien, Web Audio und WebRTC

- Das [WebRTC](/de/docs/Web/API/WebRTC_API) [`RTCIceCandidateStats`](/de/docs/Web/API/RTCIceCandidateStats)-Verzeichnis wurde entsprechend den neuesten Spezifikationsänderungen aktualisiert ([Firefox Bug 1324788](https://bugzil.la/1324788), [Firefox Bug 1489040](https://bugzil.la/1489040); RTCIceCandidateStats wurde gemäß der neuesten Spezifikation für genauere Informationen aktualisiert, was sich geändert hat).
- Die `pause` und `resume`-Ereignisse des [`MediaRecorder`](/de/docs/Web/API/MediaRecorder) (und ihre entsprechenden Event-Handler-Eigenschaften) waren zuvor nicht implementiert, auch wenn Kompatibilitätstabellen behaupteten, dass sie es gewesen sind. Sie wurden nun implementiert ([Firefox Bug 1458538](https://bugzil.la/1458538), [Firefox Bug 1514016](https://bugzil.la/1514016)).

#### Canvas und WebGL

- Die [WebGL](/de/docs/Web/API/WebGL_API) [`EXT_texture_compression_bptc`](/de/docs/Web/API/EXT_texture_compression_bptc) und [`EXT_texture_compression_rgtc`](/de/docs/Web/API/EXT_texture_compression_rgtc)-Texturkompressions-Erweiterungen wurden für WebGL1- und WebGL2-Kontexte zugänglich gemacht ([Firefox Bug 1507263](https://bugzil.la/1507263)).

#### Entfernungen

- [Mutationsereignisse](/de/docs/Web/API/MutationEvent) wurden in Shadow Trees deaktiviert ([Firefox Bug 1489858](https://bugzil.la/1489858)).
- Die nicht standardisierte [`MediaStream`](/de/docs/Web/API/MediaStream)-Eigenschaft `currentTime` wurde entfernt ([Firefox Bug 1502927](https://bugzil.la/1502927)).
- Die Präferenzen `dom.webcomponents.shadowdom.enabled` und `dom.webcomponents.customelements.enabled` wurden entfernt — Shadow DOM und benutzerdefinierte Elemente können in `about:config` nicht mehr deaktiviert werden ([Firefox Bug 1503019](https://bugzil.la/1503019)).
- Das nicht standardisierte DOM-`text`-Ereignis — ausgelöst, um die Browser-Editor-UI über IME-Kompositionszeichenfolgen-Daten und Auswahlbereich zu benachrichtigen — wurde entfernt ([Firefox Bug 1288640](https://bugzil.la/1288640)).
- Das [`keypress`](/de/docs/Web/API/Element/keypress_event)-Ereignis wird nicht mehr für [nicht druckbare Tasten](</de/docs/Web/API/KeyboardEvent/keyCode#non-printable_keys_(function_keys)>) ([Firefox Bug 968056](https://bugzil.la/968056)) ausgelöst, außer für die `Enter`-Taste und die `Shift` + `Enter`- und `Ctrl` + `Enter`-Tastenkombinationen (diese wurden aus Gründen der plattformübergreifenden Kompatibilität beibehalten).

### Sicherheit

- Zusätzliche CORS-Einschränkungen werden jetzt auf erlaubte Anfrage-Header durchgesetzt ([Firefox Bug 1483815](https://bugzil.la/1483815), siehe auch [whatwg fetch issue 382: CORS-safelisted request headers should be restricted according to RFC 7231](https://github.com/whatwg/fetch/issues/382) für mehr Details).

### Netzwerk

_Keine Änderungen._

### Plugins

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

#### API-Änderungen

- `WebDriver:ElementSendKeys` behandelt `<input type=file>` jetzt entspannter für Interaktivitätsprüfungen und erlaubt, dass diese Elemente verborgen werden, ohne einen `not interactable`-Fehler auszulösen. Wenn eine strikte Interaktivitätsprüfung gewünscht ist, kann die Fähigkeit `strictFileInteractability` verwendet werden ([Firefox Bug 1502864](https://bugzil.la/1502864)).

#### Fehlerbehebungen

- Die Fenster-Manipulationsbefehle `WebDriver:FullscreenWindow`, `WebDriver:MinimizeWindow`, `WebDriver:MaximizeWindow` und `WebDriver:SetWindowRect` wurden stabiler gemacht ([Firefox Bug 1492499](https://bugzil.la/1492499)). Das bedeutet, dass sie unter bestimmten Bedingungen keine endlose Schleife mehr verursachen, sondern stattdessen nach 5 Sekunden auslaufen, wenn der angeforderte Fensterzustand nicht erreicht werden kann ([Firefox Bug 1521527](https://bugzil.la/1521527)).
- `WebDriver:ElementClick` berechnet jetzt korrekt den Mittelpunkt des zu klickenden Elements, was Interaktionen mit Abmessungen von 1x1 Pixeln ermöglicht ([Firefox Bug 1499360](https://bugzil.la/1499360)).

#### Sonstiges

- Für `unexpected alert open`-Fehler werden informativerere Nachrichten bereitgestellt ([Firefox Bug 1502268](https://bugzil.la/1502268)).

### Sonstiges

- Unterstützung für {{Glossary("WebP", "WebP")}}-Bilder wurde hinzugefügt ([Firefox Bug 1294490](https://bugzil.la/1294490)).

  - Zusätzlich wurde zur Erleichterung der plattformübergreifenden Kompatibilität in bestimmten Situationen der WebP-MIME-Type (`image/webp`) zum Standard-HTTP-Request-{{httpheader("Accept")}}-Header für HTML-Dateien hinzugefügt ([Firefox Bug 1507691](https://bugzil.la/1507691)).

- Der AV1-Codec wird jetzt standardmäßig unter Windows unterstützt ([Firefox Bug 1452146](https://bugzil.la/1452146)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

#### Tabs

- Die {{WebExtAPIRef("tabs", "tabs API", "", "1")}} wurde erweitert, um Tab-Nachfolger zu unterstützen — ein Tab kann einen Nachfolger zugewiesen bekommen, das ist die ID des Tabs, der aktiv wird, wenn es geschlossen wird ([Firefox Bug 1500479](https://bugzil.la/1500479), siehe auch [dieser Blog-Post](https://qiita.com/piroor/items/ea7e727735631c45a366) für weitere Informationen). Insbesondere:

  - Der Typ {{WebExtAPIRef("tabs.Tab")}} hat jetzt eine `successorId`-Eigenschaft, die verwendet werden kann, um die ID des Nachfolgers des Tabs zu speichern/abzurufen.
  - Der Callback des {{WebExtAPIRef("tabs.onActivated")}}-Ereignis-Listeners hat einen neuen Parameter, `previousTabId`, der die ID des vorher aktivierten Tabs enthält, falls dieser noch geöffnet ist.
  - Das `updateProperties`-Objekt der Funktion {{WebExtAPIRef("tabs.update()")}} hat eine neue optionale Eigenschaft, `successorTabId`, die verwendet werden kann, um sie zu aktualisieren.
  - `successorTabId` wird auch von Funktionen wie {{WebExtAPIRef("tabs.get()")}} und {{WebExtAPIRef("tabs.query()")}} zurückgegeben.
  - Die neue Funktion `tabs.moveInSuccession()` erlaubt die Massenmanipulation von Tab-Nachfolgern.

### Manifest-Änderungen

_Keine Änderungen._

### Sonstiges

- Die Eigenschaften `headerURL`/`theme_frame` für [WebExtension-Themen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) werden jetzt auf Firefox für Android unterstützt ([Firefox Bug 1429488](https://bugzil.la/1429488)).

## Siehe auch

- Hacks Release-Artikel: [Firefox 65: WebP-Support, Flexbox-Inspector, neue Tools und Plattform-Updates](https://hacks.mozilla.org/2019/01/firefox-65-webp-flexbox-inspector-new-tooling/)

## Ältere Versionen

{{Firefox_for_developers}}
