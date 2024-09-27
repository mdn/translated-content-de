---
title: "ARIA: document-Rolle"
slug: Web/Accessibility/ARIA/Roles/document_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Die `document`-Rolle ist für fokussierbare Inhalte innerhalb komplexer zusammengesetzter [Widgets](/de/docs/Web/Accessibility/ARIA/Roles/widget_role) oder [Anwendungen](/de/docs/Web/Accessibility/ARIA/Roles/application_role), bei denen unterstützende Technologien den Lesemodus wechseln können, um zurück in einen Lesemodus zu gelangen.

## Beschreibung

Die `document`-Rolle ist für den Hauptcontainer mit Inhalten gedacht, den Anwender von unterstützenden Technologien möglicherweise in einem Lesemodus durchsuchen möchten. Nur nützlich in fokussierbaren Abschnitten innerhalb komplexer zusammengesetzter [Widgets](/de/docs/Web/Accessibility/ARIA/Roles/widget_role) oder [Anwendungen](/de/docs/Web/Accessibility/ARIA/Roles/application_role), informiert die `document`-Rolle die unterstützenden Technologien darüber, den Lesekontext zurück in einen Lesemodus zu versetzen: Die `document`-Rolle weist unterstützende Technologien mit Lese- oder Durchsuchen-Modus an, den Dokumentmodus zu verwenden, um den Inhalt innerhalb dieses Elements zu lesen.

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

Dieses Beispiel zeigt einen [Dialog](/de/docs/Web/Accessibility/ARIA/Roles/dialog_role), eine komplexe zusammengesetzte Widget-Rolle, mit einigen Steuerelementen und einem Abschnitt mit informativem Text, den der Benutzer der unterstützenden Technologie in den Lesemodus bringen kann, wenn darauf getabbt wird.

Standardmäßig werden Webseiten als Dokumente behandelt; unterstützende Technologien (AT) betreten den Durchsuchen- oder Lesemodus, wenn sie eine neue Webseite betreten. Dieser Modus kann durch verschiedene Rollen, einschließlich der Widget- und Anwendungsrollen, verändert werden. Die `document`-Rolle bringt das AT zurück in den Durchsuchen- oder Lesemodus.

In der Regel innerhalb einer Anwendungsrolle oder einer anderen interaktiven Widget-Rolle platziert, wird die `document`-Rolle verwendet, um einen Abschnitt eines komplexen zusammengesetzten Widgets anzuzeigen, den ein Anwender mit unterstützender Technologie im Durchsuchen- oder virtuellen Lesemodus lesen sollte, falls verfügbar.

Da AT mit Lesemodus standardmäßig für alle Elemente, außer jenen mit einer Widget- oder Anwendungsrolle eingestellt, in diesem Modus vorhanden sind, ist die Dokumentrolle nur für fokussierbare Elemente innerhalb eines Widgets oder einer Anwendung nützlich, die als statischer Rich Text gelesen werden sollten. Durch das Hinzufügen von `role="document"` und `tabindex="0"` zu dem Element, das den Text innerhalb eines Widgets enthält, kann der Screenreader-Benutzer die Tab-Taste drücken, um den Fokus auf das Dokumentelement zu setzen und den Text mit dem Lese-Cursor des Screenreaders zu lesen.

Unterstützende Technologien sollten den Kontext zurück in den Dokumentmodus schalten, möglicherweise, indem sie von Steuerelementen abgefangen werden, die für den dynamischen Kontext des übergeordneten Elements umverdrahtet sind, und die standardmäßigen Eingabeereignisse, wie Aufwärts- oder Abwärtspfeil-Tastaturereignisse, wieder aktivieren, um den Lese-Cursor zu steuern.

Im Gegensatz zur [`article`](/de/docs/Web/Accessibility/ARIA/Roles/article_role)-Rolle hat die `document`-Rolle keine Beziehung zu anderen Elementen mit einer Dokumentrolle, sie steht lediglich in Beziehung zu dem enthaltenen zusammengesetzten Widget. Ein Artikel kann zugehörige Artikel haben.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)

  - : Geben Sie den Wert `true` oder `false` an, wenn das Dokumentelement einklappbar ist, um anzuzeigen, ob das Dokument momentan erweitert oder eingeklappt ist. Andere Werte schließen den Standardwert `undefined` ein, was bedeutet, dass das Dokument nicht einklappbar ist.

- tabindex="0"
  - : Wird verwendet, um es fokussierbar zu machen, damit der Benutzer der unterstützenden Technologie darauf tabben und sofort mit dem Lesen beginnen kann.

### Tastaturinteraktionen

Das Element sollte durch Setzen des Attributs-Wert-Paares `tabindex="0"` fokussierbar gemacht werden. Auf diese Weise kann der Benutzer darauf tabben, der Lesemodus wird automatisch aktiviert, und der Inhalt kann sofort gelesen werden.

### Erforderliche JavaScript-Funktionen

Keine, außer wie von allen Attributen erforderlich. Beispielsweise muss, wenn das `document` einklappbar ist, der Zustand und der Wert von `aria-expanded` aufrechterhalten werden.

## Beispiele

Ein Beispiel ist Gmail und die Einzelgesprächsansicht. Gmail ist eine Webanwendung. In Gmail werden die meisten Benutzeroberflächeneingaben von der Anwendung übernommen. Sobald jedoch die Tastaturfokussierung auf die Anfangsüberschrift eines Einzelgesprächs gesetzt wird, die das Thema des Gesprächs enthält, kann der Screenreader-Benutzer die Lesemodus-Befehle verwenden, um die Nachrichten zu lesen, sie zu erweitern oder einzuklappen und zu manipulieren. Sobald der Fokus entweder durch Aktivierung der Rückkehr-Schaltfläche oder durch Drücken eines zugehörigen Tastaturbefehls zur Nachrichtenliste zurückkehrt, wird der direkte Anwendungsinteraktionsmodus wieder aktiviert, und der Benutzer kann sich mit den <kbd>Pfeil</kbd>-Tasten zu einem anderen Gespräch in der Liste bewegen.

## Best Practices

Stellen Sie stets sicher, dass ein Element mit der Dokumentrolle fokussierbar ist, indem Sie das `tabindex`-Attribut mit einem Wert von 0 setzen. Dadurch wird auch sichergestellt, dass es in die Tab-Reihenfolge aufgenommen wird.

### Zusätzliche Vorteile

Die Dokumentrolle ist eine einfache Möglichkeit, das Verhalten unterstützender Technologien indirekt zu steuern, indem unmissverständlich erklärt wird, dass dies Inhalte sind, die der Benutzer mit den Standardbefehlen des Screenreaders lesen sollte.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA: `widget`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/widget_role)
- [ARIA: `application`-Rolle](/de/docs/Web/Accessibility/ARIA/Roles/application_role)
