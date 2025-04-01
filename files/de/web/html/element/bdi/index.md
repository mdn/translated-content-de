---
title: "<bdi>: Das Bidirektionale Isolations-Element"
slug: Web/HTML/Element/bdi
l10n:
  sourceCommit: 215e1b1590b1210152e3570627933c0303171e11
---

{{HTMLSidebar}}

Das **`<bdi>`** [HTML](/de/docs/Web/HTML)-Element weist den bidirektionalen Algorithmus des Browsers an, den darin enthaltenen Text isoliert von seinem umgebenden Text zu behandeln. Es ist besonders nützlich, wenn eine Website dynamisch Text einfügt und die Richtung des eingefügten Textes nicht kennt.

{{InteractiveExample("HTML Demo: &lt;bdi&gt;", "tabbed-standard")}}

```html interactive-example
<h1>World wrestling championships</h1>

<ul>
  <li><bdi class="name">Evil Steven</bdi>: 1st place</li>
  <li><bdi class="name">François fatale</bdi>: 2nd place</li>
  <li><span class="name">سما</span>: 3rd place</li>
  <li><bdi class="name">الرجل القوي إيان</bdi>: 4th place</li>
  <li><span class="name" dir="auto">سما</span>: 5th place</li>
</ul>
```

```css interactive-example
html {
  font-family: sans-serif;
}

bdi {
  /* Add your styles here */
}

.name {
  color: red;
}
```

