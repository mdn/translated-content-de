---
title: Veröffentlichungsnotizen zu Firefox 66 für Entwickler
short-title: Firefox 66
slug: Mozilla/Firefox/Releases/66
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 66, die Entwickler betreffen. Firefox 66 wurde am 19. März 2019 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- JavaScript-Getter können jetzt aus dem Auto-Vervollständigungs-Popup in der [Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) ausgeführt werden ([Firefox-Bug 1499289](https://bugzil.la/1499289)).
- Die Fenster-Methoden [`alert()`](/de/docs/Web/API/Window/alert), [`prompt()`](/de/docs/Web/API/Window/prompt) und [`confirm()`](/de/docs/Web/API/Window/confirm) funktionieren jetzt wieder im [Responsive Design Mode](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html), nachdem sie eine Zeit lang nicht funktionierten ([Firefox-Bug 1273997](https://bugzil.la/1273997)).
- Sie können die Ausgabe der Konsole in die Zwischenablage kopieren, indem Sie mit der rechten Maustaste klicken und "**Export visible messages to clipboard**" aus dem Kontextmenü wählen.

### HTML

- UTF-8-kodierte HTML- (und Text-)Dateien, die von `file:` URLs geladen werden, werden jetzt ohne `<meta charset="utf-8">` oder das UTF-8 BOM unterstützt, was es erleichtert, an solchen Dateien lokal zu arbeiten, bevor sie auf einen Server hochgeladen werden. Sie müssen jedoch sicherstellen, dass der Server `charset=utf-8` im `Content-Type` HTTP-Header für solche Dateien sendet, da sonst der Erkennungsmechanismus, der für lokale Dateien verwendet wird, das inkrementelle Laden im Netzwerkfall beeinträchtigen würde ([Firefox-Bug 1071816](https://bugzil.la/1071816)).

#### Entfernungen

- Das `x-moz-errormessage`-Attribut wurde vom {{HTMLElement("input")}}-Element entfernt ([Firefox-Bug 1513890](https://bugzil.la/1513890)). Sie sollten stattdessen die [Einschränkungsvalidierung](/de/docs/Web/HTML/Guides/Constraint_validation) API verwenden, um benutzerdefinierte Validierungsmeldungen zu implementieren.

### CSS

- [Scroll anchoring](https://drafts.csswg.org/css-scroll-anchoring/) wurde in Firefox Desktop implementiert (aber noch nicht mobil), einschließlich der {{cssxref("overflow-anchor")}} Eigenschaft ([Firefox-Bug 1305957](https://bugzil.la/1305957)).
- Wir haben den fallsensitiven [Attributselektor](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors) Modifikator, `s`, implementiert ([Firefox-Bug 1512386](https://bugzil.la/1512386)).
- Mehrere [logische Eigenschafts-](/de/docs/Web/CSS/CSS_logical_properties_and_values) Kurzformen wurden eingeführt, zusammen mit den flussrelativen Eigenschaften des Randradius:
  - {{cssxref("padding-block")}} und {{cssxref("padding-inline")}} ([Firefox-Bug 1519847](https://bugzil.la/1519847)).
  - {{cssxref("margin-block")}} und {{cssxref("margin-inline")}} ([Firefox-Bug 1519944](https://bugzil.la/1519944)).
  - {{cssxref("inset")}}, {{cssxref("inset-block")}}, und {{cssxref("inset-inline")}} ([Firefox-Bug 1520229](https://bugzil.la/1520229)).
  - {{cssxref("border-block-color")}}, {{cssxref("border-block-style")}}, {{cssxref("border-block-width")}}, {{cssxref("border-inline-color")}}, {{cssxref("border-inline-style")}}, und {{cssxref("border-inline-width")}} ([Firefox-Bug 1520236](https://bugzil.la/1520236)).
  - {{cssxref("border-block")}} und {{cssxref("border-inline")}} ([Firefox-Bug 1520396](https://bugzil.la/1520396)).
  - {{cssxref("border-start-start-radius")}}, {{cssxref("border-start-end-radius")}}, {{cssxref("border-end-start-radius")}}, und {{cssxref("border-end-end-radius")}} ([Firefox-Bug 1520684](https://bugzil.la/1520684)).

- Wir haben die {{cssxref("@media/overflow-inline", "overflow-inline")}} und {{cssxref("@media/overflow-block", "overflow-block")}} Media Queries implementiert ([Firefox-Bug 1422235](https://bugzil.la/1422235)).
- {{cssxref("grid-template-columns")}} und {{cssxref("grid-template-rows")}} sind jetzt animierbar, gemäß den in ihren Spezifikationen festgelegten Regeln ([Firefox-Bug 1348519](https://bugzil.la/1348519)).
- Wir unterstützen jetzt {{cssxref("calc", "calc()")}} mit Prozentangaben für Tabellenspalten und -breiten ([Firefox-Bug 957915](https://bugzil.la/957915)).
- Die Schlüsselwörter `min-content` und `max-content` sind jetzt unverändert verfügbar ([Firefox-Bug 1322780](https://bugzil.la/1322780)). Diese können für folgende Eigenschaften gesetzt werden:
  - {{cssxref("width")}}
  - {{cssxref("height")}}
  - {{cssxref("flex-basis")}}
  - {{cssxref("min-width")}}
  - {{cssxref("max-width")}}
  - {{cssxref("min-height")}}
  - {{cssxref("max-height")}}
  - {{cssxref("min-block-size")}}
  - {{cssxref("min-inline-size")}}
  - {{cssxref("max-block-size")}}
  - {{cssxref("max-inline-size")}}
  - {{cssxref("block-size")}}
  - {{cssxref("inline-size")}}

### SVG

_Keine Ergänzungen._

#### Entfernungen

- Wir haben die Unterstützung für das `xml:base`-Attribut entfernt ([Firefox-Bug 903372](https://bugzil.la/903372)).

### JavaScript

Keine Änderungen.

### APIs

#### Neue APIs/Änderungen

- Automatisch abgespielter Ton wird standardmäßig blockiert, sobald Firefox 66 die Release-Version wird ([Firefox-Bug 1487844](https://bugzil.la/1487844), siehe [Firefox-Bug 1535667](https://bugzil.la/1535667) für Rollout-Details). Diese Funktion wird schrittweise an Benutzer ausgerollt, bis alle sie haben.

#### DOM

- Die Methode [`HTMLSlotElement.assignedElements()`](/de/docs/Web/API/HTMLSlotElement/assignedElements) wurde implementiert ([Firefox-Bug 1425685](https://bugzil.la/1425685)).
- Die Methode [`TextEncoder.encodeInto()`](/de/docs/Web/API/TextEncoder/encodeInto) wurde implementiert ([Firefox-Bug 1514664](https://bugzil.la/1514664)).

#### DOM-Ereignisse

- Die Eigenschaft [`InputEvent.inputType`](/de/docs/Web/API/InputEvent/inputType) wurde implementiert ([Firefox-Bug 1447239](https://bugzil.la/1447239)).
- Die Eigenschaften [`Window.event`](/de/docs/Web/API/Window/event) und [`Event.returnValue`](/de/docs/Web/API/Event/returnValue) — ursprünglich proprietäre IE-Funktionen, die dann auch von anderen Browsern zur Kompatibilität übernommen wurden — wurden in Firefox 66 wieder eingeführt, nachdem sie zunächst in den Versionen 63 und 64 hinzugefügt, aber dann aufgrund von Kompatibilitätsproblemen wieder entfernt wurden.
- Ab Version 66 wird, wenn die Eigenschaft [`KeyboardEvent.keyCode`](/de/docs/Web/API/KeyboardEvent/keyCode) des [`keypress`](/de/docs/Web/API/Element/keypress_event) Ereignisobjekts 0 ist, der Wert derselbe sein wie [`KeyboardEvent.charCode`](/de/docs/Web/API/KeyboardEvent/charCode). Umgekehrt, wenn `charCode` 0 ist, wird es derselbe Wert wie `keyCode` sein. Dieses Spiegelverhalten entspricht anderen Browsern und soll die meisten damit verbundenen Kompatibilitätsprobleme lösen, jedoch könnte User-Agent-Sniffing in einigen JavaScript-Bibliotheken weitere Probleme verursachen. Beachten Sie, dass wir in den Spezifikationstermini vom _getrennten Modell_ zum _verknüpften Modell_ gewechselt sind (siehe [Bestimmung von keyCode für Keypress-Ereignisse](https://w3c.github.io/uievents/#determine-keypress-keyCode) in der UI-Event-Spezifikation).

#### Medien, Web Audio und WebRTC

- Der neue [AV1-Videocodec](/de/docs/Web/Media/Guides/Formats/Video_codecs#av1) ist jetzt standardmäßig sowohl auf macOS als auch auf Windows (für Intel-Prozessoren) aktiviert. Linux-Unterstützung wird in Firefox 67 kommen ([Firefox-Bug 1521181](https://bugzil.la/1521181), [Firefox-Bug 1452146](https://bugzil.la/1452146), und [Firefox-Bug 1534814](https://bugzil.la/1534814)).
- Die [`MediaDevices`](/de/docs/Web/API/MediaDevices) Methode [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia), verfügbar als `navigator.mediaDevices.getDisplayMedia()`, wurde hinzugefügt und mit der Spezifikation abgeglichen. Diese Methode ermöglicht es, einen Bildschirm oder einen Teil eines Bildschirms als [`MediaStream`](/de/docs/Web/API/MediaStream) für Manipulation oder Teilen zu erfassen ([Firefox-Bug 1321221](https://bugzil.la/1321221)).
- Als Schritt in Richtung der letztendlich geplanten Abschaffung der Firefox-spezifischen, auf [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) basierenden Methode zur Bildschirm- und Fensterinhaltsaufnahme behandelt die nicht standardkonforme `mediaSource`-Einschränkung die Werte `screen` und `window` jetzt identisch. Beide zeigen jetzt eine Liste von sowohl Bildschirmen als auch Fenstern, aus denen der Benutzer auswählen kann ([Firefox-Bug 1474376](https://bugzil.la/1474376)).
- `RTCOutboundRtpStreamStats.qpSum` wurde hinzugefügt. Dies misst die Gesamtsumme der Quantisierungsparameterwerte für jeden gesendeten oder empfangenen Frame auf der Videospur. Je höher diese Zahl, desto stärker komprimiert ist der Stream wahrscheinlich ([Firefox-Bug 1347070](https://bugzil.la/1347070)).
- In einem Schritt in Richtung der Implementierung von Feature Policy in einem zukünftigen Firefox-Update kann [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) nicht mehr in Situationen verwendet werden, in denen es keinen richtigen Ursprung für den Inhalt gibt, wie zum Beispiel bei einem Aufruf von einem sandboxed {{HTMLElement("iframe")}} oder von einer `data` URL, die in die Adressleiste eingegeben wurde. Für weitere Details siehe den [Sicherheits](/de/docs/Web/API/MediaDevices/getUserMedia#security)-Abschnitt auf der MediaDevices.getUserMedia()-Seite ([Firefox-Bug 1371741](https://bugzil.la/1371741)).

#### Entfernungen

- Die veraltete WebRTC-Methode `PeerConnection.getStats()` wurde entfernt, zusammen mit den zugehörigen Typen ([Firefox-Bug 1328194](https://bugzil.la/1328194)).

### Netzwerk

- Der Standardwert des {{httpheader("Accept")}} Headers wurde auf `*/*` geändert ([Firefox-Bug 1417463](https://bugzil.la/1417463)).

### Sicherheit

_Keine Änderungen._

### Plugins

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

#### API-Änderungen

- `WebDriver:NewWindow` wurde hinzugefügt, um das Öffnen eines neuen Browsing-Kontexts zu unterstützen, der entweder ein Fenster oder ein Tab sein kann ([Firefox-Bug 1504756](https://bugzil.la/1504756)).
- `WebDriver:SwitchToFrame` löst jetzt einen `no such element` Fehler aus, wenn das angegebene Element nicht Teil des aktuellen Browsing-Kontexts ist ([Firefox-Bug 1517196](https://bugzil.la/1517196)).
- `WebDriver:ExecuteScript` und `WebDriver:ExecuteAsyncScript` unterstützen nicht mehr den nicht spezifikationskonformen `scriptTimeout` Parameter. Stattdessen sollten Sie `WebDriver:SetTimeout` oder die `timeouts` Fähigkeit verwenden, um diesen Wert zu definieren ([Firefox-Bug 1510929](https://bugzil.la/1510929)).
  - Zusätzlich werden jetzt unbestimmte Skript-Timeouts unterstützt ([Firefox-Bug 1128997](https://bugzil.la/1128997)).

- `WebDriver:SetWindowRect` gibt den Fensterzustand in seiner Antwort nicht mehr zurück ([Firefox-Bug 1517587](https://bugzil.la/1517587)).

#### Fehlerbehebungen

- `WebDriver:TakeScreenshot` verwendet jetzt die [`Element.clientWidth`](/de/docs/Web/API/Element/clientWidth) und [`Element.clientHeight`](/de/docs/Web/API/Element/clientHeight) Eigenschaften des [`Document.documentElement`](/de/docs/Web/API/Document/documentElement) anstelle der Viewport-Dimensionen ([Firefox-Bug 1385706](https://bugzil.la/1385706)).
- Verschiedene Korrekturen wurden vorgenommen, um die Zuverlässigkeit der Fenster-Manipulationsbefehle plattformübergreifend zu verbessern ([Firefox-Bug 1522408](https://bugzil.la/1522408), [Firefox-Bug 1478358](https://bugzil.la/1478358), [Firefox-Bug 1489955](https://bugzil.la/1489955)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

#### Menüs

- Erweiterungsmenüeinträge des "bookmark" {{WebExtAPIRef("menus.ContextType", "type")}} werden auch in der Lesezeichen-Sidebar (`Strg` + `B`) und im Bibliotheksfenster (`Strg` + `Umschalt` + `B`) angezeigt ([Firefox-Bug 1419195](https://bugzil.la/1419195)).

### Manifest-Änderungen

_Keine Änderungen._

## Siehe auch

- Hacks-Veröffentlichungspost: [Firefox 66: The Sound of Silence](https://hacks.mozilla.org/2019/03/firefox-66-the-sound-of-silence/)
