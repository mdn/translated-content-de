---
title: tabs
slug: Mozilla/Add-ons/WebExtensions/API/tabs
l10n:
  sourceCommit: 674fbb492c76a45adf433810f0f5737a0405bd9c
---

Interagieren Sie mit dem Tab-System des Browsers.

> [!NOTE]
> Bei Verwendung von Manifest V3 oder höher stellt die {{WebExtAPIRef("scripting")}}-API die Methoden zum Ausführen von Skripten, Einfügen von CSS und Entfernen von CSS bereit: {{WebExtAPIRef("scripting.executeScript()")}}, {{WebExtAPIRef("scripting.insertCSS()")}} und {{WebExtAPIRef("scripting.removeCSS()")}}.

Mit dieser API können Sie eine nach verschiedenen Kriterien gefilterte Liste geöffneter Tabs abrufen sowie Tabs öffnen, aktualisieren, verschieben, neu laden und entfernen. Sie können mit dieser API nicht direkt auf die Inhalte von Tabs zugreifen. Mit den APIs {{WebExtAPIRef("tabs.executeScript()")}} und {{WebExtAPIRef("tabs.insertCSS()")}} können Sie jedoch JavaScript und CSS in Tabs einfügen.

Den Großteil dieser API können Sie ohne besondere Berechtigung verwenden. Allerdings gilt:

- Für den Zugriff auf `Tab.url`, `Tab.title` und `Tab.favIconUrl` sowie zum Filtern nach diesen Eigenschaften mit {{WebExtAPIRef("tabs.query()")}} benötigen Sie die [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) `"tabs"` oder [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions), die auf `Tab.url` zutreffen.
  - Der Zugriff auf diese Eigenschaften über Host-Berechtigungen wird seit Firefox 86 und Chrome 50 unterstützt. In Firefox 85 und früher war stattdessen die Berechtigung `"tabs"` erforderlich.

