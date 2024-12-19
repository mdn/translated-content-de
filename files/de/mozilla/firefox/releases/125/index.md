---
title: Firefox 125 für Entwickler
slug: Mozilla/Firefox/Releases/125
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 125, die Entwickler betreffen. Firefox 125 wurde am [16. April 2024](https://whattrainisitnow.com/release/?version=125) veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen.

### CSS

- Die {{cssxref("align-content")}}-Eigenschaft wurde aktualisiert, um mit `display: block;`-Layouts zu funktionieren. Dies bringt alle Layoutpositionen von `flex` und `grid` zu `block`, womit Entwickler Block-Elemente ausrichten können, ohne ihren Container in einen `flex`- oder `grid`-Container umzuwandeln. ([Firefox Fehler 1882853](https://bugzil.la/1882853)).
- Die CSS-Eigenschaft [`transform-box`](/de/docs/Web/CSS/transform-box) unterstützt nun die Werte `content-box` und `stroke-box`. Für die Referenzbox verwendet der `content-box`-Wert die [Content-Box](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#parts_of_a_box), und der `stroke-box`-Wert verwendet die Rahmenbox eines SVGs. ([Firefox Fehler 1868374](https://bugzil.la/1868374)).
- Der CSS-Eigenschaftswert [`content-visibility`](/de/docs/Web/CSS/content-visibility) `auto` ist nun standardmäßig aktiviert. Dies ermöglicht das Überspringen der Darstellung von Inhalten, wenn diese nicht für den [Benutzer relevant](/de/docs/Web/CSS/CSS_containment#relevant_to_the_user) sind. ([Firefox Fehler 1874874](https://bugzil.la/1874874)).

### JavaScript

- {{jsxref("Intl.Segmenter")}} wird nun unterstützt, was es Entwicklern ermöglicht, eine lokalsensitive Textsegmentierung eines Strings durchzuführen.
  Dies erlaubt beispielsweise, einen String in Wörter zu teilen in Sprachen, die keine Leerzeichen verwenden, um diese zu trennen: `Intl.Segmenter("ja-JP", { granularity: "word" })`.
  Sie können auch Strings in Grapheme oder Sätze aufteilen.
  ([Firefox Fehler 1423593](https://bugzil.la/1423593), [Firefox Fehler 1883914](https://bugzil.la/1883914)).

### APIs

- Die [Popover API](/de/docs/Web/API/Popover_API) wird nun vollständig unterstützt und ermöglicht die Erstellung von "Popover"-Elementen auf oberster Ebene, die für Aktionsmenüs, benutzerdefinierte "Toast"-Benachrichtigungen, Formularelementvorschläge, Inhaltsauswahlen usw. verwendet werden könnten.
  Der Popover und sein auslösendes Button-/Eingabeelement können entweder über HTML-Attribute oder JavaScript erstellt und mit CSS gestylt werden.

  Die folgenden Web-APIs wurden implementiert:

  - [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement)-Eigenschaften [`popoverTargetElement`](/de/docs/Web/API/HTMLButtonElement/popoverTargetElement) und [`popoverTargetAction`](/de/docs/Web/API/HTMLButtonElement/popoverTargetAction).
  - [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Eigenschaften [`popoverTargetElement`](/de/docs/Web/API/HTMLInputElement/popoverTargetElement) und [`popoverTargetAction`](/de/docs/Web/API/HTMLInputElement/popoverTargetAction).
  - [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Eigenschaft [`popover`](/de/docs/Web/API/HTMLElement/popover), [`hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover), [`showPopover()`](/de/docs/Web/API/HTMLElement/showPopover), und [`togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover)-Methoden sowie [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) und [`toggle_event`](/de/docs/Web/API/HTMLElement/toggle_event)-Ereignisse (vom Typ [`ToggleEvent`](/de/docs/Web/API/ToggleEvent)).

  Die folgenden CSS-Pseudoklasse und das Element werden jetzt zur Verwendung mit Popovers unterstützt:

  - [`:popover-open`](/de/docs/Web/CSS/:popover-open)
  - [`::backdrop`](/de/docs/Web/CSS/::backdrop) wurde erweitert, um Popovers zu unterstützen

  Die folgenden globalen HTML-Attribute werden unterstützt:

  - [`popovertarget`](/de/docs/Web/HTML/Element/button#popovertarget)
  - [`popovertargetaction`](/de/docs/Web/HTML/Element/button#popovertargetaction)

  ([Firefox Fehler 1823757](https://bugzil.la/1823757), [Firefox Fehler 1866993](https://bugzil.la/1866993)).

- Die [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport)-Eigenschaften [`state`](/de/docs/Web/API/RTCIceTransport/state) und [`gatheringState`](/de/docs/Web/API/RTCIceTransport/gatheringState) und deren zugehörige Ereignisse [`statechange`](/de/docs/Web/API/RTCIceTransport/statechange_event) und [`gatheringstatechange`](/de/docs/Web/API/RTCIceTransport/gatheringstatechange_event) werden nun unterstützt, zusammen mit der [`RTCDtlsTransport.iceTransport`](/de/docs/Web/API/RTCDtlsTransport/iceTransport)-Eigenschaft (die das zugrunde liegende `RTCIceTransport` für ein [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) zurückgibt).
  Diese ermöglichen eine viel feinere Überwachung als durch die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Eigenschaften [`iceGatheringState`](/de/docs/Web/API/RTCPeerConnection/iceGatheringState) und [`connectionState`](/de/docs/Web/API/RTCPeerConnection/connectionState) bereitgestellt.
  ([Firefox Fehler 1811912](https://bugzil.la/1811912))
- [`Element.ariaBrailleLabel`](/de/docs/Web/API/Element/ariaBrailleLabel) und [`Element.ariaBrailleRoleDescription`](/de/docs/Web/API/Element/ariaBrailleRoleDescription) werden nun unterstützt und reflektieren die globalen ARIA-HTML-Attribute [`aria-braillelabel`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-braillelabel) und [`aria-brailleroledescription`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-brailleroledescription). ([Firefox Fehler 1861201](https://bugzil.la/1861201)).

- Unterstützung wurde hinzugefügt, um es Webanwendungen zu ermöglichen, sich elegant zu erholen, wenn ein Canvas vorübergehend seinen 2D-Kontext verliert, was passieren könnte, wenn das Canvas hardwarebeschleunigt auf einem GPU läuft und dessen Treiber abstürzt ([Firefox Fehler 1887729](https://bugzil.la/1887729)).
  Hier sind einige zusätzliche Informationen zu den Ereignissen für verlorene und wiederhergestellte Canvas-Kontexte:

  - Anwendungen können auf [`contextlost`](/de/docs/Web/API/HTMLCanvasElement/contextlost_event) und [`contextrestored`](/de/docs/Web/API/HTMLCanvasElement/contextrestored_event)-Ereignisse überwachen, die auf [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) ausgelöst werden, wenn der Kontext verloren geht und wiederhergestellt wird, und können auch den Kontext mit [`CanvasRenderingContext2D.isContextLost()`](/de/docs/Web/API/CanvasRenderingContext2D/isContextLost) überprüfen.
  - Nachdem `contextlost` gesendet wurde, wird ein Browser versuchen, den verlorenen Kontext standardmäßig neu zu starten, aber Code kann dies verhindern, indem das Ereignis abgebrochen wird.
  - Offscreen-Canvases können auf die gleiche Weise überwacht werden, jedoch mithilfe von [`OffScreenCanvas`](/de/docs/Web/API/OffscreenCanvas)-Ereignissen [`contextlost`](/de/docs/Web/API/OffscreenCanvas/contextlost_event) und [`contextrestored`](/de/docs/Web/API/OffscreenCanvas/contextrestored_event), sowie [`OffscreenCanvasRenderingContext2D.isContextLost()`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D#context).

- Unterstützung für das [`shadowrootclonable`](/de/docs/Web/HTML/Element/template#shadowrootclonable)-Attribut des `<template>`-Elements wurde hinzugefügt, und die [`shadowRootClonable`](/de/docs/Web/API/HTMLTemplateElement/shadowRootClonable)-Eigenschaft der `HTMLTemplateElement`-Schnittstelle, die es reflektiert.
  Diese setzen die [`clonable`](/de/docs/Web/API/ShadowRoot/clonable)-Eigenschaft eines [`ShadowRoot`](/de/docs/Web/API/ShadowRoot), das deklarativ mit dem [`<template>`](/de/docs/Web/HTML/Element/template)-Element erstellt wurde.
  ([Firefox Fehler 1880188](https://bugzil.la/1880188)).

- Die [`readText()`](/de/docs/Web/API/Clipboard/readText)-Methode der [`Clipboard`](/de/docs/Web/API/Clipboard)-Schnittstelle wird nun unterstützt, um textuell asynchron vom System-Clipboard zu lesen.
  Wenn Clipboard-Daten gelesen werden, die nicht von derselben Ursprungsseite bereitgestellt werden, wird ein Einfüge-Kontextmenü erscheinen, um vom Benutzer bestätigt zu werden. ([Firefox Fehler 1877400](https://bugzil.la/1877400)).

#### Medien, WebRTC und Web Audio

- Der [AV1](/de/docs/Web/Media/Formats/Video_codecs#av1)-Codec wird nun für [Encrypted Media Extensions](/de/docs/Web/API/Encrypted_Media_Extensions_API) unterstützt, was eine qualitativ höherwertige Wiedergabe von Videostreaming-Anbietern ermöglicht. ([Firefox Fehler 1601817](https://bugzil.la/1601817)).

#### Entfernungen

- Die Eigenschaft [`SVGAElement.text`](/de/docs/Web/API/SVGAElement#svgaelement.text) wurde entfernt. Die Eigenschaft [`textContent`](/de/docs/Web/API/Node/textContent) (geerbt von `Node`) ist breit unterstützt und sollte stattdessen verwendet werden. ([Firefox Fehler 1880689](https://bugzil.la/1880689)).

### WebAssembly

- Unterstützung wurde hinzugefügt für Wasm-Module, um mehrere unabhängige lineare Speicher zu nutzen.
  Mehrere Speicher ermöglichen effizientere Interoperabilität zwischen Modulen und bessere Polyfills für kommende Wasm-Standards. Sie können verwendet werden, um beispielsweise separaten Speicher für interne und geteilte Daten, flüchtige und gespeicherte Daten, oder Daten, die zwischen Threads geteilt werden müssen, zu erstellen.
  Der Speicher kann in JavaScript erstellt und in das Wasm-Modul importiert oder im Wasm-Modul erstellt und exportiert werden.
  Jeder neue lineare Speicher in einer Wasm-Instanz erhält einen sequentiellen Index, beginnend bei null.
  WebAssembly [Speicherinstruktionen](/de/docs/WebAssembly/Reference/Memory) verwenden den Index, um den Speicher zu referenzieren, auf dem sie operieren, wobei standardmäßig der erste definierte Speicher verwendet wird, wenn kein Index angegeben ist.
  Für weitere Informationen siehe [WebAssembly Speicher](/de/docs/WebAssembly/Understanding_the_text_format#webassembly_memory) in _Understanding WebAssembly text format_.
  ([Firefox Fehler 1860816](https://bugzil.la/1860816)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemeines

- Unterstützung für die ["userAgent"-Fähigkeit](https://w3c.github.io/webdriver/#capabilities) wurde hinzugefügt, die den Standard-User-Agent-Wert des Endpunkts identifiziert ([Firefox Fehler 1885495](https://bugzil.la/1885495)).

#### WebDriver BiDi

- Unterstützung für den [input.setFiles](https://w3c.github.io/webdriver-bidi/#command-input-setFiles)-Befehl wurde hinzugefügt, der es ermöglicht, Dateien für `<input>`-Elemente mit `type="file"` zu setzen oder zu aktualisieren ([Firefox Fehler 1855040](https://bugzil.la/1855040)).
- Unterstützung für den [storage.deleteCookies](https://w3c.github.io/webdriver-bidi/#command-storage-deleteCookies)-Befehl, um Cookies zu löschen, wurde hinzugefügt ([Firefox Fehler 1854581](https://bugzil.la/1854581)).
- Unterstützung für "userContext" als ein Feld des "partition"-Arguments für Cookie-Befehle wurde hinzugefügt ([Firefox Fehler 1875255](https://bugzil.la/1875255)).
- Es wurde ein Problem behoben, bei dem [storage.getCookies](https://w3c.github.io/webdriver-bidi/#command-storage-getCookies) nicht alle erwarteten Cookies für einen bestimmten "sourceOrigin" abrufen würde ([Firefox Fehler 1884647](https://bugzil.la/1884647)).
- Ein Problem wurde behoben, bei dem empfohlene Einstellungen nicht angewendet wurden, wenn nur WebDriver BiDi als Remote-Protokoll aktiviert war, was bedeutet, dass CDP deaktiviert war ([Firefox Fehler 1882748](https://bugzil.la/1882748)).
- Ein Problem wurde behoben, bei dem das Erstellen und Wechseln zu einem neuen Tab nicht auf das Aktualisieren des `visibilityState` gewartet hätte ([Firefox Fehler 1877469](https://bugzil.la/1877469)).

## Änderungen für Add-on-Entwickler

- Der Inhalt der {{WebExtAPIRef("proxy.ProxyInfo")}}-Eigenschaft `proxyAuthorization` wird nun an die {{httpheader("Proxy-Authorization")}}-Anforderungsheader gesendet, die an HTTP-Proxies geschickt werden (zusätzlich zur bestehenden Unterstützung für HTTPS-Proxies) als Teil einer [CONNECT](/de/docs/Web/HTTP/Methods/CONNECT)-Anforderung ([Firefox Fehler 1794464](https://bugzil.la/1794464)).

## Experimentelle Web-Features

Diese Funktionen sind in Firefox 125 vorhanden, jedoch nur in Entwickler-Versionen oder hinter einer Einstellung. Um diese auszuprobieren, können Sie nach der entsprechenden Einstellung auf der `about:config`-Seite suchen, um zu sehen, ob sie aktiviert oder deaktiviert sind. Um mehr über diese Funktionen zu erfahren, siehe die [Experimental features](/de/docs/Mozilla/Firefox/Experimental_features)-Seite.

- **CSS `transition-behavior`:** `layout.css.transition-behavior.enabled`.

  Die {{cssxref("transition-behavior")}}-Eigenschaft ist standardmäßig in der Nightly-Version aktiviert.
  Autoren können diese Eigenschaft verwenden, um zu kontrollieren, ob CSS-Übergänge auf Eigenschaften mit einem [diskreten Animationstyp](/de/docs/Web/CSS/CSS_animated_properties#discrete) angewendet werden sollen. ([Firefox Fehler 1882408](https://bugzil.la/1882408), [Firefox Fehler 1805727](https://bugzil.la/1805727)).

- **UA-Stile für `<h1>` innerhalb von Gliederungselementen:** `layout.css.h1-in-section-ua-styles.enabled`.

  Die `<h1>`-Überschrift verringert sich jetzt nicht mehr in der Schriftgröße, wenn sie innerhalb von [Gliederungselementen](/de/docs/Web/HTML/Content_categories#sectioning_content) `<article>`, `<aside>`, `<nav>` und `<section>` verschachtelt ist. Die UA-Stile für `<h1>`, die innerhalb von Gliederungselementen verschachtelt sind, sind nicht mehr relevant, da der Outline-Algorithmus [aus der HTML-Spezifikation entfernt wurde](https://github.com/whatwg/html/pull/7829). ([Firefox Fehler 1883896](https://bugzil.la/1883896)).

  > [!NOTE]
  > Die Einstellung für diese Funktion funktioniert umgekehrt: Sie ist in der Nightly-Version auf `false` gesetzt, was die UA-Styling für innerhalb von Gliederungselementen verschachtelte Überschriften entfernt. In allen anderen Kanälen ist sie auf `true` gesetzt, wodurch das bestehende UA-Styling für die verschachtelten Überschriften beibehalten wird.

## Ältere Versionen

{{Firefox_for_developers}}
