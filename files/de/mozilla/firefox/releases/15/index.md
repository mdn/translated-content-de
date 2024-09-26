---
title: Firefox 15 für Entwickler
slug: Mozilla/Firefox/Releases/15
l10n:
  sourceCommit: 1822cdf5a86574429c4c49883a402663ef16a4ef
---

{{FirefoxSidebar}}

Firefox 15 wurde am 28. August 2012 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Webentwickler, sondern auch für Firefox- und Gecko-Entwickler sowie Add-on-Entwickler nützlich sind.

## Änderungen für Webentwickler

### HTML

- Das `size`-Attribut des {{HTMLElement("font")}}-Elements wird jetzt gemäß der HTML5-Spezifikation behandelt. Das bedeutet, dass alle ganzzahligen Werte größer als 10 oder kleiner als -10 jetzt als gleichwertig zu 10 bzw. -10 betrachtet werden.
- Die Unterstützung für `font-weight`- und `point-size`-Attribute im `<font>`-Element wurde entfernt; diese waren nicht standardisiert und Gecko war die einzige Engine, die sie unterstützt hat.
- Der [Opus-Codec](https://www.opus-codec.org/) wird jetzt für Audio in Ogg-Containern für die HTML-{{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elemente unterstützt.
- Das {{HTMLElement("source")}}-Element unterstützt jetzt das `media`-Attribut.
- Die {{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elemente unterstützen jetzt das `played`-Attribut, welches ein {{domxref("TimeRanges")}}-Objekt bereitstellt, das die bereits wiedergegebenen Zeitbereiche des Mediums auflistet.

### CSS

- Die {{cssxref("font-feature-settings")}}-Eigenschaft wurde auf die neueste Syntax aktualisiert: `font-feature-settings: "lnum" 1;`
- Die CSS-{{cssxref("text-transform")}}-Eigenschaft wurde erweitert, um Unicode-Ligaturzeichen (wie `ﬁ`) korrekt zu verarbeiten.
- Die CSS-{{cssxref("word-break")}}-Eigenschaft wurde implementiert.
- Die {{cssxref("border-image")}}-Eigenschaft wurde aktualisiert, um der neuesten Spezifikation zu entsprechen, und Eigenschaften wurden entspr. von Präfixen befreit. ([bug 713643](https://bugzil.la/713643))
- Die `skew()`-{{cssxref("transform")}}-Funktion, die in Firefox 14 entfernt wurde, wurde aufgrund bestehender Seitenskompatibilität wiederhergestellt. Autoren wird jedoch empfohlen, stattdessen die `skewX()`- und `skewY()`-Funktionen zu verwenden.
- Der Wert `plaintext` der CSS-{{cssxref("unicode-bidi")}}-Eigenschaft gilt jetzt auch für Inline-Elemente. ([Firefox bug 746987](https://bugzil.la/746987)).

### DOM

- Die DOM-Events Level 3 Methoden [`KeyboardEvent.getModifierState()`](/de/docs/Web/API/KeyboardEvent#getmodifierstate%28%29) und [`MouseEvent.getModifierState()`](/de/docs/Web/API/MouseEvent#getmodifierstate%28%29), die es Ihnen ermöglichen, den Zustand von Modifikatortasten wie `Ctrl` oder `Shift` abzufragen, wurden implementiert (Bugs [630811](https://bugzil.la/630811) und [731878](https://bugzil.la/731878)). Das Verhalten entspricht jedoch dem neuesten D3E-Entwurf. Daher sind einige Modifikatortastennamen unterschiedlich zu IE ([Firefox bug 769190](https://bugzil.la/769190)).
- Bei Mausereignissen wurde die Unterstützung für die Abfrage des Zustands der Maustasten mithilfe des [`MouseEvent.buttons`](/de/docs/Web/API/MouseEvent)-Attributs implementiert.
- Bei Tastaturereignissen wurde die Unterstützung für die Abfrage der Tastenposition (Standard, links oder rechts einer Modifikatortaste, im Numpad) mithilfe des [KeyboardEvent.location](/de/docs/Web/API/KeyboardEvent#attributes_location)-Attributs implementiert ([Firefox bug 166240](https://bugzil.la/166240)).
- Das Ergebnis von `KeyboardEvent.keycode` wurde aus besseren Regeln berechnet, die auf Windows/Linux/Mac nahezu gleich waren. Jetzt sind sie auf einigen Tastaturlayouts verfügbar, die auf Linux und Mac nicht ASCII-fähig sind, wie Arabisch, Kyrillisch, Thai und so weiter. Siehe [das Dokument für virtuelle Tastencodes](/de/docs/Web/API/KeyboardEvent#virtual_key_codes).
- Die Methode [`range.detach()`](/de/docs/Web/API/Range/detach) wurde in eine No-Op umgewandelt und wird möglicherweise in Zukunft entfernt.
- Die Methode `HTMLVideoElement.mozHasAudio()` wurde implementiert. Sie gibt an, ob ein Audio-Track mit einem gegebenen Videoelement verknüpft ist. ([bug 480376](https://bugzil.la/480376))
- Die `Performance`-API hat eine neue Methode, [`now()`](/de/docs/Web/API/Performance/now), die hochauflösende Timer vom Typ `DOMHighResTimeStamp` unterstützt. ([bug 539095](https://bugzil.la/539095)).
- Die [WebSMS API](https://web.archive.org/web/20210620092659/https://developer.mozilla.org/de/docs/Archive/B2G_OS/API/Mobile_Messaging_API) wurde aktualisiert und unterstützt jetzt ein `read`-Attribut, das angibt, ob eine SMS-Textnachricht gelesen oder ungelesen ist.
- Die [FileHandle API](https://wiki.mozilla.org/WebAPI/FileHandleAPI) wurde implementiert.
- Der [`Blob`](/de/docs/Web/API/Blob)-Konstruktor akzeptiert nun `ArrayBufferView` als Mitglied des `blobParts`-Parameters zusätzlich zu `ArrayBuffer`. ([bug 752402](https://bugzil.la/752402))
- Das `DeviceLightEvent`, das im [Ambient Light Events Working Draft](https://www.w3.org/TR/ambient-light/) spezifiziert ist, wurde implementiert.
- Die `DeviceProximityEvent` und `UserProximityEvent` [Proximity Events](https://www.w3.org/TR/proximity/) wurden implementiert.
- Die {{domxref("File")}}-`lastModifiedDate`-Eigenschaft wurde implementiert. ([Firefox bug 673586](https://bugzil.la/673586))

### JavaScript

- Unterstützung für die [`DataView`](/de/docs/Web/JavaScript/Reference/Global_Objects/DataView)-Schnittstelle aus der Typed Arrays-Spezifikation wurde hinzugefügt. Dies bietet einen Low-Level-Zugriff auf die in einem [`ArrayBuffer`](/de/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) enthaltenen Daten.
- Unterstützung für neue ECMAScript 2015-Built-ins: [`Number.isNaN()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN), [`Number.toInteger()`](https://web.archive.org/web/20200204124547/https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Number/toInteger), [`Number.isInteger()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger), [`Number.isFinite()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite) wurde hinzugefügt. ([bug 749818](https://bugzil.la/749818), [bug 761495](https://bugzil.la/761495), [bug 761480](https://bugzil.la/749818)).
- Unterstützung für ECMAScript 2015 [Standardparameter](/de/docs/Web/JavaScript/Reference/Functions/Default_parameters) wurde hinzugefügt. ([bug 757676](https://bugzil.la/757676)).
- Unterstützung für ECMAScript 2015 [Rest-Parameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) wurde hinzugefügt. ([bug 574132](https://bugzil.la/574132)).

### WebGL

- Unterstützung für die [`WEBGL_compressed_texture_s3tc`](/de/docs/Web/API/WebGL_API/Using_Extensions#webgl_compressed_texture_s3tc)-Erweiterung wurde hinzugefügt. Komprimierte Texturen reduzieren die Menge des Speichers, der benötigt wird, um eine Textur auf der GPU zu speichern, was höhere Auflösungen oder mehr Texturen gleicher Auflösung ermöglicht.

### MathML

- Mathematische Operatoren können jetzt herunterladbare Schriftarten verwenden, die mit {{cssxref("@font-face")}} spezifiziert sind. Dies ermöglicht dem [MathML-Fonts Add-on](https://addons.mozilla.org/en-US/firefox/addon/mathml-fonts/) auch mit dehnbaren Operatoren zu arbeiten.
- Das `selection`-Attribut des {{MathMLElement("maction")}} wird jetzt nur mit dem `toggle`-Aktions-Typ berücksichtigt.
- [Veraltete Namedspace-Bindung](https://www.w3.org/TR/MathML3/chapter3.html#id.3.3.4.2.1) wurde entfernt ([Firefox bug 673759](https://bugzil.la/673759)).
- Unterstützte Syntax für [Länge](/de/docs/Web/MathML/Values) und {{MathMLElement("mpadded")}}-Werte wurde näher an die im MathML3 spezifizierten gebracht.
- Neue MathML-Spiegelbare Operatoren für Arabische Mathematik wurden dem Operator-Wörterbuch hinzugefügt ([Firefox bug 757125](https://bugzil.la/757125)).

### SVG

- Unterstützung für das {{SVGElement("view")}}-Element wurde hinzugefügt ([Firefox bug 512525](https://bugzil.la/512525)).

### Netzwerk

- Unterstützung für das SPDY v3-Protokoll wurde hinzugefügt. Es ist standardmäßig deaktiviert und kann aktiviert werden, indem die Voreinstellung `network.http.spdy.enabled.v3` auf true gesetzt wird. ([bug 737470](https://bugzil.la/737470))

## Änderungen für Add-on- und Mozilla-Entwickler

### Schnittstellenänderungen

- `nsIDOMWindowUtils`
  - : `aModifiers` von `sendMouseEvent()`, `sendTouchEvent()`, `sendMouseEventToWindow()`, `sendMouseScrollEvent()` und `sendKeyEvent()` unterstützt alle Modifikatortasten, die von [`KeyboardEvent.getModifierState()`](/de/docs/Web/API/KeyboardEvent#getmodifierstate%28%29) unterstützt werden. Verwenden Sie `MODIFIER_*`-Werte. Und jetzt wurde der fünfte Parameter von `sendKeyEvent()` von `boolean` in `unsigned long` geändert. Für die Rückwärtskompatibilität ändert sich das Verhalten nicht, wenn der Aufrufer `true` oder `false` übergibt. Diese Änderung ermöglicht es den Aufrufern, die Position der Taste anzugeben.
- `nsIBrowserHistory`
  - : Die `hidePage()`-Methode wurde nie implementiert und in dieser Version vollständig entfernt. Die `addPageWithDetails()`-Methode wurde ebenfalls entfernt als Teil der laufenden Arbeit, um alle 'Places APIs' asynchron zu machen; verwenden Sie stattdessen `mozIAsyncHistory.updatePlaces()`. Zudem wurde das `count`-Attribut entfernt; es hatte seit einiger Zeit keine tatsächliche Anzahl mehr zurückgegeben (stattdessen zeigte es an, ob Einträge vorhanden waren oder nicht). Sie können `nsINavHistoryService.hasHistoryEntries` verwenden.
- `inIDOMUtils`
  - : Die `inlDOMUtils.parseStyleSheet()`-Methode wurde hinzugefügt und ermöglicht das (erneute) Parsen von Cascading Style Sheets.
- `nsIINIParserWriter`
  - : Die `nsIINIParserWriter.writeFile()`-Methode akzeptiert jetzt eine `flags`-Eigenschaft. Diese bietet momentan nur eine Option: Sie können nun dem Skript auferlegen, die Datei im UTF-16-Format anstelle von UTF-8 zu schreiben, für bessere Kompatibilität mit Windows und bestimmten Installationsprogrammen.

#### Neue Schnittstellen

- `nsISpeculativeConnect`
  - : Bietet eine Möglichkeit, der Netzwerkebene einen Hinweis zu geben, dass Sie wahrscheinlich in naher Zukunft eine Verbindung zu einer angegebenen URI öffnen werden. Dies ermöglicht es der Netzwerkebene, den manchmal latenzintensiven Prozess des Öffnens einer neuen Netzwerkverbindung im Voraus zu beginnen.

#### Entfernte Schnittstellen

Die folgenden Schnittstellen wurden entfernt.

- `nsIGlobalHistory`

## Siehe auch

{{Firefox_for_developers}}