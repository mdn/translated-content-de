---
title: Firefox 65 für Entwickler
slug: Mozilla/Firefox/Releases/65
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 65, die Entwickler betreffen werden. Firefox 65 wurde am 29. Januar 2019 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Der [Flexbox-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_flexbox_layouts/index.html) ist jetzt standardmäßig aktiviert.
- Im [JavaScript-Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) wurde Unterstützung für XHR-Unterbrechungspunkte hinzugefügt ([Firefox-Bug 821610](https://bugzil.la/821610)).
- Klicken Sie mit der rechten Maustaste auf ein Element im Barrierefreiheitsbaum des Barrierefreiheitsbetrachters, um es als [JSON zu drucken](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#print-accessibility-tree-to-json) und im JSON-Viewer anzuzeigen.
- Die [Farbkontrastanzeige](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#color-contrast) des Barrierefreiheitspickers wurde aktualisiert, sodass bei komplexem Hintergrund eines Textes (z.B. ein Verlauf oder ein komplexes Bild) eine Bandbreite von Farbkontrastwerten angezeigt wird.
- Die Kopfleiste des [Netzwerk-Monitors](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) zeigt jetzt die Referrer-Policy für die ausgewählte Anfrage an ([Firefox-Bug 1496742](https://bugzil.la/1496742)).
- Bei der Anzeige von Stack-Traces (z.B. in Konsolen-Logs oder im JavaScript-Debugger) werden Aufrufe von Framework-Methoden standardmäßig identifiziert und eingeklappt, was die Fokussierung auf Ihren Code erleichtert.
- Analog zu nativen Terminals können Sie jetzt die umgekehrte Suche verwenden, um Einträge in Ihrem JavaScript-Konsolenverlauf zu finden (`F9` auf Windows/Linux oder `Ctrl` + `R` auf macOS, dann einen Suchbegriff eingeben, gefolgt von `Ctrl` + `R`/`Ctrl` + `S`, um durch die Ergebnisse zu blättern).
- Der `$0`-Shortcut der JavaScript-Konsole (verweist auf das aktuell inspizierte Element auf der Seite) hat jetzt eine Autovervollständigung, so dass Sie beispielsweise `$0.te` eingeben können, um Autovervollständigungsvorschläge für Eigenschaften wie `$0.textContent` zu erhalten.
- Die Änderungen, die Sie in der Regelliste des Inspektors vornehmen, werden nun im Änderungen-Panel aufgelistet ([Firefox-Bug 1503920](https://bugzil.la/1503920)).

### HTML

- Events werden jetzt auf deaktivierten HTML-Elementen ausgelöst, d.h. {{htmlelement("button")}}, {{htmlelement("fieldset")}}, {{htmlelement("input")}}, {{htmlelement("select")}} und {{htmlelement("textarea")}} Elemente mit `disabled` Attributen ([Firefox-Bug 329509](https://bugzil.la/329509)).
- Das Entfernen des `src` Attributs von einem {{htmlelement("iframe")}}-Element bewirkt nun, dass `about:blank` geladen wird, was mit Chrome und Safari gleichzieht ([Firefox-Bug 1507842](https://bugzil.la/1507842)). Zuvor hatte das Entfernen von `src` keine Auswirkung auf den `iframe`-Inhalt.
- Wir haben Unterstützung für das [`referrerpolicy`](/de/docs/Web/HTML/Element/script#referrerpolicy) Attribut bei {{htmlelement("script")}}-Elementen hinzugefügt ([Firefox-Bug 1460920](https://bugzil.la/1460920)).

### CSS

- Der `crisp-edges` Wert der {{cssxref("image-rendering")}} Eigenschaft ist jetzt unverändert ([Firefox-Bug 1496617](https://bugzil.la/1496617)).
- Ein {{cssxref("scrollbar-color")}} Wert von `auto` wird jetzt zu `auto` aufgelöst, anstatt zu zwei Farben ([Firefox-Bug 1501418](https://bugzil.la/1501418)).
- Die `break-*` Eigenschaften sind implementiert worden, und die veralteten `page-break-*` Eigenschaften sind zu ihnen umgeleitet worden ([Firefox-Bug 775618](https://bugzil.la/775618)):

  - {{cssxref("break-before")}} ist jetzt ein Alias für {{cssxref("page-break-before")}}.
  - {{cssxref("break-after")}} ist jetzt ein Alias für {{cssxref("page-break-after")}}.
  - {{cssxref("break-inside")}} ist jetzt ein Alias für {{cssxref("page-break-inside")}}.

- Die `anywhere` Wert der {{cssxref("overflow-wrap")}} Eigenschaft wurde implementiert ([Firefox-Bug 1505786](https://bugzil.la/1505786)).
- Die neuen Schrittpositions-Keywords `jump-start`, `jump-end`, `jump-none`, und `jump-both` — die innerhalb der [`steps()` Timing-Funktion](/de/docs/Web/CSS/easing-function/steps) verwendet werden können — sind implementiert worden ([Firefox-Bug 1496619](https://bugzil.la/1496619)). Dies fällt auch mit der Entfernung der `frames()` Timing-Funktion zusammen, die zuvor zur Implementierung einer solchen Funktionalität verwendet wurde und jetzt veraltet ist.
- Einige neue {{cssxref("appearance", "-webkit-appearance")}} Werte wurden hinzugefügt, um die Kompatibilität mit anderen Browsern zu verbessern. Insbesondere:

  - `meter`, das jetzt der Standardwert für {{htmlelement("meter")}}-Elemente in UA-Stylesheets ist. Der bestehende Wert `meterbar` ist jetzt ein Alias für `meter` ([Firefox-Bug 1501483](https://bugzil.la/1501483)).
  - `progress-bar`, das jetzt der Standardwert für {{htmlelement("progress")}}-Elemente in UA-Stylesheets ist. Der bestehende Wert `progressbar` ist jetzt ein Alias für `progress-bar` ([Firefox-Bug 1501506](https://bugzil.la/1501506)).
  - `textarea`, das jetzt der Standardwert für {{htmlelement("textarea")}}-Elemente in UA-Stylesheets ist. Der bestehende Wert `textfield-multiline` ist jetzt ein Alias für `textarea` ([Firefox-Bug 1507905](https://bugzil.la/1507905)).

- Das Verhalten von {{cssxref("user-select")}} wurde geändert, um es besser mit anderen Browsern abzustimmen ([Firefox-Bug 1506547](https://bugzil.la/1506547)). Insbesondere:

  - `user-select: all` auf einem Element überschreibt nicht länger andere Werte von `user-select`, die auf den Nachkommen dieses Elements gesetzt sind. So ist z.B. in folgendem Code-Schnipsel:

    ```html
    <div style="-webkit-user-select: all">
      All
      <div style="-webkit-user-select: none">None</div>
    </div>
    ```

    Das `<div>` mit `none` Wert darauf ist jetzt nicht mehr auswählbar. Zuvor wäre dieser Wert durch den `all` Wert des Elternelements überschrieben worden.

  - Nicht-`contenteditable`-Elemente, die in `contenteditable`-Elementen verschachtelt sind, sind jetzt auswählbar.
  - `user-select` verhält sich jetzt konsistent innerhalb und außerhalb vom Shadow DOM.
  - Der proprietäre `-moz-text` Wert wurde entfernt.

- CSS-Umgebungsvariablen (die {{cssxref("env", "env()")}} Funktion) wurden implementiert ([Firefox-Bug 1462233](https://bugzil.la/1462233)).

#### Entfernungen

- Die `layout.css.shape-outside.enabled` Voreinstellung wurde entfernt; {{cssxref("shape-outside")}}, {{cssxref("shape-margin")}}, und {{cssxref("shape-image-threshold")}} können nicht mehr in `about:config` deaktiviert werden ([Firefox-Bug 1504387](https://bugzil.la/1504387)).
- Mehrere Firefox-spezifische Werte der {{cssxref("user-select")}} Eigenschaft wurden entfernt — `-moz-all`, `-moz-text`, `tri-state`, `element`, `elements`, und `toggle`. Siehe [Firefox-Bug 1492958](https://bugzil.la/1492958) und [Firefox-Bug 1506547](https://bugzil.la/1506547).
- Wie oben erwähnt, wurde die `frames()` Timing-Funktion entfernt ([Firefox-Bug 1496619](https://bugzil.la/1496619)).

### SVG

_Keine Änderungen._

### JavaScript

- {{jsxref("Intl/RelativeTimeFormat", "Intl.RelativeTimeFormat")}} wird jetzt unterstützt ([Firefox-Bug 1504334](https://bugzil.la/1504334)).
- Strings haben jetzt eine maximale {{jsxref("String/length","length","", 1)}} von `2**30 - 2` (\~1GB) anstelle von `2**28 - 1` (\~256MB) ([Firefox-Bug 1509542](https://bugzil.la/1509542)).
- Die {{jsxref("globalThis")}} Eigenschaft, die immer auf das obere globale Objekt verweist, wurde implementiert ([Firefox-Bug 1317422](https://bugzil.la/1317422)).

### APIs

#### Neue APIs

- [Lesbare Streams](/de/docs/Web/API/Streams_API/Using_readable_streams) wurden standardmäßig aktiviert ([Firefox-Bug 1505122](https://bugzil.la/1505122)).
- Die [Storage Access API](/de/docs/Web/API/Storage_Access_API) wurde standardmäßig aktiviert ([Firefox-Bug 1513021](https://bugzil.la/1513021)).

#### DOM

- [`Performance.toJSON()`](/de/docs/Web/API/Performance/toJSON) wurde für [Web-Worker](/de/docs/Web/API/Web_Workers_API) verfügbar gemacht ([Firefox-Bug 1504958](https://bugzil.la/1504958)).
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) Anfragen werden jetzt einen `NetworkError` erzeugen, wenn der angeforderte Inhaltstyp ein `Blob` ist und die Anfragemethode nicht `GET` ist ([Firefox-Bug 1502599](https://bugzil.la/1502599)).
- Die `-moz-`-Präfix-Versionen vieler der [Fullscreen API](/de/docs/Web/API/Fullscreen_API) Funktionen wurden veraltet erklärt, und zeigen jetzt Veralterungswarnungen in der JavaScript-Konsole ([Firefox-Bug 1504946](https://bugzil.la/1504946)).
- [`Window.createImageBitmap()`](/de/docs/Web/API/Window/createImageBitmap) und [`WorkerGlobalScope.createImageBitmap()`](/de/docs/Web/API/WorkerGlobalScope/createImageBitmap) unterstützen jetzt SVG-Bilder ([`SVGImageElement`](/de/docs/Web/API/SVGImageElement)) als Bildquelle ([Firefox-Bug 1500768](https://bugzil.la/1500768)).

#### DOM-Ereignisse

- Künftig wird nur noch ein [`Window.open()`](/de/docs/Web/API/Window/open) Aufruf pro Ereignis erlaubt sein ([Firefox-Bug 675574](https://bugzil.la/675574)).
- Die [`keyup`](/de/docs/Web/API/Element/keyup_event) und [`keydown`](/de/docs/Web/API/Element/keydown_event) Ereignisse werden jetzt während der IME-Zusammensetzung ausgelöst, um die Kompatibilität zwischen Browsern für CJKT-Nutzer zu verbessern ([Firefox-Bug 354358](https://bugzil.la/354358)).

#### Webworker

- Das Ereignisobjekt von [`SharedWorkerGlobalScope.connect`](/de/docs/Web/API/SharedWorkerGlobalScope/connect_event) ist eine Instanz von [`MessageEvent`](/de/docs/Web/API/MessageEvent) — seine `data`-Eigenschaft ist nun ein leerer Zeichenfolgenwert anstelle von `null` ([Firefox-Bug 1508824](https://bugzil.la/1508824)).

#### Fetch und Service Worker

- Die Methode [`Response.redirect()`](/de/docs/Web/API/Response/redirect_static) wirft jetzt korrekterweise einen `TypeError`, wenn eine ungültige URL als erstes Parameter angegeben wird ([Firefox-Bug 1503276](https://bugzil.la/1503276)).
- Die Methoden [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) und [`WorkerGlobalScope.importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts) (wenn von einem Service Worker verwendet) akzeptieren jetzt alle Dateien mit einem gültigen [JavaScript MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types#textjavascript) ([Firefox-Bug 1354577](https://bugzil.la/1354577)).
- Die Eigenschaften [`FetchEvent.replacesClientId`](/de/docs/Web/API/FetchEvent/replacesClientId) und [`FetchEvent.resultingClientId`](/de/docs/Web/API/FetchEvent/resultingClientId) werden jetzt unterstützt ([Firefox-Bug 1264177](https://bugzil.la/1264177)).
- Die Eigenschafts-Handler [`ServiceWorkerGlobalScope.onmessageerror`](/de/docs/Web/API/ServiceWorkerGlobalScope/messageerror_event) und [`ServiceWorkerContainer.onmessageerror`](/de/docs/Web/API/ServiceWorkerContainer/messageerror_event) wurden implementiert ([Firefox-Bug 1399446](https://bugzil.la/1399446)).
- Der {{httpheader("Origin")}} Header wird nicht mehr bei Fetch-Anfragen mit der Methode {{HTTPMethod("HEAD")}} oder {{HTTPMethod("GET")}} gesetzt ([Firefox-Bug 1508661](https://bugzil.la/1508661)).

#### Media, Web Audio, und WebRTC

- Das [WebRTC](/de/docs/Web/API/WebRTC_API) [`RTCIceCandidateStats`](/de/docs/Web/API/RTCIceCandidateStats) Wörterbuch wurde gemäß den neuesten Spezifikationsänderungen aktualisiert ([Firefox-Bug 1324788](https://bugzil.la/1324788), [Firefox-Bug 1489040](https://bugzil.la/1489040); RTCIceCandidateStats wurde auf die neueste Spezifikation aktualisiert, um mehr Details darüber zu bieten, was genau sich geändert hat).
- Die `pause` und `resume` Ereignisse des [`MediaRecorders`](/de/docs/Web/API/MediaRecorder) (und deren entsprechende Ereignis-Handler-Objekte wurden bisher nicht implementiert, obwohl die Kompatibilitätstabellen dies behaupteten. Sie wurden nun implementiert ([Firefox-Bug 1458538](https://bugzil.la/1458538), [Firefox-Bug 1514016](https://bugzil.la/1514016)).

#### Canvas und WebGL

- Die [WebGL](/de/docs/Web/API/WebGL_API) [`EXT_texture_compression_bptc`](/de/docs/Web/API/EXT_texture_compression_bptc) und [`EXT_texture_compression_rgtc`](/de/docs/Web/API/EXT_texture_compression_rgtc) Texturkomprimierungs-Erweiterungen wurden für WebGL1 und WebGL2 Kontexte verfügbar gemacht ([Firefox-Bug 1507263](https://bugzil.la/1507263)).

#### Entfernungen

- [Mutation Events](/de/docs/Web/API/MutationEvent) wurden in Schattenbäumen deaktiviert ([Firefox-Bug 1489858](https://bugzil.la/1489858)).
- Die nicht standardisierte [`MediaStream`](/de/docs/Web/API/MediaStream) Eigenschaft `currentTime` wurde entfernt ([Firefox-Bug 1502927](https://bugzil.la/1502927)).
- Die `dom.webcomponents.shadowdom.enabled` und `dom.webcomponents.customelements.enabled` Einstellungen wurden entfernt — Shadow DOM und Custom Elements können nicht mehr in `about:config` deaktiviert werden ([Firefox-Bug 1503019](https://bugzil.la/1503019)).
- Das nicht standardisierte DOM-Event `text` — ausgelöst, um die Browser-Editor-Oberfläche über IME-Kompositionszeichenfolgen-Daten und Auswahlbereiche zu informieren — wurde entfernt ([Firefox-Bug 1288640](https://bugzil.la/1288640)).
- Das [`keypress`](/de/docs/Web/API/Element/keypress_event) Ereignis wird nicht mehr für [nicht-druckbare Tasten](</de/docs/Web/API/KeyboardEvent/keyCode#non-printable_keys_(function_keys)>) ausgelöst ([Firefox-Bug 968056](https://bugzil.la/968056)), außer für die `Enter`-Taste und die Kombinationen `Shift` + `Enter` und `Ctrl` + `Enter` (diese wurden aus Kompatibilitätsgründen beibehalten).

### Sicherheit

- Zusätzliche CORS-Einschränkungen werden jetzt für erlaubte Anforderungsheader durchgesetzt ([Firefox-Bug 1483815](https://bugzil.la/1483815), siehe auch [whatwg fetch issue 382: CORS-safelisted request headers should be restricted according to RFC 7231](https://github.com/whatwg/fetch/issues/382) für weitere Details).

### Netzwerktechnik

_Keine Änderungen._

### Plugins

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

#### API-Änderungen

- `WebDriver:ElementSendKeys` behandelt `<input type=file>` jetzt entspannter für Überprüfungen der Interaktivität und erlaubt es, diese Elemente verborgen zu haben, ohne einen `nicht interaktiv` Fehler zu provozieren. Wenn eine strikte Interaktivitätsprüfung gewünscht wird, kann die Fähigkeit `strictFileInteractability` verwendet werden ([Firefox-Bug 1502864](https://bugzil.la/1502864)).

#### Fehlerbehebungen

- Die Fenster-Manipulationsbefehle `WebDriver:FullscreenWindow`, `WebDriver:MinimizeWindow`, `WebDriver:MaximizeWindow` und `WebDriver:SetWindowRect` sind stabiler gemacht worden ([Firefox-Bug 1492499](https://bugzil.la/1492499)). Das bedeutet, dass sie unter speziellen Bedingungen keinen unendlichen Stillstand mehr verursachen, sondern stattdessen nach 5 Sekunden eine Zeitüberschreitung verursachen, wenn der angeforderte Fensterstatus nicht erreicht werden kann ([Firefox-Bug 1521527](https://bugzil.la/1521527)).
- `WebDriver:ElementClick` berechnet jetzt den Mittelpunkt des zu klickenden Elements korrekt, was jetzt Interaktionen mit Abmessungen von 1x1 Pixel erlaubt ([Firefox-Bug 1499360](https://bugzil.la/1499360)).

#### Sonstiges

- Bei `unerwartet geöffneten Alarm` Fehlern werden mehr informative Meldungen bereitgestellt ([Firefox-Bug 1502268](https://bugzil.la/1502268)).

### Sonstiges

- Unterstützung für {{Glossary("WebP", "WebP")}} Bilder wurde hinzugefügt ([Firefox-Bug 1294490](https://bugzil.la/1294490)).

  - Zusätzlich wurde zur Erleichterung der Browser-Kompatibilität in bestimmten Situationen der MIMEType von WebP (`image/webp`) zum Standard-HTTP-Request-{{httpheader("Accept")}}-Header für HTML-Dateien hinzugefügt ([Firefox-Bug 1507691](https://bugzil.la/1507691)).

- Der AV1 Codec wird jetzt standardmäßig unter Windows unterstützt ([Firefox-Bug 1452146](https://bugzil.la/1452146)).

## Änderungen für Add-on Entwickler

### API-Änderungen

#### Tabs

- Die {{WebExtAPIRef("tabs", "tabs API", "", "1")}} wurde erweitert, um Tab-Nachfolger zu unterstützen — ein Tab kann einen Nachfolger haben, der die ID des Tabs ist, der aktiviert wird, sobald es geschlossen wird ([Firefox-Bug 1500479](https://bugzil.la/1500479), siehe auch [diesen Blog-Post](https://qiita.com/piroor/items/ea7e727735631c45a366) für mehr Informationen). Insbesondere:

  - Der {{WebExtAPIRef("tabs.Tab")}} Typ hat jetzt eine `successorId` Eigenschaft, die verwendet werden kann, um die ID des Tab-Nachfolgers zu speichern/abzurufen.
  - Der Rückruf der Ereignisüberwachung {{WebExtAPIRef("tabs.onActivated")}} hat einen neuen verfügbaren Parameter, `previousTabId`, der die ID des vorher aktivierten Tabs enthält, falls es noch geöffnet ist.
  - Das `updateProperties` Objekt der {{WebExtAPIRef("tabs.update()")}} Funktion hat eine neue optionale Eigenschaft, `successorTabId`, die verwendet werden kann, um es zu aktualisieren.
  - `successorTabId` wird auch von Funktionen wie {{WebExtAPIRef("tabs.get()")}} und {{WebExtAPIRef("tabs.query()")}} zurückgegeben.
  - Die neue Funktion `tabs.moveInSuccession()` ermöglicht die Manipulation von Tab-Nachfolgern in Massen.

### Manifest-Änderungen

_Keine Änderungen._

### Sonstiges

- Die `headerURL`/`theme_frame` Eigenschaften für [WebExtension-Themen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) werden jetzt auf Firefox für Android unterstützt ([Firefox-Bug 1429488](https://bugzil.la/1429488)).

## Siehe auch

- Hacks Release-Beitrag: [Firefox 65: WebP support, Flexbox Inspector, new tooling & platform updates](https://hacks.mozilla.org/2019/01/firefox-65-webp-flexbox-inspector-new-tooling/)

## Ältere Versionen

{{Firefox_for_developers}}
