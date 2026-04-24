---
title: "`<ruby>` HTML ruby-Annotationselement"
short-title: <ruby>
slug: Web/HTML/Reference/Elements/ruby
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

Das **`<ruby>`** [HTML](/de/docs/Web/HTML)-Element stellt kleine Annotationen dar, die über, unter oder neben dem Basistext angezeigt werden. Es wird üblicherweise verwendet, um die Aussprache von ostasiatischen Zeichen anzuzeigen. Es kann auch zur Annotation anderer Textarten verwendet werden, was jedoch weniger häufig ist.

Der Begriff _ruby_ stammt ursprünglich aus [einer Maßeinheit, die von Schriftsetzern verwendet wird](<https://en.wikipedia.org/wiki/Agate_(typography)>), und bezeichnet die kleinste Größe, in der Text auf Zeitungspapier gedruckt werden kann, während er noch lesbar bleibt.

{{InteractiveExample("HTML Demo: &lt;ruby&gt;", "tabbed-shorter")}}

```html interactive-example
<ruby> 明日 <rp>(</rp><rt>Ashita</rt><rp>)</rp> </ruby>
```

```css interactive-example
ruby {
  font-size: 2em;
}
```

## Attribute

Dieses Element umfasst nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Beispiele

### Beispiel 1: Zeichen

```html
<ruby>
  漢 <rp>(</rp><rt>Kan</rt><rp>)</rp> 字 <rp>(</rp><rt>ji</rt><rp>)</rp>
</ruby>
```

#### Ergebnis

{{EmbedLiveSample('Example 1: Character')}}

### Beispiel 2: Wort

```html
<ruby> 明日 <rp>(</rp><rt>Ashita</rt><rp>)</rp> </ruby>
```

#### Ergebnis

{{EmbedLiveSample('Example 1: Word')}}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flussinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        Eine oder mehrere Gruppen, die jeweils aus zwei Teilen bestehen:
        <ol>
          <li>Der Basistext, der entweder ist:
            <ul>
              <li><a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasierungsinhalt</a>, jedoch ohne <code>&lt;ruby&gt;</code>-Elemente und ohne Nachfahren eines <code>&lt;ruby&gt;</code>-Elements, oder</li>
              <li>Ein einzelnes <code>&lt;ruby&gt;</code>-Element, das selbst keine Nachfahren eines <code>&lt;ruby&gt;</code>-Elements hat.</li>
            </ul>
          </li>
          <li>Die Annotationen für den Basistext, die entweder sind:
            <ul>
              <li>Ein oder mehrere {{HTMLElement("rt")}}-Elemente, oder</li>
              <li>Ein {{HTMLElement("rp")}}-Element, gefolgt von einem oder mehreren {{HTMLElement("rt")}}-Elementen, von denen jedes selbst von einem {{HTMLElement("rp")}}-Element gefolgt wird (d.h. <code>rp, rt, rp, rt, ..., rp</code>).</li>
            </ul>
          </li>
        </ol>
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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >
        akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role"
          >Keine entsprechende Rolle</a
        >
      </td>
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

- {{HTMLElement("rt")}}
- {{HTMLElement("rp")}}
- {{cssxref("ruby-overhang")}}
- {{CSSxRef("text-transform")}}: full-size-kana
- [CSS Ruby Layout](/de/docs/Web/CSS/Guides/Ruby_layout) Modul
