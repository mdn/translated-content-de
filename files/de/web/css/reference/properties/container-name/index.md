---
title: "`container-name` CSS property"
short-title: container-name
slug: Web/CSS/Reference/Properties/container-name
l10n:
  sourceCommit: c4e64810ce10fb5cb1eebfcd8b6f526866fd0982
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **container-name** legt eine Liste von Namen für Abfragecontainer fest, die von der [@container](/de/docs/Web/CSS/Reference/At-rules/@container)-At-Regel in einer [Containerabfrage](/de/docs/Web/CSS/Guides/Containment/Container_queries) verwendet werden.

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

Diese Eigenschaft wird als durch Leerzeichen getrennte Liste von `<custom-ident>`-Werten oder mit dem Schlüsselwort `none` angegeben:

- `none`
  - : Der Standardwert. Der Abfragecontainer hat keinen Namen.

- {{cssxref("custom-ident")}}
  - : Eine Zeichenfolge, bei der zwischen Groß- und Kleinschreibung unterschieden wird und die zur Identifizierung des Containers dient.
    Dabei gelten folgende Bedingungen:
    - Der Name darf nicht `or`, `and`, `not` oder `default` sein.
    - Der Name darf nicht in Anführungszeichen stehen.
    - Ein mit zwei Bindestrichen beginnender Bezeichner für benutzerdefinierte Kennungen (z. B. `--container-name`) ist zulässig.
    - Eine durch Leerzeichen getrennte Liste mehrerer Namen ist zulässig.

## Beschreibung

Wenn kein Name angegeben ist, wendet eine Containerabfrage Stile auf Elemente an, die auf Eigenschaften wie der [Größe](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#container_size_queries) oder dem [Scrollzustand](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries) des nächstgelegenen Vorfahren mit einem [Containment-Kontext](/de/docs/Web/CSS/Guides/Containment/Container_queries#naming_containment_contexts) basieren.

> [!NOTE]
> Die Größe von Nachfahren eines Größencontainers kann mithilfe von [Längeneinheiten für Containerabfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries#container_query_length_units) festgelegt werden.

Wenn ein Containment-Kontext einen Namen erhält, kann er gezielt angesprochen werden, indem dieser Name in einer {{Cssxref("@container")}}-At-Regel angegeben wird.

Sie können einen Abfragecontainer erstellen, indem Sie einem Element einen `container-name` zuweisen, und anschließend in der zugehörigen `@container`-At-Regel ohne Abfrageausdruck lediglich prüfen, ob dieser Name vorhanden ist. Mit solchen [**Containerabfragen nur anhand des Namens**](/de/docs/Web/CSS/Guides/Containment/Container_queries#name-only_container_queries) können Sie Stile gezielt auf Elemente anwenden, je nachdem, ob sie einen Vorfahren mit einem bestimmten `container-name` haben.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Einen Containernamen verwenden

Das folgende HTML-Beispiel zeigt eine Kartenkomponente mit einem Titel und etwas Text:

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

Um einen Containment-Kontext zu erstellen, fügen Sie einem Element in CSS die Eigenschaft `container-type` hinzu.
Das folgende Beispiel erstellt zwei Containment-Kontexte: einen für die Metainformationen der Karte und einen für den Textauszug des Beitrags:

> [!NOTE]
> Eine Kurzschreibweise für diese Deklarationen wird auf der Seite zu {{cssxref("container")}} beschrieben.

```css
.post-meta {
  container-type: inline-size;
}

.post-excerpt {
  container-type: inline-size;
  container-name: excerpt;
}
```

Eine Containerabfrage mit der {{Cssxref("@container")}}-At-Regel wendet Stile auf die Elemente des Containers an, wenn die Abfrage „wahr“ ergibt.
Das folgende Beispiel enthält zwei Containerabfragen: Eine gilt nur für den Inhalt des Elements `.post-excerpt`, die andere sowohl für den Inhalt von `.post-meta` als auch für den von `.post-excerpt`:

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

Weitere Informationen zum Schreiben von Containerabfragen finden Sie auf der Seite [CSS-Containerabfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries).

### Mehrere Containernamen verwenden

Sie können einem Containment-Kontext auch mehrere durch Leerzeichen getrennte Namen zuweisen:

```css
.post-meta {
  container-type: inline-size;
  container-name: meta card;
}
```

Dadurch können Sie den Container in der {{cssxref("@container")}}-At-Regel über jeden dieser Namen ansprechen.
Das ist nützlich, wenn Sie denselben Container mit mehreren Containerabfragen ansprechen möchten, bei denen jeweils eine der Bedingungen erfüllt sein kann:

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

### Eine Containerabfrage nur anhand des Namens verwenden

Dieses Beispiel zeigt, wie Sie eine [Containerabfrage nur anhand des Namens](/de/docs/Web/CSS/Guides/Containment/Container_queries#name-only_container_queries) verwenden.

#### HTML

Wir fügen ein {{htmlelement("div")}} mit der `id` `container` sowie drei {{htmlelement("p")}}-Elemente ein: zwei innerhalb und eines außerhalb des Containers.

```html live-sample_name-only
<div id="container">
  <p>I'm in the container.</p>
  <p>I'm also in the container.</p>
</div>
<p>I'm not in the container.</p>
```

#### CSS

Wir weisen dem Container einen Namen zu:

```css live-sample_name-only
#container {
  container-name: my-container;
}
```

Anschließend können wir Stile gezielt nur auf Elemente innerhalb von Containern mit diesem Namen anwenden, wie der nächste Ausschnitt zeigt.

```css live-sample_name-only
@container my-container {
  p {
    background-color: lime;
    font-size: 1.3rem;
    width: 50vw;
    padding: 0.5rem;
    font-family: sans-serif;
  }
}
```

#### Ergebnis

{{embedlivesample("using_a_name-only_container_query", "100%", 300)}}

Die angegebenen Stile sollten nur auf das erste und zweite {{htmlelement("p")}}-Element angewendet werden, nicht aber auf das dritte.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Containerabfragen](/de/docs/Web/CSS/Guides/Containment/Container_queries)
- [Containerabfragen für Größe und Stil verwenden](/de/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries)
- [Containerabfragen für den Scrollzustand verwenden](/de/docs/Web/CSS/Guides/Conditional_rules/Container_scroll-state_queries)
- {{Cssxref("@container")}}-At-Regel
- CSS-Kurzschreibweise {{Cssxref("container")}}
- CSS-Eigenschaft {{Cssxref("container-type")}}
- CSS-Eigenschaft {{cssxref("content-visibility")}}
