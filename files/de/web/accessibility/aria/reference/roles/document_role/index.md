---
title: "ARIA: document-Rolle"
short-title: document
slug: Web/Accessibility/ARIA/Reference/Roles/document_role
l10n:
  sourceCommit: 8ce506d03084fbcd05507393cbb5e47e37d81ffa
---

Die `document`-Rolle ist für fokussierbare Inhalte innerhalb komplexer zusammengesetzter [Widgets](/de/docs/Web/Accessibility/ARIA/Reference/Roles/widget_role) oder [Anwendungen](/de/docs/Web/Accessibility/ARIA/Reference/Roles/application_role) vorgesehen. Sie ermöglicht es assistiven Technologien, wieder in einen Lesemodus zu wechseln.

## Beschreibung

Die `document`-Rolle ist für einen übergeordneten Container mit Inhalten vorgesehen, die Nutzer assistiver Technologien möglicherweise in einem Lesemodus durchsehen möchten. Sie ist nur für fokussierbare Bereiche innerhalb komplexer zusammengesetzter [Widgets](/de/docs/Web/Accessibility/ARIA/Reference/Roles/widget_role) oder [Anwendungen](/de/docs/Web/Accessibility/ARIA/Reference/Roles/application_role) sinnvoll. Die Rolle signalisiert assistiven Technologien mit Lese- oder Durchsuchmodus, dass sie zum Lesen der Inhalte dieses Elements den Dokumentmodus verwenden sollen.

```html
<div role="application">
  …
  <div id="InfoText" role="document" tabindex="0">
    <p>Some informational text goes here.</p>
  </div>
  …
  <button>Close</button>
</div>
```

Dieses Beispiel zeigt eine [Anwendung](/de/docs/Web/Accessibility/ARIA/Reference/Roles/application_role) mit einigen Steuerelementen und einem fokussierbaren `<div>`, dem die `role` `document` zugewiesen ist. Es enthält Informationstext, den Nutzer assistiver Technologien im Lesemodus lesen können, sobald sie mit der Tabulatortaste zu dem Element navigiert sind.

Standardmäßig werden Webseiten als Dokumente behandelt: Assistive Technologien wechseln beim Aufrufen einer neuen Webseite in den Durchsuch- oder Lesemodus. Verschiedene Rollen, darunter die Widget- und die Anwendungsrolle, können diesen Modus ändern. Die `document`-Rolle versetzt die assistive Technologie zurück in den Durchsuch- oder Lesemodus.

Die `document`-Rolle wird üblicherweise innerhalb einer Anwendung oder eines anderen interaktiven Widgets verwendet. Sie kennzeichnet einen Bereich eines komplexen zusammengesetzten Widgets, den Nutzer assistiver Technologien im Durchsuch- oder virtuellen Lesemodus lesen können sollten, sofern ein solcher Modus verfügbar ist.

Da assistive Technologien mit Lesemodus diesen standardmäßig für alle Elemente verwenden, denen keine Widget- oder Anwendungsrolle zugewiesen ist, ist die `document`-Rolle nur für fokussierbare Elemente innerhalb eines Widgets oder einer Anwendung sinnvoll, die als statischer Rich-Text gelesen werden sollen. Wenn Sie dem Element, das den Text innerhalb eines Widgets enthält, `role="document"` und `tabindex="0"` hinzufügen, können Screenreader-Nutzer mit der Tabulatortaste den Fokus auf das Dokumentelement setzen und den Text mit dem Lesecursor des Screenreaders lesen.

Assistive Technologien sollten in den Dokumentmodus zurückwechseln. Dabei können sie die für den dynamischen Kontext des übergeordneten Elements umbelegten Steuereingaben abfangen und die üblichen Eingabeereignisse wieder aktivieren, etwa Tastaturereignisse der Pfeiltasten nach oben und unten zur Steuerung des Lesecursors.

Innerhalb eines [Dialogs](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role) ist die `document`-Rolle nicht erforderlich. Ein Dialog ist ein Fenster, kein Widget und keine Anwendung. Assistive Technologien mit Lesemodus verwenden diesen daher bereits für den Inhalt des Dialogs.

### Tastaturinteraktionen

Das Element muss fokussierbar sein, damit assistive Technologien beim Erhalt des Fokus in den Lesemodus wechseln können. Das HTML-Attribut [`tabindex="0"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) macht das Element fokussierbar und nimmt es in die Tab-Reihenfolge auf. So können Nutzer mit der Tabulatortaste zu ihm navigieren und den Inhalt unmittelbar lesen.

### Erforderliche JavaScript-Funktionen

Keine.

## Beispiele

Ein Beispiel ist die Ansicht einer einzelnen Konversation in Gmail. Gmail ist eine Webanwendung. Innerhalb von Gmail übernimmt die Anwendung die meisten Interaktionen, die sonst vom User Agent gesteuert werden. Wenn der Tastaturfokus jedoch auf die einleitende Überschrift einer einzelnen Konversation mit deren Betreff gesetzt wird, können Screenreader-Nutzer die Befehle des Lesemodus verwenden, um die Nachrichten zu lesen, sie auf- oder zuzuklappen und mit ihnen zu interagieren. Sobald der Fokus zur Nachrichtenliste zurückkehrt – entweder durch Aktivieren der Zurück-Schaltfläche oder durch Drücken der entsprechenden Tastenkombination –, wird der Modus für die direkte Interaktion mit der Anwendung erneut aktiviert. Nutzer können dann mit den <kbd>Pfeiltasten</kbd> zu einer anderen Konversation in der Liste wechseln.

## Bewährte Vorgehensweisen

Stellen Sie stets sicher, dass ein Element mit der `document`-Rolle fokussierbar ist. Das Setzen von `tabindex="0"` ist dafür die gängigste Methode. Dadurch wird das Element allerdings auch in die Tab-Reihenfolge aufgenommen, was möglicherweise nicht zur übrigen Tastaturnavigation des Widgets passt. Wenn das umgebende Widget den Fokus beispielsweise mit den Pfeiltasten verwaltet, etwa mit einem [wandernden `tabindex`](/de/docs/Web/Accessibility/Guides/Keyboard-navigable_JavaScript_widgets#technique_1_roving_tabindex), stellen Sie sicher, dass Nutzer erkennen können, wie sie den Dokumentinhalt erreichen und anschließend zum Widget zurückkehren.

### Zusätzliche Vorteile

Mit der Dokumentrolle lässt sich das Verhalten assistiver Technologien auf einfache Weise indirekt steuern: Sie macht eindeutig kenntlich, dass Nutzer diesen Inhalt mit den üblichen Screenreader-Befehlen lesen sollen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA: `widget`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/widget_role)
- [ARIA: `application`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/application_role)
