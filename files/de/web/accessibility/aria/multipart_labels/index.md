---
title: "Multipart-Etiketten: Verwendung von ARIA für Etiketten mit eingebetteten Feldern"
slug: Web/Accessibility/ARIA/Multipart_labels
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{AccessibilitySidebar}}

## Problem

Sie haben ein Formular, in dem Sie Ihren Benutzer eine Frage stellen, aber die Antwort ist bereits in der Frage selbst enthalten. Ein klassisches Beispiel, das wir alle aus unseren Browsereinstellungen kennen, ist die Einstellung "Verlauf nach x Tagen löschen". "Verlauf löschen nach" steht links vom Textfeld, x ist die Zahl, zum Beispiel 21, und das Wort "Tage" folgt dem Textfeld, wodurch ein Satz entsteht, der leicht zu verstehen ist.

Wenn Sie einen Screenreader verwenden, haben Sie bemerkt, dass, wenn Sie zu dieser Einstellung in Firefox gehen, Ihnen "Verlauf löschen nach 21 Tagen" gesagt wird, gefolgt von der Ansage, dass Sie sich in einem Textfeld befinden und es die Zahl 21 enthält? Ist das nicht großartig? Sie müssen nicht navigieren, um die Einheit herauszufinden. "Tage" könnte leicht "Monate" oder "Jahre" sein, und in vielen gewöhnlichen Dialogen gibt es keine Möglichkeit, dies herauszufinden, außer mit Bildschirmprüfungsbefehlen herumzunavigieren.

Die Lösung liegt in einem ARIA-Attribut namens `aria-labelledby`. Sein Parameter ist ein String, der aus den IDs der HTML-Elemente besteht, die Sie zu einem einzelnen zugänglichen Namen zusammenfassen möchten.

Sowohl `aria-labelledby` als auch `aria-describedby` werden an dem Formularelement spezifiziert, das beschriftet werden soll, beispielsweise einem `<input>`. In beiden Fällen werden die Label-for/Label-Control-Bindungen, die möglicherweise ebenfalls existieren, von `aria-labelledby` überschrieben. Wenn Sie auf einer HTML-Seite `aria-labelledby` bereitstellen, sollten Sie auch eine Label-for-Konstruktion bereitstellen, um auch ältere Browser zu unterstützen, die noch keine ARIA-Unterstützung haben. Mit Firefox 3 erhalten Ihre sehbehinderten Benutzer automatisch eine bessere Zugänglichkeit durch das neue Attribut, aber die Benutzer älterer Browser werden dadurch nicht im Dunkeln gelassen.

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

<span id="labelShutdown">Computer ausschalten nach</span>

<input
  aria-labelledby="labelShutdown shutdownTime shutdownUnit"
  id="shutdownTime"
  type="text"
  value="10" />

<span id="shutdownUnit"> Minuten</span>
```

## Eine Anmerkung für JAWS 8-Nutzer

JAWS 8.0 hat seine eigene Logik, um Etiketten zu finden, wodurch es immer den accessibleName überschreibt, den das Textfeld eines HTML-Dokuments erhält. Mit JAWS 8 habe ich keine Möglichkeit gefunden, es zu akzeptieren, das Etikett aus dem obigen Beispiel zu übernehmen. Aber NVDA und Window-Eyes machen es ganz gut, und Orca auf Linux hat auch keine Probleme.

> [!NOTE]
> TBD: Weitere Kompatibilitätsinformationen hinzufügen

## Kann dies ohne ARIA gemacht werden?

Das Community-Mitglied Ben Millard hat in einem Blogpost darauf hingewiesen, dass [Steuerelemente in Labels wie im obigen Beispiel mit HTML 4 eingebettet werden können](https://projectcerbera.com/blog/2008/03/#day24), indem das Eingabefeld in das Label eingebettet wird. Danke für diese Information, Ben! Es ist sehr nützlich und zeigt, dass einige Techniken, die seit Jahren verfügbar sind, selbst den Experten manchmal entgehen. Diese Technik funktioniert in Firefox; allerdings funktioniert sie derzeit in vielen anderen Browsern, einschließlich IE, nicht. Für Labels mit eingebetteten Formularelementen ist die Verwendung von `aria-labelledby` immer noch der beste Ansatz.
