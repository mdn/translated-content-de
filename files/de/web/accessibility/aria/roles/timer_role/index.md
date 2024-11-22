---
title: "ARIA: Rolle `timer`"
slug: Web/Accessibility/ARIA/Roles/timer_role
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{AccessibilitySidebar}}

Die **`timer`**-Rolle signalisiert unterstützenden Technologien, dass ein Element ein numerischer Zähler ist, der die verstrichene Zeit ab einem Startpunkt oder die verbleibende Zeit bis zu einem Endpunkt angibt. Unterstützende Technologien werden Aktualisierungen eines Timers nicht ankündigen, da dieser eine implizite [aria-live](https://www.w3.org/TR/wai-aria/#aria-live)-Wert von `off` hat.

```html
<div role="timer" id="eggtimer">0</div>
```

Dieser `div`-Element wird als Timer ohne verbleibende Zeit definiert.

## Beschreibung

Die `timer`-Rolle signalisiert unterstützenden Technologien, dass dieser Teil des Webinhalts eine Live-Region ist, die einen Timer enthält, der die verbleibende Zeit oder die verstrichene Zeit angibt. Der innere Text eines Timers sollte eine aktualisierte aktuelle Zeitangabe sein. Während der Wert nicht unbedingt maschinenlesbar sein muss, sollte er kontinuierlich in regelmäßigen Abständen aktualisiert werden, es sei denn, der Timer ist angehalten oder erreicht seinen Endpunkt.

Zusammen mit [`alert`](/de/docs/Web/Accessibility/ARIA/Roles/alert_role), [`log`](/de/docs/Web/Accessibility/ARIA/Roles/log_role), [`marquee`](/de/docs/Web/Accessibility/ARIA/Roles/marquee_role) und [`status`](/de/docs/Web/Accessibility/ARIA/Roles/status_role) ist die `timer`-Rolle eine Live-Region und kann durch [Live-Regio](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)n-Attribute modifiziert werden.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)

  - : Einige Screenreader kündigen den Namen eines Timer-Elements an, bevor sie dessen Inhalt vorlesen. Wenn ein Name sichtbar ist, referenzieren Sie ihn mit `aria-labelledby`. Das Hinzufügen eines `aria-label` bietet eine Methode, den sichtbaren Inhalt eines Timer-Elements mit Text zu versehen, der nicht angezeigt wird, wenn ein Screenreader den Inhalt liest. Das Benennen eines Timers ist nicht erforderlich, daher können beide Attribute weggelassen werden, wenn nichts geeignet ist.

- [`aria-live`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-live)

  - : Elemente mit der Rolle `timer` haben einen impliziten [aria-live](https://www.w3.org/TR/wai-aria/#aria-live)-Wert von `off`.

## Barrierefreiheitsbedenken

Wenn ein Zeitlimit erforderlich ist, zum Beispiel aus Sicherheitsgründen, sollte der Benutzer die Möglichkeit haben, es abzuschalten oder zu verlängern. Diese Einschränkung gilt nicht, wenn das Zeitlimit aufgrund eines Live-Events, wie z.B. einer Auktion oder eines Spiels, erforderlich ist, oder wenn die Zeit, um das Formular abzuschließen, für eine gültige Übermittlung entscheidend ist.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA: `alert` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/alert_role)
- [ARIA: `log` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/log_role)
- [ARIA: `marquee` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/marquee_role)
- [ARIA: `status` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/status_role)
- [ARIA Live-Regionen](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)
- [`timer` Beispiel auf CodePen](https://codepen.io/heydon/pres/NGgNjZ) von Heydon Pickering
