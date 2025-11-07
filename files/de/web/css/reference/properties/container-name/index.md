---
title: container-name
slug: Web/CSS/Reference/Properties/container-name
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Die **container-name** [CSS](/de/docs/Web/CSS)-Eigenschaft spezifiziert eine Liste von Abfragenamen für Container, die von der [@container](/de/docs/Web/CSS/Reference/At-rules/@container)-At-Regel in einer [Container-Abfrage](/de/docs/Web/CSS/CSS_containment/Container_queries) verwendet werden. Eine Container-Abfrage wendet Stile auf Elemente basierend auf der [Größe](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_size_queries) oder dem [Scroll-Zustand](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries) des nächsten Vorfahren mit einem Containment-Kontext an. Wenn ein Containment-Kontext einen Namen erhält, kann er spezifisch mit der {{Cssxref("@container")}}-Regel anstelle des nächsten Vorfahren mit Containment ins Visier genommen werden.

## Syntax

```css
container-name: none;

/* A single name */
container-name: my-layout;

/* Multiple names */
container-name: my-page-layout my-component-library;

/* Global Values */
container-name: inherit;
container-name: initial;
container-name: revert;
container-name: revert-layer;
container-name: unset;
```

### Werte

- `none`
  - : Standardwert. Der Abfragecontainer hat keinen Namen.

- {{cssxref("custom-ident")}}
  - : Eine Groß-/Kleinschreibung beachtende Zeichenkette, die zur Identifizierung des Containers verwendet wird. Die folgenden Bedingungen gelten:
    - Der Name darf nicht `or`, `and`, `not` oder `default` sein.
    - Der Name darf nicht in Anführungszeichen stehen.
    - Das gestreifte Ident, das zur Kennzeichnung von benutzerdefinierten Identifikatoren gedacht ist (z. B. `--container-name`), ist zulässig.
    - Eine Liste mit mehreren Namen, die durch ein Leerzeichen getrennt sind, ist erlaubt.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Verwendung eines Container-Namens

Angenommen, das folgende HTML-Beispiel ist eine Kartenkomponente mit einem Titel und etwas Text:

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

Um einen Containment-Kontext zu erstellen, fügen Sie die `container-type`-Eigenschaft einem Element in CSS hinzu. Das folgende Beispiel erstellt zwei Containment-Kontexte, einen für die Metainformationen der Karte und einen für den Beitrag-Auszug:

> [!NOTE]
> Eine Kurzschrift-Syntax für diese Deklarationen wird auf der {{cssxref("container")}}-Seite beschrieben.

```css
.post-meta {
  container-type: inline-size;
}

.post-excerpt {
  container-type: inline-size;
  container-name: excerpt;
}
```

Das Schreiben einer Container-Abfrage über die {{Cssxref("@container")}}-Regel wird die Stile auf die Elemente des Containers anwenden, wenn die Abfrage als wahr ausgewertet wird. Das folgende Beispiel hat zwei Container-Abfragen, eine, die nur auf die Inhalte des `.post-excerpt`-Elements angewendet wird, und eine, die sowohl auf die `.post-meta`- als auch auf die `.post-excerpt`-Inhalte angewendet wird:

```css
@container excerpt (width >= 400px) {
  p {
    visibility: hidden;
  }
}

@container (width >= 400px) {
  p {
    font-size: 2rem;
  }
}
```

Für weitere Informationen zu Container-Abfragen siehe die Seite [CSS Container Queries](/de/docs/Web/CSS/CSS_containment/Container_queries).

### Verwendung mehrerer Container-Namen

Sie können auch mehrere Namen für einen Container-Kontext bereitstellen, getrennt durch ein Leerzeichen:

```css
.post-meta {
  container-type: inline-size;
  container-name: meta card;
}
```

Dies ermöglicht es Ihnen, den Container mit einem der beiden Namen in der {{cssxref("@container")}}-Regel anzusteuern. Dies ist nützlich, wenn Sie denselben Container mit mehreren Container-Abfragen ansteuern möchten, bei denen entweder die eine oder die andere Bedingung erfüllt sind:

```css
@container meta (width <= 500px) {
  p {
    visibility: hidden;
  }
}

@container card (width <= 200px) {
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

- [CSS-Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)
- [Verwendung von Container-Größen- und Stilabfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
- [Verwendung von Container-Scroll-Zustandsabfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries)
- {{Cssxref("@container")}}-Regel
- CSS {{Cssxref("container")}}-Kurzschreibweise
- CSS {{Cssxref("container-type")}}-Eigenschaft
- CSS {{cssxref("content-visibility")}}-Eigenschaft
