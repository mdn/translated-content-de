---
title: "Multipart-Labels: Verwendung von ARIA für Labels mit eingebetteten Feldern"
slug: Web/Accessibility/ARIA/Multipart_labels
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{AccessibilitySidebar}}

## Problem

Sie haben ein Formular, in dem Sie Ihre Benutzer eine Frage beantworten lassen, wobei die Antwort in der Frage selbst erwähnt wird. Ein klassisches Beispiel, das wir alle aus unseren Browsereinstellungen kennen, ist die Einstellung "Verlauf nach x Tagen löschen". "Verlauf nach" steht links vom Textfeld, x ist die Zahl, zum Beispiel 21, und das Wort "Tagen" folgt dem Textfeld, wodurch ein Satz entsteht, der leicht zu verstehen ist.

Wenn Sie einen Screenreader verwenden, haben Sie bemerkt, dass, wenn Sie zu dieser Einstellung in Firefox gehen, er Ihnen sagt "Verlauf nach 21 Tagen löschen"?, gefolgt von der Ankündigung, dass Sie sich in einem Textfeld befinden und es die Zahl 21 enthält. Ist das nicht cool? Sie müssen nicht navigieren, um die Einheit herauszufinden. "Tage" könnte leicht "Monate" oder "Jahre" sein, und in vielen gewöhnlichen Dialogen gibt es keine Möglichkeit, dies herauszufinden, außer durch Navigieren mit Bildschirmüberprüfungsbefehlen.

Die Lösung liegt in einem ARIA-Attribut namens `aria-labelledby`. Sein Parameter ist ein String, der aus den IDs der HTML-Elemente besteht, die Sie zu einem einzelnen zugänglichen Namen zusammenfügen möchten.

Sowohl `aria-labelledby` als auch `aria-describedby` werden auf dem Formularelement angegeben, das beschriftet werden soll, z.B. ein `<input>`. In beiden Fällen werden vorhandene Label-for/Label-Control-Bindungen von `aria-labelledby` überschrieben. Wenn Sie auf einer HTML-Seite `aria-labelledby` verwenden, sollten Sie auch eine Label-for-Konstruktion bereitstellen, um auch ältere Browser zu unterstützen, die ARIA noch nicht unterstützen. Mit Firefox 3 erhalten Ihre sehbehinderten Benutzer automatisch eine bessere Zugänglichkeit durch das neue Attribut, aber die Benutzer älterer Browser werden auf diese Weise nicht im Dunkeln gelassen.

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

## Eine Anmerkung für JAWS 8-Benutzer

JAWS 8.0 hat eine eigene Logik, um Labels zu finden, wodurch es immer den `accessibleName` des Textfeldes eines HTML-Dokuments überschreibt. Mit JAWS 8 habe ich keinen Weg gefunden, es dazu zu bringen, das Label aus dem obigen Beispiel zu akzeptieren. Aber NVDA und Window-Eyes funktionieren einwandfrei, und auch Orca auf Linux hat keine Probleme.

> [!NOTE]
> TBD: Mehr Kompatibilitätsinformationen hinzufügen

## Kann dies ohne ARIA gemacht werden?

Das Community-Mitglied Ben Millard hat in einem Blogbeitrag darauf hingewiesen, dass [Steuerelemente in Labels eingebettet werden können, wie im obigen Beispiel mit HTML 4 gezeigt](https://projectcerbera.com/blog/2008/03/#day24), indem das Eingabefeld in das Label eingebettet wird. Danke für diese Information, Ben! Es ist sehr nützlich und zeigt, dass einige Techniken, die seit Jahren verfügbar sind, selbst den Experten manchmal entgehen. Diese Technik funktioniert in Firefox; sie funktioniert derzeit jedoch nicht in vielen anderen Browsern, einschließlich IE. Für Labels mit eingebetteten Formularelementen ist die Verwendung von `aria-labelledby` immer noch der beste Ansatz.
