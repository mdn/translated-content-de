---
title: Begriffe mit HTML definieren
slug: Learn_web_development/Howto/Solve_HTML_problems/Define_terms_with_HTML
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{QuickLinksWithSubpages("/de/docs/Learn_web_development/Howto/Solve_HTML_problems")}}

HTML bietet mehrere Möglichkeiten, beschreibende Semantik zu vermitteln, sei es inline oder als strukturierte Glossare. In diesem Artikel behandeln wir, wie Sie Schlüsselwörter korrekt kennzeichnen, wenn Sie sie definieren.

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
        Lernen Sie, wie man neue Schlüsselwörter einführt und wie man Definitionslisten erstellt.
      </td>
    </tr>
  </tbody>
</table>

Wenn Sie einen Begriff definiert brauchen, schlagen Sie wahrscheinlich direkt in einem Wörterbuch oder Glossar nach. Wörterbücher und Glossare assoziieren _formal_ Schlüsselwörter mit einer oder mehreren Beschreibungen, wie in diesem Fall:

> - Blau (_Adjektiv_)
>   - : Von einer Farbe wie der Himmel an einem sonnigen Tag.
>     _"Der klare blaue Himmel"_

Aber wir definieren ständig informell Schlüsselwörter, wie hier:

> **Firefox** ist der Webbrowser, der von der Mozilla Foundation erstellt wurde.

Um mit diesen Anwendungsfällen umzugehen, bietet {{Glossary("HTML", "HTML")}} {{Glossary("tag", "Tags")}}, um Beschreibungen und beschriebene Wörter zu kennzeichnen, sodass Ihre Bedeutung richtig zu Ihren Lesern gelangt.

## Anleitung zum Markieren informeller Beschreibungen

In Lehrbüchern ist es üblich, das Schlüsselwort beim ersten Auftreten fett zu schreiben und es sofort zu definieren.

Das machen wir auch in HTML, allerdings ist HTML kein visuelles Medium, deshalb nutzen wir keine fetten Schriftarten. Wir verwenden {{htmlelement("dfn")}}, ein spezielles Element, das nur dazu dient, das erste Auftreten von Schlüsselwörtern zu markieren. Beachten Sie, dass `<dfn>`-Tags um das _zu definierende Wort_ platziert werden, nicht um die Definition (die Definition besteht aus dem gesamten Absatz):

```html
<p><dfn>Firefox</dfn> is the web browser created by the Mozilla Foundation.</p>
```

> [!NOTE]
> Ein weiterer Verwendungszweck für Fett ist die Betonung von Inhalten. Fett an sich ist ein HTML-fremdes Konzept, aber es gibt [Tags, die zur Angabe von Betonung dienen.](/de/docs/Learn_web_development/Core/Structuring_content/Emphasis_and_importance)

### Sonderfall: Abkürzungen

