---
title: Firefox 144 für Entwickler
short-title: Firefox 144 (Beta)
slug: Mozilla/Firefox/Releases/144
l10n:
  sourceCommit: b4ee45c20d4288a44fda5f8bdd93aa215d0d1c80
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 144, die Entwickler betreffen. Firefox 144 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [14. Oktober 2025](https://whattrainisitnow.com/release/?version=144) veröffentlicht.

> [!NOTE]
> Die Release-Notes für diese Firefox-Version sind noch in Bearbeitung.

## Änderungen für Webentwickler

### HTML

- Die Attribute [`command`](/de/docs/Web/HTML/Reference/Elements/button#command) und [`commandfor`](/de/docs/Web/HTML/Reference/Elements/button#commandfor) des {{htmlelement("button")}}-Elements werden jetzt unterstützt. Das `command`-Attribut ermöglicht es, die auszuführende Aktion zu definieren, und das `commandfor`-Attribut erlaubt es, die Schaltfläche mit einem anderen Element zu verknüpfen, auf das der Befehl wirkt. Der Befehl kann ein vordefinierter Wert wie `close` oder ein [benutzerdefinierter Wert](/de/docs/Web/HTML/Reference/Elements/button#custom_values) sein, der von Ihnen definiert wird. ([Firefox Bug 1983523](https://bugzil.la/1983523)).

### MathML

#### Entfernungen

- Die Unterstützung für die veraltete MathML STIXGeneral-Schriftart wurde entfernt. Die Einstellung `mathml.stixgeneral_operator_stretching.disabled` wurde ebenfalls entfernt. ([Firefox Bug 1336058](https://bugzil.la/1336058)).

### CSS

- [CSS-Funktionen](/de/docs/Web/API/View_Transition_API#css_additions) für Ansichtsübergänge in Single-Page-Anwendungen ({{Glossary("SPA", "SPAs")}}) werden jetzt unterstützt. Dies bietet eine Möglichkeit, die Teile einer Ansichtsübergangsanimation zu gestalten. ([Firefox Bug 1985809](https://bugzil.la/1985809)). Diese beinhalten:
  - {{CSSXRef(":active-view-transition")}} Pseudoklasse
  - {{CSSXRef("view-transition-class")}} Eigenschaft
  - {{CSSXRef("view-transition-name")}} Eigenschaft
  - {{CSSXRef("::view-transition")}} Pseudoelement
  - {{CSSXRef("::view-transition-group()")}} Pseudoelement
  - {{CSSXRef("::view-transition-image-pair()")}} Pseudoelement
  - {{CSSXRef("::view-transition-new()")}} Pseudoelement
  - {{CSSXRef("::view-transition-old()")}} Pseudoelement

### JavaScript

- Die Instanzmethoden {{jsxref("Map.prototype.getOrInsert()")}}, {{jsxref("Map.prototype.getOrInsertComputed()")}}, {{jsxref("WeakMap.prototype.getOrInsert()")}} und {{jsxref("WeakMap.prototype.getOrInsertComputed()")}} werden jetzt unterstützt.
  Alle Methoden geben den Wert zurück, der einem angegebenen Schlüssel entspricht, wenn der Schlüssel vorhanden ist.
  Wenn der Schlüssel nicht vorhanden ist, fügt `getOrInsert()` ein Element mit einem gegebenen Standardwert für den Schlüssel ein und gibt es zurück, während `getOrInsertComputed()` einen Wert einfügt und zurückgibt, der in einer übergebenen Rückruffunktion berechnet wird. ([Firefox Bug 1979917](https://bugzil.la/1979917)).

### APIs

- Die Methoden [`lock()`](/de/docs/Web/API/ScreenOrientation/lock) und [`unlock()`](/de/docs/Web/API/ScreenOrientation/unlock) der [`ScreenOrientation`](/de/docs/Web/API/ScreenOrientation)-Schnittstelle werden jetzt für Android und Windows-Tablets unterstützt. ([Firefox Bug 1983483](https://bugzil.la/1983483))

- Die [View Transition API](/de/docs/Web/API/View_Transition_API) wird jetzt für {{Glossary("SPA", "SPAs (Single-Page-Anwendungen)")}} unterstützt. Dies bietet einen Mechanismus, um auf einfache Weise animierte Übergänge zwischen verschiedenen Ansichten einer Website zu erstellen. ([Firefox Bug 1985809](https://bugzil.la/1985809)).
- Die [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties)-Schnittstelle des [CSS Object Model (CSSOM)](/de/docs/Web/API/CSS_Object_Model) ist jetzt implementiert (dies wurde von einer nicht standardmäßigen Schnittstelle `CSS2Properties` umbenannt). Die neue Schnittstelle ist vorhanden, wird aber noch nicht verwendet. ([Firefox Bug 1919582](https://bugzil.la/1919582)).

- Die [`interactionId`](/de/docs/Web/API/PerformanceEventTiming/interactionId)-Eigenschaft der [`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming)-Schnittstelle ist ein eindeutiger Bezeichner, der zugehörige Ereignisse einer einzigen Benutzerinteraktion zuordnet. Dies kann verwendet werden, um die Metrik {{Glossary("Interaction_to_next_paint", "Interaction to next paint")}} zu berechnen, die hilft, die Reaktionsfähigkeit auf Benutzerinteraktionen während der gesamten Lebensdauer einer Seite zu analysieren. ([Firefox Bug 1956809](https://bugzil.la/1956809)).

#### DOM

- Die Methode `moveBefore()` wird jetzt von den Schnittstellen [`Element`](/de/docs/Web/API/Element/moveBefore), [`DocumentFragment`](/de/docs/Web/API/DocumentFragment/moveBefore) und [`Document`](/de/docs/Web/API/Document/moveBefore) unterstützt. Dies ermöglicht das Verschieben eines direkten Kind-Elements des Objekts vor ein anderes seiner Kind-Elemente. Im Gegensatz zu [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore) behalten verschobene Elemente ihren Zustand bei. ([Firefox Bug 1983688](https://bugzil.la/1983688)).

#### Medien, WebRTC und Web Audio

- Cross-Origin-{{htmlelement("iframe")}}s erfordern jetzt entweder eine Benutzerinteraktion ({{Glossary("sticky_activation", "sticky activation")}}) oder eine explizite Erlaubnis, um die oberste Seite mit `window.top.location` umzuleiten. Siehe [Top navigation in cross-origin frames](/de/docs/Web/HTML/Reference/Elements/iframe#top_navigation_in_cross-origin_frames) für weitere Informationen. ([Firefox Bug 1419501](https://bugzil.la/1419501)).
- [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Instanzen sind jetzt [übertragbare Objekte](/de/docs/Web/API/Web_Workers_API/Transferable_objects) und können daher an [Arbeiter](/de/docs/Web/API/Worker) übergeben werden. ([Firefox Bug 1209163](https://bugzil.la/1209163)).
- Das [`closing` event](/de/docs/Web/API/RTCDataChannel/closing_event) und der `onclosing()`-Ereignis-Handler werden jetzt in der [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Schnittstelle unterstützt. ([Firefox Bug 1611953](https://bugzil.la/1611953)).
- Die Methoden [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) und [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) der [`MediaDevices`](/de/docs/Web/API/MediaDevices)-Schnittstelle unterstützen jetzt die [`resizeMode`](/de/docs/Web/API/MediaTrackConstraints#resizemode)-Einschränkung.
  Diese Einschränkung ermöglicht es Entwicklern, Videos anzufordern, die anderen Einschränkungen wie Auflösung und Bildrate entsprechen, auch wenn die angeforderten Einschränkungen von der zugrunde liegenden Hardware nicht unterstützt werden.
  Der Browser kann dann das Video, das von einer Kamera aufgenommen wird, zuschneiden, verkleinern oder die Bildrate reduzieren oder das Video, das von einem Bildschirm oder Fenster aufgenommen wird, verkleinern (aber nicht zuschneiden). ([Firefox Bug 1286945](https://bugzil.la/1286945)).

#### Entfernungen

- Die folgenden veralteten und nicht standardmäßigen Ereignisse wurden entfernt: [`afterscriptexecute` event](/de/docs/Web/API/Document/afterscriptexecute_event) und [`beforescriptexecute` event](/de/docs/Web/API/Document/beforescriptexecute_event) der `Document`-Schnittstelle sowie das [`afterscriptexecute` event](/de/docs/Web/API/Element/afterscriptexecute_event) und [`beforescriptexecute` event](/de/docs/Web/API/Element/beforescriptexecute_event) der `Element`-Schnittstelle. ([Firefox Bug 1584269](https://bugzil.la/1584269)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Das neue `browsingContext.downloadWillBegin`-Ereignis wurde implementiert, das ausgelöst wird, wenn ein neuer Download initiiert wird, entweder durch Klicken auf einen Link mit dem `download`-Attribut oder als Antwort auf eine Netzwerkanforderung mit einem `Content-Disposition`-Header, der einen Datei-Anhang angibt ([Firefox Bug 1874365](https://bugzil.la/1874365)).

- Der neue `emulation.setScreenOrientationOverride`-Befehl wurde implementiert, der es Clients ermöglicht, verschiedene Bildschirmorientierungen zu emulieren. Dieser Befehl ist nicht auf mobile Geräte beschränkt, sondern funktioniert auch für Desktop-Anwendungen ([Firefox Bug 1974167](https://bugzil.la/1974167)).

- Der neue `emulation.setTimezoneOverride`-Befehl wurde implementiert, der es Clients erlaubt, eine bestimmte Zeitzoneneinstellung zu simulieren ([Firefox Bug 1978027](https://bugzil.la/1978027)).

- Der `emulation.setLocaleOverride`-Befehl wurde erweitert, um die angegebenen Einstellungen auch auf Sandboxes anzuwenden, die zuvor über WebDriver BiDi erstellt wurden ([Firefox Bug 1983807](https://bugzil.la/1983807)).

- Ein Fehler wurde behoben, bei dem das Locale-Override, das über `emulation.setLocaleOverride` gesetzt wurde, manchmal fälschlicherweise zwischen verschiedenen Browsing-Kontexten innerhalb desselben Prozesses geteilt wurde ([Firefox Bug 1980211](https://bugzil.la/1980211)).

- Der `browsingContext.navigate`-Befehl wurde verbessert, um `NS_BINDING_ABORTED`-Fehler zu vermeiden, die durch Umleitungen oder Unterbrechungen nach dem bereits erfolgten Navigationsbefehl verursacht werden ([Firefox Bug 1914407](https://bugzil.la/1914407)).

#### Marionette

- Der [`Scroll Into View` WebDriver-Algorithmus](https://w3c.github.io/webdriver/#dfn-scrolls-into-view), wie er von mehreren klassischen WebDriver-Befehlen in Marionette verwendet wird, wurde zurückgesetzt, um immer das `instant`-Scroll-Verhalten zu verwenden. Dies macht die Änderung rückgängig, die in Firefox 97 eingeführt wurde, welche das Verhalten auf `auto` umgestellt hatte. Die Rücknahme adressiert potenzielle Race-Bedingungen beim Scrollen von Elementen, die das `smooth`-Verhalten verwenden ([Firefox Bug 1986238](https://bugzil.la/1986238)).

## Änderungen für Add-on-Entwickler

- Fügt die Möglichkeit hinzu, den Stil-Ursprung für CSS-Injektionen vom [`"content_scripts"`-Manifest-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) in {{WebExtAPIRef("scripting.registerContentScripts()")}} mit der `cssOrigin`-Eigenschaft auf {{WebExtAPIRef("scripting.RegisteredContentScript")}} und der `cssOrigin`-Eigenschaft in {{WebExtAPIRef("contentScripts.register")}} anzugeben. Der Stil-Ursprung kann `"user"` sein, um das CSS als Benutzer-Stylesheet hinzuzufügen, oder `"author"`, um es als Autoren-Stylesheet hinzuzufügen. Standard ist der `"author"`-Ursprung. Diese Eigenschaften sind nicht auf die Groß-/Kleinschreibung angewiesen. Darüber hinaus ist der Wert der [`origin`](/de/docs/Mozilla/Add-ons/WebExtensions/API/scripting/insertCSS#origin)-Eigenschaft von {{WebExtAPIRef("scripting.insertCSS()")}} jetzt ebenfalls nicht auf die Groß-/Kleinschreibung angewiesen. ([Firefox Bug 1679997](https://bugzil.la/1679997))
- Fügt Unterstützung für {{WebExtAPIRef("storage.StorageArea.getBytesInUse()","getBytesInUse()")}} zu {{WebExtAPIRef("storage.local")}} und {{WebExtAPIRef("storage.managed")}} hinzu. ([Firefox Bug 1385832](https://bugzil.la/1385832))

## Experimentelle Web-Funktionen

Diese Funktionen sind in Firefox 144 enthalten, aber standardmäßig deaktiviert. Um mit ihnen zu experimentieren, suchen Sie auf der `about:config`-Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`. Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **datetime-local Zeitwahler:** `dom.forms.datetime.timepicker`.

  HTML `datetime-local` Eingabeelemente ([`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local)) beinhalten jetzt einen Zeitwahler ([Firefox Bug 1726108](https://bugzil.la/1726108)).
