---
title: "ARIA: document-Rolle"
slug: Web/Accessibility/ARIA/Reference/Roles/document_role
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Die `document`-Rolle ist für fokussierbare Inhalte innerhalb komplexer zusammengesetzter [Widgets](/de/docs/Web/Accessibility/ARIA/Reference/Roles/widget_role) oder [Anwendungen](/de/docs/Web/Accessibility/ARIA/Reference/Roles/application_role) gedacht, bei denen unterstützende Technologien den Lesekontext zurück in einen Lesemodus schalten können.

## Beschreibung

Die `document`-Rolle ist für den oberen Container gedacht, der Inhalte enthält, die Benutzer von unterstützenden Technologien im Lesemodus durchsuchen möchten. Nur nützlich auf fokussierbaren Abschnitten innerhalb komplexer zusammengesetzter [Widgets](/de/docs/Web/Accessibility/ARIA/Reference/Roles/widget_role) oder [Anwendungen](/de/docs/Web/Accessibility/ARIA/Reference/Roles/application_role) informiert die `document`-Rolle unterstützende Technologien über den Lesekontext zurück in einen Lesemodus: Die `document`-Rolle teilt unterstützenden Technologien mit Lese- oder Durchsuchen-Modi mit, den Dokumentenmodus zu verwenden, um die innerhalb dieses Elements enthaltenen Inhalte zu lesen.

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

Dieses Beispiel zeigt einen [Dialog](/de/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role), eine komplexe zusammengesetzte Widget-Rolle, mit einigen Steuerelementen und einem Abschnitt mit einigen Informationstexten, den der Benutzer der unterstützenden Technologie in den Lesemodus wechseln kann, wenn er dorthin tabbt.

Standardmäßig werden Webseiten als Dokumente behandelt; unterstützende Technologien (AT) wechseln in den Durchsuchen- oder Lesemodus, wenn sie eine neue Webseite betreten. Dieser Modus kann durch verschiedene Rollen geändert werden, einschließlich der Widget- und Anwendungsrollen. Die `document`-Rolle bringt das AT zurück in den Durchsuchen- oder Lesemodus.

In der Regel wird die `document`-Rolle innerhalb einer Anwendungsrolle oder einer anderen interaktiven Widget-Rolle platziert und verwendet, um einen Abschnitt eines komplexen zusammengesetzten Widgets anzuzeigen, den ein Benutzer der unterstützenden Technologie mit seinem Durchsuchen- oder virtuellen Lesemodus lesen sollte, falls verfügbar.

Da ATs mit Lesemodus standardmäßig diesen Modus für alle Elemente außer denen mit einer Widget- oder Anwendungsrolle festgelegt verwenden, ist die Document-Rolle nur für fokussierbare Elemente innerhalb eines Widgets oder einer Anwendung nützlich, die als statischer Rich-Text gelesen werden sollen. Das Hinzufügen von `role="document"` und `tabindex="0"` zu dem Element, das den Text innerhalb eines Widgets enthält, ermöglicht es dem Benutzer des Screenreaders, die Tabulatortaste zu drücken, um den Fokus auf das Dokumentelement zu setzen und den Text mit dem Lesekursor des Screenreaders zu lesen.

Unterstützende Technologien sollten den Kontext zurück in den Dokumentenmodus wechseln, möglicherweise von Steuerelementen abfangen, die für den dynamischen Kontext des übergeordneten Elements neu verdrahtet sind, und die Standard-Eingabeveranstaltungen wie Auf- oder Abwärtspfeile-Tastaturereignisse wieder aktivieren, um den Lesekursor zu steuern.

Im Gegensatz zur [`article`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/article_role)-Rolle hat die `document`-Rolle keine Beziehung zu anderen Elementen mit einer Dokumentrolle, sondern lediglich eine Beziehung zum umgebenden zusammengesetzten Widget. Ein Artikel kann zugehörige Artikel haben.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)

  - : Include mit einem Wert von `true` oder `false` verwenden, wenn das Dokumentelement zusammenklappbar ist, um anzugeben, ob das Dokument aktuell erweitert oder eingeklappt ist. Andere Werte umfassen das Standard-`undefined`, das bedeutet, dass das Dokument nicht zusammenklappbar ist.

- tabindex="0"
  - : Wird verwendet, um es fokussierbar zu machen, damit der Benutzer der unterstützenden Technologie darauf tabben und sofort mit dem Lesen beginnen kann.

### Tastaturinteraktionen

Das Element sollte durch Einstellen des `tabindex="0"` Attribut/Wert-Paars fokussierbar gemacht werden. Auf diese Weise kann der Benutzer darauf tabben, der Lesemodus wird automatisch aufgerufen und der Inhalt kann sofort gelesen werden.

### Erforderliche JavaScript-Funktionen

Keine, außer wie von beliebigen Attributen erforderlich. Zum Beispiel, wenn das `document` zusammenklappbar ist, dann muss der Zustand und der Wert von `aria-expanded` beibehalten werden.

## Beispiele

Ein Beispiel ist GMail und die Einzelgesprächsansicht. GMail ist eine Webanwendung. In GMail werden die meisten Benutzerinteraktionen von der Anwendung übernommen. Wenn jedoch der Tastaturfokus auf die Startüberschrift eines einzelnen Gesprächs gesetzt ist, das das Gesprächsthema enthält, kann der Screenreader-Benutzer die Lese-Mode-Befehle verwenden, um durch die Nachrichten zu lesen, sie zu erweitern oder einzuklappen und sie zu manipulieren. Sobald der Fokus entweder durch das Aktivieren der Zurück-Schaltfläche oder durch Drücken einer zugehörigen Taste zur Nachrichteliste zurückkehrt, wird der direkte Anwendungs-Interaktionsmodus wieder aufgerufen, und der Benutzer kann mit den <kbd>Pfeiltasten</kbd> zu einem anderen Gespräch in der Liste wechseln.

## Beste Praktiken

Stellen Sie sicher, dass ein Element mit der Dokumentrolle fokussierbar ist, indem Sie das `tabindex`-Attribut mit einem Wert von 0 festlegen. Dies wird es auch in die Tabulatorreihenfolge einschließen.

### Zusätzliche Vorteile

Die Dokumentrolle ist eine einfache Möglichkeit, das Verhalten von unterstützenden Technologien indirekt zu steuern, indem eindeutig angegeben wird, dass dies Inhalte sind, die der Benutzer mit den Standard-Screenreader-Befehlen lesen soll.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [ARIA: `widget`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/widget_role)
- [ARIA: `application`-Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles/application_role)
