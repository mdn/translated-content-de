---
title: Firefox 19 für Entwickler
short-title: Firefox 19
slug: Mozilla/Firefox/Releases/19
l10n:
  sourceCommit: 64df508685abcbc047f6c1a973505921fad1484e
---

Firefox 19 wurde am 19. Februar 2013 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler.

## Änderungen für Webentwickler

### JavaScript

- [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map)- und [`Set`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set)-Objekte haben sich von einer `size()`-Methode zu einer `size`-Eigenschaft geändert ([Firefox Fehler 807001](https://bugzil.la/807001))
- [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map)- und [`Set`](/de/docs/Web/JavaScript/Reference/Global_Objects/Set)-Objekte haben jetzt auch eine `clear()`-Methode. ([Firefox Fehler 805003](https://bugzil.la/805003))

### CSS

- Unterstützung für die viewport-relativen {{cssxref("&lt;length&gt;")}}-Einheiten `vh`, `vw`, `vmin` und `vmax` wurde hinzugefügt ([Firefox Fehler 503720](https://bugzil.la/503720))
- CSS Flexbox wurde unpräfixiert, bleibt aber standardmäßig deaktiviert ([Firefox Fehler 801098](https://bugzil.la/801098)).
- Der `-moz-initial`-Wert wurde unpräfixiert ([Firefox Fehler 806068](https://bugzil.la/806068)). `-moz-initial` bleibt für eine Weile als Alias; es wird jedoch dringend empfohlen, auf `initial` umzusteigen.
- Die CSS-Eigenschaft {{cssxref("text-transform")}} unterstützt jetzt das Schlüsselwort `full-width`, das eine nahtlosere Einbindung lateinischer Zeichen in Texte mit ideografischen festbreiten Zeichen, wie Chinesisch oder Japanisch, ermöglicht ([Firefox Fehler 774560](https://bugzil.la/774560)).
- Die CSS-Eigenschaft {{cssxref("page-break-inside")}} wurde implementiert ([Firefox Fehler 685012](https://bugzil.la/685012)).
- Die CSS-Funktion {{cssxref("calc", "calc()")}} kann jetzt auf `<color-stop>` (auf {{cssxref("&lt;gradient&gt;")}}) verwendet werden.
- Die CSS-Regel {{cssxref("@page")}} wird jetzt unterstützt ([Firefox Fehler 115199](https://bugzil.la/115199)). Beachten Sie, dass die Pseudoklassen {{cssxref(":first")}}, {{cssxref(":right")}} und {{cssxref(":left")}} noch nicht implementiert sind.
- Die Pseudoklasse `:-moz-placeholder` wird durch das Pseudo-_Element_ `::-moz-placeholder` ersetzt ([Firefox Fehler 737786](https://bugzil.la/737786)).
- Mit `!important` qualifizierte Deklarationen in {{cssxref("@keyframes")}} werden jetzt gemäß Spezifikation ignoriert ([Firefox Fehler 784466](https://bugzil.la/784466)).

### DOM/APIs

- Die Methoden [`Element.getElementsByTagName`](/de/docs/Web/API/Element/getElementsByTagName), [`Element.getElementsByTagNameNS`](/de/docs/Web/API/Element/getElementsByTagNameNS) und [`Element.getElementsByClassName`](/de/docs/Web/API/Element/getElementsByClassName) geben jetzt eine Live-`HTMLCollection` zurück ([Firefox Fehler 799464](https://bugzil.la/799464)).
- Die Eigenschaft `mozLastModifiedDate` des [`File`](/de/docs/Web/API/File)-Objekts wurde implementiert. ([Firefox Fehler 793955](https://bugzil.la/793955))
- Die Eigenschaft `lastModifiedDate` des [`File`](/de/docs/Web/API/File)-Objekts gibt das aktuelle Datum zurück, wenn das Datum der letzten Änderung unbekannt ist. ([Firefox Fehler 793459](https://bugzil.la/793459))
- Die Methode `isPointInStroke` des [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) wurde implementiert ([Firefox Fehler 803124](https://bugzil.la/803124)).
- Die Methode `toBlob` des [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) wurde implementiert ([Firefox Fehler 648610](https://bugzil.la/648610)).
- Die Methoden `Node.isSupported` und [`document.implementation.hasFeature()`](/de/docs/Web/API/Document/implementation) wurden geändert, um immer `true` zurückzugeben ([Firefox Fehler 801425](https://bugzil.la/801425)).
- Beim Aufruf von `document.createElement(null)` wird `null` jetzt als Zeichenkette behandelt und funktioniert wie `document.createElement("null")`.
- Die Schnittstellen [`TextDecoder`](/de/docs/Web/API/TextDecoder) und [`TextEncoder`](/de/docs/Web/API/TextEncoder) wurden aktualisiert, um der neuesten Spezifikation zu entsprechen ([Firefox Fehler 801487](https://bugzil.la/801487)).

### XForms

Unterstützung für XForms wurde in Firefox 19 [**entfernt**](https://www.philipp-wagner.com/blog/2011/07/the-future-of-mozilla-xforms).

## Änderungen für Add-on- und Mozilla-Entwickler

> [!NOTE]
> Eine wichtige Änderung in Firefox 19 ist, dass `nsresult` jetzt stark typisiert ist. Dies wird es einfacher machen, Fehler zu erkennen, die durch falsche Handhabung von Rückgabewerten verursacht werden, kann jedoch dazu führen, dass bestehender Code bricht, falls dabei falsche Annahmen gemacht wurden.

- `getBrowserSelection()` gibt jetzt den ausgewählten Text in einem Texteingabefeld zurück. Als Ergebnis wird `gContextMenu.isTextSelected` `true` sein, wenn der Benutzer Text in einem Texteingabefeld auswählt, das kein Passwortfeld ist. ([Firefox Fehler 565717](https://bugzil.la/565717))
- Dict.jsm: `Dict()` nimmt jetzt einen JSON-String. `Dict.toJSON()` wurde hinzugefügt und gibt einen JSON-String zurück. ([Firefox Fehler 727967](https://bugzil.la/727967))

### Schnittstellenänderungen

- `nsIImgLoadingContent`
  - : Der Parameter (aObserver) der Methode `addObserver()` ändert sich von `imgIDecoderObserver` zu `imgINotificationObserver`. Die `notify()`-Methode von `imgINotificationObserver` ist nicht skriptfähig, daher müssen Sie `createScriptedObserver()` von `imgITools` verwenden.
- `nsIChannel`
  - : Die Eigenschaft `contentLength` änderte sich von `long` zu `int64_t`.

## Siehe auch

- [Firefox 19 Beta Versionshinweise](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/19.0beta/releasenotes/)
- [Add-on-Kompatibilität für Firefox 19](https://blog.mozilla.org/addons/2013/02/07/compatibility-for-firefox-19/)
