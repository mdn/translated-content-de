---
title: Firefox 57 (Quantum) für Entwickler
slug: Mozilla/Firefox/Releases/57
l10n:
  sourceCommit: 4163a227e2c4b42139056a3474b146fe90876cbf
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 57 (auch bekannt als Firefox Quantum), die Entwickler betreffen werden. Firefox 57 wurde am 14. November 2017 veröffentlicht.

## Firefox 57 === Firefox Quantum

Firefox 57 hat den Veröffentlichungsnamen **Quantum** erhalten, benannt nach dem [Firefox Quantum](https://wiki.mozilla.org/Quantum) Ingenieurprojekt, das darauf abzielt, Firefox von Grund auf neu zu bauen, mit bedeutenden Verbesserungen in Performance, Stabilität und Optik. Dies ist die erste Version von Firefox, die einige dieser Verbesserungen enthält, daher wollten wir diesen Anlass besonders hervorheben.

> [!NOTE]
> Um mehr über die Quantum-Features in dieser Version zu erfahren, lesen Sie [Firefox Quantum Developer Edition: der schnellste Firefox aller Zeiten mit Photon-UI und besseren Werkzeugen](https://hacks.mozilla.org/2017/09/firefox-quantum-developer-edition-fastest-firefox-ever/) von Dan Callahan.

[Firefox's neue parallele CSS-Engine](https://hacks.mozilla.org/2017/08/inside-a-super-fast-css-engine-quantum-css-aka-stylo/) — auch bekannt als **Quantum CSS** oder **Stylo** — ist standardmäßig in Firefox 57 für den Desktop aktiviert, mit mobilen Versionen von Firefox, die später folgen werden. Entwickler sollten abgesehen von einer Vielzahl von Leistungsverbesserungen nichts wesentlich Anderes bemerken. Es gibt jedoch eine Reihe kleiner funktionaler Unterschiede in Stylo, die implementiert wurden, um nicht standardmäßiges Gecko-Verhalten zu beheben, das beseitigt werden sollte. Wir werden über solche Unterschiede auf Referenzseiten und in den Versionshinweisen berichten, wo es angebracht ist (siehe [Quantum CSS-Anmerkungen](#quantum_css-anmerkungen)).

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

_Keine Änderungen._

### HTML

- Die [date](/de/docs/Web/HTML/Element/input/date) und [time](/de/docs/Web/HTML/Element/input/time) {{htmlelement("input")}}-Typen sind jetzt in allen Builds aktiviert ([Firefox Bug 1399036](https://bugzil.la/1399036)).

### CSS

- Die Werte `minimal-ui` und `standalone` der [`display-mode`](/de/docs/Web/CSS/@media/display-mode) Media Queries werden jetzt unterstützt ([Firefox Bug 1369815](https://bugzil.la/1369815)). Siehe auch das [Web-App-Manifest-`display`-Feld](/de/docs/Web/Manifest#display).
- Die Eigenschaften `grid-row-gap` und `grid-column-gap` werden nicht mehr durch die {{CSSxRef("grid")}} Kurzschreibweise zurückgesetzt ([Firefox Bug 1387410](https://bugzil.la/1387410)).
- Die Voreinstellung `layout.css.clip-path-shapes.enabled` wurde entfernt ([Firefox Bug 1399767](https://bugzil.la/1399767)). Diese Voreinstellung erlaubte das Deaktivieren der {{CSSxRef("&lt;basic-shape&gt;")}} Unterstützung in {{CSSxRef("clip-path")}}. Diese Unterstützung wurde in Firefox 54 eingeführt und kann nicht mehr deaktiviert werden.

#### Quantum CSS-Anmerkungen

Folgende Bugs wurden in Quantum behoben:

- Radialgradient-Werte wie `radial-gradient(circle gold,red)` funktionieren im alten Gecko-Stilsystem, obwohl sie nicht sollten, da das Komma zwischen `circle` und `gold` fehlt ([Firefox Bug 1383323](https://bugzil.la/1383323)).
- Wenn Sie ein Offscreen-Element animieren, das onscreen erscheinen soll, aber eine Verzögerung spezifizieren, rendert Gecko auf einigen Plattformen nicht neu, z. B. Windows ([Firefox Bug 1383239](https://bugzil.la/1383239)).
- In Gecko können {{htmlelement("details")}}-Elemente nicht standardmäßig mittels des `open`-Attributes geöffnet werden, wenn auf ihnen eine {{CSSxRef("animation")}} aktiv ist ([Firefox Bug 1382124](https://bugzil.la/1382124)).
- In Gecko funktionieren {{CSSxRef("transition", "Transitions")}} nicht, wenn von einem {{CSSxRef("text-shadow")}} mit angegebener Farbe zu einem `text-shadow` ohne angegebene Farbe übergegangen wird ([Firefox Bug 726550](https://bugzil.la/726550)).
- In Gecko kann das Abbrechen einer Animation mit `animation-fill-mode: forwards` eine auf dasselbe Element gesetzte Transition auslösen, aber nur einmal (siehe [Firefox Bug 1192592](https://bugzil.la/1192592) und [diese Testfälle](https://bug1192592.bmoattachments.org/attachment.cgi?id=8843824) für weitere Informationen). Im Allgemeinen sollten deklarative Animationen keine Transitionen auslösen.
- Animationen, die `em`-Einheiten verwenden, sind in Gecko nicht von Änderungen der {{CSSxRef("font-size")}} auf dem übergeordneten Element des animierten Elements betroffen, obwohl sie es sein sollten ([Firefox Bug 1254424](https://bugzil.la/1254424)).
- Gecko behandelt auch die `font-size`-Vererbung anders als Quantum CSS, was bedeutet, dass für einige Spracheinstellungen vererbte Schriften kleiner als erwartet ausfallen können (siehe [Firefox Bug 1391341](https://bugzil.la/1391341)).
- Gecko verwendet beim Parsen einer `url-token`-Komponente für die `domain()` oder `url-prefix()` URL-Abgleichsfunktion einer {{CSSxRef("@document", "@-moz-document")}}-Regel denselben Mechanismus. Quantum CSS nutzt nicht denselben Mechanismus und betrachtet Tokens nicht als ungültig, wenn sie Klammern oder Anführungszeichen enthalten ([Firefox Bug 1362333](https://bugzil.la/1362333)).
- In Gecko, wenn Sie eine Systemschriftart als Wert des `font` einer Canvas 2D Kontextes setzen (z.B. `menu`), schlägt das Rückholen des Schriftwerts fehl, um die erwartete Schrift anzuzeigen (es wird nichts zurückgegeben). Dies wurde in Quantum behoben ([Firefox Bug 1374885](https://bugzil.la/1374885)).
- In Gecko, wenn Sie einen abgetrennten Subtree erstellen (z.B. einen {{htmlelement("div")}}, der mit [`createElement()`](/de/docs/Web/API/Document/createElement) erstellt wurde und noch nicht in das DOM eingefügt wurde), wird das Wurzelelement des Subtrees als Block-Element gesetzt. In Quantum CSS wird dies gemäß Spezifikation als Inline gesetzt ([Firefox Bug 1374994](https://bugzil.la/1374994)).
- In Gecko werden {{CSSxRef("calc", "calc()")}}-Ausdrücke abgelehnt — was den Wert ungültig macht — wenn sie als Radiuskomponente einer {{CSSxRef("gradient/radial-gradient")}} Funktion verwendet werden ([Firefox Bug 1376019](https://bugzil.la/1376019)).
- In Gecko wird `calc(1*2*3)` nicht erfolgreich geparst; Quantum CSS behebt dies ([Firefox Bug 1379467](https://bugzil.la/1379467)).
- In Quantum CSS [`calc()` ist überall dort unterstützt](https://drafts.csswg.org/css-values-3/#calc-notation), wo die Spezifikation es beschreibt ([Firefox Bug 1350857](https://bugzil.la/1350857)). In Gecko ist es das nicht.
- Gecko hat einen Bug, bei dem die {{CSSxRef("::before")}} und {{CSSxRef("::after")}} Pseudo-Elemente immer noch generiert werden, selbst wenn der Wert der {{CSSxRef("content")}} Eigenschaft auf `normal` oder `none` gesetzt ist. Laut Spezifikation sollten sie es nicht ([Firefox Bug 1387931](https://bugzil.la/1387931)).
- Ein weiterer Gecko-Bug bedeutet, dass die {{CSSxRef("background-position")}} Eigenschaft nicht zwischen zwei Werten mit unterschiedlichen Zahlen von {{CSSxRef("&lt;position&gt;")}}-Werten übergegangen werden kann, zum Beispiel `background-position: 10px 10px;` und `background-position: 20px 20px, 30px 30px;` (siehe [Firefox Bug 1390446](https://bugzil.la/1390446)).

### SVG

_Keine Änderungen._

### JavaScript

- Die nicht standardisierte [`for each...in`](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#statements_2)-Schleife, ursprünglich Teil von EcmaScript for XML (E4X), wurde entfernt. Bitte verwenden Sie {{JSxRef("Statements/for...of", "for...of")}} stattdessen und sehen Sie sich die [Warnung: Die for-each-in Schleifen von JavaScript 1.6 sind veraltet](/de/docs/Web/JavaScript/Reference/Errors/For-each-in_loops_are_deprecated) für Hilfe bei der Migration an ([Firefox Bug 1083470](https://bugzil.la/1083470)).
- Die Methoden {{JSxRef("Object.prototype.watch()")}} und {{JSxRef("Object.unwatch", "unwatch()")}} sind veraltet, werfen jetzt eine Warnung aus, wenn sie verwendet werden, und werden bald entfernt ([Firefox Bug 934669](https://bugzil.la/934669)).
- Die nicht standardisierten {{JSxRef("Iterator")}} und {{JSxRef("StopIteration")}} Objekte sowie das Legacy-Iterationsprotokoll wurden entfernt ([Firefox Bug 1098412](https://bugzil.la/1098412)).
- Async Generator ist jetzt aktiviert ([Firefox Bug 1352312](https://bugzil.la/1352312)).
- Die Syntax for await (... of ...) ist jetzt aktiviert ([Firefox Bug 1352312](https://bugzil.la/1352312)).

### APIs

#### Neue APIs

- Die [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) API ist nun standardmäßig aktiviert ([Firefox Bug 1386021](https://bugzil.la/1386021)).
- Die Schnittstellen [`AbortController`](/de/docs/Web/API/AbortController) und [`AbortSignal`](/de/docs/Web/API/AbortSignal) (bekannt als die Abort API) wurden hinzugefügt, die es ermöglichen, DOM-Anfragen (wie [Fetch-Anfragen](/de/docs/Web/API/Window/fetch)) abzubrechen, falls gewünscht ([Firefox Bug 1378342](https://bugzil.la/1378342)).
- \[2] Die [Storage API](/de/docs/Web/API/Storage_API) ist implementiert und standardmäßig aktiviert ([Firefox Bug 1399038](https://bugzil.la/1399038)).

#### DOM

- Die [`Selection.type`](/de/docs/Web/API/Selection/type) Eigenschaft der [Selection API](/de/docs/Web/API/Selection) ist jetzt implementiert ([Firefox Bug 1359157](https://bugzil.la/1359157)).
- [`Document.createEvent('FocusEvent')`](/de/docs/Web/API/Document/createEvent) wird jetzt unterstützt ([Firefox Bug 1388069](https://bugzil.la/1388069)).
- Die `files`-Eigenschaft der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Schnittstelle ist nun setzbar ([Firefox Bug 1384030](https://bugzil.la/1384030)).
- Die Methode `HTMLDocument.getSelection()` wurde in die [`Document`](/de/docs/Web/API/Document/getSelection) Schnittstelle verschoben, sodass sie für XML-Dokumente verfügbar ist ([Firefox Bug 718711](https://bugzil.la/718711)).
- Das `messageerror`-Event ist nun implementiert, und Code kann darauf ausgeführt werden, wenn es über Ereignishandler, die auf Nachrichtenziele implementiert sind, ausgelöst wird — siehe das `messageerror`-Event von [`MessagePort`](/de/docs/Web/API/MessagePort/messageerror_event), [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope/messageerror_event), [`Worker`](/de/docs/Web/API/Worker/messageerror_event), [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel/messageerror_event) und [`Window`](/de/docs/Web/API/Window/messageerror_event) ([Firefox Bug 1359017](https://bugzil.la/1359017)).
- Wenn [`Headers`](/de/docs/Web/API/Headers) Werte iteriert werden, werden sie automatisch in lexikographischer Reihenfolge sortiert und Werte von doppelten Headernamen werden kombiniert ([Firefox Bug 1396848](https://bugzil.la/1396848)).

#### DOM-Events

_Keine Änderungen._

#### Medien und WebRTC

- Unterstützung für Nachrichten beliebiger Größe (bis zu 1GiB, obwohl 256kiB interoperabler ist) ist jetzt auf [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) durch die Verwendung des End-of-Record (EOR)-Flags auf SCTP-Nachrichten unterstützt. Weitere Informationen finden Sie unter [Understanding message size limits](/de/docs/Web/API/WebRTC_API/Using_data_channels#understanding_message_size_limits) ([Firefox Bug 979417](https://bugzil.la/979417)).

  > [!NOTE]
  > Da Firefox das SCTP ndata-Protokoll, das die Möglichkeit bietet, SCTP-Nachrichten von mehreren Quellen zu vermischen, noch nicht unterstützt, kann das Senden großer Datenobjekte zu erheblichen Verzögerungen bei allen anderen SCTP-Datenverkehr führen. Siehe [Firefox Bug 1381145](https://bugzil.la/1381145), um den Fortschritt bei der Implementierung und Bereitstellung von ndata-Unterstützung in Firefox zu verfolgen.

- Die Methode [`RTCDataChannel.send()`](/de/docs/Web/API/RTCDataChannel/send) kann jetzt eine `TypeError`-Ausnahme werfen, wenn die Größe der Nachricht, die Sie senden möchten, nicht mit dem empfangenden {{Glossary("user_agent", "User-Agent")}} kompatibel ist (dies ist als Teil von [Firefox Bug 979417](https://bugzil.la/979417) implementiert).
- Die [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API) wurde so aktualisiert, dass [`error`](/de/docs/Web/API/MediaRecorder/error_event) Ereignisse, die gesendet werden, um Probleme zu melden, die während der Aufnahme auftreten, jetzt vom Typ [`MediaRecorderErrorEvent`](/de/docs/Web/API/MediaRecorderErrorEvent) sind, anstatt generische Ereignisse zu sein.
- Die Dokumentation um [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) wurde aktualisiert, da die Eingaben von dessen Konstruktor jetzt in einem Objekt anstatt als Liste von Parametern angegeben werden können ([Firefox Bug 1388591](https://bugzil.la/1388591)).
- Die Web Audio API unterstützt jetzt ordnungsgemäß Mehrkanal-Ausgabe ([Firefox Bug 1378070](https://bugzil.la/1378070)).

### Sicherheit

- `resource://` URLs leaken keine Informationen mehr ([Firefox Bug 863246](https://bugzil.la/863246))
- Daten-URLs werden jetzt als eindeutige opake Ursprünge behandelt, anstatt den Ursprung des für die Navigation verantwortlichen Einstellungsobjekts zu erben ([Firefox Bug 1324406](https://bugzil.la/1324406)).

### Plugins

_Keine Änderungen._

### Sonstiges

- Der [Headless-Modus von Firefox](/de/docs/Mozilla/Firefox/Headless_mode) enthält jetzt ein `-screenshot`-Flag, das es Ihnen ermöglicht, Website-Screenshots direkt von der Kommandozeile aus zu erstellen ([Firefox Bug 1378010](https://bugzil.la/1378010)).

## Entfernen aus der Web-Plattform

### HTML

- `<link rel="preload">` (siehe [Preloading content with rel="preload"](/de/docs/Web/HTML/Attributes/rel/preload)) wurde in Firefox 57 wegen verschiedener Web-Kompatibilitätsprobleme deaktiviert (z.B. [Firefox Bug 1405761](https://bugzil.la/1405761)). Eine verbesserte Version, die für nicht cachebare Ressourcen funktioniert, wird voraussichtlich in Firefox 58 eingeführt.

### APIs

- Mozillas proprietäre [Social API](/de/docs/Archive/Social_API) wurde vollständig entfernt ([Firefox Bug 1388902](https://bugzil.la/1388902)).

### SVG

_Keine Änderungen._

## Änderungen für Add-on- und Mozilla-Entwickler

> [!NOTE]
> Ab Firefox 57 wurde jegliche Unterstützung für XPCOM-basierte Add-ons entfernt. Alle Erweiterungen müssen in die neuen [Browsererweiterungen](/de/docs/Mozilla/Add-ons/WebExtensions) (auch bekannt als WebExtensions) konvertiert werden, sonst funktionieren sie nicht mehr.

### WebExtensions

Die folgenden APIs wurden hinzugefügt oder erweitert:

- [`bookmarks`](/de/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks)

  - Unterstützung für Separatoren durch [`bookmarks.BookmarkTreeNodeType`](/de/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/BookmarkTreeNodeType)

- [`browser_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action)

  - `theme_icons`-Eigenschaft für Icons im Hell/Dunkel-Thema

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

  - Unterstützung für [`runtime.openOptionsPage()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/openOptionsPage) auf Android

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
  - `discarded`-Eigenschaft in [`tabs.Tab`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/Tab), [`tabs.onUpdated`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/onUpdated) und [`tabs.query()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query)
  - [`tabs.create()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/create) kann "view-source:" URLs öffnen
  - `openerTabId`-Eigenschaft in [`tabs.Tab`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/Tab), [`tabs.create()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/create), [`tabs.query()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query) und [`tabs.update()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/update)

- [`theme`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme)

  - `colors.toolbar`
  - `colors.toolbar_field`
  - `colors.toolbar_field_text`
  - `colors.toolbar_text`

- [`theme`](/de/docs/Mozilla/Add-ons/WebExtensions/API/theme)

  - `windowId` Option bei [`theme.update()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/theme/update)

- [`webRequest`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest)

  - [`filterResponseData()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/filterResponseData)
  - `proxyInfo`-Eigenschaft in [`webRequest`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest)-Ereignissen

- [`windows`](/de/docs/Mozilla/Add-ons/WebExtensions/API/windows)

  - `allowScriptsToClose` Option in [`windows.create()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/windows/create)

## Ältere Versionen

{{Firefox_for_developers}}
