---
title: Firefox 66 für Entwickler
slug: Mozilla/Firefox/Releases/66
l10n:
  sourceCommit: 03b4a9d11d37c9d0be0804669467eadf2d72f2a3
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 66, die Entwickler betreffen werden. Firefox 66 wurde am 19. März 2019 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- JavaScript-Getter können jetzt aus dem Auto-Completion-Popup in der [Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) ausgeführt werden ([Firefox-Bug 1499289](https://bugzil.la/1499289)).
- Die Window-Methoden [`alert()`](/de/docs/Web/API/Window/alert), [`prompt()`](/de/docs/Web/API/Window/prompt) und [`confirm()`](/de/docs/Web/API/Window/confirm) funktionieren jetzt wieder im [Modus für responsives Design](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html), nachdem sie eine Zeit lang nicht funktionierten ([Firefox-Bug 1273997](https://bugzil.la/1273997)).
- Sie können die Ausgabe der Konsole in die Zwischenablage kopieren, indem Sie mit der rechten Maustaste klicken und im Kontextmenü "**Export visible messages to clipboard**" auswählen.

### HTML

- UTF-8-kodierte HTML- (und Text-)Dateien, die aus `file:`-URLs geladen werden, werden jetzt ohne `<meta charset="utf-8">` oder das UTF-8 BOM unterstützt. Das erleichtert die Arbeit an solchen Dateien lokal, bevor sie auf einen Server hochgeladen werden. Sie müssen jedoch sicherstellen, dass der Server `charset=utf-8` im `Content-Type` HTTP-Header für solche Dateien sendet, andernfalls würde der Erkennungsmechanismus, der für lokale Dateien verwendet wird, das inkrementelle Laden im Netzwerkfall beeinträchtigen ([Firefox-Bug 1071816](https://bugzil.la/1071816)).

#### Entfernungen

- Das `x-moz-errormessage`-Attribut wurde aus dem {{HTMLElement("input")}} Element entfernt ([Firefox-Bug 1513890](https://bugzil.la/1513890)). Sie sollten stattdessen die [Constraint Validation](/de/docs/Web/HTML/Constraint_validation) API verwenden, um benutzerdefinierte Validierungsnachrichten zu implementieren.

### CSS

- [Scroll anchoring](https://drafts.csswg.org/css-scroll-anchoring/) wurde in Firefox für Desktop implementiert (aber noch nicht für mobile Geräte), welches die {{cssxref("overflow-anchor")}} Eigenschaft beinhaltet ([Firefox-Bug 1305957](https://bugzil.la/1305957)).
- Wir haben den fall-sensitiven [Attributselektor](/de/docs/Web/CSS/Attribute_selectors) Modifikator, `s`, implementiert ([Firefox-Bug 1512386](https://bugzil.la/1512386)).
- Mehrere [logische Eigenschaften](/de/docs/Web/CSS/CSS_logical_properties_and_values) Shorthands wurden hinzugefügt, zusammen mit den flussrelativen border-radius Eigenschaften:

  - {{cssxref("padding-block")}} und {{cssxref("padding-inline")}} ([Firefox-Bug 1519847](https://bugzil.la/1519847)).
  - {{cssxref("margin-block")}} und {{cssxref("margin-inline")}} ([Firefox-Bug 1519944](https://bugzil.la/1519944)).
  - {{cssxref("inset")}}, {{cssxref("inset-block")}}, und {{cssxref("inset-inline")}} ([Firefox-Bug 1520229](https://bugzil.la/1520229)).
  - {{cssxref("border-block-color")}}, {{cssxref("border-block-style")}}, {{cssxref("border-block-width")}}, {{cssxref("border-inline-color")}}, {{cssxref("border-inline-style")}}, und {{cssxref("border-inline-width")}} ([Firefox-Bug 1520236](https://bugzil.la/1520236)).
  - {{cssxref("border-block")}} und {{cssxref("border-inline")}} ([Firefox-Bug 1520396](https://bugzil.la/1520396)).
  - {{cssxref("border-start-start-radius")}}, {{cssxref("border-start-end-radius")}}, {{cssxref("border-end-start-radius")}}, und {{cssxref("border-end-end-radius")}} ([Firefox-Bug 1520684](https://bugzil.la/1520684)).

- Wir haben die {{cssxref("@media/overflow-inline", "overflow-inline")}} und {{cssxref("@media/overflow-block", "overflow-block")}} Media-Queries implementiert ([Firefox-Bug 1422235](https://bugzil.la/1422235)).
- {{cssxref("grid-template-columns")}} und {{cssxref("grid-template-rows")}} sind jetzt animierbar, gemäß den in ihren Spezifikationen festgelegten Regeln ([Firefox-Bug 1348519](https://bugzil.la/1348519)).
- Wir unterstützen jetzt {{cssxref("calc", "calc()")}} mit Prozentangaben für Tabellenzellen und Spaltenbreiten ([Firefox-Bug 957915](https://bugzil.la/957915)).
- Die `min-content` und `max-content` Schlüsselwörter sind jetzt ohne Präfix verfügbar ([Firefox-Bug 1322780](https://bugzil.la/1322780)). Diese können festgelegt werden auf:

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

- Die Unterstützung für das `xml:base` Attribut wurde entfernt ([Firefox-Bug 903372](https://bugzil.la/903372)).

### JavaScript

Keine Änderungen.

### APIs

#### Neue APIs/Änderungen

- Automatisch abgespielte Audio wird bald standardmäßig blockiert, nachdem 66 die Freigabeversion von Firefox wird ([Firefox-Bug 1487844](https://bugzil.la/1487844), siehe [Firefox-Bug 1535667](https://bugzil.la/1535667) für Rollout-Details). Die Funktion wird schrittweise an die Benutzer ausgerollt, bis alle sie haben.

#### DOM

- Die Methode [`HTMLSlotElement.assignedElements()`](/de/docs/Web/API/HTMLSlotElement/assignedElements) wurde implementiert ([Firefox-Bug 1425685](https://bugzil.la/1425685)).
- Die Methode [`TextEncoder.encodeInto()`](/de/docs/Web/API/TextEncoder/encodeInto) wurde implementiert ([Firefox-Bug 1514664](https://bugzil.la/1514664)).

#### DOM-Ereignisse

- Die Eigenschaft [`InputEvent.inputType`](/de/docs/Web/API/InputEvent/inputType) wurde implementiert ([Firefox-Bug 1447239](https://bugzil.la/1447239)).
- Die Eigenschaften [`Window.event`](/de/docs/Web/API/Window/event) und [`Event.returnValue`](/de/docs/Web/API/Event/returnValue) — ursprünglich proprietäre IE-Funktionen, dann auch zur Kompatibilität von anderen Browsern unterstützt — wurden in Firefox 66 wieder eingeführt, nachdem sie in den Versionen 63 und 64 hinzugefügt, aber aufgrund von Kompatibilitätsproblemen wieder entfernt wurden.
- Ab 66, wenn die Eigenschaft [`KeyboardEvent.keyCode`](/de/docs/Web/API/KeyboardEvent/keyCode) des [`keypress`](/de/docs/Web/API/Element/keypress_event) Ereignisobjekts 0 ist, wird der Wert derselbe wie [`KeyboardEvent.charCode`](/de/docs/Web/API/KeyboardEvent/charCode) sein. Umgekehrt, wenn `charCode` 0 ist, wird er derselbe wie `keyCode` sein. Dieses Spiegelverhalten entspricht anderen Browsern und löst die meisten damit verbundenen Kompatibilitätsprobleme, allerdings könnte User-Agent-Sniffing in einigen JavaScript-Bibliotheken weitere Probleme verursachen. Beachten Sie, dass wir in Bezug auf die Spezifikation vom _Split-Modell_ zum _Konflationsmodell_ gewechselt haben (siehe [How to determine keyCode for keypress events](https://w3c.github.io/uievents/#determine-keypress-keyCode) in der UI-Event-Spezifikation).

#### Medien, Web-Audio und WebRTC

- Der neue [AV1-Video-Codec](/de/docs/Web/Media/Formats/Video_codecs#av1) ist jetzt standardmäßig auf macOS und Windows (für Intel-Prozessoren) aktiviert. Die Linux-Unterstützung folgt in Firefox 67 ([Firefox-Bug 1521181](https://bugzil.la/1521181), [Firefox-Bug 1452146](https://bugzil.la/1452146) und [Firefox-Bug 1534814](https://bugzil.la/1534814)).
- Die Methode [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) von [`MediaDevices`](/de/docs/Web/API/MediaDevices), verfügbar als `navigator.mediaDevices.getDisplayMedia()`, wurde hinzugefügt und mit der Spezifikation synchronisiert. Diese Methode erlaubt es, einen Bildschirm oder einen Teil davon als [`MediaStream`](/de/docs/Web/API/MediaStream) zu erfassen, um diesen zu manipulieren oder zu teilen ([Firefox-Bug 1321221](https://bugzil.la/1321221)).
- Als Schritt in Richtung der endgültigen Abschaffung der Firefox-spezifischen Methode [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) zur Erfassung von Bildschirm- und Fensterinhalten behandelt der nicht-standardmäßige `mediaSource` constraint nun die Werte `screen` und `window` identisch. Beide präsentieren jetzt eine Liste von Bildschirmen und Fenstern, aus denen der Benutzer wählen kann ([Firefox-Bug 1474376](https://bugzil.la/1474376)).
- `RTCOutboundRtpStreamStats.qpSum` wurde hinzugefügt. Dies misst die Summe der Quantisierungsparameterwerte für jeden gesendeten oder empfangenen Frame auf der Videospur. Je höher diese Zahl, desto komprimierter ist der Stream wahrscheinlich ([Firefox-Bug 1347070](https://bugzil.la/1347070)).
- Als Schritt in Richtung der Implementierung der Unterstützung für Feature Policy in einem zukünftigen Firefox-Update kann [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) nicht mehr in Situationen verwendet werden, in denen es keinen richtigen Ursprung für den Inhalt gibt, z. B. wenn es von einem sandboxed {{HTMLElement("iframe")}} oder von einer `data` URL, die der Benutzer in die Adressleiste eingegeben hat, aufgerufen wird. Weitere Details finden Sie im Abschnitt [Sicherheit](/de/docs/Web/API/MediaDevices/getUserMedia#security) auf der MediaDevices.getUserMedia() Seite ([Firefox-Bug 1371741](https://bugzil.la/1371741)).

#### Entfernungen

- Die alte WebRTC `PeerConnection.getStats()` Methode wurde entfernt, zusammen mit den zugehörigen Typen ([Firefox-Bug 1328194](https://bugzil.la/1328194)).

### Netzwerk

- Der Standardwert des {{httpheader("Accept")}} Headers wurde auf `*/*` geändert ([Firefox-Bug 1417463](https://bugzil.la/1417463)).

### Sicherheit

_Keine Änderungen._

### Plugins

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

#### API-Änderungen

- `WebDriver:NewWindow` wurde hinzugefügt, um das Öffnen eines neuen Browsing-Kontextes zu unterstützen, der entweder ein Fenster oder eine Registerkarte sein kann ([Firefox-Bug 1504756](https://bugzil.la/1504756)).
- `WebDriver:SwitchToFrame` löst jetzt einen `no such element` Fehler aus, wenn das angegebene Element nicht Teil des aktuellen Browsing-Kontextes ist ([Firefox-Bug 1517196](https://bugzil.la/1517196)).
- `WebDriver:ExecuteScript` und `WebDriver:ExecuteAsyncScript` unterstützen nicht mehr den nicht-Spezifikations-konformen `scriptTimeout` Parameter. Verwenden Sie stattdessen `WebDriver:SetTimeout` oder die `timeouts` Fähigkeit, um diesen Wert zu definieren ([Firefox-Bug 1510929](https://bugzil.la/1510929)).

  - Zusätzlich werden jetzt unbestimmte Skript-Timeouts unterstützt ([Firefox-Bug 1128997](https://bugzil.la/1128997)).

- `WebDriver:SetWindowRect` gibt den Fensterstatus in seiner Antwort nicht mehr zurück ([Firefox-Bug 1517587](https://bugzil.la/1517587)).

#### Fehlerbehebungen

- `WebDriver:TakeScreenshot` verwendet jetzt die Eigenschaften [`Element.clientWidth`](/de/docs/Web/API/Element/clientWidth) und [`Element.clientHeight`](/de/docs/Web/API/Element/clientHeight) des [`Document.documentElement`](/de/docs/Web/API/Document/documentElement) anstelle der Ansichtsfenster-Dimensionen ([Firefox-Bug 1385706](https://bugzil.la/1385706)).
- Verschiedene Korrekturen wurden durchgeführt, um die Befehle zur Fenstersteuerung plattformübergreifend zuverlässiger zu machen ([Firefox-Bug 1522408](https://bugzil.la/1522408), [Firefox-Bug 1478358](https://bugzil.la/1478358), [Firefox-Bug 1489955](https://bugzil.la/1489955)).

## Änderungen für Add-On Entwickler

### API-Änderungen

#### Menüs

- Erweiterungsmenüeinträge des Typs "bookmark" {{WebExtAPIRef("menus.ContextType", "type")}} erscheinen auch in der Lesezeichen-Sidebar (`Strg` + `B`) und im Bibliotheksfenster (`Strg` + `Shift` + `B`) ([Firefox-Bug 1419195](https://bugzil.la/1419195)).

### Manifest-Änderungen

_Keine Änderungen._

## Siehe auch

- Hacks-Veröffentlichungspost: [Firefox 66: The Sound of Silence](https://hacks.mozilla.org/2019/03/firefox-66-the-sound-of-silence/)

## Ältere Versionen

{{Firefox_for_developers}}
