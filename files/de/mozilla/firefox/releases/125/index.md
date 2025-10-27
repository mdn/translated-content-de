---
title: Firefox 125 Versionshinweise für Entwickler
short-title: Firefox 125
slug: Mozilla/Firefox/Releases/125
l10n:
  sourceCommit: 6722199b4d63fad3c33db1146af380fc98b6c202
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 125, die Entwickler betreffen. Firefox 125 wurde am [16. April 2024](https://whattrainisitnow.com/release/?version=125) veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen.

### CSS

- Die {{cssxref("align-content")}} Eigenschaft wurde aktualisiert, um auch mit `display: block;` Layouts zu funktionieren. Dies bringt alle Layout-Positionen von `flex` und `grid` zu `block` und ermöglicht Entwicklern, Block-Elemente auszurichten, ohne deren Container in einen `flex` oder `grid` Container umzuwandeln. ([Firefox Bug 1882853](https://bugzil.la/1882853)).
- Die CSS-Eigenschaft [`transform-box`](/de/docs/Web/CSS/transform-box) unterstützt jetzt die Werte `content-box` und `stroke-box`. Für die Referenzbox verwendet der Wert `content-box` die [Inhaltsbox](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#parts_of_a_box) und der Wert `stroke-box` verwendet die Umrandungsbox des Strichs, die die Form eines SVG enthält ([Firefox Bug 1868374](https://bugzil.la/1868374)).
- Der `content-visibility` Wert `auto` der [`content-visibility`](/de/docs/Web/CSS/content-visibility) CSS-Eigenschaft ist jetzt standardmäßig aktiviert. Dies ermöglicht es, dass Inhalte nicht gerendert werden, wenn sie für den Benutzer nicht [relevant](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#relevant_to_the_user) sind. ([Firefox Bug 1874874](https://bugzil.la/1874874)).

### JavaScript

- {{jsxref("Intl.Segmenter")}} wird jetzt unterstützt und ermöglicht es Entwicklern, eine lokalsensitive Textsegmentierung einer Zeichenkette durchzuführen. Dies ermöglicht beispielsweise das Aufteilen einer Zeichenkette in Wörter in Sprachen, die keine Leerzeichen zur Trennung verwenden: `Intl.Segmenter("ja-JP", { granularity: "word" })`. Sie können auch Zeichenketten in Grapheme oder Sätze aufteilen. ([Firefox Bug 1423593](https://bugzil.la/1423593), [Firefox Bug 1883914](https://bugzil.la/1883914).)

### APIs

- Die [Popover API](/de/docs/Web/API/Popover_API) wird jetzt vollständig unterstützt und ermöglicht die Erstellung von "Popover"-UI-Elemente auf oberster Ebene, die für Aktionsmenüs, benutzerdefinierte "Toast"-Benachrichtigungen, Vorschläge für Formularelemente, Inhaltspicker usw. verwendet werden können. Der Popover und der auslösende Button/Eingabefeld können entweder über HTML-Attribute oder JavaScript erstellt und mithilfe von CSS gestaltet werden.

  Die folgenden Web-APIs sind implementiert:
  - [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement) Eigenschaften [`popoverTargetElement`](/de/docs/Web/API/HTMLButtonElement/popoverTargetElement) und [`popoverTargetAction`](/de/docs/Web/API/HTMLButtonElement/popoverTargetAction).
  - [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Eigenschaften [`popoverTargetElement`](/de/docs/Web/API/HTMLInputElement/popoverTargetElement) und [`popoverTargetAction`](/de/docs/Web/API/HTMLInputElement/popoverTargetAction).
  - [`HTMLElement`](/de/docs/Web/API/HTMLElement) Eigenschaften [`popover`](/de/docs/Web/API/HTMLElement/popover), [`hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover), [`showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) und [`togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) Methoden, sowie [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) und [`toggle_event`](/de/docs/Web/API/HTMLElement/toggle_event) Ereignisse (vom Typ [`ToggleEvent`](/de/docs/Web/API/ToggleEvent)).

  Die folgenden CSS-Pseudoklasse und -Element werden jetzt für die Verwendung mit Popovers unterstützt:
  - [`:popover-open`](/de/docs/Web/CSS/:popover-open)
  - [`::backdrop`](/de/docs/Web/CSS/::backdrop) wurde erweitert, um Popovers zu unterstützen

  Die folgenden globalen HTML-Attribute werden unterstützt:
  - [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)
  - [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction)

  ([Firefox Bug 1823757](https://bugzil.la/1823757), [Firefox Bug 1866993](https://bugzil.la/1866993)).

- Die Eigenschaften [`state`](/de/docs/Web/API/RTCIceTransport/state) und [`gatheringState`](/de/docs/Web/API/RTCIceTransport/gatheringState) des [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) sowie ihre zugehörigen Ereignisse [`statechange`](/de/docs/Web/API/RTCIceTransport/statechange_event) und [`gatheringstatechange`](/de/docs/Web/API/RTCIceTransport/gatheringstatechange_event) werden jetzt unterstützt, zusammen mit der Eigenschaft [`RTCDtlsTransport.iceTransport`](/de/docs/Web/API/RTCDtlsTransport/iceTransport) (die das zugrunde liegende `RTCIceTransport` für ein [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) zurückgibt). Diese ermöglichen eine viel detailliertere Überwachung als die Eigenschaften [`iceGatheringState`](/de/docs/Web/API/RTCPeerConnection/iceGatheringState) und [`connectionState`](/de/docs/Web/API/RTCPeerConnection/connectionState) von [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection). ([Firefox Bug 1811912](https://bugzil.la/1811912))
- [`Element.ariaBrailleLabel`](/de/docs/Web/API/Element/ariaBrailleLabel) und [`Element.ariaBrailleRoleDescription`](/de/docs/Web/API/Element/ariaBrailleRoleDescription) werden jetzt unterstützt und spiegeln die globalen ARIA-HTML-Attribute [`aria-braillelabel`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-braillelabel) und [`aria-brailleroledescription`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-brailleroledescription) wider. ([Firefox Bug 1861201](https://bugzil.la/1861201)).

- Unterstützung wurde hinzugefügt, um Webanwendungen zu ermöglichen, sich nahtlos zu erholen, wenn ein Canvas vorübergehend seinen 2D-Kontext verliert, was passieren könnte, wenn das Canvas hardwarebeschleunigt auf einer GPU läuft und sein Treiber abstürzt ([Firefox Bug 1887729](https://bugzil.la/1887729)). Hier sind einige zusätzliche Details zu den Ereignissen für verlorene und wiederhergestellte Canvas-Kontexte:
  - Anwendungen können auf die Ereignisse [`contextlost`](/de/docs/Web/API/HTMLCanvasElement/contextlost_event) und [`contextrestored`](/de/docs/Web/API/HTMLCanvasElement/contextrestored_event) überwachen, die auf [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) ausgelöst werden, wenn der Kontext verloren geht bzw. wiederhergestellt wird, und können auch den Kontext mit [`CanvasRenderingContext2D.isContextLost()`](/de/docs/Web/API/CanvasRenderingContext2D/isContextLost) überprüfen.
  - Nachdem `contextlost` ausgelöst wurde, versucht ein Browser standardmäßig, den verlorenen Kontext neu zu starten, aber der Code kann dies verhindern, indem das Ereignis abgebrochen wird.
  - Abseits vonSchirm-Canvas kann auf die gleiche Weise überwacht werden, jedoch mit den [`OffScreenCanvas`](/de/docs/Web/API/OffscreenCanvas) Ereignissen [`contextlost`](/de/docs/Web/API/OffscreenCanvas/contextlost_event) und [`contextrestored`](/de/docs/Web/API/OffscreenCanvas/contextrestored_event), zusammen mit [`OffscreenCanvasRenderingContext2D.isContextLost()`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D#context).

- Unterstützung wurde hinzugefügt für das [`shadowrootclonable`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootclonable) Attribut des `<template>` Elements und die [`shadowRootClonable`](/de/docs/Web/API/HTMLTemplateElement/shadowRootClonable) Eigenschaft der `HTMLTemplateElement` Schnittstelle, die es widerspiegelt. Diese setzen die [`clonable`](/de/docs/Web/API/ShadowRoot/clonable) Eigenschaft eines [`ShadowRoot`](/de/docs/Web/API/ShadowRoot), das mithilfe des [`<template>`](/de/docs/Web/HTML/Reference/Elements/template) Elements deklarativ erstellt wurde. ([Firefox Bug 1880188](https://bugzil.la/1880188)).

- Die Methode [`readText()`](/de/docs/Web/API/Clipboard/readText) der [`Clipboard`](/de/docs/Web/API/Clipboard) Schnittstelle wird jetzt unterstützt, um Text asynchron von der Systemzwischenablage zu lesen. Beim Lesen von Zwischenablagedaten, die nicht von der Seite mit der gleichen Herkunft bereitgestellt werden, wird ein Einfügen-Kontextmenü angezeigt, damit der Benutzer dies bestätigen kann. ([Firefox Bug 1877400](https://bugzil.la/1877400)).

#### Medien, WebRTC und Web Audio

- Der [AV1](/de/docs/Web/Media/Guides/Formats/Video_codecs#av1) Codec wird jetzt für [Encrypted Media Extensions](/de/docs/Web/API/Encrypted_Media_Extensions_API) unterstützt, was eine hochwertigere Wiedergabe von Video-Streaming-Anbietern ermöglicht. ([Firefox Bug 1601817](https://bugzil.la/1601817)).

#### Entfernungen

- Die [`SVGAElement.text`](/de/docs/Web/API/SVGAElement/text) Eigenschaft wurde entfernt. Die [`textContent`](/de/docs/Web/API/Node/textContent) Eigenschaft (geerbt von `Node`) wird breit unterstützt und sollte stattdessen verwendet werden. ([Firefox Bug 1880689](https://bugzil.la/1880689)).

### WebAssembly

- Unterstützung wurde hinzugefügt, damit Wasm-Module mehrere unabhängige lineare Speicher verwenden können. Mehrere Speicher ermöglichen effizientere Interoperabilität zwischen Modulen und bessere Polyfills für kommende Wasm-Standards. Sie können zum Beispiel verwendet werden, um getrennte Speicher für interne und gemeinsame Daten, flüchtige und persistente Daten oder Daten, die zwischen Threads geteilt werden müssen, zu erstellen. Der Speicher kann in JavaScript erstellt und in das Wasm-Modul importiert oder im Wasm-Modul erstellt und exportiert werden. Jeder neue lineare Speicher in einer Wasm-Instanz erhält einen sequentiellen Index, der bei Null beginnt. WebAssembly [Speicheranweisungen](/de/docs/WebAssembly/Reference/Memory) verwenden den Index, um den Speicher zu referenzieren, auf dem sie arbeiten, wobei standardmäßig der erste definierte Speicher verwendet wird, wenn kein Index angegeben ist. Weitere Informationen finden Sie unter [WebAssembly-Memory](/de/docs/WebAssembly/Guides/Understanding_the_text_format#webassembly_memory) in _Understanding WebAssembly text format_. ([Firefox Bug 1860816](https://bugzil.la/1860816)).

### WebDriver Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Unterstützung für die ["userAgent" Fähigkeit](https://w3c.github.io/webdriver/#capabilities) wurde hinzugefügt, welche den Standard-User-Agent-Wert des Endpunktknotens identifiziert ([Firefox Bug 1885495](https://bugzil.la/1885495)).

#### WebDriver BiDi

- Unterstützung für den [input.setFiles](https://w3c.github.io/webdriver-bidi/#command-input-setFiles) Befehl wurde hinzugefügt, der es ermöglicht, die Dateien für `<input>` Elemente mit `type="file"` zu setzen oder zu aktualisieren ([Firefox Bug 1855040](https://bugzil.la/1855040)).
- Unterstützung für den [storage.deleteCookies](https://w3c.github.io/webdriver-bidi/#command-storage-deleteCookies) Befehl, um Cookies zu löschen, wurde hinzugefügt ([Firefox Bug 1854581](https://bugzil.la/1854581)).
- Unterstützung wurde für "userContext" als ein Feld des "partition" Arguments für Cookie-Befehle hinzugefügt ([Firefox Bug 1875255](https://bugzil.la/1875255)).
- Ein Problem wurde behoben, bei dem [storage.getCookies](https://w3c.github.io/webdriver-bidi/#command-storage-getCookies) nicht alle erwarteten Cookies für eine gegebene "sourceOrigin" abrufen würde ([Firefox Bug 1884647](https://bugzil.la/1884647)).
- Ein Problem wurde behoben, bei dem empfohlene Einstellungen nicht angewendet würden, wenn nur WebDriver BiDi als Fernprotokoll, das heißt CDP deaktiviert ist, aktiviert war ([Firefox Bug 1882748](https://bugzil.la/1882748)).
- Ein Problem wurde behoben, bei dem das Erstellen und Wechseln zu einem neuen Tab nicht auf die Aktualisierung des `visibilityState` warten würde ([Firefox Bug 1877469](https://bugzil.la/1877469)).

## Änderungen für Add-on Entwickler

- Der Inhalt der {{WebExtAPIRef("proxy.ProxyInfo")}} Eigenschaft `proxyAuthorization` wird jetzt an den {{httpheader("Proxy-Authorization")}} Anforderungsheader gesendet, der an HTTP-Proxies gesendet wird (zusätzlich zur bestehenden Unterstützung für HTTPS-Proxies) als Teil einer [CONNECT](/de/docs/Web/HTTP/Reference/Methods/CONNECT) Anfrage ([Firefox Bug 1794464](https://bugzil.la/1794464)).

## Experimentelle Web-Features

Diese Funktionen sind in Firefox 125 verfügbar, aber nur in Entwickler-Versionen oder hinter einer Präferenz. Um diese auszuprobieren, können Sie die zugehörige Präferenz auf der `about:config` Seite suchen, um zu sehen, ob sie aktiviert oder deaktiviert sind. Weitere Informationen zu diesen Funktionen finden Sie auf der [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features) Seite.

- **CSS `transition-behavior`:** `layout.css.transition-behavior.enabled`.

  Die {{cssxref("transition-behavior")}} Eigenschaft ist standardmäßig in der Nightly-Version aktiviert. Autoren können diese Eigenschaft verwenden, um zu steuern, ob CSS-Übergänge auf Eigenschaften mit einem [diskreten Animationstyp](/de/docs/Web/CSS/CSS_animated_properties#discrete) angewendet werden sollen ([Firefox Bug 1882408](https://bugzil.la/1882408), [Firefox Bug 1805727](https://bugzil.la/1805727)).

- **UA-Stile für `<h1>` innerhalb von Abschnittselementen:** `layout.css.h1-in-section-ua-styles.enabled`.

  Die `<h1>`-Überschrift verringert ihre Schriftgröße jetzt nicht mehr, wenn sie innerhalb von [Abschnittselementen](/de/docs/Web/HTML/Guides/Content_categories#sectioning_content) wie `<article>`, `<aside>`, `<nav>`, und `<section>` verschachtelt ist. Die UA-Stile für `<h1>` innerhalb von Abschnittselementen sind nicht mehr relevant, da der Outline-Algorithmus [aus der HTML-Spezifikation entfernt wurde](https://github.com/whatwg/html/pull/7829). ([Firefox Bug 1883896](https://bugzil.la/1883896)).

  > [!NOTE]
  > Die Präferenz für diese Funktion funktioniert umgekehrt: Sie ist in der Nightly-Version auf `false` gesetzt, wodurch das UA-Styling für innerhalb von Abschnittselementen verschachtelte Überschriften entfernt wird. In allen anderen Kanälen ist sie auf `true` gesetzt, wodurch das bestehende UA-Styling für die verschachtelten Überschriften erhalten bleibt.
