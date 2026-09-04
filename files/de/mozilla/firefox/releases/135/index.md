---
title: Firefox 135 Versionshinweise für Entwickler
short-title: Firefox 135
slug: Mozilla/Firefox/Releases/135
l10n:
  sourceCommit: f4c14731a1a157fc8d8f7357ac4d74d14a7d7fb5
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 135, die Entwickler betreffen. Firefox 135 wurde am [4. Februar 2025](https://whattrainisitnow.com/release/?version=135) veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen

### CSS

#### Entfernt

- Die [`-moz-user-input`](/de/docs/Web/CSS/Reference/Properties/-moz-user-input) CSS-Eigenschaft erlaubte es Ihnen, Eingabefelder zu deaktivieren. Diese Eigenschaft ist nun veraltet und wurde entfernt ([Firefox-Bug 1935198](https://bugzil.la/1935198)).

### JavaScript

- Der [JSON parse with source proposal](https://github.com/tc39/proposal-json-parse-with-source) wird jetzt unterstützt, der Funktionen bereitstellen soll, um Probleme beim Präzisionsverlust beim Konvertieren von Werten wie großen Fließkommazahlen und Datumswerten zwischen JavaScript-Werten und JSON-Text zu mindern ([Firefox-Bug 1934622](https://bugzil.la/1934622)). Insbesondere sind jetzt die folgenden Funktionen verfügbar:
  - Der `JSON.parse()` [`reviver`-Parameter `context` Argument](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#the_reviver_parameter): Ermöglicht den Zugriff auf den ursprünglichen JSON-Quelltext, der geparst wurde.
  - [`JSON.isRawJSON()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/isRawJSON): Prüft, ob ein Wert ein von `JSON.rawJSON()` zurückgegebenes Objekt ist.
  - [`JSON.rawJSON()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/rawJSON): Erstellt ein "rohes JSON"-Objekt, das ein Stück JSON-Text enthält, das dann in ein Objekt aufgenommen werden kann, um den angegebenen Wert zu bewahren, wenn dieses Objekt als String serialisiert wird.

### Sicherheit

- [Certificate Transparency](/de/docs/Web/Security/Defenses/Certificate_Transparency) ist ein Standard, um sicherzustellen, dass Zertifikate öffentlich bekannt gemacht werden, bevor Webbrowser ihnen vertrauen. Firefox unterstützt dieses Feature jetzt auf Desktop-Versionen (aber nicht auf Android).
  Dies betrifft nur Server, die Zertifikate verwenden, die von einer Zertifizierungsstelle im Mozilla Root CA-Programm ausgestellt wurden.
  ([Firefox-Bug 1938242](https://bugzil.la/1938242)).

### APIs

- Die statische Methode [`PublicKeyCredential.getClientCapabilities()`](/de/docs/Web/API/PublicKeyCredential/getClientCapabilities_static) wird unterstützt, welche eine Webanwendung die Möglichkeit bietet, zu überprüfen, ob ein Browser bestimmte [WebAuthn](/de/docs/Web/API/Web_Authentication_API)-Fähigkeiten und [Erweiterungen](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions) aktiviert, ohne sich auf Benutzeragenten-Sniffing verlassen zu müssen.
  ([Firefox-Bug 1884466](https://bugzil.la/1884466)).

#### DOM

#### Medien, WebRTC und Web Audio

- Die [`mid`](/de/docs/Web/API/RTCOutboundRtpStreamStats/mid) und [`rid`](/de/docs/Web/API/RTCOutboundRtpStreamStats/rid) Eigenschaften des [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats) Interfaces, und die [`mid`](/de/docs/Web/API/RTCOutboundRtpStreamStats/mid) Eigenschaft des [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats) Interfaces werden jetzt unterstützt. ([Firefox-Bug 1643001](https://bugzil.la/1643001)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Um Benutzereingaben realistischer zu gestalten und echte Benutzerinteraktionen im Browser besser zu simulieren, haben wir die Verarbeitung der Aktionssequenz der `Perform Actions`-Befehle sowohl in Marionette als auch in WebDriver BiDi vom Inhaltsprozess in den Hauptprozess verschoben. Während Ereignisse weiterhin synchron vom Inhaltsprozess gesendet werden, werden sie jetzt asynchron über IPC-Aufrufe ausgelöst, die vom Hauptprozess stammen ([Firefox-Bug 1922077](https://bugzil.la/1922077)).

  Aufgrund dieser signifikanten Änderung können noch einige Regressionen vorhanden sein. Wenn Sie auf Probleme stoßen, reichen Sie bitte einen [Bug für den Remote Agent](https://bugzilla.mozilla.org/enter_bug.cgi?product=Remote%20Protocol&component=Remote%20Agent) ein. Wenn die Regressionen die Testausführung blockieren, können Sie vorübergehend zum vorherigen Verhalten zurückkehren, indem Sie die Firefox-Einstellung `remote.events.async.enabled` auf `false` setzen.

- Durch die nun im Hauptprozess durchgeführte Verarbeitung von Aktionen wurden folgende Probleme ebenfalls behoben:
  - Wir unterstützen jetzt die ordnungsgemäße Warteschlange von Aktionssequenzen ohne Race-Bedingungen. Dies ist besonders wichtig für den `input.performActions`-Befehl von WebDriver BiDi, der mehrmals parallel aufgerufen werden kann und die in die Warteschlange gestellten Aktionen sequentiell ausführen muss ([Firefox-Bug 1915798](https://bugzil.la/1915798)).

  - Beim Versenden von Aktionen wird die `input cancel list` nun korrekt nur nach erfolgreicher Ausführung der Aktion aktualisiert. Zuvor konnte eine Rückwärtsaktion verbleiben, wenn eine Aktion nicht ausgeführt wurde, was zu unerwarteten Nebeneffekten beim Zurücksetzen des `input source`-Zustands führen konnte ([Firefox-Bug 1930845](https://bugzil.la/1930845)).

  - Beim Ausführen von Aktionen werden jetzt bei der Auslieferung einzelne Aktionen gesondert wiederholt, insbesondere in Situationen, in denen eine einzelne Aktion eine Navigation auslöst, die den aktuellen Browsing-Kontext ersetzt ([Firefox-Bug 1930530](https://bugzil.la/1930530), [Firefox-Bug 1930090](https://bugzil.la/1930090)).

  - Beim Ausführen von Aktionen trat ein `TypeError: can't access property "getActor", browsingContext.currentWindowGlobal is null`-Fehler auf, wenn eine Aktion (nicht die letzte) im Aktionsablauf das Fenster schloss und die verbleibenden Aktionen noch übermittelt wurden ([Firefox-Bug 1932916](https://bugzil.la/1932916)).

- Einige Marionette- und WebDriver-BiDi-Befehle, die intern darauf angewiesen sind, dass ein `requestAnimationFrame` emittiert wird, bevor sie zurückkehren, würden hängen bleiben, wenn der aktuelle Browsing-Kontext während ihrer Ausführung navigiert wurde ([Firefox-Bug 1937118](https://bugzil.la/1937118)).

#### WebDriver BiDi

- Unterstützung für das `format`-Feld im `browsingContext.captureScreenshot`-Befehl hinzugefügt, das es Clients ermöglicht, verschiedene Dateiformate zu spezifizieren (`image/png` und `image/jpeg` werden derzeit unterstützt) und die Komprimierungsqualität für Screenshots zu definieren ([Firefox-Bug 1861737](https://bugzil.la/1861737)).

## Änderungen für Add-on-Entwickler

- {{WebExtAPIRef("commands.update")}} kann jetzt Tastenkombinationen für Befehle den Tasten `F13` bis `F19` zuweisen. Erweiterungen können diese Tasten jedoch nicht über den [`commands` manifest.json key](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands) zuweisen. Nutzer können diese Tasten auch über [Manage Extension Shortcuts](https://support.mozilla.org/en-US/kb/manage-extension-shortcuts-firefox) Funktionen zuweisen ([Firefox-Bug 1924542](https://bugzil.la/1924542)).

## Experimentelle Web-Features

Diese Features sind neu in Firefox 135 integriert, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie die entsprechende Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`. Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Temporal API** (Nightly-Version): <code>javascript.options.experimental.temporal</code>. Das [Temporal-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal) zielt darauf ab, die Arbeit mit Daten und Uhrzeiten in verschiedenen Szenarien zu vereinfachen, mit integrierten Zeitzonen- und Kalenderdarstellungen. ([Firefox-Bug 1912511](https://bugzil.la/1912511)).
- **Prioritized Task Scheduling API**: <code>dom.enable_web_task_scheduling</code>.
  Die [Prioritized Task Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API) bietet eine standardisierte Möglichkeit, alle Aufgaben einer Anwendung zu priorisieren, egal ob sie im Code eines Website-Entwicklers oder in Drittanbieter-Bibliotheken und Frameworks definiert sind.
  Diese wurde vorübergehend in Nightly-Builds deaktiviert, um [Schäden im Feld](https://bugzil.la/1937232) zu vermeiden.
  ([Firefox-Bug 1938242](https://bugzil.la/1938242)).
