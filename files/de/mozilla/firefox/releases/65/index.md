---
title: Firefox 65 für Entwickler
slug: Mozilla/Firefox/Releases/65
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 65, die Entwickler betreffen werden. Firefox 65 wurde am 29. Januar 2019 veröffentlicht.

## Änderungen für Webentwickler

### Entwickler-Tools

- Der [Flexbox-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_flexbox_layouts/index.html) ist jetzt standardmäßig aktiviert.
- Unterstützung für XHR-Breakpoints wurde im [JavaScript-Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) hinzugefügt ([Firefox-Fehler 821610](https://bugzil.la/821610)).
- Klicken Sie mit der rechten Maustaste auf ein Element im Barrierefreiheit-Baum vom Barrierefreiheit-Viewer, um es [als JSON zu drucken](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#print-accessibility-tree-to-json) im JSON-Viewer.
- Die Anzeige des [Farbkontrasts](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html#color-contrast) des Barrierefreiheit-Pickers wurde aktualisiert, sodass, wenn der Hintergrund eines Textes komplex ist (z. B. ein Verlauf oder ein komplexes Bild), ein Bereich von Farbkontrastwerten angezeigt wird.
- Die Registerkarte Headers im [Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) zeigt jetzt die Referrer-Policy für die ausgewählte Anfrage an ([Firefox-Fehler 1496742](https://bugzil.la/1496742)).
- Beim Anzeigen von Stacktraces (z. B. in Konsolenprotokollen oder im JavaScript-Debugger) werden Aufrufe von Framework-Methoden standardmäßig identifiziert und zusammengeklappt, was es einfacher macht, sich auf Ihren Code zu konzentrieren.
- Ähnlich wie bei nativen Terminals können Sie jetzt die Rückwärtssuche verwenden, um Einträge in der JavaScript-Konsole zu finden (`F9` auf Windows/Linux oder `Ctrl` + `R` auf macOS, dann einen Suchbegriff eingeben, gefolgt von `Ctrl` + `R`/`Ctrl` + `S`, um durch die Ergebnisse zu navigieren).
- Das `$0`-Shortcut der JavaScript-Konsole (verweist auf das aktuell geprüfte Element auf der Seite) verfügt nun über Autovervollständigung, sodass Sie beispielsweise `$0.te` eingeben können, um Autovervollständigungsvorschläge für Eigenschaften wie `$0.textContent` zu erhalten.
- Die Bearbeitungen, die Sie im Regeln-Ansicht des Inspektors vornehmen, werden jetzt im Änderungen-Panel aufgelistet ([Firefox-Fehler 1503920](https://bugzil.la/1503920)).

### HTML

- Ereignisse werden jetzt auf deaktivierten HTML-Elementen ausgelöst, d.h. {{htmlelement("button")}}, {{htmlelement("fieldset")}}, {{htmlelement("input")}}, {{htmlelement("select")}}, und {{htmlelement("textarea")}} Elemente mit gesetzten `disabled`-Attributen ([Firefox-Fehler 329509](https://bugzil.la/329509)).
- Das Entfernen des `src`-Attributs von einem {{htmlelement("iframe")}}-Element führt jetzt dazu, dass `about:blank` darin geladen wird, um Gleichheit mit Chrome und Safari zu erreichen ([Firefox-Fehler 1507842](https://bugzil.la/1507842)). Zuvor hatte das Entfernen von `src` keine Auswirkungen auf den `iframe`-Inhalt.
- Unterstützung für das [`referrerpolicy`](/de/docs/Web/HTML/Element/script#referrerpolicy)-Attribut bei {{htmlelement("script")}}-Elementen wurde hinzugefügt ([Firefox-Fehler 1460920](https://bugzil.la/1460920)).

### CSS

- Der `crisp-edges`-Wert der Eigenschaft {{cssxref("image-rendering")}} ist jetzt unpräfixiert ([Firefox-Fehler 1496617](https://bugzil.la/1496617)).
- Ein {{cssxref("scrollbar-color")}}-Wert von `auto` löst sich jetzt in `auto` auf, anstatt in zwei Farben ([Firefox-Fehler 1501418](https://bugzil.la/1501418)).
- Die `break-*`-Eigenschaften wurden implementiert und die veralteten `page-break-*`-Eigenschaften wurden an diese angeglichen ([Firefox-Fehler 775618](https://bugzil.la/775618)):

  - {{cssxref("break-before")}} ist jetzt ein Alias für {{cssxref("page-break-before")}}.
  - {{cssxref("break-after")}} ist jetzt ein Alias für {{cssxref("page-break-after")}}.
  - {{cssxref("break-inside")}} ist jetzt ein Alias für {{cssxref("page-break-inside")}}.

- Der `anywhere`-Wert der {{cssxref("overflow-wrap")}}-Eigenschaft wurde implementiert ([Firefox-Fehler 1505786](https://bugzil.la/1505786)).
- Die neuen Schlüsselwörter für Schrittpositionen `jump-start`, `jump-end`, `jump-none`, und `jump-both` — die innerhalb der [`steps()`-Timing-Funktion](/de/docs/Web/CSS/easing-function/steps) verwendet werden können — wurden implementiert ([Firefox-Fehler 1496619](https://bugzil.la/1496619)). Dies fällt mit der Entfernung der `frames()`-Timing-Funktion zusammen, die früher zur Implementierung solcher Funktionalität verwendet wurde und nun veraltet ist.
- Einige neue {{cssxref("appearance", "-webkit-appearance")}}-Werte wurden hinzugefügt, um die Kompatibilität mit anderen Browsern zu verbessern. Insbesondere:

  - `meter`, das jetzt als Standardwert für {{htmlelement("meter")}}-Elemente in UA-Stylesheets verwendet wird. Der bestehende Wert `meterbar` ist jetzt ein Alias für `meter` ([Firefox-Fehler 1501483](https://bugzil.la/1501483)).
  - `progress-bar`, das jetzt als Standardwert für {{htmlelement("progress")}}-Elemente in UA-Stylesheets verwendet wird. Der bestehende Wert `progressbar` ist jetzt ein Alias für `progress-bar` ([Firefox-Fehler 1501506](https://bugzil.la/1501506)).
  - `textarea`, das jetzt als Standardwert für {{htmlelement("textarea")}}-Elemente in UA-Stylesheets verwendet wird. Der bestehende Wert `textfield-multiline` ist jetzt ein Alias für `textarea` ([Firefox-Fehler 1507905](https://bugzil.la/1507905)).

- Das Verhalten von {{cssxref("user-select")}} wurde geändert, um es besser an andere Browser anzupassen ([Firefox-Fehler 1506547](https://bugzil.la/1506547)). Genauer gesagt:

  - `user-select: all`, das auf ein Element gesetzt ist, überschreibt nicht mehr andere Werte von `user-select`, die auf untergeordnete Elemente gesetzt sind. Zum Beispiel im folgenden Code-Snippet:

    ```html
    <div style="-webkit-user-select: all">
      All
      <div style="-webkit-user-select: none">None</div>
    </div>
    ```

    Das `<div>`-Element mit dem `none`-Wert ist jetzt nicht mehr auswählbar. Vorher hätte dieser Wert von dem `all`-Wert des übergeordneten Elements überschrieben werden können.

  - Nicht-`contenteditable`-Elemente, die in `contenteditable`-Elemente eingebettet sind, sind jetzt auswählbar.
  - `user-select` verhält sich jetzt konsistent innerhalb und außerhalb des Schatten-DOM.
  - Der proprietäre `-moz-text`-Wert wurde entfernt.

- CSS-Umgebungsvariablen (die {{cssxref("env", "env()")}}-Funktion) wurden implementiert ([Firefox-Fehler 1462233](https://bugzil.la/1462233)).

#### Entfernungen

- Die Voreinstellung `layout.css.shape-outside.enabled` wurde entfernt; {{cssxref("shape-outside")}}, {{cssxref("shape-margin")}}, und {{cssxref("shape-image-threshold")}} können nicht mehr in `about:config` deaktiviert werden ([Firefox-Fehler 1504387](https://bugzil.la/1504387)).
- Mehrere Firefox-spezifische Werte der {{cssxref("user-select")}}-Eigenschaft wurden entfernt — `-moz-all`, `-moz-text`, `tri-state`, `element`, `elements`, und `toggle`. Siehe [Firefox-Fehler 1492958](https://bugzil.la/1492958) und [Firefox-Fehler 1506547](https://bugzil.la/1506547).
- Wie oben erwähnt, wurde die `frames()`-Timing-Funktion entfernt ([Firefox-Fehler 1496619](https://bugzil.la/1496619)).

### SVG

_Keine Änderungen._

### JavaScript

- {{jsxref("Intl/RelativeTimeFormat", "Intl.RelativeTimeFormat")}} wird jetzt unterstützt ([Firefox-Fehler 1504334](https://bugzil.la/1504334)).
- Strings haben jetzt eine maximale {{jsxref("String/length","length","", 1)}} von `2**30 - 2` (\~1GB) statt `2**28 - 1` (\~256MB) ([Firefox-Fehler 1509542](https://bugzil.la/1509542)).
- Die {{jsxref("globalThis")}}-Eigenschaft, die immer auf das oberste globale Objekt verweist, wurde implementiert ([Firefox-Fehler 1317422](https://bugzil.la/1317422)).

### APIs

#### Neue APIs

- [Lesbare Streams](/de/docs/Web/API/Streams_API/Using_readable_streams) wurden standardmäßig aktiviert ([Firefox-Fehler 1505122](https://bugzil.la/1505122)).
- Die [Storage Access API](/de/docs/Web/API/Storage_Access_API) wurde standardmäßig aktiviert ([Firefox-Fehler 1513021](https://bugzil.la/1513021)).

#### DOM

- [`Performance.toJSON()`](/de/docs/Web/API/Performance/toJSON) wurde den [Web Workern](/de/docs/Web/API/Web_Workers_API) zugänglich gemacht ([Firefox-Fehler 1504958](https://bugzil.la/1504958)).
- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Anfragen werfen jetzt einen `NetworkError`, wenn der angeforderte Inhaltstyp ein `Blob` ist und die Anfragemethode nicht `GET` ist ([Firefox-Fehler 1502599](https://bugzil.la/1502599)).
- Die `-moz-`-präfixierten Versionen vieler Funktionen der [Fullscreen API](/de/docs/Web/API/Fullscreen_API) wurden als veraltet markiert und zeigen nun Veraltungswarnungen in der JavaScript-Konsole an, wenn sie aufgerufen werden ([Firefox-Fehler 1504946](https://bugzil.la/1504946)).
- [`Window.createImageBitmap()`](/de/docs/Web/API/Window/createImageBitmap) und [`WorkerGlobalScope.createImageBitmap()`](/de/docs/Web/API/WorkerGlobalScope/createImageBitmap) unterstützen nun SVG-Bilder ([`SVGImageElement`](/de/docs/Web/API/SVGImageElement)) als Bildquelle ([Firefox-Fehler 1500768](https://bugzil.la/1500768)).

#### DOM-Ereignisse

- Künftig wird nur ein einziger Aufruf von [`Window.open()`](/de/docs/Web/API/Window/open) pro Ereignis zugelassen ([Firefox-Fehler 675574](https://bugzil.la/675574)).
- Die [`keyup`](/de/docs/Web/API/Element/keyup_event)- und [`keydown`](/de/docs/Web/API/Element/keydown_event)-Ereignisse werden nun während der IME-Komposition ausgelöst, um die Kompatibilität zwischen Browsern für CJKT-Benutzer zu verbessern ([Firefox-Fehler 354358](https://bugzil.la/354358)).

#### Web Worker

- Das Event-Objekt von [`SharedWorkerGlobalScope.connect`](/de/docs/Web/API/SharedWorkerGlobalScope/connect_event) ist eine Instanz von [`MessageEvent`](/de/docs/Web/API/MessageEvent) — seine `data`-Eigenschaft hat nun einen leeren String-Wert anstelle von `null` ([Firefox-Fehler 1508824](https://bugzil.la/1508824)).

#### Fetch und Service Worker

- Die Methode [`Response.redirect()`](/de/docs/Web/API/Response/redirect_static) wirft jetzt korrekt einen `TypeError`, wenn eine nicht gültige URL als erstes Parameter angegeben wird ([Firefox-Fehler 1503276](https://bugzil.la/1503276)).
- Die Methoden [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) und [`WorkerGlobalScope.importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts) (wenn von einem Service Worker verwendet) akzeptieren nun alle Dateien mit einem gültigen [JavaScript-MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types#textjavascript) ([Firefox-Fehler 1354577](https://bugzil.la/1354577)).
- Die Eigenschaften [`FetchEvent.replacesClientId`](/de/docs/Web/API/FetchEvent/replacesClientId) und [`FetchEvent.resultingClientId`](/de/docs/Web/API/FetchEvent/resultingClientId) werden jetzt unterstützt ([Firefox-Fehler 1264177](https://bugzil.la/1264177)).
- Die Handler-Eigenschaften [`ServiceWorkerGlobalScope.onmessageerror`](/de/docs/Web/API/ServiceWorkerGlobalScope/messageerror_event) und [`ServiceWorkerContainer.onmessageerror`](/de/docs/Web/API/ServiceWorkerContainer/messageerror_event) wurden implementiert ([Firefox-Fehler 1399446](https://bugzil.la/1399446)).
- Der {{httpheader("Origin")}}-Header wird bei Fetch-Anfragen mit einer Methode von {{HTTPMethod("HEAD")}} oder {{HTTPMethod("GET")}} nicht mehr gesetzt ([Firefox-Fehler 1508661](https://bugzil.la/1508661)).

#### Medien, Web Audio und WebRTC

- Das [WebRTC](/de/docs/Web/API/WebRTC_API) [`RTCIceCandidateStats`](/de/docs/Web/API/RTCIceCandidateStats) Wörterbuch wurde gemäß der neuesten Versionsänderungen aktualisiert ([Firefox-Fehler 1324788](https://bugzil.la/1324788), [Firefox-Fehler 1489040](https://bugzil.la/1489040); RTCIceCandidateStats wurde auf den neuesten Stand der Spezifikationen gebracht, um mehr Details darüber zu bieten, was genau sich geändert hat).
- Die `pause`- und `resume`-Ereignisse des [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)s (und deren entsprechenden Event-Handler-Eigenschaften) wurden vorher nicht implementiert, obwohl die Kompatibilitätstabellen behaupteten, sie seien es gewesen. Sie wurden nun implementiert ([Firefox-Fehler 1458538](https://bugzil.la/1458538), [Firefox-Fehler 1514016](https://bugzil.la/1514016)).

#### Canvas und WebGL

- Die [WebGL](/de/docs/Web/API/WebGL_API) [`EXT_texture_compression_bptc`](/de/docs/Web/API/EXT_texture_compression_bptc) und [`EXT_texture_compression_rgtc`](/de/docs/Web/API/EXT_texture_compression_rgtc) Texturkompressions-Erweiterungen wurden für WebGL1- und WebGL2-Kontexte zugänglich gemacht ([Firefox-Fehler 1507263](https://bugzil.la/1507263)).

#### Entfernungen

- [Mutations-Ereignisse](/de/docs/Web/API/MutationEvent) wurden in Schattenbäumen deaktiviert ([Firefox-Fehler 1489858](https://bugzil.la/1489858)).
- Die nicht standardmäßige [`MediaStream`](/de/docs/Web/API/MediaStream)-Eigenschaft `currentTime` wurde entfernt ([Firefox-Fehler 1502927](https://bugzil.la/1502927)).
- Die Voreinstellungen `dom.webcomponents.shadowdom.enabled` und `dom.webcomponents.customelements.enabled` wurden entfernt — Shadow DOM und benutzerdefinierte Elemente können nicht mehr in `about:config` deaktiviert werden ([Firefox-Fehler 1503019](https://bugzil.la/1503019)).
- Das nicht standardmäßige DOM `text`-Ereignis — das der Benutzeroberfläche des Browsereditors IME-Kompositionszeichenfolgendaten und Auswahlbereich mitteilt — wurde entfernt ([Firefox-Fehler 1288640](https://bugzil.la/1288640)).
- Das [`keypress`](/de/docs/Web/API/Element/keypress_event)-Ereignis wird nicht mehr für [nicht druckbare Tasten](</de/docs/Web/API/KeyboardEvent/keyCode#non-printable_keys_(function_keys)>) ausgelöst ([Firefox-Fehler 968056](https://bugzil.la/968056)), außer bei der `Eingabetaste` sowie den Tastenkombinationen `Shift` + `Enter` und `Ctrl` + `Enter` (diese wurden aus Gründen der plattformübergreifenden Kompatibilität beibehalten).

### Sicherheit

- Zusätzliche CORS-Beschränkungen werden jetzt für zulässige Anfrage-Header durchgesetzt ([Firefox-Fehler 1483815](https://bugzil.la/1483815), siehe auch [whatwg fetch issue 382: CORS-safelisted request headers should be restricted according to RFC 7231](https://github.com/whatwg/fetch/issues/382) für weitere Details).

### Netzwerk

_Keine Änderungen._

### Plugins

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

#### API-Änderungen

- `WebDriver:ElementSendKeys` behandelt `<input type=file>` entspannter für Interaktivitätsprüfungen und erlaubt es diesen Elementen, versteckt zu sein, ohne mehr einen `not interactable`-Fehler auszulösen. Wenn eine strikte Interaktivitätsprüfung gewünscht ist, kann die Fähigkeit `strictFileInteractability` verwendet werden ([Firefox-Fehler 1502864](https://bugzil.la/1502864)).

#### Fehlerbehebungen

- Die Fenster-Manipulationsbefehle `WebDriver:FullscreenWindow`, `WebDriver:MinimizeWindow`, `WebDriver:MaximizeWindow` und `WebDriver:SetWindowRect` wurden stabiler gemacht ([Firefox-Fehler 1492499](https://bugzil.la/1492499)). Das bedeutet, dass sie unter speziellen Bedingungen keine unendliche Blockierung mehr verursachen, sondern nach 5 Sekunden auslaufen, wenn der angeforderte Fensterzustand nicht erreicht werden kann ([Firefox-Fehler 1521527](https://bugzil.la/1521527)).
- `WebDriver:ElementClick` berechnet jetzt korrekt den Mittelpunkt des Klickelements, was Interaktionen mit Dimensionen von 1x1 Pixel ermöglicht ([Firefox-Fehler 1499360](https://bugzil.la/1499360)).

#### Sonstiges

- Für `unexpected alert open`-Fehler werden informativere Nachrichten bereitgestellt ([Firefox-Fehler 1502268](https://bugzil.la/1502268)).

### Sonstiges

- Unterstützung für {{Glossary("WebP", "WebP")}}-Bilder wurde hinzugefügt ([Firefox-Fehler 1294490](https://bugzil.la/1294490)).

  - Zusätzlich wurde, um in bestimmten Situationen die plattformübergreifende Kompatibilität zu erleichtern, der WebP-MIME-Typ (`image/webp`) zum Standard-HTTP-Anfrage-{{httpheader("Accept")}}-Header für HTML-Dateien hinzugefügt ([Firefox-Fehler 1507691](https://bugzil.la/1507691)).

- Der AV1-Codec wird nun standardmäßig unter Windows unterstützt ([Firefox-Fehler 1452146](https://bugzil.la/1452146)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

#### Tabs

- Die {{WebExtAPIRef("tabs", "tabs API", "", "1")}} wurde erweitert, um Tab-Nachfolger zu unterstützen — einem Tab kann ein Nachfolger zugeordnet werden, das die ID des Tabs ist, der aktiv wird, sobald er geschlossen wird ([Firefox-Fehler 1500479](https://bugzil.la/1500479), siehe auch [dieser Blog-Post](https://qiita.com/piroor/items/ea7e727735631c45a366) für weitere Informationen). Insbesondere:

  - Der Typ {{WebExtAPIRef("tabs.Tab")}} verfügt nun über eine `successorId`-Eigenschaft, die verwendet werden kann, um die ID des Tab-Nachfolgers zu speichern/abzurufen.
  - Der Rückruf des {{WebExtAPIRef("tabs.onActivated")}}-Ereignislisteners hat einen neuen verfügbaren Parameter, `previousTabId`, der die ID des vorher aktivierten Tabs enthält, falls er noch geöffnet ist.
  - Das `updateProperties`-Objekt der {{WebExtAPIRef("tabs.update()")}}-Funktion hat eine neue optionale Eigenschaft, `successorTabId`, die verwendet werden kann, um sie zu aktualisieren.
  - `successorTabId` wird auch von Funktionen wie {{WebExtAPIRef("tabs.get()")}} und {{WebExtAPIRef("tabs.query()")}} zurückgegeben.
  - Die neue Funktion `tabs.moveInSuccession()` ermöglicht die Manipulation von Tab-Nachfolgern in großer Zahl.

### Manifest-Änderungen

_Keine Änderungen._

### Sonstiges

- Die Eigenschaften `headerURL`/`theme_frame` für [WebExtension-Themen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) werden jetzt auf Firefox für Android unterstützt ([Firefox-Fehler 1429488](https://bugzil.la/1429488)).

## Siehe auch

- Hacks-Veröffentlichungspost: [Firefox 65: WebP-Unterstützung, Flexbox-Inspektor, neue Tools & Plattform-Updates](https://hacks.mozilla.org/2019/01/firefox-65-webp-flexbox-inspector-new-tooling/)

## Ältere Versionen

{{Firefox_for_developers}}
