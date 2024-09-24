---
title: Firefox 21 für Entwickler
slug: Mozilla/Firefox/Releases/21
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{FirefoxSidebar}}

Firefox 21 wurde am 14. Mai 2013 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler nützlich sind.

## Änderungen für Webentwickler

### HTML

- Das [`scoped`](/de/docs/Web/HTML/Element/style#scoped) Attribut wurde dem {{HTMLElement("style")}} Element hinzugefügt. Es ermöglicht das Einfügen von Stilen, die vom Rest des Dokuments isoliert sind. Solche Stile können mit dem in Firefox 20 eingeführten CSS-Pseudoelement {{cssxref(":scope")}} ausgewählt werden. ([Firefox Bug 508725](https://bugzil.la/508725)).
- Das neue HTML-Element {{HTMLElement("main")}} wurde implementiert ([Firefox Bug 820508](https://bugzil.la/820508)).

### JavaScript

- EcmaScript for XML (E4X), eine alte JavaScript-Erweiterung, wurde entfernt. Implementiert nur in Gecko, konnte es sich nie bedeutend durchsetzen ([Firefox Bug 788293](https://bugzil.la/788293)).
- [parseInt](/de/docs/Web/JavaScript/Reference/Global_Objects/parseInt) behandelt Zeichenfolgen mit führender "0" nicht mehr als oktal ([Firefox Bug 786135](https://bugzil.la/786135)).

### CSS

- Der `none` Wert von {{cssxref("user-select", "-moz-user-select")}} hat jetzt das gleiche Verhalten wie der `-moz-none` Wert und passt Gecko an WebKit (Chrome, Safari), Presto (Opera) und Trident (Internet Explorer) an ([Firefox Bug 816298](https://bugzil.la/816298)).
- Bei XHTML-Inhalten wandte der `auto` Wert von {{cssxref("hyphens", "-moz-hyphens")}} fälschlicherweise Silbentrennregeln an, wenn die Sprache nicht explizit angegeben war. Dies wurde behoben durch ([Firefox Bug 702121](https://bugzil.la/702121)).
- Ein `auto` Wert wurde zur CSS-Eigenschaft {{cssxref("-moz-orient")}} hinzugefügt. Der `auto` Wert ist äquivalent zu `horizontal`, wenn er auf {{HTMLElement("meter")}} und {{HTMLElement("progress")}} angewendet wird ([Firefox Bug 835883](https://bugzil.la/835883)).
- Die Media Query [`-moz-windows-glass`](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#-moz-windows-glass) wurde unter Windows 7 und früheren Windows-Systemen hinzugefügt ([Firefox Bug 816803](https://bugzil.la/816803)).

### DOM

- Die Unterstützung für {{domxref("RTCPeerConnection")}} (als `MozRTCPeerConnection`) ist jetzt standardmäßig aktiviert ([Firefox Bug 796463](https://bugzil.la/796463)). Falls notwendig, kann sie durch Setzen von `media.peerconnection.enabled` auf false wieder deaktiviert werden.
- Die `origin` Eigenschaft wurde zu {{domxref("window.location")}} hinzugefügt ([Firefox Bug 828261](https://bugzil.la/828261)).
- Die Methoden `valueAsDate` und `valueAsNumber` wurden für `<input type="time">` hinzugefügt ([Firefox Bug 781570](https://bugzil.la/781570)).
- Die `min` und `max` Attribute gelten jetzt auch für `<input type="time">` ([Firefox Bug 781572](https://bugzil.la/781572)).
- Einige neue keyCodes zur Lautstärkeregelung werden unterstützt ([Firefox Bug 674739](https://bugzil.la/674739)).
- Einige neue keyCodes für alte Tastaturlayouts wie AS/400 werden jetzt unter Windows und Linux unterstützt ([Firefox Bug 833719](https://bugzil.la/833719)).
- Verschiedene keyCode-Werte für OEM-spezifische Tasten unter Windows werden jetzt wieder unterstützt ([Firefox Bug 833719](https://bugzil.la/833719)).
- Die Funktion [`window.crypto.getRandomValues`](/de/docs/Web/API/Crypto/getRandomValues) wurde implementiert ([Firefox Bug 440046](https://bugzil.la/440046)).
- Die nicht standardmäßigen Methoden `NodeIterator.expandEntityReferences()` und `TreeWalker.expandEntityReferences()` wurden entfernt ([Firefox Bug 672190](https://bugzil.la/672190)).
- CSSOM: Die Methode {{domxref("CSSKeyframesRule")}}`.insertRule` wurde zu {{domxref("CSSKeyframesRule")}}`.appendRule` geändert, um eine Spezifikationsänderung zu berücksichtigen ([Firefox Bug 841896](https://bugzil.la/841896)).
- CSSOM Wenn der gegebene Parameter, der an {{domxref("CSSStyleSheet.insertRule")}} übergeben wird, mehr als eine Regel enthält, wird jetzt ein {{domxref("DOMException")}} mit einem `SYNTAX_ERR` ausgelöst ([Firefox Bug 765599](https://bugzil.la/765599)).
- Bis jetzt, wenn dieselben Header wiederholt mit [`XMLHttpRequest.setRequestHeader`](/de/docs/Web/API/XMLHttpRequest#setrequestheader) festgelegt wurden, wurde der zuletzt angegebene Wert verwendet. Dieses Verhalten wurde geändert, um mit der Spezifikation übereinzustimmen, sodass diese Werte ordnungsgemäß kombiniert werden ([Firefox Bug 819051](https://bugzil.la/819051)).

### SVG

- Das [paint-order](/de/docs/Web/SVG/Attribute/paint-order) Attribut wurde implementiert ([Firefox Bug 828805](https://bugzil.la/828805)).
- Die `svg.smil.enabled` Präferenz wurde entfernt. SMIL ist immer an. ([Firefox Bug 835030](https://bugzil.la/835030))

### Networking

- Wir setzen die Aktualisierung unserer CSP-Implementierung zur Übereinstimmung mit der CSP 1.0 Spezifikation fort, die den Stand einer Kandidatenempfehlung erreicht hat:

  - Unterstützung für den spezifikationskonformen `Content-Security-Policy` HTTP-Header (zusätzlich zum experimentellen `X-Content-Security-Policy`) wurde hinzugefügt ([Firefox Bug 783049](https://bugzil.la/783049)).
    > [!NOTE]
    > Der Patch für diesen neuen Header landete in Firefox 21 und ist in Builds deaktiviert ([Firefox Bug 842657](https://bugzil.la/842657)).

### Worker

- Die Funktionen {{domxref("URL.createObjectURL_static", "URL.createObjectURL()")}} und {{domxref("URL.revokeObjectURL_static", "URL.revokeObjectURL()")}} sind jetzt in der Gruppe der [für Worker verfügbaren Funktionen](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers) enthalten.

## Änderungen für Add-on- und Mozilla-Entwickler

- FUEL-Anwendungen können den Livemarks-Service nicht mehr verwenden ([Firefox Bug 834492](https://bugzil.la/834492)). Der Livemarks-Service ist veraltet und wird zugunsten der neuen asynchronen Schnittstelle auslaufen.
- `resource:///modules/` und `resource://gre/modules/` sind nicht mehr identisch ([Firefox Bug 755724](https://bugzil.la/755724)). Diese Änderung wurde aufgrund der Arbeit an der Metro-Version von Firefox vorgenommen. Wenn Sie Module mit `resource:///modules/` laden, sollten Sie prüfen, ob Sie nun `resource://gre/modules/` stattdessen verwenden möchten. Beachten Sie, dass einige Module auch von Firefox nach Toolkit verschoben wurden ([Firefox Bug 840287](https://bugzil.la/840287) und [Firefox Bug 811548](https://bugzil.la/811548) verschoben `NewTabUtils.jsm` und die Thumbnail-Module).
- Das Add-on SDK ist jetzt in Firefox enthalten ([Firefox Bug 731779](https://bugzil.la/731779))
- Die History-API sah zahlreiche veraltete APIs entfernt:

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

  - Nicht mehr von Places implementiert, verwenden Sie stattdessen `mozIAsyncHistory`:

    - `nsIGlobalHistory2::addURI`
    - `nsIGlobalHistory2::isVisited`
    - `nsIGlobalHistory2::setPageTitle`

  - Nicht mehr benötigt, verwenden Sie `onDeleteURI` oder `onItemRemoved`:

    - `nsINavHistoryObserver::OnBeforeDeleteURI`
    - `nsINavBookmarkObserver::OnBeforeItemRemoved`

  - Nie richtig implementiert:

    - `nsINavHistoryFullVisitResultNode`

  - Veraltet, verwenden Sie stattdessen `mozIAsyncHistory::updatePlaces`:

    - `nsINavHistoryService::AddVisit`

- `nsIHttpChannel.redirectTo` wurde hinzugefügt, um das Umleiten von HTTP-Kanälen ohne fragile Hacks zu ermöglichen.

## Siehe auch

- [Firefox 21 Release Notes](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/21.0/releasenotes/)
- [Add-on-Kompatibilität für Firefox 21](https://blog.mozilla.org/addons/2013/04/26/compatibility-for-firefox-21/)

### Ältere Versionen

{{Firefox_for_developers}}
