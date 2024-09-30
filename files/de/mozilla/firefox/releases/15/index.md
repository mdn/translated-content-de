---
title: Firefox 15 für Entwickler
slug: Mozilla/Firefox/Releases/15
l10n:
  sourceCommit: 1822cdf5a86574429c4c49883a402663ef16a4ef
---

{{FirefoxSidebar}}

Firefox 15 wurde am 28. August 2012 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler.

## Änderungen für Webentwickler

### HTML

- Das `size`-Attribut des {{HTMLElement("font")}}-Elements wird jetzt gemäß der HTML5-Spezifikation behandelt. Das bedeutet, dass alle ganzzahligen Werte größer als 10 oder kleiner als -10 nun als äquivalent zu 10 bzw. -10 betrachtet werden.
- Die Unterstützung für die `font-weight`- und `point-size`-Attribute auf dem `<font>`-Element wurde entfernt; diese waren nicht standardisiert und Gecko war die einzige Engine, die sie unterstützte.
- Der [Opus-Codec](https://www.opus-codec.org/) wird nun für Audio in Ogg-Containern in den HTML-Elementen {{HTMLElement("audio")}} und {{HTMLElement("video")}} unterstützt.
- Das {{HTMLElement("source")}}-Element unterstützt jetzt das `media`-Attribut.
- Die {{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elemente unterstützen jetzt das `played`-Attribut, das ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt bereitstellt, das die Zeitbereiche der bisher wiedergegebenen Medien auflistet.

### CSS

- Die {{cssxref("font-feature-settings")}}-Eigenschaft wurde auf die neueste Syntax aktualisiert: `font-feature-settings: "lnum" 1;`
- Die CSS {{cssxref("text-transform")}}-Eigenschaft wurde erweitert, um Unicode-Ligaturzeichen (wie `ﬁ`) korrekt zu verarbeiten.
- Die CSS {{cssxref("word-break")}}-Eigenschaft wurde implementiert.
- Die {{cssxref("border-image")}}-Eigenschaft wurde aktualisiert, um der neuesten Spezifikation zu entsprechen, und die Eigenschaften wurden ohne Präfix ergänzt. ([Bug 713643](https://bugzil.la/713643))
- Die `skew()`-{{cssxref("transform")}}-Funktion, die in Firefox 14 entfernt wurde, wurde aufgrund bestehender Website-Kompatibilität wiederhergestellt. Autoren wird jedoch empfohlen, stattdessen die Funktionen `skewX()` und `skewY(`) zu verwenden.
- Der Wert `plaintext` der CSS-{{cssxref("unicode-bidi")}}-Eigenschaft gilt jetzt auch für Inline-Elemente. ([Firefox-Bug 746987](https://bugzil.la/746987)).

### DOM

- Die Methoden der DOM Events Level 3 [`KeyboardEvent.getModifierState()`](/de/docs/Web/API/KeyboardEvent#getmodifierstate%28%29) und [`MouseEvent.getModifierState()`](/de/docs/Web/API/MouseEvent#getmodifierstate%28%29), die es ermöglichen, den Zustand von Modifikatortasten wie `Ctrl` oder `Shift` abzufragen, wurden implementiert (Bugs [630811](https://bugzil.la/630811) und [731878](https://bugzil.la/731878)). Das Verhalten entspricht jedoch dem neuesten D3E-Entwurf. Einige Namen der Modifikatortasten unterscheiden sich von IE ([Firefox-Bug 769190](https://bugzil.la/769190)).
- Bei Mausereignissen wurde die Unterstützung für das Abfragen des Zustands der Maustasten mit dem [`MouseEvent.buttons`](/de/docs/Web/API/MouseEvent)-Attribut implementiert.
- Bei Tastaturereignissen wurde die Unterstützung für das Abfragen der Tastenposition (Standard, links oder rechts der Modifikatortaste, im Numpad) mit dem [KeyboardEvent.location](/de/docs/Web/API/KeyboardEvent#attributes_location)-Attribut implementiert ([Firefox-Bug 166240](https://bugzil.la/166240)).
- Das Ergebnis von `KeyboardEvent.keycode` wurde aus besseren Regeln berechnet, die auf Windows/Linux/Mac fast gleich waren. Und jetzt sind sie auf einigen Tastaturlayouts verfügbar, die keine ASCII-fähigen Layouts auf Linux und Mac sind, wie Arabisch, Kyrillisch, Thai und so weiter. Siehe [das Dokument für virtuelle Tastencodes](/de/docs/Web/API/KeyboardEvent#virtual_key_codes).
- Die Methode [`range.detach()`](/de/docs/Web/API/Range/detach) wurde in eine No-Op umgewandelt und wird möglicherweise in Zukunft entfernt.
- Die Methode `HTMLVideoElement.mozHasAudio()` wurde implementiert. Sie zeigt an, ob ein Audiotrack mit einem bestimmten Videoelement verbunden ist. ([Bug 480376](https://bugzil.la/480376))
- Die `Performance`-API hat eine neue Methode, [`now()`](/de/docs/Web/API/Performance/now), die hochauflösende Timer des Typs `DOMHighResTimeStamp` unterstützt. ([Bug 539095](https://bugzil.la/539095)).
- Die [WebSMS-API](https://web.archive.org/web/20210620092659/https://developer.mozilla.org/de/docs/Archive/B2G_OS/API/Mobile_Messaging_API) wurde aktualisiert und unterstützt jetzt ein `read`-Attribut, das angibt, ob eine SMS-Nachricht gelesen oder ungelesen ist.
- Die [FileHandle-API](https://wiki.mozilla.org/WebAPI/FileHandleAPI) wurde implementiert.
- Der [`Blob`](/de/docs/Web/API/Blob)-Konstruktor akzeptiert jetzt `ArrayBufferView` als Mitglied des Parameters `blobParts` zusätzlich zu `ArrayBuffer`. ([Bug 752402](https://bugzil.la/752402))
- Das `DeviceLightEvent` aus dem [Ambient Light Events Working Draft](https://www.w3.org/TR/ambient-light/) wurde implementiert.
- Die `DeviceProximityEvent` und `UserProximityEvent` [Proximity Events](https://www.w3.org/TR/proximity/) wurden implementiert.
- Die [`File`](/de/docs/Web/API/File) `lastModifiedDate`-Eigenschaft wurde implementiert. ([Firefox-Bug 673586](https://bugzil.la/673586))

### JavaScript

- Unterstützung für das [`DataView`](/de/docs/Web/JavaScript/Reference/Global_Objects/DataView)-Interface aus der Typed Arrays-Spezifikation wurde hinzugefügt. Dies bietet einen Low-Level-Zugriff auf die in einem [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) enthaltenen Daten.
- Unterstützung für neue ECMAScript-2015-Built-ins: [`Number.isNaN()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN), [`Number.toInteger()`](https://web.archive.org/web/20200204124547/https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toInteger), [`Number.isInteger()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger), [`Number.isFinite()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite) wurde hinzugefügt. ([Bug 749818](https://bugzil.la/749818), [Bug 761495](https://bugzil.la/761495), [Bug 761480](https://bugzil.la/749818)).
- Unterstützung für ECMAScript 2015 [Standardparameter](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters) wurde hinzugefügt. ([Bug 757676](https://bugzil.la/757676)).
- Unterstützung für ECMAScript 2015 [Rest-Parameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) wurde hinzugefügt. ([Bug 574132](https://bugzil.la/574132)).

### WebGL

- Unterstützung für die [`WEBGL_compressed_texture_s3tc`](/de/docs/Web/API/WebGL_API/Using_Extensions#webgl_compressed_texture_s3tc)-Erweiterung wurde hinzugefügt. Komprimierte Texturen reduzieren die Menge an Speicherplatz, die benötigt wird, um eine Textur auf der GPU zu speichern, wodurch höhere Auflösungen oder mehr Texturen mit derselben Auflösung möglich werden.

### MathML

- Mathematische Operatoren können jetzt herunterladbare Schriftarten verwenden, die mit {{cssxref("@font-face")}} spezifiziert sind. Dies macht das [MathML-fonts Add-on](https://addons.mozilla.org/en-US/firefox/addon/mathml-fonts/) auch für dehnbare Operatoren funktionsfähig.
- Das `selection`-Attribut des {{MathMLElement("maction")}} wird jetzt nur mit dem `toggle`-Aktionstyp berücksichtigt.
- [Veraltetes Namedspace-Binding](https://www.w3.org/TR/MathML3/chapter3.html#id.3.3.4.2.1) wurde entfernt ([Firefox-Bug 673759](https://bugzil.la/673759)).
- Der unterstützte Syntax für [Length](/de/docs/Web/MathML/Values) und {{MathMLElement("mpadded")}}-Werte wurde näher an die in der MathML3-Spezifikation angegebene Syntax gebracht.
- Neue MathML-Spiegeloperatoren für arabische Mathematik wurden dem Operator-Wörterbuch hinzugefügt ([Firefox-Bug 757125](https://bugzil.la/757125)).

### SVG

- Unterstützung für das {{SVGElement("view")}}-Element wurde hinzugefügt ([Firefox-Bug 512525](https://bugzil.la/512525)).

### Netzwerk

- Unterstützung für das SPDY v3-Protokoll wurde eingeführt. Es ist standardmäßig deaktiviert und kann durch Setzen der Einstellung `network.http.spdy.enabled.v3` auf true aktiviert werden. ([Bug 737470](https://bugzil.la/737470))

## Änderungen für Add-on und Mozilla-Entwickler

### Schnittstellenänderungen

- `nsIDOMWindowUtils`
  - : `aModifiers` von `sendMouseEvent()`, `sendTouchEvent()`, `sendMouseEventToWindow()`, `sendMouseScrollEvent()` und `sendKeyEvent()` unterstützt alle Modifikatortasten, die von [`KeyboardEvent.getModifierState()`](/de/docs/Web/API/KeyboardEvent#getmodifierstate%28%29) unterstützt werden. Verwenden Sie `MODIFIER_*`-Werte. Und jetzt wurde der 5. Parameter von `sendKeyEvent()` von `boolean` auf `unsigned long` geändert. Für Abwärtskompatibilität bleibt das Verhalten unverändert, wenn der Aufrufer `true` oder `false` übergibt. Diese Änderung ermöglicht es Aufrufern, die Position der Taste anzugeben.
- `nsIBrowserHistory`
  - : Die `hidePage()`-Methode wurde nie implementiert und in dieser Version vollständig entfernt. Die `addPageWithDetails()`-Methode wurde ebenfalls entfernt, im Zuge der laufenden Arbeiten, um alle 'Places-APIs' asynchron zu gestalten; verwenden Sie stattdessen `mozIAsyncHistory.updatePlaces()`. Auch das `count`-Attribut wurde entfernt; es hatte schon seit einiger Zeit keinen tatsächlichen Zählwert mehr zurückgegeben (stattdessen wies es darauf hin, ob Einträge vorhanden waren oder nicht). Sie können stattdessen `nsINavHistoryService.hasHistoryEntries` verwenden.
- `inIDOMUtils`
  - : Die `inlDOMUtils.parseStyleSheet()`-Methode wurde hinzugefügt und ermöglicht das (Neu-)Parsen von Cascading Style Sheets.
- `nsIINIParserWriter`
  - : Die `nsIINIParserWriter.writeFile()`-Methode akzeptiert jetzt eine `flags`-Eigenschaft. Derzeit bietet dies nur eine Option: Sie können jetzt angeben, dass die Datei im UTF-16-Format anstelle von UTF-8 geschrieben werden soll, um bessere Kompatibilität mit Windows und bestimmten Installationsprogrammen zu gewährleisten.

#### Neue Schnittstellen

- `nsISpeculativeConnect`
  - : Bietet eine Möglichkeit, der Netzwerkschicht einen Hinweis zu geben, dass Sie wahrscheinlich in naher Zukunft eine Verbindung zu einer gegebenen URI öffnen möchten. Dies ermöglicht der Netzwerkschicht, den manchmal hochlatenzteiligen Prozess des Öffnens einer neuen Netzwerkverbindung vorwegzunehmen.

#### Entfernte Schnittstellen

Die folgenden Schnittstellen wurden entfernt.

- `nsIGlobalHistory`

## Siehe auch

{{Firefox_for_developers}}
