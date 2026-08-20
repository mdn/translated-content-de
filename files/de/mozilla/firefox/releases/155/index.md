---
title: Firefox 155 Versionshinweise für Entwickler (Beta)
short-title: Firefox 155 (Beta)
slug: Mozilla/Firefox/Releases/155
l10n:
  sourceCommit: a295eda26dd19299f0aee701676342c0f7178b7f
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 155, die Entwickler betreffen.
Firefox 155 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [1. September 2026](https://whattrainisitnow.com/release/?version=155) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Bearbeitung.

<!-- Autoren: Bitte alle Überschriften einblenden, für die Sie Notizen schreiben -->

## Änderungen für Webentwickler

<!-- ### Entwicklertools -->

<!-- ### HTML -->

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernt -->

<!-- ### MathML -->

<!-- #### Entfernt -->

<!-- ### SVG -->

<!-- #### Entfernt -->

<!-- ### CSS -->

<!-- #### Entfernt -->

<!-- ### JavaScript -->

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernt -->

<!-- ### HTTP -->

<!-- #### Entfernt -->

<!-- ### Sicherheit -->

<!-- #### Entfernt -->

### APIs

#### DOM

- Das [`SVGAElement`](/de/docs/Web/API/SVGAElement)-Interface implementiert nun das [`HyperlinkElementUtils`](https://html.spec.whatwg.org/multipage/links.html#hyperlinkelementutils) Mixin. Infolgedessen stellen SVG-{{SVGElement("a")}}-Elemente dieselben URL-Komponenten-Eigenschaften wie HTML-{{HTMLElement("a")}}-Elemente bereit: [`protocol`](/de/docs/Web/API/SVGAElement/protocol), [`username`](/de/docs/Web/API/SVGAElement/username), [`password`](/de/docs/Web/API/SVGAElement/password), [`host`](/de/docs/Web/API/SVGAElement/host), [`hostname`](/de/docs/Web/API/SVGAElement/hostname), [`port`](/de/docs/Web/API/SVGAElement/port), [`pathname`](/de/docs/Web/API/SVGAElement/pathname), [`search`](/de/docs/Web/API/SVGAElement/search) und [`hash`](/de/docs/Web/API/SVGAElement/hash). Auch die schreibgeschützte [`origin`](/de/docs/Web/API/SVGAElement/origin)-Eigenschaft wird bereitgestellt.
  ([Firefox-Bug 2058578](https://bugzil.la/2058578)).
- Die Schnittstellen [`SVGNumberList`](/de/docs/Web/API/SVGNumberList), [`SVGPointList`](/de/docs/Web/API/SVGPointList), [`SVGStringList`](/de/docs/Web/API/SVGStringList) und [`SVGTransformList`](/de/docs/Web/API/SVGTransformList) unterstützen jetzt indexierte Setter. Das bedeutet, dass Sie ein Element in der Liste mit Hilfe der Klammernotation ersetzen können, beispielsweise `transformList[0] = newTransform`, anstatt [`replaceItem()`](/de/docs/Web/API/SVGTransformList/replaceItem) aufzurufen.
  Die [`SVGLengthList`](/de/docs/Web/API/SVGLengthList)-Schnittstelle unterstützt bereits indexierte Setter.
  ([Firefox-Bug 2059426](https://bugzil.la/2059426)).

<!-- #### Medien, WebRTC und Web Audio -->

<!-- #### Entfernt -->

<!-- ### WebAssembly -->

<!-- #### Entfernt -->

<!-- ### WebDriver-Konformität (WebDriver BiDi, Marionette) -->

<!-- #### Allgemein -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Änderungen für Add-on-Entwickler

<!-- ### Entfernt -->

<!-- ### Sonstiges -->

## Experimentelle Web-Funktionen

Diese Funktionen werden in Firefox 155 bereitgestellt, sind jedoch standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie nach der entsprechenden Einstellung auf der `about:config` Seite und setzen Sie sie auf `true`.
Weitere solche Funktionen finden Sie auf der Seite [Experimentelle Funktionen](/de/docs/Mozilla/Firefox/Experimental_features).
