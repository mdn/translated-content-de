---
title: Firefox 135 für Entwickler
slug: Mozilla/Firefox/Releases/135
l10n:
  sourceCommit: ad896488bf8fac04fc6fa144c441fdbfd880737c
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 135, die Entwickler betreffen. Firefox 135 wurde am [4. Februar 2025](https://whattrainisitnow.com/release/?version=135) veröffentlicht.

## Änderungen für Web-Entwickler

### HTML

Keine bemerkenswerten Änderungen

### CSS

#### Entfernungen

- Die [`-moz-user-input`](/de/docs/Web/CSS/-moz-user-input) CSS-Eigenschaft erlaubte es, Eingabefelder zu deaktivieren. Die Eigenschaft ist nun veraltet und wurde entfernt ([Firefox-Bug 1935198](https://bugzil.la/1935198)).

### JavaScript

- Der [JSON-Parse mit Source-Vorschlag](https://github.com/tc39/proposal-json-parse-with-source) wird jetzt unterstützt. Er zielt darauf ab, Funktionen bereitzustellen, um Probleme im Zusammenhang mit dem Verlust von Genauigkeit bei der Umwandlung von Werten wie große Gleitkommazahlen und Datumswerte zwischen JavaScript-Werten und JSON-Text zu mildern ([Firefox-Bug 1934622](https://bugzil.la/1934622)). Insbesondere sind die folgenden Funktionen jetzt verfügbar:
  - Der `JSON.parse()` [`reviver`-Parameter `context`-Argument](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#the_reviver_parameter): Bietet Zugriff auf den ursprünglichen JSON-Quelldateitext, der geparst wurde.
  - [`JSON.isRawJSON()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/isRawJSON): Testet, ob ein Wert ein von `JSON.rawJSON()` zurückgegebenes Objekt ist.
  - [`JSON.rawJSON()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/rawJSON): Erstellt ein "raw JSON"-Objekt, das ein Stück JSON-Text enthält und in ein Objekt eingefügt werden kann, um den angegebenen Wert beizubehalten, wenn dieses Objekt stringifyt wird.

### Sicherheit

- [Certificate Transparency](/de/docs/Web/Security/Certificate_Transparency) ist ein Standard, um sicherzustellen, dass Zertifikate öffentlich offengelegt wurden, bevor Webbrowser ihnen vertrauen. Firefox unterstützt diese Funktion jetzt in Desktop-Versionen (aber nicht auf Android).
  Dies betrifft nur Server, die Zertifikate verwenden, die von einer Zertifizierungsstelle in Mozillas Root CA-Programm ausgestellt wurden.
  ([Firefox-Bug 1938242](https://bugzil.la/1938242)).

### APIs

- Die statische Methode [`PublicKeyCredential.getClientCapabilities()`](/de/docs/Web/API/PublicKeyCredential/getClientCapabilities_static) wird unterstützt. Sie ermöglicht es einer Web-App zu überprüfen, ob ein Browser bestimmte [WebAuthn](/de/docs/Web/API/Web_Authentication_API)-Fähigkeiten und [Erweiterungen](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions) aktiviert hat, ohne auf User-Agent-Sniffing zurückgreifen zu müssen.
  ([Firefox-Bug 1884466](https://bugzil.la/1884466)).

#### DOM

#### Medien, WebRTC und Web Audio

- Die [`mid`](/de/docs/Web/API/RTCOutboundRtpStreamStats/mid) und [`rid`](/de/docs/Web/API/RTCOutboundRtpStreamStats/rid)-Eigenschaften der [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats)-Schnittstelle und die [`mid`](/de/docs/Web/API/RTCOutboundRtpStreamStats/mid)-Eigenschaft der [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Schnittstelle werden jetzt unterstützt. ([Firefox-Bug 1643001](https://bugzil.la/1643001)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemeines

- Um Benutzereingaben realistischer zu gestalten und echte Benutzerinteraktionen im Browser besser zu simulieren, haben wir die Verarbeitung von Aktionsfolgen der `Perform Actions`-Befehle sowohl in Marionette als auch in WebDriver BiDi vom Inhaltsprozess in den Elternprozess verlegt. Während Ereignisse weiterhin synchron aus dem Inhaltsprozess gesendet werden, werden sie jetzt asynchron über IPC-Aufrufe ausgelöst, die vom Elternprozess stammen ([Firefox-Bug 1922077](https://bugzil.la/1922077)).

  Aufgrund dieser signifikanten Änderung können noch einige Regressionen bestehen. Wenn Sie auf Probleme stoßen, melden Sie bitte [einen Fehler für den Remote-Agent](https://bugzilla.mozilla.org/enter_bug.cgi?product=Remote%20Protocol&component=Remote%20Agent). Falls die Regressionen die Ausführung von Tests blockieren, können Sie vorübergehend zum vorherigen Verhalten zurückkehren, indem Sie die Firefox-Präferenz `remote.events.async.enabled` auf `false` setzen.

- Mit der Verarbeitung von Aktionen, die nun im Elternprozess erfolgt, wurden auch die folgenden Probleme behoben:

  - Wir unterstützen jetzt die ordnungsgemäße Warteschlangenbildung von Aktionsfolgen ohne Race-Conditions. Dies ist insbesondere wichtig für den `input.performActions`-Befehl von WebDriver BiDi, der mehrfach parallel aufgerufen werden kann und die in die Warteschlange gestellten Aktionen sequentiell ausführen muss ([Firefox-Bug 1915798](https://bugzil.la/1915798)).

  - Beim Versenden von Aktionen wird die `input cancel list` jetzt erst dann korrekt aktualisiert, nachdem die Aktion erfolgreich versendet wurde. Zuvor konnte, wenn eine Aktion fehlgeschlagen war, eine umgekehrte Aktion bestehen bleiben, was zu unerwarteten Nebeneffekten beim Zurücksetzen des Zustands der `input source` führen konnte ([Firefox-Bug 1930845](https://bugzil.la/1930845)).

  - Bei der Ausführung von Aktionen werden individuelle Aktionen jetzt während des Versands erneut versucht, insbesondere in Situationen, in denen eine einzelne Aktion eine Navigation auslöst, die das aktuelle Browser-Kontext ersetzt ([Firefox-Bug 1930530](https://bugzil.la/1930530), [Firefox-Bug 1930090](https://bugzil.la/1930090)).

  - Bei der Ausführung von Aktionen trat ein Fehler `TypeError: can't access property "getActor", browsingContext.currentWindowGlobal is null` auf, wenn eine Aktion (nicht die letzte) in der Aktionskette das Fenster schloss und die verbleibenden Aktionen immer noch versendet wurden ([Firefox-Bug 1932916](https://bugzil.la/1932916)).

- Einige Marionette- und WebDriver BiDi-Befehle, die intern darauf angewiesen sind, dass ein `requestAnimationFrame` emittiert wird, bevor sie zurückkehren, würden hängenbleiben, wenn der aktuelle Browser-Kontext während ihrer Ausführung navigiert wurde ([Firefox-Bug 1937118](https://bugzil.la/1937118)).

#### WebDriver BiDi

- Unterstützung für das `format`-Feld im `browsingContext.captureScreenshot`-Befehl hinzugefügt, mit dem Clients verschiedene Dateiformate angeben können (`image/png` und `image/jpeg` werden derzeit unterstützt) und die Kompressionsqualität für Screenshots definieren können ([Firefox-Bug 1861737](https://bugzil.la/1861737)).

## Änderungen für Add-on-Entwickler

- {{WebExtAPIRef("commands.update")}} kann jetzt Tastaturkürzel für Befehle den Tasten `F13` bis `F19` zuweisen. Add-ons können jedoch keine dieser Tasten über den [`commands` manifest.json key](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands) zuweisen. Benutzer können diesen Tasten auch Funktionen zuweisen, indem sie [Verwalten von Erweiterungskürzeln](https://support.mozilla.org/en-US/kb/manage-extension-shortcuts-firefox) verwenden ([Firefox-Bug 1924542](https://bugzil.la/1924542)).

## Experimentelle Web-Features

Diese Funktionen sind neu in Firefox 135 verfügbar, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie die entsprechende Präferenz auf der `about:config`-Seite und setzen Sie sie auf `true`. Weitere solche Funktionen finden Sie auf der [Seite für experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Temporal API** (Nightly Release): <code>javascript.options.experimental.temporal</code>. Das [Temporal-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal) zielt darauf ab, die Arbeit mit Datums- und Zeitangaben in verschiedenen Szenarien zu vereinfachen, mit eingebauten Zeitzonen- und Kalenderdarstellungen. ([Firefox-Bug 1912511](https://bugzil.la/1912511)).
- **Prioritized Task Scheduling API**: <code>dom.enable_web_task_scheduling</code>.
  Die [Prioritized Task Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API) bietet eine standardisierte Möglichkeit, alle Tasks einer Anwendung zu priorisieren, egal ob sie im Code eines Website-Entwicklers definiert sind oder in Drittanbieter-Bibliotheken und Frameworks.
  Diese wurde vorübergehend in Nightly-Builds deaktiviert, um [Störungen in freier Wildbahn](https://bugzil.la/1937232) zu vermeiden.
  ([Firefox-Bug 1938242](https://bugzil.la/1938242)).

## Ältere Versionen

{{Firefox_for_developers}}
