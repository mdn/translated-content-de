---
title: "ARIA: document-Rolle"
short-title: document
slug: Web/Accessibility/ARIA/Reference/Roles/document_role
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Die `document`-Rolle ist für fokussierbare Inhalte innerhalb komplexer zusammengesetzter [Widgets](/de/docs/Web/Accessibility/ARIA/Reference/Roles/widget_role) oder [Anwendungen](/de/docs/Web/Accessibility/ARIA/Reference/Roles/application_role) vorgesehen, für die unterstützende Technologien den Lesekontext zurück zum Lesemodus wechseln können.

## Beschreibung

Die `document`-Rolle ist für den oberen Container gedacht, der Inhalte enthält, die Benutzer von unterstützenden Technologien im Lesemodus durchsuchen möchten. Nur innerhalb fokussierbarer Abschnitte innerhalb komplexer zusammengesetzter [Widgets](/de/docs/Web/Accessibility/ARIA/Reference/Roles/widget_role) oder [Anwendungen](/de/docs/Web/Accessibility/ARIA/Reference/Roles/application_role) nützlich, informiert die `document`-Rolle die assistierenden Technologien, den Lesekontext zurück zum Lesemodus zu schalten: Die `document`-Rolle weist assistierende Technologien mit Lese- oder Durchsichtsmodi an, den Dokumentmodus zu verwenden, um den im Element enthaltenen Inhalt zu lesen.

```html
<div role="dialog">
  …
  <div id="InfoText" role="document" tabindex="0">
    <p>Some informational text goes here.</p>
  </div>
  …
  <button>Close</button>
</div>
```

Dieses Beispiel zeigt einen [Dialog](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role), eine komplexe zusammengesetzte Widgetrolle, mit einigen Steuerungen und einem Abschnitt mit informativem Text, den die Nutzer der unterstützenden Technologien im Lesemodus lesen können, wenn er fokussiert wird.

Standardmäßig werden Webseiten als Dokumente behandelt; unterstützende Technologien (AT) treten in den Durchsichts- oder Lesemodus ein, wenn sie eine neue Webseite betreten. Dieser Modus kann durch verschiedene Rollen, einschließlich der Widget- und Anwendungsrollen, geändert werden. Die `document`-Rolle bringt das AT zurück in den Durchsichts- oder Lesemodus.

In der Regel wird die `document`-Rolle innerhalb einer Anwendungsrolle oder einer anderen interaktiven Widgetrolle platziert und verwendet, um einen Abschnitt eines komplexen zusammengesetzten Widgets zu kennzeichnen, den ein Benutzer von unterstützenden Technologien mit seinem Durchsichts- oder virtuellen Lesemodus, falls verfügbar, lesen sollte.

Da ATs mit Lesemodus standardmäßig diesen Modus für alle Elemente außer solchen mit einer Widget- oder Anwendungsrolle verwenden, ist die `document`-Rolle nur für fokussierbare Elemente innerhalb eines Widgets oder einer Anwendung nützlich, die als statischer Rich-Text gelesen werden sollten. Wenn `role="document"` und `tabindex="0"` zu dem Element hinzugefügt wird, das den Text innerhalb eines Widgets enthält, kann der Benutzer des Screenreaders die Tabulatortaste drücken, um den Fokus auf das Dokumentelement zu legen und den Text mit dem Lesecursor des Screenreaders zu lesen.

Unterstützende Technologien sollten den Kontext zurück zum Dokumentmodus wechseln, möglicherweise indem sie von Steuerungen abgefangen werden, die für den dynamischen Kontext des übergeordneten Elementes neu verdrahtet wurden, um die Standard-Eingabeereignisse, wie Tastaturereignisse für die Pfeiltasten nach oben oder unten, zur Steuerung des Lesecursors wieder zu aktivieren.

Im Gegensatz zur [`article`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/article_role)-Rolle hat die `document`-Rolle keine Beziehung zu anderen Elementen mit einer Dokumentrolle, sie hat lediglich eine Beziehung zum enthaltenden zusammengesetzten Widget. Ein Artikel kann zugehörige Artikel haben.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)

  - : Sollte mit einem Wert von `true` oder `false` angegeben werden, wenn das Dokumentelement zusammenklappbar ist, um anzuzeigen, ob das Dokument derzeit erweitert oder eingeklappt ist. Andere Werte schließen die Standardeinstellung `undefined` ein, was bedeutet, dass das Dokument nicht zusammenklappbar ist.

- tabindex="0"
  - : Wird verwendet, um es fokussierbar zu machen, sodass der Benutzer der unterstützenden Technologie darauf tabben und sofort mit dem Lesen beginnen kann.

### Tastaturinteraktionen

Das Element sollte fokussierbar gemacht werden, indem das Attribut `tabindex="0"` darauf gesetzt wird. Auf diese Weise kann der Benutzer darauf tabben, der Lesemodus wird automatisch aktiviert, und der Inhalt kann sofort gelesen werden.

### Erforderliche JavaScript-Funktionen

Keine, außer wie von den Attributen erforderlich. Zum Beispiel, wenn das `document` zusammenklappbar ist, dann müssen der Zustand und der Wert von `aria-expanded` aufrechterhalten werden.

## Beispiele

Ein Beispiel ist Gmail und die Ansicht einer einzelnen Konversation. GMail ist eine Webanwendung. In GMail werden die meisten Benutzeragenten-Interaktionen von der Anwendung übernommen. Wenn jedoch der Tastaturfokus auf die Startüberschrift einer einzelnen Konversation gesetzt wird, die das Thema der Konversation enthält, kann der Benutzer des Screenreaders mit Hilfe der Lesemodus-Befehle durch die Nachrichten lesen, sie erweitern oder zusammenklappen und sie manipulieren. Sobald der Fokus wieder zur Nachrichtenliste zurückkehrt, entweder durch Aktivierung der Zurück-Taste oder durch Drücken eines zugehörigen Tastenkürzels, wird der direkte Anwendungs-Interaktionsmodus wieder aktiviert, und der Benutzer kann mit den <kbd>Pfeiltasten</kbd> zu einer anderen Konversation in der Liste wechseln.

## Best Practices

Stellen Sie immer sicher, dass ein Element mit der `document`-Rolle fokussierbar ist, indem Sie das `tabindex`-Attribut mit einem Wert von 0 setzen. Dadurch wird es auch in die Tabreihenfolge eingeschlossen.

### Zusätzliche Vorteile

Die `document`-Rolle ist eine einfache Möglichkeit, das Verhalten unterstützender Technologien indirekt zu steuern, indem unmissverständlich angegeben wird, dass dies Inhalt ist, den der Benutzer mit den Standardbefehlen des Screenreaders lesen sollte.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA: `widget` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/widget_role)
- [ARIA: `application` Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/application_role)
