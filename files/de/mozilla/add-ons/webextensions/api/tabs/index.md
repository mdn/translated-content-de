---
title: tabs
slug: Mozilla/Add-ons/WebExtensions/API/tabs
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Interagieren Sie mit dem Tabsystem des Browsers.

> [!NOTE]
> Wenn Sie Manifest V3 oder höher verwenden, werden die Methoden zum Ausführen von Skripten, Einfügen von CSS und Entfernen von CSS durch die {{WebExtAPIRef("scripting")}} API über die Methoden {{WebExtAPIRef("scripting.executeScript()")}}, {{WebExtAPIRef("scripting.insertCSS()")}} und {{WebExtAPIRef("scripting.removeCSS()")}} bereitgestellt.

Sie können diese API verwenden, um eine Liste geöffneter Tabs zu erhalten, gefiltert nach verschiedenen Kriterien, und um Tabs zu öffnen, zu aktualisieren, zu verschieben, neu zu laden und zu entfernen. Sie können mit dieser API nicht direkt auf die von Tabs gehosteten Inhalte zugreifen, aber Sie können JavaScript und CSS in Tabs mit den APIs {{WebExtAPIRef("tabs.executeScript()")}} oder {{WebExtAPIRef("tabs.insertCSS()")}} einfügen.

Sie können den Großteil dieser API ohne besondere Berechtigung nutzen. Allerdings:

- Um auf `Tab.url`, `Tab.title` und `Tab.favIconUrl` zuzugreifen (oder um nach diesen Eigenschaften über {{WebExtAPIRef("tabs.query()")}} zu filtern), benötigen Sie die `"tabs"` [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) oder [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions), die mit `Tab.url` übereinstimmen.
  - Der Zugriff auf diese Eigenschaften durch Host-Berechtigungen wird seit Firefox 86 und Chrome 50 unterstützt. In Firefox 85 und älter war stattdessen die "tabs"-Berechtigung erforderlich.

