---
title: Firefox 57 (Quantum) für Entwickler
slug: Mozilla/Firefox/Releases/57
l10n:
  sourceCommit: d681d0262045649aefa02efb937ff5f22b6e3b2a
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 57 (alias Firefox Quantum), die Entwickler betreffen. Firefox 57 wurde am 14. November 2017 veröffentlicht.

## Firefox 57 === Firefox Quantum

Firefox 57 trägt den Veröffentlichungsnamen **Quantum**, nach dem [Firefox Quantum](https://wiki.mozilla.org/Quantum) Ingenieurprojekt, das darauf abzielt, Firefox von Grund auf neu zu gestalten und dabei wesentliche Leistungs-, Stabilitäts- und visuelle Verbesserungen mitzubringen. Dies ist die erste Version von Firefox, die einige dieser Verbesserungen enthält, daher wollten wir diesen Anlass würdigen.

> [!NOTE]
> Um mehr über die Quantum-Funktionen in dieser Version zu erfahren, lesen Sie [Firefox Quantum Developer Edition: der schnellste Firefox aller Zeiten mit Photon-UI und besseren Werkzeugen](https://hacks.mozilla.org/2017/09/firefox-quantum-developer-edition-fastest-firefox-ever/) von Dan Callahan.

[Firefox' neue parallele CSS-Engine](https://hacks.mozilla.org/2017/08/inside-a-super-fast-css-engine-quantum-css-aka-stylo/) — auch bekannt als **Quantum CSS** oder **Stylo** — ist standardmäßig in Firefox 57 für Desktop aktiviert; mobile Versionen von Firefox folgen später. Entwickler sollten keine signifikanten Unterschiede bemerken, abgesehen von einer Vielzahl von Leistungsverbesserungen. Es gibt jedoch eine Reihe von kleineren funktionalen Unterschieden in Stylo, die implementiert wurden, um nicht-standardisiertes Gecko-Verhalten zu beheben, das eliminiert werden sollte. Wir werden über solche Unterschiede auf Referenzseiten und in den Versionshinweisen berichten, wo es angebracht ist (siehe [Quantum CSS Notizen](#quantum_css_notizen)).

## Änderungen für Webentwickler

### Entwickler-Tools

_Keine Änderungen._

### HTML

- Die [date](/de/docs/Web/HTML/Element/input/date) und [time](/de/docs/Web/HTML/Element/input/time) {{htmlelement("input")}}-Typen sind jetzt in allen Builds aktiviert ([Firefox Bug 1399036](https://bugzil.la/1399036)).

### CSS

- Die Werte `minimal-ui` und `standalone` der [`display-mode`](/de/docs/Web/CSS/@media/display-mode) Media-Query werden jetzt unterstützt ([Firefox Bug 1369815](https://bugzil.la/1369815)). Siehe auch das [Web-App-Manifest `display`-Feld](/de/docs/Web/Manifest#display).
- Die Eigenschaften `grid-row-gap` und `grid-column-gap` werden nicht mehr durch das {{CSSxRef("grid")}}-Shorthand zurückgesetzt ([Firefox Bug 1387410](https://bugzil.la/1387410)).
- Die Einstellung `layout.css.clip-path-shapes.enabled` wurde entfernt ([Firefox Bug 1399767](https://bugzil.la/1399767)). Diese Einstellung erlaubte es, die Unterstützung von {{CSSxRef("&lt;basic-shape&gt;")}} in {{CSSxRef("clip-path")}} zu deaktivieren. Diese Unterstützung wurde in Firefox 54 eingeführt und kann nicht mehr deaktiviert werden.

#### Quantum CSS Notizen

Folgende Bugs wurden in Quantum behoben:

- Radial-Gradient-Werte wie `radial-gradient(circle gold,red)` funktionieren im alten Gecko-Style-System, obwohl sie es nicht sollten, da das Komma zwischen `circle` und `gold` fehlt ([Firefox Bug 1383323](https://bugzil.la/1383323)).
- Wenn Sie ein Offscreen-Element animieren, dass onscreen erscheint, aber eine Verzögerung angeben, wird Gecko auf einigen Plattformen nicht neu gezeichnet, z.B. Windows ([Firefox Bug 1383239](https://bugzil.la/1383239)).
- In Gecko können {{htmlelement("details")}}-Elemente nicht standardmäßig mit dem `open`-Attribut geöffnet werden, wenn sie eine aktive {{CSSxRef("animation")}} haben ([Firefox Bug 1382124](https://bugzil.la/1382124)).
- In Gecko funktionieren {{CSSxRef("transition", "transitions")}} nicht, wenn sie von einem {{CSSxRef("text-shadow")}} mit spezifizierter Farbe zu einem `text-shadow` ohne spezifizierte Farbe wechseln ([Firefox Bug 726550](https://bugzil.la/726550)).
- In Gecko kann das Abbrechen einer Füllanimation (z. B. mit `animation-fill-mode: forwards` gesetzt) einen Übergang auf demselben Element auslösen, aber nur einmal (siehe [Firefox Bug 1192592](https://bugzil.la/1192592) und [diese Testfälle](https://bug1192592.bmoattachments.org/attachment.cgi?id=8843824) für mehr Informationen). Allgemein sollten deklarative Animationen keine Übergänge auslösen.
- Animationen mit em-Einheiten werden nicht von Änderungen der {{CSSxRef("font-size")}} auf dem übergeordneten Element des animierten Elements in Gecko beeinflusst, obwohl sie das sollten ([Firefox Bug 1254424](https://bugzil.la/1254424)).
- Gecko behandelt die `font-size`-Vererbung anders als Quantum CSS, was bedeutet, dass für einige Spracheinstellungen vererbte Schriftgrößen kleiner sind als erwartet (siehe [Firefox Bug 1391341](https://bugzil.la/1391341)).
- Gecko verwendet denselben Mechanismus wie beim Parsen eines url-Tokens, wenn es die `domain()` oder `url-prefix()` URL-Matching-Funktionen für eine {{CSSxRef("@document", "@-moz-document")}} Regel parst. Quantum CSS verwendet nicht denselben Mechanismus und betrachtet Tokens nicht als ungültig, wenn sie Klammern oder Anführungszeichen enthalten ([Firefox Bug 1362333](https://bugzil.la/1362333)).
- In Gecko, wenn Sie eine Systemschrift als Wert des [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font) eines 2D-Canvas-Kontexts setzen (z.B. `menu`), schlägt das Abrufen des Schriftwerts fehl und gibt die erwartete Schrift nicht zurück (es wird nichts zurückgegeben). Dies wurde in Quantum behoben. ([Firefox Bug 1374885](https://bugzil.la/1374885)).
- In Gecko wird bei der Erstellung eines losgelösten Unterbaums (z.B. eines {{htmlelement("div")}} erstellt mit [`createElement()`](/de/docs/Web/API/Document/createElement), der noch nicht in den DOM eingefügt ist) das Wurzelelement des Unterbaums als Block-Element gesetzt. In Quantum CSS ist dies gemäß Spezifikation inline gesetzt ([Firefox Bug 1374994](https://bugzil.la/1374994)).
- In Gecko werden {{CSSxRef("calc", "calc()")}}-Ausdrücke abgelehnt — wodurch der Wert ungültig wird — wenn sie als Radiuskomponente einer {{CSSxRef("gradient/radial-gradient")}}-Funktion verwendet werden ([Firefox Bug 1376019](https://bugzil.la/1376019)).
- In Gecko wird `calc(1*2*3)` nicht erfolgreich geparst; Quantum CSS behebt dies ([Firefox Bug 1379467](https://bugzil.la/1379467)).
- In Quantum CSS wird [`calc()` überall unterstützt, wo die Spezifikation dies erklärt](https://drafts.csswg.org/css-values-3/#calc-notation) ([Firefox Bug 1350857](https://bugzil.la/1350857)). In Gecko wird es nicht.
- Gecko hat einen Bug, bei dem die {{CSSxRef("::before")}} und {{CSSxRef("::after")}}-Pseudo-Elemente weiterhin generiert werden, auch wenn der Wert der {{CSSxRef("content")}}-Eigenschaft auf `normal` oder `none` gesetzt ist. Laut Spezifikationen sollten sie das nicht ([Firefox Bug 1387931](https://bugzil.la/1387931)).
- Ein weiterer Gecko-Bug bedeutet, dass die {{CSSxRef("background-position")}}-Eigenschaft nicht zwischen zwei Werten übergangen werden kann, die unterschiedliche Anzahlen von {{CSSxRef("&lt;position&gt;")}}-Werten enthalten, z.B. `background-position: 10px 10px;` und `background-position: 20px 20px, 30px 30px;` (siehe [Firefox Bug 1390446](https://bugzil.la/1390446)).

### SVG

_Keine Änderungen._

### JavaScript

- Die nicht standardmäßige {{JSxRef("Statements/for_each...in", "for each...in")}}-Schleife, die ursprünglich Teil von EcmaScript for XML (E4X) war, wurde entfernt. Bitte verwenden Sie {{JSxRef("Statements/for...of", "for...of")}} stattdessen und sehen Sie [Warnung: JavaScript 1.6's for-each-in Schlaufen sind veraltet](/de/docs/Web/JavaScript/Reference/Errors/For-each-in_loops_are_deprecated) für Hilfe bei der Migration. ([Firefox Bug 1083470](https://bugzil.la/1083470)).
- Die {{JSxRef("Object.prototype.watch()")}} und {{JSxRef("Object.unwatch", "unwatch()")}}-Methoden sind veraltet, erzeugen jetzt eine Warnung bei Nutzung und werden bald entfernt ([Firefox Bug 934669](https://bugzil.la/934669)).
- Die nicht standardmäßigen {{JSxRef("Iterator")}} und {{JSxRef("StopIteration")}}-Objekte sowie das Legacy-Iterierungsprotokoll wurden entfernt ([Firefox Bug 1098412](https://bugzil.la/1098412)).
- Der asynchrone Generator ist jetzt aktiviert ([Firefox Bug 1352312](https://bugzil.la/1352312)).
- Die Syntax `for await (... of ...)` ist jetzt aktiviert ([Firefox Bug 1352312](https://bugzil.la/1352312)).

### APIs

#### Neue APIs

- Die [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) API ist jetzt standardmäßig aktiviert ([Firefox Bug 1386021](https://bugzil.la/1386021)).
- Die Schnittstellen [`AbortController`](/de/docs/Web/API/AbortController) und [`AbortSignal`](/de/docs/Web/API/AbortSignal) (bekannt als Abort API) wurden hinzugefügt, sodass DOM-Anfragen (wie [fetch requests](/de/docs/Web/API/Window/fetch)) bei Bedarf abgebrochen werden können ([Firefox Bug 1378342](https://bugzil.la/1378342)).
- \[2] Die [Storage API](/de/docs/Web/API/Storage_API) ist implementiert und standardmäßig aktiviert ([Firefox Bug 1399038](https://bugzil.la/1399038)).

#### DOM

- Die [`Selection.type`](/de/docs/Web/API/Selection/type)-Eigenschaft der [Selection API](/de/docs/Web/API/Selection) ist jetzt implementiert ([Firefox Bug 1359157](https://bugzil.la/1359157)).
- [`Document.createEvent('FocusEvent')`](/de/docs/Web/API/Document/createEvent) wird jetzt unterstützt ([Firefox Bug 1388069](https://bugzil.la/1388069)).
- Die `files`-Eigenschaft der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle ist jetzt einstellbar ([Firefox Bug 1384030](https://bugzil.la/1384030)).
- Die Methode `HTMLDocument.getSelection()` wurde auf die [`Document`](/de/docs/Web/API/Document/getSelection)-Schnittstelle verschoben, sodass sie für XML-Dokumente verfügbar ist ([Firefox Bug 718711](https://bugzil.la/718711)).
- Das `messageerror`-Ereignis ist jetzt implementiert und kann mittels implementierter Ereignishandler an Nachrichtenzielen Code ausführen, wenn es ausgelöst wird — siehe das `messageerror`-Ereignis von [`MessagePort`](/de/docs/Web/API/MessagePort/messageerror_event), [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope/messageerror_event), [`Worker`](/de/docs/Web/API/Worker/messageerror_event), [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel/messageerror_event) und [`Window`](/de/docs/Web/API/Window/messageerror_event) ([Firefox Bug 1359017](https://bugzil.la/1359017)).
- Wenn [`Headers`](/de/docs/Web/API/Headers)-Werte iteriert werden, werden sie automatisch lexikografisch sortiert, und Werte von doppelten Header-Namen werden kombiniert ([Firefox Bug 1396848](https://bugzil.la/1396848)).

#### DOM-Ereignisse

_Keine Änderungen._

#### Media und WebRTC

- Unterstützung für Nachrichten beliebiger Größe (bis zu 1GiB, obwohl 256kiB interoperabler sind) wird jetzt auf [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) durch Nutzung des End-of-Record (EOR) Flags auf SCTP-Nachrichten unterstützt. Siehe [Verstehen der Nachrichtenbegrenzungen](/de/docs/Web/API/WebRTC_API/Using_data_channels#understanding_message_size_limits) für mehr Informationen ([Firefox Bug 979417](https://bugzil.la/979417)).

  > [!NOTE]
  > Da Firefox das SCTP ndata-Protokoll, das die Möglichkeit bietet, SCTP-Nachrichten aus mehreren Quellen zu verflechten, noch nicht unterstützt, kann das Senden großer Datenobjekte erhebliche Verzögerungen bei allen anderen SCTP-Verkehr verursachen. Siehe [Firefox Bug 1381145](https://bugzil.la/1381145), um den Fortschritt bei der Implementierung und Bereitstellung der ndata-Unterstützung in Firefox zu verfolgen.

- Die [`RTCDataChannel.send()`](/de/docs/Web/API/RTCDataChannel/send)-Methode kann jetzt eine `TypeError`-Ausnahme werfen, wenn die Größe der Nachricht, die Sie zu senden versuchen, nicht mit dem empfangenden {{Glossary("user_agent", "User-Agent")}} kompatibel ist (dies ist Teil der Implementierung von [Firefox Bug 979417](https://bugzil.la/979417)).
- Die [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API) wurde aktualisiert, sodass [`error`](/de/docs/Web/API/MediaRecorder/error_event)-Ereignisse, die gesendet werden, um Probleme zu berichten, die beim Aufnehmen auftreten, nun vom Typ [`MediaRecorderErrorEvent`](/de/docs/Web/API/MediaRecorderErrorEvent) sind, anstatt generische Ereignisse zu sein.
- Die Dokumentation zu [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) wurde aktualisiert, da die Eingaben des Konstruktors jetzt in einem Objekt angegeben werden können, statt als Liste von Parametern ([Firefox Bug 1388591](https://bugzil.la/1388591)).
- Die Web Audio API unterstützt jetzt korrekt Mehrkanalausgabe ([Firefox Bug 1378070](https://bugzil.la/1378070)).

### Sicherheit

- `resource://` URLs lecken keine Informationen mehr ([Firefox Bug 863246](https://bugzil.la/863246))
- Daten-URLs werden jetzt als eindeutige undurchsichtige Ursprünge behandelt, anstatt den Ursprung des Navigationsverantwortlichen zu erben ([Firefox Bug 1324406](https://bugzil.la/1324406)).

### Plugins

_Keine Änderungen._

### Sonstiges

- Firefox [headless-Modus](/de/docs/Mozilla/Firefox/Headless_mode) beinhaltet jetzt ein `-screenshot`-Flag, das Ihnen ermöglicht, Webseiten-Screenshots direkt von der Befehlszeile aus zu erstellen ([Firefox Bug 1378010](https://bugzil.la/1378010)).

## Entfernt von der Webplattform

### HTML

- `<link rel="preload">` (siehe [Preloading content with rel="preload"](/de/docs/Web/HTML/Attributes/rel/preload)) wurde in Firefox 57 deaktiviert aufgrund von verschiedenen Webkompatibilitätsproblemen (z.B. [Firefox Bug 1405761](https://bugzil.la/1405761)). Eine verbesserte Version, die für nicht-cachebare Ressourcen funktioniert, wird voraussichtlich in Firefox 58 eingeführt.

### APIs

- Mozillas proprietäre [Social API](/de/docs/Archive/Social_API) wurde vollständig entfernt ([Firefox Bug 1388902](https://bugzil.la/1388902)).

### SVG

_Keine Änderungen._

## Änderungen für Add-on- und Mozilla-Entwickler

> [!NOTE]
> Ab Firefox 57 wurde die gesamte Unterstützung für XPCOM-basierte Add-ons entfernt. Alle Erweiterungen müssen in die neuen [Browser-Erweiterungen](/de/docs/Mozilla/Add-ons/WebExtensions) (auch bekannt als WebExtensions) umgewandelt werden, oder sie werden nicht funktionieren.

### WebExtensions

Die folgenden APIs wurden hinzugefügt oder erweitert:

- [`bookmarks`](/de/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks)

  - Unterstützung für Trennzeichen über [`bookmarks.BookmarkTreeNodeType`](/de/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/BookmarkTreeNodeType)

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

  - Unterstützung von [`runtime.openOptionsPage()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/runtime/openOptionsPage) auf Android

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
  - [`tabs.create()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/create) kann "view-source:"-URLs öffnen
  - `openerTabId`-Eigenschaft in [`tabs.Tab`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/Tab), [`tabs.create()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/create), [`tabs.query()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query) und [`tabs.update()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/update)

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
