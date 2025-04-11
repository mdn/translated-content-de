---
title: "<abbr>: Das Abkürzungselement"
slug: Web/HTML/Reference/Elements/abbr
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

Das **`<abbr>`** [HTML](/de/docs/Web/HTML) Element repräsentiert eine Abkürzung oder ein Akronym.

Wenn Sie eine Abkürzung oder ein Akronym einfügen, geben Sie beim ersten Gebrauch eine vollständige Ausschreibung des Begriffs im Klartext zusammen mit dem `<abbr>` an, um die Abkürzung auszuzeichnen. Dies informiert den Benutzer darüber, was die Abkürzung oder das Akronym bedeutet.

Das optionale [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title) Attribut kann eine Erweiterung für die Abkürzung oder das Akronym liefern, wenn keine vollständige Ausschreibung vorhanden ist. Dies dient als Hinweis für Benutzeragenten, wie der Inhalt angekündigt/angezeigt werden soll und informiert alle Benutzer über die Bedeutung der Abkürzung. Wenn es vorhanden ist, muss `title` diese vollständige Beschreibung und nichts anderes enthalten.

{{InteractiveExample("HTML Demo: &lt;abbr&gt;", "tabbed-shorter")}}

```html interactive-example
<p>
  You can use <abbr>CSS</abbr> (Cascading Style Sheets) to style your
  <abbr>HTML</abbr> (HyperText Markup Language). Using style sheets, you can
  keep your <abbr>CSS</abbr> presentation layer and <abbr>HTML</abbr> content
  layer separate. This is called "separation of concerns."
</p>
```

```css interactive-example
abbr {
  font-style: italic;
  color: chocolate;
}
```

## Attribute

Dieses Element unterstützt nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes). Das [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title) Attribut hat eine spezifische semantische Bedeutung, wenn es mit dem `<abbr>` Element verwendet wird; es _muss_ eine vollständige, für Menschen lesbare Beschreibung oder Erweiterung der Abkürzung enthalten. Dieser Text wird häufig von Browsern als Tooltip präsentiert, wenn der Mauszeiger über das Element bewegt wird.

Jedes `<abbr>` Element, das Sie verwenden, ist unabhängig von allen anderen; die Bereitstellung eines `title` für ein Element führt nicht automatisch dazu, dass derselbe Erweiterungstext an andere mit demselben Inhaltstext angehängt wird.

## Nutzungshinweise

### Typische Anwendungsfälle

Es ist sicherlich nicht erforderlich, dass alle Abkürzungen mit `<abbr>` ausgezeichnet werden. Es gibt jedoch einige Fälle, in denen es hilfreich ist, dies zu tun:

