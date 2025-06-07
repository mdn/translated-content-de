---
title: "ARIA: timer Rolle"
short-title: timer
slug: Web/Accessibility/ARIA/Reference/Roles/timer_role
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

Die **`timer`** Rolle zeigt assistiven Technologien an, dass ein Element ein numerischer Zähler ist, der die abgelaufene Zeit seit einem Startpunkt oder die verbleibende Zeit bis zu einem Endpunkt angibt. Assistive Technologien werden Aktualisierungen eines Timers nicht ankündigen, da er einen impliziten [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live) Wert von `off` hat.

```html
<div role="timer" id="eggtimer">0</div>
```

Dies definiert dieses `div` Element als Timer ohne verbleibende Zeit.

## Beschreibung

Die `timer` Rolle weist assistive Technologien darauf hin, dass dieser Teil des Webinhalts eine Live-Region ist, die eine Uhr enthält, welche die verbleibende oder abgelaufene Zeit anzeigt. Der innere Text eines Timers sollte eine aktuelle Zeitmessung darstellen, die regelmäßig aktualisiert wird. Obwohl der Wert nicht notwendig maschinenlesbar sein muss, sollte er kontinuierlich in regelmäßigen Abständen aktualisiert werden, es sei denn, der Timer ist angehalten oder erreicht seinen Endpunkt.

Zusammen mit [`alert`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role), [`log`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/log_role), [`marquee`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/marquee_role) und [`status`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/status_role) gehört die `timer` Rolle zu den Live-Regionen und kann durch [Live-Regionen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) Attribute modifiziert werden.

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)

  - : Einige Bildschirmleseprogramme kündigen den Namen eines Timer-Elements an, bevor sie dessen Inhalt ankündigen. Wenn ein Name sichtbar ist, referenzieren Sie ihn mit `aria-labelledby`. Das Einfügen eines `aria-label` bietet eine Methode, um den sichtbaren Inhalt eines Timer-Elements mit Text zu versehen, der nicht angezeigt wird, wenn ein Bildschirmleseprogramm den Inhalt liest. Das Benennen eines Timers ist nicht erforderlich, daher können beide Attribute weggelassen werden, wenn nichts geeignet ist.

- [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)

  - : Elemente mit der Rolle `timer` haben einen impliziten `aria-live` Wert von `off`.

## Barrierefreiheitserwägungen

Wenn ein Zeitlimit erforderlich ist, zum Beispiel aus Sicherheitsgründen, sollte der Benutzer die Möglichkeit haben, es auszuschalten oder zu verlängern. Diese Einschränkung gilt nicht, wenn das Zeitlimit durch ein Live-Ereignis, wie eine Auktion oder ein Spiel, verursacht wird, oder wenn die Zeit zur Fertigstellung des Formulars für eine gültige Einreichung wesentlich ist.

## Beispiele

### Ein einfacher Timer

Dieses Beispiel hat einen Timer, der von 30 Sekunden auf 0 Sekunden herunterzählt. Der gesamte Anzeigebereich hat `role="timer"` und auch [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic), um zu kennzeichnen, dass die Region als Ganzes und nicht nur die geänderten Regionen angekündigt werden soll. Aufgrund des impliziten `aria-live="off"` werden Änderungen standardmäßig nicht angekündigt; wir ändern manuell die Rolle zu `"alert"`, wenn der Timer noch 10 Sekunden verbleibend hat, damit er einmal angekündigt wird.

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
- [ARIA Live-Regionen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions)
