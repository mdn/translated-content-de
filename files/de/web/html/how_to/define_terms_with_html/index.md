---
title: Begriffe mit HTML definieren
slug: Web/HTML/How_to/Define_terms_with_HTML
l10n:
  sourceCommit: cd701f10306c8b0b9690532ff808df826818a04f
---

{{HTMLSidebar}}

HTML bietet mehrere Möglichkeiten, um Beschreibungstexte semantisch zu vermitteln, sei es inline oder als strukturierte Glossare. In diesem Artikel werden wir erläutern, wie Sie Schlüsselwörter ordnungsgemäß kennzeichnen, wenn Sie diese definieren.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie sollten mit der Erstellung eines
        <a href="/de/docs/Learn_web_development/Getting_started/Your_first_website"
          >einfachen HTML-Dokuments</a
        >
        vertraut sein.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Erlernen, wie neue Schlüsselwörter eingeführt und wie Beschreibungslisten erstellt werden.
      </td>
    </tr>
  </tbody>
</table>

Wenn Sie einen Begriff definiert brauchen, gehen Sie wahrscheinlich direkt zu einem Wörterbuch oder Glossar. Wörterbücher und Glossare assoziieren _formell_ Schlüsselwörter mit einer oder mehreren Beschreibungen, wie in diesem Fall:

> - Blau (_Adjektiv_)
>   - : Von einer Farbe wie der Himmel an einem sonnigen Tag.
>     _"Der klare blaue Himmel"_

Aber wir definieren ständig Schlüsselwörter informell, wie hier:

> **Firefox** ist der Webbrowser, der von der Mozilla Foundation erstellt wurde.

Um mit diesen Anwendungsfällen umzugehen, bietet {{Glossary("HTML", "HTML")}} {{Glossary("tag", "Tags")}} an, um Beschreibungen und beschriebene Wörter zu kennzeichnen, sodass Ihre Bedeutung richtig bei Ihren Lesern ankommt.

## Anleitung zur Kennzeichnung informeller Beschreibungen

In Lehrbüchern wird das Schlüsselwort beim ersten Auftreten häufig fett gedruckt und sofort definiert.

Das machen wir auch in HTML, außer dass HTML kein visuelles Medium ist und wir deshalb nicht fett verwenden. Wir verwenden {{htmlelement("dfn")}}, ein spezielles Element, nur um das erste Auftreten von Schlüsselwörtern zu kennzeichnen. Beachten Sie, dass `<dfn>`-Tags um das _zu definierende Wort_ stehen und nicht um die Definition (die Definition besteht aus dem gesamten Absatz):

```html
<p><dfn>Firefox</dfn> is the web browser created by the Mozilla Foundation.</p>
```

> [!NOTE]
> Eine andere Verwendung von Fett ist, um Inhalte hervorzuheben. Fett selbst ist ein Konzept, das in HTML fremd ist, aber es gibt [Tags, um Hervorhebung anzuzeigen.](/de/docs/Learn_web_development/Core/Structuring_content/Emphasis_and_importance)

### Besonderer Fall: Abkürzungen

