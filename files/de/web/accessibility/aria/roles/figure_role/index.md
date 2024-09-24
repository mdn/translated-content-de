---
title: "ARIA: figure-Rolle"
slug: Web/Accessibility/ARIA/Roles/figure_role
l10n:
  sourceCommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

{{AccessibilitySidebar}}

Die ARIA-`figure`-Rolle kann verwendet werden, um eine Abbildung in Seiteninhalten zu identifizieren, wo geeignete Semantik nicht bereits existiert. Eine Abbildung wird allgemein als ein oder mehrere Bilder, Codeausschnitte oder andere Inhalte angesehen, die Informationen auf eine andere Weise vermitteln als ein regulärer Textfluss.

## Beschreibung

Eine `figure` ist ein wahrnehmbarer Abschnitt von Inhalten, der typischerweise ein grafisches Dokument, Bilder, Codeausschnitte oder Beispieltext enthält. Die Teile einer Abbildung KÖNNEN vom Benutzer navigierbar sein. Alle Inhalte, die zusammengefasst und als Abbildung genutzt werden sollen (was Bilder, Videos, Audio, Codeausschnitte oder andere Inhalte umfassen könnte), können als Abbildung mittels `role="figure"` gekennzeichnet werden.

```html
<div role="figure" aria-labelledby="caption">
  <img src="image.png" alt="put image description here" />
  <p id="caption">Abbildung 1: Die Beschriftung</p>
</div>
```

Im obigen Beispiel haben wir eine Abbildung, die aus zwei separaten Inhaltselementen besteht – einem Bild und einer Beschriftung. Diese werden von einem {{htmlelement("div")}}-Element umschlossen, das den Inhalt als Abbildung durch `role="figure"` identifiziert.

Für HTML verwenden Sie die {{HTMLElement('figure')}}- und {{HTMLElement('figcaption')}}-Elemente. Das figcaption dient als der zugängliche Name für die Abbildung. Wenn kein HTML verwendet wird oder bei der Nachrüstung von älterem HTML, nutzen Sie das [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) auf der Abbildung, das auf die Bildunterschrift der Abbildung verweist. Wenn keine sichtbare Bildunterschrift vorhanden ist, kann [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) verwendet werden.

```html
<div role="figure" aria-labelledby="figure-1">
  …
  <p id="figure-1">Text, der die Abbildung beschreibt.</p>
</div>
```

- Verwenden Sie `aria-labelledby`, wenn der Text ein prägnantes Label ist.
- Verwenden Sie [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby), wenn der Text eine längere Beschreibung ist.
- Verwenden Sie [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label), wenn keine sichtbare Bildunterschrift vorhanden ist.

Dies kann semantisch ohne ARIA mit dem HTML-{{HTMLElement('figure')}}-Element zusammen mit {{HTMLElement('figcaption')}} erfolgen.

```html
<figure>
  <img src="image.png" alt="put image description here" />
  <figcaption>Abbildung 1: Die Beschriftung</figcaption>
</figure>
```

> [!NOTE]
> Wenn möglich, sollten Sie die geeigneten semantischen HTML-Elemente verwenden, um eine Abbildung und ihre Beschriftung zu markieren — {{htmlelement("figure")}} und {{htmlelement("figcaption")}}.

### Zugeordnete WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-describedby)
  - : Die ID eines Elements, das als Referenztext dient und als Bildunterschrift fungiert.
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
  - : Die ID eines Elements, das als Text für ein Label dient.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label)
  - : Wenn kein Element vorhanden ist, das als Label dienen könnte, können Sie das Label direkt als Wert auf dem `aria-label` des Elements mit der `figure`-Rolle oder auf dem `<figure>`-Element hinzufügen.

### Tastaturinteraktionen

Keine rollenspezifischen Tastaturinteraktionen.

### Erforderliche JavaScript-Funktionen

Keine rollenspezifischen JavaScript-Anforderungen. Wenn Sie keine Kontrolle über die HTML-Semantik haben, können Sie die Zugänglichkeit von HTML verbessern, indem Sie diese Rollen und Eigenschaften mit JavaScript hinzufügen.

## Beispiele

Wir könnten das ursprüngliche Beispiel auf der Seite erweitern, um auch einen Absatz zu identifizieren, der ein beschreibendes Label für die Abbildung liefert, indem auf dessen ID in `aria-labelledby` verwiesen wird:

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
  <p id="figure-1">Abbildung 1: Die vier Ebenen des Fantastischen.</p>
</div>
```

## Best Practices

Verwenden Sie `role="figure"` nur, wenn es notwendig ist — zum Beispiel, wenn Sie keine Kontrolle über Ihr HTML haben, aber die Zugänglichkeit dynamisch im Nachhinein mit JavaScript verbessern können.

Wenn möglich, sollten Sie die geeigneten semantischen HTML-Elemente verwenden, um eine Abbildung und ihre Beschriftung zu markieren — {{htmlelement("figure")}} und {{htmlelement("figcaption")}}. Unser obiges Beispiel sollte wie folgt umgeschrieben werden:

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
  <figcaption>Abbildung 1: Die vier Ebenen des Fantastischen.</figcaption>
</figure>
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Accessibility Object Model](https://wicg.github.io/aom/spec/)
- [ARIA in HTML](https://w3c.github.io/html-aria/)
- [HTML `<figure>` Element](/de/docs/Web/HTML/Element/figure)
- [HTML `<figcaption>` Element](/de/docs/Web/HTML/Element/figcaption)
