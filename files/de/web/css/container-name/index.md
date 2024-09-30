---
title: container-name
slug: Web/CSS/container-name
l10n:
  sourceCommit: eb7a000b802ee9089456b0d3602c71ff5aabcebd
---

{{CSSRef}}

Die **container-name** [CSS](/de/docs/Web/CSS) Eigenschaft spezifiziert eine Liste von Namenskennungen für Abfrage-Container, die von der [@container](/de/docs/Web/CSS/@container) Regel in einer [Container-Abfrage](/de/docs/Web/CSS/CSS_containment/Container_queries) verwendet werden.
Eine Container-Abfrage wendet Stile auf Elemente basierend auf der Größe des nächsten Vorfahren mit einem Containment-Kontext an.
Wenn einem Containment-Kontext ein Name gegeben wird, kann er speziell mit der {{Cssxref("@container")}} Regel anstelle des nächsten Vorfahren mit Containment angesprochen werden.

> [!NOTE]
> Wenn die Eigenschaften {{cssxref("container-type")}} und `container-name` verwendet werden, werden die `style` und `layout` Werte der {{cssxref("contain")}} Eigenschaft automatisch angewendet.

## Syntax

```css
container-name: none;

/* A single name */
container-name: myLayout;

/* Multiple names */
container-name: myPageLayout myComponentLibrary;

/* Global Values */
container-name: inherit;
container-name: initial;
container-name: revert;
container-name: revert-layer;
container-name: unset;
```

### Werte

- `none`

  - : Standardwert. Der Abfrage-Container hat keinen Namen.

- {{cssxref("custom-ident")}}

  - : Eine case-sensitive Zeichenfolge, die verwendet wird, um den Container zu identifizieren.
    Die folgenden Bedingungen gelten:

    - Der Name darf nicht `or`, `and`, `not` oder `default` sein.
    - Der Name-Wert darf nicht in Anführungszeichen stehen.
    - Der gestrichelte Identifikator, der für benutzerdefinierte Identifikatoren gedacht ist (z.B. `--container-name`), ist erlaubt.
    - Eine Liste von mehreren durch ein Leerzeichen getrennten Namen ist erlaubt.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Verwendung eines Containernamens

Angenommen, folgendes HTML-Beispiel ist eine Kartenkomponente mit einem Titel und etwas Text:

```html
<div class="card">
  <div class="post-meta">
    <h2>Card title</h2>
    <p>My post details.</p>
  </div>
  <div class="post-excerpt">
    <p>
      A preview of my <a href="https://example.com">blog post</a> about cats.
    </p>
  </div>
</div>
```

Um einen Containment-Kontext zu erstellen, fügen Sie die `container-type` Eigenschaft zu einem Element in CSS hinzu.
Im folgenden Beispiel werden zwei Containment-Kontexte erstellt, einer für die Metainformationen der Karte und einer für den Beitrag-Auszug:

> [!NOTE]
> Eine Kurznotation für diese Deklarationen wird auf der {{cssxref("container")}} Seite beschrieben.

```css
.post-meta {
  container-type: inline-size;
}

.post-excerpt {
  container-type: inline-size;
  container-name: excerpt;
}
```

Eine Container-Abfrage über die {{Cssxref("@container")}} Regel schreibt Stile auf die Elemente des Containers, wenn die Abfrage wahr ist.
Das folgende Beispiel hat zwei Container-Abfragen, eine, die nur auf den Inhalt des `.post-excerpt` Elements angewendet wird, und eine, die sowohl auf den `.post-meta` als auch auf den `.post-excerpt` Inhalt angewendet wird:

```css
@container excerpt (min-width: 400px) {
  p {
    visibility: hidden;
  }
}

@container (min-width: 400px) {
  p {
    font-size: 2rem;
  }
}
```

Weitere Informationen zum Schreiben von Container-Abfragen finden Sie auf der Seite [CSS Container Queries](/de/docs/Web/CSS/CSS_containment/Container_queries).

### Verwendung mehrerer Container-Namen

Sie können auch mehrere Namen für einen Container-Kontext angeben, die durch ein Leerzeichen getrennt sind:

```css
.post-meta {
  container-type: inline-size;
  container-name: meta card;
}
```

Dies ermöglicht es Ihnen, den Container mit entweder Namen in der {{cssxref("@container")}} Regel anzusprechen.
Dies ist nützlich, wenn Sie denselben Container mit mehreren Container-Abfragen ansprechen möchten, bei denen entweder Bedingung erfüllt sein könnte:

```css
@container meta (max-width: 500px) {
  p {
    visibility: hidden;
  }
}

@container card (max-height: 200px) {
  h2 {
    font-size: 1.5em;
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)
- [Verwendung von Containergröße und Stilabfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
- {{Cssxref("@container")}} Regel
- CSS {{Cssxref("container")}} Kurzschreibung-Eigenschaft
- CSS {{Cssxref("container-type")}} Eigenschaft
- CSS {{cssxref("content-visibility")}} Eigenschaft
