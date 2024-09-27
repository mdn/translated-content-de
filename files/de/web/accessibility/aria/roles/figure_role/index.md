---
title: "ARIA: figure Rolle"
slug: Web/Accessibility/ARIA/Roles/figure_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die ARIA `figure` Rolle kann verwendet werden, um eine Figur innerhalb von Seiteninhalten zu identifizieren, wenn geeignete Semantiken noch nicht vorhanden sind. Eine Figur wird im Allgemeinen als ein oder mehrere Bilder, Codeausschnitte oder andere Inhalte betrachtet, die Informationen auf eine andere Weise als ein regulärer Textfluss vermitteln.

## Beschreibung

Ein `figure` ist ein wahrnehmbarer Abschnitt von Inhalten, der typischerweise ein grafisches Dokument, Bilder, Codeausschnitte oder Beispieltext enthält. Die Teile einer Figur KÖNNEN für Benutzer navigierbar sein. Jeder Inhalt, der zusammengefasst und als Figur konsumiert werden soll (was Bilder, Videos, Audio, Codeausschnitte oder andere Inhalte umfassen könnte), kann als Figur identifiziert werden, indem `role="figure"` verwendet wird.

```html
<div role="figure" aria-labelledby="caption">
  <img src="image.png" alt="put image description here" />
  <p id="caption">Figure 1: The caption</p>
</div>
```

Im obigen Beispiel haben wir eine Figur, die aus zwei separaten Inhaltsgegenständen besteht — einem Bild und einer Bildunterschrift. Dies wird durch ein {{htmlelement("div")}} Element umschlossen, das den Inhalt als Figur identifiziert, indem `role="figure"` verwendet wird.

Für HTML verwenden Sie die {{HTMLElement('figure')}} und {{HTMLElement('figcaption')}} Elemente. Die figcaption dient als zugänglicher Name für die Figur. Wenn Sie kein HTML verwenden oder wenn Sie altes HTML nachrüsten, verwenden Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) an der Figur, die auf die Bildunterschrift der Figur verweist. Wenn keine sichtbare Bildunterschrift vorhanden ist, kann [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) verwendet werden.

```html
<div role="figure" aria-labelledby="figure-1">
  …
  <p id="figure-1">Text that describes the figure.</p>
</div>
```

- Verwenden Sie `aria-labelledby`, wenn der Text eine prägnante Bezeichnung ist.
- Verwenden Sie [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby), wenn der Text eine längere Beschreibung ist.
- Verwenden Sie [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label), wenn keine sichtbare Bildunterschrift vorhanden ist.

Dies kann semantisch ohne ARIA mit dem HTML-{{HTMLElement('figure')}}-Element zusammen mit {{HTMLElement('figcaption')}} geschehen.

```html
<figure>
  <img src="image.png" alt="put image description here" />
  <figcaption>Figure 1: The caption</figcaption>
</figure>
```

> [!NOTE]
> Wenn möglich, sollten Sie die entsprechenden semantischen HTML-Elemente verwenden, um eine Figur und ihre Bildunterschrift zu markieren — {{htmlelement("figure")}} und {{htmlelement("figcaption")}}.

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby)
  - : Die ID eines Elements, das Referenztext enthält, der als Bildunterschrift dient.
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
  - : Die ID eines Elements, das Text enthält, der als Bezeichnung dient.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)
  - : Wenn es kein Element mit Text gibt, das als Bezeichnung dienen könnte, können Sie die Bezeichnung direkt als Wert am `aria-label` des Elements mit der `figure` Rolle oder am `<figure>`-Element hinzufügen.

### Tastaturinteraktionen

Keine rollenbezogenen Tastaturinteraktionen.

### Erforderliche JavaScript-Funktionen

Keine rollenbezogenen JavaScript-Anforderungen. Wenn Sie keine Kontrolle über die HTML-Semantik haben, können Sie die Zugänglichkeit von HTML verbessern, indem Sie diese Rollen und Eigenschaften mit JavaScript hinzufügen.

## Beispiele

Wir könnten das ursprüngliche Beispiel auf der Seite erweitern, um auch einen Absatz zu identifizieren, der eine beschreibende Bezeichnung für die Figur liefert, indem deren ID in `aria-labelledby` referenziert wird:

```html
<div role="figure" aria-labelledby="figure-1">
  <img
    src="diagram.png"
    alt="diagram showing the four layers of awesome and their relative priority order —
        music, cats, nature, and ice cream" />
  <pre>
`
        let awesome = ['music', 'cats', 'nature', 'ice cream'];
      `</pre
  >
  <p id="figure-1">Figure 1: The four layers of awesome.</p>
</div>
```

## Best Practices

Verwenden Sie `role="figure"` nur, wenn es notwendig ist — beispielsweise wenn Sie keine Kontrolle über Ihr HTML haben, aber die Barrierefreiheit im Nachhinein mit JavaScript dynamisch verbessern können.

Wenn möglich, sollten Sie die entsprechenden semantischen HTML-Elemente verwenden, um eine Figur und ihre Bildunterschrift zu markieren — {{htmlelement("figure")}} und {{htmlelement("figcaption")}}. Unser obiges Beispiel sollte zum Beispiel wie folgt umgeschrieben werden:

```html
<figure>
  <img
    src="diagram.png"
    alt="diagram showing the four layers of awesome and their relative priority order —
         music, cats, nature, and ice cream" />
  <pre>
`
    let awesome = ['music', 'cats', 'nature', 'ice cream'];
  `</pre
  >
  <figcaption>Figure 1: The four layers of awesome.</figcaption>
</figure>
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Accessibility Object Model](https://wicg.github.io/aom/spec/)
- [ARIA in HTML](https://w3c.github.io/html-aria/)
- [HTML `<figure>` Element](/de/docs/Web/HTML/Element/figure)
- [HTML `<figcaption>` Element](/de/docs/Web/HTML/Element/figcaption)
