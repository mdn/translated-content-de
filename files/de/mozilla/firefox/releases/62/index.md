---
title: Firefox 62 für Entwickler
slug: Mozilla/Firefox/Releases/62
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 62, die Entwickler betreffen. Firefox 62 wurde am 5. September 2018 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Der Shape-Pfad-Editor ist jetzt standardmäßig verfügbar — siehe [Edit Shape Paths in CSS](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html) für weitere Informationen.
- Sie können jetzt die Regelnansicht in ein eigenes Fenster unterteilen, getrennt von den anderen Tabs im CSS-Bereich. Siehe [Seiteninspektor 3-Spalten-Modus](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/3-pane_mode/index.html) für mehr Details.
- Der Grid-Inspektor hat aktualisierte Funktionen und eine völlig neue Dokumentation — siehe [CSS Grid Inspector: Grid-Layouts untersuchen](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html).
- Sie haben jetzt vier Optionen für die Position der Entwicklerwerkzeuge. Zusätzlich zur Standardposition unten im Fenster können Sie die Werkzeuge entweder auf die linke oder rechte Seite des Hauptfensters oder in einem separaten Fenster platzieren ([Firefox-Bug 1192642](https://bugzil.la/1192642)).
- Eine Schließen-Schaltfläche wurde zur [geteilten Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/split_console/index.html) Werkzeugleiste hinzugefügt.
- Wenn die Option "Ein iframe als das aktuell anvisierte Dokument auswählen" aktiviert ist, wird das Symbol in der Werkzeugleiste angezeigt, während die Registerkarte "Einstellungen" angezeigt wird, selbst wenn die aktuelle Seite keine iframes enthält ([Firefox-Bug 1456069](https://bugzil.la/1456069)).
- Die Registerkarte [Cookies](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#cookies) des [Netzwerk-Monitors](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) zeigt jetzt das Cookie-Attribut `samesite` ([Firefox-Bug 1452715](https://bugzil.la/1452715)).
- Der [Responsive-Design-Modus](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) funktioniert nun auch in Container-Tabs ([Firefox-Bug 1306975](https://bugzil.la/1306975)).
- Wenn {{Glossary("CORS", "CORS")}}-Fehler auftreten und in der Konsole gemeldet werden, bietet Firefox jetzt einen Link zur entsprechenden Seite in unserer [CORS-Fehlerdokumentation](/de/docs/Web/HTTP/Guides/CORS/Errors) ([Firefox-Bug 1475391](https://bugzil.la/1475391)).
- Erstellen Sie einen Screenshot der aktuellen Seite (mit einem optionalen Dateinamen) aus der Konsole heraus ([Firefox-Bug 1464461](https://bugzil.la/1464461)) mit folgendem Befehl:

  ```bash
  :screenshot <filename.png> --fullpage
  ```

  wobei `<filename.png>` der gewünschte Dateiname ist. Die Datei wird in Ihrem Download-Ordner gespeichert. Der Parameter `--fullpage` ist optional, aber wenn eingeschlossen, wird die komplette Webseite gespeichert. Diese Option fügt dem Dateinamen auch `-fullpage` hinzu. Für eine Liste aller verfügbaren Optionen für diesen Befehl geben Sie ein: `:screenshot --help`

#### Entfernungen

- Die _Entwickler-Symbolleiste/GCLI_ (zugänglich mit `Shift` + `F2`), **wurde entfernt** aus Firefox ([Firefox-Bug 1461970](https://bugzil.la/1461970)). Sowohl die Benutzeroberfläche der Entwickler-Symbolleiste als auch die GCLI-Upstream-Bibliothek werden nicht mehr gewartet, einige ihrer Funktionen sind defekt (zum Teil seit e10s), sie blockiert die `unsafeSetInnerHTML` Arbeit, die Nutzungszahlen sind sehr niedrig und es existieren Alternativen für die am häufigsten verwendeten Befehle.

### HTML

_Keine Änderungen._

### CSS

- `:-moz-selection` wurde auf {{cssxref("::selection")}} unprefixiert ([Firefox-Bug 509958](https://bugzil.la/509958)).
- `x` wird jetzt als Einheit für den {{cssxref("&lt;resolution&gt;")}} Typ unterstützt ([Firefox-Bug 1460655](https://bugzil.la/1460655)).
- {{cssxref("shape-margin")}}, {{cssxref("shape-outside")}} und {{cssxref("shape-image-threshold")}} sind jetzt standardmäßig aktiviert ([Firefox-Bug 1457297](https://bugzil.la/1457297)).

#### Entfernungen

- Alle [XUL `display`-Werte](/de/docs/Web/CSS/display#xul_values) mit Ausnahme von `-moz-box` und `-moz-inline-box` wurden aus Nicht-XUL-Dokumenten entfernt in [Firefox-Bug 1288572](https://bugzil.la/1288572).

### SVG

_Keine Änderungen._

### JavaScript

- Der [`WebAssembly.Global()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Global) Konstruktor wird nun unterstützt, zusammen mit globalen Variablen in WebAssembly ([Firefox-Bug 1464656](https://bugzil.la/1464656)).
- Die Methoden {{jsxref("Array.prototype.flat()")}} und {{jsxref("Array.prototype.flatMap()")}} sind jetzt standardmäßig aktiviert ([Firefox-Bug 1435813](https://bugzil.la/1435813)).
- Die [`import.meta`](/de/docs/Web/JavaScript/Reference/Operators/import.meta) Eigenschaft wurde implementiert, um kontextspezifische Metadaten an ein JavaScript-Modul weiterzugeben ([Firefox-Bug 1427610](https://bugzil.la/1427610)).
- JavaScript [String-Literale](/de/docs/Web/JavaScript/Reference/Lexical_grammar#string_literals) können jetzt direkt die Zeichen U+2028 LINE SEPARATOR und U+2029 PARAGRAPH SEPARATOR enthalten. Infolgedessen ist die {{jsxref("JSON")}}-Syntax nun ein Subset der JavaScript-Literal-Syntax (siehe [Firefox-Bug 1435828](https://bugzil.la/1435828) und den TC39-Vorschlag [json-superset](https://github.com/tc39/proposal-json-superset)).
- Für außerhalb des Bereichs liegende [typed array](/de/docs/Web/JavaScript/Guide/Typed_arrays)-Indizes geben {{jsxref("Reflect.defineProperty()")}} und {{jsxref("Reflect.set()")}} jetzt `false` anstelle von `true` zurück ([Firefox-Bug 1308735](https://bugzil.la/1308735)).

#### Entfernungen

- Die Konstruktoren `DOMPoint` und `DOMPointReadOnly` unterstützen keinen Eingabeparameter vom Typ `DOMPointInit` mehr; die Werte der Eigenschaften müssen mit den Parametern `x`, `y`, `z` und `w` angegeben werden ([Firefox-Bug 1186265](https://bugzil.la/1186265)).
- Die Methode [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) unterstützt nicht mehr die Erstellung von Objekt-URLs zur Darstellung eines [`MediaStream`](/de/docs/Web/API/MediaStream). Diese Fähigkeit ist schon seit einiger Zeit obsolet, da Sie nun [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) direkt auf den `MediaStream` setzen können ([Firefox-Bug 1454889](https://bugzil.la/1454889)).

### APIs

#### Neue APIs

- Die [Speech Synthesis API (Text-to-Speech)](/de/docs/Web/API/Web_Speech_API) ist nun standardmäßig auf Firefox für Android aktiviert ([Firefox-Bug 1463496](https://bugzil.la/1463496)).

#### DOM

- Die [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly) Schnittstelle unterstützt jetzt die statische Funktion [`DOMPointReadOnly.fromPoint()`](/de/docs/Web/API/DOMPointReadOnly/fromPoint_static), die ein neues Punktobjekt aus einem Wörterbuch erstellt, das mit `DOMPointInit` kompatibel ist, einschließlich jedes [`DOMPoint`](/de/docs/Web/API/DOMPoint) Objekts. Diese Funktion ist auch auf [`DOMPoint`](/de/docs/Web/API/DOMPoint) verfügbar ([Firefox-Bug 1186265](https://bugzil.la/1186265)).
- Aus Kompatibilitätsgründen wird nun die [`Event.srcElement`](/de/docs/Web/API/Event/srcElement) Eigenschaft unterstützt. Es ist ein Alias für [`Event.target`](/de/docs/Web/API/Event/target) ([Firefox-Bug 453968](https://bugzil.la/453968)).
- [`Navigator.registerProtocolHandler()`](/de/docs/Web/API/Navigator/registerProtocolHandler) muss jetzt nur noch aus einem sicheren Kontext aufgerufen werden ([Firefox-Bug 1460506](https://bugzil.la/1460506)).
- Die `Navigator.registerContentHandler()`-Methode wurde standardmäßig deaktiviert, da sie komplett entfernt werden soll, da sie seit einiger Zeit obsolet ist ([Firefox-Bug 1460481](https://bugzil.la/1460481)).
- Der [`DataTransfer()`](/de/docs/Web/API/DataTransfer/DataTransfer) Konstruktor wurde implementiert ([Firefox-Bug 1351193](https://bugzil.la/1351193)).
- [`Document.domain`](/de/docs/Web/API/Document/domain) kann nicht mehr `null` zurückgeben ([Firefox-Bug 819475](https://bugzil.la/819475)). Wenn die Domain nicht identifiziert werden kann, gibt `domain` stattdessen einen leeren String und nicht `null` zurück.
- Die Methode [`console.timeLog()`](/de/docs/Web/API/console/timeLog_static) wurde hinzugefügt, um den aktuellen Wert eines Konsolentimers anzuzeigen, während die Zeit weiterhin verfolgt wird ([Firefox-Bug 1458466](https://bugzil.la/1458466)).
- [`console.countReset()`](/de/docs/Web/API/console/countReset_static) wurde hinzugefügt, um einen Konsolenzählwert zurückzusetzen ([Firefox-Bug 1459279](https://bugzil.la/1459279)).

#### DOM-Ereignisse

_Keine Änderungen._

#### Service Workers

_Keine Änderungen._

#### Medien, Web Audio und WebRTC

- Die `"media.autoplay.enabled"` Präferenz steuert jetzt die automatische Wiedergabe sowohl von Audio- als auch von Videomedien, anstatt nur von Videomedien ([Firefox-Bug 1413098](https://bugzil.la/1413098)).
- Der [`ChannelSplitterNode`](/de/docs/Web/API/ChannelSplitterNode) wurde korrigiert, um standardmäßig 6 Kanäle mit der `channelInterpretation` auf `"discrete"` und dem `channelCountMode` auf `"explicit"` gemäß der Spezifikation zu haben ([Firefox-Bug 1456265](https://bugzil.la/1456265)).

#### Entfernungen

- Die `userproximity` und `deviceproximity` Ereignisse sowie die Schnittstellen `UserProximityEvent` und `DeviceProximityEvent` wurden standardmäßig hinter der `device.sensors.proximity.enabled` Präferenz deaktiviert ([Firefox-Bug 1462308](https://bugzil.la/1462308)).
- Das `devicelight` Ereignis vom Typ `DeviceLightEvent` wurde standardmäßig hinter der Präferenz `device.sensors.ambientLight.enabled` deaktiviert ([Firefox-Bug 1462308](https://bugzil.la/1462308)).
- Die `DOMSubtreeModified` und `DOMAttrModified` [Mutation Events](/de/docs/Web/API/MutationEvent) werden nicht mehr ausgelöst, wenn das [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style) Attribut über das CSSOM geändert wird ([Firefox-Bug 1460295](https://bugzil.la/1460295)).
- Unterstützung für [`CSSStyleDeclaration.getPropertyCSSValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyCSSValue) wurde entfernt ([Firefox-Bug 1408301](https://bugzil.la/1408301)).
- Unterstützung für [`CSSValue`](/de/docs/Web/API/CSSValue), [`CSSPrimitiveValue`](/de/docs/Web/API/CSSPrimitiveValue) und [`CSSValueList`](/de/docs/Web/API/CSSValueList) wurde entfernt ([Firefox-Bug 1459871](https://bugzil.la/1459871)).
- [`window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) gibt nicht mehr `null` zurück, wenn es auf ein `Window` ohne Präsentation aufgerufen wird ([Firefox-Bug 1467722](https://bugzil.la/1467722)).

### HTTP

#### Entfernungen

- Die veraltete CSP-Direktive {{CSP("referrer")}} wurde entfernt. Bitte verwenden Sie stattdessen den {{HTTPHeader("Referrer-Policy")}} Header ([Firefox-Bug 1302449](https://bugzil.la/1302449)).

### Sicherheit

_Keine Änderungen._

### Plugins

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

#### Neue Funktionen

- Der Befehl `WebDriver:ElementSendKeys` wurde für Datei-Uploads WebDriver-konform gemacht ([Firefox-Bug 1448792](https://bugzil.la/1448792)).
- Benutzeraufforderungen, wie sie durch `beforeunload` Ereignisse ausgelöst werden, werden automatisch für die Befehle `WebDriver:Get`, `WebDriver:Back`, `WebDriver:Forward`, `WebDriver:Refresh` und `WebDriver:Close` abgelehnt ([Firefox-Bug 1434872](https://bugzil.la/1434872)).
- `WebDriver:PerformActions` für `Ctrl` + `Klick` synthetisiert ein [`contextmenu`](/de/docs/Web/API/Element/contextmenu_event) Ereignis ([Firefox-Bug 1421323](https://bugzil.la/1421323)).

#### API-Änderungen

- Entfernte veraltete Endpunkte einschließlich `getWindowPosition`, `setWindowPosition`, `getWindowSize` und `setWindowSize` ([Firefox-Bug 1348145](https://bugzil.la/1348145)).
- WebDriver-Befehle, die Erfolg mit den Daten `null` zurückgeben, geben jetzt ein leeres Wörterbuch zurück ([Firefox-Bug 1461463](https://bugzil.la/1461463)).

#### Fehlerbehebungen

- `WebDriver:ExecuteScript` verursachte einen zyklischen Referenzfehler für [WebElement](/de/docs/Web/WebDriver/WebElement)-Sammlungen ([Firefox-Bug 1447977](https://bugzil.la/1447977)).
- Das Versenden einer `pointerMove` oder `pause` Aktionsprimitive konnte einen Block verursachen, und der Befehl sendete niemals eine Antwort ([Firefox-Bug 1467743](https://bugzil.la/1467743), [Firefox-Bug 1447449](https://bugzil.la/1447449)).

### Sonstiges

_Keine Änderungen._

## Änderungen für Add-on-Entwickler

### API-Änderungen

- Das {{WebExtAPIRef("webRequest.getSecurityInfo()")}} API wurde hinzugefügt, um Details von TLS-Verbindungen zu untersuchen ([Firefox-Bug 1322748](https://bugzil.la/1322748)).
- Das {{WebExtAPIRef("browserSettings.newTabPosition")}} wurde hinzugefügt, um anzupassen, wo neue Tabs geöffnet werden ([Firefox-Bug 1344749](https://bugzil.la/1344749)).
- `windowTypes` wurde in {{WebExtAPIRef("windows.get()")}}, {{WebExtAPIRef("windows.getCurrent()")}} und {{WebExtAPIRef("windows.getLastFocused()")}} veraltet ([Firefox-Bug 1419132](https://bugzil.la/1419132)).
- Es ist jetzt möglich, eine Browseraktion auf Fensterbasis zu ändern ([Firefox-Bug 1419893](https://bugzil.la/1419893)).

### Manifest-Änderungen

- Die neue `open_at_install` Eigenschaft des [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) Manifest-Schlüssels ermöglicht es Erweiterungen zu steuern, ob ihre Sidebars automatisch beim Installieren geöffnet werden oder nicht ([Firefox-Bug 1460910](https://bugzil.la/1460910)).
- Änderungen an der `browser_style` Eigenschaft von verschiedenen Manifest-Schlüsseln:
  - In [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) und [`browser_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) ist der Standardwert `false`.
  - In [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) und [`options_ui`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) ist der Standardwert `true`.

### Design-Änderungen

- Die neue `tab_background_separator` Eigenschaft des [`theme`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) Manifest-Schlüssels ermöglicht Erweiterungen, die Farbe des Tab-Trenners zu ändern ([Firefox-Bug 1459455](https://bugzil.la/1459455)).

### Entfernungen

- Unterstützung für nicht gepackte, sideloaded Extensions wurde entfernt ([Firefox-Bug 1385057](https://bugzil.la/1385057)).
- Die Warnung über `browser_style`, die bei vorübergehendem Laden einer Erweiterung zu Testzwecken angezeigt wurde, wird nicht mehr angezeigt ([Firefox-Bug 1404724](https://bugzil.la/1404724)).

## Ältere Versionen

{{Firefox_for_developers}}
