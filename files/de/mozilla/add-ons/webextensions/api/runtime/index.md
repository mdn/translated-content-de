---
title: runtime
slug: Mozilla/Add-ons/WebExtensions/API/runtime
l10n:
  sourceCommit: b6dacb9087010826a5a7d5b2d7c428e89d8135cf
---

{{AddonSidebar}}

Dieses Modul liefert Informationen über Ihre Erweiterung und die Umgebung, in der sie ausgeführt wird.

Es bietet auch Messaging-APIs, die es Ihnen ermöglichen:

- Kommunikation zwischen verschiedenen Teilen Ihrer Erweiterung. Für Ratschläge zur Auswahl der Nachrichtenoptionen lesen Sie [Choosing between one-off messages and connection-based messaging](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#choosing_between_one-off_messages_and_connection-based_messaging).
- Kommunikation mit anderen Erweiterungen.
- Kommunikation mit nativen Anwendungen.

## Typen

- {{WebExtAPIRef("runtime.Port")}}
  - : Repräsentiert ein Ende einer Verbindung zwischen zwei spezifischen Kontexten, die zum Austausch von Nachrichten verwendet werden kann.
- {{WebExtAPIRef("runtime.MessageSender")}}
  - : Enthält Informationen über den Absender einer Nachricht oder einer Verbindungsanfrage.
- {{WebExtAPIRef("runtime.PlatformOs")}}
  - : Identifiziert das Betriebssystem des Browsers.
- {{WebExtAPIRef("runtime.PlatformArch")}}
  - : Identifiziert die Prozessorarchitektur des Browsers.
- {{WebExtAPIRef("runtime.PlatformInfo")}}
  - : Enthält Informationen über die Plattform, auf der der Browser läuft.
- {{WebExtAPIRef("runtime.RequestUpdateCheckStatus")}}
  - : Ergebnis eines Aufrufs von {{WebExtAPIRef("runtime.requestUpdateCheck()")}}.
- {{WebExtAPIRef("runtime.OnInstalledReason")}}
  - : Der Grund, warum das {{WebExtAPIRef("runtime.onInstalled")}} Ereignis ausgelöst wird.
- {{WebExtAPIRef("runtime.OnPerformanceWarningCategory")}}
  - : Die Kategorie der Warnung, die das {{WebExtAPIRef("runtime.onPerformanceWarning")}} Ereignis ausgelöst hat.
- {{WebExtAPIRef("runtime.OnPerformanceWarningSeverity")}}
  - : Der Schweregrad der Warnung, die das {{WebExtAPIRef("runtime.onPerformanceWarning")}} Ereignis ausgelöst hat.
- {{WebExtAPIRef("runtime.OnRestartRequiredReason")}}
  - : Der Grund, warum das {{WebExtAPIRef("runtime.onRestartRequired")}} Ereignis ausgelöst wird.

## Eigenschaften

- {{WebExtAPIRef("runtime.lastError")}}
  - : Dieser Wert wird gesetzt, wenn eine asynchrone Funktion eine Fehlersituation hat, die sie ihrem Aufrufer melden muss.
- {{WebExtAPIRef("runtime.id")}}
  - : Die ID der Erweiterung.

## Funktionen

- {{WebExtAPIRef("runtime.getBackgroundPage()")}}
  - : Ruft das [Window](/de/docs/Web/API/Window)-Objekt für die Hintergrundseite ab, die in der aktuellen Erweiterung läuft.
- {{WebExtAPIRef("runtime.openOptionsPage()")}}
  - : Öffnet die [Optionsseite](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages) Ihrer Erweiterung.
- {{WebExtAPIRef("runtime.getContexts()")}}
  - : Ruft Details über die mit der Erweiterung verbundenen Kontexte ab.
- {{WebExtAPIRef("runtime.getFrameId()")}}
  - : Ruft die Frame-ID eines beliebigen Fenster-Globals oder Frame-Elements ab.
- {{WebExtAPIRef("runtime.getManifest()")}}
  - : Ruft die komplette [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) Datei ab, serialisiert als Objekt.
- {{WebExtAPIRef("runtime.getURL()")}}
  - : Gibt bei Angabe eines relativen Pfads von der [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) zu einer mit der Erweiterung gepackten Ressource eine vollständig qualifizierte URL zurück.
- {{WebExtAPIRef("runtime.setUninstallURL()")}}
  - : Legt eine URL fest, die beim Deinstallieren der Erweiterung aufgerufen wird.
- {{WebExtAPIRef("runtime.reload()")}}
  - : Lädt die Erweiterung neu.
- {{WebExtAPIRef("runtime.requestUpdateCheck()")}}
  - : Überprüft auf Updates für diese Erweiterung.
- {{WebExtAPIRef("runtime.connect()")}}
  - : Stellt eine Verbindung von einem Content-Skript zum Hauptprozess der Erweiterung her oder von einer Erweiterung zu einer anderen Erweiterung.
- {{WebExtAPIRef("runtime.connectNative()")}}
  - : Verbindet die Erweiterung mit einer nativen Anwendung auf dem Computer des Benutzers.
- {{WebExtAPIRef("runtime.sendMessage()")}}
  - : Sendet eine Nachricht an Ereignis-Listener innerhalb Ihrer Erweiterung oder einer anderen Erweiterung. Ähnlich wie {{WebExtAPIRef('runtime.connect')}}, jedoch wird nur eine einzelne Nachricht gesendet, mit optionaler Antwort.
- {{WebExtAPIRef("runtime.sendNativeMessage()")}}
  - : Sendet eine Nachricht von einer Erweiterung zu einer nativen Anwendung.
- {{WebExtAPIRef("runtime.getPlatformInfo()")}}
  - : Gibt Informationen über die aktuelle Plattform zurück.
- {{WebExtAPIRef("runtime.getBrowserInfo()")}}
  - : Gibt Informationen über den Browser zurück, in dem diese Erweiterung installiert ist.
- {{WebExtAPIRef("runtime.getPackageDirectoryEntry()")}}
  - : Gibt ein DirectoryEntry für das Paketverzeichnis zurück.

## Ereignisse

- {{WebExtAPIRef("runtime.onStartup")}}
  - : Wird ausgelöst, wenn ein Profil, das diese Erweiterung installiert hat, zum ersten Mal gestartet wird. Dieses Ereignis wird nicht ausgelöst, wenn ein Inkognito-Profil gestartet wird.
- {{WebExtAPIRef("runtime.onInstalled")}}
  - : Wird ausgelöst, wenn die Erweiterung zum ersten Mal installiert wird, wenn die Erweiterung auf eine neue Version aktualisiert wird und wenn der Browser auf eine neue Version aktualisiert wird.
- {{WebExtAPIRef("runtime.onSuspend")}}
  - : Wird an die Ereignisseite gesendet, kurz bevor die Erweiterung entladen wird. Dies gibt der Erweiterung die Möglichkeit, einige Bereinigungsmaßnahmen durchzuführen.
- {{WebExtAPIRef("runtime.onSuspendCanceled")}}
  - : Wird gesendet, nachdem {{WebExtAPIRef("runtime.onSuspend")}}, um anzuzeigen, dass die Erweiterung doch nicht entladen wird.
- {{WebExtAPIRef("runtime.onUpdateAvailable")}}
  - : Wird ausgelöst, wenn ein Update verfügbar ist, aber nicht sofort installiert wird, da die Erweiterung gerade läuft.
- {{WebExtAPIRef("runtime.onBrowserUpdateAvailable")}} {{deprecated_inline}}
  - : Wird ausgelöst, wenn ein Update für den Browser verfügbar ist, aber nicht sofort installiert wird, da ein Browserneustart erforderlich ist.
- {{WebExtAPIRef("runtime.onConnect")}}
  - : Wird ausgelöst, wenn eine Verbindung mit einem Erweiterungsprozess oder einem Inhalts-Skript hergestellt wird.
- {{WebExtAPIRef("runtime.onConnectExternal")}}
  - : Wird ausgelöst, wenn eine Verbindung mit einer anderen Erweiterung hergestellt wird.
- {{WebExtAPIRef("runtime.onUserScriptConnect")}}
  - : Wird ausgelöst, wenn eine Verbindung mit einem von der Erweiterung registrierten Benutzer-Skript hergestellt wird.
- {{WebExtAPIRef("runtime.onMessage")}}
  - : Wird ausgelöst, wenn eine Nachricht von einem Erweiterungsprozess oder einem Inhalts-Skript gesendet wird.
- {{WebExtAPIRef("runtime.onMessageExternal")}}
  - : Wird ausgelöst, wenn eine Nachricht von einer anderen Erweiterung gesendet wird. Kann nicht in einem Inhalts-Skript verwendet werden.
- {{WebExtAPIRef("runtime.onUserScriptMessage")}}
  - : Wird ausgelöst, wenn eine Nachricht von einem von der Erweiterung registrierten Benutzer-Skript gesendet wird.
- {{WebExtAPIRef("runtime.onPerformanceWarning")}}
  - : Wird ausgelöst, wenn ein Laufzeit-Performanceproblem für die Erweiterung erkannt wird.
- {{WebExtAPIRef("runtime.onRestartRequired")}}
  - : Wird ausgelöst, wenn das Gerät neu gestartet werden muss.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.runtime`](https://developer.chrome.com/docs/extensions/reference/api/runtime) API. Diese Dokumentation stammt aus [`runtime.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/runtime.json) im Chromium-Code.

<!--
// Copyright 2015 The Chromium Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
-->
