---
title: Firefox 135 für Entwickler
slug: Mozilla/Firefox/Releases/135
l10n:
  sourceCommit: 80422f01b928a8f180187ca69adeedb26e02add0
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 135, die Entwickler betreffen. Firefox 135 wurde am [4. Februar 2025](https://whattrainisitnow.com/release/?version=135) veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen.

### CSS

#### Entfernungen

- Die [`-moz-user-input`](/de/docs/Web/CSS/-moz-user-input)-CSS-Eigenschaft erlaubte das Deaktivieren von Eingabefeldern. Die Eigenschaft ist nun veraltet und wurde entfernt ([Firefox-Bug 1935198](https://bugzil.la/1935198)).

### JavaScript

- Der [JSON parse with source proposal](https://github.com/tc39/proposal-json-parse-with-source) wird nun unterstützt. Dieser Vorschlag zielt darauf ab, Probleme im Zusammenhang mit Präzisionsverlust bei der Umwandlung von Werten wie großen Gleitkommazahlen und Datumswerten zwischen JavaScript-Werten und JSON-Text zu mindern ([Firefox-Bug 1934622](https://bugzil.la/1934622)). Insbesondere stehen die folgenden Funktionen jetzt zur Verfügung:
  - Das `JSON.parse()`-[`reviver`-Parameter-`context`-Argument](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#the_reviver_parameter): Bietet Zugriff auf den ursprünglichen JSON-Quelltext, der analysiert wurde.
  - [`JSON.isRawJSON()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/isRawJSON): Prüft, ob ein Wert ein von `JSON.rawJSON()` zurückgegebenes Objekt ist.
  - [`JSON.rawJSON()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/rawJSON): Erstellt ein "rohes JSON"-Objekt, das einen Teil von JSON-Text enthält und in einem Objekt enthalten sein kann, um den angegebenen Wert beim Serialisieren des Objekts beizubehalten.

### Sicherheit

- Die [Certificate Transparency](/de/docs/Web/Security/Certificate_Transparency) ist ein Standard, der sicherstellt, dass Zertifikate öffentlich bekannt gemacht werden, bevor Webbrowser ihnen vertrauen. Firefox unterstützt dieses Feature jetzt in Desktop-Versionen (nicht auf Android).
  Dies betrifft nur Server, die Zertifikate verwenden, die von einer Zertifizierungsstelle im Root-CA-Programm von Mozilla ausgegeben wurden.
  ([Firefox-Bug 1938242](https://bugzil.la/1938242)).

### APIs

- Die [`PublicKeyCredential.getClientCapabilities()`](/de/docs/Web/API/PublicKeyCredential/getClientCapabilities_static)-statische Methode wird unterstützt, sodass eine Web-App überprüfen kann, ob ein Browser bestimmte [WebAuthn](/de/docs/Web/API/Web_Authentication_API)-Funktionen und [Erweiterungen](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions) aktiviert hat, ohne Benutzer-Agent-Sniffing nutzen zu müssen.
  ([Firefox-Bug 1884466](https://bugzil.la/1884466)).

#### DOM

#### Medien, WebRTC und Web Audio

- Die Eigenschaften [`mid`](/de/docs/Web/API/RTCOutboundRtpStreamStats/mid) und [`rid`](/de/docs/Web/API/RTCOutboundRtpStreamStats/rid) der [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats)-Schnittstelle sowie die Eigenschaft [`mid`](/de/docs/Web/API/RTCOutboundRtpStreamStats/mid) der [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Schnittstelle werden nun unterstützt. ([Firefox-Bug 1643001](https://bugzil.la/1643001)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Um Benutzereingaben realistischer zu gestalten und reale Benutzerinteraktionen im Browser besser zu simulieren, wurde die Verarbeitung der Aktionssequenzen der `Perform Actions`-Befehle in Marionette und WebDriver BiDi vom Content-Prozess in den Parent-Prozess verschoben. Während Ereignisse weiterhin synchron vom Content-Prozess gesendet werden, werden sie jetzt asynchron über IPC-Aufrufe ausgelöst, die vom Parent-Prozess ausgehen ([Firefox-Bug 1922077](https://bugzilla.mozilla.org/show_bug.cgi?id=1922077)).

  Aufgrund dieser signifikanten Änderung können einige Regressionen bestehen. Sollten Sie auf Probleme stoßen, melden Sie bitte einen [Bug für den Remote-Agent](https://bugzilla.mozilla.org/enter_bug.cgi?product=Remote%20Protocol&component=Remote%20Agent). Falls die Regressionen die Testausführung blockieren, können Sie vorübergehend zum vorherigen Verhalten zurückkehren, indem Sie die Firefox-Einstellung `remote.events.async.enabled` auf `false` setzen.

- Durch die Verarbeitung von Aktionen im Parent-Prozess wurden auch die folgenden Probleme behoben:

  - Die korrekte Warteschlangenverwaltung der Aktionssequenzen ohne Race-Conditions wird nun unterstützt. Dies ist insbesondere für den WebDriver-BiDi-Befehl `input.performActions` wichtig, der mehrfach parallel aufgerufen werden kann und die enqueueten Aktionen sequentiell ausführen muss ([Firefox-Bug 1915798](https://bugzilla.mozilla.org/show_bug.cgi?id=1915798)).

  - Beim Dispatching von Aktionen wird die `input cancel list` nun korrekt erst nach erfolgreicher Ausführung der Aktion aktualisiert. Vorher konnte eine Rückgängigmachungsaktion bestehen bleiben, was zu unerwarteten Nebeneffekten beim Zurücksetzen des Zustands der `input source` führte ([Firefox-Bug 1930845](https://bugzilla.mozilla.org/show_bug.cgi?id=1930845)).

  - Einzelne Aktionen werden nun bei der Ausführung erneut versucht, insbesondere in Situationen, in denen eine einzelne Aktion eine Navigation auslöst, die den aktuellen Browsing-Kontext ersetzt ([Firefox-Bug 1930530](https://bugzilla.mozilla.org/show_bug.cgi?id=1930530), [Firefox-Bug 1930090](https://bugzilla.mozilla.org/show_bug.cgi?id=1930090)).

  - Ein Fehler `TypeError: can't access property "getActor", browsingContext.currentWindowGlobal is null` trat auf, wenn eine Aktion (nicht die letzte) in der Aktionskette das Fenster schloss und die verbleibenden Aktionen noch ausgeführt wurden ([Firefox-Bug 1932916](https://bugzilla.mozilla.org/show_bug.cgi?id=1932916)).

- Einige Marionette- und WebDriver-BiDi-Befehle, die intern darauf angewiesen sind, dass ein `requestAnimationFrame` ausgegeben wird, bevor sie zurückkehren, hingen, wenn der aktuelle Browsing-Kontext während ihrer Ausführung navigiert wurde ([Firefox-Bug 1937118](https://bugzilla.mozilla.org/show_bug.cgi?id=1937118)).

#### WebDriver BiDi

- Unterstützung für das `format`-Feld im Befehl `browsingContext.captureScreenshot` wurde hinzugefügt, wodurch Clients unterschiedliche Dateiformate (`image/png` und `image/jpg` derzeit unterstützt) und die Kompressionsqualität für Screenshots festlegen können ([Firefox-Bug 1861737](https://bugzilla.mozilla.org/show_bug.cgi?id=1861737)).

## Experimentelle Webfunktionen

Diese Funktionen sind neu in Firefox 135, aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie die entsprechende Einstellung auf der `about:config`-Seite und setzen Sie sie auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Temporal-API** (Nightly-Version): <code>javascript.options.experimental.temporal</code>. Das [Temporal-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal) zielt darauf ab, die Arbeit mit Daten und Zeiten in verschiedenen Szenarien zu vereinfachen, einschließlich integrierter Zeitzonen- und Kalenderdarstellungen. ([Firefox-Bug 1912511](https://bugzil.la/1912511)).
- **Prioritized Task Scheduling API**: <code>dom.enable_web_task_scheduling</code>.
  Die [Prioritized Task Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API) bietet eine standardisierte Möglichkeit, alle Aufgaben einer Anwendung zu priorisieren, unabhängig davon, ob sie im Code eines Websiteentwicklers oder in Drittanbieter-Bibliotheken und -Frameworks definiert wurden.
  Diese wurde vorübergehend in Nightly-Builds deaktiviert, um [Fehler im praktischen Einsatz](https://bugzil.la/1937232) zu vermeiden.
  ([Firefox-Bug 1938242](https://bugzil.la/1938242)).

## Ältere Versionen

{{Firefox_for_developers}}
