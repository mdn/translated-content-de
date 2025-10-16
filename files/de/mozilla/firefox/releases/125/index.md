---
title: Firefox 125 Versionshinweise für Entwickler
short-title: Firefox 125
slug: Mozilla/Firefox/Releases/125
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Dieser Artikel liefert Informationen über die Änderungen in Firefox 125, die Entwickler betreffen. Firefox 125 wurde am [16. April 2024](https://whattrainisitnow.com/release/?version=125) veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen.

### CSS

- Die Eigenschaft {{cssxref("align-content")}} wurde aktualisiert, um mit `display: block;` Layouts zu funktionieren. Dies bringt alle Layoutpositionen von `flex` und `grid` zu `block` und ermöglicht es Entwicklern, Block-Elemente auszurichten, ohne ihren Container in einen `flex`- oder `grid`-Container umzuwandeln. ([Firefox Fehler 1882853](https://bugzil.la/1882853)).
- Die CSS-Eigenschaft [`transform-box`](/de/docs/Web/CSS/transform-box) unterstützt jetzt die Werte `content-box` und `stroke-box`. Für die Referenzbox verwendet der `content-box`-Wert die [Inhaltsbox](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#parts_of_a_box) und der `stroke-box`-Wert verwendet die Stroke-Begrenzungsbox, die eine SVG-Form enthält. ([Firefox Fehler 1868374](https://bugzil.la/1868374)).
- Der CSS-Eigenschaftswert [`content-visibility`](/de/docs/Web/CSS/content-visibility) `auto` ist jetzt standardmäßig aktiviert. Dadurch kann das Rendern von Inhalten übersprungen werden, wenn sie nicht für den Benutzer [relevant](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#relevant_to_the_user) sind. ([Firefox Fehler 1874874](https://bugzil.la/1874874)).

### JavaScript

- {{jsxref("Intl.Segmenter")}} wird jetzt unterstützt, wodurch Entwickler eine lokalsensitive Textsegmentierung eines Strings durchführen können.
  Dies ermöglicht beispielsweise das Aufteilen eines Strings in Wörter in Sprachen, die keine Leerzeichen zur Trennung verwenden: `Intl.Segmenter("ja-JP", { granularity: "word" })`.
  Man kann Strings auch in Grapheme oder Sätze aufteilen.
  ([Firefox Fehler 1423593](https://bugzil.la/1423593), [Firefox Fehler 1883914](https://bugzil.la/1883914).)

### APIs

- Die [Popover API](/de/docs/Web/API/Popover_API) wird jetzt vollständig unterstützt und ermöglicht die Erstellung von obersten "Popover" UI-Elementen, die für Aktionsmenüs, benutzerdefinierte "Toast"-Benachrichtigungen, Formularelementvorschläge, Inhaltspicker usw. verwendet werden können.
  Das Popover und sein auslösendes Button/Input können entweder mit HTML-Attributen oder JavaScript erstellt und mit CSS gestaltet werden.

  Die folgenden Web-APIs sind implementiert:
  - [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement) Eigenschaften [`popoverTargetElement`](/de/docs/Web/API/HTMLButtonElement/popoverTargetElement) und [`popoverTargetAction`](/de/docs/Web/API/HTMLButtonElement/popoverTargetAction).
  - [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Eigenschaften [`popoverTargetElement`](/de/docs/Web/API/HTMLInputElement/popoverTargetElement) und [`popoverTargetAction`](/de/docs/Web/API/HTMLInputElement/popoverTargetAction).
  - [`HTMLElement`](/de/docs/Web/API/HTMLElement) Eigenschaft [`popover`](/de/docs/Web/API/HTMLElement/popover), Methoden [`hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover), [`showPopover()`](/de/docs/Web/API/HTMLElement/showPopover), [`togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover), und Events [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) und [`toggle_event`](/de/docs/Web/API/HTMLElement/toggle_event) (vom Typ [`ToggleEvent`](/de/docs/Web/API/ToggleEvent)).

  Die folgende CSS-Pseudo-Klasse und das Element werden nun für die Verwendung mit Popovers unterstützt:
  - [`:popover-open`](/de/docs/Web/CSS/:popover-open)
  - [`::backdrop`](/de/docs/Web/CSS/::backdrop) wurde erweitert, um Popovers zu unterstützen

  Die folgenden globalen HTML-Attribute werden unterstützt:
  - [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)
  - [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction)

  ([Firefox Fehler 1823757](https://bugzil.la/1823757), [Firefox Fehler 1866993](https://bugzil.la/1866993)).

- Die [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) Eigenschaften [`state`](/de/docs/Web/API/RTCIceTransport/state) und [`gatheringState`](/de/docs/Web/API/RTCIceTransport/gatheringState), und ihre zugehörigen Events [`statechange`](/de/docs/Web/API/RTCIceTransport/statechange_event) und [`gatheringstatechange`](/de/docs/Web/API/RTCIceTransport/gatheringstatechange_event), werden jetzt unterstützt, zusammen mit der [`RTCDtlsTransport.iceTransport`](/de/docs/Web/API/RTCDtlsTransport/iceTransport) Eigenschaft (die den zugrunde liegenden `RTCIceTransport` für einen [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) zurückgibt).
  Diese erlauben eine viel feinere Überwachung als die durch die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) Eigenschaften [`iceGatheringState`](/de/docs/Web/API/RTCPeerConnection/iceGatheringState) und [`connectionState`](/de/docs/Web/API/RTCPeerConnection/connectionState) bereitgestellten Möglichkeiten.
  ([Firefox Fehler 1811912](https://bugzil.la/1811912))
- [`Element.ariaBrailleLabel`](/de/docs/Web/API/Element/ariaBrailleLabel) und [`Element.ariaBrailleRoleDescription`](/de/docs/Web/API/Element/ariaBrailleRoleDescription) werden jetzt unterstützt und spiegeln respektive die globalen ARIA HTML-Attribute [`aria-braillelabel`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-braillelabel) und [`aria-brailleroledescription`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-brailleroledescription) wider. ([Firefox Fehler 1861201](https://bugzil.la/1861201)).

- Unterstützung wurde hinzugefügt, um es Webanwendungen zu ermöglichen, sich anmutig zu erholen, falls ein Canvas seinen 2D-Kontext vorübergehend verliert, was passieren kann, wenn das Canvas hardwarebeschleunigt auf einer GPU läuft und der Treiber abstürzt ([Firefox Fehler 1887729](https://bugzil.la/1887729)).
  Hier sind einige zusätzliche Details zu den Ereignissen für verlorene und wiederhergestellte Canvas-Kontexte:
  - Anwendungen können auf [`contextlost`](/de/docs/Web/API/HTMLCanvasElement/contextlost_event) und [`contextrestored`](/de/docs/Web/API/HTMLCanvasElement/contextrestored_event) Ereignisse achten, die auf ein [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) gefeuert werden, wenn der Kontext verloren und wiederhergestellt wird, und können auch den Kontext mit [`CanvasRenderingContext2D.isContextLost()`](/de/docs/Web/API/CanvasRenderingContext2D/isContextLost) überprüfen.
  - Nach der Ausgabe von `contextlost` versucht der Browser standardmäßig den verlorenen Kontext neu zu starten, aber Code kann dies verhindern, indem das Ereignis abgebrochen wird.
  - Offscreen-Canvas können auf die gleiche Weise überwacht werden, jedoch mit [`OffScreenCanvas`](/de/docs/Web/API/OffscreenCanvas) Ereignissen [`contextlost`](/de/docs/Web/API/OffscreenCanvas/contextlost_event) und [`contextrestored`](/de/docs/Web/API/OffscreenCanvas/contextrestored_event), zusammen mit [`OffscreenCanvasRenderingContext2D.isContextLost()`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D#context).

- Unterstützung für das [`shadowrootclonable`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootclonable) Attribut des `<template>` Elements und die [`shadowRootClonable`](/de/docs/Web/API/HTMLTemplateElement/shadowRootClonable) Eigenschaft der `HTMLTemplateElement` Schnittstelle, die es widerspiegelt, wurde hinzugefügt.
  Diese setzen die [`clonable`](/de/docs/Web/API/ShadowRoot/clonable) Eigenschaft eines [`ShadowRoot`](/de/docs/Web/API/ShadowRoot), das deklarativ mit dem [`<template>`](/de/docs/Web/HTML/Reference/Elements/template) Element erstellt wurde.
  ([Firefox Fehler 1880188](https://bugzil.la/1880188)).

- Die Methode [`readText()`](/de/docs/Web/API/Clipboard/readText) der [`Clipboard`](/de/docs/Web/API/Clipboard) Schnittstelle wird nun unterstützt, um Text asynchron aus der Systemzwischenablage zu lesen.
  Beim Lesen von Zwischenablagedaten, die nicht von derselben Ursprungsseite bereitgestellt werden, erscheint ein Einfügekontextmenü, in dem der Benutzer dies bestätigen kann. ([Firefox Fehler 1877400](https://bugzil.la/1877400)).

#### Medien, WebRTC und Web Audio

- Der [AV1](/de/docs/Web/Media/Guides/Formats/Video_codecs#av1) Codec wird nun für [Encrypted Media Extensions](/de/docs/Web/API/Encrypted_Media_Extensions_API) unterstützt, was eine qualitativ hochwertigere Wiedergabe durch Videostreaming-Dienste ermöglicht. ([Firefox Fehler 1601817](https://bugzil.la/1601817)).

#### Entfernungen

- Die [`SVGAElement.text`](/de/docs/Web/API/SVGAElement#svgaelement.text) Eigenschaft wurde entfernt. Die [`textContent`](/de/docs/Web/API/Node/textContent) Eigenschaft (geerbt von `Node`) wird allgemein unterstützt und sollte stattdessen verwendet werden. ([Firefox Fehler 1880689](https://bugzil.la/1880689)).

### WebAssembly

- Unterstützung wurde hinzugefügt, damit Wasm-Module mehrere unabhängige lineare Speicher verwenden können.
  Mehrere Speicher erlauben eine effizientere Interoperabilität zwischen Modulen und bessere Polyfills für kommende Wasm-Standards. Sie können zum Beispiel verwendet werden, um separaten Speicher für interne und geteilte Daten, flüchtige und persistente Daten oder Daten zu erstellen, die zwischen Threads geteilt werden müssen.
  Der Speicher kann in JavaScript erstellt und in das Wasm-Modul importiert oder im Wasm-Modul erstellt und exportiert werden.
  Jeder neue lineare Speicher in einer Wasm-Instanz erhält einen sequentiellen Index, beginnend bei Null.
  WebAssembly [Speicherbefehle](/de/docs/WebAssembly/Reference/Memory) verwenden den Index, um den Speicher zu referenzieren, auf dem sie operieren, wobei standardmäßig auf den ersten definierten Speicher verwiesen wird, wenn kein Index angegeben ist.
  Weitere Informationen finden Sie unter [WebAssembly Speicher](/de/docs/WebAssembly/Guides/Understanding_the_text_format#webassembly_memory) im _Verständnis des WebAssembly-Textformats_.
  ([Firefox Fehler 1860816](https://bugzil.la/1860816)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Unterstützung für die ["userAgent" capability](https://w3c.github.io/webdriver/#capabilities) wurde hinzugefügt, die den Standardwert für den User-Agent-Knoten identifiziert ([Firefox Fehler 1885495](https://bugzil.la/1885495)).

#### WebDriver BiDi

- Unterstützung für den [input.setFiles](https://w3c.github.io/webdriver-bidi/#command-input-setFiles) Befehl wurde hinzugefügt, der es ermöglicht, Dateien für `<input>` Elemente mit `type="file"` zu setzen oder zu aktualisieren ([Firefox Fehler 1855040](https://bugzil.la/1855040)).
- Unterstützung für den [storage.deleteCookies](https://w3c.github.io/webdriver-bidi/#command-storage-deleteCookies) Befehl zum Löschen von Cookies wurde hinzugefügt ([Firefox Fehler 1854581](https://bugzil.la/1854581)).
- Unterstützung für "userContext" als ein Feld des "partition" Arguments für Cookie-Befehle wurde hinzugefügt ([Firefox Fehler 1875255](https://bugzil.la/1875255)).
- Ein Problem wurde behoben, bei dem [storage.getCookies](https://w3c.github.io/webdriver-bidi/#command-storage-getCookies) nicht alle erwarteten Cookies für einen gegebenen "sourceOrigin" abrufen würde ([Firefox Fehler 1884647](https://bugzil.la/1884647)).
- Ein Problem wurde behoben, bei dem empfohlene Voreinstellungen nicht angewendet wurden, wenn nur WebDriver BiDi als Remote-Protokoll, was bedeutet, dass CDP deaktiviert ist, aktiviert war ([Firefox Fehler 1882748](https://bugzil.la/1882748)).
- Ein Problem wurde behoben, bei dem das Erstellen und Wechseln zu einem neuen Tab nicht auf das Aktualisieren des `visibilityState` gewartet hat ([Firefox Fehler 1877469](https://bugzil.la/1877469)).

## Änderungen für Add-on-Entwickler

- Der Inhalt der {{WebExtAPIRef("proxy.ProxyInfo")}} Eigenschaft `proxyAuthorization` wird jetzt an den {{httpheader("Proxy-Authorization")}} Request-Header gesendet, die an HTTP-Proxys gesendet werden (zusätzlich zur bestehenden Unterstützung für HTTPS-Proxys) als Teil einer [CONNECT](/de/docs/Web/HTTP/Reference/Methods/CONNECT) Anfrage ([Firefox Fehler 1794464](https://bugzil.la/1794464)).

## Experimentelle Web-Features

Diese Features werden in Firefox 125 bereitgestellt, aber nur in Entwickler-Releases oder hinter einer Präferenz. Um diese auszuprobieren, können Sie nach der zugehörigen Präferenz auf der `about:config` Seite suchen, um zu sehen, ob sie aktiviert oder deaktiviert sind. Um mehr über diese Features zu erfahren, besuchen Sie die Seite zu [experimentellen Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **CSS `transition-behavior`:** `layout.css.transition-behavior.enabled`.

  Die {{cssxref("transition-behavior")}} Eigenschaft ist standardmäßig im Nightly Release aktiviert.
  Autoren können diese Eigenschaft verwenden, um zu steuern, ob CSS-Übergänge auf Eigenschaften mit einem [diskreten Animationstyp](/de/docs/Web/CSS/CSS_animated_properties#discrete) angewendet werden sollen ([Firefox Fehler 1882408](https://bugzil.la/1882408), [Firefox Fehler 1805727](https://bugzil.la/1805727)).

- **UA-Stile für `<h1>` verschachtelt in Abschnittselementen:** `layout.css.h1-in-section-ua-styles.enabled`.

  Die `<h1>`-Überschrift wird jetzt nicht mehr in der Schriftgröße reduziert, wenn sie in [Abschnittselementen](/de/docs/Web/HTML/Guides/Content_categories#sectioning_content) `<article>`, `<aside>`, `<nav>`, und `<section>` verschachtelt ist. Die UA-Stile für `<h1>` in Abschnittselementen sind nicht mehr relevant, da der Umrissalgorithmus [aus der HTML-Spezifikation entfernt wurde](https://github.com/whatwg/html/pull/7829). ([Firefox Fehler 1883896](https://bugzil.la/1883896)).

  > [!NOTE]
  > Die Präferenz für dieses Feature funktioniert umgekehrt: Im Nightly Build ist sie auf `false` gesetzt, was die UA-Stil für Überschriften in Abschnittselementen entfernt. In allen anderen Kanälen ist sie auf `true` gesetzt, was die bestehenden UA-Stile für die verschachtelten Überschriften beibehält.
