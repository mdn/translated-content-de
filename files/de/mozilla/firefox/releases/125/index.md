---
title: Firefox 125 für Entwickler
slug: Mozilla/Firefox/Releases/125
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Dieser Artikel enthält Informationen über die Änderungen in Firefox 125, die Entwickler betreffen. Firefox 125 wurde am [16. April 2024](https://whattrainisitnow.com/release/?version=125) veröffentlicht.

## Änderungen für Web-Entwickler

### HTML

Keine bemerkenswerten Änderungen.

### CSS

- Die {{cssxref("align-content")}}-Eigenschaft wurde aktualisiert, um mit `display: block;` Layouts zu arbeiten. Dadurch werden alle Layout-Positionen von `flex` und `grid` auf `block` übertragen, sodass Entwickler blocklevel-Elemente ausrichten können, ohne ihren Container in einen `flex`- oder `grid`-Container umzuwandeln. ([Firefox Bug 1882853](https://bugzil.la/1882853)).
- Die CSS-Eigenschaft [`transform-box`](/de/docs/Web/CSS/transform-box) unterstützt nun die Werte `content-box` und `stroke-box`. Für das Referenzfeld verwendet der Wert `content-box` die [Inhaltsbox](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#parts_of_a_box) und der Wert `stroke-box` das Stroke-Begrenzungsfeld, das die Form eines SVG enthält ([Firefox Bug 1868374](https://bugzil.la/1868374)).
- Der Wert `auto` der CSS-Eigenschaft [`content-visibility`](/de/docs/Web/CSS/content-visibility) ist jetzt standardmäßig aktiviert. Dies ermöglicht, dass Inhalte das Rendering überspringen, wenn sie nicht [für den Benutzer relevant](/de/docs/Web/CSS/CSS_containment#relevant_to_the_user) sind. ([Firefox Bug 1874874](https://bugzil.la/1874874)).

### JavaScript

- {{jsxref("Intl.Segmenter")}} wird jetzt unterstützt, wodurch Entwickler zeichenfolgenbasierte Segmentierung von Text in abhöngigkeit von lokalen angepasst durchführen können.
  Dies ermöglicht zum Beispiel, eine Zeichenfolge in Wörter zu teilen in Sprachen, die keine Leerzeichen zur Trennung verwenden: `Intl.Segmenter("ja-JP", { granularity: "word" })`.
  Sie können auch Zeichenfolgen in Grapheme oder Sätze unterteilen.
  ([Firefox Bug 1423593](https://bugzil.la/1423593), [Firefox Bug 1883914](https://bugzil.la/1883914).)

### APIs

- Die [Popover-API](/de/docs/Web/API/Popover_API) wird jetzt vollständig unterstützt und ermöglicht die Erstellung von obersten UI-Elementen im "Popover"-Stil, die für Aktionsmenüs, benutzerdefinierte "Toast"-Benachrichtigungen, Eingabevorschläge, Inhaltsauswahlen usw. verwendet werden können.
  Das Popover und sein auslösendes Button/Input können entweder mit HTML-Attributen oder JavaScript erstellt und mit CSS gestaltet werden.

  Die folgenden Web-APIs sind implementiert:
  - [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement)-Eigenschaften [`popoverTargetElement`](/de/docs/Web/API/HTMLButtonElement/popoverTargetElement) und [`popoverTargetAction`](/de/docs/Web/API/HTMLButtonElement/popoverTargetAction).
  - [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Eigenschaften [`popoverTargetElement`](/de/docs/Web/API/HTMLInputElement/popoverTargetElement) und [`popoverTargetAction`](/de/docs/Web/API/HTMLInputElement/popoverTargetAction).
  - [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Eigenschaft [`popover`](/de/docs/Web/API/HTMLElement/popover), Methoden [`hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover), [`showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) und [`togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover), sowie Ereignisse [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) und [`toggle_event`](/de/docs/Web/API/HTMLElement/toggle_event) vom Typ [`ToggleEvent`](/de/docs/Web/API/ToggleEvent).

  Die folgenden CSS-Pseudoklasse und -Elemente werden nun für die Verwendung mit Popover unterstützt:
  - [`:popover-open`](/de/docs/Web/CSS/:popover-open)
  - [`::backdrop`](/de/docs/Web/CSS/::backdrop) wurde erweitert, um Popover zu unterstützen

  Die folgenden globalen HTML-Attribute werden unterstützt:
  - [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)
  - [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction)

  ([Firefox Bug 1823757](https://bugzil.la/1823757), [Firefox Bug 1866993](https://bugzil.la/1866993)).

- Die [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) Eigenschaften [`state`](/de/docs/Web/API/RTCIceTransport/state) und [`gatheringState`](/de/docs/Web/API/RTCIceTransport/gatheringState), sowie ihre zugehörigen Ereignisse [`statechange`](/de/docs/Web/API/RTCIceTransport/statechange_event) und [`gatheringstatechange`](/de/docs/Web/API/RTCIceTransport/gatheringstatechange_event), werden jetzt unterstützt, zusammen mit der [`RTCDtlsTransport.iceTransport`](/de/docs/Web/API/RTCDtlsTransport/iceTransport) Eigenschaft (die das zugrunde liegende `RTCIceTransport` für ein [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) zurückgibt).
  Diese ermöglichen eine viel feinere Überwachung als die durch die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) Eigenschaften [`iceGatheringState`](/de/docs/Web/API/RTCPeerConnection/iceGatheringState) und [`connectionState`](/de/docs/Web/API/RTCPeerConnection/connectionState) bereitgestellte.
  ([Firefox Bug 1811912](https://bugzil.la/1811912))
- [`Element.ariaBrailleLabel`](/de/docs/Web/API/Element/ariaBrailleLabel) und [`Element.ariaBrailleRoleDescription`](/de/docs/Web/API/Element/ariaBrailleRoleDescription) werden jetzt unterstützt, welche die globalen ARIA HTML Attribute [`aria-braillelabel`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-braillelabel) und [`aria-brailleroledescription`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-brailleroledescription) widerspiegeln. ([Firefox Bug 1861201](https://bugzil.la/1861201)).

- Unterstützung hinzugefügt, damit Webanwendungen sich anmutig erholen können, wenn ein Canvas vorübergehend seinen 2D-Kontext verliert, was passieren könnte, wenn das Canvas hardwarebeschleunigt auf einer GPU läuft und sein Treiber abstürzt ([Firefox Bug 1887729](https://bugzil.la/1887729)).
  Hier sind einige zusätzliche Details zu den Ereignissen für verlorene und wiederhergestellte Canvas-Kontexte:
  - Anwendungen können [`contextlost`](/de/docs/Web/API/HTMLCanvasElement/contextlost_event) und [`contextrestored`](/de/docs/Web/API/HTMLCanvasElement/contextrestored_event) Ereignisse überwachen, die auf [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) ausgelöst werden, wenn der Kontext verloren geht bzw. wiederhergestellt wird, und können auch den Kontext überprüfen mit [`CanvasRenderingContext2D.isContextLost()`](/de/docs/Web/API/CanvasRenderingContext2D/isContextLost).
  - Nachdem `contextlost` ausgelöst wurde, versucht ein Browser standardmäßig den verlorenen Kontext neu zu starten, aber der Code kann dies verhindern, indem das Ereignis abgebrochen wird.
  - Offscreen-Canvas können auf die gleiche Weise überwacht werden, aber mit [`OffScreenCanvas`](/de/docs/Web/API/OffscreenCanvas) Ereignissen [`contextlost`](/de/docs/Web/API/OffscreenCanvas/contextlost_event) und [`contextrestored`](/de/docs/Web/API/OffscreenCanvas/contextrestored_event), zusammen mit [`OffscreenCanvasRenderingContext2D.isContextLost()`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D#context).

- Unterstützung hinzugefügt für das [`shadowrootclonable`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootclonable) Attribut des `<template>` Elements und die [`shadowRootClonable`](/de/docs/Web/API/HTMLTemplateElement/shadowRootClonable) Eigenschaft der `HTMLTemplateElement` Schnittstelle, die es widerspiegelt.
  Diese setzen die [`clonable`](/de/docs/Web/API/ShadowRoot/clonable) Eigenschaft eines [`ShadowRoot`](/de/docs/Web/API/ShadowRoot), das deklarativ mit dem [`<template>`](/de/docs/Web/HTML/Reference/Elements/template) Element erstellt wurde.
  ([Firefox Bug 1880188](https://bugzil.la/1880188)).

- Die [`readText()`](/de/docs/Web/API/Clipboard/readText) Methode der [`Clipboard`](/de/docs/Web/API/Clipboard) Schnittstelle wird jetzt unterstützt, um Text asynchron von der System-Zwischenablage zu lesen.
  Wenn Zwischenablagedaten gelesen werden, die nicht von der seiteninternen Herkunft bereitgestellt wurden, erscheint ein Einfüge-Kontextmenü, das der Benutzer bestätigen muss. ([Firefox Bug 1877400](https://bugzil.la/1877400)).

#### Medien, WebRTC und Web Audio

- Der [AV1](/de/docs/Web/Media/Guides/Formats/Video_codecs#av1) Codec wird jetzt für [Encrypted Media Extensions](/de/docs/Web/API/Encrypted_Media_Extensions_API) unterstützt, was eine höherwertige Wiedergabe von Video-Streaming-Anbietern ermöglicht. ([Firefox Bug 1601817](https://bugzil.la/1601817)).

#### Entfernungen

- Die [`SVGAElement.text`](/de/docs/Web/API/SVGAElement#svgaelement.text) Eigenschaft wurde entfernt. Die [`textContent`](/de/docs/Web/API/Node/textContent) Eigenschaft (geerbt von `Node`) wird weitgehend unterstützt und sollte stattdessen verwendet werden. ([Firefox Bug 1880689](https://bugzil.la/1880689)).

### WebAssembly

- Unterstützung wurde hinzugefügt, damit Wasm-Module mehrere unabhängige lineare Speicher verwenden können.
  Mehrere Speicher ermöglichen effizientere Interoperabilität zwischen Modulen und bessere Polyfills für bevorstehende Wasm-Standards. Sie können beispielsweise verwendet werden, um separaten Speicher für interne und gemeinsame Daten, temporäre und persistente Daten oder Daten zu erstellen, die zwischen Threads geteilt werden müssen.
  Der Speicher kann in JavaScript erstellt und in das Wasm-Modul importiert oder im Wasm-Modul erstellt und exportiert werden.
  Jeder neue lineare Speicher in einer Wasm-Instanz erhält einen sequentiellen Index, beginnend bei Null.
  WebAssembly [Speicheranweisungen](/de/docs/WebAssembly/Reference/Memory) verwenden den Index, um auf den Speicher zu verweisen, auf den sie wirken, und standardmäßig wird der erste definierte Speicher verwendet, wenn kein Index angegeben ist.
  Weitere Informationen finden Sie unter [WebAssembly Memory](/de/docs/WebAssembly/Guides/Understanding_the_text_format#webassembly_memory) in _Understanding WebAssembly text format_.
  ([Firefox Bug 1860816](https://bugzil.la/1860816)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Unterstützung wurde hinzugefügt für die ["userAgent" Fähigkeit](https://w3c.github.io/webdriver/#capabilities), die den Standard-Wert des User-Agent des Endpunktknotens identifiziert ([Firefox Bug 1885495](https://bugzil.la/1885495)).

#### WebDriver BiDi

- Unterstützung wurde hinzugefügt für den [input.setFiles](https://w3c.github.io/webdriver-bidi/#command-input-setFiles) Befehl, der es ermöglicht, Dateien für `<input>` Elemente mit `type="file"` festzulegen oder zu aktualisieren ([Firefox Bug 1855040](https://bugzil.la/1855040)).
- Unterstützung wurde hinzugefügt für den [storage.deleteCookies](https://w3c.github.io/webdriver-bidi/#command-storage-deleteCookies) Befehl, um Cookies zu löschen ([Firefox Bug 1854581](https://bugzil.la/1854581)).
- Unterstützung wurde hinzugefügt für "userContext" als Feld des "partition" Arguments für Cookie-Befehle ([Firefox Bug 1875255](https://bugzil.la/1875255)).
- Ein Problem wurde behoben, bei dem [storage.getCookies](https://w3c.github.io/webdriver-bidi/#command-storage-getCookies) nicht alle erwarteten Cookies für eine gegebene "sourceOrigin" abrufen würde ([Firefox Bug 1884647](https://bugzil.la/1884647)).
- Ein Problem wurde behoben, bei dem empfohlene Voreinstellungen nicht angewendet würden, wenn nur WebDriver BiDi als Remote-Protokoll aktiviert war, was bedeutet, dass CDP deaktiviert war ([Firefox Bug 1882748](https://bugzil.la/1882748)).
- Ein Problem wurde behoben, bei dem das Erstellen und Wechseln zu einem neuen Tab nicht wartete, bis der `visibilityState` aktualisiert war ([Firefox Bug 1877469](https://bugzil.la/1877469)).

## Änderungen für Add-on-Entwickler

- Der Inhalt der {{WebExtAPIRef("proxy.ProxyInfo")}} Eigenschaft `proxyAuthorization` wird jetzt an die {{httpheader("Proxy-Authorization")}} Anforderungsheader gesendet, die an HTTP-Proxys (zusätzlich zur bestehenden Unterstützung für HTTPS-Proxys) als Teil einer [CONNECT](/de/docs/Web/HTTP/Reference/Methods/CONNECT) Anfrage gesendet werden ([Firefox Bug 1794464](https://bugzil.la/1794464)).

## Experimentelle Webfunktionen

Diese Funktionen sind in Firefox 125 enthalten, jedoch nur in Entwicklerversionen oder hinter einer Präferenz. Um diese auszuprobieren, können Sie nach der zugehörigen Präferenz auf der `about:config` Seite suchen, um zu sehen, ob sie aktiviert oder deaktiviert sind. Um mehr über diese Funktionen zu erfahren, besuchen Sie die Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **CSS `transition-behavior`:** `layout.css.transition-behavior.enabled`.

  Die {{cssxref("transition-behavior")}} Eigenschaft ist standardmäßig in der Nightly-Version aktiviert.
  Autoren können diese Eigenschaft verwenden, um zu steuern, ob CSS-Übergänge auf Eigenschaften mit einem [diskreten Animationstyp](/de/docs/Web/CSS/CSS_animated_properties#discrete) angewendet werden sollen ([Firefox Bug 1882408](https://bugzil.la/1882408), [Firefox Bug 1805727](https://bugzil.la/1805727)).

- **UA-Stile für `<h1>` verschachtelt in Abschnittselementen:** `layout.css.h1-in-section-ua-styles.enabled`.

  Die `<h1>` Überschrift verringert sich nun nicht mehr in Schriftgröße, wenn sie innerhalb von [Abschnittselementen](/de/docs/Web/HTML/Guides/Content_categories#sectioning_content) `<article>`, `<aside>`, `<nav>`, und `<section>` verschachtelt ist. Die UA-Stile für `<h1>` verschachtelt innerhalb von Abschnittselementen sind nicht mehr relevant, da der Umriss-Algorithmus [aus der HTML-Spezifikation entfernt wurde](https://github.com/whatwg/html/pull/7829). ([Firefox Bug 1883896](https://bugzil.la/1883896)).

  > [!NOTE]
  > Die Präferenz für diese Funktion funktioniert umgekehrt: Sie ist im Nightly-Build auf `false` gesetzt, was die UA-Styling für Überschriften entfernt, die in Abschnittselementen verschachtelt sind. Sie ist in allen anderen Kanälen auf `true` gesetzt, was das bestehende UA-Styling für die verschachtelten Überschriften beibehält.

## Ältere Versionen

{{Firefox_for_developers}}
