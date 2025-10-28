---
title: Firefox 145 Versionshinweise für Entwickler (Beta)
short-title: Firefox 145 (Beta)
slug: Mozilla/Firefox/Releases/145
l10n:
  sourceCommit: 7e705182affc7582e25657794fe3c86484933849
---

Dieser Artikel bietet Informationen über die Änderungen in Firefox 145, die Entwickler betreffen.
Firefox 145 ist die aktuelle [Beta-Version von Firefox](https://www.firefox.com/en-US/channel/desktop/#beta) und wird am [11. November 2025](https://whattrainisitnow.com/release/?version=145) veröffentlicht.

> [!NOTE]
> Die Versionshinweise für diese Firefox-Version sind noch in Bearbeitung.

<!-- Autoren: Bitte kommentieren Sie alle Überschriften aus, für die Sie Anmerkungen schreiben -->

## Änderungen für Webentwickler

<!-- ### Entwicklertools -->

<!-- ### HTML -->

<!-- Keine bemerkenswerten Änderungen. -->

<!-- #### Entfernungen -->

<!-- ### MathML -->

<!-- #### Entfernungen -->

<!-- ### SVG -->

<!-- #### Entfernungen -->

### CSS

- Die Eigenschaft {{cssxref("text-autospace")}} wird jetzt unterstützt, was automatische Abstandsänderungen zwischen Zeichen aus verschiedenen Schriftsystemen ermöglicht ([Firefox Bug 1981086](https://bugzil.la/1981086), [Firefox Bug 1869577](https://bugzil.la/1869577)).

- Das veraltete Schlüsselwort [`-webkit-fill-available`](/de/docs/Web/CSS/WebKit_Extensions#-webkit-prefixed_property_values) wird jetzt als Wert für die CSS-Eigenschaften {{cssxref("width")}} und {{cssxref("height")}} unterstützt, um die Webkompatibilität zu verbessern.
  Dieses Schlüsselwort ist ein Alias für das kürzlich standardisierte Schlüsselwort `stretch` (d.h. [`width: stretch`](/de/docs/Web/CSS/width#stretch) und [`height: stretch`](/de/docs/Web/CSS/height#stretch)), welches in Firefox noch nicht unterstützt wird.
  ([Firefox Bug 1988938](https://bugzil.la/1988938), [Firefox Bug 1789477](https://bugzil.la/1789477)).

- Die generische Schriftfamilie [`math`](/de/docs/Web/CSS/font-family#math) wird jetzt als Wert der Eigenschaft `font-family` unterstützt, sodass mathematische Ausdrücke geeignete Schriftarten verwenden können.
  ([Firefox Bug 1788937](https://bugzil.la/1788937)).

<!-- #### Entfernungen -->

### JavaScript

- Firefox unterstützt nun die statische Methode {{jsxref("Atomics.waitAsync()")}}, die die Synchronisation von Threads basierend auf dem Wert in einem gemeinsam genutzten Speicherort ermöglicht.
  Die Methode wartet asynchron auf den Wert und gibt ein Objekt zurück, das das Ergebnis der Operation darstellt. Sie ist nicht blockierend und im Hauptthread verwendbar.
  ([Firefox Bug 1884148](https://bugzil.la/1884148)).

<!-- #### Entfernungen -->

### HTTP

- Die HTTP-Header {{httpheader("Integrity-Policy")}} und {{httpheader("Integrity-Policy-Report-Only")}} werden jetzt für Skript-Ressourcen unterstützt. Diese erlauben Webseiten, [Subressourcen-Integritätsgarantien](/de/docs/Web/Security/Subresource_Integrity) für _Skripte_ durchzusetzen.
  Beachten Sie, dass der Schlüssel [`endpoints`](/de/docs/Web/HTTP/Reference/Headers/Integrity-Policy#endpoints) noch nicht unterstützt wird (Verstöße werden in die Konsole geloggt).
  ([Firefox Bug 1984973](https://bugzil.la/1984973)).

<!-- #### Entfernungen -->

<!-- ### Sicherheit -->

<!-- #### Entfernungen -->

### APIs

- Die Eigenschaft [`source`](/de/docs/Web/API/ToggleEvent/source) der Schnittstelle [`ToggleEvent`](/de/docs/Web/API/ToggleEvent) wird jetzt unterstützt.
  Wenn ein [Popover](/de/docs/Web/API/Popover_API) durch ein HTML-Element wie ein {{htmlelement("button")}} ausgelöst wird, enthält die `source`-Eigenschaft des Ereignisses das Element, das das Popover ausgelöst hat.
  ([Firefox Bug 1968987](https://bugzil.la/1968987)).
- Eine Instanz von [`CSSStyleProperties`](/de/docs/Web/API/CSSStyleProperties) wird jetzt für die `style`-Eigenschaft auf [`HTMLElement`](/de/docs/Web/API/HTMLElement/style), [`MathMLElement`](/de/docs/Web/API/MathMLElement/style), [`SVGElement`](/de/docs/Web/API/SVGElement/style) und [`CSSStyleRule`](/de/docs/Web/API/CSSStyleRule/style) sowie die Methode [`Window.getComputedStyle()`](/de/docs/Web/API/Window/getComputedStyle) zurückgegeben. Bisher wurde eine Instanz von [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) zurückgegeben.
  ([Firefox Bug 1989925](https://bugzil.la/1989925))

<!-- #### DOM -->

#### Medien, WebRTC und Web Audio

- [`RTCEncodedVideoFrame`](/de/docs/Web/API/RTCEncodedVideoFrame) und [`RTCEncodedAudioFrame`](/de/docs/Web/API/RTCEncodedAudioFrame) sind jetzt {{Glossary("Serializable_object", "serialisierbare Objekte")}}, und Kopierkonstruktoren für [`RTCEncodedAudioFrame()`](/de/docs/Web/API/RTCEncodedAudioFrame/RTCEncodedAudioFrame) und [`RTCEncodedVideoFrame()`](/de/docs/Web/API/RTCEncodedVideoFrame/RTCEncodedVideoFrame) werden unterstützt. Diese Änderungen ermöglichen es, Frames zu klonen und zwischen Arbeitern und dem Hauptthread zu teilen. ([Firefox Bug 1868223](https://bugzil.la/1868223) und [Firefox Bug 1975032](https://bugzil.la/1975032)).

<!-- #### Entfernungen -->

<!-- ### WebAssembly -->

<!-- #### Entfernungen -->

<!-- ### WebDriver-Konformität (WebDriver BiDi, Marionette) -->

<!-- #### Allgemein -->

<!-- #### WebDriver BiDi -->

<!-- #### Marionette -->

## Änderungen für Add-on-Entwickler

- Cookies, die mit {{WebExtAPIRef("cookies.set()")}} erzeugt werden, werden nun validiert, und ungültige Cookies werden abgelehnt. Diese Änderung wurde nur in Nightly ab Firefox 142 implementiert. ([Firefox Bug 1976509](https://bugzil.la/1976509))

<!-- ### Entfernungen -->

<!-- ### Sonstiges -->

## Experimentelle Web-Features

Diese Funktionen werden in Firefox 145 ausgeliefert, sind jedoch standardmäßig deaktiviert.
Um mit ihnen zu experimentieren, suchen Sie auf der Seite `about:config` nach der entsprechenden Einstellung und setzen Sie sie auf `true`.
Weitere solcher Funktionen finden Sie auf der Seite [Experimentelle Features](/de/docs/Mozilla/Firefox/Experimental_features).

- **CSS-Anker-Positionierung** (Nightly): `layout.css.anchor-positioning.enabled`

  Nightly-Builds unterstützen nun standardmäßig die [CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning), die es ermöglicht, Elemente miteinander zu verknüpfen.
  Die Anker-Positionselemente können dann in ihrer Größe und Position relativ zu den Größe und Position der Ankerelemente, an die sie gebunden sind, eingestellt werden.
  (Allgemein: [Firefox Bug 1988224](https://bugzil.la/1988224), `position-area`: [Firefox Bug 1924086](https://bugzil.la/1924086)).
