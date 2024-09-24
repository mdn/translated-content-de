---
title: container-name
slug: Web/CSS/container-name
l10n:
  sourceCommit: eb7a000b802ee9089456b0d3602c71ff5aabcebd
---

{{CSSRef}}

Die **container-name** [CSS](/de/docs/Web/CSS) Eigenschaft gibt eine Liste von Containernamen an, die von der [@container](/de/docs/Web/CSS/@container) Regel in einer [Container-Abfrage](/de/docs/Web/CSS/CSS_containment/Container_queries) verwendet werden. Eine Container-Abfrage wendet Stile auf Elemente entsprechend der Größe des nächstgelegenen Vorfahren mit einem Containment-Kontext an. Wenn einem Containment-Kontext ein Name zugewiesen wird, kann dieser mit der {{Cssxref("@container")}} Regel gezielt angesprochen werden, anstatt den nächstgelegenen Vorfahren mit Containment zu verwenden.

> [!NOTE]
> Wenn Sie die Eigenschaften {{cssxref("container-type")}} und `container-name` verwenden, werden die Werte `style` und `layout` der Eigenschaft {{cssxref("contain")}} automatisch angewendet.

## Syntax

```css
container-name: none;

/* Ein einzelner Name */
container-name: myLayout;

/* Mehrere Namen */
container-name: myPageLayout myComponentLibrary;

/* Globale Werte */
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

  - : Ein groß-/klein-sensitiver String, der zur Identifizierung des Containers verwendet wird. Folgende Bedingungen gelten:

    - Der Name darf nicht `or`, `and`, `not` oder `default` entsprechen.
    - Der Name darf nicht in Anführungszeichen stehen.
    - Der gestrichelte Identifikator, der zur Kennzeichnung von benutzerdefinierten Identifikatoren gedacht ist (z.B. `--container-name`), ist zulässig.
    - Eine Liste von mehreren Namen, die durch ein Leerzeichen getrennt sind, ist erlaubt.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Verwendung eines Containernamens

Gegeben ist das folgende HTML-Beispiel, das eine Kartenkomponente mit einem Titel und etwas Text darstellt:

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

Um einen Containment-Kontext zu erstellen, fügen Sie einem Element in CSS die Eigenschaft `container-type` hinzu. Das folgende Beispiel erstellt zwei Containment-Kontexte, einen für die Metainformationen der Karte und einen für den Beitrag-Auszug:

> [!NOTE]
> Eine Kurzschreibweise für diese Deklarationen wird auf der Seite {{cssxref("container")}} beschrieben.

```css
.post-meta {
  container-type: inline-size;
}

.post-excerpt {
  container-type: inline-size;
  container-name: excerpt;
}
```

Das Schreiben einer Container-Abfrage über die {{Cssxref("@container")}} Regel wird die Stile auf die Elemente des Containers anwenden, wenn die Abfrage zutrifft. Das folgende Beispiel hat zwei Container-Abfragen: eine, die nur auf den Inhalt des `.post-excerpt` Elements angewendet wird, und eine, die sowohl auf den `.post-meta` als auch `.post-excerpt` Inhalt angewendet wird:

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

Für weitere Informationen über das Schreiben von Container-Abfragen siehe die Seite [CSS Container Queries](/de/docs/Web/CSS/CSS_containment/Container_queries).

### Verwendung mehrerer Containernamen

Sie können einem Container-Kontext auch mehrere Namen geben, die durch ein Leerzeichen getrennt sind:

```css
.post-meta {
  container-type: inline-size;
  container-name: meta card;
}
```

Dies ermöglicht es Ihnen, den Container unter Verwendung von entweder Namen in der {{cssxref("@container")}} Regel anzusprechen. Dies ist nützlich, wenn Sie denselben Container mit mehreren Container-Abfragen ansprechen möchten, bei denen entweder Bedingung zutreffen könnte:

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
- [Verwendung von Container-Größen- und Stilabfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
- {{Cssxref("@container")}} Regel
- CSS {{Cssxref("container")}} Kurzschreibweise
- CSS {{Cssxref("container-type")}} Eigenschaft
- CSS {{cssxref("content-visibility")}} Eigenschaft
