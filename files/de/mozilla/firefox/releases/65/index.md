---
title: Firefox 65 für Entwickler
slug: Mozilla/Firefox/Releases/65
l10n:
  sourceCommit: 2d337c37fb3ae7d7a32b5c372366bc7f97ff2602
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 65, die sich auf Entwickler auswirken. Firefox 65 wurde am 29. Januar 2019 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklertools

- Der [Flexbox-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_flexbox_layouts/index.html) ist jetzt standardmäßig aktiviert.
- Dem [JavaScript-Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) wurde Unterstützung für XHR-Breakpoints hinzugefügt ([Firefox-Bug 821610](https://bugzil.la/821610)).
- Klicken Sie mit der rechten Maustaste auf ein Element im Barrierefreiheitsbaum des Barrierefreiheitsbetrachters, um es [als JSON zu drucken](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#print-accessibility-tree-to-json) zum JSON-Viewer.
- Die Anzeige des [Farbkontrasts](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#color-contrast) im Barrierefreiheit-Auswahlwerkzeug wurde aktualisiert. Wenn der Hintergrund eines Textes komplex ist (z. B. ein Verlauf oder komplexes Bild), wird eine Bandbreite von Farbkontrastwerten angezeigt.
- Die Registerkarte "Headers" des [Netzwerkmonitors](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) zeigt nun die Referrer-Policy für die ausgewählte Anfrage an ([Firefox-Bug 1496742](https://bugzil.la/1496742)).
- Beim Anzeigen von Stack-Traces (z. B. in Konsolenprotokollen oder dem JavaScript-Debugger) werden Aufrufe zu Framework-Methoden standardmäßig identifiziert und zusammengeklappt, was es erleichtert, sich auf den eigenen Code zu konzentrieren.
- Ähnlich wie bei nativen Terminals können Sie jetzt eine umgekehrte Suche verwenden, um Einträge in Ihrem JavaScript-Konsolenverlauf zu finden (`F9` auf Windows/Linux oder `Ctrl` + `R` auf macOS, dann einen Suchbegriff eingeben, gefolgt von `Ctrl` + `R`/`Ctrl` + `S`, um durch die Ergebnisse zu schalten).
- Die `$0`-Verknüpfung der JavaScript-Konsole (verweist auf das aktuell untersuchte Element auf der Seite) verfügt jetzt über eine Autovervollständigung, sodass Sie beispielsweise `$0.te` eingeben könnten, um Autovervollständigungsvorschläge für Eigenschaften wie `$0.textContent` zu erhalten.
- Die von Ihnen im Regelansichtsbereich des Inspektors vorgenommenen Änderungen werden jetzt im Änderungsprotokollbereich aufgelistet ([Firefox-Bug 1503920](https://bugzil.la/1503920)).

### HTML

- Ereignisse werden jetzt auf deaktivierten HTML-Elementen ausgelöst, d.h. {{htmlelement("button")}}, {{htmlelement("fieldset")}}, {{htmlelement("input")}}, {{htmlelement("select")}} und {{htmlelement("textarea")}}-Elemente mit gesetztem `disabled`-Attribut ([Firefox-Bug 329509](https://bugzil.la/329509)).
- Das Entfernen des `src`-Attributs eines {{htmlelement("iframe")}}-Elements bewirkt jetzt, dass `about:blank` darin geladen wird, um mit Chrome und Safari gleichzuziehen ([Firefox-Bug 1507842](https://bugzil.la/1507842)). Zuvor hatte das Entfernen von `src` keinen Effekt auf den Inhalt des `iframe`.
- Wir haben Unterstützung für das [`referrerpolicy`](/de/docs/Web/HTML/Element/script#referrerpolicy)-Attribut bei {{htmlelement("script")}}-Elementen hinzugefügt ([Firefox-Bug 1460920](https://bugzil.la/1460920)).

### CSS

- Der `crisp-edges`-Wert der {{cssxref("image-rendering")}}-Eigenschaft wurde jetzt unprefixed ([Firefox-Bug 1496617](https://bugzil.la/1496617)).
- Ein {{cssxref("scrollbar-color")}}-Wert von `auto` wird jetzt als `auto` aufgelöst, anstatt in zwei Farben ([Firefox-Bug 1501418](https://bugzil.la/1501418)).
- Die `break-*`-Eigenschaften wurden implementiert und die veralteten `page-break-*`-Eigenschaften dienten als Alias für diese ([Firefox-Bug 775618](https://bugzil.la/775618)):

  - {{cssxref("break-before")}} ist jetzt ein Alias für {{cssxref("page-break-before")}}.
  - {{cssxref("break-after")}} ist jetzt ein Alias für {{cssxref("page-break-after")}}.
  - {{cssxref("break-inside")}} ist jetzt ein Alias für {{cssxref("page-break-inside")}}.

- Der `anywhere`-Wert der {{cssxref("overflow-wrap")}}-Eigenschaft wurde implementiert ([Firefox-Bug 1505786](https://bugzil.la/1505786)).
- Die neuen Stufen-Positionsschlüsselwörter `jump-start`, `jump-end`, `jump-none` und `jump-both` — die in der [`steps()`-Timing-Funktion](/de/docs/Web/CSS/easing-function#step_easing_function) verwendet werden können — wurden implementiert ([Firefox-Bug 1496619](https://bugzil.la/1496619)). Dies fällt auch mit der Entfernung der `frames()`-Timing-Funktion zusammen, die der vorherige Weg zur Implementierung solcher Funktionalität war, nun veraltet.
- Einige neue {{cssxref("appearance", "-webkit-appearance")}}-Werte wurden hinzugefügt, um die Kompatibilität mit anderen Browsern zu gewährleisten. Insbesondere:

  - `meter`, das jetzt als Standardwert für {{htmlelement("meter")}}-Elemente in UA-Stylesheets verwendet wird. Der bestehende Wert `meterbar` ist jetzt ein Alias für `meter` ([Firefox-Bug 1501483](https://bugzil.la/1501483)).
  - `progress-bar`, das jetzt als Standardwert für {{htmlelement("progress")}}-Elemente in UA-Stylesheets verwendet wird. Der bestehende Wert `progressbar` ist jetzt ein Alias für `progress-bar` ([Firefox-Bug 1501506](https://bugzil.la/1501506)).
  - `textarea`, das jetzt als Standardwert für {{htmlelement("textarea")}}-Elemente in UA-Stylesheets verwendet wird. Der bestehende Wert `textfield-multiline` ist jetzt ein Alias für `textarea` ([Firefox-Bug 1507905](https://bugzil.la/1507905)).

- Das Verhalten von {{cssxref("user-select")}} wurde geändert, um es mit anderen Browsern in Einklang zu bringen ([Firefox-Bug 1506547](https://bugzil.la/1506547)). Konkret:

  - `user-select: all` auf ein Element gesetzt, überschreibt nicht mehr andere Werte von `user-select`, die auf Kindern dieses Elements gesetzt sind. Zum Beispiel im folgenden Snippet:

    ```html
    <div style="-webkit-user-select: all">
      All
      <div style="-webkit-user-select: none">None</div>
    </div>
    ```

    Das `<div>` mit dem Wert `none` darauf ist jetzt nicht auswählbar. Zuvor wäre dieser Wert von dem `all`-Wert überschrieben worden, der auf das übergeordnete Element gesetzt wurde.

  - Nicht-`contenteditable`-Elemente, die in `contenteditable`-Elementen verschachtelt sind, sind jetzt auswählbar.
  - `user-select` verhält sich jetzt konsistent innerhalb und außerhalb des Shadow DOM.
  - Der proprietäre `-moz-text`-Wert wurde entfernt.

- CSS-Umgebungsvariablen (die {{cssxref("env", "env()")}}-Funktion) wurden implementiert ([Firefox-Bug 1462233](https://bugzil.la/1462233)).

#### Entfernungen

- Die `layout.css.shape-outside.enabled`-Pref wurde entfernt; {{cssxref("shape-outside")}}, {{cssxref("shape-margin")}} und {{cssxref("shape-image-threshold")}} können nicht mehr in `about:config` deaktiviert werden ([Firefox-Bug 1504387](https://bugzil.la/1504387)).
- Mehrere Firefox-exklusive Werte der {{cssxref("user-select")}}-Eigenschaft wurden entfernt — `-moz-all`, `-moz-text`, `tri-state`, `element`, `elements` und `toggle`. Siehe [Firefox-Bug 1492958](https://bugzil.la/1492958) und [Firefox-Bug 1506547](https://bugzil.la/1506547).
- Wie oben erwähnt, wurde die `frames()`-Timing-Funktion entfernt ([Firefox-Bug 1496619](https://bugzil.la/1496619)).

### SVG

_Keine Änderungen._

### JavaScript

- {{jsxref("Intl/RelativeTimeFormat", "Intl.RelativeTimeFormat")}} wird jetzt unterstützt ([Firefox-Bug 1504334](https://bugzil.la/1504334)).
- Strings haben jetzt eine maximale {{jsxref("String/length", "length", "", 1)}} von `2**30 - 2` (\~1GB) anstatt `2**28 - 1` (\~256MB) ([Firefox-Bug 1509542](https://bugzil.la/1509542)).
- Die {{jsxref("globalThis")}}-Eigenschaft, die immer auf das oberste globale Objekt verweist, wurde implementiert ([Firefox-Bug 1317422](https://bugzil.la/1317422)).

### APIs

#### Neue APIs

- {{domxref("Streams_API/Using_readable_streams", "Lesbare Streams", "", "1")}} wurden standardmäßig aktiviert ([Firefox-Bug 1505122](https://bugzil.la/1505122)).
- Die {{domxref("Storage_Access_API", "Speicherzugriffs-API", "", "1")}} wurde standardmäßig aktiviert ([Firefox-Bug 1513021](https://bugzil.la/1513021)).

#### DOM

- {{domxref("Performance.toJSON()")}} wurde freigegeben für {{domxref("Web_Workers_API", "Web Workers", "", "1")}} ([Firefox-Bug 1504958](https://bugzil.la/1504958)).
- {{domxref("XMLHttpRequest")}}-Anfragen werfen jetzt einen `NetworkError`, wenn der angeforderte Inhaltstyp ein `Blob` ist und die Anfragemethode nicht `GET` ist ([Firefox-Bug 1502599](https://bugzil.la/1502599)).
- Die `-moz-`-präfixierten Versionen vieler Funktionen der {{domxref("Fullscreen API", "", "", "1")}} wurden veraltet und beim Auftreten werden ab jetzt Verwendungswarnungen in der JavaScript-Konsole angezeigt ([Firefox-Bug 1504946](https://bugzil.la/1504946)).
- {{domxref("createImageBitmap()")}} unterstützt jetzt SVG-Bilder ({{domxref("SVGImageElement")}}) als Bildquelle ([Firefox-Bug 1500768](https://bugzil.la/1500768)).

#### DOM-Ereignisse

- Zukünftig ist nur ein {{domxref("Window.open()")}}-Aufruf pro Ereignis erlaubt ([Firefox-Bug 675574](https://bugzil.la/675574)).
- Die Ereignisse [`keyup`](/de/docs/Web/API/Element/keyup_event) und [`keydown`](/de/docs/Web/API/Element/keydown_event) werden jetzt während der IME-Komposition ausgelöst, um die Kompatibilität über verschiedene Browser hinweg für CJKT-Benutzer zu verbessern ([Firefox-Bug 354358](https://bugzil.la/354358)).

#### Web Workers

- Das Ereignisobjekt von {{domxref("SharedWorkerGlobalScope.connect_event", "SharedWorkerGlobalScope.connect")}} ist eine {{domxref("MessageEvent")}}-Instanz — seine `data`-Eigenschaft ist jetzt ein leerer String-Wert anstelle von `null` ([Firefox-Bug 1508824](https://bugzil.la/1508824)).

#### Fetch und Service Workers

- Die Methode {{domxref("Response.redirect_static", "Response.redirect()")}} wirft nun korrekt einen `TypeError`, wenn eine ungültige URL als erster Parameter angegeben wird ([Firefox-Bug 1503276](https://bugzil.la/1503276)).
- Die Methoden {{domxref("ServiceWorkerContainer.register()")}} und {{domxref("WorkerGlobalScope.importScripts()")}} (bei Verwendung durch einen Service Worker) akzeptieren jetzt alle Dateien mit einem gültigen [JavaScript-MIME-Typ](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types#textjavascript) ([Firefox-Bug 1354577](https://bugzil.la/1354577)).
- Die Eigenschaften {{domxref("FetchEvent.replacesClientId")}} und {{domxref("FetchEvent.resultingClientId")}} werden jetzt unterstützt ([Firefox-Bug 1264177](https://bugzil.la/1264177)).
- Die Ereignishandler-Eigenschaften {{domxref("ServiceWorkerGlobalScope.messageerror_event", "ServiceWorkerGlobalScope.onmessageerror")}} und {{domxref("ServiceWorkerContainer.messageerror_event", "ServiceWorkerContainer.onmessageerror")}} wurden implementiert ([Firefox-Bug 1399446](https://bugzil.la/1399446)).
- Der {{httpheader("Origin")}}-Header wird bei Fetch-Anfragen mit der Methode {{HTTPMethod("HEAD")}} oder {{HTTPMethod("GET")}} nicht mehr gesetzt ([Firefox-Bug 1508661](https://bugzil.la/1508661)).

#### Medien, Web Audio und WebRTC

- Das {{domxref("WebRTC API", "WebRTC", "", "1")}} {{domxref("RTCIceCandidateStats")}}-Wörterbuch wurde gemäß den neuesten Spezifikationsänderungen aktualisiert ([Firefox-Bug 1324788](https://bugzil.la/1324788), [Firefox-Bug 1489040](https://bugzil.la/1489040); RTCIceCandidateStats wurde auf die neueste Spezifikation aktualisiert, um weitere Details zu erhalten, was sich genau geändert hat).
- Die `pause`- und `resume`-Ereignisse des {{domxref("MediaRecorder")}} (und ihre entsprechenden Ereignishandlereigenschaften) waren zuvor nicht implementiert, obwohl die Kompatibilitätstabellen das behaupteten. Sie wurden jetzt implementiert ([Firefox-Bug 1458538](https://bugzil.la/1458538), [Firefox-Bug 1514016](https://bugzil.la/1514016)).

#### Canvas und WebGL

- Die {{domxref("WebGL API", "WebGL", "", "1")}} {{domxref("EXT_texture_compression_bptc")}} und {{domxref("EXT_texture_compression_rgtc")}}-Texturkompressions-Erweiterungen wurden für WebGL1- und WebGL2-Kontexte freigegeben ([Firefox-Bug 1507263](https://bugzil.la/1507263)).

#### Entfernungen

- [Mutation-Events](/de/docs/Web/API/MutationEvent) wurden in Schattenbäumen deaktiviert ([Firefox-Bug 1489858](https://bugzil.la/1489858)).
- Die nicht standardmäßige {{domxref("MediaStream")}}-Eigenschaft `currentTime` wurde entfernt ([Firefox-Bug 1502927](https://bugzil.la/1502927)).
- Die Prefs `dom.webcomponents.shadowdom.enabled` und `dom.webcomponents.customelements.enabled` wurden entfernt — Shadow DOM und benutzerdefinierte Elemente können nicht mehr in `about:config` deaktiviert werden ([Firefox-Bug 1503019](https://bugzil.la/1503019)).
- Das nicht standardmäßige `text`-DOM-Ereignis — ausgelöst, um die UI des Browsers über die IME-Zusammensetzungszeichenfolgendaten und den Auswahlbereich zu benachrichtigen — wurde entfernt ([Firefox-Bug 1288640](https://bugzil.la/1288640)).
- Das {{domxref("Element/keypress_event", "keypress")}}-Ereignis wird nicht mehr für [nicht-druckbare Tasten](</de/docs/Web/API/KeyboardEvent/keyCode#non-printable_keys_(function_keys)>) ausgelöst ([Firefox-Bug 968056](https://bugzil.la/968056)), mit Ausnahme der `Enter`-Taste und der `Shift` + `Enter` und `Ctrl` + `Enter`-Tastenkombinationen (diese wurden für Zwecke der Kompatibilität zwischen Browsern beibehalten).

### Sicherheit

- Zusätzliche CORS-Einschränkungen werden jetzt für zulässige Anforderungs-Header durchgesetzt ([Firefox-Bug 1483815](https://bugzil.la/1483815), siehe auch [whatwg fetch issue 382: CORS-safelisted request headers should be restricted according to RFC 7231](https://github.com/whatwg/fetch/issues/382) für weitere Einzelheiten).

### Netzwerk

_Keine Änderungen._

### Plugins

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

#### API-Änderungen

- `WebDriver:ElementSendKeys` behandelt `<input type=file>` jetzt entspannter bei Interaktionsprüfungen und erlaubt es diesen Elementen, verborgen zu sein, ohne einen `not interactable`-Fehler auszulösen. Wenn eine strikte Interaktionsprüfung gewünscht wird, kann die Fähigkeit `strictFileInteractability` verwendet werden ([Firefox-Bug 1502864](https://bugzil.la/1502864)).

#### Bug-Fixes

- Die Fensterverwaltungsbefehle `WebDriver:FullscreenWindow`, `WebDriver:MinimizeWindow`, `WebDriver:MaximizeWindow` und `WebDriver:SetWindowRect` wurden stabiler gemacht ([Firefox-Bug 1492499](https://bugzil.la/1492499)). Dies bedeutet, dass sie unter bestimmten Bedingungen keine endlose Blockade mehr verursachen, sondern stattdessen nach 5 Sekunden timeouten, wenn der angeforderte Fensterzustand nicht erreicht werden kann ([Firefox-Bug 1521527](https://bugzil.la/1521527)).
- `WebDriver:ElementClick` berechnet jetzt korrekt den Mittelpunkt des zu klickenden Elements, was Interaktionen mit Abmessungen von 1x1 Pixeln ermöglicht ([Firefox-Bug 1499360](https://bugzil.la/1499360)).

#### Sonstiges

- Für `unexpected alert open`-Fehler werden informativere Nachrichten bereitgestellt ([Firefox-Bug 1502268](https://bugzil.la/1502268)).

### Andere

- Unterstützung für [WebP](/de/docs/Glossary/WebP)-Bilder wurde hinzugefügt ([Firefox-Bug 1294490](https://bugzil.la/1294490)).

  - Zudem wurde, um die Kompatibilität über verschiedene Browser hinweg in bestimmten Situationen zu erleichtern, der WebP-MIME-Typ (`image/webp`) zur Standard-HTTP-Anforderung {{httpheader("Accept")}}-Header für HTML-Dateien hinzugefügt ([Firefox-Bug 1507691](https://bugzil.la/1507691)).

- Der AV1-Codec wird jetzt standardmäßig unter Windows unterstützt ([Firefox-Bug 1452146](https://bugzil.la/1452146)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

#### Tabs

- Die {{WebExtAPIRef("tabs", "Tabs-API", "", "1")}} wurde erweitert, um Tab-Nachfolger zu unterstützen — ein Tab kann einen Nachfolger zugewiesen bekommen, welches die ID des Tabs ist, der aktiviert wird, sobald er geschlossen wird ([Firefox-Bug 1500479](https://bugzil.la/1500479), siehe auch [diesen Blogbeitrag](https://qiita.com/piroor/items/ea7e727735631c45a366) für mehr Informationen). Insbesondere:

  - Der {{WebExtAPIRef("tabs.Tab")}}-Typ hat jetzt eine `successorId`-Eigenschaft, die verwendet werden kann, um die ID des Tab-Nachfolgers zu speichern/abzurufen.
  - Der Callback des {{WebExtAPIRef("tabs.onActivated")}}-Ereignislisteners hat einen neuen Parameter, `previousTabId`, der die ID des vorher aktivierten Tabs enthält, wenn es noch offen ist.
  - Das `updateProperties`-Objekt der {{WebExtAPIRef("tabs.update()")}}-Funktion hat eine neue optionale Eigenschaft, `successorTabId`, die verwendet werden kann, um ihn zu aktualisieren.
  - `successorTabId` wird auch von Funktionen wie {{WebExtAPIRef("tabs.get()")}} und {{WebExtAPIRef("tabs.query()")}} zurückgegeben.
  - Die neue Funktion `tabs.moveInSuccession()` erlaubt die Massenmanipulation von Tab-Nachfolgern.

### Manifest-Änderungen

_Keine Änderungen._

### Andere

- Die `headerURL`/`theme_frame`-Eigenschaften für [WebExtension-Themen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) werden jetzt in Firefox für Android unterstützt ([Firefox-Bug 1429488](https://bugzil.la/1429488)).

## Siehe auch

- Hacks Release Beitrag: [Firefox 65: WebP-Support, Flexbox-Inspector, neue Tools und Plattform-Updates](https://hacks.mozilla.org/2019/01/firefox-65-webp-flexbox-inspector-new-tooling/)

## Ältere Versionen

{{Firefox_for_developers}}
