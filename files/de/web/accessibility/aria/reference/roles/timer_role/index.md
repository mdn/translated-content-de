---
title: "ARIA: timer-Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/timer_role
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Die **`timer`**-Rolle zeigt unterstützenden Technologien an, dass ein Element ein numerischer Zähler ist, der die verstrichene Zeit von einem Startpunkt oder die verbleibende Zeit bis zu einem Endpunkt auflistet. Unterstützende Technologien geben keine Aktualisierungen eines Timers bekannt, da er einen impliziten [aria-live](https://www.w3.org/TR/wai-aria/#aria-live)-Wert von `off` hat.

```html
<div role="timer" id="eggtimer">0</div>
```

Dies definiert dieses `div`-Element als einen Timer ohne verbleibende Zeit.

## Beschreibung

Die `timer`-Rolle zeigt unterstützenden Technologien an, dass dieser Teil des Webinhalts eine Live-Region ist, die einen Timer enthält, der die verbleibende oder verstrichene Zeit auflistet. Der innere Text eines Timers sollte eine sich aktualisierende aktuelle Zeitmessung sein. Obwohl der Wert nicht unbedingt maschinenlesbar sein muss, sollte er kontinuierlich in regelmäßigen Abständen aktualisiert werden, es sei denn, der Timer ist angehalten oder erreicht seinen Endpunkt.

Zusammen mit [`alert`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role), [`log`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/log_role), [`marquee`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/marquee_role) und [`status`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/status_role) ist die `timer`-Rolle eine Live-Region und kann durch [Live-Region](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions)-Attribute modifiziert werden.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)

  - : Einige Screenreader kündigen den Namen eines Timer-Elements an, bevor sie den Inhalt ankündigen. Wenn ein Name sichtbar ist, referenzieren Sie ihn mit `aria-labelledby`. Das Einschließen eines `aria-label` bietet eine Methode, den sichtbaren Inhalt eines Timer-Elements mit einem Text einzuleiten, der nicht angezeigt wird, wenn ein Screenreader den Inhalt liest. Die Benennung eines Timers ist nicht erforderlich, sodass, wenn nichts Angemessenes vorhanden ist, beide Attribute weggelassen werden können.

- [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)

  - : Elemente mit der Rolle `timer` haben einen impliziten [aria-live](https://www.w3.org/TR/wai-aria/#aria-live)-Wert von `off`.

## Barrierefreiheitsbedenken

Wenn ein Zeitlimit festgelegt werden muss, beispielsweise aus Sicherheitsgründen, sollte der Benutzer die Möglichkeit haben, es auszuschalten oder zu verlängern. Diese Einschränkung gilt nicht, wenn das Zeitlimit aufgrund eines Live-Ereignisses, wie einer Auktion oder eines Spiels, besteht, oder wenn die Zeit für das Ausfüllen des Formulars wesentlich für eine gültige Einreichung ist.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA: `alert`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role)
- [ARIA: `log`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/log_role)
- [ARIA: `marquee`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/marquee_role)
- [ARIA: `status`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/status_role)
- [ARIA-Live-Regionen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions)
- [`timer`-Beispiel auf CodePen](https://codepen.io/heydon/pres/NGgNjZ) von Heydon Pickering
