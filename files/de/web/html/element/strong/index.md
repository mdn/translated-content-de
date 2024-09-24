---
title: "<strong>: Das Strong Importance-Element"
slug: Web/HTML/Element/strong
l10n:
  sourceCommit: e31cb5978e9f3c731c49db9ed0a15795b870e141
---

{{HTMLSidebar}}

Das **`<strong>`** [HTML](/de/docs/Web/HTML)-Element zeigt an, dass sein Inhalt von großer Bedeutung, Ernsthaftigkeit oder Dringlichkeit ist. Browser stellen die Inhalte normalerweise in Fettschrift dar.

{{EmbedInteractiveExample("pages/tabbed/strong.html", "tabbed-shorter")}}

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Verwendungshinweise

Das `<strong>`-Element dient für Inhalte, die von "starker Bedeutung" sind, einschließlich Dinge von großer Ernsthaftigkeit oder Dringlichkeit (wie Warnungen). Dies könnte ein Satz von großer Bedeutung für die gesamte Seite sein oder Sie könnten lediglich darauf hinweisen wollen, dass einige Worte im Vergleich zu benachbarten Inhalten von größerer Wichtigkeit sind.

Typischerweise wird dieses Element standardmäßig mit einer fetten Schriftart dargestellt. Es sollte jedoch _nicht_ verwendet werden, um Fettformatierung aufzutragen; verwenden Sie hierzu die CSS {{cssxref("font-weight")}}-Eigenschaft. Verwenden Sie das {{HTMLElement("b")}}-Element, um auf bestimmten Text aufmerksam zu machen, ohne ein höheres Maß an Wichtigkeit anzuzeigen. Verwenden Sie das {{HTMLElement("em")}}-Element, um Text zu markieren, der stressbetonte Hervorhebung hat.

Eine andere akzeptierte Verwendung von `<strong>` ist, die Beschriftungen von Absätzen zu kennzeichnen, die Notizen oder Warnungen innerhalb des Textes einer Seite darstellen.

### \<b> vs. \<strong>

Es ist für neue Entwickler oft verwirrend, warum es so viele Möglichkeiten gibt, dasselbe auf einer gerenderten Website auszudrücken. {{HTMLElement("b")}} und `<strong>` sind vielleicht eine der häufigsten Verwirrungsquellen, die Entwickler fragen lassen "Sollte ich `<b>` oder `<strong>` verwenden? Machen sie nicht dasselbe?"

Nicht genau. Das `<strong>`-Element ist für Inhalte von größerer Bedeutung, während das `<b>`-Element genutzt wird, um auf Text aufmerksam zu machen, ohne anzuzeigen, dass er wichtiger ist.

Es kann hilfreich sein zu verstehen, dass beide gültige und semantische Elemente in HTML sind, und dass es ein Zufall ist, dass sie beide in den meisten Browsern dieselbe Standarddarstellung (Fettschrift) haben (obwohl einige ältere Browser `<strong>` tatsächlich unterstrichen). Jedes Element soll in bestimmten Szenarien verwendet werden, und wenn Sie Text aus dekorativen Gründen fett machen möchten, sollten Sie stattdessen tatsächlich die CSS {{cssxref("font-weight")}}-Eigenschaft verwenden.

Die beabsichtigte Bedeutung oder der Zweck des eingeschlossenen Textes sollte bestimmen, welches Element Sie verwenden. Die Vermittlung von Bedeutung ist das, worum es bei Semantik geht.

### \<em> vs. \<strong>

Zur Verwirrung trägt bei, dass HTML 4 `<strong>` als stärkere Betonung definierte, während HTML 5 `<strong>` als Darstellung von "starker Wichtigkeit für seinen Inhalt" definiert. Dies ist ein wichtiger Unterschied.

Während `<em>` verwendet wird, um die Bedeutung eines Satzes zu ändern, wie gesprochene Betonung es tut ("Ich _liebe_ Karotten" vs. "Ich liebe _Karotten_"), wird `<strong>` verwendet, um Teilen eines Satzes mehr Bedeutung zu geben (z. B. "**Warnung!** Dies ist **sehr gefährlich.**") Sowohl `<strong>` als auch `<em>` können verschachtelt werden, um den relativen Grad der Wichtigkeit bzw. der stressbetonten Hervorhebung zu erhöhen.

## Beispiele

### Einfaches Beispiel

```html
<p>
  Bevor Sie fortfahren, <strong>stellen Sie sicher, dass Sie Ihre Schutzbrille aufsetzen</strong>.
</p>
```

#### Ergebnis

{{EmbedLiveSample("Basic_example", 650, 80)}}

### Warnungen kennzeichnen

```html
<p>
  <strong>Wichtig:</strong> Bevor Sie fortfahren, stellen Sie sicher, dass Sie reichlich Butter hinzufügen.
</p>
```

#### Ergebnis

{{EmbedLiveSample("Labeling_warnings", 650, 80)}}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Fließender Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keiner; muss sowohl ein Anfangs- als auch ein End-Tag haben.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        > akzeptiert, oder jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Fließenden Inhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Roles/structural_roles#structural_roles_with_html_equivalents">strong</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
      <td>Jede</td>
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

- Das {{HTMLElement("b")}}-Element
- Das {{HTMLElement("em")}}-Element
- Die {{cssxref("font-weight")}}-Eigenschaft
