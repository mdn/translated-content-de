---
title: Firefox 65 Versionshinweise für Entwickler
short-title: Firefox 65
slug: Mozilla/Firefox/Releases/65
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 65, die Entwickler betreffen. Firefox 65 wurde am 29. Januar 2019 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklertools

- Der [Flexbox-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_flexbox_layouts/index.html) ist jetzt standardmäßig aktiviert.
- Im [JavaScript-Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) wurde Unterstützung für XHR-Breakpoints hinzugefügt ([Firefox-Bug 821610](https://bugzil.la/821610)).
- Klicken Sie mit der rechten Maustaste auf ein Element im Barrierefreiheitsbaum des Barrierefreiheits-Betrachters, um es im [JSON-Format auszugeben](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#print-accessibility-tree-to-json) an den JSON-Viewer.
- Die Anzeige des [Farbkontrasts](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#color-contrast) im Barrierefreiheits-Picker wurde aktualisiert, sodass bei einem komplexen Hintergrund (z. B. ein Farbverlauf oder ein komplexes Bild) ein Bereich von Farbkontrastwerten angezeigt wird.
- Der Header-Tab im [Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) zeigt nun die Referrer-Policy für die ausgewählte Anfrage an ([Firefox-Bug 1496742](https://bugzil.la/1496742)).
- Bei der Anzeige von Stack-Traces (z. B. in Konsolenprotokollen oder dem JavaScript-Debugger) werden Aufrufe von Framework-Methoden standardmäßig identifiziert und eingeklappt, um es einfacher zu machen, seinen eigenen Code zu finden.
- Ähnlich wie in nativen Terminals können Sie jetzt die Rückwärtssuche verwenden, um Einträge in Ihrem JavaScript-Konsolenverlauf zu finden (`F9` unter Windows/Linux oder `Ctrl` + `R` auf macOS, dann tippen Sie einen Suchbegriff ein, gefolgt von `Ctrl` + `R`/`Ctrl` + `S`, um durch die Ergebnisse zu schalten).
- Das `$0`-Kurzzeichen der JavaScript-Konsole (verweist auf das derzeit untersuchte Element auf der Seite) hat nun die Autovervollständigung verfügbar, sodass Sie beispielsweise `$0.te` eingeben können, um Autovervollständigungsvorschläge für Eigenschaften wie `$0.textContent` zu erhalten.
- Die Bearbeitungen, die Sie in der Regel-Ansicht des Inspektors vornehmen, werden jetzt im Änderungen-Panel aufgelistet ([Firefox-Bug 1503920](https://bugzil.la/1503920)).

### HTML

- Ereignisse werden nun auf deaktivierten HTML-Elementen ausgelöst, d.h. {{htmlelement("button")}}, {{htmlelement("fieldset")}}, {{htmlelement("input")}}, {{htmlelement("select")}} und {{htmlelement("textarea")}} Elementen mit gesetzten `disabled`-Attributen ([Firefox-Bug 329509](https://bugzil.la/329509)).
- Das Entfernen des `src`-Attributs eines {{htmlelement("iframe")}}-Elements führt nun dazu, dass `about:blank` geladen wird, wodurch eine Gleichwertigkeit mit Chrome und Safari hergestellt wird ([Firefox-Bug 1507842](https://bugzil.la/1507842)). Vorher hatte das Entfernen von `src` keinen Einfluss auf den `iframe`-Inhalt.
- Wir haben Unterstützung für das [`referrerpolicy`](/de/docs/Web/HTML/Reference/Elements/script#referrerpolicy)-Attribut für {{htmlelement("script")}}-Elemente hinzugefügt ([Firefox-Bug 1460920](https://bugzil.la/1460920)).

### CSS

- Der `crisp-edges`-Wert der {{cssxref("image-rendering")}}-Eigenschaft ist jetzt unpräfixiert ([Firefox-Bug 1496617](https://bugzil.la/1496617)).
- Ein {{cssxref("scrollbar-color")}}-Wert von `auto` wird jetzt zu `auto` aufgelöst, anstatt zwei Farben ([Firefox-Bug 1501418](https://bugzil.la/1501418)).
- Die `break-*`-Eigenschaften wurden implementiert, und die veralteten `page-break-*`-Eigenschaften wurden ihnen zugewiesen ([Firefox-Bug 775618](https://bugzil.la/775618)):
  - {{cssxref("break-before")}} ist jetzt ein Alias für {{cssxref("page-break-before")}}.
  - {{cssxref("break-after")}} ist jetzt ein Alias für {{cssxref("page-break-after")}}.
  - {{cssxref("break-inside")}} ist jetzt ein Alias für {{cssxref("page-break-inside")}}.

- Der `anywhere`-Wert der {{cssxref("overflow-wrap")}}-Eigenschaft wurde implementiert ([Firefox-Bug 1505786](https://bugzil.la/1505786)).
- Die neuen Schrittpositions-Keywords `jump-start`, `jump-end`, `jump-none` und `jump-both` — verwendbar innerhalb der [`steps()` Timing-Funktion](/de/docs/Web/CSS/Reference/Values/easing-function/steps) — wurden implementiert ([Firefox-Bug 1496619](https://bugzil.la/1496619)). Dies fällt auch mit der Entfernung der `frames()`-Timing-Funktion zusammen, die der vorherige Weg war, diese Funktionalität zu implementieren, jetzt veraltet.
- Einige neue {{cssxref("appearance", "-webkit-appearance")}}-Werte wurden hinzugefügt, um die Kompatibilität mit anderen Browsern zu gewährleisten. Insbesondere:
  - `meter`, das jetzt als Standardwert für {{htmlelement("meter")}}-Elemente in UA-Stylesheets verwendet wird. Der bestehende Wert `meterbar` ist jetzt ein Alias für `meter` ([Firefox-Bug 1501483](https://bugzil.la/1501483)).
  - `progress-bar`, das jetzt als Standardwert für {{htmlelement("progress")}}-Elemente in UA-Stylesheets verwendet wird. Der bestehende Wert `progressbar` ist jetzt ein Alias für `progress-bar` ([Firefox-Bug 1501506](https://bugzil.la/1501506)).
  - `textarea`, das jetzt als Standardwert für {{htmlelement("textarea")}}-Elemente in UA-Stylesheets verwendet wird. Der bestehende Wert `textfield-multiline` ist jetzt ein Alias für `textarea` ([Firefox-Bug 1507905](https://bugzil.la/1507905)).

- Das Verhalten von {{cssxref("user-select")}} wurde geändert, um es mehr an andere Browser anzupassen ([Firefox-Bug 1506547](https://bugzil.la/1506547)). Genauer gesagt:
  - `user-select: all` auf einem Element überschreibt nicht mehr andere `user-select`-Werte, die auf Kinder dieses Elements gesetzt sind. Zum Beispiel im folgenden Snippet:

    ```html
    <div style="-webkit-user-select: all">
      All
      <div style="-webkit-user-select: none">None</div>
    </div>
    ```

    Das `<div>` mit `none` darauf ist jetzt nicht auswählbar. Früher wäre dieser Wert durch den auf das übergeordnete Element gesetzten `all`-Wert überschrieben worden.

  - Nicht-`contenteditable`-Elemente, die innerhalb von `contenteditable`-Elementen verschachtelt sind, sind jetzt auswählbar.
  - `user-select` verhält sich jetzt konsistent innerhalb und außerhalb von Shadow DOM.
  - Der proprietäre `-moz-text`-Wert wurde entfernt.

- CSS-Umgebungsvariablen (die {{cssxref("env", "env()")}}-Funktion) wurden implementiert ([Firefox-Bug 1462233](https://bugzil.la/1462233)).

#### Entfernungen

- Die Einstellung `layout.css.shape-outside.enabled` wurde entfernt; {{cssxref("shape-outside")}}, {{cssxref("shape-margin")}}, und {{cssxref("shape-image-threshold")}} können in `about:config` nicht mehr deaktiviert werden ([Firefox-Bug 1504387](https://bugzil.la/1504387)).
- Mehrere nur in Firefox vorhandene Werte der {{cssxref("user-select")}}-Eigenschaft wurden entfernt — `-moz-all`, `-moz-text`, `tri-state`, `element`, `elements`, und `toggle`. Siehe [Firefox-Bug 1492958](https://bugzil.la/1492958) und [Firefox-Bug 1506547](https://bugzil.la/1506547).
- Wie oben erwähnt, wurde die `frames()`-Timing-Funktion entfernt ([Firefox-Bug 1496619](https://bugzil.la/1496619)).

### SVG

_Keine Änderungen._

### JavaScript

- {{jsxref("Intl/RelativeTimeFormat", "Intl.RelativeTimeFormat")}} wird jetzt unterstützt ([Firefox-Bug 1504334](https://bugzil.la/1504334)).
- Strings haben jetzt eine maximale {{jsxref("String/length","length","", 1)}} von `2**30 - 2` (\~1GB) anstatt `2**28 - 1` (\~256MB) ([Firefox-Bug 1509542](https://bugzil.la/1509542)).
- Die {{jsxref("globalThis")}}-Eigenschaft, die immer auf das globale Top-Level-Objekt verweist, wurde implementiert ([Firefox-Bug 1317422](https://bugzil.la/1317422)).

### APIs

#### Neue APIs

- [Readable Streams](/de/docs/Web/API/Streams_API/Using_readable_streams) wurden standardmäßig aktiviert ([Firefox-Bug 1505122](https://bugzil.la/1505122)).
- Die [Storage Access API](/de/docs/Web/API/Storage_Access_API) wurde standardmäßig aktiviert ([Firefox-Bug 1513021](https://bugzil.la/1513021)).

#### DOM

- [`Performance.toJSON()`](/de/docs/Web/API/Performance/toJSON) wurde auf [Web Workers](/de/docs/Web/API/Web_Workers_API) zugänglich gemacht ([Firefox-Bug 1504958](https://bugzil.la/1504958)).
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Anfragen werfen jetzt einen `NetworkError`, wenn der angeforderte Inhaltstyp ein `Blob` ist und die Anfragemethode nicht `GET` ist ([Firefox-Bug 1502599](https://bugzil.la/1502599)).
- Die `-moz-`-präfixierten Versionen vieler der [Fullscreen-API](/de/docs/Web/API/Fullscreen_API)-Funktionen wurden veraltet und zeigen jetzt Deprecation-Warnungen in der JavaScript-Konsole an, wenn sie aufgerufen werden ([Firefox-Bug 1504946](https://bugzil.la/1504946)).
- [`Window.createImageBitmap()`](/de/docs/Web/API/Window/createImageBitmap) und [`WorkerGlobalScope.createImageBitmap()`](/de/docs/Web/API/WorkerGlobalScope/createImageBitmap) unterstützen jetzt SVG-Bilder ([`SVGImageElement`](/de/docs/Web/API/SVGImageElement)) als Bildquelle ([Firefox-Bug 1500768](https://bugzil.la/1500768)).

#### DOM-Ereignisse

- Künftig ist nur noch ein [`Window.open()`](/de/docs/Web/API/Window/open)-Aufruf pro Ereignis erlaubt ([Firefox-Bug 675574](https://bugzil.la/675574)).
- Die [`keyup`](/de/docs/Web/API/Element/keyup_event) und [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignisse werden jetzt während der IME-Zusammensetzung ausgelöst, um die Browser-Kompatibilität für CJKT-Nutzer zu verbessern ([Firefox-Bug 354358](https://bugzil.la/354358).

#### Web Workers

- Das Event-Objekt von [`SharedWorkerGlobalScope.connect`](/de/docs/Web/API/SharedWorkerGlobalScope/connect_event) ist eine Instanz von [`MessageEvent`](/de/docs/Web/API/MessageEvent) — seine `data`-Eigenschaft ist jetzt ein leerer String-Wert anstelle von `null` ([Firefox-Bug 1508824](https://bugzil.la/1508824)).

#### Fetch und Service Worker

- Die [`Response.redirect()`](/de/docs/Web/API/Response/redirect_static)-Methode wirft jetzt korrekt einen `TypeError`, wenn eine ungültige URL als erster Parameter angegeben wird ([Firefox-Bug 1503276](https://bugzil.la/1503276)).
- Die Methoden [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) und [`WorkerGlobalScope.importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts) (wenn von einem Service Worker verwendet) akzeptieren jetzt alle Dateien mit einem gültigen [JavaScript-MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types#textjavascript) ([Firefox-Bug 1354577](https://bugzil.la/1354577)).
- Die Eigenschaften [`FetchEvent.replacesClientId`](/de/docs/Web/API/FetchEvent/replacesClientId) und [`FetchEvent.resultingClientId`](/de/docs/Web/API/FetchEvent/resultingClientId) werden jetzt unterstützt ([Firefox-Bug 1264177](https://bugzil.la/1264177)).
- Die Handler-Eigenschaften [`ServiceWorkerGlobalScope.onmessageerror`](/de/docs/Web/API/ServiceWorkerGlobalScope/messageerror_event) und [`ServiceWorkerContainer.onmessageerror`](/de/docs/Web/API/ServiceWorkerContainer/messageerror_event) wurden implementiert ([Firefox-Bug 1399446](https://bugzil.la/1399446)).
- Der {{httpheader("Origin")}}-Header wird nicht mehr bei Fetch-Anfragen mit einer Methode von {{HTTPMethod("HEAD")}} oder {{HTTPMethod("GET")}} gesetzt ([Firefox-Bug 1508661](https://bugzil.la/1508661)).

#### Medien, Web Audio und WebRTC

- Der [WebRTC](/de/docs/Web/API/WebRTC_API)-[`RTCIceCandidateStats`](/de/docs/Web/API/RTCIceCandidateStats)-Dictionary wurde entsprechend den neuesten Spezifikationsänderungen aktualisiert ([Firefox-Bug 1324788](https://bugzil.la/1324788), [Firefox-Bug 1489040](https://bugzil.la/1489040); RTCIceCandidateStats wurde auf den neuesten Stand der Spezifikation gebracht, um detailliertere Informationen darüber zu erhalten, was genau geändert wurde).
- Die `pause`- und `resume`-Ereignisse des [`MediaRecorder`](/de/docs/Web/API/MediaRecorder) (und die entsprechenden Event-Handler-Eigenschaften) waren zuvor nicht implementiert, obwohl die Kompatibilitätstabellen behaupteten, sie seien es gewesen. Sie wurden jetzt implementiert ([Firefox-Bug 1458538](https://bugzil.la/1458538), [Firefox-Bug 1514016](https://bugzil.la/1514016)).

#### Canvas und WebGL

- Die [WebGL](/de/docs/Web/API/WebGL_API)-[`EXT_texture_compression_bptc`](/de/docs/Web/API/EXT_texture_compression_bptc) und [`EXT_texture_compression_rgtc`](/de/docs/Web/API/EXT_texture_compression_rgtc)-Texturkompressionserweiterungen wurden für WebGL1- und WebGL2-Kontexte zugänglich gemacht ([Firefox-Bug 1507263](https://bugzil.la/1507263)).

#### Entfernungen

- [Mutation Events](/de/docs/Web/API/MutationEvent) wurden in Schattenbäumen deaktiviert ([Firefox-Bug 1489858](https://bugzil.la/1489858)).
- Die nicht standardmäßige [`MediaStream`](/de/docs/Web/API/MediaStream)-Eigenschaft `currentTime` wurde entfernt ([Firefox-Bug 1502927](https://bugzil.la/1502927)).
- Die Einstellungen `dom.webcomponents.shadowdom.enabled` und `dom.webcomponents.customelements.enabled` wurden entfernt — Schatten-DOM und benutzerdefinierte Elemente können in `about:config` nicht mehr deaktiviert werden ([Firefox-Bug 1503019](https://bugzil.la/1503019)).
- Das nicht standardmäßige DOM-`text`-Ereignis — ausgelöst, um die Browser-Editor-Oberfläche über IME-Zusammensetzungs-Stringdaten und den Auswahlbereich zu informieren — wurde entfernt ([Firefox-Bug 1288640](https://bugzil.la/1288640)).
- Das [`keypress`](/de/docs/Web/API/Element/keypress_event)-Ereignis wird für [nicht druckbare Tasten](/de/docs/Web/API/KeyboardEvent/keyCode#non-printable_keys_function_keys) ([Firefox-Bug 968056](https://bugzil.la/968056)) nicht mehr ausgelöst, außer für die `Eingabetaste` und die Tastenkombinationen `Shift` + `Eingabetaste` sowie `Ctrl` + `Eingabetaste` (diese wurden aus Gründen der plattformübergreifenden Kompatibilität beibehalten).

### Sicherheit

- Zusätzliche CORS-Einschränkungen werden jetzt für zulässige Anfrage-Header durchgesetzt ([Firefox-Bug 1483815](https://bugzil.la/1483815), siehe auch [whatwg fetch issue 382: CORS-safelisted request headers should be restricted according to RFC 7231](https://github.com/whatwg/fetch/issues/382) für weitere Details).

### Netzwerk

_Keine Änderungen._

### Plugins

_Keine Änderungen._

### WebDriver-Übereinstimmung (Marionette)

#### API-Änderungen

- `WebDriver:ElementSendKeys` behandelt `<input type=file>` entspannter bezüglich der Interaktivitätsprüfungen und erlaubt es diesen Elementen, verborgen zu sein, ohne mehr einen `not interactable`-Fehler zu verursachen. Wenn eine strikte Interaktivitätsprüfung gewünscht ist, kann die Fähigkeit `strictFileInteractability` verwendet werden ([Firefox-Bug 1502864](https://bugzil.la/1502864)).

#### Bugfixes

- Die Fenster-Manipulationsbefehle `WebDriver:FullscreenWindow`, `WebDriver:MinimizeWindow`, `WebDriver:MaximizeWindow` und `WebDriver:SetWindowRect` wurden stabiler gemacht ([Firefox-Bug 1492499](https://bugzil.la/1492499)). Dies bedeutet, dass sie unter besonderen Bedingungen nicht mehr zu einem endlosen Hängen führen, sondern stattdessen nach 5 Sekunden auslaufen, wenn der angeforderte Fensterzustand nicht erreicht werden kann ([Firefox-Bug 1521527](https://bugzil.la/1521527)).
- `WebDriver:ElementClick` berechnet jetzt korrekt den Mittelpunkt des Elements, auf das geklickt werden soll, was Interaktionen mit Dimensionen von 1x1 Pixel ermöglicht ([Firefox-Bug 1499360](https://bugzil.la/1499360)).

#### Sonstiges

- Für `unexpected alert open`-Fehler werden informativere Meldungen bereitgestellt ([Firefox-Bug 1502268](https://bugzil.la/1502268)).

### Sonstiges

- Unterstützung für {{Glossary("WebP", "WebP")}}-Bilder wurde hinzugefügt ([Firefox-Bug 1294490](https://bugzil.la/1294490)).
  - Zusätzlich wurde der WebP-MIME-Typ (`image/webp`) in der Standard-HTTP-Anfrage-{{httpheader("Accept")}}-Header für HTML-Dateien hinzugefügt, um die plattformübergreifende Kompatibilität in bestimmten Situationen zu erleichtern ([Firefox-Bug 1507691](https://bugzil.la/1507691)).

- Der AV1-Codec wird jetzt standardmäßig unter Windows unterstützt ([Firefox-Bug 1452146](https://bugzil.la/1452146)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

#### Tabs

- Die {{WebExtAPIRef("tabs", "tabs API", "", "1")}} wurde um Tab-Nachfolger erweitert — ein Tab kann einen Nachfolger zugewiesen bekommen, der die ID des Tabs ist, der aktiv wird, sobald er geschlossen wird ([Firefox-Bug 1500479](https://bugzil.la/1500479), siehe auch [diesen Blogbeitrag](https://qiita.com/piroor/items/ea7e727735631c45a366) für weitere Informationen). Insbesondere:
  - Der {{WebExtAPIRef("tabs.Tab")}}-Typ hat jetzt eine `successorId`-Eigenschaft, die verwendet werden kann, um die ID des Tab-Nachfolgers zu speichern oder abzurufen.
  - Der Rückruf des Ereignis-Listeners {{WebExtAPIRef("tabs.onActivated")}} hat einen neuen verfügbaren Parameter, `previousTabId`, der die ID des zuvor aktivierten Tabs enthält, wenn er noch geöffnet ist.
  - Das `updateProperties`-Objekt der Funktion {{WebExtAPIRef("tabs.update()")}} hat eine neue optionale Eigenschaft `successorTabId`, die verwendet werden kann, um es zu aktualisieren.
  - `successorTabId` wird auch von Funktionen wie {{WebExtAPIRef("tabs.get()")}} und {{WebExtAPIRef("tabs.query()")}} zurückgegeben.
  - Die neue Funktion `tabs.moveInSuccession()` ermöglicht die Manipulation von Tab-Nachfolgern in Massen.

### Manifest-Änderungen

_Keine Änderungen._

### Sonstiges

- Die Eigenschaften `headerURL`/`theme_frame` für [WebExtension-Themen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) werden jetzt auf Firefox für Android unterstützt ([Firefox-Bug 1429488](https://bugzil.la/1429488)).

## Siehe auch

- Hacks-Release-Post: [Firefox 65: WebP support, Flexbox Inspector, new tooling & platform updates](https://hacks.mozilla.org/2019/01/firefox-65-webp-flexbox-inspector-new-tooling/)
