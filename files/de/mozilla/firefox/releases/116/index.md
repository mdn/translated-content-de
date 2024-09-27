---
title: Firefox 116 für Entwickler
slug: Mozilla/Firefox/Releases/116
l10n:
  sourceCommit: 9afa3f63a178043901e92043ca9315e22c59ee1e
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 116, die Entwickler betreffen. Firefox 116 wurde am 01. August 2023 veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das Attribut [`dirname`](/de/docs/Web/HTML/Element/input#dirname) wird nun bei den Elementen [`input`](/de/docs/Web/HTML/Element/input#dirname) und [`textarea`](/de/docs/Web/HTML/Element/textarea#dirname) unterstützt.
  Dieses Attribut ermöglicht es, die Textausrichtungsinformationen (`ltr` oder `rtl`) während der Formularübermittlung an den Server zu übermitteln ([Firefox Bug 675943](https://bugzil.la/675943)).

### CSS

- Die Syntax für die Eigenschaft {{cssxref("offset-path")}} wurde aktualisiert, die verwendet wird, um den Pfad zu definieren, dem ein Element folgen soll. Die aktualisierte Syntax ermöglicht es, einen Wert von `none` oder einen von `<offset-path>` oder `<coord-box>` festzulegen. Der neue `<offset-path>` Wert kann ein `<ray()>`, eine `<url>` oder eine `<basic-shape>` sein. Der [`<coord-box>`](/de/docs/Web/CSS/box-edge) Wert hat den älteren `<geometry-box>` Wert ersetzt und ermöglicht es, die Form des Pfads basierend auf dem Boxmodell des Elements zu spezifizieren. Die Werte `<basic-shape>` und `<coord-box>` erfordern, dass die Präferenzen `layout.css.motion-path-basic-shapes.enabled` und `layout.css.motion-path-coord-box.enabled` aktiviert sind. ([Firefox Bug 1598156](https://bugzil.la/1598156)) und ([Firefox Bug 1837305](https://bugzil.la/1837305)).

### Barrierefreiheit (ARIA)

- Die [`image`](/de/docs/Web/Accessibility/ARIA/Roles/img_role) Rolle wird jetzt als Synonym für `img` unterstützt.
  Dies gewährleistet Konsistenz mit den meisten Rollennamen, die vollständige Wörter oder Konkatinationen vollständiger Wörter sind ([Firefox Bug 1829269](https://bugzil.la/1829269)).

### JavaScript

- [`Intl.NumberFormat`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) unterstützt neue [Konstruktoroptionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat), die steuern, wie Zahlen gerundet werden (`roundingIncrement`, `roundingMode`, `roundingPriority`), die Strategie für die Anzeige von Nullen an der Dekadenstelle bei ganzen Zahlen (`trailingZeroDisplay`) und ob Trennzeichen zur Gruppierung von Tausendern verwendet werden (`useGrouping`).
  Es unterstützt auch neue Methoden [`formatRange()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatRange) und [`formatRangeToParts()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatRangeToParts) zum Formatieren von Zahlenbereichen.
  ([Firefox Bug 1795756](https://bugzil.la/1795756)).
- [`Intl.PluralRules`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules) wurde aktualisiert (im Rahmen des gleichen Satzes von Änderungen wie `Intl.NumberFormat`), um die Unterstützung für [Konstruktoroptionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/PluralRules) `roundingIncrement`, `roundingMode`, `roundingPriority` und `trailingZeroDisplay` sowie die Methode [`selectRange()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/selectRange) zu bieten.
  ([Firefox Bug 1795756](https://bugzil.la/1795756)).

### SVG

- Die `q` [Längeneinheit](/de/docs/Web/SVG/Content_type#length) (`1q = 1/40stel von 1cm`) wird nun unterstützt ([Firefox Bug 1836995](https://bugzil.la/1836995)).

### HTTP

- Das Konfigurieren einer [Content-Security-Policy](/de/docs/Web/HTTP/CSP) unterstützt jetzt die Angabe von [externen JavaScript-Dateien, die mit Hashes in die Positivliste aufgenommen werden](/de/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#allowlisting_external_scripts_using_hashes), wo zuvor nur Inline-Skripte mit einem Hash in die Positivliste aufgenommen werden konnten ([Firefox Bug 1409200](https://bugzil.la/1409200)).

### APIs

#### DOM

- Die Eigenschaften [`TextMetrics.fontBoundingBoxAscent`](/de/docs/Web/API/TextMetrics/fontBoundingBoxAscent) und [`TextMetrics.fontBoundingBoxDescent`](/de/docs/Web/API/TextMetrics/fontBoundingBoxDescent) werden jetzt unterstützt. Diese Metriken geben jeweils die Entfernung oberhalb und unterhalb der [`CanvasRenderingContext2D.textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline) bis zum Begrenzungsrechteck aller beim Rendern des Texts verwendeten Schriftarten zurück ([Firefox Bug 1801198](https://bugzil.la/1801198)).

#### Medien, WebRTC und Web Audio

- Die [Audio Output Devices API](/de/docs/Web/API/Audio_Output_Devices_API) wird jetzt auf allen Plattformen außer Android unterstützt.
  Diese API ermöglicht es Webanwendungen, die Audioausgabe an ein zugelassenes Bluetooth-Headset, einen Lautsprecher oder ein anderes Gerät umzuleiten, anstatt den Standard des Browsers oder des darunterliegenden Betriebssystems zu verwenden.
  Betroffene APIs umfassen [`MediaDevices.selectAudioOutput()`](/de/docs/Web/API/MediaDevices/selectAudioOutput), [`MediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices), [`HTMLMediaElement.setSinkId()`](/de/docs/Web/API/HTMLMediaElement/setSinkId), [`HTMLMediaElement.sinkId`](/de/docs/Web/API/HTMLMediaElement/sinkId), und die Berechtigungsrichtlinie [`Permissions-Policy: speaker-selection`](/de/docs/Web/HTTP/Headers/Permissions-Policy/speaker-selection) ([Firefox Bug 1498512](https://bugzil.la/1498512)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Unterstützung für den `session.end` Befehl hinzugefügt, der es Benutzern ermöglicht, die Automatisierungssitzung zu beenden. Dies war zuvor nur für Sitzungen möglich, die sowohl WebDriver Classic als auch WebDriver BiDi verwendeten. Jetzt ist es auch für WebDriver BiDi-only Sitzungen möglich ([Firefox Bug 1829337](https://bugzil.la/1829337)).
- Unterstützung für [Fähigkeitenabgleich](/de/docs/Web/WebDriver/Capabilities) für den `session.new` Befehl hinzugefügt. Es ermöglicht die Definition von Erwartungen an den Zielbrowser, wie Browsername, Plattformname usw. Es kann auch verwendet werden, um die Sitzung zu konfigurieren, z. B. wenn unsichere Zertifikate akzeptiert werden sollen ([Firefox Bug 1731730](https://bugzil.la/1731730)).
- Schattenwurzeln werden jetzt korrekt serialisiert, wenn sie die Wurzel eines zurückgegebenen Werts sind ([Firefox Bug 1836514](https://bugzil.la/1836514)).
- Die `network` Ereigniszeitursprungsinformationen wurden von `originTime` in `timeOrigin` umbenannt ([Firefox Bug 1836926](https://bugzil.la/1836926)).
- Das `network` Ereignis `network.responseCompleted` wird jetzt korrekt für Navigationsanfragen emittiert, die eine Umleitung beinhalten ([Firefox Bug 1838238](https://bugzil.la/1838238)).

#### Marionette

- Unterstützung für die `moz:useNonSpecCompliantPointerOrigin` Fähigkeit entfernt. Benutzer, die diese Funktion weiterhin benötigen, können weiterhin die Firefox 115 ESR-Version verwenden, solange sie unterstützt wird. Bitte melden Sie Fehler unter [Remote Protocol :: Marionette](https://bugzilla.mozilla.org/enter_bug.cgi?product=Remote%20Protocol&component=Marionette), wenn Sie ein Problem sehen ([Firefox Bug 1490258](https://bugzil.la/1490258)).
- Ein Rückschritt wurde behoben, der verhinderte, dass wir veraltete Elemente (DOM-Elemente, die zuvor auf der Seite gesehen wurden) von unbekannten Elementen für einen bestimmten Browsingkontext unterscheiden konnten ([Firefox Bug 1822466](https://bugzil.la/1822466)).
- Das Erstellen einer neuen Sitzung sollte jetzt ordnungsgemäß warten, bis der anfängliche Kontext geladen ist ([Firefox Bug 1838381](https://bugzil.la/1838381)).

## Änderungen für Add-on-Entwickler

- Die URL einer Seite, die beim Deinstallieren einer Erweiterung besucht wird, bereitgestellt in {{WebExtAPIRef("runtime.setUninstallURL")}}, kann jetzt bis zu 1023 Zeichen lang sein, anstatt 255 ([Firefox Bug 1835723](https://bugzil.la/1835723)).
- Fügt {{WebExtAPIRef("action.getUserSettings")}} und {{WebExtAPIRef("browserAction.getUserSettings")}} hinzu, die die vom Benutzer angegebenen Einstellungen für die Browseraktion einer Erweiterung bereitstellen ([Firefox Bug 1814905](https://bugzil.la/1814905)).
- `autoDiscardable` wird jetzt in {{WebExtAPIRef("tabs.Tab")}}, {{WebExtAPIRef("tabs.onUpdated")}}, {{WebExtAPIRef("tabs.update")}}, und {{WebExtAPIRef("tabs.query")}} unterstützt ([Firefox Bug 1809094](https://bugzil.la/1809094)).

## Entwickler-Tools

- Unterstützung für [Custom Formatters](https://firefox-source-docs.mozilla.org/devtools-user/custom_formatters/index.html) hinzugefügt ([Firefox Bug 1752760](https://bugzil.la/1752760)).
- "Container"-Abzeichen in der Markup-Ansicht für Elemente mit einer `container-type` Eigenschaft mit `size` oder `inline-size` Werten hinzugefügt ([Firefox Bug 1789193](https://bugzil.la/1789193)).
- Ein Problem im Inspector behoben, bei dem CSS-Benutzerdefinierte Eigenschaften, die auf dem Custom Element Root festgelegt wurden, nicht angezeigt wurden ([Firefox Bug 1836755](https://bugzil.la/1836755)).
- Im Netzwerkmonitor anzeigen, ob die Anforderung mit DNS über HTTPS aufgelöst wurde ([Firefox Bug 1810195](https://bugzil.la/1810195)).
- Entfernte `Proxy-Authorization` Kopfzeile im Netzwerkmonitor ([Firefox Bug 1816115](https://bugzil.la/1816115)).

## Ältere Versionen

{{Firefox_for_developers}}
