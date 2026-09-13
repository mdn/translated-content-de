---
title: Firefox 21 Versionshinweise für Entwickler
short-title: Firefox 21
slug: Mozilla/Firefox/Releases/21
l10n:
  sourceCommit: 56f3d7018159127dbe92842413fb45d0aa7e8193
---

Firefox 21 wurde am 14. Mai 2013 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Entwickler von Firefox, Gecko und Add-ons.

## Änderungen für Webentwickler

### HTML

- Das `scoped`-Attribut wurde dem {{HTMLElement("style")}}-Element hinzugefügt. Es ermöglicht Ihnen, Stile einzubinden, die vom Rest des Dokuments isoliert sind. Solche Stile können mit der in Firefox 20 eingeführten CSS-Pseudoklasse {{cssxref(":scope")}} ausgewählt werden. ([Firefox-Fehler 508725](https://bugzil.la/508725)).
- Das neue HTML-Element {{HTMLElement("main")}} wurde implementiert ([Firefox-Fehler 820508](https://bugzil.la/820508)).

### JavaScript

- ECMAScript for XML (E4X), eine alte JavaScript-Erweiterung, wurde entfernt. Es wurde nur in Gecko implementiert und fand nie signifikante Verbreitung ([Firefox-Fehler 788293](https://bugzil.la/788293)).
- [parseInt](/de/docs/Web/JavaScript/Reference/Global_Objects/parseInt) behandelt Zeichenfolgen mit führender "0" nicht mehr als oktal ([Firefox-Fehler 786135](https://bugzil.la/786135)).

### CSS

- Der `none`-Wert von {{cssxref("user-select", "-moz-user-select")}} hat nun das gleiche Verhalten wie der `-moz-none`-Wert, um Gecko an WebKit (Chrome, Safari), Presto (Opera) und Trident (Internet Explorer) anzugleichen ([Firefox-Fehler 816298](https://bugzil.la/816298)).
- Bei XHTML-Inhalten wurden die Trennungsregeln fälschlicherweise angewendet, wenn die Sprache nicht explizit deklariert war. Dies wurde durch ([Firefox-Fehler 702121](https://bugzil.la/702121)) behoben.
- Ein `auto`-Wert wurde zur CSS-Eigenschaft {{cssxref("-moz-orient")}} hinzugefügt. Der `auto`-Wert entspricht `horizontal`, wenn er auf {{HTMLElement("meter")}} und {{HTMLElement("progress")}} angewendet wird ([Firefox-Fehler 835883](https://bugzil.la/835883)).
- Die Medienabfrage `-moz-windows-glass` wurde auf Windows 7 und älteren Windows-Systemen hinzugefügt ([Firefox-Fehler 816803](https://bugzil.la/816803)).

### DOM

- Die Unterstützung für [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) (als `MozRTCPeerConnection`) ist jetzt standardmäßig aktiviert ([Firefox-Fehler 796463](https://bugzil.la/796463)). Sie kann bei Bedarf durch Setzen von `media.peerconnection.enabled` auf false wieder deaktiviert werden.
- Die `origin`-Eigenschaft wurde zu [`window.location`](/de/docs/Web/API/Window/location) hinzugefügt ([Firefox-Fehler 828261](https://bugzil.la/828261)).
- Die Methoden `valueAsDate` und `valueAsNumber` wurden für `<input type="time">` hinzugefügt ([Firefox-Fehler 781570](https://bugzil.la/781570)).
- Die Attribute `min` und `max` gelten jetzt auch für `<input type="time">` ([Firefox-Fehler 781572](https://bugzil.la/781572)).
- Einige neue keyCodes für die Lautstärkeregelung werden unterstützt ([Firefox-Fehler 674739](https://bugzil.la/674739)).
- Einige neue keyCodes für alte Tastaturlayouts wie AS/400 werden jetzt unter Windows und Linux unterstützt ([Firefox-Fehler 833719](https://bugzil.la/833719)).
- Verschiedene keyCode-Werte für OEM-spezifische Tasten unter Windows werden jetzt wieder unterstützt ([Firefox-Fehler 833719](https://bugzil.la/833719)).
- Die Funktion [`window.crypto.getRandomValues`](/de/docs/Web/API/Crypto/getRandomValues) wurde implementiert ([Firefox-Fehler 440046](https://bugzil.la/440046)).
- Die nicht standardisierten Methoden `NodeIterator.expandEntityReferences()` und `TreeWalker.expandEntityReferences()` wurden entfernt ([Firefox-Fehler 672190](https://bugzil.la/672190)).
- CSSOM: Die Methode `CSSKeyframesRule.insertRule()` wurde geändert zu [`CSSKeyframesRule.appendRule()`](/de/docs/Web/API/CSSKeyframesRule/appendRule) um eine Änderung der Spezifikation zu erfüllen ([Firefox-Fehler 841896](https://bugzil.la/841896)).
- CSSOM: Wenn der gegebene Parameter der Methode [`CSSStyleSheet.insertRule`](/de/docs/Web/API/CSSStyleSheet/insertRule) mehr als eine Regel enthält, wird jetzt ein [`DOMException`](/de/docs/Web/API/DOMException) mit `SYNTAX_ERR` geworfen ([Firefox-Fehler 765599](https://bugzil.la/765599)).
- Bis jetzt wurden die zuletzt angegebene Werte verwendet, wenn mit [`XMLHttpRequest.setRequestHeader`](/de/docs/Web/API/XMLHttpRequest/setRequestHeader) dieselben Header wiederholt gesetzt wurden. Dieses Verhalten wurde geändert, um mit der Spezifikation konform zu sein, sodass diese Werte korrekt kombiniert werden ([Firefox-Fehler 819051](https://bugzil.la/819051)).

### SVG

- Das Attribut [paint-order](/de/docs/Web/SVG/Reference/Attribute/paint-order) wurde implementiert ([Firefox-Fehler 828805](https://bugzil.la/828805)).
- Die `svg.smil.enabled`-Einstellung wurde entfernt. SMIL ist immer aktiviert. ([Firefox-Fehler 835030](https://bugzil.la/835030))

### Netzwerk

- Wir aktualisieren weiterhin unsere CSP-Implementierung, um der CSP 1.0-Spezifikation zu entsprechen, die den Status einer Kandidatenempfehlung erreicht hat:
  - Unterstützung für den spezifikationskonformen HTTP-Header `Content-Security-Policy` (zusätzlich zum experimentellen `X-Content-Security-Policy`) wurde hinzugefügt ([Firefox-Fehler 783049](https://bugzil.la/783049)).
    > [!NOTE]
    > Der Patch für diesen neuen Header landete in Firefox 21, er ist in den Builds deaktiviert ([Firefox-Fehler 842657](https://bugzil.la/842657)).

### Worker

- Die Funktionen [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) und [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) sind jetzt in der Menge der [Funktionen, die Arbeitern zur Verfügung stehen](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers), enthalten.

## Änderungen für Add-on- und Mozilla-Entwickler

- FUEL-Anwendungen können den Livemarks-Dienst nicht mehr verwenden ([Firefox-Fehler 834492](https://bugzil.la/834492)). Der Livemarks-Dienst ist veraltet und wird zugunsten der neuen asynchronen Schnittstelle eingestellt.
- `resource:///modules/` und `resource://gre/modules/` sind nicht mehr identisch ([Firefox-Fehler 755724](https://bugzil.la/755724)). Diese Änderung wurde aufgrund der Arbeit an der Metro-Version von Firefox vorgenommen. Wenn Sie Module mit `resource:///modules/` laden, sollten Sie prüfen, ob Sie jetzt `resource://gre/modules/` verwenden möchten. Beachten Sie, dass einige Module auch von Firefox zu Toolkit verschoben wurden ([Firefox-Fehler 840287](https://bugzil.la/840287) und [Firefox-Fehler 811548](https://bugzil.la/811548) verschoben `NewTabUtils.jsm` und die Thumbnail-Module entsprechend).
- Das Add-on-SDK ist jetzt in Firefox enthalten ([Firefox-Fehler 731779](https://bugzil.la/731779))
- Die Verlauf-API hat zahlreiche veraltete APIs entfernt:
  - Ersetzt durch `mozIAsyncFavicons`:
    - `nsIFaviconService::setFaviconUrlForPage`
    - `nsIFaviconService::setFaviconData`
    - `nsIFaviconService::getFaviconData`
    - `nsIFaviconService::getFaviconForPage`
    - `nsIFaviconService::setAndLoadFaviconForPage`
    - `nsIFaviconService::getFaviconImageForPage`
    - `nsIFaviconService::getFaviconDataAsDataURL`

  - Ersetzt durch `mozIAsyncLivemarks`:
    - `nsILivemarkService::*`
    - `PlacesUtils.itemIsLivemark`
    - `PlacesUtils.nodeIsLivemarkContainer`
    - `PlacesUtils.nodeIsLivemarkItem`

  - Nur drittes Argument entfernt:
    - `PlacesUIUtils.showBookmarkDialog`

  - Nicht mehr von Places implementiert, verwenden Sie `mozIAsyncHistory` stattdessen:
    - `nsIGlobalHistory2::addURI`
    - `nsIGlobalHistory2::isVisited`
    - `nsIGlobalHistory2::setPageTitle`

  - Nicht mehr benötigt, verwenden Sie `onDeleteURI` oder `onItemRemoved`:
    - `nsINavHistoryObserver::OnBeforeDeleteURI`
    - `nsINavBookmarkObserver::OnBeforeItemRemoved`

  - Nie richtig implementiert:
    - `nsINavHistoryFullVisitResultNode`

  - Veraltet, verwenden Sie `mozIAsyncHistory::updatePlaces` stattdessen:
    - `nsINavHistoryService::AddVisit`

- Hinzugefügt `nsIHttpChannel.redirectTo` um das Umleiten von HTTP-Kanälen ohne fragile Hacks zu ermöglichen.

## Siehe auch

- [Firefox 21 Versionshinweise](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/21.0/releasenotes/)
- [Add-on-Kompatibilität für Firefox 21](https://blog.mozilla.org/addons/2013/04/26/compatibility-for-firefox-21/)
