---
title: Window Management API
slug: Web/API/Window_Management_API
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{SeeCompatTable}}{{DefaultAPISidebar("Window Management API")}}

Die **Fensterverwaltung-API** ermöglicht es Ihnen, detaillierte Informationen über die an Ihr Gerät angeschlossenen Bildschirme zu erhalten und Fenster einfacher auf bestimmten Bildschirmen zu platzieren. Dies ebnet den Weg für effektivere Mehrbildschirm-Anwendungen.

## Konzepte und Nutzung

Historisch haben wir [`Window.open()`](/de/docs/Web/API/Window/open) verwendet, um Browserfenster zu verwalten, die zur aktuellen Anwendung gehören — zum Beispiel, um neue Fenster zu öffnen, bestehende Fenster zu verkleinern und zu schließen usw. Um beispielsweise ein 400×300 Fenster 50 Pixel vom linken und oberen Rand Ihres Bildschirms zu öffnen:

```js
const myWindow = window.open(
  "https://example.com/",
  "myWindow",
  "left=50,top=50,width=400,height=300",
);
```

Sie können Informationen über Ihren Bildschirm von der [`Window.screen`](/de/docs/Web/API/Window/screen) Eigenschaft abrufen, wie zum Beispiel, wie viel Bildschirmfläche Sie zur Verfügung haben, um Fenster darin zu platzieren.

Jedoch sind die obigen Funktionen limitiert. `Window.screen` gibt nur Daten über den primären Bildschirm zurück und nicht über sekundäre Bildschirme, die für ein Gerät verfügbar sind. Um ein Fenster auf einen sekundären Bildschirm zu verschieben, könnten Sie [`Window.moveTo()`](/de/docs/Web/API/Window/moveTo) verwenden, aber Sie müssten raten, welche Koordinaten Sie basierend darauf verwenden, wo es in Ihrem Setup im Verhältnis zum primären Bildschirm platziert ist.

Die Fensterverwaltung-API bietet eine robustere, flexiblere Fenstermanagement. Es ermöglicht es Ihnen, abzufragen, ob Ihr Display mit mehreren Bildschirmen erweitert ist, und Informationen zu jedem Bildschirm separat zu erhalten: Fenster können dann nach Belieben auf jedem Bildschirm platziert werden. Sie bietet auch Ereignishandler, die es Ihnen ermöglichen, auf Änderungen der verfügbaren Bildschirme zu reagieren, neue Vollbildfunktionen, um auszuwählen, welchen Bildschirm Sie im Vollbildmodus anzeigen möchten (falls vorhanden), und Berechtigungsfunktionen, um den Zugriff auf die API zu kontrollieren.

Für Details zur Anwendung, siehe [Verwendung der Fensterverwaltung-API](/de/docs/Web/API/Window_Management_API/Using).

> [!NOTE]
> In modernen Browsern ist für jeden `Window.open()`-Aufruf ein separates Benutzerinteraktionsereignis erforderlich, aus Sicherheitsgründen. Dies verhindert, dass Websites Benutzer mit vielen Fenstern bombardieren. Dies stellt jedoch ein Problem für Mehrfenster-Anwendungen dar. Um diese Einschränkung zu umgehen, können Sie Ihre Anwendungen so gestalten, dass sie nicht mehr als ein neues Fenster gleichzeitig öffnen, bestehende Fenster wiederverwenden, um verschiedene Seiten anzuzeigen, oder Benutzer beraten, wie sie ihre Browsereinstellungen aktualisieren können, um mehrere Fenster zuzulassen.

### Anwendungsfälle

Die Fensterverwaltung-API ist nützlich in Fällen wie:

- Mehrfenster-Grafikeditoren und Audiobearbeitungsprogramme, die Bearbeitungswerkzeuge und -fenster über verschiedene Bildschirme hinweg anordnen möchten.
- Virtuelle Handelsplätze, die Markttrends in mehreren Fenstern anzeigen wollen und bestimmte interessante Fenster im Vollbildmodus darstellen möchten.
- Präsentationsanwendungen, die Rednernotizen auf dem internen primären Bildschirm und die Präsentation auf einem externen Projektor anzeigen möchten.

## Integration der Berechtigungsrichtlinie

Die {{httpheader("Permissions-Policy/window-management", "window-management")}} [Permissions-Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) kann verwendet werden, um die Berechtigung zur Nutzung der Fensterverwaltung-API zu steuern. Insbesondere:

- Die Nutzung der [`Window.getScreenDetails()`](/de/docs/Web/API/Window/getScreenDetails) Methode. Wenn sie blockiert wird, lehnt ihr {{jsxref("Promise")}} mit einer `NotAllowedError`-Ausnahme ab.
- Die Abfrage der [`Window.screen.isExtended`](/de/docs/Web/API/Screen/isExtended) Eigenschaft. Wenn blockiert, wird sie immer `false` zurückgeben.

Entwickler können die Berechtigung für ein {{htmlelement("iframe")}} explizit gewähren, um die Fensterverwaltung über das `allow`-Attribut zu nutzen:

```html
<iframe src="3rd-party.example" allow="window-management"></iframe>
```

## Schnittstellen

- [`ScreenDetails`](/de/docs/Web/API/ScreenDetails) {{securecontext_inline}}
  - : Stellt die Details aller Bildschirme bereit, die dem Gerät des Benutzers zur Verfügung stehen.
- [`ScreenDetailed`](/de/docs/Web/API/ScreenDetailed) {{securecontext_inline}}
  - : Stellt detaillierte Informationen über einen bestimmten Bildschirm bereit, der dem Gerät des Benutzers zur Verfügung steht.

### Erweiterungen zu anderen Schnittstellen

- Das `Screen` [`change`](/de/docs/Web/API/Screen/change_event) Ereignis {{securecontext_inline}}
  - : Wird für einen bestimmten Bildschirm ausgelöst, wenn sich dieser in irgendeiner Weise ändert — beispielsweise in der verfügbaren Breite oder Höhe oder im Seitenverhältnis.
- [`Screen.isExtended`](/de/docs/Web/API/Screen/isExtended) {{securecontext_inline}}
  - : Eine boolesche Eigenschaft, die `true` zurückgibt, wenn das Gerät des Benutzers mehrere Bildschirme hat, und `false`, wenn nicht.
- [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen), die `screen` Option
  - : Gibt an, auf welchem Bildschirm Sie das Element im Vollbildmodus anzeigen möchten.
- [`Window.getScreenDetails()`](/de/docs/Web/API/Window/getScreenDetails) {{securecontext_inline}}
  - : Gibt eine {{jsxref("Promise")}} zurück, die mit einem [`ScreenDetails`](/de/docs/Web/API/ScreenDetails) Objektinstanz erfüllt wird.

## Beispiele

Vollständige Beispiele finden Sie hier:

- [Grundlegende Mehrfenster-Lernumgebung](https://mdn.github.io/dom-examples/window-management-api/) (siehe den [Quellcode](https://github.com/mdn/dom-examples/tree/main/window-management-api)).
- [Mehrfenster-Plattformer-Spiel](https://googlechromelabs.github.io/multi-window-platformer-game/) (siehe den [Quellcode](https://github.com/googlechromelabs/multi-window-platformer-game)).
- [Von Elmer inspiriertes Handelsdesk-Demo](https://window-placement.glitch.me/) (siehe den [Quellcode](https://glitch.com/edit/#!/window-placement)).
- [Fensterplatzierungs-Demo](https://michaelwasserman.github.io/window-placement-demo/) (siehe den [Quellcode](https://github.com/michaelwasserman/window-placement-demo)).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
