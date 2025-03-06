---
title: "ARIA: Rolle figure"
slug: Web/Accessibility/ARIA/Reference/Roles/figure_role
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Die ARIA `figure`-Rolle kann verwendet werden, um eine Figur innerhalb von Seiteninhalten zu identifizieren, wo passende Semantiken noch nicht existieren. Eine Figur wird im Allgemeinen als ein oder mehrere Bilder, Codeausschnitte oder andere Inhalte betrachtet, die Informationen auf eine andere Weise als der normale Textfluss vermitteln.

## Beschreibung

Ein `figure` ist ein wahrnehmbarer Abschnitt von Inhalten, der typischerweise ein grafisches Dokument, Bilder, Codeausschnitte oder Beispieltext enthält. Die Teile einer Figur KÖNNEN vom Benutzer navigierbar sein. Jeder Inhalt, der zusammengefasst und als Figur konsumiert werden soll (was Bilder, Videos, Audios, Codeausschnitte oder andere Inhalte umfassen könnte), kann als Figur mithilfe von `role="figure"` gekennzeichnet werden.

```html
<div role="figure" aria-labelledby="caption">
  <img src="image.png" alt="put image description here" />
  <p id="caption">Figure 1: The caption</p>
</div>
```

Im obigen Beispiel haben wir eine Figur, die aus zwei separaten Inhalten besteht — einem Bild und einer Bildunterschrift. Diese wird von einem {{htmlelement("div")}}-Element umschlossen, das den Inhalt als eine Figur identifiziert, indem es `role="figure"` verwendet.

Für HTML verwenden Sie die Elemente {{HTMLElement('figure')}} und {{HTMLElement('figcaption')}}. Die Bildunterschrift wird als der zugängliche Name für die Figur dienen. Wenn Sie kein HTML verwenden oder wenn Sie Legacy-HTML nachrüsten, verwenden Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) an der Figur und verweisen auf die Bildunterschrift der Figur.
Wenn keine sichtbare Bildunterschrift vorhanden ist, kann [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) verwendet werden.

```html
<div role="figure" aria-labelledby="figure-1">
  …
  <p id="figure-1">Text that describes the figure.</p>
</div>
```

- Verwenden Sie `aria-labelledby`, wenn der Text ein prägnantes Etikett ist.
- Verwenden Sie [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby), wenn der Text eine längere Beschreibung ist.
- Verwenden Sie [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label), wenn keine sichtbare Bildunterschrift der Figur vorhanden ist.

Dies kann semantisch, ohne ARIA, mit dem HTML-Element {{HTMLElement('figure')}} zusammen mit {{HTMLElement('figcaption')}} gemacht werden.

```html
<figure>
  <img src="image.png" alt="put image description here" />
  <figcaption>Figure 1: The caption</figcaption>
</figure>
```

> [!NOTE]
> Wenn es Ihnen möglich ist, sollten Sie die passenden semantischen HTML-Elemente verwenden, um eine Figur und deren Bildunterschrift zu markieren — {{htmlelement("figure")}} und {{htmlelement("figcaption")}}.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
  - : Die ID eines Elements, das Referenztext enthält und als Bildunterschrift dient.
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Die ID eines Elements, das Text enthält, der als Etikett dient.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Wenn es kein Element gibt, das Text enthält, der als Etikett dienen könnte, können Sie das Etikett direkt als Wert im `aria-label` auf dem Element mit der `figure` Rolle oder auf dem `<figure>` Element hinzufügen.

### Tastaturinteraktionen

Keine spezifischen Tastaturinteraktionen für die Rolle.

### Erforderliche JavaScript-Features

Keine spezifischen JavaScript-Anforderungen für die Rolle. Wenn Sie die Kontrolle über die HTML-Semantik nicht haben, können Sie die Zugänglichkeit von HTML durch das Hinzufügen dieser Rollen und Eigenschaften mit JavaScript verbessern.

## Beispiele

Wir könnten das anfängliche Beispiel auf der Seite erweitern, um auch einen Absatz zu identifizieren, der ein beschreibendes Etikett für die Figur durch Verweise auf ihre ID in `aria-labelledby` bereitstellt:

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

## Beste Praktiken

Verwenden Sie `role="figure"` nur, wenn es notwendig ist — beispielsweise, wenn Sie keine Kontrolle über Ihr HTML haben, aber in der Lage sind, die Zugänglichkeit nachträglich dynamisch mit JavaScript zu verbessern.

Wenn möglich, sollten Sie die passenden semantischen HTML-Elemente verwenden, um eine Figur und deren Bildunterschrift zu markieren — {{htmlelement("figure")}} und {{htmlelement("figcaption")}}. Zum Beispiel sollte unser obiges Beispiel wie folgt umgeschrieben werden:

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
- [HTML `<figure>` element](/de/docs/Web/HTML/Element/figure)
- [HTML `<figcaption>` element](/de/docs/Web/HTML/Element/figcaption)
