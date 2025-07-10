---
title: Firefox 62 für Entwickler
slug: Mozilla/Firefox/Releases/62
l10n:
  sourceCommit: 594ae0d4ffb6326a9529fe366d30ca633309ee30
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 62, die Entwickler betreffen. Firefox 62 wurde am 5. September 2018 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Der Shape Path Editor ist jetzt standardmäßig verfügbar — siehe [Edit Shape Paths in CSS](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html) für weitere Informationen.
- Sie können die Ansicht "Regeln" jetzt in ein eigenes Fenster aufteilen, getrennt von den anderen Tabs im CSS-Fenster. Siehe [Seiteninspektor 3-Pane-Modus](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/3-pane_mode/index.html) für mehr Details.
- Der Grid-Inspektor hat aktualisierte Funktionen und eine komplett neue Dokumentation — siehe [CSS Grid Inspector: Examine grid layouts](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html).
- Sie haben jetzt vier Optionen für die Position der Entwicklerwerkzeuge. Zusätzlich zum Standardort am unteren Rand des Fensters können Sie die Werkzeuge an den linken oder rechten Seiten des Hauptfensters oder in einem separaten Fenster platzieren ([Firefox bug 1192642](https://bugzil.la/1192642)).
- Ein Schließen-Button wurde zur Symbolleiste der [geteilt Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/split_console/index.html) hinzugefügt.
- Wenn die Option "Wählen Sie ein iframe als das aktuell ausgewählte Dokument" aktiviert ist, erscheint das Symbol in der Symbolleiste, während die Einstellungsregisterkarte angezeigt wird, selbst wenn die aktuelle Seite keine iframes enthält ([Firefox bug 1456069](https://bugzil.la/1456069)).
- Die [Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html)'s [Cookies Registerkarte](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#cookies) zeigt jetzt das Cookie-Attribut `samesite` an ([Firefox bug 1452715](https://bugzil.la/1452715)).
- Der [Responsive Design Modus](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) funktioniert jetzt innerhalb von Containertabs ([Firefox bug 1306975](https://bugzil.la/1306975)).
- Wenn {{Glossary("CORS", "CORS")}} Fehler auftreten und in der Konsole gemeldet werden, bietet Firefox jetzt einen Link zur entsprechenden Seite in unserer [CORS-Fehlerdokumentation](/de/docs/Web/HTTP/Guides/CORS/Errors) an ([Firefox bug 1475391](https://bugzil.la/1475391)).
- Erstellen Sie einen Screenshot der aktuellen Seite (mit optionalem Dateinamen) aus der Konsole Registerkarte ([Firefox bug 1464461](https://bugzil.la/1464461)) mit dem folgenden Befehl:

  ```bash
  :screenshot <filename.png> --fullpage
  ```

  wobei `<filename.png>` der gewünschte Dateiname ist. Die Datei wird in Ihrem Download-Ordner gespeichert. Der `--fullpage` Parameter ist optional, aber wenn er enthalten ist, wird die gesamte Webseite gespeichert. Diese Option fügt auch `-fullpage` zum Namen der Datei hinzu. Für eine Liste aller Optionen, die für diesen Befehl verfügbar sind, geben Sie ein: `:screenshot --help`

#### Entfernungen

- Die _Developer Toolbar/GCLI_ (zugänglich mit `Shift` + `F2`), **wurde entfernt** aus Firefox ([Firefox bug 1461970](https://bugzil.la/1461970)). Sowohl die Benutzeroberfläche der Developer Toolbar als auch die Upstream-Bibliothek GCLI wurden nicht mehr gepflegt; einige ihrer Funktionen sind fehlerhaft (einige seit e10s), sie blockiert die `unsafeSetInnerHTML` Arbeit, die Nutzungszahlen sind sehr niedrig, und für die meistgenutzten Befehle gibt es Alternativen.

### HTML

_Keine Änderungen._

### CSS

- `:-moz-selection` wurde ohne Präfix zu {{cssxref("::selection")}} ([Firefox bug 509958](https://bugzil.la/509958)).
- `x` wird jetzt als Einheit für den {{cssxref("&lt;resolution&gt;")}} Typ unterstützt ([Firefox bug 1460655](https://bugzil.la/1460655)).
- {{cssxref("shape-margin")}}, {{cssxref("shape-outside")}}, und {{cssxref("shape-image-threshold")}} sind jetzt standardmäßig aktiviert ([Firefox bug 1457297](https://bugzil.la/1457297)).

#### Entfernungen

- Alle XUL-`display`-Werte mit Ausnahme von `-moz-box` und `-moz-inline-box` wurden aus nicht-XUL-Dokumenten entfernt in [Firefox bug 1288572](https://bugzil.la/1288572).

### SVG

_Keine Änderungen._

### JavaScript

- Der [`WebAssembly.Global()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Global) Konstruktor wird jetzt unterstützt, zusammen mit globalen Variablen in WebAssembly ([Firefox bug 1464656](https://bugzil.la/1464656)).
- Die {{jsxref("Array.prototype.flat()")}} und {{jsxref("Array.prototype.flatMap()")}} Methoden sind jetzt standardmäßig aktiviert ([Firefox bug 1435813](https://bugzil.la/1435813)).
- Die [`import.meta`](/de/docs/Web/JavaScript/Reference/Operators/import.meta) Eigenschaft wurde implementiert, um kontextspezifische Metadaten in einem JavaScript-Modul bereitzustellen ([Firefox bug 1427610](https://bugzil.la/1427610)).
- JavaScript [string literals](/de/docs/Web/JavaScript/Reference/Lexical_grammar#string_literals) dürfen jetzt direkt die Zeichen U+2028 LINE SEPARATOR und U+2029 PARAGRAPH SEPARATOR enthalten. Infolgedessen ist {{jsxref("JSON")}}-Syntax jetzt eine Teilmenge der JavaScript-Literatursyntax (siehe [Firefox bug 1435828](https://bugzil.la/1435828) und den TC39-Vorschlag [json-superset](https://github.com/tc39/proposal-json-superset)).
- Für aus-dem-Bereich [typed array](/de/docs/Web/JavaScript/Guide/Typed_arrays) Indizes werden {{jsxref("Reflect.defineProperty()")}} und {{jsxref("Reflect.set()")}} jetzt `false` anstelle von `true` zurückgeben ([Firefox bug 1308735](https://bugzil.la/1308735)).

#### Entfernungen

- Die `DOMPoint` und `DOMPointReadOnly` Konstruktoren unterstützen keine Eingabeparameter vom Typ `DOMPointInit` mehr; die Werte der Eigenschaften müssen mithilfe der Parameter `x`, `y`, `z` und `w` angegeben werden ([Firefox bug 1186265](https://bugzil.la/1186265)).
- Die [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) Methode unterstützt nicht mehr das Erstellen von Objekt-URLs zum Darstellen eines [`MediaStream`](/de/docs/Web/API/MediaStream). Diese Fähigkeit ist seit einiger Zeit obsolet, da Sie jetzt [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) direkt auf den `MediaStream` einstellen können ([Firefox bug 1454889](https://bugzil.la/1454889)).

### APIs

#### Neue APIs

- Die [Sprachsynthese-API (Text-zu-Sprache)](/de/docs/Web/API/Web_Speech_API) ist jetzt standardmäßig auf Firefox für Android aktiviert ([Firefox bug 1463496](https://bugzil.la/1463496)).

#### DOM

- Die [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly) Schnittstelle unterstützt jetzt die statische Funktion [`DOMPointReadOnly.fromPoint()`](/de/docs/Web/API/DOMPointReadOnly/fromPoint_static), die ein neues Punktobjekt aus einem Wörterbuch erstellt, das mit `DOMPointInit` kompatibel ist, was auch ein [`DOMPoint`](/de/docs/Web/API/DOMPoint) Objekt einschließt. Diese Funktion ist auch auf [`DOMPoint`](/de/docs/Web/API/DOMPoint) verfügbar ([Firefox bug 1186265](https://bugzil.la/1186265)).
- Aus Kompatibilitätsgründen wird die [`Event.srcElement`](/de/docs/Web/API/Event/srcElement) Eigenschaft jetzt unterstützt. Es ist ein Alias für [`Event.target`](/de/docs/Web/API/Event/target) ([Firefox bug 453968](https://bugzil.la/453968)).
- [`Navigator.registerProtocolHandler()`](/de/docs/Web/API/Navigator/registerProtocolHandler) darf jetzt nur noch aus einem sicheren Kontext aufgerufen werden ([Firefox bug 1460506](https://bugzil.la/1460506)).
- Die Methode `Navigator.registerContentHandler()` wurde standardmäßig deaktiviert, um vollständig entfernt zu werden, da sie seit einiger Zeit veraltet ist ([Firefox bug 1460481](https://bugzil.la/1460481)).
- Der [`DataTransfer()`](/de/docs/Web/API/DataTransfer/DataTransfer) Konstruktor wurde implementiert ([Firefox bug 1351193](https://bugzil.la/1351193)).
- [`Document.domain`](/de/docs/Web/API/Document/domain) kann nicht mehr `null` zurückgeben ([Firefox bug 819475](https://bugzil.la/819475)). Wenn die Domain nicht identifiziert werden kann, gibt `domain` einen leeren String anstelle von `null` zurück.
- Die Methode [`console.timeLog()`](/de/docs/Web/API/console/timeLog_static) wurde hinzugefügt, um den aktuellen Wert eines Konsolen-Timers anzuzeigen, während die Zeit weiterhin verfolgt wird ([Firefox bug 1458466](https://bugzil.la/1458466)).
- Die Methode [`console.countReset()`](/de/docs/Web/API/console/countReset_static) wurde hinzugefügt, um den Wert eines Konsolenzählers zurückzusetzen ([Firefox bug 1459279](https://bugzil.la/1459279)).

#### DOM-Ereignisse

_Keine Änderungen._

#### Service Workers

_Keine Änderungen._

#### Medien, Web Audio und WebRTC

- Die "media.autoplay.enabled" Präferenz steuert jetzt die automatische Wiedergabe sowohl von Audio- als auch von Videoinhalten, anstatt nur von Videoinhalten ([Firefox bug 1413098](https://bugzil.la/1413098)).
- Der [`ChannelSplitterNode`](/de/docs/Web/API/ChannelSplitterNode) wurde korrigiert, um standardmäßig richtig 6 Kanäle zu haben, wobei die `channelInterpretation` auf `"discrete"` und der `channelCountMode` auf `"explicit"` eingestellt sind, gemäß der Spezifikation ([Firefox bug 1456265](https://bugzil.la/1456265)).

#### Entfernungen

- Die `userproximity` und `deviceproximity` Ereignisse sowie die `UserProximityEvent` und `DeviceProximityEvent` Schnittstellen wurden standardmäßig hinter der `device.sensors.proximity.enabled` Präferenz deaktiviert ([Firefox bug 1462308](https://bugzil.la/1462308)).
- Das `devicelight` Ereignis des Typs `DeviceLightEvent` wurde standardmäßig hinter der `device.sensors.ambientLight.enabled` Präferenz deaktiviert ([Firefox bug 1462308](https://bugzil.la/1462308)).
- Die `DOMSubtreeModified` und `DOMAttrModified` [Mutationsereignisse](/de/docs/Web/API/MutationEvent) werden nicht mehr ausgelöst, wenn das [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style) Attribut über das CSSOM geändert wird ([Firefox bug 1460295](https://bugzil.la/1460295)).
- Unterstützung für [`CSSStyleDeclaration.getPropertyCSSValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyCSSValue) wurde entfernt ([Firefox bug 1408301](https://bugzil.la/1408301)).
- Unterstützung für [`CSSValue`](/de/docs/Web/API/CSSValue), [`CSSPrimitiveValue`](/de/docs/Web/API/CSSPrimitiveValue) und [`CSSValueList`](/de/docs/Web/API/CSSValueList) wurde entfernt ([Firefox bug 1459871](https://bugzil.la/1459871)).
- [`window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) gibt nicht mehr `null` zurück, wenn es auf einem `Window` aufgerufen wird, das keine Darstellung hat ([Firefox bug 1467722](https://bugzil.la/1467722)).

### HTTP

#### Entfernungen

- Die veraltete CSP `referrer` Direktive wurde entfernt. Bitte verwenden Sie den {{HTTPHeader("Referrer-Policy")}} Header stattdessen ([Firefox bug 1302449](https://bugzil.la/1302449)).

### Sicherheit

_Keine Änderungen._

### Plugins

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

#### Neue Funktionen

- Der Befehl `WebDriver:ElementSendKeys` wurde WebDriver-konform für Dateiuploads gemacht ([Firefox bug 1448792](https://bugzil.la/1448792)).
- Benutzeraufforderungen, die durch `beforeunload` Ereignisse aufgerufen werden, werden automatisch für die Befehle `WebDriver:Get`, `WebDriver:Back`, `WebDriver:Forward`, `WebDriver:Refresh` und `WebDriver:Close` abgewiesen ([Firefox bug 1434872](https://bugzil.la/1434872)).
- `WebDriver:PerformActions` für `Ctrl` + `Click` synthetisiert ein [`contextmenu`](/de/docs/Web/API/Element/contextmenu_event) Ereignis ([Firefox bug 1421323](https://bugzil.la/1421323)).

#### API-Änderungen

- Entfernte veraltete Endpunkte, einschließlich `getWindowPosition`, `setWindowPosition`, `getWindowSize`, und `setWindowSize` ([Firefox bug 1348145](https://bugzil.la/1348145)).
- WebDriver Befehle, die Erfolg mit den Daten `null` zurückgeben, geben jetzt ein leeres Wörterbuch zurück ([Firefox bug 1461463](https://bugzil.la/1461463)).

#### Fehlerbehebungen

- `WebDriver:ExecuteScript` verursachte zyklischen Referenzfehler für [WebElement](/de/docs/Web/WebDriver/Reference/WebElement) Sammlungen ([Firefox bug 1447977](https://bugzil.la/1447977)).
- Das Dispatchen eines `pointerMove` oder `pause` Aktionsprimitivs konnte einen Stillstand verursachen, und dass der Befehl niemals eine Antwort sendet ([Firefox bug 1467743](https://bugzil.la/1467743), [Firefox bug 1447449](https://bugzil.la/1447449)).

### Sonstiges

_Keine Änderungen._

## Änderungen für Add-on-Entwickler

### API-Änderungen

- Die {{WebExtAPIRef("webRequest.getSecurityInfo()")}} API wurde hinzugefügt, um Details von TLS-Verbindungen zu untersuchen ([Firefox bug 1322748](https://bugzil.la/1322748)).
- Die {{WebExtAPIRef("browserSettings.newTabPosition")}} wurde hinzugefügt, um anzupassen, wo neue Tabs geöffnet werden ([Firefox bug 1344749](https://bugzil.la/1344749)).
- `windowTypes` wurde in {{WebExtAPIRef("windows.get()")}}, {{WebExtAPIRef("windows.getCurrent()")}} und {{WebExtAPIRef("windows.getLastFocused()")}} als veraltet markiert ([Firefox bug 1419132](https://bugzil.la/1419132)).
- Es ist jetzt möglich, eine Browser-Aktion auf Basis des Fensters zu ändern ([Firefox bug 1419893](https://bugzil.la/1419893)).

### Manifest-Änderungen

- Die neue `open_at_install` Eigenschaft des [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) Manifest-Schlüssels ermöglicht es Erweiterungen zu steuern, ob ihre Seitenleisten automatisch bei der Installation geöffnet werden sollen oder nicht ([Firefox bug 1460910](https://bugzil.la/1460910)).
- Änderungen der `browser_style` Eigenschaft von verschiedenen Manifest-Schlüsseln:
  - In [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) und [`browser_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) ist es standardmäßig auf `false` gesetzt.
  - In [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) und [`options_ui`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) ist es standardmäßig auf `true` gesetzt.

### Designänderungen

- Die neue `tab_background_separator` Eigenschaft des [`theme`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) Manifest-Schlüssels ermöglicht es Erweiterungen, die Farbe des Tab-Trenners zu ändern ([Firefox bug 1459455](https://bugzil.la/1459455)).

### Entfernungen

- Unterstützung für nicht gepackte sideloaded Erweiterungen wurde entfernt ([Firefox bug 1385057](https://bugzil.la/1385057)).
- Die Warnung über `browser_style`, die beim vorübergehenden Laden einer Erweiterung für Testzwecke angezeigt wurde, wird nicht mehr angezeigt ([Firefox bug 1404724](https://bugzil.la/1404724)).

## Ältere Versionen

{{Firefox_for_developers}}
