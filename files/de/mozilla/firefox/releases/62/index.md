---
title: Firefox 62 für Entwickler
slug: Mozilla/Firefox/Releases/62
l10n:
  sourceCommit: 1822cdf5a86574429c4c49883a402663ef16a4ef
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 62, die Entwickler betreffen werden. Firefox 62 wurde am 5. September 2018 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Der Shape Path Editor ist jetzt standardmäßig verfügbar — sehen Sie [Formpfade in CSS bearbeiten](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html) für weitere Informationen.
- Sie können jetzt die Ansicht "Regeln" in ein eigenes Fenster aufteilen, getrennt von den anderen Tabs im CSS-Fenster. Weitere Details finden Sie im [Seiteninspektor 3-Panel-Modus](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/3-pane_mode/index.html).
- Der Grid-Inspektor hat aktualisierte Funktionen und vollständig neue Dokumentation — siehe [CSS Grid Inspector: Rasterlayouts untersuchen](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html).
- Ihnen stehen nun vier Optionen für die Platzierung der Entwicklerwerkzeuge zur Verfügung. Zusätzlich zur Standardposition am unteren Fensterrand können Sie die Werkzeuge entweder links oder rechts im Hauptfenster oder in einem separaten Fenster platzieren ([Firefox-Bug 1192642](https://bugzil.la/1192642)).
- Eine Schaltfläche zum Schließen wurde zur Symbolleiste der [geteilten Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/split_console/index.html) hinzugefügt.
- Wenn die Option "Ein iframe als das aktuell angezielte Dokument auswählen" aktiviert ist, wird das Symbol in der Symbolleiste angezeigt, während der Tab "Einstellungen" angezeigt wird, auch wenn die aktuelle Seite keine iframes enthält ([Firefox-Bug 1456069](https://bugzil.la/1456069)).
- Der [Netzwerkmonitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) zeigt jetzt im [Cookies-Tab](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#cookies) das Cookie-Attribut `samesite` an ([Firefox-Bug 1452715](https://bugzil.la/1452715)).
- Der [Responsive Design-Modus](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html) funktioniert jetzt innerhalb von Containertabs ([Firefox-Bug 1306975](https://bugzil.la/1306975)).
- Wenn {{Glossary("CORS")}}-Fehler auftreten und in der Konsole gemeldet werden, bietet Firefox jetzt einen Link zur entsprechenden Seite in unserer [CORS-Fehlerdokumentation](/de/docs/Web/HTTP/CORS/Errors) ([Firefox-Bug 1475391](https://bugzil.la/1475391)).
- Erstellen Sie einen Screenshot der aktuellen Seite (mit optionalem Dateinamen) vom Registerkarten der Konsole aus ([Firefox-Bug 1464461](https://bugzil.la/1464461)) mit dem folgenden Befehl:

  ```bash
  :screenshot <filename.png> --fullpage
  ```

  wobei `<filename.png>` der gewünschte Dateiname ist. Die Datei wird in Ihrem Downloads-Ordner gespeichert. Der Parameter `--fullpage` ist optional, speichert aber bei Einbeziehung die gesamte Webseite. Diese Option fügt dem Dateinamen außerdem `-fullpage` hinzu. Für eine Liste aller verfügbaren Optionen für diesen Befehl, geben Sie ein: `:screenshot --help`

#### Entfernungen

- Die _Entwickler-Werkzeugleiste/GCLI_ (zugänglich mit `Shift` + `F2`), **wurde aus Firefox entfernt** ([Firefox-Bug 1461970](https://bugzil.la/1461970)). Sowohl die Benutzeroberfläche der Entwickler-Werkzeugleiste als auch die GCLI-Upstream-Bibliothek wurden nicht gepflegt, einige ihrer Funktionen sind defekt (einige seit e10s), sie blockiert die `unsafeSetInnerHTML`-Arbeit und die Nutzungszahlen sind sehr gering, es gibt Alternativen für die am häufigsten genutzten Befehle.

### HTML

_Keine Änderungen._

### CSS

- `:-moz-selection` wurde nach {{cssxref("::selection")}} umbenannt ([Firefox-Bug 509958](https://bugzil.la/509958)).
- `x` wird nun als Einheit für den {{cssxref("&lt;resolution&gt;")}}-Typ unterstützt ([Firefox-Bug 1460655](https://bugzil.la/1460655)).
- {{cssxref("shape-margin")}}, {{cssxref("shape-outside")}}, und {{cssxref("shape-image-threshold")}} sind jetzt standardmäßig aktiviert ([Firefox-Bug 1457297](https://bugzil.la/1457297)).

#### Entfernungen

- Alle [XUL `display`-Werte](/de/docs/Web/CSS/display#xul_values) mit Ausnahme von `-moz-box` und `-moz-inline-box` wurden aus nicht-XUL-Dokumenten entfernt in [Firefox-Bug 1288572](https://bugzil.la/1288572).

### SVG

_Keine Änderungen._

### JavaScript

- Der [`WebAssembly.Global()`](/de/docs/WebAssembly/JavaScript_interface/Global)-Konstruktor wird nun unterstützt, zusammen mit globalen Variablen in WebAssembly ([Firefox-Bug 1464656](https://bugzil.la/1464656)).
- Die Methoden {{jsxref("Array.prototype.flat()")}} und {{jsxref("Array.prototype.flatMap()")}} sind jetzt standardmäßig aktiviert ([Firefox-Bug 1435813](https://bugzil.la/1435813)).
- Die Eigenschaft [`import.meta`](/de/docs/Web/JavaScript/Reference/Operators/import.meta) wurde implementiert, um kontextspezifische Metadaten für ein JavaScript-Modul bereitzustellen ([Firefox-Bug 1427610](https://bugzil.la/1427610)).
- JavaScript [Zeichenkettenliterale](/de/docs/Web/JavaScript/Reference/Lexical_grammar#string_literals) können jetzt direkt die Zeichen U+2028 LINE SEPARATOR und U+2029 PARAGRAPH SEPARATOR enthalten. Infolgedessen ist {{jsxref("JSON")}}-Syntax jetzt eine Teilmenge der JavaScript-Literal-Syntax (siehe [Firefox-Bug 1435828](https://bugzil.la/1435828) und den TC39-Vorschlag [json-superset](https://github.com/tc39/proposal-json-superset)).
- Für out-of-bounds [getypte Array](/de/docs/Web/JavaScript/Guide/Typed_arrays)-Indizes geben {{jsxref("Reflect.defineProperty()")}} und {{jsxref("Reflect.set()")}} jetzt `false` zurück statt `true` ([Firefox-Bug 1308735](https://bugzil.la/1308735)).

#### Entfernungen

- Die Konstruktoren `DOMPoint` und `DOMPointReadOnly` unterstützen keinen Eingabeparameter vom Typ `DOMPointInit` mehr; die Werte der Eigenschaften müssen über die Parameter `x`, `y`, `z` und `w` spezifiziert werden ([Firefox-Bug 1186265](https://bugzil.la/1186265)).
- Die Methode {{domxref("URL.createObjectURL_static", "URL.createObjectURL()")}} unterstützt nicht mehr das Erstellen von Objekt-URLs zur Darstellung eines {{domxref("MediaStream")}}. Diese Fähigkeit ist seit einiger Zeit veraltet, da Sie jetzt {{domxref("HTMLMediaElement.srcObject")}} direkt auf den `MediaStream` setzen können ([Firefox-Bug 1454889](https://bugzil.la/1454889)).

### APIs

#### Neue APIs

- Die {{domxref("Web_Speech_API", "Speech-Synthesis-API (Text-to-Speech)", "", "1")}} ist jetzt standardmäßig auf Firefox für Android aktiviert ([Firefox-Bug 1463496](https://bugzil.la/1463496)).

#### DOM

- Die {{domxref("DOMPointReadOnly")}}-Schnittstelle unterstützt jetzt die statische Funktion {{domxref("DOMPointReadOnly.fromPoint_static", "DOMPointReadOnly.fromPoint()")}}, die ein neues Punktobjekt aus einem Wörterbuch erstellt, das mit `DOMPointInit` kompatibel ist und jedes {{domxref("DOMPoint")}}-Objekt umfasst. Diese Funktion ist auch auf {{domxref("DOMPoint")}} verfügbar ([Firefox-Bug 1186265](https://bugzil.la/1186265)).
- Aus Kompatibilitätsgründen wird nun die Eigenschaft {{domxref("Event.srcElement")}} unterstützt. Sie ist ein Alias für {{domxref("Event.target")}} ([Firefox-Bug 453968](https://bugzil.la/453968)).
- {{domxref("Navigator.registerProtocolHandler()")}} muss jetzt nur noch aus einem sicheren Kontext heraus aufgerufen werden ([Firefox-Bug 1460506](https://bugzil.la/1460506)).
- Die Methode {{domxref("Navigator.registerContentHandler()")}} wurde standardmäßig deaktiviert, um sie vollständig zu entfernen, da sie seit einiger Zeit obsolet ist ([Firefox-Bug 1460481](https://bugzil.la/1460481)).
- Der Konstruktor {{domxref("DataTransfer.DataTransfer", "DataTransfer()")}} wurde implementiert ([Firefox-Bug 1351193](https://bugzil.la/1351193)).
- {{domxref("Document.domain")}} kann nicht mehr `null` zurückgeben ([Firefox-Bug 819475](https://bugzil.la/819475)). Wenn die Domäne nicht identifiziert werden kann, gibt `domain` stattdessen einen leeren String zurück.
- Die Methode {{domxref("console/timeLog_static", "console.timeLog()")}} wurde hinzugefügt, um den aktuellen Wert eines Konsolentimers anzuzeigen, während die Zeit weiterhin verfolgt wird ([Firefox-Bug 1458466](https://bugzil.la/1458466)).
- {{domxref("console/countReset_static", "console.countReset()")}} wurde hinzugefügt, um einen Konsolenzählerwert zurückzusetzen ([Firefox-Bug 1459279](https://bugzil.la/1459279)).

#### DOM-Ereignisse

_Keine Änderungen._

#### Service-Worker

_Keine Änderungen._

#### Medien, Web Audio und WebRTC

- Die Präferenz `"media.autoplay.enabled"` steuert nun die automatische Wiedergabe von sowohl Audio- als auch Videomedien, anstatt nur von Videomedien ([Firefox-Bug 1413098](https://bugzil.la/1413098)).
- Der {{domxref("ChannelSplitterNode")}} wurde behoben, um korrekt auf 6 Kanäle mit `channelInterpretation` auf `"discrete"` und `channelCountMode` auf `"explicit"` standardmäßig zu setzen, gemäß der Spezifikation ([Firefox-Bug 1456265](https://bugzil.la/1456265)).

#### Entfernungen

- Die`userproximity` und `deviceproximity` Ereignisse sowie die Schnittstellen `UserProximityEvent` und `DeviceProximityEvent` wurden standardmäßig hinter der Präferenz `device.sensors.proximity.enabled` deaktiviert ([Firefox-Bug 1462308](https://bugzil.la/1462308)).
- Das `devicelight` Ereignis des Typs `DeviceLightEvent` wurde standardmäßig hinter der Präferenz `device.sensors.ambientLight.enabled` deaktiviert ([Firefox-Bug 1462308](https://bugzil.la/1462308)).
- Die `DOMSubtreeModified` und `DOMAttrModified` [Mutationsereignisse](/de/docs/Web/API/MutationEvent) werden nicht mehr ausgelöst, wenn das [`style`](/de/docs/Web/HTML/Global_attributes#style)-Attribut über das CSSOM geändert wird ([Firefox-Bug 1460295](https://bugzil.la/1460295).
- Unterstützung für {{domxref("CSSStyleDeclaration.getPropertyCSSValue()")}} wurde entfernt ([Firefox-Bug 1408301](https://bugzil.la/1408301)).
- Unterstützung für {{domxref("CSSValue")}}, {{domxref("CSSPrimitiveValue")}}, und {{domxref("CSSValueList")}} wurde entfernt ([Firefox-Bug 1459871](https://bugzil.la/1459871)).
- {{domxref("window.getComputedStyle()")}} gibt nicht mehr `null` zurück, wenn es auf einem `Window` ohne Präsentation aufgerufen wird ([Firefox-Bug 1467722](https://bugzil.la/1467722)).

### HTTP

#### Entfernungen

- Die veraltete CSP-Direktive {{CSP("referrer")}} wurde entfernt. Bitte verwenden Sie stattdessen den {{HTTPHeader("Referrer-Policy")}}-Header ([Firefox-Bug 1302449](https://bugzil.la/1302449)).

### Sicherheit

_Keine Änderungen._

### Plugins

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

#### Neue Funktionen

- Befehl `WebDriver:ElementSendKeys` wurde für Dateiuploads WebDriver-konform gemacht ([Firefox-Bug 1448792](https://bugzil.la/1448792)).
- Benutzeraufforderungen, die durch `beforeunload` Ereignisse ausgelöst werden, werden automatisch für `WebDriver:Get`, `WebDriver:Back`, `WebDriver:Forward`, `WebDriver:Refresh`, und `WebDriver:Close` Befehle abgewiesen ([Firefox-Bug 1434872](https://bugzil.la/1434872)).
- `WebDriver:PerformActions` für `Ctrl` + `Click` synthetisiert ein {{domxref("Element/contextmenu_event", "contextmenu")}}-Ereignis ([Firefox-Bug 1421323](https://bugzil.la/1421323)).

#### API-Änderungen

- Veraltete Endpunkte inklusive `getWindowPosition`, `setWindowPosition`, `getWindowSize`, und `setWindowSize` wurden entfernt ([Firefox-Bug 1348145](https://bugzil.la/1348145)).
- WebDriver-Befehle, die mit `null` als Daten zurückkommen, geben jetzt ein leeres Wörterbuch zurück ([Firefox-Bug 1461463](https://bugzil.la/1461463)).

#### Fehlerbehebungen

- `WebDriver:ExecuteScript` verursachte Zykluskusfehler für [WebElement](/de/docs/Web/WebDriver/WebElement) Sammlungen ([Firefox-Bug 1447977](https://bugzil.la/1447977)).
- Das Auslösen eines `pointerMove` oder `pause` Aktionsprimitivs konnte einen Block verursachen, und der Befehl sendete nie eine Antwort ([Firefox-Bug 1467743](https://bugzil.la/1467743), [Firefox-Bug 1447449](https://bugzil.la/1447449)).

### Sonstiges

_Keine Änderungen._

## Änderungen für Add-On-Entwickler

### API-Änderungen

- Die {{WebExtAPIRef("webRequest.getSecurityInfo()")}} API wurde hinzugefügt, um Details von TLS-Verbindungen zu prüfen ([Firefox-Bug 1322748](https://bugzil.la/1322748)).
- {{WebExtAPIRef("browserSettings.newTabPosition")}} wurde hinzugefügt, um anzupassen, wo sich neue Tabs öffnen ([Firefox-Bug 1344749](https://bugzil.la/1344749)).
- `windowTypes` wurde in {{WebExtAPIRef("windows.get()")}}, {{WebExtAPIRef("windows.getCurrent()")}}, und {{WebExtAPIRef("windows.getLastFocused()")}} als veraltet markiert ([Firefox-Bug 1419132](https://bugzil.la/1419132)).
- Es ist nun möglich, eine Browseraktion auf einer pro-Fenster-Basis zu ändern ([Firefox-Bug 1419893](https://bugzil.la/1419893)).

### Manifest-Änderungen

- Neue Eigenschaft `open_at_install` des [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) Manifests ermöglicht es Erweiterungen zu steuern, ob ihre Seitenleisten nach der Installation automatisch geöffnet werden sollen oder nicht ([Firefox-Bug 1460910](https://bugzil.la/1460910)).
- Änderungen der `browser_style` Eigenschaft bei verschiedenen Manifest-Schlüsseln:

  - In [`page_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action) und [`browser_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) ist der Standardwert `false`.
  - In [`sidebar_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action) und [`options_ui`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) ist der Standardwert `true`.

### Thema-Änderungen

- Neue Eigenschaft `tab_background_separator` des [`theme`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) Manifests ermöglicht Erweiterungen die Farbe des Tab-Trenners zu ändern ([Firefox-Bug 1459455](https://bugzil.la/1459455)).

### Entfernungen

- Unterstützung für entpackte, visuell geladene Erweiterungen wurde entfernt ([Firefox-Bug 1385057](https://bugzil.la/1385057)).
- Die Warnung über `browser_style`, die beim temporären Laden einer Erweiterung zu Testzwecken angezeigt wird, wird nicht mehr angezeigt ([Firefox-Bug 1404724](https://bugzil.la/1404724)).

## Ältere Versionen

{{Firefox_for_developers}}
