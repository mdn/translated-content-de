---
title: tabs
slug: Mozilla/Add-ons/WebExtensions/API/tabs
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Interagieren Sie mit dem Tab-System des Browsers.

> [!NOTE]
> Bei der Verwendung von Manifest V3 oder höher werden die Methoden zum Ausführen von Skripten, Einfügen von CSS und Entfernen von CSS durch die {{WebExtAPIRef("scripting")}} API mithilfe der Methoden {{WebExtAPIRef("scripting.executeScript()")}}, {{WebExtAPIRef("scripting.insertCSS()")}} und {{WebExtAPIRef("scripting.removeCSS()")}} bereitgestellt.

Sie können diese API verwenden, um eine Liste geöffneter Tabs zu erhalten, die nach verschiedenen Kriterien gefiltert sind, und um Tabs zu öffnen, zu aktualisieren, zu verschieben, neu zu laden und zu entfernen. Sie können nicht direkt auf den von Tabs gehosteten Inhalt zugreifen, aber Sie können JavaScript und CSS in Tabs einfügen, indem Sie die APIs {{WebExtAPIRef("tabs.executeScript()")}} oder {{WebExtAPIRef("tabs.insertCSS()")}} verwenden.

Die meisten dieser APIs können ohne besondere Berechtigung verwendet werden. Jedoch:

- Um auf `Tab.url`, `Tab.title` und `Tab.favIconUrl` zuzugreifen (oder um nach diesen Eigenschaften über {{WebExtAPIRef("tabs.query()")}} zu filtern), müssen Sie die `"tabs"` [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) haben oder [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) besitzen, die mit `Tab.url` übereinstimmen.
  - Der Zugriff auf diese Eigenschaften durch Host-Berechtigungen wird seit Firefox 86 und Chrome 50 unterstützt. In Firefox 85 und früher war stattdessen die "tabs" Berechtigung erforderlich.

