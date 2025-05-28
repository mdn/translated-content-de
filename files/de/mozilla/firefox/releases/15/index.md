---
title: Firefox 15 für Entwickler
slug: Mozilla/Firefox/Releases/15
l10n:
  sourceCommit: 941ade970fd7ebad52af692b6ac27cfd96f94100
---

{{FirefoxSidebar}}

Firefox 15 wurde am 28. August 2012 veröffentlicht. Dieser Artikel listet die wichtigsten Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Firefox- und Gecko-Entwickler sowie für Addon-Entwickler.

## Änderungen für Webentwickler

### HTML

- Das `size`-Attribut des {{HTMLElement("font")}}-Elements wird nun gemäß der HTML5-Spezifikation behandelt. Das bedeutet, dass alle Ganzzahlen größer als 10 oder kleiner als -10 nun als 10 bzw. -10 betrachtet werden.
- Unterstützung für die Attribute `font-weight` und `point-size` auf dem `<font>`-Element wurde entfernt; diese waren nicht standardisiert, und Gecko war die einzige Engine, die sie unterstützte.
- Der [Opus-Codec](https://www.opus-codec.org/) wird nun für Audio in Ogg-Containern für die HTML-{{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elemente unterstützt.
- Das {{HTMLElement("source")}}-Element unterstützt jetzt das `media`-Attribut.
- Die {{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elemente unterstützen jetzt das `played`-Attribut, das ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt bereitstellt, das die Zeitbereiche auflistet, die bisher abgespielt wurden.

### CSS

- Die {{cssxref("font-feature-settings")}}-Eigenschaft wurde auf die neueste Syntax aktualisiert: `font-feature-settings: "lnum" 1;`
- Die CSS-{{cssxref("text-transform")}}-Eigenschaft wurde erweitert, um Unicode-Ligaturzeichen (wie `ﬁ`) korrekt zu behandeln.
- Die CSS-{{cssxref("word-break")}}-Eigenschaft wurde implementiert.
- Die {{cssxref("border-image")}}-Eigenschaft wurde aktualisiert, um der neuesten Spezifikation zu entsprechen, und die Präfixe wurden entfernt. ([Bug 713643](https://bugzil.la/713643))
- Die in Firefox 14 gestrichene `skew()`-{{cssxref("transform")}}-Funktion wurde aufgrund bestehender Kompatibilität von Websites wiederhergestellt. Entwicklern wird jedoch empfohlen, stattdessen die Funktionen `skewX()` und `skewY()` zu verwenden.
- Der Wert `plaintext` der CSS-{{cssxref("unicode-bidi")}}-Eigenschaft gilt jetzt auch für Inline-Elemente. ([Firefox-Bug 746987](https://bugzil.la/746987))

### DOM

- Die Methoden der DOM Events Level 3 [`KeyboardEvent.getModifierState()`](/de/docs/Web/API/KeyboardEvent#getmodifierstate%28%29) und [`MouseEvent.getModifierState()`](/de/docs/Web/API/MouseEvent#getmodifierstate%28%29), mit denen der Status von Modifikator-Tasten wie `Ctrl` oder `Shift` abgefragt werden kann, wurden implementiert (Bugs [630811](https://bugzil.la/630811) und [731878](https://bugzil.la/731878)). Das Verhalten entspricht jedoch dem neuesten D3E-Entwurf, sodass einige Modifikator-Tastennamen von denen in IE abweichen ([Firefox-Bug 769190](https://bugzil.la/769190)).
- Bei Mausereignissen wurde die Unterstützung zur Abfrage des Zustands der Maustasten über das Attribut [`MouseEvent.buttons`](/de/docs/Web/API/MouseEvent) implementiert.
- Bei Tastaturereignissen wurde die Unterstützung zur Abfrage der Tastenposition (Standard, links oder rechts von der Modifikator-Taste, im Numpad) über das Attribut [KeyboardEvent.location](/de/docs/Web/API/KeyboardEvent#attributes_location) implementiert ([Firefox-Bug 166240](https://bugzil.la/166240)).
- Der Ergebniswert von KeyboardEvent.keycode wurde aus besseren Regeln berechnet, die auf Windows/Linux/Mac nahezu gleich sind. Jetzt sind sie auch auf einigen Tastaturlayouts verfügbar, die keine ASCII-fähigen Layouts auf Linux und Mac sind, wie z.B. Arabisch, Kyrillisch, Thailändisch und so weiter. Siehe [das Dokument für virtuelle Tastencodes](/de/docs/Web/API/KeyboardEvent#virtual_key_codes).
- Die Methode [`range.detach()`](/de/docs/Web/API/Range/detach) wurde in eine No-Op verwandelt und wird wahrscheinlich in Zukunft entfernt.
- Die Methode `HTMLVideoElement.mozHasAudio()` wurde implementiert. Sie zeigt an, ob ein Audiotrack mit einem bestimmten Videoelement verbunden ist. ([Bug 480376](https://bugzil.la/480376))
- Die `Performance`-API hat eine neue Methode, [`now()`](/de/docs/Web/API/Performance/now), die hochauflösende Timer des Typs `DOMHighResTimeStamp` unterstützt. ([Bug 539095](https://bugzil.la/539095))
- Die [WebSMS-API](https://web.archive.org/web/20210620092659/https://developer.mozilla.org/de/docs/Archive/B2G_OS/API/Mobile_Messaging_API) wurde aktualisiert und unterstützt jetzt ein `read`-Attribut, das anzeigt, ob eine SMS-Nachricht gelesen oder ungelesen ist.
- Die [FileHandle-API](https://wiki.mozilla.org/WebAPI/FileHandleAPI) wurde implementiert.
- Der [`Blob`](/de/docs/Web/API/Blob)-Konstruktor akzeptiert nun `ArrayBufferView` als Mitglied des `blobParts`-Parameters zusätzlich zu `ArrayBuffer`. ([Bug 752402](https://bugzil.la/752402))
- Das in der [Ambient Light Events Working Draft](https://w3c.github.io/ambient-light/) spezifizierte `DeviceLightEvent` wurde implementiert.
- Die `DeviceProximityEvent` und `UserProximityEvent` [Proximity Events](https://w3c.github.io/proximity/) wurden implementiert.
- Die [`File`](/de/docs/Web/API/File) `lastModifiedDate`-Eigenschaft wurde implementiert. ([Firefox-Bug 673586](https://bugzil.la/673586))

### JavaScript

- Unterstützung für das [`DataView`](/de/docs/Web/JavaScript/Reference/Global_Objects/DataView)-Interface aus der Typed Arrays-Spezifikation wurde hinzugefügt. Dies bietet einen niedrigstufigen Zugriff auf die in einem [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) enthaltenen Daten.
- Unterstützung für neue ECMAScript 2015-Built-ins: [`Number.isNaN()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN), [`Number.toInteger()`](https://web.archive.org/web/20200204124547/https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toInteger), [`Number.isInteger()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger), [`Number.isFinite()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite) wurde hinzugefügt. ([Bug 749818](https://bugzil.la/749818), [Bug 761495](https://bugzil.la/761495), [Bug 761480](https://bugzil.la/749818))
- Unterstützung für ECMAScript 2015 [Standardparameter](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters) wurde hinzugefügt. ([Bug 757676](https://bugzil.la/757676))
- Unterstützung für ECMAScript 2015 [Rest-Parameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) wurde hinzugefügt. ([Bug 574132](https://bugzil.la/574132))

### WebGL

- Unterstützung für die Erweiterung [`WEBGL_compressed_texture_s3tc`](/de/docs/Web/API/WebGL_API/Using_Extensions#webgl_compressed_texture_s3tc) wurde hinzugefügt. Komprimierte Texturen verringern den Speicherbedarf zur Speicherung einer Textur auf der GPU, sodass höher aufgelöste Texturen oder mehr Texturen derselben Auflösung ermöglicht werden.

### MathML

- Mathematische Operatoren können nun herunterladbare Schriftarten verwenden, die mit {{cssxref("@font-face")}} spezifiziert wurden. Dies ermöglicht das [MathML-fonts-Addon](https://addons.mozilla.org/en-US/firefox/addon/mathml-fonts/) auch mit dehnbaren Operatoren.
- Das `selection`-Attribut des {{MathMLElement("maction")}} wird nun nur bei der `toggle`-Aktion berücksichtigt.
- [Veraltete benannte Raumzuweisung](https://www.w3.org/TR/MathML3/chapter3.html#id.3.3.4.2.1) wurde entfernt ([Firefox-Bug 673759](https://bugzil.la/673759)).
- Unterstützung für die Syntax von [Length](/de/docs/Web/MathML/Reference/Values) und für {{MathMLElement("mpadded")}}-Werte wurde näher an die in der MathML3-Spezifikation spezifizierte Syntax angeglichen.
- Neue MathML-spiegelbare Operatoren für arabische Mathematik wurden dem Operator-Wörterbuch hinzugefügt ([Firefox-Bug 757125](https://bugzil.la/757125)).

### SVG

- Unterstützung für das {{SVGElement("view")}}-Element wurde hinzugefügt ([Firefox-Bug 512525](https://bugzil.la/512525)).

### Netzwerk

- Unterstützung für das SPDY v3-Protokoll wurde eingeführt. Es ist standardmäßig deaktiviert und kann aktiviert werden, indem die Einstellung `network.http.spdy.enabled.v3` auf true gesetzt wird. ([Bug 737470](https://bugzil.la/737470))

## Änderungen für Add-on- und Mozilla-Entwickler

### Schnittstellenänderungen

- `nsIDOMWindowUtils`
  - : `aModifiers` von `sendMouseEvent()`, `sendTouchEvent()`, `sendMouseEventToWindow()`, `sendMouseScrollEvent()` und `sendKeyEvent()` unterstützt alle Modifikatortasten, die von [`KeyboardEvent.getModifierState()`](/de/docs/Web/API/KeyboardEvent#getmodifierstate%28%29) unterstützt werden. Verwenden Sie `MODIFIER_*` Werte. Und nun wurde der fünfte Parameter von `sendKeyEvent()` von `boolean` auf `unsigned long` geändert. Aus Gründen der Rückwärtskompatibilität, wenn der Aufrufer `true` oder `false` übergibt, bleibt das Verhalten unverändert. Diese Änderung ermöglicht es den Aufrufern, die Position der Taste zu spezifizieren.
- `nsIBrowserHistory`
  - : Die Methode `hidePage()` wurde nie implementiert und in dieser Version vollständig entfernt. Die Methode `addPageWithDetails()` wurde ebenfalls entfernt, als Teil der laufenden Arbeit, um alle 'Places APIs' asynchron zu machen; verwenden Sie stattdessen `mozIAsyncHistory.updatePlaces()`. Auch das `count`-Attribut wurde entfernt; es hatte seit einiger Zeit keine tatsächliche Zählung mehr zurückgegeben (stattdessen zeigte es an, ob Einträge vorhanden waren). Sie können stattdessen `nsINavHistoryService.hasHistoryEntries` verwenden.
- `nsIDOMUtils`
  - : Die Methode `nsIDOMUtils.parseStyleSheet()` wurde hinzugefügt und ermöglicht das (Neu-)Parsen von Cascading Style Sheets.
- `nsIINIParserWriter`
  - : Die Methode `nsIINIParserWriter.writeFile()` akzeptiert nun eine `flags`-Eigenschaft. Derzeit bietet dies nur eine Option: Sie können nun angeben, dass die Datei im UTF-16-Format anstelle von UTF-8 geschrieben werden soll, für eine bessere Kompatibilität mit Windows und bestimmten Installern.

#### Neue Schnittstellen

- `nsISpeculativeConnect`
  - : Bietet eine Möglichkeit, der Netzwerkebene einen Hinweis zu geben, dass Sie wahrscheinlich in naher Zukunft eine Verbindung zu einer bestimmten URI herstellen möchten. Dies ermöglicht es der Netzwerkebene, den manchmal latenzintensiven Prozess des Öffnens einer neuen Netzwerkverbindung vorzeitig zu beginnen.

#### Entfernte Schnittstellen

Die folgenden Schnittstellen wurden entfernt.

- `nsIGlobalHistory`

## Siehe auch

{{Firefox_for_developers}}
