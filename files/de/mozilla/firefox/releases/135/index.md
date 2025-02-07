---
title: Firefox 135 für Entwickler
slug: Mozilla/Firefox/Releases/135
l10n:
  sourceCommit: c5849bd1313be60afdf4126aacd587c52bace335
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 135, die Entwickler betreffen. Firefox 135 wurde am [4. Februar 2025](https://whattrainisitnow.com/release/?version=135) veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bedeutenden Änderungen

### CSS

#### Entfernungen

- Die [`-moz-user-input`](/de/docs/Web/CSS/-moz-user-input)-CSS-Eigenschaft, die es ermöglichte, Eingabefelder zu deaktivieren, ist jetzt veraltet und wurde entfernt ([Firefox Bug 1935198](https://bugzil.la/1935198)).

### JavaScript

- Der [JSON parse with source proposal](https://github.com/tc39/proposal-json-parse-with-source) wird nun unterstützt. Ziel dieses Vorschlags ist es, Probleme im Zusammenhang mit Präzisionsverlusten zu mindern, die beim Konvertieren von Werten wie großen Fließkommazahlen und Datumswerten zwischen JavaScript-Werten und JSON-Text auftreten ([Firefox Bug 1934622](https://bugzil.la/1934622)). Insbesondere sind die folgenden Funktionen jetzt verfügbar:
  - Der `reviver`-Parameter `context`-Argument von `JSON.parse()` ([`reviver` parameter `context` argument](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#the_reviver_parameter)): Ermöglicht Zugriff auf den ursprünglichen JSON-Quelltext, der analysiert wurde.
  - [`JSON.isRawJSON()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/isRawJSON): Überprüft, ob ein Wert ein Objekt ist, das von `JSON.rawJSON()` zurückgegeben wurde.
  - [`JSON.rawJSON()`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/rawJSON): Erstellt ein "rohes JSON"-Objekt, das ein Stück JSON-Text enthält und in ein Objekt eingefügt werden kann, um den angegebenen Wert beim Serialisieren des Objekts beizubehalten.

### Sicherheit

- [Certificate Transparency](/de/docs/Web/Security/Certificate_Transparency) ist ein Standard, der sicherstellt, dass Zertifikate öffentlich bekannt gemacht werden, bevor sie von Webbrowsern vertraut werden. Firefox unterstützt diese Funktion nun in der Desktop-Version (nicht auf Android).
  Dies betrifft nur Server, die Zertifikate von einer Zertifizierungsstelle verwenden, die im Mozilla Root CA-Programm enthalten ist.
  ([Firefox Bug 1938242](https://bugzil.la/1938242)).

### APIs

- Die statische Methode [`PublicKeyCredential.getClientCapabilities()`](/de/docs/Web/API/PublicKeyCredential/getClientCapabilities_static) wird unterstützt. Damit kann eine Webanwendung prüfen, ob ein Browser bestimmte [WebAuthn](/de/docs/Web/API/Web_Authentication_API)-Funktionen und [Erweiterungen](/de/docs/Web/API/Web_Authentication_API/WebAuthn_extensions) aktiviert hat, ohne auf User-Agent-Sniffing zurückgreifen zu müssen.
  ([Firefox Bug 1884466](https://bugzil.la/1884466)).

#### DOM

#### Medien, WebRTC und Web Audio

- Die [`mid`](/de/docs/Web/API/RTCOutboundRtpStreamStats/mid)- und [`rid`](/de/docs/Web/API/RTCOutboundRtpStreamStats/rid)-Eigenschaften des [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats)-Interfaces sowie die [`mid`](/de/docs/Web/API/RTCOutboundRtpStreamStats/mid)-Eigenschaft des [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Interfaces werden jetzt unterstützt. ([Firefox Bug 1643001](https://bugzil.la/1643001)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Um Benutzereingaben realistischer zu gestalten und reale Benutzerinteraktionen im Browser besser zu simulieren, wurde die Verarbeitung der Aktionssequenzen der `Perform Actions`-Befehle sowohl in Marionette als auch in WebDriver BiDi vom Content-Prozess in den Parent-Prozess verlagert. Während Ereignisse weiterhin synchron aus dem Content-Prozess gesendet werden, werden sie jetzt asynchron über IPC-Aufrufe ausgelöst, die vom Parent-Prozess ausgehen ([Firefox Bug 1922077](https://bugzilla.mozilla.org/show_bug.cgi?id=1922077)).

  Aufgrund dieser signifikanten Änderung können noch einige Regressionen existieren. Sollten Probleme auftreten, melden Sie diese bitte im [Bugzilla für den Remote Agent](https://bugzilla.mozilla.org/enter_bug.cgi?product=Remote%20Protocol&component=Remote%20Agent). Falls die Regressionen die Testausführung blockieren, kann vorübergehend auf das vorherige Verhalten zurückgegriffen werden, indem die Firefox-Präferenz `remote.events.async.enabled` auf `false` gesetzt wird.

- Durch die Verarbeitung von Aktionen im Parent-Prozess wurden auch folgende Probleme behoben:

  - Es wird nun eine korrekte Warteschlange von Aktionssequenzen ohne Race-Conditions unterstützt. Dies ist insbesondere für den `input.performActions`-Befehl von WebDriver BiDi wichtig, der mehrfach parallel aufgerufen werden kann und die eingereihten Aktionen sequenziell ausführen muss ([Firefox Bug 1915798](https://bugzilla.mozilla.org/show_bug.cgi?id=1915798)).

  - Beim Versenden von Aktionen wird die `input cancel list` jetzt korrekt nur nach erfolgreicher Verarbeitung der Aktion aktualisiert. Zuvor konnte es bei einer fehlgeschlagenen Aktion dazu kommen, dass eine Rückgängig-Aktion fälschlicherweise bestehen blieb, was zu unerwarteten Seiteneffekten beim Zurücksetzen des `input source`-Status führte ([Firefox Bug 1930845](https://bugzilla.mozilla.org/show_bug.cgi?id=1930845)).

  - Während der Ausführung von Aktionen werden nun individuelle Aktionen während der Ausführung wiederholt, insbesondere in Situationen, in denen eine einzelne Aktion eine Navigation auslöst, die den aktuellen Browsing-Kontext ersetzt ([Firefox Bug 1930530](https://bugzilla.mozilla.org/show_bug.cgi?id=1930530), [Firefox Bug 1930090](https://bugzilla.mozilla.org/show_bug.cgi?id=1930090)).

  - Bei der Ausführung von Aktionen trat ein Fehler des Typs `TypeError: can't access property "getActor", browsingContext.currentWindowGlobal is null` auf, wenn eine Aktion (nicht die letzte) in der Aktionskette das Fenster schloss und die verbleibenden Aktionen noch verarbeitet wurden ([Firefox Bug 1932916](https://bugzilla.mozilla.org/show_bug.cgi?id=1932916)).

- Einige Marionette- und WebDriver-BiDi-Befehle, die intern darauf angewiesen sind, dass ein `requestAnimationFrame` vor ihrer Rückkehr ausgelöst wird, hingen fest, wenn der aktuelle Browsing-Kontext während ihrer Ausführung navigiert wurde ([Firefox Bug 1937118](https://bugzilla.mozilla.org/show_bug.cgi?id=1937118)).

#### WebDriver BiDi

- Unterstützung für das `format`-Feld im `browsingContext.captureScreenshot`-Befehl wurde hinzugefügt. Damit können Clients unterschiedliche Dateiformate spezifizieren (`image/png` und `image/jpg` werden derzeit unterstützt) und die Komprimierungsqualität für Screenshots definieren ([Firefox Bug 1861737](https://bugzilla.mozilla.org/show_bug.cgi?id=1861737)).

## Änderungen für Add-on-Entwickler

- {{WebExtAPIRef("commands.update")}} kann jetzt Tastenkombinationen für Befehle den Tasten `F13` bis `F19` zuweisen. Allerdings können Erweiterungen diese Tasten nicht über den [`commands`-Schlüssel der manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/commands) zuweisen. Benutzer können diese Tasten auch über [Tastenkombinationen von Erweiterungen verwalten](https://support.mozilla.org/en-US/kb/manage-extension-shortcuts-firefox) Funktionen zuweisen ([Firefox Bug 1924542](https://bugzil.la/1924542)).

## Experimentelle Web-Features

Diese Features sind neu in Firefox 135 integriert, aber standardmäßig deaktiviert. Um sie auszuprobieren, suchen Sie auf der Seite `about:config` nach der entsprechenden Präferenz und setzen Sie diese auf `true`. Weitere experimentelle Funktionen finden Sie auf der Seite [Experimental features](/de/docs/Mozilla/Firefox/Experimental_features).

- **Temporal API** (Nightly-Version): <code>javascript.options.experimental.temporal</code>. Das [Temporal-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal) zielt darauf ab, die Arbeit mit Datums- und Zeitangaben in verschiedenen Szenarien zu vereinfachen, mit integrierten Zeitzonen- und Kalenderdarstellungen. ([Firefox Bug 1912511](https://bugzil.la/1912511)).
- **Prioritized Task Scheduling API**: <code>dom.enable_web_task_scheduling</code>.
  Die [Prioritized Task Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API) bietet eine standardisierte Methode, um alle einer Anwendung zugehörigen Aufgaben zu priorisieren, unabhängig davon, ob sie im Code des Website-Entwicklers oder in Drittanbieterbibliotheken und -frameworks definiert wurden.
  Diese wurde vorübergehend in Nightly-Builds deaktiviert, um [Fehlfunktionen in freier Wildbahn](https://bugzil.la/1937232) zu vermeiden. ([Firefox Bug 1938242](https://bugzil.la/1938242)).

## Ältere Versionen

{{Firefox_for_developers}}
