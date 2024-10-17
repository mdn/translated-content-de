---
title: Firefox 125 für Entwickler
slug: Mozilla/Firefox/Releases/125
l10n:
  sourceCommit: acc6ec7d08ede0727a68cbc696e983c572940f62
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 125, die Entwickler betreffen. Firefox 125 wurde am [16. April 2024](https://whattrainisitnow.com/release/?version=125) veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen.

### CSS

- Die {{cssxref("align-content")}}-Eigenschaft wurde aktualisiert, um mit `display: block;`-Layouts zu funktionieren. Dies bringt alle Layout-Positionen von `flex` und `grid` zu `block`, sodass Entwickler Block-Elemente ausrichten können, ohne ihren Container in einen `flex`- oder `grid`-Container umzuwandeln. ([Firefox Bug 1882853](https://bugzil.la/1882853)).
- Die CSS-Eigenschaft [`transform-box`](/de/docs/Web/CSS/transform-box) unterstützt jetzt die Werte `content-box` und `stroke-box`. Bei der Referenzbox verwendet der `content-box`-Wert die [Content-Box](/de/docs/Learn/CSS/Building_blocks/The_box_model#parts_of_a_box) und der `stroke-box`-Wert verwendet die Umrandungsbox, die die Form eines SVGs enthält ([Firefox Bug 1868374](https://bugzil.la/1868374)).
- Der Wert `auto` der CSS-Eigenschaft [`content-visibility`](/de/docs/Web/CSS/content-visibility) ist jetzt standardmäßig aktiviert. Dies ermöglicht es, Rendering zu überspringen, wenn es nicht [für den Benutzer relevant](/de/docs/Web/CSS/CSS_containment#relevant_to_the_user) ist. ([Firefox Bug 1874874](https://bugzil.la/1874874)).

### JavaScript

- {{jsxref("Intl.Segmenter")}} wird jetzt unterstützt und erlaubt es Entwicklern, lokalsensible Textsegmentierung eines Strings durchzuführen.
  Dies ermöglicht es beispielsweise, einen String in Wörtern zu splitten, in Sprachen, die keine Leerzeichen zur Trennung verwenden: `Intl.Segmenter("ja-JP", { granularity: "word" })`.
  Sie können auch Strings in Grapheme oder Sätze aufzuteilen.
  ([Firefox Bug 1423593](https://bugzil.la/1423593), [Firefox Bug 1883914](https://bugzil.la/1883914).)

### APIs

- Die [Popover API](/de/docs/Web/API/Popover_API) wird jetzt vollständig unterstützt und ermöglicht die Erstellung von obersten "Popover"-UI-Elementen, die für Aktionsmenüs, benutzerdefinierte "Toast"-Benachrichtigungen, Formularvorschläge, Inhaltsauswahlen und so weiter verwendet werden könnten.
  Das Popover und sein auslösendes Button/Input-Element können entweder über HTML-Attribute oder JavaScript erstellt und mithilfe von CSS gestylt werden.

  Die folgenden Web-APIs sind implementiert:

  - [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement) Eigenschaften [`popoverTargetElement`](/de/docs/Web/API/HTMLButtonElement/popoverTargetElement) und [`popoverTargetAction`](/de/docs/Web/API/HTMLButtonElement/popoverTargetAction).
  - [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Eigenschaften [`popoverTargetElement`](/de/docs/Web/API/HTMLInputElement/popoverTargetElement) und [`popoverTargetAction`](/de/docs/Web/API/HTMLInputElement/popoverTargetAction).
  - [`HTMLElement`](/de/docs/Web/API/HTMLElement) Eigenschaft [`popover`](/de/docs/Web/API/HTMLElement/popover), Methoden [`hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover), [`showPopover()`](/de/docs/Web/API/HTMLElement/showPopover), und [`togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover), sowie Ereignisse [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) und [`toggle_event`](/de/docs/Web/API/HTMLElement/toggle_event) (vom Typ [`ToggleEvent`](/de/docs/Web/API/ToggleEvent)).

  Die folgende CSS-Pseudoklasse und das Element werden jetzt für die Verwendung mit Popovers unterstützt:

  - [`:popover-open`](/de/docs/Web/CSS/:popover-open)
  - [`::backdrop`](/de/docs/Web/CSS/::backdrop) wurde erweitert, um Popovers zu unterstützen

  Die folgenden globalen HTML-Attribute werden unterstützt:

  - [`popovertarget`](/de/docs/Web/HTML/Element/button#popovertarget)
  - [`popovertargetaction`](/de/docs/Web/HTML/Element/button#popovertargetaction)

  ([Firefox Bug 1823757](https://bugzil.la/1823757), [Firefox Bug 1866993](https://bugzil.la/1866993)).

- Die [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) Eigenschaften [`state`](/de/docs/Web/API/RTCIceTransport/state) und [`gatheringState`](/de/docs/Web/API/RTCIceTransport/gatheringState), und ihre zugehörigen Ereignisse [`statechange`](/de/docs/Web/API/RTCIceTransport/statechange_event) und [`gatheringstatechange`](/de/docs/Web/API/RTCIceTransport/gatheringstatechange_event), werden jetzt unterstützt, zusammen mit der Eigenschaft [`RTCDtlsTransport.iceTransport`](/de/docs/Web/API/RTCDtlsTransport/iceTransport) (die das zugrunde liegende `RTCIceTransport` für ein [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) zurückgibt).
  Diese erlauben eine viel feinere Überwachung als die von den [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) Eigenschaften [`iceGatheringState`](/de/docs/Web/API/RTCPeerConnection/iceGatheringState) und [`connectionState`](/de/docs/Web/API/RTCPeerConnection/connectionState).
  ([Firefox Bug 1811912](https://bugzil.la/1811912))
- [`Element.ariaBrailleLabel`](/de/docs/Web/API/Element/ariaBrailleLabel) und [`Element.ariaBrailleRoleDescription`](/de/docs/Web/API/Element/ariaBrailleRoleDescription) werden jetzt unterstützt, sie reflektieren die globalen ARIA HTML-Attribute [`aria-braillelabel`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-braillelabel) und [`aria-brailleroledescription`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-brailleroledescription). ([Firefox Bug 1861201](https://bugzil.la/1861201)).

- Unterstützung hinzugefügt, um Webanwendungen eine elegante Wiederherstellung zu ermöglichen, wenn ein Canvas vorübergehend seinen 2D-Kontext verliert, was passieren kann, wenn das Canvas hardwarebeschleunigt auf einer GPU läuft und sein Treiber abstürzt ([Firefox Bug 1887729](https://bugzil.la/1887729)).
  Hier sind einige weitere Details zu den Ereignissen für verlorene und wiederhergestellte Canvas-Kontexte:

  - Anwendungen können auf [`contextlost`](/de/docs/Web/API/HTMLCanvasElement/contextlost_event) und [`contextrestored`](/de/docs/Web/API/HTMLCanvasElement/contextrestored_event) Ereignisse achten, die auf einem [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) gefeuert werden, wenn der Kontext verloren geht bzw. wiederhergestellt wird, und können auch den Kontext mithilfe von [`CanvasRenderingContext2D.isContextLost()`](/de/docs/Web/API/CanvasRenderingContext2D/isContextLost) überprüfen.
  - Nachdem `contextlost` ausgegeben wurde, wird ein Browser versuchen, den verlorenen Kontext standardmäßig neu zu starten, aber der Code kann dies verhindern, indem das Ereignis abgebrochen wird.
  - Offscreen-Canvases können auf die gleiche Weise überwacht werden, aber mit [`OffScreenCanvas`](/de/docs/Web/API/OffscreenCanvas) Ereignissen [`contextlost`](/de/docs/Web/API/OffscreenCanvas/contextlost_event) und [`contextrestored`](/de/docs/Web/API/OffscreenCanvas/contextrestored_event), zusammen mit [`OffscreenCanvasRenderingContext2D.isContextLost()`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D#context).

- Unterstützung für das [`shadowrootclonable`](/de/docs/Web/HTML/Element/template#shadowrootclonable) Attribut des `<template>`-Elements und die [`shadowRootClonable`](/de/docs/Web/API/HTMLTemplateElement/shadowRootClonable) Eigenschaft der `HTMLTemplateElement`-Schnittstelle hinzugefügt, die es widerspiegelt.
  Diese setzen die [`clonable`](/de/docs/Web/API/ShadowRoot/clonable) Eigenschaft eines [`ShadowRoot`](/de/docs/Web/API/ShadowRoot), das deklarativ mit dem [`<template>`](/de/docs/Web/HTML/Element/template) Element erstellt wurde.
  ([Firefox Bug 1880188](https://bugzil.la/1880188)).

- Die [`readText()`](/de/docs/Web/API/Clipboard/readText)-Methode der [`Clipboard`](/de/docs/Web/API/Clipboard)-Schnittstelle wird jetzt unterstützt, um Text asynchron aus der Systemzwischenablage zu lesen.
  Beim Lesen von Zwischenablagedaten, die nicht von derselben Ursprungsseite bereitgestellt werden, erscheint ein Einfüge-Kontextmenü, damit der Benutzer es bestätigen kann. ([Firefox Bug 1877400](https://bugzil.la/1877400)).

#### Medien, WebRTC und Web Audio

- Der [AV1](/de/docs/Web/Media/Formats/Video_codecs#av1) Codec wird jetzt für [Encrypted Media Extensions](/de/docs/Web/API/Encrypted_Media_Extensions_API) unterstützt, was eine qualitativ hochwertigere Wiedergabe von Videostreaming-Anbietern ermöglicht. ([Firefox Bug 1601817](https://bugzil.la/1601817)).

#### Entfernungen

- Die [`SVGAElement.text`](/de/docs/Web/API/SVGAElement#svgaelement.text)-Eigenschaft wurde entfernt. Die [`textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft (vom `Node` geerbt) wird breit unterstützt und sollte stattdessen verwendet werden. ([Firefox Bug 1880689](https://bugzil.la/1880689)).

### WebAssembly

- Unterstützung wurde hinzugefügt für die Verwendung mehrerer unabhängiger linearer Speicher in Wasm-Modulen.
  Mehrere Speicher ermöglichen effizientere Interoperabilität zwischen Modulen und bessere Polyfills für kommende Wasm-Standards. Sie können zum Beispiel verwendet werden, um separaten Speicher für interne und geteilte Daten, flüchtige und persistierte Daten oder Daten, die zwischen Threads geteilt werden müssen, zu erstellen.
  Der Speicher kann in JavaScript erstellt und in das Wasm-Modul importiert oder im Wasm-Modul erstellt und exportiert werden.
  Jeder neue lineare Speicher in einer Wasm-Instanz erhält einen fortlaufenden Index, beginnend bei null.
  WebAssembly [Memory-Instruktionen](/de/docs/WebAssembly/Reference/Memory) verwenden den Index, um den Speicher zu referenzieren, auf dem sie arbeiten; sie greifen standardmäßig auf den ersten definierten Speicher zu, falls kein Index angegeben ist.
  Für weitere Informationen siehe [WebAssembly Memory](/de/docs/WebAssembly/Understanding_the_text_format#webassembly_memory) im Abschnitt _Understanding WebAssembly text format_.
  ([Firefox Bug 1860816](https://bugzil.la/1860816)).

### WebDriver Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Unterstützung für die ["userAgent"-Fähigkeit](https://w3c.github.io/webdriver/#capabilities) hinzugefügt, die den Standard-User-Agent-Wert des Endpoint-Knotens identifiziert ([Firefox Bug 1885495](https://bugzil.la/1885495)).

#### WebDriver BiDi

- Unterstützung für den [input.setFiles](https://w3c.github.io/webdriver-bidi/#command-input-setFiles)-Befehl hinzugefügt, der es ermöglicht, die Dateien für `<input>`-Elemente mit `type="file"` festzulegen oder zu aktualisieren ([Firefox Bug 1855040](https://bugzil.la/1855040)).
- Unterstützung für den [storage.deleteCookies](https://w3c.github.io/webdriver-bidi/#command-storage-deleteCookies)-Befehl hinzugefügt, um Cookies zu löschen ([Firefox Bug 1854581](https://bugzil.la/1854581)).
- Unterstützung für "userContext" als Feld des "partition"-Arguments für Cookie-Befehle ([Firefox Bug 1875255](https://bugzil.la/1875255)).
- Ein Problem behoben, bei dem [storage.getCookies](https://w3c.github.io/webdriver-bidi/#command-storage-getCookies) nicht alle erwarteten Cookies für einen gegebenen "sourceOrigin" abrufen würde ([Firefox Bug 1884647](https://bugzil.la/1884647)).
- Ein Problem behoben, bei dem empfohlene Präferenzen nicht angewandt würden, wenn nur WebDriver BiDi als Remote-Protokoll aktiviert war, was bedeutet, dass CDP deaktiviert war ([Firefox Bug 1882748](https://bugzil.la/1882748)).
- Ein Problem behoben, bei dem das Erstellen und Wechseln zu einem neuen Tab nicht auf die Aktualisierung des `visibilityState` wartete ([Firefox Bug 1877469](https://bugzil.la/1877469)).

## Änderungen für Add-on-Entwickler

- Der Inhalt der {{WebExtAPIRef("proxy.ProxyInfo")}}-Eigenschaft `proxyAuthorization` wird jetzt an den {{httpheader("Proxy-Authorization")}}-Anforderungsheader gesendet, der an HTTP-Proxys gesendet wird (zusätzlich zur bestehenden Unterstützung für HTTPS-Proxys) als Teil einer [CONNECT](/de/docs/Web/HTTP/Methods/CONNECT)-Anfrage ([Firefox Bug 1794464](https://bugzil.la/1794464)).

## Experimentelle Web-Features

Diese Funktionen werden in Firefox 125 bereitgestellt, aber nur in Entwickler-Releases oder hinter einer Präferenz. Um diese auszuprobieren, können Sie nach der zugehörigen Präferenz auf der `about:config`-Seite suchen, um zu sehen, ob sie aktiviert oder deaktiviert ist. Weitere Informationen zu diesen Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **CSS `transition-behavior`:** `layout.css.transition-behavior.enabled`.

  Die {{cssxref("transition-behavior")}}-Eigenschaft ist standardmäßig im Nightly-Release aktiviert.
  Autoren können diese Eigenschaft verwenden, um zu steuern, ob CSS-Übergänge auf Eigenschaften mit einem [diskreten Animationstyp](/de/docs/Web/CSS/CSS_animated_properties#discrete) angewendet werden sollen ([Firefox Bug 1882408](https://bugzil.la/1882408), [Firefox Bug 1805727](https://bugzil.la/1805727)).

- **UA-Stile für `<h1>` innerhalb von Gliederungselementen:** `layout.css.h1-in-section-ua-styles.enabled`.

  Die `<h1>`-Überschrift verringert ihre Schriftgröße jetzt nicht mehr, wenn sie innerhalb von [Gliederungselementen](/de/docs/Web/HTML/Content_categories#sectioning_content) `<article>`, `<aside>`, `<nav>`, und `<section>` verschachtelt ist. Die UA-Stile für `<h1>`, die innerhalb von Gliederungselementen verschachtelt sind, sind nicht mehr relevant, da der Outline-Algorithmus [aus der HTML-Spezifikation entfernt wurde](https://github.com/whatwg/html/pull/7829). ([Firefox Bug 1883896](https://bugzil.la/1883896)).

  > [!NOTE]
  > Die Präferenz für diese Funktion funktioniert umgekehrt: Sie ist im Nightly-Build auf `false` gesetzt, was das UA-Styling für Überschriften entfernt, die in Gliederungselementen verschachtelt sind. In allen anderen Kanälen ist sie auf `true` gesetzt, was das bestehende UA-Styling für die verschachtelten Überschriften beibehält.

## Ältere Versionen

{{Firefox_for_developers}}
