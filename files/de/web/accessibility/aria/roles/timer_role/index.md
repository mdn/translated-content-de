---
title: "ARIA: timer-Rolle"
slug: Web/Accessibility/ARIA/Roles/timer_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Die **`timer`**-Rolle zeigt assistiven Technologien an, dass ein Element ein numerischer Zähler ist, der die verstrichene Zeit ab einem Startpunkt oder die verbleibende Zeit bis zu einem Endpunkt anzeigt. Assistive Technologien werden Aktualisierungen eines Timers nicht ankündigen, da er einen impliziten [aria-live](https://www.w3.org/TR/wai-aria/#aria-live)-Wert von `off` hat.

```html
<div role="timer" id="eggtimer">0</div>
```

Dies definiert dieses `div`-Element als Timer ohne verbleibende Zeit.

## Beschreibung

Die `timer`-Rolle zeigt assistiven Technologien an, dass dieser Teil des Webinhalts eine Live-Region ist, die einen Timer enthält, der die verbleibende oder verstrichene Zeit anzeigt. Der Innentext eines Timers sollte eine sich aktualisierende aktuelle Zeitmessung sein. Obwohl der Wert nicht zwingend maschinenlesbar sein muss, sollte er kontinuierlich in regelmäßigen Abständen aktualisiert werden, es sei denn, der Timer wird pausiert oder erreicht seinen Endpunkt.

Zusammen mit [`alert`](/de/docs/Web/Accessibility/ARIA/Roles/alert_role), [`log`](/de/docs/Web/Accessibility/ARIA/Roles/log_role), [`marquee`](/de/docs/Web/Accessibility/ARIA/Roles/marquee_role) und [`status`](/de/docs/Web/Accessibility/ARIA/Roles/status_role) ist die `timer`-Rolle eine Live-Region und kann durch [Live-Region](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)-Attribute modifiziert werden.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)

  - : Einige Screenreader kündigen den Namen eines Timer-Elements an, bevor sie dessen Inhalt ankündigen. Wenn ein Name sichtbar ist, verweisen Sie darauf mit `aria-labelledby`. Das Hinzufügen eines `aria-label` bietet eine Methode, um den sichtbaren Inhalt eines Timer-Elements mit einem Text einzuleiten, der nicht angezeigt wird, wenn ein Screenreader den Inhalt liest. Es ist nicht erforderlich, einen Timer zu benennen, daher können beide Attribute weggelassen werden, wenn nichts Passendes vorhanden ist.

- [`aria-live`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-live)

  - : Elemente mit der Rolle `timer` haben einen impliziten [aria-live](https://www.w3.org/TR/wai-aria/#aria-live)-Wert von `off`.

## Zugänglichkeitsbedenken

Falls eine Zeitbegrenzung erforderlich ist, beispielsweise aus Sicherheitsgründen, sollte der Benutzer die Möglichkeit haben, sie auszuschalten oder zu verlängern. Diese Einschränkung gilt nicht, wenn die Zeitbegrenzung aufgrund eines Live-Events, wie einer Auktion oder eines Spiels, erforderlich ist oder wenn die Zeit zur Fertigstellung eines Formulars für eine gültige Einreichung wesentlich ist.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA: `alert`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/alert_role)
- [ARIA: `log`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/log_role)
- [ARIA: `marquee`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/marquee_role)
- [ARIA: `status`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/status_role)
- [ARIA-Live-Regionen](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)
- [`timer`-Beispiel auf Codepen](https://codepen.io/heydon/pres/NGgNjZ) von Heydon Pickering