Bidirektionaler Text ist Text, der sowohl Zeichenfolgen enthalten kann, die links nach rechts (LTR) angeordnet sind, als auch Zeichenfolgen, die rechts nach links (RTL) angeordnet sind, wie beispielsweise ein arabisches Zitat, das in einer englischen Zeichenfolge eingebettet ist. Browser implementieren den [Unicode Bidirectional Algorithm](https://www.w3.org/International/articles/inline-bidi-markup/uba-basics), um damit umzugehen. In diesem Algorithmus wird Zeichen eine implizite Richtung zugewiesen: Beispielsweise werden lateinische Zeichen als LTR betrachtet, während arabische Zeichen als RTL betrachtet werden. Einige andere Zeichen (wie Leerzeichen und einige Satzzeichen) werden als neutral behandelt und ihre Richtung wird basierend auf den umgebenden Zeichen zugewiesen.

Normalerweise erledigt der bidirektionale Algorithmus die richtige Aufgabe, ohne dass der Autor spezielles Markup bereitstellen muss. Gelegentlich benötigt der Algorithmus jedoch Unterstützung. Hier kommt `<bdi>` ins Spiel.

Das `<bdi>`-Element wird verwendet, um einen Textabschnitt zu umschließen und weist den bidirektionalen Algorithmus an, diesen Text isoliert von seinem Umfeld zu behandeln. Dies funktioniert auf zwei Arten:

- Die Richtung von Text, der in `<bdi>` eingebettet ist, _beeinflusst nicht_ die Richtung des umgebenden Textes.
- Die Richtung von Text, der in `<bdi>` eingebettet ist, _wird nicht von_ der Richtung des umgebenden Textes beeinflusst.

Betrachten Sie als Beispiel einen Text wie:

```plain
EMBEDDED-TEXT - 1st place
```

Wenn `EMBEDDED-TEXT` LTR ist, funktioniert das einwandfrei. Aber wenn `EMBEDDED-TEXT` RTL ist, wird `- 1` als RTL-Text behandelt (da es aus neutralen und schwachen Zeichen besteht). Das Ergebnis wird fehlerhaft sein:

```plain
1 - EMBEDDED-TEXTst place
```

Wenn Sie die Richtung von `EMBEDDED-TEXT` im Voraus kennen, können Sie dieses Problem lösen, indem Sie `EMBEDDED-TEXT` in ein {{HTMLElement("span")}} mit dem [`dir`](/de/docs/Web/HTML/Global_attributes/dir)-Attribut umschließen, das auf die bekannte Richtung eingestellt ist. Aber wenn Sie die Richtung nicht kennen - zum Beispiel, weil `EMBEDDED-TEXT` aus einer Datenbank gelesen oder vom Benutzer eingegeben wird - sollten Sie `<bdi>` verwenden, um zu verhindern, dass die Richtung von `EMBEDDED-TEXT` seine Umgebung beeinflusst.

Obwohl derselbe visuelle Effekt durch die Verwendung der CSS-Regel {{cssxref("unicode-bidi", "unicode-bidi: isolate")}} auf ein {{HTMLElement("span")}} oder ein anderes Textformatierungselement erzielt werden kann, sollten HTML-Autoren diesen Ansatz nicht verwenden, da er nicht semantisch ist und Browser CSS-Styling ignorieren dürfen.

Das Einbetten der Zeichen in `<span dir="auto">` hat denselben Effekt wie die Verwendung von `<bdi>`, aber seine Semantik ist weniger eindeutig.

## Attribute

Wie alle anderen HTML-Elemente unterstützt dieses Element die [globalen Attribute](/de/docs/Web/HTML/Global_attributes), bis auf das [`dir`](/de/docs/Web/HTML/Global_attributes/dir)-Attribut, das sich anders als normal verhält: Es ist standardmäßig auf `auto` eingestellt, was bedeutet, dass sein Wert nie vom übergeordneten Element geerbt wird. Das bedeutet, dass der {{Glossary("user_agent", "User-Agent")}} die richtige Richtung basierend auf dem Inhalt des `<bdi>` ermittelt, es sei denn, Sie geben einen Wert von `rtl` oder `ltr` für `dir` an.

## Beispiele

### Kein bdi nur mit LTR

Dieses Beispiel listet die Gewinner eines Wettbewerbs nur mit {{HTMLElement("span")}}-Elementen auf. Wenn die Namen nur LTR-Text enthalten, sieht das Ergebnis einwandfrei aus:

```html
<ul>
  <li><span class="name">Henrietta Boffin</span> - 1st place</li>
  <li><span class="name">Jerry Cruncher</span> - 2nd place</li>
</ul>
```

```css hidden
body {
  border: 1px solid #3f87a6;
  max-width: calc(100% - 40px - 6px);
  padding: 20px;
  width: calc(100% - 40px - 6px);
  border-width: 1px 1px 1px 5px;
}
```

{{ EmbedLiveSample('No_bdi_with_only_LTR','','120') }}

### Kein bdi mit RTL-Text

Dieses Beispiel listet die Gewinner eines Wettbewerbs nur mit {{HTMLElement("span")}}-Elementen auf, und einer der Gewinner hat einen Namen, der aus RTL-Text besteht. In diesem Fall wird das `- 1`, das aus Zeichen mit neutraler oder schwacher Richtung besteht, die Richtung des RTL-Textes annehmen, und das Ergebnis wird fehlerhaft sein:

```html
<ul>
  <li><span class="name">اَلأَعْشَى</span> - 1st place</li>
  <li><span class="name">Jerry Cruncher</span> - 2nd place</li>
</ul>
```

```css hidden
body {
  border: 1px solid #3f87a6;
  max-width: calc(100% - 40px - 6px);
  padding: 20px;
  width: calc(100% - 40px - 6px);
  border-width: 1px 1px 1px 5px;
}
```

{{ EmbedLiveSample('No_bdi_with_RTL_text','','120') }}

### Verwendung von bdi mit LTR- und RTL-Text

Dieses Beispiel listet die Gewinner eines Wettbewerbs mit `<bdi>`-Elementen auf. Diese Elemente weisen den Browser an, den Namen isoliert von seinem eingebetteten Kontext zu behandeln, sodass die Beispielausgabe richtig geordnet ist:

```html
<ul>
  <li><bdi class="name">اَلأَعْشَى</bdi> - 1st place</li>
  <li><bdi class="name">Jerry Cruncher</bdi> - 2nd place</li>
</ul>
```

```css hidden
body {
  border: 1px solid #3f87a6;
  max-width: calc(100% - 40px - 6px);
  padding: 20px;
  width: calc(100% - 40px - 6px);
  border-width: 1px 1px 1px 5px;
}
```

{{ EmbedLiveSample('Using_bdi_with_LTR_and_RTL_text','','120') }}

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
          >Phrasierungsinhalt</a
        >, fühlbarer Inhalt.
      </td>
    </tr>
    <tr>
      <th scope="row">Erlaubter Inhalt</th>
      <td>
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag-Auslassung</th>
      <td>Keine, sowohl der Start- als auch der Endtag sind erforderlich.</td>
    </tr>
    <tr>
      <th scope="row">Erlaubte Eltern</th>
      <td>
        Jedes Element, das
        <a href="/de/docs/Web/HTML/Content_categories#phrasing_content"
          >Phrasierungsinhalt</a
        > akzeptiert.
      </td>
    </tr>
    <tr>
      <th scope="row">Implizite ARIA-Rolle</th>
      <td>
        <code
          ><a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role"
            >generic</a
          ></code
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

- [Inline-Markup und bidirektionaler Text in HTML](https://www.w3.org/International/articles/inline-bidi-markup/)
- [Grundlagen des Unicode Bidirectional Algorithm](https://www.w3.org/International/articles/inline-bidi-markup/uba-basics)
- {{Glossary("Localization", "Lokalisierung")}}
- Verwandtes HTML-Element: {{HTMLElement("bdo")}}
- Verwandte CSS-Eigenschaften: {{cssxref("direction")}}, {{cssxref("unicode-bidi")}}
