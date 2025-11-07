---
title: Firefox 116 Versionshinweise für Entwickler
short-title: Firefox 116
slug: Mozilla/Firefox/Releases/116
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 116, die Entwickler betreffen. Firefox 116 wurde am 01. August 2023 veröffentlicht.

## Änderungen für Webentwickler

### HTML

- Das [`dirname`](/de/docs/Web/HTML/Reference/Elements/input#dirname) Attribut wird nun auf [`input`](/de/docs/Web/HTML/Reference/Elements/input#dirname) und [`textarea`](/de/docs/Web/HTML/Reference/Elements/textarea#dirname) Elementen unterstützt.
  Dieses Attribut erlaubt es, Textdirektionalitätsinformationen (`ltr` oder `rtl`) während der Formularübermittlung an den Server zu übermitteln ([Firefox Bug 675943](https://bugzil.la/675943)).

### CSS

- Die Syntax für die {{cssxref("offset-path")}} Eigenschaft, die zur Definition des Pfades eines Elements verwendet wird, wurde aktualisiert. Die aktualisierte Syntax erlaubt es, einen Wert von `none` oder einen der Werte `<offset-path>` oder `<coord-box>` festzulegen. Der neue `<offset-path>` Wert kann ein `<ray()>`, eine `<url>`, oder eine `<basic-shape>` sein. Der [`<coord-box>`](/de/docs/Web/CSS/Reference/Values/box-edge) Wert hat den älteren `<geometry-box>` Wert ersetzt und ermöglicht die Form des Pfades basierend auf dem Boxmodell des Elements zu spezifizieren. Die `<basic-shape>` und `<coord-box>` Werte erfordern, dass die `layout.css.motion-path-basic-shapes.enabled` und `layout.css.motion-path-coord-box.enabled` Präferenzen entsprechend aktiviert sind. ([Firefox Bug 1598156](https://bugzil.la/1598156)) und ([Firefox Bug 1837305](https://bugzil.la/1837305)).

### Barrierefreiheit (ARIA)

- Die [`image`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/img_role) Rolle wird nun als Synonym für `img` unterstützt.
  Dies sorgt für Konsistenz, da die meisten Rollennamen vollständige Wörter oder Kombinationen vollständiger Wörter sind ([Firefox Bug 1829269](https://bugzil.la/1829269)).

### JavaScript

- [`Intl.NumberFormat`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) unterstützt neue [Konstrukturoptionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat), die steuern, wie Zahlen gerundet werden (`roundingIncrement`, `roundingMode`, `roundingPriority`), die Strategie zum Anzeigen von nachgestellten Nullen bei ganzen Zahlen (`trailingZeroDisplay`) und ob Gruppierungstrennzeichen verwendet werden sollen, um Tausender, Millionen und so weiter anzuzeigen (`useGrouping`).
  Es unterstützt auch neue Methoden [`formatRange()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatRange) und [`formatRangeToParts()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatRangeToParts) zur Formatierung von Zahlenbereichen.
  ([Firefox Bug 1795756](https://bugzil.la/1795756)).
- [`Intl.PluralRules`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules) wurde aktualisiert (als Teil derselben Änderungssatzes wie `Intl.NumberFormat`) um [Konstrukturoptionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/PluralRules) `roundingIncrement`, `roundingMode`, `roundingPriority` und `trailingZeroDisplay`, und die Methode [`selectRange()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/selectRange) zu unterstützen.
  ([Firefox Bug 1795756](https://bugzil.la/1795756)).

### SVG

- Die `q` [Längeneinheit](/de/docs/Web/SVG/Guides/Content_type#length) (`1q = 1/40stel von 1cm`) wird jetzt unterstützt ([Firefox Bug 1836995](https://bugzil.la/1836995)).

### HTTP

- Die Konfiguration einer [Content-Security-Policy](/de/docs/Web/HTTP/Guides/CSP) unterstützt jetzt die Angabe von [externen JavaScript-Dateien, die mit Hashes auf die Allowlist gesetzt werden sollen](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src#allowlisting_external_scripts_using_hashes), wobei zuvor nur Inline-Skripte mit einem Hash auf die Allowlist gesetzt werden konnten ([Firefox Bug 1409200](https://bugzil.la/1409200)).

### APIs

#### DOM

- Die Eigenschaften [`TextMetrics.fontBoundingBoxAscent`](/de/docs/Web/API/TextMetrics/fontBoundingBoxAscent) und [`TextMetrics.fontBoundingBoxDescent`](/de/docs/Web/API/TextMetrics/fontBoundingBoxDescent) werden jetzt unterstützt.
  Diese Metriken geben jeweils den Abstand über und unter der [`CanvasRenderingContext2D.textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline) zum Begrenzungsrechteck aller Schriften zurück, die zum Rendern des Textes verwendet werden ([Firefox Bug 1801198](https://bugzil.la/1801198)).

#### Media, WebRTC und Web Audio

- Die [Audio Output Devices API](/de/docs/Web/API/Audio_Output_Devices_API) wird nun auf allen Plattformen außer Android unterstützt.
  Diese API ermöglicht es Webanwendungen, die Audioausgabe auf ein zugelassenes Bluetooth-Headset, Freisprecheinrichtung oder ein anderes Gerät umzuleiten, anstatt den Browser oder das zugrunde liegende Betriebssystem standardmäßig zu verwenden.
  Betroffene APIs sind [`MediaDevices.selectAudioOutput()`](/de/docs/Web/API/MediaDevices/selectAudioOutput), [`MediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices), [`HTMLMediaElement.setSinkId()`](/de/docs/Web/API/HTMLMediaElement/setSinkId), [`HTMLMediaElement.sinkId`](/de/docs/Web/API/HTMLMediaElement/sinkId), und die Berechtigungsrichtlinie [`Permissions-Policy: speaker-selection`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/speaker-selection) ([Firefox Bug 1498512](https://bugzil.la/1498512)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Unterstützung für den `session.end` Befehl hinzugefügt, der es Nutzern ermöglicht, die Automatisierungssitzung zu beenden. Dies war zuvor nur für Sitzungen möglich, die sowohl WebDriver Classic als auch WebDriver BiDi verwendeten. Es ist jetzt auch für WebDriver BiDi-only Sitzungen möglich ([Firefox Bug 1829337](https://bugzil.la/1829337)).
- Unterstützung für [Fähigkeitsabgleich](/de/docs/Web/WebDriver/Reference/Capabilities) für den `session.new` Befehl hinzugefügt. Es erlaubt die Definition von Erwartungen an den Zielbrowser, wie z.B. Browsername, Plattformname usw. Es kann auch verwendet werden, um die Sitzung zu konfigurieren, zum Beispiel, um festzulegen, ob unsichere Zertifikate akzeptiert werden sollen ([Firefox Bug 1731730](https://bugzil.la/1731730)).
- Shadow Roots werden jetzt korrekt serialisiert, wenn sie die Wurzel eines zurückgegebenen Wertes sind ([Firefox Bug 1836514](https://bugzil.la/1836514)).
- Die `network` Ereigniszeitursprungsinformation wurde von `originTime` in `timeOrigin` umbenannt ([Firefox Bug 1836926](https://bugzil.la/1836926)).
- Das `network` Ereignis `network.responseCompleted` wird jetzt korrekt für Navigationsanforderungen, die eine Umleitung beinhalten, ausgelöst ([Firefox Bug 1838238](https://bugzil.la/1838238)).

#### Marionette

- Unterstützung für die `moz:useNonSpecCompliantPointerOrigin` Funktionalität entfernt. Nutzer, die diese Funktion noch benötigen, können weiterhin die Firefox 115 ESR-Version verwenden, solange sie unterstützt wird. Bitte melden Sie Bugs unter [Remote Protocol :: Marionette](https://bugzilla.mozilla.org/enter_bug.cgi?product=Remote%20Protocol&component=Marionette) wenn Sie ein Problem feststellen ([Firefox Bug 1490258](https://bugzil.la/1490258)).
- Ein Regression wurde behoben, die es uns verhinderte, veraltete Elemente (DOM-Elemente, die zuvor auf der Seite gesehen wurden) von unbekannten Elementen für einen gegebenen Browsing-Kontext zu unterscheiden ([Firefox Bug 1822466](https://bugzil.la/1822466)).
- Das Erstellen einer neuen Sitzung sollte jetzt ordnungsgemäß warten, bis der anfängliche Kontext geladen ist ([Firefox Bug 1838381](https://bugzil.la/1838381)).

## Änderungen für Add-on-Entwickler

- Die URL einer Seite, die beim Deinstallieren einer Erweiterung besucht wird und in {{WebExtAPIRef("runtime.setUninstallURL")}} angegeben wird, kann jetzt bis zu 1023 Zeichen statt 255 Zeichen lang sein ([Firefox Bug 1835723](https://bugzil.la/1835723)).
- Fügt {{WebExtAPIRef("action.getUserSettings")}} und {{WebExtAPIRef("browserAction.getUserSettings")}} hinzu, um die benutzerdefinierten Einstellungen für die Browseraktion einer Erweiterung bereitzustellen ([Firefox Bug 1814905](https://bugzil.la/1814905)).
- `autoDiscardable` wird nun in {{WebExtAPIRef("tabs.Tab")}}, {{WebExtAPIRef("tabs.onUpdated")}}, {{WebExtAPIRef("tabs.update")}}, und {{WebExtAPIRef("tabs.query")}} unterstützt ([Firefox Bug 1809094](https://bugzil.la/1809094)).

## Entwickler-Tools

- Unterstützung für [Custom Formatters](https://firefox-source-docs.mozilla.org/devtools-user/custom_formatters/index.html) hinzugefügt ([Firefox Bug 1752760](https://bugzil.la/1752760)).
- "Container" Badges in der Markup-Ansicht auf Elementen mit einer `container-type` Eigenschaft mit `size` oder `inline-size` Werten hinzugefügt ([Firefox Bug 1789193](https://bugzil.la/1789193)).
- Ein Problem im Inspector behoben, bei dem benutzerdefinierte CSS-Eigenschaften, die auf der Custom Element Root gesetzt waren, nicht angezeigt wurden ([Firefox Bug 1836755](https://bugzil.la/1836755)).
- Zeigt im Network Monitor an, ob die Anfrage mit DNS über HTTPS gelöst wurde ([Firefox Bug 1810195](https://bugzil.la/1810195)).
- `Proxy-Authorization` Header im Network Monitor entfernt ([Firefox Bug 1816115](https://bugzil.la/1816115)).
