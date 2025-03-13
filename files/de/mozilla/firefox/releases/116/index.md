---
title: Firefox 116 für Entwickler
slug: Mozilla/Firefox/Releases/116
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 116, die Entwickler betreffen. Firefox 116 wurde am 01. August 2023 veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das [`dirname`](/de/docs/Web/HTML/Element/input#dirname) Attribut wird jetzt auf den [`input`](/de/docs/Web/HTML/Element/input#dirname) und [`textarea`](/de/docs/Web/HTML/Element/textarea#dirname) Elementen unterstützt.
  Dieses Attribut ermöglicht es, beim Absenden eines Formulars die Textausrichtungsinformationen (`ltr` oder `rtl`) an den Server zu übergeben ([Firefox Bug 675943](https://bugzil.la/675943)).

### CSS

- Die Syntax für die {{cssxref("offset-path")}} Eigenschaft, die verwendet wird, um den Pfad zu definieren, dem ein Element folgen soll, wurde aktualisiert. Die aktualisierte Syntax ermöglicht es, einen Wert von `none` oder einen von `<offset-path>` oder `<coord-box>` festzulegen. Der neue `<offset-path>` Wert kann ein `<ray()>`, eine `<url>` oder eine `<basic-shape>` sein. Der [`<coord-box>`](/de/docs/Web/CSS/box-edge) Wert hat den älteren `<geometry-box>` Wert ersetzt und ermöglicht es, die Form des Pfads basierend auf dem Boxmodell des Elements festzulegen. Die Werte `<basic-shape>` und `<coord-box>` erfordern, dass die Präferenzen `layout.css.motion-path-basic-shapes.enabled` bzw. `layout.css.motion-path-coord-box.enabled` aktiviert sind. ([Firefox Bug 1598156](https://bugzil.la/1598156)) und ([Firefox Bug 1837305](https://bugzil.la/1837305)).

### Barrierefreiheit (ARIA)

- Die [`image`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/img_role) Rolle wird nun als Synonym für `img` unterstützt.
  Dies sorgt für Konsistenz mit den meisten Rollennamen, die vollständige Wörter oder Zusammenfügungen von vollständigen Wörtern sind ([Firefox Bug 1829269](https://bugzil.la/1829269)).

### JavaScript

- [`Intl.NumberFormat`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) unterstützt neue [Konstruktoroptionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat), die kontrollieren, wie Zahlen gerundet werden (`roundingIncrement`, `roundingMode`, `roundingPriority`), die Strategie für die Anzeige von nachgestellten Nullen bei ganzen Zahlen (`trailingZeroDisplay`) und ob Gruppierungszeichen verwendet werden, um Tausender, Millionen usw. anzuzeigen (`useGrouping`).
  Es unterstützt auch neue Methoden [`formatRange()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatRange) und [`formatRangeToParts()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatRangeToParts) zur Formatierung von Zahlenbereichen.
  ([Firefox Bug 1795756](https://bugzil.la/1795756)).
- [`Intl.PluralRules`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules) wurde aktualisiert (im Rahmen des gleichen Satzes von Änderungen wie `Intl.NumberFormat`), um [Konstruktoroptionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/PluralRules) `roundingIncrement`, `roundingMode`, `roundingPriority` und `trailingZeroDisplay` sowie die [`selectRange()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/selectRange) Methode zu unterstützen.
  ([Firefox Bug 1795756](https://bugzil.la/1795756)).

### SVG

- Die `q` [Längeneinheit](/de/docs/Web/SVG/Content_type#length) (`1q = 1/40 eines 1cm`) wird jetzt unterstützt ([Firefox Bug 1836995](https://bugzil.la/1836995)).

### HTTP

- Beim Konfigurieren einer [Content-Security-Policy](/de/docs/Web/HTTP/Guides/CSP) ist es jetzt möglich, [externe JavaScript-Dateien mit Hashes auf die Erlaubnisliste zu setzen](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src#allowlisting_external_scripts_using_hashes), wo zuvor nur eingebettete Skripte mit einem Hash auf die Erlaubnisliste gesetzt werden konnten ([Firefox Bug 1409200](https://bugzil.la/1409200)).

### APIs

#### DOM

- Die [`TextMetrics.fontBoundingBoxAscent`](/de/docs/Web/API/TextMetrics/fontBoundingBoxAscent) und [`TextMetrics.fontBoundingBoxDescent`](/de/docs/Web/API/TextMetrics/fontBoundingBoxDescent) Eigenschaften werden jetzt unterstützt.
  Diese Metriken geben jeweils den Abstand über und unter dem [`CanvasRenderingContext2D.textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline) bis zum Begrenzungsrechteck aller Schriftarten zurück, die zum Rendern des Textes verwendet werden ([Firefox Bug 1801198](https://bugzil.la/1801198)).

#### Medien, WebRTC und Web Audio

- Die [Audio Output Devices API](/de/docs/Web/API/Audio_Output_Devices_API) wird jetzt auf allen Plattformen außer Android unterstützt.
  Diese API ermöglicht es Webanwendungen, Audioausgaben an ein zugelassenes Bluetooth-Headset, einen Lautsprecher oder ein anderes Gerät umzuleiten, anstatt den Browser oder das zugrunde liegende Betriebssystem-Standardgerät verwenden zu müssen.
  Betroffene APIs umfassen [`MediaDevices.selectAudioOutput()`](/de/docs/Web/API/MediaDevices/selectAudioOutput), [`MediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices), [`HTMLMediaElement.setSinkId()`](/de/docs/Web/API/HTMLMediaElement/setSinkId), [`HTMLMediaElement.sinkId`](/de/docs/Web/API/HTMLMediaElement/sinkId) und die Berechtigungsrichtlinie [`Permissions-Policy: speaker-selection`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/speaker-selection) ([Firefox Bug 1498512](https://bugzil.la/1498512)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Unterstützung für den Befehl `session.end` hinzugefügt, der es Benutzern ermöglicht, die Automatisierungssitzung zu beenden. Dies war bisher nur für Sitzungen möglich, die sowohl WebDriver Classic als auch WebDriver BiDi verwenden. Es ist jetzt auch für WebDriver BiDi-Only-Sitzungen möglich ([Firefox Bug 1829337](https://bugzil.la/1829337)).
- Unterstützung für [Fähigkeitsanpassung](/de/docs/Web/WebDriver/Reference/Capabilities) für den Befehl `session.new` hinzugefügt. Es ermöglicht die Definition von Erwartungen über den Zielbrowser, wie Browsername, Plattformname usw. Es kann auch verwendet werden, um die Sitzung zu konfigurieren, z. B. um anzugeben, ob unsichere Zertifikate akzeptiert werden sollen ([Firefox Bug 1731730](https://bugzil.la/1731730)).
- Shadow-Wurzeln werden jetzt korrekt serialisiert, wenn sie die Wurzel eines zurückgegebenen Wertes sind ([Firefox Bug 1836514](https://bugzil.la/1836514)).
- Die `network` Ereignis-Zeitursprungsinformationen wurden von `originTime` in `timeOrigin` umbenannt ([Firefox Bug 1836926](https://bugzil.la/1836926)).
- Das `network` Ereignis `network.responseCompleted` wird jetzt korrekt für Navigationsanforderungen mit einer Weiterleitung ausgelöst ([Firefox Bug 1838238](https://bugzil.la/1838238)).

#### Marionette

- Die Unterstützung für die Fähigkeit `moz:useNonSpecCompliantPointerOrigin` wurde entfernt. Benutzer, die diese Funktion noch benötigen, können immer noch die Firefox 115 ESR-Version verwenden, solange sie unterstützt wird. Bitte melden Sie Fehler unter [Remote Protocol :: Marionette](https://bugzilla.mozilla.org/enter_bug.cgi?product=Remote%20Protocol&component=Marionette), wenn Sie Probleme sehen ([Firefox Bug 1490258](https://bugzil.la/1490258)).
- Ein Rückschritt wurde behoben, der es verhinderte, veraltete Elemente (DOM-Elemente, die zuvor auf der Seite gesehen wurden) von unbekannten Elementen für einen bestimmten Browsing-Kontext zu unterscheiden ([Firefox Bug 1822466](https://bugzil.la/1822466)).
- Das Erstellen einer neuen Sitzung sollte jetzt ordnungsgemäß darauf warten, dass der initiale Kontext geladen wird ([Firefox Bug 1838381](https://bugzil.la/1838381)).

## Änderungen für Add-on-Entwickler

- Die URL einer Seite, die besucht wird, wenn eine Erweiterung deinstalliert wird, die in {{WebExtAPIRef("runtime.setUninstallURL")}} angegeben wird, kann jetzt bis zu 1023 Zeichen lang sein, anstatt 255 ([Firefox Bug 1835723](https://bugzil.la/1835723)).
- Fügt {{WebExtAPIRef("action.getUserSettings")}} und {{WebExtAPIRef("browserAction.getUserSettings")}} hinzu, die die benutzerspezifischen Einstellungen für die Browseraktion einer Erweiterung bereitstellen ([Firefox Bug 1814905](https://bugzil.la/1814905)).
- `autoDiscardable` wird jetzt in {{WebExtAPIRef("tabs.Tab")}}, {{WebExtAPIRef("tabs.onUpdated")}}, {{WebExtAPIRef("tabs.update")}} und {{WebExtAPIRef("tabs.query")}} unterstützt ([Firefox Bug 1809094](https://bugzil.la/1809094)).

## Entwicklertools

- Unterstützung für [Custom Formatters](https://firefox-source-docs.mozilla.org/devtools-user/custom_formatters/index.html) hinzugefügt ([Firefox Bug 1752760](https://bugzil.la/1752760)).
- "Container"-Plaketten in der Markup-Ansicht auf Elementen mit einer `container-type` Eigenschaft mit `size` oder `inline-size` Werten hinzugefügt ([Firefox Bug 1789193](https://bugzil.la/1789193)).
- Ein Problem im Inspektor behoben, bei dem benutzerdefinierte CSS-Eigenschaften, die im Custom Element Root gesetzt wurden, nicht angezeigt wurden ([Firefox Bug 1836755](https://bugzil.la/1836755)).
- Zeigt im Netzwerkmonitor an, ob die Anfrage mit DNS über HTTPS aufgelöst wurde ([Firefox Bug 1810195](https://bugzil.la/1810195)).
- `Proxy-Authorization` Header im Netzwerkmonitor entfernt ([Firefox Bug 1816115](https://bugzil.la/1816115)).

## Ältere Versionen

{{Firefox_for_developers}}
