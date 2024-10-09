---
title: Firefox 62 für Entwickler
slug: Mozilla/Firefox/Releases/62
l10n:
  sourceCommit: 92447fec056cc89b7f28445851bea0c981fcbc12
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 62, die Entwickler betreffen. Firefox 62 wurde am 5. September 2018 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Der Shape Path Editor ist jetzt standardmäßig verfügbar — siehe [Edit Shape Paths in CSS](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html) für weitere Informationen.
- Sie können nun den Regel-Ansicht-Bereich in ein eigenes Fenster aufteilen, getrennt von den anderen Tabs im CSS-Bereich. Siehe [Page inspector 3-pane mode](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/3-pane_mode/index.html) für mehr Details.
- Der Grid-Inspektor hat aktualisierte Funktionen und eine komplett neue Dokumentation — siehe [CSS Grid Inspector: Examine grid layouts](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html).
- Sie haben jetzt vier Optionen für den Standort der Entwicklerwerkzeuge. Neben dem Standardstandort unten im Fenster können Sie die Werkzeuge auch auf den linken oder rechten Seiten des Hauptfensters platzieren oder in einem separaten Fenster ([Firefox bug 1192642](https://bugzil.la/1192642)).
- Ein Schließen-Knopf wurde zur [Split-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/split_console/index.html) Werkzeugleiste hinzugefügt.
- Wenn die Option "Ein iframe als das aktuell angezielte Dokument auswählen" aktiviert ist, erscheint das Symbol in der Werkzeugleiste, während der Tab mit den Einstellungen angezeigt wird, selbst wenn die aktuelle Seite keine iframes enthält ([Firefox bug 1456069](https://bugzil.la/1456069)).
- Das [Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html)'s [Cookies-Tab](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#cookies) zeigt jetzt das Cookie-Attribut `samesite` ([Firefox bug 1452715](https://bugzil.la/1452715)).
- Der [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) funktioniert jetzt innerhalb von Containertabs ([Firefox bug 1306975](https://bugzil.la/1306975)).
- Bei {{Glossary("CORS", "CORS")}} Fehlern, die in der Konsole gemeldet werden, bietet Firefox jetzt einen Link zur entsprechenden Seite in unserer [CORS-Fehlerdokumentation](/de/docs/Web/HTTP/CORS/Errors) ([Firefox bug 1475391](https://bugzil.la/1475391)).
- Erstellen Sie einen Screenshot der aktuellen Seite (mit einem optionalen Dateinamen) vom Konsolen-Tab ([Firefox bug 1464461](https://bugzil.la/1464461)) mit dem folgenden Befehl:

  ```bash
  :screenshot <filename.png> --fullpage
  ```

  wobei `<filename.png>` der gewünschte Dateiname ist. Die Datei wird in Ihrem Download-Ordner gespeichert. Der Parameter `--fullpage` ist optional, aber wenn er eingeschlossen wird, speichert es die gesamte Webseite. Diese Option fügt auch `-fullpage` zum Dateinamen hinzu. Für eine Liste aller verfügbaren Optionen für diesen Befehl, geben Sie ein: `:screenshot --help`

#### Entfernungen

- Die _Entwickler-Werkzeugleiste/GCLI_ (zugänglich mit `Shift` + `F2`) **wurde aus Firefox entfernt** ([Firefox bug 1461970](https://bugzil.la/1461970)). Sowohl die Entwickler-Werkzeugleiste als auch die GCLI-Open-Source-Bibliothek sind ungewartet, einige ihrer Funktionen sind defekt (teilweise seit e10s), sie blockiert die `unsafeSetInnerHTML`-Arbeit, die Nutzungszahlen sind sehr niedrig und für die am häufigsten verwendeten Befehle existieren Alternativen.

### HTML

_Keine Änderungen._

### CSS

- `:-moz-selection` wurde ohne Präfix zu {{cssxref("::selection")}} ([Firefox bug 509958](https://bugzil.la/509958)).
- `x` wird jetzt als Einheit für den {{cssxref("&lt;resolution&gt;")}} Typ unterstützt ([Firefox bug 1460655](https://bugzil.la/1460655)).
- {{cssxref("shape-margin")}}, {{cssxref("shape-outside")}}, und {{cssxref("shape-image-threshold")}} sind jetzt standardmäßig aktiviert ([Firefox bug 1457297](https://bugzil.la/1457297)).

#### Entfernungen

- Alle [XUL `display` Werte](/de/docs/Web/CSS/display#xul_values) mit Ausnahme von `-moz-box` und `-moz-inline-box` wurden aus Nicht-XUL-Dokumenten entfernt in [Firefox bug 1288572](https://bugzil.la/1288572).

### SVG

_Keine Änderungen._

### JavaScript

- Der [`WebAssembly.Global()`](/de/docs/WebAssembly/JavaScript_interface/Global) Konstruktor wird jetzt unterstützt, zusammen mit globalen Variablen in WebAssembly ([Firefox bug 1464656](https://bugzil.la/1464656)).
- Die Methoden {{jsxref("Array.prototype.flat()")}} und {{jsxref("Array.prototype.flatMap()")}} sind jetzt standardmäßig aktiviert ([Firefox bug 1435813](https://bugzil.la/1435813)).
- Die [`import.meta`](/de/docs/Web/JavaScript/Reference/Operators/import.meta) Eigenschaft wurde implementiert, um kontextspezifische Metadaten an ein JavaScript-Modul weiterzugeben ([Firefox bug 1427610](https://bugzil.la/1427610)).
- JavaScript [String-Literale](/de/docs/Web/JavaScript/Reference/Lexical_grammar#string_literals) können jetzt direkt die U+2028 LINIENTRENNER- und U+2029 ABSATZTRENNER-Zeichen enthalten. Als Konsequenz ist {{jsxref("JSON")}}-Syntax jetzt ein Subset der JavaScript-Literal-Syntax (siehe [Firefox bug 1435828](https://bugzil.la/1435828) und der TC39-Vorschlag [json-superset](https://github.com/tc39/proposal-json-superset)).
- Für außerordentliche [typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)-Indizes werden {{jsxref("Reflect.defineProperty()")}} und {{jsxref("Reflect.set()")}} jetzt `false` statt `true` zurückgeben ([Firefox bug 1308735](https://bugzil.la/1308735)).

#### Entfernungen

- Die `DOMPoint` und `DOMPointReadOnly` Konstruktoren unterstützen keinen Eingabeparameter des Typs `DOMPointInit` mehr; die Werte der Eigenschaften müssen mittels der Parameter `x`, `y`, `z` und `w` angegeben werden ([Firefox bug 1186265](https://bugzil.la/1186265)).
- Die Methode [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) unterstützt nicht mehr die Erstellung von Objekt-URLs zur Darstellung eines [`MediaStream`](/de/docs/Web/API/MediaStream). Diese Fähigkeit ist seit einiger Zeit obsolet, da Sie jetzt [`HTMLMediaElement.srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) direkt auf den `MediaStream` setzen können ([Firefox bug 1454889](https://bugzil.la/1454889)).

### APIs

#### Neue APIs

- Die [Speech Synthesis API (Text-to-Speech)](/de/docs/Web/API/Web_Speech_API) ist jetzt standardmäßig auf Firefox für Android aktiviert ([Firefox bug 1463496](https://bugzil.la/1463496)).

#### DOM

- Das [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly) Interface unterstützt jetzt die statische Funktion [`DOMPointReadOnly.fromPoint()`](/de/docs/Web/API/DOMPointReadOnly/fromPoint_static), welche ein neues Punktobjekt aus einem Wörterbuch erstellt, das mit `DOMPointInit` kompatibel ist und somit jedes [`DOMPoint`](/de/docs/Web/API/DOMPoint) Objekt enthalten kann. Diese Funktion ist auch auf [`DOMPoint`](/de/docs/Web/API/DOMPoint) verfügbar ([Firefox bug 1186265](https://bugzil.la/1186265)).
- Aus Kompatibilitätsgründen wird die Eigenschaft [`Event.srcElement`](/de/docs/Web/API/Event/srcElement) jetzt unterstützt. Sie ist ein Alias für [`Event.target`](/de/docs/Web/API/Event/target) ([Firefox bug 453968](https://bugzil.la/453968)).
- [`Navigator.registerProtocolHandler()`](/de/docs/Web/API/Navigator/registerProtocolHandler) muss jetzt nur noch aus einem sicheren Kontext heraus aufgerufen werden ([Firefox bug 1460506](https://bugzil.la/1460506)).
- Die Methode [`Navigator.registerContentHandler()`](/de/docs/Web/API/Navigator/registerContentHandler) wurde standardmäßig deaktiviert, um sie vollständig zu entfernen, da sie seit einiger Zeit veraltet ist ([Firefox bug 1460481](https://bugzil.la/1460481)).
- Der [`DataTransfer()`](/de/docs/Web/API/DataTransfer/DataTransfer) Konstruktor wurde implementiert ([Firefox bug 1351193](https://bugzil.la/1351193)).
- [`Document.domain`](/de/docs/Web/API/Document/domain) kann nicht mehr `null` zurückgeben ([Firefox bug 819475](https://bugzil.la/819475)). Wenn die Domäne nicht identifiziert werden kann, gibt `domain` einen leeren String statt `null` zurück.
- Die Methode [`console.timeLog()`](/de/docs/Web/API/Console/timeLog_static) wurde hinzugefügt, um den aktuellen Wert eines Konsolentimers anzuzeigen, während die Zeit weiterhin verfolgt wird ([Firefox bug 1458466](https://bugzil.la/1458466)).
- [`console.countReset()`](/de/docs/Web/API/Console/countReset_static) wurde hinzugefügt, um einen Konsolenzählerwert zurückzusetzen ([Firefox bug 1459279](https://bugzil.la/1459279)).

#### DOM-Ereignisse

_Keine Änderungen._

#### Service Worker

_Keine Änderungen._

#### Media, Web Audio und WebRTC

- Die Präferenz `"media.autoplay.enabled"` steuert jetzt die automatische Wiedergabe von sowohl Audio- als auch Videoinhalten, anstatt nur Videoinhalten ([Firefox bug 1413098](https://bugzil.la/1413098)).
- Der [`ChannelSplitterNode`](/de/docs/Web/API/ChannelSplitterNode) wurde korrigiert, um standardmäßig korrekt 6 Kanäle mit `channelInterpretation` auf `"discrete"` und `channelCountMode` auf `"explicit"` zu haben, gemäß der Spezifikation ([Firefox bug 1456265](https://bugzil.la/1456265)).

#### Entfernungen

- Die Ereignisse `userproximity` und `deviceproximity`, sowie die `UserProximityEvent` und `DeviceProximityEvent` Interfaces, wurden standardmäßig hinter der `device.sensors.proximity.enabled` Präferenz deaktiviert ([Firefox bug 1462308](https://bugzil.la/1462308)).
- Das `devicelight` Ereignis des Typs `DeviceLightEvent` wurde standardmäßig hinter der `device.sensors.ambientLight.enabled` Präferenz deaktiviert ([Firefox bug 1462308](https://bugzil.la/1462308)).
- Die [Mutationsereignisse](/de/docs/Web/API/MutationEvent) `DOMSubtreeModified` und `DOMAttrModified` werden nicht mehr geworfen, wenn das [`style`](/de/docs/Web/HTML/Global_attributes/style) Attribut über das CSSOM geändert wird ([Firefox bug 1460295](https://bugzil.la/1460295)).
- Die Unterstützung für [`CSSStyleDeclaration.getPropertyCSSValue()`](/de/docs/Web/API/CSSStyleDeclaration/getPropertyCSSValue) wurde entfernt ([Firefox bug 1408301](https://bugzil.la/1408301)).
- Die Unterstützung für [`CSSValue`](/de/docs/Web/API/CSSValue), [`CSSPrimitiveValue`](/de/docs/Web/API/CSSPrimitiveValue), und [`CSSValueList`](/de/docs/Web/API/CSSValueList) wurde entfernt ([Firefox bug 1459871](https://bugzil.la/1459871)).
- [`window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) gibt jetzt kein `null` mehr zurück, wenn es auf einem `Window` ohne Präsentation aufgerufen wird ([Firefox bug 1467722](https://bugzil.la/1467722)).

### HTTP

#### Entfernungen

- Die veraltete CSP {{CSP("referrer")}} Direktive wurde entfernt. Bitte verwenden Sie stattdessen den {{HTTPHeader("Referrer-Policy")}} Header ([Firefox bug 1302449](https://bugzil.la/1302449)).

### Sicherheit

_Keine Änderungen._

### Plugins

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

#### Neue Funktionen

- Befehl `WebDriver:ElementSendKeys` wurde für Datei-Uploads WebDriver-konform gemacht ([Firefox bug 1448792](https://bugzil.la/1448792)).
- Benutzeraufforderungen, die durch `beforeunload` Ereignisse ausgelöst werden, werden automatisch für die Befehle `WebDriver:Get`, `WebDriver:Back`, `WebDriver:Forward`, `WebDriver:Refresh` und `WebDriver:Close` verworfen ([Firefox bug 1434872](https://bugzil.la/1434872)).
- `WebDriver:PerformActions` für `Strg` + `Klick` löst ein [`contextmenu`](/de/docs/Web/API/Element/contextmenu_event) Ereignis aus ([Firefox bug 1421323](https://bugzil.la/1421323)).

#### API-Änderungen

- Veraltete Endpunkte einschließlich `getWindowPosition`, `setWindowPosition`, `getWindowSize` und `setWindowSize` wurden entfernt ([Firefox bug 1348145](https://bugzil.la/1348145)).
- WebDriver-Befehle, die mit Daten `null` Erfolg zurückgeben, geben jetzt ein leeres Wörterbuch zurück ([Firefox bug 1461463](https://bugzil.la/1461463)).

#### Fehlerbehebungen

- `WebDriver:ExecuteScript` verursachte zyklische Referenzfehler für [WebElement](/de/docs/Web/WebDriver/WebElement) Sammlungen ([Firefox bug 1447977](https://bugzil.la/1447977)).
- Das Auslösen von `pointerMove` oder `pause` Aktionsprimitiven konnte einen Hänger verursachen, und der Befehl sendete nie eine Antwort ([Firefox bug 1467743](https://bugzil.la/1467743), [Firefox bug 1447449](https://bugzil.la/1447449)).

### Sonstiges

_Keine Änderungen._

## Änderungen für Add-On-Entwickler

### API-Änderungen

- Die {{WebExtAPIRef("webRequest.getSecurityInfo()")}} API wurde hinzugefügt, um Details von TLS-Verbindungen zu untersuchen ([Firefox bug 1322748](https://bugzil.la/1322748)).
- Die {{WebExtAPIRef("browserSettings.newTabPosition")}} wurde hinzugefügt, um zu steuern, wo neue Tabs geöffnet werden ([Firefox bug 1344749](https://bugzil.la/1344749)).
- `windowTypes` ist in {{WebExtAPIRef("windows.get()")}}, {{WebExtAPIRef("windows.getCurrent()")}}, und {{WebExtAPIRef("windows.getLastFocused()")}} veraltet ([Firefox bug 1419132](https://bugzil.la/1419132)).
- Es ist nun möglich, eine Browser-Aktion pro Fenstergrundlage zu ändern ([Firefox bug 1419893](https://bugzil.la/1419893)).

### Manifest-Änderungen

- Neue `open_at_install` Eigenschaft des [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) Manifest Schlüssels ermöglicht es Erweiterungen, zu steuern, ob ihre Seitenleisten bei der Installation automatisch geöffnet werden sollen oder nicht ([Firefox bug 1460910](https://bugzil.la/1460910)).
- Änderungen an der `browser_style` Eigenschaft von verschiedenen Manifest-Schlüsseln:

  - In [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) und [`browser_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) ist der Standardwert `false`.
  - In [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) und [`options_ui`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) ist der Standardwert `true`.

### Themenänderungen

- Neue `tab_background_separator` Eigenschaft des [`theme`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) Manifest-Schlüssels ermöglicht es Erweiterungen, die Farbe des Tab-Trenners zu ändern ([Firefox bug 1459455](https://bugzil.la/1459455)).

### Entfernungen

- Die Unterstützung für unverpackte, seitengelistete Erweiterungen wurde entfernt ([Firefox bug 1385057](https://bugzil.la/1385057)).
- Die Warnung über `browser_style`, die beim vorübergehenden Laden einer Erweiterung zum Testen angezeigt wurde, wird nicht mehr angezeigt ([Firefox bug 1404724](https://bugzil.la/1404724)).

## Ältere Versionen

{{Firefox_for_developers}}
