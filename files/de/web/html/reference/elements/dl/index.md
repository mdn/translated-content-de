---
title: "<dl>: Das Description List-Element"
slug: Web/HTML/Reference/Elements/dl
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

{{HTMLSidebar}}

Das **`<dl>`** [HTML](/de/docs/Web/HTML)-Element stellt eine Beschreibungsliste dar. Das Element umschließt eine Liste von Gruppen aus Begriffen (angegeben mittels des {{HTMLElement("dt")}}-Elements) und Beschreibungen (bereitgestellt durch {{HTMLElement("dd")}}-Elemente). Häufige Verwendungen für dieses Element sind die Implementierung eines Glossars oder die Anzeige von Metadaten (einer Liste von Schlüssel-Wert-Paaren).

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

Dieses Element beinhaltet nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Barrierefreiheit

Jeder Screenreader gibt `<dl>`-Inhalte unterschiedlich wieder, einschließlich der Gesamtanzahl, des Kontextes von Begriffen/Beschreibungen und der Navigationsmethoden. Diese Unterschiede sind nicht unbedingt Fehler. Ab iOS 14 wird VoiceOver ankündigen, dass `<dl>`-Inhalte eine Liste sind, wenn mit dem virtuellen Cursor navigiert wird (nicht über den Befehl „Alles lesen“). VoiceOver unterstützt keine Listennavigationsbefehle mit `<dl>`. Seien Sie vorsichtig beim Anwenden von ARIA-Rollen „term“ und „definition“ auf `<dl>`-Konstrukte, da VoiceOver (macOS und iOS) die Art und Weise, wie sie angekündigt werden, ändert.

- [VoiceOver auf iOS 14 unterstützt Beschreibungsliste](https://adrianroselli.com/2020/09/voiceover-on-ios-14-supports-description-lists.html)
- [Kurze Anmerkung zur Unterstützung von Beschreibungsliste](https://adrianroselli.com/2022/12/brief-note-on-description-list-support.html)

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

### Mehrere Begriffe, eine Beschreibung

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

Beschreibungsliste sind nützlich, um Metadaten als eine Liste von Schlüssel-Wert-Paaren darzustellen.

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

Tipp: Es kann hilfreich sein, in CSS einen Schlüssel-Wert-Trenner zu definieren, wie zum Beispiel:

```css
dt::after {
  content: ": ";
}
```

### Einwickeln von Name-Wert-Gruppen in `div`-Elemente

HTML erlaubt das Einwickeln jeder Name-Wert-Gruppe in einem `<dl>`-Element in ein {{HTMLElement("div")}}-Element. Dies kann nützlich sein, wenn [Microdata](/de/docs/Web/HTML/Guides/Microdata) verwendet werden, oder wenn [globale Attribute](/de/docs/Web/HTML/Reference/Global_attributes) auf eine ganze Gruppe angewendet werden sollen, oder für Styling-Zwecke.

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

Verwenden Sie dieses Element (und auch keine {{HTMLElement("ul")}}-Elemente) nicht, um lediglich eine Einrückung auf einer Seite zu erstellen. Obwohl es funktioniert, ist dies eine schlechte Praxis und verdeckt die Bedeutung von Beschreibungsliste.

Um die Einrückung eines Beschreibungsbegriffs zu ändern, verwenden Sie die [CSS](/de/docs/Web/CSS) {{cssxref("margin")}}-Eigenschaft.

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
          >Flow-Inhalte</a
        >, und wenn die Kinder des <code>&#x3C;dl></code>-Elements eine Name-Wert-Gruppe enthalten, sichtbare Inhalte.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Inhalte</th>
      <td>
        <p>
          Entweder: Null oder mehr Gruppen, jede bestehend aus einem oder mehreren {{HTMLElement("dt")}}-Elementen, gefolgt von einem oder mehreren {{HTMLElement("dd")}}-Elementen, optional vermischt mit {{HTMLElement("script")}}- und {{HTMLElement("template")}}-Elementen.<br />Oder: (in {{Glossary("WHATWG", "WHATWG")}} HTML, {{Glossary("W3C", "W3C")}} HTML 5.2 und später) Ein oder mehrere {{HTMLElement("div")}}-Elemente, optional vermischt mit {{HTMLElement("script")}}- und {{HTMLElement("template")}}-Elementen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Auslassen des Tags</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flow-Inhalte</a
        > akzeptiert.
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
