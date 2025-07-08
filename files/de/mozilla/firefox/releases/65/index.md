---
title: Firefox 65 für Entwickler
slug: Mozilla/Firefox/Releases/65
l10n:
  sourceCommit: 2d5b20a5eabb48bc5472ebe94b11afe2aa84f585
---

Dieser Artikel enthält Informationen über die Änderungen in Firefox 65, die Entwickler betreffen werden. Firefox 65 wurde am 29. Januar 2019 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Der [Flexbox-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_flexbox_layouts/index.html) ist jetzt standardmäßig aktiviert.
- Für den [JavaScript-Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) wurde Unterstützung für XHR-Breakpoints hinzugefügt ([Firefox-Bug 821610](https://bugzil.la/821610)).
- Klicken Sie mit der rechten Maustaste auf ein Element im Barrierefreiheitsbaum des Barrierefreiheit-Viewers, um es [als JSON zu drucken](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#print-accessibility-tree-to-json) im JSON-Viewer.
- Die Anzeige des [Farbkontrasts](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#color-contrast) des Accessibility-Pickers wurde aktualisiert. Wenn der Hintergrund eines Textes komplex ist (z. B. ein Verlauf oder ein komplexes Bild), wird ein Bereich von Farbkontrastwerten angezeigt.
- Der Header-Tab des [Netzwerk-Monitors](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) zeigt nun die Referrer-Policy für die ausgewählte Anfrage an ([Firefox-Bug 1496742](https://bugzil.la/1496742)).
- Beim Anzeigen von Stack-Traces (z. B. in Konsolenprotokollen oder im JavaScript-Debugger) werden Aufrufe von Rahmenmethoden standardmäßig identifiziert und zusammengeklappt, sodass Sie sich leichter auf Ihren Code konzentrieren können.
- Wie bei nativen Terminals können Sie jetzt eine umgekehrte Suche verwenden, um Einträge in Ihrem JavaScript-Konsolenverlauf zu finden (`F9` unter Windows/Linux oder `Ctrl` + `R` auf macOS, dann geben Sie einen Suchbegriff ein, gefolgt von `Ctrl` + `R`/`Ctrl` + `S`, um durch die Ergebnisse zu blättern).
- Der `$0`-Kürzel der JavaScript-Konsole (bezieht sich auf das derzeit auf der Seite inspizierte Element) bietet nun Autovervollständigung, sodass Sie beispielsweise `$0.te` eingeben können, um Autovervollständigungsvorschläge für Eigenschaften wie `$0.textContent` zu erhalten.
- Die Änderungen, die Sie in der Regelansicht des Inspektors vornehmen, werden nun im Änderungspanel aufgelistet ([Firefox-Bug 1503920](https://bugzil.la/1503920)).

### HTML

- Ereignisse werden nun auf deaktivierten HTML-Elementen ausgelöst, d.h. auf {{htmlelement("button")}}, {{htmlelement("fieldset")}}, {{htmlelement("input")}}, {{htmlelement("select")}}, und {{htmlelement("textarea")}} Elementen mit gesetzten `disabled`-Attributen ([Firefox-Bug 329509](https://bugzil.la/329509)).
- Wenn das `src`-Attribut eines {{htmlelement("iframe")}}-Elements entfernt wird, wird nun `about:blank` geladen, damit es mit Chrome und Safari übereinstimmt ([Firefox-Bug 1507842](https://bugzil.la/1507842)). Zuvor hatte das Entfernen von `src` keine Auswirkung auf den Inhalt des `iframe`.
- Unterstützung für das [`referrerpolicy`](/de/docs/Web/HTML/Reference/Elements/script#referrerpolicy)-Attribut bei {{htmlelement("script")}}-Elementen wurde hinzugefügt ([Firefox-Bug 1460920](https://bugzil.la/1460920)).

### CSS

- Der `crisp-edges`-Wert der {{cssxref("image-rendering")}}-Eigenschaft ist nun ohne Präfix ([Firefox-Bug 1496617](https://bugzil.la/1496617)).
- Ein {{cssxref("scrollbar-color")}}-Wert von `auto` wird nun zu `auto` aufgelöst, anstatt zu zwei Farben ([Firefox-Bug 1501418](https://bugzil.la/1501418)).
- Die `break-*`-Eigenschaften wurden implementiert, und die Legacy-`page-break-*`-Eigenschaften wurden auf diese abgebildet ([Firefox-Bug 775618](https://bugzil.la/775618)):
  - {{cssxref("break-before")}} ist nun ein Alias für {{cssxref("page-break-before")}}.
  - {{cssxref("break-after")}} ist nun ein Alias für {{cssxref("page-break-after")}}.
  - {{cssxref("break-inside")}} ist nun ein Alias für {{cssxref("page-break-inside")}}.

- Der `anywhere`-Wert der {{cssxref("overflow-wrap")}}-Eigenschaft wurde implementiert ([Firefox-Bug 1505786](https://bugzil.la/1505786)).
- Die neuen Step-Position-Schlüsselwörter `jump-start`, `jump-end`, `jump-none` und `jump-both` — verwendbar innerhalb der [`steps()`-Timing-Funktion](/de/docs/Web/CSS/easing-function/steps) — wurden implementiert ([Firefox-Bug 1496619](https://bugzil.la/1496619)). Dies entspricht auch der Entfernung der `frames()`-Timing-Funktion, die früher für die Implementierung solcher Funktionalitäten verwendet wurde und nun veraltet ist.
- Einige neue {{cssxref("appearance", "-webkit-appearance")}}-Werte wurden hinzugefügt, um die Kompatibilität mit anderen Browsern zu gewährleisten. Insbesondere:
  - `meter`, das nun als Standardwert für {{htmlelement("meter")}}-Elemente in UA-Stylesheets verwendet wird. Der vorhandene Wert `meterbar` ist jetzt ein Alias für `meter` ([Firefox-Bug 1501483](https://bugzil.la/1501483)).
  - `progress-bar`, das nun als Standardwert für {{htmlelement("progress")}}-Elemente in UA-Stylesheets verwendet wird. Der vorhandene Wert `progressbar` ist jetzt ein Alias für `progress-bar` ([Firefox-Bug 1501506](https://bugzil.la/1501506)).
  - `textarea`, das nun als Standardwert für {{htmlelement("textarea")}}-Elemente in UA-Stylesheets verwendet wird. Der vorhandene Wert `textfield-multiline` ist jetzt ein Alias für `textarea` ([Firefox-Bug 1507905](https://bugzil.la/1507905)).

- Das Verhalten von {{cssxref("user-select")}} wurde geändert, um es besser an andere Browser anzupassen ([Firefox-Bug 1506547](https://bugzil.la/1506547)). Insbesondere:
  - `user-select: all`, das auf ein Element gesetzt ist, überschreibt nicht mehr andere `user-select`-Werte, die auf untergeordnete Elemente dieses Elements gesetzt sind. Beispielsweise im folgenden Snippet:

    ```html
    <div style="-webkit-user-select: all">
      All
      <div style="-webkit-user-select: none">None</div>
    </div>
    ```

    Das `<div>` mit `none` darauf gesetzt, ist nun nicht mehr auswählbar. Zuvor wäre dieser Wert durch den `all`-Wert auf dem Elternelement überschrieben worden.

  - nicht-`contenteditable`-Elemente, die in `contenteditable`-Elementen verschachtelt sind, sind jetzt auswählbar.
  - `user-select` verhält sich jetzt innerhalb und außerhalb des Shadow-DOMs konsistent.
  - Der proprietäre `-moz-text`-Wert wurde entfernt.

- CSS-Umgebungsvariablen (die {{cssxref("env", "env()")}}-Funktion) wurden implementiert ([Firefox-Bug 1462233](https://bugzil.la/1462233)).

#### Entfernungen

- Die `layout.css.shape-outside.enabled`-Einstellung wurde entfernt; {{cssxref("shape-outside")}}, {{cssxref("shape-margin")}}, und {{cssxref("shape-image-threshold")}} können nicht mehr in `about:config` deaktiviert werden ([Firefox-Bug 1504387](https://bugzil.la/1504387)).
- Mehrere Firefox-spezifische Werte der {{cssxref("user-select")}}-Eigenschaft wurden entfernt — `-moz-all`, `-moz-text`, `tri-state`, `element`, `elements` und `toggle`. Siehe [Firefox-Bug 1492958](https://bugzil.la/1492958) und [Firefox-Bug 1506547](https://bugzil.la/1506547).
- Wie oben erwähnt, wurde die `frames()`-Timing-Funktion entfernt ([Firefox-Bug 1496619](https://bugzil.la/1496619)).

### SVG

_Keine Änderungen._

### JavaScript

- {{jsxref("Intl/RelativeTimeFormat", "Intl.RelativeTimeFormat")}} wird jetzt unterstützt ([Firefox-Bug 1504334](https://bugzil.la/1504334)).
- Zeichenfolgen haben jetzt eine maximale {{jsxref("String/length","length","", 1)}} von `2**30 - 2` (\~1GB) statt `2**28 - 1` (\~256MB) ([Firefox-Bug 1509542](https://bugzil.la/1509542)).
- Die {{jsxref("globalThis")}}-Eigenschaft, die immer auf das oberste globale Objekt verweist, wurde implementiert ([Firefox-Bug 1317422](https://bugzil.la/1317422)).

### APIs

#### Neue APIs

- [Readable Streams](/de/docs/Web/API/Streams_API/Using_readable_streams) wurden standardmäßig aktiviert ([Firefox-Bug 1505122](https://bugzil.la/1505122)).
- Die [Storage Access API](/de/docs/Web/API/Storage_Access_API) wurde standardmäßig aktiviert ([Firefox-Bug 1513021](https://bugzil.la/1513021)).

#### DOM

- [`Performance.toJSON()`](/de/docs/Web/API/Performance/toJSON) wurde für [Web Workers](/de/docs/Web/API/Web_Workers_API) freigegeben ([Firefox-Bug 1504958](https://bugzil.la/1504958)).
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Anfragen werfen nun einen `NetworkError`, wenn der geforderte Inhalts-Typ ein `Blob` ist und die Anfragemethode nicht `GET` ist ([Firefox-Bug 1502599](https://bugzil.la/1502599)).
- Die `-moz-`-präfixierten Versionen vieler [Fullscreen-API](/de/docs/Web/API/Fullscreen_API)-Funktionen wurden veraltet, und sie zeigen nun in der JavaScript-Konsole Veraltungswarnungen an, wenn sie aufgerufen werden ([Firefox-Bug 1504946](https://bugzil.la/1504946)).
- [`Window.createImageBitmap()`](/de/docs/Web/API/Window/createImageBitmap) und [`WorkerGlobalScope.createImageBitmap()`](/de/docs/Web/API/WorkerGlobalScope/createImageBitmap) unterstützen nun SVG-Bilder ([`SVGImageElement`](/de/docs/Web/API/SVGImageElement)) als Bildquelle ([Firefox-Bug 1500768](https://bugzil.la/1500768)).

#### DOM-Ereignisse

- Zukünftig ist nur noch ein Aufruf von [`Window.open()`](/de/docs/Web/API/Window/open) pro Ereignis erlaubt ([Firefox-Bug 675574](https://bugzil.la/675574)).
- Die [`keyup`](/de/docs/Web/API/Element/keyup_event)- und [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignisse werden nun während der IME-Zusammenstellung ausgelöst, um die Browser-Kompatibilität für CJKT-Anwender zu verbessern ([Firefox-Bug 354358](https://bugzil.la/354358)).

#### Web-Worker

- Das Event-Objekt von [`SharedWorkerGlobalScope.connect`](/de/docs/Web/API/SharedWorkerGlobalScope/connect_event) ist eine Instanz von [`MessageEvent`](/de/docs/Web/API/MessageEvent) — dessen `data`-Eigenschaft ist jetzt ein leerer Zeichenfolgenwert anstatt `null` ([Firefox-Bug 1508824](https://bugzil.la/1508824)).

#### Fetch und Service-Worker

- Die Methode [`Response.redirect()`](/de/docs/Web/API/Response/redirect_static) wirft nun korrekt einen `TypeError`, wenn eine ungültige URL als erster Parameter angegeben wird ([Firefox-Bug 1503276](https://bugzil.la/1503276)).
- Die Methoden [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) und [`WorkerGlobalScope.importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts) (wenn von einem Service-Worker verwendet) akzeptieren nun alle Dateien mit einem gültigen [JavaScript-MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types#textjavascript) ([Firefox-Bug 1354577](https://bugzil.la/1354577)).
- Die Eigenschaften [`FetchEvent.replacesClientId`](/de/docs/Web/API/FetchEvent/replacesClientId) und [`FetchEvent.resultingClientId`](/de/docs/Web/API/FetchEvent/resultingClientId) werden nun unterstützt ([Firefox-Bug 1264177](https://bugzil.la/1264177)).
- Die Handler-Eigenschaften [`ServiceWorkerGlobalScope.onmessageerror`](/de/docs/Web/API/ServiceWorkerGlobalScope/messageerror_event) und [`ServiceWorkerContainer.onmessageerror`](/de/docs/Web/API/ServiceWorkerContainer/messageerror_event) wurden implementiert ([Firefox-Bug 1399446](https://bugzil.la/1399446)).
- Der {{httpheader("Origin")}}-Header wird auf Fetch-Anfragen mit der Methode {{HTTPMethod("HEAD")}} oder {{HTTPMethod("GET")}} nicht mehr gesetzt ([Firefox-Bug 1508661](https://bugzil.la/1508661)).

#### Medien, Web-Audio und WebRTC

- Das [WebRTC](/de/docs/Web/API/WebRTC_API) [`RTCIceCandidateStats`](/de/docs/Web/API/RTCIceCandidateStats)-Dictionary wurde gemäß den neuesten Spezifikationsänderungen aktualisiert ([Firefox-Bug 1324788](https://bugzil.la/1324788), [Firefox-Bug 1489040](https://bugzil.la/1489040); RTCIceCandidateStats wurde auf die neueste Spezifikation aktualisiert, um genauere Informationen zur Verfügung zu stellen, was sich geändert hat).
- Die `pause`- und `resume`-Ereignisse des [`MediaRecorder`](/de/docs/Web/API/MediaRecorder) (und ihre entsprechenden Event-Handler-Eigenschaften) wurden nicht implementiert, obwohl Kompatibilitätstabellen behauptet haben, sie seien es. Sie wurden jetzt implementiert ([Firefox-Bug 1458538](https://bugzil.la/1458538), [Firefox-Bug 1514016](https://bugzil.la/1514016)).

#### Canvas und WebGL

- Die [WebGL](/de/docs/Web/API/WebGL_API) [`EXT_texture_compression_bptc`](/de/docs/Web/API/EXT_texture_compression_bptc) und [`EXT_texture_compression_rgtc`](/de/docs/Web/API/EXT_texture_compression_rgtc)-Texturkompressions-Erweiterungen wurden für WebGL1- und WebGL2-Kontexte freigegeben ([Firefox-Bug 1507263](https://bugzil.la/1507263)).

#### Entfernungen

- [Mutationsereignisse](/de/docs/Web/API/MutationEvent) wurden in Shadow-Trees deaktiviert ([Firefox-Bug 1489858](https://bugzil.la/1489858)).
- Die nicht standardisierte [`MediaStream`](/de/docs/Web/API/MediaStream)-Eigenschaft `currentTime` wurde entfernt ([Firefox-Bug 1502927](https://bugzil.la/1502927)).
- Die `dom.webcomponents.shadowdom.enabled` und `dom.webcomponents.customelements.enabled`-Einstellungen wurden entfernt — Shadow-DOM und benutzerdefinierte Elemente können nicht mehr in `about:config` deaktiviert werden ([Firefox-Bug 1503019](https://bugzil.la/1503019)).
- Das nicht standardisierte DOM-`text`-Ereignis — ausgelöst, um die Browser-Editor-Oberfläche über IME-Kompositionszeichendaten und Auswahlbereich zu informieren — wurde entfernt ([Firefox-Bug 1288640](https://bugzil.la/1288640)).
- Das [`keypress`](/de/docs/Web/API/Element/keypress_event)-Ereignis wird nicht mehr für [nicht druckbare Tasten](/de/docs/Web/API/KeyboardEvent/keyCode#non-printable_keys_function_keys) ausgelöst ([Firefox-Bug 968056](https://bugzil.la/968056)), außer für die `Enter`-Taste und die Tasten Kombinationen `Shift` + `Enter` und `Ctrl` + `Enter` (diese wurden aus Gründen der plattformübergreifenden Kompatibilität beibehalten).

### Sicherheit

- Zusätzliche CORS-Beschränkungen werden nun für zulässige Anfrage-Header durchgesetzt ([Firefox-Bug 1483815](https://bugzil.la/1483815), siehe auch [whatwg fetch issue 382: CORS-safelisted request headers should be restricted according to RFC 7231](https://github.com/whatwg/fetch/issues/382) für mehr Details).

### Netzwerk

_Keine Änderungen._

### Plugins

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

#### API-Änderungen

- `WebDriver:ElementSendKeys` behandelt `<input type=file>` für Interaktivitätsprüfungen entspannter und erlaubt es, dass diese Elemente verborgen sind, ohne einen `not interactable`-Fehler hervorzurufen. Wenn eine strikte Interaktivitätsüberprüfung gewünscht ist, kann die Fähigkeit `strictFileInteractability` verwendet werden ([Firefox-Bug 1502864](https://bugzil.la/1502864)).

#### Fehlerbehebungen

- Die Fenster-Manipulationsbefehle `WebDriver:FullscreenWindow`, `WebDriver:MinimizeWindow`, `WebDriver:MaximizeWindow`, und `WebDriver:SetWindowRect` wurden stabiler gemacht ([Firefox-Bug 1492499](https://bugzil.la/1492499)). Das bedeutet, dass sie unter speziellen Bedingungen nicht mehr unendlich hängen bleiben, sondern nach 5 Sekunden auslaufen, wenn der angeforderte Fensterzustand nicht erreicht werden kann ([Firefox-Bug 1521527](https://bugzil.la/1521527)).
- `WebDriver:ElementClick` berechnet jetzt korrekt den Mittelpunkt des Elements, auf das geklickt werden soll, was Interaktionen mit Dimensionen von 1x1 Pixeln ermöglicht ([Firefox-Bug 1499360](https://bugzil.la/1499360)).

#### Andere

- Für `unexpected alert open`-Fehler werden informativere Meldungen bereitgestellt ([Firefox-Bug 1502268](https://bugzil.la/1502268)).

### Sonstiges

- Unterstützung für {{Glossary("WebP", "WebP")}}-Bilder wurde hinzugefügt ([Firefox-Bug 1294490](https://bugzil.la/1294490)).
  - Darüber hinaus wurde zur Erleichterung der plattformübergreifenden Kompatibilität in bestimmten Situationen der WebP-MIME-Typ (`image/webp`) dem standardmäßigen HTTP-Anfrage {{httpheader("Accept")}}-Header für HTML-Dateien hinzugefügt ([Firefox-Bug 1507691](https://bugzil.la/1507691)).

- Der AV1-Codec wird nun standardmäßig unter Windows unterstützt ([Firefox-Bug 1452146](https://bugzil.la/1452146)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

#### Tabs

- Die {{WebExtAPIRef("tabs", "tabs-API", "", "1")}} wurde erweitert, um Tab-Nachfolger zu unterstützen — ein Tab kann einen Nachfolger zugeteilt bekommen, welcher die ID des Tabs ist, das aktiv wird, sobald es geschlossen wird ([Firefox-Bug 1500479](https://bugzil.la/1500479), siehe auch [diesen Blogeintrag](https://qiita.com/piroor/items/ea7e727735631c45a366) für weitere Informationen). Insbesondere:
  - Der {{WebExtAPIRef("tabs.Tab")}}-Typ hat nun eine `successorId`-Eigenschaft, die verwendet werden kann, um die ID des Tab-Nachfolgers zu speichern/abrufen.
  - Der Rückruf des {{WebExtAPIRef("tabs.onActivated")}}-Ereignis-Listeners hat einen neuen Parameter verfügbar, `previousTabId`, der die ID des zuvor aktivierten Tabs enthält, falls es noch offen ist.
  - Das `updateProperties`-Objekt der {{WebExtAPIRef("tabs.update()")}}-Funktion hat eine neue optionale Eigenschaft verfügbar, `successorTabId`, so kann es aktualisiert werden.
  - `successorTabId` wird auch von Funktionen wie {{WebExtAPIRef("tabs.get()")}} und {{WebExtAPIRef("tabs.query()")}} zurückgegeben.
  - Die neue Funktion `tabs.moveInSuccession()` ermöglicht eine Massenmanipulation von Tab-Nachfolgern.

### Manifest-Änderungen

_Keine Änderungen._

### Andere

- Die `headerURL`/`theme_frame`-Eigenschaften für [WebExtension-Themen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) werden nun auf Firefox für Android unterstützt ([Firefox-Bug 1429488](https://bugzil.la/1429488)).

## Siehe auch

- Hacks-Veröffentlichungsbeitrag: [Firefox 65: WebP support, Flexbox Inspector, new tooling & platform updates](https://hacks.mozilla.org/2019/01/firefox-65-webp-flexbox-inspector-new-tooling/)

## Ältere Versionen

{{Firefox_for_developers}}
