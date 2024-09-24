---
title: Firefox 19 für Entwickler
slug: Mozilla/Firefox/Releases/19
l10n:
  sourceCommit: 8943d682ef5a0f9a3f8b66049ff3042e07f140ba
---

{{FirefoxSidebar}}

Firefox 19 wurde am 19. Februar 2013 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Firefox- und Gecko-Entwickler sowie für die Entwickler von Add-ons.

## Änderungen für Webentwickler

### JavaScript

- Die Objekte [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) und [`Set`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) haben sich von einer `size()`-Methode zu einer `size`-Eigenschaft geändert ([Firefox-Bug 807001](https://bugzil.la/807001)).
- Die Objekte [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) und [`Set`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) verfügen jetzt auch über eine clear()-Methode. ([Firefox-Bug 805003](https://bugzil.la/805003))

### CSS

- Unterstützung für Viewport-relative {{cssxref("&lt;length&gt;")}} Einheiten, `vh`, `vw`, `vmin` und `vmax`, wurde hinzugefügt ([Firefox-Bug 503720](https://bugzil.la/503720)).
- CSS Flexbox wurde unpräfixiert, bleibt jedoch standardmäßig deaktiviert ([Firefox-Bug 801098](https://bugzil.la/801098)).
- Der Wert `-moz-initial` wurde unpräfixiert ([Firefox-Bug 806068](https://bugzil.la/806068)). `-moz-initial` wird für eine Weile als Alias beibehalten; Autoren werden jedoch stark ermutigt, auf `initial` umzusteigen.
- Die CSS-Eigenschaft {{cssxref("text-transform")}} unterstützt jetzt das Schlüsselwort `full-width`, das eine nahtlosere Einbindung lateinischer Zeichen in Text mit ideografischen Festbreitenzeichen wie Chinesisch oder Japanisch ermöglicht ([Firefox-Bug 774560](https://bugzil.la/774560)).
- Die CSS-Deklaration {{cssxref("page-break-inside")}} wurde implementiert ([Firefox-Bug 685012](https://bugzil.la/685012)).
- Die CSS-Funktion {{cssxref("calc", "calc()")}} kann jetzt auf `<color-stop>` (in {{cssxref("&lt;gradient&gt;")}}) verwendet werden.
- Die CSS-At-Regel {{cssxref("@page")}} wird nun unterstützt ([Firefox-Bug 115199](https://bugzil.la/115199)). Beachten Sie, dass die Pseudoklassen {{cssxref(":first")}}, {{cssxref(":right")}} und {{cssxref(":left")}} noch nicht implementiert sind.
- Die Pseudoklasse `:-moz-placeholder` wurde durch das Pseudoelement `::-moz-placeholder` ersetzt ([Firefox-Bug 737786](https://bugzil.la/737786)).
- Deklarationen, die mit `!important` in {{cssxref("@keyframes")}} qualifiziert sind, werden nun gemäß Spezifikation ignoriert ([Firefox-Bug 784466](https://bugzil.la/784466)).

### DOM/APIs

- Die Methoden {{domxref("Element.getElementsByTagName")}}, {{domxref("Element.getElementsByTagNameNS")}} und {{domxref("Element.getElementsByClassName")}} geben jetzt eine Live-{{domxref("HTMLCollection")}} zurück ([Firefox-Bug 799464](https://bugzil.la/799464)).
- Die Eigenschaft `mozLastModifiedDate` der {{domxref("File")}} wurde implementiert ([Firefox-Bug 793955](https://bugzil.la/793955)).
- Die Eigenschaft lastModifiedDate der {{domxref("File")}} gibt das aktuelle Datum zurück, wenn das Datum der letzten Änderung unbekannt ist ([Firefox-Bug 793459](https://bugzil.la/793459)).
- Die Methode `isPointInStroke` der {{domxref("CanvasRenderingContext2D")}} wurde implementiert ([Firefox-Bug 803124](https://bugzil.la/803124)).
- Die Methode `toBlob` des {{domxref("HTMLCanvasElement")}} wurde implementiert ([Firefox-Bug 648610](https://bugzil.la/648610)).
- Die Methode `Node.isSupported` und die Methode {{domxref("document.implementation", "document.implementation.hasFeature()")}} wurden geändert, sodass sie immer `true` zurückgeben ([Firefox-Bug 801425](https://bugzil.la/801425)).
- Bei einem Aufruf von `document.createElement(null)` wird `null` jetzt als String behandelt und funktioniert wie `document.createElement("null")`.
- Die Schnittstellen {{domxref("TextDecoder")}} und {{domxref("TextEncoder")}} wurden aktualisiert, um der neuesten Spezifikation zu entsprechen ([Firefox-Bug 801487](https://bugzil.la/801487)).

### XForms

Unterstützung für XForms wurde in Firefox 19 [**entfernt**](https://www.philipp-wagner.com/blog/2011/07/the-future-of-mozilla-xforms).

## Änderungen für Add-on- und Mozilla-Entwickler

> [!NOTE]
> Eine wesentliche Änderung in Firefox 19 ist, dass `nsresult` jetzt stark typisiert ist. Dies erleichtert die Erkennung von Bugs, die durch fehlerhafte Behandlung von Rückgabewerten verursacht werden, kann jedoch bestehendem Code Probleme bereiten, wenn diesbezüglich falsche Annahmen getroffen wurden.

- `getBrowserSelection()` gibt jetzt den ausgewählten Text in einem Texteingabefeld zurück. Daher wird `gContextMenu.isTextSelected` `true`, wenn der Benutzer Text in einem Texteingabefeld auswählt, das kein Passwortfeld ist ([Firefox-Bug 565717](https://bugzil.la/565717)).
- Dict.jsm: `Dict()` nimmt jetzt einen JSON-String. `Dict.toJSON()` wurde hinzugefügt und gibt einen JSON-String zurück ([Firefox-Bug 727967](https://bugzil.la/727967)).

### Schnittstellenänderungen

- `nsIImgLoadingContent`
  - : Der Parameter (aObserver) der Methode `addObserver()` ändert sich von `imgIDecoderObserver` zu `imgINotificationObserver`. Die Methode `notify()` von `imgINotificationObserver` ist nicht skriptfähig, daher müssen Sie `createScriptedObserver()` von `imgITools` verwenden.
- `nsIChannel`
  - : Die Eigenschaft `contentLength` änderte sich von `long` zu `int64_t`.

## Siehe auch

- [Firefox 19 Beta Versionshinweise](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/19.0beta/releasenotes/)
- [Add-on-Kompatibilität für Firefox 19](https://blog.mozilla.org/addons/2013/02/07/compatibility-for-firefox-19/)

### Ältere Versionen

{{Firefox_for_developers}}
