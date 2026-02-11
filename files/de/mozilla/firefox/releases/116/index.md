---
title: Firefox 116 Versionshinweise für Entwickler
short-title: Firefox 116
slug: Mozilla/Firefox/Releases/116
l10n:
  sourceCommit: 225de04b84b717433ffeb3bb0cf5ceddac9653ea
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 116, die Entwickler betreffen. Firefox 116 wurde am 1. August 2023 veröffentlicht.

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

- Unterstützung für [Custom Formatters](https://firefox-source-docs.mozilla.org/devtools-user/custom_formatters/index.html) hinzugefügt ([Firefox Bug 1752760](https://bugzil.la/1752760)).
- "Container"-Abzeichen in der Markupansicht auf Elementen mit einer `container-type`-Eigenschaft mit den Werten `size` oder `inline-size` hinzugefügt ([Firefox Bug 1789193](https://bugzil.la/1789193)).
- Ein Problem im Inspektor behoben, bei dem CSS-Benutzerdefinierte Eigenschaften, die auf dem Custom Element Root festgelegt sind, nicht angezeigt wurden ([Firefox Bug 1836755](https://bugzil.la/1836755)).
- In der Netzwerküberwachung wird angezeigt, ob die Anfrage mit DNS über HTTPS gelöst wurde ([Firefox Bug 1810195](https://bugzil.la/1810195)).
- `Proxy-Authorization`-Header in der Netzwerküberwachung entfernt ([Firefox Bug 1816115](https://bugzil.la/1816115)).

### HTML

- Das [`dirname`](/de/docs/Web/HTML/Reference/Elements/input#dirname)-Attribut wird jetzt bei den `<input>` und `<textarea>`-Elementen unterstützt.
  Dieses Attribut ermöglicht das Übertragen von Informationen zur Textausrichtung (`ltr` oder `rtl`) an den Server beim Senden eines Formulars ([Firefox Bug 675943](https://bugzil.la/675943)).

### CSS

- Die Syntax für die {{cssxref("offset-path")}}-Eigenschaft wurde aktualisiert, die verwendet wird, um den Pfad zu definieren, auf dem sich ein Element bewegen soll. Die aktualisierte Syntax erlaubt es, einen Wert von `none`, oder einen von `<offset-path>` oder `<coord-box>` festzulegen. Der neue `<offset-path>`-Wert kann ein `<ray()>`, eine `<url>` oder eine `<basic-shape>` sein. Der [`<coord-box>`](/de/docs/Web/CSS/Reference/Values/box-edge)-Wert hat den älteren `<geometry-box>`-Wert ersetzt und ermöglicht es, die Form des Pfades basierend auf dem Boxmodell des Elements zu spezifizieren. Die Werte `<basic-shape>` und `<coord-box>` erfordern, dass die Präferenzen `layout.css.motion-path-basic-shapes.enabled` und `layout.css.motion-path-coord-box.enabled` jeweils aktiviert sind ([Firefox Bug 1598156](https://bugzil.la/1598156) und [Firefox Bug 1837305](https://bugzil.la/1837305)).

### Barrierefreiheit (ARIA)

- Die [`image`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/img_role)-Rolle wird jetzt als Synonym für `img` unterstützt.
  Dies sorgt für Konsistenz mit den meisten Rollennamen, die vollständige Wörter oder Kombinationen vollständiger Wörter sind ([Firefox Bug 1829269](https://bugzil.la/1829269)).

### JavaScript

- [`Intl.NumberFormat`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) unterstützt neue [Konstruktoroptionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat), die kontrollieren, wie Zahlen gerundet werden (`roundingIncrement`, `roundingMode`, `roundingPriority`), die Strategie zur Anzeige von nachgestellten Nullen bei ganzen Zahlen (`trailingZeroDisplay`) und ob zur Darstellung von Tausendern, Millionen usw. Gruppen-Trennzeichen verwendet werden sollen (`useGrouping`).
  Es unterstützt auch neue Methoden [`formatRange()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatRange) und [`formatRangeToParts()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatRangeToParts) zum Formatieren von Zahlenbereichen ([Firefox Bug 1795756](https://bugzil.la/1795756)).
- [`Intl.PluralRules`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules) wurde (als Teil desselben Satzes von Änderungen wie `Intl.NumberFormat`) aktualisiert, um [Konstruktoroptionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/PluralRules) `roundingIncrement`, `roundingMode`, `roundingPriority` und `trailingZeroDisplay` sowie die Methode [`selectRange()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/selectRange) zu unterstützen ([Firefox Bug 1795756](https://bugzil.la/1795756)).

### SVG

- Die `q`-[Längeneinheit](/de/docs/Web/SVG/Guides/Content_type#length) (`1q = 1/40 eines Zentimeters`) wird jetzt unterstützt ([Firefox Bug 1836995](https://bugzil.la/1836995)).

### HTTP

- Die Konfiguration einer [Content-Security-Policy](/de/docs/Web/HTTP/Guides/CSP) unterstützt jetzt das Spezifizieren externer JavaScript-Dateien, die mithilfe von Hashes auf die Whitelist gesetzt werden sollen, während zuvor nur Inline-Skripts mithilfe eines Hashs auf die Whitelist gesetzt werden konnten ([Firefox Bug 1409200](https://bugzil.la/1409200)).

### APIs

#### DOM

- Die Eigenschaften [`TextMetrics.fontBoundingBoxAscent`](/de/docs/Web/API/TextMetrics/fontBoundingBoxAscent) und [`TextMetrics.fontBoundingBoxDescent`](/de/docs/Web/API/TextMetrics/fontBoundingBoxDescent) werden jetzt unterstützt.
  Diese Metriken geben jeweils die Entfernung über und unter der [`CanvasRenderingContext2D.textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline) zur Begrenzungsrechteck aller Schriftarten zurück, die zur Darstellung des Textes verwendet werden ([Firefox Bug 1801198](https://bugzil.la/1801198)).

#### Medien, WebRTC und Web Audio

- Die [Audio Output Devices API](/de/docs/Web/API/Audio_Output_Devices_API) wird jetzt auf allen Plattformen außer Android unterstützt.
  Diese API ermöglicht es Webanwendungen, Audio-Ausgaben an ein zugelassenes Bluetooth-Headset, ein Freisprechgerät oder ein anderes Gerät umzuleiten, anstatt den Browser- oder das zugrunde liegende Betriebssystem-Standard verwenden zu müssen.
  Betroffene APIs umfassen [`MediaDevices.selectAudioOutput()`](/de/docs/Web/API/MediaDevices/selectAudioOutput), [`MediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices), [`HTMLMediaElement.setSinkId()`](/de/docs/Web/API/HTMLMediaElement/setSinkId), [`HTMLMediaElement.sinkId`](/de/docs/Web/API/HTMLMediaElement/sinkId) und die Berechtigungsrichtlinie [`Permissions-Policy: speaker-selection`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/speaker-selection) ([Firefox Bug 1498512](https://bugzil.la/1498512)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Unterstützung für den `session.end`-Befehl hinzugefügt, der es Benutzern ermöglicht, die Automatisierungssitzung zu beenden. Dies war zuvor nur für Sitzungen möglich, die sowohl WebDriver Classic als auch WebDriver BiDi verwendeten. Jetzt ist dies auch für ausschließlich WebDriver BiDi-Sitzungen möglich ([Firefox Bug 1829337](https://bugzil.la/1829337)).
- Unterstützung für [Fähigkeitsabgleich](/de/docs/Web/WebDriver/Reference/Classic/Capabilities) für den `session.new`-Befehl hinzugefügt. Damit können Erwartungen an den Zielbrowser definiert werden, wie z. B. Browsername, Plattformname usw. Es kann auch verwendet werden, um die Sitzung zu konfigurieren, zum Beispiel um festzulegen, ob unsichere Zertifikate akzeptiert werden sollen ([Firefox Bug 1731730](https://bugzil.la/1731730)).
- Schattenwurzeln werden jetzt korrekt serialisiert, wenn sie die Wurzel eines zurückgegebenen Wertes sind ([Firefox Bug 1836514](https://bugzil.la/1836514)).
- Die `network`-Ereignisinformationen zum Zeitursprung wurden von `originTime` in `timeOrigin` umbenannt ([Firefox Bug 1836926](https://bugzil.la/1836926)).
- Das `network`-Ereignis `network.responseCompleted` wird jetzt korrekt für Navigationsanfragen mit Umleitung ausgelöst ([Firefox Bug 1838238](https://bugzil.la/1838238)).

#### Marionette

- Unterstützung für die Fähigkeit `moz:useNonSpecCompliantPointerOrigin` entfernt. Benutzer, die diese Funktion weiterhin benötigen, können die Firefox 115 ESR-Version verwenden, solange sie unterstützt wird. Bitte melden Sie Fehler unter [Remote Protocol :: Marionette](https://bugzilla.mozilla.org/enter_bug.cgi?product=Remote%20Protocol&component=Marionette), wenn Sie Probleme sehen ([Firefox Bug 1490258](https://bugzil.la/1490258)).
- Ein Problem wurde behoben, das es uns verhinderte, veraltete Elemente (DOM-Elemente, die zuvor auf der Seite gesehen wurden) von unbekannten Elementen für einen bestimmten Browsing-Kontext zu unterscheiden ([Firefox Bug 1822466](https://bugzil.la/1822466)).
- Das Erstellen einer neuen Sitzung sollte jetzt ordnungsgemäß auf das Laden des initialen Kontextes warten ([Firefox Bug 1838381](https://bugzil.la/1838381)).

## Änderungen für Add-on-Entwickler

- Die URL einer Seite, die besucht wird, wenn eine Erweiterung deinstalliert wird, bereitgestellt in {{WebExtAPIRef("runtime.setUninstallURL")}}, kann jetzt bis zu 1023 Zeichen lang sein statt 255 ([Firefox Bug 1835723](https://bugzil.la/1835723)).
- Fügt {{WebExtAPIRef("action.getUserSettings")}} und {{WebExtAPIRef("browserAction.getUserSettings")}} hinzu, die die benutzerspezifischen Einstellungen für die Browseraktion einer Erweiterung bereitstellen ([Firefox Bug 1814905](https://bugzil.la/1814905)).
- `autoDiscardable` wird jetzt in {{WebExtAPIRef("tabs.Tab")}}, {{WebExtAPIRef("tabs.onUpdated")}}, {{WebExtAPIRef("tabs.update")}} und {{WebExtAPIRef("tabs.query")}} unterstützt ([Firefox Bug 1809094](https://bugzil.la/1809094)).
