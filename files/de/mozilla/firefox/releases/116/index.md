---
title: Firefox 116 Versionshinweise für Entwickler
short-title: Firefox 116
slug: Mozilla/Firefox/Releases/116
l10n:
  sourceCommit: 676631fd27c8096c3ae3ceb2a6b4ffd6f687055f
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 116, die Entwickler betreffen. Firefox 116 wurde am 1. August 2023 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Unterstützung für [Custom Formatters](https://firefox-source-docs.mozilla.org/devtools-user/custom_formatters/index.html) hinzugefügt ([Firefox Bug 1752760](https://bugzil.la/1752760)).
- "Container"-Abzeichen im Markup-Ansicht bei Elementen mit einer `container-type`-Eigenschaft mit den Werten `size` oder `inline-size` hinzugefügt ([Firefox Bug 1789193](https://bugzil.la/1789193)).
- Ein Problem im Inspektor behoben, bei dem CSS-Benutzerdefinierte Eigenschaften, die im Root des Custom Elements gesetzt waren, nicht angezeigt wurden ([Firefox Bug 1836755](https://bugzil.la/1836755)).
- Im Netzwerkmonitor wird angezeigt, ob die Anfrage mit DNS über HTTPS aufgelöst wurde ([Firefox Bug 1810195](https://bugzil.la/1810195)).
- Der `Proxy-Authorization`-Header im Netzwerkmonitor wurde entfernt ([Firefox Bug 1816115](https://bugzil.la/1816115)).

### HTML

- Das [`dirname`](/de/docs/Web/HTML/Reference/Elements/input#dirname)-Attribut wird jetzt auf [`input`](/de/docs/Web/HTML/Reference/Elements/input#dirname)- und [`textarea`](/de/docs/Web/HTML/Reference/Elements/textarea#dirname)-Elementen unterstützt.
  Dieses Attribut ermöglicht es, Textausrichtungsinformationen (`ltr` oder `rtl`) beim Absenden von Formularen an den Server zu übermitteln ([Firefox Bug 675943](https://bugzil.la/675943)).

### CSS

- Die Syntax für die {{cssxref("offset-path")}}-Eigenschaft, die verwendet wird, um den Pfad für ein Element festzulegen, wurde aktualisiert. Die aktualisierte Syntax erlaubt es, einen Wert von `none` oder einen der Werte `<offset-path>` oder `<coord-box>` festzulegen. Der neue `<offset-path>`-Wert kann ein `<ray()>`, ein `<url>` oder eine `<basic-shape>` sein. Der [`<coord-box>`](/de/docs/Web/CSS/Reference/Values/box-edge)-Wert hat den älteren `<geometry-box>`-Wert ersetzt und lässt Sie die Form des Pfades basierend auf dem Boxmodell des Elements festlegen. Die `<basic-shape>`- und `<coord-box>`-Werte erfordern, dass die `layout.css.motion-path-basic-shapes.enabled`- und `layout.css.motion-path-coord-box.enabled`-Einstellungen aktiviert sind. ([Firefox Bug 1598156](https://bugzil.la/1598156)) und ([Firefox Bug 1837305](https://bugzil.la/1837305)).

### Barrierefreiheit (ARIA)

- Die [`image`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/img_role)-Rolle wird jetzt als Synonym für `img` unterstützt.
  Dies sorgt für Konsistenz mit den meisten Rollennamen, die vollständige Wörter oder Zusammensetzungen vollständiger Wörter sind ([Firefox Bug 1829269](https://bugzil.la/1829269)).

### JavaScript

- [`Intl.NumberFormat`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) unterstützt neue [Konstruktoroptionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat), die steuern, wie Zahlen gerundet werden (`roundingIncrement`, `roundingMode`, `roundingPriority`), die Strategie für das Anzeigen von nachgestellten Nullen bei Ganzzahlen (`trailingZeroDisplay`) und ob Gruppierungstrennzeichen verwendet werden sollen, um Tausende, Millionen usw. anzuzeigen (`useGrouping`).
  Es unterstützt auch neue Methoden [`formatRange()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatRange) und [`formatRangeToParts()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatRangeToParts) zum Formatieren von Zahlenbereichen.
  ([Firefox Bug 1795756](https://bugzil.la/1795756)).
- [`Intl.PluralRules`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules) wurde (im Rahmen desselben Satzes von Änderungen wie `Intl.NumberFormat`) aktualisiert, um [Konstruktoroptionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/PluralRules) `roundingIncrement`, `roundingMode`, `roundingPriority` und `trailingZeroDisplay` sowie die Methode [`selectRange()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/selectRange) zu unterstützen.
  ([Firefox Bug 1795756](https://bugzil.la/1795756)).

### SVG

- Die `q` [Längeneinheit](/de/docs/Web/SVG/Guides/Content_type#length) (`1q = 1/40 von 1cm`) wird jetzt unterstützt ([Firefox Bug 1836995](https://bugzil.la/1836995)).

### HTTP

- Die Konfiguration einer [Content-Security-Policy](/de/docs/Web/HTTP/Guides/CSP) unterstützt jetzt das Angeben [externer JavaScript-Dateien, die mithilfe von Hashes auf die Whitelist gesetzt werden sollen](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src#allowlisting_external_scripts_using_hashes), wobei zuvor nur Inline-Skripte mithilfe eines Hashs auf die Whitelist gesetzt werden konnten ([Firefox Bug 1409200](https://bugzil.la/1409200)).

### APIs

#### DOM

- Die Eigenschaften [`TextMetrics.fontBoundingBoxAscent`](/de/docs/Web/API/TextMetrics/fontBoundingBoxAscent) und [`TextMetrics.fontBoundingBoxDescent`](/de/docs/Web/API/TextMetrics/fontBoundingBoxDescent) werden jetzt unterstützt.
  Diese Metriken geben jeweils den Abstand oberhalb und unterhalb der [`CanvasRenderingContext2D.textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline) zum Begrenzungsrechteck aller Schriftarten zurück, die verwendet werden, um den Text darzustellen ([Firefox Bug 1801198](https://bugzil.la/1801198)).

#### Medien, WebRTC und Web Audio

- Die [Audio Output Devices API](/de/docs/Web/API/Audio_Output_Devices_API) wird jetzt auf allen Plattformen außer Android unterstützt.
  Diese API erlaubt es Webanwendungen, die Audioausgabe an ein erlaubtes Bluetooth-Headset, eine Freisprecheinrichtung oder ein anderes Gerät umzuleiten, anstatt den Browser oder das zugrunde liegende Betriebssystem-Standard verwenden zu müssen.
  Betroffene APIs sind [`MediaDevices.selectAudioOutput()`](/de/docs/Web/API/MediaDevices/selectAudioOutput), [`MediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices), [`HTMLMediaElement.setSinkId()`](/de/docs/Web/API/HTMLMediaElement/setSinkId), [`HTMLMediaElement.sinkId`](/de/docs/Web/API/HTMLMediaElement/sinkId), und die Berechtigungsrichtlinie [`Permissions-Policy: speaker-selection`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/speaker-selection) ([Firefox Bug 1498512](https://bugzil.la/1498512)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Unterstützung für den `session.end`-Befehl hinzugefügt, der es Benutzern ermöglicht, die Automatisierungssitzung zu beenden. Dies war zuvor nur für Sitzungen möglich, die sowohl WebDriver Classic als auch WebDriver BiDi verwenden. Es ist jetzt auch für ausschließlich WebDriver BiDi-Sitzungen möglich ([Firefox Bug 1829337](https://bugzil.la/1829337)).
- Unterstützung für [Fähigkeitsabgleich](/de/docs/Web/WebDriver/Reference/Capabilities) für den `session.new`-Befehl hinzugefügt. Damit können Erwartungen an den Zielbrowser definiert werden, wie Browsername, Plattformname usw. Es kann auch verwendet werden, um die Sitzung zu konfigurieren, zum Beispiel, um anzugeben, ob unsichere Zertifikate akzeptiert werden sollen ([Firefox Bug 1731730](https://bugzil.la/1731730)).
- Shadow-Roots werden jetzt korrekt serialisiert, wenn sie die Wurzel eines zurückgegebenen Wertes sind ([Firefox Bug 1836514](https://bugzil.la/1836514)).
- Die `network`-Ereignis-Zeit-Quellinformation wurde von `originTime` zu `timeOrigin` umbenannt ([Firefox Bug 1836926](https://bugzil.la/1836926)).
- Das `network`-Ereignis `network.responseCompleted` wird jetzt korrekt für Navigationsanfragen, die eine Umleitung beinhalten, gesendet ([Firefox Bug 1838238](https://bugzil.la/1838238)).

#### Marionette

- Unterstützung für die Fähigkeit `moz:useNonSpecCompliantPointerOrigin` entfernt. Benutzer, die diese Funktion noch benötigen, können die Firefox 115 ESR-Version verwenden, solange sie unterstützt wird. Bitte melden Sie Fehler unter [Remote Protocol :: Marionette](https://bugzilla.mozilla.org/enter_bug.cgi?product=Remote%20Protocol&component=Marionette), wenn Sie Probleme feststellen ([Firefox Bug 1490258](https://bugzil.la/1490258)).
- Ein Regression wurde behoben, die uns daran hinderte, abgestandene Elemente (DOM-Elemente, die zuvor auf der Seite gesehen wurden) von unbekannten Elementen für einen bestimmten Browsing-Kontext zu unterscheiden ([Firefox Bug 1822466](https://bugzil.la/1822466)).
- Beim Erstellen einer neuen Sitzung sollte nun ordnungsgemäß auf das Laden des initialen Kontexts gewartet werden ([Firefox Bug 1838381](https://bugzil.la/1838381)).

## Änderungen für Add-on-Entwickler

- Die URL einer Seite, die beim Deinstallieren einer Erweiterung besucht wird, bereitgestellt in {{WebExtAPIRef("runtime.setUninstallURL")}}, kann jetzt bis zu 1023 Zeichen anstatt 255 umfassen ([Firefox Bug 1835723](https://bugzil.la/1835723)).
- Hinzufügung von {{WebExtAPIRef("action.getUserSettings")}} und {{WebExtAPIRef("browserAction.getUserSettings")}}, die die vom Benutzer festgelegten Einstellungen für die Browseraktion einer Erweiterung bereitstellen ([Firefox Bug 1814905](https://bugzil.la/1814905)).
- `autoDiscardable` wird jetzt in {{WebExtAPIRef("tabs.Tab")}}, {{WebExtAPIRef("tabs.onUpdated")}}, {{WebExtAPIRef("tabs.update")}} und {{WebExtAPIRef("tabs.query")}} unterstützt ([Firefox Bug 1809094](https://bugzil.la/1809094)).
