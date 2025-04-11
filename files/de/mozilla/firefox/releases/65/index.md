---
title: Firefox 65 für Entwickler
slug: Mozilla/Firefox/Releases/65
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 65, die sich auf Entwickler auswirken. Firefox 65 wurde am 29. Januar 2019 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklertools

- Der [Flexbox-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_flexbox_layouts/index.html) ist jetzt standardmäßig aktiviert.
- Unterstützung wurde zum [JavaScript Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) für XHR Breakpoints hinzugefügt ([Firefox-Bug 821610](https://bugzil.la/821610)).
- Klicken Sie mit der rechten Maustaste auf ein Element im Accessibility-Baum des Accessibility-Viewers, um [es als JSON zu drucken](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#print-accessibility-tree-to-json) im JSON-Viewer.
- Die Anzeige des [Farbkontrasts](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#color-contrast) des Accessibility-Pickers wurde aktualisiert, sodass bei einem komplexen Hintergrund (z. B. ein Verlauf oder ein komplexes Bild) eine Bandbreite von Farbkontrastwerten angezeigt wird.
- Der Header-Tab des [Netzwerkmonitors](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) zeigt jetzt die Referrer Policy für die ausgewählte Anfrage an ([Firefox-Bug 1496742](https://bugzil.la/1496742)).
- Bei der Anzeige von Stack-Traces (z. B. in Konsolenlogs oder dem JavaScript-Debugger) werden Aufrufe von Framework-Methoden identifiziert und standardmäßig eingeklappt, um das Auffinden Ihres Codes zu erleichtern.
- Ähnlich wie bei nativen Terminals können Sie jetzt die Rückwärtssuche verwenden, um Einträge in Ihrem JavaScript-Konsolenverlauf zu finden (`F9` unter Windows/Linux oder `Ctrl` + `R` auf macOS, dann einen Suchbegriff eingeben, gefolgt von `Ctrl` + `R`/`Ctrl` + `S`, um durch die Ergebnisse zu blättern).
- Die `$0`-Verknüpfung der JavaScript-Konsole (verweist auf das aktuell untersuchte Element auf der Seite) verfügt jetzt über eine automatische Vervollständigung, sodass Sie zum Beispiel `$0.te` eingeben können, um Vervollständigungsvorschläge für Eigenschaften wie `$0.textContent` zu erhalten.
- Die Änderungen, die Sie in der Regelansicht des Inspektors vornehmen, werden jetzt im Änderungsprotokoll angezeigt ([Firefox-Bug 1503920](https://bugzil.la/1503920)).

### HTML

- Ereignisse werden jetzt auf deaktivierten HTML-Elementen ausgelöst, d.h. {{htmlelement("button")}}, {{htmlelement("fieldset")}}, {{htmlelement("input")}}, {{htmlelement("select")}} und {{htmlelement("textarea")}}-Elementen mit gesetzten `disabled`-Attributen ([Firefox-Bug 329509](https://bugzil.la/329509)).
- Das Entfernen des `src`-Attributs eines {{htmlelement("iframe")}}-Elements führt jetzt dazu, dass `about:blank` in das Element geladen wird, sodass es mit Chrome und Safari gleichgezogen wird ([Firefox-Bug 1507842](https://bugzil.la/1507842)). Zuvor hatte das Entfernen von `src` keinen Effekt auf den Inhalt des `iframe`.
- Wir haben Unterstützung für das [`referrerpolicy`](/de/docs/Web/HTML/Reference/Elements/script#referrerpolicy)-Attribut für {{htmlelement("script")}}-Elemente hinzugefügt ([Firefox-Bug 1460920](https://bugzil.la/1460920)).

### CSS

- Der `crisp-edges`-Wert der {{cssxref("image-rendering")}}-Eigenschaft wurde jetzt unverändert ([Firefox-Bug 1496617](https://bugzil.la/1496617)).
- Ein {{cssxref("scrollbar-color")}}-Wert von `auto` wird jetzt zu `auto` aufgelöst, anstatt zwei Farben zu verwenden ([Firefox-Bug 1501418](https://bugzil.la/1501418)).
- Die `break-*`-Eigenschaften wurden implementiert, und die veralteten `page-break-*`-Eigenschaften wurden mit ihnen verknüpft ([Firefox-Bug 775618](https://bugzil.la/775618)):

  - {{cssxref("break-before")}} ist jetzt ein Alias für {{cssxref("page-break-before")}}.
  - {{cssxref("break-after")}} ist jetzt ein Alias für {{cssxref("page-break-after")}}.
  - {{cssxref("break-inside")}} ist jetzt ein Alias für {{cssxref("page-break-inside")}}.

- Der `anywhere`-Wert der {{cssxref("overflow-wrap")}}-Eigenschaft wurde implementiert ([Firefox-Bug 1505786](https://bugzil.la/1505786)).
- Die neuen Schlüsselwörter für die Stufenpositionierung `jump-start`, `jump-end`, `jump-none` und `jump-both` — verwendbar in der [`steps()` Timing-Funktion](/de/docs/Web/CSS/easing-function/steps) — wurden implementiert ([Firefox-Bug 1496619](https://bugzil.la/1496619)). Dies fällt auch mit der Entfernung der `frames()`-Timing-Funktion zusammen, die die vorherige Methode zur Implementierung solcher Funktionen war und nun veraltet ist.
- Einige neue {{cssxref("appearance", "-webkit-appearance")}}-Werte wurden hinzugefügt, um die Kompatibilität mit anderen Browsern zu gewährleisten. Insbesondere:

  - `meter`, das jetzt als Standardwert für {{htmlelement("meter")}}-Elemente in UA-Stylesheets verwendet wird. Der vorhandene Wert `meterbar` ist jetzt ein Alias für `meter` ([Firefox-Bug 1501483](https://bugzil.la/1501483)).
  - `progress-bar`, das jetzt als Standardwert für {{htmlelement("progress")}}-Elemente in UA-Stylesheets verwendet wird. Der vorhandene Wert `progressbar` ist jetzt ein Alias für `progress-bar` ([Firefox-Bug 1501506](https://bugzil.la/1501506)).
  - `textarea`, das jetzt als Standardwert für {{htmlelement("textarea")}}-Elemente in UA-Stylesheets verwendet wird. Der vorhandene Wert `textfield-multiline` ist jetzt ein Alias für `textarea` ([Firefox-Bug 1507905](https://bugzil.la/1507905)).

- Das Verhalten von {{cssxref("user-select")}} wurde geändert, um es mehr mit anderen Browsern in Einklang zu bringen ([Firefox-Bug 1506547](https://bugzil.la/1506547)). Genauer gesagt:

  - `user-select: all` auf einem Element überschreibt nicht länger andere `user-select`-Werte, die auf den untergeordneten Elementen dieses Elements gesetzt sind. Zum Beispiel im folgenden Snippet:

    ```html
    <div style="-webkit-user-select: all">
      All
      <div style="-webkit-user-select: none">None</div>
    </div>
    ```

    Das `<div>` mit `none` darauf gesetzt, ist jetzt nicht mehr auswählbar. Zuvor hätte dieser Wert durch den `all`-Wert des übergeordneten Elements überschrieben werden können.

  - Nicht-`contenteditable`-Elemente, die in `contenteditable`-Elementen eingebettet sind, können jetzt ausgewählt werden.
  - `user-select` verhält sich jetzt konsistent innerhalb und außerhalb von Shadow DOM.
  - Der proprietäre `-moz-text`-Wert wurde entfernt.

- CSS-Umgebungsvariablen (die {{cssxref("env", "env()")}} Funktion) wurden implementiert ([Firefox-Bug 1462233](https://bugzil.la/1462233)).

#### Entfernen

- Die `layout.css.shape-outside.enabled`-Eigenschaft wurde entfernt; {{cssxref("shape-outside")}}, {{cssxref("shape-margin")}}, und {{cssxref("shape-image-threshold")}} können nicht mehr in `about:config` deaktiviert werden ([Firefox-Bug 1504387](https://bugzil.la/1504387)).
- Mehrere Firefox-exklusive Werte der {{cssxref("user-select")}}-Eigenschaft wurden entfernt — `-moz-all`, `-moz-text`, `tri-state`, `element`, `elements`, und `toggle`. Siehe [Firefox-Bug 1492958](https://bugzil.la/1492958) und [Firefox-Bug 1506547](https://bugzil.la/1506547).
- Wie oben erwähnt, wurde die `frames()`-Timing-Funktion entfernt ([Firefox-Bug 1496619](https://bugzil.la/1496619)).

### SVG

_Keine Änderungen._

### JavaScript

- {{jsxref("Intl/RelativeTimeFormat", "Intl.RelativeTimeFormat")}} wird nun unterstützt ([Firefox-Bug 1504334](https://bugzil.la/1504334)).
- Strings haben nun eine maximale {{jsxref("String/length","Länge","", 1)}} von `2**30 - 2` (\~1GB) anstelle von `2**28 - 1` (\~256MB) ([Firefox-Bug 1509542](https://bugzil.la/1509542)).
- Die {{jsxref("globalThis")}}-Eigenschaft, die immer auf das oberste globale Objekt verweist, wurde implementiert ([Firefox-Bug 1317422](https://bugzil.la/1317422)).

### APIs

#### Neue APIs

- [Readable Streams](/de/docs/Web/API/Streams_API/Using_readable_streams) wurden standardmäßig aktiviert ([Firefox-Bug 1505122](https://bugzil.la/1505122)).
- Die [Storage Access API](/de/docs/Web/API/Storage_Access_API) wurde standardmäßig aktiviert ([Firefox-Bug 1513021](https://bugzil.la/1513021)).

#### DOM

- [`Performance.toJSON()`](/de/docs/Web/API/Performance/toJSON) wurde für [Web Workers](/de/docs/Web/API/Web_Workers_API) freigegeben ([Firefox-Bug 1504958](https://bugzil.la/1504958)).
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Anfragen werfen nun einen `NetworkError`, wenn der angeforderte Inhaltstyp ein `Blob` ist und die Anfragemethode nicht `GET` ist ([Firefox-Bug 1502599](https://bugzil.la/1502599)).
- Die `-moz-`-Präfixversionen vieler [Fullscreen API](/de/docs/Web/API/Fullscreen_API)-Funktionen wurden veraltet, und es werden jetzt Deprecation-Warnungen in der JavaScript-Konsole angezeigt, wenn sie auftreten ([Firefox-Bug 1504946](https://bugzil.la/1504946)).
- [`Window.createImageBitmap()`](/de/docs/Web/API/Window/createImageBitmap) und [`WorkerGlobalScope.createImageBitmap()`](/de/docs/Web/API/WorkerGlobalScope/createImageBitmap) unterstützen jetzt SVG-Bilder ([`SVGImageElement`](/de/docs/Web/API/SVGImageElement)) als Bildquelle ([Firefox-Bug 1500768](https://bugzil.la/1500768)).

#### DOM-Ereignisse

- Zukünftig ist nur noch ein Aufruf von [`Window.open()`](/de/docs/Web/API/Window/open) pro Ereignis erlaubt ([Firefox-Bug 675574](https://bugzil.la/675574)).
- Die [`keyup`](/de/docs/Web/API/Element/keyup_event)- und [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignisse werden jetzt während der IME-Zusammensetzung ausgelöst, um die Browser-Kompatibilität für CJKT-Benutzer zu verbessern ([Firefox-Bug 354358](https://bugzil.la/354358)).

#### Web Workers

- Das Event-Objekt von [`SharedWorkerGlobalScope.connect`](/de/docs/Web/API/SharedWorkerGlobalScope/connect_event) ist eine Instanz von [`MessageEvent`](/de/docs/Web/API/MessageEvent) — seine `data`-Eigenschaft ist jetzt ein leerer String anstelle von `null` ([Firefox-Bug 1508824](https://bugzil.la/1508824)).

#### Fetch und Service Workers

- Die Methode [`Response.redirect()`](/de/docs/Web/API/Response/redirect_static) löst jetzt korrekt einen `TypeError` aus, wenn eine ungültige URL als erster Parameter angegeben wird ([Firefox-Bug 1503276](https://bugzil.la/1503276)).
- Die Methoden [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) und [`WorkerGlobalScope.importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts) (wenn sie von einem Service Worker verwendet werden) akzeptieren jetzt alle Dateien mit einem gültigen [JavaScript MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types#textjavascript) ([Firefox-Bug 1354577](https://bugzil.la/1354577)).
- Die Eigenschaften [`FetchEvent.replacesClientId`](/de/docs/Web/API/FetchEvent/replacesClientId) und [`FetchEvent.resultingClientId`](/de/docs/Web/API/FetchEvent/resultingClientId) werden jetzt unterstützt ([Firefox-Bug 1264177](https://bugzil.la/1264177)).
- Die Handler-Eigenschaften [`ServiceWorkerGlobalScope.onmessageerror`](/de/docs/Web/API/ServiceWorkerGlobalScope/messageerror_event) und [`ServiceWorkerContainer.onmessageerror`](/de/docs/Web/API/ServiceWorkerContainer/messageerror_event) wurden implementiert ([Firefox-Bug 1399446](https://bugzil.la/1399446)).
- Der {{httpheader("Origin")}}-Header wird bei Fetch-Anfragen mit Methoden von {{HTTPMethod("HEAD")}} oder {{HTTPMethod("GET")}} nicht mehr gesetzt ([Firefox-Bug 1508661](https://bugzil.la/1508661)).

#### Medien, Web Audio und WebRTC

- Das [WebRTC](/de/docs/Web/API/WebRTC_API)-Dictionary [`RTCIceCandidateStats`](/de/docs/Web/API/RTCIceCandidateStats) wurde gemäß den neuesten Spezifikationsänderungen aktualisiert ([Firefox-Bug 1324788](https://bugzil.la/1324788), [Firefox-Bug 1489040](https://bugzil.la/1489040); RTCIceCandidateStats wurde auf die neueste Spezifikation aktualisiert, um genauer zu informieren, was sich geändert hat).
- Die `pause`- und `resume`-Ereignisse des [`MediaRecorder`](/de/docs/Web/API/MediaRecorder) (und ihre entsprechenden Ereignis-Handler-Eigenschaften), die bisher nicht implementiert waren, obwohl die Kompatibilitätstabellen behaupteten, dass sie es wären, wurden jetzt implementiert ([Firefox-Bug 1458538](https://bugzil.la/1458538), [Firefox-Bug 1514016](https://bugzil.la/1514016)).

#### Canvas und WebGL

- Die [WebGL](/de/docs/Web/API/WebGL_API) [`EXT_texture_compression_bptc`](/de/docs/Web/API/EXT_texture_compression_bptc)- und [`EXT_texture_compression_rgtc`](/de/docs/Web/API/EXT_texture_compression_rgtc)-Texturkompressions-Erweiterungen wurden für WebGL1- und WebGL2-Kontexte freigegeben ([Firefox-Bug 1507263](https://bugzil.la/1507263)).

#### Entfernen

- [Mutations-Ereignisse](/de/docs/Web/API/MutationEvent) wurden in Shadow Trees deaktiviert ([Firefox-Bug 1489858](https://bugzil.la/1489858)).
- Die nicht standardmäßige [`MediaStream`](/de/docs/Web/API/MediaStream)-Eigenschaft `currentTime` wurde entfernt ([Firefox-Bug 1502927](https://bugzil.la/1502927)).
- Die `dom.webcomponents.shadowdom.enabled`- und `dom.webcomponents.customelements.enabled`-Präferenzen wurden entfernt — Shadow DOM und Custom Elements können nicht mehr in `about:config` deaktiviert werden ([Firefox-Bug 1503019](https://bugzil.la/1503019)).
- Das nicht standardmäßige DOM-`text`-Ereignis — das ausgelöst wurde, um die Editor-Benutzeroberfläche des Browsers über IME-Zusammensetzungs-String-Daten und den Auswahbereich zu informieren — wurde entfernt ([Firefox-Bug 1288640](https://bugzil.la/1288640)).
- Das [`keypress`](/de/docs/Web/API/Element/keypress_event)-Ereignis wird nicht mehr für [nicht druckbare Tasten](</de/docs/Web/API/KeyboardEvent/keyCode#non-printable_keys_(function_keys)>) ([Firefox-Bug 968056](https://bugzil.la/968056)) ausgelöst, außer für die `Enter`-Taste sowie die `Shift` + `Enter`- und `Ctrl` + `Enter`-Tastenkombinationen (diese wurden aus Kompatibilitätsgründen mit anderen Browsern beibehalten).

### Sicherheit

- Zusätzliche CORS-Einschränkungen werden nun für zulässige Anforderungsheader durchgesetzt ([Firefox-Bug 1483815](https://bugzil.la/1483815), siehe auch [whatwg fetch issue 382: CORS-safelisted request headers should be restricted according to RFC 7231](https://github.com/whatwg/fetch/issues/382) für mehr Details).

### Netzwerke

_Keine Änderungen._

### Plugins

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

#### API-Änderungen

- `WebDriver:ElementSendKeys` behandelt `<input type=file>` jetzt weniger strikt bei Interaktionsprüfungen und erlaubt diesen Elementen, versteckt zu sein, ohne mehr einen `nicht interagierbar`-Fehler zu verursachen. Falls eine strikte Interaktionsprüfung gewünscht wird, kann die Fähigkeit `strictFileInteractability` verwendet werden ([Firefox-Bug 1502864](https://bugzil.la/1502864)).

#### Fehlerkorrekturen

- Die Fenster-Manipulationsbefehle `WebDriver:FullscreenWindow`, `WebDriver:MinimizeWindow`, `WebDriver:MaximizeWindow` und `WebDriver:SetWindowRect` wurden stabiler gemacht ([Firefox-Bug 1492499](https://bugzil.la/1492499)). Das bedeutet, dass sie unter speziellen Bedingungen nicht mehr zu einem unendlichen Hängen führen, sondern nach 5 Sekunden timeouten, wenn der angeforderte Fensterzustand nicht erreicht werden kann ([Firefox-Bug 1521527](https://bugzil.la/1521527)).
- `WebDriver:ElementClick` berechnet jetzt korrekt den Mittelpunkt des zu klickenden Elements, was Interaktionen mit Dimensionen von 1x1 Pixeln erlaubt ([Firefox-Bug 1499360](https://bugzil.la/1499360)).

#### Sonstiges

- Für `unerwartet offene Alert`-Fehler werden informativere Nachrichten bereitgestellt ([Firefox-Bug 1502268](https://bugzil.la/1502268)).

### Sonstiges

- Unterstützung für {{Glossary("WebP", "WebP")}}-Bilder wurde hinzugefügt ([Firefox-Bug 1294490](https://bugzil.la/1294490)).

  - Zusätzlich wurde, um die Kompatibilität zwischen verschiedenen Browsern in bestimmten Situationen zu erleichtern, der WebP-MIME-Typ (`image/webp`) zum Standard-HTTP-Anfrage-{{httpheader("Accept")}}-Header für HTML-Dateien hinzugefügt ([Firefox-Bug 1507691](https://bugzil.la/1507691)).

- Der AV1-Codec wird jetzt standardmäßig unter Windows unterstützt ([Firefox-Bug 1452146](https://bugzil.la/1452146)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

#### Tabs

- Die {{WebExtAPIRef("tabs", "tabs API", "", "1")}} wurde erweitert, um Tab-Nachfolger zu unterstützen — ein Tab kann einen Nachfolger zugewiesen bekommen, der die ID des Tabs ist, der aktiv wird, sobald dieser geschlossen wird ([Firefox-Bug 1500479](https://bugzil.la/1500479), siehe auch [diesen Blogbeitrag](https://qiita.com/piroor/items/ea7e727735631c45a366) für mehr Informationen). Insbesondere:

  - Der {{WebExtAPIRef("tabs.Tab")}}-Typ hat jetzt eine `successorId`-Eigenschaft, die verwendet werden kann, um die ID des Nachfolgers des Tabs zu speichern/abzurufen.
  - Der Callback der {{WebExtAPIRef("tabs.onActivated")}}-Ereignislistener hat einen neuen verfügbaren Parameter, `previousTabId`, der die ID des vorher aktivierten Tabs enthält, falls dieser noch geöffnet ist.
  - Das `updateProperties`-Objekt der {{WebExtAPIRef("tabs.update()")}}-Funktion hat eine neue optionale Eigenschaft, `successorTabId`, die verwendet werden kann, um es zu aktualisieren.
  - `successorTabId` wird auch von Funktionen wie {{WebExtAPIRef("tabs.get()")}} und {{WebExtAPIRef("tabs.query()")}} zurückgegeben.
  - Die neue Funktion `tabs.moveInSuccession()` ermöglicht die Massenbearbeitung von Tab-Nachfolgern.

### Manifest-Änderungen

_Keine Änderungen._

### Sonstiges

- Die `headerURL`/`theme_frame`-Eigenschaften für [WebExtension-Themen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) werden jetzt auf Firefox für Android unterstützt ([Firefox-Bug 1429488](https://bugzil.la/1429488)).

## Siehe auch

- Hacks Release-Post: [Firefox 65: WebP support, Flexbox Inspector, new tooling & platform updates](https://hacks.mozilla.org/2019/01/firefox-65-webp-flexbox-inspector-new-tooling/)

## Ältere Versionen

{{Firefox_for_developers}}
