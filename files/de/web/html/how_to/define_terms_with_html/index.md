---
title: Begriffe mit HTML definieren
slug: Web/HTML/How_to/Define_terms_with_HTML
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

HTML bietet verschiedene Möglichkeiten, Beschreibungssemantik zu vermitteln, sei es inline oder als strukturierte Glossare. In diesem Artikel werden wir erläutern, wie Sie Schlüsselwörter korrekt kennzeichnen, wenn Sie diese definieren.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Sie sollten wissen, wie man ein
        <a href="/de/docs/Learn_web_development/Getting_started/Your_first_website"
          >einfaches HTML-Dokument erstellt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen Sie, wie man neue Schlüsselwörter einführt und wie man Beschreibungslisten erstellt.
      </td>
    </tr>
  </tbody>
</table>

Wenn Sie einen Begriff definiert haben möchten, greifen Sie wahrscheinlich direkt zu einem Wörterbuch oder Glossar. Wörterbücher und Glossare _assoziieren_ formell Schlüsselwörter mit einer oder mehreren Beschreibungen, wie in diesem Fall:

> - Blau (_Adjektiv_)
>   - : Von einer Farbe wie der Himmel an einem sonnigen Tag.
>     _"Der klare blaue Himmel"_

Aber wir definieren ständig Schlüsselwörter informell, wie hier:

> **Firefox** ist der Webbrowser, der von der Mozilla Foundation erstellt wurde.

Um mit diesen Anwendungsfällen umzugehen, bietet {{Glossary("HTML", "HTML")}} {{Glossary("tag", "Tags")}} an, um Beschreibungen und beschriebene Wörter zu kennzeichnen, damit Ihre Bedeutung für Ihre Leser richtig rüberkommt.

## Anleitung zur Markierung informeller Beschreibungen

In Lehrbüchern ist es üblich, das Schlüsselwort beim ersten Auftreten fett zu drucken und es sofort zu definieren.

Das machen wir auch in HTML, allerdings ist HTML kein visuelles Medium, weshalb wir kein Fett verwenden. Wir verwenden {{htmlelement("dfn")}}, ein spezielles Element, das nur für die Markierung des ersten Auftretens von Schlüsselwörtern ist. Beachten Sie, dass `<dfn>`-Tags um das _zu definierende Wort_ stehen, nicht um die Definition (die Definition besteht aus dem gesamten Absatz):

```html
<p><dfn>Firefox</dfn> is the web browser created by the Mozilla Foundation.</p>
```

> [!NOTE]
> Eine andere Verwendung für Fett ist die Hervorhebung von Inhalten. Fett an sich ist ein HTML-fremdes Konzept, aber es gibt [Tags zur Kennzeichnung von Hervorhebungen.](/de/docs/Learn_web_development/Core/Structuring_content/Emphasis_and_importance)

### Sonderfall: Abkürzungen

