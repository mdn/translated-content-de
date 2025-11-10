---
title: Firefox 125 Versionshinweise für Entwickler
short-title: Firefox 125
slug: Mozilla/Firefox/Releases/125
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 125, die Entwickler betreffen. Firefox 125 wurde am [16. April 2024](https://whattrainisitnow.com/release/?version=125) veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen.

### CSS

- Die {{cssxref("align-content")}}-Eigenschaft wurde aktualisiert, um mit `display: block;` Layouts zu funktionieren. Dadurch werden alle Layoutpositionen von `flex` und `grid` auf `block` übertragen, was Entwicklern ermöglicht, Blockelemente ohne Umwandlung ihres Containers in einen `flex` oder `grid` Container auszurichten. ([Firefox Fehler 1882853](https://bugzil.la/1882853)).
- Die CSS-Eigenschaft [`transform-box`](/de/docs/Web/CSS/Reference/Properties/transform-box) unterstützt jetzt die Werte `content-box` und `stroke-box`. Für die Referenzbox verwendet der Wert `content-box` die [Inhaltsbox](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#parts_of_a_box) und der Wert `stroke-box` verwendet die Stroke-Umrandungsbox, die die Form eines SVGs enthält ([Firefox Fehler 1868374](https://bugzil.la/1868374)).
- Der Wert `auto` der [`content-visibility`](/de/docs/Web/CSS/Reference/Properties/content-visibility) CSS-Eigenschaft ist nun standardmäßig aktiviert. Dadurch kann die Darstellung von Inhalten übersprungen werden, wenn diese nicht für den Benutzer [relevant](/de/docs/Web/CSS/Guides/Containment/Using#relevant_to_the_user) sind. ([Firefox Fehler 1874874](https://bugzil.la/1874874)).

### JavaScript

- {{jsxref("Intl.Segmenter")}} wird jetzt unterstützt und ermöglicht Entwicklern die sprachabhängige Textsegmentierung eines Strings.
  Dies ermöglicht beispielsweise das Aufteilen eines Strings in Wörter in Sprachen, die keine Leerzeichen zur Trennung verwenden: `Intl.Segmenter("ja-JP", { granularity: "word" })`.
  Sie können Strings auch in Grapheme oder Sätze aufteilen.
  ([Firefox Fehler 1423593](https://bugzil.la/1423593), [Firefox Fehler 1883914](https://bugzil.la/1883914).)

### APIs

- Die [Popover API](/de/docs/Web/API/Popover_API) wird jetzt vollständig unterstützt und ermöglicht die Erstellung von Top-Level-„Popover“-UI-Elementen, die für Aktionsmenüs, benutzerdefinierte „Toast“-Benachrichtigungen, Formularelementvorschläge, Inhaltspicker und dergleichen verwendet werden könnten.
  Das Popover und sein auslösendes Button/Input können entweder mittels HTML-Attribute oder JavaScript erstellt und mit CSS gestaltet werden.

  Die folgenden Web-APIs sind implementiert:

  - [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement) Eigenschaften [`popoverTargetElement`](/de/docs/Web/API/HTMLButtonElement/popoverTargetElement) und [`popoverTargetAction`](/de/docs/Web/API/HTMLButtonElement/popoverTargetAction).
  - [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Eigenschaften [`popoverTargetElement`](/de/docs/Web/API/HTMLInputElement/popoverTargetElement) und [`popoverTargetAction`](/de/docs/Web/API/HTMLInputElement/popoverTargetAction).
  - [`HTMLElement`](/de/docs/Web/API/HTMLElement) Eigenschaft [`popover`](/de/docs/Web/API/HTMLElement/popover), [`hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover), [`showPopover()`](/de/docs/Web/API/HTMLElement/showPopover), und [`togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) Methoden, und [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) und [`toggle_event`](/de/docs/Web/API/HTMLElement/toggle_event) Ereignisse (vom Typ [`ToggleEvent`](/de/docs/Web/API/ToggleEvent)).

  Die folgenden CSS-Pseudoklasse und -Elemente werden jetzt für die Verwendung mit Popovers unterstützt:

  - [`:popover-open`](/de/docs/Web/CSS/Reference/Selectors/:popover-open)
  - [`::backdrop`](/de/docs/Web/CSS/Reference/Selectors/::backdrop) wurde erweitert, um Popovers zu unterstützen

  Die folgenden globalen HTML-Attribute werden unterstützt:

  - [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)
  - [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction)

  ([Firefox Fehler 1823757](https://bugzil.la/1823757), [Firefox Fehler 1866993](https://bugzil.la/1866993)).

- Die [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) Eigenschaften [`state`](/de/docs/Web/API/RTCIceTransport/state) und [`gatheringState`](/de/docs/Web/API/RTCIceTransport/gatheringState), und die dazugehörigen Ereignisse [`statechange`](/de/docs/Web/API/RTCIceTransport/statechange_event) und [`gatheringstatechange`](/de/docs/Web/API/RTCIceTransport/gatheringstatechange_event) werden jetzt unterstützt, zusammen mit der [`RTCDtlsTransport.iceTransport`](/de/docs/Web/API/RTCDtlsTransport/iceTransport) Eigenschaft (die das zugrunde liegende `RTCIceTransport` für ein [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) zurückgibt).
  Diese ermöglichen eine viel feinere Überwachung als die von den [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) Eigenschaften [`iceGatheringState`](/de/docs/Web/API/RTCPeerConnection/iceGatheringState) und [`connectionState`](/de/docs/Web/API/RTCPeerConnection/connectionState) bereitgestellten.
  ([Firefox Fehler 1811912](https://bugzil.la/1811912))
- [`Element.ariaBrailleLabel`](/de/docs/Web/API/Element/ariaBrailleLabel) und [`Element.ariaBrailleRoleDescription`](/de/docs/Web/API/Element/ariaBrailleRoleDescription) werden jetzt unterstützt und spiegeln die globalen ARIA HTML-Attribute [`aria-braillelabel`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-braillelabel) und [`aria-brailleroledescription`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-brailleroledescription) wider. ([Firefox Fehler 1861201](https://bugzil.la/1861201)).

- Unterstützung hinzugefügt, um Webanwendungen ein sanftes Wiederherstellen zu ermöglichen, wenn ein Canvas vorübergehend seinen 2D-Kontext verliert, was passieren könnte, wenn das Canvas hardwarebeschleunigt auf einer GPU läuft und sein Treiber abstürzt ([Firefox Fehler 1887729](https://bugzil.la/1887729)).
  Nachfolgend einige zusätzliche Details zu den Ereignissen für verlorene und wiederhergestellte Canvas-Kontexte:

  - Anwendungen können [`contextlost`](/de/docs/Web/API/HTMLCanvasElement/contextlost_event) und [`contextrestored`](/de/docs/Web/API/HTMLCanvasElement/contextrestored_event) Ereignisse überwachen, die auf [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) ausgelöst werden, wenn der Kontext verloren geht und wiederhergestellt wird, und können den Kontext auch mit [`CanvasRenderingContext2D.isContextLost()`](/de/docs/Web/API/CanvasRenderingContext2D/isContextLost) überprüfen.
  - Nach der Ausgabe von `contextlost` wird ein Browser versuchen, den verlorenen Kontext standardmäßig neu zu starten, aber der Code kann dies verhindern, indem das Ereignis abgebrochen wird.
  - Offscreen-Canvas können auf die gleiche Weise überwacht werden, jedoch mit [`OffScreenCanvas`](/de/docs/Web/API/OffscreenCanvas) Ereignissen [`contextlost`](/de/docs/Web/API/OffscreenCanvas/contextlost_event) und [`contextrestored`](/de/docs/Web/API/OffscreenCanvas/contextrestored_event), zusammen mit [`OffscreenCanvasRenderingContext2D.isContextLost()`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D#context).

- Unterstützung für das Attribut [`shadowrootclonable`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootclonable) des `<template>` Elements hinzugefügt, und die [`shadowRootClonable`](/de/docs/Web/API/HTMLTemplateElement/shadowRootClonable) Eigenschaft der `HTMLTemplateElement` Schnittstelle, die es widerspiegelt.
  Diese setzen die [`clonable`](/de/docs/Web/API/ShadowRoot/clonable) Eigenschaft eines [`ShadowRoot`](/de/docs/Web/API/ShadowRoot), das deklarativ unter Verwendung des [`<template>`](/de/docs/Web/HTML/Reference/Elements/template) Elements erstellt wurde.
  ([Firefox Fehler 1880188](https://bugzil.la/1880188)).

- Die [`readText()`](/de/docs/Web/API/Clipboard/readText) Methode der [`Clipboard`](/de/docs/Web/API/Clipboard) Schnittstelle wird jetzt unterstützt, um Text asynchron aus der Systemzwischenablage zu lesen.
  Beim Lesen von Zwischenablagedaten, die nicht von derselben Ursprungsseite bereitgestellt werden, erscheint ein Einfügekontextmenü zur Bestätigung durch den Benutzer. ([Firefox Fehler 1877400](https://bugzil.la/1877400)).

#### Medien, WebRTC und Web Audio

- Der [AV1](/de/docs/Web/Media/Guides/Formats/Video_codecs#av1) Codec wird jetzt für [Encrypted Media Extensions](/de/docs/Web/API/Encrypted_Media_Extensions_API) unterstützt und ermöglicht eine qualitativ hochwertigere Wiedergabe von Videostreaming-Anbietern. ([Firefox Fehler 1601817](https://bugzil.la/1601817)).

#### Entfernungen

- Die [`SVGAElement.text`](/de/docs/Web/API/SVGAElement/text) Eigenschaft wurde entfernt. Die [`textContent`](/de/docs/Web/API/Node/textContent) Eigenschaft (geerbt von `Node`) wird breit unterstützt und sollte stattdessen verwendet werden. ([Firefox Fehler 1880689](https://bugzil.la/1880689)).

### WebAssembly

- Die Unterstützung wurde für Wasm-Module hinzugefügt, um mehrere unabhängige lineare Speicher zu verwenden.
  Mehrere Speicher ermöglichen eine effizientere Interoperabilität zwischen Modulen und bessere Polyfills für kommende Wasm-Standards. Sie können beispielsweise verwendet werden, um separaten Speicher für interne und geteilte Daten, flüchtige und persistente Daten oder Daten, die zwischen Threads geteilt werden müssen, zu erstellen.
  Der Speicher kann in JavaScript erstellt und in das Wasm-Modul importiert oder im Wasm-Modul erstellt und exportiert werden.
  Jeder neue lineare Speicher in einer Wasm-Instanz erhält einen sequentiellen Index, beginnend bei null.
  WebAssembly [Speicherbefehle](/de/docs/WebAssembly/Reference/Memory) verwenden den Index, um den Speicher zu referenzieren, mit dem sie arbeiten, und beziehen sich standardmäßig auf den ersten definierten Speicher, wenn kein Index angegeben ist.
  Für weitere Informationen siehe [WebAssembly Memory](/de/docs/WebAssembly/Guides/Understanding_the_text_format#webassembly_memory) im Dokument _Understanding WebAssembly text format_.
  ([Firefox Fehler 1860816](https://bugzil.la/1860816)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Unterstützung für die ["userAgent"-Fähigkeit](https://w3c.github.io/webdriver/#capabilities) hinzugefügt, die den Standard-User-Agent-Wert des Endpunktknotens identifiziert ([Firefox Fehler 1885495](https://bugzil.la/1885495)).

#### WebDriver BiDi

- Unterstützung für den [input.setFiles](https://w3c.github.io/webdriver-bidi/#command-input-setFiles)-Befehl hinzugefügt, der es ermöglicht, Dateien für `<input>` Elemente mit `type="file"` zu setzen oder zu aktualisieren ([Firefox Fehler 1855040](https://bugzil.la/1855040)).
- Unterstützung für den [storage.deleteCookies](https://w3c.github.io/webdriver-bidi/#command-storage-deleteCookies)-Befehl hinzugefügt, um Cookies zu löschen ([Firefox Fehler 1854581](https://bugzil.la/1854581)).
- Unterstützung für "userContext" als Feld des "partition"-Arguments für Cookie-Befehle hinzugefügt ([Firefox Fehler 1875255](https://bugzil.la/1875255)).
- Ein Problem behoben, bei dem [storage.getCookies](https://w3c.github.io/webdriver-bidi/#command-storage-getCookies) nicht alle erwarteten Cookies für einen gegebenen "sourceOrigin" abrufen würde ([Firefox Fehler 1884647](https://bugzil.la/1884647)).
- Ein Problem behoben, bei dem empfohlene Präferenzen nicht angewendet wurden, wenn nur WebDriver BiDi als Remote-Protokoll, was bedeutet, dass CDP deaktiviert ist, aktiviert war ([Firefox Fehler 1882748](https://bugzil.la/1882748)).
- Ein Problem behoben, bei dem das Erstellen und Wechseln zu einem neuen Tab nicht auf die Aktualisierung des `visibilityState` wartete ([Firefox Fehler 1877469](https://bugzil.la/1877469)).

## Änderungen für Add-on-Entwickler

- Der Inhalt der {{WebExtAPIRef("proxy.ProxyInfo")}} Eigenschaft `proxyAuthorization` wird jetzt dem {{httpheader("Proxy-Authorization")}} Anforderungsheader hinzugefügt, der an HTTP-Proxys gesendet wird (zusätzlich zur bestehenden Unterstützung für HTTPS-Proxys) als Teil einer [CONNECT](/de/docs/Web/HTTP/Reference/Methods/CONNECT) Anfrage ([Firefox Fehler 1794464](https://bugzil.la/1794464)).

## Experimentelle Web-Features

Diese Features sind in Firefox 125 verfügbar, jedoch nur in Entwickler-Releases oder hinter einer Präferenz. Um diese auszuprobieren, können Sie die entsprechende Präferenz auf der `about:config` Seite suchen, um zu sehen, ob sie aktiviert oder deaktiviert sind. Um mehr über diese Features zu erfahren, siehe die Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **CSS `transition-behavior`:** `layout.css.transition-behavior.enabled`.

  Die {{cssxref("transition-behavior")}} Eigenschaft ist standardmäßig im Nightly-Release aktiviert.
  Autoren können diese Eigenschaft verwenden, um zu steuern, ob CSS-Übergänge auf Eigenschaften mit einem [diskreten Animationstyp](/de/docs/Web/CSS/Guides/Animations/Animatable_properties#discrete) angewendet werden sollen ([Firefox Fehler 1882408](https://bugzil.la/1882408), [Firefox Fehler 1805727](https://bugzil.la/1805727)).

- **UA Styles für `<h1>` innerhalb von Strukturelementen:** `layout.css.h1-in-section-ua-styles.enabled`.

  Die `<h1>`-Überschrift wird jetzt nicht mehr in der Schriftgröße verkleinert, wenn sie innerhalb von [Strukturelementen](/de/docs/Web/HTML/Guides/Content_categories#sectioning_content) `<article>`, `<aside>`, `<nav>`, und `<section>` eingebettet ist. Die UA-Stile für `<h1>` innerhalb von Strukturelementen sind nicht mehr relevant, da der Outline-Algorithmus [aus der HTML-Spezifikation entfernt wurde](https://github.com/whatwg/html/pull/7829). ([Firefox Fehler 1883896](https://bugzil.la/1883896)).

  > [!NOTE]
  > Die Präferenz für dieses Feature funktioniert umgekehrt: Sie ist auf `false` im Nightly-Build gesetzt, was die UA-Stilgebung für Überschriften entfernt, die in Strukturelementen eingebettet sind. In allen anderen Kanälen ist sie auf `true` gesetzt, was die bestehende UA-Stilgebung für die eingebetteten Überschriften beibehält.
