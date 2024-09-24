---
title: Firefox 116 für Entwickler
slug: Mozilla/Firefox/Releases/116
l10n:
  sourceCommit: 9afa3f63a178043901e92043ca9315e22c59ee1e
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 116, die Entwickler betreffen. Firefox 116 wurde am 01. August 2023 veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das [`dirname`](/de/docs/Web/HTML/Element/input#dirname) Attribut wird jetzt von [`input`](/de/docs/Web/HTML/Element/input#dirname) und [`textarea`](/de/docs/Web/HTML/Element/textarea#dirname) Elementen unterstützt. Dieses Attribut ermöglicht das Übermitteln von Textorientierungsinformationen (`ltr` oder `rtl`) an den Server während der Formularübermittlung ([Firefox Bug 675943](https://bugzil.la/675943)).

### CSS

- Die Syntax für die Eigenschaft {{cssxref("offset-path")}} wurde aktualisiert, welche den Pfad definiert, dem ein Element folgen soll. Die aktualisierte Syntax ermöglicht es, einen Wert von `none` oder einen von `<offset-path>` oder `<coord-box>` festzulegen. Der neue `<offset-path>` Wert kann ein `<ray()>`, eine `<url>` oder eine `<basic-shape>` sein. Der [`<coord-box>`](/de/docs/Web/CSS/box-edge) Wert hat den älteren `<geometry-box>` Wert ersetzt und erlaubt es, die Form des Pfads basierend auf dem Boxmodell des Elements zu spezifizieren. Die `<basic-shape>` und `<coord-box>` Werte erfordern, dass die `layout.css.motion-path-basic-shapes.enabled` und `layout.css.motion-path-coord-box.enabled` Einstellungen aktiviert sind. ([Firefox Bug 1598156](https://bugzil.la/1598156)) und ([Firefox Bug 1837305](https://bugzil.la/1837305)).

### Barrierefreiheit (ARIA)

- Die Rolle [`image`](/de/docs/Web/Accessibility/ARIA/Roles/img_role) wird jetzt als Synonym für `img` unterstützt. Dies sorgt für Konsistenz mit den meisten Rollennamen, die vollständige Wörter oder Zusammenfügungen vollständiger Wörter sind ([Firefox Bug 1829269](https://bugzil.la/1829269)).

### JavaScript

- [`Intl.NumberFormat`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) unterstützt neue [Konstruktoroptionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat), die steuern, wie Zahlen gerundet werden (`roundingIncrement`, `roundingMode`, `roundingPriority`), die Strategie zur Anzeige nachgestellter Nullen bei ganzen Zahlen (`trailingZeroDisplay`) und ob Gruppierungstrennzeichen zur Anzeige von Tausendern, Millionen usw. verwendet werden (`useGrouping`). Es werden auch neue Methoden [`formatRange()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatRange) und [`formatRangeToParts()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatRangeToParts) unterstützt, um Zahlenbereiche zu formatieren. ([Firefox Bug 1795756](https://bugzil.la/1795756)).
- [`Intl.PluralRules`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules) wurde (im Rahmen desselben Änderungssatzes wie `Intl.NumberFormat`) aktualisiert, um die [Konstruktoroptionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/PluralRules) `roundingIncrement`, `roundingMode`, `roundingPriority` und `trailingZeroDisplay` sowie die Methode [`selectRange()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/selectRange) zu unterstützen. ([Firefox Bug 1795756](https://bugzil.la/1795756)).

### SVG

- Die `q` [Längeneinheit](/de/docs/Web/SVG/Content_type#length) (`1q = 1/40stel von 1cm`) wird jetzt unterstützt ([Firefox Bug 1836995](https://bugzil.la/1836995)).

### HTTP

- Die Konfiguration einer [Content-Security-Policy](/de/docs/Web/HTTP/CSP) unterstützt nun die Angabe von [externen JavaScript-Dateien, die mit Hashes auf die Whitelist gesetzt werden sollen](/de/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#allowlisting_external_scripts_using_hashes), wo vorher nur Inline-Skripte mit einem Hash auf die Whitelist gesetzt werden konnten ([Firefox Bug 1409200](https://bugzil.la/1409200)).

### APIs

#### DOM

- Die Eigenschaften {{domxref("TextMetrics.fontBoundingBoxAscent")}} und {{domxref("TextMetrics.fontBoundingBoxDescent")}} werden jetzt unterstützt. Diese Metriken geben jeweils den Abstand über und unter der {{domxref("CanvasRenderingContext2D.textBaseline")}} zum Begrenzungsrechteck aller zum Rendern des Textes verwendeten Schriftarten zurück ([Firefox Bug 1801198](https://bugzil.la/1801198)).

#### Medien, WebRTC und Web Audio

- Die [Audio Output Devices API](/de/docs/Web/API/Audio_Output_Devices_API) wird jetzt auf allen Plattformen außer Android unterstützt. Diese API ermöglicht es Webanwendungen, die Audioausgabe auf ein zugelassenes Bluetooth-Headset, ein Freisprechtelefon oder ein anderes Gerät umzuleiten, anstatt den Browser oder das zugrunde liegende Betriebssystem verwenden zu müssen. Betroffene APIs umfassen {{domxref("MediaDevices.selectAudioOutput()")}}, {{domxref("MediaDevices.enumerateDevices()")}}, [`HTMLMediaElement.setSinkId()`](/de/docs/Web/API/HTMLMediaElement/setSinkId), [`HTMLMediaElement.sinkId`](/de/docs/Web/API/HTMLMediaElement/sinkId) und die Berechtigungsrichtlinie [`Permissions-Policy: speaker-selection`](/de/docs/Web/HTTP/Headers/Permissions-Policy/speaker-selection) ([Firefox Bug 1498512](https://bugzil.la/1498512)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Unterstützung für den Befehl `session.end` hinzugefügt, der es Benutzern ermöglicht, die Automatisierungssitzung zu beenden. Dies war zuvor nur für Sitzungen mit sowohl WebDriver Classic als auch WebDriver BiDi möglich. Jetzt ist es auch für WebDriver BiDi-only Sitzungen möglich ([Firefox Bug 1829337](https://bugzil.la/1829337)).
- Unterstützung für [Capability Matching](/de/docs/Web/WebDriver/Capabilities) für den Befehl `session.new` hinzugefügt. Es ermöglicht die Definition von Erwartungen über den Zielbrowser, wie Browsername, Plattformname usw. Es kann auch verwendet werden, um die Sitzung zu konfigurieren, zum Beispiel um anzugeben, ob unsichere Zertifikate akzeptiert werden sollen ([Firefox Bug 1731730](https://bugzil.la/1731730)).
- Shadow Roots werden nun korrekt serialisiert, wenn sie die Wurzel eines zurückgegebenen Wertes sind ([Firefox Bug 1836514](https://bugzil.la/1836514)).
- Die `network` Ereigniszeitursprungsinformation wurde von `originTime` in `timeOrigin` umbenannt ([Firefox Bug 1836926](https://bugzil.la/1836926)).
- Das `network` Ereignis `network.responseCompleted` wird jetzt korrekt für Navigationsanforderungen mit einer Umleitung ausgegeben ([Firefox Bug 1838238](https://bugzil.la/1838238)).

#### Marionette

- Die Unterstützung für die Fähigkeit `moz:useNonSpecCompliantPointerOrigin` wurde entfernt. Benutzer, die diese Funktion weiterhin benötigen, können den Firefox 115 ESR Release verwenden, solange er unterstützt wird. Bitte melden Sie Fehler unter [Remote Protocol :: Marionette](https://bugzilla.mozilla.org/enter_bug.cgi?product=Remote%20Protocol&component=Marionette), wenn Sie ein Problem sehen ([Firefox Bug 1490258](https://bugzil.la/1490258)).
- Ein Regression wurde behoben, die uns daran hinderte, veraltete Elemente (DOM-Elemente, die zuvor auf der Seite angezeigt wurden) von unbekannten Elementen für einen gegebenen Browsing-Kontext zu unterscheiden ([Firefox Bug 1822466](https://bugzil.la/1822466)).
- Das Erstellen einer neuen Sitzung sollte nun ordnungsgemäß auf das Laden des ersten Kontexts warten ([Firefox Bug 1838381](https://bugzil.la/1838381)).

## Änderungen für Add-on-Entwickler

- Die URL einer Seite, die besucht wird, wenn eine Erweiterung deinstalliert wird, bereitgestellt in {{WebExtAPIRef("runtime.setUninstallURL")}}, kann jetzt bis zu 1023 Zeichen lang sein, anstatt 255 ([Firefox Bug 1835723](https://bugzil.la/1835723)).
- Hinzufügen von {{WebExtAPIRef("action.getUserSettings")}} und {{WebExtAPIRef("browserAction.getUserSettings")}} zur Bereitstellung der vom Benutzer angegebenen Einstellungen für die Browseraktion einer Erweiterung ([Firefox Bug 1814905](https://bugzil.la/1814905)).
- `autoDiscardable` wird jetzt in {{WebExtAPIRef("tabs.Tab")}}, {{WebExtAPIRef("tabs.onUpdated")}}, {{WebExtAPIRef("tabs.update")}}, und {{WebExtAPIRef("tabs.query")}} unterstützt ([Firefox Bug 1809094](https://bugzil.la/1809094)).

## Entwicklertools

- Unterstützung für [Custom Formatters](https://firefox-source-docs.mozilla.org/devtools-user/custom_formatters/index.html) hinzugefügt ([Firefox Bug 1752760](https://bugzil.la/1752760)).
- "Container" Abzeichen im Markup-Ansicht für Elemente mit einer `container-type` Eigenschaft mit `size` oder `inline-size` Werten hinzugefügt ([Firefox Bug 1789193](https://bugzil.la/1789193)).
- Ein Problem im Inspector behoben, bei dem CSS-Benutzerdefinierte Eigenschaften, die im benutzerdefinierten Element-Root eingestellt wurden, nicht angezeigt wurden ([Firefox Bug 1836755](https://bugzil.la/1836755)).
- Anzeigen, ob die Anfrage mit DNS über HTTPS im Netzwerkmonitor gelöst wurde ([Firefox Bug 1810195](https://bugzil.la/1810195)).
- `Proxy-Authorization` Header im Netzwerkmonitor entfernt ([Firefox Bug 1816115](https://bugzil.la/1816115)).

## Ältere Versionen

{{Firefox_for_developers}}
