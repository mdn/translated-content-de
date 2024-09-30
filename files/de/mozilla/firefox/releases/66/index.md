---
title: Firefox 66 für Entwickler
slug: Mozilla/Firefox/Releases/66
l10n:
  sourceCommit: 1822cdf5a86574429c4c49883a402663ef16a4ef
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 66, die Entwickler betreffen werden. Firefox 66 wurde am 19. März 2019 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklertools

- JavaScript-Getter können jetzt aus dem Auto-Vervollständigungspopup in der [Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) ausgeführt werden ([Firefox-Bug 1499289](https://bugzil.la/1499289)).
- Die Fenster-Methoden [`alert()`](/de/docs/Web/API/Window/alert), [`prompt()`](/de/docs/Web/API/Window/prompt) und [`confirm()`](/de/docs/Web/API/Window/confirm) funktionieren jetzt wieder im [Modus für responsives Design](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html), nachdem sie eine Zeitlang nicht funktionierten ([Firefox-Bug 1273997](https://bugzil.la/1273997)).
- Sie können die Ausgabe der Konsole in die Zwischenablage kopieren, indem Sie mit der rechten Maustaste klicken und im Kontextmenü "**Export visible messages to clipboard**" auswählen.

### HTML

- UTF-8-kodierte HTML- (und Klartext-) Dateien, die von `file:`-URLs geladen werden, werden jetzt ohne `<meta charset="utf-8">` oder das UTF-8-BOM unterstützt. Dies erleichtert das Arbeiten an solchen Dateien lokal vor der Veröffentlichung auf einem Server. Sie müssen jedoch sicherstellen, dass der Server `charset=utf-8` im `Content-Type` HTTP-Header für solche Dateien sendet, da der Mechanismus zur Erkennung lokaler Dateien das inkrementelle Laden im Netzwerkfall stören würde ([Firefox-Bug 1071816](https://bugzil.la/1071816)).

#### Entfernungen

- Das `x-moz-errormessage`-Attribut wurde vom {{HTMLElement("input")}}-Element entfernt ([Firefox-Bug 1513890](https://bugzil.la/1513890)). Sie sollten die [Einschränkungsvalidierung](/de/docs/Web/HTML/Constraint_validation) API verwenden, um benutzerdefinierte Validierungsnachrichten zu implementieren.

### CSS

- [Scroll Anchoring](https://drafts.csswg.org/css-scroll-anchoring/) wurde in Firefox für den Desktop implementiert (aber noch nicht für mobile Geräte), einschließlich der {{cssxref("overflow-anchor")}}-Eigenschaft ([Firefox-Bug 1305957](https://bugzil.la/1305957)).
- Wir haben den case-sensitiven [Attributselektor](/de/docs/Web/CSS/Attribute_selectors) Modifier, `s`, implementiert ([Firefox-Bug 1512386](https://bugzil.la/1512386)).
- Mehrere Abkürzungen für [logische Eigenschaften](/de/docs/Web/CSS/CSS_logical_properties_and_values) sowie die flussrelativen Rahmenradius-Eigenschaften wurden eingeführt:

  - {{cssxref("padding-block")}} und {{cssxref("padding-inline")}} ([Firefox-Bug 1519847](https://bugzil.la/1519847)).
  - {{cssxref("margin-block")}} und {{cssxref("margin-inline")}} ([Firefox-Bug 1519944](https://bugzil.la/1519944)).
  - {{cssxref("inset")}}, {{cssxref("inset-block")}} und {{cssxref("inset-inline")}} ([Firefox-Bug 1520229](https://bugzil.la/1520229)).
  - {{cssxref("border-block-color")}}, {{cssxref("border-block-style")}}, {{cssxref("border-block-width")}}, {{cssxref("border-inline-color")}}, {{cssxref("border-inline-style")}} und {{cssxref("border-inline-width")}} ([Firefox-Bug 1520236](https://bugzil.la/1520236)).
  - {{cssxref("border-block")}} und {{cssxref("border-inline")}} ([Firefox-Bug 1520396](https://bugzil.la/1520396)).
  - {{cssxref("border-start-start-radius")}}, {{cssxref("border-start-end-radius")}}, {{cssxref("border-end-start-radius")}} und {{cssxref("border-end-end-radius")}} ([Firefox-Bug 1520684](https://bugzil.la/1520684)).

- Wir haben die Medienabfragen {{cssxref("@media/overflow-inline", "overflow-inline")}} und {{cssxref("@media/overflow-block", "overflow-block")}} implementiert ([Firefox-Bug 1422235](https://bugzil.la/1422235)).
- {{cssxref("grid-template-columns")}} und {{cssxref("grid-template-rows")}} sind jetzt animierbar, gemäß den in ihren Spezifikationen festgelegten Regeln ([Firefox-Bug 1348519](https://bugzil.la/1348519)).
- Wir unterstützen jetzt {{cssxref("calc", "calc()")}} mit Prozentwerten für Tabellenspalten- und Zellenbreiten ([Firefox-Bug 957915](https://bugzil.la/957915)).
- Die Schlüsselwörter `min-content` und `max-content` sind nun unverändert verfügbar ([Firefox-Bug 1322780](https://bugzil.la/1322780)). Diese können eingestellt werden auf:

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

- Autoplay von Audio wird standardmäßig blockiert, sobald 66 zur Release-Version von Firefox wird ([Firefox-Bug 1487844](https://bugzil.la/1487844), siehe [Firefox-Bug 1535667](https://bugzil.la/1535667) für Rollout-Details). Die Funktion wird schrittweise an Benutzer ausgeliefert, bis sie alle erreicht.

#### DOM

- Die Methode [`HTMLSlotElement.assignedElements()`](/de/docs/Web/API/HTMLSlotElement/assignedElements) wurde implementiert ([Firefox-Bug 1425685](https://bugzil.la/1425685)).
- Die Methode [`TextEncoder.encodeInto()`](/de/docs/Web/API/TextEncoder/encodeInto) wurde implementiert ([Firefox-Bug 1514664](https://bugzil.la/1514664)).

#### DOM-Ereignisse

- Die Eigenschaft [`InputEvent.inputType`](/de/docs/Web/API/InputEvent/inputType) wurde implementiert ([Firefox-Bug 1447239](https://bugzil.la/1447239)).
- Die Eigenschaften [`Window.event`](/de/docs/Web/API/Window/event) und [`Event.returnValue`](/de/docs/Web/API/Event/returnValue) — ursprünglich proprietäre IE-Funktionen, dann auch aus Kompatibilitätsgründen in anderen Browsern unterstützt — wurden in Firefox 66 wieder eingeführt, nachdem sie in den Versionen 63 bzw. 64 hinzugefügt, dann jedoch aufgrund von Kompatibilitätsproblemen wieder entfernt wurden.
- Ab Version 66 wird, wenn die Eigenschaft [`KeyboardEvent.keyCode`](/de/docs/Web/API/KeyboardEvent/keyCode) des [`keypress`](/de/docs/Web/API/Element/keypress_event) Ereignisobjekts 0 ist, der Wert derselbe sein wie [`KeyboardEvent.charCode`](/de/docs/Web/API/KeyboardEvent/charCode). Umgekehrt, wenn `charCode` 0 ist, entspricht er `keyCode`. Dieses Spiegelungsverhalten entspricht anderen Browsern und löst die meisten zugehörigen Kompatibilitätsprobleme. Einige JavaScript-Bibliotheken könnten durch User-Agent-Sniffing jedoch weitere Probleme verursachen. Beachten Sie, dass wir in Bezug auf die Spezifikation vom _Split-Modell_ zum _Konflationsmodell_ gewechselt sind (siehe [How to determine keyCode for keypress events](https://w3c.github.io/uievents/#determine-keypress-keyCode) in der UI-Event-Spezifikation).

#### Medien, Web Audio und WebRTC

- Der neue [AV1-Videocodec](/de/docs/Web/Media/Formats/Video_codecs#av1) ist jetzt standardmäßig auf macOS und Windows (für Intel-Prozessoren) aktiviert. Die Unterstützung für Linux wird in Firefox 67 kommen ([Firefox-Bug 1521181](https://bugzil.la/1521181), [Firefox-Bug 1452146](https://bugzil.la/1452146), und [Firefox-Bug 1534814](https://bugzil.la/1534814)).
- Die [`MediaDevices`](/de/docs/Web/API/MediaDevices) Methode [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia), verfügbar als `navigator.mediaDevices.getDisplayMedia()`, wurde hinzugefügt und mit der Spezifikation synchronisiert. Diese Methode erlaubt es Ihnen, einen Bildschirm oder einen Teil eines Bildschirms als [`MediaStream`](/de/docs/Web/API/MediaStream) zu erfassen, um ihn zu manipulieren oder zu teilen ([Firefox-Bug 1321221](https://bugzil.la/1321221)).
- Als Schritt zur endgültigen Abschaffung der Firefox-spezifischen Methode [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) zur Erfassung von Bildschirm- und Fensterinhalten behandelt die nicht standardmäßige `mediaSource`-Einschränkung jetzt die Werte `screen` und `window` identisch. Beide stellen dem Benutzer nun eine Liste von Bildschirmen und Fenstern zur Auswahl zur Verfügung ([Firefox-Bug 1474376](https://bugzil.la/1474376)).
- [`qpSum`](/de/docs/Web/API/RTCRtpStreamStats/qpSum) wurde zu lokalen ausgehenden [`RTCRTPStreamStats`](/de/docs/Web/API/RTCRTPStreamStats)-Objekten hinzugefügt. Dies misst die Summe der Quantisierungsparameterwerte für jeden gesendeten oder empfangenen Frame auf dem Videostrom. Je höher dieser Wert, desto stärker ist der Strom wahrscheinlich komprimiert ([Firefox-Bug 1347070](https://bugzil.la/1347070)).
- In einem Schritt in Richtung der Implementierung der Unterstützung für Feature Policy in einem zukünftigen Firefox-Update kann [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) nicht mehr in Situationen verwendet werden, in denen es keinen ordnungsgemäßen Ursprung für den Inhalt gibt, wie z.B. bei einem Aufruf aus einem sandboxed {{HTMLElement("iframe")}} oder aus einem `data`-URL, der vom Benutzer in die Adressleiste eingegeben wurde. Für weitere Details siehe den [Sicherheitsabschnitt](/de/docs/Web/API/MediaDevices/getUserMedia#security) auf der MediaDevices.getUserMedia() Seite ([Firefox-Bug 1371741](https://bugzil.la/1371741)).

#### Entfernungen

- Die veraltete WebRTC-`PeerConnection.getStats()`-Methode wurde zusammen mit den zugehörigen Typen entfernt ([Firefox-Bug 1328194](https://bugzil.la/1328194)).

### Netzwerke

- Der Standardwert des {{httpheader("Accept")}}-Headers wurde auf `*/*` geändert ([Firefox-Bug 1417463](https://bugzil.la/1417463)).

### Sicherheit

_Keine Änderungen._

### Plugins

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

#### API-Änderungen

- `WebDriver:NewWindow` wurde hinzugefügt, um das Öffnen eines neuen Browsing-Kontexts zu unterstützen, der entweder ein Fenster oder ein Tab sein kann ([Firefox-Bug 1504756](https://bugzil.la/1504756)).
- `WebDriver:SwitchToFrame` löst jetzt einen `no such element` Fehler aus, wenn das angegebene Element nicht Teil des aktuellen Browsing-Kontexts ist ([Firefox-Bug 1517196](https://bugzil.la/1517196)).
- `WebDriver:ExecuteScript` und `WebDriver:ExecuteAsyncScript` unterstützen den nicht spezifikationskonformen Parameter `scriptTimeout` nicht mehr. Verwenden Sie stattdessen `WebDriver:SetTimeout` oder die `timeouts` Fähigkeit, um diesen Wert zu definieren ([Firefox-Bug 1510929](https://bugzil.la/1510929)).

  - Außerdem werden jetzt unbestimmte Skript-Timeouts unterstützt ([Firefox-Bug 1128997](https://bugzil.la/1128997)).

- `WebDriver:SetWindowRect` gibt den Fensterzustand nicht mehr in seiner Antwort zurück ([Firefox-Bug 1517587](https://bugzil.la/1517587)).

#### Fehlerbehebungen

- `WebDriver:TakeScreenshot` verwendet jetzt die Eigenschaften [`Element.clientWidth`](/de/docs/Web/API/Element/clientWidth) und [`Element.clientHeight`](/de/docs/Web/API/Element/clientHeight) des [`Document.documentElement`](/de/docs/Web/API/Document/documentElement) anstelle der Viewport-Abmessungen ([Firefox-Bug 1385706](https://bugzil.la/1385706)).
- Verschiedene Korrekturen wurden vorgenommen, um die Zuverlässigkeit von Fenstersteuerbefehlen plattformübergreifend zu verbessern ([Firefox-Bug 1522408](https://bugzil.la/1522408), [Firefox-Bug 1478358](https://bugzil.la/1478358), [Firefox-Bug 1489955](https://bugzil.la/1489955)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

#### Menüs

- Erweiterungsmenüelemente vom "Lesezeichen" {{WebExtAPIRef("menus.ContextType", "type")}} erscheinen auch in der Lesezeichen-Seitenleiste (`Ctrl` + `B`) und im Bibliotheksfenster (`Ctrl` + `Shift` + `B`) ([Firefox-Bug 1419195](https://bugzil.la/1419195)).

### Manifest-Änderungen

_Keine Änderungen._

## Siehe auch

- Hacks Release-Beitrag: [Firefox 66: The Sound of Silence](https://hacks.mozilla.org/2019/03/firefox-66-the-sound-of-silence/)

## Ältere Versionen

{{Firefox_for_developers}}
