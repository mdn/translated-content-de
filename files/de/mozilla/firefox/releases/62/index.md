---
title: Firefox 62 für Entwickler
slug: Mozilla/Firefox/Releases/62
l10n:
  sourceCommit: df9d06402163f77fc3e2d327ab63f9dd4af15b38
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 62, die Entwickler betreffen. Firefox 62 wurde am 5. September 2018 veröffentlicht.

## Änderungen für Web-Entwickler

### Entwicklertools

- Der Shape Path Editor ist jetzt standardmäßig verfügbar – siehe [Edit Shape Paths in CSS](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html) für weitere Informationen.
- Sie können jetzt die Ansicht "Regeln" in ein eigenes Fenster aufteilen, getrennt von den anderen Tabs im CSS-Fenster. Siehe [Seiteninspektor 3-Fenster-Modus](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/3-pane_mode/index.html) für mehr Details.
- Der Grid-Inspektor hat aktualisierte Funktionen und eine komplett neue Dokumentation – siehe [CSS Grid Inspector: Gitter-Layouts untersuchen](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html).
- Sie haben nun vier Optionen für die Position der Entwicklerwerkzeuge. Zusätzlich zum Standardort am unteren Rand des Fensters können Sie wählen, ob die Werkzeuge an den linken oder rechten Seiten des Hauptfensters oder in einem separaten Fenster platziert werden sollen ([Firefox-Bug 1192642](https://bugzil.la/1192642)).
- Ein Schließen-Knopf wurde zur [geteilten Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/split_console/index.html) Werkzeugleiste hinzugefügt.
- Wenn die Option "Ein iframe als aktuell zielgerichtetes Dokument auswählen" aktiviert ist, wird das Symbol in der Toolbar angezeigt, während die Registerkarte Einstellungen angezeigt wird, auch wenn die aktuelle Seite keine iframes enthält ([Firefox-Bug 1456069](https://bugzil.la/1456069)).
- Die [Netzwerküberwachung](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html)'s [Cookies-Registerkarte](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#cookies) zeigt jetzt das `samesite` Attribut von Cookies ([Firefox-Bug 1452715](https://bugzil.la/1452715)).
- Der [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) funktioniert jetzt innerhalb von Containertabs ([Firefox-Bug 1306975](https://bugzil.la/1306975)).
- Bei {{Glossary("CORS", "CORS")}} Fehlern, die auf der Konsole gemeldet werden, bietet Firefox jetzt einen Link zur entsprechenden Seite in unserer [CORS-Fehlerdokumentation](/de/docs/Web/HTTP/CORS/Errors) ([Firefox-Bug 1475391](https://bugzil.la/1475391)).
- Erstellen Sie einen Screenshot der aktuellen Seite (mit einem optionalen Dateinamen) aus der Konsole Registerkarte ([Firefox-Bug 1464461](https://bugzil.la/1464461)) mit folgendem Befehl:

  ```bash
  :screenshot <filename.png> --fullpage
  ```

  wobei `<filename.png>` der gewünschte Dateiname ist. Die Datei wird in Ihrem Download-Ordner gespeichert. Der `--fullpage` Parameter ist optional, aber wenn er enthalten ist, wird die gesamte Webseite gespeichert. Diese Option fügt auch `-fullpage` zum Namen der Datei hinzu. Für eine Liste aller verfügbaren Optionen für diesen Befehl, geben Sie ein: `:screenshot --help`

#### Entfernungen

- Die _Entwickler-Toolbar/GCLI_ (aufgerufen mit `Shift` + `F2`), **wurde entfernt** aus Firefox ([Firefox-Bug 1461970](https://bugzil.la/1461970)). Sowohl die UI der Entwickler-Toolbar als auch die GCLI-Upstream-Bibliothek sind ungewartet geworden, einige ihrer Funktionen sind defekt (einige schon seit e10s), sie blockiert die `unsafeSetInnerHTML`-Arbeit, die Nutzungszahlen sind sehr niedrig, Alternativen existieren für die am meisten genutzten Befehle.

### HTML

_Keine Änderungen._

### CSS

- `:-moz-selection` wurde als {{cssxref("::selection")}} entprefixt ([Firefox-Bug 509958](https://bugzil.la/509958)).
- `x` wird jetzt als Einheit für den Typ {{cssxref("&lt;resolution&gt;")}} unterstützt ([Firefox-Bug 1460655](https://bugzil.la/1460655)).
- {{cssxref("shape-margin")}}, {{cssxref("shape-outside")}}, und {{cssxref("shape-image-threshold")}} sind jetzt standardmäßig aktiviert ([Firefox-Bug 1457297](https://bugzil.la/1457297)).

#### Entfernungen

- Alle [XUL `display` Werte](/de/docs/Web/CSS/display#xul_values) mit Ausnahme von `-moz-box` und `-moz-inline-box` wurden aus nicht-XUL Dokumenten in [Firefox-Bug 1288572](https://bugzil.la/1288572) entfernt.

### SVG

_Keine Änderungen._

### JavaScript

- Der [`WebAssembly.Global()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Global) Konstruktor wird jetzt unterstützt, zusammen mit globalen Variablen in WebAssembly ([Firefox-Bug 1464656](https://bugzil.la/1464656)).
- Die Methoden {{jsxref("Array.prototype.flat()")}} und {{jsxref("Array.prototype.flatMap()")}} sind jetzt standardmäßig aktiviert ([Firefox-Bug 1435813](https://bugzil.la/1435813)).
- Die [`import.meta`](/de/docs/Web/JavaScript/Reference/Operators/import.meta) Eigenschaft wurde implementiert, um kontextspezifische Metadaten für ein JavaScript-Modul bereitzustellen ([Firefox-Bug 1427610](https://bugzil.la/1427610)).
- JavaScript [String-Literale](/de/docs/Web/JavaScript/Reference/Lexical_grammar#string_literals) können jetzt direkt die U+2028 LINE SEPARATOR und U+2029 PARAGRAPH SEPARATOR Zeichen enthalten. Folglich ist die {{jsxref("JSON")}} Syntax jetzt ein Teil der JavaScript-Literal-Syntax (siehe [Firefox-Bug 1435828](https://bugzil.la/1435828) und den TC39 Vorschlag [json-superset](https://github.com/tc39/proposal-json-superset)).
- Für außerhalb des Bereichs liegende [typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Indizes werden {{jsxref("Reflect.defineProperty()")}} und {{jsxref("Reflect.set()")}} jetzt `false` statt `true` zurückgeben ([Firefox-Bug 1308735](https://bugzil.la/1308735)).

#### Entfernungen

- Die `DOMPoint` und `DOMPointReadOnly` Konstruktoren unterstützen keinen Eingabeparameter vom Typ `DOMPointInit` mehr; die Werte der Eigenschaften müssen mit den Parametern `x`, `y`, `z`, und `w` spezifiziert werden ([Firefox-Bug 1186265](https://bugzil.la/1186265)).
- Die Methode [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) unterstützt nicht mehr das Erstellen von Objekt-URLs zur Darstellung eines [`MediaStream`](/de/docs/Web/API/MediaStream). Diese Fähigkeit ist seit einiger Zeit überholt, da Sie jetzt [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) direkt auf den `MediaStream` setzen können ([Firefox-Bug 1454889](https://bugzil.la/1454889)).

### APIs

#### Neue APIs

- Die [Speech Synthesis API (Text-zu-Sprache)](/de/docs/Web/API/Web_Speech_API) ist jetzt standardmäßig auf Firefox für Android aktiviert ([Firefox-Bug 1463496](https://bugzil.la/1463496)).

#### DOM

- Die Schnittstelle [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly) unterstützt jetzt die statische Funktion [`DOMPointReadOnly.fromPoint()`](/de/docs/Web/API/DOMPointReadOnly/fromPoint_static), welche ein neues Punktobjekt aus einem Wörterbuch erstellt, das kompatibel mit `DOMPointInit` ist, inklusive jedem [`DOMPoint`](/de/docs/Web/API/DOMPoint) Objekt. Diese Funktion ist auch auf [`DOMPoint`](/de/docs/Web/API/DOMPoint) verfügbar ([Firefox-Bug 1186265](https://bugzil.la/1186265)).
- Aus Kompatibilitätsgründen wird die Eigenschaft [`Event.srcElement`](/de/docs/Web/API/Event/srcElement) jetzt unterstützt. Sie ist ein Alias für [`Event.target`](/de/docs/Web/API/Event/target) ([Firefox-Bug 453968](https://bugzil.la/453968)).
- [`Navigator.registerProtocolHandler()`](/de/docs/Web/API/Navigator/registerProtocolHandler) darf jetzt nur aus einem sicheren Kontext aufgerufen werden ([Firefox-Bug 1460506](https://bugzil.la/1460506)).
- Die Methode `Navigator.registerContentHandler()` wurde standardmäßig deaktiviert, um die vollständige Entfernung vorzubereiten, da sie seit einiger Zeit überholt ist ([Firefox-Bug 1460481](https://bugzil.la/1460481)).
- Der [`DataTransfer()`](/de/docs/Web/API/DataTransfer/DataTransfer) Konstruktor wurde implementiert ([Firefox-Bug 1351193](https://bugzil.la/1351193)).
- [`Document.domain`](/de/docs/Web/API/Document/domain) kann nicht mehr `null` zurückgeben ([Firefox-Bug 819475](https://bugzil.la/819475)). Wenn die Domain nicht identifiziert werden kann, gibt `domain` einen leeren String zurück, anstatt `null`.
- Die Methode [`console.timeLog()`](/de/docs/Web/API/Console/timeLog_static) wurde hinzugefügt, um den aktuellen Wert eines Konsolentimers anzuzeigen und die Zeit weiterhin zu verfolgen ([Firefox-Bug 1458466](https://bugzil.la/1458466)).
- [`console.countReset()`](/de/docs/Web/API/Console/countReset_static) wurde hinzugefügt, um den Wert eines Konsolenzählers zurückzusetzen ([Firefox-Bug 1459279](https://bugzil.la/1459279)).

#### DOM-Ereignisse

_Keine Änderungen._

#### Service Workers

_Keine Änderungen._

#### Medien, Web Audio, und WebRTC

- Die Vorliebe `"media.autoplay.enabled"` steuert jetzt die automatische Wiedergabe von sowohl Audio- als auch Videomedien, anstatt nur von Videomedien ([Firefox-Bug 1413098](https://bugzil.la/1413098)).
- Der [`ChannelSplitterNode`](/de/docs/Web/API/ChannelSplitterNode) wurde korrigiert, um standardmäßig 6 Kanäle mit der `channelInterpretation` auf `"discrete"` und der `channelCountMode` auf `"explicit"` zu haben, wie in der Spezifikation ([Firefox-Bug 1456265](https://bugzil.la/1456265)).

#### Entfernungen

- Die Ereignisse `userproximity` und `deviceproximity`, sowie die Schnittstellen `UserProximityEvent` und `DeviceProximityEvent`, wurden standardmäßig hinter der Vorwahl `device.sensors.proximity.enabled` deaktiviert ([Firefox-Bug 1462308](https://bugzil.la/1462308)).
- Das `devicelight` Ereignis vom Typ `DeviceLightEvent` wurde standardmäßig hinter der Vorwahl `device.sensors.ambientLight.enabled` deaktiviert ([Firefox-Bug 1462308](https://bugzil.la/1462308)).
- Die [Mutationsereignisse](/de/docs/Web/API/MutationEvent) `DOMSubtreeModified` und `DOMAttrModified` werden nicht mehr ausgelöst, wenn das [`style`](/de/docs/Web/HTML/Global_attributes/style) Attribut über das CSSOM geändert wird ([Firefox-Bug 1460295](https://bugzil.la/1460295)).
- Die Unterstützung für [`CSSStyleDeclaration.getPropertyCSSValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyCSSValue) wurde entfernt ([Firefox-Bug 1408301](https://bugzil.la/1408301)).
- Die Unterstützung für [`CSSValue`](/de/docs/Web/API/CSSValue), [`CSSPrimitiveValue`](/de/docs/Web/API/CSSPrimitiveValue), und [`CSSValueList`](/de/docs/Web/API/CSSValueList) wurde entfernt ([Firefox-Bug 1459871](https://bugzil.la/1459871)).
- [`window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) gibt nicht mehr `null` zurück, wenn es auf einem `Window` ohne Präsentation aufgerufen wird ([Firefox-Bug 1467722](https://bugzil.la/1467722)).

### HTTP

#### Entfernungen

- Die veraltete CSP-Direktive {{CSP("referrer")}} wurde entfernt. Bitte nutzen Sie stattdessen den {{HTTPHeader("Referrer-Policy")}} Header ([Firefox-Bug 1302449](https://bugzil.la/1302449)).

### Sicherheit

_Keine Änderungen._

### Plugins

_Keine Änderungen._

### WebDriver-Komformität (Marionette)

#### Neue Funktionen

- Der Befehl `WebDriver:ElementSendKeys` wurde WebDriver-komform für Dateiuploads gemacht ([Firefox-Bug 1448792](https://bugzil.la/1448792)).
- Benutzeraufforderungen, die von `beforeunload` Ereignissen hervorgerufen werden, werden automatisch für die Befehle `WebDriver:Get`, `WebDriver:Back`, `WebDriver:Forward`, `WebDriver:Refresh`, und `WebDriver:Close` abgelehnt ([Firefox-Bug 1434872](https://bugzil.la/1434872)).
- `WebDriver:PerformActions` für `Ctrl` + `Click` synthetisiert ein [`contextmenu`](/de/docs/Web/API/Element/contextmenu_event) Ereignis ([Firefox-Bug 1421323](https://bugzil.la/1421323)).

#### API-Änderungen

- Veraltete Endpunkte einschließlich `getWindowPosition`, `setWindowPosition`, `getWindowSize`, und `setWindowSize` wurden entfernt ([Firefox-Bug 1348145](https://bugzil.la/1348145)).
- WebDriver-Befehle, die Erfolg mit dem Datum `null` zurückgeben, geben jetzt ein leeres Wörterbuch zurück ([Firefox-Bug 1461463](https://bugzil.la/1461463)).

#### Fehlerbehebungen

- `WebDriver:ExecuteScript` verursachte einen zyklischen Referenzfehler für [WebElement](/de/docs/Web/WebDriver/WebElement) Sammlungen ([Firefox-Bug 1447977](https://bugzil.la/1447977)).
- Das Auslösen einer `pointerMove` oder `pause` Aktionsprimitive könnte zu einem Hänger führen, und der Befehl sendet möglicherweise nie eine Rückmeldung ([Firefox-Bug 1467743](https://bugzil.la/1467743), [Firefox-Bug 1447449](https://bugzil.la/1447449)).

### Weitere

_Keine Änderungen._

## Änderungen für Add-on-Entwickler

### API-Änderungen

- Die API {{WebExtAPIRef("webRequest.getSecurityInfo()")}} wurde hinzugefügt, um Details von TLS-Verbindungen zu untersuchen ([Firefox-Bug 1322748](https://bugzil.la/1322748)).
- Die {{WebExtAPIRef("browserSettings.newTabPosition")}} wurde hinzugefügt, um anzupassen, wo neue Tabs geöffnet werden ([Firefox-Bug 1344749](https://bugzil.la/1344749)).
- `windowTypes` wurde in {{WebExtAPIRef("windows.get()")}}, {{WebExtAPIRef("windows.getCurrent()")}}, und {{WebExtAPIRef("windows.getLastFocused()")}} als veraltet markiert ([Firefox-Bug 1419132](https://bugzil.la/1419132)).
- Es ist jetzt möglich, eine Browseraktion für jedes Fenster separat zu ändern ([Firefox-Bug 1419893](https://bugzil.la/1419893)).

### Manifest-Änderungen

- Die neue `open_at_install` Eigenschaft des [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) Manifest-Schlüssels ermöglicht es Erweiterungen zu steuern, ob ihre Seitenleisten automatisch bei der Installation geöffnet werden sollen oder nicht ([Firefox-Bug 1460910](https://bugzil.la/1460910)).
- Änderungen zur Eigenschaft `browser_style` von verschiedenen Manifest-Schlüsseln:

  - In [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) und [`browser_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) ist der Standardwert `false`.
  - In [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) und [`options_ui`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) ist der Standardwert `true`.

### Theme-Änderungen

- Die neue Eigenschaft `tab_background_separator` des [`theme`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) Manifest-Schlüssels ermöglicht es Erweiterungen die Farbe des Tab-Separators zu ändern ([Firefox-Bug 1459455](https://bugzil.la/1459455)).

### Entfernungen

- Die Unterstützung für unverpackte, side-geloadete Erweiterungen wurde entfernt ([Firefox-Bug 1385057](https://bugzil.la/1385057)).
- Die Warnung über `browser_style`, die angezeigt wird, wenn eine Erweiterung vorübergehend für Tests geladen wird, wird nicht mehr angezeigt ([Firefox-Bug 1404724](https://bugzil.la/1404724)).

## Ältere Versionen

{{Firefox_for_developers}}
