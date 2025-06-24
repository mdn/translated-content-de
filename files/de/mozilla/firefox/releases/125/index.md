---
title: Firefox 125 für Entwickler
slug: Mozilla/Firefox/Releases/125
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen zu Änderungen in Firefox 125, die Entwickler betreffen. Firefox 125 wurde am [16. April 2024](https://whattrainisitnow.com/release/?version=125) veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen.

### CSS

- Die {{cssxref("align-content")}}-Eigenschaft wurde aktualisiert, um mit `display: block;` Layouts zu arbeiten. Dies bringt alle Layout-Positionen von `flex` und `grid` zu `block` und ermöglicht es Entwicklern, Block-Level-Elemente auszurichten, ohne ihren Container in einen `flex` oder `grid` Container umzuwandeln. ([Firefox-Fehler 1882853](https://bugzil.la/1882853)).
- Die CSS-Eigenschaft [`transform-box`](/de/docs/Web/CSS/transform-box) unterstützt nun die Werte `content-box` und `stroke-box`. Für das Referenzfeld verwendet der Wert `content-box` die [Content-Box](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#parts_of_a_box), und der Wert `stroke-box` verwendet die Strich-Begrenzungsbox, die die Form eines SVGs enthält ([Firefox-Fehler 1868374](https://bugzil.la/1868374)).
- Der [`content-visibility`](/de/docs/Web/CSS/content-visibility) CSS-Eigenschaftswert `auto` ist nun standardmäßig aktiviert. Dies erlaubt es, Inhalte beim Rendern zu überspringen, wenn sie nicht [für den Benutzer relevant](/de/docs/Web/CSS/CSS_containment#relevant_to_the_user) sind. ([Firefox-Fehler 1874874](https://bugzil.la/1874874)).

### JavaScript

- {{jsxref("Intl.Segmenter")}} wird jetzt unterstützt, was Entwicklern ermöglicht, eine lokalsensitive Textsegmentierung eines Strings durchzuführen.
  Dies ermöglicht zum Beispiel das Aufteilen eines Strings in Wörter in Sprachen, die keine Leerzeichen verwenden, um sie zu trennen: `Intl.Segmenter("ja-JP", { granularity: "word" })`.
  Sie können auch Strings in Grapheme oder Sätze aufteilen.
  ([Firefox-Fehler 1423593](https://bugzil.la/1423593), [Firefox-Fehler 1883914](https://bugzil.la/1883914).)

### APIs

- Die [Popover API](/de/docs/Web/API/Popover_API) wird nun vollständig unterstützt und ermöglicht die Erstellung von obersten "Popover"-UI-Elementen, die für Aktionsmenüs, benutzerdefinierte "Toast"-Benachrichtigungen, Formular-Vorschläge, Inhaltsauswahlen usw. verwendet werden können.
  Das Popover und sein auslösendes Button/Input können entweder über HTML-Attribute oder JavaScript erstellt und mit CSS gestaltet werden.

  Die folgenden Web-APIs werden implementiert:

  - [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement) Eigenschaften [`popoverTargetElement`](/de/docs/Web/API/HTMLButtonElement/popoverTargetElement) und [`popoverTargetAction`](/de/docs/Web/API/HTMLButtonElement/popoverTargetAction).
  - [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Eigenschaften [`popoverTargetElement`](/de/docs/Web/API/HTMLInputElement/popoverTargetElement) und [`popoverTargetAction`](/de/docs/Web/API/HTMLInputElement/popoverTargetAction).
  - [`HTMLElement`](/de/docs/Web/API/HTMLElement) Eigenschaft [`popover`](/de/docs/Web/API/HTMLElement/popover), Methoden [`hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover), [`showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) und [`togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover), und Ereignisse [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) und [`toggle_event`](/de/docs/Web/API/HTMLElement/toggle_event) (vom Typ [`ToggleEvent`](/de/docs/Web/API/ToggleEvent)).

  Die folgende CSS-Pseudoklasse und -Elemente werden nun für die Verwendung mit Popovers unterstützt:

  - [`:popover-open`](/de/docs/Web/CSS/:popover-open)
  - [`::backdrop`](/de/docs/Web/CSS/::backdrop) wurde erweitert, um Popovers zu unterstützen

  Die folgenden globalen HTML-Attribute werden unterstützt:

  - [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)
  - [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction)

  ([Firefox-Fehler 1823757](https://bugzil.la/1823757), [Firefox-Fehler 1866993](https://bugzil.la/1866993)).

- Die [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) Eigenschaften [`state`](/de/docs/Web/API/RTCIceTransport/state) und [`gatheringState`](/de/docs/Web/API/RTCIceTransport/gatheringState), sowie ihre zugehörigen Ereignisse [`statechange`](/de/docs/Web/API/RTCIceTransport/statechange_event) und [`gatheringstatechange`](/de/docs/Web/API/RTCIceTransport/gatheringstatechange_event), werden jetzt unterstützt, zusammen mit der Eigenschaft [`RTCDtlsTransport.iceTransport`](/de/docs/Web/API/RTCDtlsTransport/iceTransport) (die den zugrunde liegenden `RTCIceTransport` für einen [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) zurückgibt).
  Diese ermöglichen eine viel feinere Überwachung als die von den [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) Eigenschaften [`iceGatheringState`](/de/docs/Web/API/RTCPeerConnection/iceGatheringState) und [`connectionState`](/de/docs/Web/API/RTCPeerConnection/connectionState) bereitgestellte. ([Firefox-Fehler 1811912](https://bugzil.la/1811912))
- [`Element.ariaBrailleLabel`](/de/docs/Web/API/Element/ariaBrailleLabel) und [`Element.ariaBrailleRoleDescription`](/de/docs/Web/API/Element/ariaBrailleRoleDescription) werden jetzt unterstützt und reflektieren die globalen ARIA HTML-Attribute [`aria-braillelabel`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-braillelabel) und [`aria-brailleroledescription`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-brailleroledescription). ([Firefox-Fehler 1861201](https://bugzil.la/1861201)).

- Unterstützung wurde hinzugefügt, um Webanwendungen zu ermöglichen, sich zu erholen, falls ein Canvas vorübergehend seinen 2D-Kontext verliert, was passieren könnte, wenn das Canvas hardwarebeschleunigt auf einer GPU läuft und sein Treiber abstürzt ([Firefox-Fehler 1887729](https://bugzil.la/1887729)).
  Hier sind zusätzliche Details zu den Events für verlorene und wiederhergestellte Canvas-Kontexte:

  - Anwendungen können auf [`contextlost`](/de/docs/Web/API/HTMLCanvasElement/contextlost_event) und [`contextrestored`](/de/docs/Web/API/HTMLCanvasElement/contextrestored_event) Ereignisse überwachen, die auf [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) ausgelöst werden, wenn der Kontext verloren geht und wiederhergestellt wird, und können den Kontext auch mit [`CanvasRenderingContext2D.isContextLost()`](/de/docs/Web/API/CanvasRenderingContext2D/isContextLost) überprüfen.
  - Nachdem `contextlost` ausgelöst wurde, wird der Browser versuchen, den verlorenen Kontext neu zu starten. Standardmäßig wird der Code dies verhindern, indem das Event abgebrochen wird.
  - Offscreen-Canvases können auf die gleiche Weise überwacht werden, aber mit [`OffScreenCanvas`](/de/docs/Web/API/OffscreenCanvas) Ereignissen [`contextlost`](/de/docs/Web/API/OffscreenCanvas/contextlost_event) und [`contextrestored`](/de/docs/Web/API/OffscreenCanvas/contextrestored_event), zusammen mit [`OffscreenCanvasRenderingContext2D.isContextLost()`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D#context).

- Unterstützung wurde für das [`shadowrootclonable`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootclonable) Attribut des `<template>`-Elements und die [`shadowRootClonable`](/de/docs/Web/API/HTMLTemplateElement/shadowRootClonable) Eigenschaft des `HTMLTemplateElement`-Interfaces hinzugefügt, die es reflektiert.
  Diese setzen die [`clonable`](/de/docs/Web/API/ShadowRoot/clonable) Eigenschaft eines [`ShadowRoot`](/de/docs/Web/API/ShadowRoot), das deklarativ mit dem [`<template>`](/de/docs/Web/HTML/Reference/Elements/template) Element erstellt wurde.
  ([Firefox-Fehler 1880188](https://bugzil.la/1880188)).

- Die [`readText()`](/de/docs/Web/API/Clipboard/readText) Methode des [`Clipboard`](/de/docs/Web/API/Clipboard) Interfaces wird nun unterstützt, um Text asynchron aus der Systemzwischenablage zu lesen.
  Wenn Daten aus der Zwischenablage gelesen werden, die nicht von derselben Ursprungsseite bereitgestellt werden, erscheint ein Einfüge-Kontextmenü, um den Benutzer um Bestätigung zu bitten. ([Firefox-Fehler 1877400](https://bugzil.la/1877400)).

#### Media, WebRTC und Web Audio

- Der [AV1](/de/docs/Web/Media/Guides/Formats/Video_codecs#av1) Codec wird nun für [Encrypted Media Extensions](/de/docs/Web/API/Encrypted_Media_Extensions_API) unterstützt, was eine qualitativ hochwertigere Wiedergabe von Video-Streaming-Anbietern ermöglicht. ([Firefox-Fehler 1601817](https://bugzil.la/1601817)).

#### Entfernungen

- Die [`SVGAElement.text`](/de/docs/Web/API/SVGAElement#svgaelement.text) Eigenschaft wurde entfernt. Die [`textContent`](/de/docs/Web/API/Node/textContent) Eigenschaft (geerbt von `Node`) wird allgemein unterstützt und sollte stattdessen verwendet werden. ([Firefox-Fehler 1880689](https://bugzil.la/1880689)).

### WebAssembly

- Unterstützung wurde hinzugefügt, damit Wasm-Module mehrere unabhängige lineare Speicher verwenden können.
  Mehrere Speicher ermöglichen effizientere Interoperabilität zwischen Modulen und bessere Polyfills für kommende Wasm-Standards. Sie können beispielsweise verwendet werden, um separaten Speicher für interne und geteilte Daten, flüchtige und beständige Daten oder gemeinsame Daten zwischen Threads zu erstellen.
  Der Speicher kann in JavaScript erstellt und in das Wasm-Modul importiert oder im Wasm-Modul erstellt und exportiert werden.
  Jeder neue lineare Speicher in einer Wasm-Instanz erhält einen sequentiellen Index, beginnend bei Null.
  WebAssembly [Speicheranweisungen](/de/docs/WebAssembly/Reference/Memory) verwenden den Index, um auf den Speicher zu verweisen, auf den sie zugreifen, und verwenden standardmäßig den ersten definierten Speicher, wenn kein Index angegeben ist.
  Für weitere Informationen siehe [WebAssembly Memory](/de/docs/WebAssembly/Guides/Understanding_the_text_format#webassembly_memory) in _Understanding WebAssembly text format_.
  ([Firefox-Fehler 1860816](https://bugzil.la/1860816)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Unterstützung wurde für die ["userAgent" Funktionalität](https://w3c.github.io/webdriver/#capabilities) hinzugefügt, die den Standard-User-Agent-Wert des Endpunktknotens identifiziert ([Firefox-Fehler 1885495](https://bugzil.la/1885495)).

#### WebDriver BiDi

- Unterstützung wurde für den [input.setFiles](https://w3c.github.io/webdriver-bidi/#command-input-setFiles) Befehl hinzugefügt, der es ermöglicht, die Dateien für `<input>` Elemente mit `type="file"` festzulegen oder zu aktualisieren ([Firefox-Fehler 1855040](https://bugzil.la/1855040)).
- Unterstützung wurde für den [storage.deleteCookies](https://w3c.github.io/webdriver-bidi/#command-storage-deleteCookies) Befehl hinzugefügt, um Cookies zu löschen ([Firefox-Fehler 1854581](https://bugzil.la/1854581)).
- Unterstützung wurde für "userContext" als Feld des "partition"-Arguments für Cookie-Befehle hinzugefügt ([Firefox-Fehler 1875255](https://bugzil.la/1875255)).
- Ein Problem wurde behoben, bei dem [storage.getCookies](https://w3c.github.io/webdriver-bidi/#command-storage-getCookies) nicht alle erwarteten Cookies für einen gegebenen "sourceOrigin" abgerufen hat ([Firefox-Fehler 1884647](https://bugzil.la/1884647)).
- Ein Problem wurde behoben, bei dem empfohlene Präferenzen nicht angewendet wurden, wenn nur WebDriver BiDi als Fernprotokoll aktiviert war, was bedeutet, dass CDP deaktiviert war ([Firefox-Fehler 1882748](https://bugzil.la/1882748)).
- Ein Problem wurde behoben, bei dem das Erstellen und Wechseln zu einem neuen Tab nicht auf das Update des `visibilityState` wartete ([Firefox-Fehler 1877469](https://bugzil.la/1877469)).

## Änderungen für Add-on-Entwickler

- Der Inhalt der {{WebExtAPIRef("proxy.ProxyInfo")}} Eigenschaft `proxyAuthorization` wird nun an den {{httpheader("Proxy-Authorization")}} Anfrage-Header gesendet, der an HTTP-Proxys gesendet wird (zusätzlich zur bestehenden Unterstützung für HTTPS-Proxys) als Teil einer [CONNECT](/de/docs/Web/HTTP/Reference/Methods/CONNECT) Anfrage ([Firefox-Fehler 1794464](https://bugzil.la/1794464)).

## Experimentelle Webfunktionen

Diese Funktionen sind in Firefox 125 enthalten, aber nur in Entwickler-Versionen oder hinter einer Einstellung. Um diese auszuprobieren, können Sie auf der `about:config` Seite nach der entsprechenden Einstellung suchen, um zu sehen, ob sie aktiviert oder deaktiviert sind. Um mehr über diese Funktionen zu erfahren, besuchen Sie die Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **CSS `transition-behavior`:** `layout.css.transition-behavior.enabled`.

  Die {{cssxref("transition-behavior")}} Eigenschaft ist standardmäßig in der Nightly-Version aktiviert.
  Autoren können diese Eigenschaft verwenden, um zu kontrollieren, ob CSS-Übergänge auf Eigenschaften mit einem [diskreten Animationstyp](/de/docs/Web/CSS/CSS_animated_properties#discrete) angewendet werden ([Firefox-Fehler 1882408](https://bugzil.la/1882408), [Firefox-Fehler 1805727](https://bugzil.la/1805727)).

- **UA-Stile für `<h1>`, verschachtelt in Gliederungselementen:** `layout.css.h1-in-section-ua-styles.enabled`.

  Die `<h1>` Überschrift wird jetzt nicht mehr in der Schriftgröße verringert, wenn sie innerhalb von [Gliederungselementen](/de/docs/Web/HTML/Guides/Content_categories#sectioning_content) `<article>`, `<aside>`, `<nav>` und `<section>` verschachtelt ist. Die UA-Stile für `<h1>`, die innerhalb von Gliederungselementen verschachtelt sind, sind nicht mehr relevant, da der Outline-Algorithmus [aus der HTML-Spezifikation entfernt wurde](https://github.com/whatwg/html/pull/7829). ([Firefox-Fehler 1883896](https://bugzil.la/1883896)).

  > [!NOTE]
  > Die Einstellung für diese Funktion funktioniert umgekehrt: Sie ist in der Nightly-Version auf `false` gesetzt, was die UA-Stilierung für Überschriften in Gliederungselementen entfernt. In allen anderen Kanälen ist sie auf `true` gesetzt, was die bestehende UA-Stilierung für die verschachtelten Überschriften beibehält.

## Ältere Versionen

{{Firefox_for_developers}}
