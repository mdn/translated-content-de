---
title: runtime
slug: Mozilla/Add-ons/WebExtensions/API/runtime
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Dieses Modul bietet Informationen über Ihre Erweiterung und die Umgebung, in der sie ausgeführt wird.

Es bietet auch Messaging-APIs, die es ermöglichen:

- Kommunikation zwischen verschiedenen Teilen Ihrer Erweiterung. Für Ratschläge zur Auswahl zwischen den Messaging-Optionen, siehe [Auswahl zwischen einmaligen Nachrichten und verbindungsbasiertem Messaging](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#choosing_between_one-off_messages_and_connection-based_messaging).
- Kommunikation mit anderen Erweiterungen.
- Kommunikation mit nativen Anwendungen.

## Typen

- {{WebExtAPIRef("runtime.Port")}}
  - : Repräsentiert ein Ende einer Verbindung zwischen zwei spezifischen Kontexten, die zum Austausch von Nachrichten verwendet werden kann.
- {{WebExtAPIRef("runtime.MessageSender")}}
  - : Enthält Informationen über den Absender einer Nachricht oder Verbindungsanfrage.
- {{WebExtAPIRef("runtime.PlatformOs")}}
  - : Identifiziert das Betriebssystem des Browsers.
- {{WebExtAPIRef("runtime.PlatformArch")}}
  - : Identifiziert die Prozessorarchitektur des Browsers.
- {{WebExtAPIRef("runtime.PlatformInfo")}}
  - : Enthält Informationen über die Plattform, auf der der Browser läuft.
- {{WebExtAPIRef("runtime.PlatformNaclArch")}}
  - : Die nativen Client-Architektur. Diese kann auf einigen Plattformen von `PlatformArch` abweichen.
- {{WebExtAPIRef("runtime.RequestUpdateCheckStatus")}}
  - : Ergebnis eines Aufrufs von {{WebExtAPIRef("runtime.requestUpdateCheck()")}}.
- {{WebExtAPIRef("runtime.OnInstalledReason")}}
  - : Der Grund, warum das {{WebExtAPIRef("runtime.onInstalled")}}-Ereignis ausgelöst wird.
- {{WebExtAPIRef("runtime.OnPerformanceWarningCategory")}}
  - : Die Kategorie der Warnung, die das {{WebExtAPIRef("runtime.onPerformanceWarning")}}-Ereignis ausgelöst hat.
- {{WebExtAPIRef("runtime.OnPerformanceWarningSeverity")}}
  - : Die Schwere der Warnung, die das {{WebExtAPIRef("runtime.onPerformanceWarning")}}-Ereignis ausgelöst hat.
- {{WebExtAPIRef("runtime.OnRestartRequiredReason")}}
  - : Der Grund, warum das {{WebExtAPIRef("runtime.onRestartRequired")}}-Ereignis ausgelöst wird.

## Eigenschaften

- {{WebExtAPIRef("runtime.lastError")}}
  - : Dieser Wert wird gesetzt, wenn eine asynchrone Funktion einen Fehlerzustand hat, den sie ihrem Aufrufer melden muss.
- {{WebExtAPIRef("runtime.id")}}
  - : Die ID der Erweiterung.

## Funktionen

- {{WebExtAPIRef("runtime.getBackgroundPage()")}}
  - : Ruft das [Window](/de/docs/Web/API/Window)-Objekt für die Hintergrundseite ab, die innerhalb der aktuellen Erweiterung ausgeführt wird.
- {{WebExtAPIRef("runtime.openOptionsPage()")}}
  - : Öffnet die [Optionsseite](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages) Ihrer Erweiterung.
- {{WebExtAPIRef("runtime.getContexts()")}}
  - : Ruft Details über die mit der Erweiterung verbundenen Kontexte ab.
- {{WebExtAPIRef("runtime.getFrameId()")}}
  - : Ruft die Frame-ID eines beliebigen Window-Global- oder Frame-Elements ab.
- {{WebExtAPIRef("runtime.getManifest()")}}
  - : Holt die komplette [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json)-Datei, serialisiert als Objekt.
- {{WebExtAPIRef("runtime.getURL()")}}
  - : Gibt einen vollständig qualifizierten URL von einem relativen Pfad aus der [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) zu einer mit der Erweiterung verpackten Ressource zurück.
- {{WebExtAPIRef("runtime.setUninstallURL()")}}
  - : Setzt eine URL, die beim Deinstallieren der Erweiterung besucht wird.
- {{WebExtAPIRef("runtime.reload()")}}
  - : Lädt die Erweiterung neu.
- {{WebExtAPIRef("runtime.requestUpdateCheck()")}}
  - : Überprüft auf Updates für diese Erweiterung.
- {{WebExtAPIRef("runtime.connect()")}}
  - : Stellt eine Verbindung von einem Inhaltsskript zum Hauptprozess der Erweiterung her oder von einer Erweiterung zu einer anderen Erweiterung.
- {{WebExtAPIRef("runtime.connectNative()")}}
  - : Verbindet die Erweiterung mit einer nativen Anwendung auf dem Computer des Benutzers.
- {{WebExtAPIRef("runtime.sendMessage()")}}
  - : Sendet eine Nachricht an Ereignis-Listener innerhalb Ihrer Erweiterung oder einer anderen Erweiterung. Ähnlich wie {{WebExtAPIRef('runtime.connect')}}, aber es wird nur eine einzelne Nachricht gesendet, mit einer optionalen Antwort.
- {{WebExtAPIRef("runtime.sendNativeMessage()")}}
  - : Sendet eine Nachricht von einer Erweiterung an eine native Anwendung.
- {{WebExtAPIRef("runtime.getPlatformInfo()")}}
  - : Gibt Informationen über die aktuelle Plattform zurück.
- {{WebExtAPIRef("runtime.getBrowserInfo()")}}
  - : Gibt Informationen über den Browser zurück, in dem diese Erweiterung installiert ist.
- {{WebExtAPIRef("runtime.getPackageDirectoryEntry()")}}
  - : Gibt ein DirectoryEntry für das Paketverzeichnis zurück.

## Ereignisse

- {{WebExtAPIRef("runtime.onStartup")}}
  - : Wird ausgelöst, wenn ein Profil, das diese Erweiterung installiert hat, zum ersten Mal startet. Dieses Ereignis wird nicht ausgelöst, wenn ein Inkognito-Profil gestartet wird.
- {{WebExtAPIRef("runtime.onInstalled")}}
  - : Wird ausgelöst, wenn die Erweiterung erstmals installiert wird, wenn die Erweiterung auf eine neue Version aktualisiert wird und wenn der Browser auf eine neue Version aktualisiert wird.
- {{WebExtAPIRef("runtime.onSuspend")}}
  - : Wird an die Ereignisseite gesendet, kurz bevor die Erweiterung entladen wird. Dies gibt der Erweiterung die Möglichkeit, einige Aufräumarbeiten durchzuführen.
- {{WebExtAPIRef("runtime.onSuspendCanceled")}}
  - : Wird nach {{WebExtAPIRef("runtime.onSuspend")}} gesendet, um anzuzeigen, dass die Erweiterung doch nicht entladen wird.
- {{WebExtAPIRef("runtime.onUpdateAvailable")}}
  - : Wird ausgelöst, wenn ein Update verfügbar ist, aber nicht sofort installiert wird, weil die Erweiterung gerade läuft.
- {{WebExtAPIRef("runtime.onBrowserUpdateAvailable")}} {{deprecated_inline}}
  - : Wird ausgelöst, wenn ein Update für den Browser verfügbar ist, aber nicht sofort installiert wird, da ein Neustart des Browsers erforderlich ist.
- {{WebExtAPIRef("runtime.onConnect")}}
  - : Wird ausgelöst, wenn eine Verbindung entweder mit einem Erweiterungsprozess oder einem Inhaltsskript hergestellt wird.
- {{WebExtAPIRef("runtime.onConnectExternal")}}
  - : Wird ausgelöst, wenn eine Verbindung mit einer anderen Erweiterung hergestellt wird.
- {{WebExtAPIRef("runtime.onUserScriptConnect")}}
  - : Wird ausgelöst, wenn eine Verbindung mit einem von der Erweiterung registrierten Benutzer-Skript hergestellt wird.
- {{WebExtAPIRef("runtime.onMessage")}}
  - : Wird ausgelöst, wenn eine Nachricht entweder von einem Erweiterungsprozess oder einem Inhaltsskript gesendet wird.
- {{WebExtAPIRef("runtime.onMessageExternal")}}
  - : Wird ausgelöst, wenn eine Nachricht von einer anderen Erweiterung gesendet wird. Kann in einem Inhaltsskript nicht verwendet werden.
- {{WebExtAPIRef("runtime.onUserScriptMessage")}}
  - : Wird ausgelöst, wenn eine Nachricht von einem von der Erweiterung registrierten Benutzer-Skript gesendet wird.
- {{WebExtAPIRef("runtime.onPerformanceWarning")}}
  - : Wird ausgelöst, wenn ein Laufzeit-Leistungsproblem für die Erweiterung erkannt wird.
- {{WebExtAPIRef("runtime.onRestartRequired")}}
  - : Wird ausgelöst, wenn das Gerät neu gestartet werden muss.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromium's [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime) API. Diese Dokumentation ist abgeleitet von [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code.
