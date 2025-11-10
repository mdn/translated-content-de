---
title: "<dl>: Das Beschreibungsliste-Element"
slug: Web/HTML/Reference/Elements/dl
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`<dl>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert eine Beschreibungsliste. Das Element umfasst eine Liste von Gruppen von Begriffen (festgelegt mit dem {{HTMLElement("dt")}}-Element) und Beschreibungen (bereitgestellt durch {{HTMLElement("dd")}}-Elemente). Häufige Verwendungen dieses Elements sind die Implementierung eines Glossars oder die Anzeige von Metadaten (einer Liste von Schlüssel-Wert-Paaren).

{{InteractiveExample("HTML Demo: &lt;dl&gt;", "tabbed-standard")}}

```html interactive-example
<p>Cryptids of Cornwall:</p>

<dl>
  <dt>Beast of Bodmin</dt>
  <dd>A large feline inhabiting Bodmin Moor.</dd>

  <dt>Morgawr</dt>
  <dd>A sea serpent.</dd>

  <dt>Owlman</dt>
  <dd>A giant owl-like creature.</dd>
</dl>
```

```css interactive-example
p,
dt {
  font-weight: bold;
}

dl,
dd {
  font-size: 0.9rem;
}

dd {
  margin-bottom: 1em;
}
```

## Attribute

Dieses Element akzeptiert auch die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

- `compact` {{Deprecated_inline}}
  - : Dieses boolesche Attribut deutet an, dass die Liste in einem kompakten Stil gerendert werden sollte. Die Interpretation dieses Attributs ist browserspezifisch. Verwenden Sie stattdessen [CSS](/de/docs/Web/CSS): Um eine ähnliche Wirkung wie das `compact`-Attribut zu erzielen, kann die CSS-Eigenschaft {{cssxref("line-height")}} mit einem Wert von `80%` verwendet werden.

## Barrierefreiheit

Jeder Bildschirmleser gibt `<dl>`-Inhalte unterschiedlich wieder, einschließlich der Gesamtanzahl, der Begriffs-/Definitionskontexte und der Navigationsmethoden. Diese Unterschiede sind nicht unbedingt Fehler. Mit iOS 14 wird VoiceOver ankündigen, dass `<dl>`-Inhalte eine Liste sind, wenn mit dem virtuellen Cursor navigiert wird (nicht über den Alle-lesen-Befehl). VoiceOver unterstützt keine Listennavigationsbefehle mit `<dl>`. Seien Sie vorsichtig bei der Anwendung von ARIA 'term' und 'definition' Rollen auf `<dl>`-Konstrukte, da VoiceOver (macOS und iOS) anpasst, wie sie angekündigt werden.

- [VoiceOver auf iOS 14 unterstützt Beschreibungslisten](https://adrianroselli.com/2020/09/voiceover-on-ios-14-supports-description-lists.html)
- [Kurze Anmerkung zur Unterstützung von Beschreibungslisten](https://adrianroselli.com/2022/12/brief-note-on-description-list-support.html)

## Beispiele

### Einzelner Begriff und Beschreibung

```html
<dl>
  <dt>Firefox</dt>
  <dd>
    A free, open source, cross-platform, graphical web browser developed by the
    Mozilla Corporation and hundreds of volunteers.
  </dd>

  <!-- Other terms and descriptions -->
</dl>
```

#### Ergebnis

{{EmbedLiveSample("Single_term_and_description")}}

### Mehrere Begriffe, einzelne Beschreibung

```html
<dl>
  <dt>Firefox</dt>
  <dt>Mozilla Firefox</dt>
  <dt>Fx</dt>
  <dd>
    A free, open source, cross-platform, graphical web browser developed by the
    Mozilla Corporation and hundreds of volunteers.
  </dd>

  <!-- Other terms and descriptions -->
