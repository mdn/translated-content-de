---
title: HTML `inert` globales Attribut
short-title: inert
slug: Web/HTML/Reference/Global_attributes/inert
l10n:
  sourceCommit: 4cb9d89a204a9532370693b982e8a3b274a874b1
---

Das **`inert`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) ist ein boolesches Attribut, welches anzeigt, dass das Element und alle seine flachen Baum-Nachkommen _inert_ werden. Das `inert` Attribut kann zu Inhaltsbereichen hinzugefügt werden, die nicht interaktiv sein sollen. Wenn ein Element inert ist, sind es auch alle Nachkommen des Elements, einschließlich normalerweise interaktiver Elemente wie Links, Buttons und Formularelemente, da sie keinen Fokus erhalten oder angeklickt werden können. Das `inert` Attribut kann auch zu Elementen hinzugefügt werden, die vom Bildschirm verschwinden oder verborgen sein sollen. Ein inert Element und seine Nachkommen werden aus der Tab-Reihenfolge und dem Zugänglichkeitsbaum entfernt.

Modal-{{htmlelement("dialog")}}e, die mit [`showModal()`](/de/docs/Web/API/HTMLDialogElement/showModal) erstellt werden, entgehen der Inertheit, was bedeutet, dass sie die Inertheit nicht von ihren Vorfahren erben, aber zur Inertheit gemacht werden können, indem das `inert` Attribut explizit auf ihnen gesetzt wird. Kein anderes Element kann der Inertheit entgehen.

> [!NOTE]
> Obwohl `inert` ein globales Attribut ist und auf jedes Element angewendet werden kann, wird es generell für Inhaltsabschnitte verwendet. Um einzelne Steuerungselemente „inert“ zu machen, sollten Sie stattdessen das [`disabled`](/de/docs/Web/HTML/Reference/Attributes/disabled) Attribut zusammen mit CSS-Styles [`:disabled`](/de/docs/Web/CSS/Reference/Selectors/:disabled) verwenden.

Inerte HTML-Elemente und ihre flachen Baum-Nachkommen:

- Lösen keine [`click`](/de/docs/Web/API/Element/click_event)-Events aus, wenn sie angeklickt werden.
- Können nicht fokussiert werden und [`focus`](/de/docs/Web/API/Element/focus_event)-Events können auf ihnen nicht ausgelöst werden.
- Sind nicht über die Suchfunktion der Seite im Browser durchsuchbar (keiner ihrer Inhalte wird gefunden/gepasst).
- Verhindern, dass Nutzer Text innerhalb ihrer Inhalte auswählen können — ähnlich dem Einsatz der CSS-Eigenschaft {{cssxref("user-select")}}, um die Textauswahl zu deaktivieren.
- Können keinen Inhalt bearbeiten, der ansonsten editierbar wäre. Dazu gehören beispielsweise die Inhalte von textuellen {{htmlelement("input")}} Feldern und Textelemente mit [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable).
- Werden vor unterstützenden Technologien versteckt, da sie aus dem Zugänglichkeitsbaum ausgeschlossen sind.

Die folgenden anderen Funktionen können verwendet werden, um ein Element und seine Nachkommen in einen inerten Zustand zu versetzen:

- Die CSS-Eigenschaft {{cssxref("interactivity")}}.
- Die [`HTMLElement.inert`](/de/docs/Web/API/HTMLElement/inert) DOM-Eigenschaft.

## Barrierefreiheitsbedenken

Wenden Sie das `inert` Attribut mit Bedacht im Hinblick auf Barrierefreiheit an. Standardmäßig gibt es keinen visuellen Hinweis darauf, ob ein Element oder sein Teilbaum inert ist oder nicht. Als Webentwickler sind Sie verantwortlich dafür, klar anzuzeigen, welche Inhaltsbereiche aktiv und welche inert sind.

Während Sie visuelle und nicht-visuelle Hinweise zur Inertheit von Inhalten bereitstellen, denken Sie auch daran, dass der visuelle Viewport nur Abschnitte von Inhalten enthalten kann. Nutzer könnten in einen kleinen Abschnitt von Inhalten hereinzoomen oder möglicherweise die Inhalte überhaupt nicht sehen. Dass inerte Abschnitte nicht offensichtlich inert sind, kann zu Frustration und einem schlechten Benutzererlebnis führen.

## Beispiele

In diesem Beispiel wird der zweite {{htmlelement("div")}} und alle seine Nachkommen über das `inert` Attribut inert gemacht:

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
- [`HTMLElement.inert`](/de/docs/Web/API/HTMLElement/inert) DOM-Eigenschaft
- CSS-Eigenschaft {{cssxref("interactivity")}}
