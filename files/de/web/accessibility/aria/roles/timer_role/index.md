---
title: "ARIA: timer-Rolle"
slug: Web/Accessibility/ARIA/Roles/timer_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Die **`timer`**-Rolle signalisiert unterstützenden Technologien, dass ein Element ein numerischer Zähler ist, der die vergangene Zeit ab einem Ausgangspunkt oder die verbleibende Zeit bis zu einem Endpunkt anzeigt. Unterstützende Technologien kündigen keine Aktualisierungen an einen Timer an, da er einen impliziten [aria-live](https://www.w3.org/TR/wai-aria/#aria-live)-Wert von `off` hat.

```html
<div role="timer" id="eggtimer">0</div>
```

Dieses definiert dieses `div`-Element als einen Timer ohne verbleibende Zeit.

## Beschreibung

Die `timer`-Rolle signalisiert unterstützenden Technologien, dass dieser Teil des Webinhalts eine Live-Region enthält, die einen Timer mit der verbleibenden oder vergangenen Zeit anzeigt. Der innere Text eines Timers sollte eine sich aktualisierende aktuelle Zeitmessung sein. Auch wenn der Wert nicht unbedingt maschinenlesbar sein muss, sollte er regelmäßig in gleichmäßigen Abständen aktualisiert werden, es sei denn, der Timer ist pausiert oder hat seinen Endpunkt erreicht.

Zusammen mit [`alert`](/de/docs/Web/Accessibility/ARIA/Roles/alert_role), [`log`](/de/docs/Web/Accessibility/ARIA/Roles/log_role), [`marquee`](/de/docs/Web/Accessibility/ARIA/Roles/marquee_role) und [`status`](/de/docs/Web/Accessibility/ARIA/Roles/status_role) ist die `timer`-Rolle eine Live-Region und kann durch [Live-Region](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)-Attribute modifiziert werden.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) oder [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)

  - : Einige Screenreader kündigen den Namen eines Timer-Elements an, bevor sie dessen Inhalt ankündigen. Wenn ein Name sichtbar ist, referenzieren Sie ihn mit `aria-labelledby`. Die Einbindung eines `aria-label` bietet eine Methode, um den sichtbaren Inhalt eines Timer-Elements mit Text zu versehen, der beim Lesen des Inhalts durch einen Screenreader nicht angezeigt wird. Eine Benennung eines Timers ist nicht erforderlich, daher können beide Attribute ausgelassen werden, wenn nichts Sinnvolles vorhanden ist.

- [`aria-live`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-live)

  - : Elemente mit der `timer`-Rolle haben einen impliziten [aria-live](https://www.w3.org/TR/wai-aria/#aria-live)-Wert von `off`.

## Barrierefreiheitsbedenken

Wenn eine Zeitbegrenzung erforderlich ist, beispielsweise aus Sicherheitsgründen, sollte der Benutzer die Möglichkeit haben, sie zu deaktivieren oder zu verlängern. Diese Einschränkung gilt nicht, wenn die Zeitbegrenzung aufgrund eines Live-Events, wie einer Auktion oder eines Spiels, erforderlich ist oder wenn die Zeit zur Vervollständigung des Formulars für eine gültige Einreichung entscheidend ist.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA: `alert`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/alert_role)
- [ARIA: `log`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/log_role)
- [ARIA: `marquee`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/marquee_role)
- [ARIA: `status`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/status_role)
- [ARIA Live-Regionen](/de/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)
- [`timer` Beispiel auf Codepen](https://codepen.io/heydon/pres/NGgNjZ) von Heydon Pickering
