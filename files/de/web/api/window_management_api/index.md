---
title: Fensterverwaltungs-API
slug: Web/API/Window_Management_API
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{SeeCompatTable}}{{DefaultAPISidebar("Window Management API")}}

Die **Fensterverwaltungs-API** ermöglicht es Ihnen, detaillierte Informationen über die an Ihr Gerät angeschlossenen Bildschirme zu erhalten und Fenster einfacher auf bestimmten Bildschirmen zu platzieren. Dies ebnet den Weg für effektivere Multi-Screen-Anwendungen.

## Konzepte und Verwendung

Historisch gesehen haben wir {{domxref("Window.open()")}} verwendet, um Browserfenster zu verwalten, die sich auf die aktuelle Anwendung beziehen – neue Fenster zu öffnen, bestehende Fenster zu ändern und zu schließen usw. Zum Beispiel, um ein 400×300 Fenster 50 Pixel von der linken oberen Ecke Ihres Bildschirms zu öffnen:

```js
const myWindow = window.open(
  "https://example.com/",
  "myWindow",
  "left=50,top=50,width=400,height=300",
);
```

Sie können Informationen über Ihren Bildschirm von der {{domxref("Window.screen")}}-Eigenschaft abrufen, wie viel Bildschirmfläche Ihnen zur Verfügung steht, um Fenster zu platzieren.

Diese Funktionen sind jedoch begrenzt. `Window.screen` gibt nur Daten über den primären Bildschirm zurück und nicht über sekundäre Bildschirme, die einem Gerät zur Verfügung stehen. Um ein Fenster auf einen sekundären Bildschirm zu verschieben, könnten Sie {{domxref("Window.moveTo()")}} verwenden, müssten aber die Koordinaten erraten, die auf Basis dessen, wie es relativ zum primären Bildschirm in Ihrem Setup platziert ist.

Die Fensterverwaltungs-API bietet eine robustere und flexiblere Fensterverwaltung. Sie ermöglicht es Ihnen abzufragen, ob Ihr Display mit mehreren Bildschirmen erweitert ist und Informationen über jeden Bildschirm separat zu erhalten. Fenster können dann nach Wunsch auf jedem Bildschirm platziert werden. Sie bietet auch Event-Handler, um auf Änderungen in den verfügbaren Bildschirmen zu reagieren, neue Vollbildfunktionen, um auszuwählen, welchen Bildschirm Sie im Vollbildmodus zeigen möchten (falls vorhanden), und Berechtigungsfunktionen, um den Zugriff auf die API zu steuern.

Für Details zur Nutzung siehe [Verwendung der Fensterverwaltungs-API](/de/docs/Web/API/Window_Management_API/Using).

> [!NOTE]
> In modernen Browsern ist ein separates Benutzeraktionsereignis für jeden `Window.open()`-Aufruf erforderlich, aus Sicherheitsgründen. Dies verhindert, dass Websites Benutzer mit vielen Fenstern überfluten. Dies stellt jedoch ein Problem für Multi-Window-Anwendungen dar. Um dieses Limit zu umgehen, können Sie Ihre Anwendungen so gestalten, dass sie nicht mehr als ein neues Fenster gleichzeitig öffnen, vorhandene Fenster wiederverwenden, um verschiedene Seiten anzuzeigen, oder Benutzer beraten, wie sie ihre Browsereinstellungen aktualisieren können, um mehrere Fenster zuzulassen.

### Anwendungsfälle

Die Fensterverwaltungs-API ist nützlich in Fällen wie:

- Multi-Window-Grafikeditoren und Audioprozessoren, die Bearbeitungswerkzeuge und -panels über verschiedene Bildschirme arrangieren möchten.
- Virtuelle Handelsdesks, die Markttrends in mehreren Fenstern zeigen und bestimmte interessante Fenster im Vollbildmodus anzeigen wollen.
- Diashow-Apps, die Sprechernotizen auf dem internen primären Bildschirm und die Präsentation auf einem externen Projektor anzeigen möchten.

## Integration in die Berechtigungspolitik

Die {{httpheader("Permissions-Policy/window-management", "window-management")}} [Berechtigungspolitik](/de/docs/Web/HTTP/Permissions_Policy) kann verwendet werden, um die Berechtigung zur Nutzung der Fensterverwaltungs-API zu steuern. Insbesondere:

- Die Verwendung der {{domxref("Window.getScreenDetails()")}}-Methode. Wenn blockiert, wird ihr {{jsxref("Promise")}} mit einer `NotAllowedError`-Ausnahme abgelehnt.
- Abfragen der {{domxref("Screen.isExtended", "Window.screen.isExtended")}}-Eigenschaft. Wenn blockiert, wird sie immer `false` zurückgeben.

Entwickler können einer {{htmlelement("iframe")}} explizit die Erlaubnis erteilen, die Fensterverwaltungsfunktionalität über das `allow`-Attribut zu verwenden:

```html
<iframe src="3rd-party.example" allow="window-management"></iframe>
```

## Schnittstellen

- {{domxref("ScreenDetails")}} {{securecontext_inline}}
  - : Stellt die Details aller Bildschirme zur Verfügung, die dem Gerät des Benutzers zur Verfügung stehen.
- {{domxref("ScreenDetailed")}} {{securecontext_inline}}
  - : Repräsentiert detaillierte Informationen über einen bestimmten Bildschirm, der dem Gerät des Benutzers zur Verfügung steht.

### Erweiterungen zu anderen Schnittstellen

- Das `Screen` {{domxref("Screen.change_event", "change")}}-Ereignis {{securecontext_inline}}
  - : Wird bei einem bestimmten Bildschirm ausgelöst, wenn sich dieser in irgendeiner Weise ändert – zum Beispiel verfügbare Breite oder Höhe, oder Ausrichtung.
- {{domxref("Screen.isExtended")}} {{securecontext_inline}}
  - : Eine boolesche Eigenschaft, die `true` zurückgibt, wenn das Gerät des Benutzers mehrere Bildschirme hat, und `false`, wenn nicht.
- {{domxref("Element.requestFullscreen()")}}, die `screen`-Option
  - : Gibt an, auf welchem Bildschirm Sie das Element im Vollbildmodus anzeigen möchten.
- {{domxref("Window.getScreenDetails()")}} {{securecontext_inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einer {{domxref("ScreenDetails")}}-Objektinstanz erfüllt wird.

## Beispiele

Sie finden vollständige Beispiele hier:

- [Grundlegende Multi-Window-Lernumgebung](https://mdn.github.io/dom-examples/window-management-api/) (siehe den [Quellcode](https://github.com/mdn/dom-examples/tree/main/window-management-api)).
- [Multi-Window-Plattformspiel](https://googlechromelabs.github.io/multi-window-platformer-game/) (siehe den [Quellcode](https://github.com/googlechromelabs/multi-window-platformer-game)).
- [Elmer-inspirierte Handelsdesk-Demo](https://window-placement.glitch.me/) (siehe den [Quellcode](https://glitch.com/edit/#!/window-placement)).
- [Fensterplatzierungsdemo](https://michaelwasserman.github.io/window-placement-demo/) (siehe den [Quellcode](https://github.com/michaelwasserman/window-placement-demo)).

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}
