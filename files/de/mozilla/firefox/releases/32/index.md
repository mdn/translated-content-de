---
title: Firefox 32 für Entwickler
short-title: Firefox 32
slug: Mozilla/Firefox/Releases/32
l10n:
  sourceCommit: 64df508685abcbc047f6c1a973505921fad1484e
---

Firefox 32 wurde am 2. September 2014 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die nicht nur für Web-Entwickler nützlich sind, sondern auch für Entwickler von Firefox und Gecko sowie für Add-on-Entwickler.

## Änderungen für Web-Entwickler

### Entwickler-Tools

Höhepunkte:

- [Web Audio Editor](https://firefox-source-docs.mozilla.org/devtools-user/web_audio_editor/index.html)
- _Code-Vervollständigung und Inline-Dokumentation im Scratchpad_
- [User-Agent-Stile in der Regeln-Ansicht des Inspectors](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html#rules-view)
- [Elementauswahl-Schaltfläche wurde verschoben](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html#firefox-32-onwards-2)
- [Knotendimensionen zur Infobar des Inspectors hinzugefügt](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html#firefox-32-onwards)
- [Button für Vollseiten-Screenshot hinzugefügt](https://firefox-source-docs.mozilla.org/devtools-user/tools_toolbox/index.html#extra-tools)
- HiDPI-Bilder zu den Tools hinzugefügt
- Knoten mit `display:none` werden im Inspector anders angezeigt

[Alle im Zeitraum zwischen Firefox 31 und Firefox 32 gelösten Devtools-Bugs](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2014-06-09&chfield=resolution&query_format=advanced&chfieldfrom=2014-04-28&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20App%20Manager&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Profiler&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&product=Firefox).

### CSS

- {{cssxref("mix-blend-mode")}} standardmäßig aktiviert ([Firefox-Bug 952643](https://bugzil.la/952643)).
- `position:sticky` ist in den Release-Builds jetzt standardmäßig aktiviert (vorher nur in Nightly und Aurora) ([Firefox-Bug 916315](https://bugzil.la/916315)).
- {{cssxref("box-decoration-break")}} implementiert und das nicht-standardisierte `-moz-background-inline-policy` entfernt ([Firefox-Bug 613659](https://bugzil.la/613659)).
- Erlaubt {{cssxref("flex-grow")}} und {{cssxref("flex-shrink")}}, zwischen Null- und Nicht-Null-Werten zu wechseln, wie 'flex-grow: 0.6' ([Firefox-Bug 996945](https://bugzil.la/996945)).

### HTML

- Experimentell, hinter einem Pref, das {{HTMLElement("img")}} [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset) Property implementiert. Zum Aktivieren setzen Sie `dom.image.srcset.enable` auf `true` ([Firefox-Bug 870021](https://bugzil.la/870021)).
- [**id**](/de/docs/Web/HTML/Reference/Global_attributes/id) und [**class**](/de/docs/Web/HTML/Reference/Global_attributes/class) sind jetzt echte [globale Attribute](/de/docs/Web/HTML/Reference/Global_attributes) und gelten auch für XML-Elemente, unabhängig davon, ob sie in einem Namespace sind oder nicht ([Firefox-Bug 741295](https://bugzil.la/741295)).

### JavaScript

- Die folgenden neuen ECMAScript 2015 eingebauten Methoden wurden implementiert:
  - {{jsxref("Array.from()")}} ([Firefox-Bug 904723](https://bugzil.la/904723)),
  - {{jsxref("Array.prototype.copyWithin()")}} ([Firefox-Bug 934423](https://bugzil.la/934423)),
  - {{jsxref("Number.isSafeInteger()")}} ([Firefox-Bug 1003764](https://bugzil.la/1003764)).

### Schnittstellen/APIs/DOM

- Die [`Navigator.languages`](/de/docs/Web/API/Navigator/languages) Eigenschaft und das [`languagechange`](/de/docs/Web/API/Window/languagechange_event) Ereignis wurden implementiert ([Firefox-Bug 889335](https://bugzil.la/889335)).
- Das Verhalten der [`Navigator.vibrate()`](/de/docs/Web/API/Navigator/vibrate) Methode wurde an die neueste Spezifikation angepasst: Zu lange Vibrationen werden jetzt gekürzt ([Firefox-Bug 1014581](https://bugzil.la/1014581)).
- Die Methoden [`KeyboardEvent.getModifierState()`](/de/docs/Web/API/KeyboardEvent/getModifierState) und [`MouseEvent.getModifierState()`](/de/docs/Web/API/MouseEvent/getModifierState) wurden erweitert, um den `Accel` virtuellen Modifikator zu unterstützen ([Firefox-Bug 1009388](https://bugzil.la/1009388)).
- Die [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code) Eigenschaft wurde experimentell implementiert: Sie ist in den Release-Builds deaktiviert ([Firefox-Bug 865649](https://bugzil.la/865649)).
- Für [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector) und [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll) wurden Scoped-Selektoren, wie z.B. `querySelector(":scope > li")` implementiert ([Firefox-Bug 528456](https://bugzil.la/528456)).
- Die experimentelle Implementierung der [`Document.timeline`](/de/docs/Web/API/Document/timeline) Schnittstelle, im Zusammenhang mit der [Web Animation API](https://drafts.fxtf.org/web-animations/), wurde hinzugefügt ([Firefox-Bug 998246](https://bugzil.la/998246)). Sie wird durch die `layout.web-animations.api.enabled` Präferenz kontrolliert, die momentan nur in Nightly und Aurora aktiviert ist.
- Die [Data Store API](/de/docs/Web/API/Data_Store_API) wurde für [Web Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers) verfügbar gemacht ([Firefox-Bug 949325](https://bugzil.la/949325)). Sie ist nach wie vor nur für zertifizierte Anwendungen aktiviert.
- Die [ServiceWorker](/de/docs/Web/API/Service_Worker_API) [`InstallPhaseEvent`](/de/docs/Web/API/InstallPhaseEvent) und [`InstallEvent`](/de/docs/Web/API/InstallEvent) Schnittstellen wurden implementiert ([Firefox-Bug 967264](https://bugzil.la/967264)).
- Die [MSISDN Verification API](/de/docs/Web/API/MSISDN_Verification_API), nur für privilegierte Apps aktiviert, wurde hinzugefügt ([Firefox-Bug 988469](https://bugzil.la/988469)).
- Die [Gamepad API](/de/docs/Web/API/Gamepad_API) wird jetzt auf Firefox für Android unterstützt ([Firefox-Bug 852935](https://bugzil.la/852935)).
- Um der Spezifikation und der Entwicklung der CSS-Syntax gerecht zu werden, wurden kleine Änderungen an [`CSS.escape()`](/de/docs/Web/API/CSS/escape_static) vorgenommen. Der Bezeichner kann jetzt mit `'--'` beginnen und der zweite Bindestrich muss nicht mehr maskiert werden. Auch Hersteller-bezogene Bezeichner werden nicht mehr maskiert ([Firefox-Bug 1008719](https://bugzil.la/1008719)).
- Um unsere Implementierung der Hit-Regionen zu vervollständigen, wurde `MouseEvent.region` implementiert ([Firefox-Bug 979692](https://bugzil.la/979692)).
- Die Methode [`CanvasRenderingContext2D.drawFocusIfNeeded()`](/de/docs/Web/API/CanvasRenderingContext2D/drawFocusIfNeeded) ist jetzt standardmäßig aktiviert ([Firefox-Bug 1004579](https://bugzil.la/1004579)).
- Die [`Navigator.doNotTrack`](/de/docs/Web/API/Navigator/doNotTrack) Eigenschaften geben nun `'1'` oder `'0'` zurück, was dem HTTP-Wert entspricht, anstelle von `'yes'` oder `'no'` ([Firefox-Bug 887703](https://bugzil.la/887703)).
- [XMLHttpRequest.responseURL](/de/docs/Web/API/XMLHttpRequest/responseURL) wurde implementiert ([Firefox-Bug 998076](https://bugzil.la/998076)).

### MathML

- Unterstützung für die {{MathMLElement("menclose")}} Notation `phasorangle` hinzugefügt.

### SVG

_Keine Änderungen._

### WebRTC

- Neue Constraints für {{Glossary("WebRTC", "WebRTC")}}'s [`getUserMedia()`](/de/docs/Web/API/Navigator/getUserMedia), `width`, `height` und `framerate` wurden hinzugefügt, um die Stream-Dimensionen und die Bildrate zu begrenzen ([Firefox-Bug 907352](https://bugzil.la/907352)):

  ```js
  const constraints = {
    mandatory: {
      width: { min: 640 },
      height: { min: 480 },
    },
    optional: [
      { width: 650 },
      { width: { min: 650 } },
      { frameRate: 60 },
      { width: { max: 800 } },
    ],
  };
  ```

- WebRTC-Methoden, die bisher Callback-Funktionen als Eingabeparameter verwendeten, sind jetzt auch mit JavaScript [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) verfügbar.

### Audio/Video

_Keine Änderungen._

## Sicherheit

- [Privilegierter Code erhält jetzt Xray-Sicht für JavaScript-`Object`- und `Array`-Instanzen](https://firefox-source-docs.mozilla.org/dom/scriptSecurity/xray_vision.html#xray-semantics-for-object-and-array).

## Änderungen für Add-on- und Mozilla-Entwickler

Xray-Sicht wird nun auch auf JavaScript-Objekte angewendet, die keine DOM-Objekte sind: [Xrays für JavaScript-Objekte](https://firefox-source-docs.mozilla.org/dom/scriptSecurity/xray_vision.html#xrays-for-javascript-objects).

Eine `getDataDirectory()` Methode wurde zu `Addon` Instanzen hinzugefügt. Diese Methode gibt den bevorzugten Speicherort innerhalb des aktuellen Profils zurück, um Daten für Add-ons zu speichern.

### Add-on SDK

#### Höhepunkte

- Option [`exclude`](/de/docs/Mozilla/Add-ons/SDK/High-Level_APIs/page-mod#pagemod%28options%29) zu `PageMod` hinzugefügt.
- Option [`anonymous`](/de/docs/Mozilla/Add-ons/SDK/High-Level_APIs/request#request%28options%29) zu `Request` hinzugefügt.
- Der [Add-on Debugger](https://extensionworkshop.com/documentation/develop/debugging/) enthält jetzt eine Konsole und ein Scratchpad.

#### Details

[GitHub-Commits, die zwischen Firefox 31 und Firefox 32 durchgeführt wurden](https://github.com/mozilla/addon-sdk/compare/firefox31...firefox32). Dies schließt keine Änderungen ein, die nach dem Eintritt dieser Version in Aurora vorgenommen wurden.

[Eingefügte Bugs, die zwischen Firefox 31 und Firefox 32 behoben wurden](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&chfieldto=2014-06-09&chfield=resolution&query_format=advanced&chfieldfrom=2014-04-28&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&bug_status=CLOSED&product=Add-on%20SDK&list_id=10493962). Dies schließt keine Änderungen ein, die nach dem Eintritt dieser Version in Aurora vorgenommen wurden.

### XPCOM

- Die `nsIUDPSocket`-Schnittstelle bietet jetzt Multicast-Unterstützung durch die Hinzufügung der neuen Attribute `nsIUDPSocket.multicastLoopback`, `nsIUDPSocket.multicastInterface` und `nsIUDPSocket.multicastInterfaceAddr`, sowie die Methoden `nsIUDPSocket.joinMulticast()` und `nsIUDPSocket.leaveMulticast()`.
