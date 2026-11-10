---
title: HTML-Element `<ruby>` für Ruby-Annotationen
short-title: <ruby>
slug: Web/HTML/Reference/Elements/ruby
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

Das **`<ruby>`**-[HTML](/de/docs/Web/HTML)-Element steht für kleine Annotationen, die über, unter oder neben dem Basistext dargestellt werden. Meist werden sie verwendet, um die Aussprache ostasiatischer Schriftzeichen anzuzeigen. Es kann auch zur Annotation anderer Textarten verwendet werden, was jedoch weniger verbreitet ist.

Der Begriff _ruby_ stammt von [einer Maßeinheit aus dem Schriftsatz](<https://en.wikipedia.org/wiki/Agate_(typography)>). Sie bezeichnet die kleinste Schriftgröße, in der Text auf Zeitungspapier noch lesbar gedruckt werden kann.

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

Dieses Element hat nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Beispiele

### Beispiel 1: Schriftzeichen

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

{{EmbedLiveSample('example_2_word')}}

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
          >Flow content</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >phrasing content</a
        >, wahrnehmbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        Eine oder mehrere Gruppen, die jeweils aus zwei Teilen bestehen:
        <ol>
          <li>Der Basistext, der entweder aus Folgendem besteht:
            <ul>
              <li><a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content">Phrasing content</a>, jedoch ohne <code>&lt;ruby&gt;</code>-Elemente und ohne untergeordnete <code>&lt;ruby&gt;</code>-Elemente, oder</li>
              <li>einem einzelnen <code>&lt;ruby&gt;</code>-Element, das selbst keine untergeordneten <code>&lt;ruby&gt;</code>-Elemente enthält.</li>
            </ul>
          </li>
          <li>Die Annotationen für den Basistext, die entweder aus Folgendem bestehen:
            <ul>
              <li>einem oder mehreren {{HTMLElement("rt")}}-Elementen oder</li>
              <li>einem {{HTMLElement("rp")}}-Element, auf das ein oder mehrere {{HTMLElement("rt")}}-Elemente folgen, auf die jeweils wiederum ein {{HTMLElement("rp")}}-Element folgt (also <code>rp, rt, rp, rt, ..., rp</code>).</li>
            </ul>
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row">Weglassen von Tags</th>
      <td>Keines; sowohl das Start- als auch das End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Elternelemente</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >phrasing content</a
        >
        zulässt.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role"
          >Keine entsprechende Rolle</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässige ARIA-Rollen</th>
      <td>Alle</td>
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
- [CSS-Modul für Ruby-Layout](/de/docs/Web/CSS/Guides/Ruby_layout)
