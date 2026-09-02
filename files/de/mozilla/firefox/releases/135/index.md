---
title: Firefox 135 Versionshinweise für Entwickler
short-title: Firefox 135
slug: Mozilla/Firefox/Releases/135
l10n:
  sourceCommit: b4f5ddf589cb20df5a6d2b2b78e7fdb8ac29ce6f
---

Dieser Artikel enthält Informationen über die Änderungen in Firefox 135, die Entwickler betreffen. Firefox 135 wurde am [4. Februar 2025](https://whattrainisitnow.com/release/?version=135) veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen

### CSS

#### Entfernt

- Die [`-moz-user-input`](/de/docs/Web/CSS/Reference/Properties/-moz-user-input) CSS-Eigenschaft, die es Ihnen ermöglichte, Eingabefelder zu deaktivieren, ist nun veraltet und wurde entfernt ([Firefox Fehler 1935198](https://bugzil.la/1935198)).

### JavaScript

- Der [JSON parse with source proposal](https://github.com/tc39/proposal-json-parse-with-source) wird jetzt unterstützt, was darauf abzielt, Funktionen bereitzustellen, um Probleme beim Präzisionsverlust beim Konvertieren von Werten wie großen Gleitkommazahlen und Datumswerten zwischen JavaScript-Werten und JSON-Text zu mildern ([Firefox Fehler 1934622](https://bugzil.la/1934622)). Insbesondere sind die folgenden Funktionen jetzt verfügbar:
  - Der `JSON.parse()` [`reviver` Parameter `context` Argument](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#the_reviver_parameter): Bietet Zugriff auf den ursprünglichen JSON-Quelltext, der geparst wurde.
  - [`JSON.isRawJSON()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/isRawJSON): Testet, ob ein Wert ein von `JSON.rawJSON()` zurückgegebenes Objekt ist.
  - [`JSON.rawJSON()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/rawJSON): Erzeugt ein "rohes JSON"-Objekt, das ein Stück JSON-Text enthält, das dann in ein Objekt aufgenommen werden kann, um den angegebenen Wert beizubehalten, wenn dieses Objekt in einen String umgewandelt wird.

### Sicherheit

- [Certificate Transparency](/de/docs/Web/Security/Defenses/Certificate_Transparency) ist ein Standard, der sicherstellt, dass Zertifikate öffentlich bekannt gemacht werden, bevor Webbrowser ihnen vertrauen. Firefox unterstützt diese Funktion jetzt in Desktop-Versionen (aber nicht auf Android).
  Dies betrifft nur Server, die Zertifikate verwenden, die von einer Zertifizierungsstelle im Mozilla Root CA-Programm ausgestellt wurden.
  ([Firefox Fehler 1938242](https://bugzil.la/1938242)).

### APIs

- Die statische Methode [`PublicKeyCredential.getClientCapabilities()`](/de/docs/Web/API/PublicKeyCredential/getClientCapabilities_static) wird unterstützt und ermöglicht es einer Web-App zu überprüfen, ob ein Browser bestimmte [WebAuthn](/de/docs/Web/API/Web_Authentication_API)-Fähigkeiten und [Erweiterungen](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions) aktiviert, ohne auf User-Agent-Sniffing zurückgreifen zu müssen.
  ([Firefox Fehler 1884466](https://bugzil.la/1884466)).

#### DOM

#### Medien, WebRTC und Web Audio

- Die [`mid`](/de/docs/Web/API/RTCOutboundRtpStreamStats/mid) und [`rid`](/de/docs/Web/API/RTCOutboundRtpStreamStats/rid) Eigenschaften des [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats) Interfaces und die [`mid`](/de/docs/Web/API/RTCOutboundRtpStreamStats/mid) Eigenschaft des [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats) Interfaces werden jetzt unterstützt. ([Firefox Fehler 1643001](https://bugzil.la/1643001)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Um Benutzerevents realistischer zu gestalten und echte Benutzerinteraktionen im Browser besser zu simulieren, haben wir die Verarbeitungssequenz der `Perform Actions`-Befehle in sowohl Marionette als auch WebDriver BiDi vom Inhaltsprozess in den Hauptprozess verlagert. Während Events immer noch synchron aus dem Inhaltsprozess gesendet werden, werden sie jetzt asynchron über IPC-Aufrufe ausgelöst, die vom Hauptprozess ausgehen ([Firefox Fehler 1922077](https://bugzil.la/1922077)).

  Aufgrund dieser signifikanten Änderung können einige Regressionen auftreten. Wenn Sie auf Probleme stoßen, [melden Sie bitte einen Fehler für den Remote Agent](https://bugzilla.mozilla.org/enter_bug.cgi?product=Remote%20Protocol&component=Remote%20Agent). Sollte die Regression die Testausführung blockieren, können Sie vorübergehend zum vorherigen Verhalten zurückkehren, indem Sie die Firefox-Einstellung `remote.events.async.enabled` auf `false` setzen.

- Durch die Verarbeitung der Aktionen im Hauptprozess wurden auch folgende Probleme behoben:
  - Wir unterstützen jetzt eine ordnungsgemäße Warteschlange von Aktionssequenzen ohne Race-Bedingungen. Dies ist besonders wichtig für den `input.performActions`-Befehl von WebDriver BiDi, der mehrmals parallel aufgerufen werden kann und die in der Warteschlange stehenden Aktionen sequentiell ausführen muss ([Firefox Fehler 1915798](https://bugzil.la/1915798)).

  - Beim Ausführen von Aktionen wird die `input cancel list` jetzt erst aktualisiert, nachdem die Aktion erfolgreich ausgeführt wurde. Zuvor konnte, wenn eine Aktion nicht ausgeführt werden konnte, eine Rücksetzaktion verbleiben, was zu unerwarteten Nebeneffekten beim Zurücksetzen des Zustands der `input source` führte ([Firefox Fehler 1930845](https://bugzil.la/1930845)).

  - Beim Ausführen von Aktionen werden einzelne Aktionen jetzt während der Ausführung erneut versucht, insbesondere in Situationen, in denen eine einzige Aktion eine Navigation auslöst, die den aktuellen Browsing-Kontext ersetzt ([Firefox Fehler 1930530](https://bugzil.la/1930530), [Firefox Fehler 1930090](https://bugzil.la/1930090)).

  - Beim Ausführen von Aktionen trat ein Fehler `TypeError: can't access property "getActor", browsingContext.currentWindowGlobal is null` auf, wenn eine Aktion (nicht die letzte) im Aktionsablauf das Fenster schloss und die verbleibenden Aktionen noch ausgeführt wurden ([Firefox Fehler 1932916](https://bugzil.la/1932916)).

- Einige Marionette- und WebDriver BiDi-Befehle, die intern auf eine `requestAnimationFrame`-Emission warten, bevor sie zurückkehren, würden hängen bleiben, wenn der aktuelle Browsing-Kontext während ihrer Ausführung navigiert wurde ([Firefox Fehler 1937118](https://bugzil.la/1937118)).

#### WebDriver BiDi

- Unterstützung für das `format`-Feld im `browsingContext.captureScreenshot`-Befehl hinzugefügt, mit dem Clients verschiedene Dateiformate angeben können (`image/png` und `image/jpeg` werden derzeit unterstützt) und die Kompressionsqualität von Screenshots definieren können ([Firefox Fehler 1861737](https://bugzil.la/1861737)).

## Änderungen für Add-on-Entwickler

- {{WebExtAPIRef("commands.update")}} kann nun Tastenkombinationen für Befehle den `F13` bis `F19` Tasten zuweisen. Allerdings können Erweiterungen diese Tasten nicht vom [`commands` manifest.json Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands) aus zuweisen. Benutzer können diese Tasten auch unter [Manage Extension Shortcuts](https://support.mozilla.org/en-US/kb/manage-extension-shortcuts-firefox) Funktionen zuweisen ([Firefox Fehler 1924542](https://bugzil.la/1924542))

## Experimentelle Web-Funktionen

Diese Funktionen sind neu in Firefox 135 hinzugekommen, sind aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie die entsprechende Einstellung auf der `about:config`-Seite und setzen sie auf `true`. Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Temporal API** (Nightly-Version): <code>javascript.options.experimental.temporal</code>. Das [Temporal-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal) zielt darauf ab, die Arbeit mit Datums- und Zeitangaben in verschiedenen Szenarien zu vereinfachen, mit eingebauten Zeitzonen- und Kalenderdarstellungen. ([Firefox Fehler 1912511](https://bugzil.la/1912511)).
- **Prioritized Task Scheduling API**: <code>dom.enable_web_task_scheduling</code>.
  Die [Prioritized Task Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API) bietet eine standardisierte Möglichkeit, alle Aufgaben einer Anwendung zu priorisieren, unabhängig davon, ob sie im Code eines Website-Entwicklers, in Drittanbieter-Bibliotheken oder Frameworks definiert sind.
  Dies wurde vorübergehend in Nightly-Builds deaktiviert, um [Schäden in freier Wildbahn](https://bugzil.la/1937232) zu vermeiden.
  ([Firefox Fehler 1938242](https://bugzil.la/1938242)).
