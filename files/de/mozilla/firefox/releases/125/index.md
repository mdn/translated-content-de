---
title: Firefox 125 für Entwickler
short-title: Firefox 125
slug: Mozilla/Firefox/Releases/125
l10n:
  sourceCommit: 64df508685abcbc047f6c1a973505921fad1484e
---

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 125, die Entwickler betreffen. Firefox 125 wurde am [16. April 2024](https://whattrainisitnow.com/release/?version=125) veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen.

### CSS

- Die Eigenschaft {{cssxref("align-content")}} wurde aktualisiert, um mit `display: block;` Layouts zu arbeiten. Dies bringt alle Layoutpositionen von `flex` und `grid` zu `block`, wodurch Entwickler Block-Elemente ausrichten können, ohne ihren Container in einen `flex` oder `grid` Container konvertieren zu müssen. ([Firefox Bug 1882853](https://bugzil.la/1882853)).
- Die CSS-Eigenschaft [`transform-box`](/de/docs/Web/CSS/transform-box) unterstützt nun die Werte `content-box` und `stroke-box`. Für die Referenzbox verwendet der `content-box` Wert die [Inhaltsbox](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#parts_of_a_box) und der `stroke-box` Wert benutzt die Konturbegrenzung, die die Form eines SVGs enthält ([Firefox Bug 1868374](https://bugzil.la/1868374)).
- Der CSS-Eigenschaftswert [`content-visibility`](/de/docs/Web/CSS/content-visibility) `auto` ist jetzt standardmäßig aktiviert. Dies ermöglicht es, das Rendering von Inhalten zu überspringen, wenn sie nicht [relevant für den Benutzer](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#relevant_to_the_user) sind. ([Firefox Bug 1874874](https://bugzil.la/1874874)).

### JavaScript

- {{jsxref("Intl.Segmenter")}} wird jetzt unterstützt, was es Entwicklern ermöglicht, eine ortsabhängige Textsegmentierung eines Strings durchzuführen.
  Dies ermöglicht beispielsweise das Teilen eines Strings in Wörter in Sprachen, die keine Leerzeichen zur Trennung verwenden: `Intl.Segmenter("ja-JP", { granularity: "word" })`.
  Sie können auch Strings in Grapheme oder Sätze aufteilen.
  ([Firefox Bug 1423593](https://bugzil.la/1423593), [Firefox Bug 1883914](https://bugzil.la/1883914).)

### APIs

- Die [Popover API](/de/docs/Web/API/Popover_API) wird jetzt vollständig unterstützt und ermöglicht die Erstellung von Benutzeroberflächen-Elementen auf oberster Ebene, dass für Aktionsmenüs, benutzerdefinierte "Toast"-Benachrichtigungen, Vorschläge für Formularelemente, Inhaltsauswahlen usw. verwendet werden kann.
  Das Popover und sein auslösendes Button/Input-Element können entweder mit HTML-Attributen oder JavaScript erstellt und mittels CSS gestaltet werden.

  Die folgenden Web-APIs sind implementiert:
  - [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement) Eigenschaften [`popoverTargetElement`](/de/docs/Web/API/HTMLButtonElement/popoverTargetElement) und [`popoverTargetAction`](/de/docs/Web/API/HTMLButtonElement/popoverTargetAction).
  - [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Eigenschaften [`popoverTargetElement`](/de/docs/Web/API/HTMLInputElement/popoverTargetElement) und [`popoverTargetAction`](/de/docs/Web/API/HTMLInputElement/popoverTargetAction).
  - [`HTMLElement`](/de/docs/Web/API/HTMLElement) Eigenschaft [`popover`](/de/docs/Web/API/HTMLElement/popover), [`hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover), [`showPopover()`](/de/docs/Web/API/HTMLElement/showPopover), und [`togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) Methoden, sowie [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) und [`toggle_event`](/de/docs/Web/API/HTMLElement/toggle_event) Ereignisse (vom Typ [`ToggleEvent`](/de/docs/Web/API/ToggleEvent)).

  Die folgende CSS-Pseudo-Klasse und das Element werden jetzt für die Verwendung mit Popovers unterstützt:
  - [`:popover-open`](/de/docs/Web/CSS/:popover-open)
  - [`::backdrop`](/de/docs/Web/CSS/::backdrop) wurde erweitert, um Popovers zu unterstützen

  Die folgenden globalen HTML-Attribute werden unterstützt:
  - [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)
  - [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction)

  ([Firefox Bug 1823757](https://bugzil.la/1823757), [Firefox Bug 1866993](https://bugzil.la/1866993)).

- Die [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) Eigenschaften [`state`](/de/docs/Web/API/RTCIceTransport/state) und [`gatheringState`](/de/docs/Web/API/RTCIceTransport/gatheringState), und deren zugehörige Ereignisse [`statechange`](/de/docs/Web/API/RTCIceTransport/statechange_event) und [`gatheringstatechange`](/de/docs/Web/API/RTCIceTransport/gatheringstatechange_event), werden nun zusammen mit der [`RTCDtlsTransport.iceTransport`](/de/docs/Web/API/RTCDtlsTransport/iceTransport) Eigenschaft unterstützt (die das zugrunde liegende `RTCIceTransport` für ein [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) zurückgibt).
  Diese bieten eine viel feinere Überwachung als die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) Eigenschaften [`iceGatheringState`](/de/docs/Web/API/RTCPeerConnection/iceGatheringState) und [`connectionState`](/de/docs/Web/API/RTCPeerConnection/connectionState).
  ([Firefox Bug 1811912](https://bugzil.la/1811912)).
- [`Element.ariaBrailleLabel`](/de/docs/Web/API/Element/ariaBrailleLabel) und [`Element.ariaBrailleRoleDescription`](/de/docs/Web/API/Element/ariaBrailleRoleDescription) werden nun unterstützt und geben die globalen ARIA HTML-Attribute [`aria-braillelabel`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-braillelabel) und [`aria-brailleroledescription`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-brailleroledescription) wieder. ([Firefox Bug 1861201](https://bugzil.la/1861201)).

- Unterstützung hinzugefügt, um es Webanwendungen zu ermöglichen, sich grazil zu erholen, wenn ein Canvas vorübergehend seinen 2D-Kontext verliert, was passieren kann, wenn das Canvas hardwarebeschleunigt auf einer GPU läuft und dessen Treiber abstürzt ([Firefox Bug 1887729](https://bugzil.la/1887729)).
  Hier sind einige zusätzliche Details zu den Ereignissen für verlorene und wiederhergestellte Canvas-Kontexte:
  - Anwendungen können Ereignisse für [`contextlost`](/de/docs/Web/API/HTMLCanvasElement/contextlost_event) und [`contextrestored`](/de/docs/Web/API/HTMLCanvasElement/contextrestored_event) überwachen, die auf dem [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) ausgelöst werden, wenn der Kontext verloren geht und wiederhergestellt wird, und können den Kontext auch mit [`CanvasRenderingContext2D.isContextLost()`](/de/docs/Web/API/CanvasRenderingContext2D/isContextLost) überprüfen.
  - Nachdem `contextlost` gesendet wurde, versucht ein Browser standardmäßig den verlorenen Kontext neu zu starten, aber der Code kann dies verhindern, indem er das Ereignis abbricht.
  - Offscreen-Canvas können auf die gleiche Weise überwacht werden, jedoch unter Verwendung der [`OffScreenCanvas`](/de/docs/Web/API/OffscreenCanvas) Ereignisse [`contextlost`](/de/docs/Web/API/OffscreenCanvas/contextlost_event) und [`contextrestored`](/de/docs/Web/API/OffscreenCanvas/contextrestored_event), zusammen mit [`OffscreenCanvasRenderingContext2D.isContextLost()`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D#context).

- Unterstützung für das [`shadowrootclonable`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootclonable) Attribut des `<template>` Elements und die [`shadowRootClonable`](/de/docs/Web/API/HTMLTemplateElement/shadowRootClonable) Eigenschaft der `HTMLTemplateElement` Schnittstelle, die es widerspiegelt, hinzugefügt.
  Diese legen die [`clonable`](/de/docs/Web/API/ShadowRoot/clonable) Eigenschaft eines [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) fest, die deklarativ mit dem [`<template>`](/de/docs/Web/HTML/Reference/Elements/template) Element erstellt wurde.
  ([Firefox Bug 1880188](https://bugzil.la/1880188)).

- Die [`readText()`](/de/docs/Web/API/Clipboard/readText) Methode der [`Clipboard`](/de/docs/Web/API/Clipboard) Schnittstelle wird nun unterstützt, um Text asynchron aus der System-Zwischenablage zu lesen.
  Beim Lesen von Zwischenablagedaten, die nicht von derselben Ursprungsseite bereitgestellt werden, erscheint ein Einfüge-Kontextmenü, das den Benutzer um Bestätigung bittet. ([Firefox Bug 1877400](https://bugzil.la/1877400)).

#### Medien, WebRTC und Web Audio

- Der [AV1](/de/docs/Web/Media/Guides/Formats/Video_codecs#av1) Codec wird jetzt für [Encrypted Media Extensions](/de/docs/Web/API/Encrypted_Media_Extensions_API) unterstützt, was eine qualitativ hochwertigere Wiedergabe von Video-Streaming-Anbietern ermöglicht. ([Firefox Bug 1601817](https://bugzil.la/1601817)).

#### Entfernungen

- Die [`SVGAElement.text`](/de/docs/Web/API/SVGAElement#svgaelement.text) Eigenschaft wurde entfernt. Die [`textContent`](/de/docs/Web/API/Node/textContent) Eigenschaft (vom `Node` geerbt) wird weithin unterstützt und sollte stattdessen verwendet werden. ([Firefox Bug 1880689](https://bugzil.la/1880689)).

### WebAssembly

- Unterstützung wurde hinzugefügt, damit Wasm-Module mehrere unabhängige lineare Speicher verwenden können.
  Mehrere Speicher ermöglichen eine effizientere Interoperabilität zwischen Modulen und bessere Polyfills für kommende Wasm-Standards. Sie können beispielsweise verwendet werden, um separaten Speicher für interne und gemeinsame Daten, flüchtige und dauerhafte Daten oder Daten, die zwischen Threads geteilt werden müssen, zu erstellen.
  Der Speicher kann in JavaScript erstellt und in das Wasm-Modul importiert oder im Wasm-Modul erstellt und exportiert werden.
  Jeder neue lineare Speicher in einer Wasm-Instanz erhält einen fortlaufenden Index, beginnend bei Null.
  WebAssembly [Speicheranweisungen](/de/docs/WebAssembly/Reference/Memory) verwenden den Index, um den Speicher zu referenzieren, auf dem sie operieren, standardmäßig wird der erste definierte Speicher verwendet, wenn kein Index angegeben ist.
  Weitere Informationen finden Sie unter [WebAssembly Memory](/de/docs/WebAssembly/Guides/Understanding_the_text_format#webassembly_memory) in _Understanding WebAssembly text format_.
  ([Firefox Bug 1860816](https://bugzil.la/1860816)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Unterstützung für die [„userAgent“-Fähigkeit](https://w3c.github.io/webdriver/#capabilities) hinzugefügt, die den Standardwert des User-Agents des Endpunktknotens identifiziert ([Firefox Bug 1885495](https://bugzil.la/1885495)).

#### WebDriver BiDi

- Unterstützung für den [input.setFiles](https://w3c.github.io/webdriver-bidi/#command-input-setFiles) Befehl hinzugefügt, der das Setzen oder Aktualisieren der Dateien für `<input>` Elemente mit `type="file"` ermöglicht ([Firefox Bug 1855040](https://bugzil.la/1855040)).
- Unterstützung für den [storage.deleteCookies](https://w3c.github.io/webdriver-bidi/#command-storage-deleteCookies) Befehl hinzugefügt, um Cookies zu löschen ([Firefox Bug 1854581](https://bugzil.la/1854581)).
- Unterstützung für „userContext“ als Feld des „partition“-Arguments für Cookie-Befehle hinzugefügt ([Firefox Bug 1875255](https://bugzil.la/1875255)).
- Ein Problem behoben, bei dem [storage.getCookies](https://w3c.github.io/webdriver-bidi/#command-storage-getCookies) nicht alle erwarteten Cookies für einen gegebenen „sourceOrigin“ abrufen würde ([Firefox Bug 1884647](https://bugzil.la/1884647)).
- Ein Problem behoben, bei dem empfohlene Einstellungen nicht angewendet werden würden, wenn nur WebDriver BiDi als Fernprotokoll aktiviert war, was bedeutet, dass CDP deaktiviert war ([Firefox Bug 1882748](https://bugzil.la/1882748)).
- Ein Problem behoben, bei dem das Erstellen und Wechseln zu einem neuen Tab nicht auf die Aktualisierung des `visibilityState` warten würde ([Firefox Bug 1877469](https://bugzil.la/1877469)).

## Änderungen für Add-on-Entwickler

- Der Inhalt der {{WebExtAPIRef("proxy.ProxyInfo")}} Eigenschaft `proxyAuthorization` wird jetzt an den {{httpheader("Proxy-Authorization")}} Request-Header gesendet, der an HTTP-Proxies (zusätzlich zur bestehenden Unterstützung für HTTPS-Proxies) als Teil einer [CONNECT](/de/docs/Web/HTTP/Reference/Methods/CONNECT) Anfrage gesendet wird ([Firefox Bug 1794464](https://bugzil.la/1794464)).

## Experimentelle Web-Features

Diese Features werden in Firefox 125 ausgeliefert, jedoch nur in Entwickler-Releases oder hinter einer Präferenz. Um diese auszuprobieren, können Sie nach der zugehörigen Präferenz auf der `about:config` Seite suchen, um zu sehen, ob sie aktiviert oder deaktiviert sind. Um mehr über diese Features zu erfahren, siehe die Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **CSS `transition-behavior`:** `layout.css.transition-behavior.enabled`.

  Die {{cssxref("transition-behavior")}} Eigenschaft ist standardmäßig in der Nightly-Version aktiviert.
  Autoren können diese Eigenschaft verwenden, um zu steuern, ob CSS-Übergänge auf Eigenschaften mit einem [diskreten Animationstyp](/de/docs/Web/CSS/CSS_animated_properties#discrete) angewendet werden sollen ([Firefox Bug 1882408](https://bugzil.la/1882408), [Firefox Bug 1805727](https://bugzil.la/1805727)).

- **UA-Stile für `<h1>` verschachtelt in Gliederungselementen:** `layout.css.h1-in-section-ua-styles.enabled`.

  Der `<h1>` Überschrift verringert sich jetzt nicht mehr in der Schriftgröße, wenn er innerhalb von [sectioning elements](/de/docs/Web/HTML/Guides/Content_categories#sectioning_content) `<article>`, `<aside>`, `<nav>`, und `<section>` verschachtelt ist. Die UA-Stile für `<h1>` innerhalb von Gliederungselementen sind nicht mehr relevant, da der Outline-Algorithmus [aus der HTML-Spezifikation entfernt wurde](https://github.com/whatwg/html/pull/7829). ([Firefox Bug 1883896](https://bugzil.la/1883896)).

  > [!NOTE]
  > Die Präferenz für dieses Feature funktioniert umgekehrt: Sie ist in der Nightly-Version auf `false` gesetzt, was die UA-Stilisierung für Überschriften entfernt, die in Gliederungselementen verschachtelt sind. In allen anderen Kanälen ist sie auf `true` gesetzt, was die bestehende UA-Stilisierung für die verschachtelten Überschriften beibehält.
