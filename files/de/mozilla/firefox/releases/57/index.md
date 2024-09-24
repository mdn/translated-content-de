---
title: Firefox 57 (Quantum) für Entwickler
slug: Mozilla/Firefox/Releases/57
l10n:
  sourceCommit: d681d0262045649aefa02efb937ff5f22b6e3b2a
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 57 (auch bekannt als Firefox Quantum), die Entwickler betreffen werden. Firefox 57 wurde am 14. November 2017 veröffentlicht.

## Firefox 57 === Firefox Quantum

Firefox 57 hat den Freigabenamen **Quantum** erhalten, nach dem [Firefox Quantum](https://wiki.mozilla.org/Quantum) Ingenieurprojekt, das darauf abzielt, Firefox von Grund auf neu zu entwickeln und damit erhebliche Verbesserungen in Leistung, Stabilität und visueller Erscheinung mitzubringen. Dies ist die erste Version von Firefox, die einige dieser Verbesserungen enthält, daher wollten wir diesen Anlass markieren.

> [!NOTE]
> Um mehr über die Quantum-Funktionen in dieser Version zu erfahren, lesen Sie [Firefox Quantum Developer Edition: Der schnellste Firefox aller Zeiten mit Photon UI und besseren Werkzeugen](https://hacks.mozilla.org/2017/09/firefox-quantum-developer-edition-fastest-firefox-ever/) von Dan Callahan.

[Firefox's neue parallele CSS-Engine](https://hacks.mozilla.org/2017/08/inside-a-super-fast-css-engine-quantum-css-aka-stylo/) — auch bekannt als **Quantum CSS** oder **Stylo** — ist standardmäßig in Firefox 57 für Desktop aktiviert, mobile Versionen von Firefox folgen später. Entwickler sollten nichts Wesentliches bemerken, abgesehen von einer Vielzahl an Leistungsverbesserungen. Es gibt jedoch einige kleinere funktionale Unterschiede bei Stylo, die implementiert wurden, um nicht-standardmäßiges Gecko-Verhalten zu korrigieren, das beseitigt werden sollte. Wir werden solche Unterschiede auf Referenzseiten und in den Versionshinweisen entsprechend berichten (siehe [Quantum CSS notes](#quantum_css_notizen)).

## Änderungen für Webentwickler

### Entwicklerwerkzeuge

_Keine Änderungen._

### HTML

- Die [date](/de/docs/Web/HTML/Element/input/date) und [time](/de/docs/Web/HTML/Element/input/time) {{htmlelement("input")}} Typen sind jetzt in allen Builds aktiviert ([Firefox Bug 1399036](https://bugzil.la/1399036)).

### CSS

- Die Werte `minimal-ui` und `standalone` der [`display-mode`](/de/docs/Web/CSS/@media/display-mode) Media Query werden nun unterstützt ([Firefox Bug 1369815](https://bugzil.la/1369815)). Siehe auch das [Web App Manifest `display` Feld](/de/docs/Web/Manifest#display).
- Die Eigenschaften `grid-row-gap` und `grid-column-gap` werden nicht mehr durch das {{CSSxRef("grid")}} Kurzschreibweise zurückgesetzt ([Firefox Bug 1387410](https://bugzil.la/1387410)).
- Die Einstellung `layout.css.clip-path-shapes.enabled` wurde entfernt ([Firefox Bug 1399767](https://bugzil.la/1399767)). Diese Einstellung erlaubte das Deaktivieren der Unterstützung von {{CSSxRef("&lt;basic-shape&gt;")}} in {{CSSxRef("clip-path")}}. Diese Unterstützung wurde in Firefox 54 eingeführt und kann nicht mehr deaktiviert werden.

#### Quantum CSS Notizen

Folgende Fehler wurden in Quantum behoben:

- Radiale Gradientenwerte wie `radial-gradient(circle gold,red)` funktionieren im alten Gecko-Stilsystem, obwohl sie es nicht sollten, weil das Komma zwischen `circle` und `gold` fehlt ([Firefox Bug 1383323](https://bugzil.la/1383323)).
- Wenn Sie ein außerhalb des Bildschirms befindliches Element auf den Bildschirm animieren, aber eine Verzögerung angeben, wird Gecko auf einigen Plattformen nicht neu gezeichnet, z.B. Windows ([Firefox Bug 1383239](https://bugzil.la/1383239)).
- In Gecko können {{htmlelement("details")}}-Elemente nicht standardmäßig durch das `open` Attribut geöffnet werden, wenn sie eine {{CSSxRef("animation")}} haben, die auf ihnen aktiv ist ([Firefox Bug 1382124](https://bugzil.la/1382124)).
- In Gecko funktionieren {{CSSxRef("transition", "transitions")}} nicht, wenn von einem {{CSSxRef("text-shadow")}} mit Farbe zu einem `text-shadow` ohne Farbe gewechselt wird ([Firefox Bug 726550](https://bugzil.la/726550)).
- Das Abbrechen einer füllenden Animation (z.B. mit `animation-fill-mode: forwards` gesetzt) kann eine Transition auslösen, die auf demselben Element gesetzt ist, allerdings nur einmal ([siehe Firefox Bug 1192592](https://bugzil.la/1192592) und [diese Testfälle](https://bug1192592.bmoattachments.org/attachment.cgi?id=8843824) für weitere Informationen). Im Allgemeinen sollten deklarative Animationen keine Transitionen auslösen.
- Animationen, die em-Einheiten verwenden, werden nicht von Änderungen der {{CSSxRef("font-size")}} auf dem übergeordneten Element der Animationen betroffen, während sie es sollten ([Firefox Bug 1254424](https://bugzil.la/1254424)).
- Gecko geht auch anders mit der Vererbung von `font-size` um als Quantum CSS, was bedeutet, dass für einige Spracheinstellungen vererbte Schriftgrößen kleiner als erwartet ausfallen (siehe [Firefox Bug 1391341](https://bugzil.la/1391341)).
- Gecko verwendet denselben Mechanismus beim Parsen eines url-tokens, wenn `domain()` oder `url-prefix()` URL-Matching-Funktionen für eine {{CSSxRef("@document", "@-moz-document")}} Regel geparst werden. Quantum CSS verwendet nicht denselben Mechanismus und betrachtet Token nicht als ungültig, wenn sie Klammern oder Anführungszeichen enthalten ([Firefox Bug 1362333](https://bugzil.la/1362333)).
- In Gecko, wenn Sie eine Systemschriftart als den Wert eines 2D-Kontext-Schriftart-Parameters auf einem Canvas setzen (z.B. `menu`), schlägt das Zurückholen des Schriftwerts fehl, da nichts zurückgegeben wird. Dies wurde in Quantum behoben. ([Firefox Bug 1374885](https://bugzil.la/1374885)).
- In Gecko, wenn Sie einen losgelösten Teilbaum erstellen (z.B. ein {{htmlelement("div")}}, das mit {{DOMxRef("Document.createElement","createElement()")}} erstellt wurde und noch nicht in das DOM eingefügt ist), wird das Wurzelelement des Teilbaumes als Block-Level-Element gesetzt. In Quantum CSS wird dies gemäß Spezifikation als inline gesetzt ([Firefox Bug 1374994](https://bugzil.la/1374994)).
- In Gecko werden {{CSSxRef("calc", "calc()")}} Ausdrücke abgelehnt — was den Wert ungültig macht —, wenn sie als Radiuskomponente einer {{CSSxRef("gradient/radial-gradient")}} Funktion verwendet werden ([Firefox Bug 1376019](https://bugzil.la/1376019)).
- In Gecko wird `calc(1*2*3)` nicht erfolgreich geparst; Quantum CSS behebt dies ([Firefox Bug 1379467](https://bugzil.la/1379467)).
- In Quantum CSS wird [`calc()` überall unterstützt, wo die Spezifikation es erklärt](https://drafts.csswg.org/css-values-3/#calc-notation) ([Firefox Bug 1350857](https://bugzil.la/1350857)). In Gecko nicht.
- Gecko hat einen Fehler, bei dem {{CSSxRef("::before")}} und {{CSSxRef("::after")}} Pseudo-Elemente noch generiert werden, auch wenn der {{CSSxRef("content")}} Eigenschaftswert auf `normal` oder `none` gesetzt ist. Laut Spezifikation sollten sie es nicht sein ([Firefox Bug 1387931](https://bugzil.la/1387931)).
- Ein weiterer Gecko-Fehler bedeutet, dass die {{CSSxRef("background-position")}} Eigenschaft nicht zwischen zwei Werten übergehen kann, die unterschiedliche Anzahlen von {{CSSxRef("&lt;position&gt;")}} Werten enthalten, z.B. `background-position: 10px 10px;` und `background-position: 20px 20px, 30px 30px;` ([siehe Firefox Bug 1390446](https://bugzil.la/1390446)).

### SVG

_Keine Änderungen._

### JavaScript

- Die nicht standardisierte {{JSxRef("Statements/for_each...in", "for each...in")}} Schleife, die ursprünglich Teil von EcmaScript für XML (E4X) war, wurde entfernt. Bitte verwenden Sie stattdessen {{JSxRef("Statements/for...of", "for...of")}} und sehen Sie [Warnung: JavaScript 1.6's for-each-in Schleifen sind veraltet](/de/docs/Web/JavaScript/Reference/Errors/For-each-in_loops_are_deprecated) für Hilfe bei der Migration. ([Firefox Bug 1083470](https://bugzil.la/1083470)).
- Die Methoden {{JSxRef("Object.prototype.watch()")}} und {{JSxRef("Object.unwatch", "unwatch()")}} sind veraltet, geben jetzt eine Warnung aus, wenn sie verwendet werden, und werden bald entfernt ([Firefox Bug 934669](https://bugzil.la/934669)).
- Die nicht standardisierten {{JSxRef("Iterator")}} und {{JSxRef("StopIteration")}} Objekte sowie das Legacy-Iterationsprotokoll wurden entfernt ([Firefox Bug 1098412](https://bugzil.la/1098412)).
- Async-Generator ist jetzt aktiviert ([Firefox Bug 1352312](https://bugzil.la/1352312)).
- Die Syntax for await (... of ...) ist jetzt aktiviert ([Firefox Bug 1352312](https://bugzil.la/1352312)).

### APIs

#### Neue APIs

- Die {{DOMxRef("PerformanceObserver")}} API ist jetzt standardmäßig aktiviert ([Firefox Bug 1386021](https://bugzil.la/1386021)).
- Die Schnittstellen {{DOMxRef("AbortController")}} und {{DOMxRef("AbortSignal")}} (bekannt als die Abort API) wurden hinzugefügt, um DOM-Anfragen (wie [fetch requests](/de/docs/Web/API/Window/fetch)) abzubrechen, wenn gewünscht ([Firefox Bug 1378342](https://bugzil.la/1378342)).
- \[2] Die [Storage API](/de/docs/Web/API/Storage_API) ist implementiert und standardmäßig aktiviert ([Firefox Bug 1399038](https://bugzil.la/1399038)).

#### DOM

- Die Eigenschaft {{DOMxRef("Selection.type")}} der [Selection API](/de/docs/Web/API/Selection) ist jetzt implementiert ([Firefox Bug 1359157](https://bugzil.la/1359157)).
- {{DOMxRef("Document.createEvent", "Document.createEvent('FocusEvent')")}} wird jetzt unterstützt ([Firefox Bug 1388069](https://bugzil.la/1388069)).
- Die Eigenschaft `files` der Schnittstelle {{DOMxRef("HTMLInputElement")}} ist jetzt setzbar ([Firefox Bug 1384030](https://bugzil.la/1384030)).
- Die Methode `HTMLDocument.getSelection()` wurde in die {{DOMxRef("Document/getSelection","Document")}} Schnittstelle verschoben, damit sie auch in XML-Dokumenten verfügbar ist ([Firefox Bug 718711](https://bugzil.la/718711)).
- Das `messageerror` Ereignis ist jetzt implementiert und kann durch Ereignishandler, die auf Nachrichtenziele implementiert sind, ausgelöst werden — siehe das `messageerror` Ereignis von {{DOMxRef("MessagePort.messageerror_event", "MessagePort")}}, {{DOMxRef("DedicatedWorkerGlobalScope.messageerror_event", "DedicatedWorkerGlobalScope")}}, {{DOMxRef("Worker.messageerror_event", "Worker")}}, {{DOMxRef("BroadcastChannel.messageerror_event", "BroadcastChannel")}}, und {{DOMxRef("Window.messageerror_event", "Window")}} ([Firefox Bug 1359017](https://bugzil.la/1359017)).
- Wenn {{DOMxRef("Headers")}} Werte iteriert werden, werden sie automatisch lexikographisch sortiert, und Werte von doppelten Headernamen werden kombiniert ([Firefox Bug 1396848](https://bugzil.la/1396848)).

#### DOM-Ereignisse

_Keine Änderungen._

#### Medien und WebRTC

- Die Unterstützung für Nachrichten beliebiger Größe (bis zu 1GiB, obwohl 256kiB interoperabler ist) wird jetzt auf {{DOMxRef("RTCDataChannel")}} durch die Verwendung des End-of-Record (EOR) Flags auf SCTP-Nachrichten unterstützt. Siehe [Verständnis von Nachrichtengrößenbeschränkungen](/de/docs/Web/API/WebRTC_API/Using_data_channels#understanding_message_size_limits) für weitere Informationen ([Firefox Bug 979417](https://bugzil.la/979417)).

  > [!NOTE]
  > Da Firefox das SCTP ndata Protokoll, das die Möglichkeit bietet, SCTP-Nachrichten von mehreren Quellen zu verschachteln, noch nicht unterstützt, kann das Senden großer Datenobjekte erhebliche Verzögerungen im gesamten anderen SCTP-Verkehr verursachen. Siehe [Firefox Bug 1381145](https://bugzil.la/1381145), um den Fortschritt bei der Implementierung und Bereitstellung der ndata-Unterstützung in Firefox zu verfolgen.

- Die Methode {{DOMxRef("RTCDataChannel.send()")}} kann jetzt eine `TypeError` Ausnahme auslösen, wenn die Größe der Nachricht, die Sie zu senden versuchen, nicht mit dem empfangenden {{Glossary("user agent")}} kompatibel ist (dies ist Teil von [Firefox Bug 979417](https://bugzil.la/979417) implementiert).
- Die [MediaStream Aufnahme-API](/de/docs/Web/API/MediaStream_Recording_API) wurde aktualisiert, sodass {{domxref("MediaRecorder/error_event", "error")}} Ereignisse, die Berichte über Probleme senden, die während der Aufnahme auftreten, jetzt vom Typ {{DOMxRef("MediaRecorderErrorEvent")}} sind, anstatt generische Ereignisse zu sein.
- Die Dokumentation zu {{DOMxRef("OfflineAudioContext")}} wurde aktualisiert, da die Eingaben des Konstruktors jetzt in einem Objekt angegeben werden können, anstelle einer Liste von Parametern ([Firefox Bug 1388591](https://bugzil.la/1388591)).
- Die Web Audio API unterstützt jetzt richtig Mehrkanal-Ausgabe ([Firefox Bug 1378070](https://bugzil.la/1378070)).

### Sicherheit

- `resource://` URLs leaken keine Informationen mehr ([Firefox Bug 863246](https://bugzil.la/863246))
- Daten-URLs werden jetzt als einzigartige, undurchsichtige Ursprünge behandelt, anstatt den Ursprung des Einstellungsobjekts zu erben, das für die Navigation verantwortlich ist ([Firefox Bug 1324406](https://bugzil.la/1324406)).

### Plugins

_Keine Änderungen._

### Sonstiges

- Firefox [headless Modus](/de/docs/Mozilla/Firefox/Headless_mode) enthält nun ein `-screenshot` Flag, das es Ihnen ermöglicht, direkt über die Kommandozeile Screenshots von Webseiten zu machen ([Firefox Bug 1378010](https://bugzil.la/1378010)).

## Entfernt aus der Webplattform

### HTML

- `<link rel="preload">` (siehe [Preloading content with rel="preload"](/de/docs/Web/HTML/Attributes/rel/preload)) wurde in Firefox 57 aufgrund verschiedener Webkompatibilitätsprobleme deaktiviert (z.B. [Firefox Bug 1405761](https://bugzil.la/1405761)). Eine verbesserte Version, die für nicht-cachbare Ressourcen funktioniert, wird voraussichtlich in Firefox 58 implementiert.

### APIs

- Mozillas proprietäre [Social API](/de/docs/Archive/Social_API) wurde vollständig entfernt ([Firefox Bug 1388902](https://bugzil.la/1388902)).

### SVG

_Keine Änderungen._

## Änderungen für Add-on- und Mozilla-Entwickler

> [!NOTE]
> Ab Firefox 57 wurde jegliche Unterstützung für XPCOM-basierte Add-ons entfernt. Alle Erweiterungen müssen in die neuen [Browsererweiterungen](/de/docs/Mozilla/Add-ons/WebExtensions) (auch bekannt als WebExtensions) umgewandelt werden, sonst funktionieren sie nicht.

### WebExtensions

Die folgenden APIs wurden hinzugefügt oder erweitert:

- [`bookmarks`](/de/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks)

  - Unterstützung für Trennzeichen durch [`bookmarks.BookmarkTreeNodeType`](/de/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks/BookmarkTreeNodeType)

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
