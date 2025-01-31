---
title: Firefox 125 für Entwickler
slug: Mozilla/Firefox/Releases/125
l10n:
  sourceCommit: df9d06402163f77fc3e2d327ab63f9dd4af15b38
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 125, die Entwickler betreffen. Firefox 125 wurde am [16. April 2024](https://whattrainisitnow.com/release/?version=125) veröffentlicht.

## Änderungen für Web-Entwickler

### HTML

Keine bemerkenswerten Änderungen.

### CSS

- Die Eigenschaft {{cssxref("align-content")}} wurde aktualisiert, um mit `display: block;` Layouts zu funktionieren. Dies bringt alle Layout-Positionen von `flex` und `grid` zu `block` und ermöglicht es Entwicklern, Block-Elemente auszurichten, ohne ihren Container in einen `flex` oder `grid` Container umzuwandeln. ([Firefox Fehler 1882853](https://bugzil.la/1882853)).
- Die CSS-Eigenschaft [`transform-box`](/de/docs/Web/CSS/transform-box) unterstützt jetzt die Werte `content-box` und `stroke-box`. Für die Referenzbox verwendet der Wert `content-box` die [Content-Box](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#parts_of_a_box) und der Wert `stroke-box` nutzt die Strichbegrenzungsbox, die die Form eines SVG enthält ([Firefox Fehler 1868374](https://bugzil.la/1868374)).
- Der CSS-Eigenschaftswert [`content-visibility`](/de/docs/Web/CSS/content-visibility) `auto` ist jetzt standardmäßig aktiviert. Dies ermöglicht es, Inhalte auszublenden, wenn sie für den [Benutzer nicht relevant](/de/docs/Web/CSS/CSS_containment#relevant_to_the_user) sind. ([Firefox Fehler 1874874](https://bugzil.la/1874874)).

### JavaScript

- {{jsxref("Intl.Segmenter")}} wird jetzt unterstützt und ermöglicht es Entwicklern, lokalisierungssensitives Text-Segmentieren eines Strings durchzuführen.
  Dies ermöglicht es beispielsweise, einen String in Wörter zu teilen in Sprachen, die keine Leerzeichen verwenden, um sie zu trennen: `Intl.Segmenter("ja-JP", { granularity: "word" })`.
  Sie können auch Zeichenfolgen in Grapheme oder Sätze aufteilen.
  ([Firefox Fehler 1423593](https://bugzil.la/1423593), [Firefox Fehler 1883914](https://bugzil.la/1883914).)

### APIs

- Die [Popover-API](/de/docs/Web/API/Popover_API) wird jetzt vollständig unterstützt, was die Erstellung von oberen "Popover"-UI-Elementen ermöglicht, die für Aktionsmenüs, benutzerdefinierte "Toast"-Benachrichtigungen, Vorschläge für Formularelemente, Inhaltsauswahlen usw. verwendet werden können.
  Der Popover und sein auslösendes Button/Input können entweder mit HTML-Attributen oder JavaScript erstellt und mit CSS gestaltet werden.

  Die folgenden Web-APIs sind implementiert:

  - [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement) Eigenschaften [`popoverTargetElement`](/de/docs/Web/API/HTMLButtonElement/popoverTargetElement) und [`popoverTargetAction`](/de/docs/Web/API/HTMLButtonElement/popoverTargetAction).
  - [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Eigenschaften [`popoverTargetElement`](/de/docs/Web/API/HTMLInputElement/popoverTargetElement) und [`popoverTargetAction`](/de/docs/Web/API/HTMLInputElement/popoverTargetAction).
  - [`HTMLElement`](/de/docs/Web/API/HTMLElement) Eigenschaft [`popover`](/de/docs/Web/API/HTMLElement/popover), Methoden [`hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover), [`showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) und [`togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover), sowie die Ereignisse [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) und [`toggle_event`](/de/docs/Web/API/HTMLElement/toggle_event) (vom Typ [`ToggleEvent`](/de/docs/Web/API/ToggleEvent)).

  Die folgenden CSS-Pseudoklasse und Element werden jetzt zur Verwendung mit Popovers unterstützt:

  - [`:popover-open`](/de/docs/Web/CSS/:popover-open)
  - [`::backdrop`](/de/docs/Web/CSS/::backdrop) wurde erweitert, um Popovers zu unterstützen

  Die folgenden globalen HTML-Attribute werden unterstützt:

  - [`popovertarget`](/de/docs/Web/HTML/Element/button#popovertarget)
  - [`popovertargetaction`](/de/docs/Web/HTML/Element/button#popovertargetaction)

  ([Firefox Fehler 1823757](https://bugzil.la/1823757), [Firefox Fehler 1866993](https://bugzil.la/1866993)).

- Die [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) Eigenschaften [`state`](/de/docs/Web/API/RTCIceTransport/state) und [`gatheringState`](/de/docs/Web/API/RTCIceTransport/gatheringState), sowie deren zugehörige Ereignisse [`statechange`](/de/docs/Web/API/RTCIceTransport/statechange_event) und [`gatheringstatechange`](/de/docs/Web/API/RTCIceTransport/gatheringstatechange_event), werden jetzt unterstützt, zusammen mit der [`RTCDtlsTransport.iceTransport`](/de/docs/Web/API/RTCDtlsTransport/iceTransport) Eigenschaft (die das zugrunde liegende `RTCIceTransport` für ein [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) zurückgibt).
  Diese erlauben eine weitaus detailliertere Überwachung als die von den [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) Eigenschaften [`iceGatheringState`](/de/docs/Web/API/RTCPeerConnection/iceGatheringState) und [`connectionState`](/de/docs/Web/API/RTCPeerConnection/connectionState) bereitgestellt.
  ([Firefox Fehler 1811912](https://bugzil.la/1811912))
- [`Element.ariaBrailleLabel`](/de/docs/Web/API/Element/ariaBrailleLabel) und [`Element.ariaBrailleRoleDescription`](/de/docs/Web/API/Element/ariaBrailleRoleDescription) werden jetzt unterstützt und spiegeln jeweils die globalen ARIA HTML-Attribute [`aria-braillelabel`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-braillelabel) und [`aria-brailleroledescription`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-brailleroledescription) wider. ([Firefox Fehler 1861201](https://bugzil.la/1861201)).

- Unterstützung wurde hinzugefügt, um Webanwendungen eine reibungslose Wiederherstellung zu ermöglichen, wenn ein Canvas vorübergehend seinen 2D-Kontext verliert, was passieren kann, wenn das Canvas hardwarebeschleunigt auf einer GPU läuft und ihr Treiber abstürzt ([Firefox Fehler 1887729](https://bugzil.la/1887729)).
  Hier sind einige zusätzliche Details zu den Ereignissen für verlorene und wiederhergestellte Canvas-Kontexte:

  - Anwendungen können auf [`contextlost`](/de/docs/Web/API/HTMLCanvasElement/contextlost_event) und [`contextrestored`](/de/docs/Web/API/HTMLCanvasElement/contextrestored_event) Ereignisse lauschen, die auf einem [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) ausgelöst werden, wenn der Kontext verloren geht und wiederhergestellt wird, und können auch den Kontext mit [`CanvasRenderingContext2D.isContextLost()`](/de/docs/Web/API/CanvasRenderingContext2D/isContextLost) prüfen.
  - Nach dem Auslösen von `contextlost` wird ein Browser standardmäßig versuchen, den verlorenen Kontext neu zu starten, aber Code kann dies verhindern, indem das Ereignis abgebrochen wird.
  - Offscreen-Canvases können auf die gleiche Weise überwacht werden, jedoch mit [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas) Ereignissen [`contextlost`](/de/docs/Web/API/OffscreenCanvas/contextlost_event) und [`contextrestored`](/de/docs/Web/API/OffscreenCanvas/contextrestored_event), sowie [`OffscreenCanvasRenderingContext2D.isContextLost()`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D#context).

- Unterstützung wurde hinzugefügt für das Attribut [`shadowrootclonable`](/de/docs/Web/HTML/Element/template#shadowrootclonable) des `<template>` Elements und die Eigenschaft [`shadowRootClonable`](/de/docs/Web/API/HTMLTemplateElement/shadowRootClonable) der `HTMLTemplateElement` Schnittstelle, die es widerspiegelt.
  Diese setzen die [`clonable`](/de/docs/Web/API/ShadowRoot/clonable) Eigenschaft eines [`ShadowRoot`](/de/docs/Web/API/ShadowRoot), das deklarativ mit dem [`<template>`](/de/docs/Web/HTML/Element/template) Element erstellt wurde.
  ([Firefox Fehler 1880188](https://bugzil.la/1880188)).

- Die Methode [`readText()`](/de/docs/Web/API/Clipboard/readText) der [`Clipboard`](/de/docs/Web/API/Clipboard) Schnittstelle wird jetzt unterstützt, um asynchron Text von der Systemzwischenablage zu lesen.
  Beim Lesen von Zwischenablagedaten, die nicht von der gleichherkommenden Seite bereitgestellt werden, wird ein Einfügekontextmenü angezeigt, um dem Benutzer die Bestätigung zu ermöglichen. ([Firefox Fehler 1877400](https://bugzil.la/1877400)).

#### Medien, WebRTC und Web Audio

- Der [AV1](/de/docs/Web/Media/Formats/Video_codecs#av1) Codec wird jetzt für [Encrypted Media Extensions](/de/docs/Web/API/Encrypted_Media_Extensions_API) unterstützt, was die Wiedergabe in höherer Qualität von Video-Streaming-Diensten ermöglicht. ([Firefox Fehler 1601817](https://bugzil.la/1601817)).

#### Entfernungen

- Die [`SVGAElement.text`](/de/docs/Web/API/SVGAElement#svgaelement.text) Eigenschaft wurde entfernt. Stattdessen sollte die [`textContent`](/de/docs/Web/API/Node/textContent) Eigenschaft (geerbt von `Node`) verwendet werden, die weitreichend unterstützt wird. ([Firefox Fehler 1880689](https://bugzil.la/1880689)).

### WebAssembly

- Es wurde Unterstützung hinzugefügt, um Wasm-Module mehrere unabhängige lineare Speicher verwenden zu lassen.
  Mehrere Speicher ermöglichen eine effizientere Interoperabilität zwischen Modulen und bessere Polyfills für kommende Wasm-Standards. Sie können beispielsweise verwendet werden, um separaten Speicher für interne und gemeinsame Daten, kurzlebige und persistente Daten oder Daten zu erstellen, die zwischen Threads geteilt werden müssen.
  Der Speicher kann in JavaScript erstellt und in das Wasm-Modul importiert oder im Wasm-Modul erstellt und exportiert werden.
  Jeder neue lineare Speicher in einer Wasm-Instanz erhält einen sequentiellen Index, beginnend bei null.
  WebAssembly [Speicheranweisungen](/de/docs/WebAssembly/Reference/Memory) verwenden den Index, um den Speicher zu referenzieren, auf dem sie arbeiten, standardmäßig auf den ersten definierten Speicher, wenn kein Index angegeben ist.
  Für weitere Informationen siehe [WebAssembly Memory](/de/docs/WebAssembly/Guides/Understanding_the_text_format#webassembly_memory) in _Understanding WebAssembly text format_.
  ([Firefox Fehler 1860816](https://bugzil.la/1860816)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Unterstützung für die ["userAgent" Fähigkeit](https://w3c.github.io/webdriver/#capabilities) wurde hinzugefügt, die den Standardwert des User-Agent der Endpunktknoten identifiziert ([Firefox Fehler 1885495](https://bugzil.la/1885495)).

#### WebDriver BiDi

- Unterstützung für den [input.setFiles](https://w3c.github.io/webdriver-bidi/#command-input-setFiles) Befehl wurde hinzugefügt, der es erlaubt, die Dateien für `<input>` Elemente mit `type="file"` festzulegen oder zu aktualisieren ([Firefox Fehler 1855040](https://bugzil.la/1855040)).
- Unterstützung für den [storage.deleteCookies](https://w3c.github.io/webdriver-bidi/#command-storage-deleteCookies) Befehl, um Cookies zu löschen, wurde hinzugefügt ([Firefox Fehler 1854581](https://bugzil.la/1854581)).
- Unterstützung für "userContext" als Feld des "partition" Arguments für Cookie-Befehle wurde hinzugefügt ([Firefox Fehler 1875255](https://bugzil.la/1875255)).
- Ein Problem wurde behoben, bei dem [storage.getCookies](https://w3c.github.io/webdriver-bidi/#command-storage-getCookies) nicht alle erwarteten Cookies für einen gegebenen "sourceOrigin" abgerufen würden ([Firefox Fehler 1884647](https://bugzil.la/1884647)).
- Es wurde ein Problem behoben, bei dem empfohlene Einstellungen nicht angewendet würden, wenn nur WebDriver BiDi als Remote-Protokoll, was bedeutet, dass CDP deaktiviert ist, aktiviert wurde ([Firefox Fehler 1882748](https://bugzil.la/1882748)).
- Ein Problem wurde behoben, bei dem das Erstellen und wechseln zu einem neuen Tab nicht auf die Aktualisierung des `visibilityState` warten würde ([Firefox Fehler 1877469](https://bugzil.la/1877469)).

## Änderungen für Add-on-Entwickler

- Der Inhalt der Eigenschaft {{WebExtAPIRef("proxy.ProxyInfo")}} `proxyAuthorization` wird jetzt zusätzlich zur bereits bestehenden Unterstützung für HTTPS-Proxys im {{httpheader("Proxy-Authorization")}} Anforderungsheader an HTTP-Proxys weitergeleitet, als Teil einer [CONNECT](/de/docs/Web/HTTP/Methods/CONNECT) Anfrage ([Firefox Fehler 1794464](https://bugzil.la/1794464)).

## Experimentelle Web-Features

Diese Funktionen werden in Firefox 125 ausgeliefert, aber nur in Entwicklerversionen oder hinter einer Einstellung. Um diese auszuprobieren, können Sie nach der zugehörigen Einstellung auf der `about:config` Seite suchen, um zu sehen, ob sie aktiviert oder deaktiviert sind. Um mehr über diese Funktionen zu erfahren, siehe die Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **CSS `transition-behavior`:** `layout.css.transition-behavior.enabled`.

  Die Eigenschaft {{cssxref("transition-behavior")}} ist standardmäßig in der Nightly-Version aktiviert.
  Autoren können diese Eigenschaft verwenden, um zu steuern, ob CSS-Übergänge auf Eigenschaften mit einem [diskreten Animationstyp](/de/docs/Web/CSS/CSS_animated_properties#discrete) angewendet werden sollen ([Firefox Fehler 1882408](https://bugzil.la/1882408), [Firefox Fehler 1805727](https://bugzil.la/1805727)).

- **UA-Stile für `<h1>` innerhalb von Abschnittselementen:** `layout.css.h1-in-section-ua-styles.enabled`.

  Die `<h1>` Überschrift wird jetzt nicht mehr in der Schriftgröße reduziert, wenn sie in [Abschnittselemente](/de/docs/Web/HTML/Content_categories#sectioning_content) wie `<article>`, `<aside>`, `<nav>` und `<section>` eingebettet ist. Die UA-Stile für `<h1>` innerhalb von Abschnittselementen sind nicht mehr relevant, da der Outline-Algorithmus aus der HTML-Spezifikation [entfernt wurde](https://github.com/whatwg/html/pull/7829). ([Firefox Fehler 1883896](https://bugzil.la/1883896)).

  > [!NOTE]
  > Die Einstellung für diese Funktion funktioniert umgekehrt: Sie ist im Nightly-Build auf `false` gesetzt, was die UA-Stile für Überschriften entfernt, die in Abschnittselementen verschachtelt sind. In allen anderen Kanälen ist sie auf `true` gesetzt, was die bestehenden UA-Stile für die verschachtelten Überschriften beibehält.

## Ältere Versionen

{{Firefox_for_developers}}
