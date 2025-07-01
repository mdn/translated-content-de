---
title: container-name
slug: Web/CSS/container-name
l10n:
  sourceCommit: 63cbf204323f117a2a80c7aa6273e50253ab9d07
---

{{CSSRef}}

Die **container-name**-Eigenschaft ([CSS](/de/docs/Web/CSS)) gibt eine Liste von Abfragecontainer-Namen an, die von der [@container](/de/docs/Web/CSS/@container)-Regel in einer [Container-Abfrage](/de/docs/Web/CSS/CSS_containment/Container_queries) verwendet werden.
Eine Container-Abfrage wendet Stile auf Elemente basierend auf der [Größe](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries#container_size_queries) oder dem [Scroll-Zustand](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries) des nächstgelegenen Vorfahren mit einem Containment-Kontext an.
Wenn einem Containment-Kontext ein Name gegeben wird, kann dieser spezifisch mit der {{Cssxref("@container")}}-Regel und nicht mit dem nächstgelegenen Vorfahren mit Containment angesprochen werden.

> [!NOTE]
> Wenn Sie die Eigenschaften {{cssxref("container-type")}} und `container-name` verwenden, werden die Werte `style` und `layout` der Eigenschaft {{cssxref("contain")}} automatisch angewendet.

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
  - : Eine Groß-/Kleinschreibung beachtende Zeichenkette, die verwendet wird, um den Container zu identifizieren. Die folgenden Bedingungen gelten:
    - Der Name darf nicht `or`, `and`, `not` oder `default` entsprechen.
    - Der Name darf nicht in Anführungszeichen stehen.
    - Der gestrichelte Identifikationsname, der dazu gedacht ist, benutzerdefinierte Identifikatoren zu kennzeichnen (z. B. `--container-name`), ist erlaubt.
    - Eine Liste mehrerer durch Leerzeichen getrennter Namen ist zulässig.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Verwendung eines Containernamens

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

Um einen Containment-Kontext zu erstellen, fügen Sie die Eigenschaft `container-type` zu einem Element in CSS hinzu.
Das folgende Beispiel erstellt zwei Containment-Kontexte, einen für die Metainformationen der Karte und einen für den Post-Ausschnitt:

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

Das Schreiben einer Container-Abfrage über die {{Cssxref("@container")}}-Regel wird Stile auf die Elemente des Containers anwenden, wenn die Abfrage als wahr ausgewertet wird.
Das folgende Beispiel enthält zwei Container-Abfragen, eine, die nur auf den Inhalt des `.post-excerpt`-Elements angewendet wird, und eine, die sowohl auf den `.post-meta`- als auch auf den `.post-excerpt`-Inhalt angewendet wird:

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

Weitere Informationen zum Schreiben von Container-Abfragen finden Sie auf der Seite [CSS Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries).

### Verwendung mehrerer Containernamen

Sie können auch mehrere Namen für einen Container-Kontext angeben, die durch ein Leerzeichen getrennt sind:

```css
.post-meta {
  container-type: inline-size;
  container-name: meta card;
}
```

Dies ermöglicht es Ihnen, den Container mit einem der Namen in der {{cssxref("@container")}}-Regel anzusprechen.
Dies ist nützlich, wenn Sie denselben Container mit mehreren Container-Abfragen ansprechen möchten, bei denen eine der Bedingungen zutreffen könnte:

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

- [CSS Container-Abfragen](/de/docs/Web/CSS/CSS_containment/Container_queries)
- [Verwendung von Containergrößen- und Stilabfragen](/de/docs/Web/CSS/CSS_containment/Container_size_and_style_queries)
- [Verwendung von Container-Scroll-Zustand-Abfragen](/de/docs/Web/CSS/CSS_conditional_rules/Container_scroll-state_queries)
- {{Cssxref("@container")}}-Regel
- CSS-{{Cssxref("container")}}-Kurzschreibweise
- CSS-{{Cssxref("container-type")}}-Eigenschaft
- CSS-{{cssxref("content-visibility")}}-Eigenschaft
