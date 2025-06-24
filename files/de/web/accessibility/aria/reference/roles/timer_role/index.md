---
title: "ARIA: timer-Rolle"
short-title: timer
slug: Web/Accessibility/ARIA/Reference/Roles/timer_role
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Die **`timer`**-Rolle zeigt unterstützenden Technologien an, dass ein Element ein numerischer Zähler ist, der die verstrichene Zeit von einem Startpunkt oder die verbleibende Zeit bis zu einem Endpunkt auflistet. Unterstützende Technologien werden Aktualisierungen eines Timers nicht ansagen, da er einen impliziten [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)-Wert von `off` hat.

```html
<div role="timer" id="eggtimer">0</div>
```

Dies definiert dieses `div`-Element als einen Timer ohne verbleibende Zeit.

## Beschreibung

Die `timer`-Rolle zeigt unterstützenden Technologien an, dass dieser Teil der Webinhalte eine Live-Region ist, die einen Timer enthält, der die verbleibende oder verstrichene Zeit auflistet. Der innere Text eines Timers sollte eine sich aktualisierende aktuelle Zeitmessung sein. Obwohl der Wert nicht unbedingt maschinenlesbar sein muss, sollte er sich in regelmäßigen Intervallen kontinuierlich aktualisieren, es sei denn, der Timer ist angehalten oder erreicht seinen Endpunkt.

Zusammen mit [`alert`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role), [`log`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/log_role), [`marquee`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/marquee_role) und [`status`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/status_role) ist die `timer`-Rolle eine Live-Region und kann durch [Live-Region](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions)-Attribute modifiziert werden.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)

  - : Einige Bildschirmleser kündigen den Namen eines Timer-Elements an, bevor sie dessen Inhalt ansagen. Wenn ein Name sichtbar ist, verweisen Sie mit `aria-labelledby` darauf. Durch das Hinzufügen eines `aria-label` kann der sichtbare Inhalt eines Timer-Elements mit einem Text versehen werden, der beim Vorlesen durch einen Bildschirmleser nicht angezeigt wird. Das Benennen eines Timers ist nicht erforderlich, daher können beide Attribute ausgelassen werden, wenn nichts Passendes vorhanden ist.

- [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)
  - : Elemente mit der Rolle `timer` haben einen impliziten `aria-live`-Wert von `off`.

## Barrierefreiheitsaspekte

Wenn ein Zeitlimit erforderlich ist, beispielsweise aus Sicherheitsgründen, sollte der Benutzer die Möglichkeit haben, es zu deaktivieren oder zu verlängern. Diese Einschränkung gilt nicht, wenn das Zeitlimit aufgrund eines Live-Events wie einer Auktion oder eines Spiels besteht oder wenn die Zeit zur Fertigstellung des Formulars für eine gültige Einreichung wesentlich ist.

## Beispiele

### Ein einfacher Timer

Dieses Beispiel enthält einen Timer, der von 30 Sekunden auf 0 Sekunden herunterzählt. Der gesamte Anzeigebereich der Zeit hat `role="timer"` und auch [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic), um anzuzeigen, dass die Region als Ganzes angesagt werden soll, nicht nur die geänderten Bereiche. Aufgrund des impliziten `aria-live="off"` werden Änderungen standardmäßig nicht angesagt; wir ändern die Rolle manuell auf `"alert"`, wenn der Timer noch 10 Sekunden verbleibend anzeigt, sodass dieser einmal angesagt wird.

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

- [ARIA: `alert`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role)
- [ARIA: `log`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/log_role)
- [ARIA: `marquee`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/marquee_role)
- [ARIA: `status`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/status_role)
- [ARIA Live-Regionen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions)
