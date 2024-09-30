---
title: "ARIA: figure-Rolle"
slug: Web/Accessibility/ARIA/Roles/figure_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die ARIA `figure`-Rolle kann verwendet werden, um eine Abbildung innerhalb des Seiteninhalts zu identifizieren, wo entsprechende Semantiken noch nicht existieren. Eine Abbildung wird im Allgemeinen als ein oder mehrere Bilder, Code-Snippets oder andere Inhalte angesehen, die Informationen auf eine andere Weise darstellen als ein regulärer Textfluss.

## Beschreibung

Eine `figure` ist ein wahrnehmbarer Abschnitt von Inhalten, der typischerweise ein grafisches Dokument, Bilder, Code-Snippets oder Beispieltext enthält. Die Teile einer Abbildung KÖNNEN benutzer-navigierbar sein. Jeder Inhalt, der zusammengefasst und als Abbildung konsumiert werden soll (was Bilder, Videos, Audio, Code-Snippets oder andere Inhalte beinhalten könnte), kann als Abbildung mit `role="figure"` identifiziert werden.

```html
<div role="figure" aria-labelledby="caption">
  <img src="image.png" alt="put image description here" />
  <p id="caption">Figure 1: The caption</p>
</div>
```

Im obigen Beispiel haben wir eine Abbildung, die aus zwei separaten Inhaltsteilen besteht — einem Bild und einer Bildunterschrift. Diese wird durch ein {{htmlelement("div")}}-Element umschlossen, das den Inhalt als Abbildung mit `role="figure"` kennzeichnet.

Für HTML verwenden Sie die {{HTMLElement('figure')}}- und {{HTMLElement('figcaption')}}-Elemente. Die figcaption dient als barrierefreier Name für die Abbildung. Wenn Sie kein HTML verwenden oder alten HTML-Code anpassen, nutzen Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) auf der Abbildung, um auf die Bildunterschrift zu verweisen.
Wenn keine sichtbare Bildunterschrift vorhanden ist, kann [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) verwendet werden.

```html
<div role="figure" aria-labelledby="figure-1">
  …
  <p id="figure-1">Text that describes the figure.</p>
</div>
```

- Verwenden Sie `aria-labelledby`, wenn der Text ein prägnantes Label ist.
- Verwenden Sie [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby), wenn der Text eine längere Beschreibung ist.
- Verwenden Sie [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label), wenn keine sichtbare Bildunterschrift vorhanden ist.

Dies kann semantisch, ohne ARIA, mit HTMLs {{HTMLElement('figure')}}-Element zusammen mit {{HTMLElement('figcaption')}} erreicht werden.

```html
<figure>
  <img src="image.png" alt="put image description here" />
  <figcaption>Figure 1: The caption</figcaption>
</figure>
```

> [!NOTE]
> Wenn es irgendwie möglich ist, sollten Sie die entsprechenden semantischen HTML-Elemente verwenden, um eine Abbildung und ihre Bildunterschrift zu markieren — {{htmlelement("figure")}} und {{htmlelement("figcaption")}}.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby)
  - : Die ID eines Elements, das Referenztext als Bildunterschrift enthält.
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
  - : Die ID eines Elements, das Text als Label enthält.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)
  - : Wenn kein Element vorhanden ist, das Text enthält, der als Label dienen könnte, können Sie das Label direkt als Wert auf `aria-label` auf dem Element mit der `figure`-Rolle oder auf dem `<figure>`-Element hinzufügen.

### Tastaturinteraktionen

Keine rollen-spezifischen Tastaturinteraktionen.

### Erforderliche JavaScript-Funktionen

Keine rollen-spezifischen JavaScript-Anforderungen. Wenn Sie keine Kontrolle über die HTML-Semantik haben, können Sie die Zugänglichkeit von HTML verbessern, indem Sie diese Rollen und Eigenschaften mit JavaScript hinzufügen.

## Beispiele

Wir könnten das anfängliche Beispiel auf der Seite erweitern, um auch einen Absatz zu kennzeichnen, der ein beschreibendes Label für die Abbildung liefert, indem dessen ID in `aria-labelledby` referenziert wird:

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

Verwenden Sie `role="figure"` nur, wenn Sie müssen — zum Beispiel, wenn Sie keine Kontrolle über Ihr HTML haben, aber die Barrierefreiheit nachträglich mit JavaScript dynamisch verbessern können.

Wenn möglich, sollten Sie die entsprechenden semantischen HTML-Elemente verwenden, um eine Abbildung und ihre Bildunterschrift zu markieren — {{htmlelement("figure")}} und {{htmlelement("figcaption")}}. Unser obiges Beispiel sollte beispielsweise wie folgt neu geschrieben werden:

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
