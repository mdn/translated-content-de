---
title: "<dfn>: Das Definitionselement"
slug: Web/HTML/Reference/Elements/dfn
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`<dfn>`**-[HTML](/de/docs/Web/HTML)-Element zeigt einen zu definierenden Begriff an. Das `<dfn>`-Element sollte in einer vollständigen Definitionsaussage verwendet werden, bei der die vollständige Definition des Begriffs eines der folgenden sein kann:

- Der übergeordnete Absatz (ein Textblock, manchmal markiert durch ein {{HTMLElement("p")}}-Element)
- Das {{HTMLElement("dt")}}/{{HTMLElement("dd")}}-Paar
- Der nächste [Abschnitt](/de/docs/Web/HTML/Guides/Content_categories#sectioning_content) über dem `<dfn>`-Element,

{{InteractiveExample("HTML Demo: &lt;dfn&gt;", "tabbed-shorter")}}

```html interactive-example
<p>
  A <dfn id="def-validator">validator</dfn> is a program that checks for syntax
  errors in code or documents.
</p>
```

```css interactive-example
dfn {
  /* Add your styles here */
}
```

## Attribute

Die Attribute dieses Elements umfassen die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

Das [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)-Attribut hat eine besondere Bedeutung, wie unten erwähnt.

## Nutzungshinweise

Es gibt einige nicht sofort offensichtliche Aspekte bei der Verwendung des `<dfn>`-Elements. Wir untersuchen diese hier.

### Festlegung des zu definierenden Begriffs

Der zu definierende Begriff wird gemäß diesen Regeln identifiziert:

1. Wenn das `<dfn>`-Element ein [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)-Attribut besitzt, wird der Wert des `title`-Attributs als der zu definierende Begriff angesehen. Das Element muss immer noch Text enthalten, aber dieser Text kann eine Abkürzung (möglicherweise unter Verwendung von {{HTMLElement("abbr")}}) oder eine andere Form des Begriffs sein.
2. Wenn das `<dfn>`-Element ein einzelnes Kindelement enthält und keinen eigenen Textinhalt hat, und das Kindelement ein {{HTMLElement("abbr")}}-Element mit einem eigenen `title`-Attribut ist, dann ist der genaue Wert des `title`-Attributs des `<abbr>`-Elements der zu definierende Begriff.
3. Andernfalls ist der Textinhalt des `<dfn>`-Elements der zu definierende Begriff. Dies wird [im ersten Beispiel unten](#grundlegende_identifizierung_eines_begriffs) gezeigt.

> [!NOTE]
> Wenn das `<dfn>`-Element ein `title`-Attribut hat, _muss_ es den zu definierenden Begriff und keinen anderen Text enthalten.

### Verlinkungen zu `<dfn>`-Elementen

Wenn Sie ein [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut auf dem `<dfn>`-Element hinzufügen, können Sie dann mit {{HTMLElement("a")}}-Elementen darauf verlinken. Solche Links sollten Verwendungen des Begriffs sein, mit der Absicht, dass der Leser schnell zur Definition des Begriffs navigieren kann, wenn er nicht bereits darüber Bescheid weiß, indem er auf den Link des Begriffs klickt.

Dies wird im Beispiel unter [Links zu Definitionen](#links_zu_definitionen) unten gezeigt.

## Beispiele

Sehen wir uns einige Beispiele für verschiedene Nutzungsszenarien an.

### Grundlegende Identifizierung eines Begriffs

Dieses Beispiel verwendet ein einfaches `<dfn>`-Element, um den Ort eines Begriffs innerhalb der Definition zu identifizieren.

#### HTML

```html
<p>
  The <strong>HTML Definition element (<dfn>&lt;dfn&gt;</dfn>)</strong> is used
  to indicate the term being defined within the context of a definition phrase
  or sentence.
</p>
```

Da das `<dfn>`-Element kein `title` hat, werden die Textinhalte des `<dfn>`-Elements selbst als der zu definierende Begriff verwendet.

#### Ergebnis

{{EmbedLiveSample("Basic_identification_of_a_term", 650, 120)}}

### Links zu Definitionen

Um Links zu den Definitionen hinzuzufügen, erstellen Sie den Link wie immer mit dem {{HTMLElement("a")}}-Element.

#### HTML

```html-nolint
<p>
  The
  <strong>HTML Definition element (<dfn id="definition-dfn">&lt;dfn&gt;</dfn>)</strong>
  is used to indicate the term being defined within the context of a definition
  phrase or sentence.
</p>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Graece donan, Latine
  voluptatem vocant. Confecta res esset. Duo Reges: constructio interrete.
  Scrupulum, inquam, abeunti;
</p>

<p>
  Because of all of that, we decided to use the
  <code><a href="#definition-dfn">&lt;dfn&gt;</a></code> element for this
  project.
</p>
```

Hier sehen wir die Definition — nun mit einem [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut, `"definition-dfn"`, das als Ziel eines Links verwendet werden kann. Später wird ein Link erstellt, indem `<a>` mit dem [`href`](/de/docs/Web/HTML/Reference/Elements/a#href)-Attribut auf `"#definition-dfn"` gesetzt wird, um den Link zurück zur Definition einzurichten.

#### Ergebnis

{{EmbedLiveSample("Links_to_definitions", 650, 300)}}

### Verwendung von Abkürzungen und Definitionen zusammen

In einigen Fällen möchten Sie möglicherweise eine Abkürzung für einen Begriff verwenden, wenn Sie ihn definieren. Dies kann durch die Verwendung von `<dfn>`- und {{HTMLElement("abbr")}}-Elementen zusammen erreicht werden, so:

#### HTML

```html
<p>
  The <dfn><abbr title="Hubble Space Telescope">HST</abbr></dfn> is among the
  most productive scientific instruments ever constructed. It has been in orbit
  for over 20 years, scanning the sky and returning data and photographs of
  unprecedented quality and detail.
</p>

<p>
  Indeed, the <abbr title="Hubble Space Telescope">HST</abbr> has arguably done
  more to advance science than any device ever built.
</p>
```

Beachten Sie das `<abbr>`-Element, das im `<dfn>`-Element verschachtelt ist. Das erstere etabliert, dass der Begriff eine Abkürzung ("HST") ist und gibt den vollständigen Begriff ("Hubble Space Telescope") in seinem `title`-Attribut an. Letzteres zeigt an, dass der abgekürzte Begriff einen zu definierenden Begriff darstellt.

#### Ergebnis

{{EmbedLiveSample("Using_abbreviations_and_definitions_together", 650, 200)}}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flow-Inhalt</a>,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasen-Inhalt</a>,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#palpable_content">spürbarer Inhalt</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasen-Inhalt</a>,
        aber kein <code>&lt;dfn&gt;</code>-Element darf ein Nachkomme sein.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasen-Inhalt</a> akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/term_role"><code>term</code></a></td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Beliebig</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLElement`](/de/docs/Web/API/HTMLElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Elemente im Zusammenhang mit Definitionslisten: {{HTMLElement("dl")}}, {{HTMLElement("dt")}}, {{HTMLElement("dd")}}
- {{HTMLElement("abbr")}}
