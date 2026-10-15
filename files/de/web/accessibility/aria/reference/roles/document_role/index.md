---
title: "ARIA: document-Rolle"
short-title: document
slug: Web/Accessibility/ARIA/Reference/Roles/document_role
l10n:
  sourceCommit: 370f1912b54d24bd7da541f8f2dd98c26d377121
---

Die `document`-Rolle ist für fokussierbare Inhalte innerhalb komplexer zusammengesetzter [Widgets](/de/docs/Web/Accessibility/ARIA/Reference/Roles/widget_role) oder [Anwendungen](/de/docs/Web/Accessibility/ARIA/Reference/Roles/application_role) vorgesehen. Sie ermöglicht es Hilfstechnologien, wieder in einen Lesemodus zu wechseln.

## Beschreibung

Die `document`-Rolle kennzeichnet einen Container mit Inhalten, die Nutzende von Hilfstechnologien möglicherweise im Lesemodus durchsuchen möchten. Sie ist nur für fokussierbare Bereiche innerhalb komplexer zusammengesetzter [Widgets](/de/docs/Web/Accessibility/ARIA/Reference/Roles/widget_role) oder [Anwendungen](/de/docs/Web/Accessibility/ARIA/Reference/Roles/application_role) sinnvoll. Die Rolle signalisiert Hilfstechnologien mit Lese- oder Durchsuchmodus, dass sie zum Lesen der Inhalte dieses Elements den Dokumentmodus verwenden sollen.

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

Dieses Beispiel zeigt eine [Anwendung](/de/docs/Web/Accessibility/ARIA/Reference/Roles/application_role) mit einigen Steuerelementen und einem fokussierbaren `<div>` mit `role="document"`. Es enthält einen Informationstext, den Nutzende von Hilfstechnologien im Lesemodus lesen können, sobald sie mit der Tabulatortaste zu dem Element navigiert haben.

Webseiten werden standardmäßig als Dokumente behandelt. Hilfstechnologien wechseln beim Aufrufen einer neuen Webseite in den Durchsuch- oder Lesemodus. Verschiedene Rollen, darunter die Widget- und die Anwendungsrolle, können diesen Modus ändern. Die `document`-Rolle versetzt die Hilfstechnologie wieder in den Durchsuch- oder Lesemodus.

Die `document`-Rolle wird in der Regel innerhalb einer Anwendung oder eines anderen interaktiven Widgets verwendet. Sie kennzeichnet einen Bereich eines komplexen zusammengesetzten Widgets, den Nutzende von Hilfstechnologien – sofern verfügbar – im Durchsuch- oder virtuellen Lesemodus lesen sollten.

Hilfstechnologien mit Lesemodus verwenden diesen standardmäßig für alle Elemente, denen keine Widget- oder Anwendungsrolle zugewiesen ist. Daher ist die `document`-Rolle nur für fokussierbare Elemente innerhalb eines Widgets oder einer Anwendung sinnvoll, die als statischer Rich-Text gelesen werden sollen. Wenn Sie dem Element mit dem Text innerhalb eines Widgets `role="document"` und `tabindex="0"` hinzufügen, können Nutzende von Screenreadern mit der Tabulatortaste den Fokus auf das Dokumentelement setzen und den Text mit dem Lesecursor des Screenreaders lesen.

Hilfstechnologien sollten in den Dokumentmodus zurückwechseln. Dabei können sie gegebenenfalls die für den dynamischen Kontext des übergeordneten Elements angepasste Verarbeitung von Eingaben für Steuerelemente beenden und die üblichen Eingabeereignisse wieder aktivieren. So können beispielsweise die Pfeiltasten nach oben und unten erneut den Lesecursor steuern.

Innerhalb eines [Dialogs](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role) ist die `document`-Rolle nicht erforderlich. Ein Dialog ist ein Fenster und kein Widget oder eine Anwendung. Hilfstechnologien mit Lesemodus verwenden diesen daher bereits für den Inhalt des Dialogs.

### Tastaturinteraktionen

Das Element muss fokussierbar sein, damit Hilfstechnologien in den Lesemodus wechseln können, wenn es den Fokus erhält. Das HTML-Attribut [`tabindex="0"`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) macht das Element fokussierbar und fügt es der Tabulatorreihenfolge hinzu. So können Nutzende mit der Tabulatortaste dorthin navigieren und den Inhalt sofort lesen.

### Erforderliche JavaScript-Funktionen

Keine.

## Beispiele

Ein Beispiel ist die Einzelansicht einer Unterhaltung in Gmail. Gmail ist eine Webanwendung. Innerhalb von Gmail übernimmt die Anwendung die meisten Interaktionen mit dem User Agent. Wenn der Tastaturfokus jedoch auf der einleitenden Überschrift einer einzelnen Unterhaltung liegt, die den Betreff enthält, können Nutzende von Screenreadern mit den Befehlen des Lesemodus die Nachrichten lesen, auf- und zuklappen und mit ihnen interagieren. Sobald der Fokus durch Betätigen der Zurück-Schaltfläche oder Drücken der entsprechenden Tastenkombination zur Nachrichtenliste zurückkehrt, wird erneut der Modus für die direkte Interaktion mit der Anwendung aktiviert. Nutzende können dann mit den <kbd>Pfeiltasten</kbd> zu einer anderen Unterhaltung in der Liste wechseln.

## Bewährte Vorgehensweisen

Stellen Sie immer sicher, dass ein Element mit der `document`-Rolle fokussierbar ist. Das Setzen von `tabindex="0"` ist die gängigste Methode dafür. Es fügt das Element jedoch auch der Tabulatorreihenfolge hinzu, was möglicherweise nicht zur Navigation im übrigen Widget passt. Wenn das umgebende Widget den Fokus mit Pfeiltasten verwaltet, beispielsweise mit einem [roving `tabindex`](/de/docs/Web/Accessibility/Guides/Keyboard-navigable_JavaScript_widgets#technique_1_roving_tabindex), stellen Sie sicher, dass Nutzende erkennen können, wie sie den Dokumentinhalt erreichen und anschließend zum Widget zurückkehren.

### Weitere Vorteile

Mit der Dokumentrolle lässt sich das Verhalten von Hilfstechnologien auf einfache Weise indirekt steuern: Sie macht eindeutig kenntlich, dass Nutzende diesen Inhalt mit den üblichen Screenreader-Befehlen lesen sollen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA: `widget`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/widget_role)
- [ARIA: `application`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/application_role)
- [ARIA: `graphics-document`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/graphics-document_role)
