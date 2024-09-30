---
title: Window Management API
slug: Web/API/Window_Management_API
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{SeeCompatTable}}{{DefaultAPISidebar("Window Management API")}}

Die **Window Management API** ermöglicht es, detaillierte Informationen über die an Ihr Gerät angeschlossenen Bildschirme zu erhalten und Fenster einfacher auf bestimmten Bildschirmen zu platzieren. Damit wird der Weg für effektivere Anwendungen mit mehreren Bildschirmen geebnet.

## Konzepte und Verwendung

Historisch gesehen haben wir [`Window.open()`](/de/docs/Web/API/Window/open) verwendet, um Browserfenster in Bezug auf die aktuelle Anwendung zu verwalten – neue Fenster zu öffnen, vorhandene Fenster zu ändern und zu schließen usw. Zum Beispiel, um ein 400×300-Fenster 50 Pixel vom linken und oberen Rand Ihres Bildschirms zu öffnen:

```js
const myWindow = window.open(
  "https://example.com/",
  "myWindow",
  "left=50,top=50,width=400,height=300",
);
```

Sie können Informationen über Ihren Bildschirm aus der [`Window.screen`](/de/docs/Web/API/Window/screen) Eigenschaft abrufen, wie beispielsweise, wie viel Bildschirmfläche zur Platzierung von Fenstern verfügbar ist.

Jedoch sind die oben genannten Funktionen begrenzt. `Window.screen` liefert nur Daten über den primären Bildschirm und nicht über sekundäre Anzeigen, die einem Gerät zur Verfügung stehen. Um ein Fenster zu einem sekundären Bildschirm zu verschieben, könnte man [`Window.moveTo()`](/de/docs/Web/API/Window/moveTo) verwenden, müsste jedoch raten, welche Koordinaten basierend auf der relativen Platzierung zum primären Bildschirm zu verwenden sind.

Die Window Management API bietet eine robustere und flexiblere Fensterverwaltung. Sie erlaubt das Abfragen, ob Ihr Display mit mehreren Bildschirmen erweitert ist und liefert Informationen zu jedem Bildschirm einzeln: Fenster können dann wie gewünscht auf jedem Bildschirm platziert werden. Sie bietet auch Ereignishandler, um auf Änderungen der verfügbaren Bildschirme zu reagieren, neue Vollbildfunktionen, um auszuwählen, welcher Bildschirm im Vollbildmodus angezeigt werden soll (falls überhaupt), und Berechtigungsfunktionen zur Kontrolle des Zugriffs auf die API.

Für Einzelheiten zur Nutzung siehe [Verwendung der Window Management API](/de/docs/Web/API/Window_Management_API/Using).

> [!NOTE]
> Moderne Browser erfordern aus Sicherheitsgründen ein separates Nutzerinteraktionserlebnis für jeden `Window.open()`-Aufruf. Dies verhindert, dass Websites die Nutzer mit vielen Fenstern überfluten. Dies stellt jedoch ein Problem für Anwendungen mit mehreren Fenstern dar. Um diese Einschränkung zu umgehen, können Sie Ihre Anwendungen so gestalten, dass nicht mehr als ein neues Fenster gleichzeitig geöffnet wird, vorhandene Fenster wiederverwendet werden, um unterschiedliche Seiten anzuzeigen, oder Benutzer darüber informieren, wie sie ihre Browsereinstellungen ändern können, um mehrere Fenster zuzulassen.

### Anwendungsfälle

Die Window Management API ist nützlich in Fällen wie:

- Grafikeditoren und Audioprozessoren mit mehreren Fenstern, die Bearbeitungswerkzeuge und -panels über verschiedene Bildschirme hinweg anordnen möchten.
- Virtuelle Handelsarbeitsplätze, die Markttrends in mehreren Fenstern anzeigen und bestimmte interessante Fenster im Vollbildmodus darstellen möchten.
- Präsentationsanwendungen, die Notizen auf dem internen Primärbildschirm und die Präsentation auf einem externen Projektor anzeigen möchten.

## Integration der Berechtigungspolitik

Die {{httpheader("Permissions-Policy/window-management", "window-management")}} [Permissions-Policy](/de/docs/Web/HTTP/Permissions_Policy) kann verwendet werden, um die Berechtigung zur Nutzung der Window Management API zu steuern. Insbesondere:

- Nutzung der [`Window.getScreenDetails()`](/de/docs/Web/API/Window/getScreenDetails) Methode. Wenn blockiert, wird ihr {{jsxref("Promise")}} mit einer `NotAllowedError` Ausnahme abgewiesen.
- Abfrage der [`Window.screen.isExtended`](/de/docs/Web/API/Screen/isExtended) Eigenschaft. Wenn blockiert, wird sie immer `false` zurückgeben.

Entwickler können einer {{htmlelement("iframe")}} explizit die Berechtigung zur Nutzung der Window Management API über das `allow` Attribut erteilen:

```html
<iframe src="3rd-party.example" allow="window-management"></iframe>
```

## Schnittstellen

- [`ScreenDetails`](/de/docs/Web/API/ScreenDetails) {{securecontext_inline}}
  - : Repräsentiert die Details aller dem Gerät des Nutzers verfügbaren Bildschirme.
- [`ScreenDetailed`](/de/docs/Web/API/ScreenDetailed) {{securecontext_inline}}
  - : Repräsentiert detaillierte Informationen über einen spezifischen Bildschirm des Geräts des Nutzers.

### Erweiterungen anderer Schnittstellen

- Das `Screen` [`change`](/de/docs/Web/API/Screen/change_event) Ereignis {{securecontext_inline}}
  - : Wird ausgelöst, wenn sich ein spezifischer Bildschirm in irgendeiner Weise ändert – beispielsweise verfügbare Breite oder Höhe, oder Ausrichtung.
- [`Screen.isExtended`](/de/docs/Web/API/Screen/isExtended) {{securecontext_inline}}
  - : Eine boolesche Eigenschaft, die `true` zurückgibt, wenn das Gerät des Nutzers über mehrere Bildschirme verfügt, und `false`, wenn nicht.
- [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen), die `screen` Option
  - : Gibt an, auf welchem Bildschirm Sie das Element im Vollbildmodus anzeigen möchten.
- [`Window.getScreenDetails()`](/de/docs/Web/API/Window/getScreenDetails) {{securecontext_inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem [`ScreenDetails`](/de/docs/Web/API/ScreenDetails) Instanzobjekt erfüllt wird.

## Beispiele

Vollständige Beispiele finden Sie hier:

- [Grundlegende Umgebung mit mehreren Fenstern](https://mdn.github.io/dom-examples/window-management-api/) (siehe den [Quellcode](https://github.com/mdn/dom-examples/tree/main/window-management-api)).
- [Plattformspiel mit mehreren Fenstern](https://googlechromelabs.github.io/multi-window-platformer-game/) (siehe den [Quellcode](https://github.com/googlechromelabs/multi-window-platformer-game)).
- [Von Elmer inspirierte Handelsarbeitsplatz-Demo](https://window-placement.glitch.me/) (siehe den [Quellcode](https://glitch.com/edit/#!/window-placement)).
- [Demo zur Fensterpositionierung](https://michaelwasserman.github.io/window-placement-demo/) (siehe den [Quellcode](https://github.com/michaelwasserman/window-placement-demo)).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
