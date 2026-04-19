---
title: runtime
slug: Mozilla/Add-ons/WebExtensions/API/runtime
l10n:
  sourceCommit: d093679f1b6c69e417e761d90eca65681e5f95f4
---

Dieses Modul liefert Informationen über Ihre Erweiterung und die Umgebung, in der sie ausgeführt wird.

Es stellt auch Messaging-APIs zur Verfügung, die es Ihnen ermöglichen:

- Die Kommunikation zwischen verschiedenen Teilen Ihrer Erweiterung. Für Ratschläge zur Auswahl zwischen den Messaging-Optionen siehe [Auswahl zwischen einmaligen Nachrichten und verbindungsbasiertem Messaging](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#choosing_between_one-off_messages_and_connection-based_messaging).
- Die Kommunikation mit anderen Erweiterungen.
- Die Kommunikation mit nativen Anwendungen.

## Typen

- {{WebExtAPIRef("runtime.Port")}}
  - : Repräsentiert ein Ende einer Verbindung zwischen zwei spezifischen Kontexten, die verwendet werden kann, um Nachrichten auszutauschen.
- {{WebExtAPIRef("runtime.MessageSender")}}
  - : Enthält Informationen über den Absender einer Nachricht oder Verbindungsanfrage.
- {{WebExtAPIRef("runtime.PlatformOs")}}
  - : Identifiziert das Betriebssystem des Browsers.
- {{WebExtAPIRef("runtime.PlatformArch")}}
  - : Identifiziert die Prozessorarchitektur des Browsers.
- {{WebExtAPIRef("runtime.PlatformInfo")}}
  - : Enthält Informationen über die Plattform, auf der der Browser läuft.
- {{WebExtAPIRef("runtime.PlatformNaclArch")}} {{deprecated_inline}}
  - : Der veraltete Enumerationswert, der die Google Native Client-Architektur repräsentiert. Erwägen Sie, zu `PlatformArch` zu migrieren, das von Safari und Mozilla unterstützt wird und die echte CPU-Architektur darstellt sowie korrekte Bitbreiteninformationen auf ARM vermittelt.
- {{WebExtAPIRef("runtime.RequestUpdateCheckStatus")}}
  - : Ergebnis eines Aufrufs von {{WebExtAPIRef("runtime.requestUpdateCheck()")}}.
- {{WebExtAPIRef("runtime.OnInstalledReason")}}
  - : Der Grund, warum das Ereignis {{WebExtAPIRef("runtime.onInstalled")}} ausgelöst wird.
- {{WebExtAPIRef("runtime.OnPerformanceWarningCategory")}}
  - : Die Warnkategorie, die das Ereignis {{WebExtAPIRef("runtime.onPerformanceWarning")}} ausgelöst hat.
- {{WebExtAPIRef("runtime.OnPerformanceWarningSeverity")}}
  - : Die Warnstufe, die das Ereignis {{WebExtAPIRef("runtime.onPerformanceWarning")}} ausgelöst hat.
- {{WebExtAPIRef("runtime.OnRestartRequiredReason")}}
  - : Der Grund, warum das Ereignis {{WebExtAPIRef("runtime.onRestartRequired")}} ausgelöst wird.

## Eigenschaften

- {{WebExtAPIRef("runtime.lastError")}}
  - : Dieser Wert wird gesetzt, wenn eine asynchrone Funktion einen Fehlerzustand hat, den sie ihrem Aufrufer melden muss.
- {{WebExtAPIRef("runtime.id")}}
  - : Die ID der Erweiterung.

## Funktionen

- {{WebExtAPIRef("runtime.getBackgroundPage()")}}
  - : Ruft das [Window](/de/docs/Web/API/Window)-Objekt der Hintergrundseite ab, die innerhalb der aktuellen Erweiterung läuft.
- {{WebExtAPIRef("runtime.openOptionsPage()")}}
  - : Öffnet die [Optionsseite](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages) Ihrer Erweiterung.
- {{WebExtAPIRef("runtime.getContexts()")}}
  - : Ruft Details über die mit der Erweiterung verbundenen Kontexte ab.
- {{WebExtAPIRef("runtime.getFrameId()")}}
  - : Ruft die Frame-ID eines beliebigen Fenster-Global- oder Frame-Elementes ab.
- {{WebExtAPIRef("runtime.getManifest()")}}
  - : Ruft eine Objektrepräsentation der vollständigen [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json)-Datei ab.
- {{WebExtAPIRef("runtime.getURL()")}}
  - : Gibt einen vollqualifizierten URL zurück, wenn ein relativer Pfad von der [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) zu einer Ressource, die mit der Erweiterung gepackt ist, angegeben wird.
- {{WebExtAPIRef("runtime.getVersion()")}}
  - : Ruft die Versionszeichenfolge der Erweiterung aus dem [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json)-Datei-[`version`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version)-Schlüssel ab. Die zurückgegebene Version kann von der Zeichenfolge in der Datei abweichen, da der Browser sie analysieren und serialisieren kann.
- {{WebExtAPIRef("runtime.setUninstallURL()")}}
  - : Setzt eine URL, die besucht wird, wenn die Erweiterung deinstalliert wird.
- {{WebExtAPIRef("runtime.reload()")}}
  - : Lädt die Erweiterung neu.
- {{WebExtAPIRef("runtime.requestUpdateCheck()")}}
  - : Prüft, ob Updates für diese Erweiterung vorhanden sind.
- {{WebExtAPIRef("runtime.connect()")}}
  - : Stellt eine Verbindung von einem Inhalts-Skript zum Hauptprozess der Erweiterung oder von einer Erweiterung zu einer anderen her.
- {{WebExtAPIRef("runtime.connectNative()")}}
  - : Verbindet die Erweiterung mit einer nativen Anwendung auf dem Computer des Benutzers.
- {{WebExtAPIRef("runtime.sendMessage()")}}
  - : Sendet eine Nachricht zu Ereignis-Listenern innerhalb Ihrer Erweiterung oder einer anderen Erweiterung. Ähnlich wie {{WebExtAPIRef('runtime.connect')}}, sendet aber nur eine einzelne Nachricht, mit einer optionalen Antwort.
- {{WebExtAPIRef("runtime.sendNativeMessage()")}}
  - : Sendet eine Nachricht von einer Erweiterung an eine native Anwendung.
- {{WebExtAPIRef("runtime.getPlatformInfo()")}}
  - : Gibt Informationen über die aktuelle Plattform zurück.
- {{WebExtAPIRef("runtime.getBrowserInfo()")}}
  - : Gibt Informationen über den Browser zurück, in dem diese Erweiterung installiert ist.
- {{WebExtAPIRef("runtime.getPackageDirectoryEntry()")}}
  - : Gibt einen DirectoryEntry für das Paketverzeichnis zurück.

## Ereignisse

- {{WebExtAPIRef("runtime.onStartup")}}
  - : Wird ausgelöst, wenn ein Profil, das diese Erweiterung installiert hat, das erste Mal gestartet wird. Dieses Ereignis wird nicht ausgelöst, wenn ein Inkognito-Profil gestartet wird.
- {{WebExtAPIRef("runtime.onInstalled")}}
  - : Wird ausgelöst, wenn die Erweiterung erstmals installiert wird, wenn die Erweiterung auf eine neue Version aktualisiert wird und wenn der Browser auf eine neue Version aktualisiert wird.
- {{WebExtAPIRef("runtime.onSuspend")}}
  - : Wird an die Ereignisseite gesendet, kurz bevor die Erweiterung entladen wird. Dies gibt der Erweiterung die Möglichkeit, einige Bereinigungen durchzuführen.
- {{WebExtAPIRef("runtime.onSuspendCanceled")}}
  - : Wird nach {{WebExtAPIRef("runtime.onSuspend")}} gesendet, um anzuzeigen, dass die Erweiterung doch nicht entladen wird.
- {{WebExtAPIRef("runtime.onUpdateAvailable")}}
  - : Wird ausgelöst, wenn ein Update verfügbar ist, aber nicht sofort installiert wird, da die Erweiterung derzeit ausgeführt wird.
- {{WebExtAPIRef("runtime.onBrowserUpdateAvailable")}} {{deprecated_inline}}
  - : Wird ausgelöst, wenn ein Update für den Browser verfügbar ist, aber nicht sofort installiert wird, da ein Neustart des Browsers erforderlich ist.
- {{WebExtAPIRef("runtime.onConnect")}}
  - : Wird ausgelöst, wenn eine Verbindung entweder mit einem Erweiterungsprozess oder einem Inhaltsskript hergestellt wird.
- {{WebExtAPIRef("runtime.onConnectExternal")}}
  - : Wird ausgelöst, wenn eine Verbindung zu einer anderen Erweiterung hergestellt wird.
- {{WebExtAPIRef("runtime.onUserScriptConnect")}}
  - : Wird ausgelöst, wenn eine Verbindung mit einem von der Erweiterung registrierten Benutzerskript hergestellt wird.
- {{WebExtAPIRef("runtime.onMessage")}}
  - : Wird ausgelöst, wenn eine Nachricht entweder von einem Erweiterungsprozess oder einem Inhaltsskript gesendet wird.
- {{WebExtAPIRef("runtime.onMessageExternal")}}
  - : Wird ausgelöst, wenn eine Nachricht von einer anderen Erweiterung gesendet wird. Kann nicht in einem Inhaltsskript verwendet werden.
- {{WebExtAPIRef("runtime.onUserScriptMessage")}}
  - : Wird ausgelöst, wenn eine Nachricht von einem registrierten Benutzerskript gesendet wird.
- {{WebExtAPIRef("runtime.onPerformanceWarning")}}
  - : Wird ausgelöst, wenn ein Leistungsproblem zur Laufzeit für die Erweiterung erkannt wird.
- {{WebExtAPIRef("runtime.onRestartRequired")}}
  - : Wird ausgelöst, wenn das Gerät neu gestartet werden muss.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der Chromium-API [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime). Diese Dokumentation stammt aus [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code.
