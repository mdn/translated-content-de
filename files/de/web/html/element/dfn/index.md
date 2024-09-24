---
title: "<dfn>: Das Definitionselement"
slug: Web/HTML/Element/dfn
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{HTMLSidebar}}

Das **`<dfn>`** [HTML](/de/docs/Web/HTML)-Element kennzeichnet einen Begriff, der definiert werden soll. Das `<dfn>`-Element sollte in einer vollständigen Definitionsaussage verwendet werden, bei der die vollständige Definition des Begriffs eine der folgenden sein kann:

- Der übergeordnete Absatz (ein Textblock, manchmal durch ein {{HTMLElement("p")}}-Element markiert)
- Das {{HTMLElement("dt")}}/{{HTMLElement("dd")}}-Paar
- Der nächste [Bereich](/de/docs/Web/HTML/Content_categories#sectioning_content) des `<dfn>`-Elements,

{{EmbedInteractiveExample("pages/tabbed/dfn.html", "tabbed-shorter")}}

## Attribute

Die Attribute dieses Elements umfassen die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

Das [`title`](/de/docs/Web/HTML/Global_attributes#title)-Attribut hat eine besondere Bedeutung, wie unten beschrieben.

## Anwendungshinweise

Es gibt einige nicht ganz offensichtliche Aspekte bei der Verwendung des `<dfn>`-Elements. Diese betrachten wir hier.

### Bestimmen des Begriffs, der definiert wird

Der Begriff, der definiert wird, wird nach folgenden Regeln identifiziert:

1. Wenn das `<dfn>`-Element ein [`title`](/de/docs/Web/HTML/Global_attributes#title)-Attribut hat, wird der Wert des `title`-Attributs als der Begriff angesehen, der definiert wird. Das Element muss dennoch Text enthalten, dieser Text kann jedoch eine Abkürzung sein (eventuell unter Verwendung von {{HTMLElement("abbr")}}) oder eine andere Form des Begriffs sein.
2. Wenn das `<dfn>`-Element ein einzelnes Kind-Element enthält und keinen eigenen Textinhalt hat, und dieses Kind-Element ein {{HTMLElement("abbr")}}-Element mit einem eigenen `title`-Attribut ist, ist der genaue Wert des `title`-Attributs des `<abbr>`-Elements der Begriff, der definiert wird.
3. Andernfalls ist der Textinhalt des `<dfn>`-Elements der zu definierende Begriff. Dies wird [im ersten Beispiel unten](#grundlegende_identifizierung_eines_begriffs) gezeigt.

> [!NOTE]
> Wenn das `<dfn>`-Element ein `title`-Attribut hat, _muss_ es den zu definierenden Begriff und keinen anderen Text enthalten.

### Links zu `<dfn>`-Elementen

Wenn Sie ein [`id`](/de/docs/Web/HTML/Global_attributes#id)-Attribut zum `<dfn>`-Element hinzufügen, können Sie es mit {{HTMLElement("a")}}-Elementen verlinken. Solche Links sollten Verwendungen des Begriffs sein, mit der Absicht, dass der Leser schnell zur Begriffsdefinition navigieren kann, falls er nicht bereits darüber Bescheid weiß, indem er auf den Link des Begriffs klickt.

Dies wird im Beispiel unter [Links zu Definitionen](#links_zu_definitionen) unten gezeigt.

## Beispiele

Schauen wir uns einige Beispiele für verschiedene Anwendungsszenarien an.

### Grundlegende Identifizierung eines Begriffs

In diesem Beispiel wird ein einfaches `<dfn>`-Element verwendet, um die Position eines Begriffs innerhalb der Definition zu identifizieren.

#### HTML

```html
<p>
  Das <strong>HTML-Definitionselement (<dfn>&lt;dfn&gt;</dfn>)</strong> wird verwendet,
  um den zu definierenden Begriff im Kontext eines Definitionsausdrucks oder -satzes anzugeben.
</p>
```

Da das `<dfn>`-Element kein `title`-Attribut hat, dient der Textinhalt des `<dfn>`-Elements selbst als der zu definierende Begriff.

#### Ergebnis

{{EmbedLiveSample("Basic_identification_of_a_term", 650, 120)}}

### Links zu Definitionen

Um Links zu den Definitionen hinzuzufügen, erstellen Sie den Link wie immer mit dem {{HTMLElement("a")}}-Element.

#### HTML

```html-nolint
<p>
  Das
  <strong>HTML-Definitionselement (<dfn id="definition-dfn">&lt;dfn&gt;</dfn>)</strong>
  wird verwendet, um den zu definierenden Begriff im Kontext eines Definitionsausdrucks
  oder -satzes anzugeben.
</p>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Graece donan, Latine
  voluptatem vocant. Confecta res esset. Duo Reges: constructio interrete.
  Scrupulum, inquam, abeunti;
</p>

<p>
  Aufgrund all dessen haben wir uns entschieden, das
  <code><a href="#definition-dfn">&lt;dfn&gt;</a></code>-Element für dieses
  Projekt zu verwenden.
</p>
```

Hier sehen wir die Definition — jetzt mit einem [`id`](/de/docs/Web/HTML/Global_attributes#id)-Attribut, `"definition-dfn"`, das als Ziel eines Links verwendet werden kann. Später wird ein Link erstellt, indem `<a>` verwendet wird, mit dem [`href`](/de/docs/Web/HTML/Element/a#href)-Attribut, das auf `"#definition-dfn"` eingerichtet ist, um den Link zurück zur Definition einzurichten.

#### Ergebnis

{{EmbedLiveSample("Links_to_definitions", 650, 300)}}

### Verwendung von Abkürzungen und Definitionen zusammen

In einigen Fällen möchten Sie möglicherweise eine Abkürzung für einen Begriff verwenden, wenn Sie ihn definieren. Dies kann erreicht werden, indem die `<dfn>`- und {{HTMLElement("abbr")}}-Elemente zusammen wie folgt verwendet werden:

#### HTML

```html
<p>
  Das <dfn><abbr title="Hubble Space Telescope">HST</abbr></dfn> ist eines der
  produktivsten wissenschaftlichen Instrumente, die je gebaut wurden. Es befindet sich
  seit über 20 Jahren in der Umlaufbahn, scannt den Himmel und liefert Daten und
  Fotografien von beispielloser Qualität und Detailgenauigkeit.
</p>

<p>
  Tatsächlich hat das <abbr title="Hubble Space Telescope">HST</abbr> möglicherweise mehr
  für den Fortschritt der Wissenschaft getan als jedes andere jemals gebaute Gerät.
</p>
```

Beachten Sie das `<abbr>`-Element, das im `<dfn>`-Element verschachtelt ist. Das erstere stellt fest, dass der Begriff eine Abkürzung ist ("HST") und gibt den vollständigen Begriff ("Hubble Space Telescope") in seinem `title`-Attribut an. Das letztere zeigt an, dass der abgekürzte Begriff einen zu definierenden Begriff darstellt.

#### Ergebnis

{{EmbedLiveSample("Using_abbreviations_and_definitions_together", 650, 200)}}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Fluss-Inhalt</a>,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Phrasing-Inhalt</a>,
        <a href="/de/docs/Web/HTML/Content_categories#palpable_content">spürbarer Inhalt</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Phrasing-Inhalt</a>,
        aber kein <code>&lt;dfn&gt;</code>-Element darf ein Nachfahre sein.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content">Phrasing-Inhalt</a> akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td><a href="/de/docs/Web/Accessibility/ARIA/Roles/term_role"><code>term</code></a></td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Beliebig</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>{{domxref("HTMLElement")}}</td>
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
