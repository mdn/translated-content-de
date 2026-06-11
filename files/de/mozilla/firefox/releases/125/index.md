---
title: Firefox 125 Versionshinweise für Entwickler
short-title: Firefox 125
slug: Mozilla/Firefox/Releases/125
l10n:
  sourceCommit: 52dc7d3f7b4f52472d63161e76a6da821104824c
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 125, die Entwickler betreffen. Firefox 125 wurde am [16. April 2024](https://whattrainisitnow.com/release/?version=125) veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen.

### CSS

- Die {{cssxref("align-content")}}-Eigenschaft wurde aktualisiert, um mit `display: block;` Layouts zu funktionieren. Dies bringt alle Layout-Positionen von `flex` und `grid` zu `block`, sodass Entwickler Block-Elemente ausrichten können, ohne ihren Container in einen `flex` oder `grid` Container umzuwandeln. ([Firefox-Bug 1882853](https://bugzil.la/1882853)).
- Die CSS-Eigenschaft [`transform-box`](/de/docs/Web/CSS/Reference/Properties/transform-box) unterstützt nun die Werte `content-box` und `stroke-box`. Für das Referenzfeld verwendet der `content-box`-Wert die [Content-Box](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#parts_of_a_box) und der `stroke-box`-Wert verwendet die Strichbegrenzungsbox, die die Form eines SVG enthält ([Firefox-Bug 1868374](https://bugzil.la/1868374)).
- Der CSS-Eigenschaftswert [`content-visibility`](/de/docs/Web/CSS/Reference/Properties/content-visibility) `auto` ist jetzt standardmäßig aktiviert. Dies ermöglicht es, die Darstellung von Inhalten zu überspringen, wenn sie nicht [für den Benutzer relevant](/de/docs/Web/CSS/Guides/Containment/Using#relevant_to_the_user) sind. ([Firefox-Bug 1874874](https://bugzil.la/1874874)).

### JavaScript

- {{jsxref("Intl.Segmenter")}} wird jetzt unterstützt, wodurch Entwickler eine sprachabhängige Textsegmentierung eines Strings durchführen können. Dies ermöglicht beispielsweise das Aufteilen eines Strings in Wörter in Sprachen, die keine Leerzeichen zur Trennung verwenden: `Intl.Segmenter("ja-JP", { granularity: "word" })`. Sie können auch Strings in Grapheme oder Sätze aufteilen. ([Firefox-Bug 1423593](https://bugzil.la/1423593), [Firefox-Bug 1883914](https://bugzil.la/1883914).)

### APIs

- Die [Popover API](/de/docs/Web/API/Popover_API) wird jetzt vollständig unterstützt, damit Top-Level-"Popover"-UI-Elemente erstellt werden können, die für Aktionsmenüs, benutzerdefinierte "Toast"-Benachrichtigungen, Vorschläge für Formularelemente, Inhaltsauswahlen usw. verwendet werden können. Das Popover und sein auslösendes Button/Input können entweder mit HTML-Attributen oder JavaScript erstellt und mit CSS gestaltet werden.

  Die folgenden Web-APIs sind implementiert:
  - [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement)-Eigenschaften [`popoverTargetElement`](/de/docs/Web/API/HTMLButtonElement/popoverTargetElement) und [`popoverTargetAction`](/de/docs/Web/API/HTMLButtonElement/popoverTargetAction).
  - [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Eigenschaften [`popoverTargetElement`](/de/docs/Web/API/HTMLInputElement/popoverTargetElement) und [`popoverTargetAction`](/de/docs/Web/API/HTMLInputElement/popoverTargetAction).
  - [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Eigenschaft [`popover`](/de/docs/Web/API/HTMLElement/popover), Methoden [`hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover), [`showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) und [`togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover), und Ereignisse [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) und [`toggle_event`](/de/docs/Web/API/HTMLElement/toggle_event) (vom Typ [`ToggleEvent`](/de/docs/Web/API/ToggleEvent)).

  Die folgenden CSS-Pseudoklassen und Elemente werden jetzt zur Verwendung mit Popovers unterstützt:
  - [`:popover-open`](/de/docs/Web/CSS/Reference/Selectors/:popover-open)
  - [`::backdrop`](/de/docs/Web/CSS/Reference/Selectors/::backdrop) wurde erweitert, um Popovers zu unterstützen

  Die folgenden globalen HTML-Attribute werden unterstützt:
  - [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)
  - [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction)

  ([Firefox-Bug 1823757](https://bugzil.la/1823757), [Firefox-Bug 1866993](https://bugzil.la/1866993)).

- Die [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport)-Eigenschaften [`state`](/de/docs/Web/API/RTCIceTransport/state) und [`gatheringState`](/de/docs/Web/API/RTCIceTransport/gatheringState), und die zugehörigen Ereignisse [`statechange`](/de/docs/Web/API/RTCIceTransport/statechange_event) und [`gatheringstatechange`](/de/docs/Web/API/RTCIceTransport/gatheringstatechange_event), werden jetzt unterstützt, zusammen mit der [`RTCDtlsTransport.iceTransport`](/de/docs/Web/API/RTCDtlsTransport/iceTransport)-Eigenschaft (die das zugrunde liegende `RTCIceTransport` für ein [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) zurückgibt). Diese ermöglichen eine viel feinere Überwachung als die bereitgestellten [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) Eigenschaften [`iceGatheringState`](/de/docs/Web/API/RTCPeerConnection/iceGatheringState) und [`connectionState`](/de/docs/Web/API/RTCPeerConnection/connectionState). ([Firefox-Bug 1811912](https://bugzil.la/1811912))
- [`Element.ariaBrailleLabel`](/de/docs/Web/API/Element/ariaBrailleLabel) und [`Element.ariaBrailleRoleDescription`](/de/docs/Web/API/Element/ariaBrailleRoleDescription) werden jetzt unterstützt und reflektieren jeweils die globalen ARIA HTML-Attribute [`aria-braillelabel`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-braillelabel) und [`aria-brailleroledescription`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-brailleroledescription). ([Firefox-Bug 1861201](https://bugzil.la/1861201)).

- Unterstützung hinzugefügt, die es Webanwendungen ermöglicht, sich anmutig zu erholen, wenn ein Canvas vorübergehend seinen 2D-Kontext verliert, was passieren könnte, wenn das Canvas hardwarebeschleunigt auf einem GPU läuft und sein Treiber abstürzt ([Firefox-Bug 1887729](https://bugzil.la/1887729)).
  Hier sind einige zusätzliche Details zu den Ereignissen für verlorene und wiederhergestellte Canvas-Kontexte:
  - Anwendungen können auf [`contextlost`](/de/docs/Web/API/HTMLCanvasElement/contextlost_event) und [`contextrestored`](/de/docs/Web/API/HTMLCanvasElement/contextrestored_event) Ereignisse überwachen, die bei [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) ausgelöst werden, wenn der Kontext verloren geht und wiederhergestellt wird, und können den Kontext auch mit [`CanvasRenderingContext2D.isContextLost()`](/de/docs/Web/API/CanvasRenderingContext2D/isContextLost) überprüfen.
  - Nach der Ausgabe von `contextlost` versucht ein Browser standardmäßig, den verlorenen Kontext neu zu starten, aber der Code kann dies verhindern, indem er das Ereignis abbricht.
  - Offscreen-Canvas können auf die gleiche Weise überwacht werden, jedoch mit [`OffScreenCanvas`](/de/docs/Web/API/OffscreenCanvas) Ereignissen [`contextlost`](/de/docs/Web/API/OffscreenCanvas/contextlost_event) und [`contextrestored`](/de/docs/Web/API/OffscreenCanvas/contextrestored_event), zusammen mit [`OffscreenCanvasRenderingContext2D.isContextLost()`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D#context).

- Unterstützung für das [`shadowrootclonable`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootclonable)-Attribut des `<template>`-Elements und die [`shadowRootClonable`](/de/docs/Web/API/HTMLTemplateElement/shadowRootClonable)-Eigenschaft der `HTMLTemplateElement`-Schnittstelle, die es widerspiegelt, hinzugefügt.
  Diese setzen die [`clonable`](/de/docs/Web/API/ShadowRoot/clonable)-Eigenschaft eines [`ShadowRoot`](/de/docs/Web/API/ShadowRoot), das deklarativ unter Verwendung des [`<template>`](/de/docs/Web/HTML/Reference/Elements/template)-Elements erstellt wurde.
  ([Firefox-Bug 1880188](https://bugzil.la/1880188)).

- Die Methode [`readText()`](/de/docs/Web/API/Clipboard/readText) der [`Clipboard`](/de/docs/Web/API/Clipboard)-Schnittstelle wird jetzt unterstützt, um Text asynchron aus der Systemzwischenablage zu lesen.
  Beim Lesen von Zwischenablagedaten, die nicht von der gleichnamigen Seite bereitgestellt werden, wird ein Einfüge-Kontextmenü angezeigt, damit der Benutzer bestätigen kann. ([Firefox-Bug 1877400](https://bugzil.la/1877400)).

#### Medien, WebRTC und Web Audio

- Der [AV1](/de/docs/Web/Media/Guides/Formats/Video_codecs#av1)-Codec wird jetzt für [Encrypted Media Extensions](/de/docs/Web/API/Encrypted_Media_Extensions_API) unterstützt, um eine qualitativ hochwertigere Wiedergabe von Video-Streaming-Anbietern zu ermöglichen. ([Firefox-Bug 1601817](https://bugzil.la/1601817)).

#### Entfernungen

- Die `SVGAElement.text`-Eigenschaft wurde entfernt. Die [`textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft (von `Node` geerbt) wird allgemein unterstützt und sollte stattdessen verwendet werden. ([Firefox-Bug 1880689](https://bugzil.la/1880689)).

### WebAssembly

- Unterstützung für die Verwendung von Wasm-Modulen mit mehreren unabhängigen linearen Speichern wurde hinzugefügt.
  Mehrere Speicher ermöglichen effizientere Interoperabilität zwischen Modulen und bessere Polyfills für kommende Wasm-Standards. Sie können beispielsweise verwendet werden, um separate Speicher für interne und geteilte Daten, flüchtige und persistente Daten oder Daten, die zwischen Threads geteilt werden müssen, zu erstellen.
  Der Speicher kann in JavaScript erstellt und in das Wasm-Modul importiert oder im Wasm-Modul erstellt und exportiert werden.
  Jeder neue lineare Speicher in einer Wasm-Instanz erhält einen sequentiellen Index, beginnend bei null.
  WebAssembly [Speicheranweisungen](/de/docs/WebAssembly/Reference/Memory) verwenden den Index, um auf den Speicher zu verweisen, auf dem sie arbeiten, und standardmäßig auf den ersten definierten Speicher, wenn kein Index angegeben ist.
  Weitere Informationen finden Sie unter [WebAssembly Memory](/de/docs/WebAssembly/Guides/Understanding_the_text_format#webassembly_memory) in _Verständnis des WebAssembly-Textformats_.
  ([Firefox-Bug 1860816](https://bugzil.la/1860816)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Unterstützung für die ["userAgent" Fähigkeit](https://w3c.github.io/webdriver/#capabilities) hinzugefügt, die den standardmäßigen User-Agent-Wert des Endpunkt-Knotens identifiziert ([Firefox-Bug 1885495](https://bugzil.la/1885495)).

#### WebDriver BiDi

- Unterstützung für den [input.setFiles](https://w3c.github.io/webdriver-bidi/#command-input-setFiles) Befehl hinzugefügt, der es erlaubt, die Dateien für `<input>` Elemente mit `type="file"` festzulegen oder zu aktualisieren ([Firefox-Bug 1855040](https://bugzil.la/1855040)).
- Unterstützung für den [storage.deleteCookies](https://w3c.github.io/webdriver-bidi/#command-storage-deleteCookies) Befehl zum Löschen von Cookies hinzugefügt ([Firefox-Bug 1854581](https://bugzil.la/1854581)).
- Unterstützung für "userContext" als Feld des "partition" Arguments für Cookie-Befehle hinzugefügt ([Firefox-Bug 1875255](https://bugzil.la/1875255)).
- Ein Problem behoben, bei dem [storage.getCookies](https://w3c.github.io/webdriver-bidi/#command-storage-getCookies) nicht alle erwarteten Cookies für einen gegebenen "sourceOrigin" zurückgeben würde ([Firefox-Bug 1884647](https://bugzil.la/1884647)).
- Ein Problem behoben, bei dem empfohlene Einstellungen nicht angewendet würden, wenn nur WebDriver BiDi als Remoteprotokoll aktiviert war, was bedeutet, dass CDP deaktiviert war ([Firefox-Bug 1882748](https://bugzil.la/1882748)).
- Ein Problem behoben, bei dem das Erstellen und Wechseln zu einem neuen Tab nicht darauf warten würde, dass der `visibilityState` aktualisiert wird ([Firefox-Bug 1877469](https://bugzil.la/1877469)).

## Änderungen für Add-on-Entwickler

- Der Inhalt der {{WebExtAPIRef("proxy.ProxyInfo")}}-Eigenschaft `proxyAuthorization` wird nun als Teil einer [CONNECT](/de/docs/Web/HTTP/Reference/Methods/CONNECT)-Anfrage auch an den {{httpheader("Proxy-Authorization")}}-Request-Header gesendet, der an HTTP-Proxies gesendet wird (zusätzlich zur bestehenden Unterstützung für HTTPS-Proxies) ([Firefox-Bug 1794464](https://bugzil.la/1794464)).

## Experimentelle Web-Funktionen

Diese Funktionen sind in Firefox 125 enthalten, aber nur in Entwickler-Editionen oder hinter einer Einstellung verfügbar. Um diese auszuprobieren, können Sie nach der entsprechenden Einstellung auf der `about:config`-Seite suchen, um zu sehen, ob sie aktiviert oder deaktiviert sind. Weitere Informationen zu diesen Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **CSS `transition-behavior`:** `layout.css.transition-behavior.enabled`.

  Die {{cssxref("transition-behavior")}}-Eigenschaft ist standardmäßig in der Nightly-Version aktiviert.
  Autoren können diese Eigenschaft verwenden, um zu steuern, ob CSS-Übergänge auf Eigenschaften mit einem [diskreten Animationstyp](/de/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete) angewendet werden sollen ([Firefox-Bug 1882408](https://bugzil.la/1882408), [Firefox-Bug 1805727](https://bugzil.la/1805727)).

- **UA-Stile für `<h1>`, die in Gliederungselemente eingebettet sind:** `layout.css.h1-in-section-ua-styles.enabled`.

  Die `<h1>`-Überschrift verkleinert sich jetzt nicht mehr in der Schriftgröße, wenn sie in [Gliederungselemente](/de/docs/Web/HTML/Guides/Content_categories#sectioning_content) `<article>`, `<aside>`, `<nav>` und `<section>` eingebettet ist. Die UA-Stile für `<h1>`, die in Gliederungselemente eingebettet sind, sind nicht mehr relevant, da der Umriss-Algorithmus [aus der HTML-Spezifikation entfernt](https://github.com/whatwg/html/pull/7829) wurde. ([Firefox-Bug 1883896](https://bugzil.la/1883896)).

  > [!NOTE]
  > Die Einstellung für diese Funktion funktioniert umgekehrt: Sie ist in der Nightly-Version auf `false` gesetzt, was die UA-Stilgestaltung für in Gliederungselementen eingebettete Überschriften entfernt. In allen anderen Kanälen ist sie auf `true` gesetzt, was die bestehende UA-Stilgestaltung für die eingebetteten Überschriften beibehält.
