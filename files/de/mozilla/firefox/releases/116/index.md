---
title: Firefox 116 für Entwickler
slug: Mozilla/Firefox/Releases/116
l10n:
  sourceCommit: 9afa3f63a178043901e92043ca9315e22c59ee1e
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 116, die Entwickler betreffen. Firefox 116 wurde am 1. August 2023 veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das [`dirname`](/de/docs/Web/HTML/Element/input#dirname)-Attribut wird jetzt auf den [`input`](/de/docs/Web/HTML/Element/input#dirname)- und [`textarea`](/de/docs/Web/HTML/Element/textarea#dirname)-Elementen unterstützt.
  Dieses Attribut ermöglicht es, Text-Dirigierungsinformationen (`ltr` oder `rtl`) bei der Formularübermittlung an den Server zu übermitteln ([Firefox Fehler 675943](https://bugzil.la/675943)).

### CSS

- Die Syntax wurde für die {{cssxref("offset-path")}}-Eigenschaft aktualisiert, die zum Definieren des Pfads verwendet wird, dem ein Element folgen soll. Die aktualisierte Syntax erlaubt es Ihnen, einen Wert von `none` oder eine von `<offset-path>` oder `<coord-box>` zu setzen. Der neue `<offset-path>`-Wert kann ein `<ray()>`, ein `<url>` oder eine `<basic-shape>` sein. Der [`<coord-box>`](/de/docs/Web/CSS/box-edge)-Wert hat den älteren `<geometry-box>`-Wert ersetzt und ermöglicht es, die Form des Pfads basierend auf dem Box-Modell des Elements zu spezifizieren. Die `<basic-shape>`- und `<coord-box>`-Werte erfordern, dass die Präferenzen `layout.css.motion-path-basic-shapes.enabled` und `layout.css.motion-path-coord-box.enabled` jeweils aktiviert sind. ([Firefox Fehler 1598156](https://bugzil.la/1598156)) und ([Firefox Fehler 1837305](https://bugzil.la/1837305)).

### Barrierefreiheit (ARIA)

- Die [`image`](/de/docs/Web/Accessibility/ARIA/Roles/img_role)-Rolle wird jetzt als Synonym für `img` unterstützt.
  Dies sorgt für Konsistenz mit den meisten Rollennamen, die vollständige Wörter oder Zusammensetzungen vollständiger Wörter sind ([Firefox Fehler 1829269](https://bugzil.la/1829269)).

### JavaScript

- [`Intl.NumberFormat`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) unterstützt neue [Konstruktoroptionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat), die steuern, wie Zahlen gerundet werden (`roundingIncrement`, `roundingMode`, `roundingPriority`), die Strategie zur Anzeige von nachgestellten Nullen bei ganzen Zahlen (`trailingZeroDisplay`) und ob Gruppierungstrennzeichen für Tausender, Millionen usw. verwendet werden (`useGrouping`).
  Es unterstützt auch neue Methoden [`formatRange()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatRange) und [`formatRangeToParts()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatRangeToParts) zum Formatieren von Zahlenbereichen.
  ([Firefox Fehler 1795756](https://bugzil.la/1795756)).
- [`Intl.PluralRules`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules) wurde aktualisiert (als Teil desselben Änderungssatzes wie `Intl.NumberFormat`), um [Konstruktoroptionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/PluralRules) `roundingIncrement`, `roundingMode`, `roundingPriority` und `trailingZeroDisplay` sowie die Methode [`selectRange()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/selectRange) zu unterstützen.
  ([Firefox Fehler 1795756](https://bugzil.la/1795756)).

### SVG

- Die `q` [Längeneinheit](/de/docs/Web/SVG/Content_type#length) (`1q = 1/40stel von 1cm`) wird jetzt unterstützt ([Firefox Fehler 1836995](https://bugzil.la/1836995)).

### HTTP

- Das Konfigurieren einer [Content-Security-Policy](/de/docs/Web/HTTP/CSP) unterstützt jetzt die Angabe von [externen JavaScript-Dateien zur Zulassungsliste mit Hashes](/de/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#allowlisting_external_scripts_using_hashes), während zuvor nur Inline-Skripte mit einem Hash auf Zulassungslisten gesetzt werden konnten ([Firefox Fehler 1409200](https://bugzil.la/1409200)).

### APIs

#### DOM

- Die Eigenschaften [`TextMetrics.fontBoundingBoxAscent`](/de/docs/Web/API/TextMetrics/fontBoundingBoxAscent) und [`TextMetrics.fontBoundingBoxDescent`](/de/docs/Web/API/TextMetrics/fontBoundingBoxDescent) werden jetzt unterstützt.
  Diese Metriken geben jeweils den Abstand oberhalb und unterhalb der [`CanvasRenderingContext2D.textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline) bis zum Begrenzungsrechteck aller Schriftarten zurück, die zum Rendern des Textes verwendet wurden ([Firefox Fehler 1801198](https://bugzil.la/1801198)).

#### Medien, WebRTC und Web Audio

- Die [Audio Output Devices API](/de/docs/Web/API/Audio_Output_Devices_API) wird jetzt auf allen Plattformen außer Android unterstützt.
  Diese API ermöglicht es Webanwendungen, die Audioausgabe an ein zugelassenes Bluetooth-Headset, einen Lautsprecher oder ein anderes Gerät umzuleiten, anstatt den Browser oder das zugrunde liegende Betriebssystem zu verwenden.
  Betroffene APIs umfassen [`MediaDevices.selectAudioOutput()`](/de/docs/Web/API/MediaDevices/selectAudioOutput), [`MediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices), [`HTMLMediaElement.setSinkId()`](/de/docs/Web/API/HTMLMediaElement/setSinkId), [`HTMLMediaElement.sinkId`](/de/docs/Web/API/HTMLMediaElement/sinkId) und die Berechtigungspolitik [`Permissions-Policy: speaker-selection`](/de/docs/Web/HTTP/Headers/Permissions-Policy/speaker-selection) ([Firefox Fehler 1498512](https://bugzil.la/1498512)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Unterstützung für den Befehl `session.end` hinzugefügt, der es Benutzern ermöglicht, die Automatisierungssitzung zu beenden. Dies war zuvor nur für Sitzungen möglich, die sowohl WebDriver Classic als auch WebDriver BiDi verwenden. Es ist jetzt auch für alleinige WebDriver BiDi-Sitzungen möglich ([Firefox Fehler 1829337](https://bugzil.la/1829337)).
- Unterstützung für [Fähigkeitspassung](/de/docs/Web/WebDriver/Capabilities) für den Befehl `session.new` hinzugefügt. Es ermöglicht, Erwartungen an den Zielbrowser zu definieren, wie z. B. den Namen des Browsers, den Namen der Plattform usw. Es kann auch verwendet werden, um die Sitzung zu konfigurieren, z. B. um festzulegen, ob unsichere Zertifikate akzeptiert werden sollen ([Firefox Fehler 1731730](https://bugzil.la/1731730)).
- Schattenwurzel werden jetzt korrekt serialisiert, wenn sie die Wurzel eines zurückgegebenen Wertes sind ([Firefox Fehler 1836514](https://bugzil.la/1836514)).
- Die `network`-Ereignis-Ursprungszeitinformation wurde von `originTime` in `timeOrigin` umbenannt ([Firefox Fehler 1836926](https://bugzil.la/1836926)).
- Das `network`-Ereignis `network.responseCompleted` wird jetzt korrekt für Navigationsanfragen emittiert, die eine Umleitung beinhalten ([Firefox Fehler 1838238](https://bugzil.la/1838238)).

#### Marionette

- Unterstützung für die Fähigkeit `moz:useNonSpecCompliantPointerOrigin` entfernt. Benutzer, die diese Funktion noch benötigen, können die Firefox 115 ESR-Version weiterhin verwenden, solange sie unterstützt wird. Bitte melden Sie Fehler unter [Remote Protocol :: Marionette](https://bugzilla.mozilla.org/enter_bug.cgi?product=Remote%20Protocol&component=Marionette), wenn Sie auf Probleme stoßen ([Firefox Fehler 1490258](https://bugzil.la/1490258)).
- Ein Fehler wurde behoben, der verhinderte, dass wir veraltete Elemente (DOM-Elemente, die zuvor auf der Seite gesehen wurden) von unbekannten Elementen für einen bestimmten Browsing-Kontext unterscheiden konnten ([Firefox Fehler 1822466](https://bugzil.la/1822466)).
- Das Erstellen einer neuen Sitzung sollte jetzt ordnungsgemäß darauf warten, dass der anfängliche Kontext geladen ist ([Firefox Fehler 1838381](https://bugzil.la/1838381)).

## Änderungen für Add-on-Entwickler

- Die URL einer Seite, die beim Deinstallieren einer Erweiterung besucht wird und in {{WebExtAPIRef("runtime.setUninstallURL")}} angegeben wird, kann jetzt bis zu 1023 Zeichen anstelle von 255 umfassen ([Firefox Fehler 1835723](https://bugzil.la/1835723)).
- Fügt {{WebExtAPIRef("action.getUserSettings")}} und {{WebExtAPIRef("browserAction.getUserSettings")}} hinzu, die die vom Benutzer angegebenen Einstellungen für die Browseraktion einer Erweiterung bereitstellen ([Firefox Fehler 1814905](https://bugzil.la/1814905)).
- `autoDiscardable` wird jetzt in {{WebExtAPIRef("tabs.Tab")}}, {{WebExtAPIRef("tabs.onUpdated")}}, {{WebExtAPIRef("tabs.update")}} und {{WebExtAPIRef("tabs.query")}} unterstützt ([Firefox Fehler 1809094](https://bugzil.la/1809094)).

## Entwickler-Tools

- Unterstützung für [Custom Formatters](https://firefox-source-docs.mozilla.org/devtools-user/custom_formatters/index.html) hinzugefügt ([Firefox Fehler 1752760](https://bugzil.la/1752760)).
- "Container"-Abzeichen in der Markup-Ansicht auf Elementen mit der Eigenschaft `container-type` und den Werten `size` oder `inline-size` hinzugefügt ([Firefox Fehler 1789193](https://bugzil.la/1789193)).
- Ein Problem im Inspector behoben, bei dem benutzerdefinierte CSS-Eigenschaften, die am Custom Element Root gesetzt wurden, nicht angezeigt wurden ([Firefox Fehler 1836755](https://bugzil.la/1836755)).
- Im Netzwerk-Monitor anzeigen, ob die Anfrage mit DNS über HTTPS aufgelöst wurde ([Firefox Fehler 1810195](https://bugzil.la/1810195)).
- `Proxy-Authorization`-Header im Netzwerk-Monitor entfernt ([Firefox Fehler 1816115](https://bugzil.la/1816115)).

## Ältere Versionen

{{Firefox_for_developers}}
