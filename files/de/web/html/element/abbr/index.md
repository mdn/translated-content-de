---
title: "<abbr>: Das Abkürzungselement"
slug: Web/HTML/Element/abbr
l10n:
  sourceCommit: 38cdfeff63f67ebea8effa2866d5a18efdf7e62a
---

{{HTMLSidebar}}

Das **`<abbr>`** [HTML](/de/docs/Web/HTML) Element repräsentiert eine Abkürzung oder ein Akronym.

Beim Einfügen einer Abkürzung oder eines Akronyms sollten Sie beim ersten Gebrauch eine vollständige Ausschreibung des Begriffs im Klartext angeben und die `<abbr>` verwenden, um die Abkürzung zu kennzeichnen. Dies informiert den Benutzer darüber, was die Abkürzung oder das Akronym bedeutet.

Das optionale [`title`](/de/docs/Web/HTML/Global_attributes#title)-Attribut kann eine Erweiterung für die Abkürzung oder das Akronym bereitstellen, wenn keine vollständige Ausschreibung vorliegt. Dies bietet Agenten einen Hinweis darauf, wie der Inhalt angekündigt/angezeigt werden soll, während alle Benutzer über die Bedeutung der Abkürzung informiert werden. Falls vorhanden, muss `title` diese vollständige Beschreibung enthalten und nichts anderes.

{{EmbedInteractiveExample("pages/tabbed/abbr.html", "tabbed-shorter")}}

## Attribute

Dieses Element unterstützt nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes). Das [`title`](/de/docs/Web/HTML/Global_attributes#title)-Attribut hat eine spezifische semantische Bedeutung, wenn es mit dem `<abbr>`-Element verwendet wird; es _muss_ eine vollständige, menschlich lesbare Beschreibung oder Erweiterung der Abkürzung enthalten. Dieser Text wird in der Regel von Browsern als Tooltip angezeigt, wenn der Mauszeiger über das Element schwebt.

Jedes verwendete `<abbr>`-Element ist unabhängig von allen anderen; das Angebot eines `title` für eines fügt den anderen mit demselben Inhaltstext nicht automatisch denselben Erweiterungstext bei.

## Hinweise zur Nutzung

### Typische Anwendungsfälle

Es ist sicherlich nicht erforderlich, dass alle Abkürzungen mit `<abbr>` ausgezeichnet werden. Es gibt jedoch einige Fälle, in denen dies hilfreich ist:

- Wenn eine Abkürzung verwendet wird und Sie eine Erweiterung oder Definition außerhalb des Flusses des Dokumentsinhalts bereitstellen möchten, verwenden Sie `<abbr>` mit einem geeigneten [`title`](/de/docs/Web/HTML/Global_attributes#title).
- Um eine Abkürzung zu definieren, die dem Leser möglicherweise unbekannt ist, präsentieren Sie den Begriff mit `<abbr>` und eingebettetem Text, der die Definition bereitstellt. Fügen Sie nur dann ein `title`-Attribut hinzu, wenn die eingebettete Erweiterung oder Definition nicht verfügbar ist.
- Wenn die Präsenz einer Abkürzung im Text semantisch hervorgehoben werden muss, ist das `<abbr>`-Element nützlich. Dies kann wiederum für Stil- oder Skriptzwecke verwendet werden.
- Sie können `<abbr>` zusammen mit {{HTMLElement("dfn")}} verwenden, um Definitionen für Begriffe zu erstellen, die Abkürzungen oder Akronyme sind. Siehe das Beispiel [Definieren einer Abkürzung](#definieren_einer_abkürzung) unten.

### Grammatikalische Überlegungen

In Sprachen mit [grammatischem Numerus](https://en.wikipedia.org/wiki/Grammatical_number) (d. h. Sprachen, in denen die Anzahl der Elemente die Grammatik eines Satzes beeinflusst), verwenden Sie denselben grammatischen Numerus in Ihrem `title`-Attribut wie im `<abbr>`-Element. Dies ist besonders wichtig in Sprachen mit mehr als zwei Nummern, wie Arabisch, aber auch relevant im Englischen.

## Standardmäßige Stilgebung

Der Zweck dieses Elements liegt ausschließlich im Komfort des Autors, und alle Browser zeigen es standardmäßig inline an ({{cssxref("display", "display: inline")}}), obwohl seine Standardstilgebung von Browser zu Browser unterschiedlich ist:

Einige Browser fügen dem Inhalt des Elements eine gepunktete Unterstreichung hinzu. Andere fügen eine gepunktete Unterstreichung hinzu und wandeln den Inhalt in Kapitälchen um. Andere wiederum können es nicht anders als ein {{HTMLElement("span")}}-Element stylen. Um diese Stilgebung zu kontrollieren, verwenden Sie {{cssxref("text-decoration")}} und {{cssxref("font-variant")}}.

## Barrierefreiheit

Das vollständige Ausschreiben des Akronyms oder der Abkürzung beim ersten Gebrauch auf einer Seite ist hilfreich, um Menschen das Verständnis zu erleichtern, insbesondere wenn der Inhalt technische oder branchenspezifische Fachbegriffe enthält.

Fügen Sie nur dann ein `title` hinzu, wenn die Erweiterung der Abkürzung oder des Akronyms im Text nicht möglich ist. Ein Unterschied zwischen dem angekündigten Wort oder Satz und dem, was auf dem Bildschirm angezeigt wird, kann insbesondere bei technischem Jargon, der dem Leser möglicherweise nicht geläufig ist, irritierend sein.

```html
<p>
  JavaScript Object Notation (<abbr>JSON</abbr>) is a lightweight
  data-interchange format.
</p>
```

{{EmbedLiveSample("Accessibility")}}

Dies ist besonders hilfreich für Personen, die mit der im Inhalt diskutierten Terminologie oder den Konzepten nicht vertraut sind, für Personen, die neu in der Sprache sind, und für Personen mit kognitiven Beeinträchtigungen.

## Beispiele

### Semantische Markierung einer Abkürzung

Um eine Abkürzung ohne Bereitstellung einer Erweiterung oder Beschreibung zu markieren, verwenden Sie `<abbr>` ohne Attribute, wie in diesem Beispiel zu sehen.

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

### Bereitstellung einer Erweiterung

Das Hinzufügen eines [`title`](/de/docs/Web/HTML/Global_attributes#title)-Attributs ermöglicht es Ihnen, eine Erweiterung oder Definition für die Abkürzung oder das Akronym bereitzustellen.

#### HTML

```html
<p>Ashok's joke made me <abbr title="Laugh Out Loud">LOL</abbr> big time.</p>
```

#### Ergebnis

{{EmbedLiveSample("Providing_an_expansion")}}

### Definieren einer Abkürzung

Sie können `<abbr>` zusammen mit {{HTMLElement("dfn")}} verwenden, um eine Abkürzung formaler zu definieren, wie hier gezeigt.

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
          >Fließende Inhalte</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >, greifbarer Inhalt
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das Start- als auch das Endtag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phraseninhalt</a
        > akzeptiert
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

- [Verwendung des `<abbr>` Elements](/de/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting#abbreviations)
