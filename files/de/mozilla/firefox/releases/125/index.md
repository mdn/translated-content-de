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

Keine nennenswerten Änderungen.

### CSS

- Die {{cssxref("align-content")}}-Eigenschaft wurde aktualisiert, um mit `display: block;`-Layouts zu funktionieren. Dies bringt alle Layoutpositionen von `flex` und `grid` zu `block` und ermöglicht es Entwicklern, Block-Elemente auszurichten, ohne ihren Container in einen `flex`- oder `grid`-Container umzuwandeln. ([Firefox Bug 1882853](https://bugzil.la/1882853)).
- Die CSS-Eigenschaft [`transform-box`](/de/docs/Web/CSS/transform-box) unterstützt nun die Werte `content-box` und `stroke-box`. Bei der Referenzbox verwendet der `content-box`-Wert den [Inhaltsbereich](/de/docs/Learn/CSS/Building_blocks/The_box_model#parts_of_a_box) und der `stroke-box`-Wert verwendet die Strichbegrenzungsbox, die die Form eines SVG enthält ([Firefox Bug 1868374](https://bugzil.la/1868374)).
- Der CSS-Eigenschaftswert [`content-visibility`](/de/docs/Web/CSS/content-visibility) `auto` ist jetzt standardmäßig aktiviert. Dies ermöglicht es, das Rendern von Inhalten zu überspringen, wenn sie nicht [für den Benutzer relevant](/de/docs/Web/CSS/CSS_containment#relevant_to_the_user) sind. ([Firefox Bug 1874874](https://bugzil.la/1874874)).

### JavaScript

- {{jsxref("Intl.Segmenter")}} wird jetzt unterstützt, sodass Entwickler eine länderspezifische Textsegmentierung eines Strings durchführen können. Dies ermöglicht es zum Beispiel, einen String in Wörter zu unterteilen in Sprachen, die keine Leerzeichen verwenden: `Intl.Segmenter("ja-JP", { granularity: "word" })`. Sie können auch Strings in Grapheme oder Sätze unterteilen. ([Firefox Bug 1423593](https://bugzil.la/1423593), [Firefox Bug 1883914](https://bugzil.la/1883914)).

### APIs

- Das [Popover API](/de/docs/Web/API/Popover_API) wird jetzt vollständig unterstützt. Es ermöglicht die Erstellung von obersten "Popover"-UI-Elementen, die möglicherweise für Aktionsmenüs, benutzerdefinierte "Toast"-Benachrichtigungen, Vorschläge für Formularelemente, Inhaltsauswahlen usw. verwendet werden. Das Popover und sein auslösendes Button/Input können entweder mit HTML-Attributen oder JavaScript erstellt und mit CSS gestaltet werden.

  Die folgenden Web-APIs sind implementiert:

  - [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement)-Eigenschaften [`popoverTargetElement`](/de/docs/Web/API/HTMLButtonElement/popoverTargetElement) und [`popoverTargetAction`](/de/docs/Web/API/HTMLButtonElement/popoverTargetAction).
  - [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Eigenschaften [`popoverTargetElement`](/de/docs/Web/API/HTMLInputElement/popoverTargetElement) und [`popoverTargetAction`](/de/docs/Web/API/HTMLInputElement/popoverTargetAction).
  - [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Eigenschaft [`popover`](/de/docs/Web/API/HTMLElement/popover), Methoden [`hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover), [`showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) und [`togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover) sowie Ereignisse [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) und [`toggle_event`](/de/docs/Web/API/HTMLElement/toggle_event) (vom Typ [`ToggleEvent`](/de/docs/Web/API/ToggleEvent)).

  Die folgende CSS-Pseudoklasse und das Element werden jetzt zur Verwendung mit Popovers unterstützt:

  - [`:popover-open`](/de/docs/Web/CSS/:popover-open)
  - [`::backdrop`](/de/docs/Web/CSS/::backdrop) wurde erweitert, um Popovers zu unterstützen

  Die folgenden globalen HTML-Attribute werden unterstützt:

  - [`popovertarget`](/de/docs/Web/HTML/Element/button#popovertarget)
  - [`popovertargetaction`](/de/docs/Web/HTML/Element/button#popovertargetaction)

  ([Firefox Bug 1823757](https://bugzil.la/1823757), [Firefox Bug 1866993](https://bugzil.la/1866993)).

- Die [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport)-Eigenschaften [`state`](/de/docs/Web/API/RTCIceTransport/state) und [`gatheringState`](/de/docs/Web/API/RTCIceTransport/gatheringState) und ihre zugehörigen Ereignisse [`statechange`](/de/docs/Web/API/RTCIceTransport/statechange_event) und [`gatheringstatechange`](/de/docs/Web/API/RTCIceTransport/gatheringstatechange_event) werden jetzt unterstützt, zusammen mit der [`RTCDtlsTransport.iceTransport`](/de/docs/Web/API/RTCDtlsTransport/iceTransport)-Eigenschaft (die den zugrunde liegenden `RTCIceTransport` für ein [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) zurückgibt). Diese ermöglichen eine viel feinere Überwachung als die von den [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Eigenschaften [`iceGatheringState`](/de/docs/Web/API/RTCPeerConnection/iceGatheringState) und [`connectionState`](/de/docs/Web/API/RTCPeerConnection/connectionState) bereitgestellte. ([Firefox Bug 1811912](https://bugzil.la/1811912))
- [`Element.ariaBrailleLabel`](/de/docs/Web/API/Element/ariaBrailleLabel) und [`Element.ariaBrailleRoleDescription`](/de/docs/Web/API/Element/ariaBrailleRoleDescription) werden jetzt unterstützt und spiegeln die globalen ARIA-HTML-Attribute [`aria-braillelabel`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-braillelabel) und [`aria-brailleroledescription`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-brailleroledescription) wider. ([Firefox Bug 1861201](https://bugzil.la/1861201)).

- Unterstützung hinzugefügt, damit Webanwendungen sich nahtlos erholen können, wenn ein Canvas vorübergehend seinen 2D-Kontext verliert, was passieren kann, wenn das Canvas hardwarebeschleunigt auf einer GPU läuft und deren Treiber abstürzt ([Firefox Bug 1887729](https://bugzil.la/1887729)).
  Hier sind einige zusätzliche Details zu den Ereignissen für verlorene und wiederhergestellte Canvas-Kontexte:

  - Anwendungen können auf [`contextlost`](/de/docs/Web/API/HTMLCanvasElement/contextlost_event) und [`contextrestored`](/de/docs/Web/API/HTMLCanvasElement/contextrestored_event)-Ereignisse achten, die auf einem [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) ausgelöst werden, wenn der Kontext verloren geht und wiederhergestellt wird, und können den Kontext auch mit [`CanvasRenderingContext2D.isContextLost()`](/de/docs/Web/API/CanvasRenderingContext2D/isContextLost) überprüfen.
  - Nachdem `contextlost` ausgelöst wurde, versucht ein Browser standardmäßig, den verlorenen Kontext neu zu starten, aber der Code kann dies verhindern, indem er das Ereignis abbricht.
  - Offscreen-Canvases können auf die gleiche Weise überwacht werden, jedoch unter Verwendung von [`OffScreenCanvas`](/de/docs/Web/API/OffscreenCanvas)-Ereignissen [`contextlost`](/de/docs/Web/API/OffscreenCanvas/contextlost_event) und [`contextrestored`](/de/docs/Web/API/OffscreenCanvas/contextrestored_event) sowie [`OffscreenCanvasRenderingContext2D.isContextLost()`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D#context).

- Unterstützung hinzugefügt für das [`shadowrootclonable`](/de/docs/Web/HTML/Element/template#shadowrootclonable)-Attribut des `<template>`-Elements und die [`shadowRootClonable`](/de/docs/Web/API/HTMLTemplateElement/shadowRootClonable)-Eigenschaft der `HTMLTemplateElement`-Schnittstelle, die es widerspiegelt.
  Diese setzen die [`clonable`](/de/docs/Web/API/ShadowRoot/clonable)-Eigenschaft eines [`ShadowRoot`](/de/docs/Web/API/ShadowRoot), das deklarativ mit dem [`<template>`](/de/docs/Web/HTML/Element/template)-Element erstellt wurde.
  ([Firefox Bug 1880188](https://bugzil.la/1880188)).

- Die [`readText()`](/de/docs/Web/API/Clipboard/readText)-Methode der [`Clipboard`](/de/docs/Web/API/Clipboard)-Schnittstelle wird jetzt für das asynchrone Lesen von Text aus der System-Zwischenablage unterstützt.
  Wenn Daten aus der Zwischenablage gelesen werden, die nicht von der seitenursprünglichen Seite bereitgestellt werden, wird ein Einfügen-Kontextmenü angezeigt, das der Benutzer bestätigen muss. ([Firefox Bug 1877400](https://bugzil.la/1877400)).

#### Medien, WebRTC und Web Audio

- Der [AV1](/de/docs/Web/Media/Formats/Video_codecs#av1)-Codec wird jetzt für [Encrypted Media Extensions](/de/docs/Web/API/Encrypted_Media_Extensions_API) unterstützt, was eine qualitativ hochwertigere Wiedergabe von Videostreaming-Anbietern ermöglicht. ([Firefox Bug 1601817](https://bugzil.la/1601817)).

#### Entfernungen

- Die [`SVGAElement.text`](/de/docs/Web/API/SVGAElement#svgaelement.text)-Eigenschaft wurde entfernt. Die [`textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft (geerbt von `Node`) wird breit unterstützt und sollte stattdessen verwendet werden. ([Firefox Bug 1880689](https://bugzil.la/1880689)).

### WebAssembly

- Unterstützung wurde hinzugefügt, damit Wasm-Module mehrere unabhängige lineare Speicher verwenden können.
  Mehrere Speicher ermöglichen eine effizientere Interoperabilität zwischen Modulen und bessere Polyfills für kommende Wasm-Standards. Sie können zum Beispiel verwendet werden, um separaten Speicher für interne und gemeinsam genutzte Daten, flüchtige und persistierte Daten oder Daten zu erstellen, die zwischen Threads geteilt werden müssen. Der Speicher kann in JavaScript erstellt und in das Wasm-Modul importiert oder im Wasm-Modul erstellt und exportiert werden.
  Jedes neue lineare Speicher in einer Wasm-Instanz erhält einen sequenziellen Index, beginnend bei null.
  WebAssembly [Erinnerungsanweisungen](/de/docs/WebAssembly/Reference/Memory) verwenden den Index, um auf den Speicher zu verweisen, auf dem sie operieren, wobei standardmäßig auf den ersten definierten Speicher verwiesen wird, wenn kein Index angegeben ist.
  Weitere Informationen finden Sie unter [WebAssembly-Speicher](/de/docs/WebAssembly/Understanding_the_text_format#webassembly_memory) im Abschnitt _Verständnis des WebAssembly-Textformats_.
  ([Firefox Bug 1860816](https://bugzil.la/1860816)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Unterstützung für die ["userAgent"-Fähigkeit](https://w3c.github.io/webdriver/#capabilities) hinzugefügt, die den Standard-Wert des User-Agent des Endpunktsknotens identifiziert ([Firefox Bug 1885495](https://bugzil.la/1885495)).

#### WebDriver BiDi

- Unterstützung für den [input.setFiles](https://w3c.github.io/webdriver-bidi/#command-input-setFiles)-Befehl hinzugefügt, der das Festlegen oder Aktualisieren der Dateien für `<input>`-Elemente mit `type="file"` ermöglicht ([Firefox Bug 1855040](https://bugzil.la/1855040)).
- Unterstützung für den [storage.deleteCookies](https://w3c.github.io/webdriver-bidi/#command-storage-deleteCookies)-Befehl hinzugefügt, um Cookies zu löschen ([Firefox Bug 1854581](https://bugzil.la/1854581)).
- Unterstützung hinzugefügt für "userContext" als Feld des "partition"-Arguments für Cookie-Befehle ([Firefox Bug 1875255](https://bugzil.la/1875255)).
- Ein Problem behoben, bei dem [storage.getCookies](https://w3c.github.io/webdriver-bidi/#command-storage-getCookies) nicht alle erwarteten Cookies für eine bestimmte "sourceOrigin" abrufen würde ([Firefox Bug 1884647](https://bugzil.la/1884647)).
- Ein Problem behoben, bei dem empfohlene Einstellungen nicht angewendet würden, wenn nur WebDriver BiDi als Remote-Protokoll, was bedeutet, dass CDP deaktiviert ist, aktiviert war ([Firefox Bug 1882748](https://bugzil.la/1882748)).
- Ein Problem behoben, bei dem das Erstellen und Wechseln zu einem neuen Tab nicht auf die Aktualisierung des `visibilityState` warten würde ([Firefox Bug 1877469](https://bugzil.la/1877469)).

## Änderungen für Add-on-Entwickler

- Der Inhalt der {{WebExtAPIRef("proxy.ProxyInfo")}}-Eigenschaft `proxyAuthorization` wird jetzt an den {{httpheader("Proxy-Authorization")}}-Anforderungsheader gesendet, der an HTTP-Proxys gesendet wird (zusätzlich zur bestehenden Unterstützung für HTTPS-Proxys) als Teil einer [CONNECT](/de/docs/Web/HTTP/Methods/CONNECT)-Anfrage ([Firefox Bug 1794464](https://bugzil.la/1794464)).

## Experimentelle Web-Funktionen

Diese Funktionen werden in Firefox 125 ausgeliefert, jedoch nur in Entwicklerversionen oder hinter einer Präferenz. Um diese auszuprobieren, können Sie auf der `about:config`-Seite nach der zugehörigen Präferenz suchen, um zu sehen, ob sie aktiviert oder deaktiviert sind. Um mehr über diese Funktionen zu erfahren, lesen Sie die Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).

- **CSS `transition-behavior`:** `layout.css.transition-behavior.enabled`.

  Die {{cssxref("transition-behavior")}}-Eigenschaft ist standardmäßig in der Nightly-Version aktiviert.
  Autoren können diese Eigenschaft verwenden, um zu steuern, ob CSS-Übergänge auf Eigenschaften mit einem [diskreten Animationstyp](/de/docs/Web/CSS/CSS_animated_properties#discrete) angewendet werden ([Firefox Bug 1882408](https://bugzil.la/1882408), [Firefox Bug 1805727](https://bugzil.la/1805727)).

- **UA-Stile für `<h1>` innerhalb von gliedernden Elementen:** `layout.css.h1-in-section-ua-styles.enabled`.

  Die `<h1>`-Überschrift verringert jetzt nicht mehr die Schriftgröße, wenn sie innerhalb von [gliedernden Elementen](/de/docs/Web/HTML/Content_categories#sectioning_content) `<article>`, `<aside>`, `<nav>` und `<section>` verschachtelt ist. Die UA-Stile für `<h1>`, die innerhalb von gliedernden Elementen verschachtelt sind, sind nicht mehr relevant, da der Aufzählungsalgorithmus [aus der HTML-Spezifikation entfernt wurde](https://github.com/whatwg/html/pull/7829). ([Firefox Bug 1883896](https://bugzil.la/1883896)).

  > [!NOTE]
  > Die Präferenz für diese Funktion funktioniert umgekehrt: Sie ist im Nightly-Build auf `false` gesetzt, wodurch das UA-Styling für Überschriften entfernt wird, die in gliedernden Elementen verschachtelt sind. Sie ist in allen anderen Kanälen auf `true` gesetzt, was das vorhandene UA-Styling für die verschachtelten Überschriften beibehält.

## Ältere Versionen

{{Firefox_for_developers}}
