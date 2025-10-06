---
title: Firefox 144 für Entwickler
short-title: Firefox 144 (Beta)
slug: Mozilla/Firefox/Releases/144
l10n:
  sourceCommit: 50d87c226cf66d76bb8fac6fdae9592c5c674ad4
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 144, die Entwickler betreffen.
Firefox 144 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [14. Oktober 2025](https://whattrainisitnow.com/release/?version=144) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Arbeit.

<!-- Autoren: Bitte heben Sie alle Überschriften hervor, für die Sie Hinweise schreiben -->

## Änderungen für Webentwickler

<!-- ### Entwicklertools -->

<!-- ### HTML -->

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernungen -->

### MathML

#### Entfernungen

- Die Unterstützung für die veraltete MathML STIXGeneral-Schriftart wurde nun entfernt. Die Einstellung `mathml.stixgeneral_operator_stretching.disabled` wurde ebenfalls entfernt. ([Firefox-Bug 1336058](https://bugzil.la/1336058)).

### CSS

- [CSS-Funktionen](/de/docs/Web/API/View_Transition_API#css_additions) für Sichtwechsel in Single-Page-Anwendungen ({{Glossary("SPA", "SPAs")}}) werden jetzt unterstützt. Dies bietet eine Möglichkeit, die Teile einer Sichtwechsel-Animation zu gestalten. ([Firefox-Bug 1985809](https://bugzil.la/1985809)). Diese beinhalten:
  - {{CSSXRef(":active-view-transition")}} Pseudoklasse
  - {{CSSXRef("view-transition-class")}} Eigenschaft
  - {{CSSXRef("view-transition-name")}} Eigenschaft
  - {{CSSXRef("::view-transition")}} Pseudoelement
  - {{CSSXRef("::view-transition-group()")}} Pseudoelement
  - {{CSSXRef("::view-transition-image-pair()")}} Pseudoelement
  - {{CSSXRef("::view-transition-new()")}} Pseudoelement
  - {{CSSXRef("::view-transition-old()")}} Pseudoelement

<!-- ### SVG -->

<!-- #### Entfernungen -->

<!-- ### CSS -->

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernungen -->

<!-- ### JavaScript -->

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernungen -->

<!-- ### HTTP -->

<!-- #### Entfernungen -->

<!-- ### Sicherheit -->

<!-- #### Entfernungen -->

### APIs

- Die Methoden [`lock()`](/de/docs/Web/API/ScreenOrientation/lock) und [`unlock()`](/de/docs/Web/API/ScreenOrientation/unlock) des [`ScreenOrientation`](/de/docs/Web/API/ScreenOrientation) Interface werden jetzt für Android und Windows-Tablets unterstützt. ([Firefox-Bug 1983483](https://bugzil.la/1983483))

- Die [View Transition API](/de/docs/Web/API/View_Transition_API) wird jetzt für {{Glossary("SPA", "SPAs (Single-Page-Anwendungen)")}} unterstützt. Dies bietet einen Mechanismus zur einfachen Erstellung animierter Übergänge zwischen verschiedenen Website-Ansichten. ([Firefox-Bug 1985809](https://bugzil.la/1985809)).
- Das [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) Interface des [CSS Object Model (CSSOM)](/de/docs/Web/API/CSS_Object_Model) ist jetzt implementiert (dies wurde von einem nicht standardmäßigen Interface `CSS2Properties` umbenannt). Das neue Interface ist vorhanden, wird aber noch nicht verwendet. ([Firefox-Bug 1919582](https://bugzil.la/1919582)).

#### DOM

- Die Methode `moveBefore()` wird nun auf den Schnittstellen [`Element`](/de/docs/Web/API/Element/moveBefore), [`DocumentFragment`](/de/docs/Web/API/DocumentFragment/moveBefore) und [`Document`](/de/docs/Web/API/Document/moveBefore) unterstützt. Dies ermöglicht das Verschieben eines unmittelbaren Kindelements des Objekts vor ein anderes seiner Kindelemente. Im Gegensatz zu [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore) behalten verschobene Elemente ihren Zustand. ([Firefox-Bug 1983688](https://bugzil.la/1983688)).

#### Medien, WebRTC und Web Audio

- Cross-Origin-{{htmlelement("iframe")}}s erfordern jetzt entweder eine Benutzerinteraktion ({{Glossary("sticky_activation", "sticky activation")}}) oder eine explizite Berechtigung, um die oberste Seite mit `window.top.location` umzuleiten.
  Siehe [Top-Navigation in Cross-Origin-Frames](/de/docs/Web/HTML/Reference/Elements/iframe#top_navigation_in_cross-origin_frames) für weitere Informationen. ([Firefox-Bug 1419501](https://bugzil.la/1419501)).
- [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Instanzen sind jetzt [transferierbare Objekte](/de/docs/Web/API/Web_Workers_API/Transferable_objects) und können daher an [Workers](/de/docs/Web/API/Worker) übergeben werden. ([Firefox-Bug 1209163](https://bugzil.la/1209163)).
- Das [`closing` event](/de/docs/Web/API/RTCDataChannel/closing_event) und der `onclosing()` Ereignishandler werden jetzt auf der [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) Schnittstelle unterstützt. ([Firefox-Bug 1611953](https://bugzil.la/1611953)).
- Die Methoden [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) und [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) der [`MediaDevices`](/de/docs/Web/API/MediaDevices) Schnittstelle unterstützen jetzt die [`resizeMode`](/de/docs/Web/API/MediaTrackConstraints#resizemode) Einschränkung.
  Diese Einschränkung ermöglicht es Entwicklern, Video anzufordern, das zu anderen Einschränkungen wie Auflösung und Bildrate passt, auch wenn die angeforderten Einschränkungen nicht von der zugrunde liegenden Hardware unterstützt werden.
  Der Browser kann dann das Video, das von einer Kamera aufgenommen wurde, zuschneiden, verkleinern oder die Bildrate verringern oder das Video, das von einem Bildschirm oder Fenster aufgenommen wurde, verkleinern (aber nicht zuschneiden). ([Firefox-Bug 1286945](https://bugzil.la/1286945)).

<!-- #### Entfernungen -->

<!-- ### WebAssembly -->

<!-- #### Entfernungen -->

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- Einführung des neuen `browsingContext.downloadWillBegin` Ereignisses, das ausgelöst wird, wenn ein neuer Download gestartet wird, entweder durch Klicken auf einen Link mit dem `download` Attribut oder als Antwort auf eine Netzwerk-Anforderung mit einem `Content-Disposition` Header, der einen Datei-Attachment angibt ([Firefox-Bug 1874365](https://bugzil.la/1874365)).

- Implementierung des neuen `emulation.setScreenOrientationOverride` Befehls, der es Kunden ermöglicht, verschiedene Bildschirmorientierungen zu emulieren. Dieser Befehl ist nicht auf mobile Geräte beschränkt, sondern funktioniert auch für Desktop-Anwendungen ([Firefox-Bug 1974167](https://bugzil.la/1974167)).

- Implementierung des neuen `emulation.setTimezoneOverride` Befehls, der es Kunden ermöglicht, eine bestimmte Zeitzoneneinstellung zu simulieren ([Firefox-Bug 1978027](https://bugzil.la/1978027)).

- Verbesserung des `emulation.setLocaleOverride` Befehls, um die angegebenen Einstellungen auch auf Sandkästen anzuwenden, die zuvor über WebDriver BiDi erstellt wurden ([Firefox-Bug 1983807](https://bugzil.la/1983807)).

- Behebung eines Fehlers, bei dem die Locale-Überschreibung, die über `emulation.setLocaleOverride` festgelegt wurde, manchmal fälschlicherweise zwischen verschiedenen Browsing-Kontexten innerhalb desselben Prozesses geteilt wurde ([Firefox-Bug 1980211](https://bugzil.la/1980211)).

- Verbesserung des `browsingContext.navigate` Befehls zur Vermeidung von `NS_BINDING_ABORTED` Fehlern, die durch Weiterleitungen oder Unterbrechungen entstehen, nachdem die Navigation bereits ausgeführt wurde ([Firefox-Bug 1914407](https://bugzil.la/1914407)).

#### Marionette

- Rückgängigmachung des [`Scroll Into View` WebDriver Algorithmus](https://w3c.github.io/webdriver/#dfn-scrolls-into-view), der von mehreren klassischen WebDriver-Befehlen in Marionette verwendet wird, um immer das `instant` Scroll-Verhalten zu verwenden. Dies macht die in Firefox 97 eingeführte Änderung rückgängig, die das Verhalten auf `auto` umgestellt hatte. Die Rückgängigmachung behebt potenzielle Race-Bedingungen beim Scrollen von Elementen, die `smooth` Verhalten verwenden ([Firefox-Bug 1986238](https://bugzil.la/1986238)).

## Änderungen für Add-on-Entwickler

- Fügt die Möglichkeit hinzu, den Stil-Ursprung für CSS-Injektionen von [`"content_scripts"` Manifest-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) in {{WebExtAPIRef("scripting.registerContentScripts()")}} mit der `cssOrigin` Eigenschaft auf {{WebExtAPIRef("scripting.RegisteredContentScript")}} und der `cssOrigin` Eigenschaft in {{WebExtAPIRef("contentScripts.register")}} zu spezifizieren. Der Stil-Ursprung kann `"user"` sein, um das CSS als Benutzer-Stylesheet hinzuzufügen, oder `"author"`, um es als Autor-Stylesheet hinzuzufügen. Standardmäßig zum `"author"` Ursprung. Diese Eigenschaften sind nicht case-sensitiv. Darüber hinaus ist der Wert der [`origin`](/de/docs/Mozilla/Add-ons/WebExtensions/API/scripting/insertCSS#origin) Eigenschaft von {{WebExtAPIRef("scripting.insertCSS()")}} jetzt case-insensitiv. ([Firefox-Bug 1679997](https://bugzil.la/1679997))
- Fügt Unterstützung für {{WebExtAPIRef("storage.StorageArea.getBytesInUse()","getBytesInUse()")}} zu {{WebExtAPIRef("storage.local")}} und {{WebExtAPIRef("storage.managed")}} hinzu. ([Firefox-Bug 1385832](https://bugzil.la/1385832))

<!-- ### Entfernungen -->

<!-- ### Sonstiges -->

## Experimentelle Webfunktionen

Diese Funktionen sind in Firefox 144 verfügbar, aber standardmäßig deaktiviert.
Um sie auszuprobieren, suchen Sie auf der `about:config` Seite nach der entsprechenden Einstellung und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **Datetime-Local-Zeit-Auswahl:** `dom.forms.datetime.timepicker`.

  HTML datetime-local Eingabeelemente ([`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local)) enthalten jetzt eine Zeitauswahl ([Firefox-Bug 1726108](https://bugzil.la/1726108)).
