---
title: Firefox 15 für Entwickler
short-title: Firefox 15
slug: Mozilla/Firefox/Releases/15
l10n:
  sourceCommit: 64df508685abcbc047f6c1a973505921fad1484e
---

Firefox 15 wurde am 28. August 2012 veröffentlicht. Dieser Artikel listet die wichtigsten Änderungen auf, die nicht nur für Webentwickler, sondern auch für Firefox- und Gecko-Entwickler sowie Erweiterungsentwickler nützlich sind.

## Änderungen für Webentwickler

### HTML

- Das `size`-Attribut des {{HTMLElement("font")}}-Elements wird nun gemäß der HTML5-Spezifikation behandelt. Das bedeutet, dass alle ganzzahligen Werte größer als 10 oder kleiner als -10 nun als gleichwertig mit 10 bzw. -10 betrachtet werden.
- Unterstützung für die `font-weight`- und `point-size`-Attribute im `<font>`-Element wurde entfernt; diese waren nicht standardisiert und Gecko war die einzige Engine, die sie unterstützte.
- Der [Opus-Codec](https://www.opus-codec.org/) wird nun für Audio in Ogg-Containern für die HTML-{{HTMLElement("audio")}} und {{HTMLElement("video")}}-Elemente unterstützt.
- Das {{HTMLElement("source")}}-Element unterstützt nun das `media`-Attribut.
- Die {{HTMLElement("audio")}} und {{HTMLElement("video")}}-Elemente unterstützen nun das `played`-Attribut, welches ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt bereitstellt, das die Zeitbereiche der Medien auflistet, die bisher wiedergegeben wurden.

### CSS

- Die {{cssxref("font-feature-settings")}}-Eigenschaft wurde auf die neueste Syntax aktualisiert: `font-feature-settings: "lnum" 1;`
- Die CSS-{{cssxref("text-transform")}}-Eigenschaft wurde erweitert, um Unicode-Ligatur-Zeichen (wie `ﬁ`) korrekt zu handhaben.
- Die CSS-{{cssxref("word-break")}}-Eigenschaft wurde implementiert.
- Die {{cssxref("border-image")}}-Eigenschaft wurde aktualisiert, um der neuesten Spezifikation zu entsprechen, und die Präfixe wurden entfernt. ([Bug 713643](https://bugzil.la/713643))
- Die Funktion `skew()` im {{cssxref("transform")}} wurde, nachdem sie in Firefox 14 entfernt wurde, aufgrund der Kompatibilität mit bestehenden Seiten wiederhergestellt. Autoren wird jedoch geraten, stattdessen die Funktionen `skewX()` und `skewY()` zu verwenden.
- Der Wert `plaintext` der CSS-{{cssxref("unicode-bidi")}}-Eigenschaft gilt nun auch für Inline-Elemente. ([Firefox-Bug 746987](https://bugzil.la/746987))

### DOM

- Die Methoden [`KeyboardEvent.getModifierState()`](/de/docs/Web/API/KeyboardEvent/getModifierState) und [`MouseEvent.getModifierState()`](/de/docs/Web/API/MouseEvent/getModifierState) der DOM Events Level 3, die es ermöglichen, den Status von Modifikatortasten wie `Ctrl` oder `Shift` abzufragen, wurden implementiert (Bugs [630811](https://bugzil.la/630811) und [731878](https://bugzil.la/731878)). Das Verhalten entspricht jedoch dem neuesten D3E-Entwurf. Daher sind einige Modifikatortasten-Namen anders als in IE ([Firefox-Bug 769190](https://bugzil.la/769190)).
- Bei Mausereignissen wurde die Unterstützung zur Abfrage des Status der Maustasten mit dem [`MouseEvent.buttons`](/de/docs/Web/API/MouseEvent)-Attribut implementiert.
- Bei Tastaturereignissen wurde die Unterstützung zur Abfrage der Tastenposition (standardmäßig, links oder rechts der Modifikatortaste, im Numpad) mit dem [KeyboardEvent.location](/de/docs/Web/API/KeyboardEvent/location)-Attribut implementiert ([Firefox-Bug 166240](https://bugzil.la/166240)).
- Das Ergebnis von KeyboardEvent.keycode wurde aus besseren Regeln berechnet, die fast gleich auf Windows/Linux/Mac sind. Und nun sind sie auf einigen Tastaturlayouts verfügbar, die nicht ASCII-fähig sind, wie Arabisch, Kyrillisch, Thailändisch usw. Siehe [das Dokument für virtuelle Tasten-Codes](/de/docs/Web/API/UI_Events/Keyboard_event_key_values).
- Die Methode [`range.detach()`](/de/docs/Web/API/Range/detach) wurde in ein No-op umgewandelt und wird wahrscheinlich in Zukunft entfernt.
- Die Methode `HTMLVideoElement.mozHasAudio()` wurde implementiert. Sie zeigt an, ob ein Audiotrack mit einem bestimmten Videoelement verknüpft ist. ([Bug 480376](https://bugzil.la/480376))
- Die `Performance`-API hat eine neue Methode, [`now()`](/de/docs/Web/API/Performance/now), die Hochauflösungstimer vom Typ `DOMHighResTimeStamp` unterstützt. ([Bug 539095](https://bugzil.la/539095)).
- Die [WebSMS API](https://web.archive.org/web/20210620092659/https://developer.mozilla.org/de/docs/Archive/B2G_OS/API/Mobile_Messaging_API) wurde aktualisiert und unterstützt nun ein `read`-Attribut, das angibt, ob eine SMS-Nachricht gelesen oder ungelesen ist.
- Die [FileHandle API](https://wiki.mozilla.org/WebAPI/FileHandleAPI) wurde implementiert.
- Der Konstruktor [`Blob`](/de/docs/Web/API/Blob) akzeptiert nun `ArrayBufferView` als Mitglied des Parameters `blobParts` zusätzlich zu `ArrayBuffer`. ([Bug 752402](https://bugzil.la/752402))
- Das `DeviceLightEvent`, das im [Arbeitsentwurf zu Umgebungslichtereignissen](https://w3c.github.io/ambient-light/) spezifiziert ist, wurde implementiert.
- Die `DeviceProximityEvent` und `UserProximityEvent` [Proximity Events](https://w3c.github.io/proximity/) wurden implementiert.
- Die [`File`](/de/docs/Web/API/File) `lastModifiedDate`-Eigenschaft wurde implementiert. ([Firefox-Bug 673586](https://bugzil.la/673586))

### JavaScript

- Unterstützung für das [`DataView`](/de/docs/Web/JavaScript/Reference/Global_Objects/DataView)-Interface der Typed Arrays-Spezifikation wurde hinzugefügt. Dies ermöglicht einen Low-Level-Zugriff auf die im [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) enthaltenen Daten.
- Unterstützung für neue ECMAScript 2015 Built-ins: [`Number.isNaN()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN), [`Number.toInteger()`](https://web.archive.org/web/20200204124547/https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toInteger), [`Number.isInteger()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger), [`Number.isFinite()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite) wurden hinzugefügt. ([Bug 749818](https://bugzil.la/749818), [Bug 761495](https://bugzil.la/761495), [Bug 761480](https://bugzil.la/749818)).
- Unterstützung für ECMAScript 2015 [Standardparameter](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters) wurde hinzugefügt. ([Bug 757676](https://bugzil.la/757676)).
- Unterstützung für ECMAScript 2015 [Rest-Parameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) wurde hinzugefügt. ([Bug 574132](https://bugzil.la/574132)).

### WebGL

- Unterstützung für die [`WEBGL_compressed_texture_s3tc`](/de/docs/Web/API/WEBGL_compressed_texture_s3tc)-Erweiterung wurde hinzugefügt. Komprimierte Texturen reduzieren den Speicherbedarf auf der GPU, was höhere Auflösungen oder mehr Texturen mit gleicher Auflösung ermöglicht.

### MathML

- Mathematische Operatoren können nun herunterladbare Schriften verwenden, die mit {{cssxref("@font-face")}} spezifiziert sind. Dies macht das [MathML-fonts Add-on](https://addons.mozilla.org/en-US/firefox/addon/mathml-fonts/) auch mit dehnbaren Operatoren kompatibel.
- Das `selection`-Attribut des {{MathMLElement("maction")}} wird nun nur noch mit dem `toggle`-Aktionstyp berücksichtigt.
- [Veraltete namedspace-Bindung](https://www.w3.org/TR/MathML3/chapter3.html#id.3.3.4.2.1) wurde entfernt ([Firefox-Bug 673759](https://bugzil.la/673759)).
- Der unterstützte Syntax für [Length](/de/docs/Web/MathML/Reference/Values) und {{MathMLElement("mpadded")}}-Werte wurde näher an die im MathML3-Spezifikations beschriebenen angepasst.
- Neue MathML spiegelbare Operatoren für Arabische Mathematik wurden zum Operator-Wörterbuch hinzugefügt ([Firefox-Bug 757125](https://bugzil.la/757125)).

### SVG

- Unterstützung für das {{SVGElement("view")}}-Element wurde hinzugefügt ([Firefox-Bug 512525](https://bugzil.la/512525)).

### Netzwerk

- Unterstützung für das SPDY v3-Protokoll wurde hinzugefügt. Es ist standardmäßig deaktiviert und kann aktiviert werden, indem die Einstellung `network.http.spdy.enabled.v3` auf true gesetzt wird. ([Bug 737470](https://bugzil.la/737470))

## Änderungen für Erweiterungs- und Mozilla-Entwickler

### Schnittstellenänderungen

- `nsIDOMWindowUtils`
  - : `aModifiers` von `sendMouseEvent()`, `sendTouchEvent()`, `sendMouseEventToWindow()`, `sendMouseScrollEvent()` und `sendKeyEvent()` unterstützt alle Modifikatortasten, die von [`KeyboardEvent.getModifierState()`](/de/docs/Web/API/KeyboardEvent/getModifierState) unterstützt werden. Verwenden Sie `MODIFIER_*`-Werte. Jetzt wurde der 5. Parameter von `sendKeyEvent()` von `boolean` in `unsigned long` geändert. Zur Rückwärtskompatibilität, wenn der Aufrufer `true` oder `false` übergibt, ändert sich das Verhalten nicht. Diese Änderung ermöglicht es Aufrufern, die Position der Taste anzugeben.
- `nsIBrowserHistory`
  - : Die Methode `hidePage()` wurde nie implementiert und in dieser Version vollständig entfernt. Die Methode `addPageWithDetails()` wurde ebenfalls im Zuge der Arbeit, alle 'Places-APIs' asynchron zu gestalten, entfernt. Verwenden Sie stattdessen `mozIAsyncHistory.updatePlaces()`. Auch das `count`-Attribut wurde entfernt; es hatte seit einiger Zeit keinen tatsächlichen Zähler mehr zurückgegeben (es zeigte stattdessen an, ob Einträge vorhanden waren oder nicht). Sie können `nsINavHistoryService.hasHistoryEntries` verwenden.
- `nsIDOMUtils`
  - : Die Methode `nsIDOMUtils.parseStyleSheet()` wurde hinzugefügt und ermöglicht das (Neu-)Parsen von Cascading Style Sheets.
- `nsIINIParserWriter`
  - : Die Methode `nsIINIParserWriter.writeFile()` akzeptiert nun eine `flags`-Eigenschaft. Derzeit bietet sie nur eine Option: Sie können ihr jetzt mitteilen, die Datei im UTF-16-Format anstelle von UTF-8 zu schreiben, um eine bessere Kompatibilität mit Windows und bestimmten Installationsprogrammen zu gewährleisten.

#### Neue Schnittstellen

- `nsISpeculativeConnect`
  - : Bietet eine Möglichkeit, der Netzwerkebene einen Hinweis zu geben, dass wahrscheinlich eine Verbindung zu einer bestimmten URI in der nahen Zukunft hergestellt werden soll. Dies ermöglicht es der Netzwerkebene, den manchmal mit hoher Latenz behafteten Prozess des Öffnens einer neuen Netzwerkverbindung im Voraus zu beginnen.

#### Entfernte Schnittstellen

Die folgenden Schnittstellen wurden entfernt:

- `nsIGlobalHistory`