- Um {{WebExtAPIRef("tabs.executeScript()")}} oder {{WebExtAPIRef("tabs.insertCSS()")}} zu verwenden, müssen Sie die [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für den Tab haben.

Alternativ können Sie diese Berechtigungen vorübergehend nur für den aktuell aktiven Tab und nur als Antwort auf eine explizite Benutzeraktion erhalten, indem Sie die [`"activeTab"` Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) anfordern.

Viele Tab-Operationen verwenden eine Tab-`id`. Tab-`id`s sind innerhalb einer Browsersitzung eindeutig für einen einzelnen Tab garantiert. Wenn der Browser neu gestartet wird, können und werden Tab-`id`s wiederverwendet. Um Informationen mit einem Tab über Browserneustarts hinweg zu verknüpfen, verwenden Sie {{WebExtAPIRef("sessions.setTabValue()")}}.

## Typen

- {{WebExtAPIRef("tabs.MutedInfoReason")}}
  - : Gibt den Grund an, warum ein Tab stummgeschaltet oder die Stummschaltung aufgehoben wurde.
- {{WebExtAPIRef("tabs.MutedInfo")}}
  - : Dieses Objekt enthält ein boolesches Feld, das angibt, ob der Tab stummgeschaltet ist, und den Grund für die letzte Statusänderung.
- {{WebExtAPIRef("tabs.PageSettings")}}
  - : Wird verwendet, um zu steuern, wie ein Tab als PDF vom [`tabs.saveAsPDF()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/saveAsPDF)-Methode gerendert wird.
- {{WebExtAPIRef("tabs.Tab")}}
  - : Dieser Typ enthält Informationen über einen Tab.
- {{WebExtAPIRef("tabs.TabStatus")}}
  - : Zeigt an, ob der Tab das Laden abgeschlossen hat.
- {{WebExtAPIRef("tabs.WindowType")}}
  - : Der Fenstertyp, der diesen Tab hostet.
- {{WebExtAPIRef("tabs.ZoomSettingsMode")}}
  - : Definiert, ob Zoomänderungen vom Browser, von der Erweiterung oder deaktiviert gehandhabt werden.
- {{WebExtAPIRef("tabs.ZoomSettingsScope")}}
  - : Definiert, ob Zoomänderungen für den Ursprung der Seite bestehen bleiben oder nur in diesem Tab wirksam werden.
- {{WebExtAPIRef("tabs.ZoomSettings")}}
  - : Definiert Zoom-Einstellungen {{WebExtAPIRef("tabs.ZoomSettingsMode", "mode")}}, {{WebExtAPIRef("tabs.ZoomSettingsScope", "scope")}} und den Standard-Zoomfaktor.

## Eigenschaften

- {{WebExtAPIRef("tabs.TAB_ID_NONE")}}
  - : Ein spezieller ID-Wert, der Tabs zugewiesen wird, die keine Browser-Tabs sind (z.B. Tabs in Devtools-Fenstern).

## Funktionen

- {{WebExtAPIRef("tabs.captureTab()")}}
  - : Erstellt eine Data-URL, die ein Bild des sichtbaren Bereichs des angegebenen Tabs kodiert.
- {{WebExtAPIRef("tabs.captureVisibleTab()")}}
  - : Erstellt eine Data-URL, die ein Bild des sichtbaren Bereichs des derzeit aktiven Tabs im angegebenen Fenster kodiert.
- {{WebExtAPIRef("tabs.connect()")}}
  - : Baut eine Nachrichtenverbindung zwischen den Hintergrundskripten der Erweiterung (oder anderen privilegierten Skripten, wie Pop-up-Skripten oder Optionsseiten-Skripten) und allen [Contentskripten](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) auf, die im angegebenen Tab ausgeführt werden.
- {{WebExtAPIRef("tabs.create()")}}
  - : Erstellt einen neuen Tab.
- {{WebExtAPIRef("tabs.detectLanguage()")}}
  - : Erkennt die Hauptsprache des Inhalts in einem Tab.
- {{WebExtAPIRef("tabs.discard()")}}
  - : Verwirft einen oder mehrere Tabs.
- {{WebExtAPIRef("tabs.duplicate()")}}
  - : Dupliziert einen Tab.
- {{WebExtAPIRef("tabs.executeScript()")}} (Manifest V2 nur)
  - : Führt JavaScript-Code in einer Seite ein.
- {{WebExtAPIRef("tabs.get()")}}
  - : Ruft Details über den angegebenen Tab ab.
- {{WebExtAPIRef("tabs.getAllInWindow()")}} {{deprecated_inline}}
  - : Holt Details über alle Tabs im angegebenen Fenster.
- {{WebExtAPIRef("tabs.getCurrent()")}}
  - : Ruft Informationen über den Tab ab, in dem dieses Skript ausgeführt wird, als ein [`tabs.Tab`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/Tab)-Objekt.
- {{WebExtAPIRef("tabs.getSelected()")}} {{deprecated_inline}}
  - : Ruft den Tab ab, der im angegebenen Fenster ausgewählt ist. **Veraltet**: Verwenden Sie stattdessen [`tabs.query({active: true})`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query).
- {{WebExtAPIRef("tabs.getZoom()")}}
  - : Holt den aktuellen Zoomfaktor des angegebenen Tabs.
- {{WebExtAPIRef("tabs.getZoomSettings()")}}
  - : Holt die aktuellen Zoom-Einstellungen für den angegebenen Tab.
- {{WebExtAPIRef("tabs.goForward()")}}
  - : Geht zur nächsten Seite, falls eine verfügbar ist.
- {{WebExtAPIRef("tabs.goBack()")}}
  - : Geht zur vorherigen Seite zurück, falls verfügbar.
- {{WebExtAPIRef("tabs.group()")}}
  - : Fügt Tabs zu einer Tabgruppe hinzu.
- {{WebExtAPIRef("tabs.hide()")}} {{experimental_inline}}
  - : Verbirgt einen oder mehrere Tabs.
- {{WebExtAPIRef("tabs.highlight()")}}
  - : Hebt einen oder mehrere Tabs hervor.
- {{WebExtAPIRef("tabs.insertCSS()")}} (Manifest V2 nur)
  - : Fügt CSS in eine Seite ein.
- {{WebExtAPIRef("tabs.move()")}}
  - : Verschiebt einen oder mehrere Tabs an eine neue Position im selben Fenster oder in ein anderes Fenster.
- {{WebExtApiRef("tabs.moveInSuccession()")}}
  - : Ändert die Nachfolgeverknüpfung für eine Gruppe von Tabs.
- {{WebExtAPIRef("tabs.print()")}}
  - : Druckt den Inhalt des aktiven Tabs.
- {{WebExtAPIRef("tabs.printPreview()")}}
  - : Öffnet die Druckvorschau für den aktiven Tab.
- {{WebExtAPIRef("tabs.query()")}}
  - : Holt alle Tabs, die die angegebenen Eigenschaften haben, oder alle Tabs, wenn keine Eigenschaften angegeben sind.
- {{WebExtAPIRef("tabs.reload()")}}
  - : Lädt einen Tab neu und umgeht dabei optional den lokalen Webcache.
- {{WebExtAPIRef("tabs.remove()")}}
  - : Schließt einen oder mehrere Tabs.
- {{WebExtAPIRef("tabs.removeCSS()}} (Manifest V2 nur)
  - : Entfernt aus einer Seite CSS, das zuvor durch einen Aufruf von {{WebExtAPIRef("tabs.insertCSS()")}} eingefügt wurde.
- {{WebExtAPIRef("tabs.saveAsPDF()")}}
  - : Speichert die aktuelle Seite als PDF.
- {{WebExtAPIRef("tabs.sendMessage()")}}
  - : Sendet eine einzelne Nachricht an die Inhaltskript(e) im angegebenen Tab.
- {{WebExtAPIRef("tabs.sendRequest()")}} {{deprecated_inline}}
  - : Sendet eine einzelne Anfrage an die Inhaltskript(e) im angegebenen Tab. **Veraltet**: Verwenden Sie stattdessen {{WebExtAPIRef("tabs.sendMessage()")}}.
- {{WebExtAPIRef("tabs.setZoom()")}}
  - : Zoomt den angegebenen Tab.
- {{WebExtAPIRef("tabs.setZoomSettings()")}}
  - : Legt die Zoom-Einstellungen für den angegebenen Tab fest.
- {{WebExtAPIRef("tabs.show()")}} {{experimental_inline}}
  - : Zeigt einen oder mehrere Tabs an, die zuvor {{WebExtAPIRef("tabs.hide()", "versteckt")}} wurden.
- {{WebExtAPIRef("tabs.toggleReaderMode()")}}
  - : Wechselt den Lesemodus für den angegebenen Tab.
- {{WebExtAPIRef("tabs.ungroup()")}}
  - : Entfernt Tabs aus Tabgruppen.
- {{WebExtAPIRef("tabs.update()")}}
  - : Navigiert den Tab zu einer neuen URL oder ändert andere Eigenschaften des Tabs.
- {{WebExtAPIRef("tabs.warmup()")}}
  - : Bereitet den Tab vor, um einen potenziellen folgenden Wechsel schneller zu machen.

## Ereignisse

- {{WebExtAPIRef("tabs.onActivated")}}
  - : Wird ausgelöst, wenn sich der aktive Tab in einem Fenster ändert. Beachten Sie, dass die URL des Tabs möglicherweise nicht gesetzt ist, wenn dieses Ereignis ausgelöst wird.
- {{WebExtAPIRef("tabs.onActiveChanged")}} {{deprecated_inline}}
  - : Wird ausgelöst, wenn sich der ausgewählte Tab in einem Fenster ändert. **Veraltet**: Verwenden Sie stattdessen {{WebExtAPIRef("tabs.onActivated")}}.
- {{WebExtAPIRef("tabs.onAttached")}}
  - : Wird ausgelöst, wenn ein Tab an ein Fenster angehängt wird, zum Beispiel weil er zwischen Fenstern verschoben wurde.
- {{WebExtAPIRef("tabs.onCreated")}}
  - : Wird ausgelöst, wenn ein Tab erstellt wird. Beachten Sie, dass die URL des Tabs möglicherweise nicht gesetzt ist, wenn dieses Ereignis ausgelöst wird.
- {{WebExtAPIRef("tabs.onDetached")}}
  - : Wird ausgelöst, wenn ein Tab von einem Fenster getrennt wird, zum Beispiel weil er zwischen Fenstern verschoben wird.
- {{WebExtAPIRef("tabs.onHighlightChanged")}} {{deprecated_inline}}
  - : Wird ausgelöst, wenn sich die hervorgehobenen oder ausgewählten Tabs in einem Fenster ändern. **Veraltet**: Verwenden Sie stattdessen {{WebExtAPIRef("tabs.onHighlighted")}}.
- {{WebExtAPIRef("tabs.onHighlighted")}}
  - : Wird ausgelöst, wenn sich die hervorgehobenen oder ausgewählten Tabs in einem Fenster ändern.
- {{WebExtAPIRef("tabs.onMoved")}}
  - : Wird ausgelöst, wenn ein Tab innerhalb eines Fensters verschoben wird.
- {{WebExtAPIRef("tabs.onRemoved")}}
  - : Wird ausgelöst, wenn ein Tab geschlossen wird.
- {{WebExtAPIRef("tabs.onReplaced")}}
  - : Wird ausgelöst, wenn ein Tab durch einen anderen Tab aufgrund von Prerendering ersetzt wird.
- {{WebExtAPIRef("tabs.onSelectionChanged")}} {{deprecated_inline}}
  - : Wird ausgelöst, wenn sich der ausgewählte Tab in einem Fenster ändert. **Veraltet**: Verwenden Sie stattdessen {{WebExtAPIRef("tabs.onActivated")}}.
- {{WebExtAPIRef("tabs.onUpdated")}}
  - : Wird ausgelöst, wenn ein Tab aktualisiert wird.
- {{WebExtAPIRef("tabs.onZoomChange")}}
  - : Wird ausgelöst, wenn ein Tab gezoomt wird.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der API [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs) von Chromium. Diese Dokumentation stammt aus [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.

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
