---
title: "ARIA: Rolle `figure`"
slug: Web/Accessibility/ARIA/Reference/Roles/figure_role
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Die ARIA-Rolle `figure` kann verwendet werden, um eine Abbildung im Seiteninhalt zu identifizieren, wenn geeignete Semantiken nicht bereits existieren. Eine Abbildung wird in der Regel als ein oder mehrere Bilder, Code-Snippets oder andere Inhalte betrachtet, die Informationen auf eine andere Weise als im normalen Textfluss vermitteln.

## Beschreibung

Eine `figure` ist ein wahrnehmbarer Abschnitt von Inhalten, der typischerweise ein grafisches Dokument, Bilder, Code-Snippets oder Beispieltext enthält. Die Teile einer Abbildung KÖNNEN vom Benutzer navigierbar sein. Jeder Inhalt, der zusammengefasst und als Abbildung betrachtet werden sollte (welcher Bilder, Video, Audio, Code-Snippets oder andere Inhalte enthalten könnte), kann mit `role="figure"` als Abbildung identifiziert werden.

```html
<div role="figure" aria-labelledby="caption">
  <img src="image.png" alt="put image description here" />
  <p id="caption">Figure 1: The caption</p>
</div>
```

Im obigen Beispiel haben wir eine Abbildung, die aus zwei separaten Inhaltselementen besteht — einem Bild und einer Bildunterschrift. Diese sind von einem {{htmlelement("div")}}-Element umschlossen, das den Inhalt mit `role="figure"` als Abbildung kennzeichnet.

Für HTML verwenden Sie die {{HTMLElement('figure')}}- und {{HTMLElement('figcaption')}}-Elemente. Die figcaption dient als der zugängliche Name für die Abbildung. Wenn Sie kein HTML verwenden oder älteres HTML anpassen, verwenden Sie `aria-labelledby` auf der Abbildung, das auf die Bildunterschrift der Abbildung verweist. Wenn keine sichtbare Bildunterschrift vorhanden ist, kann `aria-label` verwendet werden.

```html
<div role="figure" aria-labelledby="figure-1">
  …
  <p id="figure-1">Text that describes the figure.</p>
</div>
```

- Verwenden Sie `aria-labelledby`, wenn der Text ein prägnantes Label ist.
- Verwenden Sie `aria-describedby`, wenn der Text eine längere Beschreibung ist.
- Verwenden Sie `aria-label`, wenn keine sichtbare Bildunterschrift vorhanden ist.

Dies kann semantisch, ohne ARIA, mit dem {{HTMLElement('figure')}}-Element von HTML zusammen mit {{HTMLElement('figcaption')}} erreicht werden.

```html
<figure>
  <img src="image.png" alt="put image description here" />
  <figcaption>Figure 1: The caption</figcaption>
</figure>
```

> [!NOTE]
> Wenn möglich, sollten Sie die passenden semantischen HTML-Elemente verwenden, um eine Abbildung und ihre Bildunterschrift zu markieren — {{htmlelement("figure")}} und {{htmlelement("figcaption")}}.

### Zugeordnete WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
  - : Die ID eines Elements, das Referenztext enthält und als Bildunterschrift dient.
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Die ID eines Elements, das Text enthält, der als Label dient.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Wenn kein Element vorhanden ist, das Text enthält, der als Label dienen könnte, können Sie das Label direkt als Wert auf dem `aria-label` auf dem Element mit der `figure`-Rolle oder auf dem `<figure>`-Element hinzufügen.

### Tastaturinteraktionen

Keine rollen-spezifischen Tastaturinteraktionen.

### Erforderliche JavaScript-Funktionen

Keine rollen-spezifischen JavaScript-Anforderungen. Wenn Sie keine Kontrolle über die HTML-Semantik haben, können Sie die Zugänglichkeit von HTML verbessern, indem Sie diese Rollen und Eigenschaften mit JavaScript hinzufügen.

## Beispiele

Wir könnten das Anfangsbeispiel auf der Seite erweitern, um auch einen Absatz zu identifizieren, der ein beschreibendes Label für die Abbildung liefert, indem er in `aria-labelledby` auf seine ID verweist:

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

Verwenden Sie `role="figure"` nur, wenn Sie müssen — zum Beispiel, wenn Sie keine Kontrolle über Ihr HTML haben, aber die Barrierefreiheit im Nachhinein dynamisch mit JavaScript verbessern können.

Wenn möglich, sollten Sie die passenden semantischen HTML-Elemente verwenden, um eine Abbildung und ihre Bildunterschrift zu markieren — {{htmlelement("figure")}} und {{htmlelement("figcaption")}}. Zum Beispiel sollte unser obiges Beispiel wie folgt umgeschrieben werden:

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
- [HTML `<figure>` Element](/de/docs/Web/HTML/Reference/Elements/figure)
- [HTML `<figcaption>` Element](/de/docs/Web/HTML/Reference/Elements/figcaption)
