---
title: Firefox 57 (Quantum) für Entwickler
slug: Mozilla/Firefox/Releases/57
l10n:
  sourceCommit: d681d0262045649aefa02efb937ff5f22b6e3b2a
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 57 (auch bekannt als Firefox Quantum), die Entwickler betreffen werden. Firefox 57 wurde am 14. November 2017 veröffentlicht.

## Firefox 57 === Firefox Quantum

Firefox 57 hat den Veröffentlichungsnamen **Quantum** erhalten, nach dem [Firefox Quantum](https://wiki.mozilla.org/Quantum)-Ingenieurprojekt, das darauf abzielte, Firefox von Grund auf neu zu entwickeln und dabei bedeutende Verbesserungen in Bezug auf Leistung, Stabilität und visuelle Darstellung zu bieten. Dies ist die erste Version von Firefox, die einige dieser Verbesserungen liefert, daher wollten wir diesen Anlass markieren.

> [!NOTE]
> Um mehr über die Quantum-Funktionen in dieser Version zu erfahren, lesen Sie [Firefox Quantum Developer Edition: der schnellste Firefox aller Zeiten mit Photon-UI und besseren Werkzeugen](https://hacks.mozilla.org/2017/09/firefox-quantum-developer-edition-fastest-firefox-ever/) von Dan Callahan.

[Firefox's neuer paralleler CSS-Engine](https://hacks.mozilla.org/2017/08/inside-a-super-fast-css-engine-quantum-css-aka-stylo/) — auch bekannt als **Quantum CSS** oder **Stylo** — ist standardmäßig in Firefox 57 für Desktop aktiviert, mit mobilen Versionen von Firefox, die später folgen werden. Entwickler sollten nichts wesentlich anderes bemerken, abgesehen von einer Vielzahl von Leistungsverbesserungen. Es gibt jedoch eine Reihe von kleineren funktionalen Unterschieden in Stylo, die implementiert wurden, um nicht-standardmäßiges Gecko-Verhalten zu korrigieren, das beseitigt werden sollte. Wir werden über solche Unterschiede auf Referenzseiten und in den Versionshinweisen entsprechend berichten (siehe [Quantum CSS Anmerkungen](#quantum_css_anmerkungen)).

## Änderungen für Webentwickler

### Entwicklertools

_Keine Änderungen._

### HTML

- Die [date](/de/docs/Web/HTML/Element/input/date) und [time](/de/docs/Web/HTML/Element/input/time) {{htmlelement("input")}} Typen sind jetzt in allen Builds aktiviert ([Firefox Fehler 1399036](https://bugzil.la/1399036)).

### CSS

- Die `minimal-ui`- und `standalone`-Werte der [`display-mode`](/de/docs/Web/CSS/@media/display-mode) Media Query werden jetzt unterstützt ([Firefox Fehler 1369815](https://bugzil.la/1369815)). Siehe auch das [Web App Manifest `display` Feld](/de/docs/Web/Manifest#display).
- Die Eigenschaften `grid-row-gap` und `grid-column-gap` werden nicht mehr durch die {{CSSxRef("grid")}} Kurzform zurückgesetzt ([Firefox Fehler 1387410](https://bugzil.la/1387410)).
- Die `layout.css.clip-path-shapes.enabled` Präferenz wurde entfernt ([Firefox Fehler 1399767](https://bugzil.la/1399767)). Diese Präferenz erlaubte es, die Unterstützung für {{CSSxRef("&lt;basic-shape&gt;")}} in {{CSSxRef("clip-path")}} zu deaktivieren. Diese Unterstützung wurde in Firefox 54 bereitgestellt und kann nicht mehr deaktiviert werden.

#### Quantum CSS Anmerkungen

Folgende Fehler wurden in Quantum behoben:

- Radiale Gradient-Werte wie `radial-gradient(circle gold,red)` funktionieren im alten Gecko Stil-System, obwohl sie nicht sollten, weil das Komma zwischen `circle` und `gold` fehlt ([Firefox Fehler 1383323](https://bugzil.la/1383323)).
- Wenn Sie ein Element außerhalb des Sichtbereichs animieren, um es auf den Sichtbereich zu bringen, aber eine Verzögerung angeben, führt Gecko auf einigen Plattformen keine Neuzeichnung durch, z.B. Windows ([Firefox Fehler 1383239](https://bugzil.la/1383239)).
- In Gecko können {{htmlelement("details")}}-Elemente nicht standardmäßig durch das `open`-Attribut geöffnet werden, wenn sie eine aktive {{CSSxRef("animation")}} haben ([Firefox Fehler 1382124](https://bugzil.la/1382124)).
- In Gecko funktionieren {{CSSxRef("transition", "Transitions")}} nicht, wenn sie von einem {{CSSxRef("text-shadow")}} mit einer angegebenen Farbe zu einem `text-shadow` ohne angegebene Farbe übergehen ([Firefox Fehler 726550](https://bugzil.la/726550)).
- In Gecko kann das Abbrechen einer füllenden Animation (z.B. mit `animation-fill-mode: forwards` gesetzt) eine Übergangsanimation am selben Element auslösen, aber nur einmal (siehe [Firefox Fehler 1192592](https://bugzil.la/1192592) und [diese Testfälle](https://bug1192592.bmoattachments.org/attachment.cgi?id=8843824) für weitere Informationen). Im Allgemeinen sollten deklarative Animationen keine Übergänge auslösen.
- Animationen, die `em`-Einheiten verwenden, sind nicht von Änderungen der {{CSSxRef("font-size")}} auf dem übergeordneten Element des animierten Elements in Gecko betroffen, obwohl sie das sollten ([Firefox Fehler 1254424](https://bugzil.la/1254424)).
- Gecko behandelt auch die `font-size`-Vererbung anders als Quantum CSS, was bedeutet, dass in einigen Spracheinstellungen vererbte Schriftgrößen kleiner sind als erwartet (siehe [Firefox Fehler 1391341](https://bugzil.la/1391341)).
- Gecko verwendet denselben Mechanismus beim Parsen eines url-tokens wie beim Parsen der `domain()` oder `url-prefix()` URL-Matching-Funktionen für eine {{CSSxRef("@document", "@-moz-document")}} Regel. Quantum CSS verwendet nicht denselben Mechanismus und betrachtet Tokens nicht als ungültig, wenn sie Klammern oder Anführungszeichen enthalten ([Firefox Fehler 1362333](https://bugzil.la/1362333)).
- In Gecko schlägt das Abrufen des Schriftwerts fehl (es wird nichts zurückgegeben), wenn Sie eine Systemschriftart als Wert eines Canvas 2D-Kontextes [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font) (z.B. `menu`) setzen. Dies wurde in Quantum behoben. ([Firefox Fehler 1374885](https://bugzil.la/1374885)).
- In Gecko wird ein getrenntes Teilbaum (z.B. ein {{htmlelement("div")}}, das mit [`createElement()`](/de/docs/Web/API/Document/createElement) erstellt wurde und noch nicht in das DOM eingefügt ist) als Block-Element gesetzt. In Quantum CSS wird dies als Inline-Element gemäß Spezifikation gesetzt ([Firefox Fehler 1374994](https://bugzil.la/1374994)).
- In Gecko werden {{CSSxRef("calc", "calc()")}}-Ausdrücke abgelehnt — wodurch der Wert ungültig wird — wenn sie als Radiuskomponente einer {{CSSxRef("gradient/radial-gradient")}} Funktion verwendet werden ([Firefox Fehler 1376019](https://bugzil.la/1376019)).
- In Gecko wird `calc(1*2*3)` nicht erfolgreich geparst; Quantum CSS behebt dies ([Firefox Fehler 1379467](https://bugzil.la/1379467)).
- In Quantum CSS wird [`calc()` überall dort unterstützt, wo die Spezifikation erklärt, dass es unterstützt werden sollte](https://drafts.csswg.org/css-values-3/#calc-notation) ([Firefox Fehler 1350857](https://bugzil.la/1350857)). In Gecko nicht.
- Gecko hat einen Fehler, bei dem die {{CSSxRef("::before")}} und {{CSSxRef("::after")}} Pseudo-Elemente auch dann noch generiert werden, wenn der {{CSSxRef("content")}}-Eigenschaftswert auf `normal` oder `none` gesetzt ist. Laut Spezifikation sollten sie das nicht ([Firefox Fehler 1387931](https://bugzil.la/1387931)).
- Ein weiterer Gecko-Fehler bedeutet, dass die {{CSSxRef("background-position")}}-Eigenschaft nicht zwischen zwei Werten mit unterschiedlicher Anzahl von {{CSSxRef("&lt;position&gt;")}}-Werten übergehen kann, zum Beispiel `background-position: 10px 10px;` und `background-position: 20px 20px, 30px 30px;` (siehe [Firefox Fehler 1390446](https://bugzil.la/1390446)).

### SVG

_Keine Änderungen._

### JavaScript

- Die nicht standardmäßige {{JSxRef("Statements/for_each...in", "for each...in")}} Schleife, ursprünglich Teil von EcmaScript für XML (E4X), wurde entfernt. Bitte verwenden Sie stattdessen {{JSxRef("Statements/for...of", "for...of")}} und siehe [Warnung: JavaScript 1.6's for-each-in Schleifen sind veraltet](/de/docs/Web/JavaScript/Reference/Errors/For-each-in_loops_are_deprecated) für Hilfe bei der Migration. ([Firefox Fehler 1083470](https://bugzil.la/1083470)).
- Die Methoden {{JSxRef("Object.prototype.watch()")}} und {{JSxRef("Object.unwatch", "unwatch()")}} sind veraltet, werfen nun eine Warnung bei Verwendung und werden bald entfernt ([Firefox Fehler 934669](https://bugzil.la/934669)).
- Die nicht standardmäßigen {{JSxRef("Iterator")}} und {{JSxRef("StopIteration")}} Objekte sowie das veraltete Iterationsprotokoll wurden entfernt ([Firefox Fehler 1098412](https://bugzil.la/1098412)).
- Async Generator ist jetzt aktiviert ([Firefox Fehler 1352312](https://bugzil.la/1352312)).
- Für das await (... of ...) Syntax ist jetzt aktiviert ([Firefox Fehler 1352312](https://bugzil.la/1352312)).

### APIs

#### Neue APIs

- Die [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) API ist jetzt standardmäßig aktiviert ([Firefox Fehler 1386021](https://bugzil.la/1386021)).
- Die [`AbortController`](/de/docs/Web/API/AbortController) und [`AbortSignal`](/de/docs/Web/API/AbortSignal) Schnittstellen (bekannt als die Abort-API) wurden hinzugefügt, die das Abbrechen von DOM-Anfragen (wie [fetch-Anfragen](/de/docs/Web/API/Window/fetch)) ermöglichen, wenn gewünscht ([Firefox Fehler 1378342](https://bugzil.la/1378342)).
- \[2] Die [Storage API](/de/docs/Web/API/Storage_API) ist implementiert und standardmäßig aktiviert ([Firefox Fehler 1399038](https://bugzil.la/1399038)).

#### DOM

- Die [`Selection.type`](/de/docs/Web/API/Selection/type) Eigenschaft der [Selection API](/de/docs/Web/API/Selection) ist jetzt implementiert ([Firefox Fehler 1359157](https://bugzil.la/1359157)).
- [`Document.createEvent('FocusEvent')`](/de/docs/Web/API/Document/createEvent) wird jetzt unterstützt ([Firefox Fehler 1388069](https://bugzil.la/1388069)).
- Die `files`-Eigenschaft der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Schnittstelle ist jetzt änderbar ([Firefox Fehler 1384030](https://bugzil.la/1384030)).
- Die `HTMLDocument.getSelection()` Methode wurde auf die [`Document`](/de/docs/Web/API/Document/getSelection) Schnittstelle verschoben, sodass sie für XML-Dokumente verfügbar ist ([Firefox Fehler 718711](https://bugzil.la/718711)).
- Das `messageerror`-Ereignis ist jetzt implementiert, und kann Code ausführen lassen, wenn es durch Ereignishandler auf Nachrichtenzielen ausgeführt wird — siehe das `messageerror`-Ereignis von [`MessagePort`](/de/docs/Web/API/MessagePort/messageerror_event), [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope/messageerror_event), [`Worker`](/de/docs/Web/API/Worker/messageerror_event), [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel/messageerror_event), und [`Window`](/de/docs/Web/API/Window/messageerror_event) ([Firefox Fehler 1359017](https://bugzil.la/1359017)).
- Wenn [`Headers`](/de/docs/Web/API/Headers) Werte iteriert werden, werden sie automatisch in lexikographischer Reihenfolge sortiert, und Werte von doppelten Header-Namen werden kombiniert ([Firefox Fehler 1396848](https://bugzil.la/1396848)).

#### DOM Ereignisse

_Keine Änderungen._

#### Medien und WebRTC

- Unterstützung für Nachrichten beliebiger Größe (bis zu 1 GiB, obwohl 256 KiB interoperabler ist) wird jetzt auf [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) durch Verwendung des End-of-Record (EOR)-Flags auf SCTP-Nachrichten unterstützt. Siehe [Verstehen der Nachrichtenbegrenzungen](/de/docs/Web/API/WebRTC_API/Using_data_channels#understanding_message_size_limits) für weitere Informationen ([Firefox Fehler 979417](https://bugzil.la/979417)).

  > [!NOTE]
  > Da Firefox das SCTP ndata-Protokoll, das die Möglichkeit bietet, SCTP-Nachrichten aus mehreren Quellen zu mischen, noch nicht unterstützt, kann das Senden großer Datenobjekte erhebliche Verzögerungen bei allen anderen SCTP-Verkehr verursachen. Siehe [Firefox Fehler 1381145](https://bugzil.la/1381145) um den Fortschritt bei der Implementierung und Bereitstellung der ndata-Unterstützung in Firefox zu verfolgen.

- Die [`RTCDataChannel.send()`](/de/docs/Web/API/RTCDataChannel/send) Methode kann jetzt eine `TypeError` Ausnahme werfen, wenn die Größe der Nachricht, die Sie senden möchten, nicht mit dem empfangenden [User Agent](/de/docs/Glossary/user_agent) kompatibel ist (dies ist als Teil von [Firefox Fehler 979417](https://bugzil.la/979417) implementiert).
- Die [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API) wurde so aktualisiert, dass [`error`](/de/docs/Web/API/MediaRecorder/error_event) Ereignisse, die zum Melden von Problemen, die während der Aufnahme auftreten, gesendet werden, jetzt vom Typ [`MediaRecorderErrorEvent`](/de/docs/Web/API/MediaRecorderErrorEvent) sind, anstatt generische Ereignisse zu sein.
- Die Dokumentation zu [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) wurde aktualisiert, da die Eingaben des Konstruktors jetzt in einem Objekt statt als Liste von Parametern angegeben werden können ([Firefox Fehler 1388591](https://bugzil.la/1388591)).
- Die Web Audio API unterstützt jetzt korrekt Mehrkanal-Ausgabe ([Firefox Fehler 1378070](https://bugzil.la/1378070)).

### Sicherheit

- `resource://` URLs leaken keine Informationen mehr ([Firefox Fehler 863246](https://bugzil.la/863246))
- Data-URLs werden jetzt als einzigartige undurchsichtige Ursprünge behandelt, anstatt den Ursprung des Einstellungsobjekts zu erben, das für die Navigation verantwortlich ist ([Firefox Fehler 1324406](https://bugzil.la/1324406)).

### Plugins

_Keine Änderungen._

### Andere

- Der [Headless-Modus von Firefox](/de/docs/Mozilla/Firefox/Headless_mode) umfasst jetzt ein `-screenshot`-Flag, das es Ihnen ermöglicht, Screenshots von Websites direkt über die Befehlszeile zu erstellen ([Firefox Fehler 1378010](https://bugzil.la/1378010)).

## Entfernungen aus der Web-Plattform

### HTML

- `<link rel="preload">` (siehe [Preloading-Inhalt mit rel="preload"](/de/docs/Web/HTML/Attributes/rel/preload)) wurde in Firefox 57 aufgrund verschiedener Webkompatibilitätsprobleme deaktiviert (z.B. [Firefox Fehler 1405761](https://bugzil.la/1405761)). Eine verbesserte Version, die für nicht zwischenspeicherbare Ressourcen funktioniert, wird voraussichtlich in Firefox 58 erscheinen.

### APIs

- Mozillas proprietäre [Soziale API](/de/docs/Archive/Social_API) wurde komplett entfernt ([Firefox Fehler 1388902](https://bugzil.la/1388902)).

### SVG

_Keine Änderungen._

## Änderungen für Add-on- und Mozilla-Entwickler

> [!NOTE]
> Ab Firefox 57 wurde die gesamte Unterstützung für XPCOM-basierte Add-ons entfernt. Alle Erweiterungen müssen in die neuen [Browsererweiterungen](/de/docs/Mozilla/Add-ons/WebExtensions) (auch bekannt als WebExtensions) konvertiert werden, oder sie werden nicht funktionieren.

### WebExtensions

Die folgenden APIs wurden hinzugefügt oder erweitert:

- [`bookmarks`](/de/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks)

  - Unterstützung für Separatoren durch [`bookmarks.BookmarkTreeNodeType`](/de/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/BookmarkTreeNodeType)

- [`browser_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action)

  - `theme_icons` Eigenschaft für Licht/Dunkel-Themen-Icons

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

  - `incognito` Option in [`downloads.download()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/downloads/download)
  - `estimatedEndTime` Eigenschaft in [`downloads.DownloadItem`](/de/docs/Mozilla/Add-ons/WebExtensions/API/downloads/DownloadItem)

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

  - `loadReplace` Option in [`tabs.update()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/update)
  - `discarded` Eigenschaft in [`tabs.Tab`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/Tab), [`tabs.onUpdated`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/onUpdated), und [`tabs.query()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query)
  - [`tabs.create()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/create) kann "view-source:" URLs öffnen
  - `openerTabId` Eigenschaft in [`tabs.Tab`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/Tab), [`tabs.create()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/create), [`tabs.query()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query), und [`tabs.update()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/update)

- [`theme`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme)

  - `colors.toolbar`
  - `colors.toolbar_field`
  - `colors.toolbar_field_text`
  - `colors.toolbar_text`

- [`theme`](/de/docs/Mozilla/Add-ons/WebExtensions/API/theme)

  - `windowId` Option zu [`theme.update()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/theme/update)

- [`webRequest`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest)

  - [`filterResponseData()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/filterResponseData)
  - `proxyInfo` Eigenschaft in [`webRequest`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest) Ereignissen

- [`windows`](/de/docs/Mozilla/Add-ons/WebExtensions/API/windows)

  - `allowScriptsToClose` Option in [`windows.create()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/windows/create)

## Ältere Versionen

{{Firefox_for_developers}}
