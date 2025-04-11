---
title: Firefox 32 für Entwickler
slug: Mozilla/Firefox/Releases/32
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{FirefoxSidebar}}

## Änderungen für Webentwickler

### Entwickler-Werkzeuge

Höhepunkte:

- [Web Audio Editor](https://firefox-source-docs.mozilla.org/devtools-user/web_audio_editor/index.html)
- _Code-Vervollständigung und Inline-Dokumentation in Scratchpad_
- [User-Agent-Stile in der Inspektor-Regelnansicht](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html#rules-view)
- [Das Elementauswahl-Button wurde verschoben](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html#firefox-32-onwards-2)
- [Knotendimensionen wurden zum Infobar des Inspektors hinzugefügt](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html#firefox-32-onwards)
- [Screenshot-Button für die volle Seite hinzugefügt](https://firefox-source-docs.mozilla.org/devtools-user/tools_toolbox/index.html#extra-tools)
- HiDPI-Bilder zu den Werkzeugen hinzugefügt
- Knoten mit `display:none` werden im Inspektor unterschiedlich angezeigt

[Alle behobenen Fehler in den Entwicklerwerkzeugen zwischen Firefox 31 und Firefox 32](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2014-06-09&chfield=resolution&query_format=advanced&chfieldfrom=2014-04-28&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20App%20Manager&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Profiler&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&product=Firefox).

### CSS

- Aktivierung von {{cssxref("mix-blend-mode")}} als Standard ([Firefox Fehler 952643](https://bugzil.la/952643)).
- `position:sticky` ist jetzt standardmäßig in Release-Builds aktiviert (zuvor nur in Nightly und Aurora aktiviert) ([Firefox Fehler 916315](https://bugzil.la/916315)).
- Implementierung von {{cssxref("box-decoration-break")}} und Entfernung der nicht-standardmäßigen `-moz-background-inline-policy` ([Firefox Fehler 613659](https://bugzil.la/613659)).
- {{cssxref("flex-grow")}} und {{cssxref("flex-shrink")}} erlauben jetzt die Transition zwischen Null und Nicht-Null-Werten, z. B. 'flex-grow: 0.6' ([Firefox Fehler 996945](https://bugzil.la/996945)).

### HTML

- Experimentelle Implementierung, hinter einer Voreinstellung, der {{HTMLElement("img")}} [`srcset`](/de/docs/Web/HTML/Reference/Elements/img#srcset) Eigenschaft. Zum Aktivieren setzen Sie `dom.image.srcset.enable` auf `true` ([Firefox Fehler 870021](https://bugzil.la/870021)).
- [**id**](/de/docs/Web/HTML/Reference/Global_attributes/id) und [**class**](/de/docs/Web/HTML/Reference/Global_attributes/class) sind jetzt echte [globale Attribute](/de/docs/Web/HTML/Reference/Global_attributes) und gelten auch für XML-Elemente, unabhängig davon, ob sie in einem Namensraum sind oder nicht ([Firefox Fehler 741295](https://bugzil.la/741295)).

### JavaScript

- Die folgenden neuen ECMAScript 2015 eingebauten Methoden wurden implementiert:

  - {{jsxref("Array.from()")}} ([Firefox Fehler 904723](https://bugzil.la/904723)),
  - {{jsxref("Array.prototype.copyWithin()")}} ([Firefox Fehler 934423](https://bugzil.la/934423)),
  - {{jsxref("Number.isSafeInteger()")}} ([Firefox Fehler 1003764](https://bugzil.la/1003764)).

### Schnittstellen/APIs/DOM

- Die [`Navigator.languages`](/de/docs/Web/API/Navigator/languages) Eigenschaft und das [`languagechange`](/de/docs/Web/API/Window/languagechange_event) Ereignis wurden implementiert ([Firefox Fehler 889335](https://bugzil.la/889335)).
- Das Verhalten der Methode [`Navigator.vibrate()`](/de/docs/Web/API/Navigator/vibrate) wurde an die neueste Spezifikation angepasst: Zu lange Vibrationen werden jetzt abgeschnitten ([Firefox Fehler 1014581](https://bugzil.la/1014581)).
- Die Methoden [`KeyboardEvent.getModifierState()`](/de/docs/Web/API/KeyboardEvent/getModifierState) und [`MouseEvent.getModifierState()`](/de/docs/Web/API/MouseEvent/getModifierState) wurden erweitert, um den virtuellen Modifikator `Accel` zu unterstützen ([Firefox Fehler 1009388](https://bugzil.la/1009388)).
- Die [`KeyboardEvent.code`](/de/docs/Web/API/KeyboardEvent/code) Eigenschaft wurde experimentell implementiert und ist in Release-Builds deaktiviert ([Firefox Fehler 865649](https://bugzil.la/865649)).
- Geltungsbereich-Selektoren für [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector) und [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll), zum Beispiel `querySelector(":scope > li")`, wurden implementiert ([Firefox Fehler 528456](https://bugzil.la/528456)).
- Die experimentelle Implementierung der [`Document.timeline`](/de/docs/Web/API/Document/timeline) Schnittstelle, in Verbindung mit der [Web Animation API](https://drafts.fxtf.org/web-animations/), wurde hinzugefügt ([Firefox Fehler 998246](https://bugzil.la/998246)). Dies wird durch die Voreinstellung `layout.web-animations.api.enabled` gesteuert, die momentan nur in Nightly und Aurora aktiviert ist.
- Die [Data Store API](/de/docs/Web/API/Data_Store_API) steht jetzt [Web Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers) zur Verfügung ([Firefox Fehler 949325](https://bugzil.la/949325)). Sie ist immer noch nur für zertifizierte Anwendungen aktiviert.
- Die [ServiceWorker](/de/docs/Web/API/Service_Worker_API) [`InstallPhaseEvent`](/de/docs/Web/API/InstallPhaseEvent) und [`InstallEvent`](/de/docs/Web/API/InstallEvent) Schnittstellen wurden implementiert ([Firefox Fehler 967264](https://bugzil.la/967264)).
- Die [MSISDN Verification API](/de/docs/Web/API/MSISDN_Verification_API), nur für privilegierte Apps aktiviert, wurde hinzugefügt ([Firefox Fehler 988469](https://bugzil.la/988469)).
- Die [Gamepad API](/de/docs/Web/API/Gamepad_API) wird jetzt auch von Firefox für Android unterstützt ([Firefox Fehler 852935](https://bugzil.la/852935)).
- Um der Spezifikation zu entsprechen und der Entwicklung der CSS-Syntax zu folgen, wurden kleinere Änderungen an [`CSS.escape()`](/de/docs/Web/API/CSS/escape_static) vorgenommen. Der Bezeichner kann nun mit `'--'` beginnen und der zweite Bindestrich muss nicht mehr entkommen werden. Zudem werden Anbieterbezeichner nicht mehr entkommen. ([Firefox Fehler 1008719](https://bugzil.la/1008719))
- Zur Vervollständigung unserer Hit-Region-Implementierung wurde `MouseEvent.region` implementiert ([Firefox Fehler 979692](https://bugzil.la/979692)).
- Die Methode [`CanvasRenderingContext2D.drawFocusIfNeeded()`](/de/docs/Web/API/CanvasRenderingContext2D/drawFocusIfNeeded) ist jetzt standardmäßig aktiviert ([Firefox Fehler 1004579](https://bugzil.la/1004579)).
- Die [`Navigator.doNotTrack`](/de/docs/Web/API/Navigator/doNotTrack) Eigenschaften geben nun `'1'` oder `'0'` zurück, entsprechend dem HTTP-Wert, anstelle von `'yes'` oder `'no'` ([Firefox Fehler 887703](https://bugzil.la/887703)).
- [XMLHttpRequest.responseURL](/de/docs/Web/API/XMLHttpRequest/responseURL) wurde implementiert ([Firefox Fehler 998076](https://bugzil.la/998076)).

### MathML

- Unterstützung für die {{MathMLElement("menclose")}} Notation `phasorangle` hinzugefügt.

### SVG

_Keine Änderung._

### WebRTC

- Neue Einschränkungen für {{Glossary("WebRTC", "WebRTC")}} `getUserMedia()`, `width`, `height` und `framerate`, wurden hinzugefügt, um die Stream-Dimensionen und Frame-Rate zu begrenzen ([Firefox Fehler 907352](https://bugzil.la/907352)):

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

- WebRTC-Methoden, die bisher Callback-Funktionen als Eingabeparameter verwendeten, sind nun auch mit JavaScript [promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) verfügbar.

### Audio/Video

_Keine Änderung._

## Sicherheit

- [Privilegierter Code erhält jetzt Xray Vision für JavaScript `Object` und `Array` Instanzen](https://firefox-source-docs.mozilla.org/dom/scriptSecurity/xray_vision.html#xray-semantics-for-object-and-array).

## Änderungen für Add-on und Mozilla-Entwickler

Xray Vision wird jetzt auf JavaScript-Objekte angewendet, die keine DOM-Objekte sind: [Xrays für JavaScript-Objekte](https://firefox-source-docs.mozilla.org/dom/scriptSecurity/xray_vision.html#xrays-for-javascript-objects).

Eine `getDataDirectory()` Methode wurde zu [`Addon`](/de/docs/Mozilla/Add-ons/Add-on_Manager/Addon) Instanzen hinzugefügt. Diese Methode gibt den bevorzugten Speicherort im aktuellen Profil zurück, in dem Add-ons Daten speichern können.

### Add-on SDK

#### Höhepunkte

- Hinzufügen der [`exclude`](/de/docs/Mozilla/Add-ons/SDK/High-Level_APIs/page-mod#pagemod%28options%29) Option zu `PageMod`.
- Hinzufügen der [`anonymous`](/de/docs/Mozilla/Add-ons/SDK/High-Level_APIs/request#request%28options%29) Option zu `Request`.
- [Add-on Debugger](/de/docs/Mozilla/Add-ons/Add-on_Debugger) beinhaltet jetzt eine Konsole und ein Scratchpad.

#### Details

[GitHub Commits gemacht zwischen Firefox 31 und Firefox 32](https://github.com/mozilla/addon-sdk/compare/firefox31...firefox32). Dies schließt keine Anpassungen ein, die nach diesem Release in Aurora gemacht wurden.

[Behobene Fehler zwischen Firefox 31 und Firefox 32](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&chfieldto=2014-06-09&chfield=resolution&query_format=advanced&chfieldfrom=2014-04-28&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&bug_status=CLOSED&product=Add-on%20SDK&list_id=10493962). Dies schließt keine Anpassungen ein, die nach diesem Release in Aurora gemacht wurden.

### XPCOM

- Die `nsIUDPSocket` Schnittstelle bietet jetzt Multicast-Unterstützung durch die Hinzufügung der neuen Attribute `nsIUDPSocket.multicastLoopback`, `nsIUDPSocket.multicastInterface` und `nsIUDPSocket.multicastInterfaceAddr` sowie der Methoden `nsIUDPSocket.joinMulticast()` und `nsIUDPSocket.leaveMulticast()`.

### Ältere Versionen

{{Firefox_for_developers}}
