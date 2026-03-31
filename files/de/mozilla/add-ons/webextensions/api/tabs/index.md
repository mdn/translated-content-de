---
title: tabs
slug: Mozilla/Add-ons/WebExtensions/API/tabs
l10n:
  sourceCommit: 8bc98818dfbc851ee6749b123e98f5eeb7e43923
---

Interagieren Sie mit dem Tab-System des Browsers.

> [!NOTE]
> Beim Verwenden von Manifest V3 oder höher werden die Methoden zum Ausführen von Skripten, Einfügen von CSS und Entfernen von CSS durch die {{WebExtAPIRef("scripting")}} API über die Methoden {{WebExtAPIRef("scripting.executeScript()")}}, {{WebExtAPIRef("scripting.insertCSS()")}} und {{WebExtAPIRef("scripting.removeCSS()")}} bereitgestellt.

Sie können diese API verwenden, um eine Liste der geöffneten Tabs zu erhalten, gefiltert nach verschiedenen Kriterien, sowie um Tabs zu öffnen, zu aktualisieren, zu verschieben, neu zu laden und zu entfernen. Sie können mit dieser API nicht direkt auf die Inhalte zugreifen, die von Tabs gehostet werden, aber Sie können JavaScript und CSS in Tabs einfügen, indem Sie die APIs {{WebExtAPIRef("tabs.executeScript()")}} oder {{WebExtAPIRef("tabs.insertCSS()")}} verwenden.

Sie können den Großteil dieser API ohne besondere Berechtigung verwenden. Allerdings:

- Um auf `Tab.url`, `Tab.title` und `Tab.favIconUrl` zuzugreifen (oder um nach diesen Eigenschaften über {{WebExtAPIRef("tabs.query()")}} zu filtern), müssen Sie die Berechtigung `"tabs"` [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) haben oder [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) besitzen, die mit `Tab.url` übereinstimmen.
  - Der Zugriff auf diese Eigenschaften durch Host-Berechtigungen wird seit Firefox 86 und Chrome 50 unterstützt. In Firefox 85 und früher war stattdessen die "tabs"-Berechtigung erforderlich.