Es ist am besten, [Abkürzungen speziell zu kennzeichnen](/de/docs/Learn_web_development/Core/Structuring_content/Advanced_text_features#abbreviations) mit {{htmlelement("abbr")}}, damit Screenreader sie angemessen lesen und Sie auf alle Abkürzungen einheitlich zugreifen können. Genau wie bei jedem neuen Schlüsselwort sollten Sie Ihre Abkürzungen definieren, wenn sie zum ersten Mal vorkommen.

```html
<p>
  <dfn><abbr>HTML</abbr> (hypertext markup language)</dfn>
  is a description language used to structure documents on the web.
</p>
```

> [!NOTE]
> Die HTML-Spezifikation [stellt das `title`-Attribut](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-abbr-element) tatsächlich zur Verfügung, um die Abkürzung zu erweitern. Dies ist jedoch keine akzeptable Alternative, um eine Inline-Erweiterung bereitzustellen. Der Inhalt von `title` ist für Ihre Nutzer vollständig verborgen, es sei denn, sie verwenden eine Maus und fahren zufällig über die Abkürzung. Die Spezifikation [erkennt dies auch an.](https://html.spec.whatwg.org/multipage/dom.html#attr-title)

### Verbesserung der Zugänglichkeit

{{HTMLElement('dfn')}} kennzeichnet das definierte Schlüsselwort und zeigt an, dass der aktuelle Absatz das Schlüsselwort definiert. Mit anderen Worten, es gibt eine implizite Beziehung zwischen dem `<dfn>`-Element und seinem Container. Wenn Sie eine formalere Beziehung wünschen oder Ihre Definition nur aus einem Satz besteht und nicht aus dem gesamten Absatz, können Sie das [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)-Attribut verwenden, um einen Begriff formeller mit seiner Definition zu verknüpfen:

```html
<p>
  <span id="ff">
    <dfn aria-describedby="ff">Firefox</dfn>
    is the web browser created by the Mozilla Foundation.
  </span>
  You can download it at <a href="https://www.mozilla.org">mozilla.org</a>
</p>
```

Hilfstechnologien können dieses Attribut oft verwenden, um eine Textalternative zu einem bestimmten Begriff zu finden. Sie können `aria-describedby` an jedem Tag verwenden, das ein Schlüsselwort einschließt, das definiert werden soll (nicht nur das `<dfn>`-Element). `aria-describedby` verweist auf die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) des Elements, das die Beschreibung enthält.

## Anleitung zum Erstellen einer Beschreibungslist

Beschreibungslisten sind genau das, was sie behaupten zu sein: eine Liste von Begriffen und ihren passenden Beschreibungen (z. B. Definitionslisten, Wörterbucheinträge, FAQs und Schlüssel-Wert-Paare).

> [!NOTE]
> Beschreibungslisten sind [nicht geeignet zur Markierung von Dialogen,](https://html.spec.whatwg.org/multipage/grouping-content.html#the-dl-element) da Gespräche die Sprecher nicht direkt beschreiben. Hier sind [Empfehlungen zur Markierung von Dialogen](https://html.spec.whatwg.org/multipage/semantics-other.html#conversations).

Die beschriebenen Begriffe befinden sich in {{htmlelement("dt")}}-Elementen. Die passende Beschreibung folgt unmittelbar und ist in einem oder mehreren {{htmlelement("dd")}}-Elementen enthalten. Schließen Sie die gesamte Beschreibungslist mit einem {{htmlelement("dl")}}-Element ein.

### Ein einfaches Beispiel

Hier ist ein Beispiel, das Arten von Lebensmitteln und Getränken beschreibt:

```html
<dl>
  <dt>jambalaya</dt>
  <dd>
    rice-based entree typically containing chicken, sausage, seafood, and spices
  </dd>

  <dt>sukiyaki</dt>
  <dd>
    Japanese specialty consisting of thinly sliced meat, vegetables, and
    noodles, cooked in sake and soy sauce
  </dd>

  <dt>chianti</dt>
  <dd>dry Italian red wine originating in Tuscany</dd>
</dl>
```

> [!NOTE]
> Das Grundmuster, wie Sie sehen können, besteht darin, `<dt>`-Begriffe mit `<dd>`-Beschreibungen abzuwechseln. Wenn zwei oder mehr Begriffe in Folge auftreten, gilt die folgende Beschreibung für alle. Wenn zwei oder mehr Beschreibungen in Folge auftreten, gelten alle für den zuletzt genannten Begriff.

### Verbesserung der visuellen Ausgabe

So stellt ein grafischer Browser die obige Liste dar:

{{EmbedLiveSample("A_simple_example", 600, 180)}}

Wenn Sie möchten, dass die Schlüsselwörter besser hervorgehoben werden, können Sie versuchen, sie fett zu drucken. Denken Sie daran, HTML ist kein visuelles Medium; wir benötigen {{Glossary("CSS", "CSS")}} für alle visuellen Effekte. Die CSS-Eigenschaft {{cssxref("font-weight")}} ist, was Sie hier benötigen:

```css
dt {
  font-weight: bold;
}
```

Dies erzeugt das leicht besser lesbare Ergebnis unten:

{{EmbedLiveSample("How_to_build_a_description_list", 600, 180)}}

## Mehr erfahren

- {{htmlelement("dfn")}}
- {{htmlelement("dl")}}
- {{htmlelement("dt")}}
- {{htmlelement("dd")}}
- [Anleitung zur Verwendung des aria-describedby-Attributs](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
