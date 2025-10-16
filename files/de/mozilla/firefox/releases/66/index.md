---
title: Firefox 66 Versionshinweise für Entwickler
short-title: Firefox 66
slug: Mozilla/Firefox/Releases/66
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 66, die Entwickler betreffen werden. Firefox 66 wurde am 19. März 2019 veröffentlicht.

## Änderungen für Webentwickler

### Entwickler-Tools

- JavaScript Getter können jetzt aus dem Auto-Vervollständigungspopup in der [Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) ausgeführt werden ([Firefox-Bug 1499289](https://bugzil.la/1499289)).
- Die Window-Methoden [`alert()`](/de/docs/Web/API/Window/alert), [`prompt()`](/de/docs/Web/API/Window/prompt) und [`confirm()`](/de/docs/Web/API/Window/confirm) funktionieren nun wieder im [Responsiven Design-Modus](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html), nachdem sie eine Zeit lang defekt waren ([Firefox-Bug 1273997](https://bugzil.la/1273997)).
- Sie können die Ausgabe der Konsole in die Zwischenablage kopieren, indem Sie mit der rechten Maustaste klicken und "**Exporte sichtbare Nachrichten in die Zwischenablage**" aus dem Kontextmenü auswählen.

### HTML

- UTF-8-kodierte HTML (und einfache Text-) Dateien, die von `file:` URLs geladen werden, werden jetzt ohne `<meta charset="utf-8">` oder den UTF-8 BOM unterstützt, was das Arbeiten an solchen Dateien lokal erleichtert, bevor sie auf einen Server hochgeladen werden. Sie müssen jedoch sicherstellen, dass der Server `charset=utf-8` im `Content-Type` HTTP-Header für solche Dateien sendet, andernfalls würde der Erkennungsmechanismus für lokale Dateien das inkrementelle Laden im Netzfall beeinträchtigen ([Firefox-Bug 1071816](https://bugzil.la/1071816)).

#### Entfernungen

- Das `x-moz-errormessage` Attribut wurde aus dem {{HTMLElement("input")}} Element entfernt ([Firefox-Bug 1513890](https://bugzil.la/1513890)). Sie sollten die [constraint validation](/de/docs/Web/HTML/Guides/Constraint_validation) API verwenden, um benutzerdefinierte Validierungsnachrichten zu implementieren.

### CSS

- [Scroll-Anker](https://drafts.csswg.org/css-scroll-anchoring/) wurden in Firefox Desktop implementiert (aber noch nicht mobil), einschließlich der {{cssxref("overflow-anchor")}} Eigenschaft ([Firefox-Bug 1305957](https://bugzil.la/1305957)).
- Wir haben den case-sensitiven [Attribut-Selektor](/de/docs/Web/CSS/Attribute_selectors) Modifikator, `s`, implementiert ([Firefox-Bug 1512386](https://bugzil.la/1512386)).
- Mehrere [logische Eigenschaften](/de/docs/Web/CSS/CSS_logical_properties_and_values) Abkürzungen wurden hinzugefügt, zusammen mit den flussrelativen Border-Radius-Eigenschaften:
  - {{cssxref("padding-block")}} und {{cssxref("padding-inline")}} ([Firefox-Bug 1519847](https://bugzil.la/1519847)).
  - {{cssxref("margin-block")}} und {{cssxref("margin-inline")}} ([Firefox-Bug 1519944](https://bugzil.la/1519944)).
  - {{cssxref("inset")}}, {{cssxref("inset-block")}} und {{cssxref("inset-inline")}} ([Firefox-Bug 1520229](https://bugzil.la/1520229)).
  - {{cssxref("border-block-color")}}, {{cssxref("border-block-style")}}, {{cssxref("border-block-width")}}, {{cssxref("border-inline-color")}}, {{cssxref("border-inline-style")}} und {{cssxref("border-inline-width")}} ([Firefox-Bug 1520236](https://bugzil.la/1520236)).
  - {{cssxref("border-block")}} und {{cssxref("border-inline")}} ([Firefox-Bug 1520396](https://bugzil.la/1520396)).
  - {{cssxref("border-start-start-radius")}}, {{cssxref("border-start-end-radius")}}, {{cssxref("border-end-start-radius")}} und {{cssxref("border-end-end-radius")}} ([Firefox-Bug 1520684](https://bugzil.la/1520684)).

- Wir haben die {{cssxref("@media/overflow-inline", "overflow-inline")}} und {{cssxref("@media/overflow-block", "overflow-block")}} Medienabfragen implementiert ([Firefox-Bug 1422235](https://bugzil.la/1422235)).
- {{cssxref("grid-template-columns")}} und {{cssxref("grid-template-rows")}} sind jetzt animierbar, gemäß den in ihren Spezifikationen festgelegten Regeln ([Firefox-Bug 1348519](https://bugzil.la/1348519)).
- Wir unterstützen nun {{cssxref("calc", "calc()")}} mit Prozentsätzen für Tabellenspalten und Spaltenbreiten ([Firefox-Bug 957915](https://bugzil.la/957915)).
- Die `min-content` und `max-content` Schlüsselwörter sind jetzt unverändert verfügbar ([Firefox-Bug 1322780](https://bugzil.la/1322780)). Diese können gesetzt werden auf:
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

- Wir haben die Unterstützung für das `xml:base` Attribut entfernt ([Firefox-Bug 903372](https://bugzil.la/903372)).

### JavaScript

Keine Änderungen.

### APIs

#### Neue APIs/Änderungen

- Automatisches Abspielen von Audio wird standardmäßig blockiert, kurz nachdem 66 die Release-Version von Firefox wird ([Firefox-Bug 1487844](https://bugzil.la/1487844), siehe [Firefox-Bug 1535667](https://bugzil.la/1535667) für Rollout-Details). Das Feature wird schrittweise an die Benutzer ausgerollt, bis alle es haben.

#### DOM

- Die Methode [`HTMLSlotElement.assignedElements()`](/de/docs/Web/API/HTMLSlotElement/assignedElements) wurde implementiert ([Firefox-Bug 1425685](https://bugzil.la/1425685)).
- Die Methode [`TextEncoder.encodeInto()`](/de/docs/Web/API/TextEncoder/encodeInto) wurde implementiert ([Firefox-Bug 1514664](https://bugzil.la/1514664)).

#### DOM-Ereignisse

- Die Eigenschaft [`InputEvent.inputType`](/de/docs/Web/API/InputEvent/inputType) wurde implementiert ([Firefox-Bug 1447239](https://bugzil.la/1447239)).
- Die Eigenschaften [`Window.event`](/de/docs/Web/API/Window/event) und [`Event.returnValue`](/de/docs/Web/API/Event/returnValue) — ursprünglich proprietäre IE-Features, dann auch in anderen Browsern für Kompatibilitätszwecke unterstützt — wurden in Firefox 66 wieder eingeführt, nachdem sie erstmals in den Versionen 63 und 64 hinzugefügt, aber aufgrund von Kompatibilitätsproblemen wieder entfernt wurden.
- Ab Version 66 wird, wenn die [`KeyboardEvent.keyCode`](/de/docs/Web/API/KeyboardEvent/keyCode) Eigenschaft des [`keypress`](/de/docs/Web/API/Element/keypress_event) Ereignisobjekts 0 ist, der Wert derselbe wie [`KeyboardEvent.charCode`](/de/docs/Web/API/KeyboardEvent/charCode) sein. Umgekehrt, wenn `charCode` 0 ist, wird er derselbe wie `keyCode` sein. Dieses Spiegelverhalten entspricht anderen Browsern und soll die meisten damit verbundenen Kompatibilitätsprobleme lösen. Benutzeragenten-Sniffing könnte jedoch weiterhin Probleme in einigen JavaScript-Bibliotheken verursachen. Beachten Sie, dass wir in Bezug auf die Spezifikation von dem _getrennten Modell_ zum _konfluenten Modell_ gewechselt haben (siehe [Anleitung zur Bestimmung des keyCode für keypress-Ereignisse](https://w3c.github.io/uievents/#determine-keypress-keyCode) in der UI Event-Spezifikation).

#### Medien, Web Audio und WebRTC

- Der neue [AV1-Videocodec](/de/docs/Web/Media/Guides/Formats/Video_codecs#av1) ist jetzt standardmäßig auf sowohl macOS als auch Windows (für Intel-Prozessoren) aktiviert. Linux-Unterstützung wird in Firefox 67 kommen ([Firefox-Bug 1521181](https://bugzil.la/1521181), [Firefox-Bug 1452146](https://bugzil.la/1452146) und [Firefox-Bug 1534814](https://bugzil.la/1534814)).
- Die [`MediaDevices`](/de/docs/Web/API/MediaDevices) Methode [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia), verfügbar als `navigator.mediaDevices.getDisplayMedia()`, wurde hinzugefügt und mit der Spezifikation synchronisiert. Diese Methode ermöglicht es Ihnen, ein Bildschirm- oder Bildschirmteil als [`MediaStream`](/de/docs/Web/API/MediaStream) für Manipulationen oder zum Teilen zu erfassen ([Firefox-Bug 1321221](https://bugzil.la/1321221)).
- Als Schritt zur eventuellen Veralterung der Firefox-spezifischen, auf [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) basierenden Methode zum Erfassen von Bildschirm- und Fensterinhalten behandelt die nicht standardisierte `mediaSource` Einschränkung die Werte `screen` und `window` jetzt identisch. Beide präsentieren nun eine Liste von sowohl Bildschirmen als auch Fenstern, aus der der Benutzer wählen kann ([Firefox-Bug 1474376](https://bugzil.la/1474376)).
- `RTCOutboundRtpStreamStats.qpSum` wurde hinzugefügt. Dies misst die Summe der Quantisierungsparameterwerte für jedes gesendete oder empfangene Frame auf der Videospur. Je höher diese Zahl, desto mehr ist der Stream wahrscheinlich komprimiert ([Firefox-Bug 1347070](https://bugzil.la/1347070)).
- Als Schritt auf dem Weg zur Implementierung der Unterstützung für Feature Policy in einem zukünftigen Firefox-Update kann [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) nicht mehr in Situationen verwendet werden, in denen es keinen ordnungsgemäßen Ursprung für den Inhalt gibt, z.B. wenn es aus einem sandboxed {{HTMLElement("iframe")}} oder aus einer `data` URL aufgerufen wurde, die vom Benutzer in die Adressleiste eingegeben wurde. Für weitere Details siehe den [Sicherheits](/de/docs/Web/API/MediaDevices/getUserMedia#security) Abschnitt auf der MediaDevices.getUserMedia() Seite ([Firefox-Bug 1371741](https://bugzil.la/1371741)).

#### Entfernungen

- Die Legacy WebRTC `PeerConnection.getStats()` Methode wurde entfernt, zusammen mit den assoziierten Typen ([Firefox-Bug 1328194](https://bugzil.la/1328194)).

### Netzwerk

- Der Standardwert des {{httpheader("Accept")}} Headers wurde in `*/*` geändert ([Firefox-Bug 1417463](https://bugzil.la/1417463)).

### Sicherheit

_Keine Änderungen._

### Plugins

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

#### API-Änderungen

- `WebDriver:NewWindow` wurde hinzugefügt, um das Öffnen eines neuen Browsing-Kontexts zu unterstützen, der entweder ein Fenster oder Tab sein kann ([Firefox-Bug 1504756](https://bugzil.la/1504756)).
- `WebDriver:SwitchToFrame` wirft jetzt einen `no such element` Fehler, wenn das angegebene Element nicht Teil des aktuellen Browsing-Kontexts ist ([Firefox-Bug 1517196](https://bugzil.la/1517196)).
- `WebDriver:ExecuteScript` und `WebDriver:ExecuteAsyncScript` unterstützen den nicht spezifikationskonformen `scriptTimeout` Parameter nicht mehr. Verwenden Sie stattdessen `WebDriver:SetTimeout` oder die `timeouts` Fähigkeit, um diesen Wert zu definieren ([Firefox-Bug 1510929](https://bugzil.la/1510929)).
  - Außerdem werden nun unbestimmte Skript-Timeouts unterstützt ([Firefox-Bug 1128997](https://bugzil.la/1128997)).

- `WebDriver:SetWindowRect` gibt den Fensterzustand in seiner Antwort nicht mehr zurück ([Firefox-Bug 1517587](https://bugzil.la/1517587)).

#### Fehlerbehebungen

- `WebDriver:TakeScreenshot` verwendet nun die [`Element.clientWidth`](/de/docs/Web/API/Element/clientWidth) und [`Element.clientHeight`](/de/docs/Web/API/Element/clientHeight) Eigenschaften des [`Document.documentElement`](/de/docs/Web/API/Document/documentElement) anstelle der Ansichtfensterabmessungen ([Firefox-Bug 1385706](https://bugzil.la/1385706)).
- Verschiedene Korrekturen wurden angewendet, um Fenstermanipulationsbefehle plattformübergreifend zuverlässiger zu machen ([Firefox-Bug 1522408](https://bugzil.la/1522408), [Firefox-Bug 1478358](https://bugzil.la/1478358), [Firefox-Bug 1489955](https://bugzil.la/1489955)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

#### Menüs

- Erweiterungsmenüelemente vom "bookmark" {{WebExtAPIRef("menus.ContextType", "type")}} Typ werden auch in der Lesezeichenseitenleiste (`Strg` + `B`) und im Bibliotheksfenster (`Strg` + `Shift` + `B`) angezeigt ([Firefox-Bug 1419195](https://bugzil.la/1419195)).

### Manifest-Änderungen

_Keine Änderungen._

## Siehe auch

- Hacks Release Beitrag: [Firefox 66: The Sound of Silence](https://hacks.mozilla.org/2019/03/firefox-66-the-sound-of-silence/)