- Um {{WebExtAPIRef("tabs.executeScript()")}} oder {{WebExtAPIRef("tabs.insertCSS()")}} zu verwenden, müssen Sie die [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für den Tab haben.

Alternativ können Sie diese Berechtigungen vorübergehend, nur für den derzeit aktiven Tab und nur als Antwort auf eine explizite Benutzeraktion, erhalten, indem Sie um die [`"activeTab"` Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) bitten.

Viele Tab-Operationen verwenden eine Tab-`id`. Tab-`id`s sind innerhalb einer Browsersitzung nur für einen einzelnen Tab garantiert einzigartig. Wenn der Browser neu gestartet wird, kann und wird er Tab-`id`s wiederverwenden. Um Informationen einem Tab über Browser-Neustarts hinweg zuzuordnen, verwenden Sie {{WebExtAPIRef("sessions.setTabValue()")}}.

## Typen

- {{WebExtAPIRef("tabs.MutedInfoReason")}}
  - : Gibt den Grund an, warum ein Tab stummgeschaltet oder die Stummschaltung aufgehoben wurde.
- {{WebExtAPIRef("tabs.MutedInfo")}}
  - : Dieses Objekt enthält ein boolesches Attribut, das angibt, ob der Tab stummgeschaltet ist, und den Grund für die letzte Zustandsänderung.
- {{WebExtAPIRef("tabs.PageSettings")}}
  - : Wird verwendet, um zu steuern, wie ein Tab als PDF durch die Methode [`tabs.saveAsPDF()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/saveAsPDF) gerendert wird.
- {{WebExtAPIRef("tabs.Tab")}}
  - : Dieser Typ enthält Informationen über einen Tab.
- {{WebExtAPIRef("tabs.TabStatus")}}
  - : Gibt an, ob der Tab das Laden abgeschlossen hat.
- {{WebExtAPIRef("tabs.WindowType")}}
  - : Der Typ des Fensters, das diesen Tab hostet.
- {{WebExtAPIRef("tabs.ZoomSettingsMode")}}
  - : Definiert, ob Zoomänderungen vom Browser, durch die Erweiterung oder gar nicht gehandhabt werden.
- {{WebExtAPIRef("tabs.ZoomSettingsScope")}}
  - : Definiert, ob Zoomänderungen für den Ursprung der Seite bestehen bleiben oder nur in diesem Tab wirksam werden.
- {{WebExtAPIRef("tabs.ZoomSettings")}}
  - : Definiert Zoom-Einstellungen {{WebExtAPIRef("tabs.ZoomSettingsMode", "mode")}}, {{WebExtAPIRef("tabs.ZoomSettingsScope", "scope")}} und den Standard-Zoomfaktor.

## Eigenschaften

- {{WebExtAPIRef("tabs.TAB_ID_NONE")}}
  - : Ein spezieller ID-Wert, der Tabs gegeben wird, die keine Browser-Tabs sind (zum Beispiel Tabs in Devtools-Fenstern).
- {{WebExtAPIRef("tabs.SPLIT_VIEW_ID_NONE")}}
  - : Ein spezieller ID-Wert, der Tabs zugewiesen wird, die sich nicht in einer [Split-Ansicht](/de/docs/Mozilla/Add-ons/WebExtensions/Working_with_the_Tabs_API#working_with_tab_split_views) befinden.

## Funktionen

- {{WebExtAPIRef("tabs.captureTab()")}}
  - : Erstellt eine Data-URL, die ein Bild des sichtbaren Bereichs des angegebenen Tabs codiert.
- {{WebExtAPIRef("tabs.captureVisibleTab()")}}
  - : Erstellt eine Data-URL, die ein Bild des sichtbaren Bereichs des derzeit aktiven Tabs im angegebenen Fenster codiert.
- {{WebExtAPIRef("tabs.connect()")}}
  - : Stellt eine Nachrichtenverbindung zwischen den Hintergrundskripten der Erweiterung (oder anderen privilegierten Skripten, wie Pop-up-Skripten oder Optionsseitenskripten) und allen [Inhalts-Skripten](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) her, die im angegebenen Tab ausgeführt werden.
- {{WebExtAPIRef("tabs.create()")}}
  - : Erstellt einen neuen Tab.
- {{WebExtAPIRef("tabs.detectLanguage()")}}
  - : Erkennt die Hauptsprache des Inhalts in einem Tab.
- {{WebExtAPIRef("tabs.discard()")}}
  - : Verwirft einen oder mehrere Tabs.
- {{WebExtAPIRef("tabs.duplicate()")}}
  - : Dupliziert einen Tab.
- {{WebExtAPIRef("tabs.executeScript()")}} (Manifest V2 nur)
  - : Integriert JavaScript-Code in eine Seite.
- {{WebExtAPIRef("tabs.get()")}}
  - : Ruft Details über den angegebenen Tab ab.
- {{WebExtAPIRef("tabs.getAllInWindow()")}} {{deprecated_inline}}
  - : Ruft Details über alle Tabs im angegebenen Fenster ab.
- {{WebExtAPIRef("tabs.getCurrent()")}}
  - : Ruft Informationen über den Tab ab, in dem dieses Skript ausgeführt wird, als ein [`tabs.Tab`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/Tab)-Objekt.
- {{WebExtAPIRef("tabs.getSelected()")}} {{deprecated_inline}}
  - : Ruft den Tab ab, der im angegebenen Fenster ausgewählt ist. **Veraltet**: verwenden Sie stattdessen [`tabs.query({active: true})`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query).
- {{WebExtAPIRef("tabs.getZoom()")}}
  - : Ruft den aktuellen Zoomfaktor des angegebenen Tabs ab.
- {{WebExtAPIRef("tabs.getZoomSettings()")}}
  - : Ruft die aktuellen Zoom-Einstellungen für den angegebenen Tab ab.
- {{WebExtAPIRef("tabs.goForward()")}}
  - : Geht zur nächsten Seite, wenn eine verfügbar ist.
- {{WebExtAPIRef("tabs.goBack()")}}
  - : Geht zur vorherigen Seite, wenn eine verfügbar ist.
- {{WebExtAPIRef("tabs.group()")}}
  - : Fügt Tabs zu einer Tab-Gruppe hinzu.
- {{WebExtAPIRef("tabs.hide()")}} {{experimental_inline}}
  - : Blendet einen oder mehrere Tabs aus.
- {{WebExtAPIRef("tabs.highlight()")}}
  - : Hebt einen oder mehrere Tabs hervor.
- {{WebExtAPIRef("tabs.insertCSS()")}} (Manifest V2 nur)
  - : Integriert CSS in eine Seite.
- {{WebExtAPIRef("tabs.move()")}}
  - : Verschiebt einen oder mehrere Tabs zu einer neuen Position im selben Fenster oder zu einem anderen Fenster.
- {{WebExtApiRef("tabs.moveInSuccession()")}}
  - : Ändert die Reihenfolgenbeziehung für eine Gruppe von Tabs.
- {{WebExtAPIRef("tabs.print()")}}
  - : Drucken Sie den Inhalt des aktiven Tabs.
- {{WebExtAPIRef("tabs.printPreview()")}}
  - : Öffnet die Druckvorschau für den aktiven Tab.
- {{WebExtAPIRef("tabs.query()")}}
  - : Ruft alle Tabs ab, die die angegebenen Eigenschaften besitzen, oder alle Tabs, wenn keine Eigenschaften angegeben sind.
- {{WebExtAPIRef("tabs.reload()")}}
  - : Lädt einen Tab neu und kann dabei optional den lokalen Web-Cache umgehen.
- {{WebExtAPIRef("tabs.remove()")}}
  - : Schließt einen oder mehrere Tabs.
- {{WebExtAPIRef("tabs.removeCSS()")}} (Manifest V2 nur)
  - : Entfernt CSS von einer Seite, das zuvor durch einen Aufruf von {{WebExtAPIRef("tabs.insertCSS()")}} integriert wurde.
- {{WebExtAPIRef("tabs.saveAsPDF()")}}
  - : Speichert die aktuelle Seite als PDF.
- {{WebExtAPIRef("tabs.sendMessage()")}}
  - : Sendet eine einzelne Nachricht an die Inhalts-Skripte im angegebenen Tab.
- {{WebExtAPIRef("tabs.sendRequest()")}} {{deprecated_inline}}
  - : Sendet eine einzelne Anfrage an die Inhalts-Skripte im angegebenen Tab. **Veraltet**: verwenden Sie stattdessen {{WebExtAPIRef("tabs.sendMessage()")}}.
- {{WebExtAPIRef("tabs.setZoom()")}}
  - : Zoomt den angegebenen Tab.
- {{WebExtAPIRef("tabs.setZoomSettings()")}}
  - : Setzt die Zoom-Einstellungen für den angegebenen Tab.
- {{WebExtAPIRef("tabs.show()")}} {{experimental_inline}}
  - : Zeigt einen oder mehrere Tabs an, die {{WebExtAPIRef("tabs.hide()", "ausgeblendet")}} wurden.
- {{WebExtAPIRef("tabs.toggleReaderMode()")}}
  - : Umschalten des Lesemodus für den angegebenen Tab.
- {{WebExtAPIRef("tabs.ungroup()")}}
  - : Entfernt Tabs aus Tab-Gruppen.
- {{WebExtAPIRef("tabs.update()")}}
  - : Navigiert den Tab zu einer neuen URL oder ändert andere Eigenschaften des Tabs.
- {{WebExtAPIRef("tabs.warmup()")}}
  - : Bereitet den Tab vor, um einen möglichen nachfolgenden Wechsel zu beschleunigen.

## Ereignisse

- {{WebExtAPIRef("tabs.onActivated")}}
  - : Wird ausgelöst, wenn sich der aktive Tab in einem Fenster ändert. Beachten Sie, dass die URL des Tabs möglicherweise nicht gesetzt ist, wenn dieses Ereignis ausgelöst wird.
- {{WebExtAPIRef("tabs.onActiveChanged")}} {{deprecated_inline}}
  - : Wird ausgelöst, wenn sich der ausgewählte Tab in einem Fenster ändert. **Veraltet**: verwenden Sie stattdessen {{WebExtAPIRef("tabs.onActivated")}}.
- {{WebExtAPIRef("tabs.onAttached")}}
  - : Wird ausgelöst, wenn ein Tab an ein Fenster angehängt wird, zum Beispiel weil er zwischen Fenstern verschoben wurde.
- {{WebExtAPIRef("tabs.onCreated")}}
  - : Wird ausgelöst, wenn ein Tab erstellt wird. Beachten Sie, dass die URL des Tabs möglicherweise nicht gesetzt ist, wenn dieses Ereignis ausgelöst wird.
- {{WebExtAPIRef("tabs.onDetached")}}
  - : Wird ausgelöst, wenn ein Tab von einem Fenster getrennt wird, zum Beispiel weil er zwischen Fenstern verschoben wird.
- {{WebExtAPIRef("tabs.onHighlightChanged")}} {{deprecated_inline}}
  - : Wird ausgelöst, wenn sich die hervorgehobenen oder ausgewählten Tabs in einem Fenster ändern. **Veraltet**: verwenden Sie stattdessen {{WebExtAPIRef("tabs.onHighlighted")}}.
- {{WebExtAPIRef("tabs.onHighlighted")}}
  - : Wird ausgelöst, wenn sich die hervorgehobenen oder ausgewählten Tabs in einem Fenster ändern.
- {{WebExtAPIRef("tabs.onMoved")}}
  - : Wird ausgelöst, wenn ein Tab innerhalb eines Fensters verschoben wird.
- {{WebExtAPIRef("tabs.onRemoved")}}
  - : Wird ausgelöst, wenn ein Tab geschlossen wird.
- {{WebExtAPIRef("tabs.onReplaced")}}
  - : Wird ausgelöst, wenn ein Tab durch einen anderen Tab aufgrund von Vorausladen ersetzt wird.
- {{WebExtAPIRef("tabs.onSelectionChanged")}} {{deprecated_inline}}
  - : Wird ausgelöst, wenn sich der ausgewählte Tab in einem Fenster ändert. **Veraltet**: verwenden Sie stattdessen {{WebExtAPIRef("tabs.onActivated")}}.
- {{WebExtAPIRef("tabs.onUpdated")}}
  - : Wird ausgelöst, wenn ein Tab aktualisiert wird.
- {{WebExtAPIRef("tabs.onZoomChange")}}
  - : Wird ausgelöst, wenn ein Tab gezoomt wird.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs) API von Chromium. Diese Dokumentation leitet sich von [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code ab.

<!--
// Urheberrecht 2015 The Chromium Authors. Alle Rechte vorbehalten.
//
// Eine Weiterverteilung und Nutzung in sowohl Quell- als auch Binärform, mit oder ohne
// Modifikation, ist unter den folgenden Bedingungen erlaubt:
//
//    * Weiterverteilungen des Quellcodes müssen das obige Urheberrecht
//      Vermerk, diese Liste von Bedingungen und den folgenden Haftungsausschluss enthalten.
//    * Weiterverteilungen in binärer Form müssen das obige
//      Urheberrecht, diese Liste von Bedingungen und den folgenden Haftungsausschluss
//      in der Dokumentation und/oder anderen Materialien, die mit der
//      Verteilung geliefert werden.
//    * Weder der Name von Google Inc. noch die Namen seiner
//      Mitarbeiter dürfen verwendet werden, um Produkte zu unterstützen oder zu bewerben, die von
//      dieser Software abgeleitet sind, es sei denn, es liegt eine spezifische vorherige schriftliche Genehmigung vor.
//
// DIESE SOFTWARE WIRD VON DEN URHEBERRECHTSINHABERN UND MITARBEITERN
// "SO WIE SIE IST" BEREITGESTELLT UND JEGLICHE AUSDRÜCKLICHEN ODER IMPLIZITEN GARANTIEN,
// EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF DIE IMPLIZIERTEN GARANTIEN DER MARKTGÄNGIGKEIT UND EIGNUNG FÜR EINEN BESTIMMTEN ZWECK WERDEN AUSGESCHLOSSEN. IN KEINEM FALL HAFTEN DIE URHEBER ODER MITARBEITER
// FÜR JEGLICHE DIREKTEN, INDIREKTEN, BEILÄUFIGEN,
// SPEZIELLEN, EXEMPLARISCHEN ODER FOLGESCHÄDEN (EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF DIE BESCHAFFUNG VON ERSATZWAREN ODER DIENSTLEISTUNGEN; NUTZUNGSVERLUST, DATEN ODER GEWINNE; ODER UNTERBRECHUNG DES GESCHÄFTSBETRIEBS), JEDOCH VERURSACHT UND UNABHÄNGIG VON DER HAFTUNGSTHEORIE, OB IN VERTRAG, STRIKTER HAFTUNG ODER UNERLAUBTER HANDLUNG (EINSCHLIESSLICH FAHRLÄSSIGKEIT ODER ANDERWEITIG), DER SICH AUS DER NUTZUNG DIESER SOFTWARE ERGIBT, SELBST WENN ÜBER DIE MÖGLICHKEIT SOLCHER SCHÄDEN INFORMIERT.
-->
