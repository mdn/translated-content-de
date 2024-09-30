---
title: Firefox 65 für Entwickler
slug: Mozilla/Firefox/Releases/65
l10n:
  sourceCommit: 58d79e9c2206e0a604cd4d7f6fba5181262af420
---

{{FirefoxSidebar}}

Dieser Artikel informiert über die Änderungen in Firefox 65, die Entwickler betreffen werden. Firefox 65 wurde am 29. Januar 2019 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Der [Flexbox-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_flexbox_layouts/index.html) ist jetzt standardmäßig aktiviert.
- Unterstützung wurde dem [JavaScript-Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) für XHR Haltepunkte hinzugefügt ([Firefox Fehler 821610](https://bugzil.la/821610)).
- Rechtsklicken Sie auf ein Element im Zugänglichkeitsbaum aus dem Zugänglichkeitsbetrachter, um es als [JSON auszugeben](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#print-accessibility-tree-to-json) zum JSON-Betrachter.
- Die Anzeige des [Farbkontrasts](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#color-contrast) des Accessibility Pickers wurde aktualisiert: Wenn der Hintergrund eines Textes komplex ist (z.B. ein Verlauf oder ein komplexes Bild), wird ein Bereich von Farbkontrastwerten angezeigt.
- Die Kopfzeilen-Registerkarte des [Netzwerkmonitors](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) zeigt jetzt die Referrer-Politik für die ausgewählte Anfrage an ([Firefox Fehler 1496742](https://bugzil.la/1496742)).
- Bei der Anzeige von Stack-Traces (z.B. in Konsolenprotokollen oder dem JavaScript-Debugger) werden Aufrufe von Framework-Methoden identifiziert und standardmäßig zusammengeklappt, wodurch es einfacher wird, sich auf Ihren Code zu konzentrieren.
- Ähnlich wie in nativen Terminals können Sie jetzt die umgekehrte Suche verwenden, um Einträge in Ihrem JavaScript-Konsolenverlauf zu finden (`F9` unter Windows/Linux oder `Ctrl` + `R` auf macOS, dann einen Suchbegriff eingeben, gefolgt von `Ctrl` + `R`/`Ctrl` + `S`, um durch die Ergebnisse zu blättern).
- Der `$0`-Shortcut der JavaScript-Konsole (verweist auf das aktuell inspizierte Element auf der Seite) verfügt jetzt über eine Autovervollständigung, sodass Sie beispielsweise `$0.te` eingeben können, um Autovervollständigungsvorschläge für Eigenschaften wie `$0.textContent` zu erhalten.
- Die Änderungen, die Sie im Regeln-Ansicht des Inspektors vornehmen, werden jetzt im Änderungen-Panel aufgelistet ([Firefox Fehler 1503920](https://bugzil.la/1503920)).

### HTML

- Ereignisse werden jetzt auf deaktivierten HTML-Elementen ausgelöst, also {{htmlelement("button")}}, {{htmlelement("fieldset")}}, {{htmlelement("input")}}, {{htmlelement("select")}} und {{htmlelement("textarea")}}-Elementen mit gesetztem `disabled`-Attribut ([Firefox Fehler 329509](https://bugzil.la/329509)).
- Wenn das `src`-Attribut eines {{htmlelement("iframe")}}-Elements entfernt wird, wird jetzt `about:blank` geladen, wodurch es Chrome und Safari entspricht ([Firefox Fehler 1507842](https://bugzil.la/1507842)). Vorher hatte das Entfernen von `src` keinen Effekt auf den `iframe`-Inhalt.
- Unterstützung wurde für das [`referrerpolicy`](/de/docs/Web/HTML/Element/script#referrerpolicy)-Attribut auf {{htmlelement("script")}}-Elementen hinzugefügt ([Firefox Fehler 1460920](https://bugzil.la/1460920)).

### CSS

- Der `crisp-edges`-Wert der {{cssxref("image-rendering")}}-Eigenschaft ist jetzt ohne Präfix ([Firefox Fehler 1496617](https://bugzil.la/1496617)).
- Ein {{cssxref("scrollbar-color")}}-Wert von `auto` wird jetzt zu `auto` aufgelöst, anstatt zu zwei Farben ([Firefox Fehler 1501418](https://bugzil.la/1501418)).
- Die `break-*`-Eigenschaften wurden implementiert, und die veralteten `page-break-*`-Eigenschaften wurden ihnen zugeordnet ([Firefox Fehler 775618](https://bugzil.la/775618)):

  - {{cssxref("break-before")}} ist jetzt ein Alias für {{cssxref("page-break-before")}}.
  - {{cssxref("break-after")}} ist jetzt ein Alias für {{cssxref("page-break-after")}}.
  - {{cssxref("break-inside")}} ist jetzt ein Alias für {{cssxref("page-break-inside")}}.

- Der `anywhere`-Wert der {{cssxref("overflow-wrap")}}-Eigenschaft wurde implementiert ([Firefox Fehler 1505786](https://bugzil.la/1505786)).
- Die neuen Schrittposition-Schlüsselwörter `jump-start`, `jump-end`, `jump-none` und `jump-both` — verwendbar innerhalb der [`steps()` Zeitliche-Funktion](/de/docs/Web/CSS/easing-function#step_easing_function) — wurden implementiert ([Firefox Fehler 1496619](https://bugzil.la/1496619)). Dies fällt auch mit der Entfernung der `frames()`-Zeitliche-Funktion zusammen, die die vorherige Methode zur Implementierung dieser Funktionalität war, jetzt veraltet.
- Einige neue {{cssxref("appearance", "-webkit-appearance")}}-Werte wurden hinzugefügt, um die Kompatibilität mit anderen Browsern sicherzustellen. Insbesondere:

  - `meter`, welcher jetzt der Standardwert für {{htmlelement("meter")}}-Elemente in UA-Stylesheets ist. Der vorhandene Wert `meterbar` ist jetzt ein Alias für `meter` ([Firefox Fehler 1501483](https://bugzil.la/1501483)).
  - `progress-bar`, welcher jetzt der Standardwert für {{htmlelement("progress")}}-Elemente in UA-Stylesheets ist. Der vorhandene Wert `progressbar` ist jetzt ein Alias für `progress-bar` ([Firefox Fehler 1501506](https://bugzil.la/1501506)).
  - `textarea`, welcher jetzt der Standardwert für {{htmlelement("textarea")}}-Elemente in UA-Stylesheets ist. Der vorhandene Wert `textfield-multiline` ist jetzt ein Alias für `textarea` ([Firefox Fehler 1507905](https://bugzil.la/1507905)).

- Das Verhalten von {{cssxref("user-select")}} wurde geändert, um es mehr mit anderen Browsern in Einklang zu bringen ([Firefox Fehler 1506547](https://bugzil.la/1506547)). Konkret:

  - `user-select: all`, das auf ein Element gesetzt ist, überschreibt nicht mehr andere `user-select`-Werte, die auf untergeordneten Elementen dieses Elements gesetzt sind. Beispielhaft der folgende Ausschnitt:

    ```html
    <div style="-webkit-user-select: all">
      All
      <div style="-webkit-user-select: none">None</div>
    </div>
    ```

    Das `<div>` mit `none` ist nun nicht mehr auswählbar. Zuvor wäre dieser Wert durch den `all`-Wert des Elternelements überschrieben worden.

  - nicht-`contenteditable`-Elemente, die innerhalb von `contenteditable`-Elementen verschachtelt sind, sind jetzt auswählbar.
  - `user-select` verhält sich jetzt konsistent innerhalb und außerhalb des Shadow-DOM.
  - Der proprietäre `-moz-text`-Wert wurde entfernt.

- CSS-Umgebungsvariablen (die {{cssxref("env", "env()")}}-Funktion) wurden implementiert ([Firefox Fehler 1462233](https://bugzil.la/1462233)).

#### Entfernt

- Die `layout.css.shape-outside.enabled`-Voreinstellung wurde entfernt; {{cssxref("shape-outside")}}, {{cssxref("shape-margin")}}, und {{cssxref("shape-image-threshold")}} können nicht länger in `about:config` deaktiviert werden ([Firefox Fehler 1504387](https://bugzil.la/1504387)).
- Mehrere Firefox-exklusive Werte der {{cssxref("user-select")}}-Eigenschaft wurden entfernt — `-moz-all`, `-moz-text`, `tri-state`, `element`, `elements`, und `toggle`. Siehe [Firefox Fehler 1492958](https://bugzil.la/1492958) und [Firefox Fehler 1506547](https://bugzil.la/1506547).
- Wie oben erwähnt, wurde die `frames()`-Zeitliche-Funktion entfernt ([Firefox Fehler 1496619](https://bugzil.la/1496619)).

### SVG

_Keine Änderungen._

### JavaScript

- {{jsxref("Intl/RelativeTimeFormat", "Intl.RelativeTimeFormat")}} wird jetzt unterstützt ([Firefox Fehler 1504334](https://bugzil.la/1504334)).
- Zeichenfolgen haben jetzt eine maximale {{jsxref("String/length","Länge","", 1)}} von `2**30 - 2` (\~1GB) anstelle von `2**28 - 1` (\~256MB) ([Firefox Fehler 1509542](https://bugzil.la/1509542)).
- Die {{jsxref("globalThis")}}-Eigenschaft, die immer auf das oberste globale Objekt verweist, wurde implementiert ([Firefox Fehler 1317422](https://bugzil.la/1317422)).

### APIs

#### Neue APIs

- [Lesbare Streams](/de/docs/Web/API/Streams_API/Using_readable_streams) sind standardmäßig aktiviert ([Firefox Fehler 1505122](https://bugzil.la/1505122)).
- Die [Storage Access API](/de/docs/Web/API/Storage_Access_API) ist jetzt standardmäßig aktiviert ([Firefox Fehler 1513021](https://bugzil.la/1513021)).

#### DOM

- [`Performance.toJSON()`](/de/docs/Web/API/Performance/toJSON) wurde für [Web Workers](/de/docs/Web/API/Web_Workers_API) verfügbar gemacht ([Firefox Fehler 1504958](https://bugzil.la/1504958)).
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Anfragen werfen jetzt einen `NetworkError`, wenn der angeforderte Inhaltstyp ein `Blob` ist und die Anfragemethode nicht `GET` ist ([Firefox Fehler 1502599](https://bugzil.la/1502599)).
- Die `-moz-`-präfixierten Versionen vieler der [Vollbild-API](/de/docs/Web/API/Fullscreen_API)-Funktionen wurden veraltet, und es werden jetzt Veraltungswarnungen in der JavaScript-Konsole angezeigt, wenn sie verwendet werden ([Firefox Fehler 1504946](https://bugzil.la/1504946)).
- [`Window.createImageBitmap()`](/de/docs/Web/API/Window/createImageBitmap) und [`WorkerGlobalScope.createImageBitmap()`](/de/docs/Web/API/WorkerGlobalScope/createImageBitmap) unterstützen jetzt SVG-Bilder ([`SVGImageElement`](/de/docs/Web/API/SVGImageElement)) als Bildquelle ([Firefox Fehler 1500768](https://bugzil.la/1500768)).

#### DOM-Ereignisse

- In Zukunft ist nur noch ein [`Window.open()`](/de/docs/Web/API/Window/open)-Aufruf pro Ereignis erlaubt ([Firefox Fehler 675574](https://bugzil.la/675574)).
- Die [`keyup`](/de/docs/Web/API/Element/keyup_event) und [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignisse werden jetzt während der IME-Zusammensetzung ausgelöst, um die Kompatibilität zwischen Browsern für CJKT-Benutzer zu verbessern ([Firefox Fehler 354358](https://bugzil.la/354358)).

#### Webworker

- Das `Event`-Objekt von [`SharedWorkerGlobalScope.connect`](/de/docs/Web/API/SharedWorkerGlobalScope/connect_event) ist eine Instanz von [`MessageEvent`](/de/docs/Web/API/MessageEvent) — seine `data`-Eigenschaft ist jetzt ein leerer Zeichenfolgenwert anstelle von `null` ([Firefox Fehler 1508824](https://bugzil.la/1508824)).

#### Fetch und Serviceworker

- Die [`Response.redirect()`](/de/docs/Web/API/Response/redirect_static)-Methode wirft jetzt korrekt einen `TypeError`, wenn eine ungültige URL als erster Parameter angegeben wird ([Firefox Fehler 1503276](https://bugzil.la/1503276)).
- Die Methoden [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) und [`WorkerGlobalScope.importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts) (wenn sie von einem Serviceworker verwendet werden) akzeptieren jetzt alle Dateien mit einem gültigen [JavaScript MIME-Typ](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types#textjavascript) ([Firefox Fehler 1354577](https://bugzil.la/1354577)).
- Die Eigenschaften [`FetchEvent.replacesClientId`](/de/docs/Web/API/FetchEvent/replacesClientId) und [`FetchEvent.resultingClientId`](/de/docs/Web/API/FetchEvent/resultingClientId) werden jetzt unterstützt ([Firefox Fehler 1264177](https://bugzil.la/1264177)).
- Die Eigenschaften [`ServiceWorkerGlobalScope.onmessageerror`](/de/docs/Web/API/ServiceWorkerGlobalScope/messageerror_event) und [`ServiceWorkerContainer.onmessageerror`](/de/docs/Web/API/ServiceWorkerContainer/messageerror_event) wurden implementiert ([Firefox Fehler 1399446](https://bugzil.la/1399446)).
- Der {{httpheader("Origin")}}-Header wird auf Fetch-Anfragen mit einer Methode von {{HTTPMethod("HEAD")}} oder {{HTTPMethod("GET")}} nicht mehr gesetzt ([Firefox Fehler 1508661](https://bugzil.la/1508661)).

#### Medien, Web Audio und WebRTC

- Das [WebRTC](/de/docs/Web/API/WebRTC_API)-Wörterbuch [`RTCIceCandidateStats`](/de/docs/Web/API/RTCIceCandidateStats) wurde gemäß den neuesten Spezifikationsänderungen aktualisiert ([Firefox Fehler 1324788](https://bugzil.la/1324788), [Firefox Fehler 1489040](https://bugzil.la/1489040); RTCIceCandidateStats wurde auf die neueste Spezifikation aktualisiert, weitere Details zu genau dem, was sich geändert hat).
- Die `pause`- und `resume`-Ereignisse des [`MediaRecorder`](/de/docs/Web/API/MediaRecorder) (und ihre entsprechenden Ereignishandler-Eigenschaften wurden zuvor nicht implementiert, obwohl die Kompatibilitätstabellen behaupteten, sie seien implementiert worden. Sie wurden jetzt implementiert ([Firefox Fehler 1458538](https://bugzil.la/1458538), [Firefox Fehler 1514016](https://bugzil.la/1514016)).

#### Canvas und WebGL

- Die [WebGL](/de/docs/Web/API/WebGL_API) Texturkomprimierungserweiterungen [`EXT_texture_compression_bptc`](/de/docs/Web/API/EXT_texture_compression_bptc) und [`EXT_texture_compression_rgtc`](/de/docs/Web/API/EXT_texture_compression_rgtc) wurden für WebGL1- und WebGL2-Kontexte verfügbar gemacht ([Firefox Fehler 1507263](https://bugzil.la/1507263)).

#### Entfernt

- [Mutationsevents](/de/docs/Web/API/MutationEvent) wurden in Shadow-Trees deaktiviert ([Firefox Fehler 1489858](https://bugzil.la/1489858)).
- Die nicht-standardisierte [`MediaStream`](/de/docs/Web/API/MediaStream)-Eigenschaft `currentTime` wurde entfernt ([Firefox Fehler 1502927](https://bugzil.la/1502927)).
- Die Voreinstellungen `dom.webcomponents.shadowdom.enabled` und `dom.webcomponents.customelements.enabled` wurden entfernt — Shadow DOM und benutzerdefinierte Elemente können nicht länger in `about:config` deaktiviert werden ([Firefox Fehler 1503019](https://bugzil.la/1503019)).
- Das nicht-standardisierte DOM-`text`-Ereignis — ausgelöst, um die Browser-Editor-Benutzeroberfläche über IME-Zusammensetzungszeichenfolgendaten und Auswahlumfang zu informieren — wurde entfernt ([Firefox Fehler 1288640](https://bugzil.la/1288640)).
- Das [`keypress`](/de/docs/Web/API/Element/keypress_event)-Ereignis wird nicht mehr für [nicht druckbare Tasten](</de/docs/Web/API/KeyboardEvent/keyCode#non-printable_keys_(function_keys)>) ([Firefox Fehler 968056](https://bugzil.la/968056)) ausgelöst, mit Ausnahme der `Enter`-Taste und der `Shift` + `Enter` und `Ctrl` + `Enter`-Tastenkombinationen (diese wurden aus Gründen der Kompatibilität zwischen Browsern beibehalten).

### Sicherheit

- Zusätzliche CORS-Beschränkungen werden jetzt auf zulässige Anforderungsheader durchgesetzt ([Firefox Fehler 1483815](https://bugzil.la/1483815), siehe auch [WHATWG Fetch Issue 382: CORS-safelisted request headers should be restricted according to RFC 7231](https://github.com/whatwg/fetch/issues/382) für weitere Details).

### Netzwerk

_Keine Änderungen._

### Plugins

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

#### API-Änderungen

- `WebDriver:ElementSendKeys` behandelt `<input type=file>` nun entspannter für Interaktivitätsprüfungen und erlaubt es diesen Elementen, ohne das Auslösen eines `not interactable`-Fehlers ausgeblendet zu sein. Wenn eine strenge Interaktivitätsprüfung gewünscht ist, kann die Fähigkeit `strictFileInteractability` verwendet werden ([Firefox Fehler 1502864](https://bugzil.la/1502864)).

#### Fehlerbehebungen

- Die Fenster-Manipulationsbefehle `WebDriver:FullscreenWindow`, `WebDriver:MinimizeWindow`, `WebDriver:MaximizeWindow`, und `WebDriver:SetWindowRect` wurden stabiler gemacht ([Firefox Fehler 1492499](https://bugzil.la/1492499)). Das bedeutet, dass sie unter besonderen Bedingungen kein unendliches Hängen mehr verursachen, sondern stattdessen nach 5 Sekunden ablaufen, wenn der angeforderte Fensterzustand nicht erreicht werden kann ([Firefox Fehler 1521527](https://bugzil.la/1521527)).
- `WebDriver:ElementClick` berechnet jetzt korrekt den Mittelpunkt des zu klickenden Elements, was Interaktionen mit Dimensionen von 1x1 Pixeln ermöglicht ([Firefox Fehler 1499360](https://bugzil.la/1499360)).

#### Sonstiges

- Für `unexpected alert open`-Fehler werden aussagekräftigere Nachrichten bereitgestellt ([Firefox Fehler 1502268](https://bugzil.la/1502268)).

### Sonstiges

- Unterstützung für [WebP](/de/docs/Glossary/WebP)-Bilder wurde hinzugefügt ([Firefox Fehler 1294490](https://bugzil.la/1294490)).

  - Darüber hinaus wurde der WebP-MIME-Type (`image/webp`) dem Standard-HTTP-Anforderungs-{{httpheader("Accept")}}-Header für HTML-Dateien hinzugefügt, um die Kompatibilität zwischen Browsern in bestimmten Situationen zu erleichtern ([Firefox Fehler 1507691](https://bugzil.la/1507691)).

- Der AV1-Codec wird jetzt standardmäßig unter Windows unterstützt ([Firefox Fehler 1452146](https://bugzil.la/1452146)).

## Änderungen für Add-On-Entwickler

### API-Änderungen

#### Tabs

- Die {{WebExtAPIRef("tabs", "tabs API", "", "1")}} wurde erweitert, um Tab-Nachfolger zu unterstützen — ein Tab kann einen Nachfolger zugewiesen bekommen, welcher die ID des Tabs ist, der aktiv sein wird, sobald er geschlossen wird ([Firefox Fehler 1500479](https://bugzil.la/1500479), siehe auch [diesen Blog-Post](https://qiita.com/piroor/items/ea7e727735631c45a366) für weitere Informationen). Insbesondere:

  - Der Typ {{WebExtAPIRef("tabs.Tab")}} hat jetzt eine `successorId`-Eigenschaft, die verwendet werden kann, um die ID des Tab-Nachfolgers zu speichern/abzurufen.
  - Der Rückruf des Ereignis-Listeners {{WebExtAPIRef("tabs.onActivated")}} hat jetzt einen neuen verfügbaren Parameter, `previousTabId`, der die ID des vorher aktivierten Tabs enthält, falls dieser noch geöffnet ist.
  - Das `updateProperties`-Objekt der Funktion {{WebExtAPIRef("tabs.update()")}} hat eine neue optionale Eigenschaft verfügbar darauf, `successorTabId`, welches aktualisiert werden kann.
  - `successorTabId` wird auch von Funktionen wie {{WebExtAPIRef("tabs.get()")}} und {{WebExtAPIRef("tabs.query()")}} zurückgegeben.
  - Die neue Funktion `tabs.moveInSuccession()` ermöglicht die Massenmanipulation von Tab-Nachfolgern.

### Manifest-Änderungen

_Keine Änderungen._

### Sonstiges

- Die Eigenschaften `headerURL`/`theme_frame` für [WebExtension-Themen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) werden jetzt auf Firefox für Android unterstützt ([Firefox Fehler 1429488](https://bugzil.la/1429488)).

## Siehe auch

- Hacks-Veröffentlichungspost: [Firefox 65: WebP support, Flexbox Inspector, new tooling & platform updates](https://hacks.mozilla.org/2019/01/firefox-65-webp-flexbox-inspector-new-tooling/)

## Ältere Versionen

{{Firefox_for_developers}}
