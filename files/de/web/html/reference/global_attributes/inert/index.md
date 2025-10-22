---
title: HTML inert globales Attribut
short-title: inert
slug: Web/HTML/Reference/Global_attributes/inert
l10n:
  sourceCommit: 3ff38e7687b65e43fe821a904ff52778312b8d36
---

Das **`inert`**-[globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) ist ein Boolesches Attribut, das anzeigt, dass das Element und alle seine Nachkommen im flachen Baum _inert_ werden. Das `inert`-Attribut kann zu Inhaltsbereichen hinzugefügt werden, die nicht interaktiv sein sollen. Wenn ein Element inert ist, sind es auch alle Nachkommen des Elements, einschließlich normalerweise interaktiver Elemente wie Links, Schaltflächen und Formularelemente, da sie nicht den Fokus erhalten oder angeklickt werden können. Das `inert`-Attribut kann auch zu Elementen hinzugefügt werden, die außerhalb des Bildschirms oder verborgen sein sollen. Ein inertes Element wird zusammen mit seinen Nachkommen aus der Tabulatorreihenfolge und dem Zugänglichkeitsbaum entfernt.

Modale {{htmlelement("dialog")}}e, die mit [`showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) generiert wurden, entkommen der Inertheit, was bedeutet, dass sie die Inertheit nicht von ihren Vorfahren erben, aber inert gemacht werden können, indem das `inert`-Attribut explizit auf ihnen gesetzt wird. Kein anderes Element kann der Inertheit entkommen.

> [!NOTE]
> Während `inert` ein globales Attribut ist und auf jedes Element angewendet werden kann, wird es in der Regel für Inhaltsbereiche verwendet. Um einzelne Steuerelemente "inert" zu machen, verwenden Sie stattdessen das [`disabled-`](/de/docs/Web/HTML/Reference/Attributes/disabled)Attribut, zusammen mit CSS-[`:disabled-`](/de/docs/Web/CSS/:disabled)Stilen.

Inerte HTML-Elemente und ihre Nachkommen im flachen Baum:

- Lösen keine [`click-`](/de/docs/Web/API/Element/click_event)Ereignisse aus, wenn auf sie geklickt wird.
- Können nicht fokussiert werden und es können keine [`focus-`](/de/docs/Web/API/Element/focus_event)Ereignisse auf sie ausgelöst werden.
- Können nicht über die Suchfunktion des Browsers durchsucht werden (keiner ihrer Inhalte wird gefunden/übereinstimmt).
- Erlauben es Benutzern nicht, Text innerhalb ihres Inhalts auszuwählen – ähnlich wie mit der CSS-Eigenschaft {{cssxref("user-select")}}, um die Textauswahl zu deaktivieren.
- Können keinen ansonsten bearbeitbaren Inhalt bearbeiten. Dies umfasst beispielsweise die Inhalte textueller {{htmlelement("input")}}-Felder und Textelemente, die mit [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) ausgestattet sind.
- Sind für Hilfstechnologien verborgen, da sie aus dem Zugänglichkeitsbaum ausgeschlossen sind.

Die folgenden anderen Funktionen können verwendet werden, um ein Element und seine Nachkommen in einen inert Zustand zu versetzen:

- Die CSS-Eigenschaft {{cssxref("interactivity")}}.
- Die [`HTMLElement.inert-`](/de/docs/Web/API/HTMLElement/inert)DOM-Eigenschaft.

## Zugänglichkeitsaspekte

Überlegen Sie sorgfältig, welche Auswirkungen die Anwendung des `inert`-Attributes auf die Zugänglichkeit hat. Standardmäßig gibt es keinen visuellen Weg, um festzustellen, ob ein Element oder sein Unterbaum inert ist. Als Webentwickler liegt es in Ihrer Verantwortung, die aktiven und die inert gezeichneten Inhaltsabschnitte klar zu unterscheiden.

Während Sie visuelle und nicht-visuelle Hinweise auf die Inertheit von Inhalten geben, denken Sie daran, dass das visuelle Ansichtsfenster möglicherweise nur Abschnitte von Inhalten enthält. Benutzer können in einen kleinen Abschnitt von Inhalten eingezoomt sein, oder Benutzer können die Inhalte überhaupt nicht sehen. Wenn inerte Abschnitte nicht offensichtlich inert sind, kann dies zu Frustration und schlechter Benutzererfahrung führen.

## Beispiele

In diesem Beispiel wird der zweite {{htmlelement("div")}} und alle seine Nachkommen durch das `inert`-Attribut inert gemacht:

```html
<div>
  <label for="button1">Button 1</label>
  <button id="button1">I am not inert</button>
</div>
<div inert>
  <label for="button2">Button 2</label>
  <button id="button2">I am inert</button>
</div>
```

{{ EmbedLiveSample('Examples', 560, 200) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTML {{HTMLElement("dialog")}}-Element
- [`HTMLElement.inert`](/de/docs/Web/API/HTMLElement/inert) DOM-Eigenschaft
- CSS {{cssxref("interactivity")}}-Eigenschaft
