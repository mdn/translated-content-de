---
title: Firefox 144 für Entwickler
short-title: Firefox 144 (Beta)
slug: Mozilla/Firefox/Releases/144
l10n:
  sourceCommit: 90fa4d03ef84f89b0ece79fa6658dfec409374a2
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 144, die Entwickler betreffen.
Firefox 144 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [14. Oktober 2025](https://whattrainisitnow.com/release/?version=144) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Arbeit.

## Änderungen für Webentwickler

### MathML

#### Entfernt

- Die Unterstützung für die veraltete MathML STIXGeneral-Schriftart wurde nun entfernt. Die Einstellung `mathml.stixgeneral_operator_stretching.disabled` wurde ebenfalls entfernt. ([Firefox Bug 1336058](https://bugzil.la/1336058)).

### CSS

- [CSS-Features](/de/docs/Web/API/View_Transition_API#css_additions) für Ansichtstransitionen in Single-Page-Anwendungen ({{Glossary("SPA", "SPA")}}) werden jetzt unterstützt. Dies bietet eine Möglichkeit, die Teile einer Ansichtstransitionsanimation zu gestalten. ([Firefox Bug 1985809](https://bugzil.la/1985809)). Diese umfassen:
  - {{CSSXRef(":active-view-transition")}} Pseudo-Klasse
  - {{CSSXRef("view-transition-class")}} Eigenschaft
  - {{CSSXRef("view-transition-name")}} Eigenschaft
  - {{CSSXRef("::view-transition")}} Pseudo-Element
  - {{CSSXRef("::view-transition-group()")}} Pseudo-Element
  - {{CSSXRef("::view-transition-image-pair()")}} Pseudo-Element
  - {{CSSXRef("::view-transition-new()")}} Pseudo-Element
  - {{CSSXRef("::view-transition-old()")}} Pseudo-Element

### APIs

- Die Methoden [`lock()`](/de/docs/Web/API/ScreenOrientation/lock) und [`unlock()`](/de/docs/Web/API/ScreenOrientation/unlock) der [`ScreenOrientation`](/de/docs/Web/API/ScreenOrientation) Schnittstelle werden jetzt für Android und Windows-Tablets unterstützt. ([Firefox Bug 1983483](https://bugzil.la/1983483))

- Die [View Transition API](/de/docs/Web/API/View_Transition_API) wird nun für {{Glossary("SPA", "SPAs (Single-Page-Anwendungen)")}} unterstützt. Dies bietet einen Mechanismus, um auf einfache Weise animierte Übergänge zwischen verschiedenen Website-Ansichten zu erstellen. ([Firefox Bug 1985809](https://bugzil.la/1985809)).

#### DOM

- Die Methode `moveBefore()` wird nun auf den Schnittstellen [`Element`](/de/docs/Web/API/Element/moveBefore), [`DocumentFragment`](/de/docs/Web/API/DocumentFragment/moveBefore) und [`Document`](/de/docs/Web/API/Document/moveBefore) unterstützt. Damit kann ein unmittelbares Kindelement des Objekts vor einem anderen seiner Kindelemente verschoben werden. Im Gegensatz zu [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore) behalten verschobene Elemente ihren Zustand. ([Firefox Bug 1983688](https://bugzil.la/1983688)).

#### Medien, WebRTC und Web Audio

- Cross-Origin {{htmlelement("iframe")}}s erfordern nun entweder Benutzerinteraktion ({{Glossary("sticky_activation", "sticky activation")}}) oder eine ausdrückliche Genehmigung, um die oberste Seite mithilfe von `window.top.location` umzuleiten.
  Siehe [Top-Navigation in Cross-Origin-Rahmen](/de/docs/Web/HTML/Reference/Elements/iframe#top_navigation_in_cross-origin_frames) für mehr Informationen. ([Firefox Bug 1419501](https://bugzil.la/1419501)).
- [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) Instanzen sind nun [übertragbare Objekte](/de/docs/Web/API/Web_Workers_API/Transferable_objects) und können daher an [Worker](/de/docs/Web/API/Worker) übergeben werden. ([Firefox Bug 1209163](https://bugzil.la/1209163)).
- Das [`closing` event](/de/docs/Web/API/RTCDataChannel/closing_event) und der `onclosing()` Ereignishandler werden nun auf der [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) Schnittstelle unterstützt. ([Firefox Bug 1611953](https://bugzil.la/1611953)).
- Die Methoden [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) und [`getDisplayMedia()`](/de/docs/Web/API/MediaDevices/getDisplayMedia) der [`MediaDevices`](/de/docs/Web/API/MediaDevices) Schnittstelle unterstützen jetzt die [`resizeMode`](/de/docs/Web/API/MediaTrackConstraints#resizemode) Einschränkung.
  Diese Einschränkung erlaubt es Entwicklern, Video anzufordern, das andere Einschränkungen, wie Auflösung und Bildrate, erfüllt, auch wenn die angeforderten Einschränkungen nicht von der zugrunde liegenden Hardware unterstützt werden.
  Der Browser kann dann das Video, das von einer Kamera aufgenommen wird, zuschneiden, verkleinern oder die Bildrate reduzieren, oder das Video, das von einem Bildschirm oder Fenster aufgenommen wird, verkleinern (aber nicht zuschneiden). ([Firefox Bug 1286945](https://bugzil.la/1286945)).

## Änderungen für Add-on-Entwickler

- Fügt die Fähigkeit hinzu, die Priorität von CSS zu bestimmen, das über den [`"content_scripts"` Manifest-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) injiziert wird, in {{WebExtAPIRef("scripting.registerContentScripts()")}} mit der `cssOrigin` Eigenschaft auf {{WebExtAPIRef("scripting.RegisteredContentScript")}}, und der `cssOrigin` Eigenschaft in {{WebExtAPIRef("contentScripts.register")}}. Standardmäßig hat der `"author"` Ursprung Vorrang. ([Firefox Bug 1679997](https://bugzil.la/1679997))

## Experimentelle Web-Features

Diese Funktionen sind in Firefox 144 vorhanden, aber standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie auf der `about:config` Seite die entsprechende Einstellung und setzen Sie sie auf `true`.
Sie finden weitere solche Funktionen auf der [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features) Seite.

- **datetime-local Zeitwähler:** `dom.forms.datetime.timepicker`.

  HTML datetime-local Eingabeelemente ([`<input type="datetime-local">`](/de/docs/Web/HTML/Reference/Elements/input/datetime-local)) beinhalten jetzt einen Zeitwähler ([Firefox Bug 1726108](https://bugzil.la/1726108)).
