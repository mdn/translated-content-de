---
title: Firefox 155 Versionshinweise für Entwickler (Beta)
short-title: Firefox 155 (Beta)
slug: Mozilla/Firefox/Releases/155
l10n:
  sourceCommit: 69010c9e951c5f70694282f5f4980db31d4bcb08
---

Dieser Artikel enthält Informationen über die Änderungen in Firefox 155, die Entwickler betreffen.
Firefox 155 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [1. September 2026](https://whattrainisitnow.com/release/?version=155) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Arbeit.

<!-- Autoren: Bitte kommentieren Sie alle Überschriften ein, für die Sie Anmerkungen schreiben -->

## Änderungen für Web-Entwickler

<!-- ### Entwicklerwerkzeuge -->

<!-- ### HTML -->

<!-- Keine nennenswerten Änderungen. -->

<!-- #### Entfernungen -->

<!-- ### MathML -->

<!-- #### Entfernungen -->

<!-- ### SVG -->

<!-- #### Entfernungen -->

<!-- ### CSS -->

<!-- #### Entfernungen -->

<!-- ### JavaScript -->

<!-- Keine nennenswerten Änderungen. -->

<!-- #### Entfernungen -->

<!-- ### HTTP -->

<!-- #### Entfernungen -->

<!-- ### Sicherheit -->

<!-- #### Entfernungen -->

### APIs

#### DOM

- Das [`SVGAElement`](/de/docs/Web/API/SVGAElement) Interface implementiert jetzt das [`HyperlinkElementUtils`](https://html.spec.whatwg.org/multipage/links.html#hyperlinkelementutils) Mixin. Dadurch zeigen SVG {{SVGElement("a")}} Elemente dieselben URL-Komponenteneigenschaften wie HTML {{HTMLElement("a")}} Elemente: [`protocol`](/de/docs/Web/API/SVGAElement/protocol), [`username`](/de/docs/Web/API/SVGAElement/username), [`password`](/de/docs/Web/API/SVGAElement/password), [`host`](/de/docs/Web/API/SVGAElement/host), [`hostname`](/de/docs/Web/API/SVGAElement/hostname), [`port`](/de/docs/Web/API/SVGAElement/port), [`pathname`](/de/docs/Web/API/SVGAElement/pathname), [`search`](/de/docs/Web/API/SVGAElement/search), und [`hash`](/de/docs/Web/API/SVGAElement/hash). Die schreibgeschützte [`origin`](/de/docs/Web/API/SVGAElement/origin) Eigenschaft wird ebenfalls angezeigt.
  ([Firefox Bug 2058578](https://bugzil.la/2058578)).
- Die Interfaces [`SVGNumberList`](/de/docs/Web/API/SVGNumberList), [`SVGPointList`](/de/docs/Web/API/SVGPointList), [`SVGStringList`](/de/docs/Web/API/SVGStringList), und [`SVGTransformList`](/de/docs/Web/API/SVGTransformList) unterstützen jetzt indizierte Setter. Das bedeutet, Sie können ein Element in der Liste mit Klammernotation ersetzen, wie z.B. `transformList[0] = newTransform`, anstatt [`replaceItem()`](/de/docs/Web/API/SVGTransformList/replaceItem) aufzurufen.
  Das Interface [`SVGLengthList`](/de/docs/Web/API/SVGLengthList) unterstützt bereits indizierte Setter.
  ([Firefox Bug 2059426](https://bugzil.la/2059426)).

#### Medien, WebRTC und Web Audio

- Das [`error` event](/de/docs/Web/API/RTCDataChannel/error_event), das bei einem [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) Objekt ausgelöst wird, kann jetzt [`sctp-failure`](/de/docs/Web/API/RTCError/errorDetail#sctp-failure) in seiner [`error.errorDetail`](/de/docs/Web/API/RTCError/errorDetail) Eigenschaft melden, wenn der Transport aufgrund eines Fehlers geschlossen wird.
  Zusätzlich sind [`RTCError`](/de/docs/Web/API/RTCError) und [`RTCErrorEvent`](/de/docs/Web/API/RTCErrorEvent) jetzt in dedizierten Workern verfügbar (diese Bereitstellung ist noch nicht in der Spezifikation enthalten).
  ([Firefox Bug 1814460](https://bugzil.la/1814460)).

<!-- #### Entfernungen -->

<!-- ### WebAssembly -->

<!-- #### Entfernungen -->

<!-- ### WebDriver-Konformität (WebDriver BiDi, Marionette) -->

<!-- #### Allgemein -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Änderungen für Add-on-Entwickler

<!-- ### Entfernungen -->

<!-- ### Sonstiges -->

## Experimentelle Web-Features

Diese Funktionen sind in Firefox 155 enthalten, aber standardmäßig deaktiviert.
Um sie auszuprobieren, suchen Sie auf der `about:config` Seite nach der entsprechenden Präferenz und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).
