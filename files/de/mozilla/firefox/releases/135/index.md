---
title: Versionshinweise für Entwickler zu Firefox 135
short-title: Firefox 135
slug: Mozilla/Firefox/Releases/135
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

Dieser Artikel liefert Informationen über die Änderungen in Firefox 135, die Entwickler betreffen. Firefox 135 wurde am [4. Februar 2025](https://whattrainisitnow.com/release/?version=135) veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen

### CSS

#### Entfernungen

- Die [`-moz-user-input`](/de/docs/Web/CSS/Reference/Properties/-moz-user-input) CSS-Eigenschaft ermöglichte es, Eingabefelder zu deaktivieren. Die Eigenschaft ist nun veraltet und wurde entfernt ([Firefox Bug 1935198](https://bugzil.la/1935198)).

### JavaScript

- Der [JSON parse with source-Vorschlag](https://github.com/tc39/proposal-json-parse-with-source) wird jetzt unterstützt, was darauf abzielt, Funktionen bereitzustellen, um Probleme mit dem Präzisionsverlust beim Konvertieren von Werten wie großen Fließkommazahlen und Datumswerten zwischen JavaScript-Werten und JSON-Text zu mindern ([Firefox Bug 1934622](https://bugzil.la/1934622)). Insbesondere sind die folgenden Funktionen jetzt verfügbar:
  - Das `JSON.parse()` [`reviver`-Parameter `context`-Argument](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#the_reviver_parameter): Bietet Zugriff auf den ursprünglichen JSON-Quelltext, der geparst wurde.
  - [`JSON.isRawJSON()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/isRawJSON): Testet, ob ein Wert ein Objekt ist, das von `JSON.rawJSON()` zurückgegeben wird.
  - [`JSON.rawJSON()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/rawJSON): Erstellt ein "rohes JSON"-Objekt, das ein Stück JSON-Text enthält, der dann in ein Objekt eingeschlossen werden kann, um den spezifizierten Wert zu bewahren, wenn dieses Objekt stringifiziert wird.

### Sicherheit

- [Certificate Transparency](/de/docs/Web/Security/Defenses/Certificate_Transparency) ist ein Standard, um sicherzustellen, dass Zertifikate öffentlich offengelegt werden, bevor Webbrowser ihnen vertrauen. Firefox unterstützt dieses Feature jetzt in Desktop-Versionen (aber nicht auf Android).
  Dies betrifft nur Server, die Zertifikate verwenden, die von einer Zertifizierungsstelle im Mozilla's Root CA Programm ausgestellt wurden.
  ([Firefox Bug 1938242](https://bugzil.la/1938242)).

### APIs

- Die statische Methode [`PublicKeyCredential.getClientCapabilities()`](/de/docs/Web/API/PublicKeyCredential/getClientCapabilities_static) wird unterstützt und erlaubt es einer Web-App zu prüfen, ob ein Browser bestimmte [WebAuthn](/de/docs/Web/API/Web_Authentication_API)-Fähigkeiten und [Erweiterungen](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions) ermöglicht, ohne auf User-Agent-Sniffing zurückgreifen zu müssen.
  ([Firefox Bug 1884466](https://bugzil.la/1884466)).

#### DOM

#### Medien, WebRTC und Web Audio

- Die [`mid`](/de/docs/Web/API/RTCOutboundRtpStreamStats/mid) und [`rid`](/de/docs/Web/API/RTCOutboundRtpStreamStats/rid) Eigenschaften des [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats) Interface und die [`mid`](/de/docs/Web/API/RTCOutboundRtpStreamStats/mid) Eigenschaft des [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats) Interface werden jetzt unterstützt. ([Firefox Bug 1643001](https://bugzil.la/1643001)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Um Benutzereingaben realistischer zu gestalten und echte Benutzerinteraktionen im Browser besser zu simulieren, haben wir die Verarbeitung der Aktionssequenz der `Perform Actions`-Befehle sowohl in Marionette als auch in WebDriver BiDi vom Inhaltsprozess zum Elternprozess verschoben. Während Ereignisse immer noch synchron vom Inhaltsprozess gesendet werden, werden sie nun asynchron über IPC-Aufrufe ausgelöst, die vom Elternprozess ausgehen ([Firefox Bug 1922077](https://bugzil.la/1922077)).

  Aufgrund dieser erheblichen Änderung können noch einige Regressionen bestehen. Wenn Sie auf Probleme stoßen, reichen Sie bitte einen [Fehlerbericht für den Remote-Agent](https://bugzilla.mozilla.org/enter_bug.cgi?product=Remote%20Protocol&component=Remote%20Agent) ein. Wenn die Regressionsten Tests blockieren, können Sie vorübergehend zum vorherigen Verhalten zurückkehren, indem Sie die Firefox-Einstellung `remote.events.async.enabled` auf `false` setzen.

- Mit der Verarbeitung von Aktionen, die nun im Elternprozess erfolgt, wurden auch die folgenden Probleme behoben:
  - Wir unterstützen jetzt die ordnungsgemäße Warteschlangenbildung von Aktionssequenzen ohne Race-Conditions. Dies ist besonders wichtig für den `input.performActions`-Befehl von WebDriver BiDi, der mehrmals parallel aufgerufen werden kann und die eingereihten Aktionen nacheinander ausführen muss ([Firefox Bug 1915798](https://bugzil.la/1915798)).

  - Beim Versenden von Aktionen wird die `input cancel list` nun erst dann korrekt aktualisiert, nachdem die Aktion erfolgreich versendet wurde. Zuvor konnte, wenn eine Aktion nicht ausgeführt werden konnte, eine Rückwärtsaktion hinterlassen werden, was zu unerwarteten Nebeneffekten führen konnte, wenn der Status der `input source` zurückgesetzt wird ([Firefox Bug 1930845](https://bugzil.la/1930845)).

  - Bei der Ausführung von Aktionen werden einzelne Aktionen nun während des Versendens erneut versucht, insbesondere in Situationen, in denen eine einzelne Aktion eine Navigation auslöst, die den aktuellen Browserkontext ersetzt ([Firefox Bug 1930530](https://bugzil.la/1930530), [Firefox Bug 1930090](https://bugzil.la/1930090)).

  - Bei der Ausführung von Aktionen trat ein `TypeError: can't access property "getActor", browsingContext.currentWindowGlobal is null`-Fehler auf, wenn eine Aktion (nicht die letzte) in der Aktionskette das Fenster geschlossen hat und die verbleibenden Aktionen noch versendet wurden ([Firefox Bug 1932916](https://bugzil.la/1932916)).

- Einige Marionette- und WebDriver BiDi-Befehle, die intern darauf angewiesen sind, dass ein `requestAnimationFrame` ausgegeben wird, bevor sie zurückkehren, würden hängen bleiben, wenn der aktuelle Browserkontext während ihrer Ausführung navigiert wurde ([Firefox Bug 1937118](https://bugzil.la/1937118)).

#### WebDriver BiDi

- Unterstützung für das `format`-Feld im `browsingContext.captureScreenshot`-Befehl hinzugefügt, wodurch Clients verschiedene Dateiformate (derzeit werden `image/png` und `image/jpeg` unterstützt) angeben und die Kompressionsqualität für Screenshots definieren können ([Firefox Bug 1861737](https://bugzil.la/1861737)).

## Änderungen für Add-on-Entwickler

- {{WebExtAPIRef("commands.update")}} kann jetzt Tastenkürzel für Befehle den Tasten `F13` bis `F19` zuweisen. Allerdings können Erweiterungen diese Tasten nicht über den [`commands` manifest.json-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands) zuweisen. Benutzer können auch Funktionen diesen Tasten über [Erweiterte Tastenkürzel verwalten](https://support.mozilla.org/en-US/kb/manage-extension-shortcuts-firefox) zuweisen ([Firefox Bug 1924542](https://bugzil.la/1924542))

## Experimentelle Webfunktionen

Diese Funktionen sind neu in Firefox 135 eingeführt, aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie auf der `about:config` Seite nach dem entsprechenden Schalter und setzen Sie ihn auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **Temporal API** (Nightly Release): <code>javascript.options.experimental.temporal</code>. Das [Temporal-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal) zielt darauf ab, die Arbeit mit Daten und Zeiten in verschiedenen Szenarien zu vereinfachen, mit eingebauten Zeitzonen- und Kalenderdarstellungen. ([Firefox Bug 1912511](https://bugzil.la/1912511)).
- **Priorisierte Task-Scheduling-API**: <code>dom.enable_web_task_scheduling</code>.
  Die [Priorisierte Task-Scheduling-API](/de/docs/Web/API/Prioritized_Task_Scheduling_API) bietet eine standardisierte Möglichkeit, alle Aufgaben, die zu einer Anwendung gehören, zu priorisieren, egal ob sie im Code eines Website-Entwicklers definiert sind oder in Drittanbieter-Bibliotheken und -Frameworks enthalten sind.
  Diese wurde vorübergehend in Nightly-Builds deaktiviert, um [Schäden im Feld zu vermeiden](https://bugzil.la/1937232).
  ([Firefox Bug 1938242](https://bugzil.la/1938242)).
