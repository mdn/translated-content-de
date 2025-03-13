---
title: Firefox 125 für Entwickler
slug: Mozilla/Firefox/Releases/125
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{FirefoxSidebar}}

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 125, die Entwickler betreffen. Firefox 125 wurde am [16. April 2024](https://whattrainisitnow.com/release/?version=125) veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine bemerkenswerten Änderungen.

### CSS

- Die {{cssxref("align-content")}}-Eigenschaft wurde aktualisiert, um mit `display: block;`-Layouts zu funktionieren. Dadurch werden alle Layout-Positionen von `flex` und `grid` zu `block` gebracht, sodass Entwickler Blockelemente ausrichten können, ohne ihren Container in einen `flex`- oder `grid`-Container umzuwandeln. ([Firefox-Bug 1882853](https://bugzil.la/1882853)).
- Die CSS-Eigenschaft [`transform-box`](/de/docs/Web/CSS/transform-box) unterstützt jetzt die Werte `content-box` und `stroke-box`. Für die Referenzbox verwendet der Wert `content-box` den [content box](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#parts_of_a_box) und der Wert `stroke-box` verwendet die Schlagbegrenzungsbox, die die Form eines SVG enthält ([Firefox-Bug 1868374](https://bugzil.la/1868374)).
- Der CSS-Eigenschaftswert [`content-visibility`](/de/docs/Web/CSS/content-visibility) `auto` ist jetzt standardmäßig aktiviert. Dies ermöglicht es, dass Inhalte das Rendering überspringen, wenn sie für den Benutzer [nicht relevant](/de/docs/Web/CSS/CSS_containment#relevant_to_the_user) sind. ([Firefox-Bug 1874874](https://bugzil.la/1874874)).

### JavaScript

- {{jsxref("Intl.Segmenter")}} wird jetzt unterstützt, was es Entwicklern ermöglicht, eine lokalisierungssensitive Textsegmentierung eines Strings durchzuführen.
  Dies ermöglicht es beispielsweise, einen String in Wörter zu teilen, auch in Sprachen, die keine Leerzeichen zur Trennung verwenden: `Intl.Segmenter("ja-JP", { granularity: "word" })`.
  Sie können auch Strings in Grapheme oder Sätze unterteilen.
  ([Firefox-Bug 1423593](https://bugzil.la/1423593), [Firefox-Bug 1883914](https://bugzil.la/1883914).)

### APIs

- Die [Popover-API](/de/docs/Web/API/Popover_API) wird jetzt vollständig unterstützt, sodass UI-Elemente der obersten Ebene, „Popover“, erstellt werden können, die für Aktionsmenüs, benutzerdefinierte „Toast“-Benachrichtigungen, Vorschläge für Formularelemente, Inhaltsauswähler usw. verwendet werden können.
  Das Popover und sein auslösendes Button-/Eingabe-Element können entweder mit HTML-Attributen oder JavaScript erstellt und mit CSS gestaltet werden.

  Die folgenden Web-APIs wurden implementiert:

  - [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement)-Eigenschaften [`popoverTargetElement`](/de/docs/Web/API/HTMLButtonElement/popoverTargetElement) und [`popoverTargetAction`](/de/docs/Web/API/HTMLButtonElement/popoverTargetAction).
  - [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Eigenschaften [`popoverTargetElement`](/de/docs/Web/API/HTMLInputElement/popoverTargetElement) und [`popoverTargetAction`](/de/docs/Web/API/HTMLInputElement/popoverTargetAction).
  - [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Eigenschaft [`popover`](/de/docs/Web/API/HTMLElement/popover), Methoden [`hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover), [`showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) und [`togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) sowie Ereignisse [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) und [`toggle_event`](/de/docs/Web/API/HTMLElement/toggle_event) (vom Typ [`ToggleEvent`](/de/docs/Web/API/ToggleEvent)).

  Die folgenden CSS-Pseudoklasse und -Element werden jetzt für Popovers unterstützt:

  - [`:popover-open`](/de/docs/Web/CSS/:popover-open)
  - [`::backdrop`](/de/docs/Web/CSS/::backdrop) wurde erweitert, um Popovers zu unterstützen

  Die folgenden globalen HTML-Attribute werden unterstützt:

  - [`popovertarget`](/de/docs/Web/HTML/Element/button#popovertarget)
  - [`popovertargetaction`](/de/docs/Web/HTML/Element/button#popovertargetaction)

  ([Firefox-Bug 1823757](https://bugzil.la/1823757), [Firefox-Bug 1866993](https://bugzil.la/1866993)).

- Die [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport)-Eigenschaften [`state`](/de/docs/Web/API/RTCIceTransport/state) und [`gatheringState`](/de/docs/Web/API/RTCIceTransport/gatheringState) und deren zugehörige Ereignisse [`statechange`](/de/docs/Web/API/RTCIceTransport/statechange_event) und [`gatheringstatechange`](/de/docs/Web/API/RTCIceTransport/gatheringstatechange_event) werden jetzt unterstützt, zusammen mit der [`RTCDtlsTransport.iceTransport`](/de/docs/Web/API/RTCDtlsTransport/iceTransport)-Eigenschaft (die das zugrunde liegende `RTCIceTransport` für ein [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) zurückgibt).
  Diese erlauben eine viel feinere Überwachung als die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Eigenschaften [`iceGatheringState`](/de/docs/Web/API/RTCPeerConnection/iceGatheringState) und [`connectionState`](/de/docs/Web/API/RTCPeerConnection/connectionState).
  ([Firefox-Bug 1811912](https://bugzil.la/1811912))
- [`Element.ariaBrailleLabel`](/de/docs/Web/API/Element/ariaBrailleLabel) und [`Element.ariaBrailleRoleDescription`](/de/docs/Web/API/Element/ariaBrailleRoleDescription) werden jetzt unterstützt, und spiegeln jeweils die globalen ARIA-HTML-Attribute [`aria-braillelabel`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-braillelabel) und [`aria-brailleroledescription`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-brailleroledescription) wider. ([Firefox-Bug 1861201](https://bugzil.la/1861201)).

- Unterstützung hinzugefügt, um Webanwendungen zu erlauben, sich reibungslos zu erholen, wenn ein Canvas vorübergehend seinen 2D-Kontext verliert, was passieren kann, wenn das Canvas hardwarebeschleunigt auf einer GPU läuft und sein Treiber abstürzt ([Firefox-Bug 1887729](https://bugzil.la/1887729)).
  Hier sind einige zusätzliche Details zu den Ereignissen für verlorene und wiederhergestellte Canvas-Kontexte:

  - Anwendungen können auf [`contextlost`](/de/docs/Web/API/HTMLCanvasElement/contextlost_event) und [`contextrestored`](/de/docs/Web/API/HTMLCanvasElement/contextrestored_event) Ereignisse achten, die auf einem [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) ausgelöst werden, wenn der Kontext verloren geht und wiederhergestellt wird, und den Kontext auch mit [`CanvasRenderingContext2D.isContextLost()`](/de/docs/Web/API/CanvasRenderingContext2D/isContextLost) überprüfen.
  - Nach dem Senden von `contextlost` versucht ein Browser standardmäßig, den verlorenen Kontext neu zu starten, aber Code kann dies verhindern, indem das Ereignis abgebrochen wird.
  - Offscreen-Canvases können auf die gleiche Weise überwacht werden, jedoch mit Ereignissen von [`OffScreenCanvas`](/de/docs/Web/API/OffscreenCanvas) [`contextlost`](/de/docs/Web/API/OffscreenCanvas/contextlost_event) und [`contextrestored`](/de/docs/Web/API/OffscreenCanvas/contextrestored_event), zusammen mit [`OffscreenCanvasRenderingContext2D.isContextLost()`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D#context).

- Unterstützung für das [`shadowrootclonable`](/de/docs/Web/HTML/Element/template#shadowrootclonable)-Attribut des `<template>`-Elements hinzugefügt, und für die [`shadowRootClonable`](/de/docs/Web/API/HTMLTemplateElement/shadowRootClonable)-Eigenschaft der `HTMLTemplateElement`-Schnittstelle, die es widerspiegelt.
  Diese setzen die [`clonable`](/de/docs/Web/API/ShadowRoot/clonable)-Eigenschaft eines [`ShadowRoot`](/de/docs/Web/API/ShadowRoot), der deklarativ mit dem `<template>`-Element erstellt wurde.
  ([Firefox-Bug 1880188](https://bugzil.la/1880188)).

- Die [`readText()`](/de/docs/Web/API/Clipboard/readText)-Methode der [`Clipboard`](/de/docs/Web/API/Clipboard)-Schnittstelle wird jetzt unterstützt, um asynchron Text aus der System-Zwischenablage zu lesen.
  Beim Lesen von Zwischenablagedaten, die nicht von derselben Ursprungsseite bereitgestellt werden, erscheint ein Einfügekontextmenü, damit der Benutzer bestätigen kann. ([Firefox-Bug 1877400](https://bugzil.la/1877400)).

#### Medien, WebRTC und Web Audio

- Der [AV1](/de/docs/Web/Media/Guides/Formats/Video_codecs#av1)-Codec wird jetzt für [Encrypted Media Extensions](/de/docs/Web/API/Encrypted_Media_Extensions_API) unterstützt, was höherwertige Wiedergabe von Videostreaming-Anbietern ermöglicht. ([Firefox-Bug 1601817](https://bugzil.la/1601817)).

#### Entfernungen

- Die [`SVGAElement.text`](/de/docs/Web/API/SVGAElement#svgaelement.text)-Eigenschaft wurde entfernt. Die [`textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft (geerbt von `Node`) wird breit unterstützt und sollte stattdessen verwendet werden. ([Firefox-Bug 1880689](https://bugzil.la/1880689)).

### WebAssembly

- Unterstützung für die Verwendung mehrerer unabhängiger linearer Speicher in Wasm-Modulen wurde hinzugefügt.
  Mehrere Speicher ermöglichen effizientere Interoperabilität zwischen Modulen und bessere Polyfills für kommende Wasm-Standards. Sie können beispielsweise verwendet werden, um separate Speicher für interne und freigegebene Daten, flüchtige und persistente Daten, oder Daten, die zwischen Threads geteilt werden müssen, zu erstellen.
  Der Speicher kann in JavaScript erstellt und in das Wasm-Modul importiert oder im Wasm-Modul erstellt und exportiert werden.
  Jeder neue lineare Speicher in einer Wasm-Instanz erhält einen sequentiellen Index, beginnend bei null.
  WebAssembly [Speicheranweisungen](/de/docs/WebAssembly/Reference/Memory) verwenden den Index, um auf den Speicher zuzugreifen, auf dem sie arbeiten, und standardmäßig auf den ersten definierten Speicher, wenn kein Index angegeben ist.
  Für weitere Informationen, siehe [WebAssembly Memory](/de/docs/WebAssembly/Guides/Understanding_the_text_format#webassembly_memory) im _Understanding WebAssembly text format_.
  ([Firefox-Bug 1860816](https://bugzil.la/1860816)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Unterstützung für die ["userAgent"-Fähigkeit](https://w3c.github.io/webdriver/#capabilities) hinzugefügt, die den Standard-User-Agent-Wert des Endpunktsknotens identifiziert ([Firefox-Bug 1885495](https://bugzil.la/1885495)).

#### WebDriver BiDi

- Unterstützung für den [input.setFiles](https://w3c.github.io/webdriver-bidi/#command-input-setFiles)-Befehl hinzugefügt, der es ermöglicht, die Dateien für `<input>`-Elemente mit `type="file"` zu setzen oder zu aktualisieren ([Firefox-Bug 1855040](https://bugzil.la/1855040)).
- Unterstützung für den [storage.deleteCookies](https://w3c.github.io/webdriver-bidi/#command-storage-deleteCookies)-Befehl hinzugefügt, um Cookies zu löschen ([Firefox-Bug 1854581](https://bugzil.la/1854581)).
- Unterstützung für "userContext" als Feld des "partition"-Arguments für Cookie-Befehle hinzugefügt ([Firefox-Bug 1875255](https://bugzil.la/1875255)).
- Ein Problem behoben, bei dem [storage.getCookies](https://w3c.github.io/webdriver-bidi/#command-storage-getCookies) nicht alle erwarteten Cookies für einen gegebenen "sourceOrigin" abrufen würde ([Firefox-Bug 1884647](https://bugzil.la/1884647)).
- Ein Problem behoben, bei dem empfohlene Einstellungen nicht angewendet würden, wenn nur WebDriver BiDi als Remote-Protokoll, was bedeutet, dass CDP deaktiviert ist, aktiviert war ([Firefox-Bug 1882748](https://bugzil.la/1882748)).
- Ein Problem behoben, bei dem das Erstellen und Wechseln zu einem neuen Tab nicht darauf warten würde, dass der `visibilityState` aktualisiert wird ([Firefox-Bug 1877469](https://bugzil.la/1877469)).

## Änderungen für Add-on-Entwickler

- Der Inhalt der {{WebExtAPIRef("proxy.ProxyInfo")}}-Eigenschaft `proxyAuthorization` wird jetzt an den in der Anfrage gesendeten {{httpheader("Proxy-Authorization")}}-Header an HTTP-Proxies (zusätzlich zur bestehenden Unterstützung für HTTPS-Proxies) als Teil einer [CONNECT](/de/docs/Web/HTTP/Reference/Methods/CONNECT)-Anfrage übergeben ([Firefox-Bug 1794464](https://bugzil.la/1794464)).

## Experimentelle Webfunktionen

Diese Funktionen sind in Firefox 125 enthalten, jedoch nur in Entwickler-Versionen oder hinter einer Einstellung. Um diese auszuprobieren, können Sie die zugehörige Einstellung auf der `about:config`-Seite suchen, um zu sehen, ob sie aktiviert oder deaktiviert sind. Um mehr über diese Funktionen zu erfahren, schauen Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features) vorbei.

- **CSS `transition-behavior`:** `layout.css.transition-behavior.enabled`.

  Die {{cssxref("transition-behavior")}}-Eigenschaft ist standardmäßig in der Nightly-Version aktiviert.
  Autoren können diese Eigenschaft verwenden, um zu steuern, ob CSS-Übergänge auf Eigenschaften mit einem [diskreten Animationstyp](/de/docs/Web/CSS/CSS_animated_properties#discrete) angewendet werden ([Firefox-Bug 1882408](https://bugzil.la/1882408), [Firefox-Bug 1805727](https://bugzil.la/1805727)).

- **UA-Stile für `<h1>` verschachtelt in Gliederungselementen:** `layout.css.h1-in-section-ua-styles.enabled`.

  Die `<h1>`-Überschrift verringert jetzt nicht mehr die Schriftgröße bei Verschachtelung innerhalb von [Gliederungselementen](/de/docs/Web/HTML/Content_categories#sectioning_content) `<article>`, `<aside>`, `<nav>` und `<section>`. Die UA-Stile für `<h1>`, die innerhalb von Gliederungselementen verschachtelt sind, sind nicht mehr relevant, da der Umrissalgorithmus [aus der HTML-Spezifikation entfernt wurde](https://github.com/whatwg/html/pull/7829). ([Firefox-Bug 1883896](https://bugzil.la/1883896)).

  > [!NOTE]
  > Die Einstellung für diese Funktion funktioniert umgekehrt: Sie ist in der Nightly-Version auf `false` gesetzt, was das UA-Styling für Überschriften, die in Gliederungselementen verschachtelt sind, entfernt. In allen anderen Kanälen ist sie auf `true` gesetzt, was das bestehende UA-Styling für die verschachtelten Überschriften beibehält.

## Ältere Versionen

{{Firefox_for_developers}}
