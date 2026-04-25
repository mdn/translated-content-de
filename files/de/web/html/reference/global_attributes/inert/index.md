---
title: "`inert` HTML globales Attribut"
short-title: inert
slug: Web/HTML/Reference/Global_attributes/inert
l10n:
  sourceCommit: 9c70c6ff09189cad43d40e241fbd2fe67349c3c2
---

Das **`inert`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) ist ein Boolesches Attribut, das angibt, dass das Element und alle seine Nachkommen im flachen Baum _inert_ werden. Das `inert`-Attribut kann zu Inhaltsbereichen hinzugefügt werden, die nicht interaktiv sein sollen. Wenn ein Element inert ist, werden es und alle seine Nachkommen, einschließlich normalerweise interaktiver Elemente wie Links, Buttons und Formularelementen, deaktiviert, da sie keinen Fokus erhalten oder angeklickt werden können. Das `inert`-Attribut kann auch zu Elementen hinzugefügt werden, die außerhalb des Bildschirms oder versteckt sein sollen. Ein inertes Element und seine Nachkommen werden aus der Tab-Reihenfolge und dem Zugänglichkeitsbaum entfernt.

Modal-{{htmlelement("dialog")}}s, die mit [`showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) erzeugt werden, entkommen der Inertheit. Das bedeutet, dass sie die Inertheit nicht von ihren Vorfahren erben, aber durch das explizite Setzen des `inert`-Attributs an ihnen selbst inert gemacht werden können. Kein anderes Element kann der Inertheit entkommen.

> [!NOTE]
> Obwohl `inert` ein globales Attribut ist und auf jedes Element angewendet werden kann, wird es im Allgemeinen für Inhaltsabschnitte verwendet. Um einzelne Steuerungen "inert" zu machen, ziehen Sie in Betracht, das [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled)-Attribut zusammen mit CSS-{{cssxref(":disabled")}}-Stilen zu verwenden.

Inerte HTML-Elemente und ihre Nachkommen im flachen Baum:

- Lösen keine [`click`](/de/docs/Web/API/Element/click_event)-Ereignisse aus, wenn sie angeklickt werden.
- Können nicht fokussiert werden, und [`focus`](/de/docs/Web/API/Element/focus_event)-Ereignisse können darauf nicht ausgelöst werden.
- Sind über die Suchfunktion des Browsers (find-in-page) nicht durchsuchbar (keiner ihrer Inhalte wird gefunden/übereinstimmt).
- Erlauben es den Benutzern nicht, Text innerhalb ihres Inhalts auszuwählen – ähnlich wie beim Verwenden der CSS-Eigenschaft {{cssxref("user-select")}}, um Textauswahl zu deaktivieren.
- Können keinen sonst bearbeitbaren Inhalt bearbeiten. Dies schließt zum Beispiel die Inhalte von textuellen {{htmlelement("input")}}-Feldern und Textelementen ein, bei denen [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) gesetzt wurde.
- Sind für unterstützende Technologien unsichtbar, da sie aus dem Zugänglichkeitsbaum ausgeschlossen sind.

Die folgenden anderen Funktionen können verwendet werden, um ein Element und seine Nachkommen in einen inerten Zustand zu versetzen:

- Die CSS-Eigenschaft {{cssxref("interactivity")}}.
- Die [`HTMLElement.inert`](/de/docs/Web/API/HTMLElement/inert)-DOM-Eigenschaft.

## Barrierefreiheitsbedenken

Verwenden Sie bei der Anwendung des `inert`-Attributs eine sorgfältige Abwägung der Barrierefreiheit. Standardmäßig gibt es keine sichtbare Möglichkeit zu erkennen, ob ein Element oder sein Teilbaum inert ist oder nicht. Als Webentwickler liegt es in Ihrer Verantwortung, klar anzugeben, welche Inhaltsteile aktiv und welche inert sind.

Während Sie visuelle und nicht-visuelle Hinweise zur Inertheit von Inhalten bereitstellen, denken Sie auch daran, dass der visuelle Ansichtsbereich möglicherweise nur Inhaltsabschnitte enthält. Benutzer könnten in einen kleinen Abschnitt des Inhalts hineingezoomt sein oder den Inhalt möglicherweise überhaupt nicht sehen können. Inerte Abschnitte, die nicht offensichtlich inert sind, können zu Frustration und schlechter Benutzererfahrung führen.

## Beispiele

In diesem Beispiel werden das zweite {{htmlelement("div")}} und alle seine Nachkommen durch das `inert`-Attribut inert gemacht:

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

- HTML-{{HTMLElement("dialog")}}-Element
- [`HTMLElement.inert`](/de/docs/Web/API/HTMLElement/inert)-DOM-Eigenschaft
- CSS-{{cssxref("interactivity")}}-Eigenschaft
