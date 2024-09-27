---
title: Window Management API
slug: Web/API/Window_Management_API
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{SeeCompatTable}}{{DefaultAPISidebar("Window Management API")}}

Die **Window Management API** ermöglicht es Ihnen, detaillierte Informationen über die mit Ihrem Gerät verbundenen Anzeigen zu erhalten und Fenster einfacher auf bestimmten Bildschirmen zu platzieren, was den Weg zu effektiveren Multi-Screen-Anwendungen ebnet.

## Konzepte und Verwendung

Historisch gesehen haben wir [`Window.open()`](/de/docs/Web/API/Window/open) verwendet, um Browserfenster zu verwalten, die mit der aktuellen Anwendung verbunden sind — neue Fenster zu öffnen, vorhandene Fenster zu vergrößern und zu schließen usw. Zum Beispiel, um ein 400×300-Fenster 50 Pixel von links und oben Ihres Bildschirms zu öffnen:

```js
const myWindow = window.open(
  "https://example.com/",
  "myWindow",
  "left=50,top=50,width=400,height=300",
);
```

Sie können Informationen über Ihren Bildschirm aus der [`Window.screen`](/de/docs/Web/API/Window/screen)-Eigenschaft abrufen, wie viel Bildschirmfläche verfügbar ist, um Fenster zu platzieren.

Die oben genannten Funktionen sind jedoch begrenzt. `Window.screen` liefert nur Daten über den primären Bildschirm und nicht über zusätzliche Anzeigen, die einem Gerät zur Verfügung stehen. Um ein Fenster auf eine sekundäre Anzeige zu verschieben, könnten Sie [`Window.moveTo()`](/de/docs/Web/API/Window/moveTo) verwenden, aber Sie müssten raten, welche Koordinaten basierend darauf zu verwenden sind, wo es in Ihrem Setup relativ zur primären Anzeige platziert ist.

Die Window Management API bietet eine robustere und flexiblere Fensterverwaltung. Sie ermöglicht es Ihnen, zu überprüfen, ob Ihre Anzeige mit mehreren Bildschirmen erweitert ist, und Informationen zu jedem Bildschirm separat zu erhalten: Fenster können dann nach Wunsch auf jedem Bildschirm platziert werden. Sie bietet auch Ereignishandler, die es Ihnen ermöglichen, auf Änderungen in den verfügbaren Bildschirmen zu reagieren, neue Vollbildfunktionalitäten, um auszuwählen, welchen Bildschirm Sie in den Vollbildmodus setzen möchten (falls vorhanden), und Berechtigungsfunktionen zur Steuerung des Zugriffs auf die API.

Weitere Details zur Verwendung finden Sie unter [Verwendung der Window Management API](/de/docs/Web/API/Window_Management_API/Using).

> [!NOTE]
> In modernen Browsern ist für jeden `Window.open()`-Aufruf ein separates Benutzeraktionsereignis erforderlich, aus Sicherheitsgründen. Dies verhindert, dass Websites Benutzer mit vielen Fenstern zuspammen. Dies stellt jedoch ein Problem für Multi-Fenster-Anwendungen dar. Um diese Einschränkung zu umgehen, können Sie Ihre Anwendungen so entwerfen, dass sie nicht mehr als ein neues Fenster gleichzeitig öffnen, vorhandene Fenster wiederverwenden, um unterschiedliche Seiten anzuzeigen, oder Benutzer darüber informieren, wie sie ihre Browsereinstellungen aktualisieren können, um mehrere Fenster zuzulassen.

### Anwendungsfälle

Die Window Management API ist in folgenden Fällen nützlich:

- Multi-Fenster-Grafikeditoren und Audioprozessoren, die Bearbeitungswerkzeuge und -panels auf verschiedenen Bildschirmen anordnen möchten.
- Virtuelle Handelsdesks, die Markttrends in mehreren Fenstern anzeigen und bestimmte interessante Fenster im Vollbildmodus anzeigen möchten.
- Präsentations-Apps, die Sprechernotizen auf dem internen primären Bildschirm und die Präsentation auf einem externen Projektor anzeigen möchten.

## Integration der Berechtigungspolitik

Die {{httpheader("Permissions-Policy/window-management", "window-management")}} [Permissions-Policy](/de/docs/Web/HTTP/Permissions_Policy) kann verwendet werden, um die Berechtigung zur Nutzung der Window Management API zu steuern. Konkret:

- Die Nutzung der [`Window.getScreenDetails()`](/de/docs/Web/API/Window/getScreenDetails)-Methode. Wenn blockiert, wird ihr {{jsxref("Promise")}} mit einer `NotAllowedError`-Ausnahme abgelehnt.
- Die Abfrage der [`Window.screen.isExtended`](/de/docs/Web/API/Screen/isExtended)-Eigenschaft. Wenn blockiert, wird sie immer `false` zurückgeben.

Entwickler können explizit die Erlaubnis für ein {{htmlelement("iframe")}} erteilen, die Window Management zu verwenden, indem sie das `allow`-Attribut verwenden:

```html
<iframe src="3rd-party.example" allow="window-management"></iframe>
```

## Schnittstellen

- [`ScreenDetails`](/de/docs/Web/API/ScreenDetails) {{securecontext_inline}}
  - : Repräsentiert die Details aller Bildschirme, die dem Gerät des Benutzers zur Verfügung stehen.
- [`ScreenDetailed`](/de/docs/Web/API/ScreenDetailed) {{securecontext_inline}}
  - : Stellt detaillierte Informationen über einen bestimmten Bildschirm zur Verfügung, der dem Gerät des Benutzers zur Verfügung steht.

### Erweiterungen für andere Schnittstellen

- Das `Screen` [`change`](/de/docs/Web/API/Screen/change_event)-Ereignis {{securecontext_inline}}
  - : Wird auf einem bestimmten Bildschirm ausgelöst, wenn dieser sich in irgendeiner Weise ändert — zum Beispiel verfügbare Breite oder Höhe oder Ausrichtung.
- [`Screen.isExtended`](/de/docs/Web/API/Screen/isExtended) {{securecontext_inline}}
  - : Eine boolesche Eigenschaft, die `true` zurückgibt, wenn das Gerät des Benutzers über mehrere Bildschirme verfügt, und `false`, wenn nicht.
- [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen), die `screen`-Option
  - : Gibt an, auf welchem Bildschirm Sie das Element im Vollbildmodus anzeigen möchten.
- [`Window.getScreenDetails()`](/de/docs/Web/API/Window/getScreenDetails) {{securecontext_inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einer Instanz eines [`ScreenDetails`](/de/docs/Web/API/ScreenDetails)-Objekts erfüllt wird.

## Beispiele

Sie finden vollständige Beispiele hier:

- [Grundlegende Multi-Fenster-Lernumgebung](https://mdn.github.io/dom-examples/window-management-api/) (siehe den [Quellcode](https://github.com/mdn/dom-examples/tree/main/window-management-api)).
- [Multi-Fenster-Platformer-Spiel](https://googlechromelabs.github.io/multi-window-platformer-game/) (siehe den [Quellcode](https://github.com/googlechromelabs/multi-window-platformer-game)).
- [Elmer-inspirierte Handelsdesk-Demonstration](https://window-placement.glitch.me/) (siehe den [Quellcode](https://glitch.com/edit/#!/window-placement)).
- [Fensterplatzierungs-Demonstration](https://michaelwasserman.github.io/window-placement-demo/) (siehe den [Quellcode](https://github.com/michaelwasserman/window-placement-demo)).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
