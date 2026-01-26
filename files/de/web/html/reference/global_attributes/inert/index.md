---
title: Globale HTML-Attribut inert
short-title: inert
slug: Web/HTML/Reference/Global_attributes/inert
l10n:
  sourceCommit: 7c28cd21b705e7b7664d53b4d7822469ea8e6e15
---

Das **`inert`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) ist ein Boolean-Attribut, das anzeigt, dass das Element und alle seine flachen Baum-Nachfolger _inert_ werden. Das `inert`-Attribut kann zu Inhaltsbereichen hinzugefügt werden, die nicht interaktiv sein sollen. Wenn ein Element inert ist, werden es und alle Nachfolger des Elements, einschließlich normalerweise interaktiver Elemente wie Links, Buttons und Formularelemente, deaktiviert, da sie keinen Fokus erhalten oder angeklickt werden können. Das `inert`-Attribut kann auch zu Elementen hinzugefügt werden, die außerhalb des Bildschirms sein oder verborgen sein sollen. Ein inertes Element wird zusammen mit seinen Nachfolgern aus der Tabulatorreihenfolge und dem Zugänglichkeitsbaum entfernt.

Vom Modal {{htmlelement("dialog")}}s, die mit [`showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) erzeugt werden, entkommen der Inertheit, was bedeutet, dass sie die Inertheit von ihren Vorfahren nicht erben, aber inert gemacht werden können, indem das `inert`-Attribut ausdrücklich auf sie gesetzt wird. Kein anderes Element kann der Inertheit entkommen.

> [!NOTE]
> Obwohl `inert` ein globales Attribut ist und auf jedes Element angewendet werden kann, wird es in der Regel für Inhaltsabschnitte verwendet. Um einzelne Steuerelemente "inert" zu machen, ziehen Sie in Betracht, das [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)-Attribut zu verwenden, zusammen mit CSS {{cssxref(":disabled")}}-Stilen.

Inerte HTML-Elemente und ihre flachen Baum-Nachfolger:

- Es werden keine [`click`](/de/docs/Web/API/Element/click_event)-Ereignisse ausgelöst, wenn darauf geklickt wird.
- Können nicht fokussiert werden, und [`focus`](/de/docs/Web/API/Element/focus_event)-Ereignisse können nicht darauf ausgelöst werden.
- Sind nicht über die Suchfunktion des Browsers durchsuchbar (keiner ihrer Inhalte wird gefunden/übereinstimmt).
- Verhindern, dass Benutzer den Text innerhalb ihres Inhalts auswählen — ähnlich wie die Verwendung der CSS-Eigenschaft {{cssxref("user-select")}} zur Deaktivierung der Textauswahl.
- Inhalte, die ansonsten bearbeitbar wären, können nicht bearbeitet werden. Dazu gehören beispielsweise die Inhalte von textuellen {{htmlelement("input")}}-Felder und Textelemente mit [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) auf ihnen.
- Sind für unterstützende Technologien unsichtbar, da sie aus dem Zugänglichkeitsbaum ausgeschlossen sind.

Die folgenden anderen Funktionen können verwendet werden, um ein Element und seine Nachfolger in einen inerten Zustand zu versetzen:

- Die CSS-Eigenschaft {{cssxref("interactivity")}}.
- Die [`HTMLElement.inert`](/de/docs/Web/API/HTMLElement/inert) DOM-Eigenschaft.

## Zugänglichkeitsbedenken

Verwenden Sie sorgfältige Überlegungen zur Zugänglichkeit, wenn Sie das `inert`-Attribut anwenden. Standardmäßig gibt es keine visuelle Möglichkeit festzustellen, ob ein Element oder sein Unterbaum inert ist oder nicht. Als Webentwickler liegt es in Ihrer Verantwortung, die aktiven und inerten Teile des Inhalts klar zu kennzeichnen.

Während Sie visuelle und nicht-visuelle Hinweise zur Inertheit von Inhalten bereitstellen, denken Sie auch daran, dass das visuelle Viewport möglicherweise nur Abschnitte von Inhalten enthält. Benutzer können in einen kleinen Abschnitt von Inhalten hineingezoomt sein, oder Benutzer können die Inhalte gar nicht sehen. Nicht offensichtliche Inertheit kann zu Frustration und einer schlechten Benutzererfahrung führen.

## Beispiele

In diesem Beispiel werden das zweite {{htmlelement("div")}} und alle seine Nachfolger über das `inert`-Attribut inert gemacht:

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

- HTML-Element {{HTMLElement("dialog")}}
- [`HTMLElement.inert`](/de/docs/Web/API/HTMLElement/inert) DOM-Eigenschaft
- CSS-Eigenschaft {{cssxref("interactivity")}}
