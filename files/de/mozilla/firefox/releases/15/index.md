---
title: Firefox 15 Versionshinweise für Entwickler
short-title: Firefox 15
slug: Mozilla/Firefox/Releases/15
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Firefox 15 wurde am 28. August 2012 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler nützlich sind, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler.

## Änderungen für Webentwickler

### HTML

- Das `size`-Attribut des {{HTMLElement("font")}}-Elements wird jetzt gemäß der HTML5-Spezifikation behandelt. Das bedeutet, dass alle ganzzahligen Werte größer als 10 oder kleiner als -10 nun als gleichwertig zu 10 bzw. -10 betrachtet werden.
- Unterstützung für die `font-weight` und `point-size` Attribute im `<font>`-Element wurde entfernt; diese waren nicht standardisiert und Gecko war die einzige Engine, die sie unterstützte.
- Der [Opus-Codec](https://www.opus-codec.org/) wird jetzt für Audio in Ogg-Containern für die HTML {{HTMLElement("audio")}} und {{HTMLElement("video")}}-Elemente unterstützt.
- Das {{HTMLElement("source")}}-Element unterstützt jetzt das `media`-Attribut.
- Die {{HTMLElement("audio")}} und {{HTMLElement("video")}}-Elemente unterstützen jetzt das `played`-Attribut, welches ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt bereitstellt, das die Zeitbereiche der Medien auflistet, die bisher abgespielt wurden.

### CSS

- Die {{cssxref("font-feature-settings")}}-Eigenschaft wurde auf die neueste Syntax aktualisiert: `font-feature-settings: "lnum" 1;`.
- Die CSS {{cssxref("text-transform")}}-Eigenschaft wurde erweitert, um Unicode-Ligaturzeichen (wie `ﬁ`) korrekt zu behandeln.
- Die CSS {{cssxref("word-break")}}-Eigenschaft wurde implementiert.
- Die {{cssxref("border-image")}}-Eigenschaft wurde aktualisiert, um der neuesten Spezifikation zu entsprechen, und die Präfixe wurden entfernt. ([bug 713643](https://bugzil.la/713643))
- Die `skew()` {{cssxref("transform")}}-Funktion, die in Firefox 14 entfernt wurde, wurde aufgrund der Kompatibilität mit bestehenden Websites wiederhergestellt. Autoren wird jedoch geraten, stattdessen die `skewX()` und `skewY()` Funktionen zu verwenden.
- Der Wert `plaintext` der CSS {{cssxref("unicode-bidi")}}-Eigenschaft gilt jetzt auch für Inline-Elemente. ([Firefox bug 746987](https://bugzil.la/746987))

### DOM

- Die DOM Events Level 3-Methoden [`KeyboardEvent.getModifierState()`](/de/docs/Web/API/KeyboardEvent/getModifierState) und [`MouseEvent.getModifierState()`](/de/docs/Web/API/MouseEvent/getModifierState), die es ermöglichen, den Zustand von Modifikatortasten wie „Ctrl“ oder „Shift“ abzufragen, wurden implementiert (Bugs [630811](https://bugzil.la/630811) und [731878](https://bugzil.la/731878)). Das Verhalten entspricht jedoch dem neuesten D3E-Entwurf, sodass einige Modifikatortastennamen anders als in IE sind ([Firefox bug 769190](https://bugzil.la/769190)).
- Bei Mausereignissen wurde die Unterstützung für die Abfrage des Zustands der Maustasten über das [`MouseEvent.buttons`](/de/docs/Web/API/MouseEvent)-Attribut implementiert.
- Bei Tastaturereignissen wurde die Unterstützung für die Abfrage des Tastaturstandorts (Standard, links oder rechts der Modifikatortaste, im Numpad) über das [KeyboardEvent.location](/de/docs/Web/API/KeyboardEvent/location)-Attribut implementiert ([Firefox bug 166240](https://bugzil.la/166240)).
- Der `KeyboardEvent.keycode`-Ergebnis wurde nach verbesserten Regeln berechnet, die auf Windows/Linux/Mac fast gleich waren. Sie sind jetzt auf einigen Tastaturlayouts verfügbar, die nicht ASCII-fähig sind, wie Arabisch, Kyrillisch, Thai usw. Siehe [das Dokument für virtuelle Tastencodes](/de/docs/Web/API/UI_Events/Keyboard_event_key_values).
- Die [`range.detach()`](/de/docs/Web/API/Range/detach)-Methode wurde in eine No-Op umgewandelt und wird möglicherweise in Zukunft entfernt.
- Die Methode `HTMLVideoElement.mozHasAudio()` wurde implementiert. Sie gibt an, ob ein Audiotrack mit einem bestimmten Videoelement verknüpft ist. ([bug 480376](https://bugzil.la/480376))
- Die `Performance` API hat eine neue Methode, [`now()`](/de/docs/Web/API/Performance/now), welche hochauflösende Timer des Typs `DOMHighResTimeStamp` unterstützt. ([bug 539095](https://bugzil.la/539095))
- Die [WebSMS API](https://web.archive.org/web/20210620092659/https://developer.mozilla.org/de/docs/Archive/B2G_OS/API/Mobile_Messaging_API) wurde aktualisiert und unterstützt jetzt ein `read`-Attribut, das angibt, ob eine SMS-Textnachricht gelesen oder ungelesen ist.
- Die [FileHandle API](https://wiki.mozilla.org/WebAPI/FileHandleAPI) wurde implementiert.
- Der [`Blob`](/de/docs/Web/API/Blob)-Konstruktor akzeptiert jetzt `ArrayBufferView` als Mitglied des `blobParts`-Parameters zusätzlich zu `ArrayBuffer`. ([bug 752402](https://bugzil.la/752402))
- Das `DeviceLightEvent`, spezifiziert im [Ambient Light Events Working Draft](https://w3c.github.io/ambient-light/), wurde implementiert.
- Die `DeviceProximityEvent` und `UserProximityEvent` [Proximity Events](https://w3c.github.io/proximity/) wurden implementiert.
- Die [`File`](/de/docs/Web/API/File) `lastModifiedDate`-Eigenschaft wurde implementiert. ([Firefox bug 673586](https://bugzil.la/673586))

### JavaScript

- Unterstützung für die [`DataView`](/de/docs/Web/JavaScript/Reference/Global_Objects/DataView)-Schnittstelle aus der Typed Arrays Spezifikation wurde hinzugefügt. Dies bietet einen low-level Zugriff auf die in einem [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) enthaltenen Daten.
- Unterstützung für neue ECMAScript 2015 Built-ins: [`Number.isNaN()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN), [`Number.toInteger()`](https://web.archive.org/web/20200204124547/https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toInteger), [`Number.isInteger()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger), [`Number.isFinite()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite) wurden hinzugefügt. ([bug 749818](https://bugzil.la/749818), [bug 761495](https://bugzil.la/761495), [bug 761480](https://bugzil.la/749818)).
- Unterstützung für ECMAScript 2015 [Standardparameter](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters) wurde hinzugefügt. ([bug 757676](https://bugzil.la/757676)).
- Unterstützung für ECMAScript 2015 [Rest-Parameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) wurde hinzugefügt. ([bug 574132](https://bugzil.la/574132)).

### WebGL

- Unterstützung für die [`WEBGL_compressed_texture_s3tc`](/de/docs/Web/API/WEBGL_compressed_texture_s3tc)-Erweiterung wurde hinzugefügt. Komprimierte Texturen reduzieren den benötigten Speicherplatz, um eine Textur auf der GPU zu speichern, was höhere Auflösungen oder mehr Texturen der gleichen Auflösung ermöglicht.

### MathML

- Mathematische Operatoren können jetzt herunterladbare Schriften verwenden, die mit {{cssxref("@font-face")}} angegeben sind. Dies ermöglicht, dass das [MathML-fonts-Add-on](https://addons.mozilla.org/en-US/firefox/addon/mathml-fonts/) auch mit dehnbaren Operatoren funktioniert.
- Das `selection`-Attribut des {{MathMLElement("maction")}} wird jetzt nur mit dem `toggle`-Aktionstyp berücksichtigt.
- [Veraltete namedspace binding](https://www.w3.org/TR/MathML3/chapter3.html#id.3.3.4.2.1) wurde entfernt ([Firefox bug 673759](https://bugzil.la/673759)).
- Die unterstützte Syntax für [Länge](/de/docs/Web/MathML/Reference/Values) und {{MathMLElement("mpadded")}}-Werte wurde näher an die in der MathML3-Spezifikation angegebene Syntax angepasst.
- Neue MathML-spiegelbare Operatoren für arabische Mathematik wurden dem Operator-Dictionary hinzugefügt ([Firefox bug 757125](https://bugzil.la/757125)).

### SVG

- Unterstützung für das {{SVGElement("view")}}-Element wurde hinzugefügt ([Firefox bug 512525](https://bugzil.la/512525)).

### Netzwerk

- Unterstützung für das SPDY v3-Protokoll wurde hinzugefügt. Es ist standardmäßig deaktiviert und kann aktiviert werden, indem die Präferenz `network.http.spdy.enabled.v3` auf true gesetzt wird. ([bug 737470](https://bugzil.la/737470))

## Änderungen für Add-on- und Mozilla-Entwickler

### Schnittstellenänderungen

- `nsIDOMWindowUtils`
  - : `aModifiers` von `sendMouseEvent()`, `sendTouchEvent()`, `sendMouseEventToWindow()`, `sendMouseScrollEvent()` und `sendKeyEvent()` unterstützt nun alle Modifikatortasten, die von [`KeyboardEvent.getModifierState()`](/de/docs/Web/API/KeyboardEvent/getModifierState) unterstützt werden. Verwenden Sie die `MODIFIER_*`-Werte. Und jetzt wurde der 5. Parameter von `sendKeyEvent()` von `boolean` auf `unsigned long` geändert. Zur Rückwärtskompatibilität, falls der Aufrufer `true` oder `false` übergibt, ändert sich das Verhalten nicht. Diese Änderung ermöglicht es den Aufrufern, den Standort der Taste zu spezifizieren.
- `nsIBrowserHistory`
  - : Die Methode `hidePage()` wurde nie implementiert und in dieser Version vollständig entfernt. Die `addPageWithDetails()`-Methode wurde ebenfalls entfernt als Teil der laufenden Arbeit, alle 'Places-APIs' asynchron zu gestalten; verwenden Sie `mozIAsyncHistory.updatePlaces()` stattdessen. Außerdem wurde das `count`-Attribut entfernt; es hatte seit einiger Zeit keine tatsächliche Anzahl zurückgegeben (es zeigte stattdessen an, ob Einträge existierten oder nicht). Sie können `nsINavHistoryService.hasHistoryEntries` stattdessen verwenden.
- `nsIDOMUtils`
  - : Die Methode `nsIDOMUtils.parseStyleSheet()` wurde hinzugefügt und ermöglicht das (Neu-)Parsen von Cascading Style Sheets.
- `nsIINIParserWriter`
  - : Die Methode `nsIINIParserWriter.writeFile()` akzeptiert jetzt eine `flags`-Eigenschaft. Derzeit bietet dies nur eine Option: Sie können nun angeben, dass die Datei im UTF-16-Format anstelle von UTF-8 geschrieben wird, um die Kompatibilität mit Windows und bestimmten Installationsprogrammen zu verbessern.

#### Neue Schnittstellen

- `nsISpeculativeConnect`
  - : Bietet eine Möglichkeit, der Netzwerkschicht anzudeuten, dass Sie in naher Zukunft wahrscheinlich eine Verbindung zu einer bestimmten URI öffnen möchten. Dadurch kann der Netzwerklayer den manchmal hochlatenten Prozess des Öffnens einer neuen Netzwerkverbindung vorab beginnen.

#### Entfernte Schnittstellen

Die folgenden Schnittstellen wurden entfernt:

- `nsIGlobalHistory`
