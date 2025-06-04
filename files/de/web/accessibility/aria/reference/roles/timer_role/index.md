---
title: "ARIA: timer Rolle"
short-title: timer
slug: Web/Accessibility/ARIA/Reference/Roles/timer_role
l10n:
  sourceCommit: 8cdb656ee1b6e9b0597dd108d5d42700ff0c29af
---

Die **`timer`** Rolle zeigt unterstützenden Technologien an, dass ein Element ein numerischer Zähler ist, der die abgelaufene Zeit ab einem Startpunkt oder die verbleibende Zeit bis zu einem Endpunkt anzeigt. Unterstützende Technologien werden Aktualisierungen eines Timers nicht ankündigen, da er einen impliziten [aria-live](https://www.w3.org/TR/wai-aria/#aria-live) Wert von `off` hat.

```html
<div role="timer" id="eggtimer">0</div>
```

Dies definiert dieses `div`-Element als einen Timer ohne verbleibende Zeit.

## Beschreibung

Die `timer` Rolle zeigt unterstützenden Technologien an, dass dieser Teil des Webinhalts ein Live-Bereich ist, der einen Timer mit verbleibender Zeit oder abgelaufener Zeit enthält. Der innere Text eines Timers sollte eine sich aktualisierende aktuelle Zeitmessung sein. Während der Wert nicht unbedingt maschinenlesbar sein muss, sollte er regelmäßig aktualisiert werden, es sei denn, der Timer ist angehalten oder erreicht seinen Endpunkt.

Zusammen mit [`alert`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role), [`log`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/log_role), [`marquee`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/marquee_role) und [`status`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/status_role) ist die `timer` Rolle ein Live-Bereich und kann durch [Live-Bereich](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) Attribute modifiziert werden.

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)

  - : Einige Screenreader geben den Namen eines Timer-Elements bekannt, bevor sie dessen Inhalt ankündigen. Wenn ein Name sichtbar ist, verweisen Sie mit `aria-labelledby` darauf. Durch das Hinzufügen eines `aria-label` kann der sichtbare Inhalt eines Timer-Elements mit einem Text versehen werden, der nicht angezeigt wird, wenn ein Screenreader den Inhalt liest. Es ist nicht erforderlich, einem Timer einen Namen zu geben, daher können diese Attribute weggelassen werden, wenn nichts Passendes vorhanden ist.

- [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)

  - : Elemente mit der Rolle `timer` haben einen impliziten [aria-live](https://www.w3.org/TR/wai-aria/#aria-live) Wert von `off`.

## Barrierefreiheitsbedenken

Wenn eine Zeitbegrenzung erforderlich ist, zum Beispiel aus Sicherheitsgründen, sollte der Nutzer die Möglichkeit haben, sie auszuschalten oder zu verlängern. Diese Einschränkung gilt nicht, wenn die Zeitbegrenzung auf ein Live-Ereignis zurückzuführen ist, wie z. B. eine Auktion oder ein Spiel, oder wenn die Zeit zum Ausfüllen des Formulars für eine gültige Einreichung unerlässlich ist.

## Beispiele

### Ein einfacher Timer

Dieses Beispiel zeigt einen Timer, der von 30 Sekunden auf 0 Sekunden herunterzählt. Der gesamte Anzeigebereich der Zeit hat `role="timer"` und auch [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic), um anzuzeigen, dass der Bereich als Ganzes und nicht nur die geänderten Bereiche angekündigt werden soll. Aufgrund der impliziten `aria-live="off"` werden Änderungen standardmäßig nicht angekündigt; wir ändern die Rolle manuell zu `"alert"`, wenn der Timer 10 Sekunden verbleibend erreicht, damit es einmal angekündigt wird.

```html
<div id="countdown" role="timer" aria-atomic="true">
  <span id="number">30</span> seconds left!
</div>
```

```css
html {
  font-size: 50px;
  text-align: center;
  margin-top: 1em;
  font-family: sans-serif;
}

#number {
  font-family: monospace;
  color: #cc0000;
  font-weight: bold;
  font-size: 1.25em;
  vertical-align: middle;
}
```

```js
const numElement = document.getElementById("number");
const liveRegion = document.getElementById("countdown");
let startTime = new Date().getTime();

function decrement() {
  const timeNow = new Date().getTime();
  const elapsedTime = Math.floor((timeNow - startTime) / 1000);
  let newNumber = 30 - elapsedTime;

  if (newNumber >= 0) {
    numElement.textContent = newNumber;
  }

  if (newNumber === 10) {
    liveRegion.setAttribute("role", "alert");
    setTimeout(() => {
      liveRegion.setAttribute("role", "timer");
    }, 999);
  }
}

window.setInterval(() => {
  decrement();
}, 500);
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA: `alert` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role)
- [ARIA: `log` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/log_role)
- [ARIA: `marquee` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/marquee_role)
- [ARIA: `status` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/status_role)
- [ARIA Live-Bereiche](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions)
