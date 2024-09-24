---
title: "ARIA: Dokument Rolle"
slug: Web/Accessibility/ARIA/Roles/document_role
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{AccessibilitySidebar}}

Die `document`-Rolle ist für fokussierbare Inhalte innerhalb komplexer zusammengesetzter [Widgets](/de/docs/Web/Accessibility/ARIA/Roles/widget_role) oder [Anwendungen](/de/docs/Web/Accessibility/ARIA/Roles/application_role), für die unterstützende Technologien den Lesekontext zurück in einen Lesemodus umschalten können.

## Beschreibung

Die `document`-Rolle ist für den Hauptcontainer gedacht, der Inhalte enthält, die Benutzer von unterstützenden Technologien möglicherweise im Lesemodus durchsuchen möchten. Nur bei fokussierbaren Abschnitten innerhalb komplexer zusammengesetzter [Widgets](/de/docs/Web/Accessibility/ARIA/Roles/widget_role) oder [Anwendungen](/de/docs/Web/Accessibility/ARIA/Roles/application_role) nützlich, informiert die `document`-Rolle unterstützende Technologien darüber, den Lesekontext zurück in einen Lesemodus zu schalten: Die `document`-Rolle teilt unterstützenden Technologien mit Lese- oder Durchsuchenmodi mit, den Dokumentmodus zu verwenden, um den Inhalt innerhalb dieses Elements zu lesen.

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

Dieses Beispiel zeigt einen [Dialog](/de/docs/Web/Accessibility/ARIA/Roles/dialog_role), eine komplexe zusammengesetzte Widget-Rolle, mit einigen Steuerungen und einem Abschnitt mit einigen Informationstexten, die der Benutzer von unterstützender Technologie im Lesemodus lesen kann, wenn er darauf tabbt.

Standardmäßig werden Webseiten als Dokumente behandelt; unterstützende Technologien (AT) wechseln in den Durchsuchen- oder Lesemodus, wenn sie eine neue Webseite betreten. Dieser Modus kann durch verschiedene Rollen geändert werden, einschließlich der Widget- und Anwendungsrollen. Die `document`-Rolle bringt die ATs zurück in den Durchsuchen- oder Lesemodus.

In der Regel innerhalb einer Anwendungsrolle oder einer anderen interaktiven Widget-Rolle platziert, wird die `document`-Rolle verwendet, um einen Abschnitt eines komplexen zusammengesetzten Widgets zu kennzeichnen, den ein Benutzer von unterstützender Technologie mit seinem Durchsuchen- oder virtuellen Lesemodus lesen sollte, wenn verfügbar.

Da ATs im Lesemodus standardmäßig für alle Elemente außer denen mit festgelegter Widget- oder Anwendungsrolle verwendet werden, ist die `document`-Rolle nur für fokussierbare Elemente innerhalb eines Widgets oder einer Anwendung nützlich, die als statischer Rich-Text gelesen werden sollten. Indem Sie `role="document"` und `tabindex="0"` zu dem Element hinzufügen, das den Text innerhalb eines Widgets enthält, kann der Benutzer der Bildschirmlesehilfe die Tabulatortaste drücken, um den Fokus auf das Dokumentelement zu setzen und den Text mit dem Lesecursor der Bildschirmlesehilfe zu lesen.

Unterstützende Technologien sollten den Kontext zurück in den Dokumentmodus schalten, möglicherweise von den Steuerungen abgefangen, die für den dynamischen Kontext des Elternteils umgerüstet wurden, wodurch die standardmäßigen Eingabereignisse wie Pfeil-oben- oder Pfeil-unten-Tastaturenereignisse wieder aktiviert werden, um den Lesecursor zu steuern.

Im Gegensatz zur [`article`](/de/docs/Web/Accessibility/ARIA/Roles/article_role)-Rolle hat die `document`-Rolle keine Beziehung zu anderen Elementen mit einer Dokumentrolle, sie hat lediglich eine Beziehung zum enthaltenen zusammengesetzten Widget. Ein Artikel kann zugehörige Artikel haben.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)

  - : Mit einem Wert von `true` oder `false` einzuschließen, wenn das Dokumentelement zusammenklappbar ist, um anzuzeigen, ob das Dokument derzeit erweitert oder zusammengeklappt ist. Andere Werte umfassen das Standard-`undefined`, was bedeutet, dass das Dokument nicht zusammenklappbar ist.

- tabindex="0"
  - : Wird verwendet, um es fokussierbar zu machen, sodass der Benutzer der unterstützenden Technologie darauf tabben und sofort mit dem Lesen beginnen kann.

### Tastaturinteraktionen

Das Element sollte durch die Einstellung des `tabindex="0"` Attribut-/Wertpaares fokusiert werden können. Auf diese Weise kann der Benutzer darauf tabben, der Lesemodus wird automatisch aktiviert und der Inhalt kann sofort gelesen werden.

### Erforderliche JavaScript-Funktionen

Keine, außer wie durch Attribute erforderlich. Zum Beispiel, wenn das Dokument zusammenklappbar ist, dann müssen der Zustand und der Wert von `aria-expanded` beibehalten werden.

## Beispiele

Ein Beispiel ist Gmail und die Einzelansichtsansicht. GMail ist eine Webanwendung. In GMail werden die meisten Benutzeragenteninteraktionen von der Anwendung übernommen. Wenn jedoch der Tastaturfokus auf die Startüberschrift einer Einzelunterhaltung gesetzt ist, die das Thema der Unterhaltung enthält, kann der Benutzer der Bildschirmlesehilfe die Lesemodus-Befehle verwenden, um die Nachrichten durchzugehen, sie zu erweitern oder zusammenzuklappen und sie zu manipulieren. Sobald der Fokus durch Aktivieren der Zurück-Schaltfläche oder Drücken eines zugehörigen Tastendrucks zur Nachrichtenliste zurückkehrt, wird der direkte Anwendungsinteraktionsmodus erneut aufgerufen, und der Benutzer kann mit den <kbd> Pfeiltaste </kbd>-Tasten zu einer anderen Unterhaltung in der Liste wechseln.

## Best Practices

Stellen Sie immer sicher, dass ein Element mit der Dokumentrolle fokussierbar ist, indem Sie das `tabindex`-Attribut mit einem Wert von 0 festlegen. Dies wird es auch in die Tabulatorreihenfolge aufnehmen.

### Zusätzliche Vorteile

Die Dokumentrolle ist eine einfache Möglichkeit, das Verhalten der unterstützenden Technologie indirekt zu steuern, indem eindeutig angegeben wird, dass dies Inhalte sind, die der Benutzer mit den standardmäßigen Bildschirmlesehilfe-Befehlen lesen sollte.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA: `widget` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/widget_role)
- [ARIA: `application` Rolle](/de/docs/Web/Accessibility/ARIA/Roles/application_role)