Es ist am besten, [Abkürzungen speziell zu kennzeichnen](/de/docs/Learn_web_development/Core/Structuring_content/Advanced_text_features#abbreviations) mit {{htmlelement("abbr")}}, damit Screenreader sie angemessen lesen und Sie alle Abkürzungen einheitlich bearbeiten können. Wie bei jedem neuen Schlüsselwort sollten Sie Ihre Abkürzungen definieren, wenn sie zum ersten Mal vorkommen.

```html
<p>
  <dfn><abbr>HTML</abbr> (hypertext markup language)</dfn>
  is a description language used to structure documents on the web.
</p>
```

> [!NOTE]
> Die HTML-Spezifikation [legt tatsächlich das `title`-Attribut fest](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-abbr-element) für die Erweiterung der Abkürzung. Dies ist jedoch keine akzeptable Alternative zur Bereitstellung einer integrierten Erweiterung. Der Inhalt von `title` ist für Ihre Benutzer vollständig verborgen, es sei denn, sie verwenden eine Maus und schweben zufällig über der Abkürzung. Die Spezifikation [erkennt dies auch an.](https://html.spec.whatwg.org/multipage/dom.html#attr-title)

### Zugänglichkeit verbessern

{{HTMLElement('dfn')}} markiert das definierte Schlüsselwort und gibt an, dass der aktuelle Absatz das Schlüsselwort definiert. Mit anderen Worten, es besteht eine implizite Beziehung zwischen dem `<dfn>`-Element und seinem Container. Wenn Sie eine formellere Beziehung wünschen oder Ihre Definition nur aus einem Satz statt des ganzen Absatzes besteht, können Sie das [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)-Attribut verwenden, um einen Begriff formeller mit seiner Definition zu verknüpfen:

```html
<p>
  <span id="ff">
    <dfn aria-describedby="ff">Firefox</dfn>
    is the web browser created by the Mozilla Foundation.
  </span>
  You can download it at <a href="https://www.mozilla.org">mozilla.org</a>
</p>
```

Hilfstechnologien können dieses Attribut oft verwenden, um eine Textalternative zu einem bestimmten Begriff zu finden. Sie können `aria-describedby` für jeden Tag verwenden, der ein zu definierendes Schlüsselwort umschließt (nicht nur das `<dfn>`-Element). `aria-describedby` verweist auf die [`id`](/de/docs/Web/HTML/Global_attributes/id) des Elements, das die Beschreibung enthält.

## Anleitung zur Erstellung einer Definitionsliste

Definitionslisten sind genau das, was sie vorgeben zu sein: eine Liste von Begriffen und ihren entsprechenden Beschreibungen (z. B. Definitionslisten, Wörterbucheinträge, FAQs und Schlüssel-Wert-Paare).

> [!NOTE]
> Definitionslisten sind [nicht geeignet zur Markierung von Dialogen](https://html.spec.whatwg.org/multipage/grouping-content.html#the-dl-element), da Konversationen die Sprecher nicht direkt beschreiben. Hier sind [Empfehlungen zur Markierung von Dialogen](https://html.spec.whatwg.org/multipage/semantics-other.html#conversations).

Die beschriebenen Begriffe befinden sich in {{htmlelement("dt")}}-Elementen. Die entsprechende Beschreibung folgt unmittelbar, enthalten in einem oder mehreren {{htmlelement("dd")}}-Elementen. Umschließen Sie die gesamte Definitionsliste mit einem {{htmlelement("dl")}}-Element.

### Ein einfaches Beispiel

Hier ist ein Beispiel zur Beschreibung von Arten von Speisen und Getränken:

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
> Das Grundmuster, wie Sie sehen können, besteht darin, die `<dt>`-Begriffe mit `<dd>`-Beschreibungen abzuwechseln. Wenn zwei oder mehr Begriffe aufeinander folgen, gilt die folgende Beschreibung für alle von ihnen. Wenn zwei oder mehr Beschreibungen aufeinander folgen, gelten sie alle für den zuletzt angegebenen Begriff.

### Verbesserung der visuellen Ausgabe

So zeigt ein grafischer Browser die obige Liste an:

{{EmbedLiveSample("A_simple_example", 600, 180)}}

Wenn Sie möchten, dass die Schlüsselwörter besser hervortreten, könnten Sie versuchen, sie fett zu machen. Denken Sie daran, dass HTML kein visuelles Medium ist; wir benötigen {{Glossary("CSS", "CSS")}} für alle visuellen Effekte. Die CSS-Eigenschaft {{cssxref("font-weight")}} ist, was Sie hier brauchen:

```css
dt {
  font-weight: bold;
}
```

Dies erzeugt das unten leicht lesbare Ergebnis:

{{EmbedLiveSample("How_to_build_a_description_list", 600, 180)}}

## Erfahren Sie mehr

- {{htmlelement("dfn")}}
- {{htmlelement("dl")}}
- {{htmlelement("dt")}}
- {{htmlelement("dd")}}
- [Wie man das aria-describedby-Attribut verwendet](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
