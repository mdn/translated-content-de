---
title: container-name
slug: Web/CSS/container-name
l10n:
  sourceCommit: eb7a000b802ee9089456b0d3602c71ff5aabcebd
---

{{CSSRef}}

Die **container-name** [CSS](/de/docs/Web/CSS)-Eigenschaft legt eine Liste von Abfragcontainernamen fest, die durch die [@container](/de/docs/Web/CSS/@container)-Regel in einer [Container-Abfrage](/de/docs/Web/CSS/CSS_containment/Container_queries) verwendet werden. Eine Container-Abfrage wendet Stilelemente basierend auf der Größe des nächsten Vorfahren mit einem Containment-Kontext an. Wenn einem Containment-Kontext ein Name zugewiesen wird, kann er mit der {{Cssxref("@container")}}-Regel anstelle des nächsten Vorfahren mit Containment gezielt angesprochen werden.

> [!NOTE]
> Bei Verwendung der Eigenschaften {{cssxref("container-type")}} und `container-name` werden die Werte `style` und `layout` der {{cssxref("contain")}}-Eigenschaft automatisch angewendet.

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

  - : Standardwert. Der Abfragecontainer hat keinen Namen.

- {{cssxref("custom-ident")}}

  - : Eine groß- und kleinschreibungssensitive Zeichenfolge, die zur Identifizierung des Containers verwendet wird.
    Folgende Bedingungen gelten:

    - Der Name darf nicht `or`, `and`, `not` oder `default` sein.
    - Der Name darf nicht in Anführungszeichen stehen.
    - Das gestrichelte Identifikationsmittel zur Kennzeichnung von Benutzern definierten Bezeichnern (z.B. `--container-name`) ist erlaubt.
    - Eine Liste mehrerer Namen, getrennt durch ein Leerzeichen, ist zulässig.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Verwendung eines Container-Namens

Hier ist ein HTML-Beispiel, das eine Kartenkomponente mit einem Titel und etwas Text darstellt:

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

Um einen Containment-Kontext zu erstellen, fügen Sie die Eigenschaft `container-type` einem Element in CSS hinzu. Das folgende Beispiel erstellt zwei Containment-Kontexte, einen für die Metainformationen der Karte und einen für den Beitrag-Auszug:

> [!NOTE]
> Eine Kurzschreibweise für diese Deklarationen wird auf der {{cssxref("container")}}-Seite beschrieben.

```css
.post-meta {
  container-type: inline-size;
}

.post-excerpt {
  container-type: inline-size;
  container-name: excerpt;
}
```

Das Schreiben einer Container-Abfrage über die {{Cssxref("@container")}}-Regel wird Stile auf die Elemente des Containers anwenden, wenn die Abfrage true ergibt. Das folgende Beispiel hat zwei Container-Abfragen, eine, die nur auf die Inhalte des `.post-excerpt`-Elements angewendet wird, und eine, die sowohl auf die Inhalte von `.post-meta` als auch `.post-excerpt` angewendet wird:

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

Weitere Informationen zum Schreiben von Container-Abfragen finden Sie auf der Seite [CSS-Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries).

### Verwendung mehrerer Container-Namen

Sie können einem Container-Kontext auch mehrere mit einem Leerzeichen getrennte Namen zuweisen:

```css
.post-meta {
  container-type: inline-size;
  container-name: meta card;
}
```

Dies ermöglicht es Ihnen, den Container mit einem der Namen in der {{cssxref("@container")}}-Regel anzusprechen. Dies ist nützlich, wenn Sie denselben Container mit mehreren Container-Abfragen ansprechen möchten, bei denen eine der Bedingungen zutreffen könnte:

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

- [CSS-Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)
- [Verwendung von Container-Größen- und Stilabfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
- {{Cssxref("@container")}}-Regel
- CSS {{Cssxref("container")}}-Kurzschreibweise
- CSS {{Cssxref("container-type")}}-Eigenschaft
- CSS {{cssxref("content-visibility")}}-Eigenschaft