- Wenn eine Abkürzung verwendet wird und Sie eine Erweiterung oder Definition außerhalb des Dokumentsinhalts bereitstellen möchten, verwenden Sie `<abbr>` mit einem passenden [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title).
- Um eine Abkürzung zu definieren, die dem Leser möglicherweise unbekannt ist, präsentieren Sie den Begriff mit `<abbr>` und einem erläuternden Text. Fügen Sie ein `title` Attribut nur hinzu, wenn die inhaltliche Erweiterung oder Definition nicht verfügbar ist.
- Wenn die Präsenz einer Abkürzung im Text semantisch vermerkt werden muss, ist das `<abbr>` Element nützlich. Dies kann wiederum für Styling- oder Skripting-Zwecke verwendet werden.
- Sie können `<abbr>` in Verbindung mit {{HTMLElement("dfn")}} verwenden, um Definitionen von Begriffen zu etablieren, die Abkürzungen oder Akronyme darstellen. Siehe das Beispiel [Definition einer Abkürzung](#definition_einer_abkürzung) unten.

### Grammatikalische Überlegungen

In Sprachen mit [grammatikalischer Anzahl](https://en.wikipedia.org/wiki/Grammatical_number) (also Sprachen, in denen die Anzahl der Elemente die Grammatik eines Satzes beeinflusst), verwenden Sie im `title` Attribut dieselbe grammatikalische Anzahl wie im `<abbr>` Element. Dies ist besonders wichtig in Sprachen mit mehr als zwei Zahlen, wie Arabisch, aber auch im Englischen relevant.

## Standardstyling

Der Zweck dieses Elements ist rein zur Bequemlichkeit des Autors und alle Browser zeigen es standardmäßig inline an ({{cssxref("display", "display: inline")}}), obwohl sein Standardstyling von einem Browser zum anderen variiert:

Einige Browser fügen dem Inhalt des Elements eine gepunktete Unterstreichung hinzu. Andere fügen eine gepunktete Unterstreichung hinzu, während sie den Inhalt in Kapitälchen umwandeln. Andere wiederum stylen es möglicherweise nicht anders als ein {{HTMLElement("span")}} Element. Um dieses Styling zu kontrollieren, verwenden Sie {{cssxref('text-decoration')}} und {{cssxref('font-variant')}}.

## Barrierefreiheit

Das erste Mal, wenn ein Akronym oder eine Abkürzung auf einer Seite verwendet wird, ist es vorteilhaft, sie vollständig auszuschreiben, um den Menschen zu helfen, es zu verstehen, insbesondere wenn der Inhalt technisch oder branchenspezifisch ist.

Fügen Sie nur dann ein `title` Attribut hinzu, wenn das Erweitern der Abkürzung oder des Akronyms im Text nicht möglich ist. Ein Unterschied zwischen dem angekündigten Wort oder Satz und dem, was auf dem Bildschirm angezeigt wird, kann besonders störend sein, wenn es sich um technische Begriffe handelt, mit denen der Leser möglicherweise nicht vertraut ist.

```html
<p>
  JavaScript Object Notation (<abbr>JSON</abbr>) is a lightweight
  data-interchange format.
</p>
```

{{EmbedLiveSample("Accessibility")}}

Dies ist besonders hilfreich für Menschen, die mit den im Inhalt besprochenen Begriffen oder Konzepten nicht vertraut sind, Menschen, die neu in der Sprache sind, und Menschen mit kognitiven Einschränkungen.

## Beispiele

### Semantisches Auszeichnen einer Abkürzung

Um eine Abkürzung ohne Erweiterung oder Beschreibung auszuzeichnen, verwenden Sie `<abbr>` ohne Attribute, wie in diesem Beispiel gezeigt.

#### HTML

```html
<p>Using <abbr>HTML</abbr> is fun and easy!</p>
```

#### Ergebnis

{{EmbedLiveSample("Marking_up_an_abbreviation_semantically")}}

### Styling von Abkürzungen

Sie können CSS verwenden, um einen benutzerdefinierten Stil für Abkürzungen festzulegen, wie in diesem einfachen Beispiel gezeigt.

#### HTML

```html
<p>Using <abbr>CSS</abbr>, you can style your abbreviations!</p>
```

#### CSS

```css
abbr {
  font-variant: all-small-caps;
}
```

#### Ergebnis

{{EmbedLiveSample("Styling_abbreviations")}}

### Bereitstellung einer Erweiterung

Das Hinzufügen eines [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title) Attributs ermöglicht es Ihnen, eine Erweiterung oder Definition für die Abkürzung oder das Akronym bereitzustellen.

#### HTML

```html
<p>Ashok's joke made me <abbr title="Laugh Out Loud">LOL</abbr> big time.</p>
```

#### Ergebnis

{{EmbedLiveSample("Providing_an_expansion")}}

### Definition einer Abkürzung

Sie können `<abbr>` zusammen mit {{HTMLElement("dfn")}} verwenden, um eine formellere Definition einer Abkürzung zu geben, wie hier gezeigt.

#### HTML

```html
<p>
  <dfn id="html"><abbr title="HyperText Markup Language">HTML</abbr> </dfn> is a
  markup language used to create the semantics and structure of a web page.
</p>

<p>
  A <dfn id="spec">Specification</dfn> (<abbr>spec</abbr>) is a document that
  outlines in detail how a technology or API is intended to function and how it
  is accessed.
</p>
```

#### Ergebnis

{{EmbedLiveSample("Defining_an_abbreviation", 600, 120)}}

## Technische Zusammenfassung

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/de/docs/Web/HTML/Guides/Content_categories"
          >Inhaltskategorien</a>
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flussinhalt</a>,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierung</a>, wahrnehmbarer Inhalt
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a> akzeptiert
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >Keine entsprechende Rolle</a>
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

- [Verwendung des `<abbr>` Elements](/de/docs/Learn_web_development/Core/Structuring_content/Advanced_text_features#abbreviations)
