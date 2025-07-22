---
title: Firefox 57 (Quantum) für Entwickler
short-title: Firefox 57
slug: Mozilla/Firefox/Releases/57
l10n:
  sourceCommit: 2591a9b59de88401a2ef0fb7d0b8d0281e3f5376
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 57 (auch bekannt als Firefox Quantum), die Entwickler betreffen werden. Firefox 57 wurde am 14. November 2017 veröffentlicht.

## Firefox 57 === Firefox Quantum

Firefox 57 hat den Namen **Quantum** erhalten, nach dem [Firefox Quantum](https://wiki.mozilla.org/Quantum) Ingenieurprojekt, das darauf abzielt, Firefox von Grund auf neu zu entwickeln. Dies bringt große Verbesserungen in Bezug auf Leistung, Stabilität und visuelle Gestaltung mit sich. Dies ist die erste Version von Firefox, die einige dieser Verbesserungen ausliefert, daher wollten wir diesen Anlass kennzeichnen.

> [!NOTE]
> Um mehr über die Quantum-Funktionen in dieser Version zu erfahren, lesen Sie [Firefox Quantum Developer Edition: der schnellste Firefox aller Zeiten mit Photon UI und besseren Werkzeugen](https://hacks.mozilla.org/2017/09/firefox-quantum-developer-edition-fastest-firefox-ever/) von Dan Callahan.

[Firefox' neue parallele CSS-Engine](https://hacks.mozilla.org/2017/08/inside-a-super-fast-css-engine-quantum-css-aka-stylo/) — auch bekannt als **Quantum CSS** oder **Stylo** — ist in Firefox 57 für den Desktop standardmäßig aktiviert, mit Mobilversionen von Firefox, die später folgen sollen. Entwickler sollten nichts signifikant anderes bemerken, abgesehen von einer Vielzahl von Leistungsverbesserungen. Es gibt jedoch eine Reihe von kleineren funktionalen Unterschieden in Stylo, die implementiert wurden, um nicht-standardmäßiges Gecko-Verhalten zu korrigieren, das beseitigt werden soll. Wir werden über solche Unterschiede auf Referenzseiten und in den Versionshinweisen berichten (siehe [Quantum CSS-Hinweise](#quantum_css-hinweise)).

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

_Keine Änderungen._

### HTML

- Die [date](/de/docs/Web/HTML/Reference/Elements/input/date) und [time](/de/docs/Web/HTML/Reference/Elements/input/time) {{htmlelement("input")}} Typen sind jetzt in allen Builds aktiviert ([Firefox Bug 1399036](https://bugzil.la/1399036)).

### CSS

- Die Werte `minimal-ui` und `standalone` der [`display-mode`](/de/docs/Web/CSS/@media/display-mode) Medienabfrage werden jetzt unterstützt ([Firefox Bug 1369815](https://bugzil.la/1369815)). Siehe auch das [Web App Manifest `display` Feld](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display).
- Die Eigenschaften `grid-row-gap` und `grid-column-gap` werden durch die {{CSSxRef("grid")}} Kurznotation nicht mehr zurückgesetzt ([Firefox Bug 1387410](https://bugzil.la/1387410)).
- Die Präferenz `layout.css.clip-path-shapes.enabled` wurde entfernt ([Firefox Bug 1399767](https://bugzil.la/1399767)). Diese Präferenz erlaubte es, die Unterstützung für {{CSSxRef("&lt;basic-shape&gt;")}} in {{CSSxRef("clip-path")}} zu deaktivieren. Diese Unterstützung wurde in Firefox 54 bereitgestellt und kann nicht mehr deaktiviert werden.

#### Quantum CSS-Hinweise

Folgende Fehler wurden in Quantum behoben:

- Radial-Gradient-Werte wie `radial-gradient(circle gold,red)` funktionierten im alten Gecko-Stil-System, obwohl sie es nicht sollten, aufgrund des fehlenden Kommas zwischen `circle` und `gold` ([Firefox Bug 1383323](https://bugzil.la/1383323)).
- Wenn Sie ein außerhalb des Bildschirms befindliches Element auf den Bildschirm animieren, aber eine Verzögerung angeben, führt Gecko auf einigen Plattformen, z.B. Windows, keine Neuzeichnung durch ([Firefox Bug 1383239](https://bugzil.la/1383239)).
- In Gecko können {{htmlelement("details")}} Elemente nicht standardmäßig mit dem `open` Attribut geöffnet werden, wenn sie eine aktive {{CSSxRef("animation")}} haben ([Firefox Bug 1382124](https://bugzil.la/1382124)).
- In Gecko funktionieren {{CSSxRef("transition", "transitions")}} nicht, wenn sie von einem {{CSSxRef("text-shadow")}} mit einer angegebenen Farbe zu einem `text-shadow` ohne angegebene Farbe wechseln ([Firefox Bug 726550](https://bugzil.la/726550)).
- In Gecko kann das Abbrechen einer füllenden Animation (z.B. mit `animation-fill-mode: forwards` gesetzt) einen Übergang auf demselben Element auslösen, allerdings nur einmal (siehe [Firefox Bug 1192592](https://bugzil.la/1192592) und [diese Testfälle](https://bug1192592.bmoattachments.org/attachment.cgi?id=8843824) für weitere Informationen). Im Allgemeinen sollten deklarative Animationen keine Übergänge auslösen.
- Animationen, die `em`-Einheiten verwenden, sind in Gecko nicht von Änderungen der {{CSSxRef("font-size")}} am übergeordneten Element der Animation betroffen, obwohl sie es sein sollten ([Firefox Bug 1254424](https://bugzil.la/1254424)).
- Gecko behandelt auch die Vererbung von `font-size` anders als Quantum CSS, was bedeutet, dass in einigen Spracheinstellungen vererbte Schriftgrößen kleiner als erwartet ausfallen (siehe [Firefox Bug 1391341](https://bugzil.la/1391341)).
- Gecko verwendet denselben Mechanismus, der beim Parsen eines url-token verwendet wird, beim Parsen der `domain()` oder `url-prefix()` URL-Matching-Funktionen für eine {{CSSxRef("@document", "@-moz-document")}} Regel. Quantum CSS verwendet nicht denselben Mechanismus und betrachtet Tokens nicht als ungültig, wenn sie Klammern oder Anführungszeichen enthalten ([Firefox Bug 1362333](https://bugzil.la/1362333)).
- In Gecko, wenn Sie eine Systemschrift als Wert eines 2D-Kontextes einer Leinwand [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font) einstellen (z.B. `menu`), schlägt das Abrufen des Schriftwerts fehl, um die erwartete Schrift zurückzugeben (es wird nichts zurückgegeben). Dies wurde in Quantum behoben. ([Firefox Bug 1374885](https://bugzil.la/1374885)).
- In Gecko wird eine abgetrennte Unterstruktur (z.B. ein {{htmlelement("div")}}, das mit [`createElement()`](/de/docs/Web/API/Document/createElement) erstellt wurde und noch nicht in den DOM eingefügt wurde) als Block-Level-Element gesetzt. In Quantum CSS wird dies als inline gesetzt, gemäß der Spezifikation ([Firefox Bug 1374994](https://bugzil.la/1374994)).
- In Gecko werden {{CSSxRef("calc", "calc()")}} Ausdrücke abgelehnt – was dazu führt, dass der Wert ungültig ist –, wenn sie als Radiuskomponente einer {{CSSxRef("gradient/radial-gradient")}} Funktion verwendet werden ([Firefox Bug 1376019](https://bugzil.la/1376019)).
- In Gecko wird `calc(1*2*3)` nicht erfolgreich geparst; Quantum CSS behebt dies ([Firefox Bug 1379467](https://bugzil.la/1379467)).
- In Quantum CSS, [`calc()` is supported everywhere that the spec explains it should be](https://drafts.csswg.org/css-values-3/#calc-notation) ([Firefox Bug 1350857](https://bugzil.la/1350857)). In Gecko ist dies nicht der Fall.
- Gecko hat einen Fehler, bei dem die {{CSSxRef("::before")}} und {{CSSxRef("::after")}} Pseudoelemente immer noch generiert werden, selbst wenn der {{CSSxRef("content")}} Eigenschaftswert auf `normal` oder `none` gesetzt ist. Laut Spezifikation sollten sie es nicht ([Firefox Bug 1387931](https://bugzil.la/1387931)).
- Ein weiterer Gecko-Fehler bedeutet, dass die Eigenschaft {{CSSxRef("background-position")}} nicht zwischen zwei Werten mit unterschiedlichen Zahlen von {{CSSxRef("&lt;position&gt;")}} Werten übergegangen werden kann, zum Beispiel `background-position: 10px 10px;` und `background-position: 20px 20px, 30px 30px;` (siehe [Firefox Bug 1390446](https://bugzil.la/1390446)).

### SVG

_Keine Änderungen._

### JavaScript

- Die nicht-standardmäßige [`for each...in`](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#statements_2) Schleife, die ursprünglich Teil von ECMAScript für XML (E4X) war, wurde entfernt. Bitte verwenden Sie stattdessen {{JSxRef("Statements/for...of", "for...of")}}. ([Firefox Bug 1083470](https://bugzil.la/1083470)).
- Die Methoden [`Object.prototype.watch()` und `Object.prototype.unwatch()`](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#object_2) sind veraltet, werfen jetzt eine Warnung, wenn sie verwendet werden, und werden bald entfernt ([Firefox Bug 934669](https://bugzil.la/934669)).
- Die nicht-standardmäßigen `Iterator` und `StopIteration` Objekte sowie das [Legacy-Iterationsprotokoll](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#legacy_generator_and_iterator) wurden entfernt ([Firefox Bug 1098412](https://bugzil.la/1098412)).
- Asynchrone Generatoren sind jetzt aktiviert ([Firefox Bug 1352312](https://bugzil.la/1352312)).
- Die Syntax for await (... of ...) ist jetzt aktiviert ([Firefox Bug 1352312](https://bugzil.la/1352312)).

### APIs

#### Neue APIs

- Die [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) API ist jetzt standardmäßig aktiviert ([Firefox Bug 1386021](https://bugzil.la/1386021)).
- Die Schnittstellen [`AbortController`](/de/docs/Web/API/AbortController) und [`AbortSignal`](/de/docs/Web/API/AbortSignal) (bekannt als die Abort-API) wurden hinzugefügt, um zu ermöglichen, dass DOM-Anfragen (wie [Fetch-Anfragen](/de/docs/Web/API/Window/fetch)) bei Bedarf abgebrochen werden können ([Firefox Bug 1378342](https://bugzil.la/1378342)).
- \[2] Die [Storage API](/de/docs/Web/API/Storage_API) wurde implementiert und ist standardmäßig aktiviert ([Firefox Bug 1399038](https://bugzil.la/1399038)).

#### DOM

- Die [`Selection.type`](/de/docs/Web/API/Selection/type) Eigenschaft der [Selection API](/de/docs/Web/API/Selection) ist jetzt implementiert ([Firefox Bug 1359157](https://bugzil.la/1359157)).
- [`Document.createEvent('FocusEvent')`](/de/docs/Web/API/Document/createEvent) wird jetzt unterstützt ([Firefox Bug 1388069](https://bugzil.la/1388069)).
- Die `files` Eigenschaft der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Schnittstelle ist jetzt setzbar ([Firefox Bug 1384030](https://bugzil.la/1384030)).
- Die Methode `HTMLDocument.getSelection()` wurde auf die [`Document`](/de/docs/Web/API/Document/getSelection) Schnittstelle verschoben, sodass sie nun auch für XML-Dokumente verfügbar ist ([Firefox Bug 718711](https://bugzil.la/718711)).
- Das `messageerror` Ereignis ist jetzt implementiert, und es kann Code ausgeführt werden, wenn das Ereignis über Ereignis-Handler, die auf Nachrichten-Zielen implementiert sind, ausgelöst wird — siehe das `messageerror` Ereignis von [`MessagePort`](/de/docs/Web/API/MessagePort/messageerror_event), [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope/messageerror_event), [`Worker`](/de/docs/Web/API/Worker/messageerror_event), [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel/messageerror_event), und [`Window`](/de/docs/Web/API/Window/messageerror_event) ([Firefox Bug 1359017](https://bugzil.la/1359017)).
- Wenn [`Headers`](/de/docs/Web/API/Headers) Werte iteriert werden, werden sie automatisch lexikographisch sortiert, und Werte von doppelten Header-Namen werden kombiniert ([Firefox Bug 1396848](https://bugzil.la/1396848)).

#### DOM-Ereignisse

_Keine Änderungen._

#### Medien und WebRTC

- Unterstützung für Nachrichten beliebiger Größe (bis zu 1GiB, obwohl 256kiB interoperabler ist) wird jetzt auf [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) durch Verwendung des End-of-Record (EOR) Flags auf SCTP-Nachrichten unterstützt. Siehe [Verständnis der Nachrichten Größenlimits](/de/docs/Web/API/WebRTC_API/Using_data_channels#understanding_message_size_limits) für weitere Informationen ([Firefox Bug 979417](https://bugzil.la/979417)).

  > [!NOTE]
  > Da Firefox das SCTP Stream Schedulers und User Message Interleaving Protokoll, das die Möglichkeit bietet, SCTP-Nachrichten von mehreren Quellen zu verzahnen, noch nicht unterstützt, kann das Senden großer Datenobjekte erhebliche Verzögerungen für den gesamten anderen SCTP-Verkehr verursachen. Siehe [Firefox Bug 1381145](https://bugzil.la/1381145) zur Verfolgung des Fortschritts bei der Implementierung und Bereitstellung der Unterstützung für Stream Schedulers in Firefox.

- Die Methode [`RTCDataChannel.send()`](/de/docs/Web/API/RTCDataChannel/send) kann jetzt eine `TypeError` Ausnahme auslösen, wenn die Größe der Nachricht, die Sie senden möchten, nicht mit dem empfangenden {{Glossary("user_agent", "User-Agent")}} kompatibel ist (dies wird als Teil von [Firefox Bug 979417](https://bugzil.la/979417) implementiert).
- Die [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API) wurde aktualisiert, sodass [`error`](/de/docs/Web/API/MediaRecorder/error_event) Ereignisse, die zur Meldung von Problemen gesendet werden, die beim Aufnehmen auftreten, jetzt vom Typ [`MediaRecorderErrorEvent`](/de/docs/Web/API/MediaRecorderErrorEvent) sind, anstatt generische Ereignisse zu sein.
- Die Dokumentation zu [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) wurde aktualisiert, da die Eingaben des Konstruktors jetzt in einem Objekt anstatt als Liste von Parametern angegeben werden können ([Firefox Bug 1388591](https://bugzil.la/1388591)).
- Die Web Audio API unterstützt jetzt ordnungsgemäß Multi-Channel-Ausgabe ([Firefox Bug 1378070](https://bugzil.la/1378070)).

### Sicherheit

- `resource://` URLs lecken keine Informationen mehr ([Firefox Bug 863246](https://bugzil.la/863246))
- Daten-URLs werden jetzt als eindeutige opake Ursprünge behandelt, anstatt den Ursprung des für die Navigation verantwortlichen Einstellungsobjekts zu erben ([Firefox Bug 1324406](https://bugzil.la/1324406)).

### Plugins

_Keine Änderungen._

### Sonstiges

- Der [Headless-Modus von Firefox](https://web.archive.org/web/20210604151145/https://developer.mozilla.org/de/docs/Mozilla/Firefox/Headless_mode) enthält jetzt ein `-screenshot` Flag, das es Ihnen ermöglicht, Screenshots von Webseiten direkt über die Kommandozeile zu machen ([Firefox Bug 1378010](https://bugzil.la/1378010)).

## Entfernungen von der Web-Plattform

### HTML

- `<link rel="preload">` (siehe [Preloading content with rel="preload"](/de/docs/Web/HTML/Reference/Attributes/rel/preload)) wurde in Firefox 57 deaktiviert, aufgrund verschiedener Web-Kompatibilitätsprobleme (z.B. [Firefox Bug 1405761](https://bugzil.la/1405761)). Eine verbesserte Version, die für nicht-cachebare Ressourcen funktioniert, wird voraussichtlich in Firefox 58 veröffentlicht.

### APIs

- Mozillas proprietäre [Social API](https://web.archive.org/web/20210509145412/https://developer.mozilla.org/de/docs/Archive/Social_API) wurde vollständig entfernt ([Firefox Bug 1388902](https://bugzil.la/1388902)).

### SVG

_Keine Änderungen._

## Änderungen für Add-on- und Mozilla-Entwickler

> [!NOTE]
> Ab Firefox 57 wurde jegliche Unterstützung für XPCOM-basierte Add-ons entfernt. Alle Erweiterungen müssen in die neuen [browser extensions](/de/docs/Mozilla/Add-ons/WebExtensions) (auch bekannt als WebExtensions) umgewandelt werden, ansonsten funktionieren sie nicht.

### WebExtensions

Die folgenden APIs wurden hinzugefügt oder erweitert:

- [`bookmarks`](/de/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks)
  - Unterstützung für Trennzeichen durch [`bookmarks.BookmarkTreeNodeType`](/de/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/BookmarkTreeNodeType)

- [`browser_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action)
  - `theme_icons` Eigenschaft für Licht-/Dunkelthemen-Icons

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
  - `windowId` Option für [`theme.update()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/theme/update)

- [`webRequest`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest)
  - [`filterResponseData()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/filterResponseData)
  - `proxyInfo` Eigenschaft in [`webRequest`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest) Ereignissen

- [`windows`](/de/docs/Mozilla/Add-ons/WebExtensions/API/windows)
  - `allowScriptsToClose` Option in [`windows.create()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/windows/create)
