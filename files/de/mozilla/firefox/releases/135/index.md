---
title: Firefox 135 für Entwickler
slug: Mozilla/Firefox/Releases/135
l10n:
  sourceCommit: 6908f0db8310b438c94ac3bd49755b19bad6c931
---

{{FirefoxSidebar}}

Dieser Artikel enthält Informationen über die Änderungen in Firefox 135, die Entwickler betreffen. Firefox 135 wurde am [4. Februar 2025](https://whattrainisitnow.com/release/?version=135) veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen

### CSS

#### Entfernt

- Die CSS-Eigenschaft [`-moz-user-input`](/de/docs/Web/CSS/-moz-user-input) erlaubte es, Eingabefelder zu deaktivieren. Diese Eigenschaft ist nun veraltet und wurde entfernt ([Firefox-Bug 1935198](https://bugzil.la/1935198)).

### JavaScript

- Der [JSON-Parse-mit-Quelle-Vorschlag](https://github.com/tc39/proposal-json-parse-with-source) wird jetzt unterstützt. Dieser Vorschlag zielt darauf ab, Funktionen bereitzustellen, die Probleme beim Präzisionsverlust bei der Umwandlung von Werten wie großen Gleitkommazahlen und Datumswerten zwischen JavaScript-Werten und JSON-Texten abmildern ([Firefox-Bug 1934622](https://bugzil.la/1934622)). Insbesondere sind die folgenden Funktionen jetzt verfügbar:
  - Das `reviver` Parameter `context` Argument von `JSON.parse()` bietet Zugriff auf den ursprünglichen JSON-Quelltext, der geparst wurde.
  - [`JSON.isRawJSON()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/isRawJSON): Testet, ob ein Wert ein Objekt ist, das von `JSON.rawJSON()` zurückgegeben wurde.
  - [`JSON.rawJSON()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/rawJSON): Erstellt ein "rohes JSON"-Objekt, das ein JSON-Textstück enthält, das dann in ein Objekt aufgenommen werden kann, um den spezifizierten Wert zu bewahren, wenn das Objekt in einen JSON-String umgewandelt wird.

### Sicherheit

- [Zertifikattransparenz](/de/docs/Web/Security/Certificate_Transparency) ist ein Standard, der sicherstellt, dass Zertifikate öffentlich bekannt gegeben werden, bevor Webbrowser ihnen vertrauen. Firefox unterstützt dieses Feature jetzt in Desktop-Versionen (aber nicht auf Android).
  Dies betrifft nur Server, die Zertifikate verwenden, die von einer Zertifizierungsstelle im Mozilla Root CA-Programm ausgestellt wurden.
  ([Firefox-Bug 1938242](https://bugzil.la/1938242)).

### APIs

- Die statische Methode [`PublicKeyCredential.getClientCapabilities()`](/de/docs/Web/API/PublicKeyCredential/getClientCapabilities_static) wird unterstützt. Diese Methode ermöglicht es einer Web-Anwendung, zu überprüfen, ob ein Browser bestimmte [WebAuthn](/de/docs/Web/API/Web_Authentication_API)-Fähigkeiten und [Erweiterungen](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions) aktiviert hat, ohne auf User Agent Sniffing zurückgreifen zu müssen.
  ([Firefox-Bug 1884466](https://bugzil.la/1884466)).

#### DOM

#### Medien, WebRTC und Web Audio

- Die Eigenschaften [`mid`](/de/docs/Web/API/RTCOutboundRtpStreamStats/mid) und [`rid`](/de/docs/Web/API/RTCOutboundRtpStreamStats/rid) des [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats)-Interfaces, sowie die Eigenschaft [`mid`](/de/docs/Web/API/RTCOutboundRtpStreamStats/mid) des [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Interfaces werden jetzt unterstützt. ([Firefox-Bug 1643001](https://bugzil.la/1643001)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Um Benutzereingaben realitätsnäher zu gestalten und echte Benutzerinteraktionen im Browser besser zu simulieren, haben wir die Verarbeitung der Aktionssequenzen der `Perform Actions`-Befehle sowohl in Marionette als auch in WebDriver BiDi vom Inhaltsprozess in den übergeordneten Prozess verlagert. Während Ereignisse immer noch synchron aus dem Inhaltsprozess gesendet werden, werden sie jetzt asynchron über IPC-Aufrufe ausgelöst, die aus dem übergeordneten Prozess stammen ([Firefox-Bug 1922077](https://bugzilla.mozilla.org/show_bug.cgi?id=1922077)).

  Aufgrund dieser signifikanten Änderung können immer noch einige Regressionen bestehen. Wenn Sie Probleme feststellen, melden Sie bitte einen Bug für den Remote-Agenten unter [Bug melden für Remote Agent](https://bugzilla.mozilla.org/enter_bug.cgi?product=Remote%20Protocol&component=Remote%20Agent). Wenn die Regressionen die Testausführung blockieren, können Sie vorübergehend zum vorherigen Verhalten zurückkehren, indem Sie die Firefox-Einstellung `remote.events.async.enabled` auf `false` setzen.

- Mit der Verarbeitung von Aktionen, die jetzt im übergeordneten Prozess durchgeführt wird, wurden auch die folgenden Probleme behoben:

  - Wir unterstützen nun die ordnungsgemäße Warteschlangenbildung von Aktionssequenzen ohne Race-Conditions. Dies ist besonders wichtig für den `input.performActions`-Befehl von WebDriver BiDi, der mehrmals parallel aufgerufen werden kann und die enqueuten Aktionen sequentiell ausführen muss ([Firefox-Bug 1915798](https://bugzilla.mozilla.org/show_bug.cgi?id=1915798)).

  - Beim Versenden von Aktionen wird die `input cancel list` jetzt korrekt aktualisiert, nur nachdem die Aktion erfolgreich versendet wurde. Zuvor konnte, wenn eine Aktion nicht ausgeführt werden konnte, eine Rückwärtsaktion an Ort und Stelle bleiben, was zu unerwarteten Nebenwirkungen führen konnte, wenn der Zustand der `input source` zurückgesetzt wurde ([Firefox-Bug 1930845](https://bugzilla.mozilla.org/show_bug.cgi?id=1930845)).

  - Bei der Ausführung von Aktionen werden jetzt einzelne Aktionen während des Dispatches insbesondere in Situationen erneut versucht, in denen eine einzelne Aktion eine Navigation auslöst, die den aktuellen Browsing-Kontext ersetzt ([Firefox-Bug 1930530](https://bugzilla.mozilla.org/show_bug.cgi?id=1930530), [Firefox-Bug 1930090](https://bugzilla.mozilla.org/show_bug.cgi?id=1930090)).

  - Bei der Ausführung von Aktionen trat ein `TypeError: can't access property "getActor", browsingContext.currentWindowGlobal is null`-Fehler auf, wenn eine Aktion (nicht die letzte) in der Aktionskette das Fenster schloss und die verbleibenden Aktionen noch gesendet wurden ([Firefox-Bug 1932916](https://bugzilla.mozilla.org/show_bug.cgi?id=1932916)).

- Einige Marionette- und WebDriver BiDi-Befehle, die intern darauf angewiesen sind, dass ein `requestAnimationFrame` emittiert wird, bevor sie zurückkehren, würden sich aufhängen, wenn der aktuelle Browsing-Kontext während ihrer Ausführung navigiert wurde ([Firefox-Bug 1937118](https://bugzilla.mozilla.org/show_bug.cgi?id=1937118)).

#### WebDriver BiDi

- Unterstützung wurde für das `format`-Feld im `browsingContext.captureScreenshot`-Befehl hinzugefügt, sodass Clients verschiedene Dateiformate angeben können (`image/png` und `image/jpeg` werden derzeit unterstützt) und die Kompressionsqualität für Screenshots definieren können ([Firefox-Bug 1861737](https://bugzilla.mozilla.org/show_bug.cgi?id=1861737)).

## Änderungen für Add-on-Entwickler

- {{WebExtAPIRef("commands.update")}} kann jetzt Tastenkombinationen für Befehle den Tasten `F13` bis `F19` zuweisen. Erweiterungen können jedoch diese Tasten nicht über den [`commands` manifest.json key](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands) zuweisen. Benutzer können diese Tasten auch über [Erweiterungs-Tastenkürzel verwalten](https://support.mozilla.org/en-US/kb/manage-extension-shortcuts-firefox) zuweisen ([Firefox-Bug 1924542](https://bugzil.la/1924542))

## Experimentelle Webfeatures

Diese Funktionen sind neu in Firefox 135, sind aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie die entsprechende Präferenz auf der `about:config`-Seite und setzen Sie sie auf `true`. Sie finden weitere solche Funktionen auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Temporal API** (Nightly-Version): <code>javascript.options.experimental.temporal</code>. Das [Temporal-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal) zielt darauf ab, die Arbeit mit Daten und Zeiten in verschiedenen Szenarien zu vereinfachen, mit eingebauten Zeitzonen- und Kalenderdarstellungen. ([Firefox-Bug 1912511](https://bugzil.la/1912511)).
- **API zur priorisierten Aufgabenplanung**: <code>dom.enable_web_task_scheduling</code>.
  Die [API zur priorisierten Aufgabenplanung](/de/docs/Web/API/Prioritized_Task_Scheduling_API) bietet eine standardisierte Möglichkeit, alle Aufgaben einer Anwendung zu priorisieren, unabhängig davon, ob sie im Code eines Website-Entwicklers oder in Drittanbieter-Bibliotheken und -Frameworks definiert sind.
  Dies wurde vorübergehend in den Nightly-Builds deaktiviert, um [Schäden in freier Wildbahn](https://bugzil.la/1937232) zu vermeiden.
  ([Firefox-Bug 1938242](https://bugzil.la/1938242)).

## Ältere Versionen

{{Firefox_for_developers}}
