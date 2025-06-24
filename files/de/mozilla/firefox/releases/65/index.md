---
title: Firefox 65 für Entwickler
slug: Mozilla/Firefox/Releases/65
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 65, die Entwickler betreffen werden. Firefox 65 wurde am 29. Januar 2019 veröffentlicht.

## Änderungen für Web-Entwickler

### Entwicklerwerkzeuge

- Der [Flexbox-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_flexbox_layouts/index.html) ist jetzt standardmäßig aktiviert.
- Der [JavaScript-Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) unterstützt jetzt XHR-Breakpoints ([Firefox Bug 821610](https://bugzil.la/821610)).
- Sie können mit der rechten Maustaste auf ein Element im Barrierefreiheitsbaum im Barrierefreiheitsbetrachter klicken, um es als [JSON zu drucken](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#print-accessibility-tree-to-json) zum JSON-Viewer.
- Die [Farbkontrast](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#color-contrast)-Anzeige des Barrierefreiheitspickers wurde aktualisiert, sodass bei komplexen Hintergründen (z. B. Verlaufs- oder komplexen Bildern) ein Bereich von Farbbereichskontrastwerten angezeigt wird.
- Der Registerkarte "Headers" des [Netzwerkmonitors](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) zeigt jetzt die Referrer-Policy für die ausgewählte Anforderung an ([Firefox Bug 1496742](https://bugzil.la/1496742)).
- Beim Anzeigen von Stapelspuren (z. B. in Konsolenprotokollen oder dem JavaScript-Debugger) werden Aufrufe von Framework-Methoden standardmäßig identifiziert und reduziert, was es einfacher macht, sich auf Ihren Code zu konzentrieren.
- In ähnlicher Weise wie bei nativen Terminals können Sie nun die Rückwärtssuche verwenden, um Einträge in Ihrem JavaScript-Konsolenverlauf zu finden (`F9` unter Windows/Linux oder `Ctrl` + `R` auf macOS, dann einen Suchbegriff eingeben, gefolgt von `Ctrl` + `R`/`Ctrl` + `S`, um durch die Ergebnisse zu blättern).
- Der `$0`-Shortcut der JavaScript-Konsole (verweist auf das derzeit untersuchte Element auf der Seite) verfügt nun über eine Autovervollständigung, sodass Sie beispielsweise `$0.te` eingeben können, um Autovervollständigungsvorschläge für Eigenschaften wie `$0.textContent` zu erhalten.
- Änderungen, die Sie in der Ansicht Regeln des Inspektors vornehmen, werden jetzt im Änderungen-Panel aufgelistet ([Firefox Bug 1503920](https://bugzil.la/1503920)).

### HTML

- Ereignisse werden nun bei deaktivierten HTML-Elementen ausgelöst, d.h. {{htmlelement("button")}}, {{htmlelement("fieldset")}}, {{htmlelement("input")}}, {{htmlelement("select")}}, und {{htmlelement("textarea")}}-Elemente mit gesetzten `disabled`-Attributen ([Firefox Bug 329509](https://bugzil.la/329509)).
- Das Entfernen des `src`-Attributs eines {{htmlelement("iframe")}}-Elements bewirkt nun, dass `about:blank` geladen wird, um Gleichheit mit Chrome und Safari zu erreichen ([Firefox Bug 1507842](https://bugzil.la/1507842)). Zuvor hatte das Entfernen von `src` keine Auswirkung auf den `iframe`-Inhalt.
- Es wurde Unterstützung für das Attribut [`referrerpolicy`](/de/docs/Web/HTML/Reference/Elements/script#referrerpolicy) auf {{htmlelement("script")}}-Elementen hinzugefügt ([Firefox Bug 1460920](https://bugzil.la/1460920)).

### CSS

- Der `crisp-edges`-Wert der {{cssxref("image-rendering")}}-Eigenschaft ist jetzt nicht mehr mit einem Präfix versehen ([Firefox Bug 1496617](https://bugzil.la/1496617)).
- Ein {{cssxref("scrollbar-color")}}-Wert von `auto` löst sich jetzt in `auto` auf, anstatt in zwei Farben ([Firefox Bug 1501418](https://bugzil.la/1501418)).
- Die `break-*`-Eigenschaften wurden implementiert, und die veralteten `page-break-*`-Eigenschaften wurden mit ihnen aliasiert ([Firefox Bug 775618](https://bugzil.la/775618)):

  - {{cssxref("break-before")}} ist jetzt ein Alias für {{cssxref("page-break-before")}}.
  - {{cssxref("break-after")}} ist jetzt ein Alias für {{cssxref("page-break-after")}}.
  - {{cssxref("break-inside")}} ist jetzt ein Alias für {{cssxref("page-break-inside")}}.

- Der `anywhere`-Wert der {{cssxref("overflow-wrap")}}-Eigenschaft wurde implementiert ([Firefox Bug 1505786](https://bugzil.la/1505786)).
- Die neuen Schrittpositions-Keywords `jump-start`, `jump-end`, `jump-none` und `jump-both` – die in der [`steps()`-Timing-Funktion](/de/docs/Web/CSS/easing-function/steps) verwendet werden können – wurden implementiert ([Firefox Bug 1496619](https://bugzil.la/1496619)). Dies fällt auch mit der Entfernung der `frames()`-Timing-Funktion zusammen, die der bisherige Weg zur Implementierung solcher Funktionalität war und nun veraltet ist.
- Einige neue {{cssxref("appearance", "-webkit-appearance")}}-Werte wurden hinzugefügt, um die Kompatibilität mit anderen Browsern zu gewährleisten. Besonders:

  - `meter`, das jetzt als Standardwert für {{htmlelement("meter")}}-Elemente in UA-Stylesheets verwendet wird. Der vorhandene Wert `meterbar` ist jetzt ein Alias für `meter` ([Firefox Bug 1501483](https://bugzil.la/1501483)).
  - `progress-bar`, das jetzt als Standardwert für {{htmlelement("progress")}}-Elemente in UA-Stylesheets verwendet wird. Der vorhandene Wert `progressbar` ist jetzt ein Alias für `progress-bar` ([Firefox Bug 1501506](https://bugzil.la/1501506)).
  - `textarea`, das jetzt als Standardwert für {{htmlelement("textarea")}}-Elemente in UA-Stylesheets verwendet wird. Der vorhandene Wert `textfield-multiline` ist jetzt ein Alias für `textarea` ([Firefox Bug 1507905](https://bugzil.la/1507905)).

- Das Verhalten von {{cssxref("user-select")}} wurde geändert, um es mehr mit anderen Browsern in Einklang zu bringen ([Firefox Bug 1506547](https://bugzil.la/1506547)). Insbesondere:

  - `user-select: all`, das auf ein Element gesetzt ist, überschreibt nicht mehr andere Werte von `user-select`, die auf den Kindelementen dieses Elements gesetzt sind. So zum Beispiel in folgendem Snippet:

    ```html
    <div style="-webkit-user-select: all">
      All
      <div style="-webkit-user-select: none">None</div>
    </div>
    ```

    Das `<div>` mit `none` darauf ist jetzt nicht auswählbar. Zuvor wäre dieser Wert durch den auf dem übergeordneten Element gesetzten `all`-Wert überschrieben worden.

  - Nicht-`contenteditable`-Elemente, die in `contenteditable`-Elementen verschachtelt sind, sind jetzt auswählbar.
  - `user-select` verhält sich jetzt konsistent innerhalb und außerhalb des Shadow-DOM.
  - Der proprietäre `-moz-text`-Wert wurde entfernt.

- CSS-Umgebungsvariablen (die {{cssxref("env", "env()")}}-Funktion) wurden implementiert ([Firefox Bug 1462233](https://bugzil.la/1462233)).

#### Entfernungen

- Die `layout.css.shape-outside.enabled`-Voreinstellung wurde entfernt; {{cssxref("shape-outside")}}, {{cssxref("shape-margin")}}, und {{cssxref("shape-image-threshold")}} können nicht mehr in `about:config` deaktiviert werden ([Firefox Bug 1504387](https://bugzil.la/1504387)).
- Mehrere Firefox-exklusive Werte der {{cssxref("user-select")}}-Eigenschaft wurden entfernt — `-moz-all`, `-moz-text`, `tri-state`, `element`, `elements`, und `toggle`. Siehe [Firefox Bug 1492958](https://bugzil.la/1492958) und [Firefox Bug 1506547](https://bugzil.la/1506547).
- Wie bereits erwähnt, wurde die `frames()`-Timing-Funktion entfernt ([Firefox Bug 1496619](https://bugzil.la/1496619)).

### SVG

_Keine Änderungen._

### JavaScript

- {{jsxref("Intl/RelativeTimeFormat", "Intl.RelativeTimeFormat")}} wird jetzt unterstützt ([Firefox Bug 1504334](https://bugzil.la/1504334)).
- Zeichenfolgen haben jetzt eine maximale {{jsxref("String/length","length","", 1)}} von `2**30 - 2` (\~1GB) anstelle von `2**28 - 1` (\~256MB) ([Firefox Bug 1509542](https://bugzil.la/1509542)).
- Die {{jsxref("globalThis")}}-Eigenschaft, die immer auf das globale Top-Level-Objekt verweist, wurde implementiert ([Firefox Bug 1317422](https://bugzil.la/1317422)).

### APIs

#### Neue APIs

- [Readable Streams](/de/docs/Web/API/Streams_API/Using_readable_streams) wurden standardmäßig aktiviert ([Firefox Bug 1505122](https://bugzil.la/1505122)).
- Die [Storage Access API](/de/docs/Web/API/Storage_Access_API) wurde standardmäßig aktiviert ([Firefox Bug 1513021](https://bugzil.la/1513021)).

#### DOM

- [`Performance.toJSON()`](/de/docs/Web/API/Performance/toJSON) wurde für [Web Workers](/de/docs/Web/API/Web_Workers_API) verfügbar gemacht ([Firefox Bug 1504958](https://bugzil.la/1504958)).
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Anfragen werfen jetzt einen `NetworkError`, wenn der angeforderte Inhaltstyp ein `Blob` ist und die Anforderungsmethode nicht `GET` ist ([Firefox Bug 1502599](https://bugzil.la/1502599)).
- Die `-moz-`-präfixierten Versionen vieler Funktionen der [Fullscreen API](/de/docs/Web/API/Fullscreen_API) wurden veraltet, und es werden jetzt Verwendungswarnungen in der JavaScript-Konsole angezeigt, wenn sie auftreten ([Firefox Bug 1504946](https://bugzil.la/1504946)).
- [`Window.createImageBitmap()`](/de/docs/Web/API/Window/createImageBitmap) und [`WorkerGlobalScope.createImageBitmap()`](/de/docs/Web/API/WorkerGlobalScope/createImageBitmap) unterstützen jetzt SVG-Bilder ([`SVGImageElement`](/de/docs/Web/API/SVGImageElement)) als Bildquelle ([Firefox Bug 1500768](https://bugzil.la/1500768)).

#### DOM-Ereignisse

- Künftig wird nur ein [`Window.open()`](/de/docs/Web/API/Window/open)-Aufruf pro Ereignis erlaubt ([Firefox Bug 675574](https://bugzil.la/675574)).
- Die [`keyup`](/de/docs/Web/API/Element/keyup_event) und [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignisse werden jetzt während der IME-Komposition ausgelöst, um die browserübergreifende Kompatibilität für CJKT-Benutzer zu verbessern ([Firefox Bug 354358](https://bugzil.la/354358).

#### Web Workers

- Das Ereignisobjekt von [`SharedWorkerGlobalScope.connect`](/de/docs/Web/API/SharedWorkerGlobalScope/connect_event) ist eine Instanz von [`MessageEvent`](/de/docs/Web/API/MessageEvent) — seine `data`-Eigenschaft ist jetzt ein leerer Zeichenfolgenwert anstelle von `null` ([Firefox Bug 1508824](https://bugzil.la/1508824)).

#### Fetch und Service Workers

- Die Methode [`Response.redirect()`](/de/docs/Web/API/Response/redirect_static) wirft jetzt korrekt einen `TypeError`, wenn eine ungültige URL als erster Parameter angegeben wird ([Firefox Bug 1503276](https://bugzil.la/1503276)).
- Die Methoden [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) und [`WorkerGlobalScope.importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts) (wenn sie von einem Service Worker verwendet werden) akzeptieren nun alle Dateien mit einem gültigen [JavaScript MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types#textjavascript) ([Firefox Bug 1354577](https://bugzil.la/1354577)).
- Die Eigenschaften [`FetchEvent.replacesClientId`](/de/docs/Web/API/FetchEvent/replacesClientId) und [`FetchEvent.resultingClientId`](/de/docs/Web/API/FetchEvent/resultingClientId) werden jetzt unterstützt ([Firefox Bug 1264177](https://bugzil.la/1264177)).
- Die Handler-Eigenschaften [`ServiceWorkerGlobalScope.onmessageerror`](/de/docs/Web/API/ServiceWorkerGlobalScope/messageerror_event) und [`ServiceWorkerContainer.onmessageerror`](/de/docs/Web/API/ServiceWorkerContainer/messageerror_event) wurden implementiert ([Firefox Bug 1399446](https://bugzil.la/1399446)).
- Der {{httpheader("Origin")}}-Header wird bei Fetch-Anfragen mit einer Methode {{HTTPMethod("HEAD")}} oder {{HTTPMethod("GET")}} nicht mehr gesetzt ([Firefox Bug 1508661](https://bugzil.la/1508661)).

#### Medien, Web Audio und WebRTC

- Das [WebRTC](/de/docs/Web/API/WebRTC_API) [`RTCIceCandidateStats`](/de/docs/Web/API/RTCIceCandidateStats)-Wörterbuch wurde entsprechend den neuesten Spezifikationsänderungen aktualisiert ([Firefox Bug 1324788](https://bugzil.la/1324788), [Firefox Bug 1489040](https://bugzil.la/1489040); RTCIceCandidateStats wurde auf die neueste Spezifikation aktualisiert, um genauere Informationen zu erhalten, was sich geändert hat).
- Die `pause`- und `resume`-Ereignisse des [`MediaRecorder`](/de/docs/Web/API/MediaRecorder) (und ihre entsprechenden Ereignis-Handler-Eigenschaften wurden bisher nicht implementiert, obwohl die Kompatibilitätstabellen behaupteten, sie seien implementiert worden. Sie wurden jetzt implementiert ([Firefox Bug 1458538](https://bugzil.la/1458538), [Firefox Bug 1514016](https://bugzil.la/1514016)).

#### Canvas und WebGL

- Die [WebGL](/de/docs/Web/API/WebGL_API) Texturkompressions-Erweiterungen [`EXT_texture_compression_bptc`](/de/docs/Web/API/EXT_texture_compression_bptc) und [`EXT_texture_compression_rgtc`](/de/docs/Web/API/EXT_texture_compression_rgtc) wurden für WebGL1 und WebGL2-Kontexts verfügbar gemacht ([Firefox Bug 1507263](https://bugzil.la/1507263)).

#### Entfernungen

- [Mutations-Ereignisse](/de/docs/Web/API/MutationEvent) wurden in Schattenbäumen deaktiviert ([Firefox Bug 1489858](https://bugzil.la/1489858)).
- Die nicht standardmäßige [`MediaStream`](/de/docs/Web/API/MediaStream)-Eigenschaft `currentTime` wurde entfernt ([Firefox Bug 1502927](https://bugzil.la/1502927)).
- Die Voreinstellungen `dom.webcomponents.shadowdom.enabled` und `dom.webcomponents.customelements.enabled` wurden entfernt — Shadow-DOM und benutzerdefinierte Elemente können nicht mehr in `about:config` deaktiviert werden ([Firefox Bug 1503019](https://bugzil.la/1503019)).
- Das nicht standardmäßige DOM `text`-Ereignis — das zum Benachrichtigen der Browser-Editor-Benutzeroberfläche über IME-Kompositionszeichendaten und Auswahlbereich ausgelöst wurde — wurde entfernt ([Firefox Bug 1288640](https://bugzil.la/1288640)).
- Das [`keypress`](/de/docs/Web/API/Element/keypress_event)-Ereignis wird nicht mehr für [nicht-druckbare Tasten](</de/docs/Web/API/KeyboardEvent/keyCode#non-printable_keys_(function_keys)>) ([Firefox Bug 968056](https://bugzil.la/968056)) ausgelöst, außer für die `Enter`-Taste und die `Shift` + `Enter`- und `Ctrl` + `Enter`-Tastenkombinationen (diese wurden aus Gründen der browserübergreifenden Kompatibilität beibehalten).

### Sicherheit

- Zusätzliche CORS-Beschränkungen werden nun auf zulässige Anforderungs-Header durchgesetzt ([Firefox Bug 1483815](https://bugzil.la/1483815), siehe auch [whatwg fetch issue 382: CORS-safelisted request headers should be restricted according to RFC 7231](https://github.com/whatwg/fetch/issues/382) für weitere Details).

### Netzwerke

_Keine Änderungen._

### Plugins

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

#### API-Änderungen

- `WebDriver:ElementSendKeys` behandelt `<input type=file>` jetzt lockerer für Interaktivitätsprüfungen und erlaubt es, dass diese Elemente versteckt sind, ohne mehr einen `not interactable`-Fehler auszulösen. Wenn eine strikte Interaktivitätsprüfung gewünscht wird, kann die Fähigkeit `strictFileInteractability` verwendet werden ([Firefox Bug 1502864](https://bugzil.la/1502864)).

#### Fehlerbehebungen

- Die Fenster-Manipulationsbefehle `WebDriver:FullscreenWindow`, `WebDriver:MinimizeWindow`, `WebDriver:MaximizeWindow` und `WebDriver:SetWindowRect` wurden stabiler gemacht ([Firefox Bug 1492499](https://bugzil.la/1492499)). Das bedeutet, dass sie unter besonderen Bedingungen nicht mehr in eine unendliche Wartezeit gelangen, sondern nach 5 Sekunden ablaufen, wenn der gewünschte Fensterzustand nicht erreicht werden kann ([Firefox Bug 1521527](https://bugzil.la/1521527)).
- `WebDriver:ElementClick` berechnet jetzt korrekt den Mittelpunkt des Elements, auf das geklickt werden soll, was Interaktionen mit Abmessungen von 1x1 Pixeln ermöglicht ([Firefox Bug 1499360](https://bugzil.la/1499360)).

#### Sonstiges

- Für `unexpected alert open`-Fehler werden informativere Nachrichten bereitgestellt ([Firefox Bug 1502268](https://bugzil.la/1502268)).

### Sonstiges

- Unterstützung für {{Glossary("WebP", "WebP")}}-Bilder wurde hinzugefügt ([Firefox Bug 1294490](https://bugzil.la/1294490)).

  - Zusätzlich wurde der WebP-MIME-Typ (`image/webp`) in die standardmäßige HTTP-Anfragskopfzeile {{httpheader("Accept")}} für HTML-Dateien aufgenommen, um in bestimmten Situationen die Kompatibilität für andere Browser zu erleichtern ([Firefox Bug 1507691](https://bugzil.la/1507691)).

- Der AV1-Codec wird jetzt standardmäßig unter Windows unterstützt ([Firefox Bug 1452146](https://bugzil.la/1452146)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

#### Tabs

- Die {{WebExtAPIRef("tabs", "tabs API", "", "1")}} wurde erweitert, um Tab-Nachfolger zu unterstützen — ein Tab kann einen Nachfolger zugewiesen bekommen, bei dem es sich um die ID des Tabs handelt, das aktiv wird, wenn es geschlossen wird ([Firefox Bug 1500479](https://bugzil.la/1500479), siehe auch [diesen Blogpost](https://qiita.com/piroor/items/ea7e727735631c45a366) für weitere Informationen). Insbesondere:
  - Der {{WebExtAPIRef("tabs.Tab")}}-Typ hat jetzt eine `successorId`-Eigenschaft, die verwendet werden kann, um die ID des Tab-Nachfolgers zu speichern/abzurufen.
  - Der Callback des {{WebExtAPIRef("tabs.onActivated")}}-Ereignislisteners hat einen neuen verfügbaren Parameter, `previousTabId`, der die ID des zuvor aktivierten Tabs enthält, falls er noch geöffnet ist.
  - Das `updateProperties`-Objekt der {{WebExtAPIRef("tabs.update()")}}-Funktion hat eine neue optionale Eigenschaft, `successorTabId`, die zur Aktualisierung verwendet werden kann.
  - `successorTabId` wird auch von Funktionen wie {{WebExtAPIRef("tabs.get()")}} und {{WebExtAPIRef("tabs.query()")}} zurückgegeben.
  - Die neue Funktion `tabs.moveInSuccession()` erlaubt die Manipulation von Tab-Nachfolgern in großen Mengen.

### Manifest-Änderungen

_Keine Änderungen._

### Sonstiges

- Die `headerURL`/`theme_frame`-Eigenschaften für [WebExtension-Themes](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) werden jetzt auf Firefox für Android unterstützt ([Firefox Bug 1429488](https://bugzil.la/1429488)).

## Siehe auch

- Hacks Release-Post: [Firefox 65: WebP-Unterstützung, Flexbox-Inspektor, neue Werkzeuge & Plattform-Updates](https://hacks.mozilla.org/2019/01/firefox-65-webp-flexbox-inspector-new-tooling/)

## Ältere Versionen

{{Firefox_for_developers}}
