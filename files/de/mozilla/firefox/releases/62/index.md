---
title: Firefox 62 für Entwickler
slug: Mozilla/Firefox/Releases/62
l10n:
  sourceCommit: 1822cdf5a86574429c4c49883a402663ef16a4ef
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 62, die Entwickler betreffen werden. Firefox 62 wurde am 5. September 2018 veröffentlicht.

## Änderungen für Web-Entwickler

### Entwicklerwerkzeuge

- Der Shape Path Editor ist jetzt standardmäßig verfügbar — siehe [Edit Shape Paths in CSS](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html) für weitere Informationen.
- Sie können jetzt die Regelansicht in ein eigenes Bedienfeld aufteilen, getrennt von den anderen Tabs im CSS-Bereich. Siehe [Seiteninspektor 3-pane Mode](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/3-pane_mode/index.html) für mehr Details.
- Der Grid-Inspektor verfügt über aktualisierte Funktionen und eine komplett neue Dokumentation — siehe [CSS Grid Inspector: Examine grid layouts](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html).
- Sie haben jetzt vier Optionen für die Platzierung der Entwicklerwerkzeuge. Zusätzlich zur Standardplatzierung am unteren Fensterrand können Sie die Werkzeuge entweder auf der linken oder rechten Seite des Hauptfensters oder in einem separaten Fenster positionieren ([Firefox bug 1192642](https://bugzil.la/1192642)).
- Ein Schließen-Button wurde der [geteilten Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/split_console/index.html) Toolbar hinzugefügt.
- Wenn die Option "Wählen Sie ein iframe als das aktuell angezielte Dokument" ausgewählt ist, wird das Symbol in der Toolbar erscheinen, während der Einstellungen-Tab angezeigt wird, selbst wenn die aktuelle Seite keine iframes enthält ([Firefox bug 1456069](https://bugzil.la/1456069)).
- Der [Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html)'s [Cookies-Tab](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#cookies) zeigt jetzt das Cookie-Attribut `samesite` ([Firefox bug 1452715](https://bugzil.la/1452715)).
- Der [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) funktioniert jetzt auch innerhalb von Container-Tabs ([Firefox bug 1306975](https://bugzil.la/1306975)).
- Wenn [CORS](/de/docs/Glossary/CORS)-Fehler auftreten und in der Konsole gemeldet werden, stellt Firefox nun einen Link zur entsprechenden Seite in unserer [CORS-Fehlerdokumentation](/de/docs/Web/HTTP/CORS/Errors) zur Verfügung ([Firefox bug 1475391](https://bugzil.la/1475391)).
- Erstellen Sie einen Screenshot der aktuellen Seite (mit optionalem Dateinamen) über das Console-Tab ([Firefox bug 1464461](https://bugzil.la/1464461)) mit folgendem Befehl:

  ```bash
  :screenshot <filename.png> --fullpage
  ```

  wobei `<filename.png>` der gewünschte Dateiname ist. Die Datei wird in Ihrem Downloads-Ordner gespeichert. Der `--fullpage` Parameter ist optional, aber wenn er einbezogen wird, wird die gesamte Webseite gespeichert. Diese Option fügt auch `-fullpage` zum Namen der Datei hinzu. Für eine Liste aller verfügbaren Optionen für diesen Befehl geben Sie ein: `:screenshot --help`

#### Entfernte Funktionen

- Die _Entwickler-Toolbar/GCLI_ (aufgerufen mit `Shift` + `F2`), **wurde aus Firefox entfernt** ([Firefox bug 1461970](https://bugzil.la/1461970)). Sowohl die Benutzeroberfläche der Entwickler-Toolbar als auch die GCLI-Upstream-Bibliothek werden nicht mehr gepflegt, einige ihrer Funktionen sind kaputt (einige seit e10s), sie blockiert die `unsafeSetInnerHTML`-Arbeit, die Nutzungszahlen sind sehr niedrig, und es existieren Alternativen für die am häufigsten genutzten Befehle.

### HTML

_Keine Änderungen._

### CSS

- `:-moz-selection` wurde zu {{cssxref("::selection")}} unprefixed ([Firefox bug 509958](https://bugzil.la/509958)).
- `x` wird nun als Einheit für den {{cssxref("&lt;resolution&gt;")}}-Typ unterstützt ([Firefox bug 1460655](https://bugzil.la/1460655)).
- {{cssxref("shape-margin")}}, {{cssxref("shape-outside")}}, und {{cssxref("shape-image-threshold")}} sind jetzt standardmäßig aktiviert ([Firefox bug 1457297](https://bugzil.la/1457297)).

#### Entfernte Funktionen

- Alle [XUL `display` Werte](/de/docs/Web/CSS/display#xul_values) mit Ausnahme von `-moz-box` und `-moz-inline-box` wurden aus nicht-XUL-Dokumenten entfernt in [Firefox bug 1288572](https://bugzil.la/1288572).

### SVG

_Keine Änderungen._

### JavaScript

- Der [`WebAssembly.Global()`](/de/docs/WebAssembly/JavaScript_interface/Global) Konstruktor wird jetzt unterstützt, zusammen mit globalen Variablen in WebAssembly ([Firefox bug 1464656](https://bugzil.la/1464656)).
- Die {{jsxref("Array.prototype.flat()")}} und {{jsxref("Array.prototype.flatMap()")}} Methoden sind jetzt standardmäßig aktiviert ([Firefox bug 1435813](https://bugzil.la/1435813)).
- Die [`import.meta`](/de/docs/Web/JavaScript/Reference/Operators/import.meta) Eigenschaft wurde implementiert, um kontextspezifische Metadaten für ein JavaScript-Modul bereitzustellen ([Firefox bug 1427610](https://bugzil.la/1427610)).
- JavaScript [Zeichenfolgenliterale](/de/docs/Web/JavaScript/Reference/Lexical_grammar#string_literals) dürfen jetzt direkt die Zeichen U+2028 LINE SEPARATOR und U+2029 PARAGRAPH SEPARATOR enthalten. Infolgedessen ist die {{jsxref("JSON")}}-Syntax jetzt ein Teil der JavaScript-Literalsyntax (siehe [Firefox bug 1435828](https://bugzil.la/1435828) und den TC39-Vorschlag [json-superset](https://github.com/tc39/proposal-json-superset)).
- Für nicht vorhandene [typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Indizes, geben {{jsxref("Reflect.defineProperty()")}} und {{jsxref("Reflect.set()")}} jetzt `false` anstelle von `true` zurück ([Firefox bug 1308735](https://bugzil.la/1308735)).

#### Entfernte Funktionen

- Die `DOMPoint` und `DOMPointReadOnly` Konstruktoren unterstützen keinen Eingabeparameter des Typs `DOMPointInit` mehr; die Werte der Eigenschaften müssen mit den Parametern `x`, `y`, `z` und `w` angegeben werden ([Firefox bug 1186265](https://bugzil.la/1186265)).
- Die [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) Methode unterstützt nicht mehr das Erstellen von Objekt-URLs zur Repräsentation eines [`MediaStream`](/de/docs/Web/API/MediaStream). Diese Fähigkeit ist seit einiger Zeit überholt, da Sie jetzt [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) direkt auf den `MediaStream` setzen können ([Firefox bug 1454889](https://bugzil.la/1454889)).

### APIs

#### Neue APIs

- Die [Sprachsynthese-API (Text-to-Speech)](/de/docs/Web/API/Web_Speech_API) ist jetzt standardmäßig auf Firefox für Android aktiviert ([Firefox bug 1463496](https://bugzil.la/1463496)).

#### DOM

- Die [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly) Schnittstelle unterstützt jetzt die statische Funktion [`DOMPointReadOnly.fromPoint()`](/de/docs/Web/API/DOMPointReadOnly/fromPoint_static), die ein neues Punktobjekt aus einem Wörterbuch erstellt, das mit `DOMPointInit` kompatibel ist, und schließt jedes [`DOMPoint`](/de/docs/Web/API/DOMPoint) Objekt ein. Diese Funktion ist auch auf [`DOMPoint`](/de/docs/Web/API/DOMPoint) verfügbar ([Firefox bug 1186265](https://bugzil.la/1186265)).
- Aus Kompatibilitätsgründen wird die [`Event.srcElement`](/de/docs/Web/API/Event/srcElement) Eigenschaft jetzt unterstützt. Sie ist ein Alias für [`Event.target`](/de/docs/Web/API/Event/target) ([Firefox bug 453968](https://bugzil.la/453968)).
- [`Navigator.registerProtocolHandler()`](/de/docs/Web/API/Navigator/registerProtocolHandler) darf jetzt nur noch in einem sicheren Kontext aufgerufen werden ([Firefox bug 1460506](https://bugzil.la/1460506)).
- Die Methode [`Navigator.registerContentHandler()`](/de/docs/Web/API/Navigator/registerContentHandler) wurde standardmäßig deaktiviert, um in Vorbereitung auf die vollständige Entfernung, da sie bereits seit einiger Zeit veraltet ist ([Firefox bug 1460481](https://bugzil.la/1460481)).
- Der [`DataTransfer()`](/de/docs/Web/API/DataTransfer/DataTransfer) Konstruktor wurde implementiert ([Firefox bug 1351193](https://bugzil.la/1351193)).
- [`Document.domain`](/de/docs/Web/API/Document/domain) kann nicht mehr `null` zurückgeben ([Firefox bug 819475](https://bugzil.la/819475)). Wenn die Domain nicht identifiziert werden kann, dann gibt `domain` stattdessen einen leeren String zurück.
- Die Methode [`console.timeLog()`](/de/docs/Web/API/Console/timeLog_static) wurde hinzugefügt, um den aktuellen Wert eines Konsolen-Timers anzuzeigen, während die Zeit weiterhin verfolgt wird ([Firefox bug 1458466](https://bugzil.la/1458466)).
- Die Methode [`console.countReset()`](/de/docs/Web/API/Console/countReset_static) wurde hinzugefügt, um den Wert eines Konsolenzählers zurückzusetzen ([Firefox bug 1459279](https://bugzil.la/1459279)).

#### DOM-Ereignisse

_Keine Änderungen._

#### Service Worker

_Keine Änderungen._

#### Medien, Web Audio und WebRTC

- Die Präferenz `"media.autoplay.enabled"` steuert jetzt die automatische Wiedergabe sowohl von Audio- als auch Videomedien, anstatt nur von Videomedien ([Firefox bug 1413098](https://bugzil.la/1413098)).
- Der [`ChannelSplitterNode`](/de/docs/Web/API/ChannelSplitterNode) wurde korrigiert, um korrekt standardmäßig 6 Kanäle mit der `channelInterpretation` auf `"discrete"` und `channelCountMode` auf `"explicit"` gemäß der Spezifikation festzulegen ([Firefox bug 1456265](https://bugzil.la/1456265)).

#### Entfernte Funktionen

- Die `userproximity` und `deviceproximity` Ereignisse sowie die `UserProximityEvent` und `DeviceProximityEvent` Schnittstellen wurden standardmäßig hinter der `device.sensors.proximity.enabled` Präferenz deaktiviert ([Firefox bug 1462308](https://bugzil.la/1462308)).
- Das `devicelight` Ereignis vom Typ `DeviceLightEvent` wurde standardmäßig hinter der `device.sensors.ambientLight.enabled` Präferenz deaktiviert ([Firefox bug 1462308](https://bugzil.la/1462308)).
- Die `DOMSubtreeModified` und `DOMAttrModified` [Mutationsevents](/de/docs/Web/API/MutationEvent) werden nicht mehr ausgelöst, wenn das [`style`](/de/docs/Web/HTML/Global_attributes#style) Attribut über das CSSOM geändert wird ([Firefox bug 1460295](https://bugzil.la/1460295).
- Die Unterstützung für [`CSSStyleDeclaration.getPropertyCSSValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyCSSValue) wurde entfernt ([Firefox bug 1408301](https://bugzil.la/1408301)).
- Die Unterstützung für [`CSSValue`](/de/docs/Web/API/CSSValue), [`CSSPrimitiveValue`](/de/docs/Web/API/CSSPrimitiveValue), und [`CSSValueList`](/de/docs/Web/API/CSSValueList) wurde entfernt ([Firefox bug 1459871](https://bugzil.la/1459871)).
- [`window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) gibt nicht mehr `null` zurück, wenn es auf ein `Window` aufgerufen wird, das keine Präsentation hat ([Firefox bug 1467722](https://bugzil.la/1467722)).

### HTTP

#### Entfernte Funktionen

- Die veraltete CSP-Direktive {{CSP("referrer")}} wurde entfernt. Bitte verwenden Sie stattdessen den {{HTTPHeader("Referrer-Policy")}} Header ([Firefox bug 1302449](https://bugzil.la/1302449)).

### Sicherheit

_Keine Änderungen._

### Plugins

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

#### Neue Funktionen

- Der Befehl `WebDriver:ElementSendKeys` wurde für Datei-Uploads WebDriver-komform gemacht ([Firefox bug 1448792](https://bugzil.la/1448792)).
- Benutzeraufforderungen, die durch `beforeunload`-Ereignisse ausgelöst werden, werden automatisch für die Befehle `WebDriver:Get`, `WebDriver:Back`, `WebDriver:Forward`, `WebDriver:Refresh` und `WebDriver:Close` verworfen ([Firefox bug 1434872](https://bugzil.la/1434872)).
- `WebDriver:PerformActions` für `Ctrl` + `Click` synthetisiert ein [`contextmenu`](/de/docs/Web/API/Element/contextmenu_event) Ereignis ([Firefox bug 1421323](https://bugzil.la/1421323)).

#### API-Änderungen

- Veraltete Endpunkte wie `getWindowPosition`, `setWindowPosition`, `getWindowSize`, und `setWindowSize` wurden entfernt ([Firefox bug 1348145](https://bugzil.la/1348145)).
- WebDriver-Befehle, die Erfolg mit `null` Daten zurückgeben, geben jetzt ein leeres Wörterbuch zurück ([Firefox bug 1461463](https://bugzil.la/1461463)).

#### Fehlerbehebungen

- `WebDriver:ExecuteScript` führte zu einem zyklischen Referenzfehler für [WebElement](/de/docs/Web/WebDriver/WebElement)-Sammlungen ([Firefox bug 1447977](https://bugzil.la/1447977)).
- Das Auslösen einer `pointerMove` oder `pause` Aktionsprimitive konnte einen Hang verursachen und den Befehl daran hindern, jemals eine Antwort zu senden ([Firefox bug 1467743](https://bugzil.la/1467743), [Firefox bug 1447449](https://bugzil.la/1447449)).

### Andere

_Keine Änderungen._

## Änderungen für Add-on-Entwickler

### API-Änderungen

- Die {{WebExtAPIRef("webRequest.getSecurityInfo()")}} API wurde hinzugefügt, um Details von TLS-Verbindungen zu prüfen ([Firefox bug 1322748](https://bugzil.la/1322748)).
- Die {{WebExtAPIRef("browserSettings.newTabPosition")}} wurde hinzugefügt, um anzupassen, wo neue Tabs geöffnet werden ([Firefox bug 1344749](https://bugzil.la/1344749)).
- `windowTypes` wurde in {{WebExtAPIRef("windows.get()")}}, {{WebExtAPIRef("windows.getCurrent()")}}, und {{WebExtAPIRef("windows.getLastFocused()")}} als veraltet markiert ([Firefox bug 1419132](https://bugzil.la/1419132)).
- Es ist jetzt möglich, eine Browseraktion auf einer pro-Fenster-Basis zu modifizieren ([Firefox bug 1419893](https://bugzil.la/1419893)).

### Manifest-Änderungen

- Die neue `open_at_install` Eigenschaft des [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) Manifest-Schlüssels ermöglicht es Erweiterungen zu kontrollieren, ob ihre Sidebars automatisch bei der Installation geöffnet werden sollen oder nicht ([Firefox bug 1460910](https://bugzil.la/1460910)).
- Änderungen an der `browser_style` Eigenschaft verschiedener Manifest-Schlüssel:

  - In [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) und [`browser_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) ist der Standardwert `false`.
  - In [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) und [`options_ui`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) ist der Standardwert `true`.

### Themenänderungen

- Die neue `tab_background_separator` Eigenschaft des [`theme`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) Manifest-Schlüssels ermöglicht es Erweiterungen, die Farbe des Tab-Trenners zu ändern ([Firefox bug 1459455](https://bugzil.la/1459455)).

### Entfernte Funktionen

- Die Unterstützung für unverpackte, seitengeladene Erweiterungen wurde entfernt ([Firefox bug 1385057](https://bugzil.la/1385057)).
- Die Warnung über `browser_style`, die beim temporären Laden einer Erweiterung zum Testen angezeigt wird, wird nicht mehr angezeigt ([Firefox bug 1404724](https://bugzil.la/1404724)).

## Ältere Versionen

{{Firefox_for_developers}}
