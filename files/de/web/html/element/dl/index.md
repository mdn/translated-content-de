---
title: "<dl>: Das Beschreibungsliste-Element"
slug: Web/HTML/Element/dl
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

Das **`<dl>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert eine Beschreibungsliste. Das Element umfasst eine Liste von Gruppen von Begriffen (angegeben mit dem {{HTMLElement("dt")}}-Element) und Beschreibungen (bereitgestellt durch {{HTMLElement("dd")}}-Elemente). Häufige Verwendungen für dieses Element sind die Implementierung eines Glossars oder die Anzeige von Metadaten (einer Liste von Schlüssel-Wert-Paaren).

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

Dieses Element umfasst nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Barrierefreiheit

Jeder Screenreader gibt den Inhalt von `<dl>` unterschiedlich wieder, einschließlich der Gesamtanzahl, der Begriffe/Definitionen-Kontext und der Navigationsmethoden. Diese Unterschiede sind nicht unbedingt Fehler. Seit iOS 14 gibt VoiceOver an, dass `<dl>`-Inhalt eine Liste ist, wenn mit dem virtuellen Cursor navigiert wird (nicht über den Befehl „Alles lesen“). VoiceOver unterstützt keine Listennavigationsbefehle mit `<dl>`. Seien Sie vorsichtig beim Anwenden von ARIA `term` und `definition` Rollen auf `<dl>`-Konstruktionen, da VoiceOver (macOS und iOS) dann anpasst, wie diese angesagt werden.

- [VoiceOver auf iOS 14 unterstützt Beschreibungsliste](https://adrianroselli.com/2020/09/voiceover-on-ios-14-supports-description-lists.html)
- [Kurzer Hinweis zur Unterstützung von Beschreibungsliste](https://adrianroselli.com/2022/12/brief-note-on-description-list-support.html)

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

Beschreibungsliste sind nützlich zur Darstellung von Metadaten als Liste von Schlüssel-Wert-Paaren.

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

Tipp: Es kann hilfreich sein, einen Schlüssel-Wert-Trenner im CSS zu definieren, wie z.B.:

```css
dt::after {
  content: ": ";
}
```

### Umwickeln von Name-Wert-Gruppen in `div`-Elementen

HTML erlaubt es, jede Name-Wert-Gruppe in einem `<dl>`-Element in einem {{HTMLElement("div")}}-Element zu umwickeln. Dies kann nützlich sein, wenn [Mikrodaten](/de/docs/Web/HTML/Microdata) verwendet werden, oder wenn [globale Attribute](/de/docs/Web/HTML/Global_attributes) auf eine ganze Gruppe angewendet werden, oder für Stilzwecke.

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

## Hinweise

Verwenden Sie dieses Element nicht (noch {{HTMLElement("ul")}}-Elemente), um lediglich Einrückungen auf einer Seite zu erzeugen. Obwohl es funktioniert, ist dies eine schlechte Praxis und verschleiert die Bedeutung von Beschreibungsliste.

Um die Einrückung eines Beschreibungsterms zu ändern, verwenden Sie die [CSS](/de/docs/Web/CSS) {{cssxref("margin")}}-Eigenschaft.

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
        >, und wenn das <code>&#x3C;dl></code>-Element Kinder enthält, die eine Name-Wert-Gruppe beinhalten, fühlbarer Inhalt.
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
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >fließenden Inhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA Rolle</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >Keine entsprechende Rolle</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA Rollen</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/group_role"><code>group</code></a>,
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Roles/list_role"
            >list</a
          ></code
        >, <a href="/de/docs/Web/Accessibility/ARIA/Roles/none_role"><code>none</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM-Interface</th>
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
