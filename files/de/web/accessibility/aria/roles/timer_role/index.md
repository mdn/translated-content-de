---
title: "ARIA: Timer-Rolle"
slug: Web/Accessibility/ARIA/Roles/timer_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Die **`timer`** Rolle zeigt unterstützenden Technologien an, dass ein Element einen numerischen Zähler darstellt, der die vergangene Zeit seit einem Startpunkt oder die verbleibende Zeit bis zu einem Endpunkt auflistet. Unterstützende Technologien werden keine Aktualisierungen eines Timers ankündigen, da er einen impliziten [aria-live](https://www.w3.org/TR/wai-aria/#aria-live) Wert von `off` hat.

```html
<div role="timer" id="eggtimer">0</div>
```

Dies definiert dieses `div` Element als einen Timer ohne verbleibende Zeit.

## Beschreibung

Die `timer` Rolle zeigt unterstützenden Technologien an, dass dieser Teil des Webinhalts eine Live-Region ist, die einen Timer mit der verbleibenden Zeit oder der vergangenen Zeit auflistet. Der innere Text eines Timers sollte eine aktualisierende aktuelle Zeitmessung sein. Während der Wert nicht unbedingt maschinenlesbar sein muss, sollte er in regelmäßigen Abständen kontinuierlich aktualisiert werden, es sei denn, der Timer wird pausiert oder erreicht seinen Endpunkt.

Zusammen mit [`alert`](/de/docs/Web/Accessibility/ARIA/Roles/alert_role), [`log`](/de/docs/Web/Accessibility/ARIA/Roles/log_role), [`marquee`](/de/docs/Web/Accessibility/ARIA/Roles/marquee_role), und [`status`](/de/docs/Web/Accessibility/ARIA/Roles/status_role) ist die `timer` Rolle eine Live-Region und kann durch [Live-Region](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) Attribute modifiziert werden.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)

  - : Einige Bildschirmleser sprechen den Namen eines Timer-Elements an, bevor sie dessen Inhalt ankündigen. Wenn ein Name sichtbar ist, sollten Sie ihn mit `aria-labelledby` referenzieren. Ein `aria-label` einzuschließen, bietet eine Methode, den sichtbaren Inhalt eines Timer-Elements mit Text zu versehen, der nicht angezeigt wird, wenn ein Bildschirmleser den Inhalt liest. Das Benennen eines Timers ist nicht erforderlich, daher können beide Attribute weggelassen werden, wenn nichts Passendes vorhanden ist.

- [`aria-live`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-live)

  - : Elemente mit der Rolle `timer` haben einen impliziten [aria-live](https://www.w3.org/TR/wai-aria/#aria-live) Wert von `off`.

## Barrierefreiheitsbedenken

Wenn ein Zeitlimit erforderlich ist, zum Beispiel aus Sicherheitsgründen, sollte der Benutzer die Möglichkeit haben, es auszuschalten oder zu verlängern. Diese Einschränkung gilt nicht, wenn das Zeitlimit auf ein Live-Ereignis wie eine Auktion oder ein Spiel zurückzuführen ist oder wenn die Zeit, um das Formular abzuschließen, für eine gültige Einreichung wesentlich ist.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA: `alert` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/alert_role)
- [ARIA: `log` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/log_role)
- [ARIA: `marquee` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/marquee_role)
- [ARIA: `status` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/status_role)
- [ARIA Live-Regionen](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)
- [`timer` Beispiel auf Codepen](https://codepen.io/heydon/pres/NGgNjZ) von Heydon Pickering