- Um {{WebExtAPIRef("tabs.executeScript()")}} oder {{WebExtAPIRef("tabs.insertCSS()")}} zu verwenden, müssen Sie die [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für das Tab haben.

Alternativ können Sie diese Berechtigungen vorübergehend nur für das aktuell aktive Tab und nur als Antwort auf eine explizite Benutzeraktion erhalten, indem Sie die [`"activeTab"` Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) anfordern.

Viele Tab-Operationen verwenden eine Tab-`id`. Tab-`id`s sind nur innerhalb einer Browser-Sitzung für ein einzelnes Tab eindeutig garantiert. Wenn der Browser neu gestartet wird, können Tab-`id`s wiederverwendet werden. Um Informationen mit einem Tab über Browser-Neustarts hinweg zu verknüpfen, verwenden Sie {{WebExtAPIRef("sessions.setTabValue()")}}.

## Typen

- {{WebExtAPIRef("tabs.MutedInfoReason")}}
  - : Gibt den Grund an, warum ein Tab stummgeschaltet oder lautgeschaltet wurde.
- {{WebExtAPIRef("tabs.MutedInfo")}}
  - : Dieses Objekt enthält einen booleschen Wert, der angibt, ob das Tab stummgeschaltet ist, und den Grund für die letzte Statusänderung.
- {{WebExtAPIRef("tabs.PageSettings")}}
  - : Wird verwendet, um zu steuern, wie ein Tab als PDF durch die Methode [`tabs.saveAsPDF()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/saveAsPDF) gerendert wird.
- {{WebExtAPIRef("tabs.Tab")}}
  - : Dieser Typ enthält Informationen über ein Tab.
- {{WebExtAPIRef("tabs.TabStatus")}}
  - : Gibt an, ob das Tab das Laden abgeschlossen hat.
- {{WebExtAPIRef("tabs.WindowType")}}
  - : Der Fenstertyp, der dieses Tab hostet.
- {{WebExtAPIRef("tabs.ZoomSettingsMode")}}
  - : Definiert, ob Zoomänderungen vom Browser, von der Erweiterung oder gar nicht gehandhabt werden.
- {{WebExtAPIRef("tabs.ZoomSettingsScope")}}
  - : Definiert, ob Zoomänderungen für den Ursprung der Seite bestehen bleiben oder nur in diesem Tab wirksam sind.
- {{WebExtAPIRef("tabs.ZoomSettings")}}
  - : Definiert Zoom-Einstellungen {{WebExtAPIRef("tabs.ZoomSettingsMode", "mode")}}, {{WebExtAPIRef("tabs.ZoomSettingsScope", "scope")}}, und den Standard-Zoomfaktor.

## Eigenschaften

- {{WebExtAPIRef("tabs.TAB_ID_NONE")}}
  - : Ein spezieller ID-Wert, der Tabs zugewiesen wird, die keine Browser-Tabs sind (zum Beispiel Tabs in Entwicklerwerkzeug-Fenstern).

## Funktionen

- {{WebExtAPIRef("tabs.captureTab()")}}
  - : Erstellt eine Daten-URL, die ein Bild des sichtbaren Bereichs des angegebenen Tabs kodiert.
- {{WebExtAPIRef("tabs.captureVisibleTab()")}}
  - : Erstellt eine Daten-URL, die ein Bild des sichtbaren Bereichs des aktuell aktiven Tabs im angegebenen Fenster kodiert.
- {{WebExtAPIRef("tabs.connect()")}}
  - : Richtet eine Nachrichtenverbindung zwischen den Hintergrundskripten der Erweiterung (oder anderen privilegierten Skripten, wie Popup-Skripten oder Optionsseiten-Skripten) und den im angegebenen Tab ausgeführten [Inhalts-Skripten](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) ein.
- {{WebExtAPIRef("tabs.create()")}}
  - : Erstellt ein neues Tab.
- {{WebExtAPIRef("tabs.detectLanguage()")}}
  - : Erkennt die primäre Sprache des Inhalts in einem Tab.
- {{WebExtAPIRef("tabs.discard()")}}
  - : Entlädt ein oder mehrere Tabs.
- {{WebExtAPIRef("tabs.duplicate()")}}
  - : Dupliziert ein Tab.
- {{WebExtAPIRef("tabs.executeScript()")}} (Nur Manifest V2)
  - : Injiziert JavaScript-Code in eine Seite.
- {{WebExtAPIRef("tabs.get()")}}
  - : Ruft Details über das angegebene Tab ab.
- {{WebExtAPIRef("tabs.getAllInWindow()")}} {{deprecated_inline}}
  - : Ruft Details über alle Tabs im angegebenen Fenster ab.
- {{WebExtAPIRef("tabs.getCurrent()")}}
  - : Ruft Informationen über das Tab ab, in dem dieses Skript ausgeführt wird, als ein [`tabs.Tab`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/Tab)-Objekt.
- {{WebExtAPIRef("tabs.getSelected()")}} {{deprecated_inline}}
  - : Ruft das im angegebenen Fenster ausgewählte Tab ab. **Veraltet**: Verwenden Sie stattdessen [`tabs.query({active: true})`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query).
- {{WebExtAPIRef("tabs.getZoom()")}}
  - : Ruft den aktuellen Zoomfaktor des angegebenen Tabs ab.
- {{WebExtAPIRef("tabs.getZoomSettings()")}}
  - : Ruft die aktuellen Zoom-Einstellungen für das angegebene Tab ab.
- {{WebExtAPIRef("tabs.goForward()")}}
  - : Geht zur nächsten Seite weiter, falls eine vorhanden ist.
- {{WebExtAPIRef("tabs.goBack()")}}
  - : Geht zur vorherigen Seite zurück, falls eine vorhanden ist.
- {{WebExtAPIRef("tabs.group()")}}
  - : Fügt Tabs zu einer Tab-Gruppe hinzu.
- {{WebExtAPIRef("tabs.hide()")}} {{experimental_inline}}
  - : Verbirgt ein oder mehrere Tabs.
- {{WebExtAPIRef("tabs.highlight()")}}
  - : Markiert ein oder mehrere Tabs.
- {{WebExtAPIRef("tabs.insertCSS()")}} (Nur Manifest V2)
  - : Injiziert CSS in eine Seite.
- {{WebExtAPIRef("tabs.move()")}}
  - : Verschiebt ein oder mehrere Tabs in eine neue Position im gleichen Fenster oder in ein anderes Fenster.
- {{WebExtApiRef("tabs.moveInSuccession()")}}
  - : Modifiziert die Abhängigkeit in der Reihenfolge für eine Gruppe von Tabs.
- {{WebExtAPIRef("tabs.print()")}}
  - : Druckt den Inhalt des aktiven Tabs.
- {{WebExtAPIRef("tabs.printPreview()")}}
  - : Öffnet die Druckvorschau für das aktive Tab.
- {{WebExtAPIRef("tabs.query()")}}
  - : Ruft alle Tabs mit den angegebenen Eigenschaften ab, oder alle Tabs, wenn keine Eigenschaften angegeben sind.
- {{WebExtAPIRef("tabs.reload()")}}
  - : Lädt ein Tab erneut, optional unter Umgehung des lokalen Webcaches.
- {{WebExtAPIRef("tabs.remove()")}}
  - : Schließt ein oder mehrere Tabs.
- {{WebExtAPIRef("tabs.removeCSS()")}} (Nur Manifest V2)
  - : Entfernt aus einer Seite CSS, das zuvor durch einen Aufruf von {{WebExtAPIRef("tabs.insertCSS()")}} injiziert wurde.
- {{WebExtAPIRef("tabs.saveAsPDF()")}}
  - : Speichert die aktuelle Seite als PDF.
- {{WebExtAPIRef("tabs.sendMessage()")}}
  - : Sendet eine einzelne Nachricht an das/die Inhalts-Skript(e) im angegebenen Tab.
- {{WebExtAPIRef("tabs.sendRequest()")}} {{deprecated_inline}}
  - : Sendet eine einzelne Anfrage an das/die Inhalts-Skript(e) im angegebenen Tab. **Veraltet**: Verwenden Sie statt dessen {{WebExtAPIRef("tabs.sendMessage()")}}.
- {{WebExtAPIRef("tabs.setZoom()")}}
  - : Zoomt das angegebene Tab.
- {{WebExtAPIRef("tabs.setZoomSettings()")}}
  - : Legt die Zoom-Einstellungen für das angegebene Tab fest.
- {{WebExtAPIRef("tabs.show()")}} {{experimental_inline}}
  - : Zeigt ein oder mehrere zuvor {{WebExtAPIRef("tabs.hide()", "versteckte")}} Tabs an.
- {{WebExtAPIRef("tabs.toggleReaderMode()")}}
  - : Schaltet den Leser-Modus für das angegebene Tab um.
- {{WebExtAPIRef("tabs.ungroup()")}}
  - : Entfernt Tabs aus Tab-Gruppen.
- {{WebExtAPIRef("tabs.update()")}}
  - : Navigiert das Tab zu einer neuen URL oder ändert andere Eigenschaften des Tabs.
- {{WebExtAPIRef("tabs.warmup()")}}
  - : Bereitet das Tab vor, um einen potenziellen folgenden Wechsel schneller zu machen.

## Ereignisse

- {{WebExtAPIRef("tabs.onActivated")}}
  - : Wird ausgelöst, wenn sich das aktive Tab in einem Fenster ändert. Beachten Sie, dass die URL des Tabs möglicherweise nicht gesetzt ist, wenn dieses Ereignis ausgelöst wird.
- {{WebExtAPIRef("tabs.onActiveChanged")}} {{deprecated_inline}}
  - : Wird ausgelöst, wenn sich das ausgewählte Tab in einem Fenster ändert. **Veraltet**: Verwenden Sie statt dessen {{WebExtAPIRef("tabs.onActivated")}}.
- {{WebExtAPIRef("tabs.onAttached")}}
  - : Wird ausgelöst, wenn ein Tab an ein Fenster angehängt wird, zum Beispiel weil es zwischen Fenstern verschoben wurde.
- {{WebExtAPIRef("tabs.onCreated")}}
  - : Wird ausgelöst, wenn ein Tab erstellt wird. Beachten Sie, dass die URL des Tabs möglicherweise nicht gesetzt ist, wenn dieses Ereignis ausgelöst wird.
- {{WebExtAPIRef("tabs.onDetached")}}
  - : Wird ausgelöst, wenn ein Tab von einem Fenster abgetrennt wird, zum Beispiel weil es zwischen Fenstern verschoben wird.
- {{WebExtAPIRef("tabs.onHighlightChanged")}} {{deprecated_inline}}
  - : Wird ausgelöst, wenn sich die markierten oder ausgewählten Tabs in einem Fenster ändern. **Veraltet**: Verwenden Sie statt dessen {{WebExtAPIRef("tabs.onHighlighted")}}.
- {{WebExtAPIRef("tabs.onHighlighted")}}
  - : Wird ausgelöst, wenn sich die markierten oder ausgewählten Tabs in einem Fenster ändern.
- {{WebExtAPIRef("tabs.onMoved")}}
  - : Wird ausgelöst, wenn ein Tab innerhalb eines Fensters verschoben wird.
- {{WebExtAPIRef("tabs.onRemoved")}}
  - : Wird ausgelöst, wenn ein Tab geschlossen wird.
- {{WebExtAPIRef("tabs.onReplaced")}}
  - : Wird ausgelöst, wenn ein Tab durch ein anderes Tab aufgrund von Vorab-Rendering ersetzt wird.
- {{WebExtAPIRef("tabs.onSelectionChanged")}} {{deprecated_inline}}
  - : Wird ausgelöst, wenn sich das ausgewählte Tab in einem Fenster ändert. **Veraltet**: Verwenden Sie statt dessen {{WebExtAPIRef("tabs.onActivated")}}.
- {{WebExtAPIRef("tabs.onUpdated")}}
  - : Wird ausgelöst, wenn ein Tab aktualisiert wird.
- {{WebExtAPIRef("tabs.onZoomChange")}}
  - : Wird ausgelöst, wenn ein Tab gezoomt wird.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs) API von Chromium. Diese Dokumentation ist von [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code abgeleitet.

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
