---
title: "Mehrteilige Beschriftungen: Verwendung von ARIA für Beschriftungen mit eingebetteten Feldern"
short-title: Using ARIA for labels with embedded fields
slug: Web/Accessibility/ARIA/Guides/Multipart_labels
l10n:
  sourceCommit: 65692fd4d256d5647749b7c7005dcf53d425a533
---

## Problem

Sie haben ein Formular, in dem Sie Ihren Benutzer eine Frage stellen, aber die Antwort wird in der Frage selbst erwähnt. Ein klassisches Beispiel, das wir alle aus unseren Browsereinstellungen kennen, ist die Einstellung "Chronik nach x Tagen löschen". "Chronik nach" steht links vom Textfeld, x ist die Zahl, zum Beispiel 21, und das Wort "Tagen" folgt auf das Textfeld und bildet einen Satz, der leicht zu verstehen ist.

Wenn Sie einen Screenreader verwenden, ist Ihnen aufgefallen, dass, wenn Sie zu dieser Einstellung in Firefox gehen, Ihnen "Chronik nach 21 Tagen löschen" angesagt wird?, gefolgt von der Ankündigung, dass Sie sich in einem Textfeld befinden, und dass es die Zahl 21 enthält. Ist das nicht toll? Sie müssen nicht herumnavigieren, um die Einheit herauszufinden. "Tage" könnten leicht "Monate" oder "Jahre" sein, und in vielen alltäglichen Dialogen gibt es keine andere Möglichkeit, dies herauszufinden, als mit Bildschirmlesebefehlen herumzunavigieren.

Die Lösung liegt in einem ARIA-Attribut namens `aria-labelledby`. Sein Parameter ist ein String, der aus den IDs der HTML-Elemente besteht, die Sie zu einem einzigen zugänglichen Namen zusammenfügen möchten.

Sowohl `aria-labelledby` als auch `aria-describedby` werden für das Formular-Element angegeben, das beschriftet werden soll, zum Beispiel ein `<input>`. In beiden Fällen werden die möglicherweise vorhandenen Bindungen von label for/label control durch `aria-labelledby` überschrieben. Wenn Sie auf einer HTML-Seite `aria-labelledby` bereitstellen, sollten Sie auch eine Label-for-Konstruktion bereitstellen, um ältere Browser zu unterstützen, die noch keine ARIA-Unterstützung haben. Mit Firefox 3 erhalten Ihre sehbehinderten Benutzer automatisch eine bessere Zugänglichkeit durch das neue Attribut, aber die Benutzer älterer Browser werden auf diese Weise nicht im Dunkeln gelassen.

### Beispiel

{{ EmbedLiveSample("Beispiel") }}

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

## Eine Anmerkung für JAWS 8 Benutzer

JAWS 8.0 hat seine eigene Logik, um Beschriftungen zu finden, sodass es den accessibleName, den das Textfeld eines HTML-Dokuments erhält, immer überschreibt. Bei JAWS 8 habe ich keinen Weg gefunden, es dazu zu bringen, das Label aus dem obigen Beispiel zu akzeptieren. Aber NVDA und Window-Eyes machen das ganz gut, und auch Orca auf Linux hat keine Probleme.

> [!NOTE]
> TBD: Weitere Kompatibilitätsinformationen hinzufügen

## Kann dies ohne ARIA erreicht werden?

Community-Mitglied Ben Millard hat in einem Blog-Beitrag darauf hingewiesen, dass [Steuerungen in Beschriftungen eingebettet werden können, wie im obigen Beispiel mit HTML 4 gezeigt](https://projectcerbera.com/blog/2008/03/#day24), indem das Eingabefeld in die Beschriftung eingebettet wird. Danke für diese Info, Ben! Sie ist sehr nützlich und zeigt, dass selbst Gurus manchmal Techniken entgehen, die schon seit Jahren verfügbar sind. Diese Technik funktioniert in Firefox; allerdings funktioniert sie derzeit in vielen anderen Browsern, einschließlich IE, nicht. Für Beschriftungen mit eingebetteten Formularelementen ist die Verwendung von `aria-labelledby` immer noch der beste Ansatz.
