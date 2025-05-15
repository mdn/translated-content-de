---
title: 'ARIA: Rolle "timer"'
short-title: timer
slug: Web/Accessibility/ARIA/Reference/Roles/timer_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Die **`timer`** Rolle zeigt unterstützenden Technologien an, dass ein Element ein numerischer Zähler ist, der entweder die verstrichene Zeit seit einem Startpunkt oder die verbleibende Zeit bis zu einem Endpunkt auflistet. Unterstützende Technologien geben keine Aktualisierungen eines Timers bekannt, da dieser implizit den [aria-live](https://www.w3.org/TR/wai-aria/#aria-live) Wert `off` hat.

```html
<div role="timer" id="eggtimer">0</div>
```

Dies definiert dieses `div` Element als einen Timer ohne verbleibende Zeit.

## Beschreibung

Die Rolle `timer` weist unterstützende Technologien darauf hin, dass dieser Teil des Webinhalts eine dynamische Region enthält, die einen Timer mit der verbleibenden oder verstrichenen Zeit auflistet. Der innere Text eines Timers sollte eine sich ständig aktualisierende aktuelle Zeitmessung sein. Während der Wert nicht unbedingt maschinenlesbar sein muss, sollte er in regelmäßigen Abständen kontinuierlich aktualisiert werden, es sei denn, der Timer ist angehalten oder erreicht seinen Endpunkt.

Zusammen mit [`alert`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role), [`log`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/log_role), [`marquee`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/marquee_role) und [`status`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/status_role) ist die `timer` Rolle eine dynamische Region und kann durch [dynamische Regionen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions) Attribute modifiziert werden.

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)

  - : Einige Screenreader kündigen den Namen eines Timer-Elements an, bevor sie dessen Inhalte ankündigen. Wenn ein Name sichtbar ist, verweisen Sie mit `aria-labelledby` darauf. Die Einbeziehung eines `aria-label` bietet eine Methode, um den sichtbaren Inhalt eines Timer-Elements mit nicht angezeigtem Text zu versehen, wenn ein Screenreader den Inhalt liest. Die Benennung eines Timers ist nicht erforderlich, daher können beide Attribute weggelassen werden, wenn nichts Passendes vorhanden ist.

- [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)

  - : Elemente mit der Rolle `timer` haben einen impliziten [aria-live](https://www.w3.org/TR/wai-aria/#aria-live) Wert von `off`.

## Barrierefreiheitsbedenken

Wenn eine zeitliche Begrenzung erforderlich ist, zum Beispiel aus Sicherheitsgründen, sollte der Benutzer die Möglichkeit haben, sie zu deaktivieren oder zu verlängern. Diese Einschränkung gilt nicht, wenn die zeitliche Begrenzung aufgrund eines Live-Events, wie einer Auktion oder eines Spiels, erforderlich ist oder wenn die Zeit zur Vervollständigung des Formulars für eine gültige Einreichung entscheidend ist.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA: `alert` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role)
- [ARIA: `log` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/log_role)
- [ARIA: `marquee` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/marquee_role)
- [ARIA: `status` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/status_role)
- [ARIA dynamische Regionen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions)
- [`timer` Beispiel auf CodePen](https://codepen.io/heydon/pres/NGgNjZ) von Heydon Pickering
