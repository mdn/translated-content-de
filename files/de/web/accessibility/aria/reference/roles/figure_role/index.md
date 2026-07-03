---
title: "ARIA: figure Rolle"
short-title: figure
slug: Web/Accessibility/ARIA/Reference/Roles/figure_role
l10n:
  sourceCommit: 8d9cda4e9080e9c324a521f40c7e0704ef94ce07
---

Die ARIA `figure` Rolle kann verwendet werden, um eine Abbildung innerhalb des Seiteninhalts zu identifizieren, wo entsprechende Semantiken nicht bereits existieren. Eine Abbildung wird im Allgemeinen als ein oder mehrere Bilder, Code-Snippets oder anderer Inhalt angesehen, die Informationen anders vermitteln als ein regulärer Fließtext.

## Beschreibung

Eine `figure` ist ein wahrnehmbarer Abschnitt von Inhalten, der typischerweise ein grafisches Dokument, Bilder, Code-Snippets oder Beispieltext enthält. Die Teile einer Abbildung können benutzer-navigierbar sein. Jeder Inhalt, der zusammengefasst und als Abbildung konsumiert werden soll (der Bilder, Videos, Audio, Code-Snippets oder andere Inhalte enthalten könnte), kann als Abbildung mit `role="figure"` identifiziert werden.

```html
<div role="figure" aria-labelledby="caption">
  <img src="image.png" alt="put image description here" />
  <p id="caption">Figure 1: The caption</p>
</div>
```

Im obigen Beispiel haben wir eine Abbildung, die aus zwei separaten Inhalten besteht — einem Bild und einer Bildunterschrift. Diese wird durch ein {{htmlelement("div")}} Element umschlossen, das den Inhalt als Abbildung mit `role="figure"` identifiziert.

Für HTML verwenden Sie die {{HTMLElement('figure')}} und {{HTMLElement('figcaption')}} Elemente. Die figcaption dient als zugänglicher Name für die Abbildung. Wenn Sie kein HTML verwenden oder wenn Sie Legacy-HTML nachträglich anpassen, verwenden Sie das [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) auf der Abbildung, das auf die Bildunterschrift der Abbildung verweist. Wenn keine sichtbare Bildunterschrift vorhanden ist, kann [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) verwendet werden.

```html
<div role="figure" aria-labelledby="figure-1">
  …
  <p id="figure-1">Text that describes the figure.</p>
</div>
```

- Verwenden Sie `aria-labelledby`, wenn der Text eine prägnante Beschriftung ist.
- Verwenden Sie [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby), wenn der Text eine längere Beschreibung ist.
- Verwenden Sie [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label), wenn es keine sichtbare Bildunterschrift gibt.

Dies kann semantisch ohne ARIA mit dem {{HTMLElement('figure')}} Element von HTML zusammen mit {{HTMLElement('figcaption')}} gemacht werden.

```html
<figure>
  <img src="image.png" alt="put image description here" />
  <figcaption>Figure 1: The caption</figcaption>
</figure>
```

> [!NOTE]
> Wenn möglich, sollten Sie die entsprechenden semantischen HTML-Elemente verwenden, um eine Abbildung und ihre Bildunterschrift zu markieren — {{htmlelement("figure")}} und {{htmlelement("figcaption")}}.

### Zugehörige WAI-ARIA Rollen, Zustände und Eigenschaften

- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
  - : Die ID eines Elements, das Referenztext enthält, der als Bildunterschrift dient.
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Die ID eines Elements, das Text enthält, der als Beschriftung dient.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Wenn es kein Element gibt, das Text enthält, der als Beschriftung dienen könnte, können Sie die Beschriftung direkt als Wert im `aria-label` auf dem Element mit der `figure` Rolle oder auf dem `<figure>` Element hinzufügen.

### Tastaturinteraktionen

Keine rollenspezifischen Tastaturinteraktionen.

### Erforderliche JavaScript-Funktionen

Keine rollenspezifischen JavaScript-Anforderungen. Wenn Sie keine Kontrolle über die HTML-Semantik haben, können Sie die Zugänglichkeit von HTML verbessern, indem Sie diese Rollen und Eigenschaften mit JavaScript hinzufügen.

## Beispiele

Wir könnten das anfängliche Beispiel auf der Seite erweitern, um auch einen Absatz zu identifizieren, der eine beschreibende Beschriftung für die Abbildung bereitstellt, indem wir ihre ID in `aria-labelledby` referenzieren:

```html
<div role="figure" aria-labelledby="figure-1">
  <img
    src="diagram.png"
    alt="diagram showing the four layers of awesome and their relative priority order —
        music, cats, nature, and ice cream" />
  <pre>
`
        let awesome = ['music', 'cats', 'nature', 'ice cream'];
      `</pre>
  <p id="figure-1">Figure 1: The four layers of awesome.</p>
</div>
```

## Best Practices

Verwenden Sie `role="figure"` nur, wenn Sie müssen — zum Beispiel, wenn Sie keine Kontrolle über Ihr HTML haben, aber in der Lage sind, die Zugänglichkeit dynamisch im Nachhinein mit JavaScript zu verbessern.

Wenn möglich, sollten Sie die entsprechenden semantischen HTML-Elemente verwenden, um eine Abbildung und ihre Bildunterschrift zu markieren — {{htmlelement("figure")}} und {{htmlelement("figcaption")}}. Zum Beispiel sollte unser obiges Beispiel wie folgt umgeschrieben werden:

```html
<figure>
  <img
    src="diagram.png"
    alt="diagram showing the four layers of awesome and their relative priority order —
         music, cats, nature, and ice cream" />
  <pre>
`
    let awesome = ['music', 'cats', 'nature', 'ice cream'];
  `</pre>
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
