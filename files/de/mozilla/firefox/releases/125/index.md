---
title: Firefox 125 für Entwickler
slug: Mozilla/Firefox/Releases/125
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 125, die Entwickler betreffen. Firefox 125 wurde am [16. April 2024](https://whattrainisitnow.com/release/?version=125) veröffentlicht.

## Änderungen für Web-Entwickler

### HTML

Keine bemerkenswerten Änderungen.

### CSS

- Die {{cssxref("align-content")}}-Eigenschaft wurde aktualisiert, um mit `display: block;`-Layouts zu arbeiten. Dies bringt alle Layout-Positionen von `flex` und `grid` zu `block`, was es Entwicklern ermöglicht, Blockelemente ohne die Umwandlung des Containers in einen `flex` oder `grid` Container auszurichten. ([Firefox-Bug 1882853](https://bugzil.la/1882853)).
- Die CSS-Eigenschaft [`transform-box`](/de/docs/Web/CSS/transform-box) unterstützt nun die Werte `content-box` und `stroke-box`. Für die Referenzbox verwendet der Wert `content-box` den [Inhaltsbereich](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#parts_of_a_box) und der Wert `stroke-box` den Umriss für den Umriss eines SVGs ([Firefox-Bug 1868374](https://bugzil.la/1868374)).
- Der CSS-Eigenschaftswert [`content-visibility`](/de/docs/Web/CSS/content-visibility) `auto` ist nun standardmäßig aktiviert. Dies erlaubt es Inhalten, das Rendering zu überspringen, wenn sie für den Benutzer [nicht relevant sind](/de/docs/Web/CSS/CSS_containment#relevant_to_the_user). ([Firefox-Bug 1874874](https://bugzil.la/1874874)).

### JavaScript

- {{jsxref("Intl.Segmenter")}} wird jetzt unterstützt, was es Entwicklern ermöglicht, eine kontextsensitive Textsegmentierung eines Strings durchzuführen.
  Dies ermöglicht beispielsweise das Aufteilen eines Strings in Wörter in Sprachen, die keine Leerzeichen zur Trennung verwenden: `Intl.Segmenter("ja-JP", { granularity: "word" })`.
  Es ist auch möglich, Strings in Grapheme oder Sätze zu teilen.
  ([Firefox-Bug 1423593](https://bugzil.la/1423593), [Firefox-Bug 1883914](https://bugzil.la/1883914).)

### APIs

- Die [Popover-API](/de/docs/Web/API/Popover_API) wird jetzt vollständig unterstützt, sodass die Erstellung von "Popover"-Benutzeroberflächenelementen der obersten Ebene möglich ist, die für Aktionsmenüs, benutzerdefinierte "Toast"-Benachrichtigungen, Formularelement-Vorschläge, Inhaltspicker usw. verwendet werden können.
  Der Popover und sein auslösendes Schaltflächen-/Eingabeelement können entweder mit HTML-Attributen oder JavaScript erstellt und mit CSS gestaltet werden.

  Die folgenden Web-APIs sind implementiert:

  - Eigenschaften für [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement) [`popoverTargetElement`](/de/docs/Web/API/HTMLButtonElement/popoverTargetElement) und [`popoverTargetAction`](/de/docs/Web/API/HTMLButtonElement/popoverTargetAction).
  - Eigenschaften für [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) [`popoverTargetElement`](/de/docs/Web/API/HTMLInputElement/popoverTargetElement) und [`popoverTargetAction`](/de/docs/Web/API/HTMLInputElement/popoverTargetAction).
  - Eigenschaften für [`HTMLElement`](/de/docs/Web/API/HTMLElement) [`popover`](/de/docs/Web/API/HTMLElement/popover), Methoden [`hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover), [`showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) und [`togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover), sowie Ereignisse [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) und [`toggle_event`](/de/docs/Web/API/HTMLElement/toggle_event) (vom Typ [`ToggleEvent`](/de/docs/Web/API/ToggleEvent)).

  Die folgende CSS-Pseudoklasse und das Element werden nun für die Verwendung mit Popovers unterstützt:

  - [`:popover-open`](/de/docs/Web/CSS/:popover-open)
  - [`::backdrop`](/de/docs/Web/CSS/::backdrop) wurde erweitert, um Popovers zu unterstützen.

  Die folgenden globalen HTML-Attribute werden unterstützt:

  - [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)
  - [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction)

  ([Firefox-Bug 1823757](https://bugzil.la/1823757), [Firefox-Bug 1866993](https://bugzil.la/1866993)).

- Die [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport)-Eigenschaften [`state`](/de/docs/Web/API/RTCIceTransport/state) und [`gatheringState`](/de/docs/Web/API/RTCIceTransport/gatheringState), sowie deren zugehörige Ereignisse [`statechange`](/de/docs/Web/API/RTCIceTransport/statechange_event) und [`gatheringstatechange`](/de/docs/Web/API/RTCIceTransport/gatheringstatechange_event), werden nun unterstützt, zusammen mit der [`RTCDtlsTransport.iceTransport`](/de/docs/Web/API/RTCDtlsTransport/iceTransport)-Eigenschaft (die das zugrunde liegende `RTCIceTransport` für ein [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) zurückgibt).
  Diese erlauben eine viel feinere Überwachung als die von den [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Eigenschaften [`iceGatheringState`](/de/docs/Web/API/RTCPeerConnection/iceGatheringState) und [`connectionState`](/de/docs/Web/API/RTCPeerConnection/connectionState) bereitgestellte.
  ([Firefox-Bug 1811912](https://bugzil.la/1811912))
- [`Element.ariaBrailleLabel`](/de/docs/Web/API/Element/ariaBrailleLabel) und [`Element.ariaBrailleRoleDescription`](/de/docs/Web/API/Element/ariaBrailleRoleDescription) werden jetzt unterstützt und spiegeln die globalen ARIA-HTML-Attribute [`aria-braillelabel`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-braillelabel) und [`aria-brailleroledescription`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-brailleroledescription) wider. ([Firefox-Bug 1861201](https://bugzil.la/1861201)).

- Unterstützung wurde hinzugefügt, um Webanwendungen zu ermöglichen, sich elegant von einem vorübergehenden Verlust des 2D-Kontexts einer Leinwand zu erholen, was passieren kann, wenn die Leinwand hardwarebeschleunigt auf einer GPU läuft und der Treiber abstürzt ([Firefox-Bug 1887729](https://bugzil.la/1887729)).
  Hier sind einige zusätzliche Details zu den Ereignissen für verlorene und wiederhergestellte Canvas-Kontexte:

  - Anwendungen können auf [`contextlost`](/de/docs/Web/API/HTMLCanvasElement/contextlost_event) und [`contextrestored`](/de/docs/Web/API/HTMLCanvasElement/contextrestored_event)-Ereignisse überwachen, die jeweils auf [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) ausgelöst werden, wenn der Kontext verloren geht und wiederhergestellt wird, und können den Kontext auch mit [`CanvasRenderingContext2D.isContextLost()`](/de/docs/Web/API/CanvasRenderingContext2D/isContextLost) überprüfen.
  - Nachdem `contextlost` ausgelöst wurde, wird der Browser standardmäßig versuchen, den verlorenen Kontext neu zu starten, aber Code kann dies verhindern, indem er das Ereignis abbricht.
  - Offscreen-Leinwände können auf die gleiche Weise überwacht werden, jedoch unter Verwendung der [`OffScreenCanvas`](/de/docs/Web/API/OffscreenCanvas)-Ereignisse [`contextlost`](/de/docs/Web/API/OffscreenCanvas/contextlost_event) und [`contextrestored`](/de/docs/Web/API/OffscreenCanvas/contextrestored_event), zusammen mit [`OffscreenCanvasRenderingContext2D.isContextLost()`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D#context).

- Unterstützung für das [`shadowrootclonable`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootclonable)-Attribut des `<template>`-Elements und die [`shadowRootClonable`](/de/docs/Web/API/HTMLTemplateElement/shadowRootClonable)-Eigenschaft der `HTMLTemplateElement`-Schnittstelle, die es widerspiegelt, wurde hinzugefügt.
  Diese legen die [`clonable`](/de/docs/Web/API/ShadowRoot/clonable)-Eigenschaft eines [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) fest, das deklarativ mit dem [`<template>`](/de/docs/Web/HTML/Reference/Elements/template)-Element erstellt wurde.
  ([Firefox-Bug 1880188](https://bugzil.la/1880188)).

- Die Methode [`readText()`](/de/docs/Web/API/Clipboard/readText) des [`Clipboard`](/de/docs/Web/API/Clipboard)-Interfaces wird nun unterstützt, um asynchron Text von der Systemzwischenablage zu lesen.
  Beim Lesen von Zwischenablagedaten, die nicht von derselben Ursprungsseite bereitgestellt werden, erscheint ein Einfügekontextmenü, damit der Benutzer bestätigen kann. ([Firefox-Bug 1877400](https://bugzil.la/1877400)).

#### Medien, WebRTC und Web Audio

- Der [AV1](/de/docs/Web/Media/Guides/Formats/Video_codecs#av1)-Codec wird nun für [Encrypted Media Extensions](/de/docs/Web/API/Encrypted_Media_Extensions_API) unterstützt, was eine hochwertigere Wiedergabe von Videostreaming-Anbietern ermöglicht. ([Firefox-Bug 1601817](https://bugzil.la/1601817)).

#### Entfernungen

- Die Eigenschaft [`SVGAElement.text`](/de/docs/Web/API/SVGAElement#svgaelement.text) wurde entfernt. Die Eigenschaft [`textContent`](/de/docs/Web/API/Node/textContent) (vererbt von `Node`) ist in großem Umfang unterstützt und sollte stattdessen verwendet werden. ([Firefox-Bug 1880689](https://bugzil.la/1880689)).

### WebAssembly

- Unterstützung wurde hinzugefügt, damit Wasm-Module mehrere unabhängige lineare Speicher verwenden können.
  Mehrere Speicher ermöglichen eine effizientere Interoperabilität zwischen Modulen und bessere Polyfills für kommende Wasm-Standards. Sie können beispielsweise verwendet werden, um separaten Speicher für interne und gemeinsam genutzte Daten, flüchtige und persistierte Daten oder Daten, die zwischen Threads geteilt werden müssen, zu erstellen.
  Der Speicher kann in JavaScript erstellt und in das Wasm-Modul importiert oder im Wasm-Modul erstellt und exportiert werden.
  Jeder neue lineare Speicher in einer Wasm-Instanz erhält einen sequentiellen Index, beginnend bei Null.
  WebAssembly-[Speicheranweisungen](/de/docs/WebAssembly/Reference/Memory) verwenden den Index, um auf den Speicher zu verweisen, auf dem sie arbeiten, und standardmäßig auf den ersten definierten Speicher, falls kein Index angegeben ist.
  Für weitere Informationen siehe [WebAssembly Memory](/de/docs/WebAssembly/Guides/Understanding_the_text_format#webassembly_memory) in _Understanding WebAssembly text format_.
  ([Firefox-Bug 1860816](https://bugzil.la/1860816)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Unterstützung für die ["userAgent"-Fähigkeit](https://w3c.github.io/webdriver/#capabilities) hinzugefügt, die den Standard-User-Agent-Wert des Endknotens identifiziert ([Firefox-Bug 1885495](https://bugzil.la/1885495)).

#### WebDriver BiDi

- Unterstützung für den [input.setFiles](https://w3c.github.io/webdriver-bidi/#command-input-setFiles)-Befehl hinzugefügt, der es ermöglicht, die Dateien für `<input>`-Elemente mit `type="file"` festzulegen oder zu aktualisieren ([Firefox-Bug 1855040](https://bugzil.la/1855040)).
- Unterstützung für den [storage.deleteCookies](https://w3c.github.io/webdriver-bidi/#command-storage-deleteCookies)-Befehl zum Löschen von Cookies hinzugefügt ([Firefox-Bug 1854581](https://bugzil.la/1854581)).
- Unterstützung für "userContext" als Feld des "partition"-Arguments für Cookie-Befehle hinzugefügt ([Firefox-Bug 1875255](https://bugzil.la/1875255)).
- Ein Problem behoben, bei dem [storage.getCookies](https://w3c.github.io/webdriver-bidi/#command-storage-getCookies) nicht alle erwarteten Cookies für einen gegebenen "sourceOrigin" abgerufen würden ([Firefox-Bug 1884647](https://bugzil.la/1884647)).
- Ein Problem behoben, bei dem empfohlene Einstellungen nicht angewendet würden, wenn nur WebDriver BiDi als Remote-Protokoll, was bedeutet, dass CDP deaktiviert ist, aktiviert war ([Firefox-Bug 1882748](https://bugzil.la/1882748)).
- Ein Problem behoben, bei dem das Erstellen und Wechseln zu einem neuen Tab nicht warten würde, bis der `visibilityState` aktualisiert wurde ([Firefox-Bug 1877469](https://bugzil.la/1877469)).

## Änderungen für Add-on-Entwickler

- Der Inhalt der {{WebExtAPIRef("proxy.ProxyInfo")}}-Eigenschaft `proxyAuthorization` wird nun an den {{httpheader("Proxy-Authorization")}}-Anforderungsheader übergeben, der an HTTP-Proxys gesendet wird (zusätzlich zur bereits bestehenden Unterstützung für HTTPS-Proxys) als Teil einer [CONNECT](/de/docs/Web/HTTP/Reference/Methods/CONNECT)-Anforderung ([Firefox-Bug 1794464](https://bugzil.la/1794464)).

## Experimentelle Web-Funktionen

Diese Funktionen sind in Firefox 125 verfügbar, aber nur in Entwicklerversionen oder hinter einer Voreinstellung. Um diese auszuprobieren, können Sie nach der zugehörigen Voreinstellung auf der `about:config`-Seite suchen, um zu sehen, ob sie aktiviert oder deaktiviert sind. Um mehr über diese Funktionen zu erfahren, sehen Sie sich die Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features) an.

- **CSS `transition-behavior`:** `layout.css.transition-behavior.enabled`.

  Die {{cssxref("transition-behavior")}}-Eigenschaft ist standardmäßig in der Nightly-Version aktiviert.
  Autoren können diese Eigenschaft verwenden, um zu steuern, ob CSS-Übergänge auf Eigenschaften mit einem [diskreten Animationstyp](/de/docs/Web/CSS/CSS_animated_properties#discrete) angewendet werden ([Firefox-Bug 1882408](https://bugzil.la/1882408), [Firefox-Bug 1805727](https://bugzil.la/1805727)).

- **UA-Stile für `<h1>`, die in Abschnittselemente eingebettet sind:** `layout.css.h1-in-section-ua-styles.enabled`.

  Die `<h1>`-Überschrift nimmt bei eingebetteten [Abschnittselementen](/de/docs/Web/HTML/Guides/Content_categories#sectioning_content) `<article>`, `<aside>`, `<nav>`, und `<section>` nicht mehr an Schriftgröße ab. Die UA-Stile für `<h1>`, die in Abschnittselemente eingebettet sind, sind nicht mehr relevant, da der Gliederungsalgorithmus [entfernt wurde](https://github.com/whatwg/html/pull/7829) aus der HTML-Spezifikation. ([Firefox-Bug 1883896](https://bugzil.la/1883896)).

  > [!NOTE]
  > Die Voreinstellung für diese Funktion funktioniert umgekehrt: Sie ist auf `false` im Nightly-Build gesetzt, was das UA-Styling für Überschriften entfernt, die in Abschnittselemente eingebettet sind. In allen anderen Kanälen ist sie auf `true` gesetzt, was das bestehende UA-Styling für die eingebetteten Überschriften beibehält.

## Ältere Versionen

{{Firefox_for_developers}}
