---
title: "<abbr>: Das Abkürzungselement"
slug: Web/HTML/Element/abbr
l10n:
  sourceCommit: 38cdfeff63f67ebea8effa2866d5a18efdf7e62a
---

{{HTMLSidebar}}

Das **`<abbr>`** [HTML](/de/docs/Web/HTML)-Element repräsentiert eine Abkürzung oder ein Akronym.

Beim Einfügen einer Abkürzung oder eines Akronyms sollten Sie beim ersten Auftreten des Begriffs eine vollständige Ausschreibung im Klartext zusammen mit dem `<abbr>` angeben, um die Abkürzung zu kennzeichnen. Dies informiert den Benutzer darüber, was die Abkürzung oder das Akronym bedeutet.

Das optionale [`title`](/de/docs/Web/HTML/Global_attributes#title)-Attribut kann eine Ausschreibung für die Abkürzung oder das Akronym bereitstellen, wenn keine vollständige Ausschreibung vorhanden ist. Dies gibt Benutzeragenten einen Hinweis darauf, wie der Inhalt angezeigt oder angesagt werden soll, während alle Benutzer darüber informiert werden, was die Abkürzung bedeutet. Falls vorhanden, muss `title` diese vollständige Beschreibung und nichts anderes enthalten.

{{EmbedInteractiveExample("pages/tabbed/abbr.html", "tabbed-shorter")}}

## Attribute

Dieses Element unterstützt nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes). Das [`title`](/de/docs/Web/HTML/Global_attributes#title)-Attribut hat eine spezifische semantische Bedeutung, wenn es mit dem `<abbr>`-Element verwendet wird; es _muss_ eine vollständige menschenlesbare Beschreibung oder Aussprache der Abkürzung enthalten. Dieser Text wird oft von Browsern als Tooltip angezeigt, wenn der Mauscursor über das Element bewegt wird.

Jedes `<abbr>`-Element, das Sie verwenden, ist von allen anderen unabhängig; die Bereitstellung eines `title` für eines bedeutet nicht, dass derselbe Expansionstext automatisch an andere mit demselben Inhaltstext angehängt wird.

## Verwendungsnotizen

### Typische Anwendungsfälle

Es ist sicherlich nicht erforderlich, dass alle Abkürzungen mit `<abbr>` ausgezeichnet werden. Es gibt jedoch einige Fälle, in denen es hilfreich ist, dies zu tun:

- Wenn eine Abkürzung verwendet wird und Sie eine Ausschreibung oder Definition außerhalb des Flusses des Dokuments bereitstellen möchten, verwenden Sie `<abbr>` mit einem geeigneten [`title`](/de/docs/Web/HTML/Global_attributes#title).
- Um eine Abkürzung zu definieren, die dem Leser möglicherweise unbekannt ist, präsentieren Sie den Begriff unter Verwendung von `<abbr>` und im Text eingebettete Definition. Fügen Sie ein `title`-Attribut nur dann hinzu, wenn die im Text eingebettete Ausschreibung oder Definition nicht verfügbar ist.
- Wenn das Vorhandensein einer Abkürzung im Text semantisch vermerkt werden muss, ist das `<abbr>`-Element nützlich. Dies kann wiederum für Styling- oder Skriptzwecke verwendet werden.
- Sie können `<abbr>` zusammen mit {{HTMLElement("dfn")}} verwenden, um Definitionen für Begriffe zu erstellen, die Abkürzungen oder Akronyme sind. Siehe das Beispiel [Definieren einer Abkürzung](#eine_abkürzung_definieren) unten.

### Grammatikalische Überlegungen

In Sprachen mit [grammatischem Numerus](https://de.wikipedia.org/wiki/Grammatischer_Numerus) (d. h. Sprachen, bei denen die Anzahl der Elemente die Grammatik eines Satzes beeinflusst), verwenden Sie denselben grammatischen Numerus in Ihrem `title`-Attribut wie in Ihrem `<abbr>`-Element. Dies ist besonders wichtig in Sprachen mit mehr als zwei Numeri, wie Arabisch, aber auch im Englischen relevant.

## Standard-Styling

Der Zweck dieses Elements liegt rein in der Bequemlichkeit des Autors und alle Browser stellen es standardmäßig inline dar ({{cssxref("display", "display: inline")}}), auch wenn sein Standard-Styling von Browser zu Browser variiert:

Einige Browser fügen den Inhalt des Elements mit einer gestrichelten Unterstreichung versehen. Andere fügen eine gestrichelte Unterstreichung hinzu, während der Inhalt in Kapitälchen umgewandelt wird. Andere mögen es nicht anders als ein {{HTMLElement("span")}}-Element stylen. Um dieses Styling zu steuern, verwenden Sie {{cssxref('text-decoration')}} und {{cssxref('font-variant')}}.

## Barrierefreiheit

Das vollständige Ausschreiben des Akronyms oder der Abkürzung beim ersten Vorkommen auf einer Seite hilft, dass Menschen es besser verstehen, insbesondere wenn der Inhalt technisch oder branchenspezifisch ist.

Fügen Sie nur dann ein `title` hinzu, wenn die Ausschreibung der Abkürzung oder des Akronyms im Text nicht möglich ist. Ein Unterschied zwischen dem angekündigten Wort oder Satz und dem, was auf dem Bildschirm angezeigt wird, insbesondere wenn es sich um ein technisches Fachjargon handelt, das dem Leser möglicherweise nicht vertraut ist, kann störend sein.

```html
<p>
  JavaScript Object Notation (<abbr>JSON</abbr>) ist ein leichtgewichtiges
  Datenaustauschformat.
</p>
```

{{EmbedLiveSample("Accessibility")}}

Dies ist besonders hilfreich für Menschen, die mit den im Inhalt besprochenen Begriffen oder Konzepten nicht vertraut sind, Menschen, die neu in der Sprache sind, und Menschen mit kognitiven Einschränkungen.

## Beispiele

### Semantische Auszeichnung einer Abkürzung

Um eine Abkürzung zu kennzeichnen, ohne eine Ausschreibung oder Beschreibung bereitzustellen, verwenden Sie `<abbr>` ohne Attribute, wie in diesem Beispiel gezeigt.

#### HTML

```html
<p>Using <abbr>HTML</abbr> is fun and easy!</p>
```

#### Ergebnis

{{EmbedLiveSample("Marking_up_an_abbreviation_semantically")}}

### Abkürzungen stylen

Sie können CSS verwenden, um einen benutzerdefinierten Stil für Abkürzungen festzulegen, wie in diesem einfachen Beispiel gezeigt wird.

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

### Eine Ausschreibung bereitstellen

Durch das Hinzufügen eines [`title`](/de/docs/Web/HTML/Global_attributes#title)-Attributs können Sie eine Ausschreibung oder Definition für die Abkürzung oder das Akronym bereitstellen.

#### HTML

```html
<p>Ashok's joke made me <abbr title="Laugh Out Loud">LOL</abbr> big time.</p>
```

#### Ergebnis

{{EmbedLiveSample("Providing_an_expansion")}}

### Eine Abkürzung definieren

Sie können `<abbr>` zusammen mit {{HTMLElement("dfn")}} verwenden, um eine Abkürzung formeller zu definieren, wie hier gezeigt wird.

#### HTML

```html
<p>
  <dfn id="html"><abbr title="HyperText Markup Language">HTML</abbr> </dfn> ist eine
  Markupsprache, die verwendet wird, um die Semantik und Struktur einer Webseite zu erstellen.
</p>

<p>
  Eine <dfn id="spec">Spezifikation</dfn> (<abbr>spec</abbr>) ist ein Dokument, das
  im Detail beschreibt, wie eine Technologie oder API funktionieren soll und wie sie
  zugänglich ist.
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
          >Flow-Inhalt</a
        >,
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >, greifbarer Inhalt
      </td>
    </tr>
    <tr>
      <th scope="row">Zulässiger Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Start- als auch der End-Tag sind obligatorisch.</td>
    </tr>
    <tr>
      <th scope="row">Zulässige Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >
        akzeptiert
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
      <th scope="row">Zulässige ARIA-Rollen</th>
      <td>Beliebig</td>
    </tr>
    <tr>
      <th scope="row">DOM-Schnittstelle</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung des `<abbr>`-Elements](/de/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting#abbreviations)
