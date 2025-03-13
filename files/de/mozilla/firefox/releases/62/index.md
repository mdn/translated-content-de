---
title: Firefox 62 für Entwickler
slug: Mozilla/Firefox/Releases/62
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 62, die Entwickler betreffen. Firefox 62 wurde am 5. September 2018 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Der Shape Path Editor ist jetzt standardmäßig verfügbar — sehen Sie [Edit Shape Paths in CSS](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html) für mehr Informationen.
- Sie können die Regeln-Ansicht nun in ein eigenes Fenster aufteilen, getrennt von den anderen Tabs im CSS-Fenster. Siehe [Page inspector 3-pane mode](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/3-pane_mode/index.html) für weitere Details.
- Der Grid-Inspektor verfügt über aktualisierte Funktionen und eine komplett neue Dokumentation — siehe [CSS Grid Inspector: Examine grid layouts](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html).
- Sie haben jetzt vier Optionen für den Ort der Entwicklerwerkzeuge. Zusätzlich zur Standardposition am unteren Rand des Fensters können Sie die Werkzeuge entweder links oder rechts im Hauptfenster oder in einem separaten Fenster platzieren ([Firefox Bug 1192642](https://bugzil.la/1192642)).
- Eine Schaltfläche zum Schließen wurde zur [Split-Console](https://firefox-source-docs.mozilla.org/devtools-user/web_console/split_console/index.html)-Symbolleiste hinzugefügt.
- Wenn die Option "Ein iframe als das aktuell angezielte Dokument auswählen" aktiviert ist, erscheint das Symbol in der Symbolleiste, während der Reiter 'Einstellungen' angezeigt wird, auch wenn die aktuelle Seite keine iframes enthält ([Firefox Bug 1456069](https://bugzil.la/1456069)).
- Der [Netzwerk-Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) zeigt im [Cookies-Reiter](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#cookies) jetzt das Cookie-Attribut `samesite` an ([Firefox Bug 1452715](https://bugzil.la/1452715)).
- Der [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) funktioniert jetzt in Containertabs ([Firefox Bug 1306975](https://bugzil.la/1306975)).
- Wenn {{Glossary("CORS", "CORS")}}-Fehler auftreten und in der Konsole gemeldet werden, bietet Firefox jetzt einen Link zur entsprechenden Seite in unserer [CORS-Fehlerdokumentation](/de/docs/Web/HTTP/Guides/CORS/Errors) an ([Firefox Bug 1475391](https://bugzil.la/1475391)).
- Erstellen Sie einen Screenshot der aktuellen Seite (mit optionalem Dateinamen) aus dem Konsolen-Tab ([Firefox Bug 1464461](https://bugzil.la/1464461)) mit folgendem Befehl:

  ```bash
  :screenshot <filename.png> --fullpage
  ```

  wobei `<filename.png>` der gewünschte Dateiname ist. Die Datei wird in Ihrem Download-Ordner gespeichert. Der Parameter `--fullpage` ist optional, aber wenn er eingeschlossen ist, wird die vollständige Webseite gespeichert. Diese Option fügt auch `-fullpage` zum Dateinamen hinzu. Für eine Liste aller Optionen, die für diesen Befehl verfügbar sind, geben Sie ein: `:screenshot --help`

#### Entfernungen

- Die _Entwicklerwerkzeugleiste/GCLI_ (aufgerufen mit `Shift` + `F2`), **wurde aus Firefox entfernt** ([Firefox Bug 1461970](https://bugzil.la/1461970)). Sowohl die Benutzeroberfläche der Entwicklerwerkzeugleiste als auch die GCLI Upstream-Bibliothek werden nicht mehr gepflegt, einige ihrer Funktionen sind fehlerhaft (teilweise bereits seit e10s), sie blockiert die `unsafeSetInnerHTML`-Arbeit, die Nutzungszahlen sind sehr gering, und es existieren Alternativen für die am häufigsten genutzten Befehle.

### HTML

_Keine Änderungen._

### CSS

- `:-moz-selection` wurde zu {{cssxref("::selection")}} geändert ([Firefox Bug 509958](https://bugzil.la/509958)).
- `x` wird jetzt als Einheit für den {{cssxref("&lt;resolution&gt;")}}-Typ unterstützt ([Firefox Bug 1460655](https://bugzil.la/1460655)).
- {{cssxref("shape-margin")}}, {{cssxref("shape-outside")}}, und {{cssxref("shape-image-threshold")}} sind jetzt standardmäßig aktiviert ([Firefox Bug 1457297](https://bugzil.la/1457297)).

#### Entfernungen

- Alle [XUL `display` Werte](/de/docs/Web/CSS/display#xul_values) mit Ausnahme von `-moz-box` und `-moz-inline-box` wurden aus Nicht-XUL-Dokumenten entfernt in [Firefox Bug 1288572](https://bugzil.la/1288572).

### SVG

_Keine Änderungen._

### JavaScript

- Der [`WebAssembly.Global()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Global)-Konstruktor wird jetzt zusammen mit globalen Variablen in WebAssembly unterstützt ([Firefox Bug 1464656](https://bugzil.la/1464656)).
- Die Methoden {{jsxref("Array.prototype.flat()")}} und {{jsxref("Array.prototype.flatMap()")}} sind jetzt standardmäßig aktiviert ([Firefox Bug 1435813](https://bugzil.la/1435813)).
- Die [`import.meta`](/de/docs/Web/JavaScript/Reference/Operators/import.meta)-Eigenschaft wurde implementiert, um kontextspezifische Metadaten für ein JavaScript-Modul bereitzustellen ([Firefox Bug 1427610](https://bugzil.la/1427610)).
- JavaScript [Zeichenfolgenliterale](/de/docs/Web/JavaScript/Reference/Lexical_grammar#string_literals) können jetzt direkt die Zeichen U+2028 LINE SEPARATOR und U+2029 PARAGRAPH SEPARATOR enthalten. Infolgedessen ist die {{jsxref("JSON")}}-Syntax jetzt eine Teilmenge der JavaScript-Literalsyntax (siehe [Firefox Bug 1435828](https://bugzil.la/1435828) und den TC39-Vorschlag [json-superset](https://github.com/tc39/proposal-json-superset)).
- Für außerhalb des Bereichs liegende [typisierte Array](/de/docs/Web/JavaScript/Guide/Typed_arrays)-Indizes geben {{jsxref("Reflect.defineProperty()")}} und {{jsxref("Reflect.set()")}} jetzt `false` statt `true` zurück ([Firefox Bug 1308735](https://bugzil.la/1308735)).

#### Entfernungen

- Die Konstruktoren `DOMPoint` und `DOMPointReadOnly` unterstützen keinen Eingabeparameter vom Typ `DOMPointInit` mehr; die Werte der Eigenschaften müssen über die Parameter `x`, `y`, `z` und `w` angegeben werden ([Firefox Bug 1186265](https://bugzil.la/1186265)).
- Die Methode [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) unterstützt nicht mehr das Erstellen von Objekt-URLs zur Darstellung eines [`MediaStream`](/de/docs/Web/API/MediaStream). Diese Fähigkeit ist seit einiger Zeit veraltet, da Sie jetzt [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) direkt auf den `MediaStream` setzen können ([Firefox Bug 1454889](https://bugzil.la/1454889)).

### APIs

#### Neue APIs

- Die [Speech Synthesis API (Text-to-Speech)](/de/docs/Web/API/Web_Speech_API) ist jetzt standardmäßig auf Firefox für Android aktiviert ([Firefox Bug 1463496](https://bugzil.la/1463496)).

#### DOM

- Das [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly)-Interface unterstützt jetzt die statische Funktion [`DOMPointReadOnly.fromPoint()`](/de/docs/Web/API/DOMPointReadOnly/fromPoint_static), die ein neues Punktobjekt aus einem Wörterbuch erstellt, das mit `DOMPointInit` kompatibel ist und jedes [`DOMPoint`](/de/docs/Web/API/DOMPoint)-Objekt einschließt. Diese Funktion ist auch auf [`DOMPoint`](/de/docs/Web/API/DOMPoint) verfügbar ([Firefox Bug 1186265](https://bugzil.la/1186265)).
- Aus Kompatibilitätsgründen wird nun die Eigenschaft [`Event.srcElement`](/de/docs/Web/API/Event/srcElement) unterstützt. Sie ist ein Alias für [`Event.target`](/de/docs/Web/API/Event/target) ([Firefox Bug 453968](https://bugzil.la/453968)).
- [`Navigator.registerProtocolHandler()`](/de/docs/Web/API/Navigator/registerProtocolHandler) muss jetzt nur noch aus einem sicheren Kontext heraus aufgerufen werden ([Firefox Bug 1460506](https://bugzil.la/1460506)).
- Die Methode `Navigator.registerContentHandler()` wurde standardmäßig deaktiviert, um auf die vollständige Entfernung vorbereitet zu werden, da sie seit einiger Zeit veraltet ist ([Firefox Bug 1460481](https://bugzil.la/1460481)).
- Der Konstruktor [`DataTransfer()`](/de/docs/Web/API/DataTransfer/DataTransfer) wurde implementiert ([Firefox Bug 1351193](https://bugzil.la/1351193)).
- [`Document.domain`](/de/docs/Web/API/Document/domain) kann nicht mehr `null` zurückgeben ([Firefox Bug 819475](https://bugzil.la/819475)). Wenn die Domain nicht identifiziert werden kann, gibt `domain` statt `null` nun einen leeren String zurück.
- Die Methode [`console.timeLog()`](/de/docs/Web/API/Console/timeLog_static) wurde hinzugefügt, um den aktuellen Wert eines Konsolentimers anzuzeigen, während die Zeit weiter verfolgt wird ([Firefox Bug 1458466](https://bugzil.la/1458466)).
- Die Methode [`console.countReset()`](/de/docs/Web/API/Console/countReset_static) wurde hinzugefügt, um den Wert eines Konsolenzählers zurückzusetzen ([Firefox Bug 1459279](https://bugzil.la/1459279)).

#### DOM-Ereignisse

_Keine Änderungen._

#### Service Worker

_Keine Änderungen._

#### Medien, Web Audio und WebRTC

- Die Präferenz `"media.autoplay.enabled"` steuert nun sowohl die automatische Wiedergabe von Audio- als auch Videomedien und nicht nur von Videomedien ([Firefox Bug 1413098](https://bugzil.la/1413098)).
- Der [`ChannelSplitterNode`](/de/docs/Web/API/ChannelSplitterNode) wurde so korrigiert, dass er standardmäßig 6 Kanäle mit der `channelInterpretation` auf `"discrete"` und dem `channelCountMode` auf `"explicit"` gemäß der Spezifikation besitzt ([Firefox Bug 1456265](https://bugzil.la/1456265)).

#### Entfernungen

- Die `userproximity`- und `deviceproximity`-Ereignisse sowie die `UserProximityEvent`- und `DeviceProximityEvent`-Schnittstellen wurden standardmäßig hinter der Präferenz `device.sensors.proximity.enabled` deaktiviert ([Firefox Bug 1462308](https://bugzil.la/1462308)).
- Das `devicelight`-Ereignis vom Typ `DeviceLightEvent` wurde standardmäßig hinter der Präferenz `device.sensors.ambientLight.enabled` deaktiviert ([Firefox Bug 1462308](https://bugzil.la/1462308)).
- Die `DOMSubtreeModified`- und `DOMAttrModified`- [Mutationsevents](/de/docs/Web/API/MutationEvent) werden nicht mehr ausgelöst, wenn das [`style`](/de/docs/Web/HTML/Global_attributes/style)-Attribut über das CSSOM geändert wird ([Firefox Bug 1460295](https://bugzil.la/1460295)).
- Die Unterstützung für [`CSSStyleDeclaration.getPropertyCSSValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyCSSValue) wurde entfernt ([Firefox Bug 1408301](https://bugzil.la/1408301)).
- Die Unterstützung für [`CSSValue`](/de/docs/Web/API/CSSValue), [`CSSPrimitiveValue`](/de/docs/Web/API/CSSPrimitiveValue) und [`CSSValueList`](/de/docs/Web/API/CSSValueList) wurde entfernt ([Firefox Bug 1459871](https://bugzil.la/1459871)).
- [`window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) gibt nicht mehr `null` zurück, wenn es auf ein `Window` ohne Präsentation aufgerufen wird ([Firefox Bug 1467722](https://bugzil.la/1467722)).

### HTTP

#### Entfernungen

- Die veraltete CSP {{CSP("referrer")}}-Direktive wurde entfernt. Bitte verwenden Sie den {{HTTPHeader("Referrer-Policy")}}-Header ([Firefox Bug 1302449](https://bugzil.la/1302449)).

### Sicherheit

_Keine Änderungen._

### Plugins

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

#### Neue Funktionen

- Der Befehl `WebDriver:ElementSendKeys` wurde für Datei-Uploads WebDriver-konform gemacht ([Firefox Bug 1448792](https://bugzil.la/1448792)).
- Benachrichtigungen an den Benutzer, die durch `beforeunload`-Ereignisse ausgelöst werden, werden automatisch für die Befehle `WebDriver:Get`, `WebDriver:Back`, `WebDriver:Forward`, `WebDriver:Refresh` und `WebDriver:Close` geschlossen ([Firefox Bug 1434872](https://bugzil.la/1434872)).
- `WebDriver:PerformActions` für `Ctrl` + `Click` synthetisiert ein [`contextmenu`](/de/docs/Web/API/Element/contextmenu_event)-Ereignis ([Firefox Bug 1421323](https://bugzil.la/1421323)).

#### API-Änderungen

- Entfernte veraltete Endpunkte inklusive `getWindowPosition`, `setWindowPosition`, `getWindowSize` und `setWindowSize` ([Firefox Bug 1348145](https://bugzil.la/1348145)).
- WebDriver-Befehle, die Erfolg mit Daten `null` zurückgeben, geben jetzt ein leeres Wörterbuch zurück ([Firefox Bug 1461463](https://bugzil.la/1461463)).

#### Fehlerbehebungen

- `WebDriver:ExecuteScript` verursachte einen zyklischen Referenzfehler für [WebElement](/de/docs/Web/WebDriver/WebElement)-Sammlungen ([Firefox Bug 1447977](https://bugzil.la/1447977)).
- Das Auslösen eines `pointerMove`- oder `pause`-Aktionsprimitivs konnte zu einem Hänger führen, und der Befehl wurde nie gesendet ([Firefox Bug 1467743](https://bugzil.la/1467743), [Firefox Bug 1447449](https://bugzil.la/1447449)).

### Sonstiges

_Keine Änderungen._

## Änderungen für Add-on-Entwickler

### API-Änderungen

- Hinzugefügt wurde die {{WebExtAPIRef("webRequest.getSecurityInfo()")}} API, um Details zu TLS-Verbindungen zu untersuchen ([Firefox Bug 1322748](https://bugzil.la/1322748)).
- Hinzugefügt wurde {{WebExtAPIRef("browserSettings.newTabPosition")}}, um zu konfigurieren, wo neue Tabs geöffnet werden ([Firefox Bug 1344749](https://bugzil.la/1344749)).
- `windowTypes` wurde in {{WebExtAPIRef("windows.get()")}}, {{WebExtAPIRef("windows.getCurrent()")}} und {{WebExtAPIRef("windows.getLastFocused()")}} als veraltet markiert ([Firefox Bug 1419132](https://bugzil.la/1419132)).
- Es ist jetzt möglich, eine Browseraktion auf Fensterbasis zu ändern ([Firefox Bug 1419893](https://bugzil.la/1419893)).

### Manifest-Änderungen

- Neue `open_at_install`-Eigenschaft des [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action)-Manifest-Schlüssels ermöglicht es Erweiterungen zu steuern, ob ihre Sidebars automatisch bei der Installation geöffnet werden sollen oder nicht ([Firefox Bug 1460910](https://bugzil.la/1460910)).
- Änderungen an der `browser_style`-Eigenschaft verschiedener Manifest-Schlüssel:

  - In [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) und [`browser_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) ist der Standardwert `false`.
  - In [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) und [`options_ui`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) ist der Standardwert `true`.

### Theme-Änderungen

- Neue `tab_background_separator`-Eigenschaft des [`theme`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme)-Manifest-Schlüssels ermöglicht es Erweiterungen, die Farbe des Tab-Trenners zu ändern ([Firefox Bug 1459455](https://bugzil.la/1459455)).

### Entfernungen

- Unterstützung für nicht gepackte, sideloaded Erweiterungen wurde entfernt ([Firefox Bug 1385057](https://bugzil.la/1385057)).
- Die Warnung über `browser_style`, die beim temporären Laden einer Erweiterung zu Testzwecken angezeigt wurde, wird nicht mehr angezeigt ([Firefox Bug 1404724](https://bugzil.la/1404724)).

## Ältere Versionen

{{Firefox_for_developers}}
