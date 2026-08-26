---
title: Release Notes für Entwickler von Firefox 155 (Beta)
short-title: Firefox 155 (Beta)
slug: Mozilla/Firefox/Releases/155
l10n:
  sourceCommit: 41ace2122a86ea89fee604ec0970c2328f8077f6
---

Dieser Artikel bietet Informationen zu den Änderungen in Firefox 155, die Entwickler betreffen.
Firefox 155 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [1. September 2026](https://whattrainisitnow.com/release/?version=155) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Bearbeitung.

<!-- Autoren: Bitte entfernen Sie die Kommentare bei jedem Abschnitt, für den Sie Notizen schreiben -->

## Änderungen für Webentwickler

<!-- ### Entwicklerwerkzeuge -->

<!-- ### HTML -->

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernungen -->

<!-- ### MathML -->

<!-- #### Entfernungen -->

<!-- ### SVG -->

<!-- #### Entfernungen -->

<!-- ### CSS -->

<!-- #### Entfernungen -->

<!-- ### JavaScript -->

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernungen -->

<!-- ### HTTP -->

<!-- #### Entfernungen -->

<!-- ### Sicherheit -->

<!-- #### Entfernungen -->

### APIs

#### DOM

- Das [`SVGAElement`](/de/docs/Web/API/SVGAElement)-Interface implementiert jetzt das [`HyperlinkElementUtils`](https://html.spec.whatwg.org/multipage/links.html#hyperlinkelementutils)-Mixin. Dadurch stellen SVG-{{SVGElement("a")}}-Elemente die gleichen URL-Komponenten-Eigenschaften bereit wie HTML-{{HTMLElement("a")}}-Elemente: [`protocol`](/de/docs/Web/API/SVGAElement/protocol), [`username`](/de/docs/Web/API/SVGAElement/username), [`password`](/de/docs/Web/API/SVGAElement/password), [`host`](/de/docs/Web/API/SVGAElement/host), [`hostname`](/de/docs/Web/API/SVGAElement/hostname), [`port`](/de/docs/Web/API/SVGAElement/port), [`pathname`](/de/docs/Web/API/SVGAElement/pathname), [`search`](/de/docs/Web/API/SVGAElement/search) und [`hash`](/de/docs/Web/API/SVGAElement/hash). Die schreibgeschützte [`origin`](/de/docs/Web/API/SVGAElement/origin)-Eigenschaft wird ebenfalls bereitgestellt.
  ([Firefox-Bug 2058578](https://bugzil.la/2058578)).
- Die [`SVGNumberList`](/de/docs/Web/API/SVGNumberList), [`SVGPointList`](/de/docs/Web/API/SVGPointList), [`SVGStringList`](/de/docs/Web/API/SVGStringList) und [`SVGTransformList`](/de/docs/Web/API/SVGTransformList)-Schnittstellen unterstützen jetzt indizierte Setzer. Das bedeutet, dass Sie ein Element in der Liste mit der Klammernotation ersetzen können, wie z. B. `transformList[0] = newTransform`, anstatt [`replaceItem()`](/de/docs/Web/API/SVGTransformList/replaceItem) aufzurufen.
  Die [`SVGLengthList`](/de/docs/Web/API/SVGLengthList)-Schnittstelle unterstützt bereits indizierte Setzer.
  ([Firefox-Bug 2059426](https://bugzil.la/2059426)).

#### Medien, WebRTC und Web Audio

- Das [`error`-Ereignis](/de/docs/Web/API/RTCDataChannel/error_event), das auf einem [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Objekt ausgelöst wird, kann jetzt [`sctp-failure`](/de/docs/Web/API/RTCError/errorDetail#sctp-failure) in seiner [`error.errorDetail`](/de/docs/Web/API/RTCError/errorDetail)-Eigenschaft melden, wenn der Transport aufgrund eines Fehlers geschlossen wird.
  Außerdem sind [`RTCError`](/de/docs/Web/API/RTCError) und [`RTCErrorEvent`](/de/docs/Web/API/RTCErrorEvent) jetzt in dedizierten Arbeitern verfügbar (diese Bereitstellung ist noch nicht in der Spezifikation enthalten).
  ([Firefox-Bug 1814460](https://bugzil.la/1814460)).

<!-- #### Entfernungen -->

<!-- ### WebAssembly -->

<!-- #### Entfernungen -->

### WebDriver-Konformität (WebDriver BiDi, Marionette)

#### Allgemein

- Das Herunterladen-Panel wurde deaktiviert, um zu verhindern, dass das aktuelle Dokument den Fokus verliert, wenn ein Download beginnt. ([Firefox-Bug 2035439](https://bugzil.la/2035439)).
- Die Actions-API wurde so korrigiert, dass das `dblclick`-Ereignis ausgelöst wird, wenn ein Doppelklick mit gedrückter `Ctrl`-Taste auf nicht macOS-Plattformen durchgeführt wird. ([Firefox-Bug 2058556](https://bugzil.la/2058556)).

#### WebDriver BiDi

- Das Mozilla-spezifische `moz:debugging`-Modul wurde aktualisiert, sodass es nicht mehr auf dieselbe verschachtelte Ereignisschleifen-API wie DevTools angewiesen ist, um Konflikte zu vermeiden, wenn WebDriver BiDi und DevTools parallel verwendet werden. ([Firefox-Bug 2041335](https://bugzil.la/2041335)).
- Der Befehl `browsingContext.reload` wurde bei Verwendung für Frames behoben. ([Firefox-Bug 2030909](https://bugzil.la/2030909)).
- Die Unterstützung für das `contexts`-Argument im Befehl `session.unsubscribe` wurde entfernt. Ab jetzt können Clients nur noch nach Ereignisnamen oder Abonnement-ID abbestellen. ([Firefox-Bug 1988723](https://bugzil.la/1988723)).

## Änderungen für Add-On-Entwickler

<!-- ### Entfernungen -->

<!-- ### Sonstiges -->

## Experimentelle Webfunktionen

Diese Funktionen sind in Firefox 155 verfügbar, aber standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie auf der `about:config`-Seite nach der entsprechenden Einstellung und setzen Sie diese auf `true`.
Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).
