---
title: Firefox 66 für Entwickler
slug: Mozilla/Firefox/Releases/66
l10n:
  sourceCommit: 1822cdf5a86574429c4c49883a402663ef16a4ef
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 66, die Entwickler betreffen. Firefox 66 wurde am 19. März 2019 veröffentlicht.

## Änderungen für Web-Entwickler

### Entwicklertools

- JavaScript Getter können jetzt aus dem Auto-Vervollständigungs-Popup in der [Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) ausgeführt werden ([Firefox-Bug 1499289](https://bugzil.la/1499289)).
- Die Window-Methoden {{domxref("Window.alert()", "alert()")}}, {{domxref("Window.prompt()","prompt()")}}, und {{domxref("Window.confirm()","confirm()")}} funktionieren nun wieder im [Responsive Design Modus](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html), nachdem sie eine Zeit lang fehlerhaft waren ([Firefox-Bug 1273997](https://bugzil.la/1273997)).
- Sie können die Ausgabe der Konsole in die Zwischenablage kopieren, indem Sie mit der rechten Maustaste klicken und "**Sichtbare Nachrichten in die Zwischenablage exportieren**" im Kontextmenü auswählen.

### HTML

- UTF-8-kodierte HTML- (und Text-) Dateien, die von `file:`-URLs geladen werden, werden jetzt ohne `<meta charset="utf-8">` oder das UTF-8 BOM unterstützt, was die Arbeit an solchen Dateien vor dem Hochladen auf einen Server erleichtert. Sie müssen jedoch sicherstellen, dass der Server `charset=utf-8` im `Content-Type` HTTP-Header für solche Dateien sendet, da der Erkennungsmechanismus für lokale Dateien das inkrementelle Laden im Netzfall beeinträchtigen würde ([Firefox-Bug 1071816](https://bugzil.la/1071816)).

#### Entfernungen

- Das Attribut `x-moz-errormessage` wurde vom {{HTMLElement("input")}}-Element entfernt ([Firefox-Bug 1513890](https://bugzil.la/1513890)). Sie sollten die [Constraint-Validierung](/de/docs/Web/HTML/Constraint_validation) API verwenden, um benutzerdefinierte Validierungsnachrichten zu implementieren.

### CSS

- [Scroll Anchoring](https://drafts.csswg.org/css-scroll-anchoring/) wurde in Firefox Desktop implementiert (bisher jedoch nicht mobil), einschließlich der {{cssxref("overflow-anchor")}} Eigenschaft ([Firefox-Bug 1305957](https://bugzil.la/1305957)).
- Wir haben den case-sensitive [Attribut-Selektor](/de/docs/Web/CSS/Attribute_selectors) Modifikator `s` implementiert ([Firefox-Bug 1512386](https://bugzil.la/1512386)).
- Mehrere [logische Eigenschafts-Kurzschreibweisen](/de/docs/Web/CSS/CSS_logical_properties_and_values) wurden eingeführt, zusammen mit den flussrelativen Border-Radius-Eigenschaften:

  - {{cssxref("padding-block")}} und {{cssxref("padding-inline")}} ([Firefox-Bug 1519847](https://bugzil.la/1519847)).
  - {{cssxref("margin-block")}} und {{cssxref("margin-inline")}} ([Firefox-Bug 1519944](https://bugzil.la/1519944)).
  - {{cssxref("inset")}}, {{cssxref("inset-block")}}, und {{cssxref("inset-inline")}} ([Firefox-Bug 1520229](https://bugzil.la/1520229)).
  - {{cssxref("border-block-color")}}, {{cssxref("border-block-style")}}, {{cssxref("border-block-width")}}, {{cssxref("border-inline-color")}}, {{cssxref("border-inline-style")}}, und {{cssxref("border-inline-width")}} ([Firefox-Bug 1520236](https://bugzil.la/1520236)).
  - {{cssxref("border-block")}} und {{cssxref("border-inline")}} ([Firefox-Bug 1520396](https://bugzil.la/1520396)).
  - {{cssxref("border-start-start-radius")}}, {{cssxref("border-start-end-radius")}}, {{cssxref("border-end-start-radius")}}, und {{cssxref("border-end-end-radius")}} ([Firefox-Bug 1520684](https://bugzil.la/1520684)).

- Wir haben die {{cssxref("@media/overflow-inline", "overflow-inline")}} und {{cssxref("@media/overflow-block", "overflow-block")}} Media Queries implementiert ([Firefox-Bug 1422235](https://bugzil.la/1422235)).
- {{cssxref("grid-template-columns")}} und {{cssxref("grid-template-rows")}} sind jetzt animierbar, gemäß den in ihren Spezifikationen festgelegten Regeln ([Firefox-Bug 1348519](https://bugzil.la/1348519)).
- Wir unterstützen jetzt {{cssxref("calc", "calc()")}} mit Prozentangaben für Tabellenspalten und Spaltenbreiten ([Firefox-Bug 957915](https://bugzil.la/957915)).
- Die Schlüsselwörter `min-content` und `max-content` sind jetzt ohne Präfix verfügbar ([Firefox-Bug 1322780](https://bugzil.la/1322780)). Diese können eingestellt werden auf:

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

_Keine Hinzufügungen._

#### Entfernungen

- Wir haben die Unterstützung für das `xml:base` Attribut entfernt ([Firefox-Bug 903372](https://bugzil.la/903372)).

### JavaScript

Keine Änderungen.

### APIs

#### Neue APIs/Änderungen

- Bald nachdem Version 66 zur Release-Version von Firefox wird, wird das automatische Abspielen von Audio standardmäßig blockiert ([Firefox-Bug 1487844](https://bugzil.la/1487844), sehen Sie [Firefox-Bug 1535667](https://bugzil.la/1535667) für Rollout-Details). Die Funktion wird schrittweise für Nutzer eingeführt, bis sie für alle verfügbar ist.

#### DOM

- Die Methode {{domxref("HTMLSlotElement.assignedElements()")}} wurde implementiert ([Firefox-Bug 1425685](https://bugzil.la/1425685)).
- Die Methode {{domxref("TextEncoder.encodeInto()")}} wurde implementiert ([Firefox-Bug 1514664](https://bugzil.la/1514664)).

#### DOM-Ereignisse

- Die Eigenschaft {{domxref("InputEvent.inputType")}} wurde implementiert ([Firefox-Bug 1447239](https://bugzil.la/1447239)).
- Die Eigenschaften {{domxref("Window.event")}} und {{domxref("Event.returnValue")}} — ursprünglich proprietäre IE-Features, dann auch von anderen Browsern unterstützt, um Kompatibilitätszwecke zu erfüllen — wurden in Firefox 66 wieder eingeführt, nachdem sie zuerst in den Versionen 63 und 64 hinzugefügt, dann aber aufgrund von Kompatibilitätsproblemen entfernt wurden.
- Ab Version 66 ist, wenn die Eigenschaft {{domxref("KeyboardEvent.keyCode")}} des {{domxref("Element/keypress_event", "keypress")}} Ereignisobjekts 0 ist, der Wert derselbe wie {{domxref("KeyboardEvent.charCode")}}. Umgekehrt wird, wenn `charCode` 0 ist, er derselbe sein wie `keyCode`. Dieses Spiegelverhalten entspricht anderen Browsern und soll die meisten zugehörigen Kompatibilitätsprobleme lösen, jedoch kann User-Agent-Sniffing in einigen JavaScript-Bibliotheken noch weitere Probleme verursachen. Beachten Sie, dass wir in spektralischen Begriffen vom _getrennten Modell_ zum _verschmolzenen Modell_ gewechselt haben (siehe [Wie man keyCode für keypress-Ereignisse bestimmt](https://w3c.github.io/uievents/#determine-keypress-keyCode) in der UI-Ereignisspezifikation).

#### Medien, Web Audio, und WebRTC

- Der neue [AV1 Video-Codec](/de/docs/Web/Media/Formats/Video_codecs#av1) ist jetzt standardmäßig auf sowohl macOS als auch Windows (für Intel-Prozessoren) aktiviert. Die Unterstützung für Linux wird in Firefox 67 kommen ([Firefox-Bug 1521181](https://bugzil.la/1521181), [Firefox-Bug 1452146](https://bugzil.la/1452146), und [Firefox-Bug 1534814](https://bugzil.la/1534814)).
- Die {{domxref("MediaDevices")}} Methode {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}}, verfügbar als `navigator.mediaDevices.getDisplayMedia()`, wurde hinzugefügt und mit der Spezifikation synchronisiert. Diese Methode ermöglicht es Ihnen, einen Bildschirm oder einen Teil eines Bildschirms als {{domxref("MediaStream")}} zur Bearbeitung oder zum Teilen aufzunehmen ([Firefox-Bug 1321221](https://bugzil.la/1321221)).
- Als Schritt zur eventuellen Abschaffung der Firefox-spezifischen auf {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} basierenden Methode zur Erfassung von Bildschirm- und Fenstereinhalten behandelt die nicht standardisierte `mediaSource`-Einschränkung jetzt die Werte `screen` und `window` identisch. Beide präsentieren nun eine Liste sowohl von Bildschirmen als auch von Fenstern, aus denen der Benutzer wählen kann ([Firefox-Bug 1474376](https://bugzil.la/1474376)).
- {{domxref("RTCRtpStreamStats.qpSum", "qpSum")}} wurde zu lokalen ausgehenden {{domxref("RTCRTPStreamStats")}} Objekten hinzugefügt. Dies misst die Summe der Quantisierungsparameterwerte für jedes gesendete oder empfangene Frame auf dem Video-Track. Je höher diese Zahl, desto stärker ist der Stream wahrscheinlich komprimiert ([Firefox-Bug 1347070](https://bugzil.la/1347070)).
- In einem Schritt auf dem Weg zur Implementierung der Unterstützung für Feature Policy in einem zukünftigen Firefox-Update kann {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} nicht mehr in Situationen verwendet werden, in denen es keine geeignete Herkunft für den Inhalt gibt, wie zum Beispiel beim Aufruf aus einem sandboxed {{HTMLElement("iframe")}} oder aus einer `data`-URL, die vom Benutzer in die Adressleiste eingegeben wurde. Für weitere Details siehe den [Security](/de/docs/Web/API/MediaDevices/getUserMedia#security) Abschnitt auf der MediaDevices.getUserMedia()-Seite ([Firefox-Bug 1371741](https://bugzil.la/1371741)).

#### Entfernungen

- Die veraltete WebRTC `PeerConnection.getStats()` Methode wurde entfernt, zusammen mit den zugehörigen Typen ([Firefox-Bug 1328194](https://bugzil.la/1328194)).

### Netzwerke

- Der Standardwert des {{httpheader("Accept")}} Headers wurde auf `*/*` geändert ([Firefox-Bug 1417463](https://bugzil.la/1417463)).

### Sicherheit

_Keine Änderungen._

### Plugins

_Keine Änderungen._

### WebDriver-Konformität (Marionette)

#### API-Änderungen

- `WebDriver:NewWindow` wurde hinzugefügt, um das Öffnen eines neuen Browsing-Kontextes zu unterstützen, der entweder ein Fenster oder Tab sein kann ([Firefox-Bug 1504756](https://bugzil.la/1504756)).
- `WebDriver:SwitchToFrame` wirft jetzt einen `no such element` Fehler, wenn das angegebene Element nicht Teil des aktuellen Browsing-Kontextes ist ([Firefox-Bug 1517196](https://bugzil.la/1517196)).
- `WebDriver:ExecuteScript` und `WebDriver:ExecuteAsyncScript` unterstützen nicht mehr den nicht standardkonformen `scriptTimeout` Parameter. Stattdessen verwenden Sie `WebDriver:SetTimeout` oder die `timeouts` Fähigkeit, um diesen Wert zu definieren ([Firefox-Bug 1510929](https://bugzil.la/1510929)).

  - Zusätzlich werden jetzt auch unendliche Skript-Timeouts unterstützt ([Firefox-Bug 1128997](https://bugzil.la/1128997)).

- `WebDriver:SetWindowRect` gibt den Fensterstatus nicht mehr in seiner Antwort zurück ([Firefox-Bug 1517587](https://bugzil.la/1517587)).

#### Fehlerbehebungen

- `WebDriver:TakeScreenshot` verwendet jetzt die {{domxref("Element.clientWidth")}} und {{domxref("Element.clientHeight")}} Eigenschaften des {{domxref("Document.documentElement")}} anstelle der Viewport-Dimensionen ([Firefox-Bug 1385706](https://bugzil.la/1385706)).
- Verschiedene Korrekturen wurden vorgenommen, um Befehle zur Fensterverwaltung plattformübergreifend zuverlässiger zu machen ([Firefox-Bug 1522408](https://bugzil.la/1522408), [Firefox-Bug 1478358](https://bugzil.la/1478358), [Firefox-Bug 1489955](https://bugzil.la/1489955)).

## Änderungen für Add-on-Entwickler

### API-Änderungen

#### Menüs

- Erweiterte Menüeinträge des Typs "bookmark" {{WebExtAPIRef("menus.ContextType", "type")}} erscheinen auch in der Lesezeichen-Seitenleiste (`Ctrl` + `B`) und im Bibliotheksfenster (`Ctrl` + `Shift` + `B`) ([Firefox-Bug 1419195](https://bugzil.la/1419195)).

### Manifest-Änderungen

_Keine Änderungen._

## Siehe auch

- Hacks-Release-Post: [Firefox 66: The Sound of Silence](https://hacks.mozilla.org/2019/03/firefox-66-the-sound-of-silence/)

## Ältere Versionen

{{Firefox_for_developers}}
