---
title: "<abbr>: Das Abkürzungselement"
slug: Web/HTML/Reference/Elements/abbr
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

{{HTMLSidebar}}

Das **`<abbr>`** [HTML](/de/docs/Web/HTML)-Element stellt eine Abkürzung oder ein Akronym dar.

Wenn Sie eine Abkürzung oder ein Akronym einfügen, sollten Sie beim ersten Auftreten eine vollständige Ausschreibung des Begriffs in normalem Text angeben und das `<abbr>`-Element nutzen, um die Abkürzung zu kennzeichnen. Dies informiert den Nutzer darüber, was die Abkürzung oder das Akronym bedeutet.

Das optionale [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)-Attribut kann eine Erweiterung für die Abkürzung oder das Akronym bieten, wenn keine vollständige Ausschreibung vorhanden ist. Dies bietet den Benutzeragenten einen Hinweis darauf, wie der Inhalt angekündigt/angezeigt werden soll, während es alle Benutzer darüber informiert, was die Abkürzung bedeutet. Falls vorhanden, muss `title` diese vollständige Beschreibung und nichts anderes enthalten.

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

Dieses Element unterstützt nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes). Das [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)-Attribut hat eine spezielle semantische Bedeutung, wenn es mit dem `<abbr>`-Element verwendet wird; es _muss_ eine vollständige, menschenlesbare Beschreibung oder Erweiterung der Abkürzung enthalten. Dieser Text wird häufig von Browsern als Tooltip präsentiert, wenn der Mauszeiger über dem Element schwebt.

Jedes `<abbr>`-Element, das Sie verwenden, ist unabhängig von allen anderen; die Bereitstellung eines `title` für eines bedeutet nicht, dass automatisch derselbe Erweiterungstext an andere mit demselben Inhaltstext angehängt wird.

## Nutzungshinweise

### Typische Anwendungsfälle

Es ist sicherlich nicht erforderlich, dass alle Abkürzungen mit `<abbr>` ausgezeichnet werden. Es gibt jedoch einige Fälle, in denen es hilfreich ist, dies zu tun:

- Wenn eine Abkürzung verwendet wird und Sie eine Erweiterung oder Definition außerhalb des Flusses des Dokumentinhalts bereitstellen möchten, verwenden Sie `<abbr>` mit einem geeigneten [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title).
- Um eine Abkürzung zu definieren, die dem Leser möglicherweise unbekannt ist, präsentieren Sie den Begriff mit `<abbr>` und normalem Text, der die Definition liefert. Fügen Sie nur dann ein `title`-Attribut hinzu, wenn die Inline-Erweiterung oder -Definition nicht verfügbar ist.
- Wenn das Vorhandensein einer Abkürzung im Text semantisch vermerkt werden muss, ist das `<abbr>`-Element nützlich. Dies kann wiederum für Stil- oder Skriptzwecke verwendet werden.
- Sie können `<abbr>` in Verbindung mit {{HTMLElement("dfn")}} verwenden, um Definitionen für Begriffe festzulegen, die Abkürzungen oder Akronyme sind. Siehe das Beispiel [Definieren einer Abkürzung](#eine_abkürzung_definieren) unten.

### Grammatische Überlegungen

In Sprachen mit [grammatischem Numerus](https://en.wikipedia.org/wiki/Grammatical_number) (das heißt, Sprachen, in denen die Anzahl der Elemente die Grammatik eines Satzes beeinflusst) verwenden Sie denselben grammatischen Numerus in Ihrem `title`-Attribut wie in Ihrem `<abbr>`-Element. Dies ist besonders wichtig in Sprachen mit mehr als zwei Numeri, wie Arabisch, aber auch im Englischen relevant.

## Standardstyling

Der Zweck dieses Elements liegt rein im Komfort des Autors und alle Browser zeigen es standardmäßig inline an ({{cssxref("display", "display: inline")}}), obwohl sein Standardstyling von einem Browser zum anderen variiert:

Einige Browser fügen dem Inhalt des Elements eine gepunktete Unterstreichung hinzu. Andere fügen eine gepunktete Unterstreichung hinzu und konvertieren die Inhalte in Kapitälchen. Andere können es nicht anders gestalten als ein {{HTMLElement("span")}}-Element. Um dieses Styling zu kontrollieren, verwenden Sie {{cssxref('text-decoration')}} und {{cssxref('font-variant')}}.

## Barrierefreiheit

Das einmalige Ausschreiben des Akronyms oder der Abkürzung auf einer Seite ist vorteilhaft, um Menschen zu helfen, es zu verstehen, insbesondere wenn der Inhalt technisch oder Fachjargon ist.

Fügen Sie nur ein `title` hinzu, wenn das Ausschreiben der Abkürzung oder des Akronyms im Text nicht möglich ist. Wenn es einen Unterschied zwischen dem angekündigten Wort oder Satz und dem gibt, was auf dem Bildschirm angezeigt wird, kann das besonders störend sein, insbesondere wenn es sich um Fachjargon handelt, den der Leser möglicherweise nicht versteht.

```html
<p>
  JavaScript Object Notation (<abbr>JSON</abbr>) is a lightweight
  data-interchange format.
</p>
```

{{EmbedLiveSample("Accessibility")}}

Dies ist besonders hilfreich für Menschen, die mit den im Inhalt besprochenen Begriffen oder Konzepten nicht vertraut sind, Menschen, die neu in der Sprache sind, und Menschen mit kognitiven Bedenken.

## Beispiele

### Eine Abkürzung semantisch auszeichnen

Um eine Abkürzung ohne eine Erweiterung oder Beschreibung semantisch auszuzeichnen, verwenden Sie `<abbr>` ohne jegliche Attribute, wie in diesem Beispiel zu sehen.

#### HTML

```html
<p>Using <abbr>HTML</abbr> is fun and easy!</p>
```

#### Ergebnis

{{EmbedLiveSample("Marking_up_an_abbreviation_semantically")}}

### Abkürzungen stylen

Sie können CSS verwenden, um einen benutzerdefinierten Stil für Abkürzungen festzulegen, wie in diesem einfachen Beispiel zu sehen.

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

### Eine Erweiterung bereitstellen

Das Hinzufügen eines [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)-Attributs ermöglicht es Ihnen, eine Erweiterung oder Definition für die Abkürzung oder das Akronym bereitzustellen.

#### HTML

```html
<p>Ashok's joke made me <abbr title="Laugh Out Loud">LOL</abbr> big time.</p>
```

#### Ergebnis

{{EmbedLiveSample("Providing_an_expansion")}}

### Eine Abkürzung definieren

Sie können `<abbr>` in Verbindung mit {{HTMLElement("dfn")}} verwenden, um eine Abkürzung formell zu definieren, wie hier gezeigt.

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
          >Fließinhalt</a
        >,
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasinhalte</a
        >, fühlbare Inhalte
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Inhalte</th>
      <td>
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasinhalte</a
        >
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
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phrasinhalte</a
        >
        akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role"
          >Keine entsprechende Rolle</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubte ARIA-Rollen</th>
      <td>Alle</td>
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