Es ist am besten, [Abkürzungen speziell zu kennzeichnen](/de/docs/Learn_web_development/Core/Structuring_content/Advanced_text_features#abbreviations) mit {{htmlelement("abbr")}}, damit Bildschirmlesegeräte sie angemessen lesen und Sie alle Abkürzungen einheitlich behandeln können. Genau wie bei jedem neuen Schlüsselwort sollten Sie Ihre Abkürzungen beim ersten Auftreten definieren.

```html
<p>
  <dfn><abbr>HTML</abbr> (hypertext markup language)</dfn>
  is a description language used to structure documents on the web.
</p>
```

> [!NOTE]
> Die HTML-Spezifikation [setzt tatsächlich das `title`-Attribut](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-abbr-element) für die Erweiterung der Abkürzung ein. Dies ist jedoch keine akzeptable Alternative für die Bereitstellung einer Inline-Erweiterung. Der Inhalt von `title` ist für Ihre Benutzer vollständig verborgen, es sei denn, sie verwenden eine Maus und fahren zufällig mit dem Mauszeiger über die Abkürzung. Die Spezifikation [erkennt dies ebenfalls an.](https://html.spec.whatwg.org/multipage/dom.html#attr-title)

### Verbesserung der Barrierefreiheit

{{HTMLElement('dfn')}} kennzeichnet das definierte Schlüsselwort und zeigt an, dass der aktuelle Absatz das Schlüsselwort definiert. Mit anderen Worten, es besteht eine implizite Beziehung zwischen dem `<dfn>`-Element und seinem Container. Wenn Sie eine formellere Beziehung wünschen oder Ihre Definition nur aus einem Satz anstelle des gesamten Absatzes besteht, können Sie das [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)-Attribut verwenden, um einen Begriff formeller mit seiner Definition zu verknüpfen:

```html
<p>
  <span id="ff">
    <dfn aria-describedby="ff">Firefox</dfn>
    is the web browser created by the Mozilla Foundation.
  </span>
  You can download it at <a href="https://www.mozilla.org">mozilla.org</a>
</p>
```

Assistierende Technologien können dieses Attribut oft verwenden, um eine Textalternative für einen gegebenen Begriff zu finden. Sie können `aria-describedby` auf jedem Tag verwenden, das ein zu definierendes Schlüsselwort umschließt (nicht nur das `<dfn>`-Element). `aria-describedby` verweist auf die [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) des Elements, das die Beschreibung enthält.

## So erstellen Sie eine Beschreibungslisten

Beschreibungslisten sind genau das, was ihr Name besagt: eine Liste von Begriffen und deren passenden Beschreibungen (z. B. Definitionslisten, Wörterbucheinträge, FAQs und Schlüssel-Wert-Paare).

> [!NOTE]
> Beschreibungslisten sind [nicht geeignet, um Dialog zu kennzeichnen,](https://html.spec.whatwg.org/multipage/grouping-content.html#the-dl-element) da Konversationen die Sprecher nicht direkt beschreiben. Hier sind [Empfehlungen zur Kennzeichnung von Dialogen](https://html.spec.whatwg.org/multipage/semantics-other.html#conversations).

Die beschriebenen Begriffe gehen in {{htmlelement("dt")}}-Elemente. Die passende Beschreibung folgt unmittelbar danach, in einem oder mehreren {{htmlelement("dd")}}-Elementen enthalten. Schließen Sie die gesamte Beschreibungslisten mit einem {{htmlelement("dl")}}-Element ein.

### Ein einfaches Beispiel

Hier ist ein Beispiel, das Arten von Speisen und Getränken beschreibt:

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
> Das Grundmuster, wie Sie sehen können, besteht darin, `<dt>`-Begriffe mit `<dd>`-Beschreibungen abzuwechseln. Wenn zwei oder mehr Begriffe in einer Reihe auftreten, gilt die folgende Beschreibung für alle. Wenn zwei oder mehr Beschreibungen in einer Reihe auftreten, gelten sie alle für den zuletzt genannten Begriff.

### Verbesserung der visuellen Ausgabe

So zeigt ein grafischer Browser die obige Liste an:

{{EmbedLiveSample("A_simple_example", 600, 180)}}

Wenn Sie möchten, dass die Schlüsselwörter besser auffallen, könnten Sie versuchen, sie fett zu drucken. Denken Sie daran, HTML ist kein visuelles Medium; wir benötigen {{Glossary("CSS", "CSS")}} für alle visuellen Effekte. Die CSS-{{cssxref("font-weight")}}-Eigenschaft ist das, was Sie hier benötigen:

```css
dt {
  font-weight: bold;
}
```

Dies führt zu dem unten etwas lesbareren Ergebnis:

{{EmbedLiveSample("How_to_build_a_description_list", 600, 180)}}

## Erfahren Sie mehr

- {{htmlelement("dfn")}}
- {{htmlelement("dl")}}
- {{htmlelement("dt")}}
- {{htmlelement("dd")}}
- [Anleitung zur Verwendung des aria-describedby-Attributs](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
