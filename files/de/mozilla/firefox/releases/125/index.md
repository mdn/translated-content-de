---
title: Firefox 125 Versionshinweise für Entwickler
short-title: Firefox 125
slug: Mozilla/Firefox/Releases/125
l10n:
  sourceCommit: 56f3d7018159127dbe92842413fb45d0aa7e8193
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 125, die Entwickler betreffen. Firefox 125 wurde am [16. April 2024](https://whattrainisitnow.com/release/?version=125) veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen.

### CSS

- Die {{cssxref("align-content")}} Eigenschaft wurde aktualisiert, damit sie mit `display: block;` Layouts funktioniert. Dies bringt alle Layout-Positionen von `flex` und `grid` zu `block`, was es Entwicklern ermöglicht, Block-Elemente auszurichten, ohne ihren Container in einen `flex` oder `grid`-Container umzuwandeln. ([Firefox-Bug 1882853](https://bugzil.la/1882853)).
- Die CSS-Eigenschaft [`transform-box`](/de/docs/Web/CSS/Reference/Properties/transform-box) unterstützt jetzt die Werte `content-box` und `stroke-box`. Für die Referenzbox verwendet der `content-box` Wert die [Inhaltsbox](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#parts_of_a_box) und der `stroke-box` Wert verwendet die Rahmenbegrenzungsbox, die die Form eines SVGs enthält ([Firefox-Bug 1868374](https://bugzil.la/1868374)).
- Der CSS-Eigenschaftswert [`content-visibility`](/de/docs/Web/CSS/Reference/Properties/content-visibility) `auto` ist jetzt standardmäßig aktiviert. Dies ermöglicht es, dass Inhalte das Rendering überspringen, wenn sie für den [Benutzer nicht relevant](/de/docs/Web/CSS/Guides/Containment/Using#relevant_to_the_user) sind. ([Firefox-Bug 1874874](https://bugzil.la/1874874)).

### JavaScript

- {{jsxref("Intl.Segmenter")}} wird jetzt unterstützt, was Entwicklern ermöglicht, eine lokalisierte Textsegmentierung eines Strings durchzuführen.
  Dies ermöglicht beispielsweise das Aufteilen eines Strings in Wörter in Sprachen, die keine Leerzeichen zur Trennung verwenden: `Intl.Segmenter("ja-JP", { granularity: "word" })`.
  Sie können auch Strings in Grapheme oder Sätze unterteilen.
  ([Firefox-Bug 1423593](https://bugzil.la/1423593), [Firefox-Bug 1883914](https://bugzil.la/1883914).)

### APIs

- Die [Popover API](/de/docs/Web/API/Popover_API) wird jetzt vollständig unterstützt und ermöglicht die Erstellung von oberen "Popover"-Benutzeroberflächenelementen, die für Aktionsmenüs, benutzerdefinierte "Toast"-Benachrichtigungen, Formularelementvorschläge, Inhaltsauswahlen usw. verwendet werden könnten.
  Der Popover und seine auslösende Taste/Eingabe können entweder mit HTML-Attributen oder JavaScript erstellt und mit CSS gestaltet werden.

  Die folgenden Web-APIs werden implementiert:
  - [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement) Eigenschaften [`popoverTargetElement`](/de/docs/Web/API/HTMLButtonElement/popoverTargetElement) und [`popoverTargetAction`](/de/docs/Web/API/HTMLButtonElement/popoverTargetAction).
  - [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Eigenschaften [`popoverTargetElement`](/de/docs/Web/API/HTMLInputElement/popoverTargetElement) und [`popoverTargetAction`](/de/docs/Web/API/HTMLInputElement/popoverTargetAction).
  - [`HTMLElement`](/de/docs/Web/API/HTMLElement) Eigenschaft [`popover`](/de/docs/Web/API/HTMLElement/popover), sowie Methoden [`hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover), [`showPopover()`](/de/docs/Web/API/HTMLElement/showPopover), und [`togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover), und Ereignisse [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) und [`toggle_event`](/de/docs/Web/API/HTMLElement/toggle_event) (vom Typ [`ToggleEvent`](/de/docs/Web/API/ToggleEvent)).

  Die folgende CSS-Pseudoklasse und das Element werden jetzt für die Verwendung mit Popovers unterstützt:
  - [`:popover-open`](/de/docs/Web/CSS/Reference/Selectors/:popover-open)
  - [`::backdrop`](/de/docs/Web/CSS/Reference/Selectors/::backdrop) wurde erweitert, um Popovers zu unterstützen

  Die folgenden globalen HTML-Attribute werden unterstützt:
  - [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)
  - [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction)

  ([Firefox-Bug 1823757](https://bugzil.la/1823757), [Firefox-Bug 1866993](https://bugzil.la/1866993)).

- Die [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) Eigenschaften [`state`](/de/docs/Web/API/RTCIceTransport/state) und [`gatheringState`](/de/docs/Web/API/RTCIceTransport/gatheringState), und ihre zugehörigen Ereignisse [`statechange`](/de/docs/Web/API/RTCIceTransport/statechange_event) und [`gatheringstatechange`](/de/docs/Web/API/RTCIceTransport/gatheringstatechange_event), werden jetzt unterstützt, zusammen mit der [`RTCDtlsTransport.iceTransport`](/de/docs/Web/API/RTCDtlsTransport/iceTransport) Eigenschaft (die den zugrunde liegenden `RTCIceTransport` für einen [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) zurückgibt).
  Diese ermöglichen eine viel feinere Überwachung als die von den [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) Eigenschaften [`iceGatheringState`](/de/docs/Web/API/RTCPeerConnection/iceGatheringState) und [`connectionState`](/de/docs/Web/API/RTCPeerConnection/connectionState) bereitgestellten Möglichkeiten.
  ([Firefox-Bug 1811912](https://bugzil.la/1811912))
- [`Element.ariaBrailleLabel`](/de/docs/Web/API/Element/ariaBrailleLabel) und [`Element.ariaBrailleRoleDescription`](/de/docs/Web/API/Element/ariaBrailleRoleDescription) werden jetzt unterstützt, sie spiegeln die globalen ARIA-HTML-Attribute [`aria-braillelabel`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-braillelabel) und [`aria-brailleroledescription`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-brailleroledescription) wider. ([Firefox-Bug 1861201](https://bugzil.la/1861201)).

- Unterstützung hinzugefügt, damit Webanwendungen sich elegant erholen können, wenn ein `<canvas>` seine 2D-Kontext vorübergehend verliert, was passieren kann, wenn das `<canvas>` hardwarebeschleunigt auf einer GPU läuft und sein Treiber abstürzt ([Firefox-Bug 1887729](https://bugzil.la/1887729)).
  Hier sind einige zusätzliche Details zu den Ereignissen für verlorene und wiederhergestellte `<canvas>`-Kontexte:
  - Anwendungen können [`contextlost`](/de/docs/Web/API/HTMLCanvasElement/contextlost_event) und [`contextrestored`](/de/docs/Web/API/HTMLCanvasElement/contextrestored_event) Ereignisse überwachen, die auf einem [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) ausgelöst werden, wenn der Kontext verloren und wiederhergestellt wird, beziehungsweise, und können auch den Kontext mit [`CanvasRenderingContext2D.isContextLost()`](/de/docs/Web/API/CanvasRenderingContext2D/isContextLost) überprüfen.
  - Nach dem Auslösen von `contextlost` wird ein Browser versuchen, den verlorenen Kontext standardmäßig neu zu starten, aber der Code kann dies verhindern, indem er das Ereignis abbricht.
  - Offscreen Canvas können auf gleiche Weise überwacht werden, jedoch unter Verwendung der [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas) Ereignisse [`contextlost`](/de/docs/Web/API/OffscreenCanvas/contextlost_event) und [`contextrestored`](/de/docs/Web/API/OffscreenCanvas/contextrestored_event), zusammen mit [`OffscreenCanvasRenderingContext2D.isContextLost()`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D#context).

- Unterstützung für das [`shadowrootclonable`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootclonable) Attribut des `<template>` Elements und die [`shadowRootClonable`](/de/docs/Web/API/HTMLTemplateElement/shadowRootClonable) Eigenschaft der `HTMLTemplateElement`-Schnittstelle hinzugefügt, die es widerspiegelt.
  Diese setzen die [`clonable`](/de/docs/Web/API/ShadowRoot/clonable) Eigenschaft eines [`ShadowRoot`](/de/docs/Web/API/ShadowRoot), das deklarativ mit dem [`<template>`](/de/docs/Web/HTML/Reference/Elements/template) Element erstellt wurde.
  ([Firefox-Bug 1880188](https://bugzil.la/1880188)).

- Die [`readText()`](/de/docs/Web/API/Clipboard/readText) Methode der [`Clipboard`](/de/docs/Web/API/Clipboard) Schnittstelle wird jetzt unterstützt, um Text asynchron von der System-Zwischenablage zu lesen.
  Beim Lesen von Zwischenablagedaten, die nicht von der Seite gleicher Herkunft bereitgestellt werden, erscheint ein Einfügekontextmenü zur Bestätigung durch den Benutzer. ([Firefox-Bug 1877400](https://bugzil.la/1877400)).

#### Medien, WebRTC und Web Audio

- Der [AV1](/de/docs/Web/Media/Guides/Formats/Video_codecs#av1) Codec wird jetzt für [Encrypted Media Extensions](/de/docs/Web/API/Encrypted_Media_Extensions_API) unterstützt, was hochwertigere Wiedergabe von Video-Streaming-Anbietern ermöglicht. ([Firefox-Bug 1601817](https://bugzil.la/1601817)).

#### Entfernungen

- Die `SVGAElement.text` Eigenschaft wurde entfernt. Die [`textContent`](/de/docs/Web/API/Node/textContent) Eigenschaft (geerbt von `Node`) wird allgemein unterstützt und sollte stattdessen verwendet werden. ([Firefox-Bug 1880689](https://bugzil.la/1880689)).

### WebAssembly

- Unterstützung für Wasm-Module hinzugefügt, um mehrere unabhängige lineare Speicher zu verwenden.
  Mehrere Speicher ermöglichen eine effizientere Interoperabilität zwischen Modulen und bessere Polyfills für kommende Wasm-Standards. Sie können zum Beispiel verwendet werden, um separaten Speicher für interne und geteilte Daten, flüchtige und persistente Daten oder Daten, die zwischen Threads geteilt werden müssen, zu erstellen.
  Der Speicher kann in JavaScript erstellt und in das Wasm-Modul importiert oder im Wasm-Modul erstellt und exportiert werden.
  Jeder neue lineare Speicher in einer Wasm-Instanz erhält einen sequentiellen Index, der bei null beginnt.
  WebAssembly [Speicherbefehle](/de/docs/WebAssembly/Reference/Memory) verwenden den Index, um den Speicher zu referenzieren, an dem sie arbeiten, und standardmäßig wird der erste definierte Speicher verwendet, wenn kein Index angegeben ist.
  Weitere Informationen finden Sie in [WebAssembly Memory](/de/docs/WebAssembly/Guides/Understanding_the_text_format#webassembly_memory) im _Understanding WebAssembly text format_.
  ([Firefox-Bug 1860816](https://bugzil.la/1860816)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Unterstützung für die ["userAgent" Fähigkeit](https://w3c.github.io/webdriver/#capabilities) hinzugefügt, die den Standard-User-Agent-Wert des Endpunktnods identifiziert ([Firefox-Bug 1885495](https://bugzil.la/1885495)).

#### WebDriver BiDi

- Unterstützung für den [input.setFiles](https://w3c.github.io/webdriver-bidi/#command-input-setFiles) Befehl hinzugefügt, der es ermöglicht, die Dateien für `<input>`-Elemente mit `type="file"` zu setzen oder zu aktualisieren ([Firefox-Bug 1855040](https://bugzil.la/1855040)).
- Unterstützung für den [storage.deleteCookies](https://w3c.github.io/webdriver-bidi/#command-storage-deleteCookies) Befehl hinzugefügt, um Cookies zu löschen ([Firefox-Bug 1854581](https://bugzil.la/1854581)).
- Unterstützung für "userContext" als ein Feld des "partition" Arguments für Cookie-Befehle hinzugefügt ([Firefox-Bug 1875255](https://bugzil.la/1875255)).
- Ein Problem behoben, bei dem [storage.getCookies](https://w3c.github.io/webdriver-bidi/#command-storage-getCookies) nicht alle erwarteten Cookies für einen bestimmten "sourceOrigin" abgerufen wurden ([Firefox-Bug 1884647](https://bugzil.la/1884647)).
- Ein Problem behoben, bei dem empfohlene Präferenzen nicht angewendet wurden, wenn nur WebDriver BiDi als Remote-Protokoll, was bedeutet, dass CDP deaktiviert ist, aktiviert war ([Firefox-Bug 1882748](https://bugzil.la/1882748)).
- Ein Problem behoben, bei dem das Erstellen und Wechseln zu einem neuen Tab nicht auf die Aktualisierung des `visibilityState` gewartet hat ([Firefox-Bug 1877469](https://bugzil.la/1877469)).

## Änderungen für Add-On-Entwickler

- Der Inhalt der {{WebExtAPIRef("proxy.ProxyInfo")}} Eigenschaft `proxyAuthorization` wird jetzt an den {{httpheader("Proxy-Authorization")}} Anfrage-Header gesendet, der an HTTP-Proxys (zusätzlich zur bestehenden Unterstützung für HTTPS-Proxys) als Teil einer [CONNECT](/de/docs/Web/HTTP/Reference/Methods/CONNECT) Anfrage gesendet wird ([Firefox-Bug 1794464](https://bugzil.la/1794464)).

## Experimentelle Web-Features

Diese Features sind in Firefox 125 enthalten, aber nur in Entwickler-Versionen oder hinter einer Präferenz. Um diese auszuprobieren, können Sie auf der `about:config` Seite nach der zugehörigen Präferenz suchen, um zu sehen, ob sie aktiviert oder deaktiviert sind. Um mehr über diese Features zu erfahren, siehe die [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features) Seite.

- **CSS `transition-behavior`:** `layout.css.transition-behavior.enabled`.

  Die {{cssxref("transition-behavior")}} Eigenschaft ist standardmäßig in der Nightly Version aktiviert.
  Autoren können diese Eigenschaft verwenden, um zu steuern, ob CSS-Übergänge auf Eigenschaften mit einem [diskreten Animationstyp](/de/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete) angewendet werden sollen ([Firefox-Bug 1882408](https://bugzil.la/1882408), [Firefox-Bug 1805727](https://bugzil.la/1805727)).

- **UA-Stile für `<h1>` verschachtelt in Sektions-Elemente:** `layout.css.h1-in-section-ua-styles.enabled`.

  Die `<h1>`-Überschrift schrumpft jetzt nicht mehr in der Schriftgröße, wenn sie in [Sektions-Elementen](/de/docs/Web/HTML/Guides/Content_categories#sectioning_content) `<article>`, `<aside>`, `<nav>`, und `<section>` verschachtelt ist. Die UA-Stile für `<h1>`, die in Sektions-Elementen verschachtelt sind, sind nicht mehr relevant, da der Umriss-Algorithmus [aus der HTML-Spezifikation entfernt wurde](https://github.com/whatwg/html/pull/7829). ([Firefox-Bug 1883896](https://bugzil.la/1883896)).

  > [!NOTE]
  > Die Präferenz für dieses Feature funktioniert umgekehrt: Sie ist auf `false` in der Nightly-Build gesetzt, was die UA-Stilierung für Überschriften in Sektions-Elementen entfernt. Sie ist auf `true` in allen anderen Kanälen gesetzt, was die bestehende UA-Stilierung für die verschachtelten Überschriften beibehält.
