---
title: Firefox 62 für Entwickler
slug: Mozilla/Firefox/Releases/62
l10n:
  sourceCommit: 83266dac8d670b493141002c825f7fb8876dd29d
---

{{FirefoxSidebar}}

Dieser Artikel informiert über Änderungen in Firefox 62, die Entwickler betreffen. Firefox 62 wurde am 5. September 2018 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Der Shape Path Editor ist jetzt standardmäßig verfügbar — siehe [Formpfade in CSS bearbeiten](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html) für weitere Informationen.
- Sie können jetzt die Ansichtsregeln in ein eigenes Panel aufteilen, getrennt von den anderen Tabs im CSS-Panel. Siehe [Seiteninspektor 3-Panel-Modus](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/3-pane_mode/index.html) für weitere Details.
- Der Grid-Inspektor hat aktualisierte Funktionen und vollständig neue Dokumentation — siehe [CSS-Grid-Inspektor: Untersuchen von Grid-Layouts](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html).
- Es gibt jetzt vier Optionen für die Position der Entwicklerwerkzeuge. Zusätzlich zur Standardposition unten im Fenster können Sie die Werkzeuge entweder links oder rechts vom Hauptfenster oder in einem separaten Fenster positionieren ([Firefox-Bug 1192642](https://bugzil.la/1192642)).
- Eine Schließen-Schaltfläche wurde der [geteilten Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/split_console/index.html) Toolbar hinzugefügt.
- Wenn die Option "Ein `iframe` als aktuell ausgewähltes Dokument auswählen" aktiviert ist, wird das Symbol in der Toolbar angezeigt, solange die Einstellungen-Registerkarte sichtbar ist, auch wenn die aktuelle Seite keine `iframe`-Elemente enthält ([Firefox-Bug 1456069](https://bugzil.la/1456069)).
- Der [Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html)'s [Cookies-Tab](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#cookies) zeigt jetzt das Cookie-Attribut `samesite` an ([Firefox-Bug 1452715](https://bugzil.la/1452715)).
- Der [Modus für responsives Design](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) funktioniert jetzt innerhalb von Container-Tabs ([Firefox-Bug 1306975](https://bugzil.la/1306975)).
- Bei {{Glossary("CORS", "CORS")}}-Fehlern, die in der Konsole gemeldet werden, stellt Firefox jetzt einen Link zur entsprechenden Seite in unserer [CORS-Fehlerdokumentation](/de/docs/Web/HTTP/CORS/Errors) bereit ([Firefox-Bug 1475391](https://bugzil.la/1475391)).
- Zum Erstellen eines Screenshots der aktuellen Seite (mit optionalem Dateinamen) aus dem Konsolen-Tab verwenden Sie den folgenden Befehl ([Firefox-Bug 1464461](https://bugzil.la/1464461)):

  ```bash
  :screenshot <filename.png> --fullpage
  ```

  wobei `<filename.png>` der gewünschte Dateiname ist. Die Datei wird in Ihrem Downloads-Ordner gespeichert. Der `--fullpage` Parameter ist optional, aber bei Angabe wird die gesamte Webseite gespeichert. Diese Option fügt der Datei auch `-fullpage` zum Namen hinzu. Für eine Liste aller für diesen Befehl verfügbaren Optionen geben Sie ein: `:screenshot --help`

#### Entfernungen

- Die _Developer Toolbar/GCLI_ (aufgerufen mit `Shift` + `F2`) **wurde entfernt** aus Firefox ([Firefox-Bug 1461970](https://bugzil.la/1461970)). Sowohl die Benutzeroberfläche der Developer Toolbar als auch die GCLI-Upstream-Bibliothek werden nicht mehr gewartet, einige ihrer Funktionen sind defekt (einige seit e10s), sie blockiert die `unsafeSetInnerHTML` Arbeit, die Nutzungszahlen sind sehr gering, Alternativen existieren für die am meisten genutzten Befehle.

### HTML

_Keine Änderungen._

### CSS

- `:-moz-selection` wurde zu {{cssxref("::selection")}} unpräsentiert ([Firefox-Bug 509958](https://bugzil.la/509958)).
- `x` wird jetzt als Einheit für den {{cssxref("&lt;resolution&gt;")}} Typ unterstützt ([Firefox-Bug 1460655](https://bugzil.la/1460655)).
- {{cssxref("shape-margin")}}, {{cssxref("shape-outside")}} und {{cssxref("shape-image-threshold")}} sind jetzt standardmäßig aktiviert ([Firefox-Bug 1457297](https://bugzil.la/1457297)).

#### Entfernungen

- Alle [XUL-`display`-Werte](/de/docs/Web/CSS/display#xul_values) mit Ausnahme von `-moz-box` und `-moz-inline-box` wurden aus Nicht-XUL-Dokumenten entfernt in [Firefox-Bug 1288572](https://bugzil.la/1288572).

### SVG

_Keine Änderungen._

### JavaScript

- Der [`WebAssembly.Global()`](/de/docs/WebAssembly/JavaScript_interface/Global) Konstruktor wird jetzt unterstützt, zusammen mit globalen Variablen in WebAssembly ([Firefox-Bug 1464656](https://bugzil.la/1464656)).
- Die {{jsxref("Array.prototype.flat()")}} und {{jsxref("Array.prototype.flatMap()")}} Methoden sind jetzt standardmäßig aktiviert ([Firefox-Bug 1435813](https://bugzil.la/1435813)).
- Die [`import.meta`](/de/docs/Web/JavaScript/Reference/Operators/import.meta) Eigenschaft wurde implementiert, um kontextbezogene Metadaten in einem JavaScript-Modul bereitzustellen ([Firefox-Bug 1427610](https://bugzil.la/1427610)).
- JavaScript [String-Literale](/de/docs/Web/JavaScript/Reference/Lexical_grammar#string_literals) können jetzt direkt die U+2028 LINE SEPARATOR und U+2029 PARAGRAPH SEPARATOR Zeichen enthalten. Folglich ist die {{jsxref("JSON")}}-Syntax jetzt ein Teil der JavaScript-Literal-Syntax (siehe [Firefox-Bug 1435828](https://bugzil.la/1435828) und der TC39-Vorschlag [json-superset](https://github.com/tc39/proposal-json-superset)).
- Für außerhalb des Bereichs befindliche [typisierte Array](/de/docs/Web/JavaScript/Guide/Typed_arrays) Indizes werden {{jsxref("Reflect.defineProperty()")}} und {{jsxref("Reflect.set()")}} nun `false` statt `true` zurückgeben ([Firefox-Bug 1308735](https://bugzil.la/1308735)).

#### Entfernungen

- Die `DOMPoint` und `DOMPointReadOnly` Konstruktoren unterstützen keine Eingabeparameter vom Typ `DOMPointInit` mehr; die Werte der Eigenschaften müssen mittels der Parameter `x`, `y`, `z` und `w` angegeben werden ([Firefox-Bug 1186265](https://bugzil.la/1186265)).
- Die [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) Methode unterstützt nicht mehr das Erstellen von Objekt-URLs zur Darstellung eines [`MediaStream`](/de/docs/Web/API/MediaStream). Diese Fähigkeit ist seit einiger Zeit veraltet, da Sie jetzt [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) direkt auf den `MediaStream` setzen können ([Firefox-Bug 1454889](https://bugzil.la/1454889)).

### APIs

#### Neue APIs

- Die [Sprachsynthese-API (Text-zu-Sprache)](/de/docs/Web/API/Web_Speech_API) ist jetzt standardmäßig in Firefox für Android aktiviert ([Firefox-Bug 1463496](https://bugzil.la/1463496)).

#### DOM

- Die [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly) Schnittstelle unterstützt jetzt die statische Funktion [`DOMPointReadOnly.fromPoint()`](/de/docs/Web/API/DOMPointReadOnly/fromPoint_static), die ein neues Punktobjekt aus einem Wörterbuch erstellt, das mit `DOMPointInit` kompatibel ist, einschließlich jedes [`DOMPoint`](/de/docs/Web/API/DOMPoint) Objekts. Diese Funktion ist auch auf [`DOMPoint`](/de/docs/Web/API/DOMPoint) verfügbar ([Firefox-Bug 1186265](https://bugzil.la/1186265)).
- Für Kompatibilitätszwecke wird die [`Event.srcElement`](/de/docs/Web/API/Event/srcElement) Eigenschaft jetzt unterstützt. Sie ist ein Alias für [`Event.target`](/de/docs/Web/API/Event/target) ([Firefox-Bug 453968](https://bugzil.la/453968)).
- [`Navigator.registerProtocolHandler()`](/de/docs/Web/API/Navigator/registerProtocolHandler) muss jetzt ausschließlich aus einem sicheren Kontext aufgerufen werden ([Firefox-Bug 1460506](https://bugzil.la/1460506)).
- Die `Navigator.registerContentHandler()`-Methode wurde standardmäßig deaktiviert, um sie vollständig zu entfernen, da sie seit einiger Zeit veraltet ist ([Firefox-Bug 1460481](https://bugzil.la/1460481)).
- Der [`DataTransfer()`](/de/docs/Web/API/DataTransfer/DataTransfer) Konstruktor wurde implementiert ([Firefox-Bug 1351193](https://bugzil.la/1351193)).
- [`Document.domain`](/de/docs/Web/API/Document/domain) kann nicht mehr `null` zurückgeben ([Firefox-Bug 819475](https://bugzil.la/819475)). Wenn die Domain nicht identifiziert werden kann, gibt `domain` einen leeren String statt `null` zurück.
- Die Methode [`console.timeLog()`](/de/docs/Web/API/Console/timeLog_static) wurde hinzugefügt, um den aktuellen Wert eines Konsolen-Timers anzuzeigen, während die Zeiterfassung fortgesetzt wird ([Firefox-Bug 1458466](https://bugzil.la/1458466)).
- [`console.countReset()`](/de/docs/Web/API/Console/countReset_static) wurde hinzugefügt, um einen Konsolen-Zählerwert zurückzusetzen ([Firefox-Bug 1459279](https://bugzil.la/1459279)).

#### DOM-Ereignisse

_Keine Änderungen._

#### Service Worker

_Keine Änderungen._

#### Medien, Web Audio und WebRTC

- Die Einstellung `"media.autoplay.enabled"` steuert jetzt das automatische Abspielen sowohl von Audio- als auch Videomedien, anstatt nur von Videomedien ([Firefox-Bug 1413098](https://bugzil.la/1413098)).
- Der [`ChannelSplitterNode`](/de/docs/Web/API/ChannelSplitterNode) wurde korrigiert, um standardmäßig 6 Kanäle mit der `channelInterpretation` auf `"discrete"` und der `channelCountMode` auf `"explicit"`, gemäß der Spezifikation, richtig einzustellen ([Firefox-Bug 1456265](https://bugzil.la/1456265)).

#### Entfernungen

- Die `userproximity` und `deviceproximity` Ereignisse sowie die `UserProximityEvent` und `DeviceProximityEvent` Schnittstellen wurden standardmäßig hinter der Einstellung `device.sensors.proximity.enabled` deaktiviert ([Firefox-Bug 1462308](https://bugzil.la/1462308)).
- Das `devicelight` Ereignis vom Typ `DeviceLightEvent` wurde standardmäßig hinter der Einstellung `device.sensors.ambientLight.enabled` deaktiviert ([Firefox-Bug 1462308](https://bugzil.la/1462308)).
- Die `DOMSubtreeModified` und `DOMAttrModified` [Mutationsevents](/de/docs/Web/API/MutationEvent) werden nicht mehr ausgelöst, wenn das [`style`](/de/docs/Web/HTML/Global_attributes/style) Attribut über die CSSOM geändert wird ([Firefox-Bug 1460295](https://bugzil.la/1460295)).
- Die Unterstützung für [`CSSStyleDeclaration.getPropertyCSSValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyCSSValue) wurde entfernt ([Firefox-Bug 1408301](https://bugzil.la/1408301)).
- Unterstützung für [`CSSValue`](/de/docs/Web/API/CSSValue), [`CSSPrimitiveValue`](/de/docs/Web/API/CSSPrimitiveValue) und [`CSSValueList`](/de/docs/Web/API/CSSValueList) wurde entfernt ([Firefox-Bug 1459871](https://bugzil.la/1459871)).
- [`window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) gibt nicht mehr `null` zurück, wenn es auf ein `Window` aufgerufen wird, das keine Präsentation hat ([Firefox-Bug 1467722](https://bugzil.la/1467722)).

### HTTP

#### Entfernungen

- Die veraltete CSP-{{CSP("referrer")}}-Richtlinie wurde entfernt. Bitte verwenden Sie stattdessen den {{HTTPHeader("Referrer-Policy")}} Header ([Firefox-Bug 1302449](https://bugzil.la/1302449)).

### Sicherheit

_Keine Änderungen._

### Plugins

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

#### Neue Funktionen

- Der Befehl `WebDriver:ElementSendKeys` wurde WebDriver-konform für Dateiuploads gemacht ([Firefox-Bug 1448792](https://bugzil.la/1448792)).
- Benutzer-Prompts, die durch `beforeunload` Ereignisse ausgelöst werden, werden automatisch für die Befehle `WebDriver:Get`, `WebDriver:Back`, `WebDriver:Forward`, `WebDriver:Refresh` und `WebDriver:Close` abgewiesen ([Firefox-Bug 1434872](https://bugzil.la/1434872)).
- `WebDriver:PerformActions` für `Ctrl` + `Click` synthetisiert ein [`contextmenu`](/de/docs/Web/API/Element/contextmenu_event) Ereignis ([Firefox-Bug 1421323](https://bugzil.la/1421323)).

#### API-Änderungen

- Veraltete Endpunkte wie `getWindowPosition`, `setWindowPosition`, `getWindowSize` und `setWindowSize` wurden entfernt ([Firefox-Bug 1348145](https://bugzil.la/1348145)).
- WebDriver-Befehle, die Erfolg mit Daten `null` zurückgeben, geben jetzt ein leeres Wörterbuch zurück ([Firefox-Bug 1461463](https://bugzil.la/1461463)).

#### Fehlerbehebungen

- `WebDriver:ExecuteScript` verursachte einen zyklischen Referenzfehler für [WebElement](/de/docs/Web/WebDriver/WebElement) Sammlungen ([Firefox-Bug 1447977](https://bugzil.la/1447977)).
- Das Versenden eines `pointerMove` oder `pause` Aktionen-Primitivs konnte zu einem Hängenbleiben führen und der Befehl sendete nie eine Antwort ([Firefox-Bug 1467743](https://bugzil.la/1467743), [Firefox-Bug 1447449](https://bugzil.la/1447449)).

### Sonstige

_Keine Änderungen._

## Änderungen für Add-on-Entwickler

### API-Änderungen

- Die {{WebExtAPIRef("webRequest.getSecurityInfo()")}} API wurde hinzugefügt, um Einzelheiten zu TLS-Verbindungen zu untersuchen ([Firefox-Bug 1322748](https://bugzil.la/1322748)).
- Die {{WebExtAPIRef("browserSettings.newTabPosition")}} wurde hinzugefügt, um anzupassen, wo neue Tabs geöffnet werden ([Firefox-Bug 1344749](https://bugzil.la/1344749)).
- `windowTypes` wurde in {{WebExtAPIRef("windows.get()")}}, {{WebExtAPIRef("windows.getCurrent()")}}, und {{WebExtAPIRef("windows.getLastFocused()")}} veraltet ([Firefox-Bug 1419132](https://bugzil.la/1419132)).
- Es ist jetzt möglich, eine Browser-Aktion auf Basis eines einzelnen Fensters zu modifizieren ([Firefox-Bug 1419893](https://bugzil.la/1419893)).

### Manifest-Änderungen

- Eine neue `open_at_install` Eigenschaft des [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) Manifest-Schlüssels ermöglicht es Erweiterungen, zu steuern, ob ihre Seitenleisten automatisch bei der Installation geöffnet werden sollen oder nicht ([Firefox-Bug 1460910](https://bugzil.la/1460910)).
- Änderungen an der `browser_style` Eigenschaft verschiedener Manifest-Schlüssel:

  - In [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) und [`browser_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) ist sie standardmäßig `false`.
  - In [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) und [`options_ui`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) ist sie standardmäßig `true`.

### Theme-Änderungen

- Eine neue `tab_background_separator` Eigenschaft des [`theme`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) Manifest-Schlüssels ermöglicht es Erweiterungen, die Farbe des Tab-Trenners zu ändern ([Firefox-Bug 1459455](https://bugzil.la/1459455)).

### Entfernungen

- Die Unterstützung für nicht entpackte, mitgeführte Erweiterungen wurde entfernt ([Firefox-Bug 1385057](https://bugzil.la/1385057)).
- Die Warnung bezüglich `browser_style`, die bei temporärem Laden einer Erweiterung zum Testen angezeigt wurde, wird nicht mehr angezeigt ([Firefox-Bug 1404724](https://bugzil.la/1404724)).

## Ältere Versionen

{{Firefox_for_developers}}
