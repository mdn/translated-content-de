---
title: "<dl>: Das Beschreibungsliste-Element"
slug: Web/HTML/Reference/Elements/dl
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`<dl>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert eine Beschreibungsliste. Das Element umfasst eine Liste von Gruppen von Begriffen (spezifiziert mit dem {{HTMLElement("dt")}}-Element) und Beschreibungen (bereitgestellt durch {{HTMLElement("dd")}}-Elemente). Häufige Anwendungen für dieses Element sind die Implementierung eines Glossars oder die Darstellung von Metadaten (eine Liste von Schlüssel-Wert-Paaren).

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

Dieses Element umfasst nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes).

## Barrierefreiheit

Jeder Screenreader präsentiert `<dl>`-Inhalte unterschiedlich, einschließlich der Gesamtanzahl, Kontext von Begriffen/Beschreibungen und Navigationsmethoden. Diese Unterschiede sind nicht unbedingt Fehler.
Ab iOS 14 gibt VoiceOver an, dass `<dl>`-Inhalte eine Liste sind, wenn mit dem virtuellen Cursor navigiert wird (nicht über den Alles-vorlesen-Befehl). VoiceOver unterstützt keine Listen-Navigationsbefehle mit `<dl>`. Seien Sie vorsichtig beim Anwenden der ARIA-Rollen `term` und `definition` auf `<dl>`-Konstrukte, da VoiceOver (macOS und iOS) anpassen wird, wie sie angekündigt werden.

- [VoiceOver on iOS 14 Supports Description Lists](https://adrianroselli.com/2020/09/voiceover-on-ios-14-supports-description-lists.html)
- [Brief Note on Description List Support](https://adrianroselli.com/2022/12/brief-note-on-description-list-support.html)

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

Beschreibungslisten sind nützlich zur Anzeige von Metadaten als Liste von Schlüssel-Wert-Paaren.

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

Tipp: Es kann hilfreich sein, einen Trennzeichen für Schlüssel-Wert in CSS zu definieren, zum Beispiel:

```css
dt::after {
  content: ": ";
}
```

### Umhüllung von Name-Wert-Gruppen in `div`-Elementen

HTML erlaubt das Umhüllen jeder Name-Wert-Gruppe in einem `<dl>`-Element in einem {{HTMLElement("div")}}-Element. Dies kann nützlich sein, wenn [Mikrodaten](/de/docs/Web/HTML/Guides/Microdata) genutzt werden, oder wenn [globale Attribute](/de/docs/Web/HTML/Reference/Global_attributes) auf eine ganze Gruppe anwendbar sind oder zu Stilzwecken.

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

Verwenden Sie dieses Element (noch {{HTMLElement("ul")}}-Elemente) nicht, um lediglich eine Einrückung auf einer Seite zu erstellen. Obwohl es funktioniert, ist dies eine schlechte Praxis und verschleiert die Bedeutung von Beschreibungslisten.

Um die Einrückung eines Beschreibungstermst zu ändern, verwenden Sie die [CSS](/de/docs/Web/CSS) {{cssxref("margin")}}-Eigenschaft.

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
          >Fluss-Inhalt</a
        >, und wenn die Kinder des <code>&#x3C;dl></code>-Elements eine Name-Wert-Gruppe umfassen, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <p>
          Entweder: Null oder mehr Gruppen bestehend aus einem oder mehreren
          {{HTMLElement("dt")}}-Elementen gefolgt von einem oder mehreren
          {{HTMLElement("dd")}}-Elementen, optional vermischt mit
          {{HTMLElement("script")}}- und
          {{HTMLElement("template")}}-Elementen.<br />Oder: (in
          {{Glossary("WHATWG", "WHATWG")}} HTML, {{Glossary("W3C", "W3C")}} HTML 5.2
          und später) Ein oder mehrere {{HTMLElement("div")}}-Elemente,
          optional vermischt mit {{HTMLElement("script")}}- und
          {{HTMLElement("template")}}-Elementen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Weglassung</th>
      <td>Keine, sowohl das Anfangs- als auch das End-Tag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Fluss-Inhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
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
