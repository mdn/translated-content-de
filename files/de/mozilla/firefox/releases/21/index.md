---
title: Firefox 21 für Entwickler
short-title: Firefox 21
slug: Mozilla/Firefox/Releases/21
l10n:
  sourceCommit: 64df508685abcbc047f6c1a973505921fad1484e
---

Firefox 21 wurde am 14. Mai 2013 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler, sondern auch für Firefox- und Gecko-Entwickler sowie für Add-on-Entwickler nützlich sind.

## Änderungen für Webentwickler

### HTML

- Das Attribut `scoped` wurde dem {{HTMLElement("style")}}-Element hinzugefügt. Es ermöglicht das Einfügen von Stilen, die vom Rest des Dokuments isoliert sind. Solche Stile können mit dem {{cssxref(":scope")}} CSS-Pseudoelement ausgewählt werden, das in Firefox 20 eingeführt wurde. ([Firefox Bug 508725](https://bugzil.la/508725)).
- Das neue HTML {{HTMLElement("main")}}-Element wurde implementiert ([Firefox Bug 820508](https://bugzil.la/820508)).

### JavaScript

- ECMAScript for XML (E4X), eine alte JavaScript-Erweiterung, wurde entfernt. Es wurde nur in Gecko implementiert und hat nie signifikante Verbreitung gefunden ([Firefox Bug 788293](https://bugzil.la/788293)).
- [parseInt](/de/docs/Web/JavaScript/Reference/Global_Objects/parseInt) behandelt Zeichenfolgen mit führender "0" nicht mehr als oktal ([Firefox Bug 786135](https://bugzil.la/786135)).

### CSS

- Der Wert `none` von {{cssxref("user-select", "-moz-user-select")}} hat jetzt dasselbe Verhalten wie der Wert `-moz-none`, was Gecko mit WebKit (Chrome, Safari), Presto (Opera) und Trident (Internet Explorer) angleicht ([Firefox Bug 816298](https://bugzil.la/816298)).
- Bei XHTML-Inhalten wurden die Trennungsregeln des `auto`-Werts von {{cssxref("hyphens", "-moz-hyphens")}} fälschlicherweise angewendet, wenn die Sprache nicht explizit deklariert war. Dies wurde behoben durch ([Firefox Bug 702121](https://bugzil.la/702121)).
- Ein `auto`-Wert wurde zur CSS-Eigenschaft {{cssxref("-moz-orient")}} hinzugefügt. Der `auto`-Wert entspricht `horizontal`, wenn er auf {{HTMLElement("meter")}} und {{HTMLElement("progress")}} angewendet wird ([Firefox Bug 835883](https://bugzil.la/835883)).
- Die Media Query `-moz-windows-glass` wurde unter Windows 7 und früheren Windows-Systemen hinzugefügt ([Firefox Bug 816803](https://bugzil.la/816803)).

### DOM

- Unterstützung für [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) (als `MozRTCPeerConnection`) ist jetzt standardmäßig aktiviert ([Firefox Bug 796463](https://bugzil.la/796463)). Es kann bei Bedarf wieder deaktiviert werden, indem `media.peerconnection.enabled` auf false gesetzt wird.
- Die `origin`-Eigenschaft wurde zu [`window.location`](/de/docs/Web/API/Window/location) hinzugefügt ([Firefox Bug 828261](https://bugzil.la/828261)).
- Die Methoden `valueAsDate` und `valueAsNumber` wurden für `<input type="time">` hinzugefügt ([Firefox Bug 781570](https://bugzil.la/781570)).
- Die Attribute `min` und `max` gelten jetzt auch für `<input type="time">` ([Firefox Bug 781572](https://bugzil.la/781572)).
- Einige neue `keyCodes` für die Lautstärkeregelung werden unterstützt ([Firefox Bug 674739](https://bugzil.la/674739)).
- Einige neue `keyCodes` für alte Tastaturlayouts wie AS/400 werden jetzt unter Windows und Linux unterstützt ([Firefox Bug 833719](https://bugzil.la/833719)).
- Verschiedene `keyCode`-Werte für OEM-spezifische Tasten unter Windows werden jetzt wieder unterstützt ([Firefox Bug 833719](https://bugzil.la/833719)).
- Die Funktion [`window.crypto.getRandomValues`](/de/docs/Web/API/Crypto/getRandomValues) wurde implementiert ([Firefox Bug 440046](https://bugzil.la/440046)).
- Die nicht standardmäßigen Methoden `NodeIterator.expandEntityReferences()` und `TreeWalker.expandEntityReferences()` wurden entfernt ([Firefox Bug 672190](https://bugzil.la/672190)).
- CSSOM: Die Methode `CSSKeyframesRule.insertRule()` wurde durch [`CSSKeyframesRule.appendRule()`](/de/docs/Web/API/CSSKeyframesRule/appendRule) ersetzt, um einer Spezifikationsänderung zu entsprechen ([Firefox Bug 841896](https://bugzil.la/841896)).
- CSSOM Wenn der gegebene Parameter von [`CSSStyleSheet.insertRule`](/de/docs/Web/API/CSSStyleSheet/insertRule) mehr als eine Regel enthält, wird jetzt ein [`DOMException`](/de/docs/Web/API/DOMException) mit einem `SYNTAX_ERR` ausgegeben ([Firefox Bug 765599](https://bugzil.la/765599)).
- Bislang wurden, wenn dieselben Header wiederholt mit [`XMLHttpRequest.setRequestHeader`](/de/docs/Web/API/XMLHttpRequest/setRequestHeader) gesetzt wurden, immer die zuletzt angegebenen Werte verwendet. Dieses Verhalten wurde geändert, um der Spezifikation zu entsprechen, sodass diese Werte jetzt korrekt kombiniert werden ([Firefox Bug 819051](https://bugzil.la/819051)).

### SVG

- Das [paint-order](/de/docs/Web/SVG/Reference/Attribute/paint-order) Attribut wurde implementiert ([Firefox Bug 828805](https://bugzil.la/828805)).
- Die `svg.smil.enabled`-Einstellung wurde entfernt. SMIL ist immer aktiviert. ([Firefox Bug 835030](https://bugzil.la/835030))

### Netzwerk

- Wir aktualisieren weiterhin unsere CSP-Implementierung, um der CSP 1.0-Spezifikation zu entsprechen, die den Status "Candidate Recommendation" erreicht hat:
  - Unterstützung für den spezifikationskonformen `Content-Security-Policy` HTTP-Header (zusätzlich zum experimentellen `X-Content-Security-Policy`) wurde hinzugefügt ([Firefox Bug 783049](https://bugzil.la/783049)).
    > [!NOTE]
    > Der Patch für diesen neuen Header wurde in Firefox 21 implementiert, ist aber in den Builds deaktiviert ([Firefox Bug 842657](https://bugzil.la/842657)).

### Arbeiter

- Die Funktionen [`URL.createObjectURL()`](/de/docs/Web/API/URL/createObjectURL_static) und [`URL.revokeObjectURL()`](/de/docs/Web/API/URL/revokeObjectURL_static) sind jetzt Teil der [Funktionen, die Arbeitern zur Verfügung stehen](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers).

## Änderungen für Add-on- und Mozilla-Entwickler

- FUEL-Anwendungen können den Livemarks-Dienst nicht mehr verwenden ([Firefox Bug 834492](https://bugzil.la/834492)). Der Livemarks-Dienst wird zugunsten der neuen asynchronen Schnittstelle eingestellt und ausgemustert.
- `resource:///modules/` und `resource://gre/modules/` sind nicht mehr identisch ([Firefox Bug 755724](https://bugzil.la/755724)). Diese Änderung wurde aufgrund der Arbeiten an der Metro-Version von Firefox vorgenommen. Wenn Sie Module mit `resource:///modules/` laden, sollten Sie prüfen, ob Sie stattdessen `resource://gre/modules/` verwenden möchten. Beachten Sie, dass einige Module auch von Firefox zu Toolkit verschoben wurden ([Firefox Bug 840287](https://bugzil.la/840287) und [Firefox Bug 811548](https://bugzil.la/811548) haben `NewTabUtils.jsm` und die Thumbnail-Module verschoben).
- Das Add-on SDK ist jetzt in Firefox enthalten ([Firefox Bug 731779](https://bugzil.la/731779))
- Die History-API hat zahlreiche veraltete API entfernt:
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

  - Nur das dritte Argument entfernt:
    - `PlacesUIUtils.showBookmarkDialog`

  - Nicht mehr durch Places implementiert, verwenden Sie `mozIAsyncHistory` stattdessen:
    - `nsIGlobalHistory2::addURI`
    - `nsIGlobalHistory2::isVisited`
    - `nsIGlobalHistory2::setPageTitle`

  - Nicht mehr benötigt, verwenden Sie `onDeleteURI` oder `onItemRemoved`:
    - `nsINavHistoryObserver::OnBeforeDeleteURI`
    - `nsINavBookmarkObserver::OnBeforeItemRemoved`

  - Nie richtig implementiert:
    - `nsINavHistoryFullVisitResultNode`

  - Veraltet, verwenden Sie `mozIAsyncHistory::updatePlaces`:
    - `nsINavHistoryService::AddVisit`

- `nsIHttpChannel.redirectTo` wurde hinzugefügt, um HTTP-Kanäle ohne fragile Hacks umzuleiten.

## Siehe auch

- [Firefox 21 Versionshinweise](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/21.0/releasenotes/)
- [Add-on-Kompatibilität für Firefox 21](https://blog.mozilla.org/addons/2013/04/26/compatibility-for-firefox-21/)
