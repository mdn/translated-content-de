---
title: Firefox 62 für Entwickler
slug: Mozilla/Firefox/Releases/62
l10n:
  sourceCommit: 2d5b20a5eabb48bc5472ebe94b11afe2aa84f585
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 62, die Entwickler betreffen werden. Firefox 62 wurde am 5. September 2018 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Der Shape Path Editor ist jetzt standardmäßig verfügbar — siehe [Edit Shape Paths in CSS](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html) für weitere Informationen.
- Sie können jetzt die Regelansicht in ein eigenes Fenster aufteilen, getrennt von den anderen Registerkarten auf der CSS-Leiste. Weitere Informationen finden Sie unter [Seiteninspektor 3-Fenster-Modus](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/3-pane_mode/index.html).
- Der Grid-Inspektor hat aktualisierte Funktionen und eine vollständig neue Dokumentation — siehe [CSS Grid Inspector: Examine grid layouts](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html).
- Es gibt jetzt vier Optionen für die Platzierung der Entwicklerwerkzeuge. Zusätzlich zur Standardplatzierung unten im Fenster können Sie die Werkzeuge entweder auf der linken oder rechten Seite des Hauptfensters oder in einem separaten Fenster positionieren ([Firefox Bug 1192642](https://bugzil.la/1192642)).
- Ein Schließen-Button wurde zur Toolbar der [geteilten Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/split_console/index.html) hinzugefügt.
- Wenn die Option "Ein iframe als das aktuell angezielte Dokument auswählen" aktiviert ist, wird das Icon in der Werkzeugleiste angezeigt, solange die Einstellungsregisterkarte sichtbar ist, auch wenn die aktuelle Seite keine iframes enthält ([Firefox Bug 1456069](https://bugzil.la/1456069)).
- Die [Cookies-Registerkarte](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#cookies) des [Netzwerkmonitors](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) zeigt jetzt das Cookie-Attribut `samesite` an ([Firefox Bug 1452715](https://bugzil.la/1452715)).
- Der [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) funktioniert jetzt innerhalb von Containertabs ([Firefox Bug 1306975](https://bugzil.la/1306975)).
- Wenn {{Glossary("CORS", "CORS")}}-Fehler auftreten und in der Konsole gemeldet werden, liefert Firefox jetzt einen Link zur entsprechenden Seite in unserer [CORS-Fehlerdokumentation](/de/docs/Web/HTTP/Guides/CORS/Errors) ([Firefox Bug 1475391](https://bugzil.la/1475391)).
- Erstellen Sie einen Screenshot der aktuellen Seite (mit optionalem Dateinamen) von der Konsole-Registerkarte ([Firefox Bug 1464461](https://bugzil.la/1464461)) mit folgendem Befehl:

  ```bash
  :screenshot <filename.png> --fullpage
  ```

  wobei `<filename.png>` der gewünschte Dateiname ist. Die Datei wird in Ihrem Downloads-Ordner gespeichert. Der Parameter `--fullpage` ist optional, aber wenn er enthalten ist, wird die gesamte Webseite gespeichert. Diese Option fügt auch `-fullpage` zum Dateinamen hinzu. Für eine Liste aller verfügbaren Optionen für diesen Befehl geben Sie ein: `:screenshot --help`

#### Entfernungen

- Die _Entwicklertoolleiste/GCLI_ (zugänglich mit `Shift` + `F2`), **wurde aus Firefox entfernt** ([Firefox Bug 1461970](https://bugzil.la/1461970)). Sowohl die Benutzeroberfläche der Entwicklertoolleiste als auch die GCLI-Upstream-Bibliothek werden nicht mehr gewartet, einige ihrer Funktionen sind fehlerhaft (einige bereits seit e10s), sie blockiert die `unsafeSetInnerHTML`-Arbeit, die Nutzungszahlen sind sehr niedrig und es gibt Alternativen für die am häufigsten verwendeten Befehle.

### HTML

_Keine Änderungen._

### CSS

- `:-moz-selection` wurde ohne Präfix zu {{cssxref("::selection")}} ([Firefox Bug 509958](https://bugzil.la/509958)).
- `x` wird jetzt als Einheit für den {{cssxref("&lt;resolution&gt;")}} Typ unterstützt ([Firefox Bug 1460655](https://bugzil.la/1460655)).
- {{cssxref("shape-margin")}}, {{cssxref("shape-outside")}}, und {{cssxref("shape-image-threshold")}} sind jetzt standardmäßig aktiviert ([Firefox Bug 1457297](https://bugzil.la/1457297)).

#### Entfernungen

- Alle XUL `display` Werte mit Ausnahme von `-moz-box` und `-moz-inline-box` wurden aus Nicht-XUL-Dokumenten in [Firefox Bug 1288572](https://bugzil.la/1288572) entfernt.

### SVG

_Keine Änderungen._

### JavaScript

- Der [`WebAssembly.Global()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Global) Konstruktor wird jetzt unterstützt, zusammen mit globalen Variablen in WebAssembly ([Firefox Bug 1464656](https://bugzil.la/1464656)).
- Die {{jsxref("Array.prototype.flat()")}} und {{jsxref("Array.prototype.flatMap()")}} Methoden sind jetzt standardmäßig aktiviert ([Firefox Bug 1435813](https://bugzil.la/1435813)).
- Die [`import.meta`](/de/docs/Web/JavaScript/Reference/Operators/import.meta) Eigenschaft wurde implementiert, um kontextspezifische Metadaten für ein JavaScript-Modul bereitzustellen ([Firefox Bug 1427610](https://bugzil.la/1427610)).
- JavaScript [String-Literale](/de/docs/Web/JavaScript/Reference/Lexical_grammar#string_literals) können jetzt direkt die Zeichen U+2028 LINIENTRENNER und U+2029 ABSATZTRENNER enthalten. Folglich ist die {{jsxref("JSON")}}-Syntax jetzt eine Untermenge der JavaScript-Literalsyntax (siehe [Firefox Bug 1435828](https://bugzil.la/1435828) und den TC39-Vorschlag [json-superset](https://github.com/tc39/proposal-json-superset)).
- Für out-of-bounds [typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Indizes werden {{jsxref("Reflect.defineProperty()")}} und {{jsxref("Reflect.set()")}} jetzt `false` statt `true` zurückgeben ([Firefox Bug 1308735](https://bugzil.la/1308735)).

#### Entfernungen

- Die Konstruktoren `DOMPoint` und `DOMPointReadOnly` unterstützen keine Eingabeparameter vom Typ `DOMPointInit` mehr; die Werte der Eigenschaften müssen mit den Parametern `x`, `y`, `z` und `w` angegeben werden ([Firefox Bug 1186265](https://bugzil.la/1186265)).
- Die Methode [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) unterstützt nicht mehr die Erstellung von Objekt-URLs zur Darstellung eines [`MediaStream`](/de/docs/Web/API/MediaStream). Diese Fähigkeit ist schon länger veraltet, da Sie jetzt [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) direkt auf den `MediaStream` setzen können ([Firefox Bug 1454889](https://bugzil.la/1454889)).

### APIs

#### Neue APIs

- Die [Speech Synthesis API (Text-to-Speech)](/de/docs/Web/API/Web_Speech_API) ist jetzt standardmäßig in Firefox für Android aktiviert ([Firefox Bug 1463496](https://bugzil.la/1463496)).

#### DOM

- Die [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly) Schnittstelle unterstützt jetzt die statische Funktion [`DOMPointReadOnly.fromPoint()`](/de/docs/Web/API/DOMPointReadOnly/fromPoint_static), die ein neues Punktobjekt aus einem Wörterbuch erstellt, das mit `DOMPointInit` kompatibel ist und beliebige [`DOMPoint`](/de/docs/Web/API/DOMPoint)-Objekte einschließt. Diese Funktion ist auch auf [`DOMPoint`](/de/docs/Web/API/DOMPoint) verfügbar ([Firefox Bug 1186265](https://bugzil.la/1186265)).
- Aus Kompatibilitätsgründen wird die Eigenschaft [`Event.srcElement`](/de/docs/Web/API/Event/srcElement) jetzt unterstützt. Sie ist ein Alias für [`Event.target`](/de/docs/Web/API/Event/target) ([Firefox Bug 453968](https://bugzil.la/453968)).
- [`Navigator.registerProtocolHandler()`](/de/docs/Web/API/Navigator/registerProtocolHandler) darf jetzt nur noch aus einem sicheren Kontext heraus aufgerufen werden ([Firefox Bug 1460506](https://bugzil.la/1460506)).
- Die Methode `Navigator.registerContentHandler()` wurde standardmäßig deaktiviert, um sie vollständig zu entfernen, da sie schon länger veraltet ist ([Firefox Bug 1460481](https://bugzil.la/1460481)).
- Der [`DataTransfer()`](/de/docs/Web/API/DataTransfer/DataTransfer) Konstruktor wurde implementiert ([Firefox Bug 1351193](https://bugzil.la/1351193)).
- [`Document.domain`](/de/docs/Web/API/Document/domain) kann nicht mehr `null` zurückgeben ([Firefox Bug 819475](https://bugzil.la/819475)). Wenn die Domain nicht identifiziert werden kann, gibt `domain` einen leeren String statt `null` zurück.
- Die Methode [`console.timeLog()`](/de/docs/Web/API/console/timeLog_static) wurde hinzugefügt, um den aktuellen Wert eines Konsolentimers anzuzeigen, während die Zeit weiterhin verfolgt wird ([Firefox Bug 1458466](https://bugzil.la/1458466)).
- Die Methode [`console.countReset()`](/de/docs/Web/API/console/countReset_static) wurde hinzugefügt, um den Wert eines Konsolenzählers zurückzusetzen ([Firefox Bug 1459279](https://bugzil.la/1459279)).

#### DOM-Ereignisse

_Keine Änderungen._

#### Service Workers

_Keine Änderungen._

#### Medien, Web Audio und WebRTC

- Die Präferenz `"media.autoplay.enabled"` kontrolliert jetzt die automatische Wiedergabe von sowohl Audio- als auch Videomedien, anstatt nur Videomedien ([Firefox Bug 1413098](https://bugzil.la/1413098)).
- Der [`ChannelSplitterNode`](/de/docs/Web/API/ChannelSplitterNode) wurde so korrigiert, dass er korrekt auf 6 Kanäle mit `channelInterpretation` auf `"discrete"` und `channelCountMode` auf `"explicit"` als Standardeinstellungen setzt, gemäß der Spezifikation ([Firefox Bug 1456265](https://bugzil.la/1456265)).

#### Entfernungen

- Die `userproximity` und `deviceproximity` Ereignisse sowie die `UserProximityEvent` und `DeviceProximityEvent` Schnittstellen wurden standardmäßig hinter der Präferenz `device.sensors.proximity.enabled` deaktiviert ([Firefox Bug 1462308](https://bugzil.la/1462308)).
- Das `devicelight` Ereignis vom Typ `DeviceLightEvent` wurde standardmäßig hinter der Präferenz `device.sensors.ambientLight.enabled` deaktiviert ([Firefox Bug 1462308](https://bugzil.la/1462308)).
- Die `DOMSubtreeModified` und `DOMAttrModified` [Mutationsevents](/de/docs/Web/API/MutationEvent) werden nicht mehr ausgelöst, wenn das [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style) Attribut über das CSSOM geändert wird ([Firefox Bug 1460295](https://bugzil.la/1460295).
- Die Unterstützung für [`CSSStyleDeclaration.getPropertyCSSValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyCSSValue) wurde entfernt ([Firefox Bug 1408301](https://bugzil.la/1408301)).
- Die Unterstützung für [`CSSValue`](/de/docs/Web/API/CSSValue), [`CSSPrimitiveValue`](/de/docs/Web/API/CSSPrimitiveValue), und [`CSSValueList`](/de/docs/Web/API/CSSValueList) wurde entfernt ([Firefox Bug 1459871](https://bugzil.la/1459871)).
- [`window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) gibt nicht mehr `null` zurück, wenn auf ein `Window` zugegriffen wird, das keine Präsentation hat ([Firefox Bug 1467722](https://bugzil.la/1467722)).

### HTTP

#### Entfernungen

- Die veraltete CSP {{CSP("referrer")}} Direktive wurde entfernt. Bitte verwenden Sie den {{HTTPHeader("Referrer-Policy")}} Header stattdessen ([Firefox Bug 1302449](https://bugzil.la/1302449)).

### Sicherheit

_Keine Änderungen._

### Plugins

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

#### Neue Funktionen

- Befehl `WebDriver:ElementSendKeys` wurde WebDriver-konform für Datei-Uploads gemacht ([Firefox Bug 1448792](https://bugzil.la/1448792)).
- Benutzeraufforderungen, die durch `beforeunload` Ereignisse ausgelöst werden, werden automatisch für die Befehle `WebDriver:Get`, `WebDriver:Back`, `WebDriver:Forward`, `WebDriver:Refresh`, und `WebDriver:Close` verworfen ([Firefox Bug 1434872](https://bugzil.la/1434872)).
- `WebDriver:PerformActions` für `Ctrl` + `Click` synthetisiert ein [`contextmenu`](/de/docs/Web/API/Element/contextmenu_event) Ereignis ([Firefox Bug 1421323](https://bugzil.la/1421323)).

#### API-Änderungen

- Entfernte veraltete Endpunkte einschließlich `getWindowPosition`, `setWindowPosition`, `getWindowSize`, und `setWindowSize` ([Firefox Bug 1348145](https://bugzil.la/1348145)).
- WebDriver Befehle, die Erfolg mit Daten `null` zurückgeben, geben jetzt ein leeres Wörterbuch zurück ([Firefox Bug 1461463](https://bugzil.la/1461463)).

#### Fehlerbehebungen

- `WebDriver:ExecuteScript` verursachte einen zyklischen Referenzfehler für [WebElement](/de/docs/Web/WebDriver/WebElement) Sammlungen ([Firefox Bug 1447977](https://bugzil.la/1447977)).
- Das Dispatchen einer `pointerMove` oder `pause` Aktionsprimitive konnte einen Hänger verursachen und den Befehl daran hindern, jemals eine Antwort zu senden ([Firefox Bug 1467743](https://bugzil.la/1467743), [Firefox Bug 1447449](https://bugzil.la/1447449)).

### Sonstiges

_Keine Änderungen._

## Änderungen für Add-on-Entwickler

### API-Änderungen

- Die {{WebExtAPIRef("webRequest.getSecurityInfo()")}} API wurde hinzugefügt, um Details von TLS-Verbindungen zu untersuchen ([Firefox Bug 1322748](https://bugzil.la/1322748)).
- Die {{WebExtAPIRef("browserSettings.newTabPosition")}} wurde hinzugefügt, um anzupassen, wo neue Tabs geöffnet werden ([Firefox Bug 1344749](https://bugzil.la/1344749)).
- `windowTypes` wurde in {{WebExtAPIRef("windows.get()")}}, {{WebExtAPIRef("windows.getCurrent()")}}, und {{WebExtAPIRef("windows.getLastFocused()")}} als veraltet markiert ([Firefox Bug 1419132](https://bugzil.la/1419132)).
- Es ist jetzt möglich, eine Browseraktion auf Basis eines einzelnen Fensters zu ändern ([Firefox Bug 1419893](https://bugzil.la/1419893)).

### Manifest-Änderungen

- Die neue Eigenschaft `open_at_install` des Manifest-Schlüssels [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) ermöglicht es Erweiterungen zu steuern, ob ihre Seitenleisten automatisch bei der Installation geöffnet werden sollen oder nicht ([Firefox Bug 1460910](https://bugzil.la/1460910)).
- Änderungen an der Eigenschaft `browser_style` verschiedener Manifest-Schlüssel:
  - In [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) und [`browser_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) ist der Standardwert `false`.
  - In [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) und [`options_ui`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) ist der Standardwert `true`.

### Theme-Änderungen

- Die neue Eigenschaft `tab_background_separator` des Manifest-Schlüssels [`theme`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) ermöglicht es Erweiterungen, die Farbe des Tab-Trenners zu ändern ([Firefox Bug 1459455](https://bugzil.la/1459455)).

### Entfernungen

- Die Unterstützung für ungepackte, seitlich geladene Erweiterungen wurde entfernt ([Firefox Bug 1385057](https://bugzil.la/1385057)).
- Die Warnung über `browser_style`, die beim vorübergehenden Laden einer Erweiterung zum Testen angezeigt wird, wird nicht mehr angezeigt ([Firefox Bug 1404724](https://bugzil.la/1404724)).

## Ältere Versionen

{{Firefox_for_developers}}
