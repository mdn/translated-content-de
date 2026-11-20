---
title: "ARIA: figure-Rolle"
short-title: figure
slug: Web/Accessibility/ARIA/Reference/Roles/figure_role
l10n:
  sourceCommit: 5af4f6e12c119ea0d809b35b3fa3266a0fbe4ef4
---

Die ARIA-Rolle `figure` kann verwendet werden, um eine Abbildung innerhalb des Seiteninhalts zu kennzeichnen, wenn keine geeignete Semantik vorhanden ist. Eine Abbildung besteht im Allgemeinen aus einem oder mehreren Bildern, Codeausschnitten oder anderen Inhalten, die Informationen anders vermitteln als fortlaufender Text.

## Beschreibung

Eine `figure` ist ein wahrnehmbarer Inhaltsabschnitt, der typischerweise ein grafisches Dokument, Bilder, Codeausschnitte oder Beispieltext enthält. Die einzelnen Teile einer Abbildung KÖNNEN für Benutzer navigierbar sein. Jeder Inhalt, der zusammengefasst und als Abbildung wahrgenommen werden soll – beispielsweise Bilder, Videos, Audio, Codeausschnitte oder andere Inhalte –, kann mit `role="figure"` als Abbildung gekennzeichnet werden.

```html
<div role="figure" aria-labelledby="caption">
  <img src="image.png" alt="put image description here" />
  <p id="caption">Figure 1: The caption</p>
</div>
```

Im obigen Beispiel besteht die Abbildung aus zwei separaten Inhaltselementen: einem Bild und einer Bildunterschrift. Beide sind von einem {{htmlelement("div")}}-Element umschlossen, das den Inhalt mit `role="figure"` als Abbildung kennzeichnet.

Verwenden Sie in HTML die Elemente {{HTMLElement('figure')}} und {{HTMLElement('figcaption')}}. Das figcaption dient als zugänglicher Name für die Abbildung. Wenn Sie kein HTML verwenden oder bestehenden HTML-Code nachträglich anpassen, verwenden Sie [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) für die Abbildung und verweisen damit auf ihre Bildunterschrift.
Wenn keine sichtbare Bildunterschrift vorhanden ist, können Sie [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) verwenden.

```html
<div role="figure" aria-labelledby="figure-1">
  …
  <p id="figure-1">Text that describes the figure.</p>
</div>
```

- Verwenden Sie `aria-labelledby`, wenn der Text eine knappe Beschriftung ist.
- Verwenden Sie [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby), wenn der Text eine längere Beschreibung ist.
- Verwenden Sie [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label), wenn keine sichtbare Bildunterschrift vorhanden ist.

Dies lässt sich ohne ARIA semantisch mit dem HTML-Element {{HTMLElement('figure')}} und dem Element {{HTMLElement('figcaption')}} umsetzen.

```html
<figure>
  <img src="image.png" alt="put image description here" />
  <figcaption>Figure 1: The caption</figcaption>
</figure>
```

> [!NOTE]
> Verwenden Sie nach Möglichkeit die passenden semantischen HTML-Elemente, um eine Abbildung und ihre Bildunterschrift auszuzeichnen: {{htmlelement("figure")}} und {{htmlelement("figcaption")}}.

### Zugehörige WAI-ARIA-Rollen, Zustände und Eigenschaften

- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
  - : Die id eines Elements mit Referenztext, der als Bildunterschrift dient.
- [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Die id eines Elements mit Text, der als Beschriftung dient.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Wenn kein Element mit Text vorhanden ist, der als Beschriftung dienen könnte, können Sie die Beschriftung direkt als Wert von `aria-label` auf dem Element mit der Rolle `figure` oder auf dem `<figure>`-Element angeben.

### Tastaturinteraktionen

Es gibt keine rollenspezifischen Tastaturinteraktionen.

### Erforderliche JavaScript-Funktionen

Es gibt keine rollenspezifischen JavaScript-Anforderungen. Wenn Sie die HTML-Semantik nicht beeinflussen können, können Sie die Barrierefreiheit des HTML-Codes verbessern, indem Sie diese Rollen und Eigenschaften mit JavaScript hinzufügen.

## Bewährte Verfahren

Verwenden Sie `role="figure"` nur, wenn es erforderlich ist – beispielsweise wenn Sie den HTML-Code nicht ändern können, aber die Barrierefreiheit nachträglich dynamisch mit JavaScript verbessern können.

Verwenden Sie nach Möglichkeit die passenden semantischen HTML-Elemente, um eine Abbildung und ihre Bildunterschrift auszuzeichnen: {{htmlelement("figure")}} und {{htmlelement("figcaption")}}. Unser obiges Beispiel sollte beispielsweise wie folgt umgeschrieben werden:

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

## Beispiele

Wir könnten das erste Beispiel auf dieser Seite erweitern und zusätzlich einen Absatz als beschreibende Beschriftung für die Abbildung kennzeichnen, indem wir in `aria-labelledby` auf dessen ID verweisen:

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

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Accessibility Object Model](https://wicg.github.io/aom/spec/)
- [ARIA in HTML](https://w3c.github.io/html-aria/)
- [HTML-Element `<figure>`](/de/docs/Web/HTML/Reference/Elements/figure)
- [HTML-Element `<figcaption>`](/de/docs/Web/HTML/Reference/Elements/figcaption)
