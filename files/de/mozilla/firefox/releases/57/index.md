---
title: Firefox 57 (Quantum) für Entwickler
slug: Mozilla/Firefox/Releases/57
l10n:
  sourceCommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 57 (auch bekannt als Firefox Quantum), die Entwickler betreffen werden. Firefox 57 wurde am 14. November 2017 veröffentlicht.

## Firefox 57 === Firefox Quantum

Firefox 57 wurde unter dem Namen **Quantum** veröffentlicht, benannt nach dem [Firefox Quantum](https://wiki.mozilla.org/Quantum) Engineering-Projekt, das sich das Ziel gesetzt hat, Firefox von Grund auf neu zu gestalten, um erhebliche Leistungs-, Stabilitäts- und visuelle Verbesserungen zu erzielen. Dies ist die erste Version von Firefox, die einige dieser Verbesserungen enthält, weshalb wir diesen Anlass hervorheben wollten.

> [!NOTE]
> Um mehr über die Quantum-Features in dieser Version zu erfahren, lesen Sie [Firefox Quantum Developer Edition: der schnellste Firefox aller Zeiten mit Photon UI und besseren Werkzeugen](https://hacks.mozilla.org/2017/09/firefox-quantum-developer-edition-fastest-firefox-ever/) von Dan Callahan.

[Firefox's neuer paralleler CSS-Engine](https://hacks.mozilla.org/2017/08/inside-a-super-fast-css-engine-quantum-css-aka-stylo/) – auch bekannt als **Quantum CSS** oder **Stylo** – ist in Firefox 57 für Desktop standardmäßig aktiviert, mit mobilen Versionen von Firefox, die später folgen werden. Entwickler sollten nichts signifikant anderes bemerken, abgesehen von einer Vielzahl von Leistungsverbesserungen. Es gibt jedoch einige kleinere funktionale Unterschiede in Stylo, die implementiert wurden, um nicht standardmäßiges Gecko-Verhalten zu beheben, das beseitigt werden sollte. Wir werden über solche Unterschiede auf Referenzseiten und in den Versionshinweisen berichten, wo es angebracht ist (siehe [Quantum CSS-Hinweise](#quantum_css-hinweise)).

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

_Keine Änderungen._

### HTML

- Die [date](/de/docs/Web/HTML/Element/input/date)- und [time](/de/docs/Web/HTML/Element/input/time) {{htmlelement("input")}}-Typen sind jetzt in allen Builds aktiviert ([Firefox-Bug 1399036](https://bugzil.la/1399036)).

### CSS

- Die `minimal-ui` und `standalone` Werte der [`display-mode`](/de/docs/Web/CSS/@media/display-mode) Medienabfrage werden jetzt unterstützt ([Firefox-Bug 1369815](https://bugzil.la/1369815)). Siehe auch das [Web-App-Manifest `display` Feld](/de/docs/Web/Progressive_web_apps/Manifest#display).
- Die `grid-row-gap` und `grid-column-gap` Eigenschaften werden nicht mehr vom {{CSSxRef("grid")}} Shorthand zurückgesetzt ([Firefox-Bug 1387410](https://bugzil.la/1387410)).
- Die Einstellung `layout.css.clip-path-shapes.enabled` wurde entfernt ([Firefox-Bug 1399767](https://bugzil.la/1399767)). Diese Einstellung ermöglichte es, die Unterstützung von {{CSSxRef("&lt;basic-shape&gt;")}} in {{CSSxRef("clip-path")}} zu deaktivieren. Diese Unterstützung wurde in Firefox 54 eingeführt und kann nicht mehr deaktiviert werden.

#### Quantum CSS-Hinweise

Folgende Bugs wurden in Quantum behoben:

- Radiale Gradient-Werte wie `radial-gradient(circle gold,red)` funktionieren im alten Gecko-Stilsystem, obwohl sie es nicht sollten, wegen des fehlenden Kommas zwischen `circle` und `gold` ([Firefox-Bug 1383323](https://bugzil.la/1383323)).
- Wenn Sie ein offscreen-Element onscreen animieren, aber eine Verzögerung angeben, führt Gecko auf einigen Plattformen, z.B. Windows, kein Redraw durch ([Firefox-Bug 1383239](https://bugzil.la/1383239)).
- In Gecko können {{htmlelement("details")}} Elemente nicht standardmäßig geöffnet werden, wenn sie ein aktives {{CSSxRef("animation")}} haben ([Firefox-Bug 1382124](https://bugzil.la/1382124)).
- In Gecko funktionieren {{CSSxRef("transition", "transitions")}} nicht, wenn von einem {{CSSxRef("text-shadow")}} mit einer angegebenen Farbe auf einen `text-shadow` ohne angegebene Farbe übergegangen wird ([Firefox-Bug 726550](https://bugzil.la/726550)).
- In Gecko kann das Abbrechen einer füllenden Animation (z.B. mit `animation-fill-mode: forwards` gesetzt) eine auf dasselbe Element gesetzte Transition auslösen, obwohl nur einmal (siehe [Firefox-Bug 1192592](https://bugzil.la/1192592) und [diese Testfälle](https://bug1192592.bmoattachments.org/attachment.cgi?id=8843824) für mehr Informationen). Im Allgemeinen sollten deklarative Animationen keine Übergänge auslösen.
- Animationen, die em-Einheiten verwenden, sind in Gecko nicht von Änderungen an der {{CSSxRef("font-size")}} auf dem übergeordneten Element des animierten Elements betroffen, obwohl sie es sein sollten ([Firefox-Bug 1254424](https://bugzil.la/1254424)).
- Gecko geht auch anders mit der Vererbung von `font-size` um als Quantum CSS, was bedeutet, dass bei einigen Spracheinstellungen die vererbten Schriftgrößen kleiner ausfallen als erwartet (siehe [Firefox-Bug 1391341](https://bugzil.la/1391341)).
- Gecko verwendet denselben Mechanismus, der beim Parsen eines url-tokens verwendet wird, wenn er die `domain()` oder `url-prefix()` URL-Abgleichsfunktionen für eine {{CSSxRef("@document", "@-moz-document")}} Regel parst. Quantum CSS verwendet nicht denselben Mechanismus und betrachtet Tokens nicht als ungültig, wenn sie Klammern oder Anführungszeichen enthalten ([Firefox-Bug 1362333](https://bugzil.la/1362333)).
- In Gecko schlägt das Setzen einer Systemschriftart als Wert eines `canvas` 2D-Kontextes [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font) (z.B. `menu`) fehl, und die Schriftart wird nicht wie erwartet zurückgegeben (nichts wird zurückgegeben). Dies wurde in Quantum behoben. ([Firefox-Bug 1374885](https://bugzil.la/1374885)).
- In Gecko wird ein abgetrennter Teilbaum (z.B. ein {{htmlelement("div")}}, der mit [`createElement()`](/de/docs/Web/API/Document/createElement) erstellt wurde, aber noch nicht in den DOM eingefügt wurde) als Block-Level-Element gesetzt. In Quantum CSS wird dies als Inline gesetzt, gemäß der Spezifikation ([Firefox-Bug 1374994](https://bugzil.la/1374994)).
- In Gecko werden {{CSSxRef("calc", "calc()")}} Ausdrücke abgelehnt — was dazu führt, dass der Wert ungültig ist — wenn sie als Radiuskomponente einer {{CSSxRef("gradient/radial-gradient")}} Funktion verwendet werden ([Firefox-Bug 1376019](https://bugzil.la/1376019)).
- In Gecko wird `calc(1*2*3)` nicht erfolgreich geparst; Quantum CSS behebt dies ([Firefox-Bug 1379467](https://bugzil.la/1379467)).
- In Quantum CSS wird [`calc()` überall unterstützt, wo es laut Spezifikation unterstützt werden sollte](https://drafts.csswg.org/css-values-3/#calc-notation) ([Firefox-Bug 1350857](https://bugzil.la/1350857)). In Gecko ist dies nicht der Fall.
- Gecko hat einen Bug, bei dem die {{CSSxRef("::before")}} und {{CSSxRef("::after")}} Pseudo-Elemente immer noch generiert werden, selbst wenn der {{CSSxRef("content")}} Eigenschaftswert auf `normal` oder `none` gesetzt ist. Gemäß der Spezifikation sollten sie es nicht ([Firefox-Bug 1387931](https://bugzil.la/1387931)).
- Ein weiterer Gecko-Bug bedeutet, dass die {{CSSxRef("background-position")}} Eigenschaft nicht zwischen zwei Werten mit unterschiedlicher Anzahl von {{CSSxRef("&lt;position&gt;")}} Werten übergehen kann, zum Beispiel `background-position: 10px 10px;` und `background-position: 20px 20px, 30px 30px;` (siehe [Firefox-Bug 1390446](https://bugzil.la/1390446)).

### SVG

_Keine Änderungen._

### JavaScript

- Die nicht standardmäßige [`for each...in`](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#statements_2) Schleife, ursprünglich Teil von ECMAScript für XML (E4X), wurde entfernt. Bitte verwenden Sie {{JSxRef("Statements/for...of", "for...of")}} stattdessen. ([Firefox-Bug 1083470](https://bugzil.la/1083470)).
- Die [`Object.prototype.watch()` und `Object.prototype.unwatch()`](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#object_2) Methoden sind veraltet, werfen nun eine Warnung bei Verwendung und werden bald entfernt ([Firefox-Bug 934669](https://bugzil.la/934669)).
- Die nicht standardmäßigen `Iterator` und `StopIteration` Objekte sowie das [veraltete Iterationsprotokoll](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#legacy_generator_and_iterator) wurden entfernt ([Firefox-Bug 1098412](https://bugzil.la/1098412)).
- Async generator ist jetzt aktiviert ([Firefox-Bug 1352312](https://bugzil.la/1352312)).
- for await (... of ...) Syntax ist jetzt aktiviert ([Firefox-Bug 1352312](https://bugzil.la/1352312)).

### APIs

#### Neue APIs

- Die [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) API ist jetzt standardmäßig aktiviert ([Firefox-Bug 1386021](https://bugzil.la/1386021)).
- Die [`AbortController`](/de/docs/Web/API/AbortController) und [`AbortSignal`](/de/docs/Web/API/AbortSignal) Schnittstellen (bekannt als die Abort API) wurden hinzugefügt, sodass DOM-Anfragen (wie [fetch-Anfragen](/de/docs/Web/API/Window/fetch)) abgebrochen werden können, wenn gewünscht ([Firefox-Bug 1378342](https://bugzil.la/1378342)).
- \[2] Die [Storage API](/de/docs/Web/API/Storage_API) ist implementiert und standardmäßig aktiviert ([Firefox-Bug 1399038](https://bugzil.la/1399038)).

#### DOM

- Die [`Selection.type`](/de/docs/Web/API/Selection/type) Eigenschaft der [Selection API](/de/docs/Web/API/Selection) ist jetzt implementiert ([Firefox-Bug 1359157](https://bugzil.la/1359157)).
- [`Document.createEvent('FocusEvent')`](/de/docs/Web/API/Document/createEvent) wird jetzt unterstützt ([Firefox-Bug 1388069](https://bugzil.la/1388069)).
- Die `files` Eigenschaft der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Schnittstelle ist jetzt setzbar ([Firefox-Bug 1384030](https://bugzil.la/1384030)).
- Die `HTMLDocument.getSelection()` Methode wurde zur [`Document`](/de/docs/Web/API/Document/getSelection) Schnittstelle verschoben, damit sie für XML-Dokumente verfügbar ist ([Firefox-Bug 718711](https://bugzil.la/718711)).
- Das `messageerror` Ereignis ist jetzt implementiert, und kann Code ausführen, als Antwort darauf, dass es durch Implementierung von Ereignishandlern auf Nachrichtenzielen ausgelöst wird — siehe das `messageerror` Ereignis von [`MessagePort`](/de/docs/Web/API/MessagePort/messageerror_event), [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope/messageerror_event), [`Worker`](/de/docs/Web/API/Worker/messageerror_event), [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel/messageerror_event), und [`Window`](/de/docs/Web/API/Window/messageerror_event) ([Firefox-Bug 1359017](https://bugzil.la/1359017)).
- Wenn [`Headers`](/de/docs/Web/API/Headers) Werte iteriert werden, werden sie automatisch in lexikographischer Reihenfolge sortiert, und Werte aus doppelten Headernamen werden kombiniert ([Firefox-Bug 1396848](https://bugzil.la/1396848)).

#### DOM-Ereignisse

_Keine Änderungen._

#### Medien und WebRTC

- Unterstützung für Nachrichten beliebiger Größe (bis zu 1GiB, obwohl 256kiB interoperabler ist) wird jetzt auf [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) durch die Verwendung des End-of-record (EOR) Flags auf SCTP-Nachrichten unterstützt. Siehe [Understand message size limits](/de/docs/Web/API/WebRTC_API/Using_data_channels#understanding_message_size_limits) für mehr Informationen ([Firefox-Bug 979417](https://bugzil.la/979417)).

  > [!NOTE]
  > Da Firefox das SCTP ndata Protokoll, das die Fähigkeit bietet, SCTP-Nachrichten aus mehreren Quellen zu verflechten, noch nicht unterstützt, kann das Senden großer Datenobjekte erhebliche Verzögerungen bei allen anderen SCTP-Übertragungen verursachen. Siehe [Firefox-Bug 1381145](https://bugzil.la/1381145), um den Fortschritt bei der Implementierung und Bereitstellung von Ndata-Unterstützung in Firefox zu verfolgen.

- Die [`RTCDataChannel.send()`](/de/docs/Web/API/RTCDataChannel/send) Methode kann jetzt eine `TypeError`-Ausnahme auslösen, wenn die Größe der Nachricht, die Sie senden möchten, nicht mit dem empfangenden {{Glossary("user_agent", "Benutzeragenten")}} kompatibel ist (dies wird im Rahmen von [Firefox-Bug 979417](https://bugzil.la/979417) implementiert).
- Die [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API) wurde aktualisiert, sodass [`error`](/de/docs/Web/API/MediaRecorder/error_event) Ereignisse, die gesendet werden, um Probleme zu melden, die beim Aufzeichnen auftreten, jetzt vom Typ [`MediaRecorderErrorEvent`](/de/docs/Web/API/MediaRecorderErrorEvent) sind, anstatt generische Ereignisse zu sein.
- Die Dokumentation rund um [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) wurde aktualisiert, da die Eingänge seines Konstruktors jetzt in einem Objekt angegeben werden können, anstatt als Liste von Parametern ([Firefox-Bug 1388591](https://bugzil.la/1388591)).
- Die Web Audio API unterstützt nun ordnungsgemäß die Ausgabe über mehrere Kanäle ([Firefox-Bug 1378070](https://bugzil.la/1378070)).

### Sicherheit

- `resource://` URLs leaken keine Informationen mehr ([Firefox-Bug 863246](https://bugzil.la/863246))
- Daten-URLs werden jetzt als eindeutige opake Ursprünge behandelt, anstatt die Herkunft des für die Navigation verantwortlichen Einstellungsobjekts zu übernehmen ([Firefox-Bug 1324406](https://bugzil.la/1324406)).

### Plugins

_Keine Änderungen._

### Sonstiges

- Der Firefox [Headless-Modus](/de/docs/Mozilla/Firefox/Headless_mode) umfasst jetzt ein `-screenshot`-Flag, das es ermöglicht, Website-Screenshots direkt über die Befehlszeile zu machen ([Firefox-Bug 1378010](https://bugzil.la/1378010)).

## Entfernungen von der Webplattform

### HTML

- `<link rel="preload">` (siehe [Preloading content with rel="preload"](/de/docs/Web/HTML/Attributes/rel/preload)) wurde in Firefox 57 aufgrund verschiedener Webkompatibilitätsprobleme deaktiviert (z.B. [Firefox-Bug 1405761](https://bugzil.la/1405761)). Eine verbesserte Version, die auch für nicht-cacheable Ressourcen funktioniert, wird voraussichtlich in Firefox 58 eingeführt.

### APIs

- Mozillas proprietäre [Social API](/de/docs/Archive/Social_API) wurde vollständig entfernt ([Firefox-Bug 1388902](https://bugzil.la/1388902)).

### SVG

_Keine Änderungen._

## Änderungen für Add-on- und Mozilla-Entwickler

> [!NOTE]
> Ab Firefox 57 wurde jede Unterstützung für auf XPCOM-basierte Add-ons entfernt. Alle Erweiterungen müssen in die neuen [Browsererweiterungen](/de/docs/Mozilla/Add-ons/WebExtensions) (auch bekannt als WebExtensions) umgewandelt werden, oder sie werden nicht funktionieren.

### WebExtensions

Die folgenden APIs wurden hinzugefügt oder erweitert:

- [`bookmarks`](/de/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks)

  - Unterstützung für Separatoren durch [`bookmarks.BookmarkTreeNodeType`](/de/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/BookmarkTreeNodeType)

- [`browser_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action)

  - `theme_icons`-Eigenschaft für helle/dunkle Thema-Icons

- [`browserAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserAction)

  - [`browserAction.openPopup()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserAction/openPopup)

- [`browserSettings`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings)

  - [`allowPopupsForUserEvents`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/allowPopupsForUserEvents)
  - [`homepageOverride`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/homepageOverride)
  - [`imageAnimationBehavior`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/imageAnimationBehavior)
  - [`newTabPageOverride`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/newTabPageOverride)

- [`browsingData`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browsingData)

  - [`browsingData.removeLocalStorage()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browsingData/removeLocalStorage)

- [`clipboard`](/de/docs/Mozilla/Add-ons/WebExtensions/API/clipboard)

  - [`setImageData()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/clipboard/setImageData)

- [`contextualIdentities`](/de/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities)

  - [`onCreated`](/de/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities/onCreated)
  - [`onRemoved`](/de/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities/onRemoved)
  - [`onUpdated`](/de/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities/onUpdated)
  - `colorCode` und `iconUrl` in [`contextualIdentities.ContextualIdentity`](/de/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities/ContextualIdentity)

- [`devtools.panels`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels)

  - [`devtools.panels.ElementsPanel.createSidebarPane()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/ElementsPanel/createSidebarPane)

- [`downloads`](/de/docs/Mozilla/Add-ons/WebExtensions/API/downloads)

  - `incognito`-Option in [`downloads.download()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/downloads/download)
  - `estimatedEndTime`-Eigenschaft in [`downloads.DownloadItem`](/de/docs/Mozilla/Add-ons/WebExtensions/API/downloads/DownloadItem)

- [`find`](/de/docs/Mozilla/Add-ons/WebExtensions/API/find)

  - [`find()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/find/find)
  - [`highlightResults()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/find/highlightResults)
  - [`removeHighlighting()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/find/removeHighlighting)

- [`pageAction.openPopup()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/pageAction/openPopup)
- [`privacy`](/de/docs/Mozilla/Add-ons/WebExtensions/API/privacy/websites)

  - [`websites.trackingProtectionMode`](/de/docs/Mozilla/Add-ons/WebExtensions/API/privacy/websites)

- [`proxy`](/de/docs/Mozilla/Add-ons/WebExtensions/API/proxy)

  - `FindProxyForURL()` kann jetzt ein Objekt zurückgeben

- [`runtime`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime)

  - [`runtime.openOptionsPage()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/openOptionsPage) Unterstützung auf Android

- [`sessions`](/de/docs/Mozilla/Add-ons/WebExtensions/API/sessions)

  - [`setTabValue()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/sessions/setTabValue)
  - [`getTabValue()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/sessions/getTabValue)
  - [`removeTabValue()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/sessions/removeTabValue)
  - [`setWindowValue()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/sessions/setWindowValue)
  - [`getWindowValue()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/sessions/getWindowValue)
  - [`removeWindowValue()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/sessions/removeWindowValue)

- [`sidebarAction`](/de/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction)

  - [`sidebarAction.open()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction/open)

- [`storage`](/de/docs/Mozilla/Add-ons/WebExtensions/API/storage)

  - [`storage.managed`](/de/docs/Mozilla/Add-ons/WebExtensions/API/storage/managed)

- [`tabs`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs)

  - `loadReplace`-Option in [`tabs.update()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/update)
  - `discarded`-Eigenschaft in [`tabs.Tab`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/Tab), [`tabs.onUpdated`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/onUpdated), und [`tabs.query()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query)
  - [`tabs.create()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/create) kann "view-source:" URLs öffnen
  - `openerTabId`-Eigenschaft in [`tabs.Tab`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/Tab), [`tabs.create()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/create), [`tabs.query()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query), und [`tabs.update()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/update)

- [`theme`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme)

  - `colors.toolbar`
  - `colors.toolbar_field`
  - `colors.toolbar_field_text`
  - `colors.toolbar_text`

- [`theme`](/de/docs/Mozilla/Add-ons/WebExtensions/API/theme)

  - `windowId`-Option zu [`theme.update()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/theme/update)

- [`webRequest`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest)

  - [`filterResponseData()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/filterResponseData)
  - `proxyInfo`-Eigenschaft in [`webRequest`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest) Ereignissen

- [`windows`](/de/docs/Mozilla/Add-ons/WebExtensions/API/windows)

  - `allowScriptsToClose`-Option in [`windows.create()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/windows/create)

## Ältere Versionen

{{Firefox_for_developers}}
