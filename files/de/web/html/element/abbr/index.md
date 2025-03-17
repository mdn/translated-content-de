---
title: "<abbr>: Das Abkürzungselement"
slug: Web/HTML/Element/abbr
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar}}

Das **`<abbr>`** [HTML](/de/docs/Web/HTML) Element repräsentiert eine Abkürzung oder ein Akronym.

Wenn Sie eine Abkürzung oder ein Akronym einfügen, geben Sie bei der ersten Verwendung eine vollständige Ausweitung des Begriffs im Klartext an und markieren Sie die Abkürzung mit `<abbr>`. Dies informiert den Benutzer darüber, was die Abkürzung oder das Akronym bedeutet.

Das optionale [`title`](/de/docs/Web/HTML/Global_attributes/title) Attribut kann eine Ausweitung für die Abkürzung oder das Akronym bereitstellen, wenn keine vollständige Ausweitung vorhanden ist. Dies gibt einen Hinweis an Benutzeragenten, wie der Inhalt angesagt/angezeigt werden soll und informiert alle Benutzer darüber, was die Abkürzung bedeutet. Wenn vorhanden, muss `title` diese vollständige Beschreibung und nichts anderes enthalten.

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

Dieses Element unterstützt nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes). Das [`title`](/de/docs/Web/HTML/Global_attributes/title) Attribut hat eine spezifische semantische Bedeutung, wenn es mit dem `<abbr>`-Element verwendet wird; es _muss_ eine vollständige menschenlesbare Beschreibung oder Ausweitung der Abkürzung enthalten. Dieser Text wird oft von Browsern als Tooltip angezeigt, wenn der Mauszeiger über das Element schwebt.

Jedes `<abbr>`-Element, das Sie verwenden, ist unabhängig von allen anderen; das Bereitstellen eines `title` für ein Element fügt nicht automatisch denselben Ausweitungstext für andere mit demselben Inhaltstext hinzu.

## Verwendungshinweise

### Typische Anwendungsfälle

Es ist sicherlich nicht erforderlich, dass alle Abkürzungen mit `<abbr>` ausgezeichnet werden. Es gibt jedoch einige Fälle, in denen es hilfreich ist, dies zu tun:

- Wenn eine Abkürzung verwendet wird und Sie eine Ausweitung oder Definition außerhalb des Dokumenteninhalts bereitstellen möchten, verwenden Sie `<abbr>` mit einem geeigneten [`title`](/de/docs/Web/HTML/Global_attributes/title).
- Um eine Abkürzung zu definieren, die dem Leser unbekannt sein könnte, präsentieren Sie den Begriff mit `<abbr>` und integriertem Text, der die Definition liefert. Fügen Sie ein `title` Attribut nur hinzu, wenn die integrierte Ausweitung oder Definition nicht verfügbar ist.
- Wenn das Vorhandensein einer Abkürzung im Text semantisch hervorgehoben werden soll, ist das `<abbr>`-Element nützlich. Dies kann wiederum für Styling- oder Skriptzwecke verwendet werden.
- Sie können `<abbr>` zusammen mit {{HTMLElement("dfn")}} verwenden, um Definitionen für Begriffe festzulegen, die Abkürzungen oder Akronyme sind. Siehe das Beispiel [Definieren einer Abkürzung](#definieren_einer_abkürzung) unten.

### Grammatikalische Überlegungen

In Sprachen mit [grammatischem Numerus](https://de.wikipedia.org/wiki/Grammatischer_Numerus) (d.h. Sprachen, in denen die Anzahl der Elemente die Grammatik eines Satzes beeinflusst), verwenden Sie denselben grammatischen Numerus in Ihrem `title` Attribut wie im `<abbr>` Element. Dies ist besonders wichtig in Sprachen mit mehr als zwei Numeri wie Arabisch, aber auch relevant für Englisch.

## Standardstil

Der Zweck dieses Elements dient nur der Bequemlichkeit des Autors, und alle Browser zeigen es standardmäßig inline an ({{cssxref("display", "display: inline")}}), obwohl sein Standardstil von einem Browser zum anderen variiert:

Einige Browser fügen den Inhalten des Elements eine gepunktete Unterstreichung hinzu. Andere fügen eine gepunktete Unterstreichung hinzu, während die Inhalte in Kapitälchen umgewandelt werden. Andere stylen es möglicherweise nicht anders als ein {{HTMLElement("span")}}-Element. Um diese Stilgebung zu steuern, verwenden Sie {{cssxref('text-decoration')}} und {{cssxref('font-variant')}}.

## Barrierefreiheit

Das Ausbuchstabieren des Akronyms oder der Abkürzung bei der ersten Verwendung auf einer Seite ist hilfreich, um Menschen das Verständnis zu erleichtern, insbesondere bei technischem Inhalt oder Branchenjargon.

Fügen Sie nur dann ein `title` hinzu, wenn es nicht möglich ist, die Abkürzung oder das Akronym im Text auszubuchstabieren. Eine Diskrepanz zwischen dem angesagten Wort oder Ausdruck und dem, was auf dem Bildschirm angezeigt wird, insbesondere wenn es sich um technischen Jargon handelt, mit dem der Leser möglicherweise nicht vertraut ist, kann verwirrend sein.

```html
<p>
  JavaScript Object Notation (<abbr>JSON</abbr>) is a lightweight
  data-interchange format.
</p>
```

{{EmbedLiveSample("Accessibility")}}

Dies ist besonders hilfreich für Menschen, die mit den im Inhalt diskutierten Begriffen oder Konzepten nicht vertraut sind, Menschen, die neu in der Sprache sind, und Menschen mit kognitiven Bedenken.

## Beispiele

### Semantisches Markieren einer Abkürzung

Um eine Abkürzung zu markieren, ohne eine Ausweitung oder Beschreibung bereitzustellen, verwenden Sie `<abbr>` ohne Attribute, wie in diesem Beispiel gezeigt.

#### HTML

```html
<p>Using <abbr>HTML</abbr> is fun and easy!</p>
```

#### Ergebnis

{{EmbedLiveSample("Marking_up_an_abbreviation_semantically")}}

### Stilgebung von Abkürzungen

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

### Bereitstellen einer Ausweitung

Das Hinzufügen eines [`title`](/de/docs/Web/HTML/Global_attributes/title) Attributs ermöglicht es Ihnen, eine Ausweitung oder Definition für die Abkürzung oder das Akronym bereitzustellen.

#### HTML

```html
<p>Ashok's joke made me <abbr title="Laugh Out Loud">LOL</abbr> big time.</p>
```

#### Ergebnis

{{EmbedLiveSample("Providing_an_expansion")}}

### Definieren einer Abkürzung

Sie können `<abbr>` in Verbindung mit {{HTMLElement("dfn")}} verwenden, um eine Abkürzung formeller zu definieren, wie hier gezeigt.

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
        <a href="/de/docs/Web/HTML/Content_categories"
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#flow_content"
          >Flussinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasing-Inhalt</a
        >, greifbarer Inhalt
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasing-Inhalt</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das startende als auch das schließende Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasing-Inhalt</a
        >
        akzeptiert
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
      <th scope="row">Zulässige ARIA-Rollen</th>
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

- [Verwendung des `<abbr>`-Elements](/de/docs/Learn_web_development/Core/Structuring_content/Advanced_text_features#abbreviations)
