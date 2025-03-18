---
title: Firefox 116 für Entwickler
slug: Mozilla/Firefox/Releases/116
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 116, die Entwickler betreffen. Firefox 116 wurde am 01. August 2023 veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das [`dirname`](/de/docs/Web/HTML/Element/input#dirname)-Attribut wird jetzt auf [`input`](/de/docs/Web/HTML/Element/input#dirname) und [`textarea`](/de/docs/Web/HTML/Element/textarea#dirname)-Elementen unterstützt.
  Dieses Attribut ermöglicht es, Textausrichtungsinformationen (`ltr` oder `rtl`) beim Formularversand an den Server zu übermitteln ([Firefox-Bug 675943](https://bugzil.la/675943)).

### CSS

- Die Syntax für die {{cssxref("offset-path")}}-Eigenschaft, die verwendet wird, um den Pfad eines Elements zu definieren, wurde aktualisiert. Die aktualisierte Syntax erlaubt es, einen Wert von `none` oder einen von `<offset-path>` oder `<coord-box>` festzulegen. Der neue `<offset-path>`-Wert kann ein `<ray()>`, eine `<url>` oder eine `<basic-shape>` sein. Der [`<coord-box>`](/de/docs/Web/CSS/box-edge)-Wert hat den älteren `<geometry-box>`-Wert ersetzt und ermöglicht es, die Form des Pfades basierend auf dem Box-Modell des Elements zu spezifizieren. Die Werte `<basic-shape>` und `<coord-box>` erfordern, dass die Präferenzen `layout.css.motion-path-basic-shapes.enabled` und `layout.css.motion-path-coord-box.enabled` entsprechend aktiviert sind. ([Firefox-Bug 1598156](https://bugzil.la/1598156)) und ([Firefox-Bug 1837305](https://bugzil.la/1837305)).

### Barrierefreiheit (ARIA)

- Die [`image`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/img_role)-Rolle wird jetzt als Synonym für `img` unterstützt.
  Dies sorgt für Konsistenz mit den meisten Rollennamen, die vollständige Wörter oder Zusammensetzungen von vollständigen Wörtern sind ([Firefox-Bug 1829269](https://bugzil.la/1829269)).

### JavaScript

- [`Intl.NumberFormat`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) unterstützt neue [Konstrukturoptionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat), die steuern, wie Zahlen gerundet werden (`roundingIncrement`, `roundingMode`, `roundingPriority`), die Strategie zum Anzeigen von nachgestellten Nullen bei ganzen Zahlen (`trailingZeroDisplay`) und ob Gruppierungszeichen zur Anzeige von Tausendern, Millionen usw. verwendet werden (`useGrouping`).
  Es unterstützt auch neue Methoden [`formatRange()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatRange) und [`formatRangeToParts()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatRangeToParts) zur Formatierung von Zahlenbereichen.
  ([Firefox-Bug 1795756](https://bugzil.la/1795756)).
- [`Intl.PluralRules`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules) wurde aktualisiert (als Teil derselben Änderungssätze wie `Intl.NumberFormat`), um [Konstrukturoptionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/PluralRules) `roundingIncrement`, `roundingMode`, `roundingPriority` und `trailingZeroDisplay` sowie die [`selectRange()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/selectRange)-Methode zu unterstützen.
  ([Firefox-Bug 1795756](https://bugzil.la/1795756)).

### SVG

- Die `q`-[Längeneinheit](/de/docs/Web/SVG/Guides/Content_type#length) (`1q = 1/40 eines 1cm`) wird jetzt unterstützt ([Firefox-Bug 1836995](https://bugzil.la/1836995)).

### HTTP

- Die Konfiguration einer [Content-Security-Policy](/de/docs/Web/HTTP/Guides/CSP) unterstützt jetzt die [Angabe externer JavaScript-Dateien, die über Hashwerte auf die Whitelist gesetzt werden dürfen](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src#allowlisting_external_scripts_using_hashes), während zuvor nur Inline-Skripte über einen Hash auf die Whitelist gesetzt werden konnten ([Firefox-Bug 1409200](https://bugzil.la/1409200)).

### APIs

#### DOM

- Die Eigenschaften [`TextMetrics.fontBoundingBoxAscent`](/de/docs/Web/API/TextMetrics/fontBoundingBoxAscent) und [`TextMetrics.fontBoundingBoxDescent`](/de/docs/Web/API/TextMetrics/fontBoundingBoxDescent) werden jetzt unterstützt.
  Diese Metriken geben jeweils die Entfernung über und unter der [`CanvasRenderingContext2D.textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline) zum Begrenzungsrechteck aller Schriftarten, die zum Rendern des Textes verwendet werden, zurück ([Firefox-Bug 1801198](https://bugzil.la/1801198)).

#### Medien, WebRTC und Web Audio

- Die [Audio Output Devices API](/de/docs/Web/API/Audio_Output_Devices_API) wird jetzt auf allen Plattformen außer Android unterstützt.
  Diese API erlaubt es Webanwendungen, die Audioausgabe zu einem zugelassenen Bluetooth-Headset, Lautsprecher oder anderem Gerät umzuleiten, anstatt den Browser oder das zugrunde liegende Betriebssystemstandard zu verwenden.
  Betroffene APIs umfassen [`MediaDevices.selectAudioOutput()`](/de/docs/Web/API/MediaDevices/selectAudioOutput), [`MediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices), [`HTMLMediaElement.setSinkId()`](/de/docs/Web/API/HTMLMediaElement/setSinkId), [`HTMLMediaElement.sinkId`](/de/docs/Web/API/HTMLMediaElement/sinkId) und die Berechtigungsrichtlinie [`Permissions-Policy: speaker-selection`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/speaker-selection) ([Firefox-Bug 1498512](https://bugzil.la/1498512)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Unterstützung für den `session.end`-Befehl hinzugefügt, der es den Benutzern ermöglicht, die Automatisierungssitzung zu beenden. Dies war zuvor nur für Sitzungen möglich, die sowohl WebDriver Classic als auch WebDriver BiDi verwendeten. Jetzt ist dies auch für WebDriver BiDi-only Sitzungen möglich ([Firefox-Bug 1829337](https://bugzil.la/1829337)).
- Unterstützung für [Capability-Matching](/de/docs/Web/WebDriver/Reference/Capabilities) für den `session.new`-Befehl hinzugefügt. Damit können Erwartungen an den Zielbrowser, wie der Browsername, Plattformname usw. definiert werden. Es kann auch verwendet werden, um die Sitzung zu konfigurieren, z. B. um festzulegen, ob unsichere Zertifikate akzeptiert werden sollen ([Firefox-Bug 1731730](https://bugzil.la/1731730)).
- Shadow-Roots werden nun korrekt serialisiert, wenn sie die Wurzel eines zurückgegebenen Wertes sind ([Firefox-Bug 1836514](https://bugzil.la/1836514)).
- Die `network`-Ereigniszeitherkunftsinformation wurde von `originTime` in `timeOrigin` umbenannt ([Firefox-Bug 1836926](https://bugzil.la/1836926)).
- Das `network`-Ereignis `network.responseCompleted` wird nun korrekt für Navigationsanfragen mit Umleitung ausgelöst ([Firefox-Bug 1838238](https://bugzil.la/1838238)).

#### Marionette

- Unterstützung für die Fähigkeit `moz:useNonSpecCompliantPointerOrigin` wurde entfernt. Benutzer, die diese Funktion weiterhin benötigen, können die Firefox 115 ESR-Version so lange verwenden, wie sie unterstützt wird. Bitte melden Sie Fehler unter [Remote Protocol :: Marionette](https://bugzilla.mozilla.org/enter_bug.cgi?product=Remote%20Protocol&component=Marionette), wenn Sie Probleme feststellen sollten ([Firefox-Bug 1490258](https://bugzil.la/1490258)).
- Ein Regression, die uns daran hinderte, abgelaufene Elemente (DOM-Elemente, die zuvor auf der Seite vorhanden waren) von unbekannten Elementen in einem bestimmten Browserkontext zu unterscheiden, wurde behoben ([Firefox-Bug 1822466](https://bugzil.la/1822466)).
- Das Erstellen einer neuen Sitzung sollte nun ordnungsgemäß warten, bis der initiale Kontext geladen ist ([Firefox-Bug 1838381](https://bugzil.la/1838381)).

## Änderungen für Add-on-Entwickler

- Die URL einer Seite, die geöffnet wird, wenn eine Erweiterung deinstalliert wird, bereitgestellt in {{WebExtAPIRef("runtime.setUninstallURL")}}, kann jetzt bis zu 1023 Zeichen anstelle von 255 umfassen ([Firefox-Bug 1835723](https://bugzil.la/1835723)).
- Fügt {{WebExtAPIRef("action.getUserSettings")}} und {{WebExtAPIRef("browserAction.getUserSettings")}} hinzu, die die vom Benutzer festgelegten Einstellungen für eine Browseraktion der Erweiterung bereitstellen ([Firefox-Bug 1814905](https://bugzil.la/1814905)).
- `autoDiscardable` wird jetzt in {{WebExtAPIRef("tabs.Tab")}}, {{WebExtAPIRef("tabs.onUpdated")}}, {{WebExtAPIRef("tabs.update")}} und {{WebExtAPIRef("tabs.query")}} unterstützt ([Firefox-Bug 1809094](https://bugzil.la/1809094)).

## Entwicklerwerkzeuge

- Unterstützung für [Custom Formatters](https://firefox-source-docs.mozilla.org/devtools-user/custom_formatters/index.html) hinzugefügt ([Firefox-Bug 1752760](https://bugzil.la/1752760)).
- "Container"-Abzeichen in der Markup-Ansicht auf Elementen mit einer `container-type`-Eigenschaft mit `size` oder `inline-size`-Werten hinzugefügt ([Firefox-Bug 1789193](https://bugzil.la/1789193)).
- Ein Problem im Inspector behoben, bei dem CSS-Benutzerdefinierte Eigenschaften, die auf der Root des benutzerdefinierten Elements festgelegt sind, nicht angezeigt wurden ([Firefox-Bug 1836755](https://bugzil.la/1836755)).
- Zeigt im Netzwerk-Monitor an, ob die Anfrage mit DNS über HTTPS aufgelöst wurde ([Firefox-Bug 1810195](https://bugzil.la/1810195)).
- Entfernt `Proxy-Authorization`-Header im Netzwerk-Monitor ([Firefox-Bug 1816115](https://bugzil.la/1816115)).

## Ältere Versionen

{{Firefox_for_developers}}
