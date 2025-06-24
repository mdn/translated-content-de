---
title: Firefox 62 für Entwickler
slug: Mozilla/Firefox/Releases/62
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 62, die Entwickler betreffen werden. Firefox 62 wurde am 5. September 2018 veröffentlicht.

## Änderungen für Webentwickler

### Entwickler-Werkzeuge

- Der Shape-Pfad-Editor ist jetzt standardmäßig verfügbar — siehe [Bearbeiten von Shape-Pfaden in CSS](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html) für weitere Informationen.
- Sie können jetzt die Regelansicht in ein eigenes Bereichsfenster abtrennen, das von den anderen Tabs im CSS-Bereich getrennt ist. Siehe [Seiteninspektor 3-Bereichsmodus](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/3-pane_mode/index.html) für weitere Details.
- Der Grid-Inspektor hat aktualisierte Funktionen und eine komplett neue Dokumentation — siehe [CSS Grid Inspector: Untersuchen von Grid-Layouts](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html).
- Sie haben jetzt vier Optionen für die Position der Entwickler-Werkzeuge. Zusätzlich zur Standardposition am unteren Rand des Fensters können Sie die Werkzeuge entweder auf der linken oder rechten Seite des Hauptfensters oder in einem separaten Fenster platzieren ([Firefox-Bug 1192642](https://bugzil.la/1192642)).
- Ein Schließen-Button wurde zur [geteilten Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/split_console/index.html) Toolbar hinzugefügt.
- Wenn die Option "Ein iframe als das aktuell ausgewählte Dokument festlegen" aktiviert ist, wird das Symbol in der Toolbar angezeigt, während die Einstellung im Tab angezeigt wird, auch wenn die aktuelle Seite keine iframes enthält ([Firefox-Bug 1456069](https://bugzil.la/1456069)).
- Der [Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html)'s [Cookies-Tab](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#cookies) zeigt jetzt das `samesite`-Attribut des Cookies an ([Firefox-Bug 1452715](https://bugzil.la/1452715)).
- Der [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) funktioniert jetzt auch in Container-Tabs ([Firefox-Bug 1306975](https://bugzil.la/1306975)).
- Wenn {{Glossary("CORS", "CORS")}}-Fehler auftreten und in der Konsole gemeldet werden, bietet Firefox jetzt einen Link zur entsprechenden Seite in unserer [CORS-Fehlerdokumentation](/de/docs/Web/HTTP/Guides/CORS/Errors) ([Firefox-Bug 1475391](https://bugzil.la/1475391)).
- Erstellen Sie einen Screenshot der aktuellen Seite (mit optionalem Dateinamen) vom Console-Tab aus ([Firefox-Bug 1464461](https://bugzil.la/1464461)) mit dem folgenden Befehl:

  ```bash
  :screenshot <filename.png> --fullpage
  ```

  wobei `<filename.png>` der gewünschte Dateiname ist. Die Datei wird in Ihrem Downloads-Ordner gespeichert. Der Parameter `--fullpage` ist optional, aber wenn er aufgenommen wird, speichert er die komplette Webseite. Diese Option fügt dem Namen der Datei auch `-fullpage` hinzu. Für eine Liste aller verfügbaren Optionen für diesen Befehl geben Sie ein: `:screenshot --help`

#### Entfernungen

- Die _Entwicklertoolleiste/GCLI_ (aufgerufen mit `Shift` + `F2`) **wurde entfernt** aus Firefox ([Firefox-Bug 1461970](https://bugzil.la/1461970)). Sowohl die Benutzeroberfläche der Entwicklertoolleiste als auch die GCLI-Upstream-Bibliothek sind nicht mehr gepflegt. Einige ihrer Funktionen sind defekt (einige schon seit e10s), sie blockiert die `unsafeSetInnerHTML`-Arbeit, die Nutzungszahlen sind sehr gering, Alternativen existieren für die meistgenutzten Befehle.

### HTML

_Keine Änderungen._

### CSS

- `:-moz-selection` wurde als {{cssxref("::selection")}} unprefixed ([Firefox-Bug 509958](https://bugzil.la/509958)).
- `x` wird jetzt als Einheit für den {{cssxref("&lt;resolution&gt;")}}-Typ unterstützt ([Firefox-Bug 1460655](https://bugzil.la/1460655)).
- {{cssxref("shape-margin")}}, {{cssxref("shape-outside")}}, und {{cssxref("shape-image-threshold")}} sind jetzt standardmäßig aktiviert ([Firefox-Bug 1457297](https://bugzil.la/1457297)).

#### Entfernungen

- Alle [XUL `display` Werte](/de/docs/Web/CSS/display#xul_values) mit Ausnahme von `-moz-box` und `-moz-inline-box` wurden aus nicht-XUL-Dokumenten entfernt in [Firefox-Bug 1288572](https://bugzil.la/1288572).

### SVG

_Keine Änderungen._

### JavaScript

- Der [`WebAssembly.Global()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Global)-Konstruktor wird jetzt unterstützt, ebenso wie globale Variablen in WebAssembly ([Firefox-Bug 1464656](https://bugzil.la/1464656)).
- Die Methoden {{jsxref("Array.prototype.flat()")}} und {{jsxref("Array.prototype.flatMap()")}} sind jetzt standardmäßig aktiviert ([Firefox-Bug 1435813](https://bugzil.la/1435813)).
- Die [`import.meta`](/de/docs/Web/JavaScript/Reference/Operators/import.meta)-Eigenschaft wurde implementiert, um kontextspezifische Metadaten zu einem JavaScript-Modul bereitzustellen ([Firefox-Bug 1427610](https://bugzil.la/1427610)).
- JavaScript-[String-Literale](/de/docs/Web/JavaScript/Reference/Lexical_grammar#string_literals) können jetzt direkt die Zeichen U+2028 LINE SEPARATOR und U+2029 PARAGRAPH SEPARATOR enthalten. Folglich ist die {{jsxref("JSON")}}-Syntax jetzt eine Teilmenge der JavaScript-Literal-Syntax (siehe [Firefox-Bug 1435828](https://bugzil.la/1435828) und den TC39-Vorschlag [json-superset](https://github.com/tc39/proposal-json-superset)).
- Für nicht vorhandene [typed array](/de/docs/Web/JavaScript/Guide/Typed_arrays)-Indizes geben {{jsxref("Reflect.defineProperty()")}} und {{jsxref("Reflect.set()")}} jetzt `false` statt `true` zurück ([Firefox-Bug 1308735](https://bugzil.la/1308735)).

#### Entfernungen

- Die Konstruktoren `DOMPoint` und `DOMPointReadOnly` unterstützen keinen Eingabeparameter vom Typ `DOMPointInit` mehr; die Werte der Eigenschaften müssen durch die Parameter `x`, `y`, `z` und `w` spezifiziert werden ([Firefox-Bug 1186265](https://bugzil.la/1186265)).
- Die Methode [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) unterstützt nicht mehr das Erstellen von Objekt-URLs zur Darstellung eines [`MediaStream`](/de/docs/Web/API/MediaStream). Diese Fähigkeit ist seit einiger Zeit obsolet, da Sie jetzt [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) direkt auf den `MediaStream` setzen können ([Firefox-Bug 1454889](https://bugzil.la/1454889)).

### APIs

#### Neue APIs

- Die [Speech Synthesis API (Text-to-Speech)](/de/docs/Web/API/Web_Speech_API) ist jetzt standardmäßig in Firefox für Android aktiviert ([Firefox-Bug 1463496](https://bugzil.la/1463496)).

#### DOM

- Die [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly)-Schnittstelle unterstützt jetzt die statische Funktion [`DOMPointReadOnly.fromPoint()`](/de/docs/Web/API/DOMPointReadOnly/fromPoint_static), die ein neues Punktobjekt aus einem Wörterbuch erstellt, das mit `DOMPointInit` kompatibel ist, das jedes [`DOMPoint`](/de/docs/Web/API/DOMPoint)-Objekt einschließt. Diese Funktion ist auch verfügbar bei [`DOMPoint`](/de/docs/Web/API/DOMPoint) ([Firefox-Bug 1186265](https://bugzil.la/1186265)).
- Zur Zweck der Kompatibilität wird die Eigenschaft [`Event.srcElement`](/de/docs/Web/API/Event/srcElement) jetzt unterstützt. Sie ist ein Alias für [`Event.target`](/de/docs/Web/API/Event/target) ([Firefox-Bug 453968](https://bugzil.la/453968)).
- [`Navigator.registerProtocolHandler()`](/de/docs/Web/API/Navigator/registerProtocolHandler) muss jetzt nur noch aus einem sicheren Kontext aufgerufen werden ([Firefox-Bug 1460506](https://bugzil.la/1460506)).
- Die Methode `Navigator.registerContentHandler()` wurde standardmäßig deaktiviert, in Vorbereitung darauf, vollständig entfernt zu werden, da sie seit einiger Zeit obsolet ist ([Firefox-Bug 1460481](https://bugzil.la/1460481)).
- Der [`DataTransfer()`](/de/docs/Web/API/DataTransfer/DataTransfer)-Konstruktor wurde implementiert ([Firefox-Bug 1351193](https://bugzil.la/1351193)).
- [`Document.domain`](/de/docs/Web/API/Document/domain) kann nicht mehr `null` zurückgeben ([Firefox-Bug 819475](https://bugzil.la/819475)). Wenn die Domain nicht identifiziert werden kann, dann gibt `domain` einen leeren String statt `null` zurück.
- Die Methode [`console.timeLog()`](/de/docs/Web/API/console/timeLog_static) wurde hinzugefügt, um den aktuellen Wert eines Konsolentimers anzuzeigen, während die Zeit weiterverfolgt wird ([Firefox-Bug 1458466](https://bugzil.la/1458466)).
- Die Methode [`console.countReset()`](/de/docs/Web/API/console/countReset_static) wurde hinzugefügt, um den Wert eines Konsolenzählers zurückzusetzen ([Firefox-Bug 1459279](https://bugzil.la/1459279)).

#### DOM-Ereignisse

_Keine Änderungen._

#### Service Workers

_Keine Änderungen._

#### Medien, Web Audio und WebRTC

- Die Einstellung `"media.autoplay.enabled"` steuert jetzt die automatische Wiedergabe sowohl von Audio- als auch Videomedien, anstatt nur Videomedien ([Firefox-Bug 1413098](https://bugzil.la/1413098)).
- Der [`ChannelSplitterNode`](/de/docs/Web/API/ChannelSplitterNode) wurde korrigiert und hat jetzt standardmäßig 6 Kanäle, wobei `channelInterpretation` auf `"discrete"` und `channelCountMode` auf `"explicit"` eingestellt ist, entsprechend der Spezifikation ([Firefox-Bug 1456265](https://bugzil.la/1456265)).

#### Entfernungen

- Die `userproximity` und `deviceproximity` Ereignisse sowie die `UserProximityEvent` und `DeviceProximityEvent` Schnittstellen sind standardmäßig hinter der Einstellung `device.sensors.proximity.enabled` deaktiviert ([Firefox-Bug 1462308](https://bugzil.la/1462308)).
- Das `devicelight` Ereignis vom Typ `DeviceLightEvent` ist standardmäßig hinter der Einstellung `device.sensors.ambientLight.enabled` deaktiviert ([Firefox-Bug 1462308](https://bugzil.la/1462308)).
- Die `DOMSubtreeModified` und `DOMAttrModified` [Mutationsergeignisse](/de/docs/Web/API/MutationEvent) werden nicht mehr ausgelöst, wenn das [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attribut über das CSSOM geändert wird ([Firefox-Bug 1460295](https://bugzil.la/1460295).
- Die Unterstützung für [`CSSStyleDeclaration.getPropertyCSSValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyCSSValue) wurde entfernt ([Firefox-Bug 1408301](https://bugzil.la/1408301)).
- Die Unterstützung für [`CSSValue`](/de/docs/Web/API/CSSValue), [`CSSPrimitiveValue`](/de/docs/Web/API/CSSPrimitiveValue), und [`CSSValueList`](/de/docs/Web/API/CSSValueList) wurde entfernt ([Firefox-Bug 1459871](https://bugzil.la/1459871)).
- [`window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) gibt keinen `null` mehr zurück, wenn es auf ein `Window` ohne Präsentation aufgerufen wird ([Firefox-Bug 1467722](https://bugzil.la/1467722)).

### HTTP

#### Entfernungen

- Die veraltete CSP-Direktive {{CSP("referrer")}} wurde entfernt. Bitte verwenden Sie stattdessen den {{HTTPHeader("Referrer-Policy")}}-Header ([Firefox-Bug 1302449](https://bugzil.la/1302449)).

### Sicherheit

_Keine Änderungen._

### Plugins

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

#### Neue Funktionen

- Der Befehl `WebDriver:ElementSendKeys` wurde für Datei-Uploads WebDriver-konform gemacht ([Firefox-Bug 1448792](https://bugzil.la/1448792)).
- Nutzereingabeaufforderungen, die durch `beforeunload`-Ereignisse verursacht werden, werden automatisch abgelehnt für die Befehle `WebDriver:Get`, `WebDriver:Back`, `WebDriver:Forward`, `WebDriver:Refresh`, und `WebDriver:Close` ([Firefox-Bug 1434872](https://bugzil.la/1434872)).
- `WebDriver:PerformActions` für `Ctrl` + `Click` generiert ein [`contextmenu`](/de/docs/Web/API/Element/contextmenu_event)-Ereignis ([Firefox-Bug 1421323](https://bugzil.la/1421323)).

#### API-Änderungen

- Veraltete Endpunkte wie `getWindowPosition`, `setWindowPosition`, `getWindowSize`, und `setWindowSize` wurden entfernt ([Firefox-Bug 1348145](https://bugzil.la/1348145)).
- WebDriver-Befehle, die Erfolg mit den Daten `null` zurückgeben, geben jetzt ein leeres Wörterbuch zurück ([Firefox-Bug 1461463](https://bugzil.la/1461463)).

#### Fehlerbehebungen

- `WebDriver:ExecuteScript` verursachte zyklische Referenzfehler für [WebElement](/de/docs/Web/WebDriver/WebElement)-Sammlungen ([Firefox-Bug 1447977](https://bugzil.la/1447977)).
- Das Auslösen eines `pointerMove` oder `pause` Aktionen-Primitive konnte zu einem Hängenbleiben führen, und der Befehl keine Antwort senden ([Firefox-Bug 1467743](https://bugzil.la/1467743), [Firefox-Bug 1447449](https://bugzil.la/1447449)).

### Sonstiges

_Keine Änderungen._

## Änderungen für Add-on-Entwickler

### API-Änderungen

- Die API {{WebExtAPIRef("webRequest.getSecurityInfo()")}} wurde hinzugefügt, um TLS-Verbindungsdetails zu untersuchen ([Firefox-Bug 1322748](https://bugzil.la/1322748)).
- Die {{WebExtAPIRef("browserSettings.newTabPosition")}} wurde hinzugefügt, um anzupassen, wo neue Tabs geöffnet werden ([Firefox-Bug 1344749](https://bugzil.la/1344749)).
- `windowTypes` wurde in {{WebExtAPIRef("windows.get()")}}, {{WebExtAPIRef("windows.getCurrent()")}}, und {{WebExtAPIRef("windows.getLastFocused()")}} als veraltet erklärt ([Firefox-Bug 1419132](https://bugzil.la/1419132)).
- Es ist jetzt möglich, eine Browseraktion auf Basis jedes Fensters zu ändern ([Firefox-Bug 1419893](https://bugzil.la/1419893)).

### Manifest-Änderungen

- Die neue `open_at_install` Eigenschaft des [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) Manifestschlüssels ermöglicht es Erweiterungen zu steuern, ob ihre Seitenleisten beim Installieren automatisch geöffnet werden sollen oder nicht ([Firefox-Bug 1460910](https://bugzil.la/1460910)).
- Änderungen an der `browser_style` Eigenschaft verschiedener Manifestschlüssel:
  - Diese Eigenschaft wird in [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) und [`browser_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) standardmäßig auf `false` gesetzt.
  - In [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) und [`options_ui`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) ist sie standardmäßig auf `true` gesetzt.

### Theme-Änderungen

- Die neue `tab_background_separator` Eigenschaft des [`theme`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) Manifestschlüssels ermöglicht es Erweiterungen, die Farbe des Tab-Trenners zu ändern ([Firefox-Bug 1459455](https://bugzil.la/1459455)).

### Entfernungen

- Die Unterstützung für nicht gepackte, seitlich geladene Erweiterungen wurde entfernt ([Firefox-Bug 1385057](https://bugzil.la/1385057)).
- Die Warnung über `browser_style`, die angezeigt wird, wenn eine Erweiterung zum Testen vorübergehend geladen wird, wird nicht mehr angezeigt ([Firefox-Bug 1404724](https://bugzil.la/1404724)).

## Ältere Versionen

{{Firefox_for_developers}}
