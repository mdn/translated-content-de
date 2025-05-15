---
title: "ARIA: Dokumentrolle"
short-title: document
slug: Web/Accessibility/ARIA/Reference/Roles/document_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Die `document`-Rolle ist für fokussierbare Inhalte innerhalb komplexer zusammengesetzter [Widgets](/de/docs/Web/Accessibility/ARIA/Reference/Roles/widget_role) oder [Anwendungen](/de/docs/Web/Accessibility/ARIA/Reference/Roles/application_role) gedacht, bei denen assistive Technologien den Lesekontext in einen Lesemodus zurückschalten können.

## Beschreibung

Die `document`-Rolle ist für das oberste Container-Element vorgesehen, das Inhalte enthält, die Benutzer von Assistenztechnologien in einem Lesemodus durchsuchen möchten. Die `document`-Rolle ist nur bei fokussierbaren Abschnitten innerhalb komplexer zusammengesetzter [Widgets](/de/docs/Web/Accessibility/ARIA/Reference/Roles/widget_role) oder [Anwendungen](/de/docs/Web/Accessibility/ARIA/Reference/Roles/application_role) sinnvoll und teilt den assistiven Technologien den Wechsel in einen Lesemodus mit: Die `document`-Rolle weist assistive Technologien mit Lese- oder Browsing-Modus an, den Dokumentmodus zu verwenden, um den Inhalt des entsprechenden Elements zu lesen.

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

Dieses Beispiel zeigt einen [Dialog](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role), ein komplexes zusammengesetztes Widget-Rolle mit einigen Steuerelementen und einem Abschnitt mit informativem Text, in den der Benutzer der Assistenztechnologie beim Wechsel in den Lesemodus wechseln kann, wenn er darauf tabbt.

Standardmäßig werden Webseiten als Dokumente behandelt; assistive Technologien (AT) wechseln in den Browsing- oder Lesemodus, wenn sie eine neue Webseite betreten. Dieser Modus kann durch verschiedene Rollen, einschließlich der Widget- und Anwendungsrollen, verändert werden. Die `document`-Rolle bringt die AT zurück in den Browsing- oder Lesemodus.

In der Regel innerhalb einer Anwendungsrolle oder einer anderen interaktiven Widget-Rolle platziert, wird die `document`-Rolle verwendet, um einen Abschnitt eines komplexen zusammengesetzten Widgets anzugeben, den ein Benutzer einer Assistenztechnologie mit seinem Browsing- oder virtuellen Lesemodus lesen sollte, sofern verfügbar.

Da ATs mit Lesemodus standardmäßig auf diesem Modus für alle Elemente außer solchen mit einer eingerichteten Widget- oder Anwendungsrolle eingestellt sind, ist die Dokumentrolle nur für fokussierbare Elemente innerhalb eines Widgets oder einer Anwendung nützlich, die als statischer Rich-Text gelesen werden sollen. Durch Hinzufügen von `role="document"` und `tabindex="0"` zum Element, das den Text innerhalb eines Widgets enthält, kann der Benutzer eines Screenreaders durch Drücken der Tabulatortaste den Fokus auf das Dokumentelement setzen und den Text mit dem Lesecursor des Screenreaders lesen.

Assistive Technologien sollten den Kontext zurück in den Dokumentmodus schalten und möglicherweise von Steuerelementen, die für den dynamischen Kontext des übergeordneten Elements neu verdrahtet sind, abgefangen werden. Dabei werden die Standard-Ereignisse wie Aufwärts- oder Abwärts-Pfeiltastenereignisse wieder aktiviert, um den Lesecursor zu steuern.

Im Gegensatz zur [`article`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/article_role)-Rolle hat die `document`-Rolle keine Beziehung zu anderen Elementen mit der Dokumentrolle, sondern lediglich eine Beziehung zum enthaltenden zusammengesetzten Widget. Ein Artikel kann assoziierte Artikel haben.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)

  - : Einschließen mit einem Wert von `true` oder `false`, falls das Dokumentelement einklappbar ist, um anzugeben, ob das Dokument derzeit erweitert oder eingeklappt ist. Andere Werte umfassen das Standard-`undefined`, was bedeutet, dass das Dokument nicht einklappbar ist.

- tabindex="0"
  - : Wird verwendet, um es fokussierbar zu machen, sodass der Benutzer der Assistenztechnologie darauf tabben und sofort mit dem Lesen beginnen kann.

### Tastaturinteraktionen

Das Element sollte durch Festlegen des Attribut-/Wertepaars `tabindex="0"` fokussierbar gemacht werden. So kann der Benutzer darauf tabben, der Lesemodus wird automatisch ausgelöst und der Inhalt kann sofort gelesen werden.

### Erforderliche JavaScript-Funktionen

Keine, außer wie durch Attribute erforderlich. Wenn das `document` beispielsweise einklappbar ist, müssen der Zustand und der Wert von `aria-expanded` beibehalten werden.

## Beispiele

Ein Beispiel ist Gmail und die Einzelansicht einer Konversation. Gmail ist eine Webanwendung. In Gmail werden die meisten Benutzerinteraktionen von der Anwendung übernommen. Wenn jedoch der Tastaturfokus auf die Startüberschrift einer einzelnen Konversation gesetzt ist, die das Thema der Konversation enthält, kann der Screenreader-Benutzer die Lese-Modus-Befehle verwenden, um die Nachrichten zu lesen, sie zu erweitern oder einzuklappen und zu manipulieren. Sobald der Fokus entweder durch Aktivieren der Zurück-Schaltfläche oder durch Drücken eines zugehörigen Tastenanschlags zur Nachrichtenliste zurückkehrt, wird der direkte Anwendungsinteraktionsmodus erneut aufgerufen, und der Benutzer kann mit den <kbd>Pfeil</kbd>-Tasten zu einer anderen Konversation in der Liste wechseln.

## Beste Praktiken

Stellen Sie immer sicher, dass ein Element mit der Dokumentrolle fokussierbar ist, indem Sie das `tabindex`-Attribut mit einem Wert von 0 festlegen. Dadurch wird es auch in die Tabulatorreihenfolge aufgenommen.

### Zusätzliche Vorteile

Die Dokumentrolle ist eine einfache Möglichkeit, das Verhalten von assistiven Technologien indirekt zu steuern, indem unmissverständlich angegeben wird, dass es sich um Inhalte handelt, die der Benutzer mit den Standardbefehlen eines Screenreaders lesen sollte.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA: `widget`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/widget_role)
- [ARIA: `application`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/application_role)
