---
title: Firefox 65 für Entwickler
slug: Mozilla/Firefox/Releases/65
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 65, die Entwickler betreffen. Firefox 65 wurde am 29. Januar 2019 veröffentlicht.

## Änderungen für Web-Entwickler

### Entwicklerwerkzeuge

- Der [Flexbox-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_flexbox_layouts/index.html) ist jetzt standardmäßig aktiviert.
- Unterstützung wurde zum [JavaScript-Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) für XHR-Unterbrechungspunkte hinzugefügt ([Firefox-Bug 821610](https://bugzil.la/821610)).
- Rechtsklicken Sie auf ein Element im Zugänglichkeit-Baum des Accessibility Viewers, um es als [JSON auszugeben](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#print-accessibility-tree-to-json) im JSON-Viewer.
- Die Anzeige des [Farbkontrasts](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#color-contrast) im Accessibility Picker wurde aktualisiert. Wenn der Hintergrund eines Textes komplex ist (z.B. ein Verlauf oder ein komplexes Bild), zeigt er eine Reihe von Farbkontrastwerten.
- Die Kopfzeilen-Registerkarte des [Netzwerkmonitors](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) zeigt nun die Referrer-Richtlinie für die ausgewählte Anfrage an ([Firefox-Bug 1496742](https://bugzil.la/1496742)).
- Beim Anzeigen von Stapelspuren (z.B. in Konsolenprotokollen oder dem JavaScript-Debugger) werden Aufrufe von Framework-Methoden standardmäßig identifiziert und zusammengeklappt, was es einfacher macht, sich auf Ihren Code zu konzentrieren.
- Ähnlich wie bei nativen Terminals können Sie jetzt eine umgekehrte Suche verwenden, um Einträge in Ihrem JavaScript-Konsolenverlauf zu finden (`F9` auf Windows/Linux oder `Ctrl` + `R` auf macOS, dann einen Suchbegriff eingeben, gefolgt von `Ctrl` + `R`/`Ctrl` + `S`, um durch die Ergebnisse zu blättern).
- Die `$0`-Verknüpfung der JavaScript-Konsole (bezieht sich auf das aktuell untersuchte Element auf der Seite) bietet jetzt Autovervollständigung, sodass Sie beispielsweise `$0.te` eingeben können, um Vorschläge für Eigenschaften wie `$0.textContent` zu erhalten.
- Die Bearbeitungen, die Sie in der Regelansicht des Inspektors vornehmen, sind jetzt im Änderungsprotokoll aufgelistet ([Firefox-Bug 1503920](https://bugzil.la/1503920)).

### HTML

- Ereignisse werden nun auf deaktivierten HTML-Elementen ausgelöst, d.h. {{htmlelement("button")}}, {{htmlelement("fieldset")}}, {{htmlelement("input")}}, {{htmlelement("select")}}, und {{htmlelement("textarea")}} Elemente, die das Attribut `disabled` gesetzt haben ([Firefox-Bug 329509](https://bugzil.la/329509)).
- Das Entfernen des `src`-Attributs eines {{htmlelement("iframe")}}-Elements bewirkt nun, dass `about:blank` darin geladen wird, was es mit Chrome und Safari in Einklang bringt ([Firefox-Bug 1507842](https://bugzil.la/1507842)). Früher hatte das Entfernen von `src` keine Auswirkung auf den Inhalt des `iframe`.
- Wir haben Unterstützung für das [`referrerpolicy`](/de/docs/Web/HTML/Reference/Elements/script#referrerpolicy)-Attribut auf {{htmlelement("script")}}-Elementen hinzugefügt ([Firefox-Bug 1460920](https://bugzil.la/1460920)).

### CSS

- Der `crisp-edges`-Wert der {{cssxref("image-rendering")}}-Eigenschaft wurde jetzt ohne Präfix implementiert ([Firefox-Bug 1496617](https://bugzil.la/1496617)).
- Ein {{cssxref("scrollbar-color")}}-Wert von `auto` löst sich jetzt zu `auto` auf, anstatt zu zwei Farben ([Firefox-Bug 1501418](https://bugzil.la/1501418)).
- Die `break-*`-Eigenschaften wurden implementiert, und die alten `page-break-*`-Eigenschaften wurden darauf verlinkt ([Firefox-Bug 775618](https://bugzil.la/775618)):
  - {{cssxref("break-before")}} ist jetzt ein Alias für {{cssxref("page-break-before")}}.
  - {{cssxref("break-after")}} ist jetzt ein Alias für {{cssxref("page-break-after")}}.
  - {{cssxref("break-inside")}} ist jetzt ein Alias für {{cssxref("page-break-inside")}}.

- Der `anywhere`-Wert der {{cssxref("overflow-wrap")}}-Eigenschaft wurde implementiert ([Firefox-Bug 1505786](https://bugzil.la/1505786)).
- Die neuen Schrittpunkte `jump-start`, `jump-end`, `jump-none` und `jump-both` — die in der [`steps()`-Timingfunktion](/de/docs/Web/CSS/easing-function/steps) verwendet werden können — wurden implementiert ([Firefox-Bug 1496619](https://bugzil.la/1496619)). Dies fällt auch mit der Entfernung der `frames()`-Timingfunktion zusammen, die der bisherige Weg war, eine solche Funktionalität zu implementieren, die nun veraltet ist.
- Einige neue {{cssxref("appearance", "-webkit-appearance")}}-Werte wurden hinzugefügt, um die Kompatibilität mit anderen Browsern zu gewährleisten. Insbesondere:
  - `meter`, das jetzt als Standardwert für {{htmlelement("meter")}}-Elemente in Benutzeragenten-Stylesheets verwendet wird. Der bestehende Wert `meterbar` ist jetzt ein Alias für `meter` ([Firefox-Bug 1501483](https://bugzil.la/1501483)).
  - `progress-bar`, das jetzt als Standardwert für {{htmlelement("progress")}}-Elemente in Benutzeragenten-Stylesheets verwendet wird. Der bestehende Wert `progressbar` ist jetzt ein Alias für `progress-bar` ([Firefox-Bug 1501506](https://bugzil.la/1501506)).
  - `textarea`, das jetzt als Standardwert für {{htmlelement("textarea")}}-Elemente in Benutzeragenten-Stylesheets verwendet wird. Der bestehende Wert `textfield-multiline` ist jetzt ein Alias für `textarea` ([Firefox-Bug 1507905](https://bugzil.la/1507905)).

- Das Verhalten von {{cssxref("user-select")}} wurde geändert, um es mehr an andere Browser anzugleichen ([Firefox-Bug 1506547](https://bugzil.la/1506547)). Insbesondere:
  - `user-select: all` auf einem Element überschreibt nicht mehr andere Werte von `user-select`, die auf Kinder dieses Elements gesetzt sind. Zum Beispiel im folgenden Snippet:

    ```html
    <div style="-webkit-user-select: all">
      All
      <div style="-webkit-user-select: none">None</div>
    </div>
    ```

    Der `<div>` mit `none` darauf gesetzt, ist jetzt nicht mehr auswählbar. Früher wäre dieser Wert durch den `all`-Wert auf dem Elternelement überschrieben worden.

  - nicht-`contenteditable`-Elemente, die in `contenteditable`-Elementen verschachtelt sind, können jetzt ausgewählt werden.
  - `user-select` verhält sich jetzt konsistent innerhalb und außerhalb des Shadow DOM.
  - Der proprietäre `-moz-text`-Wert wurde entfernt.

- CSS-Umgebungsvariablen (die {{cssxref("env", "env()")}} Funktion) wurden implementiert ([Firefox-Bug 1462233](https://bugzil.la/1462233)).

#### Entfernungen

- Die `layout.css.shape-outside.enabled`-Voreinstellung wurde entfernt; {{cssxref("shape-outside")}}, {{cssxref("shape-margin")}} und {{cssxref("shape-image-threshold")}} können in `about:config` nicht mehr deaktiviert werden ([Firefox-Bug 1504387](https://bugzil.la/1504387)).
- Mehrere Firefox-spezifische Werte der {{cssxref("user-select")}}-Eigenschaft wurden entfernt — `-moz-all`, `-moz-text`, `tri-state`, `element`, `elements` und `toggle`. Siehe [Firefox-Bug 1492958](https://bugzil.la/1492958) und [Firefox-Bug 1506547](https://bugzil.la/1506547).
- Wie bereits erwähnt, wurde die `frames()`-Timingfunktion entfernt ([Firefox-Bug 1496619](https://bugzil.la/1496619)).

### SVG

_Keine Änderungen._

### JavaScript

- {{jsxref("Intl/RelativeTimeFormat", "Intl.RelativeTimeFormat")}} wird jetzt unterstützt ([Firefox-Bug 1504334](https://bugzil.la/1504334)).
- Zeichenfolgen haben jetzt eine maximale {{jsxref("String/length","length","", 1)}} von `2**30 - 2` (\~1GB) anstelle von `2**28 - 1` (\~256MB) ([Firefox-Bug 1509542](https://bugzil.la/1509542)).
- Die {{jsxref("globalThis")}}-Eigenschaft, die immer auf das oberste globale Objekt verweist, wurde implementiert ([Firefox-Bug 1317422](https://bugzil.la/1317422)).

### APIs

#### Neue APIs

- [Readable Streams](/de/docs/Web/API/Streams_API/Using_readable_streams) sind standardmäßig aktiviert ([Firefox-Bug 1505122](https://bugzil.la/1505122)).
- Die [Storage Access API](/de/docs/Web/API/Storage_Access_API) ist standardmäßig aktiviert ([Firefox-Bug 1513021](https://bugzil.la/1513021)).

#### DOM

- [`Performance.toJSON()`](/de/docs/Web/API/Performance/toJSON) ist jetzt für [Web Workers](/de/docs/Web/API/Web_Workers_API) verfügbar ([Firefox-Bug 1504958](https://bugzil.la/1504958)).
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Anfragen werfen nun einen `NetworkError`, wenn der angeforderte Inhaltstyp ein `Blob` ist und die Anfragemethode nicht `GET` ist ([Firefox-Bug 1502599](https://bugzil.la/1502599)).
- Die `-moz-`-präfixierten Versionen vieler Funktionen der [Fullscreen API](/de/docs/Web/API/Fullscreen_API) wurden veraltet, und zeigen nun Veraltungswarnungen in der JavaScript-Konsole, wenn sie begegnet werden ([Firefox-Bug 1504946](https://bugzil.la/1504946)).
- [`Window.createImageBitmap()`](/de/docs/Web/API/Window/createImageBitmap) und [`WorkerGlobalScope.createImageBitmap()`](/de/docs/Web/API/WorkerGlobalScope/createImageBitmap) unterstützen jetzt SVG-Bilder ([`SVGImageElement`](/de/docs/Web/API/SVGImageElement)) als Bildquelle ([Firefox-Bug 1500768](https://bugzil.la/1500768)).

#### DOM-Ereignisse

- Von nun an ist nur noch ein [`Window.open()`](/de/docs/Web/API/Window/open)-Aufruf pro Ereignis erlaubt ([Firefox-Bug 675574](https://bugzil.la/675574)).
- Die [`keyup`](/de/docs/Web/API/Element/keyup_event) und [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignisse werden jetzt während der IME-Zusammensetzung ausgelöst, um die Kompatibilität mit CJKT-Benutzern in verschiedenen Browsern zu verbessern ([Firefox-Bug 354358](https://bugzil.la/354358)).

#### Web Worker

- Das Event-Objekt von [`SharedWorkerGlobalScope.connect`](/de/docs/Web/API/SharedWorkerGlobalScope/connect_event) ist eine Instanz von [`MessageEvent`](/de/docs/Web/API/MessageEvent) — seine `data`-Eigenschaft ist jetzt ein leerer String-Wert anstelle von `null` ([Firefox-Bug 1508824](https://bugzil.la/1508824)).

#### Fetch und Service Worker

- Die Methode [`Response.redirect()`](/de/docs/Web/API/Response/redirect_static) wirft jetzt korrekt einen `TypeError`, wenn eine ungültige URL als erster Parameter angegeben wird ([Firefox-Bug 1503276](https://bugzil.la/1503276)).
- Die Methoden [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) und [`WorkerGlobalScope.importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts) (wenn sie von einem Service Worker verwendet werden) akzeptieren nun alle Dateien mit einem gültigen [JavaScript-MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types#textjavascript) ([Firefox-Bug 1354577](https://bugzil.la/1354577)).
- Die Eigenschaften [`FetchEvent.replacesClientId`](/de/docs/Web/API/FetchEvent/replacesClientId) und [`FetchEvent.resultingClientId`](/de/docs/Web/API/FetchEvent/resultingClientId) werden jetzt unterstützt ([Firefox-Bug 1264177](https://bugzil.la/1264177)).
- Die Handler-Eigenschaften [`ServiceWorkerGlobalScope.onmessageerror`](/de/docs/Web/API/ServiceWorkerGlobalScope/messageerror_event) und [`ServiceWorkerContainer.onmessageerror`](/de/docs/Web/API/ServiceWorkerContainer/messageerror_event) wurden implementiert ([Firefox-Bug 1399446](https://bugzil.la/1399446)).
- Der {{httpheader("Origin")}}-Header wird bei Fetch-Anfragen mit einer Methode von {{HTTPMethod("HEAD")}} oder {{HTTPMethod("GET")}} nicht mehr gesetzt ([Firefox-Bug 1508661](https://bugzil.la/1508661)).

#### Medien, Web Audio und WebRTC

- Das [WebRTC](/de/docs/Web/API/WebRTC_API)-Wörterbuch [`RTCIceCandidateStats`](/de/docs/Web/API/RTCIceCandidateStats) wurde gemäß den neuesten Spezifikationsänderungen aktualisiert ([Firefox-Bug 1324788](https://bugzil.la/1324788), [Firefox-Bug 1489040](https://bugzil.la/1489040); RTCIceCandidateStats wurde auf die neueste Spezifikation aktualisiert, um mehr Details zu den Änderungen zu enthalten).
- Die `pause`- und `resume`-Ereignisse (und ihre entsprechenden Event-Handler-Eigenschaften) des [`MediaRecorders`](/de/docs/Web/API/MediaRecorder) waren zuvor nicht implementiert, obwohl Kompatibilitätstabellen behaupteten, sie seien es gewesen. Jetzt sind sie implementiert ([Firefox-Bug 1458538](https://bugzil.la/1458538), [Firefox-Bug 1514016](https://bugzil.la/1514016)).

#### Canvas und WebGL

- Die [WebGL](/de/docs/Web/API/WebGL_API)-Texturkompressionserweiterungen [`EXT_texture_compression_bptc`](/de/docs/Web/API/EXT_texture_compression_bptc) und [`EXT_texture_compression_rgtc`](/de/docs/Web/API/EXT_texture_compression_rgtc) wurden für WebGL1 und WebGL2-Kontexte verfügbar gemacht ([Firefox-Bug 1507263](https://bugzil.la/1507263)).

#### Entfernungen

- [Mutation events](/de/docs/Web/API/MutationEvent) wurden in Shadow Trees deaktiviert ([Firefox-Bug 1489858](https://bugzil.la/1489858)).
- Die nicht standardisierte [`MediaStream`](/de/docs/Web/API/MediaStream)-Eigenschaft `currentTime` wurde entfernt ([Firefox-Bug 1502927](https://bugzil.la/1502927)).
- Die `dom.webcomponents.shadowdom.enabled` und `dom.webcomponents.customelements.enabled` Voreinstellungen wurden entfernt — Shadow DOM und Custom Elements können in `about:config` nicht mehr deaktiviert werden ([Firefox-Bug 1503019](https://bugzil.la/1503019)).
- Das nicht standardisierte `text`-DOM-Ereignis — ausgelöst, um die Browsereditor-Oberfläche über IME-Zusammensetzungszeichenfolgendaten und Auswahlbereiche zu benachrichtigen — wurde entfernt ([Firefox-Bug 1288640](https://bugzil.la/1288640)).
- Das [`keypress`](/de/docs/Web/API/Element/keypress_event)-Ereignis wird nicht mehr für [nicht druckbare Tasten](</de/docs/Web/API/KeyboardEvent/keyCode#non-printable_keys_(function_keys)>) ausgelöst ([Firefox-Bug 968056](https://bugzil.la/968056)), außer für die `Enter`-Taste und die Tastenkombinationen `Shift` + `Enter` und `Ctrl` + `Enter` (diese wurden aus Gründen der Kompatibilität zwischen verschiedenen Browsern beibehalten).

### Sicherheit

- Zusätzliche CORS-Einschränkungen werden jetzt auf zulässige Anfrage-Header angewendet ([Firefox-Bug 1483815](https://bugzil.la/1483815), siehe auch [whatwg fetch issue 382: CORS-safelisted request headers should be restricted according to RFC 7231](https://github.com/whatwg/fetch/issues/382) für mehr Details).

### Netzwerk

_Keine Änderungen._

### Plugins

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

#### API-Änderungen

- `WebDriver:ElementSendKeys` behandelt `<input type=file>` jetzt weniger streng bei Interaktivitätsprüfungen, und erlaubt, dass diese Elemente versteckt sein können, ohne mehr einen `nicht interaktiv`-Fehler auszulösen. Wenn eine strenge Interaktivitätsprüfung gewünscht ist, kann die Fähigkeit `strictFileInteractability` verwendet werden ([Firefox-Bug 1502864](https://bugzil.la/1502864)).

#### Fehlerbehebungen

- Die Fenster-Manipulationsbefehle `WebDriver:FullscreenWindow`, `WebDriver:MinimizeWindow`, `WebDriver:MaximizeWindow` und `WebDriver:SetWindowRect` wurden stabiler gemacht ([Firefox-Bug 1492499](https://bugzil.la/1492499)). Das bedeutet, dass sie unter bestimmten Bedingungen nicht mehr zu einem unendlichen Hängen führen, sondern stattdessen nach 5 Sekunden eine Zeitüberschreitung verursachen, wenn der angeforderte Fensterstatus nicht erreicht werden kann ([Firefox-Bug 1521527](https://bugzil.la/1521527)).
- `WebDriver:ElementClick` berechnet jetzt korrekt den Mittelpunkt des zu klickenden Elements, was Interaktionen mit Dimensionen von 1x1 Pixeln ermöglicht ([Firefox-Bug 1499360](https://bugzil.la/1499360)).

#### Andere

- Für `unerwartete Alert öffnen`-Fehler werden informativere Meldungen bereitgestellt ([Firefox-Bug 1502268](https://bugzil.la/1502268)).

### Sonstiges

- Unterstützung für {{Glossary("WebP", "WebP")}}-Bilder wurde hinzugefügt ([Firefox-Bug 1294490](https://bugzil.la/1294490)).
  - Zusätzlich wurde, um die Kompatibilität zwischen verschiedenen Browsern in bestimmten Situationen zu erleichtern, der MIME-Typ von WebP (`image/webp`) zum Standard-HTTP-Request-{{httpheader("Accept")}}-Header für HTML-Dateien hinzugefügt ([Firefox-Bug 1507691](https://bugzil.la/1507691)).

- Der AV1-Codec wird jetzt standardmäßig unter Windows unterstützt ([Firefox-Bug 1452146](https://bugzil.la/1452146)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

#### Tabs

- Die {{WebExtAPIRef("tabs", "tabs API", "", "1")}} wurde um die Unterstützung von Tab-Nachfolgern erweitert — ein Tab kann einen Nachfolger zugewiesen bekommen, welcher die ID des Tabs ist, der aktiv wird, sobald er geschlossen wird ([Firefox-Bug 1500479](https://bugzil.la/1500479), siehe auch [diesen Blogpost](https://qiita.com/piroor/items/ea7e727735631c45a366) für mehr Informationen). Insbesondere:
  - Der {{WebExtAPIRef("tabs.Tab")}}-Typ hat jetzt eine Property `successorId`, die verwendet werden kann, um die ID des Tab-Nachfolgers zu speichern/abzurufen.
  - Der Callback des Event-Listeners {{WebExtAPIRef("tabs.onActivated")}} hat jetzt einen neuen Parameter verfügbar, `previousTabId`, der die ID des vorher aktivierten Tabs enthält, wenn dieser noch offen ist.
  - Das `updateProperties`-Objekt der Funktion {{WebExtAPIRef("tabs.update()")}} hat jetzt eine neue, optionale Eigenschaft `successorTabId`, die verwendet werden kann, um es zu aktualisieren.
  - `successorTabId` wird auch von Funktionen wie {{WebExtAPIRef("tabs.get()")}} und {{WebExtAPIRef("tabs.query()")}} zurückgegeben.
  - Die neue Funktion `tabs.moveInSuccession()` ermöglicht die Manipulation von Tab-Nachfolgern in großen Mengen.

### Manifest-Änderungen

_Keine Änderungen._

### Sonstiges

- Die `headerURL`/`theme_frame`-Eigenschaften für [WebExtension-Themen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) werden jetzt in Firefox für Android unterstützt ([Firefox-Bug 1429488](https://bugzil.la/1429488)).

## Siehe auch

- Hacks-Release-Post: [Firefox 65: WebP-Unterstützung, Flexbox-Inspektor, neue Werkzeuge & Plattform-Updates](https://hacks.mozilla.org/2019/01/firefox-65-webp-flexbox-inspector-new-tooling/)

## Ältere Versionen

{{Firefox_for_developers}}
