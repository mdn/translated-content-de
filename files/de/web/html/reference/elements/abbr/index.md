---
title: "`<abbr>` HTML-Kürzel-Element"
short-title: <abbr>
slug: Web/HTML/Reference/Elements/abbr
l10n:
  sourceCommit: 599ae8b7ad414e91df473d91983f4ffc5cafabb3
---

Das **`<abbr>`** [HTML](/de/docs/Web/HTML)-Element stellt eine Abkürzung oder ein Akronym dar.

Wenn Sie eine Abkürzung oder ein Akronym verwenden, geben Sie eine vollständige Entfaltung des Begriffs im Klartext bei der ersten Verwendung an und verwenden Sie `<abbr>`, um die Abkürzung zu markieren. Dies informiert den Benutzer darüber, was die Abkürzung oder das Akronym bedeutet.

Das optionale [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)-Attribut kann eine Entfaltung der Abkürzung oder des Akronyms bereitstellen, wenn keine vollständige Entfaltung vorhanden ist. Dies gibt Nutzeragenten einen Hinweis darauf, wie der Inhalt angekündigt/angezeigt werden soll, während alle Benutzer informiert werden, was die Abkürzung bedeutet. Falls vorhanden, muss `title` diese vollständige Beschreibung und nichts anderes enthalten.

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

Dieses Element unterstützt nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes). Das [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)-Attribut hat eine spezielle semantische Bedeutung, wenn es mit dem `<abbr>`-Element verwendet wird; es _muss_ eine vollständige, menschenlesbare Beschreibung oder Entfaltung der Abkürzung enthalten. Dieser Text wird in der Regel von Browsern als Tooltip angezeigt, wenn der Mauszeiger über das Element gehalten wird.

Jedes `<abbr>`-Element, das Sie verwenden, ist unabhängig von allen anderen; die Bereitstellung eines `title` für eines bindet nicht automatisch denselben Entfaltungstext an andere mit demselben Inhaltstext.

## Verwendungshinweise

### Typische Anwendungsfälle

Es ist sicherlich nicht erforderlich, dass alle Abkürzungen mit `<abbr>` ausgezeichnet werden. Es gibt jedoch einige Fälle, in denen es hilfreich ist, dies zu tun:

- Wenn eine Abkürzung verwendet wird und Sie eine Entfaltung oder Definition außerhalb des Inhaltsflusses des Dokuments bereitstellen möchten, verwenden Sie `<abbr>` mit einem geeigneten [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title).
- Um eine Abkürzung zu definieren, die dem Leser möglicherweise nicht geläufig ist, präsentieren Sie den Begriff mit `<abbr>` und einem Inline-Text, der die Definition liefert. Fügen Sie nur dann ein `title`-Attribut hinzu, wenn die Inline-Entfaltung oder Definition nicht verfügbar ist.
- Wenn die Präsenz einer Abkürzung im Text semantisch notiert werden muss, ist das `<abbr>`-Element nützlich. Dies kann wiederum für Stil- oder Skriptzwecke verwendet werden.
- Sie können `<abbr>` zusammen mit {{HTMLElement("dfn")}} verwenden, um Definitionen für Begriffe zu erstellen, die Abkürzungen oder Akronyme sind. Siehe das Beispiel [Definieren einer Abkürzung](#eine_abkürzung_definieren) unten.

### Grammatikalische Überlegungen

In Sprachen mit [grammatikalischem Numerus](https://de.wikipedia.org/wiki/Numerus) (d.h. Sprachen, in denen die Anzahl der Elemente die Grammatik eines Satzes beeinflusst), verwenden Sie denselben grammatikalischen Numerus in Ihrem `title`-Attribut wie innerhalb Ihres `<abbr>`-Elements. Dies ist besonders wichtig in Sprachen mit mehr als zwei Numeri, wie Arabisch, aber auch in Englisch relevant.

## Standardstil

Der Zweck dieses Elements liegt rein im Komfort des Autors und alle Browser zeigen es standardmäßig inline an ({{cssxref("display", "display: inline")}}), obwohl sich dessen Standardstil von einem Browser zum anderen unterscheidet:

Einige Browser fügen dem Inhalt des Elements eine gepunktete Unterstreichung hinzu. Andere fügen eine gepunktete Unterstreichung hinzu und konvertieren den Inhalt in Großbuchstaben. Andere stylen es möglicherweise nicht anders als ein {{HTMLElement("span")}}-Element. Um diesen Stil zu kontrollieren, verwenden Sie {{cssxref('text-decoration')}} und {{cssxref('font-variant')}}.

## Barrierefreiheit

Das erste Mal, dass ein Akronym oder eine Abkürzung in vollem Umfang auf einer Seite ausgeschrieben wird, ist hilfreich, um Menschen beim Verständnis zu unterstützen, insbesondere wenn der Inhalt technisch oder Fachjargon ist.

Fügen Sie nur dann ein `title` hinzu, wenn es nicht möglich ist, die Abkürzung oder das Akronym im Text zu erweitern. Eine Abweichung zwischen dem angekündigten Wort oder Ausdruck und dem, was auf dem Bildschirm angezeigt wird, insbesondere wenn es sich um technischen Jargon handelt, mit dem der Leser möglicherweise nicht vertraut ist, kann verstörend wirken.

```html
<p>
  JavaScript Object Notation (<abbr>JSON</abbr>) is a lightweight
  data-interchange format.
</p>
```

{{EmbedLiveSample("Accessibility")}}

Dies ist besonders hilfreich für Menschen, die mit der inhaltlich diskutierten Terminologie oder den Konzepten nicht vertraut sind, für Menschen, die neu in der Sprache sind, und für Menschen mit kognitiven Beeinträchtigungen.

## Beispiele

### Eine Abkürzung semantisch auszeichnen

Um eine Abkürzung ohne Bereitstellung einer Entfaltung oder Beschreibung auszuzeichnen, verwenden Sie `<abbr>` ohne Attribute, wie in diesem Beispiel.

#### HTML

```html
<p>Using <abbr>HTML</abbr> is fun and easy!</p>
```

#### Ergebnis

{{EmbedLiveSample("Marking_up_an_abbreviation_semantically")}}

### Abkürzungen stylen

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

### Eine Entfaltung bereitstellen

Durch Hinzufügen eines [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)-Attributs können Sie eine Entfaltung oder Definition für die Abkürzung oder das Akronym bereitstellen.

#### HTML

```html
<p>Ashok's joke made me <abbr title="Laugh Out Loud">LOL</abbr> big time.</p>
```

#### Ergebnis

{{EmbedLiveSample("Providing_an_expansion")}}

### Eine Abkürzung definieren

Sie können `<abbr>` in Kombination mit {{HTMLElement("dfn")}} verwenden, um eine Abkürzung formeller zu definieren, wie hier gezeigt.

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
          >Inhaltskategorien</a
        >
      </th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flussinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >, greifbarer Inhalt
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Weglassen von Tags</th>
      <td>Keine, sowohl das Anfangs- als auch das End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phraseninhalt</a
        > akzeptiert
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
