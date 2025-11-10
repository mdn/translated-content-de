---
title: "<dfn>: Das Definitionselement"
slug: Web/HTML/Reference/Elements/dfn
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`<dfn>`** [HTML](/de/docs/Web/HTML)-Element kennzeichnet einen zu definierenden Begriff. Das `<dfn>`-Element sollte in einer vollständigen Definitionsaussage verwendet werden, bei der die vollständige Definition des Begriffs eine der folgenden sein kann:

- Der übergeordnete Absatz (ein Textblock, manchmal markiert durch ein {{HTMLElement("p")}}-Element)
- Die {{HTMLElement("dt")}}/{{HTMLElement("dd")}}-Paarung
- Der nächste [Abschnitt](/de/docs/Web/HTML/Guides/Content_categories#sectioning_content) des `<dfn>`-Elements,

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

Zu den Attributen dieses Elements gehören die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

Das [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)-Attribut hat eine besondere Bedeutung, wie unten beschrieben.

## Verwendungshinweise

Es gibt einige nicht ganz offensichtliche Aspekte bei der Verwendung des `<dfn>`-Elements. Wir untersuchen diese hier.

### Angabe des zu definierenden Begriffs

Der zu definierende Begriff wird anhand der folgenden Regeln identifiziert:

1. Wenn das `<dfn>`-Element ein [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)-Attribut hat, wird der Wert des `title`-Attributs als der zu definierende Begriff angesehen. Das Element muss dennoch Text enthalten, aber dieser Text kann eine Abkürzung sein (vielleicht unter Verwendung von {{HTMLElement("abbr")}}) oder eine andere Form des Begriffs.
2. Wenn das `<dfn>`-Element ein einzelnes Kindelement enthält und keinen eigenen Textinhalt hat, und das Kindelement ein {{HTMLElement("abbr")}}-Element mit einem `title`-Attribut ist, dann ist der exakte Wert des `title` des `<abbr>`-Elements der definierte Begriff.
3. Andernfalls ist der Textinhalt des `<dfn>`-Elements der zu definierende Begriff. Dies wird [im ersten Beispiel unten](#grundlegende_identifizierung_eines_begriffs) gezeigt.

> [!NOTE]
> Wenn das `<dfn>`-Element ein `title`-Attribut hat, _muss_ es den zu definierenden Begriff und keinen anderen Text enthalten.

### Links zu `<dfn>`-Elementen

Wenn Sie ein [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut am `<dfn>`-Element hinzufügen, können Sie mit {{HTMLElement("a")}}-Elementen darauf verlinken. Solche Links sollten Verwendungen des Begriffs sein, mit der Absicht, dass der Leser schnell zur Definition des Begriffs navigieren kann, falls er damit nicht bereits vertraut ist, indem er auf den Link des Begriffs klickt.

Dies wird im Beispiel unter [Links zu Definitionen](#links_zu_definitionen) unten gezeigt.

## Beispiele

Sehen wir uns einige Beispiele für verschiedene Nutzungsszenarien an.

### Grundlegende Identifizierung eines Begriffs

Dieses Beispiel verwendet ein einfaches `<dfn>`-Element, um die Position eines Begriffs innerhalb der Definition zu identifizieren.

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

Um Links zu den Definitionen hinzuzufügen, erstellen Sie den Link so, wie Sie es immer mit dem {{HTMLElement("a")}}-Element tun.

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

Hier sehen wir die Definition – jetzt mit einem [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut, `"definition-dfn"`, das als Ziel eines Links verwendet werden kann. Später wird ein Link erstellt, indem das `<a>`-Element mit dem [`href`](/de/docs/Web/HTML/Reference/Elements/a#href)-Attribut auf `"#definition-dfn"` gesetzt wird, um den Link zurück zur Definition einzurichten.

#### Ergebnis

{{EmbedLiveSample("Links_to_definitions", 650, 300)}}

### Verwendung von Abkürzungen und Definitionen zusammen

In einigen Fällen möchten Sie möglicherweise eine Abkürzung für einen Begriff verwenden, wenn Sie ihn definieren. Dies kann erreicht werden, indem die `<dfn>`- und {{HTMLElement("abbr")}}-Elemente zusammen verwendet werden, wie folgt:

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

Beachten Sie das `<abbr>`-Element, das innerhalb des `<dfn>`-Elements eingebettet ist. Ersteres legt fest, dass der Begriff eine Abkürzung ("HST") ist, und gibt den vollständigen Begriff ("Hubble Space Telescope") in seinem `title`-Attribut an. Letzteres zeigt an, dass der abgekürzte Begriff einen definierten Begriff darstellt.

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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content">Flussinhalt</a>,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phraseninhalt</a>,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#palpable_content">fühlbarer Inhalt</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phraseninhalt</a>,
        aber kein <code>&lt;dfn&gt;</code>-Element darf ein Nachkomme sein.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Anfangs- als auch der End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phraseninhalt</a> akzeptiert.
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
