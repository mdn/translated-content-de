---
title: "ARIA: Rolle figure"
short-title: figure
slug: Web/Accessibility/ARIA/Reference/Roles/figure_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Die ARIA `figure`-Rolle kann verwendet werden, um ein Bild innerhalb des Seiteninhalts zu identifizieren, wenn geeignete Semantiken nicht bereits vorhanden sind. Ein Bild (figure) wird im Allgemeinen als ein oder mehrere Bilder, Code-Snippets oder anderer Inhalt betrachtet, der Informationen auf eine andere Weise vermittelt als ein normaler Textfluss.

## Beschreibung

Ein `figure` ist ein wahrnehmbarer Abschnitt von Inhalt, der typischerweise ein grafisches Dokument, Bilder, Code-Snippets oder Beispieltext enthält. Die Teile eines Bilds KÖNNEN vom Benutzer navigierbar sein. Jeder Inhalt, der zusammengefasst und als Bild konsumiert werden soll (was Bilder, Videos, Audios, Code-Snippets oder anderen Inhalt einschließen könnte), kann als Bild mit `role="figure"` identifiziert werden.

```html
<div role="figure" aria-labelledby="caption">
  <img src="image.png" alt="put image description here" />
  <p id="caption">Figure 1: The caption</p>
</div>
```

Im obigen Beispiel haben wir eine Abbildung, die aus zwei separaten Inhaltselementen besteht — einem Bild und einer Beschriftung. Dies wird durch ein {{htmlelement("div")}}-Element umschlossen, das den Inhalt als Bild identifiziert, indem es `role="figure"` verwendet.

Für HTML verwenden Sie die Elemente {{HTMLElement('figure')}} und {{HTMLElement('figcaption')}}. Die figcaption dient als zugänglicher Name für das Bild. Wenn Sie kein HTML verwenden oder bestehendes HTML nachträglich anpassen, verwenden Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) auf dem Bild und verweisen auf die Bildunterschrift.
Wenn keine sichtbare Bildunterschrift vorhanden ist, kann [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) verwendet werden.

```html
<div role="figure" aria-labelledby="figure-1">
  …
  <p id="figure-1">Text that describes the figure.</p>
</div>
```

- Verwenden Sie `aria-labelledby`, wenn der Text ein prägnantes Label ist.
- Verwenden Sie [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby), wenn der Text eine längere Beschreibung ist.
- Verwenden Sie [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label), wenn keine sichtbare Bildunterschrift vorhanden ist.

Dies kann semantisch, ohne ARIA, mit dem HTML-Element {{HTMLElement('figure')}} zusammen mit {{HTMLElement('figcaption')}} umgesetzt werden.

```html
<figure>
  <img src="image.png" alt="put image description here" />
  <figcaption>Figure 1: The caption</figcaption>
</figure>
```

> [!NOTE]
> Wenn möglich, sollten Sie die entsprechenden semantischen HTML-Elemente verwenden, um ein Bild und seine Beschriftung zu markieren — {{htmlelement("figure")}} und {{htmlelement("figcaption")}}.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
  - : Die ID eines Elements, das Referenztext enthält, der als Beschriftung dient.
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Die ID eines Elements, das Text enthält, der als Label dient.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Wenn kein Element vorhanden ist, das Text enthält, der als Label dienen könnte, können Sie das Label direkt als Wert der `aria-label` zum Element mit der `figure`-Rolle oder zum `<figure>`-Element hinzufügen.

### Tastaturinteraktionen

Keine spezifschen Tastaturinteraktionen für diese Rolle.

### Erforderliche JavaScript-Funktionen

Keine spezifischen JavaScript-Anforderungen für diese Rolle. Wenn Sie keine Kontrolle über die HTML-Semantik haben, können Sie die Zugänglichkeit von HTML verbessern, indem Sie diese Rollen und Eigenschaften mit JavaScript hinzufügen.

## Beispiele

Wir könnten das anfängliche Beispiel auf der Seite erweitern, um auch einen Absatz zu identifizieren, der ein beschreibendes Label für das Bild durch Referenzierung seiner ID in `aria-labelledby` bereitstellt:

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

Verwenden Sie `role="figure"` nur, wenn es notwendig ist — zum Beispiel, wenn Sie keine Kontrolle über Ihr HTML haben, aber in der Lage sind, die Zugänglichkeit dynamisch im Nachhinein mit JavaScript zu verbessern.

Wenn möglich, sollten Sie die entsprechenden semantischen HTML-Elemente verwenden, um ein Bild und seine Beschriftung zu markieren — {{htmlelement("figure")}} und {{htmlelement("figcaption")}}. Zum Beispiel sollte unser obiges Beispiel wie folgt umgeschrieben werden:

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
- [HTML `<figure>`-Element](/de/docs/Web/HTML/Reference/Elements/figure)
- [HTML `<figcaption>`-Element](/de/docs/Web/HTML/Reference/Elements/figcaption)
