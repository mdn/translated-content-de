---
title: "<abbr>: Das Abkürzungselement"
slug: Web/HTML/Reference/Elements/abbr
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`<abbr>`**-[HTML](/de/docs/Web/HTML)-Element repräsentiert eine Abkürzung oder ein Akronym.

Wenn Sie eine Abkürzung oder ein Akronym einbinden, geben Sie bei der ersten Verwendung eine volle Entfaltung des Begriffs im Klartext an und markieren Sie die Abkürzung mit `<abbr>`. Dies informiert den Benutzer, was die Abkürzung oder das Akronym bedeutet.

Das optionale [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)-Attribut kann eine Erweiterung für die Abkürzung oder das Akronym bereitstellen, wenn keine vollständige Entfaltung vorhanden ist. Dies gibt Benutzeragenten einen Hinweis darauf, wie der Inhalt angekündigt/angezeigt werden soll, während alle Benutzer über die Bedeutung der Abkürzung informiert werden. Wenn vorhanden, muss `title` diese vollständige Beschreibung und sonst nichts enthalten.

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

Dieses Element unterstützt nur die [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes). Das [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)-Attribut hat eine spezifische semantische Bedeutung, wenn es mit dem `<abbr>`-Element verwendet wird; es _muss_ eine vollständige menschenlesbare Beschreibung oder Entfaltung der Abkürzung enthalten. Dieser Text wird oft von Browsern als Tooltip dargestellt, wenn der Mauszeiger über das Element gehalten wird.

Jedes von Ihnen verwendete `<abbr>`-Element ist unabhängig von allen anderen; das Bereitstellen eines `title` für eines fügt nicht automatisch denselben Erweiterungstext zu anderen mit dem gleichen Inhaltstext hinzu.

## Nutzungshinweise

### Typische Anwendungsfälle

Es ist sicherlich nicht erforderlich, dass alle Abkürzungen mit `<abbr>` markiert werden. Es gibt jedoch einige Fälle, in denen es hilfreich ist:

- Wenn eine Abkürzung verwendet wird und Sie eine Entfaltung oder Definition außerhalb des Inhaltsflusses des Dokuments bereitstellen möchten, verwenden Sie `<abbr>` mit einem passenden [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title).
- Um eine Abkürzung zu definieren, die dem Leser möglicherweise unbekannt ist, präsentieren Sie den Begriff mit `<abbr>` und einem Inline-Text, der die Definition liefert. Fügen Sie nur dann ein `title`-Attribut hinzu, wenn die Inline-Erweiterung oder -Definition nicht verfügbar ist.
- Wenn das Vorhandensein einer Abkürzung im Text semantisch vermerkt werden muss, ist das `<abbr>`-Element nützlich. Dies kann wiederum für Stil- oder Skriptingzwecke verwendet werden.
- Sie können `<abbr>` in Verbindung mit {{HTMLElement("dfn")}} verwenden, um Definitionen für Begriffe festzulegen, die Abkürzungen oder Akronyme sind. Siehe das Beispiel [Eine Abkürzung definieren](#definieren_einer_abkürzung) unten.

### Grammatikalische Überlegungen

In Sprachen mit [grammatikalischer Zahl](https://en.wikipedia.org/wiki/Grammatical_number) (das heißt, Sprachen, in denen die Anzahl der Elemente die Grammatik eines Satzes beeinflusst), verwenden Sie in Ihrem `title`-Attribut dieselbe grammatikalische Zahl wie im `<abbr>`-Element. Dies ist besonders wichtig in Sprachen mit mehr als zwei Zahlen, wie Arabisch, aber auch im Englischen relevant.

## Standard-Styling

Der Zweck dieses Elements liegt rein im Komfort des Autors und alle Browser stellen es standardmäßig inline ({{cssxref("display", "display: inline")}}) dar, obwohl sein Standard-Styling von einem Browser zum anderen variiert:

Einige Browser fügen dem Inhalt des Elements eine gepunktete Unterstreichung hinzu. Andere fügen eine gepunktete Unterstreichung hinzu, während der Inhalt in Kapitälchen umgewandelt wird. Andere stylen ihn möglicherweise nicht anders als ein {{HTMLElement("span")}}-Element. Um dieses Styling zu kontrollieren, verwenden Sie {{cssxref('text-decoration')}} und {{cssxref('font-variant')}}.

## Barrierefreiheit

Das Ausschreiben des Akronyms oder der Abkürzung in voller Länge beim ersten Mal, dass es auf einer Seite verwendet wird, ist hilfreich, um den Menschen das Verständnis zu erleichtern, insbesondere wenn der Inhalt technisch ist oder Fachjargon enthält.

Fügen Sie nur dann ein `title` hinzu, wenn es nicht möglich ist, die Abkürzung oder das Akronym im Text zu erweitern. Ein Unterschied zwischen dem angekündigten Wort oder Satz und dem, was auf dem Bildschirm angezeigt wird, kann besonders irritierend sein, insbesondere wenn es sich um technischen Fachjargon handelt, den der Leser möglicherweise nicht kennt.

```html
<p>
  JavaScript Object Notation (<abbr>JSON</abbr>) is a lightweight
  data-interchange format.
</p>
```

{{EmbedLiveSample("Accessibility")}}

Dies ist besonders hilfreich für Menschen, die mit der besprochenen Terminologie oder den behandelten Konzepten nicht vertraut sind, Menschen, die neu in der Sprache sind, und Menschen mit kognitiven Problemen.

## Beispiele

### Semantisches Markieren einer Abkürzung

Um eine Abkürzung zu kennzeichnen, ohne eine Entfaltung oder Beschreibung bereitzustellen, verwenden Sie `<abbr>` ohne Attribute, wie in diesem Beispiel gezeigt.

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

### Bereitstellung einer Erweiterung

Das Hinzufügen eines [`title`](/de/docs/Web/HTML/Reference/Global_attributes/title)-Attributs ermöglicht es Ihnen, eine Erweiterung oder Definition für die Abkürzung oder das Akronym bereitzustellen.

#### HTML

```html
<p>Ashok's joke made me <abbr title="Laugh Out Loud">LOL</abbr> big time.</p>
```

#### Ergebnis

{{EmbedLiveSample("Providing_an_expansion")}}

### Definieren einer Abkürzung

Sie können `<abbr>` zusammen mit {{HTMLElement("dfn")}} verwenden, um eine Abkürzung formeller zu definieren, wie hier gezeigt.

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
        >, erfassbarer Inhalt
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
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl das öffnende als auch das schließende Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Guides/Content_categories#phrasing_content"
          >Phraseninhalt</a
        >
        akzeptiert
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
