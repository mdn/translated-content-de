---
title: Firefox 116 für Entwickler
slug: Mozilla/Firefox/Releases/116
l10n:
  sourceCommit: 57b855a52a2d2e8914a30e3a47567bff0806ae23
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 116, die Entwickler betreffen. Firefox 116 wurde am 01. August 2023 veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das [`dirname`](/de/docs/Web/HTML/Element/input#dirname) Attribut wird jetzt auf [`input`](/de/docs/Web/HTML/Element/input#dirname) und [`textarea`](/de/docs/Web/HTML/Element/textarea#dirname) Elementen unterstützt.
  Dieses Attribut ermöglicht es, Informationen zur Textrichtung (`ltr` oder `rtl`) bei der Formularübermittlung an den Server zu übermitteln ([Firefox Bug 675943](https://bugzil.la/675943)).

### CSS

- Die Syntax für die {{cssxref("offset-path")}} Eigenschaft, die verwendet wird, um den Pfad zu definieren, den ein Element folgen soll, wurde aktualisiert. Die aktualisierte Syntax erlaubt es, einen Wert von `none` oder einen von `<offset-path>` oder `<coord-box>` festzulegen. Der neue `<offset-path>` Wert kann ein `<ray()>`, eine `<url>` oder eine `<basic-shape>` sein. Der [`<coord-box>`](/de/docs/Web/CSS/box-edge) Wert hat den älteren `<geometry-box>` Wert ersetzt und ermöglicht es, die Form des Pfades basierend auf dem Boxmodell des Elements zu spezifizieren. Die `<basic-shape>` und `<coord-box>` Werte erfordern, dass die Einstellungen `layout.css.motion-path-basic-shapes.enabled` und `layout.css.motion-path-coord-box.enabled` aktiviert sind, jeweils. ([Firefox Bug 1598156](https://bugzil.la/1598156)) und ([Firefox Bug 1837305](https://bugzil.la/1837305)).

### Barrierefreiheit (ARIA)

- Die [`image`](/de/docs/Web/Accessibility/ARIA/Roles/img_role) Rolle wird jetzt als Synonym für `img` unterstützt.
  Dies sorgt für Konsistenz mit den meisten Rollennamen, die vollständige Wörter oder Verkettungen vollständiger Wörter sind ([Firefox Bug 1829269](https://bugzil.la/1829269)).

### JavaScript

- [`Intl.NumberFormat`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) unterstützt neue [Konstrukturoptionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat), die steuern, wie Zahlen gerundet werden (`roundingIncrement`, `roundingMode`, `roundingPriority`), die Strategie zum Anzeigen von nachfolgenden Nullen bei ganzen Zahlen (`trailingZeroDisplay`) und ob Gruppierungstrennzeichen zur Anzeige von Tausendern, Millionen usw. verwendet werden (`useGrouping`).
  Ebenso werden neue Methoden [`formatRange()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatRange) und [`formatRangeToParts()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatRangeToParts) zum Formatieren von Zahlenbereichen unterstützt.
  ([Firefox Bug 1795756](https://bugzil.la/1795756)).
- [`Intl.PluralRules`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules) wurde aktualisiert (als Teil derselben Änderungen wie `Intl.NumberFormat`), um [Konstrukturoptionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/PluralRules) `roundingIncrement`, `roundingMode`, `roundingPriority` und `trailingZeroDisplay` sowie die Methode [`selectRange()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/selectRange) zu unterstützen.
  ([Firefox Bug 1795756](https://bugzil.la/1795756)).

### SVG

- Die `q` [Längeneinheit](/de/docs/Web/SVG/Content_type#length) (`1q = 1/40 eines 1cm`) wird jetzt unterstützt ([Firefox Bug 1836995](https://bugzil.la/1836995)).

### HTTP

- Die Konfiguration einer [Content-Security-Policy](/de/docs/Web/HTTP/CSP) unterstützt jetzt das Spezifizieren [externer JavaScript-Dateien, die mittels Hashes auf die Positivliste gesetzt werden sollen](/de/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#allowlisting_external_scripts_using_hashes), wo vorher nur Inline-Skripte mittels eines Hashes auf die Positivliste gesetzt werden konnten ([Firefox Bug 1409200](https://bugzil.la/1409200)).

### APIs

#### DOM

- Die [`TextMetrics.fontBoundingBoxAscent`](/de/docs/Web/API/TextMetrics/fontBoundingBoxAscent) und [`TextMetrics.fontBoundingBoxDescent`](/de/docs/Web/API/TextMetrics/fontBoundingBoxDescent) Eigenschaften werden jetzt unterstützt.
  Diese Metriken geben jeweils den Abstand über und unter der [`CanvasRenderingContext2D.textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline) zum Begrenzungsrechteck aller Schriften zurück, die verwendet werden, um den Text darzustellen ([Firefox Bug 1801198](https://bugzil.la/1801198)).

#### Medien, WebRTC und Web Audio

- Die [Audio Output Devices API](/de/docs/Web/API/Audio_Output_Devices_API) wird jetzt auf allen Plattformen außer Android unterstützt.
  Diese API ermöglicht es Webanwendungen, die Audioausgabe auf ein zugelassenes Bluetooth-Headset, eine Freisprecheinrichtung oder ein anderes Gerät umzuleiten, anstatt den Browser oder das zugrunde liegende Betriebssystem standardmäßig verwenden zu müssen.
  Betroffene APIs sind [`MediaDevices.selectAudioOutput()`](/de/docs/Web/API/MediaDevices/selectAudioOutput), [`MediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices), [`HTMLMediaElement.setSinkId()`](/de/docs/Web/API/HTMLMediaElement/setSinkId), [`HTMLMediaElement.sinkId`](/de/docs/Web/API/HTMLMediaElement/sinkId), und die Berechtigungsrichtlinie [`Permissions-Policy: speaker-selection`](/de/docs/Web/HTTP/Headers/Permissions-Policy/speaker-selection) ([Firefox Bug 1498512](https://bugzil.la/1498512)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Unterstützung für den `session.end` Befehl hinzugefügt, der es Benutzern erlaubt, die Automatisierungssitzung zu beenden. Dies war zuvor nur für Sitzungen möglich, die sowohl WebDriver Classic als auch WebDriver BiDi verwenden. Jetzt ist es auch für Sitzungen nur mit WebDriver BiDi möglich ([Firefox Bug 1829337](https://bugzil.la/1829337)).
- Unterstützung für [Fähigkeitsabgleich](/de/docs/Web/WebDriver/Reference/Capabilities) für den `session.new` Befehl hinzugefügt. Es erlaubt das Festlegen von Erwartungen an den Zielbrowser, wie Browsername, Plattformname usw. Es kann auch verwendet werden, um die Sitzung zu konfigurieren, beispielsweise um anzugeben, ob unsichere Zertifikate akzeptiert werden sollen ([Firefox Bug 1731730](https://bugzil.la/1731730)).
- Schattenwurzeln werden jetzt korrekt serialisiert, wenn sie die Wurzel eines zurückgegebenen Wertes sind ([Firefox Bug 1836514](https://bugzil.la/1836514)).
- Die `network` Ereignis-Zeitursprungsinformationen wurden von `originTime` zu `timeOrigin` umbenannt ([Firefox Bug 1836926](https://bugzil.la/1836926)).
- Das `network` Ereignis `network.responseCompleted` wird jetzt korrekt für Navigationsanfragen, die eine Umleitung beinhalten, ausgelöst ([Firefox Bug 1838238](https://bugzil.la/1838238)).

#### Marionette

- Unterstützung für die `moz:useNonSpecCompliantPointerOrigin` Fähigkeit wurde entfernt. Benutzer, die diese Funktion weiterhin benötigen, können weiterhin die Firefox 115 ESR Version verwenden, solange sie unterstützt wird. Bitte melden Sie Fehler unter [Remote Protocol :: Marionette](https://bugzilla.mozilla.org/enter_bug.cgi?product=Remote%20Protocol&component=Marionette), wenn Sie ein Problem feststellen ([Firefox Bug 1490258](https://bugzil.la/1490258)).
- Ein Regression wurde behoben, die verhinderte, dass wir veraltete Elemente (DOM-Elemente, die zuvor auf der Seite angezeigt wurden) von unbekannten Elementen für einen bestimmten Browsing-Kontext unterscheiden konnten ([Firefox Bug 1822466](https://bugzil.la/1822466)).
- Das Erstellen einer neuen Sitzung sollte nun ordnungsgemäß warten, bis der anfängliche Kontext geladen ist ([Firefox Bug 1838381](https://bugzil.la/1838381)).

## Änderungen für Add-on-Entwickler

- Die URL einer Seite, die besucht wird, wenn eine Erweiterung deinstalliert wird, bereitgestellt in {{WebExtAPIRef("runtime.setUninstallURL")}}, kann jetzt bis zu 1023 Zeichen anstatt 255 betragen ([Firefox Bug 1835723](https://bugzil.la/1835723)).
- Fügt {{WebExtAPIRef("action.getUserSettings")}} und {{WebExtAPIRef("browserAction.getUserSettings")}} hinzu, die die vom Benutzer angegebenen Einstellungen für die Browseraktion einer Erweiterung bereitstellen ([Firefox Bug 1814905](https://bugzil.la/1814905)).
- `autoDiscardable` wird jetzt in {{WebExtAPIRef("tabs.Tab")}}, {{WebExtAPIRef("tabs.onUpdated")}}, {{WebExtAPIRef("tabs.update")}}, und {{WebExtAPIRef("tabs.query")}} unterstützt ([Firefox Bug 1809094](https://bugzil.la/1809094)).

## Entwicklertools

- Unterstützung für [Custom Formatters](https://firefox-source-docs.mozilla.org/devtools-user/custom_formatters/index.html) hinzugefügt ([Firefox Bug 1752760](https://bugzil.la/1752760)).
- "Container"-Abzeichen in der Markup-Ansicht auf Elementen mit einer `container-type` Eigenschaft mit `size` oder `inline-size` Werten hinzugefügt ([Firefox Bug 1789193](https://bugzil.la/1789193)).
- Ein Problem im Inspector behoben, bei dem benutzerdefinierte CSS-Eigenschaften, die auf dem Custom Element Root gesetzt waren, nicht angezeigt wurden ([Firefox Bug 1836755](https://bugzil.la/1836755)).
- Anzeige, ob eine Anfrage im Netzwerkmonitor mit DNS über HTTPS gelöst wurde ([Firefox Bug 1810195](https://bugzil.la/1810195)).
- `Proxy-Authorization`-Header im Netzwerkmonitor entfernt ([Firefox Bug 1816115](https://bugzil.la/1816115)).

## Ältere Versionen

{{Firefox_for_developers}}
