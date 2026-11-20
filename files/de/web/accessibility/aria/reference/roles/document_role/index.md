---
title: "ARIA: document-Rolle"
short-title: document
slug: Web/Accessibility/ARIA/Reference/Roles/document_role
l10n:
  sourceCommit: 5af4f6e12c119ea0d809b35b3fa3266a0fbe4ef4
---

Die `document`-Rolle ist für fokussierbare Inhalte innerhalb komplexer zusammengesetzter [Widgets](/de/docs/Web/Accessibility/ARIA/Reference/Roles/widget_role) oder [Anwendungen](/de/docs/Web/Accessibility/ARIA/Reference/Roles/application_role) vorgesehen. Sie ermöglicht es assistiven Technologien, für diese Inhalte wieder in einen Lesemodus zu wechseln.

## Beschreibung

Die `document`-Rolle kennzeichnet einen übergeordneten Container mit Inhalten, die Nutzer assistiver Technologien möglicherweise im Lesemodus durchgehen möchten. Sie ist nur für fokussierbare Bereiche innerhalb komplexer zusammengesetzter [Widgets](/de/docs/Web/Accessibility/ARIA/Reference/Roles/widget_role) oder [Anwendungen](/de/docs/Web/Accessibility/ARIA/Reference/Roles/application_role) sinnvoll. Die Rolle signalisiert assistiven Technologien mit einem Lese- oder Navigationsmodus, dass sie zum Lesen der Inhalte dieses Elements in den Dokumentmodus wechseln sollen.

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

Dieses Beispiel zeigt eine [Anwendung](/de/docs/Web/Accessibility/ARIA/Reference/Roles/application_role) mit einigen Steuerelementen und einem fokussierbaren `<div>`, dessen `role` auf `document` gesetzt ist. Es enthält Informationstext, den Nutzer assistiver Technologien im Lesemodus lesen können, sobald sie mit der Tab-Taste zu dem Element navigiert sind.

Webseiten werden standardmäßig als Dokumente behandelt: Assistive Technologien (AT) wechseln beim Aufrufen einer neuen Webseite in den Navigations- oder Lesemodus. Verschiedene Rollen, darunter die Widget- und die Anwendungsrolle, können diesen Modus ändern. Die `document`-Rolle versetzt die assistive Technologie wieder in den Navigations- oder Lesemodus.

Die `document`-Rolle wird in der Regel innerhalb einer Anwendungsrolle oder einer anderen interaktiven Widget-Rolle verwendet. Sie kennzeichnet einen Bereich eines komplexen zusammengesetzten Widgets, den Nutzer assistiver Technologien nach Möglichkeit im Navigationsmodus oder mit einem virtuellen Lesecursor lesen sollen.

Da assistive Technologien mit Lesemodus diesen standardmäßig für alle Elemente verwenden, denen keine Widget- oder Anwendungsrolle zugewiesen ist, ist die `document`-Rolle nur für fokussierbare Elemente innerhalb eines Widgets oder einer Anwendung sinnvoll, deren statischer, formatierter Text gelesen werden soll. Wenn Sie dem Element, das den Text enthält, `role="document"` und `tabindex="0"` hinzufügen, können Nutzer von Screenreadern mit der Tab-Taste den Fokus auf dieses Element setzen und den Text mit dem Lesecursor des Screenreaders lesen.

Assistive Technologien sollten daraufhin wieder in den Dokumentmodus wechseln. Dabei können sie die für den dynamischen Kontext des übergeordneten Elements angepasste Verarbeitung von Steuereingaben beenden und die üblichen Eingabeereignisse wieder aktivieren. So können beispielsweise die Pfeiltasten nach oben und unten wieder den Lesecursor steuern.

Innerhalb eines [Dialogs](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role) ist die `document`-Rolle nicht erforderlich. Ein Dialog ist ein Fenster und kein Widget oder eine Anwendung. Assistive Technologien mit einem Lesemodus verwenden diesen daher bereits für den Inhalt des Dialogs.

### Tastaturinteraktionen

Das Element muss fokussierbar sein, damit assistive Technologien beim Erhalt des Fokus in den Lesemodus wechseln können. Das HTML-Attribut [`tabindex="0"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) macht das Element fokussierbar und nimmt es in die Tab-Reihenfolge auf. So können Nutzer mit der Tab-Taste dorthin navigieren und den Inhalt unmittelbar lesen.

### Erforderliche JavaScript-Funktionen

Keine.

## Bewährte Verfahren

Stellen Sie immer sicher, dass ein Element mit der `document`-Rolle fokussierbar ist. Das Setzen von `tabindex="0"` ist die gängigste Methode. Dadurch wird das Element allerdings auch in die Tab-Reihenfolge aufgenommen, was möglicherweise nicht zur Navigation im übrigen Widget passt. Wenn das umgebende Widget den Fokus beispielsweise mit Pfeiltasten steuert, etwa mithilfe eines [roving `tabindex`](/de/docs/Web/Accessibility/Guides/Keyboard-navigable_JavaScript_widgets#technique_1_roving_tabindex), müssen Nutzer erkennen können, wie sie zum Dokumentinhalt und anschließend zurück zum Widget gelangen.

### Zusätzliche Vorteile

Die `document`-Rolle bietet eine einfache Möglichkeit, das Verhalten assistiver Technologien indirekt zu steuern: Sie macht eindeutig kenntlich, dass Nutzer diesen Inhalt mit den üblichen Screenreader-Befehlen lesen sollen.

## Beispiele

Ein Beispiel ist die Einzelansicht einer Unterhaltung in Gmail. Gmail ist eine Webanwendung. Innerhalb von Gmail übernimmt die Anwendung die meisten Interaktionen, die sonst der User-Agent verarbeitet. Wenn der Tastaturfokus jedoch auf der ersten Überschrift einer einzelnen Unterhaltung liegt, die den Betreff enthält, können Nutzer von Screenreadern mit den Befehlen des Lesemodus die Nachrichten lesen, sie auf- oder zuklappen und mit ihnen interagieren. Sobald der Fokus zur Nachrichtenliste zurückkehrt – entweder durch Betätigen der Zurück-Schaltfläche oder durch Drücken einer zugehörigen Tastenkombination –, wird wieder der Modus für die direkte Interaktion mit der Anwendung aktiviert. Nutzer können dann mit den <kbd>Pfeiltasten</kbd> zu einer anderen Unterhaltung in der Liste wechseln.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA: `widget`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/widget_role)
- [ARIA: `application`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/application_role)
- [ARIA: `graphics-document`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/graphics-document_role)
