---
title: "ARIA: document Rolle"
slug: Web/Accessibility/ARIA/Roles/document_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Die `document` Rolle ist für fokussierbare Inhalte innerhalb komplexer zusammengesetzter [Widgets](/de/docs/Web/Accessibility/ARIA/Roles/widget_role) oder [Anwendungen](/de/docs/Web/Accessibility/ARIA/Roles/application_role) vorgesehen, bei denen Hilfstechnologien den Lesekontext zurück in einen Lesemodus schalten können.

## Beschreibung

Die `document` Rolle ist für das oberste Container-Element gedacht, das Inhalte enthält, die Benutzer von Hilfstechnologien möglicherweise in einem Lesemodus durchsuchen möchten. Sie ist nur nützlich für fokussierbare Abschnitte innerhalb komplexer zusammengesetzter [Widgets](/de/docs/Web/Accessibility/ARIA/Roles/widget_role) oder [Anwendungen](/de/docs/Web/Accessibility/ARIA/Roles/application_role). Die `document` Rolle informiert die Hilfstechnologien darüber, den Lesekontext in den Lesemodus zurück zu schalten: Die `document` Rolle weist Hilfstechnologien mit Lese- oder Durchsuchen-Modus an, den Dokumentmodus zu verwenden, um den innerhalb dieses Elements enthaltenen Inhalt zu lesen.

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

Dieses Beispiel zeigt einen [Dialog](/de/docs/Web/Accessibility/ARIA/Roles/dialog_role), eine komplexe zusammengesetzte Widget-Rolle, mit einigen Steuerelementen und einem Abschnitt mit informativem Text, in den der Benutzer von Hilfstechnologie beim Tabben in den Lesemodus wechseln kann.

Standardmäßig werden Webseiten als Dokumente behandelt; Hilfstechnologien (AT) gelangen in den Durchsuchen- oder Lesemodus, wenn sie eine neue Webseite betreten. Dieser Modus kann durch verschiedene Rollen verändert werden, einschließlich der Widget- und Anwendungsrollen. Die `document` Rolle bringt die AT in den Durchsuchen- oder Lesemodus zurück.

Im Allgemeinen wird die `document` Rolle innerhalb einer Anwendungsrolle oder einer anderen interaktiven Widget-Rolle platziert und verwendet, um einen Abschnitt eines komplexen zusammengesetzten Widgets anzuzeigen, den ein Benutzer von Hilfstechnologie mit seinem Durchsuchen- oder virtuellen Lesemodus lesen sollte, falls verfügbar.

Da ATs im Lesemodus standardmäßig auf diesen Modus für alle Elemente außer denen mit einer Widget- oder Anwendungsrolle eingestellt sind, ist die `document` Rolle nur für fokussierbare Elemente innerhalb eines Widgets oder einer Anwendung nützlich, die als statischer Rich-Text gelesen werden sollten. Durch Hinzufügen von `role="document"` und `tabindex="0"` zu dem Element, das den Text innerhalb eines Widgets enthält, kann der Screenreader-Benutzer die Tabulatortaste drücken, um den Fokus auf das Dokumentelement zu legen und den Text mit dem Lesecursor des Screenreaders zu lesen.

Hilfstechnologien sollten den Kontext zurück in den Dokumentmodus schalten, möglicherweise von Steuerelementen aus unterbrechen, die für den dynamischen Kontext des übergeordneten Elements umgeleitet wurden, und die Standard-Eingabeereignisse wie Pfeil nach oben oder unten Tastaturereignisse wieder aktivieren, um den Lesecursor zu steuern.

Im Gegensatz zur [`article`](/de/docs/Web/Accessibility/ARIA/Roles/article_role) Rolle hat die `document` Rolle keine Beziehung zu anderen Elementen mit einer Dokumentenrolle, sondern lediglich eine Beziehung zum enthaltenen zusammengesetzten Widget. Ein Artikel kann zugehörige Artikel haben.

### Assoziierte WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)

  - : Mit einem Wert von `true` oder `false` einzuschließen, wenn das Dokumentelement einklappbar ist, um anzuzeigen, ob das Dokument derzeit erweitert oder eingeklappt ist. Andere Werte schließen das Standard-`undefined` ein, was bedeutet, dass das Dokument nicht einklappbar ist.

- tabindex="0"
  - : Wird verwendet, um es fokussierbar zu machen, damit der Benutzer von Hilfstechnologie es tabben und sofort mit dem Lesen beginnen kann.

### Tastaturinteraktionen

Das Element sollte durch Einstellen des `tabindex="0"` Attribut-/Wert-Paares fokussierbar gemacht werden. Auf diese Weise kann der Benutzer es tabben, der Lesemodus wird automatisch aufgerufen und der Inhalt kann sofort gelesen werden.

### Erforderliche JavaScript-Funktionen

Keine, außer soweit erforderlich durch alle Attribute. Beispielsweise muss, wenn das `document` einklappbar ist, der Zustand und der Wert von `aria-expanded` gepflegt werden.

## Beispiele

Ein Beispiel ist Gmail und die Einzelkonversationsansicht. Gmail ist eine Webanwendung. In Gmail werden die meisten Benutzerinteraktionen von der Anwendung übernommen. Wenn jedoch der Tastaturfokus auf die startende Überschrift einer Einzelkonversation gesetzt ist, die den Betreff der Konversation enthält, kann der Screenreader-Benutzer die Lesemodusbefehle verwenden, um durch die Nachrichten zu lesen, sie zu erweitern oder zusammenzuklappen und zu manipulieren. Wenn der Fokus entweder durch Aktivierung der Zurück-Taste oder durch Drücken eines zugehörigen Tastendrucks zur Nachrichtenliste zurückkehrt, wird der direkte Anwendungsinteraktionsmodus erneut aufgerufen, und der Benutzer kann mit den <kbd>Pfeil</kbd>-Tasten zu einer anderen Konversation in der Liste navigieren.

## Beste Praktiken

Sorgen Sie immer dafür, dass ein Element mit der Dokumentrolle fokussierbar ist, indem Sie das `tabindex` Attribut mit dem Wert 0 setzen. Dadurch wird es auch in die Tab-Reihenfolge aufgenommen.

### Zusätzliche Vorteile

Die Dokumentrolle ist eine einfache Möglichkeit, das Verhalten von Hilfstechnologien indirekt zu steuern, indem unmissverständlich angegeben wird, dass dies Inhalte sind, die der Benutzer mit den standardmäßigen Screenreader-Befehlen lesen sollte.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA: `widget` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/widget_role)
- [ARIA: `application` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/application_role)