</dl>
```

#### Ergebnis

{{EmbedLiveSample("Multiple_terms_single_description")}}

### Einzelner Begriff, mehrere Beschreibungen

```html
<dl>
  <dt>Firefox</dt>
  <dd>
    A free, open source, cross-platform, graphical web browser developed by the
    Mozilla Corporation and hundreds of volunteers.
  </dd>
  <dd>
    The Red Panda also known as the Lesser Panda, Wah, Bear Cat or Firefox, is a
    mostly herbivorous mammal, slightly larger than a domestic cat (60 cm long).
  </dd>

  <!-- Other terms and descriptions -->
</dl>
```

#### Ergebnis

{{EmbedLiveSample("Single_term_multiple_descriptions")}}

### Mehrere Begriffe und Beschreibungen

Es ist auch möglich, mehrere Begriffe mit mehreren entsprechenden Beschreibungen zu definieren, indem die obigen Beispiele kombiniert werden.

### Metadaten

Beschreibungsliste sind nützlich zur Anzeige von Metadaten als Liste von Schlüssel-Wert-Paaren.

```html
<dl>
  <dt>Name</dt>
  <dd>Godzilla</dd>
  <dt>Born</dt>
  <dd>1952</dd>
  <dt>Birthplace</dt>
  <dd>Japan</dd>
  <dt>Color</dt>
  <dd>Green</dd>
</dl>
```

#### Ergebnis

{{EmbedLiveSample('Metadata')}}

Tipp: Es kann hilfreich sein, einen Schlüssel-Wert-Trenner im CSS zu definieren, wie zum Beispiel:

```css
dt::after {
  content: ": ";
}
```

### Einwickeln von Name-Wert-Gruppen in `div`-Elemente

HTML erlaubt das Einwickeln jeder Name-Wert-Gruppe in einem `<dl>`-Element in ein {{HTMLElement("div")}}-Element. Dies kann nützlich sein, wenn [Microdata](/de/docs/Web/HTML/Guides/Microdata) verwendet wird oder wenn [globale Attribute](/de/docs/Web/HTML/Reference/Global_attributes) auf eine gesamte Gruppe angewendet werden, oder aus stilistischen Gründen.

```html
<dl>
  <div>
    <dt>Name</dt>
    <dd>Godzilla</dd>
  </div>
  <div>
    <dt>Born</dt>
    <dd>1952</dd>
  </div>
  <div>
    <dt>Birthplace</dt>
    <dd>Japan</dd>
  </div>
  <div>
    <dt>Color</dt>
    <dd>Green</dd>
  </div>
</dl>
```

#### Ergebnis

{{EmbedLiveSample('Wrapping name-value groups in `div` elements')}}

## Anmerkungen

Verwenden Sie dieses Element (oder {{HTMLElement("ul")}}-Elemente) nicht, um lediglich Einrückungen auf einer Seite zu erzeugen. Obwohl es funktioniert, ist dies eine schlechte Praxis und verschleiert die Bedeutung von Beschreibungslisten.

Um die Einrückung eines Beschreibungstermins zu ändern, verwenden Sie die [CSS](/de/docs/Web/CSS) {{cssxref("margin")}}-Eigenschaft.

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
        >, und wenn die Kinder des <code>&#x3C;dl></code>-Elementes eine
        Name-Wert-Gruppe beinhalten, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <p>
          Entweder: Null oder mehr Gruppen, die jeweils aus einem oder mehreren {{HTMLElement("dt")}}-Elementen gefolgt von einem oder mehreren {{HTMLElement("dd")}}-Elementen bestehen, optional vermischt mit {{HTMLElement("script")}}- und {{HTMLElement("template")}}-Elementen.<br />Oder: (in {{Glossary("WHATWG", "WHATWG")}} HTML, {{Glossary("W3C", "W3C")}} HTML 5.2 und später) Ein oder mehrere {{HTMLElement("div")}}-Elemente, optional vermischt mit {{HTMLElement("script")}}- und {{HTMLElement("template")}}-Elementen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Wechsel</th>
      <td>Keine, sowohl der Start- als auch der End-Tag sind zwingend erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flussinhalt</a
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
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role"><code>group</code></a>,
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/list_role"
            >list</a
          ></code
        >, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/none_role"><code>none</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>[`HTMLDListElement`](/de/docs/Web/API/HTMLDListElement)</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("dt")}}
- {{HTMLElement("dd")}}
