---
title: Firefox 116 Versionshinweise für Entwickler
short-title: Firefox 116
slug: Mozilla/Firefox/Releases/116
l10n:
  sourceCommit: 83f4e64da466670c3700110da364546253eae127
---

Dieser Artikel enthält Informationen über die Änderungen in Firefox 116, die Entwickler betreffen. Firefox 116 wurde am 01. August 2023 veröffentlicht.

## Änderungen für Webentwickler

### Entwickler-Tools

- Unterstützung für [Custom Formatters](https://firefox-source-docs.mozilla.org/devtools-user/custom_formatters/index.html) hinzugefügt ([Firefox Bug 1752760](https://bugzil.la/1752760)).
- "Container"-Badges in der Markup-Ansicht auf Elemente mit einer `container-type`-Eigenschaft und den Werten `size` oder `inline-size` hinzugefügt ([Firefox Bug 1789193](https://bugzil.la/1789193)).
- Ein Problem im Inspektor behoben, bei dem benutzerdefinierte CSS-Eigenschaften, die auf dem Custom Element Root festgelegt wurden, nicht angezeigt wurden ([Firefox Bug 1836755](https://bugzil.la/1836755)).
- Im Netzwerkmonitor wird nun angezeigt, ob eine Anfrage mit DNS über HTTPS aufgelöst wurde ([Firefox Bug 1810195](https://bugzil.la/1810195)).
- Der `Proxy-Authorization`-Header wurde im Netzwerkmonitor entfernt ([Firefox Bug 1816115](https://bugzil.la/1816115)).

### HTML

- Das [`dirname`](/de/docs/Web/HTML/Reference/Elements/input#dirname)-Attribut wird jetzt auf [`input`](/de/docs/Web/HTML/Reference/Elements/input#dirname)- und [`textarea`](/de/docs/Web/HTML/Reference/Elements/textarea#dirname)-Elementen unterstützt.
  Dieses Attribut ermöglicht es, Informationen zur Schreibrichtung (`ltr` oder `rtl`) beim Absenden eines Formulars an den Server zu übermitteln ([Firefox Bug 675943](https://bugzil.la/675943)).

### CSS

- Die Syntax für die {{cssxref("offset-path")}}-Eigenschaft wurde aktualisiert, die verwendet wird, um den Pfad zu definieren, dem ein Element folgen soll. Die aktualisierte Syntax ermöglicht es Ihnen, einen Wert von `none` oder einen der Werte `<offset-path>` oder `<coord-box>` festzulegen. Der neue `<offset-path>`-Wert kann ein `<ray()>`, eine `<url>` oder eine `<basic-shape>` sein. Der [`<coord-box>`](/de/docs/Web/CSS/Reference/Values/box-edge)-Wert hat den älteren `<geometry-box>`-Wert ersetzt und ermöglicht es Ihnen, die Form des Pfades basierend auf dem Boxmodell des Elements zu spezifizieren. Die `<basic-shape>`- und `<coord-box>`-Werte erfordern die Aktivierung der `layout.css.motion-path-basic-shapes.enabled`- und `layout.css.motion-path-coord-box.enabled`-Einstellungen ([Firefox Bug 1598156](https://bugzil.la/1598156) und [Firefox Bug 1837305](https://bugzil.la/1837305)).

### Barrierefreiheit (ARIA)

- Die [`image`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/img_role)-Rolle wird jetzt als Synonym für `img` unterstützt.
  Dies sorgt für Konsistenz mit den meisten Rollennamen, die vollständige Wörter oder Kombinationen aus vollständigen Wörtern sind ([Firefox Bug 1829269](https://bugzil.la/1829269)).

### JavaScript

- [`Intl.NumberFormat`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) unterstützt neue [Konstruktoroptionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat), die steuern, wie Zahlen gerundet werden (`roundingIncrement`, `roundingMode`, `roundingPriority`), die Strategie zur Anzeige von nachgestellten Nullen bei ganzen Zahlen (`trailingZeroDisplay`) und ob Gruppierungszeichen zur Angabe von Tausenden, Millionen usw. verwendet werden (`useGrouping`).
  Es unterstützt auch neue Methoden [`formatRange()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatRange) und [`formatRangeToParts()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatRangeToParts) zur Formatierung von Zahlenbereichen.
  ([Firefox Bug 1795756](https://bugzil.la/1795756)).
- [`Intl.PluralRules`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules) wurde (als Teil desselben Änderungssets wie `Intl.NumberFormat`) aktualisiert, um [Konstruktoroptionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/PluralRules) `roundingIncrement`, `roundingMode`, `roundingPriority` und `trailingZeroDisplay` sowie die Methode [`selectRange()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/selectRange) zu unterstützen.
  ([Firefox Bug 1795756](https://bugzil.la/1795756)).

### SVG

- Die `q` [Längeneinheit](/de/docs/Web/SVG/Guides/Content_type#length) (`1q = 1/40 eines 1 cm`) wird jetzt unterstützt ([Firefox Bug 1836995](https://bugzil.la/1836995)).

### HTTP

- Das Konfigurieren einer [Content-Security-Policy](/de/docs/Web/HTTP/Guides/CSP) unterstützt jetzt die Spezifizierung von [externen JavaScript-Dateien, die durch Hashes auf die Whitelist gesetzt werden dürfen](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src#allowlisting_external_scripts_using_hashes), während zuvor nur Inline-Skripte mit einem Hash auf die Whitelist gesetzt werden konnten ([Firefox Bug 1409200](https://bugzil.la/1409200)).

### APIs

#### DOM

- Die [`TextMetrics.fontBoundingBoxAscent`](/de/docs/Web/API/TextMetrics/fontBoundingBoxAscent)- und [`TextMetrics.fontBoundingBoxDescent`](/de/docs/Web/API/TextMetrics/fontBoundingBoxDescent)-Eigenschaften werden jetzt unterstützt.
  Diese Metriken geben jeweils den Abstand über und unter der [`CanvasRenderingContext2D.textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline) bis zum Begrenzungsrechteck aller Schriftarten zurück, die zum Rendern des Textes verwendet werden ([Firefox Bug 1801198](https://bugzil.la/1801198)).

#### Medien, WebRTC und Web Audio

- Die [Audio Output Devices API](/de/docs/Web/API/Audio_Output_Devices_API) wird jetzt auf allen Plattformen außer Android unterstützt.
  Diese API ermöglicht es Webanwendungen, die Audioausgabe zu einem erlaubten Bluetooth-Headset, Freisprecheinrichtung oder einem anderen Gerät umzuleiten, anstatt den Browser oder das zugrunde liegende Betriebssystem-Standard verwenden zu müssen.
  Betroffene APIs umfassen [`MediaDevices.selectAudioOutput()`](/de/docs/Web/API/MediaDevices/selectAudioOutput), [`MediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices), [`HTMLMediaElement.setSinkId()`](/de/docs/Web/API/HTMLMediaElement/setSinkId), [`HTMLMediaElement.sinkId`](/de/docs/Web/API/HTMLMediaElement/sinkId) und die Berechtigungsrichtlinie [`Permissions-Policy: speaker-selection`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/speaker-selection) ([Firefox Bug 1498512](https://bugzil.la/1498512)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Unterstützung für den `session.end`-Befehl hinzugefügt, der es Nutzern ermöglicht, die Automatisierungssitzung zu beenden. Dies war zuvor nur für Sitzungen möglich, die sowohl WebDriver Classic als auch WebDriver BiDi verwendeten. Jetzt ist es auch für Sitzungen möglich, die nur WebDriver BiDi verwenden ([Firefox Bug 1829337](https://bugzil.la/1829337)).
- Unterstützung für [Capability Matching](/de/docs/Web/WebDriver/Reference/Capabilities) für den `session.new`-Befehl hinzugefügt. Damit können Erwartungen über den Ziel-Browser definiert werden, wie z. B. Browser-Name, Plattform-Name usw. Es kann auch verwendet werden, um die Sitzung zu konfigurieren, z. B. um festzulegen, ob unsichere Zertifikate akzeptiert werden sollen ([Firefox Bug 1731730](https://bugzil.la/1731730)).
- Shadow-Roots werden jetzt korrekt serialisiert, wenn sie der Wurzel eines zurückgegebenen Wertes sind ([Firefox Bug 1836514](https://bugzil.la/1836514)).
- Die `network`-Ereigniszeitursprungsinformation wurde von `originTime` in `timeOrigin` umbenannt ([Firefox Bug 1836926](https://bugzil.la/1836926)).
- Das `network`-Ereignis `network.responseCompleted` wird jetzt korrekt für Navigationsanfragen ausgegeben, die eine Umleitung beinhalten ([Firefox Bug 1838238](https://bugzil.la/1838238)).

#### Marionette

- Die Unterstützung für die `moz:useNonSpecCompliantPointerOrigin`-Fähigkeit wurde entfernt. Benutzer, die diese Funktion noch benötigen, können den Firefox 115 ESR-Release verwenden, solange er unterstützt wird. Bitte reichen Sie Fehler unter [Remote Protocol :: Marionette](https://bugzilla.mozilla.org/enter_bug.cgi?product=Remote%20Protocol&component=Marionette) ein, wenn Sie Probleme feststellen ([Firefox Bug 1490258](https://bugzil.la/1490258)).
- Ein Rückschritt wurde behoben, der verhinderte, dass wir zwischen nicht mehr vorhandenen Elementen (DOM-Elementen, die zuvor auf der Seite gesehen wurden) und unbekannten Elementen für einen gegebenen Browsing-Kontext unterscheiden konnten ([Firefox Bug 1822466](https://bugzil.la/1822466)).
- Beim Erstellen einer neuen Sitzung wird nun korrekt gewartet, bis der anfängliche Kontext geladen ist ([Firefox Bug 1838381](https://bugzil.la/1838381)).

## Änderungen für Add-on-Entwickler

- Die URL einer Seite, die beim Deinstallieren einer Erweiterung besucht wird, bereitgestellt über {{WebExtAPIRef("runtime.setUninstallURL")}}, kann jetzt bis zu 1023 Zeichen lang sein, anstatt 255 ([Firefox Bug 1835723](https://bugzil.la/1835723)).
- Es wurden {{WebExtAPIRef("action.getUserSettings")}} und {{WebExtAPIRef("browserAction.getUserSettings")}} hinzugefügt, die die vom Benutzer angegebenen Einstellungen für die Browseraktion einer Erweiterung bereitstellen ([Firefox Bug 1814905](https://bugzil.la/1814905)).
- `autoDiscardable` wird jetzt unterstützt in {{WebExtAPIRef("tabs.Tab")}}, {{WebExtAPIRef("tabs.onUpdated")}}, {{WebExtAPIRef("tabs.update")}} und {{WebExtAPIRef("tabs.query")}} ([Firefox Bug 1809094](https://bugzil.la/1809094)).
