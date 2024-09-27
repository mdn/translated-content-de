---
title: "<dl>: Das Description List-Element"
slug: Web/HTML/Element/dl
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{HTMLSidebar}}

Das **`<dl>`**-Element von [HTML](/de/docs/Web/HTML) repräsentiert eine Beschreibungsliste. Das Element umfasst eine Liste von Gruppen von Begriffen (spezifiziert durch das {{HTMLElement("dt")}}-Element) und Beschreibungen (bereitgestellt durch {{HTMLElement("dd")}}-Elemente). Häufige Verwendungen für dieses Element sind die Implementierung eines Glossars oder die Anzeige von Metadaten (eine Liste von Schlüssel-Wert-Paaren).

{{EmbedInteractiveExample("pages/tabbed/dl.html", "tabbed-standard")}}

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Barrierefreiheit

Jeder Screenreader präsentiert `<dl>`-Inhalte unterschiedlich, einschließlich Gesamtanzahl, Begriffs-/Definitionskontext und Navigationsmethoden. Diese Unterschiede sind nicht unbedingt Fehler. Ab iOS 14 kündigt VoiceOver an, dass `<dl>`-Inhalte eine Liste sind, wenn mit dem virtuellen Cursor navigiert wird (nicht über den gesamten Lesebefehl). VoiceOver unterstützt keine Listennavigationsbefehle mit `<dl>`. Seien Sie vorsichtig bei der Anwendung von ARIA-`term` und `definition`-Rollen auf `<dl>`-Konstrukte, da VoiceOver (macOS und iOS) anpassen wird, wie sie angekündigt werden.

- [VoiceOver auf iOS 14 unterstützt Beschreibungsliste](https://adrianroselli.com/2020/09/voiceover-on-ios-14-supports-description-lists.html)
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

Beschreibungsliste sind nützlich, um Metadaten als Liste von Schlüssel-Wert-Paaren anzuzeigen.

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

Tipp: Es kann hilfreich sein, einen Schlüssel-Wert-Trenner im CSS zu definieren, z.B.:

```css
dt::after {
  content: ": ";
}
```

### Namens-Wert-Gruppen in `div`-Elemente einwickeln

HTML erlaubt es, jede Namens-Wert-Gruppe in einem `<dl>`-Element in einem {{HTMLElement("div")}}-Element einzuwickeln. Dies kann nützlich sein, wenn [Mikrodaten](/de/docs/Web/HTML/Microdata) verwendet werden oder wenn [globale Attribute](/de/docs/Web/HTML/Global_attributes) auf eine ganze Gruppe angewendet werden sollen, oder für Stilzwecke.

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

Verwenden Sie dieses Element (noch {{HTMLElement("ul")}}-Elemente) nicht einfach, um Einrückungen auf einer Seite zu erstellen. Obwohl es funktioniert, ist dies eine schlechte Praxis und verschleiert die Bedeutung von Beschreibungslisten.

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
          >Fließ-Inhalt</a
        >, und wenn die Kinder des <code>&#x3C;dl></code>-Elements eine Namens-Wert-Gruppe umfassen, greifbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <p>
          Entweder: Null oder mehr Gruppen, die jeweils aus einem oder mehreren
          {{HTMLElement("dt")}}-Elementen bestehen, gefolgt von einem oder mehreren
          {{HTMLElement("dd")}}-Elementen, optional vermischt mit
          {{HTMLElement("script")}}- und
          {{HTMLElement("template")}}-Elementen.<br />Oder: (in
          [WHATWG](/de/docs/Glossary/WHATWG) HTML, [W3C](/de/docs/Glossary/W3C) HTML 5.2
          und später) ein oder mehrere {{HTMLElement("div")}}-Elemente,
          optional vermischt mit {{HTMLElement("script")}}- und
          {{HTMLElement("template")}}-Elementen.
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
          >Fließ-Inhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizierte ARIA-Rolle</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >Keine entsprechende Rolle</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
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
