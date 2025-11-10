---
title: Firefox 62 Versionshinweise für Entwickler
short-title: Firefox 62
slug: Mozilla/Firefox/Releases/62
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 62, die Entwickler betreffen werden. Firefox 62 wurde am 5. September 2018 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Der Shape Path Editor ist jetzt standardmäßig verfügbar — siehe [Edit Shape Paths in CSS](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html) für weitere Informationen.
- Sie können nun die Regelansicht in ein eigenes Fenster abtrennen, getrennt von den anderen Tabs im CSS-Fenster. Weitere Details finden Sie unter [Page inspector 3-pane mode](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/3-pane_mode/index.html).
- Der Grid-Inspektor hat aktualisierte Funktionen und völlig neue Dokumentation — siehe [CSS Grid Inspector: Examine grid layouts](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html).
- Es gibt jetzt vier Optionen für die Platzierung der Entwicklerwerkzeuge. Zusätzlich zur Standardplatzierung am unteren Rand des Fensters können Sie die Werkzeuge entweder auf der linken oder rechten Seite des Hauptfensters oder in einem separaten Fenster verorten ([Firefox-Bug 1192642](https://bugzil.la/1192642)).
- Ein Schließen-Button wurde zur [geteilten Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/split_console/index.html) Symbolleiste hinzugefügt.
- Wenn die Option "Wählen Sie ein iframe als das aktuell anvisierte Dokument" aktiviert ist, wird das Symbol in der Symbolleiste angezeigt, während die Registerkarte "Einstellungen" angezeigt wird, auch wenn die aktuelle Seite keine iframes enthält ([Firefox-Bug 1456069](https://bugzil.la/1456069)).
- Der [Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html)'s [Cookies-Tab](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#cookies) zeigt jetzt das Cookie-Attribut `samesite` an ([Firefox-Bug 1452715](https://bugzil.la/1452715)).
- Der [Responsive Design-Modus](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) funktioniert jetzt innerhalb von Containertabs ([Firefox-Bug 1306975](https://bugzil.la/1306975)).
- Wenn {{Glossary("CORS", "CORS")}}-Fehler auftreten und in der Konsole gemeldet werden, bietet Firefox jetzt einen Link zur entsprechenden Seite in unserer [CORS-Fehlerdokumentation](/de/docs/Web/HTTP/Guides/CORS/Errors) ([Firefox-Bug 1475391](https://bugzil.la/1475391)).
- Erstellen Sie einen Screenshot der aktuellen Seite (mit einem optionalen Dateinamen) aus dem Console-Tab ([Firefox-Bug 1464461](https://bugzil.la/1464461)) mit folgendem Befehl:

  ```bash
  :screenshot <filename.png> --fullpage
  ```

  wobei `<filename.png>` der gewünschte Dateiname ist. Die Datei wird in Ihrem Download-Ordner gespeichert. Der Parameter `--fullpage` ist optional, aber wenn er eingeschlossen ist, wird die gesamte Webseite gespeichert. Diese Option fügt dem Dateinamen auch `-fullpage` hinzu. Für eine Liste aller verfügbaren Optionen für diesen Befehl, geben Sie ein: `:screenshot --help`

#### Entfernungen

- Die _Entwicklerwerkzeugleiste/GCLI_ (zugänglich mit `Shift` + `F2`), **wurde entfernt** aus Firefox ([Firefox-Bug 1461970](https://bugzil.la/1461970)). Sowohl die Entwicklerwerkzeugleiste UI als auch die GCLI Upstream-Bibliothek sind ungewartet geworden, einige ihrer Funktionen sind defekt (einige seit e10s), sie blockiert die `unsafeSetInnerHTML`-Arbeit, die Nutzungszahlen sind sehr gering, und es existieren Alternativen für die am häufigsten genutzten Befehle.

### HTML

_Keine Änderungen._

### CSS

- `:-moz-selection` wurde ohne Präfix zu {{cssxref("::selection")}} ([Firefox-Bug 509958](https://bugzil.la/509958)).
- `x` wird jetzt als Einheit für den Typ {{cssxref("&lt;resolution&gt;")}} unterstützt ([Firefox-Bug 1460655](https://bugzil.la/1460655)).
- {{cssxref("shape-margin")}}, {{cssxref("shape-outside")}}, und {{cssxref("shape-image-threshold")}} sind jetzt standardmäßig aktiviert ([Firefox-Bug 1457297](https://bugzil.la/1457297)).

#### Entfernungen

- Alle XUL `display`-Werte mit Ausnahme von `-moz-box` und `-moz-inline-box` wurden aus Nicht-XUL-Dokumenten entfernt in [Firefox-Bug 1288572](https://bugzil.la/1288572).

### SVG

_Keine Änderungen._

### JavaScript

- Der [`WebAssembly.Global()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Global) Konstruktor wird jetzt unterstützt, zusammen mit globalen Variablen in WebAssembly ([Firefox-Bug 1464656](https://bugzil.la/1464656)).
- Die Methoden {{jsxref("Array.prototype.flat()")}} und {{jsxref("Array.prototype.flatMap()")}} sind jetzt standardmäßig aktiviert ([Firefox-Bug 1435813](https://bugzil.la/1435813)).
- Die [`import.meta`](/de/docs/Web/JavaScript/Reference/Operators/import.meta)-Eigenschaft wurde implementiert, um kontextspezifische Metadaten für ein JavaScript-Modul bereitzustellen ([Firefox-Bug 1427610](https://bugzil.la/1427610)).
- JavaScript [string literals](/de/docs/Web/JavaScript/Reference/Lexical_grammar#string_literals) können jetzt direkt die U+2028 LINE SEPARATOR und U+2029 PARAGRAPH SEPARATOR-Zeichen enthalten. Infolge dessen ist die {{jsxref("JSON")}}-Syntax jetzt ein Subset der JavaScript-Literal-Syntax (siehe [Firefox-Bug 1435828](https://bugzil.la/1435828) und den TC39-Vorschlag [json-superset](https://github.com/tc39/proposal-json-superset)).
- Für Out-of-Bounds-Indizes in [typed array](/de/docs/Web/JavaScript/Guide/Typed_arrays) geben {{jsxref("Reflect.defineProperty()")}} und {{jsxref("Reflect.set()")}} jetzt `false` statt `true` zurück ([Firefox-Bug 1308735](https://bugzil.la/1308735)).

#### Entfernungen

- Die Konstruktoren `DOMPoint` und `DOMPointReadOnly` unterstützen nicht mehr einen Eingabeparameter vom Typ `DOMPointInit`; die Werte der Eigenschaften müssen jetzt durch die Parameter `x`, `y`, `z`, und `w` angegeben werden ([Firefox-Bug 1186265](https://bugzil.la/1186265)).
- Die Methode [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) unterstützt nicht mehr das Erstellen von Objekt-URLs zur Darstellung eines [`MediaStream`](/de/docs/Web/API/MediaStream). Diese Fähigkeit ist seit einiger Zeit veraltet, da Sie nun [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) auf den `MediaStream` direkt setzen können ([Firefox-Bug 1454889](https://bugzil.la/1454889)).

### APIs

#### Neue APIs

- Die [Speech Synthesis API (Text-to-Speech)](/de/docs/Web/API/Web_Speech_API) ist jetzt standardmäßig auf Firefox für Android aktiviert ([Firefox-Bug 1463496](https://bugzil.la/1463496)).

#### DOM

- Das Interface [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly) unterstützt nun die statische Funktion [`DOMPointReadOnly.fromPoint()`](/de/docs/Web/API/DOMPointReadOnly/fromPoint_static), die ein neues Punktobjekt aus einem mit `DOMPointInit` kompatiblen Dictionary erstellt, das auch jedes [`DOMPoint`](/de/docs/Web/API/DOMPoint)-Objekt einschließt. Diese Funktion ist auch auf [`DOMPoint`](/de/docs/Web/API/DOMPoint) verfügbar ([Firefox-Bug 1186265](https://bugzil.la/1186265)).
- Aus Kompatibilitätsgründen wird die [`Event.srcElement`](/de/docs/Web/API/Event/srcElement)-Eigenschaft jetzt unterstützt. Sie ist ein Alias für [`Event.target`](/de/docs/Web/API/Event/target) ([Firefox-Bug 453968](https://bugzil.la/453968)).
- [`Navigator.registerProtocolHandler()`](/de/docs/Web/API/Navigator/registerProtocolHandler) muss jetzt nur noch aus einem sicheren Kontext aufgerufen werden ([Firefox-Bug 1460506](https://bugzil.la/1460506)).
- Die `Navigator.registerContentHandler()`-Methode wurde standardmäßig deaktiviert, um auf ihre vollständige Entfernung vorbereitet zu sein, da sie seit einiger Zeit veraltet ist ([Firefox-Bug 1460481](https://bugzil.la/1460481)).
- Der [`DataTransfer()`](/de/docs/Web/API/DataTransfer/DataTransfer)-Konstruktor wurde implementiert ([Firefox-Bug 1351193](https://bugzil.la/1351193)).
- [`Document.domain`](/de/docs/Web/API/Document/domain) kann nicht mehr `null` zurückgeben ([Firefox-Bug 819475](https://bugzil.la/819475)). Wenn die Domain nicht identifiziert werden kann, gibt `domain` stattdessen einen leeren String zurück.
- Die Methode [`console.timeLog()`](/de/docs/Web/API/console/timeLog_static) wurde hinzugefügt, um den aktuellen Wert eines Konsolentimers anzuzeigen während die Zeit weiterhin verfolgt wird ([Firefox-Bug 1458466](https://bugzil.la/1458466)).
- Hinzugefügt [`console.countReset()`](/de/docs/Web/API/console/countReset_static) zum Zurücksetzen eines Konsolenzählwerts ([Firefox-Bug 1459279](https://bugzil.la/1459279)).

#### DOM-Ereignisse

_Keine Änderungen._

#### Service Workers

_Keine Änderungen._

#### Media, Web Audio, und WebRTC

- Die Einstellung `"media.autoplay.enabled"` steuert jetzt die automatische Wiedergabe von sowohl Audio- als auch Videomedien, statt nur von Videomedien ([Firefox-Bug 1413098](https://bugzil.la/1413098)).
- Der [`ChannelSplitterNode`](/de/docs/Web/API/ChannelSplitterNode) wurde so angepasst, dass er korrekt standardmäßig auf 6 Kanäle mit der `channelInterpretation` als `"discrete"` und die `channelCountMode` als `"explicit"` gesetzt ist, gemäß der Spezifikation ([Firefox-Bug 1456265](https://bugzil.la/1456265)).

#### Entfernungen

- Die Ereignisse `userproximity` und `deviceproximity` sowie die Schnittstellen `UserProximityEvent` und `DeviceProximityEvent` wurden standardmäßig hinter der `device.sensors.proximity.enabled`-Einstellung deaktiviert ([Firefox-Bug 1462308](https://bugzil.la/1462308)).
- Das `devicelight`-Ereignis des Typs `DeviceLightEvent` wurde standardmäßig hinter der `device.sensors.ambientLight.enabled`-Einstellung deaktiviert ([Firefox-Bug 1462308](https://bugzil.la/1462308)).
- Die [Mutationsereignisse](/de/docs/Web/API/MutationEvent) `DOMSubtreeModified` und `DOMAttrModified` werden nicht mehr ausgelöst, wenn das [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attribut über das CSSOM geändert wird ([Firefox-Bug 1460295](https://bugzil.la/1460295).
- Unterstützung für [`CSSStyleDeclaration.getPropertyCSSValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyCSSValue) wurde entfernt ([Firefox-Bug 1408301](https://bugzil.la/1408301)).
- Unterstützung für [`CSSValue`](/de/docs/Web/API/CSSValue), [`CSSPrimitiveValue`](/de/docs/Web/API/CSSPrimitiveValue), und [`CSSValueList`](/de/docs/Web/API/CSSValueList) wurde entfernt ([Firefox-Bug 1459871](https://bugzil.la/1459871)).
- [`window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) gibt nicht mehr `null` zurück, wenn der Aufruf auf einem `Window` erfolgt, das keine Präsentation hat ([Firefox-Bug 1467722](https://bugzil.la/1467722)).

### HTTP

#### Entfernungen

- Die veraltete CSP-`referrer`-Directive wurde entfernt. Bitte verwenden Sie stattdessen den {{HTTPHeader("Referrer-Policy")}}-Header ([Firefox-Bug 1302449](https://bugzil.la/1302449)).

### Sicherheit

_Keine Änderungen._

### Plugins

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

#### Neue Funktionen

- Der Befehl `WebDriver:ElementSendKeys` wurde WebDriver-konform für Datei-Uploads gemacht ([Firefox-Bug 1448792](https://bugzil.la/1448792)).
- Vom `beforeunload`-Ereignis ausgelöste Benutzeraufforderungen werden automatisch für die Befehle `WebDriver:Get`, `WebDriver:Back`, `WebDriver:Forward`, `WebDriver:Refresh`, und `WebDriver:Close` verworfen ([Firefox-Bug 1434872](https://bugzil.la/1434872)).
- `WebDriver:PerformActions` für `Ctrl` + `Click` synthetisiert ein [`contextmenu`](/de/docs/Web/API/Element/contextmenu_event)-Ereignis ([Firefox-Bug 1421323](https://bugzil.la/1421323)).

#### API-Änderungen

- Veraltete Endpunkte inklusive `getWindowPosition`, `setWindowPosition`, `getWindowSize`, und `setWindowSize` wurden entfernt ([Firefox-Bug 1348145](https://bugzil.la/1348145)).
- WebDriver-Befehle, die mit den Daten `null` erfolgreich sind, geben jetzt ein leeres Dictionary zurück ([Firefox-Bug 1461463](https://bugzil.la/1461463)).

#### Fehlerbehebungen

- `WebDriver:ExecuteScript` verursachte einen Referenzfehler für [WebElement](/de/docs/Web/WebDriver/Reference/WebElement)-Sammlungen ([Firefox-Bug 1447977](https://bugzil.la/1447977)).
- Das Versenden eines `pointerMove` oder `pause` Aktionsprimitivs könnte einen Stillstand verursachen, und der Befehl könnte nie eine Antwort senden ([Firefox-Bug 1467743](https://bugzil.la/1467743), [Firefox-Bug 1447449](https://bugzil.la/1447449)).

### Sonstiges

_Keine Änderungen._

## Änderungen für Add-on-Entwickler

### API-Änderungen

- Die {{WebExtAPIRef("webRequest.getSecurityInfo()")}} API wurde hinzugefügt, um Details von TLS-Verbindungen zu untersuchen ([Firefox-Bug 1322748](https://bugzil.la/1322748)).
- Die {{WebExtAPIRef("browserSettings.newTabPosition")}} wurde hinzugefügt, um festzulegen, wo neue Tabs geöffnet werden ([Firefox-Bug 1344749](https://bugzil.la/1344749)).
- `windowTypes` wurde in {{WebExtAPIRef("windows.get()")}}, {{WebExtAPIRef("windows.getCurrent()")}}, und {{WebExtAPIRef("windows.getLastFocused()")}} als veraltet markiert ([Firefox-Bug 1419132](https://bugzil.la/1419132)).
- Es ist jetzt möglich, eine Browseraktion auf Fensterbasis zu modifizieren ([Firefox-Bug 1419893](https://bugzil.la/1419893)).

### Manifest-Änderungen

- Das neue `open_at_install`-Attribut des [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action)-Manifest-Schlüssels erlaubt es Erweiterungen zu kontrollieren, ob ihre Sidebars automatisch bei der Installation geöffnet werden sollen ([Firefox-Bug 1460910](https://bugzil.la/1460910)).
- Änderungen am `browser_style`-Attribut der verschiedenen Manifest-Schlüssel:
  - In [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) und [`browser_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) standardmäßig auf `false`.
  - In [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) und [`options_ui`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) standardmäßig auf `true`.

### Theme-Änderungen

- Das neue `tab_background_separator`-Attribut des [`theme`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme)-Manifest-Schlüssels erlaubt es Erweiterungen, die Farbe des Tab-Trenners zu ändern ([Firefox-Bug 1459455](https://bugzil.la/1459455)).

### Entfernungen

- Unterstützung für ungeladene nebeninstallierte Erweiterungen wurde entfernt ([Firefox-Bug 1385057](https://bugzil.la/1385057)).
- Die Warnung über `browser_style`, die angezeigt wird, wenn eine Erweiterung vorübergehend zum Testen geladen wird, wird nicht mehr angezeigt ([Firefox-Bug 1404724](https://bugzil.la/1404724)).
