---
title: "Mehrteilige Beschriftungen: ARIA für Beschriftungen mit eingebetteten Feldern verwenden"
short-title: ARIA für Beschriftungen mit eingebetteten Feldern verwenden
slug: Web/Accessibility/ARIA/Guides/Multipart_labels
l10n:
  sourceCommit: 7d55f113b5a05afe6ada6bb9b76bd3b0458f077d
---

## Problem

Sie haben ein Formular, in dem Sie den Benutzer etwas fragen, die Antwort aber bereits in der Frage selbst vorkommt. Ein klassisches Beispiel, das wir alle aus unseren Browsereinstellungen kennen, ist die Einstellung „Verlauf nach x Tagen löschen“. „Verlauf nach“ steht links neben dem Textfeld, x ist die Zahl, beispielsweise 21, und nach dem Textfeld folgt das Wort „Tagen“. Zusammen ergibt das einen leicht verständlichen Satz.

Wenn Sie einen Screenreader verwenden: Ist Ihnen aufgefallen, dass er Ihnen in Firefox bei dieser Einstellung „Verlauf nach 21 Tagen löschen“ vorliest? Anschließend teilt er Ihnen mit, dass Sie sich in einem Textfeld befinden und dass dieses die Zahl 21 enthält. Praktisch, oder? Sie müssen nicht erst zu anderen Stellen navigieren, um die Zeiteinheit herauszufinden. Statt „Tagen“ könnte dort genauso gut „Monaten“ oder „Jahren“ stehen. In vielen gewöhnlichen Dialogfeldern lässt sich das nur mit Navigationsbefehlen des Screenreaders herausfinden.

Die Lösung ist ein ARIA-Attribut namens `aria-labelledby`. Sein Wert ist eine Zeichenfolge aus den IDs der HTML-Elemente, die Sie zu einem einzigen zugänglichen Namen zusammenfügen möchten.

Sowohl `aria-labelledby` als auch `aria-describedby` werden für das zu beschriftende Formularelement angegeben, beispielsweise für ein `<input>`. In beiden Fällen überschreibt `aria-labelledby` gegebenenfalls vorhandene Verknüpfungen zwischen einem Label und einem Steuerelement über `for`. Wenn Sie auf einer HTML-Seite `aria-labelledby` angeben, sollten Sie zusätzlich eine Verknüpfung über ein Label mit `for` bereitstellen, um auch ältere Browser ohne ARIA-Unterstützung zu unterstützen. Mit Firefox 3 profitieren Benutzer mit Sehbeeinträchtigungen dank des neuen Attributs automatisch von einer besseren Barrierefreiheit, während Benutzer älterer Browser nicht im Dunkeln gelassen werden.

## Beispiel

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

## Hinweis für Benutzer von JAWS 8

JAWS 8.0 verwendet eine eigene Logik, um Beschriftungen zu finden. Dadurch überschreibt es immer den accessibleName, den das Textfeld eines HTML-Dokuments erhält. Ich habe keine Möglichkeit gefunden, JAWS 8 dazu zu bringen, die Beschriftung aus dem obigen Beispiel zu übernehmen. Mit NVDA und Window-Eyes funktioniert es hingegen problemlos, und auch Orca unter Linux hat damit keine Schwierigkeiten.

> [!NOTE]
> Noch zu erledigen: Weitere Informationen zur Kompatibilität ergänzen.

## Geht das auch ohne ARIA?

Das Community-Mitglied Ben Millard hat in einem Blogbeitrag darauf hingewiesen, dass [Steuerelemente wie im obigen Beispiel mit HTML 4 in Beschriftungen eingebettet werden können](https://projectcerbera.com/blog/2008/03/#day24), indem das Eingabefeld in das Label eingebettet wird. Danke für den Hinweis, Ben! Er ist sehr hilfreich und zeigt, dass selbst Fachleuten manchmal Techniken entgehen, die schon seit Jahren verfügbar sind. Diese Technik funktioniert in Firefox, derzeit jedoch nicht in vielen anderen Browsern, darunter IE. Für Beschriftungen mit eingebetteten Formularsteuerelementen ist `aria-labelledby` daher nach wie vor der beste Ansatz.
