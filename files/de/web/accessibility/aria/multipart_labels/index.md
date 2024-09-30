---
title: "Multipart-Labels: Verwendung von ARIA für Labels mit eingebetteten Feldern"
slug: Web/Accessibility/ARIA/Multipart_labels
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{AccessibilitySidebar}}

## Problem

Sie haben ein Formular, in dem Sie dem Benutzer eine Frage stellen, deren Antwort jedoch in der Frage selbst enthalten ist. Ein klassisches Beispiel, das wir alle aus unseren Browsereinstellungen kennen, ist die Einstellung „Verlauf löschen nach x Tagen“. „Verlauf löschen nach“ steht links vom Textfeld, x ist die Zahl, zum Beispiel 21, und das Wort „Tage“ folgt dem Textfeld, wodurch ein leicht verständlicher Satz entsteht.

Wenn Sie einen Screenreader verwenden, haben Sie bemerkt, dass, wenn Sie zu dieser Einstellung in Firefox gehen, er Ihnen sagt „Verlauf löschen nach 21 Tagen“?, gefolgt von der Ankündigung, dass Sie sich in einem Textfeld befinden und dass es die Zahl 21 enthält. Ist das nicht cool? Sie müssen nicht navigieren, um die Einheit herauszufinden. „Tage“ könnte leicht „Monate“ oder „Jahre“ sein, und in vielen gewöhnlichen Dialogen gibt es keine Möglichkeit, dies herauszufinden, außer durch Navigation mit Bildschirmüberprüfungsbefehlen.

Die Lösung ist ein ARIA-Attribut namens `aria-labelledby`. Sein Parameter ist eine Zeichenfolge, die aus den IDs der HTML-Elemente besteht, die Sie zu einem einzigen zugänglichen Namen zusammenfassen möchten.

Sowohl `aria-labelledby` als auch `aria-describedby` sind an dem Formularelement angegeben, das beschriftet werden soll, beispielsweise einem `<input>`. In beiden Fällen werden die Bindungen für Label/Label-Kontrollen, die möglicherweise auch vorhanden sind, von `aria-labelledby` überschrieben. Wenn Sie `aria-labelledby` auf einer HTML-Seite angeben, sollten Sie auch ein Label-für-Konstrukt bereitstellen, um auch ältere Browser zu unterstützen, die noch keine ARIA-Unterstützung haben. Mit Firefox 3 erhalten Ihre sehbehinderten Benutzer automatisch eine bessere Zugänglichkeit durch das neue Attribut, aber die Benutzer älterer Browser bleiben auf diese Weise nicht im Dunkeln.

### Beispiel

{{ EmbedLiveSample("Example") }}

```css hidden
body {
  margin: 1rem;
}
```

```html
<input
  aria-labelledby="labelShutdown shutdownTime shutdownUnit"
  type="checkbox" />

<span id="labelShutdown">Shut down computer after</span>

<input
  aria-labelledby="labelShutdown shutdownTime shutdownUnit"
  id="shutdownTime"
  type="text"
  value="10" />

<span id="shutdownUnit"> minutes</span>
```

## Ein Hinweis für JAWS 8 Nutzer

JAWS 8.0 hat seine eigene Logik, um Labels zu finden, was dazu führt, dass es den accessibleName des Textfeldes eines HTML-Dokuments immer überschreibt. Mit JAWS 8 habe ich keine Möglichkeit gefunden, es dazu zu bringen, das Label aus dem obigen Beispiel zu akzeptieren. Aber NVDA und Window-Eyes machen das ganz gut, und Orca unter Linux hat auch keine Probleme.

> [!NOTE]
> TBD: Weitere Kompatibilitätsinformationen hinzufügen

## Kann dies ohne ARIA erreicht werden?

Community-Mitglied Ben Millard hat in einem Blogbeitrag darauf hingewiesen, dass [Steuerelemente in Labels eingebettet werden können, wie im obigen Beispiel mit HTML 4 gezeigt](https://projectcerbera.com/blog/2008/03/#day24), indem das Eingabefeld in das Label eingebettet wird. Danke für diese Information, Ben! Es ist sehr nützlich und zeigt, dass einige Techniken, die seit Jahren verfügbar sind, manchmal selbst den Experten entgehen. Diese Technik funktioniert in Firefox; jedoch funktioniert sie derzeit in vielen anderen Browsern einschließlich IE nicht. Für Labels mit eingebetteten Formularelementen ist die Verwendung von `aria-labelledby` weiterhin der beste Ansatz.
