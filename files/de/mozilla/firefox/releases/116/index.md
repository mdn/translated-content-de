---
title: Firefox 116 Versionshinweise für Entwickler
short-title: Firefox 116
slug: Mozilla/Firefox/Releases/116
l10n:
  sourceCommit: 56f3d7018159127dbe92842413fb45d0aa7e8193
---

Dieser Artikel enthält Informationen zu den Änderungen in Firefox 116, die Entwickler betreffen. Firefox 116 wurde am 1. August 2023 veröffentlicht.

## Änderungen für Webentwickler

### Entwickler-Tools

- Unterstützung für [Custom Formatters](https://firefox-source-docs.mozilla.org/devtools-user/custom_formatters/index.html) hinzugefügt ([Firefox-Bug 1752760](https://bugzil.la/1752760)).
- "Container"-Badges in der Markup-Ansicht für Elemente mit einer `container-type`-Eigenschaft mit `size` oder `inline-size` Werten hinzugefügt ([Firefox-Bug 1789193](https://bugzil.la/1789193)).
- Ein Problem im Inspektor behoben, bei dem CSS-Benutzerdefinierte Eigenschaften, die auf dem Custom Element Root festgelegt wurden, nicht angezeigt wurden ([Firefox-Bug 1836755](https://bugzil.la/1836755)).
- Zeigt im Netzwerk-Monitor an, ob Anfragen mit DNS über HTTPS aufgelöst wurden ([Firefox-Bug 1810195](https://bugzil.la/1810195)).
- `Proxy-Authorization`-Header im Netzwerk-Monitor entfernt ([Firefox-Bug 1816115](https://bugzil.la/1816115)).

### HTML

- Das [`dirname`](/de/docs/Web/HTML/Reference/Elements/input#dirname)-Attribut wird nun auf [`input`](/de/docs/Web/HTML/Reference/Elements/input#dirname)- und [`textarea`](/de/docs/Web/HTML/Reference/Elements/textarea#dirname)-Elementen unterstützt.
  Dieses Attribut ermöglicht es, Textausrichtungsinformationen (`ltr` oder `rtl`) während der Formularübermittlung an den Server zu übermitteln ([Firefox-Bug 675943](https://bugzil.la/675943)).

### CSS

- Die Syntax für die {{cssxref("offset-path")}}-Eigenschaft wurde aktualisiert, die verwendet wird, um den Pfad für ein Element zu definieren, dem es folgen soll. Die aktualisierte Syntax erlaubt es, einen Wert von `none` oder einen von `<offset-path>` oder `<coord-box>` festzulegen. Der neue `<offset-path>`-Wert kann ein `<ray()>`, ein `<url>` oder eine `<basic-shape>` sein. Der [`<coord-box>`](/de/docs/Web/CSS/Reference/Values/box-edge) Wert hat den älteren `<geometry-box>` Wert ersetzt und ermöglicht es, die Form des Pfades basierend auf dem Boxmodell des Elements anzugeben. Die `<basic-shape>`- und `<coord-box>`-Werte erfordern, dass die `layout.css.motion-path-basic-shapes.enabled` und `layout.css.motion-path-coord-box.enabled` Präferenzen entsprechend aktiviert sind. ([Firefox-Bug 1598156](https://bugzil.la/1598156)) und ([Firefox-Bug 1837305](https://bugzil.la/1837305)).

### Zugänglichkeit (ARIA)

- Die [`image`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/img_role)-Rolle wird nun als Synonym für `img` unterstützt.
  Dies sorgt für Konsistenz mit den meisten Rollennamen, die vollständige Wörter oder Zusammensetzungen von vollständigen Wörtern sind ([Firefox-Bug 1829269](https://bugzil.la/1829269)).

### JavaScript

- [`Intl.NumberFormat`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) unterstützt neue [Konstruktoroptionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat), die steuern, wie Zahlen gerundet werden (`roundingIncrement`, `roundingMode`, `roundingPriority`), die Strategie für das Anzeigen von nachgestellten Nullen bei ganzen Zahlen (`trailingZeroDisplay`) und ob Gruppierungstrennzeichen für Tausende, Millionen usw. verwendet werden sollen (`useGrouping`).
  Es unterstützt auch neue Methoden [`formatRange()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatRange) und [`formatRangeToParts()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatRangeToParts) zum Formatieren von Zahlenbereichen.
  ([Firefox-Bug 1795756](https://bugzil.la/1795756)).
- [`Intl.PluralRules`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules) wurde aktualisiert (als Teil des gleichen Änderungssatzes wie `Intl.NumberFormat`), um [Konstruktoroptionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/PluralRules) `roundingIncrement`, `roundingMode`, `roundingPriority` und `trailingZeroDisplay` sowie die [`selectRange()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/selectRange)-Methode zu unterstützen.
  ([Firefox-Bug 1795756](https://bugzil.la/1795756)).

### SVG

- Die `q` [Längeneinheit](/de/docs/Web/SVG/Guides/Content_type#length) (`1q = 1/40 eines Zentimeters`) wird jetzt unterstützt ([Firefox-Bug 1836995](https://bugzil.la/1836995)).

### HTTP

- Die Konfiguration einer [Content-Security-Policy](/de/docs/Web/HTTP/Guides/CSP) unterstützt jetzt das Angeben von [externen JavaScript-Dateien, die mithilfe von Hashes auf die Positivliste gesetzt werden können](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src#allowlisting_external_scripts_using_hashes), während zuvor nur Inline-Skripte mithilfe eines Hashes auf die Positivliste gesetzt werden konnten ([Firefox-Bug 1409200](https://bugzil.la/1409200)).

### APIs

#### DOM

- Die Eigenschaften [`TextMetrics.fontBoundingBoxAscent`](/de/docs/Web/API/TextMetrics/fontBoundingBoxAscent) und [`TextMetrics.fontBoundingBoxDescent`](/de/docs/Web/API/TextMetrics/fontBoundingBoxDescent) werden jetzt unterstützt.
  Diese Metriken geben jeweils den Abstand über und unter dem [`CanvasRenderingContext2D.textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline) zum Begrenzungsrechteck aller Schriftarten zurück, die zum Rendern des Textes verwendet werden ([Firefox-Bug 1801198](https://bugzil.la/1801198)).

#### Medien, WebRTC, und Web Audio

- Die [Audio Output Devices API](/de/docs/Web/API/Audio_Output_Devices_API) wird jetzt auf allen Plattformen außer Android unterstützt.
  Diese API ermöglicht es Web-Anwendungen, Audioausgaben auf ein erlaubtes Bluetooth-Headset, eine Freisprecheinrichtung oder ein anderes Gerät umzuleiten, anstatt den Browser oder das zugrunde liegende Betriebssystem-Standard verwenden zu müssen.
  Betroffene APIs umfassen [`MediaDevices.selectAudioOutput()`](/de/docs/Web/API/MediaDevices/selectAudioOutput), [`MediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices), [`HTMLMediaElement.setSinkId()`](/de/docs/Web/API/HTMLMediaElement/setSinkId), [`HTMLMediaElement.sinkId`](/de/docs/Web/API/HTMLMediaElement/sinkId) und die Berechtigungsrichtlinie [`Permissions-Policy: speaker-selection`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/speaker-selection) ([Firefox-Bug 1498512](https://bugzil.la/1498512)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Unterstützung für den `session.end`-Befehl hinzugefügt, der es Benutzern ermöglicht, die Automatisierungssitzung zu beenden. Dies war zuvor nur für Sitzungen möglich, die sowohl WebDriver Classic als auch WebDriver BiDi verwendeten. Jetzt ist es auch für nur WebDriver BiDi-Sitzungen möglich ([Firefox-Bug 1829337](https://bugzil.la/1829337)).
- Unterstützung für [Fähigkeitsanpassung](/de/docs/Web/WebDriver/Reference/Capabilities) für den `session.new`-Befehl hinzugefügt. Damit können Sie Erwartungen an den Zielbrowser definieren, wie Browsername, Plattformname usw. Es kann auch verwendet werden, um die Sitzung zu konfigurieren, z. B. ob unsichere Zertifikate akzeptiert werden sollen ([Firefox-Bug 1731730](https://bugzil.la/1731730)).
- Schattenwurzel werden jetzt korrekt serialisiert, wenn sie die Wurzel eines zurückgegebenen Wertes sind ([Firefox-Bug 1836514](https://bugzil.la/1836514)).
- Informationen zum Zeitursprung des `network`-Ereignisses wurden von `originTime` in `timeOrigin` umbenannt ([Firefox-Bug 1836926](https://bugzil.la/1836926)).
- Das `network`-Ereignis `network.responseCompleted` wird nun korrekt für Navigationsanforderungen mit Umleitung gesendet ([Firefox-Bug 1838238](https://bugzil.la/1838238)).

#### Marionette

- Unterstützung für die `moz:useNonSpecCompliantPointerOrigin`-Fähigkeit entfernt. Benutzer, die diese Funktion noch benötigen, können weiterhin die Firefox 115 ESR-Version verwenden, solange sie unterstützt wird. Bitte melden Sie Fehler unter [Remote Protocol :: Marionette](https://bugzilla.mozilla.org/enter_bug.cgi?product=Remote%20Protocol&component=Marionette), wenn Sie ein Problem feststellen ([Firefox-Bug 1490258](https://bugzil.la/1490258)).
- Ein Regression behoben, die es verhinderte, veraltete Elemente (DOM-Elemente, die zuvor auf der Seite gesehen wurden) von unbekannten Elementen für einen bestimmten Browsing-Kontext zu unterscheiden ([Firefox-Bug 1822466](https://bugzil.la/1822466)).
- Das Erstellen einer neuen Sitzung sollte jetzt korrekt warten, bis der anfängliche Kontext geladen ist ([Firefox-Bug 1838381](https://bugzil.la/1838381)).

## Änderungen für Add-on-Entwickler

- Die URL einer Seite, die beim Deinstallieren einer Erweiterung besucht wird, kann jetzt über {{WebExtAPIRef("runtime.setUninstallURL")}} bis zu 1023 Zeichen lang sein statt 255 ([Firefox-Bug 1835723](https://bugzil.la/1835723)).
- Fügt {{WebExtAPIRef("action.getUserSettings")}} und {{WebExtAPIRef("browserAction.getUserSettings")}} hinzu, die die benutzerspezifischen Einstellungen für die Browseraktion einer Erweiterung bereitstellen ([Firefox-Bug 1814905](https://bugzil.la/1814905)).
- `autoDiscardable` wird jetzt in {{WebExtAPIRef("tabs.Tab")}}, {{WebExtAPIRef("tabs.onUpdated")}}, {{WebExtAPIRef("tabs.update")}} und {{WebExtAPIRef("tabs.query")}} unterstützt ([Firefox-Bug 1809094](https://bugzil.la/1809094)).
