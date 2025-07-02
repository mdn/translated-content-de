---
title: Firefox 116 für Entwickler
slug: Mozilla/Firefox/Releases/116
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 116, die Entwickler betreffen. Firefox 116 wurde am 01. August 2023 veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das [`dirname`](/de/docs/Web/HTML/Reference/Elements/input#dirname) Attribut wird jetzt für [`input`](/de/docs/Web/HTML/Reference/Elements/input#dirname) und [`textarea`](/de/docs/Web/HTML/Reference/Elements/textarea#dirname) Elemente unterstützt.
  Dieses Attribut ermöglicht es, Informationen zur Textausrichtung (`ltr` oder `rtl`) während der Formularübermittlung an den Server zu senden ([Firefox Bug 675943](https://bugzil.la/675943)).

### CSS

- Die Syntax für die {{cssxref("offset-path")}} Eigenschaft, die verwendet wird, um den Pfad für ein Element zu definieren, wurde aktualisiert. Die aktualisierte Syntax ermöglicht es Ihnen, einen Wert von `none` oder einen von `<offset-path>` oder `<coord-box>` festzulegen. Der neue `<offset-path>` Wert kann ein `<ray()>`, eine `<url>` oder eine `<basic-shape>` sein. Der [`<coord-box>`](/de/docs/Web/CSS/box-edge) Wert hat den älteren `<geometry-box>` Wert ersetzt und ermöglicht es Ihnen, die Form des Pfades basierend auf dem Boxmodell des Elements anzugeben. Die Werte `<basic-shape>` und `<coord-box>` erfordern, dass die `layout.css.motion-path-basic-shapes.enabled` und `layout.css.motion-path-coord-box.enabled` Präferenzen aktiviert sind ([Firefox Bug 1598156](https://bugzil.la/1598156)) und ([Firefox Bug 1837305](https://bugzil.la/1837305)).

### Barrierefreiheit (ARIA)

- Die [`image`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/img_role) Rolle wird jetzt als Synonym für `img` unterstützt.
  Dies sorgt für Konsistenz mit den meisten Rollennamen, die ganze Wörter oder Zusammensetzungen von ganzen Wörtern sind ([Firefox Bug 1829269](https://bugzil.la/1829269)).

### JavaScript

- [`Intl.NumberFormat`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) unterstützt neue [Konstruktoroptionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat), die steuern, wie Zahlen gerundet werden (`roundingIncrement`, `roundingMode`, `roundingPriority`), die Strategie für die Anzeige von nachgestellten Nullen bei ganzen Zahlen (`trailingZeroDisplay`) und ob Gruppierungszeichen verwendet werden sollen, um Tausender, Millionen usw. anzuzeigen (`useGrouping`).
  Es unterstützt auch neue Methoden [`formatRange()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatRange) und [`formatRangeToParts()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatRangeToParts) zum Formatieren von Zahlenbereichen.
  ([Firefox Bug 1795756](https://bugzil.la/1795756)).
- [`Intl.PluralRules`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules) wurde aktualisiert (als Teil desselben Änderungssatzes wie `Intl.NumberFormat`), um [Konstruktoroptionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/PluralRules) `roundingIncrement`, `roundingMode`, `roundingPriority` und `trailingZeroDisplay` sowie die Methode [`selectRange()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/selectRange) zu unterstützen.
  ([Firefox Bug 1795756](https://bugzil.la/1795756)).

### SVG

- Die `q` [Längeneinheit](/de/docs/Web/SVG/Guides/Content_type#length) (`1q = 1/40 eines 1cm`) wird jetzt unterstützt ([Firefox Bug 1836995](https://bugzil.la/1836995)).

### HTTP

- Die Konfiguration einer [Content-Security-Policy](/de/docs/Web/HTTP/Guides/CSP) unterstützt jetzt die Angabe von [externen JavaScript-Dateien, die mit Hashes auf die Whitelist gesetzt werden sollen](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src#allowlisting_external_scripts_using_hashes), wo zuvor nur Inline-Skripte mit einem Hash auf die Whitelist gesetzt werden konnten ([Firefox Bug 1409200](https://bugzil.la/1409200)).

### APIs

#### DOM

- Die [`TextMetrics.fontBoundingBoxAscent`](/de/docs/Web/API/TextMetrics/fontBoundingBoxAscent) und [`TextMetrics.fontBoundingBoxDescent`](/de/docs/Web/API/TextMetrics/fontBoundingBoxDescent) Eigenschaften werden jetzt unterstützt.
  Diese Metriken geben jeweils den Abstand über und unter dem [`CanvasRenderingContext2D.textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline) an, zu dem Begrenzungsrechteck aller Schriftarten, die verwendet werden, um den Text darzustellen ([Firefox Bug 1801198](https://bugzil.la/1801198)).

#### Medien, WebRTC und Web Audio

- Die [Audio Output Devices API](/de/docs/Web/API/Audio_Output_Devices_API) wird jetzt auf allen Plattformen außer Android unterstützt.
  Diese API ermöglicht es Webanwendungen, die Audioausgabe an ein zugelassenes Bluetooth-Headset, Lautsprechertelefon oder ein anderes Gerät umzuleiten, anstatt den Browser oder das zugrunde liegende Betriebssystemstandard verwenden zu müssen.
  Betroffene APIs sind: [`MediaDevices.selectAudioOutput()`](/de/docs/Web/API/MediaDevices/selectAudioOutput), [`MediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices), [`HTMLMediaElement.setSinkId()`](/de/docs/Web/API/HTMLMediaElement/setSinkId), [`HTMLMediaElement.sinkId`](/de/docs/Web/API/HTMLMediaElement/sinkId) und die Berechtigungsrichtlinie [`Permissions-Policy: speaker-selection`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/speaker-selection) ([Firefox Bug 1498512](https://bugzil.la/1498512)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Unterstützung für das `session.end` Kommando hinzugefügt, das es Benutzern ermöglicht, die Automatisierungssitzung zu beenden. Dies war zuvor nur für Sitzungen möglich, die sowohl WebDriver Classic als auch WebDriver BiDi verwendeten. Es ist jetzt auch für WebDriver BiDi-only Sitzungen möglich ([Firefox Bug 1829337](https://bugzil.la/1829337)).
- Unterstützung für [Capability Matching](/de/docs/Web/WebDriver/Reference/Capabilities) für das `session.new` Kommando hinzugefügt. Es ermöglicht es, Erwartungen über den Zielbrowser zu definieren, wie z.B. den Namen des Browsers, den Namen der Plattform usw. Es kann auch verwendet werden, um die Sitzung zu konfigurieren, z.B. um anzugeben, ob unsichere Zertifikate akzeptiert werden sollen ([Firefox Bug 1731730](https://bugzil.la/1731730)).
- Schattenwurzeln werden jetzt korrekt serialisiert, wenn sie die Wurzel eines zurückgegebenen Werts sind ([Firefox Bug 1836514](https://bugzil.la/1836514)).
- Die Zeitursprungsinformationen des `network` Ereignisses wurden von `originTime` in `timeOrigin` umbenannt ([Firefox Bug 1836926](https://bugzil.la/1836926)).
- Das `network` Ereignis `network.responseCompleted` wird nun korrekt für Navigationsanfragen mit einer Weiterleitung ausgelöst ([Firefox Bug 1838238](https://bugzil.la/1838238)).

#### Marionette

- Unterstützung für die `moz:useNonSpecCompliantPointerOrigin` Fähigkeit entfernt. Benutzer, die diese Funktion weiterhin benötigen, können weiterhin die Firefox 115 ESR Version verwenden, solange diese unterstützt wird. Bitte melden Sie Fehler unter [Remote Protocol :: Marionette](https://bugzilla.mozilla.org/enter_bug.cgi?product=Remote%20Protocol&component=Marionette), wenn Sie ein Problem feststellen ([Firefox Bug 1490258](https://bugzil.la/1490258)).
- Ein Regression, die uns daran hindert, veraltete Elemente (DOM-Elemente, die vorher auf der Seite gesehen wurden) von unbekannten Elementen in einem bestimmten Browsing-Kontext zu unterscheiden, wurde behoben ([Firefox Bug 1822466](https://bugzil.la/1822466)).
- Eine neue Sitzung sollte jetzt ordnungsgemäß warten, bis der anfängliche Kontext geladen ist ([Firefox Bug 1838381](https://bugzil.la/1838381)).

## Änderungen für Erweiterungsentwickler

- Die URL einer Seite, die beim Deinstallieren einer Erweiterung besucht wird, bereitgestellt in {{WebExtAPIRef("runtime.setUninstallURL")}}, kann jetzt bis zu 1023 Zeichen anstelle von 255 haben ([Firefox Bug 1835723](https://bugzil.la/1835723)).
- Fügt {{WebExtAPIRef("action.getUserSettings")}} und {{WebExtAPIRef("browserAction.getUserSettings")}} hinzu, die die vom Benutzer festgelegten Einstellungen für eine Browseraktion der Erweiterung bereitstellen ([Firefox Bug 1814905](https://bugzil.la/1814905)).
- `autoDiscardable` wird jetzt in {{WebExtAPIRef("tabs.Tab")}}, {{WebExtAPIRef("tabs.onUpdated")}}, {{WebExtAPIRef("tabs.update")}}, und {{WebExtAPIRef("tabs.query")}} unterstützt ([Firefox Bug 1809094](https://bugzil.la/1809094)).

## Entwickler-Tools

- Unterstützung für [Custom Formatters](https://firefox-source-docs.mozilla.org/devtools-user/custom_formatters/index.html) hinzugefügt ([Firefox Bug 1752760](https://bugzil.la/1752760)).
- "Container"-Abzeichen in der Markup-Ansicht für Elemente mit einer `container-type` Eigenschaft mit den Werten `size` oder `inline-size` hinzugefügt ([Firefox Bug 1789193](https://bugzil.la/1789193)).
- Ein Problem im Inspektor behoben, bei dem benutzerdefinierte CSS-Eigenschaften, die auf dem benutzerdefinierten Elementstamm gesetzt waren, nicht angezeigt wurden ([Firefox Bug 1836755](https://bugzil.la/1836755)).
- Anzeigen, ob die Anforderung mit DNS über HTTPS im Netzwerkmonitor aufgelöst wurde ([Firefox Bug 1810195](https://bugzil.la/1810195)).
- `Proxy-Authorization` Header im Netzwerkmonitor entfernt ([Firefox Bug 1816115](https://bugzil.la/1816115)).

## Ältere Versionen

{{Firefox_for_developers}}
