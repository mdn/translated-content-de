---
title: Firefox 15 Release Notes für Entwickler
short-title: Firefox 15
slug: Mozilla/Firefox/Releases/15
l10n:
  sourceCommit: 83f4e64da466670c3700110da364546253eae127
---

Firefox 15 wurde am 28. August 2012 veröffentlicht. Dieser Artikel listet wesentliche Änderungen auf, die nicht nur für Webentwickler interessant sind, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler.

## Änderungen für Webentwickler

### HTML

- Das `size`-Attribut des {{HTMLElement("font")}}-Elements wird nun gemäß der HTML5-Spezifikation behandelt. Das bedeutet, dass alle Ganzzahlen größer als 10 oder kleiner als -10 nun als gleichwertig mit 10 bzw. -10 betrachtet werden.
- Die Unterstützung für `font-weight` und `point-size` Attribute auf dem `<font>`-Element wurde entfernt; diese waren nicht standardisiert und Gecko war die einzige Engine, die sie unterstützte.
- Der [Opus Codec](https://www.opus-codec.org/) wird jetzt für Audio in Ogg-Containern für die HTML {{HTMLElement("audio")}} und {{HTMLElement("video")}} Elemente unterstützt.
- Das {{HTMLElement("source")}}-Element unterstützt jetzt das `media`-Attribut.
- Die {{HTMLElement("audio")}} und {{HTMLElement("video")}}-Elemente unterstützen jetzt das `played` Attribut, das ein [`TimeRanges`](/de/docs/Web/API/TimeRanges) Objekt bereitstellt, das die Zeitbereiche auflistet, die bisher zurückgespielt wurden.

### CSS

- Die {{cssxref("font-feature-settings")}}-Eigenschaft wurde auf die neueste Syntax aktualisiert: `font-feature-settings: "lnum" 1;`
- Die CSS {{cssxref("text-transform")}} Eigenschaft wurde erweitert, um Unicode-Ligaturzeichen (wie `ﬁ`) korrekt zu behandeln.
- Die CSS {{cssxref("word-break")}}-Eigenschaft wurde implementiert.
- Die {{cssxref("border-image")}}-Eigenschaft wurde aktualisiert, um der neuesten Spezifikation zu entsprechen, und die Eigenschaften wurden unverändert. ([Bug 713643](https://bugzil.la/713643))
- Die `skew()` {{cssxref("transform")}} Funktion, die in Firefox 14 entfernt wurde, wurde aufgrund bestehender Website-Kompatibilität wiederhergestellt. Autoren wird jedoch empfohlen, stattdessen `skewX()` und `skewY()` Funktionen zu verwenden.
- Der Wert `plaintext` der CSS {{cssxref("unicode-bidi")}}-Eigenschaft gilt jetzt auch für Inline-Elemente. ([Firefox-Bug 746987](https://bugzil.la/746987)).

### DOM

- Die DOM Events Level 3 Methoden [`KeyboardEvent.getModifierState()`](/de/docs/Web/API/KeyboardEvent/getModifierState) und [`MouseEvent.getModifierState()`](/de/docs/Web/API/MouseEvent/getModifierState), die es Ihnen ermöglichen, den Zustand der Modifikatortasten wie `Ctrl` oder `Shift` abzufragen, wurden implementiert (Bugs [630811](https://bugzil.la/630811) und [731878](https://bugzil.la/731878)). Das Verhalten entspricht jedoch dem neuesten D3E-Entwurf. Daher sind einige Modifikatortastausnahmen von IE unterschiedlich ([Firefox-Bug 769190](https://bugzil.la/769190)).
- Bei Mausereignissen wurde die Unterstützung zum Abfragen des Zustands der Maustasten mit dem [`MouseEvent.buttons`](/de/docs/Web/API/MouseEvent) Attribut implementiert.
- Bei Tastaturereignissen wurde die Unterstützung zum Abfragen der Tastenposition (Standard, links oder rechts der Modifikatortaste, im Numpad) mit dem [KeyboardEvent.location](/de/docs/Web/API/KeyboardEvent/location) Attribut implementiert ([Firefox-Bug 166240](https://bugzil.la/166240)).
- Das Ergebnis `KeyboardEvent.keycode` wurde aus besseren Regeln berechnet, die unter Windows/Linux/Mac nahezu identisch waren. Jetzt sind sie auch für einige Tastaturlayouts verfügbar, die unter Linux und Mac nicht ASCII-fähig sind, wie Arabisch, Kyrillisch, Thai usw. Siehe [das Dokument für virtuelle Tastencodes](/de/docs/Web/API/UI_Events/Keyboard_event_key_values).
- Die [`range.detach()`](/de/docs/Web/API/Range/detach) Methode wurde in eine No-Op umgewandelt und wird wahrscheinlich in Zukunft entfernt.
- Die Methode `HTMLVideoElement.mozHasAudio()` wurde implementiert. Sie gibt an, ob es einen Audiotrack gibt, der mit einem bestimmten Videoelement verknüpft ist. ([Bug 480376](https://bugzil.la/480376))
- Die `Performance` API hat eine neue Methode, [`now()`](/de/docs/Web/API/Performance/now), die hochauflösende Timer vom Typ `DOMHighResTimeStamp` unterstützt. ([Bug 539095](https://bugzil.la/539095)).
- Die [WebSMS API](https://web.archive.org/web/20210620092659/https://developer.mozilla.org/de/docs/Archive/B2G_OS/API/Mobile_Messaging_API) wurde aktualisiert und unterstützt jetzt ein `read` Attribut, das angibt, ob eine SMS-Nachricht gelesen oder ungelesen ist.
- Die [FileHandle API](https://wiki.mozilla.org/WebAPI/FileHandleAPI) wurde implementiert.
- Der [`Blob`](/de/docs/Web/API/Blob) Konstruktor akzeptiert jetzt `ArrayBufferView` als Mitglied des Parameters `blobParts` zusätzlich zu `ArrayBuffer`. ([Bug 752402](https://bugzil.la/752402))
- Das `DeviceLightEvent` gemäß dem [Ambient Light Events Working Draft](https://w3c.github.io/ambient-light/) wurde implementiert.
- Die `DeviceProximityEvent` und `UserProximityEvent` [Proximity Events](https://w3c.github.io/proximity/) wurden implementiert.
- Die [`File`](/de/docs/Web/API/File) `lastModifiedDate` Eigenschaft wurde implementiert. ([Firefox-Bug 673586](https://bugzil.la/673586))

### JavaScript

- Unterstützung für das [`DataView`](/de/docs/Web/JavaScript/Reference/Global_Objects/DataView) Interface der Typed Arrays Spezifikation wurde hinzugefügt. Dies bietet Zugriff auf niedriger Ebene auf die Daten, die in einem [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) enthalten sind.
- Unterstützung für neue ECMAScript 2015 Built-ins: [`Number.isNaN()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN), [`Number.toInteger()`](https://web.archive.org/web/20200204124547/https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toInteger), [`Number.isInteger()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger), [`Number.isFinite()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite) wurden hinzugefügt. ([Bug 749818](https://bugzil.la/749818), [Bug 761495](https://bugzil.la/761495), [Bug 761480](https://bugzil.la/749818)).
- Unterstützung für ECMAScript 2015 [Standardparameter](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters) wurde hinzugefügt. ([Bug 757676](https://bugzil.la/757676)).
- Unterstützung für ECMAScript 2015 [Restparameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) wurde hinzugefügt. ([Bug 574132](https://bugzil.la/574132)).

### WebGL

- Unterstützung für die [`WEBGL_compressed_texture_s3tc`](/de/docs/Web/API/WEBGL_compressed_texture_s3tc) Erweiterung wurde hinzugefügt. Komprimierte Texturen reduzieren den Speicherbedarf auf der GPU, was die Verwendung höher auflösender Texturen oder mehrerer Texturen derselben Auflösung ermöglicht.

### MathML

- Mathematische Operatoren können jetzt herunterladbare Schriftarten verwenden, die mit {{cssxref("@font-face")}} spezifiziert wurden. Dies ermöglicht, dass das [MathML-fonts Add-on](https://addons.mozilla.org/en-US/firefox/addon/mathml-fonts/) auch mit dehnbaren Operatoren funktioniert.
- Das `selection`-Attribut des {{MathMLElement("maction")}} wird jetzt nur mit dem `toggle`-Actiontype berücksichtigt.
- [Veraltete Namensraum-Bindungen](https://www.w3.org/TR/MathML3/chapter3.html#id.3.3.4.2.1) wurden entfernt ([Firefox-Bug 673759](https://bugzil.la/673759)).
- Unterstützte Syntax für [Length](/de/docs/Web/MathML/Reference/Values) und {{MathMLElement("mpadded")}} Werte wurden näher an jene herangeführt, die in der MathML3-Spezifikation festgelegt sind.
- Neue MathML-spiegelbare Operatoren für arabische Mathematik wurden dem Operatorwörterbuch hinzugefügt ([Firefox-Bug 757125](https://bugzil.la/757125)).

### SVG

- Unterstützung für das {{SVGElement("view")}} Element wurde hinzugefügt ([Firefox Bug 512525](https://bugzil.la/512525)).

### Netzwerk

- Unterstützung für das SPDY v3 Protokoll wurde eingeführt. Es ist standardmäßig deaktiviert und kann aktiviert werden, indem die Einstellung `network.http.spdy.enabled.v3` auf true gesetzt wird. ([Bug 737470](https://bugzil.la/737470))

## Änderungen für Add-on- und Mozilla-Entwickler

### Schnittstellenänderungen

- `nsIDOMWindowUtils`
  - : `aModifiers` von `sendMouseEvent()`, `sendTouchEvent()`, `sendMouseEventToWindow()`, `sendMouseScrollEvent()` und `sendKeyEvent()` unterstützt alle Modifikatortasten, die von [`KeyboardEvent.getModifierState()`](/de/docs/Web/API/KeyboardEvent/getModifierState) unterstützt werden. Verwenden Sie `MODIFIER_*` Werte. Und jetzt ist der 5. Parameter von `sendKeyEvent()` von `boolean` in `unsigned long` geändert worden. Für die Rückwärtskompatibilität wird, wenn der Anrufer `true` oder `false` übergibt, das Verhalten nicht geändert. Diese Änderung ermöglicht es Anrufern, den Ort der Taste anzugeben.
- `nsIBrowserHistory`
  - : Die `hidePage()`-Methode wurde nie implementiert und in dieser Version vollständig entfernt. Die `addPageWithDetails()`-Methode wurde im Zuge der laufenden Arbeiten, alle 'Places APIs' asynchron zu gestalten, ebenfalls entfernt; verwenden Sie stattdessen `mozIAsyncHistory.updatePlaces()`. Auch das `count` Attribut wurde entfernt; es hatte seit einiger Zeit keine tatsächliche Zählung mehr zurückgegeben (es zeigte stattdessen an, ob Einträge vorhanden waren oder nicht). Sie können stattdessen `nsINavHistoryService.hasHistoryEntries` verwenden.
- `nsIDOMUtils`
  - : Die `nsIDOMUtils.parseStyleSheet()` Methode wurde hinzugefügt und ermöglicht das (Neu-)Parsen von Cascading Style Sheets.
- `nsIINIParserWriter`
  - : Die `nsIINIParserWriter.writeFile()` Methode akzeptiert jetzt eine `flags` Eigenschaft. Derzeit wird nur eine Option angeboten: Sie können nun angeben, die Datei im UTF-16-Format anstelle von UTF-8 zu schreiben, für bessere Kompatibilität mit Windows und bestimmten Installationsprogrammen.

#### Neue Schnittstellen

- `nsISpeculativeConnect`
  - : Bietet eine Möglichkeit, dem Netzwerkschicht mitzuteilen, dass Sie voraussichtlich in naher Zukunft eine Verbindung zu einer bestimmten URI öffnen werden. Dies ermöglicht es der Netzwerkschicht, den manchmal hoch-latenzbehafteten Prozess des Öffnens einer neuen Netzwerkverbindung im Voraus zu beginnen.

#### Entfernte Schnittstellen

Die folgenden Schnittstellen wurden entfernt:

- `nsIGlobalHistory`
