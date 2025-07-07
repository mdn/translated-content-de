---
title: Window Management API
slug: Web/API/Window_Management_API
l10n:
  sourceCommit: 72d51eab0cf7140e7edcca663fe24fae1a4166f8
---

{{SeeCompatTable}}{{DefaultAPISidebar("Window Management API")}}

Die **Fensterverwaltung API** ermöglicht es Ihnen, detaillierte Informationen über die an Ihr Gerät angeschlossenen Bildschirme zu erhalten und Fenster einfacher auf bestimmten Bildschirmen zu platzieren, was den Weg für effektivere Multi-Screen-Anwendungen bereitet.

## Konzepte und Nutzung

Historisch haben wir [`Window.open()`](/de/docs/Web/API/Window/open) verwendet, um Browserfenster in Bezug auf die aktuelle Anwendung zu verwalten – neue Fenster zu öffnen, bestehende Fenster zu vergrößern und zu schließen usw. Zum Beispiel, um ein 400×300-Fenster 50 Pixel vom linken und oberen Rand Ihres Bildschirms zu öffnen:

```js
const myWindow = window.open(
  "https://example.com/",
  "myWindow",
  "left=50,top=50,width=400,height=300",
);
```

Sie können Informationen über Ihren Bildschirm über die Eigenschaft [`Window.screen`](/de/docs/Web/API/Window/screen) abrufen, zum Beispiel, wie viel Bildschirmplatz Sie zur Verfügung haben, um Fenster zu platzieren.

Die obigen Funktionen sind jedoch begrenzt. `Window.screen` gibt nur Daten über den primären Bildschirm zurück und nicht über sekundäre Bildschirme, die einem Gerät zur Verfügung stehen. Um ein Fenster auf einen sekundären Bildschirm zu verschieben, könnten Sie [`Window.moveTo()`](/de/docs/Web/API/Window/moveTo) verwenden, aber Sie müssten raten, welche Koordinaten verwendet werden sollen, basierend darauf, wo es in Ihrem Setup relativ zum primären Bildschirm platziert ist.

Die Fensterverwaltung API bietet eine robustere, flexiblere Fensterverwaltung. Sie ermöglicht es Ihnen, zu überprüfen, ob Ihr Display mit mehreren Bildschirmen erweitert ist, und Informationen über jeden Bildschirm separat zu erhalten: Fenster können dann nach Wunsch auf jedem Bildschirm platziert werden. Sie bietet auch Ereignishandler, um auf Änderungen der verfügbaren Bildschirme zu reagieren, neue Vollbildfunktionen, um auszuwählen, welchen Bildschirm Sie (falls vorhanden) in den Vollbildmodus versetzen möchten und Berechtigungsfunktionen, um den Zugriff auf die API zu steuern.

Details zur Verwendung finden Sie unter [Using the Window Management API](/de/docs/Web/API/Window_Management_API/Using).

> [!NOTE]
> In modernen Browsern ist aus Sicherheitsgründen ein separates Nutzer-Geste-Ereignis für jeden `Window.open()`-Aufruf erforderlich. Dies verhindert, dass Websites Benutzer mit vielen Fenstern bombardieren. Dies stellt jedoch ein Problem für Anwendungen mit mehreren Fenstern dar. Um diese Einschränkung zu umgehen, können Sie Ihre Anwendungen so gestalten, dass sie jeweils nur ein neues Fenster öffnen, vorhandene Fenster wiederverwenden, um verschiedene Seiten anzuzeigen, oder Benutzer darüber informieren, wie sie ihre Browsereinstellungen aktualisieren können, um mehrere Fenster zuzulassen.

### Anwendungsfälle

Die Fensterverwaltung API ist nützlich in Fällen wie:

- Multi-Window-Grafikeditoren und Audioprozessoren, die vielleicht Bearbeitungswerkzeuge und Panels auf verschiedene Bildschirme verteilen möchten.
- Virtuelle Handelsplätze, die Markttendenzen in mehreren Fenstern zeigen und bestimmte interessante Fenster im Vollbildmodus anzeigen möchten.
- Präsentationsanwendungen, die Referentennotizen auf dem internen Primärbildschirm und die Präsentation auf einem externen Projektor anzeigen möchten.

## Integration der Berechtigungspolitik

Die {{httpheader("Permissions-Policy/window-management", "window-management")}} [Berechtigungspolitik](/de/docs/Web/HTTP/Guides/Permissions_Policy) kann verwendet werden, um die Berechtigung zur Nutzung der Fensterverwaltung API zu steuern. Speziell:

- Die Nutzung der Methode [`Window.getScreenDetails()`](/de/docs/Web/API/Window/getScreenDetails). Wenn blockiert, wird deren {{jsxref("Promise")}} mit einem `NotAllowedError`-Ausnahme abgelehnt.
- Die Abfrage der Eigenschaft [`Window.screen.isExtended`](/de/docs/Web/API/Screen/isExtended). Wenn blockiert, gibt sie immer `false` zurück.

Entwickler können einem {{htmlelement("iframe")}} ausdrücklich die Berechtigung geben, die Fensterverwaltung zu nutzen, indem sie das `allow`-Attribut verwenden:

```html
<iframe src="3rd-party.example" allow="window-management"></iframe>
```

## Schnittstellen

- [`ScreenDetails`](/de/docs/Web/API/ScreenDetails) {{securecontext_inline}}
  - : Repräsentiert die Details aller der Geräte des Nutzers zur Verfügung stehenden Bildschirme.
- [`ScreenDetailed`](/de/docs/Web/API/ScreenDetailed) {{securecontext_inline}}
  - : Repräsentiert detaillierte Informationen über einen bestimmten Bildschirm, der dem Gerät des Nutzers zur Verfügung steht.

### Erweiterungen für andere Schnittstellen

- Das `Screen`-[`change`](/de/docs/Web/API/Screen/change_event)-Ereignis {{securecontext_inline}}
  - : Wird ausgelöst, wenn sich ein bestimmter Bildschirm in irgendeiner Weise ändert, beispielsweise verfügbare Breite oder Höhe oder Orientierung.
- [`Screen.isExtended`](/de/docs/Web/API/Screen/isExtended) {{securecontext_inline}}
  - : Eine boolesche Eigenschaft, die `true` zurückgibt, wenn das Gerät des Nutzers über mehrere Bildschirme verfügt, und `false`, wenn nicht.
- [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen), die `screen`-Option
  - : Gibt an, auf welchem Bildschirm Sie das Element im Vollbildmodus anzeigen möchten.
- [`Window.getScreenDetails()`](/de/docs/Web/API/Window/getScreenDetails) {{securecontext_inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einer [`ScreenDetails`](/de/docs/Web/API/ScreenDetails)-Objektinstanz erfüllt wird.

## Beispiele

Vollständige Beispiele finden Sie hier:

- [Grundlegende Multi-Window-Lernumgebung](https://mdn.github.io/dom-examples/window-management-api/) (siehe den [Quellcode](https://github.com/mdn/dom-examples/tree/main/window-management-api)).
- [Multi-Window-Plattformspiel](https://googlechromelabs.github.io/multi-window-platformer-game/) (siehe den [Quellcode](https://github.com/googlechromelabs/multi-window-platformer-game)).
- [Fensterplatzierungs-Demo](https://michaelwasserman.github.io/window-placement-demo/) (siehe den [Quellcode](https://github.com/michaelwasserman/window-placement-demo)).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
