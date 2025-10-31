---
title: Firefox 125 Versionshinweise für Entwickler
short-title: Firefox 125
slug: Mozilla/Firefox/Releases/125
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 125, die Entwickler betreffen. Firefox 125 wurde am [16. April 2024](https://whattrainisitnow.com/release/?version=125) veröffentlicht.

## Änderungen für Webentwickler

### HTML

Keine besonderen Änderungen.

### CSS

- Die Eigenschaft {{cssxref("align-content")}} wurde aktualisiert, um mit Layouts, die `display: block;` verwenden, zu arbeiten. Dies bringt alle Layoutpositionen von `flex` und `grid` zu `block` und ermöglicht es Entwicklern, Blockebenen-Elemente auszurichten, ohne ihren Container in einen `flex`- oder `grid`-Container umwandeln zu müssen. ([Firefox-Bug 1882853](https://bugzil.la/1882853)).
- Die CSS-Eigenschaft [`transform-box`](/de/docs/Web/CSS/Reference/Properties/transform-box) unterstützt jetzt die Werte `content-box` und `stroke-box`. Für die Referenzbox verwendet der `content-box`-Wert die [content box](/de/docs/Learn_web_development/Core/Styling_basics/Box_model#parts_of_a_box) und der `stroke-box`-Wert verwendet die Umrandungsbox des SVGs ([Firefox-Bug 1868374](https://bugzil.la/1868374)).
- Der Wert `auto` der Eigenschaft [`content-visibility`](/de/docs/Web/CSS/Reference/Properties/content-visibility) ist nun standardmäßig aktiviert. Dadurch kann der Inhalt das Rendering überspringen, wenn er für den Benutzer [nicht relevant](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#relevant_to_the_user) ist. ([Firefox-Bug 1874874](https://bugzil.la/1874874)).

### JavaScript

- {{jsxref("Intl.Segmenter")}} wird nun unterstützt, was es Entwicklern ermöglicht, eine lokalisierungssensitive Textsegmentierung eines Strings durchzuführen.
  Dies ermöglicht zum Beispiel, einen String in Wörter zu zerlegen, selbst in Sprachen, die keine Leerzeichen verwenden, um sie zu trennen: `Intl.Segmenter("ja-JP", { granularity: "word" })`.
  Sie können Strings auch in Grapheme oder Sätze unterteilen.
  ([Firefox-Bug 1423593](https://bugzil.la/1423593), [Firefox-Bug 1883914](https://bugzil.la/1883914).)

### APIs

- Die [Popover API](/de/docs/Web/API/Popover_API) wird nun vollständig unterstützt, was die Erstellung von obersten "Popover"-UI-Elementen ermöglicht, die für Aktionsmenüs, benutzerdefinierte "Toast"-Benachrichtigungen, Formularelemtvorschläge, Inhaltspicker usw. verwendet werden können.
  Das Popover und sein auslösendes Button/Input können entweder über HTML-Attribute oder JavaScript erstellt und mit CSS gestaltet werden.

  Die folgenden Web-APIs sind implementiert:
  - [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement) Eigenschaften [`popoverTargetElement`](/de/docs/Web/API/HTMLButtonElement/popoverTargetElement) und [`popoverTargetAction`](/de/docs/Web/API/HTMLButtonElement/popoverTargetAction).
  - [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Eigenschaften [`popoverTargetElement`](/de/docs/Web/API/HTMLInputElement/popoverTargetElement) und [`popoverTargetAction`](/de/docs/Web/API/HTMLInputElement/popoverTargetAction).
  - [`HTMLElement`](/de/docs/Web/API/HTMLElement) Eigenschaft [`popover`](/de/docs/Web/API/HTMLElement/popover), Methoden [`hidePopover()`](/de/docs/Web/API/HTMLElement/hidePopover), [`showPopover()`](/de/docs/Web/API/HTMLElement/showPopover), und [`togglePopover()`](/de/docs/Web/API/HTMLElement/togglePopover), und Ereignisse [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event) und [`toggle_event`](/de/docs/Web/API/HTMLElement/toggle_event) (vom Typ [`ToggleEvent`](/de/docs/Web/API/ToggleEvent)).

  Die folgenden CSS-Pseudoklasse und -Element werden jetzt für die Verwendung mit Popovers unterstützt:
  - [`:popover-open`](/de/docs/Web/CSS/:popover-open)
  - [`::backdrop`](/de/docs/Web/CSS/::backdrop) wurde erweitert, um Popovers zu unterstützen

  Die folgenden globalen HTML-Attribute werden unterstützt:
  - [`popovertarget`](/de/docs/Web/HTML/Reference/Elements/button#popovertarget)
  - [`popovertargetaction`](/de/docs/Web/HTML/Reference/Elements/button#popovertargetaction)

  ([Firefox-Bug 1823757](https://bugzil.la/1823757), [Firefox-Bug 1866993](https://bugzil.la/1866993)).

- Die [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) Eigenschaften [`state`](/de/docs/Web/API/RTCIceTransport/state) und [`gatheringState`](/de/docs/Web/API/RTCIceTransport/gatheringState), sowie die zugehörigen Ereignisse [`statechange`](/de/docs/Web/API/RTCIceTransport/statechange_event) und [`gatheringstatechange`](/de/docs/Web/API/RTCIceTransport/gatheringstatechange_event), werden jetzt unterstützt, zusammen mit der Eigenschaft [`RTCDtlsTransport.iceTransport`](/de/docs/Web/API/RTCDtlsTransport/iceTransport) (die den zugrundeliegenden `RTCIceTransport` für ein [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) zurückgibt).
  Diese ermöglichen eine viel feiner abgestufte Überwachung als durch die Eigenschaften [`iceGatheringState`](/de/docs/Web/API/RTCPeerConnection/iceGatheringState) und [`connectionState`](/de/docs/Web/API/RTCPeerConnection/connectionState) von [`RTCPeerConnection`].
  ([Firefox-Bug 1811912](https://bugzil.la/1811912))
- [`Element.ariaBrailleLabel`](/de/docs/Web/API/Element/ariaBrailleLabel) und [`Element.ariaBrailleRoleDescription`](/de/docs/Web/API/Element/ariaBrailleRoleDescription) werden jetzt unterstützt, und spiegeln die globalen ARIA-HTML-Attribute [`aria-braillelabel`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-braillelabel) und [`aria-brailleroledescription`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-brailleroledescription) wider. ([Firefox-Bug 1861201](https://bugzil.la/1861201)).

- Unterstützung wurde hinzugefügt, um es Webanwendungen zu ermöglichen, sich nahtlos zu erholen, wenn ein Canvas vorübergehend seinen 2D-Kontext verliert, was passieren kann, wenn das Canvas hardwarebeschleunigt auf einer GPU läuft und der Treiber abstürzt ([Firefox-Bug 1887729](https://bugzil.la/1887729)).
  Hier sind einige zusätzliche Details zu den Ereignissen für verlorene und wiederhergestellte Canvas-Kontexte:
  - Anwendungen können auf die Ereignisse [`contextlost`](/de/docs/Web/API/HTMLCanvasElement/contextlost_event) und [`contextrestored`](/de/docs/Web/API/HTMLCanvasElement/contextrestored_event) reagieren, die auf einem [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) ausgelöst werden, wenn der Kontext verloren geht und wiederhergestellt wird, und können auch den Kontext mit [`CanvasRenderingContext2D.isContextLost()`](/de/docs/Web/API/CanvasRenderingContext2D/isContextLost) überprüfen.
  - Nachdem das Ereignis `contextlost` ausgelöst wurde, wird ein Browser versuchen, den verlorenen Kontext standardmäßig neu zu starten, aber Code kann dies verhindern, indem das Ereignis abgebrochen wird.
  - Offscreen-Canvas-Kanäle können auf die gleiche Weise überwacht werden, jedoch unter Verwendung der Ereignisse [`contextlost`](/de/docs/Web/API/OffscreenCanvas/contextlost_event) und [`contextrestored`](/de/docs/Web/API/OffscreenCanvas/contextrestored_event) von [`OffScreenCanvas`](/de/docs/Web/API/OffscreenCanvas), zusammen mit [`OffscreenCanvasRenderingContext2D.isContextLost()`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D#context).

- Unterstützung wurde für das [`shadowrootclonable`](/de/docs/Web/HTML/Reference/Elements/template#shadowrootclonable) Attribut des `<template>` Elements hinzugefügt, und die [`shadowRootClonable`](/de/docs/Web/API/HTMLTemplateElement/shadowRootClonable) Eigenschaft der `HTMLTemplateElement` Schnittstelle, die dieses wiedergibt.
  Diese setzen die [`clonable`](/de/docs/Web/API/ShadowRoot/clonable) Eigenschaft eines [`ShadowRoot`](/de/docs/Web/API/ShadowRoot), das deklarativ mit dem [`<template>`](/de/docs/Web/HTML/Reference/Elements/template) Element erstellt wurde.
  ([Firefox-Bug 1880188](https://bugzil.la/1880188)).

- Die [`readText()`](/de/docs/Web/API/Clipboard/readText) Methode der [`Clipboard`](/de/docs/Web/API/Clipboard) Schnittstelle wird jetzt für das asynchrone Lesen von Text aus der Systemzwischenablage unterstützt.
  Beim Lesen von Zwischenablagedaten, die nicht von der gleichen Ursprungseite bereitgestellt werden, erscheint ein Kontextmenü zum Einfügen, in dem der Benutzer dies bestätigen muss. ([Firefox-Bug 1877400](https://bugzil.la/1877400)).

#### Medien, WebRTC und Web Audio

- Der [AV1](/de/docs/Web/Media/Guides/Formats/Video_codecs#av1) Codec wird jetzt für [Encrypted Media Extensions](/de/docs/Web/API/Encrypted_Media_Extensions_API) unterstützt, was die Wiedergabe in höherer Qualität von Video-Streaming-Anbietern ermöglicht. ([Firefox-Bug 1601817](https://bugzil.la/1601817)).

#### Entfernungen

- Die [`SVGAElement.text`](/de/docs/Web/API/SVGAElement/text) Eigenschaft wurde entfernt. Die [`textContent`](/de/docs/Web/API/Node/textContent) Eigenschaft (vom `Node` geerbt) wird weitläufig unterstützt und sollte stattdessen verwendet werden. ([Firefox-Bug 1880689](https://bugzil.la/1880689)).

### WebAssembly

- Unterstützung wurde hinzugefügt, um es Wasm-Modulen zu ermöglichen, mehrere unabhängige lineare Speicher zu verwenden.
  Mehrere Speicher ermöglichen eine effizientere Interoperabilität zwischen Modulen und bessere Polyfills für kommende Wasm-Standards. Sie können beispielsweise verwendet werden, um separaten Speicher für interne und geteilte Daten, temporäre und persistierte Daten oder Daten, die zwischen Threads geteilt werden müssen, zu erstellen.
  Der Speicher kann in JavaScript erstellt und in das Wasm-Modul importiert oder im Wasm-Modul erstellt und exportiert werden.
  Jeder neue lineare Speicher in einer Wasm-Instanz erhält einen sequentiellen Index, beginnend bei null.
  WebAssembly [Speicherinstruktionen](/de/docs/WebAssembly/Reference/Memory) nutzen den Index, um auf den Speicher zu verweisen, auf dem sie arbeiten, und standardmäßig auf den ersten definierten Speicher, falls kein Index angegeben ist.
  Für weitere Informationen siehe [WebAssembly Speicher](/de/docs/WebAssembly/Guides/Understanding_the_text_format#webassembly_memory) in _Understanding WebAssembly text format_.
  ([Firefox-Bug 1860816](https://bugzil.la/1860816)).

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Unterstützung wurde für die ["userAgent"-Fähigkeit](https://w3c.github.io/webdriver/#capabilities) hinzugefügt, die den Standardwert des User-Agent des Endpunktknotens identifiziert ([Firefox-Bug 1885495](https://bugzil.la/1885495)).

#### WebDriver BiDi

- Unterstützung wurde für den [input.setFiles](https://w3c.github.io/webdriver-bidi/#command-input-setFiles) Befehl hinzugefügt, der es ermöglicht, Dateien für `<input>` Elemente mit `type="file"` zu setzen oder zu aktualisieren ([Firefox-Bug 1855040](https://bugzil.la/1855040)).
- Unterstützung wurde für den [storage.deleteCookies](https://w3c.github.io/webdriver-bidi/#command-storage-deleteCookies) Befehl hinzugefügt, um Cookies zu löschen ([Firefox-Bug 1854581](https://bugzil.la/1854581)).
- Unterstützung wurde für "userContext" als Feld des "partition" Arguments für Cookie-Befehle hinzugefügt ([Firefox-Bug 1875255](https://bugzil.la/1875255)).
- Ein Problem wurde behoben, bei dem [storage.getCookies](https://w3c.github.io/webdriver-bidi/#command-storage-getCookies) nicht alle erwarteten Cookies für einen gegebenen "sourceOrigin" abrufen würde ([Firefox-Bug 1884647](https://bugzil.la/1884647)).
- Ein Problem wurde behoben, bei dem empfohlene Voreinstellungen nicht angewendet würden, wenn nur WebDriver BiDi als Remote-Protokoll aktiviert war, was bedeutet, dass CDP deaktiviert ist ([Firefox-Bug 1882748](https://bugzil.la/1882748)).
- Ein Problem wurde behoben, bei dem das Erstellen und Wechseln zu einem neuen Tab nicht auf die Aktualisierung des `visibilityState` wartete ([Firefox-Bug 1877469](https://bugzil.la/1877469)).

## Änderungen für Add-on-Entwickler

- Der Inhalt der {{WebExtAPIRef("proxy.ProxyInfo")}} Eigenschaft `proxyAuthorization` wird nun auch an den {{httpheader("Proxy-Authorization")}} Anfrage-Header gesendet, der an HTTP-Proxys (zusätzlich zur bestehenden Unterstützung für HTTPS-Proxys) als Teil einer [CONNECT](/de/docs/Web/HTTP/Reference/Methods/CONNECT) Anfrage gesendet wird ([Firefox-Bug 1794464](https://bugzil.la/1794464)).

## Experimentelle Web-Features

Diese Features sind in Firefox 125 enthalten, aber nur in Entwickler-Versionen oder hinter einer Präferenz. Um diese auszuprobieren, können Sie auf der `about:config` Seite nach der entsprechenden Präferenz suchen, um zu sehen, ob sie aktiviert oder deaktiviert sind. Um mehr über diese Features zu erfahren, sehen Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features) nach.

- **CSS `transition-behavior`:** `layout.css.transition-behavior.enabled`.

  Die {{cssxref("transition-behavior")}} Eigenschaft ist standardmäßig in der Nightly-Version aktiviert.
  Autoren können diese Eigenschaft verwenden, um zu steuern, ob CSS-Übergänge auf Eigenschaften mit einem [diskreten Animationstyp](/de/docs/Web/CSS/CSS_animated_properties#discrete) angewendet werden sollen ([Firefox-Bug 1882408](https://bugzil.la/1882408), [Firefox-Bug 1805727](https://bugzil.la/1805727)).

- **UA Styles für `<h1>` verschachtelt in Gliederungselementen:** `layout.css.h1-in-section-ua-styles.enabled`.

  Die `<h1>` Überschrift nimmt jetzt nicht mehr in der Schriftgröße ab, wenn sie innerhalb von [Gliederungselementen](/de/docs/Web/HTML/Guides/Content_categories#sectioning_content) `<article>`, `<aside>`, `<nav>`, und `<section>` verschachtelt ist. Die UA-Stile für `<h1>`, die innerhalb von Gliederungselementen verschachtelt sind, sind nicht mehr relevant, da der Outline-Algorithmus [aus der HTML-Spezifikation entfernt wurde](https://github.com/whatwg/html/pull/7829). ([Firefox-Bug 1883896](https://bugzil.la/1883896)).

  > [!NOTE]
  > Die Präferenz für dieses Feature funktioniert umgekehrt: Sie ist auf `false` im Nightly-Build gesetzt, was das Entfernen der UA-Stiling für Überschriften in Gliederungselementen bewirkt. Sie ist in allen anderen Kanälen auf `true` gesetzt, was das bestehende UA-Stiling für die verschachtelten Überschriften beibehält.