- Für die Verwendung von {{WebExtAPIRef("tabs.executeScript()")}} oder {{WebExtAPIRef("tabs.insertCSS()")}} benötigen Sie die [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für den Tab.

Alternativ können Sie diese Berechtigungen als Reaktion auf eine ausdrückliche Benutzeraktion vorübergehend für den aktiven Tab erhalten, indem Sie die [Berechtigung `activeTab`](/de/docs/Mozilla/Add-ons/WebExtensions/activeTab_permission) anfordern.

Viele Tab-Operationen verwenden eine Tab-`id`. Die Eindeutigkeit von Tab-`id`s ist nur innerhalb einer Browsersitzung gewährleistet. Nach einem Neustart kann der Browser Tab-`id`s erneut verwenden und wird dies auch tun. Um Informationen auch über Browserneustarts hinweg einem Tab zuzuordnen, verwenden Sie {{WebExtAPIRef("sessions.setTabValue()")}}.

## Typen

- {{WebExtAPIRef("tabs.MutedInfoReason")}}
  - : Gibt den Grund an, warum ein Tab stummgeschaltet oder die Stummschaltung aufgehoben wurde.
- {{WebExtAPIRef("tabs.MutedInfo")}}
  - : Dieses Objekt enthält einen booleschen Wert, der angibt, ob der Tab stummgeschaltet ist, sowie den Grund für die letzte Zustandsänderung.
- {{WebExtAPIRef("tabs.PageSettings")}}
  - : Wird verwendet, um zu steuern, wie ein Tab von der Methode [`tabs.saveAsPDF()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/saveAsPDF) als PDF gerendert wird.
- {{WebExtAPIRef("tabs.Tab")}}
  - : Dieser Typ enthält Informationen über einen Tab.
- {{WebExtAPIRef("tabs.TabStatus")}}
  - : Gibt an, ob das Laden des Tabs abgeschlossen ist.
- {{WebExtAPIRef("tabs.WindowType")}}
  - : Der Typ des Fensters, das diesen Tab enthält.
- {{WebExtAPIRef("tabs.ZoomSettingsMode")}}
  - : Legt fest, ob Zoomänderungen vom Browser oder von der Erweiterung verarbeitet werden oder deaktiviert sind.
- {{WebExtAPIRef("tabs.ZoomSettingsScope")}}
  - : Legt fest, ob Zoomänderungen für die Origin der Seite bestehen bleiben oder nur in diesem Tab wirksam sind.
- {{WebExtAPIRef("tabs.ZoomSettings")}}
  - : Definiert die Zoomeinstellungen {{WebExtAPIRef("tabs.ZoomSettingsMode", "mode")}} und {{WebExtAPIRef("tabs.ZoomSettingsScope", "scope")}} sowie den standardmäßigen Zoomfaktor.

## Eigenschaften

- {{WebExtAPIRef("tabs.TAB_ID_NONE")}}
  - : Ein spezieller ID-Wert für Tabs, die keine Browser-Tabs sind (beispielsweise Tabs in Entwicklerwerkzeugfenstern).
- {{WebExtAPIRef("tabs.SPLIT_VIEW_ID_NONE")}}
  - : Ein spezieller ID-Wert für Tabs, die sich nicht in einer [geteilten Ansicht](/de/docs/Mozilla/Add-ons/WebExtensions/Working_with_the_Tabs_API#working_with_tab_split_views) befinden.

## Funktionen

- {{WebExtAPIRef("tabs.captureTab()")}}
  - : Erstellt eine Daten-URL, die ein Bild des sichtbaren Bereichs des angegebenen Tabs enthält.
- {{WebExtAPIRef("tabs.captureVisibleTab()")}}
  - : Erstellt eine Daten-URL, die ein Bild des sichtbaren Bereichs des derzeit aktiven Tabs im angegebenen Fenster enthält.
- {{WebExtAPIRef("tabs.connect()")}}
  - : Stellt eine Nachrichtenverbindung zwischen den Hintergrundskripten der Erweiterung (oder anderen privilegierten Skripten wie Popup-Skripten oder Skripten der Optionsseite) und allen [Content-Skripten](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) her, die im angegebenen Tab ausgeführt werden.
- {{WebExtAPIRef("tabs.create()")}}
  - : Erstellt einen neuen Tab.
- {{WebExtAPIRef("tabs.detectLanguage()")}}
  - : Erkennt die Hauptsprache des Inhalts in einem Tab.
- {{WebExtAPIRef("tabs.discard()")}}
  - : Verwirft einen oder mehrere Tabs.
- {{WebExtAPIRef("tabs.duplicate()")}}
  - : Dupliziert einen Tab.
- {{WebExtAPIRef("tabs.executeScript()")}} (nur Manifest V2)
  - : Fügt JavaScript-Code in eine Seite ein.
- {{WebExtAPIRef("tabs.get()")}}
  - : Ruft Details zum angegebenen Tab ab.
- {{WebExtAPIRef("tabs.getAllInWindow()")}} {{deprecated_inline}}
  - : Ruft Details zu allen Tabs im angegebenen Fenster ab.
- {{WebExtAPIRef("tabs.getCurrent()")}}
  - : Ruft Informationen über den Tab ab, in dem dieses Skript ausgeführt wird, und gibt sie als [`tabs.Tab`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/Tab)-Objekt zurück.
- {{WebExtAPIRef("tabs.getSelected()")}} {{deprecated_inline}}
  - : Ruft den im angegebenen Fenster ausgewählten Tab ab. **Veraltet**: Verwenden Sie stattdessen [`tabs.query({active: true})`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query).
- {{WebExtAPIRef("tabs.getZoom()")}}
  - : Ruft den aktuellen Zoomfaktor des angegebenen Tabs ab.
- {{WebExtAPIRef("tabs.getZoomSettings()")}}
  - : Ruft die aktuellen Zoomeinstellungen für den angegebenen Tab ab.
- {{WebExtAPIRef("tabs.goForward()")}}
  - : Navigiert zur nächsten Seite, falls eine verfügbar ist.
- {{WebExtAPIRef("tabs.goBack()")}}
  - : Navigiert zur vorherigen Seite, falls eine verfügbar ist.
- {{WebExtAPIRef("tabs.group()")}}
  - : Fügt Tabs einer Tab-Gruppe hinzu.
- {{WebExtAPIRef("tabs.hide()")}} {{experimental_inline}}
  - : Blendet einen oder mehrere Tabs aus.
- {{WebExtAPIRef("tabs.highlight()")}}
  - : Hebt einen oder mehrere Tabs hervor.
- {{WebExtAPIRef("tabs.insertCSS()")}} (nur Manifest V2)
  - : Fügt CSS in eine Seite ein.
- {{WebExtAPIRef("tabs.move()")}}
  - : Verschiebt einen oder mehrere Tabs an eine neue Position im selben Fenster oder in ein anderes Fenster.
- {{WebExtApiRef("tabs.moveInSuccession()")}}
  - : Ändert die Nachfolgebeziehung für eine Gruppe von Tabs.
- {{WebExtAPIRef("tabs.print()")}}
  - : Druckt den Inhalt des aktiven Tabs.
- {{WebExtAPIRef("tabs.printPreview()")}}
  - : Öffnet die Druckvorschau für den aktiven Tab.
- {{WebExtAPIRef("tabs.query()")}}
  - : Ruft alle Tabs mit den angegebenen Eigenschaften ab oder alle Tabs, wenn keine Eigenschaften angegeben sind.
- {{WebExtAPIRef("tabs.reload()")}}
  - : Lädt einen Tab neu, wobei der lokale Webcache optional umgangen werden kann.
- {{WebExtAPIRef("tabs.remove()")}}
  - : Schließt einen oder mehrere Tabs.
- {{WebExtAPIRef("tabs.removeCSS()")}} (nur Manifest V2)
  - : Entfernt CSS von einer Seite, das zuvor durch einen Aufruf von {{WebExtAPIRef("tabs.insertCSS()")}} eingefügt wurde.
- {{WebExtAPIRef("tabs.saveAsPDF()")}}
  - : Speichert die aktuelle Seite als PDF.
- {{WebExtAPIRef("tabs.sendMessage()")}}
  - : Sendet eine einzelne Nachricht an die Content-Skripte im angegebenen Tab.
- {{WebExtAPIRef("tabs.sendRequest()")}} {{deprecated_inline}}
  - : Sendet eine einzelne Anfrage an die Content-Skripte im angegebenen Tab. **Veraltet**: Verwenden Sie stattdessen {{WebExtAPIRef("tabs.sendMessage()")}}.
- {{WebExtAPIRef("tabs.setZoom()")}}
  - : Ändert den Zoomfaktor des angegebenen Tabs.
- {{WebExtAPIRef("tabs.setZoomSettings()")}}
  - : Legt die Zoomeinstellungen für den angegebenen Tab fest.
- {{WebExtAPIRef("tabs.show()")}} {{experimental_inline}}
  - : Zeigt einen oder mehrere Tabs an, die mit {{WebExtAPIRef("tabs.hide()", "hidden")}} ausgeblendet wurden.
- {{WebExtAPIRef("tabs.toggleReaderMode()")}}
  - : Schaltet den Lesemodus für den angegebenen Tab ein oder aus.
- {{WebExtAPIRef("tabs.ungroup()")}}
  - : Entfernt Tabs aus Tab-Gruppen.
- {{WebExtAPIRef("tabs.update()")}}
  - : Navigiert den Tab zu einer neuen URL oder ändert andere Eigenschaften des Tabs.
- {{WebExtAPIRef("tabs.warmup()")}}
  - : Bereitet den Tab darauf vor, einen möglichen anschließenden Wechsel zu beschleunigen.

## Ereignisse

- {{WebExtAPIRef("tabs.onActivated")}}
  - : Wird ausgelöst, wenn sich der aktive Tab in einem Fenster ändert. Beachten Sie, dass die URL des Tabs zum Zeitpunkt der Auslösung dieses Ereignisses möglicherweise noch nicht festgelegt ist.
- {{WebExtAPIRef("tabs.onActiveChanged")}} {{deprecated_inline}}
  - : Wird ausgelöst, wenn sich der ausgewählte Tab in einem Fenster ändert. **Veraltet**: Verwenden Sie stattdessen {{WebExtAPIRef("tabs.onActivated")}}.
- {{WebExtAPIRef("tabs.onAttached")}}
  - : Wird ausgelöst, wenn ein Tab einem Fenster hinzugefügt wird, beispielsweise weil er zwischen Fenstern verschoben wurde.
- {{WebExtAPIRef("tabs.onCreated")}}
  - : Wird ausgelöst, wenn ein Tab erstellt wird. Beachten Sie, dass die URL des Tabs zum Zeitpunkt der Auslösung dieses Ereignisses möglicherweise noch nicht festgelegt ist.
- {{WebExtAPIRef("tabs.onDetached")}}
  - : Wird ausgelöst, wenn ein Tab von einem Fenster gelöst wird, beispielsweise weil er zwischen Fenstern verschoben wird.
- {{WebExtAPIRef("tabs.onHighlightChanged")}} {{deprecated_inline}}
  - : Wird ausgelöst, wenn sich die hervorgehobenen oder ausgewählten Tabs in einem Fenster ändern. **Veraltet**: Verwenden Sie stattdessen {{WebExtAPIRef("tabs.onHighlighted")}}.
- {{WebExtAPIRef("tabs.onHighlighted")}}
  - : Wird ausgelöst, wenn sich die hervorgehobenen oder ausgewählten Tabs in einem Fenster ändern.
- {{WebExtAPIRef("tabs.onMoved")}}
  - : Wird ausgelöst, wenn ein Tab innerhalb eines Fensters verschoben wird.
- {{WebExtAPIRef("tabs.onRemoved")}}
  - : Wird ausgelöst, wenn ein Tab geschlossen wird.
- {{WebExtAPIRef("tabs.onReplaced")}}
  - : Wird ausgelöst, wenn ein Tab aufgrund von Prerendering durch einen anderen Tab ersetzt wird.
- {{WebExtAPIRef("tabs.onSelectionChanged")}} {{deprecated_inline}}
  - : Wird ausgelöst, wenn sich der ausgewählte Tab in einem Fenster ändert. **Veraltet**: Verwenden Sie stattdessen {{WebExtAPIRef("tabs.onActivated")}}.
- {{WebExtAPIRef("tabs.onUpdated")}}
  - : Wird ausgelöst, wenn ein Tab aktualisiert wird.
- {{WebExtAPIRef("tabs.onZoomChange")}}
  - : Wird ausgelöst, wenn der Zoomfaktor eines Tabs geändert wird.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs)-API von Chromium. Diese Dokumentation wurde von [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code abgeleitet.

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
