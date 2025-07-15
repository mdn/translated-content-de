---
title: Firefox 65 für Entwickler
short-title: Firefox 65
slug: Mozilla/Firefox/Releases/65
l10n:
  sourceCommit: 64df508685abcbc047f6c1a973505921fad1484e
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 65, die Entwickler betreffen werden. Firefox 65 wurde am 29. Januar 2019 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Der [Flexbox-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_flexbox_layouts/index.html) ist jetzt standardmäßig aktiviert.
- Es wurde Unterstützung zum [JavaScript-Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) für XHR-Breakpoints hinzugefügt ([Firefox-Fehler 821610](https://bugzil.la/821610)).
- Klicken Sie mit der rechten Maustaste auf ein Element im Zugänglichkeitsbaum im Zugänglichkeits-Viewer, um es als [JSON zu drucken](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#print-accessibility-tree-to-json) im JSON-Viewer.
- Die Anzeige des [Farbkontrasts](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#color-contrast) des Zugänglichkeits-Auswählers wurde so aktualisiert, dass bei komplexen Hintergründen (z. B. einem Verlauf oder einem komplexen Bild) eine Bandbreite von Farbkontrastwerten angezeigt wird.
- Der Kopfzeilen-Tab des [Netzwerk-Monitors](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) zeigt jetzt die Referrer-Richtlinie für die ausgewählte Anfrage an ([Firefox-Fehler 1496742](https://bugzil.la/1496742)).
- Beim Anzeigen von Stapelverfolgungen (z. B. in Konsolenprotokollen oder im JavaScript-Debugger) werden Aufrufe an Framework-Methoden standardmäßig identifiziert und zusammengeklappt, was es einfacher macht, sich auf Ihren Code zu konzentrieren.
- Ähnlich wie bei nativen Terminals können Sie jetzt eine Rückwärtssuche verwenden, um Einträge in Ihrem JavaScript-Konsolenverlauf zu finden (`F9` unter Windows/Linux oder `Ctrl` + `R` auf macOS, dann einen Suchbegriff eingeben, gefolgt von `Ctrl` + `R`/`Ctrl` + `S`, um durch die Ergebnisse zu wechseln).
- Der `$0`-Shortcut der JavaScript-Konsole (verweist auf das aktuell inspizierte Element auf der Seite) hat jetzt eine Autovervollständigung, sodass Sie zum Beispiel `$0.te` eingeben könnten, um Autovervollständigungsvorschläge für Eigenschaften wie `$0.textContent` zu erhalten.
- Die Bearbeitungen, die Sie in der Regelansicht des Inspektors vornehmen, werden jetzt im Änderungen-Panel aufgelistet ([Firefox-Fehler 1503920](https://bugzil.la/1503920)).

### HTML

- Ereignisse werden jetzt auf deaktivierten HTML-Elementen ausgelöst, d.h. {{htmlelement("button")}}, {{htmlelement("fieldset")}}, {{htmlelement("input")}}, {{htmlelement("select")}} und {{htmlelement("textarea")}}-Elemente mit gesetzten `disabled`-Attributen ([Firefox-Fehler 329509](https://bugzil.la/329509)).
- Das Entfernen des `src`-Attributs eines {{htmlelement("iframe")}}-Elements bewirkt jetzt, dass `about:blank` darin geladen wird, wodurch es mit Chrome und Safari gleichgestellt wird ([Firefox-Fehler 1507842](https://bugzil.la/1507842)). Früher hatte das Entfernen von `src` keinen Einfluss auf den Inhalt des `iframe`.
- Wir haben Unterstützung für das [`referrerpolicy`](/de/docs/Web/HTML/Reference/Elements/script#referrerpolicy)-Attribut auf {{htmlelement("script")}}-Elementen hinzugefügt ([Firefox-Fehler 1460920](https://bugzil.la/1460920)).

### CSS

- Der `crisp-edges`-Wert der {{cssxref("image-rendering")}}-Eigenschaft wurde jetzt unpräfixiert ([Firefox-Fehler 1496617](https://bugzil.la/1496617)).
- Ein {{cssxref("scrollbar-color")}}-Wert von `auto` löst sich jetzt auf `auto` auf, anstatt auf zwei Farben ([Firefox-Fehler 1501418](https://bugzil.la/1501418)).
- Die `break-*`-Eigenschaften wurden implementiert, und die veralteten `page-break-*`-Eigenschaften wurden auf sie aliasiert ([Firefox-Fehler 775618](https://bugzil.la/775618)):
  - {{cssxref("break-before")}} ist jetzt ein Alias für {{cssxref("page-break-before")}}.
  - {{cssxref("break-after")}} ist jetzt ein Alias für {{cssxref("page-break-after")}}.
  - {{cssxref("break-inside")}} ist jetzt ein Alias für {{cssxref("page-break-inside")}}.

- Der `anywhere`-Wert der {{cssxref("overflow-wrap")}}-Eigenschaft wurde implementiert ([Firefox-Fehler 1505786](https://bugzil.la/1505786)).
- Die neuen Stufenpositionsschlüsselwörter `jump-start`, `jump-end`, `jump-none`, und `jump-both` — nutzbar innerhalb der [`steps()`-Timing-Funktion](/de/docs/Web/CSS/easing-function/steps) — wurden implementiert ([Firefox-Fehler 1496619](https://bugzil.la/1496619)). Dies fällt auch mit der Entfernung der `frames()`-Timing-Funktion zusammen, die die vorherige Methode zur Implementierung solcher Funktionalität war, nun veraltet.
- Einige neue {{cssxref("appearance", "-webkit-appearance")}}-Werte wurden hinzugefügt, um die Kompatibilität mit anderen Browsern zu gewährleisten. Insbesondere:
  - `meter`, das jetzt als Standardwert für {{htmlelement("meter")}}-Elemente in UA-Stylesheets verwendet wird. Der bestehende Wert `meterbar` ist jetzt ein Alias für `meter` ([Firefox-Fehler 1501483](https://bugzil.la/1501483)).
  - `progress-bar`, das jetzt als Standardwert für {{htmlelement("progress")}}-Elemente in UA-Stylesheets verwendet wird. Der bestehende Wert `progressbar` ist jetzt ein Alias für `progress-bar` ([Firefox-Fehler 1501506](https://bugzil.la/1501506)).
  - `textarea`, das jetzt als Standardwert für {{htmlelement("textarea")}}-Elemente in UA-Stylesheets verwendet wird. Der bestehende Wert `textfield-multiline` ist jetzt ein Alias für `textarea` ([Firefox-Fehler 1507905](https://bugzil.la/1507905)).

- Das Verhalten der {{cssxref("user-select")}}-Eigenschaft wurde geändert, um es besser mit anderen Browsern abzustimmen ([Firefox-Fehler 1506547](https://bugzil.la/1506547)). Insbesondere:
  - `user-select: all` auf ein Element gesetzt, überschreibt nicht mehr andere Werte von `user-select`, die auf Kindern dieses Elements gesetzt sind. So wird im folgenden Ausschnitt:

    ```html
    <div style="-webkit-user-select: all">
      All
      <div style="-webkit-user-select: none">None</div>
    </div>
    ```

    Das `<div>` mit `none` darauf gesetzt, ist jetzt nicht mehr auswählbar. Bisher wäre dieser Wert vom `all`-Wert auf dem übergeordneten Element überschrieben worden.

  - nicht-`contenteditable`-Elemente, die in `contenteditable`-Elementen geschachtelt sind, sind jetzt auswählbar.
  - `user-select` verhält sich nun konsistent innerhalb und außerhalb von Shadow-DOM.
  - Der proprietäre `-moz-text`-Wert wurde entfernt.

- CSS-Umgebungsvariablen (die {{cssxref("env", "env()")}}-Funktion) wurden implementiert ([Firefox-Fehler 1462233](https://bugzil.la/1462233)).

#### Entfernungen

- Die Voreinstellung `layout.css.shape-outside.enabled` wurde entfernt; {{cssxref("shape-outside")}}, {{cssxref("shape-margin")}}, und {{cssxref("shape-image-threshold")}} können nicht mehr in `about:config` deaktiviert werden ([Firefox-Fehler 1504387](https://bugzil.la/1504387)).
- Mehrere ausschließlich in Firefox vorhandene Werte der {{cssxref("user-select")}}-Eigenschaft wurden entfernt — `-moz-all`, `-moz-text`, `tri-state`, `element`, `elements`, und `toggle`. Siehe [Firefox-Fehler 1492958](https://bugzil.la/1492958) und [Firefox-Fehler 1506547](https://bugzil.la/1506547).
- Wie oben erwähnt, wurde die `frames()`-Timing-Funktion entfernt ([Firefox-Fehler 1496619](https://bugzil.la/1496619)).

### SVG

_Keine Änderungen._

### JavaScript

- {{jsxref("Intl/RelativeTimeFormat", "Intl.RelativeTimeFormat")}} wird jetzt unterstützt ([Firefox-Fehler 1504334](https://bugzil.la/1504334)).
- Zeichenfolgen haben jetzt eine maximale {{jsxref("String/length","length","", 1)}} von `2**30 - 2` (\~1GB) statt `2**28 - 1` (\~256MB) ([Firefox-Fehler 1509542](https://bugzil.la/1509542)).
- Die {{jsxref("globalThis")}}-Eigenschaft, die stets auf das oberste globale Objekt verweist, wurde implementiert ([Firefox-Fehler 1317422](https://bugzil.la/1317422)).

### APIs

#### Neue APIs

- [Readable Streams](/de/docs/Web/API/Streams_API/Using_readable_streams) wurden standardmäßig aktiviert ([Firefox-Fehler 1505122](https://bugzil.la/1505122)).
- Die [Storage Access API](/de/docs/Web/API/Storage_Access_API) wurde standardmäßig aktiviert ([Firefox-Fehler 1513021](https://bugzil.la/1513021)).

#### DOM

- [`Performance.toJSON()`](/de/docs/Web/API/Performance/toJSON) wurde für [Web Worker](/de/docs/Web/API/Web_Workers_API) verfügbar gemacht ([Firefox-Fehler 1504958](https://bugzil.la/1504958)).
- Anfragen zu [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) werfen jetzt einen `NetworkError`, wenn der angeforderte Inhaltstyp ein `Blob` ist und die Anfragemethode nicht `GET` ist ([Firefox-Fehler 1502599](https://bugzil.la/1502599)).
- Die mit `-moz-` voreingestellten Versionen vieler Funktionen der [Fullscreen API](/de/docs/Web/API/Fullscreen_API) wurden veraltet, und jetzt werden Deprecation-Warnungen in der JavaScript-Konsole angezeigt, wenn sie angetroffen werden ([Firefox-Fehler 1504946](https://bugzil.la/1504946)).
- [`Window.createImageBitmap()`](/de/docs/Web/API/Window/createImageBitmap) und [`WorkerGlobalScope.createImageBitmap()`](/de/docs/Web/API/WorkerGlobalScope/createImageBitmap) unterstützen jetzt SVG-Bilder ([`SVGImageElement`](/de/docs/Web/API/SVGImageElement)) als Bildquelle ([Firefox-Fehler 1500768](https://bugzil.la/1500768)).

#### DOM-Ereignisse

- Zukünftig ist pro Ereignis nur ein [`Window.open()`](/de/docs/Web/API/Window/open)-Aufruf erlaubt ([Firefox-Fehler 675574](https://bugzil.la/675574)).
- Die [`keyup`](/de/docs/Web/API/Element/keyup_event)- und [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignisse werden jetzt während der IME-Komposition ausgelöst, um die Browser-Kompatibilität für CJKT-Benutzer zu verbessern ([Firefox-Fehler 354358](https://bugzil.la/354358)).

#### Web Worker

- Das Ereignisobjekt von [`SharedWorkerGlobalScope.connect`](/de/docs/Web/API/SharedWorkerGlobalScope/connect_event) ist eine Instanz von [`MessageEvent`](/de/docs/Web/API/MessageEvent) — seine `data`-Eigenschaft ist jetzt ein leerer Zeichenfolgenwert anstelle von `null` ([Firefox-Fehler 1508824](https://bugzil.la/1508824)).

#### Fetch und Service Worker

- Die Methode [`Response.redirect()`](/de/docs/Web/API/Response/redirect_static) wirft jetzt korrekt einen `TypeError`, wenn eine ungültige URL als erster Parameter angegeben wird ([Firefox-Fehler 1503276](https://bugzil.la/1503276)).
- Die Methoden [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) und [`WorkerGlobalScope.importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts) (wenn sie von einem Service Worker verwendet werden) akzeptieren jetzt alle Dateien mit einem gültigen [JavaScript MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types#textjavascript) ([Firefox-Fehler 1354577](https://bugzil.la/1354577)).
- Die Eigenschaften [`FetchEvent.replacesClientId`](/de/docs/Web/API/FetchEvent/replacesClientId) und [`FetchEvent.resultingClientId`](/de/docs/Web/API/FetchEvent/resultingClientId) werden jetzt unterstützt ([Firefox-Fehler 1264177](https://bugzil.la/1264177)).
- Die Handler-Eigenschaften [`ServiceWorkerGlobalScope.onmessageerror`](/de/docs/Web/API/ServiceWorkerGlobalScope/messageerror_event) und [`ServiceWorkerContainer.onmessageerror`](/de/docs/Web/API/ServiceWorkerContainer/messageerror_event) wurden implementiert ([Firefox-Fehler 1399446](https://bugzil.la/1399446)).
- Der {{httpheader("Origin")}}-Header wird bei Fetch-Anfragen mit der Methode {{HTTPMethod("HEAD")}} oder {{HTTPMethod("GET")}} nicht mehr gesetzt ([Firefox-Fehler 1508661](https://bugzil.la/1508661)).

#### Medien, Web Audio und WebRTC

- Das [WebRTC](/de/docs/Web/API/WebRTC_API)-Wörterbuch [`RTCIceCandidateStats`](/de/docs/Web/API/RTCIceCandidateStats) wurde gemäß den neuesten Spezifikationsänderungen aktualisiert ([Firefox-Fehler 1324788](https://bugzil.la/1324788), [Firefox-Fehler 1489040](https://bugzil.la/1489040); RTCIceCandidateStats wurde auf die neueste Spezifikation aktualisiert, um genauere Informationen über die Änderungen zu erhalten).
- Die Ereignisse `pause` und `resume` (und ihre entsprechenden Ereignishandler-Eigenschaften) des [`MediaRecorder`](/de/docs/Web/API/MediaRecorder) waren zuvor nicht implementiert, obwohl die Kompatibilitätstabellen behaupteten, dass sie es schon waren. Sie wurden jetzt implementiert ([Firefox-Fehler 1458538](https://bugzil.la/1458538), [Firefox-Fehler 1514016](https://bugzil.la/1514016)).

#### Canvas und WebGL

- Die [WebGL](/de/docs/Web/API/WebGL_API)-Texturkompressionserweiterungen [`EXT_texture_compression_bptc`](/de/docs/Web/API/EXT_texture_compression_bptc) und [`EXT_texture_compression_rgtc`](/de/docs/Web/API/EXT_texture_compression_rgtc) wurden für WebGL1- und WebGL2-Kontexte verfügbar gemacht ([Firefox-Fehler 1507263](https://bugzil.la/1507263)).

#### Entfernungen

- [Mutationsereignisse](/de/docs/Web/API/MutationEvent) wurden in Shadow Trees deaktiviert ([Firefox-Fehler 1489858](https://bugzil.la/1489858)).
- Die nicht standardmäßige [`MediaStream`](/de/docs/Web/API/MediaStream)-Eigenschaft `currentTime` wurde entfernt ([Firefox-Fehler 1502927](https://bugzil.la/1502927)).
- Die Voreinstellungen `dom.webcomponents.shadowdom.enabled` und `dom.webcomponents.customelements.enabled` wurden entfernt — Shadow DOM und benutzerdefinierte Elemente können nicht mehr in `about:config` deaktiviert werden ([Firefox-Fehler 1503019](https://bugzil.la/1503019)).
- Das nicht standardmäßige DOM-`text`-Ereignis — ausgelöst, um die Browser-Editor-UI über IME-Zusammensetzungsdaten und Auswahlbereiche zu informieren — wurde entfernt ([Firefox-Fehler 1288640](https://bugzil.la/1288640)).
- Das [`keypress`](/de/docs/Web/API/Element/keypress_event)-Ereignis wird nicht mehr für [nicht druckbare Tasten](/de/docs/Web/API/KeyboardEvent/keyCode#non-printable_keys_function_keys) ausgelöst ([Firefox-Fehler 968056](https://bugzil.la/968056)), außer für die `Enter`-Taste und die `Shift` + `Enter`- und `Ctrl` + `Enter`-Tastenkombinationen (diese wurden aus Gründen der Browser-Kompatibilität beibehalten).

### Sicherheit

- Zusätzliche CORS-Beschränkungen werden jetzt auf zulässige Anforderungsheader durchgesetzt ([Firefox-Fehler 1483815](https://bugzil.la/1483815), siehe auch [whatwg fetch issue 382: CORS-safelisted request headers should be restricted according to RFC 7231](https://github.com/whatwg/fetch/issues/382) für weitere Details).

### Netzwerk

_Keine Änderungen._

### Plugins

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

#### API-Änderungen

- `WebDriver:ElementSendKeys` behandelt `<input type=file>` jetzt entspannter für Interaktivitätsprüfungen und erlaubt es diesen Elementen, verborgen zu sein, ohne mehr einen `not interactable`-Fehler zu verursachen. Wenn eine strikte Interaktivitätsprüfung gewünscht ist, kann die Fähigkeit `strictFileInteractability` verwendet werden ([Firefox-Fehler 1502864](https://bugzil.la/1502864)).

#### Fehlerbehebungen

- Die Fenster-Manipulationsbefehle `WebDriver:FullscreenWindow`, `WebDriver:MinimizeWindow`, `WebDriver:MaximizeWindow`, und `WebDriver:SetWindowRect` wurden stabiler gemacht ([Firefox-Fehler 1492499](https://bugzil.la/1492499)). Das bedeutet, dass sie unter besonderen Bedingungen keine unendliche Hängung mehr verursachen, sondern nach 5s auslaufen, wenn der angeforderte Fensterzustand nicht erreicht werden kann ([Firefox-Fehler 1521527](https://bugzil.la/1521527)).
- `WebDriver:ElementClick` berechnet jetzt korrekt den Mittelpunkt des Elements, das geklickt werden soll, was Interaktionen mit Dimensionen von 1x1 Pixeln ermöglicht ([Firefox-Fehler 1499360](https://bugzil.la/1499360)).

#### Sonstiges

- Für `unexpected alert open`-Fehler werden informativere Nachrichten bereitgestellt ([Firefox-Fehler 1502268](https://bugzil.la/1502268)).

### Sonstiges

- Unterstützung für {{Glossary("WebP", "WebP")}}-Bilder wurde hinzugefügt ([Firefox-Fehler 1294490](https://bugzil.la/1294490)).
  - Zusätzlich wurde der WebP-MIME-Typ (`image/webp`) aus Gründen der Browser-Kompatibilität in bestimmten Situationen als Standard-HTTP-Anforderungs-{{httpheader("Accept")}}-Header für HTML-Dateien hinzugefügt ([Firefox-Fehler 1507691](https://bugzil.la/1507691)).

- Der AV1-Codec wird jetzt standardmäßig unter Windows unterstützt ([Firefox-Fehler 1452146](https://bugzil.la/1452146)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

#### Tabs

- Die {{WebExtAPIRef("tabs", "tabs API", "", "1")}} wurde erweitert, um Tab-Nachfolger zu unterstützen — ein Tab kann einen Nachfolger zugewiesen bekommen, welcher die ID des Tabs ist, der aktiv wird, sobald er geschlossen wird ([Firefox-Fehler 1500479](https://bugzil.la/1500479), siehe auch [diesen Blogbeitrag](https://qiita.com/piroor/items/ea7e727735631c45a366) für mehr Informationen). Insbesondere:
  - Der {{WebExtAPIRef("tabs.Tab")}} Typ hat jetzt eine `successorId`-Eigenschaft, die verwendet werden kann, um die ID des Tab-Nachfolgers zu speichern/abzurufen.
  - Der Rückruf des {{WebExtAPIRef("tabs.onActivated")}}-Ereignislisteners hat einen neuen verfügbaren Parameter `previousTabId`, der die ID des vorher aktivierten Tabs enthält, wenn er noch offen ist.
  - Das `updateProperties`-Objekt der Funktion {{WebExtAPIRef("tabs.update()")}} hat eine neue optionale verfügbare Eigenschaft `successorTabId`, die verwendet werden kann, um es zu aktualisieren.
  - `successorTabId` wird auch von Funktionen wie {{WebExtAPIRef("tabs.get()")}} und {{WebExtAPIRef("tabs.query()")}} zurückgegeben.
  - Die neue Funktion `tabs.moveInSuccession()` ermöglicht die Manipulation von Tab-Nachfolgern in großer Zahl.

### Manifest-Änderungen

_Keine Änderungen._

### Sonstiges

- Die Eigenschaften `headerURL`/`theme_frame` für [WebExtension-Themen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) werden jetzt in Firefox für Android unterstützt ([Firefox-Fehler 1429488](https://bugzil.la/1429488)).

## Siehe auch

- Hacks Release-Post: [Firefox 65: WebP-Unterstützung, Flexbox-Inspektor, neue Tools und Plattform-Updates](https://hacks.mozilla.org/2019/01/firefox-65-webp-flexbox-inspector-new-tooling/)
