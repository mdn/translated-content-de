---
title: Firefox 135 für Entwickler
slug: Mozilla/Firefox/Releases/135
l10n:
  sourceCommit: 38b5682c1170760bb5f696ab675690ca6054f634
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 135, die Entwickler betreffen. Firefox 135 ist die aktuelle [Beta-Version von Firefox](https://www.mozilla.org/en-US/firefox/channel/desktop/#nightly) und wird am [4. Februar 2025](https://whattrainisitnow.com/release/?version=135) veröffentlicht.

## Änderungen für Webentwickler

### Entwickler-Tools

### HTML

#### Entfernte Elemente

### CSS

#### Entfernte Elemente

### JavaScript

- Der [JSON parse with source proposal](https://github.com/tc39/proposal-json-parse-with-source) wird jetzt unterstützt. Dieses Feature zielt darauf ab, Probleme bzgl. Präzisionsverlust bei der Umwandlung von Werten wie großen Fließkommazahlen und Datumswerten zwischen JavaScript-Werten und JSON-Texten zu mildern ([Firefox-Bug 1934622](https://bugzil.la/1934622)). Konkret sind die folgenden Features jetzt verfügbar:
  - Das `JSON.parse()` [`reviver`-Parameter `context`-Argument](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#the_reviver_parameter): Bietet Zugriff auf den ursprünglichen JSON-Quelltext, der geparst wurde.
  - [`JSON.isRawJSON()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/isRawJSON): Testet, ob ein Wert ein Objekt ist, das von `JSON.rawJSON()` zurückgegeben wird.
  - [`JSON.rawJSON()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/rawJSON): Erstellt ein "rohes JSON"-Objekt, das ein Stück JSON-Text enthält, welches dann in ein Objekt eingebunden werden kann, um den angegebenen Wert zu bewahren, wenn dieses Objekt zu Text umgewandelt wird.

#### Entfernte Elemente

### SVG

#### Entfernte Elemente

### HTTP

#### Entfernte Elemente

### Sicherheit

- [Certificate Transparency](/de/docs/Web/Security/Certificate_Transparency) ist ein Standard, der sicherstellt, dass Zertifikate öffentlich bekannt gemacht werden, bevor Webbrowser ihnen vertrauen. Firefox unterstützt dieses Feature jetzt in Desktop-Versionen (aber nicht auf Android).
  Dies betrifft nur Server, die Zertifikate verwenden, die von einer Zertifizierungsstelle im Mozilla Root CA Program ausgestellt wurden.
  ([Firefox-Bug 1938242](https://bugzil.la/1938242)).

#### Entfernte Elemente

### APIs

- Die statische Methode [`PublicKeyCredential.getClientCapabilities()`](/de/docs/Web/API/PublicKeyCredential/getClientCapabilities_static) wird unterstützt. Sie ermöglicht es einer Web-App zu prüfen, ob ein Browser bestimmte [WebAuthn](/de/docs/Web/API/Web_Authentication_API)-Fähigkeiten und [Erweiterungen](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions) aktiviert hat, ohne auf User-Agent-Sniffing zurückgreifen zu müssen.
  ([Firefox-Bug 1884466](https://bugzil.la/1884466)).

#### DOM

#### Medien, WebRTC und Web Audio

- Die Eigenschaften [`mid`](/de/docs/Web/API/RTCOutboundRtpStreamStats/mid) und [`rid`](/de/docs/Web/API/RTCOutboundRtpStreamStats/rid) des [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats)-Interfaces sowie die[`mid`](/de/docs/Web/API/RTCOutboundRtpStreamStats/mid)-Eigenschaft des [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Interfaces werden nun unterstützt. ([Firefox-Bug 1643001](https://bugzil.la/1643001)).

#### Entfernte Elemente

### WebAssembly

#### Entfernte Elemente

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Um Benutzereingaben realistischer zu gestalten und echte Benutzerinteraktionen im Browser besser zu simulieren, haben wir die Aktionssequenz-Verarbeitung der `Perform Actions`-Befehle sowohl in Marionette als auch in WebDriver BiDi vom Inhaltsprozess in den Hauptprozess verschoben. Während Ereignisse immer noch synchron vom Inhaltsprozess gesendet werden, werden sie jetzt asynchron über IPC-Aufrufe ausgelöst, die vom Hauptprozess ausgehen ([Firefox-Bug 1922077](https://bugzilla.mozilla.org/show_bug.cgi?id=1922077)).

  Aufgrund dieser signifikanten Änderung können einige Regressionen weiterhin bestehen. Wenn Sie auf Probleme stoßen, melden Sie bitte einen [Fehler für den Remote Agent](https://bugzilla.mozilla.org/enter_bug.cgi?product=Remote%20Protocol&component=Remote%20Agent). Sollten die Regressionen die Testausführung blockieren, können Sie vorübergehend zum vorherigen Verhalten zurückkehren, indem Sie die Firefox-Präferenz `remote.events.async.enabled` auf `false` setzen.

- Mit der Verarbeitung von Aktionen jetzt im Hauptprozess wurden auch folgende Probleme behoben:

  - Wir unterstützen jetzt das ordnungsgemäße Einreihen von Aktionssequenzen ohne Race-Conditions. Dies ist besonders wichtig für den Befehl `input.performActions` von WebDriver BiDi, der mehrfach parallel aufgerufen werden kann und die eingereihten Aktionen nacheinander ausführen muss ([Firefox-Bug 1915798](https://bugzilla.mozilla.org/show_bug.cgi?id=1915798)).

  - Beim Senden von Aktionen wird die `input cancel list` nun korrekt erst dann aktualisiert, wenn die Aktion erfolgreich gesendet wurde. Vorher konnte, wenn eine Aktion nicht ausgeführt werden konnte, eine Rückwärtsaktion stehen bleiben, was zu unerwarteten Nebeneffekten beim Zurücksetzen des Zustands der `input source` führen konnte ([Firefox-Bug 1930845](https://bugzilla.mozilla.org/show_bug.cgi?id=1930845)).

  - Bei der Ausführung von Aktionen werden einzelne Aktionen nun während des Sendens erneut versucht, insbesondere in Situationen, in denen eine einzelne Aktion eine Navigation auslöst, die den aktuellen Browsing-Kontext ersetzt ([Firefox-Bug 1930530](https://bugzilla.mozilla.org/show_bug.cgi?id=1930530), [Firefox-Bug 1930090](https://bugzilla.mozilla.org/show_bug.cgi?id=1930090)).

  - Bei der Ausführung von Aktionen trat ein Fehler `TypeError: can't access property "getActor", browsingContext.currentWindowGlobal is null` auf, wenn eine Aktion (nicht die letzte) in der Aktionskette das Fenster schloss und die verbleibenden Aktionen noch gesendet wurden ([Firefox-Bug 1932916](https://bugzilla.mozilla.org/show_bug.cgi?id=1932916)).

- Einige Marionette- und WebDriver BiDi-Befehle, die intern darauf angewiesen sind, dass ein `requestAnimationFrame` gesendet wird, bevor sie zurückgeben, würden hängen bleiben, wenn der aktuelle Browsing-Kontext während ihrer Ausführung navigiert wurde ([Firefox-Bug 1937118](https://bugzilla.mozilla.org/show_bug.cgi?id=1937118)).

#### WebDriver BiDi

- Unterstützung für das `format`-Feld im Befehl `browsingContext.captureScreenshot` hinzugefügt, mit dem Clients verschiedene Dateiformate angeben können (`image/png` und `image/jpg` werden derzeit unterstützt) und die Kompressionsqualität für Screenshots definieren können ([Firefox-Bug 1861737](https://bugzilla.mozilla.org/show_bug.cgi?id=1861737)).

## Änderungen für Add-on-Entwickler

### Entfernte Elemente

### Sonstiges

## Experimentelle Webfeatures

Diese Features sind neu in Firefox 135 verfügbar, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie auf der Seite `about:config` nach der entsprechenden Präferenz und setzen Sie diese auf `true`. Weitere solche Features finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **Priorisiertes Task Scheduling API**: <code>dom.enable_web_task_scheduling</code>.
  Die [Priorisierte Task Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API) bietet eine standardisierte Möglichkeit, alle Aufgaben, die zu einer Anwendung gehören, zu priorisieren, egal ob sie im Code eines Website-Entwicklers oder in Drittanbieter-Bibliotheken und -Frameworks definiert sind.
  Dies wurde vorübergehend in Nightly-Builds deaktiviert, um [Fehler im Natursystem](https://bugzil.la/1937232) zu vermeiden.
  ([Firefox-Bug 1938242](https://bugzil.la/1938242)).

## Ältere Versionen

{{Firefox_for_developers}}
