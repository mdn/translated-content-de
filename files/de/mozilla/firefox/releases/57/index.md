---
title: Firefox 57 (Quantum) für Entwickler
slug: Mozilla/Firefox/Releases/57
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 57 (auch bekannt als Firefox Quantum), die Entwickler betreffen werden. Firefox 57 wurde am 14. November 2017 veröffentlicht.

## Firefox 57 === Firefox Quantum

Firefox 57 hat den Veröffentlichungsnamen **Quantum** erhalten, nach dem [Firefox Quantum](https://wiki.mozilla.org/Quantum) Ingenieurprojekt, das zum Ziel hatte, Firefox von Grund auf neu zu gestalten und dabei wesentliche Leistungs-, Stabilitäts- und visuelle Verbesserungen zu bringen. Dies ist die erste Version von Firefox, die einige dieser Verbesserungen enthält, weshalb wir den Anlass besonders würdigen wollten.

> [!NOTE]
> Um mehr über die Quantum-Funktionen in dieser Version zu erfahren, lesen Sie [Firefox Quantum Developer Edition: der schnellste Firefox aller Zeiten mit Photon UI und besserem Werkzeug](https://hacks.mozilla.org/2017/09/firefox-quantum-developer-edition-fastest-firefox-ever/) von Dan Callahan.

[Firefox's neuer paralleler CSS-Engine](https://hacks.mozilla.org/2017/08/inside-a-super-fast-css-engine-quantum-css-aka-stylo/) — auch bekannt als **Quantum CSS** oder **Stylo** — ist in Firefox 57 für Desktop standardmäßig aktiviert, mobile Versionen von Firefox folgen später. Entwickler sollten keine wesentlichen Unterschiede bemerken, abgesehen von einer Vielzahl an Leistungsverbesserungen. Es gibt jedoch einige kleinere funktionale Unterschiede in Stylo, die zur Behebung von nicht standardmäßigen Gecko-Verhaltensweisen implementiert wurden, die beseitigt werden sollten. Wir werden über solche Unterschiede in Referenzseiten und in den Versionshinweisen berichten, soweit erforderlich (siehe [Quantum CSS-Anmerkungen](#quantum_css-anmerkungen)).

## Änderungen für Webentwickler

### Entwickler-Tools

_Keine Änderungen._

### HTML

- Die [date](/de/docs/Web/HTML/Reference/Elements/input/date) und [time](/de/docs/Web/HTML/Reference/Elements/input/time) {{htmlelement("input")}}-Typen sind jetzt in allen Builds aktiviert ([Firefox Fehler 1399036](https://bugzil.la/1399036)).

### CSS

- Die Werte `minimal-ui` und `standalone` der [`display-mode`](/de/docs/Web/CSS/@media/display-mode) Media Query werden jetzt unterstützt ([Firefox Fehler 1369815](https://bugzil.la/1369815)). Siehe auch das `display`-Feld des [Web App Manifests](/de/docs/Web/Progressive_web_apps/Manifest#display).
- Die Eigenschaften `grid-row-gap` und `grid-column-gap` werden nicht mehr durch die {{CSSxRef("grid")}}-Kurzschrift zurückgesetzt ([Firefox Fehler 1387410](https://bugzil.la/1387410)).
- Die Einstellung `layout.css.clip-path-shapes.enabled` wurde entfernt ([Firefox Fehler 1399767](https://bugzil.la/1399767)). Diese Einstellung erlaubte das Deaktivieren der {{CSSxRef("&lt;basic-shape&gt;")}}-Unterstützung in {{CSSxRef("clip-path")}}. Diese Unterstützung wurde in Firefox 54 eingeführt und kann nicht mehr deaktiviert werden.

#### Quantum CSS-Anmerkungen

Folgende Fehler wurden in Quantum behoben:

- Radial-Gradient-Werte wie `radial-gradient(circle gold,red)` funktionieren im alten Gecko-Stilsystem, obwohl sie es nicht sollten wegen des fehlenden Kommas zwischen `circle` und `gold` ([Firefox Fehler 1383323](https://bugzil.la/1383323)).
- Wenn Sie ein Offscreen-Element auf den Bildschirm animieren, aber eine Verzögerung angeben, malt Gecko auf einigen Plattformen nicht neu, z.B. Windows ([Firefox Fehler 1383239](https://bugzil.la/1383239)).
- In Gecko können {{htmlelement("details")}}-Elemente nicht standardmäßig mit dem `open`-Attribut geöffnet werden, wenn auf ihnen eine {{CSSxRef("animation")}} aktiv ist ([Firefox Fehler 1382124](https://bugzil.la/1382124)).
- In Gecko funktionieren {{CSSxRef("transition", "transitions")}} nicht, wenn sie von einem {{CSSxRef("text-shadow")}} mit einer bestimmten Farbe zu einem `text-shadow` ohne eine bestimmte Farbe wechseln ([Firefox Fehler 726550](https://bugzil.la/726550)).
- In Gecko kann das Abbrechen einer Füll-Animation (z.B. mit `animation-fill-mode: forwards` gesetzt) einen Übergang auf demselben Element auslösen, wenn auch nur einmal (siehe [Firefox Fehler 1192592](https://bugzil.la/1192592) und [diese Testfälle](https://bug1192592.bmoattachments.org/attachment.cgi?id=8843824) für weitere Informationen). Im Allgemeinen sollten deklarative Animationen keine Übergänge auslösen.
- Animationen mit Em-Einheiten werden von Änderungen der {{CSSxRef("font-size")}} auf dem übergeordneten Element des animierten Elements in Gecko nicht beeinflusst, obwohl sie es sollten ([Firefox Fehler 1254424](https://bugzil.la/1254424)).
- Gecko behandelt auch die `font-size`-Vererbung anders als Quantum CSS, was bedeutet, dass für einige Spracheinstellungen vererbte Schriftgrößen kleiner ausfallen als erwartet (siehe [Firefox Fehler 1391341](https://bugzil.la/1391341)).
- Gecko verwendet denselben Mechanismus wie beim Parsen eines url-Tokens, wenn es darum geht, die URL-Matching-Funktionen `domain()` oder `url-prefix()` für eine {{CSSxRef("@document", "@-moz-document")}}-Regel zu parsen. Quantum CSS verwendet nicht denselben Mechanismus und betrachtet Tokens nicht als ungültig, wenn Klammern oder Anführungszeichen enthalten sind ([Firefox Fehler 1362333](https://bugzil.la/1362333)).
- In Gecko, wenn Sie eine Systemschriftart als Wert eines Canvas-2D-Kontextes [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font) setzen (z.B. `menu`), schlägt das Abrufen des Schriftartwertes fehl, um die erwartete Schriftart zurückzugeben (es wird nichts zurückgegeben). Dies wurde in Quantum behoben ([Firefox Fehler 1374885](https://bugzil.la/1374885)).
- In Gecko wird bei der Erstellung eines abgetrennten Unterbaums (z.B. ein {{htmlelement("div")}}, das mit [`createElement()`](/de/docs/Web/API/Document/createElement) erstellt wurde und noch nicht in das DOM eingefügt ist) das Wurzelelement des Unterbaums als Block-Element gesetzt. In Quantum CSS wird dies nach Spezifikation als Inline-Element gesetzt ([Firefox Fehler 1374994](https://bugzil.la/1374994)).
- In Gecko werden {{CSSxRef("calc", "calc()")}}-Ausdrücke abgelehnt — wodurch der Wert ungültig wird — wenn sie als Radiuskomponente einer {{CSSxRef("gradient/radial-gradient")}}-Funktion verwendet werden ([Firefox Fehler 1376019](https://bugzil.la/1376019)).
- In Gecko wird `calc(1*2*3)` nicht erfolgreich geparst; Quantum CSS behebt dies ([Firefox Fehler 1379467](https://bugzil.la/1379467)).
- In Quantum CSS wird [`calc()` überall unterstützt, wo die Spezifikation es erklärt](https://drafts.csswg.org/css-values-3/#calc-notation) ([Firefox Fehler 1350857](https://bugzil.la/1350857)). In Gecko nicht.
- Gecko hat einen Fehler, bei dem die Pseudo-Elemente {{CSSxRef("::before")}} und {{CSSxRef("::after")}} immer noch generiert werden, selbst wenn der Wert der {{CSSxRef("content")}}-Eigenschaft auf `normal` oder `none` gesetzt ist. Laut Spezifikation sollten sie das nicht ([Firefox Fehler 1387931](https://bugzil.la/1387931)).
- Ein weiterer Gecko-Fehler bedeutet, dass die {{CSSxRef("background-position")}}-Eigenschaft nicht zwischen zwei Werten mit unterschiedlichen Zahlen von {{CSSxRef("&lt;position&gt;")}}-Werten übergangen werden kann, zum Beispiel `background-position: 10px 10px;` und `background-position: 20px 20px, 30px 30px;` (siehe [Firefox Fehler 1390446](https://bugzil.la/1390446)).

### SVG

_Keine Änderungen._

### JavaScript

- Die nicht standardisierte [`for each...in`](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#statements_2)-Schleife, ursprünglich Teil von ECMAScript für XML (E4X), wurde entfernt. Bitte nutzen Sie stattdessen {{JSxRef("Statements/for...of", "for...of")}}. ([Firefox Fehler 1083470](https://bugzil.la/1083470)).
- Die Methoden [`Object.prototype.watch()` und `Object.prototype.unwatch()`](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#object_2) sind veraltet, werden jetzt bei Verwendung eine Warnung auslösen und bald entfernt werden ([Firefox Fehler 934669](https://bugzil.la/934669)).
- Die nicht standardisierten `Iterator` und `StopIteration` Objekte sowie das [veraltete Iterationsprotokoll](/de/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#legacy_generator_and_iterator) wurden entfernt ([Firefox Fehler 1098412](https://bugzil.la/1098412)).
- Der asynchrone Generator ist jetzt aktiviert ([Firefox Fehler 1352312](https://bugzil.la/1352312)).
- Das "for await (... of ...)"-Syntax ist jetzt aktiviert ([Firefox Fehler 1352312](https://bugzil.la/1352312)).

### APIs

#### Neue APIs

- Die [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) API ist jetzt standardmäßig aktiviert ([Firefox Fehler 1386021](https://bugzil.la/1386021)).
- Die [`AbortController`](/de/docs/Web/API/AbortController) und [`AbortSignal`](/de/docs/Web/API/AbortSignal) Schnittstellen (bekannt als Abort API) wurden hinzugefügt, was das Abbrechen von DOM-Anfragen (wie z.B. [Fetch-Anfragen](/de/docs/Web/API/Window/fetch)) ermöglicht, wenn gewünscht ([Firefox Fehler 1378342](https://bugzil.la/1378342)).
- \[2] Die [Storage API](/de/docs/Web/API/Storage_API) ist implementiert und standardmäßig aktiviert ([Firefox Fehler 1399038](https://bugzil.la/1399038)).

#### DOM

- Die [`Selection.type`](/de/docs/Web/API/Selection/type) Eigenschaft der [Selection API](/de/docs/Web/API/Selection) ist jetzt implementiert ([Firefox Fehler 1359157](https://bugzil.la/1359157)).
- [`Document.createEvent('FocusEvent')`](/de/docs/Web/API/Document/createEvent) wird jetzt unterstützt ([Firefox Fehler 1388069](https://bugzil.la/1388069)).
- Die `files`-Eigenschaft der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle ist jetzt setzbar ([Firefox Fehler 1384030](https://bugzil.la/1384030)).
- Die Methode `HTMLDocument.getSelection()` wurde zur [`Document`](/de/docs/Web/API/Document/getSelection)-Schnittstelle verschoben, so dass sie für XML-Dokumente verfügbar ist ([Firefox Fehler 718711](https://bugzil.la/718711)).
- Das `messageerror`-Ereignis ist jetzt implementiert, und es kann ein Code in Reaktion auf dessen Auslösung über Ereignishandler implementiert werden, die auf Nachrichtenzielen implementiert sind — siehe das `messageerror`-Ereignis von [`MessagePort`](/de/docs/Web/API/MessagePort/messageerror_event), [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope/messageerror_event), [`Worker`](/de/docs/Web/API/Worker/messageerror_event), [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel/messageerror_event), und [`Window`](/de/docs/Web/API/Window/messageerror_event) ([Firefox Fehler 1359017](https://bugzil.la/1359017)).
- Wenn [`Headers`](/de/docs/Web/API/Headers)-Werte durchlaufen werden, werden sie automatisch alphabetisch sortiert, und Werte von doppelten Headernamen werden kombiniert ([Firefox Fehler 1396848](https://bugzil.la/1396848)).

#### DOM-Ereignisse

_Keine Änderungen._

#### Medien und WebRTC

- Unterstützung für Nachrichten beliebiger Größe (bis zu 1 GiB, obwohl 256 KiB interoperabler ist) wird jetzt auf [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) durch Verwendung des End-of-Record (EOR)-Flags bei SCTP-Nachrichten unterstützt. Sehen Sie [Verständnis der Nachrichtenbegrenzung](/de/docs/Web/API/WebRTC_API/Using_data_channels#understanding_message_size_limits) für mehr Informationen ([Firefox Fehler 979417](https://bugzil.la/979417)).

  > [!NOTE]
  > Da Firefox das SCTP Stream Schedulers und User Message Interleaving Protokoll, das die Fähigkeit bietet, SCTP-Nachrichten von mehreren Quellen zu vermischen, noch nicht unterstützt, kann das Senden großer Datenobjekte erhebliche Verzögerungen bei anderen SCTP-Daten verursachen. Sehen Sie [Firefox Fehler 1381145](https://bugzil.la/1381145), um den Fortschritt bei der Implementierung und Bereitstellung von Stream Scheduler-Unterstützung in Firefox zu verfolgen.

- Die Methode [`RTCDataChannel.send()`](/de/docs/Web/API/RTCDataChannel/send) kann jetzt eine `TypeError`-Ausnahme auslösen, wenn die Größe der Nachricht, die Sie zu senden versuchen, nicht mit dem empfangenden {{Glossary("user_agent", "User-Agent")}} kompatibel ist (dies ist als Teil von [Firefox Fehler 979417](https://bugzil.la/979417) implementiert).
- Die [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API) wurde aktualisiert, sodass [`error`](/de/docs/Web/API/MediaRecorder/error_event)-Ereignisse, die Probleme beim Aufnehmen melden, jetzt vom Typ [`MediaRecorderErrorEvent`](/de/docs/Web/API/MediaRecorderErrorEvent) sind, anstatt generische Ereignisse zu sein.
- Die Dokumentation rund um [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext) wurde aktualisiert, da die Eingaben des Konstruktors jetzt in einem Objekt angegeben werden können, statt als Liste von Parametern ([Firefox Fehler 1388591](https://bugzil.la/1388591)).
- Die Web Audio API unterstützt jetzt ordnungsgemäß Mehrkanal-Ausgänge ([Firefox Fehler 1378070](https://bugzil.la/1378070)).

### Sicherheit

- `resource://`-URLs leaken keine Informationen mehr ([Firefox Fehler 863246](https://bugzil.la/863246)).
- Daten-URLs werden jetzt als eindeutige undurchsichtige Ursprünge behandelt, anstatt den Ursprung des für die Navigation verantwortlichen Einstellungsobjekts zu erben ([Firefox Fehler 1324406](https://bugzil.la/1324406)).

### Plugins

_Keine Änderungen._

### Sonstiges

- Der [headless mode von Firefox](/de/docs/Mozilla/Firefox/Headless_mode) beinhaltet jetzt ein `-screenshot`-Flag, das es ermöglicht, Website-Screenshots direkt über die Befehlszeile zu machen ([Firefox Fehler 1378010](https://bugzil.la/1378010)).

## Entfernungen aus der Webplattform

### HTML

- `<link rel="preload">` (siehe [Inhalt mit rel="preload" vorladen](/de/docs/Web/HTML/Reference/Attributes/rel/preload)) wurde in Firefox 57 deaktiviert aufgrund verschiedener Web-Kompatibilitätsprobleme (z.B. [Firefox Fehler 1405761](https://bugzil.la/1405761)). Eine verbesserte Version, die für nicht-cachefähige Ressourcen funktioniert, wird voraussichtlich mit Firefox 58 eingeführt.

### APIs

- Mozillas proprietäre [Social API](/de/docs/Archive/Social_API) wurde vollständig entfernt ([Firefox Fehler 1388902](https://bugzil.la/1388902)).

### SVG

_Keine Änderungen._

## Änderungen für Add-on- und Mozilla-Entwickler

> [!NOTE]
> Ab Firefox 57 wurde die gesamte Unterstützung für XPCOM-basierte Add-ons entfernt. Alle Erweiterungen müssen in die neuen [Browser-Erweiterungen](/de/docs/Mozilla/Add-ons/WebExtensions) (auch bekannt als WebExtensions) konvertiert werden, oder sie werden nicht funktionieren.

### WebExtensions

Folgende APIs wurden hinzugefügt oder erweitert:

- [`bookmarks`](/de/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks)
  - Unterstützung für Separatoren über [`bookmarks.BookmarkTreeNodeType`](/de/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/BookmarkTreeNodeType)

- [`browser_action`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action)
  - `theme_icons` Eigenschaft für Light/Dark-Theme-Icons

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
  - `FindProxyForURL()` kann nun ein Objekt zurückgeben

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
  - `discarded`-Eigenschaft in [`tabs.Tab`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/Tab), [`tabs.onUpdated`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/onUpdated), und [`tabs.query()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query)
  - [`tabs.create()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/create) kann "view-source:"-URLs öffnen
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
  - `proxyInfo`-Eigenschaft in [`webRequest`](/de/docs/Mozilla/Add-ons/WebExtensions/API/webRequest)-Ereignissen

- [`windows`](/de/docs/Mozilla/Add-ons/WebExtensions/API/windows)
  - `allowScriptsToClose`-Option in [`windows.create()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/windows/create)

## Ältere Versionen

{{Firefox_for_developers}}
