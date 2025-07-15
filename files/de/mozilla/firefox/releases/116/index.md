---
title: Firefox 116 für Entwickler
short-title: Firefox 116
slug: Mozilla/Firefox/Releases/116
l10n:
  sourceCommit: 64df508685abcbc047f6c1a973505921fad1484e
---

Dieser Artikel enthält Informationen über die Änderungen in Firefox 116, die Entwickler betreffen. Firefox 116 wurde am 01. August 2023 veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das [`dirname`](/de/docs/Web/HTML/Reference/Elements/input#dirname)-Attribut wird jetzt für [`input`](/de/docs/Web/HTML/Reference/Elements/input#dirname)- und [`textarea`](/de/docs/Web/HTML/Reference/Elements/textarea#dirname)-Elemente unterstützt. Dieses Attribut ermöglicht es, Informationen zur Textrichtung (`ltr` oder `rtl`) beim Absenden eines Formulars an den Server zu übermitteln ([Firefox Fehler 675943](https://bugzil.la/675943)).

### CSS

- Die Syntax für die {{cssxref("offset-path")}}-Eigenschaft wurde aktualisiert, die verwendet wird, um den Pfad zu definieren, dem ein Element folgen soll. Die aktualisierte Syntax erlaubt es, einen Wert von `none` oder einen von `<offset-path>` oder `<coord-box>` zu setzen. Der neue `<offset-path>`-Wert kann ein `<ray()>`, eine `<url>` oder eine `<basic-shape>` sein. Der [`<coord-box>`](/de/docs/Web/CSS/box-edge)-Wert hat den älteren `<geometry-box>`-Wert ersetzt und ermöglicht es, die Form des Pfades basierend auf dem Box-Modell des Elements anzugeben. Die `<basic-shape>`- und `<coord-box>`-Werte erfordern, dass die Präferenzen `layout.css.motion-path-basic-shapes.enabled` bzw. `layout.css.motion-path-coord-box.enabled` aktiviert sind. ([Firefox Fehler 1598156](https://bugzil.la/1598156)) und ([Firefox Fehler 1837305](https://bugzil.la/1837305)).

### Barrierefreiheit (ARIA)

- Die [`image`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/img_role)-Rolle wird jetzt als Synonym für `img` unterstützt. Dies dient der Konsistenz mit den meisten Rollennamen, die vollständige Wörter oder Kombinationen vollständiger Wörter sind ([Firefox Fehler 1829269](https://bugzil.la/1829269)).

### JavaScript

- [`Intl.NumberFormat`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) unterstützt neue [Konstruktoroptionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat), die steuern, wie Zahlen gerundet werden (`roundingIncrement`, `roundingMode`, `roundingPriority`), die Strategie, wie nachgestellte Nullen bei ganzen Zahlen angezeigt werden (`trailingZeroDisplay`), und ob Gruppierungszeichen zur Anzeige von Tausendern, Millionen usw. verwendet werden (`useGrouping`). Es unterstützt außerdem die neuen Methoden [`formatRange()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatRange) und [`formatRangeToParts()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatRangeToParts) zum Formatieren von Zahlenbereichen. ([Firefox Fehler 1795756](https://bugzil.la/1795756)).
- [`Intl.PluralRules`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules) wurde aktualisiert (im Rahmen desselben Satzes von Änderungen wie `Intl.NumberFormat`), um die [Konstruktoroptionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/PluralRules) `roundingIncrement`, `roundingMode`, `roundingPriority` und `trailingZeroDisplay` sowie die Methode [`selectRange()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/selectRange) zu unterstützen. ([Firefox Fehler 1795756](https://bugzil.la/1795756)).

### SVG

- Die `q`-[Längeneinheit](/de/docs/Web/SVG/Guides/Content_type#length) (`1q = 1/40 eines 1cm`) wird jetzt unterstützt ([Firefox Fehler 1836995](https://bugzil.la/1836995)).

### HTTP

- Die Konfiguration einer [Content-Security-Policy](/de/docs/Web/HTTP/Guides/CSP) unterstützt jetzt das Angeben von [externen JavaScript-Dateien, die mit Hashes auf die Whitelist gesetzt werden können](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src#allowlisting_external_scripts_using_hashes), während zuvor nur Inline-Skripte mit einem Hash auf die Whitelist gesetzt werden konnten ([Firefox Fehler 1409200](https://bugzil.la/1409200)).

### APIs

#### DOM

- Die Eigenschaften [`TextMetrics.fontBoundingBoxAscent`](/de/docs/Web/API/TextMetrics/fontBoundingBoxAscent) und [`TextMetrics.fontBoundingBoxDescent`](/de/docs/Web/API/TextMetrics/fontBoundingBoxDescent) werden jetzt unterstützt. Diese Metriken geben jeweils den Abstand über und unter der [`CanvasRenderingContext2D.textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline) zum Begrenzungsrechteck aller Schriften zurück, die zum Rendern des Textes verwendet werden ([Firefox Fehler 1801198](https://bugzil.la/1801198)).

#### Medien, WebRTC und Web Audio

- Die [Audio Output Devices API](/de/docs/Web/API/Audio_Output_Devices_API) wird jetzt auf allen Plattformen außer Android unterstützt. Diese API ermöglicht es Webanwendungen, die Audioausgabe auf ein erlaubtes Bluetooth-Headset, einen Lautsprecher oder ein anderes Gerät umzuleiten, anstatt den Browser oder das zugrunde liegende Betriebssystem-Standardgerät verwenden zu müssen. Betroffene APIs umfassen [`MediaDevices.selectAudioOutput()`](/de/docs/Web/API/MediaDevices/selectAudioOutput), [`MediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices), [`HTMLMediaElement.setSinkId()`](/de/docs/Web/API/HTMLMediaElement/setSinkId), [`HTMLMediaElement.sinkId`](/de/docs/Web/API/HTMLMediaElement/sinkId) und die Berechtigungsrichtlinie [`Permissions-Policy: speaker-selection`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/speaker-selection) ([Firefox Fehler 1498512](https://bugzil.la/1498512)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Unterstützung für den `session.end`-Befehl hinzugefügt, der es Benutzern ermöglicht, die Automatisierungssitzung zu beenden. Dies war zuvor nur für Sitzungen möglich, die sowohl WebDriver Classic als auch WebDriver BiDi verwendeten. Es ist nun auch für WebDriver-BiDi-only-Sitzungen möglich ([Firefox Fehler 1829337](https://bugzil.la/1829337)).
- Unterstützung für [Fähigkeitsabgleich](/de/docs/Web/WebDriver/Reference/Capabilities) für den `session.new`-Befehl hinzugefügt. Es ermöglicht, Erwartungen über den Zielbrowser zu definieren, wie den Browsernamen, den Plattformnamen usw. Es kann auch verwendet werden, um die Sitzung zu konfigurieren, z. B. um anzugeben, ob unsichere Zertifikate akzeptiert werden sollen ([Firefox Fehler 1731730](https://bugzil.la/1731730)).
- Shadow-Wurzeln werden jetzt korrekt serialisiert, wenn sie die Wurzel eines zurückgegebenen Wertes sind ([Firefox Fehler 1836514](https://bugzil.la/1836514)).
- Die `network`-Ereignisinformation `network.responseCompleted` wird jetzt korrekt für Navigationsanfragen mit Umleitung gesendet ([Firefox Fehler 1838238](https://bugzil.la/1838238)).

#### Marionette

- Unterstützung für die `moz:useNonSpecCompliantPointerOrigin`-Fähigkeit entfernt. Benutzer, die diese Funktion noch benötigen, können weiterhin die Firefox 115 ESR-Version verwenden, solange sie unterstützt wird. Bitte melden Sie Fehler unter [Remote Protocol :: Marionette](https://bugzilla.mozilla.org/enter_bug.cgi?product=Remote%20Protocol&component=Marionette), wenn Sie ein Problem feststellen ([Firefox Fehler 1490258](https://bugzil.la/1490258)).
- Ein Fehler wurde behoben, der es uns verhinderte, veraltete Elemente (DOM-Elemente, die zuvor auf der Seite gesehen wurden) von unbekannten Elementen für einen bestimmten Browsing-Kontext zu unterscheiden ([Firefox Fehler 1822466](https://bugzil.la/1822466)).
- Das Erstellen einer neuen Sitzung sollte jetzt korrekt warten, bis der anfängliche Kontext geladen ist ([Firefox Fehler 1838381](https://bugzil.la/1838381)).

## Änderungen für Add-on-Entwickler

- Die URL einer Seite, die besucht wird, wenn eine Erweiterung deinstalliert wird, bereitgestellt in {{WebExtAPIRef("runtime.setUninstallURL")}}, kann jetzt bis zu 1023 Zeichen lang sein, anstatt 255 ([Firefox Fehler 1835723](https://bugzil.la/1835723)).
- Fügt {{WebExtAPIRef("action.getUserSettings")}} und {{WebExtAPIRef("browserAction.getUserSettings")}} hinzu, die die benutzerspezifischen Einstellungen für eine Browser-Aktion einer Erweiterung bereitstellen ([Firefox Fehler 1814905](https://bugzil.la/1814905)).
- `autoDiscardable` wird jetzt in {{WebExtAPIRef("tabs.Tab")}}, {{WebExtAPIRef("tabs.onUpdated")}}, {{WebExtAPIRef("tabs.update")}} und {{WebExtAPIRef("tabs.query")}} unterstützt ([Firefox Fehler 1809094](https://bugzil.la/1809094)).

## Entwickler-Tools

- Unterstützung für [Custom Formatters](https://firefox-source-docs.mozilla.org/devtools-user/custom_formatters/index.html) hinzugefügt ([Firefox Fehler 1752760](https://bugzil.la/1752760)).
- "Container"-Badges in der Markup-Ansicht auf Elementen mit einer `container-type`-Eigenschaft mit `size`- oder `inline-size`-Werten hinzugefügt ([Firefox Fehler 1789193](https://bugzil.la/1789193)).
- Ein Problem im Inspektor behoben, bei dem CSS-Benutzerdefinierte Eigenschaften, die auf dem benutzerdefinierten Element-Root gesetzt wurden, nicht angezeigt wurden ([Firefox Fehler 1836755](https://bugzil.la/1836755)).
- Zeigt im Netzwerkmonitor an, ob die Anfrage mit DNS über HTTPS aufgelöst wurde ([Firefox Fehler 1810195](https://bugzil.la/1810195)).
- Der `Proxy-Authorization`-Header im Netzwerkmonitor wurde entfernt ([Firefox Fehler 1816115](https://bugzil.la/1816115)).
