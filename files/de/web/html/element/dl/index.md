---
title: "<dl>: Das Beschreibungsliste-Element"
slug: Web/HTML/Element/dl
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

{{HTMLSidebar}}

Das **`<dl>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert eine Beschreibungsliste. Das Element umfasst eine Liste von Gruppen aus Begriffen (spezifiziert mit dem {{HTMLElement("dt")}}-Element) und Beschreibungen (bereitgestellt durch {{HTMLElement("dd")}}-Elemente). Häufige Verwendungen dieses Elements sind die Implementierung eines Glossars oder die Anzeige von Metadaten (eine Liste von Schlüssel-Wert-Paaren).

{{EmbedInteractiveExample("pages/tabbed/dl.html", "tabbed-standard")}}

## Attribute

Dieses Element enthält nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes).

## Barrierefreiheit

Jeder Screenreader zeigt `<dl>`-Inhalte unterschiedlich an, einschließlich der Gesamtanzahl, des Kontexts von Begriffen/Beschreibungen und der Navigationsmethoden. Diese Unterschiede sind nicht unbedingt Fehler. Ab iOS 14 wird VoiceOver ankündigen, dass `<dl>`-Inhalte eine Liste sind, wenn mit dem virtuellen Cursor navigiert wird (nicht über den Alle-lesen-Befehl). VoiceOver unterstützt keine Listennavigationskommandos mit `<dl>`. Seien Sie vorsichtig beim Anwenden von ARIA-`term`- und `definition`-Rollen auf `<dl>`-Konstrukte, da VoiceOver (macOS und iOS) anpasst, wie diese angesagt werden.

- [VoiceOver auf iOS 14 unterstützt Beschreibunglisten](https://adrianroselli.com/2020/09/voiceover-on-ios-14-supports-description-lists.html)
- [Kurzer Hinweis zur Unterstützung von Beschreibunglisten](https://adrianroselli.com/2022/12/brief-note-on-description-list-support.html)

## Beispiele

### Einzelner Begriff und Beschreibung

```html
<dl>
  <dt>Firefox</dt>
  <dd>
    Ein kostenloser, quelloffener, plattformübergreifender, grafischer Webbrowser, entwickelt von der 
    Mozilla Corporation und Hunderten von Freiwilligen.
  </dd>

  <!-- Weitere Begriffe und Beschreibungen -->
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
    Ein kostenloser, quelloffener, plattformübergreifender, grafischer Webbrowser, entwickelt von der 
    Mozilla Corporation und Hunderten von Freiwilligen.
  </dd>

  <!-- Weitere Begriffe und Beschreibungen -->
</dl>
```

#### Ergebnis

{{EmbedLiveSample("Multiple_terms_single_description")}}

### Ein Begriff, mehrere Beschreibungen

```html
<dl>
  <dt>Firefox</dt>
  <dd>
    Ein kostenloser, quelloffener, plattformübergreifender, grafischer Webbrowser, entwickelt von der 
    Mozilla Corporation und Hunderten von Freiwilligen.
  </dd>
  <dd>
    Der Rote Panda, auch bekannt als Kleiner Panda, Wah, Bärenkatze oder Firefox, ist ein 
    überwiegend pflanzenfressendes Säugetier, etwas größer als eine Hauskatze (60 cm lang).
  </dd>

  <!-- Weitere Begriffe und Beschreibungen -->
</dl>
```

#### Ergebnis

{{EmbedLiveSample("Single_term_multiple_descriptions")}}

### Mehrere Begriffe und Beschreibungen

Es ist auch möglich, mehrere Begriffe mit mehreren entsprechenden Beschreibungen zu definieren, indem die obigen Beispiele kombiniert werden.

### Metadaten

Beschreibunglisten sind nützlich zur Anzeige von Metadaten als Liste von Schlüssel-Wert-Paaren.

```html
<dl>
  <dt>Name</dt>
  <dd>Godzilla</dd>
  <dt>Geburtsjahr</dt>
  <dd>1952</dd>
  <dt>Geburtsort</dt>
  <dd>Japan</dd>
  <dt>Farbe</dt>
  <dd>Grün</dd>
</dl>
```

#### Ergebnis

{{EmbedLiveSample('Metadata')}}

Tipp: Es kann nützlich sein, einen Schlüssel-Wert-Trenner im CSS zu definieren, wie etwa:

```css
dt::after {
  content: ": ";
}
```

### Name-Wert-Gruppen in `div`-Elementen einhüllen

HTML erlaubt es, jede Name-Wert-Gruppe in einem `<dl>`-Element in einem {{HTMLElement("div")}}-Element einzuhüllen. Dies kann nützlich sein bei Verwendung von [Microdata](/de/docs/Web/HTML/Microdata) oder wenn [globale Attribute](/de/docs/Web/HTML/Global_attributes) auf eine ganze Gruppe angewendet werden oder für Designzwecke.

```html
<dl>
  <div>
    <dt>Name</dt>
    <dd>Godzilla</dd>
  </div>
  <div>
    <dt>Geburtsjahr</dt>
    <dd>1952</dd>
  </div>
  <div>
    <dt>Geburtsort</dt>
    <dd>Japan</dd>
  </div>
  <div>
    <dt>Farbe</dt>
    <dd>Grün</dd>
  </div>
</dl>
```

#### Ergebnis

{{EmbedLiveSample('Wrapping name-value groups in `div` elements')}}

## Anmerkungen

Verwenden Sie dieses Element (noch {{HTMLElement("ul")}}-Elemente) nicht, um lediglich Einrückungen auf einer Seite zu erzeugen. Auch wenn es funktioniert, ist dies eine schlechte Praxis und verschleiert die Bedeutung von Beschreibunglisten.

Um die Einrückung eines Beschreibungbegriffs zu ändern, verwenden Sie die [CSS](/de/docs/Web/CSS) {{cssxref("margin")}}-Eigenschaft.

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Content_categories">Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content">Flussinhalt</a>, und wenn die Kinder des <code>&#x3C;dl></code>-Elements eine Name-Wert-Gruppe beinhalten, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <p>
          Entweder: Null oder mehr Gruppen, die jeweils aus einem oder mehreren {{HTMLElement("dt")}}-Elementen gefolgt von einem oder mehreren {{HTMLElement("dd")}}-Elementen bestehen, optional durchmischt mit {{HTMLElement("script")}}- und {{HTMLElement("template")}}-Elementen.<br />Oder: (in {{Glossary("WHATWG")}} HTML, {{Glossary("W3C")}} HTML 5.2 und später) Ein oder mehrere {{HTMLElement("div")}}-Elemente, optional durchmischt mit {{HTMLElement("script")}}- und {{HTMLElement("template")}}-Elementen.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Anfangs- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das <a href="/de/docs/Web/HTML/Content_categories#flow_content">Flussinhalt</a> akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA Rolle</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">Keine entsprechende Rolle</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA Rollen</th>
      <td>
        <a href="/de/docs/Web/Accessibility/ARIA/Roles/group_role"><code>group</code></a>,
        <code><a href="/de/docs/Web/Accessibility/ARIA/Roles/list_role">list</a></code>, <a href="/de/docs/Web/Accessibility/ARIA/Roles/none_role"><code>none</code></a>, <a href="/de/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>{{domxref("HTMLDListElement")}}</td>
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
