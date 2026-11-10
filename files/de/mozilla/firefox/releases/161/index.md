---
title: Firefox 161 – Versionshinweise für Entwickler (Beta)
short-title: Firefox 161 (Beta)
slug: Mozilla/Firefox/Releases/161
l10n:
  sourceCommit: 7ba141d212766d3c840c4176f72d39dce1df122e
---

Dieser Artikel informiert über die Änderungen in Firefox 161, die für Entwickler relevant sind.
Firefox 161 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und erscheint am [24. November 2026](https://whattrainisitnow.com/release/?version=161).

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Arbeit.

<!-- Authors: Please uncomment any headings you are writing notes for -->

## Änderungen für Webentwickler

<!-- ### Developer Tools -->

<!-- ### HTML -->

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### MathML -->

<!-- #### Removals -->

<!-- ### SVG -->

<!-- #### Removals -->

<!-- ### CSS -->

<!-- #### Removals -->

<!-- ### JavaScript -->

<!-- No notable changes. -->

<!-- #### Removals -->

<!-- ### HTTP -->

<!-- #### Removals -->

<!-- ### Security -->

<!-- #### Removals -->

### APIs

- Die Eigenschaften [`anticipatedConcurrentIncomingUnidirectionalStreams`](/de/docs/Web/API/WebTransport/anticipatedConcurrentIncomingUnidirectionalStreams) und [`anticipatedConcurrentIncomingBidirectionalStreams`](/de/docs/Web/API/WebTransport/anticipatedConcurrentIncomingBidirectionalStreams) des `WebTransport`-Interfaces werden jetzt unterstützt. Gleiches gilt für die entsprechenden `options`-Eigenschaften, mit denen sie im Konstruktor [`WebTransport()`](/de/docs/Web/API/WebTransport/WebTransport) festgelegt werden können.
  Diese Eigenschaften geben die maximale Anzahl eingehender unidirektionaler beziehungsweise bidirektionaler Streams an, die der Server nach Erwartung der Anwendung gleichzeitig geöffnet haben wird.
  ([Firefox-Bug 2007825](https://bugzil.la/2007825)).

<!-- #### DOM -->

<!-- #### Media, WebRTC, and Web Audio -->

<!-- #### Removals -->

<!-- ### WebAssembly -->

<!-- #### Removals -->

<!-- ### WebDriver conformance (WebDriver BiDi, Marionette) -->

<!-- #### General -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Änderungen für Add-on-Entwickler

<!-- ### Removals -->

<!-- ### Other -->

## Experimentelle Webfunktionen

Diese Funktionen sind in Firefox 161 enthalten, aber standardmäßig deaktiviert.
Um sie auszuprobieren, suchen Sie auf der Seite `about:config` nach der jeweiligen Einstellung und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).
