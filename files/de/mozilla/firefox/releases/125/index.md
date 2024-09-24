---
title: Firefox 125 für Entwickler
slug: Mozilla/Firefox/Releases/125
l10n:
  sourceCommit: dc26ca2696c311b12c98df1511900612449dcb51
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen über die Änderungen in Firefox 125, die Entwickler betreffen. Firefox 125 wurde am [16. April 2024](https://whattrainisitnow.com/release/?version=125) veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen.

### CSS

- Die {{cssxref("align-content")}} Eigenschaft wurde aktualisiert, um mit `display: block;` Layouts zu funktionieren. Dies bringt alle Layout-Positionen von `flex` und `grid` zu `block`, wodurch Entwickler blocklevel-Elemente ausrichten können, ohne ihren Container in einen `flex` oder `grid` Container umzuwandeln. ([Firefox Bug 1882853](https://bugzil.la/1882853)).
- Die CSS-Eigenschaft [`transform-box`](/de/docs/Web/CSS/transform-box) unterstützt nun die Werte `content-box` und `stroke-box`. Für die Referenzbox verwendet der `content-box` Wert den [Content-Box](/de/docs/Learn/CSS/Building_blocks/The_box_model#parts_of_a_box) und der `stroke-box` Wert das Strich-Begrenzungsfeld, das die Form eines SVG enthält ([Firefox Bug 1868374](https://bugzil.la/1868374)).
- Der [`content-visibility`](/de/docs/Web/CSS/content-visibility) CSS-Eigenschaftswert `auto` ist nun standardmäßig aktiviert. Dadurch kann der Inhalt das Rendering überspringen, wenn er nicht [für den Benutzer relevant](/de/docs/Web/CSS/CSS_containment#relevant_to_the_user) ist. ([Firefox Bug 1874874](https://bugzil.la/1874874)).

### JavaScript

- {{jsxref("Intl.Segmenter")}} wird jetzt unterstützt, wodurch Entwickler eine lokalsensitive Textsegmentierung einer Zeichenkette durchführen können.
  Dies ermöglicht zum Beispiel das Aufteilen einer Zeichenkette in Wörter in Sprachen, die keine Leerzeichen zur Trennung verwenden: `Intl.Segmenter("ja-JP", { granularity: "word" })`.
  Sie können auch Zeichenfolgen in Grapheme oder Sätze aufteilen.
  ([Firefox Bug 1423593](https://bugzil.la/1423593), [Firefox Bug 1883914](https://bugzil.la/1883914)).

### APIs

- Die [Popover API](/de/docs/Web/API/Popover_API) wird nun vollständig unterstützt und ermöglicht die Erstellung von obersten UI-Elementen im "Popover"-Stil, die für Aktionsmenüs, benutzerdefinierte "Toast"-Benachrichtigungen, Vorschläge für Formularelemente, Inhaltspicker usw. verwendet werden könnten.
  Der Popover und sein auslösendes Button/Input können entweder mit HTML-Attributen oder JavaScript erstellt und mit CSS gestylt werden.

  Die folgenden Web-APIs sind implementiert:

  - [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement) Eigenschaften [`popoverTargetElement`](/de/docs/Web/API/HTMLButtonElement/popoverTargetElement) und [`popoverTargetAction`](/de/docs/Web/API/HTMLButtonElement/popoverTargetAction).
  - [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Eigenschaften [`popoverTargetElement`](/de/docs/Web/API/HTMLInputElement/popoverTargetElement) und [`popoverTargetAction`](/de/docs/Web/API/HTMLInputElement/popoverTargetAction).
  - [`HTMLElement`](/de/docs/Web/API/HTMLElement) Eigenschaft [`popover`](/de/docs/Web/API/HTMLElement/popover), Methoden [`hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover), [`showPopover()`](/de/docs/Web/API/HTMLElement/showPopover), und [`togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover), sowie Events [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) und [`toggle_event`](/de/docs/Web/API/HTMLElement/toggle_event) (vom Typ [`ToggleEvent`](/de/docs/Web/API/ToggleEvent)).

  Die folgende CSS-Pseudoklasse und das Element werden jetzt für die Verwendung mit Popovers unterstützt:

  - [`:popover-open`](/de/docs/Web/CSS/:popover-open)
  - [`::backdrop`](/de/docs/Web/CSS/::backdrop) wurde erweitert, um Popovers zu unterstützen

  Die folgenden globalen HTML-Attribute werden unterstützt:

  - [`popovertarget`](/de/docs/Web/HTML/Element/button#popovertarget)
  - [`popovertargetaction`](/de/docs/Web/HTML/Element/button#popovertargetaction)

  ([Firefox Bug 1823757](https://bugzil.la/1823757), [Firefox Bug 1866993](https://bugzil.la/1866993)).

- Die {{domxref("RTCIceTransport")}} Eigenschaften {{domxref("RTCIceTransport/state","state")}} und {{domxref("RTCIceTransport/gatheringState","gatheringState")}}, sowie die zugehörigen Events {{domxref("RTCIceTransport/statechange_event","statechange")}} und {{domxref("RTCIceTransport/gatheringstatechange_event","gatheringstatechange")}} werden jetzt unterstützt, sowie die Eigenschaft {{domxref("RTCDtlsTransport.iceTransport")}} (die das zugrunde liegende `RTCIceTransport` für ein {{domxref("RTCDtlsTransport")}} zurückgibt).
  Diese ermöglichen eine viel detailliertere Überwachung als die von den Eigenschaften {{domxref("RTCPeerConnection")}} bereitgestellten {{domxref("RTCPeerConnection.iceGatheringState","iceGatheringState")}} und {{domxref("RTCPeerConnection.connectionState","connectionState")}}.
  ([Firefox Bug 1811912](https://bugzil.la/1811912))
- {{domxref("Element.ariaBrailleLabel")}} und {{domxref("Element.ariaBrailleRoleDescription")}} werden jetzt unterstützt und spiegeln die globalen ARIA HTML-Attribute [`aria-braillelabel`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-braillelabel) und [`aria-brailleroledescription`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-brailleroledescription) wider. ([Firefox Bug 1861201](https://bugzil.la/1861201)).

- Unterstützung hinzugefügt, um es Webanwendungen zu ermöglichen, sich elegant zu erholen, wenn ein Canvas seinen 2D-Kontext vorübergehend verliert. Dies kann passieren, wenn das Canvas hardwarebeschleunigt auf einer GPU läuft und der Treiber abstürzt ([Firefox Bug 1887729](https://bugzil.la/1887729)).
  Hier sind einige zusätzliche Details zu den Ereignissen für verlorene und wiederhergestellte Canvas-Kontexte:

  - Anwendungen können [`contextlost`](/de/docs/Web/API/HTMLCanvasElement/contextlost_event) und [`contextrestored`](/de/docs/Web/API/HTMLCanvasElement/contextrestored_event) Events überwachen, die auf [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) ausgelöst werden, wenn der Kontext verloren geht und wiederhergestellt wird, und können auch den Kontext mit [`CanvasRenderingContext2D.isContextLost()`](/de/docs/Web/API/CanvasRenderingContext2D/isContextLost) überprüfen.
  - Nach dem Auslösen von `contentlost` versucht ein Browser standardmäßig, den verlorenen Kontext neu zu starten, aber der Code kann dies verhindern, indem das Event abgebrochen wird.
  - Offscreen-Canvases können auf die gleiche Weise überwacht werden, jedoch mit [`OffScreenCanvas`](/de/docs/Web/API/OffscreenCanvas) Events [`contextlost`](/de/docs/Web/API/OffscreenCanvas/contextlost_event) und [`contextrestored`](/de/docs/Web/API/OffscreenCanvas/contextrestored_event), zusammen mit [`OffscreenCanvasRenderingContext2D.isContextLost()`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D#context).

- Unterstützung für das [`shadowrootclonable`](/de/docs/Web/HTML/Element/template#shadowrootclonable) Attribut des `<template>` Elements und die [`shadowRootClonable`](/de/docs/Web/API/HTMLTemplateElement/shadowRootClonable) Eigenschaft der `HTMLTemplateElement`-Schnittstelle hinzugefügt, die es widerspiegelt.
  Diese setzen die [`clonable`](/de/docs/Web/API/ShadowRoot/clonable) Eigenschaft eines [`ShadowRoot`](/de/docs/Web/API/ShadowRoot), das deklarativ mit dem [`<template>`](/de/docs/Web/HTML/Element/template) Element erstellt wurde.
  ([Firefox Bug 1880188](https://bugzil.la/1880188)).

- Die [`readText()`](/de/docs/Web/API/Clipboard/readText) Methode der [`Clipboard`](/de/docs/Web/API/Clipboard) Schnittstelle wird jetzt unterstützt, um Text asynchron aus der System-Zwischenablage zu lesen.
  Beim Lesen von Zwischenablagedaten, die nicht von derselben Ursprungsseite bereitgestellt werden, erscheint ein Einfüge-Kontextmenü, damit der Benutzer dies bestätigt. ([Firefox Bug 1877400](https://bugzil.la/1877400)).

#### Medien, WebRTC und Web Audio

- Der [AV1](/de/docs/Web/Media/Formats/Video_codecs#av1) Codec wird nun für [Encrypted Media Extensions](/de/docs/Web/API/Encrypted_Media_Extensions_API) unterstützt, was eine qualitativ hochwertigere Wiedergabe von Videostreaming-Anbietern ermöglicht. ([Firefox Bug 1601817](https://bugzil.la/1601817)).

#### Entfernungen

- Die [`SVGAElement.text`](/de/docs/Web/API/SVGAElement#svgaelement.text) Eigenschaft wurde entfernt. Die {{domxref("Node.textContent", "textContent")}} Eigenschaft (vererbt von `Node`) wird allgemein unterstützt und sollte stattdessen verwendet werden. ([Firefox Bug 1880689](https://bugzil.la/1880689)).

### WebAssembly

- Unterstützung hinzugefügt für Wasm-Module, um mehrere unabhängige lineare Speicher zu verwenden.
  Mehrere Speicher ermöglichen eine effizientere Interoperabilität zwischen Modulen und bessere Polyfills für kommende Wasm-Standards. Sie können beispielsweise verwendet werden, um separaten Speicher für interne und gemeinsame Daten, temporäre und persistente Daten oder Daten, die zwischen Threads geteilt werden müssen, zu erstellen.
  Der Speicher kann in JavaScript erstellt und in das Wasm-Modul importiert werden oder im Wasm-Modul erstellt und exportiert werden.
  Jeder neue lineare Speicher in einer Wasm-Instanz erhält einen sequentiellen Index, beginnend bei Null.
  WebAssembly [Speicherinstruktionen](/de/docs/WebAssembly/Reference/Memory) verwenden den Index, um auf den Speicher zu verweisen, auf den sie wirken, wobei standardmäßig der erste definierte Speicher verwendet wird, wenn kein Index angegeben ist.
  Für weitere Informationen siehe [WebAssembly Memory](/de/docs/WebAssembly/Understanding_the_text_format#webassembly_memory) im Abschnitt _Understanding WebAssembly text format_.
  ([Firefox Bug 1860816](https://bugzil.la/1860816)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Unterstützung für die ["userAgent" Fähigkeit](https://w3c.github.io/webdriver/#capabilities) hinzugefügt, die den Standard-User-Agent-Wert des Endpunktknotens identifiziert ([Firefox Bug 1885495](https://bugzil.la/1885495)).

#### WebDriver BiDi

- Unterstützung für den [input.setFiles](https://w3c.github.io/webdriver-bidi/#command-input-setFiles) Befehl hinzugefügt, der es ermöglicht, die Dateien für `<input>` Elemente mit `type="file"` zu setzen oder zu aktualisieren ([Firefox Bug 1855040](https://bugzil.la/1855040)).
- Unterstützung für den [storage.deleteCookies](https://w3c.github.io/webdriver-bidi/#command-storage-deleteCookies) Befehl hinzugefügt, um Cookies zu löschen ([Firefox Bug 1854581](https://bugzil.la/1854581)).
- Unterstützung für "userContext" als Feld des "partition" Arguments für Cookie-Befehle hinzugefügt ([Firefox Bug 1875255](https://bugzil.la/1875255)).
- Ein Problem behoben, bei dem [storage.getCookies](https://w3c.github.io/webdriver-bidi/#command-storage-getCookies) nicht alle erwarteten Cookies für eine gegebene "sourceOrigin" abgerufen hatte ([Firefox Bug 1884647](https://bugzil.la/1884647)).
- Ein Problem behoben, bei dem empfohlene Voreinstellungen nicht angewendet wurden, wenn nur WebDriver BiDi als Fernprotokoll aktiviert war, was bedeutet, dass CDP deaktiviert war ([Firefox Bug 1882748](https://bugzil.la/1882748)).
- Ein Problem behoben, bei dem das Erstellen und Wechseln zu einem neuen Tab nicht auf die Aktualisierung des `visibilityState` wartete ([Firefox Bug 1877469](https://bugzil.la/1877469)).

## Änderungen für Add-on-Entwickler

- Der Inhalt der {{WebExtAPIRef("proxy.ProxyInfo")}} Eigenschaft `proxyAuthorization` wird nun an den {{httpheader("Proxy-Authorization")}} Anforderungsheader gesendet, der an HTTP-Proxys gesendet wird (zusätzlich zur bestehenden Unterstützung für HTTPS-Proxys) als Teil einer [CONNECT](/de/docs/Web/HTTP/Methods/CONNECT) Anforderung ([Firefox Bug 1794464](https://bugzil.la/1794464)).

## Experimentelle Web-Features

Diese Features werden in Firefox 125 bereitgestellt, jedoch nur in Entwickler-Versionen oder hinter einer Voreinstellung. Um sie auszuprobieren, können Sie auf der `about:config` Seite nach der zugehörigen Voreinstellung suchen, um festzustellen, ob sie aktiviert oder deaktiviert sind. Um mehr über diese Features zu erfahren, besuchen Sie die Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **CSS `transition-behavior`:** `layout.css.transition-behavior.enabled`.

  Die {{cssxref("transition-behavior")}} Eigenschaft ist standardmäßig in der Nightly-Version aktiviert.
  Autoren können diese Eigenschaft verwenden, um zu steuern, ob CSS-Übergänge auf Eigenschaften mit einem [diskreten Animationstyp](/de/docs/Web/CSS/CSS_animated_properties#discrete) angewendet werden ([Firefox Bug 1882408](https://bugzil.la/1882408), [Firefox Bug 1805727](https://bugzil.la/1805727)).

- **UA-Stile für `<h1>`, die in verschachtelten Abschnittselementen enthalten sind:** `layout.css.h1-in-section-ua-styles.enabled`.

  Die `<h1>` Überschrift wird jetzt nicht mehr in der Schriftgröße verkleinert, wenn sie in [Abschnittselementen](/de/docs/Web/HTML/Content_categories#sectioning_content) `<article>`, `<aside>`, `<nav>`, und `<section>` verschachtelt wird. Die UA-Stile für `<h1>`, die in Abschnittselementen verschachtelt sind, sind nicht mehr relevant, da der Gliederungsalgorithmus [aus der HTML-Spezifikation entfernt wurde](https://github.com/whatwg/html/pull/7829). ([Firefox Bug 1883896](https://bugzil.la/1883896)).

  > [!NOTE]
  > Die Voreinstellung für dieses Feature funktioniert umgekehrt: Sie ist im Nightly Build auf `false` gesetzt, was das UA-Styling für Überschriften, die in Abschnittselementen verschachtelt sind, entfernt. In allen anderen Kanälen ist sie auf `true` gesetzt, was die bestehende UA-Styling für die verschachtelten Überschriften beibehält.

## Ältere Versionen

{{Firefox_for_developers}}
